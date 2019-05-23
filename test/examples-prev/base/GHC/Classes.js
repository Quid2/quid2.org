
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
    this.hs_zdfEqChar = new $hs.Data(1);
    this.hs_zdfEqZMZN = new $hs.Func(1);
    this.hs_zdfEqInteger = new $hs.Data(1);
    this.hs_zdfEqFloat = new $hs.Data(1);
    this.hs_zdfEqDouble = new $hs.Data(1);
    this.hs_zdfOrdChar = new $hs.Data(1);
    this.hs_zdfOrdZMZN = new $hs.Func(2);
    this.hs_zdfOrdInteger = new $hs.Data(1);
    this.hs_zdfOrdFloat = new $hs.Data(1);
    this.hs_zdfOrdDouble = new $hs.Data(1);
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
    this.hs_zdfOrdZLz2cUZR = new $hs.Func(3);
    this.hs_zdfOrdZLz2cUz2cUZR = new $hs.Func(4);
    this.hs_zdfOrdZLz2cUz2cUz2cUZR = new $hs.Func(5);
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUZR = new $hs.Func(6);
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(7);
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(8);
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(9);
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(10);
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(11);
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(12);
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(13);
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(14);
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(15);
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(16);
    this.hs_zdfOrdBool = new $hs.Data(1);
    this.hs_zdfOrdOrdering = new $hs.Data(1);
    this.hs_DZCEq = new $hs.Func(2);
    this.hs_DZCOrd = new $hs.Func(8);
    this.hs_zeze.notEvaluated = true;
    this.hs_zeze.evaluate = function (hs_tpl26DhRN) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_tpl26DhRN);
    };
    this.hs_zsze.notEvaluated = true;
    this.hs_zsze.evaluate = function (hs_tpl26DhRT) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_tpl26DhRT);
    };
    this.hs_zdp1Ord.notEvaluated = true;
    this.hs_zdp1Ord.evaluate = function (hs_tpl26DhRZ) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_tpl26DhRZ);
    };
    this.hs_compare.notEvaluated = true;
    this.hs_compare.evaluate = function (hs_tpl26DhSb) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_tpl26DhSb);
    };
    this.hs_zl.notEvaluated = true;
    this.hs_zl.evaluate = function (hs_tpl26DhSn) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_tpl26DhSn);
    };
    this.hs_zgze.notEvaluated = true;
    this.hs_zgze.evaluate = function (hs_tpl26DhSz) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_tpl26DhSz);
    };
    this.hs_zg.notEvaluated = true;
    this.hs_zg.evaluate = function (hs_tpl26DhSL) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_tpl26DhSL);
    };
    this.hs_zlze.notEvaluated = true;
    this.hs_zlze.evaluate = function (hs_tpl26DhSX) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_tpl26DhSX);
    };
    this.hs_max.notEvaluated = true;
    this.hs_max.evaluate = function (hs_tpl26DhT9) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_tpl26DhT9);
    };
    this.hs_min.notEvaluated = true;
    this.hs_min.evaluate = function (hs_tpl26DhTl) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_tpl26DhTl);
    };
    this.hs_zddmmin.notEvaluated = true;
    this.hs_zddmmin.evaluate = function (hs_zddOrd726DhTz, hs_x26DhTA, hs_y26DhTB) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726DhTz, hs_x26DhTA, hs_y26DhTB);
    };
    this.hs_zddmmax.notEvaluated = true;
    this.hs_zddmmax.evaluate = function (hs_zddOrd726DhTG, hs_x26DhTH, hs_y26DhTI) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726DhTG, hs_x26DhTH, hs_y26DhTI);
    };
    this.hs_zddmzlze.notEvaluated = true;
    this.hs_zddmzlze.evaluate = function (hs_zddOrd726DhTN, hs_x26DhTO, hs_y26DhTP) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726DhTN, hs_x26DhTO, hs_y26DhTP);
    };
    this.hs_zddmzg.notEvaluated = true;
    this.hs_zddmzg.evaluate = function (hs_zddOrd726DhTU, hs_x26DhTV, hs_y26DhTW) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726DhTU, hs_x26DhTV, hs_y26DhTW);
    };
    this.hs_zddmzgze.notEvaluated = true;
    this.hs_zddmzgze.evaluate = function (hs_zddOrd726DhU1, hs_x26DhU2, hs_y26DhU3) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726DhU1, hs_x26DhU2, hs_y26DhU3);
    };
    this.hs_zddmzl.notEvaluated = true;
    this.hs_zddmzl.evaluate = function (hs_zddOrd726DhU8, hs_x26DhU9, hs_y26DhUa) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726DhU8, hs_x26DhU9, hs_y26DhUa);
    };
    this.hs_zddmcompare.notEvaluated = true;
    this.hs_zddmcompare.evaluate = function (hs_zddOrd726DhUf, hs_eta26DhUh, hs_eta126DhUi) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddOrd726DhUf, hs_eta26DhUh, hs_eta126DhUi);
    };
    this.hs_not.notEvaluated = true;
    this.hs_not.evaluate = function (hs_ds26DhUm) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_ds26DhUm);
    };
    this.hs_zddmzeze.notEvaluated = true;
    this.hs_zddmzeze.evaluate = function (hs_zddEq326DhUr, hs_x26DhUs, hs_y26DhUt) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326DhUr, hs_x26DhUs, hs_y26DhUt);
    };
    this.hs_zddmzsze.notEvaluated = true;
    this.hs_zddmzsze.evaluate = function (hs_zddEq326DhUy, hs_x26DhUz, hs_y26DhUA) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326DhUy, hs_x26DhUz, hs_y26DhUA);
    };
    this.hs_zbzb.notEvaluated = true;
    this.hs_zbzb.evaluate = function (hs_ds26DhUE, hs_ds126DhUG) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_ds26DhUE, hs_ds126DhUG);
    };
    this.hs_zaza.notEvaluated = true;
    this.hs_zaza.evaluate = function (hs_ds26DhUJ, hs_x26DhUL) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_ds26DhUJ, hs_x26DhUL);
    };
    this.hs_zdfEqChar.notEvaluated = true;
    this.hs_zdfEqChar.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_zdfEqZMZN.notEvaluated = true;
    this.hs_zdfEqZMZN.evaluate = function (hs_zddEq326DhVr) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326DhVr);
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
    this.hs_zdfOrdChar.notEvaluated = true;
    this.hs_zdfOrdChar.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_zdfOrdZMZN.notEvaluated = true;
    this.hs_zdfOrdZMZN.evaluate = function (hs_zddEq326DhZ9, hs_zddOrd726DhZa) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326DhZ9, hs_zddOrd726DhZa);
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
    this.hs_zdfEqZLZR.notEvaluated = true;
    this.hs_zdfEqZLZR.evaluate = function () {
        $hs.modules.GHCziClasses.loadDependencies();
        return this;
    };
    this.hs_zdfEqZLz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUZR.evaluate = function (hs_zddEq326Di4Z, hs_zddEq426Di50) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326Di4Z, hs_zddEq426Di50);
    };
    this.hs_zdfEqZLz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUZR.evaluate = function (hs_zddEq326Di5M, hs_zddEq426Di5N, hs_zddEq526Di5O) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326Di5M, hs_zddEq426Di5N, hs_zddEq526Di5O);
    };
    this.hs_zdfEqZLz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Di6K, hs_zddEq426Di6L, hs_zddEq526Di6M, hs_zddEq626Di6N) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326Di6K, hs_zddEq426Di6L, hs_zddEq526Di6M, hs_zddEq626Di6N);
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Di7T, hs_zddEq426Di7U, hs_zddEq526Di7V, hs_zddEq626Di7W, hs_zddEq726Di7X) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326Di7T, hs_zddEq426Di7U, hs_zddEq526Di7V, hs_zddEq626Di7W, hs_zddEq726Di7X);
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Di9d, hs_zddEq426Di9e, hs_zddEq526Di9f, hs_zddEq626Di9g, hs_zddEq726Di9h, hs_zddEq826Di9i) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326Di9d, hs_zddEq426Di9e, hs_zddEq526Di9f, hs_zddEq626Di9g, hs_zddEq726Di9h, hs_zddEq826Di9i);
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326DiaI, hs_zddEq426DiaJ, hs_zddEq526DiaK, hs_zddEq626DiaL, hs_zddEq726DiaM, hs_zddEq826DiaN, hs_zddEq926DiaO) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326DiaI, hs_zddEq426DiaJ, hs_zddEq526DiaK, hs_zddEq626DiaL, hs_zddEq726DiaM, hs_zddEq826DiaN, hs_zddEq926DiaO);
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Dico, hs_zddEq426Dicp, hs_zddEq526Dicq, hs_zddEq626Dicr, hs_zddEq726Dics, hs_zddEq826Dict, hs_zddEq926Dicu, hs_zddEq1026Dicv) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326Dico, hs_zddEq426Dicp, hs_zddEq526Dicq, hs_zddEq626Dicr, hs_zddEq726Dics, hs_zddEq826Dict, hs_zddEq926Dicu, hs_zddEq1026Dicv);
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Dief, hs_zddEq426Dieg, hs_zddEq526Dieh, hs_zddEq626Diei, hs_zddEq726Diej, hs_zddEq826Diek, hs_zddEq926Diel, hs_zddEq1026Diem, hs_zddEq1126Dien) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326Dief, hs_zddEq426Dieg, hs_zddEq526Dieh, hs_zddEq626Diei, hs_zddEq726Diej, hs_zddEq826Diek, hs_zddEq926Diel, hs_zddEq1026Diem, hs_zddEq1126Dien);
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Digh, hs_zddEq426Digi, hs_zddEq526Digj, hs_zddEq626Digk, hs_zddEq726Digl, hs_zddEq826Digm, hs_zddEq926Dign, hs_zddEq1026Digo, hs_zddEq1126Digp, hs_zddEq1226Digq) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326Digh, hs_zddEq426Digi, hs_zddEq526Digj, hs_zddEq626Digk, hs_zddEq726Digl, hs_zddEq826Digm, hs_zddEq926Dign, hs_zddEq1026Digo, hs_zddEq1126Digp, hs_zddEq1226Digq);
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Diiu, hs_zddEq426Diiv, hs_zddEq526Diiw, hs_zddEq626Diix, hs_zddEq726Diiy, hs_zddEq826Diiz, hs_zddEq926DiiA, hs_zddEq1026DiiB, hs_zddEq1126DiiC, hs_zddEq1226DiiD, hs_zddEq1326DiiE) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326Diiu, hs_zddEq426Diiv, hs_zddEq526Diiw, hs_zddEq626Diix, hs_zddEq726Diiy, hs_zddEq826Diiz, hs_zddEq926DiiA, hs_zddEq1026DiiB, hs_zddEq1126DiiC, hs_zddEq1226DiiD, hs_zddEq1326DiiE);
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326DikS, hs_zddEq426DikT, hs_zddEq526DikU, hs_zddEq626DikV, hs_zddEq726DikW, hs_zddEq826DikX, hs_zddEq926DikY, hs_zddEq1026DikZ, hs_zddEq1126Dil0, hs_zddEq1226Dil1, hs_zddEq1326Dil2, hs_zddEq1426Dil3) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326DikS, hs_zddEq426DikT, hs_zddEq526DikU, hs_zddEq626DikV, hs_zddEq726DikW, hs_zddEq826DikX, hs_zddEq926DikY, hs_zddEq1026DikZ, hs_zddEq1126Dil0, hs_zddEq1226Dil1, hs_zddEq1326Dil2, hs_zddEq1426Dil3);
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Dinr, hs_zddEq426Dins, hs_zddEq526Dint, hs_zddEq626Dinu, hs_zddEq726Dinv, hs_zddEq826Dinw, hs_zddEq926Dinx, hs_zddEq1026Diny, hs_zddEq1126Dinz, hs_zddEq1226DinA, hs_zddEq1326DinB, hs_zddEq1426DinC, hs_zddEq1526DinD) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326Dinr, hs_zddEq426Dins, hs_zddEq526Dint, hs_zddEq626Dinu, hs_zddEq726Dinv, hs_zddEq826Dinw, hs_zddEq926Dinx, hs_zddEq1026Diny, hs_zddEq1126Dinz, hs_zddEq1226DinA, hs_zddEq1326DinB, hs_zddEq1426DinC, hs_zddEq1526DinD);
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Diqb, hs_zddEq426Diqc, hs_zddEq526Diqd, hs_zddEq626Diqe, hs_zddEq726Diqf, hs_zddEq826Diqg, hs_zddEq926Diqh, hs_zddEq1026Diqi, hs_zddEq1126Diqj, hs_zddEq1226Diqk, hs_zddEq1326Diql, hs_zddEq1426Diqm, hs_zddEq1526Diqn, hs_zddEq1626Diqo) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326Diqb, hs_zddEq426Diqc, hs_zddEq526Diqd, hs_zddEq626Diqe, hs_zddEq726Diqf, hs_zddEq826Diqg, hs_zddEq926Diqh, hs_zddEq1026Diqi, hs_zddEq1126Diqj, hs_zddEq1226Diqk, hs_zddEq1326Diql, hs_zddEq1426Diqm, hs_zddEq1526Diqn, hs_zddEq1626Diqo);
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Dit6, hs_zddEq426Dit7, hs_zddEq526Dit8, hs_zddEq626Dit9, hs_zddEq726Dita, hs_zddEq826Ditb, hs_zddEq926Ditc, hs_zddEq1026Ditd, hs_zddEq1126Dite, hs_zddEq1226Ditf, hs_zddEq1326Ditg, hs_zddEq1426Dith, hs_zddEq1526Diti, hs_zddEq1626Ditj, hs_zddEq1726Ditk) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326Dit6, hs_zddEq426Dit7, hs_zddEq526Dit8, hs_zddEq626Dit9, hs_zddEq726Dita, hs_zddEq826Ditb, hs_zddEq926Ditc, hs_zddEq1026Ditd, hs_zddEq1126Dite, hs_zddEq1226Ditf, hs_zddEq1326Ditg, hs_zddEq1426Dith, hs_zddEq1526Diti, hs_zddEq1626Ditj, hs_zddEq1726Ditk);
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
    this.hs_zdfOrdZLz2cUZR.evaluate = function (hs_zddEq326Dixm, hs_zddOrd726Dixn, hs_zddOrd826Dixo) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326Dixm, hs_zddOrd726Dixn, hs_zddOrd826Dixo);
    };
    this.hs_zdfOrdZLz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUZR.evaluate = function (hs_zddEq326DiAw, hs_zddOrd726DiAx, hs_zddOrd826DiAy, hs_zddOrd926DiAz) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326DiAw, hs_zddOrd726DiAx, hs_zddOrd826DiAy, hs_zddOrd926DiAz);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326DiEl, hs_zddOrd726DiEm, hs_zddOrd826DiEn, hs_zddOrd926DiEo, hs_zddOrd1026DiEp) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326DiEl, hs_zddOrd726DiEm, hs_zddOrd826DiEn, hs_zddOrd926DiEo, hs_zddOrd1026DiEp);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326DiIP, hs_zddOrd726DiIQ, hs_zddOrd826DiIR, hs_zddOrd926DiIS, hs_zddOrd1026DiIT, hs_zddOrd1126DiIU) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326DiIP, hs_zddOrd726DiIQ, hs_zddOrd826DiIR, hs_zddOrd926DiIS, hs_zddOrd1026DiIT, hs_zddOrd1126DiIU);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326DiNY, hs_zddOrd726DiNZ, hs_zddOrd826DiO0, hs_zddOrd926DiO1, hs_zddOrd1026DiO2, hs_zddOrd1126DiO3, hs_zddOrd1226DiO4) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326DiNY, hs_zddOrd726DiNZ, hs_zddOrd826DiO0, hs_zddOrd926DiO1, hs_zddOrd1026DiO2, hs_zddOrd1126DiO3, hs_zddOrd1226DiO4);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326DiTM, hs_zddOrd726DiTN, hs_zddOrd826DiTO, hs_zddOrd926DiTP, hs_zddOrd1026DiTQ, hs_zddOrd1126DiTR, hs_zddOrd1226DiTS, hs_zddOrd1326DiTT) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326DiTM, hs_zddOrd726DiTN, hs_zddOrd826DiTO, hs_zddOrd926DiTP, hs_zddOrd1026DiTQ, hs_zddOrd1126DiTR, hs_zddOrd1226DiTS, hs_zddOrd1326DiTT);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Dj0f, hs_zddOrd726Dj0g, hs_zddOrd826Dj0h, hs_zddOrd926Dj0i, hs_zddOrd1026Dj0j, hs_zddOrd1126Dj0k, hs_zddOrd1226Dj0l, hs_zddOrd1326Dj0m, hs_zddOrd1426Dj0n) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326Dj0f, hs_zddOrd726Dj0g, hs_zddOrd826Dj0h, hs_zddOrd926Dj0i, hs_zddOrd1026Dj0j, hs_zddOrd1126Dj0k, hs_zddOrd1226Dj0l, hs_zddOrd1326Dj0m, hs_zddOrd1426Dj0n);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Dj7n, hs_zddOrd726Dj7o, hs_zddOrd826Dj7p, hs_zddOrd926Dj7q, hs_zddOrd1026Dj7r, hs_zddOrd1126Dj7s, hs_zddOrd1226Dj7t, hs_zddOrd1326Dj7u, hs_zddOrd1426Dj7v, hs_zddOrd1526Dj7w) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326Dj7n, hs_zddOrd726Dj7o, hs_zddOrd826Dj7p, hs_zddOrd926Dj7q, hs_zddOrd1026Dj7r, hs_zddOrd1126Dj7s, hs_zddOrd1226Dj7t, hs_zddOrd1326Dj7u, hs_zddOrd1426Dj7v, hs_zddOrd1526Dj7w);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Djfa, hs_zddOrd726Djfb, hs_zddOrd826Djfc, hs_zddOrd926Djfd, hs_zddOrd1026Djfe, hs_zddOrd1126Djff, hs_zddOrd1226Djfg, hs_zddOrd1326Djfh, hs_zddOrd1426Djfi, hs_zddOrd1526Djfj, hs_zddOrd1626Djfk) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326Djfa, hs_zddOrd726Djfb, hs_zddOrd826Djfc, hs_zddOrd926Djfd, hs_zddOrd1026Djfe, hs_zddOrd1126Djff, hs_zddOrd1226Djfg, hs_zddOrd1326Djfh, hs_zddOrd1426Djfi, hs_zddOrd1526Djfj, hs_zddOrd1626Djfk);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326DjnC, hs_zddOrd726DjnD, hs_zddOrd826DjnE, hs_zddOrd926DjnF, hs_zddOrd1026DjnG, hs_zddOrd1126DjnH, hs_zddOrd1226DjnI, hs_zddOrd1326DjnJ, hs_zddOrd1426DjnK, hs_zddOrd1526DjnL, hs_zddOrd1626DjnM, hs_zddOrd1726DjnN) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326DjnC, hs_zddOrd726DjnD, hs_zddOrd826DjnE, hs_zddOrd926DjnF, hs_zddOrd1026DjnG, hs_zddOrd1126DjnH, hs_zddOrd1226DjnI, hs_zddOrd1326DjnJ, hs_zddOrd1426DjnK, hs_zddOrd1526DjnL, hs_zddOrd1626DjnM, hs_zddOrd1726DjnN);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326DjwJ, hs_zddOrd726DjwK, hs_zddOrd826DjwL, hs_zddOrd926DjwM, hs_zddOrd1026DjwN, hs_zddOrd1126DjwO, hs_zddOrd1226DjwP, hs_zddOrd1326DjwQ, hs_zddOrd1426DjwR, hs_zddOrd1526DjwS, hs_zddOrd1626DjwT, hs_zddOrd1726DjwU, hs_zddOrd1826DjwV) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326DjwJ, hs_zddOrd726DjwK, hs_zddOrd826DjwL, hs_zddOrd926DjwM, hs_zddOrd1026DjwN, hs_zddOrd1126DjwO, hs_zddOrd1226DjwP, hs_zddOrd1326DjwQ, hs_zddOrd1426DjwR, hs_zddOrd1526DjwS, hs_zddOrd1626DjwT, hs_zddOrd1726DjwU, hs_zddOrd1826DjwV);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326DjGv, hs_zddOrd726DjGw, hs_zddOrd826DjGx, hs_zddOrd926DjGy, hs_zddOrd1026DjGz, hs_zddOrd1126DjGA, hs_zddOrd1226DjGB, hs_zddOrd1326DjGC, hs_zddOrd1426DjGD, hs_zddOrd1526DjGE, hs_zddOrd1626DjGF, hs_zddOrd1726DjGG, hs_zddOrd1826DjGH, hs_zddOrd1926DjGI) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326DjGv, hs_zddOrd726DjGw, hs_zddOrd826DjGx, hs_zddOrd926DjGy, hs_zddOrd1026DjGz, hs_zddOrd1126DjGA, hs_zddOrd1226DjGB, hs_zddOrd1326DjGC, hs_zddOrd1426DjGD, hs_zddOrd1526DjGE, hs_zddOrd1626DjGF, hs_zddOrd1726DjGG, hs_zddOrd1826DjGH, hs_zddOrd1926DjGI);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326DjQW, hs_zddOrd726DjQX, hs_zddOrd826DjQY, hs_zddOrd926DjQZ, hs_zddOrd1026DjR0, hs_zddOrd1126DjR1, hs_zddOrd1226DjR2, hs_zddOrd1326DjR3, hs_zddOrd1426DjR4, hs_zddOrd1526DjR5, hs_zddOrd1626DjR6, hs_zddOrd1726DjR7, hs_zddOrd1826DjR8, hs_zddOrd1926DjR9, hs_zddOrd2026DjRa) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326DjQW, hs_zddOrd726DjQX, hs_zddOrd826DjQY, hs_zddOrd926DjQZ, hs_zddOrd1026DjR0, hs_zddOrd1126DjR1, hs_zddOrd1226DjR2, hs_zddOrd1326DjR3, hs_zddOrd1426DjR4, hs_zddOrd1526DjR5, hs_zddOrd1626DjR6, hs_zddOrd1726DjR7, hs_zddOrd1826DjR8, hs_zddOrd1926DjR9, hs_zddOrd2026DjRa);
    };
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Dk22, hs_zddOrd726Dk23, hs_zddOrd826Dk24, hs_zddOrd926Dk25, hs_zddOrd1026Dk26, hs_zddOrd1126Dk27, hs_zddOrd1226Dk28, hs_zddOrd1326Dk29, hs_zddOrd1426Dk2a, hs_zddOrd1526Dk2b, hs_zddOrd1626Dk2c, hs_zddOrd1726Dk2d, hs_zddOrd1826Dk2e, hs_zddOrd1926Dk2f, hs_zddOrd2026Dk2g, hs_zddOrd2126Dk2h) {
        $hs.modules.GHCziClasses.loadDependencies();
        return this.evaluate(hs_zddEq326Dk22, hs_zddOrd726Dk23, hs_zddOrd826Dk24, hs_zddOrd926Dk25, hs_zddOrd1026Dk26, hs_zddOrd1126Dk27, hs_zddOrd1226Dk28, hs_zddOrd1326Dk29, hs_zddOrd1426Dk2a, hs_zddOrd1526Dk2b, hs_zddOrd1626Dk2c, hs_zddOrd1726Dk2d, hs_zddOrd1826Dk2e, hs_zddOrd1926Dk2f, hs_zddOrd2026Dk2g, hs_zddOrd2126Dk2h);
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
    this.hs_DZCEq.notEvaluated = false;
    this.hs_DZCOrd.notEvaluated = false;
    var hs_zdczsze25uTox = new $hs.Func(2);
    var hs_zdczeze25uToJ = new $hs.Func(2);
    var hs_zdczsze125uToV = new $hs.Func(3);
    var hs_zdczeze125uToX = new $hs.Func(1);
    var hs_zddEq25uToZ = new $hs.Thunk();
    var hs_zdczeze225uTp1 = new $hs.Func(2);
    var hs_a25uTp3 = new $hs.Func(2);
    var hs_a125uTp5 = new $hs.Thunk();
    var hs_zdfEqZMZN125uTp7 = new $hs.Data(1);
    var hs_zdczsze225uTp9 = new $hs.Func(2);
    var hs_zdczeze325uTq8 = new $hs.Func(2);
    var hs_zdczsze325uTqk = new $hs.Func(2);
    var hs_zdczeze425uTqr = new $hs.Func(2);
    var hs_zdczsze425uTqD = new $hs.Func(2);
    var hs_zddEq125uTqK = new $hs.Thunk();
    var hs_zdczlze25uTqM = new $hs.Func(2);
    var hs_zdczg25uTqY = new $hs.Func(2);
    var hs_zdczgze25uTra = new $hs.Func(2);
    var hs_zdczl25uTrm = new $hs.Func(2);
    var hs_zdcmin25uTry = new $hs.Func(2);
    var hs_zdcmax25uTrA = new $hs.Func(2);
    var hs_zddEq225uTrC = new $hs.Thunk();
    var hs_zdccompare25uTrE = new $hs.Func(2);
    var hs_zdcmin125uTrW = new $hs.Func(2);
    var hs_zdcmax125uTrY = new $hs.Func(2);
    var hs_zdczlze125uTs0 = new $hs.Func(2);
    var hs_zdczg125uTs2 = new $hs.Func(2);
    var hs_zdczgze125uTs4 = new $hs.Func(2);
    var hs_zdczl125uTs6 = new $hs.Func(2);
    var hs_zdccompare125uTs8 = new $hs.Func(2);
    var hs_zddOrd25uTsa = new $hs.Thunk();
    var hs_zdccompare225uTsc = new $hs.Func(2);
    var hs_zddOrd125uTse = new $hs.Thunk();
    var hs_zdczl225uTsg = new $hs.Func(2);
    var hs_a225uTsi = new $hs.Thunk();
    var hs_zddOrd225uTsk = new $hs.Thunk();
    var hs_zdczgze225uTsm = new $hs.Func(2);
    var hs_a325uTso = new $hs.Thunk();
    var hs_zddOrd325uTsq = new $hs.Thunk();
    var hs_zdczg225uTss = new $hs.Func(2);
    var hs_a425uTsu = new $hs.Thunk();
    var hs_zddOrd425uTsw = new $hs.Thunk();
    var hs_zdczlze225uTsy = new $hs.Func(2);
    var hs_a525uTsA = new $hs.Thunk();
    var hs_zddOrd525uTsC = new $hs.Thunk();
    var hs_zdcmax225uTsE = new $hs.Func(2);
    var hs_a625uTsG = new $hs.Thunk();
    var hs_zddOrd625uTsI = new $hs.Thunk();
    var hs_zdcmin225uTsK = new $hs.Func(2);
    var hs_a725uTsM = new $hs.Thunk();
    var hs_a825uTsO = new $hs.Thunk();
    var hs_zdfOrdZMZN125uTsQ = new $hs.Data(1);
    var hs_zdcmin325uTvq = new $hs.Func(2);
    var hs_zdcmax325uTvs = new $hs.Func(2);
    var hs_zdczlze325uTvE = new $hs.Func(2);
    var hs_zdczg325uTvQ = new $hs.Func(2);
    var hs_zdczgze325uTw2 = new $hs.Func(2);
    var hs_zdczl325uTwe = new $hs.Func(2);
    var hs_zdccompare325uTwq = new $hs.Func(2);
    var hs_zdcmin425uTwE = new $hs.Func(2);
    var hs_zdcmax425uTwG = new $hs.Func(2);
    var hs_zdczlze425uTwS = new $hs.Func(2);
    var hs_zdczg425uTx4 = new $hs.Func(2);
    var hs_zdczgze425uTxg = new $hs.Func(2);
    var hs_zdczl425uTxs = new $hs.Func(2);
    var hs_zdccompare425uTxE = new $hs.Func(2);
    var hs_zdcmin525uTxS = new $hs.Func(2);
    var hs_zdcmax525uTxU = new $hs.Func(2);
    var hs_zdczeze525uTy6 = new $hs.Func(2);
    var hs_zdczsze525uTye = new $hs.Func(2);
    var hs_zdczeze625uTyl = new $hs.Func(4);
    var hs_zdczsze625uTyG = new $hs.Func(2);
    var hs_zdczeze725uTz0 = new $hs.Func(5);
    var hs_zdczsze725uTzs = new $hs.Func(3);
    var hs_zdczeze825uTzQ = new $hs.Func(6);
    var hs_zdczsze825uTAp = new $hs.Func(4);
    var hs_zdczeze925uTAR = new $hs.Func(7);
    var hs_zdczsze925uTBx = new $hs.Func(5);
    var hs_zdczeze1025uTC3 = new $hs.Func(8);
    var hs_zdczsze1025uTCQ = new $hs.Func(6);
    var hs_zdczeze1125uTDq = new $hs.Func(9);
    var hs_zdczsze1125uTEk = new $hs.Func(7);
    var hs_zdczeze1225uTEY = new $hs.Func(10);
    var hs_zdczsze1225uTFZ = new $hs.Func(8);
    var hs_zdczeze1325uTGH = new $hs.Func(11);
    var hs_zdczsze1325uTHP = new $hs.Func(9);
    var hs_zdczeze1425uTIB = new $hs.Func(12);
    var hs_zdczsze1425uTJQ = new $hs.Func(10);
    var hs_zdczeze1525uTKG = new $hs.Func(13);
    var hs_zdczsze1525uTM2 = new $hs.Func(11);
    var hs_zdczeze1625uTMW = new $hs.Func(14);
    var hs_zdczsze1625uTOp = new $hs.Func(12);
    var hs_zdczeze1725uTPn = new $hs.Func(15);
    var hs_zdczsze1725uTQX = new $hs.Func(13);
    var hs_zdczeze1825uTRZ = new $hs.Func(16);
    var hs_zdczsze1825uTTG = new $hs.Func(14);
    var hs_zdczeze1925uTUM = new $hs.Func(17);
    var hs_zdczsze1925uTWA = new $hs.Func(15);
    var hs_zdczeze2025uTXK = new $hs.Func(2);
    var hs_zdczsze2025uTXT = new $hs.Func(2);
    var hs_zdczeze2125uTY0 = new $hs.Func(2);
    var hs_zdczsze2125uTYa = new $hs.Func(2);
    var hs_zdczlze525uTYh = new $hs.Func(2);
    var hs_zdczg525uTYp = new $hs.Func(2);
    var hs_zdczgze525uTYx = new $hs.Func(2);
    var hs_zdczl525uTYF = new $hs.Func(2);
    var hs_zdccompare525uTYN = new $hs.Func(2);
    var hs_zdcmin625uTYV = new $hs.Func(2);
    var hs_zdcmax625uTYX = new $hs.Func(2);
    var hs_zdczlze625uTZ9 = new $hs.Func(5);
    var hs_zdczg625uTZw = new $hs.Func(5);
    var hs_zdczgze625uTZT = new $hs.Func(5);
    var hs_zdczl625uU0g = new $hs.Func(5);
    var hs_zdccompare625uU0D = new $hs.Func(5);
    var hs_zdcmin725uU10 = new $hs.Func(3);
    var hs_zdcmax725uU12 = new $hs.Func(3);
    var hs_zdczlze725uU1J = new $hs.Func(6);
    var hs_zdczg725uU2d = new $hs.Func(6);
    var hs_zdczgze725uU2H = new $hs.Func(6);
    var hs_zdczl725uU3b = new $hs.Func(6);
    var hs_zdccompare725uU3F = new $hs.Func(6);
    var hs_zdcmin825uU49 = new $hs.Func(4);
    var hs_zdcmax825uU4b = new $hs.Func(4);
    var hs_zdczlze825uU4Y = new $hs.Func(7);
    var hs_zdczg825uU5z = new $hs.Func(7);
    var hs_zdczgze825uU6a = new $hs.Func(7);
    var hs_zdczl825uU6L = new $hs.Func(7);
    var hs_zdccompare825uU7m = new $hs.Func(7);
    var hs_zdcmin925uU7X = new $hs.Func(5);
    var hs_zdcmax925uU7Z = new $hs.Func(5);
    var hs_zdczlze925uU8S = new $hs.Func(8);
    var hs_zdczg925uU9A = new $hs.Func(8);
    var hs_zdczgze925uUai = new $hs.Func(8);
    var hs_zdczl925uUb0 = new $hs.Func(8);
    var hs_zdccompare925uUbI = new $hs.Func(8);
    var hs_zdcmin1025uUcq = new $hs.Func(6);
    var hs_zdcmax1025uUcs = new $hs.Func(6);
    var hs_zdczlze1025uUdr = new $hs.Func(9);
    var hs_zdczg1025uUeg = new $hs.Func(9);
    var hs_zdczgze1025uUf5 = new $hs.Func(9);
    var hs_zdczl1025uUfU = new $hs.Func(9);
    var hs_zdccompare1025uUgJ = new $hs.Func(9);
    var hs_zdcmin1125uUhy = new $hs.Func(7);
    var hs_zdcmax1125uUhA = new $hs.Func(7);
    var hs_zdczlze1125uUiF = new $hs.Func(10);
    var hs_zdczg1125uUjB = new $hs.Func(10);
    var hs_zdczgze1125uUkx = new $hs.Func(10);
    var hs_zdczl1125uUlt = new $hs.Func(10);
    var hs_zdccompare1125uUmp = new $hs.Func(10);
    var hs_zdcmin1225uUnl = new $hs.Func(8);
    var hs_zdcmax1225uUnn = new $hs.Func(8);
    var hs_zdczlze1225uUoy = new $hs.Func(11);
    var hs_zdczg1225uUpB = new $hs.Func(11);
    var hs_zdczgze1225uUqE = new $hs.Func(11);
    var hs_zdczl1225uUrH = new $hs.Func(11);
    var hs_zdccompare1225uUsK = new $hs.Func(11);
    var hs_zdcmin1325uUtN = new $hs.Func(9);
    var hs_zdcmax1325uUtP = new $hs.Func(9);
    var hs_zdczlze1325uUv6 = new $hs.Func(12);
    var hs_zdczg1325uUwg = new $hs.Func(12);
    var hs_zdczgze1325uUxq = new $hs.Func(12);
    var hs_zdczl1325uUyA = new $hs.Func(12);
    var hs_zdccompare1325uUzK = new $hs.Func(12);
    var hs_zdcmin1425uUAU = new $hs.Func(10);
    var hs_zdcmax1425uUAW = new $hs.Func(10);
    var hs_zdczlze1425uUCj = new $hs.Func(13);
    var hs_zdczg1425uUDA = new $hs.Func(13);
    var hs_zdczgze1425uUER = new $hs.Func(13);
    var hs_zdczl1425uUG8 = new $hs.Func(13);
    var hs_zdccompare1425uUHp = new $hs.Func(13);
    var hs_zdcmin1525uUIG = new $hs.Func(11);
    var hs_zdcmax1525uUII = new $hs.Func(11);
    var hs_zdczlze1525uUKb = new $hs.Func(14);
    var hs_zdczg1525uULz = new $hs.Func(14);
    var hs_zdczgze1525uUMX = new $hs.Func(14);
    var hs_zdczl1525uUOl = new $hs.Func(14);
    var hs_zdccompare1525uUPJ = new $hs.Func(14);
    var hs_zdcmin1625uUR7 = new $hs.Func(12);
    var hs_zdcmax1625uUR9 = new $hs.Func(12);
    var hs_zdczlze1625uUSI = new $hs.Func(15);
    var hs_zdczg1625uUUd = new $hs.Func(15);
    var hs_zdczgze1625uUVI = new $hs.Func(15);
    var hs_zdczl1625uUXd = new $hs.Func(15);
    var hs_zdccompare1625uUYI = new $hs.Func(15);
    var hs_zdcmin1725uV0d = new $hs.Func(13);
    var hs_zdcmax1725uV0f = new $hs.Func(13);
    var hs_zdczlze1725uV1U = new $hs.Func(16);
    var hs_zdczg1725uV3w = new $hs.Func(16);
    var hs_zdczgze1725uV58 = new $hs.Func(16);
    var hs_zdczl1725uV6K = new $hs.Func(16);
    var hs_zdccompare1725uV8m = new $hs.Func(16);
    var hs_zdcmin1825uV9Y = new $hs.Func(14);
    var hs_zdcmax1825uVa0 = new $hs.Func(14);
    var hs_zdczlze1825uVbL = new $hs.Func(17);
    var hs_zdczg1825uVdu = new $hs.Func(17);
    var hs_zdczgze1825uVfd = new $hs.Func(17);
    var hs_zdczl1825uVgW = new $hs.Func(17);
    var hs_zdccompare1825uViF = new $hs.Func(17);
    var hs_zdcmin1925uVko = new $hs.Func(15);
    var hs_zdcmax1925uVkq = new $hs.Func(15);
    var hs_zdczlze1925uVmh = new $hs.Func(18);
    var hs_zdczg1925uVo7 = new $hs.Func(18);
    var hs_zdczgze1925uVpX = new $hs.Func(18);
    var hs_zdczl1925uVrN = new $hs.Func(18);
    var hs_zdccompare1925uVtD = new $hs.Func(18);
    var hs_zdcmin2025uVvt = new $hs.Func(16);
    var hs_zdcmax2025uVvv = new $hs.Func(16);
    var hs_zdczlze2025uVxs = new $hs.Func(2);
    var hs_zdczg2025uVxA = new $hs.Func(2);
    var hs_zdczgze2025uVxJ = new $hs.Func(2);
    var hs_zdczl2025uVxS = new $hs.Func(2);
    var hs_zdccompare2025uVy0 = new $hs.Func(2);
    var hs_zdcmin2125uVy9 = new $hs.Func(2);
    var hs_zdcmax2125uVyb = new $hs.Func(2);
    var hs_zdczlze2125uVyn = new $hs.Func(2);
    var hs_zdczg2125uVyx = new $hs.Func(2);
    var hs_zdczgze2125uVyH = new $hs.Func(2);
    var hs_zdczl2125uVyR = new $hs.Func(2);
    var hs_zdccompare2125uVz1 = new $hs.Func(2);
    var hs_zdcmin2225uVzj = new $hs.Func(2);
    var hs_zdcmax2225uVzl = new $hs.Func(2);
    this.hs_zeze.evaluate = function (hs_tpl26DhRN) {
        var hs_tpl26Dk5M = hs_tpl26DhRN;
        if (hs_tpl26DhRN.notEvaluated) {
            hs_tpl26Dk5M = hs_tpl26DhRN.hscall();
        }
        var hs_tpl26DhRR = hs_tpl26Dk5M.data[0];
        if (hs_tpl26DhRR.notEvaluated) {
            return hs_tpl26DhRR.hscall();
        } else {
            return hs_tpl26DhRR;
        }
    };
    this.hs_zsze.evaluate = function (hs_tpl26DhRT) {
        var hs_tpl26Dk5P = hs_tpl26DhRT;
        if (hs_tpl26DhRT.notEvaluated) {
            hs_tpl26Dk5P = hs_tpl26DhRT.hscall();
        }
        var hs_tpl26DhRX = hs_tpl26Dk5P.data[1];
        if (hs_tpl26DhRX.notEvaluated) {
            return hs_tpl26DhRX.hscall();
        } else {
            return hs_tpl26DhRX;
        }
    };
    this.hs_zdp1Ord.evaluate = function (hs_tpl26DhRZ) {
        var hs_tpl26Dk5Q = hs_tpl26DhRZ;
        if (hs_tpl26DhRZ.notEvaluated) {
            hs_tpl26Dk5Q = hs_tpl26DhRZ.hscall();
        }
        var hs_tpl26DhS9 = hs_tpl26Dk5Q.data[0];
        if (hs_tpl26DhS9.notEvaluated) {
            return hs_tpl26DhS9.hscall();
        } else {
            return hs_tpl26DhS9;
        }
    };
    this.hs_compare.evaluate = function (hs_tpl26DhSb) {
        var hs_tpl26Dk5Z = hs_tpl26DhSb;
        if (hs_tpl26DhSb.notEvaluated) {
            hs_tpl26Dk5Z = hs_tpl26DhSb.hscall();
        }
        var hs_tpl26DhSl = hs_tpl26Dk5Z.data[1];
        if (hs_tpl26DhSl.notEvaluated) {
            return hs_tpl26DhSl.hscall();
        } else {
            return hs_tpl26DhSl;
        }
    };
    this.hs_zl.evaluate = function (hs_tpl26DhSn) {
        var hs_tpl26Dk67 = hs_tpl26DhSn;
        if (hs_tpl26DhSn.notEvaluated) {
            hs_tpl26Dk67 = hs_tpl26DhSn.hscall();
        }
        var hs_tpl26DhSx = hs_tpl26Dk67.data[2];
        if (hs_tpl26DhSx.notEvaluated) {
            return hs_tpl26DhSx.hscall();
        } else {
            return hs_tpl26DhSx;
        }
    };
    this.hs_zgze.evaluate = function (hs_tpl26DhSz) {
        var hs_tpl26Dk6f = hs_tpl26DhSz;
        if (hs_tpl26DhSz.notEvaluated) {
            hs_tpl26Dk6f = hs_tpl26DhSz.hscall();
        }
        var hs_tpl26DhSJ = hs_tpl26Dk6f.data[3];
        if (hs_tpl26DhSJ.notEvaluated) {
            return hs_tpl26DhSJ.hscall();
        } else {
            return hs_tpl26DhSJ;
        }
    };
    this.hs_zg.evaluate = function (hs_tpl26DhSL) {
        var hs_tpl26Dk6n = hs_tpl26DhSL;
        if (hs_tpl26DhSL.notEvaluated) {
            hs_tpl26Dk6n = hs_tpl26DhSL.hscall();
        }
        var hs_tpl26DhSV = hs_tpl26Dk6n.data[4];
        if (hs_tpl26DhSV.notEvaluated) {
            return hs_tpl26DhSV.hscall();
        } else {
            return hs_tpl26DhSV;
        }
    };
    this.hs_zlze.evaluate = function (hs_tpl26DhSX) {
        var hs_tpl26Dk6v = hs_tpl26DhSX;
        if (hs_tpl26DhSX.notEvaluated) {
            hs_tpl26Dk6v = hs_tpl26DhSX.hscall();
        }
        var hs_tpl26DhT7 = hs_tpl26Dk6v.data[5];
        if (hs_tpl26DhT7.notEvaluated) {
            return hs_tpl26DhT7.hscall();
        } else {
            return hs_tpl26DhT7;
        }
    };
    this.hs_max.evaluate = function (hs_tpl26DhT9) {
        var hs_tpl26Dk6D = hs_tpl26DhT9;
        if (hs_tpl26DhT9.notEvaluated) {
            hs_tpl26Dk6D = hs_tpl26DhT9.hscall();
        }
        var hs_tpl26DhTj = hs_tpl26Dk6D.data[6];
        if (hs_tpl26DhTj.notEvaluated) {
            return hs_tpl26DhTj.hscall();
        } else {
            return hs_tpl26DhTj;
        }
    };
    this.hs_min.evaluate = function (hs_tpl26DhTl) {
        var hs_tpl26Dk6L = hs_tpl26DhTl;
        if (hs_tpl26DhTl.notEvaluated) {
            hs_tpl26Dk6L = hs_tpl26DhTl.hscall();
        }
        var hs_tpl26DhTv = hs_tpl26Dk6L.data[7];
        if (hs_tpl26DhTv.notEvaluated) {
            return hs_tpl26DhTv.hscall();
        } else {
            return hs_tpl26DhTv;
        }
    };
    this.hs_zddmmin.evaluate = function (hs_zddOrd726DhTz, hs_x26DhTA, hs_y26DhTB) {
        var hs_wild26Dk6S = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd726DhTz, hs_x26DhTA, hs_y26DhTB);
        switch (hs_wild26Dk6S.tag) {
        case 1:
            if (hs_y26DhTB.notEvaluated) {
                return hs_y26DhTB.hscall();
            } else {
                return hs_y26DhTB;
            }
        case 2:
            if (hs_x26DhTA.notEvaluated) {
                return hs_x26DhTA.hscall();
            } else {
                return hs_x26DhTA;
            }
        }
    };
    this.hs_zddmmax.evaluate = function (hs_zddOrd726DhTG, hs_x26DhTH, hs_y26DhTI) {
        var hs_wild26Dk6T = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd726DhTG, hs_x26DhTH, hs_y26DhTI);
        switch (hs_wild26Dk6T.tag) {
        case 1:
            if (hs_x26DhTH.notEvaluated) {
                return hs_x26DhTH.hscall();
            } else {
                return hs_x26DhTH;
            }
        case 2:
            if (hs_y26DhTI.notEvaluated) {
                return hs_y26DhTI.hscall();
            } else {
                return hs_y26DhTI;
            }
        }
    };
    this.hs_zddmzlze.evaluate = function (hs_zddOrd726DhTN, hs_x26DhTO, hs_y26DhTP) {
        var hs_wild26Dk6U = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DhTN, hs_x26DhTO, hs_y26DhTP);
        switch (hs_wild26Dk6U.tag) {
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
    this.hs_zddmzg.evaluate = function (hs_zddOrd726DhTU, hs_x26DhTV, hs_y26DhTW) {
        var hs_wild26Dk6V = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DhTU, hs_x26DhTV, hs_y26DhTW);
        switch (hs_wild26Dk6V.tag) {
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
    this.hs_zddmzgze.evaluate = function (hs_zddOrd726DhU1, hs_x26DhU2, hs_y26DhU3) {
        var hs_wild26Dk6W = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DhU1, hs_x26DhU2, hs_y26DhU3);
        switch (hs_wild26Dk6W.tag) {
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
    this.hs_zddmzl.evaluate = function (hs_zddOrd726DhU8, hs_x26DhU9, hs_y26DhUa) {
        var hs_wild26Dk6X = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DhU8, hs_x26DhU9, hs_y26DhUa);
        switch (hs_wild26Dk6X.tag) {
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
    this.hs_zddmcompare.evaluate = function (hs_zddOrd726DhUf, hs_eta26DhUh, hs_eta126DhUi) {
        var hs_sat26Dk70 = $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd726DhUf);
        var hs_wild26Dk6Z = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26Dk70, hs_eta26DhUh, hs_eta126DhUi);
        switch (hs_wild26Dk6Z.tag) {
        case 1:
            var hs_wild126Dk6Y = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd726DhUf, hs_eta26DhUh, hs_eta126DhUi);
            switch (hs_wild126Dk6Y.tag) {
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
    this.hs_not.evaluate = function (hs_ds26DhUm) {
        var hs_wild26Dk71 = hs_ds26DhUm;
        if (hs_ds26DhUm.notEvaluated) {
            hs_wild26Dk71 = hs_ds26DhUm.hscall();
        }
        switch (hs_wild26Dk71.tag) {
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
    this.hs_zddmzeze.evaluate = function (hs_zddEq326DhUr, hs_x26DhUs, hs_y26DhUt) {
        var hs_wild26Dk72 = $hs.modules.GHCziClasses.hs_zsze.hscall(hs_zddEq326DhUr, hs_x26DhUs, hs_y26DhUt);
        switch (hs_wild26Dk72.tag) {
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
    this.hs_zddmzsze.evaluate = function (hs_zddEq326DhUy, hs_x26DhUz, hs_y26DhUA) {
        var hs_wild26Dk73 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326DhUy, hs_x26DhUz, hs_y26DhUA);
        switch (hs_wild26Dk73.tag) {
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
    this.hs_zbzb.evaluate = function (hs_ds26DhUE, hs_ds126DhUG) {
        var hs_wild26Dk74 = hs_ds26DhUE;
        if (hs_ds26DhUE.notEvaluated) {
            hs_wild26Dk74 = hs_ds26DhUE.hscall();
        }
        switch (hs_wild26Dk74.tag) {
        case 1:
            if (hs_ds126DhUG.notEvaluated) {
                return hs_ds126DhUG.hscall();
            } else {
                return hs_ds126DhUG;
            }
        case 2:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    this.hs_zaza.evaluate = function (hs_ds26DhUJ, hs_x26DhUL) {
        var hs_wild26Dk75 = hs_ds26DhUJ;
        if (hs_ds26DhUJ.notEvaluated) {
            hs_wild26Dk75 = hs_ds26DhUJ.hscall();
        }
        switch (hs_wild26Dk75.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            if (hs_x26DhUL.notEvaluated) {
                return hs_x26DhUL.hscall();
            } else {
                return hs_x26DhUL;
            }
        }
    };
    hs_zdczsze25uTox.evaluate = function (hs_ds26DhUQ, hs_ds126DhUT) {
        var hs_wild26Dk77 = hs_ds26DhUQ;
        if (hs_ds26DhUQ.notEvaluated) {
            hs_wild26Dk77 = hs_ds26DhUQ.hscall();
        }
        var hs_c126DhUW = hs_wild26Dk77.data[0];
        var hs_wild126Dk76 = hs_ds126DhUT;
        if (hs_ds126DhUT.notEvaluated) {
            hs_wild126Dk76 = hs_ds126DhUT.hscall();
        }
        var hs_c226DhUX = hs_wild126Dk76.data[0];
        return hs_c126DhUW != hs_c226DhUX ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczeze25uToJ.evaluate = function (hs_ds26DhV2, hs_ds126DhV5) {
        var hs_wild26Dk79 = hs_ds26DhV2;
        if (hs_ds26DhV2.notEvaluated) {
            hs_wild26Dk79 = hs_ds26DhV2.hscall();
        }
        var hs_c126DhV8 = hs_wild26Dk79.data[0];
        var hs_wild126Dk78 = hs_ds126DhV5;
        if (hs_ds126DhV5.notEvaluated) {
            hs_wild126Dk78 = hs_ds126DhV5.hscall();
        }
        var hs_c226DhV9 = hs_wild126Dk78.data[0];
        return hs_c126DhV8 == hs_c226DhV9 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_zdfEqChar.data = [hs_zdczeze25uToJ, hs_zdczsze25uTox];
    this.hs_zdfEqZMZN.evaluate = function (hs_zddEq326DhVr) {
        var hs_sat26Dk7a = new $hs.Func(2);
        hs_sat26Dk7a.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczsze125uToV.hscall(hs_zddEq326DhVr, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dk7b = new $hs.Thunk();
        hs_sat26Dk7b.evaluateOnce = function () {
            return hs_zdczeze125uToX.hscall(hs_zddEq326DhVr);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dk7b, hs_sat26Dk7a];
        return $res;
    };
    hs_zdczsze125uToV.evaluate = function (hs_zddEq326DhVx, hs_eta26DhVz, hs_eta126DhVA) {
        var hs_sat26Dk7d = $hs.modules.GHCziClasses.hs_zdfEqZMZN.hscall(hs_zddEq326DhVx);
        var hs_wild26Dk7c = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26Dk7d, hs_eta26DhVz, hs_eta126DhVA);
        switch (hs_wild26Dk7c.tag) {
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
    hs_zdczeze125uToX.evaluate = function (hs_zddEq326DhVE) {
        var hs_zddEq426DhVF = new $hs.Thunk();
        hs_zddEq426DhVF.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZMZN.hscall(hs_zddEq326DhVE);
        };
        var hs_sat26Dk7k = new $hs.Func(2);
        hs_sat26Dk7k.evaluate = function (hs_ds26DhVI, hs_ds126DhVK) {
            var hs_wild26Dk7f = hs_ds26DhVI;
            if (hs_ds26DhVI.notEvaluated) {
                hs_wild26Dk7f = hs_ds26DhVI.hscall();
            }
            switch (hs_wild26Dk7f.tag) {
            case 1:
                var hs_wild126Dk7e = hs_ds126DhVK;
                if (hs_ds126DhVK.notEvaluated) {
                    hs_wild126Dk7e = hs_ds126DhVK.hscall();
                }
                switch (hs_wild126Dk7e.tag) {
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
                var hs_x26DhVT = hs_wild26Dk7f.data[0];
                var hs_xs26DhVW = hs_wild26Dk7f.data[1];
                var hs_wild126Dk7i = hs_ds126DhVK;
                if (hs_ds126DhVK.notEvaluated) {
                    hs_wild126Dk7i = hs_ds126DhVK.hscall();
                }
                switch (hs_wild126Dk7i.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_y26DhVU = hs_wild126Dk7i.data[0];
                    var hs_ys26DhVX = hs_wild126Dk7i.data[1];
                    var hs_wild226Dk7j = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326DhVE, hs_x26DhVT, hs_y26DhVU);
                    switch (hs_wild226Dk7j.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426DhVF, hs_xs26DhVW, hs_ys26DhVX);
                    }
                }
            }
        };
        if (hs_sat26Dk7k.notEvaluated) {
            return hs_sat26Dk7k.hscall();
        } else {
            return hs_sat26Dk7k;
        }
    };
    hs_zddEq25uToZ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdfEqZMZN.hscall($hs.modules.GHCziClasses.hs_zdfEqChar);
    };
    hs_zdczeze225uTp1.evaluate = function (hs_ds26DhW1, hs_ds126DhW3) {
        var hs_wild26Dk7m = hs_ds26DhW1;
        if (hs_ds26DhW1.notEvaluated) {
            hs_wild26Dk7m = hs_ds26DhW1.hscall();
        }
        switch (hs_wild26Dk7m.tag) {
        case 1:
            var hs_wild126Dk7l = hs_ds126DhW3;
            if (hs_ds126DhW3.notEvaluated) {
                hs_wild126Dk7l = hs_ds126DhW3.hscall();
            }
            switch (hs_wild126Dk7l.tag) {
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
            var hs_x26DhWc = hs_wild26Dk7m.data[0];
            var hs_xs26DhWf = hs_wild26Dk7m.data[1];
            var hs_wild126Dk7p = hs_ds126DhW3;
            if (hs_ds126DhW3.notEvaluated) {
                hs_wild126Dk7p = hs_ds126DhW3.hscall();
            }
            switch (hs_wild126Dk7p.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_y26DhWd = hs_wild126Dk7p.data[0];
                var hs_ys26DhWg = hs_wild126Dk7p.data[1];
                var hs_wild226Dk7q = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_x26DhWc, hs_y26DhWd);
                switch (hs_wild226Dk7q.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq25uToZ, hs_xs26DhWf, hs_ys26DhWg);
                }
            }
        }
    };
    hs_a25uTp3.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_zdczsze125uToV.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a125uTp5.evaluateOnce = function () {
        return hs_zdczeze125uToX.hscall($hs.modules.GHCziClasses.hs_zdfEqChar);
    };
    hs_zdfEqZMZN125uTp7.data = [hs_a125uTp5, hs_a25uTp3];
    hs_zdczsze225uTp9.evaluate = function (hs_eta26DhWk, hs_eta126DhWl) {
        var hs_sat26Dk7s = $hs.modules.GHCziClasses.hs_zdfEqZMZN.hscall($hs.modules.GHCziClasses.hs_zdfEqChar);
        var hs_wild26Dk7r = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26Dk7s, hs_eta26DhWk, hs_eta126DhWl);
        switch (hs_wild26Dk7r.tag) {
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
    this.hs_zdfEqInteger.data = [$hs.modules.GHCziInteger.hs_eqInteger, $hs.modules.GHCziInteger.hs_neqInteger];
    hs_zdczeze325uTq8.evaluate = function (hs_ds26DhWr, hs_ds126DhWu) {
        var hs_wild26Dk7u = hs_ds26DhWr;
        if (hs_ds26DhWr.notEvaluated) {
            hs_wild26Dk7u = hs_ds26DhWr.hscall();
        }
        var hs_x26DhWx = hs_wild26Dk7u.data[0];
        var hs_wild126Dk7t = hs_ds126DhWu;
        if (hs_ds126DhWu.notEvaluated) {
            hs_wild126Dk7t = hs_ds126DhWu.hscall();
        }
        var hs_y26DhWy = hs_wild126Dk7t.data[0];
        throw "primitive operation eqFloat#. Not implemeted yet.";
    };
    this.hs_zdfEqFloat.data = [hs_zdczeze325uTq8, hs_zdczsze325uTqk];
    hs_zdczsze325uTqk.evaluate = function (hs_eta26DhWD, hs_eta126DhWE) {
        var hs_wild26Dk7v = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqFloat, hs_eta26DhWD, hs_eta126DhWE);
        switch (hs_wild26Dk7v.tag) {
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
    hs_zdczeze425uTqr.evaluate = function (hs_ds26DhWK, hs_ds126DhWN) {
        var hs_wild26Dk7x = hs_ds26DhWK;
        if (hs_ds26DhWK.notEvaluated) {
            hs_wild26Dk7x = hs_ds26DhWK.hscall();
        }
        var hs_x26DhWQ = hs_wild26Dk7x.data[0];
        var hs_wild126Dk7w = hs_ds126DhWN;
        if (hs_ds126DhWN.notEvaluated) {
            hs_wild126Dk7w = hs_ds126DhWN.hscall();
        }
        var hs_y26DhWR = hs_wild126Dk7w.data[0];
        throw "primitive operation ==##. Not implemeted yet.";
    };
    this.hs_zdfEqDouble.data = [hs_zdczeze425uTqr, hs_zdczsze425uTqD];
    hs_zdczsze425uTqD.evaluate = function (hs_eta26DhWW, hs_eta126DhWX) {
        var hs_wild26Dk7y = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqDouble, hs_eta26DhWW, hs_eta126DhWX);
        switch (hs_wild26Dk7y.tag) {
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
    hs_zddEq125uTqK.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdfEqZMZN.hscall($hs.modules.GHCziClasses.hs_zdfEqChar);
    };
    hs_zdczlze25uTqM.evaluate = function (hs_ds26DhX5, hs_ds126DhX8) {
        var hs_wild26Dk7A = hs_ds26DhX5;
        if (hs_ds26DhX5.notEvaluated) {
            hs_wild26Dk7A = hs_ds26DhX5.hscall();
        }
        var hs_c126DhXb = hs_wild26Dk7A.data[0];
        var hs_wild126Dk7z = hs_ds126DhX8;
        if (hs_ds126DhX8.notEvaluated) {
            hs_wild126Dk7z = hs_ds126DhX8.hscall();
        }
        var hs_c226DhXc = hs_wild126Dk7z.data[0];
        return hs_c126DhXb <= hs_c226DhXc ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczg25uTqY.evaluate = function (hs_ds26DhXh, hs_ds126DhXk) {
        var hs_wild26Dk7C = hs_ds26DhXh;
        if (hs_ds26DhXh.notEvaluated) {
            hs_wild26Dk7C = hs_ds26DhXh.hscall();
        }
        var hs_c126DhXn = hs_wild26Dk7C.data[0];
        var hs_wild126Dk7B = hs_ds126DhXk;
        if (hs_ds126DhXk.notEvaluated) {
            hs_wild126Dk7B = hs_ds126DhXk.hscall();
        }
        var hs_c226DhXo = hs_wild126Dk7B.data[0];
        return hs_c126DhXn > hs_c226DhXo ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczgze25uTra.evaluate = function (hs_ds26DhXt, hs_ds126DhXw) {
        var hs_wild26Dk7E = hs_ds26DhXt;
        if (hs_ds26DhXt.notEvaluated) {
            hs_wild26Dk7E = hs_ds26DhXt.hscall();
        }
        var hs_c126DhXz = hs_wild26Dk7E.data[0];
        var hs_wild126Dk7D = hs_ds126DhXw;
        if (hs_ds126DhXw.notEvaluated) {
            hs_wild126Dk7D = hs_ds126DhXw.hscall();
        }
        var hs_c226DhXA = hs_wild126Dk7D.data[0];
        return hs_c126DhXz >= hs_c226DhXA ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczl25uTrm.evaluate = function (hs_ds26DhXF, hs_ds126DhXI) {
        var hs_wild26Dk7G = hs_ds26DhXF;
        if (hs_ds26DhXF.notEvaluated) {
            hs_wild26Dk7G = hs_ds26DhXF.hscall();
        }
        var hs_c126DhXL = hs_wild26Dk7G.data[0];
        var hs_wild126Dk7F = hs_ds126DhXI;
        if (hs_ds126DhXI.notEvaluated) {
            hs_wild126Dk7F = hs_ds126DhXI.hscall();
        }
        var hs_c226DhXM = hs_wild126Dk7F.data[0];
        return hs_c126DhXL < hs_c226DhXM ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_zdfOrdChar.data = [$hs.modules.GHCziClasses.hs_zdfEqChar, hs_zdccompare25uTrE, hs_zdczl25uTrm, hs_zdczgze25uTra, hs_zdczg25uTqY, hs_zdczlze25uTqM, hs_zdcmax25uTrA, hs_zdcmin25uTry];
    hs_zdcmin25uTry.evaluate = function (hs_x26DhXX, hs_y26DhXY) {
        var hs_wild26Dk7H = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_x26DhXX, hs_y26DhXY);
        switch (hs_wild26Dk7H.tag) {
        case 1:
            if (hs_y26DhXY.notEvaluated) {
                return hs_y26DhXY.hscall();
            } else {
                return hs_y26DhXY;
            }
        case 2:
            if (hs_x26DhXX.notEvaluated) {
                return hs_x26DhXX.hscall();
            } else {
                return hs_x26DhXX;
            }
        }
    };
    hs_zdcmax25uTrA.evaluate = function (hs_x26DhY2, hs_y26DhY3) {
        var hs_wild26Dk7I = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_x26DhY2, hs_y26DhY3);
        switch (hs_wild26Dk7I.tag) {
        case 1:
            if (hs_x26DhY2.notEvaluated) {
                return hs_x26DhY2.hscall();
            } else {
                return hs_x26DhY2;
            }
        case 2:
            if (hs_y26DhY3.notEvaluated) {
                return hs_y26DhY3.hscall();
            } else {
                return hs_y26DhY3;
            }
        }
    };
    hs_zddEq225uTrC.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zdccompare25uTrE.evaluate = function (hs_x26DhY7, hs_y26DhY8) {
        var hs_wild26Dk7K = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq225uTrC, hs_x26DhY7, hs_y26DhY8);
        switch (hs_wild26Dk7K.tag) {
        case 1:
            var hs_wild126Dk7J = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_x26DhY7, hs_y26DhY8);
            switch (hs_wild126Dk7J.tag) {
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
    this.hs_zdfOrdZMZN.evaluate = function (hs_zddEq326DhZ9, hs_zddOrd726DhZa) {
        var hs_sat26Dk7L = new $hs.Thunk();
        hs_sat26Dk7L.evaluateOnce = function () {
            return hs_zdcmin125uTrW.hscall(hs_zddEq326DhZ9, hs_zddOrd726DhZa);
        };
        var hs_sat26Dk7M = new $hs.Thunk();
        hs_sat26Dk7M.evaluateOnce = function () {
            return hs_zdcmax125uTrY.hscall(hs_zddEq326DhZ9, hs_zddOrd726DhZa);
        };
        var hs_sat26Dk7N = new $hs.Thunk();
        hs_sat26Dk7N.evaluateOnce = function () {
            return hs_zdczlze125uTs0.hscall(hs_zddEq326DhZ9, hs_zddOrd726DhZa);
        };
        var hs_sat26Dk7O = new $hs.Thunk();
        hs_sat26Dk7O.evaluateOnce = function () {
            return hs_zdczg125uTs2.hscall(hs_zddEq326DhZ9, hs_zddOrd726DhZa);
        };
        var hs_sat26Dk7P = new $hs.Thunk();
        hs_sat26Dk7P.evaluateOnce = function () {
            return hs_zdczgze125uTs4.hscall(hs_zddEq326DhZ9, hs_zddOrd726DhZa);
        };
        var hs_sat26Dk7Q = new $hs.Thunk();
        hs_sat26Dk7Q.evaluateOnce = function () {
            return hs_zdczl125uTs6.hscall(hs_zddEq326DhZ9, hs_zddOrd726DhZa);
        };
        var hs_sat26Dk7R = new $hs.Thunk();
        hs_sat26Dk7R.evaluateOnce = function () {
            return hs_zdccompare125uTs8.hscall(hs_zddEq326DhZ9, hs_zddOrd726DhZa);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq326DhZ9, hs_sat26Dk7R, hs_sat26Dk7Q, hs_sat26Dk7P, hs_sat26Dk7O, hs_sat26Dk7N, hs_sat26Dk7M, hs_sat26Dk7L];
        return $res;
    };
    hs_zdcmin125uTrW.evaluate = function (hs_zddEq326DhZl, hs_zddOrd726DhZm) {
        var hs_zddOrd826DhZn = new $hs.Thunk();
        hs_zddOrd826DhZn.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall(hs_zddEq326DhZl, hs_zddOrd726DhZm);
        };
        var hs_sat26Dk7T = new $hs.Func(2);
        hs_sat26Dk7T.evaluate = function (hs_x26DhZq, hs_y26DhZr) {
            var hs_wild26Dk7S = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd826DhZn, hs_x26DhZq, hs_y26DhZr);
            switch (hs_wild26Dk7S.tag) {
            case 1:
                if (hs_y26DhZr.notEvaluated) {
                    return hs_y26DhZr.hscall();
                } else {
                    return hs_y26DhZr;
                }
            case 2:
                if (hs_x26DhZq.notEvaluated) {
                    return hs_x26DhZq.hscall();
                } else {
                    return hs_x26DhZq;
                }
            }
        };
        if (hs_sat26Dk7T.notEvaluated) {
            return hs_sat26Dk7T.hscall();
        } else {
            return hs_sat26Dk7T;
        }
    };
    hs_zdcmax125uTrY.evaluate = function (hs_zddEq326DhZx, hs_zddOrd726DhZy) {
        var hs_zddOrd826DhZz = new $hs.Thunk();
        hs_zddOrd826DhZz.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall(hs_zddEq326DhZx, hs_zddOrd726DhZy);
        };
        var hs_sat26Dk7V = new $hs.Func(2);
        hs_sat26Dk7V.evaluate = function (hs_x26DhZC, hs_y26DhZD) {
            var hs_wild26Dk7U = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd826DhZz, hs_x26DhZC, hs_y26DhZD);
            switch (hs_wild26Dk7U.tag) {
            case 1:
                if (hs_x26DhZC.notEvaluated) {
                    return hs_x26DhZC.hscall();
                } else {
                    return hs_x26DhZC;
                }
            case 2:
                if (hs_y26DhZD.notEvaluated) {
                    return hs_y26DhZD.hscall();
                } else {
                    return hs_y26DhZD;
                }
            }
        };
        if (hs_sat26Dk7V.notEvaluated) {
            return hs_sat26Dk7V.hscall();
        } else {
            return hs_sat26Dk7V;
        }
    };
    hs_zdczlze125uTs0.evaluate = function (hs_zddEq326DhZJ, hs_zddOrd726DhZK) {
        var hs_zddOrd826DhZL = new $hs.Thunk();
        hs_zddOrd826DhZL.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall(hs_zddEq326DhZJ, hs_zddOrd726DhZK);
        };
        var hs_sat26Dk7X = new $hs.Func(2);
        hs_sat26Dk7X.evaluate = function (hs_x26DhZO, hs_y26DhZP) {
            var hs_wild26Dk7W = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DhZL, hs_x26DhZO, hs_y26DhZP);
            switch (hs_wild26Dk7W.tag) {
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
        if (hs_sat26Dk7X.notEvaluated) {
            return hs_sat26Dk7X.hscall();
        } else {
            return hs_sat26Dk7X;
        }
    };
    hs_zdczg125uTs2.evaluate = function (hs_zddEq326DhZV, hs_zddOrd726DhZW) {
        var hs_zddOrd826DhZX = new $hs.Thunk();
        hs_zddOrd826DhZX.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall(hs_zddEq326DhZV, hs_zddOrd726DhZW);
        };
        var hs_sat26Dk7Z = new $hs.Func(2);
        hs_sat26Dk7Z.evaluate = function (hs_x26Di00, hs_y26Di01) {
            var hs_wild26Dk7Y = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DhZX, hs_x26Di00, hs_y26Di01);
            switch (hs_wild26Dk7Y.tag) {
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
        if (hs_sat26Dk7Z.notEvaluated) {
            return hs_sat26Dk7Z.hscall();
        } else {
            return hs_sat26Dk7Z;
        }
    };
    hs_zdczgze125uTs4.evaluate = function (hs_zddEq326Di07, hs_zddOrd726Di08) {
        var hs_zddOrd826Di09 = new $hs.Thunk();
        hs_zddOrd826Di09.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall(hs_zddEq326Di07, hs_zddOrd726Di08);
        };
        var hs_sat26Dk81 = new $hs.Func(2);
        hs_sat26Dk81.evaluate = function (hs_x26Di0c, hs_y26Di0d) {
            var hs_wild26Dk80 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826Di09, hs_x26Di0c, hs_y26Di0d);
            switch (hs_wild26Dk80.tag) {
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
        if (hs_sat26Dk81.notEvaluated) {
            return hs_sat26Dk81.hscall();
        } else {
            return hs_sat26Dk81;
        }
    };
    hs_zdczl125uTs6.evaluate = function (hs_zddEq326Di0j, hs_zddOrd726Di0k) {
        var hs_zddOrd826Di0l = new $hs.Thunk();
        hs_zddOrd826Di0l.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall(hs_zddEq326Di0j, hs_zddOrd726Di0k);
        };
        var hs_sat26Dk83 = new $hs.Func(2);
        hs_sat26Dk83.evaluate = function (hs_x26Di0o, hs_y26Di0p) {
            var hs_wild26Dk82 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826Di0l, hs_x26Di0o, hs_y26Di0p);
            switch (hs_wild26Dk82.tag) {
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
        if (hs_sat26Dk83.notEvaluated) {
            return hs_sat26Dk83.hscall();
        } else {
            return hs_sat26Dk83;
        }
    };
    hs_zdccompare125uTs8.evaluate = function (hs_zddEq326Di0v, hs_zddOrd726Di0w) {
        var hs_zddOrd826Di0x = new $hs.Thunk();
        hs_zddOrd826Di0x.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall(hs_zddEq326Di0v, hs_zddOrd726Di0w);
        };
        var hs_sat26Dk89 = new $hs.Func(2);
        hs_sat26Dk89.evaluate = function (hs_ds26Di0A, hs_ds126Di0C) {
            var hs_wild26Dk85 = hs_ds26Di0A;
            if (hs_ds26Di0A.notEvaluated) {
                hs_wild26Dk85 = hs_ds26Di0A.hscall();
            }
            switch (hs_wild26Dk85.tag) {
            case 1:
                var hs_wild126Dk84 = hs_ds126Di0C;
                if (hs_ds126Di0C.notEvaluated) {
                    hs_wild126Dk84 = hs_ds126Di0C.hscall();
                }
                switch (hs_wild126Dk84.tag) {
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
                var hs_ds226Di0L = hs_wild26Dk85.data[0];
                var hs_ds326Di0P = hs_wild26Dk85.data[1];
                var hs_wild126Dk88 = hs_ds126Di0C;
                if (hs_ds126Di0C.notEvaluated) {
                    hs_wild126Dk88 = hs_ds126Di0C.hscall();
                }
                switch (hs_wild126Dk88.tag) {
                case 1:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_y26Di0M = hs_wild126Dk88.data[0];
                    var hs_ys26Di0Q = hs_wild126Dk88.data[1];
                    var hs_wild226Di0O = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726Di0w, hs_ds226Di0L, hs_y26Di0M);
                    switch (hs_wild226Di0O.tag) {
                    case 2:
                        return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826Di0x, hs_ds326Di0P, hs_ys26Di0Q);
                    default:
                        if (hs_wild226Di0O.notEvaluated) {
                            return hs_wild226Di0O.hscall();
                        } else {
                            return hs_wild226Di0O;
                        }
                    }
                }
            }
        };
        if (hs_sat26Dk89.notEvaluated) {
            return hs_sat26Dk89.hscall();
        } else {
            return hs_sat26Dk89;
        }
    };
    hs_zddOrd25uTsa.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall(hs_zddEq125uTqK, $hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zdccompare225uTsc.evaluate = function (hs_ds26Di0U, hs_ds126Di0W) {
        var hs_wild26Dk8b = hs_ds26Di0U;
        if (hs_ds26Di0U.notEvaluated) {
            hs_wild26Dk8b = hs_ds26Di0U.hscall();
        }
        switch (hs_wild26Dk8b.tag) {
        case 1:
            var hs_wild126Dk8a = hs_ds126Di0W;
            if (hs_ds126Di0W.notEvaluated) {
                hs_wild126Dk8a = hs_ds126Di0W.hscall();
            }
            switch (hs_wild126Dk8a.tag) {
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
            var hs_ds226Di15 = hs_wild26Dk8b.data[0];
            var hs_ds326Di19 = hs_wild26Dk8b.data[1];
            var hs_wild126Dk8e = hs_ds126Di0W;
            if (hs_ds126Di0W.notEvaluated) {
                hs_wild126Dk8e = hs_ds126Di0W.hscall();
            }
            switch (hs_wild126Dk8e.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var hs_y26Di16 = hs_wild126Dk8e.data[0];
                var hs_ys26Di1a = hs_wild126Dk8e.data[1];
                var hs_wild226Di18 = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_ds226Di15, hs_y26Di16);
                switch (hs_wild226Di18.tag) {
                case 2:
                    return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd25uTsa, hs_ds326Di19, hs_ys26Di1a);
                default:
                    if (hs_wild226Di18.notEvaluated) {
                        return hs_wild226Di18.hscall();
                    } else {
                        return hs_wild226Di18;
                    }
                }
            }
        }
    };
    hs_zddOrd125uTse.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall(hs_zddEq125uTqK, $hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zdczl225uTsg.evaluate = function (hs_x26Di1d, hs_y26Di1e) {
        var hs_wild26Dk8f = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd125uTse, hs_x26Di1d, hs_y26Di1e);
        switch (hs_wild26Dk8f.tag) {
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
    hs_a225uTsi.evaluateOnce = function () {
        return hs_zdczl125uTs6.hscall(hs_zddEq125uTqK, $hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zddOrd225uTsk.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall(hs_zddEq125uTqK, $hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zdczgze225uTsm.evaluate = function (hs_x26Di1i, hs_y26Di1j) {
        var hs_wild26Dk8g = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd225uTsk, hs_x26Di1i, hs_y26Di1j);
        switch (hs_wild26Dk8g.tag) {
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
    hs_a325uTso.evaluateOnce = function () {
        return hs_zdczgze125uTs4.hscall(hs_zddEq125uTqK, $hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zddOrd325uTsq.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall(hs_zddEq125uTqK, $hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zdczg225uTss.evaluate = function (hs_x26Di1n, hs_y26Di1o) {
        var hs_wild26Dk8h = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd325uTsq, hs_x26Di1n, hs_y26Di1o);
        switch (hs_wild26Dk8h.tag) {
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
    hs_a425uTsu.evaluateOnce = function () {
        return hs_zdczg125uTs2.hscall(hs_zddEq125uTqK, $hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zddOrd425uTsw.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall(hs_zddEq125uTqK, $hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zdczlze225uTsy.evaluate = function (hs_x26Di1s, hs_y26Di1t) {
        var hs_wild26Dk8i = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd425uTsw, hs_x26Di1s, hs_y26Di1t);
        switch (hs_wild26Dk8i.tag) {
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
    hs_a525uTsA.evaluateOnce = function () {
        return hs_zdczlze125uTs0.hscall(hs_zddEq125uTqK, $hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zddOrd525uTsC.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall(hs_zddEq125uTqK, $hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zdcmax225uTsE.evaluate = function (hs_x26Di1x, hs_y26Di1y) {
        var hs_wild26Dk8j = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd525uTsC, hs_x26Di1x, hs_y26Di1y);
        switch (hs_wild26Dk8j.tag) {
        case 1:
            if (hs_x26Di1x.notEvaluated) {
                return hs_x26Di1x.hscall();
            } else {
                return hs_x26Di1x;
            }
        case 2:
            if (hs_y26Di1y.notEvaluated) {
                return hs_y26Di1y.hscall();
            } else {
                return hs_y26Di1y;
            }
        }
    };
    hs_a625uTsG.evaluateOnce = function () {
        return hs_zdcmax125uTrY.hscall(hs_zddEq125uTqK, $hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zddOrd625uTsI.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdfOrdZMZN.hscall(hs_zddEq125uTqK, $hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zdcmin225uTsK.evaluate = function (hs_x26Di1C, hs_y26Di1D) {
        var hs_wild26Dk8k = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd625uTsI, hs_x26Di1C, hs_y26Di1D);
        switch (hs_wild26Dk8k.tag) {
        case 1:
            if (hs_y26Di1D.notEvaluated) {
                return hs_y26Di1D.hscall();
            } else {
                return hs_y26Di1D;
            }
        case 2:
            if (hs_x26Di1C.notEvaluated) {
                return hs_x26Di1C.hscall();
            } else {
                return hs_x26Di1C;
            }
        }
    };
    hs_a725uTsM.evaluateOnce = function () {
        return hs_zdcmin125uTrW.hscall(hs_zddEq125uTqK, $hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_a825uTsO.evaluateOnce = function () {
        return hs_zdccompare125uTs8.hscall(hs_zddEq125uTqK, $hs.modules.GHCziClasses.hs_zdfOrdChar);
    };
    hs_zdfOrdZMZN125uTsQ.data = [hs_zddEq125uTqK, hs_a825uTsO, hs_a225uTsi, hs_a325uTso, hs_a425uTsu, hs_a525uTsA, hs_a625uTsG, hs_a725uTsM];
    this.hs_zdfOrdInteger.data = [$hs.modules.GHCziClasses.hs_zdfEqInteger, $hs.modules.GHCziInteger.hs_compareInteger, $hs.modules.GHCziInteger.hs_ltInteger, $hs.modules.GHCziInteger.hs_geInteger, $hs.modules.GHCziInteger.hs_gtInteger, $hs.modules.GHCziInteger.hs_leInteger, hs_zdcmax325uTvs, hs_zdcmin325uTvq];
    hs_zdcmin325uTvq.evaluate = function (hs_x26Di1L, hs_y26Di1M) {
        var hs_wild26Dk8l = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_x26Di1L, hs_y26Di1M);
        switch (hs_wild26Dk8l.tag) {
        case 1:
            if (hs_y26Di1M.notEvaluated) {
                return hs_y26Di1M.hscall();
            } else {
                return hs_y26Di1M;
            }
        case 2:
            if (hs_x26Di1L.notEvaluated) {
                return hs_x26Di1L.hscall();
            } else {
                return hs_x26Di1L;
            }
        }
    };
    hs_zdcmax325uTvs.evaluate = function (hs_x26Di1Q, hs_y26Di1R) {
        var hs_wild26Dk8m = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_x26Di1Q, hs_y26Di1R);
        switch (hs_wild26Dk8m.tag) {
        case 1:
            if (hs_x26Di1Q.notEvaluated) {
                return hs_x26Di1Q.hscall();
            } else {
                return hs_x26Di1Q;
            }
        case 2:
            if (hs_y26Di1R.notEvaluated) {
                return hs_y26Di1R.hscall();
            } else {
                return hs_y26Di1R;
            }
        }
    };
    hs_zdczlze325uTvE.evaluate = function (hs_ds26Di1X, hs_ds126Di20) {
        var hs_wild26Dk8o = hs_ds26Di1X;
        if (hs_ds26Di1X.notEvaluated) {
            hs_wild26Dk8o = hs_ds26Di1X.hscall();
        }
        var hs_x26Di23 = hs_wild26Dk8o.data[0];
        var hs_wild126Dk8n = hs_ds126Di20;
        if (hs_ds126Di20.notEvaluated) {
            hs_wild126Dk8n = hs_ds126Di20.hscall();
        }
        var hs_y26Di24 = hs_wild126Dk8n.data[0];
        throw "primitive operation leFloat#. Not implemeted yet.";
    };
    hs_zdczg325uTvQ.evaluate = function (hs_ds26Di29, hs_ds126Di2c) {
        var hs_wild26Dk8q = hs_ds26Di29;
        if (hs_ds26Di29.notEvaluated) {
            hs_wild26Dk8q = hs_ds26Di29.hscall();
        }
        var hs_x26Di2f = hs_wild26Dk8q.data[0];
        var hs_wild126Dk8p = hs_ds126Di2c;
        if (hs_ds126Di2c.notEvaluated) {
            hs_wild126Dk8p = hs_ds126Di2c.hscall();
        }
        var hs_y26Di2g = hs_wild126Dk8p.data[0];
        throw "primitive operation gtFloat#. Not implemeted yet.";
    };
    hs_zdczgze325uTw2.evaluate = function (hs_ds26Di2l, hs_ds126Di2o) {
        var hs_wild26Dk8s = hs_ds26Di2l;
        if (hs_ds26Di2l.notEvaluated) {
            hs_wild26Dk8s = hs_ds26Di2l.hscall();
        }
        var hs_x26Di2r = hs_wild26Dk8s.data[0];
        var hs_wild126Dk8r = hs_ds126Di2o;
        if (hs_ds126Di2o.notEvaluated) {
            hs_wild126Dk8r = hs_ds126Di2o.hscall();
        }
        var hs_y26Di2s = hs_wild126Dk8r.data[0];
        throw "primitive operation geFloat#. Not implemeted yet.";
    };
    hs_zdczl325uTwe.evaluate = function (hs_ds26Di2x, hs_ds126Di2A) {
        var hs_wild26Dk8u = hs_ds26Di2x;
        if (hs_ds26Di2x.notEvaluated) {
            hs_wild26Dk8u = hs_ds26Di2x.hscall();
        }
        var hs_x26Di2D = hs_wild26Dk8u.data[0];
        var hs_wild126Dk8t = hs_ds126Di2A;
        if (hs_ds126Di2A.notEvaluated) {
            hs_wild126Dk8t = hs_ds126Di2A.hscall();
        }
        var hs_y26Di2E = hs_wild126Dk8t.data[0];
        throw "primitive operation ltFloat#. Not implemeted yet.";
    };
    hs_zdccompare325uTwq.evaluate = function (hs_ds26Di2J, hs_ds126Di2M) {
        var hs_wild26Dk8y = hs_ds26Di2J;
        if (hs_ds26Di2J.notEvaluated) {
            hs_wild26Dk8y = hs_ds26Di2J.hscall();
        }
        var hs_x26Di2P = hs_wild26Dk8y.data[0];
        var hs_wild126Dk8x = hs_ds126Di2M;
        if (hs_ds126Di2M.notEvaluated) {
            hs_wild126Dk8x = hs_ds126Di2M.hscall();
        }
        var hs_y26Di2Q = hs_wild126Dk8x.data[0];
        throw "primitive operation ltFloat#. Not implemeted yet.";
        switch (hs_wild226Dk8w.tag) {
        case 1:
            throw "primitive operation eqFloat#. Not implemeted yet.";
            switch (hs_wild326Dk8v.tag) {
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
    this.hs_zdfOrdFloat.data = [$hs.modules.GHCziClasses.hs_zdfEqFloat, hs_zdccompare325uTwq, hs_zdczl325uTwe, hs_zdczgze325uTw2, hs_zdczg325uTvQ, hs_zdczlze325uTvE, hs_zdcmax425uTwG, hs_zdcmin425uTwE];
    hs_zdcmin425uTwE.evaluate = function (hs_x26Di2Z, hs_y26Di30) {
        var hs_wild26Dk8z = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat, hs_x26Di2Z, hs_y26Di30);
        switch (hs_wild26Dk8z.tag) {
        case 1:
            if (hs_y26Di30.notEvaluated) {
                return hs_y26Di30.hscall();
            } else {
                return hs_y26Di30;
            }
        case 2:
            if (hs_x26Di2Z.notEvaluated) {
                return hs_x26Di2Z.hscall();
            } else {
                return hs_x26Di2Z;
            }
        }
    };
    hs_zdcmax425uTwG.evaluate = function (hs_x26Di34, hs_y26Di35) {
        var hs_wild26Dk8A = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat, hs_x26Di34, hs_y26Di35);
        switch (hs_wild26Dk8A.tag) {
        case 1:
            if (hs_x26Di34.notEvaluated) {
                return hs_x26Di34.hscall();
            } else {
                return hs_x26Di34;
            }
        case 2:
            if (hs_y26Di35.notEvaluated) {
                return hs_y26Di35.hscall();
            } else {
                return hs_y26Di35;
            }
        }
    };
    hs_zdczlze425uTwS.evaluate = function (hs_ds26Di3b, hs_ds126Di3e) {
        var hs_wild26Dk8C = hs_ds26Di3b;
        if (hs_ds26Di3b.notEvaluated) {
            hs_wild26Dk8C = hs_ds26Di3b.hscall();
        }
        var hs_x26Di3h = hs_wild26Dk8C.data[0];
        var hs_wild126Dk8B = hs_ds126Di3e;
        if (hs_ds126Di3e.notEvaluated) {
            hs_wild126Dk8B = hs_ds126Di3e.hscall();
        }
        var hs_y26Di3i = hs_wild126Dk8B.data[0];
        throw "primitive operation <=##. Not implemeted yet.";
    };
    hs_zdczg425uTx4.evaluate = function (hs_ds26Di3n, hs_ds126Di3q) {
        var hs_wild26Dk8E = hs_ds26Di3n;
        if (hs_ds26Di3n.notEvaluated) {
            hs_wild26Dk8E = hs_ds26Di3n.hscall();
        }
        var hs_x26Di3t = hs_wild26Dk8E.data[0];
        var hs_wild126Dk8D = hs_ds126Di3q;
        if (hs_ds126Di3q.notEvaluated) {
            hs_wild126Dk8D = hs_ds126Di3q.hscall();
        }
        var hs_y26Di3u = hs_wild126Dk8D.data[0];
        throw "primitive operation >##. Not implemeted yet.";
    };
    hs_zdczgze425uTxg.evaluate = function (hs_ds26Di3z, hs_ds126Di3C) {
        var hs_wild26Dk8G = hs_ds26Di3z;
        if (hs_ds26Di3z.notEvaluated) {
            hs_wild26Dk8G = hs_ds26Di3z.hscall();
        }
        var hs_x26Di3F = hs_wild26Dk8G.data[0];
        var hs_wild126Dk8F = hs_ds126Di3C;
        if (hs_ds126Di3C.notEvaluated) {
            hs_wild126Dk8F = hs_ds126Di3C.hscall();
        }
        var hs_y26Di3G = hs_wild126Dk8F.data[0];
        throw "primitive operation >=##. Not implemeted yet.";
    };
    hs_zdczl425uTxs.evaluate = function (hs_ds26Di3L, hs_ds126Di3O) {
        var hs_wild26Dk8I = hs_ds26Di3L;
        if (hs_ds26Di3L.notEvaluated) {
            hs_wild26Dk8I = hs_ds26Di3L.hscall();
        }
        var hs_x26Di3R = hs_wild26Dk8I.data[0];
        var hs_wild126Dk8H = hs_ds126Di3O;
        if (hs_ds126Di3O.notEvaluated) {
            hs_wild126Dk8H = hs_ds126Di3O.hscall();
        }
        var hs_y26Di3S = hs_wild126Dk8H.data[0];
        throw "primitive operation <##. Not implemeted yet.";
    };
    hs_zdccompare425uTxE.evaluate = function (hs_ds26Di3X, hs_ds126Di40) {
        var hs_wild26Dk8M = hs_ds26Di3X;
        if (hs_ds26Di3X.notEvaluated) {
            hs_wild26Dk8M = hs_ds26Di3X.hscall();
        }
        var hs_x26Di43 = hs_wild26Dk8M.data[0];
        var hs_wild126Dk8L = hs_ds126Di40;
        if (hs_ds126Di40.notEvaluated) {
            hs_wild126Dk8L = hs_ds126Di40.hscall();
        }
        var hs_y26Di44 = hs_wild126Dk8L.data[0];
        throw "primitive operation <##. Not implemeted yet.";
        switch (hs_wild226Dk8K.tag) {
        case 1:
            throw "primitive operation ==##. Not implemeted yet.";
            switch (hs_wild326Dk8J.tag) {
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
    this.hs_zdfOrdDouble.data = [$hs.modules.GHCziClasses.hs_zdfEqDouble, hs_zdccompare425uTxE, hs_zdczl425uTxs, hs_zdczgze425uTxg, hs_zdczg425uTx4, hs_zdczlze425uTwS, hs_zdcmax525uTxU, hs_zdcmin525uTxS];
    hs_zdcmin525uTxS.evaluate = function (hs_x26Di4d, hs_y26Di4e) {
        var hs_wild26Dk8N = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_x26Di4d, hs_y26Di4e);
        switch (hs_wild26Dk8N.tag) {
        case 1:
            if (hs_y26Di4e.notEvaluated) {
                return hs_y26Di4e.hscall();
            } else {
                return hs_y26Di4e;
            }
        case 2:
            if (hs_x26Di4d.notEvaluated) {
                return hs_x26Di4d.hscall();
            } else {
                return hs_x26Di4d;
            }
        }
    };
    hs_zdcmax525uTxU.evaluate = function (hs_x26Di4i, hs_y26Di4j) {
        var hs_wild26Dk8O = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_x26Di4i, hs_y26Di4j);
        switch (hs_wild26Dk8O.tag) {
        case 1:
            if (hs_x26Di4i.notEvaluated) {
                return hs_x26Di4i.hscall();
            } else {
                return hs_x26Di4i;
            }
        case 2:
            if (hs_y26Di4j.notEvaluated) {
                return hs_y26Di4j.hscall();
            } else {
                return hs_y26Di4j;
            }
        }
    };
    hs_zdczeze525uTy6.evaluate = function (hs_a926Di4p, hs_b26Di4r) {
        var hs_wild26Dk8Q = hs_a926Di4p;
        if (hs_a926Di4p.notEvaluated) {
            hs_wild26Dk8Q = hs_a926Di4p.hscall();
        }
        var hs_wild126Dk8P = hs_b26Di4r;
        if (hs_b26Di4r.notEvaluated) {
            hs_wild126Dk8P = hs_b26Di4r.hscall();
        }
        return 0 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_zdfEqZLZR.data = [hs_zdczeze525uTy6, hs_zdczsze525uTye];
    hs_zdczsze525uTye.evaluate = function (hs_a926Di4x, hs_b26Di4y) {
        var hs_wild26Dk8R = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqZLZR, hs_a926Di4x, hs_b26Di4y);
        switch (hs_wild26Dk8R.tag) {
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
    hs_zdczeze625uTyl.evaluate = function (hs_zddEq326Di4O, hs_zddEq426Di4S, hs_ds26Di4G, hs_ds126Di4K) {
        var hs_wild26Dk8U = hs_ds26Di4G;
        if (hs_ds26Di4G.notEvaluated) {
            hs_wild26Dk8U = hs_ds26Di4G.hscall();
        }
        var hs_a926Di4P = hs_wild26Dk8U.data[0];
        var hs_a1026Di4T = hs_wild26Dk8U.data[1];
        var hs_wild126Dk8T = hs_ds126Di4K;
        if (hs_ds126Di4K.notEvaluated) {
            hs_wild126Dk8T = hs_ds126Di4K.hscall();
        }
        var hs_b126Di4Q = hs_wild126Dk8T.data[0];
        var hs_b226Di4U = hs_wild126Dk8T.data[1];
        var hs_wild226Dk8S = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326Di4O, hs_a926Di4P, hs_b126Di4Q);
        switch (hs_wild226Dk8S.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426Di4S, hs_a1026Di4T, hs_b226Di4U);
        }
    };
    this.hs_zdfEqZLz2cUZR.evaluate = function (hs_zddEq326Di4Z, hs_zddEq426Di50) {
        var hs_sat26Dk8V = new $hs.Thunk();
        hs_sat26Dk8V.evaluateOnce = function () {
            return hs_zdczsze625uTyG.hscall(hs_zddEq326Di4Z, hs_zddEq426Di50);
        };
        var hs_sat26Dk8W = new $hs.Func(2);
        hs_sat26Dk8W.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze625uTyl.hscall(hs_zddEq326Di4Z, hs_zddEq426Di50, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dk8W, hs_sat26Dk8V];
        return $res;
    };
    hs_zdczsze625uTyG.evaluate = function (hs_zddEq326Di56, hs_zddEq426Di57) {
        var hs_zddEq526Di58 = new $hs.Thunk();
        hs_zddEq526Di58.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUZR.hscall(hs_zddEq326Di56, hs_zddEq426Di57);
        };
        var hs_sat26Dk8Y = new $hs.Func(2);
        hs_sat26Dk8Y.evaluate = function (hs_a926Di5b, hs_b26Di5c) {
            var hs_wild26Dk8X = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526Di58, hs_a926Di5b, hs_b26Di5c);
            switch (hs_wild26Dk8X.tag) {
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
        if (hs_sat26Dk8Y.notEvaluated) {
            return hs_sat26Dk8Y.hscall();
        } else {
            return hs_sat26Dk8Y;
        }
    };
    hs_zdczeze725uTz0.evaluate = function (hs_zddEq326Di5w, hs_zddEq426Di5A, hs_zddEq526Di5E, hs_ds26Di5m, hs_ds126Di5r) {
        var hs_wild26Dk91 = hs_ds26Di5m;
        if (hs_ds26Di5m.notEvaluated) {
            hs_wild26Dk91 = hs_ds26Di5m.hscall();
        }
        var hs_a926Di5x = hs_wild26Dk91.data[0];
        var hs_a1026Di5B = hs_wild26Dk91.data[1];
        var hs_a1126Di5F = hs_wild26Dk91.data[2];
        var hs_wild126Dk90 = hs_ds126Di5r;
        if (hs_ds126Di5r.notEvaluated) {
            hs_wild126Dk90 = hs_ds126Di5r.hscall();
        }
        var hs_b126Di5y = hs_wild126Dk90.data[0];
        var hs_b226Di5C = hs_wild126Dk90.data[1];
        var hs_b326Di5G = hs_wild126Dk90.data[2];
        var hs_wild226Dk8Z = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326Di5w, hs_a926Di5x, hs_b126Di5y);
        switch (hs_wild226Dk8Z.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dk92 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426Di5A, hs_a1026Di5B, hs_b226Di5C);
            switch (hs_wild326Dk92.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526Di5E, hs_a1126Di5F, hs_b326Di5G);
            }
        }
    };
    this.hs_zdfEqZLz2cUz2cUZR.evaluate = function (hs_zddEq326Di5M, hs_zddEq426Di5N, hs_zddEq526Di5O) {
        var hs_sat26Dk93 = new $hs.Thunk();
        hs_sat26Dk93.evaluateOnce = function () {
            return hs_zdczsze725uTzs.hscall(hs_zddEq326Di5M, hs_zddEq426Di5N, hs_zddEq526Di5O);
        };
        var hs_sat26Dk94 = new $hs.Func(2);
        hs_sat26Dk94.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze725uTz0.hscall(hs_zddEq326Di5M, hs_zddEq426Di5N, hs_zddEq526Di5O, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dk94, hs_sat26Dk93];
        return $res;
    };
    hs_zdczsze725uTzs.evaluate = function (hs_zddEq326Di5V, hs_zddEq426Di5W, hs_zddEq526Di5X) {
        var hs_zddEq626Di5Y = new $hs.Thunk();
        hs_zddEq626Di5Y.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUZR.hscall(hs_zddEq326Di5V, hs_zddEq426Di5W, hs_zddEq526Di5X);
        };
        var hs_sat26Dk96 = new $hs.Func(2);
        hs_sat26Dk96.evaluate = function (hs_a926Di61, hs_b26Di62) {
            var hs_wild26Dk95 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626Di5Y, hs_a926Di61, hs_b26Di62);
            switch (hs_wild26Dk95.tag) {
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
        if (hs_sat26Dk96.notEvaluated) {
            return hs_sat26Dk96.hscall();
        } else {
            return hs_sat26Dk96;
        }
    };
    hs_zdczeze825uTzQ.evaluate = function (hs_zddEq326Di6p, hs_zddEq426Di6t, hs_zddEq526Di6x, hs_zddEq626Di6B, hs_ds26Di6d, hs_ds126Di6j) {
        var hs_wild26Dk99 = hs_ds26Di6d;
        if (hs_ds26Di6d.notEvaluated) {
            hs_wild26Dk99 = hs_ds26Di6d.hscall();
        }
        var hs_a926Di6q = hs_wild26Dk99.data[0];
        var hs_a1026Di6u = hs_wild26Dk99.data[1];
        var hs_a1126Di6y = hs_wild26Dk99.data[2];
        var hs_a1226Di6C = hs_wild26Dk99.data[3];
        var hs_wild126Dk98 = hs_ds126Di6j;
        if (hs_ds126Di6j.notEvaluated) {
            hs_wild126Dk98 = hs_ds126Di6j.hscall();
        }
        var hs_b126Di6r = hs_wild126Dk98.data[0];
        var hs_b226Di6v = hs_wild126Dk98.data[1];
        var hs_b326Di6z = hs_wild126Dk98.data[2];
        var hs_b426Di6D = hs_wild126Dk98.data[3];
        var hs_wild226Dk97 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326Di6p, hs_a926Di6q, hs_b126Di6r);
        switch (hs_wild226Dk97.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dk9a = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426Di6t, hs_a1026Di6u, hs_b226Di6v);
            switch (hs_wild326Dk9a.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dk9b = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526Di6x, hs_a1126Di6y, hs_b326Di6z);
                switch (hs_wild426Dk9b.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626Di6B, hs_a1226Di6C, hs_b426Di6D);
                }
            }
        }
    };
    this.hs_zdfEqZLz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Di6K, hs_zddEq426Di6L, hs_zddEq526Di6M, hs_zddEq626Di6N) {
        var hs_sat26Dk9c = new $hs.Thunk();
        hs_sat26Dk9c.evaluateOnce = function () {
            return hs_zdczsze825uTAp.hscall(hs_zddEq326Di6K, hs_zddEq426Di6L, hs_zddEq526Di6M, hs_zddEq626Di6N);
        };
        var hs_sat26Dk9d = new $hs.Func(2);
        hs_sat26Dk9d.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze825uTzQ.hscall(hs_zddEq326Di6K, hs_zddEq426Di6L, hs_zddEq526Di6M, hs_zddEq626Di6N, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dk9d, hs_sat26Dk9c];
        return $res;
    };
    hs_zdczsze825uTAp.evaluate = function (hs_zddEq326Di6V, hs_zddEq426Di6W, hs_zddEq526Di6X, hs_zddEq626Di6Y) {
        var hs_zddEq726Di6Z = new $hs.Thunk();
        hs_zddEq726Di6Z.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUZR.hscall(hs_zddEq326Di6V, hs_zddEq426Di6W, hs_zddEq526Di6X, hs_zddEq626Di6Y);
        };
        var hs_sat26Dk9f = new $hs.Func(2);
        hs_sat26Dk9f.evaluate = function (hs_a926Di72, hs_b26Di73) {
            var hs_wild26Dk9e = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726Di6Z, hs_a926Di72, hs_b26Di73);
            switch (hs_wild26Dk9e.tag) {
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
        if (hs_sat26Dk9f.notEvaluated) {
            return hs_sat26Dk9f.hscall();
        } else {
            return hs_sat26Dk9f;
        }
    };
    hs_zdczeze925uTAR.evaluate = function (hs_zddEq326Di7t, hs_zddEq426Di7x, hs_zddEq526Di7B, hs_zddEq626Di7F, hs_zddEq726Di7J, hs_ds26Di7f, hs_ds126Di7m) {
        var hs_wild26Dk9i = hs_ds26Di7f;
        if (hs_ds26Di7f.notEvaluated) {
            hs_wild26Dk9i = hs_ds26Di7f.hscall();
        }
        var hs_a926Di7u = hs_wild26Dk9i.data[0];
        var hs_a1026Di7y = hs_wild26Dk9i.data[1];
        var hs_a1126Di7C = hs_wild26Dk9i.data[2];
        var hs_a1226Di7G = hs_wild26Dk9i.data[3];
        var hs_a1326Di7K = hs_wild26Dk9i.data[4];
        var hs_wild126Dk9h = hs_ds126Di7m;
        if (hs_ds126Di7m.notEvaluated) {
            hs_wild126Dk9h = hs_ds126Di7m.hscall();
        }
        var hs_b126Di7v = hs_wild126Dk9h.data[0];
        var hs_b226Di7z = hs_wild126Dk9h.data[1];
        var hs_b326Di7D = hs_wild126Dk9h.data[2];
        var hs_b426Di7H = hs_wild126Dk9h.data[3];
        var hs_b526Di7L = hs_wild126Dk9h.data[4];
        var hs_wild226Dk9g = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326Di7t, hs_a926Di7u, hs_b126Di7v);
        switch (hs_wild226Dk9g.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dk9j = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426Di7x, hs_a1026Di7y, hs_b226Di7z);
            switch (hs_wild326Dk9j.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dk9k = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526Di7B, hs_a1126Di7C, hs_b326Di7D);
                switch (hs_wild426Dk9k.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dk9l = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626Di7F, hs_a1226Di7G, hs_b426Di7H);
                    switch (hs_wild526Dk9l.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726Di7J, hs_a1326Di7K, hs_b526Di7L);
                    }
                }
            }
        }
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Di7T, hs_zddEq426Di7U, hs_zddEq526Di7V, hs_zddEq626Di7W, hs_zddEq726Di7X) {
        var hs_sat26Dk9m = new $hs.Thunk();
        hs_sat26Dk9m.evaluateOnce = function () {
            return hs_zdczsze925uTBx.hscall(hs_zddEq326Di7T, hs_zddEq426Di7U, hs_zddEq526Di7V, hs_zddEq626Di7W, hs_zddEq726Di7X);
        };
        var hs_sat26Dk9n = new $hs.Func(2);
        hs_sat26Dk9n.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze925uTAR.hscall(hs_zddEq326Di7T, hs_zddEq426Di7U, hs_zddEq526Di7V, hs_zddEq626Di7W, hs_zddEq726Di7X, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dk9n, hs_sat26Dk9m];
        return $res;
    };
    hs_zdczsze925uTBx.evaluate = function (hs_zddEq326Di86, hs_zddEq426Di87, hs_zddEq526Di88, hs_zddEq626Di89, hs_zddEq726Di8a) {
        var hs_zddEq826Di8b = new $hs.Thunk();
        hs_zddEq826Di8b.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326Di86, hs_zddEq426Di87, hs_zddEq526Di88, hs_zddEq626Di89, hs_zddEq726Di8a);
        };
        var hs_sat26Dk9p = new $hs.Func(2);
        hs_sat26Dk9p.evaluate = function (hs_a926Di8e, hs_b26Di8f) {
            var hs_wild26Dk9o = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826Di8b, hs_a926Di8e, hs_b26Di8f);
            switch (hs_wild26Dk9o.tag) {
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
        if (hs_sat26Dk9p.notEvaluated) {
            return hs_sat26Dk9p.hscall();
        } else {
            return hs_sat26Dk9p;
        }
    };
    hs_zdczeze1025uTC3.evaluate = function (hs_zddEq326Di8I, hs_zddEq426Di8M, hs_zddEq526Di8Q, hs_zddEq626Di8U, hs_zddEq726Di8Y, hs_zddEq826Di92, hs_ds26Di8s, hs_ds126Di8A) {
        var hs_wild26Dk9s = hs_ds26Di8s;
        if (hs_ds26Di8s.notEvaluated) {
            hs_wild26Dk9s = hs_ds26Di8s.hscall();
        }
        var hs_a926Di8J = hs_wild26Dk9s.data[0];
        var hs_a1026Di8N = hs_wild26Dk9s.data[1];
        var hs_a1126Di8R = hs_wild26Dk9s.data[2];
        var hs_a1226Di8V = hs_wild26Dk9s.data[3];
        var hs_a1326Di8Z = hs_wild26Dk9s.data[4];
        var hs_a1426Di93 = hs_wild26Dk9s.data[5];
        var hs_wild126Dk9r = hs_ds126Di8A;
        if (hs_ds126Di8A.notEvaluated) {
            hs_wild126Dk9r = hs_ds126Di8A.hscall();
        }
        var hs_b126Di8K = hs_wild126Dk9r.data[0];
        var hs_b226Di8O = hs_wild126Dk9r.data[1];
        var hs_b326Di8S = hs_wild126Dk9r.data[2];
        var hs_b426Di8W = hs_wild126Dk9r.data[3];
        var hs_b526Di90 = hs_wild126Dk9r.data[4];
        var hs_b626Di94 = hs_wild126Dk9r.data[5];
        var hs_wild226Dk9q = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326Di8I, hs_a926Di8J, hs_b126Di8K);
        switch (hs_wild226Dk9q.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dk9t = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426Di8M, hs_a1026Di8N, hs_b226Di8O);
            switch (hs_wild326Dk9t.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dk9u = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526Di8Q, hs_a1126Di8R, hs_b326Di8S);
                switch (hs_wild426Dk9u.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dk9v = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626Di8U, hs_a1226Di8V, hs_b426Di8W);
                    switch (hs_wild526Dk9v.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dk9w = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726Di8Y, hs_a1326Di8Z, hs_b526Di90);
                        switch (hs_wild626Dk9w.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826Di92, hs_a1426Di93, hs_b626Di94);
                        }
                    }
                }
            }
        }
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Di9d, hs_zddEq426Di9e, hs_zddEq526Di9f, hs_zddEq626Di9g, hs_zddEq726Di9h, hs_zddEq826Di9i) {
        var hs_sat26Dk9x = new $hs.Thunk();
        hs_sat26Dk9x.evaluateOnce = function () {
            return hs_zdczsze1025uTCQ.hscall(hs_zddEq326Di9d, hs_zddEq426Di9e, hs_zddEq526Di9f, hs_zddEq626Di9g, hs_zddEq726Di9h, hs_zddEq826Di9i);
        };
        var hs_sat26Dk9y = new $hs.Func(2);
        hs_sat26Dk9y.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze1025uTC3.hscall(hs_zddEq326Di9d, hs_zddEq426Di9e, hs_zddEq526Di9f, hs_zddEq626Di9g, hs_zddEq726Di9h, hs_zddEq826Di9i, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dk9y, hs_sat26Dk9x];
        return $res;
    };
    hs_zdczsze1025uTCQ.evaluate = function (hs_zddEq326Di9s, hs_zddEq426Di9t, hs_zddEq526Di9u, hs_zddEq626Di9v, hs_zddEq726Di9w, hs_zddEq826Di9x) {
        var hs_zddEq926Di9y = new $hs.Thunk();
        hs_zddEq926Di9y.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326Di9s, hs_zddEq426Di9t, hs_zddEq526Di9u, hs_zddEq626Di9v, hs_zddEq726Di9w, hs_zddEq826Di9x);
        };
        var hs_sat26Dk9A = new $hs.Func(2);
        hs_sat26Dk9A.evaluate = function (hs_a926Di9B, hs_b26Di9C) {
            var hs_wild26Dk9z = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq926Di9y, hs_a926Di9B, hs_b26Di9C);
            switch (hs_wild26Dk9z.tag) {
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
        if (hs_sat26Dk9A.notEvaluated) {
            return hs_sat26Dk9A.hscall();
        } else {
            return hs_sat26Dk9A;
        }
    };
    hs_zdczeze1125uTDq.evaluate = function (hs_zddEq326Dia8, hs_zddEq426Diac, hs_zddEq526Diag, hs_zddEq626Diak, hs_zddEq726Diao, hs_zddEq826Dias, hs_zddEq926Diaw, hs_ds26Di9Q, hs_ds126Di9Z) {
        var hs_wild26Dk9D = hs_ds26Di9Q;
        if (hs_ds26Di9Q.notEvaluated) {
            hs_wild26Dk9D = hs_ds26Di9Q.hscall();
        }
        var hs_a926Dia9 = hs_wild26Dk9D.data[0];
        var hs_a1026Diad = hs_wild26Dk9D.data[1];
        var hs_a1126Diah = hs_wild26Dk9D.data[2];
        var hs_a1226Dial = hs_wild26Dk9D.data[3];
        var hs_a1326Diap = hs_wild26Dk9D.data[4];
        var hs_a1426Diat = hs_wild26Dk9D.data[5];
        var hs_a1526Diax = hs_wild26Dk9D.data[6];
        var hs_wild126Dk9C = hs_ds126Di9Z;
        if (hs_ds126Di9Z.notEvaluated) {
            hs_wild126Dk9C = hs_ds126Di9Z.hscall();
        }
        var hs_b126Diaa = hs_wild126Dk9C.data[0];
        var hs_b226Diae = hs_wild126Dk9C.data[1];
        var hs_b326Diai = hs_wild126Dk9C.data[2];
        var hs_b426Diam = hs_wild126Dk9C.data[3];
        var hs_b526Diaq = hs_wild126Dk9C.data[4];
        var hs_b626Diau = hs_wild126Dk9C.data[5];
        var hs_b726Diay = hs_wild126Dk9C.data[6];
        var hs_wild226Dk9B = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326Dia8, hs_a926Dia9, hs_b126Diaa);
        switch (hs_wild226Dk9B.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dk9E = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426Diac, hs_a1026Diad, hs_b226Diae);
            switch (hs_wild326Dk9E.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dk9F = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526Diag, hs_a1126Diah, hs_b326Diai);
                switch (hs_wild426Dk9F.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dk9G = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626Diak, hs_a1226Dial, hs_b426Diam);
                    switch (hs_wild526Dk9G.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dk9H = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726Diao, hs_a1326Diap, hs_b526Diaq);
                        switch (hs_wild626Dk9H.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dk9I = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826Dias, hs_a1426Diat, hs_b626Diau);
                            switch (hs_wild726Dk9I.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq926Diaw, hs_a1526Diax, hs_b726Diay);
                            }
                        }
                    }
                }
            }
        }
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326DiaI, hs_zddEq426DiaJ, hs_zddEq526DiaK, hs_zddEq626DiaL, hs_zddEq726DiaM, hs_zddEq826DiaN, hs_zddEq926DiaO) {
        var hs_sat26Dk9J = new $hs.Thunk();
        hs_sat26Dk9J.evaluateOnce = function () {
            return hs_zdczsze1125uTEk.hscall(hs_zddEq326DiaI, hs_zddEq426DiaJ, hs_zddEq526DiaK, hs_zddEq626DiaL, hs_zddEq726DiaM, hs_zddEq826DiaN, hs_zddEq926DiaO);
        };
        var hs_sat26Dk9K = new $hs.Func(2);
        hs_sat26Dk9K.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze1125uTDq.hscall(hs_zddEq326DiaI, hs_zddEq426DiaJ, hs_zddEq526DiaK, hs_zddEq626DiaL, hs_zddEq726DiaM, hs_zddEq826DiaN, hs_zddEq926DiaO, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dk9K, hs_sat26Dk9J];
        return $res;
    };
    hs_zdczsze1125uTEk.evaluate = function (hs_zddEq326DiaZ, hs_zddEq426Dib0, hs_zddEq526Dib1, hs_zddEq626Dib2, hs_zddEq726Dib3, hs_zddEq826Dib4, hs_zddEq926Dib5) {
        var hs_zddEq1026Dib6 = new $hs.Thunk();
        hs_zddEq1026Dib6.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326DiaZ, hs_zddEq426Dib0, hs_zddEq526Dib1, hs_zddEq626Dib2, hs_zddEq726Dib3, hs_zddEq826Dib4, hs_zddEq926Dib5);
        };
        var hs_sat26Dk9M = new $hs.Func(2);
        hs_sat26Dk9M.evaluate = function (hs_a926Dib9, hs_b26Diba) {
            var hs_wild26Dk9L = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1026Dib6, hs_a926Dib9, hs_b26Diba);
            switch (hs_wild26Dk9L.tag) {
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
        if (hs_sat26Dk9M.notEvaluated) {
            return hs_sat26Dk9M.hscall();
        } else {
            return hs_sat26Dk9M;
        }
    };
    hs_zdczeze1225uTEY.evaluate = function (hs_zddEq326DibJ, hs_zddEq426DibN, hs_zddEq526DibR, hs_zddEq626DibV, hs_zddEq726DibZ, hs_zddEq826Dic3, hs_zddEq926Dic7, hs_zddEq1026Dicb, hs_ds26Dibp, hs_ds126Dibz) {
        var hs_wild26Dk9P = hs_ds26Dibp;
        if (hs_ds26Dibp.notEvaluated) {
            hs_wild26Dk9P = hs_ds26Dibp.hscall();
        }
        var hs_a926DibK = hs_wild26Dk9P.data[0];
        var hs_a1026DibO = hs_wild26Dk9P.data[1];
        var hs_a1126DibS = hs_wild26Dk9P.data[2];
        var hs_a1226DibW = hs_wild26Dk9P.data[3];
        var hs_a1326Dic0 = hs_wild26Dk9P.data[4];
        var hs_a1426Dic4 = hs_wild26Dk9P.data[5];
        var hs_a1526Dic8 = hs_wild26Dk9P.data[6];
        var hs_a1626Dicc = hs_wild26Dk9P.data[7];
        var hs_wild126Dk9O = hs_ds126Dibz;
        if (hs_ds126Dibz.notEvaluated) {
            hs_wild126Dk9O = hs_ds126Dibz.hscall();
        }
        var hs_b126DibL = hs_wild126Dk9O.data[0];
        var hs_b226DibP = hs_wild126Dk9O.data[1];
        var hs_b326DibT = hs_wild126Dk9O.data[2];
        var hs_b426DibX = hs_wild126Dk9O.data[3];
        var hs_b526Dic1 = hs_wild126Dk9O.data[4];
        var hs_b626Dic5 = hs_wild126Dk9O.data[5];
        var hs_b726Dic9 = hs_wild126Dk9O.data[6];
        var hs_b826Dicd = hs_wild126Dk9O.data[7];
        var hs_wild226Dk9N = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326DibJ, hs_a926DibK, hs_b126DibL);
        switch (hs_wild226Dk9N.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dk9Q = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426DibN, hs_a1026DibO, hs_b226DibP);
            switch (hs_wild326Dk9Q.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dk9R = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526DibR, hs_a1126DibS, hs_b326DibT);
                switch (hs_wild426Dk9R.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dk9S = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626DibV, hs_a1226DibW, hs_b426DibX);
                    switch (hs_wild526Dk9S.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dk9T = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726DibZ, hs_a1326Dic0, hs_b526Dic1);
                        switch (hs_wild626Dk9T.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dk9U = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826Dic3, hs_a1426Dic4, hs_b626Dic5);
                            switch (hs_wild726Dk9U.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dk9V = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq926Dic7, hs_a1526Dic8, hs_b726Dic9);
                                switch (hs_wild826Dk9V.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1026Dicb, hs_a1626Dicc, hs_b826Dicd);
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Dico, hs_zddEq426Dicp, hs_zddEq526Dicq, hs_zddEq626Dicr, hs_zddEq726Dics, hs_zddEq826Dict, hs_zddEq926Dicu, hs_zddEq1026Dicv) {
        var hs_sat26Dk9W = new $hs.Thunk();
        hs_sat26Dk9W.evaluateOnce = function () {
            return hs_zdczsze1225uTFZ.hscall(hs_zddEq326Dico, hs_zddEq426Dicp, hs_zddEq526Dicq, hs_zddEq626Dicr, hs_zddEq726Dics, hs_zddEq826Dict, hs_zddEq926Dicu, hs_zddEq1026Dicv);
        };
        var hs_sat26Dk9X = new $hs.Func(2);
        hs_sat26Dk9X.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze1225uTEY.hscall(hs_zddEq326Dico, hs_zddEq426Dicp, hs_zddEq526Dicq, hs_zddEq626Dicr, hs_zddEq726Dics, hs_zddEq826Dict, hs_zddEq926Dicu, hs_zddEq1026Dicv, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dk9X, hs_sat26Dk9W];
        return $res;
    };
    hs_zdczsze1225uTFZ.evaluate = function (hs_zddEq326DicH, hs_zddEq426DicI, hs_zddEq526DicJ, hs_zddEq626DicK, hs_zddEq726DicL, hs_zddEq826DicM, hs_zddEq926DicN, hs_zddEq1026DicO) {
        var hs_zddEq1126DicP = new $hs.Thunk();
        hs_zddEq1126DicP.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326DicH, hs_zddEq426DicI, hs_zddEq526DicJ, hs_zddEq626DicK, hs_zddEq726DicL, hs_zddEq826DicM, hs_zddEq926DicN, hs_zddEq1026DicO);
        };
        var hs_sat26Dk9Z = new $hs.Func(2);
        hs_sat26Dk9Z.evaluate = function (hs_a926DicS, hs_b26DicT) {
            var hs_wild26Dk9Y = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1126DicP, hs_a926DicS, hs_b26DicT);
            switch (hs_wild26Dk9Y.tag) {
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
        if (hs_sat26Dk9Z.notEvaluated) {
            return hs_sat26Dk9Z.hscall();
        } else {
            return hs_sat26Dk9Z;
        }
    };
    hs_zdczeze1325uTGH.evaluate = function (hs_zddEq326Didv, hs_zddEq426Didz, hs_zddEq526DidD, hs_zddEq626DidH, hs_zddEq726DidL, hs_zddEq826DidP, hs_zddEq926DidT, hs_zddEq1026DidX, hs_zddEq1126Die1, hs_ds26Did9, hs_ds126Didk) {
        var hs_wild26Dka2 = hs_ds26Did9;
        if (hs_ds26Did9.notEvaluated) {
            hs_wild26Dka2 = hs_ds26Did9.hscall();
        }
        var hs_a926Didw = hs_wild26Dka2.data[0];
        var hs_a1026DidA = hs_wild26Dka2.data[1];
        var hs_a1126DidE = hs_wild26Dka2.data[2];
        var hs_a1226DidI = hs_wild26Dka2.data[3];
        var hs_a1326DidM = hs_wild26Dka2.data[4];
        var hs_a1426DidQ = hs_wild26Dka2.data[5];
        var hs_a1526DidU = hs_wild26Dka2.data[6];
        var hs_a1626DidY = hs_wild26Dka2.data[7];
        var hs_a1726Die2 = hs_wild26Dka2.data[8];
        var hs_wild126Dka1 = hs_ds126Didk;
        if (hs_ds126Didk.notEvaluated) {
            hs_wild126Dka1 = hs_ds126Didk.hscall();
        }
        var hs_b126Didx = hs_wild126Dka1.data[0];
        var hs_b226DidB = hs_wild126Dka1.data[1];
        var hs_b326DidF = hs_wild126Dka1.data[2];
        var hs_b426DidJ = hs_wild126Dka1.data[3];
        var hs_b526DidN = hs_wild126Dka1.data[4];
        var hs_b626DidR = hs_wild126Dka1.data[5];
        var hs_b726DidV = hs_wild126Dka1.data[6];
        var hs_b826DidZ = hs_wild126Dka1.data[7];
        var hs_b926Die3 = hs_wild126Dka1.data[8];
        var hs_wild226Dka0 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326Didv, hs_a926Didw, hs_b126Didx);
        switch (hs_wild226Dka0.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dka3 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426Didz, hs_a1026DidA, hs_b226DidB);
            switch (hs_wild326Dka3.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dka4 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526DidD, hs_a1126DidE, hs_b326DidF);
                switch (hs_wild426Dka4.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dka5 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626DidH, hs_a1226DidI, hs_b426DidJ);
                    switch (hs_wild526Dka5.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dka6 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726DidL, hs_a1326DidM, hs_b526DidN);
                        switch (hs_wild626Dka6.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dka7 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826DidP, hs_a1426DidQ, hs_b626DidR);
                            switch (hs_wild726Dka7.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dka8 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq926DidT, hs_a1526DidU, hs_b726DidV);
                                switch (hs_wild826Dka8.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dka9 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1026DidX, hs_a1626DidY, hs_b826DidZ);
                                    switch (hs_wild926Dka9.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1126Die1, hs_a1726Die2, hs_b926Die3);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Dief, hs_zddEq426Dieg, hs_zddEq526Dieh, hs_zddEq626Diei, hs_zddEq726Diej, hs_zddEq826Diek, hs_zddEq926Diel, hs_zddEq1026Diem, hs_zddEq1126Dien) {
        var hs_sat26Dkaa = new $hs.Thunk();
        hs_sat26Dkaa.evaluateOnce = function () {
            return hs_zdczsze1325uTHP.hscall(hs_zddEq326Dief, hs_zddEq426Dieg, hs_zddEq526Dieh, hs_zddEq626Diei, hs_zddEq726Diej, hs_zddEq826Diek, hs_zddEq926Diel, hs_zddEq1026Diem, hs_zddEq1126Dien);
        };
        var hs_sat26Dkab = new $hs.Func(2);
        hs_sat26Dkab.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze1325uTGH.hscall(hs_zddEq326Dief, hs_zddEq426Dieg, hs_zddEq526Dieh, hs_zddEq626Diei, hs_zddEq726Diej, hs_zddEq826Diek, hs_zddEq926Diel, hs_zddEq1026Diem, hs_zddEq1126Dien, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dkab, hs_sat26Dkaa];
        return $res;
    };
    hs_zdczsze1325uTHP.evaluate = function (hs_zddEq326DieA, hs_zddEq426DieB, hs_zddEq526DieC, hs_zddEq626DieD, hs_zddEq726DieE, hs_zddEq826DieF, hs_zddEq926DieG, hs_zddEq1026DieH, hs_zddEq1126DieI) {
        var hs_zddEq1226DieJ = new $hs.Thunk();
        hs_zddEq1226DieJ.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326DieA, hs_zddEq426DieB, hs_zddEq526DieC, hs_zddEq626DieD, hs_zddEq726DieE, hs_zddEq826DieF, hs_zddEq926DieG, hs_zddEq1026DieH, hs_zddEq1126DieI);
        };
        var hs_sat26Dkad = new $hs.Func(2);
        hs_sat26Dkad.evaluate = function (hs_a926DieM, hs_b26DieN) {
            var hs_wild26Dkac = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1226DieJ, hs_a926DieM, hs_b26DieN);
            switch (hs_wild26Dkac.tag) {
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
        if (hs_sat26Dkad.notEvaluated) {
            return hs_sat26Dkad.hscall();
        } else {
            return hs_sat26Dkad;
        }
    };
    hs_zdczeze1425uTIB.evaluate = function (hs_zddEq326Difs, hs_zddEq426Difw, hs_zddEq526DifA, hs_zddEq626DifE, hs_zddEq726DifI, hs_zddEq826DifM, hs_zddEq926DifQ, hs_zddEq1026DifU, hs_zddEq1126DifY, hs_zddEq1226Dig2, hs_ds26Dif4, hs_ds126Difg) {
        var hs_wild26Dkag = hs_ds26Dif4;
        if (hs_ds26Dif4.notEvaluated) {
            hs_wild26Dkag = hs_ds26Dif4.hscall();
        }
        var hs_a926Dift = hs_wild26Dkag.data[0];
        var hs_a1026Difx = hs_wild26Dkag.data[1];
        var hs_a1126DifB = hs_wild26Dkag.data[2];
        var hs_a1226DifF = hs_wild26Dkag.data[3];
        var hs_a1326DifJ = hs_wild26Dkag.data[4];
        var hs_a1426DifN = hs_wild26Dkag.data[5];
        var hs_a1526DifR = hs_wild26Dkag.data[6];
        var hs_a1626DifV = hs_wild26Dkag.data[7];
        var hs_a1726DifZ = hs_wild26Dkag.data[8];
        var hs_a1826Dig3 = hs_wild26Dkag.data[9];
        var hs_wild126Dkaf = hs_ds126Difg;
        if (hs_ds126Difg.notEvaluated) {
            hs_wild126Dkaf = hs_ds126Difg.hscall();
        }
        var hs_b126Difu = hs_wild126Dkaf.data[0];
        var hs_b226Dify = hs_wild126Dkaf.data[1];
        var hs_b326DifC = hs_wild126Dkaf.data[2];
        var hs_b426DifG = hs_wild126Dkaf.data[3];
        var hs_b526DifK = hs_wild126Dkaf.data[4];
        var hs_b626DifO = hs_wild126Dkaf.data[5];
        var hs_b726DifS = hs_wild126Dkaf.data[6];
        var hs_b826DifW = hs_wild126Dkaf.data[7];
        var hs_b926Dig0 = hs_wild126Dkaf.data[8];
        var hs_b1026Dig4 = hs_wild126Dkaf.data[9];
        var hs_wild226Dkae = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326Difs, hs_a926Dift, hs_b126Difu);
        switch (hs_wild226Dkae.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkah = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426Difw, hs_a1026Difx, hs_b226Dify);
            switch (hs_wild326Dkah.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkai = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526DifA, hs_a1126DifB, hs_b326DifC);
                switch (hs_wild426Dkai.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkaj = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626DifE, hs_a1226DifF, hs_b426DifG);
                    switch (hs_wild526Dkaj.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkak = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726DifI, hs_a1326DifJ, hs_b526DifK);
                        switch (hs_wild626Dkak.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkal = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826DifM, hs_a1426DifN, hs_b626DifO);
                            switch (hs_wild726Dkal.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkam = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq926DifQ, hs_a1526DifR, hs_b726DifS);
                                switch (hs_wild826Dkam.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dkan = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1026DifU, hs_a1626DifV, hs_b826DifW);
                                    switch (hs_wild926Dkan.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026Dkao = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1126DifY, hs_a1726DifZ, hs_b926Dig0);
                                        switch (hs_wild1026Dkao.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1226Dig2, hs_a1826Dig3, hs_b1026Dig4);
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
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Digh, hs_zddEq426Digi, hs_zddEq526Digj, hs_zddEq626Digk, hs_zddEq726Digl, hs_zddEq826Digm, hs_zddEq926Dign, hs_zddEq1026Digo, hs_zddEq1126Digp, hs_zddEq1226Digq) {
        var hs_sat26Dkap = new $hs.Thunk();
        hs_sat26Dkap.evaluateOnce = function () {
            return hs_zdczsze1425uTJQ.hscall(hs_zddEq326Digh, hs_zddEq426Digi, hs_zddEq526Digj, hs_zddEq626Digk, hs_zddEq726Digl, hs_zddEq826Digm, hs_zddEq926Dign, hs_zddEq1026Digo, hs_zddEq1126Digp, hs_zddEq1226Digq);
        };
        var hs_sat26Dkaq = new $hs.Func(2);
        hs_sat26Dkaq.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze1425uTIB.hscall(hs_zddEq326Digh, hs_zddEq426Digi, hs_zddEq526Digj, hs_zddEq626Digk, hs_zddEq726Digl, hs_zddEq826Digm, hs_zddEq926Dign, hs_zddEq1026Digo, hs_zddEq1126Digp, hs_zddEq1226Digq, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dkaq, hs_sat26Dkap];
        return $res;
    };
    hs_zdczsze1425uTJQ.evaluate = function (hs_zddEq326DigE, hs_zddEq426DigF, hs_zddEq526DigG, hs_zddEq626DigH, hs_zddEq726DigI, hs_zddEq826DigJ, hs_zddEq926DigK, hs_zddEq1026DigL, hs_zddEq1126DigM, hs_zddEq1226DigN) {
        var hs_zddEq1326DigO = new $hs.Thunk();
        hs_zddEq1326DigO.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326DigE, hs_zddEq426DigF, hs_zddEq526DigG, hs_zddEq626DigH, hs_zddEq726DigI, hs_zddEq826DigJ, hs_zddEq926DigK, hs_zddEq1026DigL, hs_zddEq1126DigM, hs_zddEq1226DigN);
        };
        var hs_sat26Dkas = new $hs.Func(2);
        hs_sat26Dkas.evaluate = function (hs_a926DigR, hs_b26DigS) {
            var hs_wild26Dkar = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1326DigO, hs_a926DigR, hs_b26DigS);
            switch (hs_wild26Dkar.tag) {
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
        if (hs_sat26Dkas.notEvaluated) {
            return hs_sat26Dkas.hscall();
        } else {
            return hs_sat26Dkas;
        }
    };
    hs_zdczeze1525uTKG.evaluate = function (hs_zddEq326DihA, hs_zddEq426DihE, hs_zddEq526DihI, hs_zddEq626DihM, hs_zddEq726DihQ, hs_zddEq826DihU, hs_zddEq926DihY, hs_zddEq1026Dii2, hs_zddEq1126Dii6, hs_zddEq1226Diia, hs_zddEq1326Diie, hs_ds26Diha, hs_ds126Dihn) {
        var hs_wild26Dkav = hs_ds26Diha;
        if (hs_ds26Diha.notEvaluated) {
            hs_wild26Dkav = hs_ds26Diha.hscall();
        }
        var hs_a926DihB = hs_wild26Dkav.data[0];
        var hs_a1026DihF = hs_wild26Dkav.data[1];
        var hs_a1126DihJ = hs_wild26Dkav.data[2];
        var hs_a1226DihN = hs_wild26Dkav.data[3];
        var hs_a1326DihR = hs_wild26Dkav.data[4];
        var hs_a1426DihV = hs_wild26Dkav.data[5];
        var hs_a1526DihZ = hs_wild26Dkav.data[6];
        var hs_a1626Dii3 = hs_wild26Dkav.data[7];
        var hs_a1726Dii7 = hs_wild26Dkav.data[8];
        var hs_a1826Diib = hs_wild26Dkav.data[9];
        var hs_a1926Diif = hs_wild26Dkav.data[10];
        var hs_wild126Dkau = hs_ds126Dihn;
        if (hs_ds126Dihn.notEvaluated) {
            hs_wild126Dkau = hs_ds126Dihn.hscall();
        }
        var hs_b126DihC = hs_wild126Dkau.data[0];
        var hs_b226DihG = hs_wild126Dkau.data[1];
        var hs_b326DihK = hs_wild126Dkau.data[2];
        var hs_b426DihO = hs_wild126Dkau.data[3];
        var hs_b526DihS = hs_wild126Dkau.data[4];
        var hs_b626DihW = hs_wild126Dkau.data[5];
        var hs_b726Dii0 = hs_wild126Dkau.data[6];
        var hs_b826Dii4 = hs_wild126Dkau.data[7];
        var hs_b926Dii8 = hs_wild126Dkau.data[8];
        var hs_b1026Diic = hs_wild126Dkau.data[9];
        var hs_b1126Diig = hs_wild126Dkau.data[10];
        var hs_wild226Dkat = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326DihA, hs_a926DihB, hs_b126DihC);
        switch (hs_wild226Dkat.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkaw = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426DihE, hs_a1026DihF, hs_b226DihG);
            switch (hs_wild326Dkaw.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkax = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526DihI, hs_a1126DihJ, hs_b326DihK);
                switch (hs_wild426Dkax.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkay = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626DihM, hs_a1226DihN, hs_b426DihO);
                    switch (hs_wild526Dkay.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkaz = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726DihQ, hs_a1326DihR, hs_b526DihS);
                        switch (hs_wild626Dkaz.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726DkaA = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826DihU, hs_a1426DihV, hs_b626DihW);
                            switch (hs_wild726DkaA.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826DkaB = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq926DihY, hs_a1526DihZ, hs_b726Dii0);
                                switch (hs_wild826DkaB.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926DkaC = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1026Dii2, hs_a1626Dii3, hs_b826Dii4);
                                    switch (hs_wild926DkaC.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026DkaD = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1126Dii6, hs_a1726Dii7, hs_b926Dii8);
                                        switch (hs_wild1026DkaD.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126DkaE = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1226Diia, hs_a1826Diib, hs_b1026Diic);
                                            switch (hs_wild1126DkaE.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1326Diie, hs_a1926Diif, hs_b1126Diig);
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
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Diiu, hs_zddEq426Diiv, hs_zddEq526Diiw, hs_zddEq626Diix, hs_zddEq726Diiy, hs_zddEq826Diiz, hs_zddEq926DiiA, hs_zddEq1026DiiB, hs_zddEq1126DiiC, hs_zddEq1226DiiD, hs_zddEq1326DiiE) {
        var hs_sat26DkaF = new $hs.Thunk();
        hs_sat26DkaF.evaluateOnce = function () {
            return hs_zdczsze1525uTM2.hscall(hs_zddEq326Diiu, hs_zddEq426Diiv, hs_zddEq526Diiw, hs_zddEq626Diix, hs_zddEq726Diiy, hs_zddEq826Diiz, hs_zddEq926DiiA, hs_zddEq1026DiiB, hs_zddEq1126DiiC, hs_zddEq1226DiiD, hs_zddEq1326DiiE);
        };
        var hs_sat26DkaG = new $hs.Func(2);
        hs_sat26DkaG.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze1525uTKG.hscall(hs_zddEq326Diiu, hs_zddEq426Diiv, hs_zddEq526Diiw, hs_zddEq626Diix, hs_zddEq726Diiy, hs_zddEq826Diiz, hs_zddEq926DiiA, hs_zddEq1026DiiB, hs_zddEq1126DiiC, hs_zddEq1226DiiD, hs_zddEq1326DiiE, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DkaG, hs_sat26DkaF];
        return $res;
    };
    hs_zdczsze1525uTM2.evaluate = function (hs_zddEq326DiiT, hs_zddEq426DiiU, hs_zddEq526DiiV, hs_zddEq626DiiW, hs_zddEq726DiiX, hs_zddEq826DiiY, hs_zddEq926DiiZ, hs_zddEq1026Dij0, hs_zddEq1126Dij1, hs_zddEq1226Dij2, hs_zddEq1326Dij3) {
        var hs_zddEq1426Dij4 = new $hs.Thunk();
        hs_zddEq1426Dij4.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326DiiT, hs_zddEq426DiiU, hs_zddEq526DiiV, hs_zddEq626DiiW, hs_zddEq726DiiX, hs_zddEq826DiiY, hs_zddEq926DiiZ, hs_zddEq1026Dij0, hs_zddEq1126Dij1, hs_zddEq1226Dij2, hs_zddEq1326Dij3);
        };
        var hs_sat26DkaI = new $hs.Func(2);
        hs_sat26DkaI.evaluate = function (hs_a926Dij7, hs_b26Dij8) {
            var hs_wild26DkaH = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1426Dij4, hs_a926Dij7, hs_b26Dij8);
            switch (hs_wild26DkaH.tag) {
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
        if (hs_sat26DkaI.notEvaluated) {
            return hs_sat26DkaI.hscall();
        } else {
            return hs_sat26DkaI;
        }
    };
    hs_zdczeze1625uTMW.evaluate = function (hs_zddEq326DijT, hs_zddEq426DijX, hs_zddEq526Dik1, hs_zddEq626Dik5, hs_zddEq726Dik9, hs_zddEq826Dikd, hs_zddEq926Dikh, hs_zddEq1026Dikl, hs_zddEq1126Dikp, hs_zddEq1226Dikt, hs_zddEq1326Dikx, hs_zddEq1426DikB, hs_ds26Dijr, hs_ds126DijF) {
        var hs_wild26DkaL = hs_ds26Dijr;
        if (hs_ds26Dijr.notEvaluated) {
            hs_wild26DkaL = hs_ds26Dijr.hscall();
        }
        var hs_a926DijU = hs_wild26DkaL.data[0];
        var hs_a1026DijY = hs_wild26DkaL.data[1];
        var hs_a1126Dik2 = hs_wild26DkaL.data[2];
        var hs_a1226Dik6 = hs_wild26DkaL.data[3];
        var hs_a1326Dika = hs_wild26DkaL.data[4];
        var hs_a1426Dike = hs_wild26DkaL.data[5];
        var hs_a1526Diki = hs_wild26DkaL.data[6];
        var hs_a1626Dikm = hs_wild26DkaL.data[7];
        var hs_a1726Dikq = hs_wild26DkaL.data[8];
        var hs_a1826Diku = hs_wild26DkaL.data[9];
        var hs_a1926Diky = hs_wild26DkaL.data[10];
        var hs_a2026DikC = hs_wild26DkaL.data[11];
        var hs_wild126DkaK = hs_ds126DijF;
        if (hs_ds126DijF.notEvaluated) {
            hs_wild126DkaK = hs_ds126DijF.hscall();
        }
        var hs_b126DijV = hs_wild126DkaK.data[0];
        var hs_b226DijZ = hs_wild126DkaK.data[1];
        var hs_b326Dik3 = hs_wild126DkaK.data[2];
        var hs_b426Dik7 = hs_wild126DkaK.data[3];
        var hs_b526Dikb = hs_wild126DkaK.data[4];
        var hs_b626Dikf = hs_wild126DkaK.data[5];
        var hs_b726Dikj = hs_wild126DkaK.data[6];
        var hs_b826Dikn = hs_wild126DkaK.data[7];
        var hs_b926Dikr = hs_wild126DkaK.data[8];
        var hs_b1026Dikv = hs_wild126DkaK.data[9];
        var hs_b1126Dikz = hs_wild126DkaK.data[10];
        var hs_b1226DikD = hs_wild126DkaK.data[11];
        var hs_wild226DkaJ = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326DijT, hs_a926DijU, hs_b126DijV);
        switch (hs_wild226DkaJ.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkaM = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426DijX, hs_a1026DijY, hs_b226DijZ);
            switch (hs_wild326DkaM.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DkaN = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526Dik1, hs_a1126Dik2, hs_b326Dik3);
                switch (hs_wild426DkaN.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DkaO = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626Dik5, hs_a1226Dik6, hs_b426Dik7);
                    switch (hs_wild526DkaO.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626DkaP = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726Dik9, hs_a1326Dika, hs_b526Dikb);
                        switch (hs_wild626DkaP.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726DkaQ = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826Dikd, hs_a1426Dike, hs_b626Dikf);
                            switch (hs_wild726DkaQ.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826DkaR = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq926Dikh, hs_a1526Diki, hs_b726Dikj);
                                switch (hs_wild826DkaR.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926DkaS = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1026Dikl, hs_a1626Dikm, hs_b826Dikn);
                                    switch (hs_wild926DkaS.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026DkaT = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1126Dikp, hs_a1726Dikq, hs_b926Dikr);
                                        switch (hs_wild1026DkaT.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126DkaU = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1226Dikt, hs_a1826Diku, hs_b1026Dikv);
                                            switch (hs_wild1126DkaU.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226DkaV = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1326Dikx, hs_a1926Diky, hs_b1126Dikz);
                                                switch (hs_wild1226DkaV.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1426DikB, hs_a2026DikC, hs_b1226DikD);
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
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326DikS, hs_zddEq426DikT, hs_zddEq526DikU, hs_zddEq626DikV, hs_zddEq726DikW, hs_zddEq826DikX, hs_zddEq926DikY, hs_zddEq1026DikZ, hs_zddEq1126Dil0, hs_zddEq1226Dil1, hs_zddEq1326Dil2, hs_zddEq1426Dil3) {
        var hs_sat26DkaW = new $hs.Thunk();
        hs_sat26DkaW.evaluateOnce = function () {
            return hs_zdczsze1625uTOp.hscall(hs_zddEq326DikS, hs_zddEq426DikT, hs_zddEq526DikU, hs_zddEq626DikV, hs_zddEq726DikW, hs_zddEq826DikX, hs_zddEq926DikY, hs_zddEq1026DikZ, hs_zddEq1126Dil0, hs_zddEq1226Dil1, hs_zddEq1326Dil2, hs_zddEq1426Dil3);
        };
        var hs_sat26DkaX = new $hs.Func(2);
        hs_sat26DkaX.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze1625uTMW.hscall(hs_zddEq326DikS, hs_zddEq426DikT, hs_zddEq526DikU, hs_zddEq626DikV, hs_zddEq726DikW, hs_zddEq826DikX, hs_zddEq926DikY, hs_zddEq1026DikZ, hs_zddEq1126Dil0, hs_zddEq1226Dil1, hs_zddEq1326Dil2, hs_zddEq1426Dil3, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DkaX, hs_sat26DkaW];
        return $res;
    };
    hs_zdczsze1625uTOp.evaluate = function (hs_zddEq326Dilj, hs_zddEq426Dilk, hs_zddEq526Dill, hs_zddEq626Dilm, hs_zddEq726Diln, hs_zddEq826Dilo, hs_zddEq926Dilp, hs_zddEq1026Dilq, hs_zddEq1126Dilr, hs_zddEq1226Dils, hs_zddEq1326Dilt, hs_zddEq1426Dilu) {
        var hs_zddEq1526Dilv = new $hs.Thunk();
        hs_zddEq1526Dilv.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326Dilj, hs_zddEq426Dilk, hs_zddEq526Dill, hs_zddEq626Dilm, hs_zddEq726Diln, hs_zddEq826Dilo, hs_zddEq926Dilp, hs_zddEq1026Dilq, hs_zddEq1126Dilr, hs_zddEq1226Dils, hs_zddEq1326Dilt, hs_zddEq1426Dilu);
        };
        var hs_sat26DkaZ = new $hs.Func(2);
        hs_sat26DkaZ.evaluate = function (hs_a926Dily, hs_b26Dilz) {
            var hs_wild26DkaY = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1526Dilv, hs_a926Dily, hs_b26Dilz);
            switch (hs_wild26DkaY.tag) {
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
        if (hs_sat26DkaZ.notEvaluated) {
            return hs_sat26DkaZ.hscall();
        } else {
            return hs_sat26DkaZ;
        }
    };
    hs_zdczeze1725uTPn.evaluate = function (hs_zddEq326Dimn, hs_zddEq426Dimr, hs_zddEq526Dimv, hs_zddEq626Dimz, hs_zddEq726DimD, hs_zddEq826DimH, hs_zddEq926DimL, hs_zddEq1026DimP, hs_zddEq1126DimT, hs_zddEq1226DimX, hs_zddEq1326Din1, hs_zddEq1426Din5, hs_zddEq1526Din9, hs_ds26DilT, hs_ds126Dim8) {
        var hs_wild26Dkb2 = hs_ds26DilT;
        if (hs_ds26DilT.notEvaluated) {
            hs_wild26Dkb2 = hs_ds26DilT.hscall();
        }
        var hs_a926Dimo = hs_wild26Dkb2.data[0];
        var hs_a1026Dims = hs_wild26Dkb2.data[1];
        var hs_a1126Dimw = hs_wild26Dkb2.data[2];
        var hs_a1226DimA = hs_wild26Dkb2.data[3];
        var hs_a1326DimE = hs_wild26Dkb2.data[4];
        var hs_a1426DimI = hs_wild26Dkb2.data[5];
        var hs_a1526DimM = hs_wild26Dkb2.data[6];
        var hs_a1626DimQ = hs_wild26Dkb2.data[7];
        var hs_a1726DimU = hs_wild26Dkb2.data[8];
        var hs_a1826DimY = hs_wild26Dkb2.data[9];
        var hs_a1926Din2 = hs_wild26Dkb2.data[10];
        var hs_a2026Din6 = hs_wild26Dkb2.data[11];
        var hs_a2126Dina = hs_wild26Dkb2.data[12];
        var hs_wild126Dkb1 = hs_ds126Dim8;
        if (hs_ds126Dim8.notEvaluated) {
            hs_wild126Dkb1 = hs_ds126Dim8.hscall();
        }
        var hs_b126Dimp = hs_wild126Dkb1.data[0];
        var hs_b226Dimt = hs_wild126Dkb1.data[1];
        var hs_b326Dimx = hs_wild126Dkb1.data[2];
        var hs_b426DimB = hs_wild126Dkb1.data[3];
        var hs_b526DimF = hs_wild126Dkb1.data[4];
        var hs_b626DimJ = hs_wild126Dkb1.data[5];
        var hs_b726DimN = hs_wild126Dkb1.data[6];
        var hs_b826DimR = hs_wild126Dkb1.data[7];
        var hs_b926DimV = hs_wild126Dkb1.data[8];
        var hs_b1026DimZ = hs_wild126Dkb1.data[9];
        var hs_b1126Din3 = hs_wild126Dkb1.data[10];
        var hs_b1226Din7 = hs_wild126Dkb1.data[11];
        var hs_b1326Dinb = hs_wild126Dkb1.data[12];
        var hs_wild226Dkb0 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326Dimn, hs_a926Dimo, hs_b126Dimp);
        switch (hs_wild226Dkb0.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkb3 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426Dimr, hs_a1026Dims, hs_b226Dimt);
            switch (hs_wild326Dkb3.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkb4 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526Dimv, hs_a1126Dimw, hs_b326Dimx);
                switch (hs_wild426Dkb4.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkb5 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626Dimz, hs_a1226DimA, hs_b426DimB);
                    switch (hs_wild526Dkb5.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkb6 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726DimD, hs_a1326DimE, hs_b526DimF);
                        switch (hs_wild626Dkb6.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkb7 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826DimH, hs_a1426DimI, hs_b626DimJ);
                            switch (hs_wild726Dkb7.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkb8 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq926DimL, hs_a1526DimM, hs_b726DimN);
                                switch (hs_wild826Dkb8.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dkb9 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1026DimP, hs_a1626DimQ, hs_b826DimR);
                                    switch (hs_wild926Dkb9.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026Dkba = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1126DimT, hs_a1726DimU, hs_b926DimV);
                                        switch (hs_wild1026Dkba.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126Dkbb = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1226DimX, hs_a1826DimY, hs_b1026DimZ);
                                            switch (hs_wild1126Dkbb.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226Dkbc = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1326Din1, hs_a1926Din2, hs_b1126Din3);
                                                switch (hs_wild1226Dkbc.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326Dkbd = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1426Din5, hs_a2026Din6, hs_b1226Din7);
                                                    switch (hs_wild1326Dkbd.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1526Din9, hs_a2126Dina, hs_b1326Dinb);
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
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Dinr, hs_zddEq426Dins, hs_zddEq526Dint, hs_zddEq626Dinu, hs_zddEq726Dinv, hs_zddEq826Dinw, hs_zddEq926Dinx, hs_zddEq1026Diny, hs_zddEq1126Dinz, hs_zddEq1226DinA, hs_zddEq1326DinB, hs_zddEq1426DinC, hs_zddEq1526DinD) {
        var hs_sat26Dkbe = new $hs.Thunk();
        hs_sat26Dkbe.evaluateOnce = function () {
            return hs_zdczsze1725uTQX.hscall(hs_zddEq326Dinr, hs_zddEq426Dins, hs_zddEq526Dint, hs_zddEq626Dinu, hs_zddEq726Dinv, hs_zddEq826Dinw, hs_zddEq926Dinx, hs_zddEq1026Diny, hs_zddEq1126Dinz, hs_zddEq1226DinA, hs_zddEq1326DinB, hs_zddEq1426DinC, hs_zddEq1526DinD);
        };
        var hs_sat26Dkbf = new $hs.Func(2);
        hs_sat26Dkbf.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze1725uTPn.hscall(hs_zddEq326Dinr, hs_zddEq426Dins, hs_zddEq526Dint, hs_zddEq626Dinu, hs_zddEq726Dinv, hs_zddEq826Dinw, hs_zddEq926Dinx, hs_zddEq1026Diny, hs_zddEq1126Dinz, hs_zddEq1226DinA, hs_zddEq1326DinB, hs_zddEq1426DinC, hs_zddEq1526DinD, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dkbf, hs_sat26Dkbe];
        return $res;
    };
    hs_zdczsze1725uTQX.evaluate = function (hs_zddEq326DinU, hs_zddEq426DinV, hs_zddEq526DinW, hs_zddEq626DinX, hs_zddEq726DinY, hs_zddEq826DinZ, hs_zddEq926Dio0, hs_zddEq1026Dio1, hs_zddEq1126Dio2, hs_zddEq1226Dio3, hs_zddEq1326Dio4, hs_zddEq1426Dio5, hs_zddEq1526Dio6) {
        var hs_zddEq1626Dio7 = new $hs.Thunk();
        hs_zddEq1626Dio7.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326DinU, hs_zddEq426DinV, hs_zddEq526DinW, hs_zddEq626DinX, hs_zddEq726DinY, hs_zddEq826DinZ, hs_zddEq926Dio0, hs_zddEq1026Dio1, hs_zddEq1126Dio2, hs_zddEq1226Dio3, hs_zddEq1326Dio4, hs_zddEq1426Dio5, hs_zddEq1526Dio6);
        };
        var hs_sat26Dkbh = new $hs.Func(2);
        hs_sat26Dkbh.evaluate = function (hs_a926Dioa, hs_b26Diob) {
            var hs_wild26Dkbg = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1626Dio7, hs_a926Dioa, hs_b26Diob);
            switch (hs_wild26Dkbg.tag) {
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
        if (hs_sat26Dkbh.notEvaluated) {
            return hs_sat26Dkbh.hscall();
        } else {
            return hs_sat26Dkbh;
        }
    };
    hs_zdczeze1825uTRZ.evaluate = function (hs_zddEq326Dip2, hs_zddEq426Dip6, hs_zddEq526Dipa, hs_zddEq626Dipe, hs_zddEq726Dipi, hs_zddEq826Dipm, hs_zddEq926Dipq, hs_zddEq1026Dipu, hs_zddEq1126Dipy, hs_zddEq1226DipC, hs_zddEq1326DipG, hs_zddEq1426DipK, hs_zddEq1526DipO, hs_zddEq1626DipS, hs_ds26Diow, hs_ds126DioM) {
        var hs_wild26Dkbk = hs_ds26Diow;
        if (hs_ds26Diow.notEvaluated) {
            hs_wild26Dkbk = hs_ds26Diow.hscall();
        }
        var hs_a926Dip3 = hs_wild26Dkbk.data[0];
        var hs_a1026Dip7 = hs_wild26Dkbk.data[1];
        var hs_a1126Dipb = hs_wild26Dkbk.data[2];
        var hs_a1226Dipf = hs_wild26Dkbk.data[3];
        var hs_a1326Dipj = hs_wild26Dkbk.data[4];
        var hs_a1426Dipn = hs_wild26Dkbk.data[5];
        var hs_a1526Dipr = hs_wild26Dkbk.data[6];
        var hs_a1626Dipv = hs_wild26Dkbk.data[7];
        var hs_a1726Dipz = hs_wild26Dkbk.data[8];
        var hs_a1826DipD = hs_wild26Dkbk.data[9];
        var hs_a1926DipH = hs_wild26Dkbk.data[10];
        var hs_a2026DipL = hs_wild26Dkbk.data[11];
        var hs_a2126DipP = hs_wild26Dkbk.data[12];
        var hs_a2226DipT = hs_wild26Dkbk.data[13];
        var hs_wild126Dkbj = hs_ds126DioM;
        if (hs_ds126DioM.notEvaluated) {
            hs_wild126Dkbj = hs_ds126DioM.hscall();
        }
        var hs_b126Dip4 = hs_wild126Dkbj.data[0];
        var hs_b226Dip8 = hs_wild126Dkbj.data[1];
        var hs_b326Dipc = hs_wild126Dkbj.data[2];
        var hs_b426Dipg = hs_wild126Dkbj.data[3];
        var hs_b526Dipk = hs_wild126Dkbj.data[4];
        var hs_b626Dipo = hs_wild126Dkbj.data[5];
        var hs_b726Dips = hs_wild126Dkbj.data[6];
        var hs_b826Dipw = hs_wild126Dkbj.data[7];
        var hs_b926DipA = hs_wild126Dkbj.data[8];
        var hs_b1026DipE = hs_wild126Dkbj.data[9];
        var hs_b1126DipI = hs_wild126Dkbj.data[10];
        var hs_b1226DipM = hs_wild126Dkbj.data[11];
        var hs_b1326DipQ = hs_wild126Dkbj.data[12];
        var hs_b1426DipU = hs_wild126Dkbj.data[13];
        var hs_wild226Dkbi = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326Dip2, hs_a926Dip3, hs_b126Dip4);
        switch (hs_wild226Dkbi.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkbl = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426Dip6, hs_a1026Dip7, hs_b226Dip8);
            switch (hs_wild326Dkbl.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkbm = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526Dipa, hs_a1126Dipb, hs_b326Dipc);
                switch (hs_wild426Dkbm.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkbn = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626Dipe, hs_a1226Dipf, hs_b426Dipg);
                    switch (hs_wild526Dkbn.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkbo = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726Dipi, hs_a1326Dipj, hs_b526Dipk);
                        switch (hs_wild626Dkbo.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkbp = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826Dipm, hs_a1426Dipn, hs_b626Dipo);
                            switch (hs_wild726Dkbp.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkbq = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq926Dipq, hs_a1526Dipr, hs_b726Dips);
                                switch (hs_wild826Dkbq.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dkbr = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1026Dipu, hs_a1626Dipv, hs_b826Dipw);
                                    switch (hs_wild926Dkbr.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026Dkbs = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1126Dipy, hs_a1726Dipz, hs_b926DipA);
                                        switch (hs_wild1026Dkbs.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126Dkbt = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1226DipC, hs_a1826DipD, hs_b1026DipE);
                                            switch (hs_wild1126Dkbt.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226Dkbu = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1326DipG, hs_a1926DipH, hs_b1126DipI);
                                                switch (hs_wild1226Dkbu.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326Dkbv = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1426DipK, hs_a2026DipL, hs_b1226DipM);
                                                    switch (hs_wild1326Dkbv.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        var hs_wild1426Dkbw = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1526DipO, hs_a2126DipP, hs_b1326DipQ);
                                                        switch (hs_wild1426Dkbw.tag) {
                                                        case 1:
                                                            var $res = new $hs.Data(1);
                                                            $res.data = [];
                                                            return $res;
                                                        case 2:
                                                            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1626DipS, hs_a2226DipT, hs_b1426DipU);
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
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Diqb, hs_zddEq426Diqc, hs_zddEq526Diqd, hs_zddEq626Diqe, hs_zddEq726Diqf, hs_zddEq826Diqg, hs_zddEq926Diqh, hs_zddEq1026Diqi, hs_zddEq1126Diqj, hs_zddEq1226Diqk, hs_zddEq1326Diql, hs_zddEq1426Diqm, hs_zddEq1526Diqn, hs_zddEq1626Diqo) {
        var hs_sat26Dkbx = new $hs.Thunk();
        hs_sat26Dkbx.evaluateOnce = function () {
            return hs_zdczsze1825uTTG.hscall(hs_zddEq326Diqb, hs_zddEq426Diqc, hs_zddEq526Diqd, hs_zddEq626Diqe, hs_zddEq726Diqf, hs_zddEq826Diqg, hs_zddEq926Diqh, hs_zddEq1026Diqi, hs_zddEq1126Diqj, hs_zddEq1226Diqk, hs_zddEq1326Diql, hs_zddEq1426Diqm, hs_zddEq1526Diqn, hs_zddEq1626Diqo);
        };
        var hs_sat26Dkby = new $hs.Func(2);
        hs_sat26Dkby.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze1825uTRZ.hscall(hs_zddEq326Diqb, hs_zddEq426Diqc, hs_zddEq526Diqd, hs_zddEq626Diqe, hs_zddEq726Diqf, hs_zddEq826Diqg, hs_zddEq926Diqh, hs_zddEq1026Diqi, hs_zddEq1126Diqj, hs_zddEq1226Diqk, hs_zddEq1326Diql, hs_zddEq1426Diqm, hs_zddEq1526Diqn, hs_zddEq1626Diqo, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dkby, hs_sat26Dkbx];
        return $res;
    };
    hs_zdczsze1825uTTG.evaluate = function (hs_zddEq326DiqG, hs_zddEq426DiqH, hs_zddEq526DiqI, hs_zddEq626DiqJ, hs_zddEq726DiqK, hs_zddEq826DiqL, hs_zddEq926DiqM, hs_zddEq1026DiqN, hs_zddEq1126DiqO, hs_zddEq1226DiqP, hs_zddEq1326DiqQ, hs_zddEq1426DiqR, hs_zddEq1526DiqS, hs_zddEq1626DiqT) {
        var hs_zddEq1726DiqU = new $hs.Thunk();
        hs_zddEq1726DiqU.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326DiqG, hs_zddEq426DiqH, hs_zddEq526DiqI, hs_zddEq626DiqJ, hs_zddEq726DiqK, hs_zddEq826DiqL, hs_zddEq926DiqM, hs_zddEq1026DiqN, hs_zddEq1126DiqO, hs_zddEq1226DiqP, hs_zddEq1326DiqQ, hs_zddEq1426DiqR, hs_zddEq1526DiqS, hs_zddEq1626DiqT);
        };
        var hs_sat26DkbA = new $hs.Func(2);
        hs_sat26DkbA.evaluate = function (hs_a926DiqX, hs_b26DiqY) {
            var hs_wild26Dkbz = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1726DiqU, hs_a926DiqX, hs_b26DiqY);
            switch (hs_wild26Dkbz.tag) {
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
        if (hs_sat26DkbA.notEvaluated) {
            return hs_sat26DkbA.hscall();
        } else {
            return hs_sat26DkbA;
        }
    };
    hs_zdczeze1925uTUM.evaluate = function (hs_zddEq326DirS, hs_zddEq426DirW, hs_zddEq526Dis0, hs_zddEq626Dis4, hs_zddEq726Dis8, hs_zddEq826Disc, hs_zddEq926Disg, hs_zddEq1026Disk, hs_zddEq1126Diso, hs_zddEq1226Diss, hs_zddEq1326Disw, hs_zddEq1426DisA, hs_zddEq1526DisE, hs_zddEq1626DisI, hs_zddEq1726DisM, hs_ds26Dirk, hs_ds126DirB) {
        var hs_wild26DkbD = hs_ds26Dirk;
        if (hs_ds26Dirk.notEvaluated) {
            hs_wild26DkbD = hs_ds26Dirk.hscall();
        }
        var hs_a926DirT = hs_wild26DkbD.data[0];
        var hs_a1026DirX = hs_wild26DkbD.data[1];
        var hs_a1126Dis1 = hs_wild26DkbD.data[2];
        var hs_a1226Dis5 = hs_wild26DkbD.data[3];
        var hs_a1326Dis9 = hs_wild26DkbD.data[4];
        var hs_a1426Disd = hs_wild26DkbD.data[5];
        var hs_a1526Dish = hs_wild26DkbD.data[6];
        var hs_a1626Disl = hs_wild26DkbD.data[7];
        var hs_a1726Disp = hs_wild26DkbD.data[8];
        var hs_a1826Dist = hs_wild26DkbD.data[9];
        var hs_a1926Disx = hs_wild26DkbD.data[10];
        var hs_a2026DisB = hs_wild26DkbD.data[11];
        var hs_a2126DisF = hs_wild26DkbD.data[12];
        var hs_a2226DisJ = hs_wild26DkbD.data[13];
        var hs_a2326DisN = hs_wild26DkbD.data[14];
        var hs_wild126DkbC = hs_ds126DirB;
        if (hs_ds126DirB.notEvaluated) {
            hs_wild126DkbC = hs_ds126DirB.hscall();
        }
        var hs_b126DirU = hs_wild126DkbC.data[0];
        var hs_b226DirY = hs_wild126DkbC.data[1];
        var hs_b326Dis2 = hs_wild126DkbC.data[2];
        var hs_b426Dis6 = hs_wild126DkbC.data[3];
        var hs_b526Disa = hs_wild126DkbC.data[4];
        var hs_b626Dise = hs_wild126DkbC.data[5];
        var hs_b726Disi = hs_wild126DkbC.data[6];
        var hs_b826Dism = hs_wild126DkbC.data[7];
        var hs_b926Disq = hs_wild126DkbC.data[8];
        var hs_b1026Disu = hs_wild126DkbC.data[9];
        var hs_b1126Disy = hs_wild126DkbC.data[10];
        var hs_b1226DisC = hs_wild126DkbC.data[11];
        var hs_b1326DisG = hs_wild126DkbC.data[12];
        var hs_b1426DisK = hs_wild126DkbC.data[13];
        var hs_b1526DisO = hs_wild126DkbC.data[14];
        var hs_wild226DkbB = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326DirS, hs_a926DirT, hs_b126DirU);
        switch (hs_wild226DkbB.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkbE = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq426DirW, hs_a1026DirX, hs_b226DirY);
            switch (hs_wild326DkbE.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DkbF = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq526Dis0, hs_a1126Dis1, hs_b326Dis2);
                switch (hs_wild426DkbF.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DkbG = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq626Dis4, hs_a1226Dis5, hs_b426Dis6);
                    switch (hs_wild526DkbG.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626DkbH = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726Dis8, hs_a1326Dis9, hs_b526Disa);
                        switch (hs_wild626DkbH.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726DkbI = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826Disc, hs_a1426Disd, hs_b626Dise);
                            switch (hs_wild726DkbI.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826DkbJ = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq926Disg, hs_a1526Dish, hs_b726Disi);
                                switch (hs_wild826DkbJ.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926DkbK = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1026Disk, hs_a1626Disl, hs_b826Dism);
                                    switch (hs_wild926DkbK.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026DkbL = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1126Diso, hs_a1726Disp, hs_b926Disq);
                                        switch (hs_wild1026DkbL.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126DkbM = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1226Diss, hs_a1826Dist, hs_b1026Disu);
                                            switch (hs_wild1126DkbM.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226DkbN = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1326Disw, hs_a1926Disx, hs_b1126Disy);
                                                switch (hs_wild1226DkbN.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326DkbO = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1426DisA, hs_a2026DisB, hs_b1226DisC);
                                                    switch (hs_wild1326DkbO.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        var hs_wild1426DkbP = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1526DisE, hs_a2126DisF, hs_b1326DisG);
                                                        switch (hs_wild1426DkbP.tag) {
                                                        case 1:
                                                            var $res = new $hs.Data(1);
                                                            $res.data = [];
                                                            return $res;
                                                        case 2:
                                                            var hs_wild1526DkbQ = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1626DisI, hs_a2226DisJ, hs_b1426DisK);
                                                            switch (hs_wild1526DkbQ.tag) {
                                                            case 1:
                                                                var $res = new $hs.Data(1);
                                                                $res.data = [];
                                                                return $res;
                                                            case 2:
                                                                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1726DisM, hs_a2326DisN, hs_b1526DisO);
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
    this.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Dit6, hs_zddEq426Dit7, hs_zddEq526Dit8, hs_zddEq626Dit9, hs_zddEq726Dita, hs_zddEq826Ditb, hs_zddEq926Ditc, hs_zddEq1026Ditd, hs_zddEq1126Dite, hs_zddEq1226Ditf, hs_zddEq1326Ditg, hs_zddEq1426Dith, hs_zddEq1526Diti, hs_zddEq1626Ditj, hs_zddEq1726Ditk) {
        var hs_sat26DkbR = new $hs.Thunk();
        hs_sat26DkbR.evaluateOnce = function () {
            return hs_zdczsze1925uTWA.hscall(hs_zddEq326Dit6, hs_zddEq426Dit7, hs_zddEq526Dit8, hs_zddEq626Dit9, hs_zddEq726Dita, hs_zddEq826Ditb, hs_zddEq926Ditc, hs_zddEq1026Ditd, hs_zddEq1126Dite, hs_zddEq1226Ditf, hs_zddEq1326Ditg, hs_zddEq1426Dith, hs_zddEq1526Diti, hs_zddEq1626Ditj, hs_zddEq1726Ditk);
        };
        var hs_sat26DkbS = new $hs.Func(2);
        hs_sat26DkbS.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze1925uTUM.hscall(hs_zddEq326Dit6, hs_zddEq426Dit7, hs_zddEq526Dit8, hs_zddEq626Dit9, hs_zddEq726Dita, hs_zddEq826Ditb, hs_zddEq926Ditc, hs_zddEq1026Ditd, hs_zddEq1126Dite, hs_zddEq1226Ditf, hs_zddEq1326Ditg, hs_zddEq1426Dith, hs_zddEq1526Diti, hs_zddEq1626Ditj, hs_zddEq1726Ditk, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DkbS, hs_sat26DkbR];
        return $res;
    };
    hs_zdczsze1925uTWA.evaluate = function (hs_zddEq326DitD, hs_zddEq426DitE, hs_zddEq526DitF, hs_zddEq626DitG, hs_zddEq726DitH, hs_zddEq826DitI, hs_zddEq926DitJ, hs_zddEq1026DitK, hs_zddEq1126DitL, hs_zddEq1226DitM, hs_zddEq1326DitN, hs_zddEq1426DitO, hs_zddEq1526DitP, hs_zddEq1626DitQ, hs_zddEq1726DitR) {
        var hs_zddEq1826DitS = new $hs.Thunk();
        hs_zddEq1826DitS.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfEqZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326DitD, hs_zddEq426DitE, hs_zddEq526DitF, hs_zddEq626DitG, hs_zddEq726DitH, hs_zddEq826DitI, hs_zddEq926DitJ, hs_zddEq1026DitK, hs_zddEq1126DitL, hs_zddEq1226DitM, hs_zddEq1326DitN, hs_zddEq1426DitO, hs_zddEq1526DitP, hs_zddEq1626DitQ, hs_zddEq1726DitR);
        };
        var hs_sat26DkbU = new $hs.Func(2);
        hs_sat26DkbU.evaluate = function (hs_a926DitV, hs_b26DitW) {
            var hs_wild26DkbT = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1826DitS, hs_a926DitV, hs_b26DitW);
            switch (hs_wild26DkbT.tag) {
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
        if (hs_sat26DkbU.notEvaluated) {
            return hs_sat26DkbU.hscall();
        } else {
            return hs_sat26DkbU;
        }
    };
    hs_zdczeze2025uTXK.evaluate = function (hs_a926Diu3, hs_b26Diu5) {
        var hs_wild26DkbW = hs_a926Diu3;
        if (hs_a926Diu3.notEvaluated) {
            hs_wild26DkbW = hs_a926Diu3.hscall();
        }
        switch (hs_wild26DkbW.tag) {
        case 1:
            var hs_wild126DkbV = hs_b26Diu5;
            if (hs_b26Diu5.notEvaluated) {
                hs_wild126DkbV = hs_b26Diu5.hscall();
            }
            switch (hs_wild126DkbV.tag) {
            case 1:
                return 0 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 0 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 2:
            var hs_wild126DkbX = hs_b26Diu5;
            if (hs_b26Diu5.notEvaluated) {
                hs_wild126DkbX = hs_b26Diu5.hscall();
            }
            switch (hs_wild126DkbX.tag) {
            case 1:
                return 1 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 1 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        }
    };
    this.hs_zdfEqBool.data = [hs_zdczeze2025uTXK, hs_zdczsze2025uTXT];
    hs_zdczsze2025uTXT.evaluate = function (hs_a926Diuc, hs_b26Diud) {
        var hs_wild26DkbY = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqBool, hs_a926Diuc, hs_b26Diud);
        switch (hs_wild26DkbY.tag) {
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
    hs_zdczeze2125uTY0.evaluate = function (hs_a926Diuj, hs_b26Diul) {
        var hs_wild26Dkc0 = hs_a926Diuj;
        if (hs_a926Diuj.notEvaluated) {
            hs_wild26Dkc0 = hs_a926Diuj.hscall();
        }
        switch (hs_wild26Dkc0.tag) {
        case 1:
            var hs_wild126DkbZ = hs_b26Diul;
            if (hs_b26Diul.notEvaluated) {
                hs_wild126DkbZ = hs_b26Diul.hscall();
            }
            switch (hs_wild126DkbZ.tag) {
            case 1:
                return 0 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 0 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 0 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 2:
            var hs_wild126Dkc1 = hs_b26Diul;
            if (hs_b26Diul.notEvaluated) {
                hs_wild126Dkc1 = hs_b26Diul.hscall();
            }
            switch (hs_wild126Dkc1.tag) {
            case 1:
                return 1 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 1 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 1 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 3:
            var hs_wild126Dkc2 = hs_b26Diul;
            if (hs_b26Diul.notEvaluated) {
                hs_wild126Dkc2 = hs_b26Diul.hscall();
            }
            switch (hs_wild126Dkc2.tag) {
            case 1:
                return 2 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 2 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 2 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        }
    };
    this.hs_zdfEqOrdering.data = [hs_zdczeze2125uTY0, hs_zdczsze2125uTYa];
    hs_zdczsze2125uTYa.evaluate = function (hs_a926Diut, hs_b26Diuu) {
        var hs_wild26Dkc3 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqOrdering, hs_a926Diut, hs_b26Diuu);
        switch (hs_wild26Dkc3.tag) {
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
    hs_zdczlze525uTYh.evaluate = function (hs_a926DiuA, hs_b26DiuC) {
        var hs_wild26Dkc5 = hs_a926DiuA;
        if (hs_a926DiuA.notEvaluated) {
            hs_wild26Dkc5 = hs_a926DiuA.hscall();
        }
        var hs_wild126Dkc4 = hs_b26DiuC;
        if (hs_b26DiuC.notEvaluated) {
            hs_wild126Dkc4 = hs_b26DiuC.hscall();
        }
        var $res = new $hs.Data(2);
        $res.data = [];
        return $res;
    };
    hs_zdczg525uTYp.evaluate = function (hs_a926DiuI, hs_b26DiuK) {
        var hs_wild26Dkc7 = hs_a926DiuI;
        if (hs_a926DiuI.notEvaluated) {
            hs_wild26Dkc7 = hs_a926DiuI.hscall();
        }
        var hs_wild126Dkc6 = hs_b26DiuK;
        if (hs_b26DiuK.notEvaluated) {
            hs_wild126Dkc6 = hs_b26DiuK.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [];
        return $res;
    };
    hs_zdczgze525uTYx.evaluate = function (hs_a926DiuQ, hs_b26DiuS) {
        var hs_wild26Dkc9 = hs_a926DiuQ;
        if (hs_a926DiuQ.notEvaluated) {
            hs_wild26Dkc9 = hs_a926DiuQ.hscall();
        }
        var hs_wild126Dkc8 = hs_b26DiuS;
        if (hs_b26DiuS.notEvaluated) {
            hs_wild126Dkc8 = hs_b26DiuS.hscall();
        }
        var $res = new $hs.Data(2);
        $res.data = [];
        return $res;
    };
    hs_zdczl525uTYF.evaluate = function (hs_a926DiuY, hs_b26Div0) {
        var hs_wild26Dkcb = hs_a926DiuY;
        if (hs_a926DiuY.notEvaluated) {
            hs_wild26Dkcb = hs_a926DiuY.hscall();
        }
        var hs_wild126Dkca = hs_b26Div0;
        if (hs_b26Div0.notEvaluated) {
            hs_wild126Dkca = hs_b26Div0.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [];
        return $res;
    };
    hs_zdccompare525uTYN.evaluate = function (hs_a926Div6, hs_b26Div8) {
        var hs_wild26Dkcd = hs_a926Div6;
        if (hs_a926Div6.notEvaluated) {
            hs_wild26Dkcd = hs_a926Div6.hscall();
        }
        var hs_wild126Dkcc = hs_b26Div8;
        if (hs_b26Div8.notEvaluated) {
            hs_wild126Dkcc = hs_b26Div8.hscall();
        }
        var $res = new $hs.Data(2);
        $res.data = [];
        return $res;
    };
    this.hs_zdfOrdZLZR.data = [$hs.modules.GHCziClasses.hs_zdfEqZLZR, hs_zdccompare525uTYN, hs_zdczl525uTYF, hs_zdczgze525uTYx, hs_zdczg525uTYp, hs_zdczlze525uTYh, hs_zdcmax625uTYX, hs_zdcmin625uTYV];
    hs_zdcmin625uTYV.evaluate = function (hs_x26Divg, hs_y26Divh) {
        var hs_wild26Dkce = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdZLZR, hs_x26Divg, hs_y26Divh);
        switch (hs_wild26Dkce.tag) {
        case 1:
            if (hs_y26Divh.notEvaluated) {
                return hs_y26Divh.hscall();
            } else {
                return hs_y26Divh;
            }
        case 2:
            if (hs_x26Divg.notEvaluated) {
                return hs_x26Divg.hscall();
            } else {
                return hs_x26Divg;
            }
        }
    };
    hs_zdcmax625uTYX.evaluate = function (hs_x26Divl, hs_y26Divm) {
        var hs_wild26Dkcf = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdZLZR, hs_x26Divl, hs_y26Divm);
        switch (hs_wild26Dkcf.tag) {
        case 1:
            if (hs_x26Divl.notEvaluated) {
                return hs_x26Divl.hscall();
            } else {
                return hs_x26Divl;
            }
        case 2:
            if (hs_y26Divm.notEvaluated) {
                return hs_y26Divm.hscall();
            } else {
                return hs_y26Divm;
            }
        }
    };
    hs_zdczlze625uTZ9.evaluate = function (hs_zddEq326DivK, hs_zddOrd726DivD, hs_zddOrd826DivH, hs_a926Divv, hs_b26Divz) {
        var hs_wild26Dkci = hs_a926Divv;
        if (hs_a926Divv.notEvaluated) {
            hs_wild26Dkci = hs_a926Divv.hscall();
        }
        var hs_a1026DivE = hs_wild26Dkci.data[0];
        var hs_a1126DivI = hs_wild26Dkci.data[1];
        var hs_wild126Dkch = hs_b26Divz;
        if (hs_b26Divz.notEvaluated) {
            hs_wild126Dkch = hs_b26Divz.hscall();
        }
        var hs_b126DivF = hs_wild126Dkch.data[0];
        var hs_b226DivJ = hs_wild126Dkch.data[1];
        var hs_wild226Dkcg = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DivD, hs_a1026DivE, hs_b126DivF);
        switch (hs_wild226Dkcg.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd826DivH, hs_a1126DivI, hs_b226DivJ);
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczg625uTZw.evaluate = function (hs_zddEq326Diw7, hs_zddOrd726Diw0, hs_zddOrd826Diw4, hs_a926DivS, hs_b26DivW) {
        var hs_wild26Dkcl = hs_a926DivS;
        if (hs_a926DivS.notEvaluated) {
            hs_wild26Dkcl = hs_a926DivS.hscall();
        }
        var hs_a1026Diw1 = hs_wild26Dkcl.data[0];
        var hs_a1126Diw5 = hs_wild26Dkcl.data[1];
        var hs_wild126Dkck = hs_b26DivW;
        if (hs_b26DivW.notEvaluated) {
            hs_wild126Dkck = hs_b26DivW.hscall();
        }
        var hs_b126Diw2 = hs_wild126Dkck.data[0];
        var hs_b226Diw6 = hs_wild126Dkck.data[1];
        var hs_wild226Dkcj = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726Diw0, hs_a1026Diw1, hs_b126Diw2);
        switch (hs_wild226Dkcj.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd826Diw4, hs_a1126Diw5, hs_b226Diw6);
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczgze625uTZT.evaluate = function (hs_zddEq326Diwu, hs_zddOrd726Diwn, hs_zddOrd826Diwr, hs_a926Diwf, hs_b26Diwj) {
        var hs_wild26Dkco = hs_a926Diwf;
        if (hs_a926Diwf.notEvaluated) {
            hs_wild26Dkco = hs_a926Diwf.hscall();
        }
        var hs_a1026Diwo = hs_wild26Dkco.data[0];
        var hs_a1126Diws = hs_wild26Dkco.data[1];
        var hs_wild126Dkcn = hs_b26Diwj;
        if (hs_b26Diwj.notEvaluated) {
            hs_wild126Dkcn = hs_b26Diwj.hscall();
        }
        var hs_b126Diwp = hs_wild126Dkcn.data[0];
        var hs_b226Diwt = hs_wild126Dkcn.data[1];
        var hs_wild226Dkcm = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726Diwn, hs_a1026Diwo, hs_b126Diwp);
        switch (hs_wild226Dkcm.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd826Diwr, hs_a1126Diws, hs_b226Diwt);
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl625uU0g.evaluate = function (hs_zddEq326DiwR, hs_zddOrd726DiwK, hs_zddOrd826DiwO, hs_a926DiwC, hs_b26DiwG) {
        var hs_wild26Dkcr = hs_a926DiwC;
        if (hs_a926DiwC.notEvaluated) {
            hs_wild26Dkcr = hs_a926DiwC.hscall();
        }
        var hs_a1026DiwL = hs_wild26Dkcr.data[0];
        var hs_a1126DiwP = hs_wild26Dkcr.data[1];
        var hs_wild126Dkcq = hs_b26DiwG;
        if (hs_b26DiwG.notEvaluated) {
            hs_wild126Dkcq = hs_b26DiwG.hscall();
        }
        var hs_b126DiwM = hs_wild126Dkcq.data[0];
        var hs_b226DiwQ = hs_wild126Dkcq.data[1];
        var hs_wild226Dkcp = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiwK, hs_a1026DiwL, hs_b126DiwM);
        switch (hs_wild226Dkcp.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd826DiwO, hs_a1126DiwP, hs_b226DiwQ);
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare625uU0D.evaluate = function (hs_zddEq326Dixe, hs_zddOrd726Dix7, hs_zddOrd826Dixb, hs_a926DiwZ, hs_b26Dix3) {
        var hs_wild26Dkcu = hs_a926DiwZ;
        if (hs_a926DiwZ.notEvaluated) {
            hs_wild26Dkcu = hs_a926DiwZ.hscall();
        }
        var hs_a1026Dix8 = hs_wild26Dkcu.data[0];
        var hs_a1126Dixc = hs_wild26Dkcu.data[1];
        var hs_wild126Dkct = hs_b26Dix3;
        if (hs_b26Dix3.notEvaluated) {
            hs_wild126Dkct = hs_b26Dix3.hscall();
        }
        var hs_b126Dix9 = hs_wild126Dkct.data[0];
        var hs_b226Dixd = hs_wild126Dkct.data[1];
        var hs_wild226Dkcs = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726Dix7, hs_a1026Dix8, hs_b126Dix9);
        switch (hs_wild226Dkcs.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826Dixb, hs_a1126Dixc, hs_b226Dixd);
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    this.hs_zdfOrdZLz2cUZR.evaluate = function (hs_zddEq326Dixm, hs_zddOrd726Dixn, hs_zddOrd826Dixo) {
        var hs_sat26Dkcv = new $hs.Thunk();
        hs_sat26Dkcv.evaluateOnce = function () {
            return hs_zdcmin725uU10.hscall(hs_zddEq326Dixm, hs_zddOrd726Dixn, hs_zddOrd826Dixo);
        };
        var hs_sat26Dkcw = new $hs.Thunk();
        hs_sat26Dkcw.evaluateOnce = function () {
            return hs_zdcmax725uU12.hscall(hs_zddEq326Dixm, hs_zddOrd726Dixn, hs_zddOrd826Dixo);
        };
        var hs_sat26Dkcx = new $hs.Func(2);
        hs_sat26Dkcx.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze625uTZ9.hscall(hs_zddEq326Dixm, hs_zddOrd726Dixn, hs_zddOrd826Dixo, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkcy = new $hs.Func(2);
        hs_sat26Dkcy.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg625uTZw.hscall(hs_zddEq326Dixm, hs_zddOrd726Dixn, hs_zddOrd826Dixo, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkcz = new $hs.Func(2);
        hs_sat26Dkcz.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze625uTZT.hscall(hs_zddEq326Dixm, hs_zddOrd726Dixn, hs_zddOrd826Dixo, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkcA = new $hs.Func(2);
        hs_sat26DkcA.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl625uU0g.hscall(hs_zddEq326Dixm, hs_zddOrd726Dixn, hs_zddOrd826Dixo, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkcB = new $hs.Func(2);
        hs_sat26DkcB.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare625uU0D.hscall(hs_zddEq326Dixm, hs_zddOrd726Dixn, hs_zddOrd826Dixo, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq326Dixm, hs_sat26DkcB, hs_sat26DkcA, hs_sat26Dkcz, hs_sat26Dkcy, hs_sat26Dkcx, hs_sat26Dkcw, hs_sat26Dkcv];
        return $res;
    };
    hs_zdcmin725uU10.evaluate = function (hs_zddEq326DixA, hs_zddOrd726DixB, hs_zddOrd826DixC) {
        var hs_zddOrd926DixD = new $hs.Thunk();
        hs_zddOrd926DixD.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUZR.hscall(hs_zddEq326DixA, hs_zddOrd726DixB, hs_zddOrd826DixC);
        };
        var hs_sat26DkcD = new $hs.Func(2);
        hs_sat26DkcD.evaluate = function (hs_x26DixG, hs_y26DixH) {
            var hs_wild26DkcC = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd926DixD, hs_x26DixG, hs_y26DixH);
            switch (hs_wild26DkcC.tag) {
            case 1:
                if (hs_y26DixH.notEvaluated) {
                    return hs_y26DixH.hscall();
                } else {
                    return hs_y26DixH;
                }
            case 2:
                if (hs_x26DixG.notEvaluated) {
                    return hs_x26DixG.hscall();
                } else {
                    return hs_x26DixG;
                }
            }
        };
        if (hs_sat26DkcD.notEvaluated) {
            return hs_sat26DkcD.hscall();
        } else {
            return hs_sat26DkcD;
        }
    };
    hs_zdcmax725uU12.evaluate = function (hs_zddEq326DixO, hs_zddOrd726DixP, hs_zddOrd826DixQ) {
        var hs_zddOrd926DixR = new $hs.Thunk();
        hs_zddOrd926DixR.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUZR.hscall(hs_zddEq326DixO, hs_zddOrd726DixP, hs_zddOrd826DixQ);
        };
        var hs_sat26DkcF = new $hs.Func(2);
        hs_sat26DkcF.evaluate = function (hs_x26DixU, hs_y26DixV) {
            var hs_wild26DkcE = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd926DixR, hs_x26DixU, hs_y26DixV);
            switch (hs_wild26DkcE.tag) {
            case 1:
                if (hs_x26DixU.notEvaluated) {
                    return hs_x26DixU.hscall();
                } else {
                    return hs_x26DixU;
                }
            case 2:
                if (hs_y26DixV.notEvaluated) {
                    return hs_y26DixV.hscall();
                } else {
                    return hs_y26DixV;
                }
            }
        };
        if (hs_sat26DkcF.notEvaluated) {
            return hs_sat26DkcF.hscall();
        } else {
            return hs_sat26DkcF;
        }
    };
    hs_zdczlze725uU1J.evaluate = function (hs_zddEq326Diyr, hs_zddOrd726Diyg, hs_zddOrd826Diyk, hs_zddOrd926Diyo, hs_a926Diy6, hs_b26Diyb) {
        var hs_wild26DkcI = hs_a926Diy6;
        if (hs_a926Diy6.notEvaluated) {
            hs_wild26DkcI = hs_a926Diy6.hscall();
        }
        var hs_a1026Diyh = hs_wild26DkcI.data[0];
        var hs_a1126Diyl = hs_wild26DkcI.data[1];
        var hs_a1226Diyp = hs_wild26DkcI.data[2];
        var hs_wild126DkcH = hs_b26Diyb;
        if (hs_b26Diyb.notEvaluated) {
            hs_wild126DkcH = hs_b26Diyb.hscall();
        }
        var hs_b126Diyi = hs_wild126DkcH.data[0];
        var hs_b226Diym = hs_wild126DkcH.data[1];
        var hs_b326Diyq = hs_wild126DkcH.data[2];
        var hs_wild226DkcG = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726Diyg, hs_a1026Diyh, hs_b126Diyi);
        switch (hs_wild226DkcG.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkcJ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826Diyk, hs_a1126Diyl, hs_b226Diym);
            switch (hs_wild326DkcJ.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd926Diyo, hs_a1226Diyp, hs_b326Diyq);
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
    hs_zdczg725uU2d.evaluate = function (hs_zddEq326DiyV, hs_zddOrd726DiyK, hs_zddOrd826DiyO, hs_zddOrd926DiyS, hs_a926DiyA, hs_b26DiyF) {
        var hs_wild26DkcM = hs_a926DiyA;
        if (hs_a926DiyA.notEvaluated) {
            hs_wild26DkcM = hs_a926DiyA.hscall();
        }
        var hs_a1026DiyL = hs_wild26DkcM.data[0];
        var hs_a1126DiyP = hs_wild26DkcM.data[1];
        var hs_a1226DiyT = hs_wild26DkcM.data[2];
        var hs_wild126DkcL = hs_b26DiyF;
        if (hs_b26DiyF.notEvaluated) {
            hs_wild126DkcL = hs_b26DiyF.hscall();
        }
        var hs_b126DiyM = hs_wild126DkcL.data[0];
        var hs_b226DiyQ = hs_wild126DkcL.data[1];
        var hs_b326DiyU = hs_wild126DkcL.data[2];
        var hs_wild226DkcK = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiyK, hs_a1026DiyL, hs_b126DiyM);
        switch (hs_wild226DkcK.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkcN = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiyO, hs_a1126DiyP, hs_b226DiyQ);
            switch (hs_wild326DkcN.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd926DiyS, hs_a1226DiyT, hs_b326DiyU);
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
    hs_zdczgze725uU2H.evaluate = function (hs_zddEq326Dizp, hs_zddOrd726Dize, hs_zddOrd826Dizi, hs_zddOrd926Dizm, hs_a926Diz4, hs_b26Diz9) {
        var hs_wild26DkcQ = hs_a926Diz4;
        if (hs_a926Diz4.notEvaluated) {
            hs_wild26DkcQ = hs_a926Diz4.hscall();
        }
        var hs_a1026Dizf = hs_wild26DkcQ.data[0];
        var hs_a1126Dizj = hs_wild26DkcQ.data[1];
        var hs_a1226Dizn = hs_wild26DkcQ.data[2];
        var hs_wild126DkcP = hs_b26Diz9;
        if (hs_b26Diz9.notEvaluated) {
            hs_wild126DkcP = hs_b26Diz9.hscall();
        }
        var hs_b126Dizg = hs_wild126DkcP.data[0];
        var hs_b226Dizk = hs_wild126DkcP.data[1];
        var hs_b326Dizo = hs_wild126DkcP.data[2];
        var hs_wild226DkcO = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726Dize, hs_a1026Dizf, hs_b126Dizg);
        switch (hs_wild226DkcO.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkcR = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826Dizi, hs_a1126Dizj, hs_b226Dizk);
            switch (hs_wild326DkcR.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd926Dizm, hs_a1226Dizn, hs_b326Dizo);
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
    hs_zdczl725uU3b.evaluate = function (hs_zddEq326DizT, hs_zddOrd726DizI, hs_zddOrd826DizM, hs_zddOrd926DizQ, hs_a926Dizy, hs_b26DizD) {
        var hs_wild26DkcU = hs_a926Dizy;
        if (hs_a926Dizy.notEvaluated) {
            hs_wild26DkcU = hs_a926Dizy.hscall();
        }
        var hs_a1026DizJ = hs_wild26DkcU.data[0];
        var hs_a1126DizN = hs_wild26DkcU.data[1];
        var hs_a1226DizR = hs_wild26DkcU.data[2];
        var hs_wild126DkcT = hs_b26DizD;
        if (hs_b26DizD.notEvaluated) {
            hs_wild126DkcT = hs_b26DizD.hscall();
        }
        var hs_b126DizK = hs_wild126DkcT.data[0];
        var hs_b226DizO = hs_wild126DkcT.data[1];
        var hs_b326DizS = hs_wild126DkcT.data[2];
        var hs_wild226DkcS = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DizI, hs_a1026DizJ, hs_b126DizK);
        switch (hs_wild226DkcS.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkcV = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DizM, hs_a1126DizN, hs_b226DizO);
            switch (hs_wild326DkcV.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd926DizQ, hs_a1226DizR, hs_b326DizS);
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
    hs_zdccompare725uU3F.evaluate = function (hs_zddEq326DiAn, hs_zddOrd726DiAc, hs_zddOrd826DiAg, hs_zddOrd926DiAk, hs_a926DiA2, hs_b26DiA7) {
        var hs_wild26DkcY = hs_a926DiA2;
        if (hs_a926DiA2.notEvaluated) {
            hs_wild26DkcY = hs_a926DiA2.hscall();
        }
        var hs_a1026DiAd = hs_wild26DkcY.data[0];
        var hs_a1126DiAh = hs_wild26DkcY.data[1];
        var hs_a1226DiAl = hs_wild26DkcY.data[2];
        var hs_wild126DkcX = hs_b26DiA7;
        if (hs_b26DiA7.notEvaluated) {
            hs_wild126DkcX = hs_b26DiA7.hscall();
        }
        var hs_b126DiAe = hs_wild126DkcX.data[0];
        var hs_b226DiAi = hs_wild126DkcX.data[1];
        var hs_b326DiAm = hs_wild126DkcX.data[2];
        var hs_wild226DkcW = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiAc, hs_a1026DiAd, hs_b126DiAe);
        switch (hs_wild226DkcW.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkcZ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiAg, hs_a1126DiAh, hs_b226DiAi);
            switch (hs_wild326DkcZ.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiAk, hs_a1226DiAl, hs_b326DiAm);
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
    this.hs_zdfOrdZLz2cUz2cUZR.evaluate = function (hs_zddEq326DiAw, hs_zddOrd726DiAx, hs_zddOrd826DiAy, hs_zddOrd926DiAz) {
        var hs_sat26Dkd0 = new $hs.Thunk();
        hs_sat26Dkd0.evaluateOnce = function () {
            return hs_zdcmin825uU49.hscall(hs_zddEq326DiAw, hs_zddOrd726DiAx, hs_zddOrd826DiAy, hs_zddOrd926DiAz);
        };
        var hs_sat26Dkd1 = new $hs.Thunk();
        hs_sat26Dkd1.evaluateOnce = function () {
            return hs_zdcmax825uU4b.hscall(hs_zddEq326DiAw, hs_zddOrd726DiAx, hs_zddOrd826DiAy, hs_zddOrd926DiAz);
        };
        var hs_sat26Dkd2 = new $hs.Func(2);
        hs_sat26Dkd2.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze725uU1J.hscall(hs_zddEq326DiAw, hs_zddOrd726DiAx, hs_zddOrd826DiAy, hs_zddOrd926DiAz, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkd3 = new $hs.Func(2);
        hs_sat26Dkd3.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg725uU2d.hscall(hs_zddEq326DiAw, hs_zddOrd726DiAx, hs_zddOrd826DiAy, hs_zddOrd926DiAz, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkd4 = new $hs.Func(2);
        hs_sat26Dkd4.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze725uU2H.hscall(hs_zddEq326DiAw, hs_zddOrd726DiAx, hs_zddOrd826DiAy, hs_zddOrd926DiAz, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkd5 = new $hs.Func(2);
        hs_sat26Dkd5.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl725uU3b.hscall(hs_zddEq326DiAw, hs_zddOrd726DiAx, hs_zddOrd826DiAy, hs_zddOrd926DiAz, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkd6 = new $hs.Func(2);
        hs_sat26Dkd6.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare725uU3F.hscall(hs_zddEq326DiAw, hs_zddOrd726DiAx, hs_zddOrd826DiAy, hs_zddOrd926DiAz, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq326DiAw, hs_sat26Dkd6, hs_sat26Dkd5, hs_sat26Dkd4, hs_sat26Dkd3, hs_sat26Dkd2, hs_sat26Dkd1, hs_sat26Dkd0];
        return $res;
    };
    hs_zdcmin825uU49.evaluate = function (hs_zddEq326DiAM, hs_zddOrd726DiAN, hs_zddOrd826DiAO, hs_zddOrd926DiAP) {
        var hs_zddOrd1026DiAQ = new $hs.Thunk();
        hs_zddOrd1026DiAQ.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUZR.hscall(hs_zddEq326DiAM, hs_zddOrd726DiAN, hs_zddOrd826DiAO, hs_zddOrd926DiAP);
        };
        var hs_sat26Dkd8 = new $hs.Func(2);
        hs_sat26Dkd8.evaluate = function (hs_x26DiAT, hs_y26DiAU) {
            var hs_wild26Dkd7 = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1026DiAQ, hs_x26DiAT, hs_y26DiAU);
            switch (hs_wild26Dkd7.tag) {
            case 1:
                if (hs_y26DiAU.notEvaluated) {
                    return hs_y26DiAU.hscall();
                } else {
                    return hs_y26DiAU;
                }
            case 2:
                if (hs_x26DiAT.notEvaluated) {
                    return hs_x26DiAT.hscall();
                } else {
                    return hs_x26DiAT;
                }
            }
        };
        if (hs_sat26Dkd8.notEvaluated) {
            return hs_sat26Dkd8.hscall();
        } else {
            return hs_sat26Dkd8;
        }
    };
    hs_zdcmax825uU4b.evaluate = function (hs_zddEq326DiB2, hs_zddOrd726DiB3, hs_zddOrd826DiB4, hs_zddOrd926DiB5) {
        var hs_zddOrd1026DiB6 = new $hs.Thunk();
        hs_zddOrd1026DiB6.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUZR.hscall(hs_zddEq326DiB2, hs_zddOrd726DiB3, hs_zddOrd826DiB4, hs_zddOrd926DiB5);
        };
        var hs_sat26Dkda = new $hs.Func(2);
        hs_sat26Dkda.evaluate = function (hs_x26DiB9, hs_y26DiBa) {
            var hs_wild26Dkd9 = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1026DiB6, hs_x26DiB9, hs_y26DiBa);
            switch (hs_wild26Dkd9.tag) {
            case 1:
                if (hs_x26DiB9.notEvaluated) {
                    return hs_x26DiB9.hscall();
                } else {
                    return hs_x26DiB9;
                }
            case 2:
                if (hs_y26DiBa.notEvaluated) {
                    return hs_y26DiBa.hscall();
                } else {
                    return hs_y26DiBa;
                }
            }
        };
        if (hs_sat26Dkda.notEvaluated) {
            return hs_sat26Dkda.hscall();
        } else {
            return hs_sat26Dkda;
        }
    };
    hs_zdczlze825uU4Y.evaluate = function (hs_zddEq326DiBN, hs_zddOrd726DiBy, hs_zddOrd826DiBC, hs_zddOrd926DiBG, hs_zddOrd1026DiBK, hs_a926DiBm, hs_b26DiBs) {
        var hs_wild26Dkdd = hs_a926DiBm;
        if (hs_a926DiBm.notEvaluated) {
            hs_wild26Dkdd = hs_a926DiBm.hscall();
        }
        var hs_a1026DiBz = hs_wild26Dkdd.data[0];
        var hs_a1126DiBD = hs_wild26Dkdd.data[1];
        var hs_a1226DiBH = hs_wild26Dkdd.data[2];
        var hs_a1326DiBL = hs_wild26Dkdd.data[3];
        var hs_wild126Dkdc = hs_b26DiBs;
        if (hs_b26DiBs.notEvaluated) {
            hs_wild126Dkdc = hs_b26DiBs.hscall();
        }
        var hs_b126DiBA = hs_wild126Dkdc.data[0];
        var hs_b226DiBE = hs_wild126Dkdc.data[1];
        var hs_b326DiBI = hs_wild126Dkdc.data[2];
        var hs_b426DiBM = hs_wild126Dkdc.data[3];
        var hs_wild226Dkdb = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiBy, hs_a1026DiBz, hs_b126DiBA);
        switch (hs_wild226Dkdb.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkde = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiBC, hs_a1126DiBD, hs_b226DiBE);
            switch (hs_wild326Dkde.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkdf = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiBG, hs_a1226DiBH, hs_b326DiBI);
                switch (hs_wild426Dkdf.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1026DiBK, hs_a1326DiBL, hs_b426DiBM);
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
    hs_zdczg825uU5z.evaluate = function (hs_zddEq326DiCo, hs_zddOrd726DiC9, hs_zddOrd826DiCd, hs_zddOrd926DiCh, hs_zddOrd1026DiCl, hs_a926DiBX, hs_b26DiC3) {
        var hs_wild26Dkdi = hs_a926DiBX;
        if (hs_a926DiBX.notEvaluated) {
            hs_wild26Dkdi = hs_a926DiBX.hscall();
        }
        var hs_a1026DiCa = hs_wild26Dkdi.data[0];
        var hs_a1126DiCe = hs_wild26Dkdi.data[1];
        var hs_a1226DiCi = hs_wild26Dkdi.data[2];
        var hs_a1326DiCm = hs_wild26Dkdi.data[3];
        var hs_wild126Dkdh = hs_b26DiC3;
        if (hs_b26DiC3.notEvaluated) {
            hs_wild126Dkdh = hs_b26DiC3.hscall();
        }
        var hs_b126DiCb = hs_wild126Dkdh.data[0];
        var hs_b226DiCf = hs_wild126Dkdh.data[1];
        var hs_b326DiCj = hs_wild126Dkdh.data[2];
        var hs_b426DiCn = hs_wild126Dkdh.data[3];
        var hs_wild226Dkdg = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiC9, hs_a1026DiCa, hs_b126DiCb);
        switch (hs_wild226Dkdg.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkdj = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiCd, hs_a1126DiCe, hs_b226DiCf);
            switch (hs_wild326Dkdj.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkdk = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiCh, hs_a1226DiCi, hs_b326DiCj);
                switch (hs_wild426Dkdk.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd1026DiCl, hs_a1326DiCm, hs_b426DiCn);
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
    hs_zdczgze825uU6a.evaluate = function (hs_zddEq326DiCZ, hs_zddOrd726DiCK, hs_zddOrd826DiCO, hs_zddOrd926DiCS, hs_zddOrd1026DiCW, hs_a926DiCy, hs_b26DiCE) {
        var hs_wild26Dkdn = hs_a926DiCy;
        if (hs_a926DiCy.notEvaluated) {
            hs_wild26Dkdn = hs_a926DiCy.hscall();
        }
        var hs_a1026DiCL = hs_wild26Dkdn.data[0];
        var hs_a1126DiCP = hs_wild26Dkdn.data[1];
        var hs_a1226DiCT = hs_wild26Dkdn.data[2];
        var hs_a1326DiCX = hs_wild26Dkdn.data[3];
        var hs_wild126Dkdm = hs_b26DiCE;
        if (hs_b26DiCE.notEvaluated) {
            hs_wild126Dkdm = hs_b26DiCE.hscall();
        }
        var hs_b126DiCM = hs_wild126Dkdm.data[0];
        var hs_b226DiCQ = hs_wild126Dkdm.data[1];
        var hs_b326DiCU = hs_wild126Dkdm.data[2];
        var hs_b426DiCY = hs_wild126Dkdm.data[3];
        var hs_wild226Dkdl = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiCK, hs_a1026DiCL, hs_b126DiCM);
        switch (hs_wild226Dkdl.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkdo = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiCO, hs_a1126DiCP, hs_b226DiCQ);
            switch (hs_wild326Dkdo.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkdp = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiCS, hs_a1226DiCT, hs_b326DiCU);
                switch (hs_wild426Dkdp.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd1026DiCW, hs_a1326DiCX, hs_b426DiCY);
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
    hs_zdczl825uU6L.evaluate = function (hs_zddEq326DiDA, hs_zddOrd726DiDl, hs_zddOrd826DiDp, hs_zddOrd926DiDt, hs_zddOrd1026DiDx, hs_a926DiD9, hs_b26DiDf) {
        var hs_wild26Dkds = hs_a926DiD9;
        if (hs_a926DiD9.notEvaluated) {
            hs_wild26Dkds = hs_a926DiD9.hscall();
        }
        var hs_a1026DiDm = hs_wild26Dkds.data[0];
        var hs_a1126DiDq = hs_wild26Dkds.data[1];
        var hs_a1226DiDu = hs_wild26Dkds.data[2];
        var hs_a1326DiDy = hs_wild26Dkds.data[3];
        var hs_wild126Dkdr = hs_b26DiDf;
        if (hs_b26DiDf.notEvaluated) {
            hs_wild126Dkdr = hs_b26DiDf.hscall();
        }
        var hs_b126DiDn = hs_wild126Dkdr.data[0];
        var hs_b226DiDr = hs_wild126Dkdr.data[1];
        var hs_b326DiDv = hs_wild126Dkdr.data[2];
        var hs_b426DiDz = hs_wild126Dkdr.data[3];
        var hs_wild226Dkdq = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiDl, hs_a1026DiDm, hs_b126DiDn);
        switch (hs_wild226Dkdq.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkdt = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiDp, hs_a1126DiDq, hs_b226DiDr);
            switch (hs_wild326Dkdt.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkdu = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiDt, hs_a1226DiDu, hs_b326DiDv);
                switch (hs_wild426Dkdu.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1026DiDx, hs_a1326DiDy, hs_b426DiDz);
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
    hs_zdccompare825uU7m.evaluate = function (hs_zddEq326DiEb, hs_zddOrd726DiDW, hs_zddOrd826DiE0, hs_zddOrd926DiE4, hs_zddOrd1026DiE8, hs_a926DiDK, hs_b26DiDQ) {
        var hs_wild26Dkdx = hs_a926DiDK;
        if (hs_a926DiDK.notEvaluated) {
            hs_wild26Dkdx = hs_a926DiDK.hscall();
        }
        var hs_a1026DiDX = hs_wild26Dkdx.data[0];
        var hs_a1126DiE1 = hs_wild26Dkdx.data[1];
        var hs_a1226DiE5 = hs_wild26Dkdx.data[2];
        var hs_a1326DiE9 = hs_wild26Dkdx.data[3];
        var hs_wild126Dkdw = hs_b26DiDQ;
        if (hs_b26DiDQ.notEvaluated) {
            hs_wild126Dkdw = hs_b26DiDQ.hscall();
        }
        var hs_b126DiDY = hs_wild126Dkdw.data[0];
        var hs_b226DiE2 = hs_wild126Dkdw.data[1];
        var hs_b326DiE6 = hs_wild126Dkdw.data[2];
        var hs_b426DiEa = hs_wild126Dkdw.data[3];
        var hs_wild226Dkdv = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiDW, hs_a1026DiDX, hs_b126DiDY);
        switch (hs_wild226Dkdv.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkdy = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiE0, hs_a1126DiE1, hs_b226DiE2);
            switch (hs_wild326Dkdy.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkdz = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiE4, hs_a1226DiE5, hs_b326DiE6);
                switch (hs_wild426Dkdz.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DiE8, hs_a1326DiE9, hs_b426DiEa);
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
    this.hs_zdfOrdZLz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326DiEl, hs_zddOrd726DiEm, hs_zddOrd826DiEn, hs_zddOrd926DiEo, hs_zddOrd1026DiEp) {
        var hs_sat26DkdA = new $hs.Thunk();
        hs_sat26DkdA.evaluateOnce = function () {
            return hs_zdcmin925uU7X.hscall(hs_zddEq326DiEl, hs_zddOrd726DiEm, hs_zddOrd826DiEn, hs_zddOrd926DiEo, hs_zddOrd1026DiEp);
        };
        var hs_sat26DkdB = new $hs.Thunk();
        hs_sat26DkdB.evaluateOnce = function () {
            return hs_zdcmax925uU7Z.hscall(hs_zddEq326DiEl, hs_zddOrd726DiEm, hs_zddOrd826DiEn, hs_zddOrd926DiEo, hs_zddOrd1026DiEp);
        };
        var hs_sat26DkdC = new $hs.Func(2);
        hs_sat26DkdC.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze825uU4Y.hscall(hs_zddEq326DiEl, hs_zddOrd726DiEm, hs_zddOrd826DiEn, hs_zddOrd926DiEo, hs_zddOrd1026DiEp, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkdD = new $hs.Func(2);
        hs_sat26DkdD.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg825uU5z.hscall(hs_zddEq326DiEl, hs_zddOrd726DiEm, hs_zddOrd826DiEn, hs_zddOrd926DiEo, hs_zddOrd1026DiEp, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkdE = new $hs.Func(2);
        hs_sat26DkdE.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze825uU6a.hscall(hs_zddEq326DiEl, hs_zddOrd726DiEm, hs_zddOrd826DiEn, hs_zddOrd926DiEo, hs_zddOrd1026DiEp, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkdF = new $hs.Func(2);
        hs_sat26DkdF.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl825uU6L.hscall(hs_zddEq326DiEl, hs_zddOrd726DiEm, hs_zddOrd826DiEn, hs_zddOrd926DiEo, hs_zddOrd1026DiEp, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkdG = new $hs.Func(2);
        hs_sat26DkdG.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare825uU7m.hscall(hs_zddEq326DiEl, hs_zddOrd726DiEm, hs_zddOrd826DiEn, hs_zddOrd926DiEo, hs_zddOrd1026DiEp, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq326DiEl, hs_sat26DkdG, hs_sat26DkdF, hs_sat26DkdE, hs_sat26DkdD, hs_sat26DkdC, hs_sat26DkdB, hs_sat26DkdA];
        return $res;
    };
    hs_zdcmin925uU7X.evaluate = function (hs_zddEq326DiED, hs_zddOrd726DiEE, hs_zddOrd826DiEF, hs_zddOrd926DiEG, hs_zddOrd1026DiEH) {
        var hs_zddOrd1126DiEI = new $hs.Thunk();
        hs_zddOrd1126DiEI.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUZR.hscall(hs_zddEq326DiED, hs_zddOrd726DiEE, hs_zddOrd826DiEF, hs_zddOrd926DiEG, hs_zddOrd1026DiEH);
        };
        var hs_sat26DkdI = new $hs.Func(2);
        hs_sat26DkdI.evaluate = function (hs_x26DiEL, hs_y26DiEM) {
            var hs_wild26DkdH = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1126DiEI, hs_x26DiEL, hs_y26DiEM);
            switch (hs_wild26DkdH.tag) {
            case 1:
                if (hs_y26DiEM.notEvaluated) {
                    return hs_y26DiEM.hscall();
                } else {
                    return hs_y26DiEM;
                }
            case 2:
                if (hs_x26DiEL.notEvaluated) {
                    return hs_x26DiEL.hscall();
                } else {
                    return hs_x26DiEL;
                }
            }
        };
        if (hs_sat26DkdI.notEvaluated) {
            return hs_sat26DkdI.hscall();
        } else {
            return hs_sat26DkdI;
        }
    };
    hs_zdcmax925uU7Z.evaluate = function (hs_zddEq326DiEV, hs_zddOrd726DiEW, hs_zddOrd826DiEX, hs_zddOrd926DiEY, hs_zddOrd1026DiEZ) {
        var hs_zddOrd1126DiF0 = new $hs.Thunk();
        hs_zddOrd1126DiF0.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUZR.hscall(hs_zddEq326DiEV, hs_zddOrd726DiEW, hs_zddOrd826DiEX, hs_zddOrd926DiEY, hs_zddOrd1026DiEZ);
        };
        var hs_sat26DkdK = new $hs.Func(2);
        hs_sat26DkdK.evaluate = function (hs_x26DiF3, hs_y26DiF4) {
            var hs_wild26DkdJ = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1126DiF0, hs_x26DiF3, hs_y26DiF4);
            switch (hs_wild26DkdJ.tag) {
            case 1:
                if (hs_x26DiF3.notEvaluated) {
                    return hs_x26DiF3.hscall();
                } else {
                    return hs_x26DiF3;
                }
            case 2:
                if (hs_y26DiF4.notEvaluated) {
                    return hs_y26DiF4.hscall();
                } else {
                    return hs_y26DiF4;
                }
            }
        };
        if (hs_sat26DkdK.notEvaluated) {
            return hs_sat26DkdK.hscall();
        } else {
            return hs_sat26DkdK;
        }
    };
    hs_zdczlze925uU8S.evaluate = function (hs_zddEq326DiFO, hs_zddOrd726DiFv, hs_zddOrd826DiFz, hs_zddOrd926DiFD, hs_zddOrd1026DiFH, hs_zddOrd1126DiFL, hs_a926DiFh, hs_b26DiFo) {
        var hs_wild26DkdN = hs_a926DiFh;
        if (hs_a926DiFh.notEvaluated) {
            hs_wild26DkdN = hs_a926DiFh.hscall();
        }
        var hs_a1026DiFw = hs_wild26DkdN.data[0];
        var hs_a1126DiFA = hs_wild26DkdN.data[1];
        var hs_a1226DiFE = hs_wild26DkdN.data[2];
        var hs_a1326DiFI = hs_wild26DkdN.data[3];
        var hs_a1426DiFM = hs_wild26DkdN.data[4];
        var hs_wild126DkdM = hs_b26DiFo;
        if (hs_b26DiFo.notEvaluated) {
            hs_wild126DkdM = hs_b26DiFo.hscall();
        }
        var hs_b126DiFx = hs_wild126DkdM.data[0];
        var hs_b226DiFB = hs_wild126DkdM.data[1];
        var hs_b326DiFF = hs_wild126DkdM.data[2];
        var hs_b426DiFJ = hs_wild126DkdM.data[3];
        var hs_b526DiFN = hs_wild126DkdM.data[4];
        var hs_wild226DkdL = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiFv, hs_a1026DiFw, hs_b126DiFx);
        switch (hs_wild226DkdL.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkdO = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiFz, hs_a1126DiFA, hs_b226DiFB);
            switch (hs_wild326DkdO.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DkdP = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiFD, hs_a1226DiFE, hs_b326DiFF);
                switch (hs_wild426DkdP.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DkdQ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DiFH, hs_a1326DiFI, hs_b426DiFJ);
                    switch (hs_wild526DkdQ.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1126DiFL, hs_a1426DiFM, hs_b526DiFN);
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
    hs_zdczg925uU9A.evaluate = function (hs_zddEq326DiGw, hs_zddOrd726DiGd, hs_zddOrd826DiGh, hs_zddOrd926DiGl, hs_zddOrd1026DiGp, hs_zddOrd1126DiGt, hs_a926DiFZ, hs_b26DiG6) {
        var hs_wild26DkdT = hs_a926DiFZ;
        if (hs_a926DiFZ.notEvaluated) {
            hs_wild26DkdT = hs_a926DiFZ.hscall();
        }
        var hs_a1026DiGe = hs_wild26DkdT.data[0];
        var hs_a1126DiGi = hs_wild26DkdT.data[1];
        var hs_a1226DiGm = hs_wild26DkdT.data[2];
        var hs_a1326DiGq = hs_wild26DkdT.data[3];
        var hs_a1426DiGu = hs_wild26DkdT.data[4];
        var hs_wild126DkdS = hs_b26DiG6;
        if (hs_b26DiG6.notEvaluated) {
            hs_wild126DkdS = hs_b26DiG6.hscall();
        }
        var hs_b126DiGf = hs_wild126DkdS.data[0];
        var hs_b226DiGj = hs_wild126DkdS.data[1];
        var hs_b326DiGn = hs_wild126DkdS.data[2];
        var hs_b426DiGr = hs_wild126DkdS.data[3];
        var hs_b526DiGv = hs_wild126DkdS.data[4];
        var hs_wild226DkdR = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiGd, hs_a1026DiGe, hs_b126DiGf);
        switch (hs_wild226DkdR.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkdU = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiGh, hs_a1126DiGi, hs_b226DiGj);
            switch (hs_wild326DkdU.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DkdV = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiGl, hs_a1226DiGm, hs_b326DiGn);
                switch (hs_wild426DkdV.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DkdW = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DiGp, hs_a1326DiGq, hs_b426DiGr);
                    switch (hs_wild526DkdW.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd1126DiGt, hs_a1426DiGu, hs_b526DiGv);
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
    hs_zdczgze925uUai.evaluate = function (hs_zddEq326DiHe, hs_zddOrd726DiGV, hs_zddOrd826DiGZ, hs_zddOrd926DiH3, hs_zddOrd1026DiH7, hs_zddOrd1126DiHb, hs_a926DiGH, hs_b26DiGO) {
        var hs_wild26DkdZ = hs_a926DiGH;
        if (hs_a926DiGH.notEvaluated) {
            hs_wild26DkdZ = hs_a926DiGH.hscall();
        }
        var hs_a1026DiGW = hs_wild26DkdZ.data[0];
        var hs_a1126DiH0 = hs_wild26DkdZ.data[1];
        var hs_a1226DiH4 = hs_wild26DkdZ.data[2];
        var hs_a1326DiH8 = hs_wild26DkdZ.data[3];
        var hs_a1426DiHc = hs_wild26DkdZ.data[4];
        var hs_wild126DkdY = hs_b26DiGO;
        if (hs_b26DiGO.notEvaluated) {
            hs_wild126DkdY = hs_b26DiGO.hscall();
        }
        var hs_b126DiGX = hs_wild126DkdY.data[0];
        var hs_b226DiH1 = hs_wild126DkdY.data[1];
        var hs_b326DiH5 = hs_wild126DkdY.data[2];
        var hs_b426DiH9 = hs_wild126DkdY.data[3];
        var hs_b526DiHd = hs_wild126DkdY.data[4];
        var hs_wild226DkdX = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiGV, hs_a1026DiGW, hs_b126DiGX);
        switch (hs_wild226DkdX.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dke0 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiGZ, hs_a1126DiH0, hs_b226DiH1);
            switch (hs_wild326Dke0.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dke1 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiH3, hs_a1226DiH4, hs_b326DiH5);
                switch (hs_wild426Dke1.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dke2 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DiH7, hs_a1326DiH8, hs_b426DiH9);
                    switch (hs_wild526Dke2.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd1126DiHb, hs_a1426DiHc, hs_b526DiHd);
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
    hs_zdczl925uUb0.evaluate = function (hs_zddEq326DiHW, hs_zddOrd726DiHD, hs_zddOrd826DiHH, hs_zddOrd926DiHL, hs_zddOrd1026DiHP, hs_zddOrd1126DiHT, hs_a926DiHp, hs_b26DiHw) {
        var hs_wild26Dke5 = hs_a926DiHp;
        if (hs_a926DiHp.notEvaluated) {
            hs_wild26Dke5 = hs_a926DiHp.hscall();
        }
        var hs_a1026DiHE = hs_wild26Dke5.data[0];
        var hs_a1126DiHI = hs_wild26Dke5.data[1];
        var hs_a1226DiHM = hs_wild26Dke5.data[2];
        var hs_a1326DiHQ = hs_wild26Dke5.data[3];
        var hs_a1426DiHU = hs_wild26Dke5.data[4];
        var hs_wild126Dke4 = hs_b26DiHw;
        if (hs_b26DiHw.notEvaluated) {
            hs_wild126Dke4 = hs_b26DiHw.hscall();
        }
        var hs_b126DiHF = hs_wild126Dke4.data[0];
        var hs_b226DiHJ = hs_wild126Dke4.data[1];
        var hs_b326DiHN = hs_wild126Dke4.data[2];
        var hs_b426DiHR = hs_wild126Dke4.data[3];
        var hs_b526DiHV = hs_wild126Dke4.data[4];
        var hs_wild226Dke3 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiHD, hs_a1026DiHE, hs_b126DiHF);
        switch (hs_wild226Dke3.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dke6 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiHH, hs_a1126DiHI, hs_b226DiHJ);
            switch (hs_wild326Dke6.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dke7 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiHL, hs_a1226DiHM, hs_b326DiHN);
                switch (hs_wild426Dke7.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dke8 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DiHP, hs_a1326DiHQ, hs_b426DiHR);
                    switch (hs_wild526Dke8.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1126DiHT, hs_a1426DiHU, hs_b526DiHV);
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
    hs_zdccompare925uUbI.evaluate = function (hs_zddEq326DiIE, hs_zddOrd726DiIl, hs_zddOrd826DiIp, hs_zddOrd926DiIt, hs_zddOrd1026DiIx, hs_zddOrd1126DiIB, hs_a926DiI7, hs_b26DiIe) {
        var hs_wild26Dkeb = hs_a926DiI7;
        if (hs_a926DiI7.notEvaluated) {
            hs_wild26Dkeb = hs_a926DiI7.hscall();
        }
        var hs_a1026DiIm = hs_wild26Dkeb.data[0];
        var hs_a1126DiIq = hs_wild26Dkeb.data[1];
        var hs_a1226DiIu = hs_wild26Dkeb.data[2];
        var hs_a1326DiIy = hs_wild26Dkeb.data[3];
        var hs_a1426DiIC = hs_wild26Dkeb.data[4];
        var hs_wild126Dkea = hs_b26DiIe;
        if (hs_b26DiIe.notEvaluated) {
            hs_wild126Dkea = hs_b26DiIe.hscall();
        }
        var hs_b126DiIn = hs_wild126Dkea.data[0];
        var hs_b226DiIr = hs_wild126Dkea.data[1];
        var hs_b326DiIv = hs_wild126Dkea.data[2];
        var hs_b426DiIz = hs_wild126Dkea.data[3];
        var hs_b526DiID = hs_wild126Dkea.data[4];
        var hs_wild226Dke9 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiIl, hs_a1026DiIm, hs_b126DiIn);
        switch (hs_wild226Dke9.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkec = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiIp, hs_a1126DiIq, hs_b226DiIr);
            switch (hs_wild326Dkec.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dked = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiIt, hs_a1226DiIu, hs_b326DiIv);
                switch (hs_wild426Dked.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkee = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DiIx, hs_a1326DiIy, hs_b426DiIz);
                    switch (hs_wild526Dkee.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DiIB, hs_a1426DiIC, hs_b526DiID);
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
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326DiIP, hs_zddOrd726DiIQ, hs_zddOrd826DiIR, hs_zddOrd926DiIS, hs_zddOrd1026DiIT, hs_zddOrd1126DiIU) {
        var hs_sat26Dkef = new $hs.Thunk();
        hs_sat26Dkef.evaluateOnce = function () {
            return hs_zdcmin1025uUcq.hscall(hs_zddEq326DiIP, hs_zddOrd726DiIQ, hs_zddOrd826DiIR, hs_zddOrd926DiIS, hs_zddOrd1026DiIT, hs_zddOrd1126DiIU);
        };
        var hs_sat26Dkeg = new $hs.Thunk();
        hs_sat26Dkeg.evaluateOnce = function () {
            return hs_zdcmax1025uUcs.hscall(hs_zddEq326DiIP, hs_zddOrd726DiIQ, hs_zddOrd826DiIR, hs_zddOrd926DiIS, hs_zddOrd1026DiIT, hs_zddOrd1126DiIU);
        };
        var hs_sat26Dkeh = new $hs.Func(2);
        hs_sat26Dkeh.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze925uU8S.hscall(hs_zddEq326DiIP, hs_zddOrd726DiIQ, hs_zddOrd826DiIR, hs_zddOrd926DiIS, hs_zddOrd1026DiIT, hs_zddOrd1126DiIU, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkei = new $hs.Func(2);
        hs_sat26Dkei.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg925uU9A.hscall(hs_zddEq326DiIP, hs_zddOrd726DiIQ, hs_zddOrd826DiIR, hs_zddOrd926DiIS, hs_zddOrd1026DiIT, hs_zddOrd1126DiIU, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkej = new $hs.Func(2);
        hs_sat26Dkej.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze925uUai.hscall(hs_zddEq326DiIP, hs_zddOrd726DiIQ, hs_zddOrd826DiIR, hs_zddOrd926DiIS, hs_zddOrd1026DiIT, hs_zddOrd1126DiIU, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkek = new $hs.Func(2);
        hs_sat26Dkek.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl925uUb0.hscall(hs_zddEq326DiIP, hs_zddOrd726DiIQ, hs_zddOrd826DiIR, hs_zddOrd926DiIS, hs_zddOrd1026DiIT, hs_zddOrd1126DiIU, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkel = new $hs.Func(2);
        hs_sat26Dkel.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare925uUbI.hscall(hs_zddEq326DiIP, hs_zddOrd726DiIQ, hs_zddOrd826DiIR, hs_zddOrd926DiIS, hs_zddOrd1026DiIT, hs_zddOrd1126DiIU, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq326DiIP, hs_sat26Dkel, hs_sat26Dkek, hs_sat26Dkej, hs_sat26Dkei, hs_sat26Dkeh, hs_sat26Dkeg, hs_sat26Dkef];
        return $res;
    };
    hs_zdcmin1025uUcq.evaluate = function (hs_zddEq326DiJ9, hs_zddOrd726DiJa, hs_zddOrd826DiJb, hs_zddOrd926DiJc, hs_zddOrd1026DiJd, hs_zddOrd1126DiJe) {
        var hs_zddOrd1226DiJf = new $hs.Thunk();
        hs_zddOrd1226DiJf.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326DiJ9, hs_zddOrd726DiJa, hs_zddOrd826DiJb, hs_zddOrd926DiJc, hs_zddOrd1026DiJd, hs_zddOrd1126DiJe);
        };
        var hs_sat26Dken = new $hs.Func(2);
        hs_sat26Dken.evaluate = function (hs_x26DiJi, hs_y26DiJj) {
            var hs_wild26Dkem = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1226DiJf, hs_x26DiJi, hs_y26DiJj);
            switch (hs_wild26Dkem.tag) {
            case 1:
                if (hs_y26DiJj.notEvaluated) {
                    return hs_y26DiJj.hscall();
                } else {
                    return hs_y26DiJj;
                }
            case 2:
                if (hs_x26DiJi.notEvaluated) {
                    return hs_x26DiJi.hscall();
                } else {
                    return hs_x26DiJi;
                }
            }
        };
        if (hs_sat26Dken.notEvaluated) {
            return hs_sat26Dken.hscall();
        } else {
            return hs_sat26Dken;
        }
    };
    hs_zdcmax1025uUcs.evaluate = function (hs_zddEq326DiJt, hs_zddOrd726DiJu, hs_zddOrd826DiJv, hs_zddOrd926DiJw, hs_zddOrd1026DiJx, hs_zddOrd1126DiJy) {
        var hs_zddOrd1226DiJz = new $hs.Thunk();
        hs_zddOrd1226DiJz.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326DiJt, hs_zddOrd726DiJu, hs_zddOrd826DiJv, hs_zddOrd926DiJw, hs_zddOrd1026DiJx, hs_zddOrd1126DiJy);
        };
        var hs_sat26Dkep = new $hs.Func(2);
        hs_sat26Dkep.evaluate = function (hs_x26DiJC, hs_y26DiJD) {
            var hs_wild26Dkeo = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1226DiJz, hs_x26DiJC, hs_y26DiJD);
            switch (hs_wild26Dkeo.tag) {
            case 1:
                if (hs_x26DiJC.notEvaluated) {
                    return hs_x26DiJC.hscall();
                } else {
                    return hs_x26DiJC;
                }
            case 2:
                if (hs_y26DiJD.notEvaluated) {
                    return hs_y26DiJD.hscall();
                } else {
                    return hs_y26DiJD;
                }
            }
        };
        if (hs_sat26Dkep.notEvaluated) {
            return hs_sat26Dkep.hscall();
        } else {
            return hs_sat26Dkep;
        }
    };
    hs_zdczlze1025uUdr.evaluate = function (hs_zddEq326DiKu, hs_zddOrd726DiK7, hs_zddOrd826DiKb, hs_zddOrd926DiKf, hs_zddOrd1026DiKj, hs_zddOrd1126DiKn, hs_zddOrd1226DiKr, hs_a926DiJR, hs_b26DiJZ) {
        var hs_wild26Dkes = hs_a926DiJR;
        if (hs_a926DiJR.notEvaluated) {
            hs_wild26Dkes = hs_a926DiJR.hscall();
        }
        var hs_a1026DiK8 = hs_wild26Dkes.data[0];
        var hs_a1126DiKc = hs_wild26Dkes.data[1];
        var hs_a1226DiKg = hs_wild26Dkes.data[2];
        var hs_a1326DiKk = hs_wild26Dkes.data[3];
        var hs_a1426DiKo = hs_wild26Dkes.data[4];
        var hs_a1526DiKs = hs_wild26Dkes.data[5];
        var hs_wild126Dker = hs_b26DiJZ;
        if (hs_b26DiJZ.notEvaluated) {
            hs_wild126Dker = hs_b26DiJZ.hscall();
        }
        var hs_b126DiK9 = hs_wild126Dker.data[0];
        var hs_b226DiKd = hs_wild126Dker.data[1];
        var hs_b326DiKh = hs_wild126Dker.data[2];
        var hs_b426DiKl = hs_wild126Dker.data[3];
        var hs_b526DiKp = hs_wild126Dker.data[4];
        var hs_b626DiKt = hs_wild126Dker.data[5];
        var hs_wild226Dkeq = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiK7, hs_a1026DiK8, hs_b126DiK9);
        switch (hs_wild226Dkeq.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dket = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiKb, hs_a1126DiKc, hs_b226DiKd);
            switch (hs_wild326Dket.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkeu = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiKf, hs_a1226DiKg, hs_b326DiKh);
                switch (hs_wild426Dkeu.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkev = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DiKj, hs_a1326DiKk, hs_b426DiKl);
                    switch (hs_wild526Dkev.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkew = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DiKn, hs_a1426DiKo, hs_b526DiKp);
                        switch (hs_wild626Dkew.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1226DiKr, hs_a1526DiKs, hs_b626DiKt);
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
    hs_zdczg1025uUeg.evaluate = function (hs_zddEq326DiLj, hs_zddOrd726DiKW, hs_zddOrd826DiL0, hs_zddOrd926DiL4, hs_zddOrd1026DiL8, hs_zddOrd1126DiLc, hs_zddOrd1226DiLg, hs_a926DiKG, hs_b26DiKO) {
        var hs_wild26Dkez = hs_a926DiKG;
        if (hs_a926DiKG.notEvaluated) {
            hs_wild26Dkez = hs_a926DiKG.hscall();
        }
        var hs_a1026DiKX = hs_wild26Dkez.data[0];
        var hs_a1126DiL1 = hs_wild26Dkez.data[1];
        var hs_a1226DiL5 = hs_wild26Dkez.data[2];
        var hs_a1326DiL9 = hs_wild26Dkez.data[3];
        var hs_a1426DiLd = hs_wild26Dkez.data[4];
        var hs_a1526DiLh = hs_wild26Dkez.data[5];
        var hs_wild126Dkey = hs_b26DiKO;
        if (hs_b26DiKO.notEvaluated) {
            hs_wild126Dkey = hs_b26DiKO.hscall();
        }
        var hs_b126DiKY = hs_wild126Dkey.data[0];
        var hs_b226DiL2 = hs_wild126Dkey.data[1];
        var hs_b326DiL6 = hs_wild126Dkey.data[2];
        var hs_b426DiLa = hs_wild126Dkey.data[3];
        var hs_b526DiLe = hs_wild126Dkey.data[4];
        var hs_b626DiLi = hs_wild126Dkey.data[5];
        var hs_wild226Dkex = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiKW, hs_a1026DiKX, hs_b126DiKY);
        switch (hs_wild226Dkex.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkeA = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiL0, hs_a1126DiL1, hs_b226DiL2);
            switch (hs_wild326DkeA.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DkeB = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiL4, hs_a1226DiL5, hs_b326DiL6);
                switch (hs_wild426DkeB.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DkeC = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DiL8, hs_a1326DiL9, hs_b426DiLa);
                    switch (hs_wild526DkeC.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626DkeD = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DiLc, hs_a1426DiLd, hs_b526DiLe);
                        switch (hs_wild626DkeD.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd1226DiLg, hs_a1526DiLh, hs_b626DiLi);
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
    hs_zdczgze1025uUf5.evaluate = function (hs_zddEq326DiM8, hs_zddOrd726DiLL, hs_zddOrd826DiLP, hs_zddOrd926DiLT, hs_zddOrd1026DiLX, hs_zddOrd1126DiM1, hs_zddOrd1226DiM5, hs_a926DiLv, hs_b26DiLD) {
        var hs_wild26DkeG = hs_a926DiLv;
        if (hs_a926DiLv.notEvaluated) {
            hs_wild26DkeG = hs_a926DiLv.hscall();
        }
        var hs_a1026DiLM = hs_wild26DkeG.data[0];
        var hs_a1126DiLQ = hs_wild26DkeG.data[1];
        var hs_a1226DiLU = hs_wild26DkeG.data[2];
        var hs_a1326DiLY = hs_wild26DkeG.data[3];
        var hs_a1426DiM2 = hs_wild26DkeG.data[4];
        var hs_a1526DiM6 = hs_wild26DkeG.data[5];
        var hs_wild126DkeF = hs_b26DiLD;
        if (hs_b26DiLD.notEvaluated) {
            hs_wild126DkeF = hs_b26DiLD.hscall();
        }
        var hs_b126DiLN = hs_wild126DkeF.data[0];
        var hs_b226DiLR = hs_wild126DkeF.data[1];
        var hs_b326DiLV = hs_wild126DkeF.data[2];
        var hs_b426DiLZ = hs_wild126DkeF.data[3];
        var hs_b526DiM3 = hs_wild126DkeF.data[4];
        var hs_b626DiM7 = hs_wild126DkeF.data[5];
        var hs_wild226DkeE = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiLL, hs_a1026DiLM, hs_b126DiLN);
        switch (hs_wild226DkeE.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkeH = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiLP, hs_a1126DiLQ, hs_b226DiLR);
            switch (hs_wild326DkeH.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DkeI = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiLT, hs_a1226DiLU, hs_b326DiLV);
                switch (hs_wild426DkeI.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DkeJ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DiLX, hs_a1326DiLY, hs_b426DiLZ);
                    switch (hs_wild526DkeJ.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626DkeK = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DiM1, hs_a1426DiM2, hs_b526DiM3);
                        switch (hs_wild626DkeK.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd1226DiM5, hs_a1526DiM6, hs_b626DiM7);
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
    hs_zdczl1025uUfU.evaluate = function (hs_zddEq326DiMX, hs_zddOrd726DiMA, hs_zddOrd826DiME, hs_zddOrd926DiMI, hs_zddOrd1026DiMM, hs_zddOrd1126DiMQ, hs_zddOrd1226DiMU, hs_a926DiMk, hs_b26DiMs) {
        var hs_wild26DkeN = hs_a926DiMk;
        if (hs_a926DiMk.notEvaluated) {
            hs_wild26DkeN = hs_a926DiMk.hscall();
        }
        var hs_a1026DiMB = hs_wild26DkeN.data[0];
        var hs_a1126DiMF = hs_wild26DkeN.data[1];
        var hs_a1226DiMJ = hs_wild26DkeN.data[2];
        var hs_a1326DiMN = hs_wild26DkeN.data[3];
        var hs_a1426DiMR = hs_wild26DkeN.data[4];
        var hs_a1526DiMV = hs_wild26DkeN.data[5];
        var hs_wild126DkeM = hs_b26DiMs;
        if (hs_b26DiMs.notEvaluated) {
            hs_wild126DkeM = hs_b26DiMs.hscall();
        }
        var hs_b126DiMC = hs_wild126DkeM.data[0];
        var hs_b226DiMG = hs_wild126DkeM.data[1];
        var hs_b326DiMK = hs_wild126DkeM.data[2];
        var hs_b426DiMO = hs_wild126DkeM.data[3];
        var hs_b526DiMS = hs_wild126DkeM.data[4];
        var hs_b626DiMW = hs_wild126DkeM.data[5];
        var hs_wild226DkeL = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiMA, hs_a1026DiMB, hs_b126DiMC);
        switch (hs_wild226DkeL.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkeO = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiME, hs_a1126DiMF, hs_b226DiMG);
            switch (hs_wild326DkeO.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DkeP = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiMI, hs_a1226DiMJ, hs_b326DiMK);
                switch (hs_wild426DkeP.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DkeQ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DiMM, hs_a1326DiMN, hs_b426DiMO);
                    switch (hs_wild526DkeQ.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626DkeR = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DiMQ, hs_a1426DiMR, hs_b526DiMS);
                        switch (hs_wild626DkeR.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1226DiMU, hs_a1526DiMV, hs_b626DiMW);
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
    hs_zdccompare1025uUgJ.evaluate = function (hs_zddEq326DiNM, hs_zddOrd726DiNp, hs_zddOrd826DiNt, hs_zddOrd926DiNx, hs_zddOrd1026DiNB, hs_zddOrd1126DiNF, hs_zddOrd1226DiNJ, hs_a926DiN9, hs_b26DiNh) {
        var hs_wild26DkeU = hs_a926DiN9;
        if (hs_a926DiN9.notEvaluated) {
            hs_wild26DkeU = hs_a926DiN9.hscall();
        }
        var hs_a1026DiNq = hs_wild26DkeU.data[0];
        var hs_a1126DiNu = hs_wild26DkeU.data[1];
        var hs_a1226DiNy = hs_wild26DkeU.data[2];
        var hs_a1326DiNC = hs_wild26DkeU.data[3];
        var hs_a1426DiNG = hs_wild26DkeU.data[4];
        var hs_a1526DiNK = hs_wild26DkeU.data[5];
        var hs_wild126DkeT = hs_b26DiNh;
        if (hs_b26DiNh.notEvaluated) {
            hs_wild126DkeT = hs_b26DiNh.hscall();
        }
        var hs_b126DiNr = hs_wild126DkeT.data[0];
        var hs_b226DiNv = hs_wild126DkeT.data[1];
        var hs_b326DiNz = hs_wild126DkeT.data[2];
        var hs_b426DiND = hs_wild126DkeT.data[3];
        var hs_b526DiNH = hs_wild126DkeT.data[4];
        var hs_b626DiNL = hs_wild126DkeT.data[5];
        var hs_wild226DkeS = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiNp, hs_a1026DiNq, hs_b126DiNr);
        switch (hs_wild226DkeS.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkeV = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiNt, hs_a1126DiNu, hs_b226DiNv);
            switch (hs_wild326DkeV.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DkeW = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiNx, hs_a1226DiNy, hs_b326DiNz);
                switch (hs_wild426DkeW.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DkeX = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DiNB, hs_a1326DiNC, hs_b426DiND);
                    switch (hs_wild526DkeX.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626DkeY = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DiNF, hs_a1426DiNG, hs_b526DiNH);
                        switch (hs_wild626DkeY.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DiNJ, hs_a1526DiNK, hs_b626DiNL);
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
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326DiNY, hs_zddOrd726DiNZ, hs_zddOrd826DiO0, hs_zddOrd926DiO1, hs_zddOrd1026DiO2, hs_zddOrd1126DiO3, hs_zddOrd1226DiO4) {
        var hs_sat26DkeZ = new $hs.Thunk();
        hs_sat26DkeZ.evaluateOnce = function () {
            return hs_zdcmin1125uUhy.hscall(hs_zddEq326DiNY, hs_zddOrd726DiNZ, hs_zddOrd826DiO0, hs_zddOrd926DiO1, hs_zddOrd1026DiO2, hs_zddOrd1126DiO3, hs_zddOrd1226DiO4);
        };
        var hs_sat26Dkf0 = new $hs.Thunk();
        hs_sat26Dkf0.evaluateOnce = function () {
            return hs_zdcmax1125uUhA.hscall(hs_zddEq326DiNY, hs_zddOrd726DiNZ, hs_zddOrd826DiO0, hs_zddOrd926DiO1, hs_zddOrd1026DiO2, hs_zddOrd1126DiO3, hs_zddOrd1226DiO4);
        };
        var hs_sat26Dkf1 = new $hs.Func(2);
        hs_sat26Dkf1.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze1025uUdr.hscall(hs_zddEq326DiNY, hs_zddOrd726DiNZ, hs_zddOrd826DiO0, hs_zddOrd926DiO1, hs_zddOrd1026DiO2, hs_zddOrd1126DiO3, hs_zddOrd1226DiO4, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkf2 = new $hs.Func(2);
        hs_sat26Dkf2.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg1025uUeg.hscall(hs_zddEq326DiNY, hs_zddOrd726DiNZ, hs_zddOrd826DiO0, hs_zddOrd926DiO1, hs_zddOrd1026DiO2, hs_zddOrd1126DiO3, hs_zddOrd1226DiO4, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkf3 = new $hs.Func(2);
        hs_sat26Dkf3.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze1025uUf5.hscall(hs_zddEq326DiNY, hs_zddOrd726DiNZ, hs_zddOrd826DiO0, hs_zddOrd926DiO1, hs_zddOrd1026DiO2, hs_zddOrd1126DiO3, hs_zddOrd1226DiO4, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkf4 = new $hs.Func(2);
        hs_sat26Dkf4.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl1025uUfU.hscall(hs_zddEq326DiNY, hs_zddOrd726DiNZ, hs_zddOrd826DiO0, hs_zddOrd926DiO1, hs_zddOrd1026DiO2, hs_zddOrd1126DiO3, hs_zddOrd1226DiO4, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkf5 = new $hs.Func(2);
        hs_sat26Dkf5.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare1025uUgJ.hscall(hs_zddEq326DiNY, hs_zddOrd726DiNZ, hs_zddOrd826DiO0, hs_zddOrd926DiO1, hs_zddOrd1026DiO2, hs_zddOrd1126DiO3, hs_zddOrd1226DiO4, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq326DiNY, hs_sat26Dkf5, hs_sat26Dkf4, hs_sat26Dkf3, hs_sat26Dkf2, hs_sat26Dkf1, hs_sat26Dkf0, hs_sat26DkeZ];
        return $res;
    };
    hs_zdcmin1125uUhy.evaluate = function (hs_zddEq326DiOk, hs_zddOrd726DiOl, hs_zddOrd826DiOm, hs_zddOrd926DiOn, hs_zddOrd1026DiOo, hs_zddOrd1126DiOp, hs_zddOrd1226DiOq) {
        var hs_zddOrd1326DiOr = new $hs.Thunk();
        hs_zddOrd1326DiOr.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326DiOk, hs_zddOrd726DiOl, hs_zddOrd826DiOm, hs_zddOrd926DiOn, hs_zddOrd1026DiOo, hs_zddOrd1126DiOp, hs_zddOrd1226DiOq);
        };
        var hs_sat26Dkf7 = new $hs.Func(2);
        hs_sat26Dkf7.evaluate = function (hs_x26DiOu, hs_y26DiOv) {
            var hs_wild26Dkf6 = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1326DiOr, hs_x26DiOu, hs_y26DiOv);
            switch (hs_wild26Dkf6.tag) {
            case 1:
                if (hs_y26DiOv.notEvaluated) {
                    return hs_y26DiOv.hscall();
                } else {
                    return hs_y26DiOv;
                }
            case 2:
                if (hs_x26DiOu.notEvaluated) {
                    return hs_x26DiOu.hscall();
                } else {
                    return hs_x26DiOu;
                }
            }
        };
        if (hs_sat26Dkf7.notEvaluated) {
            return hs_sat26Dkf7.hscall();
        } else {
            return hs_sat26Dkf7;
        }
    };
    hs_zdcmax1125uUhA.evaluate = function (hs_zddEq326DiOG, hs_zddOrd726DiOH, hs_zddOrd826DiOI, hs_zddOrd926DiOJ, hs_zddOrd1026DiOK, hs_zddOrd1126DiOL, hs_zddOrd1226DiOM) {
        var hs_zddOrd1326DiON = new $hs.Thunk();
        hs_zddOrd1326DiON.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326DiOG, hs_zddOrd726DiOH, hs_zddOrd826DiOI, hs_zddOrd926DiOJ, hs_zddOrd1026DiOK, hs_zddOrd1126DiOL, hs_zddOrd1226DiOM);
        };
        var hs_sat26Dkf9 = new $hs.Func(2);
        hs_sat26Dkf9.evaluate = function (hs_x26DiOQ, hs_y26DiOR) {
            var hs_wild26Dkf8 = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1326DiON, hs_x26DiOQ, hs_y26DiOR);
            switch (hs_wild26Dkf8.tag) {
            case 1:
                if (hs_x26DiOQ.notEvaluated) {
                    return hs_x26DiOQ.hscall();
                } else {
                    return hs_x26DiOQ;
                }
            case 2:
                if (hs_y26DiOR.notEvaluated) {
                    return hs_y26DiOR.hscall();
                } else {
                    return hs_y26DiOR;
                }
            }
        };
        if (hs_sat26Dkf9.notEvaluated) {
            return hs_sat26Dkf9.hscall();
        } else {
            return hs_sat26Dkf9;
        }
    };
    hs_zdczlze1125uUiF.evaluate = function (hs_zddEq326DiPP, hs_zddOrd726DiPo, hs_zddOrd826DiPs, hs_zddOrd926DiPw, hs_zddOrd1026DiPA, hs_zddOrd1126DiPE, hs_zddOrd1226DiPI, hs_zddOrd1326DiPM, hs_a926DiP6, hs_b26DiPf) {
        var hs_wild26Dkfc = hs_a926DiP6;
        if (hs_a926DiP6.notEvaluated) {
            hs_wild26Dkfc = hs_a926DiP6.hscall();
        }
        var hs_a1026DiPp = hs_wild26Dkfc.data[0];
        var hs_a1126DiPt = hs_wild26Dkfc.data[1];
        var hs_a1226DiPx = hs_wild26Dkfc.data[2];
        var hs_a1326DiPB = hs_wild26Dkfc.data[3];
        var hs_a1426DiPF = hs_wild26Dkfc.data[4];
        var hs_a1526DiPJ = hs_wild26Dkfc.data[5];
        var hs_a1626DiPN = hs_wild26Dkfc.data[6];
        var hs_wild126Dkfb = hs_b26DiPf;
        if (hs_b26DiPf.notEvaluated) {
            hs_wild126Dkfb = hs_b26DiPf.hscall();
        }
        var hs_b126DiPq = hs_wild126Dkfb.data[0];
        var hs_b226DiPu = hs_wild126Dkfb.data[1];
        var hs_b326DiPy = hs_wild126Dkfb.data[2];
        var hs_b426DiPC = hs_wild126Dkfb.data[3];
        var hs_b526DiPG = hs_wild126Dkfb.data[4];
        var hs_b626DiPK = hs_wild126Dkfb.data[5];
        var hs_b726DiPO = hs_wild126Dkfb.data[6];
        var hs_wild226Dkfa = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiPo, hs_a1026DiPp, hs_b126DiPq);
        switch (hs_wild226Dkfa.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkfd = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiPs, hs_a1126DiPt, hs_b226DiPu);
            switch (hs_wild326Dkfd.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkfe = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiPw, hs_a1226DiPx, hs_b326DiPy);
                switch (hs_wild426Dkfe.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkff = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DiPA, hs_a1326DiPB, hs_b426DiPC);
                    switch (hs_wild526Dkff.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkfg = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DiPE, hs_a1426DiPF, hs_b526DiPG);
                        switch (hs_wild626Dkfg.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkfh = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DiPI, hs_a1526DiPJ, hs_b626DiPK);
                            switch (hs_wild726Dkfh.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1326DiPM, hs_a1626DiPN, hs_b726DiPO);
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
    hs_zdczg1125uUjB.evaluate = function (hs_zddEq326DiQL, hs_zddOrd726DiQk, hs_zddOrd826DiQo, hs_zddOrd926DiQs, hs_zddOrd1026DiQw, hs_zddOrd1126DiQA, hs_zddOrd1226DiQE, hs_zddOrd1326DiQI, hs_a926DiQ2, hs_b26DiQb) {
        var hs_wild26Dkfk = hs_a926DiQ2;
        if (hs_a926DiQ2.notEvaluated) {
            hs_wild26Dkfk = hs_a926DiQ2.hscall();
        }
        var hs_a1026DiQl = hs_wild26Dkfk.data[0];
        var hs_a1126DiQp = hs_wild26Dkfk.data[1];
        var hs_a1226DiQt = hs_wild26Dkfk.data[2];
        var hs_a1326DiQx = hs_wild26Dkfk.data[3];
        var hs_a1426DiQB = hs_wild26Dkfk.data[4];
        var hs_a1526DiQF = hs_wild26Dkfk.data[5];
        var hs_a1626DiQJ = hs_wild26Dkfk.data[6];
        var hs_wild126Dkfj = hs_b26DiQb;
        if (hs_b26DiQb.notEvaluated) {
            hs_wild126Dkfj = hs_b26DiQb.hscall();
        }
        var hs_b126DiQm = hs_wild126Dkfj.data[0];
        var hs_b226DiQq = hs_wild126Dkfj.data[1];
        var hs_b326DiQu = hs_wild126Dkfj.data[2];
        var hs_b426DiQy = hs_wild126Dkfj.data[3];
        var hs_b526DiQC = hs_wild126Dkfj.data[4];
        var hs_b626DiQG = hs_wild126Dkfj.data[5];
        var hs_b726DiQK = hs_wild126Dkfj.data[6];
        var hs_wild226Dkfi = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiQk, hs_a1026DiQl, hs_b126DiQm);
        switch (hs_wild226Dkfi.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkfl = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiQo, hs_a1126DiQp, hs_b226DiQq);
            switch (hs_wild326Dkfl.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkfm = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiQs, hs_a1226DiQt, hs_b326DiQu);
                switch (hs_wild426Dkfm.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkfn = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DiQw, hs_a1326DiQx, hs_b426DiQy);
                    switch (hs_wild526Dkfn.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkfo = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DiQA, hs_a1426DiQB, hs_b526DiQC);
                        switch (hs_wild626Dkfo.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkfp = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DiQE, hs_a1526DiQF, hs_b626DiQG);
                            switch (hs_wild726Dkfp.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd1326DiQI, hs_a1626DiQJ, hs_b726DiQK);
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
    hs_zdczgze1125uUkx.evaluate = function (hs_zddEq326DiRH, hs_zddOrd726DiRg, hs_zddOrd826DiRk, hs_zddOrd926DiRo, hs_zddOrd1026DiRs, hs_zddOrd1126DiRw, hs_zddOrd1226DiRA, hs_zddOrd1326DiRE, hs_a926DiQY, hs_b26DiR7) {
        var hs_wild26Dkfs = hs_a926DiQY;
        if (hs_a926DiQY.notEvaluated) {
            hs_wild26Dkfs = hs_a926DiQY.hscall();
        }
        var hs_a1026DiRh = hs_wild26Dkfs.data[0];
        var hs_a1126DiRl = hs_wild26Dkfs.data[1];
        var hs_a1226DiRp = hs_wild26Dkfs.data[2];
        var hs_a1326DiRt = hs_wild26Dkfs.data[3];
        var hs_a1426DiRx = hs_wild26Dkfs.data[4];
        var hs_a1526DiRB = hs_wild26Dkfs.data[5];
        var hs_a1626DiRF = hs_wild26Dkfs.data[6];
        var hs_wild126Dkfr = hs_b26DiR7;
        if (hs_b26DiR7.notEvaluated) {
            hs_wild126Dkfr = hs_b26DiR7.hscall();
        }
        var hs_b126DiRi = hs_wild126Dkfr.data[0];
        var hs_b226DiRm = hs_wild126Dkfr.data[1];
        var hs_b326DiRq = hs_wild126Dkfr.data[2];
        var hs_b426DiRu = hs_wild126Dkfr.data[3];
        var hs_b526DiRy = hs_wild126Dkfr.data[4];
        var hs_b626DiRC = hs_wild126Dkfr.data[5];
        var hs_b726DiRG = hs_wild126Dkfr.data[6];
        var hs_wild226Dkfq = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiRg, hs_a1026DiRh, hs_b126DiRi);
        switch (hs_wild226Dkfq.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkft = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiRk, hs_a1126DiRl, hs_b226DiRm);
            switch (hs_wild326Dkft.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkfu = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiRo, hs_a1226DiRp, hs_b326DiRq);
                switch (hs_wild426Dkfu.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkfv = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DiRs, hs_a1326DiRt, hs_b426DiRu);
                    switch (hs_wild526Dkfv.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkfw = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DiRw, hs_a1426DiRx, hs_b526DiRy);
                        switch (hs_wild626Dkfw.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkfx = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DiRA, hs_a1526DiRB, hs_b626DiRC);
                            switch (hs_wild726Dkfx.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd1326DiRE, hs_a1626DiRF, hs_b726DiRG);
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
    hs_zdczl1125uUlt.evaluate = function (hs_zddEq326DiSD, hs_zddOrd726DiSc, hs_zddOrd826DiSg, hs_zddOrd926DiSk, hs_zddOrd1026DiSo, hs_zddOrd1126DiSs, hs_zddOrd1226DiSw, hs_zddOrd1326DiSA, hs_a926DiRU, hs_b26DiS3) {
        var hs_wild26DkfA = hs_a926DiRU;
        if (hs_a926DiRU.notEvaluated) {
            hs_wild26DkfA = hs_a926DiRU.hscall();
        }
        var hs_a1026DiSd = hs_wild26DkfA.data[0];
        var hs_a1126DiSh = hs_wild26DkfA.data[1];
        var hs_a1226DiSl = hs_wild26DkfA.data[2];
        var hs_a1326DiSp = hs_wild26DkfA.data[3];
        var hs_a1426DiSt = hs_wild26DkfA.data[4];
        var hs_a1526DiSx = hs_wild26DkfA.data[5];
        var hs_a1626DiSB = hs_wild26DkfA.data[6];
        var hs_wild126Dkfz = hs_b26DiS3;
        if (hs_b26DiS3.notEvaluated) {
            hs_wild126Dkfz = hs_b26DiS3.hscall();
        }
        var hs_b126DiSe = hs_wild126Dkfz.data[0];
        var hs_b226DiSi = hs_wild126Dkfz.data[1];
        var hs_b326DiSm = hs_wild126Dkfz.data[2];
        var hs_b426DiSq = hs_wild126Dkfz.data[3];
        var hs_b526DiSu = hs_wild126Dkfz.data[4];
        var hs_b626DiSy = hs_wild126Dkfz.data[5];
        var hs_b726DiSC = hs_wild126Dkfz.data[6];
        var hs_wild226Dkfy = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiSc, hs_a1026DiSd, hs_b126DiSe);
        switch (hs_wild226Dkfy.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkfB = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiSg, hs_a1126DiSh, hs_b226DiSi);
            switch (hs_wild326DkfB.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DkfC = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiSk, hs_a1226DiSl, hs_b326DiSm);
                switch (hs_wild426DkfC.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DkfD = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DiSo, hs_a1326DiSp, hs_b426DiSq);
                    switch (hs_wild526DkfD.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626DkfE = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DiSs, hs_a1426DiSt, hs_b526DiSu);
                        switch (hs_wild626DkfE.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726DkfF = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DiSw, hs_a1526DiSx, hs_b626DiSy);
                            switch (hs_wild726DkfF.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1326DiSA, hs_a1626DiSB, hs_b726DiSC);
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
    hs_zdccompare1125uUmp.evaluate = function (hs_zddEq326DiTz, hs_zddOrd726DiT8, hs_zddOrd826DiTc, hs_zddOrd926DiTg, hs_zddOrd1026DiTk, hs_zddOrd1126DiTo, hs_zddOrd1226DiTs, hs_zddOrd1326DiTw, hs_a926DiSQ, hs_b26DiSZ) {
        var hs_wild26DkfI = hs_a926DiSQ;
        if (hs_a926DiSQ.notEvaluated) {
            hs_wild26DkfI = hs_a926DiSQ.hscall();
        }
        var hs_a1026DiT9 = hs_wild26DkfI.data[0];
        var hs_a1126DiTd = hs_wild26DkfI.data[1];
        var hs_a1226DiTh = hs_wild26DkfI.data[2];
        var hs_a1326DiTl = hs_wild26DkfI.data[3];
        var hs_a1426DiTp = hs_wild26DkfI.data[4];
        var hs_a1526DiTt = hs_wild26DkfI.data[5];
        var hs_a1626DiTx = hs_wild26DkfI.data[6];
        var hs_wild126DkfH = hs_b26DiSZ;
        if (hs_b26DiSZ.notEvaluated) {
            hs_wild126DkfH = hs_b26DiSZ.hscall();
        }
        var hs_b126DiTa = hs_wild126DkfH.data[0];
        var hs_b226DiTe = hs_wild126DkfH.data[1];
        var hs_b326DiTi = hs_wild126DkfH.data[2];
        var hs_b426DiTm = hs_wild126DkfH.data[3];
        var hs_b526DiTq = hs_wild126DkfH.data[4];
        var hs_b626DiTu = hs_wild126DkfH.data[5];
        var hs_b726DiTy = hs_wild126DkfH.data[6];
        var hs_wild226DkfG = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiT8, hs_a1026DiT9, hs_b126DiTa);
        switch (hs_wild226DkfG.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkfJ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiTc, hs_a1126DiTd, hs_b226DiTe);
            switch (hs_wild326DkfJ.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DkfK = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiTg, hs_a1226DiTh, hs_b326DiTi);
                switch (hs_wild426DkfK.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DkfL = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DiTk, hs_a1326DiTl, hs_b426DiTm);
                    switch (hs_wild526DkfL.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626DkfM = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DiTo, hs_a1426DiTp, hs_b526DiTq);
                        switch (hs_wild626DkfM.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726DkfN = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DiTs, hs_a1526DiTt, hs_b626DiTu);
                            switch (hs_wild726DkfN.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326DiTw, hs_a1626DiTx, hs_b726DiTy);
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
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326DiTM, hs_zddOrd726DiTN, hs_zddOrd826DiTO, hs_zddOrd926DiTP, hs_zddOrd1026DiTQ, hs_zddOrd1126DiTR, hs_zddOrd1226DiTS, hs_zddOrd1326DiTT) {
        var hs_sat26DkfO = new $hs.Thunk();
        hs_sat26DkfO.evaluateOnce = function () {
            return hs_zdcmin1225uUnl.hscall(hs_zddEq326DiTM, hs_zddOrd726DiTN, hs_zddOrd826DiTO, hs_zddOrd926DiTP, hs_zddOrd1026DiTQ, hs_zddOrd1126DiTR, hs_zddOrd1226DiTS, hs_zddOrd1326DiTT);
        };
        var hs_sat26DkfP = new $hs.Thunk();
        hs_sat26DkfP.evaluateOnce = function () {
            return hs_zdcmax1225uUnn.hscall(hs_zddEq326DiTM, hs_zddOrd726DiTN, hs_zddOrd826DiTO, hs_zddOrd926DiTP, hs_zddOrd1026DiTQ, hs_zddOrd1126DiTR, hs_zddOrd1226DiTS, hs_zddOrd1326DiTT);
        };
        var hs_sat26DkfQ = new $hs.Func(2);
        hs_sat26DkfQ.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze1125uUiF.hscall(hs_zddEq326DiTM, hs_zddOrd726DiTN, hs_zddOrd826DiTO, hs_zddOrd926DiTP, hs_zddOrd1026DiTQ, hs_zddOrd1126DiTR, hs_zddOrd1226DiTS, hs_zddOrd1326DiTT, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkfR = new $hs.Func(2);
        hs_sat26DkfR.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg1125uUjB.hscall(hs_zddEq326DiTM, hs_zddOrd726DiTN, hs_zddOrd826DiTO, hs_zddOrd926DiTP, hs_zddOrd1026DiTQ, hs_zddOrd1126DiTR, hs_zddOrd1226DiTS, hs_zddOrd1326DiTT, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkfS = new $hs.Func(2);
        hs_sat26DkfS.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze1125uUkx.hscall(hs_zddEq326DiTM, hs_zddOrd726DiTN, hs_zddOrd826DiTO, hs_zddOrd926DiTP, hs_zddOrd1026DiTQ, hs_zddOrd1126DiTR, hs_zddOrd1226DiTS, hs_zddOrd1326DiTT, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkfT = new $hs.Func(2);
        hs_sat26DkfT.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl1125uUlt.hscall(hs_zddEq326DiTM, hs_zddOrd726DiTN, hs_zddOrd826DiTO, hs_zddOrd926DiTP, hs_zddOrd1026DiTQ, hs_zddOrd1126DiTR, hs_zddOrd1226DiTS, hs_zddOrd1326DiTT, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkfU = new $hs.Func(2);
        hs_sat26DkfU.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare1125uUmp.hscall(hs_zddEq326DiTM, hs_zddOrd726DiTN, hs_zddOrd826DiTO, hs_zddOrd926DiTP, hs_zddOrd1026DiTQ, hs_zddOrd1126DiTR, hs_zddOrd1226DiTS, hs_zddOrd1326DiTT, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq326DiTM, hs_sat26DkfU, hs_sat26DkfT, hs_sat26DkfS, hs_sat26DkfR, hs_sat26DkfQ, hs_sat26DkfP, hs_sat26DkfO];
        return $res;
    };
    hs_zdcmin1225uUnl.evaluate = function (hs_zddEq326DiUa, hs_zddOrd726DiUb, hs_zddOrd826DiUc, hs_zddOrd926DiUd, hs_zddOrd1026DiUe, hs_zddOrd1126DiUf, hs_zddOrd1226DiUg, hs_zddOrd1326DiUh) {
        var hs_zddOrd1426DiUi = new $hs.Thunk();
        hs_zddOrd1426DiUi.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326DiUa, hs_zddOrd726DiUb, hs_zddOrd826DiUc, hs_zddOrd926DiUd, hs_zddOrd1026DiUe, hs_zddOrd1126DiUf, hs_zddOrd1226DiUg, hs_zddOrd1326DiUh);
        };
        var hs_sat26DkfW = new $hs.Func(2);
        hs_sat26DkfW.evaluate = function (hs_x26DiUl, hs_y26DiUm) {
            var hs_wild26DkfV = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1426DiUi, hs_x26DiUl, hs_y26DiUm);
            switch (hs_wild26DkfV.tag) {
            case 1:
                if (hs_y26DiUm.notEvaluated) {
                    return hs_y26DiUm.hscall();
                } else {
                    return hs_y26DiUm;
                }
            case 2:
                if (hs_x26DiUl.notEvaluated) {
                    return hs_x26DiUl.hscall();
                } else {
                    return hs_x26DiUl;
                }
            }
        };
        if (hs_sat26DkfW.notEvaluated) {
            return hs_sat26DkfW.hscall();
        } else {
            return hs_sat26DkfW;
        }
    };
    hs_zdcmax1225uUnn.evaluate = function (hs_zddEq326DiUy, hs_zddOrd726DiUz, hs_zddOrd826DiUA, hs_zddOrd926DiUB, hs_zddOrd1026DiUC, hs_zddOrd1126DiUD, hs_zddOrd1226DiUE, hs_zddOrd1326DiUF) {
        var hs_zddOrd1426DiUG = new $hs.Thunk();
        hs_zddOrd1426DiUG.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326DiUy, hs_zddOrd726DiUz, hs_zddOrd826DiUA, hs_zddOrd926DiUB, hs_zddOrd1026DiUC, hs_zddOrd1126DiUD, hs_zddOrd1226DiUE, hs_zddOrd1326DiUF);
        };
        var hs_sat26DkfY = new $hs.Func(2);
        hs_sat26DkfY.evaluate = function (hs_x26DiUJ, hs_y26DiUK) {
            var hs_wild26DkfX = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1426DiUG, hs_x26DiUJ, hs_y26DiUK);
            switch (hs_wild26DkfX.tag) {
            case 1:
                if (hs_x26DiUJ.notEvaluated) {
                    return hs_x26DiUJ.hscall();
                } else {
                    return hs_x26DiUJ;
                }
            case 2:
                if (hs_y26DiUK.notEvaluated) {
                    return hs_y26DiUK.hscall();
                } else {
                    return hs_y26DiUK;
                }
            }
        };
        if (hs_sat26DkfY.notEvaluated) {
            return hs_sat26DkfY.hscall();
        } else {
            return hs_sat26DkfY;
        }
    };
    hs_zdczlze1225uUoy.evaluate = function (hs_zddEq326DiVP, hs_zddOrd726DiVk, hs_zddOrd826DiVo, hs_zddOrd926DiVs, hs_zddOrd1026DiVw, hs_zddOrd1126DiVA, hs_zddOrd1226DiVE, hs_zddOrd1326DiVI, hs_zddOrd1426DiVM, hs_a926DiV0, hs_b26DiVa) {
        var hs_wild26Dkg1 = hs_a926DiV0;
        if (hs_a926DiV0.notEvaluated) {
            hs_wild26Dkg1 = hs_a926DiV0.hscall();
        }
        var hs_a1026DiVl = hs_wild26Dkg1.data[0];
        var hs_a1126DiVp = hs_wild26Dkg1.data[1];
        var hs_a1226DiVt = hs_wild26Dkg1.data[2];
        var hs_a1326DiVx = hs_wild26Dkg1.data[3];
        var hs_a1426DiVB = hs_wild26Dkg1.data[4];
        var hs_a1526DiVF = hs_wild26Dkg1.data[5];
        var hs_a1626DiVJ = hs_wild26Dkg1.data[6];
        var hs_a1726DiVN = hs_wild26Dkg1.data[7];
        var hs_wild126Dkg0 = hs_b26DiVa;
        if (hs_b26DiVa.notEvaluated) {
            hs_wild126Dkg0 = hs_b26DiVa.hscall();
        }
        var hs_b126DiVm = hs_wild126Dkg0.data[0];
        var hs_b226DiVq = hs_wild126Dkg0.data[1];
        var hs_b326DiVu = hs_wild126Dkg0.data[2];
        var hs_b426DiVy = hs_wild126Dkg0.data[3];
        var hs_b526DiVC = hs_wild126Dkg0.data[4];
        var hs_b626DiVG = hs_wild126Dkg0.data[5];
        var hs_b726DiVK = hs_wild126Dkg0.data[6];
        var hs_b826DiVO = hs_wild126Dkg0.data[7];
        var hs_wild226DkfZ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiVk, hs_a1026DiVl, hs_b126DiVm);
        switch (hs_wild226DkfZ.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkg2 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiVo, hs_a1126DiVp, hs_b226DiVq);
            switch (hs_wild326Dkg2.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkg3 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiVs, hs_a1226DiVt, hs_b326DiVu);
                switch (hs_wild426Dkg3.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkg4 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DiVw, hs_a1326DiVx, hs_b426DiVy);
                    switch (hs_wild526Dkg4.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkg5 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DiVA, hs_a1426DiVB, hs_b526DiVC);
                        switch (hs_wild626Dkg5.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkg6 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DiVE, hs_a1526DiVF, hs_b626DiVG);
                            switch (hs_wild726Dkg6.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkg7 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326DiVI, hs_a1626DiVJ, hs_b726DiVK);
                                switch (hs_wild826Dkg7.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1426DiVM, hs_a1726DiVN, hs_b826DiVO);
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
    hs_zdczg1225uUpB.evaluate = function (hs_zddEq326DiWS, hs_zddOrd726DiWn, hs_zddOrd826DiWr, hs_zddOrd926DiWv, hs_zddOrd1026DiWz, hs_zddOrd1126DiWD, hs_zddOrd1226DiWH, hs_zddOrd1326DiWL, hs_zddOrd1426DiWP, hs_a926DiW3, hs_b26DiWd) {
        var hs_wild26Dkga = hs_a926DiW3;
        if (hs_a926DiW3.notEvaluated) {
            hs_wild26Dkga = hs_a926DiW3.hscall();
        }
        var hs_a1026DiWo = hs_wild26Dkga.data[0];
        var hs_a1126DiWs = hs_wild26Dkga.data[1];
        var hs_a1226DiWw = hs_wild26Dkga.data[2];
        var hs_a1326DiWA = hs_wild26Dkga.data[3];
        var hs_a1426DiWE = hs_wild26Dkga.data[4];
        var hs_a1526DiWI = hs_wild26Dkga.data[5];
        var hs_a1626DiWM = hs_wild26Dkga.data[6];
        var hs_a1726DiWQ = hs_wild26Dkga.data[7];
        var hs_wild126Dkg9 = hs_b26DiWd;
        if (hs_b26DiWd.notEvaluated) {
            hs_wild126Dkg9 = hs_b26DiWd.hscall();
        }
        var hs_b126DiWp = hs_wild126Dkg9.data[0];
        var hs_b226DiWt = hs_wild126Dkg9.data[1];
        var hs_b326DiWx = hs_wild126Dkg9.data[2];
        var hs_b426DiWB = hs_wild126Dkg9.data[3];
        var hs_b526DiWF = hs_wild126Dkg9.data[4];
        var hs_b626DiWJ = hs_wild126Dkg9.data[5];
        var hs_b726DiWN = hs_wild126Dkg9.data[6];
        var hs_b826DiWR = hs_wild126Dkg9.data[7];
        var hs_wild226Dkg8 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiWn, hs_a1026DiWo, hs_b126DiWp);
        switch (hs_wild226Dkg8.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkgb = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiWr, hs_a1126DiWs, hs_b226DiWt);
            switch (hs_wild326Dkgb.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkgc = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiWv, hs_a1226DiWw, hs_b326DiWx);
                switch (hs_wild426Dkgc.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkgd = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DiWz, hs_a1326DiWA, hs_b426DiWB);
                    switch (hs_wild526Dkgd.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkge = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DiWD, hs_a1426DiWE, hs_b526DiWF);
                        switch (hs_wild626Dkge.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkgf = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DiWH, hs_a1526DiWI, hs_b626DiWJ);
                            switch (hs_wild726Dkgf.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkgg = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326DiWL, hs_a1626DiWM, hs_b726DiWN);
                                switch (hs_wild826Dkgg.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd1426DiWP, hs_a1726DiWQ, hs_b826DiWR);
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
    hs_zdczgze1225uUqE.evaluate = function (hs_zddEq326DiXV, hs_zddOrd726DiXq, hs_zddOrd826DiXu, hs_zddOrd926DiXy, hs_zddOrd1026DiXC, hs_zddOrd1126DiXG, hs_zddOrd1226DiXK, hs_zddOrd1326DiXO, hs_zddOrd1426DiXS, hs_a926DiX6, hs_b26DiXg) {
        var hs_wild26Dkgj = hs_a926DiX6;
        if (hs_a926DiX6.notEvaluated) {
            hs_wild26Dkgj = hs_a926DiX6.hscall();
        }
        var hs_a1026DiXr = hs_wild26Dkgj.data[0];
        var hs_a1126DiXv = hs_wild26Dkgj.data[1];
        var hs_a1226DiXz = hs_wild26Dkgj.data[2];
        var hs_a1326DiXD = hs_wild26Dkgj.data[3];
        var hs_a1426DiXH = hs_wild26Dkgj.data[4];
        var hs_a1526DiXL = hs_wild26Dkgj.data[5];
        var hs_a1626DiXP = hs_wild26Dkgj.data[6];
        var hs_a1726DiXT = hs_wild26Dkgj.data[7];
        var hs_wild126Dkgi = hs_b26DiXg;
        if (hs_b26DiXg.notEvaluated) {
            hs_wild126Dkgi = hs_b26DiXg.hscall();
        }
        var hs_b126DiXs = hs_wild126Dkgi.data[0];
        var hs_b226DiXw = hs_wild126Dkgi.data[1];
        var hs_b326DiXA = hs_wild126Dkgi.data[2];
        var hs_b426DiXE = hs_wild126Dkgi.data[3];
        var hs_b526DiXI = hs_wild126Dkgi.data[4];
        var hs_b626DiXM = hs_wild126Dkgi.data[5];
        var hs_b726DiXQ = hs_wild126Dkgi.data[6];
        var hs_b826DiXU = hs_wild126Dkgi.data[7];
        var hs_wild226Dkgh = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiXq, hs_a1026DiXr, hs_b126DiXs);
        switch (hs_wild226Dkgh.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkgk = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiXu, hs_a1126DiXv, hs_b226DiXw);
            switch (hs_wild326Dkgk.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkgl = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiXy, hs_a1226DiXz, hs_b326DiXA);
                switch (hs_wild426Dkgl.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkgm = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DiXC, hs_a1326DiXD, hs_b426DiXE);
                    switch (hs_wild526Dkgm.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkgn = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DiXG, hs_a1426DiXH, hs_b526DiXI);
                        switch (hs_wild626Dkgn.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkgo = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DiXK, hs_a1526DiXL, hs_b626DiXM);
                            switch (hs_wild726Dkgo.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkgp = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326DiXO, hs_a1626DiXP, hs_b726DiXQ);
                                switch (hs_wild826Dkgp.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd1426DiXS, hs_a1726DiXT, hs_b826DiXU);
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
    hs_zdczl1225uUrH.evaluate = function (hs_zddEq326DiYY, hs_zddOrd726DiYt, hs_zddOrd826DiYx, hs_zddOrd926DiYB, hs_zddOrd1026DiYF, hs_zddOrd1126DiYJ, hs_zddOrd1226DiYN, hs_zddOrd1326DiYR, hs_zddOrd1426DiYV, hs_a926DiY9, hs_b26DiYj) {
        var hs_wild26Dkgs = hs_a926DiY9;
        if (hs_a926DiY9.notEvaluated) {
            hs_wild26Dkgs = hs_a926DiY9.hscall();
        }
        var hs_a1026DiYu = hs_wild26Dkgs.data[0];
        var hs_a1126DiYy = hs_wild26Dkgs.data[1];
        var hs_a1226DiYC = hs_wild26Dkgs.data[2];
        var hs_a1326DiYG = hs_wild26Dkgs.data[3];
        var hs_a1426DiYK = hs_wild26Dkgs.data[4];
        var hs_a1526DiYO = hs_wild26Dkgs.data[5];
        var hs_a1626DiYS = hs_wild26Dkgs.data[6];
        var hs_a1726DiYW = hs_wild26Dkgs.data[7];
        var hs_wild126Dkgr = hs_b26DiYj;
        if (hs_b26DiYj.notEvaluated) {
            hs_wild126Dkgr = hs_b26DiYj.hscall();
        }
        var hs_b126DiYv = hs_wild126Dkgr.data[0];
        var hs_b226DiYz = hs_wild126Dkgr.data[1];
        var hs_b326DiYD = hs_wild126Dkgr.data[2];
        var hs_b426DiYH = hs_wild126Dkgr.data[3];
        var hs_b526DiYL = hs_wild126Dkgr.data[4];
        var hs_b626DiYP = hs_wild126Dkgr.data[5];
        var hs_b726DiYT = hs_wild126Dkgr.data[6];
        var hs_b826DiYX = hs_wild126Dkgr.data[7];
        var hs_wild226Dkgq = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiYt, hs_a1026DiYu, hs_b126DiYv);
        switch (hs_wild226Dkgq.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkgt = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiYx, hs_a1126DiYy, hs_b226DiYz);
            switch (hs_wild326Dkgt.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkgu = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiYB, hs_a1226DiYC, hs_b326DiYD);
                switch (hs_wild426Dkgu.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkgv = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DiYF, hs_a1326DiYG, hs_b426DiYH);
                    switch (hs_wild526Dkgv.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkgw = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DiYJ, hs_a1426DiYK, hs_b526DiYL);
                        switch (hs_wild626Dkgw.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkgx = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DiYN, hs_a1526DiYO, hs_b626DiYP);
                            switch (hs_wild726Dkgx.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkgy = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326DiYR, hs_a1626DiYS, hs_b726DiYT);
                                switch (hs_wild826Dkgy.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1426DiYV, hs_a1726DiYW, hs_b826DiYX);
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
    hs_zdccompare1225uUsK.evaluate = function (hs_zddEq326Dj01, hs_zddOrd726DiZw, hs_zddOrd826DiZA, hs_zddOrd926DiZE, hs_zddOrd1026DiZI, hs_zddOrd1126DiZM, hs_zddOrd1226DiZQ, hs_zddOrd1326DiZU, hs_zddOrd1426DiZY, hs_a926DiZc, hs_b26DiZm) {
        var hs_wild26DkgB = hs_a926DiZc;
        if (hs_a926DiZc.notEvaluated) {
            hs_wild26DkgB = hs_a926DiZc.hscall();
        }
        var hs_a1026DiZx = hs_wild26DkgB.data[0];
        var hs_a1126DiZB = hs_wild26DkgB.data[1];
        var hs_a1226DiZF = hs_wild26DkgB.data[2];
        var hs_a1326DiZJ = hs_wild26DkgB.data[3];
        var hs_a1426DiZN = hs_wild26DkgB.data[4];
        var hs_a1526DiZR = hs_wild26DkgB.data[5];
        var hs_a1626DiZV = hs_wild26DkgB.data[6];
        var hs_a1726DiZZ = hs_wild26DkgB.data[7];
        var hs_wild126DkgA = hs_b26DiZm;
        if (hs_b26DiZm.notEvaluated) {
            hs_wild126DkgA = hs_b26DiZm.hscall();
        }
        var hs_b126DiZy = hs_wild126DkgA.data[0];
        var hs_b226DiZC = hs_wild126DkgA.data[1];
        var hs_b326DiZG = hs_wild126DkgA.data[2];
        var hs_b426DiZK = hs_wild126DkgA.data[3];
        var hs_b526DiZO = hs_wild126DkgA.data[4];
        var hs_b626DiZS = hs_wild126DkgA.data[5];
        var hs_b726DiZW = hs_wild126DkgA.data[6];
        var hs_b826Dj00 = hs_wild126DkgA.data[7];
        var hs_wild226Dkgz = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DiZw, hs_a1026DiZx, hs_b126DiZy);
        switch (hs_wild226Dkgz.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkgC = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DiZA, hs_a1126DiZB, hs_b226DiZC);
            switch (hs_wild326DkgC.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DkgD = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DiZE, hs_a1226DiZF, hs_b326DiZG);
                switch (hs_wild426DkgD.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DkgE = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DiZI, hs_a1326DiZJ, hs_b426DiZK);
                    switch (hs_wild526DkgE.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626DkgF = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DiZM, hs_a1426DiZN, hs_b526DiZO);
                        switch (hs_wild626DkgF.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726DkgG = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DiZQ, hs_a1526DiZR, hs_b626DiZS);
                            switch (hs_wild726DkgG.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826DkgH = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326DiZU, hs_a1626DiZV, hs_b726DiZW);
                                switch (hs_wild826DkgH.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426DiZY, hs_a1726DiZZ, hs_b826Dj00);
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
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Dj0f, hs_zddOrd726Dj0g, hs_zddOrd826Dj0h, hs_zddOrd926Dj0i, hs_zddOrd1026Dj0j, hs_zddOrd1126Dj0k, hs_zddOrd1226Dj0l, hs_zddOrd1326Dj0m, hs_zddOrd1426Dj0n) {
        var hs_sat26DkgI = new $hs.Thunk();
        hs_sat26DkgI.evaluateOnce = function () {
            return hs_zdcmin1325uUtN.hscall(hs_zddEq326Dj0f, hs_zddOrd726Dj0g, hs_zddOrd826Dj0h, hs_zddOrd926Dj0i, hs_zddOrd1026Dj0j, hs_zddOrd1126Dj0k, hs_zddOrd1226Dj0l, hs_zddOrd1326Dj0m, hs_zddOrd1426Dj0n);
        };
        var hs_sat26DkgJ = new $hs.Thunk();
        hs_sat26DkgJ.evaluateOnce = function () {
            return hs_zdcmax1325uUtP.hscall(hs_zddEq326Dj0f, hs_zddOrd726Dj0g, hs_zddOrd826Dj0h, hs_zddOrd926Dj0i, hs_zddOrd1026Dj0j, hs_zddOrd1126Dj0k, hs_zddOrd1226Dj0l, hs_zddOrd1326Dj0m, hs_zddOrd1426Dj0n);
        };
        var hs_sat26DkgK = new $hs.Func(2);
        hs_sat26DkgK.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze1225uUoy.hscall(hs_zddEq326Dj0f, hs_zddOrd726Dj0g, hs_zddOrd826Dj0h, hs_zddOrd926Dj0i, hs_zddOrd1026Dj0j, hs_zddOrd1126Dj0k, hs_zddOrd1226Dj0l, hs_zddOrd1326Dj0m, hs_zddOrd1426Dj0n, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkgL = new $hs.Func(2);
        hs_sat26DkgL.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg1225uUpB.hscall(hs_zddEq326Dj0f, hs_zddOrd726Dj0g, hs_zddOrd826Dj0h, hs_zddOrd926Dj0i, hs_zddOrd1026Dj0j, hs_zddOrd1126Dj0k, hs_zddOrd1226Dj0l, hs_zddOrd1326Dj0m, hs_zddOrd1426Dj0n, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkgM = new $hs.Func(2);
        hs_sat26DkgM.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze1225uUqE.hscall(hs_zddEq326Dj0f, hs_zddOrd726Dj0g, hs_zddOrd826Dj0h, hs_zddOrd926Dj0i, hs_zddOrd1026Dj0j, hs_zddOrd1126Dj0k, hs_zddOrd1226Dj0l, hs_zddOrd1326Dj0m, hs_zddOrd1426Dj0n, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkgN = new $hs.Func(2);
        hs_sat26DkgN.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl1225uUrH.hscall(hs_zddEq326Dj0f, hs_zddOrd726Dj0g, hs_zddOrd826Dj0h, hs_zddOrd926Dj0i, hs_zddOrd1026Dj0j, hs_zddOrd1126Dj0k, hs_zddOrd1226Dj0l, hs_zddOrd1326Dj0m, hs_zddOrd1426Dj0n, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkgO = new $hs.Func(2);
        hs_sat26DkgO.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare1225uUsK.hscall(hs_zddEq326Dj0f, hs_zddOrd726Dj0g, hs_zddOrd826Dj0h, hs_zddOrd926Dj0i, hs_zddOrd1026Dj0j, hs_zddOrd1126Dj0k, hs_zddOrd1226Dj0l, hs_zddOrd1326Dj0m, hs_zddOrd1426Dj0n, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq326Dj0f, hs_sat26DkgO, hs_sat26DkgN, hs_sat26DkgM, hs_sat26DkgL, hs_sat26DkgK, hs_sat26DkgJ, hs_sat26DkgI];
        return $res;
    };
    hs_zdcmin1325uUtN.evaluate = function (hs_zddEq326Dj0F, hs_zddOrd726Dj0G, hs_zddOrd826Dj0H, hs_zddOrd926Dj0I, hs_zddOrd1026Dj0J, hs_zddOrd1126Dj0K, hs_zddOrd1226Dj0L, hs_zddOrd1326Dj0M, hs_zddOrd1426Dj0N) {
        var hs_zddOrd1526Dj0O = new $hs.Thunk();
        hs_zddOrd1526Dj0O.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326Dj0F, hs_zddOrd726Dj0G, hs_zddOrd826Dj0H, hs_zddOrd926Dj0I, hs_zddOrd1026Dj0J, hs_zddOrd1126Dj0K, hs_zddOrd1226Dj0L, hs_zddOrd1326Dj0M, hs_zddOrd1426Dj0N);
        };
        var hs_sat26DkgQ = new $hs.Func(2);
        hs_sat26DkgQ.evaluate = function (hs_x26Dj0R, hs_y26Dj0S) {
            var hs_wild26DkgP = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1526Dj0O, hs_x26Dj0R, hs_y26Dj0S);
            switch (hs_wild26DkgP.tag) {
            case 1:
                if (hs_y26Dj0S.notEvaluated) {
                    return hs_y26Dj0S.hscall();
                } else {
                    return hs_y26Dj0S;
                }
            case 2:
                if (hs_x26Dj0R.notEvaluated) {
                    return hs_x26Dj0R.hscall();
                } else {
                    return hs_x26Dj0R;
                }
            }
        };
        if (hs_sat26DkgQ.notEvaluated) {
            return hs_sat26DkgQ.hscall();
        } else {
            return hs_sat26DkgQ;
        }
    };
    hs_zdcmax1325uUtP.evaluate = function (hs_zddEq326Dj15, hs_zddOrd726Dj16, hs_zddOrd826Dj17, hs_zddOrd926Dj18, hs_zddOrd1026Dj19, hs_zddOrd1126Dj1a, hs_zddOrd1226Dj1b, hs_zddOrd1326Dj1c, hs_zddOrd1426Dj1d) {
        var hs_zddOrd1526Dj1e = new $hs.Thunk();
        hs_zddOrd1526Dj1e.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326Dj15, hs_zddOrd726Dj16, hs_zddOrd826Dj17, hs_zddOrd926Dj18, hs_zddOrd1026Dj19, hs_zddOrd1126Dj1a, hs_zddOrd1226Dj1b, hs_zddOrd1326Dj1c, hs_zddOrd1426Dj1d);
        };
        var hs_sat26DkgS = new $hs.Func(2);
        hs_sat26DkgS.evaluate = function (hs_x26Dj1h, hs_y26Dj1i) {
            var hs_wild26DkgR = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1526Dj1e, hs_x26Dj1h, hs_y26Dj1i);
            switch (hs_wild26DkgR.tag) {
            case 1:
                if (hs_x26Dj1h.notEvaluated) {
                    return hs_x26Dj1h.hscall();
                } else {
                    return hs_x26Dj1h;
                }
            case 2:
                if (hs_y26Dj1i.notEvaluated) {
                    return hs_y26Dj1i.hscall();
                } else {
                    return hs_y26Dj1i;
                }
            }
        };
        if (hs_sat26DkgS.notEvaluated) {
            return hs_sat26DkgS.hscall();
        } else {
            return hs_sat26DkgS;
        }
    };
    hs_zdczlze1325uUv6.evaluate = function (hs_zddEq326Dj2u, hs_zddOrd726Dj1V, hs_zddOrd826Dj1Z, hs_zddOrd926Dj23, hs_zddOrd1026Dj27, hs_zddOrd1126Dj2b, hs_zddOrd1226Dj2f, hs_zddOrd1326Dj2j, hs_zddOrd1426Dj2n, hs_zddOrd1526Dj2r, hs_a926Dj1z, hs_b26Dj1K) {
        var hs_wild26DkgV = hs_a926Dj1z;
        if (hs_a926Dj1z.notEvaluated) {
            hs_wild26DkgV = hs_a926Dj1z.hscall();
        }
        var hs_a1026Dj1W = hs_wild26DkgV.data[0];
        var hs_a1126Dj20 = hs_wild26DkgV.data[1];
        var hs_a1226Dj24 = hs_wild26DkgV.data[2];
        var hs_a1326Dj28 = hs_wild26DkgV.data[3];
        var hs_a1426Dj2c = hs_wild26DkgV.data[4];
        var hs_a1526Dj2g = hs_wild26DkgV.data[5];
        var hs_a1626Dj2k = hs_wild26DkgV.data[6];
        var hs_a1726Dj2o = hs_wild26DkgV.data[7];
        var hs_a1826Dj2s = hs_wild26DkgV.data[8];
        var hs_wild126DkgU = hs_b26Dj1K;
        if (hs_b26Dj1K.notEvaluated) {
            hs_wild126DkgU = hs_b26Dj1K.hscall();
        }
        var hs_b126Dj1X = hs_wild126DkgU.data[0];
        var hs_b226Dj21 = hs_wild126DkgU.data[1];
        var hs_b326Dj25 = hs_wild126DkgU.data[2];
        var hs_b426Dj29 = hs_wild126DkgU.data[3];
        var hs_b526Dj2d = hs_wild126DkgU.data[4];
        var hs_b626Dj2h = hs_wild126DkgU.data[5];
        var hs_b726Dj2l = hs_wild126DkgU.data[6];
        var hs_b826Dj2p = hs_wild126DkgU.data[7];
        var hs_b926Dj2t = hs_wild126DkgU.data[8];
        var hs_wild226DkgT = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726Dj1V, hs_a1026Dj1W, hs_b126Dj1X);
        switch (hs_wild226DkgT.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkgW = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826Dj1Z, hs_a1126Dj20, hs_b226Dj21);
            switch (hs_wild326DkgW.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DkgX = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926Dj23, hs_a1226Dj24, hs_b326Dj25);
                switch (hs_wild426DkgX.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DkgY = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026Dj27, hs_a1326Dj28, hs_b426Dj29);
                    switch (hs_wild526DkgY.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626DkgZ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126Dj2b, hs_a1426Dj2c, hs_b526Dj2d);
                        switch (hs_wild626DkgZ.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkh0 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226Dj2f, hs_a1526Dj2g, hs_b626Dj2h);
                            switch (hs_wild726Dkh0.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkh1 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326Dj2j, hs_a1626Dj2k, hs_b726Dj2l);
                                switch (hs_wild826Dkh1.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dkh2 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426Dj2n, hs_a1726Dj2o, hs_b826Dj2p);
                                    switch (hs_wild926Dkh2.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1526Dj2r, hs_a1826Dj2s, hs_b926Dj2t);
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
    hs_zdczg1325uUwg.evaluate = function (hs_zddEq326Dj3E, hs_zddOrd726Dj35, hs_zddOrd826Dj39, hs_zddOrd926Dj3d, hs_zddOrd1026Dj3h, hs_zddOrd1126Dj3l, hs_zddOrd1226Dj3p, hs_zddOrd1326Dj3t, hs_zddOrd1426Dj3x, hs_zddOrd1526Dj3B, hs_a926Dj2J, hs_b26Dj2U) {
        var hs_wild26Dkh5 = hs_a926Dj2J;
        if (hs_a926Dj2J.notEvaluated) {
            hs_wild26Dkh5 = hs_a926Dj2J.hscall();
        }
        var hs_a1026Dj36 = hs_wild26Dkh5.data[0];
        var hs_a1126Dj3a = hs_wild26Dkh5.data[1];
        var hs_a1226Dj3e = hs_wild26Dkh5.data[2];
        var hs_a1326Dj3i = hs_wild26Dkh5.data[3];
        var hs_a1426Dj3m = hs_wild26Dkh5.data[4];
        var hs_a1526Dj3q = hs_wild26Dkh5.data[5];
        var hs_a1626Dj3u = hs_wild26Dkh5.data[6];
        var hs_a1726Dj3y = hs_wild26Dkh5.data[7];
        var hs_a1826Dj3C = hs_wild26Dkh5.data[8];
        var hs_wild126Dkh4 = hs_b26Dj2U;
        if (hs_b26Dj2U.notEvaluated) {
            hs_wild126Dkh4 = hs_b26Dj2U.hscall();
        }
        var hs_b126Dj37 = hs_wild126Dkh4.data[0];
        var hs_b226Dj3b = hs_wild126Dkh4.data[1];
        var hs_b326Dj3f = hs_wild126Dkh4.data[2];
        var hs_b426Dj3j = hs_wild126Dkh4.data[3];
        var hs_b526Dj3n = hs_wild126Dkh4.data[4];
        var hs_b626Dj3r = hs_wild126Dkh4.data[5];
        var hs_b726Dj3v = hs_wild126Dkh4.data[6];
        var hs_b826Dj3z = hs_wild126Dkh4.data[7];
        var hs_b926Dj3D = hs_wild126Dkh4.data[8];
        var hs_wild226Dkh3 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726Dj35, hs_a1026Dj36, hs_b126Dj37);
        switch (hs_wild226Dkh3.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkh6 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826Dj39, hs_a1126Dj3a, hs_b226Dj3b);
            switch (hs_wild326Dkh6.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkh7 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926Dj3d, hs_a1226Dj3e, hs_b326Dj3f);
                switch (hs_wild426Dkh7.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkh8 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026Dj3h, hs_a1326Dj3i, hs_b426Dj3j);
                    switch (hs_wild526Dkh8.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkh9 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126Dj3l, hs_a1426Dj3m, hs_b526Dj3n);
                        switch (hs_wild626Dkh9.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkha = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226Dj3p, hs_a1526Dj3q, hs_b626Dj3r);
                            switch (hs_wild726Dkha.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkhb = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326Dj3t, hs_a1626Dj3u, hs_b726Dj3v);
                                switch (hs_wild826Dkhb.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dkhc = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426Dj3x, hs_a1726Dj3y, hs_b826Dj3z);
                                    switch (hs_wild926Dkhc.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd1526Dj3B, hs_a1826Dj3C, hs_b926Dj3D);
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
    hs_zdczgze1325uUxq.evaluate = function (hs_zddEq326Dj4O, hs_zddOrd726Dj4f, hs_zddOrd826Dj4j, hs_zddOrd926Dj4n, hs_zddOrd1026Dj4r, hs_zddOrd1126Dj4v, hs_zddOrd1226Dj4z, hs_zddOrd1326Dj4D, hs_zddOrd1426Dj4H, hs_zddOrd1526Dj4L, hs_a926Dj3T, hs_b26Dj44) {
        var hs_wild26Dkhf = hs_a926Dj3T;
        if (hs_a926Dj3T.notEvaluated) {
            hs_wild26Dkhf = hs_a926Dj3T.hscall();
        }
        var hs_a1026Dj4g = hs_wild26Dkhf.data[0];
        var hs_a1126Dj4k = hs_wild26Dkhf.data[1];
        var hs_a1226Dj4o = hs_wild26Dkhf.data[2];
        var hs_a1326Dj4s = hs_wild26Dkhf.data[3];
        var hs_a1426Dj4w = hs_wild26Dkhf.data[4];
        var hs_a1526Dj4A = hs_wild26Dkhf.data[5];
        var hs_a1626Dj4E = hs_wild26Dkhf.data[6];
        var hs_a1726Dj4I = hs_wild26Dkhf.data[7];
        var hs_a1826Dj4M = hs_wild26Dkhf.data[8];
        var hs_wild126Dkhe = hs_b26Dj44;
        if (hs_b26Dj44.notEvaluated) {
            hs_wild126Dkhe = hs_b26Dj44.hscall();
        }
        var hs_b126Dj4h = hs_wild126Dkhe.data[0];
        var hs_b226Dj4l = hs_wild126Dkhe.data[1];
        var hs_b326Dj4p = hs_wild126Dkhe.data[2];
        var hs_b426Dj4t = hs_wild126Dkhe.data[3];
        var hs_b526Dj4x = hs_wild126Dkhe.data[4];
        var hs_b626Dj4B = hs_wild126Dkhe.data[5];
        var hs_b726Dj4F = hs_wild126Dkhe.data[6];
        var hs_b826Dj4J = hs_wild126Dkhe.data[7];
        var hs_b926Dj4N = hs_wild126Dkhe.data[8];
        var hs_wild226Dkhd = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726Dj4f, hs_a1026Dj4g, hs_b126Dj4h);
        switch (hs_wild226Dkhd.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkhg = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826Dj4j, hs_a1126Dj4k, hs_b226Dj4l);
            switch (hs_wild326Dkhg.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkhh = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926Dj4n, hs_a1226Dj4o, hs_b326Dj4p);
                switch (hs_wild426Dkhh.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkhi = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026Dj4r, hs_a1326Dj4s, hs_b426Dj4t);
                    switch (hs_wild526Dkhi.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkhj = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126Dj4v, hs_a1426Dj4w, hs_b526Dj4x);
                        switch (hs_wild626Dkhj.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkhk = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226Dj4z, hs_a1526Dj4A, hs_b626Dj4B);
                            switch (hs_wild726Dkhk.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkhl = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326Dj4D, hs_a1626Dj4E, hs_b726Dj4F);
                                switch (hs_wild826Dkhl.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dkhm = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426Dj4H, hs_a1726Dj4I, hs_b826Dj4J);
                                    switch (hs_wild926Dkhm.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd1526Dj4L, hs_a1826Dj4M, hs_b926Dj4N);
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
    hs_zdczl1325uUyA.evaluate = function (hs_zddEq326Dj5Y, hs_zddOrd726Dj5p, hs_zddOrd826Dj5t, hs_zddOrd926Dj5x, hs_zddOrd1026Dj5B, hs_zddOrd1126Dj5F, hs_zddOrd1226Dj5J, hs_zddOrd1326Dj5N, hs_zddOrd1426Dj5R, hs_zddOrd1526Dj5V, hs_a926Dj53, hs_b26Dj5e) {
        var hs_wild26Dkhp = hs_a926Dj53;
        if (hs_a926Dj53.notEvaluated) {
            hs_wild26Dkhp = hs_a926Dj53.hscall();
        }
        var hs_a1026Dj5q = hs_wild26Dkhp.data[0];
        var hs_a1126Dj5u = hs_wild26Dkhp.data[1];
        var hs_a1226Dj5y = hs_wild26Dkhp.data[2];
        var hs_a1326Dj5C = hs_wild26Dkhp.data[3];
        var hs_a1426Dj5G = hs_wild26Dkhp.data[4];
        var hs_a1526Dj5K = hs_wild26Dkhp.data[5];
        var hs_a1626Dj5O = hs_wild26Dkhp.data[6];
        var hs_a1726Dj5S = hs_wild26Dkhp.data[7];
        var hs_a1826Dj5W = hs_wild26Dkhp.data[8];
        var hs_wild126Dkho = hs_b26Dj5e;
        if (hs_b26Dj5e.notEvaluated) {
            hs_wild126Dkho = hs_b26Dj5e.hscall();
        }
        var hs_b126Dj5r = hs_wild126Dkho.data[0];
        var hs_b226Dj5v = hs_wild126Dkho.data[1];
        var hs_b326Dj5z = hs_wild126Dkho.data[2];
        var hs_b426Dj5D = hs_wild126Dkho.data[3];
        var hs_b526Dj5H = hs_wild126Dkho.data[4];
        var hs_b626Dj5L = hs_wild126Dkho.data[5];
        var hs_b726Dj5P = hs_wild126Dkho.data[6];
        var hs_b826Dj5T = hs_wild126Dkho.data[7];
        var hs_b926Dj5X = hs_wild126Dkho.data[8];
        var hs_wild226Dkhn = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726Dj5p, hs_a1026Dj5q, hs_b126Dj5r);
        switch (hs_wild226Dkhn.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkhq = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826Dj5t, hs_a1126Dj5u, hs_b226Dj5v);
            switch (hs_wild326Dkhq.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkhr = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926Dj5x, hs_a1226Dj5y, hs_b326Dj5z);
                switch (hs_wild426Dkhr.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkhs = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026Dj5B, hs_a1326Dj5C, hs_b426Dj5D);
                    switch (hs_wild526Dkhs.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkht = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126Dj5F, hs_a1426Dj5G, hs_b526Dj5H);
                        switch (hs_wild626Dkht.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkhu = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226Dj5J, hs_a1526Dj5K, hs_b626Dj5L);
                            switch (hs_wild726Dkhu.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkhv = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326Dj5N, hs_a1626Dj5O, hs_b726Dj5P);
                                switch (hs_wild826Dkhv.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dkhw = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426Dj5R, hs_a1726Dj5S, hs_b826Dj5T);
                                    switch (hs_wild926Dkhw.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1526Dj5V, hs_a1826Dj5W, hs_b926Dj5X);
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
    hs_zdccompare1325uUzK.evaluate = function (hs_zddEq326Dj78, hs_zddOrd726Dj6z, hs_zddOrd826Dj6D, hs_zddOrd926Dj6H, hs_zddOrd1026Dj6L, hs_zddOrd1126Dj6P, hs_zddOrd1226Dj6T, hs_zddOrd1326Dj6X, hs_zddOrd1426Dj71, hs_zddOrd1526Dj75, hs_a926Dj6d, hs_b26Dj6o) {
        var hs_wild26Dkhz = hs_a926Dj6d;
        if (hs_a926Dj6d.notEvaluated) {
            hs_wild26Dkhz = hs_a926Dj6d.hscall();
        }
        var hs_a1026Dj6A = hs_wild26Dkhz.data[0];
        var hs_a1126Dj6E = hs_wild26Dkhz.data[1];
        var hs_a1226Dj6I = hs_wild26Dkhz.data[2];
        var hs_a1326Dj6M = hs_wild26Dkhz.data[3];
        var hs_a1426Dj6Q = hs_wild26Dkhz.data[4];
        var hs_a1526Dj6U = hs_wild26Dkhz.data[5];
        var hs_a1626Dj6Y = hs_wild26Dkhz.data[6];
        var hs_a1726Dj72 = hs_wild26Dkhz.data[7];
        var hs_a1826Dj76 = hs_wild26Dkhz.data[8];
        var hs_wild126Dkhy = hs_b26Dj6o;
        if (hs_b26Dj6o.notEvaluated) {
            hs_wild126Dkhy = hs_b26Dj6o.hscall();
        }
        var hs_b126Dj6B = hs_wild126Dkhy.data[0];
        var hs_b226Dj6F = hs_wild126Dkhy.data[1];
        var hs_b326Dj6J = hs_wild126Dkhy.data[2];
        var hs_b426Dj6N = hs_wild126Dkhy.data[3];
        var hs_b526Dj6R = hs_wild126Dkhy.data[4];
        var hs_b626Dj6V = hs_wild126Dkhy.data[5];
        var hs_b726Dj6Z = hs_wild126Dkhy.data[6];
        var hs_b826Dj73 = hs_wild126Dkhy.data[7];
        var hs_b926Dj77 = hs_wild126Dkhy.data[8];
        var hs_wild226Dkhx = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726Dj6z, hs_a1026Dj6A, hs_b126Dj6B);
        switch (hs_wild226Dkhx.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkhA = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826Dj6D, hs_a1126Dj6E, hs_b226Dj6F);
            switch (hs_wild326DkhA.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DkhB = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926Dj6H, hs_a1226Dj6I, hs_b326Dj6J);
                switch (hs_wild426DkhB.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DkhC = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026Dj6L, hs_a1326Dj6M, hs_b426Dj6N);
                    switch (hs_wild526DkhC.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626DkhD = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126Dj6P, hs_a1426Dj6Q, hs_b526Dj6R);
                        switch (hs_wild626DkhD.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726DkhE = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226Dj6T, hs_a1526Dj6U, hs_b626Dj6V);
                            switch (hs_wild726DkhE.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826DkhF = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326Dj6X, hs_a1626Dj6Y, hs_b726Dj6Z);
                                switch (hs_wild826DkhF.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926DkhG = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426Dj71, hs_a1726Dj72, hs_b826Dj73);
                                    switch (hs_wild926DkhG.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526Dj75, hs_a1826Dj76, hs_b926Dj77);
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
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Dj7n, hs_zddOrd726Dj7o, hs_zddOrd826Dj7p, hs_zddOrd926Dj7q, hs_zddOrd1026Dj7r, hs_zddOrd1126Dj7s, hs_zddOrd1226Dj7t, hs_zddOrd1326Dj7u, hs_zddOrd1426Dj7v, hs_zddOrd1526Dj7w) {
        var hs_sat26DkhH = new $hs.Thunk();
        hs_sat26DkhH.evaluateOnce = function () {
            return hs_zdcmin1425uUAU.hscall(hs_zddEq326Dj7n, hs_zddOrd726Dj7o, hs_zddOrd826Dj7p, hs_zddOrd926Dj7q, hs_zddOrd1026Dj7r, hs_zddOrd1126Dj7s, hs_zddOrd1226Dj7t, hs_zddOrd1326Dj7u, hs_zddOrd1426Dj7v, hs_zddOrd1526Dj7w);
        };
        var hs_sat26DkhI = new $hs.Thunk();
        hs_sat26DkhI.evaluateOnce = function () {
            return hs_zdcmax1425uUAW.hscall(hs_zddEq326Dj7n, hs_zddOrd726Dj7o, hs_zddOrd826Dj7p, hs_zddOrd926Dj7q, hs_zddOrd1026Dj7r, hs_zddOrd1126Dj7s, hs_zddOrd1226Dj7t, hs_zddOrd1326Dj7u, hs_zddOrd1426Dj7v, hs_zddOrd1526Dj7w);
        };
        var hs_sat26DkhJ = new $hs.Func(2);
        hs_sat26DkhJ.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze1325uUv6.hscall(hs_zddEq326Dj7n, hs_zddOrd726Dj7o, hs_zddOrd826Dj7p, hs_zddOrd926Dj7q, hs_zddOrd1026Dj7r, hs_zddOrd1126Dj7s, hs_zddOrd1226Dj7t, hs_zddOrd1326Dj7u, hs_zddOrd1426Dj7v, hs_zddOrd1526Dj7w, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkhK = new $hs.Func(2);
        hs_sat26DkhK.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg1325uUwg.hscall(hs_zddEq326Dj7n, hs_zddOrd726Dj7o, hs_zddOrd826Dj7p, hs_zddOrd926Dj7q, hs_zddOrd1026Dj7r, hs_zddOrd1126Dj7s, hs_zddOrd1226Dj7t, hs_zddOrd1326Dj7u, hs_zddOrd1426Dj7v, hs_zddOrd1526Dj7w, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkhL = new $hs.Func(2);
        hs_sat26DkhL.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze1325uUxq.hscall(hs_zddEq326Dj7n, hs_zddOrd726Dj7o, hs_zddOrd826Dj7p, hs_zddOrd926Dj7q, hs_zddOrd1026Dj7r, hs_zddOrd1126Dj7s, hs_zddOrd1226Dj7t, hs_zddOrd1326Dj7u, hs_zddOrd1426Dj7v, hs_zddOrd1526Dj7w, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkhM = new $hs.Func(2);
        hs_sat26DkhM.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl1325uUyA.hscall(hs_zddEq326Dj7n, hs_zddOrd726Dj7o, hs_zddOrd826Dj7p, hs_zddOrd926Dj7q, hs_zddOrd1026Dj7r, hs_zddOrd1126Dj7s, hs_zddOrd1226Dj7t, hs_zddOrd1326Dj7u, hs_zddOrd1426Dj7v, hs_zddOrd1526Dj7w, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkhN = new $hs.Func(2);
        hs_sat26DkhN.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare1325uUzK.hscall(hs_zddEq326Dj7n, hs_zddOrd726Dj7o, hs_zddOrd826Dj7p, hs_zddOrd926Dj7q, hs_zddOrd1026Dj7r, hs_zddOrd1126Dj7s, hs_zddOrd1226Dj7t, hs_zddOrd1326Dj7u, hs_zddOrd1426Dj7v, hs_zddOrd1526Dj7w, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq326Dj7n, hs_sat26DkhN, hs_sat26DkhM, hs_sat26DkhL, hs_sat26DkhK, hs_sat26DkhJ, hs_sat26DkhI, hs_sat26DkhH];
        return $res;
    };
    hs_zdcmin1425uUAU.evaluate = function (hs_zddEq326Dj7P, hs_zddOrd726Dj7Q, hs_zddOrd826Dj7R, hs_zddOrd926Dj7S, hs_zddOrd1026Dj7T, hs_zddOrd1126Dj7U, hs_zddOrd1226Dj7V, hs_zddOrd1326Dj7W, hs_zddOrd1426Dj7X, hs_zddOrd1526Dj7Y) {
        var hs_zddOrd1626Dj7Z = new $hs.Thunk();
        hs_zddOrd1626Dj7Z.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326Dj7P, hs_zddOrd726Dj7Q, hs_zddOrd826Dj7R, hs_zddOrd926Dj7S, hs_zddOrd1026Dj7T, hs_zddOrd1126Dj7U, hs_zddOrd1226Dj7V, hs_zddOrd1326Dj7W, hs_zddOrd1426Dj7X, hs_zddOrd1526Dj7Y);
        };
        var hs_sat26DkhP = new $hs.Func(2);
        hs_sat26DkhP.evaluate = function (hs_x26Dj82, hs_y26Dj83) {
            var hs_wild26DkhO = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1626Dj7Z, hs_x26Dj82, hs_y26Dj83);
            switch (hs_wild26DkhO.tag) {
            case 1:
                if (hs_y26Dj83.notEvaluated) {
                    return hs_y26Dj83.hscall();
                } else {
                    return hs_y26Dj83;
                }
            case 2:
                if (hs_x26Dj82.notEvaluated) {
                    return hs_x26Dj82.hscall();
                } else {
                    return hs_x26Dj82;
                }
            }
        };
        if (hs_sat26DkhP.notEvaluated) {
            return hs_sat26DkhP.hscall();
        } else {
            return hs_sat26DkhP;
        }
    };
    hs_zdcmax1425uUAW.evaluate = function (hs_zddEq326Dj8h, hs_zddOrd726Dj8i, hs_zddOrd826Dj8j, hs_zddOrd926Dj8k, hs_zddOrd1026Dj8l, hs_zddOrd1126Dj8m, hs_zddOrd1226Dj8n, hs_zddOrd1326Dj8o, hs_zddOrd1426Dj8p, hs_zddOrd1526Dj8q) {
        var hs_zddOrd1626Dj8r = new $hs.Thunk();
        hs_zddOrd1626Dj8r.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326Dj8h, hs_zddOrd726Dj8i, hs_zddOrd826Dj8j, hs_zddOrd926Dj8k, hs_zddOrd1026Dj8l, hs_zddOrd1126Dj8m, hs_zddOrd1226Dj8n, hs_zddOrd1326Dj8o, hs_zddOrd1426Dj8p, hs_zddOrd1526Dj8q);
        };
        var hs_sat26DkhR = new $hs.Func(2);
        hs_sat26DkhR.evaluate = function (hs_x26Dj8u, hs_y26Dj8v) {
            var hs_wild26DkhQ = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1626Dj8r, hs_x26Dj8u, hs_y26Dj8v);
            switch (hs_wild26DkhQ.tag) {
            case 1:
                if (hs_x26Dj8u.notEvaluated) {
                    return hs_x26Dj8u.hscall();
                } else {
                    return hs_x26Dj8u;
                }
            case 2:
                if (hs_y26Dj8v.notEvaluated) {
                    return hs_y26Dj8v.hscall();
                } else {
                    return hs_y26Dj8v;
                }
            }
        };
        if (hs_sat26DkhR.notEvaluated) {
            return hs_sat26DkhR.hscall();
        } else {
            return hs_sat26DkhR;
        }
    };
    hs_zdczlze1425uUCj.evaluate = function (hs_zddEq326Dj9O, hs_zddOrd726Dj9b, hs_zddOrd826Dj9f, hs_zddOrd926Dj9j, hs_zddOrd1026Dj9n, hs_zddOrd1126Dj9r, hs_zddOrd1226Dj9v, hs_zddOrd1326Dj9z, hs_zddOrd1426Dj9D, hs_zddOrd1526Dj9H, hs_zddOrd1626Dj9L, hs_a926Dj8N, hs_b26Dj8Z) {
        var hs_wild26DkhU = hs_a926Dj8N;
        if (hs_a926Dj8N.notEvaluated) {
            hs_wild26DkhU = hs_a926Dj8N.hscall();
        }
        var hs_a1026Dj9c = hs_wild26DkhU.data[0];
        var hs_a1126Dj9g = hs_wild26DkhU.data[1];
        var hs_a1226Dj9k = hs_wild26DkhU.data[2];
        var hs_a1326Dj9o = hs_wild26DkhU.data[3];
        var hs_a1426Dj9s = hs_wild26DkhU.data[4];
        var hs_a1526Dj9w = hs_wild26DkhU.data[5];
        var hs_a1626Dj9A = hs_wild26DkhU.data[6];
        var hs_a1726Dj9E = hs_wild26DkhU.data[7];
        var hs_a1826Dj9I = hs_wild26DkhU.data[8];
        var hs_a1926Dj9M = hs_wild26DkhU.data[9];
        var hs_wild126DkhT = hs_b26Dj8Z;
        if (hs_b26Dj8Z.notEvaluated) {
            hs_wild126DkhT = hs_b26Dj8Z.hscall();
        }
        var hs_b126Dj9d = hs_wild126DkhT.data[0];
        var hs_b226Dj9h = hs_wild126DkhT.data[1];
        var hs_b326Dj9l = hs_wild126DkhT.data[2];
        var hs_b426Dj9p = hs_wild126DkhT.data[3];
        var hs_b526Dj9t = hs_wild126DkhT.data[4];
        var hs_b626Dj9x = hs_wild126DkhT.data[5];
        var hs_b726Dj9B = hs_wild126DkhT.data[6];
        var hs_b826Dj9F = hs_wild126DkhT.data[7];
        var hs_b926Dj9J = hs_wild126DkhT.data[8];
        var hs_b1026Dj9N = hs_wild126DkhT.data[9];
        var hs_wild226DkhS = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726Dj9b, hs_a1026Dj9c, hs_b126Dj9d);
        switch (hs_wild226DkhS.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkhV = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826Dj9f, hs_a1126Dj9g, hs_b226Dj9h);
            switch (hs_wild326DkhV.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DkhW = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926Dj9j, hs_a1226Dj9k, hs_b326Dj9l);
                switch (hs_wild426DkhW.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DkhX = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026Dj9n, hs_a1326Dj9o, hs_b426Dj9p);
                    switch (hs_wild526DkhX.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626DkhY = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126Dj9r, hs_a1426Dj9s, hs_b526Dj9t);
                        switch (hs_wild626DkhY.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726DkhZ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226Dj9v, hs_a1526Dj9w, hs_b626Dj9x);
                            switch (hs_wild726DkhZ.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dki0 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326Dj9z, hs_a1626Dj9A, hs_b726Dj9B);
                                switch (hs_wild826Dki0.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dki1 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426Dj9D, hs_a1726Dj9E, hs_b826Dj9F);
                                    switch (hs_wild926Dki1.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026Dki2 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526Dj9H, hs_a1826Dj9I, hs_b926Dj9J);
                                        switch (hs_wild1026Dki2.tag) {
                                        case 1:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1626Dj9L, hs_a1926Dj9M, hs_b1026Dj9N);
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
    hs_zdczg1425uUDA.evaluate = function (hs_zddEq326Djb5, hs_zddOrd726Djas, hs_zddOrd826Djaw, hs_zddOrd926DjaA, hs_zddOrd1026DjaE, hs_zddOrd1126DjaI, hs_zddOrd1226DjaM, hs_zddOrd1326DjaQ, hs_zddOrd1426DjaU, hs_zddOrd1526DjaY, hs_zddOrd1626Djb2, hs_a926Dja4, hs_b26Djag) {
        var hs_wild26Dki5 = hs_a926Dja4;
        if (hs_a926Dja4.notEvaluated) {
            hs_wild26Dki5 = hs_a926Dja4.hscall();
        }
        var hs_a1026Djat = hs_wild26Dki5.data[0];
        var hs_a1126Djax = hs_wild26Dki5.data[1];
        var hs_a1226DjaB = hs_wild26Dki5.data[2];
        var hs_a1326DjaF = hs_wild26Dki5.data[3];
        var hs_a1426DjaJ = hs_wild26Dki5.data[4];
        var hs_a1526DjaN = hs_wild26Dki5.data[5];
        var hs_a1626DjaR = hs_wild26Dki5.data[6];
        var hs_a1726DjaV = hs_wild26Dki5.data[7];
        var hs_a1826DjaZ = hs_wild26Dki5.data[8];
        var hs_a1926Djb3 = hs_wild26Dki5.data[9];
        var hs_wild126Dki4 = hs_b26Djag;
        if (hs_b26Djag.notEvaluated) {
            hs_wild126Dki4 = hs_b26Djag.hscall();
        }
        var hs_b126Djau = hs_wild126Dki4.data[0];
        var hs_b226Djay = hs_wild126Dki4.data[1];
        var hs_b326DjaC = hs_wild126Dki4.data[2];
        var hs_b426DjaG = hs_wild126Dki4.data[3];
        var hs_b526DjaK = hs_wild126Dki4.data[4];
        var hs_b626DjaO = hs_wild126Dki4.data[5];
        var hs_b726DjaS = hs_wild126Dki4.data[6];
        var hs_b826DjaW = hs_wild126Dki4.data[7];
        var hs_b926Djb0 = hs_wild126Dki4.data[8];
        var hs_b1026Djb4 = hs_wild126Dki4.data[9];
        var hs_wild226Dki3 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726Djas, hs_a1026Djat, hs_b126Djau);
        switch (hs_wild226Dki3.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dki6 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826Djaw, hs_a1126Djax, hs_b226Djay);
            switch (hs_wild326Dki6.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dki7 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DjaA, hs_a1226DjaB, hs_b326DjaC);
                switch (hs_wild426Dki7.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dki8 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DjaE, hs_a1326DjaF, hs_b426DjaG);
                    switch (hs_wild526Dki8.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dki9 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DjaI, hs_a1426DjaJ, hs_b526DjaK);
                        switch (hs_wild626Dki9.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkia = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DjaM, hs_a1526DjaN, hs_b626DjaO);
                            switch (hs_wild726Dkia.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkib = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326DjaQ, hs_a1626DjaR, hs_b726DjaS);
                                switch (hs_wild826Dkib.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dkic = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426DjaU, hs_a1726DjaV, hs_b826DjaW);
                                    switch (hs_wild926Dkic.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026Dkid = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526DjaY, hs_a1826DjaZ, hs_b926Djb0);
                                        switch (hs_wild1026Dkid.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd1626Djb2, hs_a1926Djb3, hs_b1026Djb4);
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
    hs_zdczgze1425uUER.evaluate = function (hs_zddEq326Djcm, hs_zddOrd726DjbJ, hs_zddOrd826DjbN, hs_zddOrd926DjbR, hs_zddOrd1026DjbV, hs_zddOrd1126DjbZ, hs_zddOrd1226Djc3, hs_zddOrd1326Djc7, hs_zddOrd1426Djcb, hs_zddOrd1526Djcf, hs_zddOrd1626Djcj, hs_a926Djbl, hs_b26Djbx) {
        var hs_wild26Dkig = hs_a926Djbl;
        if (hs_a926Djbl.notEvaluated) {
            hs_wild26Dkig = hs_a926Djbl.hscall();
        }
        var hs_a1026DjbK = hs_wild26Dkig.data[0];
        var hs_a1126DjbO = hs_wild26Dkig.data[1];
        var hs_a1226DjbS = hs_wild26Dkig.data[2];
        var hs_a1326DjbW = hs_wild26Dkig.data[3];
        var hs_a1426Djc0 = hs_wild26Dkig.data[4];
        var hs_a1526Djc4 = hs_wild26Dkig.data[5];
        var hs_a1626Djc8 = hs_wild26Dkig.data[6];
        var hs_a1726Djcc = hs_wild26Dkig.data[7];
        var hs_a1826Djcg = hs_wild26Dkig.data[8];
        var hs_a1926Djck = hs_wild26Dkig.data[9];
        var hs_wild126Dkif = hs_b26Djbx;
        if (hs_b26Djbx.notEvaluated) {
            hs_wild126Dkif = hs_b26Djbx.hscall();
        }
        var hs_b126DjbL = hs_wild126Dkif.data[0];
        var hs_b226DjbP = hs_wild126Dkif.data[1];
        var hs_b326DjbT = hs_wild126Dkif.data[2];
        var hs_b426DjbX = hs_wild126Dkif.data[3];
        var hs_b526Djc1 = hs_wild126Dkif.data[4];
        var hs_b626Djc5 = hs_wild126Dkif.data[5];
        var hs_b726Djc9 = hs_wild126Dkif.data[6];
        var hs_b826Djcd = hs_wild126Dkif.data[7];
        var hs_b926Djch = hs_wild126Dkif.data[8];
        var hs_b1026Djcl = hs_wild126Dkif.data[9];
        var hs_wild226Dkie = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DjbJ, hs_a1026DjbK, hs_b126DjbL);
        switch (hs_wild226Dkie.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkih = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DjbN, hs_a1126DjbO, hs_b226DjbP);
            switch (hs_wild326Dkih.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkii = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DjbR, hs_a1226DjbS, hs_b326DjbT);
                switch (hs_wild426Dkii.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkij = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DjbV, hs_a1326DjbW, hs_b426DjbX);
                    switch (hs_wild526Dkij.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkik = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DjbZ, hs_a1426Djc0, hs_b526Djc1);
                        switch (hs_wild626Dkik.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkil = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226Djc3, hs_a1526Djc4, hs_b626Djc5);
                            switch (hs_wild726Dkil.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkim = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326Djc7, hs_a1626Djc8, hs_b726Djc9);
                                switch (hs_wild826Dkim.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dkin = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426Djcb, hs_a1726Djcc, hs_b826Djcd);
                                    switch (hs_wild926Dkin.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026Dkio = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526Djcf, hs_a1826Djcg, hs_b926Djch);
                                        switch (hs_wild1026Dkio.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd1626Djcj, hs_a1926Djck, hs_b1026Djcl);
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
    hs_zdczl1425uUG8.evaluate = function (hs_zddEq326DjdD, hs_zddOrd726Djd0, hs_zddOrd826Djd4, hs_zddOrd926Djd8, hs_zddOrd1026Djdc, hs_zddOrd1126Djdg, hs_zddOrd1226Djdk, hs_zddOrd1326Djdo, hs_zddOrd1426Djds, hs_zddOrd1526Djdw, hs_zddOrd1626DjdA, hs_a926DjcC, hs_b26DjcO) {
        var hs_wild26Dkir = hs_a926DjcC;
        if (hs_a926DjcC.notEvaluated) {
            hs_wild26Dkir = hs_a926DjcC.hscall();
        }
        var hs_a1026Djd1 = hs_wild26Dkir.data[0];
        var hs_a1126Djd5 = hs_wild26Dkir.data[1];
        var hs_a1226Djd9 = hs_wild26Dkir.data[2];
        var hs_a1326Djdd = hs_wild26Dkir.data[3];
        var hs_a1426Djdh = hs_wild26Dkir.data[4];
        var hs_a1526Djdl = hs_wild26Dkir.data[5];
        var hs_a1626Djdp = hs_wild26Dkir.data[6];
        var hs_a1726Djdt = hs_wild26Dkir.data[7];
        var hs_a1826Djdx = hs_wild26Dkir.data[8];
        var hs_a1926DjdB = hs_wild26Dkir.data[9];
        var hs_wild126Dkiq = hs_b26DjcO;
        if (hs_b26DjcO.notEvaluated) {
            hs_wild126Dkiq = hs_b26DjcO.hscall();
        }
        var hs_b126Djd2 = hs_wild126Dkiq.data[0];
        var hs_b226Djd6 = hs_wild126Dkiq.data[1];
        var hs_b326Djda = hs_wild126Dkiq.data[2];
        var hs_b426Djde = hs_wild126Dkiq.data[3];
        var hs_b526Djdi = hs_wild126Dkiq.data[4];
        var hs_b626Djdm = hs_wild126Dkiq.data[5];
        var hs_b726Djdq = hs_wild126Dkiq.data[6];
        var hs_b826Djdu = hs_wild126Dkiq.data[7];
        var hs_b926Djdy = hs_wild126Dkiq.data[8];
        var hs_b1026DjdC = hs_wild126Dkiq.data[9];
        var hs_wild226Dkip = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726Djd0, hs_a1026Djd1, hs_b126Djd2);
        switch (hs_wild226Dkip.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkis = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826Djd4, hs_a1126Djd5, hs_b226Djd6);
            switch (hs_wild326Dkis.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkit = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926Djd8, hs_a1226Djd9, hs_b326Djda);
                switch (hs_wild426Dkit.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkiu = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026Djdc, hs_a1326Djdd, hs_b426Djde);
                    switch (hs_wild526Dkiu.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkiv = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126Djdg, hs_a1426Djdh, hs_b526Djdi);
                        switch (hs_wild626Dkiv.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkiw = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226Djdk, hs_a1526Djdl, hs_b626Djdm);
                            switch (hs_wild726Dkiw.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkix = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326Djdo, hs_a1626Djdp, hs_b726Djdq);
                                switch (hs_wild826Dkix.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dkiy = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426Djds, hs_a1726Djdt, hs_b826Djdu);
                                    switch (hs_wild926Dkiy.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026Dkiz = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526Djdw, hs_a1826Djdx, hs_b926Djdy);
                                        switch (hs_wild1026Dkiz.tag) {
                                        case 1:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1626DjdA, hs_a1926DjdB, hs_b1026DjdC);
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
    hs_zdccompare1425uUHp.evaluate = function (hs_zddEq326DjeU, hs_zddOrd726Djeh, hs_zddOrd826Djel, hs_zddOrd926Djep, hs_zddOrd1026Djet, hs_zddOrd1126Djex, hs_zddOrd1226DjeB, hs_zddOrd1326DjeF, hs_zddOrd1426DjeJ, hs_zddOrd1526DjeN, hs_zddOrd1626DjeR, hs_a926DjdT, hs_b26Dje5) {
        var hs_wild26DkiC = hs_a926DjdT;
        if (hs_a926DjdT.notEvaluated) {
            hs_wild26DkiC = hs_a926DjdT.hscall();
        }
        var hs_a1026Djei = hs_wild26DkiC.data[0];
        var hs_a1126Djem = hs_wild26DkiC.data[1];
        var hs_a1226Djeq = hs_wild26DkiC.data[2];
        var hs_a1326Djeu = hs_wild26DkiC.data[3];
        var hs_a1426Djey = hs_wild26DkiC.data[4];
        var hs_a1526DjeC = hs_wild26DkiC.data[5];
        var hs_a1626DjeG = hs_wild26DkiC.data[6];
        var hs_a1726DjeK = hs_wild26DkiC.data[7];
        var hs_a1826DjeO = hs_wild26DkiC.data[8];
        var hs_a1926DjeS = hs_wild26DkiC.data[9];
        var hs_wild126DkiB = hs_b26Dje5;
        if (hs_b26Dje5.notEvaluated) {
            hs_wild126DkiB = hs_b26Dje5.hscall();
        }
        var hs_b126Djej = hs_wild126DkiB.data[0];
        var hs_b226Djen = hs_wild126DkiB.data[1];
        var hs_b326Djer = hs_wild126DkiB.data[2];
        var hs_b426Djev = hs_wild126DkiB.data[3];
        var hs_b526Djez = hs_wild126DkiB.data[4];
        var hs_b626DjeD = hs_wild126DkiB.data[5];
        var hs_b726DjeH = hs_wild126DkiB.data[6];
        var hs_b826DjeL = hs_wild126DkiB.data[7];
        var hs_b926DjeP = hs_wild126DkiB.data[8];
        var hs_b1026DjeT = hs_wild126DkiB.data[9];
        var hs_wild226DkiA = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726Djeh, hs_a1026Djei, hs_b126Djej);
        switch (hs_wild226DkiA.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkiD = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826Djel, hs_a1126Djem, hs_b226Djen);
            switch (hs_wild326DkiD.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DkiE = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926Djep, hs_a1226Djeq, hs_b326Djer);
                switch (hs_wild426DkiE.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DkiF = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026Djet, hs_a1326Djeu, hs_b426Djev);
                    switch (hs_wild526DkiF.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626DkiG = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126Djex, hs_a1426Djey, hs_b526Djez);
                        switch (hs_wild626DkiG.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726DkiH = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DjeB, hs_a1526DjeC, hs_b626DjeD);
                            switch (hs_wild726DkiH.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826DkiI = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326DjeF, hs_a1626DjeG, hs_b726DjeH);
                                switch (hs_wild826DkiI.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926DkiJ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426DjeJ, hs_a1726DjeK, hs_b826DjeL);
                                    switch (hs_wild926DkiJ.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026DkiK = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526DjeN, hs_a1826DjeO, hs_b926DjeP);
                                        switch (hs_wild1026DkiK.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626DjeR, hs_a1926DjeS, hs_b1026DjeT);
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
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Djfa, hs_zddOrd726Djfb, hs_zddOrd826Djfc, hs_zddOrd926Djfd, hs_zddOrd1026Djfe, hs_zddOrd1126Djff, hs_zddOrd1226Djfg, hs_zddOrd1326Djfh, hs_zddOrd1426Djfi, hs_zddOrd1526Djfj, hs_zddOrd1626Djfk) {
        var hs_sat26DkiL = new $hs.Thunk();
        hs_sat26DkiL.evaluateOnce = function () {
            return hs_zdcmin1525uUIG.hscall(hs_zddEq326Djfa, hs_zddOrd726Djfb, hs_zddOrd826Djfc, hs_zddOrd926Djfd, hs_zddOrd1026Djfe, hs_zddOrd1126Djff, hs_zddOrd1226Djfg, hs_zddOrd1326Djfh, hs_zddOrd1426Djfi, hs_zddOrd1526Djfj, hs_zddOrd1626Djfk);
        };
        var hs_sat26DkiM = new $hs.Thunk();
        hs_sat26DkiM.evaluateOnce = function () {
            return hs_zdcmax1525uUII.hscall(hs_zddEq326Djfa, hs_zddOrd726Djfb, hs_zddOrd826Djfc, hs_zddOrd926Djfd, hs_zddOrd1026Djfe, hs_zddOrd1126Djff, hs_zddOrd1226Djfg, hs_zddOrd1326Djfh, hs_zddOrd1426Djfi, hs_zddOrd1526Djfj, hs_zddOrd1626Djfk);
        };
        var hs_sat26DkiN = new $hs.Func(2);
        hs_sat26DkiN.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze1425uUCj.hscall(hs_zddEq326Djfa, hs_zddOrd726Djfb, hs_zddOrd826Djfc, hs_zddOrd926Djfd, hs_zddOrd1026Djfe, hs_zddOrd1126Djff, hs_zddOrd1226Djfg, hs_zddOrd1326Djfh, hs_zddOrd1426Djfi, hs_zddOrd1526Djfj, hs_zddOrd1626Djfk, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkiO = new $hs.Func(2);
        hs_sat26DkiO.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg1425uUDA.hscall(hs_zddEq326Djfa, hs_zddOrd726Djfb, hs_zddOrd826Djfc, hs_zddOrd926Djfd, hs_zddOrd1026Djfe, hs_zddOrd1126Djff, hs_zddOrd1226Djfg, hs_zddOrd1326Djfh, hs_zddOrd1426Djfi, hs_zddOrd1526Djfj, hs_zddOrd1626Djfk, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkiP = new $hs.Func(2);
        hs_sat26DkiP.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze1425uUER.hscall(hs_zddEq326Djfa, hs_zddOrd726Djfb, hs_zddOrd826Djfc, hs_zddOrd926Djfd, hs_zddOrd1026Djfe, hs_zddOrd1126Djff, hs_zddOrd1226Djfg, hs_zddOrd1326Djfh, hs_zddOrd1426Djfi, hs_zddOrd1526Djfj, hs_zddOrd1626Djfk, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkiQ = new $hs.Func(2);
        hs_sat26DkiQ.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl1425uUG8.hscall(hs_zddEq326Djfa, hs_zddOrd726Djfb, hs_zddOrd826Djfc, hs_zddOrd926Djfd, hs_zddOrd1026Djfe, hs_zddOrd1126Djff, hs_zddOrd1226Djfg, hs_zddOrd1326Djfh, hs_zddOrd1426Djfi, hs_zddOrd1526Djfj, hs_zddOrd1626Djfk, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkiR = new $hs.Func(2);
        hs_sat26DkiR.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare1425uUHp.hscall(hs_zddEq326Djfa, hs_zddOrd726Djfb, hs_zddOrd826Djfc, hs_zddOrd926Djfd, hs_zddOrd1026Djfe, hs_zddOrd1126Djff, hs_zddOrd1226Djfg, hs_zddOrd1326Djfh, hs_zddOrd1426Djfi, hs_zddOrd1526Djfj, hs_zddOrd1626Djfk, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq326Djfa, hs_sat26DkiR, hs_sat26DkiQ, hs_sat26DkiP, hs_sat26DkiO, hs_sat26DkiN, hs_sat26DkiM, hs_sat26DkiL];
        return $res;
    };
    hs_zdcmin1525uUIG.evaluate = function (hs_zddEq326DjfE, hs_zddOrd726DjfF, hs_zddOrd826DjfG, hs_zddOrd926DjfH, hs_zddOrd1026DjfI, hs_zddOrd1126DjfJ, hs_zddOrd1226DjfK, hs_zddOrd1326DjfL, hs_zddOrd1426DjfM, hs_zddOrd1526DjfN, hs_zddOrd1626DjfO) {
        var hs_zddOrd1726DjfP = new $hs.Thunk();
        hs_zddOrd1726DjfP.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326DjfE, hs_zddOrd726DjfF, hs_zddOrd826DjfG, hs_zddOrd926DjfH, hs_zddOrd1026DjfI, hs_zddOrd1126DjfJ, hs_zddOrd1226DjfK, hs_zddOrd1326DjfL, hs_zddOrd1426DjfM, hs_zddOrd1526DjfN, hs_zddOrd1626DjfO);
        };
        var hs_sat26DkiT = new $hs.Func(2);
        hs_sat26DkiT.evaluate = function (hs_x26DjfS, hs_y26DjfT) {
            var hs_wild26DkiS = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1726DjfP, hs_x26DjfS, hs_y26DjfT);
            switch (hs_wild26DkiS.tag) {
            case 1:
                if (hs_y26DjfT.notEvaluated) {
                    return hs_y26DjfT.hscall();
                } else {
                    return hs_y26DjfT;
                }
            case 2:
                if (hs_x26DjfS.notEvaluated) {
                    return hs_x26DjfS.hscall();
                } else {
                    return hs_x26DjfS;
                }
            }
        };
        if (hs_sat26DkiT.notEvaluated) {
            return hs_sat26DkiT.hscall();
        } else {
            return hs_sat26DkiT;
        }
    };
    hs_zdcmax1525uUII.evaluate = function (hs_zddEq326Djg8, hs_zddOrd726Djg9, hs_zddOrd826Djga, hs_zddOrd926Djgb, hs_zddOrd1026Djgc, hs_zddOrd1126Djgd, hs_zddOrd1226Djge, hs_zddOrd1326Djgf, hs_zddOrd1426Djgg, hs_zddOrd1526Djgh, hs_zddOrd1626Djgi) {
        var hs_zddOrd1726Djgj = new $hs.Thunk();
        hs_zddOrd1726Djgj.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326Djg8, hs_zddOrd726Djg9, hs_zddOrd826Djga, hs_zddOrd926Djgb, hs_zddOrd1026Djgc, hs_zddOrd1126Djgd, hs_zddOrd1226Djge, hs_zddOrd1326Djgf, hs_zddOrd1426Djgg, hs_zddOrd1526Djgh, hs_zddOrd1626Djgi);
        };
        var hs_sat26DkiV = new $hs.Func(2);
        hs_sat26DkiV.evaluate = function (hs_x26Djgm, hs_y26Djgn) {
            var hs_wild26DkiU = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1726Djgj, hs_x26Djgm, hs_y26Djgn);
            switch (hs_wild26DkiU.tag) {
            case 1:
                if (hs_x26Djgm.notEvaluated) {
                    return hs_x26Djgm.hscall();
                } else {
                    return hs_x26Djgm;
                }
            case 2:
                if (hs_y26Djgn.notEvaluated) {
                    return hs_y26Djgn.hscall();
                } else {
                    return hs_y26Djgn;
                }
            }
        };
        if (hs_sat26DkiV.notEvaluated) {
            return hs_sat26DkiV.hscall();
        } else {
            return hs_sat26DkiV;
        }
    };
    hs_zdczlze1525uUKb.evaluate = function (hs_zddEq326DjhN, hs_zddOrd726Djh6, hs_zddOrd826Djha, hs_zddOrd926Djhe, hs_zddOrd1026Djhi, hs_zddOrd1126Djhm, hs_zddOrd1226Djhq, hs_zddOrd1326Djhu, hs_zddOrd1426Djhy, hs_zddOrd1526DjhC, hs_zddOrd1626DjhG, hs_zddOrd1726DjhK, hs_a926DjgG, hs_b26DjgT) {
        var hs_wild26DkiY = hs_a926DjgG;
        if (hs_a926DjgG.notEvaluated) {
            hs_wild26DkiY = hs_a926DjgG.hscall();
        }
        var hs_a1026Djh7 = hs_wild26DkiY.data[0];
        var hs_a1126Djhb = hs_wild26DkiY.data[1];
        var hs_a1226Djhf = hs_wild26DkiY.data[2];
        var hs_a1326Djhj = hs_wild26DkiY.data[3];
        var hs_a1426Djhn = hs_wild26DkiY.data[4];
        var hs_a1526Djhr = hs_wild26DkiY.data[5];
        var hs_a1626Djhv = hs_wild26DkiY.data[6];
        var hs_a1726Djhz = hs_wild26DkiY.data[7];
        var hs_a1826DjhD = hs_wild26DkiY.data[8];
        var hs_a1926DjhH = hs_wild26DkiY.data[9];
        var hs_a2026DjhL = hs_wild26DkiY.data[10];
        var hs_wild126DkiX = hs_b26DjgT;
        if (hs_b26DjgT.notEvaluated) {
            hs_wild126DkiX = hs_b26DjgT.hscall();
        }
        var hs_b126Djh8 = hs_wild126DkiX.data[0];
        var hs_b226Djhc = hs_wild126DkiX.data[1];
        var hs_b326Djhg = hs_wild126DkiX.data[2];
        var hs_b426Djhk = hs_wild126DkiX.data[3];
        var hs_b526Djho = hs_wild126DkiX.data[4];
        var hs_b626Djhs = hs_wild126DkiX.data[5];
        var hs_b726Djhw = hs_wild126DkiX.data[6];
        var hs_b826DjhA = hs_wild126DkiX.data[7];
        var hs_b926DjhE = hs_wild126DkiX.data[8];
        var hs_b1026DjhI = hs_wild126DkiX.data[9];
        var hs_b1126DjhM = hs_wild126DkiX.data[10];
        var hs_wild226DkiW = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726Djh6, hs_a1026Djh7, hs_b126Djh8);
        switch (hs_wild226DkiW.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkiZ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826Djha, hs_a1126Djhb, hs_b226Djhc);
            switch (hs_wild326DkiZ.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkj0 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926Djhe, hs_a1226Djhf, hs_b326Djhg);
                switch (hs_wild426Dkj0.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkj1 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026Djhi, hs_a1326Djhj, hs_b426Djhk);
                    switch (hs_wild526Dkj1.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkj2 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126Djhm, hs_a1426Djhn, hs_b526Djho);
                        switch (hs_wild626Dkj2.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkj3 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226Djhq, hs_a1526Djhr, hs_b626Djhs);
                            switch (hs_wild726Dkj3.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkj4 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326Djhu, hs_a1626Djhv, hs_b726Djhw);
                                switch (hs_wild826Dkj4.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dkj5 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426Djhy, hs_a1726Djhz, hs_b826DjhA);
                                    switch (hs_wild926Dkj5.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026Dkj6 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526DjhC, hs_a1826DjhD, hs_b926DjhE);
                                        switch (hs_wild1026Dkj6.tag) {
                                        case 1:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126Dkj7 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626DjhG, hs_a1926DjhH, hs_b1026DjhI);
                                            switch (hs_wild1126Dkj7.tag) {
                                            case 1:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1726DjhK, hs_a2026DjhL, hs_b1126DjhM);
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
    hs_zdczg1525uULz.evaluate = function (hs_zddEq326Djjb, hs_zddOrd726Djiu, hs_zddOrd826Djiy, hs_zddOrd926DjiC, hs_zddOrd1026DjiG, hs_zddOrd1126DjiK, hs_zddOrd1226DjiO, hs_zddOrd1326DjiS, hs_zddOrd1426DjiW, hs_zddOrd1526Djj0, hs_zddOrd1626Djj4, hs_zddOrd1726Djj8, hs_a926Dji4, hs_b26Djih) {
        var hs_wild26Dkja = hs_a926Dji4;
        if (hs_a926Dji4.notEvaluated) {
            hs_wild26Dkja = hs_a926Dji4.hscall();
        }
        var hs_a1026Djiv = hs_wild26Dkja.data[0];
        var hs_a1126Djiz = hs_wild26Dkja.data[1];
        var hs_a1226DjiD = hs_wild26Dkja.data[2];
        var hs_a1326DjiH = hs_wild26Dkja.data[3];
        var hs_a1426DjiL = hs_wild26Dkja.data[4];
        var hs_a1526DjiP = hs_wild26Dkja.data[5];
        var hs_a1626DjiT = hs_wild26Dkja.data[6];
        var hs_a1726DjiX = hs_wild26Dkja.data[7];
        var hs_a1826Djj1 = hs_wild26Dkja.data[8];
        var hs_a1926Djj5 = hs_wild26Dkja.data[9];
        var hs_a2026Djj9 = hs_wild26Dkja.data[10];
        var hs_wild126Dkj9 = hs_b26Djih;
        if (hs_b26Djih.notEvaluated) {
            hs_wild126Dkj9 = hs_b26Djih.hscall();
        }
        var hs_b126Djiw = hs_wild126Dkj9.data[0];
        var hs_b226DjiA = hs_wild126Dkj9.data[1];
        var hs_b326DjiE = hs_wild126Dkj9.data[2];
        var hs_b426DjiI = hs_wild126Dkj9.data[3];
        var hs_b526DjiM = hs_wild126Dkj9.data[4];
        var hs_b626DjiQ = hs_wild126Dkj9.data[5];
        var hs_b726DjiU = hs_wild126Dkj9.data[6];
        var hs_b826DjiY = hs_wild126Dkj9.data[7];
        var hs_b926Djj2 = hs_wild126Dkj9.data[8];
        var hs_b1026Djj6 = hs_wild126Dkj9.data[9];
        var hs_b1126Djja = hs_wild126Dkj9.data[10];
        var hs_wild226Dkj8 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726Djiu, hs_a1026Djiv, hs_b126Djiw);
        switch (hs_wild226Dkj8.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkjb = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826Djiy, hs_a1126Djiz, hs_b226DjiA);
            switch (hs_wild326Dkjb.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkjc = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DjiC, hs_a1226DjiD, hs_b326DjiE);
                switch (hs_wild426Dkjc.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkjd = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DjiG, hs_a1326DjiH, hs_b426DjiI);
                    switch (hs_wild526Dkjd.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkje = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DjiK, hs_a1426DjiL, hs_b526DjiM);
                        switch (hs_wild626Dkje.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkjf = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DjiO, hs_a1526DjiP, hs_b626DjiQ);
                            switch (hs_wild726Dkjf.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkjg = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326DjiS, hs_a1626DjiT, hs_b726DjiU);
                                switch (hs_wild826Dkjg.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dkjh = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426DjiW, hs_a1726DjiX, hs_b826DjiY);
                                    switch (hs_wild926Dkjh.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026Dkji = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526Djj0, hs_a1826Djj1, hs_b926Djj2);
                                        switch (hs_wild1026Dkji.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126Dkjj = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626Djj4, hs_a1926Djj5, hs_b1026Djj6);
                                            switch (hs_wild1126Dkjj.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd1726Djj8, hs_a2026Djj9, hs_b1126Djja);
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
    hs_zdczgze1525uUMX.evaluate = function (hs_zddEq326Djkz, hs_zddOrd726DjjS, hs_zddOrd826DjjW, hs_zddOrd926Djk0, hs_zddOrd1026Djk4, hs_zddOrd1126Djk8, hs_zddOrd1226Djkc, hs_zddOrd1326Djkg, hs_zddOrd1426Djkk, hs_zddOrd1526Djko, hs_zddOrd1626Djks, hs_zddOrd1726Djkw, hs_a926Djjs, hs_b26DjjF) {
        var hs_wild26Dkjm = hs_a926Djjs;
        if (hs_a926Djjs.notEvaluated) {
            hs_wild26Dkjm = hs_a926Djjs.hscall();
        }
        var hs_a1026DjjT = hs_wild26Dkjm.data[0];
        var hs_a1126DjjX = hs_wild26Dkjm.data[1];
        var hs_a1226Djk1 = hs_wild26Dkjm.data[2];
        var hs_a1326Djk5 = hs_wild26Dkjm.data[3];
        var hs_a1426Djk9 = hs_wild26Dkjm.data[4];
        var hs_a1526Djkd = hs_wild26Dkjm.data[5];
        var hs_a1626Djkh = hs_wild26Dkjm.data[6];
        var hs_a1726Djkl = hs_wild26Dkjm.data[7];
        var hs_a1826Djkp = hs_wild26Dkjm.data[8];
        var hs_a1926Djkt = hs_wild26Dkjm.data[9];
        var hs_a2026Djkx = hs_wild26Dkjm.data[10];
        var hs_wild126Dkjl = hs_b26DjjF;
        if (hs_b26DjjF.notEvaluated) {
            hs_wild126Dkjl = hs_b26DjjF.hscall();
        }
        var hs_b126DjjU = hs_wild126Dkjl.data[0];
        var hs_b226DjjY = hs_wild126Dkjl.data[1];
        var hs_b326Djk2 = hs_wild126Dkjl.data[2];
        var hs_b426Djk6 = hs_wild126Dkjl.data[3];
        var hs_b526Djka = hs_wild126Dkjl.data[4];
        var hs_b626Djke = hs_wild126Dkjl.data[5];
        var hs_b726Djki = hs_wild126Dkjl.data[6];
        var hs_b826Djkm = hs_wild126Dkjl.data[7];
        var hs_b926Djkq = hs_wild126Dkjl.data[8];
        var hs_b1026Djku = hs_wild126Dkjl.data[9];
        var hs_b1126Djky = hs_wild126Dkjl.data[10];
        var hs_wild226Dkjk = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DjjS, hs_a1026DjjT, hs_b126DjjU);
        switch (hs_wild226Dkjk.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkjn = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DjjW, hs_a1126DjjX, hs_b226DjjY);
            switch (hs_wild326Dkjn.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkjo = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926Djk0, hs_a1226Djk1, hs_b326Djk2);
                switch (hs_wild426Dkjo.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkjp = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026Djk4, hs_a1326Djk5, hs_b426Djk6);
                    switch (hs_wild526Dkjp.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkjq = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126Djk8, hs_a1426Djk9, hs_b526Djka);
                        switch (hs_wild626Dkjq.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkjr = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226Djkc, hs_a1526Djkd, hs_b626Djke);
                            switch (hs_wild726Dkjr.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkjs = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326Djkg, hs_a1626Djkh, hs_b726Djki);
                                switch (hs_wild826Dkjs.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dkjt = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426Djkk, hs_a1726Djkl, hs_b826Djkm);
                                    switch (hs_wild926Dkjt.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026Dkju = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526Djko, hs_a1826Djkp, hs_b926Djkq);
                                        switch (hs_wild1026Dkju.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126Dkjv = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626Djks, hs_a1926Djkt, hs_b1026Djku);
                                            switch (hs_wild1126Dkjv.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd1726Djkw, hs_a2026Djkx, hs_b1126Djky);
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
    hs_zdczl1525uUOl.evaluate = function (hs_zddEq326DjlX, hs_zddOrd726Djlg, hs_zddOrd826Djlk, hs_zddOrd926Djlo, hs_zddOrd1026Djls, hs_zddOrd1126Djlw, hs_zddOrd1226DjlA, hs_zddOrd1326DjlE, hs_zddOrd1426DjlI, hs_zddOrd1526DjlM, hs_zddOrd1626DjlQ, hs_zddOrd1726DjlU, hs_a926DjkQ, hs_b26Djl3) {
        var hs_wild26Dkjy = hs_a926DjkQ;
        if (hs_a926DjkQ.notEvaluated) {
            hs_wild26Dkjy = hs_a926DjkQ.hscall();
        }
        var hs_a1026Djlh = hs_wild26Dkjy.data[0];
        var hs_a1126Djll = hs_wild26Dkjy.data[1];
        var hs_a1226Djlp = hs_wild26Dkjy.data[2];
        var hs_a1326Djlt = hs_wild26Dkjy.data[3];
        var hs_a1426Djlx = hs_wild26Dkjy.data[4];
        var hs_a1526DjlB = hs_wild26Dkjy.data[5];
        var hs_a1626DjlF = hs_wild26Dkjy.data[6];
        var hs_a1726DjlJ = hs_wild26Dkjy.data[7];
        var hs_a1826DjlN = hs_wild26Dkjy.data[8];
        var hs_a1926DjlR = hs_wild26Dkjy.data[9];
        var hs_a2026DjlV = hs_wild26Dkjy.data[10];
        var hs_wild126Dkjx = hs_b26Djl3;
        if (hs_b26Djl3.notEvaluated) {
            hs_wild126Dkjx = hs_b26Djl3.hscall();
        }
        var hs_b126Djli = hs_wild126Dkjx.data[0];
        var hs_b226Djlm = hs_wild126Dkjx.data[1];
        var hs_b326Djlq = hs_wild126Dkjx.data[2];
        var hs_b426Djlu = hs_wild126Dkjx.data[3];
        var hs_b526Djly = hs_wild126Dkjx.data[4];
        var hs_b626DjlC = hs_wild126Dkjx.data[5];
        var hs_b726DjlG = hs_wild126Dkjx.data[6];
        var hs_b826DjlK = hs_wild126Dkjx.data[7];
        var hs_b926DjlO = hs_wild126Dkjx.data[8];
        var hs_b1026DjlS = hs_wild126Dkjx.data[9];
        var hs_b1126DjlW = hs_wild126Dkjx.data[10];
        var hs_wild226Dkjw = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726Djlg, hs_a1026Djlh, hs_b126Djli);
        switch (hs_wild226Dkjw.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkjz = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826Djlk, hs_a1126Djll, hs_b226Djlm);
            switch (hs_wild326Dkjz.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DkjA = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926Djlo, hs_a1226Djlp, hs_b326Djlq);
                switch (hs_wild426DkjA.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DkjB = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026Djls, hs_a1326Djlt, hs_b426Djlu);
                    switch (hs_wild526DkjB.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626DkjC = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126Djlw, hs_a1426Djlx, hs_b526Djly);
                        switch (hs_wild626DkjC.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726DkjD = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DjlA, hs_a1526DjlB, hs_b626DjlC);
                            switch (hs_wild726DkjD.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826DkjE = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326DjlE, hs_a1626DjlF, hs_b726DjlG);
                                switch (hs_wild826DkjE.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926DkjF = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426DjlI, hs_a1726DjlJ, hs_b826DjlK);
                                    switch (hs_wild926DkjF.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026DkjG = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526DjlM, hs_a1826DjlN, hs_b926DjlO);
                                        switch (hs_wild1026DkjG.tag) {
                                        case 1:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126DkjH = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626DjlQ, hs_a1926DjlR, hs_b1026DjlS);
                                            switch (hs_wild1126DkjH.tag) {
                                            case 1:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1726DjlU, hs_a2026DjlV, hs_b1126DjlW);
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
    hs_zdccompare1525uUPJ.evaluate = function (hs_zddEq326Djnl, hs_zddOrd726DjmE, hs_zddOrd826DjmI, hs_zddOrd926DjmM, hs_zddOrd1026DjmQ, hs_zddOrd1126DjmU, hs_zddOrd1226DjmY, hs_zddOrd1326Djn2, hs_zddOrd1426Djn6, hs_zddOrd1526Djna, hs_zddOrd1626Djne, hs_zddOrd1726Djni, hs_a926Djme, hs_b26Djmr) {
        var hs_wild26DkjK = hs_a926Djme;
        if (hs_a926Djme.notEvaluated) {
            hs_wild26DkjK = hs_a926Djme.hscall();
        }
        var hs_a1026DjmF = hs_wild26DkjK.data[0];
        var hs_a1126DjmJ = hs_wild26DkjK.data[1];
        var hs_a1226DjmN = hs_wild26DkjK.data[2];
        var hs_a1326DjmR = hs_wild26DkjK.data[3];
        var hs_a1426DjmV = hs_wild26DkjK.data[4];
        var hs_a1526DjmZ = hs_wild26DkjK.data[5];
        var hs_a1626Djn3 = hs_wild26DkjK.data[6];
        var hs_a1726Djn7 = hs_wild26DkjK.data[7];
        var hs_a1826Djnb = hs_wild26DkjK.data[8];
        var hs_a1926Djnf = hs_wild26DkjK.data[9];
        var hs_a2026Djnj = hs_wild26DkjK.data[10];
        var hs_wild126DkjJ = hs_b26Djmr;
        if (hs_b26Djmr.notEvaluated) {
            hs_wild126DkjJ = hs_b26Djmr.hscall();
        }
        var hs_b126DjmG = hs_wild126DkjJ.data[0];
        var hs_b226DjmK = hs_wild126DkjJ.data[1];
        var hs_b326DjmO = hs_wild126DkjJ.data[2];
        var hs_b426DjmS = hs_wild126DkjJ.data[3];
        var hs_b526DjmW = hs_wild126DkjJ.data[4];
        var hs_b626Djn0 = hs_wild126DkjJ.data[5];
        var hs_b726Djn4 = hs_wild126DkjJ.data[6];
        var hs_b826Djn8 = hs_wild126DkjJ.data[7];
        var hs_b926Djnc = hs_wild126DkjJ.data[8];
        var hs_b1026Djng = hs_wild126DkjJ.data[9];
        var hs_b1126Djnk = hs_wild126DkjJ.data[10];
        var hs_wild226DkjI = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DjmE, hs_a1026DjmF, hs_b126DjmG);
        switch (hs_wild226DkjI.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkjL = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DjmI, hs_a1126DjmJ, hs_b226DjmK);
            switch (hs_wild326DkjL.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DkjM = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DjmM, hs_a1226DjmN, hs_b326DjmO);
                switch (hs_wild426DkjM.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DkjN = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DjmQ, hs_a1326DjmR, hs_b426DjmS);
                    switch (hs_wild526DkjN.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626DkjO = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DjmU, hs_a1426DjmV, hs_b526DjmW);
                        switch (hs_wild626DkjO.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726DkjP = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DjmY, hs_a1526DjmZ, hs_b626Djn0);
                            switch (hs_wild726DkjP.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826DkjQ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326Djn2, hs_a1626Djn3, hs_b726Djn4);
                                switch (hs_wild826DkjQ.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926DkjR = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426Djn6, hs_a1726Djn7, hs_b826Djn8);
                                    switch (hs_wild926DkjR.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026DkjS = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526Djna, hs_a1826Djnb, hs_b926Djnc);
                                        switch (hs_wild1026DkjS.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126DkjT = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626Djne, hs_a1926Djnf, hs_b1026Djng);
                                            switch (hs_wild1126DkjT.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726Djni, hs_a2026Djnj, hs_b1126Djnk);
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
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326DjnC, hs_zddOrd726DjnD, hs_zddOrd826DjnE, hs_zddOrd926DjnF, hs_zddOrd1026DjnG, hs_zddOrd1126DjnH, hs_zddOrd1226DjnI, hs_zddOrd1326DjnJ, hs_zddOrd1426DjnK, hs_zddOrd1526DjnL, hs_zddOrd1626DjnM, hs_zddOrd1726DjnN) {
        var hs_sat26DkjU = new $hs.Thunk();
        hs_sat26DkjU.evaluateOnce = function () {
            return hs_zdcmin1625uUR7.hscall(hs_zddEq326DjnC, hs_zddOrd726DjnD, hs_zddOrd826DjnE, hs_zddOrd926DjnF, hs_zddOrd1026DjnG, hs_zddOrd1126DjnH, hs_zddOrd1226DjnI, hs_zddOrd1326DjnJ, hs_zddOrd1426DjnK, hs_zddOrd1526DjnL, hs_zddOrd1626DjnM, hs_zddOrd1726DjnN);
        };
        var hs_sat26DkjV = new $hs.Thunk();
        hs_sat26DkjV.evaluateOnce = function () {
            return hs_zdcmax1625uUR9.hscall(hs_zddEq326DjnC, hs_zddOrd726DjnD, hs_zddOrd826DjnE, hs_zddOrd926DjnF, hs_zddOrd1026DjnG, hs_zddOrd1126DjnH, hs_zddOrd1226DjnI, hs_zddOrd1326DjnJ, hs_zddOrd1426DjnK, hs_zddOrd1526DjnL, hs_zddOrd1626DjnM, hs_zddOrd1726DjnN);
        };
        var hs_sat26DkjW = new $hs.Func(2);
        hs_sat26DkjW.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze1525uUKb.hscall(hs_zddEq326DjnC, hs_zddOrd726DjnD, hs_zddOrd826DjnE, hs_zddOrd926DjnF, hs_zddOrd1026DjnG, hs_zddOrd1126DjnH, hs_zddOrd1226DjnI, hs_zddOrd1326DjnJ, hs_zddOrd1426DjnK, hs_zddOrd1526DjnL, hs_zddOrd1626DjnM, hs_zddOrd1726DjnN, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkjX = new $hs.Func(2);
        hs_sat26DkjX.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg1525uULz.hscall(hs_zddEq326DjnC, hs_zddOrd726DjnD, hs_zddOrd826DjnE, hs_zddOrd926DjnF, hs_zddOrd1026DjnG, hs_zddOrd1126DjnH, hs_zddOrd1226DjnI, hs_zddOrd1326DjnJ, hs_zddOrd1426DjnK, hs_zddOrd1526DjnL, hs_zddOrd1626DjnM, hs_zddOrd1726DjnN, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkjY = new $hs.Func(2);
        hs_sat26DkjY.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze1525uUMX.hscall(hs_zddEq326DjnC, hs_zddOrd726DjnD, hs_zddOrd826DjnE, hs_zddOrd926DjnF, hs_zddOrd1026DjnG, hs_zddOrd1126DjnH, hs_zddOrd1226DjnI, hs_zddOrd1326DjnJ, hs_zddOrd1426DjnK, hs_zddOrd1526DjnL, hs_zddOrd1626DjnM, hs_zddOrd1726DjnN, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DkjZ = new $hs.Func(2);
        hs_sat26DkjZ.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl1525uUOl.hscall(hs_zddEq326DjnC, hs_zddOrd726DjnD, hs_zddOrd826DjnE, hs_zddOrd926DjnF, hs_zddOrd1026DjnG, hs_zddOrd1126DjnH, hs_zddOrd1226DjnI, hs_zddOrd1326DjnJ, hs_zddOrd1426DjnK, hs_zddOrd1526DjnL, hs_zddOrd1626DjnM, hs_zddOrd1726DjnN, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkk0 = new $hs.Func(2);
        hs_sat26Dkk0.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare1525uUPJ.hscall(hs_zddEq326DjnC, hs_zddOrd726DjnD, hs_zddOrd826DjnE, hs_zddOrd926DjnF, hs_zddOrd1026DjnG, hs_zddOrd1126DjnH, hs_zddOrd1226DjnI, hs_zddOrd1326DjnJ, hs_zddOrd1426DjnK, hs_zddOrd1526DjnL, hs_zddOrd1626DjnM, hs_zddOrd1726DjnN, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq326DjnC, hs_sat26Dkk0, hs_sat26DkjZ, hs_sat26DkjY, hs_sat26DkjX, hs_sat26DkjW, hs_sat26DkjV, hs_sat26DkjU];
        return $res;
    };
    hs_zdcmin1625uUR7.evaluate = function (hs_zddEq326Djo8, hs_zddOrd726Djo9, hs_zddOrd826Djoa, hs_zddOrd926Djob, hs_zddOrd1026Djoc, hs_zddOrd1126Djod, hs_zddOrd1226Djoe, hs_zddOrd1326Djof, hs_zddOrd1426Djog, hs_zddOrd1526Djoh, hs_zddOrd1626Djoi, hs_zddOrd1726Djoj) {
        var hs_zddOrd1826Djok = new $hs.Thunk();
        hs_zddOrd1826Djok.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326Djo8, hs_zddOrd726Djo9, hs_zddOrd826Djoa, hs_zddOrd926Djob, hs_zddOrd1026Djoc, hs_zddOrd1126Djod, hs_zddOrd1226Djoe, hs_zddOrd1326Djof, hs_zddOrd1426Djog, hs_zddOrd1526Djoh, hs_zddOrd1626Djoi, hs_zddOrd1726Djoj);
        };
        var hs_sat26Dkk2 = new $hs.Func(2);
        hs_sat26Dkk2.evaluate = function (hs_x26Djon, hs_y26Djoo) {
            var hs_wild26Dkk1 = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1826Djok, hs_x26Djon, hs_y26Djoo);
            switch (hs_wild26Dkk1.tag) {
            case 1:
                if (hs_y26Djoo.notEvaluated) {
                    return hs_y26Djoo.hscall();
                } else {
                    return hs_y26Djoo;
                }
            case 2:
                if (hs_x26Djon.notEvaluated) {
                    return hs_x26Djon.hscall();
                } else {
                    return hs_x26Djon;
                }
            }
        };
        if (hs_sat26Dkk2.notEvaluated) {
            return hs_sat26Dkk2.hscall();
        } else {
            return hs_sat26Dkk2;
        }
    };
    hs_zdcmax1625uUR9.evaluate = function (hs_zddEq326DjoE, hs_zddOrd726DjoF, hs_zddOrd826DjoG, hs_zddOrd926DjoH, hs_zddOrd1026DjoI, hs_zddOrd1126DjoJ, hs_zddOrd1226DjoK, hs_zddOrd1326DjoL, hs_zddOrd1426DjoM, hs_zddOrd1526DjoN, hs_zddOrd1626DjoO, hs_zddOrd1726DjoP) {
        var hs_zddOrd1826DjoQ = new $hs.Thunk();
        hs_zddOrd1826DjoQ.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326DjoE, hs_zddOrd726DjoF, hs_zddOrd826DjoG, hs_zddOrd926DjoH, hs_zddOrd1026DjoI, hs_zddOrd1126DjoJ, hs_zddOrd1226DjoK, hs_zddOrd1326DjoL, hs_zddOrd1426DjoM, hs_zddOrd1526DjoN, hs_zddOrd1626DjoO, hs_zddOrd1726DjoP);
        };
        var hs_sat26Dkk4 = new $hs.Func(2);
        hs_sat26Dkk4.evaluate = function (hs_x26DjoT, hs_y26DjoU) {
            var hs_wild26Dkk3 = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1826DjoQ, hs_x26DjoT, hs_y26DjoU);
            switch (hs_wild26Dkk3.tag) {
            case 1:
                if (hs_x26DjoT.notEvaluated) {
                    return hs_x26DjoT.hscall();
                } else {
                    return hs_x26DjoT;
                }
            case 2:
                if (hs_y26DjoU.notEvaluated) {
                    return hs_y26DjoU.hscall();
                } else {
                    return hs_y26DjoU;
                }
            }
        };
        if (hs_sat26Dkk4.notEvaluated) {
            return hs_sat26Dkk4.hscall();
        } else {
            return hs_sat26Dkk4;
        }
    };
    hs_zdczlze1625uUSI.evaluate = function (hs_zddEq326Djqr, hs_zddOrd726DjpG, hs_zddOrd826DjpK, hs_zddOrd926DjpO, hs_zddOrd1026DjpS, hs_zddOrd1126DjpW, hs_zddOrd1226Djq0, hs_zddOrd1326Djq4, hs_zddOrd1426Djq8, hs_zddOrd1526Djqc, hs_zddOrd1626Djqg, hs_zddOrd1726Djqk, hs_zddOrd1826Djqo, hs_a926Djpe, hs_b26Djps) {
        var hs_wild26Dkk7 = hs_a926Djpe;
        if (hs_a926Djpe.notEvaluated) {
            hs_wild26Dkk7 = hs_a926Djpe.hscall();
        }
        var hs_a1026DjpH = hs_wild26Dkk7.data[0];
        var hs_a1126DjpL = hs_wild26Dkk7.data[1];
        var hs_a1226DjpP = hs_wild26Dkk7.data[2];
        var hs_a1326DjpT = hs_wild26Dkk7.data[3];
        var hs_a1426DjpX = hs_wild26Dkk7.data[4];
        var hs_a1526Djq1 = hs_wild26Dkk7.data[5];
        var hs_a1626Djq5 = hs_wild26Dkk7.data[6];
        var hs_a1726Djq9 = hs_wild26Dkk7.data[7];
        var hs_a1826Djqd = hs_wild26Dkk7.data[8];
        var hs_a1926Djqh = hs_wild26Dkk7.data[9];
        var hs_a2026Djql = hs_wild26Dkk7.data[10];
        var hs_a2126Djqp = hs_wild26Dkk7.data[11];
        var hs_wild126Dkk6 = hs_b26Djps;
        if (hs_b26Djps.notEvaluated) {
            hs_wild126Dkk6 = hs_b26Djps.hscall();
        }
        var hs_b126DjpI = hs_wild126Dkk6.data[0];
        var hs_b226DjpM = hs_wild126Dkk6.data[1];
        var hs_b326DjpQ = hs_wild126Dkk6.data[2];
        var hs_b426DjpU = hs_wild126Dkk6.data[3];
        var hs_b526DjpY = hs_wild126Dkk6.data[4];
        var hs_b626Djq2 = hs_wild126Dkk6.data[5];
        var hs_b726Djq6 = hs_wild126Dkk6.data[6];
        var hs_b826Djqa = hs_wild126Dkk6.data[7];
        var hs_b926Djqe = hs_wild126Dkk6.data[8];
        var hs_b1026Djqi = hs_wild126Dkk6.data[9];
        var hs_b1126Djqm = hs_wild126Dkk6.data[10];
        var hs_b1226Djqq = hs_wild126Dkk6.data[11];
        var hs_wild226Dkk5 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DjpG, hs_a1026DjpH, hs_b126DjpI);
        switch (hs_wild226Dkk5.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkk8 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DjpK, hs_a1126DjpL, hs_b226DjpM);
            switch (hs_wild326Dkk8.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkk9 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DjpO, hs_a1226DjpP, hs_b326DjpQ);
                switch (hs_wild426Dkk9.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkka = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DjpS, hs_a1326DjpT, hs_b426DjpU);
                    switch (hs_wild526Dkka.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkkb = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DjpW, hs_a1426DjpX, hs_b526DjpY);
                        switch (hs_wild626Dkkb.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkkc = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226Djq0, hs_a1526Djq1, hs_b626Djq2);
                            switch (hs_wild726Dkkc.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkkd = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326Djq4, hs_a1626Djq5, hs_b726Djq6);
                                switch (hs_wild826Dkkd.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dkke = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426Djq8, hs_a1726Djq9, hs_b826Djqa);
                                    switch (hs_wild926Dkke.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026Dkkf = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526Djqc, hs_a1826Djqd, hs_b926Djqe);
                                        switch (hs_wild1026Dkkf.tag) {
                                        case 1:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126Dkkg = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626Djqg, hs_a1926Djqh, hs_b1026Djqi);
                                            switch (hs_wild1126Dkkg.tag) {
                                            case 1:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226Dkkh = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726Djqk, hs_a2026Djql, hs_b1126Djqm);
                                                switch (hs_wild1226Dkkh.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1826Djqo, hs_a2126Djqp, hs_b1226Djqq);
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
    hs_zdczg1625uUUd.evaluate = function (hs_zddEq326DjrW, hs_zddOrd726Djrb, hs_zddOrd826Djrf, hs_zddOrd926Djrj, hs_zddOrd1026Djrn, hs_zddOrd1126Djrr, hs_zddOrd1226Djrv, hs_zddOrd1326Djrz, hs_zddOrd1426DjrD, hs_zddOrd1526DjrH, hs_zddOrd1626DjrL, hs_zddOrd1726DjrP, hs_zddOrd1826DjrT, hs_a926DjqJ, hs_b26DjqX) {
        var hs_wild26Dkkk = hs_a926DjqJ;
        if (hs_a926DjqJ.notEvaluated) {
            hs_wild26Dkkk = hs_a926DjqJ.hscall();
        }
        var hs_a1026Djrc = hs_wild26Dkkk.data[0];
        var hs_a1126Djrg = hs_wild26Dkkk.data[1];
        var hs_a1226Djrk = hs_wild26Dkkk.data[2];
        var hs_a1326Djro = hs_wild26Dkkk.data[3];
        var hs_a1426Djrs = hs_wild26Dkkk.data[4];
        var hs_a1526Djrw = hs_wild26Dkkk.data[5];
        var hs_a1626DjrA = hs_wild26Dkkk.data[6];
        var hs_a1726DjrE = hs_wild26Dkkk.data[7];
        var hs_a1826DjrI = hs_wild26Dkkk.data[8];
        var hs_a1926DjrM = hs_wild26Dkkk.data[9];
        var hs_a2026DjrQ = hs_wild26Dkkk.data[10];
        var hs_a2126DjrU = hs_wild26Dkkk.data[11];
        var hs_wild126Dkkj = hs_b26DjqX;
        if (hs_b26DjqX.notEvaluated) {
            hs_wild126Dkkj = hs_b26DjqX.hscall();
        }
        var hs_b126Djrd = hs_wild126Dkkj.data[0];
        var hs_b226Djrh = hs_wild126Dkkj.data[1];
        var hs_b326Djrl = hs_wild126Dkkj.data[2];
        var hs_b426Djrp = hs_wild126Dkkj.data[3];
        var hs_b526Djrt = hs_wild126Dkkj.data[4];
        var hs_b626Djrx = hs_wild126Dkkj.data[5];
        var hs_b726DjrB = hs_wild126Dkkj.data[6];
        var hs_b826DjrF = hs_wild126Dkkj.data[7];
        var hs_b926DjrJ = hs_wild126Dkkj.data[8];
        var hs_b1026DjrN = hs_wild126Dkkj.data[9];
        var hs_b1126DjrR = hs_wild126Dkkj.data[10];
        var hs_b1226DjrV = hs_wild126Dkkj.data[11];
        var hs_wild226Dkki = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726Djrb, hs_a1026Djrc, hs_b126Djrd);
        switch (hs_wild226Dkki.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkkl = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826Djrf, hs_a1126Djrg, hs_b226Djrh);
            switch (hs_wild326Dkkl.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkkm = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926Djrj, hs_a1226Djrk, hs_b326Djrl);
                switch (hs_wild426Dkkm.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkkn = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026Djrn, hs_a1326Djro, hs_b426Djrp);
                    switch (hs_wild526Dkkn.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkko = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126Djrr, hs_a1426Djrs, hs_b526Djrt);
                        switch (hs_wild626Dkko.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkkp = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226Djrv, hs_a1526Djrw, hs_b626Djrx);
                            switch (hs_wild726Dkkp.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkkq = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326Djrz, hs_a1626DjrA, hs_b726DjrB);
                                switch (hs_wild826Dkkq.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dkkr = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426DjrD, hs_a1726DjrE, hs_b826DjrF);
                                    switch (hs_wild926Dkkr.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026Dkks = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526DjrH, hs_a1826DjrI, hs_b926DjrJ);
                                        switch (hs_wild1026Dkks.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126Dkkt = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626DjrL, hs_a1926DjrM, hs_b1026DjrN);
                                            switch (hs_wild1126Dkkt.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226Dkku = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726DjrP, hs_a2026DjrQ, hs_b1126DjrR);
                                                switch (hs_wild1226Dkku.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd1826DjrT, hs_a2126DjrU, hs_b1226DjrV);
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
    hs_zdczgze1625uUVI.evaluate = function (hs_zddEq326Djtr, hs_zddOrd726DjsG, hs_zddOrd826DjsK, hs_zddOrd926DjsO, hs_zddOrd1026DjsS, hs_zddOrd1126DjsW, hs_zddOrd1226Djt0, hs_zddOrd1326Djt4, hs_zddOrd1426Djt8, hs_zddOrd1526Djtc, hs_zddOrd1626Djtg, hs_zddOrd1726Djtk, hs_zddOrd1826Djto, hs_a926Djse, hs_b26Djss) {
        var hs_wild26Dkkx = hs_a926Djse;
        if (hs_a926Djse.notEvaluated) {
            hs_wild26Dkkx = hs_a926Djse.hscall();
        }
        var hs_a1026DjsH = hs_wild26Dkkx.data[0];
        var hs_a1126DjsL = hs_wild26Dkkx.data[1];
        var hs_a1226DjsP = hs_wild26Dkkx.data[2];
        var hs_a1326DjsT = hs_wild26Dkkx.data[3];
        var hs_a1426DjsX = hs_wild26Dkkx.data[4];
        var hs_a1526Djt1 = hs_wild26Dkkx.data[5];
        var hs_a1626Djt5 = hs_wild26Dkkx.data[6];
        var hs_a1726Djt9 = hs_wild26Dkkx.data[7];
        var hs_a1826Djtd = hs_wild26Dkkx.data[8];
        var hs_a1926Djth = hs_wild26Dkkx.data[9];
        var hs_a2026Djtl = hs_wild26Dkkx.data[10];
        var hs_a2126Djtp = hs_wild26Dkkx.data[11];
        var hs_wild126Dkkw = hs_b26Djss;
        if (hs_b26Djss.notEvaluated) {
            hs_wild126Dkkw = hs_b26Djss.hscall();
        }
        var hs_b126DjsI = hs_wild126Dkkw.data[0];
        var hs_b226DjsM = hs_wild126Dkkw.data[1];
        var hs_b326DjsQ = hs_wild126Dkkw.data[2];
        var hs_b426DjsU = hs_wild126Dkkw.data[3];
        var hs_b526DjsY = hs_wild126Dkkw.data[4];
        var hs_b626Djt2 = hs_wild126Dkkw.data[5];
        var hs_b726Djt6 = hs_wild126Dkkw.data[6];
        var hs_b826Djta = hs_wild126Dkkw.data[7];
        var hs_b926Djte = hs_wild126Dkkw.data[8];
        var hs_b1026Djti = hs_wild126Dkkw.data[9];
        var hs_b1126Djtm = hs_wild126Dkkw.data[10];
        var hs_b1226Djtq = hs_wild126Dkkw.data[11];
        var hs_wild226Dkkv = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DjsG, hs_a1026DjsH, hs_b126DjsI);
        switch (hs_wild226Dkkv.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkky = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DjsK, hs_a1126DjsL, hs_b226DjsM);
            switch (hs_wild326Dkky.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkkz = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DjsO, hs_a1226DjsP, hs_b326DjsQ);
                switch (hs_wild426Dkkz.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DkkA = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DjsS, hs_a1326DjsT, hs_b426DjsU);
                    switch (hs_wild526DkkA.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626DkkB = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DjsW, hs_a1426DjsX, hs_b526DjsY);
                        switch (hs_wild626DkkB.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726DkkC = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226Djt0, hs_a1526Djt1, hs_b626Djt2);
                            switch (hs_wild726DkkC.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826DkkD = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326Djt4, hs_a1626Djt5, hs_b726Djt6);
                                switch (hs_wild826DkkD.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926DkkE = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426Djt8, hs_a1726Djt9, hs_b826Djta);
                                    switch (hs_wild926DkkE.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026DkkF = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526Djtc, hs_a1826Djtd, hs_b926Djte);
                                        switch (hs_wild1026DkkF.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126DkkG = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626Djtg, hs_a1926Djth, hs_b1026Djti);
                                            switch (hs_wild1126DkkG.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226DkkH = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726Djtk, hs_a2026Djtl, hs_b1126Djtm);
                                                switch (hs_wild1226DkkH.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd1826Djto, hs_a2126Djtp, hs_b1226Djtq);
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
    hs_zdczl1625uUXd.evaluate = function (hs_zddEq326DjuW, hs_zddOrd726Djub, hs_zddOrd826Djuf, hs_zddOrd926Djuj, hs_zddOrd1026Djun, hs_zddOrd1126Djur, hs_zddOrd1226Djuv, hs_zddOrd1326Djuz, hs_zddOrd1426DjuD, hs_zddOrd1526DjuH, hs_zddOrd1626DjuL, hs_zddOrd1726DjuP, hs_zddOrd1826DjuT, hs_a926DjtJ, hs_b26DjtX) {
        var hs_wild26DkkK = hs_a926DjtJ;
        if (hs_a926DjtJ.notEvaluated) {
            hs_wild26DkkK = hs_a926DjtJ.hscall();
        }
        var hs_a1026Djuc = hs_wild26DkkK.data[0];
        var hs_a1126Djug = hs_wild26DkkK.data[1];
        var hs_a1226Djuk = hs_wild26DkkK.data[2];
        var hs_a1326Djuo = hs_wild26DkkK.data[3];
        var hs_a1426Djus = hs_wild26DkkK.data[4];
        var hs_a1526Djuw = hs_wild26DkkK.data[5];
        var hs_a1626DjuA = hs_wild26DkkK.data[6];
        var hs_a1726DjuE = hs_wild26DkkK.data[7];
        var hs_a1826DjuI = hs_wild26DkkK.data[8];
        var hs_a1926DjuM = hs_wild26DkkK.data[9];
        var hs_a2026DjuQ = hs_wild26DkkK.data[10];
        var hs_a2126DjuU = hs_wild26DkkK.data[11];
        var hs_wild126DkkJ = hs_b26DjtX;
        if (hs_b26DjtX.notEvaluated) {
            hs_wild126DkkJ = hs_b26DjtX.hscall();
        }
        var hs_b126Djud = hs_wild126DkkJ.data[0];
        var hs_b226Djuh = hs_wild126DkkJ.data[1];
        var hs_b326Djul = hs_wild126DkkJ.data[2];
        var hs_b426Djup = hs_wild126DkkJ.data[3];
        var hs_b526Djut = hs_wild126DkkJ.data[4];
        var hs_b626Djux = hs_wild126DkkJ.data[5];
        var hs_b726DjuB = hs_wild126DkkJ.data[6];
        var hs_b826DjuF = hs_wild126DkkJ.data[7];
        var hs_b926DjuJ = hs_wild126DkkJ.data[8];
        var hs_b1026DjuN = hs_wild126DkkJ.data[9];
        var hs_b1126DjuR = hs_wild126DkkJ.data[10];
        var hs_b1226DjuV = hs_wild126DkkJ.data[11];
        var hs_wild226DkkI = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726Djub, hs_a1026Djuc, hs_b126Djud);
        switch (hs_wild226DkkI.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkkL = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826Djuf, hs_a1126Djug, hs_b226Djuh);
            switch (hs_wild326DkkL.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DkkM = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926Djuj, hs_a1226Djuk, hs_b326Djul);
                switch (hs_wild426DkkM.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DkkN = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026Djun, hs_a1326Djuo, hs_b426Djup);
                    switch (hs_wild526DkkN.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626DkkO = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126Djur, hs_a1426Djus, hs_b526Djut);
                        switch (hs_wild626DkkO.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726DkkP = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226Djuv, hs_a1526Djuw, hs_b626Djux);
                            switch (hs_wild726DkkP.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826DkkQ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326Djuz, hs_a1626DjuA, hs_b726DjuB);
                                switch (hs_wild826DkkQ.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926DkkR = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426DjuD, hs_a1726DjuE, hs_b826DjuF);
                                    switch (hs_wild926DkkR.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026DkkS = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526DjuH, hs_a1826DjuI, hs_b926DjuJ);
                                        switch (hs_wild1026DkkS.tag) {
                                        case 1:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126DkkT = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626DjuL, hs_a1926DjuM, hs_b1026DjuN);
                                            switch (hs_wild1126DkkT.tag) {
                                            case 1:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226DkkU = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726DjuP, hs_a2026DjuQ, hs_b1126DjuR);
                                                switch (hs_wild1226DkkU.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1826DjuT, hs_a2126DjuU, hs_b1226DjuV);
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
    hs_zdccompare1625uUYI.evaluate = function (hs_zddEq326Djwr, hs_zddOrd726DjvG, hs_zddOrd826DjvK, hs_zddOrd926DjvO, hs_zddOrd1026DjvS, hs_zddOrd1126DjvW, hs_zddOrd1226Djw0, hs_zddOrd1326Djw4, hs_zddOrd1426Djw8, hs_zddOrd1526Djwc, hs_zddOrd1626Djwg, hs_zddOrd1726Djwk, hs_zddOrd1826Djwo, hs_a926Djve, hs_b26Djvs) {
        var hs_wild26DkkX = hs_a926Djve;
        if (hs_a926Djve.notEvaluated) {
            hs_wild26DkkX = hs_a926Djve.hscall();
        }
        var hs_a1026DjvH = hs_wild26DkkX.data[0];
        var hs_a1126DjvL = hs_wild26DkkX.data[1];
        var hs_a1226DjvP = hs_wild26DkkX.data[2];
        var hs_a1326DjvT = hs_wild26DkkX.data[3];
        var hs_a1426DjvX = hs_wild26DkkX.data[4];
        var hs_a1526Djw1 = hs_wild26DkkX.data[5];
        var hs_a1626Djw5 = hs_wild26DkkX.data[6];
        var hs_a1726Djw9 = hs_wild26DkkX.data[7];
        var hs_a1826Djwd = hs_wild26DkkX.data[8];
        var hs_a1926Djwh = hs_wild26DkkX.data[9];
        var hs_a2026Djwl = hs_wild26DkkX.data[10];
        var hs_a2126Djwp = hs_wild26DkkX.data[11];
        var hs_wild126DkkW = hs_b26Djvs;
        if (hs_b26Djvs.notEvaluated) {
            hs_wild126DkkW = hs_b26Djvs.hscall();
        }
        var hs_b126DjvI = hs_wild126DkkW.data[0];
        var hs_b226DjvM = hs_wild126DkkW.data[1];
        var hs_b326DjvQ = hs_wild126DkkW.data[2];
        var hs_b426DjvU = hs_wild126DkkW.data[3];
        var hs_b526DjvY = hs_wild126DkkW.data[4];
        var hs_b626Djw2 = hs_wild126DkkW.data[5];
        var hs_b726Djw6 = hs_wild126DkkW.data[6];
        var hs_b826Djwa = hs_wild126DkkW.data[7];
        var hs_b926Djwe = hs_wild126DkkW.data[8];
        var hs_b1026Djwi = hs_wild126DkkW.data[9];
        var hs_b1126Djwm = hs_wild126DkkW.data[10];
        var hs_b1226Djwq = hs_wild126DkkW.data[11];
        var hs_wild226DkkV = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DjvG, hs_a1026DjvH, hs_b126DjvI);
        switch (hs_wild226DkkV.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkkY = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DjvK, hs_a1126DjvL, hs_b226DjvM);
            switch (hs_wild326DkkY.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DkkZ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DjvO, hs_a1226DjvP, hs_b326DjvQ);
                switch (hs_wild426DkkZ.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkl0 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DjvS, hs_a1326DjvT, hs_b426DjvU);
                    switch (hs_wild526Dkl0.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkl1 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DjvW, hs_a1426DjvX, hs_b526DjvY);
                        switch (hs_wild626Dkl1.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkl2 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226Djw0, hs_a1526Djw1, hs_b626Djw2);
                            switch (hs_wild726Dkl2.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkl3 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326Djw4, hs_a1626Djw5, hs_b726Djw6);
                                switch (hs_wild826Dkl3.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dkl4 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426Djw8, hs_a1726Djw9, hs_b826Djwa);
                                    switch (hs_wild926Dkl4.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026Dkl5 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526Djwc, hs_a1826Djwd, hs_b926Djwe);
                                        switch (hs_wild1026Dkl5.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126Dkl6 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626Djwg, hs_a1926Djwh, hs_b1026Djwi);
                                            switch (hs_wild1126Dkl6.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226Dkl7 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726Djwk, hs_a2026Djwl, hs_b1126Djwm);
                                                switch (hs_wild1226Dkl7.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826Djwo, hs_a2126Djwp, hs_b1226Djwq);
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
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326DjwJ, hs_zddOrd726DjwK, hs_zddOrd826DjwL, hs_zddOrd926DjwM, hs_zddOrd1026DjwN, hs_zddOrd1126DjwO, hs_zddOrd1226DjwP, hs_zddOrd1326DjwQ, hs_zddOrd1426DjwR, hs_zddOrd1526DjwS, hs_zddOrd1626DjwT, hs_zddOrd1726DjwU, hs_zddOrd1826DjwV) {
        var hs_sat26Dkl8 = new $hs.Thunk();
        hs_sat26Dkl8.evaluateOnce = function () {
            return hs_zdcmin1725uV0d.hscall(hs_zddEq326DjwJ, hs_zddOrd726DjwK, hs_zddOrd826DjwL, hs_zddOrd926DjwM, hs_zddOrd1026DjwN, hs_zddOrd1126DjwO, hs_zddOrd1226DjwP, hs_zddOrd1326DjwQ, hs_zddOrd1426DjwR, hs_zddOrd1526DjwS, hs_zddOrd1626DjwT, hs_zddOrd1726DjwU, hs_zddOrd1826DjwV);
        };
        var hs_sat26Dkl9 = new $hs.Thunk();
        hs_sat26Dkl9.evaluateOnce = function () {
            return hs_zdcmax1725uV0f.hscall(hs_zddEq326DjwJ, hs_zddOrd726DjwK, hs_zddOrd826DjwL, hs_zddOrd926DjwM, hs_zddOrd1026DjwN, hs_zddOrd1126DjwO, hs_zddOrd1226DjwP, hs_zddOrd1326DjwQ, hs_zddOrd1426DjwR, hs_zddOrd1526DjwS, hs_zddOrd1626DjwT, hs_zddOrd1726DjwU, hs_zddOrd1826DjwV);
        };
        var hs_sat26Dkla = new $hs.Func(2);
        hs_sat26Dkla.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze1625uUSI.hscall(hs_zddEq326DjwJ, hs_zddOrd726DjwK, hs_zddOrd826DjwL, hs_zddOrd926DjwM, hs_zddOrd1026DjwN, hs_zddOrd1126DjwO, hs_zddOrd1226DjwP, hs_zddOrd1326DjwQ, hs_zddOrd1426DjwR, hs_zddOrd1526DjwS, hs_zddOrd1626DjwT, hs_zddOrd1726DjwU, hs_zddOrd1826DjwV, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dklb = new $hs.Func(2);
        hs_sat26Dklb.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg1625uUUd.hscall(hs_zddEq326DjwJ, hs_zddOrd726DjwK, hs_zddOrd826DjwL, hs_zddOrd926DjwM, hs_zddOrd1026DjwN, hs_zddOrd1126DjwO, hs_zddOrd1226DjwP, hs_zddOrd1326DjwQ, hs_zddOrd1426DjwR, hs_zddOrd1526DjwS, hs_zddOrd1626DjwT, hs_zddOrd1726DjwU, hs_zddOrd1826DjwV, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dklc = new $hs.Func(2);
        hs_sat26Dklc.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze1625uUVI.hscall(hs_zddEq326DjwJ, hs_zddOrd726DjwK, hs_zddOrd826DjwL, hs_zddOrd926DjwM, hs_zddOrd1026DjwN, hs_zddOrd1126DjwO, hs_zddOrd1226DjwP, hs_zddOrd1326DjwQ, hs_zddOrd1426DjwR, hs_zddOrd1526DjwS, hs_zddOrd1626DjwT, hs_zddOrd1726DjwU, hs_zddOrd1826DjwV, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkld = new $hs.Func(2);
        hs_sat26Dkld.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl1625uUXd.hscall(hs_zddEq326DjwJ, hs_zddOrd726DjwK, hs_zddOrd826DjwL, hs_zddOrd926DjwM, hs_zddOrd1026DjwN, hs_zddOrd1126DjwO, hs_zddOrd1226DjwP, hs_zddOrd1326DjwQ, hs_zddOrd1426DjwR, hs_zddOrd1526DjwS, hs_zddOrd1626DjwT, hs_zddOrd1726DjwU, hs_zddOrd1826DjwV, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkle = new $hs.Func(2);
        hs_sat26Dkle.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare1625uUYI.hscall(hs_zddEq326DjwJ, hs_zddOrd726DjwK, hs_zddOrd826DjwL, hs_zddOrd926DjwM, hs_zddOrd1026DjwN, hs_zddOrd1126DjwO, hs_zddOrd1226DjwP, hs_zddOrd1326DjwQ, hs_zddOrd1426DjwR, hs_zddOrd1526DjwS, hs_zddOrd1626DjwT, hs_zddOrd1726DjwU, hs_zddOrd1826DjwV, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq326DjwJ, hs_sat26Dkle, hs_sat26Dkld, hs_sat26Dklc, hs_sat26Dklb, hs_sat26Dkla, hs_sat26Dkl9, hs_sat26Dkl8];
        return $res;
    };
    hs_zdcmin1725uV0d.evaluate = function (hs_zddEq326Djxh, hs_zddOrd726Djxi, hs_zddOrd826Djxj, hs_zddOrd926Djxk, hs_zddOrd1026Djxl, hs_zddOrd1126Djxm, hs_zddOrd1226Djxn, hs_zddOrd1326Djxo, hs_zddOrd1426Djxp, hs_zddOrd1526Djxq, hs_zddOrd1626Djxr, hs_zddOrd1726Djxs, hs_zddOrd1826Djxt) {
        var hs_zddOrd1926Djxu = new $hs.Thunk();
        hs_zddOrd1926Djxu.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326Djxh, hs_zddOrd726Djxi, hs_zddOrd826Djxj, hs_zddOrd926Djxk, hs_zddOrd1026Djxl, hs_zddOrd1126Djxm, hs_zddOrd1226Djxn, hs_zddOrd1326Djxo, hs_zddOrd1426Djxp, hs_zddOrd1526Djxq, hs_zddOrd1626Djxr, hs_zddOrd1726Djxs, hs_zddOrd1826Djxt);
        };
        var hs_sat26Dklg = new $hs.Func(2);
        hs_sat26Dklg.evaluate = function (hs_x26Djxx, hs_y26Djxy) {
            var hs_wild26Dklf = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1926Djxu, hs_x26Djxx, hs_y26Djxy);
            switch (hs_wild26Dklf.tag) {
            case 1:
                if (hs_y26Djxy.notEvaluated) {
                    return hs_y26Djxy.hscall();
                } else {
                    return hs_y26Djxy;
                }
            case 2:
                if (hs_x26Djxx.notEvaluated) {
                    return hs_x26Djxx.hscall();
                } else {
                    return hs_x26Djxx;
                }
            }
        };
        if (hs_sat26Dklg.notEvaluated) {
            return hs_sat26Dklg.hscall();
        } else {
            return hs_sat26Dklg;
        }
    };
    hs_zdcmax1725uV0f.evaluate = function (hs_zddEq326DjxP, hs_zddOrd726DjxQ, hs_zddOrd826DjxR, hs_zddOrd926DjxS, hs_zddOrd1026DjxT, hs_zddOrd1126DjxU, hs_zddOrd1226DjxV, hs_zddOrd1326DjxW, hs_zddOrd1426DjxX, hs_zddOrd1526DjxY, hs_zddOrd1626DjxZ, hs_zddOrd1726Djy0, hs_zddOrd1826Djy1) {
        var hs_zddOrd1926Djy2 = new $hs.Thunk();
        hs_zddOrd1926Djy2.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326DjxP, hs_zddOrd726DjxQ, hs_zddOrd826DjxR, hs_zddOrd926DjxS, hs_zddOrd1026DjxT, hs_zddOrd1126DjxU, hs_zddOrd1226DjxV, hs_zddOrd1326DjxW, hs_zddOrd1426DjxX, hs_zddOrd1526DjxY, hs_zddOrd1626DjxZ, hs_zddOrd1726Djy0, hs_zddOrd1826Djy1);
        };
        var hs_sat26Dkli = new $hs.Func(2);
        hs_sat26Dkli.evaluate = function (hs_x26Djy5, hs_y26Djy6) {
            var hs_wild26Dklh = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1926Djy2, hs_x26Djy5, hs_y26Djy6);
            switch (hs_wild26Dklh.tag) {
            case 1:
                if (hs_x26Djy5.notEvaluated) {
                    return hs_x26Djy5.hscall();
                } else {
                    return hs_x26Djy5;
                }
            case 2:
                if (hs_y26Djy6.notEvaluated) {
                    return hs_y26Djy6.hscall();
                } else {
                    return hs_y26Djy6;
                }
            }
        };
        if (hs_sat26Dkli.notEvaluated) {
            return hs_sat26Dkli.hscall();
        } else {
            return hs_sat26Dkli;
        }
    };
    hs_zdczlze1725uV1U.evaluate = function (hs_zddEq326DjzK, hs_zddOrd726DjyV, hs_zddOrd826DjyZ, hs_zddOrd926Djz3, hs_zddOrd1026Djz7, hs_zddOrd1126Djzb, hs_zddOrd1226Djzf, hs_zddOrd1326Djzj, hs_zddOrd1426Djzn, hs_zddOrd1526Djzr, hs_zddOrd1626Djzv, hs_zddOrd1726Djzz, hs_zddOrd1826DjzD, hs_zddOrd1926DjzH, hs_a926Djyr, hs_b26DjyG) {
        var hs_wild26Dkll = hs_a926Djyr;
        if (hs_a926Djyr.notEvaluated) {
            hs_wild26Dkll = hs_a926Djyr.hscall();
        }
        var hs_a1026DjyW = hs_wild26Dkll.data[0];
        var hs_a1126Djz0 = hs_wild26Dkll.data[1];
        var hs_a1226Djz4 = hs_wild26Dkll.data[2];
        var hs_a1326Djz8 = hs_wild26Dkll.data[3];
        var hs_a1426Djzc = hs_wild26Dkll.data[4];
        var hs_a1526Djzg = hs_wild26Dkll.data[5];
        var hs_a1626Djzk = hs_wild26Dkll.data[6];
        var hs_a1726Djzo = hs_wild26Dkll.data[7];
        var hs_a1826Djzs = hs_wild26Dkll.data[8];
        var hs_a1926Djzw = hs_wild26Dkll.data[9];
        var hs_a2026DjzA = hs_wild26Dkll.data[10];
        var hs_a2126DjzE = hs_wild26Dkll.data[11];
        var hs_a2226DjzI = hs_wild26Dkll.data[12];
        var hs_wild126Dklk = hs_b26DjyG;
        if (hs_b26DjyG.notEvaluated) {
            hs_wild126Dklk = hs_b26DjyG.hscall();
        }
        var hs_b126DjyX = hs_wild126Dklk.data[0];
        var hs_b226Djz1 = hs_wild126Dklk.data[1];
        var hs_b326Djz5 = hs_wild126Dklk.data[2];
        var hs_b426Djz9 = hs_wild126Dklk.data[3];
        var hs_b526Djzd = hs_wild126Dklk.data[4];
        var hs_b626Djzh = hs_wild126Dklk.data[5];
        var hs_b726Djzl = hs_wild126Dklk.data[6];
        var hs_b826Djzp = hs_wild126Dklk.data[7];
        var hs_b926Djzt = hs_wild126Dklk.data[8];
        var hs_b1026Djzx = hs_wild126Dklk.data[9];
        var hs_b1126DjzB = hs_wild126Dklk.data[10];
        var hs_b1226DjzF = hs_wild126Dklk.data[11];
        var hs_b1326DjzJ = hs_wild126Dklk.data[12];
        var hs_wild226Dklj = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DjyV, hs_a1026DjyW, hs_b126DjyX);
        switch (hs_wild226Dklj.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dklm = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DjyZ, hs_a1126Djz0, hs_b226Djz1);
            switch (hs_wild326Dklm.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkln = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926Djz3, hs_a1226Djz4, hs_b326Djz5);
                switch (hs_wild426Dkln.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dklo = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026Djz7, hs_a1326Djz8, hs_b426Djz9);
                    switch (hs_wild526Dklo.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dklp = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126Djzb, hs_a1426Djzc, hs_b526Djzd);
                        switch (hs_wild626Dklp.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dklq = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226Djzf, hs_a1526Djzg, hs_b626Djzh);
                            switch (hs_wild726Dklq.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dklr = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326Djzj, hs_a1626Djzk, hs_b726Djzl);
                                switch (hs_wild826Dklr.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dkls = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426Djzn, hs_a1726Djzo, hs_b826Djzp);
                                    switch (hs_wild926Dkls.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026Dklt = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526Djzr, hs_a1826Djzs, hs_b926Djzt);
                                        switch (hs_wild1026Dklt.tag) {
                                        case 1:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126Dklu = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626Djzv, hs_a1926Djzw, hs_b1026Djzx);
                                            switch (hs_wild1126Dklu.tag) {
                                            case 1:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226Dklv = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726Djzz, hs_a2026DjzA, hs_b1126DjzB);
                                                switch (hs_wild1226Dklv.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326Dklw = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826DjzD, hs_a2126DjzE, hs_b1226DjzF);
                                                    switch (hs_wild1326Dklw.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(2);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1926DjzH, hs_a2226DjzI, hs_b1326DjzJ);
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
    hs_zdczg1725uV3w.evaluate = function (hs_zddEq326DjBm, hs_zddOrd726DjAx, hs_zddOrd826DjAB, hs_zddOrd926DjAF, hs_zddOrd1026DjAJ, hs_zddOrd1126DjAN, hs_zddOrd1226DjAR, hs_zddOrd1326DjAV, hs_zddOrd1426DjAZ, hs_zddOrd1526DjB3, hs_zddOrd1626DjB7, hs_zddOrd1726DjBb, hs_zddOrd1826DjBf, hs_zddOrd1926DjBj, hs_a926DjA3, hs_b26DjAi) {
        var hs_wild26Dklz = hs_a926DjA3;
        if (hs_a926DjA3.notEvaluated) {
            hs_wild26Dklz = hs_a926DjA3.hscall();
        }
        var hs_a1026DjAy = hs_wild26Dklz.data[0];
        var hs_a1126DjAC = hs_wild26Dklz.data[1];
        var hs_a1226DjAG = hs_wild26Dklz.data[2];
        var hs_a1326DjAK = hs_wild26Dklz.data[3];
        var hs_a1426DjAO = hs_wild26Dklz.data[4];
        var hs_a1526DjAS = hs_wild26Dklz.data[5];
        var hs_a1626DjAW = hs_wild26Dklz.data[6];
        var hs_a1726DjB0 = hs_wild26Dklz.data[7];
        var hs_a1826DjB4 = hs_wild26Dklz.data[8];
        var hs_a1926DjB8 = hs_wild26Dklz.data[9];
        var hs_a2026DjBc = hs_wild26Dklz.data[10];
        var hs_a2126DjBg = hs_wild26Dklz.data[11];
        var hs_a2226DjBk = hs_wild26Dklz.data[12];
        var hs_wild126Dkly = hs_b26DjAi;
        if (hs_b26DjAi.notEvaluated) {
            hs_wild126Dkly = hs_b26DjAi.hscall();
        }
        var hs_b126DjAz = hs_wild126Dkly.data[0];
        var hs_b226DjAD = hs_wild126Dkly.data[1];
        var hs_b326DjAH = hs_wild126Dkly.data[2];
        var hs_b426DjAL = hs_wild126Dkly.data[3];
        var hs_b526DjAP = hs_wild126Dkly.data[4];
        var hs_b626DjAT = hs_wild126Dkly.data[5];
        var hs_b726DjAX = hs_wild126Dkly.data[6];
        var hs_b826DjB1 = hs_wild126Dkly.data[7];
        var hs_b926DjB5 = hs_wild126Dkly.data[8];
        var hs_b1026DjB9 = hs_wild126Dkly.data[9];
        var hs_b1126DjBd = hs_wild126Dkly.data[10];
        var hs_b1226DjBh = hs_wild126Dkly.data[11];
        var hs_b1326DjBl = hs_wild126Dkly.data[12];
        var hs_wild226Dklx = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DjAx, hs_a1026DjAy, hs_b126DjAz);
        switch (hs_wild226Dklx.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DklA = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DjAB, hs_a1126DjAC, hs_b226DjAD);
            switch (hs_wild326DklA.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DklB = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DjAF, hs_a1226DjAG, hs_b326DjAH);
                switch (hs_wild426DklB.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DklC = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DjAJ, hs_a1326DjAK, hs_b426DjAL);
                    switch (hs_wild526DklC.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626DklD = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DjAN, hs_a1426DjAO, hs_b526DjAP);
                        switch (hs_wild626DklD.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726DklE = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DjAR, hs_a1526DjAS, hs_b626DjAT);
                            switch (hs_wild726DklE.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826DklF = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326DjAV, hs_a1626DjAW, hs_b726DjAX);
                                switch (hs_wild826DklF.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926DklG = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426DjAZ, hs_a1726DjB0, hs_b826DjB1);
                                    switch (hs_wild926DklG.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026DklH = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526DjB3, hs_a1826DjB4, hs_b926DjB5);
                                        switch (hs_wild1026DklH.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126DklI = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626DjB7, hs_a1926DjB8, hs_b1026DjB9);
                                            switch (hs_wild1126DklI.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226DklJ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726DjBb, hs_a2026DjBc, hs_b1126DjBd);
                                                switch (hs_wild1226DklJ.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326DklK = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826DjBf, hs_a2126DjBg, hs_b1226DjBh);
                                                    switch (hs_wild1326DklK.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd1926DjBj, hs_a2226DjBk, hs_b1326DjBl);
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
    hs_zdczgze1725uV58.evaluate = function (hs_zddEq326DjCY, hs_zddOrd726DjC9, hs_zddOrd826DjCd, hs_zddOrd926DjCh, hs_zddOrd1026DjCl, hs_zddOrd1126DjCp, hs_zddOrd1226DjCt, hs_zddOrd1326DjCx, hs_zddOrd1426DjCB, hs_zddOrd1526DjCF, hs_zddOrd1626DjCJ, hs_zddOrd1726DjCN, hs_zddOrd1826DjCR, hs_zddOrd1926DjCV, hs_a926DjBF, hs_b26DjBU) {
        var hs_wild26DklN = hs_a926DjBF;
        if (hs_a926DjBF.notEvaluated) {
            hs_wild26DklN = hs_a926DjBF.hscall();
        }
        var hs_a1026DjCa = hs_wild26DklN.data[0];
        var hs_a1126DjCe = hs_wild26DklN.data[1];
        var hs_a1226DjCi = hs_wild26DklN.data[2];
        var hs_a1326DjCm = hs_wild26DklN.data[3];
        var hs_a1426DjCq = hs_wild26DklN.data[4];
        var hs_a1526DjCu = hs_wild26DklN.data[5];
        var hs_a1626DjCy = hs_wild26DklN.data[6];
        var hs_a1726DjCC = hs_wild26DklN.data[7];
        var hs_a1826DjCG = hs_wild26DklN.data[8];
        var hs_a1926DjCK = hs_wild26DklN.data[9];
        var hs_a2026DjCO = hs_wild26DklN.data[10];
        var hs_a2126DjCS = hs_wild26DklN.data[11];
        var hs_a2226DjCW = hs_wild26DklN.data[12];
        var hs_wild126DklM = hs_b26DjBU;
        if (hs_b26DjBU.notEvaluated) {
            hs_wild126DklM = hs_b26DjBU.hscall();
        }
        var hs_b126DjCb = hs_wild126DklM.data[0];
        var hs_b226DjCf = hs_wild126DklM.data[1];
        var hs_b326DjCj = hs_wild126DklM.data[2];
        var hs_b426DjCn = hs_wild126DklM.data[3];
        var hs_b526DjCr = hs_wild126DklM.data[4];
        var hs_b626DjCv = hs_wild126DklM.data[5];
        var hs_b726DjCz = hs_wild126DklM.data[6];
        var hs_b826DjCD = hs_wild126DklM.data[7];
        var hs_b926DjCH = hs_wild126DklM.data[8];
        var hs_b1026DjCL = hs_wild126DklM.data[9];
        var hs_b1126DjCP = hs_wild126DklM.data[10];
        var hs_b1226DjCT = hs_wild126DklM.data[11];
        var hs_b1326DjCX = hs_wild126DklM.data[12];
        var hs_wild226DklL = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DjC9, hs_a1026DjCa, hs_b126DjCb);
        switch (hs_wild226DklL.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DklO = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DjCd, hs_a1126DjCe, hs_b226DjCf);
            switch (hs_wild326DklO.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DklP = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DjCh, hs_a1226DjCi, hs_b326DjCj);
                switch (hs_wild426DklP.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DklQ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DjCl, hs_a1326DjCm, hs_b426DjCn);
                    switch (hs_wild526DklQ.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626DklR = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DjCp, hs_a1426DjCq, hs_b526DjCr);
                        switch (hs_wild626DklR.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726DklS = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DjCt, hs_a1526DjCu, hs_b626DjCv);
                            switch (hs_wild726DklS.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826DklT = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326DjCx, hs_a1626DjCy, hs_b726DjCz);
                                switch (hs_wild826DklT.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926DklU = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426DjCB, hs_a1726DjCC, hs_b826DjCD);
                                    switch (hs_wild926DklU.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026DklV = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526DjCF, hs_a1826DjCG, hs_b926DjCH);
                                        switch (hs_wild1026DklV.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126DklW = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626DjCJ, hs_a1926DjCK, hs_b1026DjCL);
                                            switch (hs_wild1126DklW.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226DklX = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726DjCN, hs_a2026DjCO, hs_b1126DjCP);
                                                switch (hs_wild1226DklX.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326DklY = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826DjCR, hs_a2126DjCS, hs_b1226DjCT);
                                                    switch (hs_wild1326DklY.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd1926DjCV, hs_a2226DjCW, hs_b1326DjCX);
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
    hs_zdczl1725uV6K.evaluate = function (hs_zddEq326DjEA, hs_zddOrd726DjDL, hs_zddOrd826DjDP, hs_zddOrd926DjDT, hs_zddOrd1026DjDX, hs_zddOrd1126DjE1, hs_zddOrd1226DjE5, hs_zddOrd1326DjE9, hs_zddOrd1426DjEd, hs_zddOrd1526DjEh, hs_zddOrd1626DjEl, hs_zddOrd1726DjEp, hs_zddOrd1826DjEt, hs_zddOrd1926DjEx, hs_a926DjDh, hs_b26DjDw) {
        var hs_wild26Dkm1 = hs_a926DjDh;
        if (hs_a926DjDh.notEvaluated) {
            hs_wild26Dkm1 = hs_a926DjDh.hscall();
        }
        var hs_a1026DjDM = hs_wild26Dkm1.data[0];
        var hs_a1126DjDQ = hs_wild26Dkm1.data[1];
        var hs_a1226DjDU = hs_wild26Dkm1.data[2];
        var hs_a1326DjDY = hs_wild26Dkm1.data[3];
        var hs_a1426DjE2 = hs_wild26Dkm1.data[4];
        var hs_a1526DjE6 = hs_wild26Dkm1.data[5];
        var hs_a1626DjEa = hs_wild26Dkm1.data[6];
        var hs_a1726DjEe = hs_wild26Dkm1.data[7];
        var hs_a1826DjEi = hs_wild26Dkm1.data[8];
        var hs_a1926DjEm = hs_wild26Dkm1.data[9];
        var hs_a2026DjEq = hs_wild26Dkm1.data[10];
        var hs_a2126DjEu = hs_wild26Dkm1.data[11];
        var hs_a2226DjEy = hs_wild26Dkm1.data[12];
        var hs_wild126Dkm0 = hs_b26DjDw;
        if (hs_b26DjDw.notEvaluated) {
            hs_wild126Dkm0 = hs_b26DjDw.hscall();
        }
        var hs_b126DjDN = hs_wild126Dkm0.data[0];
        var hs_b226DjDR = hs_wild126Dkm0.data[1];
        var hs_b326DjDV = hs_wild126Dkm0.data[2];
        var hs_b426DjDZ = hs_wild126Dkm0.data[3];
        var hs_b526DjE3 = hs_wild126Dkm0.data[4];
        var hs_b626DjE7 = hs_wild126Dkm0.data[5];
        var hs_b726DjEb = hs_wild126Dkm0.data[6];
        var hs_b826DjEf = hs_wild126Dkm0.data[7];
        var hs_b926DjEj = hs_wild126Dkm0.data[8];
        var hs_b1026DjEn = hs_wild126Dkm0.data[9];
        var hs_b1126DjEr = hs_wild126Dkm0.data[10];
        var hs_b1226DjEv = hs_wild126Dkm0.data[11];
        var hs_b1326DjEz = hs_wild126Dkm0.data[12];
        var hs_wild226DklZ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DjDL, hs_a1026DjDM, hs_b126DjDN);
        switch (hs_wild226DklZ.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkm2 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DjDP, hs_a1126DjDQ, hs_b226DjDR);
            switch (hs_wild326Dkm2.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkm3 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DjDT, hs_a1226DjDU, hs_b326DjDV);
                switch (hs_wild426Dkm3.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkm4 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DjDX, hs_a1326DjDY, hs_b426DjDZ);
                    switch (hs_wild526Dkm4.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkm5 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DjE1, hs_a1426DjE2, hs_b526DjE3);
                        switch (hs_wild626Dkm5.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkm6 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DjE5, hs_a1526DjE6, hs_b626DjE7);
                            switch (hs_wild726Dkm6.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkm7 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326DjE9, hs_a1626DjEa, hs_b726DjEb);
                                switch (hs_wild826Dkm7.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dkm8 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426DjEd, hs_a1726DjEe, hs_b826DjEf);
                                    switch (hs_wild926Dkm8.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026Dkm9 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526DjEh, hs_a1826DjEi, hs_b926DjEj);
                                        switch (hs_wild1026Dkm9.tag) {
                                        case 1:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126Dkma = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626DjEl, hs_a1926DjEm, hs_b1026DjEn);
                                            switch (hs_wild1126Dkma.tag) {
                                            case 1:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226Dkmb = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726DjEp, hs_a2026DjEq, hs_b1126DjEr);
                                                switch (hs_wild1226Dkmb.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326Dkmc = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826DjEt, hs_a2126DjEu, hs_b1226DjEv);
                                                    switch (hs_wild1326Dkmc.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(2);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1926DjEx, hs_a2226DjEy, hs_b1326DjEz);
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
    hs_zdccompare1725uV8m.evaluate = function (hs_zddEq326DjGc, hs_zddOrd726DjFn, hs_zddOrd826DjFr, hs_zddOrd926DjFv, hs_zddOrd1026DjFz, hs_zddOrd1126DjFD, hs_zddOrd1226DjFH, hs_zddOrd1326DjFL, hs_zddOrd1426DjFP, hs_zddOrd1526DjFT, hs_zddOrd1626DjFX, hs_zddOrd1726DjG1, hs_zddOrd1826DjG5, hs_zddOrd1926DjG9, hs_a926DjET, hs_b26DjF8) {
        var hs_wild26Dkmf = hs_a926DjET;
        if (hs_a926DjET.notEvaluated) {
            hs_wild26Dkmf = hs_a926DjET.hscall();
        }
        var hs_a1026DjFo = hs_wild26Dkmf.data[0];
        var hs_a1126DjFs = hs_wild26Dkmf.data[1];
        var hs_a1226DjFw = hs_wild26Dkmf.data[2];
        var hs_a1326DjFA = hs_wild26Dkmf.data[3];
        var hs_a1426DjFE = hs_wild26Dkmf.data[4];
        var hs_a1526DjFI = hs_wild26Dkmf.data[5];
        var hs_a1626DjFM = hs_wild26Dkmf.data[6];
        var hs_a1726DjFQ = hs_wild26Dkmf.data[7];
        var hs_a1826DjFU = hs_wild26Dkmf.data[8];
        var hs_a1926DjFY = hs_wild26Dkmf.data[9];
        var hs_a2026DjG2 = hs_wild26Dkmf.data[10];
        var hs_a2126DjG6 = hs_wild26Dkmf.data[11];
        var hs_a2226DjGa = hs_wild26Dkmf.data[12];
        var hs_wild126Dkme = hs_b26DjF8;
        if (hs_b26DjF8.notEvaluated) {
            hs_wild126Dkme = hs_b26DjF8.hscall();
        }
        var hs_b126DjFp = hs_wild126Dkme.data[0];
        var hs_b226DjFt = hs_wild126Dkme.data[1];
        var hs_b326DjFx = hs_wild126Dkme.data[2];
        var hs_b426DjFB = hs_wild126Dkme.data[3];
        var hs_b526DjFF = hs_wild126Dkme.data[4];
        var hs_b626DjFJ = hs_wild126Dkme.data[5];
        var hs_b726DjFN = hs_wild126Dkme.data[6];
        var hs_b826DjFR = hs_wild126Dkme.data[7];
        var hs_b926DjFV = hs_wild126Dkme.data[8];
        var hs_b1026DjFZ = hs_wild126Dkme.data[9];
        var hs_b1126DjG3 = hs_wild126Dkme.data[10];
        var hs_b1226DjG7 = hs_wild126Dkme.data[11];
        var hs_b1326DjGb = hs_wild126Dkme.data[12];
        var hs_wild226Dkmd = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DjFn, hs_a1026DjFo, hs_b126DjFp);
        switch (hs_wild226Dkmd.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkmg = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DjFr, hs_a1126DjFs, hs_b226DjFt);
            switch (hs_wild326Dkmg.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkmh = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DjFv, hs_a1226DjFw, hs_b326DjFx);
                switch (hs_wild426Dkmh.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkmi = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DjFz, hs_a1326DjFA, hs_b426DjFB);
                    switch (hs_wild526Dkmi.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkmj = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DjFD, hs_a1426DjFE, hs_b526DjFF);
                        switch (hs_wild626Dkmj.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkmk = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DjFH, hs_a1526DjFI, hs_b626DjFJ);
                            switch (hs_wild726Dkmk.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkml = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326DjFL, hs_a1626DjFM, hs_b726DjFN);
                                switch (hs_wild826Dkml.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dkmm = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426DjFP, hs_a1726DjFQ, hs_b826DjFR);
                                    switch (hs_wild926Dkmm.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026Dkmn = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526DjFT, hs_a1826DjFU, hs_b926DjFV);
                                        switch (hs_wild1026Dkmn.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126Dkmo = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626DjFX, hs_a1926DjFY, hs_b1026DjFZ);
                                            switch (hs_wild1126Dkmo.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226Dkmp = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726DjG1, hs_a2026DjG2, hs_b1126DjG3);
                                                switch (hs_wild1226Dkmp.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326Dkmq = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826DjG5, hs_a2126DjG6, hs_b1226DjG7);
                                                    switch (hs_wild1326Dkmq.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1926DjG9, hs_a2226DjGa, hs_b1326DjGb);
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
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326DjGv, hs_zddOrd726DjGw, hs_zddOrd826DjGx, hs_zddOrd926DjGy, hs_zddOrd1026DjGz, hs_zddOrd1126DjGA, hs_zddOrd1226DjGB, hs_zddOrd1326DjGC, hs_zddOrd1426DjGD, hs_zddOrd1526DjGE, hs_zddOrd1626DjGF, hs_zddOrd1726DjGG, hs_zddOrd1826DjGH, hs_zddOrd1926DjGI) {
        var hs_sat26Dkmr = new $hs.Thunk();
        hs_sat26Dkmr.evaluateOnce = function () {
            return hs_zdcmin1825uV9Y.hscall(hs_zddEq326DjGv, hs_zddOrd726DjGw, hs_zddOrd826DjGx, hs_zddOrd926DjGy, hs_zddOrd1026DjGz, hs_zddOrd1126DjGA, hs_zddOrd1226DjGB, hs_zddOrd1326DjGC, hs_zddOrd1426DjGD, hs_zddOrd1526DjGE, hs_zddOrd1626DjGF, hs_zddOrd1726DjGG, hs_zddOrd1826DjGH, hs_zddOrd1926DjGI);
        };
        var hs_sat26Dkms = new $hs.Thunk();
        hs_sat26Dkms.evaluateOnce = function () {
            return hs_zdcmax1825uVa0.hscall(hs_zddEq326DjGv, hs_zddOrd726DjGw, hs_zddOrd826DjGx, hs_zddOrd926DjGy, hs_zddOrd1026DjGz, hs_zddOrd1126DjGA, hs_zddOrd1226DjGB, hs_zddOrd1326DjGC, hs_zddOrd1426DjGD, hs_zddOrd1526DjGE, hs_zddOrd1626DjGF, hs_zddOrd1726DjGG, hs_zddOrd1826DjGH, hs_zddOrd1926DjGI);
        };
        var hs_sat26Dkmt = new $hs.Func(2);
        hs_sat26Dkmt.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze1725uV1U.hscall(hs_zddEq326DjGv, hs_zddOrd726DjGw, hs_zddOrd826DjGx, hs_zddOrd926DjGy, hs_zddOrd1026DjGz, hs_zddOrd1126DjGA, hs_zddOrd1226DjGB, hs_zddOrd1326DjGC, hs_zddOrd1426DjGD, hs_zddOrd1526DjGE, hs_zddOrd1626DjGF, hs_zddOrd1726DjGG, hs_zddOrd1826DjGH, hs_zddOrd1926DjGI, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkmu = new $hs.Func(2);
        hs_sat26Dkmu.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg1725uV3w.hscall(hs_zddEq326DjGv, hs_zddOrd726DjGw, hs_zddOrd826DjGx, hs_zddOrd926DjGy, hs_zddOrd1026DjGz, hs_zddOrd1126DjGA, hs_zddOrd1226DjGB, hs_zddOrd1326DjGC, hs_zddOrd1426DjGD, hs_zddOrd1526DjGE, hs_zddOrd1626DjGF, hs_zddOrd1726DjGG, hs_zddOrd1826DjGH, hs_zddOrd1926DjGI, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkmv = new $hs.Func(2);
        hs_sat26Dkmv.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze1725uV58.hscall(hs_zddEq326DjGv, hs_zddOrd726DjGw, hs_zddOrd826DjGx, hs_zddOrd926DjGy, hs_zddOrd1026DjGz, hs_zddOrd1126DjGA, hs_zddOrd1226DjGB, hs_zddOrd1326DjGC, hs_zddOrd1426DjGD, hs_zddOrd1526DjGE, hs_zddOrd1626DjGF, hs_zddOrd1726DjGG, hs_zddOrd1826DjGH, hs_zddOrd1926DjGI, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkmw = new $hs.Func(2);
        hs_sat26Dkmw.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl1725uV6K.hscall(hs_zddEq326DjGv, hs_zddOrd726DjGw, hs_zddOrd826DjGx, hs_zddOrd926DjGy, hs_zddOrd1026DjGz, hs_zddOrd1126DjGA, hs_zddOrd1226DjGB, hs_zddOrd1326DjGC, hs_zddOrd1426DjGD, hs_zddOrd1526DjGE, hs_zddOrd1626DjGF, hs_zddOrd1726DjGG, hs_zddOrd1826DjGH, hs_zddOrd1926DjGI, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkmx = new $hs.Func(2);
        hs_sat26Dkmx.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare1725uV8m.hscall(hs_zddEq326DjGv, hs_zddOrd726DjGw, hs_zddOrd826DjGx, hs_zddOrd926DjGy, hs_zddOrd1026DjGz, hs_zddOrd1126DjGA, hs_zddOrd1226DjGB, hs_zddOrd1326DjGC, hs_zddOrd1426DjGD, hs_zddOrd1526DjGE, hs_zddOrd1626DjGF, hs_zddOrd1726DjGG, hs_zddOrd1826DjGH, hs_zddOrd1926DjGI, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq326DjGv, hs_sat26Dkmx, hs_sat26Dkmw, hs_sat26Dkmv, hs_sat26Dkmu, hs_sat26Dkmt, hs_sat26Dkms, hs_sat26Dkmr];
        return $res;
    };
    hs_zdcmin1825uV9Y.evaluate = function (hs_zddEq326DjH5, hs_zddOrd726DjH6, hs_zddOrd826DjH7, hs_zddOrd926DjH8, hs_zddOrd1026DjH9, hs_zddOrd1126DjHa, hs_zddOrd1226DjHb, hs_zddOrd1326DjHc, hs_zddOrd1426DjHd, hs_zddOrd1526DjHe, hs_zddOrd1626DjHf, hs_zddOrd1726DjHg, hs_zddOrd1826DjHh, hs_zddOrd1926DjHi) {
        var hs_zddOrd2026DjHj = new $hs.Thunk();
        hs_zddOrd2026DjHj.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326DjH5, hs_zddOrd726DjH6, hs_zddOrd826DjH7, hs_zddOrd926DjH8, hs_zddOrd1026DjH9, hs_zddOrd1126DjHa, hs_zddOrd1226DjHb, hs_zddOrd1326DjHc, hs_zddOrd1426DjHd, hs_zddOrd1526DjHe, hs_zddOrd1626DjHf, hs_zddOrd1726DjHg, hs_zddOrd1826DjHh, hs_zddOrd1926DjHi);
        };
        var hs_sat26Dkmz = new $hs.Func(2);
        hs_sat26Dkmz.evaluate = function (hs_x26DjHm, hs_y26DjHn) {
            var hs_wild26Dkmy = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd2026DjHj, hs_x26DjHm, hs_y26DjHn);
            switch (hs_wild26Dkmy.tag) {
            case 1:
                if (hs_y26DjHn.notEvaluated) {
                    return hs_y26DjHn.hscall();
                } else {
                    return hs_y26DjHn;
                }
            case 2:
                if (hs_x26DjHm.notEvaluated) {
                    return hs_x26DjHm.hscall();
                } else {
                    return hs_x26DjHm;
                }
            }
        };
        if (hs_sat26Dkmz.notEvaluated) {
            return hs_sat26Dkmz.hscall();
        } else {
            return hs_sat26Dkmz;
        }
    };
    hs_zdcmax1825uVa0.evaluate = function (hs_zddEq326DjHF, hs_zddOrd726DjHG, hs_zddOrd826DjHH, hs_zddOrd926DjHI, hs_zddOrd1026DjHJ, hs_zddOrd1126DjHK, hs_zddOrd1226DjHL, hs_zddOrd1326DjHM, hs_zddOrd1426DjHN, hs_zddOrd1526DjHO, hs_zddOrd1626DjHP, hs_zddOrd1726DjHQ, hs_zddOrd1826DjHR, hs_zddOrd1926DjHS) {
        var hs_zddOrd2026DjHT = new $hs.Thunk();
        hs_zddOrd2026DjHT.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326DjHF, hs_zddOrd726DjHG, hs_zddOrd826DjHH, hs_zddOrd926DjHI, hs_zddOrd1026DjHJ, hs_zddOrd1126DjHK, hs_zddOrd1226DjHL, hs_zddOrd1326DjHM, hs_zddOrd1426DjHN, hs_zddOrd1526DjHO, hs_zddOrd1626DjHP, hs_zddOrd1726DjHQ, hs_zddOrd1826DjHR, hs_zddOrd1926DjHS);
        };
        var hs_sat26DkmB = new $hs.Func(2);
        hs_sat26DkmB.evaluate = function (hs_x26DjHW, hs_y26DjHX) {
            var hs_wild26DkmA = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd2026DjHT, hs_x26DjHW, hs_y26DjHX);
            switch (hs_wild26DkmA.tag) {
            case 1:
                if (hs_x26DjHW.notEvaluated) {
                    return hs_x26DjHW.hscall();
                } else {
                    return hs_x26DjHW;
                }
            case 2:
                if (hs_y26DjHX.notEvaluated) {
                    return hs_y26DjHX.hscall();
                } else {
                    return hs_y26DjHX;
                }
            }
        };
        if (hs_sat26DkmB.notEvaluated) {
            return hs_sat26DkmB.hscall();
        } else {
            return hs_sat26DkmB;
        }
    };
    hs_zdczlze1825uVbL.evaluate = function (hs_zddEq326DjJI, hs_zddOrd726DjIP, hs_zddOrd826DjIT, hs_zddOrd926DjIX, hs_zddOrd1026DjJ1, hs_zddOrd1126DjJ5, hs_zddOrd1226DjJ9, hs_zddOrd1326DjJd, hs_zddOrd1426DjJh, hs_zddOrd1526DjJl, hs_zddOrd1626DjJp, hs_zddOrd1726DjJt, hs_zddOrd1826DjJx, hs_zddOrd1926DjJB, hs_zddOrd2026DjJF, hs_a926DjIj, hs_b26DjIz) {
        var hs_wild26DkmE = hs_a926DjIj;
        if (hs_a926DjIj.notEvaluated) {
            hs_wild26DkmE = hs_a926DjIj.hscall();
        }
        var hs_a1026DjIQ = hs_wild26DkmE.data[0];
        var hs_a1126DjIU = hs_wild26DkmE.data[1];
        var hs_a1226DjIY = hs_wild26DkmE.data[2];
        var hs_a1326DjJ2 = hs_wild26DkmE.data[3];
        var hs_a1426DjJ6 = hs_wild26DkmE.data[4];
        var hs_a1526DjJa = hs_wild26DkmE.data[5];
        var hs_a1626DjJe = hs_wild26DkmE.data[6];
        var hs_a1726DjJi = hs_wild26DkmE.data[7];
        var hs_a1826DjJm = hs_wild26DkmE.data[8];
        var hs_a1926DjJq = hs_wild26DkmE.data[9];
        var hs_a2026DjJu = hs_wild26DkmE.data[10];
        var hs_a2126DjJy = hs_wild26DkmE.data[11];
        var hs_a2226DjJC = hs_wild26DkmE.data[12];
        var hs_a2326DjJG = hs_wild26DkmE.data[13];
        var hs_wild126DkmD = hs_b26DjIz;
        if (hs_b26DjIz.notEvaluated) {
            hs_wild126DkmD = hs_b26DjIz.hscall();
        }
        var hs_b126DjIR = hs_wild126DkmD.data[0];
        var hs_b226DjIV = hs_wild126DkmD.data[1];
        var hs_b326DjIZ = hs_wild126DkmD.data[2];
        var hs_b426DjJ3 = hs_wild126DkmD.data[3];
        var hs_b526DjJ7 = hs_wild126DkmD.data[4];
        var hs_b626DjJb = hs_wild126DkmD.data[5];
        var hs_b726DjJf = hs_wild126DkmD.data[6];
        var hs_b826DjJj = hs_wild126DkmD.data[7];
        var hs_b926DjJn = hs_wild126DkmD.data[8];
        var hs_b1026DjJr = hs_wild126DkmD.data[9];
        var hs_b1126DjJv = hs_wild126DkmD.data[10];
        var hs_b1226DjJz = hs_wild126DkmD.data[11];
        var hs_b1326DjJD = hs_wild126DkmD.data[12];
        var hs_b1426DjJH = hs_wild126DkmD.data[13];
        var hs_wild226DkmC = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DjIP, hs_a1026DjIQ, hs_b126DjIR);
        switch (hs_wild226DkmC.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkmF = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DjIT, hs_a1126DjIU, hs_b226DjIV);
            switch (hs_wild326DkmF.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DkmG = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DjIX, hs_a1226DjIY, hs_b326DjIZ);
                switch (hs_wild426DkmG.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DkmH = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DjJ1, hs_a1326DjJ2, hs_b426DjJ3);
                    switch (hs_wild526DkmH.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626DkmI = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DjJ5, hs_a1426DjJ6, hs_b526DjJ7);
                        switch (hs_wild626DkmI.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726DkmJ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DjJ9, hs_a1526DjJa, hs_b626DjJb);
                            switch (hs_wild726DkmJ.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826DkmK = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326DjJd, hs_a1626DjJe, hs_b726DjJf);
                                switch (hs_wild826DkmK.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926DkmL = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426DjJh, hs_a1726DjJi, hs_b826DjJj);
                                    switch (hs_wild926DkmL.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026DkmM = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526DjJl, hs_a1826DjJm, hs_b926DjJn);
                                        switch (hs_wild1026DkmM.tag) {
                                        case 1:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126DkmN = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626DjJp, hs_a1926DjJq, hs_b1026DjJr);
                                            switch (hs_wild1126DkmN.tag) {
                                            case 1:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226DkmO = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726DjJt, hs_a2026DjJu, hs_b1126DjJv);
                                                switch (hs_wild1226DkmO.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326DkmP = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826DjJx, hs_a2126DjJy, hs_b1226DjJz);
                                                    switch (hs_wild1326DkmP.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(2);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        var hs_wild1426DkmQ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1926DjJB, hs_a2226DjJC, hs_b1326DjJD);
                                                        switch (hs_wild1426DkmQ.tag) {
                                                        case 1:
                                                            var $res = new $hs.Data(2);
                                                            $res.data = [];
                                                            return $res;
                                                        case 2:
                                                            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd2026DjJF, hs_a2326DjJG, hs_b1426DjJH);
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
    hs_zdczg1825uVdu.evaluate = function (hs_zddEq326DjLr, hs_zddOrd726DjKy, hs_zddOrd826DjKC, hs_zddOrd926DjKG, hs_zddOrd1026DjKK, hs_zddOrd1126DjKO, hs_zddOrd1226DjKS, hs_zddOrd1326DjKW, hs_zddOrd1426DjL0, hs_zddOrd1526DjL4, hs_zddOrd1626DjL8, hs_zddOrd1726DjLc, hs_zddOrd1826DjLg, hs_zddOrd1926DjLk, hs_zddOrd2026DjLo, hs_a926DjK2, hs_b26DjKi) {
        var hs_wild26DkmT = hs_a926DjK2;
        if (hs_a926DjK2.notEvaluated) {
            hs_wild26DkmT = hs_a926DjK2.hscall();
        }
        var hs_a1026DjKz = hs_wild26DkmT.data[0];
        var hs_a1126DjKD = hs_wild26DkmT.data[1];
        var hs_a1226DjKH = hs_wild26DkmT.data[2];
        var hs_a1326DjKL = hs_wild26DkmT.data[3];
        var hs_a1426DjKP = hs_wild26DkmT.data[4];
        var hs_a1526DjKT = hs_wild26DkmT.data[5];
        var hs_a1626DjKX = hs_wild26DkmT.data[6];
        var hs_a1726DjL1 = hs_wild26DkmT.data[7];
        var hs_a1826DjL5 = hs_wild26DkmT.data[8];
        var hs_a1926DjL9 = hs_wild26DkmT.data[9];
        var hs_a2026DjLd = hs_wild26DkmT.data[10];
        var hs_a2126DjLh = hs_wild26DkmT.data[11];
        var hs_a2226DjLl = hs_wild26DkmT.data[12];
        var hs_a2326DjLp = hs_wild26DkmT.data[13];
        var hs_wild126DkmS = hs_b26DjKi;
        if (hs_b26DjKi.notEvaluated) {
            hs_wild126DkmS = hs_b26DjKi.hscall();
        }
        var hs_b126DjKA = hs_wild126DkmS.data[0];
        var hs_b226DjKE = hs_wild126DkmS.data[1];
        var hs_b326DjKI = hs_wild126DkmS.data[2];
        var hs_b426DjKM = hs_wild126DkmS.data[3];
        var hs_b526DjKQ = hs_wild126DkmS.data[4];
        var hs_b626DjKU = hs_wild126DkmS.data[5];
        var hs_b726DjKY = hs_wild126DkmS.data[6];
        var hs_b826DjL2 = hs_wild126DkmS.data[7];
        var hs_b926DjL6 = hs_wild126DkmS.data[8];
        var hs_b1026DjLa = hs_wild126DkmS.data[9];
        var hs_b1126DjLe = hs_wild126DkmS.data[10];
        var hs_b1226DjLi = hs_wild126DkmS.data[11];
        var hs_b1326DjLm = hs_wild126DkmS.data[12];
        var hs_b1426DjLq = hs_wild126DkmS.data[13];
        var hs_wild226DkmR = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DjKy, hs_a1026DjKz, hs_b126DjKA);
        switch (hs_wild226DkmR.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkmU = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DjKC, hs_a1126DjKD, hs_b226DjKE);
            switch (hs_wild326DkmU.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DkmV = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DjKG, hs_a1226DjKH, hs_b326DjKI);
                switch (hs_wild426DkmV.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DkmW = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DjKK, hs_a1326DjKL, hs_b426DjKM);
                    switch (hs_wild526DkmW.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626DkmX = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DjKO, hs_a1426DjKP, hs_b526DjKQ);
                        switch (hs_wild626DkmX.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726DkmY = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DjKS, hs_a1526DjKT, hs_b626DjKU);
                            switch (hs_wild726DkmY.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826DkmZ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326DjKW, hs_a1626DjKX, hs_b726DjKY);
                                switch (hs_wild826DkmZ.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dkn0 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426DjL0, hs_a1726DjL1, hs_b826DjL2);
                                    switch (hs_wild926Dkn0.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026Dkn1 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526DjL4, hs_a1826DjL5, hs_b926DjL6);
                                        switch (hs_wild1026Dkn1.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126Dkn2 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626DjL8, hs_a1926DjL9, hs_b1026DjLa);
                                            switch (hs_wild1126Dkn2.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226Dkn3 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726DjLc, hs_a2026DjLd, hs_b1126DjLe);
                                                switch (hs_wild1226Dkn3.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326Dkn4 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826DjLg, hs_a2126DjLh, hs_b1226DjLi);
                                                    switch (hs_wild1326Dkn4.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        var hs_wild1426Dkn5 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1926DjLk, hs_a2226DjLl, hs_b1326DjLm);
                                                        switch (hs_wild1426Dkn5.tag) {
                                                        case 1:
                                                            var $res = new $hs.Data(1);
                                                            $res.data = [];
                                                            return $res;
                                                        case 2:
                                                            return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd2026DjLo, hs_a2326DjLp, hs_b1426DjLq);
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
    hs_zdczgze1825uVfd.evaluate = function (hs_zddEq326DjNa, hs_zddOrd726DjMh, hs_zddOrd826DjMl, hs_zddOrd926DjMp, hs_zddOrd1026DjMt, hs_zddOrd1126DjMx, hs_zddOrd1226DjMB, hs_zddOrd1326DjMF, hs_zddOrd1426DjMJ, hs_zddOrd1526DjMN, hs_zddOrd1626DjMR, hs_zddOrd1726DjMV, hs_zddOrd1826DjMZ, hs_zddOrd1926DjN3, hs_zddOrd2026DjN7, hs_a926DjLL, hs_b26DjM1) {
        var hs_wild26Dkn8 = hs_a926DjLL;
        if (hs_a926DjLL.notEvaluated) {
            hs_wild26Dkn8 = hs_a926DjLL.hscall();
        }
        var hs_a1026DjMi = hs_wild26Dkn8.data[0];
        var hs_a1126DjMm = hs_wild26Dkn8.data[1];
        var hs_a1226DjMq = hs_wild26Dkn8.data[2];
        var hs_a1326DjMu = hs_wild26Dkn8.data[3];
        var hs_a1426DjMy = hs_wild26Dkn8.data[4];
        var hs_a1526DjMC = hs_wild26Dkn8.data[5];
        var hs_a1626DjMG = hs_wild26Dkn8.data[6];
        var hs_a1726DjMK = hs_wild26Dkn8.data[7];
        var hs_a1826DjMO = hs_wild26Dkn8.data[8];
        var hs_a1926DjMS = hs_wild26Dkn8.data[9];
        var hs_a2026DjMW = hs_wild26Dkn8.data[10];
        var hs_a2126DjN0 = hs_wild26Dkn8.data[11];
        var hs_a2226DjN4 = hs_wild26Dkn8.data[12];
        var hs_a2326DjN8 = hs_wild26Dkn8.data[13];
        var hs_wild126Dkn7 = hs_b26DjM1;
        if (hs_b26DjM1.notEvaluated) {
            hs_wild126Dkn7 = hs_b26DjM1.hscall();
        }
        var hs_b126DjMj = hs_wild126Dkn7.data[0];
        var hs_b226DjMn = hs_wild126Dkn7.data[1];
        var hs_b326DjMr = hs_wild126Dkn7.data[2];
        var hs_b426DjMv = hs_wild126Dkn7.data[3];
        var hs_b526DjMz = hs_wild126Dkn7.data[4];
        var hs_b626DjMD = hs_wild126Dkn7.data[5];
        var hs_b726DjMH = hs_wild126Dkn7.data[6];
        var hs_b826DjML = hs_wild126Dkn7.data[7];
        var hs_b926DjMP = hs_wild126Dkn7.data[8];
        var hs_b1026DjMT = hs_wild126Dkn7.data[9];
        var hs_b1126DjMX = hs_wild126Dkn7.data[10];
        var hs_b1226DjN1 = hs_wild126Dkn7.data[11];
        var hs_b1326DjN5 = hs_wild126Dkn7.data[12];
        var hs_b1426DjN9 = hs_wild126Dkn7.data[13];
        var hs_wild226Dkn6 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DjMh, hs_a1026DjMi, hs_b126DjMj);
        switch (hs_wild226Dkn6.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkn9 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DjMl, hs_a1126DjMm, hs_b226DjMn);
            switch (hs_wild326Dkn9.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkna = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DjMp, hs_a1226DjMq, hs_b326DjMr);
                switch (hs_wild426Dkna.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dknb = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DjMt, hs_a1326DjMu, hs_b426DjMv);
                    switch (hs_wild526Dknb.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dknc = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DjMx, hs_a1426DjMy, hs_b526DjMz);
                        switch (hs_wild626Dknc.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dknd = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DjMB, hs_a1526DjMC, hs_b626DjMD);
                            switch (hs_wild726Dknd.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkne = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326DjMF, hs_a1626DjMG, hs_b726DjMH);
                                switch (hs_wild826Dkne.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dknf = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426DjMJ, hs_a1726DjMK, hs_b826DjML);
                                    switch (hs_wild926Dknf.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026Dkng = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526DjMN, hs_a1826DjMO, hs_b926DjMP);
                                        switch (hs_wild1026Dkng.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126Dknh = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626DjMR, hs_a1926DjMS, hs_b1026DjMT);
                                            switch (hs_wild1126Dknh.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226Dkni = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726DjMV, hs_a2026DjMW, hs_b1126DjMX);
                                                switch (hs_wild1226Dkni.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326Dknj = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826DjMZ, hs_a2126DjN0, hs_b1226DjN1);
                                                    switch (hs_wild1326Dknj.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        var hs_wild1426Dknk = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1926DjN3, hs_a2226DjN4, hs_b1326DjN5);
                                                        switch (hs_wild1426Dknk.tag) {
                                                        case 1:
                                                            var $res = new $hs.Data(1);
                                                            $res.data = [];
                                                            return $res;
                                                        case 2:
                                                            return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd2026DjN7, hs_a2326DjN8, hs_b1426DjN9);
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
    hs_zdczl1825uVgW.evaluate = function (hs_zddEq326DjOT, hs_zddOrd726DjO0, hs_zddOrd826DjO4, hs_zddOrd926DjO8, hs_zddOrd1026DjOc, hs_zddOrd1126DjOg, hs_zddOrd1226DjOk, hs_zddOrd1326DjOo, hs_zddOrd1426DjOs, hs_zddOrd1526DjOw, hs_zddOrd1626DjOA, hs_zddOrd1726DjOE, hs_zddOrd1826DjOI, hs_zddOrd1926DjOM, hs_zddOrd2026DjOQ, hs_a926DjNu, hs_b26DjNK) {
        var hs_wild26Dknn = hs_a926DjNu;
        if (hs_a926DjNu.notEvaluated) {
            hs_wild26Dknn = hs_a926DjNu.hscall();
        }
        var hs_a1026DjO1 = hs_wild26Dknn.data[0];
        var hs_a1126DjO5 = hs_wild26Dknn.data[1];
        var hs_a1226DjO9 = hs_wild26Dknn.data[2];
        var hs_a1326DjOd = hs_wild26Dknn.data[3];
        var hs_a1426DjOh = hs_wild26Dknn.data[4];
        var hs_a1526DjOl = hs_wild26Dknn.data[5];
        var hs_a1626DjOp = hs_wild26Dknn.data[6];
        var hs_a1726DjOt = hs_wild26Dknn.data[7];
        var hs_a1826DjOx = hs_wild26Dknn.data[8];
        var hs_a1926DjOB = hs_wild26Dknn.data[9];
        var hs_a2026DjOF = hs_wild26Dknn.data[10];
        var hs_a2126DjOJ = hs_wild26Dknn.data[11];
        var hs_a2226DjON = hs_wild26Dknn.data[12];
        var hs_a2326DjOR = hs_wild26Dknn.data[13];
        var hs_wild126Dknm = hs_b26DjNK;
        if (hs_b26DjNK.notEvaluated) {
            hs_wild126Dknm = hs_b26DjNK.hscall();
        }
        var hs_b126DjO2 = hs_wild126Dknm.data[0];
        var hs_b226DjO6 = hs_wild126Dknm.data[1];
        var hs_b326DjOa = hs_wild126Dknm.data[2];
        var hs_b426DjOe = hs_wild126Dknm.data[3];
        var hs_b526DjOi = hs_wild126Dknm.data[4];
        var hs_b626DjOm = hs_wild126Dknm.data[5];
        var hs_b726DjOq = hs_wild126Dknm.data[6];
        var hs_b826DjOu = hs_wild126Dknm.data[7];
        var hs_b926DjOy = hs_wild126Dknm.data[8];
        var hs_b1026DjOC = hs_wild126Dknm.data[9];
        var hs_b1126DjOG = hs_wild126Dknm.data[10];
        var hs_b1226DjOK = hs_wild126Dknm.data[11];
        var hs_b1326DjOO = hs_wild126Dknm.data[12];
        var hs_b1426DjOS = hs_wild126Dknm.data[13];
        var hs_wild226Dknl = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DjO0, hs_a1026DjO1, hs_b126DjO2);
        switch (hs_wild226Dknl.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkno = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DjO4, hs_a1126DjO5, hs_b226DjO6);
            switch (hs_wild326Dkno.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dknp = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DjO8, hs_a1226DjO9, hs_b326DjOa);
                switch (hs_wild426Dknp.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dknq = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DjOc, hs_a1326DjOd, hs_b426DjOe);
                    switch (hs_wild526Dknq.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dknr = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DjOg, hs_a1426DjOh, hs_b526DjOi);
                        switch (hs_wild626Dknr.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkns = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DjOk, hs_a1526DjOl, hs_b626DjOm);
                            switch (hs_wild726Dkns.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dknt = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326DjOo, hs_a1626DjOp, hs_b726DjOq);
                                switch (hs_wild826Dknt.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dknu = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426DjOs, hs_a1726DjOt, hs_b826DjOu);
                                    switch (hs_wild926Dknu.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026Dknv = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526DjOw, hs_a1826DjOx, hs_b926DjOy);
                                        switch (hs_wild1026Dknv.tag) {
                                        case 1:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126Dknw = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626DjOA, hs_a1926DjOB, hs_b1026DjOC);
                                            switch (hs_wild1126Dknw.tag) {
                                            case 1:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226Dknx = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726DjOE, hs_a2026DjOF, hs_b1126DjOG);
                                                switch (hs_wild1226Dknx.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326Dkny = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826DjOI, hs_a2126DjOJ, hs_b1226DjOK);
                                                    switch (hs_wild1326Dkny.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(2);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        var hs_wild1426Dknz = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1926DjOM, hs_a2226DjON, hs_b1326DjOO);
                                                        switch (hs_wild1426Dknz.tag) {
                                                        case 1:
                                                            var $res = new $hs.Data(2);
                                                            $res.data = [];
                                                            return $res;
                                                        case 2:
                                                            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd2026DjOQ, hs_a2326DjOR, hs_b1426DjOS);
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
    hs_zdccompare1825uViF.evaluate = function (hs_zddEq326DjQC, hs_zddOrd726DjPJ, hs_zddOrd826DjPN, hs_zddOrd926DjPR, hs_zddOrd1026DjPV, hs_zddOrd1126DjPZ, hs_zddOrd1226DjQ3, hs_zddOrd1326DjQ7, hs_zddOrd1426DjQb, hs_zddOrd1526DjQf, hs_zddOrd1626DjQj, hs_zddOrd1726DjQn, hs_zddOrd1826DjQr, hs_zddOrd1926DjQv, hs_zddOrd2026DjQz, hs_a926DjPd, hs_b26DjPt) {
        var hs_wild26DknC = hs_a926DjPd;
        if (hs_a926DjPd.notEvaluated) {
            hs_wild26DknC = hs_a926DjPd.hscall();
        }
        var hs_a1026DjPK = hs_wild26DknC.data[0];
        var hs_a1126DjPO = hs_wild26DknC.data[1];
        var hs_a1226DjPS = hs_wild26DknC.data[2];
        var hs_a1326DjPW = hs_wild26DknC.data[3];
        var hs_a1426DjQ0 = hs_wild26DknC.data[4];
        var hs_a1526DjQ4 = hs_wild26DknC.data[5];
        var hs_a1626DjQ8 = hs_wild26DknC.data[6];
        var hs_a1726DjQc = hs_wild26DknC.data[7];
        var hs_a1826DjQg = hs_wild26DknC.data[8];
        var hs_a1926DjQk = hs_wild26DknC.data[9];
        var hs_a2026DjQo = hs_wild26DknC.data[10];
        var hs_a2126DjQs = hs_wild26DknC.data[11];
        var hs_a2226DjQw = hs_wild26DknC.data[12];
        var hs_a2326DjQA = hs_wild26DknC.data[13];
        var hs_wild126DknB = hs_b26DjPt;
        if (hs_b26DjPt.notEvaluated) {
            hs_wild126DknB = hs_b26DjPt.hscall();
        }
        var hs_b126DjPL = hs_wild126DknB.data[0];
        var hs_b226DjPP = hs_wild126DknB.data[1];
        var hs_b326DjPT = hs_wild126DknB.data[2];
        var hs_b426DjPX = hs_wild126DknB.data[3];
        var hs_b526DjQ1 = hs_wild126DknB.data[4];
        var hs_b626DjQ5 = hs_wild126DknB.data[5];
        var hs_b726DjQ9 = hs_wild126DknB.data[6];
        var hs_b826DjQd = hs_wild126DknB.data[7];
        var hs_b926DjQh = hs_wild126DknB.data[8];
        var hs_b1026DjQl = hs_wild126DknB.data[9];
        var hs_b1126DjQp = hs_wild126DknB.data[10];
        var hs_b1226DjQt = hs_wild126DknB.data[11];
        var hs_b1326DjQx = hs_wild126DknB.data[12];
        var hs_b1426DjQB = hs_wild126DknB.data[13];
        var hs_wild226DknA = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DjPJ, hs_a1026DjPK, hs_b126DjPL);
        switch (hs_wild226DknA.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DknD = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DjPN, hs_a1126DjPO, hs_b226DjPP);
            switch (hs_wild326DknD.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DknE = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DjPR, hs_a1226DjPS, hs_b326DjPT);
                switch (hs_wild426DknE.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DknF = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DjPV, hs_a1326DjPW, hs_b426DjPX);
                    switch (hs_wild526DknF.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626DknG = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DjPZ, hs_a1426DjQ0, hs_b526DjQ1);
                        switch (hs_wild626DknG.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726DknH = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DjQ3, hs_a1526DjQ4, hs_b626DjQ5);
                            switch (hs_wild726DknH.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826DknI = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326DjQ7, hs_a1626DjQ8, hs_b726DjQ9);
                                switch (hs_wild826DknI.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926DknJ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426DjQb, hs_a1726DjQc, hs_b826DjQd);
                                    switch (hs_wild926DknJ.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026DknK = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526DjQf, hs_a1826DjQg, hs_b926DjQh);
                                        switch (hs_wild1026DknK.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126DknL = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626DjQj, hs_a1926DjQk, hs_b1026DjQl);
                                            switch (hs_wild1126DknL.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226DknM = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726DjQn, hs_a2026DjQo, hs_b1126DjQp);
                                                switch (hs_wild1226DknM.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326DknN = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826DjQr, hs_a2126DjQs, hs_b1226DjQt);
                                                    switch (hs_wild1326DknN.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        var hs_wild1426DknO = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1926DjQv, hs_a2226DjQw, hs_b1326DjQx);
                                                        switch (hs_wild1426DknO.tag) {
                                                        case 1:
                                                            var $res = new $hs.Data(1);
                                                            $res.data = [];
                                                            return $res;
                                                        case 2:
                                                            return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd2026DjQz, hs_a2326DjQA, hs_b1426DjQB);
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
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326DjQW, hs_zddOrd726DjQX, hs_zddOrd826DjQY, hs_zddOrd926DjQZ, hs_zddOrd1026DjR0, hs_zddOrd1126DjR1, hs_zddOrd1226DjR2, hs_zddOrd1326DjR3, hs_zddOrd1426DjR4, hs_zddOrd1526DjR5, hs_zddOrd1626DjR6, hs_zddOrd1726DjR7, hs_zddOrd1826DjR8, hs_zddOrd1926DjR9, hs_zddOrd2026DjRa) {
        var hs_sat26DknP = new $hs.Thunk();
        hs_sat26DknP.evaluateOnce = function () {
            return hs_zdcmin1925uVko.hscall(hs_zddEq326DjQW, hs_zddOrd726DjQX, hs_zddOrd826DjQY, hs_zddOrd926DjQZ, hs_zddOrd1026DjR0, hs_zddOrd1126DjR1, hs_zddOrd1226DjR2, hs_zddOrd1326DjR3, hs_zddOrd1426DjR4, hs_zddOrd1526DjR5, hs_zddOrd1626DjR6, hs_zddOrd1726DjR7, hs_zddOrd1826DjR8, hs_zddOrd1926DjR9, hs_zddOrd2026DjRa);
        };
        var hs_sat26DknQ = new $hs.Thunk();
        hs_sat26DknQ.evaluateOnce = function () {
            return hs_zdcmax1925uVkq.hscall(hs_zddEq326DjQW, hs_zddOrd726DjQX, hs_zddOrd826DjQY, hs_zddOrd926DjQZ, hs_zddOrd1026DjR0, hs_zddOrd1126DjR1, hs_zddOrd1226DjR2, hs_zddOrd1326DjR3, hs_zddOrd1426DjR4, hs_zddOrd1526DjR5, hs_zddOrd1626DjR6, hs_zddOrd1726DjR7, hs_zddOrd1826DjR8, hs_zddOrd1926DjR9, hs_zddOrd2026DjRa);
        };
        var hs_sat26DknR = new $hs.Func(2);
        hs_sat26DknR.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze1825uVbL.hscall(hs_zddEq326DjQW, hs_zddOrd726DjQX, hs_zddOrd826DjQY, hs_zddOrd926DjQZ, hs_zddOrd1026DjR0, hs_zddOrd1126DjR1, hs_zddOrd1226DjR2, hs_zddOrd1326DjR3, hs_zddOrd1426DjR4, hs_zddOrd1526DjR5, hs_zddOrd1626DjR6, hs_zddOrd1726DjR7, hs_zddOrd1826DjR8, hs_zddOrd1926DjR9, hs_zddOrd2026DjRa, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DknS = new $hs.Func(2);
        hs_sat26DknS.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg1825uVdu.hscall(hs_zddEq326DjQW, hs_zddOrd726DjQX, hs_zddOrd826DjQY, hs_zddOrd926DjQZ, hs_zddOrd1026DjR0, hs_zddOrd1126DjR1, hs_zddOrd1226DjR2, hs_zddOrd1326DjR3, hs_zddOrd1426DjR4, hs_zddOrd1526DjR5, hs_zddOrd1626DjR6, hs_zddOrd1726DjR7, hs_zddOrd1826DjR8, hs_zddOrd1926DjR9, hs_zddOrd2026DjRa, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DknT = new $hs.Func(2);
        hs_sat26DknT.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze1825uVfd.hscall(hs_zddEq326DjQW, hs_zddOrd726DjQX, hs_zddOrd826DjQY, hs_zddOrd926DjQZ, hs_zddOrd1026DjR0, hs_zddOrd1126DjR1, hs_zddOrd1226DjR2, hs_zddOrd1326DjR3, hs_zddOrd1426DjR4, hs_zddOrd1526DjR5, hs_zddOrd1626DjR6, hs_zddOrd1726DjR7, hs_zddOrd1826DjR8, hs_zddOrd1926DjR9, hs_zddOrd2026DjRa, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DknU = new $hs.Func(2);
        hs_sat26DknU.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl1825uVgW.hscall(hs_zddEq326DjQW, hs_zddOrd726DjQX, hs_zddOrd826DjQY, hs_zddOrd926DjQZ, hs_zddOrd1026DjR0, hs_zddOrd1126DjR1, hs_zddOrd1226DjR2, hs_zddOrd1326DjR3, hs_zddOrd1426DjR4, hs_zddOrd1526DjR5, hs_zddOrd1626DjR6, hs_zddOrd1726DjR7, hs_zddOrd1826DjR8, hs_zddOrd1926DjR9, hs_zddOrd2026DjRa, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DknV = new $hs.Func(2);
        hs_sat26DknV.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare1825uViF.hscall(hs_zddEq326DjQW, hs_zddOrd726DjQX, hs_zddOrd826DjQY, hs_zddOrd926DjQZ, hs_zddOrd1026DjR0, hs_zddOrd1126DjR1, hs_zddOrd1226DjR2, hs_zddOrd1326DjR3, hs_zddOrd1426DjR4, hs_zddOrd1526DjR5, hs_zddOrd1626DjR6, hs_zddOrd1726DjR7, hs_zddOrd1826DjR8, hs_zddOrd1926DjR9, hs_zddOrd2026DjRa, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq326DjQW, hs_sat26DknV, hs_sat26DknU, hs_sat26DknT, hs_sat26DknS, hs_sat26DknR, hs_sat26DknQ, hs_sat26DknP];
        return $res;
    };
    hs_zdcmin1925uVko.evaluate = function (hs_zddEq326DjRy, hs_zddOrd726DjRz, hs_zddOrd826DjRA, hs_zddOrd926DjRB, hs_zddOrd1026DjRC, hs_zddOrd1126DjRD, hs_zddOrd1226DjRE, hs_zddOrd1326DjRF, hs_zddOrd1426DjRG, hs_zddOrd1526DjRH, hs_zddOrd1626DjRI, hs_zddOrd1726DjRJ, hs_zddOrd1826DjRK, hs_zddOrd1926DjRL, hs_zddOrd2026DjRM) {
        var hs_zddOrd2126DjRN = new $hs.Thunk();
        hs_zddOrd2126DjRN.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326DjRy, hs_zddOrd726DjRz, hs_zddOrd826DjRA, hs_zddOrd926DjRB, hs_zddOrd1026DjRC, hs_zddOrd1126DjRD, hs_zddOrd1226DjRE, hs_zddOrd1326DjRF, hs_zddOrd1426DjRG, hs_zddOrd1526DjRH, hs_zddOrd1626DjRI, hs_zddOrd1726DjRJ, hs_zddOrd1826DjRK, hs_zddOrd1926DjRL, hs_zddOrd2026DjRM);
        };
        var hs_sat26DknX = new $hs.Func(2);
        hs_sat26DknX.evaluate = function (hs_x26DjRQ, hs_y26DjRR) {
            var hs_wild26DknW = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd2126DjRN, hs_x26DjRQ, hs_y26DjRR);
            switch (hs_wild26DknW.tag) {
            case 1:
                if (hs_y26DjRR.notEvaluated) {
                    return hs_y26DjRR.hscall();
                } else {
                    return hs_y26DjRR;
                }
            case 2:
                if (hs_x26DjRQ.notEvaluated) {
                    return hs_x26DjRQ.hscall();
                } else {
                    return hs_x26DjRQ;
                }
            }
        };
        if (hs_sat26DknX.notEvaluated) {
            return hs_sat26DknX.hscall();
        } else {
            return hs_sat26DknX;
        }
    };
    hs_zdcmax1925uVkq.evaluate = function (hs_zddEq326DjSa, hs_zddOrd726DjSb, hs_zddOrd826DjSc, hs_zddOrd926DjSd, hs_zddOrd1026DjSe, hs_zddOrd1126DjSf, hs_zddOrd1226DjSg, hs_zddOrd1326DjSh, hs_zddOrd1426DjSi, hs_zddOrd1526DjSj, hs_zddOrd1626DjSk, hs_zddOrd1726DjSl, hs_zddOrd1826DjSm, hs_zddOrd1926DjSn, hs_zddOrd2026DjSo) {
        var hs_zddOrd2126DjSp = new $hs.Thunk();
        hs_zddOrd2126DjSp.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326DjSa, hs_zddOrd726DjSb, hs_zddOrd826DjSc, hs_zddOrd926DjSd, hs_zddOrd1026DjSe, hs_zddOrd1126DjSf, hs_zddOrd1226DjSg, hs_zddOrd1326DjSh, hs_zddOrd1426DjSi, hs_zddOrd1526DjSj, hs_zddOrd1626DjSk, hs_zddOrd1726DjSl, hs_zddOrd1826DjSm, hs_zddOrd1926DjSn, hs_zddOrd2026DjSo);
        };
        var hs_sat26DknZ = new $hs.Func(2);
        hs_sat26DknZ.evaluate = function (hs_x26DjSs, hs_y26DjSt) {
            var hs_wild26DknY = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd2126DjSp, hs_x26DjSs, hs_y26DjSt);
            switch (hs_wild26DknY.tag) {
            case 1:
                if (hs_x26DjSs.notEvaluated) {
                    return hs_x26DjSs.hscall();
                } else {
                    return hs_x26DjSs;
                }
            case 2:
                if (hs_y26DjSt.notEvaluated) {
                    return hs_y26DjSt.hscall();
                } else {
                    return hs_y26DjSt;
                }
            }
        };
        if (hs_sat26DknZ.notEvaluated) {
            return hs_sat26DknZ.hscall();
        } else {
            return hs_sat26DknZ;
        }
    };
    hs_zdczlze1925uVmh.evaluate = function (hs_zddEq326DjUl, hs_zddOrd726DjTo, hs_zddOrd826DjTs, hs_zddOrd926DjTw, hs_zddOrd1026DjTA, hs_zddOrd1126DjTE, hs_zddOrd1226DjTI, hs_zddOrd1326DjTM, hs_zddOrd1426DjTQ, hs_zddOrd1526DjTU, hs_zddOrd1626DjTY, hs_zddOrd1726DjU2, hs_zddOrd1826DjU6, hs_zddOrd1926DjUa, hs_zddOrd2026DjUe, hs_zddOrd2126DjUi, hs_a926DjSQ, hs_b26DjT7) {
        var hs_wild26Dko2 = hs_a926DjSQ;
        if (hs_a926DjSQ.notEvaluated) {
            hs_wild26Dko2 = hs_a926DjSQ.hscall();
        }
        var hs_a1026DjTp = hs_wild26Dko2.data[0];
        var hs_a1126DjTt = hs_wild26Dko2.data[1];
        var hs_a1226DjTx = hs_wild26Dko2.data[2];
        var hs_a1326DjTB = hs_wild26Dko2.data[3];
        var hs_a1426DjTF = hs_wild26Dko2.data[4];
        var hs_a1526DjTJ = hs_wild26Dko2.data[5];
        var hs_a1626DjTN = hs_wild26Dko2.data[6];
        var hs_a1726DjTR = hs_wild26Dko2.data[7];
        var hs_a1826DjTV = hs_wild26Dko2.data[8];
        var hs_a1926DjTZ = hs_wild26Dko2.data[9];
        var hs_a2026DjU3 = hs_wild26Dko2.data[10];
        var hs_a2126DjU7 = hs_wild26Dko2.data[11];
        var hs_a2226DjUb = hs_wild26Dko2.data[12];
        var hs_a2326DjUf = hs_wild26Dko2.data[13];
        var hs_a2426DjUj = hs_wild26Dko2.data[14];
        var hs_wild126Dko1 = hs_b26DjT7;
        if (hs_b26DjT7.notEvaluated) {
            hs_wild126Dko1 = hs_b26DjT7.hscall();
        }
        var hs_b126DjTq = hs_wild126Dko1.data[0];
        var hs_b226DjTu = hs_wild126Dko1.data[1];
        var hs_b326DjTy = hs_wild126Dko1.data[2];
        var hs_b426DjTC = hs_wild126Dko1.data[3];
        var hs_b526DjTG = hs_wild126Dko1.data[4];
        var hs_b626DjTK = hs_wild126Dko1.data[5];
        var hs_b726DjTO = hs_wild126Dko1.data[6];
        var hs_b826DjTS = hs_wild126Dko1.data[7];
        var hs_b926DjTW = hs_wild126Dko1.data[8];
        var hs_b1026DjU0 = hs_wild126Dko1.data[9];
        var hs_b1126DjU4 = hs_wild126Dko1.data[10];
        var hs_b1226DjU8 = hs_wild126Dko1.data[11];
        var hs_b1326DjUc = hs_wild126Dko1.data[12];
        var hs_b1426DjUg = hs_wild126Dko1.data[13];
        var hs_b1526DjUk = hs_wild126Dko1.data[14];
        var hs_wild226Dko0 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DjTo, hs_a1026DjTp, hs_b126DjTq);
        switch (hs_wild226Dko0.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dko3 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DjTs, hs_a1126DjTt, hs_b226DjTu);
            switch (hs_wild326Dko3.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dko4 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DjTw, hs_a1226DjTx, hs_b326DjTy);
                switch (hs_wild426Dko4.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dko5 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DjTA, hs_a1326DjTB, hs_b426DjTC);
                    switch (hs_wild526Dko5.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dko6 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DjTE, hs_a1426DjTF, hs_b526DjTG);
                        switch (hs_wild626Dko6.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dko7 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DjTI, hs_a1526DjTJ, hs_b626DjTK);
                            switch (hs_wild726Dko7.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dko8 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326DjTM, hs_a1626DjTN, hs_b726DjTO);
                                switch (hs_wild826Dko8.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dko9 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426DjTQ, hs_a1726DjTR, hs_b826DjTS);
                                    switch (hs_wild926Dko9.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026Dkoa = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526DjTU, hs_a1826DjTV, hs_b926DjTW);
                                        switch (hs_wild1026Dkoa.tag) {
                                        case 1:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126Dkob = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626DjTY, hs_a1926DjTZ, hs_b1026DjU0);
                                            switch (hs_wild1126Dkob.tag) {
                                            case 1:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226Dkoc = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726DjU2, hs_a2026DjU3, hs_b1126DjU4);
                                                switch (hs_wild1226Dkoc.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326Dkod = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826DjU6, hs_a2126DjU7, hs_b1226DjU8);
                                                    switch (hs_wild1326Dkod.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(2);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        var hs_wild1426Dkoe = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1926DjUa, hs_a2226DjUb, hs_b1326DjUc);
                                                        switch (hs_wild1426Dkoe.tag) {
                                                        case 1:
                                                            var $res = new $hs.Data(2);
                                                            $res.data = [];
                                                            return $res;
                                                        case 2:
                                                            var hs_wild1526Dkof = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd2026DjUe, hs_a2326DjUf, hs_b1426DjUg);
                                                            switch (hs_wild1526Dkof.tag) {
                                                            case 1:
                                                                var $res = new $hs.Data(2);
                                                                $res.data = [];
                                                                return $res;
                                                            case 2:
                                                                return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd2126DjUi, hs_a2426DjUj, hs_b1526DjUk);
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
    hs_zdczg1925uVo7.evaluate = function (hs_zddEq326DjWb, hs_zddOrd726DjVe, hs_zddOrd826DjVi, hs_zddOrd926DjVm, hs_zddOrd1026DjVq, hs_zddOrd1126DjVu, hs_zddOrd1226DjVy, hs_zddOrd1326DjVC, hs_zddOrd1426DjVG, hs_zddOrd1526DjVK, hs_zddOrd1626DjVO, hs_zddOrd1726DjVS, hs_zddOrd1826DjVW, hs_zddOrd1926DjW0, hs_zddOrd2026DjW4, hs_zddOrd2126DjW8, hs_a926DjUG, hs_b26DjUX) {
        var hs_wild26Dkoi = hs_a926DjUG;
        if (hs_a926DjUG.notEvaluated) {
            hs_wild26Dkoi = hs_a926DjUG.hscall();
        }
        var hs_a1026DjVf = hs_wild26Dkoi.data[0];
        var hs_a1126DjVj = hs_wild26Dkoi.data[1];
        var hs_a1226DjVn = hs_wild26Dkoi.data[2];
        var hs_a1326DjVr = hs_wild26Dkoi.data[3];
        var hs_a1426DjVv = hs_wild26Dkoi.data[4];
        var hs_a1526DjVz = hs_wild26Dkoi.data[5];
        var hs_a1626DjVD = hs_wild26Dkoi.data[6];
        var hs_a1726DjVH = hs_wild26Dkoi.data[7];
        var hs_a1826DjVL = hs_wild26Dkoi.data[8];
        var hs_a1926DjVP = hs_wild26Dkoi.data[9];
        var hs_a2026DjVT = hs_wild26Dkoi.data[10];
        var hs_a2126DjVX = hs_wild26Dkoi.data[11];
        var hs_a2226DjW1 = hs_wild26Dkoi.data[12];
        var hs_a2326DjW5 = hs_wild26Dkoi.data[13];
        var hs_a2426DjW9 = hs_wild26Dkoi.data[14];
        var hs_wild126Dkoh = hs_b26DjUX;
        if (hs_b26DjUX.notEvaluated) {
            hs_wild126Dkoh = hs_b26DjUX.hscall();
        }
        var hs_b126DjVg = hs_wild126Dkoh.data[0];
        var hs_b226DjVk = hs_wild126Dkoh.data[1];
        var hs_b326DjVo = hs_wild126Dkoh.data[2];
        var hs_b426DjVs = hs_wild126Dkoh.data[3];
        var hs_b526DjVw = hs_wild126Dkoh.data[4];
        var hs_b626DjVA = hs_wild126Dkoh.data[5];
        var hs_b726DjVE = hs_wild126Dkoh.data[6];
        var hs_b826DjVI = hs_wild126Dkoh.data[7];
        var hs_b926DjVM = hs_wild126Dkoh.data[8];
        var hs_b1026DjVQ = hs_wild126Dkoh.data[9];
        var hs_b1126DjVU = hs_wild126Dkoh.data[10];
        var hs_b1226DjVY = hs_wild126Dkoh.data[11];
        var hs_b1326DjW2 = hs_wild126Dkoh.data[12];
        var hs_b1426DjW6 = hs_wild126Dkoh.data[13];
        var hs_b1526DjWa = hs_wild126Dkoh.data[14];
        var hs_wild226Dkog = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DjVe, hs_a1026DjVf, hs_b126DjVg);
        switch (hs_wild226Dkog.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkoj = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DjVi, hs_a1126DjVj, hs_b226DjVk);
            switch (hs_wild326Dkoj.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkok = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DjVm, hs_a1226DjVn, hs_b326DjVo);
                switch (hs_wild426Dkok.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkol = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DjVq, hs_a1326DjVr, hs_b426DjVs);
                    switch (hs_wild526Dkol.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkom = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DjVu, hs_a1426DjVv, hs_b526DjVw);
                        switch (hs_wild626Dkom.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkon = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DjVy, hs_a1526DjVz, hs_b626DjVA);
                            switch (hs_wild726Dkon.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkoo = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326DjVC, hs_a1626DjVD, hs_b726DjVE);
                                switch (hs_wild826Dkoo.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dkop = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426DjVG, hs_a1726DjVH, hs_b826DjVI);
                                    switch (hs_wild926Dkop.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026Dkoq = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526DjVK, hs_a1826DjVL, hs_b926DjVM);
                                        switch (hs_wild1026Dkoq.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126Dkor = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626DjVO, hs_a1926DjVP, hs_b1026DjVQ);
                                            switch (hs_wild1126Dkor.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226Dkos = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726DjVS, hs_a2026DjVT, hs_b1126DjVU);
                                                switch (hs_wild1226Dkos.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326Dkot = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826DjVW, hs_a2126DjVX, hs_b1226DjVY);
                                                    switch (hs_wild1326Dkot.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        var hs_wild1426Dkou = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1926DjW0, hs_a2226DjW1, hs_b1326DjW2);
                                                        switch (hs_wild1426Dkou.tag) {
                                                        case 1:
                                                            var $res = new $hs.Data(1);
                                                            $res.data = [];
                                                            return $res;
                                                        case 2:
                                                            var hs_wild1526Dkov = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd2026DjW4, hs_a2326DjW5, hs_b1426DjW6);
                                                            switch (hs_wild1526Dkov.tag) {
                                                            case 1:
                                                                var $res = new $hs.Data(1);
                                                                $res.data = [];
                                                                return $res;
                                                            case 2:
                                                                return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd2126DjW8, hs_a2426DjW9, hs_b1526DjWa);
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
    hs_zdczgze1925uVpX.evaluate = function (hs_zddEq326DjY1, hs_zddOrd726DjX4, hs_zddOrd826DjX8, hs_zddOrd926DjXc, hs_zddOrd1026DjXg, hs_zddOrd1126DjXk, hs_zddOrd1226DjXo, hs_zddOrd1326DjXs, hs_zddOrd1426DjXw, hs_zddOrd1526DjXA, hs_zddOrd1626DjXE, hs_zddOrd1726DjXI, hs_zddOrd1826DjXM, hs_zddOrd1926DjXQ, hs_zddOrd2026DjXU, hs_zddOrd2126DjXY, hs_a926DjWw, hs_b26DjWN) {
        var hs_wild26Dkoy = hs_a926DjWw;
        if (hs_a926DjWw.notEvaluated) {
            hs_wild26Dkoy = hs_a926DjWw.hscall();
        }
        var hs_a1026DjX5 = hs_wild26Dkoy.data[0];
        var hs_a1126DjX9 = hs_wild26Dkoy.data[1];
        var hs_a1226DjXd = hs_wild26Dkoy.data[2];
        var hs_a1326DjXh = hs_wild26Dkoy.data[3];
        var hs_a1426DjXl = hs_wild26Dkoy.data[4];
        var hs_a1526DjXp = hs_wild26Dkoy.data[5];
        var hs_a1626DjXt = hs_wild26Dkoy.data[6];
        var hs_a1726DjXx = hs_wild26Dkoy.data[7];
        var hs_a1826DjXB = hs_wild26Dkoy.data[8];
        var hs_a1926DjXF = hs_wild26Dkoy.data[9];
        var hs_a2026DjXJ = hs_wild26Dkoy.data[10];
        var hs_a2126DjXN = hs_wild26Dkoy.data[11];
        var hs_a2226DjXR = hs_wild26Dkoy.data[12];
        var hs_a2326DjXV = hs_wild26Dkoy.data[13];
        var hs_a2426DjXZ = hs_wild26Dkoy.data[14];
        var hs_wild126Dkox = hs_b26DjWN;
        if (hs_b26DjWN.notEvaluated) {
            hs_wild126Dkox = hs_b26DjWN.hscall();
        }
        var hs_b126DjX6 = hs_wild126Dkox.data[0];
        var hs_b226DjXa = hs_wild126Dkox.data[1];
        var hs_b326DjXe = hs_wild126Dkox.data[2];
        var hs_b426DjXi = hs_wild126Dkox.data[3];
        var hs_b526DjXm = hs_wild126Dkox.data[4];
        var hs_b626DjXq = hs_wild126Dkox.data[5];
        var hs_b726DjXu = hs_wild126Dkox.data[6];
        var hs_b826DjXy = hs_wild126Dkox.data[7];
        var hs_b926DjXC = hs_wild126Dkox.data[8];
        var hs_b1026DjXG = hs_wild126Dkox.data[9];
        var hs_b1126DjXK = hs_wild126Dkox.data[10];
        var hs_b1226DjXO = hs_wild126Dkox.data[11];
        var hs_b1326DjXS = hs_wild126Dkox.data[12];
        var hs_b1426DjXW = hs_wild126Dkox.data[13];
        var hs_b1526DjY0 = hs_wild126Dkox.data[14];
        var hs_wild226Dkow = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DjX4, hs_a1026DjX5, hs_b126DjX6);
        switch (hs_wild226Dkow.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkoz = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DjX8, hs_a1126DjX9, hs_b226DjXa);
            switch (hs_wild326Dkoz.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DkoA = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DjXc, hs_a1226DjXd, hs_b326DjXe);
                switch (hs_wild426DkoA.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DkoB = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DjXg, hs_a1326DjXh, hs_b426DjXi);
                    switch (hs_wild526DkoB.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626DkoC = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DjXk, hs_a1426DjXl, hs_b526DjXm);
                        switch (hs_wild626DkoC.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726DkoD = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DjXo, hs_a1526DjXp, hs_b626DjXq);
                            switch (hs_wild726DkoD.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826DkoE = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326DjXs, hs_a1626DjXt, hs_b726DjXu);
                                switch (hs_wild826DkoE.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926DkoF = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426DjXw, hs_a1726DjXx, hs_b826DjXy);
                                    switch (hs_wild926DkoF.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026DkoG = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526DjXA, hs_a1826DjXB, hs_b926DjXC);
                                        switch (hs_wild1026DkoG.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126DkoH = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626DjXE, hs_a1926DjXF, hs_b1026DjXG);
                                            switch (hs_wild1126DkoH.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226DkoI = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726DjXI, hs_a2026DjXJ, hs_b1126DjXK);
                                                switch (hs_wild1226DkoI.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326DkoJ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826DjXM, hs_a2126DjXN, hs_b1226DjXO);
                                                    switch (hs_wild1326DkoJ.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        var hs_wild1426DkoK = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1926DjXQ, hs_a2226DjXR, hs_b1326DjXS);
                                                        switch (hs_wild1426DkoK.tag) {
                                                        case 1:
                                                            var $res = new $hs.Data(1);
                                                            $res.data = [];
                                                            return $res;
                                                        case 2:
                                                            var hs_wild1526DkoL = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd2026DjXU, hs_a2326DjXV, hs_b1426DjXW);
                                                            switch (hs_wild1526DkoL.tag) {
                                                            case 1:
                                                                var $res = new $hs.Data(1);
                                                                $res.data = [];
                                                                return $res;
                                                            case 2:
                                                                return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd2126DjXY, hs_a2426DjXZ, hs_b1526DjY0);
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
    hs_zdczl1925uVrN.evaluate = function (hs_zddEq326DjZR, hs_zddOrd726DjYU, hs_zddOrd826DjYY, hs_zddOrd926DjZ2, hs_zddOrd1026DjZ6, hs_zddOrd1126DjZa, hs_zddOrd1226DjZe, hs_zddOrd1326DjZi, hs_zddOrd1426DjZm, hs_zddOrd1526DjZq, hs_zddOrd1626DjZu, hs_zddOrd1726DjZy, hs_zddOrd1826DjZC, hs_zddOrd1926DjZG, hs_zddOrd2026DjZK, hs_zddOrd2126DjZO, hs_a926DjYm, hs_b26DjYD) {
        var hs_wild26DkoO = hs_a926DjYm;
        if (hs_a926DjYm.notEvaluated) {
            hs_wild26DkoO = hs_a926DjYm.hscall();
        }
        var hs_a1026DjYV = hs_wild26DkoO.data[0];
        var hs_a1126DjYZ = hs_wild26DkoO.data[1];
        var hs_a1226DjZ3 = hs_wild26DkoO.data[2];
        var hs_a1326DjZ7 = hs_wild26DkoO.data[3];
        var hs_a1426DjZb = hs_wild26DkoO.data[4];
        var hs_a1526DjZf = hs_wild26DkoO.data[5];
        var hs_a1626DjZj = hs_wild26DkoO.data[6];
        var hs_a1726DjZn = hs_wild26DkoO.data[7];
        var hs_a1826DjZr = hs_wild26DkoO.data[8];
        var hs_a1926DjZv = hs_wild26DkoO.data[9];
        var hs_a2026DjZz = hs_wild26DkoO.data[10];
        var hs_a2126DjZD = hs_wild26DkoO.data[11];
        var hs_a2226DjZH = hs_wild26DkoO.data[12];
        var hs_a2326DjZL = hs_wild26DkoO.data[13];
        var hs_a2426DjZP = hs_wild26DkoO.data[14];
        var hs_wild126DkoN = hs_b26DjYD;
        if (hs_b26DjYD.notEvaluated) {
            hs_wild126DkoN = hs_b26DjYD.hscall();
        }
        var hs_b126DjYW = hs_wild126DkoN.data[0];
        var hs_b226DjZ0 = hs_wild126DkoN.data[1];
        var hs_b326DjZ4 = hs_wild126DkoN.data[2];
        var hs_b426DjZ8 = hs_wild126DkoN.data[3];
        var hs_b526DjZc = hs_wild126DkoN.data[4];
        var hs_b626DjZg = hs_wild126DkoN.data[5];
        var hs_b726DjZk = hs_wild126DkoN.data[6];
        var hs_b826DjZo = hs_wild126DkoN.data[7];
        var hs_b926DjZs = hs_wild126DkoN.data[8];
        var hs_b1026DjZw = hs_wild126DkoN.data[9];
        var hs_b1126DjZA = hs_wild126DkoN.data[10];
        var hs_b1226DjZE = hs_wild126DkoN.data[11];
        var hs_b1326DjZI = hs_wild126DkoN.data[12];
        var hs_b1426DjZM = hs_wild126DkoN.data[13];
        var hs_b1526DjZQ = hs_wild126DkoN.data[14];
        var hs_wild226DkoM = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726DjYU, hs_a1026DjYV, hs_b126DjYW);
        switch (hs_wild226DkoM.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326DkoP = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826DjYY, hs_a1126DjYZ, hs_b226DjZ0);
            switch (hs_wild326DkoP.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426DkoQ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926DjZ2, hs_a1226DjZ3, hs_b326DjZ4);
                switch (hs_wild426DkoQ.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526DkoR = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026DjZ6, hs_a1326DjZ7, hs_b426DjZ8);
                    switch (hs_wild526DkoR.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626DkoS = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126DjZa, hs_a1426DjZb, hs_b526DjZc);
                        switch (hs_wild626DkoS.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726DkoT = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226DjZe, hs_a1526DjZf, hs_b626DjZg);
                            switch (hs_wild726DkoT.tag) {
                            case 1:
                                var $res = new $hs.Data(2);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826DkoU = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326DjZi, hs_a1626DjZj, hs_b726DjZk);
                                switch (hs_wild826DkoU.tag) {
                                case 1:
                                    var $res = new $hs.Data(2);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926DkoV = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426DjZm, hs_a1726DjZn, hs_b826DjZo);
                                    switch (hs_wild926DkoV.tag) {
                                    case 1:
                                        var $res = new $hs.Data(2);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026DkoW = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526DjZq, hs_a1826DjZr, hs_b926DjZs);
                                        switch (hs_wild1026DkoW.tag) {
                                        case 1:
                                            var $res = new $hs.Data(2);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126DkoX = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626DjZu, hs_a1926DjZv, hs_b1026DjZw);
                                            switch (hs_wild1126DkoX.tag) {
                                            case 1:
                                                var $res = new $hs.Data(2);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226DkoY = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726DjZy, hs_a2026DjZz, hs_b1126DjZA);
                                                switch (hs_wild1226DkoY.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(2);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326DkoZ = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826DjZC, hs_a2126DjZD, hs_b1226DjZE);
                                                    switch (hs_wild1326DkoZ.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(2);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        var hs_wild1426Dkp0 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1926DjZG, hs_a2226DjZH, hs_b1326DjZI);
                                                        switch (hs_wild1426Dkp0.tag) {
                                                        case 1:
                                                            var $res = new $hs.Data(2);
                                                            $res.data = [];
                                                            return $res;
                                                        case 2:
                                                            var hs_wild1526Dkp1 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd2026DjZK, hs_a2326DjZL, hs_b1426DjZM);
                                                            switch (hs_wild1526Dkp1.tag) {
                                                            case 1:
                                                                var $res = new $hs.Data(2);
                                                                $res.data = [];
                                                                return $res;
                                                            case 2:
                                                                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd2126DjZO, hs_a2426DjZP, hs_b1526DjZQ);
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
    hs_zdccompare1925uVtD.evaluate = function (hs_zddEq326Dk1H, hs_zddOrd726Dk0K, hs_zddOrd826Dk0O, hs_zddOrd926Dk0S, hs_zddOrd1026Dk0W, hs_zddOrd1126Dk10, hs_zddOrd1226Dk14, hs_zddOrd1326Dk18, hs_zddOrd1426Dk1c, hs_zddOrd1526Dk1g, hs_zddOrd1626Dk1k, hs_zddOrd1726Dk1o, hs_zddOrd1826Dk1s, hs_zddOrd1926Dk1w, hs_zddOrd2026Dk1A, hs_zddOrd2126Dk1E, hs_a926Dk0c, hs_b26Dk0t) {
        var hs_wild26Dkp4 = hs_a926Dk0c;
        if (hs_a926Dk0c.notEvaluated) {
            hs_wild26Dkp4 = hs_a926Dk0c.hscall();
        }
        var hs_a1026Dk0L = hs_wild26Dkp4.data[0];
        var hs_a1126Dk0P = hs_wild26Dkp4.data[1];
        var hs_a1226Dk0T = hs_wild26Dkp4.data[2];
        var hs_a1326Dk0X = hs_wild26Dkp4.data[3];
        var hs_a1426Dk11 = hs_wild26Dkp4.data[4];
        var hs_a1526Dk15 = hs_wild26Dkp4.data[5];
        var hs_a1626Dk19 = hs_wild26Dkp4.data[6];
        var hs_a1726Dk1d = hs_wild26Dkp4.data[7];
        var hs_a1826Dk1h = hs_wild26Dkp4.data[8];
        var hs_a1926Dk1l = hs_wild26Dkp4.data[9];
        var hs_a2026Dk1p = hs_wild26Dkp4.data[10];
        var hs_a2126Dk1t = hs_wild26Dkp4.data[11];
        var hs_a2226Dk1x = hs_wild26Dkp4.data[12];
        var hs_a2326Dk1B = hs_wild26Dkp4.data[13];
        var hs_a2426Dk1F = hs_wild26Dkp4.data[14];
        var hs_wild126Dkp3 = hs_b26Dk0t;
        if (hs_b26Dk0t.notEvaluated) {
            hs_wild126Dkp3 = hs_b26Dk0t.hscall();
        }
        var hs_b126Dk0M = hs_wild126Dkp3.data[0];
        var hs_b226Dk0Q = hs_wild126Dkp3.data[1];
        var hs_b326Dk0U = hs_wild126Dkp3.data[2];
        var hs_b426Dk0Y = hs_wild126Dkp3.data[3];
        var hs_b526Dk12 = hs_wild126Dkp3.data[4];
        var hs_b626Dk16 = hs_wild126Dkp3.data[5];
        var hs_b726Dk1a = hs_wild126Dkp3.data[6];
        var hs_b826Dk1e = hs_wild126Dkp3.data[7];
        var hs_b926Dk1i = hs_wild126Dkp3.data[8];
        var hs_b1026Dk1m = hs_wild126Dkp3.data[9];
        var hs_b1126Dk1q = hs_wild126Dkp3.data[10];
        var hs_b1226Dk1u = hs_wild126Dkp3.data[11];
        var hs_b1326Dk1y = hs_wild126Dkp3.data[12];
        var hs_b1426Dk1C = hs_wild126Dkp3.data[13];
        var hs_b1526Dk1G = hs_wild126Dkp3.data[14];
        var hs_wild226Dkp2 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd726Dk0K, hs_a1026Dk0L, hs_b126Dk0M);
        switch (hs_wild226Dkp2.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild326Dkp5 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd826Dk0O, hs_a1126Dk0P, hs_b226Dk0Q);
            switch (hs_wild326Dkp5.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_wild426Dkp6 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd926Dk0S, hs_a1226Dk0T, hs_b326Dk0U);
                switch (hs_wild426Dkp6.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_wild526Dkp7 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1026Dk0W, hs_a1326Dk0X, hs_b426Dk0Y);
                    switch (hs_wild526Dkp7.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_wild626Dkp8 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1126Dk10, hs_a1426Dk11, hs_b526Dk12);
                        switch (hs_wild626Dkp8.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_wild726Dkp9 = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1226Dk14, hs_a1526Dk15, hs_b626Dk16);
                            switch (hs_wild726Dkp9.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_wild826Dkpa = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1326Dk18, hs_a1626Dk19, hs_b726Dk1a);
                                switch (hs_wild826Dkpa.tag) {
                                case 1:
                                    var $res = new $hs.Data(1);
                                    $res.data = [];
                                    return $res;
                                case 2:
                                    var hs_wild926Dkpb = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1426Dk1c, hs_a1726Dk1d, hs_b826Dk1e);
                                    switch (hs_wild926Dkpb.tag) {
                                    case 1:
                                        var $res = new $hs.Data(1);
                                        $res.data = [];
                                        return $res;
                                    case 2:
                                        var hs_wild1026Dkpc = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1526Dk1g, hs_a1826Dk1h, hs_b926Dk1i);
                                        switch (hs_wild1026Dkpc.tag) {
                                        case 1:
                                            var $res = new $hs.Data(1);
                                            $res.data = [];
                                            return $res;
                                        case 2:
                                            var hs_wild1126Dkpd = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1626Dk1k, hs_a1926Dk1l, hs_b1026Dk1m);
                                            switch (hs_wild1126Dkpd.tag) {
                                            case 1:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            case 2:
                                                var hs_wild1226Dkpe = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1726Dk1o, hs_a2026Dk1p, hs_b1126Dk1q);
                                                switch (hs_wild1226Dkpe.tag) {
                                                case 1:
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [];
                                                    return $res;
                                                case 2:
                                                    var hs_wild1326Dkpf = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1826Dk1s, hs_a2126Dk1t, hs_b1226Dk1u);
                                                    switch (hs_wild1326Dkpf.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [];
                                                        return $res;
                                                    case 2:
                                                        var hs_wild1426Dkpg = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd1926Dk1w, hs_a2226Dk1x, hs_b1326Dk1y);
                                                        switch (hs_wild1426Dkpg.tag) {
                                                        case 1:
                                                            var $res = new $hs.Data(1);
                                                            $res.data = [];
                                                            return $res;
                                                        case 2:
                                                            var hs_wild1526Dkph = $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd2026Dk1A, hs_a2326Dk1B, hs_b1426Dk1C);
                                                            switch (hs_wild1526Dkph.tag) {
                                                            case 1:
                                                                var $res = new $hs.Data(1);
                                                                $res.data = [];
                                                                return $res;
                                                            case 2:
                                                                return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd2126Dk1E, hs_a2426Dk1F, hs_b1526Dk1G);
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
    this.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddEq326Dk22, hs_zddOrd726Dk23, hs_zddOrd826Dk24, hs_zddOrd926Dk25, hs_zddOrd1026Dk26, hs_zddOrd1126Dk27, hs_zddOrd1226Dk28, hs_zddOrd1326Dk29, hs_zddOrd1426Dk2a, hs_zddOrd1526Dk2b, hs_zddOrd1626Dk2c, hs_zddOrd1726Dk2d, hs_zddOrd1826Dk2e, hs_zddOrd1926Dk2f, hs_zddOrd2026Dk2g, hs_zddOrd2126Dk2h) {
        var hs_sat26Dkpi = new $hs.Thunk();
        hs_sat26Dkpi.evaluateOnce = function () {
            return hs_zdcmin2025uVvt.hscall(hs_zddEq326Dk22, hs_zddOrd726Dk23, hs_zddOrd826Dk24, hs_zddOrd926Dk25, hs_zddOrd1026Dk26, hs_zddOrd1126Dk27, hs_zddOrd1226Dk28, hs_zddOrd1326Dk29, hs_zddOrd1426Dk2a, hs_zddOrd1526Dk2b, hs_zddOrd1626Dk2c, hs_zddOrd1726Dk2d, hs_zddOrd1826Dk2e, hs_zddOrd1926Dk2f, hs_zddOrd2026Dk2g, hs_zddOrd2126Dk2h);
        };
        var hs_sat26Dkpj = new $hs.Thunk();
        hs_sat26Dkpj.evaluateOnce = function () {
            return hs_zdcmax2025uVvv.hscall(hs_zddEq326Dk22, hs_zddOrd726Dk23, hs_zddOrd826Dk24, hs_zddOrd926Dk25, hs_zddOrd1026Dk26, hs_zddOrd1126Dk27, hs_zddOrd1226Dk28, hs_zddOrd1326Dk29, hs_zddOrd1426Dk2a, hs_zddOrd1526Dk2b, hs_zddOrd1626Dk2c, hs_zddOrd1726Dk2d, hs_zddOrd1826Dk2e, hs_zddOrd1926Dk2f, hs_zddOrd2026Dk2g, hs_zddOrd2126Dk2h);
        };
        var hs_sat26Dkpk = new $hs.Func(2);
        hs_sat26Dkpk.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze1925uVmh.hscall(hs_zddEq326Dk22, hs_zddOrd726Dk23, hs_zddOrd826Dk24, hs_zddOrd926Dk25, hs_zddOrd1026Dk26, hs_zddOrd1126Dk27, hs_zddOrd1226Dk28, hs_zddOrd1326Dk29, hs_zddOrd1426Dk2a, hs_zddOrd1526Dk2b, hs_zddOrd1626Dk2c, hs_zddOrd1726Dk2d, hs_zddOrd1826Dk2e, hs_zddOrd1926Dk2f, hs_zddOrd2026Dk2g, hs_zddOrd2126Dk2h, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkpl = new $hs.Func(2);
        hs_sat26Dkpl.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg1925uVo7.hscall(hs_zddEq326Dk22, hs_zddOrd726Dk23, hs_zddOrd826Dk24, hs_zddOrd926Dk25, hs_zddOrd1026Dk26, hs_zddOrd1126Dk27, hs_zddOrd1226Dk28, hs_zddOrd1326Dk29, hs_zddOrd1426Dk2a, hs_zddOrd1526Dk2b, hs_zddOrd1626Dk2c, hs_zddOrd1726Dk2d, hs_zddOrd1826Dk2e, hs_zddOrd1926Dk2f, hs_zddOrd2026Dk2g, hs_zddOrd2126Dk2h, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkpm = new $hs.Func(2);
        hs_sat26Dkpm.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze1925uVpX.hscall(hs_zddEq326Dk22, hs_zddOrd726Dk23, hs_zddOrd826Dk24, hs_zddOrd926Dk25, hs_zddOrd1026Dk26, hs_zddOrd1126Dk27, hs_zddOrd1226Dk28, hs_zddOrd1326Dk29, hs_zddOrd1426Dk2a, hs_zddOrd1526Dk2b, hs_zddOrd1626Dk2c, hs_zddOrd1726Dk2d, hs_zddOrd1826Dk2e, hs_zddOrd1926Dk2f, hs_zddOrd2026Dk2g, hs_zddOrd2126Dk2h, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkpn = new $hs.Func(2);
        hs_sat26Dkpn.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl1925uVrN.hscall(hs_zddEq326Dk22, hs_zddOrd726Dk23, hs_zddOrd826Dk24, hs_zddOrd926Dk25, hs_zddOrd1026Dk26, hs_zddOrd1126Dk27, hs_zddOrd1226Dk28, hs_zddOrd1326Dk29, hs_zddOrd1426Dk2a, hs_zddOrd1526Dk2b, hs_zddOrd1626Dk2c, hs_zddOrd1726Dk2d, hs_zddOrd1826Dk2e, hs_zddOrd1926Dk2f, hs_zddOrd2026Dk2g, hs_zddOrd2126Dk2h, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dkpo = new $hs.Func(2);
        hs_sat26Dkpo.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare1925uVtD.hscall(hs_zddEq326Dk22, hs_zddOrd726Dk23, hs_zddOrd826Dk24, hs_zddOrd926Dk25, hs_zddOrd1026Dk26, hs_zddOrd1126Dk27, hs_zddOrd1226Dk28, hs_zddOrd1326Dk29, hs_zddOrd1426Dk2a, hs_zddOrd1526Dk2b, hs_zddOrd1626Dk2c, hs_zddOrd1726Dk2d, hs_zddOrd1826Dk2e, hs_zddOrd1926Dk2f, hs_zddOrd2026Dk2g, hs_zddOrd2126Dk2h, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq326Dk22, hs_sat26Dkpo, hs_sat26Dkpn, hs_sat26Dkpm, hs_sat26Dkpl, hs_sat26Dkpk, hs_sat26Dkpj, hs_sat26Dkpi];
        return $res;
    };
    hs_zdcmin2025uVvt.evaluate = function (hs_zddEq326Dk2G, hs_zddOrd726Dk2H, hs_zddOrd826Dk2I, hs_zddOrd926Dk2J, hs_zddOrd1026Dk2K, hs_zddOrd1126Dk2L, hs_zddOrd1226Dk2M, hs_zddOrd1326Dk2N, hs_zddOrd1426Dk2O, hs_zddOrd1526Dk2P, hs_zddOrd1626Dk2Q, hs_zddOrd1726Dk2R, hs_zddOrd1826Dk2S, hs_zddOrd1926Dk2T, hs_zddOrd2026Dk2U, hs_zddOrd2126Dk2V) {
        var hs_zddOrd2226Dk2W = new $hs.Thunk();
        hs_zddOrd2226Dk2W.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326Dk2G, hs_zddOrd726Dk2H, hs_zddOrd826Dk2I, hs_zddOrd926Dk2J, hs_zddOrd1026Dk2K, hs_zddOrd1126Dk2L, hs_zddOrd1226Dk2M, hs_zddOrd1326Dk2N, hs_zddOrd1426Dk2O, hs_zddOrd1526Dk2P, hs_zddOrd1626Dk2Q, hs_zddOrd1726Dk2R, hs_zddOrd1826Dk2S, hs_zddOrd1926Dk2T, hs_zddOrd2026Dk2U, hs_zddOrd2126Dk2V);
        };
        var hs_sat26Dkpq = new $hs.Func(2);
        hs_sat26Dkpq.evaluate = function (hs_x26Dk2Z, hs_y26Dk30) {
            var hs_wild26Dkpp = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd2226Dk2W, hs_x26Dk2Z, hs_y26Dk30);
            switch (hs_wild26Dkpp.tag) {
            case 1:
                if (hs_y26Dk30.notEvaluated) {
                    return hs_y26Dk30.hscall();
                } else {
                    return hs_y26Dk30;
                }
            case 2:
                if (hs_x26Dk2Z.notEvaluated) {
                    return hs_x26Dk2Z.hscall();
                } else {
                    return hs_x26Dk2Z;
                }
            }
        };
        if (hs_sat26Dkpq.notEvaluated) {
            return hs_sat26Dkpq.hscall();
        } else {
            return hs_sat26Dkpq;
        }
    };
    hs_zdcmax2025uVvv.evaluate = function (hs_zddEq326Dk3k, hs_zddOrd726Dk3l, hs_zddOrd826Dk3m, hs_zddOrd926Dk3n, hs_zddOrd1026Dk3o, hs_zddOrd1126Dk3p, hs_zddOrd1226Dk3q, hs_zddOrd1326Dk3r, hs_zddOrd1426Dk3s, hs_zddOrd1526Dk3t, hs_zddOrd1626Dk3u, hs_zddOrd1726Dk3v, hs_zddOrd1826Dk3w, hs_zddOrd1926Dk3x, hs_zddOrd2026Dk3y, hs_zddOrd2126Dk3z) {
        var hs_zddOrd2226Dk3A = new $hs.Thunk();
        hs_zddOrd2226Dk3A.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdfOrdZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddEq326Dk3k, hs_zddOrd726Dk3l, hs_zddOrd826Dk3m, hs_zddOrd926Dk3n, hs_zddOrd1026Dk3o, hs_zddOrd1126Dk3p, hs_zddOrd1226Dk3q, hs_zddOrd1326Dk3r, hs_zddOrd1426Dk3s, hs_zddOrd1526Dk3t, hs_zddOrd1626Dk3u, hs_zddOrd1726Dk3v, hs_zddOrd1826Dk3w, hs_zddOrd1926Dk3x, hs_zddOrd2026Dk3y, hs_zddOrd2126Dk3z);
        };
        var hs_sat26Dkps = new $hs.Func(2);
        hs_sat26Dkps.evaluate = function (hs_x26Dk3D, hs_y26Dk3E) {
            var hs_wild26Dkpr = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd2226Dk3A, hs_x26Dk3D, hs_y26Dk3E);
            switch (hs_wild26Dkpr.tag) {
            case 1:
                if (hs_x26Dk3D.notEvaluated) {
                    return hs_x26Dk3D.hscall();
                } else {
                    return hs_x26Dk3D;
                }
            case 2:
                if (hs_y26Dk3E.notEvaluated) {
                    return hs_y26Dk3E.hscall();
                } else {
                    return hs_y26Dk3E;
                }
            }
        };
        if (hs_sat26Dkps.notEvaluated) {
            return hs_sat26Dkps.hscall();
        } else {
            return hs_sat26Dkps;
        }
    };
    hs_zdczlze2025uVxs.evaluate = function (hs_a926Dk3L, hs_b26Dk3N) {
        var hs_wild26Dkpu = hs_a926Dk3L;
        if (hs_a926Dk3L.notEvaluated) {
            hs_wild26Dkpu = hs_a926Dk3L.hscall();
        }
        switch (hs_wild26Dkpu.tag) {
        case 1:
            var hs_wild126Dkpt = hs_b26Dk3N;
            if (hs_b26Dk3N.notEvaluated) {
                hs_wild126Dkpt = hs_b26Dk3N.hscall();
            }
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            if (hs_b26Dk3N.notEvaluated) {
                return hs_b26Dk3N.hscall();
            } else {
                return hs_b26Dk3N;
            }
        }
    };
    hs_zdczg2025uVxA.evaluate = function (hs_a926Dk3T, hs_b26Dk3V) {
        var hs_wild26Dkpw = hs_a926Dk3T;
        if (hs_a926Dk3T.notEvaluated) {
            hs_wild26Dkpw = hs_a926Dk3T.hscall();
        }
        switch (hs_wild26Dkpw.tag) {
        case 1:
            var hs_wild126Dkpv = hs_b26Dk3V;
            if (hs_b26Dk3V.notEvaluated) {
                hs_wild126Dkpv = hs_b26Dk3V.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild126Dkpx = hs_b26Dk3V;
            if (hs_b26Dk3V.notEvaluated) {
                hs_wild126Dkpx = hs_b26Dk3V.hscall();
            }
            switch (hs_wild126Dkpx.tag) {
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
    hs_zdczgze2025uVxJ.evaluate = function (hs_a926Dk42, hs_b26Dk44) {
        var hs_wild26Dkpz = hs_a926Dk42;
        if (hs_a926Dk42.notEvaluated) {
            hs_wild26Dkpz = hs_a926Dk42.hscall();
        }
        switch (hs_wild26Dkpz.tag) {
        case 1:
            var hs_wild126Dkpy = hs_b26Dk44;
            if (hs_b26Dk44.notEvaluated) {
                hs_wild126Dkpy = hs_b26Dk44.hscall();
            }
            switch (hs_wild126Dkpy.tag) {
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
            var hs_wild126DkpA = hs_b26Dk44;
            if (hs_b26Dk44.notEvaluated) {
                hs_wild126DkpA = hs_b26Dk44.hscall();
            }
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl2025uVxS.evaluate = function (hs_a926Dk4b, hs_b26Dk4d) {
        var hs_wild26DkpB = hs_a926Dk4b;
        if (hs_a926Dk4b.notEvaluated) {
            hs_wild26DkpB = hs_a926Dk4b.hscall();
        }
        switch (hs_wild26DkpB.tag) {
        case 1:
            if (hs_b26Dk4d.notEvaluated) {
                return hs_b26Dk4d.hscall();
            } else {
                return hs_b26Dk4d;
            }
        case 2:
            var hs_wild126DkpC = hs_b26Dk4d;
            if (hs_b26Dk4d.notEvaluated) {
                hs_wild126DkpC = hs_b26Dk4d.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare2025uVy0.evaluate = function (hs_a926Dk4j, hs_b26Dk4l) {
        var hs_wild26DkpE = hs_a926Dk4j;
        if (hs_a926Dk4j.notEvaluated) {
            hs_wild26DkpE = hs_a926Dk4j.hscall();
        }
        switch (hs_wild26DkpE.tag) {
        case 1:
            var hs_wild126DkpD = hs_b26Dk4l;
            if (hs_b26Dk4l.notEvaluated) {
                hs_wild126DkpD = hs_b26Dk4l.hscall();
            }
            switch (hs_wild126DkpD.tag) {
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
            var hs_wild126DkpF = hs_b26Dk4l;
            if (hs_b26Dk4l.notEvaluated) {
                hs_wild126DkpF = hs_b26Dk4l.hscall();
            }
            switch (hs_wild126DkpF.tag) {
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
    this.hs_zdfOrdBool.data = [$hs.modules.GHCziClasses.hs_zdfEqBool, hs_zdccompare2025uVy0, hs_zdczl2025uVxS, hs_zdczgze2025uVxJ, hs_zdczg2025uVxA, hs_zdczlze2025uVxs, hs_zdcmax2125uVyb, hs_zdcmin2125uVy9];
    hs_zdcmin2125uVy9.evaluate = function (hs_x26Dk4u, hs_y26Dk4v) {
        var hs_wild26DkpG = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool, hs_x26Dk4u, hs_y26Dk4v);
        switch (hs_wild26DkpG.tag) {
        case 1:
            if (hs_y26Dk4v.notEvaluated) {
                return hs_y26Dk4v.hscall();
            } else {
                return hs_y26Dk4v;
            }
        case 2:
            if (hs_x26Dk4u.notEvaluated) {
                return hs_x26Dk4u.hscall();
            } else {
                return hs_x26Dk4u;
            }
        }
    };
    hs_zdcmax2125uVyb.evaluate = function (hs_x26Dk4z, hs_y26Dk4A) {
        var hs_wild26DkpH = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool, hs_x26Dk4z, hs_y26Dk4A);
        switch (hs_wild26DkpH.tag) {
        case 1:
            if (hs_x26Dk4z.notEvaluated) {
                return hs_x26Dk4z.hscall();
            } else {
                return hs_x26Dk4z;
            }
        case 2:
            if (hs_y26Dk4A.notEvaluated) {
                return hs_y26Dk4A.hscall();
            } else {
                return hs_y26Dk4A;
            }
        }
    };
    hs_zdczlze2125uVyn.evaluate = function (hs_a926Dk4G, hs_b26Dk4I) {
        var hs_wild26DkpJ = hs_a926Dk4G;
        if (hs_a926Dk4G.notEvaluated) {
            hs_wild26DkpJ = hs_a926Dk4G.hscall();
        }
        switch (hs_wild26DkpJ.tag) {
        case 1:
            var hs_wild126DkpI = hs_b26Dk4I;
            if (hs_b26Dk4I.notEvaluated) {
                hs_wild126DkpI = hs_b26Dk4I.hscall();
            }
            switch (hs_wild126DkpI.tag) {
            case 1:
                return 0 <= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 0 <= 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 0 <= 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 2:
            var hs_wild126DkpK = hs_b26Dk4I;
            if (hs_b26Dk4I.notEvaluated) {
                hs_wild126DkpK = hs_b26Dk4I.hscall();
            }
            switch (hs_wild126DkpK.tag) {
            case 1:
                return 1 <= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 1 <= 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 1 <= 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 3:
            var hs_wild126DkpL = hs_b26Dk4I;
            if (hs_b26Dk4I.notEvaluated) {
                hs_wild126DkpL = hs_b26Dk4I.hscall();
            }
            switch (hs_wild126DkpL.tag) {
            case 1:
                return 2 <= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 2 <= 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 2 <= 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        }
    };
    hs_zdczg2125uVyx.evaluate = function (hs_a926Dk4Q, hs_b26Dk4S) {
        var hs_wild26DkpN = hs_a926Dk4Q;
        if (hs_a926Dk4Q.notEvaluated) {
            hs_wild26DkpN = hs_a926Dk4Q.hscall();
        }
        switch (hs_wild26DkpN.tag) {
        case 1:
            var hs_wild126DkpM = hs_b26Dk4S;
            if (hs_b26Dk4S.notEvaluated) {
                hs_wild126DkpM = hs_b26Dk4S.hscall();
            }
            switch (hs_wild126DkpM.tag) {
            case 1:
                return 0 > 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 0 > 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 0 > 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 2:
            var hs_wild126DkpO = hs_b26Dk4S;
            if (hs_b26Dk4S.notEvaluated) {
                hs_wild126DkpO = hs_b26Dk4S.hscall();
            }
            switch (hs_wild126DkpO.tag) {
            case 1:
                return 1 > 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 1 > 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 1 > 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 3:
            var hs_wild126DkpP = hs_b26Dk4S;
            if (hs_b26Dk4S.notEvaluated) {
                hs_wild126DkpP = hs_b26Dk4S.hscall();
            }
            switch (hs_wild126DkpP.tag) {
            case 1:
                return 2 > 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 2 > 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 2 > 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        }
    };
    hs_zdczgze2125uVyH.evaluate = function (hs_a926Dk50, hs_b26Dk52) {
        var hs_wild26DkpR = hs_a926Dk50;
        if (hs_a926Dk50.notEvaluated) {
            hs_wild26DkpR = hs_a926Dk50.hscall();
        }
        switch (hs_wild26DkpR.tag) {
        case 1:
            var hs_wild126DkpQ = hs_b26Dk52;
            if (hs_b26Dk52.notEvaluated) {
                hs_wild126DkpQ = hs_b26Dk52.hscall();
            }
            switch (hs_wild126DkpQ.tag) {
            case 1:
                return 0 >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 0 >= 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 0 >= 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 2:
            var hs_wild126DkpS = hs_b26Dk52;
            if (hs_b26Dk52.notEvaluated) {
                hs_wild126DkpS = hs_b26Dk52.hscall();
            }
            switch (hs_wild126DkpS.tag) {
            case 1:
                return 1 >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 1 >= 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 1 >= 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 3:
            var hs_wild126DkpT = hs_b26Dk52;
            if (hs_b26Dk52.notEvaluated) {
                hs_wild126DkpT = hs_b26Dk52.hscall();
            }
            switch (hs_wild126DkpT.tag) {
            case 1:
                return 2 >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 2 >= 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 2 >= 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        }
    };
    hs_zdczl2125uVyR.evaluate = function (hs_a926Dk5a, hs_b26Dk5c) {
        var hs_wild26DkpV = hs_a926Dk5a;
        if (hs_a926Dk5a.notEvaluated) {
            hs_wild26DkpV = hs_a926Dk5a.hscall();
        }
        switch (hs_wild26DkpV.tag) {
        case 1:
            var hs_wild126DkpU = hs_b26Dk5c;
            if (hs_b26Dk5c.notEvaluated) {
                hs_wild126DkpU = hs_b26Dk5c.hscall();
            }
            switch (hs_wild126DkpU.tag) {
            case 1:
                return 0 < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 0 < 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 0 < 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 2:
            var hs_wild126DkpW = hs_b26Dk5c;
            if (hs_b26Dk5c.notEvaluated) {
                hs_wild126DkpW = hs_b26Dk5c.hscall();
            }
            switch (hs_wild126DkpW.tag) {
            case 1:
                return 1 < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 1 < 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 1 < 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 3:
            var hs_wild126DkpX = hs_b26Dk5c;
            if (hs_b26Dk5c.notEvaluated) {
                hs_wild126DkpX = hs_b26Dk5c.hscall();
            }
            switch (hs_wild126DkpX.tag) {
            case 1:
                return 2 < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 2 < 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 2 < 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        }
    };
    hs_zdccompare2125uVz1.evaluate = function (hs_a926Dk5w, hs_b26Dk5m) {
        var hs_zdj26Dk5v = new $hs.Func(1);
        hs_zdj26Dk5v.evaluate = function (hs_azh26Dk5o) {
            var hs_wild26Dkq0 = hs_b26Dk5m;
            if (hs_b26Dk5m.notEvaluated) {
                hs_wild26Dkq0 = hs_b26Dk5m.hscall();
            }
            switch (hs_wild26Dkq0.tag) {
            case 1:
                var hs_wild126DkpZ = hs_azh26Dk5o < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild126DkpZ.tag) {
                case 1:
                    var hs_wild226DkpY = hs_azh26Dk5o == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226DkpY.tag) {
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
            case 2:
                var hs_wild126Dkq2 = hs_azh26Dk5o < 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild126Dkq2.tag) {
                case 1:
                    var hs_wild226Dkq1 = hs_azh26Dk5o == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226Dkq1.tag) {
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
            case 3:
                var hs_wild126Dkq4 = hs_azh26Dk5o < 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild126Dkq4.tag) {
                case 1:
                    var hs_wild226Dkq3 = hs_azh26Dk5o == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226Dkq3.tag) {
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
            }
        };
        var hs_wild26Dkq5 = hs_a926Dk5w;
        if (hs_a926Dk5w.notEvaluated) {
            hs_wild26Dkq5 = hs_a926Dk5w.hscall();
        }
        switch (hs_wild26Dkq5.tag) {
        case 1:
            return hs_zdj26Dk5v.hscall(0);
        case 2:
            return hs_zdj26Dk5v.hscall(1);
        case 3:
            return hs_zdj26Dk5v.hscall(2);
        }
    };
    this.hs_zdfOrdOrdering.data = [$hs.modules.GHCziClasses.hs_zdfEqOrdering, hs_zdccompare2125uVz1, hs_zdczl2125uVyR, hs_zdczgze2125uVyH, hs_zdczg2125uVyx, hs_zdczlze2125uVyn, hs_zdcmax2225uVzl, hs_zdcmin2225uVzj];
    hs_zdcmin2225uVzj.evaluate = function (hs_x26Dk5E, hs_y26Dk5F) {
        var hs_wild26Dkq6 = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdOrdering, hs_x26Dk5E, hs_y26Dk5F);
        switch (hs_wild26Dkq6.tag) {
        case 1:
            if (hs_y26Dk5F.notEvaluated) {
                return hs_y26Dk5F.hscall();
            } else {
                return hs_y26Dk5F;
            }
        case 2:
            if (hs_x26Dk5E.notEvaluated) {
                return hs_x26Dk5E.hscall();
            } else {
                return hs_x26Dk5E;
            }
        }
    };
    hs_zdcmax2225uVzl.evaluate = function (hs_x26Dk5J, hs_y26Dk5K) {
        var hs_wild26Dkq7 = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdOrdering, hs_x26Dk5J, hs_y26Dk5K);
        switch (hs_wild26Dkq7.tag) {
        case 1:
            if (hs_x26Dk5J.notEvaluated) {
                return hs_x26Dk5J.hscall();
            } else {
                return hs_x26Dk5J;
            }
        case 2:
            if (hs_y26Dk5K.notEvaluated) {
                return hs_y26Dk5K.hscall();
            } else {
                return hs_y26Dk5K;
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
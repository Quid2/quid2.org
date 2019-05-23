
$hs.modules.GHCziEnum = new $hs.Module();
$hs.modules.GHCziEnum.dependencies = ["GHC.Types", "GHC.CString", "GHC.Ordering", "GHC.Unit", "GHC.Base", "GHC.Err", "GHC.Classes"];
$hs.modules.GHCziEnum.initBeforeDependencies = function () {
    this.hs_minBound = new $hs.Func(1);
    this.hs_maxBound = new $hs.Func(1);
    this.hs_succ = new $hs.Func(1);
    this.hs_pred = new $hs.Func(1);
    this.hs_toEnum = new $hs.Func(1);
    this.hs_fromEnum = new $hs.Func(1);
    this.hs_enumFrom = new $hs.Func(1);
    this.hs_enumFromThen = new $hs.Func(1);
    this.hs_enumFromTo = new $hs.Func(1);
    this.hs_enumFromThenTo = new $hs.Func(1);
    this.hs_zddmpred = new $hs.Func(1);
    this.hs_zddmsucc = new $hs.Func(1);
    this.hs_zdfBoundedZLZR = new $hs.Data(1);
    this.hs_zdfEnumZLZR = new $hs.Data(1);
    this.hs_zdfBoundedZLz2cUZR = new $hs.Func(2);
    this.hs_zdfBoundedZLz2cUz2cUZR = new $hs.Func(3);
    this.hs_zdfBoundedZLz2cUz2cUz2cUZR = new $hs.Func(4);
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUZR = new $hs.Func(5);
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(6);
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(7);
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(8);
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(9);
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(10);
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(11);
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(12);
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(13);
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(14);
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(15);
    this.hs_zdfBoundedBool = new $hs.Data(1);
    this.hs_zdfBoundedOrdering = new $hs.Data(1);
    this.hs_zdfBoundedChar = new $hs.Data(1);
    this.hs_zdfEnumChar = new $hs.Data(1);
    this.hs_zdfBoundedInt = new $hs.Data(1);
    this.hs_zdfEnumInt = new $hs.Data(1);
    this.hs_boundedEnumFrom = new $hs.Func(3);
    this.hs_boundedEnumFromThen = new $hs.Func(4);
    this.hs_zddmenumFrom = new $hs.Func(2);
    this.hs_zddmenumFromThen = new $hs.Func(3);
    this.hs_zddmenumFromTo = new $hs.Func(3);
    this.hs_zddmenumFromThenTo = new $hs.Func(4);
    this.hs_zdfEnumOrdering = new $hs.Data(1);
    this.hs_zdfEnumBool = new $hs.Data(1);
    this.hs_DZCEnum = new $hs.Func(8);
    this.hs_DZCBounded = new $hs.Func(2);
    this.hs_minBound.notEvaluated = true;
    this.hs_minBound.evaluate = function (hs_tpl26CJX8) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_tpl26CJX8);
    };
    this.hs_maxBound.notEvaluated = true;
    this.hs_maxBound.evaluate = function (hs_tpl26CJXe) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_tpl26CJXe);
    };
    this.hs_succ.notEvaluated = true;
    this.hs_succ.evaluate = function (hs_tpl26CJXk) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_tpl26CJXk);
    };
    this.hs_pred.notEvaluated = true;
    this.hs_pred.evaluate = function (hs_tpl26CJXw) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_tpl26CJXw);
    };
    this.hs_toEnum.notEvaluated = true;
    this.hs_toEnum.evaluate = function (hs_tpl26CJXI) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_tpl26CJXI);
    };
    this.hs_fromEnum.notEvaluated = true;
    this.hs_fromEnum.evaluate = function (hs_tpl26CJXU) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_tpl26CJXU);
    };
    this.hs_enumFrom.notEvaluated = true;
    this.hs_enumFrom.evaluate = function (hs_tpl26CJY6) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_tpl26CJY6);
    };
    this.hs_enumFromThen.notEvaluated = true;
    this.hs_enumFromThen.evaluate = function (hs_tpl26CJYi) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_tpl26CJYi);
    };
    this.hs_enumFromTo.notEvaluated = true;
    this.hs_enumFromTo.evaluate = function (hs_tpl26CJYu) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_tpl26CJYu);
    };
    this.hs_enumFromThenTo.notEvaluated = true;
    this.hs_enumFromThenTo.evaluate = function (hs_tpl26CJYG) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_tpl26CJYG);
    };
    this.hs_zddmpred.notEvaluated = true;
    this.hs_zddmpred.evaluate = function (hs_zddEnum26CJYS) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_zddEnum26CJYS);
    };
    this.hs_zddmsucc.notEvaluated = true;
    this.hs_zddmsucc.evaluate = function (hs_zddEnum26CJZ0) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_zddEnum26CJZ0);
    };
    this.hs_zdfBoundedZLZR.notEvaluated = true;
    this.hs_zdfBoundedZLZR.evaluate = function () {
        $hs.modules.GHCziEnum.loadDependencies();
        return this;
    };
    this.hs_zdfEnumZLZR.notEvaluated = true;
    this.hs_zdfEnumZLZR.evaluate = function () {
        $hs.modules.GHCziEnum.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedZLz2cUZR.notEvaluated = true;
    this.hs_zdfBoundedZLz2cUZR.evaluate = function (hs_zddBounded26CK4X, hs_zddBounded126CK4Y) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_zddBounded26CK4X, hs_zddBounded126CK4Y);
    };
    this.hs_zdfBoundedZLz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfBoundedZLz2cUz2cUZR.evaluate = function (hs_zddBounded26CK5o, hs_zddBounded126CK5p, hs_zddBounded226CK5q) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_zddBounded26CK5o, hs_zddBounded126CK5p, hs_zddBounded226CK5q);
    };
    this.hs_zdfBoundedZLz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfBoundedZLz2cUz2cUz2cUZR.evaluate = function (hs_zddBounded26CK5X, hs_zddBounded126CK5Y, hs_zddBounded226CK5Z, hs_zddBounded326CK60) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_zddBounded26CK5X, hs_zddBounded126CK5Y, hs_zddBounded226CK5Z, hs_zddBounded326CK60);
    };
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddBounded26CK6E, hs_zddBounded126CK6F, hs_zddBounded226CK6G, hs_zddBounded326CK6H, hs_zddBounded426CK6I) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_zddBounded26CK6E, hs_zddBounded126CK6F, hs_zddBounded226CK6G, hs_zddBounded326CK6H, hs_zddBounded426CK6I);
    };
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddBounded26CK7t, hs_zddBounded126CK7u, hs_zddBounded226CK7v, hs_zddBounded326CK7w, hs_zddBounded426CK7x, hs_zddBounded526CK7y) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_zddBounded26CK7t, hs_zddBounded126CK7u, hs_zddBounded226CK7v, hs_zddBounded326CK7w, hs_zddBounded426CK7x, hs_zddBounded526CK7y);
    };
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddBounded26CK8q, hs_zddBounded126CK8r, hs_zddBounded226CK8s, hs_zddBounded326CK8t, hs_zddBounded426CK8u, hs_zddBounded526CK8v, hs_zddBounded626CK8w) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_zddBounded26CK8q, hs_zddBounded126CK8r, hs_zddBounded226CK8s, hs_zddBounded326CK8t, hs_zddBounded426CK8u, hs_zddBounded526CK8v, hs_zddBounded626CK8w);
    };
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddBounded26CK9v, hs_zddBounded126CK9w, hs_zddBounded226CK9x, hs_zddBounded326CK9y, hs_zddBounded426CK9z, hs_zddBounded526CK9A, hs_zddBounded626CK9B, hs_zddBounded726CK9C) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_zddBounded26CK9v, hs_zddBounded126CK9w, hs_zddBounded226CK9x, hs_zddBounded326CK9y, hs_zddBounded426CK9z, hs_zddBounded526CK9A, hs_zddBounded626CK9B, hs_zddBounded726CK9C);
    };
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddBounded26CKaI, hs_zddBounded126CKaJ, hs_zddBounded226CKaK, hs_zddBounded326CKaL, hs_zddBounded426CKaM, hs_zddBounded526CKaN, hs_zddBounded626CKaO, hs_zddBounded726CKaP, hs_zddBounded826CKaQ) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_zddBounded26CKaI, hs_zddBounded126CKaJ, hs_zddBounded226CKaK, hs_zddBounded326CKaL, hs_zddBounded426CKaM, hs_zddBounded526CKaN, hs_zddBounded626CKaO, hs_zddBounded726CKaP, hs_zddBounded826CKaQ);
    };
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddBounded26CKc3, hs_zddBounded126CKc4, hs_zddBounded226CKc5, hs_zddBounded326CKc6, hs_zddBounded426CKc7, hs_zddBounded526CKc8, hs_zddBounded626CKc9, hs_zddBounded726CKca, hs_zddBounded826CKcb, hs_zddBounded926CKcc) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_zddBounded26CKc3, hs_zddBounded126CKc4, hs_zddBounded226CKc5, hs_zddBounded326CKc6, hs_zddBounded426CKc7, hs_zddBounded526CKc8, hs_zddBounded626CKc9, hs_zddBounded726CKca, hs_zddBounded826CKcb, hs_zddBounded926CKcc);
    };
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddBounded26CKdw, hs_zddBounded126CKdx, hs_zddBounded226CKdy, hs_zddBounded326CKdz, hs_zddBounded426CKdA, hs_zddBounded526CKdB, hs_zddBounded626CKdC, hs_zddBounded726CKdD, hs_zddBounded826CKdE, hs_zddBounded926CKdF, hs_zddBounded1026CKdG) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_zddBounded26CKdw, hs_zddBounded126CKdx, hs_zddBounded226CKdy, hs_zddBounded326CKdz, hs_zddBounded426CKdA, hs_zddBounded526CKdB, hs_zddBounded626CKdC, hs_zddBounded726CKdD, hs_zddBounded826CKdE, hs_zddBounded926CKdF, hs_zddBounded1026CKdG);
    };
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddBounded26CKf7, hs_zddBounded126CKf8, hs_zddBounded226CKf9, hs_zddBounded326CKfa, hs_zddBounded426CKfb, hs_zddBounded526CKfc, hs_zddBounded626CKfd, hs_zddBounded726CKfe, hs_zddBounded826CKff, hs_zddBounded926CKfg, hs_zddBounded1026CKfh, hs_zddBounded1126CKfi) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_zddBounded26CKf7, hs_zddBounded126CKf8, hs_zddBounded226CKf9, hs_zddBounded326CKfa, hs_zddBounded426CKfb, hs_zddBounded526CKfc, hs_zddBounded626CKfd, hs_zddBounded726CKfe, hs_zddBounded826CKff, hs_zddBounded926CKfg, hs_zddBounded1026CKfh, hs_zddBounded1126CKfi);
    };
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddBounded26CKgQ, hs_zddBounded126CKgR, hs_zddBounded226CKgS, hs_zddBounded326CKgT, hs_zddBounded426CKgU, hs_zddBounded526CKgV, hs_zddBounded626CKgW, hs_zddBounded726CKgX, hs_zddBounded826CKgY, hs_zddBounded926CKgZ, hs_zddBounded1026CKh0, hs_zddBounded1126CKh1, hs_zddBounded1226CKh2) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_zddBounded26CKgQ, hs_zddBounded126CKgR, hs_zddBounded226CKgS, hs_zddBounded326CKgT, hs_zddBounded426CKgU, hs_zddBounded526CKgV, hs_zddBounded626CKgW, hs_zddBounded726CKgX, hs_zddBounded826CKgY, hs_zddBounded926CKgZ, hs_zddBounded1026CKh0, hs_zddBounded1126CKh1, hs_zddBounded1226CKh2);
    };
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddBounded26CKiH, hs_zddBounded126CKiI, hs_zddBounded226CKiJ, hs_zddBounded326CKiK, hs_zddBounded426CKiL, hs_zddBounded526CKiM, hs_zddBounded626CKiN, hs_zddBounded726CKiO, hs_zddBounded826CKiP, hs_zddBounded926CKiQ, hs_zddBounded1026CKiR, hs_zddBounded1126CKiS, hs_zddBounded1226CKiT, hs_zddBounded1326CKiU) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_zddBounded26CKiH, hs_zddBounded126CKiI, hs_zddBounded226CKiJ, hs_zddBounded326CKiK, hs_zddBounded426CKiL, hs_zddBounded526CKiM, hs_zddBounded626CKiN, hs_zddBounded726CKiO, hs_zddBounded826CKiP, hs_zddBounded926CKiQ, hs_zddBounded1026CKiR, hs_zddBounded1126CKiS, hs_zddBounded1226CKiT, hs_zddBounded1326CKiU);
    };
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddBounded26CKkG, hs_zddBounded126CKkH, hs_zddBounded226CKkI, hs_zddBounded326CKkJ, hs_zddBounded426CKkK, hs_zddBounded526CKkL, hs_zddBounded626CKkM, hs_zddBounded726CKkN, hs_zddBounded826CKkO, hs_zddBounded926CKkP, hs_zddBounded1026CKkQ, hs_zddBounded1126CKkR, hs_zddBounded1226CKkS, hs_zddBounded1326CKkT, hs_zddBounded1426CKkU) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_zddBounded26CKkG, hs_zddBounded126CKkH, hs_zddBounded226CKkI, hs_zddBounded326CKkJ, hs_zddBounded426CKkK, hs_zddBounded526CKkL, hs_zddBounded626CKkM, hs_zddBounded726CKkN, hs_zddBounded826CKkO, hs_zddBounded926CKkP, hs_zddBounded1026CKkQ, hs_zddBounded1126CKkR, hs_zddBounded1226CKkS, hs_zddBounded1326CKkT, hs_zddBounded1426CKkU);
    };
    this.hs_zdfBoundedBool.notEvaluated = true;
    this.hs_zdfBoundedBool.evaluate = function () {
        $hs.modules.GHCziEnum.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedOrdering.notEvaluated = true;
    this.hs_zdfBoundedOrdering.evaluate = function () {
        $hs.modules.GHCziEnum.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedChar.notEvaluated = true;
    this.hs_zdfBoundedChar.evaluate = function () {
        $hs.modules.GHCziEnum.loadDependencies();
        return this;
    };
    this.hs_zdfEnumChar.notEvaluated = true;
    this.hs_zdfEnumChar.evaluate = function () {
        $hs.modules.GHCziEnum.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedInt.notEvaluated = true;
    this.hs_zdfBoundedInt.evaluate = function () {
        $hs.modules.GHCziEnum.loadDependencies();
        return this;
    };
    this.hs_zdfEnumInt.notEvaluated = true;
    this.hs_zdfEnumInt.evaluate = function () {
        $hs.modules.GHCziEnum.loadDependencies();
        return this;
    };
    this.hs_boundedEnumFrom.notEvaluated = true;
    this.hs_boundedEnumFrom.evaluate = function (hs_zddEnum26CKoL, hs_zddBounded26CKoP, hs_n26CKoN) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_zddEnum26CKoL, hs_zddBounded26CKoP, hs_n26CKoN);
    };
    this.hs_boundedEnumFromThen.notEvaluated = true;
    this.hs_boundedEnumFromThen.evaluate = function (hs_zddEnum26CKoZ, hs_zddBounded26CKp7, hs_n126CKp3, hs_n226CKp0) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_zddEnum26CKoZ, hs_zddBounded26CKp7, hs_n126CKp3, hs_n226CKp0);
    };
    this.hs_zddmenumFrom.notEvaluated = true;
    this.hs_zddmenumFrom.evaluate = function (hs_zddEnum26CKpj, hs_x26CKpl) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_zddEnum26CKpj, hs_x26CKpl);
    };
    this.hs_zddmenumFromThen.notEvaluated = true;
    this.hs_zddmenumFromThen.evaluate = function (hs_zddEnum26CKpr, hs_x26CKpt, hs_y26CKpv) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_zddEnum26CKpr, hs_x26CKpt, hs_y26CKpv);
    };
    this.hs_zddmenumFromTo.notEvaluated = true;
    this.hs_zddmenumFromTo.evaluate = function (hs_zddEnum26CKpB, hs_x26CKpD, hs_y26CKpF) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_zddEnum26CKpB, hs_x26CKpD, hs_y26CKpF);
    };
    this.hs_zddmenumFromThenTo.notEvaluated = true;
    this.hs_zddmenumFromThenTo.evaluate = function (hs_zddEnum26CKpM, hs_x126CKpO, hs_x226CKpQ, hs_y26CKpS) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_zddEnum26CKpM, hs_x126CKpO, hs_x226CKpQ, hs_y26CKpS);
    };
    this.hs_zdfEnumOrdering.notEvaluated = true;
    this.hs_zdfEnumOrdering.evaluate = function () {
        $hs.modules.GHCziEnum.loadDependencies();
        return this;
    };
    this.hs_zdfEnumBool.notEvaluated = true;
    this.hs_zdfEnumBool.evaluate = function () {
        $hs.modules.GHCziEnum.loadDependencies();
        return this;
    };
    this.hs_DZCEnum.notEvaluated = true;
    this.hs_DZCEnum.evaluate = function (hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_DZCBounded.notEvaluated = true;
    this.hs_DZCBounded.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziEnum.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziEnum.initAfterDependencies = function () {
    this.hs_minBound.notEvaluated = false;
    this.hs_maxBound.notEvaluated = false;
    this.hs_succ.notEvaluated = false;
    this.hs_pred.notEvaluated = false;
    this.hs_toEnum.notEvaluated = false;
    this.hs_fromEnum.notEvaluated = false;
    this.hs_enumFrom.notEvaluated = false;
    this.hs_enumFromThen.notEvaluated = false;
    this.hs_enumFromTo.notEvaluated = false;
    this.hs_enumFromThenTo.notEvaluated = false;
    this.hs_zddmpred.notEvaluated = false;
    this.hs_zddmsucc.notEvaluated = false;
    this.hs_zdfBoundedZLZR.notEvaluated = false;
    this.hs_zdfBoundedZLZR.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumZLZR.notEvaluated = false;
    this.hs_zdfEnumZLZR.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedZLz2cUZR.notEvaluated = false;
    this.hs_zdfBoundedZLz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfBoundedZLz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfBoundedBool.notEvaluated = false;
    this.hs_zdfBoundedBool.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedOrdering.notEvaluated = false;
    this.hs_zdfBoundedOrdering.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedChar.notEvaluated = false;
    this.hs_zdfBoundedChar.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumChar.notEvaluated = false;
    this.hs_zdfEnumChar.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedInt.notEvaluated = false;
    this.hs_zdfBoundedInt.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumInt.notEvaluated = false;
    this.hs_zdfEnumInt.evaluate = function () {
        return this;
    };
    this.hs_boundedEnumFrom.notEvaluated = false;
    this.hs_boundedEnumFromThen.notEvaluated = false;
    this.hs_zddmenumFrom.notEvaluated = false;
    this.hs_zddmenumFromThen.notEvaluated = false;
    this.hs_zddmenumFromTo.notEvaluated = false;
    this.hs_zddmenumFromThenTo.notEvaluated = false;
    this.hs_zdfEnumOrdering.notEvaluated = false;
    this.hs_zdfEnumOrdering.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumBool.notEvaluated = false;
    this.hs_zdfEnumBool.evaluate = function () {
        return this;
    };
    this.hs_DZCEnum.notEvaluated = false;
    this.hs_DZCBounded.notEvaluated = false;
    var hs_efdtIntDnFB25rkNy = new $hs.Func(5);
    var hs_efdtIntDn25rkNx = new $hs.Func(3);
    var hs_efdtIntUpFB25rkNw = new $hs.Func(5);
    var hs_efdtIntUp25rkNv = new $hs.Func(3);
    var hs_efdtIntFB25rkNu = new $hs.Func(5);
    var hs_efdtInt25rkNt = new $hs.Func(3);
    var hs_efdInt25rkNs = new $hs.Func(2);
    var hs_eftIntFB25rkNr = new $hs.Func(4);
    var hs_eftInt25rkNq = new $hs.Func(2);
    var hs_gozudnzucharzulist25rkNp = new $hs.Func(3);
    var hs_gozuupzucharzulist25rkNo = new $hs.Func(3);
    var hs_gozudnzucharzufb25rkNn = new $hs.Func(5);
    var hs_gozuupzucharzufb25rkNm = new $hs.Func(5);
    var hs_efdtChar25rkNl = new $hs.Func(3);
    var hs_efdtCharFB25rkNk = new $hs.Func(5);
    var hs_efdChar25rkNj = new $hs.Func(2);
    var hs_efdCharFB25rkNi = new $hs.Func(4);
    var hs_eftChar25rkNh = new $hs.Func(2);
    var hs_eftCharFB25rkNg = new $hs.Func(4);
    var hs_zdcenumFromThenTo25ulxE = new $hs.Func(3);
    var hs_zdcenumFromTo25ulxQ = new $hs.Func(2);
    var hs_zdcenumFromThen25ulxX = new $hs.Func(2);
    var hs_zdcenumFrom25uly6 = new $hs.Func(1);
    var hs_zdcfromEnum25ulya = new $hs.Func(1);
    var hs_zdctoEnum25ulye = new $hs.Func(1);
    var hs_zdcpred25ulyj = new $hs.Func(1);
    var hs_zdcsucc25ulyn = new $hs.Func(1);
    var hs_zdcmaxBound25ulyr = new $hs.Func(2);
    var hs_zdcminBound25ulyy = new $hs.Func(2);
    var hs_zdcmaxBound125ulyL = new $hs.Func(3);
    var hs_zdcminBound125ulyV = new $hs.Func(3);
    var hs_zdcmaxBound225ulzd = new $hs.Func(4);
    var hs_zdcminBound225ulzq = new $hs.Func(4);
    var hs_zdcmaxBound325ulzN = new $hs.Func(5);
    var hs_zdcminBound325ulA3 = new $hs.Func(5);
    var hs_zdcmaxBound425ulAv = new $hs.Func(6);
    var hs_zdcminBound425ulAO = new $hs.Func(6);
    var hs_zdcmaxBound525ulBl = new $hs.Func(7);
    var hs_zdcminBound525ulBH = new $hs.Func(7);
    var hs_zdcmaxBound625ulCj = new $hs.Func(8);
    var hs_zdcminBound625ulCI = new $hs.Func(8);
    var hs_zdcmaxBound725ulDp = new $hs.Func(9);
    var hs_zdcminBound725ulDR = new $hs.Func(9);
    var hs_zdcmaxBound825ulED = new $hs.Func(10);
    var hs_zdcminBound825ulF8 = new $hs.Func(10);
    var hs_zdcmaxBound925ulFZ = new $hs.Func(11);
    var hs_zdcminBound925ulGx = new $hs.Func(11);
    var hs_zdcmaxBound1025ulHt = new $hs.Func(12);
    var hs_zdcminBound1025ulI4 = new $hs.Func(12);
    var hs_zdcmaxBound1125ulJ5 = new $hs.Func(13);
    var hs_zdcminBound1125ulJJ = new $hs.Func(13);
    var hs_zdcmaxBound1225ulKP = new $hs.Func(14);
    var hs_zdcminBound1225ulLw = new $hs.Func(14);
    var hs_zdcmaxBound1325ulMH = new $hs.Func(15);
    var hs_zdcminBound1325ulNr = new $hs.Func(15);
    var hs_zdcfromEnum125ulOH = new $hs.Func(1);
    var hs_zdctoEnum125ulOL = new $hs.Func(1);
    var hs_zdcpred125ulOR = new $hs.Func(1);
    var hs_zdcsucc125ulOW = new $hs.Func(1);
    var hs_zdcfromEnum225ulP1 = new $hs.Func(1);
    var hs_zdctoEnum225ulP5 = new $hs.Func(1);
    var hs_zdcpred225ulPc = new $hs.Func(1);
    var hs_zdcsucc225ulPh = new $hs.Func(1);
    var hs_zdcmaxBound1425ulPm = new $hs.Data(1);
    var hs_zdcminBound1425ulPn = new $hs.Data(1);
    var hs_zdcenumFromThenTo125ulPo = new $hs.Func(3);
    var hs_zdcenumFromTo125ulQ5 = new $hs.Func(2);
    var hs_zdcenumFromThen125ulQi = new $hs.Func(2);
    var hs_zdcenumFrom125ulQS = new $hs.Func(1);
    var hs_zdcpred325ulQZ = new $hs.Func(1);
    var hs_zdcsucc325ulRc = new $hs.Func(1);
    var hs_zdcenumFromThenTo225ulRp = new $hs.Func(3);
    var hs_zdcenumFromTo225ulRF = new $hs.Func(2);
    var hs_zdcenumFromThen225ulRQ = new $hs.Func(2);
    var hs_zdcenumFrom225ulS1 = new $hs.Func(1);
    var hs_zdcfromEnum325ulSa = new $hs.Func(1);
    var hs_zdctoEnum325ulSd = new $hs.Func(1);
    var hs_zdcpred425ulSg = new $hs.Func(1);
    var hs_zdcsucc425ulSm = new $hs.Func(1);
    var hs_zdcenumFromThenTo325ulTF = new $hs.Func(3);
    var hs_zdcenumFromTo325ulTG = new $hs.Func(2);
    var hs_zdcenumFromThen325ulTH = new $hs.Func(2);
    var hs_zdcenumFrom325ulTI = new $hs.Func(1);
    var hs_zdcenumFromThenTo425ulUa = new $hs.Func(3);
    var hs_zdcenumFromTo425ulUb = new $hs.Func(2);
    var hs_zdcenumFromThen425ulUc = new $hs.Func(2);
    var hs_zdcenumFrom425ulUd = new $hs.Func(1);
    this.hs_minBound.evaluate = function (hs_tpl26CJX8) {
        var hs_tpl26CKqW = hs_tpl26CJX8;
        if (hs_tpl26CJX8.notEvaluated) {
            hs_tpl26CKqW = hs_tpl26CJX8.hscall();
        }
        var hs_tpl26CJXc = hs_tpl26CKqW.data[0];
        if (hs_tpl26CJXc.notEvaluated) {
            return hs_tpl26CJXc.hscall();
        } else {
            return hs_tpl26CJXc;
        }
    };
    this.hs_maxBound.evaluate = function (hs_tpl26CJXe) {
        var hs_tpl26CKqY = hs_tpl26CJXe;
        if (hs_tpl26CJXe.notEvaluated) {
            hs_tpl26CKqY = hs_tpl26CJXe.hscall();
        }
        var hs_tpl26CJXi = hs_tpl26CKqY.data[1];
        if (hs_tpl26CJXi.notEvaluated) {
            return hs_tpl26CJXi.hscall();
        } else {
            return hs_tpl26CJXi;
        }
    };
    this.hs_succ.evaluate = function (hs_tpl26CJXk) {
        var hs_tpl26CKr6 = hs_tpl26CJXk;
        if (hs_tpl26CJXk.notEvaluated) {
            hs_tpl26CKr6 = hs_tpl26CJXk.hscall();
        }
        var hs_tpl26CJXu = hs_tpl26CKr6.data[0];
        if (hs_tpl26CJXu.notEvaluated) {
            return hs_tpl26CJXu.hscall();
        } else {
            return hs_tpl26CJXu;
        }
    };
    this.hs_pred.evaluate = function (hs_tpl26CJXw) {
        var hs_tpl26CKre = hs_tpl26CJXw;
        if (hs_tpl26CJXw.notEvaluated) {
            hs_tpl26CKre = hs_tpl26CJXw.hscall();
        }
        var hs_tpl26CJXG = hs_tpl26CKre.data[1];
        if (hs_tpl26CJXG.notEvaluated) {
            return hs_tpl26CJXG.hscall();
        } else {
            return hs_tpl26CJXG;
        }
    };
    this.hs_toEnum.evaluate = function (hs_tpl26CJXI) {
        var hs_tpl26CKrm = hs_tpl26CJXI;
        if (hs_tpl26CJXI.notEvaluated) {
            hs_tpl26CKrm = hs_tpl26CJXI.hscall();
        }
        var hs_tpl26CJXS = hs_tpl26CKrm.data[2];
        if (hs_tpl26CJXS.notEvaluated) {
            return hs_tpl26CJXS.hscall();
        } else {
            return hs_tpl26CJXS;
        }
    };
    this.hs_fromEnum.evaluate = function (hs_tpl26CJXU) {
        var hs_tpl26CKru = hs_tpl26CJXU;
        if (hs_tpl26CJXU.notEvaluated) {
            hs_tpl26CKru = hs_tpl26CJXU.hscall();
        }
        var hs_tpl26CJY4 = hs_tpl26CKru.data[3];
        if (hs_tpl26CJY4.notEvaluated) {
            return hs_tpl26CJY4.hscall();
        } else {
            return hs_tpl26CJY4;
        }
    };
    this.hs_enumFrom.evaluate = function (hs_tpl26CJY6) {
        var hs_tpl26CKrC = hs_tpl26CJY6;
        if (hs_tpl26CJY6.notEvaluated) {
            hs_tpl26CKrC = hs_tpl26CJY6.hscall();
        }
        var hs_tpl26CJYg = hs_tpl26CKrC.data[4];
        if (hs_tpl26CJYg.notEvaluated) {
            return hs_tpl26CJYg.hscall();
        } else {
            return hs_tpl26CJYg;
        }
    };
    this.hs_enumFromThen.evaluate = function (hs_tpl26CJYi) {
        var hs_tpl26CKrK = hs_tpl26CJYi;
        if (hs_tpl26CJYi.notEvaluated) {
            hs_tpl26CKrK = hs_tpl26CJYi.hscall();
        }
        var hs_tpl26CJYs = hs_tpl26CKrK.data[5];
        if (hs_tpl26CJYs.notEvaluated) {
            return hs_tpl26CJYs.hscall();
        } else {
            return hs_tpl26CJYs;
        }
    };
    this.hs_enumFromTo.evaluate = function (hs_tpl26CJYu) {
        var hs_tpl26CKrS = hs_tpl26CJYu;
        if (hs_tpl26CJYu.notEvaluated) {
            hs_tpl26CKrS = hs_tpl26CJYu.hscall();
        }
        var hs_tpl26CJYE = hs_tpl26CKrS.data[6];
        if (hs_tpl26CJYE.notEvaluated) {
            return hs_tpl26CJYE.hscall();
        } else {
            return hs_tpl26CJYE;
        }
    };
    this.hs_enumFromThenTo.evaluate = function (hs_tpl26CJYG) {
        var hs_tpl26CKs0 = hs_tpl26CJYG;
        if (hs_tpl26CJYG.notEvaluated) {
            hs_tpl26CKs0 = hs_tpl26CJYG.hscall();
        }
        var hs_tpl26CJYQ = hs_tpl26CKs0.data[7];
        if (hs_tpl26CJYQ.notEvaluated) {
            return hs_tpl26CJYQ.hscall();
        } else {
            return hs_tpl26CJYQ;
        }
    };
    this.hs_zddmpred.evaluate = function (hs_zddEnum26CJYS) {
        var hs_sat26CKs2 = new $hs.Thunk();
        hs_sat26CKs2.evaluateOnce = function () {
            var hs_sat26CKs4 = new $hs.Thunk();
            hs_sat26CKs4.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall(hs_zddEnum26CJYS);
            };
            var hs_sat26CKs3 = new $hs.Func(1);
            hs_sat26CKs3.evaluate = function (hs_ds26CJYV) {
                return $hs.modules.GHCziBase.hs_minusInt.hscall(hs_ds26CJYV, $hs.modules.GHCziBase.hs_oneInt);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CKs3, hs_sat26CKs4);
        };
        var hs_sat26CKs1 = new $hs.Thunk();
        hs_sat26CKs1.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_toEnum.hscall(hs_zddEnum26CJYS);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CKs1, hs_sat26CKs2);
    };
    this.hs_zddmsucc.evaluate = function (hs_zddEnum26CJZ0) {
        var hs_sat26CKs6 = new $hs.Thunk();
        hs_sat26CKs6.evaluateOnce = function () {
            var hs_sat26CKs8 = new $hs.Thunk();
            hs_sat26CKs8.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall(hs_zddEnum26CJZ0);
            };
            var hs_sat26CKs7 = new $hs.Func(1);
            hs_sat26CKs7.evaluate = function (hs_ds26CJZ3) {
                return $hs.modules.GHCziBase.hs_plusInt.hscall(hs_ds26CJZ3, $hs.modules.GHCziBase.hs_oneInt);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CKs7, hs_sat26CKs8);
        };
        var hs_sat26CKs5 = new $hs.Thunk();
        hs_sat26CKs5.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_toEnum.hscall(hs_zddEnum26CJZ0);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CKs5, hs_sat26CKs6);
    };
    hs_efdtIntDnFB25rkNy.evaluate = function (hs_c26CJZk, hs_n26CJZv, hs_x126CJZg, hs_x226CJZd, hs_y26CJZc) {
        var hs_wild26CKs9 = hs_y26CJZc > hs_x226CJZd ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26CKs9.tag) {
        case 1:
            var hs_delta26CJZh = ($hs.Int.addCarry(hs_x226CJZd, ~hs_x126CJZg, 1))[0];
            var hs_yzq26CJZj = ($hs.Int.addCarry(hs_y26CJZc, ~hs_delta26CJZh, 1))[0];
            var hs_sat26CKsd = new $hs.Thunk();
            hs_sat26CKsd.evaluateOnce = function () {
                var hs_gozudn26CJZr = new $hs.Func(1);
                hs_gozudn26CJZr.evaluate = function (hs_x26CJZo) {
                    var hs_wild126CKsf = hs_x26CJZo < hs_yzq26CJZj ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild126CKsf.tag) {
                    case 1:
                        var hs_sat26CKsh = new $hs.Thunk();
                        hs_sat26CKsh.evaluateOnce = function () {
                            var hs_sat26CKsi = ($hs.Int.addCarry(hs_x26CJZo, hs_delta26CJZh, 0))[0];
                            return hs_gozudn26CJZr.hscall(hs_sat26CKsi);
                        };
                        var hs_sat26CKsg = new $hs.Data(1);
                        hs_sat26CKsg.data = [hs_x26CJZo];
                        return hs_c26CJZk.hscall(hs_sat26CKsg, hs_sat26CKsh);
                    case 2:
                        var hs_sat26CKse = new $hs.Data(1);
                        hs_sat26CKse.data = [hs_x26CJZo];
                        return hs_c26CJZk.hscall(hs_sat26CKse, hs_n26CJZv);
                    }
                };
                return hs_gozudn26CJZr.hscall(hs_x226CJZd);
            };
            var hs_sat26CKsc = new $hs.Data(1);
            hs_sat26CKsc.data = [hs_x126CJZg];
            return hs_c26CJZk.hscall(hs_sat26CKsc, hs_sat26CKsd);
        case 2:
            var hs_wild126CKsa = hs_y26CJZc > hs_x126CJZg ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild126CKsa.tag) {
            case 1:
                var hs_sat26CKsb = new $hs.Data(1);
                hs_sat26CKsb.data = [hs_x126CJZg];
                return hs_c26CJZk.hscall(hs_sat26CKsb, hs_n26CJZv);
            case 2:
                if (hs_n26CJZv.notEvaluated) {
                    return hs_n26CJZv.hscall();
                } else {
                    return hs_n26CJZv;
                }
            }
        }
    };
    hs_efdtIntDn25rkNx.evaluate = function (hs_x126CJZG, hs_x226CJZD, hs_y26CJZC) {
        var hs_wild26CKsj = hs_y26CJZC > hs_x226CJZD ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26CKsj.tag) {
        case 1:
            var hs_delta26CJZH = ($hs.Int.addCarry(hs_x226CJZD, ~hs_x126CJZG, 1))[0];
            var hs_yzq26CJZJ = ($hs.Int.addCarry(hs_y26CJZC, ~hs_delta26CJZH, 1))[0];
            var hs_sat26CKsn = new $hs.Thunk();
            hs_sat26CKsn.evaluateOnce = function () {
                var hs_gozudn26CJZQ = new $hs.Func(1);
                hs_gozudn26CJZQ.evaluate = function (hs_x26CJZN) {
                    var hs_wild126CKsp = hs_x26CJZN < hs_yzq26CJZJ ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild126CKsp.tag) {
                    case 1:
                        var hs_sat26CKsr = new $hs.Thunk();
                        hs_sat26CKsr.evaluateOnce = function () {
                            var hs_sat26CKss = ($hs.Int.addCarry(hs_x26CJZN, hs_delta26CJZH, 0))[0];
                            return hs_gozudn26CJZQ.hscall(hs_sat26CKss);
                        };
                        var hs_sat26CKsq = new $hs.Data(1);
                        hs_sat26CKsq.data = [hs_x26CJZN];
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26CKsq, hs_sat26CKsr];
                        return $res;
                    case 2:
                        var hs_sat26CKso = new $hs.Data(1);
                        hs_sat26CKso.data = [hs_x26CJZN];
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26CKso, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $res;
                    }
                };
                return hs_gozudn26CJZQ.hscall(hs_x226CJZD);
            };
            var hs_sat26CKsm = new $hs.Data(1);
            hs_sat26CKsm.data = [hs_x126CJZG];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26CKsm, hs_sat26CKsn];
            return $res;
        case 2:
            var hs_wild126CKsk = hs_y26CJZC > hs_x126CJZG ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild126CKsk.tag) {
            case 1:
                var hs_sat26CKsl = new $hs.Data(1);
                hs_sat26CKsl.data = [hs_x126CJZG];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26CKsl, $hs.modules.GHCziTypes.hs_ZMZN];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_efdtIntUpFB25rkNw.evaluate = function (hs_c26CK0a, hs_n26CK0l, hs_x126CK06, hs_x226CK03, hs_y26CK02) {
        var hs_wild26CKst = hs_y26CK02 < hs_x226CK03 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26CKst.tag) {
        case 1:
            var hs_delta26CK07 = ($hs.Int.addCarry(hs_x226CK03, ~hs_x126CK06, 1))[0];
            var hs_yzq26CK09 = ($hs.Int.addCarry(hs_y26CK02, ~hs_delta26CK07, 1))[0];
            var hs_sat26CKsx = new $hs.Thunk();
            hs_sat26CKsx.evaluateOnce = function () {
                var hs_gozuup26CK0h = new $hs.Func(1);
                hs_gozuup26CK0h.evaluate = function (hs_x26CK0e) {
                    var hs_wild126CKsz = hs_x26CK0e > hs_yzq26CK09 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild126CKsz.tag) {
                    case 1:
                        var hs_sat26CKsB = new $hs.Thunk();
                        hs_sat26CKsB.evaluateOnce = function () {
                            var hs_sat26CKsC = ($hs.Int.addCarry(hs_x26CK0e, hs_delta26CK07, 0))[0];
                            return hs_gozuup26CK0h.hscall(hs_sat26CKsC);
                        };
                        var hs_sat26CKsA = new $hs.Data(1);
                        hs_sat26CKsA.data = [hs_x26CK0e];
                        return hs_c26CK0a.hscall(hs_sat26CKsA, hs_sat26CKsB);
                    case 2:
                        var hs_sat26CKsy = new $hs.Data(1);
                        hs_sat26CKsy.data = [hs_x26CK0e];
                        return hs_c26CK0a.hscall(hs_sat26CKsy, hs_n26CK0l);
                    }
                };
                return hs_gozuup26CK0h.hscall(hs_x226CK03);
            };
            var hs_sat26CKsw = new $hs.Data(1);
            hs_sat26CKsw.data = [hs_x126CK06];
            return hs_c26CK0a.hscall(hs_sat26CKsw, hs_sat26CKsx);
        case 2:
            var hs_wild126CKsu = hs_y26CK02 < hs_x126CK06 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild126CKsu.tag) {
            case 1:
                var hs_sat26CKsv = new $hs.Data(1);
                hs_sat26CKsv.data = [hs_x126CK06];
                return hs_c26CK0a.hscall(hs_sat26CKsv, hs_n26CK0l);
            case 2:
                if (hs_n26CK0l.notEvaluated) {
                    return hs_n26CK0l.hscall();
                } else {
                    return hs_n26CK0l;
                }
            }
        }
    };
    hs_efdtIntUp25rkNv.evaluate = function (hs_x126CK0w, hs_x226CK0t, hs_y26CK0s) {
        var hs_wild26CKsD = hs_y26CK0s < hs_x226CK0t ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26CKsD.tag) {
        case 1:
            var hs_delta26CK0x = ($hs.Int.addCarry(hs_x226CK0t, ~hs_x126CK0w, 1))[0];
            var hs_yzq26CK0z = ($hs.Int.addCarry(hs_y26CK0s, ~hs_delta26CK0x, 1))[0];
            var hs_sat26CKsH = new $hs.Thunk();
            hs_sat26CKsH.evaluateOnce = function () {
                var hs_gozuup26CK0G = new $hs.Func(1);
                hs_gozuup26CK0G.evaluate = function (hs_x26CK0D) {
                    var hs_wild126CKsJ = hs_x26CK0D > hs_yzq26CK0z ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild126CKsJ.tag) {
                    case 1:
                        var hs_sat26CKsL = new $hs.Thunk();
                        hs_sat26CKsL.evaluateOnce = function () {
                            var hs_sat26CKsM = ($hs.Int.addCarry(hs_x26CK0D, hs_delta26CK0x, 0))[0];
                            return hs_gozuup26CK0G.hscall(hs_sat26CKsM);
                        };
                        var hs_sat26CKsK = new $hs.Data(1);
                        hs_sat26CKsK.data = [hs_x26CK0D];
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26CKsK, hs_sat26CKsL];
                        return $res;
                    case 2:
                        var hs_sat26CKsI = new $hs.Data(1);
                        hs_sat26CKsI.data = [hs_x26CK0D];
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26CKsI, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $res;
                    }
                };
                return hs_gozuup26CK0G.hscall(hs_x226CK0t);
            };
            var hs_sat26CKsG = new $hs.Data(1);
            hs_sat26CKsG.data = [hs_x126CK0w];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26CKsG, hs_sat26CKsH];
            return $res;
        case 2:
            var hs_wild126CKsE = hs_y26CK0s < hs_x126CK0w ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild126CKsE.tag) {
            case 1:
                var hs_sat26CKsF = new $hs.Data(1);
                hs_sat26CKsF.data = [hs_x126CK0w];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26CKsF, $hs.modules.GHCziTypes.hs_ZMZN];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_efdtIntFB25rkNu.evaluate = function (hs_eta26CK0V, hs_eta126CK0W, hs_eta226CK0T, hs_eta326CK0S, hs_eta426CK0X) {
        var hs_wild26CKsN = hs_eta326CK0S >= hs_eta226CK0T ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26CKsN.tag) {
        case 1:
            return hs_efdtIntDnFB25rkNy.hscall(hs_eta26CK0V, hs_eta126CK0W, hs_eta226CK0T, hs_eta326CK0S, hs_eta426CK0X);
        case 2:
            return hs_efdtIntUpFB25rkNw.hscall(hs_eta26CK0V, hs_eta126CK0W, hs_eta226CK0T, hs_eta326CK0S, hs_eta426CK0X);
        }
    };
    hs_efdtInt25rkNt.evaluate = function (hs_x126CK12, hs_x226CK11, hs_y26CK14) {
        var hs_wild26CKsO = hs_x226CK11 >= hs_x126CK12 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26CKsO.tag) {
        case 1:
            return hs_efdtIntDn25rkNx.hscall(hs_x126CK12, hs_x226CK11, hs_y26CK14);
        case 2:
            return hs_efdtIntUp25rkNv.hscall(hs_x126CK12, hs_x226CK11, hs_y26CK14);
        }
    };
    hs_efdInt25rkNs.evaluate = function (hs_x126CK18, hs_x226CK17) {
        var hs_wild26CKsP = hs_x226CK17 >= hs_x126CK18 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26CKsP.tag) {
        case 1:
            var hs_wild126CKsR = $hs.modules.GHCziBase.hs_minInt;
            if ($hs.modules.GHCziBase.hs_minInt.notEvaluated) {
                hs_wild126CKsR = $hs.modules.GHCziBase.hs_minInt.hscall();
            }
            var hs_y26CK1c = hs_wild126CKsR.data[0];
            return hs_efdtIntDn25rkNx.hscall(hs_x126CK18, hs_x226CK17, hs_y26CK1c);
        case 2:
            var hs_wild126CKsQ = $hs.modules.GHCziBase.hs_maxInt;
            if ($hs.modules.GHCziBase.hs_maxInt.notEvaluated) {
                hs_wild126CKsQ = $hs.modules.GHCziBase.hs_maxInt.hscall();
            }
            var hs_y26CK1f = hs_wild126CKsQ.data[0];
            return hs_efdtIntUp25rkNv.hscall(hs_x126CK18, hs_x226CK17, hs_y26CK1f);
        }
    };
    hs_eftIntFB25rkNr.evaluate = function (hs_eta26CK1q, hs_eta126CK1v, hs_eta226CK1k, hs_eta326CK1l) {
        var hs_wild26CKsS = hs_eta226CK1k > hs_eta326CK1l ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26CKsS.tag) {
        case 1:
            var hs_go26CK1t = new $hs.Func(1);
            hs_go26CK1t.evaluate = function (hs_x26CK1p) {
                var hs_sat26CKsU = new $hs.Thunk();
                hs_sat26CKsU.evaluateOnce = function () {
                    var hs_wild126CKsV = hs_x26CK1p == hs_eta326CK1l ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild126CKsV.tag) {
                    case 1:
                        var hs_sat26CKsW = ($hs.Int.addCarry(hs_x26CK1p, 1, 0))[0];
                        return hs_go26CK1t.hscall(hs_sat26CKsW);
                    case 2:
                        if (hs_eta126CK1v.notEvaluated) {
                            return hs_eta126CK1v.hscall();
                        } else {
                            return hs_eta126CK1v;
                        }
                    }
                };
                var hs_sat26CKsT = new $hs.Data(1);
                hs_sat26CKsT.data = [hs_x26CK1p];
                return hs_eta26CK1q.hscall(hs_sat26CKsT, hs_sat26CKsU);
            };
            return hs_go26CK1t.hscall(hs_eta226CK1k);
        case 2:
            if (hs_eta126CK1v.notEvaluated) {
                return hs_eta126CK1v.hscall();
            } else {
                return hs_eta126CK1v;
            }
        }
    };
    hs_eftInt25rkNq.evaluate = function (hs_x026CK1z, hs_y26CK1A) {
        var hs_wild26CKsX = hs_x026CK1z > hs_y26CK1A ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26CKsX.tag) {
        case 1:
            var hs_go26CK1H = new $hs.Func(1);
            hs_go26CK1H.evaluate = function (hs_x26CK1E) {
                var hs_sat26CKsZ = new $hs.Thunk();
                hs_sat26CKsZ.evaluateOnce = function () {
                    var hs_wild126CKt0 = hs_x26CK1E == hs_y26CK1A ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild126CKt0.tag) {
                    case 1:
                        var hs_sat26CKt1 = ($hs.Int.addCarry(hs_x26CK1E, 1, 0))[0];
                        return hs_go26CK1H.hscall(hs_sat26CKt1);
                    case 2:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                };
                var hs_sat26CKsY = new $hs.Data(1);
                hs_sat26CKsY.data = [hs_x26CK1E];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26CKsY, hs_sat26CKsZ];
                return $res;
            };
            return hs_go26CK1H.hscall(hs_x026CK1z);
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_gozudnzucharzulist25rkNp.evaluate = function (hs_x026CK1Y, hs_delta26CK1U, hs_lim26CK1Q) {
        var hs_gozudn26CK1V = new $hs.Func(1);
        hs_gozudn26CK1V.evaluate = function (hs_x26CK1P) {
            var hs_wild26CKt2 = hs_x26CK1P < hs_lim26CK1Q ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild26CKt2.tag) {
            case 1:
                var hs_sat26CKt4 = new $hs.Thunk();
                hs_sat26CKt4.evaluateOnce = function () {
                    var hs_sat26CKt6 = ($hs.Int.addCarry(hs_x26CK1P, hs_delta26CK1U, 0))[0];
                    return hs_gozudn26CK1V.hscall(hs_sat26CKt6);
                };
                var hs_sat26CKt5 = String.fromCharCode(hs_x26CK1P);
                var hs_sat26CKt3 = new $hs.Data(1);
                hs_sat26CKt3.data = [hs_sat26CKt5];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26CKt3, hs_sat26CKt4];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        };
        return hs_gozudn26CK1V.hscall(hs_x026CK1Y);
    };
    hs_gozuupzucharzulist25rkNo.evaluate = function (hs_x026CK2d, hs_delta26CK29, hs_lim26CK25) {
        var hs_gozuup26CK2a = new $hs.Func(1);
        hs_gozuup26CK2a.evaluate = function (hs_x26CK24) {
            var hs_wild26CKt7 = hs_x26CK24 > hs_lim26CK25 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild26CKt7.tag) {
            case 1:
                var hs_sat26CKt9 = new $hs.Thunk();
                hs_sat26CKt9.evaluateOnce = function () {
                    var hs_sat26CKtb = ($hs.Int.addCarry(hs_x26CK24, hs_delta26CK29, 0))[0];
                    return hs_gozuup26CK2a.hscall(hs_sat26CKtb);
                };
                var hs_sat26CKta = String.fromCharCode(hs_x26CK24);
                var hs_sat26CKt8 = new $hs.Data(1);
                hs_sat26CKt8.data = [hs_sat26CKta];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26CKt8, hs_sat26CKt9];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        };
        return hs_gozuup26CK2a.hscall(hs_x026CK2d);
    };
    hs_gozudnzucharzufb25rkNn.evaluate = function (hs_c26CK2p, hs_n26CK2v, hs_x026CK2w, hs_delta26CK2r, hs_lim26CK2m) {
        var hs_gozudn26CK2s = new $hs.Func(1);
        hs_gozudn26CK2s.evaluate = function (hs_x26CK2l) {
            var hs_wild26CKtc = hs_x26CK2l < hs_lim26CK2m ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild26CKtc.tag) {
            case 1:
                var hs_sat26CKte = new $hs.Thunk();
                hs_sat26CKte.evaluateOnce = function () {
                    var hs_sat26CKtg = ($hs.Int.addCarry(hs_x26CK2l, hs_delta26CK2r, 0))[0];
                    return hs_gozudn26CK2s.hscall(hs_sat26CKtg);
                };
                var hs_sat26CKtf = String.fromCharCode(hs_x26CK2l);
                var hs_sat26CKtd = new $hs.Data(1);
                hs_sat26CKtd.data = [hs_sat26CKtf];
                return hs_c26CK2p.hscall(hs_sat26CKtd, hs_sat26CKte);
            case 2:
                if (hs_n26CK2v.notEvaluated) {
                    return hs_n26CK2v.hscall();
                } else {
                    return hs_n26CK2v;
                }
            }
        };
        return hs_gozudn26CK2s.hscall(hs_x026CK2w);
    };
    hs_gozuupzucharzufb25rkNm.evaluate = function (hs_c26CK2I, hs_n26CK2O, hs_x026CK2P, hs_delta26CK2K, hs_lim26CK2F) {
        var hs_gozuup26CK2L = new $hs.Func(1);
        hs_gozuup26CK2L.evaluate = function (hs_x26CK2E) {
            var hs_wild26CKth = hs_x26CK2E > hs_lim26CK2F ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild26CKth.tag) {
            case 1:
                var hs_sat26CKtj = new $hs.Thunk();
                hs_sat26CKtj.evaluateOnce = function () {
                    var hs_sat26CKtl = ($hs.Int.addCarry(hs_x26CK2E, hs_delta26CK2K, 0))[0];
                    return hs_gozuup26CK2L.hscall(hs_sat26CKtl);
                };
                var hs_sat26CKtk = String.fromCharCode(hs_x26CK2E);
                var hs_sat26CKti = new $hs.Data(1);
                hs_sat26CKti.data = [hs_sat26CKtk];
                return hs_c26CK2I.hscall(hs_sat26CKti, hs_sat26CKtj);
            case 2:
                if (hs_n26CK2O.notEvaluated) {
                    return hs_n26CK2O.hscall();
                } else {
                    return hs_n26CK2O;
                }
            }
        };
        return hs_gozuup26CK2L.hscall(hs_x026CK2P);
    };
    hs_efdtChar25rkNl.evaluate = function (hs_x126CK2V, hs_x226CK2U, hs_lim26CK2Y) {
        var hs_delta26CK2W = ($hs.Int.addCarry(hs_x226CK2U, ~hs_x126CK2V, 1))[0];
        var hs_wild26CKtm = hs_delta26CK2W >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26CKtm.tag) {
        case 1:
            return hs_gozudnzucharzulist25rkNp.hscall(hs_x126CK2V, hs_delta26CK2W, hs_lim26CK2Y);
        case 2:
            return hs_gozuupzucharzulist25rkNo.hscall(hs_x126CK2V, hs_delta26CK2W, hs_lim26CK2Y);
        }
    };
    hs_efdtCharFB25rkNk.evaluate = function (hs_c26CK39, hs_n26CK3a, hs_x126CK36, hs_x226CK35, hs_lim26CK3b) {
        var hs_delta26CK37 = ($hs.Int.addCarry(hs_x226CK35, ~hs_x126CK36, 1))[0];
        var hs_wild26CKtn = hs_delta26CK37 >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26CKtn.tag) {
        case 1:
            return hs_gozudnzucharzufb25rkNn.hscall(hs_c26CK39, hs_n26CK3a, hs_x126CK36, hs_delta26CK37, hs_lim26CK3b);
        case 2:
            return hs_gozuupzucharzufb25rkNm.hscall(hs_c26CK39, hs_n26CK3a, hs_x126CK36, hs_delta26CK37, hs_lim26CK3b);
        }
    };
    hs_efdChar25rkNj.evaluate = function (hs_x126CK3g, hs_x226CK3f) {
        var hs_delta26CK3h = ($hs.Int.addCarry(hs_x226CK3f, ~hs_x126CK3g, 1))[0];
        var hs_wild26CKto = hs_delta26CK3h >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26CKto.tag) {
        case 1:
            return hs_gozudnzucharzulist25rkNp.hscall(hs_x126CK3g, hs_delta26CK3h, 0);
        case 2:
            return hs_gozuupzucharzulist25rkNo.hscall(hs_x126CK3g, hs_delta26CK3h, 1114111);
        }
    };
    hs_efdCharFB25rkNi.evaluate = function (hs_c26CK3s, hs_n26CK3t, hs_x126CK3p, hs_x226CK3o) {
        var hs_delta26CK3q = ($hs.Int.addCarry(hs_x226CK3o, ~hs_x126CK3p, 1))[0];
        var hs_wild26CKtp = hs_delta26CK3q >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26CKtp.tag) {
        case 1:
            return hs_gozudnzucharzufb25rkNn.hscall(hs_c26CK3s, hs_n26CK3t, hs_x126CK3p, hs_delta26CK3q, 0);
        case 2:
            return hs_gozuupzucharzufb25rkNm.hscall(hs_c26CK3s, hs_n26CK3t, hs_x126CK3p, hs_delta26CK3q, 1114111);
        }
    };
    hs_eftChar25rkNh.evaluate = function (hs_x26CK3w, hs_y26CK3x) {
        var hs_wild26CKtq = hs_x26CK3w > hs_y26CK3x ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26CKtq.tag) {
        case 1:
            var hs_sat26CKts = new $hs.Thunk();
            hs_sat26CKts.evaluateOnce = function () {
                var hs_sat26CKtu = ($hs.Int.addCarry(hs_x26CK3w, 1, 0))[0];
                return hs_eftChar25rkNh.hscall(hs_sat26CKtu, hs_y26CK3x);
            };
            var hs_sat26CKtt = String.fromCharCode(hs_x26CK3w);
            var hs_sat26CKtr = new $hs.Data(1);
            hs_sat26CKtr.data = [hs_sat26CKtt];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26CKtr, hs_sat26CKts];
            return $res;
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_eftCharFB25rkNg.evaluate = function (hs_eta26CK3N, hs_eta126CK3S, hs_eta226CK3T, hs_eta326CK3K) {
        var hs_go26CK3P = new $hs.Func(1);
        hs_go26CK3P.evaluate = function (hs_x26CK3J) {
            var hs_wild26CKtv = hs_x26CK3J > hs_eta326CK3K ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild26CKtv.tag) {
            case 1:
                var hs_sat26CKtx = new $hs.Thunk();
                hs_sat26CKtx.evaluateOnce = function () {
                    var hs_sat26CKtz = ($hs.Int.addCarry(hs_x26CK3J, 1, 0))[0];
                    return hs_go26CK3P.hscall(hs_sat26CKtz);
                };
                var hs_sat26CKty = String.fromCharCode(hs_x26CK3J);
                var hs_sat26CKtw = new $hs.Data(1);
                hs_sat26CKtw.data = [hs_sat26CKty];
                return hs_eta26CK3N.hscall(hs_sat26CKtw, hs_sat26CKtx);
            case 2:
                if (hs_eta126CK3S.notEvaluated) {
                    return hs_eta126CK3S.hscall();
                } else {
                    return hs_eta126CK3S;
                }
            }
        };
        return hs_go26CK3P.hscall(hs_eta226CK3T);
    };
    this.hs_zdfBoundedZLZR.data = [$hs.modules.GHCziUnit.hs_Z0T, $hs.modules.GHCziUnit.hs_Z0T];
    hs_zdcenumFromThenTo25ulxE.evaluate = function (hs_ds26CK3Y, hs_ds126CK40, hs_ds226CK42) {
        var hs_wild26CKtC = hs_ds26CK3Y;
        if (hs_ds26CK3Y.notEvaluated) {
            hs_wild26CKtC = hs_ds26CK3Y.hscall();
        }
        var hs_wild126CKtB = hs_ds126CK40;
        if (hs_ds126CK40.notEvaluated) {
            hs_wild126CKtB = hs_ds126CK40.hscall();
        }
        var hs_wild226CKtA = hs_ds226CK42;
        if (hs_ds226CK42.notEvaluated) {
            hs_wild226CKtA = hs_ds226CK42.hscall();
        }
        var hs_many26CK45 = new $hs.Data(2);
        hs_many26CK45.data = [$hs.modules.GHCziUnit.hs_Z0T, hs_many26CK45];
        if (hs_many26CK45.notEvaluated) {
            return hs_many26CK45.hscall();
        } else {
            return hs_many26CK45;
        }
    };
    hs_zdcenumFromTo25ulxQ.evaluate = function (hs_ds26CK49, hs_ds126CK4b) {
        var hs_wild26CKtE = hs_ds26CK49;
        if (hs_ds26CK49.notEvaluated) {
            hs_wild26CKtE = hs_ds26CK49.hscall();
        }
        var hs_wild126CKtD = hs_ds126CK4b;
        if (hs_ds126CK4b.notEvaluated) {
            hs_wild126CKtD = hs_ds126CK4b.hscall();
        }
        var $res = new $hs.Data(2);
        $res.data = [$hs.modules.GHCziUnit.hs_Z0T, $hs.modules.GHCziTypes.hs_ZMZN];
        return $res;
    };
    hs_zdcenumFromThen25ulxX.evaluate = function (hs_ds26CK4g, hs_ds126CK4i) {
        var hs_wild26CKtG = hs_ds26CK4g;
        if (hs_ds26CK4g.notEvaluated) {
            hs_wild26CKtG = hs_ds26CK4g.hscall();
        }
        var hs_wild126CKtF = hs_ds126CK4i;
        if (hs_ds126CK4i.notEvaluated) {
            hs_wild126CKtF = hs_ds126CK4i.hscall();
        }
        var hs_many26CK4l = new $hs.Data(2);
        hs_many26CK4l.data = [$hs.modules.GHCziUnit.hs_Z0T, hs_many26CK4l];
        if (hs_many26CK4l.notEvaluated) {
            return hs_many26CK4l.hscall();
        } else {
            return hs_many26CK4l;
        }
    };
    hs_zdcenumFrom25uly6.evaluate = function (hs_ds26CK4o) {
        var hs_wild26CKtH = hs_ds26CK4o;
        if (hs_ds26CK4o.notEvaluated) {
            hs_wild26CKtH = hs_ds26CK4o.hscall();
        }
        var $res = new $hs.Data(2);
        $res.data = [$hs.modules.GHCziUnit.hs_Z0T, $hs.modules.GHCziTypes.hs_ZMZN];
        return $res;
    };
    hs_zdcfromEnum25ulya.evaluate = function (hs_ds26CK4s) {
        var hs_wild26CKtI = hs_ds26CK4s;
        if (hs_ds26CK4s.notEvaluated) {
            hs_wild26CKtI = hs_ds26CK4s.hscall();
        }
        if ($hs.modules.GHCziBase.hs_zzeroInt.notEvaluated) {
            return $hs.modules.GHCziBase.hs_zzeroInt.hscall();
        } else {
            return $hs.modules.GHCziBase.hs_zzeroInt;
        }
    };
    hs_zdctoEnum25ulye.evaluate = function (hs_x26CK4w) {
        var hs_wild26CKtJ = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_x26CK4w, $hs.modules.GHCziBase.hs_zzeroInt);
        switch (hs_wild26CKtJ.tag) {
        case 1:
            var hs_sat26CKtK = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prelude.Enum.().toEnum: bad argument\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CKtK);
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdcpred25ulyj.evaluate = function (hs_ds26CK4C) {
        var hs_sat26CKtL = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prelude.Enum.().pred: bad argument\x00");
        return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CKtL);
    };
    hs_zdcsucc25ulyn.evaluate = function (hs_ds26CK4G) {
        var hs_sat26CKtM = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prelude.Enum.().succ: bad argument\x00");
        return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CKtM);
    };
    this.hs_zdfEnumZLZR.data = [hs_zdcsucc25ulyn, hs_zdcpred25ulyj, hs_zdctoEnum25ulye, hs_zdcfromEnum25ulya, hs_zdcenumFrom25uly6, hs_zdcenumFromThen25ulxX, hs_zdcenumFromTo25ulxQ, hs_zdcenumFromThenTo25ulxE];
    hs_zdcmaxBound25ulyr.evaluate = function (hs_zddBounded26CK4K, hs_zddBounded126CK4M) {
        var hs_sat26CKtO = new $hs.Thunk();
        hs_sat26CKtO.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded126CK4M);
        };
        var hs_sat26CKtN = new $hs.Thunk();
        hs_sat26CKtN.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26CK4K);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKtN, hs_sat26CKtO];
        return $res;
    };
    hs_zdcminBound25ulyy.evaluate = function (hs_zddBounded26CK4R, hs_zddBounded126CK4T) {
        var hs_sat26CKtQ = new $hs.Thunk();
        hs_sat26CKtQ.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded126CK4T);
        };
        var hs_sat26CKtP = new $hs.Thunk();
        hs_sat26CKtP.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26CK4R);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKtP, hs_sat26CKtQ];
        return $res;
    };
    this.hs_zdfBoundedZLz2cUZR.evaluate = function (hs_zddBounded26CK4X, hs_zddBounded126CK4Y) {
        var hs_sat26CKtS = new $hs.Thunk();
        hs_sat26CKtS.evaluateOnce = function () {
            return hs_zdcmaxBound25ulyr.hscall(hs_zddBounded26CK4X, hs_zddBounded126CK4Y);
        };
        var hs_sat26CKtR = new $hs.Thunk();
        hs_sat26CKtR.evaluateOnce = function () {
            return hs_zdcminBound25ulyy.hscall(hs_zddBounded26CK4X, hs_zddBounded126CK4Y);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKtR, hs_sat26CKtS];
        return $res;
    };
    hs_zdcmaxBound125ulyL.evaluate = function (hs_zddBounded26CK55, hs_zddBounded126CK57, hs_zddBounded226CK59) {
        var hs_sat26CKtU = new $hs.Thunk();
        hs_sat26CKtU.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded226CK59);
        };
        var hs_sat26CKtV = new $hs.Thunk();
        hs_sat26CKtV.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded126CK57);
        };
        var hs_sat26CKtT = new $hs.Thunk();
        hs_sat26CKtT.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26CK55);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKtT, hs_sat26CKtV, hs_sat26CKtU];
        return $res;
    };
    hs_zdcminBound125ulyV.evaluate = function (hs_zddBounded26CK5f, hs_zddBounded126CK5h, hs_zddBounded226CK5j) {
        var hs_sat26CKtX = new $hs.Thunk();
        hs_sat26CKtX.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded226CK5j);
        };
        var hs_sat26CKtY = new $hs.Thunk();
        hs_sat26CKtY.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded126CK5h);
        };
        var hs_sat26CKtW = new $hs.Thunk();
        hs_sat26CKtW.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26CK5f);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKtW, hs_sat26CKtY, hs_sat26CKtX];
        return $res;
    };
    this.hs_zdfBoundedZLz2cUz2cUZR.evaluate = function (hs_zddBounded26CK5o, hs_zddBounded126CK5p, hs_zddBounded226CK5q) {
        var hs_sat26CKu0 = new $hs.Thunk();
        hs_sat26CKu0.evaluateOnce = function () {
            return hs_zdcmaxBound125ulyL.hscall(hs_zddBounded26CK5o, hs_zddBounded126CK5p, hs_zddBounded226CK5q);
        };
        var hs_sat26CKtZ = new $hs.Thunk();
        hs_sat26CKtZ.evaluateOnce = function () {
            return hs_zdcminBound125ulyV.hscall(hs_zddBounded26CK5o, hs_zddBounded126CK5p, hs_zddBounded226CK5q);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKtZ, hs_sat26CKu0];
        return $res;
    };
    hs_zdcmaxBound225ulzd.evaluate = function (hs_zddBounded26CK5y, hs_zddBounded126CK5A, hs_zddBounded226CK5C, hs_zddBounded326CK5E) {
        var hs_sat26CKu2 = new $hs.Thunk();
        hs_sat26CKu2.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded326CK5E);
        };
        var hs_sat26CKu3 = new $hs.Thunk();
        hs_sat26CKu3.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded226CK5C);
        };
        var hs_sat26CKu4 = new $hs.Thunk();
        hs_sat26CKu4.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded126CK5A);
        };
        var hs_sat26CKu1 = new $hs.Thunk();
        hs_sat26CKu1.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26CK5y);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKu1, hs_sat26CKu4, hs_sat26CKu3, hs_sat26CKu2];
        return $res;
    };
    hs_zdcminBound225ulzq.evaluate = function (hs_zddBounded26CK5L, hs_zddBounded126CK5N, hs_zddBounded226CK5P, hs_zddBounded326CK5R) {
        var hs_sat26CKu6 = new $hs.Thunk();
        hs_sat26CKu6.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded326CK5R);
        };
        var hs_sat26CKu7 = new $hs.Thunk();
        hs_sat26CKu7.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded226CK5P);
        };
        var hs_sat26CKu8 = new $hs.Thunk();
        hs_sat26CKu8.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded126CK5N);
        };
        var hs_sat26CKu5 = new $hs.Thunk();
        hs_sat26CKu5.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26CK5L);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKu5, hs_sat26CKu8, hs_sat26CKu7, hs_sat26CKu6];
        return $res;
    };
    this.hs_zdfBoundedZLz2cUz2cUz2cUZR.evaluate = function (hs_zddBounded26CK5X, hs_zddBounded126CK5Y, hs_zddBounded226CK5Z, hs_zddBounded326CK60) {
        var hs_sat26CKua = new $hs.Thunk();
        hs_sat26CKua.evaluateOnce = function () {
            return hs_zdcmaxBound225ulzd.hscall(hs_zddBounded26CK5X, hs_zddBounded126CK5Y, hs_zddBounded226CK5Z, hs_zddBounded326CK60);
        };
        var hs_sat26CKu9 = new $hs.Thunk();
        hs_sat26CKu9.evaluateOnce = function () {
            return hs_zdcminBound225ulzq.hscall(hs_zddBounded26CK5X, hs_zddBounded126CK5Y, hs_zddBounded226CK5Z, hs_zddBounded326CK60);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKu9, hs_sat26CKua];
        return $res;
    };
    hs_zdcmaxBound325ulzN.evaluate = function (hs_zddBounded26CK69, hs_zddBounded126CK6b, hs_zddBounded226CK6d, hs_zddBounded326CK6f, hs_zddBounded426CK6h) {
        var hs_sat26CKuc = new $hs.Thunk();
        hs_sat26CKuc.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded426CK6h);
        };
        var hs_sat26CKud = new $hs.Thunk();
        hs_sat26CKud.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded326CK6f);
        };
        var hs_sat26CKue = new $hs.Thunk();
        hs_sat26CKue.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded226CK6d);
        };
        var hs_sat26CKuf = new $hs.Thunk();
        hs_sat26CKuf.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded126CK6b);
        };
        var hs_sat26CKub = new $hs.Thunk();
        hs_sat26CKub.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26CK69);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKub, hs_sat26CKuf, hs_sat26CKue, hs_sat26CKud, hs_sat26CKuc];
        return $res;
    };
    hs_zdcminBound325ulA3.evaluate = function (hs_zddBounded26CK6p, hs_zddBounded126CK6r, hs_zddBounded226CK6t, hs_zddBounded326CK6v, hs_zddBounded426CK6x) {
        var hs_sat26CKuh = new $hs.Thunk();
        hs_sat26CKuh.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded426CK6x);
        };
        var hs_sat26CKui = new $hs.Thunk();
        hs_sat26CKui.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded326CK6v);
        };
        var hs_sat26CKuj = new $hs.Thunk();
        hs_sat26CKuj.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded226CK6t);
        };
        var hs_sat26CKuk = new $hs.Thunk();
        hs_sat26CKuk.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded126CK6r);
        };
        var hs_sat26CKug = new $hs.Thunk();
        hs_sat26CKug.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26CK6p);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKug, hs_sat26CKuk, hs_sat26CKuj, hs_sat26CKui, hs_sat26CKuh];
        return $res;
    };
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddBounded26CK6E, hs_zddBounded126CK6F, hs_zddBounded226CK6G, hs_zddBounded326CK6H, hs_zddBounded426CK6I) {
        var hs_sat26CKum = new $hs.Thunk();
        hs_sat26CKum.evaluateOnce = function () {
            return hs_zdcmaxBound325ulzN.hscall(hs_zddBounded26CK6E, hs_zddBounded126CK6F, hs_zddBounded226CK6G, hs_zddBounded326CK6H, hs_zddBounded426CK6I);
        };
        var hs_sat26CKul = new $hs.Thunk();
        hs_sat26CKul.evaluateOnce = function () {
            return hs_zdcminBound325ulA3.hscall(hs_zddBounded26CK6E, hs_zddBounded126CK6F, hs_zddBounded226CK6G, hs_zddBounded326CK6H, hs_zddBounded426CK6I);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKul, hs_sat26CKum];
        return $res;
    };
    hs_zdcmaxBound425ulAv.evaluate = function (hs_zddBounded26CK6S, hs_zddBounded126CK6U, hs_zddBounded226CK6W, hs_zddBounded326CK6Y, hs_zddBounded426CK70, hs_zddBounded526CK72) {
        var hs_sat26CKuo = new $hs.Thunk();
        hs_sat26CKuo.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded526CK72);
        };
        var hs_sat26CKup = new $hs.Thunk();
        hs_sat26CKup.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded426CK70);
        };
        var hs_sat26CKuq = new $hs.Thunk();
        hs_sat26CKuq.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded326CK6Y);
        };
        var hs_sat26CKur = new $hs.Thunk();
        hs_sat26CKur.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded226CK6W);
        };
        var hs_sat26CKus = new $hs.Thunk();
        hs_sat26CKus.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded126CK6U);
        };
        var hs_sat26CKun = new $hs.Thunk();
        hs_sat26CKun.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26CK6S);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKun, hs_sat26CKus, hs_sat26CKur, hs_sat26CKuq, hs_sat26CKup, hs_sat26CKuo];
        return $res;
    };
    hs_zdcminBound425ulAO.evaluate = function (hs_zddBounded26CK7b, hs_zddBounded126CK7d, hs_zddBounded226CK7f, hs_zddBounded326CK7h, hs_zddBounded426CK7j, hs_zddBounded526CK7l) {
        var hs_sat26CKuu = new $hs.Thunk();
        hs_sat26CKuu.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded526CK7l);
        };
        var hs_sat26CKuv = new $hs.Thunk();
        hs_sat26CKuv.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded426CK7j);
        };
        var hs_sat26CKuw = new $hs.Thunk();
        hs_sat26CKuw.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded326CK7h);
        };
        var hs_sat26CKux = new $hs.Thunk();
        hs_sat26CKux.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded226CK7f);
        };
        var hs_sat26CKuy = new $hs.Thunk();
        hs_sat26CKuy.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded126CK7d);
        };
        var hs_sat26CKut = new $hs.Thunk();
        hs_sat26CKut.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26CK7b);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKut, hs_sat26CKuy, hs_sat26CKux, hs_sat26CKuw, hs_sat26CKuv, hs_sat26CKuu];
        return $res;
    };
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddBounded26CK7t, hs_zddBounded126CK7u, hs_zddBounded226CK7v, hs_zddBounded326CK7w, hs_zddBounded426CK7x, hs_zddBounded526CK7y) {
        var hs_sat26CKuA = new $hs.Thunk();
        hs_sat26CKuA.evaluateOnce = function () {
            return hs_zdcmaxBound425ulAv.hscall(hs_zddBounded26CK7t, hs_zddBounded126CK7u, hs_zddBounded226CK7v, hs_zddBounded326CK7w, hs_zddBounded426CK7x, hs_zddBounded526CK7y);
        };
        var hs_sat26CKuz = new $hs.Thunk();
        hs_sat26CKuz.evaluateOnce = function () {
            return hs_zdcminBound425ulAO.hscall(hs_zddBounded26CK7t, hs_zddBounded126CK7u, hs_zddBounded226CK7v, hs_zddBounded326CK7w, hs_zddBounded426CK7x, hs_zddBounded526CK7y);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKuz, hs_sat26CKuA];
        return $res;
    };
    hs_zdcmaxBound525ulBl.evaluate = function (hs_zddBounded26CK7J, hs_zddBounded126CK7L, hs_zddBounded226CK7N, hs_zddBounded326CK7P, hs_zddBounded426CK7R, hs_zddBounded526CK7T, hs_zddBounded626CK7V) {
        var hs_sat26CKuC = new $hs.Thunk();
        hs_sat26CKuC.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded626CK7V);
        };
        var hs_sat26CKuD = new $hs.Thunk();
        hs_sat26CKuD.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded526CK7T);
        };
        var hs_sat26CKuE = new $hs.Thunk();
        hs_sat26CKuE.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded426CK7R);
        };
        var hs_sat26CKuF = new $hs.Thunk();
        hs_sat26CKuF.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded326CK7P);
        };
        var hs_sat26CKuG = new $hs.Thunk();
        hs_sat26CKuG.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded226CK7N);
        };
        var hs_sat26CKuH = new $hs.Thunk();
        hs_sat26CKuH.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded126CK7L);
        };
        var hs_sat26CKuB = new $hs.Thunk();
        hs_sat26CKuB.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26CK7J);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKuB, hs_sat26CKuH, hs_sat26CKuG, hs_sat26CKuF, hs_sat26CKuE, hs_sat26CKuD, hs_sat26CKuC];
        return $res;
    };
    hs_zdcminBound525ulBH.evaluate = function (hs_zddBounded26CK85, hs_zddBounded126CK87, hs_zddBounded226CK89, hs_zddBounded326CK8b, hs_zddBounded426CK8d, hs_zddBounded526CK8f, hs_zddBounded626CK8h) {
        var hs_sat26CKuJ = new $hs.Thunk();
        hs_sat26CKuJ.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded626CK8h);
        };
        var hs_sat26CKuK = new $hs.Thunk();
        hs_sat26CKuK.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded526CK8f);
        };
        var hs_sat26CKuL = new $hs.Thunk();
        hs_sat26CKuL.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded426CK8d);
        };
        var hs_sat26CKuM = new $hs.Thunk();
        hs_sat26CKuM.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded326CK8b);
        };
        var hs_sat26CKuN = new $hs.Thunk();
        hs_sat26CKuN.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded226CK89);
        };
        var hs_sat26CKuO = new $hs.Thunk();
        hs_sat26CKuO.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded126CK87);
        };
        var hs_sat26CKuI = new $hs.Thunk();
        hs_sat26CKuI.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26CK85);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKuI, hs_sat26CKuO, hs_sat26CKuN, hs_sat26CKuM, hs_sat26CKuL, hs_sat26CKuK, hs_sat26CKuJ];
        return $res;
    };
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddBounded26CK8q, hs_zddBounded126CK8r, hs_zddBounded226CK8s, hs_zddBounded326CK8t, hs_zddBounded426CK8u, hs_zddBounded526CK8v, hs_zddBounded626CK8w) {
        var hs_sat26CKuQ = new $hs.Thunk();
        hs_sat26CKuQ.evaluateOnce = function () {
            return hs_zdcmaxBound525ulBl.hscall(hs_zddBounded26CK8q, hs_zddBounded126CK8r, hs_zddBounded226CK8s, hs_zddBounded326CK8t, hs_zddBounded426CK8u, hs_zddBounded526CK8v, hs_zddBounded626CK8w);
        };
        var hs_sat26CKuP = new $hs.Thunk();
        hs_sat26CKuP.evaluateOnce = function () {
            return hs_zdcminBound525ulBH.hscall(hs_zddBounded26CK8q, hs_zddBounded126CK8r, hs_zddBounded226CK8s, hs_zddBounded326CK8t, hs_zddBounded426CK8u, hs_zddBounded526CK8v, hs_zddBounded626CK8w);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKuP, hs_sat26CKuQ];
        return $res;
    };
    hs_zdcmaxBound625ulCj.evaluate = function (hs_zddBounded26CK8I, hs_zddBounded126CK8K, hs_zddBounded226CK8M, hs_zddBounded326CK8O, hs_zddBounded426CK8Q, hs_zddBounded526CK8S, hs_zddBounded626CK8U, hs_zddBounded726CK8W) {
        var hs_sat26CKuS = new $hs.Thunk();
        hs_sat26CKuS.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded726CK8W);
        };
        var hs_sat26CKuT = new $hs.Thunk();
        hs_sat26CKuT.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded626CK8U);
        };
        var hs_sat26CKuU = new $hs.Thunk();
        hs_sat26CKuU.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded526CK8S);
        };
        var hs_sat26CKuV = new $hs.Thunk();
        hs_sat26CKuV.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded426CK8Q);
        };
        var hs_sat26CKuW = new $hs.Thunk();
        hs_sat26CKuW.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded326CK8O);
        };
        var hs_sat26CKuX = new $hs.Thunk();
        hs_sat26CKuX.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded226CK8M);
        };
        var hs_sat26CKuY = new $hs.Thunk();
        hs_sat26CKuY.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded126CK8K);
        };
        var hs_sat26CKuR = new $hs.Thunk();
        hs_sat26CKuR.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26CK8I);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKuR, hs_sat26CKuY, hs_sat26CKuX, hs_sat26CKuW, hs_sat26CKuV, hs_sat26CKuU, hs_sat26CKuT, hs_sat26CKuS];
        return $res;
    };
    hs_zdcminBound625ulCI.evaluate = function (hs_zddBounded26CK97, hs_zddBounded126CK99, hs_zddBounded226CK9b, hs_zddBounded326CK9d, hs_zddBounded426CK9f, hs_zddBounded526CK9h, hs_zddBounded626CK9j, hs_zddBounded726CK9l) {
        var hs_sat26CKv0 = new $hs.Thunk();
        hs_sat26CKv0.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded726CK9l);
        };
        var hs_sat26CKv1 = new $hs.Thunk();
        hs_sat26CKv1.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded626CK9j);
        };
        var hs_sat26CKv2 = new $hs.Thunk();
        hs_sat26CKv2.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded526CK9h);
        };
        var hs_sat26CKv3 = new $hs.Thunk();
        hs_sat26CKv3.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded426CK9f);
        };
        var hs_sat26CKv4 = new $hs.Thunk();
        hs_sat26CKv4.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded326CK9d);
        };
        var hs_sat26CKv5 = new $hs.Thunk();
        hs_sat26CKv5.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded226CK9b);
        };
        var hs_sat26CKv6 = new $hs.Thunk();
        hs_sat26CKv6.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded126CK99);
        };
        var hs_sat26CKuZ = new $hs.Thunk();
        hs_sat26CKuZ.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26CK97);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKuZ, hs_sat26CKv6, hs_sat26CKv5, hs_sat26CKv4, hs_sat26CKv3, hs_sat26CKv2, hs_sat26CKv1, hs_sat26CKv0];
        return $res;
    };
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddBounded26CK9v, hs_zddBounded126CK9w, hs_zddBounded226CK9x, hs_zddBounded326CK9y, hs_zddBounded426CK9z, hs_zddBounded526CK9A, hs_zddBounded626CK9B, hs_zddBounded726CK9C) {
        var hs_sat26CKv8 = new $hs.Thunk();
        hs_sat26CKv8.evaluateOnce = function () {
            return hs_zdcmaxBound625ulCj.hscall(hs_zddBounded26CK9v, hs_zddBounded126CK9w, hs_zddBounded226CK9x, hs_zddBounded326CK9y, hs_zddBounded426CK9z, hs_zddBounded526CK9A, hs_zddBounded626CK9B, hs_zddBounded726CK9C);
        };
        var hs_sat26CKv7 = new $hs.Thunk();
        hs_sat26CKv7.evaluateOnce = function () {
            return hs_zdcminBound625ulCI.hscall(hs_zddBounded26CK9v, hs_zddBounded126CK9w, hs_zddBounded226CK9x, hs_zddBounded326CK9y, hs_zddBounded426CK9z, hs_zddBounded526CK9A, hs_zddBounded626CK9B, hs_zddBounded726CK9C);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKv7, hs_sat26CKv8];
        return $res;
    };
    hs_zdcmaxBound725ulDp.evaluate = function (hs_zddBounded26CK9P, hs_zddBounded126CK9R, hs_zddBounded226CK9T, hs_zddBounded326CK9V, hs_zddBounded426CK9X, hs_zddBounded526CK9Z, hs_zddBounded626CKa1, hs_zddBounded726CKa3, hs_zddBounded826CKa5) {
        var hs_sat26CKva = new $hs.Thunk();
        hs_sat26CKva.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded826CKa5);
        };
        var hs_sat26CKvb = new $hs.Thunk();
        hs_sat26CKvb.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded726CKa3);
        };
        var hs_sat26CKvc = new $hs.Thunk();
        hs_sat26CKvc.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded626CKa1);
        };
        var hs_sat26CKvd = new $hs.Thunk();
        hs_sat26CKvd.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded526CK9Z);
        };
        var hs_sat26CKve = new $hs.Thunk();
        hs_sat26CKve.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded426CK9X);
        };
        var hs_sat26CKvf = new $hs.Thunk();
        hs_sat26CKvf.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded326CK9V);
        };
        var hs_sat26CKvg = new $hs.Thunk();
        hs_sat26CKvg.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded226CK9T);
        };
        var hs_sat26CKvh = new $hs.Thunk();
        hs_sat26CKvh.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded126CK9R);
        };
        var hs_sat26CKv9 = new $hs.Thunk();
        hs_sat26CKv9.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26CK9P);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKv9, hs_sat26CKvh, hs_sat26CKvg, hs_sat26CKvf, hs_sat26CKve, hs_sat26CKvd, hs_sat26CKvc, hs_sat26CKvb, hs_sat26CKva];
        return $res;
    };
    hs_zdcminBound725ulDR.evaluate = function (hs_zddBounded26CKah, hs_zddBounded126CKaj, hs_zddBounded226CKal, hs_zddBounded326CKan, hs_zddBounded426CKap, hs_zddBounded526CKar, hs_zddBounded626CKat, hs_zddBounded726CKav, hs_zddBounded826CKax) {
        var hs_sat26CKvj = new $hs.Thunk();
        hs_sat26CKvj.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded826CKax);
        };
        var hs_sat26CKvk = new $hs.Thunk();
        hs_sat26CKvk.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded726CKav);
        };
        var hs_sat26CKvl = new $hs.Thunk();
        hs_sat26CKvl.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded626CKat);
        };
        var hs_sat26CKvm = new $hs.Thunk();
        hs_sat26CKvm.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded526CKar);
        };
        var hs_sat26CKvn = new $hs.Thunk();
        hs_sat26CKvn.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded426CKap);
        };
        var hs_sat26CKvo = new $hs.Thunk();
        hs_sat26CKvo.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded326CKan);
        };
        var hs_sat26CKvp = new $hs.Thunk();
        hs_sat26CKvp.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded226CKal);
        };
        var hs_sat26CKvq = new $hs.Thunk();
        hs_sat26CKvq.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded126CKaj);
        };
        var hs_sat26CKvi = new $hs.Thunk();
        hs_sat26CKvi.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26CKah);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKvi, hs_sat26CKvq, hs_sat26CKvp, hs_sat26CKvo, hs_sat26CKvn, hs_sat26CKvm, hs_sat26CKvl, hs_sat26CKvk, hs_sat26CKvj];
        return $res;
    };
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddBounded26CKaI, hs_zddBounded126CKaJ, hs_zddBounded226CKaK, hs_zddBounded326CKaL, hs_zddBounded426CKaM, hs_zddBounded526CKaN, hs_zddBounded626CKaO, hs_zddBounded726CKaP, hs_zddBounded826CKaQ) {
        var hs_sat26CKvs = new $hs.Thunk();
        hs_sat26CKvs.evaluateOnce = function () {
            return hs_zdcmaxBound725ulDp.hscall(hs_zddBounded26CKaI, hs_zddBounded126CKaJ, hs_zddBounded226CKaK, hs_zddBounded326CKaL, hs_zddBounded426CKaM, hs_zddBounded526CKaN, hs_zddBounded626CKaO, hs_zddBounded726CKaP, hs_zddBounded826CKaQ);
        };
        var hs_sat26CKvr = new $hs.Thunk();
        hs_sat26CKvr.evaluateOnce = function () {
            return hs_zdcminBound725ulDR.hscall(hs_zddBounded26CKaI, hs_zddBounded126CKaJ, hs_zddBounded226CKaK, hs_zddBounded326CKaL, hs_zddBounded426CKaM, hs_zddBounded526CKaN, hs_zddBounded626CKaO, hs_zddBounded726CKaP, hs_zddBounded826CKaQ);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKvr, hs_sat26CKvs];
        return $res;
    };
    hs_zdcmaxBound825ulED.evaluate = function (hs_zddBounded26CKb4, hs_zddBounded126CKb6, hs_zddBounded226CKb8, hs_zddBounded326CKba, hs_zddBounded426CKbc, hs_zddBounded526CKbe, hs_zddBounded626CKbg, hs_zddBounded726CKbi, hs_zddBounded826CKbk, hs_zddBounded926CKbm) {
        var hs_sat26CKvu = new $hs.Thunk();
        hs_sat26CKvu.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded926CKbm);
        };
        var hs_sat26CKvv = new $hs.Thunk();
        hs_sat26CKvv.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded826CKbk);
        };
        var hs_sat26CKvw = new $hs.Thunk();
        hs_sat26CKvw.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded726CKbi);
        };
        var hs_sat26CKvx = new $hs.Thunk();
        hs_sat26CKvx.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded626CKbg);
        };
        var hs_sat26CKvy = new $hs.Thunk();
        hs_sat26CKvy.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded526CKbe);
        };
        var hs_sat26CKvz = new $hs.Thunk();
        hs_sat26CKvz.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded426CKbc);
        };
        var hs_sat26CKvA = new $hs.Thunk();
        hs_sat26CKvA.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded326CKba);
        };
        var hs_sat26CKvB = new $hs.Thunk();
        hs_sat26CKvB.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded226CKb8);
        };
        var hs_sat26CKvC = new $hs.Thunk();
        hs_sat26CKvC.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded126CKb6);
        };
        var hs_sat26CKvt = new $hs.Thunk();
        hs_sat26CKvt.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26CKb4);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKvt, hs_sat26CKvC, hs_sat26CKvB, hs_sat26CKvA, hs_sat26CKvz, hs_sat26CKvy, hs_sat26CKvx, hs_sat26CKvw, hs_sat26CKvv, hs_sat26CKvu];
        return $res;
    };
    hs_zdcminBound825ulF8.evaluate = function (hs_zddBounded26CKbz, hs_zddBounded126CKbB, hs_zddBounded226CKbD, hs_zddBounded326CKbF, hs_zddBounded426CKbH, hs_zddBounded526CKbJ, hs_zddBounded626CKbL, hs_zddBounded726CKbN, hs_zddBounded826CKbP, hs_zddBounded926CKbR) {
        var hs_sat26CKvE = new $hs.Thunk();
        hs_sat26CKvE.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded926CKbR);
        };
        var hs_sat26CKvF = new $hs.Thunk();
        hs_sat26CKvF.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded826CKbP);
        };
        var hs_sat26CKvG = new $hs.Thunk();
        hs_sat26CKvG.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded726CKbN);
        };
        var hs_sat26CKvH = new $hs.Thunk();
        hs_sat26CKvH.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded626CKbL);
        };
        var hs_sat26CKvI = new $hs.Thunk();
        hs_sat26CKvI.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded526CKbJ);
        };
        var hs_sat26CKvJ = new $hs.Thunk();
        hs_sat26CKvJ.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded426CKbH);
        };
        var hs_sat26CKvK = new $hs.Thunk();
        hs_sat26CKvK.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded326CKbF);
        };
        var hs_sat26CKvL = new $hs.Thunk();
        hs_sat26CKvL.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded226CKbD);
        };
        var hs_sat26CKvM = new $hs.Thunk();
        hs_sat26CKvM.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded126CKbB);
        };
        var hs_sat26CKvD = new $hs.Thunk();
        hs_sat26CKvD.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26CKbz);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKvD, hs_sat26CKvM, hs_sat26CKvL, hs_sat26CKvK, hs_sat26CKvJ, hs_sat26CKvI, hs_sat26CKvH, hs_sat26CKvG, hs_sat26CKvF, hs_sat26CKvE];
        return $res;
    };
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddBounded26CKc3, hs_zddBounded126CKc4, hs_zddBounded226CKc5, hs_zddBounded326CKc6, hs_zddBounded426CKc7, hs_zddBounded526CKc8, hs_zddBounded626CKc9, hs_zddBounded726CKca, hs_zddBounded826CKcb, hs_zddBounded926CKcc) {
        var hs_sat26CKvO = new $hs.Thunk();
        hs_sat26CKvO.evaluateOnce = function () {
            return hs_zdcmaxBound825ulED.hscall(hs_zddBounded26CKc3, hs_zddBounded126CKc4, hs_zddBounded226CKc5, hs_zddBounded326CKc6, hs_zddBounded426CKc7, hs_zddBounded526CKc8, hs_zddBounded626CKc9, hs_zddBounded726CKca, hs_zddBounded826CKcb, hs_zddBounded926CKcc);
        };
        var hs_sat26CKvN = new $hs.Thunk();
        hs_sat26CKvN.evaluateOnce = function () {
            return hs_zdcminBound825ulF8.hscall(hs_zddBounded26CKc3, hs_zddBounded126CKc4, hs_zddBounded226CKc5, hs_zddBounded326CKc6, hs_zddBounded426CKc7, hs_zddBounded526CKc8, hs_zddBounded626CKc9, hs_zddBounded726CKca, hs_zddBounded826CKcb, hs_zddBounded926CKcc);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKvN, hs_sat26CKvO];
        return $res;
    };
    hs_zdcmaxBound925ulFZ.evaluate = function (hs_zddBounded26CKcr, hs_zddBounded126CKct, hs_zddBounded226CKcv, hs_zddBounded326CKcx, hs_zddBounded426CKcz, hs_zddBounded526CKcB, hs_zddBounded626CKcD, hs_zddBounded726CKcF, hs_zddBounded826CKcH, hs_zddBounded926CKcJ, hs_zddBounded1026CKcL) {
        var hs_sat26CKvQ = new $hs.Thunk();
        hs_sat26CKvQ.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded1026CKcL);
        };
        var hs_sat26CKvR = new $hs.Thunk();
        hs_sat26CKvR.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded926CKcJ);
        };
        var hs_sat26CKvS = new $hs.Thunk();
        hs_sat26CKvS.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded826CKcH);
        };
        var hs_sat26CKvT = new $hs.Thunk();
        hs_sat26CKvT.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded726CKcF);
        };
        var hs_sat26CKvU = new $hs.Thunk();
        hs_sat26CKvU.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded626CKcD);
        };
        var hs_sat26CKvV = new $hs.Thunk();
        hs_sat26CKvV.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded526CKcB);
        };
        var hs_sat26CKvW = new $hs.Thunk();
        hs_sat26CKvW.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded426CKcz);
        };
        var hs_sat26CKvX = new $hs.Thunk();
        hs_sat26CKvX.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded326CKcx);
        };
        var hs_sat26CKvY = new $hs.Thunk();
        hs_sat26CKvY.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded226CKcv);
        };
        var hs_sat26CKvZ = new $hs.Thunk();
        hs_sat26CKvZ.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded126CKct);
        };
        var hs_sat26CKvP = new $hs.Thunk();
        hs_sat26CKvP.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26CKcr);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKvP, hs_sat26CKvZ, hs_sat26CKvY, hs_sat26CKvX, hs_sat26CKvW, hs_sat26CKvV, hs_sat26CKvU, hs_sat26CKvT, hs_sat26CKvS, hs_sat26CKvR, hs_sat26CKvQ];
        return $res;
    };
    hs_zdcminBound925ulGx.evaluate = function (hs_zddBounded26CKcZ, hs_zddBounded126CKd1, hs_zddBounded226CKd3, hs_zddBounded326CKd5, hs_zddBounded426CKd7, hs_zddBounded526CKd9, hs_zddBounded626CKdb, hs_zddBounded726CKdd, hs_zddBounded826CKdf, hs_zddBounded926CKdh, hs_zddBounded1026CKdj) {
        var hs_sat26CKw1 = new $hs.Thunk();
        hs_sat26CKw1.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded1026CKdj);
        };
        var hs_sat26CKw2 = new $hs.Thunk();
        hs_sat26CKw2.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded926CKdh);
        };
        var hs_sat26CKw3 = new $hs.Thunk();
        hs_sat26CKw3.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded826CKdf);
        };
        var hs_sat26CKw4 = new $hs.Thunk();
        hs_sat26CKw4.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded726CKdd);
        };
        var hs_sat26CKw5 = new $hs.Thunk();
        hs_sat26CKw5.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded626CKdb);
        };
        var hs_sat26CKw6 = new $hs.Thunk();
        hs_sat26CKw6.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded526CKd9);
        };
        var hs_sat26CKw7 = new $hs.Thunk();
        hs_sat26CKw7.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded426CKd7);
        };
        var hs_sat26CKw8 = new $hs.Thunk();
        hs_sat26CKw8.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded326CKd5);
        };
        var hs_sat26CKw9 = new $hs.Thunk();
        hs_sat26CKw9.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded226CKd3);
        };
        var hs_sat26CKwa = new $hs.Thunk();
        hs_sat26CKwa.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded126CKd1);
        };
        var hs_sat26CKw0 = new $hs.Thunk();
        hs_sat26CKw0.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26CKcZ);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKw0, hs_sat26CKwa, hs_sat26CKw9, hs_sat26CKw8, hs_sat26CKw7, hs_sat26CKw6, hs_sat26CKw5, hs_sat26CKw4, hs_sat26CKw3, hs_sat26CKw2, hs_sat26CKw1];
        return $res;
    };
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddBounded26CKdw, hs_zddBounded126CKdx, hs_zddBounded226CKdy, hs_zddBounded326CKdz, hs_zddBounded426CKdA, hs_zddBounded526CKdB, hs_zddBounded626CKdC, hs_zddBounded726CKdD, hs_zddBounded826CKdE, hs_zddBounded926CKdF, hs_zddBounded1026CKdG) {
        var hs_sat26CKwc = new $hs.Thunk();
        hs_sat26CKwc.evaluateOnce = function () {
            return hs_zdcmaxBound925ulFZ.hscall(hs_zddBounded26CKdw, hs_zddBounded126CKdx, hs_zddBounded226CKdy, hs_zddBounded326CKdz, hs_zddBounded426CKdA, hs_zddBounded526CKdB, hs_zddBounded626CKdC, hs_zddBounded726CKdD, hs_zddBounded826CKdE, hs_zddBounded926CKdF, hs_zddBounded1026CKdG);
        };
        var hs_sat26CKwb = new $hs.Thunk();
        hs_sat26CKwb.evaluateOnce = function () {
            return hs_zdcminBound925ulGx.hscall(hs_zddBounded26CKdw, hs_zddBounded126CKdx, hs_zddBounded226CKdy, hs_zddBounded326CKdz, hs_zddBounded426CKdA, hs_zddBounded526CKdB, hs_zddBounded626CKdC, hs_zddBounded726CKdD, hs_zddBounded826CKdE, hs_zddBounded926CKdF, hs_zddBounded1026CKdG);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKwb, hs_sat26CKwc];
        return $res;
    };
    hs_zdcmaxBound1025ulHt.evaluate = function (hs_zddBounded26CKdW, hs_zddBounded126CKdY, hs_zddBounded226CKe0, hs_zddBounded326CKe2, hs_zddBounded426CKe4, hs_zddBounded526CKe6, hs_zddBounded626CKe8, hs_zddBounded726CKea, hs_zddBounded826CKec, hs_zddBounded926CKee, hs_zddBounded1026CKeg, hs_zddBounded1126CKei) {
        var hs_sat26CKwe = new $hs.Thunk();
        hs_sat26CKwe.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded1126CKei);
        };
        var hs_sat26CKwf = new $hs.Thunk();
        hs_sat26CKwf.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded1026CKeg);
        };
        var hs_sat26CKwg = new $hs.Thunk();
        hs_sat26CKwg.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded926CKee);
        };
        var hs_sat26CKwh = new $hs.Thunk();
        hs_sat26CKwh.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded826CKec);
        };
        var hs_sat26CKwi = new $hs.Thunk();
        hs_sat26CKwi.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded726CKea);
        };
        var hs_sat26CKwj = new $hs.Thunk();
        hs_sat26CKwj.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded626CKe8);
        };
        var hs_sat26CKwk = new $hs.Thunk();
        hs_sat26CKwk.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded526CKe6);
        };
        var hs_sat26CKwl = new $hs.Thunk();
        hs_sat26CKwl.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded426CKe4);
        };
        var hs_sat26CKwm = new $hs.Thunk();
        hs_sat26CKwm.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded326CKe2);
        };
        var hs_sat26CKwn = new $hs.Thunk();
        hs_sat26CKwn.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded226CKe0);
        };
        var hs_sat26CKwo = new $hs.Thunk();
        hs_sat26CKwo.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded126CKdY);
        };
        var hs_sat26CKwd = new $hs.Thunk();
        hs_sat26CKwd.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26CKdW);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKwd, hs_sat26CKwo, hs_sat26CKwn, hs_sat26CKwm, hs_sat26CKwl, hs_sat26CKwk, hs_sat26CKwj, hs_sat26CKwi, hs_sat26CKwh, hs_sat26CKwg, hs_sat26CKwf, hs_sat26CKwe];
        return $res;
    };
    hs_zdcminBound1025ulI4.evaluate = function (hs_zddBounded26CKex, hs_zddBounded126CKez, hs_zddBounded226CKeB, hs_zddBounded326CKeD, hs_zddBounded426CKeF, hs_zddBounded526CKeH, hs_zddBounded626CKeJ, hs_zddBounded726CKeL, hs_zddBounded826CKeN, hs_zddBounded926CKeP, hs_zddBounded1026CKeR, hs_zddBounded1126CKeT) {
        var hs_sat26CKwq = new $hs.Thunk();
        hs_sat26CKwq.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded1126CKeT);
        };
        var hs_sat26CKwr = new $hs.Thunk();
        hs_sat26CKwr.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded1026CKeR);
        };
        var hs_sat26CKws = new $hs.Thunk();
        hs_sat26CKws.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded926CKeP);
        };
        var hs_sat26CKwt = new $hs.Thunk();
        hs_sat26CKwt.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded826CKeN);
        };
        var hs_sat26CKwu = new $hs.Thunk();
        hs_sat26CKwu.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded726CKeL);
        };
        var hs_sat26CKwv = new $hs.Thunk();
        hs_sat26CKwv.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded626CKeJ);
        };
        var hs_sat26CKww = new $hs.Thunk();
        hs_sat26CKww.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded526CKeH);
        };
        var hs_sat26CKwx = new $hs.Thunk();
        hs_sat26CKwx.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded426CKeF);
        };
        var hs_sat26CKwy = new $hs.Thunk();
        hs_sat26CKwy.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded326CKeD);
        };
        var hs_sat26CKwz = new $hs.Thunk();
        hs_sat26CKwz.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded226CKeB);
        };
        var hs_sat26CKwA = new $hs.Thunk();
        hs_sat26CKwA.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded126CKez);
        };
        var hs_sat26CKwp = new $hs.Thunk();
        hs_sat26CKwp.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26CKex);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKwp, hs_sat26CKwA, hs_sat26CKwz, hs_sat26CKwy, hs_sat26CKwx, hs_sat26CKww, hs_sat26CKwv, hs_sat26CKwu, hs_sat26CKwt, hs_sat26CKws, hs_sat26CKwr, hs_sat26CKwq];
        return $res;
    };
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddBounded26CKf7, hs_zddBounded126CKf8, hs_zddBounded226CKf9, hs_zddBounded326CKfa, hs_zddBounded426CKfb, hs_zddBounded526CKfc, hs_zddBounded626CKfd, hs_zddBounded726CKfe, hs_zddBounded826CKff, hs_zddBounded926CKfg, hs_zddBounded1026CKfh, hs_zddBounded1126CKfi) {
        var hs_sat26CKwC = new $hs.Thunk();
        hs_sat26CKwC.evaluateOnce = function () {
            return hs_zdcmaxBound1025ulHt.hscall(hs_zddBounded26CKf7, hs_zddBounded126CKf8, hs_zddBounded226CKf9, hs_zddBounded326CKfa, hs_zddBounded426CKfb, hs_zddBounded526CKfc, hs_zddBounded626CKfd, hs_zddBounded726CKfe, hs_zddBounded826CKff, hs_zddBounded926CKfg, hs_zddBounded1026CKfh, hs_zddBounded1126CKfi);
        };
        var hs_sat26CKwB = new $hs.Thunk();
        hs_sat26CKwB.evaluateOnce = function () {
            return hs_zdcminBound1025ulI4.hscall(hs_zddBounded26CKf7, hs_zddBounded126CKf8, hs_zddBounded226CKf9, hs_zddBounded326CKfa, hs_zddBounded426CKfb, hs_zddBounded526CKfc, hs_zddBounded626CKfd, hs_zddBounded726CKfe, hs_zddBounded826CKff, hs_zddBounded926CKfg, hs_zddBounded1026CKfh, hs_zddBounded1126CKfi);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKwB, hs_sat26CKwC];
        return $res;
    };
    hs_zdcmaxBound1125ulJ5.evaluate = function (hs_zddBounded26CKfz, hs_zddBounded126CKfB, hs_zddBounded226CKfD, hs_zddBounded326CKfF, hs_zddBounded426CKfH, hs_zddBounded526CKfJ, hs_zddBounded626CKfL, hs_zddBounded726CKfN, hs_zddBounded826CKfP, hs_zddBounded926CKfR, hs_zddBounded1026CKfT, hs_zddBounded1126CKfV, hs_zddBounded1226CKfX) {
        var hs_sat26CKwE = new $hs.Thunk();
        hs_sat26CKwE.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded1226CKfX);
        };
        var hs_sat26CKwF = new $hs.Thunk();
        hs_sat26CKwF.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded1126CKfV);
        };
        var hs_sat26CKwG = new $hs.Thunk();
        hs_sat26CKwG.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded1026CKfT);
        };
        var hs_sat26CKwH = new $hs.Thunk();
        hs_sat26CKwH.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded926CKfR);
        };
        var hs_sat26CKwI = new $hs.Thunk();
        hs_sat26CKwI.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded826CKfP);
        };
        var hs_sat26CKwJ = new $hs.Thunk();
        hs_sat26CKwJ.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded726CKfN);
        };
        var hs_sat26CKwK = new $hs.Thunk();
        hs_sat26CKwK.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded626CKfL);
        };
        var hs_sat26CKwL = new $hs.Thunk();
        hs_sat26CKwL.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded526CKfJ);
        };
        var hs_sat26CKwM = new $hs.Thunk();
        hs_sat26CKwM.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded426CKfH);
        };
        var hs_sat26CKwN = new $hs.Thunk();
        hs_sat26CKwN.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded326CKfF);
        };
        var hs_sat26CKwO = new $hs.Thunk();
        hs_sat26CKwO.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded226CKfD);
        };
        var hs_sat26CKwP = new $hs.Thunk();
        hs_sat26CKwP.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded126CKfB);
        };
        var hs_sat26CKwD = new $hs.Thunk();
        hs_sat26CKwD.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26CKfz);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKwD, hs_sat26CKwP, hs_sat26CKwO, hs_sat26CKwN, hs_sat26CKwM, hs_sat26CKwL, hs_sat26CKwK, hs_sat26CKwJ, hs_sat26CKwI, hs_sat26CKwH, hs_sat26CKwG, hs_sat26CKwF, hs_sat26CKwE];
        return $res;
    };
    hs_zdcminBound1125ulJJ.evaluate = function (hs_zddBounded26CKgd, hs_zddBounded126CKgf, hs_zddBounded226CKgh, hs_zddBounded326CKgj, hs_zddBounded426CKgl, hs_zddBounded526CKgn, hs_zddBounded626CKgp, hs_zddBounded726CKgr, hs_zddBounded826CKgt, hs_zddBounded926CKgv, hs_zddBounded1026CKgx, hs_zddBounded1126CKgz, hs_zddBounded1226CKgB) {
        var hs_sat26CKwR = new $hs.Thunk();
        hs_sat26CKwR.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded1226CKgB);
        };
        var hs_sat26CKwS = new $hs.Thunk();
        hs_sat26CKwS.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded1126CKgz);
        };
        var hs_sat26CKwT = new $hs.Thunk();
        hs_sat26CKwT.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded1026CKgx);
        };
        var hs_sat26CKwU = new $hs.Thunk();
        hs_sat26CKwU.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded926CKgv);
        };
        var hs_sat26CKwV = new $hs.Thunk();
        hs_sat26CKwV.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded826CKgt);
        };
        var hs_sat26CKwW = new $hs.Thunk();
        hs_sat26CKwW.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded726CKgr);
        };
        var hs_sat26CKwX = new $hs.Thunk();
        hs_sat26CKwX.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded626CKgp);
        };
        var hs_sat26CKwY = new $hs.Thunk();
        hs_sat26CKwY.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded526CKgn);
        };
        var hs_sat26CKwZ = new $hs.Thunk();
        hs_sat26CKwZ.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded426CKgl);
        };
        var hs_sat26CKx0 = new $hs.Thunk();
        hs_sat26CKx0.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded326CKgj);
        };
        var hs_sat26CKx1 = new $hs.Thunk();
        hs_sat26CKx1.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded226CKgh);
        };
        var hs_sat26CKx2 = new $hs.Thunk();
        hs_sat26CKx2.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded126CKgf);
        };
        var hs_sat26CKwQ = new $hs.Thunk();
        hs_sat26CKwQ.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26CKgd);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKwQ, hs_sat26CKx2, hs_sat26CKx1, hs_sat26CKx0, hs_sat26CKwZ, hs_sat26CKwY, hs_sat26CKwX, hs_sat26CKwW, hs_sat26CKwV, hs_sat26CKwU, hs_sat26CKwT, hs_sat26CKwS, hs_sat26CKwR];
        return $res;
    };
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddBounded26CKgQ, hs_zddBounded126CKgR, hs_zddBounded226CKgS, hs_zddBounded326CKgT, hs_zddBounded426CKgU, hs_zddBounded526CKgV, hs_zddBounded626CKgW, hs_zddBounded726CKgX, hs_zddBounded826CKgY, hs_zddBounded926CKgZ, hs_zddBounded1026CKh0, hs_zddBounded1126CKh1, hs_zddBounded1226CKh2) {
        var hs_sat26CKx4 = new $hs.Thunk();
        hs_sat26CKx4.evaluateOnce = function () {
            return hs_zdcmaxBound1125ulJ5.hscall(hs_zddBounded26CKgQ, hs_zddBounded126CKgR, hs_zddBounded226CKgS, hs_zddBounded326CKgT, hs_zddBounded426CKgU, hs_zddBounded526CKgV, hs_zddBounded626CKgW, hs_zddBounded726CKgX, hs_zddBounded826CKgY, hs_zddBounded926CKgZ, hs_zddBounded1026CKh0, hs_zddBounded1126CKh1, hs_zddBounded1226CKh2);
        };
        var hs_sat26CKx3 = new $hs.Thunk();
        hs_sat26CKx3.evaluateOnce = function () {
            return hs_zdcminBound1125ulJJ.hscall(hs_zddBounded26CKgQ, hs_zddBounded126CKgR, hs_zddBounded226CKgS, hs_zddBounded326CKgT, hs_zddBounded426CKgU, hs_zddBounded526CKgV, hs_zddBounded626CKgW, hs_zddBounded726CKgX, hs_zddBounded826CKgY, hs_zddBounded926CKgZ, hs_zddBounded1026CKh0, hs_zddBounded1126CKh1, hs_zddBounded1226CKh2);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKx3, hs_sat26CKx4];
        return $res;
    };
    hs_zdcmaxBound1225ulKP.evaluate = function (hs_zddBounded26CKhk, hs_zddBounded126CKhm, hs_zddBounded226CKho, hs_zddBounded326CKhq, hs_zddBounded426CKhs, hs_zddBounded526CKhu, hs_zddBounded626CKhw, hs_zddBounded726CKhy, hs_zddBounded826CKhA, hs_zddBounded926CKhC, hs_zddBounded1026CKhE, hs_zddBounded1126CKhG, hs_zddBounded1226CKhI, hs_zddBounded1326CKhK) {
        var hs_sat26CKx6 = new $hs.Thunk();
        hs_sat26CKx6.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded1326CKhK);
        };
        var hs_sat26CKx7 = new $hs.Thunk();
        hs_sat26CKx7.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded1226CKhI);
        };
        var hs_sat26CKx8 = new $hs.Thunk();
        hs_sat26CKx8.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded1126CKhG);
        };
        var hs_sat26CKx9 = new $hs.Thunk();
        hs_sat26CKx9.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded1026CKhE);
        };
        var hs_sat26CKxa = new $hs.Thunk();
        hs_sat26CKxa.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded926CKhC);
        };
        var hs_sat26CKxb = new $hs.Thunk();
        hs_sat26CKxb.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded826CKhA);
        };
        var hs_sat26CKxc = new $hs.Thunk();
        hs_sat26CKxc.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded726CKhy);
        };
        var hs_sat26CKxd = new $hs.Thunk();
        hs_sat26CKxd.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded626CKhw);
        };
        var hs_sat26CKxe = new $hs.Thunk();
        hs_sat26CKxe.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded526CKhu);
        };
        var hs_sat26CKxf = new $hs.Thunk();
        hs_sat26CKxf.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded426CKhs);
        };
        var hs_sat26CKxg = new $hs.Thunk();
        hs_sat26CKxg.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded326CKhq);
        };
        var hs_sat26CKxh = new $hs.Thunk();
        hs_sat26CKxh.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded226CKho);
        };
        var hs_sat26CKxi = new $hs.Thunk();
        hs_sat26CKxi.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded126CKhm);
        };
        var hs_sat26CKx5 = new $hs.Thunk();
        hs_sat26CKx5.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26CKhk);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKx5, hs_sat26CKxi, hs_sat26CKxh, hs_sat26CKxg, hs_sat26CKxf, hs_sat26CKxe, hs_sat26CKxd, hs_sat26CKxc, hs_sat26CKxb, hs_sat26CKxa, hs_sat26CKx9, hs_sat26CKx8, hs_sat26CKx7, hs_sat26CKx6];
        return $res;
    };
    hs_zdcminBound1225ulLw.evaluate = function (hs_zddBounded26CKi1, hs_zddBounded126CKi3, hs_zddBounded226CKi5, hs_zddBounded326CKi7, hs_zddBounded426CKi9, hs_zddBounded526CKib, hs_zddBounded626CKid, hs_zddBounded726CKif, hs_zddBounded826CKih, hs_zddBounded926CKij, hs_zddBounded1026CKil, hs_zddBounded1126CKin, hs_zddBounded1226CKip, hs_zddBounded1326CKir) {
        var hs_sat26CKxk = new $hs.Thunk();
        hs_sat26CKxk.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded1326CKir);
        };
        var hs_sat26CKxl = new $hs.Thunk();
        hs_sat26CKxl.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded1226CKip);
        };
        var hs_sat26CKxm = new $hs.Thunk();
        hs_sat26CKxm.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded1126CKin);
        };
        var hs_sat26CKxn = new $hs.Thunk();
        hs_sat26CKxn.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded1026CKil);
        };
        var hs_sat26CKxo = new $hs.Thunk();
        hs_sat26CKxo.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded926CKij);
        };
        var hs_sat26CKxp = new $hs.Thunk();
        hs_sat26CKxp.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded826CKih);
        };
        var hs_sat26CKxq = new $hs.Thunk();
        hs_sat26CKxq.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded726CKif);
        };
        var hs_sat26CKxr = new $hs.Thunk();
        hs_sat26CKxr.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded626CKid);
        };
        var hs_sat26CKxs = new $hs.Thunk();
        hs_sat26CKxs.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded526CKib);
        };
        var hs_sat26CKxt = new $hs.Thunk();
        hs_sat26CKxt.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded426CKi9);
        };
        var hs_sat26CKxu = new $hs.Thunk();
        hs_sat26CKxu.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded326CKi7);
        };
        var hs_sat26CKxv = new $hs.Thunk();
        hs_sat26CKxv.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded226CKi5);
        };
        var hs_sat26CKxw = new $hs.Thunk();
        hs_sat26CKxw.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded126CKi3);
        };
        var hs_sat26CKxj = new $hs.Thunk();
        hs_sat26CKxj.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26CKi1);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKxj, hs_sat26CKxw, hs_sat26CKxv, hs_sat26CKxu, hs_sat26CKxt, hs_sat26CKxs, hs_sat26CKxr, hs_sat26CKxq, hs_sat26CKxp, hs_sat26CKxo, hs_sat26CKxn, hs_sat26CKxm, hs_sat26CKxl, hs_sat26CKxk];
        return $res;
    };
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddBounded26CKiH, hs_zddBounded126CKiI, hs_zddBounded226CKiJ, hs_zddBounded326CKiK, hs_zddBounded426CKiL, hs_zddBounded526CKiM, hs_zddBounded626CKiN, hs_zddBounded726CKiO, hs_zddBounded826CKiP, hs_zddBounded926CKiQ, hs_zddBounded1026CKiR, hs_zddBounded1126CKiS, hs_zddBounded1226CKiT, hs_zddBounded1326CKiU) {
        var hs_sat26CKxy = new $hs.Thunk();
        hs_sat26CKxy.evaluateOnce = function () {
            return hs_zdcmaxBound1225ulKP.hscall(hs_zddBounded26CKiH, hs_zddBounded126CKiI, hs_zddBounded226CKiJ, hs_zddBounded326CKiK, hs_zddBounded426CKiL, hs_zddBounded526CKiM, hs_zddBounded626CKiN, hs_zddBounded726CKiO, hs_zddBounded826CKiP, hs_zddBounded926CKiQ, hs_zddBounded1026CKiR, hs_zddBounded1126CKiS, hs_zddBounded1226CKiT, hs_zddBounded1326CKiU);
        };
        var hs_sat26CKxx = new $hs.Thunk();
        hs_sat26CKxx.evaluateOnce = function () {
            return hs_zdcminBound1225ulLw.hscall(hs_zddBounded26CKiH, hs_zddBounded126CKiI, hs_zddBounded226CKiJ, hs_zddBounded326CKiK, hs_zddBounded426CKiL, hs_zddBounded526CKiM, hs_zddBounded626CKiN, hs_zddBounded726CKiO, hs_zddBounded826CKiP, hs_zddBounded926CKiQ, hs_zddBounded1026CKiR, hs_zddBounded1126CKiS, hs_zddBounded1226CKiT, hs_zddBounded1326CKiU);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKxx, hs_sat26CKxy];
        return $res;
    };
    hs_zdcmaxBound1325ulMH.evaluate = function (hs_zddBounded26CKjd, hs_zddBounded126CKjf, hs_zddBounded226CKjh, hs_zddBounded326CKjj, hs_zddBounded426CKjl, hs_zddBounded526CKjn, hs_zddBounded626CKjp, hs_zddBounded726CKjr, hs_zddBounded826CKjt, hs_zddBounded926CKjv, hs_zddBounded1026CKjx, hs_zddBounded1126CKjz, hs_zddBounded1226CKjB, hs_zddBounded1326CKjD, hs_zddBounded1426CKjF) {
        var hs_sat26CKxA = new $hs.Thunk();
        hs_sat26CKxA.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded1426CKjF);
        };
        var hs_sat26CKxB = new $hs.Thunk();
        hs_sat26CKxB.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded1326CKjD);
        };
        var hs_sat26CKxC = new $hs.Thunk();
        hs_sat26CKxC.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded1226CKjB);
        };
        var hs_sat26CKxD = new $hs.Thunk();
        hs_sat26CKxD.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded1126CKjz);
        };
        var hs_sat26CKxE = new $hs.Thunk();
        hs_sat26CKxE.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded1026CKjx);
        };
        var hs_sat26CKxF = new $hs.Thunk();
        hs_sat26CKxF.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded926CKjv);
        };
        var hs_sat26CKxG = new $hs.Thunk();
        hs_sat26CKxG.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded826CKjt);
        };
        var hs_sat26CKxH = new $hs.Thunk();
        hs_sat26CKxH.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded726CKjr);
        };
        var hs_sat26CKxI = new $hs.Thunk();
        hs_sat26CKxI.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded626CKjp);
        };
        var hs_sat26CKxJ = new $hs.Thunk();
        hs_sat26CKxJ.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded526CKjn);
        };
        var hs_sat26CKxK = new $hs.Thunk();
        hs_sat26CKxK.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded426CKjl);
        };
        var hs_sat26CKxL = new $hs.Thunk();
        hs_sat26CKxL.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded326CKjj);
        };
        var hs_sat26CKxM = new $hs.Thunk();
        hs_sat26CKxM.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded226CKjh);
        };
        var hs_sat26CKxN = new $hs.Thunk();
        hs_sat26CKxN.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded126CKjf);
        };
        var hs_sat26CKxz = new $hs.Thunk();
        hs_sat26CKxz.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26CKjd);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKxz, hs_sat26CKxN, hs_sat26CKxM, hs_sat26CKxL, hs_sat26CKxK, hs_sat26CKxJ, hs_sat26CKxI, hs_sat26CKxH, hs_sat26CKxG, hs_sat26CKxF, hs_sat26CKxE, hs_sat26CKxD, hs_sat26CKxC, hs_sat26CKxB, hs_sat26CKxA];
        return $res;
    };
    hs_zdcminBound1325ulNr.evaluate = function (hs_zddBounded26CKjX, hs_zddBounded126CKjZ, hs_zddBounded226CKk1, hs_zddBounded326CKk3, hs_zddBounded426CKk5, hs_zddBounded526CKk7, hs_zddBounded626CKk9, hs_zddBounded726CKkb, hs_zddBounded826CKkd, hs_zddBounded926CKkf, hs_zddBounded1026CKkh, hs_zddBounded1126CKkj, hs_zddBounded1226CKkl, hs_zddBounded1326CKkn, hs_zddBounded1426CKkp) {
        var hs_sat26CKxP = new $hs.Thunk();
        hs_sat26CKxP.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded1426CKkp);
        };
        var hs_sat26CKxQ = new $hs.Thunk();
        hs_sat26CKxQ.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded1326CKkn);
        };
        var hs_sat26CKxR = new $hs.Thunk();
        hs_sat26CKxR.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded1226CKkl);
        };
        var hs_sat26CKxS = new $hs.Thunk();
        hs_sat26CKxS.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded1126CKkj);
        };
        var hs_sat26CKxT = new $hs.Thunk();
        hs_sat26CKxT.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded1026CKkh);
        };
        var hs_sat26CKxU = new $hs.Thunk();
        hs_sat26CKxU.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded926CKkf);
        };
        var hs_sat26CKxV = new $hs.Thunk();
        hs_sat26CKxV.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded826CKkd);
        };
        var hs_sat26CKxW = new $hs.Thunk();
        hs_sat26CKxW.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded726CKkb);
        };
        var hs_sat26CKxX = new $hs.Thunk();
        hs_sat26CKxX.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded626CKk9);
        };
        var hs_sat26CKxY = new $hs.Thunk();
        hs_sat26CKxY.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded526CKk7);
        };
        var hs_sat26CKxZ = new $hs.Thunk();
        hs_sat26CKxZ.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded426CKk5);
        };
        var hs_sat26CKy0 = new $hs.Thunk();
        hs_sat26CKy0.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded326CKk3);
        };
        var hs_sat26CKy1 = new $hs.Thunk();
        hs_sat26CKy1.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded226CKk1);
        };
        var hs_sat26CKy2 = new $hs.Thunk();
        hs_sat26CKy2.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded126CKjZ);
        };
        var hs_sat26CKxO = new $hs.Thunk();
        hs_sat26CKxO.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26CKjX);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKxO, hs_sat26CKy2, hs_sat26CKy1, hs_sat26CKy0, hs_sat26CKxZ, hs_sat26CKxY, hs_sat26CKxX, hs_sat26CKxW, hs_sat26CKxV, hs_sat26CKxU, hs_sat26CKxT, hs_sat26CKxS, hs_sat26CKxR, hs_sat26CKxQ, hs_sat26CKxP];
        return $res;
    };
    this.hs_zdfBoundedZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddBounded26CKkG, hs_zddBounded126CKkH, hs_zddBounded226CKkI, hs_zddBounded326CKkJ, hs_zddBounded426CKkK, hs_zddBounded526CKkL, hs_zddBounded626CKkM, hs_zddBounded726CKkN, hs_zddBounded826CKkO, hs_zddBounded926CKkP, hs_zddBounded1026CKkQ, hs_zddBounded1126CKkR, hs_zddBounded1226CKkS, hs_zddBounded1326CKkT, hs_zddBounded1426CKkU) {
        var hs_sat26CKy4 = new $hs.Thunk();
        hs_sat26CKy4.evaluateOnce = function () {
            return hs_zdcmaxBound1325ulMH.hscall(hs_zddBounded26CKkG, hs_zddBounded126CKkH, hs_zddBounded226CKkI, hs_zddBounded326CKkJ, hs_zddBounded426CKkK, hs_zddBounded526CKkL, hs_zddBounded626CKkM, hs_zddBounded726CKkN, hs_zddBounded826CKkO, hs_zddBounded926CKkP, hs_zddBounded1026CKkQ, hs_zddBounded1126CKkR, hs_zddBounded1226CKkS, hs_zddBounded1326CKkT, hs_zddBounded1426CKkU);
        };
        var hs_sat26CKy3 = new $hs.Thunk();
        hs_sat26CKy3.evaluateOnce = function () {
            return hs_zdcminBound1325ulNr.hscall(hs_zddBounded26CKkG, hs_zddBounded126CKkH, hs_zddBounded226CKkI, hs_zddBounded326CKkJ, hs_zddBounded426CKkK, hs_zddBounded526CKkL, hs_zddBounded626CKkM, hs_zddBounded726CKkN, hs_zddBounded826CKkO, hs_zddBounded926CKkP, hs_zddBounded1026CKkQ, hs_zddBounded1126CKkR, hs_zddBounded1226CKkS, hs_zddBounded1326CKkT, hs_zddBounded1426CKkU);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKy3, hs_sat26CKy4];
        return $res;
    };
    this.hs_zdfBoundedBool.data = [$hs.modules.GHCziTypes.hs_False, $hs.modules.GHCziTypes.hs_True];
    hs_zdcfromEnum125ulOH.evaluate = function (hs_ds26CKkZ) {
        var hs_wild26CKy5 = hs_ds26CKkZ;
        if (hs_ds26CKkZ.notEvaluated) {
            hs_wild26CKy5 = hs_ds26CKkZ.hscall();
        }
        switch (hs_wild26CKy5.tag) {
        case 1:
            if ($hs.modules.GHCziBase.hs_zzeroInt.notEvaluated) {
                return $hs.modules.GHCziBase.hs_zzeroInt.hscall();
            } else {
                return $hs.modules.GHCziBase.hs_zzeroInt;
            }
        case 2:
            if ($hs.modules.GHCziBase.hs_oneInt.notEvaluated) {
                return $hs.modules.GHCziBase.hs_oneInt.hscall();
            } else {
                return $hs.modules.GHCziBase.hs_oneInt;
            }
        }
    };
    hs_zdctoEnum125ulOL.evaluate = function (hs_n26CKl3) {
        var hs_wild26CKy6 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_n26CKl3, $hs.modules.GHCziBase.hs_zzeroInt);
        switch (hs_wild26CKy6.tag) {
        case 1:
            var hs_wild126CKy7 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_n26CKl3, $hs.modules.GHCziBase.hs_oneInt);
            switch (hs_wild126CKy7.tag) {
            case 1:
                var hs_sat26CKy8 = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prelude.Enum.Bool.toEnum: bad argument\x00");
                return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CKy8);
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
    hs_zdcpred125ulOR.evaluate = function (hs_ds26CKl9) {
        var hs_wild26CKy9 = hs_ds26CKl9;
        if (hs_ds26CKl9.notEvaluated) {
            hs_wild26CKy9 = hs_ds26CKl9.hscall();
        }
        switch (hs_wild26CKy9.tag) {
        case 1:
            var hs_sat26CKya = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prelude.Enum.Bool.pred: bad argument\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CKya);
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdcsucc125ulOW.evaluate = function (hs_ds26CKle) {
        var hs_wild26CKyb = hs_ds26CKle;
        if (hs_ds26CKle.notEvaluated) {
            hs_wild26CKyb = hs_ds26CKle.hscall();
        }
        switch (hs_wild26CKyb.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_sat26CKyc = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prelude.Enum.Bool.succ: bad argument\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CKyc);
        }
    };
    this.hs_zdfBoundedOrdering.data = [$hs.modules.GHCziOrdering.hs_LT, $hs.modules.GHCziOrdering.hs_GT];
    hs_zdcfromEnum225ulP1.evaluate = function (hs_ds26CKlj) {
        var hs_wild26CKyd = hs_ds26CKlj;
        if (hs_ds26CKlj.notEvaluated) {
            hs_wild26CKyd = hs_ds26CKlj.hscall();
        }
        switch (hs_wild26CKyd.tag) {
        case 1:
            if ($hs.modules.GHCziBase.hs_zzeroInt.notEvaluated) {
                return $hs.modules.GHCziBase.hs_zzeroInt.hscall();
            } else {
                return $hs.modules.GHCziBase.hs_zzeroInt;
            }
        case 2:
            if ($hs.modules.GHCziBase.hs_oneInt.notEvaluated) {
                return $hs.modules.GHCziBase.hs_oneInt.hscall();
            } else {
                return $hs.modules.GHCziBase.hs_oneInt;
            }
        case 3:
            if ($hs.modules.GHCziBase.hs_twoInt.notEvaluated) {
                return $hs.modules.GHCziBase.hs_twoInt.hscall();
            } else {
                return $hs.modules.GHCziBase.hs_twoInt;
            }
        }
    };
    hs_zdctoEnum225ulP5.evaluate = function (hs_n26CKln) {
        var hs_wild26CKye = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_n26CKln, $hs.modules.GHCziBase.hs_zzeroInt);
        switch (hs_wild26CKye.tag) {
        case 1:
            var hs_wild126CKyf = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_n26CKln, $hs.modules.GHCziBase.hs_oneInt);
            switch (hs_wild126CKyf.tag) {
            case 1:
                var hs_wild226CKyg = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_n26CKln, $hs.modules.GHCziBase.hs_twoInt);
                switch (hs_wild226CKyg.tag) {
                case 1:
                    var hs_sat26CKyh = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prelude.Enum.Ordering.toEnum: bad argument\x00");
                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CKyh);
                case 2:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                }
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
    hs_zdcpred225ulPc.evaluate = function (hs_ds26CKlu) {
        var hs_wild26CKyi = hs_ds26CKlu;
        if (hs_ds26CKlu.notEvaluated) {
            hs_wild26CKyi = hs_ds26CKlu.hscall();
        }
        switch (hs_wild26CKyi.tag) {
        case 1:
            var hs_sat26CKyj = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prelude.Enum.Ordering.pred: bad argument\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CKyj);
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdcsucc225ulPh.evaluate = function (hs_ds26CKlz) {
        var hs_wild26CKyk = hs_ds26CKlz;
        if (hs_ds26CKlz.notEvaluated) {
            hs_wild26CKyk = hs_ds26CKlz.hscall();
        }
        switch (hs_wild26CKyk.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        case 3:
            var hs_sat26CKyl = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prelude.Enum.Ordering.succ: bad argument\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CKyl);
        }
    };
    hs_zdcmaxBound1425ulPm.data = ["\uffff"];
    hs_zdcminBound1425ulPn.data = ["\x00"];
    this.hs_zdfBoundedChar.data = [hs_zdcminBound1425ulPn, hs_zdcmaxBound1425ulPm];
    hs_zdcenumFromThenTo125ulPo.evaluate = function (hs_eta26CKlI, hs_eta126CKlL, hs_eta226CKlO) {
        var hs_wild26CKyo = hs_eta26CKlI;
        if (hs_eta26CKlI.notEvaluated) {
            hs_wild26CKyo = hs_eta26CKlI.hscall();
        }
        var hs_x126CKlU = hs_wild26CKyo.data[0];
        var hs_wild126CKyn = hs_eta126CKlL;
        if (hs_eta126CKlL.notEvaluated) {
            hs_wild126CKyn = hs_eta126CKlL.hscall();
        }
        var hs_x226CKlS = hs_wild126CKyn.data[0];
        var hs_wild226CKym = hs_eta226CKlO;
        if (hs_eta226CKlO.notEvaluated) {
            hs_wild226CKym = hs_eta226CKlO.hscall();
        }
        var hs_y26CKm1 = hs_wild226CKym.data[0];
        var hs_sat26CKyp = hs_x126CKlU.charCodeAt(0);
        var hs_sat26CKyq = hs_x226CKlS.charCodeAt(0);
        var hs_delta26CKlW = ($hs.Int.addCarry(hs_sat26CKyq, ~hs_sat26CKyp, 1))[0];
        var hs_wild326CKyr = hs_delta26CKlW >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild326CKyr.tag) {
        case 1:
            var hs_gozudn26CKm6 = new $hs.Func(1);
            hs_gozudn26CKm6.evaluate = function (hs_x26CKm0) {
                var hs_sat26CKyA = hs_y26CKm1.charCodeAt(0);
                var hs_wild426CKyB = hs_x26CKm0 < hs_sat26CKyA ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild426CKyB.tag) {
                case 1:
                    var hs_sat26CKyD = new $hs.Thunk();
                    hs_sat26CKyD.evaluateOnce = function () {
                        var hs_sat26CKyF = ($hs.Int.addCarry(hs_x26CKm0, hs_delta26CKlW, 0))[0];
                        return hs_gozudn26CKm6.hscall(hs_sat26CKyF);
                    };
                    var hs_sat26CKyE = String.fromCharCode(hs_x26CKm0);
                    var hs_sat26CKyC = new $hs.Data(1);
                    hs_sat26CKyC.data = [hs_sat26CKyE];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26CKyC, hs_sat26CKyD];
                    return $res;
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            };
            var hs_sat26CKyz = hs_x126CKlU.charCodeAt(0);
            return hs_gozudn26CKm6.hscall(hs_sat26CKyz);
        case 2:
            var hs_gozuup26CKmh = new $hs.Func(1);
            hs_gozuup26CKmh.evaluate = function (hs_x26CKmc) {
                var hs_sat26CKyt = hs_y26CKm1.charCodeAt(0);
                var hs_wild426CKyu = hs_x26CKmc > hs_sat26CKyt ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild426CKyu.tag) {
                case 1:
                    var hs_sat26CKyw = new $hs.Thunk();
                    hs_sat26CKyw.evaluateOnce = function () {
                        var hs_sat26CKyy = ($hs.Int.addCarry(hs_x26CKmc, hs_delta26CKlW, 0))[0];
                        return hs_gozuup26CKmh.hscall(hs_sat26CKyy);
                    };
                    var hs_sat26CKyx = String.fromCharCode(hs_x26CKmc);
                    var hs_sat26CKyv = new $hs.Data(1);
                    hs_sat26CKyv.data = [hs_sat26CKyx];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26CKyv, hs_sat26CKyw];
                    return $res;
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            };
            var hs_sat26CKys = hs_x126CKlU.charCodeAt(0);
            return hs_gozuup26CKmh.hscall(hs_sat26CKys);
        }
    };
    hs_zdcenumFromTo125ulQ5.evaluate = function (hs_eta26CKmo, hs_eta126CKmr) {
        var hs_wild26CKyH = hs_eta26CKmo;
        if (hs_eta26CKmo.notEvaluated) {
            hs_wild26CKyH = hs_eta26CKmo.hscall();
        }
        var hs_x26CKmu = hs_wild26CKyH.data[0];
        var hs_wild126CKyG = hs_eta126CKmr;
        if (hs_eta126CKmr.notEvaluated) {
            hs_wild126CKyG = hs_eta126CKmr.hscall();
        }
        var hs_y26CKmw = hs_wild126CKyG.data[0];
        var hs_sat26CKyI = hs_y26CKmw.charCodeAt(0);
        var hs_sat26CKyJ = hs_x26CKmu.charCodeAt(0);
        return hs_eftChar25rkNh.hscall(hs_sat26CKyJ, hs_sat26CKyI);
    };
    hs_zdcenumFromThen125ulQi.evaluate = function (hs_eta26CKmB, hs_eta126CKmE) {
        var hs_wild26CKyL = hs_eta26CKmB;
        if (hs_eta26CKmB.notEvaluated) {
            hs_wild26CKyL = hs_eta26CKmB.hscall();
        }
        var hs_x126CKmK = hs_wild26CKyL.data[0];
        var hs_wild126CKyK = hs_eta126CKmE;
        if (hs_eta126CKmE.notEvaluated) {
            hs_wild126CKyK = hs_eta126CKmE.hscall();
        }
        var hs_x226CKmI = hs_wild126CKyK.data[0];
        var hs_sat26CKyM = hs_x126CKmK.charCodeAt(0);
        var hs_sat26CKyN = hs_x226CKmI.charCodeAt(0);
        var hs_delta26CKmM = ($hs.Int.addCarry(hs_sat26CKyN, ~hs_sat26CKyM, 1))[0];
        var hs_wild226CKyO = hs_delta26CKmM >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226CKyO.tag) {
        case 1:
            var hs_gozudn26CKmU = new $hs.Func(1);
            hs_gozudn26CKmU.evaluate = function (hs_x26CKmQ) {
                var hs_wild326CKyW = hs_x26CKmQ < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild326CKyW.tag) {
                case 1:
                    var hs_sat26CKyY = new $hs.Thunk();
                    hs_sat26CKyY.evaluateOnce = function () {
                        var hs_sat26CKz0 = ($hs.Int.addCarry(hs_x26CKmQ, hs_delta26CKmM, 0))[0];
                        return hs_gozudn26CKmU.hscall(hs_sat26CKz0);
                    };
                    var hs_sat26CKyZ = String.fromCharCode(hs_x26CKmQ);
                    var hs_sat26CKyX = new $hs.Data(1);
                    hs_sat26CKyX.data = [hs_sat26CKyZ];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26CKyX, hs_sat26CKyY];
                    return $res;
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            };
            var hs_sat26CKyV = hs_x126CKmK.charCodeAt(0);
            return hs_gozudn26CKmU.hscall(hs_sat26CKyV);
        case 2:
            var hs_gozuup26CKn4 = new $hs.Func(1);
            hs_gozuup26CKn4.evaluate = function (hs_x26CKn0) {
                var hs_wild326CKyQ = hs_x26CKn0 > 1114111 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild326CKyQ.tag) {
                case 1:
                    var hs_sat26CKyS = new $hs.Thunk();
                    hs_sat26CKyS.evaluateOnce = function () {
                        var hs_sat26CKyU = ($hs.Int.addCarry(hs_x26CKn0, hs_delta26CKmM, 0))[0];
                        return hs_gozuup26CKn4.hscall(hs_sat26CKyU);
                    };
                    var hs_sat26CKyT = String.fromCharCode(hs_x26CKn0);
                    var hs_sat26CKyR = new $hs.Data(1);
                    hs_sat26CKyR.data = [hs_sat26CKyT];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26CKyR, hs_sat26CKyS];
                    return $res;
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            };
            var hs_sat26CKyP = hs_x126CKmK.charCodeAt(0);
            return hs_gozuup26CKn4.hscall(hs_sat26CKyP);
        }
    };
    hs_zdcenumFrom125ulQS.evaluate = function (hs_eta26CKna) {
        var hs_wild26CKz1 = hs_eta26CKna;
        if (hs_eta26CKna.notEvaluated) {
            hs_wild26CKz1 = hs_eta26CKna.hscall();
        }
        var hs_x26CKnd = hs_wild26CKz1.data[0];
        var hs_sat26CKz2 = hs_x26CKnd.charCodeAt(0);
        return hs_eftChar25rkNh.hscall(hs_sat26CKz2, 1114111);
    };
    hs_zdcpred325ulQZ.evaluate = function (hs_ds26CKnh) {
        var hs_wild26CKz3 = hs_ds26CKnh;
        if (hs_ds26CKnh.notEvaluated) {
            hs_wild26CKz3 = hs_ds26CKnh.hscall();
        }
        var hs_czh26CKnk = hs_wild26CKz3.data[0];
        var hs_sat26CKz4 = new $hs.Thunk();
        hs_sat26CKz4.evaluateOnce = function () {
            var hs_wild126CKza = hs_czh26CKnk.charCodeAt(0);
            switch (hs_wild126CKza) {
            case 0:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        };
        var hs_wild126CKz5 = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26CKz4);
        switch (hs_wild126CKz5.tag) {
        case 1:
            var hs_sat26CKz9 = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prelude.Enum.Char.pred: bad argument\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CKz9);
        case 2:
            var hs_sat26CKz6 = hs_czh26CKnk.charCodeAt(0);
            var hs_sat26CKz7 = ($hs.Int.addCarry(hs_sat26CKz6, ~1, 1))[0];
            var hs_sat26CKz8 = String.fromCharCode(hs_sat26CKz7);
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26CKz8];
            return $res;
        }
    };
    hs_zdcsucc325ulRc.evaluate = function (hs_ds26CKnu) {
        var hs_wild26CKzb = hs_ds26CKnu;
        if (hs_ds26CKnu.notEvaluated) {
            hs_wild26CKzb = hs_ds26CKnu.hscall();
        }
        var hs_czh26CKnx = hs_wild26CKzb.data[0];
        var hs_sat26CKzc = new $hs.Thunk();
        hs_sat26CKzc.evaluateOnce = function () {
            var hs_wild126CKzi = hs_czh26CKnx.charCodeAt(0);
            switch (hs_wild126CKzi) {
            case 1114111:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        };
        var hs_wild126CKzd = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26CKzc);
        switch (hs_wild126CKzd.tag) {
        case 1:
            var hs_sat26CKzh = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prelude.Enum.Char.succ: bad argument\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CKzh);
        case 2:
            var hs_sat26CKze = hs_czh26CKnx.charCodeAt(0);
            var hs_sat26CKzf = ($hs.Int.addCarry(hs_sat26CKze, 1, 0))[0];
            var hs_sat26CKzg = String.fromCharCode(hs_sat26CKzf);
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26CKzg];
            return $res;
        }
    };
    this.hs_zdfEnumChar.data = [hs_zdcsucc325ulRc, hs_zdcpred325ulQZ, $hs.modules.GHCziBase.hs_chr, $hs.modules.GHCziBase.hs_ord, hs_zdcenumFrom125ulQS, hs_zdcenumFromThen125ulQi, hs_zdcenumFromTo125ulQ5, hs_zdcenumFromThenTo125ulPo];
    this.hs_zdfBoundedInt.data = [$hs.modules.GHCziBase.hs_minInt, $hs.modules.GHCziBase.hs_maxInt];
    hs_zdcenumFromThenTo225ulRp.evaluate = function (hs_eta26CKnJ, hs_eta126CKnM, hs_eta226CKnP) {
        var hs_wild26CKzl = hs_eta26CKnJ;
        if (hs_eta26CKnJ.notEvaluated) {
            hs_wild26CKzl = hs_eta26CKnJ.hscall();
        }
        var hs_x126CKnS = hs_wild26CKzl.data[0];
        var hs_wild126CKzk = hs_eta126CKnM;
        if (hs_eta126CKnM.notEvaluated) {
            hs_wild126CKzk = hs_eta126CKnM.hscall();
        }
        var hs_x226CKnT = hs_wild126CKzk.data[0];
        var hs_wild226CKzj = hs_eta226CKnP;
        if (hs_eta226CKnP.notEvaluated) {
            hs_wild226CKzj = hs_eta226CKnP.hscall();
        }
        var hs_y26CKnU = hs_wild226CKzj.data[0];
        return hs_efdtInt25rkNt.hscall(hs_x126CKnS, hs_x226CKnT, hs_y26CKnU);
    };
    hs_zdcenumFromTo225ulRF.evaluate = function (hs_eta26CKnY, hs_eta126CKo1) {
        var hs_wild26CKzn = hs_eta26CKnY;
        if (hs_eta26CKnY.notEvaluated) {
            hs_wild26CKzn = hs_eta26CKnY.hscall();
        }
        var hs_x26CKo4 = hs_wild26CKzn.data[0];
        var hs_wild126CKzm = hs_eta126CKo1;
        if (hs_eta126CKo1.notEvaluated) {
            hs_wild126CKzm = hs_eta126CKo1.hscall();
        }
        var hs_y26CKo5 = hs_wild126CKzm.data[0];
        return hs_eftInt25rkNq.hscall(hs_x26CKo4, hs_y26CKo5);
    };
    hs_zdcenumFromThen225ulRQ.evaluate = function (hs_eta26CKo9, hs_eta126CKoc) {
        var hs_wild26CKzp = hs_eta26CKo9;
        if (hs_eta26CKo9.notEvaluated) {
            hs_wild26CKzp = hs_eta26CKo9.hscall();
        }
        var hs_x126CKof = hs_wild26CKzp.data[0];
        var hs_wild126CKzo = hs_eta126CKoc;
        if (hs_eta126CKoc.notEvaluated) {
            hs_wild126CKzo = hs_eta126CKoc.hscall();
        }
        var hs_x226CKog = hs_wild126CKzo.data[0];
        return hs_efdInt25rkNs.hscall(hs_x126CKof, hs_x226CKog);
    };
    hs_zdcenumFrom225ulS1.evaluate = function (hs_eta26CKoj) {
        var hs_wild26CKzq = hs_eta26CKoj;
        if (hs_eta26CKoj.notEvaluated) {
            hs_wild26CKzq = hs_eta26CKoj.hscall();
        }
        var hs_x26CKoo = hs_wild26CKzq.data[0];
        var hs_wild126CKzr = $hs.modules.GHCziBase.hs_maxInt;
        if ($hs.modules.GHCziBase.hs_maxInt.notEvaluated) {
            hs_wild126CKzr = $hs.modules.GHCziBase.hs_maxInt.hscall();
        }
        var hs_maxIntzh26CKop = hs_wild126CKzr.data[0];
        return hs_eftInt25rkNq.hscall(hs_x26CKoo, hs_maxIntzh26CKop);
    };
    hs_zdcfromEnum325ulSa.evaluate = function (hs_x26CKos) {
        if (hs_x26CKos.notEvaluated) {
            return hs_x26CKos.hscall();
        } else {
            return hs_x26CKos;
        }
    };
    hs_zdctoEnum325ulSd.evaluate = function (hs_x26CKov) {
        if (hs_x26CKov.notEvaluated) {
            return hs_x26CKov.hscall();
        } else {
            return hs_x26CKov;
        }
    };
    hs_zdcpred425ulSg.evaluate = function (hs_x26CKoy) {
        var hs_sat26CKzs = new $hs.Thunk();
        hs_sat26CKzs.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
        };
        var hs_wild26CKzt = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_x26CKoy, hs_sat26CKzs);
        switch (hs_wild26CKzt.tag) {
        case 1:
            return $hs.modules.GHCziBase.hs_minusInt.hscall(hs_x26CKoy, $hs.modules.GHCziBase.hs_oneInt);
        case 2:
            var hs_sat26CKzu = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prelude.Enum.pred{Int}: tried to take `pred' of minBound\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CKzu);
        }
    };
    hs_zdcsucc425ulSm.evaluate = function (hs_x26CKoE) {
        var hs_sat26CKzv = new $hs.Thunk();
        hs_sat26CKzv.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
        };
        var hs_wild26CKzw = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_x26CKoE, hs_sat26CKzv);
        switch (hs_wild26CKzw.tag) {
        case 1:
            return $hs.modules.GHCziBase.hs_plusInt.hscall(hs_x26CKoE, $hs.modules.GHCziBase.hs_oneInt);
        case 2:
            var hs_sat26CKzx = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prelude.Enum.succ{Int}: tried to take `succ' of maxBound\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CKzx);
        }
    };
    this.hs_zdfEnumInt.data = [hs_zdcsucc425ulSm, hs_zdcpred425ulSg, hs_zdctoEnum325ulSd, hs_zdcfromEnum325ulSa, hs_zdcenumFrom225ulS1, hs_zdcenumFromThen225ulRQ, hs_zdcenumFromTo225ulRF, hs_zdcenumFromThenTo225ulRp];
    this.hs_boundedEnumFrom.evaluate = function (hs_zddEnum26CKoL, hs_zddBounded26CKoP, hs_n26CKoN) {
        var hs_sat26CKzz = new $hs.Thunk();
        hs_sat26CKzz.evaluateOnce = function () {
            var hs_sat26CKzB = new $hs.Thunk();
            hs_sat26CKzB.evaluateOnce = function () {
                var hs_sat26CKzC = new $hs.Thunk();
                hs_sat26CKzC.evaluateOnce = function () {
                    var hs_sat26CKzD = new $hs.Thunk();
                    hs_sat26CKzD.evaluateOnce = function () {
                        return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26CKoP);
                    };
                    return $hs.modules.GHCziBase.hs_asTypeOf.hscall(hs_sat26CKzD, hs_n26CKoN);
                };
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall(hs_zddEnum26CKoL, hs_sat26CKzC);
            };
            var hs_sat26CKzA = new $hs.Thunk();
            hs_sat26CKzA.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall(hs_zddEnum26CKoL, hs_n26CKoN);
            };
            return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26CKzA, hs_sat26CKzB);
        };
        var hs_sat26CKzy = new $hs.Thunk();
        hs_sat26CKzy.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_toEnum.hscall(hs_zddEnum26CKoL);
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26CKzy, hs_sat26CKzz);
    };
    this.hs_boundedEnumFromThen.evaluate = function (hs_zddEnum26CKoZ, hs_zddBounded26CKp7, hs_n126CKp3, hs_n226CKp0) {
        var hs_izun226CKp1 = new $hs.Thunk();
        hs_izun226CKp1.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_fromEnum.hscall(hs_zddEnum26CKoZ, hs_n226CKp0);
        };
        var hs_izun126CKp4 = new $hs.Thunk();
        hs_izun126CKp4.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_fromEnum.hscall(hs_zddEnum26CKoZ, hs_n126CKp3);
        };
        var hs_wild26CKzF = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_izun226CKp1, hs_izun126CKp4);
        switch (hs_wild26CKzF.tag) {
        case 1:
            var hs_sat26CKzL = new $hs.Thunk();
            hs_sat26CKzL.evaluateOnce = function () {
                var hs_sat26CKzM = new $hs.Thunk();
                hs_sat26CKzM.evaluateOnce = function () {
                    var hs_sat26CKzN = new $hs.Thunk();
                    hs_sat26CKzN.evaluateOnce = function () {
                        var hs_sat26CKzO = new $hs.Thunk();
                        hs_sat26CKzO.evaluateOnce = function () {
                            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26CKp7);
                        };
                        return $hs.modules.GHCziBase.hs_asTypeOf.hscall(hs_sat26CKzO, hs_n126CKp3);
                    };
                    return $hs.modules.GHCziEnum.hs_fromEnum.hscall(hs_zddEnum26CKoZ, hs_sat26CKzN);
                };
                return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_izun126CKp4, hs_izun226CKp1, hs_sat26CKzM);
            };
            var hs_sat26CKzK = new $hs.Thunk();
            hs_sat26CKzK.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_toEnum.hscall(hs_zddEnum26CKoZ);
            };
            return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26CKzK, hs_sat26CKzL);
        case 2:
            var hs_sat26CKzG = new $hs.Thunk();
            hs_sat26CKzG.evaluateOnce = function () {
                var hs_sat26CKzH = new $hs.Thunk();
                hs_sat26CKzH.evaluateOnce = function () {
                    var hs_sat26CKzI = new $hs.Thunk();
                    hs_sat26CKzI.evaluateOnce = function () {
                        var hs_sat26CKzJ = new $hs.Thunk();
                        hs_sat26CKzJ.evaluateOnce = function () {
                            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26CKp7);
                        };
                        return $hs.modules.GHCziBase.hs_asTypeOf.hscall(hs_sat26CKzJ, hs_n126CKp3);
                    };
                    return $hs.modules.GHCziEnum.hs_fromEnum.hscall(hs_zddEnum26CKoZ, hs_sat26CKzI);
                };
                return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_izun126CKp4, hs_izun226CKp1, hs_sat26CKzH);
            };
            var hs_sat26CKzE = new $hs.Thunk();
            hs_sat26CKzE.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_toEnum.hscall(hs_zddEnum26CKoZ);
            };
            return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26CKzE, hs_sat26CKzG);
        }
    };
    this.hs_zddmenumFrom.evaluate = function (hs_zddEnum26CKpj, hs_x26CKpl) {
        var hs_sat26CKzQ = new $hs.Thunk();
        hs_sat26CKzQ.evaluateOnce = function () {
            var hs_sat26CKzR = new $hs.Thunk();
            hs_sat26CKzR.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall(hs_zddEnum26CKpj, hs_x26CKpl);
            };
            return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26CKzR);
        };
        var hs_sat26CKzP = new $hs.Thunk();
        hs_sat26CKzP.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_toEnum.hscall(hs_zddEnum26CKpj);
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26CKzP, hs_sat26CKzQ);
    };
    this.hs_zddmenumFromThen.evaluate = function (hs_zddEnum26CKpr, hs_x26CKpt, hs_y26CKpv) {
        var hs_sat26CKzT = new $hs.Thunk();
        hs_sat26CKzT.evaluateOnce = function () {
            var hs_sat26CKzV = new $hs.Thunk();
            hs_sat26CKzV.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall(hs_zddEnum26CKpr, hs_y26CKpv);
            };
            var hs_sat26CKzU = new $hs.Thunk();
            hs_sat26CKzU.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall(hs_zddEnum26CKpr, hs_x26CKpt);
            };
            return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26CKzU, hs_sat26CKzV);
        };
        var hs_sat26CKzS = new $hs.Thunk();
        hs_sat26CKzS.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_toEnum.hscall(hs_zddEnum26CKpr);
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26CKzS, hs_sat26CKzT);
    };
    this.hs_zddmenumFromTo.evaluate = function (hs_zddEnum26CKpB, hs_x26CKpD, hs_y26CKpF) {
        var hs_sat26CKzX = new $hs.Thunk();
        hs_sat26CKzX.evaluateOnce = function () {
            var hs_sat26CKzZ = new $hs.Thunk();
            hs_sat26CKzZ.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall(hs_zddEnum26CKpB, hs_y26CKpF);
            };
            var hs_sat26CKzY = new $hs.Thunk();
            hs_sat26CKzY.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall(hs_zddEnum26CKpB, hs_x26CKpD);
            };
            return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26CKzY, hs_sat26CKzZ);
        };
        var hs_sat26CKzW = new $hs.Thunk();
        hs_sat26CKzW.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_toEnum.hscall(hs_zddEnum26CKpB);
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26CKzW, hs_sat26CKzX);
    };
    this.hs_zddmenumFromThenTo.evaluate = function (hs_zddEnum26CKpM, hs_x126CKpO, hs_x226CKpQ, hs_y26CKpS) {
        var hs_sat26CKA1 = new $hs.Thunk();
        hs_sat26CKA1.evaluateOnce = function () {
            var hs_sat26CKA3 = new $hs.Thunk();
            hs_sat26CKA3.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall(hs_zddEnum26CKpM, hs_y26CKpS);
            };
            var hs_sat26CKA4 = new $hs.Thunk();
            hs_sat26CKA4.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall(hs_zddEnum26CKpM, hs_x226CKpQ);
            };
            var hs_sat26CKA2 = new $hs.Thunk();
            hs_sat26CKA2.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall(hs_zddEnum26CKpM, hs_x126CKpO);
            };
            return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26CKA2, hs_sat26CKA4, hs_sat26CKA3);
        };
        var hs_sat26CKA0 = new $hs.Thunk();
        hs_sat26CKA0.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_toEnum.hscall(hs_zddEnum26CKpM);
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26CKA0, hs_sat26CKA1);
    };
    this.hs_zdfEnumOrdering.data = [hs_zdcsucc225ulPh, hs_zdcpred225ulPc, hs_zdctoEnum225ulP5, hs_zdcfromEnum225ulP1, hs_zdcenumFrom325ulTI, hs_zdcenumFromThen325ulTH, hs_zdcenumFromTo325ulTG, hs_zdcenumFromThenTo325ulTF];
    hs_zdcenumFromThenTo325ulTF.evaluate = function (hs_x126CKq3, hs_x226CKq5, hs_y26CKq7) {
        var hs_sat26CKA6 = new $hs.Thunk();
        hs_sat26CKA6.evaluateOnce = function () {
            var hs_sat26CKA8 = new $hs.Thunk();
            hs_sat26CKA8.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumOrdering, hs_y26CKq7);
            };
            var hs_sat26CKA9 = new $hs.Thunk();
            hs_sat26CKA9.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumOrdering, hs_x226CKq5);
            };
            var hs_sat26CKA7 = new $hs.Thunk();
            hs_sat26CKA7.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumOrdering, hs_x126CKq3);
            };
            return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26CKA7, hs_sat26CKA9, hs_sat26CKA8);
        };
        var hs_sat26CKA5 = new $hs.Thunk();
        hs_sat26CKA5.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumOrdering);
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26CKA5, hs_sat26CKA6);
    };
    hs_zdcenumFromTo325ulTG.evaluate = function (hs_x26CKqd, hs_y26CKqf) {
        var hs_sat26CKAb = new $hs.Thunk();
        hs_sat26CKAb.evaluateOnce = function () {
            var hs_sat26CKAd = new $hs.Thunk();
            hs_sat26CKAd.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumOrdering, hs_y26CKqf);
            };
            var hs_sat26CKAc = new $hs.Thunk();
            hs_sat26CKAc.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumOrdering, hs_x26CKqd);
            };
            return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26CKAc, hs_sat26CKAd);
        };
        var hs_sat26CKAa = new $hs.Thunk();
        hs_sat26CKAa.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumOrdering);
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26CKAa, hs_sat26CKAb);
    };
    hs_zdcenumFromThen325ulTH.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.GHCziEnum.hs_boundedEnumFromThen.hscall($hs.modules.GHCziEnum.hs_zdfEnumOrdering, $hs.modules.GHCziEnum.hs_zdfBoundedOrdering, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcenumFrom325ulTI.evaluate = function (hs_n26CKqk) {
        var hs_sat26CKAf = new $hs.Thunk();
        hs_sat26CKAf.evaluateOnce = function () {
            var hs_sat26CKAh = new $hs.Thunk();
            hs_sat26CKAh.evaluateOnce = function () {
                var hs_sat26CKAi = new $hs.Thunk();
                hs_sat26CKAi.evaluateOnce = function () {
                    var hs_sat26CKAj = new $hs.Thunk();
                    hs_sat26CKAj.evaluateOnce = function () {
                        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedOrdering);
                    };
                    return $hs.modules.GHCziBase.hs_asTypeOf.hscall(hs_sat26CKAj, hs_n26CKqk);
                };
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumOrdering, hs_sat26CKAi);
            };
            var hs_sat26CKAg = new $hs.Thunk();
            hs_sat26CKAg.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumOrdering, hs_n26CKqk);
            };
            return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26CKAg, hs_sat26CKAh);
        };
        var hs_sat26CKAe = new $hs.Thunk();
        hs_sat26CKAe.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumOrdering);
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26CKAe, hs_sat26CKAf);
    };
    this.hs_zdfEnumBool.data = [hs_zdcsucc125ulOW, hs_zdcpred125ulOR, hs_zdctoEnum125ulOL, hs_zdcfromEnum125ulOH, hs_zdcenumFrom425ulUd, hs_zdcenumFromThen425ulUc, hs_zdcenumFromTo425ulUb, hs_zdcenumFromThenTo425ulUa];
    hs_zdcenumFromThenTo425ulUa.evaluate = function (hs_x126CKqy, hs_x226CKqA, hs_y26CKqC) {
        var hs_sat26CKAl = new $hs.Thunk();
        hs_sat26CKAl.evaluateOnce = function () {
            var hs_sat26CKAn = new $hs.Thunk();
            hs_sat26CKAn.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumBool, hs_y26CKqC);
            };
            var hs_sat26CKAo = new $hs.Thunk();
            hs_sat26CKAo.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumBool, hs_x226CKqA);
            };
            var hs_sat26CKAm = new $hs.Thunk();
            hs_sat26CKAm.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumBool, hs_x126CKqy);
            };
            return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26CKAm, hs_sat26CKAo, hs_sat26CKAn);
        };
        var hs_sat26CKAk = new $hs.Thunk();
        hs_sat26CKAk.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumBool);
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26CKAk, hs_sat26CKAl);
    };
    hs_zdcenumFromTo425ulUb.evaluate = function (hs_x26CKqI, hs_y26CKqK) {
        var hs_sat26CKAq = new $hs.Thunk();
        hs_sat26CKAq.evaluateOnce = function () {
            var hs_sat26CKAs = new $hs.Thunk();
            hs_sat26CKAs.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumBool, hs_y26CKqK);
            };
            var hs_sat26CKAr = new $hs.Thunk();
            hs_sat26CKAr.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumBool, hs_x26CKqI);
            };
            return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26CKAr, hs_sat26CKAs);
        };
        var hs_sat26CKAp = new $hs.Thunk();
        hs_sat26CKAp.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumBool);
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26CKAp, hs_sat26CKAq);
    };
    hs_zdcenumFromThen425ulUc.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.GHCziEnum.hs_boundedEnumFromThen.hscall($hs.modules.GHCziEnum.hs_zdfEnumBool, $hs.modules.GHCziEnum.hs_zdfBoundedBool, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcenumFrom425ulUd.evaluate = function (hs_n26CKqP) {
        var hs_sat26CKAu = new $hs.Thunk();
        hs_sat26CKAu.evaluateOnce = function () {
            var hs_sat26CKAw = new $hs.Thunk();
            hs_sat26CKAw.evaluateOnce = function () {
                var hs_sat26CKAx = new $hs.Thunk();
                hs_sat26CKAx.evaluateOnce = function () {
                    var hs_sat26CKAy = new $hs.Thunk();
                    hs_sat26CKAy.evaluateOnce = function () {
                        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedBool);
                    };
                    return $hs.modules.GHCziBase.hs_asTypeOf.hscall(hs_sat26CKAy, hs_n26CKqP);
                };
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumBool, hs_sat26CKAx);
            };
            var hs_sat26CKAv = new $hs.Thunk();
            hs_sat26CKAv.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumBool, hs_n26CKqP);
            };
            return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26CKAv, hs_sat26CKAw);
        };
        var hs_sat26CKAt = new $hs.Thunk();
        hs_sat26CKAt.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumBool);
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26CKAt, hs_sat26CKAu);
    };
    this.hs_DZCEnum.evaluate = function (hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_DZCBounded.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
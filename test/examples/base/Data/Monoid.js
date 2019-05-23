
$hs.modules.DataziMonoid = new $hs.Module();
$hs.modules.DataziMonoid.dependencies = ["GHC.Prim", "GHC.Types", "GHC.CString", "GHC.Ordering", "GHC.Unit", "GHC.Integer", "Data.Maybe", "GHC.Base", "GHC.Enum", "GHC.Num", "GHC.Show", "GHC.Classes", "GHC.Read", "Control.Exception.Base", "Text.ParserCombinators.ReadPrec"];
$hs.modules.DataziMonoid.initBeforeDependencies = function () {
    this.hs_mempty = new $hs.Func(1);
    this.hs_mappend = new $hs.Func(1);
    this.hs_mconcat = new $hs.Func(1);
    this.hs_zddmmconcat = new $hs.Func(1);
    this.hs_getDual = new $hs.Func(1);
    this.hs_appEndo = new $hs.Func(1);
    this.hs_getAll = new $hs.Func(1);
    this.hs_getAny = new $hs.Func(1);
    this.hs_getSum = new $hs.Func(1);
    this.hs_getProduct = new $hs.Func(1);
    this.hs_getFirst = new $hs.Func(1);
    this.hs_getLast = new $hs.Func(1);
    this.hs_zdfMonoidZMZN = new $hs.Data(1);
    this.hs_zdfMonoidZLzmzgZR = new $hs.Func(1);
    this.hs_zdfMonoidZLZR = new $hs.Data(1);
    this.hs_zdfMonoidZLz2cUZR = new $hs.Func(2);
    this.hs_zdfMonoidZLz2cUz2cUZR = new $hs.Func(3);
    this.hs_zdfMonoidZLz2cUz2cUz2cUZR = new $hs.Func(4);
    this.hs_zdfMonoidZLz2cUz2cUz2cUz2cUZR = new $hs.Func(5);
    this.hs_zdfMonoidOrdering = new $hs.Data(1);
    this.hs_zdfMonoidDual = new $hs.Func(1);
    this.hs_zdfMonoidEndo = new $hs.Data(1);
    this.hs_zdfMonoidAll = new $hs.Data(1);
    this.hs_zdfMonoidAny = new $hs.Data(1);
    this.hs_zdfMonoidSum = new $hs.Func(1);
    this.hs_zdfMonoidProduct = new $hs.Func(1);
    this.hs_zdfMonoidMaybe = new $hs.Func(1);
    this.hs_zdfMonoidFirst = new $hs.Data(1);
    this.hs_zdfMonoidLast = new $hs.Data(1);
    this.hs_zdfShowLast = new $hs.Func(1);
    this.hs_zdfReadLast = new $hs.Func(1);
    this.hs_zdfEqLast = new $hs.Func(1);
    this.hs_zdfOrdLast = new $hs.Func(1);
    this.hs_zdfShowFirst = new $hs.Func(1);
    this.hs_zdfReadFirst = new $hs.Func(1);
    this.hs_zdfEqFirst = new $hs.Func(1);
    this.hs_zdfOrdFirst = new $hs.Func(1);
    this.hs_zdfBoundedProduct = new $hs.Func(1);
    this.hs_zdfShowProduct = new $hs.Func(1);
    this.hs_zdfReadProduct = new $hs.Func(1);
    this.hs_zdfEqProduct = new $hs.Func(1);
    this.hs_zdfOrdProduct = new $hs.Func(1);
    this.hs_zdfBoundedSum = new $hs.Func(1);
    this.hs_zdfShowSum = new $hs.Func(1);
    this.hs_zdfReadSum = new $hs.Func(1);
    this.hs_zdfEqSum = new $hs.Func(1);
    this.hs_zdfOrdSum = new $hs.Func(1);
    this.hs_zdfBoundedAny = new $hs.Data(1);
    this.hs_zdfShowAny = new $hs.Data(1);
    this.hs_zdfReadAny = new $hs.Data(1);
    this.hs_zdfEqAny = new $hs.Data(1);
    this.hs_zdfOrdAny = new $hs.Data(1);
    this.hs_zdfBoundedAll = new $hs.Data(1);
    this.hs_zdfShowAll = new $hs.Data(1);
    this.hs_zdfReadAll = new $hs.Data(1);
    this.hs_zdfEqAll = new $hs.Data(1);
    this.hs_zdfOrdAll = new $hs.Data(1);
    this.hs_zdfBoundedDual = new $hs.Func(1);
    this.hs_zdfShowDual = new $hs.Func(1);
    this.hs_zdfReadDual = new $hs.Func(1);
    this.hs_zdfEqDual = new $hs.Func(1);
    this.hs_zdfOrdDual = new $hs.Func(1);
    this.hs_Last = new $hs.Func(1);
    this.hs_First = new $hs.Func(1);
    this.hs_Product = new $hs.Func(1);
    this.hs_Sum = new $hs.Func(1);
    this.hs_Any = new $hs.Func(1);
    this.hs_All = new $hs.Func(1);
    this.hs_Endo = new $hs.Func(1);
    this.hs_Dual = new $hs.Func(1);
    this.hs_DZCMonoid = new $hs.Func(3);
    this.hs_mempty.notEvaluated = true;
    this.hs_mempty.evaluate = function (hs_tpl26DhJx) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_tpl26DhJx);
    };
    this.hs_mappend.notEvaluated = true;
    this.hs_mappend.evaluate = function (hs_tpl26DhJE) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_tpl26DhJE);
    };
    this.hs_mconcat.notEvaluated = true;
    this.hs_mconcat.evaluate = function (hs_tpl26DhJL) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_tpl26DhJL);
    };
    this.hs_zddmmconcat.notEvaluated = true;
    this.hs_zddmmconcat.evaluate = function (hs_zddMonoid26DhJS) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddMonoid26DhJS);
    };
    this.hs_getDual.notEvaluated = true;
    this.hs_getDual.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_appEndo.notEvaluated = true;
    this.hs_appEndo.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_getAll.notEvaluated = true;
    this.hs_getAll.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_getAny.notEvaluated = true;
    this.hs_getAny.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_getSum.notEvaluated = true;
    this.hs_getSum.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_getProduct.notEvaluated = true;
    this.hs_getProduct.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_getFirst.notEvaluated = true;
    this.hs_getFirst.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_getLast.notEvaluated = true;
    this.hs_getLast.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_zdfMonoidZMZN.notEvaluated = true;
    this.hs_zdfMonoidZMZN.evaluate = function () {
        $hs.modules.DataziMonoid.loadDependencies();
        return this;
    };
    this.hs_zdfMonoidZLzmzgZR.notEvaluated = true;
    this.hs_zdfMonoidZLzmzgZR.evaluate = function (hs_zddMonoid26DhKF) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddMonoid26DhKF);
    };
    this.hs_zdfMonoidZLZR.notEvaluated = true;
    this.hs_zdfMonoidZLZR.evaluate = function () {
        $hs.modules.DataziMonoid.loadDependencies();
        return this;
    };
    this.hs_zdfMonoidZLz2cUZR.notEvaluated = true;
    this.hs_zdfMonoidZLz2cUZR.evaluate = function (hs_zddMonoid26DhLt, hs_zddMonoid126DhLu) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddMonoid26DhLt, hs_zddMonoid126DhLu);
    };
    this.hs_zdfMonoidZLz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfMonoidZLz2cUz2cUZR.evaluate = function (hs_zddMonoid26DhMm, hs_zddMonoid126DhMn, hs_zddMonoid226DhMo) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddMonoid26DhMm, hs_zddMonoid126DhMn, hs_zddMonoid226DhMo);
    };
    this.hs_zdfMonoidZLz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfMonoidZLz2cUz2cUz2cUZR.evaluate = function (hs_zddMonoid26DhNt, hs_zddMonoid126DhNu, hs_zddMonoid226DhNv, hs_zddMonoid326DhNw) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddMonoid26DhNt, hs_zddMonoid126DhNu, hs_zddMonoid226DhNv, hs_zddMonoid326DhNw);
    };
    this.hs_zdfMonoidZLz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfMonoidZLz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddMonoid26DhOO, hs_zddMonoid126DhOP, hs_zddMonoid226DhOQ, hs_zddMonoid326DhOR, hs_zddMonoid426DhOS) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddMonoid26DhOO, hs_zddMonoid126DhOP, hs_zddMonoid226DhOQ, hs_zddMonoid326DhOR, hs_zddMonoid426DhOS);
    };
    this.hs_zdfMonoidOrdering.notEvaluated = true;
    this.hs_zdfMonoidOrdering.evaluate = function () {
        $hs.modules.DataziMonoid.loadDependencies();
        return this;
    };
    this.hs_zdfMonoidDual.notEvaluated = true;
    this.hs_zdfMonoidDual.evaluate = function (hs_zddMonoid26DhPx) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddMonoid26DhPx);
    };
    this.hs_zdfMonoidEndo.notEvaluated = true;
    this.hs_zdfMonoidEndo.evaluate = function () {
        $hs.modules.DataziMonoid.loadDependencies();
        return this;
    };
    this.hs_zdfMonoidAll.notEvaluated = true;
    this.hs_zdfMonoidAll.evaluate = function () {
        $hs.modules.DataziMonoid.loadDependencies();
        return this;
    };
    this.hs_zdfMonoidAny.notEvaluated = true;
    this.hs_zdfMonoidAny.evaluate = function () {
        $hs.modules.DataziMonoid.loadDependencies();
        return this;
    };
    this.hs_zdfMonoidSum.notEvaluated = true;
    this.hs_zdfMonoidSum.evaluate = function (hs_zddNum26DhQu) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddNum26DhQu);
    };
    this.hs_zdfMonoidProduct.notEvaluated = true;
    this.hs_zdfMonoidProduct.evaluate = function (hs_zddNum26DhQY) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddNum26DhQY);
    };
    this.hs_zdfMonoidMaybe.notEvaluated = true;
    this.hs_zdfMonoidMaybe.evaluate = function (hs_zddMonoid26DhRG) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddMonoid26DhRG);
    };
    this.hs_zdfMonoidFirst.notEvaluated = true;
    this.hs_zdfMonoidFirst.evaluate = function () {
        $hs.modules.DataziMonoid.loadDependencies();
        return this;
    };
    this.hs_zdfMonoidLast.notEvaluated = true;
    this.hs_zdfMonoidLast.evaluate = function () {
        $hs.modules.DataziMonoid.loadDependencies();
        return this;
    };
    this.hs_zdfShowLast.notEvaluated = true;
    this.hs_zdfShowLast.evaluate = function (hs_zddShow26DhSP) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddShow26DhSP);
    };
    this.hs_zdfReadLast.notEvaluated = true;
    this.hs_zdfReadLast.evaluate = function (hs_zddRead26DhUP) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddRead26DhUP);
    };
    this.hs_zdfEqLast.notEvaluated = true;
    this.hs_zdfEqLast.evaluate = function (hs_zddEq26DhVN) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddEq26DhVN);
    };
    this.hs_zdfOrdLast.notEvaluated = true;
    this.hs_zdfOrdLast.evaluate = function (hs_zddOrd26DhVX) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddOrd26DhVX);
    };
    this.hs_zdfShowFirst.notEvaluated = true;
    this.hs_zdfShowFirst.evaluate = function (hs_zddShow26DhWP) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddShow26DhWP);
    };
    this.hs_zdfReadFirst.notEvaluated = true;
    this.hs_zdfReadFirst.evaluate = function (hs_zddRead26DhYP) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddRead26DhYP);
    };
    this.hs_zdfEqFirst.notEvaluated = true;
    this.hs_zdfEqFirst.evaluate = function (hs_zddEq26DhZN) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddEq26DhZN);
    };
    this.hs_zdfOrdFirst.notEvaluated = true;
    this.hs_zdfOrdFirst.evaluate = function (hs_zddOrd26DhZX) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddOrd26DhZX);
    };
    this.hs_zdfBoundedProduct.notEvaluated = true;
    this.hs_zdfBoundedProduct.evaluate = function (hs_zddBounded26Di0m) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddBounded26Di0m);
    };
    this.hs_zdfShowProduct.notEvaluated = true;
    this.hs_zdfShowProduct.evaluate = function (hs_zddShow26Di0N) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddShow26Di0N);
    };
    this.hs_zdfReadProduct.notEvaluated = true;
    this.hs_zdfReadProduct.evaluate = function (hs_zddRead26Di2L) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddRead26Di2L);
    };
    this.hs_zdfEqProduct.notEvaluated = true;
    this.hs_zdfEqProduct.evaluate = function (hs_zddEq26Di3A) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddEq26Di3A);
    };
    this.hs_zdfOrdProduct.notEvaluated = true;
    this.hs_zdfOrdProduct.evaluate = function (hs_zddOrd26Di3I) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddOrd26Di3I);
    };
    this.hs_zdfBoundedSum.notEvaluated = true;
    this.hs_zdfBoundedSum.evaluate = function (hs_zddBounded26Di40) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddBounded26Di40);
    };
    this.hs_zdfShowSum.notEvaluated = true;
    this.hs_zdfShowSum.evaluate = function (hs_zddShow26Di4r) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddShow26Di4r);
    };
    this.hs_zdfReadSum.notEvaluated = true;
    this.hs_zdfReadSum.evaluate = function (hs_zddRead26Di6p) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddRead26Di6p);
    };
    this.hs_zdfEqSum.notEvaluated = true;
    this.hs_zdfEqSum.evaluate = function (hs_zddEq26Di7e) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddEq26Di7e);
    };
    this.hs_zdfOrdSum.notEvaluated = true;
    this.hs_zdfOrdSum.evaluate = function (hs_zddOrd26Di7m) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddOrd26Di7m);
    };
    this.hs_zdfBoundedAny.notEvaluated = true;
    this.hs_zdfBoundedAny.evaluate = function () {
        $hs.modules.DataziMonoid.loadDependencies();
        return this;
    };
    this.hs_zdfShowAny.notEvaluated = true;
    this.hs_zdfShowAny.evaluate = function () {
        $hs.modules.DataziMonoid.loadDependencies();
        return this;
    };
    this.hs_zdfReadAny.notEvaluated = true;
    this.hs_zdfReadAny.evaluate = function () {
        $hs.modules.DataziMonoid.loadDependencies();
        return this;
    };
    this.hs_zdfEqAny.notEvaluated = true;
    this.hs_zdfEqAny.evaluate = function () {
        $hs.modules.DataziMonoid.loadDependencies();
        return this;
    };
    this.hs_zdfOrdAny.notEvaluated = true;
    this.hs_zdfOrdAny.evaluate = function () {
        $hs.modules.DataziMonoid.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedAll.notEvaluated = true;
    this.hs_zdfBoundedAll.evaluate = function () {
        $hs.modules.DataziMonoid.loadDependencies();
        return this;
    };
    this.hs_zdfShowAll.notEvaluated = true;
    this.hs_zdfShowAll.evaluate = function () {
        $hs.modules.DataziMonoid.loadDependencies();
        return this;
    };
    this.hs_zdfReadAll.notEvaluated = true;
    this.hs_zdfReadAll.evaluate = function () {
        $hs.modules.DataziMonoid.loadDependencies();
        return this;
    };
    this.hs_zdfEqAll.notEvaluated = true;
    this.hs_zdfEqAll.evaluate = function () {
        $hs.modules.DataziMonoid.loadDependencies();
        return this;
    };
    this.hs_zdfOrdAll.notEvaluated = true;
    this.hs_zdfOrdAll.evaluate = function () {
        $hs.modules.DataziMonoid.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedDual.notEvaluated = true;
    this.hs_zdfBoundedDual.evaluate = function (hs_zddBounded26Dicy) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddBounded26Dicy);
    };
    this.hs_zdfShowDual.notEvaluated = true;
    this.hs_zdfShowDual.evaluate = function (hs_zddShow26DicZ) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddShow26DicZ);
    };
    this.hs_zdfReadDual.notEvaluated = true;
    this.hs_zdfReadDual.evaluate = function (hs_zddRead26DieX) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddRead26DieX);
    };
    this.hs_zdfEqDual.notEvaluated = true;
    this.hs_zdfEqDual.evaluate = function (hs_zddEq26DifM) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddEq26DifM);
    };
    this.hs_zdfOrdDual.notEvaluated = true;
    this.hs_zdfOrdDual.evaluate = function (hs_zddOrd26DifU) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddOrd26DifU);
    };
    this.hs_Last.notEvaluated = true;
    this.hs_Last.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_First.notEvaluated = true;
    this.hs_First.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Product.notEvaluated = true;
    this.hs_Product.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Sum.notEvaluated = true;
    this.hs_Sum.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Any.notEvaluated = true;
    this.hs_Any.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_All.notEvaluated = true;
    this.hs_All.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Endo.notEvaluated = true;
    this.hs_Endo.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Dual.notEvaluated = true;
    this.hs_Dual.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_DZCMonoid.notEvaluated = true;
    this.hs_DZCMonoid.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.DataziMonoid.initAfterDependencies = function () {
    this.hs_mempty.notEvaluated = false;
    this.hs_mappend.notEvaluated = false;
    this.hs_mconcat.notEvaluated = false;
    this.hs_zddmmconcat.notEvaluated = false;
    this.hs_getDual.notEvaluated = false;
    this.hs_appEndo.notEvaluated = false;
    this.hs_getAll.notEvaluated = false;
    this.hs_getAny.notEvaluated = false;
    this.hs_getSum.notEvaluated = false;
    this.hs_getProduct.notEvaluated = false;
    this.hs_getFirst.notEvaluated = false;
    this.hs_getLast.notEvaluated = false;
    this.hs_zdfMonoidZMZN.notEvaluated = false;
    this.hs_zdfMonoidZMZN.evaluate = function () {
        return this;
    };
    this.hs_zdfMonoidZLzmzgZR.notEvaluated = false;
    this.hs_zdfMonoidZLZR.notEvaluated = false;
    this.hs_zdfMonoidZLZR.evaluate = function () {
        return this;
    };
    this.hs_zdfMonoidZLz2cUZR.notEvaluated = false;
    this.hs_zdfMonoidZLz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfMonoidZLz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfMonoidZLz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfMonoidOrdering.notEvaluated = false;
    this.hs_zdfMonoidOrdering.evaluate = function () {
        return this;
    };
    this.hs_zdfMonoidDual.notEvaluated = false;
    this.hs_zdfMonoidEndo.notEvaluated = false;
    this.hs_zdfMonoidEndo.evaluate = function () {
        return this;
    };
    this.hs_zdfMonoidAll.notEvaluated = false;
    this.hs_zdfMonoidAll.evaluate = function () {
        return this;
    };
    this.hs_zdfMonoidAny.notEvaluated = false;
    this.hs_zdfMonoidAny.evaluate = function () {
        return this;
    };
    this.hs_zdfMonoidSum.notEvaluated = false;
    this.hs_zdfMonoidProduct.notEvaluated = false;
    this.hs_zdfMonoidMaybe.notEvaluated = false;
    this.hs_zdfMonoidFirst.notEvaluated = false;
    this.hs_zdfMonoidFirst.evaluate = function () {
        return this;
    };
    this.hs_zdfMonoidLast.notEvaluated = false;
    this.hs_zdfMonoidLast.evaluate = function () {
        return this;
    };
    this.hs_zdfShowLast.notEvaluated = false;
    this.hs_zdfReadLast.notEvaluated = false;
    this.hs_zdfEqLast.notEvaluated = false;
    this.hs_zdfOrdLast.notEvaluated = false;
    this.hs_zdfShowFirst.notEvaluated = false;
    this.hs_zdfReadFirst.notEvaluated = false;
    this.hs_zdfEqFirst.notEvaluated = false;
    this.hs_zdfOrdFirst.notEvaluated = false;
    this.hs_zdfBoundedProduct.notEvaluated = false;
    this.hs_zdfShowProduct.notEvaluated = false;
    this.hs_zdfReadProduct.notEvaluated = false;
    this.hs_zdfEqProduct.notEvaluated = false;
    this.hs_zdfOrdProduct.notEvaluated = false;
    this.hs_zdfBoundedSum.notEvaluated = false;
    this.hs_zdfShowSum.notEvaluated = false;
    this.hs_zdfReadSum.notEvaluated = false;
    this.hs_zdfEqSum.notEvaluated = false;
    this.hs_zdfOrdSum.notEvaluated = false;
    this.hs_zdfBoundedAny.notEvaluated = false;
    this.hs_zdfBoundedAny.evaluate = function () {
        return this;
    };
    this.hs_zdfShowAny.notEvaluated = false;
    this.hs_zdfShowAny.evaluate = function () {
        return this;
    };
    this.hs_zdfReadAny.notEvaluated = false;
    this.hs_zdfReadAny.evaluate = function () {
        return this;
    };
    this.hs_zdfEqAny.notEvaluated = false;
    this.hs_zdfEqAny.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdAny.notEvaluated = false;
    this.hs_zdfOrdAny.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedAll.notEvaluated = false;
    this.hs_zdfBoundedAll.evaluate = function () {
        return this;
    };
    this.hs_zdfShowAll.notEvaluated = false;
    this.hs_zdfShowAll.evaluate = function () {
        return this;
    };
    this.hs_zdfReadAll.notEvaluated = false;
    this.hs_zdfReadAll.evaluate = function () {
        return this;
    };
    this.hs_zdfEqAll.notEvaluated = false;
    this.hs_zdfEqAll.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdAll.notEvaluated = false;
    this.hs_zdfOrdAll.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedDual.notEvaluated = false;
    this.hs_zdfShowDual.notEvaluated = false;
    this.hs_zdfReadDual.notEvaluated = false;
    this.hs_zdfEqDual.notEvaluated = false;
    this.hs_zdfOrdDual.notEvaluated = false;
    this.hs_Last.notEvaluated = false;
    this.hs_First.notEvaluated = false;
    this.hs_Product.notEvaluated = false;
    this.hs_Sum.notEvaluated = false;
    this.hs_Any.notEvaluated = false;
    this.hs_All.notEvaluated = false;
    this.hs_Endo.notEvaluated = false;
    this.hs_Dual.notEvaluated = false;
    this.hs_DZCMonoid.notEvaluated = false;
    var hs_a25uTdF = new $hs.Func(1);
    var hs_a125uTdI = new $hs.Func(1);
    var hs_a225uTdL = new $hs.Func(1);
    var hs_a325uTdO = new $hs.Func(1);
    var hs_a425uTdR = new $hs.Func(1);
    var hs_a525uTdU = new $hs.Func(1);
    var hs_a625uTdX = new $hs.Func(1);
    var hs_a725uTe0 = new $hs.Func(1);
    var hs_zdcmconcat25uTe3 = new $hs.Thunk();
    var hs_zdcmappend25uTe6 = new $hs.Func(4);
    var hs_zdcmempty25uTeh = new $hs.Func(2);
    var hs_zdcmconcat125uTem = new $hs.Func(1);
    var hs_zdcmconcat225uTeA = new $hs.Func(1);
    var hs_zdcmappend125uTeD = new $hs.Func(2);
    var hs_zdcmappend225uTeI = new $hs.Func(4);
    var hs_zdcmempty125uTf3 = new $hs.Func(2);
    var hs_zdcmconcat325uTfa = new $hs.Func(2);
    var hs_zdcmappend325uTfq = new $hs.Func(5);
    var hs_zdcmempty225uTfS = new $hs.Func(3);
    var hs_zdcmconcat425uTg2 = new $hs.Func(3);
    var hs_zdcmappend425uTgm = new $hs.Func(6);
    var hs_zdcmempty325uTgV = new $hs.Func(4);
    var hs_zdcmconcat525uTh8 = new $hs.Func(4);
    var hs_zdcmappend525uThw = new $hs.Func(7);
    var hs_zdcmempty425uTic = new $hs.Func(5);
    var hs_zdcmconcat625uTis = new $hs.Func(5);
    var hs_zdcmappend625uTiU = new $hs.Func(2);
    var hs_sat26Dihi = new $hs.Thunk();
    var hs_sat26Dihj = new $hs.Thunk();
    var hs_zdcmconcat725uTj0 = new $hs.Thunk();
    var hs_a825uTj3 = new $hs.Func(3);
    var hs_zdcmappend725uTja = new $hs.Func(3);
    var hs_a925uTjb = new $hs.Func(1);
    var hs_zdcmempty525uTje = new $hs.Func(1);
    var hs_zdcmconcat825uTjf = new $hs.Func(1);
    var hs_a1025uTjv = new $hs.Func(2);
    var hs_zdcmappend825uTjA = new $hs.Func(2);
    var hs_zdcmempty625uTjB = new $hs.Thunk();
    var hs_zdcmconcat925uTjC = new $hs.Thunk();
    var hs_a1125uTjF = new $hs.Func(2);
    var hs_zdcmappend925uTjK = new $hs.Func(2);
    var hs_zdcmempty725uTjL = new $hs.Data(2);
    var hs_sat26Dihr = new $hs.Thunk();
    var hs_sat26Dihs = new $hs.Thunk();
    var hs_zdcmconcat1025uTjM = new $hs.Thunk();
    var hs_a1225uTjP = new $hs.Func(2);
    var hs_zdcmappend1025uTjU = new $hs.Func(2);
    var hs_zdcmempty825uTjV = new $hs.Data(1);
    var hs_sat26Diht = new $hs.Thunk();
    var hs_sat26Dihu = new $hs.Thunk();
    var hs_zdcmconcat1125uTjW = new $hs.Thunk();
    var hs_a1325uTjZ = new $hs.Func(3);
    var hs_zdcmappend1125uTk6 = new $hs.Func(3);
    var hs_a1425uTk7 = new $hs.Func(1);
    var hs_zdcmempty925uTkb = new $hs.Func(1);
    var hs_zdcmconcat1225uTkc = new $hs.Func(1);
    var hs_a1525uTkt = new $hs.Func(3);
    var hs_zdcmappend1225uTkA = new $hs.Func(3);
    var hs_a1625uTkB = new $hs.Func(1);
    var hs_zdcmempty1025uTkF = new $hs.Func(1);
    var hs_zdcmconcat1325uTkG = new $hs.Func(1);
    var hs_zdcmappend1325uTkX = new $hs.Func(3);
    var hs_zdcmempty1125uTll = new $hs.Func(1);
    var hs_zdcmconcat1425uTlo = new $hs.Func(1);
    var hs_zdcmappend1425uTlz = new $hs.Func(2);
    var hs_zdcmempty1225uTlH = new $hs.Data(1);
    var hs_zdcmconcat1525uTlI = new $hs.Thunk();
    var hs_zdcmappend1525uTlL = new $hs.Func(2);
    var hs_zdcmempty1325uTlT = new $hs.Data(1);
    var hs_zdcmconcat1625uTlU = new $hs.Thunk();
    var hs_zdcshowsPrec25uTlX = new $hs.Func(1);
    var hs_zdcshowList25uTmw = new $hs.Func(1);
    var hs_zdcshow25uTmx = new $hs.Func(1);
    var hs_zdcreadPrec25uTmL = new $hs.Func(1);
    var hs_zdcreadListPrec25uTov = new $hs.Func(1);
    var hs_zdcreadList25uTow = new $hs.Func(1);
    var hs_zdcreadsPrec25uTox = new $hs.Func(1);
    var hs_a1725uToN = new $hs.Func(1);
    var hs_zdcmin25uToR = new $hs.Func(1);
    var hs_a1825uToS = new $hs.Func(1);
    var hs_zdcmax25uToW = new $hs.Func(1);
    var hs_a1925uToX = new $hs.Func(1);
    var hs_zdczlze25uTp1 = new $hs.Func(1);
    var hs_a2025uTp2 = new $hs.Func(1);
    var hs_zdczg25uTp6 = new $hs.Func(1);
    var hs_a2125uTp7 = new $hs.Func(1);
    var hs_zdczgze25uTpb = new $hs.Func(1);
    var hs_a2225uTpc = new $hs.Func(1);
    var hs_zdczl25uTpg = new $hs.Func(1);
    var hs_a2325uTph = new $hs.Func(1);
    var hs_zdccompare25uTpl = new $hs.Func(1);
    var hs_a2425uTpm = new $hs.Func(1);
    var hs_zdczsze25uTpq = new $hs.Func(1);
    var hs_a2525uTpr = new $hs.Func(1);
    var hs_zdczeze25uTpv = new $hs.Func(1);
    var hs_zdczdp1Ord25uTpC = new $hs.Func(1);
    var hs_zdcshowsPrec125uTpX = new $hs.Func(1);
    var hs_zdcshowList125uTqw = new $hs.Func(1);
    var hs_zdcshow125uTqx = new $hs.Func(1);
    var hs_zdcreadPrec125uTqL = new $hs.Func(1);
    var hs_zdcreadListPrec125uTsv = new $hs.Func(1);
    var hs_zdcreadList125uTsw = new $hs.Func(1);
    var hs_zdcreadsPrec125uTsx = new $hs.Func(1);
    var hs_a2625uTsN = new $hs.Func(1);
    var hs_zdcmin125uTsR = new $hs.Func(1);
    var hs_a2725uTsS = new $hs.Func(1);
    var hs_zdcmax125uTsW = new $hs.Func(1);
    var hs_a2825uTsX = new $hs.Func(1);
    var hs_zdczlze125uTt1 = new $hs.Func(1);
    var hs_a2925uTt2 = new $hs.Func(1);
    var hs_zdczg125uTt6 = new $hs.Func(1);
    var hs_a3025uTt7 = new $hs.Func(1);
    var hs_zdczgze125uTtb = new $hs.Func(1);
    var hs_a3125uTtc = new $hs.Func(1);
    var hs_zdczl125uTtg = new $hs.Func(1);
    var hs_a3225uTth = new $hs.Func(1);
    var hs_zdccompare125uTtl = new $hs.Func(1);
    var hs_a3325uTtm = new $hs.Func(1);
    var hs_zdczsze125uTtq = new $hs.Func(1);
    var hs_a3425uTtr = new $hs.Func(1);
    var hs_zdczeze125uTtv = new $hs.Func(1);
    var hs_zdczdp1Ord125uTtC = new $hs.Func(1);
    var hs_a3525uTtX = new $hs.Func(1);
    var hs_zdcmaxBound25uTu0 = new $hs.Func(1);
    var hs_a3625uTu1 = new $hs.Func(1);
    var hs_zdcminBound25uTu4 = new $hs.Func(1);
    var hs_zdcshowsPrec225uTu9 = new $hs.Func(3);
    var hs_zdcshowList225uTuu = new $hs.Func(1);
    var hs_zdcshow225uTuv = new $hs.Func(1);
    var hs_zdcreadPrec225uTuJ = new $hs.Func(1);
    var hs_zdcreadListPrec225uTwr = new $hs.Func(1);
    var hs_zdcreadList225uTws = new $hs.Func(1);
    var hs_zdcreadsPrec225uTwt = new $hs.Func(1);
    var hs_a3725uTwJ = new $hs.Func(1);
    var hs_zdcmin225uTwM = new $hs.Func(1);
    var hs_a3825uTwN = new $hs.Func(1);
    var hs_zdcmax225uTwQ = new $hs.Func(1);
    var hs_a3925uTwR = new $hs.Func(1);
    var hs_zdczlze225uTwU = new $hs.Func(1);
    var hs_a4025uTwV = new $hs.Func(1);
    var hs_zdczg225uTwY = new $hs.Func(1);
    var hs_a4125uTwZ = new $hs.Func(1);
    var hs_zdczgze225uTx2 = new $hs.Func(1);
    var hs_a4225uTx3 = new $hs.Func(1);
    var hs_zdczl225uTx6 = new $hs.Func(1);
    var hs_a4325uTx7 = new $hs.Func(1);
    var hs_zdccompare225uTxa = new $hs.Func(1);
    var hs_a4425uTxb = new $hs.Func(1);
    var hs_zdczsze225uTxe = new $hs.Func(1);
    var hs_a4525uTxf = new $hs.Func(1);
    var hs_zdczeze225uTxi = new $hs.Func(1);
    var hs_zdczdp1Ord225uTxn = new $hs.Func(1);
    var hs_a4625uTxB = new $hs.Func(1);
    var hs_zdcmaxBound125uTxE = new $hs.Func(1);
    var hs_a4725uTxF = new $hs.Func(1);
    var hs_zdcminBound125uTxI = new $hs.Func(1);
    var hs_zdcshowsPrec325uTxN = new $hs.Func(3);
    var hs_zdcshowList325uTy8 = new $hs.Func(1);
    var hs_zdcshow325uTy9 = new $hs.Func(1);
    var hs_zdcreadPrec325uTyn = new $hs.Func(1);
    var hs_zdcreadListPrec325uTA5 = new $hs.Func(1);
    var hs_zdcreadList325uTA6 = new $hs.Func(1);
    var hs_zdcreadsPrec325uTA7 = new $hs.Func(1);
    var hs_a4825uTAn = new $hs.Func(1);
    var hs_zdcmin325uTAq = new $hs.Func(1);
    var hs_a4925uTAr = new $hs.Func(1);
    var hs_zdcmax325uTAu = new $hs.Func(1);
    var hs_a5025uTAv = new $hs.Func(1);
    var hs_zdczlze325uTAy = new $hs.Func(1);
    var hs_a5125uTAz = new $hs.Func(1);
    var hs_zdczg325uTAC = new $hs.Func(1);
    var hs_a5225uTAD = new $hs.Func(1);
    var hs_zdczgze325uTAG = new $hs.Func(1);
    var hs_a5325uTAH = new $hs.Func(1);
    var hs_zdczl325uTAK = new $hs.Func(1);
    var hs_a5425uTAL = new $hs.Func(1);
    var hs_zdccompare325uTAO = new $hs.Func(1);
    var hs_a5525uTAP = new $hs.Func(1);
    var hs_zdczsze325uTAS = new $hs.Func(1);
    var hs_a5625uTAT = new $hs.Func(1);
    var hs_zdczeze325uTAW = new $hs.Func(1);
    var hs_zdczdp1Ord325uTB1 = new $hs.Func(1);
    var hs_a5725uTBf = new $hs.Thunk();
    var hs_zdcminBound225uTBg = new $hs.Thunk();
    var hs_a5825uTBh = new $hs.Thunk();
    var hs_zdcmaxBound225uTBi = new $hs.Thunk();
    var hs_zdcshowsPrec425uTBj = new $hs.Func(2);
    var hs_sat26DinP = new $hs.Thunk();
    var hs_zdcshowList425uTBC = new $hs.Thunk();
    var hs_zdcshow425uTBD = new $hs.Thunk();
    var hs_sat26Diow = new $hs.Thunk();
    var hs_zdcreadPrec425uTBG = new $hs.Thunk();
    var hs_zdcreadListPrec425uTDm = new $hs.Thunk();
    var hs_zdcreadList425uTDn = new $hs.Thunk();
    var hs_zdcreadsPrec425uTDo = new $hs.Thunk();
    var hs_a5925uTDp = new $hs.Thunk();
    var hs_zdccompare425uTDq = new $hs.Thunk();
    var hs_a6025uTDr = new $hs.Thunk();
    var hs_zdczl425uTDs = new $hs.Thunk();
    var hs_a6125uTDt = new $hs.Thunk();
    var hs_zdczgze425uTDu = new $hs.Thunk();
    var hs_a6225uTDv = new $hs.Thunk();
    var hs_zdczg425uTDw = new $hs.Thunk();
    var hs_a6325uTDx = new $hs.Thunk();
    var hs_zdczlze425uTDy = new $hs.Thunk();
    var hs_a6425uTDz = new $hs.Thunk();
    var hs_zdcmax425uTDA = new $hs.Thunk();
    var hs_a6525uTDB = new $hs.Thunk();
    var hs_zdcmin425uTDC = new $hs.Thunk();
    var hs_a6625uTDD = new $hs.Thunk();
    var hs_zdczeze425uTDE = new $hs.Thunk();
    var hs_a6725uTDF = new $hs.Thunk();
    var hs_zdczsze425uTDG = new $hs.Thunk();
    var hs_a6825uTDH = new $hs.Thunk();
    var hs_zdcminBound325uTDI = new $hs.Thunk();
    var hs_a6925uTDJ = new $hs.Thunk();
    var hs_zdcmaxBound325uTDK = new $hs.Thunk();
    var hs_zdcshowsPrec525uTDL = new $hs.Func(2);
    var hs_sat26DioM = new $hs.Thunk();
    var hs_zdcshowList525uTE4 = new $hs.Thunk();
    var hs_zdcshow525uTE5 = new $hs.Thunk();
    var hs_sat26Dipt = new $hs.Thunk();
    var hs_zdcreadPrec525uTE8 = new $hs.Thunk();
    var hs_zdcreadListPrec525uTFO = new $hs.Thunk();
    var hs_zdcreadList525uTFP = new $hs.Thunk();
    var hs_zdcreadsPrec525uTFQ = new $hs.Thunk();
    var hs_a7025uTFR = new $hs.Thunk();
    var hs_zdccompare525uTFS = new $hs.Thunk();
    var hs_a7125uTFT = new $hs.Thunk();
    var hs_zdczl525uTFU = new $hs.Thunk();
    var hs_a7225uTFV = new $hs.Thunk();
    var hs_zdczgze525uTFW = new $hs.Thunk();
    var hs_a7325uTFX = new $hs.Thunk();
    var hs_zdczg525uTFY = new $hs.Thunk();
    var hs_a7425uTFZ = new $hs.Thunk();
    var hs_zdczlze525uTG0 = new $hs.Thunk();
    var hs_a7525uTG1 = new $hs.Thunk();
    var hs_zdcmax525uTG2 = new $hs.Thunk();
    var hs_a7625uTG3 = new $hs.Thunk();
    var hs_zdcmin525uTG4 = new $hs.Thunk();
    var hs_a7725uTG5 = new $hs.Thunk();
    var hs_zdczeze525uTG6 = new $hs.Thunk();
    var hs_a7825uTG7 = new $hs.Thunk();
    var hs_zdczsze525uTG8 = new $hs.Thunk();
    var hs_a7925uTG9 = new $hs.Func(1);
    var hs_zdcmaxBound425uTGc = new $hs.Func(1);
    var hs_a8025uTGd = new $hs.Func(1);
    var hs_zdcminBound425uTGg = new $hs.Func(1);
    var hs_zdcshowsPrec625uTGl = new $hs.Func(3);
    var hs_zdcshowList625uTGG = new $hs.Func(1);
    var hs_zdcshow625uTGH = new $hs.Func(1);
    var hs_zdcreadPrec625uTGV = new $hs.Func(1);
    var hs_zdcreadListPrec625uTID = new $hs.Func(1);
    var hs_zdcreadList625uTIE = new $hs.Func(1);
    var hs_zdcreadsPrec625uTIF = new $hs.Func(1);
    var hs_a8125uTIV = new $hs.Func(1);
    var hs_zdcmin625uTIY = new $hs.Func(1);
    var hs_a8225uTIZ = new $hs.Func(1);
    var hs_zdcmax625uTJ2 = new $hs.Func(1);
    var hs_a8325uTJ3 = new $hs.Func(1);
    var hs_zdczlze625uTJ6 = new $hs.Func(1);
    var hs_a8425uTJ7 = new $hs.Func(1);
    var hs_zdczg625uTJa = new $hs.Func(1);
    var hs_a8525uTJb = new $hs.Func(1);
    var hs_zdczgze625uTJe = new $hs.Func(1);
    var hs_a8625uTJf = new $hs.Func(1);
    var hs_zdczl625uTJi = new $hs.Func(1);
    var hs_a8725uTJj = new $hs.Func(1);
    var hs_zdccompare625uTJm = new $hs.Func(1);
    var hs_a8825uTJn = new $hs.Func(1);
    var hs_zdczsze625uTJq = new $hs.Func(1);
    var hs_a8925uTJr = new $hs.Func(1);
    var hs_zdczeze625uTJu = new $hs.Func(1);
    var hs_zdczdp1Ord425uTJz = new $hs.Func(1);
    this.hs_mempty.evaluate = function (hs_tpl26DhJx) {
        var hs_tpl26Dig5 = hs_tpl26DhJx;
        if (hs_tpl26DhJx.notEvaluated) {
            hs_tpl26Dig5 = hs_tpl26DhJx.hscall();
        }
        var hs_tpl26DhJC = hs_tpl26Dig5.data[0];
        if (hs_tpl26DhJC.notEvaluated) {
            return hs_tpl26DhJC.hscall();
        } else {
            return hs_tpl26DhJC;
        }
    };
    this.hs_mappend.evaluate = function (hs_tpl26DhJE) {
        var hs_tpl26Dig8 = hs_tpl26DhJE;
        if (hs_tpl26DhJE.notEvaluated) {
            hs_tpl26Dig8 = hs_tpl26DhJE.hscall();
        }
        var hs_tpl26DhJJ = hs_tpl26Dig8.data[1];
        if (hs_tpl26DhJJ.notEvaluated) {
            return hs_tpl26DhJJ.hscall();
        } else {
            return hs_tpl26DhJJ;
        }
    };
    this.hs_mconcat.evaluate = function (hs_tpl26DhJL) {
        var hs_tpl26Digb = hs_tpl26DhJL;
        if (hs_tpl26DhJL.notEvaluated) {
            hs_tpl26Digb = hs_tpl26DhJL.hscall();
        }
        var hs_tpl26DhJQ = hs_tpl26Digb.data[2];
        if (hs_tpl26DhJQ.notEvaluated) {
            return hs_tpl26DhJQ.hscall();
        } else {
            return hs_tpl26DhJQ;
        }
    };
    this.hs_zddmmconcat.evaluate = function (hs_zddMonoid26DhJS) {
        var hs_sat26Digd = new $hs.Thunk();
        hs_sat26Digd.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid26DhJS);
        };
        var hs_sat26Digc = new $hs.Thunk();
        hs_sat26Digc.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid26DhJS);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26Digc, hs_sat26Digd);
    };
    hs_a25uTdF.evaluate = function (hs_ds26DhJX) {
        if (hs_ds26DhJX.notEvaluated) {
            return hs_ds26DhJX.hscall();
        } else {
            return hs_ds26DhJX;
        }
    };
    this.hs_getDual.evaluate = function (hs_eta1cW6l3) {
        return hs_a25uTdF.hscall(hs_eta1cW6l3);
    };
    hs_a125uTdI.evaluate = function (hs_ds26DhK0) {
        if (hs_ds26DhK0.notEvaluated) {
            return hs_ds26DhK0.hscall();
        } else {
            return hs_ds26DhK0;
        }
    };
    this.hs_appEndo.evaluate = function (hs_eta1cW6l3) {
        return hs_a125uTdI.hscall(hs_eta1cW6l3);
    };
    hs_a225uTdL.evaluate = function (hs_ds26DhK3) {
        if (hs_ds26DhK3.notEvaluated) {
            return hs_ds26DhK3.hscall();
        } else {
            return hs_ds26DhK3;
        }
    };
    this.hs_getAll.evaluate = function (hs_eta1cW6l3) {
        return hs_a225uTdL.hscall(hs_eta1cW6l3);
    };
    hs_a325uTdO.evaluate = function (hs_ds26DhK6) {
        if (hs_ds26DhK6.notEvaluated) {
            return hs_ds26DhK6.hscall();
        } else {
            return hs_ds26DhK6;
        }
    };
    this.hs_getAny.evaluate = function (hs_eta1cW6l3) {
        return hs_a325uTdO.hscall(hs_eta1cW6l3);
    };
    hs_a425uTdR.evaluate = function (hs_ds26DhK9) {
        if (hs_ds26DhK9.notEvaluated) {
            return hs_ds26DhK9.hscall();
        } else {
            return hs_ds26DhK9;
        }
    };
    this.hs_getSum.evaluate = function (hs_eta1cW6l3) {
        return hs_a425uTdR.hscall(hs_eta1cW6l3);
    };
    hs_a525uTdU.evaluate = function (hs_ds26DhKc) {
        if (hs_ds26DhKc.notEvaluated) {
            return hs_ds26DhKc.hscall();
        } else {
            return hs_ds26DhKc;
        }
    };
    this.hs_getProduct.evaluate = function (hs_eta1cW6l3) {
        return hs_a525uTdU.hscall(hs_eta1cW6l3);
    };
    hs_a625uTdX.evaluate = function (hs_ds26DhKf) {
        if (hs_ds26DhKf.notEvaluated) {
            return hs_ds26DhKf.hscall();
        } else {
            return hs_ds26DhKf;
        }
    };
    this.hs_getFirst.evaluate = function (hs_eta1cW6l3) {
        return hs_a625uTdX.hscall(hs_eta1cW6l3);
    };
    hs_a725uTe0.evaluate = function (hs_ds26DhKi) {
        if (hs_ds26DhKi.notEvaluated) {
            return hs_ds26DhKi.hscall();
        } else {
            return hs_ds26DhKi;
        }
    };
    this.hs_getLast.evaluate = function (hs_eta1cW6l3) {
        return hs_a725uTe0.hscall(hs_eta1cW6l3);
    };
    this.hs_zdfMonoidZMZN.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziBase.hs_zpzp, hs_zdcmconcat25uTe3];
    hs_zdcmconcat25uTe3.evaluateOnce = function () {
        var hs_sat26Digf = new $hs.Thunk();
        hs_sat26Digf.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.DataziMonoid.hs_zdfMonoidZMZN);
        };
        var hs_sat26Dige = new $hs.Thunk();
        hs_sat26Dige.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall($hs.modules.DataziMonoid.hs_zdfMonoidZMZN);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26Dige, hs_sat26Digf);
    };
    hs_zdcmappend25uTe6.evaluate = function (hs_zddMonoid26DhKr, hs_f26DhKt, hs_g26DhKv, hs_x26DhKs) {
        var hs_sat26Digh = new $hs.Thunk();
        hs_sat26Digh.evaluateOnce = function () {
            return hs_g26DhKv.hscall(hs_x26DhKs);
        };
        var hs_sat26Digg = new $hs.Thunk();
        hs_sat26Digg.evaluateOnce = function () {
            return hs_f26DhKt.hscall(hs_x26DhKs);
        };
        return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid26DhKr, hs_sat26Digg, hs_sat26Digh);
    };
    hs_zdcmempty25uTeh.evaluate = function (hs_zddMonoid26DhKA, hs_ds26DhKB) {
        return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid26DhKA);
    };
    this.hs_zdfMonoidZLzmzgZR.evaluate = function (hs_zddMonoid26DhKF) {
        var hs_sat26Digj = new $hs.Thunk();
        hs_sat26Digj.evaluateOnce = function () {
            return hs_zdcmconcat125uTem.hscall(hs_zddMonoid26DhKF);
        };
        var hs_sat26Digk = new $hs.Func(3);
        hs_sat26Digk.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcmappend25uTe6.hscall(hs_zddMonoid26DhKF, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Digi = new $hs.Func(1);
        hs_sat26Digi.evaluate = function (hs_ds26DhKG) {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid26DhKF);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Digi, hs_sat26Digk, hs_sat26Digj];
        return $res;
    };
    hs_zdcmconcat125uTem.evaluate = function (hs_zddMonoid26DhKM) {
        var hs_zddMonoid126DhKN = new $hs.Thunk();
        hs_zddMonoid126DhKN.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfMonoidZLzmzgZR.hscall(hs_zddMonoid26DhKM);
        };
        var hs_sat26Digm = new $hs.Thunk();
        hs_sat26Digm.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid126DhKN);
        };
        var hs_sat26Digl = new $hs.Thunk();
        hs_sat26Digl.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid126DhKN);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26Digl, hs_sat26Digm);
    };
    hs_zdcmconcat225uTeA.evaluate = function (hs_ds26DhKS) {
        var $res = new $hs.Data(1);
        $res.data = [];
        return $res;
    };
    hs_zdcmappend125uTeD.evaluate = function (hs_ds26DhKW, hs_ds126DhKX) {
        var $res = new $hs.Data(1);
        $res.data = [];
        return $res;
    };
    this.hs_zdfMonoidZLZR.data = [$hs.modules.GHCziUnit.hs_Z0T, hs_zdcmappend125uTeD, hs_zdcmconcat225uTeA];
    hs_zdcmappend225uTeI.evaluate = function (hs_zddMonoid26DhLb, hs_zddMonoid126DhLf, hs_ds26DhL3, hs_ds126DhL7) {
        var hs_wild26Digp = hs_ds26DhL3;
        if (hs_ds26DhL3.notEvaluated) {
            hs_wild26Digp = hs_ds26DhL3.hscall();
        }
        var hs_a9026DhLc = hs_wild26Digp.data[0];
        var hs_b126DhLg = hs_wild26Digp.data[1];
        var hs_wild126Digo = hs_ds126DhL7;
        if (hs_ds126DhL7.notEvaluated) {
            hs_wild126Digo = hs_ds126DhL7.hscall();
        }
        var hs_a9126DhLd = hs_wild126Digo.data[0];
        var hs_b226DhLh = hs_wild126Digo.data[1];
        var hs_sat26Digq = new $hs.Thunk();
        hs_sat26Digq.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid126DhLf, hs_b126DhLg, hs_b226DhLh);
        };
        var hs_sat26Dign = new $hs.Thunk();
        hs_sat26Dign.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid26DhLb, hs_a9026DhLc, hs_a9126DhLd);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dign, hs_sat26Digq];
        return $res;
    };
    hs_zdcmempty125uTf3.evaluate = function (hs_zddMonoid26DhLm, hs_zddMonoid126DhLo) {
        var hs_sat26Digs = new $hs.Thunk();
        hs_sat26Digs.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid126DhLo);
        };
        var hs_sat26Digr = new $hs.Thunk();
        hs_sat26Digr.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid26DhLm);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Digr, hs_sat26Digs];
        return $res;
    };
    this.hs_zdfMonoidZLz2cUZR.evaluate = function (hs_zddMonoid26DhLt, hs_zddMonoid126DhLu) {
        var hs_sat26Digu = new $hs.Thunk();
        hs_sat26Digu.evaluateOnce = function () {
            return hs_zdcmconcat325uTfa.hscall(hs_zddMonoid26DhLt, hs_zddMonoid126DhLu);
        };
        var hs_sat26Digv = new $hs.Func(2);
        hs_sat26Digv.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcmappend225uTeI.hscall(hs_zddMonoid26DhLt, hs_zddMonoid126DhLu, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Digt = new $hs.Thunk();
        hs_sat26Digt.evaluateOnce = function () {
            return hs_zdcmempty125uTf3.hscall(hs_zddMonoid26DhLt, hs_zddMonoid126DhLu);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Digt, hs_sat26Digv, hs_sat26Digu];
        return $res;
    };
    hs_zdcmconcat325uTfa.evaluate = function (hs_zddMonoid26DhLB, hs_zddMonoid126DhLC) {
        var hs_zddMonoid226DhLD = new $hs.Thunk();
        hs_zddMonoid226DhLD.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfMonoidZLz2cUZR.hscall(hs_zddMonoid26DhLB, hs_zddMonoid126DhLC);
        };
        var hs_sat26Digx = new $hs.Thunk();
        hs_sat26Digx.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid226DhLD);
        };
        var hs_sat26Digw = new $hs.Thunk();
        hs_sat26Digw.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid226DhLD);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26Digw, hs_sat26Digx);
    };
    hs_zdcmappend325uTfq.evaluate = function (hs_zddMonoid26DhLW, hs_zddMonoid126DhM0, hs_zddMonoid226DhM4, hs_ds26DhLM, hs_ds126DhLR) {
        var hs_wild26DigA = hs_ds26DhLM;
        if (hs_ds26DhLM.notEvaluated) {
            hs_wild26DigA = hs_ds26DhLM.hscall();
        }
        var hs_a9026DhLX = hs_wild26DigA.data[0];
        var hs_b126DhM1 = hs_wild26DigA.data[1];
        var hs_c126DhM5 = hs_wild26DigA.data[2];
        var hs_wild126Digz = hs_ds126DhLR;
        if (hs_ds126DhLR.notEvaluated) {
            hs_wild126Digz = hs_ds126DhLR.hscall();
        }
        var hs_a9126DhLY = hs_wild126Digz.data[0];
        var hs_b226DhM2 = hs_wild126Digz.data[1];
        var hs_c226DhM6 = hs_wild126Digz.data[2];
        var hs_sat26DigB = new $hs.Thunk();
        hs_sat26DigB.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid226DhM4, hs_c126DhM5, hs_c226DhM6);
        };
        var hs_sat26DigC = new $hs.Thunk();
        hs_sat26DigC.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid126DhM0, hs_b126DhM1, hs_b226DhM2);
        };
        var hs_sat26Digy = new $hs.Thunk();
        hs_sat26Digy.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid26DhLW, hs_a9026DhLX, hs_a9126DhLY);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Digy, hs_sat26DigC, hs_sat26DigB];
        return $res;
    };
    hs_zdcmempty225uTfS.evaluate = function (hs_zddMonoid26DhMc, hs_zddMonoid126DhMe, hs_zddMonoid226DhMg) {
        var hs_sat26DigE = new $hs.Thunk();
        hs_sat26DigE.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid226DhMg);
        };
        var hs_sat26DigF = new $hs.Thunk();
        hs_sat26DigF.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid126DhMe);
        };
        var hs_sat26DigD = new $hs.Thunk();
        hs_sat26DigD.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid26DhMc);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DigD, hs_sat26DigF, hs_sat26DigE];
        return $res;
    };
    this.hs_zdfMonoidZLz2cUz2cUZR.evaluate = function (hs_zddMonoid26DhMm, hs_zddMonoid126DhMn, hs_zddMonoid226DhMo) {
        var hs_sat26DigH = new $hs.Thunk();
        hs_sat26DigH.evaluateOnce = function () {
            return hs_zdcmconcat425uTg2.hscall(hs_zddMonoid26DhMm, hs_zddMonoid126DhMn, hs_zddMonoid226DhMo);
        };
        var hs_sat26DigI = new $hs.Func(2);
        hs_sat26DigI.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcmappend325uTfq.hscall(hs_zddMonoid26DhMm, hs_zddMonoid126DhMn, hs_zddMonoid226DhMo, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DigG = new $hs.Thunk();
        hs_sat26DigG.evaluateOnce = function () {
            return hs_zdcmempty225uTfS.hscall(hs_zddMonoid26DhMm, hs_zddMonoid126DhMn, hs_zddMonoid226DhMo);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DigG, hs_sat26DigI, hs_sat26DigH];
        return $res;
    };
    hs_zdcmconcat425uTg2.evaluate = function (hs_zddMonoid26DhMw, hs_zddMonoid126DhMx, hs_zddMonoid226DhMy) {
        var hs_zddMonoid326DhMz = new $hs.Thunk();
        hs_zddMonoid326DhMz.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfMonoidZLz2cUz2cUZR.hscall(hs_zddMonoid26DhMw, hs_zddMonoid126DhMx, hs_zddMonoid226DhMy);
        };
        var hs_sat26DigK = new $hs.Thunk();
        hs_sat26DigK.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid326DhMz);
        };
        var hs_sat26DigJ = new $hs.Thunk();
        hs_sat26DigJ.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid326DhMz);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DigJ, hs_sat26DigK);
    };
    hs_zdcmappend425uTgm.evaluate = function (hs_zddMonoid26DhMV, hs_zddMonoid126DhMZ, hs_zddMonoid226DhN3, hs_zddMonoid326DhN7, hs_ds26DhMJ, hs_ds126DhMP) {
        var hs_wild26DigN = hs_ds26DhMJ;
        if (hs_ds26DhMJ.notEvaluated) {
            hs_wild26DigN = hs_ds26DhMJ.hscall();
        }
        var hs_a9026DhMW = hs_wild26DigN.data[0];
        var hs_b126DhN0 = hs_wild26DigN.data[1];
        var hs_c126DhN4 = hs_wild26DigN.data[2];
        var hs_d126DhN8 = hs_wild26DigN.data[3];
        var hs_wild126DigM = hs_ds126DhMP;
        if (hs_ds126DhMP.notEvaluated) {
            hs_wild126DigM = hs_ds126DhMP.hscall();
        }
        var hs_a9126DhMX = hs_wild126DigM.data[0];
        var hs_b226DhN1 = hs_wild126DigM.data[1];
        var hs_c226DhN5 = hs_wild126DigM.data[2];
        var hs_d226DhN9 = hs_wild126DigM.data[3];
        var hs_sat26DigO = new $hs.Thunk();
        hs_sat26DigO.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid326DhN7, hs_d126DhN8, hs_d226DhN9);
        };
        var hs_sat26DigP = new $hs.Thunk();
        hs_sat26DigP.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid226DhN3, hs_c126DhN4, hs_c226DhN5);
        };
        var hs_sat26DigQ = new $hs.Thunk();
        hs_sat26DigQ.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid126DhMZ, hs_b126DhN0, hs_b226DhN1);
        };
        var hs_sat26DigL = new $hs.Thunk();
        hs_sat26DigL.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid26DhMV, hs_a9026DhMW, hs_a9126DhMX);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DigL, hs_sat26DigQ, hs_sat26DigP, hs_sat26DigO];
        return $res;
    };
    hs_zdcmempty325uTgV.evaluate = function (hs_zddMonoid26DhNg, hs_zddMonoid126DhNi, hs_zddMonoid226DhNk, hs_zddMonoid326DhNm) {
        var hs_sat26DigS = new $hs.Thunk();
        hs_sat26DigS.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid326DhNm);
        };
        var hs_sat26DigT = new $hs.Thunk();
        hs_sat26DigT.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid226DhNk);
        };
        var hs_sat26DigU = new $hs.Thunk();
        hs_sat26DigU.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid126DhNi);
        };
        var hs_sat26DigR = new $hs.Thunk();
        hs_sat26DigR.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid26DhNg);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DigR, hs_sat26DigU, hs_sat26DigT, hs_sat26DigS];
        return $res;
    };
    this.hs_zdfMonoidZLz2cUz2cUz2cUZR.evaluate = function (hs_zddMonoid26DhNt, hs_zddMonoid126DhNu, hs_zddMonoid226DhNv, hs_zddMonoid326DhNw) {
        var hs_sat26DigW = new $hs.Thunk();
        hs_sat26DigW.evaluateOnce = function () {
            return hs_zdcmconcat525uTh8.hscall(hs_zddMonoid26DhNt, hs_zddMonoid126DhNu, hs_zddMonoid226DhNv, hs_zddMonoid326DhNw);
        };
        var hs_sat26DigX = new $hs.Func(2);
        hs_sat26DigX.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcmappend425uTgm.hscall(hs_zddMonoid26DhNt, hs_zddMonoid126DhNu, hs_zddMonoid226DhNv, hs_zddMonoid326DhNw, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DigV = new $hs.Thunk();
        hs_sat26DigV.evaluateOnce = function () {
            return hs_zdcmempty325uTgV.hscall(hs_zddMonoid26DhNt, hs_zddMonoid126DhNu, hs_zddMonoid226DhNv, hs_zddMonoid326DhNw);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DigV, hs_sat26DigX, hs_sat26DigW];
        return $res;
    };
    hs_zdcmconcat525uTh8.evaluate = function (hs_zddMonoid26DhNF, hs_zddMonoid126DhNG, hs_zddMonoid226DhNH, hs_zddMonoid326DhNI) {
        var hs_zddMonoid426DhNJ = new $hs.Thunk();
        hs_zddMonoid426DhNJ.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfMonoidZLz2cUz2cUz2cUZR.hscall(hs_zddMonoid26DhNF, hs_zddMonoid126DhNG, hs_zddMonoid226DhNH, hs_zddMonoid326DhNI);
        };
        var hs_sat26DigZ = new $hs.Thunk();
        hs_sat26DigZ.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid426DhNJ);
        };
        var hs_sat26DigY = new $hs.Thunk();
        hs_sat26DigY.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid426DhNJ);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DigY, hs_sat26DigZ);
    };
    hs_zdcmappend525uThw.evaluate = function (hs_zddMonoid26DhO8, hs_zddMonoid126DhOc, hs_zddMonoid226DhOg, hs_zddMonoid326DhOk, hs_zddMonoid426DhOo, hs_ds26DhNU, hs_ds126DhO1) {
        var hs_wild26Dih2 = hs_ds26DhNU;
        if (hs_ds26DhNU.notEvaluated) {
            hs_wild26Dih2 = hs_ds26DhNU.hscall();
        }
        var hs_a9026DhO9 = hs_wild26Dih2.data[0];
        var hs_b126DhOd = hs_wild26Dih2.data[1];
        var hs_c126DhOh = hs_wild26Dih2.data[2];
        var hs_d126DhOl = hs_wild26Dih2.data[3];
        var hs_e126DhOp = hs_wild26Dih2.data[4];
        var hs_wild126Dih1 = hs_ds126DhO1;
        if (hs_ds126DhO1.notEvaluated) {
            hs_wild126Dih1 = hs_ds126DhO1.hscall();
        }
        var hs_a9126DhOa = hs_wild126Dih1.data[0];
        var hs_b226DhOe = hs_wild126Dih1.data[1];
        var hs_c226DhOi = hs_wild126Dih1.data[2];
        var hs_d226DhOm = hs_wild126Dih1.data[3];
        var hs_e226DhOq = hs_wild126Dih1.data[4];
        var hs_sat26Dih3 = new $hs.Thunk();
        hs_sat26Dih3.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid426DhOo, hs_e126DhOp, hs_e226DhOq);
        };
        var hs_sat26Dih4 = new $hs.Thunk();
        hs_sat26Dih4.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid326DhOk, hs_d126DhOl, hs_d226DhOm);
        };
        var hs_sat26Dih5 = new $hs.Thunk();
        hs_sat26Dih5.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid226DhOg, hs_c126DhOh, hs_c226DhOi);
        };
        var hs_sat26Dih6 = new $hs.Thunk();
        hs_sat26Dih6.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid126DhOc, hs_b126DhOd, hs_b226DhOe);
        };
        var hs_sat26Dih0 = new $hs.Thunk();
        hs_sat26Dih0.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid26DhO8, hs_a9026DhO9, hs_a9126DhOa);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dih0, hs_sat26Dih6, hs_sat26Dih5, hs_sat26Dih4, hs_sat26Dih3];
        return $res;
    };
    hs_zdcmempty425uTic.evaluate = function (hs_zddMonoid26DhOy, hs_zddMonoid126DhOA, hs_zddMonoid226DhOC, hs_zddMonoid326DhOE, hs_zddMonoid426DhOG) {
        var hs_sat26Dih8 = new $hs.Thunk();
        hs_sat26Dih8.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid426DhOG);
        };
        var hs_sat26Dih9 = new $hs.Thunk();
        hs_sat26Dih9.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid326DhOE);
        };
        var hs_sat26Diha = new $hs.Thunk();
        hs_sat26Diha.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid226DhOC);
        };
        var hs_sat26Dihb = new $hs.Thunk();
        hs_sat26Dihb.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid126DhOA);
        };
        var hs_sat26Dih7 = new $hs.Thunk();
        hs_sat26Dih7.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid26DhOy);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dih7, hs_sat26Dihb, hs_sat26Diha, hs_sat26Dih9, hs_sat26Dih8];
        return $res;
    };
    this.hs_zdfMonoidZLz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddMonoid26DhOO, hs_zddMonoid126DhOP, hs_zddMonoid226DhOQ, hs_zddMonoid326DhOR, hs_zddMonoid426DhOS) {
        var hs_sat26Dihd = new $hs.Thunk();
        hs_sat26Dihd.evaluateOnce = function () {
            return hs_zdcmconcat625uTis.hscall(hs_zddMonoid26DhOO, hs_zddMonoid126DhOP, hs_zddMonoid226DhOQ, hs_zddMonoid326DhOR, hs_zddMonoid426DhOS);
        };
        var hs_sat26Dihe = new $hs.Func(2);
        hs_sat26Dihe.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcmappend525uThw.hscall(hs_zddMonoid26DhOO, hs_zddMonoid126DhOP, hs_zddMonoid226DhOQ, hs_zddMonoid326DhOR, hs_zddMonoid426DhOS, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dihc = new $hs.Thunk();
        hs_sat26Dihc.evaluateOnce = function () {
            return hs_zdcmempty425uTic.hscall(hs_zddMonoid26DhOO, hs_zddMonoid126DhOP, hs_zddMonoid226DhOQ, hs_zddMonoid326DhOR, hs_zddMonoid426DhOS);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dihc, hs_sat26Dihe, hs_sat26Dihd];
        return $res;
    };
    hs_zdcmconcat625uTis.evaluate = function (hs_zddMonoid26DhP2, hs_zddMonoid126DhP3, hs_zddMonoid226DhP4, hs_zddMonoid326DhP5, hs_zddMonoid426DhP6) {
        var hs_zddMonoid526DhP7 = new $hs.Thunk();
        hs_zddMonoid526DhP7.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfMonoidZLz2cUz2cUz2cUz2cUZR.hscall(hs_zddMonoid26DhP2, hs_zddMonoid126DhP3, hs_zddMonoid226DhP4, hs_zddMonoid326DhP5, hs_zddMonoid426DhP6);
        };
        var hs_sat26Dihg = new $hs.Thunk();
        hs_sat26Dihg.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid526DhP7);
        };
        var hs_sat26Dihf = new $hs.Thunk();
        hs_sat26Dihf.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid526DhP7);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26Dihf, hs_sat26Dihg);
    };
    hs_zdcmappend625uTiU.evaluate = function (hs_ds26DhPd, hs_ds126DhPf) {
        var hs_wild26Dihh = hs_ds26DhPd;
        if (hs_ds26DhPd.notEvaluated) {
            hs_wild26Dihh = hs_ds26DhPd.hscall();
        }
        switch (hs_wild26Dihh.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            if (hs_ds126DhPf.notEvaluated) {
                return hs_ds126DhPf.hscall();
            } else {
                return hs_ds126DhPf;
            }
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_sat26Dihi.evaluateOnce = function () {
        return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.DataziMonoid.hs_zdfMonoidOrdering);
    };
    hs_sat26Dihj.evaluateOnce = function () {
        return $hs.modules.DataziMonoid.hs_mappend.hscall($hs.modules.DataziMonoid.hs_zdfMonoidOrdering);
    };
    this.hs_zdfMonoidOrdering.data = [$hs.modules.GHCziOrdering.hs_EQ, hs_zdcmappend625uTiU, hs_zdcmconcat725uTj0];
    hs_zdcmconcat725uTj0.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26Dihj, hs_sat26Dihi);
    };
    hs_a825uTj3.evaluate = function (hs_zddMonoid26DhPn, hs_ds26DhPp, hs_ds126DhPo) {
        return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid26DhPn, hs_ds126DhPo, hs_ds26DhPp);
    };
    hs_zdcmappend725uTja.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a825uTj3.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a925uTjb.evaluate = function (hs_zddMonoid26DhPt) {
        return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid26DhPt);
    };
    hs_zdcmempty525uTje.evaluate = function (hs_eta1cW6l3) {
        return hs_a925uTjb.hscall(hs_eta1cW6l3);
    };
    this.hs_zdfMonoidDual.evaluate = function (hs_zddMonoid26DhPx) {
        var hs_sat26Dihl = new $hs.Thunk();
        hs_sat26Dihl.evaluateOnce = function () {
            return hs_zdcmconcat825uTjf.hscall(hs_zddMonoid26DhPx);
        };
        var hs_sat26Dihm = new $hs.Func(2);
        hs_sat26Dihm.evaluate = function (hs_ds26DhPC, hs_ds126DhPB) {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid26DhPx, hs_ds126DhPB, hs_ds26DhPC);
        };
        var hs_sat26Dihk = new $hs.Thunk();
        hs_sat26Dihk.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid26DhPx);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dihk, hs_sat26Dihm, hs_sat26Dihl];
        return $res;
    };
    hs_zdcmconcat825uTjf.evaluate = function (hs_zddMonoid26DhPH) {
        var hs_zddMonoid126DhPI = new $hs.Thunk();
        hs_zddMonoid126DhPI.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfMonoidDual.hscall(hs_zddMonoid26DhPH);
        };
        var hs_sat26Diho = new $hs.Thunk();
        hs_sat26Diho.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid126DhPI);
        };
        var hs_sat26Dihn = new $hs.Thunk();
        hs_sat26Dihn.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid126DhPI);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26Dihn, hs_sat26Diho);
    };
    hs_a1025uTjv.evaluate = function (hs_ds26DhPO, hs_ds126DhPP) {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_ds26DhPO, hs_ds126DhPP);
    };
    hs_zdcmappend825uTjA.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1025uTjv.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcmempty625uTjB.evaluateOnce = function () {
        if ($hs.modules.GHCziBase.hs_id.notEvaluated) {
            return $hs.modules.GHCziBase.hs_id.hscall();
        } else {
            return $hs.modules.GHCziBase.hs_id;
        }
    };
    this.hs_zdfMonoidEndo.data = [$hs.modules.GHCziBase.hs_id, hs_a1025uTjv, hs_zdcmconcat925uTjC];
    hs_zdcmconcat925uTjC.evaluateOnce = function () {
        var hs_sat26Dihq = new $hs.Thunk();
        hs_sat26Dihq.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.DataziMonoid.hs_zdfMonoidEndo);
        };
        var hs_sat26Dihp = new $hs.Thunk();
        hs_sat26Dihp.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall($hs.modules.DataziMonoid.hs_zdfMonoidEndo);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26Dihp, hs_sat26Dihq);
    };
    hs_a1125uTjF.evaluate = function (hs_ds26DhPY, hs_ds126DhPZ) {
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_ds26DhPY, hs_ds126DhPZ);
    };
    hs_zdcmappend925uTjK.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1125uTjF.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcmempty725uTjL.data = [];
    hs_sat26Dihr.evaluateOnce = function () {
        return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.DataziMonoid.hs_zdfMonoidAll);
    };
    hs_sat26Dihs.evaluateOnce = function () {
        return $hs.modules.DataziMonoid.hs_mappend.hscall($hs.modules.DataziMonoid.hs_zdfMonoidAll);
    };
    this.hs_zdfMonoidAll.data = [$hs.modules.GHCziTypes.hs_True, hs_a1125uTjF, hs_zdcmconcat1025uTjM];
    hs_zdcmconcat1025uTjM.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26Dihs, hs_sat26Dihr);
    };
    hs_a1225uTjP.evaluate = function (hs_ds26DhQ8, hs_ds126DhQ9) {
        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_ds26DhQ8, hs_ds126DhQ9);
    };
    hs_zdcmappend1025uTjU.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1225uTjP.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcmempty825uTjV.data = [];
    hs_sat26Diht.evaluateOnce = function () {
        return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.DataziMonoid.hs_zdfMonoidAny);
    };
    hs_sat26Dihu.evaluateOnce = function () {
        return $hs.modules.DataziMonoid.hs_mappend.hscall($hs.modules.DataziMonoid.hs_zdfMonoidAny);
    };
    this.hs_zdfMonoidAny.data = [$hs.modules.GHCziTypes.hs_False, hs_a1225uTjP, hs_zdcmconcat1125uTjW];
    hs_zdcmconcat1125uTjW.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26Dihu, hs_sat26Diht);
    };
    hs_a1325uTjZ.evaluate = function (hs_zddNum26DhQj, hs_ds26DhQk, hs_ds126DhQl) {
        return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum26DhQj, hs_ds26DhQk, hs_ds126DhQl);
    };
    hs_zdcmappend1125uTk6.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1325uTjZ.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1425uTk7.evaluate = function (hs_zddNum26DhQp) {
        var hs_sat26Dihv = new $hs.Thunk();
        hs_sat26Dihv.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DhQp, hs_sat26Dihv);
    };
    hs_zdcmempty925uTkb.evaluate = function (hs_eta1cW6l3) {
        return hs_a1425uTk7.hscall(hs_eta1cW6l3);
    };
    this.hs_zdfMonoidSum.evaluate = function (hs_zddNum26DhQu) {
        var hs_sat26Dihx = new $hs.Thunk();
        hs_sat26Dihx.evaluateOnce = function () {
            return hs_zdcmconcat1225uTkc.hscall(hs_zddNum26DhQu);
        };
        var hs_sat26Dihy = new $hs.Func(2);
        hs_sat26Dihy.evaluate = function (hs_ds26DhQz, hs_ds126DhQA) {
            return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum26DhQu, hs_ds26DhQz, hs_ds126DhQA);
        };
        var hs_sat26Dihw = new $hs.Thunk();
        hs_sat26Dihw.evaluateOnce = function () {
            var hs_sat26Dihz = new $hs.Thunk();
            hs_sat26Dihz.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DhQu, hs_sat26Dihz);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dihw, hs_sat26Dihy, hs_sat26Dihx];
        return $res;
    };
    hs_zdcmconcat1225uTkc.evaluate = function (hs_zddNum26DhQF) {
        var hs_zddMonoid26DhQG = new $hs.Thunk();
        hs_zddMonoid26DhQG.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfMonoidSum.hscall(hs_zddNum26DhQF);
        };
        var hs_sat26DihB = new $hs.Thunk();
        hs_sat26DihB.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid26DhQG);
        };
        var hs_sat26DihA = new $hs.Thunk();
        hs_sat26DihA.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid26DhQG);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DihA, hs_sat26DihB);
    };
    hs_a1525uTkt.evaluate = function (hs_zddNum26DhQN, hs_ds26DhQO, hs_ds126DhQP) {
        return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum26DhQN, hs_ds26DhQO, hs_ds126DhQP);
    };
    hs_zdcmappend1225uTkA.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1525uTkt.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1625uTkB.evaluate = function (hs_zddNum26DhQT) {
        var hs_sat26DihC = new $hs.Thunk();
        hs_sat26DihC.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DhQT, hs_sat26DihC);
    };
    hs_zdcmempty1025uTkF.evaluate = function (hs_eta1cW6l3) {
        return hs_a1625uTkB.hscall(hs_eta1cW6l3);
    };
    this.hs_zdfMonoidProduct.evaluate = function (hs_zddNum26DhQY) {
        var hs_sat26DihE = new $hs.Thunk();
        hs_sat26DihE.evaluateOnce = function () {
            return hs_zdcmconcat1325uTkG.hscall(hs_zddNum26DhQY);
        };
        var hs_sat26DihF = new $hs.Func(2);
        hs_sat26DihF.evaluate = function (hs_ds26DhR3, hs_ds126DhR4) {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum26DhQY, hs_ds26DhR3, hs_ds126DhR4);
        };
        var hs_sat26DihD = new $hs.Thunk();
        hs_sat26DihD.evaluateOnce = function () {
            var hs_sat26DihG = new $hs.Thunk();
            hs_sat26DihG.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DhQY, hs_sat26DihG);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DihD, hs_sat26DihF, hs_sat26DihE];
        return $res;
    };
    hs_zdcmconcat1325uTkG.evaluate = function (hs_zddNum26DhR9) {
        var hs_zddMonoid26DhRa = new $hs.Thunk();
        hs_zddMonoid26DhRa.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfMonoidProduct.hscall(hs_zddNum26DhR9);
        };
        var hs_sat26DihI = new $hs.Thunk();
        hs_sat26DihI.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid26DhRa);
        };
        var hs_sat26DihH = new $hs.Thunk();
        hs_sat26DihH.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid26DhRa);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DihH, hs_sat26DihI);
    };
    hs_zdcmappend1325uTkX.evaluate = function (hs_zddMonoid26DhRx, hs_ds26DhRl, hs_m26DhRn) {
        var hs_fail26DhRk = new $hs.Func(1);
        hs_fail26DhRk.evaluate = function (hs_ds126DhRj) {
            return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/Data/Monoid.hs:(222,3)-(224,52)|function mappend\x00");
        };
        var hs_wild26DhRq = hs_ds26DhRl;
        if (hs_ds26DhRl.notEvaluated) {
            hs_wild26DhRq = hs_ds26DhRl.hscall();
        }
        switch (hs_wild26DhRq.tag) {
        case 1:
            if (hs_m26DhRn.notEvaluated) {
                return hs_m26DhRn.hscall();
            } else {
                return hs_m26DhRn;
            }
        case 2:
            var hs_wild126DhRu = hs_m26DhRn;
            if (hs_m26DhRn.notEvaluated) {
                hs_wild126DhRu = hs_m26DhRn.hscall();
            }
            switch (hs_wild126DhRu.tag) {
            case 1:
                if (hs_wild26DhRq.notEvaluated) {
                    return hs_wild26DhRq.hscall();
                } else {
                    return hs_wild26DhRq;
                }
            case 2:
                var hs_wild226DihL = hs_wild26DhRq;
                if (hs_wild26DhRq.notEvaluated) {
                    hs_wild226DihL = hs_wild26DhRq.hscall();
                }
                switch (hs_wild226DihL.tag) {
                case 1:
                    return hs_fail26DhRk.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                case 2:
                    var hs_m126DhRy = hs_wild226DihL.data[0];
                    var hs_wild326DihK = hs_wild126DhRu;
                    if (hs_wild126DhRu.notEvaluated) {
                        hs_wild326DihK = hs_wild126DhRu.hscall();
                    }
                    switch (hs_wild326DihK.tag) {
                    case 1:
                        return hs_fail26DhRk.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    case 2:
                        var hs_m226DhRz = hs_wild326DihK.data[0];
                        var hs_sat26DihJ = new $hs.Thunk();
                        hs_sat26DihJ.evaluateOnce = function () {
                            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid26DhRx, hs_m126DhRy, hs_m226DhRz);
                        };
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26DihJ];
                        return $res;
                    }
                }
            }
        }
    };
    hs_zdcmempty1125uTll.evaluate = function (hs_zddMonoid26DhRD) {
        var $res = new $hs.Data(1);
        $res.data = [];
        return $res;
    };
    this.hs_zdfMonoidMaybe.evaluate = function (hs_zddMonoid26DhRG) {
        var hs_sat26DihP = new $hs.Thunk();
        hs_sat26DihP.evaluateOnce = function () {
            return hs_zdcmconcat1425uTlo.hscall(hs_zddMonoid26DhRG);
        };
        var hs_sat26DihO = new $hs.Func(2);
        hs_sat26DihO.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcmappend1325uTkX.hscall(hs_zddMonoid26DhRG, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [$hs.modules.DataziMaybe.hs_Nothing, hs_sat26DihO, hs_sat26DihP];
        return $res;
    };
    hs_zdcmconcat1425uTlo.evaluate = function (hs_zddMonoid26DhRL) {
        var hs_zddMonoid126DhRM = new $hs.Thunk();
        hs_zddMonoid126DhRM.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfMonoidMaybe.hscall(hs_zddMonoid26DhRL);
        };
        var hs_sat26DihR = new $hs.Thunk();
        hs_sat26DihR.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid126DhRM);
        };
        var hs_sat26DihQ = new $hs.Thunk();
        hs_sat26DihQ.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid126DhRM);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DihQ, hs_sat26DihR);
    };
    hs_zdcmappend1425uTlz.evaluate = function (hs_r26DhRS, hs_ds26DhRU) {
        var hs_wild26DhRW = hs_r26DhRS;
        if (hs_r26DhRS.notEvaluated) {
            hs_wild26DhRW = hs_r26DhRS.hscall();
        }
        switch (hs_wild26DhRW.tag) {
        case 1:
            if (hs_ds26DhRU.notEvaluated) {
                return hs_ds26DhRU.hscall();
            } else {
                return hs_ds26DhRU;
            }
        case 2:
            if (hs_wild26DhRW.notEvaluated) {
                return hs_wild26DhRW.hscall();
            } else {
                return hs_wild26DhRW;
            }
        }
    };
    hs_zdcmempty1225uTlH.data = [];
    this.hs_zdfMonoidFirst.data = [$hs.modules.DataziMaybe.hs_Nothing, hs_zdcmappend1425uTlz, hs_zdcmconcat1525uTlI];
    hs_zdcmconcat1525uTlI.evaluateOnce = function () {
        var hs_sat26DihU = new $hs.Thunk();
        hs_sat26DihU.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.DataziMonoid.hs_zdfMonoidFirst);
        };
        var hs_sat26DihT = new $hs.Thunk();
        hs_sat26DihT.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall($hs.modules.DataziMonoid.hs_zdfMonoidFirst);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DihT, hs_sat26DihU);
    };
    hs_zdcmappend1525uTlL.evaluate = function (hs_ds26DhS6, hs_r26DhS4) {
        var hs_wild26DhS8 = hs_r26DhS4;
        if (hs_r26DhS4.notEvaluated) {
            hs_wild26DhS8 = hs_r26DhS4.hscall();
        }
        switch (hs_wild26DhS8.tag) {
        case 1:
            if (hs_ds26DhS6.notEvaluated) {
                return hs_ds26DhS6.hscall();
            } else {
                return hs_ds26DhS6;
            }
        case 2:
            if (hs_wild26DhS8.notEvaluated) {
                return hs_wild26DhS8.hscall();
            } else {
                return hs_wild26DhS8;
            }
        }
    };
    hs_zdcmempty1325uTlT.data = [];
    this.hs_zdfMonoidLast.data = [$hs.modules.DataziMaybe.hs_Nothing, hs_zdcmappend1525uTlL, hs_zdcmconcat1625uTlU];
    hs_zdcmconcat1625uTlU.evaluateOnce = function () {
        var hs_sat26DihX = new $hs.Thunk();
        hs_sat26DihX.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.DataziMonoid.hs_zdfMonoidLast);
        };
        var hs_sat26DihW = new $hs.Thunk();
        hs_sat26DihW.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall($hs.modules.DataziMonoid.hs_zdfMonoidLast);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DihW, hs_sat26DihX);
    };
    hs_zdcshowsPrec25uTlX.evaluate = function (hs_zddShow26DhSg) {
        var hs_zddShow126DhSh = new $hs.Thunk();
        hs_zddShow126DhSh.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowMaybe.hscall(hs_zddShow26DhSg);
        };
        var hs_sat26DihY = new $hs.Func(2);
        hs_sat26DihY.evaluate = function (hs_a9026DhSk, hs_ds26DhSs) {
            var hs_sat26Dii0 = new $hs.Thunk();
            hs_sat26Dii0.evaluateOnce = function () {
                var hs_sat26DhSI = new $hs.Thunk();
                hs_sat26DhSI.evaluateOnce = function () {
                    var hs_sat26DhSF = new $hs.Thunk();
                    hs_sat26DhSF.evaluateOnce = function () {
                        var hs_sat26DhSC = new $hs.Thunk();
                        hs_sat26DhSC.evaluateOnce = function () {
                            var hs_sat26DhSA = new $hs.Data(1);
                            hs_sat26DhSA.data = ["}"];
                            var hs_sat26DhSB = new $hs.Data(2);
                            hs_sat26DhSB.data = [hs_sat26DhSA, $hs.modules.GHCziTypes.hs_ZMZN];
                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DhSB);
                        };
                        var hs_sat26DhSE = new $hs.Thunk();
                        hs_sat26DhSE.evaluateOnce = function () {
                            var hs_sat26DhSD = new $hs.Data(1);
                            hs_sat26DhSD.data = [0];
                            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126DhSh, hs_sat26DhSD, hs_ds26DhSs);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DhSE, hs_sat26DhSC);
                    };
                    var hs_sat26DhSH = new $hs.Thunk();
                    hs_sat26DhSH.evaluateOnce = function () {
                        var hs_sat26DhSG = new $hs.Thunk();
                        hs_sat26DhSG.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("getLast = \x00");
                        };
                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DhSG);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DhSH, hs_sat26DhSF);
                };
                var hs_sat26DhSK = new $hs.Thunk();
                hs_sat26DhSK.evaluateOnce = function () {
                    var hs_sat26DhSJ = new $hs.Thunk();
                    hs_sat26DhSJ.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Last {\x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DhSJ);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DhSK, hs_sat26DhSI);
            };
            var hs_sat26DihZ = new $hs.Thunk();
            hs_sat26DihZ.evaluateOnce = function () {
                var hs_sat26Dii1 = new $hs.Data(1);
                hs_sat26Dii1.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a9026DhSk, hs_sat26Dii1);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DihZ, hs_sat26Dii0);
        };
        if (hs_sat26DihY.notEvaluated) {
            return hs_sat26DihY.hscall();
        } else {
            return hs_sat26DihY;
        }
    };
    this.hs_zdfShowLast.evaluate = function (hs_zddShow26DhSP) {
        var hs_sat26Dii3 = new $hs.Thunk();
        hs_sat26Dii3.evaluateOnce = function () {
            return hs_zdcshowList25uTmw.hscall(hs_zddShow26DhSP);
        };
        var hs_sat26Dii4 = new $hs.Thunk();
        hs_sat26Dii4.evaluateOnce = function () {
            return hs_zdcshow25uTmx.hscall(hs_zddShow26DhSP);
        };
        var hs_sat26Dii2 = new $hs.Thunk();
        hs_sat26Dii2.evaluateOnce = function () {
            return hs_zdcshowsPrec25uTlX.hscall(hs_zddShow26DhSP);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dii2, hs_sat26Dii4, hs_sat26Dii3];
        return $res;
    };
    hs_zdcshowList25uTmw.evaluate = function (hs_zddShow26DhSU) {
        var hs_sat26Dii5 = new $hs.Thunk();
        hs_sat26Dii5.evaluateOnce = function () {
            var hs_sat26Dii6 = new $hs.Data(1);
            hs_sat26Dii6.data = [0];
            var hs_sat26Dii7 = $hs.modules.DataziMonoid.hs_zdfShowLast.hscall(hs_zddShow26DhSU);
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_sat26Dii7, hs_sat26Dii6);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26Dii5);
    };
    hs_zdcshow25uTmx.evaluate = function (hs_zddShow26DhSZ) {
        var hs_sat26Dii8 = new $hs.Thunk();
        hs_sat26Dii8.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfShowLast.hscall(hs_zddShow26DhSZ);
        };
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_sat26Dii8);
    };
    hs_zdcreadPrec25uTmL.evaluate = function (hs_zddRead26DhT4) {
        var hs_zddRead126DhT5 = new $hs.Thunk();
        hs_zddRead126DhT5.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_zdfReadMaybe.hscall(hs_zddRead26DhT4);
        };
        var hs_sat26Dii9 = new $hs.Thunk();
        hs_sat26Dii9.evaluateOnce = function () {
            var hs_sat26Diib = new $hs.Thunk();
            hs_sat26Diib.evaluateOnce = function () {
                var hs_sat26Diic = new $hs.Func(1);
                hs_sat26Diic.evaluate = function (hs_ds26DhTd) {
                    var hs_fail26DhTc = new $hs.Func(1);
                    hs_fail26DhTc.evaluate = function (hs_ds126DhTb) {
                        var hs_sat26DiiP = new $hs.Thunk();
                        hs_sat26DiiP.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DiiP);
                    };
                    var hs_wild26Diie = hs_ds26DhTd;
                    if (hs_ds26DhTd.notEvaluated) {
                        hs_wild26Diie = hs_ds26DhTd.hscall();
                    }
                    switch (hs_wild26Diie.tag) {
                    case 4:
                        var hs_ds126DhTg = hs_wild26Diie.data[0];
                        var hs_sat26Diif = new $hs.Thunk();
                        hs_sat26Diif.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Last\x00");
                        };
                        var hs_wild126Diig = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126DhTg, hs_sat26Diif);
                        switch (hs_wild126Diig.tag) {
                        case 1:
                            return hs_fail26DhTc.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        case 2:
                            var hs_sat26Diid = new $hs.Func(1);
                            hs_sat26Diid.evaluate = function (hs_ds226DhTp) {
                                var hs_fail126DhTo = new $hs.Func(1);
                                hs_fail126DhTo.evaluate = function (hs_ds326DhTn) {
                                    var hs_sat26DiiO = new $hs.Thunk();
                                    hs_sat26DiiO.evaluateOnce = function () {
                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                    };
                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DiiO);
                                };
                                var hs_wild226Diin = hs_ds226DhTp;
                                if (hs_ds226DhTp.notEvaluated) {
                                    hs_wild226Diin = hs_ds226DhTp.hscall();
                                }
                                switch (hs_wild226Diin.tag) {
                                case 3:
                                    var hs_ds326DhTs = hs_wild226Diin.data[0];
                                    var hs_wild326Diim = hs_ds326DhTs;
                                    if (hs_ds326DhTs.notEvaluated) {
                                        hs_wild326Diim = hs_ds326DhTs.hscall();
                                    }
                                    switch (hs_wild326Diim.tag) {
                                    case 1:
                                        return hs_fail126DhTo.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                    case 2:
                                        var hs_ds426DhTw = hs_wild326Diim.data[0];
                                        var hs_ds526DhTB = hs_wild326Diim.data[1];
                                        var hs_wild426Diil = hs_ds426DhTw;
                                        if (hs_ds426DhTw.notEvaluated) {
                                            hs_wild426Diil = hs_ds426DhTw.hscall();
                                        }
                                        var hs_ds626DhTz = hs_wild426Diil.data[0];
                                        var hs_ds726Diik = hs_ds626DhTz;
                                        if (hs_ds626DhTz.notEvaluated) {
                                            hs_ds726Diik = hs_ds626DhTz.hscall();
                                        }
                                        switch (hs_ds726Diik) {
                                        case "{":
                                            var hs_wild526Diij = hs_ds526DhTB;
                                            if (hs_ds526DhTB.notEvaluated) {
                                                hs_wild526Diij = hs_ds526DhTB.hscall();
                                            }
                                            switch (hs_wild526Diij.tag) {
                                            case 1:
                                                var hs_sat26Diio = new $hs.Func(1);
                                                hs_sat26Diio.evaluate = function (hs_ds826DhTJ) {
                                                    var hs_fail226DhTI = new $hs.Func(1);
                                                    hs_fail226DhTI.evaluate = function (hs_ds926DhTH) {
                                                        var hs_sat26DiiN = new $hs.Thunk();
                                                        hs_sat26DiiN.evaluateOnce = function () {
                                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                        };
                                                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DiiN);
                                                    };
                                                    var hs_wild626Diiq = hs_ds826DhTJ;
                                                    if (hs_ds826DhTJ.notEvaluated) {
                                                        hs_wild626Diiq = hs_ds826DhTJ.hscall();
                                                    }
                                                    switch (hs_wild626Diiq.tag) {
                                                    case 4:
                                                        var hs_ds926DhTM = hs_wild626Diiq.data[0];
                                                        var hs_sat26Diir = new $hs.Thunk();
                                                        hs_sat26Diir.evaluateOnce = function () {
                                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("getLast\x00");
                                                        };
                                                        var hs_wild726Diis = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds926DhTM, hs_sat26Diir);
                                                        switch (hs_wild726Diis.tag) {
                                                        case 1:
                                                            return hs_fail226DhTI.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                        case 2:
                                                            var hs_sat26Diip = new $hs.Func(1);
                                                            hs_sat26Diip.evaluate = function (hs_ds1026DhTV) {
                                                                var hs_fail326DhTU = new $hs.Func(1);
                                                                hs_fail326DhTU.evaluate = function (hs_ds1126DhTT) {
                                                                    var hs_sat26DiiM = new $hs.Thunk();
                                                                    hs_sat26DiiM.evaluateOnce = function () {
                                                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                    };
                                                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DiiM);
                                                                };
                                                                var hs_wild826Diiz = hs_ds1026DhTV;
                                                                if (hs_ds1026DhTV.notEvaluated) {
                                                                    hs_wild826Diiz = hs_ds1026DhTV.hscall();
                                                                }
                                                                switch (hs_wild826Diiz.tag) {
                                                                case 3:
                                                                    var hs_ds1126DhTY = hs_wild826Diiz.data[0];
                                                                    var hs_wild926Diiy = hs_ds1126DhTY;
                                                                    if (hs_ds1126DhTY.notEvaluated) {
                                                                        hs_wild926Diiy = hs_ds1126DhTY.hscall();
                                                                    }
                                                                    switch (hs_wild926Diiy.tag) {
                                                                    case 1:
                                                                        return hs_fail326DhTU.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                    case 2:
                                                                        var hs_ds1226DhU2 = hs_wild926Diiy.data[0];
                                                                        var hs_ds1326DhU7 = hs_wild926Diiy.data[1];
                                                                        var hs_wild1026Diix = hs_ds1226DhU2;
                                                                        if (hs_ds1226DhU2.notEvaluated) {
                                                                            hs_wild1026Diix = hs_ds1226DhU2.hscall();
                                                                        }
                                                                        var hs_ds1426DhU5 = hs_wild1026Diix.data[0];
                                                                        var hs_ds1526Diiw = hs_ds1426DhU5;
                                                                        if (hs_ds1426DhU5.notEvaluated) {
                                                                            hs_ds1526Diiw = hs_ds1426DhU5.hscall();
                                                                        }
                                                                        switch (hs_ds1526Diiw) {
                                                                        case "=":
                                                                            var hs_wild1126Diiv = hs_ds1326DhU7;
                                                                            if (hs_ds1326DhU7.notEvaluated) {
                                                                                hs_wild1126Diiv = hs_ds1326DhU7.hscall();
                                                                            }
                                                                            switch (hs_wild1126Diiv.tag) {
                                                                            case 1:
                                                                                var hs_sat26DiiB = new $hs.Func(1);
                                                                                hs_sat26DiiB.evaluate = function (hs_a9026DhUw) {
                                                                                    var hs_sat26DiiD = new $hs.Func(1);
                                                                                    hs_sat26DiiD.evaluate = function (hs_ds1626DhUi) {
                                                                                        var hs_fail426DhUh = new $hs.Func(1);
                                                                                        hs_fail426DhUh.evaluate = function (hs_ds1726DhUg) {
                                                                                            var hs_sat26DiiL = new $hs.Thunk();
                                                                                            hs_sat26DiiL.evaluateOnce = function () {
                                                                                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                                            };
                                                                                            return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DiiL);
                                                                                        };
                                                                                        var hs_wild1226DiiK = hs_ds1626DhUi;
                                                                                        if (hs_ds1626DhUi.notEvaluated) {
                                                                                            hs_wild1226DiiK = hs_ds1626DhUi.hscall();
                                                                                        }
                                                                                        switch (hs_wild1226DiiK.tag) {
                                                                                        case 3:
                                                                                            var hs_ds1726DhUl = hs_wild1226DiiK.data[0];
                                                                                            var hs_wild1326DiiJ = hs_ds1726DhUl;
                                                                                            if (hs_ds1726DhUl.notEvaluated) {
                                                                                                hs_wild1326DiiJ = hs_ds1726DhUl.hscall();
                                                                                            }
                                                                                            switch (hs_wild1326DiiJ.tag) {
                                                                                            case 1:
                                                                                                return hs_fail426DhUh.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                            case 2:
                                                                                                var hs_ds1826DhUp = hs_wild1326DiiJ.data[0];
                                                                                                var hs_ds1926DhUu = hs_wild1326DiiJ.data[1];
                                                                                                var hs_wild1426DiiI = hs_ds1826DhUp;
                                                                                                if (hs_ds1826DhUp.notEvaluated) {
                                                                                                    hs_wild1426DiiI = hs_ds1826DhUp.hscall();
                                                                                                }
                                                                                                var hs_ds2026DhUs = hs_wild1426DiiI.data[0];
                                                                                                var hs_ds2126DiiH = hs_ds2026DhUs;
                                                                                                if (hs_ds2026DhUs.notEvaluated) {
                                                                                                    hs_ds2126DiiH = hs_ds2026DhUs.hscall();
                                                                                                }
                                                                                                switch (hs_ds2126DiiH) {
                                                                                                case "}":
                                                                                                    var hs_wild1526DiiG = hs_ds1926DhUu;
                                                                                                    if (hs_ds1926DhUu.notEvaluated) {
                                                                                                        hs_wild1526DiiG = hs_ds1926DhUu.hscall();
                                                                                                    }
                                                                                                    switch (hs_wild1526DiiG.tag) {
                                                                                                    case 1:
                                                                                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_a9026DhUw);
                                                                                                    case 2:
                                                                                                        return hs_fail426DhUh.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                    }
                                                                                                default:
                                                                                                    return hs_fail426DhUh.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                }
                                                                                            }
                                                                                        default:
                                                                                            return hs_fail426DhUh.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                        }
                                                                                    };
                                                                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DiiD);
                                                                                };
                                                                                var hs_sat26DiiA = new $hs.Thunk();
                                                                                hs_sat26DiiA.evaluateOnce = function () {
                                                                                    var hs_sat26DiiC = new $hs.Thunk();
                                                                                    hs_sat26DiiC.evaluateOnce = function () {
                                                                                        return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead126DhT5);
                                                                                    };
                                                                                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_reset.hscall(hs_sat26DiiC);
                                                                                };
                                                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DiiA, hs_sat26DiiB);
                                                                            case 2:
                                                                                return hs_fail326DhTU.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                            }
                                                                        default:
                                                                            return hs_fail326DhTU.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                        }
                                                                    }
                                                                default:
                                                                    return hs_fail326DhTU.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                }
                                                            };
                                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Diip);
                                                        }
                                                    default:
                                                        return hs_fail226DhTI.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                    }
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Diio);
                                            case 2:
                                                return hs_fail126DhTo.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                            }
                                        default:
                                            return hs_fail126DhTo.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                        }
                                    }
                                default:
                                    return hs_fail126DhTo.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                }
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Diid);
                        }
                    default:
                        return hs_fail26DhTc.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Diic);
            };
            var hs_sat26Diia = new $hs.Data(1);
            hs_sat26Diia.data = [11];
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall(hs_sat26Diia, hs_sat26Diib);
        };
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26Dii9);
    };
    this.hs_zdfReadLast.evaluate = function (hs_zddRead26DhUP) {
        var hs_sat26DiiR = new $hs.Thunk();
        hs_sat26DiiR.evaluateOnce = function () {
            return hs_zdcreadListPrec25uTov.hscall(hs_zddRead26DhUP);
        };
        var hs_sat26DiiS = new $hs.Thunk();
        hs_sat26DiiS.evaluateOnce = function () {
            return hs_zdcreadPrec25uTmL.hscall(hs_zddRead26DhUP);
        };
        var hs_sat26DiiT = new $hs.Thunk();
        hs_sat26DiiT.evaluateOnce = function () {
            return hs_zdcreadList25uTow.hscall(hs_zddRead26DhUP);
        };
        var hs_sat26DiiQ = new $hs.Thunk();
        hs_sat26DiiQ.evaluateOnce = function () {
            return hs_zdcreadsPrec25uTox.hscall(hs_zddRead26DhUP);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DiiQ, hs_sat26DiiT, hs_sat26DiiS, hs_sat26DiiR];
        return $res;
    };
    hs_zdcreadListPrec25uTov.evaluate = function (hs_zddRead26DhUV) {
        var hs_sat26DiiU = new $hs.Thunk();
        hs_sat26DiiU.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadLast.hscall(hs_zddRead26DhUV);
        };
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall(hs_sat26DiiU);
    };
    hs_zdcreadList25uTow.evaluate = function (hs_zddRead26DhUY) {
        var hs_sat26DiiV = new $hs.Thunk();
        hs_sat26DiiV.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadLast.hscall(hs_zddRead26DhUY);
        };
        return $hs.modules.GHCziRead.hs_readListDefault.hscall(hs_sat26DiiV);
    };
    hs_zdcreadsPrec25uTox.evaluate = function (hs_zddRead26DhV1) {
        var hs_sat26DiiW = new $hs.Thunk();
        hs_sat26DiiW.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadLast.hscall(hs_zddRead26DhV1);
        };
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall(hs_sat26DiiW);
    };
    hs_a1725uToN.evaluate = function (hs_zddOrd26DhV5) {
        var hs_sat26DiiX = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhV5);
        return $hs.modules.GHCziClasses.hs_min.hscall(hs_sat26DiiX);
    };
    hs_zdcmin25uToR.evaluate = function (hs_eta1cW6l3) {
        return hs_a1725uToN.hscall(hs_eta1cW6l3);
    };
    hs_a1825uToS.evaluate = function (hs_zddOrd26DhVa) {
        var hs_sat26DiiY = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhVa);
        return $hs.modules.GHCziClasses.hs_max.hscall(hs_sat26DiiY);
    };
    hs_zdcmax25uToW.evaluate = function (hs_eta1cW6l3) {
        return hs_a1825uToS.hscall(hs_eta1cW6l3);
    };
    hs_a1925uToX.evaluate = function (hs_zddOrd26DhVf) {
        var hs_sat26DiiZ = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhVf);
        return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_sat26DiiZ);
    };
    hs_zdczlze25uTp1.evaluate = function (hs_eta1cW6l3) {
        return hs_a1925uToX.hscall(hs_eta1cW6l3);
    };
    hs_a2025uTp2.evaluate = function (hs_zddOrd26DhVk) {
        var hs_sat26Dij0 = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhVk);
        return $hs.modules.GHCziClasses.hs_zg.hscall(hs_sat26Dij0);
    };
    hs_zdczg25uTp6.evaluate = function (hs_eta1cW6l3) {
        return hs_a2025uTp2.hscall(hs_eta1cW6l3);
    };
    hs_a2125uTp7.evaluate = function (hs_zddOrd26DhVp) {
        var hs_sat26Dij1 = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhVp);
        return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_sat26Dij1);
    };
    hs_zdczgze25uTpb.evaluate = function (hs_eta1cW6l3) {
        return hs_a2125uTp7.hscall(hs_eta1cW6l3);
    };
    hs_a2225uTpc.evaluate = function (hs_zddOrd26DhVu) {
        var hs_sat26Dij2 = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhVu);
        return $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26Dij2);
    };
    hs_zdczl25uTpg.evaluate = function (hs_eta1cW6l3) {
        return hs_a2225uTpc.hscall(hs_eta1cW6l3);
    };
    hs_a2325uTph.evaluate = function (hs_zddOrd26DhVz) {
        var hs_sat26Dij3 = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhVz);
        return $hs.modules.GHCziClasses.hs_compare.hscall(hs_sat26Dij3);
    };
    hs_zdccompare25uTpl.evaluate = function (hs_eta1cW6l3) {
        return hs_a2325uTph.hscall(hs_eta1cW6l3);
    };
    hs_a2425uTpm.evaluate = function (hs_zddEq26DhVE) {
        var hs_sat26Dij4 = $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_zddEq26DhVE);
        return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_sat26Dij4);
    };
    hs_zdczsze25uTpq.evaluate = function (hs_eta1cW6l3) {
        return hs_a2425uTpm.hscall(hs_eta1cW6l3);
    };
    hs_a2525uTpr.evaluate = function (hs_zddEq26DhVJ) {
        var hs_sat26Dij5 = $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_zddEq26DhVJ);
        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26Dij5);
    };
    hs_zdczeze25uTpv.evaluate = function (hs_eta1cW6l3) {
        return hs_a2525uTpr.hscall(hs_eta1cW6l3);
    };
    this.hs_zdfEqLast.evaluate = function (hs_zddEq26DhVN) {
        var hs_sat26Dij7 = new $hs.Thunk();
        hs_sat26Dij7.evaluateOnce = function () {
            var hs_sat26Dij9 = $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_zddEq26DhVN);
            return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_sat26Dij9);
        };
        var hs_sat26Dij6 = new $hs.Thunk();
        hs_sat26Dij6.evaluateOnce = function () {
            var hs_sat26Dij8 = $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_zddEq26DhVN);
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26Dij8);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dij6, hs_sat26Dij7];
        return $res;
    };
    hs_zdczdp1Ord25uTpC.evaluate = function (hs_zddOrd26DhVU) {
        var hs_sat26Dija = new $hs.Thunk();
        hs_sat26Dija.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DhVU);
        };
        return $hs.modules.DataziMonoid.hs_zdfEqLast.hscall(hs_sat26Dija);
    };
    this.hs_zdfOrdLast.evaluate = function (hs_zddOrd26DhVX) {
        var hs_sat26Dijc = new $hs.Thunk();
        hs_sat26Dijc.evaluateOnce = function () {
            var hs_sat26Dijp = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhVX);
            return $hs.modules.GHCziClasses.hs_min.hscall(hs_sat26Dijp);
        };
        var hs_sat26Dijd = new $hs.Thunk();
        hs_sat26Dijd.evaluateOnce = function () {
            var hs_sat26Dijo = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhVX);
            return $hs.modules.GHCziClasses.hs_max.hscall(hs_sat26Dijo);
        };
        var hs_sat26Dije = new $hs.Thunk();
        hs_sat26Dije.evaluateOnce = function () {
            var hs_sat26Dijn = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhVX);
            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_sat26Dijn);
        };
        var hs_sat26Dijf = new $hs.Thunk();
        hs_sat26Dijf.evaluateOnce = function () {
            var hs_sat26Dijm = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhVX);
            return $hs.modules.GHCziClasses.hs_zg.hscall(hs_sat26Dijm);
        };
        var hs_sat26Dijg = new $hs.Thunk();
        hs_sat26Dijg.evaluateOnce = function () {
            var hs_sat26Dijl = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhVX);
            return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_sat26Dijl);
        };
        var hs_sat26Dijh = new $hs.Thunk();
        hs_sat26Dijh.evaluateOnce = function () {
            var hs_sat26Dijk = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhVX);
            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26Dijk);
        };
        var hs_sat26Diji = new $hs.Thunk();
        hs_sat26Diji.evaluateOnce = function () {
            var hs_sat26Dijj = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhVX);
            return $hs.modules.GHCziClasses.hs_compare.hscall(hs_sat26Dijj);
        };
        var hs_sat26Dijb = new $hs.Thunk();
        hs_sat26Dijb.evaluateOnce = function () {
            return hs_zdczdp1Ord25uTpC.hscall(hs_zddOrd26DhVX);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dijb, hs_sat26Diji, hs_sat26Dijh, hs_sat26Dijg, hs_sat26Dijf, hs_sat26Dije, hs_sat26Dijd, hs_sat26Dijc];
        return $res;
    };
    hs_zdcshowsPrec125uTpX.evaluate = function (hs_zddShow26DhWg) {
        var hs_zddShow126DhWh = new $hs.Thunk();
        hs_zddShow126DhWh.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowMaybe.hscall(hs_zddShow26DhWg);
        };
        var hs_sat26Dijq = new $hs.Func(2);
        hs_sat26Dijq.evaluate = function (hs_a9026DhWk, hs_ds26DhWs) {
            var hs_sat26Dijs = new $hs.Thunk();
            hs_sat26Dijs.evaluateOnce = function () {
                var hs_sat26DhWI = new $hs.Thunk();
                hs_sat26DhWI.evaluateOnce = function () {
                    var hs_sat26DhWF = new $hs.Thunk();
                    hs_sat26DhWF.evaluateOnce = function () {
                        var hs_sat26DhWC = new $hs.Thunk();
                        hs_sat26DhWC.evaluateOnce = function () {
                            var hs_sat26DhWA = new $hs.Data(1);
                            hs_sat26DhWA.data = ["}"];
                            var hs_sat26DhWB = new $hs.Data(2);
                            hs_sat26DhWB.data = [hs_sat26DhWA, $hs.modules.GHCziTypes.hs_ZMZN];
                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DhWB);
                        };
                        var hs_sat26DhWE = new $hs.Thunk();
                        hs_sat26DhWE.evaluateOnce = function () {
                            var hs_sat26DhWD = new $hs.Data(1);
                            hs_sat26DhWD.data = [0];
                            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126DhWh, hs_sat26DhWD, hs_ds26DhWs);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DhWE, hs_sat26DhWC);
                    };
                    var hs_sat26DhWH = new $hs.Thunk();
                    hs_sat26DhWH.evaluateOnce = function () {
                        var hs_sat26DhWG = new $hs.Thunk();
                        hs_sat26DhWG.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("getFirst = \x00");
                        };
                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DhWG);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DhWH, hs_sat26DhWF);
                };
                var hs_sat26DhWK = new $hs.Thunk();
                hs_sat26DhWK.evaluateOnce = function () {
                    var hs_sat26DhWJ = new $hs.Thunk();
                    hs_sat26DhWJ.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("First {\x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DhWJ);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DhWK, hs_sat26DhWI);
            };
            var hs_sat26Dijr = new $hs.Thunk();
            hs_sat26Dijr.evaluateOnce = function () {
                var hs_sat26Dijt = new $hs.Data(1);
                hs_sat26Dijt.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a9026DhWk, hs_sat26Dijt);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26Dijr, hs_sat26Dijs);
        };
        if (hs_sat26Dijq.notEvaluated) {
            return hs_sat26Dijq.hscall();
        } else {
            return hs_sat26Dijq;
        }
    };
    this.hs_zdfShowFirst.evaluate = function (hs_zddShow26DhWP) {
        var hs_sat26Dijv = new $hs.Thunk();
        hs_sat26Dijv.evaluateOnce = function () {
            return hs_zdcshowList125uTqw.hscall(hs_zddShow26DhWP);
        };
        var hs_sat26Dijw = new $hs.Thunk();
        hs_sat26Dijw.evaluateOnce = function () {
            return hs_zdcshow125uTqx.hscall(hs_zddShow26DhWP);
        };
        var hs_sat26Diju = new $hs.Thunk();
        hs_sat26Diju.evaluateOnce = function () {
            return hs_zdcshowsPrec125uTpX.hscall(hs_zddShow26DhWP);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Diju, hs_sat26Dijw, hs_sat26Dijv];
        return $res;
    };
    hs_zdcshowList125uTqw.evaluate = function (hs_zddShow26DhWU) {
        var hs_sat26Dijx = new $hs.Thunk();
        hs_sat26Dijx.evaluateOnce = function () {
            var hs_sat26Dijy = new $hs.Data(1);
            hs_sat26Dijy.data = [0];
            var hs_sat26Dijz = $hs.modules.DataziMonoid.hs_zdfShowFirst.hscall(hs_zddShow26DhWU);
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_sat26Dijz, hs_sat26Dijy);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26Dijx);
    };
    hs_zdcshow125uTqx.evaluate = function (hs_zddShow26DhWZ) {
        var hs_sat26DijA = new $hs.Thunk();
        hs_sat26DijA.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfShowFirst.hscall(hs_zddShow26DhWZ);
        };
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_sat26DijA);
    };
    hs_zdcreadPrec125uTqL.evaluate = function (hs_zddRead26DhX4) {
        var hs_zddRead126DhX5 = new $hs.Thunk();
        hs_zddRead126DhX5.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_zdfReadMaybe.hscall(hs_zddRead26DhX4);
        };
        var hs_sat26DijB = new $hs.Thunk();
        hs_sat26DijB.evaluateOnce = function () {
            var hs_sat26DijD = new $hs.Thunk();
            hs_sat26DijD.evaluateOnce = function () {
                var hs_sat26DijE = new $hs.Func(1);
                hs_sat26DijE.evaluate = function (hs_ds26DhXd) {
                    var hs_fail26DhXc = new $hs.Func(1);
                    hs_fail26DhXc.evaluate = function (hs_ds126DhXb) {
                        var hs_sat26Dikh = new $hs.Thunk();
                        hs_sat26Dikh.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Dikh);
                    };
                    var hs_wild26DijG = hs_ds26DhXd;
                    if (hs_ds26DhXd.notEvaluated) {
                        hs_wild26DijG = hs_ds26DhXd.hscall();
                    }
                    switch (hs_wild26DijG.tag) {
                    case 4:
                        var hs_ds126DhXg = hs_wild26DijG.data[0];
                        var hs_sat26DijH = new $hs.Thunk();
                        hs_sat26DijH.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("First\x00");
                        };
                        var hs_wild126DijI = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126DhXg, hs_sat26DijH);
                        switch (hs_wild126DijI.tag) {
                        case 1:
                            return hs_fail26DhXc.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        case 2:
                            var hs_sat26DijF = new $hs.Func(1);
                            hs_sat26DijF.evaluate = function (hs_ds226DhXp) {
                                var hs_fail126DhXo = new $hs.Func(1);
                                hs_fail126DhXo.evaluate = function (hs_ds326DhXn) {
                                    var hs_sat26Dikg = new $hs.Thunk();
                                    hs_sat26Dikg.evaluateOnce = function () {
                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                    };
                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Dikg);
                                };
                                var hs_wild226DijP = hs_ds226DhXp;
                                if (hs_ds226DhXp.notEvaluated) {
                                    hs_wild226DijP = hs_ds226DhXp.hscall();
                                }
                                switch (hs_wild226DijP.tag) {
                                case 3:
                                    var hs_ds326DhXs = hs_wild226DijP.data[0];
                                    var hs_wild326DijO = hs_ds326DhXs;
                                    if (hs_ds326DhXs.notEvaluated) {
                                        hs_wild326DijO = hs_ds326DhXs.hscall();
                                    }
                                    switch (hs_wild326DijO.tag) {
                                    case 1:
                                        return hs_fail126DhXo.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                    case 2:
                                        var hs_ds426DhXw = hs_wild326DijO.data[0];
                                        var hs_ds526DhXB = hs_wild326DijO.data[1];
                                        var hs_wild426DijN = hs_ds426DhXw;
                                        if (hs_ds426DhXw.notEvaluated) {
                                            hs_wild426DijN = hs_ds426DhXw.hscall();
                                        }
                                        var hs_ds626DhXz = hs_wild426DijN.data[0];
                                        var hs_ds726DijM = hs_ds626DhXz;
                                        if (hs_ds626DhXz.notEvaluated) {
                                            hs_ds726DijM = hs_ds626DhXz.hscall();
                                        }
                                        switch (hs_ds726DijM) {
                                        case "{":
                                            var hs_wild526DijL = hs_ds526DhXB;
                                            if (hs_ds526DhXB.notEvaluated) {
                                                hs_wild526DijL = hs_ds526DhXB.hscall();
                                            }
                                            switch (hs_wild526DijL.tag) {
                                            case 1:
                                                var hs_sat26DijQ = new $hs.Func(1);
                                                hs_sat26DijQ.evaluate = function (hs_ds826DhXJ) {
                                                    var hs_fail226DhXI = new $hs.Func(1);
                                                    hs_fail226DhXI.evaluate = function (hs_ds926DhXH) {
                                                        var hs_sat26Dikf = new $hs.Thunk();
                                                        hs_sat26Dikf.evaluateOnce = function () {
                                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                        };
                                                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Dikf);
                                                    };
                                                    var hs_wild626DijS = hs_ds826DhXJ;
                                                    if (hs_ds826DhXJ.notEvaluated) {
                                                        hs_wild626DijS = hs_ds826DhXJ.hscall();
                                                    }
                                                    switch (hs_wild626DijS.tag) {
                                                    case 4:
                                                        var hs_ds926DhXM = hs_wild626DijS.data[0];
                                                        var hs_sat26DijT = new $hs.Thunk();
                                                        hs_sat26DijT.evaluateOnce = function () {
                                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("getFirst\x00");
                                                        };
                                                        var hs_wild726DijU = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds926DhXM, hs_sat26DijT);
                                                        switch (hs_wild726DijU.tag) {
                                                        case 1:
                                                            return hs_fail226DhXI.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                        case 2:
                                                            var hs_sat26DijR = new $hs.Func(1);
                                                            hs_sat26DijR.evaluate = function (hs_ds1026DhXV) {
                                                                var hs_fail326DhXU = new $hs.Func(1);
                                                                hs_fail326DhXU.evaluate = function (hs_ds1126DhXT) {
                                                                    var hs_sat26Dike = new $hs.Thunk();
                                                                    hs_sat26Dike.evaluateOnce = function () {
                                                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                    };
                                                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Dike);
                                                                };
                                                                var hs_wild826Dik1 = hs_ds1026DhXV;
                                                                if (hs_ds1026DhXV.notEvaluated) {
                                                                    hs_wild826Dik1 = hs_ds1026DhXV.hscall();
                                                                }
                                                                switch (hs_wild826Dik1.tag) {
                                                                case 3:
                                                                    var hs_ds1126DhXY = hs_wild826Dik1.data[0];
                                                                    var hs_wild926Dik0 = hs_ds1126DhXY;
                                                                    if (hs_ds1126DhXY.notEvaluated) {
                                                                        hs_wild926Dik0 = hs_ds1126DhXY.hscall();
                                                                    }
                                                                    switch (hs_wild926Dik0.tag) {
                                                                    case 1:
                                                                        return hs_fail326DhXU.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                    case 2:
                                                                        var hs_ds1226DhY2 = hs_wild926Dik0.data[0];
                                                                        var hs_ds1326DhY7 = hs_wild926Dik0.data[1];
                                                                        var hs_wild1026DijZ = hs_ds1226DhY2;
                                                                        if (hs_ds1226DhY2.notEvaluated) {
                                                                            hs_wild1026DijZ = hs_ds1226DhY2.hscall();
                                                                        }
                                                                        var hs_ds1426DhY5 = hs_wild1026DijZ.data[0];
                                                                        var hs_ds1526DijY = hs_ds1426DhY5;
                                                                        if (hs_ds1426DhY5.notEvaluated) {
                                                                            hs_ds1526DijY = hs_ds1426DhY5.hscall();
                                                                        }
                                                                        switch (hs_ds1526DijY) {
                                                                        case "=":
                                                                            var hs_wild1126DijX = hs_ds1326DhY7;
                                                                            if (hs_ds1326DhY7.notEvaluated) {
                                                                                hs_wild1126DijX = hs_ds1326DhY7.hscall();
                                                                            }
                                                                            switch (hs_wild1126DijX.tag) {
                                                                            case 1:
                                                                                var hs_sat26Dik3 = new $hs.Func(1);
                                                                                hs_sat26Dik3.evaluate = function (hs_a9026DhYw) {
                                                                                    var hs_sat26Dik5 = new $hs.Func(1);
                                                                                    hs_sat26Dik5.evaluate = function (hs_ds1626DhYi) {
                                                                                        var hs_fail426DhYh = new $hs.Func(1);
                                                                                        hs_fail426DhYh.evaluate = function (hs_ds1726DhYg) {
                                                                                            var hs_sat26Dikd = new $hs.Thunk();
                                                                                            hs_sat26Dikd.evaluateOnce = function () {
                                                                                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                                            };
                                                                                            return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Dikd);
                                                                                        };
                                                                                        var hs_wild1226Dikc = hs_ds1626DhYi;
                                                                                        if (hs_ds1626DhYi.notEvaluated) {
                                                                                            hs_wild1226Dikc = hs_ds1626DhYi.hscall();
                                                                                        }
                                                                                        switch (hs_wild1226Dikc.tag) {
                                                                                        case 3:
                                                                                            var hs_ds1726DhYl = hs_wild1226Dikc.data[0];
                                                                                            var hs_wild1326Dikb = hs_ds1726DhYl;
                                                                                            if (hs_ds1726DhYl.notEvaluated) {
                                                                                                hs_wild1326Dikb = hs_ds1726DhYl.hscall();
                                                                                            }
                                                                                            switch (hs_wild1326Dikb.tag) {
                                                                                            case 1:
                                                                                                return hs_fail426DhYh.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                            case 2:
                                                                                                var hs_ds1826DhYp = hs_wild1326Dikb.data[0];
                                                                                                var hs_ds1926DhYu = hs_wild1326Dikb.data[1];
                                                                                                var hs_wild1426Dika = hs_ds1826DhYp;
                                                                                                if (hs_ds1826DhYp.notEvaluated) {
                                                                                                    hs_wild1426Dika = hs_ds1826DhYp.hscall();
                                                                                                }
                                                                                                var hs_ds2026DhYs = hs_wild1426Dika.data[0];
                                                                                                var hs_ds2126Dik9 = hs_ds2026DhYs;
                                                                                                if (hs_ds2026DhYs.notEvaluated) {
                                                                                                    hs_ds2126Dik9 = hs_ds2026DhYs.hscall();
                                                                                                }
                                                                                                switch (hs_ds2126Dik9) {
                                                                                                case "}":
                                                                                                    var hs_wild1526Dik8 = hs_ds1926DhYu;
                                                                                                    if (hs_ds1926DhYu.notEvaluated) {
                                                                                                        hs_wild1526Dik8 = hs_ds1926DhYu.hscall();
                                                                                                    }
                                                                                                    switch (hs_wild1526Dik8.tag) {
                                                                                                    case 1:
                                                                                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_a9026DhYw);
                                                                                                    case 2:
                                                                                                        return hs_fail426DhYh.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                    }
                                                                                                default:
                                                                                                    return hs_fail426DhYh.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                }
                                                                                            }
                                                                                        default:
                                                                                            return hs_fail426DhYh.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                        }
                                                                                    };
                                                                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Dik5);
                                                                                };
                                                                                var hs_sat26Dik2 = new $hs.Thunk();
                                                                                hs_sat26Dik2.evaluateOnce = function () {
                                                                                    var hs_sat26Dik4 = new $hs.Thunk();
                                                                                    hs_sat26Dik4.evaluateOnce = function () {
                                                                                        return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead126DhX5);
                                                                                    };
                                                                                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_reset.hscall(hs_sat26Dik4);
                                                                                };
                                                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Dik2, hs_sat26Dik3);
                                                                            case 2:
                                                                                return hs_fail326DhXU.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                            }
                                                                        default:
                                                                            return hs_fail326DhXU.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                        }
                                                                    }
                                                                default:
                                                                    return hs_fail326DhXU.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                }
                                                            };
                                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DijR);
                                                        }
                                                    default:
                                                        return hs_fail226DhXI.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                    }
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DijQ);
                                            case 2:
                                                return hs_fail126DhXo.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                            }
                                        default:
                                            return hs_fail126DhXo.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                        }
                                    }
                                default:
                                    return hs_fail126DhXo.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                }
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DijF);
                        }
                    default:
                        return hs_fail26DhXc.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DijE);
            };
            var hs_sat26DijC = new $hs.Data(1);
            hs_sat26DijC.data = [11];
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall(hs_sat26DijC, hs_sat26DijD);
        };
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26DijB);
    };
    this.hs_zdfReadFirst.evaluate = function (hs_zddRead26DhYP) {
        var hs_sat26Dikj = new $hs.Thunk();
        hs_sat26Dikj.evaluateOnce = function () {
            return hs_zdcreadListPrec125uTsv.hscall(hs_zddRead26DhYP);
        };
        var hs_sat26Dikk = new $hs.Thunk();
        hs_sat26Dikk.evaluateOnce = function () {
            return hs_zdcreadPrec125uTqL.hscall(hs_zddRead26DhYP);
        };
        var hs_sat26Dikl = new $hs.Thunk();
        hs_sat26Dikl.evaluateOnce = function () {
            return hs_zdcreadList125uTsw.hscall(hs_zddRead26DhYP);
        };
        var hs_sat26Diki = new $hs.Thunk();
        hs_sat26Diki.evaluateOnce = function () {
            return hs_zdcreadsPrec125uTsx.hscall(hs_zddRead26DhYP);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Diki, hs_sat26Dikl, hs_sat26Dikk, hs_sat26Dikj];
        return $res;
    };
    hs_zdcreadListPrec125uTsv.evaluate = function (hs_zddRead26DhYV) {
        var hs_sat26Dikm = new $hs.Thunk();
        hs_sat26Dikm.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadFirst.hscall(hs_zddRead26DhYV);
        };
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall(hs_sat26Dikm);
    };
    hs_zdcreadList125uTsw.evaluate = function (hs_zddRead26DhYY) {
        var hs_sat26Dikn = new $hs.Thunk();
        hs_sat26Dikn.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadFirst.hscall(hs_zddRead26DhYY);
        };
        return $hs.modules.GHCziRead.hs_readListDefault.hscall(hs_sat26Dikn);
    };
    hs_zdcreadsPrec125uTsx.evaluate = function (hs_zddRead26DhZ1) {
        var hs_sat26Diko = new $hs.Thunk();
        hs_sat26Diko.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadFirst.hscall(hs_zddRead26DhZ1);
        };
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall(hs_sat26Diko);
    };
    hs_a2625uTsN.evaluate = function (hs_zddOrd26DhZ5) {
        var hs_sat26Dikp = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhZ5);
        return $hs.modules.GHCziClasses.hs_min.hscall(hs_sat26Dikp);
    };
    hs_zdcmin125uTsR.evaluate = function (hs_eta1cW6l3) {
        return hs_a2625uTsN.hscall(hs_eta1cW6l3);
    };
    hs_a2725uTsS.evaluate = function (hs_zddOrd26DhZa) {
        var hs_sat26Dikq = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhZa);
        return $hs.modules.GHCziClasses.hs_max.hscall(hs_sat26Dikq);
    };
    hs_zdcmax125uTsW.evaluate = function (hs_eta1cW6l3) {
        return hs_a2725uTsS.hscall(hs_eta1cW6l3);
    };
    hs_a2825uTsX.evaluate = function (hs_zddOrd26DhZf) {
        var hs_sat26Dikr = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhZf);
        return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_sat26Dikr);
    };
    hs_zdczlze125uTt1.evaluate = function (hs_eta1cW6l3) {
        return hs_a2825uTsX.hscall(hs_eta1cW6l3);
    };
    hs_a2925uTt2.evaluate = function (hs_zddOrd26DhZk) {
        var hs_sat26Diks = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhZk);
        return $hs.modules.GHCziClasses.hs_zg.hscall(hs_sat26Diks);
    };
    hs_zdczg125uTt6.evaluate = function (hs_eta1cW6l3) {
        return hs_a2925uTt2.hscall(hs_eta1cW6l3);
    };
    hs_a3025uTt7.evaluate = function (hs_zddOrd26DhZp) {
        var hs_sat26Dikt = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhZp);
        return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_sat26Dikt);
    };
    hs_zdczgze125uTtb.evaluate = function (hs_eta1cW6l3) {
        return hs_a3025uTt7.hscall(hs_eta1cW6l3);
    };
    hs_a3125uTtc.evaluate = function (hs_zddOrd26DhZu) {
        var hs_sat26Diku = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhZu);
        return $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26Diku);
    };
    hs_zdczl125uTtg.evaluate = function (hs_eta1cW6l3) {
        return hs_a3125uTtc.hscall(hs_eta1cW6l3);
    };
    hs_a3225uTth.evaluate = function (hs_zddOrd26DhZz) {
        var hs_sat26Dikv = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhZz);
        return $hs.modules.GHCziClasses.hs_compare.hscall(hs_sat26Dikv);
    };
    hs_zdccompare125uTtl.evaluate = function (hs_eta1cW6l3) {
        return hs_a3225uTth.hscall(hs_eta1cW6l3);
    };
    hs_a3325uTtm.evaluate = function (hs_zddEq26DhZE) {
        var hs_sat26Dikw = $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_zddEq26DhZE);
        return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_sat26Dikw);
    };
    hs_zdczsze125uTtq.evaluate = function (hs_eta1cW6l3) {
        return hs_a3325uTtm.hscall(hs_eta1cW6l3);
    };
    hs_a3425uTtr.evaluate = function (hs_zddEq26DhZJ) {
        var hs_sat26Dikx = $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_zddEq26DhZJ);
        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26Dikx);
    };
    hs_zdczeze125uTtv.evaluate = function (hs_eta1cW6l3) {
        return hs_a3425uTtr.hscall(hs_eta1cW6l3);
    };
    this.hs_zdfEqFirst.evaluate = function (hs_zddEq26DhZN) {
        var hs_sat26Dikz = new $hs.Thunk();
        hs_sat26Dikz.evaluateOnce = function () {
            var hs_sat26DikB = $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_zddEq26DhZN);
            return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_sat26DikB);
        };
        var hs_sat26Diky = new $hs.Thunk();
        hs_sat26Diky.evaluateOnce = function () {
            var hs_sat26DikA = $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_zddEq26DhZN);
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26DikA);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Diky, hs_sat26Dikz];
        return $res;
    };
    hs_zdczdp1Ord125uTtC.evaluate = function (hs_zddOrd26DhZU) {
        var hs_sat26DikC = new $hs.Thunk();
        hs_sat26DikC.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DhZU);
        };
        return $hs.modules.DataziMonoid.hs_zdfEqFirst.hscall(hs_sat26DikC);
    };
    this.hs_zdfOrdFirst.evaluate = function (hs_zddOrd26DhZX) {
        var hs_sat26DikE = new $hs.Thunk();
        hs_sat26DikE.evaluateOnce = function () {
            var hs_sat26DikR = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhZX);
            return $hs.modules.GHCziClasses.hs_min.hscall(hs_sat26DikR);
        };
        var hs_sat26DikF = new $hs.Thunk();
        hs_sat26DikF.evaluateOnce = function () {
            var hs_sat26DikQ = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhZX);
            return $hs.modules.GHCziClasses.hs_max.hscall(hs_sat26DikQ);
        };
        var hs_sat26DikG = new $hs.Thunk();
        hs_sat26DikG.evaluateOnce = function () {
            var hs_sat26DikP = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhZX);
            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_sat26DikP);
        };
        var hs_sat26DikH = new $hs.Thunk();
        hs_sat26DikH.evaluateOnce = function () {
            var hs_sat26DikO = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhZX);
            return $hs.modules.GHCziClasses.hs_zg.hscall(hs_sat26DikO);
        };
        var hs_sat26DikI = new $hs.Thunk();
        hs_sat26DikI.evaluateOnce = function () {
            var hs_sat26DikN = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhZX);
            return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_sat26DikN);
        };
        var hs_sat26DikJ = new $hs.Thunk();
        hs_sat26DikJ.evaluateOnce = function () {
            var hs_sat26DikM = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhZX);
            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26DikM);
        };
        var hs_sat26DikK = new $hs.Thunk();
        hs_sat26DikK.evaluateOnce = function () {
            var hs_sat26DikL = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26DhZX);
            return $hs.modules.GHCziClasses.hs_compare.hscall(hs_sat26DikL);
        };
        var hs_sat26DikD = new $hs.Thunk();
        hs_sat26DikD.evaluateOnce = function () {
            return hs_zdczdp1Ord125uTtC.hscall(hs_zddOrd26DhZX);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DikD, hs_sat26DikK, hs_sat26DikJ, hs_sat26DikI, hs_sat26DikH, hs_sat26DikG, hs_sat26DikF, hs_sat26DikE];
        return $res;
    };
    hs_a3525uTtX.evaluate = function (hs_zddBounded26Di0f) {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26Di0f);
    };
    hs_zdcmaxBound25uTu0.evaluate = function (hs_eta1cW6l3) {
        return hs_a3525uTtX.hscall(hs_eta1cW6l3);
    };
    hs_a3625uTu1.evaluate = function (hs_zddBounded26Di0j) {
        return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26Di0j);
    };
    hs_zdcminBound25uTu4.evaluate = function (hs_eta1cW6l3) {
        return hs_a3625uTu1.hscall(hs_eta1cW6l3);
    };
    this.hs_zdfBoundedProduct.evaluate = function (hs_zddBounded26Di0m) {
        var hs_sat26DikT = new $hs.Thunk();
        hs_sat26DikT.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26Di0m);
        };
        var hs_sat26DikS = new $hs.Thunk();
        hs_sat26DikS.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26Di0m);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DikS, hs_sat26DikT];
        return $res;
    };
    hs_zdcshowsPrec225uTu9.evaluate = function (hs_zddShow26Di0A, hs_a9026Di0t, hs_ds26Di0C) {
        var hs_sat26DikV = new $hs.Thunk();
        hs_sat26DikV.evaluateOnce = function () {
            var hs_sat26DikY = new $hs.Thunk();
            hs_sat26DikY.evaluateOnce = function () {
                var hs_sat26Dil1 = new $hs.Thunk();
                hs_sat26Dil1.evaluateOnce = function () {
                    var hs_sat26Dil4 = new $hs.Thunk();
                    hs_sat26Dil4.evaluateOnce = function () {
                        var hs_sat26Dil7 = new $hs.Data(1);
                        hs_sat26Dil7.data = ["}"];
                        var hs_sat26Dil6 = new $hs.Data(2);
                        hs_sat26Dil6.data = [hs_sat26Dil7, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dil6);
                    };
                    var hs_sat26Dil3 = new $hs.Thunk();
                    hs_sat26Dil3.evaluateOnce = function () {
                        var hs_sat26Dil5 = new $hs.Data(1);
                        hs_sat26Dil5.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26Di0A, hs_sat26Dil5, hs_ds26Di0C);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dil3, hs_sat26Dil4);
                };
                var hs_sat26Dil0 = new $hs.Thunk();
                hs_sat26Dil0.evaluateOnce = function () {
                    var hs_sat26Dil2 = new $hs.Thunk();
                    hs_sat26Dil2.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("getProduct = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dil2);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dil0, hs_sat26Dil1);
            };
            var hs_sat26DikX = new $hs.Thunk();
            hs_sat26DikX.evaluateOnce = function () {
                var hs_sat26DikZ = new $hs.Thunk();
                hs_sat26DikZ.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Product {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DikZ);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DikX, hs_sat26DikY);
        };
        var hs_sat26DikU = new $hs.Thunk();
        hs_sat26DikU.evaluateOnce = function () {
            var hs_sat26DikW = new $hs.Data(1);
            hs_sat26DikW.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a9026Di0t, hs_sat26DikW);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DikU, hs_sat26DikV);
    };
    this.hs_zdfShowProduct.evaluate = function (hs_zddShow26Di0N) {
        var hs_sat26Dil9 = new $hs.Thunk();
        hs_sat26Dil9.evaluateOnce = function () {
            return hs_zdcshowList225uTuu.hscall(hs_zddShow26Di0N);
        };
        var hs_sat26Dila = new $hs.Thunk();
        hs_sat26Dila.evaluateOnce = function () {
            return hs_zdcshow225uTuv.hscall(hs_zddShow26Di0N);
        };
        var hs_sat26Dil8 = new $hs.Func(2);
        hs_sat26Dil8.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec225uTu9.hscall(hs_zddShow26Di0N, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dil8, hs_sat26Dila, hs_sat26Dil9];
        return $res;
    };
    hs_zdcshowList225uTuu.evaluate = function (hs_zddShow26Di0S) {
        var hs_sat26Dilb = new $hs.Thunk();
        hs_sat26Dilb.evaluateOnce = function () {
            var hs_sat26Dilc = new $hs.Data(1);
            hs_sat26Dilc.data = [0];
            var hs_sat26Dild = $hs.modules.DataziMonoid.hs_zdfShowProduct.hscall(hs_zddShow26Di0S);
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_sat26Dild, hs_sat26Dilc);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26Dilb);
    };
    hs_zdcshow225uTuv.evaluate = function (hs_zddShow26Di0X) {
        var hs_sat26Dile = new $hs.Thunk();
        hs_sat26Dile.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfShowProduct.hscall(hs_zddShow26Di0X);
        };
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_sat26Dile);
    };
    hs_zdcreadPrec225uTuJ.evaluate = function (hs_zddRead26Di24) {
        var hs_sat26Dilf = new $hs.Thunk();
        hs_sat26Dilf.evaluateOnce = function () {
            var hs_sat26Dilh = new $hs.Thunk();
            hs_sat26Dilh.evaluateOnce = function () {
                var hs_sat26Dili = new $hs.Func(1);
                hs_sat26Dili.evaluate = function (hs_ds26Di18) {
                    var hs_fail26Di17 = new $hs.Func(1);
                    hs_fail26Di17.evaluate = function (hs_ds126Di16) {
                        var hs_sat26DilV = new $hs.Thunk();
                        hs_sat26DilV.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DilV);
                    };
                    var hs_wild26Dilk = hs_ds26Di18;
                    if (hs_ds26Di18.notEvaluated) {
                        hs_wild26Dilk = hs_ds26Di18.hscall();
                    }
                    switch (hs_wild26Dilk.tag) {
                    case 4:
                        var hs_ds126Di1b = hs_wild26Dilk.data[0];
                        var hs_sat26Dill = new $hs.Thunk();
                        hs_sat26Dill.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Product\x00");
                        };
                        var hs_wild126Dilm = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126Di1b, hs_sat26Dill);
                        switch (hs_wild126Dilm.tag) {
                        case 1:
                            return hs_fail26Di17.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        case 2:
                            var hs_sat26Dilj = new $hs.Func(1);
                            hs_sat26Dilj.evaluate = function (hs_ds226Di1k) {
                                var hs_fail126Di1j = new $hs.Func(1);
                                hs_fail126Di1j.evaluate = function (hs_ds326Di1i) {
                                    var hs_sat26DilU = new $hs.Thunk();
                                    hs_sat26DilU.evaluateOnce = function () {
                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                    };
                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DilU);
                                };
                                var hs_wild226Dilt = hs_ds226Di1k;
                                if (hs_ds226Di1k.notEvaluated) {
                                    hs_wild226Dilt = hs_ds226Di1k.hscall();
                                }
                                switch (hs_wild226Dilt.tag) {
                                case 3:
                                    var hs_ds326Di1n = hs_wild226Dilt.data[0];
                                    var hs_wild326Dils = hs_ds326Di1n;
                                    if (hs_ds326Di1n.notEvaluated) {
                                        hs_wild326Dils = hs_ds326Di1n.hscall();
                                    }
                                    switch (hs_wild326Dils.tag) {
                                    case 1:
                                        return hs_fail126Di1j.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                    case 2:
                                        var hs_ds426Di1r = hs_wild326Dils.data[0];
                                        var hs_ds526Di1w = hs_wild326Dils.data[1];
                                        var hs_wild426Dilr = hs_ds426Di1r;
                                        if (hs_ds426Di1r.notEvaluated) {
                                            hs_wild426Dilr = hs_ds426Di1r.hscall();
                                        }
                                        var hs_ds626Di1u = hs_wild426Dilr.data[0];
                                        var hs_ds726Dilq = hs_ds626Di1u;
                                        if (hs_ds626Di1u.notEvaluated) {
                                            hs_ds726Dilq = hs_ds626Di1u.hscall();
                                        }
                                        switch (hs_ds726Dilq) {
                                        case "{":
                                            var hs_wild526Dilp = hs_ds526Di1w;
                                            if (hs_ds526Di1w.notEvaluated) {
                                                hs_wild526Dilp = hs_ds526Di1w.hscall();
                                            }
                                            switch (hs_wild526Dilp.tag) {
                                            case 1:
                                                var hs_sat26Dilu = new $hs.Func(1);
                                                hs_sat26Dilu.evaluate = function (hs_ds826Di1E) {
                                                    var hs_fail226Di1D = new $hs.Func(1);
                                                    hs_fail226Di1D.evaluate = function (hs_ds926Di1C) {
                                                        var hs_sat26DilT = new $hs.Thunk();
                                                        hs_sat26DilT.evaluateOnce = function () {
                                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                        };
                                                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DilT);
                                                    };
                                                    var hs_wild626Dilw = hs_ds826Di1E;
                                                    if (hs_ds826Di1E.notEvaluated) {
                                                        hs_wild626Dilw = hs_ds826Di1E.hscall();
                                                    }
                                                    switch (hs_wild626Dilw.tag) {
                                                    case 4:
                                                        var hs_ds926Di1H = hs_wild626Dilw.data[0];
                                                        var hs_sat26Dilx = new $hs.Thunk();
                                                        hs_sat26Dilx.evaluateOnce = function () {
                                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("getProduct\x00");
                                                        };
                                                        var hs_wild726Dily = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds926Di1H, hs_sat26Dilx);
                                                        switch (hs_wild726Dily.tag) {
                                                        case 1:
                                                            return hs_fail226Di1D.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                        case 2:
                                                            var hs_sat26Dilv = new $hs.Func(1);
                                                            hs_sat26Dilv.evaluate = function (hs_ds1026Di1Q) {
                                                                var hs_fail326Di1P = new $hs.Func(1);
                                                                hs_fail326Di1P.evaluate = function (hs_ds1126Di1O) {
                                                                    var hs_sat26DilS = new $hs.Thunk();
                                                                    hs_sat26DilS.evaluateOnce = function () {
                                                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                    };
                                                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DilS);
                                                                };
                                                                var hs_wild826DilF = hs_ds1026Di1Q;
                                                                if (hs_ds1026Di1Q.notEvaluated) {
                                                                    hs_wild826DilF = hs_ds1026Di1Q.hscall();
                                                                }
                                                                switch (hs_wild826DilF.tag) {
                                                                case 3:
                                                                    var hs_ds1126Di1T = hs_wild826DilF.data[0];
                                                                    var hs_wild926DilE = hs_ds1126Di1T;
                                                                    if (hs_ds1126Di1T.notEvaluated) {
                                                                        hs_wild926DilE = hs_ds1126Di1T.hscall();
                                                                    }
                                                                    switch (hs_wild926DilE.tag) {
                                                                    case 1:
                                                                        return hs_fail326Di1P.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                    case 2:
                                                                        var hs_ds1226Di1X = hs_wild926DilE.data[0];
                                                                        var hs_ds1326Di22 = hs_wild926DilE.data[1];
                                                                        var hs_wild1026DilD = hs_ds1226Di1X;
                                                                        if (hs_ds1226Di1X.notEvaluated) {
                                                                            hs_wild1026DilD = hs_ds1226Di1X.hscall();
                                                                        }
                                                                        var hs_ds1426Di20 = hs_wild1026DilD.data[0];
                                                                        var hs_ds1526DilC = hs_ds1426Di20;
                                                                        if (hs_ds1426Di20.notEvaluated) {
                                                                            hs_ds1526DilC = hs_ds1426Di20.hscall();
                                                                        }
                                                                        switch (hs_ds1526DilC) {
                                                                        case "=":
                                                                            var hs_wild1126DilB = hs_ds1326Di22;
                                                                            if (hs_ds1326Di22.notEvaluated) {
                                                                                hs_wild1126DilB = hs_ds1326Di22.hscall();
                                                                            }
                                                                            switch (hs_wild1126DilB.tag) {
                                                                            case 1:
                                                                                var hs_sat26DilH = new $hs.Func(1);
                                                                                hs_sat26DilH.evaluate = function (hs_a9026Di2s) {
                                                                                    var hs_sat26DilJ = new $hs.Func(1);
                                                                                    hs_sat26DilJ.evaluate = function (hs_ds1626Di2e) {
                                                                                        var hs_fail426Di2d = new $hs.Func(1);
                                                                                        hs_fail426Di2d.evaluate = function (hs_ds1726Di2c) {
                                                                                            var hs_sat26DilR = new $hs.Thunk();
                                                                                            hs_sat26DilR.evaluateOnce = function () {
                                                                                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                                            };
                                                                                            return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DilR);
                                                                                        };
                                                                                        var hs_wild1226DilQ = hs_ds1626Di2e;
                                                                                        if (hs_ds1626Di2e.notEvaluated) {
                                                                                            hs_wild1226DilQ = hs_ds1626Di2e.hscall();
                                                                                        }
                                                                                        switch (hs_wild1226DilQ.tag) {
                                                                                        case 3:
                                                                                            var hs_ds1726Di2h = hs_wild1226DilQ.data[0];
                                                                                            var hs_wild1326DilP = hs_ds1726Di2h;
                                                                                            if (hs_ds1726Di2h.notEvaluated) {
                                                                                                hs_wild1326DilP = hs_ds1726Di2h.hscall();
                                                                                            }
                                                                                            switch (hs_wild1326DilP.tag) {
                                                                                            case 1:
                                                                                                return hs_fail426Di2d.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                            case 2:
                                                                                                var hs_ds1826Di2l = hs_wild1326DilP.data[0];
                                                                                                var hs_ds1926Di2q = hs_wild1326DilP.data[1];
                                                                                                var hs_wild1426DilO = hs_ds1826Di2l;
                                                                                                if (hs_ds1826Di2l.notEvaluated) {
                                                                                                    hs_wild1426DilO = hs_ds1826Di2l.hscall();
                                                                                                }
                                                                                                var hs_ds2026Di2o = hs_wild1426DilO.data[0];
                                                                                                var hs_ds2126DilN = hs_ds2026Di2o;
                                                                                                if (hs_ds2026Di2o.notEvaluated) {
                                                                                                    hs_ds2126DilN = hs_ds2026Di2o.hscall();
                                                                                                }
                                                                                                switch (hs_ds2126DilN) {
                                                                                                case "}":
                                                                                                    var hs_wild1526DilM = hs_ds1926Di2q;
                                                                                                    if (hs_ds1926Di2q.notEvaluated) {
                                                                                                        hs_wild1526DilM = hs_ds1926Di2q.hscall();
                                                                                                    }
                                                                                                    switch (hs_wild1526DilM.tag) {
                                                                                                    case 1:
                                                                                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_a9026Di2s);
                                                                                                    case 2:
                                                                                                        return hs_fail426Di2d.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                    }
                                                                                                default:
                                                                                                    return hs_fail426Di2d.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                }
                                                                                            }
                                                                                        default:
                                                                                            return hs_fail426Di2d.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                        }
                                                                                    };
                                                                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DilJ);
                                                                                };
                                                                                var hs_sat26DilG = new $hs.Thunk();
                                                                                hs_sat26DilG.evaluateOnce = function () {
                                                                                    var hs_sat26DilI = new $hs.Thunk();
                                                                                    hs_sat26DilI.evaluateOnce = function () {
                                                                                        return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26Di24);
                                                                                    };
                                                                                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_reset.hscall(hs_sat26DilI);
                                                                                };
                                                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DilG, hs_sat26DilH);
                                                                            case 2:
                                                                                return hs_fail326Di1P.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                            }
                                                                        default:
                                                                            return hs_fail326Di1P.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                        }
                                                                    }
                                                                default:
                                                                    return hs_fail326Di1P.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                }
                                                            };
                                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Dilv);
                                                        }
                                                    default:
                                                        return hs_fail226Di1D.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                    }
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Dilu);
                                            case 2:
                                                return hs_fail126Di1j.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                            }
                                        default:
                                            return hs_fail126Di1j.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                        }
                                    }
                                default:
                                    return hs_fail126Di1j.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                }
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Dilj);
                        }
                    default:
                        return hs_fail26Di17.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Dili);
            };
            var hs_sat26Dilg = new $hs.Data(1);
            hs_sat26Dilg.data = [11];
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall(hs_sat26Dilg, hs_sat26Dilh);
        };
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26Dilf);
    };
    this.hs_zdfReadProduct.evaluate = function (hs_zddRead26Di2L) {
        var hs_sat26DilX = new $hs.Thunk();
        hs_sat26DilX.evaluateOnce = function () {
            return hs_zdcreadListPrec225uTwr.hscall(hs_zddRead26Di2L);
        };
        var hs_sat26DilY = new $hs.Thunk();
        hs_sat26DilY.evaluateOnce = function () {
            return hs_zdcreadPrec225uTuJ.hscall(hs_zddRead26Di2L);
        };
        var hs_sat26DilZ = new $hs.Thunk();
        hs_sat26DilZ.evaluateOnce = function () {
            return hs_zdcreadList225uTws.hscall(hs_zddRead26Di2L);
        };
        var hs_sat26DilW = new $hs.Thunk();
        hs_sat26DilW.evaluateOnce = function () {
            return hs_zdcreadsPrec225uTwt.hscall(hs_zddRead26Di2L);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DilW, hs_sat26DilZ, hs_sat26DilY, hs_sat26DilX];
        return $res;
    };
    hs_zdcreadListPrec225uTwr.evaluate = function (hs_zddRead26Di2R) {
        var hs_sat26Dim0 = new $hs.Thunk();
        hs_sat26Dim0.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadProduct.hscall(hs_zddRead26Di2R);
        };
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall(hs_sat26Dim0);
    };
    hs_zdcreadList225uTws.evaluate = function (hs_zddRead26Di2U) {
        var hs_sat26Dim1 = new $hs.Thunk();
        hs_sat26Dim1.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadProduct.hscall(hs_zddRead26Di2U);
        };
        return $hs.modules.GHCziRead.hs_readListDefault.hscall(hs_sat26Dim1);
    };
    hs_zdcreadsPrec225uTwt.evaluate = function (hs_zddRead26Di2X) {
        var hs_sat26Dim2 = new $hs.Thunk();
        hs_sat26Dim2.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadProduct.hscall(hs_zddRead26Di2X);
        };
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall(hs_sat26Dim2);
    };
    hs_a3725uTwJ.evaluate = function (hs_zddOrd26Di31) {
        return $hs.modules.GHCziClasses.hs_min.hscall(hs_zddOrd26Di31);
    };
    hs_zdcmin225uTwM.evaluate = function (hs_eta1cW6l3) {
        return hs_a3725uTwJ.hscall(hs_eta1cW6l3);
    };
    hs_a3825uTwN.evaluate = function (hs_zddOrd26Di35) {
        return $hs.modules.GHCziClasses.hs_max.hscall(hs_zddOrd26Di35);
    };
    hs_zdcmax225uTwQ.evaluate = function (hs_eta1cW6l3) {
        return hs_a3825uTwN.hscall(hs_eta1cW6l3);
    };
    hs_a3925uTwR.evaluate = function (hs_zddOrd26Di39) {
        return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd26Di39);
    };
    hs_zdczlze225uTwU.evaluate = function (hs_eta1cW6l3) {
        return hs_a3925uTwR.hscall(hs_eta1cW6l3);
    };
    hs_a4025uTwV.evaluate = function (hs_zddOrd26Di3d) {
        return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd26Di3d);
    };
    hs_zdczg225uTwY.evaluate = function (hs_eta1cW6l3) {
        return hs_a4025uTwV.hscall(hs_eta1cW6l3);
    };
    hs_a4125uTwZ.evaluate = function (hs_zddOrd26Di3h) {
        return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd26Di3h);
    };
    hs_zdczgze225uTx2.evaluate = function (hs_eta1cW6l3) {
        return hs_a4125uTwZ.hscall(hs_eta1cW6l3);
    };
    hs_a4225uTx3.evaluate = function (hs_zddOrd26Di3l) {
        return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd26Di3l);
    };
    hs_zdczl225uTx6.evaluate = function (hs_eta1cW6l3) {
        return hs_a4225uTx3.hscall(hs_eta1cW6l3);
    };
    hs_a4325uTx7.evaluate = function (hs_zddOrd26Di3p) {
        return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd26Di3p);
    };
    hs_zdccompare225uTxa.evaluate = function (hs_eta1cW6l3) {
        return hs_a4325uTx7.hscall(hs_eta1cW6l3);
    };
    hs_a4425uTxb.evaluate = function (hs_zddEq26Di3t) {
        return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_zddEq26Di3t);
    };
    hs_zdczsze225uTxe.evaluate = function (hs_eta1cW6l3) {
        return hs_a4425uTxb.hscall(hs_eta1cW6l3);
    };
    hs_a4525uTxf.evaluate = function (hs_zddEq26Di3x) {
        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26Di3x);
    };
    hs_zdczeze225uTxi.evaluate = function (hs_eta1cW6l3) {
        return hs_a4525uTxf.hscall(hs_eta1cW6l3);
    };
    this.hs_zdfEqProduct.evaluate = function (hs_zddEq26Di3A) {
        var hs_sat26Dim4 = new $hs.Thunk();
        hs_sat26Dim4.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_zddEq26Di3A);
        };
        var hs_sat26Dim3 = new $hs.Thunk();
        hs_sat26Dim3.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26Di3A);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dim3, hs_sat26Dim4];
        return $res;
    };
    hs_zdczdp1Ord225uTxn.evaluate = function (hs_zddOrd26Di3F) {
        var hs_sat26Dim5 = new $hs.Thunk();
        hs_sat26Dim5.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26Di3F);
        };
        return $hs.modules.DataziMonoid.hs_zdfEqProduct.hscall(hs_sat26Dim5);
    };
    this.hs_zdfOrdProduct.evaluate = function (hs_zddOrd26Di3I) {
        var hs_sat26Dim7 = new $hs.Thunk();
        hs_sat26Dim7.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_min.hscall(hs_zddOrd26Di3I);
        };
        var hs_sat26Dim8 = new $hs.Thunk();
        hs_sat26Dim8.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_max.hscall(hs_zddOrd26Di3I);
        };
        var hs_sat26Dim9 = new $hs.Thunk();
        hs_sat26Dim9.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd26Di3I);
        };
        var hs_sat26Dima = new $hs.Thunk();
        hs_sat26Dima.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd26Di3I);
        };
        var hs_sat26Dimb = new $hs.Thunk();
        hs_sat26Dimb.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd26Di3I);
        };
        var hs_sat26Dimc = new $hs.Thunk();
        hs_sat26Dimc.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd26Di3I);
        };
        var hs_sat26Dimd = new $hs.Thunk();
        hs_sat26Dimd.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd26Di3I);
        };
        var hs_sat26Dim6 = new $hs.Thunk();
        hs_sat26Dim6.evaluateOnce = function () {
            return hs_zdczdp1Ord225uTxn.hscall(hs_zddOrd26Di3I);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dim6, hs_sat26Dimd, hs_sat26Dimc, hs_sat26Dimb, hs_sat26Dima, hs_sat26Dim9, hs_sat26Dim8, hs_sat26Dim7];
        return $res;
    };
    hs_a4625uTxB.evaluate = function (hs_zddBounded26Di3T) {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26Di3T);
    };
    hs_zdcmaxBound125uTxE.evaluate = function (hs_eta1cW6l3) {
        return hs_a4625uTxB.hscall(hs_eta1cW6l3);
    };
    hs_a4725uTxF.evaluate = function (hs_zddBounded26Di3X) {
        return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26Di3X);
    };
    hs_zdcminBound125uTxI.evaluate = function (hs_eta1cW6l3) {
        return hs_a4725uTxF.hscall(hs_eta1cW6l3);
    };
    this.hs_zdfBoundedSum.evaluate = function (hs_zddBounded26Di40) {
        var hs_sat26Dimf = new $hs.Thunk();
        hs_sat26Dimf.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26Di40);
        };
        var hs_sat26Dime = new $hs.Thunk();
        hs_sat26Dime.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26Di40);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dime, hs_sat26Dimf];
        return $res;
    };
    hs_zdcshowsPrec325uTxN.evaluate = function (hs_zddShow26Di4e, hs_a9026Di47, hs_ds26Di4g) {
        var hs_sat26Dimh = new $hs.Thunk();
        hs_sat26Dimh.evaluateOnce = function () {
            var hs_sat26Dimk = new $hs.Thunk();
            hs_sat26Dimk.evaluateOnce = function () {
                var hs_sat26Dimn = new $hs.Thunk();
                hs_sat26Dimn.evaluateOnce = function () {
                    var hs_sat26Dimq = new $hs.Thunk();
                    hs_sat26Dimq.evaluateOnce = function () {
                        var hs_sat26Dimt = new $hs.Data(1);
                        hs_sat26Dimt.data = ["}"];
                        var hs_sat26Dims = new $hs.Data(2);
                        hs_sat26Dims.data = [hs_sat26Dimt, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dims);
                    };
                    var hs_sat26Dimp = new $hs.Thunk();
                    hs_sat26Dimp.evaluateOnce = function () {
                        var hs_sat26Dimr = new $hs.Data(1);
                        hs_sat26Dimr.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26Di4e, hs_sat26Dimr, hs_ds26Di4g);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dimp, hs_sat26Dimq);
                };
                var hs_sat26Dimm = new $hs.Thunk();
                hs_sat26Dimm.evaluateOnce = function () {
                    var hs_sat26Dimo = new $hs.Thunk();
                    hs_sat26Dimo.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("getSum = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dimo);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dimm, hs_sat26Dimn);
            };
            var hs_sat26Dimj = new $hs.Thunk();
            hs_sat26Dimj.evaluateOnce = function () {
                var hs_sat26Diml = new $hs.Thunk();
                hs_sat26Diml.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Sum {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Diml);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dimj, hs_sat26Dimk);
        };
        var hs_sat26Dimg = new $hs.Thunk();
        hs_sat26Dimg.evaluateOnce = function () {
            var hs_sat26Dimi = new $hs.Data(1);
            hs_sat26Dimi.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a9026Di47, hs_sat26Dimi);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26Dimg, hs_sat26Dimh);
    };
    this.hs_zdfShowSum.evaluate = function (hs_zddShow26Di4r) {
        var hs_sat26Dimv = new $hs.Thunk();
        hs_sat26Dimv.evaluateOnce = function () {
            return hs_zdcshowList325uTy8.hscall(hs_zddShow26Di4r);
        };
        var hs_sat26Dimw = new $hs.Thunk();
        hs_sat26Dimw.evaluateOnce = function () {
            return hs_zdcshow325uTy9.hscall(hs_zddShow26Di4r);
        };
        var hs_sat26Dimu = new $hs.Func(2);
        hs_sat26Dimu.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec325uTxN.hscall(hs_zddShow26Di4r, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dimu, hs_sat26Dimw, hs_sat26Dimv];
        return $res;
    };
    hs_zdcshowList325uTy8.evaluate = function (hs_zddShow26Di4w) {
        var hs_sat26Dimx = new $hs.Thunk();
        hs_sat26Dimx.evaluateOnce = function () {
            var hs_sat26Dimy = new $hs.Data(1);
            hs_sat26Dimy.data = [0];
            var hs_sat26Dimz = $hs.modules.DataziMonoid.hs_zdfShowSum.hscall(hs_zddShow26Di4w);
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_sat26Dimz, hs_sat26Dimy);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26Dimx);
    };
    hs_zdcshow325uTy9.evaluate = function (hs_zddShow26Di4B) {
        var hs_sat26DimA = new $hs.Thunk();
        hs_sat26DimA.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfShowSum.hscall(hs_zddShow26Di4B);
        };
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_sat26DimA);
    };
    hs_zdcreadPrec325uTyn.evaluate = function (hs_zddRead26Di5I) {
        var hs_sat26DimB = new $hs.Thunk();
        hs_sat26DimB.evaluateOnce = function () {
            var hs_sat26DimD = new $hs.Thunk();
            hs_sat26DimD.evaluateOnce = function () {
                var hs_sat26DimE = new $hs.Func(1);
                hs_sat26DimE.evaluate = function (hs_ds26Di4M) {
                    var hs_fail26Di4L = new $hs.Func(1);
                    hs_fail26Di4L.evaluate = function (hs_ds126Di4K) {
                        var hs_sat26Dinh = new $hs.Thunk();
                        hs_sat26Dinh.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Dinh);
                    };
                    var hs_wild26DimG = hs_ds26Di4M;
                    if (hs_ds26Di4M.notEvaluated) {
                        hs_wild26DimG = hs_ds26Di4M.hscall();
                    }
                    switch (hs_wild26DimG.tag) {
                    case 4:
                        var hs_ds126Di4P = hs_wild26DimG.data[0];
                        var hs_sat26DimH = new $hs.Thunk();
                        hs_sat26DimH.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Sum\x00");
                        };
                        var hs_wild126DimI = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126Di4P, hs_sat26DimH);
                        switch (hs_wild126DimI.tag) {
                        case 1:
                            return hs_fail26Di4L.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        case 2:
                            var hs_sat26DimF = new $hs.Func(1);
                            hs_sat26DimF.evaluate = function (hs_ds226Di4Y) {
                                var hs_fail126Di4X = new $hs.Func(1);
                                hs_fail126Di4X.evaluate = function (hs_ds326Di4W) {
                                    var hs_sat26Ding = new $hs.Thunk();
                                    hs_sat26Ding.evaluateOnce = function () {
                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                    };
                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ding);
                                };
                                var hs_wild226DimP = hs_ds226Di4Y;
                                if (hs_ds226Di4Y.notEvaluated) {
                                    hs_wild226DimP = hs_ds226Di4Y.hscall();
                                }
                                switch (hs_wild226DimP.tag) {
                                case 3:
                                    var hs_ds326Di51 = hs_wild226DimP.data[0];
                                    var hs_wild326DimO = hs_ds326Di51;
                                    if (hs_ds326Di51.notEvaluated) {
                                        hs_wild326DimO = hs_ds326Di51.hscall();
                                    }
                                    switch (hs_wild326DimO.tag) {
                                    case 1:
                                        return hs_fail126Di4X.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                    case 2:
                                        var hs_ds426Di55 = hs_wild326DimO.data[0];
                                        var hs_ds526Di5a = hs_wild326DimO.data[1];
                                        var hs_wild426DimN = hs_ds426Di55;
                                        if (hs_ds426Di55.notEvaluated) {
                                            hs_wild426DimN = hs_ds426Di55.hscall();
                                        }
                                        var hs_ds626Di58 = hs_wild426DimN.data[0];
                                        var hs_ds726DimM = hs_ds626Di58;
                                        if (hs_ds626Di58.notEvaluated) {
                                            hs_ds726DimM = hs_ds626Di58.hscall();
                                        }
                                        switch (hs_ds726DimM) {
                                        case "{":
                                            var hs_wild526DimL = hs_ds526Di5a;
                                            if (hs_ds526Di5a.notEvaluated) {
                                                hs_wild526DimL = hs_ds526Di5a.hscall();
                                            }
                                            switch (hs_wild526DimL.tag) {
                                            case 1:
                                                var hs_sat26DimQ = new $hs.Func(1);
                                                hs_sat26DimQ.evaluate = function (hs_ds826Di5i) {
                                                    var hs_fail226Di5h = new $hs.Func(1);
                                                    hs_fail226Di5h.evaluate = function (hs_ds926Di5g) {
                                                        var hs_sat26Dinf = new $hs.Thunk();
                                                        hs_sat26Dinf.evaluateOnce = function () {
                                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                        };
                                                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Dinf);
                                                    };
                                                    var hs_wild626DimS = hs_ds826Di5i;
                                                    if (hs_ds826Di5i.notEvaluated) {
                                                        hs_wild626DimS = hs_ds826Di5i.hscall();
                                                    }
                                                    switch (hs_wild626DimS.tag) {
                                                    case 4:
                                                        var hs_ds926Di5l = hs_wild626DimS.data[0];
                                                        var hs_sat26DimT = new $hs.Thunk();
                                                        hs_sat26DimT.evaluateOnce = function () {
                                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("getSum\x00");
                                                        };
                                                        var hs_wild726DimU = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds926Di5l, hs_sat26DimT);
                                                        switch (hs_wild726DimU.tag) {
                                                        case 1:
                                                            return hs_fail226Di5h.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                        case 2:
                                                            var hs_sat26DimR = new $hs.Func(1);
                                                            hs_sat26DimR.evaluate = function (hs_ds1026Di5u) {
                                                                var hs_fail326Di5t = new $hs.Func(1);
                                                                hs_fail326Di5t.evaluate = function (hs_ds1126Di5s) {
                                                                    var hs_sat26Dine = new $hs.Thunk();
                                                                    hs_sat26Dine.evaluateOnce = function () {
                                                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                    };
                                                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Dine);
                                                                };
                                                                var hs_wild826Din1 = hs_ds1026Di5u;
                                                                if (hs_ds1026Di5u.notEvaluated) {
                                                                    hs_wild826Din1 = hs_ds1026Di5u.hscall();
                                                                }
                                                                switch (hs_wild826Din1.tag) {
                                                                case 3:
                                                                    var hs_ds1126Di5x = hs_wild826Din1.data[0];
                                                                    var hs_wild926Din0 = hs_ds1126Di5x;
                                                                    if (hs_ds1126Di5x.notEvaluated) {
                                                                        hs_wild926Din0 = hs_ds1126Di5x.hscall();
                                                                    }
                                                                    switch (hs_wild926Din0.tag) {
                                                                    case 1:
                                                                        return hs_fail326Di5t.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                    case 2:
                                                                        var hs_ds1226Di5B = hs_wild926Din0.data[0];
                                                                        var hs_ds1326Di5G = hs_wild926Din0.data[1];
                                                                        var hs_wild1026DimZ = hs_ds1226Di5B;
                                                                        if (hs_ds1226Di5B.notEvaluated) {
                                                                            hs_wild1026DimZ = hs_ds1226Di5B.hscall();
                                                                        }
                                                                        var hs_ds1426Di5E = hs_wild1026DimZ.data[0];
                                                                        var hs_ds1526DimY = hs_ds1426Di5E;
                                                                        if (hs_ds1426Di5E.notEvaluated) {
                                                                            hs_ds1526DimY = hs_ds1426Di5E.hscall();
                                                                        }
                                                                        switch (hs_ds1526DimY) {
                                                                        case "=":
                                                                            var hs_wild1126DimX = hs_ds1326Di5G;
                                                                            if (hs_ds1326Di5G.notEvaluated) {
                                                                                hs_wild1126DimX = hs_ds1326Di5G.hscall();
                                                                            }
                                                                            switch (hs_wild1126DimX.tag) {
                                                                            case 1:
                                                                                var hs_sat26Din3 = new $hs.Func(1);
                                                                                hs_sat26Din3.evaluate = function (hs_a9026Di66) {
                                                                                    var hs_sat26Din5 = new $hs.Func(1);
                                                                                    hs_sat26Din5.evaluate = function (hs_ds1626Di5S) {
                                                                                        var hs_fail426Di5R = new $hs.Func(1);
                                                                                        hs_fail426Di5R.evaluate = function (hs_ds1726Di5Q) {
                                                                                            var hs_sat26Dind = new $hs.Thunk();
                                                                                            hs_sat26Dind.evaluateOnce = function () {
                                                                                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                                            };
                                                                                            return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Dind);
                                                                                        };
                                                                                        var hs_wild1226Dinc = hs_ds1626Di5S;
                                                                                        if (hs_ds1626Di5S.notEvaluated) {
                                                                                            hs_wild1226Dinc = hs_ds1626Di5S.hscall();
                                                                                        }
                                                                                        switch (hs_wild1226Dinc.tag) {
                                                                                        case 3:
                                                                                            var hs_ds1726Di5V = hs_wild1226Dinc.data[0];
                                                                                            var hs_wild1326Dinb = hs_ds1726Di5V;
                                                                                            if (hs_ds1726Di5V.notEvaluated) {
                                                                                                hs_wild1326Dinb = hs_ds1726Di5V.hscall();
                                                                                            }
                                                                                            switch (hs_wild1326Dinb.tag) {
                                                                                            case 1:
                                                                                                return hs_fail426Di5R.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                            case 2:
                                                                                                var hs_ds1826Di5Z = hs_wild1326Dinb.data[0];
                                                                                                var hs_ds1926Di64 = hs_wild1326Dinb.data[1];
                                                                                                var hs_wild1426Dina = hs_ds1826Di5Z;
                                                                                                if (hs_ds1826Di5Z.notEvaluated) {
                                                                                                    hs_wild1426Dina = hs_ds1826Di5Z.hscall();
                                                                                                }
                                                                                                var hs_ds2026Di62 = hs_wild1426Dina.data[0];
                                                                                                var hs_ds2126Din9 = hs_ds2026Di62;
                                                                                                if (hs_ds2026Di62.notEvaluated) {
                                                                                                    hs_ds2126Din9 = hs_ds2026Di62.hscall();
                                                                                                }
                                                                                                switch (hs_ds2126Din9) {
                                                                                                case "}":
                                                                                                    var hs_wild1526Din8 = hs_ds1926Di64;
                                                                                                    if (hs_ds1926Di64.notEvaluated) {
                                                                                                        hs_wild1526Din8 = hs_ds1926Di64.hscall();
                                                                                                    }
                                                                                                    switch (hs_wild1526Din8.tag) {
                                                                                                    case 1:
                                                                                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_a9026Di66);
                                                                                                    case 2:
                                                                                                        return hs_fail426Di5R.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                    }
                                                                                                default:
                                                                                                    return hs_fail426Di5R.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                }
                                                                                            }
                                                                                        default:
                                                                                            return hs_fail426Di5R.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                        }
                                                                                    };
                                                                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Din5);
                                                                                };
                                                                                var hs_sat26Din2 = new $hs.Thunk();
                                                                                hs_sat26Din2.evaluateOnce = function () {
                                                                                    var hs_sat26Din4 = new $hs.Thunk();
                                                                                    hs_sat26Din4.evaluateOnce = function () {
                                                                                        return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26Di5I);
                                                                                    };
                                                                                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_reset.hscall(hs_sat26Din4);
                                                                                };
                                                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Din2, hs_sat26Din3);
                                                                            case 2:
                                                                                return hs_fail326Di5t.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                            }
                                                                        default:
                                                                            return hs_fail326Di5t.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                        }
                                                                    }
                                                                default:
                                                                    return hs_fail326Di5t.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                }
                                                            };
                                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DimR);
                                                        }
                                                    default:
                                                        return hs_fail226Di5h.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                    }
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DimQ);
                                            case 2:
                                                return hs_fail126Di4X.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                            }
                                        default:
                                            return hs_fail126Di4X.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                        }
                                    }
                                default:
                                    return hs_fail126Di4X.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                }
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DimF);
                        }
                    default:
                        return hs_fail26Di4L.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DimE);
            };
            var hs_sat26DimC = new $hs.Data(1);
            hs_sat26DimC.data = [11];
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall(hs_sat26DimC, hs_sat26DimD);
        };
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26DimB);
    };
    this.hs_zdfReadSum.evaluate = function (hs_zddRead26Di6p) {
        var hs_sat26Dinj = new $hs.Thunk();
        hs_sat26Dinj.evaluateOnce = function () {
            return hs_zdcreadListPrec325uTA5.hscall(hs_zddRead26Di6p);
        };
        var hs_sat26Dink = new $hs.Thunk();
        hs_sat26Dink.evaluateOnce = function () {
            return hs_zdcreadPrec325uTyn.hscall(hs_zddRead26Di6p);
        };
        var hs_sat26Dinl = new $hs.Thunk();
        hs_sat26Dinl.evaluateOnce = function () {
            return hs_zdcreadList325uTA6.hscall(hs_zddRead26Di6p);
        };
        var hs_sat26Dini = new $hs.Thunk();
        hs_sat26Dini.evaluateOnce = function () {
            return hs_zdcreadsPrec325uTA7.hscall(hs_zddRead26Di6p);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dini, hs_sat26Dinl, hs_sat26Dink, hs_sat26Dinj];
        return $res;
    };
    hs_zdcreadListPrec325uTA5.evaluate = function (hs_zddRead26Di6v) {
        var hs_sat26Dinm = new $hs.Thunk();
        hs_sat26Dinm.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadSum.hscall(hs_zddRead26Di6v);
        };
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall(hs_sat26Dinm);
    };
    hs_zdcreadList325uTA6.evaluate = function (hs_zddRead26Di6y) {
        var hs_sat26Dinn = new $hs.Thunk();
        hs_sat26Dinn.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadSum.hscall(hs_zddRead26Di6y);
        };
        return $hs.modules.GHCziRead.hs_readListDefault.hscall(hs_sat26Dinn);
    };
    hs_zdcreadsPrec325uTA7.evaluate = function (hs_zddRead26Di6B) {
        var hs_sat26Dino = new $hs.Thunk();
        hs_sat26Dino.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadSum.hscall(hs_zddRead26Di6B);
        };
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall(hs_sat26Dino);
    };
    hs_a4825uTAn.evaluate = function (hs_zddOrd26Di6F) {
        return $hs.modules.GHCziClasses.hs_min.hscall(hs_zddOrd26Di6F);
    };
    hs_zdcmin325uTAq.evaluate = function (hs_eta1cW6l3) {
        return hs_a4825uTAn.hscall(hs_eta1cW6l3);
    };
    hs_a4925uTAr.evaluate = function (hs_zddOrd26Di6J) {
        return $hs.modules.GHCziClasses.hs_max.hscall(hs_zddOrd26Di6J);
    };
    hs_zdcmax325uTAu.evaluate = function (hs_eta1cW6l3) {
        return hs_a4925uTAr.hscall(hs_eta1cW6l3);
    };
    hs_a5025uTAv.evaluate = function (hs_zddOrd26Di6N) {
        return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd26Di6N);
    };
    hs_zdczlze325uTAy.evaluate = function (hs_eta1cW6l3) {
        return hs_a5025uTAv.hscall(hs_eta1cW6l3);
    };
    hs_a5125uTAz.evaluate = function (hs_zddOrd26Di6R) {
        return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd26Di6R);
    };
    hs_zdczg325uTAC.evaluate = function (hs_eta1cW6l3) {
        return hs_a5125uTAz.hscall(hs_eta1cW6l3);
    };
    hs_a5225uTAD.evaluate = function (hs_zddOrd26Di6V) {
        return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd26Di6V);
    };
    hs_zdczgze325uTAG.evaluate = function (hs_eta1cW6l3) {
        return hs_a5225uTAD.hscall(hs_eta1cW6l3);
    };
    hs_a5325uTAH.evaluate = function (hs_zddOrd26Di6Z) {
        return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd26Di6Z);
    };
    hs_zdczl325uTAK.evaluate = function (hs_eta1cW6l3) {
        return hs_a5325uTAH.hscall(hs_eta1cW6l3);
    };
    hs_a5425uTAL.evaluate = function (hs_zddOrd26Di73) {
        return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd26Di73);
    };
    hs_zdccompare325uTAO.evaluate = function (hs_eta1cW6l3) {
        return hs_a5425uTAL.hscall(hs_eta1cW6l3);
    };
    hs_a5525uTAP.evaluate = function (hs_zddEq26Di77) {
        return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_zddEq26Di77);
    };
    hs_zdczsze325uTAS.evaluate = function (hs_eta1cW6l3) {
        return hs_a5525uTAP.hscall(hs_eta1cW6l3);
    };
    hs_a5625uTAT.evaluate = function (hs_zddEq26Di7b) {
        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26Di7b);
    };
    hs_zdczeze325uTAW.evaluate = function (hs_eta1cW6l3) {
        return hs_a5625uTAT.hscall(hs_eta1cW6l3);
    };
    this.hs_zdfEqSum.evaluate = function (hs_zddEq26Di7e) {
        var hs_sat26Dinq = new $hs.Thunk();
        hs_sat26Dinq.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_zddEq26Di7e);
        };
        var hs_sat26Dinp = new $hs.Thunk();
        hs_sat26Dinp.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26Di7e);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dinp, hs_sat26Dinq];
        return $res;
    };
    hs_zdczdp1Ord325uTB1.evaluate = function (hs_zddOrd26Di7j) {
        var hs_sat26Dinr = new $hs.Thunk();
        hs_sat26Dinr.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26Di7j);
        };
        return $hs.modules.DataziMonoid.hs_zdfEqSum.hscall(hs_sat26Dinr);
    };
    this.hs_zdfOrdSum.evaluate = function (hs_zddOrd26Di7m) {
        var hs_sat26Dint = new $hs.Thunk();
        hs_sat26Dint.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_min.hscall(hs_zddOrd26Di7m);
        };
        var hs_sat26Dinu = new $hs.Thunk();
        hs_sat26Dinu.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_max.hscall(hs_zddOrd26Di7m);
        };
        var hs_sat26Dinv = new $hs.Thunk();
        hs_sat26Dinv.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd26Di7m);
        };
        var hs_sat26Dinw = new $hs.Thunk();
        hs_sat26Dinw.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd26Di7m);
        };
        var hs_sat26Dinx = new $hs.Thunk();
        hs_sat26Dinx.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd26Di7m);
        };
        var hs_sat26Diny = new $hs.Thunk();
        hs_sat26Diny.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd26Di7m);
        };
        var hs_sat26Dinz = new $hs.Thunk();
        hs_sat26Dinz.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd26Di7m);
        };
        var hs_sat26Dins = new $hs.Thunk();
        hs_sat26Dins.evaluateOnce = function () {
            return hs_zdczdp1Ord325uTB1.hscall(hs_zddOrd26Di7m);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dins, hs_sat26Dinz, hs_sat26Diny, hs_sat26Dinx, hs_sat26Dinw, hs_sat26Dinv, hs_sat26Dinu, hs_sat26Dint];
        return $res;
    };
    hs_a5725uTBf.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedBool);
    };
    hs_zdcminBound225uTBg.evaluateOnce = function () {
        if (hs_a5725uTBf.notEvaluated) {
            return hs_a5725uTBf.hscall();
        } else {
            return hs_a5725uTBf;
        }
    };
    hs_a5825uTBh.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedBool);
    };
    hs_zdcmaxBound225uTBi.evaluateOnce = function () {
        if (hs_a5825uTBh.notEvaluated) {
            return hs_a5825uTBh.hscall();
        } else {
            return hs_a5825uTBh;
        }
    };
    this.hs_zdfBoundedAny.data = [hs_a5725uTBf, hs_a5825uTBh];
    hs_zdcshowsPrec425uTBj.evaluate = function (hs_a9026Di7C, hs_ds26Di7K) {
        var hs_sat26DinB = new $hs.Thunk();
        hs_sat26DinB.evaluateOnce = function () {
            var hs_sat26DinE = new $hs.Thunk();
            hs_sat26DinE.evaluateOnce = function () {
                var hs_sat26DinH = new $hs.Thunk();
                hs_sat26DinH.evaluateOnce = function () {
                    var hs_sat26DinK = new $hs.Thunk();
                    hs_sat26DinK.evaluateOnce = function () {
                        var hs_sat26DinN = new $hs.Data(1);
                        hs_sat26DinN.data = ["}"];
                        var hs_sat26DinM = new $hs.Data(2);
                        hs_sat26DinM.data = [hs_sat26DinN, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DinM);
                    };
                    var hs_sat26DinJ = new $hs.Thunk();
                    hs_sat26DinJ.evaluateOnce = function () {
                        var hs_sat26DinL = new $hs.Data(1);
                        hs_sat26DinL.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowBool, hs_sat26DinL, hs_ds26Di7K);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DinJ, hs_sat26DinK);
                };
                var hs_sat26DinG = new $hs.Thunk();
                hs_sat26DinG.evaluateOnce = function () {
                    var hs_sat26DinI = new $hs.Thunk();
                    hs_sat26DinI.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("getAny = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DinI);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DinG, hs_sat26DinH);
            };
            var hs_sat26DinD = new $hs.Thunk();
            hs_sat26DinD.evaluateOnce = function () {
                var hs_sat26DinF = new $hs.Thunk();
                hs_sat26DinF.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Any {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DinF);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DinD, hs_sat26DinE);
        };
        var hs_sat26DinA = new $hs.Thunk();
        hs_sat26DinA.evaluateOnce = function () {
            var hs_sat26DinC = new $hs.Data(1);
            hs_sat26DinC.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a9026Di7C, hs_sat26DinC);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DinA, hs_sat26DinB);
    };
    hs_sat26DinP.evaluateOnce = function () {
        var hs_sat26DinO = new $hs.Data(1);
        hs_sat26DinO.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.DataziMonoid.hs_zdfShowAny, hs_sat26DinO);
    };
    this.hs_zdfShowAny.data = [hs_zdcshowsPrec425uTBj, hs_zdcshow425uTBD, hs_zdcshowList425uTBC];
    hs_zdcshowList425uTBC.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DinP);
    };
    hs_zdcshow425uTBD.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.DataziMonoid.hs_zdfShowAny);
    };
    hs_sat26Diow.evaluateOnce = function () {
        var hs_sat26DinR = new $hs.Thunk();
        hs_sat26DinR.evaluateOnce = function () {
            var hs_sat26DinS = new $hs.Func(1);
            hs_sat26DinS.evaluate = function (hs_ds26Di84) {
                var hs_fail26Di83 = new $hs.Func(1);
                hs_fail26Di83.evaluate = function (hs_ds126Di82) {
                    var hs_sat26Diov = new $hs.Thunk();
                    hs_sat26Diov.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                    };
                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Diov);
                };
                var hs_wild26DinU = hs_ds26Di84;
                if (hs_ds26Di84.notEvaluated) {
                    hs_wild26DinU = hs_ds26Di84.hscall();
                }
                switch (hs_wild26DinU.tag) {
                case 4:
                    var hs_ds126Di87 = hs_wild26DinU.data[0];
                    var hs_sat26DinV = new $hs.Thunk();
                    hs_sat26DinV.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Any\x00");
                    };
                    var hs_wild126DinW = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126Di87, hs_sat26DinV);
                    switch (hs_wild126DinW.tag) {
                    case 1:
                        return hs_fail26Di83.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    case 2:
                        var hs_sat26DinT = new $hs.Func(1);
                        hs_sat26DinT.evaluate = function (hs_ds226Di8g) {
                            var hs_fail126Di8f = new $hs.Func(1);
                            hs_fail126Di8f.evaluate = function (hs_ds326Di8e) {
                                var hs_sat26Diou = new $hs.Thunk();
                                hs_sat26Diou.evaluateOnce = function () {
                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                };
                                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Diou);
                            };
                            var hs_wild226Dio3 = hs_ds226Di8g;
                            if (hs_ds226Di8g.notEvaluated) {
                                hs_wild226Dio3 = hs_ds226Di8g.hscall();
                            }
                            switch (hs_wild226Dio3.tag) {
                            case 3:
                                var hs_ds326Di8j = hs_wild226Dio3.data[0];
                                var hs_wild326Dio2 = hs_ds326Di8j;
                                if (hs_ds326Di8j.notEvaluated) {
                                    hs_wild326Dio2 = hs_ds326Di8j.hscall();
                                }
                                switch (hs_wild326Dio2.tag) {
                                case 1:
                                    return hs_fail126Di8f.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                case 2:
                                    var hs_ds426Di8n = hs_wild326Dio2.data[0];
                                    var hs_ds526Di8s = hs_wild326Dio2.data[1];
                                    var hs_wild426Dio1 = hs_ds426Di8n;
                                    if (hs_ds426Di8n.notEvaluated) {
                                        hs_wild426Dio1 = hs_ds426Di8n.hscall();
                                    }
                                    var hs_ds626Di8q = hs_wild426Dio1.data[0];
                                    var hs_ds726Dio0 = hs_ds626Di8q;
                                    if (hs_ds626Di8q.notEvaluated) {
                                        hs_ds726Dio0 = hs_ds626Di8q.hscall();
                                    }
                                    switch (hs_ds726Dio0) {
                                    case "{":
                                        var hs_wild526DinZ = hs_ds526Di8s;
                                        if (hs_ds526Di8s.notEvaluated) {
                                            hs_wild526DinZ = hs_ds526Di8s.hscall();
                                        }
                                        switch (hs_wild526DinZ.tag) {
                                        case 1:
                                            var hs_sat26Dio4 = new $hs.Func(1);
                                            hs_sat26Dio4.evaluate = function (hs_ds826Di8A) {
                                                var hs_fail226Di8z = new $hs.Func(1);
                                                hs_fail226Di8z.evaluate = function (hs_ds926Di8y) {
                                                    var hs_sat26Diot = new $hs.Thunk();
                                                    hs_sat26Diot.evaluateOnce = function () {
                                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                    };
                                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Diot);
                                                };
                                                var hs_wild626Dio6 = hs_ds826Di8A;
                                                if (hs_ds826Di8A.notEvaluated) {
                                                    hs_wild626Dio6 = hs_ds826Di8A.hscall();
                                                }
                                                switch (hs_wild626Dio6.tag) {
                                                case 4:
                                                    var hs_ds926Di8D = hs_wild626Dio6.data[0];
                                                    var hs_sat26Dio7 = new $hs.Thunk();
                                                    hs_sat26Dio7.evaluateOnce = function () {
                                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("getAny\x00");
                                                    };
                                                    var hs_wild726Dio8 = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds926Di8D, hs_sat26Dio7);
                                                    switch (hs_wild726Dio8.tag) {
                                                    case 1:
                                                        return hs_fail226Di8z.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                    case 2:
                                                        var hs_sat26Dio5 = new $hs.Func(1);
                                                        hs_sat26Dio5.evaluate = function (hs_ds1026Di8M) {
                                                            var hs_fail326Di8L = new $hs.Func(1);
                                                            hs_fail326Di8L.evaluate = function (hs_ds1126Di8K) {
                                                                var hs_sat26Dios = new $hs.Thunk();
                                                                hs_sat26Dios.evaluateOnce = function () {
                                                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                };
                                                                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Dios);
                                                            };
                                                            var hs_wild826Diof = hs_ds1026Di8M;
                                                            if (hs_ds1026Di8M.notEvaluated) {
                                                                hs_wild826Diof = hs_ds1026Di8M.hscall();
                                                            }
                                                            switch (hs_wild826Diof.tag) {
                                                            case 3:
                                                                var hs_ds1126Di8P = hs_wild826Diof.data[0];
                                                                var hs_wild926Dioe = hs_ds1126Di8P;
                                                                if (hs_ds1126Di8P.notEvaluated) {
                                                                    hs_wild926Dioe = hs_ds1126Di8P.hscall();
                                                                }
                                                                switch (hs_wild926Dioe.tag) {
                                                                case 1:
                                                                    return hs_fail326Di8L.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                case 2:
                                                                    var hs_ds1226Di8T = hs_wild926Dioe.data[0];
                                                                    var hs_ds1326Di8Y = hs_wild926Dioe.data[1];
                                                                    var hs_wild1026Diod = hs_ds1226Di8T;
                                                                    if (hs_ds1226Di8T.notEvaluated) {
                                                                        hs_wild1026Diod = hs_ds1226Di8T.hscall();
                                                                    }
                                                                    var hs_ds1426Di8W = hs_wild1026Diod.data[0];
                                                                    var hs_ds1526Dioc = hs_ds1426Di8W;
                                                                    if (hs_ds1426Di8W.notEvaluated) {
                                                                        hs_ds1526Dioc = hs_ds1426Di8W.hscall();
                                                                    }
                                                                    switch (hs_ds1526Dioc) {
                                                                    case "=":
                                                                        var hs_wild1126Diob = hs_ds1326Di8Y;
                                                                        if (hs_ds1326Di8Y.notEvaluated) {
                                                                            hs_wild1126Diob = hs_ds1326Di8Y.hscall();
                                                                        }
                                                                        switch (hs_wild1126Diob.tag) {
                                                                        case 1:
                                                                            var hs_sat26Dioh = new $hs.Func(1);
                                                                            hs_sat26Dioh.evaluate = function (hs_a9026Di9n) {
                                                                                var hs_sat26Dioj = new $hs.Func(1);
                                                                                hs_sat26Dioj.evaluate = function (hs_ds1626Di99) {
                                                                                    var hs_fail426Di98 = new $hs.Func(1);
                                                                                    hs_fail426Di98.evaluate = function (hs_ds1726Di97) {
                                                                                        var hs_sat26Dior = new $hs.Thunk();
                                                                                        hs_sat26Dior.evaluateOnce = function () {
                                                                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                                        };
                                                                                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Dior);
                                                                                    };
                                                                                    var hs_wild1226Dioq = hs_ds1626Di99;
                                                                                    if (hs_ds1626Di99.notEvaluated) {
                                                                                        hs_wild1226Dioq = hs_ds1626Di99.hscall();
                                                                                    }
                                                                                    switch (hs_wild1226Dioq.tag) {
                                                                                    case 3:
                                                                                        var hs_ds1726Di9c = hs_wild1226Dioq.data[0];
                                                                                        var hs_wild1326Diop = hs_ds1726Di9c;
                                                                                        if (hs_ds1726Di9c.notEvaluated) {
                                                                                            hs_wild1326Diop = hs_ds1726Di9c.hscall();
                                                                                        }
                                                                                        switch (hs_wild1326Diop.tag) {
                                                                                        case 1:
                                                                                            return hs_fail426Di98.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                        case 2:
                                                                                            var hs_ds1826Di9g = hs_wild1326Diop.data[0];
                                                                                            var hs_ds1926Di9l = hs_wild1326Diop.data[1];
                                                                                            var hs_wild1426Dioo = hs_ds1826Di9g;
                                                                                            if (hs_ds1826Di9g.notEvaluated) {
                                                                                                hs_wild1426Dioo = hs_ds1826Di9g.hscall();
                                                                                            }
                                                                                            var hs_ds2026Di9j = hs_wild1426Dioo.data[0];
                                                                                            var hs_ds2126Dion = hs_ds2026Di9j;
                                                                                            if (hs_ds2026Di9j.notEvaluated) {
                                                                                                hs_ds2126Dion = hs_ds2026Di9j.hscall();
                                                                                            }
                                                                                            switch (hs_ds2126Dion) {
                                                                                            case "}":
                                                                                                var hs_wild1526Diom = hs_ds1926Di9l;
                                                                                                if (hs_ds1926Di9l.notEvaluated) {
                                                                                                    hs_wild1526Diom = hs_ds1926Di9l.hscall();
                                                                                                }
                                                                                                switch (hs_wild1526Diom.tag) {
                                                                                                case 1:
                                                                                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_a9026Di9n);
                                                                                                case 2:
                                                                                                    return hs_fail426Di98.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                }
                                                                                            default:
                                                                                                return hs_fail426Di98.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                            }
                                                                                        }
                                                                                    default:
                                                                                        return hs_fail426Di98.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                    }
                                                                                };
                                                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Dioj);
                                                                            };
                                                                            var hs_sat26Diog = new $hs.Thunk();
                                                                            hs_sat26Diog.evaluateOnce = function () {
                                                                                var hs_sat26Dioi = new $hs.Thunk();
                                                                                hs_sat26Dioi.evaluateOnce = function () {
                                                                                    return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadBool);
                                                                                };
                                                                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_reset.hscall(hs_sat26Dioi);
                                                                            };
                                                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Diog, hs_sat26Dioh);
                                                                        case 2:
                                                                            return hs_fail326Di8L.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                        }
                                                                    default:
                                                                        return hs_fail326Di8L.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                    }
                                                                }
                                                            default:
                                                                return hs_fail326Di8L.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                            }
                                                        };
                                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Dio5);
                                                    }
                                                default:
                                                    return hs_fail226Di8z.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                }
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Dio4);
                                        case 2:
                                            return hs_fail126Di8f.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                        }
                                    default:
                                        return hs_fail126Di8f.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                    }
                                }
                            default:
                                return hs_fail126Di8f.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DinT);
                    }
                default:
                    return hs_fail26Di83.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DinS);
        };
        var hs_sat26DinQ = new $hs.Data(1);
        hs_sat26DinQ.data = [11];
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall(hs_sat26DinQ, hs_sat26DinR);
    };
    hs_zdcreadPrec425uTBG.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26Diow);
    };
    this.hs_zdfReadAny.data = [hs_zdcreadsPrec425uTDo, hs_zdcreadList425uTDn, hs_zdcreadPrec425uTBG, hs_zdcreadListPrec425uTDm];
    hs_zdcreadListPrec425uTDm.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall($hs.modules.DataziMonoid.hs_zdfReadAny);
    };
    hs_zdcreadList425uTDn.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListDefault.hscall($hs.modules.DataziMonoid.hs_zdfReadAny);
    };
    hs_zdcreadsPrec425uTDo.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall($hs.modules.DataziMonoid.hs_zdfReadAny);
    };
    hs_a5925uTDp.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdccompare425uTDq.evaluateOnce = function () {
        if (hs_a5925uTDp.notEvaluated) {
            return hs_a5925uTDp.hscall();
        } else {
            return hs_a5925uTDp;
        }
    };
    hs_a6025uTDr.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdczl425uTDs.evaluateOnce = function () {
        if (hs_a6025uTDr.notEvaluated) {
            return hs_a6025uTDr.hscall();
        } else {
            return hs_a6025uTDr;
        }
    };
    hs_a6125uTDt.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdczgze425uTDu.evaluateOnce = function () {
        if (hs_a6125uTDt.notEvaluated) {
            return hs_a6125uTDt.hscall();
        } else {
            return hs_a6125uTDt;
        }
    };
    hs_a6225uTDv.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdczg425uTDw.evaluateOnce = function () {
        if (hs_a6225uTDv.notEvaluated) {
            return hs_a6225uTDv.hscall();
        } else {
            return hs_a6225uTDv;
        }
    };
    hs_a6325uTDx.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdczlze425uTDy.evaluateOnce = function () {
        if (hs_a6325uTDx.notEvaluated) {
            return hs_a6325uTDx.hscall();
        } else {
            return hs_a6325uTDx;
        }
    };
    hs_a6425uTDz.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdcmax425uTDA.evaluateOnce = function () {
        if (hs_a6425uTDz.notEvaluated) {
            return hs_a6425uTDz.hscall();
        } else {
            return hs_a6425uTDz;
        }
    };
    hs_a6525uTDB.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdcmin425uTDC.evaluateOnce = function () {
        if (hs_a6525uTDB.notEvaluated) {
            return hs_a6525uTDB.hscall();
        } else {
            return hs_a6525uTDB;
        }
    };
    hs_a6625uTDD.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqBool);
    };
    hs_zdczeze425uTDE.evaluateOnce = function () {
        if (hs_a6625uTDD.notEvaluated) {
            return hs_a6625uTDD.hscall();
        } else {
            return hs_a6625uTDD;
        }
    };
    hs_a6725uTDF.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqBool);
    };
    hs_zdczsze425uTDG.evaluateOnce = function () {
        if (hs_a6725uTDF.notEvaluated) {
            return hs_a6725uTDF.hscall();
        } else {
            return hs_a6725uTDF;
        }
    };
    this.hs_zdfEqAny.data = [hs_a6625uTDD, hs_a6725uTDF];
    this.hs_zdfOrdAny.data = [$hs.modules.DataziMonoid.hs_zdfEqAny, hs_a5925uTDp, hs_a6025uTDr, hs_a6125uTDt, hs_a6225uTDv, hs_a6325uTDx, hs_a6425uTDz, hs_a6525uTDB];
    hs_a6825uTDH.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedBool);
    };
    hs_zdcminBound325uTDI.evaluateOnce = function () {
        if (hs_a6825uTDH.notEvaluated) {
            return hs_a6825uTDH.hscall();
        } else {
            return hs_a6825uTDH;
        }
    };
    hs_a6925uTDJ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedBool);
    };
    hs_zdcmaxBound325uTDK.evaluateOnce = function () {
        if (hs_a6925uTDJ.notEvaluated) {
            return hs_a6925uTDJ.hscall();
        } else {
            return hs_a6925uTDJ;
        }
    };
    this.hs_zdfBoundedAll.data = [hs_a6825uTDH, hs_a6925uTDJ];
    hs_zdcshowsPrec525uTDL.evaluate = function (hs_a9026Dia4, hs_ds26Diac) {
        var hs_sat26Dioy = new $hs.Thunk();
        hs_sat26Dioy.evaluateOnce = function () {
            var hs_sat26DioB = new $hs.Thunk();
            hs_sat26DioB.evaluateOnce = function () {
                var hs_sat26DioE = new $hs.Thunk();
                hs_sat26DioE.evaluateOnce = function () {
                    var hs_sat26DioH = new $hs.Thunk();
                    hs_sat26DioH.evaluateOnce = function () {
                        var hs_sat26DioK = new $hs.Data(1);
                        hs_sat26DioK.data = ["}"];
                        var hs_sat26DioJ = new $hs.Data(2);
                        hs_sat26DioJ.data = [hs_sat26DioK, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DioJ);
                    };
                    var hs_sat26DioG = new $hs.Thunk();
                    hs_sat26DioG.evaluateOnce = function () {
                        var hs_sat26DioI = new $hs.Data(1);
                        hs_sat26DioI.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowBool, hs_sat26DioI, hs_ds26Diac);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DioG, hs_sat26DioH);
                };
                var hs_sat26DioD = new $hs.Thunk();
                hs_sat26DioD.evaluateOnce = function () {
                    var hs_sat26DioF = new $hs.Thunk();
                    hs_sat26DioF.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("getAll = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DioF);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DioD, hs_sat26DioE);
            };
            var hs_sat26DioA = new $hs.Thunk();
            hs_sat26DioA.evaluateOnce = function () {
                var hs_sat26DioC = new $hs.Thunk();
                hs_sat26DioC.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("All {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DioC);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DioA, hs_sat26DioB);
        };
        var hs_sat26Diox = new $hs.Thunk();
        hs_sat26Diox.evaluateOnce = function () {
            var hs_sat26Dioz = new $hs.Data(1);
            hs_sat26Dioz.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a9026Dia4, hs_sat26Dioz);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26Diox, hs_sat26Dioy);
    };
    hs_sat26DioM.evaluateOnce = function () {
        var hs_sat26DioL = new $hs.Data(1);
        hs_sat26DioL.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.DataziMonoid.hs_zdfShowAll, hs_sat26DioL);
    };
    this.hs_zdfShowAll.data = [hs_zdcshowsPrec525uTDL, hs_zdcshow525uTE5, hs_zdcshowList525uTE4];
    hs_zdcshowList525uTE4.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DioM);
    };
    hs_zdcshow525uTE5.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.DataziMonoid.hs_zdfShowAll);
    };
    hs_sat26Dipt.evaluateOnce = function () {
        var hs_sat26DioO = new $hs.Thunk();
        hs_sat26DioO.evaluateOnce = function () {
            var hs_sat26DioP = new $hs.Func(1);
            hs_sat26DioP.evaluate = function (hs_ds26Diaw) {
                var hs_fail26Diav = new $hs.Func(1);
                hs_fail26Diav.evaluate = function (hs_ds126Diau) {
                    var hs_sat26Dips = new $hs.Thunk();
                    hs_sat26Dips.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                    };
                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Dips);
                };
                var hs_wild26DioR = hs_ds26Diaw;
                if (hs_ds26Diaw.notEvaluated) {
                    hs_wild26DioR = hs_ds26Diaw.hscall();
                }
                switch (hs_wild26DioR.tag) {
                case 4:
                    var hs_ds126Diaz = hs_wild26DioR.data[0];
                    var hs_sat26DioS = new $hs.Thunk();
                    hs_sat26DioS.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("All\x00");
                    };
                    var hs_wild126DioT = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126Diaz, hs_sat26DioS);
                    switch (hs_wild126DioT.tag) {
                    case 1:
                        return hs_fail26Diav.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    case 2:
                        var hs_sat26DioQ = new $hs.Func(1);
                        hs_sat26DioQ.evaluate = function (hs_ds226DiaI) {
                            var hs_fail126DiaH = new $hs.Func(1);
                            hs_fail126DiaH.evaluate = function (hs_ds326DiaG) {
                                var hs_sat26Dipr = new $hs.Thunk();
                                hs_sat26Dipr.evaluateOnce = function () {
                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                };
                                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Dipr);
                            };
                            var hs_wild226Dip0 = hs_ds226DiaI;
                            if (hs_ds226DiaI.notEvaluated) {
                                hs_wild226Dip0 = hs_ds226DiaI.hscall();
                            }
                            switch (hs_wild226Dip0.tag) {
                            case 3:
                                var hs_ds326DiaL = hs_wild226Dip0.data[0];
                                var hs_wild326DioZ = hs_ds326DiaL;
                                if (hs_ds326DiaL.notEvaluated) {
                                    hs_wild326DioZ = hs_ds326DiaL.hscall();
                                }
                                switch (hs_wild326DioZ.tag) {
                                case 1:
                                    return hs_fail126DiaH.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                case 2:
                                    var hs_ds426DiaP = hs_wild326DioZ.data[0];
                                    var hs_ds526DiaU = hs_wild326DioZ.data[1];
                                    var hs_wild426DioY = hs_ds426DiaP;
                                    if (hs_ds426DiaP.notEvaluated) {
                                        hs_wild426DioY = hs_ds426DiaP.hscall();
                                    }
                                    var hs_ds626DiaS = hs_wild426DioY.data[0];
                                    var hs_ds726DioX = hs_ds626DiaS;
                                    if (hs_ds626DiaS.notEvaluated) {
                                        hs_ds726DioX = hs_ds626DiaS.hscall();
                                    }
                                    switch (hs_ds726DioX) {
                                    case "{":
                                        var hs_wild526DioW = hs_ds526DiaU;
                                        if (hs_ds526DiaU.notEvaluated) {
                                            hs_wild526DioW = hs_ds526DiaU.hscall();
                                        }
                                        switch (hs_wild526DioW.tag) {
                                        case 1:
                                            var hs_sat26Dip1 = new $hs.Func(1);
                                            hs_sat26Dip1.evaluate = function (hs_ds826Dib2) {
                                                var hs_fail226Dib1 = new $hs.Func(1);
                                                hs_fail226Dib1.evaluate = function (hs_ds926Dib0) {
                                                    var hs_sat26Dipq = new $hs.Thunk();
                                                    hs_sat26Dipq.evaluateOnce = function () {
                                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                    };
                                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Dipq);
                                                };
                                                var hs_wild626Dip3 = hs_ds826Dib2;
                                                if (hs_ds826Dib2.notEvaluated) {
                                                    hs_wild626Dip3 = hs_ds826Dib2.hscall();
                                                }
                                                switch (hs_wild626Dip3.tag) {
                                                case 4:
                                                    var hs_ds926Dib5 = hs_wild626Dip3.data[0];
                                                    var hs_sat26Dip4 = new $hs.Thunk();
                                                    hs_sat26Dip4.evaluateOnce = function () {
                                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("getAll\x00");
                                                    };
                                                    var hs_wild726Dip5 = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds926Dib5, hs_sat26Dip4);
                                                    switch (hs_wild726Dip5.tag) {
                                                    case 1:
                                                        return hs_fail226Dib1.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                    case 2:
                                                        var hs_sat26Dip2 = new $hs.Func(1);
                                                        hs_sat26Dip2.evaluate = function (hs_ds1026Dibe) {
                                                            var hs_fail326Dibd = new $hs.Func(1);
                                                            hs_fail326Dibd.evaluate = function (hs_ds1126Dibc) {
                                                                var hs_sat26Dipp = new $hs.Thunk();
                                                                hs_sat26Dipp.evaluateOnce = function () {
                                                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                };
                                                                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Dipp);
                                                            };
                                                            var hs_wild826Dipc = hs_ds1026Dibe;
                                                            if (hs_ds1026Dibe.notEvaluated) {
                                                                hs_wild826Dipc = hs_ds1026Dibe.hscall();
                                                            }
                                                            switch (hs_wild826Dipc.tag) {
                                                            case 3:
                                                                var hs_ds1126Dibh = hs_wild826Dipc.data[0];
                                                                var hs_wild926Dipb = hs_ds1126Dibh;
                                                                if (hs_ds1126Dibh.notEvaluated) {
                                                                    hs_wild926Dipb = hs_ds1126Dibh.hscall();
                                                                }
                                                                switch (hs_wild926Dipb.tag) {
                                                                case 1:
                                                                    return hs_fail326Dibd.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                case 2:
                                                                    var hs_ds1226Dibl = hs_wild926Dipb.data[0];
                                                                    var hs_ds1326Dibq = hs_wild926Dipb.data[1];
                                                                    var hs_wild1026Dipa = hs_ds1226Dibl;
                                                                    if (hs_ds1226Dibl.notEvaluated) {
                                                                        hs_wild1026Dipa = hs_ds1226Dibl.hscall();
                                                                    }
                                                                    var hs_ds1426Dibo = hs_wild1026Dipa.data[0];
                                                                    var hs_ds1526Dip9 = hs_ds1426Dibo;
                                                                    if (hs_ds1426Dibo.notEvaluated) {
                                                                        hs_ds1526Dip9 = hs_ds1426Dibo.hscall();
                                                                    }
                                                                    switch (hs_ds1526Dip9) {
                                                                    case "=":
                                                                        var hs_wild1126Dip8 = hs_ds1326Dibq;
                                                                        if (hs_ds1326Dibq.notEvaluated) {
                                                                            hs_wild1126Dip8 = hs_ds1326Dibq.hscall();
                                                                        }
                                                                        switch (hs_wild1126Dip8.tag) {
                                                                        case 1:
                                                                            var hs_sat26Dipe = new $hs.Func(1);
                                                                            hs_sat26Dipe.evaluate = function (hs_a9026DibP) {
                                                                                var hs_sat26Dipg = new $hs.Func(1);
                                                                                hs_sat26Dipg.evaluate = function (hs_ds1626DibB) {
                                                                                    var hs_fail426DibA = new $hs.Func(1);
                                                                                    hs_fail426DibA.evaluate = function (hs_ds1726Dibz) {
                                                                                        var hs_sat26Dipo = new $hs.Thunk();
                                                                                        hs_sat26Dipo.evaluateOnce = function () {
                                                                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                                        };
                                                                                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Dipo);
                                                                                    };
                                                                                    var hs_wild1226Dipn = hs_ds1626DibB;
                                                                                    if (hs_ds1626DibB.notEvaluated) {
                                                                                        hs_wild1226Dipn = hs_ds1626DibB.hscall();
                                                                                    }
                                                                                    switch (hs_wild1226Dipn.tag) {
                                                                                    case 3:
                                                                                        var hs_ds1726DibE = hs_wild1226Dipn.data[0];
                                                                                        var hs_wild1326Dipm = hs_ds1726DibE;
                                                                                        if (hs_ds1726DibE.notEvaluated) {
                                                                                            hs_wild1326Dipm = hs_ds1726DibE.hscall();
                                                                                        }
                                                                                        switch (hs_wild1326Dipm.tag) {
                                                                                        case 1:
                                                                                            return hs_fail426DibA.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                        case 2:
                                                                                            var hs_ds1826DibI = hs_wild1326Dipm.data[0];
                                                                                            var hs_ds1926DibN = hs_wild1326Dipm.data[1];
                                                                                            var hs_wild1426Dipl = hs_ds1826DibI;
                                                                                            if (hs_ds1826DibI.notEvaluated) {
                                                                                                hs_wild1426Dipl = hs_ds1826DibI.hscall();
                                                                                            }
                                                                                            var hs_ds2026DibL = hs_wild1426Dipl.data[0];
                                                                                            var hs_ds2126Dipk = hs_ds2026DibL;
                                                                                            if (hs_ds2026DibL.notEvaluated) {
                                                                                                hs_ds2126Dipk = hs_ds2026DibL.hscall();
                                                                                            }
                                                                                            switch (hs_ds2126Dipk) {
                                                                                            case "}":
                                                                                                var hs_wild1526Dipj = hs_ds1926DibN;
                                                                                                if (hs_ds1926DibN.notEvaluated) {
                                                                                                    hs_wild1526Dipj = hs_ds1926DibN.hscall();
                                                                                                }
                                                                                                switch (hs_wild1526Dipj.tag) {
                                                                                                case 1:
                                                                                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_a9026DibP);
                                                                                                case 2:
                                                                                                    return hs_fail426DibA.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                }
                                                                                            default:
                                                                                                return hs_fail426DibA.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                            }
                                                                                        }
                                                                                    default:
                                                                                        return hs_fail426DibA.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                    }
                                                                                };
                                                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Dipg);
                                                                            };
                                                                            var hs_sat26Dipd = new $hs.Thunk();
                                                                            hs_sat26Dipd.evaluateOnce = function () {
                                                                                var hs_sat26Dipf = new $hs.Thunk();
                                                                                hs_sat26Dipf.evaluateOnce = function () {
                                                                                    return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadBool);
                                                                                };
                                                                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_reset.hscall(hs_sat26Dipf);
                                                                            };
                                                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Dipd, hs_sat26Dipe);
                                                                        case 2:
                                                                            return hs_fail326Dibd.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                        }
                                                                    default:
                                                                        return hs_fail326Dibd.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                    }
                                                                }
                                                            default:
                                                                return hs_fail326Dibd.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                            }
                                                        };
                                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Dip2);
                                                    }
                                                default:
                                                    return hs_fail226Dib1.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                }
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Dip1);
                                        case 2:
                                            return hs_fail126DiaH.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                        }
                                    default:
                                        return hs_fail126DiaH.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                    }
                                }
                            default:
                                return hs_fail126DiaH.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DioQ);
                    }
                default:
                    return hs_fail26Diav.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DioP);
        };
        var hs_sat26DioN = new $hs.Data(1);
        hs_sat26DioN.data = [11];
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall(hs_sat26DioN, hs_sat26DioO);
    };
    hs_zdcreadPrec525uTE8.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26Dipt);
    };
    this.hs_zdfReadAll.data = [hs_zdcreadsPrec525uTFQ, hs_zdcreadList525uTFP, hs_zdcreadPrec525uTE8, hs_zdcreadListPrec525uTFO];
    hs_zdcreadListPrec525uTFO.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall($hs.modules.DataziMonoid.hs_zdfReadAll);
    };
    hs_zdcreadList525uTFP.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListDefault.hscall($hs.modules.DataziMonoid.hs_zdfReadAll);
    };
    hs_zdcreadsPrec525uTFQ.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall($hs.modules.DataziMonoid.hs_zdfReadAll);
    };
    hs_a7025uTFR.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdccompare525uTFS.evaluateOnce = function () {
        if (hs_a7025uTFR.notEvaluated) {
            return hs_a7025uTFR.hscall();
        } else {
            return hs_a7025uTFR;
        }
    };
    hs_a7125uTFT.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdczl525uTFU.evaluateOnce = function () {
        if (hs_a7125uTFT.notEvaluated) {
            return hs_a7125uTFT.hscall();
        } else {
            return hs_a7125uTFT;
        }
    };
    hs_a7225uTFV.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdczgze525uTFW.evaluateOnce = function () {
        if (hs_a7225uTFV.notEvaluated) {
            return hs_a7225uTFV.hscall();
        } else {
            return hs_a7225uTFV;
        }
    };
    hs_a7325uTFX.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdczg525uTFY.evaluateOnce = function () {
        if (hs_a7325uTFX.notEvaluated) {
            return hs_a7325uTFX.hscall();
        } else {
            return hs_a7325uTFX;
        }
    };
    hs_a7425uTFZ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdczlze525uTG0.evaluateOnce = function () {
        if (hs_a7425uTFZ.notEvaluated) {
            return hs_a7425uTFZ.hscall();
        } else {
            return hs_a7425uTFZ;
        }
    };
    hs_a7525uTG1.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdcmax525uTG2.evaluateOnce = function () {
        if (hs_a7525uTG1.notEvaluated) {
            return hs_a7525uTG1.hscall();
        } else {
            return hs_a7525uTG1;
        }
    };
    hs_a7625uTG3.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdcmin525uTG4.evaluateOnce = function () {
        if (hs_a7625uTG3.notEvaluated) {
            return hs_a7625uTG3.hscall();
        } else {
            return hs_a7625uTG3;
        }
    };
    hs_a7725uTG5.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqBool);
    };
    hs_zdczeze525uTG6.evaluateOnce = function () {
        if (hs_a7725uTG5.notEvaluated) {
            return hs_a7725uTG5.hscall();
        } else {
            return hs_a7725uTG5;
        }
    };
    hs_a7825uTG7.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqBool);
    };
    hs_zdczsze525uTG8.evaluateOnce = function () {
        if (hs_a7825uTG7.notEvaluated) {
            return hs_a7825uTG7.hscall();
        } else {
            return hs_a7825uTG7;
        }
    };
    this.hs_zdfEqAll.data = [hs_a7725uTG5, hs_a7825uTG7];
    this.hs_zdfOrdAll.data = [$hs.modules.DataziMonoid.hs_zdfEqAll, hs_a7025uTFR, hs_a7125uTFT, hs_a7225uTFV, hs_a7325uTFX, hs_a7425uTFZ, hs_a7525uTG1, hs_a7625uTG3];
    hs_a7925uTG9.evaluate = function (hs_zddBounded26Dicr) {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26Dicr);
    };
    hs_zdcmaxBound425uTGc.evaluate = function (hs_eta1cW6l3) {
        return hs_a7925uTG9.hscall(hs_eta1cW6l3);
    };
    hs_a8025uTGd.evaluate = function (hs_zddBounded26Dicv) {
        return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26Dicv);
    };
    hs_zdcminBound425uTGg.evaluate = function (hs_eta1cW6l3) {
        return hs_a8025uTGd.hscall(hs_eta1cW6l3);
    };
    this.hs_zdfBoundedDual.evaluate = function (hs_zddBounded26Dicy) {
        var hs_sat26Dipv = new $hs.Thunk();
        hs_sat26Dipv.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26Dicy);
        };
        var hs_sat26Dipu = new $hs.Thunk();
        hs_sat26Dipu.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26Dicy);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dipu, hs_sat26Dipv];
        return $res;
    };
    hs_zdcshowsPrec625uTGl.evaluate = function (hs_zddShow26DicM, hs_a9026DicF, hs_ds26DicO) {
        var hs_sat26Dipx = new $hs.Thunk();
        hs_sat26Dipx.evaluateOnce = function () {
            var hs_sat26DipA = new $hs.Thunk();
            hs_sat26DipA.evaluateOnce = function () {
                var hs_sat26DipD = new $hs.Thunk();
                hs_sat26DipD.evaluateOnce = function () {
                    var hs_sat26DipG = new $hs.Thunk();
                    hs_sat26DipG.evaluateOnce = function () {
                        var hs_sat26DipJ = new $hs.Data(1);
                        hs_sat26DipJ.data = ["}"];
                        var hs_sat26DipI = new $hs.Data(2);
                        hs_sat26DipI.data = [hs_sat26DipJ, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DipI);
                    };
                    var hs_sat26DipF = new $hs.Thunk();
                    hs_sat26DipF.evaluateOnce = function () {
                        var hs_sat26DipH = new $hs.Data(1);
                        hs_sat26DipH.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26DicM, hs_sat26DipH, hs_ds26DicO);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DipF, hs_sat26DipG);
                };
                var hs_sat26DipC = new $hs.Thunk();
                hs_sat26DipC.evaluateOnce = function () {
                    var hs_sat26DipE = new $hs.Thunk();
                    hs_sat26DipE.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("getDual = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DipE);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DipC, hs_sat26DipD);
            };
            var hs_sat26Dipz = new $hs.Thunk();
            hs_sat26Dipz.evaluateOnce = function () {
                var hs_sat26DipB = new $hs.Thunk();
                hs_sat26DipB.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Dual {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DipB);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dipz, hs_sat26DipA);
        };
        var hs_sat26Dipw = new $hs.Thunk();
        hs_sat26Dipw.evaluateOnce = function () {
            var hs_sat26Dipy = new $hs.Data(1);
            hs_sat26Dipy.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a9026DicF, hs_sat26Dipy);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26Dipw, hs_sat26Dipx);
    };
    this.hs_zdfShowDual.evaluate = function (hs_zddShow26DicZ) {
        var hs_sat26DipL = new $hs.Thunk();
        hs_sat26DipL.evaluateOnce = function () {
            return hs_zdcshowList625uTGG.hscall(hs_zddShow26DicZ);
        };
        var hs_sat26DipM = new $hs.Thunk();
        hs_sat26DipM.evaluateOnce = function () {
            return hs_zdcshow625uTGH.hscall(hs_zddShow26DicZ);
        };
        var hs_sat26DipK = new $hs.Func(2);
        hs_sat26DipK.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec625uTGl.hscall(hs_zddShow26DicZ, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DipK, hs_sat26DipM, hs_sat26DipL];
        return $res;
    };
    hs_zdcshowList625uTGG.evaluate = function (hs_zddShow26Did4) {
        var hs_sat26DipN = new $hs.Thunk();
        hs_sat26DipN.evaluateOnce = function () {
            var hs_sat26DipO = new $hs.Data(1);
            hs_sat26DipO.data = [0];
            var hs_sat26DipP = $hs.modules.DataziMonoid.hs_zdfShowDual.hscall(hs_zddShow26Did4);
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_sat26DipP, hs_sat26DipO);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DipN);
    };
    hs_zdcshow625uTGH.evaluate = function (hs_zddShow26Did9) {
        var hs_sat26DipQ = new $hs.Thunk();
        hs_sat26DipQ.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfShowDual.hscall(hs_zddShow26Did9);
        };
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_sat26DipQ);
    };
    hs_zdcreadPrec625uTGV.evaluate = function (hs_zddRead26Dieg) {
        var hs_sat26DipR = new $hs.Thunk();
        hs_sat26DipR.evaluateOnce = function () {
            var hs_sat26DipT = new $hs.Thunk();
            hs_sat26DipT.evaluateOnce = function () {
                var hs_sat26DipU = new $hs.Func(1);
                hs_sat26DipU.evaluate = function (hs_ds26Didk) {
                    var hs_fail26Didj = new $hs.Func(1);
                    hs_fail26Didj.evaluate = function (hs_ds126Didi) {
                        var hs_sat26Diqx = new $hs.Thunk();
                        hs_sat26Diqx.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Diqx);
                    };
                    var hs_wild26DipW = hs_ds26Didk;
                    if (hs_ds26Didk.notEvaluated) {
                        hs_wild26DipW = hs_ds26Didk.hscall();
                    }
                    switch (hs_wild26DipW.tag) {
                    case 4:
                        var hs_ds126Didn = hs_wild26DipW.data[0];
                        var hs_sat26DipX = new $hs.Thunk();
                        hs_sat26DipX.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Dual\x00");
                        };
                        var hs_wild126DipY = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126Didn, hs_sat26DipX);
                        switch (hs_wild126DipY.tag) {
                        case 1:
                            return hs_fail26Didj.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        case 2:
                            var hs_sat26DipV = new $hs.Func(1);
                            hs_sat26DipV.evaluate = function (hs_ds226Didw) {
                                var hs_fail126Didv = new $hs.Func(1);
                                hs_fail126Didv.evaluate = function (hs_ds326Didu) {
                                    var hs_sat26Diqw = new $hs.Thunk();
                                    hs_sat26Diqw.evaluateOnce = function () {
                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                    };
                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Diqw);
                                };
                                var hs_wild226Diq5 = hs_ds226Didw;
                                if (hs_ds226Didw.notEvaluated) {
                                    hs_wild226Diq5 = hs_ds226Didw.hscall();
                                }
                                switch (hs_wild226Diq5.tag) {
                                case 3:
                                    var hs_ds326Didz = hs_wild226Diq5.data[0];
                                    var hs_wild326Diq4 = hs_ds326Didz;
                                    if (hs_ds326Didz.notEvaluated) {
                                        hs_wild326Diq4 = hs_ds326Didz.hscall();
                                    }
                                    switch (hs_wild326Diq4.tag) {
                                    case 1:
                                        return hs_fail126Didv.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                    case 2:
                                        var hs_ds426DidD = hs_wild326Diq4.data[0];
                                        var hs_ds526DidI = hs_wild326Diq4.data[1];
                                        var hs_wild426Diq3 = hs_ds426DidD;
                                        if (hs_ds426DidD.notEvaluated) {
                                            hs_wild426Diq3 = hs_ds426DidD.hscall();
                                        }
                                        var hs_ds626DidG = hs_wild426Diq3.data[0];
                                        var hs_ds726Diq2 = hs_ds626DidG;
                                        if (hs_ds626DidG.notEvaluated) {
                                            hs_ds726Diq2 = hs_ds626DidG.hscall();
                                        }
                                        switch (hs_ds726Diq2) {
                                        case "{":
                                            var hs_wild526Diq1 = hs_ds526DidI;
                                            if (hs_ds526DidI.notEvaluated) {
                                                hs_wild526Diq1 = hs_ds526DidI.hscall();
                                            }
                                            switch (hs_wild526Diq1.tag) {
                                            case 1:
                                                var hs_sat26Diq6 = new $hs.Func(1);
                                                hs_sat26Diq6.evaluate = function (hs_ds826DidQ) {
                                                    var hs_fail226DidP = new $hs.Func(1);
                                                    hs_fail226DidP.evaluate = function (hs_ds926DidO) {
                                                        var hs_sat26Diqv = new $hs.Thunk();
                                                        hs_sat26Diqv.evaluateOnce = function () {
                                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                        };
                                                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Diqv);
                                                    };
                                                    var hs_wild626Diq8 = hs_ds826DidQ;
                                                    if (hs_ds826DidQ.notEvaluated) {
                                                        hs_wild626Diq8 = hs_ds826DidQ.hscall();
                                                    }
                                                    switch (hs_wild626Diq8.tag) {
                                                    case 4:
                                                        var hs_ds926DidT = hs_wild626Diq8.data[0];
                                                        var hs_sat26Diq9 = new $hs.Thunk();
                                                        hs_sat26Diq9.evaluateOnce = function () {
                                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("getDual\x00");
                                                        };
                                                        var hs_wild726Diqa = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds926DidT, hs_sat26Diq9);
                                                        switch (hs_wild726Diqa.tag) {
                                                        case 1:
                                                            return hs_fail226DidP.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                        case 2:
                                                            var hs_sat26Diq7 = new $hs.Func(1);
                                                            hs_sat26Diq7.evaluate = function (hs_ds1026Die2) {
                                                                var hs_fail326Die1 = new $hs.Func(1);
                                                                hs_fail326Die1.evaluate = function (hs_ds1126Die0) {
                                                                    var hs_sat26Diqu = new $hs.Thunk();
                                                                    hs_sat26Diqu.evaluateOnce = function () {
                                                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                    };
                                                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Diqu);
                                                                };
                                                                var hs_wild826Diqh = hs_ds1026Die2;
                                                                if (hs_ds1026Die2.notEvaluated) {
                                                                    hs_wild826Diqh = hs_ds1026Die2.hscall();
                                                                }
                                                                switch (hs_wild826Diqh.tag) {
                                                                case 3:
                                                                    var hs_ds1126Die5 = hs_wild826Diqh.data[0];
                                                                    var hs_wild926Diqg = hs_ds1126Die5;
                                                                    if (hs_ds1126Die5.notEvaluated) {
                                                                        hs_wild926Diqg = hs_ds1126Die5.hscall();
                                                                    }
                                                                    switch (hs_wild926Diqg.tag) {
                                                                    case 1:
                                                                        return hs_fail326Die1.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                    case 2:
                                                                        var hs_ds1226Die9 = hs_wild926Diqg.data[0];
                                                                        var hs_ds1326Diee = hs_wild926Diqg.data[1];
                                                                        var hs_wild1026Diqf = hs_ds1226Die9;
                                                                        if (hs_ds1226Die9.notEvaluated) {
                                                                            hs_wild1026Diqf = hs_ds1226Die9.hscall();
                                                                        }
                                                                        var hs_ds1426Diec = hs_wild1026Diqf.data[0];
                                                                        var hs_ds1526Diqe = hs_ds1426Diec;
                                                                        if (hs_ds1426Diec.notEvaluated) {
                                                                            hs_ds1526Diqe = hs_ds1426Diec.hscall();
                                                                        }
                                                                        switch (hs_ds1526Diqe) {
                                                                        case "=":
                                                                            var hs_wild1126Diqd = hs_ds1326Diee;
                                                                            if (hs_ds1326Diee.notEvaluated) {
                                                                                hs_wild1126Diqd = hs_ds1326Diee.hscall();
                                                                            }
                                                                            switch (hs_wild1126Diqd.tag) {
                                                                            case 1:
                                                                                var hs_sat26Diqj = new $hs.Func(1);
                                                                                hs_sat26Diqj.evaluate = function (hs_a9026DieE) {
                                                                                    var hs_sat26Diql = new $hs.Func(1);
                                                                                    hs_sat26Diql.evaluate = function (hs_ds1626Dieq) {
                                                                                        var hs_fail426Diep = new $hs.Func(1);
                                                                                        hs_fail426Diep.evaluate = function (hs_ds1726Dieo) {
                                                                                            var hs_sat26Diqt = new $hs.Thunk();
                                                                                            hs_sat26Diqt.evaluateOnce = function () {
                                                                                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                                            };
                                                                                            return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Diqt);
                                                                                        };
                                                                                        var hs_wild1226Diqs = hs_ds1626Dieq;
                                                                                        if (hs_ds1626Dieq.notEvaluated) {
                                                                                            hs_wild1226Diqs = hs_ds1626Dieq.hscall();
                                                                                        }
                                                                                        switch (hs_wild1226Diqs.tag) {
                                                                                        case 3:
                                                                                            var hs_ds1726Diet = hs_wild1226Diqs.data[0];
                                                                                            var hs_wild1326Diqr = hs_ds1726Diet;
                                                                                            if (hs_ds1726Diet.notEvaluated) {
                                                                                                hs_wild1326Diqr = hs_ds1726Diet.hscall();
                                                                                            }
                                                                                            switch (hs_wild1326Diqr.tag) {
                                                                                            case 1:
                                                                                                return hs_fail426Diep.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                            case 2:
                                                                                                var hs_ds1826Diex = hs_wild1326Diqr.data[0];
                                                                                                var hs_ds1926DieC = hs_wild1326Diqr.data[1];
                                                                                                var hs_wild1426Diqq = hs_ds1826Diex;
                                                                                                if (hs_ds1826Diex.notEvaluated) {
                                                                                                    hs_wild1426Diqq = hs_ds1826Diex.hscall();
                                                                                                }
                                                                                                var hs_ds2026DieA = hs_wild1426Diqq.data[0];
                                                                                                var hs_ds2126Diqp = hs_ds2026DieA;
                                                                                                if (hs_ds2026DieA.notEvaluated) {
                                                                                                    hs_ds2126Diqp = hs_ds2026DieA.hscall();
                                                                                                }
                                                                                                switch (hs_ds2126Diqp) {
                                                                                                case "}":
                                                                                                    var hs_wild1526Diqo = hs_ds1926DieC;
                                                                                                    if (hs_ds1926DieC.notEvaluated) {
                                                                                                        hs_wild1526Diqo = hs_ds1926DieC.hscall();
                                                                                                    }
                                                                                                    switch (hs_wild1526Diqo.tag) {
                                                                                                    case 1:
                                                                                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_a9026DieE);
                                                                                                    case 2:
                                                                                                        return hs_fail426Diep.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                    }
                                                                                                default:
                                                                                                    return hs_fail426Diep.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                }
                                                                                            }
                                                                                        default:
                                                                                            return hs_fail426Diep.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                        }
                                                                                    };
                                                                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Diql);
                                                                                };
                                                                                var hs_sat26Diqi = new $hs.Thunk();
                                                                                hs_sat26Diqi.evaluateOnce = function () {
                                                                                    var hs_sat26Diqk = new $hs.Thunk();
                                                                                    hs_sat26Diqk.evaluateOnce = function () {
                                                                                        return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26Dieg);
                                                                                    };
                                                                                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_reset.hscall(hs_sat26Diqk);
                                                                                };
                                                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Diqi, hs_sat26Diqj);
                                                                            case 2:
                                                                                return hs_fail326Die1.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                            }
                                                                        default:
                                                                            return hs_fail326Die1.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                        }
                                                                    }
                                                                default:
                                                                    return hs_fail326Die1.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                }
                                                            };
                                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Diq7);
                                                        }
                                                    default:
                                                        return hs_fail226DidP.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                    }
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Diq6);
                                            case 2:
                                                return hs_fail126Didv.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                            }
                                        default:
                                            return hs_fail126Didv.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                        }
                                    }
                                default:
                                    return hs_fail126Didv.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                }
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DipV);
                        }
                    default:
                        return hs_fail26Didj.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DipU);
            };
            var hs_sat26DipS = new $hs.Data(1);
            hs_sat26DipS.data = [11];
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall(hs_sat26DipS, hs_sat26DipT);
        };
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26DipR);
    };
    this.hs_zdfReadDual.evaluate = function (hs_zddRead26DieX) {
        var hs_sat26Diqz = new $hs.Thunk();
        hs_sat26Diqz.evaluateOnce = function () {
            return hs_zdcreadListPrec625uTID.hscall(hs_zddRead26DieX);
        };
        var hs_sat26DiqA = new $hs.Thunk();
        hs_sat26DiqA.evaluateOnce = function () {
            return hs_zdcreadPrec625uTGV.hscall(hs_zddRead26DieX);
        };
        var hs_sat26DiqB = new $hs.Thunk();
        hs_sat26DiqB.evaluateOnce = function () {
            return hs_zdcreadList625uTIE.hscall(hs_zddRead26DieX);
        };
        var hs_sat26Diqy = new $hs.Thunk();
        hs_sat26Diqy.evaluateOnce = function () {
            return hs_zdcreadsPrec625uTIF.hscall(hs_zddRead26DieX);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Diqy, hs_sat26DiqB, hs_sat26DiqA, hs_sat26Diqz];
        return $res;
    };
    hs_zdcreadListPrec625uTID.evaluate = function (hs_zddRead26Dif3) {
        var hs_sat26DiqC = new $hs.Thunk();
        hs_sat26DiqC.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadDual.hscall(hs_zddRead26Dif3);
        };
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall(hs_sat26DiqC);
    };
    hs_zdcreadList625uTIE.evaluate = function (hs_zddRead26Dif6) {
        var hs_sat26DiqD = new $hs.Thunk();
        hs_sat26DiqD.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadDual.hscall(hs_zddRead26Dif6);
        };
        return $hs.modules.GHCziRead.hs_readListDefault.hscall(hs_sat26DiqD);
    };
    hs_zdcreadsPrec625uTIF.evaluate = function (hs_zddRead26Dif9) {
        var hs_sat26DiqE = new $hs.Thunk();
        hs_sat26DiqE.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadDual.hscall(hs_zddRead26Dif9);
        };
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall(hs_sat26DiqE);
    };
    hs_a8125uTIV.evaluate = function (hs_zddOrd26Difd) {
        return $hs.modules.GHCziClasses.hs_min.hscall(hs_zddOrd26Difd);
    };
    hs_zdcmin625uTIY.evaluate = function (hs_eta1cW6l3) {
        return hs_a8125uTIV.hscall(hs_eta1cW6l3);
    };
    hs_a8225uTIZ.evaluate = function (hs_zddOrd26Difh) {
        return $hs.modules.GHCziClasses.hs_max.hscall(hs_zddOrd26Difh);
    };
    hs_zdcmax625uTJ2.evaluate = function (hs_eta1cW6l3) {
        return hs_a8225uTIZ.hscall(hs_eta1cW6l3);
    };
    hs_a8325uTJ3.evaluate = function (hs_zddOrd26Difl) {
        return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd26Difl);
    };
    hs_zdczlze625uTJ6.evaluate = function (hs_eta1cW6l3) {
        return hs_a8325uTJ3.hscall(hs_eta1cW6l3);
    };
    hs_a8425uTJ7.evaluate = function (hs_zddOrd26Difp) {
        return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd26Difp);
    };
    hs_zdczg625uTJa.evaluate = function (hs_eta1cW6l3) {
        return hs_a8425uTJ7.hscall(hs_eta1cW6l3);
    };
    hs_a8525uTJb.evaluate = function (hs_zddOrd26Dift) {
        return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd26Dift);
    };
    hs_zdczgze625uTJe.evaluate = function (hs_eta1cW6l3) {
        return hs_a8525uTJb.hscall(hs_eta1cW6l3);
    };
    hs_a8625uTJf.evaluate = function (hs_zddOrd26Difx) {
        return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd26Difx);
    };
    hs_zdczl625uTJi.evaluate = function (hs_eta1cW6l3) {
        return hs_a8625uTJf.hscall(hs_eta1cW6l3);
    };
    hs_a8725uTJj.evaluate = function (hs_zddOrd26DifB) {
        return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd26DifB);
    };
    hs_zdccompare625uTJm.evaluate = function (hs_eta1cW6l3) {
        return hs_a8725uTJj.hscall(hs_eta1cW6l3);
    };
    hs_a8825uTJn.evaluate = function (hs_zddEq26DifF) {
        return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_zddEq26DifF);
    };
    hs_zdczsze625uTJq.evaluate = function (hs_eta1cW6l3) {
        return hs_a8825uTJn.hscall(hs_eta1cW6l3);
    };
    hs_a8925uTJr.evaluate = function (hs_zddEq26DifJ) {
        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DifJ);
    };
    hs_zdczeze625uTJu.evaluate = function (hs_eta1cW6l3) {
        return hs_a8925uTJr.hscall(hs_eta1cW6l3);
    };
    this.hs_zdfEqDual.evaluate = function (hs_zddEq26DifM) {
        var hs_sat26DiqG = new $hs.Thunk();
        hs_sat26DiqG.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_zddEq26DifM);
        };
        var hs_sat26DiqF = new $hs.Thunk();
        hs_sat26DiqF.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DifM);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DiqF, hs_sat26DiqG];
        return $res;
    };
    hs_zdczdp1Ord425uTJz.evaluate = function (hs_zddOrd26DifR) {
        var hs_sat26DiqH = new $hs.Thunk();
        hs_sat26DiqH.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DifR);
        };
        return $hs.modules.DataziMonoid.hs_zdfEqDual.hscall(hs_sat26DiqH);
    };
    this.hs_zdfOrdDual.evaluate = function (hs_zddOrd26DifU) {
        var hs_sat26DiqJ = new $hs.Thunk();
        hs_sat26DiqJ.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_min.hscall(hs_zddOrd26DifU);
        };
        var hs_sat26DiqK = new $hs.Thunk();
        hs_sat26DiqK.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_max.hscall(hs_zddOrd26DifU);
        };
        var hs_sat26DiqL = new $hs.Thunk();
        hs_sat26DiqL.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd26DifU);
        };
        var hs_sat26DiqM = new $hs.Thunk();
        hs_sat26DiqM.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd26DifU);
        };
        var hs_sat26DiqN = new $hs.Thunk();
        hs_sat26DiqN.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd26DifU);
        };
        var hs_sat26DiqO = new $hs.Thunk();
        hs_sat26DiqO.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd26DifU);
        };
        var hs_sat26DiqP = new $hs.Thunk();
        hs_sat26DiqP.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd26DifU);
        };
        var hs_sat26DiqI = new $hs.Thunk();
        hs_sat26DiqI.evaluateOnce = function () {
            return hs_zdczdp1Ord425uTJz.hscall(hs_zddOrd26DifU);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DiqI, hs_sat26DiqP, hs_sat26DiqO, hs_sat26DiqN, hs_sat26DiqM, hs_sat26DiqL, hs_sat26DiqK, hs_sat26DiqJ];
        return $res;
    };
    this.hs_Last.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.DataziMonoid.hs_Last.hscall(hs_eta1cW6l3);
    };
    this.hs_First.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.DataziMonoid.hs_First.hscall(hs_eta1cW6l3);
    };
    this.hs_Product.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.DataziMonoid.hs_Product.hscall(hs_eta1cW6l3);
    };
    this.hs_Sum.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.DataziMonoid.hs_Sum.hscall(hs_eta1cW6l3);
    };
    this.hs_Any.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.DataziMonoid.hs_Any.hscall(hs_eta1cW6l3);
    };
    this.hs_All.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.DataziMonoid.hs_All.hscall(hs_eta1cW6l3);
    };
    this.hs_Endo.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.DataziMonoid.hs_Endo.hscall(hs_eta1cW6l3);
    };
    this.hs_Dual.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.DataziMonoid.hs_Dual.hscall(hs_eta1cW6l3);
    };
    this.hs_DZCMonoid.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
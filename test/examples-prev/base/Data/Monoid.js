
$hs.modules.DataziMonoid = new $hs.Module();
$hs.modules.DataziMonoid.dependencies = ["GHC.Prim", "GHC.Types", "GHC.Bool", "GHC.Ordering", "GHC.Unit", "GHC.Integer", "Data.Maybe", "GHC.Base", "GHC.Enum", "GHC.Num", "GHC.Show", "GHC.Classes", "GHC.Read", "Control.Exception.Base", "Text.ParserCombinators.ReadPrec"];
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
    this.hs_zdfOrdLast = new $hs.Func(2);
    this.hs_zdfEqLast = new $hs.Func(1);
    this.hs_zdfShowFirst = new $hs.Func(1);
    this.hs_zdfReadFirst = new $hs.Func(1);
    this.hs_zdfOrdFirst = new $hs.Func(2);
    this.hs_zdfEqFirst = new $hs.Func(1);
    this.hs_zdfBoundedProduct = new $hs.Func(1);
    this.hs_zdfShowProduct = new $hs.Func(1);
    this.hs_zdfReadProduct = new $hs.Func(1);
    this.hs_zdfOrdProduct = new $hs.Func(2);
    this.hs_zdfEqProduct = new $hs.Func(1);
    this.hs_zdfBoundedSum = new $hs.Func(1);
    this.hs_zdfShowSum = new $hs.Func(1);
    this.hs_zdfReadSum = new $hs.Func(1);
    this.hs_zdfOrdSum = new $hs.Func(2);
    this.hs_zdfEqSum = new $hs.Func(1);
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
    this.hs_zdfOrdDual = new $hs.Func(2);
    this.hs_zdfEqDual = new $hs.Func(1);
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
    this.hs_mempty.evaluate = function (hs_tpl26DFMa) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_tpl26DFMa);
    };
    this.hs_mappend.notEvaluated = true;
    this.hs_mappend.evaluate = function (hs_tpl26DFMh) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_tpl26DFMh);
    };
    this.hs_mconcat.notEvaluated = true;
    this.hs_mconcat.evaluate = function (hs_tpl26DFMo) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_tpl26DFMo);
    };
    this.hs_zddmmconcat.notEvaluated = true;
    this.hs_zddmmconcat.evaluate = function (hs_zddMonoid26DFMv) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddMonoid26DFMv);
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
    this.hs_zdfMonoidZLzmzgZR.evaluate = function (hs_zddMonoid26DFNu) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddMonoid26DFNu);
    };
    this.hs_zdfMonoidZLZR.notEvaluated = true;
    this.hs_zdfMonoidZLZR.evaluate = function () {
        $hs.modules.DataziMonoid.loadDependencies();
        return this;
    };
    this.hs_zdfMonoidZLz2cUZR.notEvaluated = true;
    this.hs_zdfMonoidZLz2cUZR.evaluate = function (hs_zddMonoid26DFOm, hs_zddMonoid126DFOn) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddMonoid26DFOm, hs_zddMonoid126DFOn);
    };
    this.hs_zdfMonoidZLz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfMonoidZLz2cUz2cUZR.evaluate = function (hs_zddMonoid26DFPi, hs_zddMonoid126DFPj, hs_zddMonoid226DFPk) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddMonoid26DFPi, hs_zddMonoid126DFPj, hs_zddMonoid226DFPk);
    };
    this.hs_zdfMonoidZLz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfMonoidZLz2cUz2cUz2cUZR.evaluate = function (hs_zddMonoid26DFQs, hs_zddMonoid126DFQt, hs_zddMonoid226DFQu, hs_zddMonoid326DFQv) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddMonoid26DFQs, hs_zddMonoid126DFQt, hs_zddMonoid226DFQu, hs_zddMonoid326DFQv);
    };
    this.hs_zdfMonoidZLz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfMonoidZLz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddMonoid26DFRQ, hs_zddMonoid126DFRR, hs_zddMonoid226DFRS, hs_zddMonoid326DFRT, hs_zddMonoid426DFRU) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddMonoid26DFRQ, hs_zddMonoid126DFRR, hs_zddMonoid226DFRS, hs_zddMonoid326DFRT, hs_zddMonoid426DFRU);
    };
    this.hs_zdfMonoidOrdering.notEvaluated = true;
    this.hs_zdfMonoidOrdering.evaluate = function () {
        $hs.modules.DataziMonoid.loadDependencies();
        return this;
    };
    this.hs_zdfMonoidDual.notEvaluated = true;
    this.hs_zdfMonoidDual.evaluate = function (hs_zddMonoid26DFSG) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddMonoid26DFSG);
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
    this.hs_zdfMonoidSum.evaluate = function (hs_zddNum26DFTU) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddNum26DFTU);
    };
    this.hs_zdfMonoidProduct.notEvaluated = true;
    this.hs_zdfMonoidProduct.evaluate = function (hs_zddNum26DFUt) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddNum26DFUt);
    };
    this.hs_zdfMonoidMaybe.notEvaluated = true;
    this.hs_zdfMonoidMaybe.evaluate = function (hs_zddMonoid26DFVe) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddMonoid26DFVe);
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
    this.hs_zdfShowLast.evaluate = function (hs_zddShow26DFWw) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddShow26DFWw);
    };
    this.hs_zdfReadLast.notEvaluated = true;
    this.hs_zdfReadLast.evaluate = function (hs_zddRead26DFYA) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddRead26DFYA);
    };
    this.hs_zdfOrdLast.notEvaluated = true;
    this.hs_zdfOrdLast.evaluate = function (hs_zddEq26DG05, hs_zddOrd26DG06) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddEq26DG05, hs_zddOrd26DG06);
    };
    this.hs_zdfEqLast.notEvaluated = true;
    this.hs_zdfEqLast.evaluate = function (hs_zddEq26DG0O) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddEq26DG0O);
    };
    this.hs_zdfShowFirst.notEvaluated = true;
    this.hs_zdfShowFirst.evaluate = function (hs_zddShow26DG1y) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddShow26DG1y);
    };
    this.hs_zdfReadFirst.notEvaluated = true;
    this.hs_zdfReadFirst.evaluate = function (hs_zddRead26DG3C) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddRead26DG3C);
    };
    this.hs_zdfOrdFirst.notEvaluated = true;
    this.hs_zdfOrdFirst.evaluate = function (hs_zddEq26DG57, hs_zddOrd26DG58) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddEq26DG57, hs_zddOrd26DG58);
    };
    this.hs_zdfEqFirst.notEvaluated = true;
    this.hs_zdfEqFirst.evaluate = function (hs_zddEq26DG5Q) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddEq26DG5Q);
    };
    this.hs_zdfBoundedProduct.notEvaluated = true;
    this.hs_zdfBoundedProduct.evaluate = function (hs_zddBounded26DG68) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddBounded26DG68);
    };
    this.hs_zdfShowProduct.notEvaluated = true;
    this.hs_zdfShowProduct.evaluate = function (hs_zddShow26DG6C) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddShow26DG6C);
    };
    this.hs_zdfReadProduct.notEvaluated = true;
    this.hs_zdfReadProduct.evaluate = function (hs_zddRead26DG8E) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddRead26DG8E);
    };
    this.hs_zdfOrdProduct.notEvaluated = true;
    this.hs_zdfOrdProduct.evaluate = function (hs_zddEq26DG9O, hs_zddOrd26DG9P) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddEq26DG9O, hs_zddOrd26DG9P);
    };
    this.hs_zdfEqProduct.notEvaluated = true;
    this.hs_zdfEqProduct.evaluate = function (hs_zddEq26DGaa) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddEq26DGaa);
    };
    this.hs_zdfBoundedSum.notEvaluated = true;
    this.hs_zdfBoundedSum.evaluate = function (hs_zddBounded26DGaq) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddBounded26DGaq);
    };
    this.hs_zdfShowSum.notEvaluated = true;
    this.hs_zdfShowSum.evaluate = function (hs_zddShow26DGaU) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddShow26DGaU);
    };
    this.hs_zdfReadSum.notEvaluated = true;
    this.hs_zdfReadSum.evaluate = function (hs_zddRead26DGcW) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddRead26DGcW);
    };
    this.hs_zdfOrdSum.notEvaluated = true;
    this.hs_zdfOrdSum.evaluate = function (hs_zddEq26DGe6, hs_zddOrd26DGe7) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddEq26DGe6, hs_zddOrd26DGe7);
    };
    this.hs_zdfEqSum.notEvaluated = true;
    this.hs_zdfEqSum.evaluate = function (hs_zddEq26DGes) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddEq26DGes);
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
    this.hs_zdfBoundedDual.evaluate = function (hs_zddBounded26DGky) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddBounded26DGky);
    };
    this.hs_zdfShowDual.notEvaluated = true;
    this.hs_zdfShowDual.evaluate = function (hs_zddShow26DGl2) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddShow26DGl2);
    };
    this.hs_zdfReadDual.notEvaluated = true;
    this.hs_zdfReadDual.evaluate = function (hs_zddRead26DGn4) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddRead26DGn4);
    };
    this.hs_zdfOrdDual.notEvaluated = true;
    this.hs_zdfOrdDual.evaluate = function (hs_zddEq26DGoe, hs_zddOrd26DGof) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddEq26DGoe, hs_zddOrd26DGof);
    };
    this.hs_zdfEqDual.notEvaluated = true;
    this.hs_zdfEqDual.evaluate = function (hs_zddEq26DGoA) {
        $hs.modules.DataziMonoid.loadDependencies();
        return this.evaluate(hs_zddEq26DGoA);
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
    this.hs_zdfOrdLast.notEvaluated = false;
    this.hs_zdfEqLast.notEvaluated = false;
    this.hs_zdfShowFirst.notEvaluated = false;
    this.hs_zdfReadFirst.notEvaluated = false;
    this.hs_zdfOrdFirst.notEvaluated = false;
    this.hs_zdfEqFirst.notEvaluated = false;
    this.hs_zdfBoundedProduct.notEvaluated = false;
    this.hs_zdfShowProduct.notEvaluated = false;
    this.hs_zdfReadProduct.notEvaluated = false;
    this.hs_zdfOrdProduct.notEvaluated = false;
    this.hs_zdfEqProduct.notEvaluated = false;
    this.hs_zdfBoundedSum.notEvaluated = false;
    this.hs_zdfShowSum.notEvaluated = false;
    this.hs_zdfReadSum.notEvaluated = false;
    this.hs_zdfOrdSum.notEvaluated = false;
    this.hs_zdfEqSum.notEvaluated = false;
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
    this.hs_zdfOrdDual.notEvaluated = false;
    this.hs_zdfEqDual.notEvaluated = false;
    this.hs_Last.notEvaluated = false;
    this.hs_First.notEvaluated = false;
    this.hs_Product.notEvaluated = false;
    this.hs_Sum.notEvaluated = false;
    this.hs_Any.notEvaluated = false;
    this.hs_All.notEvaluated = false;
    this.hs_Endo.notEvaluated = false;
    this.hs_Dual.notEvaluated = false;
    this.hs_DZCMonoid.notEvaluated = false;
    var hs_a25vhgj = new $hs.Func(1);
    var hs_a125vhgn = new $hs.Func(1);
    var hs_a225vhgr = new $hs.Func(1);
    var hs_a325vhgv = new $hs.Func(1);
    var hs_a425vhgz = new $hs.Func(1);
    var hs_a525vhgD = new $hs.Func(1);
    var hs_a625vhgH = new $hs.Func(1);
    var hs_a725vhgL = new $hs.Func(1);
    var hs_zdcmconcat25vhgP = new $hs.Thunk();
    var hs_zdcmappend25vhgT = new $hs.Func(4);
    var hs_zdcmempty25vhh5 = new $hs.Func(2);
    var hs_zdcmconcat125vhhb = new $hs.Func(1);
    var hs_zdcmconcat225vhhp = new $hs.Func(1);
    var hs_zdcmappend125vhht = new $hs.Func(2);
    var hs_zdcmappend225vhhz = new $hs.Func(4);
    var hs_zdcmempty125vhhV = new $hs.Func(2);
    var hs_zdcmconcat325vhi3 = new $hs.Func(2);
    var hs_zdcmappend325vhik = new $hs.Func(5);
    var hs_zdcmempty225vhiN = new $hs.Func(3);
    var hs_zdcmconcat425vhiY = new $hs.Func(3);
    var hs_zdcmappend425vhjj = new $hs.Func(6);
    var hs_zdcmempty325vhjT = new $hs.Func(4);
    var hs_zdcmconcat525vhk7 = new $hs.Func(4);
    var hs_zdcmappend525vhkw = new $hs.Func(7);
    var hs_zdcmempty425vhld = new $hs.Func(5);
    var hs_zdcmconcat625vhlu = new $hs.Func(5);
    var hs_zdcmappend625vhlX = new $hs.Func(2);
    var hs_sat26DGpT = new $hs.Thunk();
    var hs_sat26DGpU = new $hs.Thunk();
    var hs_zdcmconcat725vhm4 = new $hs.Thunk();
    var hs_a825vhm8 = new $hs.Func(3);
    var hs_zdcmappend725vhmg = new $hs.Func(3);
    var hs_a925vhmi = new $hs.Func(1);
    var hs_zdcmempty525vhmm = new $hs.Func(1);
    var hs_zdcmconcat825vhmo = new $hs.Func(1);
    var hs_a1025vhmF = new $hs.Func(2);
    var hs_zdcmappend825vhmL = new $hs.Func(2);
    var hs_zdcmempty625vhmN = new $hs.Thunk();
    var hs_zdcmconcat925vhmP = new $hs.Thunk();
    var hs_a1125vhmT = new $hs.Func(2);
    var hs_zdcmappend925vhmZ = new $hs.Func(2);
    var hs_zdcmempty725vhn1 = new $hs.Data(2);
    var hs_sat26DGq2 = new $hs.Thunk();
    var hs_sat26DGq3 = new $hs.Thunk();
    var hs_zdcmconcat1025vhn3 = new $hs.Thunk();
    var hs_a1225vhn7 = new $hs.Func(2);
    var hs_zdcmappend1025vhnd = new $hs.Func(2);
    var hs_zdcmempty825vhnf = new $hs.Data(1);
    var hs_sat26DGq4 = new $hs.Thunk();
    var hs_sat26DGq5 = new $hs.Thunk();
    var hs_zdcmconcat1125vhnh = new $hs.Thunk();
    var hs_a1325vhnl = new $hs.Func(3);
    var hs_zdcmappend1125vhnt = new $hs.Func(3);
    var hs_a1425vhnv = new $hs.Func(1);
    var hs_zdcmempty925vhnA = new $hs.Func(1);
    var hs_zdcmconcat1225vhnC = new $hs.Func(1);
    var hs_a1525vhnU = new $hs.Func(3);
    var hs_zdcmappend1225vho2 = new $hs.Func(3);
    var hs_a1625vho4 = new $hs.Func(1);
    var hs_zdcmempty1025vho9 = new $hs.Func(1);
    var hs_zdcmconcat1325vhob = new $hs.Func(1);
    var hs_zdcmappend1325vhot = new $hs.Func(3);
    var hs_zdcmempty1125vhoS = new $hs.Func(1);
    var hs_zdcmconcat1425vhoW = new $hs.Func(1);
    var hs_zdcmappend1425vhp8 = new $hs.Func(2);
    var hs_zdcmempty1225vhph = new $hs.Data(1);
    var hs_zdcmconcat1525vhpj = new $hs.Thunk();
    var hs_zdcmappend1525vhpn = new $hs.Func(2);
    var hs_zdcmempty1325vhpw = new $hs.Data(1);
    var hs_zdcmconcat1625vhpy = new $hs.Thunk();
    var hs_zdcshowsPrec25vhpC = new $hs.Func(1);
    var hs_zdcshowList25vhqc = new $hs.Func(1);
    var hs_zdcshow25vhqe = new $hs.Func(1);
    var hs_zdcreadPrec25vhqt = new $hs.Func(1);
    var hs_zdcreadListPrec25vhse = new $hs.Func(1);
    var hs_zdcreadList25vhsg = new $hs.Func(1);
    var hs_zdcreadsPrec25vhsi = new $hs.Func(1);
    var hs_a1725vhsz = new $hs.Func(2);
    var hs_zdcmin25vhsI = new $hs.Func(2);
    var hs_a1825vhsK = new $hs.Func(2);
    var hs_zdcmax25vhsT = new $hs.Func(2);
    var hs_a1925vhsV = new $hs.Func(2);
    var hs_zdczlze25vht4 = new $hs.Func(2);
    var hs_a2025vht6 = new $hs.Func(2);
    var hs_zdczg25vhtf = new $hs.Func(2);
    var hs_a2125vhth = new $hs.Func(2);
    var hs_zdczgze25vhtq = new $hs.Func(2);
    var hs_a2225vhts = new $hs.Func(2);
    var hs_zdczl25vhtB = new $hs.Func(2);
    var hs_a2325vhtD = new $hs.Func(2);
    var hs_zdccompare25vhtM = new $hs.Func(2);
    var hs_a2425vhuk = new $hs.Func(1);
    var hs_zdczsze25vhup = new $hs.Func(1);
    var hs_a2525vhur = new $hs.Func(1);
    var hs_zdczeze25vhuw = new $hs.Func(1);
    var hs_zdcshowsPrec125vhuE = new $hs.Func(1);
    var hs_zdcshowList125vhve = new $hs.Func(1);
    var hs_zdcshow125vhvg = new $hs.Func(1);
    var hs_zdcreadPrec125vhvv = new $hs.Func(1);
    var hs_zdcreadListPrec125vhxg = new $hs.Func(1);
    var hs_zdcreadList125vhxi = new $hs.Func(1);
    var hs_zdcreadsPrec125vhxk = new $hs.Func(1);
    var hs_a2625vhxB = new $hs.Func(2);
    var hs_zdcmin125vhxK = new $hs.Func(2);
    var hs_a2725vhxM = new $hs.Func(2);
    var hs_zdcmax125vhxV = new $hs.Func(2);
    var hs_a2825vhxX = new $hs.Func(2);
    var hs_zdczlze125vhy6 = new $hs.Func(2);
    var hs_a2925vhy8 = new $hs.Func(2);
    var hs_zdczg125vhyh = new $hs.Func(2);
    var hs_a3025vhyj = new $hs.Func(2);
    var hs_zdczgze125vhys = new $hs.Func(2);
    var hs_a3125vhyu = new $hs.Func(2);
    var hs_zdczl125vhyD = new $hs.Func(2);
    var hs_a3225vhyF = new $hs.Func(2);
    var hs_zdccompare125vhyO = new $hs.Func(2);
    var hs_a3325vhzm = new $hs.Func(1);
    var hs_zdczsze125vhzr = new $hs.Func(1);
    var hs_a3425vhzt = new $hs.Func(1);
    var hs_zdczeze125vhzy = new $hs.Func(1);
    var hs_a3525vhzG = new $hs.Func(1);
    var hs_zdcmaxBound25vhzK = new $hs.Func(1);
    var hs_a3625vhzM = new $hs.Func(1);
    var hs_zdcminBound25vhzQ = new $hs.Func(1);
    var hs_zdcshowsPrec225vhzW = new $hs.Func(3);
    var hs_zdcshowList225vhAi = new $hs.Func(1);
    var hs_zdcshow225vhAk = new $hs.Func(1);
    var hs_zdcreadPrec225vhAz = new $hs.Func(1);
    var hs_zdcreadListPrec225vhCi = new $hs.Func(1);
    var hs_zdcreadList225vhCk = new $hs.Func(1);
    var hs_zdcreadsPrec225vhCm = new $hs.Func(1);
    var hs_a3725vhCD = new $hs.Func(2);
    var hs_zdcmin225vhCJ = new $hs.Func(2);
    var hs_a3825vhCL = new $hs.Func(2);
    var hs_zdcmax225vhCR = new $hs.Func(2);
    var hs_a3925vhCT = new $hs.Func(2);
    var hs_zdczlze225vhCZ = new $hs.Func(2);
    var hs_a4025vhD1 = new $hs.Func(2);
    var hs_zdczg225vhD7 = new $hs.Func(2);
    var hs_a4125vhD9 = new $hs.Func(2);
    var hs_zdczgze225vhDf = new $hs.Func(2);
    var hs_a4225vhDh = new $hs.Func(2);
    var hs_zdczl225vhDn = new $hs.Func(2);
    var hs_a4325vhDp = new $hs.Func(2);
    var hs_zdccompare225vhDv = new $hs.Func(2);
    var hs_a4425vhDI = new $hs.Func(1);
    var hs_zdczsze225vhDM = new $hs.Func(1);
    var hs_a4525vhDO = new $hs.Func(1);
    var hs_zdczeze225vhDS = new $hs.Func(1);
    var hs_a4625vhDY = new $hs.Func(1);
    var hs_zdcmaxBound125vhE2 = new $hs.Func(1);
    var hs_a4725vhE4 = new $hs.Func(1);
    var hs_zdcminBound125vhE8 = new $hs.Func(1);
    var hs_zdcshowsPrec325vhEe = new $hs.Func(3);
    var hs_zdcshowList325vhEA = new $hs.Func(1);
    var hs_zdcshow325vhEC = new $hs.Func(1);
    var hs_zdcreadPrec325vhER = new $hs.Func(1);
    var hs_zdcreadListPrec325vhGA = new $hs.Func(1);
    var hs_zdcreadList325vhGC = new $hs.Func(1);
    var hs_zdcreadsPrec325vhGE = new $hs.Func(1);
    var hs_a4825vhGV = new $hs.Func(2);
    var hs_zdcmin325vhH1 = new $hs.Func(2);
    var hs_a4925vhH3 = new $hs.Func(2);
    var hs_zdcmax325vhH9 = new $hs.Func(2);
    var hs_a5025vhHb = new $hs.Func(2);
    var hs_zdczlze325vhHh = new $hs.Func(2);
    var hs_a5125vhHj = new $hs.Func(2);
    var hs_zdczg325vhHp = new $hs.Func(2);
    var hs_a5225vhHr = new $hs.Func(2);
    var hs_zdczgze325vhHx = new $hs.Func(2);
    var hs_a5325vhHz = new $hs.Func(2);
    var hs_zdczl325vhHF = new $hs.Func(2);
    var hs_a5425vhHH = new $hs.Func(2);
    var hs_zdccompare325vhHN = new $hs.Func(2);
    var hs_a5525vhI0 = new $hs.Func(1);
    var hs_zdczsze325vhI4 = new $hs.Func(1);
    var hs_a5625vhI6 = new $hs.Func(1);
    var hs_zdczeze325vhIa = new $hs.Func(1);
    var hs_a5725vhIg = new $hs.Thunk();
    var hs_zdcminBound225vhIi = new $hs.Thunk();
    var hs_a5825vhIk = new $hs.Thunk();
    var hs_zdcmaxBound225vhIm = new $hs.Thunk();
    var hs_zdcshowsPrec425vhIo = new $hs.Func(2);
    var hs_sat26DGxb = new $hs.Thunk();
    var hs_zdcshowList425vhII = new $hs.Thunk();
    var hs_zdcshow425vhIK = new $hs.Thunk();
    var hs_sat26DGxT = new $hs.Thunk();
    var hs_zdcreadPrec425vhIO = new $hs.Thunk();
    var hs_zdcreadListPrec425vhKv = new $hs.Thunk();
    var hs_zdcreadList425vhKx = new $hs.Thunk();
    var hs_zdcreadsPrec425vhKz = new $hs.Thunk();
    var hs_a5925vhKB = new $hs.Thunk();
    var hs_zdccompare425vhKD = new $hs.Thunk();
    var hs_a6025vhKF = new $hs.Thunk();
    var hs_zdczl425vhKH = new $hs.Thunk();
    var hs_a6125vhKJ = new $hs.Thunk();
    var hs_zdczgze425vhKL = new $hs.Thunk();
    var hs_a6225vhKN = new $hs.Thunk();
    var hs_zdczg425vhKP = new $hs.Thunk();
    var hs_a6325vhKR = new $hs.Thunk();
    var hs_zdczlze425vhKT = new $hs.Thunk();
    var hs_a6425vhKV = new $hs.Thunk();
    var hs_zdcmax425vhKX = new $hs.Thunk();
    var hs_a6525vhKZ = new $hs.Thunk();
    var hs_zdcmin425vhL1 = new $hs.Thunk();
    var hs_a6625vhL3 = new $hs.Thunk();
    var hs_zdczeze425vhL5 = new $hs.Thunk();
    var hs_a6725vhL7 = new $hs.Thunk();
    var hs_zdczsze425vhL9 = new $hs.Thunk();
    var hs_a6825vhLb = new $hs.Thunk();
    var hs_zdcminBound325vhLd = new $hs.Thunk();
    var hs_a6925vhLf = new $hs.Thunk();
    var hs_zdcmaxBound325vhLh = new $hs.Thunk();
    var hs_zdcshowsPrec525vhLj = new $hs.Func(2);
    var hs_sat26DGy8 = new $hs.Thunk();
    var hs_zdcshowList525vhLD = new $hs.Thunk();
    var hs_zdcshow525vhLF = new $hs.Thunk();
    var hs_sat26DGyQ = new $hs.Thunk();
    var hs_zdcreadPrec525vhLJ = new $hs.Thunk();
    var hs_zdcreadListPrec525vhNq = new $hs.Thunk();
    var hs_zdcreadList525vhNs = new $hs.Thunk();
    var hs_zdcreadsPrec525vhNu = new $hs.Thunk();
    var hs_a7025vhNw = new $hs.Thunk();
    var hs_zdccompare525vhNy = new $hs.Thunk();
    var hs_a7125vhNA = new $hs.Thunk();
    var hs_zdczl525vhNC = new $hs.Thunk();
    var hs_a7225vhNE = new $hs.Thunk();
    var hs_zdczgze525vhNG = new $hs.Thunk();
    var hs_a7325vhNI = new $hs.Thunk();
    var hs_zdczg525vhNK = new $hs.Thunk();
    var hs_a7425vhNM = new $hs.Thunk();
    var hs_zdczlze525vhNO = new $hs.Thunk();
    var hs_a7525vhNQ = new $hs.Thunk();
    var hs_zdcmax525vhNS = new $hs.Thunk();
    var hs_a7625vhNU = new $hs.Thunk();
    var hs_zdcmin525vhNW = new $hs.Thunk();
    var hs_a7725vhNY = new $hs.Thunk();
    var hs_zdczeze525vhO0 = new $hs.Thunk();
    var hs_a7825vhO2 = new $hs.Thunk();
    var hs_zdczsze525vhO4 = new $hs.Thunk();
    var hs_a7925vhO6 = new $hs.Func(1);
    var hs_zdcmaxBound425vhOa = new $hs.Func(1);
    var hs_a8025vhOc = new $hs.Func(1);
    var hs_zdcminBound425vhOg = new $hs.Func(1);
    var hs_zdcshowsPrec625vhOm = new $hs.Func(3);
    var hs_zdcshowList625vhOI = new $hs.Func(1);
    var hs_zdcshow625vhOK = new $hs.Func(1);
    var hs_zdcreadPrec625vhOZ = new $hs.Func(1);
    var hs_zdcreadListPrec625vhQI = new $hs.Func(1);
    var hs_zdcreadList625vhQK = new $hs.Func(1);
    var hs_zdcreadsPrec625vhQM = new $hs.Func(1);
    var hs_a8125vhR3 = new $hs.Func(2);
    var hs_zdcmin625vhR9 = new $hs.Func(2);
    var hs_a8225vhRb = new $hs.Func(2);
    var hs_zdcmax625vhRh = new $hs.Func(2);
    var hs_a8325vhRj = new $hs.Func(2);
    var hs_zdczlze625vhRp = new $hs.Func(2);
    var hs_a8425vhRr = new $hs.Func(2);
    var hs_zdczg625vhRx = new $hs.Func(2);
    var hs_a8525vhRz = new $hs.Func(2);
    var hs_zdczgze625vhRF = new $hs.Func(2);
    var hs_a8625vhRH = new $hs.Func(2);
    var hs_zdczl625vhRN = new $hs.Func(2);
    var hs_a8725vhRP = new $hs.Func(2);
    var hs_zdccompare625vhRV = new $hs.Func(2);
    var hs_a8825vhS8 = new $hs.Func(1);
    var hs_zdczsze625vhSc = new $hs.Func(1);
    var hs_a8925vhSe = new $hs.Func(1);
    var hs_zdczeze625vhSi = new $hs.Func(1);
    this.hs_mempty.evaluate = function (hs_tpl26DFMa) {
        var hs_tpl26DGoD = hs_tpl26DFMa;
        if (hs_tpl26DFMa.notEvaluated) {
            hs_tpl26DGoD = hs_tpl26DFMa.hscall();
        }
        var hs_tpl26DFMf = hs_tpl26DGoD.data[0];
        if (hs_tpl26DFMf.notEvaluated) {
            return hs_tpl26DFMf.hscall();
        } else {
            return hs_tpl26DFMf;
        }
    };
    this.hs_mappend.evaluate = function (hs_tpl26DFMh) {
        var hs_tpl26DGoH = hs_tpl26DFMh;
        if (hs_tpl26DFMh.notEvaluated) {
            hs_tpl26DGoH = hs_tpl26DFMh.hscall();
        }
        var hs_tpl26DFMm = hs_tpl26DGoH.data[1];
        if (hs_tpl26DFMm.notEvaluated) {
            return hs_tpl26DFMm.hscall();
        } else {
            return hs_tpl26DFMm;
        }
    };
    this.hs_mconcat.evaluate = function (hs_tpl26DFMo) {
        var hs_tpl26DGoK = hs_tpl26DFMo;
        if (hs_tpl26DFMo.notEvaluated) {
            hs_tpl26DGoK = hs_tpl26DFMo.hscall();
        }
        var hs_tpl26DFMt = hs_tpl26DGoK.data[2];
        if (hs_tpl26DFMt.notEvaluated) {
            return hs_tpl26DFMt.hscall();
        } else {
            return hs_tpl26DFMt;
        }
    };
    this.hs_zddmmconcat.evaluate = function (hs_zddMonoid26DFMv) {
        var hs_sat26DGoM = new $hs.Thunk();
        hs_sat26DGoM.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid26DFMv);
        };
        var hs_sat26DGoN = new $hs.Thunk();
        hs_sat26DGoN.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid26DFMv);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DGoN, hs_sat26DGoM);
    };
    hs_a25vhgj.evaluate = function (hs_ds26DFMB) {
        if (hs_ds26DFMB.notEvaluated) {
            return hs_ds26DFMB.hscall();
        } else {
            return hs_ds26DFMB;
        }
    };
    this.hs_getDual.evaluate = function (hs_eta1cW6l3) {
        return hs_a25vhgj.hscall(hs_eta1cW6l3);
    };
    hs_a125vhgn.evaluate = function (hs_ds26DFMF) {
        if (hs_ds26DFMF.notEvaluated) {
            return hs_ds26DFMF.hscall();
        } else {
            return hs_ds26DFMF;
        }
    };
    this.hs_appEndo.evaluate = function (hs_eta1cW6l3) {
        return hs_a125vhgn.hscall(hs_eta1cW6l3);
    };
    hs_a225vhgr.evaluate = function (hs_ds26DFMJ) {
        if (hs_ds26DFMJ.notEvaluated) {
            return hs_ds26DFMJ.hscall();
        } else {
            return hs_ds26DFMJ;
        }
    };
    this.hs_getAll.evaluate = function (hs_eta1cW6l3) {
        return hs_a225vhgr.hscall(hs_eta1cW6l3);
    };
    hs_a325vhgv.evaluate = function (hs_ds26DFMN) {
        if (hs_ds26DFMN.notEvaluated) {
            return hs_ds26DFMN.hscall();
        } else {
            return hs_ds26DFMN;
        }
    };
    this.hs_getAny.evaluate = function (hs_eta1cW6l3) {
        return hs_a325vhgv.hscall(hs_eta1cW6l3);
    };
    hs_a425vhgz.evaluate = function (hs_ds26DFMR) {
        if (hs_ds26DFMR.notEvaluated) {
            return hs_ds26DFMR.hscall();
        } else {
            return hs_ds26DFMR;
        }
    };
    this.hs_getSum.evaluate = function (hs_eta1cW6l3) {
        return hs_a425vhgz.hscall(hs_eta1cW6l3);
    };
    hs_a525vhgD.evaluate = function (hs_ds26DFMV) {
        if (hs_ds26DFMV.notEvaluated) {
            return hs_ds26DFMV.hscall();
        } else {
            return hs_ds26DFMV;
        }
    };
    this.hs_getProduct.evaluate = function (hs_eta1cW6l3) {
        return hs_a525vhgD.hscall(hs_eta1cW6l3);
    };
    hs_a625vhgH.evaluate = function (hs_ds26DFMZ) {
        if (hs_ds26DFMZ.notEvaluated) {
            return hs_ds26DFMZ.hscall();
        } else {
            return hs_ds26DFMZ;
        }
    };
    this.hs_getFirst.evaluate = function (hs_eta1cW6l3) {
        return hs_a625vhgH.hscall(hs_eta1cW6l3);
    };
    hs_a725vhgL.evaluate = function (hs_ds26DFN3) {
        if (hs_ds26DFN3.notEvaluated) {
            return hs_ds26DFN3.hscall();
        } else {
            return hs_ds26DFN3;
        }
    };
    this.hs_getLast.evaluate = function (hs_eta1cW6l3) {
        return hs_a725vhgL.hscall(hs_eta1cW6l3);
    };
    this.hs_zdfMonoidZMZN.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziBase.hs_zpzp, hs_zdcmconcat25vhgP];
    hs_zdcmconcat25vhgP.evaluateOnce = function () {
        var hs_sat26DGoO = new $hs.Thunk();
        hs_sat26DGoO.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.DataziMonoid.hs_zdfMonoidZMZN);
        };
        var hs_sat26DGoP = new $hs.Thunk();
        hs_sat26DGoP.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall($hs.modules.DataziMonoid.hs_zdfMonoidZMZN);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DGoP, hs_sat26DGoO);
    };
    hs_zdcmappend25vhgT.evaluate = function (hs_zddMonoid26DFNe, hs_f26DFNg, hs_g26DFNi, hs_x26DFNf) {
        var hs_sat26DGoQ = new $hs.Thunk();
        hs_sat26DGoQ.evaluateOnce = function () {
            return hs_g26DFNi.hscall(hs_x26DFNf);
        };
        var hs_sat26DGoR = new $hs.Thunk();
        hs_sat26DGoR.evaluateOnce = function () {
            return hs_f26DFNg.hscall(hs_x26DFNf);
        };
        return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid26DFNe, hs_sat26DGoR, hs_sat26DGoQ);
    };
    hs_zdcmempty25vhh5.evaluate = function (hs_zddMonoid26DFNo, hs_ds26DFNp) {
        return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid26DFNo);
    };
    this.hs_zdfMonoidZLzmzgZR.evaluate = function (hs_zddMonoid26DFNu) {
        var hs_sat26DGoS = new $hs.Thunk();
        hs_sat26DGoS.evaluateOnce = function () {
            return hs_zdcmconcat125vhhb.hscall(hs_zddMonoid26DFNu);
        };
        var hs_sat26DGoU = new $hs.Func(3);
        hs_sat26DGoU.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcmappend25vhgT.hscall(hs_zddMonoid26DFNu, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DGoV = new $hs.Func(1);
        hs_sat26DGoV.evaluate = function (hs_ds26DGoT) {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid26DFNu);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGoV, hs_sat26DGoU, hs_sat26DGoS];
        return $res;
    };
    hs_zdcmconcat125vhhb.evaluate = function (hs_zddMonoid26DFNA) {
        var hs_zddMonoid126DFNB = new $hs.Thunk();
        hs_zddMonoid126DFNB.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfMonoidZLzmzgZR.hscall(hs_zddMonoid26DFNA);
        };
        var hs_sat26DGoW = new $hs.Thunk();
        hs_sat26DGoW.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid126DFNB);
        };
        var hs_sat26DGoX = new $hs.Thunk();
        hs_sat26DGoX.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid126DFNB);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DGoX, hs_sat26DGoW);
    };
    hs_zdcmconcat225vhhp.evaluate = function (hs_ds26DFNH) {
        var $res = new $hs.Data(1);
        $res.data = [];
        return $res;
    };
    hs_zdcmappend125vhht.evaluate = function (hs_ds26DFNM, hs_ds126DFNN) {
        var $res = new $hs.Data(1);
        $res.data = [];
        return $res;
    };
    this.hs_zdfMonoidZLZR.data = [$hs.modules.GHCziUnit.hs_Z0T, hs_zdcmappend125vhht, hs_zdcmconcat225vhhp];
    hs_zdcmappend225vhhz.evaluate = function (hs_zddMonoid26DFO2, hs_zddMonoid126DFO6, hs_ds26DFNU, hs_ds126DFNY) {
        var hs_wild26DGoZ = hs_ds26DFNU;
        if (hs_ds26DFNU.notEvaluated) {
            hs_wild26DGoZ = hs_ds26DFNU.hscall();
        }
        var hs_a9026DFO3 = hs_wild26DGoZ.data[0];
        var hs_b126DFO7 = hs_wild26DGoZ.data[1];
        var hs_wild126DGoY = hs_ds126DFNY;
        if (hs_ds126DFNY.notEvaluated) {
            hs_wild126DGoY = hs_ds126DFNY.hscall();
        }
        var hs_a9126DFO4 = hs_wild126DGoY.data[0];
        var hs_b226DFO8 = hs_wild126DGoY.data[1];
        var hs_sat26DGp0 = new $hs.Thunk();
        hs_sat26DGp0.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid126DFO6, hs_b126DFO7, hs_b226DFO8);
        };
        var hs_sat26DGp1 = new $hs.Thunk();
        hs_sat26DGp1.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid26DFO2, hs_a9026DFO3, hs_a9126DFO4);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGp1, hs_sat26DGp0];
        return $res;
    };
    hs_zdcmempty125vhhV.evaluate = function (hs_zddMonoid26DFOe, hs_zddMonoid126DFOg) {
        var hs_sat26DGp2 = new $hs.Thunk();
        hs_sat26DGp2.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid126DFOg);
        };
        var hs_sat26DGp3 = new $hs.Thunk();
        hs_sat26DGp3.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid26DFOe);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGp3, hs_sat26DGp2];
        return $res;
    };
    this.hs_zdfMonoidZLz2cUZR.evaluate = function (hs_zddMonoid26DFOm, hs_zddMonoid126DFOn) {
        var hs_sat26DGp4 = new $hs.Thunk();
        hs_sat26DGp4.evaluateOnce = function () {
            return hs_zdcmconcat325vhi3.hscall(hs_zddMonoid26DFOm, hs_zddMonoid126DFOn);
        };
        var hs_sat26DGp5 = new $hs.Func(2);
        hs_sat26DGp5.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcmappend225vhhz.hscall(hs_zddMonoid26DFOm, hs_zddMonoid126DFOn, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DGp6 = new $hs.Thunk();
        hs_sat26DGp6.evaluateOnce = function () {
            return hs_zdcmempty125vhhV.hscall(hs_zddMonoid26DFOm, hs_zddMonoid126DFOn);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGp6, hs_sat26DGp5, hs_sat26DGp4];
        return $res;
    };
    hs_zdcmconcat325vhi3.evaluate = function (hs_zddMonoid26DFOu, hs_zddMonoid126DFOv) {
        var hs_zddMonoid226DFOw = new $hs.Thunk();
        hs_zddMonoid226DFOw.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfMonoidZLz2cUZR.hscall(hs_zddMonoid26DFOu, hs_zddMonoid126DFOv);
        };
        var hs_sat26DGp7 = new $hs.Thunk();
        hs_sat26DGp7.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid226DFOw);
        };
        var hs_sat26DGp8 = new $hs.Thunk();
        hs_sat26DGp8.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid226DFOw);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DGp8, hs_sat26DGp7);
    };
    hs_zdcmappend325vhik.evaluate = function (hs_zddMonoid26DFOQ, hs_zddMonoid126DFOU, hs_zddMonoid226DFOY, hs_ds26DFOG, hs_ds126DFOL) {
        var hs_wild26DGpa = hs_ds26DFOG;
        if (hs_ds26DFOG.notEvaluated) {
            hs_wild26DGpa = hs_ds26DFOG.hscall();
        }
        var hs_a9026DFOR = hs_wild26DGpa.data[0];
        var hs_b126DFOV = hs_wild26DGpa.data[1];
        var hs_c126DFOZ = hs_wild26DGpa.data[2];
        var hs_wild126DGp9 = hs_ds126DFOL;
        if (hs_ds126DFOL.notEvaluated) {
            hs_wild126DGp9 = hs_ds126DFOL.hscall();
        }
        var hs_a9126DFOS = hs_wild126DGp9.data[0];
        var hs_b226DFOW = hs_wild126DGp9.data[1];
        var hs_c226DFP0 = hs_wild126DGp9.data[2];
        var hs_sat26DGpb = new $hs.Thunk();
        hs_sat26DGpb.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid226DFOY, hs_c126DFOZ, hs_c226DFP0);
        };
        var hs_sat26DGpc = new $hs.Thunk();
        hs_sat26DGpc.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid126DFOU, hs_b126DFOV, hs_b226DFOW);
        };
        var hs_sat26DGpd = new $hs.Thunk();
        hs_sat26DGpd.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid26DFOQ, hs_a9026DFOR, hs_a9126DFOS);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGpd, hs_sat26DGpc, hs_sat26DGpb];
        return $res;
    };
    hs_zdcmempty225vhiN.evaluate = function (hs_zddMonoid26DFP7, hs_zddMonoid126DFP9, hs_zddMonoid226DFPb) {
        var hs_sat26DGpe = new $hs.Thunk();
        hs_sat26DGpe.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid226DFPb);
        };
        var hs_sat26DGpf = new $hs.Thunk();
        hs_sat26DGpf.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid126DFP9);
        };
        var hs_sat26DGpg = new $hs.Thunk();
        hs_sat26DGpg.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid26DFP7);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGpg, hs_sat26DGpf, hs_sat26DGpe];
        return $res;
    };
    this.hs_zdfMonoidZLz2cUz2cUZR.evaluate = function (hs_zddMonoid26DFPi, hs_zddMonoid126DFPj, hs_zddMonoid226DFPk) {
        var hs_sat26DGph = new $hs.Thunk();
        hs_sat26DGph.evaluateOnce = function () {
            return hs_zdcmconcat425vhiY.hscall(hs_zddMonoid26DFPi, hs_zddMonoid126DFPj, hs_zddMonoid226DFPk);
        };
        var hs_sat26DGpi = new $hs.Func(2);
        hs_sat26DGpi.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcmappend325vhik.hscall(hs_zddMonoid26DFPi, hs_zddMonoid126DFPj, hs_zddMonoid226DFPk, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DGpj = new $hs.Thunk();
        hs_sat26DGpj.evaluateOnce = function () {
            return hs_zdcmempty225vhiN.hscall(hs_zddMonoid26DFPi, hs_zddMonoid126DFPj, hs_zddMonoid226DFPk);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGpj, hs_sat26DGpi, hs_sat26DGph];
        return $res;
    };
    hs_zdcmconcat425vhiY.evaluate = function (hs_zddMonoid26DFPs, hs_zddMonoid126DFPt, hs_zddMonoid226DFPu) {
        var hs_zddMonoid326DFPv = new $hs.Thunk();
        hs_zddMonoid326DFPv.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfMonoidZLz2cUz2cUZR.hscall(hs_zddMonoid26DFPs, hs_zddMonoid126DFPt, hs_zddMonoid226DFPu);
        };
        var hs_sat26DGpk = new $hs.Thunk();
        hs_sat26DGpk.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid326DFPv);
        };
        var hs_sat26DGpl = new $hs.Thunk();
        hs_sat26DGpl.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid326DFPv);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DGpl, hs_sat26DGpk);
    };
    hs_zdcmappend425vhjj.evaluate = function (hs_zddMonoid26DFPS, hs_zddMonoid126DFPW, hs_zddMonoid226DFQ0, hs_zddMonoid326DFQ4, hs_ds26DFPG, hs_ds126DFPM) {
        var hs_wild26DGpn = hs_ds26DFPG;
        if (hs_ds26DFPG.notEvaluated) {
            hs_wild26DGpn = hs_ds26DFPG.hscall();
        }
        var hs_a9026DFPT = hs_wild26DGpn.data[0];
        var hs_b126DFPX = hs_wild26DGpn.data[1];
        var hs_c126DFQ1 = hs_wild26DGpn.data[2];
        var hs_d126DFQ5 = hs_wild26DGpn.data[3];
        var hs_wild126DGpm = hs_ds126DFPM;
        if (hs_ds126DFPM.notEvaluated) {
            hs_wild126DGpm = hs_ds126DFPM.hscall();
        }
        var hs_a9126DFPU = hs_wild126DGpm.data[0];
        var hs_b226DFPY = hs_wild126DGpm.data[1];
        var hs_c226DFQ2 = hs_wild126DGpm.data[2];
        var hs_d226DFQ6 = hs_wild126DGpm.data[3];
        var hs_sat26DGpo = new $hs.Thunk();
        hs_sat26DGpo.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid326DFQ4, hs_d126DFQ5, hs_d226DFQ6);
        };
        var hs_sat26DGpp = new $hs.Thunk();
        hs_sat26DGpp.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid226DFQ0, hs_c126DFQ1, hs_c226DFQ2);
        };
        var hs_sat26DGpq = new $hs.Thunk();
        hs_sat26DGpq.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid126DFPW, hs_b126DFPX, hs_b226DFPY);
        };
        var hs_sat26DGpr = new $hs.Thunk();
        hs_sat26DGpr.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid26DFPS, hs_a9026DFPT, hs_a9126DFPU);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGpr, hs_sat26DGpq, hs_sat26DGpp, hs_sat26DGpo];
        return $res;
    };
    hs_zdcmempty325vhjT.evaluate = function (hs_zddMonoid26DFQe, hs_zddMonoid126DFQg, hs_zddMonoid226DFQi, hs_zddMonoid326DFQk) {
        var hs_sat26DGps = new $hs.Thunk();
        hs_sat26DGps.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid326DFQk);
        };
        var hs_sat26DGpt = new $hs.Thunk();
        hs_sat26DGpt.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid226DFQi);
        };
        var hs_sat26DGpu = new $hs.Thunk();
        hs_sat26DGpu.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid126DFQg);
        };
        var hs_sat26DGpv = new $hs.Thunk();
        hs_sat26DGpv.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid26DFQe);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGpv, hs_sat26DGpu, hs_sat26DGpt, hs_sat26DGps];
        return $res;
    };
    this.hs_zdfMonoidZLz2cUz2cUz2cUZR.evaluate = function (hs_zddMonoid26DFQs, hs_zddMonoid126DFQt, hs_zddMonoid226DFQu, hs_zddMonoid326DFQv) {
        var hs_sat26DGpw = new $hs.Thunk();
        hs_sat26DGpw.evaluateOnce = function () {
            return hs_zdcmconcat525vhk7.hscall(hs_zddMonoid26DFQs, hs_zddMonoid126DFQt, hs_zddMonoid226DFQu, hs_zddMonoid326DFQv);
        };
        var hs_sat26DGpx = new $hs.Func(2);
        hs_sat26DGpx.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcmappend425vhjj.hscall(hs_zddMonoid26DFQs, hs_zddMonoid126DFQt, hs_zddMonoid226DFQu, hs_zddMonoid326DFQv, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DGpy = new $hs.Thunk();
        hs_sat26DGpy.evaluateOnce = function () {
            return hs_zdcmempty325vhjT.hscall(hs_zddMonoid26DFQs, hs_zddMonoid126DFQt, hs_zddMonoid226DFQu, hs_zddMonoid326DFQv);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGpy, hs_sat26DGpx, hs_sat26DGpw];
        return $res;
    };
    hs_zdcmconcat525vhk7.evaluate = function (hs_zddMonoid26DFQE, hs_zddMonoid126DFQF, hs_zddMonoid226DFQG, hs_zddMonoid326DFQH) {
        var hs_zddMonoid426DFQI = new $hs.Thunk();
        hs_zddMonoid426DFQI.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfMonoidZLz2cUz2cUz2cUZR.hscall(hs_zddMonoid26DFQE, hs_zddMonoid126DFQF, hs_zddMonoid226DFQG, hs_zddMonoid326DFQH);
        };
        var hs_sat26DGpz = new $hs.Thunk();
        hs_sat26DGpz.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid426DFQI);
        };
        var hs_sat26DGpA = new $hs.Thunk();
        hs_sat26DGpA.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid426DFQI);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DGpA, hs_sat26DGpz);
    };
    hs_zdcmappend525vhkw.evaluate = function (hs_zddMonoid26DFR8, hs_zddMonoid126DFRc, hs_zddMonoid226DFRg, hs_zddMonoid326DFRk, hs_zddMonoid426DFRo, hs_ds26DFQU, hs_ds126DFR1) {
        var hs_wild26DGpC = hs_ds26DFQU;
        if (hs_ds26DFQU.notEvaluated) {
            hs_wild26DGpC = hs_ds26DFQU.hscall();
        }
        var hs_a9026DFR9 = hs_wild26DGpC.data[0];
        var hs_b126DFRd = hs_wild26DGpC.data[1];
        var hs_c126DFRh = hs_wild26DGpC.data[2];
        var hs_d126DFRl = hs_wild26DGpC.data[3];
        var hs_e126DFRp = hs_wild26DGpC.data[4];
        var hs_wild126DGpB = hs_ds126DFR1;
        if (hs_ds126DFR1.notEvaluated) {
            hs_wild126DGpB = hs_ds126DFR1.hscall();
        }
        var hs_a9126DFRa = hs_wild126DGpB.data[0];
        var hs_b226DFRe = hs_wild126DGpB.data[1];
        var hs_c226DFRi = hs_wild126DGpB.data[2];
        var hs_d226DFRm = hs_wild126DGpB.data[3];
        var hs_e226DFRq = hs_wild126DGpB.data[4];
        var hs_sat26DGpD = new $hs.Thunk();
        hs_sat26DGpD.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid426DFRo, hs_e126DFRp, hs_e226DFRq);
        };
        var hs_sat26DGpE = new $hs.Thunk();
        hs_sat26DGpE.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid326DFRk, hs_d126DFRl, hs_d226DFRm);
        };
        var hs_sat26DGpF = new $hs.Thunk();
        hs_sat26DGpF.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid226DFRg, hs_c126DFRh, hs_c226DFRi);
        };
        var hs_sat26DGpG = new $hs.Thunk();
        hs_sat26DGpG.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid126DFRc, hs_b126DFRd, hs_b226DFRe);
        };
        var hs_sat26DGpH = new $hs.Thunk();
        hs_sat26DGpH.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid26DFR8, hs_a9026DFR9, hs_a9126DFRa);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGpH, hs_sat26DGpG, hs_sat26DGpF, hs_sat26DGpE, hs_sat26DGpD];
        return $res;
    };
    hs_zdcmempty425vhld.evaluate = function (hs_zddMonoid26DFRz, hs_zddMonoid126DFRB, hs_zddMonoid226DFRD, hs_zddMonoid326DFRF, hs_zddMonoid426DFRH) {
        var hs_sat26DGpI = new $hs.Thunk();
        hs_sat26DGpI.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid426DFRH);
        };
        var hs_sat26DGpJ = new $hs.Thunk();
        hs_sat26DGpJ.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid326DFRF);
        };
        var hs_sat26DGpK = new $hs.Thunk();
        hs_sat26DGpK.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid226DFRD);
        };
        var hs_sat26DGpL = new $hs.Thunk();
        hs_sat26DGpL.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid126DFRB);
        };
        var hs_sat26DGpM = new $hs.Thunk();
        hs_sat26DGpM.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid26DFRz);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGpM, hs_sat26DGpL, hs_sat26DGpK, hs_sat26DGpJ, hs_sat26DGpI];
        return $res;
    };
    this.hs_zdfMonoidZLz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddMonoid26DFRQ, hs_zddMonoid126DFRR, hs_zddMonoid226DFRS, hs_zddMonoid326DFRT, hs_zddMonoid426DFRU) {
        var hs_sat26DGpN = new $hs.Thunk();
        hs_sat26DGpN.evaluateOnce = function () {
            return hs_zdcmconcat625vhlu.hscall(hs_zddMonoid26DFRQ, hs_zddMonoid126DFRR, hs_zddMonoid226DFRS, hs_zddMonoid326DFRT, hs_zddMonoid426DFRU);
        };
        var hs_sat26DGpO = new $hs.Func(2);
        hs_sat26DGpO.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcmappend525vhkw.hscall(hs_zddMonoid26DFRQ, hs_zddMonoid126DFRR, hs_zddMonoid226DFRS, hs_zddMonoid326DFRT, hs_zddMonoid426DFRU, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DGpP = new $hs.Thunk();
        hs_sat26DGpP.evaluateOnce = function () {
            return hs_zdcmempty425vhld.hscall(hs_zddMonoid26DFRQ, hs_zddMonoid126DFRR, hs_zddMonoid226DFRS, hs_zddMonoid326DFRT, hs_zddMonoid426DFRU);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGpP, hs_sat26DGpO, hs_sat26DGpN];
        return $res;
    };
    hs_zdcmconcat625vhlu.evaluate = function (hs_zddMonoid26DFS4, hs_zddMonoid126DFS5, hs_zddMonoid226DFS6, hs_zddMonoid326DFS7, hs_zddMonoid426DFS8) {
        var hs_zddMonoid526DFS9 = new $hs.Thunk();
        hs_zddMonoid526DFS9.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfMonoidZLz2cUz2cUz2cUz2cUZR.hscall(hs_zddMonoid26DFS4, hs_zddMonoid126DFS5, hs_zddMonoid226DFS6, hs_zddMonoid326DFS7, hs_zddMonoid426DFS8);
        };
        var hs_sat26DGpQ = new $hs.Thunk();
        hs_sat26DGpQ.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid526DFS9);
        };
        var hs_sat26DGpR = new $hs.Thunk();
        hs_sat26DGpR.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid526DFS9);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DGpR, hs_sat26DGpQ);
    };
    hs_zdcmappend625vhlX.evaluate = function (hs_ds26DFSg, hs_ds126DFSi) {
        var hs_wild26DGpS = hs_ds26DFSg;
        if (hs_ds26DFSg.notEvaluated) {
            hs_wild26DGpS = hs_ds26DFSg.hscall();
        }
        switch (hs_wild26DGpS.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            if (hs_ds126DFSi.notEvaluated) {
                return hs_ds126DFSi.hscall();
            } else {
                return hs_ds126DFSi;
            }
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_sat26DGpT.evaluateOnce = function () {
        return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.DataziMonoid.hs_zdfMonoidOrdering);
    };
    hs_sat26DGpU.evaluateOnce = function () {
        return $hs.modules.DataziMonoid.hs_mappend.hscall($hs.modules.DataziMonoid.hs_zdfMonoidOrdering);
    };
    this.hs_zdfMonoidOrdering.data = [$hs.modules.GHCziOrdering.hs_EQ, hs_zdcmappend625vhlX, hs_zdcmconcat725vhm4];
    hs_zdcmconcat725vhm4.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DGpU, hs_sat26DGpT);
    };
    hs_a825vhm8.evaluate = function (hs_zddMonoid26DFSs, hs_ds26DFSu, hs_ds126DFSt) {
        return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid26DFSs, hs_ds126DFSt, hs_ds26DFSu);
    };
    hs_zdcmappend725vhmg.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a825vhm8.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a925vhmi.evaluate = function (hs_zddMonoid26DFSA) {
        return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid26DFSA);
    };
    hs_zdcmempty525vhmm.evaluate = function (hs_eta1cW6l3) {
        return hs_a925vhmi.hscall(hs_eta1cW6l3);
    };
    this.hs_zdfMonoidDual.evaluate = function (hs_zddMonoid26DFSG) {
        var hs_sat26DGpV = new $hs.Thunk();
        hs_sat26DGpV.evaluateOnce = function () {
            return hs_zdcmconcat825vhmo.hscall(hs_zddMonoid26DFSG);
        };
        var hs_sat26DGpW = new $hs.Func(2);
        hs_sat26DGpW.evaluate = function (hs_ds26DFSL, hs_ds126DFSK) {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid26DFSG, hs_ds126DFSK, hs_ds26DFSL);
        };
        var hs_sat26DGpX = new $hs.Thunk();
        hs_sat26DGpX.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid26DFSG);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGpX, hs_sat26DGpW, hs_sat26DGpV];
        return $res;
    };
    hs_zdcmconcat825vhmo.evaluate = function (hs_zddMonoid26DFSQ) {
        var hs_zddMonoid126DFSR = new $hs.Thunk();
        hs_zddMonoid126DFSR.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfMonoidDual.hscall(hs_zddMonoid26DFSQ);
        };
        var hs_sat26DGpY = new $hs.Thunk();
        hs_sat26DGpY.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid126DFSR);
        };
        var hs_sat26DGpZ = new $hs.Thunk();
        hs_sat26DGpZ.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid126DFSR);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DGpZ, hs_sat26DGpY);
    };
    hs_a1025vhmF.evaluate = function (hs_ds26DFSY, hs_ds126DFSZ) {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_ds26DFSY, hs_ds126DFSZ);
    };
    hs_zdcmappend825vhmL.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1025vhmF.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcmempty625vhmN.evaluateOnce = function () {
        if ($hs.modules.GHCziBase.hs_id.notEvaluated) {
            return $hs.modules.GHCziBase.hs_id.hscall();
        } else {
            return $hs.modules.GHCziBase.hs_id;
        }
    };
    this.hs_zdfMonoidEndo.data = [$hs.modules.GHCziBase.hs_id, hs_a1025vhmF, hs_zdcmconcat925vhmP];
    hs_zdcmconcat925vhmP.evaluateOnce = function () {
        var hs_sat26DGq0 = new $hs.Thunk();
        hs_sat26DGq0.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.DataziMonoid.hs_zdfMonoidEndo);
        };
        var hs_sat26DGq1 = new $hs.Thunk();
        hs_sat26DGq1.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall($hs.modules.DataziMonoid.hs_zdfMonoidEndo);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DGq1, hs_sat26DGq0);
    };
    hs_a1125vhmT.evaluate = function (hs_ds26DFTc, hs_ds126DFTd) {
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_ds26DFTc, hs_ds126DFTd);
    };
    hs_zdcmappend925vhmZ.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1125vhmT.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcmempty725vhn1.data = [];
    hs_sat26DGq2.evaluateOnce = function () {
        return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.DataziMonoid.hs_zdfMonoidAll);
    };
    hs_sat26DGq3.evaluateOnce = function () {
        return $hs.modules.DataziMonoid.hs_mappend.hscall($hs.modules.DataziMonoid.hs_zdfMonoidAll);
    };
    this.hs_zdfMonoidAll.data = [$hs.modules.GHCziBool.hs_True, hs_a1125vhmT, hs_zdcmconcat1025vhn3];
    hs_zdcmconcat1025vhn3.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DGq3, hs_sat26DGq2);
    };
    hs_a1225vhn7.evaluate = function (hs_ds26DFTq, hs_ds126DFTr) {
        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_ds26DFTq, hs_ds126DFTr);
    };
    hs_zdcmappend1025vhnd.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1225vhn7.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcmempty825vhnf.data = [];
    hs_sat26DGq4.evaluateOnce = function () {
        return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.DataziMonoid.hs_zdfMonoidAny);
    };
    hs_sat26DGq5.evaluateOnce = function () {
        return $hs.modules.DataziMonoid.hs_mappend.hscall($hs.modules.DataziMonoid.hs_zdfMonoidAny);
    };
    this.hs_zdfMonoidAny.data = [$hs.modules.GHCziBool.hs_False, hs_a1225vhn7, hs_zdcmconcat1125vhnh];
    hs_zdcmconcat1125vhnh.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DGq5, hs_sat26DGq4);
    };
    hs_a1325vhnl.evaluate = function (hs_zddNum26DFTF, hs_ds26DFTG, hs_ds126DFTH) {
        return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum26DFTF, hs_ds26DFTG, hs_ds126DFTH);
    };
    hs_zdcmappend1125vhnt.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1325vhnl.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1425vhnv.evaluate = function (hs_zddNum26DFTN) {
        var hs_sat26DGq6 = new $hs.Thunk();
        hs_sat26DGq6.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DFTN, hs_sat26DGq6);
    };
    hs_zdcmempty925vhnA.evaluate = function (hs_eta1cW6l3) {
        return hs_a1425vhnv.hscall(hs_eta1cW6l3);
    };
    this.hs_zdfMonoidSum.evaluate = function (hs_zddNum26DFTU) {
        var hs_sat26DGq7 = new $hs.Thunk();
        hs_sat26DGq7.evaluateOnce = function () {
            return hs_zdcmconcat1225vhnC.hscall(hs_zddNum26DFTU);
        };
        var hs_sat26DGq8 = new $hs.Func(2);
        hs_sat26DGq8.evaluate = function (hs_ds26DFTZ, hs_ds126DFU0) {
            return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum26DFTU, hs_ds26DFTZ, hs_ds126DFU0);
        };
        var hs_sat26DGqa = new $hs.Thunk();
        hs_sat26DGqa.evaluateOnce = function () {
            var hs_sat26DGq9 = new $hs.Thunk();
            hs_sat26DGq9.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DFTU, hs_sat26DGq9);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGqa, hs_sat26DGq8, hs_sat26DGq7];
        return $res;
    };
    hs_zdcmconcat1225vhnC.evaluate = function (hs_zddNum26DFU5) {
        var hs_zddMonoid26DFU6 = new $hs.Thunk();
        hs_zddMonoid26DFU6.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfMonoidSum.hscall(hs_zddNum26DFU5);
        };
        var hs_sat26DGqb = new $hs.Thunk();
        hs_sat26DGqb.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid26DFU6);
        };
        var hs_sat26DGqc = new $hs.Thunk();
        hs_sat26DGqc.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid26DFU6);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DGqc, hs_sat26DGqb);
    };
    hs_a1525vhnU.evaluate = function (hs_zddNum26DFUe, hs_ds26DFUf, hs_ds126DFUg) {
        return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum26DFUe, hs_ds26DFUf, hs_ds126DFUg);
    };
    hs_zdcmappend1225vho2.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1525vhnU.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1625vho4.evaluate = function (hs_zddNum26DFUm) {
        var hs_sat26DGqd = new $hs.Thunk();
        hs_sat26DGqd.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DFUm, hs_sat26DGqd);
    };
    hs_zdcmempty1025vho9.evaluate = function (hs_eta1cW6l3) {
        return hs_a1625vho4.hscall(hs_eta1cW6l3);
    };
    this.hs_zdfMonoidProduct.evaluate = function (hs_zddNum26DFUt) {
        var hs_sat26DGqe = new $hs.Thunk();
        hs_sat26DGqe.evaluateOnce = function () {
            return hs_zdcmconcat1325vhob.hscall(hs_zddNum26DFUt);
        };
        var hs_sat26DGqf = new $hs.Func(2);
        hs_sat26DGqf.evaluate = function (hs_ds26DFUy, hs_ds126DFUz) {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum26DFUt, hs_ds26DFUy, hs_ds126DFUz);
        };
        var hs_sat26DGqh = new $hs.Thunk();
        hs_sat26DGqh.evaluateOnce = function () {
            var hs_sat26DGqg = new $hs.Thunk();
            hs_sat26DGqg.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DFUt, hs_sat26DGqg);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGqh, hs_sat26DGqf, hs_sat26DGqe];
        return $res;
    };
    hs_zdcmconcat1325vhob.evaluate = function (hs_zddNum26DFUE) {
        var hs_zddMonoid26DFUF = new $hs.Thunk();
        hs_zddMonoid26DFUF.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfMonoidProduct.hscall(hs_zddNum26DFUE);
        };
        var hs_sat26DGqi = new $hs.Thunk();
        hs_sat26DGqi.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid26DFUF);
        };
        var hs_sat26DGqj = new $hs.Thunk();
        hs_sat26DGqj.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid26DFUF);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DGqj, hs_sat26DGqi);
    };
    hs_zdcmappend1325vhot.evaluate = function (hs_zddMonoid26DFV3, hs_ds26DFUR, hs_m26DFUT) {
        var hs_fail26DFUQ = new $hs.Func(1);
        hs_fail26DFUQ.evaluate = function (hs_ds126DFUP) {
            return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("../../ghc-7.0.2/libraries/base/Data/Monoid.hs:(220,3)-(222,52)|function mappend\x00");
        };
        var hs_wild26DFUW = hs_ds26DFUR;
        if (hs_ds26DFUR.notEvaluated) {
            hs_wild26DFUW = hs_ds26DFUR.hscall();
        }
        switch (hs_wild26DFUW.tag) {
        case 1:
            if (hs_m26DFUT.notEvaluated) {
                return hs_m26DFUT.hscall();
            } else {
                return hs_m26DFUT;
            }
        case 2:
            var hs_wild126DFV0 = hs_m26DFUT;
            if (hs_m26DFUT.notEvaluated) {
                hs_wild126DFV0 = hs_m26DFUT.hscall();
            }
            switch (hs_wild126DFV0.tag) {
            case 1:
                if (hs_wild26DFUW.notEvaluated) {
                    return hs_wild26DFUW.hscall();
                } else {
                    return hs_wild26DFUW;
                }
            case 2:
                var hs_wild226DGql = hs_wild26DFUW;
                if (hs_wild26DFUW.notEvaluated) {
                    hs_wild226DGql = hs_wild26DFUW.hscall();
                }
                switch (hs_wild226DGql.tag) {
                case 1:
                    return hs_fail26DFUQ.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                case 2:
                    var hs_m126DFV4 = hs_wild226DGql.data[0];
                    var hs_wild326DGqn = hs_wild126DFV0;
                    if (hs_wild126DFV0.notEvaluated) {
                        hs_wild326DGqn = hs_wild126DFV0.hscall();
                    }
                    switch (hs_wild326DGqn.tag) {
                    case 1:
                        return hs_fail26DFUQ.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    case 2:
                        var hs_m226DFV5 = hs_wild326DGqn.data[0];
                        var hs_sat26DGqo = new $hs.Thunk();
                        hs_sat26DGqo.evaluateOnce = function () {
                            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid26DFV3, hs_m126DFV4, hs_m226DFV5);
                        };
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26DGqo];
                        return $res;
                    }
                }
            }
        }
    };
    hs_zdcmempty1125vhoS.evaluate = function (hs_zddMonoid26DFVa) {
        var $res = new $hs.Data(1);
        $res.data = [];
        return $res;
    };
    this.hs_zdfMonoidMaybe.evaluate = function (hs_zddMonoid26DFVe) {
        var hs_sat26DGqp = new $hs.Thunk();
        hs_sat26DGqp.evaluateOnce = function () {
            return hs_zdcmconcat1425vhoW.hscall(hs_zddMonoid26DFVe);
        };
        var hs_sat26DGqq = new $hs.Func(2);
        hs_sat26DGqq.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcmappend1325vhot.hscall(hs_zddMonoid26DFVe, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [$hs.modules.DataziMaybe.hs_Nothing, hs_sat26DGqq, hs_sat26DGqp];
        return $res;
    };
    hs_zdcmconcat1425vhoW.evaluate = function (hs_zddMonoid26DFVj) {
        var hs_zddMonoid126DFVk = new $hs.Thunk();
        hs_zddMonoid126DFVk.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfMonoidMaybe.hscall(hs_zddMonoid26DFVj);
        };
        var hs_sat26DGqr = new $hs.Thunk();
        hs_sat26DGqr.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid126DFVk);
        };
        var hs_sat26DGqs = new $hs.Thunk();
        hs_sat26DGqs.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall(hs_zddMonoid126DFVk);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DGqs, hs_sat26DGqr);
    };
    hs_zdcmappend1425vhp8.evaluate = function (hs_r26DFVr, hs_ds26DFVt) {
        var hs_wild26DFVv = hs_r26DFVr;
        if (hs_r26DFVr.notEvaluated) {
            hs_wild26DFVv = hs_r26DFVr.hscall();
        }
        switch (hs_wild26DFVv.tag) {
        case 1:
            if (hs_ds26DFVt.notEvaluated) {
                return hs_ds26DFVt.hscall();
            } else {
                return hs_ds26DFVt;
            }
        case 2:
            if (hs_wild26DFVv.notEvaluated) {
                return hs_wild26DFVv.hscall();
            } else {
                return hs_wild26DFVv;
            }
        }
    };
    hs_zdcmempty1225vhph.data = [];
    this.hs_zdfMonoidFirst.data = [$hs.modules.DataziMaybe.hs_Nothing, hs_zdcmappend1425vhp8, hs_zdcmconcat1525vhpj];
    hs_zdcmconcat1525vhpj.evaluateOnce = function () {
        var hs_sat26DGqu = new $hs.Thunk();
        hs_sat26DGqu.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.DataziMonoid.hs_zdfMonoidFirst);
        };
        var hs_sat26DGqv = new $hs.Thunk();
        hs_sat26DGqv.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall($hs.modules.DataziMonoid.hs_zdfMonoidFirst);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DGqv, hs_sat26DGqu);
    };
    hs_zdcmappend1525vhpn.evaluate = function (hs_ds26DFVI, hs_r26DFVG) {
        var hs_wild26DFVK = hs_r26DFVG;
        if (hs_r26DFVG.notEvaluated) {
            hs_wild26DFVK = hs_r26DFVG.hscall();
        }
        switch (hs_wild26DFVK.tag) {
        case 1:
            if (hs_ds26DFVI.notEvaluated) {
                return hs_ds26DFVI.hscall();
            } else {
                return hs_ds26DFVI;
            }
        case 2:
            if (hs_wild26DFVK.notEvaluated) {
                return hs_wild26DFVK.hscall();
            } else {
                return hs_wild26DFVK;
            }
        }
    };
    hs_zdcmempty1325vhpw.data = [];
    this.hs_zdfMonoidLast.data = [$hs.modules.DataziMaybe.hs_Nothing, hs_zdcmappend1525vhpn, hs_zdcmconcat1625vhpy];
    hs_zdcmconcat1625vhpy.evaluateOnce = function () {
        var hs_sat26DGqx = new $hs.Thunk();
        hs_sat26DGqx.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.DataziMonoid.hs_zdfMonoidLast);
        };
        var hs_sat26DGqy = new $hs.Thunk();
        hs_sat26DGqy.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_mappend.hscall($hs.modules.DataziMonoid.hs_zdfMonoidLast);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DGqy, hs_sat26DGqx);
    };
    hs_zdcshowsPrec25vhpC.evaluate = function (hs_zddShow26DFVV) {
        var hs_zddShow126DFVW = new $hs.Thunk();
        hs_zddShow126DFVW.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowMaybe.hscall(hs_zddShow26DFVV);
        };
        var hs_sat26DGqC = new $hs.Func(2);
        hs_sat26DGqC.evaluate = function (hs_a9026DFVZ, hs_ds26DFW7) {
            var hs_sat26DGqz = new $hs.Thunk();
            hs_sat26DGqz.evaluateOnce = function () {
                var hs_sat26DFWn = new $hs.Thunk();
                hs_sat26DFWn.evaluateOnce = function () {
                    var hs_sat26DFWk = new $hs.Thunk();
                    hs_sat26DFWk.evaluateOnce = function () {
                        var hs_sat26DFWh = new $hs.Thunk();
                        hs_sat26DFWh.evaluateOnce = function () {
                            var hs_sat26DFWf = new $hs.Data(1);
                            hs_sat26DFWf.data = ["}"];
                            var hs_sat26DFWg = new $hs.Data(2);
                            hs_sat26DFWg.data = [hs_sat26DFWf, $hs.modules.GHCziTypes.hs_ZMZN];
                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DFWg);
                        };
                        var hs_sat26DFWj = new $hs.Thunk();
                        hs_sat26DFWj.evaluateOnce = function () {
                            var hs_sat26DFWi = new $hs.Data(1);
                            hs_sat26DFWi.data = [0];
                            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126DFVW, hs_sat26DFWi, hs_ds26DFW7);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DFWj, hs_sat26DFWh);
                    };
                    var hs_sat26DFWm = new $hs.Thunk();
                    hs_sat26DFWm.evaluateOnce = function () {
                        var hs_sat26DFWl = new $hs.Thunk();
                        hs_sat26DFWl.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("getLast = \x00");
                        };
                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DFWl);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DFWm, hs_sat26DFWk);
                };
                var hs_sat26DFWp = new $hs.Thunk();
                hs_sat26DFWp.evaluateOnce = function () {
                    var hs_sat26DFWo = new $hs.Thunk();
                    hs_sat26DFWo.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Last {\x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DFWo);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DFWp, hs_sat26DFWn);
            };
            var hs_sat26DGqB = new $hs.Thunk();
            hs_sat26DGqB.evaluateOnce = function () {
                var hs_sat26DGqA = new $hs.Data(1);
                hs_sat26DGqA.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a9026DFVZ, hs_sat26DGqA);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DGqB, hs_sat26DGqz);
        };
        if (hs_sat26DGqC.notEvaluated) {
            return hs_sat26DGqC.hscall();
        } else {
            return hs_sat26DGqC;
        }
    };
    this.hs_zdfShowLast.evaluate = function (hs_zddShow26DFWw) {
        var hs_sat26DGqD = new $hs.Thunk();
        hs_sat26DGqD.evaluateOnce = function () {
            return hs_zdcshowList25vhqc.hscall(hs_zddShow26DFWw);
        };
        var hs_sat26DGqE = new $hs.Thunk();
        hs_sat26DGqE.evaluateOnce = function () {
            return hs_zdcshow25vhqe.hscall(hs_zddShow26DFWw);
        };
        var hs_sat26DGqF = new $hs.Thunk();
        hs_sat26DGqF.evaluateOnce = function () {
            return hs_zdcshowsPrec25vhpC.hscall(hs_zddShow26DFWw);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGqF, hs_sat26DGqE, hs_sat26DGqD];
        return $res;
    };
    hs_zdcshowList25vhqc.evaluate = function (hs_zddShow26DFWB) {
        var hs_sat26DGqI = new $hs.Thunk();
        hs_sat26DGqI.evaluateOnce = function () {
            var hs_sat26DGqG = new $hs.Data(1);
            hs_sat26DGqG.data = [0];
            var hs_sat26DGqH = $hs.modules.DataziMonoid.hs_zdfShowLast.hscall(hs_zddShow26DFWB);
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_sat26DGqH, hs_sat26DGqG);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DGqI);
    };
    hs_zdcshow25vhqe.evaluate = function (hs_zddShow26DFWG) {
        var hs_sat26DGqJ = new $hs.Thunk();
        hs_sat26DGqJ.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfShowLast.hscall(hs_zddShow26DFWG);
        };
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_sat26DGqJ);
    };
    hs_zdcreadPrec25vhqt.evaluate = function (hs_zddRead26DFWM) {
        var hs_zddRead126DFWN = new $hs.Thunk();
        hs_zddRead126DFWN.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_zdfReadMaybe.hscall(hs_zddRead26DFWM);
        };
        var hs_sat26DGrq = new $hs.Thunk();
        hs_sat26DGrq.evaluateOnce = function () {
            var hs_sat26DGro = new $hs.Thunk();
            hs_sat26DGro.evaluateOnce = function () {
                var hs_sat26DGrn = new $hs.Func(1);
                hs_sat26DGrn.evaluate = function (hs_ds26DFWV) {
                    var hs_fail26DFWU = new $hs.Func(1);
                    hs_fail26DFWU.evaluate = function (hs_ds126DFWT) {
                        var hs_sat26DGqK = new $hs.Thunk();
                        hs_sat26DGqK.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGqK);
                    };
                    var hs_wild26DGqL = hs_ds26DFWV;
                    if (hs_ds26DFWV.notEvaluated) {
                        hs_wild26DGqL = hs_ds26DFWV.hscall();
                    }
                    switch (hs_wild26DGqL.tag) {
                    case 4:
                        var hs_ds126DFWY = hs_wild26DGqL.data[0];
                        var hs_sat26DGqN = new $hs.Thunk();
                        hs_sat26DGqN.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Last\x00");
                        };
                        var hs_wild126DGqM = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126DFWY, hs_sat26DGqN);
                        switch (hs_wild126DGqM.tag) {
                        case 1:
                            return hs_fail26DFWU.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        case 2:
                            var hs_sat26DGrm = new $hs.Func(1);
                            hs_sat26DGrm.evaluate = function (hs_ds226DFX7) {
                                var hs_fail126DFX6 = new $hs.Func(1);
                                hs_fail126DFX6.evaluate = function (hs_ds326DFX5) {
                                    var hs_sat26DGqO = new $hs.Thunk();
                                    hs_sat26DGqO.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                    };
                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGqO);
                                };
                                var hs_wild226DGqP = hs_ds226DFX7;
                                if (hs_ds226DFX7.notEvaluated) {
                                    hs_wild226DGqP = hs_ds226DFX7.hscall();
                                }
                                switch (hs_wild226DGqP.tag) {
                                case 3:
                                    var hs_ds326DFXa = hs_wild226DGqP.data[0];
                                    var hs_wild326DGqQ = hs_ds326DFXa;
                                    if (hs_ds326DFXa.notEvaluated) {
                                        hs_wild326DGqQ = hs_ds326DFXa.hscall();
                                    }
                                    switch (hs_wild326DGqQ.tag) {
                                    case 1:
                                        return hs_fail126DFX6.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                    case 2:
                                        var hs_ds426DFXe = hs_wild326DGqQ.data[0];
                                        var hs_ds526DFXj = hs_wild326DGqQ.data[1];
                                        var hs_wild426DGqS = hs_ds426DFXe;
                                        if (hs_ds426DFXe.notEvaluated) {
                                            hs_wild426DGqS = hs_ds426DFXe.hscall();
                                        }
                                        var hs_ds626DFXh = hs_wild426DGqS.data[0];
                                        var hs_ds726DGqR = hs_ds626DFXh;
                                        if (hs_ds626DFXh.notEvaluated) {
                                            hs_ds726DGqR = hs_ds626DFXh.hscall();
                                        }
                                        switch (hs_ds726DGqR) {
                                        case "{":
                                            var hs_wild526DGqT = hs_ds526DFXj;
                                            if (hs_ds526DFXj.notEvaluated) {
                                                hs_wild526DGqT = hs_ds526DFXj.hscall();
                                            }
                                            switch (hs_wild526DGqT.tag) {
                                            case 1:
                                                var hs_sat26DGrj = new $hs.Func(1);
                                                hs_sat26DGrj.evaluate = function (hs_ds826DFXr) {
                                                    var hs_fail226DFXq = new $hs.Func(1);
                                                    hs_fail226DFXq.evaluate = function (hs_ds926DFXp) {
                                                        var hs_sat26DGqU = new $hs.Thunk();
                                                        hs_sat26DGqU.evaluateOnce = function () {
                                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                        };
                                                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGqU);
                                                    };
                                                    var hs_wild626DGqV = hs_ds826DFXr;
                                                    if (hs_ds826DFXr.notEvaluated) {
                                                        hs_wild626DGqV = hs_ds826DFXr.hscall();
                                                    }
                                                    switch (hs_wild626DGqV.tag) {
                                                    case 4:
                                                        var hs_ds926DFXu = hs_wild626DGqV.data[0];
                                                        var hs_sat26DGqX = new $hs.Thunk();
                                                        hs_sat26DGqX.evaluateOnce = function () {
                                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("getLast\x00");
                                                        };
                                                        var hs_wild726DGqW = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds926DFXu, hs_sat26DGqX);
                                                        switch (hs_wild726DGqW.tag) {
                                                        case 1:
                                                            return hs_fail226DFXq.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                        case 2:
                                                            var hs_sat26DGri = new $hs.Func(1);
                                                            hs_sat26DGri.evaluate = function (hs_ds1026DFXD) {
                                                                var hs_fail326DFXC = new $hs.Func(1);
                                                                hs_fail326DFXC.evaluate = function (hs_ds1126DFXB) {
                                                                    var hs_sat26DGqY = new $hs.Thunk();
                                                                    hs_sat26DGqY.evaluateOnce = function () {
                                                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                    };
                                                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGqY);
                                                                };
                                                                var hs_wild826DGqZ = hs_ds1026DFXD;
                                                                if (hs_ds1026DFXD.notEvaluated) {
                                                                    hs_wild826DGqZ = hs_ds1026DFXD.hscall();
                                                                }
                                                                switch (hs_wild826DGqZ.tag) {
                                                                case 3:
                                                                    var hs_ds1126DFXG = hs_wild826DGqZ.data[0];
                                                                    var hs_wild926DGr0 = hs_ds1126DFXG;
                                                                    if (hs_ds1126DFXG.notEvaluated) {
                                                                        hs_wild926DGr0 = hs_ds1126DFXG.hscall();
                                                                    }
                                                                    switch (hs_wild926DGr0.tag) {
                                                                    case 1:
                                                                        return hs_fail326DFXC.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                    case 2:
                                                                        var hs_ds1226DFXK = hs_wild926DGr0.data[0];
                                                                        var hs_ds1326DFXP = hs_wild926DGr0.data[1];
                                                                        var hs_wild1026DGr2 = hs_ds1226DFXK;
                                                                        if (hs_ds1226DFXK.notEvaluated) {
                                                                            hs_wild1026DGr2 = hs_ds1226DFXK.hscall();
                                                                        }
                                                                        var hs_ds1426DFXN = hs_wild1026DGr2.data[0];
                                                                        var hs_ds1526DGr1 = hs_ds1426DFXN;
                                                                        if (hs_ds1426DFXN.notEvaluated) {
                                                                            hs_ds1526DGr1 = hs_ds1426DFXN.hscall();
                                                                        }
                                                                        switch (hs_ds1526DGr1) {
                                                                        case "=":
                                                                            var hs_wild1126DGr3 = hs_ds1326DFXP;
                                                                            if (hs_ds1326DFXP.notEvaluated) {
                                                                                hs_wild1126DGr3 = hs_ds1326DFXP.hscall();
                                                                            }
                                                                            switch (hs_wild1126DGr3.tag) {
                                                                            case 1:
                                                                                var hs_sat26DGrd = new $hs.Func(1);
                                                                                hs_sat26DGrd.evaluate = function (hs_a9026DFYe) {
                                                                                    var hs_sat26DGrc = new $hs.Func(1);
                                                                                    hs_sat26DGrc.evaluate = function (hs_ds1626DFY0) {
                                                                                        var hs_fail426DFXZ = new $hs.Func(1);
                                                                                        hs_fail426DFXZ.evaluate = function (hs_ds1726DFXY) {
                                                                                            var hs_sat26DGr4 = new $hs.Thunk();
                                                                                            hs_sat26DGr4.evaluateOnce = function () {
                                                                                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                                            };
                                                                                            return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGr4);
                                                                                        };
                                                                                        var hs_wild1226DGr5 = hs_ds1626DFY0;
                                                                                        if (hs_ds1626DFY0.notEvaluated) {
                                                                                            hs_wild1226DGr5 = hs_ds1626DFY0.hscall();
                                                                                        }
                                                                                        switch (hs_wild1226DGr5.tag) {
                                                                                        case 3:
                                                                                            var hs_ds1726DFY3 = hs_wild1226DGr5.data[0];
                                                                                            var hs_wild1326DGr6 = hs_ds1726DFY3;
                                                                                            if (hs_ds1726DFY3.notEvaluated) {
                                                                                                hs_wild1326DGr6 = hs_ds1726DFY3.hscall();
                                                                                            }
                                                                                            switch (hs_wild1326DGr6.tag) {
                                                                                            case 1:
                                                                                                return hs_fail426DFXZ.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                            case 2:
                                                                                                var hs_ds1826DFY7 = hs_wild1326DGr6.data[0];
                                                                                                var hs_ds1926DFYc = hs_wild1326DGr6.data[1];
                                                                                                var hs_wild1426DGr8 = hs_ds1826DFY7;
                                                                                                if (hs_ds1826DFY7.notEvaluated) {
                                                                                                    hs_wild1426DGr8 = hs_ds1826DFY7.hscall();
                                                                                                }
                                                                                                var hs_ds2026DFYa = hs_wild1426DGr8.data[0];
                                                                                                var hs_ds2126DGr7 = hs_ds2026DFYa;
                                                                                                if (hs_ds2026DFYa.notEvaluated) {
                                                                                                    hs_ds2126DGr7 = hs_ds2026DFYa.hscall();
                                                                                                }
                                                                                                switch (hs_ds2126DGr7) {
                                                                                                case "}":
                                                                                                    var hs_wild1526DGr9 = hs_ds1926DFYc;
                                                                                                    if (hs_ds1926DFYc.notEvaluated) {
                                                                                                        hs_wild1526DGr9 = hs_ds1926DFYc.hscall();
                                                                                                    }
                                                                                                    switch (hs_wild1526DGr9.tag) {
                                                                                                    case 1:
                                                                                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_a9026DFYe);
                                                                                                    case 2:
                                                                                                        return hs_fail426DFXZ.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                    }
                                                                                                default:
                                                                                                    return hs_fail426DFXZ.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                }
                                                                                            }
                                                                                        default:
                                                                                            return hs_fail426DFXZ.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                        }
                                                                                    };
                                                                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGrc);
                                                                                };
                                                                                var hs_sat26DGrf = new $hs.Thunk();
                                                                                hs_sat26DGrf.evaluateOnce = function () {
                                                                                    var hs_sat26DGre = new $hs.Thunk();
                                                                                    hs_sat26DGre.evaluateOnce = function () {
                                                                                        return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead126DFWN);
                                                                                    };
                                                                                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_reset.hscall(hs_sat26DGre);
                                                                                };
                                                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGrf, hs_sat26DGrd);
                                                                            case 2:
                                                                                return hs_fail326DFXC.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                            }
                                                                        default:
                                                                            return hs_fail326DFXC.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                        }
                                                                    }
                                                                default:
                                                                    return hs_fail326DFXC.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                }
                                                            };
                                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGri);
                                                        }
                                                    default:
                                                        return hs_fail226DFXq.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                    }
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGrj);
                                            case 2:
                                                return hs_fail126DFX6.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                            }
                                        default:
                                            return hs_fail126DFX6.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                        }
                                    }
                                default:
                                    return hs_fail126DFX6.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                }
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGrm);
                        }
                    default:
                        return hs_fail26DFWU.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGrn);
            };
            var hs_sat26DGrp = new $hs.Data(1);
            hs_sat26DGrp.data = [11];
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall(hs_sat26DGrp, hs_sat26DGro);
        };
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26DGrq);
    };
    this.hs_zdfReadLast.evaluate = function (hs_zddRead26DFYA) {
        var hs_sat26DGrr = new $hs.Thunk();
        hs_sat26DGrr.evaluateOnce = function () {
            return hs_zdcreadListPrec25vhse.hscall(hs_zddRead26DFYA);
        };
        var hs_sat26DGrs = new $hs.Thunk();
        hs_sat26DGrs.evaluateOnce = function () {
            return hs_zdcreadPrec25vhqt.hscall(hs_zddRead26DFYA);
        };
        var hs_sat26DGrt = new $hs.Thunk();
        hs_sat26DGrt.evaluateOnce = function () {
            return hs_zdcreadList25vhsg.hscall(hs_zddRead26DFYA);
        };
        var hs_sat26DGru = new $hs.Thunk();
        hs_sat26DGru.evaluateOnce = function () {
            return hs_zdcreadsPrec25vhsi.hscall(hs_zddRead26DFYA);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGru, hs_sat26DGrt, hs_sat26DGrs, hs_sat26DGrr];
        return $res;
    };
    hs_zdcreadListPrec25vhse.evaluate = function (hs_zddRead26DFYG) {
        var hs_sat26DGrv = new $hs.Thunk();
        hs_sat26DGrv.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadLast.hscall(hs_zddRead26DFYG);
        };
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall(hs_sat26DGrv);
    };
    hs_zdcreadList25vhsg.evaluate = function (hs_zddRead26DFYJ) {
        var hs_sat26DGrw = new $hs.Thunk();
        hs_sat26DGrw.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadLast.hscall(hs_zddRead26DFYJ);
        };
        return $hs.modules.GHCziRead.hs_readListDefault.hscall(hs_sat26DGrw);
    };
    hs_zdcreadsPrec25vhsi.evaluate = function (hs_zddRead26DFYM) {
        var hs_sat26DGrx = new $hs.Thunk();
        hs_sat26DGrx.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadLast.hscall(hs_zddRead26DFYM);
        };
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall(hs_sat26DGrx);
    };
    hs_a1725vhsz.evaluate = function (hs_zddEq26DFYW, hs_zddOrd26DFYS) {
        var hs_sat26DGrA = new $hs.Thunk();
        hs_sat26DGrA.evaluateOnce = function () {
            var hs_sat26DGry = new $hs.Thunk();
            hs_sat26DGry.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DFYS);
            };
            return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGry);
        };
        var hs_sat26DGrz = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGrA, hs_zddOrd26DFYS);
        return $hs.modules.GHCziClasses.hs_min.hscall(hs_sat26DGrz);
    };
    hs_zdcmin25vhsI.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1725vhsz.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1825vhsK.evaluate = function (hs_zddEq26DFZ7, hs_zddOrd26DFZ3) {
        var hs_sat26DGrD = new $hs.Thunk();
        hs_sat26DGrD.evaluateOnce = function () {
            var hs_sat26DGrB = new $hs.Thunk();
            hs_sat26DGrB.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DFZ3);
            };
            return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGrB);
        };
        var hs_sat26DGrC = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGrD, hs_zddOrd26DFZ3);
        return $hs.modules.GHCziClasses.hs_max.hscall(hs_sat26DGrC);
    };
    hs_zdcmax25vhsT.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1825vhsK.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1925vhsV.evaluate = function (hs_zddEq26DFZi, hs_zddOrd26DFZe) {
        var hs_sat26DGrG = new $hs.Thunk();
        hs_sat26DGrG.evaluateOnce = function () {
            var hs_sat26DGrE = new $hs.Thunk();
            hs_sat26DGrE.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DFZe);
            };
            return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGrE);
        };
        var hs_sat26DGrF = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGrG, hs_zddOrd26DFZe);
        return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_sat26DGrF);
    };
    hs_zdczlze25vht4.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1925vhsV.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2025vht6.evaluate = function (hs_zddEq26DFZt, hs_zddOrd26DFZp) {
        var hs_sat26DGrJ = new $hs.Thunk();
        hs_sat26DGrJ.evaluateOnce = function () {
            var hs_sat26DGrH = new $hs.Thunk();
            hs_sat26DGrH.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DFZp);
            };
            return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGrH);
        };
        var hs_sat26DGrI = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGrJ, hs_zddOrd26DFZp);
        return $hs.modules.GHCziClasses.hs_zg.hscall(hs_sat26DGrI);
    };
    hs_zdczg25vhtf.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a2025vht6.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2125vhth.evaluate = function (hs_zddEq26DFZE, hs_zddOrd26DFZA) {
        var hs_sat26DGrM = new $hs.Thunk();
        hs_sat26DGrM.evaluateOnce = function () {
            var hs_sat26DGrK = new $hs.Thunk();
            hs_sat26DGrK.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DFZA);
            };
            return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGrK);
        };
        var hs_sat26DGrL = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGrM, hs_zddOrd26DFZA);
        return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_sat26DGrL);
    };
    hs_zdczgze25vhtq.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a2125vhth.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2225vhts.evaluate = function (hs_zddEq26DFZP, hs_zddOrd26DFZL) {
        var hs_sat26DGrP = new $hs.Thunk();
        hs_sat26DGrP.evaluateOnce = function () {
            var hs_sat26DGrN = new $hs.Thunk();
            hs_sat26DGrN.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DFZL);
            };
            return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGrN);
        };
        var hs_sat26DGrO = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGrP, hs_zddOrd26DFZL);
        return $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26DGrO);
    };
    hs_zdczl25vhtB.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a2225vhts.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2325vhtD.evaluate = function (hs_zddEq26DG00, hs_zddOrd26DFZW) {
        var hs_sat26DGrS = new $hs.Thunk();
        hs_sat26DGrS.evaluateOnce = function () {
            var hs_sat26DGrQ = new $hs.Thunk();
            hs_sat26DGrQ.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DFZW);
            };
            return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGrQ);
        };
        var hs_sat26DGrR = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGrS, hs_zddOrd26DFZW);
        return $hs.modules.GHCziClasses.hs_compare.hscall(hs_sat26DGrR);
    };
    hs_zdccompare25vhtM.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a2325vhtD.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfOrdLast.evaluate = function (hs_zddEq26DG05, hs_zddOrd26DG06) {
        var hs_sat26DGrW = new $hs.Thunk();
        hs_sat26DGrW.evaluateOnce = function () {
            var hs_sat26DGrV = new $hs.Thunk();
            hs_sat26DGrV.evaluateOnce = function () {
                var hs_sat26DGrT = new $hs.Thunk();
                hs_sat26DGrT.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DG06);
                };
                return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGrT);
            };
            var hs_sat26DGrU = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGrV, hs_zddOrd26DG06);
            return $hs.modules.GHCziClasses.hs_min.hscall(hs_sat26DGrU);
        };
        var hs_sat26DGs0 = new $hs.Thunk();
        hs_sat26DGs0.evaluateOnce = function () {
            var hs_sat26DGrZ = new $hs.Thunk();
            hs_sat26DGrZ.evaluateOnce = function () {
                var hs_sat26DGrX = new $hs.Thunk();
                hs_sat26DGrX.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DG06);
                };
                return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGrX);
            };
            var hs_sat26DGrY = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGrZ, hs_zddOrd26DG06);
            return $hs.modules.GHCziClasses.hs_max.hscall(hs_sat26DGrY);
        };
        var hs_sat26DGs4 = new $hs.Thunk();
        hs_sat26DGs4.evaluateOnce = function () {
            var hs_sat26DGs3 = new $hs.Thunk();
            hs_sat26DGs3.evaluateOnce = function () {
                var hs_sat26DGs1 = new $hs.Thunk();
                hs_sat26DGs1.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DG06);
                };
                return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGs1);
            };
            var hs_sat26DGs2 = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGs3, hs_zddOrd26DG06);
            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_sat26DGs2);
        };
        var hs_sat26DGs8 = new $hs.Thunk();
        hs_sat26DGs8.evaluateOnce = function () {
            var hs_sat26DGs7 = new $hs.Thunk();
            hs_sat26DGs7.evaluateOnce = function () {
                var hs_sat26DGs5 = new $hs.Thunk();
                hs_sat26DGs5.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DG06);
                };
                return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGs5);
            };
            var hs_sat26DGs6 = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGs7, hs_zddOrd26DG06);
            return $hs.modules.GHCziClasses.hs_zg.hscall(hs_sat26DGs6);
        };
        var hs_sat26DGsc = new $hs.Thunk();
        hs_sat26DGsc.evaluateOnce = function () {
            var hs_sat26DGsb = new $hs.Thunk();
            hs_sat26DGsb.evaluateOnce = function () {
                var hs_sat26DGs9 = new $hs.Thunk();
                hs_sat26DGs9.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DG06);
                };
                return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGs9);
            };
            var hs_sat26DGsa = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGsb, hs_zddOrd26DG06);
            return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_sat26DGsa);
        };
        var hs_sat26DGsg = new $hs.Thunk();
        hs_sat26DGsg.evaluateOnce = function () {
            var hs_sat26DGsf = new $hs.Thunk();
            hs_sat26DGsf.evaluateOnce = function () {
                var hs_sat26DGsd = new $hs.Thunk();
                hs_sat26DGsd.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DG06);
                };
                return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGsd);
            };
            var hs_sat26DGse = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGsf, hs_zddOrd26DG06);
            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26DGse);
        };
        var hs_sat26DGsk = new $hs.Thunk();
        hs_sat26DGsk.evaluateOnce = function () {
            var hs_sat26DGsj = new $hs.Thunk();
            hs_sat26DGsj.evaluateOnce = function () {
                var hs_sat26DGsh = new $hs.Thunk();
                hs_sat26DGsh.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DG06);
                };
                return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGsh);
            };
            var hs_sat26DGsi = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGsj, hs_zddOrd26DG06);
            return $hs.modules.GHCziClasses.hs_compare.hscall(hs_sat26DGsi);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq26DG05, hs_sat26DGsk, hs_sat26DGsg, hs_sat26DGsc, hs_sat26DGs8, hs_sat26DGs4, hs_sat26DGs0, hs_sat26DGrW];
        return $res;
    };
    hs_a2425vhuk.evaluate = function (hs_zddEq26DG0C) {
        var hs_sat26DGsl = $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_zddEq26DG0C);
        return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_sat26DGsl);
    };
    hs_zdczsze25vhup.evaluate = function (hs_eta1cW6l3) {
        return hs_a2425vhuk.hscall(hs_eta1cW6l3);
    };
    hs_a2525vhur.evaluate = function (hs_zddEq26DG0J) {
        var hs_sat26DGsm = $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_zddEq26DG0J);
        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26DGsm);
    };
    hs_zdczeze25vhuw.evaluate = function (hs_eta1cW6l3) {
        return hs_a2525vhur.hscall(hs_eta1cW6l3);
    };
    this.hs_zdfEqLast.evaluate = function (hs_zddEq26DG0O) {
        var hs_sat26DGsp = new $hs.Thunk();
        hs_sat26DGsp.evaluateOnce = function () {
            var hs_sat26DGsn = $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_zddEq26DG0O);
            return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_sat26DGsn);
        };
        var hs_sat26DGsq = new $hs.Thunk();
        hs_sat26DGsq.evaluateOnce = function () {
            var hs_sat26DGso = $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_zddEq26DG0O);
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26DGso);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGsq, hs_sat26DGsp];
        return $res;
    };
    hs_zdcshowsPrec125vhuE.evaluate = function (hs_zddShow26DG0X) {
        var hs_zddShow126DG0Y = new $hs.Thunk();
        hs_zddShow126DG0Y.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowMaybe.hscall(hs_zddShow26DG0X);
        };
        var hs_sat26DGsu = new $hs.Func(2);
        hs_sat26DGsu.evaluate = function (hs_a9026DG11, hs_ds26DG19) {
            var hs_sat26DGsr = new $hs.Thunk();
            hs_sat26DGsr.evaluateOnce = function () {
                var hs_sat26DG1p = new $hs.Thunk();
                hs_sat26DG1p.evaluateOnce = function () {
                    var hs_sat26DG1m = new $hs.Thunk();
                    hs_sat26DG1m.evaluateOnce = function () {
                        var hs_sat26DG1j = new $hs.Thunk();
                        hs_sat26DG1j.evaluateOnce = function () {
                            var hs_sat26DG1h = new $hs.Data(1);
                            hs_sat26DG1h.data = ["}"];
                            var hs_sat26DG1i = new $hs.Data(2);
                            hs_sat26DG1i.data = [hs_sat26DG1h, $hs.modules.GHCziTypes.hs_ZMZN];
                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DG1i);
                        };
                        var hs_sat26DG1l = new $hs.Thunk();
                        hs_sat26DG1l.evaluateOnce = function () {
                            var hs_sat26DG1k = new $hs.Data(1);
                            hs_sat26DG1k.data = [0];
                            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126DG0Y, hs_sat26DG1k, hs_ds26DG19);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DG1l, hs_sat26DG1j);
                    };
                    var hs_sat26DG1o = new $hs.Thunk();
                    hs_sat26DG1o.evaluateOnce = function () {
                        var hs_sat26DG1n = new $hs.Thunk();
                        hs_sat26DG1n.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("getFirst = \x00");
                        };
                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DG1n);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DG1o, hs_sat26DG1m);
                };
                var hs_sat26DG1r = new $hs.Thunk();
                hs_sat26DG1r.evaluateOnce = function () {
                    var hs_sat26DG1q = new $hs.Thunk();
                    hs_sat26DG1q.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("First {\x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DG1q);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DG1r, hs_sat26DG1p);
            };
            var hs_sat26DGst = new $hs.Thunk();
            hs_sat26DGst.evaluateOnce = function () {
                var hs_sat26DGss = new $hs.Data(1);
                hs_sat26DGss.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a9026DG11, hs_sat26DGss);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DGst, hs_sat26DGsr);
        };
        if (hs_sat26DGsu.notEvaluated) {
            return hs_sat26DGsu.hscall();
        } else {
            return hs_sat26DGsu;
        }
    };
    this.hs_zdfShowFirst.evaluate = function (hs_zddShow26DG1y) {
        var hs_sat26DGsv = new $hs.Thunk();
        hs_sat26DGsv.evaluateOnce = function () {
            return hs_zdcshowList125vhve.hscall(hs_zddShow26DG1y);
        };
        var hs_sat26DGsw = new $hs.Thunk();
        hs_sat26DGsw.evaluateOnce = function () {
            return hs_zdcshow125vhvg.hscall(hs_zddShow26DG1y);
        };
        var hs_sat26DGsx = new $hs.Thunk();
        hs_sat26DGsx.evaluateOnce = function () {
            return hs_zdcshowsPrec125vhuE.hscall(hs_zddShow26DG1y);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGsx, hs_sat26DGsw, hs_sat26DGsv];
        return $res;
    };
    hs_zdcshowList125vhve.evaluate = function (hs_zddShow26DG1D) {
        var hs_sat26DGsA = new $hs.Thunk();
        hs_sat26DGsA.evaluateOnce = function () {
            var hs_sat26DGsy = new $hs.Data(1);
            hs_sat26DGsy.data = [0];
            var hs_sat26DGsz = $hs.modules.DataziMonoid.hs_zdfShowFirst.hscall(hs_zddShow26DG1D);
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_sat26DGsz, hs_sat26DGsy);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DGsA);
    };
    hs_zdcshow125vhvg.evaluate = function (hs_zddShow26DG1I) {
        var hs_sat26DGsB = new $hs.Thunk();
        hs_sat26DGsB.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfShowFirst.hscall(hs_zddShow26DG1I);
        };
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_sat26DGsB);
    };
    hs_zdcreadPrec125vhvv.evaluate = function (hs_zddRead26DG1O) {
        var hs_zddRead126DG1P = new $hs.Thunk();
        hs_zddRead126DG1P.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_zdfReadMaybe.hscall(hs_zddRead26DG1O);
        };
        var hs_sat26DGti = new $hs.Thunk();
        hs_sat26DGti.evaluateOnce = function () {
            var hs_sat26DGtg = new $hs.Thunk();
            hs_sat26DGtg.evaluateOnce = function () {
                var hs_sat26DGtf = new $hs.Func(1);
                hs_sat26DGtf.evaluate = function (hs_ds26DG1X) {
                    var hs_fail26DG1W = new $hs.Func(1);
                    hs_fail26DG1W.evaluate = function (hs_ds126DG1V) {
                        var hs_sat26DGsC = new $hs.Thunk();
                        hs_sat26DGsC.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGsC);
                    };
                    var hs_wild26DGsD = hs_ds26DG1X;
                    if (hs_ds26DG1X.notEvaluated) {
                        hs_wild26DGsD = hs_ds26DG1X.hscall();
                    }
                    switch (hs_wild26DGsD.tag) {
                    case 4:
                        var hs_ds126DG20 = hs_wild26DGsD.data[0];
                        var hs_sat26DGsF = new $hs.Thunk();
                        hs_sat26DGsF.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("First\x00");
                        };
                        var hs_wild126DGsE = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126DG20, hs_sat26DGsF);
                        switch (hs_wild126DGsE.tag) {
                        case 1:
                            return hs_fail26DG1W.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        case 2:
                            var hs_sat26DGte = new $hs.Func(1);
                            hs_sat26DGte.evaluate = function (hs_ds226DG29) {
                                var hs_fail126DG28 = new $hs.Func(1);
                                hs_fail126DG28.evaluate = function (hs_ds326DG27) {
                                    var hs_sat26DGsG = new $hs.Thunk();
                                    hs_sat26DGsG.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                    };
                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGsG);
                                };
                                var hs_wild226DGsH = hs_ds226DG29;
                                if (hs_ds226DG29.notEvaluated) {
                                    hs_wild226DGsH = hs_ds226DG29.hscall();
                                }
                                switch (hs_wild226DGsH.tag) {
                                case 3:
                                    var hs_ds326DG2c = hs_wild226DGsH.data[0];
                                    var hs_wild326DGsI = hs_ds326DG2c;
                                    if (hs_ds326DG2c.notEvaluated) {
                                        hs_wild326DGsI = hs_ds326DG2c.hscall();
                                    }
                                    switch (hs_wild326DGsI.tag) {
                                    case 1:
                                        return hs_fail126DG28.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                    case 2:
                                        var hs_ds426DG2g = hs_wild326DGsI.data[0];
                                        var hs_ds526DG2l = hs_wild326DGsI.data[1];
                                        var hs_wild426DGsK = hs_ds426DG2g;
                                        if (hs_ds426DG2g.notEvaluated) {
                                            hs_wild426DGsK = hs_ds426DG2g.hscall();
                                        }
                                        var hs_ds626DG2j = hs_wild426DGsK.data[0];
                                        var hs_ds726DGsJ = hs_ds626DG2j;
                                        if (hs_ds626DG2j.notEvaluated) {
                                            hs_ds726DGsJ = hs_ds626DG2j.hscall();
                                        }
                                        switch (hs_ds726DGsJ) {
                                        case "{":
                                            var hs_wild526DGsL = hs_ds526DG2l;
                                            if (hs_ds526DG2l.notEvaluated) {
                                                hs_wild526DGsL = hs_ds526DG2l.hscall();
                                            }
                                            switch (hs_wild526DGsL.tag) {
                                            case 1:
                                                var hs_sat26DGtb = new $hs.Func(1);
                                                hs_sat26DGtb.evaluate = function (hs_ds826DG2t) {
                                                    var hs_fail226DG2s = new $hs.Func(1);
                                                    hs_fail226DG2s.evaluate = function (hs_ds926DG2r) {
                                                        var hs_sat26DGsM = new $hs.Thunk();
                                                        hs_sat26DGsM.evaluateOnce = function () {
                                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                        };
                                                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGsM);
                                                    };
                                                    var hs_wild626DGsN = hs_ds826DG2t;
                                                    if (hs_ds826DG2t.notEvaluated) {
                                                        hs_wild626DGsN = hs_ds826DG2t.hscall();
                                                    }
                                                    switch (hs_wild626DGsN.tag) {
                                                    case 4:
                                                        var hs_ds926DG2w = hs_wild626DGsN.data[0];
                                                        var hs_sat26DGsP = new $hs.Thunk();
                                                        hs_sat26DGsP.evaluateOnce = function () {
                                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("getFirst\x00");
                                                        };
                                                        var hs_wild726DGsO = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds926DG2w, hs_sat26DGsP);
                                                        switch (hs_wild726DGsO.tag) {
                                                        case 1:
                                                            return hs_fail226DG2s.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                        case 2:
                                                            var hs_sat26DGta = new $hs.Func(1);
                                                            hs_sat26DGta.evaluate = function (hs_ds1026DG2F) {
                                                                var hs_fail326DG2E = new $hs.Func(1);
                                                                hs_fail326DG2E.evaluate = function (hs_ds1126DG2D) {
                                                                    var hs_sat26DGsQ = new $hs.Thunk();
                                                                    hs_sat26DGsQ.evaluateOnce = function () {
                                                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                    };
                                                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGsQ);
                                                                };
                                                                var hs_wild826DGsR = hs_ds1026DG2F;
                                                                if (hs_ds1026DG2F.notEvaluated) {
                                                                    hs_wild826DGsR = hs_ds1026DG2F.hscall();
                                                                }
                                                                switch (hs_wild826DGsR.tag) {
                                                                case 3:
                                                                    var hs_ds1126DG2I = hs_wild826DGsR.data[0];
                                                                    var hs_wild926DGsS = hs_ds1126DG2I;
                                                                    if (hs_ds1126DG2I.notEvaluated) {
                                                                        hs_wild926DGsS = hs_ds1126DG2I.hscall();
                                                                    }
                                                                    switch (hs_wild926DGsS.tag) {
                                                                    case 1:
                                                                        return hs_fail326DG2E.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                    case 2:
                                                                        var hs_ds1226DG2M = hs_wild926DGsS.data[0];
                                                                        var hs_ds1326DG2R = hs_wild926DGsS.data[1];
                                                                        var hs_wild1026DGsU = hs_ds1226DG2M;
                                                                        if (hs_ds1226DG2M.notEvaluated) {
                                                                            hs_wild1026DGsU = hs_ds1226DG2M.hscall();
                                                                        }
                                                                        var hs_ds1426DG2P = hs_wild1026DGsU.data[0];
                                                                        var hs_ds1526DGsT = hs_ds1426DG2P;
                                                                        if (hs_ds1426DG2P.notEvaluated) {
                                                                            hs_ds1526DGsT = hs_ds1426DG2P.hscall();
                                                                        }
                                                                        switch (hs_ds1526DGsT) {
                                                                        case "=":
                                                                            var hs_wild1126DGsV = hs_ds1326DG2R;
                                                                            if (hs_ds1326DG2R.notEvaluated) {
                                                                                hs_wild1126DGsV = hs_ds1326DG2R.hscall();
                                                                            }
                                                                            switch (hs_wild1126DGsV.tag) {
                                                                            case 1:
                                                                                var hs_sat26DGt5 = new $hs.Func(1);
                                                                                hs_sat26DGt5.evaluate = function (hs_a9026DG3g) {
                                                                                    var hs_sat26DGt4 = new $hs.Func(1);
                                                                                    hs_sat26DGt4.evaluate = function (hs_ds1626DG32) {
                                                                                        var hs_fail426DG31 = new $hs.Func(1);
                                                                                        hs_fail426DG31.evaluate = function (hs_ds1726DG30) {
                                                                                            var hs_sat26DGsW = new $hs.Thunk();
                                                                                            hs_sat26DGsW.evaluateOnce = function () {
                                                                                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                                            };
                                                                                            return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGsW);
                                                                                        };
                                                                                        var hs_wild1226DGsX = hs_ds1626DG32;
                                                                                        if (hs_ds1626DG32.notEvaluated) {
                                                                                            hs_wild1226DGsX = hs_ds1626DG32.hscall();
                                                                                        }
                                                                                        switch (hs_wild1226DGsX.tag) {
                                                                                        case 3:
                                                                                            var hs_ds1726DG35 = hs_wild1226DGsX.data[0];
                                                                                            var hs_wild1326DGsY = hs_ds1726DG35;
                                                                                            if (hs_ds1726DG35.notEvaluated) {
                                                                                                hs_wild1326DGsY = hs_ds1726DG35.hscall();
                                                                                            }
                                                                                            switch (hs_wild1326DGsY.tag) {
                                                                                            case 1:
                                                                                                return hs_fail426DG31.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                            case 2:
                                                                                                var hs_ds1826DG39 = hs_wild1326DGsY.data[0];
                                                                                                var hs_ds1926DG3e = hs_wild1326DGsY.data[1];
                                                                                                var hs_wild1426DGt0 = hs_ds1826DG39;
                                                                                                if (hs_ds1826DG39.notEvaluated) {
                                                                                                    hs_wild1426DGt0 = hs_ds1826DG39.hscall();
                                                                                                }
                                                                                                var hs_ds2026DG3c = hs_wild1426DGt0.data[0];
                                                                                                var hs_ds2126DGsZ = hs_ds2026DG3c;
                                                                                                if (hs_ds2026DG3c.notEvaluated) {
                                                                                                    hs_ds2126DGsZ = hs_ds2026DG3c.hscall();
                                                                                                }
                                                                                                switch (hs_ds2126DGsZ) {
                                                                                                case "}":
                                                                                                    var hs_wild1526DGt1 = hs_ds1926DG3e;
                                                                                                    if (hs_ds1926DG3e.notEvaluated) {
                                                                                                        hs_wild1526DGt1 = hs_ds1926DG3e.hscall();
                                                                                                    }
                                                                                                    switch (hs_wild1526DGt1.tag) {
                                                                                                    case 1:
                                                                                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_a9026DG3g);
                                                                                                    case 2:
                                                                                                        return hs_fail426DG31.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                    }
                                                                                                default:
                                                                                                    return hs_fail426DG31.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                }
                                                                                            }
                                                                                        default:
                                                                                            return hs_fail426DG31.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                        }
                                                                                    };
                                                                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGt4);
                                                                                };
                                                                                var hs_sat26DGt7 = new $hs.Thunk();
                                                                                hs_sat26DGt7.evaluateOnce = function () {
                                                                                    var hs_sat26DGt6 = new $hs.Thunk();
                                                                                    hs_sat26DGt6.evaluateOnce = function () {
                                                                                        return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead126DG1P);
                                                                                    };
                                                                                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_reset.hscall(hs_sat26DGt6);
                                                                                };
                                                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGt7, hs_sat26DGt5);
                                                                            case 2:
                                                                                return hs_fail326DG2E.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                            }
                                                                        default:
                                                                            return hs_fail326DG2E.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                        }
                                                                    }
                                                                default:
                                                                    return hs_fail326DG2E.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                }
                                                            };
                                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGta);
                                                        }
                                                    default:
                                                        return hs_fail226DG2s.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                    }
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGtb);
                                            case 2:
                                                return hs_fail126DG28.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                            }
                                        default:
                                            return hs_fail126DG28.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                        }
                                    }
                                default:
                                    return hs_fail126DG28.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                }
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGte);
                        }
                    default:
                        return hs_fail26DG1W.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGtf);
            };
            var hs_sat26DGth = new $hs.Data(1);
            hs_sat26DGth.data = [11];
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall(hs_sat26DGth, hs_sat26DGtg);
        };
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26DGti);
    };
    this.hs_zdfReadFirst.evaluate = function (hs_zddRead26DG3C) {
        var hs_sat26DGtj = new $hs.Thunk();
        hs_sat26DGtj.evaluateOnce = function () {
            return hs_zdcreadListPrec125vhxg.hscall(hs_zddRead26DG3C);
        };
        var hs_sat26DGtk = new $hs.Thunk();
        hs_sat26DGtk.evaluateOnce = function () {
            return hs_zdcreadPrec125vhvv.hscall(hs_zddRead26DG3C);
        };
        var hs_sat26DGtl = new $hs.Thunk();
        hs_sat26DGtl.evaluateOnce = function () {
            return hs_zdcreadList125vhxi.hscall(hs_zddRead26DG3C);
        };
        var hs_sat26DGtm = new $hs.Thunk();
        hs_sat26DGtm.evaluateOnce = function () {
            return hs_zdcreadsPrec125vhxk.hscall(hs_zddRead26DG3C);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGtm, hs_sat26DGtl, hs_sat26DGtk, hs_sat26DGtj];
        return $res;
    };
    hs_zdcreadListPrec125vhxg.evaluate = function (hs_zddRead26DG3I) {
        var hs_sat26DGtn = new $hs.Thunk();
        hs_sat26DGtn.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadFirst.hscall(hs_zddRead26DG3I);
        };
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall(hs_sat26DGtn);
    };
    hs_zdcreadList125vhxi.evaluate = function (hs_zddRead26DG3L) {
        var hs_sat26DGto = new $hs.Thunk();
        hs_sat26DGto.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadFirst.hscall(hs_zddRead26DG3L);
        };
        return $hs.modules.GHCziRead.hs_readListDefault.hscall(hs_sat26DGto);
    };
    hs_zdcreadsPrec125vhxk.evaluate = function (hs_zddRead26DG3O) {
        var hs_sat26DGtp = new $hs.Thunk();
        hs_sat26DGtp.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadFirst.hscall(hs_zddRead26DG3O);
        };
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall(hs_sat26DGtp);
    };
    hs_a2625vhxB.evaluate = function (hs_zddEq26DG3Y, hs_zddOrd26DG3U) {
        var hs_sat26DGts = new $hs.Thunk();
        hs_sat26DGts.evaluateOnce = function () {
            var hs_sat26DGtq = new $hs.Thunk();
            hs_sat26DGtq.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DG3U);
            };
            return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGtq);
        };
        var hs_sat26DGtr = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGts, hs_zddOrd26DG3U);
        return $hs.modules.GHCziClasses.hs_min.hscall(hs_sat26DGtr);
    };
    hs_zdcmin125vhxK.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a2625vhxB.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2725vhxM.evaluate = function (hs_zddEq26DG49, hs_zddOrd26DG45) {
        var hs_sat26DGtv = new $hs.Thunk();
        hs_sat26DGtv.evaluateOnce = function () {
            var hs_sat26DGtt = new $hs.Thunk();
            hs_sat26DGtt.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DG45);
            };
            return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGtt);
        };
        var hs_sat26DGtu = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGtv, hs_zddOrd26DG45);
        return $hs.modules.GHCziClasses.hs_max.hscall(hs_sat26DGtu);
    };
    hs_zdcmax125vhxV.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a2725vhxM.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2825vhxX.evaluate = function (hs_zddEq26DG4k, hs_zddOrd26DG4g) {
        var hs_sat26DGty = new $hs.Thunk();
        hs_sat26DGty.evaluateOnce = function () {
            var hs_sat26DGtw = new $hs.Thunk();
            hs_sat26DGtw.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DG4g);
            };
            return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGtw);
        };
        var hs_sat26DGtx = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGty, hs_zddOrd26DG4g);
        return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_sat26DGtx);
    };
    hs_zdczlze125vhy6.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a2825vhxX.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2925vhy8.evaluate = function (hs_zddEq26DG4v, hs_zddOrd26DG4r) {
        var hs_sat26DGtB = new $hs.Thunk();
        hs_sat26DGtB.evaluateOnce = function () {
            var hs_sat26DGtz = new $hs.Thunk();
            hs_sat26DGtz.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DG4r);
            };
            return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGtz);
        };
        var hs_sat26DGtA = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGtB, hs_zddOrd26DG4r);
        return $hs.modules.GHCziClasses.hs_zg.hscall(hs_sat26DGtA);
    };
    hs_zdczg125vhyh.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a2925vhy8.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a3025vhyj.evaluate = function (hs_zddEq26DG4G, hs_zddOrd26DG4C) {
        var hs_sat26DGtE = new $hs.Thunk();
        hs_sat26DGtE.evaluateOnce = function () {
            var hs_sat26DGtC = new $hs.Thunk();
            hs_sat26DGtC.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DG4C);
            };
            return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGtC);
        };
        var hs_sat26DGtD = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGtE, hs_zddOrd26DG4C);
        return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_sat26DGtD);
    };
    hs_zdczgze125vhys.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3025vhyj.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a3125vhyu.evaluate = function (hs_zddEq26DG4R, hs_zddOrd26DG4N) {
        var hs_sat26DGtH = new $hs.Thunk();
        hs_sat26DGtH.evaluateOnce = function () {
            var hs_sat26DGtF = new $hs.Thunk();
            hs_sat26DGtF.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DG4N);
            };
            return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGtF);
        };
        var hs_sat26DGtG = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGtH, hs_zddOrd26DG4N);
        return $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26DGtG);
    };
    hs_zdczl125vhyD.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3125vhyu.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a3225vhyF.evaluate = function (hs_zddEq26DG52, hs_zddOrd26DG4Y) {
        var hs_sat26DGtK = new $hs.Thunk();
        hs_sat26DGtK.evaluateOnce = function () {
            var hs_sat26DGtI = new $hs.Thunk();
            hs_sat26DGtI.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DG4Y);
            };
            return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGtI);
        };
        var hs_sat26DGtJ = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGtK, hs_zddOrd26DG4Y);
        return $hs.modules.GHCziClasses.hs_compare.hscall(hs_sat26DGtJ);
    };
    hs_zdccompare125vhyO.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3225vhyF.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfOrdFirst.evaluate = function (hs_zddEq26DG57, hs_zddOrd26DG58) {
        var hs_sat26DGtO = new $hs.Thunk();
        hs_sat26DGtO.evaluateOnce = function () {
            var hs_sat26DGtN = new $hs.Thunk();
            hs_sat26DGtN.evaluateOnce = function () {
                var hs_sat26DGtL = new $hs.Thunk();
                hs_sat26DGtL.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DG58);
                };
                return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGtL);
            };
            var hs_sat26DGtM = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGtN, hs_zddOrd26DG58);
            return $hs.modules.GHCziClasses.hs_min.hscall(hs_sat26DGtM);
        };
        var hs_sat26DGtS = new $hs.Thunk();
        hs_sat26DGtS.evaluateOnce = function () {
            var hs_sat26DGtR = new $hs.Thunk();
            hs_sat26DGtR.evaluateOnce = function () {
                var hs_sat26DGtP = new $hs.Thunk();
                hs_sat26DGtP.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DG58);
                };
                return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGtP);
            };
            var hs_sat26DGtQ = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGtR, hs_zddOrd26DG58);
            return $hs.modules.GHCziClasses.hs_max.hscall(hs_sat26DGtQ);
        };
        var hs_sat26DGtW = new $hs.Thunk();
        hs_sat26DGtW.evaluateOnce = function () {
            var hs_sat26DGtV = new $hs.Thunk();
            hs_sat26DGtV.evaluateOnce = function () {
                var hs_sat26DGtT = new $hs.Thunk();
                hs_sat26DGtT.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DG58);
                };
                return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGtT);
            };
            var hs_sat26DGtU = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGtV, hs_zddOrd26DG58);
            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_sat26DGtU);
        };
        var hs_sat26DGu0 = new $hs.Thunk();
        hs_sat26DGu0.evaluateOnce = function () {
            var hs_sat26DGtZ = new $hs.Thunk();
            hs_sat26DGtZ.evaluateOnce = function () {
                var hs_sat26DGtX = new $hs.Thunk();
                hs_sat26DGtX.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DG58);
                };
                return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGtX);
            };
            var hs_sat26DGtY = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGtZ, hs_zddOrd26DG58);
            return $hs.modules.GHCziClasses.hs_zg.hscall(hs_sat26DGtY);
        };
        var hs_sat26DGu4 = new $hs.Thunk();
        hs_sat26DGu4.evaluateOnce = function () {
            var hs_sat26DGu3 = new $hs.Thunk();
            hs_sat26DGu3.evaluateOnce = function () {
                var hs_sat26DGu1 = new $hs.Thunk();
                hs_sat26DGu1.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DG58);
                };
                return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGu1);
            };
            var hs_sat26DGu2 = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGu3, hs_zddOrd26DG58);
            return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_sat26DGu2);
        };
        var hs_sat26DGu8 = new $hs.Thunk();
        hs_sat26DGu8.evaluateOnce = function () {
            var hs_sat26DGu7 = new $hs.Thunk();
            hs_sat26DGu7.evaluateOnce = function () {
                var hs_sat26DGu5 = new $hs.Thunk();
                hs_sat26DGu5.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DG58);
                };
                return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGu5);
            };
            var hs_sat26DGu6 = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGu7, hs_zddOrd26DG58);
            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26DGu6);
        };
        var hs_sat26DGuc = new $hs.Thunk();
        hs_sat26DGuc.evaluateOnce = function () {
            var hs_sat26DGub = new $hs.Thunk();
            hs_sat26DGub.evaluateOnce = function () {
                var hs_sat26DGu9 = new $hs.Thunk();
                hs_sat26DGu9.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DG58);
                };
                return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26DGu9);
            };
            var hs_sat26DGua = $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_sat26DGub, hs_zddOrd26DG58);
            return $hs.modules.GHCziClasses.hs_compare.hscall(hs_sat26DGua);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq26DG57, hs_sat26DGuc, hs_sat26DGu8, hs_sat26DGu4, hs_sat26DGu0, hs_sat26DGtW, hs_sat26DGtS, hs_sat26DGtO];
        return $res;
    };
    hs_a3325vhzm.evaluate = function (hs_zddEq26DG5E) {
        var hs_sat26DGud = $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_zddEq26DG5E);
        return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_sat26DGud);
    };
    hs_zdczsze125vhzr.evaluate = function (hs_eta1cW6l3) {
        return hs_a3325vhzm.hscall(hs_eta1cW6l3);
    };
    hs_a3425vhzt.evaluate = function (hs_zddEq26DG5L) {
        var hs_sat26DGue = $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_zddEq26DG5L);
        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26DGue);
    };
    hs_zdczeze125vhzy.evaluate = function (hs_eta1cW6l3) {
        return hs_a3425vhzt.hscall(hs_eta1cW6l3);
    };
    this.hs_zdfEqFirst.evaluate = function (hs_zddEq26DG5Q) {
        var hs_sat26DGuh = new $hs.Thunk();
        hs_sat26DGuh.evaluateOnce = function () {
            var hs_sat26DGuf = $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_zddEq26DG5Q);
            return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_sat26DGuf);
        };
        var hs_sat26DGui = new $hs.Thunk();
        hs_sat26DGui.evaluateOnce = function () {
            var hs_sat26DGug = $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_zddEq26DG5Q);
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26DGug);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGui, hs_sat26DGuh];
        return $res;
    };
    hs_a3525vhzG.evaluate = function (hs_zddBounded26DG5Y) {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26DG5Y);
    };
    hs_zdcmaxBound25vhzK.evaluate = function (hs_eta1cW6l3) {
        return hs_a3525vhzG.hscall(hs_eta1cW6l3);
    };
    hs_a3625vhzM.evaluate = function (hs_zddBounded26DG64) {
        return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26DG64);
    };
    hs_zdcminBound25vhzQ.evaluate = function (hs_eta1cW6l3) {
        return hs_a3625vhzM.hscall(hs_eta1cW6l3);
    };
    this.hs_zdfBoundedProduct.evaluate = function (hs_zddBounded26DG68) {
        var hs_sat26DGuj = new $hs.Thunk();
        hs_sat26DGuj.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26DG68);
        };
        var hs_sat26DGuk = new $hs.Thunk();
        hs_sat26DGuk.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26DG68);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGuk, hs_sat26DGuj];
        return $res;
    };
    hs_zdcshowsPrec225vhzW.evaluate = function (hs_zddShow26DG6n, hs_a9026DG6g, hs_ds26DG6p) {
        var hs_sat26DGuw = new $hs.Thunk();
        hs_sat26DGuw.evaluateOnce = function () {
            var hs_sat26DGut = new $hs.Thunk();
            hs_sat26DGut.evaluateOnce = function () {
                var hs_sat26DGuq = new $hs.Thunk();
                hs_sat26DGuq.evaluateOnce = function () {
                    var hs_sat26DGun = new $hs.Thunk();
                    hs_sat26DGun.evaluateOnce = function () {
                        var hs_sat26DGul = new $hs.Data(1);
                        hs_sat26DGul.data = ["}"];
                        var hs_sat26DGum = new $hs.Data(2);
                        hs_sat26DGum.data = [hs_sat26DGul, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DGum);
                    };
                    var hs_sat26DGup = new $hs.Thunk();
                    hs_sat26DGup.evaluateOnce = function () {
                        var hs_sat26DGuo = new $hs.Data(1);
                        hs_sat26DGuo.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26DG6n, hs_sat26DGuo, hs_ds26DG6p);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DGup, hs_sat26DGun);
                };
                var hs_sat26DGus = new $hs.Thunk();
                hs_sat26DGus.evaluateOnce = function () {
                    var hs_sat26DGur = new $hs.Thunk();
                    hs_sat26DGur.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("getProduct = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DGur);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DGus, hs_sat26DGuq);
            };
            var hs_sat26DGuv = new $hs.Thunk();
            hs_sat26DGuv.evaluateOnce = function () {
                var hs_sat26DGuu = new $hs.Thunk();
                hs_sat26DGuu.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Product {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DGuu);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DGuv, hs_sat26DGut);
        };
        var hs_sat26DGuy = new $hs.Thunk();
        hs_sat26DGuy.evaluateOnce = function () {
            var hs_sat26DGux = new $hs.Data(1);
            hs_sat26DGux.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a9026DG6g, hs_sat26DGux);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DGuy, hs_sat26DGuw);
    };
    this.hs_zdfShowProduct.evaluate = function (hs_zddShow26DG6C) {
        var hs_sat26DGuz = new $hs.Thunk();
        hs_sat26DGuz.evaluateOnce = function () {
            return hs_zdcshowList225vhAi.hscall(hs_zddShow26DG6C);
        };
        var hs_sat26DGuA = new $hs.Thunk();
        hs_sat26DGuA.evaluateOnce = function () {
            return hs_zdcshow225vhAk.hscall(hs_zddShow26DG6C);
        };
        var hs_sat26DGuB = new $hs.Func(2);
        hs_sat26DGuB.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec225vhzW.hscall(hs_zddShow26DG6C, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGuB, hs_sat26DGuA, hs_sat26DGuz];
        return $res;
    };
    hs_zdcshowList225vhAi.evaluate = function (hs_zddShow26DG6H) {
        var hs_sat26DGuE = new $hs.Thunk();
        hs_sat26DGuE.evaluateOnce = function () {
            var hs_sat26DGuC = new $hs.Data(1);
            hs_sat26DGuC.data = [0];
            var hs_sat26DGuD = $hs.modules.DataziMonoid.hs_zdfShowProduct.hscall(hs_zddShow26DG6H);
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_sat26DGuD, hs_sat26DGuC);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DGuE);
    };
    hs_zdcshow225vhAk.evaluate = function (hs_zddShow26DG6M) {
        var hs_sat26DGuF = new $hs.Thunk();
        hs_sat26DGuF.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfShowProduct.hscall(hs_zddShow26DG6M);
        };
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_sat26DGuF);
    };
    hs_zdcreadPrec225vhAz.evaluate = function (hs_zddRead26DG7U) {
        var hs_sat26DGvm = new $hs.Thunk();
        hs_sat26DGvm.evaluateOnce = function () {
            var hs_sat26DGvk = new $hs.Thunk();
            hs_sat26DGvk.evaluateOnce = function () {
                var hs_sat26DGvj = new $hs.Func(1);
                hs_sat26DGvj.evaluate = function (hs_ds26DG6Y) {
                    var hs_fail26DG6X = new $hs.Func(1);
                    hs_fail26DG6X.evaluate = function (hs_ds126DG6W) {
                        var hs_sat26DGuG = new $hs.Thunk();
                        hs_sat26DGuG.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGuG);
                    };
                    var hs_wild26DGuH = hs_ds26DG6Y;
                    if (hs_ds26DG6Y.notEvaluated) {
                        hs_wild26DGuH = hs_ds26DG6Y.hscall();
                    }
                    switch (hs_wild26DGuH.tag) {
                    case 4:
                        var hs_ds126DG71 = hs_wild26DGuH.data[0];
                        var hs_sat26DGuJ = new $hs.Thunk();
                        hs_sat26DGuJ.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Product\x00");
                        };
                        var hs_wild126DGuI = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126DG71, hs_sat26DGuJ);
                        switch (hs_wild126DGuI.tag) {
                        case 1:
                            return hs_fail26DG6X.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        case 2:
                            var hs_sat26DGvi = new $hs.Func(1);
                            hs_sat26DGvi.evaluate = function (hs_ds226DG7a) {
                                var hs_fail126DG79 = new $hs.Func(1);
                                hs_fail126DG79.evaluate = function (hs_ds326DG78) {
                                    var hs_sat26DGuK = new $hs.Thunk();
                                    hs_sat26DGuK.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                    };
                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGuK);
                                };
                                var hs_wild226DGuL = hs_ds226DG7a;
                                if (hs_ds226DG7a.notEvaluated) {
                                    hs_wild226DGuL = hs_ds226DG7a.hscall();
                                }
                                switch (hs_wild226DGuL.tag) {
                                case 3:
                                    var hs_ds326DG7d = hs_wild226DGuL.data[0];
                                    var hs_wild326DGuM = hs_ds326DG7d;
                                    if (hs_ds326DG7d.notEvaluated) {
                                        hs_wild326DGuM = hs_ds326DG7d.hscall();
                                    }
                                    switch (hs_wild326DGuM.tag) {
                                    case 1:
                                        return hs_fail126DG79.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                    case 2:
                                        var hs_ds426DG7h = hs_wild326DGuM.data[0];
                                        var hs_ds526DG7m = hs_wild326DGuM.data[1];
                                        var hs_wild426DGuO = hs_ds426DG7h;
                                        if (hs_ds426DG7h.notEvaluated) {
                                            hs_wild426DGuO = hs_ds426DG7h.hscall();
                                        }
                                        var hs_ds626DG7k = hs_wild426DGuO.data[0];
                                        var hs_ds726DGuN = hs_ds626DG7k;
                                        if (hs_ds626DG7k.notEvaluated) {
                                            hs_ds726DGuN = hs_ds626DG7k.hscall();
                                        }
                                        switch (hs_ds726DGuN) {
                                        case "{":
                                            var hs_wild526DGuP = hs_ds526DG7m;
                                            if (hs_ds526DG7m.notEvaluated) {
                                                hs_wild526DGuP = hs_ds526DG7m.hscall();
                                            }
                                            switch (hs_wild526DGuP.tag) {
                                            case 1:
                                                var hs_sat26DGvf = new $hs.Func(1);
                                                hs_sat26DGvf.evaluate = function (hs_ds826DG7u) {
                                                    var hs_fail226DG7t = new $hs.Func(1);
                                                    hs_fail226DG7t.evaluate = function (hs_ds926DG7s) {
                                                        var hs_sat26DGuQ = new $hs.Thunk();
                                                        hs_sat26DGuQ.evaluateOnce = function () {
                                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                        };
                                                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGuQ);
                                                    };
                                                    var hs_wild626DGuR = hs_ds826DG7u;
                                                    if (hs_ds826DG7u.notEvaluated) {
                                                        hs_wild626DGuR = hs_ds826DG7u.hscall();
                                                    }
                                                    switch (hs_wild626DGuR.tag) {
                                                    case 4:
                                                        var hs_ds926DG7x = hs_wild626DGuR.data[0];
                                                        var hs_sat26DGuT = new $hs.Thunk();
                                                        hs_sat26DGuT.evaluateOnce = function () {
                                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("getProduct\x00");
                                                        };
                                                        var hs_wild726DGuS = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds926DG7x, hs_sat26DGuT);
                                                        switch (hs_wild726DGuS.tag) {
                                                        case 1:
                                                            return hs_fail226DG7t.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                        case 2:
                                                            var hs_sat26DGve = new $hs.Func(1);
                                                            hs_sat26DGve.evaluate = function (hs_ds1026DG7G) {
                                                                var hs_fail326DG7F = new $hs.Func(1);
                                                                hs_fail326DG7F.evaluate = function (hs_ds1126DG7E) {
                                                                    var hs_sat26DGuU = new $hs.Thunk();
                                                                    hs_sat26DGuU.evaluateOnce = function () {
                                                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                    };
                                                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGuU);
                                                                };
                                                                var hs_wild826DGuV = hs_ds1026DG7G;
                                                                if (hs_ds1026DG7G.notEvaluated) {
                                                                    hs_wild826DGuV = hs_ds1026DG7G.hscall();
                                                                }
                                                                switch (hs_wild826DGuV.tag) {
                                                                case 3:
                                                                    var hs_ds1126DG7J = hs_wild826DGuV.data[0];
                                                                    var hs_wild926DGuW = hs_ds1126DG7J;
                                                                    if (hs_ds1126DG7J.notEvaluated) {
                                                                        hs_wild926DGuW = hs_ds1126DG7J.hscall();
                                                                    }
                                                                    switch (hs_wild926DGuW.tag) {
                                                                    case 1:
                                                                        return hs_fail326DG7F.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                    case 2:
                                                                        var hs_ds1226DG7N = hs_wild926DGuW.data[0];
                                                                        var hs_ds1326DG7S = hs_wild926DGuW.data[1];
                                                                        var hs_wild1026DGuY = hs_ds1226DG7N;
                                                                        if (hs_ds1226DG7N.notEvaluated) {
                                                                            hs_wild1026DGuY = hs_ds1226DG7N.hscall();
                                                                        }
                                                                        var hs_ds1426DG7Q = hs_wild1026DGuY.data[0];
                                                                        var hs_ds1526DGuX = hs_ds1426DG7Q;
                                                                        if (hs_ds1426DG7Q.notEvaluated) {
                                                                            hs_ds1526DGuX = hs_ds1426DG7Q.hscall();
                                                                        }
                                                                        switch (hs_ds1526DGuX) {
                                                                        case "=":
                                                                            var hs_wild1126DGuZ = hs_ds1326DG7S;
                                                                            if (hs_ds1326DG7S.notEvaluated) {
                                                                                hs_wild1126DGuZ = hs_ds1326DG7S.hscall();
                                                                            }
                                                                            switch (hs_wild1126DGuZ.tag) {
                                                                            case 1:
                                                                                var hs_sat26DGv9 = new $hs.Func(1);
                                                                                hs_sat26DGv9.evaluate = function (hs_a9026DG8i) {
                                                                                    var hs_sat26DGv8 = new $hs.Func(1);
                                                                                    hs_sat26DGv8.evaluate = function (hs_ds1626DG84) {
                                                                                        var hs_fail426DG83 = new $hs.Func(1);
                                                                                        hs_fail426DG83.evaluate = function (hs_ds1726DG82) {
                                                                                            var hs_sat26DGv0 = new $hs.Thunk();
                                                                                            hs_sat26DGv0.evaluateOnce = function () {
                                                                                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                                            };
                                                                                            return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGv0);
                                                                                        };
                                                                                        var hs_wild1226DGv1 = hs_ds1626DG84;
                                                                                        if (hs_ds1626DG84.notEvaluated) {
                                                                                            hs_wild1226DGv1 = hs_ds1626DG84.hscall();
                                                                                        }
                                                                                        switch (hs_wild1226DGv1.tag) {
                                                                                        case 3:
                                                                                            var hs_ds1726DG87 = hs_wild1226DGv1.data[0];
                                                                                            var hs_wild1326DGv2 = hs_ds1726DG87;
                                                                                            if (hs_ds1726DG87.notEvaluated) {
                                                                                                hs_wild1326DGv2 = hs_ds1726DG87.hscall();
                                                                                            }
                                                                                            switch (hs_wild1326DGv2.tag) {
                                                                                            case 1:
                                                                                                return hs_fail426DG83.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                            case 2:
                                                                                                var hs_ds1826DG8b = hs_wild1326DGv2.data[0];
                                                                                                var hs_ds1926DG8g = hs_wild1326DGv2.data[1];
                                                                                                var hs_wild1426DGv4 = hs_ds1826DG8b;
                                                                                                if (hs_ds1826DG8b.notEvaluated) {
                                                                                                    hs_wild1426DGv4 = hs_ds1826DG8b.hscall();
                                                                                                }
                                                                                                var hs_ds2026DG8e = hs_wild1426DGv4.data[0];
                                                                                                var hs_ds2126DGv3 = hs_ds2026DG8e;
                                                                                                if (hs_ds2026DG8e.notEvaluated) {
                                                                                                    hs_ds2126DGv3 = hs_ds2026DG8e.hscall();
                                                                                                }
                                                                                                switch (hs_ds2126DGv3) {
                                                                                                case "}":
                                                                                                    var hs_wild1526DGv5 = hs_ds1926DG8g;
                                                                                                    if (hs_ds1926DG8g.notEvaluated) {
                                                                                                        hs_wild1526DGv5 = hs_ds1926DG8g.hscall();
                                                                                                    }
                                                                                                    switch (hs_wild1526DGv5.tag) {
                                                                                                    case 1:
                                                                                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_a9026DG8i);
                                                                                                    case 2:
                                                                                                        return hs_fail426DG83.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                    }
                                                                                                default:
                                                                                                    return hs_fail426DG83.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                }
                                                                                            }
                                                                                        default:
                                                                                            return hs_fail426DG83.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                        }
                                                                                    };
                                                                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGv8);
                                                                                };
                                                                                var hs_sat26DGvb = new $hs.Thunk();
                                                                                hs_sat26DGvb.evaluateOnce = function () {
                                                                                    var hs_sat26DGva = new $hs.Thunk();
                                                                                    hs_sat26DGva.evaluateOnce = function () {
                                                                                        return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26DG7U);
                                                                                    };
                                                                                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_reset.hscall(hs_sat26DGva);
                                                                                };
                                                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGvb, hs_sat26DGv9);
                                                                            case 2:
                                                                                return hs_fail326DG7F.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                            }
                                                                        default:
                                                                            return hs_fail326DG7F.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                        }
                                                                    }
                                                                default:
                                                                    return hs_fail326DG7F.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                }
                                                            };
                                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGve);
                                                        }
                                                    default:
                                                        return hs_fail226DG7t.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                    }
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGvf);
                                            case 2:
                                                return hs_fail126DG79.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                            }
                                        default:
                                            return hs_fail126DG79.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                        }
                                    }
                                default:
                                    return hs_fail126DG79.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                }
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGvi);
                        }
                    default:
                        return hs_fail26DG6X.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGvj);
            };
            var hs_sat26DGvl = new $hs.Data(1);
            hs_sat26DGvl.data = [11];
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall(hs_sat26DGvl, hs_sat26DGvk);
        };
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26DGvm);
    };
    this.hs_zdfReadProduct.evaluate = function (hs_zddRead26DG8E) {
        var hs_sat26DGvn = new $hs.Thunk();
        hs_sat26DGvn.evaluateOnce = function () {
            return hs_zdcreadListPrec225vhCi.hscall(hs_zddRead26DG8E);
        };
        var hs_sat26DGvo = new $hs.Thunk();
        hs_sat26DGvo.evaluateOnce = function () {
            return hs_zdcreadPrec225vhAz.hscall(hs_zddRead26DG8E);
        };
        var hs_sat26DGvp = new $hs.Thunk();
        hs_sat26DGvp.evaluateOnce = function () {
            return hs_zdcreadList225vhCk.hscall(hs_zddRead26DG8E);
        };
        var hs_sat26DGvq = new $hs.Thunk();
        hs_sat26DGvq.evaluateOnce = function () {
            return hs_zdcreadsPrec225vhCm.hscall(hs_zddRead26DG8E);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGvq, hs_sat26DGvp, hs_sat26DGvo, hs_sat26DGvn];
        return $res;
    };
    hs_zdcreadListPrec225vhCi.evaluate = function (hs_zddRead26DG8K) {
        var hs_sat26DGvr = new $hs.Thunk();
        hs_sat26DGvr.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadProduct.hscall(hs_zddRead26DG8K);
        };
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall(hs_sat26DGvr);
    };
    hs_zdcreadList225vhCk.evaluate = function (hs_zddRead26DG8N) {
        var hs_sat26DGvs = new $hs.Thunk();
        hs_sat26DGvs.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadProduct.hscall(hs_zddRead26DG8N);
        };
        return $hs.modules.GHCziRead.hs_readListDefault.hscall(hs_sat26DGvs);
    };
    hs_zdcreadsPrec225vhCm.evaluate = function (hs_zddRead26DG8Q) {
        var hs_sat26DGvt = new $hs.Thunk();
        hs_sat26DGvt.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadProduct.hscall(hs_zddRead26DG8Q);
        };
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall(hs_sat26DGvt);
    };
    hs_a3725vhCD.evaluate = function (hs_zddEq26DG8X, hs_zddOrd26DG8W) {
        return $hs.modules.GHCziClasses.hs_min.hscall(hs_zddOrd26DG8W);
    };
    hs_zdcmin225vhCJ.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3725vhCD.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a3825vhCL.evaluate = function (hs_zddEq26DG95, hs_zddOrd26DG94) {
        return $hs.modules.GHCziClasses.hs_max.hscall(hs_zddOrd26DG94);
    };
    hs_zdcmax225vhCR.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3825vhCL.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a3925vhCT.evaluate = function (hs_zddEq26DG9d, hs_zddOrd26DG9c) {
        return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd26DG9c);
    };
    hs_zdczlze225vhCZ.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3925vhCT.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a4025vhD1.evaluate = function (hs_zddEq26DG9l, hs_zddOrd26DG9k) {
        return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd26DG9k);
    };
    hs_zdczg225vhD7.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a4025vhD1.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a4125vhD9.evaluate = function (hs_zddEq26DG9t, hs_zddOrd26DG9s) {
        return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd26DG9s);
    };
    hs_zdczgze225vhDf.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a4125vhD9.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a4225vhDh.evaluate = function (hs_zddEq26DG9B, hs_zddOrd26DG9A) {
        return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd26DG9A);
    };
    hs_zdczl225vhDn.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a4225vhDh.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a4325vhDp.evaluate = function (hs_zddEq26DG9J, hs_zddOrd26DG9I) {
        return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd26DG9I);
    };
    hs_zdccompare225vhDv.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a4325vhDp.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfOrdProduct.evaluate = function (hs_zddEq26DG9O, hs_zddOrd26DG9P) {
        var hs_sat26DGvu = new $hs.Thunk();
        hs_sat26DGvu.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_min.hscall(hs_zddOrd26DG9P);
        };
        var hs_sat26DGvv = new $hs.Thunk();
        hs_sat26DGvv.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_max.hscall(hs_zddOrd26DG9P);
        };
        var hs_sat26DGvw = new $hs.Thunk();
        hs_sat26DGvw.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd26DG9P);
        };
        var hs_sat26DGvx = new $hs.Thunk();
        hs_sat26DGvx.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd26DG9P);
        };
        var hs_sat26DGvy = new $hs.Thunk();
        hs_sat26DGvy.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd26DG9P);
        };
        var hs_sat26DGvz = new $hs.Thunk();
        hs_sat26DGvz.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd26DG9P);
        };
        var hs_sat26DGvA = new $hs.Thunk();
        hs_sat26DGvA.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd26DG9P);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq26DG9O, hs_sat26DGvA, hs_sat26DGvz, hs_sat26DGvy, hs_sat26DGvx, hs_sat26DGvw, hs_sat26DGvv, hs_sat26DGvu];
        return $res;
    };
    hs_a4425vhDI.evaluate = function (hs_zddEq26DGa0) {
        return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_zddEq26DGa0);
    };
    hs_zdczsze225vhDM.evaluate = function (hs_eta1cW6l3) {
        return hs_a4425vhDI.hscall(hs_eta1cW6l3);
    };
    hs_a4525vhDO.evaluate = function (hs_zddEq26DGa6) {
        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DGa6);
    };
    hs_zdczeze225vhDS.evaluate = function (hs_eta1cW6l3) {
        return hs_a4525vhDO.hscall(hs_eta1cW6l3);
    };
    this.hs_zdfEqProduct.evaluate = function (hs_zddEq26DGaa) {
        var hs_sat26DGvB = new $hs.Thunk();
        hs_sat26DGvB.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_zddEq26DGaa);
        };
        var hs_sat26DGvC = new $hs.Thunk();
        hs_sat26DGvC.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DGaa);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGvC, hs_sat26DGvB];
        return $res;
    };
    hs_a4625vhDY.evaluate = function (hs_zddBounded26DGag) {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26DGag);
    };
    hs_zdcmaxBound125vhE2.evaluate = function (hs_eta1cW6l3) {
        return hs_a4625vhDY.hscall(hs_eta1cW6l3);
    };
    hs_a4725vhE4.evaluate = function (hs_zddBounded26DGam) {
        return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26DGam);
    };
    hs_zdcminBound125vhE8.evaluate = function (hs_eta1cW6l3) {
        return hs_a4725vhE4.hscall(hs_eta1cW6l3);
    };
    this.hs_zdfBoundedSum.evaluate = function (hs_zddBounded26DGaq) {
        var hs_sat26DGvD = new $hs.Thunk();
        hs_sat26DGvD.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26DGaq);
        };
        var hs_sat26DGvE = new $hs.Thunk();
        hs_sat26DGvE.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26DGaq);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGvE, hs_sat26DGvD];
        return $res;
    };
    hs_zdcshowsPrec325vhEe.evaluate = function (hs_zddShow26DGaF, hs_a9026DGay, hs_ds26DGaH) {
        var hs_sat26DGvQ = new $hs.Thunk();
        hs_sat26DGvQ.evaluateOnce = function () {
            var hs_sat26DGvN = new $hs.Thunk();
            hs_sat26DGvN.evaluateOnce = function () {
                var hs_sat26DGvK = new $hs.Thunk();
                hs_sat26DGvK.evaluateOnce = function () {
                    var hs_sat26DGvH = new $hs.Thunk();
                    hs_sat26DGvH.evaluateOnce = function () {
                        var hs_sat26DGvF = new $hs.Data(1);
                        hs_sat26DGvF.data = ["}"];
                        var hs_sat26DGvG = new $hs.Data(2);
                        hs_sat26DGvG.data = [hs_sat26DGvF, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DGvG);
                    };
                    var hs_sat26DGvJ = new $hs.Thunk();
                    hs_sat26DGvJ.evaluateOnce = function () {
                        var hs_sat26DGvI = new $hs.Data(1);
                        hs_sat26DGvI.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26DGaF, hs_sat26DGvI, hs_ds26DGaH);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DGvJ, hs_sat26DGvH);
                };
                var hs_sat26DGvM = new $hs.Thunk();
                hs_sat26DGvM.evaluateOnce = function () {
                    var hs_sat26DGvL = new $hs.Thunk();
                    hs_sat26DGvL.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("getSum = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DGvL);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DGvM, hs_sat26DGvK);
            };
            var hs_sat26DGvP = new $hs.Thunk();
            hs_sat26DGvP.evaluateOnce = function () {
                var hs_sat26DGvO = new $hs.Thunk();
                hs_sat26DGvO.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Sum {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DGvO);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DGvP, hs_sat26DGvN);
        };
        var hs_sat26DGvS = new $hs.Thunk();
        hs_sat26DGvS.evaluateOnce = function () {
            var hs_sat26DGvR = new $hs.Data(1);
            hs_sat26DGvR.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a9026DGay, hs_sat26DGvR);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DGvS, hs_sat26DGvQ);
    };
    this.hs_zdfShowSum.evaluate = function (hs_zddShow26DGaU) {
        var hs_sat26DGvT = new $hs.Thunk();
        hs_sat26DGvT.evaluateOnce = function () {
            return hs_zdcshowList325vhEA.hscall(hs_zddShow26DGaU);
        };
        var hs_sat26DGvU = new $hs.Thunk();
        hs_sat26DGvU.evaluateOnce = function () {
            return hs_zdcshow325vhEC.hscall(hs_zddShow26DGaU);
        };
        var hs_sat26DGvV = new $hs.Func(2);
        hs_sat26DGvV.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec325vhEe.hscall(hs_zddShow26DGaU, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGvV, hs_sat26DGvU, hs_sat26DGvT];
        return $res;
    };
    hs_zdcshowList325vhEA.evaluate = function (hs_zddShow26DGaZ) {
        var hs_sat26DGvY = new $hs.Thunk();
        hs_sat26DGvY.evaluateOnce = function () {
            var hs_sat26DGvW = new $hs.Data(1);
            hs_sat26DGvW.data = [0];
            var hs_sat26DGvX = $hs.modules.DataziMonoid.hs_zdfShowSum.hscall(hs_zddShow26DGaZ);
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_sat26DGvX, hs_sat26DGvW);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DGvY);
    };
    hs_zdcshow325vhEC.evaluate = function (hs_zddShow26DGb4) {
        var hs_sat26DGvZ = new $hs.Thunk();
        hs_sat26DGvZ.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfShowSum.hscall(hs_zddShow26DGb4);
        };
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_sat26DGvZ);
    };
    hs_zdcreadPrec325vhER.evaluate = function (hs_zddRead26DGcc) {
        var hs_sat26DGwG = new $hs.Thunk();
        hs_sat26DGwG.evaluateOnce = function () {
            var hs_sat26DGwE = new $hs.Thunk();
            hs_sat26DGwE.evaluateOnce = function () {
                var hs_sat26DGwD = new $hs.Func(1);
                hs_sat26DGwD.evaluate = function (hs_ds26DGbg) {
                    var hs_fail26DGbf = new $hs.Func(1);
                    hs_fail26DGbf.evaluate = function (hs_ds126DGbe) {
                        var hs_sat26DGw0 = new $hs.Thunk();
                        hs_sat26DGw0.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGw0);
                    };
                    var hs_wild26DGw1 = hs_ds26DGbg;
                    if (hs_ds26DGbg.notEvaluated) {
                        hs_wild26DGw1 = hs_ds26DGbg.hscall();
                    }
                    switch (hs_wild26DGw1.tag) {
                    case 4:
                        var hs_ds126DGbj = hs_wild26DGw1.data[0];
                        var hs_sat26DGw3 = new $hs.Thunk();
                        hs_sat26DGw3.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Sum\x00");
                        };
                        var hs_wild126DGw2 = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126DGbj, hs_sat26DGw3);
                        switch (hs_wild126DGw2.tag) {
                        case 1:
                            return hs_fail26DGbf.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        case 2:
                            var hs_sat26DGwC = new $hs.Func(1);
                            hs_sat26DGwC.evaluate = function (hs_ds226DGbs) {
                                var hs_fail126DGbr = new $hs.Func(1);
                                hs_fail126DGbr.evaluate = function (hs_ds326DGbq) {
                                    var hs_sat26DGw4 = new $hs.Thunk();
                                    hs_sat26DGw4.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                    };
                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGw4);
                                };
                                var hs_wild226DGw5 = hs_ds226DGbs;
                                if (hs_ds226DGbs.notEvaluated) {
                                    hs_wild226DGw5 = hs_ds226DGbs.hscall();
                                }
                                switch (hs_wild226DGw5.tag) {
                                case 3:
                                    var hs_ds326DGbv = hs_wild226DGw5.data[0];
                                    var hs_wild326DGw6 = hs_ds326DGbv;
                                    if (hs_ds326DGbv.notEvaluated) {
                                        hs_wild326DGw6 = hs_ds326DGbv.hscall();
                                    }
                                    switch (hs_wild326DGw6.tag) {
                                    case 1:
                                        return hs_fail126DGbr.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                    case 2:
                                        var hs_ds426DGbz = hs_wild326DGw6.data[0];
                                        var hs_ds526DGbE = hs_wild326DGw6.data[1];
                                        var hs_wild426DGw8 = hs_ds426DGbz;
                                        if (hs_ds426DGbz.notEvaluated) {
                                            hs_wild426DGw8 = hs_ds426DGbz.hscall();
                                        }
                                        var hs_ds626DGbC = hs_wild426DGw8.data[0];
                                        var hs_ds726DGw7 = hs_ds626DGbC;
                                        if (hs_ds626DGbC.notEvaluated) {
                                            hs_ds726DGw7 = hs_ds626DGbC.hscall();
                                        }
                                        switch (hs_ds726DGw7) {
                                        case "{":
                                            var hs_wild526DGw9 = hs_ds526DGbE;
                                            if (hs_ds526DGbE.notEvaluated) {
                                                hs_wild526DGw9 = hs_ds526DGbE.hscall();
                                            }
                                            switch (hs_wild526DGw9.tag) {
                                            case 1:
                                                var hs_sat26DGwz = new $hs.Func(1);
                                                hs_sat26DGwz.evaluate = function (hs_ds826DGbM) {
                                                    var hs_fail226DGbL = new $hs.Func(1);
                                                    hs_fail226DGbL.evaluate = function (hs_ds926DGbK) {
                                                        var hs_sat26DGwa = new $hs.Thunk();
                                                        hs_sat26DGwa.evaluateOnce = function () {
                                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                        };
                                                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGwa);
                                                    };
                                                    var hs_wild626DGwb = hs_ds826DGbM;
                                                    if (hs_ds826DGbM.notEvaluated) {
                                                        hs_wild626DGwb = hs_ds826DGbM.hscall();
                                                    }
                                                    switch (hs_wild626DGwb.tag) {
                                                    case 4:
                                                        var hs_ds926DGbP = hs_wild626DGwb.data[0];
                                                        var hs_sat26DGwd = new $hs.Thunk();
                                                        hs_sat26DGwd.evaluateOnce = function () {
                                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("getSum\x00");
                                                        };
                                                        var hs_wild726DGwc = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds926DGbP, hs_sat26DGwd);
                                                        switch (hs_wild726DGwc.tag) {
                                                        case 1:
                                                            return hs_fail226DGbL.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                        case 2:
                                                            var hs_sat26DGwy = new $hs.Func(1);
                                                            hs_sat26DGwy.evaluate = function (hs_ds1026DGbY) {
                                                                var hs_fail326DGbX = new $hs.Func(1);
                                                                hs_fail326DGbX.evaluate = function (hs_ds1126DGbW) {
                                                                    var hs_sat26DGwe = new $hs.Thunk();
                                                                    hs_sat26DGwe.evaluateOnce = function () {
                                                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                    };
                                                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGwe);
                                                                };
                                                                var hs_wild826DGwf = hs_ds1026DGbY;
                                                                if (hs_ds1026DGbY.notEvaluated) {
                                                                    hs_wild826DGwf = hs_ds1026DGbY.hscall();
                                                                }
                                                                switch (hs_wild826DGwf.tag) {
                                                                case 3:
                                                                    var hs_ds1126DGc1 = hs_wild826DGwf.data[0];
                                                                    var hs_wild926DGwg = hs_ds1126DGc1;
                                                                    if (hs_ds1126DGc1.notEvaluated) {
                                                                        hs_wild926DGwg = hs_ds1126DGc1.hscall();
                                                                    }
                                                                    switch (hs_wild926DGwg.tag) {
                                                                    case 1:
                                                                        return hs_fail326DGbX.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                    case 2:
                                                                        var hs_ds1226DGc5 = hs_wild926DGwg.data[0];
                                                                        var hs_ds1326DGca = hs_wild926DGwg.data[1];
                                                                        var hs_wild1026DGwi = hs_ds1226DGc5;
                                                                        if (hs_ds1226DGc5.notEvaluated) {
                                                                            hs_wild1026DGwi = hs_ds1226DGc5.hscall();
                                                                        }
                                                                        var hs_ds1426DGc8 = hs_wild1026DGwi.data[0];
                                                                        var hs_ds1526DGwh = hs_ds1426DGc8;
                                                                        if (hs_ds1426DGc8.notEvaluated) {
                                                                            hs_ds1526DGwh = hs_ds1426DGc8.hscall();
                                                                        }
                                                                        switch (hs_ds1526DGwh) {
                                                                        case "=":
                                                                            var hs_wild1126DGwj = hs_ds1326DGca;
                                                                            if (hs_ds1326DGca.notEvaluated) {
                                                                                hs_wild1126DGwj = hs_ds1326DGca.hscall();
                                                                            }
                                                                            switch (hs_wild1126DGwj.tag) {
                                                                            case 1:
                                                                                var hs_sat26DGwt = new $hs.Func(1);
                                                                                hs_sat26DGwt.evaluate = function (hs_a9026DGcA) {
                                                                                    var hs_sat26DGws = new $hs.Func(1);
                                                                                    hs_sat26DGws.evaluate = function (hs_ds1626DGcm) {
                                                                                        var hs_fail426DGcl = new $hs.Func(1);
                                                                                        hs_fail426DGcl.evaluate = function (hs_ds1726DGck) {
                                                                                            var hs_sat26DGwk = new $hs.Thunk();
                                                                                            hs_sat26DGwk.evaluateOnce = function () {
                                                                                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                                            };
                                                                                            return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGwk);
                                                                                        };
                                                                                        var hs_wild1226DGwl = hs_ds1626DGcm;
                                                                                        if (hs_ds1626DGcm.notEvaluated) {
                                                                                            hs_wild1226DGwl = hs_ds1626DGcm.hscall();
                                                                                        }
                                                                                        switch (hs_wild1226DGwl.tag) {
                                                                                        case 3:
                                                                                            var hs_ds1726DGcp = hs_wild1226DGwl.data[0];
                                                                                            var hs_wild1326DGwm = hs_ds1726DGcp;
                                                                                            if (hs_ds1726DGcp.notEvaluated) {
                                                                                                hs_wild1326DGwm = hs_ds1726DGcp.hscall();
                                                                                            }
                                                                                            switch (hs_wild1326DGwm.tag) {
                                                                                            case 1:
                                                                                                return hs_fail426DGcl.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                            case 2:
                                                                                                var hs_ds1826DGct = hs_wild1326DGwm.data[0];
                                                                                                var hs_ds1926DGcy = hs_wild1326DGwm.data[1];
                                                                                                var hs_wild1426DGwo = hs_ds1826DGct;
                                                                                                if (hs_ds1826DGct.notEvaluated) {
                                                                                                    hs_wild1426DGwo = hs_ds1826DGct.hscall();
                                                                                                }
                                                                                                var hs_ds2026DGcw = hs_wild1426DGwo.data[0];
                                                                                                var hs_ds2126DGwn = hs_ds2026DGcw;
                                                                                                if (hs_ds2026DGcw.notEvaluated) {
                                                                                                    hs_ds2126DGwn = hs_ds2026DGcw.hscall();
                                                                                                }
                                                                                                switch (hs_ds2126DGwn) {
                                                                                                case "}":
                                                                                                    var hs_wild1526DGwp = hs_ds1926DGcy;
                                                                                                    if (hs_ds1926DGcy.notEvaluated) {
                                                                                                        hs_wild1526DGwp = hs_ds1926DGcy.hscall();
                                                                                                    }
                                                                                                    switch (hs_wild1526DGwp.tag) {
                                                                                                    case 1:
                                                                                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_a9026DGcA);
                                                                                                    case 2:
                                                                                                        return hs_fail426DGcl.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                    }
                                                                                                default:
                                                                                                    return hs_fail426DGcl.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                }
                                                                                            }
                                                                                        default:
                                                                                            return hs_fail426DGcl.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                        }
                                                                                    };
                                                                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGws);
                                                                                };
                                                                                var hs_sat26DGwv = new $hs.Thunk();
                                                                                hs_sat26DGwv.evaluateOnce = function () {
                                                                                    var hs_sat26DGwu = new $hs.Thunk();
                                                                                    hs_sat26DGwu.evaluateOnce = function () {
                                                                                        return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26DGcc);
                                                                                    };
                                                                                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_reset.hscall(hs_sat26DGwu);
                                                                                };
                                                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGwv, hs_sat26DGwt);
                                                                            case 2:
                                                                                return hs_fail326DGbX.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                            }
                                                                        default:
                                                                            return hs_fail326DGbX.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                        }
                                                                    }
                                                                default:
                                                                    return hs_fail326DGbX.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                }
                                                            };
                                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGwy);
                                                        }
                                                    default:
                                                        return hs_fail226DGbL.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                    }
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGwz);
                                            case 2:
                                                return hs_fail126DGbr.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                            }
                                        default:
                                            return hs_fail126DGbr.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                        }
                                    }
                                default:
                                    return hs_fail126DGbr.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                }
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGwC);
                        }
                    default:
                        return hs_fail26DGbf.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGwD);
            };
            var hs_sat26DGwF = new $hs.Data(1);
            hs_sat26DGwF.data = [11];
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall(hs_sat26DGwF, hs_sat26DGwE);
        };
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26DGwG);
    };
    this.hs_zdfReadSum.evaluate = function (hs_zddRead26DGcW) {
        var hs_sat26DGwH = new $hs.Thunk();
        hs_sat26DGwH.evaluateOnce = function () {
            return hs_zdcreadListPrec325vhGA.hscall(hs_zddRead26DGcW);
        };
        var hs_sat26DGwI = new $hs.Thunk();
        hs_sat26DGwI.evaluateOnce = function () {
            return hs_zdcreadPrec325vhER.hscall(hs_zddRead26DGcW);
        };
        var hs_sat26DGwJ = new $hs.Thunk();
        hs_sat26DGwJ.evaluateOnce = function () {
            return hs_zdcreadList325vhGC.hscall(hs_zddRead26DGcW);
        };
        var hs_sat26DGwK = new $hs.Thunk();
        hs_sat26DGwK.evaluateOnce = function () {
            return hs_zdcreadsPrec325vhGE.hscall(hs_zddRead26DGcW);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGwK, hs_sat26DGwJ, hs_sat26DGwI, hs_sat26DGwH];
        return $res;
    };
    hs_zdcreadListPrec325vhGA.evaluate = function (hs_zddRead26DGd2) {
        var hs_sat26DGwL = new $hs.Thunk();
        hs_sat26DGwL.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadSum.hscall(hs_zddRead26DGd2);
        };
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall(hs_sat26DGwL);
    };
    hs_zdcreadList325vhGC.evaluate = function (hs_zddRead26DGd5) {
        var hs_sat26DGwM = new $hs.Thunk();
        hs_sat26DGwM.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadSum.hscall(hs_zddRead26DGd5);
        };
        return $hs.modules.GHCziRead.hs_readListDefault.hscall(hs_sat26DGwM);
    };
    hs_zdcreadsPrec325vhGE.evaluate = function (hs_zddRead26DGd8) {
        var hs_sat26DGwN = new $hs.Thunk();
        hs_sat26DGwN.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadSum.hscall(hs_zddRead26DGd8);
        };
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall(hs_sat26DGwN);
    };
    hs_a4825vhGV.evaluate = function (hs_zddEq26DGdf, hs_zddOrd26DGde) {
        return $hs.modules.GHCziClasses.hs_min.hscall(hs_zddOrd26DGde);
    };
    hs_zdcmin325vhH1.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a4825vhGV.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a4925vhH3.evaluate = function (hs_zddEq26DGdn, hs_zddOrd26DGdm) {
        return $hs.modules.GHCziClasses.hs_max.hscall(hs_zddOrd26DGdm);
    };
    hs_zdcmax325vhH9.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a4925vhH3.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a5025vhHb.evaluate = function (hs_zddEq26DGdv, hs_zddOrd26DGdu) {
        return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd26DGdu);
    };
    hs_zdczlze325vhHh.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a5025vhHb.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a5125vhHj.evaluate = function (hs_zddEq26DGdD, hs_zddOrd26DGdC) {
        return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd26DGdC);
    };
    hs_zdczg325vhHp.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a5125vhHj.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a5225vhHr.evaluate = function (hs_zddEq26DGdL, hs_zddOrd26DGdK) {
        return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd26DGdK);
    };
    hs_zdczgze325vhHx.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a5225vhHr.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a5325vhHz.evaluate = function (hs_zddEq26DGdT, hs_zddOrd26DGdS) {
        return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd26DGdS);
    };
    hs_zdczl325vhHF.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a5325vhHz.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a5425vhHH.evaluate = function (hs_zddEq26DGe1, hs_zddOrd26DGe0) {
        return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd26DGe0);
    };
    hs_zdccompare325vhHN.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a5425vhHH.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfOrdSum.evaluate = function (hs_zddEq26DGe6, hs_zddOrd26DGe7) {
        var hs_sat26DGwO = new $hs.Thunk();
        hs_sat26DGwO.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_min.hscall(hs_zddOrd26DGe7);
        };
        var hs_sat26DGwP = new $hs.Thunk();
        hs_sat26DGwP.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_max.hscall(hs_zddOrd26DGe7);
        };
        var hs_sat26DGwQ = new $hs.Thunk();
        hs_sat26DGwQ.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd26DGe7);
        };
        var hs_sat26DGwR = new $hs.Thunk();
        hs_sat26DGwR.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd26DGe7);
        };
        var hs_sat26DGwS = new $hs.Thunk();
        hs_sat26DGwS.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd26DGe7);
        };
        var hs_sat26DGwT = new $hs.Thunk();
        hs_sat26DGwT.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd26DGe7);
        };
        var hs_sat26DGwU = new $hs.Thunk();
        hs_sat26DGwU.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd26DGe7);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq26DGe6, hs_sat26DGwU, hs_sat26DGwT, hs_sat26DGwS, hs_sat26DGwR, hs_sat26DGwQ, hs_sat26DGwP, hs_sat26DGwO];
        return $res;
    };
    hs_a5525vhI0.evaluate = function (hs_zddEq26DGei) {
        return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_zddEq26DGei);
    };
    hs_zdczsze325vhI4.evaluate = function (hs_eta1cW6l3) {
        return hs_a5525vhI0.hscall(hs_eta1cW6l3);
    };
    hs_a5625vhI6.evaluate = function (hs_zddEq26DGeo) {
        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DGeo);
    };
    hs_zdczeze325vhIa.evaluate = function (hs_eta1cW6l3) {
        return hs_a5625vhI6.hscall(hs_eta1cW6l3);
    };
    this.hs_zdfEqSum.evaluate = function (hs_zddEq26DGes) {
        var hs_sat26DGwV = new $hs.Thunk();
        hs_sat26DGwV.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_zddEq26DGes);
        };
        var hs_sat26DGwW = new $hs.Thunk();
        hs_sat26DGwW.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DGes);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGwW, hs_sat26DGwV];
        return $res;
    };
    hs_a5725vhIg.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedBool);
    };
    hs_zdcminBound225vhIi.evaluateOnce = function () {
        if (hs_a5725vhIg.notEvaluated) {
            return hs_a5725vhIg.hscall();
        } else {
            return hs_a5725vhIg;
        }
    };
    hs_a5825vhIk.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedBool);
    };
    hs_zdcmaxBound225vhIm.evaluateOnce = function () {
        if (hs_a5825vhIk.notEvaluated) {
            return hs_a5825vhIk.hscall();
        } else {
            return hs_a5825vhIk;
        }
    };
    this.hs_zdfBoundedAny.data = [hs_a5725vhIg, hs_a5825vhIk];
    hs_zdcshowsPrec425vhIo.evaluate = function (hs_a9026DGeH, hs_ds26DGeP) {
        var hs_sat26DGx8 = new $hs.Thunk();
        hs_sat26DGx8.evaluateOnce = function () {
            var hs_sat26DGx5 = new $hs.Thunk();
            hs_sat26DGx5.evaluateOnce = function () {
                var hs_sat26DGx2 = new $hs.Thunk();
                hs_sat26DGx2.evaluateOnce = function () {
                    var hs_sat26DGwZ = new $hs.Thunk();
                    hs_sat26DGwZ.evaluateOnce = function () {
                        var hs_sat26DGwX = new $hs.Data(1);
                        hs_sat26DGwX.data = ["}"];
                        var hs_sat26DGwY = new $hs.Data(2);
                        hs_sat26DGwY.data = [hs_sat26DGwX, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DGwY);
                    };
                    var hs_sat26DGx1 = new $hs.Thunk();
                    hs_sat26DGx1.evaluateOnce = function () {
                        var hs_sat26DGx0 = new $hs.Data(1);
                        hs_sat26DGx0.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowBool, hs_sat26DGx0, hs_ds26DGeP);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DGx1, hs_sat26DGwZ);
                };
                var hs_sat26DGx4 = new $hs.Thunk();
                hs_sat26DGx4.evaluateOnce = function () {
                    var hs_sat26DGx3 = new $hs.Thunk();
                    hs_sat26DGx3.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("getAny = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DGx3);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DGx4, hs_sat26DGx2);
            };
            var hs_sat26DGx7 = new $hs.Thunk();
            hs_sat26DGx7.evaluateOnce = function () {
                var hs_sat26DGx6 = new $hs.Thunk();
                hs_sat26DGx6.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Any {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DGx6);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DGx7, hs_sat26DGx5);
        };
        var hs_sat26DGxa = new $hs.Thunk();
        hs_sat26DGxa.evaluateOnce = function () {
            var hs_sat26DGx9 = new $hs.Data(1);
            hs_sat26DGx9.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a9026DGeH, hs_sat26DGx9);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DGxa, hs_sat26DGx8);
    };
    hs_sat26DGxb.evaluateOnce = function () {
        var hs_sat26DGxc = new $hs.Data(1);
        hs_sat26DGxc.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.DataziMonoid.hs_zdfShowAny, hs_sat26DGxc);
    };
    this.hs_zdfShowAny.data = [hs_zdcshowsPrec425vhIo, hs_zdcshow425vhIK, hs_zdcshowList425vhII];
    hs_zdcshowList425vhII.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DGxb);
    };
    hs_zdcshow425vhIK.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.DataziMonoid.hs_zdfShowAny);
    };
    hs_sat26DGxT.evaluateOnce = function () {
        var hs_sat26DGxR = new $hs.Thunk();
        hs_sat26DGxR.evaluateOnce = function () {
            var hs_sat26DGxQ = new $hs.Func(1);
            hs_sat26DGxQ.evaluate = function (hs_ds26DGfc) {
                var hs_fail26DGfb = new $hs.Func(1);
                hs_fail26DGfb.evaluate = function (hs_ds126DGfa) {
                    var hs_sat26DGxd = new $hs.Thunk();
                    hs_sat26DGxd.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                    };
                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGxd);
                };
                var hs_wild26DGxe = hs_ds26DGfc;
                if (hs_ds26DGfc.notEvaluated) {
                    hs_wild26DGxe = hs_ds26DGfc.hscall();
                }
                switch (hs_wild26DGxe.tag) {
                case 4:
                    var hs_ds126DGff = hs_wild26DGxe.data[0];
                    var hs_sat26DGxg = new $hs.Thunk();
                    hs_sat26DGxg.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Any\x00");
                    };
                    var hs_wild126DGxf = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126DGff, hs_sat26DGxg);
                    switch (hs_wild126DGxf.tag) {
                    case 1:
                        return hs_fail26DGfb.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    case 2:
                        var hs_sat26DGxP = new $hs.Func(1);
                        hs_sat26DGxP.evaluate = function (hs_ds226DGfo) {
                            var hs_fail126DGfn = new $hs.Func(1);
                            hs_fail126DGfn.evaluate = function (hs_ds326DGfm) {
                                var hs_sat26DGxh = new $hs.Thunk();
                                hs_sat26DGxh.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                };
                                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGxh);
                            };
                            var hs_wild226DGxi = hs_ds226DGfo;
                            if (hs_ds226DGfo.notEvaluated) {
                                hs_wild226DGxi = hs_ds226DGfo.hscall();
                            }
                            switch (hs_wild226DGxi.tag) {
                            case 3:
                                var hs_ds326DGfr = hs_wild226DGxi.data[0];
                                var hs_wild326DGxj = hs_ds326DGfr;
                                if (hs_ds326DGfr.notEvaluated) {
                                    hs_wild326DGxj = hs_ds326DGfr.hscall();
                                }
                                switch (hs_wild326DGxj.tag) {
                                case 1:
                                    return hs_fail126DGfn.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                case 2:
                                    var hs_ds426DGfv = hs_wild326DGxj.data[0];
                                    var hs_ds526DGfA = hs_wild326DGxj.data[1];
                                    var hs_wild426DGxl = hs_ds426DGfv;
                                    if (hs_ds426DGfv.notEvaluated) {
                                        hs_wild426DGxl = hs_ds426DGfv.hscall();
                                    }
                                    var hs_ds626DGfy = hs_wild426DGxl.data[0];
                                    var hs_ds726DGxk = hs_ds626DGfy;
                                    if (hs_ds626DGfy.notEvaluated) {
                                        hs_ds726DGxk = hs_ds626DGfy.hscall();
                                    }
                                    switch (hs_ds726DGxk) {
                                    case "{":
                                        var hs_wild526DGxm = hs_ds526DGfA;
                                        if (hs_ds526DGfA.notEvaluated) {
                                            hs_wild526DGxm = hs_ds526DGfA.hscall();
                                        }
                                        switch (hs_wild526DGxm.tag) {
                                        case 1:
                                            var hs_sat26DGxM = new $hs.Func(1);
                                            hs_sat26DGxM.evaluate = function (hs_ds826DGfI) {
                                                var hs_fail226DGfH = new $hs.Func(1);
                                                hs_fail226DGfH.evaluate = function (hs_ds926DGfG) {
                                                    var hs_sat26DGxn = new $hs.Thunk();
                                                    hs_sat26DGxn.evaluateOnce = function () {
                                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                    };
                                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGxn);
                                                };
                                                var hs_wild626DGxo = hs_ds826DGfI;
                                                if (hs_ds826DGfI.notEvaluated) {
                                                    hs_wild626DGxo = hs_ds826DGfI.hscall();
                                                }
                                                switch (hs_wild626DGxo.tag) {
                                                case 4:
                                                    var hs_ds926DGfL = hs_wild626DGxo.data[0];
                                                    var hs_sat26DGxq = new $hs.Thunk();
                                                    hs_sat26DGxq.evaluateOnce = function () {
                                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("getAny\x00");
                                                    };
                                                    var hs_wild726DGxp = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds926DGfL, hs_sat26DGxq);
                                                    switch (hs_wild726DGxp.tag) {
                                                    case 1:
                                                        return hs_fail226DGfH.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                    case 2:
                                                        var hs_sat26DGxL = new $hs.Func(1);
                                                        hs_sat26DGxL.evaluate = function (hs_ds1026DGfU) {
                                                            var hs_fail326DGfT = new $hs.Func(1);
                                                            hs_fail326DGfT.evaluate = function (hs_ds1126DGfS) {
                                                                var hs_sat26DGxr = new $hs.Thunk();
                                                                hs_sat26DGxr.evaluateOnce = function () {
                                                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                };
                                                                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGxr);
                                                            };
                                                            var hs_wild826DGxs = hs_ds1026DGfU;
                                                            if (hs_ds1026DGfU.notEvaluated) {
                                                                hs_wild826DGxs = hs_ds1026DGfU.hscall();
                                                            }
                                                            switch (hs_wild826DGxs.tag) {
                                                            case 3:
                                                                var hs_ds1126DGfX = hs_wild826DGxs.data[0];
                                                                var hs_wild926DGxt = hs_ds1126DGfX;
                                                                if (hs_ds1126DGfX.notEvaluated) {
                                                                    hs_wild926DGxt = hs_ds1126DGfX.hscall();
                                                                }
                                                                switch (hs_wild926DGxt.tag) {
                                                                case 1:
                                                                    return hs_fail326DGfT.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                case 2:
                                                                    var hs_ds1226DGg1 = hs_wild926DGxt.data[0];
                                                                    var hs_ds1326DGg6 = hs_wild926DGxt.data[1];
                                                                    var hs_wild1026DGxv = hs_ds1226DGg1;
                                                                    if (hs_ds1226DGg1.notEvaluated) {
                                                                        hs_wild1026DGxv = hs_ds1226DGg1.hscall();
                                                                    }
                                                                    var hs_ds1426DGg4 = hs_wild1026DGxv.data[0];
                                                                    var hs_ds1526DGxu = hs_ds1426DGg4;
                                                                    if (hs_ds1426DGg4.notEvaluated) {
                                                                        hs_ds1526DGxu = hs_ds1426DGg4.hscall();
                                                                    }
                                                                    switch (hs_ds1526DGxu) {
                                                                    case "=":
                                                                        var hs_wild1126DGxw = hs_ds1326DGg6;
                                                                        if (hs_ds1326DGg6.notEvaluated) {
                                                                            hs_wild1126DGxw = hs_ds1326DGg6.hscall();
                                                                        }
                                                                        switch (hs_wild1126DGxw.tag) {
                                                                        case 1:
                                                                            var hs_sat26DGxG = new $hs.Func(1);
                                                                            hs_sat26DGxG.evaluate = function (hs_a9026DGgv) {
                                                                                var hs_sat26DGxF = new $hs.Func(1);
                                                                                hs_sat26DGxF.evaluate = function (hs_ds1626DGgh) {
                                                                                    var hs_fail426DGgg = new $hs.Func(1);
                                                                                    hs_fail426DGgg.evaluate = function (hs_ds1726DGgf) {
                                                                                        var hs_sat26DGxx = new $hs.Thunk();
                                                                                        hs_sat26DGxx.evaluateOnce = function () {
                                                                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                                        };
                                                                                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGxx);
                                                                                    };
                                                                                    var hs_wild1226DGxy = hs_ds1626DGgh;
                                                                                    if (hs_ds1626DGgh.notEvaluated) {
                                                                                        hs_wild1226DGxy = hs_ds1626DGgh.hscall();
                                                                                    }
                                                                                    switch (hs_wild1226DGxy.tag) {
                                                                                    case 3:
                                                                                        var hs_ds1726DGgk = hs_wild1226DGxy.data[0];
                                                                                        var hs_wild1326DGxz = hs_ds1726DGgk;
                                                                                        if (hs_ds1726DGgk.notEvaluated) {
                                                                                            hs_wild1326DGxz = hs_ds1726DGgk.hscall();
                                                                                        }
                                                                                        switch (hs_wild1326DGxz.tag) {
                                                                                        case 1:
                                                                                            return hs_fail426DGgg.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                        case 2:
                                                                                            var hs_ds1826DGgo = hs_wild1326DGxz.data[0];
                                                                                            var hs_ds1926DGgt = hs_wild1326DGxz.data[1];
                                                                                            var hs_wild1426DGxB = hs_ds1826DGgo;
                                                                                            if (hs_ds1826DGgo.notEvaluated) {
                                                                                                hs_wild1426DGxB = hs_ds1826DGgo.hscall();
                                                                                            }
                                                                                            var hs_ds2026DGgr = hs_wild1426DGxB.data[0];
                                                                                            var hs_ds2126DGxA = hs_ds2026DGgr;
                                                                                            if (hs_ds2026DGgr.notEvaluated) {
                                                                                                hs_ds2126DGxA = hs_ds2026DGgr.hscall();
                                                                                            }
                                                                                            switch (hs_ds2126DGxA) {
                                                                                            case "}":
                                                                                                var hs_wild1526DGxC = hs_ds1926DGgt;
                                                                                                if (hs_ds1926DGgt.notEvaluated) {
                                                                                                    hs_wild1526DGxC = hs_ds1926DGgt.hscall();
                                                                                                }
                                                                                                switch (hs_wild1526DGxC.tag) {
                                                                                                case 1:
                                                                                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_a9026DGgv);
                                                                                                case 2:
                                                                                                    return hs_fail426DGgg.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                }
                                                                                            default:
                                                                                                return hs_fail426DGgg.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                            }
                                                                                        }
                                                                                    default:
                                                                                        return hs_fail426DGgg.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                    }
                                                                                };
                                                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGxF);
                                                                            };
                                                                            var hs_sat26DGxI = new $hs.Thunk();
                                                                            hs_sat26DGxI.evaluateOnce = function () {
                                                                                var hs_sat26DGxH = new $hs.Thunk();
                                                                                hs_sat26DGxH.evaluateOnce = function () {
                                                                                    return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadBool);
                                                                                };
                                                                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_reset.hscall(hs_sat26DGxH);
                                                                            };
                                                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGxI, hs_sat26DGxG);
                                                                        case 2:
                                                                            return hs_fail326DGfT.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                        }
                                                                    default:
                                                                        return hs_fail326DGfT.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                    }
                                                                }
                                                            default:
                                                                return hs_fail326DGfT.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                            }
                                                        };
                                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGxL);
                                                    }
                                                default:
                                                    return hs_fail226DGfH.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                }
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGxM);
                                        case 2:
                                            return hs_fail126DGfn.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                        }
                                    default:
                                        return hs_fail126DGfn.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                    }
                                }
                            default:
                                return hs_fail126DGfn.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGxP);
                    }
                default:
                    return hs_fail26DGfb.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGxQ);
        };
        var hs_sat26DGxS = new $hs.Data(1);
        hs_sat26DGxS.data = [11];
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall(hs_sat26DGxS, hs_sat26DGxR);
    };
    hs_zdcreadPrec425vhIO.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26DGxT);
    };
    this.hs_zdfReadAny.data = [hs_zdcreadsPrec425vhKz, hs_zdcreadList425vhKx, hs_zdcreadPrec425vhIO, hs_zdcreadListPrec425vhKv];
    hs_zdcreadListPrec425vhKv.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall($hs.modules.DataziMonoid.hs_zdfReadAny);
    };
    hs_zdcreadList425vhKx.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListDefault.hscall($hs.modules.DataziMonoid.hs_zdfReadAny);
    };
    hs_zdcreadsPrec425vhKz.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall($hs.modules.DataziMonoid.hs_zdfReadAny);
    };
    hs_a5925vhKB.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdccompare425vhKD.evaluateOnce = function () {
        if (hs_a5925vhKB.notEvaluated) {
            return hs_a5925vhKB.hscall();
        } else {
            return hs_a5925vhKB;
        }
    };
    hs_a6025vhKF.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdczl425vhKH.evaluateOnce = function () {
        if (hs_a6025vhKF.notEvaluated) {
            return hs_a6025vhKF.hscall();
        } else {
            return hs_a6025vhKF;
        }
    };
    hs_a6125vhKJ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdczgze425vhKL.evaluateOnce = function () {
        if (hs_a6125vhKJ.notEvaluated) {
            return hs_a6125vhKJ.hscall();
        } else {
            return hs_a6125vhKJ;
        }
    };
    hs_a6225vhKN.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdczg425vhKP.evaluateOnce = function () {
        if (hs_a6225vhKN.notEvaluated) {
            return hs_a6225vhKN.hscall();
        } else {
            return hs_a6225vhKN;
        }
    };
    hs_a6325vhKR.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdczlze425vhKT.evaluateOnce = function () {
        if (hs_a6325vhKR.notEvaluated) {
            return hs_a6325vhKR.hscall();
        } else {
            return hs_a6325vhKR;
        }
    };
    hs_a6425vhKV.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdcmax425vhKX.evaluateOnce = function () {
        if (hs_a6425vhKV.notEvaluated) {
            return hs_a6425vhKV.hscall();
        } else {
            return hs_a6425vhKV;
        }
    };
    hs_a6525vhKZ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdcmin425vhL1.evaluateOnce = function () {
        if (hs_a6525vhKZ.notEvaluated) {
            return hs_a6525vhKZ.hscall();
        } else {
            return hs_a6525vhKZ;
        }
    };
    hs_a6625vhL3.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqBool);
    };
    hs_zdczeze425vhL5.evaluateOnce = function () {
        if (hs_a6625vhL3.notEvaluated) {
            return hs_a6625vhL3.hscall();
        } else {
            return hs_a6625vhL3;
        }
    };
    hs_a6725vhL7.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqBool);
    };
    hs_zdczsze425vhL9.evaluateOnce = function () {
        if (hs_a6725vhL7.notEvaluated) {
            return hs_a6725vhL7.hscall();
        } else {
            return hs_a6725vhL7;
        }
    };
    this.hs_zdfEqAny.data = [hs_a6625vhL3, hs_a6725vhL7];
    this.hs_zdfOrdAny.data = [$hs.modules.DataziMonoid.hs_zdfEqAny, hs_a5925vhKB, hs_a6025vhKF, hs_a6125vhKJ, hs_a6225vhKN, hs_a6325vhKR, hs_a6425vhKV, hs_a6525vhKZ];
    hs_a6825vhLb.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedBool);
    };
    hs_zdcminBound325vhLd.evaluateOnce = function () {
        if (hs_a6825vhLb.notEvaluated) {
            return hs_a6825vhLb.hscall();
        } else {
            return hs_a6825vhLb;
        }
    };
    hs_a6925vhLf.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedBool);
    };
    hs_zdcmaxBound325vhLh.evaluateOnce = function () {
        if (hs_a6925vhLf.notEvaluated) {
            return hs_a6925vhLf.hscall();
        } else {
            return hs_a6925vhLf;
        }
    };
    this.hs_zdfBoundedAll.data = [hs_a6825vhLb, hs_a6925vhLf];
    hs_zdcshowsPrec525vhLj.evaluate = function (hs_a9026DGhC, hs_ds26DGhK) {
        var hs_sat26DGy5 = new $hs.Thunk();
        hs_sat26DGy5.evaluateOnce = function () {
            var hs_sat26DGy2 = new $hs.Thunk();
            hs_sat26DGy2.evaluateOnce = function () {
                var hs_sat26DGxZ = new $hs.Thunk();
                hs_sat26DGxZ.evaluateOnce = function () {
                    var hs_sat26DGxW = new $hs.Thunk();
                    hs_sat26DGxW.evaluateOnce = function () {
                        var hs_sat26DGxU = new $hs.Data(1);
                        hs_sat26DGxU.data = ["}"];
                        var hs_sat26DGxV = new $hs.Data(2);
                        hs_sat26DGxV.data = [hs_sat26DGxU, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DGxV);
                    };
                    var hs_sat26DGxY = new $hs.Thunk();
                    hs_sat26DGxY.evaluateOnce = function () {
                        var hs_sat26DGxX = new $hs.Data(1);
                        hs_sat26DGxX.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowBool, hs_sat26DGxX, hs_ds26DGhK);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DGxY, hs_sat26DGxW);
                };
                var hs_sat26DGy1 = new $hs.Thunk();
                hs_sat26DGy1.evaluateOnce = function () {
                    var hs_sat26DGy0 = new $hs.Thunk();
                    hs_sat26DGy0.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("getAll = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DGy0);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DGy1, hs_sat26DGxZ);
            };
            var hs_sat26DGy4 = new $hs.Thunk();
            hs_sat26DGy4.evaluateOnce = function () {
                var hs_sat26DGy3 = new $hs.Thunk();
                hs_sat26DGy3.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("All {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DGy3);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DGy4, hs_sat26DGy2);
        };
        var hs_sat26DGy7 = new $hs.Thunk();
        hs_sat26DGy7.evaluateOnce = function () {
            var hs_sat26DGy6 = new $hs.Data(1);
            hs_sat26DGy6.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a9026DGhC, hs_sat26DGy6);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DGy7, hs_sat26DGy5);
    };
    hs_sat26DGy8.evaluateOnce = function () {
        var hs_sat26DGy9 = new $hs.Data(1);
        hs_sat26DGy9.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.DataziMonoid.hs_zdfShowAll, hs_sat26DGy9);
    };
    this.hs_zdfShowAll.data = [hs_zdcshowsPrec525vhLj, hs_zdcshow525vhLF, hs_zdcshowList525vhLD];
    hs_zdcshowList525vhLD.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DGy8);
    };
    hs_zdcshow525vhLF.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.DataziMonoid.hs_zdfShowAll);
    };
    hs_sat26DGyQ.evaluateOnce = function () {
        var hs_sat26DGyO = new $hs.Thunk();
        hs_sat26DGyO.evaluateOnce = function () {
            var hs_sat26DGyN = new $hs.Func(1);
            hs_sat26DGyN.evaluate = function (hs_ds26DGi7) {
                var hs_fail26DGi6 = new $hs.Func(1);
                hs_fail26DGi6.evaluate = function (hs_ds126DGi5) {
                    var hs_sat26DGya = new $hs.Thunk();
                    hs_sat26DGya.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                    };
                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGya);
                };
                var hs_wild26DGyb = hs_ds26DGi7;
                if (hs_ds26DGi7.notEvaluated) {
                    hs_wild26DGyb = hs_ds26DGi7.hscall();
                }
                switch (hs_wild26DGyb.tag) {
                case 4:
                    var hs_ds126DGia = hs_wild26DGyb.data[0];
                    var hs_sat26DGyd = new $hs.Thunk();
                    hs_sat26DGyd.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("All\x00");
                    };
                    var hs_wild126DGyc = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126DGia, hs_sat26DGyd);
                    switch (hs_wild126DGyc.tag) {
                    case 1:
                        return hs_fail26DGi6.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    case 2:
                        var hs_sat26DGyM = new $hs.Func(1);
                        hs_sat26DGyM.evaluate = function (hs_ds226DGij) {
                            var hs_fail126DGii = new $hs.Func(1);
                            hs_fail126DGii.evaluate = function (hs_ds326DGih) {
                                var hs_sat26DGye = new $hs.Thunk();
                                hs_sat26DGye.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                };
                                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGye);
                            };
                            var hs_wild226DGyf = hs_ds226DGij;
                            if (hs_ds226DGij.notEvaluated) {
                                hs_wild226DGyf = hs_ds226DGij.hscall();
                            }
                            switch (hs_wild226DGyf.tag) {
                            case 3:
                                var hs_ds326DGim = hs_wild226DGyf.data[0];
                                var hs_wild326DGyg = hs_ds326DGim;
                                if (hs_ds326DGim.notEvaluated) {
                                    hs_wild326DGyg = hs_ds326DGim.hscall();
                                }
                                switch (hs_wild326DGyg.tag) {
                                case 1:
                                    return hs_fail126DGii.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                case 2:
                                    var hs_ds426DGiq = hs_wild326DGyg.data[0];
                                    var hs_ds526DGiv = hs_wild326DGyg.data[1];
                                    var hs_wild426DGyi = hs_ds426DGiq;
                                    if (hs_ds426DGiq.notEvaluated) {
                                        hs_wild426DGyi = hs_ds426DGiq.hscall();
                                    }
                                    var hs_ds626DGit = hs_wild426DGyi.data[0];
                                    var hs_ds726DGyh = hs_ds626DGit;
                                    if (hs_ds626DGit.notEvaluated) {
                                        hs_ds726DGyh = hs_ds626DGit.hscall();
                                    }
                                    switch (hs_ds726DGyh) {
                                    case "{":
                                        var hs_wild526DGyj = hs_ds526DGiv;
                                        if (hs_ds526DGiv.notEvaluated) {
                                            hs_wild526DGyj = hs_ds526DGiv.hscall();
                                        }
                                        switch (hs_wild526DGyj.tag) {
                                        case 1:
                                            var hs_sat26DGyJ = new $hs.Func(1);
                                            hs_sat26DGyJ.evaluate = function (hs_ds826DGiD) {
                                                var hs_fail226DGiC = new $hs.Func(1);
                                                hs_fail226DGiC.evaluate = function (hs_ds926DGiB) {
                                                    var hs_sat26DGyk = new $hs.Thunk();
                                                    hs_sat26DGyk.evaluateOnce = function () {
                                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                    };
                                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGyk);
                                                };
                                                var hs_wild626DGyl = hs_ds826DGiD;
                                                if (hs_ds826DGiD.notEvaluated) {
                                                    hs_wild626DGyl = hs_ds826DGiD.hscall();
                                                }
                                                switch (hs_wild626DGyl.tag) {
                                                case 4:
                                                    var hs_ds926DGiG = hs_wild626DGyl.data[0];
                                                    var hs_sat26DGyn = new $hs.Thunk();
                                                    hs_sat26DGyn.evaluateOnce = function () {
                                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("getAll\x00");
                                                    };
                                                    var hs_wild726DGym = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds926DGiG, hs_sat26DGyn);
                                                    switch (hs_wild726DGym.tag) {
                                                    case 1:
                                                        return hs_fail226DGiC.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                    case 2:
                                                        var hs_sat26DGyI = new $hs.Func(1);
                                                        hs_sat26DGyI.evaluate = function (hs_ds1026DGiP) {
                                                            var hs_fail326DGiO = new $hs.Func(1);
                                                            hs_fail326DGiO.evaluate = function (hs_ds1126DGiN) {
                                                                var hs_sat26DGyo = new $hs.Thunk();
                                                                hs_sat26DGyo.evaluateOnce = function () {
                                                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                };
                                                                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGyo);
                                                            };
                                                            var hs_wild826DGyp = hs_ds1026DGiP;
                                                            if (hs_ds1026DGiP.notEvaluated) {
                                                                hs_wild826DGyp = hs_ds1026DGiP.hscall();
                                                            }
                                                            switch (hs_wild826DGyp.tag) {
                                                            case 3:
                                                                var hs_ds1126DGiS = hs_wild826DGyp.data[0];
                                                                var hs_wild926DGyq = hs_ds1126DGiS;
                                                                if (hs_ds1126DGiS.notEvaluated) {
                                                                    hs_wild926DGyq = hs_ds1126DGiS.hscall();
                                                                }
                                                                switch (hs_wild926DGyq.tag) {
                                                                case 1:
                                                                    return hs_fail326DGiO.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                case 2:
                                                                    var hs_ds1226DGiW = hs_wild926DGyq.data[0];
                                                                    var hs_ds1326DGj1 = hs_wild926DGyq.data[1];
                                                                    var hs_wild1026DGys = hs_ds1226DGiW;
                                                                    if (hs_ds1226DGiW.notEvaluated) {
                                                                        hs_wild1026DGys = hs_ds1226DGiW.hscall();
                                                                    }
                                                                    var hs_ds1426DGiZ = hs_wild1026DGys.data[0];
                                                                    var hs_ds1526DGyr = hs_ds1426DGiZ;
                                                                    if (hs_ds1426DGiZ.notEvaluated) {
                                                                        hs_ds1526DGyr = hs_ds1426DGiZ.hscall();
                                                                    }
                                                                    switch (hs_ds1526DGyr) {
                                                                    case "=":
                                                                        var hs_wild1126DGyt = hs_ds1326DGj1;
                                                                        if (hs_ds1326DGj1.notEvaluated) {
                                                                            hs_wild1126DGyt = hs_ds1326DGj1.hscall();
                                                                        }
                                                                        switch (hs_wild1126DGyt.tag) {
                                                                        case 1:
                                                                            var hs_sat26DGyD = new $hs.Func(1);
                                                                            hs_sat26DGyD.evaluate = function (hs_a9026DGjq) {
                                                                                var hs_sat26DGyC = new $hs.Func(1);
                                                                                hs_sat26DGyC.evaluate = function (hs_ds1626DGjc) {
                                                                                    var hs_fail426DGjb = new $hs.Func(1);
                                                                                    hs_fail426DGjb.evaluate = function (hs_ds1726DGja) {
                                                                                        var hs_sat26DGyu = new $hs.Thunk();
                                                                                        hs_sat26DGyu.evaluateOnce = function () {
                                                                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                                        };
                                                                                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGyu);
                                                                                    };
                                                                                    var hs_wild1226DGyv = hs_ds1626DGjc;
                                                                                    if (hs_ds1626DGjc.notEvaluated) {
                                                                                        hs_wild1226DGyv = hs_ds1626DGjc.hscall();
                                                                                    }
                                                                                    switch (hs_wild1226DGyv.tag) {
                                                                                    case 3:
                                                                                        var hs_ds1726DGjf = hs_wild1226DGyv.data[0];
                                                                                        var hs_wild1326DGyw = hs_ds1726DGjf;
                                                                                        if (hs_ds1726DGjf.notEvaluated) {
                                                                                            hs_wild1326DGyw = hs_ds1726DGjf.hscall();
                                                                                        }
                                                                                        switch (hs_wild1326DGyw.tag) {
                                                                                        case 1:
                                                                                            return hs_fail426DGjb.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                        case 2:
                                                                                            var hs_ds1826DGjj = hs_wild1326DGyw.data[0];
                                                                                            var hs_ds1926DGjo = hs_wild1326DGyw.data[1];
                                                                                            var hs_wild1426DGyy = hs_ds1826DGjj;
                                                                                            if (hs_ds1826DGjj.notEvaluated) {
                                                                                                hs_wild1426DGyy = hs_ds1826DGjj.hscall();
                                                                                            }
                                                                                            var hs_ds2026DGjm = hs_wild1426DGyy.data[0];
                                                                                            var hs_ds2126DGyx = hs_ds2026DGjm;
                                                                                            if (hs_ds2026DGjm.notEvaluated) {
                                                                                                hs_ds2126DGyx = hs_ds2026DGjm.hscall();
                                                                                            }
                                                                                            switch (hs_ds2126DGyx) {
                                                                                            case "}":
                                                                                                var hs_wild1526DGyz = hs_ds1926DGjo;
                                                                                                if (hs_ds1926DGjo.notEvaluated) {
                                                                                                    hs_wild1526DGyz = hs_ds1926DGjo.hscall();
                                                                                                }
                                                                                                switch (hs_wild1526DGyz.tag) {
                                                                                                case 1:
                                                                                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_a9026DGjq);
                                                                                                case 2:
                                                                                                    return hs_fail426DGjb.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                }
                                                                                            default:
                                                                                                return hs_fail426DGjb.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                            }
                                                                                        }
                                                                                    default:
                                                                                        return hs_fail426DGjb.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                    }
                                                                                };
                                                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGyC);
                                                                            };
                                                                            var hs_sat26DGyF = new $hs.Thunk();
                                                                            hs_sat26DGyF.evaluateOnce = function () {
                                                                                var hs_sat26DGyE = new $hs.Thunk();
                                                                                hs_sat26DGyE.evaluateOnce = function () {
                                                                                    return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadBool);
                                                                                };
                                                                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_reset.hscall(hs_sat26DGyE);
                                                                            };
                                                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGyF, hs_sat26DGyD);
                                                                        case 2:
                                                                            return hs_fail326DGiO.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                        }
                                                                    default:
                                                                        return hs_fail326DGiO.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                    }
                                                                }
                                                            default:
                                                                return hs_fail326DGiO.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                            }
                                                        };
                                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGyI);
                                                    }
                                                default:
                                                    return hs_fail226DGiC.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                }
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGyJ);
                                        case 2:
                                            return hs_fail126DGii.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                        }
                                    default:
                                        return hs_fail126DGii.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                    }
                                }
                            default:
                                return hs_fail126DGii.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGyM);
                    }
                default:
                    return hs_fail26DGi6.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGyN);
        };
        var hs_sat26DGyP = new $hs.Data(1);
        hs_sat26DGyP.data = [11];
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall(hs_sat26DGyP, hs_sat26DGyO);
    };
    hs_zdcreadPrec525vhLJ.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26DGyQ);
    };
    this.hs_zdfReadAll.data = [hs_zdcreadsPrec525vhNu, hs_zdcreadList525vhNs, hs_zdcreadPrec525vhLJ, hs_zdcreadListPrec525vhNq];
    hs_zdcreadListPrec525vhNq.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall($hs.modules.DataziMonoid.hs_zdfReadAll);
    };
    hs_zdcreadList525vhNs.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListDefault.hscall($hs.modules.DataziMonoid.hs_zdfReadAll);
    };
    hs_zdcreadsPrec525vhNu.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall($hs.modules.DataziMonoid.hs_zdfReadAll);
    };
    hs_a7025vhNw.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdccompare525vhNy.evaluateOnce = function () {
        if (hs_a7025vhNw.notEvaluated) {
            return hs_a7025vhNw.hscall();
        } else {
            return hs_a7025vhNw;
        }
    };
    hs_a7125vhNA.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdczl525vhNC.evaluateOnce = function () {
        if (hs_a7125vhNA.notEvaluated) {
            return hs_a7125vhNA.hscall();
        } else {
            return hs_a7125vhNA;
        }
    };
    hs_a7225vhNE.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdczgze525vhNG.evaluateOnce = function () {
        if (hs_a7225vhNE.notEvaluated) {
            return hs_a7225vhNE.hscall();
        } else {
            return hs_a7225vhNE;
        }
    };
    hs_a7325vhNI.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdczg525vhNK.evaluateOnce = function () {
        if (hs_a7325vhNI.notEvaluated) {
            return hs_a7325vhNI.hscall();
        } else {
            return hs_a7325vhNI;
        }
    };
    hs_a7425vhNM.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdczlze525vhNO.evaluateOnce = function () {
        if (hs_a7425vhNM.notEvaluated) {
            return hs_a7425vhNM.hscall();
        } else {
            return hs_a7425vhNM;
        }
    };
    hs_a7525vhNQ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdcmax525vhNS.evaluateOnce = function () {
        if (hs_a7525vhNQ.notEvaluated) {
            return hs_a7525vhNQ.hscall();
        } else {
            return hs_a7525vhNQ;
        }
    };
    hs_a7625vhNU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziClasses.hs_zdfOrdBool);
    };
    hs_zdcmin525vhNW.evaluateOnce = function () {
        if (hs_a7625vhNU.notEvaluated) {
            return hs_a7625vhNU.hscall();
        } else {
            return hs_a7625vhNU;
        }
    };
    hs_a7725vhNY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqBool);
    };
    hs_zdczeze525vhO0.evaluateOnce = function () {
        if (hs_a7725vhNY.notEvaluated) {
            return hs_a7725vhNY.hscall();
        } else {
            return hs_a7725vhNY;
        }
    };
    hs_a7825vhO2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqBool);
    };
    hs_zdczsze525vhO4.evaluateOnce = function () {
        if (hs_a7825vhO2.notEvaluated) {
            return hs_a7825vhO2.hscall();
        } else {
            return hs_a7825vhO2;
        }
    };
    this.hs_zdfEqAll.data = [hs_a7725vhNY, hs_a7825vhO2];
    this.hs_zdfOrdAll.data = [$hs.modules.DataziMonoid.hs_zdfEqAll, hs_a7025vhNw, hs_a7125vhNA, hs_a7225vhNE, hs_a7325vhNI, hs_a7425vhNM, hs_a7525vhNQ, hs_a7625vhNU];
    hs_a7925vhO6.evaluate = function (hs_zddBounded26DGko) {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26DGko);
    };
    hs_zdcmaxBound425vhOa.evaluate = function (hs_eta1cW6l3) {
        return hs_a7925vhO6.hscall(hs_eta1cW6l3);
    };
    hs_a8025vhOc.evaluate = function (hs_zddBounded26DGku) {
        return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26DGku);
    };
    hs_zdcminBound425vhOg.evaluate = function (hs_eta1cW6l3) {
        return hs_a8025vhOc.hscall(hs_eta1cW6l3);
    };
    this.hs_zdfBoundedDual.evaluate = function (hs_zddBounded26DGky) {
        var hs_sat26DGyR = new $hs.Thunk();
        hs_sat26DGyR.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26DGky);
        };
        var hs_sat26DGyS = new $hs.Thunk();
        hs_sat26DGyS.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26DGky);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGyS, hs_sat26DGyR];
        return $res;
    };
    hs_zdcshowsPrec625vhOm.evaluate = function (hs_zddShow26DGkN, hs_a9026DGkG, hs_ds26DGkP) {
        var hs_sat26DGz4 = new $hs.Thunk();
        hs_sat26DGz4.evaluateOnce = function () {
            var hs_sat26DGz1 = new $hs.Thunk();
            hs_sat26DGz1.evaluateOnce = function () {
                var hs_sat26DGyY = new $hs.Thunk();
                hs_sat26DGyY.evaluateOnce = function () {
                    var hs_sat26DGyV = new $hs.Thunk();
                    hs_sat26DGyV.evaluateOnce = function () {
                        var hs_sat26DGyT = new $hs.Data(1);
                        hs_sat26DGyT.data = ["}"];
                        var hs_sat26DGyU = new $hs.Data(2);
                        hs_sat26DGyU.data = [hs_sat26DGyT, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DGyU);
                    };
                    var hs_sat26DGyX = new $hs.Thunk();
                    hs_sat26DGyX.evaluateOnce = function () {
                        var hs_sat26DGyW = new $hs.Data(1);
                        hs_sat26DGyW.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26DGkN, hs_sat26DGyW, hs_ds26DGkP);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DGyX, hs_sat26DGyV);
                };
                var hs_sat26DGz0 = new $hs.Thunk();
                hs_sat26DGz0.evaluateOnce = function () {
                    var hs_sat26DGyZ = new $hs.Thunk();
                    hs_sat26DGyZ.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("getDual = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DGyZ);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DGz0, hs_sat26DGyY);
            };
            var hs_sat26DGz3 = new $hs.Thunk();
            hs_sat26DGz3.evaluateOnce = function () {
                var hs_sat26DGz2 = new $hs.Thunk();
                hs_sat26DGz2.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Dual {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DGz2);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DGz3, hs_sat26DGz1);
        };
        var hs_sat26DGz6 = new $hs.Thunk();
        hs_sat26DGz6.evaluateOnce = function () {
            var hs_sat26DGz5 = new $hs.Data(1);
            hs_sat26DGz5.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a9026DGkG, hs_sat26DGz5);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DGz6, hs_sat26DGz4);
    };
    this.hs_zdfShowDual.evaluate = function (hs_zddShow26DGl2) {
        var hs_sat26DGz7 = new $hs.Thunk();
        hs_sat26DGz7.evaluateOnce = function () {
            return hs_zdcshowList625vhOI.hscall(hs_zddShow26DGl2);
        };
        var hs_sat26DGz8 = new $hs.Thunk();
        hs_sat26DGz8.evaluateOnce = function () {
            return hs_zdcshow625vhOK.hscall(hs_zddShow26DGl2);
        };
        var hs_sat26DGz9 = new $hs.Func(2);
        hs_sat26DGz9.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec625vhOm.hscall(hs_zddShow26DGl2, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGz9, hs_sat26DGz8, hs_sat26DGz7];
        return $res;
    };
    hs_zdcshowList625vhOI.evaluate = function (hs_zddShow26DGl7) {
        var hs_sat26DGzc = new $hs.Thunk();
        hs_sat26DGzc.evaluateOnce = function () {
            var hs_sat26DGza = new $hs.Data(1);
            hs_sat26DGza.data = [0];
            var hs_sat26DGzb = $hs.modules.DataziMonoid.hs_zdfShowDual.hscall(hs_zddShow26DGl7);
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_sat26DGzb, hs_sat26DGza);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DGzc);
    };
    hs_zdcshow625vhOK.evaluate = function (hs_zddShow26DGlc) {
        var hs_sat26DGzd = new $hs.Thunk();
        hs_sat26DGzd.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfShowDual.hscall(hs_zddShow26DGlc);
        };
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_sat26DGzd);
    };
    hs_zdcreadPrec625vhOZ.evaluate = function (hs_zddRead26DGmk) {
        var hs_sat26DGzU = new $hs.Thunk();
        hs_sat26DGzU.evaluateOnce = function () {
            var hs_sat26DGzS = new $hs.Thunk();
            hs_sat26DGzS.evaluateOnce = function () {
                var hs_sat26DGzR = new $hs.Func(1);
                hs_sat26DGzR.evaluate = function (hs_ds26DGlo) {
                    var hs_fail26DGln = new $hs.Func(1);
                    hs_fail26DGln.evaluate = function (hs_ds126DGlm) {
                        var hs_sat26DGze = new $hs.Thunk();
                        hs_sat26DGze.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGze);
                    };
                    var hs_wild26DGzf = hs_ds26DGlo;
                    if (hs_ds26DGlo.notEvaluated) {
                        hs_wild26DGzf = hs_ds26DGlo.hscall();
                    }
                    switch (hs_wild26DGzf.tag) {
                    case 4:
                        var hs_ds126DGlr = hs_wild26DGzf.data[0];
                        var hs_sat26DGzh = new $hs.Thunk();
                        hs_sat26DGzh.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Dual\x00");
                        };
                        var hs_wild126DGzg = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126DGlr, hs_sat26DGzh);
                        switch (hs_wild126DGzg.tag) {
                        case 1:
                            return hs_fail26DGln.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        case 2:
                            var hs_sat26DGzQ = new $hs.Func(1);
                            hs_sat26DGzQ.evaluate = function (hs_ds226DGlA) {
                                var hs_fail126DGlz = new $hs.Func(1);
                                hs_fail126DGlz.evaluate = function (hs_ds326DGly) {
                                    var hs_sat26DGzi = new $hs.Thunk();
                                    hs_sat26DGzi.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                    };
                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGzi);
                                };
                                var hs_wild226DGzj = hs_ds226DGlA;
                                if (hs_ds226DGlA.notEvaluated) {
                                    hs_wild226DGzj = hs_ds226DGlA.hscall();
                                }
                                switch (hs_wild226DGzj.tag) {
                                case 3:
                                    var hs_ds326DGlD = hs_wild226DGzj.data[0];
                                    var hs_wild326DGzk = hs_ds326DGlD;
                                    if (hs_ds326DGlD.notEvaluated) {
                                        hs_wild326DGzk = hs_ds326DGlD.hscall();
                                    }
                                    switch (hs_wild326DGzk.tag) {
                                    case 1:
                                        return hs_fail126DGlz.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                    case 2:
                                        var hs_ds426DGlH = hs_wild326DGzk.data[0];
                                        var hs_ds526DGlM = hs_wild326DGzk.data[1];
                                        var hs_wild426DGzm = hs_ds426DGlH;
                                        if (hs_ds426DGlH.notEvaluated) {
                                            hs_wild426DGzm = hs_ds426DGlH.hscall();
                                        }
                                        var hs_ds626DGlK = hs_wild426DGzm.data[0];
                                        var hs_ds726DGzl = hs_ds626DGlK;
                                        if (hs_ds626DGlK.notEvaluated) {
                                            hs_ds726DGzl = hs_ds626DGlK.hscall();
                                        }
                                        switch (hs_ds726DGzl) {
                                        case "{":
                                            var hs_wild526DGzn = hs_ds526DGlM;
                                            if (hs_ds526DGlM.notEvaluated) {
                                                hs_wild526DGzn = hs_ds526DGlM.hscall();
                                            }
                                            switch (hs_wild526DGzn.tag) {
                                            case 1:
                                                var hs_sat26DGzN = new $hs.Func(1);
                                                hs_sat26DGzN.evaluate = function (hs_ds826DGlU) {
                                                    var hs_fail226DGlT = new $hs.Func(1);
                                                    hs_fail226DGlT.evaluate = function (hs_ds926DGlS) {
                                                        var hs_sat26DGzo = new $hs.Thunk();
                                                        hs_sat26DGzo.evaluateOnce = function () {
                                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                        };
                                                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGzo);
                                                    };
                                                    var hs_wild626DGzp = hs_ds826DGlU;
                                                    if (hs_ds826DGlU.notEvaluated) {
                                                        hs_wild626DGzp = hs_ds826DGlU.hscall();
                                                    }
                                                    switch (hs_wild626DGzp.tag) {
                                                    case 4:
                                                        var hs_ds926DGlX = hs_wild626DGzp.data[0];
                                                        var hs_sat26DGzr = new $hs.Thunk();
                                                        hs_sat26DGzr.evaluateOnce = function () {
                                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("getDual\x00");
                                                        };
                                                        var hs_wild726DGzq = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds926DGlX, hs_sat26DGzr);
                                                        switch (hs_wild726DGzq.tag) {
                                                        case 1:
                                                            return hs_fail226DGlT.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                        case 2:
                                                            var hs_sat26DGzM = new $hs.Func(1);
                                                            hs_sat26DGzM.evaluate = function (hs_ds1026DGm6) {
                                                                var hs_fail326DGm5 = new $hs.Func(1);
                                                                hs_fail326DGm5.evaluate = function (hs_ds1126DGm4) {
                                                                    var hs_sat26DGzs = new $hs.Thunk();
                                                                    hs_sat26DGzs.evaluateOnce = function () {
                                                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                    };
                                                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGzs);
                                                                };
                                                                var hs_wild826DGzt = hs_ds1026DGm6;
                                                                if (hs_ds1026DGm6.notEvaluated) {
                                                                    hs_wild826DGzt = hs_ds1026DGm6.hscall();
                                                                }
                                                                switch (hs_wild826DGzt.tag) {
                                                                case 3:
                                                                    var hs_ds1126DGm9 = hs_wild826DGzt.data[0];
                                                                    var hs_wild926DGzu = hs_ds1126DGm9;
                                                                    if (hs_ds1126DGm9.notEvaluated) {
                                                                        hs_wild926DGzu = hs_ds1126DGm9.hscall();
                                                                    }
                                                                    switch (hs_wild926DGzu.tag) {
                                                                    case 1:
                                                                        return hs_fail326DGm5.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                    case 2:
                                                                        var hs_ds1226DGmd = hs_wild926DGzu.data[0];
                                                                        var hs_ds1326DGmi = hs_wild926DGzu.data[1];
                                                                        var hs_wild1026DGzw = hs_ds1226DGmd;
                                                                        if (hs_ds1226DGmd.notEvaluated) {
                                                                            hs_wild1026DGzw = hs_ds1226DGmd.hscall();
                                                                        }
                                                                        var hs_ds1426DGmg = hs_wild1026DGzw.data[0];
                                                                        var hs_ds1526DGzv = hs_ds1426DGmg;
                                                                        if (hs_ds1426DGmg.notEvaluated) {
                                                                            hs_ds1526DGzv = hs_ds1426DGmg.hscall();
                                                                        }
                                                                        switch (hs_ds1526DGzv) {
                                                                        case "=":
                                                                            var hs_wild1126DGzx = hs_ds1326DGmi;
                                                                            if (hs_ds1326DGmi.notEvaluated) {
                                                                                hs_wild1126DGzx = hs_ds1326DGmi.hscall();
                                                                            }
                                                                            switch (hs_wild1126DGzx.tag) {
                                                                            case 1:
                                                                                var hs_sat26DGzH = new $hs.Func(1);
                                                                                hs_sat26DGzH.evaluate = function (hs_a9026DGmI) {
                                                                                    var hs_sat26DGzG = new $hs.Func(1);
                                                                                    hs_sat26DGzG.evaluate = function (hs_ds1626DGmu) {
                                                                                        var hs_fail426DGmt = new $hs.Func(1);
                                                                                        hs_fail426DGmt.evaluate = function (hs_ds1726DGms) {
                                                                                            var hs_sat26DGzy = new $hs.Thunk();
                                                                                            hs_sat26DGzy.evaluateOnce = function () {
                                                                                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                                                                                            };
                                                                                            return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGzy);
                                                                                        };
                                                                                        var hs_wild1226DGzz = hs_ds1626DGmu;
                                                                                        if (hs_ds1626DGmu.notEvaluated) {
                                                                                            hs_wild1226DGzz = hs_ds1626DGmu.hscall();
                                                                                        }
                                                                                        switch (hs_wild1226DGzz.tag) {
                                                                                        case 3:
                                                                                            var hs_ds1726DGmx = hs_wild1226DGzz.data[0];
                                                                                            var hs_wild1326DGzA = hs_ds1726DGmx;
                                                                                            if (hs_ds1726DGmx.notEvaluated) {
                                                                                                hs_wild1326DGzA = hs_ds1726DGmx.hscall();
                                                                                            }
                                                                                            switch (hs_wild1326DGzA.tag) {
                                                                                            case 1:
                                                                                                return hs_fail426DGmt.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                            case 2:
                                                                                                var hs_ds1826DGmB = hs_wild1326DGzA.data[0];
                                                                                                var hs_ds1926DGmG = hs_wild1326DGzA.data[1];
                                                                                                var hs_wild1426DGzC = hs_ds1826DGmB;
                                                                                                if (hs_ds1826DGmB.notEvaluated) {
                                                                                                    hs_wild1426DGzC = hs_ds1826DGmB.hscall();
                                                                                                }
                                                                                                var hs_ds2026DGmE = hs_wild1426DGzC.data[0];
                                                                                                var hs_ds2126DGzB = hs_ds2026DGmE;
                                                                                                if (hs_ds2026DGmE.notEvaluated) {
                                                                                                    hs_ds2126DGzB = hs_ds2026DGmE.hscall();
                                                                                                }
                                                                                                switch (hs_ds2126DGzB) {
                                                                                                case "}":
                                                                                                    var hs_wild1526DGzD = hs_ds1926DGmG;
                                                                                                    if (hs_ds1926DGmG.notEvaluated) {
                                                                                                        hs_wild1526DGzD = hs_ds1926DGmG.hscall();
                                                                                                    }
                                                                                                    switch (hs_wild1526DGzD.tag) {
                                                                                                    case 1:
                                                                                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_a9026DGmI);
                                                                                                    case 2:
                                                                                                        return hs_fail426DGmt.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                    }
                                                                                                default:
                                                                                                    return hs_fail426DGmt.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                                }
                                                                                            }
                                                                                        default:
                                                                                            return hs_fail426DGmt.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                                        }
                                                                                    };
                                                                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGzG);
                                                                                };
                                                                                var hs_sat26DGzJ = new $hs.Thunk();
                                                                                hs_sat26DGzJ.evaluateOnce = function () {
                                                                                    var hs_sat26DGzI = new $hs.Thunk();
                                                                                    hs_sat26DGzI.evaluateOnce = function () {
                                                                                        return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26DGmk);
                                                                                    };
                                                                                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_reset.hscall(hs_sat26DGzI);
                                                                                };
                                                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DGzJ, hs_sat26DGzH);
                                                                            case 2:
                                                                                return hs_fail326DGm5.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                            }
                                                                        default:
                                                                            return hs_fail326DGm5.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                        }
                                                                    }
                                                                default:
                                                                    return hs_fail326DGm5.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                                }
                                                            };
                                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGzM);
                                                        }
                                                    default:
                                                        return hs_fail226DGlT.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                    }
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGzN);
                                            case 2:
                                                return hs_fail126DGlz.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                            }
                                        default:
                                            return hs_fail126DGlz.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                        }
                                    }
                                default:
                                    return hs_fail126DGlz.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                }
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGzQ);
                        }
                    default:
                        return hs_fail26DGln.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DGzR);
            };
            var hs_sat26DGzT = new $hs.Data(1);
            hs_sat26DGzT.data = [11];
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall(hs_sat26DGzT, hs_sat26DGzS);
        };
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26DGzU);
    };
    this.hs_zdfReadDual.evaluate = function (hs_zddRead26DGn4) {
        var hs_sat26DGzV = new $hs.Thunk();
        hs_sat26DGzV.evaluateOnce = function () {
            return hs_zdcreadListPrec625vhQI.hscall(hs_zddRead26DGn4);
        };
        var hs_sat26DGzW = new $hs.Thunk();
        hs_sat26DGzW.evaluateOnce = function () {
            return hs_zdcreadPrec625vhOZ.hscall(hs_zddRead26DGn4);
        };
        var hs_sat26DGzX = new $hs.Thunk();
        hs_sat26DGzX.evaluateOnce = function () {
            return hs_zdcreadList625vhQK.hscall(hs_zddRead26DGn4);
        };
        var hs_sat26DGzY = new $hs.Thunk();
        hs_sat26DGzY.evaluateOnce = function () {
            return hs_zdcreadsPrec625vhQM.hscall(hs_zddRead26DGn4);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGzY, hs_sat26DGzX, hs_sat26DGzW, hs_sat26DGzV];
        return $res;
    };
    hs_zdcreadListPrec625vhQI.evaluate = function (hs_zddRead26DGna) {
        var hs_sat26DGzZ = new $hs.Thunk();
        hs_sat26DGzZ.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadDual.hscall(hs_zddRead26DGna);
        };
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall(hs_sat26DGzZ);
    };
    hs_zdcreadList625vhQK.evaluate = function (hs_zddRead26DGnd) {
        var hs_sat26DGA0 = new $hs.Thunk();
        hs_sat26DGA0.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadDual.hscall(hs_zddRead26DGnd);
        };
        return $hs.modules.GHCziRead.hs_readListDefault.hscall(hs_sat26DGA0);
    };
    hs_zdcreadsPrec625vhQM.evaluate = function (hs_zddRead26DGng) {
        var hs_sat26DGA1 = new $hs.Thunk();
        hs_sat26DGA1.evaluateOnce = function () {
            return $hs.modules.DataziMonoid.hs_zdfReadDual.hscall(hs_zddRead26DGng);
        };
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall(hs_sat26DGA1);
    };
    hs_a8125vhR3.evaluate = function (hs_zddEq26DGnn, hs_zddOrd26DGnm) {
        return $hs.modules.GHCziClasses.hs_min.hscall(hs_zddOrd26DGnm);
    };
    hs_zdcmin625vhR9.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a8125vhR3.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a8225vhRb.evaluate = function (hs_zddEq26DGnv, hs_zddOrd26DGnu) {
        return $hs.modules.GHCziClasses.hs_max.hscall(hs_zddOrd26DGnu);
    };
    hs_zdcmax625vhRh.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a8225vhRb.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a8325vhRj.evaluate = function (hs_zddEq26DGnD, hs_zddOrd26DGnC) {
        return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd26DGnC);
    };
    hs_zdczlze625vhRp.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a8325vhRj.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a8425vhRr.evaluate = function (hs_zddEq26DGnL, hs_zddOrd26DGnK) {
        return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd26DGnK);
    };
    hs_zdczg625vhRx.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a8425vhRr.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a8525vhRz.evaluate = function (hs_zddEq26DGnT, hs_zddOrd26DGnS) {
        return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd26DGnS);
    };
    hs_zdczgze625vhRF.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a8525vhRz.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a8625vhRH.evaluate = function (hs_zddEq26DGo1, hs_zddOrd26DGo0) {
        return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd26DGo0);
    };
    hs_zdczl625vhRN.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a8625vhRH.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a8725vhRP.evaluate = function (hs_zddEq26DGo9, hs_zddOrd26DGo8) {
        return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd26DGo8);
    };
    hs_zdccompare625vhRV.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a8725vhRP.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfOrdDual.evaluate = function (hs_zddEq26DGoe, hs_zddOrd26DGof) {
        var hs_sat26DGA2 = new $hs.Thunk();
        hs_sat26DGA2.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_min.hscall(hs_zddOrd26DGof);
        };
        var hs_sat26DGA3 = new $hs.Thunk();
        hs_sat26DGA3.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_max.hscall(hs_zddOrd26DGof);
        };
        var hs_sat26DGA4 = new $hs.Thunk();
        hs_sat26DGA4.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd26DGof);
        };
        var hs_sat26DGA5 = new $hs.Thunk();
        hs_sat26DGA5.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd26DGof);
        };
        var hs_sat26DGA6 = new $hs.Thunk();
        hs_sat26DGA6.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd26DGof);
        };
        var hs_sat26DGA7 = new $hs.Thunk();
        hs_sat26DGA7.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd26DGof);
        };
        var hs_sat26DGA8 = new $hs.Thunk();
        hs_sat26DGA8.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd26DGof);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq26DGoe, hs_sat26DGA8, hs_sat26DGA7, hs_sat26DGA6, hs_sat26DGA5, hs_sat26DGA4, hs_sat26DGA3, hs_sat26DGA2];
        return $res;
    };
    hs_a8825vhS8.evaluate = function (hs_zddEq26DGoq) {
        return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_zddEq26DGoq);
    };
    hs_zdczsze625vhSc.evaluate = function (hs_eta1cW6l3) {
        return hs_a8825vhS8.hscall(hs_eta1cW6l3);
    };
    hs_a8925vhSe.evaluate = function (hs_zddEq26DGow) {
        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DGow);
    };
    hs_zdczeze625vhSi.evaluate = function (hs_eta1cW6l3) {
        return hs_a8925vhSe.hscall(hs_eta1cW6l3);
    };
    this.hs_zdfEqDual.evaluate = function (hs_zddEq26DGoA) {
        var hs_sat26DGA9 = new $hs.Thunk();
        hs_sat26DGA9.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_zddEq26DGoA);
        };
        var hs_sat26DGAa = new $hs.Thunk();
        hs_sat26DGAa.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DGoA);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DGAa, hs_sat26DGA9];
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
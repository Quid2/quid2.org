
$hs.modules.GHCziIntegerziType = new $hs.Module();
$hs.modules.GHCziIntegerziType.dependencies = [];
$hs.modules.GHCziIntegerziType.initBeforeDependencies = function () {
    this.hs_zdWSome = new $hs.Func(2);
    this.hs_zdWPositive = new $hs.Func(1);
    this.hs_zdWNegative = new $hs.Func(1);
    this.hs_Nil = new $hs.Data(1);
    this.hs_Cons = new $hs.Func(2);
    this.hs_Some = new $hs.Func(2);
    this.hs_None = new $hs.Data(2);
    this.hs_Positive = new $hs.Func(1);
    this.hs_Negative = new $hs.Func(1);
    this.hs_Naught = new $hs.Data(3);
    this.hs_zdWSome.notEvaluated = true;
    this.hs_zdWSome.evaluate = function (hs_tpl26zuBk, hs_tpl26zuBi) {
        $hs.modules.GHCziIntegerziType.loadDependencies();
        return this.evaluate(hs_tpl26zuBk, hs_tpl26zuBi);
    };
    this.hs_zdWPositive.notEvaluated = true;
    this.hs_zdWPositive.evaluate = function (hs_tpl26zuBn) {
        $hs.modules.GHCziIntegerziType.loadDependencies();
        return this.evaluate(hs_tpl26zuBn);
    };
    this.hs_zdWNegative.notEvaluated = true;
    this.hs_zdWNegative.evaluate = function (hs_tpl26zuBr) {
        $hs.modules.GHCziIntegerziType.loadDependencies();
        return this.evaluate(hs_tpl26zuBr);
    };
    this.hs_Nil.notEvaluated = true;
    this.hs_Nil.evaluate = function () {
        $hs.modules.GHCziIntegerziType.loadDependencies();
        return this;
    };
    this.hs_Cons.notEvaluated = true;
    this.hs_Cons.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziIntegerziType.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_Some.notEvaluated = true;
    this.hs_Some.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziIntegerziType.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_None.notEvaluated = true;
    this.hs_None.evaluate = function () {
        $hs.modules.GHCziIntegerziType.loadDependencies();
        return this;
    };
    this.hs_Positive.notEvaluated = true;
    this.hs_Positive.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziIntegerziType.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Negative.notEvaluated = true;
    this.hs_Negative.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziIntegerziType.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Naught.notEvaluated = true;
    this.hs_Naught.evaluate = function () {
        $hs.modules.GHCziIntegerziType.loadDependencies();
        return this;
    };
};
$hs.modules.GHCziIntegerziType.initAfterDependencies = function () {
    this.hs_zdWSome.notEvaluated = false;
    this.hs_zdWPositive.notEvaluated = false;
    this.hs_zdWNegative.notEvaluated = false;
    this.hs_Nil.notEvaluated = false;
    this.hs_Nil.evaluate = function () {
        return this;
    };
    this.hs_Cons.notEvaluated = false;
    this.hs_Some.notEvaluated = false;
    this.hs_None.notEvaluated = false;
    this.hs_None.evaluate = function () {
        return this;
    };
    this.hs_Positive.notEvaluated = false;
    this.hs_Negative.notEvaluated = false;
    this.hs_Naught.notEvaluated = false;
    this.hs_Naught.evaluate = function () {
        return this;
    };
    this.hs_zdWSome.evaluate = function (hs_tpl26zuBk, hs_tpl26zuBi) {
        var hs_tpl26zuBl = hs_tpl26zuBi;
        if (hs_tpl26zuBi.notEvaluated) {
            hs_tpl26zuBl = hs_tpl26zuBi.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26zuBk, hs_tpl26zuBl];
        return $res;
    };
    this.hs_zdWPositive.evaluate = function (hs_tpl26zuBn) {
        var hs_tpl26zuBp = hs_tpl26zuBn;
        if (hs_tpl26zuBn.notEvaluated) {
            hs_tpl26zuBp = hs_tpl26zuBn.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26zuBp];
        return $res;
    };
    this.hs_zdWNegative.evaluate = function (hs_tpl26zuBr) {
        var hs_tpl26zuBt = hs_tpl26zuBr;
        if (hs_tpl26zuBr.notEvaluated) {
            hs_tpl26zuBt = hs_tpl26zuBr.hscall();
        }
        var $res = new $hs.Data(2);
        $res.data = [hs_tpl26zuBt];
        return $res;
    };
    this.hs_Nil.data = [];
    this.hs_Cons.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(2);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_Some.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_None.data = [];
    this.hs_Positive.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_Negative.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(2);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_Naught.data = [];
};
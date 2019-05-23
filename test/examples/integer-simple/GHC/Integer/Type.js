
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
    this.hs_zdWSome.evaluate = function (hs_tpl26zxhn, hs_tpl26zxhl) {
        $hs.modules.GHCziIntegerziType.loadDependencies();
        return this.evaluate(hs_tpl26zxhn, hs_tpl26zxhl);
    };
    this.hs_zdWPositive.notEvaluated = true;
    this.hs_zdWPositive.evaluate = function (hs_tpl26zxhq) {
        $hs.modules.GHCziIntegerziType.loadDependencies();
        return this.evaluate(hs_tpl26zxhq);
    };
    this.hs_zdWNegative.notEvaluated = true;
    this.hs_zdWNegative.evaluate = function (hs_tpl26zxhu) {
        $hs.modules.GHCziIntegerziType.loadDependencies();
        return this.evaluate(hs_tpl26zxhu);
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
    this.hs_zdWSome.evaluate = function (hs_tpl26zxhn, hs_tpl26zxhl) {
        var hs_tpl26zxho = hs_tpl26zxhl;
        if (hs_tpl26zxhl.notEvaluated) {
            hs_tpl26zxho = hs_tpl26zxhl.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26zxhn, hs_tpl26zxho];
        return $res;
    };
    this.hs_zdWPositive.evaluate = function (hs_tpl26zxhq) {
        var hs_tpl26zxhs = hs_tpl26zxhq;
        if (hs_tpl26zxhq.notEvaluated) {
            hs_tpl26zxhs = hs_tpl26zxhq.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26zxhs];
        return $res;
    };
    this.hs_zdWNegative.evaluate = function (hs_tpl26zxhu) {
        var hs_tpl26zxhw = hs_tpl26zxhu;
        if (hs_tpl26zxhu.notEvaluated) {
            hs_tpl26zxhw = hs_tpl26zxhu.hscall();
        }
        var $res = new $hs.Data(2);
        $res.data = [hs_tpl26zxhw];
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
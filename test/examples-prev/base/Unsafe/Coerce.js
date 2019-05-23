
$hs.modules.UnsafeziCoerce = new $hs.Module();
$hs.modules.UnsafeziCoerce.dependencies = [];
$hs.modules.UnsafeziCoerce.initBeforeDependencies = function () {
    this.hs_unsafeCoerce = new $hs.Func(1);
    this.hs_unsafeCoerce.notEvaluated = true;
    this.hs_unsafeCoerce.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.UnsafeziCoerce.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.UnsafeziCoerce.initAfterDependencies = function () {
    this.hs_unsafeCoerce.notEvaluated = false;
    var hs_a25vsg1 = new $hs.Func(1);
    hs_a25vsg1.evaluate = function (hs_tpl26DQMj) {
        if (hs_tpl26DQMj.notEvaluated) {
            return hs_tpl26DQMj.hscall();
        } else {
            return hs_tpl26DQMj;
        }
    };
    this.hs_unsafeCoerce.evaluate = function (hs_eta1cW6l3) {
        return hs_a25vsg1.hscall(hs_eta1cW6l3);
    };
};
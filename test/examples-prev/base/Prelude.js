
$hs.modules.Prelude = new $hs.Module();
$hs.modules.Prelude.dependencies = [];
$hs.modules.Prelude.initBeforeDependencies = function () {
    this.hs_zdzn = new $hs.Func(2);
    this.hs_zdzn.notEvaluated = true;
    this.hs_zdzn.evaluate = function (hs_f26D65u, hs_x26D65r) {
        $hs.modules.Prelude.loadDependencies();
        return this.evaluate(hs_f26D65u, hs_x26D65r);
    };
};
$hs.modules.Prelude.initAfterDependencies = function () {
    this.hs_zdzn.notEvaluated = false;
    this.hs_zdzn.evaluate = function (hs_f26D65u, hs_x26D65r) {
        var hs_vx26D65t = hs_x26D65r;
        if (hs_x26D65r.notEvaluated) {
            hs_vx26D65t = hs_x26D65r.hscall();
        }
        return hs_f26D65u.hscall(hs_vx26D65t);
    };
};
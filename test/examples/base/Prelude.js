
$hs.modules.Prelude = new $hs.Module();
$hs.modules.Prelude.dependencies = [];
$hs.modules.Prelude.initBeforeDependencies = function () {
    this.hs_zdzn = new $hs.Func(2);
    this.hs_zdzn.notEvaluated = true;
    this.hs_zdzn.evaluate = function (hs_f26CGYO, hs_x26CGYL) {
        $hs.modules.Prelude.loadDependencies();
        return this.evaluate(hs_f26CGYO, hs_x26CGYL);
    };
};
$hs.modules.Prelude.initAfterDependencies = function () {
    this.hs_zdzn.notEvaluated = false;
    this.hs_zdzn.evaluate = function (hs_f26CGYO, hs_x26CGYL) {
        var hs_vx26CGYN = hs_x26CGYL;
        if (hs_x26CGYL.notEvaluated) {
            hs_vx26CGYN = hs_x26CGYL.hscall();
        }
        return hs_f26CGYO.hscall(hs_vx26CGYN);
    };
};
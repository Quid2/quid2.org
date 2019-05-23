
$hs.modules.GHCziUnit = new $hs.Module();
$hs.modules.GHCziUnit.dependencies = [];
$hs.modules.GHCziUnit.initBeforeDependencies = function () {
    this.hs_Z0T = new $hs.Data(1);
    this.hs_Z0T.notEvaluated = true;
    this.hs_Z0T.evaluate = function () {
        $hs.modules.GHCziUnit.loadDependencies();
        return this;
    };
};
$hs.modules.GHCziUnit.initAfterDependencies = function () {
    this.hs_Z0T.notEvaluated = false;
    this.hs_Z0T.evaluate = function () {
        return this;
    };
    this.hs_Z0T.data = [];
};
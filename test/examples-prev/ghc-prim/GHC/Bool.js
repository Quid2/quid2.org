
$hs.modules.GHCziBool = new $hs.Module();
$hs.modules.GHCziBool.dependencies = [];
$hs.modules.GHCziBool.initBeforeDependencies = function () {
    this.hs_False = new $hs.Data(1);
    this.hs_True = new $hs.Data(2);
    this.hs_False.notEvaluated = true;
    this.hs_False.evaluate = function () {
        $hs.modules.GHCziBool.loadDependencies();
        return this;
    };
    this.hs_True.notEvaluated = true;
    this.hs_True.evaluate = function () {
        $hs.modules.GHCziBool.loadDependencies();
        return this;
    };
};
$hs.modules.GHCziBool.initAfterDependencies = function () {
    this.hs_False.notEvaluated = false;
    this.hs_False.evaluate = function () {
        return this;
    };
    this.hs_True.notEvaluated = false;
    this.hs_True.evaluate = function () {
        return this;
    };
    this.hs_False.data = [];
    this.hs_True.data = [];
};
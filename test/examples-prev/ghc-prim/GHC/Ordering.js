
$hs.modules.GHCziOrdering = new $hs.Module();
$hs.modules.GHCziOrdering.dependencies = [];
$hs.modules.GHCziOrdering.initBeforeDependencies = function () {
    this.hs_LT = new $hs.Data(1);
    this.hs_EQ = new $hs.Data(2);
    this.hs_GT = new $hs.Data(3);
    this.hs_LT.notEvaluated = true;
    this.hs_LT.evaluate = function () {
        $hs.modules.GHCziOrdering.loadDependencies();
        return this;
    };
    this.hs_EQ.notEvaluated = true;
    this.hs_EQ.evaluate = function () {
        $hs.modules.GHCziOrdering.loadDependencies();
        return this;
    };
    this.hs_GT.notEvaluated = true;
    this.hs_GT.evaluate = function () {
        $hs.modules.GHCziOrdering.loadDependencies();
        return this;
    };
};
$hs.modules.GHCziOrdering.initAfterDependencies = function () {
    this.hs_LT.notEvaluated = false;
    this.hs_LT.evaluate = function () {
        return this;
    };
    this.hs_EQ.notEvaluated = false;
    this.hs_EQ.evaluate = function () {
        return this;
    };
    this.hs_GT.notEvaluated = false;
    this.hs_GT.evaluate = function () {
        return this;
    };
    this.hs_LT.data = [];
    this.hs_EQ.data = [];
    this.hs_GT.data = [];
};

$hs.modules.Test2 = new $hs.Module();
$hs.modules.Test2.dependencies = ["GHC.Integer"];
$hs.modules.Test2.initBeforeDependencies = function () {
    this.hs_one = new $hs.Thunk();
    this.hs_one.evaluateOnce = function () {
        $hs.modules.Test2.loadDependencies();
        return this.evaluateOnce();
    };
};
$hs.modules.Test2.initAfterDependencies = function () {
    this.hs_one.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
    };
};
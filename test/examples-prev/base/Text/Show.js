
$hs.modules.TextziShow = new $hs.Module();
$hs.modules.TextziShow.dependencies = ["GHC.Show"];
$hs.modules.TextziShow.initBeforeDependencies = function () {
    this.hs_showListWith = new $hs.Thunk();
    this.hs_showListWith.evaluateOnce = function () {
        $hs.modules.TextziShow.loadDependencies();
        return this.evaluateOnce();
    };
};
$hs.modules.TextziShow.initAfterDependencies = function () {
    this.hs_showListWith.evaluateOnce = function () {
        if ($hs.modules.GHCziShow.hs_showListzuzu.notEvaluated) {
            return $hs.modules.GHCziShow.hs_showListzuzu.hscall();
        } else {
            return $hs.modules.GHCziShow.hs_showListzuzu;
        }
    };
};
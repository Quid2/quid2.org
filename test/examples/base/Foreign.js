
$hs.modules.Foreign = new $hs.Module();
$hs.modules.Foreign.dependencies = ["GHC.IO"];
$hs.modules.Foreign.initBeforeDependencies = function () {
    this.hs_unsafePerformIO = new $hs.Thunk();
    this.hs_unsafePerformIO.evaluateOnce = function () {
        $hs.modules.Foreign.loadDependencies();
        return this.evaluateOnce();
    };
};
$hs.modules.Foreign.initAfterDependencies = function () {
    this.hs_unsafePerformIO.evaluateOnce = function () {
        if ($hs.modules.GHCziIO.hs_unsafePerformIO.notEvaluated) {
            return $hs.modules.GHCziIO.hs_unsafePerformIO.hscall();
        } else {
            return $hs.modules.GHCziIO.hs_unsafePerformIO;
        }
    };
};
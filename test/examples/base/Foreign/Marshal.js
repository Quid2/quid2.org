
$hs.modules.ForeignziMarshal = new $hs.Module();
$hs.modules.ForeignziMarshal.dependencies = ["GHC.IO"];
$hs.modules.ForeignziMarshal.initBeforeDependencies = function () {
    this.hs_unsafeLocalState = new $hs.Thunk();
    this.hs_unsafeLocalState.evaluateOnce = function () {
        $hs.modules.ForeignziMarshal.loadDependencies();
        return this.evaluateOnce();
    };
};
$hs.modules.ForeignziMarshal.initAfterDependencies = function () {
    this.hs_unsafeLocalState.evaluateOnce = function () {
        if ($hs.modules.GHCziIO.hs_unsafePerformIO.notEvaluated) {
            return $hs.modules.GHCziIO.hs_unsafePerformIO.hscall();
        } else {
            return $hs.modules.GHCziIO.hs_unsafePerformIO;
        }
    };
};
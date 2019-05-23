
$hs.modules.ForeignziForeignPtr = new $hs.Module();
$hs.modules.ForeignziForeignPtr.dependencies = ["GHC.ForeignPtr"];
$hs.modules.ForeignziForeignPtr.initBeforeDependencies = function () {
    this.hs_unsafeForeignPtrToPtr = new $hs.Thunk();
    this.hs_unsafeForeignPtrToPtr.evaluateOnce = function () {
        $hs.modules.ForeignziForeignPtr.loadDependencies();
        return this.evaluateOnce();
    };
};
$hs.modules.ForeignziForeignPtr.initAfterDependencies = function () {
    this.hs_unsafeForeignPtrToPtr.evaluateOnce = function () {
        if ($hs.modules.GHCziForeignPtr.hs_unsafeForeignPtrToPtr.notEvaluated) {
            return $hs.modules.GHCziForeignPtr.hs_unsafeForeignPtrToPtr.hscall();
        } else {
            return $hs.modules.GHCziForeignPtr.hs_unsafeForeignPtrToPtr;
        }
    };
};
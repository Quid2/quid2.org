
$hs.modules.GHCziGenerics = new $hs.Module();
$hs.modules.GHCziGenerics.dependencies = [];
$hs.modules.GHCziGenerics.initBeforeDependencies = function () {
    this.hs_ZCztZC = new $hs.Func(2);
    this.hs_Inl = new $hs.Func(1);
    this.hs_Inr = new $hs.Func(1);
    this.hs_Unit = new $hs.Data(1);
    this.hs_ZCztZC.notEvaluated = true;
    this.hs_ZCztZC.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziGenerics.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_Inl.notEvaluated = true;
    this.hs_Inl.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziGenerics.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Inr.notEvaluated = true;
    this.hs_Inr.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziGenerics.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Unit.notEvaluated = true;
    this.hs_Unit.evaluate = function () {
        $hs.modules.GHCziGenerics.loadDependencies();
        return this;
    };
};
$hs.modules.GHCziGenerics.initAfterDependencies = function () {
    this.hs_ZCztZC.notEvaluated = false;
    this.hs_Inl.notEvaluated = false;
    this.hs_Inr.notEvaluated = false;
    this.hs_Unit.notEvaluated = false;
    this.hs_Unit.evaluate = function () {
        return this;
    };
    this.hs_ZCztZC.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_Inl.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_Inr.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(2);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_Unit.data = [];
};
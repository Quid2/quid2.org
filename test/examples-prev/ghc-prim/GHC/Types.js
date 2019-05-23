
$hs.modules.GHCziTypes = new $hs.Module();
$hs.modules.GHCziTypes.dependencies = [];
$hs.modules.GHCziTypes.initBeforeDependencies = function () {
    this.hs_Czh = new $hs.Func(1);
    this.hs_Dzh = new $hs.Func(1);
    this.hs_Fzh = new $hs.Func(1);
    this.hs_Izh = new $hs.Func(1);
    this.hs_ZMZN = new $hs.Data(1);
    this.hs_ZC = new $hs.Func(2);
    this.hs_IO = new $hs.Func(1);
    this.hs_Czh.notEvaluated = true;
    this.hs_Czh.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Dzh.notEvaluated = true;
    this.hs_Dzh.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Fzh.notEvaluated = true;
    this.hs_Fzh.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Izh.notEvaluated = true;
    this.hs_Izh.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_ZMZN.notEvaluated = true;
    this.hs_ZMZN.evaluate = function () {
        $hs.modules.GHCziTypes.loadDependencies();
        return this;
    };
    this.hs_ZC.notEvaluated = true;
    this.hs_ZC.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_IO.notEvaluated = true;
    this.hs_IO.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.GHCziTypes.initAfterDependencies = function () {
    this.hs_Czh.notEvaluated = false;
    this.hs_Dzh.notEvaluated = false;
    this.hs_Fzh.notEvaluated = false;
    this.hs_Izh.notEvaluated = false;
    this.hs_ZMZN.notEvaluated = false;
    this.hs_ZMZN.evaluate = function () {
        return this;
    };
    this.hs_ZC.notEvaluated = false;
    this.hs_IO.notEvaluated = false;
    this.hs_Czh.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_Dzh.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_Fzh.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_Izh.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_ZMZN.data = [];
    this.hs_ZC.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(2);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_IO.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.GHCziTypes.hs_IO.hscall(hs_eta1cW6l3);
    };
};
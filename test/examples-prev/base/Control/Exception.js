
$hs.modules.ControlziException = new $hs.Module();
$hs.modules.ControlziException.dependencies = ["GHC.Base", "GHC.Exception", "Control.Exception.Base"];
$hs.modules.ControlziException.initBeforeDependencies = function () {
    this.hs_catches = new $hs.Func(2);
    this.hs_Handler = new $hs.Func(2);
    this.hs_catches.notEvaluated = true;
    this.hs_catches.evaluate = function (hs_io26DDy4, hs_handlers26DDyl) {
        $hs.modules.ControlziException.loadDependencies();
        return this.evaluate(hs_io26DDy4, hs_handlers26DDyl);
    };
    this.hs_Handler.notEvaluated = true;
    this.hs_Handler.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.ControlziException.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.ControlziException.initAfterDependencies = function () {
    this.hs_catches.notEvaluated = false;
    this.hs_Handler.notEvaluated = false;
    this.hs_catches.evaluate = function (hs_io26DDy4, hs_handlers26DDyl) {
        var hs_sat26DDyr = new $hs.Func(1);
        hs_sat26DDyr.evaluate = function (hs_e26DDyd) {
            var hs_sat26DDyp = new $hs.Thunk();
            hs_sat26DDyp.evaluateOnce = function () {
                return $hs.modules.GHCziException.hs_throw.hscall($hs.modules.GHCziException.hs_zdfExceptionSomeException, hs_e26DDyd);
            };
            var hs_sat26DDyq = new $hs.Func(2);
            hs_sat26DDyq.evaluate = function (hs_ds26DDy8, hs_res26DDyf) {
                var hs_wild26DDyo = hs_ds26DDy8;
                if (hs_ds26DDy8.notEvaluated) {
                    hs_wild26DDyo = hs_ds26DDy8.hscall();
                }
                var hs_zddException26DDyc = hs_wild26DDyo.data[0];
                var hs_handler26DDyi = hs_wild26DDyo.data[1];
                var hs_wild126DDyn = $hs.modules.GHCziException.hs_fromException.hscall(hs_zddException26DDyc, hs_e26DDyd);
                switch (hs_wild126DDyn.tag) {
                case 1:
                    if (hs_res26DDyf.notEvaluated) {
                        return hs_res26DDyf.hscall();
                    } else {
                        return hs_res26DDyf;
                    }
                case 2:
                    var hs_ezq26DDyh = hs_wild126DDyn.data[0];
                    return hs_handler26DDyi.hscall(hs_ezq26DDyh);
                }
            };
            return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DDyq, hs_sat26DDyp, hs_handlers26DDyl);
        };
        return $hs.modules.ControlziExceptionziBase.hs_catch.hscall($hs.modules.GHCziException.hs_zdfExceptionSomeException, hs_io26DDy4, hs_sat26DDyr);
    };
    this.hs_Handler.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
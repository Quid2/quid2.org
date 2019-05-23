
$hs.modules.ControlziException = new $hs.Module();
$hs.modules.ControlziException.dependencies = ["GHC.Unit", "GHC.Base", "GHC.Exception", "GHC.IO", "Control.Exception.Base"];
$hs.modules.ControlziException.initBeforeDependencies = function () {
    this.hs_catches = new $hs.Func(2);
    this.hs_allowInterrupt = new $hs.Thunk();
    this.hs_Handler = new $hs.Func(2);
    this.hs_catches.notEvaluated = true;
    this.hs_catches.evaluate = function (hs_io26Dgel, hs_handlers26DgeC) {
        $hs.modules.ControlziException.loadDependencies();
        return this.evaluate(hs_io26Dgel, hs_handlers26DgeC);
    };
    this.hs_allowInterrupt.evaluateOnce = function () {
        $hs.modules.ControlziException.loadDependencies();
        return this.evaluateOnce();
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
    var hs_sat26DgeK = new $hs.Thunk();
    this.hs_catches.evaluate = function (hs_io26Dgel, hs_handlers26DgeC) {
        var hs_sat26DgeF = new $hs.Func(1);
        hs_sat26DgeF.evaluate = function (hs_e26Dgeu) {
            var hs_sat26DgeH = new $hs.Thunk();
            hs_sat26DgeH.evaluateOnce = function () {
                return $hs.modules.GHCziException.hs_throw.hscall($hs.modules.GHCziException.hs_zdfExceptionSomeException, hs_e26Dgeu);
            };
            var hs_sat26DgeG = new $hs.Func(2);
            hs_sat26DgeG.evaluate = function (hs_ds26Dgep, hs_res26Dgew) {
                var hs_wild26DgeI = hs_ds26Dgep;
                if (hs_ds26Dgep.notEvaluated) {
                    hs_wild26DgeI = hs_ds26Dgep.hscall();
                }
                var hs_zddException26Dget = hs_wild26DgeI.data[0];
                var hs_handler26Dgez = hs_wild26DgeI.data[1];
                var hs_wild126DgeJ = $hs.modules.GHCziException.hs_fromException.hscall(hs_zddException26Dget, hs_e26Dgeu);
                switch (hs_wild126DgeJ.tag) {
                case 1:
                    if (hs_res26Dgew.notEvaluated) {
                        return hs_res26Dgew.hscall();
                    } else {
                        return hs_res26Dgew;
                    }
                case 2:
                    var hs_ezq26Dgey = hs_wild126DgeJ.data[0];
                    return hs_handler26Dgez.hscall(hs_ezq26Dgey);
                }
            };
            return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DgeG, hs_sat26DgeH, hs_handlers26DgeC);
        };
        return $hs.modules.ControlziExceptionziBase.hs_catch.hscall($hs.modules.GHCziException.hs_zdfExceptionSomeException, hs_io26Dgel, hs_sat26DgeF);
    };
    hs_sat26DgeK.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    this.hs_allowInterrupt.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafeUnmask, hs_sat26DgeK);
    };
    this.hs_Handler.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
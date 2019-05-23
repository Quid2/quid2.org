
$hs.modules.ForeignziMarshalziError = new $hs.Module();
$hs.modules.ForeignziMarshalziError.dependencies = ["GHC.Unit", "GHC.Integer", "GHC.Base", "GHC.Num", "GHC.Classes", "GHC.IO.Exception", "GHC.Ptr"];
$hs.modules.ForeignziMarshalziError.initBeforeDependencies = function () {
    this.hs_void = new $hs.Func(1);
    this.hs_throwIf = new $hs.Func(3);
    this.hs_throwIfzu = new $hs.Func(3);
    this.hs_throwIfNegzu = new $hs.Func(2);
    this.hs_throwIfNeg = new $hs.Func(2);
    this.hs_throwIfNull = new $hs.Thunk();
    this.hs_void.notEvaluated = true;
    this.hs_void.evaluate = function (hs_act26DmIV) {
        $hs.modules.ForeignziMarshalziError.loadDependencies();
        return this.evaluate(hs_act26DmIV);
    };
    this.hs_throwIf.notEvaluated = true;
    this.hs_throwIf.evaluate = function (hs_pred26DmJ3, hs_msgfct26DmJ5, hs_act26DmJ0) {
        $hs.modules.ForeignziMarshalziError.loadDependencies();
        return this.evaluate(hs_pred26DmJ3, hs_msgfct26DmJ5, hs_act26DmJ0);
    };
    this.hs_throwIfzu.notEvaluated = true;
    this.hs_throwIfzu.evaluate = function (hs_pred26DmJb, hs_msgfct26DmJc, hs_act26DmJd) {
        $hs.modules.ForeignziMarshalziError.loadDependencies();
        return this.evaluate(hs_pred26DmJb, hs_msgfct26DmJc, hs_act26DmJd);
    };
    this.hs_throwIfNegzu.notEvaluated = true;
    this.hs_throwIfNegzu.evaluate = function (hs_zddOrd26DmJp, hs_zddNum26DmJi) {
        $hs.modules.ForeignziMarshalziError.loadDependencies();
        return this.evaluate(hs_zddOrd26DmJp, hs_zddNum26DmJi);
    };
    this.hs_throwIfNeg.notEvaluated = true;
    this.hs_throwIfNeg.evaluate = function (hs_zddOrd26DmJH, hs_zddNum26DmJD) {
        $hs.modules.ForeignziMarshalziError.loadDependencies();
        return this.evaluate(hs_zddOrd26DmJH, hs_zddNum26DmJD);
    };
    this.hs_throwIfNull.evaluateOnce = function () {
        $hs.modules.ForeignziMarshalziError.loadDependencies();
        return this.evaluateOnce();
    };
};
$hs.modules.ForeignziMarshalziError.initAfterDependencies = function () {
    this.hs_void.notEvaluated = false;
    this.hs_throwIf.notEvaluated = false;
    this.hs_throwIfzu.notEvaluated = false;
    this.hs_throwIfNegzu.notEvaluated = false;
    this.hs_throwIfNeg.notEvaluated = false;
    this.hs_void.evaluate = function (hs_act26DmIV) {
        var hs_sat26DmJO = new $hs.Thunk();
        hs_sat26DmJO.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_act26DmIV, hs_sat26DmJO);
    };
    this.hs_throwIf.evaluate = function (hs_pred26DmJ3, hs_msgfct26DmJ5, hs_act26DmJ0) {
        var hs_sat26DmJP = new $hs.Func(1);
        hs_sat26DmJP.evaluate = function (hs_res26DmJ2) {
            var hs_wild26DmJR = hs_pred26DmJ3.hscall(hs_res26DmJ2);
            switch (hs_wild26DmJR.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DmJ2);
            case 2:
                var hs_sat26DmJQ = new $hs.Thunk();
                hs_sat26DmJQ.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziIOziException.hs_userError, hs_msgfct26DmJ5);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziIOziException.hs_ioError, hs_sat26DmJQ, hs_res26DmJ2);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_act26DmJ0, hs_sat26DmJP);
    };
    this.hs_throwIfzu.evaluate = function (hs_pred26DmJb, hs_msgfct26DmJc, hs_act26DmJd) {
        var hs_sat26DmJS = new $hs.Thunk();
        hs_sat26DmJS.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziError.hs_throwIf.hscall(hs_pred26DmJb, hs_msgfct26DmJc, hs_act26DmJd);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.ForeignziMarshalziError.hs_void, hs_sat26DmJS);
    };
    this.hs_throwIfNegzu.evaluate = function (hs_zddOrd26DmJp, hs_zddNum26DmJi) {
        var hs_ds26DmJk = new $hs.Thunk();
        hs_ds26DmJk.evaluateOnce = function () {
            var hs_sat26DmJV = new $hs.Thunk();
            hs_sat26DmJV.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DmJi, hs_sat26DmJV);
        };
        var hs_sat26DmJT = new $hs.Func(2);
        hs_sat26DmJT.evaluate = function (hs_msgfct26DmJs, hs_act26DmJn) {
            var hs_sat26DmJU = new $hs.Thunk();
            hs_sat26DmJU.evaluateOnce = function () {
                var hs_sat26DmJy = new $hs.Func(1);
                hs_sat26DmJy.evaluate = function (hs_res26DmJq) {
                    var hs_wild26DmJw = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd26DmJp, hs_res26DmJq, hs_ds26DmJk);
                    switch (hs_wild26DmJw.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DmJq);
                    case 2:
                        var hs_sat26DmJx = new $hs.Thunk();
                        hs_sat26DmJx.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziIOziException.hs_userError, hs_msgfct26DmJs);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziIOziException.hs_ioError, hs_sat26DmJx, hs_res26DmJq);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_act26DmJn, hs_sat26DmJy);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.ForeignziMarshalziError.hs_void, hs_sat26DmJU);
        };
        if (hs_sat26DmJT.notEvaluated) {
            return hs_sat26DmJT.hscall();
        } else {
            return hs_sat26DmJT;
        }
    };
    this.hs_throwIfNeg.evaluate = function (hs_zddOrd26DmJH, hs_zddNum26DmJD) {
        var hs_ds26DmJF = new $hs.Thunk();
        hs_ds26DmJF.evaluateOnce = function () {
            var hs_sat26DmJX = new $hs.Thunk();
            hs_sat26DmJX.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DmJD, hs_sat26DmJX);
        };
        var hs_sat26DmJW = new $hs.Func(1);
        hs_sat26DmJW.evaluate = function (hs_ds126DmJI) {
            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd26DmJH, hs_ds126DmJI, hs_ds26DmJF);
        };
        return $hs.modules.ForeignziMarshalziError.hs_throwIf.hscall(hs_sat26DmJW);
    };
    this.hs_throwIfNull.evaluateOnce = function () {
        var hs_sat26DmJZ = new $hs.Func(1);
        hs_sat26DmJZ.evaluate = function (hs_ds26DmJL) {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_ds26DmJL, $hs.modules.GHCziPtr.hs_nullPtr);
        };
        var hs_sat26DmJY = new $hs.Func(2);
        hs_sat26DmJY.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return $hs.modules.ForeignziMarshalziError.hs_throwIf.hscall(hs_sat26DmJZ, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DmJY, $hs.modules.GHCziBase.hs_const);
    };
};
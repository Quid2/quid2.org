
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
    this.hs_void.evaluate = function (hs_act26DLql) {
        $hs.modules.ForeignziMarshalziError.loadDependencies();
        return this.evaluate(hs_act26DLql);
    };
    this.hs_throwIf.notEvaluated = true;
    this.hs_throwIf.evaluate = function (hs_pred26DLqt, hs_msgfct26DLqv, hs_act26DLqq) {
        $hs.modules.ForeignziMarshalziError.loadDependencies();
        return this.evaluate(hs_pred26DLqt, hs_msgfct26DLqv, hs_act26DLqq);
    };
    this.hs_throwIfzu.notEvaluated = true;
    this.hs_throwIfzu.evaluate = function (hs_pred26DLqB, hs_msgfct26DLqC, hs_act26DLqD) {
        $hs.modules.ForeignziMarshalziError.loadDependencies();
        return this.evaluate(hs_pred26DLqB, hs_msgfct26DLqC, hs_act26DLqD);
    };
    this.hs_throwIfNegzu.notEvaluated = true;
    this.hs_throwIfNegzu.evaluate = function (hs_zddOrd26DLqP, hs_zddNum26DLqI) {
        $hs.modules.ForeignziMarshalziError.loadDependencies();
        return this.evaluate(hs_zddOrd26DLqP, hs_zddNum26DLqI);
    };
    this.hs_throwIfNeg.notEvaluated = true;
    this.hs_throwIfNeg.evaluate = function (hs_zddOrd26DLr7, hs_zddNum26DLr3) {
        $hs.modules.ForeignziMarshalziError.loadDependencies();
        return this.evaluate(hs_zddOrd26DLr7, hs_zddNum26DLr3);
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
    this.hs_void.evaluate = function (hs_act26DLql) {
        var hs_sat26DLre = new $hs.Thunk();
        hs_sat26DLre.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_act26DLql, hs_sat26DLre);
    };
    this.hs_throwIf.evaluate = function (hs_pred26DLqt, hs_msgfct26DLqv, hs_act26DLqq) {
        var hs_sat26DLrh = new $hs.Func(1);
        hs_sat26DLrh.evaluate = function (hs_res26DLqs) {
            var hs_wild26DLrf = hs_pred26DLqt.hscall(hs_res26DLqs);
            switch (hs_wild26DLrf.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DLqs);
            case 2:
                var hs_sat26DLrg = new $hs.Thunk();
                hs_sat26DLrg.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziIOziException.hs_userError, hs_msgfct26DLqv);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziIOziException.hs_ioError, hs_sat26DLrg, hs_res26DLqs);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_act26DLqq, hs_sat26DLrh);
    };
    this.hs_throwIfzu.evaluate = function (hs_pred26DLqB, hs_msgfct26DLqC, hs_act26DLqD) {
        var hs_sat26DLri = new $hs.Thunk();
        hs_sat26DLri.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziError.hs_throwIf.hscall(hs_pred26DLqB, hs_msgfct26DLqC, hs_act26DLqD);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.ForeignziMarshalziError.hs_void, hs_sat26DLri);
    };
    this.hs_throwIfNegzu.evaluate = function (hs_zddOrd26DLqP, hs_zddNum26DLqI) {
        var hs_ds26DLqK = new $hs.Thunk();
        hs_ds26DLqK.evaluateOnce = function () {
            var hs_sat26DLrj = new $hs.Thunk();
            hs_sat26DLrj.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DLqI, hs_sat26DLrj);
        };
        var hs_sat26DLrl = new $hs.Func(2);
        hs_sat26DLrl.evaluate = function (hs_msgfct26DLqS, hs_act26DLqN) {
            var hs_sat26DLrk = new $hs.Thunk();
            hs_sat26DLrk.evaluateOnce = function () {
                var hs_sat26DLqY = new $hs.Func(1);
                hs_sat26DLqY.evaluate = function (hs_res26DLqQ) {
                    var hs_wild26DLqW = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd26DLqP, hs_res26DLqQ, hs_ds26DLqK);
                    switch (hs_wild26DLqW.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DLqQ);
                    case 2:
                        var hs_sat26DLqX = new $hs.Thunk();
                        hs_sat26DLqX.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziIOziException.hs_userError, hs_msgfct26DLqS);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziIOziException.hs_ioError, hs_sat26DLqX, hs_res26DLqQ);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_act26DLqN, hs_sat26DLqY);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.ForeignziMarshalziError.hs_void, hs_sat26DLrk);
        };
        if (hs_sat26DLrl.notEvaluated) {
            return hs_sat26DLrl.hscall();
        } else {
            return hs_sat26DLrl;
        }
    };
    this.hs_throwIfNeg.evaluate = function (hs_zddOrd26DLr7, hs_zddNum26DLr3) {
        var hs_ds26DLr5 = new $hs.Thunk();
        hs_ds26DLr5.evaluateOnce = function () {
            var hs_sat26DLrm = new $hs.Thunk();
            hs_sat26DLrm.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DLr3, hs_sat26DLrm);
        };
        var hs_sat26DLrn = new $hs.Func(1);
        hs_sat26DLrn.evaluate = function (hs_ds126DLr8) {
            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd26DLr7, hs_ds126DLr8, hs_ds26DLr5);
        };
        return $hs.modules.ForeignziMarshalziError.hs_throwIf.hscall(hs_sat26DLrn);
    };
    this.hs_throwIfNull.evaluateOnce = function () {
        var hs_sat26DLro = new $hs.Func(1);
        hs_sat26DLro.evaluate = function (hs_ds26DLrb) {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_ds26DLrb, $hs.modules.GHCziPtr.hs_nullPtr);
        };
        var hs_sat26DLrp = new $hs.Func(2);
        hs_sat26DLrp.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return $hs.modules.ForeignziMarshalziError.hs_throwIf.hscall(hs_sat26DLro, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DLrp, $hs.modules.GHCziBase.hs_const);
    };
};
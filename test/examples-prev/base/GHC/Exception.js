
$hs.modules.GHCziException = new $hs.Module();
$hs.modules.GHCziException.dependencies = ["GHC.Types", "Data.Maybe", "GHC.Base", "GHC.Show", "Data.Typeable", "GHC.Classes"];
$hs.modules.GHCziException.initBeforeDependencies = function () {
    this.hs_zdp1Exception = new $hs.Func(1);
    this.hs_zdp2Exception = new $hs.Func(1);
    this.hs_toException = new $hs.Func(1);
    this.hs_fromException = new $hs.Func(1);
    this.hs_zddmfromException = new $hs.Func(2);
    this.hs_zddmtoException = new $hs.Func(2);
    this.hs_throw = new $hs.Func(2);
    this.hs_zdfShowSomeException = new $hs.Data(1);
    this.hs_zdfShowErrorCall = new $hs.Data(1);
    this.hs_zdfShowArithException = new $hs.Data(1);
    this.hs_zdfEqArithException = new $hs.Data(1);
    this.hs_zdfOrdArithException = new $hs.Data(1);
    this.hs_zdfTypeableArithException = new $hs.Thunk();
    this.hs_zdfExceptionArithException = new $hs.Data(1);
    this.hs_zdfTypeableErrorCall = new $hs.Thunk();
    this.hs_zdfExceptionErrorCall = new $hs.Data(1);
    this.hs_zdfTypeableSomeException = new $hs.Thunk();
    this.hs_zdfExceptionSomeException = new $hs.Data(1);
    this.hs_Overflow = new $hs.Data(1);
    this.hs_Underflow = new $hs.Data(2);
    this.hs_LossOfPrecision = new $hs.Data(3);
    this.hs_DivideByZZero = new $hs.Data(4);
    this.hs_Denormal = new $hs.Data(5);
    this.hs_ErrorCall = new $hs.Func(1);
    this.hs_SomeException = new $hs.Func(2);
    this.hs_DZCException = new $hs.Func(4);
    this.hs_zdp1Exception.notEvaluated = true;
    this.hs_zdp1Exception.evaluate = function (hs_tpl26DeXp) {
        $hs.modules.GHCziException.loadDependencies();
        return this.evaluate(hs_tpl26DeXp);
    };
    this.hs_zdp2Exception.notEvaluated = true;
    this.hs_zdp2Exception.evaluate = function (hs_tpl26DeXx) {
        $hs.modules.GHCziException.loadDependencies();
        return this.evaluate(hs_tpl26DeXx);
    };
    this.hs_toException.notEvaluated = true;
    this.hs_toException.evaluate = function (hs_tpl26DeXF) {
        $hs.modules.GHCziException.loadDependencies();
        return this.evaluate(hs_tpl26DeXF);
    };
    this.hs_fromException.notEvaluated = true;
    this.hs_fromException.evaluate = function (hs_tpl26DeXN) {
        $hs.modules.GHCziException.loadDependencies();
        return this.evaluate(hs_tpl26DeXN);
    };
    this.hs_zddmfromException.notEvaluated = true;
    this.hs_zddmfromException.evaluate = function (hs_zddException26DeY2, hs_eta26DeXW) {
        $hs.modules.GHCziException.loadDependencies();
        return this.evaluate(hs_zddException26DeY2, hs_eta26DeXW);
    };
    this.hs_zddmtoException.notEvaluated = true;
    this.hs_zddmtoException.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziException.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_throw.notEvaluated = true;
    this.hs_throw.evaluate = function (hs_zddException26DeY7, hs_e26DeY8) {
        $hs.modules.GHCziException.loadDependencies();
        return this.evaluate(hs_zddException26DeY7, hs_e26DeY8);
    };
    this.hs_zdfShowSomeException.notEvaluated = true;
    this.hs_zdfShowSomeException.evaluate = function () {
        $hs.modules.GHCziException.loadDependencies();
        return this;
    };
    this.hs_zdfShowErrorCall.notEvaluated = true;
    this.hs_zdfShowErrorCall.evaluate = function () {
        $hs.modules.GHCziException.loadDependencies();
        return this;
    };
    this.hs_zdfShowArithException.notEvaluated = true;
    this.hs_zdfShowArithException.evaluate = function () {
        $hs.modules.GHCziException.loadDependencies();
        return this;
    };
    this.hs_zdfEqArithException.notEvaluated = true;
    this.hs_zdfEqArithException.evaluate = function () {
        $hs.modules.GHCziException.loadDependencies();
        return this;
    };
    this.hs_zdfOrdArithException.notEvaluated = true;
    this.hs_zdfOrdArithException.evaluate = function () {
        $hs.modules.GHCziException.loadDependencies();
        return this;
    };
    this.hs_zdfTypeableArithException.evaluateOnce = function () {
        $hs.modules.GHCziException.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfExceptionArithException.notEvaluated = true;
    this.hs_zdfExceptionArithException.evaluate = function () {
        $hs.modules.GHCziException.loadDependencies();
        return this;
    };
    this.hs_zdfTypeableErrorCall.evaluateOnce = function () {
        $hs.modules.GHCziException.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfExceptionErrorCall.notEvaluated = true;
    this.hs_zdfExceptionErrorCall.evaluate = function () {
        $hs.modules.GHCziException.loadDependencies();
        return this;
    };
    this.hs_zdfTypeableSomeException.evaluateOnce = function () {
        $hs.modules.GHCziException.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfExceptionSomeException.notEvaluated = true;
    this.hs_zdfExceptionSomeException.evaluate = function () {
        $hs.modules.GHCziException.loadDependencies();
        return this;
    };
    this.hs_Overflow.notEvaluated = true;
    this.hs_Overflow.evaluate = function () {
        $hs.modules.GHCziException.loadDependencies();
        return this;
    };
    this.hs_Underflow.notEvaluated = true;
    this.hs_Underflow.evaluate = function () {
        $hs.modules.GHCziException.loadDependencies();
        return this;
    };
    this.hs_LossOfPrecision.notEvaluated = true;
    this.hs_LossOfPrecision.evaluate = function () {
        $hs.modules.GHCziException.loadDependencies();
        return this;
    };
    this.hs_DivideByZZero.notEvaluated = true;
    this.hs_DivideByZZero.evaluate = function () {
        $hs.modules.GHCziException.loadDependencies();
        return this;
    };
    this.hs_Denormal.notEvaluated = true;
    this.hs_Denormal.evaluate = function () {
        $hs.modules.GHCziException.loadDependencies();
        return this;
    };
    this.hs_ErrorCall.notEvaluated = true;
    this.hs_ErrorCall.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziException.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_SomeException.notEvaluated = true;
    this.hs_SomeException.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziException.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_DZCException.notEvaluated = true;
    this.hs_DZCException.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziException.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziException.initAfterDependencies = function () {
    this.hs_zdp1Exception.notEvaluated = false;
    this.hs_zdp2Exception.notEvaluated = false;
    this.hs_toException.notEvaluated = false;
    this.hs_fromException.notEvaluated = false;
    this.hs_zddmfromException.notEvaluated = false;
    this.hs_zddmtoException.notEvaluated = false;
    this.hs_throw.notEvaluated = false;
    this.hs_zdfShowSomeException.notEvaluated = false;
    this.hs_zdfShowSomeException.evaluate = function () {
        return this;
    };
    this.hs_zdfShowErrorCall.notEvaluated = false;
    this.hs_zdfShowErrorCall.evaluate = function () {
        return this;
    };
    this.hs_zdfShowArithException.notEvaluated = false;
    this.hs_zdfShowArithException.evaluate = function () {
        return this;
    };
    this.hs_zdfEqArithException.notEvaluated = false;
    this.hs_zdfEqArithException.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdArithException.notEvaluated = false;
    this.hs_zdfOrdArithException.evaluate = function () {
        return this;
    };
    this.hs_zdfExceptionArithException.notEvaluated = false;
    this.hs_zdfExceptionArithException.evaluate = function () {
        return this;
    };
    this.hs_zdfExceptionErrorCall.notEvaluated = false;
    this.hs_zdfExceptionErrorCall.evaluate = function () {
        return this;
    };
    this.hs_zdfExceptionSomeException.notEvaluated = false;
    this.hs_zdfExceptionSomeException.evaluate = function () {
        return this;
    };
    this.hs_Overflow.notEvaluated = false;
    this.hs_Overflow.evaluate = function () {
        return this;
    };
    this.hs_Underflow.notEvaluated = false;
    this.hs_Underflow.evaluate = function () {
        return this;
    };
    this.hs_LossOfPrecision.notEvaluated = false;
    this.hs_LossOfPrecision.evaluate = function () {
        return this;
    };
    this.hs_DivideByZZero.notEvaluated = false;
    this.hs_DivideByZZero.evaluate = function () {
        return this;
    };
    this.hs_Denormal.notEvaluated = false;
    this.hs_Denormal.evaluate = function () {
        return this;
    };
    this.hs_ErrorCall.notEvaluated = false;
    this.hs_SomeException.notEvaluated = false;
    this.hs_DZCException.notEvaluated = false;
    var hs_zdcshowsPrec25uQrV = new $hs.Func(2);
    var hs_zdcshowList25uQs7 = new $hs.Thunk();
    var hs_zdcshow25uQs9 = new $hs.Thunk();
    var hs_zdctoException25uQsb = new $hs.Func(1);
    var hs_zdcshowsPrec125uQsf = new $hs.Func(2);
    var hs_zdcshowList125uQso = new $hs.Thunk();
    var hs_zdcshow125uQsq = new $hs.Thunk();
    var hs_zdcshowsPrec225uQss = new $hs.Func(2);
    var hs_zdcshowList225uQsE = new $hs.Thunk();
    var hs_zdcshow225uQsG = new $hs.Thunk();
    var hs_zdczlze25uQsI = new $hs.Func(2);
    var hs_zdczg25uQsU = new $hs.Func(2);
    var hs_zdczgze25uQt6 = new $hs.Func(2);
    var hs_zdczl25uQti = new $hs.Func(2);
    var hs_zdccompare25uQtu = new $hs.Func(2);
    var hs_zdczeze25uQtQ = new $hs.Func(2);
    var hs_zdczsze25uQu2 = new $hs.Func(2);
    var hs_zdcmin25uQu9 = new $hs.Thunk();
    var hs_zdcmax25uQub = new $hs.Thunk();
    var hs_zdctypeOf25uQud = new $hs.Func(1);
    var hs_zdctoException125uQuj = new $hs.Func(1);
    var hs_zddTypeable25uQul = new $hs.Thunk();
    var hs_zdcfromException25uQun = new $hs.Func(1);
    var hs_zdctypeOf125uQux = new $hs.Func(1);
    var hs_zdctoException225uQuD = new $hs.Func(1);
    var hs_zddTypeable125uQuF = new $hs.Thunk();
    var hs_zdcfromException125uQuH = new $hs.Func(1);
    var hs_zdctypeOf225uQuR = new $hs.Func(1);
    this.hs_zdp1Exception.evaluate = function (hs_tpl26DeXp) {
        var hs_tpl26Df1c = hs_tpl26DeXp;
        if (hs_tpl26DeXp.notEvaluated) {
            hs_tpl26Df1c = hs_tpl26DeXp.hscall();
        }
        var hs_tpl26DeXv = hs_tpl26Df1c.data[0];
        if (hs_tpl26DeXv.notEvaluated) {
            return hs_tpl26DeXv.hscall();
        } else {
            return hs_tpl26DeXv;
        }
    };
    this.hs_zdp2Exception.evaluate = function (hs_tpl26DeXx) {
        var hs_tpl26Df1h = hs_tpl26DeXx;
        if (hs_tpl26DeXx.notEvaluated) {
            hs_tpl26Df1h = hs_tpl26DeXx.hscall();
        }
        var hs_tpl26DeXD = hs_tpl26Df1h.data[1];
        if (hs_tpl26DeXD.notEvaluated) {
            return hs_tpl26DeXD.hscall();
        } else {
            return hs_tpl26DeXD;
        }
    };
    this.hs_toException.evaluate = function (hs_tpl26DeXF) {
        var hs_tpl26Df1l = hs_tpl26DeXF;
        if (hs_tpl26DeXF.notEvaluated) {
            hs_tpl26Df1l = hs_tpl26DeXF.hscall();
        }
        var hs_tpl26DeXL = hs_tpl26Df1l.data[2];
        if (hs_tpl26DeXL.notEvaluated) {
            return hs_tpl26DeXL.hscall();
        } else {
            return hs_tpl26DeXL;
        }
    };
    this.hs_fromException.evaluate = function (hs_tpl26DeXN) {
        var hs_tpl26Df1p = hs_tpl26DeXN;
        if (hs_tpl26DeXN.notEvaluated) {
            hs_tpl26Df1p = hs_tpl26DeXN.hscall();
        }
        var hs_tpl26DeXT = hs_tpl26Df1p.data[3];
        if (hs_tpl26DeXT.notEvaluated) {
            return hs_tpl26DeXT.hscall();
        } else {
            return hs_tpl26DeXT;
        }
    };
    this.hs_zddmfromException.evaluate = function (hs_zddException26DeY2, hs_eta26DeXW) {
        var hs_wild26Df1s = hs_eta26DeXW;
        if (hs_eta26DeXW.notEvaluated) {
            hs_wild26Df1s = hs_eta26DeXW.hscall();
        }
        var hs_zddException126DeY0 = hs_wild26Df1s.data[0];
        var hs_e26DeY4 = hs_wild26Df1s.data[1];
        var hs_sat26Df1t = new $hs.Thunk();
        hs_sat26Df1t.evaluateOnce = function () {
            return $hs.modules.GHCziException.hs_zdp1Exception.hscall(hs_zddException26DeY2);
        };
        var hs_sat26Df1u = new $hs.Thunk();
        hs_sat26Df1u.evaluateOnce = function () {
            return $hs.modules.GHCziException.hs_zdp1Exception.hscall(hs_zddException126DeY0);
        };
        return $hs.modules.DataziTypeable.hs_cast.hscall(hs_sat26Df1u, hs_sat26Df1t, hs_e26DeY4);
    };
    this.hs_zddmtoException.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_throw.evaluate = function (hs_zddException26DeY7, hs_e26DeY8) {
        var hs_sat26Df1v = new $hs.Thunk();
        hs_sat26Df1v.evaluateOnce = function () {
            return $hs.modules.GHCziException.hs_toException.hscall(hs_zddException26DeY7, hs_e26DeY8);
        };
        throw "primitive operation raise#. Not implemeted yet.";
    };
    hs_zdcshowsPrec25uQrV.evaluate = function (hs_p26DeYk, hs_ds26DeYe) {
        var hs_wild26Df1x = hs_ds26DeYe;
        if (hs_ds26DeYe.notEvaluated) {
            hs_wild26Df1x = hs_ds26DeYe.hscall();
        }
        var hs_zddException26DeYi = hs_wild26Df1x.data[0];
        var hs_e26DeYl = hs_wild26Df1x.data[1];
        var hs_sat26Df1w = $hs.modules.GHCziException.hs_zdp2Exception.hscall(hs_zddException26DeYi);
        return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_sat26Df1w, hs_p26DeYk, hs_e26DeYl);
    };
    this.hs_zdfShowSomeException.data = [hs_zdcshowsPrec25uQrV, hs_zdcshow25uQs9, hs_zdcshowList25uQs7];
    hs_zdcshowList25uQs7.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziException.hs_zdfShowSomeException);
    };
    hs_zdcshow25uQs9.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziException.hs_zdfShowSomeException);
    };
    hs_zdctoException25uQsb.evaluate = function (hs_se26DeYt) {
        if (hs_se26DeYt.notEvaluated) {
            return hs_se26DeYt.hscall();
        } else {
            return hs_se26DeYt;
        }
    };
    hs_zdcshowsPrec125uQsf.evaluate = function (hs_ds26DeYC, hs_ds126DeYy) {
        var hs_wild26Df1y = hs_ds126DeYy;
        if (hs_ds126DeYy.notEvaluated) {
            hs_wild26Df1y = hs_ds126DeYy.hscall();
        }
        var hs_err26DeYB = hs_wild26Df1y.data[0];
        return $hs.modules.GHCziShow.hs_showString.hscall(hs_err26DeYB);
    };
    this.hs_zdfShowErrorCall.data = [hs_zdcshowsPrec125uQsf, hs_zdcshow125uQsq, hs_zdcshowList125uQso];
    hs_zdcshowList125uQso.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziException.hs_zdfShowErrorCall);
    };
    hs_zdcshow125uQsq.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziException.hs_zdfShowErrorCall);
    };
    hs_zdcshowsPrec225uQss.evaluate = function (hs_ds26DeYS, hs_ds126DeYL) {
        var hs_wild26Df1z = hs_ds126DeYL;
        if (hs_ds126DeYL.notEvaluated) {
            hs_wild26Df1z = hs_ds126DeYL.hscall();
        }
        switch (hs_wild26Df1z.tag) {
        case 1:
            var hs_sat26Df1A = new $hs.Thunk();
            hs_sat26Df1A.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("arithmetic overflow\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Df1A);
        case 2:
            var hs_sat26Df1B = new $hs.Thunk();
            hs_sat26Df1B.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("arithmetic underflow\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Df1B);
        case 3:
            var hs_sat26Df1C = new $hs.Thunk();
            hs_sat26Df1C.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("loss of precision\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Df1C);
        case 4:
            var hs_sat26Df1D = new $hs.Thunk();
            hs_sat26Df1D.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("divide by zero\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Df1D);
        case 5:
            var hs_sat26Df1E = new $hs.Thunk();
            hs_sat26Df1E.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("denormal\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Df1E);
        }
    };
    this.hs_zdfShowArithException.data = [hs_zdcshowsPrec225uQss, hs_zdcshow225uQsG, hs_zdcshowList225uQsE];
    hs_zdcshowList225uQsE.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziException.hs_zdfShowArithException);
    };
    hs_zdcshow225uQsG.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziException.hs_zdfShowArithException);
    };
    hs_zdczlze25uQsI.evaluate = function (hs_a26DeZ7, hs_b26DeZ3) {
        var hs_zdj26DeZ6 = new $hs.Func(1);
        hs_zdj26DeZ6.evaluate = function (hs_azh26DeZ5) {
            var hs_wild26Df1F = hs_b26DeZ3;
            if (hs_b26DeZ3.notEvaluated) {
                hs_wild26Df1F = hs_b26DeZ3.hscall();
            }
            switch (hs_wild26Df1F.tag) {
            case 1:
                return hs_azh26DeZ5 <= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return hs_azh26DeZ5 <= 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return hs_azh26DeZ5 <= 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return hs_azh26DeZ5 <= 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 5:
                return hs_azh26DeZ5 <= 4 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        };
        var hs_wild26Df1G = hs_a26DeZ7;
        if (hs_a26DeZ7.notEvaluated) {
            hs_wild26Df1G = hs_a26DeZ7.hscall();
        }
        switch (hs_wild26Df1G.tag) {
        case 1:
            return hs_zdj26DeZ6.hscall(0);
        case 2:
            return hs_zdj26DeZ6.hscall(1);
        case 3:
            return hs_zdj26DeZ6.hscall(2);
        case 4:
            return hs_zdj26DeZ6.hscall(3);
        case 5:
            return hs_zdj26DeZ6.hscall(4);
        }
    };
    hs_zdczg25uQsU.evaluate = function (hs_a26DeZj, hs_b26DeZf) {
        var hs_zdj26DeZi = new $hs.Func(1);
        hs_zdj26DeZi.evaluate = function (hs_azh26DeZh) {
            var hs_wild26Df1H = hs_b26DeZf;
            if (hs_b26DeZf.notEvaluated) {
                hs_wild26Df1H = hs_b26DeZf.hscall();
            }
            switch (hs_wild26Df1H.tag) {
            case 1:
                return hs_azh26DeZh > 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return hs_azh26DeZh > 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return hs_azh26DeZh > 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return hs_azh26DeZh > 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 5:
                return hs_azh26DeZh > 4 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        };
        var hs_wild26Df1I = hs_a26DeZj;
        if (hs_a26DeZj.notEvaluated) {
            hs_wild26Df1I = hs_a26DeZj.hscall();
        }
        switch (hs_wild26Df1I.tag) {
        case 1:
            return hs_zdj26DeZi.hscall(0);
        case 2:
            return hs_zdj26DeZi.hscall(1);
        case 3:
            return hs_zdj26DeZi.hscall(2);
        case 4:
            return hs_zdj26DeZi.hscall(3);
        case 5:
            return hs_zdj26DeZi.hscall(4);
        }
    };
    hs_zdczgze25uQt6.evaluate = function (hs_a26DeZv, hs_b26DeZr) {
        var hs_zdj26DeZu = new $hs.Func(1);
        hs_zdj26DeZu.evaluate = function (hs_azh26DeZt) {
            var hs_wild26Df1J = hs_b26DeZr;
            if (hs_b26DeZr.notEvaluated) {
                hs_wild26Df1J = hs_b26DeZr.hscall();
            }
            switch (hs_wild26Df1J.tag) {
            case 1:
                return hs_azh26DeZt >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return hs_azh26DeZt >= 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return hs_azh26DeZt >= 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return hs_azh26DeZt >= 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 5:
                return hs_azh26DeZt >= 4 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        };
        var hs_wild26Df1K = hs_a26DeZv;
        if (hs_a26DeZv.notEvaluated) {
            hs_wild26Df1K = hs_a26DeZv.hscall();
        }
        switch (hs_wild26Df1K.tag) {
        case 1:
            return hs_zdj26DeZu.hscall(0);
        case 2:
            return hs_zdj26DeZu.hscall(1);
        case 3:
            return hs_zdj26DeZu.hscall(2);
        case 4:
            return hs_zdj26DeZu.hscall(3);
        case 5:
            return hs_zdj26DeZu.hscall(4);
        }
    };
    hs_zdczl25uQti.evaluate = function (hs_a26DeZH, hs_b26DeZD) {
        var hs_zdj26DeZG = new $hs.Func(1);
        hs_zdj26DeZG.evaluate = function (hs_azh26DeZF) {
            var hs_wild26Df1L = hs_b26DeZD;
            if (hs_b26DeZD.notEvaluated) {
                hs_wild26Df1L = hs_b26DeZD.hscall();
            }
            switch (hs_wild26Df1L.tag) {
            case 1:
                return hs_azh26DeZF < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return hs_azh26DeZF < 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return hs_azh26DeZF < 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return hs_azh26DeZF < 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 5:
                return hs_azh26DeZF < 4 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        };
        var hs_wild26Df1M = hs_a26DeZH;
        if (hs_a26DeZH.notEvaluated) {
            hs_wild26Df1M = hs_a26DeZH.hscall();
        }
        switch (hs_wild26Df1M.tag) {
        case 1:
            return hs_zdj26DeZG.hscall(0);
        case 2:
            return hs_zdj26DeZG.hscall(1);
        case 3:
            return hs_zdj26DeZG.hscall(2);
        case 4:
            return hs_zdj26DeZG.hscall(3);
        case 5:
            return hs_zdj26DeZG.hscall(4);
        }
    };
    hs_zdccompare25uQtu.evaluate = function (hs_a26Df03, hs_b26DeZP) {
        var hs_zdj26Df02 = new $hs.Func(1);
        hs_zdj26Df02.evaluate = function (hs_azh26DeZR) {
            var hs_wild26Df1P = hs_b26DeZP;
            if (hs_b26DeZP.notEvaluated) {
                hs_wild26Df1P = hs_b26DeZP.hscall();
            }
            switch (hs_wild26Df1P.tag) {
            case 1:
                var hs_wild126Df1O = hs_azh26DeZR < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild126Df1O.tag) {
                case 1:
                    var hs_wild226Df1N = hs_azh26DeZR == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226Df1N.tag) {
                    case 1:
                        var $res = new $hs.Data(3);
                        $res.data = [];
                        return $res;
                    case 2:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 2:
                var hs_wild126Df1R = hs_azh26DeZR < 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild126Df1R.tag) {
                case 1:
                    var hs_wild226Df1Q = hs_azh26DeZR == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226Df1Q.tag) {
                    case 1:
                        var $res = new $hs.Data(3);
                        $res.data = [];
                        return $res;
                    case 2:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var hs_wild126Df1T = hs_azh26DeZR < 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild126Df1T.tag) {
                case 1:
                    var hs_wild226Df1S = hs_azh26DeZR == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226Df1S.tag) {
                    case 1:
                        var $res = new $hs.Data(3);
                        $res.data = [];
                        return $res;
                    case 2:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 4:
                var hs_wild126Df1V = hs_azh26DeZR < 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild126Df1V.tag) {
                case 1:
                    var hs_wild226Df1U = hs_azh26DeZR == 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226Df1U.tag) {
                    case 1:
                        var $res = new $hs.Data(3);
                        $res.data = [];
                        return $res;
                    case 2:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 5:
                var hs_wild126Df1X = hs_azh26DeZR < 4 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild126Df1X.tag) {
                case 1:
                    var hs_wild226Df1W = hs_azh26DeZR == 4 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226Df1W.tag) {
                    case 1:
                        var $res = new $hs.Data(3);
                        $res.data = [];
                        return $res;
                    case 2:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            }
        };
        var hs_wild26Df1Y = hs_a26Df03;
        if (hs_a26Df03.notEvaluated) {
            hs_wild26Df1Y = hs_a26Df03.hscall();
        }
        switch (hs_wild26Df1Y.tag) {
        case 1:
            return hs_zdj26Df02.hscall(0);
        case 2:
            return hs_zdj26Df02.hscall(1);
        case 3:
            return hs_zdj26Df02.hscall(2);
        case 4:
            return hs_zdj26Df02.hscall(3);
        case 5:
            return hs_zdj26Df02.hscall(4);
        }
    };
    hs_zdczeze25uQtQ.evaluate = function (hs_a26Df0f, hs_b26Df0b) {
        var hs_zdj26Df0e = new $hs.Func(1);
        hs_zdj26Df0e.evaluate = function (hs_azh26Df0d) {
            var hs_wild26Df1Z = hs_b26Df0b;
            if (hs_b26Df0b.notEvaluated) {
                hs_wild26Df1Z = hs_b26Df0b.hscall();
            }
            switch (hs_wild26Df1Z.tag) {
            case 1:
                return hs_azh26Df0d == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return hs_azh26Df0d == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return hs_azh26Df0d == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return hs_azh26Df0d == 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 5:
                return hs_azh26Df0d == 4 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        };
        var hs_wild26Df20 = hs_a26Df0f;
        if (hs_a26Df0f.notEvaluated) {
            hs_wild26Df20 = hs_a26Df0f.hscall();
        }
        switch (hs_wild26Df20.tag) {
        case 1:
            return hs_zdj26Df0e.hscall(0);
        case 2:
            return hs_zdj26Df0e.hscall(1);
        case 3:
            return hs_zdj26Df0e.hscall(2);
        case 4:
            return hs_zdj26Df0e.hscall(3);
        case 5:
            return hs_zdj26Df0e.hscall(4);
        }
    };
    this.hs_zdfEqArithException.data = [hs_zdczeze25uQtQ, hs_zdczsze25uQu2];
    hs_zdczsze25uQu2.evaluate = function (hs_a26Df0l, hs_b26Df0m) {
        var hs_sat26Df21 = new $hs.Thunk();
        hs_sat26Df21.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziException.hs_zdfEqArithException, hs_a26Df0l, hs_b26Df0m);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26Df21);
    };
    this.hs_zdfOrdArithException.data = [$hs.modules.GHCziException.hs_zdfEqArithException, hs_zdccompare25uQtu, hs_zdczl25uQti, hs_zdczgze25uQt6, hs_zdczg25uQsU, hs_zdczlze25uQsI, hs_zdcmax25uQub, hs_zdcmin25uQu9];
    hs_zdcmin25uQu9.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziException.hs_zdfOrdArithException);
    };
    hs_zdcmax25uQub.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziException.hs_zdfOrdArithException);
    };
    hs_zdctypeOf25uQud.evaluate = function (hs_ds26Df0x) {
        var hs_sat26Df23 = new $hs.Thunk();
        hs_sat26Df23.evaluateOnce = function () {
            var hs_sat26Df22 = new $hs.Thunk();
            hs_sat26Df22.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("GHC.Exception.ArithException\x00");
            };
            return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26Df22);
        };
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_sat26Df23, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableArithException.evaluateOnce = function () {
        if (hs_zdctypeOf25uQud.notEvaluated) {
            return hs_zdctypeOf25uQud.hscall();
        } else {
            return hs_zdctypeOf25uQud;
        }
    };
    this.hs_zdfExceptionArithException.data = [$hs.modules.GHCziException.hs_zdfTypeableArithException, $hs.modules.GHCziException.hs_zdfShowArithException, hs_zdctoException125uQuj, hs_zdcfromException25uQun];
    hs_zdctoException125uQuj.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [$hs.modules.GHCziException.hs_zdfExceptionArithException, hs_eta1cW6l3];
        return $res;
    };
    hs_zddTypeable25uQul.evaluateOnce = function () {
        return $hs.modules.GHCziException.hs_zdp1Exception.hscall($hs.modules.GHCziException.hs_zdfExceptionArithException);
    };
    hs_zdcfromException25uQun.evaluate = function (hs_ds26Df0F) {
        var hs_wild26Df24 = hs_ds26Df0F;
        if (hs_ds26Df0F.notEvaluated) {
            hs_wild26Df24 = hs_ds26Df0F.hscall();
        }
        var hs_zddException26Df0J = hs_wild26Df24.data[0];
        var hs_e26Df0L = hs_wild26Df24.data[1];
        var hs_sat26Df25 = new $hs.Thunk();
        hs_sat26Df25.evaluateOnce = function () {
            return $hs.modules.GHCziException.hs_zdp1Exception.hscall(hs_zddException26Df0J);
        };
        return $hs.modules.DataziTypeable.hs_cast.hscall(hs_sat26Df25, hs_zddTypeable25uQul, hs_e26Df0L);
    };
    hs_zdctypeOf125uQux.evaluate = function (hs_ds26Df0R) {
        var hs_sat26Df27 = new $hs.Thunk();
        hs_sat26Df27.evaluateOnce = function () {
            var hs_sat26Df26 = new $hs.Thunk();
            hs_sat26Df26.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("GHC.Exception.ErrorCall\x00");
            };
            return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26Df26);
        };
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_sat26Df27, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableErrorCall.evaluateOnce = function () {
        if (hs_zdctypeOf125uQux.notEvaluated) {
            return hs_zdctypeOf125uQux.hscall();
        } else {
            return hs_zdctypeOf125uQux;
        }
    };
    this.hs_zdfExceptionErrorCall.data = [$hs.modules.GHCziException.hs_zdfTypeableErrorCall, $hs.modules.GHCziException.hs_zdfShowErrorCall, hs_zdctoException225uQuD, hs_zdcfromException125uQuH];
    hs_zdctoException225uQuD.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [$hs.modules.GHCziException.hs_zdfExceptionErrorCall, hs_eta1cW6l3];
        return $res;
    };
    hs_zddTypeable125uQuF.evaluateOnce = function () {
        return $hs.modules.GHCziException.hs_zdp1Exception.hscall($hs.modules.GHCziException.hs_zdfExceptionErrorCall);
    };
    hs_zdcfromException125uQuH.evaluate = function (hs_ds26Df0Z) {
        var hs_wild26Df28 = hs_ds26Df0Z;
        if (hs_ds26Df0Z.notEvaluated) {
            hs_wild26Df28 = hs_ds26Df0Z.hscall();
        }
        var hs_zddException26Df13 = hs_wild26Df28.data[0];
        var hs_e26Df15 = hs_wild26Df28.data[1];
        var hs_sat26Df29 = new $hs.Thunk();
        hs_sat26Df29.evaluateOnce = function () {
            return $hs.modules.GHCziException.hs_zdp1Exception.hscall(hs_zddException26Df13);
        };
        return $hs.modules.DataziTypeable.hs_cast.hscall(hs_sat26Df29, hs_zddTypeable125uQuF, hs_e26Df15);
    };
    hs_zdctypeOf225uQuR.evaluate = function (hs_ds26Df1b) {
        var hs_sat26Df2b = new $hs.Thunk();
        hs_sat26Df2b.evaluateOnce = function () {
            var hs_sat26Df2a = new $hs.Thunk();
            hs_sat26Df2a.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("GHC.Exception.SomeException\x00");
            };
            return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26Df2a);
        };
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_sat26Df2b, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableSomeException.evaluateOnce = function () {
        if (hs_zdctypeOf225uQuR.notEvaluated) {
            return hs_zdctypeOf225uQuR.hscall();
        } else {
            return hs_zdctypeOf225uQuR;
        }
    };
    this.hs_zdfExceptionSomeException.data = [$hs.modules.GHCziException.hs_zdfTypeableSomeException, $hs.modules.GHCziException.hs_zdfShowSomeException, hs_zdctoException25uQsb, $hs.modules.DataziMaybe.hs_Just];
    this.hs_Overflow.data = [];
    this.hs_Underflow.data = [];
    this.hs_LossOfPrecision.data = [];
    this.hs_DivideByZZero.data = [];
    this.hs_Denormal.data = [];
    this.hs_ErrorCall.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_SomeException.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_DZCException.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
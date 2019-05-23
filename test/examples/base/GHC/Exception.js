
$hs.modules.GHCziException = new $hs.Module();
$hs.modules.GHCziException.dependencies = ["GHC.Types", "GHC.CString", "Data.Maybe", "GHC.Show", "Data.Typeable", "Data.Typeable.Internal", "GHC.Classes"];
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
    this.hs_zdp1Exception.evaluate = function (hs_tpl26CQaZ) {
        $hs.modules.GHCziException.loadDependencies();
        return this.evaluate(hs_tpl26CQaZ);
    };
    this.hs_zdp2Exception.notEvaluated = true;
    this.hs_zdp2Exception.evaluate = function (hs_tpl26CQb7) {
        $hs.modules.GHCziException.loadDependencies();
        return this.evaluate(hs_tpl26CQb7);
    };
    this.hs_toException.notEvaluated = true;
    this.hs_toException.evaluate = function (hs_tpl26CQbf) {
        $hs.modules.GHCziException.loadDependencies();
        return this.evaluate(hs_tpl26CQbf);
    };
    this.hs_fromException.notEvaluated = true;
    this.hs_fromException.evaluate = function (hs_tpl26CQbn) {
        $hs.modules.GHCziException.loadDependencies();
        return this.evaluate(hs_tpl26CQbn);
    };
    this.hs_zddmfromException.notEvaluated = true;
    this.hs_zddmfromException.evaluate = function (hs_zddException26CQbC, hs_eta26CQbw) {
        $hs.modules.GHCziException.loadDependencies();
        return this.evaluate(hs_zddException26CQbC, hs_eta26CQbw);
    };
    this.hs_zddmtoException.notEvaluated = true;
    this.hs_zddmtoException.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziException.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_throw.notEvaluated = true;
    this.hs_throw.evaluate = function (hs_zddException26CQbH, hs_e26CQbI) {
        $hs.modules.GHCziException.loadDependencies();
        return this.evaluate(hs_zddException26CQbH, hs_e26CQbI);
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
    var hs_zdcshowsPrec25urFu = new $hs.Func(2);
    var hs_zdcshowList25urFF = new $hs.Thunk();
    var hs_zdcshow25urFG = new $hs.Thunk();
    var hs_zdctoException25urFH = new $hs.Func(1);
    var hs_zdcshowsPrec125urFK = new $hs.Func(2);
    var hs_zdcshowList125urFS = new $hs.Thunk();
    var hs_zdcshow125urFT = new $hs.Thunk();
    var hs_zdcshowsPrec225urFU = new $hs.Func(2);
    var hs_zdcshowList225urG5 = new $hs.Thunk();
    var hs_zdcshow225urG6 = new $hs.Thunk();
    var hs_zdczlze25urG7 = new $hs.Func(2);
    var hs_zdczg25urGi = new $hs.Func(2);
    var hs_zdczgze25urGt = new $hs.Func(2);
    var hs_zdczl25urGE = new $hs.Func(2);
    var hs_zdccompare25urGP = new $hs.Func(2);
    var hs_zdczeze25urH0 = new $hs.Func(2);
    var hs_zdczsze25urHb = new $hs.Func(2);
    var hs_zdcmin25urHh = new $hs.Thunk();
    var hs_zdcmax25urHi = new $hs.Thunk();
    var hs_zdctypeOf25urHj = new $hs.Func(1);
    var hs_zdctoException125urHq = new $hs.Func(1);
    var hs_zddTypeable25urHr = new $hs.Thunk();
    var hs_zdcfromException25urHs = new $hs.Func(1);
    var hs_zdctypeOf125urHB = new $hs.Func(1);
    var hs_zdctoException225urHI = new $hs.Func(1);
    var hs_zddTypeable125urHJ = new $hs.Thunk();
    var hs_zdcfromException125urHK = new $hs.Func(1);
    var hs_zdctypeOf225urHT = new $hs.Func(1);
    this.hs_zdp1Exception.evaluate = function (hs_tpl26CQaZ) {
        var hs_tpl26CQej = hs_tpl26CQaZ;
        if (hs_tpl26CQaZ.notEvaluated) {
            hs_tpl26CQej = hs_tpl26CQaZ.hscall();
        }
        var hs_tpl26CQb5 = hs_tpl26CQej.data[0];
        if (hs_tpl26CQb5.notEvaluated) {
            return hs_tpl26CQb5.hscall();
        } else {
            return hs_tpl26CQb5;
        }
    };
    this.hs_zdp2Exception.evaluate = function (hs_tpl26CQb7) {
        var hs_tpl26CQen = hs_tpl26CQb7;
        if (hs_tpl26CQb7.notEvaluated) {
            hs_tpl26CQen = hs_tpl26CQb7.hscall();
        }
        var hs_tpl26CQbd = hs_tpl26CQen.data[1];
        if (hs_tpl26CQbd.notEvaluated) {
            return hs_tpl26CQbd.hscall();
        } else {
            return hs_tpl26CQbd;
        }
    };
    this.hs_toException.evaluate = function (hs_tpl26CQbf) {
        var hs_tpl26CQer = hs_tpl26CQbf;
        if (hs_tpl26CQbf.notEvaluated) {
            hs_tpl26CQer = hs_tpl26CQbf.hscall();
        }
        var hs_tpl26CQbl = hs_tpl26CQer.data[2];
        if (hs_tpl26CQbl.notEvaluated) {
            return hs_tpl26CQbl.hscall();
        } else {
            return hs_tpl26CQbl;
        }
    };
    this.hs_fromException.evaluate = function (hs_tpl26CQbn) {
        var hs_tpl26CQev = hs_tpl26CQbn;
        if (hs_tpl26CQbn.notEvaluated) {
            hs_tpl26CQev = hs_tpl26CQbn.hscall();
        }
        var hs_tpl26CQbt = hs_tpl26CQev.data[3];
        if (hs_tpl26CQbt.notEvaluated) {
            return hs_tpl26CQbt.hscall();
        } else {
            return hs_tpl26CQbt;
        }
    };
    this.hs_zddmfromException.evaluate = function (hs_zddException26CQbC, hs_eta26CQbw) {
        var hs_wild26CQex = hs_eta26CQbw;
        if (hs_eta26CQbw.notEvaluated) {
            hs_wild26CQex = hs_eta26CQbw.hscall();
        }
        var hs_zddException126CQbA = hs_wild26CQex.data[0];
        var hs_e26CQbE = hs_wild26CQex.data[1];
        var hs_sat26CQey = new $hs.Thunk();
        hs_sat26CQey.evaluateOnce = function () {
            return $hs.modules.GHCziException.hs_zdp1Exception.hscall(hs_zddException26CQbC);
        };
        var hs_sat26CQew = new $hs.Thunk();
        hs_sat26CQew.evaluateOnce = function () {
            return $hs.modules.GHCziException.hs_zdp1Exception.hscall(hs_zddException126CQbA);
        };
        return $hs.modules.DataziTypeable.hs_cast.hscall(hs_sat26CQew, hs_sat26CQey, hs_e26CQbE);
    };
    this.hs_zddmtoException.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_throw.evaluate = function (hs_zddException26CQbH, hs_e26CQbI) {
        var hs_sat26CQez = new $hs.Thunk();
        hs_sat26CQez.evaluateOnce = function () {
            return $hs.modules.GHCziException.hs_toException.hscall(hs_zddException26CQbH, hs_e26CQbI);
        };
        throw "primitive operation raise#. Not implemeted yet.";
    };
    hs_zdcshowsPrec25urFu.evaluate = function (hs_p26CQbT, hs_ds26CQbN) {
        var hs_wild26CQeA = hs_ds26CQbN;
        if (hs_ds26CQbN.notEvaluated) {
            hs_wild26CQeA = hs_ds26CQbN.hscall();
        }
        var hs_zddException26CQbR = hs_wild26CQeA.data[0];
        var hs_e26CQbU = hs_wild26CQeA.data[1];
        var hs_sat26CQeB = $hs.modules.GHCziException.hs_zdp2Exception.hscall(hs_zddException26CQbR);
        return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_sat26CQeB, hs_p26CQbT, hs_e26CQbU);
    };
    this.hs_zdfShowSomeException.data = [hs_zdcshowsPrec25urFu, hs_zdcshow25urFG, hs_zdcshowList25urFF];
    hs_zdcshowList25urFF.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziException.hs_zdfShowSomeException);
    };
    hs_zdcshow25urFG.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziException.hs_zdfShowSomeException);
    };
    hs_zdctoException25urFH.evaluate = function (hs_se26CQbZ) {
        if (hs_se26CQbZ.notEvaluated) {
            return hs_se26CQbZ.hscall();
        } else {
            return hs_se26CQbZ;
        }
    };
    hs_zdcshowsPrec125urFK.evaluate = function (hs_ds26CQc7, hs_ds126CQc3) {
        var hs_wild26CQeC = hs_ds126CQc3;
        if (hs_ds126CQc3.notEvaluated) {
            hs_wild26CQeC = hs_ds126CQc3.hscall();
        }
        var hs_err26CQc6 = hs_wild26CQeC.data[0];
        return $hs.modules.GHCziShow.hs_showString.hscall(hs_err26CQc6);
    };
    this.hs_zdfShowErrorCall.data = [hs_zdcshowsPrec125urFK, hs_zdcshow125urFT, hs_zdcshowList125urFS];
    hs_zdcshowList125urFS.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziException.hs_zdfShowErrorCall);
    };
    hs_zdcshow125urFT.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziException.hs_zdfShowErrorCall);
    };
    hs_zdcshowsPrec225urFU.evaluate = function (hs_ds26CQck, hs_ds126CQcd) {
        var hs_wild26CQeE = hs_ds126CQcd;
        if (hs_ds126CQcd.notEvaluated) {
            hs_wild26CQeE = hs_ds126CQcd.hscall();
        }
        switch (hs_wild26CQeE.tag) {
        case 1:
            var hs_sat26CQeI = new $hs.Thunk();
            hs_sat26CQeI.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("arithmetic overflow\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26CQeI);
        case 2:
            var hs_sat26CQeD = new $hs.Thunk();
            hs_sat26CQeD.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("arithmetic underflow\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26CQeD);
        case 3:
            var hs_sat26CQeF = new $hs.Thunk();
            hs_sat26CQeF.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("loss of precision\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26CQeF);
        case 4:
            var hs_sat26CQeG = new $hs.Thunk();
            hs_sat26CQeG.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("divide by zero\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26CQeG);
        case 5:
            var hs_sat26CQeH = new $hs.Thunk();
            hs_sat26CQeH.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("denormal\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26CQeH);
        }
    };
    this.hs_zdfShowArithException.data = [hs_zdcshowsPrec225urFU, hs_zdcshow225urG6, hs_zdcshowList225urG5];
    hs_zdcshowList225urG5.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziException.hs_zdfShowArithException);
    };
    hs_zdcshow225urG6.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziException.hs_zdfShowArithException);
    };
    hs_zdczlze25urG7.evaluate = function (hs_a26CQcq, hs_b26CQcs) {
        var hs_wild26CQeK = hs_a26CQcq;
        if (hs_a26CQcq.notEvaluated) {
            hs_wild26CQeK = hs_a26CQcq.hscall();
        }
        switch (hs_wild26CQeK.tag) {
        case 1:
            var hs_wild126CQeO = hs_b26CQcs;
            if (hs_b26CQcs.notEvaluated) {
                hs_wild126CQeO = hs_b26CQcs.hscall();
            }
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild126CQeJ = hs_b26CQcs;
            if (hs_b26CQcs.notEvaluated) {
                hs_wild126CQeJ = hs_b26CQcs.hscall();
            }
            switch (hs_wild126CQeJ.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 5:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126CQeL = hs_b26CQcs;
            if (hs_b26CQcs.notEvaluated) {
                hs_wild126CQeL = hs_b26CQcs.hscall();
            }
            switch (hs_wild126CQeL.tag) {
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 5:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 4:
            var hs_wild126CQeM = hs_b26CQcs;
            if (hs_b26CQcs.notEvaluated) {
                hs_wild126CQeM = hs_b26CQcs.hscall();
            }
            switch (hs_wild126CQeM.tag) {
            case 4:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 5:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 5:
            var hs_wild126CQeN = hs_b26CQcs;
            if (hs_b26CQcs.notEvaluated) {
                hs_wild126CQeN = hs_b26CQcs.hscall();
            }
            switch (hs_wild126CQeN.tag) {
            case 5:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_zdczg25urGi.evaluate = function (hs_a26CQcB, hs_b26CQcD) {
        var hs_wild26CQeQ = hs_a26CQcB;
        if (hs_a26CQcB.notEvaluated) {
            hs_wild26CQeQ = hs_a26CQcB.hscall();
        }
        switch (hs_wild26CQeQ.tag) {
        case 1:
            var hs_wild126CQeU = hs_b26CQcD;
            if (hs_b26CQcD.notEvaluated) {
                hs_wild126CQeU = hs_b26CQcD.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild126CQeP = hs_b26CQcD;
            if (hs_b26CQcD.notEvaluated) {
                hs_wild126CQeP = hs_b26CQcD.hscall();
            }
            switch (hs_wild126CQeP.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 5:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126CQeR = hs_b26CQcD;
            if (hs_b26CQcD.notEvaluated) {
                hs_wild126CQeR = hs_b26CQcD.hscall();
            }
            switch (hs_wild126CQeR.tag) {
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 5:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 4:
            var hs_wild126CQeS = hs_b26CQcD;
            if (hs_b26CQcD.notEvaluated) {
                hs_wild126CQeS = hs_b26CQcD.hscall();
            }
            switch (hs_wild126CQeS.tag) {
            case 4:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 5:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 5:
            var hs_wild126CQeT = hs_b26CQcD;
            if (hs_b26CQcD.notEvaluated) {
                hs_wild126CQeT = hs_b26CQcD.hscall();
            }
            switch (hs_wild126CQeT.tag) {
            case 5:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_zdczgze25urGt.evaluate = function (hs_a26CQcM, hs_b26CQcO) {
        var hs_wild26CQeW = hs_a26CQcM;
        if (hs_a26CQcM.notEvaluated) {
            hs_wild26CQeW = hs_a26CQcM.hscall();
        }
        switch (hs_wild26CQeW.tag) {
        case 1:
            var hs_wild126CQf0 = hs_b26CQcO;
            if (hs_b26CQcO.notEvaluated) {
                hs_wild126CQf0 = hs_b26CQcO.hscall();
            }
            switch (hs_wild126CQf0.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 5:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_wild126CQeV = hs_b26CQcO;
            if (hs_b26CQcO.notEvaluated) {
                hs_wild126CQeV = hs_b26CQcO.hscall();
            }
            switch (hs_wild126CQeV.tag) {
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 5:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126CQeX = hs_b26CQcO;
            if (hs_b26CQcO.notEvaluated) {
                hs_wild126CQeX = hs_b26CQcO.hscall();
            }
            switch (hs_wild126CQeX.tag) {
            case 4:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 5:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 4:
            var hs_wild126CQeY = hs_b26CQcO;
            if (hs_b26CQcO.notEvaluated) {
                hs_wild126CQeY = hs_b26CQcO.hscall();
            }
            switch (hs_wild126CQeY.tag) {
            case 5:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 5:
            var hs_wild126CQeZ = hs_b26CQcO;
            if (hs_b26CQcO.notEvaluated) {
                hs_wild126CQeZ = hs_b26CQcO.hscall();
            }
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl25urGE.evaluate = function (hs_a26CQcX, hs_b26CQcZ) {
        var hs_wild26CQf2 = hs_a26CQcX;
        if (hs_a26CQcX.notEvaluated) {
            hs_wild26CQf2 = hs_a26CQcX.hscall();
        }
        switch (hs_wild26CQf2.tag) {
        case 1:
            var hs_wild126CQf6 = hs_b26CQcZ;
            if (hs_b26CQcZ.notEvaluated) {
                hs_wild126CQf6 = hs_b26CQcZ.hscall();
            }
            switch (hs_wild126CQf6.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 5:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_wild126CQf1 = hs_b26CQcZ;
            if (hs_b26CQcZ.notEvaluated) {
                hs_wild126CQf1 = hs_b26CQcZ.hscall();
            }
            switch (hs_wild126CQf1.tag) {
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 5:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126CQf3 = hs_b26CQcZ;
            if (hs_b26CQcZ.notEvaluated) {
                hs_wild126CQf3 = hs_b26CQcZ.hscall();
            }
            switch (hs_wild126CQf3.tag) {
            case 4:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 5:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 4:
            var hs_wild126CQf4 = hs_b26CQcZ;
            if (hs_b26CQcZ.notEvaluated) {
                hs_wild126CQf4 = hs_b26CQcZ.hscall();
            }
            switch (hs_wild126CQf4.tag) {
            case 5:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 5:
            var hs_wild126CQf5 = hs_b26CQcZ;
            if (hs_b26CQcZ.notEvaluated) {
                hs_wild126CQf5 = hs_b26CQcZ.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare25urGP.evaluate = function (hs_a26CQd8, hs_b26CQda) {
        var hs_wild26CQf8 = hs_a26CQd8;
        if (hs_a26CQd8.notEvaluated) {
            hs_wild26CQf8 = hs_a26CQd8.hscall();
        }
        switch (hs_wild26CQf8.tag) {
        case 1:
            var hs_wild126CQfc = hs_b26CQda;
            if (hs_b26CQda.notEvaluated) {
                hs_wild126CQfc = hs_b26CQda.hscall();
            }
            switch (hs_wild126CQfc.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 5:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_wild126CQf7 = hs_b26CQda;
            if (hs_b26CQda.notEvaluated) {
                hs_wild126CQf7 = hs_b26CQda.hscall();
            }
            switch (hs_wild126CQf7.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 5:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126CQf9 = hs_b26CQda;
            if (hs_b26CQda.notEvaluated) {
                hs_wild126CQf9 = hs_b26CQda.hscall();
            }
            switch (hs_wild126CQf9.tag) {
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 5:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        case 4:
            var hs_wild126CQfa = hs_b26CQda;
            if (hs_b26CQda.notEvaluated) {
                hs_wild126CQfa = hs_b26CQda.hscall();
            }
            switch (hs_wild126CQfa.tag) {
            case 4:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 5:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        case 5:
            var hs_wild126CQfb = hs_b26CQda;
            if (hs_b26CQda.notEvaluated) {
                hs_wild126CQfb = hs_b26CQda.hscall();
            }
            switch (hs_wild126CQfb.tag) {
            case 5:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_zdczeze25urH0.evaluate = function (hs_a26CQdj, hs_b26CQdl) {
        var hs_wild26CQfe = hs_a26CQdj;
        if (hs_a26CQdj.notEvaluated) {
            hs_wild26CQfe = hs_a26CQdj.hscall();
        }
        switch (hs_wild26CQfe.tag) {
        case 1:
            var hs_wild126CQfi = hs_b26CQdl;
            if (hs_b26CQdl.notEvaluated) {
                hs_wild126CQfi = hs_b26CQdl.hscall();
            }
            switch (hs_wild126CQfi.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 5:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_wild126CQfd = hs_b26CQdl;
            if (hs_b26CQdl.notEvaluated) {
                hs_wild126CQfd = hs_b26CQdl.hscall();
            }
            switch (hs_wild126CQfd.tag) {
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126CQff = hs_b26CQdl;
            if (hs_b26CQdl.notEvaluated) {
                hs_wild126CQff = hs_b26CQdl.hscall();
            }
            switch (hs_wild126CQff.tag) {
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 4:
            var hs_wild126CQfg = hs_b26CQdl;
            if (hs_b26CQdl.notEvaluated) {
                hs_wild126CQfg = hs_b26CQdl.hscall();
            }
            switch (hs_wild126CQfg.tag) {
            case 4:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 5:
            var hs_wild126CQfh = hs_b26CQdl;
            if (hs_b26CQdl.notEvaluated) {
                hs_wild126CQfh = hs_b26CQdl.hscall();
            }
            switch (hs_wild126CQfh.tag) {
            case 5:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        }
    };
    this.hs_zdfEqArithException.data = [hs_zdczeze25urH0, hs_zdczsze25urHb];
    hs_zdczsze25urHb.evaluate = function (hs_a26CQdu, hs_b26CQdv) {
        var hs_sat26CQfj = new $hs.Thunk();
        hs_sat26CQfj.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziException.hs_zdfEqArithException, hs_a26CQdu, hs_b26CQdv);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26CQfj);
    };
    this.hs_zdfOrdArithException.data = [$hs.modules.GHCziException.hs_zdfEqArithException, hs_zdccompare25urGP, hs_zdczl25urGE, hs_zdczgze25urGt, hs_zdczg25urGi, hs_zdczlze25urG7, hs_zdcmax25urHi, hs_zdcmin25urHh];
    hs_zdcmin25urHh.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziException.hs_zdfOrdArithException);
    };
    hs_zdcmax25urHi.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziException.hs_zdfOrdArithException);
    };
    hs_zdctypeOf25urHj.evaluate = function (hs_ds26CQdF) {
        var hs_sat26CQfk = new $hs.Thunk();
        hs_sat26CQfk.evaluateOnce = function () {
            var hs_sat26CQfm = new $hs.Thunk();
            hs_sat26CQfm.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ArithException\x00");
            };
            var hs_sat26CQfn = new $hs.Thunk();
            hs_sat26CQfn.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GHC.Exception\x00");
            };
            var hs_sat26CQfl = new $hs.Thunk();
            hs_sat26CQfl.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26CQfl, hs_sat26CQfn, hs_sat26CQfm);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26CQfk, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableArithException.evaluateOnce = function () {
        if (hs_zdctypeOf25urHj.notEvaluated) {
            return hs_zdctypeOf25urHj.hscall();
        } else {
            return hs_zdctypeOf25urHj;
        }
    };
    this.hs_zdfExceptionArithException.data = [hs_zdctypeOf25urHj, $hs.modules.GHCziException.hs_zdfShowArithException, hs_zdctoException125urHq, hs_zdcfromException25urHs];
    hs_zdctoException125urHq.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [$hs.modules.GHCziException.hs_zdfExceptionArithException, hs_eta1cW6l3];
        return $res;
    };
    hs_zddTypeable25urHr.evaluateOnce = function () {
        return $hs.modules.GHCziException.hs_zdp1Exception.hscall($hs.modules.GHCziException.hs_zdfExceptionArithException);
    };
    hs_zdcfromException25urHs.evaluate = function (hs_ds26CQdK) {
        var hs_wild26CQfp = hs_ds26CQdK;
        if (hs_ds26CQdK.notEvaluated) {
            hs_wild26CQfp = hs_ds26CQdK.hscall();
        }
        var hs_zddException26CQdO = hs_wild26CQfp.data[0];
        var hs_e26CQdQ = hs_wild26CQfp.data[1];
        var hs_sat26CQfo = new $hs.Thunk();
        hs_sat26CQfo.evaluateOnce = function () {
            return $hs.modules.GHCziException.hs_zdp1Exception.hscall(hs_zddException26CQdO);
        };
        return $hs.modules.DataziTypeable.hs_cast.hscall(hs_sat26CQfo, hs_zddTypeable25urHr, hs_e26CQdQ);
    };
    hs_zdctypeOf125urHB.evaluate = function (hs_ds26CQdX) {
        var hs_sat26CQfq = new $hs.Thunk();
        hs_sat26CQfq.evaluateOnce = function () {
            var hs_sat26CQfs = new $hs.Thunk();
            hs_sat26CQfs.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ErrorCall\x00");
            };
            var hs_sat26CQft = new $hs.Thunk();
            hs_sat26CQft.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GHC.Exception\x00");
            };
            var hs_sat26CQfr = new $hs.Thunk();
            hs_sat26CQfr.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26CQfr, hs_sat26CQft, hs_sat26CQfs);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26CQfq, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableErrorCall.evaluateOnce = function () {
        if (hs_zdctypeOf125urHB.notEvaluated) {
            return hs_zdctypeOf125urHB.hscall();
        } else {
            return hs_zdctypeOf125urHB;
        }
    };
    this.hs_zdfExceptionErrorCall.data = [hs_zdctypeOf125urHB, $hs.modules.GHCziException.hs_zdfShowErrorCall, hs_zdctoException225urHI, hs_zdcfromException125urHK];
    hs_zdctoException225urHI.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [$hs.modules.GHCziException.hs_zdfExceptionErrorCall, hs_eta1cW6l3];
        return $res;
    };
    hs_zddTypeable125urHJ.evaluateOnce = function () {
        return $hs.modules.GHCziException.hs_zdp1Exception.hscall($hs.modules.GHCziException.hs_zdfExceptionErrorCall);
    };
    hs_zdcfromException125urHK.evaluate = function (hs_ds26CQe2) {
        var hs_wild26CQfv = hs_ds26CQe2;
        if (hs_ds26CQe2.notEvaluated) {
            hs_wild26CQfv = hs_ds26CQe2.hscall();
        }
        var hs_zddException26CQe6 = hs_wild26CQfv.data[0];
        var hs_e26CQe8 = hs_wild26CQfv.data[1];
        var hs_sat26CQfu = new $hs.Thunk();
        hs_sat26CQfu.evaluateOnce = function () {
            return $hs.modules.GHCziException.hs_zdp1Exception.hscall(hs_zddException26CQe6);
        };
        return $hs.modules.DataziTypeable.hs_cast.hscall(hs_sat26CQfu, hs_zddTypeable125urHJ, hs_e26CQe8);
    };
    hs_zdctypeOf225urHT.evaluate = function (hs_ds26CQef) {
        var hs_sat26CQfw = new $hs.Thunk();
        hs_sat26CQfw.evaluateOnce = function () {
            var hs_sat26CQfy = new $hs.Thunk();
            hs_sat26CQfy.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("SomeException\x00");
            };
            var hs_sat26CQfz = new $hs.Thunk();
            hs_sat26CQfz.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GHC.Exception\x00");
            };
            var hs_sat26CQfx = new $hs.Thunk();
            hs_sat26CQfx.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26CQfx, hs_sat26CQfz, hs_sat26CQfy);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26CQfw, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableSomeException.evaluateOnce = function () {
        if (hs_zdctypeOf225urHT.notEvaluated) {
            return hs_zdctypeOf225urHT.hscall();
        } else {
            return hs_zdctypeOf225urHT;
        }
    };
    this.hs_zdfExceptionSomeException.data = [hs_zdctypeOf225urHT, $hs.modules.GHCziException.hs_zdfShowSomeException, hs_zdctoException25urFH, $hs.modules.DataziMaybe.hs_Just];
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
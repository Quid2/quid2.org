
$hs.modules.GHCziUnicode = new $hs.Module();
$hs.modules.GHCziUnicode.dependencies = ["GHC.Prim", "GHC.Integer", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Classes", "Foreign.C.Types"];
$hs.modules.GHCziUnicode.initBeforeDependencies = function () {
    this.hs_wgencat = new $hs.Func(1);
    this.hs_isAscii = new $hs.Func(1);
    this.hs_isLatin1 = new $hs.Func(1);
    this.hs_isAsciiLower = new $hs.Func(1);
    this.hs_isAsciiUpper = new $hs.Func(1);
    this.hs_isSpace = new $hs.Func(1);
    this.hs_isDigit = new $hs.Func(1);
    this.hs_isHexDigit = new $hs.Func(1);
    this.hs_isOctDigit = new $hs.Func(1);
    this.hs_isAlpha = new $hs.Func(1);
    this.hs_isAlphaNum = new $hs.Func(1);
    this.hs_isControl = new $hs.Func(1);
    this.hs_isPrint = new $hs.Func(1);
    this.hs_isUpper = new $hs.Func(1);
    this.hs_isLower = new $hs.Func(1);
    this.hs_toLower = new $hs.Func(1);
    this.hs_toUpper = new $hs.Func(1);
    this.hs_toTitle = new $hs.Func(1);
    this.hs_wgencat.notEvaluated = true;
    this.hs_wgencat.evaluate = function (hs_ds26DBq0) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_ds26DBq0);
    };
    this.hs_isAscii.notEvaluated = true;
    this.hs_isAscii.evaluate = function (hs_c26DBqb) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26DBqb);
    };
    this.hs_isLatin1.notEvaluated = true;
    this.hs_isLatin1.evaluate = function (hs_c26DBqe) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26DBqe);
    };
    this.hs_isAsciiLower.notEvaluated = true;
    this.hs_isAsciiLower.evaluate = function (hs_c26DBqh) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26DBqh);
    };
    this.hs_isAsciiUpper.notEvaluated = true;
    this.hs_isAsciiUpper.evaluate = function (hs_c26DBqn) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26DBqn);
    };
    this.hs_isSpace.notEvaluated = true;
    this.hs_isSpace.evaluate = function (hs_c26DBqt) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26DBqt);
    };
    this.hs_isDigit.notEvaluated = true;
    this.hs_isDigit.evaluate = function (hs_c26DBr3) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26DBr3);
    };
    this.hs_isHexDigit.notEvaluated = true;
    this.hs_isHexDigit.evaluate = function (hs_c26DBr9) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26DBr9);
    };
    this.hs_isOctDigit.notEvaluated = true;
    this.hs_isOctDigit.evaluate = function (hs_c26DBrn) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26DBrn);
    };
    this.hs_isAlpha.notEvaluated = true;
    this.hs_isAlpha.evaluate = function (hs_c26DBrt) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26DBrt);
    };
    this.hs_isAlphaNum.notEvaluated = true;
    this.hs_isAlphaNum.evaluate = function (hs_c26DBrI) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26DBrI);
    };
    this.hs_isControl.notEvaluated = true;
    this.hs_isControl.evaluate = function (hs_c26DBrX) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26DBrX);
    };
    this.hs_isPrint.notEvaluated = true;
    this.hs_isPrint.evaluate = function (hs_c26DBsc) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26DBsc);
    };
    this.hs_isUpper.notEvaluated = true;
    this.hs_isUpper.evaluate = function (hs_c26DBsr) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26DBsr);
    };
    this.hs_isLower.notEvaluated = true;
    this.hs_isLower.evaluate = function (hs_c26DBsG) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26DBsG);
    };
    this.hs_toLower.notEvaluated = true;
    this.hs_toLower.evaluate = function (hs_c26DBsV) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26DBsV);
    };
    this.hs_toUpper.notEvaluated = true;
    this.hs_toUpper.evaluate = function (hs_c26DBt9) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26DBt9);
    };
    this.hs_toTitle.notEvaluated = true;
    this.hs_toTitle.evaluate = function (hs_c26DBtn) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26DBtn);
    };
};
$hs.modules.GHCziUnicode.initAfterDependencies = function () {
    this.hs_wgencat.notEvaluated = false;
    this.hs_isAscii.notEvaluated = false;
    this.hs_isLatin1.notEvaluated = false;
    this.hs_isAsciiLower.notEvaluated = false;
    this.hs_isAsciiUpper.notEvaluated = false;
    this.hs_isSpace.notEvaluated = false;
    this.hs_isDigit.notEvaluated = false;
    this.hs_isHexDigit.notEvaluated = false;
    this.hs_isOctDigit.notEvaluated = false;
    this.hs_isAlpha.notEvaluated = false;
    this.hs_isAlphaNum.notEvaluated = false;
    this.hs_isControl.notEvaluated = false;
    this.hs_isPrint.notEvaluated = false;
    this.hs_isUpper.notEvaluated = false;
    this.hs_isLower.notEvaluated = false;
    this.hs_toLower.notEvaluated = false;
    this.hs_toUpper.notEvaluated = false;
    this.hs_toTitle.notEvaluated = false;
    this.hs_wgencat.evaluate = function (hs_ds26DBq0) {
        var hs_ds126DBtC = hs_ds26DBq0;
        if (hs_ds26DBq0.notEvaluated) {
            hs_ds126DBtC = hs_ds26DBq0.hscall();
        }
        var hs_ds226DBq4 = hs_ds126DBtC.data[0];
        var hs_wild26DBtB = [$hs.modules.GHCziPrim.hs_realWorldzh, u_gencat(hs_ds226DBq4)];
        var hs_ds426DBq9 = hs_wild26DBtB[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426DBq9];
        return $res;
    };
    this.hs_isAscii.evaluate = function (hs_c26DBqb) {
        var hs_sat26DBtD = new $hs.Data(1);
        hs_sat26DBtD.data = ["\x80"];
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26DBqb, hs_sat26DBtD);
    };
    this.hs_isLatin1.evaluate = function (hs_c26DBqe) {
        var hs_sat26DBtE = new $hs.Data(1);
        hs_sat26DBtE.data = ["\xff"];
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26DBqe, hs_sat26DBtE);
    };
    this.hs_isAsciiLower.evaluate = function (hs_c26DBqh) {
        var hs_sat26DBtG = new $hs.Thunk();
        hs_sat26DBtG.evaluateOnce = function () {
            var hs_sat26DBtF = new $hs.Data(1);
            hs_sat26DBtF.data = ["z"];
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26DBqh, hs_sat26DBtF);
        };
        var hs_sat26DBtI = new $hs.Thunk();
        hs_sat26DBtI.evaluateOnce = function () {
            var hs_sat26DBtH = new $hs.Data(1);
            hs_sat26DBtH.data = ["a"];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26DBqh, hs_sat26DBtH);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DBtI, hs_sat26DBtG);
    };
    this.hs_isAsciiUpper.evaluate = function (hs_c26DBqn) {
        var hs_sat26DBtK = new $hs.Thunk();
        hs_sat26DBtK.evaluateOnce = function () {
            var hs_sat26DBtJ = new $hs.Data(1);
            hs_sat26DBtJ.data = ["Z"];
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26DBqn, hs_sat26DBtJ);
        };
        var hs_sat26DBtM = new $hs.Thunk();
        hs_sat26DBtM.evaluateOnce = function () {
            var hs_sat26DBtL = new $hs.Data(1);
            hs_sat26DBtL.data = ["A"];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26DBqn, hs_sat26DBtL);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DBtM, hs_sat26DBtK);
    };
    this.hs_isSpace.evaluate = function (hs_c26DBqt) {
        var hs_sat26DBuc = new $hs.Thunk();
        hs_sat26DBuc.evaluateOnce = function () {
            var hs_sat26DBu9 = new $hs.Thunk();
            hs_sat26DBu9.evaluateOnce = function () {
                var hs_sat26DBu6 = new $hs.Thunk();
                hs_sat26DBu6.evaluateOnce = function () {
                    var hs_sat26DBu3 = new $hs.Thunk();
                    hs_sat26DBu3.evaluateOnce = function () {
                        var hs_sat26DBu0 = new $hs.Thunk();
                        hs_sat26DBu0.evaluateOnce = function () {
                            var hs_sat26DBtX = new $hs.Thunk();
                            hs_sat26DBtX.evaluateOnce = function () {
                                var hs_sat26DBtU = new $hs.Thunk();
                                hs_sat26DBtU.evaluateOnce = function () {
                                    var hs_sat26DBtO = new $hs.Thunk();
                                    hs_sat26DBtO.evaluateOnce = function () {
                                        var hs_sat26DBtN = new $hs.Thunk();
                                        hs_sat26DBtN.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DBtN);
                                    };
                                    var hs_sat26DBtT = new $hs.Thunk();
                                    hs_sat26DBtT.evaluateOnce = function () {
                                        var hs_sat26DBtS = new $hs.Thunk();
                                        hs_sat26DBtS.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DBqt);
                                        };
                                        var hs_ds26DBtR = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DBtS);
                                        var hs_ds126DBqM = hs_ds26DBtR.data[0];
                                        var hs_wild26DBtQ = [$hs.modules.GHCziPrim.hs_realWorldzh, u_iswspace(hs_ds126DBqM)];
                                        var hs_ds326DBqR = hs_wild26DBtQ[1];
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_ds326DBqR];
                                        return $res;
                                    };
                                    return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DBtT, hs_sat26DBtO);
                                };
                                var hs_sat26DBtW = new $hs.Thunk();
                                hs_sat26DBtW.evaluateOnce = function () {
                                    var hs_sat26DBtV = new $hs.Data(1);
                                    hs_sat26DBtV.data = ["\xa0"];
                                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26DBqt, hs_sat26DBtV);
                                };
                                return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DBtW, hs_sat26DBtU);
                            };
                            var hs_sat26DBtZ = new $hs.Thunk();
                            hs_sat26DBtZ.evaluateOnce = function () {
                                var hs_sat26DBtY = new $hs.Data(1);
                                hs_sat26DBtY.data = ["\v"];
                                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26DBqt, hs_sat26DBtY);
                            };
                            return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DBtZ, hs_sat26DBtX);
                        };
                        var hs_sat26DBu2 = new $hs.Thunk();
                        hs_sat26DBu2.evaluateOnce = function () {
                            var hs_sat26DBu1 = new $hs.Data(1);
                            hs_sat26DBu1.data = ["\f"];
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26DBqt, hs_sat26DBu1);
                        };
                        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DBu2, hs_sat26DBu0);
                    };
                    var hs_sat26DBu5 = new $hs.Thunk();
                    hs_sat26DBu5.evaluateOnce = function () {
                        var hs_sat26DBu4 = new $hs.Data(1);
                        hs_sat26DBu4.data = ["\r"];
                        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26DBqt, hs_sat26DBu4);
                    };
                    return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DBu5, hs_sat26DBu3);
                };
                var hs_sat26DBu8 = new $hs.Thunk();
                hs_sat26DBu8.evaluateOnce = function () {
                    var hs_sat26DBu7 = new $hs.Data(1);
                    hs_sat26DBu7.data = ["\n"];
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26DBqt, hs_sat26DBu7);
                };
                return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DBu8, hs_sat26DBu6);
            };
            var hs_sat26DBub = new $hs.Thunk();
            hs_sat26DBub.evaluateOnce = function () {
                var hs_sat26DBua = new $hs.Data(1);
                hs_sat26DBua.data = ["\t"];
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26DBqt, hs_sat26DBua);
            };
            return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DBub, hs_sat26DBu9);
        };
        var hs_sat26DBue = new $hs.Thunk();
        hs_sat26DBue.evaluateOnce = function () {
            var hs_sat26DBud = new $hs.Data(1);
            hs_sat26DBud.data = [" "];
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26DBqt, hs_sat26DBud);
        };
        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DBue, hs_sat26DBuc);
    };
    this.hs_isDigit.evaluate = function (hs_c26DBr3) {
        var hs_sat26DBug = new $hs.Thunk();
        hs_sat26DBug.evaluateOnce = function () {
            var hs_sat26DBuf = new $hs.Data(1);
            hs_sat26DBuf.data = ["9"];
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26DBr3, hs_sat26DBuf);
        };
        var hs_sat26DBui = new $hs.Thunk();
        hs_sat26DBui.evaluateOnce = function () {
            var hs_sat26DBuh = new $hs.Data(1);
            hs_sat26DBuh.data = ["0"];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26DBr3, hs_sat26DBuh);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DBui, hs_sat26DBug);
    };
    this.hs_isHexDigit.evaluate = function (hs_c26DBr9) {
        var hs_sat26DBut = new $hs.Thunk();
        hs_sat26DBut.evaluateOnce = function () {
            var hs_sat26DBun = new $hs.Thunk();
            hs_sat26DBun.evaluateOnce = function () {
                var hs_sat26DBuk = new $hs.Thunk();
                hs_sat26DBuk.evaluateOnce = function () {
                    var hs_sat26DBuj = new $hs.Data(1);
                    hs_sat26DBuj.data = ["f"];
                    return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26DBr9, hs_sat26DBuj);
                };
                var hs_sat26DBum = new $hs.Thunk();
                hs_sat26DBum.evaluateOnce = function () {
                    var hs_sat26DBul = new $hs.Data(1);
                    hs_sat26DBul.data = ["a"];
                    return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26DBr9, hs_sat26DBul);
                };
                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DBum, hs_sat26DBuk);
            };
            var hs_sat26DBus = new $hs.Thunk();
            hs_sat26DBus.evaluateOnce = function () {
                var hs_sat26DBup = new $hs.Thunk();
                hs_sat26DBup.evaluateOnce = function () {
                    var hs_sat26DBuo = new $hs.Data(1);
                    hs_sat26DBuo.data = ["F"];
                    return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26DBr9, hs_sat26DBuo);
                };
                var hs_sat26DBur = new $hs.Thunk();
                hs_sat26DBur.evaluateOnce = function () {
                    var hs_sat26DBuq = new $hs.Data(1);
                    hs_sat26DBuq.data = ["A"];
                    return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26DBr9, hs_sat26DBuq);
                };
                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DBur, hs_sat26DBup);
            };
            return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DBus, hs_sat26DBun);
        };
        var hs_sat26DBuu = new $hs.Thunk();
        hs_sat26DBuu.evaluateOnce = function () {
            return $hs.modules.GHCziUnicode.hs_isDigit.hscall(hs_c26DBr9);
        };
        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DBuu, hs_sat26DBut);
    };
    this.hs_isOctDigit.evaluate = function (hs_c26DBrn) {
        var hs_sat26DBuw = new $hs.Thunk();
        hs_sat26DBuw.evaluateOnce = function () {
            var hs_sat26DBuv = new $hs.Data(1);
            hs_sat26DBuv.data = ["7"];
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26DBrn, hs_sat26DBuv);
        };
        var hs_sat26DBuy = new $hs.Thunk();
        hs_sat26DBuy.evaluateOnce = function () {
            var hs_sat26DBux = new $hs.Data(1);
            hs_sat26DBux.data = ["0"];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26DBrn, hs_sat26DBux);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DBuy, hs_sat26DBuw);
    };
    this.hs_isAlpha.evaluate = function (hs_c26DBrt) {
        var hs_sat26DBuA = new $hs.Thunk();
        hs_sat26DBuA.evaluateOnce = function () {
            var hs_sat26DBuz = new $hs.Thunk();
            hs_sat26DBuz.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DBuz);
        };
        var hs_sat26DBuF = new $hs.Thunk();
        hs_sat26DBuF.evaluateOnce = function () {
            var hs_sat26DBuE = new $hs.Thunk();
            hs_sat26DBuE.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DBrt);
            };
            var hs_ds26DBuD = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DBuE);
            var hs_ds126DBry = hs_ds26DBuD.data[0];
            var hs_wild26DBuC = [$hs.modules.GHCziPrim.hs_realWorldzh, u_iswalpha(hs_ds126DBry)];
            var hs_ds326DBrD = hs_wild26DBuC[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DBrD];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DBuF, hs_sat26DBuA);
    };
    this.hs_isAlphaNum.evaluate = function (hs_c26DBrI) {
        var hs_sat26DBuH = new $hs.Thunk();
        hs_sat26DBuH.evaluateOnce = function () {
            var hs_sat26DBuG = new $hs.Thunk();
            hs_sat26DBuG.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DBuG);
        };
        var hs_sat26DBuM = new $hs.Thunk();
        hs_sat26DBuM.evaluateOnce = function () {
            var hs_sat26DBuL = new $hs.Thunk();
            hs_sat26DBuL.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DBrI);
            };
            var hs_ds26DBuK = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DBuL);
            var hs_ds126DBrN = hs_ds26DBuK.data[0];
            var hs_wild26DBuJ = [$hs.modules.GHCziPrim.hs_realWorldzh, u_iswalnum(hs_ds126DBrN)];
            var hs_ds326DBrS = hs_wild26DBuJ[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DBrS];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DBuM, hs_sat26DBuH);
    };
    this.hs_isControl.evaluate = function (hs_c26DBrX) {
        var hs_sat26DBuO = new $hs.Thunk();
        hs_sat26DBuO.evaluateOnce = function () {
            var hs_sat26DBuN = new $hs.Thunk();
            hs_sat26DBuN.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DBuN);
        };
        var hs_sat26DBuT = new $hs.Thunk();
        hs_sat26DBuT.evaluateOnce = function () {
            var hs_sat26DBuS = new $hs.Thunk();
            hs_sat26DBuS.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DBrX);
            };
            var hs_ds26DBuR = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DBuS);
            var hs_ds126DBs2 = hs_ds26DBuR.data[0];
            var hs_wild26DBuQ = [$hs.modules.GHCziPrim.hs_realWorldzh, u_iswcntrl(hs_ds126DBs2)];
            var hs_ds326DBs7 = hs_wild26DBuQ[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DBs7];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DBuT, hs_sat26DBuO);
    };
    this.hs_isPrint.evaluate = function (hs_c26DBsc) {
        var hs_sat26DBuV = new $hs.Thunk();
        hs_sat26DBuV.evaluateOnce = function () {
            var hs_sat26DBuU = new $hs.Thunk();
            hs_sat26DBuU.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DBuU);
        };
        var hs_sat26DBv0 = new $hs.Thunk();
        hs_sat26DBv0.evaluateOnce = function () {
            var hs_sat26DBuZ = new $hs.Thunk();
            hs_sat26DBuZ.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DBsc);
            };
            var hs_ds26DBuY = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DBuZ);
            var hs_ds126DBsh = hs_ds26DBuY.data[0];
            var hs_wild26DBuX = [$hs.modules.GHCziPrim.hs_realWorldzh, u_iswprint(hs_ds126DBsh)];
            var hs_ds326DBsm = hs_wild26DBuX[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DBsm];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DBv0, hs_sat26DBuV);
    };
    this.hs_isUpper.evaluate = function (hs_c26DBsr) {
        var hs_sat26DBv2 = new $hs.Thunk();
        hs_sat26DBv2.evaluateOnce = function () {
            var hs_sat26DBv1 = new $hs.Thunk();
            hs_sat26DBv1.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DBv1);
        };
        var hs_sat26DBv7 = new $hs.Thunk();
        hs_sat26DBv7.evaluateOnce = function () {
            var hs_sat26DBv6 = new $hs.Thunk();
            hs_sat26DBv6.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DBsr);
            };
            var hs_ds26DBv5 = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DBv6);
            var hs_ds126DBsw = hs_ds26DBv5.data[0];
            var hs_wild26DBv4 = [$hs.modules.GHCziPrim.hs_realWorldzh, u_iswupper(hs_ds126DBsw)];
            var hs_ds326DBsB = hs_wild26DBv4[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DBsB];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DBv7, hs_sat26DBv2);
    };
    this.hs_isLower.evaluate = function (hs_c26DBsG) {
        var hs_sat26DBv9 = new $hs.Thunk();
        hs_sat26DBv9.evaluateOnce = function () {
            var hs_sat26DBv8 = new $hs.Thunk();
            hs_sat26DBv8.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DBv8);
        };
        var hs_sat26DBve = new $hs.Thunk();
        hs_sat26DBve.evaluateOnce = function () {
            var hs_sat26DBvd = new $hs.Thunk();
            hs_sat26DBvd.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DBsG);
            };
            var hs_ds26DBvc = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DBvd);
            var hs_ds126DBsL = hs_ds26DBvc.data[0];
            var hs_wild26DBvb = [$hs.modules.GHCziPrim.hs_realWorldzh, u_iswlower(hs_ds126DBsL)];
            var hs_ds326DBsQ = hs_wild26DBvb[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DBsQ];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DBve, hs_sat26DBv9);
    };
    this.hs_toLower.evaluate = function (hs_c26DBsV) {
        var hs_sat26DBvk = new $hs.Thunk();
        hs_sat26DBvk.evaluateOnce = function () {
            var hs_sat26DBvj = new $hs.Thunk();
            hs_sat26DBvj.evaluateOnce = function () {
                var hs_sat26DBvi = new $hs.Thunk();
                hs_sat26DBvi.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DBsV);
                };
                var hs_ds26DBvh = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DBvi);
                var hs_ds126DBt0 = hs_ds26DBvh.data[0];
                var hs_wild26DBvg = [$hs.modules.GHCziPrim.hs_realWorldzh, u_towlower(hs_ds126DBt0)];
                var hs_ds326DBt5 = hs_wild26DBvg[1];
                var $res = new $hs.Data(1);
                $res.data = [hs_ds326DBt5];
                return $res;
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DBvj);
        };
        return $hs.modules.GHCziBase.hs_chr.hscall(hs_sat26DBvk);
    };
    this.hs_toUpper.evaluate = function (hs_c26DBt9) {
        var hs_sat26DBvq = new $hs.Thunk();
        hs_sat26DBvq.evaluateOnce = function () {
            var hs_sat26DBvp = new $hs.Thunk();
            hs_sat26DBvp.evaluateOnce = function () {
                var hs_sat26DBvo = new $hs.Thunk();
                hs_sat26DBvo.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DBt9);
                };
                var hs_ds26DBvn = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DBvo);
                var hs_ds126DBte = hs_ds26DBvn.data[0];
                var hs_wild26DBvm = [$hs.modules.GHCziPrim.hs_realWorldzh, u_towupper(hs_ds126DBte)];
                var hs_ds326DBtj = hs_wild26DBvm[1];
                var $res = new $hs.Data(1);
                $res.data = [hs_ds326DBtj];
                return $res;
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DBvp);
        };
        return $hs.modules.GHCziBase.hs_chr.hscall(hs_sat26DBvq);
    };
    this.hs_toTitle.evaluate = function (hs_c26DBtn) {
        var hs_sat26DBvw = new $hs.Thunk();
        hs_sat26DBvw.evaluateOnce = function () {
            var hs_sat26DBvv = new $hs.Thunk();
            hs_sat26DBvv.evaluateOnce = function () {
                var hs_sat26DBvu = new $hs.Thunk();
                hs_sat26DBvu.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DBtn);
                };
                var hs_ds26DBvt = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DBvu);
                var hs_ds126DBts = hs_ds26DBvt.data[0];
                var hs_wild26DBvs = [$hs.modules.GHCziPrim.hs_realWorldzh, u_towtitle(hs_ds126DBts)];
                var hs_ds326DBtx = hs_wild26DBvs[1];
                var $res = new $hs.Data(1);
                $res.data = [hs_ds326DBtx];
                return $res;
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DBvv);
        };
        return $hs.modules.GHCziBase.hs_chr.hscall(hs_sat26DBvw);
    };
};
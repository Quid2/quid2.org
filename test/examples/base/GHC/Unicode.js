
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
    this.hs_wgencat.evaluate = function (hs_ds26De5V) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_ds26De5V);
    };
    this.hs_isAscii.notEvaluated = true;
    this.hs_isAscii.evaluate = function (hs_c26De66) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26De66);
    };
    this.hs_isLatin1.notEvaluated = true;
    this.hs_isLatin1.evaluate = function (hs_c26De69) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26De69);
    };
    this.hs_isAsciiLower.notEvaluated = true;
    this.hs_isAsciiLower.evaluate = function (hs_c26De6c) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26De6c);
    };
    this.hs_isAsciiUpper.notEvaluated = true;
    this.hs_isAsciiUpper.evaluate = function (hs_c26De6i) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26De6i);
    };
    this.hs_isSpace.notEvaluated = true;
    this.hs_isSpace.evaluate = function (hs_c26De6o) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26De6o);
    };
    this.hs_isDigit.notEvaluated = true;
    this.hs_isDigit.evaluate = function (hs_c26De6Y) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26De6Y);
    };
    this.hs_isHexDigit.notEvaluated = true;
    this.hs_isHexDigit.evaluate = function (hs_c26De74) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26De74);
    };
    this.hs_isOctDigit.notEvaluated = true;
    this.hs_isOctDigit.evaluate = function (hs_c26De7i) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26De7i);
    };
    this.hs_isAlpha.notEvaluated = true;
    this.hs_isAlpha.evaluate = function (hs_c26De7o) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26De7o);
    };
    this.hs_isAlphaNum.notEvaluated = true;
    this.hs_isAlphaNum.evaluate = function (hs_c26De7D) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26De7D);
    };
    this.hs_isControl.notEvaluated = true;
    this.hs_isControl.evaluate = function (hs_c26De7S) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26De7S);
    };
    this.hs_isPrint.notEvaluated = true;
    this.hs_isPrint.evaluate = function (hs_c26De87) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26De87);
    };
    this.hs_isUpper.notEvaluated = true;
    this.hs_isUpper.evaluate = function (hs_c26De8m) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26De8m);
    };
    this.hs_isLower.notEvaluated = true;
    this.hs_isLower.evaluate = function (hs_c26De8B) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26De8B);
    };
    this.hs_toLower.notEvaluated = true;
    this.hs_toLower.evaluate = function (hs_c26De8Q) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26De8Q);
    };
    this.hs_toUpper.notEvaluated = true;
    this.hs_toUpper.evaluate = function (hs_c26De94) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26De94);
    };
    this.hs_toTitle.notEvaluated = true;
    this.hs_toTitle.evaluate = function (hs_c26De9i) {
        $hs.modules.GHCziUnicode.loadDependencies();
        return this.evaluate(hs_c26De9i);
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
    this.hs_wgencat.evaluate = function (hs_ds26De5V) {
        var hs_ds126De9w = hs_ds26De5V;
        if (hs_ds26De5V.notEvaluated) {
            hs_ds126De9w = hs_ds26De5V.hscall();
        }
        var hs_ds226De5Z = hs_ds126De9w.data[0];
        var hs_wild26De9x = [$hs.modules.GHCziPrim.hs_realWorldzh, u_gencat(hs_ds226De5Z)];
        var hs_ds426De64 = hs_wild26De9x[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426De64];
        return $res;
    };
    this.hs_isAscii.evaluate = function (hs_c26De66) {
        var hs_sat26De9y = new $hs.Data(1);
        hs_sat26De9y.data = ["\x80"];
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26De66, hs_sat26De9y);
    };
    this.hs_isLatin1.evaluate = function (hs_c26De69) {
        var hs_sat26De9z = new $hs.Data(1);
        hs_sat26De9z.data = ["\xff"];
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26De69, hs_sat26De9z);
    };
    this.hs_isAsciiLower.evaluate = function (hs_c26De6c) {
        var hs_sat26De9B = new $hs.Thunk();
        hs_sat26De9B.evaluateOnce = function () {
            var hs_sat26De9D = new $hs.Data(1);
            hs_sat26De9D.data = ["z"];
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26De6c, hs_sat26De9D);
        };
        var hs_sat26De9A = new $hs.Thunk();
        hs_sat26De9A.evaluateOnce = function () {
            var hs_sat26De9C = new $hs.Data(1);
            hs_sat26De9C.data = ["a"];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26De6c, hs_sat26De9C);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26De9A, hs_sat26De9B);
    };
    this.hs_isAsciiUpper.evaluate = function (hs_c26De6i) {
        var hs_sat26De9F = new $hs.Thunk();
        hs_sat26De9F.evaluateOnce = function () {
            var hs_sat26De9H = new $hs.Data(1);
            hs_sat26De9H.data = ["Z"];
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26De6i, hs_sat26De9H);
        };
        var hs_sat26De9E = new $hs.Thunk();
        hs_sat26De9E.evaluateOnce = function () {
            var hs_sat26De9G = new $hs.Data(1);
            hs_sat26De9G.data = ["A"];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26De6i, hs_sat26De9G);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26De9E, hs_sat26De9F);
    };
    this.hs_isSpace.evaluate = function (hs_c26De6o) {
        var hs_sat26De9J = new $hs.Thunk();
        hs_sat26De9J.evaluateOnce = function () {
            var hs_sat26De9M = new $hs.Thunk();
            hs_sat26De9M.evaluateOnce = function () {
                var hs_sat26De9P = new $hs.Thunk();
                hs_sat26De9P.evaluateOnce = function () {
                    var hs_sat26De9S = new $hs.Thunk();
                    hs_sat26De9S.evaluateOnce = function () {
                        var hs_sat26De9V = new $hs.Thunk();
                        hs_sat26De9V.evaluateOnce = function () {
                            var hs_sat26De9Y = new $hs.Thunk();
                            hs_sat26De9Y.evaluateOnce = function () {
                                var hs_sat26Dea1 = new $hs.Thunk();
                                hs_sat26Dea1.evaluateOnce = function () {
                                    var hs_sat26Dea4 = new $hs.Thunk();
                                    hs_sat26Dea4.evaluateOnce = function () {
                                        var hs_sat26Dea9 = new $hs.Thunk();
                                        hs_sat26Dea9.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dea9);
                                    };
                                    var hs_sat26Dea3 = new $hs.Thunk();
                                    hs_sat26Dea3.evaluateOnce = function () {
                                        var hs_sat26Dea6 = new $hs.Thunk();
                                        hs_sat26Dea6.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26De6o);
                                        };
                                        var hs_ds26Dea7 = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dea6);
                                        var hs_ds126De6H = hs_ds26Dea7.data[0];
                                        var hs_wild26Dea8 = [$hs.modules.GHCziPrim.hs_realWorldzh, u_iswspace(hs_ds126De6H)];
                                        var hs_ds326De6M = hs_wild26Dea8[1];
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_ds326De6M];
                                        return $res;
                                    };
                                    return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26Dea3, hs_sat26Dea4);
                                };
                                var hs_sat26Dea0 = new $hs.Thunk();
                                hs_sat26Dea0.evaluateOnce = function () {
                                    var hs_sat26Dea2 = new $hs.Data(1);
                                    hs_sat26Dea2.data = ["\xa0"];
                                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26De6o, hs_sat26Dea2);
                                };
                                return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26Dea0, hs_sat26Dea1);
                            };
                            var hs_sat26De9X = new $hs.Thunk();
                            hs_sat26De9X.evaluateOnce = function () {
                                var hs_sat26De9Z = new $hs.Data(1);
                                hs_sat26De9Z.data = ["\v"];
                                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26De6o, hs_sat26De9Z);
                            };
                            return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26De9X, hs_sat26De9Y);
                        };
                        var hs_sat26De9U = new $hs.Thunk();
                        hs_sat26De9U.evaluateOnce = function () {
                            var hs_sat26De9W = new $hs.Data(1);
                            hs_sat26De9W.data = ["\f"];
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26De6o, hs_sat26De9W);
                        };
                        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26De9U, hs_sat26De9V);
                    };
                    var hs_sat26De9R = new $hs.Thunk();
                    hs_sat26De9R.evaluateOnce = function () {
                        var hs_sat26De9T = new $hs.Data(1);
                        hs_sat26De9T.data = ["\r"];
                        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26De6o, hs_sat26De9T);
                    };
                    return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26De9R, hs_sat26De9S);
                };
                var hs_sat26De9O = new $hs.Thunk();
                hs_sat26De9O.evaluateOnce = function () {
                    var hs_sat26De9Q = new $hs.Data(1);
                    hs_sat26De9Q.data = ["\n"];
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26De6o, hs_sat26De9Q);
                };
                return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26De9O, hs_sat26De9P);
            };
            var hs_sat26De9L = new $hs.Thunk();
            hs_sat26De9L.evaluateOnce = function () {
                var hs_sat26De9N = new $hs.Data(1);
                hs_sat26De9N.data = ["\t"];
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26De6o, hs_sat26De9N);
            };
            return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26De9L, hs_sat26De9M);
        };
        var hs_sat26De9I = new $hs.Thunk();
        hs_sat26De9I.evaluateOnce = function () {
            var hs_sat26De9K = new $hs.Data(1);
            hs_sat26De9K.data = [" "];
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26De6o, hs_sat26De9K);
        };
        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26De9I, hs_sat26De9J);
    };
    this.hs_isDigit.evaluate = function (hs_c26De6Y) {
        var hs_sat26Deab = new $hs.Thunk();
        hs_sat26Deab.evaluateOnce = function () {
            var hs_sat26Dead = new $hs.Data(1);
            hs_sat26Dead.data = ["9"];
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26De6Y, hs_sat26Dead);
        };
        var hs_sat26Deaa = new $hs.Thunk();
        hs_sat26Deaa.evaluateOnce = function () {
            var hs_sat26Deac = new $hs.Data(1);
            hs_sat26Deac.data = ["0"];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26De6Y, hs_sat26Deac);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Deaa, hs_sat26Deab);
    };
    this.hs_isHexDigit.evaluate = function (hs_c26De74) {
        var hs_sat26Deaf = new $hs.Thunk();
        hs_sat26Deaf.evaluateOnce = function () {
            var hs_sat26Deah = new $hs.Thunk();
            hs_sat26Deah.evaluateOnce = function () {
                var hs_sat26Dean = new $hs.Thunk();
                hs_sat26Dean.evaluateOnce = function () {
                    var hs_sat26Deap = new $hs.Data(1);
                    hs_sat26Deap.data = ["f"];
                    return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26De74, hs_sat26Deap);
                };
                var hs_sat26Deam = new $hs.Thunk();
                hs_sat26Deam.evaluateOnce = function () {
                    var hs_sat26Deao = new $hs.Data(1);
                    hs_sat26Deao.data = ["a"];
                    return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26De74, hs_sat26Deao);
                };
                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Deam, hs_sat26Dean);
            };
            var hs_sat26Deag = new $hs.Thunk();
            hs_sat26Deag.evaluateOnce = function () {
                var hs_sat26Deaj = new $hs.Thunk();
                hs_sat26Deaj.evaluateOnce = function () {
                    var hs_sat26Deal = new $hs.Data(1);
                    hs_sat26Deal.data = ["F"];
                    return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26De74, hs_sat26Deal);
                };
                var hs_sat26Deai = new $hs.Thunk();
                hs_sat26Deai.evaluateOnce = function () {
                    var hs_sat26Deak = new $hs.Data(1);
                    hs_sat26Deak.data = ["A"];
                    return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26De74, hs_sat26Deak);
                };
                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Deai, hs_sat26Deaj);
            };
            return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26Deag, hs_sat26Deah);
        };
        var hs_sat26Deae = new $hs.Thunk();
        hs_sat26Deae.evaluateOnce = function () {
            return $hs.modules.GHCziUnicode.hs_isDigit.hscall(hs_c26De74);
        };
        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26Deae, hs_sat26Deaf);
    };
    this.hs_isOctDigit.evaluate = function (hs_c26De7i) {
        var hs_sat26Dear = new $hs.Thunk();
        hs_sat26Dear.evaluateOnce = function () {
            var hs_sat26Deat = new $hs.Data(1);
            hs_sat26Deat.data = ["7"];
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26De7i, hs_sat26Deat);
        };
        var hs_sat26Deaq = new $hs.Thunk();
        hs_sat26Deaq.evaluateOnce = function () {
            var hs_sat26Deas = new $hs.Data(1);
            hs_sat26Deas.data = ["0"];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26De7i, hs_sat26Deas);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Deaq, hs_sat26Dear);
    };
    this.hs_isAlpha.evaluate = function (hs_c26De7o) {
        var hs_sat26Deav = new $hs.Thunk();
        hs_sat26Deav.evaluateOnce = function () {
            var hs_sat26DeaA = new $hs.Thunk();
            hs_sat26DeaA.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DeaA);
        };
        var hs_sat26Deau = new $hs.Thunk();
        hs_sat26Deau.evaluateOnce = function () {
            var hs_sat26Deax = new $hs.Thunk();
            hs_sat26Deax.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26De7o);
            };
            var hs_ds26Deay = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Deax);
            var hs_ds126De7t = hs_ds26Deay.data[0];
            var hs_wild26Deaz = [$hs.modules.GHCziPrim.hs_realWorldzh, u_iswalpha(hs_ds126De7t)];
            var hs_ds326De7y = hs_wild26Deaz[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326De7y];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26Deau, hs_sat26Deav);
    };
    this.hs_isAlphaNum.evaluate = function (hs_c26De7D) {
        var hs_sat26DeaC = new $hs.Thunk();
        hs_sat26DeaC.evaluateOnce = function () {
            var hs_sat26DeaH = new $hs.Thunk();
            hs_sat26DeaH.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DeaH);
        };
        var hs_sat26DeaB = new $hs.Thunk();
        hs_sat26DeaB.evaluateOnce = function () {
            var hs_sat26DeaE = new $hs.Thunk();
            hs_sat26DeaE.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26De7D);
            };
            var hs_ds26DeaF = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DeaE);
            var hs_ds126De7I = hs_ds26DeaF.data[0];
            var hs_wild26DeaG = [$hs.modules.GHCziPrim.hs_realWorldzh, u_iswalnum(hs_ds126De7I)];
            var hs_ds326De7N = hs_wild26DeaG[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326De7N];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DeaB, hs_sat26DeaC);
    };
    this.hs_isControl.evaluate = function (hs_c26De7S) {
        var hs_sat26DeaJ = new $hs.Thunk();
        hs_sat26DeaJ.evaluateOnce = function () {
            var hs_sat26DeaO = new $hs.Thunk();
            hs_sat26DeaO.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DeaO);
        };
        var hs_sat26DeaI = new $hs.Thunk();
        hs_sat26DeaI.evaluateOnce = function () {
            var hs_sat26DeaL = new $hs.Thunk();
            hs_sat26DeaL.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26De7S);
            };
            var hs_ds26DeaM = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DeaL);
            var hs_ds126De7X = hs_ds26DeaM.data[0];
            var hs_wild26DeaN = [$hs.modules.GHCziPrim.hs_realWorldzh, u_iswcntrl(hs_ds126De7X)];
            var hs_ds326De82 = hs_wild26DeaN[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326De82];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DeaI, hs_sat26DeaJ);
    };
    this.hs_isPrint.evaluate = function (hs_c26De87) {
        var hs_sat26DeaQ = new $hs.Thunk();
        hs_sat26DeaQ.evaluateOnce = function () {
            var hs_sat26DeaV = new $hs.Thunk();
            hs_sat26DeaV.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DeaV);
        };
        var hs_sat26DeaP = new $hs.Thunk();
        hs_sat26DeaP.evaluateOnce = function () {
            var hs_sat26DeaS = new $hs.Thunk();
            hs_sat26DeaS.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26De87);
            };
            var hs_ds26DeaT = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DeaS);
            var hs_ds126De8c = hs_ds26DeaT.data[0];
            var hs_wild26DeaU = [$hs.modules.GHCziPrim.hs_realWorldzh, u_iswprint(hs_ds126De8c)];
            var hs_ds326De8h = hs_wild26DeaU[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326De8h];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DeaP, hs_sat26DeaQ);
    };
    this.hs_isUpper.evaluate = function (hs_c26De8m) {
        var hs_sat26DeaX = new $hs.Thunk();
        hs_sat26DeaX.evaluateOnce = function () {
            var hs_sat26Deb2 = new $hs.Thunk();
            hs_sat26Deb2.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Deb2);
        };
        var hs_sat26DeaW = new $hs.Thunk();
        hs_sat26DeaW.evaluateOnce = function () {
            var hs_sat26DeaZ = new $hs.Thunk();
            hs_sat26DeaZ.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26De8m);
            };
            var hs_ds26Deb0 = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DeaZ);
            var hs_ds126De8r = hs_ds26Deb0.data[0];
            var hs_wild26Deb1 = [$hs.modules.GHCziPrim.hs_realWorldzh, u_iswupper(hs_ds126De8r)];
            var hs_ds326De8w = hs_wild26Deb1[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326De8w];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DeaW, hs_sat26DeaX);
    };
    this.hs_isLower.evaluate = function (hs_c26De8B) {
        var hs_sat26Deb4 = new $hs.Thunk();
        hs_sat26Deb4.evaluateOnce = function () {
            var hs_sat26Deb9 = new $hs.Thunk();
            hs_sat26Deb9.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Deb9);
        };
        var hs_sat26Deb3 = new $hs.Thunk();
        hs_sat26Deb3.evaluateOnce = function () {
            var hs_sat26Deb6 = new $hs.Thunk();
            hs_sat26Deb6.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26De8B);
            };
            var hs_ds26Deb7 = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Deb6);
            var hs_ds126De8G = hs_ds26Deb7.data[0];
            var hs_wild26Deb8 = [$hs.modules.GHCziPrim.hs_realWorldzh, u_iswlower(hs_ds126De8G)];
            var hs_ds326De8L = hs_wild26Deb8[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326De8L];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26Deb3, hs_sat26Deb4);
    };
    this.hs_toLower.evaluate = function (hs_c26De8Q) {
        var hs_sat26Deba = new $hs.Thunk();
        hs_sat26Deba.evaluateOnce = function () {
            var hs_sat26Debb = new $hs.Thunk();
            hs_sat26Debb.evaluateOnce = function () {
                var hs_sat26Debd = new $hs.Thunk();
                hs_sat26Debd.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26De8Q);
                };
                var hs_ds26Debe = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Debd);
                var hs_ds126De8V = hs_ds26Debe.data[0];
                var hs_wild26Debf = [$hs.modules.GHCziPrim.hs_realWorldzh, u_towlower(hs_ds126De8V)];
                var hs_ds326De90 = hs_wild26Debf[1];
                var $res = new $hs.Data(1);
                $res.data = [hs_ds326De90];
                return $res;
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Debb);
        };
        return $hs.modules.GHCziBase.hs_chr.hscall(hs_sat26Deba);
    };
    this.hs_toUpper.evaluate = function (hs_c26De94) {
        var hs_sat26Debg = new $hs.Thunk();
        hs_sat26Debg.evaluateOnce = function () {
            var hs_sat26Debh = new $hs.Thunk();
            hs_sat26Debh.evaluateOnce = function () {
                var hs_sat26Debj = new $hs.Thunk();
                hs_sat26Debj.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26De94);
                };
                var hs_ds26Debk = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Debj);
                var hs_ds126De99 = hs_ds26Debk.data[0];
                var hs_wild26Debl = [$hs.modules.GHCziPrim.hs_realWorldzh, u_towupper(hs_ds126De99)];
                var hs_ds326De9e = hs_wild26Debl[1];
                var $res = new $hs.Data(1);
                $res.data = [hs_ds326De9e];
                return $res;
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Debh);
        };
        return $hs.modules.GHCziBase.hs_chr.hscall(hs_sat26Debg);
    };
    this.hs_toTitle.evaluate = function (hs_c26De9i) {
        var hs_sat26Debm = new $hs.Thunk();
        hs_sat26Debm.evaluateOnce = function () {
            var hs_sat26Debn = new $hs.Thunk();
            hs_sat26Debn.evaluateOnce = function () {
                var hs_sat26Debp = new $hs.Thunk();
                hs_sat26Debp.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26De9i);
                };
                var hs_ds26Debq = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Debp);
                var hs_ds126De9n = hs_ds26Debq.data[0];
                var hs_wild26Debr = [$hs.modules.GHCziPrim.hs_realWorldzh, u_towtitle(hs_ds126De9n)];
                var hs_ds326De9s = hs_wild26Debr[1];
                var $res = new $hs.Data(1);
                $res.data = [hs_ds326De9s];
                return $res;
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Debn);
        };
        return $hs.modules.GHCziBase.hs_chr.hscall(hs_sat26Debm);
    };
};

$hs.modules.TextziReadziLex = new $hs.Module();
$hs.modules.TextziReadziLex.dependencies = ["GHC.Prim", "GHC.Types", "GHC.CString", "GHC.Unit", "GHC.Integer", "Control.Monad", "Data.Maybe", "GHC.Base", "GHC.Enum", "GHC.Num", "GHC.Real", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.List", "GHC.Unicode", "Text.ParserCombinators.ReadP"];
$hs.modules.TextziReadziLex.initBeforeDependencies = function () {
    this.hs_readIntP = new $hs.Func(4);
    this.hs_zdfShowLexeme = new $hs.Data(1);
    this.hs_zdfEqLexeme = new $hs.Data(1);
    this.hs_lexChar = new $hs.Thunk();
    this.hs_lex = new $hs.Thunk();
    this.hs_hsLex = new $hs.Thunk();
    this.hs_readOctP = new $hs.Func(1);
    this.hs_readDecP = new $hs.Func(1);
    this.hs_readHexP = new $hs.Func(1);
    this.hs_Char = new $hs.Func(1);
    this.hs_String = new $hs.Func(1);
    this.hs_Punc = new $hs.Func(1);
    this.hs_Ident = new $hs.Func(1);
    this.hs_Symbol = new $hs.Func(1);
    this.hs_Int = new $hs.Func(1);
    this.hs_Rat = new $hs.Func(1);
    this.hs_EOF = new $hs.Data(8);
    this.hs_readIntP.notEvaluated = true;
    this.hs_readIntP.evaluate = function (hs_zddNum126DriC, hs_base26DriD, hs_isDigit26Driz, hs_valDigit26DriG) {
        $hs.modules.TextziReadziLex.loadDependencies();
        return this.evaluate(hs_zddNum126DriC, hs_base26DriD, hs_isDigit26Driz, hs_valDigit26DriG);
    };
    this.hs_zdfShowLexeme.notEvaluated = true;
    this.hs_zdfShowLexeme.evaluate = function () {
        $hs.modules.TextziReadziLex.loadDependencies();
        return this;
    };
    this.hs_zdfEqLexeme.notEvaluated = true;
    this.hs_zdfEqLexeme.evaluate = function () {
        $hs.modules.TextziReadziLex.loadDependencies();
        return this;
    };
    this.hs_lexChar.evaluateOnce = function () {
        $hs.modules.TextziReadziLex.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_lex.evaluateOnce = function () {
        $hs.modules.TextziReadziLex.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_hsLex.evaluateOnce = function () {
        $hs.modules.TextziReadziLex.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_readOctP.notEvaluated = true;
    this.hs_readOctP.evaluate = function (hs_zddNum126Dryk) {
        $hs.modules.TextziReadziLex.loadDependencies();
        return this.evaluate(hs_zddNum126Dryk);
    };
    this.hs_readDecP.notEvaluated = true;
    this.hs_readDecP.evaluate = function (hs_zddNum126Dryo) {
        $hs.modules.TextziReadziLex.loadDependencies();
        return this.evaluate(hs_zddNum126Dryo);
    };
    this.hs_readHexP.notEvaluated = true;
    this.hs_readHexP.evaluate = function (hs_zddNum126Drys) {
        $hs.modules.TextziReadziLex.loadDependencies();
        return this.evaluate(hs_zddNum126Drys);
    };
    this.hs_Char.notEvaluated = true;
    this.hs_Char.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.TextziReadziLex.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_String.notEvaluated = true;
    this.hs_String.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.TextziReadziLex.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Punc.notEvaluated = true;
    this.hs_Punc.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.TextziReadziLex.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Ident.notEvaluated = true;
    this.hs_Ident.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.TextziReadziLex.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Symbol.notEvaluated = true;
    this.hs_Symbol.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.TextziReadziLex.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Int.notEvaluated = true;
    this.hs_Int.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.TextziReadziLex.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Rat.notEvaluated = true;
    this.hs_Rat.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.TextziReadziLex.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_EOF.notEvaluated = true;
    this.hs_EOF.evaluate = function () {
        $hs.modules.TextziReadziLex.loadDependencies();
        return this;
    };
};
$hs.modules.TextziReadziLex.initAfterDependencies = function () {
    this.hs_readIntP.notEvaluated = false;
    this.hs_zdfShowLexeme.notEvaluated = false;
    this.hs_zdfShowLexeme.evaluate = function () {
        return this;
    };
    this.hs_zdfEqLexeme.notEvaluated = false;
    this.hs_zdfEqLexeme.evaluate = function () {
        return this;
    };
    this.hs_readOctP.notEvaluated = false;
    this.hs_readDecP.notEvaluated = false;
    this.hs_readHexP.notEvaluated = false;
    this.hs_Char.notEvaluated = false;
    this.hs_String.notEvaluated = false;
    this.hs_Punc.notEvaluated = false;
    this.hs_Ident.notEvaluated = false;
    this.hs_Symbol.notEvaluated = false;
    this.hs_Int.notEvaluated = false;
    this.hs_Rat.notEvaluated = false;
    this.hs_EOF.notEvaluated = false;
    this.hs_EOF.evaluate = function () {
        return this;
    };
    var hs_frac25rYEE = new $hs.Func(5);
    var hs_val25rYED = new $hs.Func(4);
    var hs_zddShow25v2Mv = new $hs.Thunk();
    var hs_zddShow125v2Mw = new $hs.Thunk();
    var hs_zdcshowsPrec25v2Mx = new $hs.Func(2);
    var hs_sat26Drzx = new $hs.Thunk();
    var hs_zdcshowList25v2NF = new $hs.Thunk();
    var hs_zdcshow25v2NG = new $hs.Thunk();
    var hs_zddEq25v2NJ = new $hs.Thunk();
    var hs_zddEq125v2NK = new $hs.Thunk();
    var hs_zdczeze25v2NL = new $hs.Func(2);
    var hs_zdczsze25v2PE = new $hs.Func(2);
    var hs_sat26DrAX = new $hs.Func(1);
    var hs_lexBaseChar25rYEx = new $hs.Thunk();
    var hs_zddNum25v2PV = new $hs.Thunk();
    var hs_zddFractional25v2PW = new $hs.Thunk();
    var hs_valDig25rYEF = new $hs.Func(3);
    var hs_lexDigits25rYEB = new $hs.Func(1);
    var hs_sat26DrCd = new $hs.Func(1);
    var hs_sat26DrCf = new $hs.Thunk();
    var hs_lexFrac25rYEz = new $hs.Thunk();
    var hs_lexInteger25rYEC = new $hs.Func(1);
    var hs_sat26DrGx = new $hs.Thunk();
    var hs_sat26DrGL = new $hs.Thunk();
    var hs_lexEsc25v2RU = new $hs.Thunk();
    var hs_sat26DrGR = new $hs.Func(1);
    var hs_lexCharE25rYEt = new $hs.Thunk();
    var hs_sat26DrGU = new $hs.Func(1);
    var hs_sat26DrH1 = new $hs.Func(1);
    var hs_sat26DrH6 = new $hs.Thunk();
    var hs_signedExp25v2WR = new $hs.Thunk();
    var hs_sat26DrHc = new $hs.Func(1);
    var hs_sat26DrHh = new $hs.Thunk();
    var hs_lexExp25rYEA = new $hs.Thunk();
    var hs_sat26DrJn = new $hs.Thunk();
    var hs_sat26DrJs = new $hs.Thunk();
    var hs_lexToken25rYEm = new $hs.Thunk();
    var hs_sat26DrJx = new $hs.Thunk();
    var hs_readIntPzq25rYEI = new $hs.Func(2);
    hs_frac25rYEE.evaluate = function (hs_zddIntegral26DrhV, hs_eta26Dri5, hs_eta126Dri1, hs_eta226Dri2, hs_eta326DrhZ) {
        var hs_zddReal26DrhW = new $hs.Thunk();
        hs_zddReal26DrhW.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DrhV);
        };
        var hs_zddNum126DrhY = new $hs.Thunk();
        hs_zddNum126DrhY.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal26DrhW);
        };
        var hs_wild26Dryv = hs_eta326DrhZ;
        if (hs_eta326DrhZ.notEvaluated) {
            hs_wild26Dryv = hs_eta326DrhZ.hscall();
        }
        switch (hs_wild26Dryv.tag) {
        case 1:
            return $hs.modules.GHCziReal.hs_zv.hscall(hs_zddIntegral26DrhV, hs_eta126Dri1, hs_eta226Dri2);
        case 2:
            var hs_x26Dri7 = hs_wild26Dryv.data[0];
            var hs_xs26Drid = hs_wild26Dryv.data[1];
            var hs_sat26Dryw = new $hs.Thunk();
            hs_sat26Dryw.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_zddNum126DrhY, hs_x26Dri7);
            };
            var hs_sat26Dryx = new $hs.Thunk();
            hs_sat26Dryx.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum126DrhY, hs_eta126Dri1, hs_eta26Dri5);
            };
            var hs_azq26Drib = $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum126DrhY, hs_sat26Dryx, hs_sat26Dryw);
            var hs_bzq26Dric = $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum126DrhY, hs_eta226Dri2, hs_eta26Dri5);
            return hs_frac25rYEE.hscall(hs_zddIntegral26DrhV, hs_eta26Dri5, hs_azq26Drib, hs_bzq26Dric, hs_xs26Drid);
        }
    };
    hs_val25rYED.evaluate = function (hs_zddNum126Drin, hs_ds26Drio, hs_y26Drik, hs_ds126Drii) {
        var hs_wild26Dryy = hs_ds126Drii;
        if (hs_ds126Drii.notEvaluated) {
            hs_wild26Dryy = hs_ds126Drii.hscall();
        }
        switch (hs_wild26Dryy.tag) {
        case 1:
            if (hs_y26Drik.notEvaluated) {
                return hs_y26Drik.hscall();
            } else {
                return hs_y26Drik;
            }
        case 2:
            var hs_x26Driq = hs_wild26Dryy.data[0];
            var hs_xs26Driu = hs_wild26Dryy.data[1];
            var hs_sat26Dryz = new $hs.Thunk();
            hs_sat26Dryz.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_zddNum126Drin, hs_x26Driq);
            };
            var hs_sat26DryA = new $hs.Thunk();
            hs_sat26DryA.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum126Drin, hs_y26Drik, hs_ds26Drio);
            };
            var hs_yzq26Drit = $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum126Drin, hs_sat26DryA, hs_sat26Dryz);
            return hs_val25rYED.hscall(hs_zddNum126Drin, hs_ds26Drio, hs_yzq26Drit, hs_xs26Driu);
        }
    };
    this.hs_readIntP.evaluate = function (hs_zddNum126DriC, hs_base26DriD, hs_isDigit26Driz, hs_valDigit26DriG) {
        var hs_sat26DryC = new $hs.Func(1);
        hs_sat26DryC.evaluate = function (hs_s26DriH) {
            var hs_sat26DryD = new $hs.Thunk();
            hs_sat26DryD.evaluateOnce = function () {
                var hs_sat26DryF = new $hs.Thunk();
                hs_sat26DryF.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_map.hscall(hs_valDigit26DriG, hs_s26DriH);
                };
                var hs_sat26DryE = new $hs.Thunk();
                hs_sat26DryE.evaluateOnce = function () {
                    var hs_sat26DryG = new $hs.Thunk();
                    hs_sat26DryG.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum126DriC, hs_sat26DryG);
                };
                return hs_val25rYED.hscall(hs_zddNum126DriC, hs_base26DriD, hs_sat26DryE, hs_sat26DryF);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DryD);
        };
        var hs_sat26DryB = new $hs.Thunk();
        hs_sat26DryB.evaluateOnce = function () {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_munch1.hscall(hs_isDigit26Driz);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DryB, hs_sat26DryC);
    };
    hs_zddShow25v2Mv.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddShow125v2Mw.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zdfShowZMZN.hscall($hs.modules.GHCziShow.hs_zdfShowChar);
    };
    hs_zdcshowsPrec25v2Mx.evaluate = function (hs_a26DriT, hs_ds26DriQ) {
        var hs_wild26DryI = hs_ds26DriQ;
        if (hs_ds26DriQ.notEvaluated) {
            hs_wild26DryI = hs_ds26DriQ.hscall();
        }
        switch (hs_wild26DryI.tag) {
        case 1:
            var hs_b126DriZ = hs_wild26DryI.data[0];
            var hs_sat26Drzq = new $hs.Thunk();
            hs_sat26Drzq.evaluateOnce = function () {
                var hs_sat26Drzt = new $hs.Thunk();
                hs_sat26Drzt.evaluateOnce = function () {
                    var hs_sat26Drzv = new $hs.Data(1);
                    hs_sat26Drzv.data = [11];
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowChar, hs_sat26Drzv, hs_b126DriZ);
                };
                var hs_sat26Drzs = new $hs.Thunk();
                hs_sat26Drzs.evaluateOnce = function () {
                    var hs_sat26Drzu = new $hs.Thunk();
                    hs_sat26Drzu.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Char \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Drzu);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Drzs, hs_sat26Drzt);
            };
            var hs_sat26Drzp = new $hs.Thunk();
            hs_sat26Drzp.evaluateOnce = function () {
                var hs_sat26Drzr = new $hs.Data(1);
                hs_sat26Drzr.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a26DriT, hs_sat26Drzr);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26Drzp, hs_sat26Drzq);
        case 2:
            var hs_b126Drj8 = hs_wild26DryI.data[0];
            var hs_sat26DryJ = new $hs.Thunk();
            hs_sat26DryJ.evaluateOnce = function () {
                var hs_sat26DryM = new $hs.Thunk();
                hs_sat26DryM.evaluateOnce = function () {
                    var hs_sat26DryO = new $hs.Data(1);
                    hs_sat26DryO.data = [11];
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow125v2Mw, hs_sat26DryO, hs_b126Drj8);
                };
                var hs_sat26DryL = new $hs.Thunk();
                hs_sat26DryL.evaluateOnce = function () {
                    var hs_sat26DryN = new $hs.Thunk();
                    hs_sat26DryN.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("String \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DryN);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DryL, hs_sat26DryM);
            };
            var hs_sat26DryH = new $hs.Thunk();
            hs_sat26DryH.evaluateOnce = function () {
                var hs_sat26DryK = new $hs.Data(1);
                hs_sat26DryK.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a26DriT, hs_sat26DryK);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DryH, hs_sat26DryJ);
        case 3:
            var hs_b126Drjh = hs_wild26DryI.data[0];
            var hs_sat26DryQ = new $hs.Thunk();
            hs_sat26DryQ.evaluateOnce = function () {
                var hs_sat26DryT = new $hs.Thunk();
                hs_sat26DryT.evaluateOnce = function () {
                    var hs_sat26DryV = new $hs.Data(1);
                    hs_sat26DryV.data = [11];
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow125v2Mw, hs_sat26DryV, hs_b126Drjh);
                };
                var hs_sat26DryS = new $hs.Thunk();
                hs_sat26DryS.evaluateOnce = function () {
                    var hs_sat26DryU = new $hs.Thunk();
                    hs_sat26DryU.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Punc \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DryU);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DryS, hs_sat26DryT);
            };
            var hs_sat26DryP = new $hs.Thunk();
            hs_sat26DryP.evaluateOnce = function () {
                var hs_sat26DryR = new $hs.Data(1);
                hs_sat26DryR.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a26DriT, hs_sat26DryR);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DryP, hs_sat26DryQ);
        case 4:
            var hs_b126Drjq = hs_wild26DryI.data[0];
            var hs_sat26DryX = new $hs.Thunk();
            hs_sat26DryX.evaluateOnce = function () {
                var hs_sat26Drz0 = new $hs.Thunk();
                hs_sat26Drz0.evaluateOnce = function () {
                    var hs_sat26Drz2 = new $hs.Data(1);
                    hs_sat26Drz2.data = [11];
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow125v2Mw, hs_sat26Drz2, hs_b126Drjq);
                };
                var hs_sat26DryZ = new $hs.Thunk();
                hs_sat26DryZ.evaluateOnce = function () {
                    var hs_sat26Drz1 = new $hs.Thunk();
                    hs_sat26Drz1.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Ident \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Drz1);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DryZ, hs_sat26Drz0);
            };
            var hs_sat26DryW = new $hs.Thunk();
            hs_sat26DryW.evaluateOnce = function () {
                var hs_sat26DryY = new $hs.Data(1);
                hs_sat26DryY.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a26DriT, hs_sat26DryY);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DryW, hs_sat26DryX);
        case 5:
            var hs_b126Drjz = hs_wild26DryI.data[0];
            var hs_sat26Drz4 = new $hs.Thunk();
            hs_sat26Drz4.evaluateOnce = function () {
                var hs_sat26Drz7 = new $hs.Thunk();
                hs_sat26Drz7.evaluateOnce = function () {
                    var hs_sat26Drz9 = new $hs.Data(1);
                    hs_sat26Drz9.data = [11];
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow125v2Mw, hs_sat26Drz9, hs_b126Drjz);
                };
                var hs_sat26Drz6 = new $hs.Thunk();
                hs_sat26Drz6.evaluateOnce = function () {
                    var hs_sat26Drz8 = new $hs.Thunk();
                    hs_sat26Drz8.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Symbol \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Drz8);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Drz6, hs_sat26Drz7);
            };
            var hs_sat26Drz3 = new $hs.Thunk();
            hs_sat26Drz3.evaluateOnce = function () {
                var hs_sat26Drz5 = new $hs.Data(1);
                hs_sat26Drz5.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a26DriT, hs_sat26Drz5);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26Drz3, hs_sat26Drz4);
        case 6:
            var hs_b126DrjI = hs_wild26DryI.data[0];
            var hs_sat26Drzb = new $hs.Thunk();
            hs_sat26Drzb.evaluateOnce = function () {
                var hs_sat26Drze = new $hs.Thunk();
                hs_sat26Drze.evaluateOnce = function () {
                    var hs_sat26Drzg = new $hs.Data(1);
                    hs_sat26Drzg.data = [11];
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziNum.hs_zdfShowInteger, hs_sat26Drzg, hs_b126DrjI);
                };
                var hs_sat26Drzd = new $hs.Thunk();
                hs_sat26Drzd.evaluateOnce = function () {
                    var hs_sat26Drzf = new $hs.Thunk();
                    hs_sat26Drzf.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Int \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Drzf);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Drzd, hs_sat26Drze);
            };
            var hs_sat26Drza = new $hs.Thunk();
            hs_sat26Drza.evaluateOnce = function () {
                var hs_sat26Drzc = new $hs.Data(1);
                hs_sat26Drzc.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a26DriT, hs_sat26Drzc);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26Drza, hs_sat26Drzb);
        case 7:
            var hs_b126DrjR = hs_wild26DryI.data[0];
            var hs_sat26Drzi = new $hs.Thunk();
            hs_sat26Drzi.evaluateOnce = function () {
                var hs_sat26Drzl = new $hs.Thunk();
                hs_sat26Drzl.evaluateOnce = function () {
                    var hs_sat26Drzn = new $hs.Data(1);
                    hs_sat26Drzn.data = [11];
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow25v2Mv, hs_sat26Drzn, hs_b126DrjR);
                };
                var hs_sat26Drzk = new $hs.Thunk();
                hs_sat26Drzk.evaluateOnce = function () {
                    var hs_sat26Drzm = new $hs.Thunk();
                    hs_sat26Drzm.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Rat \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Drzm);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Drzk, hs_sat26Drzl);
            };
            var hs_sat26Drzh = new $hs.Thunk();
            hs_sat26Drzh.evaluateOnce = function () {
                var hs_sat26Drzj = new $hs.Data(1);
                hs_sat26Drzj.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a26DriT, hs_sat26Drzj);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26Drzh, hs_sat26Drzi);
        case 8:
            var hs_sat26Drzo = new $hs.Thunk();
            hs_sat26Drzo.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("EOF\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Drzo);
        }
    };
    hs_sat26Drzx.evaluateOnce = function () {
        var hs_sat26Drzw = new $hs.Data(1);
        hs_sat26Drzw.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.TextziReadziLex.hs_zdfShowLexeme, hs_sat26Drzw);
    };
    this.hs_zdfShowLexeme.data = [hs_zdcshowsPrec25v2Mx, hs_zdcshow25v2NG, hs_zdcshowList25v2NF];
    hs_zdcshowList25v2NF.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26Drzx);
    };
    hs_zdcshow25v2NG.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.TextziReadziLex.hs_zdfShowLexeme);
    };
    hs_zddEq25v2NJ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger);
    };
    hs_zddEq125v2NK.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdfEqZMZN.hscall($hs.modules.GHCziClasses.hs_zdfEqChar);
    };
    hs_zdczeze25v2NL.evaluate = function (hs_ds26Drk6, hs_ds126Drk9) {
        var hs_fail26Drlj = new $hs.Func(1);
        hs_fail26Drlj.evaluate = function (hs_ds226Drli) {
            var hs_wild26DrzI = hs_ds26Drk6;
            if (hs_ds26Drk6.notEvaluated) {
                hs_wild26DrzI = hs_ds26Drk6.hscall();
            }
            switch (hs_wild26DrzI.tag) {
            case 1:
                var hs_wild126DrAI = hs_ds126Drk9;
                if (hs_ds126Drk9.notEvaluated) {
                    hs_wild126DrAI = hs_ds126Drk9.hscall();
                }
                switch (hs_wild126DrAI.tag) {
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
                case 6:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 7:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 8:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 2:
                var hs_wild126DrzH = hs_ds126Drk9;
                if (hs_ds126Drk9.notEvaluated) {
                    hs_wild126DrzH = hs_ds126Drk9.hscall();
                }
                switch (hs_wild126DrzH.tag) {
                case 1:
                    var $res = new $hs.Data(1);
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
                case 6:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 7:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 8:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var hs_wild126DrzR = hs_ds126Drk9;
                if (hs_ds126Drk9.notEvaluated) {
                    hs_wild126DrzR = hs_ds126Drk9.hscall();
                }
                switch (hs_wild126DrzR.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
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
                case 6:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 7:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 8:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 4:
                var hs_wild126DrA0 = hs_ds126Drk9;
                if (hs_ds126Drk9.notEvaluated) {
                    hs_wild126DrA0 = hs_ds126Drk9.hscall();
                }
                switch (hs_wild126DrA0.tag) {
                case 1:
                    var $res = new $hs.Data(1);
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
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 5:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 6:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 7:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 8:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 5:
                var hs_wild126DrA9 = hs_ds126Drk9;
                if (hs_ds126Drk9.notEvaluated) {
                    hs_wild126DrA9 = hs_ds126Drk9.hscall();
                }
                switch (hs_wild126DrA9.tag) {
                case 1:
                    var $res = new $hs.Data(1);
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
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 6:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 7:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 8:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 6:
                var hs_wild126DrAi = hs_ds126Drk9;
                if (hs_ds126Drk9.notEvaluated) {
                    hs_wild126DrAi = hs_ds126Drk9.hscall();
                }
                switch (hs_wild126DrAi.tag) {
                case 1:
                    var $res = new $hs.Data(1);
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
                case 6:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 7:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 8:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 7:
                var hs_wild126DrAr = hs_ds126Drk9;
                if (hs_ds126Drk9.notEvaluated) {
                    hs_wild126DrAr = hs_ds126Drk9.hscall();
                }
                switch (hs_wild126DrAr.tag) {
                case 1:
                    var $res = new $hs.Data(1);
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
                case 6:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 7:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 8:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 8:
                var hs_wild126DrAA = hs_ds126Drk9;
                if (hs_ds126Drk9.notEvaluated) {
                    hs_wild126DrAA = hs_ds126Drk9.hscall();
                }
                switch (hs_wild126DrAA.tag) {
                case 1:
                    var $res = new $hs.Data(1);
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
                case 6:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 7:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 8:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            }
        };
        var hs_wild26Drzz = hs_ds26Drk6;
        if (hs_ds26Drk6.notEvaluated) {
            hs_wild26Drzz = hs_ds26Drk6.hscall();
        }
        switch (hs_wild26Drzz.tag) {
        case 1:
            var hs_a126Drlo = hs_wild26Drzz.data[0];
            var hs_wild126DrzF = hs_ds126Drk9;
            if (hs_ds126Drk9.notEvaluated) {
                hs_wild126DrzF = hs_ds126Drk9.hscall();
            }
            switch (hs_wild126DrzF.tag) {
            case 1:
                var hs_b126Drlp = hs_wild126DrzF.data[0];
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_a126Drlo, hs_b126Drlp);
            default:
                return hs_fail26Drlj.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        case 2:
            var hs_a126Drlt = hs_wild26Drzz.data[0];
            var hs_wild126Drzy = hs_ds126Drk9;
            if (hs_ds126Drk9.notEvaluated) {
                hs_wild126Drzy = hs_ds126Drk9.hscall();
            }
            switch (hs_wild126Drzy.tag) {
            case 2:
                var hs_b126Drlu = hs_wild126Drzy.data[0];
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq125v2NK, hs_a126Drlt, hs_b126Drlu);
            default:
                return hs_fail26Drlj.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        case 3:
            var hs_a126Drly = hs_wild26Drzz.data[0];
            var hs_wild126DrzA = hs_ds126Drk9;
            if (hs_ds126Drk9.notEvaluated) {
                hs_wild126DrzA = hs_ds126Drk9.hscall();
            }
            switch (hs_wild126DrzA.tag) {
            case 3:
                var hs_b126Drlz = hs_wild126DrzA.data[0];
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq125v2NK, hs_a126Drly, hs_b126Drlz);
            default:
                return hs_fail26Drlj.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        case 4:
            var hs_a126DrlD = hs_wild26Drzz.data[0];
            var hs_wild126DrzB = hs_ds126Drk9;
            if (hs_ds126Drk9.notEvaluated) {
                hs_wild126DrzB = hs_ds126Drk9.hscall();
            }
            switch (hs_wild126DrzB.tag) {
            case 4:
                var hs_b126DrlE = hs_wild126DrzB.data[0];
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq125v2NK, hs_a126DrlD, hs_b126DrlE);
            default:
                return hs_fail26Drlj.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        case 5:
            var hs_a126DrlI = hs_wild26Drzz.data[0];
            var hs_wild126DrzC = hs_ds126Drk9;
            if (hs_ds126Drk9.notEvaluated) {
                hs_wild126DrzC = hs_ds126Drk9.hscall();
            }
            switch (hs_wild126DrzC.tag) {
            case 5:
                var hs_b126DrlJ = hs_wild126DrzC.data[0];
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq125v2NK, hs_a126DrlI, hs_b126DrlJ);
            default:
                return hs_fail26Drlj.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        case 6:
            var hs_a126DrlN = hs_wild26Drzz.data[0];
            var hs_wild126DrzD = hs_ds126Drk9;
            if (hs_ds126Drk9.notEvaluated) {
                hs_wild126DrzD = hs_ds126Drk9.hscall();
            }
            switch (hs_wild126DrzD.tag) {
            case 6:
                var hs_b126DrlO = hs_wild126DrzD.data[0];
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_a126DrlN, hs_b126DrlO);
            default:
                return hs_fail26Drlj.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        case 7:
            var hs_a126DrlS = hs_wild26Drzz.data[0];
            var hs_wild126DrzE = hs_ds126Drk9;
            if (hs_ds126Drk9.notEvaluated) {
                hs_wild126DrzE = hs_ds126Drk9.hscall();
            }
            switch (hs_wild126DrzE.tag) {
            case 7:
                var hs_b126DrlT = hs_wild126DrzE.data[0];
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq25v2NJ, hs_a126DrlS, hs_b126DrlT);
            default:
                return hs_fail26Drlj.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        case 8:
            return hs_fail26Drlj.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
        }
    };
    this.hs_zdfEqLexeme.data = [hs_zdczeze25v2NL, hs_zdczsze25v2PE];
    hs_zdczsze25v2PE.evaluate = function (hs_a26DrlX, hs_b26DrlY) {
        var hs_sat26DrAQ = new $hs.Thunk();
        hs_sat26DrAQ.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.TextziReadziLex.hs_zdfEqLexeme, hs_a26DrlX, hs_b26DrlY);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DrAQ);
    };
    hs_sat26DrAX.evaluate = function (hs_c26Drm1) {
        var hs_wild26DrAT = hs_c26Drm1;
        if (hs_c26Drm1.notEvaluated) {
            hs_wild26DrAT = hs_c26Drm1.hscall();
        }
        var hs_ds26Drm4 = hs_wild26DrAT.data[0];
        var hs_ds126DrAS = hs_ds26Drm4;
        if (hs_ds26Drm4.notEvaluated) {
            hs_ds126DrAS = hs_ds26Drm4.hscall();
        }
        switch (hs_ds126DrAS) {
        case "O":
            var hs_sat26DrAR = new $hs.Data(1);
            hs_sat26DrAR.data = [8];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrAR);
        case "X":
            var hs_sat26DrAU = new $hs.Data(1);
            hs_sat26DrAU.data = [16];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrAU);
        case "o":
            var hs_sat26DrAV = new $hs.Data(1);
            hs_sat26DrAV.data = [8];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrAV);
        case "x":
            var hs_sat26DrAW = new $hs.Data(1);
            hs_sat26DrAW.data = [16];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrAW);
        default:
            if ($hs.modules.TextziParserCombinatorsziReadP.hs_pfail.notEvaluated) {
                return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail.hscall();
            } else {
                return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail;
            }
        }
    };
    hs_lexBaseChar25rYEx.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_get, hs_sat26DrAX);
    };
    hs_zddNum25v2PV.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddFractional25v2PW.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_valDig25rYEF.evaluate = function (hs_zddNum126Drmh, hs_eta26Drmj, hs_eta126Drmv) {
        var hs_zddEq226Drmi = new $hs.Thunk();
        hs_zddEq226Drmi.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum126Drmh);
        };
        var hs_sat26DrAZ = new $hs.Thunk();
        hs_sat26DrAZ.evaluateOnce = function () {
            var hs_sat26DrBU = new $hs.Thunk();
            hs_sat26DrBU.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(8);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum126Drmh, hs_sat26DrBU);
        };
        var hs_wild26DrB0 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226Drmi, hs_eta26Drmj, hs_sat26DrAZ);
        switch (hs_wild26DrB0.tag) {
        case 1:
            var hs_sat26DrBa = new $hs.Thunk();
            hs_sat26DrBa.evaluateOnce = function () {
                var hs_sat26DrBT = new $hs.Thunk();
                hs_sat26DrBT.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(10);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum126Drmh, hs_sat26DrBT);
            };
            var hs_wild126DrBb = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226Drmi, hs_eta26Drmj, hs_sat26DrBa);
            switch (hs_wild126DrBb.tag) {
            case 1:
                var hs_sat26DrBl = new $hs.Thunk();
                hs_sat26DrBl.evaluateOnce = function () {
                    var hs_sat26DrBS = new $hs.Thunk();
                    hs_sat26DrBS.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(16);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum126Drmh, hs_sat26DrBS);
                };
                var hs_wild226DrBm = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226Drmi, hs_eta26Drmj, hs_sat26DrBl);
                switch (hs_wild226DrBm.tag) {
                case 1:
                    var hs_sat26DrBR = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("valDig: Bad base\x00");
                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DrBR);
                case 2:
                    var hs_sat26DrBn = new $hs.Thunk();
                    hs_sat26DrBn.evaluateOnce = function () {
                        var hs_sat26DrBQ = new $hs.Data(1);
                        hs_sat26DrBQ.data = ["9"];
                        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_eta126Drmv, hs_sat26DrBQ);
                    };
                    var hs_sat26DrBo = new $hs.Thunk();
                    hs_sat26DrBo.evaluateOnce = function () {
                        var hs_sat26DrBP = new $hs.Data(1);
                        hs_sat26DrBP.data = ["0"];
                        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_sat26DrBP, hs_eta126Drmv);
                    };
                    var hs_wild326DrBp = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DrBo, hs_sat26DrBn);
                    switch (hs_wild326DrBp.tag) {
                    case 1:
                        var hs_sat26DrBu = new $hs.Thunk();
                        hs_sat26DrBu.evaluateOnce = function () {
                            var hs_sat26DrBO = new $hs.Data(1);
                            hs_sat26DrBO.data = ["f"];
                            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_eta126Drmv, hs_sat26DrBO);
                        };
                        var hs_sat26DrBv = new $hs.Thunk();
                        hs_sat26DrBv.evaluateOnce = function () {
                            var hs_sat26DrBN = new $hs.Data(1);
                            hs_sat26DrBN.data = ["a"];
                            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_sat26DrBN, hs_eta126Drmv);
                        };
                        var hs_wild426DrBw = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DrBv, hs_sat26DrBu);
                        switch (hs_wild426DrBw.tag) {
                        case 1:
                            var hs_sat26DrBD = new $hs.Thunk();
                            hs_sat26DrBD.evaluateOnce = function () {
                                var hs_sat26DrBM = new $hs.Data(1);
                                hs_sat26DrBM.data = ["F"];
                                return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_eta126Drmv, hs_sat26DrBM);
                            };
                            var hs_sat26DrBE = new $hs.Thunk();
                            hs_sat26DrBE.evaluateOnce = function () {
                                var hs_sat26DrBL = new $hs.Data(1);
                                hs_sat26DrBL.data = ["A"];
                                return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_sat26DrBL, hs_eta126Drmv);
                            };
                            var hs_wild526DrBF = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DrBE, hs_sat26DrBD);
                            switch (hs_wild526DrBF.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_sat26DrBC = new $hs.Thunk();
                                hs_sat26DrBC.evaluateOnce = function () {
                                    var hs_sat26DrBH = new $hs.Data(1);
                                    hs_sat26DrBH.data = [10];
                                    var hs_sat26DrBG = new $hs.Thunk();
                                    hs_sat26DrBG.evaluateOnce = function () {
                                        var hs_sat26DrBJ = new $hs.Thunk();
                                        hs_sat26DrBJ.evaluateOnce = function () {
                                            var hs_sat26DrBK = new $hs.Data(1);
                                            hs_sat26DrBK.data = ["A"];
                                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26DrBK);
                                        };
                                        var hs_sat26DrBI = new $hs.Thunk();
                                        hs_sat26DrBI.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_eta126Drmv);
                                        };
                                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DrBI, hs_sat26DrBJ);
                                    };
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DrBG, hs_sat26DrBH);
                                };
                                var $res = new $hs.Data(2);
                                $res.data = [hs_sat26DrBC];
                                return $res;
                            }
                        case 2:
                            var hs_sat26DrBt = new $hs.Thunk();
                            hs_sat26DrBt.evaluateOnce = function () {
                                var hs_sat26DrBy = new $hs.Data(1);
                                hs_sat26DrBy.data = [10];
                                var hs_sat26DrBx = new $hs.Thunk();
                                hs_sat26DrBx.evaluateOnce = function () {
                                    var hs_sat26DrBA = new $hs.Thunk();
                                    hs_sat26DrBA.evaluateOnce = function () {
                                        var hs_sat26DrBB = new $hs.Data(1);
                                        hs_sat26DrBB.data = ["a"];
                                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26DrBB);
                                    };
                                    var hs_sat26DrBz = new $hs.Thunk();
                                    hs_sat26DrBz.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_eta126Drmv);
                                    };
                                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DrBz, hs_sat26DrBA);
                                };
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DrBx, hs_sat26DrBy);
                            };
                            var $res = new $hs.Data(2);
                            $res.data = [hs_sat26DrBt];
                            return $res;
                        }
                    case 2:
                        var hs_sat26DrBk = new $hs.Thunk();
                        hs_sat26DrBk.evaluateOnce = function () {
                            var hs_sat26DrBr = new $hs.Thunk();
                            hs_sat26DrBr.evaluateOnce = function () {
                                var hs_sat26DrBs = new $hs.Data(1);
                                hs_sat26DrBs.data = ["0"];
                                return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26DrBs);
                            };
                            var hs_sat26DrBq = new $hs.Thunk();
                            hs_sat26DrBq.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_ord.hscall(hs_eta126Drmv);
                            };
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DrBq, hs_sat26DrBr);
                        };
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26DrBk];
                        return $res;
                    }
                }
            case 2:
                var hs_sat26DrBc = new $hs.Thunk();
                hs_sat26DrBc.evaluateOnce = function () {
                    var hs_sat26DrBj = new $hs.Data(1);
                    hs_sat26DrBj.data = ["9"];
                    return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_eta126Drmv, hs_sat26DrBj);
                };
                var hs_sat26DrBd = new $hs.Thunk();
                hs_sat26DrBd.evaluateOnce = function () {
                    var hs_sat26DrBi = new $hs.Data(1);
                    hs_sat26DrBi.data = ["0"];
                    return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_sat26DrBi, hs_eta126Drmv);
                };
                var hs_wild226DrBe = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DrBd, hs_sat26DrBc);
                switch (hs_wild226DrBe.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_sat26DrB9 = new $hs.Thunk();
                    hs_sat26DrB9.evaluateOnce = function () {
                        var hs_sat26DrBg = new $hs.Thunk();
                        hs_sat26DrBg.evaluateOnce = function () {
                            var hs_sat26DrBh = new $hs.Data(1);
                            hs_sat26DrBh.data = ["0"];
                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26DrBh);
                        };
                        var hs_sat26DrBf = new $hs.Thunk();
                        hs_sat26DrBf.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_eta126Drmv);
                        };
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DrBf, hs_sat26DrBg);
                    };
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26DrB9];
                    return $res;
                }
            }
        case 2:
            var hs_sat26DrB1 = new $hs.Thunk();
            hs_sat26DrB1.evaluateOnce = function () {
                var hs_sat26DrB8 = new $hs.Data(1);
                hs_sat26DrB8.data = ["7"];
                return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_eta126Drmv, hs_sat26DrB8);
            };
            var hs_sat26DrB2 = new $hs.Thunk();
            hs_sat26DrB2.evaluateOnce = function () {
                var hs_sat26DrB7 = new $hs.Data(1);
                hs_sat26DrB7.data = ["0"];
                return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_sat26DrB7, hs_eta126Drmv);
            };
            var hs_wild126DrB3 = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DrB2, hs_sat26DrB1);
            switch (hs_wild126DrB3.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_sat26DrAY = new $hs.Thunk();
                hs_sat26DrAY.evaluateOnce = function () {
                    var hs_sat26DrB5 = new $hs.Thunk();
                    hs_sat26DrB5.evaluateOnce = function () {
                        var hs_sat26DrB6 = new $hs.Data(1);
                        hs_sat26DrB6.data = ["0"];
                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26DrB6);
                    };
                    var hs_sat26DrB4 = new $hs.Thunk();
                    hs_sat26DrB4.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_eta126Drmv);
                    };
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DrB4, hs_sat26DrB5);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26DrAY];
                return $res;
            }
        }
    };
    hs_lexDigits25rYEB.evaluate = function (hs_base26Drns) {
        var hs_scan26DrnB = new $hs.Func(2);
        hs_scan26DrnB.evaluate = function (hs_ds26Drnm, hs_f26Drno) {
            var hs_wild26DrBX = hs_ds26Drnm;
            if (hs_ds26Drnm.notEvaluated) {
                hs_wild26DrBX = hs_ds26Drnm.hscall();
            }
            switch (hs_wild26DrBX.tag) {
            case 1:
                var hs_sat26DrC2 = new $hs.Thunk();
                hs_sat26DrC2.evaluateOnce = function () {
                    return hs_f26Drno.hscall($hs.modules.GHCziTypes.hs_ZMZN);
                };
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrC2);
            case 2:
                var hs_c26Drnt = hs_wild26DrBX.data[0];
                var hs_cs26Drny = hs_wild26DrBX.data[1];
                var hs_wild126DrBY = hs_valDig25rYEF.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_base26Drns, hs_c26Drnt);
                switch (hs_wild126DrBY.tag) {
                case 1:
                    var hs_sat26DrC1 = new $hs.Thunk();
                    hs_sat26DrC1.evaluateOnce = function () {
                        return hs_f26Drno.hscall($hs.modules.GHCziTypes.hs_ZMZN);
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrC1);
                case 2:
                    var hs_n26Drnz = hs_wild126DrBY.data[0];
                    var hs_sat26DrBW = new $hs.Func(1);
                    hs_sat26DrBW.evaluate = function (hs_ds126DrnD) {
                        var hs_sat26DrBZ = new $hs.Thunk();
                        hs_sat26DrBZ.evaluateOnce = function () {
                            var hs_sat26DrC0 = new $hs.Func(1);
                            hs_sat26DrC0.evaluate = function (hs_eta1cW6l3) {
                                var $res = new $hs.Data(2);
                                $res.data = [hs_n26Drnz, hs_eta1cW6l3];
                                return $res;
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_f26Drno, hs_sat26DrC0);
                        };
                        return hs_scan26DrnB.hscall(hs_cs26Drny, hs_sat26DrBZ);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_get, hs_sat26DrBW);
                }
            }
        };
        var hs_sat26DrBV = new $hs.Func(1);
        hs_sat26DrBV.evaluate = function (hs_s26DrnG) {
            var hs_sat26DrC4 = new $hs.Func(1);
            hs_sat26DrC4.evaluate = function (hs_xs26DrnJ) {
                var hs_sat26DrC6 = new $hs.Thunk();
                hs_sat26DrC6.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_xs26DrnJ);
                };
                var hs_sat26DrC5 = new $hs.Thunk();
                hs_sat26DrC5.evaluateOnce = function () {
                    var hs_sat26DrC7 = new $hs.Thunk();
                    hs_sat26DrC7.evaluateOnce = function () {
                        var hs_sat26DrC8 = new $hs.Thunk();
                        hs_sat26DrC8.evaluateOnce = function () {
                            return $hs.modules.GHCziList.hs_null.hscall(hs_xs26DrnJ);
                        };
                        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DrC8);
                    };
                    return $hs.modules.ControlziMonad.hs_guard.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusReadP, hs_sat26DrC7);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrC5, hs_sat26DrC6);
            };
            var hs_sat26DrC3 = new $hs.Thunk();
            hs_sat26DrC3.evaluateOnce = function () {
                return hs_scan26DrnB.hscall(hs_s26DrnG, $hs.modules.GHCziBase.hs_id);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrC3, hs_sat26DrC4);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_look, hs_sat26DrBV);
    };
    hs_sat26DrCd.evaluate = function (hs_ds26DrnZ) {
        var hs_sat26DrCa = new $hs.Func(1);
        hs_sat26DrCa.evaluate = function (hs_fraction26DrnW) {
            var hs_sat26DrCc = new $hs.Data(2);
            hs_sat26DrCc.data = [hs_fraction26DrnW];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCc);
        };
        var hs_sat26DrC9 = new $hs.Thunk();
        hs_sat26DrC9.evaluateOnce = function () {
            var hs_sat26DrCb = new $hs.Data(1);
            hs_sat26DrCb.data = [10];
            return hs_lexDigits25rYEB.hscall(hs_sat26DrCb);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrC9, hs_sat26DrCa);
    };
    hs_sat26DrCf.evaluateOnce = function () {
        var hs_sat26DrCe = new $hs.Data(1);
        hs_sat26DrCe.data = ["."];
        return $hs.modules.TextziParserCombinatorsziReadP.hs_char.hscall(hs_sat26DrCe);
    };
    hs_lexFrac25rYEz.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCf, hs_sat26DrCd);
    };
    hs_lexInteger25rYEC.evaluate = function (hs_base26Dro2) {
        var hs_sat26DrCh = new $hs.Func(1);
        hs_sat26DrCh.evaluate = function (hs_xs26Dro7) {
            var hs_sat26DrCi = new $hs.Thunk();
            hs_sat26DrCi.evaluateOnce = function () {
                var hs_sat26DrCk = new $hs.Thunk();
                hs_sat26DrCk.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_sat26DrCj = new $hs.Thunk();
                hs_sat26DrCj.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziNum.hs_zdfNumInteger, hs_base26Dro2);
                };
                return hs_val25rYED.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DrCj, hs_sat26DrCk, hs_xs26Dro7);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCi);
        };
        var hs_sat26DrCg = new $hs.Thunk();
        hs_sat26DrCg.evaluateOnce = function () {
            return hs_lexDigits25rYEB.hscall(hs_base26Dro2);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCg, hs_sat26DrCh);
    };
    hs_sat26DrGx.evaluateOnce = function () {
        var hs_sat26DrCm = new $hs.Thunk();
        hs_sat26DrCm.evaluateOnce = function () {
            var hs_sat26DrCC = new $hs.Thunk();
            hs_sat26DrCC.evaluateOnce = function () {
                var hs_sat26DrDg = new $hs.Thunk();
                hs_sat26DrDg.evaluateOnce = function () {
                    var hs_sat26DrGu = new $hs.Thunk();
                    hs_sat26DrGu.evaluateOnce = function () {
                        var hs_sat26DrGw = new $hs.Data(1);
                        hs_sat26DrGw.data = ["\x7f"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGw);
                    };
                    var hs_sat26DrGt = new $hs.Thunk();
                    hs_sat26DrGt.evaluateOnce = function () {
                        var hs_sat26DrGv = new $hs.Thunk();
                        hs_sat26DrGv.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("DEL\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrGv);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGt, hs_sat26DrGu);
                };
                var hs_sat26DrDh = new $hs.Data(2);
                hs_sat26DrDh.data = [hs_sat26DrDg, $hs.modules.GHCziTypes.hs_ZMZN];
                var hs_sat26DrDi = new $hs.Thunk();
                hs_sat26DrDi.evaluateOnce = function () {
                    var hs_sat26DrGq = new $hs.Thunk();
                    hs_sat26DrGq.evaluateOnce = function () {
                        var hs_sat26DrGs = new $hs.Data(1);
                        hs_sat26DrGs.data = [" "];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGs);
                    };
                    var hs_sat26DrGp = new $hs.Thunk();
                    hs_sat26DrGp.evaluateOnce = function () {
                        var hs_sat26DrGr = new $hs.Thunk();
                        hs_sat26DrGr.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("SP\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrGr);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGp, hs_sat26DrGq);
                };
                var hs_sat26DrDj = new $hs.Data(2);
                hs_sat26DrDj.data = [hs_sat26DrDi, hs_sat26DrDh];
                var hs_sat26DrDk = new $hs.Thunk();
                hs_sat26DrDk.evaluateOnce = function () {
                    var hs_sat26DrGm = new $hs.Thunk();
                    hs_sat26DrGm.evaluateOnce = function () {
                        var hs_sat26DrGo = new $hs.Data(1);
                        hs_sat26DrGo.data = ["\x1f"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGo);
                    };
                    var hs_sat26DrGl = new $hs.Thunk();
                    hs_sat26DrGl.evaluateOnce = function () {
                        var hs_sat26DrGn = new $hs.Thunk();
                        hs_sat26DrGn.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("US\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrGn);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGl, hs_sat26DrGm);
                };
                var hs_sat26DrDl = new $hs.Data(2);
                hs_sat26DrDl.data = [hs_sat26DrDk, hs_sat26DrDj];
                var hs_sat26DrDm = new $hs.Thunk();
                hs_sat26DrDm.evaluateOnce = function () {
                    var hs_sat26DrGi = new $hs.Thunk();
                    hs_sat26DrGi.evaluateOnce = function () {
                        var hs_sat26DrGk = new $hs.Data(1);
                        hs_sat26DrGk.data = ["\x1e"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGk);
                    };
                    var hs_sat26DrGh = new $hs.Thunk();
                    hs_sat26DrGh.evaluateOnce = function () {
                        var hs_sat26DrGj = new $hs.Thunk();
                        hs_sat26DrGj.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("RS\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrGj);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGh, hs_sat26DrGi);
                };
                var hs_sat26DrDn = new $hs.Data(2);
                hs_sat26DrDn.data = [hs_sat26DrDm, hs_sat26DrDl];
                var hs_sat26DrDo = new $hs.Thunk();
                hs_sat26DrDo.evaluateOnce = function () {
                    var hs_sat26DrGe = new $hs.Thunk();
                    hs_sat26DrGe.evaluateOnce = function () {
                        var hs_sat26DrGg = new $hs.Data(1);
                        hs_sat26DrGg.data = ["\x1d"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGg);
                    };
                    var hs_sat26DrGd = new $hs.Thunk();
                    hs_sat26DrGd.evaluateOnce = function () {
                        var hs_sat26DrGf = new $hs.Thunk();
                        hs_sat26DrGf.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GS\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrGf);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGd, hs_sat26DrGe);
                };
                var hs_sat26DrDp = new $hs.Data(2);
                hs_sat26DrDp.data = [hs_sat26DrDo, hs_sat26DrDn];
                var hs_sat26DrDq = new $hs.Thunk();
                hs_sat26DrDq.evaluateOnce = function () {
                    var hs_sat26DrGa = new $hs.Thunk();
                    hs_sat26DrGa.evaluateOnce = function () {
                        var hs_sat26DrGc = new $hs.Data(1);
                        hs_sat26DrGc.data = ["\x1c"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGc);
                    };
                    var hs_sat26DrG9 = new $hs.Thunk();
                    hs_sat26DrG9.evaluateOnce = function () {
                        var hs_sat26DrGb = new $hs.Thunk();
                        hs_sat26DrGb.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("FS\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrGb);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrG9, hs_sat26DrGa);
                };
                var hs_sat26DrDr = new $hs.Data(2);
                hs_sat26DrDr.data = [hs_sat26DrDq, hs_sat26DrDp];
                var hs_sat26DrDs = new $hs.Thunk();
                hs_sat26DrDs.evaluateOnce = function () {
                    var hs_sat26DrG6 = new $hs.Thunk();
                    hs_sat26DrG6.evaluateOnce = function () {
                        var hs_sat26DrG8 = new $hs.Data(1);
                        hs_sat26DrG8.data = ["\x1b"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrG8);
                    };
                    var hs_sat26DrG5 = new $hs.Thunk();
                    hs_sat26DrG5.evaluateOnce = function () {
                        var hs_sat26DrG7 = new $hs.Thunk();
                        hs_sat26DrG7.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ESC\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrG7);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrG5, hs_sat26DrG6);
                };
                var hs_sat26DrDt = new $hs.Data(2);
                hs_sat26DrDt.data = [hs_sat26DrDs, hs_sat26DrDr];
                var hs_sat26DrDu = new $hs.Thunk();
                hs_sat26DrDu.evaluateOnce = function () {
                    var hs_sat26DrG2 = new $hs.Thunk();
                    hs_sat26DrG2.evaluateOnce = function () {
                        var hs_sat26DrG4 = new $hs.Data(1);
                        hs_sat26DrG4.data = ["\x1a"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrG4);
                    };
                    var hs_sat26DrG1 = new $hs.Thunk();
                    hs_sat26DrG1.evaluateOnce = function () {
                        var hs_sat26DrG3 = new $hs.Thunk();
                        hs_sat26DrG3.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("SUB\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrG3);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrG1, hs_sat26DrG2);
                };
                var hs_sat26DrDv = new $hs.Data(2);
                hs_sat26DrDv.data = [hs_sat26DrDu, hs_sat26DrDt];
                var hs_sat26DrDw = new $hs.Thunk();
                hs_sat26DrDw.evaluateOnce = function () {
                    var hs_sat26DrFY = new $hs.Thunk();
                    hs_sat26DrFY.evaluateOnce = function () {
                        var hs_sat26DrG0 = new $hs.Data(1);
                        hs_sat26DrG0.data = ["\x19"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrG0);
                    };
                    var hs_sat26DrFX = new $hs.Thunk();
                    hs_sat26DrFX.evaluateOnce = function () {
                        var hs_sat26DrFZ = new $hs.Thunk();
                        hs_sat26DrFZ.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("EM\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrFZ);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFX, hs_sat26DrFY);
                };
                var hs_sat26DrDx = new $hs.Data(2);
                hs_sat26DrDx.data = [hs_sat26DrDw, hs_sat26DrDv];
                var hs_sat26DrDy = new $hs.Thunk();
                hs_sat26DrDy.evaluateOnce = function () {
                    var hs_sat26DrFU = new $hs.Thunk();
                    hs_sat26DrFU.evaluateOnce = function () {
                        var hs_sat26DrFW = new $hs.Data(1);
                        hs_sat26DrFW.data = ["\x18"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFW);
                    };
                    var hs_sat26DrFT = new $hs.Thunk();
                    hs_sat26DrFT.evaluateOnce = function () {
                        var hs_sat26DrFV = new $hs.Thunk();
                        hs_sat26DrFV.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CAN\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrFV);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFT, hs_sat26DrFU);
                };
                var hs_sat26DrDz = new $hs.Data(2);
                hs_sat26DrDz.data = [hs_sat26DrDy, hs_sat26DrDx];
                var hs_sat26DrDA = new $hs.Thunk();
                hs_sat26DrDA.evaluateOnce = function () {
                    var hs_sat26DrFQ = new $hs.Thunk();
                    hs_sat26DrFQ.evaluateOnce = function () {
                        var hs_sat26DrFS = new $hs.Data(1);
                        hs_sat26DrFS.data = ["\x17"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFS);
                    };
                    var hs_sat26DrFP = new $hs.Thunk();
                    hs_sat26DrFP.evaluateOnce = function () {
                        var hs_sat26DrFR = new $hs.Thunk();
                        hs_sat26DrFR.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ETB\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrFR);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFP, hs_sat26DrFQ);
                };
                var hs_sat26DrDB = new $hs.Data(2);
                hs_sat26DrDB.data = [hs_sat26DrDA, hs_sat26DrDz];
                var hs_sat26DrDC = new $hs.Thunk();
                hs_sat26DrDC.evaluateOnce = function () {
                    var hs_sat26DrFM = new $hs.Thunk();
                    hs_sat26DrFM.evaluateOnce = function () {
                        var hs_sat26DrFO = new $hs.Data(1);
                        hs_sat26DrFO.data = ["\x16"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFO);
                    };
                    var hs_sat26DrFL = new $hs.Thunk();
                    hs_sat26DrFL.evaluateOnce = function () {
                        var hs_sat26DrFN = new $hs.Thunk();
                        hs_sat26DrFN.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("SYN\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrFN);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFL, hs_sat26DrFM);
                };
                var hs_sat26DrDD = new $hs.Data(2);
                hs_sat26DrDD.data = [hs_sat26DrDC, hs_sat26DrDB];
                var hs_sat26DrDE = new $hs.Thunk();
                hs_sat26DrDE.evaluateOnce = function () {
                    var hs_sat26DrFI = new $hs.Thunk();
                    hs_sat26DrFI.evaluateOnce = function () {
                        var hs_sat26DrFK = new $hs.Data(1);
                        hs_sat26DrFK.data = ["\x15"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFK);
                    };
                    var hs_sat26DrFH = new $hs.Thunk();
                    hs_sat26DrFH.evaluateOnce = function () {
                        var hs_sat26DrFJ = new $hs.Thunk();
                        hs_sat26DrFJ.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("NAK\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrFJ);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFH, hs_sat26DrFI);
                };
                var hs_sat26DrDF = new $hs.Data(2);
                hs_sat26DrDF.data = [hs_sat26DrDE, hs_sat26DrDD];
                var hs_sat26DrDG = new $hs.Thunk();
                hs_sat26DrDG.evaluateOnce = function () {
                    var hs_sat26DrFE = new $hs.Thunk();
                    hs_sat26DrFE.evaluateOnce = function () {
                        var hs_sat26DrFG = new $hs.Data(1);
                        hs_sat26DrFG.data = ["\x14"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFG);
                    };
                    var hs_sat26DrFD = new $hs.Thunk();
                    hs_sat26DrFD.evaluateOnce = function () {
                        var hs_sat26DrFF = new $hs.Thunk();
                        hs_sat26DrFF.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("DC4\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrFF);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFD, hs_sat26DrFE);
                };
                var hs_sat26DrDH = new $hs.Data(2);
                hs_sat26DrDH.data = [hs_sat26DrDG, hs_sat26DrDF];
                var hs_sat26DrDI = new $hs.Thunk();
                hs_sat26DrDI.evaluateOnce = function () {
                    var hs_sat26DrFA = new $hs.Thunk();
                    hs_sat26DrFA.evaluateOnce = function () {
                        var hs_sat26DrFC = new $hs.Data(1);
                        hs_sat26DrFC.data = ["\x13"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFC);
                    };
                    var hs_sat26DrFz = new $hs.Thunk();
                    hs_sat26DrFz.evaluateOnce = function () {
                        var hs_sat26DrFB = new $hs.Thunk();
                        hs_sat26DrFB.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("DC3\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrFB);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFz, hs_sat26DrFA);
                };
                var hs_sat26DrDJ = new $hs.Data(2);
                hs_sat26DrDJ.data = [hs_sat26DrDI, hs_sat26DrDH];
                var hs_sat26DrDK = new $hs.Thunk();
                hs_sat26DrDK.evaluateOnce = function () {
                    var hs_sat26DrFw = new $hs.Thunk();
                    hs_sat26DrFw.evaluateOnce = function () {
                        var hs_sat26DrFy = new $hs.Data(1);
                        hs_sat26DrFy.data = ["\x12"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFy);
                    };
                    var hs_sat26DrFv = new $hs.Thunk();
                    hs_sat26DrFv.evaluateOnce = function () {
                        var hs_sat26DrFx = new $hs.Thunk();
                        hs_sat26DrFx.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("DC2\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrFx);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFv, hs_sat26DrFw);
                };
                var hs_sat26DrDL = new $hs.Data(2);
                hs_sat26DrDL.data = [hs_sat26DrDK, hs_sat26DrDJ];
                var hs_sat26DrDM = new $hs.Thunk();
                hs_sat26DrDM.evaluateOnce = function () {
                    var hs_sat26DrFs = new $hs.Thunk();
                    hs_sat26DrFs.evaluateOnce = function () {
                        var hs_sat26DrFu = new $hs.Data(1);
                        hs_sat26DrFu.data = ["\x11"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFu);
                    };
                    var hs_sat26DrFr = new $hs.Thunk();
                    hs_sat26DrFr.evaluateOnce = function () {
                        var hs_sat26DrFt = new $hs.Thunk();
                        hs_sat26DrFt.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("DC1\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrFt);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFr, hs_sat26DrFs);
                };
                var hs_sat26DrDN = new $hs.Data(2);
                hs_sat26DrDN.data = [hs_sat26DrDM, hs_sat26DrDL];
                var hs_sat26DrDO = new $hs.Thunk();
                hs_sat26DrDO.evaluateOnce = function () {
                    var hs_sat26DrFo = new $hs.Thunk();
                    hs_sat26DrFo.evaluateOnce = function () {
                        var hs_sat26DrFq = new $hs.Data(1);
                        hs_sat26DrFq.data = ["\x10"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFq);
                    };
                    var hs_sat26DrFn = new $hs.Thunk();
                    hs_sat26DrFn.evaluateOnce = function () {
                        var hs_sat26DrFp = new $hs.Thunk();
                        hs_sat26DrFp.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("DLE\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrFp);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFn, hs_sat26DrFo);
                };
                var hs_sat26DrDP = new $hs.Data(2);
                hs_sat26DrDP.data = [hs_sat26DrDO, hs_sat26DrDN];
                var hs_sat26DrDQ = new $hs.Thunk();
                hs_sat26DrDQ.evaluateOnce = function () {
                    var hs_sat26DrFk = new $hs.Thunk();
                    hs_sat26DrFk.evaluateOnce = function () {
                        var hs_sat26DrFm = new $hs.Data(1);
                        hs_sat26DrFm.data = ["\x0f"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFm);
                    };
                    var hs_sat26DrFj = new $hs.Thunk();
                    hs_sat26DrFj.evaluateOnce = function () {
                        var hs_sat26DrFl = new $hs.Thunk();
                        hs_sat26DrFl.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("SI\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrFl);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFj, hs_sat26DrFk);
                };
                var hs_sat26DrDR = new $hs.Data(2);
                hs_sat26DrDR.data = [hs_sat26DrDQ, hs_sat26DrDP];
                var hs_sat26DrDS = new $hs.Thunk();
                hs_sat26DrDS.evaluateOnce = function () {
                    var hs_sat26DrFg = new $hs.Thunk();
                    hs_sat26DrFg.evaluateOnce = function () {
                        var hs_sat26DrFi = new $hs.Data(1);
                        hs_sat26DrFi.data = ["\r"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFi);
                    };
                    var hs_sat26DrFf = new $hs.Thunk();
                    hs_sat26DrFf.evaluateOnce = function () {
                        var hs_sat26DrFh = new $hs.Thunk();
                        hs_sat26DrFh.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CR\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrFh);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFf, hs_sat26DrFg);
                };
                var hs_sat26DrDT = new $hs.Data(2);
                hs_sat26DrDT.data = [hs_sat26DrDS, hs_sat26DrDR];
                var hs_sat26DrDU = new $hs.Thunk();
                hs_sat26DrDU.evaluateOnce = function () {
                    var hs_sat26DrFc = new $hs.Thunk();
                    hs_sat26DrFc.evaluateOnce = function () {
                        var hs_sat26DrFe = new $hs.Data(1);
                        hs_sat26DrFe.data = ["\f"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFe);
                    };
                    var hs_sat26DrFb = new $hs.Thunk();
                    hs_sat26DrFb.evaluateOnce = function () {
                        var hs_sat26DrFd = new $hs.Thunk();
                        hs_sat26DrFd.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("FF\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrFd);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFb, hs_sat26DrFc);
                };
                var hs_sat26DrDV = new $hs.Data(2);
                hs_sat26DrDV.data = [hs_sat26DrDU, hs_sat26DrDT];
                var hs_sat26DrDW = new $hs.Thunk();
                hs_sat26DrDW.evaluateOnce = function () {
                    var hs_sat26DrF8 = new $hs.Thunk();
                    hs_sat26DrF8.evaluateOnce = function () {
                        var hs_sat26DrFa = new $hs.Data(1);
                        hs_sat26DrFa.data = ["\v"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrFa);
                    };
                    var hs_sat26DrF7 = new $hs.Thunk();
                    hs_sat26DrF7.evaluateOnce = function () {
                        var hs_sat26DrF9 = new $hs.Thunk();
                        hs_sat26DrF9.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("VT\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrF9);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrF7, hs_sat26DrF8);
                };
                var hs_sat26DrDX = new $hs.Data(2);
                hs_sat26DrDX.data = [hs_sat26DrDW, hs_sat26DrDV];
                var hs_sat26DrDY = new $hs.Thunk();
                hs_sat26DrDY.evaluateOnce = function () {
                    var hs_sat26DrF4 = new $hs.Thunk();
                    hs_sat26DrF4.evaluateOnce = function () {
                        var hs_sat26DrF6 = new $hs.Data(1);
                        hs_sat26DrF6.data = ["\n"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrF6);
                    };
                    var hs_sat26DrF3 = new $hs.Thunk();
                    hs_sat26DrF3.evaluateOnce = function () {
                        var hs_sat26DrF5 = new $hs.Thunk();
                        hs_sat26DrF5.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("LF\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrF5);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrF3, hs_sat26DrF4);
                };
                var hs_sat26DrDZ = new $hs.Data(2);
                hs_sat26DrDZ.data = [hs_sat26DrDY, hs_sat26DrDX];
                var hs_sat26DrE0 = new $hs.Thunk();
                hs_sat26DrE0.evaluateOnce = function () {
                    var hs_sat26DrF0 = new $hs.Thunk();
                    hs_sat26DrF0.evaluateOnce = function () {
                        var hs_sat26DrF2 = new $hs.Data(1);
                        hs_sat26DrF2.data = ["\t"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrF2);
                    };
                    var hs_sat26DrEZ = new $hs.Thunk();
                    hs_sat26DrEZ.evaluateOnce = function () {
                        var hs_sat26DrF1 = new $hs.Thunk();
                        hs_sat26DrF1.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("HT\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrF1);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrEZ, hs_sat26DrF0);
                };
                var hs_sat26DrE1 = new $hs.Data(2);
                hs_sat26DrE1.data = [hs_sat26DrE0, hs_sat26DrDZ];
                var hs_sat26DrE2 = new $hs.Thunk();
                hs_sat26DrE2.evaluateOnce = function () {
                    var hs_sat26DrEW = new $hs.Thunk();
                    hs_sat26DrEW.evaluateOnce = function () {
                        var hs_sat26DrEY = new $hs.Data(1);
                        hs_sat26DrEY.data = ["\b"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrEY);
                    };
                    var hs_sat26DrEV = new $hs.Thunk();
                    hs_sat26DrEV.evaluateOnce = function () {
                        var hs_sat26DrEX = new $hs.Thunk();
                        hs_sat26DrEX.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("BS\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrEX);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrEV, hs_sat26DrEW);
                };
                var hs_sat26DrE3 = new $hs.Data(2);
                hs_sat26DrE3.data = [hs_sat26DrE2, hs_sat26DrE1];
                var hs_sat26DrE4 = new $hs.Thunk();
                hs_sat26DrE4.evaluateOnce = function () {
                    var hs_sat26DrES = new $hs.Thunk();
                    hs_sat26DrES.evaluateOnce = function () {
                        var hs_sat26DrEU = new $hs.Data(1);
                        hs_sat26DrEU.data = ["\x07"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrEU);
                    };
                    var hs_sat26DrER = new $hs.Thunk();
                    hs_sat26DrER.evaluateOnce = function () {
                        var hs_sat26DrET = new $hs.Thunk();
                        hs_sat26DrET.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("BEL\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrET);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrER, hs_sat26DrES);
                };
                var hs_sat26DrE5 = new $hs.Data(2);
                hs_sat26DrE5.data = [hs_sat26DrE4, hs_sat26DrE3];
                var hs_sat26DrE6 = new $hs.Thunk();
                hs_sat26DrE6.evaluateOnce = function () {
                    var hs_sat26DrEO = new $hs.Thunk();
                    hs_sat26DrEO.evaluateOnce = function () {
                        var hs_sat26DrEQ = new $hs.Data(1);
                        hs_sat26DrEQ.data = ["\x06"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrEQ);
                    };
                    var hs_sat26DrEN = new $hs.Thunk();
                    hs_sat26DrEN.evaluateOnce = function () {
                        var hs_sat26DrEP = new $hs.Thunk();
                        hs_sat26DrEP.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ACK\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrEP);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrEN, hs_sat26DrEO);
                };
                var hs_sat26DrE7 = new $hs.Data(2);
                hs_sat26DrE7.data = [hs_sat26DrE6, hs_sat26DrE5];
                var hs_sat26DrE8 = new $hs.Thunk();
                hs_sat26DrE8.evaluateOnce = function () {
                    var hs_sat26DrEK = new $hs.Thunk();
                    hs_sat26DrEK.evaluateOnce = function () {
                        var hs_sat26DrEM = new $hs.Data(1);
                        hs_sat26DrEM.data = ["\x05"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrEM);
                    };
                    var hs_sat26DrEJ = new $hs.Thunk();
                    hs_sat26DrEJ.evaluateOnce = function () {
                        var hs_sat26DrEL = new $hs.Thunk();
                        hs_sat26DrEL.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ENQ\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrEL);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrEJ, hs_sat26DrEK);
                };
                var hs_sat26DrE9 = new $hs.Data(2);
                hs_sat26DrE9.data = [hs_sat26DrE8, hs_sat26DrE7];
                var hs_sat26DrEa = new $hs.Thunk();
                hs_sat26DrEa.evaluateOnce = function () {
                    var hs_sat26DrEG = new $hs.Thunk();
                    hs_sat26DrEG.evaluateOnce = function () {
                        var hs_sat26DrEI = new $hs.Data(1);
                        hs_sat26DrEI.data = ["\x04"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrEI);
                    };
                    var hs_sat26DrEF = new $hs.Thunk();
                    hs_sat26DrEF.evaluateOnce = function () {
                        var hs_sat26DrEH = new $hs.Thunk();
                        hs_sat26DrEH.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("EOT\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrEH);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrEF, hs_sat26DrEG);
                };
                var hs_sat26DrEb = new $hs.Data(2);
                hs_sat26DrEb.data = [hs_sat26DrEa, hs_sat26DrE9];
                var hs_sat26DrEc = new $hs.Thunk();
                hs_sat26DrEc.evaluateOnce = function () {
                    var hs_sat26DrEC = new $hs.Thunk();
                    hs_sat26DrEC.evaluateOnce = function () {
                        var hs_sat26DrEE = new $hs.Data(1);
                        hs_sat26DrEE.data = ["\x03"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrEE);
                    };
                    var hs_sat26DrEB = new $hs.Thunk();
                    hs_sat26DrEB.evaluateOnce = function () {
                        var hs_sat26DrED = new $hs.Thunk();
                        hs_sat26DrED.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ETX\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrED);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrEB, hs_sat26DrEC);
                };
                var hs_sat26DrEd = new $hs.Data(2);
                hs_sat26DrEd.data = [hs_sat26DrEc, hs_sat26DrEb];
                var hs_sat26DrEe = new $hs.Thunk();
                hs_sat26DrEe.evaluateOnce = function () {
                    var hs_sat26DrEy = new $hs.Thunk();
                    hs_sat26DrEy.evaluateOnce = function () {
                        var hs_sat26DrEA = new $hs.Data(1);
                        hs_sat26DrEA.data = ["\x02"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrEA);
                    };
                    var hs_sat26DrEx = new $hs.Thunk();
                    hs_sat26DrEx.evaluateOnce = function () {
                        var hs_sat26DrEz = new $hs.Thunk();
                        hs_sat26DrEz.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("STX\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrEz);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrEx, hs_sat26DrEy);
                };
                var hs_sat26DrEf = new $hs.Data(2);
                hs_sat26DrEf.data = [hs_sat26DrEe, hs_sat26DrEd];
                var hs_sat26DrEg = new $hs.Thunk();
                hs_sat26DrEg.evaluateOnce = function () {
                    var hs_sat26DrEu = new $hs.Thunk();
                    hs_sat26DrEu.evaluateOnce = function () {
                        var hs_sat26DrEw = new $hs.Data(1);
                        hs_sat26DrEw.data = ["\x00"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrEw);
                    };
                    var hs_sat26DrEt = new $hs.Thunk();
                    hs_sat26DrEt.evaluateOnce = function () {
                        var hs_sat26DrEv = new $hs.Thunk();
                        hs_sat26DrEv.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("NUL\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrEv);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrEt, hs_sat26DrEu);
                };
                var hs_sat26DrEh = new $hs.Data(2);
                hs_sat26DrEh.data = [hs_sat26DrEg, hs_sat26DrEf];
                var hs_sat26DrEi = new $hs.Thunk();
                hs_sat26DrEi.evaluateOnce = function () {
                    var hs_sat26DrEk = new $hs.Thunk();
                    hs_sat26DrEk.evaluateOnce = function () {
                        var hs_sat26DrEq = new $hs.Thunk();
                        hs_sat26DrEq.evaluateOnce = function () {
                            var hs_sat26DrEs = new $hs.Data(1);
                            hs_sat26DrEs.data = ["\x0e"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrEs);
                        };
                        var hs_sat26DrEp = new $hs.Thunk();
                        hs_sat26DrEp.evaluateOnce = function () {
                            var hs_sat26DrEr = new $hs.Thunk();
                            hs_sat26DrEr.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("SO\x00");
                            };
                            return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrEr);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrEp, hs_sat26DrEq);
                    };
                    var hs_sat26DrEj = new $hs.Thunk();
                    hs_sat26DrEj.evaluateOnce = function () {
                        var hs_sat26DrEm = new $hs.Thunk();
                        hs_sat26DrEm.evaluateOnce = function () {
                            var hs_sat26DrEo = new $hs.Data(1);
                            hs_sat26DrEo.data = ["\x01"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrEo);
                        };
                        var hs_sat26DrEl = new $hs.Thunk();
                        hs_sat26DrEl.evaluateOnce = function () {
                            var hs_sat26DrEn = new $hs.Thunk();
                            hs_sat26DrEn.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("SOH\x00");
                            };
                            return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrEn);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrEl, hs_sat26DrEm);
                    };
                    return $hs.modules.TextziParserCombinatorsziReadP.hs_zlzpzp.hscall(hs_sat26DrEj, hs_sat26DrEk);
                };
                var hs_sat26DrDf = new $hs.Data(2);
                hs_sat26DrDf.data = [hs_sat26DrEi, hs_sat26DrEh];
                return $hs.modules.TextziParserCombinatorsziReadP.hs_choice.hscall(hs_sat26DrDf);
            };
            var hs_sat26DrCB = new $hs.Thunk();
            hs_sat26DrCB.evaluateOnce = function () {
                var hs_sat26DrCE = new $hs.Func(1);
                hs_sat26DrCE.evaluate = function (hs_ds26Drps) {
                    var hs_sat26DrCG = new $hs.Func(1);
                    hs_sat26DrCG.evaluate = function (hs_c26DroQ) {
                        var hs_wild26DrCJ = hs_c26DroQ;
                        if (hs_c26DroQ.notEvaluated) {
                            hs_wild26DrCJ = hs_c26DroQ.hscall();
                        }
                        var hs_ds126DroT = hs_wild26DrCJ.data[0];
                        var hs_ds226DrCI = hs_ds126DroT;
                        if (hs_ds126DroT.notEvaluated) {
                            hs_ds226DrCI = hs_ds126DroT.hscall();
                        }
                        switch (hs_ds226DrCI) {
                        case "@":
                            var hs_sat26DrCH = new $hs.Data(1);
                            hs_sat26DrCH.data = ["\x00"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCH);
                        case "A":
                            var hs_sat26DrCK = new $hs.Data(1);
                            hs_sat26DrCK.data = ["\x01"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCK);
                        case "B":
                            var hs_sat26DrCL = new $hs.Data(1);
                            hs_sat26DrCL.data = ["\x02"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCL);
                        case "C":
                            var hs_sat26DrCM = new $hs.Data(1);
                            hs_sat26DrCM.data = ["\x03"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCM);
                        case "D":
                            var hs_sat26DrCN = new $hs.Data(1);
                            hs_sat26DrCN.data = ["\x04"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCN);
                        case "E":
                            var hs_sat26DrCO = new $hs.Data(1);
                            hs_sat26DrCO.data = ["\x05"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCO);
                        case "F":
                            var hs_sat26DrCP = new $hs.Data(1);
                            hs_sat26DrCP.data = ["\x06"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCP);
                        case "G":
                            var hs_sat26DrCQ = new $hs.Data(1);
                            hs_sat26DrCQ.data = ["\x07"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCQ);
                        case "H":
                            var hs_sat26DrCR = new $hs.Data(1);
                            hs_sat26DrCR.data = ["\b"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCR);
                        case "I":
                            var hs_sat26DrCS = new $hs.Data(1);
                            hs_sat26DrCS.data = ["\t"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCS);
                        case "J":
                            var hs_sat26DrCT = new $hs.Data(1);
                            hs_sat26DrCT.data = ["\n"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCT);
                        case "K":
                            var hs_sat26DrCU = new $hs.Data(1);
                            hs_sat26DrCU.data = ["\v"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCU);
                        case "L":
                            var hs_sat26DrCV = new $hs.Data(1);
                            hs_sat26DrCV.data = ["\f"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCV);
                        case "M":
                            var hs_sat26DrCW = new $hs.Data(1);
                            hs_sat26DrCW.data = ["\r"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCW);
                        case "N":
                            var hs_sat26DrCX = new $hs.Data(1);
                            hs_sat26DrCX.data = ["\x0e"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCX);
                        case "O":
                            var hs_sat26DrCY = new $hs.Data(1);
                            hs_sat26DrCY.data = ["\x0f"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCY);
                        case "P":
                            var hs_sat26DrCZ = new $hs.Data(1);
                            hs_sat26DrCZ.data = ["\x10"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCZ);
                        case "Q":
                            var hs_sat26DrD0 = new $hs.Data(1);
                            hs_sat26DrD0.data = ["\x11"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrD0);
                        case "R":
                            var hs_sat26DrD1 = new $hs.Data(1);
                            hs_sat26DrD1.data = ["\x12"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrD1);
                        case "S":
                            var hs_sat26DrD2 = new $hs.Data(1);
                            hs_sat26DrD2.data = ["\x13"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrD2);
                        case "T":
                            var hs_sat26DrD3 = new $hs.Data(1);
                            hs_sat26DrD3.data = ["\x14"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrD3);
                        case "U":
                            var hs_sat26DrD4 = new $hs.Data(1);
                            hs_sat26DrD4.data = ["\x15"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrD4);
                        case "V":
                            var hs_sat26DrD5 = new $hs.Data(1);
                            hs_sat26DrD5.data = ["\x16"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrD5);
                        case "W":
                            var hs_sat26DrD6 = new $hs.Data(1);
                            hs_sat26DrD6.data = ["\x17"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrD6);
                        case "X":
                            var hs_sat26DrD7 = new $hs.Data(1);
                            hs_sat26DrD7.data = ["\x18"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrD7);
                        case "Y":
                            var hs_sat26DrD8 = new $hs.Data(1);
                            hs_sat26DrD8.data = ["\x19"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrD8);
                        case "Z":
                            var hs_sat26DrD9 = new $hs.Data(1);
                            hs_sat26DrD9.data = ["\x1a"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrD9);
                        case "[":
                            var hs_sat26DrDa = new $hs.Data(1);
                            hs_sat26DrDa.data = ["\x1b"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrDa);
                        case "\\":
                            var hs_sat26DrDb = new $hs.Data(1);
                            hs_sat26DrDb.data = ["\x1c"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrDb);
                        case "]":
                            var hs_sat26DrDc = new $hs.Data(1);
                            hs_sat26DrDc.data = ["\x1d"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrDc);
                        case "^":
                            var hs_sat26DrDd = new $hs.Data(1);
                            hs_sat26DrDd.data = ["\x1e"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrDd);
                        case "_":
                            var hs_sat26DrDe = new $hs.Data(1);
                            hs_sat26DrDe.data = ["\x1f"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrDe);
                        default:
                            if ($hs.modules.TextziParserCombinatorsziReadP.hs_pfail.notEvaluated) {
                                return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail.hscall();
                            } else {
                                return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail;
                            }
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_get, hs_sat26DrCG);
                };
                var hs_sat26DrCD = new $hs.Thunk();
                hs_sat26DrCD.evaluateOnce = function () {
                    var hs_sat26DrCF = new $hs.Data(1);
                    hs_sat26DrCF.data = ["^"];
                    return $hs.modules.TextziParserCombinatorsziReadP.hs_char.hscall(hs_sat26DrCF);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCD, hs_sat26DrCE);
            };
            return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DrCB, hs_sat26DrCC);
        };
        var hs_sat26DrCl = new $hs.Thunk();
        hs_sat26DrCl.evaluateOnce = function () {
            var hs_sat26DrCo = new $hs.Func(1);
            hs_sat26DrCo.evaluate = function (hs_base26Drox) {
                var hs_sat26DrCs = new $hs.Func(1);
                hs_sat26DrCs.evaluate = function (hs_n26DroA) {
                    var hs_sat26DrCu = new $hs.Thunk();
                    hs_sat26DrCu.evaluateOnce = function () {
                        var hs_sat26DrCz = new $hs.Thunk();
                        hs_sat26DrCz.evaluateOnce = function () {
                            var hs_sat26DrCA = new $hs.Thunk();
                            hs_sat26DrCA.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26DroA);
                            };
                            return $hs.modules.GHCziBase.hs_chr.hscall(hs_sat26DrCA);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCz);
                    };
                    var hs_sat26DrCt = new $hs.Thunk();
                    hs_sat26DrCt.evaluateOnce = function () {
                        var hs_sat26DrCv = new $hs.Thunk();
                        hs_sat26DrCv.evaluateOnce = function () {
                            var hs_sat26DrCw = new $hs.Thunk();
                            hs_sat26DrCw.evaluateOnce = function () {
                                var hs_sat26DrCx = new $hs.Thunk();
                                hs_sat26DrCx.evaluateOnce = function () {
                                    var hs_sat26DrCy = new $hs.Thunk();
                                    hs_sat26DrCy.evaluateOnce = function () {
                                        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedChar);
                                    };
                                    return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26DrCy);
                                };
                                return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26DrCx);
                            };
                            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26DroA, hs_sat26DrCw);
                        };
                        return $hs.modules.ControlziMonad.hs_guard.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusReadP, hs_sat26DrCv);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCt, hs_sat26DrCu);
                };
                var hs_sat26DrCr = new $hs.Thunk();
                hs_sat26DrCr.evaluateOnce = function () {
                    return hs_lexInteger25rYEC.hscall(hs_base26Drox);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCr, hs_sat26DrCs);
            };
            var hs_sat26DrCn = new $hs.Thunk();
            hs_sat26DrCn.evaluateOnce = function () {
                var hs_sat26DrCp = new $hs.Thunk();
                hs_sat26DrCp.evaluateOnce = function () {
                    var hs_sat26DrCq = new $hs.Data(1);
                    hs_sat26DrCq.data = [10];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCq);
                };
                return $hs.modules.TextziParserCombinatorsziReadP.hs_zlzpzp.hscall(hs_lexBaseChar25rYEx, hs_sat26DrCp);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrCn, hs_sat26DrCo);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DrCl, hs_sat26DrCm);
    };
    hs_sat26DrGL.evaluateOnce = function () {
        var hs_sat26DrGy = new $hs.Func(1);
        hs_sat26DrGy.evaluate = function (hs_c26Droc) {
            var hs_wild26DrGB = hs_c26Droc;
            if (hs_c26Droc.notEvaluated) {
                hs_wild26DrGB = hs_c26Droc.hscall();
            }
            var hs_ds26Drof = hs_wild26DrGB.data[0];
            var hs_ds126DrGA = hs_ds26Drof;
            if (hs_ds26Drof.notEvaluated) {
                hs_ds126DrGA = hs_ds26Drof.hscall();
            }
            switch (hs_ds126DrGA) {
            case "\"":
                var hs_sat26DrGz = new $hs.Data(1);
                hs_sat26DrGz.data = ["\""];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGz);
            case "'":
                var hs_sat26DrGC = new $hs.Data(1);
                hs_sat26DrGC.data = ["'"];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGC);
            case "\\":
                var hs_sat26DrGD = new $hs.Data(1);
                hs_sat26DrGD.data = ["\\"];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGD);
            case "a":
                var hs_sat26DrGE = new $hs.Data(1);
                hs_sat26DrGE.data = ["\x07"];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGE);
            case "b":
                var hs_sat26DrGF = new $hs.Data(1);
                hs_sat26DrGF.data = ["\b"];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGF);
            case "f":
                var hs_sat26DrGG = new $hs.Data(1);
                hs_sat26DrGG.data = ["\f"];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGG);
            case "n":
                var hs_sat26DrGH = new $hs.Data(1);
                hs_sat26DrGH.data = ["\n"];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGH);
            case "r":
                var hs_sat26DrGI = new $hs.Data(1);
                hs_sat26DrGI.data = ["\r"];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGI);
            case "t":
                var hs_sat26DrGJ = new $hs.Data(1);
                hs_sat26DrGJ.data = ["\t"];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGJ);
            case "v":
                var hs_sat26DrGK = new $hs.Data(1);
                hs_sat26DrGK.data = ["\v"];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGK);
            default:
                if ($hs.modules.TextziParserCombinatorsziReadP.hs_pfail.notEvaluated) {
                    return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail.hscall();
                } else {
                    return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail;
                }
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_get, hs_sat26DrGy);
    };
    hs_lexEsc25v2RU.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DrGL, hs_sat26DrGx);
    };
    hs_sat26DrGR.evaluate = function (hs_c126DrsR) {
        var hs_sat26DrGN = new $hs.Data(1);
        hs_sat26DrGN.data = ["\\"];
        var hs_wild26DrGO = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c126DrsR, hs_sat26DrGN);
        switch (hs_wild26DrGO.tag) {
        case 1:
            var hs_sat26DrGQ = new $hs.Data(1);
            hs_sat26DrGQ.data = [hs_c126DrsR, $hs.modules.GHCziTypes.hs_False];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGQ);
        case 2:
            var hs_sat26DrGM = new $hs.Func(1);
            hs_sat26DrGM.evaluate = function (hs_c226DrsW) {
                var hs_sat26DrGP = new $hs.Data(1);
                hs_sat26DrGP.data = [hs_c226DrsW, $hs.modules.GHCziTypes.hs_True];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGP);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_lexEsc25v2RU, hs_sat26DrGM);
        }
    };
    hs_lexCharE25rYEt.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_get, hs_sat26DrGR);
    };
    hs_sat26DrGU.evaluate = function (hs_ds26Drt1) {
        var hs_wild26DrGT = hs_ds26Drt1;
        if (hs_ds26Drt1.notEvaluated) {
            hs_wild26DrGT = hs_ds26Drt1.hscall();
        }
        var hs_c26Drt5 = hs_wild26DrGT.data[0];
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_c26Drt5);
    };
    this.hs_lexChar.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_lexCharE25rYEt, hs_sat26DrGU);
    };
    hs_sat26DrH1.evaluate = function (hs_c26Drth) {
        var hs_sat26DrGW = new $hs.Func(1);
        hs_sat26DrGW.evaluate = function (hs_n26Drtk) {
            var hs_sat26DrGY = new $hs.Thunk();
            hs_sat26DrGY.evaluateOnce = function () {
                var hs_sat26DrGZ = new $hs.Data(1);
                hs_sat26DrGZ.data = ["-"];
                var hs_wild26DrH0 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26Drth, hs_sat26DrGZ);
                switch (hs_wild26DrH0.tag) {
                case 1:
                    if (hs_n26Drtk.notEvaluated) {
                        return hs_n26Drtk.hscall();
                    } else {
                        return hs_n26Drtk;
                    }
                case 2:
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_n26Drtk);
                }
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGY);
        };
        var hs_sat26DrGV = new $hs.Thunk();
        hs_sat26DrGV.evaluateOnce = function () {
            var hs_sat26DrGX = new $hs.Data(1);
            hs_sat26DrGX.data = [10];
            return hs_lexInteger25rYEC.hscall(hs_sat26DrGX);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrGV, hs_sat26DrGW);
    };
    hs_sat26DrH6.evaluateOnce = function () {
        var hs_sat26DrH3 = new $hs.Thunk();
        hs_sat26DrH3.evaluateOnce = function () {
            var hs_sat26DrH5 = new $hs.Data(1);
            hs_sat26DrH5.data = ["+"];
            return $hs.modules.TextziParserCombinatorsziReadP.hs_char.hscall(hs_sat26DrH5);
        };
        var hs_sat26DrH2 = new $hs.Thunk();
        hs_sat26DrH2.evaluateOnce = function () {
            var hs_sat26DrH4 = new $hs.Data(1);
            hs_sat26DrH4.data = ["-"];
            return $hs.modules.TextziParserCombinatorsziReadP.hs_char.hscall(hs_sat26DrH4);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DrH2, hs_sat26DrH3);
    };
    hs_signedExp25v2WR.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrH6, hs_sat26DrH1);
    };
    hs_sat26DrHc.evaluate = function (hs_ds26DrtB) {
        var hs_sat26DrH8 = new $hs.Func(1);
        hs_sat26DrH8.evaluate = function (hs_exp26Drty) {
            var hs_sat26DrHb = new $hs.Data(2);
            hs_sat26DrHb.data = [hs_exp26Drty];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrHb);
        };
        var hs_sat26DrH7 = new $hs.Thunk();
        hs_sat26DrH7.evaluateOnce = function () {
            var hs_sat26DrH9 = new $hs.Thunk();
            hs_sat26DrH9.evaluateOnce = function () {
                var hs_sat26DrHa = new $hs.Data(1);
                hs_sat26DrHa.data = [10];
                return hs_lexInteger25rYEC.hscall(hs_sat26DrHa);
            };
            return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_signedExp25v2WR, hs_sat26DrH9);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrH7, hs_sat26DrH8);
    };
    hs_sat26DrHh.evaluateOnce = function () {
        var hs_sat26DrHe = new $hs.Thunk();
        hs_sat26DrHe.evaluateOnce = function () {
            var hs_sat26DrHg = new $hs.Data(1);
            hs_sat26DrHg.data = ["E"];
            return $hs.modules.TextziParserCombinatorsziReadP.hs_char.hscall(hs_sat26DrHg);
        };
        var hs_sat26DrHd = new $hs.Thunk();
        hs_sat26DrHd.evaluateOnce = function () {
            var hs_sat26DrHf = new $hs.Data(1);
            hs_sat26DrHf.data = ["e"];
            return $hs.modules.TextziParserCombinatorsziReadP.hs_char.hscall(hs_sat26DrHf);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DrHd, hs_sat26DrHe);
    };
    hs_lexExp25rYEA.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrHh, hs_sat26DrHc);
    };
    hs_sat26DrJn.evaluateOnce = function () {
        var hs_sat26DrHj = new $hs.Thunk();
        hs_sat26DrHj.evaluateOnce = function () {
            var hs_sat26DrHz = new $hs.Thunk();
            hs_sat26DrHz.evaluateOnce = function () {
                var hs_sat26DrHZ = new $hs.Thunk();
                hs_sat26DrHZ.evaluateOnce = function () {
                    var hs_sat26DrI7 = new $hs.Thunk();
                    hs_sat26DrI7.evaluateOnce = function () {
                        var hs_sat26DrIg = new $hs.Thunk();
                        hs_sat26DrIg.evaluateOnce = function () {
                            var hs_sat26DrIH = new $hs.Thunk();
                            hs_sat26DrIH.evaluateOnce = function () {
                                var hs_valExp26Drx6 = new $hs.Func(2);
                                hs_valExp26Drx6.evaluate = function (hs_rat26Drx1, hs_exp26Drx4) {
                                    var hs_sat26DrJk = new $hs.Thunk();
                                    hs_sat26DrJk.evaluateOnce = function () {
                                        var hs_sat26DrJl = new $hs.Thunk();
                                        hs_sat26DrJl.evaluateOnce = function () {
                                            var hs_sat26DrJm = new $hs.Thunk();
                                            hs_sat26DrJm.evaluateOnce = function () {
                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(10);
                                            };
                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum25v2PV, hs_sat26DrJm);
                                        };
                                        return $hs.modules.GHCziReal.hs_zczc.hscall(hs_zddFractional25v2PW, $hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DrJl, hs_exp26Drx4);
                                    };
                                    return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum25v2PV, hs_rat26Drx1, hs_sat26DrJk);
                                };
                                var hs_sat26DrIT = new $hs.Func(1);
                                hs_sat26DrIT.evaluate = function (hs_xs26Drxj) {
                                    var hs_sat26DrIW = new $hs.Func(1);
                                    hs_sat26DrIW.evaluate = function (hs_mFrac26Drxl) {
                                        var hs_sat26DrIZ = new $hs.Func(1);
                                        hs_sat26DrIZ.evaluate = function (hs_mExp26Drxn) {
                                            var hs_sat26DrJ1 = new $hs.Thunk();
                                            hs_sat26DrJ1.evaluateOnce = function () {
                                                var hs_a26Drxk = new $hs.Thunk();
                                                hs_a26Drxk.evaluateOnce = function () {
                                                    var hs_sat26DrJj = new $hs.Thunk();
                                                    hs_sat26DrJj.evaluateOnce = function () {
                                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                                    };
                                                    var hs_sat26DrJi = new $hs.Thunk();
                                                    hs_sat26DrJi.evaluateOnce = function () {
                                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(10);
                                                    };
                                                    return hs_val25rYED.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DrJi, hs_sat26DrJj, hs_xs26Drxj);
                                                };
                                                var hs_wild26DrJ4 = hs_mFrac26Drxl;
                                                if (hs_mFrac26Drxl.notEvaluated) {
                                                    hs_wild26DrJ4 = hs_mFrac26Drxl.hscall();
                                                }
                                                switch (hs_wild26DrJ4.tag) {
                                                case 1:
                                                    var hs_wild126DrJb = hs_mExp26Drxn;
                                                    if (hs_mExp26Drxn.notEvaluated) {
                                                        hs_wild126DrJb = hs_mExp26Drxn.hscall();
                                                    }
                                                    switch (hs_wild126DrJb.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(6);
                                                        $res.data = [hs_a26Drxk];
                                                        return $res;
                                                    case 2:
                                                        var hs_exp26Drxq = hs_wild126DrJb.data[0];
                                                        var hs_sat26DrJc = new $hs.Thunk();
                                                        hs_sat26DrJc.evaluateOnce = function () {
                                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                                        };
                                                        var hs_wild226DrJd = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_exp26Drxq, hs_sat26DrJc);
                                                        switch (hs_wild226DrJd.tag) {
                                                        case 1:
                                                            var hs_sat26DrJg = new $hs.Thunk();
                                                            hs_sat26DrJg.evaluateOnce = function () {
                                                                var hs_sat26DrJh = new $hs.Thunk();
                                                                hs_sat26DrJh.evaluateOnce = function () {
                                                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum25v2PV, hs_a26Drxk);
                                                                };
                                                                return hs_valExp26Drx6.hscall(hs_sat26DrJh, hs_exp26Drxq);
                                                            };
                                                            var $res = new $hs.Data(7);
                                                            $res.data = [hs_sat26DrJg];
                                                            return $res;
                                                        case 2:
                                                            var hs_sat26DrJa = new $hs.Thunk();
                                                            hs_sat26DrJa.evaluateOnce = function () {
                                                                var hs_sat26DrJe = new $hs.Thunk();
                                                                hs_sat26DrJe.evaluateOnce = function () {
                                                                    var hs_sat26DrJf = new $hs.Thunk();
                                                                    hs_sat26DrJf.evaluateOnce = function () {
                                                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(10);
                                                                    };
                                                                    return $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, $hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DrJf, hs_exp26Drxq);
                                                                };
                                                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_a26Drxk, hs_sat26DrJe);
                                                            };
                                                            var $res = new $hs.Data(6);
                                                            $res.data = [hs_sat26DrJa];
                                                            return $res;
                                                        }
                                                    }
                                                case 2:
                                                    var hs_fs26DrxE = hs_wild26DrJ4.data[0];
                                                    var hs_rat26DrxG = new $hs.Thunk();
                                                    hs_rat26DrxG.evaluateOnce = function () {
                                                        var hs_sat26DrJ6 = new $hs.Thunk();
                                                        hs_sat26DrJ6.evaluateOnce = function () {
                                                            var hs_sat26DrJ8 = new $hs.Thunk();
                                                            hs_sat26DrJ8.evaluateOnce = function () {
                                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                                            };
                                                            var hs_sat26DrJ9 = new $hs.Thunk();
                                                            hs_sat26DrJ9.evaluateOnce = function () {
                                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                                            };
                                                            var hs_sat26DrJ7 = new $hs.Thunk();
                                                            hs_sat26DrJ7.evaluateOnce = function () {
                                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(10);
                                                            };
                                                            return hs_frac25rYEE.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DrJ7, hs_sat26DrJ9, hs_sat26DrJ8, hs_fs26DrxE);
                                                        };
                                                        var hs_sat26DrJ5 = new $hs.Thunk();
                                                        hs_sat26DrJ5.evaluateOnce = function () {
                                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum25v2PV, hs_a26Drxk);
                                                        };
                                                        return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum25v2PV, hs_sat26DrJ5, hs_sat26DrJ6);
                                                    };
                                                    var hs_wild126DrJ3 = hs_mExp26Drxn;
                                                    if (hs_mExp26Drxn.notEvaluated) {
                                                        hs_wild126DrJ3 = hs_mExp26Drxn.hscall();
                                                    }
                                                    switch (hs_wild126DrJ3.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(7);
                                                        $res.data = [hs_rat26DrxG];
                                                        return $res;
                                                    case 2:
                                                        var hs_exp26DrxJ = hs_wild126DrJ3.data[0];
                                                        var hs_sat26DrJ2 = new $hs.Thunk();
                                                        hs_sat26DrJ2.evaluateOnce = function () {
                                                            return hs_valExp26Drx6.hscall(hs_rat26DrxG, hs_exp26DrxJ);
                                                        };
                                                        var $res = new $hs.Data(7);
                                                        $res.data = [hs_sat26DrJ2];
                                                        return $res;
                                                    }
                                                }
                                            };
                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrJ1);
                                        };
                                        var hs_sat26DrIY = new $hs.Thunk();
                                        hs_sat26DrIY.evaluateOnce = function () {
                                            var hs_sat26DrJ0 = new $hs.Thunk();
                                            hs_sat26DrJ0.evaluateOnce = function () {
                                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.DataziMaybe.hs_Nothing);
                                            };
                                            return $hs.modules.TextziParserCombinatorsziReadP.hs_zlzpzp.hscall(hs_lexExp25rYEA, hs_sat26DrJ0);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrIY, hs_sat26DrIZ);
                                    };
                                    var hs_sat26DrIV = new $hs.Thunk();
                                    hs_sat26DrIV.evaluateOnce = function () {
                                        var hs_sat26DrIX = new $hs.Thunk();
                                        hs_sat26DrIX.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.DataziMaybe.hs_Nothing);
                                        };
                                        return $hs.modules.TextziParserCombinatorsziReadP.hs_zlzpzp.hscall(hs_lexFrac25rYEz, hs_sat26DrIX);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrIV, hs_sat26DrIW);
                                };
                                var hs_sat26DrIS = new $hs.Thunk();
                                hs_sat26DrIS.evaluateOnce = function () {
                                    var hs_sat26DrIU = new $hs.Data(1);
                                    hs_sat26DrIU.data = [10];
                                    return hs_lexDigits25rYEB.hscall(hs_sat26DrIU);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrIS, hs_sat26DrIT);
                            };
                            var hs_sat26DrIG = new $hs.Thunk();
                            hs_sat26DrIG.evaluateOnce = function () {
                                var hs_sat26DrIJ = new $hs.Func(1);
                                hs_sat26DrIJ.evaluate = function (hs_ds26DrwV) {
                                    var hs_sat26DrIL = new $hs.Func(1);
                                    hs_sat26DrIL.evaluate = function (hs_base26DrwL) {
                                        var hs_sat26DrIN = new $hs.Func(1);
                                        hs_sat26DrIN.evaluate = function (hs_digits26DrwQ) {
                                            var hs_sat26DrIP = new $hs.Thunk();
                                            hs_sat26DrIP.evaluateOnce = function () {
                                                var hs_sat26DrIR = new $hs.Thunk();
                                                hs_sat26DrIR.evaluateOnce = function () {
                                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                                };
                                                var hs_sat26DrIQ = new $hs.Thunk();
                                                hs_sat26DrIQ.evaluateOnce = function () {
                                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziNum.hs_zdfNumInteger, hs_base26DrwL);
                                                };
                                                return hs_val25rYED.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DrIQ, hs_sat26DrIR, hs_digits26DrwQ);
                                            };
                                            var hs_sat26DrIO = new $hs.Data(6);
                                            hs_sat26DrIO.data = [hs_sat26DrIP];
                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrIO);
                                        };
                                        var hs_sat26DrIM = new $hs.Thunk();
                                        hs_sat26DrIM.evaluateOnce = function () {
                                            return hs_lexDigits25rYEB.hscall(hs_base26DrwL);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrIM, hs_sat26DrIN);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_lexBaseChar25rYEx, hs_sat26DrIL);
                                };
                                var hs_sat26DrII = new $hs.Thunk();
                                hs_sat26DrII.evaluateOnce = function () {
                                    var hs_sat26DrIK = new $hs.Data(1);
                                    hs_sat26DrIK.data = ["0"];
                                    return $hs.modules.TextziParserCombinatorsziReadP.hs_char.hscall(hs_sat26DrIK);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrII, hs_sat26DrIJ);
                            };
                            return $hs.modules.TextziParserCombinatorsziReadP.hs_zlzpzp.hscall(hs_sat26DrIG, hs_sat26DrIH);
                        };
                        var hs_sat26DrIf = new $hs.Thunk();
                        hs_sat26DrIf.evaluateOnce = function () {
                            var hs_isIdfChar26Drwd = new $hs.Func(1);
                            hs_isIdfChar26Drwd.evaluate = function (hs_c26Drw9) {
                                var hs_sat26DrIE = new $hs.Thunk();
                                hs_sat26DrIE.evaluateOnce = function () {
                                    var hs_sat26DrIF = new $hs.Thunk();
                                    hs_sat26DrIF.evaluateOnce = function () {
                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("_'\x00");
                                    };
                                    return $hs.modules.GHCziList.hs_elem.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26Drw9, hs_sat26DrIF);
                                };
                                var hs_sat26DrID = new $hs.Thunk();
                                hs_sat26DrID.evaluateOnce = function () {
                                    return $hs.modules.GHCziUnicode.hs_isAlphaNum.hscall(hs_c26Drw9);
                                };
                                return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DrID, hs_sat26DrIE);
                            };
                            var hs_sat26DrIi = new $hs.Thunk();
                            hs_sat26DrIi.evaluateOnce = function () {
                                var hs_sat26DrIu = new $hs.Func(1);
                                hs_sat26DrIu.evaluate = function (hs_c26Drwz) {
                                    var hs_sat26DrIA = new $hs.Func(1);
                                    hs_sat26DrIA.evaluate = function (hs_s26DrwA) {
                                        var hs_sat26DrIC = new $hs.Data(2);
                                        hs_sat26DrIC.data = [hs_c26Drwz, hs_s26DrwA];
                                        var hs_sat26DrIB = new $hs.Data(4);
                                        hs_sat26DrIB.data = [hs_sat26DrIC];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrIB);
                                    };
                                    var hs_sat26DrIz = new $hs.Thunk();
                                    hs_sat26DrIz.evaluateOnce = function () {
                                        return $hs.modules.TextziParserCombinatorsziReadP.hs_munch.hscall(hs_isIdfChar26Drwd);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrIz, hs_sat26DrIA);
                                };
                                var hs_sat26DrIt = new $hs.Thunk();
                                hs_sat26DrIt.evaluateOnce = function () {
                                    var hs_sat26DrIv = new $hs.Func(1);
                                    hs_sat26DrIv.evaluate = function (hs_c26Drwq) {
                                        var hs_sat26DrIx = new $hs.Thunk();
                                        hs_sat26DrIx.evaluateOnce = function () {
                                            var hs_sat26DrIy = new $hs.Data(1);
                                            hs_sat26DrIy.data = ["_"];
                                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26Drwq, hs_sat26DrIy);
                                        };
                                        var hs_sat26DrIw = new $hs.Thunk();
                                        hs_sat26DrIw.evaluateOnce = function () {
                                            return $hs.modules.GHCziUnicode.hs_isAlpha.hscall(hs_c26Drwq);
                                        };
                                        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DrIw, hs_sat26DrIx);
                                    };
                                    return $hs.modules.TextziParserCombinatorsziReadP.hs_satisfy.hscall(hs_sat26DrIv);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrIt, hs_sat26DrIu);
                            };
                            var hs_sat26DrIh = new $hs.Thunk();
                            hs_sat26DrIh.evaluateOnce = function () {
                                var hs_sat26DrIk = new $hs.Thunk();
                                hs_sat26DrIk.evaluateOnce = function () {
                                    var hs_sat26DrIq = new $hs.Thunk();
                                    hs_sat26DrIq.evaluateOnce = function () {
                                        var hs_sat26DrIs = new $hs.Data(7);
                                        hs_sat26DrIs.data = [$hs.modules.GHCziReal.hs_infinity];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrIs);
                                    };
                                    var hs_sat26DrIp = new $hs.Thunk();
                                    hs_sat26DrIp.evaluateOnce = function () {
                                        var hs_sat26DrIr = new $hs.Thunk();
                                        hs_sat26DrIr.evaluateOnce = function () {
                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Infinity\x00");
                                        };
                                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrIr);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrIp, hs_sat26DrIq);
                                };
                                var hs_sat26DrIj = new $hs.Thunk();
                                hs_sat26DrIj.evaluateOnce = function () {
                                    var hs_sat26DrIm = new $hs.Thunk();
                                    hs_sat26DrIm.evaluateOnce = function () {
                                        var hs_sat26DrIo = new $hs.Data(7);
                                        hs_sat26DrIo.data = [$hs.modules.GHCziReal.hs_notANumber];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrIo);
                                    };
                                    var hs_sat26DrIl = new $hs.Thunk();
                                    hs_sat26DrIl.evaluateOnce = function () {
                                        var hs_sat26DrIn = new $hs.Thunk();
                                        hs_sat26DrIn.evaluateOnce = function () {
                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("NaN\x00");
                                        };
                                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DrIn);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrIl, hs_sat26DrIm);
                                };
                                return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DrIj, hs_sat26DrIk);
                            };
                            return $hs.modules.TextziParserCombinatorsziReadP.hs_zlzpzp.hscall(hs_sat26DrIh, hs_sat26DrIi);
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DrIf, hs_sat26DrIg);
                    };
                    var hs_sat26DrI6 = new $hs.Thunk();
                    hs_sat26DrI6.evaluateOnce = function () {
                        var hs_a26Drv8 = new $hs.Thunk();
                        hs_a26Drv8.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("..\x00");
                        };
                        var hs_a126Drva = new $hs.Thunk();
                        hs_a126Drva.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("::\x00");
                        };
                        var hs_a226Drvc = new $hs.Data(1);
                        hs_a226Drvc.data = ["="];
                        var hs_a326Drve = new $hs.Data(2);
                        hs_a326Drve.data = [hs_a226Drvc, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_a426Drvg = new $hs.Data(1);
                        hs_a426Drvg.data = ["\\"];
                        var hs_a526Drvi = new $hs.Data(2);
                        hs_a526Drvi.data = [hs_a426Drvg, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_a626Drvk = new $hs.Data(1);
                        hs_a626Drvk.data = ["|"];
                        var hs_a726Drvm = new $hs.Data(2);
                        hs_a726Drvm.data = [hs_a626Drvk, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_a826Drvo = new $hs.Thunk();
                        hs_a826Drvo.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("<-\x00");
                        };
                        var hs_a926Drvq = new $hs.Thunk();
                        hs_a926Drvq.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("->\x00");
                        };
                        var hs_a1026Drvs = new $hs.Data(1);
                        hs_a1026Drvs.data = ["@"];
                        var hs_a1126Drvu = new $hs.Data(2);
                        hs_a1126Drvu.data = [hs_a1026Drvs, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_a1226Drvw = new $hs.Data(1);
                        hs_a1226Drvw.data = ["~"];
                        var hs_a1326Drvy = new $hs.Data(2);
                        hs_a1326Drvy.data = [hs_a1226Drvw, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_a1426DrvA = new $hs.Thunk();
                        hs_a1426DrvA.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("=>\x00");
                        };
                        var hs_a1526DrvC = new $hs.Data(2);
                        hs_a1526DrvC.data = [hs_a1426DrvA, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_a1626DrvE = new $hs.Data(2);
                        hs_a1626DrvE.data = [hs_a1326Drvy, hs_a1526DrvC];
                        var hs_a1726DrvG = new $hs.Data(2);
                        hs_a1726DrvG.data = [hs_a1126Drvu, hs_a1626DrvE];
                        var hs_a1826DrvI = new $hs.Data(2);
                        hs_a1826DrvI.data = [hs_a926Drvq, hs_a1726DrvG];
                        var hs_a1926DrvK = new $hs.Data(2);
                        hs_a1926DrvK.data = [hs_a826Drvo, hs_a1826DrvI];
                        var hs_a2026DrvM = new $hs.Data(2);
                        hs_a2026DrvM.data = [hs_a726Drvm, hs_a1926DrvK];
                        var hs_a2126DrvO = new $hs.Data(2);
                        hs_a2126DrvO.data = [hs_a526Drvi, hs_a2026DrvM];
                        var hs_a2226DrvQ = new $hs.Data(2);
                        hs_a2226DrvQ.data = [hs_a326Drve, hs_a2126DrvO];
                        var hs_a2326DrvS = new $hs.Data(2);
                        hs_a2326DrvS.data = [hs_a126Drva, hs_a2226DrvQ];
                        var hs_reservedzuops26DrvU = new $hs.Data(2);
                        hs_reservedzuops26DrvU.data = [hs_a26Drv8, hs_a2326DrvS];
                        var hs_sat26DrI9 = new $hs.Func(1);
                        hs_sat26DrI9.evaluate = function (hs_s26Drw1) {
                            var hs_wild26DrId = $hs.modules.GHCziList.hs_elem.hscall(hs_zddEq125v2NK, hs_s26Drw1, hs_reservedzuops26DrvU);
                            switch (hs_wild26DrId.tag) {
                            case 1:
                                var hs_sat26DrIe = new $hs.Data(5);
                                hs_sat26DrIe.data = [hs_s26Drw1];
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrIe);
                            case 2:
                                var hs_sat26DrIc = new $hs.Data(3);
                                hs_sat26DrIc.data = [hs_s26Drw1];
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrIc);
                            }
                        };
                        var hs_sat26DrI8 = new $hs.Thunk();
                        hs_sat26DrI8.evaluateOnce = function () {
                            var hs_sat26DrIa = new $hs.Func(1);
                            hs_sat26DrIa.evaluate = function (hs_c26DrvW) {
                                var hs_sat26DrIb = new $hs.Thunk();
                                hs_sat26DrIb.evaluateOnce = function () {
                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("!@#$%&*+./<=>?\\^|:-~\x00");
                                };
                                return $hs.modules.GHCziList.hs_elem.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26DrvW, hs_sat26DrIb);
                            };
                            return $hs.modules.TextziParserCombinatorsziReadP.hs_munch1.hscall(hs_sat26DrIa);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrI8, hs_sat26DrI9);
                    };
                    return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DrI6, hs_sat26DrI7);
                };
                var hs_sat26DrHY = new $hs.Thunk();
                hs_sat26DrHY.evaluateOnce = function () {
                    var hs_sat26DrI1 = new $hs.Func(1);
                    hs_sat26DrI1.evaluate = function (hs_c26Drv2) {
                        var hs_sat26DrI5 = new $hs.Data(2);
                        hs_sat26DrI5.data = [hs_c26Drv2, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_sat26DrI4 = new $hs.Data(3);
                        hs_sat26DrI4.data = [hs_sat26DrI5];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrI4);
                    };
                    var hs_sat26DrI0 = new $hs.Thunk();
                    hs_sat26DrI0.evaluateOnce = function () {
                        var hs_sat26DrI2 = new $hs.Func(1);
                        hs_sat26DrI2.evaluate = function (hs_c26DruX) {
                            var hs_sat26DrI3 = new $hs.Thunk();
                            hs_sat26DrI3.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(",;()[]{}`\x00");
                            };
                            return $hs.modules.GHCziList.hs_elem.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26DruX, hs_sat26DrI3);
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_satisfy.hscall(hs_sat26DrI2);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrI0, hs_sat26DrI1);
                };
                return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DrHY, hs_sat26DrHZ);
            };
            var hs_sat26DrHy = new $hs.Thunk();
            hs_sat26DrHy.evaluateOnce = function () {
                var hs_lexStrItem26Druv = new $hs.Thunk();
                hs_lexStrItem26Druv.evaluateOnce = function () {
                    var hs_sat26DrHM = new $hs.Thunk();
                    hs_sat26DrHM.evaluateOnce = function () {
                        var hs_sat26DrHN = new $hs.Thunk();
                        hs_sat26DrHN.evaluateOnce = function () {
                            var hs_sat26DrHP = new $hs.Func(1);
                            hs_sat26DrHP.evaluate = function (hs_ds26Drus) {
                                var hs_sat26DrHR = new $hs.Func(1);
                                hs_sat26DrHR.evaluate = function (hs_c26Drue) {
                                    var hs_wild26Druj = hs_c26Drue;
                                    if (hs_c26Drue.notEvaluated) {
                                        hs_wild26Druj = hs_c26Drue.hscall();
                                    }
                                    var hs_ds126Druh = hs_wild26Druj.data[0];
                                    var hs_ds226DrHS = hs_ds126Druh;
                                    if (hs_ds126Druh.notEvaluated) {
                                        hs_ds226DrHS = hs_ds126Druh.hscall();
                                    }
                                    switch (hs_ds226DrHS) {
                                    case "&":
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziUnit.hs_Z0T);
                                    default:
                                        var hs_wild126DrHU = $hs.modules.GHCziUnicode.hs_isSpace.hscall(hs_wild26Druj);
                                        switch (hs_wild126DrHU.tag) {
                                        case 1:
                                            if ($hs.modules.TextziParserCombinatorsziReadP.hs_pfail.notEvaluated) {
                                                return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail.hscall();
                                            } else {
                                                return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail;
                                            }
                                        case 2:
                                            var hs_sat26DrHT = new $hs.Thunk();
                                            hs_sat26DrHT.evaluateOnce = function () {
                                                var hs_sat26DrHW = new $hs.Func(1);
                                                hs_sat26DrHW.evaluate = function (hs_ds326Druo) {
                                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziUnit.hs_Z0T);
                                                };
                                                var hs_sat26DrHV = new $hs.Thunk();
                                                hs_sat26DrHV.evaluateOnce = function () {
                                                    var hs_sat26DrHX = new $hs.Data(1);
                                                    hs_sat26DrHX.data = ["\\"];
                                                    return $hs.modules.TextziParserCombinatorsziReadP.hs_char.hscall(hs_sat26DrHX);
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrHV, hs_sat26DrHW);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_skipSpaces, hs_sat26DrHT);
                                        }
                                    }
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_get, hs_sat26DrHR);
                            };
                            var hs_sat26DrHO = new $hs.Thunk();
                            hs_sat26DrHO.evaluateOnce = function () {
                                var hs_sat26DrHQ = new $hs.Data(1);
                                hs_sat26DrHQ.data = ["\\"];
                                return $hs.modules.TextziParserCombinatorsziReadP.hs_char.hscall(hs_sat26DrHQ);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrHO, hs_sat26DrHP);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrHN, hs_lexStrItem26Druv);
                    };
                    return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DrHM, hs_lexCharE25rYEt);
                };
                var hs_body26DruN = new $hs.Func(1);
                hs_body26DruN.evaluate = function (hs_f26DruJ) {
                    var hs_sat26DrHD = new $hs.Func(1);
                    hs_sat26DrHD.evaluate = function (hs_ds26DruA) {
                        var hs_wild26DrHF = hs_ds26DruA;
                        if (hs_ds26DruA.notEvaluated) {
                            hs_wild26DrHF = hs_ds26DruA.hscall();
                        }
                        var hs_c26DruE = hs_wild26DrHF.data[0];
                        var hs_esc26DruH = hs_wild26DrHF.data[1];
                        var hs_sat26DrHG = new $hs.Thunk();
                        hs_sat26DrHG.evaluateOnce = function () {
                            var hs_sat26DrHL = new $hs.Data(1);
                            hs_sat26DrHL.data = ["\""];
                            return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26DruE, hs_sat26DrHL);
                        };
                        var hs_wild126DrHH = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DrHG, hs_esc26DruH);
                        switch (hs_wild126DrHH.tag) {
                        case 1:
                            var hs_sat26DrHK = new $hs.Thunk();
                            hs_sat26DrHK.evaluateOnce = function () {
                                return hs_f26DruJ.hscall($hs.modules.GHCziTypes.hs_ZMZN);
                            };
                            var hs_sat26DrHJ = new $hs.Data(2);
                            hs_sat26DrHJ.data = [hs_sat26DrHK];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrHJ);
                        case 2:
                            var hs_sat26DrHE = new $hs.Thunk();
                            hs_sat26DrHE.evaluateOnce = function () {
                                var hs_sat26DrHI = new $hs.Func(1);
                                hs_sat26DrHI.evaluate = function (hs_eta1cW6l3) {
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_c26DruE, hs_eta1cW6l3];
                                    return $res;
                                };
                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_f26DruJ, hs_sat26DrHI);
                            };
                            return hs_body26DruN.hscall(hs_sat26DrHE);
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_lexStrItem26Druv, hs_sat26DrHD);
                };
                var hs_sat26DrHB = new $hs.Func(1);
                hs_sat26DrHB.evaluate = function (hs_ds26DruT) {
                    return hs_body26DruN.hscall($hs.modules.GHCziBase.hs_id);
                };
                var hs_sat26DrHA = new $hs.Thunk();
                hs_sat26DrHA.evaluateOnce = function () {
                    var hs_sat26DrHC = new $hs.Data(1);
                    hs_sat26DrHC.data = ["\""];
                    return $hs.modules.TextziParserCombinatorsziReadP.hs_char.hscall(hs_sat26DrHC);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrHA, hs_sat26DrHB);
            };
            return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DrHy, hs_sat26DrHz);
        };
        var hs_sat26DrHi = new $hs.Thunk();
        hs_sat26DrHi.evaluateOnce = function () {
            var hs_sat26DrHl = new $hs.Func(1);
            hs_sat26DrHl.evaluate = function (hs_ds26Dru6) {
                var hs_sat26DrHn = new $hs.Func(1);
                hs_sat26DrHn.evaluate = function (hs_ds126DrtO) {
                    var hs_wild26DrHp = hs_ds126DrtO;
                    if (hs_ds126DrtO.notEvaluated) {
                        hs_wild26DrHp = hs_ds126DrtO.hscall();
                    }
                    var hs_c26DrtT = hs_wild26DrHp.data[0];
                    var hs_esc26DrtS = hs_wild26DrHp.data[1];
                    var hs_sat26DrHq = new $hs.Thunk();
                    hs_sat26DrHq.evaluateOnce = function () {
                        var hs_sat26DrHv = new $hs.Func(1);
                        hs_sat26DrHv.evaluate = function (hs_ds226Dru2) {
                            var hs_sat26DrHx = new $hs.Data(1);
                            hs_sat26DrHx.data = [hs_c26DrtT];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrHx);
                        };
                        var hs_sat26DrHu = new $hs.Thunk();
                        hs_sat26DrHu.evaluateOnce = function () {
                            var hs_sat26DrHw = new $hs.Data(1);
                            hs_sat26DrHw.data = ["'"];
                            return $hs.modules.TextziParserCombinatorsziReadP.hs_char.hscall(hs_sat26DrHw);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrHu, hs_sat26DrHv);
                    };
                    var hs_sat26DrHo = new $hs.Thunk();
                    hs_sat26DrHo.evaluateOnce = function () {
                        var hs_sat26DrHr = new $hs.Thunk();
                        hs_sat26DrHr.evaluateOnce = function () {
                            var hs_sat26DrHs = new $hs.Thunk();
                            hs_sat26DrHs.evaluateOnce = function () {
                                var hs_sat26DrHt = new $hs.Data(1);
                                hs_sat26DrHt.data = ["'"];
                                return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26DrtT, hs_sat26DrHt);
                            };
                            return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_esc26DrtS, hs_sat26DrHs);
                        };
                        return $hs.modules.ControlziMonad.hs_guard.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusReadP, hs_sat26DrHr);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrHo, hs_sat26DrHq);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_lexCharE25rYEt, hs_sat26DrHn);
            };
            var hs_sat26DrHk = new $hs.Thunk();
            hs_sat26DrHk.evaluateOnce = function () {
                var hs_sat26DrHm = new $hs.Data(1);
                hs_sat26DrHm.data = ["'"];
                return $hs.modules.TextziParserCombinatorsziReadP.hs_char.hscall(hs_sat26DrHm);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrHk, hs_sat26DrHl);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DrHi, hs_sat26DrHj);
    };
    hs_sat26DrJs.evaluateOnce = function () {
        var hs_sat26DrJo = new $hs.Func(1);
        hs_sat26DrJo.evaluate = function (hs_s26DrtE) {
            var hs_sat26DrJq = new $hs.Thunk();
            hs_sat26DrJq.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziReadziLex.hs_EOF);
            };
            var hs_sat26DrJp = new $hs.Thunk();
            hs_sat26DrJp.evaluateOnce = function () {
                var hs_sat26DrJr = new $hs.Thunk();
                hs_sat26DrJr.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_null.hscall(hs_s26DrtE);
                };
                return $hs.modules.ControlziMonad.hs_guard.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusReadP, hs_sat26DrJr);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrJp, hs_sat26DrJq);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_look, hs_sat26DrJo);
    };
    hs_lexToken25rYEm.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DrJs, hs_sat26DrJn);
    };
    this.hs_lex.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_skipSpaces, hs_lexToken25rYEm);
    };
    hs_sat26DrJx.evaluateOnce = function () {
        var hs_sat26DrJu = new $hs.Func(1);
        hs_sat26DrJu.evaluate = function (hs_ds26DrxY) {
            var hs_wild26DrJw = hs_ds26DrxY;
            if (hs_ds26DrxY.notEvaluated) {
                hs_wild26DrJw = hs_ds26DrxY.hscall();
            }
            var hs_s26Dry2 = hs_wild26DrJw.data[0];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_s26Dry2);
        };
        var hs_sat26DrJt = new $hs.Thunk();
        hs_sat26DrJt.evaluateOnce = function () {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_gather.hscall(hs_lexToken25rYEm);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DrJt, hs_sat26DrJu);
    };
    this.hs_hsLex.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_skipSpaces, hs_sat26DrJx);
    };
    hs_readIntPzq25rYEI.evaluate = function (hs_zddNum126Dry7, hs_base26Dry8) {
        var hs_sat26DrJz = new $hs.Func(1);
        hs_sat26DrJz.evaluate = function (hs_c26Dryg) {
            var hs_sat26DrJD = new $hs.Thunk();
            hs_sat26DrJD.evaluateOnce = function () {
                return hs_valDig25rYEF.hscall(hs_zddNum126Dry7, hs_base26Dry8, hs_c26Dryg);
            };
            var hs_sat26DrJC = new $hs.Data(1);
            hs_sat26DrJC.data = [0];
            return $hs.modules.DataziMaybe.hs_maybe.hscall(hs_sat26DrJC, $hs.modules.GHCziBase.hs_id, hs_sat26DrJD);
        };
        var hs_sat26DrJy = new $hs.Func(1);
        hs_sat26DrJy.evaluate = function (hs_c26Dryb) {
            var hs_sat26DrJB = new $hs.Thunk();
            hs_sat26DrJB.evaluateOnce = function () {
                return hs_valDig25rYEF.hscall(hs_zddNum126Dry7, hs_base26Dry8, hs_c26Dryb);
            };
            var hs_sat26DrJA = new $hs.Thunk();
            hs_sat26DrJA.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_const.hscall($hs.modules.GHCziTypes.hs_True);
            };
            return $hs.modules.DataziMaybe.hs_maybe.hscall($hs.modules.GHCziTypes.hs_False, hs_sat26DrJA, hs_sat26DrJB);
        };
        return $hs.modules.TextziReadziLex.hs_readIntP.hscall(hs_zddNum126Dry7, hs_base26Dry8, hs_sat26DrJy, hs_sat26DrJz);
    };
    this.hs_readOctP.evaluate = function (hs_zddNum126Dryk) {
        var hs_sat26DrJE = new $hs.Thunk();
        hs_sat26DrJE.evaluateOnce = function () {
            var hs_sat26DrJF = new $hs.Thunk();
            hs_sat26DrJF.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(8);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum126Dryk, hs_sat26DrJF);
        };
        return hs_readIntPzq25rYEI.hscall(hs_zddNum126Dryk, hs_sat26DrJE);
    };
    this.hs_readDecP.evaluate = function (hs_zddNum126Dryo) {
        var hs_sat26DrJG = new $hs.Thunk();
        hs_sat26DrJG.evaluateOnce = function () {
            var hs_sat26DrJH = new $hs.Thunk();
            hs_sat26DrJH.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(10);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum126Dryo, hs_sat26DrJH);
        };
        return hs_readIntPzq25rYEI.hscall(hs_zddNum126Dryo, hs_sat26DrJG);
    };
    this.hs_readHexP.evaluate = function (hs_zddNum126Drys) {
        var hs_sat26DrJI = new $hs.Thunk();
        hs_sat26DrJI.evaluateOnce = function () {
            var hs_sat26DrJJ = new $hs.Thunk();
            hs_sat26DrJJ.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(16);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum126Drys, hs_sat26DrJJ);
        };
        return hs_readIntPzq25rYEI.hscall(hs_zddNum126Drys, hs_sat26DrJI);
    };
    this.hs_Char.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_String.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(2);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_Punc.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(3);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_Ident.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(4);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_Symbol.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(5);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_Int.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(6);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_Rat.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(7);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_EOF.data = [];
};
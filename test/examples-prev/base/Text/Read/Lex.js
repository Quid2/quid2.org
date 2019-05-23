
$hs.modules.TextziReadziLex = new $hs.Module();
$hs.modules.TextziReadziLex.dependencies = ["GHC.Prim", "GHC.Types", "GHC.Bool", "GHC.Unit", "GHC.Integer", "Control.Monad", "Data.Maybe", "GHC.Base", "GHC.Enum", "GHC.Num", "GHC.Real", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.List", "GHC.Unicode", "Text.ParserCombinators.ReadP"];
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
    this.hs_readIntP.evaluate = function (hs_zddNum126DQmo, hs_base26DQmp, hs_isDigit26DQml, hs_valDigit26DQms) {
        $hs.modules.TextziReadziLex.loadDependencies();
        return this.evaluate(hs_zddNum126DQmo, hs_base26DQmp, hs_isDigit26DQml, hs_valDigit26DQms);
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
    this.hs_readOctP.evaluate = function (hs_zddNum126DQBj) {
        $hs.modules.TextziReadziLex.loadDependencies();
        return this.evaluate(hs_zddNum126DQBj);
    };
    this.hs_readDecP.notEvaluated = true;
    this.hs_readDecP.evaluate = function (hs_zddNum126DQBn) {
        $hs.modules.TextziReadziLex.loadDependencies();
        return this.evaluate(hs_zddNum126DQBn);
    };
    this.hs_readHexP.notEvaluated = true;
    this.hs_readHexP.evaluate = function (hs_zddNum126DQBr) {
        $hs.modules.TextziReadziLex.loadDependencies();
        return this.evaluate(hs_zddNum126DQBr);
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
    var hs_frac25s3B9 = new $hs.Func(5);
    var hs_val25s3B7 = new $hs.Func(4);
    var hs_zddShow25vrQi = new $hs.Thunk();
    var hs_zddShow125vrQk = new $hs.Thunk();
    var hs_zdcshowsPrec25vrQm = new $hs.Func(2);
    var hs_sat26DQCv = new $hs.Thunk();
    var hs_zdcshowList25vrRv = new $hs.Thunk();
    var hs_zdcshow25vrRx = new $hs.Thunk();
    var hs_zddEq25vrRB = new $hs.Thunk();
    var hs_zddEq125vrRD = new $hs.Thunk();
    var hs_zdczeze25vrRF = new $hs.Func(2);
    var hs_zdczsze25vrSJ = new $hs.Func(2);
    var hs_sat26DQD2 = new $hs.Func(1);
    var hs_lexBaseChar25s3AV = new $hs.Thunk();
    var hs_zddNum25vrT1 = new $hs.Thunk();
    var hs_zddFractional25vrT3 = new $hs.Thunk();
    var hs_valDig25s3Bb = new $hs.Func(3);
    var hs_lexDigits25s3B3 = new $hs.Func(1);
    var hs_sat26DQEk = new $hs.Func(1);
    var hs_sat26DQEm = new $hs.Thunk();
    var hs_lexFrac25s3AZ = new $hs.Thunk();
    var hs_lexInteger25s3B5 = new $hs.Func(1);
    var hs_sat26DQIF = new $hs.Thunk();
    var hs_sat26DQIT = new $hs.Thunk();
    var hs_lexEsc25vrV0 = new $hs.Thunk();
    var hs_sat26DQIZ = new $hs.Func(1);
    var hs_lexCharE25s3AN = new $hs.Thunk();
    var hs_sat26DQJ2 = new $hs.Func(1);
    var hs_sat26DQJ9 = new $hs.Func(1);
    var hs_sat26DQJe = new $hs.Thunk();
    var hs_signedExp25vrZX = new $hs.Thunk();
    var hs_sat26DQJl = new $hs.Func(1);
    var hs_sat26DQJq = new $hs.Thunk();
    var hs_lexExp25s3B1 = new $hs.Thunk();
    var hs_sat26DQLC = new $hs.Thunk();
    var hs_sat26DQLH = new $hs.Thunk();
    var hs_lexToken25s3Az = new $hs.Thunk();
    var hs_sat26DQLM = new $hs.Thunk();
    var hs_readIntPzq25s3Bh = new $hs.Func(2);
    hs_frac25s3B9.evaluate = function (hs_zddIntegral26DQlH, hs_eta26DQlR, hs_eta126DQlN, hs_eta226DQlO, hs_eta326DQlL) {
        var hs_zddReal26DQlI = new $hs.Thunk();
        hs_zddReal26DQlI.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DQlH);
        };
        var hs_zddNum126DQlK = new $hs.Thunk();
        hs_zddNum126DQlK.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal26DQlI);
        };
        var hs_wild26DQBu = hs_eta326DQlL;
        if (hs_eta326DQlL.notEvaluated) {
            hs_wild26DQBu = hs_eta326DQlL.hscall();
        }
        switch (hs_wild26DQBu.tag) {
        case 1:
            return $hs.modules.GHCziReal.hs_zv.hscall(hs_zddIntegral26DQlH, hs_eta126DQlN, hs_eta226DQlO);
        case 2:
            var hs_x26DQlT = hs_wild26DQBu.data[0];
            var hs_xs26DQlZ = hs_wild26DQBu.data[1];
            var hs_sat26DQBv = new $hs.Thunk();
            hs_sat26DQBv.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_zddNum126DQlK, hs_x26DQlT);
            };
            var hs_sat26DQBw = new $hs.Thunk();
            hs_sat26DQBw.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum126DQlK, hs_eta126DQlN, hs_eta26DQlR);
            };
            var hs_azq26DQlX = $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum126DQlK, hs_sat26DQBw, hs_sat26DQBv);
            var hs_bzq26DQlY = $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum126DQlK, hs_eta226DQlO, hs_eta26DQlR);
            return hs_frac25s3B9.hscall(hs_zddIntegral26DQlH, hs_eta26DQlR, hs_azq26DQlX, hs_bzq26DQlY, hs_xs26DQlZ);
        }
    };
    hs_val25s3B7.evaluate = function (hs_zddNum126DQm9, hs_ds26DQma, hs_y26DQm6, hs_ds126DQm4) {
        var hs_wild26DQBx = hs_ds126DQm4;
        if (hs_ds126DQm4.notEvaluated) {
            hs_wild26DQBx = hs_ds126DQm4.hscall();
        }
        switch (hs_wild26DQBx.tag) {
        case 1:
            if (hs_y26DQm6.notEvaluated) {
                return hs_y26DQm6.hscall();
            } else {
                return hs_y26DQm6;
            }
        case 2:
            var hs_x26DQmc = hs_wild26DQBx.data[0];
            var hs_xs26DQmg = hs_wild26DQBx.data[1];
            var hs_sat26DQBy = new $hs.Thunk();
            hs_sat26DQBy.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_zddNum126DQm9, hs_x26DQmc);
            };
            var hs_sat26DQBz = new $hs.Thunk();
            hs_sat26DQBz.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum126DQm9, hs_y26DQm6, hs_ds26DQma);
            };
            var hs_yzq26DQmf = $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum126DQm9, hs_sat26DQBz, hs_sat26DQBy);
            return hs_val25s3B7.hscall(hs_zddNum126DQm9, hs_ds26DQma, hs_yzq26DQmf, hs_xs26DQmg);
        }
    };
    this.hs_readIntP.evaluate = function (hs_zddNum126DQmo, hs_base26DQmp, hs_isDigit26DQml, hs_valDigit26DQms) {
        var hs_sat26DQBE = new $hs.Func(1);
        hs_sat26DQBE.evaluate = function (hs_s26DQmt) {
            var hs_sat26DQBD = new $hs.Thunk();
            hs_sat26DQBD.evaluateOnce = function () {
                var hs_sat26DQBA = new $hs.Thunk();
                hs_sat26DQBA.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_map.hscall(hs_valDigit26DQms, hs_s26DQmt);
                };
                var hs_sat26DQBC = new $hs.Thunk();
                hs_sat26DQBC.evaluateOnce = function () {
                    var hs_sat26DQBB = new $hs.Thunk();
                    hs_sat26DQBB.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum126DQmo, hs_sat26DQBB);
                };
                return hs_val25s3B7.hscall(hs_zddNum126DQmo, hs_base26DQmp, hs_sat26DQBC, hs_sat26DQBA);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQBD);
        };
        var hs_sat26DQBF = new $hs.Thunk();
        hs_sat26DQBF.evaluateOnce = function () {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_munch1.hscall(hs_isDigit26DQml);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQBF, hs_sat26DQBE);
    };
    hs_zddShow25vrQi.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddShow125vrQk.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zdfShowZMZN.hscall($hs.modules.GHCziShow.hs_zdfShowChar);
    };
    hs_zdcshowsPrec25vrQm.evaluate = function (hs_a26DQmI, hs_ds26DQmF) {
        var hs_wild26DQBG = hs_ds26DQmF;
        if (hs_ds26DQmF.notEvaluated) {
            hs_wild26DQBG = hs_ds26DQmF.hscall();
        }
        switch (hs_wild26DQBG.tag) {
        case 1:
            var hs_b126DQmO = hs_wild26DQBG.data[0];
            var hs_sat26DQBL = new $hs.Thunk();
            hs_sat26DQBL.evaluateOnce = function () {
                var hs_sat26DQBI = new $hs.Thunk();
                hs_sat26DQBI.evaluateOnce = function () {
                    var hs_sat26DQBH = new $hs.Data(1);
                    hs_sat26DQBH.data = [11];
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowChar, hs_sat26DQBH, hs_b126DQmO);
                };
                var hs_sat26DQBK = new $hs.Thunk();
                hs_sat26DQBK.evaluateOnce = function () {
                    var hs_sat26DQBJ = new $hs.Thunk();
                    hs_sat26DQBJ.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Char \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DQBJ);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DQBK, hs_sat26DQBI);
            };
            var hs_sat26DQBN = new $hs.Thunk();
            hs_sat26DQBN.evaluateOnce = function () {
                var hs_sat26DQBM = new $hs.Data(1);
                hs_sat26DQBM.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a26DQmI, hs_sat26DQBM);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DQBN, hs_sat26DQBL);
        case 2:
            var hs_b126DQmX = hs_wild26DQBG.data[0];
            var hs_sat26DQBS = new $hs.Thunk();
            hs_sat26DQBS.evaluateOnce = function () {
                var hs_sat26DQBP = new $hs.Thunk();
                hs_sat26DQBP.evaluateOnce = function () {
                    var hs_sat26DQBO = new $hs.Data(1);
                    hs_sat26DQBO.data = [11];
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow125vrQk, hs_sat26DQBO, hs_b126DQmX);
                };
                var hs_sat26DQBR = new $hs.Thunk();
                hs_sat26DQBR.evaluateOnce = function () {
                    var hs_sat26DQBQ = new $hs.Thunk();
                    hs_sat26DQBQ.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("String \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DQBQ);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DQBR, hs_sat26DQBP);
            };
            var hs_sat26DQBU = new $hs.Thunk();
            hs_sat26DQBU.evaluateOnce = function () {
                var hs_sat26DQBT = new $hs.Data(1);
                hs_sat26DQBT.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a26DQmI, hs_sat26DQBT);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DQBU, hs_sat26DQBS);
        case 3:
            var hs_b126DQn6 = hs_wild26DQBG.data[0];
            var hs_sat26DQBZ = new $hs.Thunk();
            hs_sat26DQBZ.evaluateOnce = function () {
                var hs_sat26DQBW = new $hs.Thunk();
                hs_sat26DQBW.evaluateOnce = function () {
                    var hs_sat26DQBV = new $hs.Data(1);
                    hs_sat26DQBV.data = [11];
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow125vrQk, hs_sat26DQBV, hs_b126DQn6);
                };
                var hs_sat26DQBY = new $hs.Thunk();
                hs_sat26DQBY.evaluateOnce = function () {
                    var hs_sat26DQBX = new $hs.Thunk();
                    hs_sat26DQBX.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Punc \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DQBX);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DQBY, hs_sat26DQBW);
            };
            var hs_sat26DQC1 = new $hs.Thunk();
            hs_sat26DQC1.evaluateOnce = function () {
                var hs_sat26DQC0 = new $hs.Data(1);
                hs_sat26DQC0.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a26DQmI, hs_sat26DQC0);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DQC1, hs_sat26DQBZ);
        case 4:
            var hs_b126DQnf = hs_wild26DQBG.data[0];
            var hs_sat26DQC6 = new $hs.Thunk();
            hs_sat26DQC6.evaluateOnce = function () {
                var hs_sat26DQC3 = new $hs.Thunk();
                hs_sat26DQC3.evaluateOnce = function () {
                    var hs_sat26DQC2 = new $hs.Data(1);
                    hs_sat26DQC2.data = [11];
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow125vrQk, hs_sat26DQC2, hs_b126DQnf);
                };
                var hs_sat26DQC5 = new $hs.Thunk();
                hs_sat26DQC5.evaluateOnce = function () {
                    var hs_sat26DQC4 = new $hs.Thunk();
                    hs_sat26DQC4.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Ident \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DQC4);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DQC5, hs_sat26DQC3);
            };
            var hs_sat26DQC8 = new $hs.Thunk();
            hs_sat26DQC8.evaluateOnce = function () {
                var hs_sat26DQC7 = new $hs.Data(1);
                hs_sat26DQC7.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a26DQmI, hs_sat26DQC7);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DQC8, hs_sat26DQC6);
        case 5:
            var hs_b126DQno = hs_wild26DQBG.data[0];
            var hs_sat26DQCd = new $hs.Thunk();
            hs_sat26DQCd.evaluateOnce = function () {
                var hs_sat26DQCa = new $hs.Thunk();
                hs_sat26DQCa.evaluateOnce = function () {
                    var hs_sat26DQC9 = new $hs.Data(1);
                    hs_sat26DQC9.data = [11];
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow125vrQk, hs_sat26DQC9, hs_b126DQno);
                };
                var hs_sat26DQCc = new $hs.Thunk();
                hs_sat26DQCc.evaluateOnce = function () {
                    var hs_sat26DQCb = new $hs.Thunk();
                    hs_sat26DQCb.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Symbol \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DQCb);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DQCc, hs_sat26DQCa);
            };
            var hs_sat26DQCf = new $hs.Thunk();
            hs_sat26DQCf.evaluateOnce = function () {
                var hs_sat26DQCe = new $hs.Data(1);
                hs_sat26DQCe.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a26DQmI, hs_sat26DQCe);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DQCf, hs_sat26DQCd);
        case 6:
            var hs_b126DQnx = hs_wild26DQBG.data[0];
            var hs_sat26DQCk = new $hs.Thunk();
            hs_sat26DQCk.evaluateOnce = function () {
                var hs_sat26DQCh = new $hs.Thunk();
                hs_sat26DQCh.evaluateOnce = function () {
                    var hs_sat26DQCg = new $hs.Data(1);
                    hs_sat26DQCg.data = [11];
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziNum.hs_zdfShowInteger, hs_sat26DQCg, hs_b126DQnx);
                };
                var hs_sat26DQCj = new $hs.Thunk();
                hs_sat26DQCj.evaluateOnce = function () {
                    var hs_sat26DQCi = new $hs.Thunk();
                    hs_sat26DQCi.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Int \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DQCi);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DQCj, hs_sat26DQCh);
            };
            var hs_sat26DQCm = new $hs.Thunk();
            hs_sat26DQCm.evaluateOnce = function () {
                var hs_sat26DQCl = new $hs.Data(1);
                hs_sat26DQCl.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a26DQmI, hs_sat26DQCl);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DQCm, hs_sat26DQCk);
        case 7:
            var hs_b126DQnG = hs_wild26DQBG.data[0];
            var hs_sat26DQCr = new $hs.Thunk();
            hs_sat26DQCr.evaluateOnce = function () {
                var hs_sat26DQCo = new $hs.Thunk();
                hs_sat26DQCo.evaluateOnce = function () {
                    var hs_sat26DQCn = new $hs.Data(1);
                    hs_sat26DQCn.data = [11];
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow25vrQi, hs_sat26DQCn, hs_b126DQnG);
                };
                var hs_sat26DQCq = new $hs.Thunk();
                hs_sat26DQCq.evaluateOnce = function () {
                    var hs_sat26DQCp = new $hs.Thunk();
                    hs_sat26DQCp.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Rat \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DQCp);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DQCq, hs_sat26DQCo);
            };
            var hs_sat26DQCt = new $hs.Thunk();
            hs_sat26DQCt.evaluateOnce = function () {
                var hs_sat26DQCs = new $hs.Data(1);
                hs_sat26DQCs.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a26DQmI, hs_sat26DQCs);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DQCt, hs_sat26DQCr);
        case 8:
            var hs_sat26DQCu = new $hs.Thunk();
            hs_sat26DQCu.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("EOF\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DQCu);
        }
    };
    hs_sat26DQCv.evaluateOnce = function () {
        var hs_sat26DQCw = new $hs.Data(1);
        hs_sat26DQCw.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.TextziReadziLex.hs_zdfShowLexeme, hs_sat26DQCw);
    };
    this.hs_zdfShowLexeme.data = [hs_zdcshowsPrec25vrQm, hs_zdcshow25vrRx, hs_zdcshowList25vrRv];
    hs_zdcshowList25vrRv.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DQCv);
    };
    hs_zdcshow25vrRx.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.TextziReadziLex.hs_zdfShowLexeme);
    };
    hs_zddEq25vrRB.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddEq125vrRD.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdfEqZMZN.hscall($hs.modules.GHCziClasses.hs_zdfEqChar);
    };
    hs_zdczeze25vrRF.evaluate = function (hs_ds26DQod, hs_ds126DQo2) {
        var hs_fail26DQon = new $hs.Func(1);
        hs_fail26DQon.evaluate = function (hs_ds226DQom) {
            var hs_zdj26DQoc = new $hs.Func(1);
            hs_zdj26DQoc.evaluate = function (hs_azh26DQo5) {
                var hs_wild26DQCy = hs_ds126DQo2;
                if (hs_ds126DQo2.notEvaluated) {
                    hs_wild26DQCy = hs_ds126DQo2.hscall();
                }
                switch (hs_wild26DQCy.tag) {
                case 1:
                    return hs_azh26DQo5 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                case 2:
                    return hs_azh26DQo5 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                case 3:
                    return hs_azh26DQo5 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                case 4:
                    return hs_azh26DQo5 == 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                case 5:
                    return hs_azh26DQo5 == 4 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                case 6:
                    return hs_azh26DQo5 == 5 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                case 7:
                    return hs_azh26DQo5 == 6 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                case 8:
                    return hs_azh26DQo5 == 7 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                }
            };
            var hs_wild26DQCG = hs_ds26DQod;
            if (hs_ds26DQod.notEvaluated) {
                hs_wild26DQCG = hs_ds26DQod.hscall();
            }
            switch (hs_wild26DQCG.tag) {
            case 1:
                return hs_zdj26DQoc.hscall(0);
            case 2:
                return hs_zdj26DQoc.hscall(1);
            case 3:
                return hs_zdj26DQoc.hscall(2);
            case 4:
                return hs_zdj26DQoc.hscall(3);
            case 5:
                return hs_zdj26DQoc.hscall(4);
            case 6:
                return hs_zdj26DQoc.hscall(5);
            case 7:
                return hs_zdj26DQoc.hscall(6);
            case 8:
                return hs_zdj26DQoc.hscall(7);
            }
        };
        var hs_wild26DQCO = hs_ds26DQod;
        if (hs_ds26DQod.notEvaluated) {
            hs_wild26DQCO = hs_ds26DQod.hscall();
        }
        switch (hs_wild26DQCO.tag) {
        case 1:
            var hs_a126DQos = hs_wild26DQCO.data[0];
            var hs_wild126DQCN = hs_ds126DQo2;
            if (hs_ds126DQo2.notEvaluated) {
                hs_wild126DQCN = hs_ds126DQo2.hscall();
            }
            switch (hs_wild126DQCN.tag) {
            case 1:
                var hs_b126DQot = hs_wild126DQCN.data[0];
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_a126DQos, hs_b126DQot);
            default:
                return hs_fail26DQon.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        case 2:
            var hs_a126DQox = hs_wild26DQCO.data[0];
            var hs_wild126DQCP = hs_ds126DQo2;
            if (hs_ds126DQo2.notEvaluated) {
                hs_wild126DQCP = hs_ds126DQo2.hscall();
            }
            switch (hs_wild126DQCP.tag) {
            case 2:
                var hs_b126DQoy = hs_wild126DQCP.data[0];
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq125vrRD, hs_a126DQox, hs_b126DQoy);
            default:
                return hs_fail26DQon.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        case 3:
            var hs_a126DQoC = hs_wild26DQCO.data[0];
            var hs_wild126DQCQ = hs_ds126DQo2;
            if (hs_ds126DQo2.notEvaluated) {
                hs_wild126DQCQ = hs_ds126DQo2.hscall();
            }
            switch (hs_wild126DQCQ.tag) {
            case 3:
                var hs_b126DQoD = hs_wild126DQCQ.data[0];
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq125vrRD, hs_a126DQoC, hs_b126DQoD);
            default:
                return hs_fail26DQon.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        case 4:
            var hs_a126DQoH = hs_wild26DQCO.data[0];
            var hs_wild126DQCR = hs_ds126DQo2;
            if (hs_ds126DQo2.notEvaluated) {
                hs_wild126DQCR = hs_ds126DQo2.hscall();
            }
            switch (hs_wild126DQCR.tag) {
            case 4:
                var hs_b126DQoI = hs_wild126DQCR.data[0];
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq125vrRD, hs_a126DQoH, hs_b126DQoI);
            default:
                return hs_fail26DQon.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        case 5:
            var hs_a126DQoM = hs_wild26DQCO.data[0];
            var hs_wild126DQCS = hs_ds126DQo2;
            if (hs_ds126DQo2.notEvaluated) {
                hs_wild126DQCS = hs_ds126DQo2.hscall();
            }
            switch (hs_wild126DQCS.tag) {
            case 5:
                var hs_b126DQoN = hs_wild126DQCS.data[0];
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq125vrRD, hs_a126DQoM, hs_b126DQoN);
            default:
                return hs_fail26DQon.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        case 6:
            var hs_a126DQoR = hs_wild26DQCO.data[0];
            var hs_wild126DQCT = hs_ds126DQo2;
            if (hs_ds126DQo2.notEvaluated) {
                hs_wild126DQCT = hs_ds126DQo2.hscall();
            }
            switch (hs_wild126DQCT.tag) {
            case 6:
                var hs_b126DQoS = hs_wild126DQCT.data[0];
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_a126DQoR, hs_b126DQoS);
            default:
                return hs_fail26DQon.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        case 7:
            var hs_a126DQoW = hs_wild26DQCO.data[0];
            var hs_wild126DQCU = hs_ds126DQo2;
            if (hs_ds126DQo2.notEvaluated) {
                hs_wild126DQCU = hs_ds126DQo2.hscall();
            }
            switch (hs_wild126DQCU.tag) {
            case 7:
                var hs_b126DQoX = hs_wild126DQCU.data[0];
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq25vrRB, hs_a126DQoW, hs_b126DQoX);
            default:
                return hs_fail26DQon.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        case 8:
            return hs_fail26DQon.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
        }
    };
    this.hs_zdfEqLexeme.data = [hs_zdczeze25vrRF, hs_zdczsze25vrSJ];
    hs_zdczsze25vrSJ.evaluate = function (hs_a26DQp2, hs_b26DQp3) {
        var hs_sat26DQCV = new $hs.Thunk();
        hs_sat26DQCV.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.TextziReadziLex.hs_zdfEqLexeme, hs_a26DQp2, hs_b26DQp3);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DQCV);
    };
    hs_sat26DQD2.evaluate = function (hs_c26DQp6) {
        var hs_wild26DQCX = hs_c26DQp6;
        if (hs_c26DQp6.notEvaluated) {
            hs_wild26DQCX = hs_c26DQp6.hscall();
        }
        var hs_ds26DQp9 = hs_wild26DQCX.data[0];
        var hs_ds126DQCW = hs_ds26DQp9;
        if (hs_ds26DQp9.notEvaluated) {
            hs_ds126DQCW = hs_ds26DQp9.hscall();
        }
        switch (hs_ds126DQCW) {
        case "O":
            var hs_sat26DQCY = new $hs.Data(1);
            hs_sat26DQCY.data = [8];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQCY);
        case "X":
            var hs_sat26DQCZ = new $hs.Data(1);
            hs_sat26DQCZ.data = [16];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQCZ);
        case "o":
            var hs_sat26DQD0 = new $hs.Data(1);
            hs_sat26DQD0.data = [8];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQD0);
        case "x":
            var hs_sat26DQD1 = new $hs.Data(1);
            hs_sat26DQD1.data = [16];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQD1);
        default:
            if ($hs.modules.TextziParserCombinatorsziReadP.hs_pfail.notEvaluated) {
                return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail.hscall();
            } else {
                return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail;
            }
        }
    };
    hs_lexBaseChar25s3AV.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_get, hs_sat26DQD2);
    };
    hs_zddNum25vrT1.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall(hs_zddEq25vrRB, hs_zddShow25vrQi, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddFractional25vrT3.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall(hs_zddNum25vrT1, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_valDig25s3Bb.evaluate = function (hs_zddNum126DQpo, hs_eta26DQpq, hs_eta126DQpC) {
        var hs_zddEq226DQpp = new $hs.Thunk();
        hs_zddEq226DQpp.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum126DQpo);
        };
        var hs_sat26DQD5 = new $hs.Thunk();
        hs_sat26DQD5.evaluateOnce = function () {
            var hs_sat26DQD3 = new $hs.Thunk();
            hs_sat26DQD3.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(8);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum126DQpo, hs_sat26DQD3);
        };
        var hs_wild26DQD4 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226DQpp, hs_eta26DQpq, hs_sat26DQD5);
        switch (hs_wild26DQD4.tag) {
        case 1:
            var hs_sat26DQD8 = new $hs.Thunk();
            hs_sat26DQD8.evaluateOnce = function () {
                var hs_sat26DQD6 = new $hs.Thunk();
                hs_sat26DQD6.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(10);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum126DQpo, hs_sat26DQD6);
            };
            var hs_wild126DQD7 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226DQpp, hs_eta26DQpq, hs_sat26DQD8);
            switch (hs_wild126DQD7.tag) {
            case 1:
                var hs_sat26DQDc = new $hs.Thunk();
                hs_sat26DQDc.evaluateOnce = function () {
                    var hs_sat26DQD9 = new $hs.Thunk();
                    hs_sat26DQD9.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(16);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum126DQpo, hs_sat26DQD9);
                };
                var hs_wild226DQDb = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226DQpp, hs_eta26DQpq, hs_sat26DQDc);
                switch (hs_wild226DQDb.tag) {
                case 1:
                    var hs_sat26DQDa = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("valDig: Bad base\x00");
                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DQDa);
                case 2:
                    var hs_sat26DQDe = new $hs.Thunk();
                    hs_sat26DQDe.evaluateOnce = function () {
                        var hs_sat26DQDd = new $hs.Data(1);
                        hs_sat26DQDd.data = ["9"];
                        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_eta126DQpC, hs_sat26DQDd);
                    };
                    var hs_sat26DQDh = new $hs.Thunk();
                    hs_sat26DQDh.evaluateOnce = function () {
                        var hs_sat26DQDf = new $hs.Data(1);
                        hs_sat26DQDf.data = ["0"];
                        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_sat26DQDf, hs_eta126DQpC);
                    };
                    var hs_wild326DQDg = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DQDh, hs_sat26DQDe);
                    switch (hs_wild326DQDg.tag) {
                    case 1:
                        var hs_sat26DQDj = new $hs.Thunk();
                        hs_sat26DQDj.evaluateOnce = function () {
                            var hs_sat26DQDi = new $hs.Data(1);
                            hs_sat26DQDi.data = ["f"];
                            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_eta126DQpC, hs_sat26DQDi);
                        };
                        var hs_sat26DQDm = new $hs.Thunk();
                        hs_sat26DQDm.evaluateOnce = function () {
                            var hs_sat26DQDk = new $hs.Data(1);
                            hs_sat26DQDk.data = ["a"];
                            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_sat26DQDk, hs_eta126DQpC);
                        };
                        var hs_wild426DQDl = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DQDm, hs_sat26DQDj);
                        switch (hs_wild426DQDl.tag) {
                        case 1:
                            var hs_sat26DQDo = new $hs.Thunk();
                            hs_sat26DQDo.evaluateOnce = function () {
                                var hs_sat26DQDn = new $hs.Data(1);
                                hs_sat26DQDn.data = ["F"];
                                return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_eta126DQpC, hs_sat26DQDn);
                            };
                            var hs_sat26DQDr = new $hs.Thunk();
                            hs_sat26DQDr.evaluateOnce = function () {
                                var hs_sat26DQDp = new $hs.Data(1);
                                hs_sat26DQDp.data = ["A"];
                                return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_sat26DQDp, hs_eta126DQpC);
                            };
                            var hs_wild526DQDq = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DQDr, hs_sat26DQDo);
                            switch (hs_wild526DQDq.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_sat26DQDx = new $hs.Thunk();
                                hs_sat26DQDx.evaluateOnce = function () {
                                    var hs_sat26DQDs = new $hs.Data(1);
                                    hs_sat26DQDs.data = [10];
                                    var hs_sat26DQDw = new $hs.Thunk();
                                    hs_sat26DQDw.evaluateOnce = function () {
                                        var hs_sat26DQDu = new $hs.Thunk();
                                        hs_sat26DQDu.evaluateOnce = function () {
                                            var hs_sat26DQDt = new $hs.Data(1);
                                            hs_sat26DQDt.data = ["A"];
                                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26DQDt);
                                        };
                                        var hs_sat26DQDv = new $hs.Thunk();
                                        hs_sat26DQDv.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_eta126DQpC);
                                        };
                                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DQDv, hs_sat26DQDu);
                                    };
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DQDw, hs_sat26DQDs);
                                };
                                var $res = new $hs.Data(2);
                                $res.data = [hs_sat26DQDx];
                                return $res;
                            }
                        case 2:
                            var hs_sat26DQDD = new $hs.Thunk();
                            hs_sat26DQDD.evaluateOnce = function () {
                                var hs_sat26DQDy = new $hs.Data(1);
                                hs_sat26DQDy.data = [10];
                                var hs_sat26DQDC = new $hs.Thunk();
                                hs_sat26DQDC.evaluateOnce = function () {
                                    var hs_sat26DQDA = new $hs.Thunk();
                                    hs_sat26DQDA.evaluateOnce = function () {
                                        var hs_sat26DQDz = new $hs.Data(1);
                                        hs_sat26DQDz.data = ["a"];
                                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26DQDz);
                                    };
                                    var hs_sat26DQDB = new $hs.Thunk();
                                    hs_sat26DQDB.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_eta126DQpC);
                                    };
                                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DQDB, hs_sat26DQDA);
                                };
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DQDC, hs_sat26DQDy);
                            };
                            var $res = new $hs.Data(2);
                            $res.data = [hs_sat26DQDD];
                            return $res;
                        }
                    case 2:
                        var hs_sat26DQDH = new $hs.Thunk();
                        hs_sat26DQDH.evaluateOnce = function () {
                            var hs_sat26DQDF = new $hs.Thunk();
                            hs_sat26DQDF.evaluateOnce = function () {
                                var hs_sat26DQDE = new $hs.Data(1);
                                hs_sat26DQDE.data = ["0"];
                                return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26DQDE);
                            };
                            var hs_sat26DQDG = new $hs.Thunk();
                            hs_sat26DQDG.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_ord.hscall(hs_eta126DQpC);
                            };
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DQDG, hs_sat26DQDF);
                        };
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26DQDH];
                        return $res;
                    }
                }
            case 2:
                var hs_sat26DQDJ = new $hs.Thunk();
                hs_sat26DQDJ.evaluateOnce = function () {
                    var hs_sat26DQDI = new $hs.Data(1);
                    hs_sat26DQDI.data = ["9"];
                    return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_eta126DQpC, hs_sat26DQDI);
                };
                var hs_sat26DQDM = new $hs.Thunk();
                hs_sat26DQDM.evaluateOnce = function () {
                    var hs_sat26DQDK = new $hs.Data(1);
                    hs_sat26DQDK.data = ["0"];
                    return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_sat26DQDK, hs_eta126DQpC);
                };
                var hs_wild226DQDL = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DQDM, hs_sat26DQDJ);
                switch (hs_wild226DQDL.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_sat26DQDQ = new $hs.Thunk();
                    hs_sat26DQDQ.evaluateOnce = function () {
                        var hs_sat26DQDO = new $hs.Thunk();
                        hs_sat26DQDO.evaluateOnce = function () {
                            var hs_sat26DQDN = new $hs.Data(1);
                            hs_sat26DQDN.data = ["0"];
                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26DQDN);
                        };
                        var hs_sat26DQDP = new $hs.Thunk();
                        hs_sat26DQDP.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_eta126DQpC);
                        };
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DQDP, hs_sat26DQDO);
                    };
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26DQDQ];
                    return $res;
                }
            }
        case 2:
            var hs_sat26DQDS = new $hs.Thunk();
            hs_sat26DQDS.evaluateOnce = function () {
                var hs_sat26DQDR = new $hs.Data(1);
                hs_sat26DQDR.data = ["7"];
                return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_eta126DQpC, hs_sat26DQDR);
            };
            var hs_sat26DQDV = new $hs.Thunk();
            hs_sat26DQDV.evaluateOnce = function () {
                var hs_sat26DQDT = new $hs.Data(1);
                hs_sat26DQDT.data = ["0"];
                return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_sat26DQDT, hs_eta126DQpC);
            };
            var hs_wild126DQDU = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DQDV, hs_sat26DQDS);
            switch (hs_wild126DQDU.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_sat26DQDZ = new $hs.Thunk();
                hs_sat26DQDZ.evaluateOnce = function () {
                    var hs_sat26DQDX = new $hs.Thunk();
                    hs_sat26DQDX.evaluateOnce = function () {
                        var hs_sat26DQDW = new $hs.Data(1);
                        hs_sat26DQDW.data = ["0"];
                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26DQDW);
                    };
                    var hs_sat26DQDY = new $hs.Thunk();
                    hs_sat26DQDY.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_eta126DQpC);
                    };
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DQDY, hs_sat26DQDX);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26DQDZ];
                return $res;
            }
        }
    };
    hs_lexDigits25s3B3.evaluate = function (hs_base26DQqz) {
        var hs_scan26DQqI = new $hs.Func(2);
        hs_scan26DQqI.evaluate = function (hs_ds26DQqt, hs_f26DQqv) {
            var hs_wild26DQE0 = hs_ds26DQqt;
            if (hs_ds26DQqt.notEvaluated) {
                hs_wild26DQE0 = hs_ds26DQqt.hscall();
            }
            switch (hs_wild26DQE0.tag) {
            case 1:
                var hs_sat26DQE1 = new $hs.Thunk();
                hs_sat26DQE1.evaluateOnce = function () {
                    return hs_f26DQqv.hscall($hs.modules.GHCziTypes.hs_ZMZN);
                };
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQE1);
            case 2:
                var hs_c26DQqA = hs_wild26DQE0.data[0];
                var hs_cs26DQqF = hs_wild26DQE0.data[1];
                var hs_wild126DQE2 = hs_valDig25s3Bb.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_base26DQqz, hs_c26DQqA);
                switch (hs_wild126DQE2.tag) {
                case 1:
                    var hs_sat26DQE3 = new $hs.Thunk();
                    hs_sat26DQE3.evaluateOnce = function () {
                        return hs_f26DQqv.hscall($hs.modules.GHCziTypes.hs_ZMZN);
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQE3);
                case 2:
                    var hs_n26DQqG = hs_wild126DQE2.data[0];
                    var hs_sat26DQE7 = new $hs.Func(1);
                    hs_sat26DQE7.evaluate = function (hs_ds126DQE4) {
                        var hs_sat26DQE6 = new $hs.Thunk();
                        hs_sat26DQE6.evaluateOnce = function () {
                            var hs_sat26DQE5 = new $hs.Func(1);
                            hs_sat26DQE5.evaluate = function (hs_eta1cW6l3) {
                                var $res = new $hs.Data(2);
                                $res.data = [hs_n26DQqG, hs_eta1cW6l3];
                                return $res;
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_f26DQqv, hs_sat26DQE5);
                        };
                        return hs_scan26DQqI.hscall(hs_cs26DQqF, hs_sat26DQE6);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_get, hs_sat26DQE7);
                }
            }
        };
        var hs_sat26DQEe = new $hs.Func(1);
        hs_sat26DQEe.evaluate = function (hs_s26DQqM) {
            var hs_sat26DQEc = new $hs.Func(1);
            hs_sat26DQEc.evaluate = function (hs_xs26DQqP) {
                var hs_sat26DQE8 = new $hs.Thunk();
                hs_sat26DQE8.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_xs26DQqP);
                };
                var hs_sat26DQEb = new $hs.Thunk();
                hs_sat26DQEb.evaluateOnce = function () {
                    var hs_sat26DQEa = new $hs.Thunk();
                    hs_sat26DQEa.evaluateOnce = function () {
                        var hs_sat26DQE9 = new $hs.Thunk();
                        hs_sat26DQE9.evaluateOnce = function () {
                            return $hs.modules.GHCziList.hs_null.hscall(hs_xs26DQqP);
                        };
                        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DQE9);
                    };
                    return $hs.modules.ControlziMonad.hs_guard.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusReadP, hs_sat26DQEa);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQEb, hs_sat26DQE8);
            };
            var hs_sat26DQEd = new $hs.Thunk();
            hs_sat26DQEd.evaluateOnce = function () {
                return hs_scan26DQqI.hscall(hs_s26DQqM, $hs.modules.GHCziBase.hs_id);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQEd, hs_sat26DQEc);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_look, hs_sat26DQEe);
    };
    hs_sat26DQEk.evaluate = function (hs_ds26DQEf) {
        var hs_sat26DQEh = new $hs.Func(1);
        hs_sat26DQEh.evaluate = function (hs_fraction26DQr2) {
            var hs_sat26DQEg = new $hs.Data(2);
            hs_sat26DQEg.data = [hs_fraction26DQr2];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQEg);
        };
        var hs_sat26DQEj = new $hs.Thunk();
        hs_sat26DQEj.evaluateOnce = function () {
            var hs_sat26DQEi = new $hs.Data(1);
            hs_sat26DQEi.data = [10];
            return hs_lexDigits25s3B3.hscall(hs_sat26DQEi);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQEj, hs_sat26DQEh);
    };
    hs_sat26DQEm.evaluateOnce = function () {
        var hs_sat26DQEl = new $hs.Data(1);
        hs_sat26DQEl.data = ["."];
        return $hs.modules.TextziParserCombinatorsziReadP.hs_char.hscall(hs_sat26DQEl);
    };
    hs_lexFrac25s3AZ.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQEm, hs_sat26DQEk);
    };
    hs_lexInteger25s3B5.evaluate = function (hs_base26DQr7) {
        var hs_sat26DQEq = new $hs.Func(1);
        hs_sat26DQEq.evaluate = function (hs_xs26DQrc) {
            var hs_sat26DQEp = new $hs.Thunk();
            hs_sat26DQEp.evaluateOnce = function () {
                var hs_sat26DQEn = new $hs.Thunk();
                hs_sat26DQEn.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_sat26DQEo = new $hs.Thunk();
                hs_sat26DQEo.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziNum.hs_zdfNumInteger, hs_base26DQr7);
                };
                return hs_val25s3B7.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DQEo, hs_sat26DQEn, hs_xs26DQrc);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQEp);
        };
        var hs_sat26DQEr = new $hs.Thunk();
        hs_sat26DQEr.evaluateOnce = function () {
            return hs_lexDigits25s3B3.hscall(hs_base26DQr7);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQEr, hs_sat26DQEq);
    };
    hs_sat26DQIF.evaluateOnce = function () {
        var hs_sat26DQIp = new $hs.Thunk();
        hs_sat26DQIp.evaluateOnce = function () {
            var hs_sat26DQHN = new $hs.Thunk();
            hs_sat26DQHN.evaluateOnce = function () {
                var hs_sat26DQEw = new $hs.Thunk();
                hs_sat26DQEw.evaluateOnce = function () {
                    var hs_sat26DQEt = new $hs.Thunk();
                    hs_sat26DQEt.evaluateOnce = function () {
                        var hs_sat26DQEs = new $hs.Data(1);
                        hs_sat26DQEs.data = ["\x7f"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQEs);
                    };
                    var hs_sat26DQEv = new $hs.Thunk();
                    hs_sat26DQEv.evaluateOnce = function () {
                        var hs_sat26DQEu = new $hs.Thunk();
                        hs_sat26DQEu.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("DEL\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQEu);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQEv, hs_sat26DQEt);
                };
                var hs_sat26DQEx = new $hs.Data(2);
                hs_sat26DQEx.data = [hs_sat26DQEw, $hs.modules.GHCziTypes.hs_ZMZN];
                var hs_sat26DQEC = new $hs.Thunk();
                hs_sat26DQEC.evaluateOnce = function () {
                    var hs_sat26DQEz = new $hs.Thunk();
                    hs_sat26DQEz.evaluateOnce = function () {
                        var hs_sat26DQEy = new $hs.Data(1);
                        hs_sat26DQEy.data = [" "];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQEy);
                    };
                    var hs_sat26DQEB = new $hs.Thunk();
                    hs_sat26DQEB.evaluateOnce = function () {
                        var hs_sat26DQEA = new $hs.Thunk();
                        hs_sat26DQEA.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("SP\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQEA);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQEB, hs_sat26DQEz);
                };
                var hs_sat26DQED = new $hs.Data(2);
                hs_sat26DQED.data = [hs_sat26DQEC, hs_sat26DQEx];
                var hs_sat26DQEI = new $hs.Thunk();
                hs_sat26DQEI.evaluateOnce = function () {
                    var hs_sat26DQEF = new $hs.Thunk();
                    hs_sat26DQEF.evaluateOnce = function () {
                        var hs_sat26DQEE = new $hs.Data(1);
                        hs_sat26DQEE.data = ["\x1f"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQEE);
                    };
                    var hs_sat26DQEH = new $hs.Thunk();
                    hs_sat26DQEH.evaluateOnce = function () {
                        var hs_sat26DQEG = new $hs.Thunk();
                        hs_sat26DQEG.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("US\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQEG);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQEH, hs_sat26DQEF);
                };
                var hs_sat26DQEJ = new $hs.Data(2);
                hs_sat26DQEJ.data = [hs_sat26DQEI, hs_sat26DQED];
                var hs_sat26DQEO = new $hs.Thunk();
                hs_sat26DQEO.evaluateOnce = function () {
                    var hs_sat26DQEL = new $hs.Thunk();
                    hs_sat26DQEL.evaluateOnce = function () {
                        var hs_sat26DQEK = new $hs.Data(1);
                        hs_sat26DQEK.data = ["\x1e"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQEK);
                    };
                    var hs_sat26DQEN = new $hs.Thunk();
                    hs_sat26DQEN.evaluateOnce = function () {
                        var hs_sat26DQEM = new $hs.Thunk();
                        hs_sat26DQEM.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("RS\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQEM);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQEN, hs_sat26DQEL);
                };
                var hs_sat26DQEP = new $hs.Data(2);
                hs_sat26DQEP.data = [hs_sat26DQEO, hs_sat26DQEJ];
                var hs_sat26DQEU = new $hs.Thunk();
                hs_sat26DQEU.evaluateOnce = function () {
                    var hs_sat26DQER = new $hs.Thunk();
                    hs_sat26DQER.evaluateOnce = function () {
                        var hs_sat26DQEQ = new $hs.Data(1);
                        hs_sat26DQEQ.data = ["\x1d"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQEQ);
                    };
                    var hs_sat26DQET = new $hs.Thunk();
                    hs_sat26DQET.evaluateOnce = function () {
                        var hs_sat26DQES = new $hs.Thunk();
                        hs_sat26DQES.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("GS\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQES);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQET, hs_sat26DQER);
                };
                var hs_sat26DQEV = new $hs.Data(2);
                hs_sat26DQEV.data = [hs_sat26DQEU, hs_sat26DQEP];
                var hs_sat26DQF0 = new $hs.Thunk();
                hs_sat26DQF0.evaluateOnce = function () {
                    var hs_sat26DQEX = new $hs.Thunk();
                    hs_sat26DQEX.evaluateOnce = function () {
                        var hs_sat26DQEW = new $hs.Data(1);
                        hs_sat26DQEW.data = ["\x1c"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQEW);
                    };
                    var hs_sat26DQEZ = new $hs.Thunk();
                    hs_sat26DQEZ.evaluateOnce = function () {
                        var hs_sat26DQEY = new $hs.Thunk();
                        hs_sat26DQEY.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("FS\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQEY);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQEZ, hs_sat26DQEX);
                };
                var hs_sat26DQF1 = new $hs.Data(2);
                hs_sat26DQF1.data = [hs_sat26DQF0, hs_sat26DQEV];
                var hs_sat26DQF6 = new $hs.Thunk();
                hs_sat26DQF6.evaluateOnce = function () {
                    var hs_sat26DQF3 = new $hs.Thunk();
                    hs_sat26DQF3.evaluateOnce = function () {
                        var hs_sat26DQF2 = new $hs.Data(1);
                        hs_sat26DQF2.data = ["\x1b"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQF2);
                    };
                    var hs_sat26DQF5 = new $hs.Thunk();
                    hs_sat26DQF5.evaluateOnce = function () {
                        var hs_sat26DQF4 = new $hs.Thunk();
                        hs_sat26DQF4.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ESC\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQF4);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQF5, hs_sat26DQF3);
                };
                var hs_sat26DQF7 = new $hs.Data(2);
                hs_sat26DQF7.data = [hs_sat26DQF6, hs_sat26DQF1];
                var hs_sat26DQFc = new $hs.Thunk();
                hs_sat26DQFc.evaluateOnce = function () {
                    var hs_sat26DQF9 = new $hs.Thunk();
                    hs_sat26DQF9.evaluateOnce = function () {
                        var hs_sat26DQF8 = new $hs.Data(1);
                        hs_sat26DQF8.data = ["\x1a"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQF8);
                    };
                    var hs_sat26DQFb = new $hs.Thunk();
                    hs_sat26DQFb.evaluateOnce = function () {
                        var hs_sat26DQFa = new $hs.Thunk();
                        hs_sat26DQFa.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("SUB\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQFa);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQFb, hs_sat26DQF9);
                };
                var hs_sat26DQFd = new $hs.Data(2);
                hs_sat26DQFd.data = [hs_sat26DQFc, hs_sat26DQF7];
                var hs_sat26DQFi = new $hs.Thunk();
                hs_sat26DQFi.evaluateOnce = function () {
                    var hs_sat26DQFf = new $hs.Thunk();
                    hs_sat26DQFf.evaluateOnce = function () {
                        var hs_sat26DQFe = new $hs.Data(1);
                        hs_sat26DQFe.data = ["\x19"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQFe);
                    };
                    var hs_sat26DQFh = new $hs.Thunk();
                    hs_sat26DQFh.evaluateOnce = function () {
                        var hs_sat26DQFg = new $hs.Thunk();
                        hs_sat26DQFg.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("EM\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQFg);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQFh, hs_sat26DQFf);
                };
                var hs_sat26DQFj = new $hs.Data(2);
                hs_sat26DQFj.data = [hs_sat26DQFi, hs_sat26DQFd];
                var hs_sat26DQFo = new $hs.Thunk();
                hs_sat26DQFo.evaluateOnce = function () {
                    var hs_sat26DQFl = new $hs.Thunk();
                    hs_sat26DQFl.evaluateOnce = function () {
                        var hs_sat26DQFk = new $hs.Data(1);
                        hs_sat26DQFk.data = ["\x18"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQFk);
                    };
                    var hs_sat26DQFn = new $hs.Thunk();
                    hs_sat26DQFn.evaluateOnce = function () {
                        var hs_sat26DQFm = new $hs.Thunk();
                        hs_sat26DQFm.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CAN\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQFm);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQFn, hs_sat26DQFl);
                };
                var hs_sat26DQFp = new $hs.Data(2);
                hs_sat26DQFp.data = [hs_sat26DQFo, hs_sat26DQFj];
                var hs_sat26DQFu = new $hs.Thunk();
                hs_sat26DQFu.evaluateOnce = function () {
                    var hs_sat26DQFr = new $hs.Thunk();
                    hs_sat26DQFr.evaluateOnce = function () {
                        var hs_sat26DQFq = new $hs.Data(1);
                        hs_sat26DQFq.data = ["\x17"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQFq);
                    };
                    var hs_sat26DQFt = new $hs.Thunk();
                    hs_sat26DQFt.evaluateOnce = function () {
                        var hs_sat26DQFs = new $hs.Thunk();
                        hs_sat26DQFs.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ETB\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQFs);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQFt, hs_sat26DQFr);
                };
                var hs_sat26DQFv = new $hs.Data(2);
                hs_sat26DQFv.data = [hs_sat26DQFu, hs_sat26DQFp];
                var hs_sat26DQFA = new $hs.Thunk();
                hs_sat26DQFA.evaluateOnce = function () {
                    var hs_sat26DQFx = new $hs.Thunk();
                    hs_sat26DQFx.evaluateOnce = function () {
                        var hs_sat26DQFw = new $hs.Data(1);
                        hs_sat26DQFw.data = ["\x16"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQFw);
                    };
                    var hs_sat26DQFz = new $hs.Thunk();
                    hs_sat26DQFz.evaluateOnce = function () {
                        var hs_sat26DQFy = new $hs.Thunk();
                        hs_sat26DQFy.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("SYN\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQFy);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQFz, hs_sat26DQFx);
                };
                var hs_sat26DQFB = new $hs.Data(2);
                hs_sat26DQFB.data = [hs_sat26DQFA, hs_sat26DQFv];
                var hs_sat26DQFG = new $hs.Thunk();
                hs_sat26DQFG.evaluateOnce = function () {
                    var hs_sat26DQFD = new $hs.Thunk();
                    hs_sat26DQFD.evaluateOnce = function () {
                        var hs_sat26DQFC = new $hs.Data(1);
                        hs_sat26DQFC.data = ["\x15"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQFC);
                    };
                    var hs_sat26DQFF = new $hs.Thunk();
                    hs_sat26DQFF.evaluateOnce = function () {
                        var hs_sat26DQFE = new $hs.Thunk();
                        hs_sat26DQFE.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("NAK\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQFE);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQFF, hs_sat26DQFD);
                };
                var hs_sat26DQFH = new $hs.Data(2);
                hs_sat26DQFH.data = [hs_sat26DQFG, hs_sat26DQFB];
                var hs_sat26DQFM = new $hs.Thunk();
                hs_sat26DQFM.evaluateOnce = function () {
                    var hs_sat26DQFJ = new $hs.Thunk();
                    hs_sat26DQFJ.evaluateOnce = function () {
                        var hs_sat26DQFI = new $hs.Data(1);
                        hs_sat26DQFI.data = ["\x14"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQFI);
                    };
                    var hs_sat26DQFL = new $hs.Thunk();
                    hs_sat26DQFL.evaluateOnce = function () {
                        var hs_sat26DQFK = new $hs.Thunk();
                        hs_sat26DQFK.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("DC4\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQFK);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQFL, hs_sat26DQFJ);
                };
                var hs_sat26DQFN = new $hs.Data(2);
                hs_sat26DQFN.data = [hs_sat26DQFM, hs_sat26DQFH];
                var hs_sat26DQFS = new $hs.Thunk();
                hs_sat26DQFS.evaluateOnce = function () {
                    var hs_sat26DQFP = new $hs.Thunk();
                    hs_sat26DQFP.evaluateOnce = function () {
                        var hs_sat26DQFO = new $hs.Data(1);
                        hs_sat26DQFO.data = ["\x13"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQFO);
                    };
                    var hs_sat26DQFR = new $hs.Thunk();
                    hs_sat26DQFR.evaluateOnce = function () {
                        var hs_sat26DQFQ = new $hs.Thunk();
                        hs_sat26DQFQ.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("DC3\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQFQ);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQFR, hs_sat26DQFP);
                };
                var hs_sat26DQFT = new $hs.Data(2);
                hs_sat26DQFT.data = [hs_sat26DQFS, hs_sat26DQFN];
                var hs_sat26DQFY = new $hs.Thunk();
                hs_sat26DQFY.evaluateOnce = function () {
                    var hs_sat26DQFV = new $hs.Thunk();
                    hs_sat26DQFV.evaluateOnce = function () {
                        var hs_sat26DQFU = new $hs.Data(1);
                        hs_sat26DQFU.data = ["\x12"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQFU);
                    };
                    var hs_sat26DQFX = new $hs.Thunk();
                    hs_sat26DQFX.evaluateOnce = function () {
                        var hs_sat26DQFW = new $hs.Thunk();
                        hs_sat26DQFW.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("DC2\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQFW);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQFX, hs_sat26DQFV);
                };
                var hs_sat26DQFZ = new $hs.Data(2);
                hs_sat26DQFZ.data = [hs_sat26DQFY, hs_sat26DQFT];
                var hs_sat26DQG4 = new $hs.Thunk();
                hs_sat26DQG4.evaluateOnce = function () {
                    var hs_sat26DQG1 = new $hs.Thunk();
                    hs_sat26DQG1.evaluateOnce = function () {
                        var hs_sat26DQG0 = new $hs.Data(1);
                        hs_sat26DQG0.data = ["\x11"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQG0);
                    };
                    var hs_sat26DQG3 = new $hs.Thunk();
                    hs_sat26DQG3.evaluateOnce = function () {
                        var hs_sat26DQG2 = new $hs.Thunk();
                        hs_sat26DQG2.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("DC1\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQG2);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQG3, hs_sat26DQG1);
                };
                var hs_sat26DQG5 = new $hs.Data(2);
                hs_sat26DQG5.data = [hs_sat26DQG4, hs_sat26DQFZ];
                var hs_sat26DQGa = new $hs.Thunk();
                hs_sat26DQGa.evaluateOnce = function () {
                    var hs_sat26DQG7 = new $hs.Thunk();
                    hs_sat26DQG7.evaluateOnce = function () {
                        var hs_sat26DQG6 = new $hs.Data(1);
                        hs_sat26DQG6.data = ["\x10"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQG6);
                    };
                    var hs_sat26DQG9 = new $hs.Thunk();
                    hs_sat26DQG9.evaluateOnce = function () {
                        var hs_sat26DQG8 = new $hs.Thunk();
                        hs_sat26DQG8.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("DLE\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQG8);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQG9, hs_sat26DQG7);
                };
                var hs_sat26DQGb = new $hs.Data(2);
                hs_sat26DQGb.data = [hs_sat26DQGa, hs_sat26DQG5];
                var hs_sat26DQGg = new $hs.Thunk();
                hs_sat26DQGg.evaluateOnce = function () {
                    var hs_sat26DQGd = new $hs.Thunk();
                    hs_sat26DQGd.evaluateOnce = function () {
                        var hs_sat26DQGc = new $hs.Data(1);
                        hs_sat26DQGc.data = ["\x0f"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQGc);
                    };
                    var hs_sat26DQGf = new $hs.Thunk();
                    hs_sat26DQGf.evaluateOnce = function () {
                        var hs_sat26DQGe = new $hs.Thunk();
                        hs_sat26DQGe.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("SI\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQGe);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQGf, hs_sat26DQGd);
                };
                var hs_sat26DQGh = new $hs.Data(2);
                hs_sat26DQGh.data = [hs_sat26DQGg, hs_sat26DQGb];
                var hs_sat26DQGm = new $hs.Thunk();
                hs_sat26DQGm.evaluateOnce = function () {
                    var hs_sat26DQGj = new $hs.Thunk();
                    hs_sat26DQGj.evaluateOnce = function () {
                        var hs_sat26DQGi = new $hs.Data(1);
                        hs_sat26DQGi.data = ["\r"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQGi);
                    };
                    var hs_sat26DQGl = new $hs.Thunk();
                    hs_sat26DQGl.evaluateOnce = function () {
                        var hs_sat26DQGk = new $hs.Thunk();
                        hs_sat26DQGk.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CR\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQGk);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQGl, hs_sat26DQGj);
                };
                var hs_sat26DQGn = new $hs.Data(2);
                hs_sat26DQGn.data = [hs_sat26DQGm, hs_sat26DQGh];
                var hs_sat26DQGs = new $hs.Thunk();
                hs_sat26DQGs.evaluateOnce = function () {
                    var hs_sat26DQGp = new $hs.Thunk();
                    hs_sat26DQGp.evaluateOnce = function () {
                        var hs_sat26DQGo = new $hs.Data(1);
                        hs_sat26DQGo.data = ["\f"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQGo);
                    };
                    var hs_sat26DQGr = new $hs.Thunk();
                    hs_sat26DQGr.evaluateOnce = function () {
                        var hs_sat26DQGq = new $hs.Thunk();
                        hs_sat26DQGq.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("FF\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQGq);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQGr, hs_sat26DQGp);
                };
                var hs_sat26DQGt = new $hs.Data(2);
                hs_sat26DQGt.data = [hs_sat26DQGs, hs_sat26DQGn];
                var hs_sat26DQGy = new $hs.Thunk();
                hs_sat26DQGy.evaluateOnce = function () {
                    var hs_sat26DQGv = new $hs.Thunk();
                    hs_sat26DQGv.evaluateOnce = function () {
                        var hs_sat26DQGu = new $hs.Data(1);
                        hs_sat26DQGu.data = ["\v"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQGu);
                    };
                    var hs_sat26DQGx = new $hs.Thunk();
                    hs_sat26DQGx.evaluateOnce = function () {
                        var hs_sat26DQGw = new $hs.Thunk();
                        hs_sat26DQGw.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("VT\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQGw);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQGx, hs_sat26DQGv);
                };
                var hs_sat26DQGz = new $hs.Data(2);
                hs_sat26DQGz.data = [hs_sat26DQGy, hs_sat26DQGt];
                var hs_sat26DQGE = new $hs.Thunk();
                hs_sat26DQGE.evaluateOnce = function () {
                    var hs_sat26DQGB = new $hs.Thunk();
                    hs_sat26DQGB.evaluateOnce = function () {
                        var hs_sat26DQGA = new $hs.Data(1);
                        hs_sat26DQGA.data = ["\n"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQGA);
                    };
                    var hs_sat26DQGD = new $hs.Thunk();
                    hs_sat26DQGD.evaluateOnce = function () {
                        var hs_sat26DQGC = new $hs.Thunk();
                        hs_sat26DQGC.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("LF\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQGC);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQGD, hs_sat26DQGB);
                };
                var hs_sat26DQGF = new $hs.Data(2);
                hs_sat26DQGF.data = [hs_sat26DQGE, hs_sat26DQGz];
                var hs_sat26DQGK = new $hs.Thunk();
                hs_sat26DQGK.evaluateOnce = function () {
                    var hs_sat26DQGH = new $hs.Thunk();
                    hs_sat26DQGH.evaluateOnce = function () {
                        var hs_sat26DQGG = new $hs.Data(1);
                        hs_sat26DQGG.data = ["\t"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQGG);
                    };
                    var hs_sat26DQGJ = new $hs.Thunk();
                    hs_sat26DQGJ.evaluateOnce = function () {
                        var hs_sat26DQGI = new $hs.Thunk();
                        hs_sat26DQGI.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("HT\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQGI);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQGJ, hs_sat26DQGH);
                };
                var hs_sat26DQGL = new $hs.Data(2);
                hs_sat26DQGL.data = [hs_sat26DQGK, hs_sat26DQGF];
                var hs_sat26DQGQ = new $hs.Thunk();
                hs_sat26DQGQ.evaluateOnce = function () {
                    var hs_sat26DQGN = new $hs.Thunk();
                    hs_sat26DQGN.evaluateOnce = function () {
                        var hs_sat26DQGM = new $hs.Data(1);
                        hs_sat26DQGM.data = ["\b"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQGM);
                    };
                    var hs_sat26DQGP = new $hs.Thunk();
                    hs_sat26DQGP.evaluateOnce = function () {
                        var hs_sat26DQGO = new $hs.Thunk();
                        hs_sat26DQGO.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("BS\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQGO);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQGP, hs_sat26DQGN);
                };
                var hs_sat26DQGR = new $hs.Data(2);
                hs_sat26DQGR.data = [hs_sat26DQGQ, hs_sat26DQGL];
                var hs_sat26DQGW = new $hs.Thunk();
                hs_sat26DQGW.evaluateOnce = function () {
                    var hs_sat26DQGT = new $hs.Thunk();
                    hs_sat26DQGT.evaluateOnce = function () {
                        var hs_sat26DQGS = new $hs.Data(1);
                        hs_sat26DQGS.data = ["\x07"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQGS);
                    };
                    var hs_sat26DQGV = new $hs.Thunk();
                    hs_sat26DQGV.evaluateOnce = function () {
                        var hs_sat26DQGU = new $hs.Thunk();
                        hs_sat26DQGU.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("BEL\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQGU);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQGV, hs_sat26DQGT);
                };
                var hs_sat26DQGX = new $hs.Data(2);
                hs_sat26DQGX.data = [hs_sat26DQGW, hs_sat26DQGR];
                var hs_sat26DQH2 = new $hs.Thunk();
                hs_sat26DQH2.evaluateOnce = function () {
                    var hs_sat26DQGZ = new $hs.Thunk();
                    hs_sat26DQGZ.evaluateOnce = function () {
                        var hs_sat26DQGY = new $hs.Data(1);
                        hs_sat26DQGY.data = ["\x06"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQGY);
                    };
                    var hs_sat26DQH1 = new $hs.Thunk();
                    hs_sat26DQH1.evaluateOnce = function () {
                        var hs_sat26DQH0 = new $hs.Thunk();
                        hs_sat26DQH0.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ACK\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQH0);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQH1, hs_sat26DQGZ);
                };
                var hs_sat26DQH3 = new $hs.Data(2);
                hs_sat26DQH3.data = [hs_sat26DQH2, hs_sat26DQGX];
                var hs_sat26DQH8 = new $hs.Thunk();
                hs_sat26DQH8.evaluateOnce = function () {
                    var hs_sat26DQH5 = new $hs.Thunk();
                    hs_sat26DQH5.evaluateOnce = function () {
                        var hs_sat26DQH4 = new $hs.Data(1);
                        hs_sat26DQH4.data = ["\x05"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQH4);
                    };
                    var hs_sat26DQH7 = new $hs.Thunk();
                    hs_sat26DQH7.evaluateOnce = function () {
                        var hs_sat26DQH6 = new $hs.Thunk();
                        hs_sat26DQH6.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ENQ\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQH6);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQH7, hs_sat26DQH5);
                };
                var hs_sat26DQH9 = new $hs.Data(2);
                hs_sat26DQH9.data = [hs_sat26DQH8, hs_sat26DQH3];
                var hs_sat26DQHe = new $hs.Thunk();
                hs_sat26DQHe.evaluateOnce = function () {
                    var hs_sat26DQHb = new $hs.Thunk();
                    hs_sat26DQHb.evaluateOnce = function () {
                        var hs_sat26DQHa = new $hs.Data(1);
                        hs_sat26DQHa.data = ["\x04"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQHa);
                    };
                    var hs_sat26DQHd = new $hs.Thunk();
                    hs_sat26DQHd.evaluateOnce = function () {
                        var hs_sat26DQHc = new $hs.Thunk();
                        hs_sat26DQHc.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("EOT\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQHc);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQHd, hs_sat26DQHb);
                };
                var hs_sat26DQHf = new $hs.Data(2);
                hs_sat26DQHf.data = [hs_sat26DQHe, hs_sat26DQH9];
                var hs_sat26DQHk = new $hs.Thunk();
                hs_sat26DQHk.evaluateOnce = function () {
                    var hs_sat26DQHh = new $hs.Thunk();
                    hs_sat26DQHh.evaluateOnce = function () {
                        var hs_sat26DQHg = new $hs.Data(1);
                        hs_sat26DQHg.data = ["\x03"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQHg);
                    };
                    var hs_sat26DQHj = new $hs.Thunk();
                    hs_sat26DQHj.evaluateOnce = function () {
                        var hs_sat26DQHi = new $hs.Thunk();
                        hs_sat26DQHi.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ETX\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQHi);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQHj, hs_sat26DQHh);
                };
                var hs_sat26DQHl = new $hs.Data(2);
                hs_sat26DQHl.data = [hs_sat26DQHk, hs_sat26DQHf];
                var hs_sat26DQHq = new $hs.Thunk();
                hs_sat26DQHq.evaluateOnce = function () {
                    var hs_sat26DQHn = new $hs.Thunk();
                    hs_sat26DQHn.evaluateOnce = function () {
                        var hs_sat26DQHm = new $hs.Data(1);
                        hs_sat26DQHm.data = ["\x02"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQHm);
                    };
                    var hs_sat26DQHp = new $hs.Thunk();
                    hs_sat26DQHp.evaluateOnce = function () {
                        var hs_sat26DQHo = new $hs.Thunk();
                        hs_sat26DQHo.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("STX\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQHo);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQHp, hs_sat26DQHn);
                };
                var hs_sat26DQHr = new $hs.Data(2);
                hs_sat26DQHr.data = [hs_sat26DQHq, hs_sat26DQHl];
                var hs_sat26DQHw = new $hs.Thunk();
                hs_sat26DQHw.evaluateOnce = function () {
                    var hs_sat26DQHt = new $hs.Thunk();
                    hs_sat26DQHt.evaluateOnce = function () {
                        var hs_sat26DQHs = new $hs.Data(1);
                        hs_sat26DQHs.data = ["\x00"];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQHs);
                    };
                    var hs_sat26DQHv = new $hs.Thunk();
                    hs_sat26DQHv.evaluateOnce = function () {
                        var hs_sat26DQHu = new $hs.Thunk();
                        hs_sat26DQHu.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("NUL\x00");
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQHu);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQHv, hs_sat26DQHt);
                };
                var hs_sat26DQHx = new $hs.Data(2);
                hs_sat26DQHx.data = [hs_sat26DQHw, hs_sat26DQHr];
                var hs_sat26DQHI = new $hs.Thunk();
                hs_sat26DQHI.evaluateOnce = function () {
                    var hs_sat26DQHC = new $hs.Thunk();
                    hs_sat26DQHC.evaluateOnce = function () {
                        var hs_sat26DQHz = new $hs.Thunk();
                        hs_sat26DQHz.evaluateOnce = function () {
                            var hs_sat26DQHy = new $hs.Data(1);
                            hs_sat26DQHy.data = ["\x0e"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQHy);
                        };
                        var hs_sat26DQHB = new $hs.Thunk();
                        hs_sat26DQHB.evaluateOnce = function () {
                            var hs_sat26DQHA = new $hs.Thunk();
                            hs_sat26DQHA.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("SO\x00");
                            };
                            return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQHA);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQHB, hs_sat26DQHz);
                    };
                    var hs_sat26DQHH = new $hs.Thunk();
                    hs_sat26DQHH.evaluateOnce = function () {
                        var hs_sat26DQHE = new $hs.Thunk();
                        hs_sat26DQHE.evaluateOnce = function () {
                            var hs_sat26DQHD = new $hs.Data(1);
                            hs_sat26DQHD.data = ["\x01"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQHD);
                        };
                        var hs_sat26DQHG = new $hs.Thunk();
                        hs_sat26DQHG.evaluateOnce = function () {
                            var hs_sat26DQHF = new $hs.Thunk();
                            hs_sat26DQHF.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("SOH\x00");
                            };
                            return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQHF);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQHG, hs_sat26DQHE);
                    };
                    return $hs.modules.TextziParserCombinatorsziReadP.hs_zlzpzp.hscall(hs_sat26DQHH, hs_sat26DQHC);
                };
                var hs_sat26DQHJ = new $hs.Data(2);
                hs_sat26DQHJ.data = [hs_sat26DQHI, hs_sat26DQHx];
                return $hs.modules.TextziParserCombinatorsziReadP.hs_choice.hscall(hs_sat26DQHJ);
            };
            var hs_sat26DQIo = new $hs.Thunk();
            hs_sat26DQIo.evaluateOnce = function () {
                var hs_sat26DQIl = new $hs.Func(1);
                hs_sat26DQIl.evaluate = function (hs_ds26DQHK) {
                    var hs_sat26DQIk = new $hs.Func(1);
                    hs_sat26DQIk.evaluate = function (hs_c26DQrW) {
                        var hs_wild26DQHM = hs_c26DQrW;
                        if (hs_c26DQrW.notEvaluated) {
                            hs_wild26DQHM = hs_c26DQrW.hscall();
                        }
                        var hs_ds126DQrZ = hs_wild26DQHM.data[0];
                        var hs_ds226DQHL = hs_ds126DQrZ;
                        if (hs_ds126DQrZ.notEvaluated) {
                            hs_ds226DQHL = hs_ds126DQrZ.hscall();
                        }
                        switch (hs_ds226DQHL) {
                        case "@":
                            var hs_sat26DQHO = new $hs.Data(1);
                            hs_sat26DQHO.data = ["\x00"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQHO);
                        case "A":
                            var hs_sat26DQHP = new $hs.Data(1);
                            hs_sat26DQHP.data = ["\x01"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQHP);
                        case "B":
                            var hs_sat26DQHQ = new $hs.Data(1);
                            hs_sat26DQHQ.data = ["\x02"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQHQ);
                        case "C":
                            var hs_sat26DQHR = new $hs.Data(1);
                            hs_sat26DQHR.data = ["\x03"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQHR);
                        case "D":
                            var hs_sat26DQHS = new $hs.Data(1);
                            hs_sat26DQHS.data = ["\x04"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQHS);
                        case "E":
                            var hs_sat26DQHT = new $hs.Data(1);
                            hs_sat26DQHT.data = ["\x05"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQHT);
                        case "F":
                            var hs_sat26DQHU = new $hs.Data(1);
                            hs_sat26DQHU.data = ["\x06"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQHU);
                        case "G":
                            var hs_sat26DQHV = new $hs.Data(1);
                            hs_sat26DQHV.data = ["\x07"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQHV);
                        case "H":
                            var hs_sat26DQHW = new $hs.Data(1);
                            hs_sat26DQHW.data = ["\b"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQHW);
                        case "I":
                            var hs_sat26DQHX = new $hs.Data(1);
                            hs_sat26DQHX.data = ["\t"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQHX);
                        case "J":
                            var hs_sat26DQHY = new $hs.Data(1);
                            hs_sat26DQHY.data = ["\n"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQHY);
                        case "K":
                            var hs_sat26DQHZ = new $hs.Data(1);
                            hs_sat26DQHZ.data = ["\v"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQHZ);
                        case "L":
                            var hs_sat26DQI0 = new $hs.Data(1);
                            hs_sat26DQI0.data = ["\f"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQI0);
                        case "M":
                            var hs_sat26DQI1 = new $hs.Data(1);
                            hs_sat26DQI1.data = ["\r"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQI1);
                        case "N":
                            var hs_sat26DQI2 = new $hs.Data(1);
                            hs_sat26DQI2.data = ["\x0e"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQI2);
                        case "O":
                            var hs_sat26DQI3 = new $hs.Data(1);
                            hs_sat26DQI3.data = ["\x0f"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQI3);
                        case "P":
                            var hs_sat26DQI4 = new $hs.Data(1);
                            hs_sat26DQI4.data = ["\x10"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQI4);
                        case "Q":
                            var hs_sat26DQI5 = new $hs.Data(1);
                            hs_sat26DQI5.data = ["\x11"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQI5);
                        case "R":
                            var hs_sat26DQI6 = new $hs.Data(1);
                            hs_sat26DQI6.data = ["\x12"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQI6);
                        case "S":
                            var hs_sat26DQI7 = new $hs.Data(1);
                            hs_sat26DQI7.data = ["\x13"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQI7);
                        case "T":
                            var hs_sat26DQI8 = new $hs.Data(1);
                            hs_sat26DQI8.data = ["\x14"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQI8);
                        case "U":
                            var hs_sat26DQI9 = new $hs.Data(1);
                            hs_sat26DQI9.data = ["\x15"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQI9);
                        case "V":
                            var hs_sat26DQIa = new $hs.Data(1);
                            hs_sat26DQIa.data = ["\x16"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIa);
                        case "W":
                            var hs_sat26DQIb = new $hs.Data(1);
                            hs_sat26DQIb.data = ["\x17"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIb);
                        case "X":
                            var hs_sat26DQIc = new $hs.Data(1);
                            hs_sat26DQIc.data = ["\x18"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIc);
                        case "Y":
                            var hs_sat26DQId = new $hs.Data(1);
                            hs_sat26DQId.data = ["\x19"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQId);
                        case "Z":
                            var hs_sat26DQIe = new $hs.Data(1);
                            hs_sat26DQIe.data = ["\x1a"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIe);
                        case "[":
                            var hs_sat26DQIf = new $hs.Data(1);
                            hs_sat26DQIf.data = ["\x1b"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIf);
                        case "\\":
                            var hs_sat26DQIg = new $hs.Data(1);
                            hs_sat26DQIg.data = ["\x1c"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIg);
                        case "]":
                            var hs_sat26DQIh = new $hs.Data(1);
                            hs_sat26DQIh.data = ["\x1d"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIh);
                        case "^":
                            var hs_sat26DQIi = new $hs.Data(1);
                            hs_sat26DQIi.data = ["\x1e"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIi);
                        case "_":
                            var hs_sat26DQIj = new $hs.Data(1);
                            hs_sat26DQIj.data = ["\x1f"];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIj);
                        default:
                            if ($hs.modules.TextziParserCombinatorsziReadP.hs_pfail.notEvaluated) {
                                return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail.hscall();
                            } else {
                                return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail;
                            }
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_get, hs_sat26DQIk);
                };
                var hs_sat26DQIn = new $hs.Thunk();
                hs_sat26DQIn.evaluateOnce = function () {
                    var hs_sat26DQIm = new $hs.Data(1);
                    hs_sat26DQIm.data = ["^"];
                    return $hs.modules.TextziParserCombinatorsziReadP.hs_char.hscall(hs_sat26DQIm);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIn, hs_sat26DQIl);
            };
            return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DQIo, hs_sat26DQHN);
        };
        var hs_sat26DQIE = new $hs.Thunk();
        hs_sat26DQIE.evaluateOnce = function () {
            var hs_sat26DQIA = new $hs.Func(1);
            hs_sat26DQIA.evaluate = function (hs_base26DQrD) {
                var hs_sat26DQIy = new $hs.Func(1);
                hs_sat26DQIy.evaluate = function (hs_n26DQrG) {
                    var hs_sat26DQIs = new $hs.Thunk();
                    hs_sat26DQIs.evaluateOnce = function () {
                        var hs_sat26DQIr = new $hs.Thunk();
                        hs_sat26DQIr.evaluateOnce = function () {
                            var hs_sat26DQIq = new $hs.Thunk();
                            hs_sat26DQIq.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26DQrG);
                            };
                            return $hs.modules.GHCziBase.hs_chr.hscall(hs_sat26DQIq);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIr);
                    };
                    var hs_sat26DQIx = new $hs.Thunk();
                    hs_sat26DQIx.evaluateOnce = function () {
                        var hs_sat26DQIw = new $hs.Thunk();
                        hs_sat26DQIw.evaluateOnce = function () {
                            var hs_sat26DQIv = new $hs.Thunk();
                            hs_sat26DQIv.evaluateOnce = function () {
                                var hs_sat26DQIu = new $hs.Thunk();
                                hs_sat26DQIu.evaluateOnce = function () {
                                    var hs_sat26DQIt = new $hs.Thunk();
                                    hs_sat26DQIt.evaluateOnce = function () {
                                        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedChar);
                                    };
                                    return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26DQIt);
                                };
                                return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26DQIu);
                            };
                            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26DQrG, hs_sat26DQIv);
                        };
                        return $hs.modules.ControlziMonad.hs_guard.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusReadP, hs_sat26DQIw);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIx, hs_sat26DQIs);
                };
                var hs_sat26DQIz = new $hs.Thunk();
                hs_sat26DQIz.evaluateOnce = function () {
                    return hs_lexInteger25s3B5.hscall(hs_base26DQrD);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIz, hs_sat26DQIy);
            };
            var hs_sat26DQID = new $hs.Thunk();
            hs_sat26DQID.evaluateOnce = function () {
                var hs_sat26DQIC = new $hs.Thunk();
                hs_sat26DQIC.evaluateOnce = function () {
                    var hs_sat26DQIB = new $hs.Data(1);
                    hs_sat26DQIB.data = [10];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIB);
                };
                return $hs.modules.TextziParserCombinatorsziReadP.hs_zlzpzp.hscall(hs_lexBaseChar25s3AV, hs_sat26DQIC);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQID, hs_sat26DQIA);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DQIE, hs_sat26DQIp);
    };
    hs_sat26DQIT.evaluateOnce = function () {
        var hs_sat26DQIS = new $hs.Func(1);
        hs_sat26DQIS.evaluate = function (hs_c26DQri) {
            var hs_wild26DQIH = hs_c26DQri;
            if (hs_c26DQri.notEvaluated) {
                hs_wild26DQIH = hs_c26DQri.hscall();
            }
            var hs_ds26DQrl = hs_wild26DQIH.data[0];
            var hs_ds126DQIG = hs_ds26DQrl;
            if (hs_ds26DQrl.notEvaluated) {
                hs_ds126DQIG = hs_ds26DQrl.hscall();
            }
            switch (hs_ds126DQIG) {
            case "\"":
                var hs_sat26DQII = new $hs.Data(1);
                hs_sat26DQII.data = ["\""];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQII);
            case "'":
                var hs_sat26DQIJ = new $hs.Data(1);
                hs_sat26DQIJ.data = ["'"];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIJ);
            case "\\":
                var hs_sat26DQIK = new $hs.Data(1);
                hs_sat26DQIK.data = ["\\"];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIK);
            case "a":
                var hs_sat26DQIL = new $hs.Data(1);
                hs_sat26DQIL.data = ["\x07"];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIL);
            case "b":
                var hs_sat26DQIM = new $hs.Data(1);
                hs_sat26DQIM.data = ["\b"];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIM);
            case "f":
                var hs_sat26DQIN = new $hs.Data(1);
                hs_sat26DQIN.data = ["\f"];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIN);
            case "n":
                var hs_sat26DQIO = new $hs.Data(1);
                hs_sat26DQIO.data = ["\n"];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIO);
            case "r":
                var hs_sat26DQIP = new $hs.Data(1);
                hs_sat26DQIP.data = ["\r"];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIP);
            case "t":
                var hs_sat26DQIQ = new $hs.Data(1);
                hs_sat26DQIQ.data = ["\t"];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIQ);
            case "v":
                var hs_sat26DQIR = new $hs.Data(1);
                hs_sat26DQIR.data = ["\v"];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIR);
            default:
                if ($hs.modules.TextziParserCombinatorsziReadP.hs_pfail.notEvaluated) {
                    return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail.hscall();
                } else {
                    return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail;
                }
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_get, hs_sat26DQIS);
    };
    hs_lexEsc25vrV0.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DQIT, hs_sat26DQIF);
    };
    hs_sat26DQIZ.evaluate = function (hs_c126DQvW) {
        var hs_sat26DQIV = new $hs.Data(1);
        hs_sat26DQIV.data = ["\\"];
        var hs_wild26DQIU = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c126DQvW, hs_sat26DQIV);
        switch (hs_wild26DQIU.tag) {
        case 1:
            var hs_sat26DQIW = new $hs.Data(1);
            hs_sat26DQIW.data = [hs_c126DQvW, $hs.modules.GHCziBool.hs_False];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIW);
        case 2:
            var hs_sat26DQIY = new $hs.Func(1);
            hs_sat26DQIY.evaluate = function (hs_c226DQw1) {
                var hs_sat26DQIX = new $hs.Data(1);
                hs_sat26DQIX.data = [hs_c226DQw1, $hs.modules.GHCziBool.hs_True];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQIX);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_lexEsc25vrV0, hs_sat26DQIY);
        }
    };
    hs_lexCharE25s3AN.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_get, hs_sat26DQIZ);
    };
    hs_sat26DQJ2.evaluate = function (hs_ds26DQw6) {
        var hs_wild26DQJ0 = hs_ds26DQw6;
        if (hs_ds26DQw6.notEvaluated) {
            hs_wild26DQJ0 = hs_ds26DQw6.hscall();
        }
        var hs_c26DQwa = hs_wild26DQJ0.data[0];
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_c26DQwa);
    };
    this.hs_lexChar.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_lexCharE25s3AN, hs_sat26DQJ2);
    };
    hs_sat26DQJ9.evaluate = function (hs_c26DQwn) {
        var hs_sat26DQJ6 = new $hs.Func(1);
        hs_sat26DQJ6.evaluate = function (hs_n26DQwq) {
            var hs_sat26DQJ5 = new $hs.Thunk();
            hs_sat26DQJ5.evaluateOnce = function () {
                var hs_sat26DQJ4 = new $hs.Data(1);
                hs_sat26DQJ4.data = ["-"];
                var hs_wild26DQJ3 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26DQwn, hs_sat26DQJ4);
                switch (hs_wild26DQJ3.tag) {
                case 1:
                    if (hs_n26DQwq.notEvaluated) {
                        return hs_n26DQwq.hscall();
                    } else {
                        return hs_n26DQwq;
                    }
                case 2:
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_n26DQwq);
                }
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQJ5);
        };
        var hs_sat26DQJ8 = new $hs.Thunk();
        hs_sat26DQJ8.evaluateOnce = function () {
            var hs_sat26DQJ7 = new $hs.Data(1);
            hs_sat26DQJ7.data = [10];
            return hs_lexInteger25s3B5.hscall(hs_sat26DQJ7);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQJ8, hs_sat26DQJ6);
    };
    hs_sat26DQJe.evaluateOnce = function () {
        var hs_sat26DQJb = new $hs.Thunk();
        hs_sat26DQJb.evaluateOnce = function () {
            var hs_sat26DQJa = new $hs.Data(1);
            hs_sat26DQJa.data = ["+"];
            return $hs.modules.TextziParserCombinatorsziReadP.hs_char.hscall(hs_sat26DQJa);
        };
        var hs_sat26DQJd = new $hs.Thunk();
        hs_sat26DQJd.evaluateOnce = function () {
            var hs_sat26DQJc = new $hs.Data(1);
            hs_sat26DQJc.data = ["-"];
            return $hs.modules.TextziParserCombinatorsziReadP.hs_char.hscall(hs_sat26DQJc);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DQJd, hs_sat26DQJb);
    };
    hs_signedExp25vrZX.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQJe, hs_sat26DQJ9);
    };
    hs_sat26DQJl.evaluate = function (hs_ds26DQJf) {
        var hs_sat26DQJh = new $hs.Func(1);
        hs_sat26DQJh.evaluate = function (hs_exp26DQwE) {
            var hs_sat26DQJg = new $hs.Data(2);
            hs_sat26DQJg.data = [hs_exp26DQwE];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQJg);
        };
        var hs_sat26DQJk = new $hs.Thunk();
        hs_sat26DQJk.evaluateOnce = function () {
            var hs_sat26DQJj = new $hs.Thunk();
            hs_sat26DQJj.evaluateOnce = function () {
                var hs_sat26DQJi = new $hs.Data(1);
                hs_sat26DQJi.data = [10];
                return hs_lexInteger25s3B5.hscall(hs_sat26DQJi);
            };
            return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_signedExp25vrZX, hs_sat26DQJj);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQJk, hs_sat26DQJh);
    };
    hs_sat26DQJq.evaluateOnce = function () {
        var hs_sat26DQJn = new $hs.Thunk();
        hs_sat26DQJn.evaluateOnce = function () {
            var hs_sat26DQJm = new $hs.Data(1);
            hs_sat26DQJm.data = ["E"];
            return $hs.modules.TextziParserCombinatorsziReadP.hs_char.hscall(hs_sat26DQJm);
        };
        var hs_sat26DQJp = new $hs.Thunk();
        hs_sat26DQJp.evaluateOnce = function () {
            var hs_sat26DQJo = new $hs.Data(1);
            hs_sat26DQJo.data = ["e"];
            return $hs.modules.TextziParserCombinatorsziReadP.hs_char.hscall(hs_sat26DQJo);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DQJp, hs_sat26DQJn);
    };
    hs_lexExp25s3B1.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQJq, hs_sat26DQJl);
    };
    hs_sat26DQLC.evaluateOnce = function () {
        var hs_sat26DQLn = new $hs.Thunk();
        hs_sat26DQLn.evaluateOnce = function () {
            var hs_sat26DQKU = new $hs.Thunk();
            hs_sat26DQKU.evaluateOnce = function () {
                var hs_sat26DQKJ = new $hs.Thunk();
                hs_sat26DQKJ.evaluateOnce = function () {
                    var hs_sat26DQKA = new $hs.Thunk();
                    hs_sat26DQKA.evaluateOnce = function () {
                        var hs_sat26DQK9 = new $hs.Thunk();
                        hs_sat26DQK9.evaluateOnce = function () {
                            var hs_sat26DQJX = new $hs.Thunk();
                            hs_sat26DQJX.evaluateOnce = function () {
                                var hs_valExp26DQA5 = new $hs.Func(2);
                                hs_valExp26DQA5.evaluate = function (hs_rat26DQA0, hs_exp26DQA3) {
                                    var hs_sat26DQJt = new $hs.Thunk();
                                    hs_sat26DQJt.evaluateOnce = function () {
                                        var hs_sat26DQJs = new $hs.Thunk();
                                        hs_sat26DQJs.evaluateOnce = function () {
                                            var hs_sat26DQJr = new $hs.Thunk();
                                            hs_sat26DQJr.evaluateOnce = function () {
                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(10);
                                            };
                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum25vrT1, hs_sat26DQJr);
                                        };
                                        return $hs.modules.GHCziReal.hs_zczc.hscall(hs_zddFractional25vrT3, $hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DQJs, hs_exp26DQA3);
                                    };
                                    return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum25vrT1, hs_rat26DQA0, hs_sat26DQJt);
                                };
                                var hs_sat26DQJT = new $hs.Func(1);
                                hs_sat26DQJT.evaluate = function (hs_xs26DQAi) {
                                    var hs_sat26DQJQ = new $hs.Func(1);
                                    hs_sat26DQJQ.evaluate = function (hs_mFrac26DQAk) {
                                        var hs_sat26DQJN = new $hs.Func(1);
                                        hs_sat26DQJN.evaluate = function (hs_mExp26DQAm) {
                                            var hs_sat26DQJM = new $hs.Thunk();
                                            hs_sat26DQJM.evaluateOnce = function () {
                                                var hs_a26DQAj = new $hs.Thunk();
                                                hs_a26DQAj.evaluateOnce = function () {
                                                    var hs_sat26DQJu = new $hs.Thunk();
                                                    hs_sat26DQJu.evaluateOnce = function () {
                                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                                    };
                                                    var hs_sat26DQJv = new $hs.Thunk();
                                                    hs_sat26DQJv.evaluateOnce = function () {
                                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(10);
                                                    };
                                                    return hs_val25s3B7.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DQJv, hs_sat26DQJu, hs_xs26DQAi);
                                                };
                                                var hs_wild26DQJx = hs_mFrac26DQAk;
                                                if (hs_mFrac26DQAk.notEvaluated) {
                                                    hs_wild26DQJx = hs_mFrac26DQAk.hscall();
                                                }
                                                switch (hs_wild26DQJx.tag) {
                                                case 1:
                                                    var hs_wild126DQJw = hs_mExp26DQAm;
                                                    if (hs_mExp26DQAm.notEvaluated) {
                                                        hs_wild126DQJw = hs_mExp26DQAm.hscall();
                                                    }
                                                    switch (hs_wild126DQJw.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(6);
                                                        $res.data = [hs_a26DQAj];
                                                        return $res;
                                                    case 2:
                                                        var hs_exp26DQAp = hs_wild126DQJw.data[0];
                                                        var hs_sat26DQJz = new $hs.Thunk();
                                                        hs_sat26DQJz.evaluateOnce = function () {
                                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                                        };
                                                        var hs_wild226DQJy = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_exp26DQAp, hs_sat26DQJz);
                                                        switch (hs_wild226DQJy.tag) {
                                                        case 1:
                                                            var hs_sat26DQJB = new $hs.Thunk();
                                                            hs_sat26DQJB.evaluateOnce = function () {
                                                                var hs_sat26DQJA = new $hs.Thunk();
                                                                hs_sat26DQJA.evaluateOnce = function () {
                                                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum25vrT1, hs_a26DQAj);
                                                                };
                                                                return hs_valExp26DQA5.hscall(hs_sat26DQJA, hs_exp26DQAp);
                                                            };
                                                            var $res = new $hs.Data(7);
                                                            $res.data = [hs_sat26DQJB];
                                                            return $res;
                                                        case 2:
                                                            var hs_sat26DQJE = new $hs.Thunk();
                                                            hs_sat26DQJE.evaluateOnce = function () {
                                                                var hs_sat26DQJD = new $hs.Thunk();
                                                                hs_sat26DQJD.evaluateOnce = function () {
                                                                    var hs_sat26DQJC = new $hs.Thunk();
                                                                    hs_sat26DQJC.evaluateOnce = function () {
                                                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(10);
                                                                    };
                                                                    return $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, $hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DQJC, hs_exp26DQAp);
                                                                };
                                                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_a26DQAj, hs_sat26DQJD);
                                                            };
                                                            var $res = new $hs.Data(6);
                                                            $res.data = [hs_sat26DQJE];
                                                            return $res;
                                                        }
                                                    }
                                                case 2:
                                                    var hs_fs26DQAD = hs_wild26DQJx.data[0];
                                                    var hs_rat26DQAF = new $hs.Thunk();
                                                    hs_rat26DQAF.evaluateOnce = function () {
                                                        var hs_sat26DQJI = new $hs.Thunk();
                                                        hs_sat26DQJI.evaluateOnce = function () {
                                                            var hs_sat26DQJF = new $hs.Thunk();
                                                            hs_sat26DQJF.evaluateOnce = function () {
                                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                                            };
                                                            var hs_sat26DQJG = new $hs.Thunk();
                                                            hs_sat26DQJG.evaluateOnce = function () {
                                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                                            };
                                                            var hs_sat26DQJH = new $hs.Thunk();
                                                            hs_sat26DQJH.evaluateOnce = function () {
                                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(10);
                                                            };
                                                            return hs_frac25s3B9.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DQJH, hs_sat26DQJG, hs_sat26DQJF, hs_fs26DQAD);
                                                        };
                                                        var hs_sat26DQJJ = new $hs.Thunk();
                                                        hs_sat26DQJJ.evaluateOnce = function () {
                                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum25vrT1, hs_a26DQAj);
                                                        };
                                                        return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum25vrT1, hs_sat26DQJJ, hs_sat26DQJI);
                                                    };
                                                    var hs_wild126DQJK = hs_mExp26DQAm;
                                                    if (hs_mExp26DQAm.notEvaluated) {
                                                        hs_wild126DQJK = hs_mExp26DQAm.hscall();
                                                    }
                                                    switch (hs_wild126DQJK.tag) {
                                                    case 1:
                                                        var $res = new $hs.Data(7);
                                                        $res.data = [hs_rat26DQAF];
                                                        return $res;
                                                    case 2:
                                                        var hs_exp26DQAI = hs_wild126DQJK.data[0];
                                                        var hs_sat26DQJL = new $hs.Thunk();
                                                        hs_sat26DQJL.evaluateOnce = function () {
                                                            return hs_valExp26DQA5.hscall(hs_rat26DQAF, hs_exp26DQAI);
                                                        };
                                                        var $res = new $hs.Data(7);
                                                        $res.data = [hs_sat26DQJL];
                                                        return $res;
                                                    }
                                                }
                                            };
                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQJM);
                                        };
                                        var hs_sat26DQJP = new $hs.Thunk();
                                        hs_sat26DQJP.evaluateOnce = function () {
                                            var hs_sat26DQJO = new $hs.Thunk();
                                            hs_sat26DQJO.evaluateOnce = function () {
                                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.DataziMaybe.hs_Nothing);
                                            };
                                            return $hs.modules.TextziParserCombinatorsziReadP.hs_zlzpzp.hscall(hs_lexExp25s3B1, hs_sat26DQJO);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQJP, hs_sat26DQJN);
                                    };
                                    var hs_sat26DQJS = new $hs.Thunk();
                                    hs_sat26DQJS.evaluateOnce = function () {
                                        var hs_sat26DQJR = new $hs.Thunk();
                                        hs_sat26DQJR.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.DataziMaybe.hs_Nothing);
                                        };
                                        return $hs.modules.TextziParserCombinatorsziReadP.hs_zlzpzp.hscall(hs_lexFrac25s3AZ, hs_sat26DQJR);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQJS, hs_sat26DQJQ);
                                };
                                var hs_sat26DQJV = new $hs.Thunk();
                                hs_sat26DQJV.evaluateOnce = function () {
                                    var hs_sat26DQJU = new $hs.Data(1);
                                    hs_sat26DQJU.data = [10];
                                    return hs_lexDigits25s3B3.hscall(hs_sat26DQJU);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQJV, hs_sat26DQJT);
                            };
                            var hs_sat26DQK8 = new $hs.Thunk();
                            hs_sat26DQK8.evaluateOnce = function () {
                                var hs_sat26DQK5 = new $hs.Func(1);
                                hs_sat26DQK5.evaluate = function (hs_ds26DQJW) {
                                    var hs_sat26DQK4 = new $hs.Func(1);
                                    hs_sat26DQK4.evaluate = function (hs_base26DQzL) {
                                        var hs_sat26DQK2 = new $hs.Func(1);
                                        hs_sat26DQK2.evaluate = function (hs_digits26DQzQ) {
                                            var hs_sat26DQK0 = new $hs.Thunk();
                                            hs_sat26DQK0.evaluateOnce = function () {
                                                var hs_sat26DQJY = new $hs.Thunk();
                                                hs_sat26DQJY.evaluateOnce = function () {
                                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                                };
                                                var hs_sat26DQJZ = new $hs.Thunk();
                                                hs_sat26DQJZ.evaluateOnce = function () {
                                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziNum.hs_zdfNumInteger, hs_base26DQzL);
                                                };
                                                return hs_val25s3B7.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DQJZ, hs_sat26DQJY, hs_digits26DQzQ);
                                            };
                                            var hs_sat26DQK1 = new $hs.Data(6);
                                            hs_sat26DQK1.data = [hs_sat26DQK0];
                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQK1);
                                        };
                                        var hs_sat26DQK3 = new $hs.Thunk();
                                        hs_sat26DQK3.evaluateOnce = function () {
                                            return hs_lexDigits25s3B3.hscall(hs_base26DQzL);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQK3, hs_sat26DQK2);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_lexBaseChar25s3AV, hs_sat26DQK4);
                                };
                                var hs_sat26DQK7 = new $hs.Thunk();
                                hs_sat26DQK7.evaluateOnce = function () {
                                    var hs_sat26DQK6 = new $hs.Data(1);
                                    hs_sat26DQK6.data = ["0"];
                                    return $hs.modules.TextziParserCombinatorsziReadP.hs_char.hscall(hs_sat26DQK6);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQK7, hs_sat26DQK5);
                            };
                            return $hs.modules.TextziParserCombinatorsziReadP.hs_zlzpzp.hscall(hs_sat26DQK8, hs_sat26DQJX);
                        };
                        var hs_sat26DQKz = new $hs.Thunk();
                        hs_sat26DQKz.evaluateOnce = function () {
                            var hs_isIdfChar26DQzd = new $hs.Func(1);
                            hs_isIdfChar26DQzd.evaluate = function (hs_c26DQz9) {
                                var hs_sat26DQKb = new $hs.Thunk();
                                hs_sat26DQKb.evaluateOnce = function () {
                                    var hs_sat26DQKa = new $hs.Thunk();
                                    hs_sat26DQKa.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("_'\x00");
                                    };
                                    return $hs.modules.GHCziList.hs_elem.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26DQz9, hs_sat26DQKa);
                                };
                                var hs_sat26DQKc = new $hs.Thunk();
                                hs_sat26DQKc.evaluateOnce = function () {
                                    return $hs.modules.GHCziUnicode.hs_isAlphaNum.hscall(hs_c26DQz9);
                                };
                                return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DQKc, hs_sat26DQKb);
                            };
                            var hs_sat26DQKn = new $hs.Thunk();
                            hs_sat26DQKn.evaluateOnce = function () {
                                var hs_sat26DQKh = new $hs.Func(1);
                                hs_sat26DQKh.evaluate = function (hs_c26DQzz) {
                                    var hs_sat26DQKf = new $hs.Func(1);
                                    hs_sat26DQKf.evaluate = function (hs_s26DQzA) {
                                        var hs_sat26DQKd = new $hs.Data(2);
                                        hs_sat26DQKd.data = [hs_c26DQzz, hs_s26DQzA];
                                        var hs_sat26DQKe = new $hs.Data(4);
                                        hs_sat26DQKe.data = [hs_sat26DQKd];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQKe);
                                    };
                                    var hs_sat26DQKg = new $hs.Thunk();
                                    hs_sat26DQKg.evaluateOnce = function () {
                                        return $hs.modules.TextziParserCombinatorsziReadP.hs_munch.hscall(hs_isIdfChar26DQzd);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQKg, hs_sat26DQKf);
                                };
                                var hs_sat26DQKm = new $hs.Thunk();
                                hs_sat26DQKm.evaluateOnce = function () {
                                    var hs_sat26DQKl = new $hs.Func(1);
                                    hs_sat26DQKl.evaluate = function (hs_c26DQzq) {
                                        var hs_sat26DQKj = new $hs.Thunk();
                                        hs_sat26DQKj.evaluateOnce = function () {
                                            var hs_sat26DQKi = new $hs.Data(1);
                                            hs_sat26DQKi.data = ["_"];
                                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26DQzq, hs_sat26DQKi);
                                        };
                                        var hs_sat26DQKk = new $hs.Thunk();
                                        hs_sat26DQKk.evaluateOnce = function () {
                                            return $hs.modules.GHCziUnicode.hs_isAlpha.hscall(hs_c26DQzq);
                                        };
                                        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DQKk, hs_sat26DQKj);
                                    };
                                    return $hs.modules.TextziParserCombinatorsziReadP.hs_satisfy.hscall(hs_sat26DQKl);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQKm, hs_sat26DQKh);
                            };
                            var hs_sat26DQKy = new $hs.Thunk();
                            hs_sat26DQKy.evaluateOnce = function () {
                                var hs_sat26DQKs = new $hs.Thunk();
                                hs_sat26DQKs.evaluateOnce = function () {
                                    var hs_sat26DQKp = new $hs.Thunk();
                                    hs_sat26DQKp.evaluateOnce = function () {
                                        var hs_sat26DQKo = new $hs.Data(7);
                                        hs_sat26DQKo.data = [$hs.modules.GHCziReal.hs_infinity];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQKo);
                                    };
                                    var hs_sat26DQKr = new $hs.Thunk();
                                    hs_sat26DQKr.evaluateOnce = function () {
                                        var hs_sat26DQKq = new $hs.Thunk();
                                        hs_sat26DQKq.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Infinity\x00");
                                        };
                                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQKq);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQKr, hs_sat26DQKp);
                                };
                                var hs_sat26DQKx = new $hs.Thunk();
                                hs_sat26DQKx.evaluateOnce = function () {
                                    var hs_sat26DQKu = new $hs.Thunk();
                                    hs_sat26DQKu.evaluateOnce = function () {
                                        var hs_sat26DQKt = new $hs.Data(7);
                                        hs_sat26DQKt.data = [$hs.modules.GHCziReal.hs_notANumber];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQKt);
                                    };
                                    var hs_sat26DQKw = new $hs.Thunk();
                                    hs_sat26DQKw.evaluateOnce = function () {
                                        var hs_sat26DQKv = new $hs.Thunk();
                                        hs_sat26DQKv.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("NaN\x00");
                                        };
                                        return $hs.modules.TextziParserCombinatorsziReadP.hs_string.hscall(hs_sat26DQKv);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQKw, hs_sat26DQKu);
                                };
                                return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DQKx, hs_sat26DQKs);
                            };
                            return $hs.modules.TextziParserCombinatorsziReadP.hs_zlzpzp.hscall(hs_sat26DQKy, hs_sat26DQKn);
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DQKz, hs_sat26DQK9);
                    };
                    var hs_sat26DQKI = new $hs.Thunk();
                    hs_sat26DQKI.evaluateOnce = function () {
                        var hs_a26DQy8 = new $hs.Thunk();
                        hs_a26DQy8.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("..\x00");
                        };
                        var hs_a126DQya = new $hs.Thunk();
                        hs_a126DQya.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("::\x00");
                        };
                        var hs_a226DQyc = new $hs.Data(1);
                        hs_a226DQyc.data = ["="];
                        var hs_a326DQye = new $hs.Data(2);
                        hs_a326DQye.data = [hs_a226DQyc, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_a426DQyg = new $hs.Data(1);
                        hs_a426DQyg.data = ["\\"];
                        var hs_a526DQyi = new $hs.Data(2);
                        hs_a526DQyi.data = [hs_a426DQyg, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_a626DQyk = new $hs.Data(1);
                        hs_a626DQyk.data = ["|"];
                        var hs_a726DQym = new $hs.Data(2);
                        hs_a726DQym.data = [hs_a626DQyk, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_a826DQyo = new $hs.Thunk();
                        hs_a826DQyo.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("<-\x00");
                        };
                        var hs_a926DQyq = new $hs.Thunk();
                        hs_a926DQyq.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("->\x00");
                        };
                        var hs_a1026DQys = new $hs.Data(1);
                        hs_a1026DQys.data = ["@"];
                        var hs_a1126DQyu = new $hs.Data(2);
                        hs_a1126DQyu.data = [hs_a1026DQys, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_a1226DQyw = new $hs.Data(1);
                        hs_a1226DQyw.data = ["~"];
                        var hs_a1326DQyy = new $hs.Data(2);
                        hs_a1326DQyy.data = [hs_a1226DQyw, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_a1426DQyA = new $hs.Thunk();
                        hs_a1426DQyA.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("=>\x00");
                        };
                        var hs_a1526DQyC = new $hs.Data(2);
                        hs_a1526DQyC.data = [hs_a1426DQyA, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_a1626DQyE = new $hs.Data(2);
                        hs_a1626DQyE.data = [hs_a1326DQyy, hs_a1526DQyC];
                        var hs_a1726DQyG = new $hs.Data(2);
                        hs_a1726DQyG.data = [hs_a1126DQyu, hs_a1626DQyE];
                        var hs_a1826DQyI = new $hs.Data(2);
                        hs_a1826DQyI.data = [hs_a926DQyq, hs_a1726DQyG];
                        var hs_a1926DQyK = new $hs.Data(2);
                        hs_a1926DQyK.data = [hs_a826DQyo, hs_a1826DQyI];
                        var hs_a2026DQyM = new $hs.Data(2);
                        hs_a2026DQyM.data = [hs_a726DQym, hs_a1926DQyK];
                        var hs_a2126DQyO = new $hs.Data(2);
                        hs_a2126DQyO.data = [hs_a526DQyi, hs_a2026DQyM];
                        var hs_a2226DQyQ = new $hs.Data(2);
                        hs_a2226DQyQ.data = [hs_a326DQye, hs_a2126DQyO];
                        var hs_a2326DQyS = new $hs.Data(2);
                        hs_a2326DQyS.data = [hs_a126DQya, hs_a2226DQyQ];
                        var hs_reservedzuops26DQyU = new $hs.Data(2);
                        hs_reservedzuops26DQyU.data = [hs_a26DQy8, hs_a2326DQyS];
                        var hs_sat26DQKE = new $hs.Func(1);
                        hs_sat26DQKE.evaluate = function (hs_s26DQz1) {
                            var hs_wild26DQKB = $hs.modules.GHCziList.hs_elem.hscall(hs_zddEq125vrRD, hs_s26DQz1, hs_reservedzuops26DQyU);
                            switch (hs_wild26DQKB.tag) {
                            case 1:
                                var hs_sat26DQKC = new $hs.Data(5);
                                hs_sat26DQKC.data = [hs_s26DQz1];
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQKC);
                            case 2:
                                var hs_sat26DQKD = new $hs.Data(3);
                                hs_sat26DQKD.data = [hs_s26DQz1];
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQKD);
                            }
                        };
                        var hs_sat26DQKH = new $hs.Thunk();
                        hs_sat26DQKH.evaluateOnce = function () {
                            var hs_sat26DQKG = new $hs.Func(1);
                            hs_sat26DQKG.evaluate = function (hs_c26DQyW) {
                                var hs_sat26DQKF = new $hs.Thunk();
                                hs_sat26DQKF.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("!@#$%&*+./<=>?\\^|:-~\x00");
                                };
                                return $hs.modules.GHCziList.hs_elem.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26DQyW, hs_sat26DQKF);
                            };
                            return $hs.modules.TextziParserCombinatorsziReadP.hs_munch1.hscall(hs_sat26DQKG);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQKH, hs_sat26DQKE);
                    };
                    return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DQKI, hs_sat26DQKA);
                };
                var hs_sat26DQKQ = new $hs.Thunk();
                hs_sat26DQKQ.evaluateOnce = function () {
                    var hs_sat26DQKM = new $hs.Func(1);
                    hs_sat26DQKM.evaluate = function (hs_c26DQy2) {
                        var hs_sat26DQKK = new $hs.Data(2);
                        hs_sat26DQKK.data = [hs_c26DQy2, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_sat26DQKL = new $hs.Data(3);
                        hs_sat26DQKL.data = [hs_sat26DQKK];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQKL);
                    };
                    var hs_sat26DQKP = new $hs.Thunk();
                    hs_sat26DQKP.evaluateOnce = function () {
                        var hs_sat26DQKO = new $hs.Func(1);
                        hs_sat26DQKO.evaluate = function (hs_c26DQxX) {
                            var hs_sat26DQKN = new $hs.Thunk();
                            hs_sat26DQKN.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(",;()[]{}`\x00");
                            };
                            return $hs.modules.GHCziList.hs_elem.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26DQxX, hs_sat26DQKN);
                        };
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_satisfy.hscall(hs_sat26DQKO);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQKP, hs_sat26DQKM);
                };
                return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DQKQ, hs_sat26DQKJ);
            };
            var hs_sat26DQLj = new $hs.Thunk();
            hs_sat26DQLj.evaluateOnce = function () {
                var hs_lexStrItem26DQxw = new $hs.Thunk();
                hs_lexStrItem26DQxw.evaluateOnce = function () {
                    var hs_sat26DQL5 = new $hs.Thunk();
                    hs_sat26DQL5.evaluateOnce = function () {
                        var hs_sat26DQL4 = new $hs.Thunk();
                        hs_sat26DQL4.evaluateOnce = function () {
                            var hs_sat26DQL1 = new $hs.Func(1);
                            hs_sat26DQL1.evaluate = function (hs_ds26DQKR) {
                                var hs_sat26DQL0 = new $hs.Func(1);
                                hs_sat26DQL0.evaluate = function (hs_c26DQxh) {
                                    var hs_wild26DQxm = hs_c26DQxh;
                                    if (hs_c26DQxh.notEvaluated) {
                                        hs_wild26DQxm = hs_c26DQxh.hscall();
                                    }
                                    var hs_ds126DQxk = hs_wild26DQxm.data[0];
                                    var hs_ds226DQKT = hs_ds126DQxk;
                                    if (hs_ds126DQxk.notEvaluated) {
                                        hs_ds226DQKT = hs_ds126DQxk.hscall();
                                    }
                                    switch (hs_ds226DQKT) {
                                    case "&":
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziUnit.hs_Z0T);
                                    default:
                                        var hs_wild126DQKS = $hs.modules.GHCziUnicode.hs_isSpace.hscall(hs_wild26DQxm);
                                        switch (hs_wild126DQKS.tag) {
                                        case 1:
                                            if ($hs.modules.TextziParserCombinatorsziReadP.hs_pfail.notEvaluated) {
                                                return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail.hscall();
                                            } else {
                                                return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail;
                                            }
                                        case 2:
                                            var hs_sat26DQKZ = new $hs.Thunk();
                                            hs_sat26DQKZ.evaluateOnce = function () {
                                                var hs_sat26DQKW = new $hs.Func(1);
                                                hs_sat26DQKW.evaluate = function (hs_ds326DQKV) {
                                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziUnit.hs_Z0T);
                                                };
                                                var hs_sat26DQKY = new $hs.Thunk();
                                                hs_sat26DQKY.evaluateOnce = function () {
                                                    var hs_sat26DQKX = new $hs.Data(1);
                                                    hs_sat26DQKX.data = ["\\"];
                                                    return $hs.modules.TextziParserCombinatorsziReadP.hs_char.hscall(hs_sat26DQKX);
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQKY, hs_sat26DQKW);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_skipSpaces, hs_sat26DQKZ);
                                        }
                                    }
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_get, hs_sat26DQL0);
                            };
                            var hs_sat26DQL3 = new $hs.Thunk();
                            hs_sat26DQL3.evaluateOnce = function () {
                                var hs_sat26DQL2 = new $hs.Data(1);
                                hs_sat26DQL2.data = ["\\"];
                                return $hs.modules.TextziParserCombinatorsziReadP.hs_char.hscall(hs_sat26DQL2);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQL3, hs_sat26DQL1);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQL4, hs_lexStrItem26DQxw);
                    };
                    return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DQL5, hs_lexCharE25s3AN);
                };
                var hs_body26DQxO = new $hs.Func(1);
                hs_body26DQxO.evaluate = function (hs_f26DQxK) {
                    var hs_sat26DQLe = new $hs.Func(1);
                    hs_sat26DQLe.evaluate = function (hs_ds26DQxB) {
                        var hs_wild26DQL6 = hs_ds26DQxB;
                        if (hs_ds26DQxB.notEvaluated) {
                            hs_wild26DQL6 = hs_ds26DQxB.hscall();
                        }
                        var hs_c26DQxF = hs_wild26DQL6.data[0];
                        var hs_esc26DQxI = hs_wild26DQL6.data[1];
                        var hs_sat26DQL9 = new $hs.Thunk();
                        hs_sat26DQL9.evaluateOnce = function () {
                            var hs_sat26DQL7 = new $hs.Data(1);
                            hs_sat26DQL7.data = ["\""];
                            return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26DQxF, hs_sat26DQL7);
                        };
                        var hs_wild126DQL8 = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DQL9, hs_esc26DQxI);
                        switch (hs_wild126DQL8.tag) {
                        case 1:
                            var hs_sat26DQLa = new $hs.Thunk();
                            hs_sat26DQLa.evaluateOnce = function () {
                                return hs_f26DQxK.hscall($hs.modules.GHCziTypes.hs_ZMZN);
                            };
                            var hs_sat26DQLb = new $hs.Data(2);
                            hs_sat26DQLb.data = [hs_sat26DQLa];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQLb);
                        case 2:
                            var hs_sat26DQLd = new $hs.Thunk();
                            hs_sat26DQLd.evaluateOnce = function () {
                                var hs_sat26DQLc = new $hs.Func(1);
                                hs_sat26DQLc.evaluate = function (hs_eta1cW6l3) {
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_c26DQxF, hs_eta1cW6l3];
                                    return $res;
                                };
                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_f26DQxK, hs_sat26DQLc);
                            };
                            return hs_body26DQxO.hscall(hs_sat26DQLd);
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_lexStrItem26DQxw, hs_sat26DQLe);
                };
                var hs_sat26DQLg = new $hs.Func(1);
                hs_sat26DQLg.evaluate = function (hs_ds26DQLf) {
                    return hs_body26DQxO.hscall($hs.modules.GHCziBase.hs_id);
                };
                var hs_sat26DQLi = new $hs.Thunk();
                hs_sat26DQLi.evaluateOnce = function () {
                    var hs_sat26DQLh = new $hs.Data(1);
                    hs_sat26DQLh.data = ["\""];
                    return $hs.modules.TextziParserCombinatorsziReadP.hs_char.hscall(hs_sat26DQLh);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQLi, hs_sat26DQLg);
            };
            return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DQLj, hs_sat26DQKU);
        };
        var hs_sat26DQLB = new $hs.Thunk();
        hs_sat26DQLB.evaluateOnce = function () {
            var hs_sat26DQLy = new $hs.Func(1);
            hs_sat26DQLy.evaluate = function (hs_ds26DQLk) {
                var hs_sat26DQLx = new $hs.Func(1);
                hs_sat26DQLx.evaluate = function (hs_ds126DQwT) {
                    var hs_wild26DQLm = hs_ds126DQwT;
                    if (hs_ds126DQwT.notEvaluated) {
                        hs_wild26DQLm = hs_ds126DQwT.hscall();
                    }
                    var hs_c26DQwY = hs_wild26DQLm.data[0];
                    var hs_esc26DQwX = hs_wild26DQLm.data[1];
                    var hs_sat26DQLs = new $hs.Thunk();
                    hs_sat26DQLs.evaluateOnce = function () {
                        var hs_sat26DQLp = new $hs.Func(1);
                        hs_sat26DQLp.evaluate = function (hs_ds226DQLl) {
                            var hs_sat26DQLo = new $hs.Data(1);
                            hs_sat26DQLo.data = [hs_c26DQwY];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQLo);
                        };
                        var hs_sat26DQLr = new $hs.Thunk();
                        hs_sat26DQLr.evaluateOnce = function () {
                            var hs_sat26DQLq = new $hs.Data(1);
                            hs_sat26DQLq.data = ["'"];
                            return $hs.modules.TextziParserCombinatorsziReadP.hs_char.hscall(hs_sat26DQLq);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQLr, hs_sat26DQLp);
                    };
                    var hs_sat26DQLw = new $hs.Thunk();
                    hs_sat26DQLw.evaluateOnce = function () {
                        var hs_sat26DQLv = new $hs.Thunk();
                        hs_sat26DQLv.evaluateOnce = function () {
                            var hs_sat26DQLu = new $hs.Thunk();
                            hs_sat26DQLu.evaluateOnce = function () {
                                var hs_sat26DQLt = new $hs.Data(1);
                                hs_sat26DQLt.data = ["'"];
                                return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26DQwY, hs_sat26DQLt);
                            };
                            return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_esc26DQwX, hs_sat26DQLu);
                        };
                        return $hs.modules.ControlziMonad.hs_guard.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusReadP, hs_sat26DQLv);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQLw, hs_sat26DQLs);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_lexCharE25s3AN, hs_sat26DQLx);
            };
            var hs_sat26DQLA = new $hs.Thunk();
            hs_sat26DQLA.evaluateOnce = function () {
                var hs_sat26DQLz = new $hs.Data(1);
                hs_sat26DQLz.data = ["'"];
                return $hs.modules.TextziParserCombinatorsziReadP.hs_char.hscall(hs_sat26DQLz);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQLA, hs_sat26DQLy);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DQLB, hs_sat26DQLn);
    };
    hs_sat26DQLH.evaluateOnce = function () {
        var hs_sat26DQLG = new $hs.Func(1);
        hs_sat26DQLG.evaluate = function (hs_s26DQwJ) {
            var hs_sat26DQLD = new $hs.Thunk();
            hs_sat26DQLD.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziReadziLex.hs_EOF);
            };
            var hs_sat26DQLF = new $hs.Thunk();
            hs_sat26DQLF.evaluateOnce = function () {
                var hs_sat26DQLE = new $hs.Thunk();
                hs_sat26DQLE.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_null.hscall(hs_s26DQwJ);
                };
                return $hs.modules.ControlziMonad.hs_guard.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusReadP, hs_sat26DQLE);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQLF, hs_sat26DQLD);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_look, hs_sat26DQLG);
    };
    hs_lexToken25s3Az.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DQLH, hs_sat26DQLC);
    };
    this.hs_lex.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_skipSpaces, hs_lexToken25s3Az);
    };
    hs_sat26DQLM.evaluateOnce = function () {
        var hs_sat26DQLK = new $hs.Func(1);
        hs_sat26DQLK.evaluate = function (hs_ds26DQAX) {
            var hs_wild26DQLI = hs_ds26DQAX;
            if (hs_ds26DQAX.notEvaluated) {
                hs_wild26DQLI = hs_ds26DQAX.hscall();
            }
            var hs_s26DQB1 = hs_wild26DQLI.data[0];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_s26DQB1);
        };
        var hs_sat26DQLL = new $hs.Thunk();
        hs_sat26DQLL.evaluateOnce = function () {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_gather.hscall(hs_lexToken25s3Az);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQLL, hs_sat26DQLK);
    };
    this.hs_hsLex.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_skipSpaces, hs_sat26DQLM);
    };
    hs_readIntPzq25s3Bh.evaluate = function (hs_zddNum126DQB6, hs_base26DQB7) {
        var hs_sat26DQLP = new $hs.Func(1);
        hs_sat26DQLP.evaluate = function (hs_c26DQBf) {
            var hs_sat26DQLN = new $hs.Thunk();
            hs_sat26DQLN.evaluateOnce = function () {
                return hs_valDig25s3Bb.hscall(hs_zddNum126DQB6, hs_base26DQB7, hs_c26DQBf);
            };
            var hs_sat26DQLO = new $hs.Data(1);
            hs_sat26DQLO.data = [0];
            return $hs.modules.DataziMaybe.hs_maybe.hscall(hs_sat26DQLO, $hs.modules.GHCziBase.hs_id, hs_sat26DQLN);
        };
        var hs_sat26DQLS = new $hs.Func(1);
        hs_sat26DQLS.evaluate = function (hs_c26DQBa) {
            var hs_sat26DQLQ = new $hs.Thunk();
            hs_sat26DQLQ.evaluateOnce = function () {
                return hs_valDig25s3Bb.hscall(hs_zddNum126DQB6, hs_base26DQB7, hs_c26DQBa);
            };
            var hs_sat26DQLR = new $hs.Thunk();
            hs_sat26DQLR.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_const.hscall($hs.modules.GHCziBool.hs_True);
            };
            return $hs.modules.DataziMaybe.hs_maybe.hscall($hs.modules.GHCziBool.hs_False, hs_sat26DQLR, hs_sat26DQLQ);
        };
        return $hs.modules.TextziReadziLex.hs_readIntP.hscall(hs_zddNum126DQB6, hs_base26DQB7, hs_sat26DQLS, hs_sat26DQLP);
    };
    this.hs_readOctP.evaluate = function (hs_zddNum126DQBj) {
        var hs_sat26DQLU = new $hs.Thunk();
        hs_sat26DQLU.evaluateOnce = function () {
            var hs_sat26DQLT = new $hs.Thunk();
            hs_sat26DQLT.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(8);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum126DQBj, hs_sat26DQLT);
        };
        return hs_readIntPzq25s3Bh.hscall(hs_zddNum126DQBj, hs_sat26DQLU);
    };
    this.hs_readDecP.evaluate = function (hs_zddNum126DQBn) {
        var hs_sat26DQLW = new $hs.Thunk();
        hs_sat26DQLW.evaluateOnce = function () {
            var hs_sat26DQLV = new $hs.Thunk();
            hs_sat26DQLV.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(10);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum126DQBn, hs_sat26DQLV);
        };
        return hs_readIntPzq25s3Bh.hscall(hs_zddNum126DQBn, hs_sat26DQLW);
    };
    this.hs_readHexP.evaluate = function (hs_zddNum126DQBr) {
        var hs_sat26DQLY = new $hs.Thunk();
        hs_sat26DQLY.evaluateOnce = function () {
            var hs_sat26DQLX = new $hs.Thunk();
            hs_sat26DQLX.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(16);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum126DQBr, hs_sat26DQLX);
        };
        return hs_readIntPzq25s3Bh.hscall(hs_zddNum126DQBr, hs_sat26DQLY);
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
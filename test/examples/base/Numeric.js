
$hs.modules.Numeric = new $hs.Module();
$hs.modules.Numeric.dependencies = ["GHC.Prim", "GHC.Types", "GHC.CString", "GHC.Integer", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Float", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.Read", "Text.ParserCombinators.ReadP", "Text.Read.Lex"];
$hs.modules.Numeric.initBeforeDependencies = function () {
    this.hs_showIntAtBase = new $hs.Func(5);
    this.hs_showHex = new $hs.Func(1);
    this.hs_showOct = new $hs.Func(1);
    this.hs_showInt = new $hs.Func(3);
    this.hs_readSigned = new $hs.Func(2);
    this.hs_readFloat = new $hs.Func(1);
    this.hs_readHex = new $hs.Func(1);
    this.hs_readDec = new $hs.Func(1);
    this.hs_readOct = new $hs.Func(1);
    this.hs_readInt = new $hs.Func(4);
    this.hs_showEFloat = new $hs.Func(3);
    this.hs_showFFloat = new $hs.Func(3);
    this.hs_showGFloat = new $hs.Func(3);
    this.hs_showIntAtBase.notEvaluated = true;
    this.hs_showIntAtBase.evaluate = function (hs_zddIntegral26DnLP, hs_eta26DnLX, hs_eta126DnMe, hs_eta226DnM1, hs_eta326DnMw) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddIntegral26DnLP, hs_eta26DnLX, hs_eta126DnMe, hs_eta226DnM1, hs_eta326DnMw);
    };
    this.hs_showHex.notEvaluated = true;
    this.hs_showHex.evaluate = function (hs_zddIntegral26DnMG) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddIntegral26DnMG);
    };
    this.hs_showOct.notEvaluated = true;
    this.hs_showOct.evaluate = function (hs_zddIntegral26DnMM) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddIntegral26DnMM);
    };
    this.hs_showInt.notEvaluated = true;
    this.hs_showInt.evaluate = function (hs_zddIntegral26DnMV, hs_eta26DnMY, hs_eta126DnNL) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddIntegral26DnMV, hs_eta26DnMY, hs_eta126DnNL);
    };
    this.hs_readSigned.notEvaluated = true;
    this.hs_readSigned.evaluate = function (hs_zddReal26DnNQ, hs_eta26DnO2) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddReal26DnNQ, hs_eta26DnO2);
    };
    this.hs_readFloat.notEvaluated = true;
    this.hs_readFloat.evaluate = function (hs_zddRealFrac26DnP2) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddRealFrac26DnP2);
    };
    this.hs_readHex.notEvaluated = true;
    this.hs_readHex.evaluate = function (hs_zddNum26DnPi) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddNum26DnPi);
    };
    this.hs_readDec.notEvaluated = true;
    this.hs_readDec.evaluate = function (hs_zddNum26DnPl) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddNum26DnPl);
    };
    this.hs_readOct.notEvaluated = true;
    this.hs_readOct.evaluate = function (hs_zddNum26DnPo) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddNum26DnPo);
    };
    this.hs_readInt.notEvaluated = true;
    this.hs_readInt.evaluate = function (hs_zddNum26DnPu, hs_base26DnPv, hs_isDigit26DnPw, hs_valDigit26DnPx) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddNum26DnPu, hs_base26DnPv, hs_isDigit26DnPw, hs_valDigit26DnPx);
    };
    this.hs_showEFloat.notEvaluated = true;
    this.hs_showEFloat.evaluate = function (hs_zddRealFloat26DnPO, hs_d26DnPP, hs_x26DnPQ) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddRealFloat26DnPO, hs_d26DnPP, hs_x26DnPQ);
    };
    this.hs_showFFloat.notEvaluated = true;
    this.hs_showFFloat.evaluate = function (hs_zddRealFloat26DnQ7, hs_d26DnQ8, hs_x26DnQ9) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddRealFloat26DnQ7, hs_d26DnQ8, hs_x26DnQ9);
    };
    this.hs_showGFloat.notEvaluated = true;
    this.hs_showGFloat.evaluate = function (hs_zddRealFloat26DnQq, hs_d26DnQr, hs_x26DnQs) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddRealFloat26DnQq, hs_d26DnQr, hs_x26DnQs);
    };
};
$hs.modules.Numeric.initAfterDependencies = function () {
    this.hs_showIntAtBase.notEvaluated = false;
    this.hs_showHex.notEvaluated = false;
    this.hs_showOct.notEvaluated = false;
    this.hs_showInt.notEvaluated = false;
    this.hs_readSigned.notEvaluated = false;
    this.hs_readFloat.notEvaluated = false;
    this.hs_readHex.notEvaluated = false;
    this.hs_readDec.notEvaluated = false;
    this.hs_readOct.notEvaluated = false;
    this.hs_readInt.notEvaluated = false;
    this.hs_showEFloat.notEvaluated = false;
    this.hs_showFFloat.notEvaluated = false;
    this.hs_showGFloat.notEvaluated = false;
    var hs_showEFloat125uZjj = new $hs.Func(2);
    var hs_showEFloat225uZjp = new $hs.Func(2);
    var hs_showFFloat125uZjC = new $hs.Func(2);
    var hs_showFFloat225uZjI = new $hs.Func(2);
    var hs_showGFloat125uZjV = new $hs.Func(2);
    var hs_showGFloat225uZk1 = new $hs.Func(2);
    this.hs_showIntAtBase.evaluate = function (hs_zddIntegral26DnLP, hs_eta26DnLX, hs_eta126DnMe, hs_eta226DnM1, hs_eta326DnMw) {
        var hs_zddReal26DnLQ = new $hs.Thunk();
        hs_zddReal26DnLQ.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DnLP);
        };
        var hs_zddNum26DnLS = new $hs.Thunk();
        hs_zddNum26DnLS.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal26DnLQ);
        };
        var hs_zddOrd26DnLU = new $hs.Thunk();
        hs_zddOrd26DnLU.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal26DnLQ);
        };
        var hs_zddEq26DnLW = new $hs.Thunk();
        hs_zddEq26DnLW.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26DnLU);
        };
        var hs_sat26DnQu = new $hs.Thunk();
        hs_sat26DnQu.evaluateOnce = function () {
            var hs_sat26DnQT = new $hs.Thunk();
            hs_sat26DnQT.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DnLS, hs_sat26DnQT);
        };
        var hs_wild26DnQv = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd26DnLU, hs_eta26DnLX, hs_sat26DnQu);
        switch (hs_wild26DnQv.tag) {
        case 1:
            var hs_sat26DnQA = new $hs.Thunk();
            hs_sat26DnQA.evaluateOnce = function () {
                var hs_sat26DnQS = new $hs.Thunk();
                hs_sat26DnQS.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DnLS, hs_sat26DnQS);
            };
            var hs_wild126DnQB = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd26DnLU, hs_eta226DnM1, hs_sat26DnQA);
            switch (hs_wild126DnQB.tag) {
            case 1:
                var hs_showIt26DnMq = new $hs.Func(2);
                hs_showIt26DnMq.evaluate = function (hs_ds26DnM8, hs_r26DnMs) {
                    var hs_wild226DnQI = hs_ds26DnM8;
                    if (hs_ds26DnM8.notEvaluated) {
                        hs_wild226DnQI = hs_ds26DnM8.hscall();
                    }
                    var hs_n26DnMm = hs_wild226DnQI.data[0];
                    var hs_d26DnMd = hs_wild226DnQI.data[1];
                    var hs_c26DnMg = new $hs.Thunk();
                    hs_c26DnMg.evaluateOnce = function () {
                        var hs_sat26DnQR = new $hs.Thunk();
                        hs_sat26DnQR.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall(hs_zddIntegral26DnLP, $hs.modules.GHCziNum.hs_zdfNumInt, hs_d26DnMd);
                        };
                        return hs_eta126DnMe.hscall(hs_sat26DnQR);
                    };
                    var hs_sat26DnQJ = new $hs.Thunk();
                    hs_sat26DnQJ.evaluateOnce = function () {
                        var hs_sat26DnQM = new $hs.Thunk();
                        hs_sat26DnQM.evaluateOnce = function () {
                            var hs_sat26DnQQ = new $hs.Thunk();
                            hs_sat26DnQQ.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DnLS, hs_sat26DnQQ);
                        };
                        var hs_wild326DnQN = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DnLW, hs_n26DnMm, hs_sat26DnQM);
                        switch (hs_wild326DnQN.tag) {
                        case 1:
                            var hs_sat26DnQP = new $hs.Data(2);
                            hs_sat26DnQP.data = [hs_c26DnMg, hs_r26DnMs];
                            var hs_sat26DnQO = new $hs.Thunk();
                            hs_sat26DnQO.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_quotRem.hscall(hs_zddIntegral26DnLP, hs_n26DnMm, hs_eta26DnLX);
                            };
                            return hs_showIt26DnMq.hscall(hs_sat26DnQO, hs_sat26DnQP);
                        case 2:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_c26DnMg, hs_r26DnMs];
                            return $res;
                        }
                    };
                    var hs_sat26DnQH = new $hs.Func(1);
                    hs_sat26DnQH.evaluate = function (hs_tpl26DnMk) {
                        var hs_tpl126DnQL = hs_c26DnMg;
                        if (hs_c26DnMg.notEvaluated) {
                            hs_tpl126DnQL = hs_c26DnMg.hscall();
                        }
                        if (hs_tpl26DnMk.notEvaluated) {
                            return hs_tpl26DnMk.hscall();
                        } else {
                            return hs_tpl26DnMk;
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DnQH, hs_sat26DnQJ);
                };
                var hs_sat26DnQG = new $hs.Thunk();
                hs_sat26DnQG.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_quotRem.hscall(hs_zddIntegral26DnLP, hs_eta226DnM1, hs_eta26DnLX);
                };
                return hs_showIt26DnMq.hscall(hs_sat26DnQG, hs_eta326DnMw);
            case 2:
                var hs_sat26DnQC = new $hs.Thunk();
                hs_sat26DnQC.evaluateOnce = function () {
                    var hs_sat26DnQF = $hs.modules.GHCziNum.hs_zdp2Num.hscall(hs_zddNum26DnLS);
                    return $hs.modules.GHCziShow.hs_show.hscall(hs_sat26DnQF, hs_eta226DnM1);
                };
                var hs_sat26DnQD = new $hs.Thunk();
                hs_sat26DnQD.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Numeric.showIntAtBase: applied to negative number \x00");
                };
                var hs_sat26DnQE = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DnQD, hs_sat26DnQC);
                return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DnQE);
            }
        case 2:
            var hs_sat26DnQw = new $hs.Thunk();
            hs_sat26DnQw.evaluateOnce = function () {
                var hs_sat26DnQz = $hs.modules.GHCziNum.hs_zdp2Num.hscall(hs_zddNum26DnLS);
                return $hs.modules.GHCziShow.hs_show.hscall(hs_sat26DnQz, hs_eta26DnLX);
            };
            var hs_sat26DnQx = new $hs.Thunk();
            hs_sat26DnQx.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Numeric.showIntAtBase: applied to unsupported base \x00");
            };
            var hs_sat26DnQy = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DnQx, hs_sat26DnQw);
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DnQy);
        }
    };
    this.hs_showHex.evaluate = function (hs_zddIntegral26DnMG) {
        var hs_sat26DnQU = new $hs.Thunk();
        hs_sat26DnQU.evaluateOnce = function () {
            var hs_sat26DnQV = new $hs.Thunk();
            hs_sat26DnQV.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(16);
            };
            var hs_sat26DnQW = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DnMG);
            var hs_sat26DnQX = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26DnQW);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26DnQX, hs_sat26DnQV);
        };
        return $hs.modules.Numeric.hs_showIntAtBase.hscall(hs_zddIntegral26DnMG, hs_sat26DnQU, $hs.modules.GHCziShow.hs_intToDigit);
    };
    this.hs_showOct.evaluate = function (hs_zddIntegral26DnMM) {
        var hs_sat26DnQY = new $hs.Thunk();
        hs_sat26DnQY.evaluateOnce = function () {
            var hs_sat26DnQZ = new $hs.Thunk();
            hs_sat26DnQZ.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(8);
            };
            var hs_sat26DnR0 = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DnMM);
            var hs_sat26DnR1 = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26DnR0);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26DnR1, hs_sat26DnQZ);
        };
        return $hs.modules.Numeric.hs_showIntAtBase.hscall(hs_zddIntegral26DnMM, hs_sat26DnQY, $hs.modules.GHCziShow.hs_intToDigit);
    };
    this.hs_showInt.evaluate = function (hs_zddIntegral26DnMV, hs_eta26DnMY, hs_eta126DnNL) {
        var hs_zddReal26DnMW = new $hs.Thunk();
        hs_zddReal26DnMW.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DnMV);
        };
        var hs_sat26DnR2 = new $hs.Thunk();
        hs_sat26DnR2.evaluateOnce = function () {
            var hs_sat26DnRs = new $hs.Thunk();
            hs_sat26DnRs.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            var hs_sat26DnRt = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal26DnMW);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26DnRt, hs_sat26DnRs);
        };
        var hs_sat26DnR3 = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal26DnMW);
        var hs_wild26DnR4 = $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26DnR3, hs_eta26DnMY, hs_sat26DnR2);
        switch (hs_wild26DnR4.tag) {
        case 1:
            var hs_zddReal126DnN4 = new $hs.Thunk();
            hs_zddReal126DnN4.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DnMV);
            };
            var hs_zddNum26DnN6 = new $hs.Thunk();
            hs_zddNum26DnN6.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal126DnN4);
            };
            var hs_zddOrd26DnN8 = new $hs.Thunk();
            hs_zddOrd26DnN8.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal126DnN4);
            };
            var hs_go26DnNz = new $hs.Func(2);
            hs_go26DnNz.evaluate = function (hs_n26DnNd, hs_cs26DnNC) {
                var hs_ds26DnNg = new $hs.Thunk();
                hs_ds26DnNg.evaluateOnce = function () {
                    var hs_sat26DnRq = new $hs.Thunk();
                    hs_sat26DnRq.evaluateOnce = function () {
                        var hs_sat26DnRr = new $hs.Thunk();
                        hs_sat26DnRr.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(10);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DnN6, hs_sat26DnRr);
                    };
                    return $hs.modules.GHCziReal.hs_quotRem.hscall(hs_zddIntegral26DnMV, hs_n26DnNd, hs_sat26DnRq);
                };
                var hs_sat26DnR7 = new $hs.Thunk();
                hs_sat26DnR7.evaluateOnce = function () {
                    var hs_sat26DnRp = new $hs.Thunk();
                    hs_sat26DnRp.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(10);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DnN6, hs_sat26DnRp);
                };
                var hs_wild126DnR8 = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd26DnN8, hs_n26DnNd, hs_sat26DnR7);
                switch (hs_wild126DnR8.tag) {
                case 1:
                    var hs_sat26DnRh = new $hs.Thunk();
                    hs_sat26DnRh.evaluateOnce = function () {
                        var hs_sat26DnRk = new $hs.Thunk();
                        hs_sat26DnRk.evaluateOnce = function () {
                            var hs_sat26DnRm = new $hs.Thunk();
                            hs_sat26DnRm.evaluateOnce = function () {
                                var hs_wild226DnRo = hs_ds26DnNg;
                                if (hs_ds26DnNg.notEvaluated) {
                                    hs_wild226DnRo = hs_ds26DnNg.hscall();
                                }
                                var hs_r26DnNp = hs_wild226DnRo.data[1];
                                if (hs_r26DnNp.notEvaluated) {
                                    return hs_r26DnNp.hscall();
                                } else {
                                    return hs_r26DnNp;
                                }
                            };
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall(hs_zddIntegral26DnMV, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DnRm);
                        };
                        var hs_sat26DnRj = new $hs.Thunk();
                        hs_sat26DnRj.evaluateOnce = function () {
                            var hs_sat26DnRl = new $hs.Data(1);
                            hs_sat26DnRl.data = ["0"];
                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26DnRl);
                        };
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DnRj, hs_sat26DnRk);
                    };
                    var hs_wild226DnNB = $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26DnRh);
                    var hs_sat26DnRe = new $hs.Data(2);
                    hs_sat26DnRe.data = [hs_wild226DnNB, hs_cs26DnNC];
                    var hs_sat26DnRd = new $hs.Thunk();
                    hs_sat26DnRd.evaluateOnce = function () {
                        var hs_wild326DnRg = hs_ds26DnNg;
                        if (hs_ds26DnNg.notEvaluated) {
                            hs_wild326DnRg = hs_ds26DnNg.hscall();
                        }
                        var hs_q26DnNy = hs_wild326DnRg.data[0];
                        if (hs_q26DnNy.notEvaluated) {
                            return hs_q26DnNy.hscall();
                        } else {
                            return hs_q26DnNy;
                        }
                    };
                    return hs_go26DnNz.hscall(hs_sat26DnRd, hs_sat26DnRe);
                case 2:
                    var hs_sat26DnR9 = new $hs.Thunk();
                    hs_sat26DnR9.evaluateOnce = function () {
                        var hs_sat26DnRb = new $hs.Thunk();
                        hs_sat26DnRb.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall(hs_zddIntegral26DnMV, $hs.modules.GHCziNum.hs_zdfNumInt, hs_n26DnNd);
                        };
                        var hs_sat26DnRa = new $hs.Thunk();
                        hs_sat26DnRa.evaluateOnce = function () {
                            var hs_sat26DnRc = new $hs.Data(1);
                            hs_sat26DnRc.data = ["0"];
                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26DnRc);
                        };
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DnRa, hs_sat26DnRb);
                    };
                    var hs_wild226DnNK = $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26DnR9);
                    var $res = new $hs.Data(2);
                    $res.data = [hs_wild226DnNK, hs_cs26DnNC];
                    return $res;
                }
            };
            return hs_go26DnNz.hscall(hs_eta26DnMY, hs_eta126DnNL);
        case 2:
            var hs_sat26DnR5 = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Numeric.showInt: can't show negative numbers\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DnR5);
        }
    };
    this.hs_readSigned.evaluate = function (hs_zddReal26DnNQ, hs_eta26DnO2) {
        var hs_zddNum26DnNR = new $hs.Thunk();
        hs_zddNum26DnNR.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal26DnNQ);
        };
        var hs_readzqzq26DnOj = new $hs.Func(1);
        hs_readzqzq26DnOj.evaluate = function (hs_r26DnNU) {
            var hs_sat26DnRN = new $hs.Func(1);
            hs_sat26DnRN.evaluate = function (hs_ds26DnNX) {
                var hs_wild26DnRP = hs_ds26DnNX;
                if (hs_ds26DnNX.notEvaluated) {
                    hs_wild26DnRP = hs_ds26DnNX.hscall();
                }
                var hs_str26DnO1 = hs_wild26DnRP.data[0];
                var hs_s26DnOc = hs_wild26DnRP.data[1];
                var hs_sat26DnRQ = new $hs.Func(1);
                hs_sat26DnRQ.evaluate = function (hs_ds126DnO5) {
                    var hs_wild126DnRV = hs_ds126DnO5;
                    if (hs_ds126DnO5.notEvaluated) {
                        hs_wild126DnRV = hs_ds126DnO5.hscall();
                    }
                    var hs_n26DnOb = hs_wild126DnRV.data[0];
                    var hs_ds226DnO9 = hs_wild126DnRV.data[1];
                    var hs_wild226DnRS = hs_ds226DnO9;
                    if (hs_ds226DnO9.notEvaluated) {
                        hs_wild226DnRS = hs_ds226DnO9.hscall();
                    }
                    switch (hs_wild226DnRS.tag) {
                    case 1:
                        var hs_sat26DnRW = new $hs.Data(1);
                        hs_sat26DnRW.data = [hs_n26DnOb, hs_s26DnOc];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26DnRW);
                    case 2:
                        var hs_sat26DnRR = new $hs.Thunk();
                        hs_sat26DnRR.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/Numeric.hs:132:32-37\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26DnRR);
                    }
                };
                var hs_sat26DnRO = new $hs.Thunk();
                hs_sat26DnRO.evaluateOnce = function () {
                    return hs_eta26DnO2.hscall(hs_str26DnO1);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26DnRO, hs_sat26DnRQ);
            };
            var hs_sat26DnRM = new $hs.Thunk();
            hs_sat26DnRM.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_lex.hscall(hs_r26DnNU);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26DnRM, hs_sat26DnRN);
        };
        var hs_sat26DnRu = new $hs.Func(1);
        hs_sat26DnRu.evaluate = function (hs_r26DnOl) {
            var hs_sat26DnRw = new $hs.Thunk();
            hs_sat26DnRw.evaluateOnce = function () {
                var hs_sat26DnRy = new $hs.Func(1);
                hs_sat26DnRy.evaluate = function (hs_ds26DnOu) {
                    var hs_fail26DnOt = new $hs.Func(1);
                    hs_fail26DnOt.evaluate = function (hs_ds126DnOs) {
                        var hs_sat26DnRL = new $hs.Thunk();
                        hs_sat26DnRL.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/Numeric.hs:127:41-47\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26DnRL);
                    };
                    var hs_wild26DnRF = hs_ds26DnOu;
                    if (hs_ds26DnOu.notEvaluated) {
                        hs_wild26DnRF = hs_ds26DnOu.hscall();
                    }
                    var hs_ds126DnOy = hs_wild26DnRF.data[0];
                    var hs_s26DnOJ = hs_wild26DnRF.data[1];
                    var hs_wild126DnRE = hs_ds126DnOy;
                    if (hs_ds126DnOy.notEvaluated) {
                        hs_wild126DnRE = hs_ds126DnOy.hscall();
                    }
                    switch (hs_wild126DnRE.tag) {
                    case 1:
                        return hs_fail26DnOt.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    case 2:
                        var hs_ds226DnOC = hs_wild126DnRE.data[0];
                        var hs_ds326DnOH = hs_wild126DnRE.data[1];
                        var hs_wild226DnRD = hs_ds226DnOC;
                        if (hs_ds226DnOC.notEvaluated) {
                            hs_wild226DnRD = hs_ds226DnOC.hscall();
                        }
                        var hs_ds426DnOF = hs_wild226DnRD.data[0];
                        var hs_ds526DnRC = hs_ds426DnOF;
                        if (hs_ds426DnOF.notEvaluated) {
                            hs_ds526DnRC = hs_ds426DnOF.hscall();
                        }
                        switch (hs_ds526DnRC) {
                        case "-":
                            var hs_wild326DnRB = hs_ds326DnOH;
                            if (hs_ds326DnOH.notEvaluated) {
                                hs_wild326DnRB = hs_ds326DnOH.hscall();
                            }
                            switch (hs_wild326DnRB.tag) {
                            case 1:
                                var hs_sat26DnRH = new $hs.Func(1);
                                hs_sat26DnRH.evaluate = function (hs_ds626DnOM) {
                                    var hs_wild426DnRJ = hs_ds626DnOM;
                                    if (hs_ds626DnOM.notEvaluated) {
                                        hs_wild426DnRJ = hs_ds626DnOM.hscall();
                                    }
                                    var hs_x26DnOQ = hs_wild426DnRJ.data[0];
                                    var hs_t26DnOS = hs_wild426DnRJ.data[1];
                                    var hs_sat26DnRK = new $hs.Thunk();
                                    hs_sat26DnRK.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26DnNR, hs_x26DnOQ);
                                    };
                                    var hs_sat26DnRI = new $hs.Data(1);
                                    hs_sat26DnRI.data = [hs_sat26DnRK, hs_t26DnOS];
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26DnRI);
                                };
                                var hs_sat26DnRG = new $hs.Thunk();
                                hs_sat26DnRG.evaluateOnce = function () {
                                    return hs_readzqzq26DnOj.hscall(hs_s26DnOJ);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26DnRG, hs_sat26DnRH);
                            case 2:
                                return hs_fail26DnOt.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            }
                        default:
                            return hs_fail26DnOt.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        }
                    }
                };
                var hs_sat26DnRx = new $hs.Thunk();
                hs_sat26DnRx.evaluateOnce = function () {
                    return $hs.modules.GHCziRead.hs_lex.hscall(hs_r26DnOl);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26DnRx, hs_sat26DnRy);
            };
            var hs_sat26DnRv = new $hs.Thunk();
            hs_sat26DnRv.evaluateOnce = function () {
                return hs_readzqzq26DnOj.hscall(hs_r26DnOl);
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DnRv, hs_sat26DnRw);
        };
        return $hs.modules.GHCziRead.hs_readParen.hscall($hs.modules.GHCziTypes.hs_False, hs_sat26DnRu);
    };
    this.hs_readFloat.evaluate = function (hs_zddRealFrac26DnP2) {
        var hs_sat26DnRX = new $hs.Thunk();
        hs_sat26DnRX.evaluateOnce = function () {
            var hs_zddFractional26DnP3 = new $hs.Thunk();
            hs_zddFractional26DnP3.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp2RealFrac.hscall(hs_zddRealFrac26DnP2);
            };
            var hs_zddNum26DnP5 = new $hs.Thunk();
            hs_zddNum26DnP5.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional26DnP3);
            };
            var hs_sat26DnRY = new $hs.Func(1);
            hs_sat26DnRY.evaluate = function (hs_tok26DnP7) {
                var hs_wild26DnS0 = hs_tok26DnP7;
                if (hs_tok26DnP7.notEvaluated) {
                    hs_wild26DnS0 = hs_tok26DnP7.hscall();
                }
                switch (hs_wild26DnS0.tag) {
                case 6:
                    var hs_i26DnPa = hs_wild26DnS0.data[0];
                    var hs_sat26DnRZ = new $hs.Thunk();
                    hs_sat26DnRZ.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DnP5, hs_i26DnPa);
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DnRZ);
                case 7:
                    var hs_y26DnPd = hs_wild26DnS0.data[0];
                    var hs_sat26DnS1 = new $hs.Thunk();
                    hs_sat26DnS1.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromRational.hscall(hs_zddFractional26DnP3, hs_y26DnPd);
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DnS1);
                default:
                    if ($hs.modules.TextziParserCombinatorsziReadP.hs_pfail.notEvaluated) {
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail.hscall();
                    } else {
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail;
                    }
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziReadziLex.hs_lex, hs_sat26DnRY);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_readPzutozuS.hscall(hs_sat26DnRX);
    };
    this.hs_readHex.evaluate = function (hs_zddNum26DnPi) {
        var hs_sat26DnS2 = new $hs.Thunk();
        hs_sat26DnS2.evaluateOnce = function () {
            return $hs.modules.TextziReadziLex.hs_readHexP.hscall(hs_zddNum26DnPi);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_readPzutozuS.hscall(hs_sat26DnS2);
    };
    this.hs_readDec.evaluate = function (hs_zddNum26DnPl) {
        var hs_sat26DnS3 = new $hs.Thunk();
        hs_sat26DnS3.evaluateOnce = function () {
            return $hs.modules.TextziReadziLex.hs_readDecP.hscall(hs_zddNum26DnPl);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_readPzutozuS.hscall(hs_sat26DnS3);
    };
    this.hs_readOct.evaluate = function (hs_zddNum26DnPo) {
        var hs_sat26DnS4 = new $hs.Thunk();
        hs_sat26DnS4.evaluateOnce = function () {
            return $hs.modules.TextziReadziLex.hs_readOctP.hscall(hs_zddNum26DnPo);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_readPzutozuS.hscall(hs_sat26DnS4);
    };
    this.hs_readInt.evaluate = function (hs_zddNum26DnPu, hs_base26DnPv, hs_isDigit26DnPw, hs_valDigit26DnPx) {
        var hs_sat26DnS5 = new $hs.Thunk();
        hs_sat26DnS5.evaluateOnce = function () {
            return $hs.modules.TextziReadziLex.hs_readIntP.hscall(hs_zddNum26DnPu, hs_base26DnPv, hs_isDigit26DnPw, hs_valDigit26DnPx);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_readPzutozuS.hscall(hs_sat26DnS5);
    };
    hs_showEFloat125uZjj.evaluate = function (hs_d26DnPC, hs_x26DnPD) {
        var hs_sat26DnS6 = new $hs.Thunk();
        hs_sat26DnS6.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_formatRealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, $hs.modules.GHCziFloat.hs_FFExponent, hs_d26DnPC, hs_x26DnPD);
        };
        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DnS6);
    };
    hs_showEFloat225uZjp.evaluate = function (hs_d26DnPI, hs_x26DnPJ) {
        var hs_sat26DnS7 = new $hs.Thunk();
        hs_sat26DnS7.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_formatRealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, $hs.modules.GHCziFloat.hs_FFExponent, hs_d26DnPI, hs_x26DnPJ);
        };
        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DnS7);
    };
    this.hs_showEFloat.evaluate = function (hs_zddRealFloat26DnPO, hs_d26DnPP, hs_x26DnPQ) {
        var hs_sat26DnS8 = new $hs.Thunk();
        hs_sat26DnS8.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_formatRealFloat.hscall(hs_zddRealFloat26DnPO, $hs.modules.GHCziFloat.hs_FFExponent, hs_d26DnPP, hs_x26DnPQ);
        };
        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DnS8);
    };
    hs_showFFloat125uZjC.evaluate = function (hs_d26DnPV, hs_x26DnPW) {
        var hs_sat26DnS9 = new $hs.Thunk();
        hs_sat26DnS9.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_formatRealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, $hs.modules.GHCziFloat.hs_FFFixed, hs_d26DnPV, hs_x26DnPW);
        };
        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DnS9);
    };
    hs_showFFloat225uZjI.evaluate = function (hs_d26DnQ1, hs_x26DnQ2) {
        var hs_sat26DnSa = new $hs.Thunk();
        hs_sat26DnSa.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_formatRealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, $hs.modules.GHCziFloat.hs_FFFixed, hs_d26DnQ1, hs_x26DnQ2);
        };
        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DnSa);
    };
    this.hs_showFFloat.evaluate = function (hs_zddRealFloat26DnQ7, hs_d26DnQ8, hs_x26DnQ9) {
        var hs_sat26DnSb = new $hs.Thunk();
        hs_sat26DnSb.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_formatRealFloat.hscall(hs_zddRealFloat26DnQ7, $hs.modules.GHCziFloat.hs_FFFixed, hs_d26DnQ8, hs_x26DnQ9);
        };
        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DnSb);
    };
    hs_showGFloat125uZjV.evaluate = function (hs_d26DnQe, hs_x26DnQf) {
        var hs_sat26DnSc = new $hs.Thunk();
        hs_sat26DnSc.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_formatRealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, $hs.modules.GHCziFloat.hs_FFGeneric, hs_d26DnQe, hs_x26DnQf);
        };
        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DnSc);
    };
    hs_showGFloat225uZk1.evaluate = function (hs_d26DnQk, hs_x26DnQl) {
        var hs_sat26DnSd = new $hs.Thunk();
        hs_sat26DnSd.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_formatRealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, $hs.modules.GHCziFloat.hs_FFGeneric, hs_d26DnQk, hs_x26DnQl);
        };
        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DnSd);
    };
    this.hs_showGFloat.evaluate = function (hs_zddRealFloat26DnQq, hs_d26DnQr, hs_x26DnQs) {
        var hs_sat26DnSe = new $hs.Thunk();
        hs_sat26DnSe.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_formatRealFloat.hscall(hs_zddRealFloat26DnQq, $hs.modules.GHCziFloat.hs_FFGeneric, hs_d26DnQr, hs_x26DnQs);
        };
        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DnSe);
    };
};
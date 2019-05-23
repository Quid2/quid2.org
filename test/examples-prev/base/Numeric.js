
$hs.modules.Numeric = new $hs.Module();
$hs.modules.Numeric.dependencies = ["GHC.Prim", "GHC.Bool", "GHC.Integer", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Float", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.Read", "Text.ParserCombinators.ReadP", "Text.Read.Lex"];
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
    this.hs_showIntAtBase.evaluate = function (hs_zddIntegral26DMtn, hs_eta26DMtv, hs_eta126DMtM, hs_eta226DMtz, hs_eta326DMu4) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddIntegral26DMtn, hs_eta26DMtv, hs_eta126DMtM, hs_eta226DMtz, hs_eta326DMu4);
    };
    this.hs_showHex.notEvaluated = true;
    this.hs_showHex.evaluate = function (hs_zddIntegral26DMue) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddIntegral26DMue);
    };
    this.hs_showOct.notEvaluated = true;
    this.hs_showOct.evaluate = function (hs_zddIntegral26DMuk) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddIntegral26DMuk);
    };
    this.hs_showInt.notEvaluated = true;
    this.hs_showInt.evaluate = function (hs_zddIntegral26DMut, hs_eta26DMuw, hs_eta126DMvj) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddIntegral26DMut, hs_eta26DMuw, hs_eta126DMvj);
    };
    this.hs_readSigned.notEvaluated = true;
    this.hs_readSigned.evaluate = function (hs_zddReal26DMvo, hs_eta26DMvA) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddReal26DMvo, hs_eta26DMvA);
    };
    this.hs_readFloat.notEvaluated = true;
    this.hs_readFloat.evaluate = function (hs_zddRealFrac26DMwA) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddRealFrac26DMwA);
    };
    this.hs_readHex.notEvaluated = true;
    this.hs_readHex.evaluate = function (hs_zddNum26DMwS) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddNum26DMwS);
    };
    this.hs_readDec.notEvaluated = true;
    this.hs_readDec.evaluate = function (hs_zddNum26DMwV) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddNum26DMwV);
    };
    this.hs_readOct.notEvaluated = true;
    this.hs_readOct.evaluate = function (hs_zddNum26DMwY) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddNum26DMwY);
    };
    this.hs_readInt.notEvaluated = true;
    this.hs_readInt.evaluate = function (hs_zddNum26DMx4, hs_base26DMx5, hs_isDigit26DMx6, hs_valDigit26DMx7) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddNum26DMx4, hs_base26DMx5, hs_isDigit26DMx6, hs_valDigit26DMx7);
    };
    this.hs_showEFloat.notEvaluated = true;
    this.hs_showEFloat.evaluate = function (hs_zddRealFloat26DMxq, hs_d26DMxr, hs_x26DMxs) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddRealFloat26DMxq, hs_d26DMxr, hs_x26DMxs);
    };
    this.hs_showFFloat.notEvaluated = true;
    this.hs_showFFloat.evaluate = function (hs_zddRealFloat26DMxL, hs_d26DMxM, hs_x26DMxN) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddRealFloat26DMxL, hs_d26DMxM, hs_x26DMxN);
    };
    this.hs_showGFloat.notEvaluated = true;
    this.hs_showGFloat.evaluate = function (hs_zddRealFloat26DMy6, hs_d26DMy7, hs_x26DMy8) {
        $hs.modules.Numeric.loadDependencies();
        return this.evaluate(hs_zddRealFloat26DMy6, hs_d26DMy7, hs_x26DMy8);
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
    var hs_showEFloat125vo0U = new $hs.Func(2);
    var hs_showEFloat225vo11 = new $hs.Func(2);
    var hs_showFFloat125vo1f = new $hs.Func(2);
    var hs_showFFloat225vo1m = new $hs.Func(2);
    var hs_showGFloat125vo1A = new $hs.Func(2);
    var hs_showGFloat225vo1H = new $hs.Func(2);
    this.hs_showIntAtBase.evaluate = function (hs_zddIntegral26DMtn, hs_eta26DMtv, hs_eta126DMtM, hs_eta226DMtz, hs_eta326DMu4) {
        var hs_zddReal26DMto = new $hs.Thunk();
        hs_zddReal26DMto.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DMtn);
        };
        var hs_zddNum26DMtq = new $hs.Thunk();
        hs_zddNum26DMtq.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal26DMto);
        };
        var hs_zddOrd26DMts = new $hs.Thunk();
        hs_zddOrd26DMts.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal26DMto);
        };
        var hs_zddEq26DMtu = new $hs.Thunk();
        hs_zddEq26DMtu.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DMtq);
        };
        var hs_sat26DMyc = new $hs.Thunk();
        hs_sat26DMyc.evaluateOnce = function () {
            var hs_sat26DMya = new $hs.Thunk();
            hs_sat26DMya.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DMtq, hs_sat26DMya);
        };
        var hs_wild26DMyb = $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd26DMts, hs_eta26DMtv, hs_sat26DMyc);
        switch (hs_wild26DMyb.tag) {
        case 1:
            var hs_sat26DMyg = new $hs.Thunk();
            hs_sat26DMyg.evaluateOnce = function () {
                var hs_sat26DMyd = new $hs.Thunk();
                hs_sat26DMyd.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DMtq, hs_sat26DMyd);
            };
            var hs_wild126DMyf = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd26DMts, hs_eta226DMtz, hs_sat26DMyg);
            switch (hs_wild126DMyf.tag) {
            case 1:
                var hs_showIt26DMtY = new $hs.Func(2);
                hs_showIt26DMtY.evaluate = function (hs_ds26DMtG, hs_r26DMu0) {
                    var hs_wild226DMye = hs_ds26DMtG;
                    if (hs_ds26DMtG.notEvaluated) {
                        hs_wild226DMye = hs_ds26DMtG.hscall();
                    }
                    var hs_n26DMtU = hs_wild226DMye.data[0];
                    var hs_d26DMtL = hs_wild226DMye.data[1];
                    var hs_c26DMtO = new $hs.Thunk();
                    hs_c26DMtO.evaluateOnce = function () {
                        var hs_sat26DMyh = new $hs.Thunk();
                        hs_sat26DMyh.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall(hs_zddIntegral26DMtn, $hs.modules.GHCziNum.hs_zdfNumInt, hs_d26DMtL);
                        };
                        return hs_eta126DMtM.hscall(hs_sat26DMyh);
                    };
                    var hs_sat26DMyp = new $hs.Thunk();
                    hs_sat26DMyp.evaluateOnce = function () {
                        var hs_sat26DMyk = new $hs.Thunk();
                        hs_sat26DMyk.evaluateOnce = function () {
                            var hs_sat26DMyi = new $hs.Thunk();
                            hs_sat26DMyi.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DMtq, hs_sat26DMyi);
                        };
                        var hs_wild326DMyj = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DMtu, hs_n26DMtU, hs_sat26DMyk);
                        switch (hs_wild326DMyj.tag) {
                        case 1:
                            var hs_sat26DMyl = new $hs.Data(2);
                            hs_sat26DMyl.data = [hs_c26DMtO, hs_r26DMu0];
                            var hs_sat26DMym = new $hs.Thunk();
                            hs_sat26DMym.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_quotRem.hscall(hs_zddIntegral26DMtn, hs_n26DMtU, hs_eta26DMtv);
                            };
                            return hs_showIt26DMtY.hscall(hs_sat26DMym, hs_sat26DMyl);
                        case 2:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_c26DMtO, hs_r26DMu0];
                            return $res;
                        }
                    };
                    var hs_sat26DMyq = new $hs.Func(1);
                    hs_sat26DMyq.evaluate = function (hs_tpl26DMtS) {
                        var hs_tpl126DMyo = hs_c26DMtO;
                        if (hs_c26DMtO.notEvaluated) {
                            hs_tpl126DMyo = hs_c26DMtO.hscall();
                        }
                        if (hs_tpl26DMtS.notEvaluated) {
                            return hs_tpl26DMtS.hscall();
                        } else {
                            return hs_tpl26DMtS;
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DMyq, hs_sat26DMyp);
                };
                var hs_sat26DMyr = new $hs.Thunk();
                hs_sat26DMyr.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_quotRem.hscall(hs_zddIntegral26DMtn, hs_eta226DMtz, hs_eta26DMtv);
                };
                return hs_showIt26DMtY.hscall(hs_sat26DMyr, hs_eta326DMu4);
            case 2:
                var hs_sat26DMyt = new $hs.Thunk();
                hs_sat26DMyt.evaluateOnce = function () {
                    var hs_sat26DMys = $hs.modules.GHCziNum.hs_zdp2Num.hscall(hs_zddNum26DMtq);
                    return $hs.modules.GHCziShow.hs_show.hscall(hs_sat26DMys, hs_eta226DMtz);
                };
                var hs_sat26DMyv = new $hs.Thunk();
                hs_sat26DMyv.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Numeric.showIntAtBase: applied to negative number \x00");
                };
                var hs_sat26DMyu = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DMyv, hs_sat26DMyt);
                return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DMyu);
            }
        case 2:
            var hs_sat26DMyx = new $hs.Thunk();
            hs_sat26DMyx.evaluateOnce = function () {
                var hs_sat26DMyw = $hs.modules.GHCziNum.hs_zdp2Num.hscall(hs_zddNum26DMtq);
                return $hs.modules.GHCziShow.hs_show.hscall(hs_sat26DMyw, hs_eta26DMtv);
            };
            var hs_sat26DMyz = new $hs.Thunk();
            hs_sat26DMyz.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Numeric.showIntAtBase: applied to unsupported base \x00");
            };
            var hs_sat26DMyy = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DMyz, hs_sat26DMyx);
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DMyy);
        }
    };
    this.hs_showHex.evaluate = function (hs_zddIntegral26DMue) {
        var hs_sat26DMyD = new $hs.Thunk();
        hs_sat26DMyD.evaluateOnce = function () {
            var hs_sat26DMyA = new $hs.Thunk();
            hs_sat26DMyA.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(16);
            };
            var hs_sat26DMyC = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DMue);
            var hs_sat26DMyB = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26DMyC);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26DMyB, hs_sat26DMyA);
        };
        return $hs.modules.Numeric.hs_showIntAtBase.hscall(hs_zddIntegral26DMue, hs_sat26DMyD, $hs.modules.GHCziShow.hs_intToDigit);
    };
    this.hs_showOct.evaluate = function (hs_zddIntegral26DMuk) {
        var hs_sat26DMyH = new $hs.Thunk();
        hs_sat26DMyH.evaluateOnce = function () {
            var hs_sat26DMyE = new $hs.Thunk();
            hs_sat26DMyE.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(8);
            };
            var hs_sat26DMyG = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DMuk);
            var hs_sat26DMyF = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26DMyG);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26DMyF, hs_sat26DMyE);
        };
        return $hs.modules.Numeric.hs_showIntAtBase.hscall(hs_zddIntegral26DMuk, hs_sat26DMyH, $hs.modules.GHCziShow.hs_intToDigit);
    };
    this.hs_showInt.evaluate = function (hs_zddIntegral26DMut, hs_eta26DMuw, hs_eta126DMvj) {
        var hs_zddReal26DMuu = new $hs.Thunk();
        hs_zddReal26DMuu.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DMut);
        };
        var hs_sat26DMyM = new $hs.Thunk();
        hs_sat26DMyM.evaluateOnce = function () {
            var hs_sat26DMyI = new $hs.Thunk();
            hs_sat26DMyI.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            var hs_sat26DMyJ = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal26DMuu);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26DMyJ, hs_sat26DMyI);
        };
        var hs_sat26DMyL = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal26DMuu);
        var hs_wild26DMyK = $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26DMyL, hs_eta26DMuw, hs_sat26DMyM);
        switch (hs_wild26DMyK.tag) {
        case 1:
            var hs_zddReal126DMuC = new $hs.Thunk();
            hs_zddReal126DMuC.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DMut);
            };
            var hs_zddNum26DMuE = new $hs.Thunk();
            hs_zddNum26DMuE.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal126DMuC);
            };
            var hs_zddOrd26DMuG = new $hs.Thunk();
            hs_zddOrd26DMuG.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal126DMuC);
            };
            var hs_go26DMv7 = new $hs.Func(2);
            hs_go26DMv7.evaluate = function (hs_n26DMuL, hs_cs26DMva) {
                var hs_ds26DMuO = new $hs.Thunk();
                hs_ds26DMuO.evaluateOnce = function () {
                    var hs_sat26DMyO = new $hs.Thunk();
                    hs_sat26DMyO.evaluateOnce = function () {
                        var hs_sat26DMyN = new $hs.Thunk();
                        hs_sat26DMyN.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(10);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DMuE, hs_sat26DMyN);
                    };
                    return $hs.modules.GHCziReal.hs_quotRem.hscall(hs_zddIntegral26DMut, hs_n26DMuL, hs_sat26DMyO);
                };
                var hs_sat26DMyT = new $hs.Thunk();
                hs_sat26DMyT.evaluateOnce = function () {
                    var hs_sat26DMyP = new $hs.Thunk();
                    hs_sat26DMyP.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(10);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DMuE, hs_sat26DMyP);
                };
                var hs_wild126DMyS = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd26DMuG, hs_n26DMuL, hs_sat26DMyT);
                switch (hs_wild126DMyS.tag) {
                case 1:
                    var hs_sat26DMyZ = new $hs.Thunk();
                    hs_sat26DMyZ.evaluateOnce = function () {
                        var hs_sat26DMyV = new $hs.Thunk();
                        hs_sat26DMyV.evaluateOnce = function () {
                            var hs_sat26DMyU = new $hs.Thunk();
                            hs_sat26DMyU.evaluateOnce = function () {
                                var hs_wild226DMyR = hs_ds26DMuO;
                                if (hs_ds26DMuO.notEvaluated) {
                                    hs_wild226DMyR = hs_ds26DMuO.hscall();
                                }
                                var hs_r26DMuX = hs_wild226DMyR.data[1];
                                if (hs_r26DMuX.notEvaluated) {
                                    return hs_r26DMuX.hscall();
                                } else {
                                    return hs_r26DMuX;
                                }
                            };
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall(hs_zddIntegral26DMut, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DMyU);
                        };
                        var hs_sat26DMyX = new $hs.Thunk();
                        hs_sat26DMyX.evaluateOnce = function () {
                            var hs_sat26DMyW = new $hs.Data(1);
                            hs_sat26DMyW.data = ["0"];
                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26DMyW);
                        };
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DMyX, hs_sat26DMyV);
                    };
                    var hs_wild226DMv9 = $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26DMyZ);
                    var hs_sat26DMz1 = new $hs.Data(2);
                    hs_sat26DMz1.data = [hs_wild226DMv9, hs_cs26DMva];
                    var hs_sat26DMz3 = new $hs.Thunk();
                    hs_sat26DMz3.evaluateOnce = function () {
                        var hs_wild326DMz0 = hs_ds26DMuO;
                        if (hs_ds26DMuO.notEvaluated) {
                            hs_wild326DMz0 = hs_ds26DMuO.hscall();
                        }
                        var hs_q26DMv6 = hs_wild326DMz0.data[0];
                        if (hs_q26DMv6.notEvaluated) {
                            return hs_q26DMv6.hscall();
                        } else {
                            return hs_q26DMv6;
                        }
                    };
                    return hs_go26DMv7.hscall(hs_sat26DMz3, hs_sat26DMz1);
                case 2:
                    var hs_sat26DMz8 = new $hs.Thunk();
                    hs_sat26DMz8.evaluateOnce = function () {
                        var hs_sat26DMz4 = new $hs.Thunk();
                        hs_sat26DMz4.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall(hs_zddIntegral26DMut, $hs.modules.GHCziNum.hs_zdfNumInt, hs_n26DMuL);
                        };
                        var hs_sat26DMz6 = new $hs.Thunk();
                        hs_sat26DMz6.evaluateOnce = function () {
                            var hs_sat26DMz5 = new $hs.Data(1);
                            hs_sat26DMz5.data = ["0"];
                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26DMz5);
                        };
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DMz6, hs_sat26DMz4);
                    };
                    var hs_wild226DMvi = $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26DMz8);
                    var $res = new $hs.Data(2);
                    $res.data = [hs_wild226DMvi, hs_cs26DMva];
                    return $res;
                }
            };
            return hs_go26DMv7.hscall(hs_eta26DMuw, hs_eta126DMvj);
        case 2:
            var hs_sat26DMz9 = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Numeric.showInt: can't show negative numbers\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DMz9);
        }
    };
    this.hs_readSigned.evaluate = function (hs_zddReal26DMvo, hs_eta26DMvA) {
        var hs_zddNum26DMvp = new $hs.Thunk();
        hs_zddNum26DMvp.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal26DMvo);
        };
        var hs_readzqzq26DMvR = new $hs.Func(1);
        hs_readzqzq26DMvR.evaluate = function (hs_r26DMvs) {
            var hs_sat26DMzj = new $hs.Func(1);
            hs_sat26DMzj.evaluate = function (hs_ds26DMvv) {
                var hs_wild26DMzc = hs_ds26DMvv;
                if (hs_ds26DMvv.notEvaluated) {
                    hs_wild26DMzc = hs_ds26DMvv.hscall();
                }
                var hs_str26DMvz = hs_wild26DMzc.data[0];
                var hs_s26DMvK = hs_wild26DMzc.data[1];
                var hs_sat26DMzh = new $hs.Func(1);
                hs_sat26DMzh.evaluate = function (hs_ds126DMvD) {
                    var hs_wild126DMzb = hs_ds126DMvD;
                    if (hs_ds126DMvD.notEvaluated) {
                        hs_wild126DMzb = hs_ds126DMvD.hscall();
                    }
                    var hs_n26DMvJ = hs_wild126DMzb.data[0];
                    var hs_ds226DMvH = hs_wild126DMzb.data[1];
                    var hs_wild226DMza = hs_ds226DMvH;
                    if (hs_ds226DMvH.notEvaluated) {
                        hs_wild226DMza = hs_ds226DMvH.hscall();
                    }
                    switch (hs_wild226DMza.tag) {
                    case 1:
                        var hs_sat26DMzd = new $hs.Data(1);
                        hs_sat26DMzd.data = [hs_n26DMvJ, hs_s26DMvK];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26DMzd);
                    case 2:
                        var hs_sat26DMzg = new $hs.Thunk();
                        hs_sat26DMzg.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/Numeric.hs:130:32-37\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26DMzg);
                    }
                };
                var hs_sat26DMzi = new $hs.Thunk();
                hs_sat26DMzi.evaluateOnce = function () {
                    return hs_eta26DMvA.hscall(hs_str26DMvz);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26DMzi, hs_sat26DMzh);
            };
            var hs_sat26DMzk = new $hs.Thunk();
            hs_sat26DMzk.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_lex.hscall(hs_r26DMvs);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26DMzk, hs_sat26DMzj);
        };
        var hs_sat26DMzC = new $hs.Func(1);
        hs_sat26DMzC.evaluate = function (hs_r26DMvT) {
            var hs_sat26DMzA = new $hs.Thunk();
            hs_sat26DMzA.evaluateOnce = function () {
                var hs_sat26DMzy = new $hs.Func(1);
                hs_sat26DMzy.evaluate = function (hs_ds26DMw2) {
                    var hs_fail26DMw1 = new $hs.Func(1);
                    hs_fail26DMw1.evaluate = function (hs_ds126DMw0) {
                        var hs_sat26DMzl = new $hs.Thunk();
                        hs_sat26DMzl.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/Numeric.hs:125:41-47\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26DMzl);
                    };
                    var hs_wild26DMzn = hs_ds26DMw2;
                    if (hs_ds26DMw2.notEvaluated) {
                        hs_wild26DMzn = hs_ds26DMw2.hscall();
                    }
                    var hs_ds126DMw6 = hs_wild26DMzn.data[0];
                    var hs_s26DMwh = hs_wild26DMzn.data[1];
                    var hs_wild126DMzm = hs_ds126DMw6;
                    if (hs_ds126DMw6.notEvaluated) {
                        hs_wild126DMzm = hs_ds126DMw6.hscall();
                    }
                    switch (hs_wild126DMzm.tag) {
                    case 1:
                        return hs_fail26DMw1.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    case 2:
                        var hs_ds226DMwa = hs_wild126DMzm.data[0];
                        var hs_ds326DMwf = hs_wild126DMzm.data[1];
                        var hs_wild226DMzp = hs_ds226DMwa;
                        if (hs_ds226DMwa.notEvaluated) {
                            hs_wild226DMzp = hs_ds226DMwa.hscall();
                        }
                        var hs_ds426DMwd = hs_wild226DMzp.data[0];
                        var hs_ds526DMzo = hs_ds426DMwd;
                        if (hs_ds426DMwd.notEvaluated) {
                            hs_ds526DMzo = hs_ds426DMwd.hscall();
                        }
                        switch (hs_ds526DMzo) {
                        case "-":
                            var hs_wild326DMzr = hs_ds326DMwf;
                            if (hs_ds326DMwf.notEvaluated) {
                                hs_wild326DMzr = hs_ds326DMwf.hscall();
                            }
                            switch (hs_wild326DMzr.tag) {
                            case 1:
                                var hs_sat26DMzu = new $hs.Func(1);
                                hs_sat26DMzu.evaluate = function (hs_ds626DMwk) {
                                    var hs_wild426DMzq = hs_ds626DMwk;
                                    if (hs_ds626DMwk.notEvaluated) {
                                        hs_wild426DMzq = hs_ds626DMwk.hscall();
                                    }
                                    var hs_x26DMwo = hs_wild426DMzq.data[0];
                                    var hs_t26DMwq = hs_wild426DMzq.data[1];
                                    var hs_sat26DMzs = new $hs.Thunk();
                                    hs_sat26DMzs.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26DMvp, hs_x26DMwo);
                                    };
                                    var hs_sat26DMzt = new $hs.Data(1);
                                    hs_sat26DMzt.data = [hs_sat26DMzs, hs_t26DMwq];
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26DMzt);
                                };
                                var hs_sat26DMzv = new $hs.Thunk();
                                hs_sat26DMzv.evaluateOnce = function () {
                                    return hs_readzqzq26DMvR.hscall(hs_s26DMwh);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26DMzv, hs_sat26DMzu);
                            case 2:
                                return hs_fail26DMw1.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            }
                        default:
                            return hs_fail26DMw1.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        }
                    }
                };
                var hs_sat26DMzz = new $hs.Thunk();
                hs_sat26DMzz.evaluateOnce = function () {
                    return $hs.modules.GHCziRead.hs_lex.hscall(hs_r26DMvT);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26DMzz, hs_sat26DMzy);
            };
            var hs_sat26DMzB = new $hs.Thunk();
            hs_sat26DMzB.evaluateOnce = function () {
                return hs_readzqzq26DMvR.hscall(hs_r26DMvT);
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DMzB, hs_sat26DMzA);
        };
        return $hs.modules.GHCziRead.hs_readParen.hscall($hs.modules.GHCziBool.hs_False, hs_sat26DMzC);
    };
    this.hs_readFloat.evaluate = function (hs_zddRealFrac26DMwA) {
        var hs_sat26DMzH = new $hs.Thunk();
        hs_sat26DMzH.evaluateOnce = function () {
            var hs_a26DMwB = new $hs.Thunk();
            hs_a26DMwB.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac26DMwA);
            };
            var hs_zddNum26DMwD = new $hs.Thunk();
            hs_zddNum26DMwD.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_a26DMwB);
            };
            var hs_zddFractional26DMwF = new $hs.Thunk();
            hs_zddFractional26DMwF.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp2RealFrac.hscall(hs_zddRealFrac26DMwA);
            };
            var hs_sat26DMzG = new $hs.Func(1);
            hs_sat26DMzG.evaluate = function (hs_tok26DMwH) {
                var hs_wild26DMzD = hs_tok26DMwH;
                if (hs_tok26DMwH.notEvaluated) {
                    hs_wild26DMzD = hs_tok26DMwH.hscall();
                }
                switch (hs_wild26DMzD.tag) {
                case 6:
                    var hs_i26DMwK = hs_wild26DMzD.data[0];
                    var hs_sat26DMzE = new $hs.Thunk();
                    hs_sat26DMzE.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DMwD, hs_i26DMwK);
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DMzE);
                case 7:
                    var hs_y26DMwN = hs_wild26DMzD.data[0];
                    var hs_sat26DMzF = new $hs.Thunk();
                    hs_sat26DMzF.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromRational.hscall(hs_zddFractional26DMwF, hs_y26DMwN);
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DMzF);
                default:
                    if ($hs.modules.TextziParserCombinatorsziReadP.hs_pfail.notEvaluated) {
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail.hscall();
                    } else {
                        return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail;
                    }
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziReadziLex.hs_lex, hs_sat26DMzG);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_readPzutozuS.hscall(hs_sat26DMzH);
    };
    this.hs_readHex.evaluate = function (hs_zddNum26DMwS) {
        var hs_sat26DMzI = new $hs.Thunk();
        hs_sat26DMzI.evaluateOnce = function () {
            return $hs.modules.TextziReadziLex.hs_readHexP.hscall(hs_zddNum26DMwS);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_readPzutozuS.hscall(hs_sat26DMzI);
    };
    this.hs_readDec.evaluate = function (hs_zddNum26DMwV) {
        var hs_sat26DMzJ = new $hs.Thunk();
        hs_sat26DMzJ.evaluateOnce = function () {
            return $hs.modules.TextziReadziLex.hs_readDecP.hscall(hs_zddNum26DMwV);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_readPzutozuS.hscall(hs_sat26DMzJ);
    };
    this.hs_readOct.evaluate = function (hs_zddNum26DMwY) {
        var hs_sat26DMzK = new $hs.Thunk();
        hs_sat26DMzK.evaluateOnce = function () {
            return $hs.modules.TextziReadziLex.hs_readOctP.hscall(hs_zddNum26DMwY);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_readPzutozuS.hscall(hs_sat26DMzK);
    };
    this.hs_readInt.evaluate = function (hs_zddNum26DMx4, hs_base26DMx5, hs_isDigit26DMx6, hs_valDigit26DMx7) {
        var hs_sat26DMzL = new $hs.Thunk();
        hs_sat26DMzL.evaluateOnce = function () {
            return $hs.modules.TextziReadziLex.hs_readIntP.hscall(hs_zddNum26DMx4, hs_base26DMx5, hs_isDigit26DMx6, hs_valDigit26DMx7);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_readPzutozuS.hscall(hs_sat26DMzL);
    };
    hs_showEFloat125vo0U.evaluate = function (hs_d26DMxd, hs_x26DMxe) {
        var hs_sat26DMzM = new $hs.Thunk();
        hs_sat26DMzM.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_formatRealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, $hs.modules.GHCziFloat.hs_FFExponent, hs_d26DMxd, hs_x26DMxe);
        };
        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DMzM);
    };
    hs_showEFloat225vo11.evaluate = function (hs_d26DMxk, hs_x26DMxl) {
        var hs_sat26DMzN = new $hs.Thunk();
        hs_sat26DMzN.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_formatRealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, $hs.modules.GHCziFloat.hs_FFExponent, hs_d26DMxk, hs_x26DMxl);
        };
        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DMzN);
    };
    this.hs_showEFloat.evaluate = function (hs_zddRealFloat26DMxq, hs_d26DMxr, hs_x26DMxs) {
        var hs_sat26DMzO = new $hs.Thunk();
        hs_sat26DMzO.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_formatRealFloat.hscall(hs_zddRealFloat26DMxq, $hs.modules.GHCziFloat.hs_FFExponent, hs_d26DMxr, hs_x26DMxs);
        };
        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DMzO);
    };
    hs_showFFloat125vo1f.evaluate = function (hs_d26DMxy, hs_x26DMxz) {
        var hs_sat26DMzP = new $hs.Thunk();
        hs_sat26DMzP.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_formatRealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, $hs.modules.GHCziFloat.hs_FFFixed, hs_d26DMxy, hs_x26DMxz);
        };
        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DMzP);
    };
    hs_showFFloat225vo1m.evaluate = function (hs_d26DMxF, hs_x26DMxG) {
        var hs_sat26DMzQ = new $hs.Thunk();
        hs_sat26DMzQ.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_formatRealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, $hs.modules.GHCziFloat.hs_FFFixed, hs_d26DMxF, hs_x26DMxG);
        };
        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DMzQ);
    };
    this.hs_showFFloat.evaluate = function (hs_zddRealFloat26DMxL, hs_d26DMxM, hs_x26DMxN) {
        var hs_sat26DMzR = new $hs.Thunk();
        hs_sat26DMzR.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_formatRealFloat.hscall(hs_zddRealFloat26DMxL, $hs.modules.GHCziFloat.hs_FFFixed, hs_d26DMxM, hs_x26DMxN);
        };
        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DMzR);
    };
    hs_showGFloat125vo1A.evaluate = function (hs_d26DMxT, hs_x26DMxU) {
        var hs_sat26DMzS = new $hs.Thunk();
        hs_sat26DMzS.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_formatRealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, $hs.modules.GHCziFloat.hs_FFGeneric, hs_d26DMxT, hs_x26DMxU);
        };
        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DMzS);
    };
    hs_showGFloat225vo1H.evaluate = function (hs_d26DMy0, hs_x26DMy1) {
        var hs_sat26DMzT = new $hs.Thunk();
        hs_sat26DMzT.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_formatRealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, $hs.modules.GHCziFloat.hs_FFGeneric, hs_d26DMy0, hs_x26DMy1);
        };
        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DMzT);
    };
    this.hs_showGFloat.evaluate = function (hs_zddRealFloat26DMy6, hs_d26DMy7, hs_x26DMy8) {
        var hs_sat26DMzU = new $hs.Thunk();
        hs_sat26DMzU.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_formatRealFloat.hscall(hs_zddRealFloat26DMy6, $hs.modules.GHCziFloat.hs_FFGeneric, hs_d26DMy7, hs_x26DMy8);
        };
        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DMzU);
    };
};
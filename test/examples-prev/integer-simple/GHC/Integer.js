
$hs.modules.GHCziInteger = new $hs.Module();
$hs.modules.GHCziInteger.dependencies = ["GHC.Prim", "GHC.IntWord64", "Control.Exception.Base", "GHC.Integer.Type"];
$hs.modules.GHCziInteger.initBeforeDependencies = function () {
    this.hs_xorInteger = new $hs.Func(2);
    this.hs_wordToInteger = new $hs.Func(1);
    this.hs_word64ToInteger = new $hs.Func(1);
    this.hs_timesInteger = new $hs.Func(2);
    this.hs_signumInteger = new $hs.Func(1);
    this.hs_shiftLInteger = new $hs.Func(2);
    this.hs_plusInteger = new $hs.Func(2);
    this.hs_orInteger = new $hs.Func(2);
    this.hs_negateInteger = new $hs.Func(1);
    this.hs_quotRemInteger = new $hs.Func(2);
    this.hs_quotInteger = new $hs.Func(2);
    this.hs_remInteger = new $hs.Func(2);
    this.hs_smallInteger = new $hs.Func(1);
    this.hs_minusInteger = new $hs.Func(2);
    this.hs_integerToWord = new $hs.Func(1);
    this.hs_toIntzh = new $hs.Func(1);
    this.hs_integerToInt64 = new $hs.Func(1);
    this.hs_integerToWord64 = new $hs.Func(1);
    this.hs_int64ToInteger = new $hs.Func(1);
    this.hs_hashInteger = new $hs.Func(1);
    this.hs_floatFromInteger = new $hs.Func(1);
    this.hs_doubleFromInteger = new $hs.Func(1);
    this.hs_decodeFloatInteger = new $hs.Func(1);
    this.hs_decodeDoubleInteger = new $hs.Func(1);
    this.hs_complementInteger = new $hs.Func(1);
    this.hs_shiftRInteger = new $hs.Func(2);
    this.hs_compareInteger = new $hs.Func(2);
    this.hs_eqInteger = new $hs.Func(2);
    this.hs_divModInteger = new $hs.Func(2);
    this.hs_geInteger = new $hs.Func(2);
    this.hs_gtInteger = new $hs.Func(2);
    this.hs_leInteger = new $hs.Func(2);
    this.hs_ltInteger = new $hs.Func(2);
    this.hs_neqInteger = new $hs.Func(2);
    this.hs_andInteger = new $hs.Func(2);
    this.hs_absInteger = new $hs.Func(1);
    this.hs_encodeDoubleInteger = new $hs.Func(2);
    this.hs_encodeFloatInteger = new $hs.Func(2);
    this.hs_DigitsOnes = new $hs.Func(1);
    this.hs_xorInteger.notEvaluated = true;
    this.hs_xorInteger.evaluate = function (hs_ds26zuiv, hs_i26zuix) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zuiv, hs_i26zuix);
    };
    this.hs_wordToInteger.notEvaluated = true;
    this.hs_wordToInteger.evaluate = function (hs_w26zujc) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_w26zujc);
    };
    this.hs_word64ToInteger.notEvaluated = true;
    this.hs_word64ToInteger.evaluate = function (hs_w26zujh) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_w26zujh);
    };
    this.hs_timesInteger.notEvaluated = true;
    this.hs_timesInteger.evaluate = function (hs_ds26zujo, hs_ds126zujr) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zujo, hs_ds126zujr);
    };
    this.hs_signumInteger.notEvaluated = true;
    this.hs_signumInteger.evaluate = function (hs_ds26zujP) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zujP);
    };
    this.hs_shiftLInteger.notEvaluated = true;
    this.hs_shiftLInteger.evaluate = function (hs_ds26zujV, hs_i26zujZ) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zujV, hs_i26zujZ);
    };
    this.hs_plusInteger.notEvaluated = true;
    this.hs_plusInteger.evaluate = function (hs_ds26zuka, hs_ds126zukc) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zuka, hs_ds126zukc);
    };
    this.hs_orInteger.notEvaluated = true;
    this.hs_orInteger.evaluate = function (hs_ds26zukJ, hs_i26zukL) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zukJ, hs_i26zukL);
    };
    this.hs_negateInteger.notEvaluated = true;
    this.hs_negateInteger.evaluate = function (hs_ds26zulp) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zulp);
    };
    this.hs_quotRemInteger.notEvaluated = true;
    this.hs_quotRemInteger.evaluate = function (hs_ds26zulx, hs_ds126zulz) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zulx, hs_ds126zulz);
    };
    this.hs_quotInteger.notEvaluated = true;
    this.hs_quotInteger.evaluate = function (hs_x26zume, hs_y26zumf) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_x26zume, hs_y26zumf);
    };
    this.hs_remInteger.notEvaluated = true;
    this.hs_remInteger.evaluate = function (hs_x26zumm, hs_y26zumn) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_x26zumm, hs_y26zumn);
    };
    this.hs_smallInteger.notEvaluated = true;
    this.hs_smallInteger.evaluate = function (hs_i26zumt) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_i26zumt);
    };
    this.hs_minusInteger.notEvaluated = true;
    this.hs_minusInteger.evaluate = function (hs_i126zumG, hs_i226zumH) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_i126zumG, hs_i226zumH);
    };
    this.hs_integerToWord.notEvaluated = true;
    this.hs_integerToWord.evaluate = function (hs_ds26zumK) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zumK);
    };
    this.hs_toIntzh.notEvaluated = true;
    this.hs_toIntzh.evaluate = function (hs_i26zumZ) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_i26zumZ);
    };
    this.hs_integerToInt64.notEvaluated = true;
    this.hs_integerToInt64.evaluate = function (hs_ds26zunf) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zunf);
    };
    this.hs_integerToWord64.notEvaluated = true;
    this.hs_integerToWord64.evaluate = function (hs_i26zuns) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_i26zuns);
    };
    this.hs_int64ToInteger.notEvaluated = true;
    this.hs_int64ToInteger.evaluate = function (hs_i26zunx) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_i26zunx);
    };
    this.hs_hashInteger.notEvaluated = true;
    this.hs_hashInteger.evaluate = function (hs_ds26zunO) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zunO);
    };
    this.hs_floatFromInteger.notEvaluated = true;
    this.hs_floatFromInteger.evaluate = function (hs_ds26zunR) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zunR);
    };
    this.hs_doubleFromInteger.notEvaluated = true;
    this.hs_doubleFromInteger.evaluate = function (hs_ds26zuo0) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zuo0);
    };
    this.hs_decodeFloatInteger.notEvaluated = true;
    this.hs_decodeFloatInteger.evaluate = function (hs_f26zuo9) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_f26zuo9);
    };
    this.hs_decodeDoubleInteger.notEvaluated = true;
    this.hs_decodeDoubleInteger.evaluate = function (hs_d26zuoh) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_d26zuoh);
    };
    this.hs_complementInteger.notEvaluated = true;
    this.hs_complementInteger.evaluate = function (hs_x26zuoJ) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_x26zuoJ);
    };
    this.hs_shiftRInteger.notEvaluated = true;
    this.hs_shiftRInteger.evaluate = function (hs_ds26zuoN, hs_i26zuoR) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zuoN, hs_i26zuoR);
    };
    this.hs_compareInteger.notEvaluated = true;
    this.hs_compareInteger.evaluate = function (hs_ds26zup9, hs_ds126zupc) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zup9, hs_ds126zupc);
    };
    this.hs_eqInteger.notEvaluated = true;
    this.hs_eqInteger.evaluate = function (hs_x26zupr, hs_y26zupu) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_x26zupr, hs_y26zupu);
    };
    this.hs_divModInteger.notEvaluated = true;
    this.hs_divModInteger.evaluate = function (hs_n26zupL, hs_d26zupM) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_n26zupL, hs_d26zupM);
    };
    this.hs_geInteger.notEvaluated = true;
    this.hs_geInteger.evaluate = function (hs_x26zuqY, hs_y26zur1) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_x26zuqY, hs_y26zur1);
    };
    this.hs_gtInteger.notEvaluated = true;
    this.hs_gtInteger.evaluate = function (hs_x26zuri, hs_y26zurl) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_x26zuri, hs_y26zurl);
    };
    this.hs_leInteger.notEvaluated = true;
    this.hs_leInteger.evaluate = function (hs_x26zurC, hs_y26zurF) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_x26zurC, hs_y26zurF);
    };
    this.hs_ltInteger.notEvaluated = true;
    this.hs_ltInteger.evaluate = function (hs_x26zurW, hs_y26zurZ) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_x26zurW, hs_y26zurZ);
    };
    this.hs_neqInteger.notEvaluated = true;
    this.hs_neqInteger.evaluate = function (hs_x26zusg, hs_y26zusj) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_x26zusg, hs_y26zusj);
    };
    this.hs_andInteger.notEvaluated = true;
    this.hs_andInteger.evaluate = function (hs_ds26zusA, hs_ds126zusC) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zusA, hs_ds126zusC);
    };
    this.hs_absInteger.notEvaluated = true;
    this.hs_absInteger.evaluate = function (hs_ds26zutj) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zutj);
    };
    this.hs_encodeDoubleInteger.notEvaluated = true;
    this.hs_encodeDoubleInteger.evaluate = function (hs_ds26zutq, hs_e026zutP) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zutq, hs_e026zutP);
    };
    this.hs_encodeFloatInteger.notEvaluated = true;
    this.hs_encodeFloatInteger.evaluate = function (hs_ds26zutX, hs_e026zuum) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zutX, hs_e026zuum);
    };
    this.hs_DigitsOnes.notEvaluated = true;
    this.hs_DigitsOnes.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.GHCziInteger.initAfterDependencies = function () {
    this.hs_xorInteger.notEvaluated = false;
    this.hs_wordToInteger.notEvaluated = false;
    this.hs_word64ToInteger.notEvaluated = false;
    this.hs_timesInteger.notEvaluated = false;
    this.hs_signumInteger.notEvaluated = false;
    this.hs_shiftLInteger.notEvaluated = false;
    this.hs_plusInteger.notEvaluated = false;
    this.hs_orInteger.notEvaluated = false;
    this.hs_negateInteger.notEvaluated = false;
    this.hs_quotRemInteger.notEvaluated = false;
    this.hs_quotInteger.notEvaluated = false;
    this.hs_remInteger.notEvaluated = false;
    this.hs_smallInteger.notEvaluated = false;
    this.hs_minusInteger.notEvaluated = false;
    this.hs_integerToWord.notEvaluated = false;
    this.hs_toIntzh.notEvaluated = false;
    this.hs_integerToInt64.notEvaluated = false;
    this.hs_integerToWord64.notEvaluated = false;
    this.hs_int64ToInteger.notEvaluated = false;
    this.hs_hashInteger.notEvaluated = false;
    this.hs_floatFromInteger.notEvaluated = false;
    this.hs_doubleFromInteger.notEvaluated = false;
    this.hs_decodeFloatInteger.notEvaluated = false;
    this.hs_decodeDoubleInteger.notEvaluated = false;
    this.hs_complementInteger.notEvaluated = false;
    this.hs_shiftRInteger.notEvaluated = false;
    this.hs_compareInteger.notEvaluated = false;
    this.hs_eqInteger.notEvaluated = false;
    this.hs_divModInteger.notEvaluated = false;
    this.hs_geInteger.notEvaluated = false;
    this.hs_gtInteger.notEvaluated = false;
    this.hs_leInteger.notEvaluated = false;
    this.hs_ltInteger.notEvaluated = false;
    this.hs_neqInteger.notEvaluated = false;
    this.hs_andInteger.notEvaluated = false;
    this.hs_absInteger.notEvaluated = false;
    this.hs_encodeDoubleInteger.notEvaluated = false;
    this.hs_encodeFloatInteger.notEvaluated = false;
    this.hs_DigitsOnes.notEvaluated = false;
    var hs_xorDigits25r5mV = new $hs.Func(2);
    var hs_orDigits25r5mT = new $hs.Func(2);
    var hs_andDigitsOnes25r5mR = new $hs.Func(2);
    var hs_andDigits25r5mP = new $hs.Func(2);
    var hs_smallShiftLPositive25r5mF = new $hs.Func(2);
    var hs_shiftRPositive25r5mH = new $hs.Func(2);
    var hs_shiftLPositive25r5mD = new $hs.Func(2);
    var hs_comparePositive25r5mp = new $hs.Func(2);
    var hs_positiveToWord6425r5mn = new $hs.Func(1);
    var hs_word64ToPositive25r5ml = new $hs.Func(1);
    var hs_removeZZeroTails25r5mj = new $hs.Func(1);
    var hs_digitsMaybeZZeroToInteger25r5md = new $hs.Func(1);
    var hs_doubleFromPositive25r5mX = new $hs.Func(1);
    var hs_floatFromPositive25r5mZ = new $hs.Func(1);
    var hs_succPositive25r5mt = new $hs.Func(1);
    var hs_plusPositive25r5mr = new $hs.Func(2);
    var hs_timesDigit25r5mz = new $hs.Func(2);
    var hs_onePositive25r5m1 = new $hs.Data(1);
    var hs_flipBitsDigits25r5lZ = new $hs.Func(1);
    var hs_tpl25r5Jj = new $hs.Data(1);
    var hs_tpl125r5Jl = new $hs.Data(1);
    var hs_twoToTheThirtytwoInteger25r5lT = new $hs.Data(1);
    var hs_negativeOneInteger25r5lR = new $hs.Data(2);
    var hs_oneInteger25r5lP = new $hs.Data(1);
    var hs_errorPositive25r5lN = new $hs.Data(1);
    var hs_minusPositive25r5mv = new $hs.Func(2);
    var hs_quotRemPositive25r5mL = new $hs.Func(2);
    var hs_timesPositive25r5mx = new $hs.Func(2);
    var hs_errorInteger25r5lL = new $hs.Data(1);
    hs_xorDigits25r5mV.evaluate = function (hs_ds26zu97, hs_ds126zu9b) {
        var hs_fail26zu96 = new $hs.Func(1);
        hs_fail26zu96.evaluate = function (hs_ds226zu95) {
            return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("../../ghc-7.0.2/libraries/integer-simple/GHC/Integer.hs:(720,1)-(722,79)|function GHC.Integer.xorDigits\x00");
        };
        var hs_wild26zu9f = hs_ds26zu97;
        if (hs_ds26zu97.notEvaluated) {
            hs_wild26zu9f = hs_ds26zu97.hscall();
        }
        switch (hs_wild26zu9f.tag) {
        case 1:
            var hs_wild126zu9j = hs_ds126zu9b;
            if (hs_ds126zu9b.notEvaluated) {
                hs_wild126zu9j = hs_ds126zu9b.hscall();
            }
            switch (hs_wild126zu9j.tag) {
            case 1:
                var hs_wild226zuuu = hs_wild26zu9f;
                if (hs_wild26zu9f.notEvaluated) {
                    hs_wild226zuuu = hs_wild26zu9f.hscall();
                }
                switch (hs_wild226zuuu.tag) {
                case 1:
                    var hs_w126zu9q = hs_wild226zuuu.data[0];
                    var hs_ds226zu9n = hs_wild226zuuu.data[1];
                    var hs_wild326zuut = hs_wild126zu9j;
                    if (hs_wild126zu9j.notEvaluated) {
                        hs_wild326zuut = hs_wild126zu9j.hscall();
                    }
                    switch (hs_wild326zuut.tag) {
                    case 1:
                        var hs_w226zu9r = hs_wild326zuut.data[0];
                        var hs_ds326zu9o = hs_wild326zuut.data[1];
                        var hs_tpl226zu9t = hs_xorDigits25r5mV.hscall(hs_ds226zu9n, hs_ds326zu9o);
                        var hs_sat26zuus = hs_w126zu9q ^ hs_w226zu9r;
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26zuus, hs_tpl226zu9t];
                        return $res;
                    case 2:
                        return hs_fail26zu96.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                case 2:
                    return hs_fail26zu96.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            case 2:
                if (hs_wild26zu9f.notEvaluated) {
                    return hs_wild26zu9f.hscall();
                } else {
                    return hs_wild26zu9f;
                }
            }
        case 2:
            if (hs_ds126zu9b.notEvaluated) {
                return hs_ds126zu9b.hscall();
            } else {
                return hs_ds126zu9b;
            }
        }
    };
    hs_orDigits25r5mT.evaluate = function (hs_ds26zu9A, hs_ds126zu9E) {
        var hs_fail26zu9z = new $hs.Func(1);
        hs_fail26zu9z.evaluate = function (hs_ds226zu9y) {
            return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("../../ghc-7.0.2/libraries/integer-simple/GHC/Integer.hs:(715,1)-(717,76)|function GHC.Integer.orDigits\x00");
        };
        var hs_wild26zu9I = hs_ds26zu9A;
        if (hs_ds26zu9A.notEvaluated) {
            hs_wild26zu9I = hs_ds26zu9A.hscall();
        }
        switch (hs_wild26zu9I.tag) {
        case 1:
            var hs_wild126zu9M = hs_ds126zu9E;
            if (hs_ds126zu9E.notEvaluated) {
                hs_wild126zu9M = hs_ds126zu9E.hscall();
            }
            switch (hs_wild126zu9M.tag) {
            case 1:
                var hs_wild226zuuB = hs_wild26zu9I;
                if (hs_wild26zu9I.notEvaluated) {
                    hs_wild226zuuB = hs_wild26zu9I.hscall();
                }
                switch (hs_wild226zuuB.tag) {
                case 1:
                    var hs_w126zu9T = hs_wild226zuuB.data[0];
                    var hs_ds226zu9Q = hs_wild226zuuB.data[1];
                    var hs_wild326zuuA = hs_wild126zu9M;
                    if (hs_wild126zu9M.notEvaluated) {
                        hs_wild326zuuA = hs_wild126zu9M.hscall();
                    }
                    switch (hs_wild326zuuA.tag) {
                    case 1:
                        var hs_w226zu9U = hs_wild326zuuA.data[0];
                        var hs_ds326zu9R = hs_wild326zuuA.data[1];
                        var hs_tpl226zu9W = hs_orDigits25r5mT.hscall(hs_ds226zu9Q, hs_ds326zu9R);
                        var hs_sat26zuuz = hs_w126zu9T | hs_w226zu9U;
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26zuuz, hs_tpl226zu9W];
                        return $res;
                    case 2:
                        return hs_fail26zu9z.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                case 2:
                    return hs_fail26zu9z.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            case 2:
                if (hs_wild26zu9I.notEvaluated) {
                    return hs_wild26zu9I.hscall();
                } else {
                    return hs_wild26zu9I;
                }
            }
        case 2:
            if (hs_ds126zu9E.notEvaluated) {
                return hs_ds126zu9E.hscall();
            } else {
                return hs_ds126zu9E;
            }
        }
    };
    hs_andDigitsOnes25r5mR.evaluate = function (hs_ds26zu9Z, hs_ds126zua1) {
        var hs_nt26zua5 = hs_ds26zu9Z;
        if (hs_ds26zu9Z.notEvaluated) {
            hs_nt26zua5 = hs_ds26zu9Z.hscall();
        }
        var hs_wild26zua9 = hs_ds126zua1;
        if (hs_ds126zua1.notEvaluated) {
            hs_wild26zua9 = hs_ds126zua1.hscall();
        }
        switch (hs_wild26zua9.tag) {
        case 1:
            var hs_wild126zuuI = hs_nt26zua5;
            if (hs_nt26zua5.notEvaluated) {
                hs_wild126zuuI = hs_nt26zua5.hscall();
            }
            switch (hs_wild126zuuI.tag) {
            case 1:
                var hs_w126zuag = hs_wild126zuuI.data[0];
                var hs_ws126zuad = hs_wild126zuuI.data[1];
                var hs_wild226zuuH = hs_wild26zua9;
                if (hs_wild26zua9.notEvaluated) {
                    hs_wild226zuuH = hs_wild26zua9.hscall();
                }
                switch (hs_wild226zuuH.tag) {
                case 1:
                    var hs_w226zuah = hs_wild226zuuH.data[0];
                    var hs_ws226zuae = hs_wild226zuuH.data[1];
                    var hs_tpl226zuaj = hs_andDigitsOnes25r5mR.hscall(hs_ws126zuad, hs_ws226zuae);
                    var hs_sat26zuuG = hs_w126zuag & hs_w226zuah;
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26zuuG, hs_tpl226zuaj];
                    return $res;
                case 2:
                    return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("../../ghc-7.0.2/libraries/integer-simple/GHC/Integer.hs:(709,1)-(712,62)|function GHC.Integer.andDigitsOnes\x00");
                }
            case 2:
                if (hs_wild26zua9.notEvaluated) {
                    return hs_wild26zua9.hscall();
                } else {
                    return hs_wild26zua9;
                }
            }
        case 2:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_andDigits25r5mP.evaluate = function (hs_ds26zuam, hs_ds126zuao) {
        var hs_ds226zuas = hs_ds26zuam;
        if (hs_ds26zuam.notEvaluated) {
            hs_ds226zuas = hs_ds26zuam.hscall();
        }
        var hs_wild26zuaw = hs_ds126zuao;
        if (hs_ds126zuao.notEvaluated) {
            hs_wild26zuaw = hs_ds126zuao.hscall();
        }
        switch (hs_wild26zuaw.tag) {
        case 1:
            var hs_wild126zuuN = hs_ds226zuas;
            if (hs_ds226zuas.notEvaluated) {
                hs_wild126zuuN = hs_ds226zuas.hscall();
            }
            switch (hs_wild126zuuN.tag) {
            case 1:
                var hs_w126zuaD = hs_wild126zuuN.data[0];
                var hs_ws126zuaA = hs_wild126zuuN.data[1];
                var hs_wild226zuuM = hs_wild26zuaw;
                if (hs_wild26zuaw.notEvaluated) {
                    hs_wild226zuuM = hs_wild26zuaw.hscall();
                }
                switch (hs_wild226zuuM.tag) {
                case 1:
                    var hs_w226zuaE = hs_wild226zuuM.data[0];
                    var hs_ws226zuaB = hs_wild226zuuM.data[1];
                    var hs_tpl226zuaG = hs_andDigits25r5mP.hscall(hs_ws126zuaA, hs_ws226zuaB);
                    var hs_sat26zuuL = hs_w126zuaD & hs_w226zuaE;
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26zuuL, hs_tpl226zuaG];
                    return $res;
                case 2:
                    return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("../../ghc-7.0.2/libraries/integer-simple/GHC/Integer.hs:(698,1)-(700,79)|function GHC.Integer.andDigits\x00");
                }
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_smallShiftLPositive25r5mF.evaluate = function (hs_p26zuaJ, hs_ds26zuaL) {
        var hs_p126zub7 = hs_p26zuaJ;
        if (hs_p26zuaJ.notEvaluated) {
            hs_p126zub7 = hs_p26zuaJ.hscall();
        }
        var hs_ds126zuaO = hs_ds26zuaL;
        if (hs_ds26zuaL.notEvaluated) {
            hs_ds126zuaO = hs_ds26zuaL.hscall();
        }
        switch (hs_ds126zuaO) {
        case 0:
            if (hs_p126zub7.notEvaluated) {
                return hs_p126zub7.hscall();
            } else {
                return hs_p126zub7;
            }
        default:
            var hs_j26zuaP = ($hs.Int.addCarry(32, ~hs_ds126zuaO, 1))[0];
            var hs_f26zuaY = new $hs.Func(2);
            hs_f26zuaY.evaluate = function (hs_carry26zub3, hs_ds226zuaT) {
                var hs_wild26zuuT = hs_ds226zuaT;
                if (hs_ds226zuaT.notEvaluated) {
                    hs_wild26zuuT = hs_ds226zuaT.hscall();
                }
                switch (hs_wild26zuuT.tag) {
                case 1:
                    var hs_w26zuaX = hs_wild26zuuT.data[0];
                    var hs_ws26zub0 = hs_wild26zuuT.data[1];
                    var hs_sat26zuuS = hs_w26zuaX >> hs_j26zuaP;
                    var hs_tpl226zub5 = hs_f26zuaY.hscall(hs_sat26zuuS, hs_ws26zub0);
                    var hs_sat26zuuR = hs_w26zuaX << hs_ds126zuaO;
                    var hs_sat26zuuQ = hs_sat26zuuR | hs_carry26zub3;
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26zuuQ, hs_tpl226zub5];
                    return $res;
                case 2:
                    var hs_wild126zuuU = hs_carry26zub3 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild126zuuU.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [hs_carry26zub3, $hs.modules.GHCziIntegerziType.hs_None];
                        return $res;
                    case 2:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                }
            };
            return hs_f26zuaY.hscall(0, hs_p126zub7);
        }
    };
    hs_shiftRPositive25r5mH.evaluate = function (hs_ds26zuba, hs_ds126zube) {
        var hs_wild26zubh = hs_ds26zuba;
        if (hs_ds26zuba.notEvaluated) {
            hs_wild26zubh = hs_ds26zuba.hscall();
        }
        switch (hs_wild26zubh.tag) {
        case 1:
            var hs_q26zubr = hs_wild26zubh.data[1];
            var hs_wild126zuv0 = hs_ds126zube >= 32 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild126zuv0.tag) {
            case 1:
                var hs_wild226zuuZ = hs_ds126zube == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild226zuuZ.tag) {
                case 1:
                    var hs_sat26zuuY = ($hs.Int.addCarry(32, ~hs_ds126zube, 1))[0];
                    var hs_wild326zuuX = hs_smallShiftLPositive25r5mF.hscall(hs_wild26zubh, hs_sat26zuuY);
                    switch (hs_wild326zuuX.tag) {
                    case 1:
                        var hs_pzq26zubm = hs_wild326zuuX.data[1];
                        var hs_wild426zubq = hs_pzq26zubm;
                        if (hs_pzq26zubm.notEvaluated) {
                            hs_wild426zubq = hs_pzq26zubm.hscall();
                        }
                        switch (hs_wild426zubq.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [hs_wild426zubq];
                            return $res;
                        case 2:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    case 2:
                        var $res = new $hs.Data(3);
                        $res.data = [];
                        return $res;
                    }
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [hs_wild26zubh];
                    return $res;
                }
            case 2:
                var hs_sat26zuv3 = ($hs.Int.addCarry(hs_ds126zube, ~32, 1))[0];
                return hs_shiftRPositive25r5mH.hscall(hs_q26zubr, hs_sat26zuv3);
            }
        case 2:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_shiftLPositive25r5mD.evaluate = function (hs_p26zubx, hs_i26zubv) {
        var hs_wild26zuv4 = hs_i26zubv >= 32 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26zuv4.tag) {
        case 1:
            return hs_smallShiftLPositive25r5mF.hscall(hs_p26zubx, hs_i26zubv);
        case 2:
            var hs_sat26zuv5 = ($hs.Int.addCarry(hs_i26zubv, ~32, 1))[0];
            var hs_sat26zuv6 = new $hs.Thunk();
            hs_sat26zuv6.evaluateOnce = function () {
                var hs_tpl226zubz = hs_p26zubx;
                if (hs_p26zubx.notEvaluated) {
                    hs_tpl226zubz = hs_p26zubx.hscall();
                }
                var $res = new $hs.Data(1);
                $res.data = [0, hs_tpl226zubz];
                return $res;
            };
            return hs_shiftLPositive25r5mD.hscall(hs_sat26zuv6, hs_sat26zuv5);
        }
    };
    hs_comparePositive25r5mp.evaluate = function (hs_ds26zubG, hs_ds126zubI) {
        var hs_fail26zubR = new $hs.Func(1);
        hs_fail26zubR.evaluate = function (hs_ds226zubQ) {
            var hs_ds326zubM = hs_ds26zubG;
            if (hs_ds26zubG.notEvaluated) {
                hs_ds326zubM = hs_ds26zubG.hscall();
            }
            var hs_wild26zuva = hs_ds126zubI;
            if (hs_ds126zubI.notEvaluated) {
                hs_wild26zuva = hs_ds126zubI.hscall();
            }
            switch (hs_wild26zuva.tag) {
            case 1:
                var hs_wild126zuv8 = hs_ds326zubM;
                if (hs_ds326zubM.notEvaluated) {
                    hs_wild126zuv8 = hs_ds326zubM.hscall();
                }
                switch (hs_wild126zuv8.tag) {
                case 1:
                    return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("../../ghc-7.0.2/libraries/integer-simple/GHC/Integer.hs:(470,1)-(477,42)|function GHC.Integer.comparePositive\x00");
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 2:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        };
        var hs_wild26zuve = hs_ds26zubG;
        if (hs_ds26zubG.notEvaluated) {
            hs_wild26zuve = hs_ds26zubG.hscall();
        }
        switch (hs_wild26zuve.tag) {
        case 1:
            var hs_x26zuc2 = hs_wild26zuve.data[0];
            var hs_xs26zubY = hs_wild26zuve.data[1];
            var hs_wild126zuvd = hs_ds126zubI;
            if (hs_ds126zubI.notEvaluated) {
                hs_wild126zuvd = hs_ds126zubI.hscall();
            }
            switch (hs_wild126zuvd.tag) {
            case 1:
                var hs_y26zuc3 = hs_wild126zuvd.data[0];
                var hs_ys26zubZ = hs_wild126zuvd.data[1];
                var hs_wild226zuc1 = hs_comparePositive25r5mp.hscall(hs_xs26zubY, hs_ys26zubZ);
                switch (hs_wild226zuc1.tag) {
                case 2:
                    var hs_wild326zuvg = $hs.Word.lt(hs_x26zuc2, hs_y26zuc3) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild326zuvg.tag) {
                    case 1:
                        var hs_wild426zuvf = $hs.Word.gt(hs_x26zuc2, hs_y26zuc3) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                        switch (hs_wild426zuvf.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        case 2:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    case 2:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                default:
                    if (hs_wild226zuc1.notEvaluated) {
                        return hs_wild226zuc1.hscall();
                    } else {
                        return hs_wild226zuc1;
                    }
                }
            case 2:
                return hs_fail26zubR.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        case 2:
            var hs_wild126zuvi = hs_ds126zubI;
            if (hs_ds126zubI.notEvaluated) {
                hs_wild126zuvi = hs_ds126zubI.hscall();
            }
            switch (hs_wild126zuvi.tag) {
            case 1:
                return hs_fail26zubR.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_positiveToWord6425r5mn.evaluate = function (hs_ds26zuca) {
        var hs_wild26zuvl = hs_ds26zuca;
        if (hs_ds26zuca.notEvaluated) {
            hs_wild26zuvl = hs_ds26zuca.hscall();
        }
        switch (hs_wild26zuvl.tag) {
        case 1:
            var hs_w26zucm = hs_wild26zuvl.data[0];
            var hs_ds126zuce = hs_wild26zuvl.data[1];
            var hs_wild126zuvk = hs_ds126zuce;
            if (hs_ds126zuce.notEvaluated) {
                hs_wild126zuvk = hs_ds126zuce.hscall();
            }
            switch (hs_wild126zuvk.tag) {
            case 1:
                var hs_high26zuci = hs_wild126zuvk.data[0];
                var hs_wild226zuck = $hs.modules.GHCziIntWord64.hs_wordToWord64zh.hscall(hs_high26zuci);
                var hs_wild326zucp = $hs.modules.GHCziIntWord64.hs_uncheckedShiftL64zh.hscall(hs_wild226zuck, 32);
                var hs_wild426zuco = $hs.modules.GHCziIntWord64.hs_wordToWord64zh.hscall(hs_w26zucm);
                return $hs.modules.GHCziIntWord64.hs_or64zh.hscall(hs_wild426zuco, hs_wild326zucp);
            case 2:
                return $hs.modules.GHCziIntWord64.hs_wordToWord64zh.hscall(hs_w26zucm);
            }
        case 2:
            return $hs.modules.GHCziIntWord64.hs_wordToWord64zh.hscall(0);
        }
    };
    hs_word64ToPositive25r5ml.evaluate = function (hs_w26zucs) {
        var hs_wild26zuct = $hs.modules.GHCziIntWord64.hs_wordToWord64zh.hscall(0);
        var hs_wild126zuvn = $hs.modules.GHCziIntWord64.hs_eqWord64zh.hscall(hs_w26zucs, hs_wild26zuct);
        switch (hs_wild126zuvn.tag) {
        case 1:
            var hs_wild226zucz = $hs.modules.GHCziIntWord64.hs_word64ToWordzh.hscall(hs_w26zucs);
            var hs_wild326zucx = $hs.modules.GHCziIntWord64.hs_uncheckedShiftRL64zh.hscall(hs_w26zucs, 32);
            var hs_tpl226zucA = hs_word64ToPositive25r5ml.hscall(hs_wild326zucx);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild226zucz, hs_tpl226zucA];
            return $res;
        case 2:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_removeZZeroTails25r5mj.evaluate = function (hs_ds26zucC) {
        var hs_wild26zuvp = hs_ds26zucC;
        if (hs_ds26zucC.notEvaluated) {
            hs_wild26zuvp = hs_ds26zucC.hscall();
        }
        switch (hs_wild26zuvp.tag) {
        case 1:
            var hs_w26zucG = hs_wild26zuvp.data[0];
            var hs_ds126zucI = hs_wild26zuvp.data[1];
            var hs_wild126zuvo = hs_w26zucG == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild126zuvo.tag) {
            case 1:
                var hs_tpl226zucK = hs_removeZZeroTails25r5mj.hscall(hs_ds126zucI);
                var $res = new $hs.Data(1);
                $res.data = [hs_w26zucG, hs_tpl226zucK];
                return $res;
            case 2:
                var hs_wild226zucO = hs_removeZZeroTails25r5mj.hscall(hs_ds126zucI);
                switch (hs_wild226zucO.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [hs_w26zucG, hs_wild226zucO];
                    return $res;
                case 2:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            }
        case 2:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_digitsMaybeZZeroToInteger25r5md.evaluate = function (hs_ds26zucQ) {
        var hs_wild26zucU = hs_ds26zucQ;
        if (hs_ds26zucQ.notEvaluated) {
            hs_wild26zucU = hs_ds26zucQ.hscall();
        }
        switch (hs_wild26zucU.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [hs_wild26zucU];
            return $res;
        case 2:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_doubleFromPositive25r5mX.evaluate = function (hs_ds26zucW) {
        var hs_wild26zuvG = hs_ds26zucW;
        if (hs_ds26zucW.notEvaluated) {
            hs_wild26zuvG = hs_ds26zucW.hscall();
        }
        switch (hs_wild26zuvG.tag) {
        case 1:
            var hs_w26zud5 = hs_wild26zuvG.data[0];
            var hs_ds126zud0 = hs_wild26zuvG.data[1];
            var hs_wild126zud2 = hs_doubleFromPositive25r5mX.hscall(hs_ds126zud0);
            var hs_sat26zuvF = hs_w26zud5 & 65535;
            var hs_sat26zuvE = hs_sat26zuvF;
            throw "primitive operation int2Double#. Not implemeted yet.";
            throw "primitive operation int2Double#. Not implemeted yet.";
            throw "primitive operation **##. Not implemeted yet.";
            var hs_sat26zuvB = hs_w26zud5 >> 16;
            var hs_sat26zuvA = hs_sat26zuvB;
            throw "primitive operation int2Double#. Not implemeted yet.";
            throw "primitive operation *##. Not implemeted yet.";
            throw "primitive operation **##. Not implemeted yet.";
            throw "primitive operation *##. Not implemeted yet.";
            throw "primitive operation +##. Not implemeted yet.";
            throw "primitive operation +##. Not implemeted yet.";
        case 2:
            return 0 % 1;
        }
    };
    hs_floatFromPositive25r5mZ.evaluate = function (hs_ds26zudh) {
        var hs_wild26zuvT = hs_ds26zudh;
        if (hs_ds26zudh.notEvaluated) {
            hs_wild26zuvT = hs_ds26zudh.hscall();
        }
        switch (hs_wild26zuvT.tag) {
        case 1:
            var hs_w26zudq = hs_wild26zuvT.data[0];
            var hs_ds126zudl = hs_wild26zuvT.data[1];
            var hs_wild126zudn = hs_floatFromPositive25r5mZ.hscall(hs_ds126zudl);
            var hs_sat26zuvS = hs_w26zudq & 65535;
            var hs_sat26zuvR = hs_sat26zuvS;
            throw "primitive operation int2Float#. Not implemeted yet.";
            throw "primitive operation int2Float#. Not implemeted yet.";
            throw "primitive operation powerFloat#. Not implemeted yet.";
            var hs_sat26zuvO = hs_w26zudq >> 16;
            var hs_sat26zuvN = hs_sat26zuvO;
            throw "primitive operation int2Float#. Not implemeted yet.";
            throw "primitive operation timesFloat#. Not implemeted yet.";
            throw "primitive operation powerFloat#. Not implemeted yet.";
            throw "primitive operation timesFloat#. Not implemeted yet.";
            throw "primitive operation plusFloat#. Not implemeted yet.";
            throw "primitive operation plusFloat#. Not implemeted yet.";
        case 2:
            return 0 % 1;
        }
    };
    hs_succPositive25r5mt.evaluate = function (hs_ds26zudC) {
        var hs_wild26zuvW = hs_ds26zudC;
        if (hs_ds26zudC.notEvaluated) {
            hs_wild26zuvW = hs_ds26zudC.hscall();
        }
        switch (hs_wild26zuvW.tag) {
        case 1:
            var hs_w26zudG = hs_wild26zuvW.data[0];
            var hs_ws26zudJ = hs_wild26zuvW.data[1];
            var hs_wild126zuvV = hs_w26zudG == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild126zuvV.tag) {
            case 1:
                var hs_sat26zuvU = ($hs.Int.addCarry(hs_w26zudG, 1, 0))[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26zuvU, hs_ws26zudJ];
                return $res;
            case 2:
                var hs_tpl226zudL = hs_succPositive25r5mt.hscall(hs_ws26zudJ);
                var $res = new $hs.Data(1);
                $res.data = [0, hs_tpl226zudL];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [1, $hs.modules.GHCziIntegerziType.hs_None];
            return $res;
        }
    };
    hs_plusPositive25r5mr.evaluate = function (hs_x026zueE, hs_y026zueF) {
        var hs_addWithCarry26zued = new $hs.Func(3);
        hs_addWithCarry26zued.evaluate = function (hs_c26zueg, hs_xs26zudS, hs_ds26zudU) {
            var hs_xs126zudY = hs_xs26zudS;
            if (hs_xs26zudS.notEvaluated) {
                hs_xs126zudY = hs_xs26zudS.hscall();
            }
            var hs_wild26zue2 = hs_ds26zudU;
            if (hs_ds26zudU.notEvaluated) {
                hs_wild26zue2 = hs_ds26zudU.hscall();
            }
            switch (hs_wild26zue2.tag) {
            case 1:
                var hs_wild126zueB = hs_xs126zudY;
                if (hs_xs126zudY.notEvaluated) {
                    hs_wild126zueB = hs_xs126zudY.hscall();
                }
                switch (hs_wild126zueB.tag) {
                case 1:
                    var hs_x26zue6 = hs_wild126zueB.data[0];
                    var hs_xszq26zueb = hs_wild126zueB.data[1];
                    var hs_wild226zueA = hs_wild26zue2;
                    if (hs_wild26zue2.notEvaluated) {
                        hs_wild226zueA = hs_wild26zue2.hscall();
                    }
                    switch (hs_wild226zueA.tag) {
                    case 1:
                        var hs_y26zue7 = hs_wild226zueA.data[0];
                        var hs_yszq26zuec = hs_wild226zueA.data[1];
                        var hs_wild326zuw1 = $hs.Word.lt(hs_x26zue6, hs_y26zue7) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                        switch (hs_wild326zuw1.tag) {
                        case 1:
                            var hs_wild426zuw0 = $hs.Word.ge(hs_y26zue7, -2147483647) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                            switch (hs_wild426zuw0.tag) {
                            case 1:
                                var hs_wild526zuvZ = $hs.Word.ge(hs_x26zue6, -2147483647) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                                switch (hs_wild526zuvZ.tag) {
                                case 1:
                                    var hs_tpl226zuei = hs_addWithCarry26zued.hscall(0, hs_xszq26zueb, hs_yszq26zuec);
                                    var hs_sat26zuvY = ($hs.Int.addCarry(hs_x26zue6, hs_y26zue7, 0))[0];
                                    var hs_sat26zuvX = ($hs.Int.addCarry(hs_sat26zuvY, hs_c26zueg, 0))[0];
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_sat26zuvX, hs_tpl226zuei];
                                    return $res;
                                case 2:
                                    var hs_sat26zuw7 = ($hs.Int.addCarry(hs_x26zue6, ~-2147483647, 1))[0];
                                    var hs_sat26zuw6 = ($hs.Int.addCarry(hs_sat26zuw7, hs_y26zue7, 0))[0];
                                    var hs_zz26zuem = ($hs.Int.addCarry(hs_sat26zuw6, hs_c26zueg, 0))[0];
                                    var hs_wild626zuw5 = $hs.Word.lt(hs_zz26zuem, -2147483647) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                                    switch (hs_wild626zuw5.tag) {
                                    case 1:
                                        var hs_tpl226zueq = hs_addWithCarry26zued.hscall(1, hs_xszq26zueb, hs_yszq26zuec);
                                        var hs_sat26zuw4 = ($hs.Int.addCarry(hs_zz26zuem, ~-2147483647, 1))[0];
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_sat26zuw4, hs_tpl226zueq];
                                        return $res;
                                    case 2:
                                        var hs_tpl226zuet = hs_addWithCarry26zued.hscall(0, hs_xszq26zueb, hs_yszq26zuec);
                                        var hs_sat26zuw8 = ($hs.Int.addCarry(hs_zz26zuem, -2147483647, 0))[0];
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_sat26zuw8, hs_tpl226zuet];
                                        return $res;
                                    }
                                }
                            case 2:
                                var hs_tpl226zuez = hs_addWithCarry26zued.hscall(1, hs_xszq26zueb, hs_yszq26zuec);
                                var hs_sat26zuwc = ($hs.Int.addCarry(hs_y26zue7, ~-2147483647, 1))[0];
                                var hs_sat26zuwb = ($hs.Int.addCarry(hs_x26zue6, ~-2147483647, 1))[0];
                                var hs_sat26zuwa = ($hs.Int.addCarry(hs_sat26zuwb, hs_sat26zuwc, 0))[0];
                                var hs_sat26zuw9 = ($hs.Int.addCarry(hs_sat26zuwa, hs_c26zueg, 0))[0];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_sat26zuw9, hs_tpl226zuez];
                                return $res;
                            }
                        case 2:
                            return hs_addWithCarry26zued.hscall(hs_c26zueg, hs_wild226zueA, hs_wild126zueB);
                        }
                    case 2:
                        return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("../../ghc-7.0.2/libraries/integer-simple/GHC/Integer.hs:(483,8)-(510,56)|function addWithCarry\x00");
                    }
                case 2:
                    var hs_wild226zuwd = hs_c26zueg == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226zuwd.tag) {
                    case 1:
                        return hs_succPositive25r5mt.hscall(hs_wild26zue2);
                    case 2:
                        if (hs_wild26zue2.notEvaluated) {
                            return hs_wild26zue2.hscall();
                        } else {
                            return hs_wild26zue2;
                        }
                    }
                }
            case 2:
                var hs_wild126zuwe = hs_c26zueg == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild126zuwe.tag) {
                case 1:
                    return hs_succPositive25r5mt.hscall(hs_xs126zudY);
                case 2:
                    if (hs_xs126zudY.notEvaluated) {
                        return hs_xs126zudY.hscall();
                    } else {
                        return hs_xs126zudY;
                    }
                }
            }
        };
        return hs_addWithCarry26zued.hscall(0, hs_x026zueE, hs_y026zueF);
    };
    hs_timesDigit25r5mz.evaluate = function (hs_x26zueJ, hs_y26zueO) {
        var hs_xh26zueK = hs_x26zueJ >> 16;
        var hs_xl26zueM = hs_x26zueJ & 65535;
        var hs_yh26zueP = hs_y26zueO >> 16;
        var hs_yl26zueR = hs_y26zueO & 65535;
        var hs_x126zueT = $hs.Int.mul(hs_xh26zueK, hs_yl26zueR);
        var hs_x226zueV = $hs.Int.mul(hs_xl26zueM, hs_yh26zueP);
        var hs_sat26zuwj = hs_x226zueV >> 16;
        var hs_sat26zuwi = hs_x126zueT >> 16;
        var hs_sat26zuwh = $hs.Int.mul(hs_xh26zueK, hs_yh26zueP);
        var hs_sat26zuwg = ($hs.Int.addCarry(hs_sat26zuwh, hs_sat26zuwi, 0))[0];
        var hs_high26zuf1 = ($hs.Int.addCarry(hs_sat26zuwg, hs_sat26zuwj, 0))[0];
        var hs_low26zufe = new $hs.Thunk();
        hs_low26zufe.evaluateOnce = function () {
            var hs_sat26zuwf = $hs.Int.mul(hs_xl26zueM, hs_yl26zueR);
            var hs_sat26zuwl = new $hs.Data(1);
            hs_sat26zuwl.data = [hs_sat26zuwf, $hs.modules.GHCziIntegerziType.hs_None];
            var hs_sat26zuwp = new $hs.Thunk();
            hs_sat26zuwp.evaluateOnce = function () {
                var hs_sat26zuf9 = hs_x226zueV & 65535;
                var hs_sat26zuwk = hs_sat26zuf9 << 16;
                var hs_sat26zuwn = new $hs.Data(1);
                hs_sat26zuwn.data = [hs_sat26zuwk, $hs.modules.GHCziIntegerziType.hs_None];
                var hs_sat26zuf5 = hs_x126zueT & 65535;
                var hs_sat26zuwm = hs_sat26zuf5 << 16;
                var hs_sat26zuwo = new $hs.Data(1);
                hs_sat26zuwo.data = [hs_sat26zuwm, $hs.modules.GHCziIntegerziType.hs_None];
                return hs_plusPositive25r5mr.hscall(hs_sat26zuwo, hs_sat26zuwn);
            };
            return hs_plusPositive25r5mr.hscall(hs_sat26zuwp, hs_sat26zuwl);
        };
        var hs_wild26zuwq = hs_high26zuf1 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26zuwq.tag) {
        case 1:
            var hs_sat26zuwr = new $hs.Data(1);
            hs_sat26zuwr.data = [hs_high26zuf1, $hs.modules.GHCziIntegerziType.hs_None];
            var hs_sat26zuws = new $hs.Data(1);
            hs_sat26zuws.data = [0, hs_sat26zuwr];
            return hs_plusPositive25r5mr.hscall(hs_sat26zuws, hs_low26zufe);
        case 2:
            if (hs_low26zufe.notEvaluated) {
                return hs_low26zufe.hscall();
            } else {
                return hs_low26zufe;
            }
        }
    };
    hs_onePositive25r5m1.data = [1, $hs.modules.GHCziIntegerziType.hs_None];
    hs_flipBitsDigits25r5lZ.evaluate = function (hs_ds26zufj) {
        var hs_wild26zuwu = hs_ds26zufj;
        if (hs_ds26zufj.notEvaluated) {
            hs_wild26zuwu = hs_ds26zufj.hscall();
        }
        switch (hs_wild26zuwu.tag) {
        case 1:
            var hs_w26zufp = hs_wild26zuwu.data[0];
            var hs_ws26zufn = hs_wild26zuwu.data[1];
            var hs_tpl226zufr = hs_flipBitsDigits25r5lZ.hscall(hs_ws26zufn);
            var hs_sat26zuwt = ~hs_w26zufp;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26zuwt, hs_tpl226zufr];
            return $res;
        case 2:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_tpl25r5Jj.data = [1, $hs.modules.GHCziIntegerziType.hs_None];
    hs_tpl125r5Jl.data = [0, hs_tpl25r5Jj];
    hs_twoToTheThirtytwoInteger25r5lT.data = [hs_tpl125r5Jl];
    hs_negativeOneInteger25r5lR.data = [hs_onePositive25r5m1];
    hs_oneInteger25r5lP.data = [hs_onePositive25r5m1];
    hs_errorPositive25r5lN.data = [47, $hs.modules.GHCziIntegerziType.hs_None];
    hs_minusPositive25r5mv.evaluate = function (hs_ds26zufG, hs_ds126zufI) {
        var hs_fail26zufR = new $hs.Func(1);
        hs_fail26zufR.evaluate = function (hs_ds226zufQ) {
            var hs_ds326zufM = hs_ds26zufG;
            if (hs_ds26zufG.notEvaluated) {
                hs_ds326zufM = hs_ds26zufG.hscall();
            }
            var hs_wild26zuwy = hs_ds126zufI;
            if (hs_ds126zufI.notEvaluated) {
                hs_wild26zuwy = hs_ds126zufI.hscall();
            }
            switch (hs_wild26zuwy.tag) {
            case 1:
                var hs_wild126zuww = hs_ds326zufM;
                if (hs_ds326zufM.notEvaluated) {
                    hs_wild126zuww = hs_ds326zufM.hscall();
                }
                switch (hs_wild126zuww.tag) {
                case 1:
                    return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("../../ghc-7.0.2/libraries/integer-simple/GHC/Integer.hs:(528,1)-(541,42)|function GHC.Integer.minusPositive\x00");
                case 2:
                    if (hs_errorPositive25r5lN.notEvaluated) {
                        return hs_errorPositive25r5lN.hscall();
                    } else {
                        return hs_errorPositive25r5lN;
                    }
                }
            case 2:
                if (hs_ds326zufM.notEvaluated) {
                    return hs_ds326zufM.hscall();
                } else {
                    return hs_ds326zufM;
                }
            }
        };
        var hs_wild26zuwE = hs_ds26zufG;
        if (hs_ds26zufG.notEvaluated) {
            hs_wild26zuwE = hs_ds26zufG.hscall();
        }
        switch (hs_wild26zuwE.tag) {
        case 1:
            var hs_x26zufY = hs_wild26zuwE.data[0];
            var hs_xs26zug2 = hs_wild26zuwE.data[1];
            var hs_wild126zuwD = hs_ds126zufI;
            if (hs_ds126zufI.notEvaluated) {
                hs_wild126zuwD = hs_ds126zufI.hscall();
            }
            switch (hs_wild126zuwD.tag) {
            case 1:
                var hs_y26zufZ = hs_wild126zuwD.data[0];
                var hs_ys26zug3 = hs_wild126zuwD.data[1];
                var hs_wild226zuwC = hs_x26zufY == hs_y26zufZ ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild226zuwC.tag) {
                case 1:
                    var hs_wild326zuwB = $hs.Word.gt(hs_x26zufY, hs_y26zufZ) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild326zuwB.tag) {
                    case 1:
                        var hs_sat26zuwI = new $hs.Thunk();
                        hs_sat26zuwI.evaluateOnce = function () {
                            return hs_minusPositive25r5mv.hscall(hs_xs26zug2, hs_ys26zug3);
                        };
                        var hs_tpl226zug9 = hs_minusPositive25r5mv.hscall(hs_sat26zuwI, hs_onePositive25r5m1);
                        var hs_sat26zuwH = ($hs.Int.addCarry(0, ~hs_y26zufZ, 1))[0];
                        var hs_sat26zuwG = ($hs.Int.addCarry(hs_sat26zuwH, 1, 0))[0];
                        var hs_sat26zuwF = ($hs.Int.addCarry(hs_sat26zuwG, hs_x26zufY, 0))[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26zuwF, hs_tpl226zug9];
                        return $res;
                    case 2:
                        var hs_tpl226zugc = hs_minusPositive25r5mv.hscall(hs_xs26zug2, hs_ys26zug3);
                        var hs_sat26zuwJ = ($hs.Int.addCarry(hs_x26zufY, ~hs_y26zufZ, 1))[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26zuwJ, hs_tpl226zugc];
                        return $res;
                    }
                case 2:
                    var hs_wild326zugg = hs_minusPositive25r5mv.hscall(hs_xs26zug2, hs_ys26zug3);
                    switch (hs_wild326zugg.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0, hs_wild326zugg];
                        return $res;
                    case 2:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                }
            case 2:
                return hs_fail26zufR.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        case 2:
            return hs_fail26zufR.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
        }
    };
    hs_quotRemPositive25r5mL.evaluate = function (hs_xs26zugj, hs_ys26zugl) {
        var hs_xs126zuhq = hs_xs26zugj;
        if (hs_xs26zugj.notEvaluated) {
            hs_xs126zuhq = hs_xs26zugj.hscall();
        }
        var hs_ys126zugO = hs_ys26zugl;
        if (hs_ys26zugl.notEvaluated) {
            hs_ys126zugO = hs_ys26zugl.hscall();
        }
        var hs_g26zugE = new $hs.Func(3);
        hs_g26zugE.evaluate = function (hs_d26zugv, hs_ds26zugr, hs_m26zugt) {
            var hs_wild26zuwM = hs_ds26zugr;
            if (hs_ds26zugr.notEvaluated) {
                hs_wild26zuwM = hs_ds26zugr.hscall();
            }
            switch (hs_wild26zuwM.tag) {
            case 1:
                var hs_m126zugw = hs_m26zugt;
                if (hs_m26zugt.notEvaluated) {
                    hs_m126zugw = hs_m26zugt.hscall();
                }
                return [hs_d26zugv, hs_m126zugw];
            case 2:
                var hs_sub26zugB = hs_wild26zuwM.data[0];
                var hs_subs26zugG = hs_wild26zuwM.data[1];
                var hs_m126zugA = hs_m26zugt;
                if (hs_m26zugt.notEvaluated) {
                    hs_m126zugA = hs_m26zugt.hscall();
                }
                var hs_wild126zuwN = hs_comparePositive25r5mp.hscall(hs_m126zugA, hs_sub26zugB);
                switch (hs_wild126zuwN.tag) {
                case 1:
                    var hs_sat26zuwR = hs_d26zugv << 1;
                    return hs_g26zugE.hscall(hs_sat26zuwR, hs_subs26zugG, hs_m126zugA);
                default:
                    var hs_sat26zuwO = new $hs.Thunk();
                    hs_sat26zuwO.evaluateOnce = function () {
                        return hs_minusPositive25r5mv.hscall(hs_m126zugA, hs_sub26zugB);
                    };
                    var hs_sat26zuwQ = hs_d26zugv << 1;
                    var hs_sat26zuwP = ($hs.Int.addCarry(hs_sat26zuwQ, 1, 0))[0];
                    return hs_g26zugE.hscall(hs_sat26zuwP, hs_subs26zugG, hs_sat26zuwO);
                }
            }
        };
        var hs_subtractors26zugU = new $hs.Thunk();
        hs_subtractors26zugU.evaluateOnce = function () {
            var hs_mkSubtractors26zugQ = new $hs.Func(1);
            hs_mkSubtractors26zugQ.evaluate = function (hs_n26zugM) {
                var hs_wild26zuwT = hs_n26zugM == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild26zuwT.tag) {
                case 1:
                    var hs_sat26zuwU = new $hs.Thunk();
                    hs_sat26zuwU.evaluateOnce = function () {
                        var hs_sat26zuwS = ($hs.Int.addCarry(hs_n26zugM, ~1, 1))[0];
                        return hs_mkSubtractors26zugQ.hscall(hs_sat26zuwS);
                    };
                    var hs_sat26zuwV = new $hs.Thunk();
                    hs_sat26zuwV.evaluateOnce = function () {
                        return hs_smallShiftLPositive25r5mF.hscall(hs_ys126zugO, hs_n26zugM);
                    };
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26zuwV, hs_sat26zuwU];
                    return $res;
                case 2:
                    var $res = new $hs.Data(2);
                    $res.data = [hs_ys126zugO, $hs.modules.GHCziIntegerziType.hs_Nil];
                    return $res;
                }
            };
            var hs_sat26zuwW = ($hs.Int.addCarry(32, ~1, 1))[0];
            return hs_mkSubtractors26zugQ.hscall(hs_sat26zuwW);
        };
        var hs_f26zuh2 = new $hs.Func(1);
        hs_f26zuh2.evaluate = function (hs_ds26zugX) {
            var hs_wild26zuwZ = hs_ds26zugX;
            if (hs_ds26zugX.notEvaluated) {
                hs_wild26zuwZ = hs_ds26zugX.hscall();
            }
            switch (hs_wild26zuwZ.tag) {
            case 1:
                var hs_zz26zuha = hs_wild26zuwZ.data[0];
                var hs_zzs26zuh1 = hs_wild26zuwZ.data[1];
                var hs_wild126zuwY = hs_f26zuh2.hscall(hs_zzs26zuh1);
                var hs_ds126zuhh = hs_wild126zuwY[0];
                var hs_m26zuh6 = hs_wild126zuwY[1];
                var hs_sat26zux4 = new $hs.Thunk();
                hs_sat26zux4.evaluateOnce = function () {
                    var hs_wild226zuhb = hs_m26zuh6;
                    if (hs_m26zuh6.notEvaluated) {
                        hs_wild226zuhb = hs_m26zuh6.hscall();
                    }
                    switch (hs_wild226zuhb.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [hs_zz26zuha, hs_wild226zuhb];
                        return $res;
                    case 2:
                        var hs_wild326zux1 = hs_zz26zuha == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                        switch (hs_wild326zux1.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [hs_zz26zuha, $hs.modules.GHCziIntegerziType.hs_None];
                            return $res;
                        case 2:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        }
                    }
                };
                var hs_wild226zux3 = hs_g26zugE.hscall(0, hs_subtractors26zugU, hs_sat26zux4);
                var hs_d26zuhl = hs_wild226zux3[0];
                var hs_mzqzq26zuhp = hs_wild226zux3[1];
                var hs_sat26zux7 = new $hs.Thunk();
                hs_sat26zux7.evaluateOnce = function () {
                    var hs_wild326zuhm = hs_ds126zuhh;
                    if (hs_ds126zuhh.notEvaluated) {
                        hs_wild326zuhm = hs_ds126zuhh.hscall();
                    }
                    switch (hs_wild326zuhm.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [hs_d26zuhl, hs_wild326zuhm];
                        return $res;
                    case 2:
                        var hs_wild426zux6 = hs_d26zuhl == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                        switch (hs_wild426zux6.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [hs_d26zuhl, $hs.modules.GHCziIntegerziType.hs_None];
                            return $res;
                        case 2:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        }
                    }
                };
                return [hs_sat26zux7, hs_mzqzq26zuhp];
            case 2:
                return [$hs.modules.GHCziIntegerziType.hs_None, $hs.modules.GHCziIntegerziType.hs_None];
            }
        };
        var hs_wild26zux8 = hs_f26zuh2.hscall(hs_xs126zuhq);
        var hs_d26zuhu = hs_wild26zux8[0];
        var hs_m26zuhw = hs_wild26zux8[1];
        var hs_sat26zux9 = new $hs.Thunk();
        hs_sat26zux9.evaluateOnce = function () {
            return hs_digitsMaybeZZeroToInteger25r5md.hscall(hs_m26zuhw);
        };
        var hs_sat26zuxa = new $hs.Thunk();
        hs_sat26zuxa.evaluateOnce = function () {
            return hs_digitsMaybeZZeroToInteger25r5md.hscall(hs_d26zuhu);
        };
        return [hs_sat26zuxa, hs_sat26zux9];
    };
    hs_timesPositive25r5mx.evaluate = function (hs_ds26zuhE, hs_ds126zuhI) {
        var hs_fail26zuhD = new $hs.Func(1);
        hs_fail26zuhD.evaluate = function (hs_ds226zuhC) {
            return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("../../ghc-7.0.2/libraries/integer-simple/GHC/Integer.hs:(546,1)-(561,39)|function GHC.Integer.timesPositive\x00");
        };
        var hs_wild26zuhM = hs_ds26zuhE;
        if (hs_ds26zuhE.notEvaluated) {
            hs_wild26zuhM = hs_ds26zuhE.hscall();
        }
        switch (hs_wild26zuhM.tag) {
        case 1:
            var hs_wild126zuhU = hs_ds126zuhI;
            if (hs_ds126zuhI.notEvaluated) {
                hs_wild126zuhU = hs_ds126zuhI.hscall();
            }
            switch (hs_wild126zuhU.tag) {
            case 1:
                var hs_wild226zuiq = hs_wild26zuhM;
                if (hs_wild26zuhM.notEvaluated) {
                    hs_wild226zuiq = hs_wild26zuhM.hscall();
                }
                switch (hs_wild226zuiq.tag) {
                case 1:
                    var hs_x26zui2 = hs_wild226zuiq.data[0];
                    var hs_ds226zuhQ = hs_wild226zuiq.data[1];
                    var hs_wild326zui6 = hs_ds226zuhQ;
                    if (hs_ds226zuhQ.notEvaluated) {
                        hs_wild326zui6 = hs_ds226zuhQ.hscall();
                    }
                    switch (hs_wild326zui6.tag) {
                    case 1:
                        var hs_wild426zui4 = hs_wild126zuhU;
                        if (hs_wild126zuhU.notEvaluated) {
                            hs_wild426zui4 = hs_wild126zuhU.hscall();
                        }
                        switch (hs_wild426zui4.tag) {
                        case 1:
                            var hs_y26zuib = hs_wild426zui4.data[0];
                            var hs_ds326zuhY = hs_wild426zui4.data[1];
                            var hs_wild526zuxc = hs_ds326zuhY;
                            if (hs_ds326zuhY.notEvaluated) {
                                hs_wild526zuxc = hs_ds326zuhY.hscall();
                            }
                            switch (hs_wild526zuxc.tag) {
                            case 1:
                                var hs_sat26zuxk = new $hs.Thunk();
                                hs_sat26zuxk.evaluateOnce = function () {
                                    var hs_tpl226zui8 = hs_timesPositive25r5mx.hscall(hs_wild326zui6, hs_wild426zui4);
                                    var $res = new $hs.Data(1);
                                    $res.data = [0, hs_tpl226zui8];
                                    return $res;
                                };
                                var hs_sat26zuxm = new $hs.Thunk();
                                hs_sat26zuxm.evaluateOnce = function () {
                                    var hs_sat26zuxl = new $hs.Data(1);
                                    hs_sat26zuxl.data = [hs_x26zui2, $hs.modules.GHCziIntegerziType.hs_None];
                                    return hs_timesPositive25r5mx.hscall(hs_sat26zuxl, hs_wild426zui4);
                                };
                                return hs_plusPositive25r5mr.hscall(hs_sat26zuxm, hs_sat26zuxk);
                            case 2:
                                var hs_wild626zuxn = hs_x26zui2 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                                switch (hs_wild626zuxn.tag) {
                                case 1:
                                    var hs_sat26zuxo = new $hs.Thunk();
                                    hs_sat26zuxo.evaluateOnce = function () {
                                        var hs_tpl226zuie = hs_timesPositive25r5mx.hscall(hs_wild326zui6, hs_wild426zui4);
                                        var $res = new $hs.Data(1);
                                        $res.data = [0, hs_tpl226zuie];
                                        return $res;
                                    };
                                    var hs_sat26zuxp = new $hs.Thunk();
                                    hs_sat26zuxp.evaluateOnce = function () {
                                        return hs_timesDigit25r5mz.hscall(hs_x26zui2, hs_y26zuib);
                                    };
                                    return hs_plusPositive25r5mr.hscall(hs_sat26zuxp, hs_sat26zuxo);
                                case 2:
                                    var hs_tpl226zuih = hs_timesPositive25r5mx.hscall(hs_wild326zui6, hs_wild426zui4);
                                    var $res = new $hs.Data(1);
                                    $res.data = [0, hs_tpl226zuih];
                                    return $res;
                                }
                            }
                        case 2:
                            return hs_fail26zuhD.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        }
                    case 2:
                        var hs_wild426zuip = hs_wild126zuhU;
                        if (hs_wild126zuhU.notEvaluated) {
                            hs_wild426zuip = hs_wild126zuhU.hscall();
                        }
                        switch (hs_wild426zuip.tag) {
                        case 1:
                            var hs_y26zuir = hs_wild426zuip.data[0];
                            var hs_ds326zuil = hs_wild426zuip.data[1];
                            var hs_wild526zuxr = hs_ds326zuil;
                            if (hs_ds326zuil.notEvaluated) {
                                hs_wild526zuxr = hs_ds326zuil.hscall();
                            }
                            switch (hs_wild526zuxr.tag) {
                            case 1:
                                return hs_timesPositive25r5mx.hscall(hs_wild426zuip, hs_wild226zuiq);
                            case 2:
                                return hs_timesDigit25r5mz.hscall(hs_x26zui2, hs_y26zuir);
                            }
                        case 2:
                            return hs_timesPositive25r5mx.hscall($hs.modules.GHCziIntegerziType.hs_None, hs_wild226zuiq);
                        }
                    }
                case 2:
                    return hs_fail26zuhD.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            case 2:
                if (hs_errorPositive25r5lN.notEvaluated) {
                    return hs_errorPositive25r5lN.hscall();
                } else {
                    return hs_errorPositive25r5lN;
                }
            }
        case 2:
            var hs_ds226zuxt = hs_ds126zuhI;
            if (hs_ds126zuhI.notEvaluated) {
                hs_ds226zuxt = hs_ds126zuhI.hscall();
            }
            if (hs_errorPositive25r5lN.notEvaluated) {
                return hs_errorPositive25r5lN.hscall();
            } else {
                return hs_errorPositive25r5lN;
            }
        }
    };
    hs_errorInteger25r5lL.data = [hs_errorPositive25r5lN];
    this.hs_xorInteger.evaluate = function (hs_ds26zuiv, hs_i26zuix) {
        var hs_wild26zuiz = hs_ds26zuiv;
        if (hs_ds26zuiv.notEvaluated) {
            hs_wild26zuiz = hs_ds26zuiv.hscall();
        }
        switch (hs_wild26zuiz.tag) {
        case 3:
            if (hs_i26zuix.notEvaluated) {
                return hs_i26zuix.hscall();
            } else {
                return hs_i26zuix;
            }
        default:
            var hs_wild126zuiC = hs_i26zuix;
            if (hs_i26zuix.notEvaluated) {
                hs_wild126zuiC = hs_i26zuix.hscall();
            }
            switch (hs_wild126zuiC.tag) {
            case 3:
                if (hs_wild26zuiz.notEvaluated) {
                    return hs_wild26zuiz.hscall();
                } else {
                    return hs_wild26zuiz;
                }
            default:
                var hs_wild226zuxv = hs_wild26zuiz;
                if (hs_wild26zuiz.notEvaluated) {
                    hs_wild226zuxv = hs_wild26zuiz.hscall();
                }
                switch (hs_wild226zuxv.tag) {
                case 1:
                    var hs_x26zuiF = hs_wild226zuxv.data[0];
                    var hs_wild326zuxu = hs_wild126zuiC;
                    if (hs_wild126zuiC.notEvaluated) {
                        hs_wild326zuxu = hs_wild126zuiC.hscall();
                    }
                    switch (hs_wild326zuxu.tag) {
                    case 1:
                        var hs_y26zuiG = hs_wild326zuxu.data[0];
                        var hs_sat26zuxx = new $hs.Thunk();
                        hs_sat26zuxx.evaluateOnce = function () {
                            return hs_xorDigits25r5mV.hscall(hs_x26zuiF, hs_y26zuiG);
                        };
                        var hs_wild426zuiL = hs_removeZZeroTails25r5mj.hscall(hs_sat26zuxx);
                        switch (hs_wild426zuiL.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [hs_wild426zuiL];
                            return $res;
                        case 2:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    case 2:
                        var hs_y26zuiN = hs_wild326zuxu.data[0];
                        var hs_sat26zuxC = new $hs.Thunk();
                        hs_sat26zuxC.evaluateOnce = function () {
                            var hs_sat26zuxA = new $hs.Thunk();
                            hs_sat26zuxA.evaluateOnce = function () {
                                var hs_sat26zuxz = new $hs.Thunk();
                                hs_sat26zuxz.evaluateOnce = function () {
                                    return hs_minusPositive25r5mv.hscall(hs_y26zuiN, hs_onePositive25r5m1);
                                };
                                return hs_xorDigits25r5mV.hscall(hs_x26zuiF, hs_sat26zuxz);
                            };
                            return hs_succPositive25r5mt.hscall(hs_sat26zuxA);
                        };
                        var hs_wild426zuiU = hs_removeZZeroTails25r5mj.hscall(hs_sat26zuxC);
                        switch (hs_wild426zuiU.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_wild426zuiU];
                            return $res;
                        case 2:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    }
                case 2:
                    var hs_x26zuj0 = hs_wild226zuxv.data[0];
                    var hs_wild326zuxE = hs_wild126zuiC;
                    if (hs_wild126zuiC.notEvaluated) {
                        hs_wild326zuxE = hs_wild126zuiC.hscall();
                    }
                    switch (hs_wild326zuxE.tag) {
                    case 1:
                        var hs_y26zuiY = hs_wild326zuxE.data[0];
                        var hs_sat26zuxF = new $hs.Data(2);
                        hs_sat26zuxF.data = [hs_x26zuj0];
                        var hs_sat26zuxG = new $hs.Data(1);
                        hs_sat26zuxG.data = [hs_y26zuiY];
                        return $hs.modules.GHCziInteger.hs_xorInteger.hscall(hs_sat26zuxG, hs_sat26zuxF);
                    case 2:
                        var hs_y26zuj4 = hs_wild326zuxE.data[0];
                        var hs_sat26zuxK = new $hs.Thunk();
                        hs_sat26zuxK.evaluateOnce = function () {
                            var hs_sat26zuxH = new $hs.Thunk();
                            hs_sat26zuxH.evaluateOnce = function () {
                                return hs_minusPositive25r5mv.hscall(hs_y26zuj4, hs_onePositive25r5m1);
                            };
                            var hs_sat26zuxI = new $hs.Thunk();
                            hs_sat26zuxI.evaluateOnce = function () {
                                return hs_minusPositive25r5mv.hscall(hs_x26zuj0, hs_onePositive25r5m1);
                            };
                            return hs_xorDigits25r5mV.hscall(hs_sat26zuxI, hs_sat26zuxH);
                        };
                        var hs_wild426zuja = hs_removeZZeroTails25r5mj.hscall(hs_sat26zuxK);
                        switch (hs_wild426zuja.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [hs_wild426zuja];
                            return $res;
                        case 2:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    }
                }
            }
        }
    };
    this.hs_wordToInteger.evaluate = function (hs_w26zujc) {
        var hs_wild26zuxM = hs_w26zujc == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26zuxM.tag) {
        case 1:
            var hs_sat26zuxN = new $hs.Data(1);
            hs_sat26zuxN.data = [hs_w26zujc, $hs.modules.GHCziIntegerziType.hs_None];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26zuxN];
            return $res;
        case 2:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    this.hs_word64ToInteger.evaluate = function (hs_w26zujh) {
        var hs_wild26zuji = $hs.modules.GHCziIntWord64.hs_wordToWord64zh.hscall(0);
        var hs_wild126zuxO = $hs.modules.GHCziIntWord64.hs_eqWord64zh.hscall(hs_w26zujh, hs_wild26zuji);
        switch (hs_wild126zuxO.tag) {
        case 1:
            var hs_tpl226zujl = hs_word64ToPositive25r5ml.hscall(hs_w26zujh);
            var $res = new $hs.Data(1);
            $res.data = [hs_tpl226zujl];
            return $res;
        case 2:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    this.hs_timesInteger.evaluate = function (hs_ds26zujo, hs_ds126zujr) {
        var hs_wild26zuxQ = hs_ds26zujo;
        if (hs_ds26zujo.notEvaluated) {
            hs_wild26zuxQ = hs_ds26zujo.hscall();
        }
        switch (hs_wild26zuxQ.tag) {
        case 1:
            var hs_p126zuju = hs_wild26zuxQ.data[0];
            var hs_wild126zuxP = hs_ds126zujr;
            if (hs_ds126zujr.notEvaluated) {
                hs_wild126zuxP = hs_ds126zujr.hscall();
            }
            switch (hs_wild126zuxP.tag) {
            case 1:
                var hs_p226zujv = hs_wild126zuxP.data[0];
                var hs_tpl226zujx = hs_timesPositive25r5mx.hscall(hs_p126zuju, hs_p226zujv);
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl226zujx];
                return $res;
            case 2:
                var hs_p226zujz = hs_wild126zuxP.data[0];
                var hs_tpl226zujB = hs_timesPositive25r5mx.hscall(hs_p126zuju, hs_p226zujz);
                var $res = new $hs.Data(2);
                $res.data = [hs_tpl226zujB];
                return $res;
            case 3:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_p126zujF = hs_wild26zuxQ.data[0];
            var hs_wild126zuxR = hs_ds126zujr;
            if (hs_ds126zujr.notEvaluated) {
                hs_wild126zuxR = hs_ds126zujr.hscall();
            }
            switch (hs_wild126zuxR.tag) {
            case 1:
                var hs_p226zujG = hs_wild126zuxR.data[0];
                var hs_tpl226zujI = hs_timesPositive25r5mx.hscall(hs_p126zujF, hs_p226zujG);
                var $res = new $hs.Data(2);
                $res.data = [hs_tpl226zujI];
                return $res;
            case 2:
                var hs_p226zujK = hs_wild126zuxR.data[0];
                var hs_tpl226zujM = hs_timesPositive25r5mx.hscall(hs_p126zujF, hs_p226zujK);
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl226zujM];
                return $res;
            case 3:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_ds226zuxS = hs_ds126zujr;
            if (hs_ds126zujr.notEvaluated) {
                hs_ds226zuxS = hs_ds126zujr.hscall();
            }
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    this.hs_signumInteger.evaluate = function (hs_ds26zujP) {
        var hs_wild26zuxU = hs_ds26zujP;
        if (hs_ds26zujP.notEvaluated) {
            hs_wild26zuxU = hs_ds26zujP.hscall();
        }
        switch (hs_wild26zuxU.tag) {
        case 1:
            if (hs_oneInteger25r5lP.notEvaluated) {
                return hs_oneInteger25r5lP.hscall();
            } else {
                return hs_oneInteger25r5lP;
            }
        case 2:
            if (hs_negativeOneInteger25r5lR.notEvaluated) {
                return hs_negativeOneInteger25r5lR.hscall();
            } else {
                return hs_negativeOneInteger25r5lR;
            }
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    this.hs_shiftLInteger.evaluate = function (hs_ds26zujV, hs_i26zujZ) {
        var hs_wild26zuxW = hs_ds26zujV;
        if (hs_ds26zujV.notEvaluated) {
            hs_wild26zuxW = hs_ds26zujV.hscall();
        }
        switch (hs_wild26zuxW.tag) {
        case 1:
            var hs_p26zujY = hs_wild26zuxW.data[0];
            var hs_tpl226zuk1 = hs_shiftLPositive25r5mD.hscall(hs_p26zujY, hs_i26zujZ);
            var $res = new $hs.Data(1);
            $res.data = [hs_tpl226zuk1];
            return $res;
        case 2:
            var hs_n26zuk3 = hs_wild26zuxW.data[0];
            var hs_tpl226zuk5 = hs_shiftLPositive25r5mD.hscall(hs_n26zuk3, hs_i26zujZ);
            var $res = new $hs.Data(2);
            $res.data = [hs_tpl226zuk5];
            return $res;
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    this.hs_plusInteger.evaluate = function (hs_ds26zuka, hs_ds126zukc) {
        var hs_fail26zukg = new $hs.Func(1);
        hs_fail26zukg.evaluate = function (hs_ds226zukf) {
            var hs_ds326zuke = hs_ds26zuka;
            if (hs_ds26zuka.notEvaluated) {
                hs_ds326zuke = hs_ds26zuka.hscall();
            }
            var hs_wild26zuxX = hs_ds126zukc;
            if (hs_ds126zukc.notEvaluated) {
                hs_wild26zuxX = hs_ds126zukc.hscall();
            }
            switch (hs_wild26zuxX.tag) {
            case 3:
                if (hs_ds326zuke.notEvaluated) {
                    return hs_ds326zuke.hscall();
                } else {
                    return hs_ds326zuke;
                }
            default:
                return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("../../ghc-7.0.2/libraries/integer-simple/GHC/Integer.hs:(302,1)-(310,41)|function GHC.Integer.plusInteger\x00");
            }
        };
        var hs_wild26zuxZ = hs_ds26zuka;
        if (hs_ds26zuka.notEvaluated) {
            hs_wild26zuxZ = hs_ds26zuka.hscall();
        }
        switch (hs_wild26zuxZ.tag) {
        case 1:
            var hs_p126zukl = hs_wild26zuxZ.data[0];
            var hs_wild126zuxY = hs_ds126zukc;
            if (hs_ds126zukc.notEvaluated) {
                hs_wild126zuxY = hs_ds126zukc.hscall();
            }
            switch (hs_wild126zuxY.tag) {
            case 1:
                var hs_p226zukm = hs_wild126zuxY.data[0];
                var hs_tpl226zuko = hs_plusPositive25r5mr.hscall(hs_p126zukl, hs_p226zukm);
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl226zuko];
                return $res;
            case 2:
                var hs_p226zukq = hs_wild126zuxY.data[0];
                var hs_wild226zuy0 = hs_comparePositive25r5mp.hscall(hs_p126zukl, hs_p226zukq);
                switch (hs_wild226zuy0.tag) {
                case 1:
                    var hs_tpl226zukt = hs_minusPositive25r5mv.hscall(hs_p226zukq, hs_p126zukl);
                    var $res = new $hs.Data(2);
                    $res.data = [hs_tpl226zukt];
                    return $res;
                case 2:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                case 3:
                    var hs_tpl226zukv = hs_minusPositive25r5mv.hscall(hs_p126zukl, hs_p226zukq);
                    var $res = new $hs.Data(1);
                    $res.data = [hs_tpl226zukv];
                    return $res;
                }
            case 3:
                return hs_fail26zukg.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        case 2:
            var hs_p126zukB = hs_wild26zuxZ.data[0];
            var hs_wild126zuy1 = hs_ds126zukc;
            if (hs_ds126zukc.notEvaluated) {
                hs_wild126zuy1 = hs_ds126zukc.hscall();
            }
            switch (hs_wild126zuy1.tag) {
            case 1:
                var hs_p226zukz = hs_wild126zuy1.data[0];
                var hs_sat26zuy2 = new $hs.Data(2);
                hs_sat26zuy2.data = [hs_p126zukB];
                var hs_sat26zuy3 = new $hs.Data(1);
                hs_sat26zuy3.data = [hs_p226zukz];
                return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_sat26zuy3, hs_sat26zuy2);
            case 2:
                var hs_p226zukE = hs_wild126zuy1.data[0];
                var hs_tpl226zukG = hs_plusPositive25r5mr.hscall(hs_p126zukB, hs_p226zukE);
                var $res = new $hs.Data(2);
                $res.data = [hs_tpl226zukG];
                return $res;
            case 3:
                return hs_fail26zukg.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        case 3:
            if (hs_ds126zukc.notEvaluated) {
                return hs_ds126zukc.hscall();
            } else {
                return hs_ds126zukc;
            }
        }
    };
    this.hs_orInteger.evaluate = function (hs_ds26zukJ, hs_i26zukL) {
        var hs_wild26zukN = hs_ds26zukJ;
        if (hs_ds26zukJ.notEvaluated) {
            hs_wild26zukN = hs_ds26zukJ.hscall();
        }
        switch (hs_wild26zukN.tag) {
        case 3:
            if (hs_i26zukL.notEvaluated) {
                return hs_i26zukL.hscall();
            } else {
                return hs_i26zukL;
            }
        default:
            var hs_wild126zukQ = hs_i26zukL;
            if (hs_i26zukL.notEvaluated) {
                hs_wild126zukQ = hs_i26zukL.hscall();
            }
            switch (hs_wild126zukQ.tag) {
            case 3:
                if (hs_wild26zukN.notEvaluated) {
                    return hs_wild26zukN.hscall();
                } else {
                    return hs_wild26zukN;
                }
            default:
                var hs_wild226zuy5 = hs_wild26zukN;
                if (hs_wild26zukN.notEvaluated) {
                    hs_wild226zuy5 = hs_wild26zukN.hscall();
                }
                switch (hs_wild226zuy5.tag) {
                case 1:
                    var hs_x26zukT = hs_wild226zuy5.data[0];
                    var hs_wild326zuy4 = hs_wild126zukQ;
                    if (hs_wild126zukQ.notEvaluated) {
                        hs_wild326zuy4 = hs_wild126zukQ.hscall();
                    }
                    switch (hs_wild326zuy4.tag) {
                    case 1:
                        var hs_y26zukU = hs_wild326zuy4.data[0];
                        var hs_tpl226zukW = hs_orDigits25r5mT.hscall(hs_x26zukT, hs_y26zukU);
                        var $res = new $hs.Data(1);
                        $res.data = [hs_tpl226zukW];
                        return $res;
                    case 2:
                        var hs_y26zukZ = hs_wild326zuy4.data[0];
                        var hs_sat26zuya = new $hs.Thunk();
                        hs_sat26zuya.evaluateOnce = function () {
                            var hs_sat26zuy8 = new $hs.Thunk();
                            hs_sat26zuy8.evaluateOnce = function () {
                                var hs_sat26zuy6 = new $hs.Thunk();
                                hs_sat26zuy6.evaluateOnce = function () {
                                    return hs_minusPositive25r5mv.hscall(hs_y26zukZ, hs_onePositive25r5m1);
                                };
                                var hs_sat26zuy7 = new $hs.Thunk();
                                hs_sat26zuy7.evaluateOnce = function () {
                                    return hs_flipBitsDigits25r5lZ.hscall(hs_x26zukT);
                                };
                                return hs_andDigitsOnes25r5mR.hscall(hs_sat26zuy7, hs_sat26zuy6);
                            };
                            return hs_succPositive25r5mt.hscall(hs_sat26zuy8);
                        };
                        var hs_wild426zul6 = hs_removeZZeroTails25r5mj.hscall(hs_sat26zuya);
                        switch (hs_wild426zul6.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_wild426zul6];
                            return $res;
                        case 2:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    }
                case 2:
                    var hs_x26zulc = hs_wild226zuy5.data[0];
                    var hs_wild326zuyc = hs_wild126zukQ;
                    if (hs_wild126zukQ.notEvaluated) {
                        hs_wild326zuyc = hs_wild126zukQ.hscall();
                    }
                    switch (hs_wild326zuyc.tag) {
                    case 1:
                        var hs_y26zula = hs_wild326zuyc.data[0];
                        var hs_sat26zuyd = new $hs.Data(2);
                        hs_sat26zuyd.data = [hs_x26zulc];
                        var hs_sat26zuye = new $hs.Data(1);
                        hs_sat26zuye.data = [hs_y26zula];
                        return $hs.modules.GHCziInteger.hs_orInteger.hscall(hs_sat26zuye, hs_sat26zuyd);
                    case 2:
                        var hs_y26zulg = hs_wild326zuyc.data[0];
                        var hs_sat26zuyj = new $hs.Thunk();
                        hs_sat26zuyj.evaluateOnce = function () {
                            var hs_sat26zuyh = new $hs.Thunk();
                            hs_sat26zuyh.evaluateOnce = function () {
                                var hs_sat26zuyf = new $hs.Thunk();
                                hs_sat26zuyf.evaluateOnce = function () {
                                    return hs_minusPositive25r5mv.hscall(hs_y26zulg, hs_onePositive25r5m1);
                                };
                                var hs_sat26zuyg = new $hs.Thunk();
                                hs_sat26zuyg.evaluateOnce = function () {
                                    return hs_minusPositive25r5mv.hscall(hs_x26zulc, hs_onePositive25r5m1);
                                };
                                return hs_andDigits25r5mP.hscall(hs_sat26zuyg, hs_sat26zuyf);
                            };
                            return hs_succPositive25r5mt.hscall(hs_sat26zuyh);
                        };
                        var hs_wild426zuln = hs_removeZZeroTails25r5mj.hscall(hs_sat26zuyj);
                        switch (hs_wild426zuln.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_wild426zuln];
                            return $res;
                        case 2:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    }
                }
            }
        }
    };
    this.hs_negateInteger.evaluate = function (hs_ds26zulp) {
        var hs_wild26zuyl = hs_ds26zulp;
        if (hs_ds26zulp.notEvaluated) {
            hs_wild26zuyl = hs_ds26zulp.hscall();
        }
        switch (hs_wild26zuyl.tag) {
        case 1:
            var hs_p26zuls = hs_wild26zuyl.data[0];
            var $res = new $hs.Data(2);
            $res.data = [hs_p26zuls];
            return $res;
        case 2:
            var hs_p26zulu = hs_wild26zuyl.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_p26zulu];
            return $res;
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    this.hs_quotRemInteger.evaluate = function (hs_ds26zulx, hs_ds126zulz) {
        var hs_wild26zulB = hs_ds26zulx;
        if (hs_ds26zulx.notEvaluated) {
            hs_wild26zulB = hs_ds26zulx.hscall();
        }
        switch (hs_wild26zulB.tag) {
        case 3:
            var hs_ds226zuyw = hs_ds126zulz;
            if (hs_ds126zulz.notEvaluated) {
                hs_ds226zuyw = hs_ds126zulz.hscall();
            }
            return [$hs.modules.GHCziIntegerziType.hs_Naught, $hs.modules.GHCziIntegerziType.hs_Naught];
        default:
            var hs_wild126zulE = hs_ds126zulz;
            if (hs_ds126zulz.notEvaluated) {
                hs_wild126zulE = hs_ds126zulz.hscall();
            }
            switch (hs_wild126zulE.tag) {
            case 3:
                return [hs_errorInteger25r5lL, hs_errorInteger25r5lL];
            default:
                var hs_wild226zuyn = hs_wild26zulB;
                if (hs_wild26zulB.notEvaluated) {
                    hs_wild226zuyn = hs_wild26zulB.hscall();
                }
                switch (hs_wild226zuyn.tag) {
                case 1:
                    var hs_p126zulH = hs_wild226zuyn.data[0];
                    var hs_wild326zuym = hs_wild126zulE;
                    if (hs_wild126zulE.notEvaluated) {
                        hs_wild326zuym = hs_wild126zulE.hscall();
                    }
                    switch (hs_wild326zuym.tag) {
                    case 1:
                        var hs_p226zulI = hs_wild326zuym.data[0];
                        return hs_quotRemPositive25r5mL.hscall(hs_p126zulH, hs_p226zulI);
                    case 2:
                        var hs_p226zulK = hs_wild326zuym.data[0];
                        var hs_wild426zuyo = hs_quotRemPositive25r5mL.hscall(hs_p126zulH, hs_p226zulK);
                        var hs_q26zulO = hs_wild426zuyo[0];
                        var hs_r26zulQ = hs_wild426zuyo[1];
                        var hs_sat26zuyp = new $hs.Thunk();
                        hs_sat26zuyp.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_negateInteger.hscall(hs_q26zulO);
                        };
                        return [hs_sat26zuyp, hs_r26zulQ];
                    }
                case 2:
                    var hs_p126zulU = hs_wild226zuyn.data[0];
                    var hs_wild326zuyr = hs_wild126zulE;
                    if (hs_wild126zulE.notEvaluated) {
                        hs_wild326zuyr = hs_wild126zulE.hscall();
                    }
                    switch (hs_wild326zuyr.tag) {
                    case 1:
                        var hs_p226zulV = hs_wild326zuyr.data[0];
                        var hs_wild426zuyq = hs_quotRemPositive25r5mL.hscall(hs_p126zulU, hs_p226zulV);
                        var hs_q26zulZ = hs_wild426zuyq[0];
                        var hs_r26zum1 = hs_wild426zuyq[1];
                        var hs_sat26zuys = new $hs.Thunk();
                        hs_sat26zuys.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_negateInteger.hscall(hs_r26zum1);
                        };
                        var hs_sat26zuyt = new $hs.Thunk();
                        hs_sat26zuyt.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_negateInteger.hscall(hs_q26zulZ);
                        };
                        return [hs_sat26zuyt, hs_sat26zuys];
                    case 2:
                        var hs_p226zum4 = hs_wild326zuyr.data[0];
                        var hs_wild426zuyu = hs_quotRemPositive25r5mL.hscall(hs_p126zulU, hs_p226zum4);
                        var hs_q26zum8 = hs_wild426zuyu[0];
                        var hs_r26zum9 = hs_wild426zuyu[1];
                        var hs_sat26zuyv = new $hs.Thunk();
                        hs_sat26zuyv.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_negateInteger.hscall(hs_r26zum9);
                        };
                        return [hs_q26zum8, hs_sat26zuyv];
                    }
                }
            }
        }
    };
    this.hs_quotInteger.evaluate = function (hs_x26zume, hs_y26zumf) {
        var hs_wild26zuyx = $hs.modules.GHCziInteger.hs_quotRemInteger.hscall(hs_x26zume, hs_y26zumf);
        var hs_q26zumj = hs_wild26zuyx[0];
        if (hs_q26zumj.notEvaluated) {
            return hs_q26zumj.hscall();
        } else {
            return hs_q26zumj;
        }
    };
    this.hs_remInteger.evaluate = function (hs_x26zumm, hs_y26zumn) {
        var hs_wild26zuyA = $hs.modules.GHCziInteger.hs_quotRemInteger.hscall(hs_x26zumm, hs_y26zumn);
        var hs_r26zumr = hs_wild26zuyA[1];
        if (hs_r26zumr.notEvaluated) {
            return hs_r26zumr.hscall();
        } else {
            return hs_r26zumr;
        }
    };
    this.hs_smallInteger.evaluate = function (hs_i26zumt) {
        var hs_wild26zuyD = hs_i26zumt >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26zuyD.tag) {
        case 1:
            var hs_sat26zuyC = -hs_i26zumt;
            var hs_w26zumx = hs_sat26zuyC;
            var hs_wild126zuyB = hs_w26zumx == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild126zuyB.tag) {
            case 1:
                var hs_sat26zuyE = new $hs.Data(1);
                hs_sat26zuyE.data = [hs_w26zumx, $hs.modules.GHCziIntegerziType.hs_None];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26zuyE];
                return $res;
            case 2:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_w26zumB = hs_i26zumt;
            var hs_wild126zuyF = hs_w26zumB == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild126zuyF.tag) {
            case 1:
                var hs_sat26zuyG = new $hs.Data(1);
                hs_sat26zuyG.data = [hs_w26zumB, $hs.modules.GHCziIntegerziType.hs_None];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26zuyG];
                return $res;
            case 2:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        }
    };
    this.hs_minusInteger.evaluate = function (hs_i126zumG, hs_i226zumH) {
        var hs_sat26zuyH = new $hs.Thunk();
        hs_sat26zuyH.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_negateInteger.hscall(hs_i226zumH);
        };
        return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_i126zumG, hs_sat26zuyH);
    };
    this.hs_integerToWord.evaluate = function (hs_ds26zumK) {
        var hs_wild26zuyJ = hs_ds26zumK;
        if (hs_ds26zumK.notEvaluated) {
            hs_wild26zuyJ = hs_ds26zumK.hscall();
        }
        switch (hs_wild26zuyJ.tag) {
        case 1:
            var hs_ds126zumN = hs_wild26zuyJ.data[0];
            var hs_wild126zuyI = hs_ds126zumN;
            if (hs_ds126zumN.notEvaluated) {
                hs_wild126zuyI = hs_ds126zumN.hscall();
            }
            switch (hs_wild126zuyI.tag) {
            case 1:
                var hs_w26zumR = hs_wild126zuyI.data[0];
                if (hs_w26zumR.notEvaluated) {
                    return hs_w26zumR.hscall();
                } else {
                    return hs_w26zumR;
                }
            case 2:
                return 0;
            }
        case 2:
            var hs_ds126zumT = hs_wild26zuyJ.data[0];
            var hs_wild126zuyL = hs_ds126zumT;
            if (hs_ds126zumT.notEvaluated) {
                hs_wild126zuyL = hs_ds126zumT.hscall();
            }
            switch (hs_wild126zuyL.tag) {
            case 1:
                var hs_w26zumX = hs_wild126zuyL.data[0];
                return ($hs.Int.addCarry(0, ~hs_w26zumX, 1))[0];
            case 2:
                return 0;
            }
        case 3:
            return 0;
        }
    };
    this.hs_toIntzh.evaluate = function (hs_i26zumZ) {
        var hs_wild26zuyO = hs_i26zumZ;
        if (hs_i26zumZ.notEvaluated) {
            hs_wild26zuyO = hs_i26zumZ.hscall();
        }
        switch (hs_wild26zuyO.tag) {
        case 1:
            var hs_ds26zun2 = hs_wild26zuyO.data[0];
            var hs_wild126zuyN = hs_ds26zun2;
            if (hs_ds26zun2.notEvaluated) {
                hs_wild126zuyN = hs_ds26zun2.hscall();
            }
            switch (hs_wild126zuyN.tag) {
            case 1:
                var hs_w26zun6 = hs_wild126zuyN.data[0];
                return hs_w26zun6;
            case 2:
                return 0;
            }
        case 2:
            var hs_ds26zun8 = hs_wild26zuyO.data[0];
            var hs_wild126zuyR = hs_ds26zun8;
            if (hs_ds26zun8.notEvaluated) {
                hs_wild126zuyR = hs_ds26zun8.hscall();
            }
            switch (hs_wild126zuyR.tag) {
            case 1:
                var hs_w26zunc = hs_wild126zuyR.data[0];
                var hs_sat26zuyQ = ($hs.Int.addCarry(0, ~hs_w26zunc, 1))[0];
                return hs_sat26zuyQ;
            case 2:
                return 0;
            }
        case 3:
            return 0;
        }
    };
    this.hs_integerToInt64.evaluate = function (hs_ds26zunf) {
        var hs_wild26zuyT = hs_ds26zunf;
        if (hs_ds26zunf.notEvaluated) {
            hs_wild26zuyT = hs_ds26zunf.hscall();
        }
        switch (hs_wild26zuyT.tag) {
        case 1:
            var hs_p26zuni = hs_wild26zuyT.data[0];
            var hs_wild126zunk = hs_positiveToWord6425r5mn.hscall(hs_p26zuni);
            return $hs.modules.GHCziIntWord64.hs_word64ToInt64zh.hscall(hs_wild126zunk);
        case 2:
            var hs_p26zunm = hs_wild26zuyT.data[0];
            var hs_wild126zuno = hs_positiveToWord6425r5mn.hscall(hs_p26zunm);
            var hs_wild226zunq = $hs.modules.GHCziIntWord64.hs_word64ToInt64zh.hscall(hs_wild126zuno);
            return $hs.modules.GHCziIntWord64.hs_negateInt64zh.hscall(hs_wild226zunq);
        case 3:
            return $hs.modules.GHCziIntWord64.hs_intToInt64zh.hscall(0);
        }
    };
    this.hs_integerToWord64.evaluate = function (hs_i26zuns) {
        var hs_wild26zunu = $hs.modules.GHCziInteger.hs_integerToInt64.hscall(hs_i26zuns);
        return $hs.modules.GHCziIntWord64.hs_int64ToWord64zh.hscall(hs_wild26zunu);
    };
    this.hs_int64ToInteger.evaluate = function (hs_i26zunx) {
        var hs_wild26zuny = $hs.modules.GHCziIntWord64.hs_intToInt64zh.hscall(0);
        var hs_wild126zuyV = $hs.modules.GHCziIntWord64.hs_eqInt64zh.hscall(hs_i26zunx, hs_wild26zuny);
        switch (hs_wild126zuyV.tag) {
        case 1:
            var hs_wild226zunB = $hs.modules.GHCziIntWord64.hs_intToInt64zh.hscall(0);
            var hs_wild326zuyU = $hs.modules.GHCziIntWord64.hs_gtInt64zh.hscall(hs_i26zunx, hs_wild226zunB);
            switch (hs_wild326zuyU.tag) {
            case 1:
                var hs_wild426zunE = $hs.modules.GHCziIntWord64.hs_negateInt64zh.hscall(hs_i26zunx);
                var hs_wild526zunG = $hs.modules.GHCziIntWord64.hs_int64ToWord64zh.hscall(hs_wild426zunE);
                var hs_tpl226zunI = hs_word64ToPositive25r5ml.hscall(hs_wild526zunG);
                var $res = new $hs.Data(2);
                $res.data = [hs_tpl226zunI];
                return $res;
            case 2:
                var hs_wild426zunK = $hs.modules.GHCziIntWord64.hs_int64ToWord64zh.hscall(hs_i26zunx);
                var hs_tpl226zunM = hs_word64ToPositive25r5ml.hscall(hs_wild426zunK);
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl226zunM];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    this.hs_hashInteger.evaluate = function (hs_ds26zunO) {
        var hs_ds126zuyW = hs_ds26zunO;
        if (hs_ds26zunO.notEvaluated) {
            hs_ds126zuyW = hs_ds26zunO.hscall();
        }
        return 42;
    };
    this.hs_floatFromInteger.evaluate = function (hs_ds26zunR) {
        var hs_wild26zuyX = hs_ds26zunR;
        if (hs_ds26zunR.notEvaluated) {
            hs_wild26zuyX = hs_ds26zunR.hscall();
        }
        switch (hs_wild26zuyX.tag) {
        case 1:
            var hs_p26zunU = hs_wild26zuyX.data[0];
            return hs_floatFromPositive25r5mZ.hscall(hs_p26zunU);
        case 2:
            var hs_p26zunW = hs_wild26zuyX.data[0];
            var hs_wild126zunY = hs_floatFromPositive25r5mZ.hscall(hs_p26zunW);
            throw "primitive operation negateFloat#. Not implemeted yet.";
        case 3:
            return 0 % 1;
        }
    };
    this.hs_doubleFromInteger.evaluate = function (hs_ds26zuo0) {
        var hs_wild26zuyY = hs_ds26zuo0;
        if (hs_ds26zuo0.notEvaluated) {
            hs_wild26zuyY = hs_ds26zuo0.hscall();
        }
        switch (hs_wild26zuyY.tag) {
        case 1:
            var hs_p26zuo3 = hs_wild26zuyY.data[0];
            return hs_doubleFromPositive25r5mX.hscall(hs_p26zuo3);
        case 2:
            var hs_p26zuo5 = hs_wild26zuyY.data[0];
            var hs_wild126zuo7 = hs_doubleFromPositive25r5mX.hscall(hs_p26zuo5);
            throw "primitive operation negateDouble#. Not implemeted yet.";
        case 3:
            return 0 % 1;
        }
    };
    this.hs_decodeFloatInteger.evaluate = function (hs_f26zuo9) {
        throw "primitive operation decodeFloat_Int#. Not implemeted yet.";
        var hs_mant26zuod = hs_wild26zuyZ[0];
        var hs_exp26zuof = hs_wild26zuyZ[1];
        var hs_sat26zuz0 = new $hs.Thunk();
        hs_sat26zuz0.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_mant26zuod);
        };
        return [hs_sat26zuz0, hs_exp26zuof];
    };
    this.hs_decodeDoubleInteger.evaluate = function (hs_d26zuoh) {
        throw "primitive operation decodeDouble_2Int#. Not implemeted yet.";
        var hs_mantSign26zuon = hs_wild26zuz1[0];
        var hs_mantHigh26zuop = hs_wild26zuz1[1];
        var hs_mantLow26zuoD = hs_wild26zuz1[2];
        var hs_exp26zuoH = hs_wild26zuz1[3];
        var hs_sat26zuza = new $hs.Thunk();
        hs_sat26zuza.evaluateOnce = function () {
            var hs_sat26zuz8 = new $hs.Thunk();
            hs_sat26zuz8.evaluateOnce = function () {
                var hs_sat26zuz4 = new $hs.Thunk();
                hs_sat26zuz4.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_wordToInteger.hscall(hs_mantLow26zuoD);
                };
                var hs_sat26zuz7 = new $hs.Thunk();
                hs_sat26zuz7.evaluateOnce = function () {
                    var hs_wild126zuz3 = hs_mantHigh26zuop == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild126zuz3.tag) {
                    case 1:
                        var hs_wild226zuz2 = hs_twoToTheThirtytwoInteger25r5lT;
                        if (hs_twoToTheThirtytwoInteger25r5lT.notEvaluated) {
                            hs_wild226zuz2 = hs_twoToTheThirtytwoInteger25r5lT.hscall();
                        }
                        switch (hs_wild226zuz2.tag) {
                        case 1:
                            var hs_p226zuou = hs_wild226zuz2.data[0];
                            var hs_sat26zuz5 = new $hs.Data(1);
                            hs_sat26zuz5.data = [hs_mantHigh26zuop, $hs.modules.GHCziIntegerziType.hs_None];
                            var hs_tpl226zuow = hs_timesPositive25r5mx.hscall(hs_sat26zuz5, hs_p226zuou);
                            var $res = new $hs.Data(1);
                            $res.data = [hs_tpl226zuow];
                            return $res;
                        case 2:
                            var hs_p226zuoz = hs_wild226zuz2.data[0];
                            var hs_sat26zuz6 = new $hs.Data(1);
                            hs_sat26zuz6.data = [hs_mantHigh26zuop, $hs.modules.GHCziIntegerziType.hs_None];
                            var hs_tpl226zuoB = hs_timesPositive25r5mx.hscall(hs_sat26zuz6, hs_p226zuoz);
                            var $res = new $hs.Data(2);
                            $res.data = [hs_tpl226zuoB];
                            return $res;
                        case 3:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    case 2:
                        var $res = new $hs.Data(3);
                        $res.data = [];
                        return $res;
                    }
                };
                return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_sat26zuz7, hs_sat26zuz4);
            };
            var hs_sat26zuz9 = new $hs.Thunk();
            hs_sat26zuz9.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_mantSign26zuon);
            };
            return $hs.modules.GHCziInteger.hs_timesInteger.hscall(hs_sat26zuz9, hs_sat26zuz8);
        };
        return [hs_sat26zuza, hs_exp26zuoH];
    };
    this.hs_complementInteger.evaluate = function (hs_x26zuoJ) {
        var hs_sat26zuzb = new $hs.Thunk();
        hs_sat26zuzb.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_negateInteger.hscall(hs_x26zuoJ);
        };
        return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_negativeOneInteger25r5lR, hs_sat26zuzb);
    };
    this.hs_shiftRInteger.evaluate = function (hs_ds26zuoN, hs_i26zuoR) {
        var hs_wild26zuoT = hs_ds26zuoN;
        if (hs_ds26zuoN.notEvaluated) {
            hs_wild26zuoT = hs_ds26zuoN.hscall();
        }
        switch (hs_wild26zuoT.tag) {
        case 1:
            var hs_p26zuoQ = hs_wild26zuoT.data[0];
            return hs_shiftRPositive25r5mH.hscall(hs_p26zuoQ, hs_i26zuoR);
        case 2:
            var hs_sat26zuzh = new $hs.Thunk();
            hs_sat26zuzh.evaluateOnce = function () {
                var hs_sat26zuzg = new $hs.Thunk();
                hs_sat26zuzg.evaluateOnce = function () {
                    var hs_sat26zuze = new $hs.Thunk();
                    hs_sat26zuze.evaluateOnce = function () {
                        var hs_wild126zuzc = hs_wild26zuoT;
                        if (hs_wild26zuoT.notEvaluated) {
                            hs_wild126zuzc = hs_wild26zuoT.hscall();
                        }
                        switch (hs_wild126zuzc.tag) {
                        case 1:
                            var hs_p26zuoW = hs_wild126zuzc.data[0];
                            var $res = new $hs.Data(2);
                            $res.data = [hs_p26zuoW];
                            return $res;
                        case 2:
                            var hs_p26zuoY = hs_wild126zuzc.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_p26zuoY];
                            return $res;
                        case 3:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    };
                    return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_negativeOneInteger25r5lR, hs_sat26zuze);
                };
                var hs_wild126zuzf = $hs.modules.GHCziInteger.hs_shiftRInteger.hscall(hs_sat26zuzg, hs_i26zuoR);
                switch (hs_wild126zuzf.tag) {
                case 1:
                    var hs_p26zup3 = hs_wild126zuzf.data[0];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_p26zup3];
                    return $res;
                case 2:
                    var hs_p26zup5 = hs_wild126zuzf.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_p26zup5];
                    return $res;
                case 3:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                }
            };
            return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_negativeOneInteger25r5lR, hs_sat26zuzh);
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    this.hs_compareInteger.evaluate = function (hs_ds26zup9, hs_ds126zupc) {
        var hs_wild26zuzj = hs_ds26zup9;
        if (hs_ds26zup9.notEvaluated) {
            hs_wild26zuzj = hs_ds26zup9.hscall();
        }
        switch (hs_wild26zuzj.tag) {
        case 1:
            var hs_x26zupf = hs_wild26zuzj.data[0];
            var hs_wild126zuzi = hs_ds126zupc;
            if (hs_ds126zupc.notEvaluated) {
                hs_wild126zuzi = hs_ds126zupc.hscall();
            }
            switch (hs_wild126zuzi.tag) {
            case 1:
                var hs_y26zupg = hs_wild126zuzi.data[0];
                return hs_comparePositive25r5mp.hscall(hs_x26zupf, hs_y26zupg);
            default:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_x26zupl = hs_wild26zuzj.data[0];
            var hs_wild126zuzk = hs_ds126zupc;
            if (hs_ds126zupc.notEvaluated) {
                hs_wild126zuzk = hs_ds126zupc.hscall();
            }
            switch (hs_wild126zuzk.tag) {
            case 2:
                var hs_y26zupk = hs_wild126zuzk.data[0];
                return hs_comparePositive25r5mp.hscall(hs_y26zupk, hs_x26zupl);
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126zuzm = hs_ds126zupc;
            if (hs_ds126zupc.notEvaluated) {
                hs_wild126zuzm = hs_ds126zupc.hscall();
            }
            switch (hs_wild126zuzm.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        }
    };
    this.hs_eqInteger.evaluate = function (hs_x26zupr, hs_y26zupu) {
        var hs_wild26zuzp = hs_x26zupr;
        if (hs_x26zupr.notEvaluated) {
            hs_wild26zuzp = hs_x26zupr.hscall();
        }
        switch (hs_wild26zuzp.tag) {
        case 1:
            var hs_x126zupx = hs_wild26zuzp.data[0];
            var hs_wild126zuzo = hs_y26zupu;
            if (hs_y26zupu.notEvaluated) {
                hs_wild126zuzo = hs_y26zupu.hscall();
            }
            switch (hs_wild126zuzo.tag) {
            case 1:
                var hs_y126zupy = hs_wild126zuzo.data[0];
                var hs_wild226zuzq = hs_comparePositive25r5mp.hscall(hs_x126zupx, hs_y126zupy);
                switch (hs_wild226zuzq.tag) {
                case 2:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                default:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_x126zupE = hs_wild26zuzp.data[0];
            var hs_wild126zuzr = hs_y26zupu;
            if (hs_y26zupu.notEvaluated) {
                hs_wild126zuzr = hs_y26zupu.hscall();
            }
            switch (hs_wild126zuzr.tag) {
            case 2:
                var hs_y126zupD = hs_wild126zuzr.data[0];
                var hs_wild226zuzs = hs_comparePositive25r5mp.hscall(hs_y126zupD, hs_x126zupE);
                switch (hs_wild226zuzs.tag) {
                case 2:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                default:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126zuzu = hs_y26zupu;
            if (hs_y26zupu.notEvaluated) {
                hs_wild126zuzu = hs_y26zupu.hscall();
            }
            switch (hs_wild126zuzu.tag) {
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
            }
        }
    };
    this.hs_divModInteger.evaluate = function (hs_n26zupL, hs_d26zupM) {
        var hs_wild26zuzz = $hs.modules.GHCziInteger.hs_quotRemInteger.hscall(hs_n26zupL, hs_d26zupM);
        var hs_q26zuq7 = hs_wild26zuzz[0];
        var hs_r26zuqf = hs_wild26zuzz[1];
        var hs_ds26zuq4 = new $hs.Thunk();
        hs_ds26zuq4.evaluateOnce = function () {
            var hs_wild126zuzy = hs_d26zupM;
            if (hs_d26zupM.notEvaluated) {
                hs_wild126zuzy = hs_d26zupM.hscall();
            }
            switch (hs_wild126zuzy.tag) {
            case 1:
                var hs_wild226zuzw = hs_oneInteger25r5lP;
                if (hs_oneInteger25r5lP.notEvaluated) {
                    hs_wild226zuzw = hs_oneInteger25r5lP.hscall();
                }
                switch (hs_wild226zuzw.tag) {
                case 1:
                    var hs_p26zupV = hs_wild226zuzw.data[0];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_p26zupV];
                    return $res;
                case 2:
                    var hs_p26zupX = hs_wild226zuzw.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_p26zupX];
                    return $res;
                case 3:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                }
            case 2:
                var hs_wild226zuzA = hs_negativeOneInteger25r5lR;
                if (hs_negativeOneInteger25r5lR.notEvaluated) {
                    hs_wild226zuzA = hs_negativeOneInteger25r5lR.hscall();
                }
                switch (hs_wild226zuzA.tag) {
                case 1:
                    var hs_p26zuq1 = hs_wild226zuzA.data[0];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_p26zuq1];
                    return $res;
                case 2:
                    var hs_p26zuq3 = hs_wild226zuzA.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_p26zuq3];
                    return $res;
                case 3:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                }
            case 3:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        };
        var hs_zdj26zuqi = new $hs.Func(1);
        hs_zdj26zuqi.evaluate = function (hs_w26zuqh) {
            var hs_sat26zuzD = new $hs.Thunk();
            hs_sat26zuzD.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_r26zuqf, hs_d26zupM);
            };
            var hs_sat26zuzF = new $hs.Thunk();
            hs_sat26zuzF.evaluateOnce = function () {
                var hs_sat26zuzE = new $hs.Thunk();
                hs_sat26zuzE.evaluateOnce = function () {
                    var hs_wild126zuzC = hs_oneInteger25r5lP;
                    if (hs_oneInteger25r5lP.notEvaluated) {
                        hs_wild126zuzC = hs_oneInteger25r5lP.hscall();
                    }
                    switch (hs_wild126zuzC.tag) {
                    case 1:
                        var hs_p26zuqa = hs_wild126zuzC.data[0];
                        var $res = new $hs.Data(2);
                        $res.data = [hs_p26zuqa];
                        return $res;
                    case 2:
                        var hs_p26zuqc = hs_wild126zuzC.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_p26zuqc];
                        return $res;
                    case 3:
                        var $res = new $hs.Data(3);
                        $res.data = [];
                        return $res;
                    }
                };
                return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_q26zuq7, hs_sat26zuzE);
            };
            return [hs_sat26zuzF, hs_sat26zuzD];
        };
        var hs_zdj126zuqq = new $hs.Func(1);
        hs_zdj126zuqq.evaluate = function (hs_x26zuqn) {
            var hs_wild126zuzG = hs_ds26zuq4;
            if (hs_ds26zuq4.notEvaluated) {
                hs_wild126zuzG = hs_ds26zuq4.hscall();
            }
            switch (hs_wild126zuzG.tag) {
            case 1:
                var hs_y26zuqo = hs_wild126zuzG.data[0];
                var hs_wild226zuzH = hs_comparePositive25r5mp.hscall(hs_x26zuqn, hs_y26zuqo);
                switch (hs_wild226zuzH.tag) {
                case 2:
                    return hs_zdj26zuqi.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                default:
                    return [hs_q26zuq7, hs_r26zuqf];
                }
            default:
                return [hs_q26zuq7, hs_r26zuqf];
            }
        };
        var hs_zdj226zuqy = new $hs.Func(1);
        hs_zdj226zuqy.evaluate = function (hs_x26zuqw) {
            var hs_wild126zuzI = hs_ds26zuq4;
            if (hs_ds26zuq4.notEvaluated) {
                hs_wild126zuzI = hs_ds26zuq4.hscall();
            }
            switch (hs_wild126zuzI.tag) {
            case 2:
                var hs_y26zuqv = hs_wild126zuzI.data[0];
                var hs_wild226zuzJ = hs_comparePositive25r5mp.hscall(hs_y26zuqv, hs_x26zuqw);
                switch (hs_wild226zuzJ.tag) {
                case 2:
                    return hs_zdj26zuqi.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                default:
                    return [hs_q26zuq7, hs_r26zuqf];
                }
            default:
                return [hs_q26zuq7, hs_r26zuqf];
            }
        };
        var hs_wild126zuqI = hs_r26zuqf;
        if (hs_r26zuqf.notEvaluated) {
            hs_wild126zuqI = hs_r26zuqf.hscall();
        }
        switch (hs_wild126zuqI.tag) {
        case 1:
            var hs_wild226zuzK = hs_oneInteger25r5lP;
            if (hs_oneInteger25r5lP.notEvaluated) {
                hs_wild226zuzK = hs_oneInteger25r5lP.hscall();
            }
            switch (hs_wild226zuzK.tag) {
            case 1:
                var hs_x26zuqD = hs_wild226zuzK.data[0];
                return hs_zdj126zuqq.hscall(hs_x26zuqD);
            case 2:
                var hs_x26zuqF = hs_wild226zuzK.data[0];
                return hs_zdj226zuqy.hscall(hs_x26zuqF);
            case 3:
                var hs_wild326zuzN = hs_ds26zuq4;
                if (hs_ds26zuq4.notEvaluated) {
                    hs_wild326zuzN = hs_ds26zuq4.hscall();
                }
                switch (hs_wild326zuzN.tag) {
                case 1:
                    return [hs_q26zuq7, hs_wild126zuqI];
                case 2:
                    return [hs_q26zuq7, hs_wild126zuqI];
                case 3:
                    return hs_zdj26zuqi.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            }
        case 2:
            var hs_wild226zuzP = hs_negativeOneInteger25r5lR;
            if (hs_negativeOneInteger25r5lR.notEvaluated) {
                hs_wild226zuzP = hs_negativeOneInteger25r5lR.hscall();
            }
            switch (hs_wild226zuzP.tag) {
            case 1:
                var hs_x26zuqN = hs_wild226zuzP.data[0];
                return hs_zdj126zuqq.hscall(hs_x26zuqN);
            case 2:
                var hs_x26zuqP = hs_wild226zuzP.data[0];
                return hs_zdj226zuqy.hscall(hs_x26zuqP);
            case 3:
                var hs_wild326zuzS = hs_ds26zuq4;
                if (hs_ds26zuq4.notEvaluated) {
                    hs_wild326zuzS = hs_ds26zuq4.hscall();
                }
                switch (hs_wild326zuzS.tag) {
                case 1:
                    return [hs_q26zuq7, hs_wild126zuqI];
                case 2:
                    return [hs_q26zuq7, hs_wild126zuqI];
                case 3:
                    return hs_zdj26zuqi.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            }
        case 3:
            var hs_wild226zuzV = hs_ds26zuq4;
            if (hs_ds26zuq4.notEvaluated) {
                hs_wild226zuzV = hs_ds26zuq4.hscall();
            }
            switch (hs_wild226zuzV.tag) {
            case 1:
                return [hs_q26zuq7, $hs.modules.GHCziIntegerziType.hs_Naught];
            case 2:
                return [hs_q26zuq7, $hs.modules.GHCziIntegerziType.hs_Naught];
            case 3:
                return hs_zdj26zuqi.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        }
    };
    this.hs_geInteger.evaluate = function (hs_x26zuqY, hs_y26zur1) {
        var hs_wild26zuzY = hs_x26zuqY;
        if (hs_x26zuqY.notEvaluated) {
            hs_wild26zuzY = hs_x26zuqY.hscall();
        }
        switch (hs_wild26zuzY.tag) {
        case 1:
            var hs_x126zur4 = hs_wild26zuzY.data[0];
            var hs_wild126zuzX = hs_y26zur1;
            if (hs_y26zur1.notEvaluated) {
                hs_wild126zuzX = hs_y26zur1.hscall();
            }
            switch (hs_wild126zuzX.tag) {
            case 1:
                var hs_y126zur5 = hs_wild126zuzX.data[0];
                var hs_wild226zuzZ = hs_comparePositive25r5mp.hscall(hs_x126zur4, hs_y126zur5);
                switch (hs_wild226zuzZ.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                default:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_x126zurb = hs_wild26zuzY.data[0];
            var hs_wild126zuA0 = hs_y26zur1;
            if (hs_y26zur1.notEvaluated) {
                hs_wild126zuA0 = hs_y26zur1.hscall();
            }
            switch (hs_wild126zuA0.tag) {
            case 2:
                var hs_y126zura = hs_wild126zuA0.data[0];
                var hs_wild226zuA1 = hs_comparePositive25r5mp.hscall(hs_y126zura, hs_x126zurb);
                switch (hs_wild226zuA1.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                default:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126zuA3 = hs_y26zur1;
            if (hs_y26zur1.notEvaluated) {
                hs_wild126zuA3 = hs_y26zur1.hscall();
            }
            switch (hs_wild126zuA3.tag) {
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
            }
        }
    };
    this.hs_gtInteger.evaluate = function (hs_x26zuri, hs_y26zurl) {
        var hs_wild26zuA6 = hs_x26zuri;
        if (hs_x26zuri.notEvaluated) {
            hs_wild26zuA6 = hs_x26zuri.hscall();
        }
        switch (hs_wild26zuA6.tag) {
        case 1:
            var hs_x126zuro = hs_wild26zuA6.data[0];
            var hs_wild126zuA5 = hs_y26zurl;
            if (hs_y26zurl.notEvaluated) {
                hs_wild126zuA5 = hs_y26zurl.hscall();
            }
            switch (hs_wild126zuA5.tag) {
            case 1:
                var hs_y126zurp = hs_wild126zuA5.data[0];
                var hs_wild226zuA7 = hs_comparePositive25r5mp.hscall(hs_x126zuro, hs_y126zurp);
                switch (hs_wild226zuA7.tag) {
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                default:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_x126zurv = hs_wild26zuA6.data[0];
            var hs_wild126zuA8 = hs_y26zurl;
            if (hs_y26zurl.notEvaluated) {
                hs_wild126zuA8 = hs_y26zurl.hscall();
            }
            switch (hs_wild126zuA8.tag) {
            case 2:
                var hs_y126zuru = hs_wild126zuA8.data[0];
                var hs_wild226zuA9 = hs_comparePositive25r5mp.hscall(hs_y126zuru, hs_x126zurv);
                switch (hs_wild226zuA9.tag) {
                case 3:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                default:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126zuAb = hs_y26zurl;
            if (hs_y26zurl.notEvaluated) {
                hs_wild126zuAb = hs_y26zurl.hscall();
            }
            switch (hs_wild126zuAb.tag) {
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
            }
        }
    };
    this.hs_leInteger.evaluate = function (hs_x26zurC, hs_y26zurF) {
        var hs_wild26zuAe = hs_x26zurC;
        if (hs_x26zurC.notEvaluated) {
            hs_wild26zuAe = hs_x26zurC.hscall();
        }
        switch (hs_wild26zuAe.tag) {
        case 1:
            var hs_x126zurI = hs_wild26zuAe.data[0];
            var hs_wild126zuAd = hs_y26zurF;
            if (hs_y26zurF.notEvaluated) {
                hs_wild126zuAd = hs_y26zurF.hscall();
            }
            switch (hs_wild126zuAd.tag) {
            case 1:
                var hs_y126zurJ = hs_wild126zuAd.data[0];
                var hs_wild226zuAf = hs_comparePositive25r5mp.hscall(hs_x126zurI, hs_y126zurJ);
                switch (hs_wild226zuAf.tag) {
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                default:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_x126zurP = hs_wild26zuAe.data[0];
            var hs_wild126zuAg = hs_y26zurF;
            if (hs_y26zurF.notEvaluated) {
                hs_wild126zuAg = hs_y26zurF.hscall();
            }
            switch (hs_wild126zuAg.tag) {
            case 2:
                var hs_y126zurO = hs_wild126zuAg.data[0];
                var hs_wild226zuAh = hs_comparePositive25r5mp.hscall(hs_y126zurO, hs_x126zurP);
                switch (hs_wild226zuAh.tag) {
                case 3:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                default:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126zuAj = hs_y26zurF;
            if (hs_y26zurF.notEvaluated) {
                hs_wild126zuAj = hs_y26zurF.hscall();
            }
            switch (hs_wild126zuAj.tag) {
            case 1:
                var $res = new $hs.Data(2);
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
            }
        }
    };
    this.hs_ltInteger.evaluate = function (hs_x26zurW, hs_y26zurZ) {
        var hs_wild26zuAm = hs_x26zurW;
        if (hs_x26zurW.notEvaluated) {
            hs_wild26zuAm = hs_x26zurW.hscall();
        }
        switch (hs_wild26zuAm.tag) {
        case 1:
            var hs_x126zus2 = hs_wild26zuAm.data[0];
            var hs_wild126zuAl = hs_y26zurZ;
            if (hs_y26zurZ.notEvaluated) {
                hs_wild126zuAl = hs_y26zurZ.hscall();
            }
            switch (hs_wild126zuAl.tag) {
            case 1:
                var hs_y126zus3 = hs_wild126zuAl.data[0];
                var hs_wild226zuAn = hs_comparePositive25r5mp.hscall(hs_x126zus2, hs_y126zus3);
                switch (hs_wild226zuAn.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                default:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_x126zus9 = hs_wild26zuAm.data[0];
            var hs_wild126zuAo = hs_y26zurZ;
            if (hs_y26zurZ.notEvaluated) {
                hs_wild126zuAo = hs_y26zurZ.hscall();
            }
            switch (hs_wild126zuAo.tag) {
            case 2:
                var hs_y126zus8 = hs_wild126zuAo.data[0];
                var hs_wild226zuAp = hs_comparePositive25r5mp.hscall(hs_y126zus8, hs_x126zus9);
                switch (hs_wild226zuAp.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                default:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126zuAr = hs_y26zurZ;
            if (hs_y26zurZ.notEvaluated) {
                hs_wild126zuAr = hs_y26zurZ.hscall();
            }
            switch (hs_wild126zuAr.tag) {
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
            }
        }
    };
    this.hs_neqInteger.evaluate = function (hs_x26zusg, hs_y26zusj) {
        var hs_wild26zuAu = hs_x26zusg;
        if (hs_x26zusg.notEvaluated) {
            hs_wild26zuAu = hs_x26zusg.hscall();
        }
        switch (hs_wild26zuAu.tag) {
        case 1:
            var hs_x126zusm = hs_wild26zuAu.data[0];
            var hs_wild126zuAt = hs_y26zusj;
            if (hs_y26zusj.notEvaluated) {
                hs_wild126zuAt = hs_y26zusj.hscall();
            }
            switch (hs_wild126zuAt.tag) {
            case 1:
                var hs_y126zusn = hs_wild126zuAt.data[0];
                var hs_wild226zuAv = hs_comparePositive25r5mp.hscall(hs_x126zusm, hs_y126zusn);
                switch (hs_wild226zuAv.tag) {
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                default:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_x126zust = hs_wild26zuAu.data[0];
            var hs_wild126zuAw = hs_y26zusj;
            if (hs_y26zusj.notEvaluated) {
                hs_wild126zuAw = hs_y26zusj.hscall();
            }
            switch (hs_wild126zuAw.tag) {
            case 2:
                var hs_y126zuss = hs_wild126zuAw.data[0];
                var hs_wild226zuAx = hs_comparePositive25r5mp.hscall(hs_y126zuss, hs_x126zust);
                switch (hs_wild226zuAx.tag) {
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                default:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                }
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126zuAz = hs_y26zusj;
            if (hs_y26zusj.notEvaluated) {
                hs_wild126zuAz = hs_y26zusj.hscall();
            }
            switch (hs_wild126zuAz.tag) {
            case 1:
                var $res = new $hs.Data(2);
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
            }
        }
    };
    this.hs_andInteger.evaluate = function (hs_ds26zusA, hs_ds126zusC) {
        var hs_wild26zusE = hs_ds26zusA;
        if (hs_ds26zusA.notEvaluated) {
            hs_wild26zusE = hs_ds26zusA.hscall();
        }
        switch (hs_wild26zusE.tag) {
        case 3:
            var hs_ds226zuAU = hs_ds126zusC;
            if (hs_ds126zusC.notEvaluated) {
                hs_ds226zuAU = hs_ds126zusC.hscall();
            }
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        default:
            var hs_wild126zusH = hs_ds126zusC;
            if (hs_ds126zusC.notEvaluated) {
                hs_wild126zusH = hs_ds126zusC.hscall();
            }
            switch (hs_wild126zusH.tag) {
            case 3:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            default:
                var hs_wild226zuAC = hs_wild26zusE;
                if (hs_wild26zusE.notEvaluated) {
                    hs_wild226zuAC = hs_wild26zusE.hscall();
                }
                switch (hs_wild226zuAC.tag) {
                case 1:
                    var hs_x26zusK = hs_wild226zuAC.data[0];
                    var hs_wild326zuAB = hs_wild126zusH;
                    if (hs_wild126zusH.notEvaluated) {
                        hs_wild326zuAB = hs_wild126zusH.hscall();
                    }
                    switch (hs_wild326zuAB.tag) {
                    case 1:
                        var hs_y26zusL = hs_wild326zuAB.data[0];
                        var hs_sat26zuAE = new $hs.Thunk();
                        hs_sat26zuAE.evaluateOnce = function () {
                            return hs_andDigits25r5mP.hscall(hs_x26zusK, hs_y26zusL);
                        };
                        var hs_wild426zusQ = hs_removeZZeroTails25r5mj.hscall(hs_sat26zuAE);
                        switch (hs_wild426zusQ.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [hs_wild426zusQ];
                            return $res;
                        case 2:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    case 2:
                        var hs_y26zusS = hs_wild326zuAB.data[0];
                        var hs_sat26zuAJ = new $hs.Thunk();
                        hs_sat26zuAJ.evaluateOnce = function () {
                            var hs_sat26zuAH = new $hs.Thunk();
                            hs_sat26zuAH.evaluateOnce = function () {
                                var hs_sat26zuAG = new $hs.Thunk();
                                hs_sat26zuAG.evaluateOnce = function () {
                                    return hs_minusPositive25r5mv.hscall(hs_y26zusS, hs_onePositive25r5m1);
                                };
                                return hs_flipBitsDigits25r5lZ.hscall(hs_sat26zuAG);
                            };
                            return hs_andDigitsOnes25r5mR.hscall(hs_sat26zuAH, hs_x26zusK);
                        };
                        var hs_wild426zusZ = hs_removeZZeroTails25r5mj.hscall(hs_sat26zuAJ);
                        switch (hs_wild426zusZ.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [hs_wild426zusZ];
                            return $res;
                        case 2:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    }
                case 2:
                    var hs_x26zut5 = hs_wild226zuAC.data[0];
                    var hs_wild326zuAL = hs_wild126zusH;
                    if (hs_wild126zusH.notEvaluated) {
                        hs_wild326zuAL = hs_wild126zusH.hscall();
                    }
                    switch (hs_wild326zuAL.tag) {
                    case 1:
                        var hs_y26zut3 = hs_wild326zuAL.data[0];
                        var hs_sat26zuAM = new $hs.Data(2);
                        hs_sat26zuAM.data = [hs_x26zut5];
                        var hs_sat26zuAN = new $hs.Data(1);
                        hs_sat26zuAN.data = [hs_y26zut3];
                        return $hs.modules.GHCziInteger.hs_andInteger.hscall(hs_sat26zuAN, hs_sat26zuAM);
                    case 2:
                        var hs_y26zut9 = hs_wild326zuAL.data[0];
                        var hs_sat26zuAS = new $hs.Thunk();
                        hs_sat26zuAS.evaluateOnce = function () {
                            var hs_sat26zuAQ = new $hs.Thunk();
                            hs_sat26zuAQ.evaluateOnce = function () {
                                var hs_sat26zuAO = new $hs.Thunk();
                                hs_sat26zuAO.evaluateOnce = function () {
                                    return hs_minusPositive25r5mv.hscall(hs_y26zut9, hs_onePositive25r5m1);
                                };
                                var hs_sat26zuAP = new $hs.Thunk();
                                hs_sat26zuAP.evaluateOnce = function () {
                                    return hs_minusPositive25r5mv.hscall(hs_x26zut5, hs_onePositive25r5m1);
                                };
                                return hs_orDigits25r5mT.hscall(hs_sat26zuAP, hs_sat26zuAO);
                            };
                            return hs_succPositive25r5mt.hscall(hs_sat26zuAQ);
                        };
                        var hs_wild426zutg = hs_removeZZeroTails25r5mj.hscall(hs_sat26zuAS);
                        switch (hs_wild426zutg.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_wild426zutg];
                            return $res;
                        case 2:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    }
                }
            }
        }
    };
    this.hs_absInteger.evaluate = function (hs_ds26zutj) {
        var hs_wild26zutl = hs_ds26zutj;
        if (hs_ds26zutj.notEvaluated) {
            hs_wild26zutl = hs_ds26zutj.hscall();
        }
        switch (hs_wild26zutl.tag) {
        case 2:
            var hs_x26zutn = hs_wild26zutl.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_x26zutn];
            return $res;
        default:
            if (hs_wild26zutl.notEvaluated) {
                return hs_wild26zutl.hscall();
            } else {
                return hs_wild26zutl;
            }
        }
    };
    this.hs_encodeDoubleInteger.evaluate = function (hs_ds26zutq, hs_e026zutP) {
        var hs_wild26zuB0 = hs_ds26zutq;
        if (hs_ds26zutq.notEvaluated) {
            hs_wild26zuB0 = hs_ds26zutq.hscall();
        }
        switch (hs_wild26zuB0.tag) {
        case 1:
            var hs_ds026zutO = hs_wild26zuB0.data[0];
            var hs_f26zutK = new $hs.Func(3);
            hs_f26zutK.evaluate = function (hs_acc26zutI, hs_ds126zutx, hs_ds226zutD) {
                var hs_wild126zuAZ = hs_ds126zutx;
                if (hs_ds126zutx.notEvaluated) {
                    hs_wild126zuAZ = hs_ds126zutx.hscall();
                }
                switch (hs_wild126zuAZ.tag) {
                case 1:
                    var hs_d26zutC = hs_wild126zuAZ.data[0];
                    var hs_ds326zutM = hs_wild126zuAZ.data[1];
                    var hs_wild226zuAY = [$hs.modules.GHCziPrim.hs_realWorldzh, __word_encodeDouble(hs_d26zutC, hs_ds226zutD)];
                    var hs_ds526zutJ = hs_wild226zuAY[1];
                    var hs_sat26zuAV = ($hs.Int.addCarry(hs_ds226zutD, 32, 0))[0];
                    throw "primitive operation +##. Not implemeted yet.";
                    return hs_f26zutK.hscall(hs_sat26zuAW, hs_ds326zutM, hs_sat26zuAV);
                case 2:
                    if (hs_acc26zutI.notEvaluated) {
                        return hs_acc26zutI.hscall();
                    } else {
                        return hs_acc26zutI;
                    }
                }
            };
            return hs_f26zutK.hscall(0 % 1, hs_ds026zutO, hs_e026zutP);
        case 2:
            var hs_ds126zutR = hs_wild26zuB0.data[0];
            var hs_sat26zuB1 = new $hs.Data(1);
            hs_sat26zuB1.data = [hs_ds126zutR];
            var hs_wild126zutU = $hs.modules.GHCziInteger.hs_encodeDoubleInteger.hscall(hs_sat26zuB1, hs_e026zutP);
            throw "primitive operation negateDouble#. Not implemeted yet.";
        case 3:
            return 0 % 1;
        }
    };
    this.hs_encodeFloatInteger.evaluate = function (hs_ds26zutX, hs_e026zuum) {
        var hs_wild26zuB7 = hs_ds26zutX;
        if (hs_ds26zutX.notEvaluated) {
            hs_wild26zuB7 = hs_ds26zutX.hscall();
        }
        switch (hs_wild26zuB7.tag) {
        case 1:
            var hs_ds026zuul = hs_wild26zuB7.data[0];
            var hs_f26zuuh = new $hs.Func(3);
            hs_f26zuuh.evaluate = function (hs_acc26zuuf, hs_ds126zuu4, hs_ds226zuua) {
                var hs_wild126zuB6 = hs_ds126zuu4;
                if (hs_ds126zuu4.notEvaluated) {
                    hs_wild126zuB6 = hs_ds126zuu4.hscall();
                }
                switch (hs_wild126zuB6.tag) {
                case 1:
                    var hs_d26zuu9 = hs_wild126zuB6.data[0];
                    var hs_ds326zuuj = hs_wild126zuB6.data[1];
                    var hs_wild226zuB5 = [$hs.modules.GHCziPrim.hs_realWorldzh, __word_encodeFloat(hs_d26zuu9, hs_ds226zuua)];
                    var hs_ds526zuug = hs_wild226zuB5[1];
                    var hs_sat26zuB2 = ($hs.Int.addCarry(hs_ds226zuua, 32, 0))[0];
                    throw "primitive operation plusFloat#. Not implemeted yet.";
                    return hs_f26zuuh.hscall(hs_sat26zuB3, hs_ds326zuuj, hs_sat26zuB2);
                case 2:
                    if (hs_acc26zuuf.notEvaluated) {
                        return hs_acc26zuuf.hscall();
                    } else {
                        return hs_acc26zuuf;
                    }
                }
            };
            return hs_f26zuuh.hscall(0 % 1, hs_ds026zuul, hs_e026zuum);
        case 2:
            var hs_ds126zuuo = hs_wild26zuB7.data[0];
            var hs_sat26zuB8 = new $hs.Data(1);
            hs_sat26zuB8.data = [hs_ds126zuuo];
            var hs_wild126zuur = $hs.modules.GHCziInteger.hs_encodeFloatInteger.hscall(hs_sat26zuB8, hs_e026zuum);
            throw "primitive operation negateFloat#. Not implemeted yet.";
        case 3:
            return 0 % 1;
        }
    };
    this.hs_DigitsOnes.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.GHCziInteger.hs_DigitsOnes.hscall(hs_eta1cW6l3);
    };
};
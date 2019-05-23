
$hs.modules.GHCziInteger = new $hs.Module();
$hs.modules.GHCziInteger.dependencies = ["GHC.Prim", "GHC.IntWord64", "Control.Exception.Base", "GHC.Integer.Type"];
$hs.modules.GHCziInteger.initBeforeDependencies = function () {
    this.hs_hashInteger = new $hs.Func(1);
    this.hs_absInteger = new $hs.Func(1);
    this.hs_compareInteger = new $hs.Func(2);
    this.hs_eqInteger = new $hs.Func(2);
    this.hs_neqInteger = new $hs.Func(2);
    this.hs_ltInteger = new $hs.Func(2);
    this.hs_gtInteger = new $hs.Func(2);
    this.hs_leInteger = new $hs.Func(2);
    this.hs_geInteger = new $hs.Func(2);
    this.hs_negateInteger = new $hs.Func(1);
    this.hs_shiftLInteger = new $hs.Func(2);
    this.hs_floatFromInteger = new $hs.Func(1);
    this.hs_doubleFromInteger = new $hs.Func(1);
    this.hs_signumInteger = new $hs.Func(1);
    this.hs_int64ToInteger = new $hs.Func(1);
    this.hs_integerToInt64 = new $hs.Func(1);
    this.hs_word64ToInteger = new $hs.Func(1);
    this.hs_integerToWord64 = new $hs.Func(1);
    this.hs_integerToWord = new $hs.Func(1);
    this.hs_integerToInt = new $hs.Func(1);
    this.hs_wordToInteger = new $hs.Func(1);
    this.hs_smallInteger = new $hs.Func(1);
    this.hs_decodeFloatInteger = new $hs.Func(1);
    this.hs_orInteger = new $hs.Func(2);
    this.hs_xorInteger = new $hs.Func(2);
    this.hs_andInteger = new $hs.Func(2);
    this.hs_plusInteger = new $hs.Func(2);
    this.hs_minusInteger = new $hs.Func(2);
    this.hs_complementInteger = new $hs.Func(1);
    this.hs_shiftRInteger = new $hs.Func(2);
    this.hs_timesInteger = new $hs.Func(2);
    this.hs_decodeDoubleInteger = new $hs.Func(1);
    this.hs_quotRemInteger = new $hs.Func(2);
    this.hs_divModInteger = new $hs.Func(2);
    this.hs_quotInteger = new $hs.Func(2);
    this.hs_remInteger = new $hs.Func(2);
    this.hs_encodeDoubleInteger = new $hs.Func(2);
    this.hs_encodeFloatInteger = new $hs.Func(2);
    this.hs_DigitsOnes = new $hs.Func(1);
    this.hs_hashInteger.notEvaluated = true;
    this.hs_hashInteger.evaluate = function (hs_ds26zwVj) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zwVj);
    };
    this.hs_absInteger.notEvaluated = true;
    this.hs_absInteger.evaluate = function (hs_ds26zwVm) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zwVm);
    };
    this.hs_compareInteger.notEvaluated = true;
    this.hs_compareInteger.evaluate = function (hs_ds26zwVt, hs_ds126zwVw) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zwVt, hs_ds126zwVw);
    };
    this.hs_eqInteger.notEvaluated = true;
    this.hs_eqInteger.evaluate = function (hs_x26zwVL, hs_y26zwVO) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_x26zwVL, hs_y26zwVO);
    };
    this.hs_neqInteger.notEvaluated = true;
    this.hs_neqInteger.evaluate = function (hs_x26zwW5, hs_y26zwW8) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_x26zwW5, hs_y26zwW8);
    };
    this.hs_ltInteger.notEvaluated = true;
    this.hs_ltInteger.evaluate = function (hs_x26zwWp, hs_y26zwWs) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_x26zwWp, hs_y26zwWs);
    };
    this.hs_gtInteger.notEvaluated = true;
    this.hs_gtInteger.evaluate = function (hs_x26zwWJ, hs_y26zwWM) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_x26zwWJ, hs_y26zwWM);
    };
    this.hs_leInteger.notEvaluated = true;
    this.hs_leInteger.evaluate = function (hs_x26zwX3, hs_y26zwX6) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_x26zwX3, hs_y26zwX6);
    };
    this.hs_geInteger.notEvaluated = true;
    this.hs_geInteger.evaluate = function (hs_x26zwXn, hs_y26zwXq) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_x26zwXn, hs_y26zwXq);
    };
    this.hs_negateInteger.notEvaluated = true;
    this.hs_negateInteger.evaluate = function (hs_ds26zwXG) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zwXG);
    };
    this.hs_shiftLInteger.notEvaluated = true;
    this.hs_shiftLInteger.evaluate = function (hs_ds26zwXY, hs_i26zwY2) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zwXY, hs_i26zwY2);
    };
    this.hs_floatFromInteger.notEvaluated = true;
    this.hs_floatFromInteger.evaluate = function (hs_ds26zwYa) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zwYa);
    };
    this.hs_doubleFromInteger.notEvaluated = true;
    this.hs_doubleFromInteger.evaluate = function (hs_ds26zwYj) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zwYj);
    };
    this.hs_signumInteger.notEvaluated = true;
    this.hs_signumInteger.evaluate = function (hs_ds26zwYu) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zwYu);
    };
    this.hs_int64ToInteger.notEvaluated = true;
    this.hs_int64ToInteger.evaluate = function (hs_i26zwYA) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_i26zwYA);
    };
    this.hs_integerToInt64.notEvaluated = true;
    this.hs_integerToInt64.evaluate = function (hs_ds26zwYR) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zwYR);
    };
    this.hs_word64ToInteger.notEvaluated = true;
    this.hs_word64ToInteger.evaluate = function (hs_w26zwZ5) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_w26zwZ5);
    };
    this.hs_integerToWord64.notEvaluated = true;
    this.hs_integerToWord64.evaluate = function (hs_i26zwZb) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_i26zwZb);
    };
    this.hs_integerToWord.notEvaluated = true;
    this.hs_integerToWord.evaluate = function (hs_ds26zwZf) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zwZf);
    };
    this.hs_integerToInt.notEvaluated = true;
    this.hs_integerToInt.evaluate = function (hs_i26zwZu) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_i26zwZu);
    };
    this.hs_wordToInteger.notEvaluated = true;
    this.hs_wordToInteger.evaluate = function (hs_w26zwZK) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_w26zwZK);
    };
    this.hs_smallInteger.notEvaluated = true;
    this.hs_smallInteger.evaluate = function (hs_i26zwZO) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_i26zwZO);
    };
    this.hs_decodeFloatInteger.notEvaluated = true;
    this.hs_decodeFloatInteger.evaluate = function (hs_f26zx00) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_f26zx00);
    };
    this.hs_orInteger.notEvaluated = true;
    this.hs_orInteger.evaluate = function (hs_ds26zx0O, hs_i26zx0Q) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zx0O, hs_i26zx0Q);
    };
    this.hs_xorInteger.notEvaluated = true;
    this.hs_xorInteger.evaluate = function (hs_ds26zx1v, hs_i26zx1x) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zx1v, hs_i26zx1x);
    };
    this.hs_andInteger.notEvaluated = true;
    this.hs_andInteger.evaluate = function (hs_ds26zx2d, hs_ds126zx2f) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zx2d, hs_ds126zx2f);
    };
    this.hs_plusInteger.notEvaluated = true;
    this.hs_plusInteger.evaluate = function (hs_ds26zx2Z, hs_ds126zx31) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zx2Z, hs_ds126zx31);
    };
    this.hs_minusInteger.notEvaluated = true;
    this.hs_minusInteger.evaluate = function (hs_i126zx3y, hs_i226zx3z) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_i126zx3y, hs_i226zx3z);
    };
    this.hs_complementInteger.notEvaluated = true;
    this.hs_complementInteger.evaluate = function (hs_x26zx3C) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_x26zx3C);
    };
    this.hs_shiftRInteger.notEvaluated = true;
    this.hs_shiftRInteger.evaluate = function (hs_ds26zx3G, hs_i26zx3K) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zx3G, hs_i26zx3K);
    };
    this.hs_timesInteger.notEvaluated = true;
    this.hs_timesInteger.evaluate = function (hs_ds26zx6e, hs_ds126zx6h) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zx6e, hs_ds126zx6h);
    };
    this.hs_decodeDoubleInteger.notEvaluated = true;
    this.hs_decodeDoubleInteger.evaluate = function (hs_d26zx6F) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_d26zx6F);
    };
    this.hs_quotRemInteger.notEvaluated = true;
    this.hs_quotRemInteger.evaluate = function (hs_ds26zx7i, hs_ds126zx7k) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zx7i, hs_ds126zx7k);
    };
    this.hs_divModInteger.notEvaluated = true;
    this.hs_divModInteger.evaluate = function (hs_n26zx7Z, hs_d26zx80) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_n26zx7Z, hs_d26zx80);
    };
    this.hs_quotInteger.notEvaluated = true;
    this.hs_quotInteger.evaluate = function (hs_x26zx9c, hs_y26zx9d) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_x26zx9c, hs_y26zx9d);
    };
    this.hs_remInteger.notEvaluated = true;
    this.hs_remInteger.evaluate = function (hs_x26zx9k, hs_y26zx9l) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_x26zx9k, hs_y26zx9l);
    };
    this.hs_encodeDoubleInteger.notEvaluated = true;
    this.hs_encodeDoubleInteger.evaluate = function (hs_ds26zx9s, hs_e026zx9R) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zx9s, hs_e026zx9R);
    };
    this.hs_encodeFloatInteger.notEvaluated = true;
    this.hs_encodeFloatInteger.evaluate = function (hs_ds26zx9Z, hs_e026zxao) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_ds26zx9Z, hs_e026zxao);
    };
    this.hs_DigitsOnes.notEvaluated = true;
    this.hs_DigitsOnes.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziInteger.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.GHCziInteger.initAfterDependencies = function () {
    this.hs_hashInteger.notEvaluated = false;
    this.hs_absInteger.notEvaluated = false;
    this.hs_compareInteger.notEvaluated = false;
    this.hs_eqInteger.notEvaluated = false;
    this.hs_neqInteger.notEvaluated = false;
    this.hs_ltInteger.notEvaluated = false;
    this.hs_gtInteger.notEvaluated = false;
    this.hs_leInteger.notEvaluated = false;
    this.hs_geInteger.notEvaluated = false;
    this.hs_negateInteger.notEvaluated = false;
    this.hs_shiftLInteger.notEvaluated = false;
    this.hs_floatFromInteger.notEvaluated = false;
    this.hs_doubleFromInteger.notEvaluated = false;
    this.hs_signumInteger.notEvaluated = false;
    this.hs_int64ToInteger.notEvaluated = false;
    this.hs_integerToInt64.notEvaluated = false;
    this.hs_word64ToInteger.notEvaluated = false;
    this.hs_integerToWord64.notEvaluated = false;
    this.hs_integerToWord.notEvaluated = false;
    this.hs_integerToInt.notEvaluated = false;
    this.hs_wordToInteger.notEvaluated = false;
    this.hs_smallInteger.notEvaluated = false;
    this.hs_decodeFloatInteger.notEvaluated = false;
    this.hs_orInteger.notEvaluated = false;
    this.hs_xorInteger.notEvaluated = false;
    this.hs_andInteger.notEvaluated = false;
    this.hs_plusInteger.notEvaluated = false;
    this.hs_minusInteger.notEvaluated = false;
    this.hs_complementInteger.notEvaluated = false;
    this.hs_shiftRInteger.notEvaluated = false;
    this.hs_timesInteger.notEvaluated = false;
    this.hs_decodeDoubleInteger.notEvaluated = false;
    this.hs_quotRemInteger.notEvaluated = false;
    this.hs_divModInteger.notEvaluated = false;
    this.hs_quotInteger.notEvaluated = false;
    this.hs_remInteger.notEvaluated = false;
    this.hs_encodeDoubleInteger.notEvaluated = false;
    this.hs_encodeFloatInteger.notEvaluated = false;
    this.hs_DigitsOnes.notEvaluated = false;
    var hs_xorDigits25r5vg = new $hs.Func(2);
    var hs_orDigits25r5vf = new $hs.Func(2);
    var hs_andDigitsOnes25r5ve = new $hs.Func(2);
    var hs_andDigits25r5vd = new $hs.Func(2);
    var hs_smallShiftLPositive25r5v8 = new $hs.Func(2);
    var hs_shiftRPositive25r5v9 = new $hs.Func(2);
    var hs_shiftLPositive25r5v7 = new $hs.Func(2);
    var hs_comparePositive25r5v0 = new $hs.Func(2);
    var hs_positiveToWord6425r5uZ = new $hs.Func(1);
    var hs_word64ToPositive25r5uY = new $hs.Func(1);
    var hs_removeZZeroTails25r5uX = new $hs.Func(1);
    var hs_digitsMaybeZZeroToInteger25r5uU = new $hs.Func(1);
    var hs_doubleFromPositive25r5vh = new $hs.Func(1);
    var hs_floatFromPositive25r5vi = new $hs.Func(1);
    var hs_succPositive25r5v2 = new $hs.Func(1);
    var hs_plusPositive25r5v1 = new $hs.Func(2);
    var hs_timesDigit25r5v5 = new $hs.Func(2);
    var hs_onePositive25r5uO = new $hs.Data(1);
    var hs_flipBitsDigits25r5uv = new $hs.Func(1);
    var hs_tpl25r8sb = new $hs.Data(1);
    var hs_tpl125r8sc = new $hs.Data(1);
    var hs_twoToTheThirtytwoInteger25r5ug = new $hs.Data(1);
    var hs_negativeOneInteger25r5uf = new $hs.Data(2);
    var hs_oneInteger25r5ue = new $hs.Data(1);
    var hs_errorPositive25r5u5 = new $hs.Data(1);
    var hs_minusPositive25r5v3 = new $hs.Func(2);
    var hs_quotRemPositive25r5vb = new $hs.Func(2);
    var hs_timesPositive25r5v4 = new $hs.Func(2);
    var hs_errorInteger25r5u4 = new $hs.Data(1);
    hs_xorDigits25r5vg.evaluate = function (hs_ds26zwP8, hs_ds126zwPc) {
        var hs_fail26zwP7 = new $hs.Func(1);
        hs_fail26zwP7.evaluate = function (hs_ds226zwP6) {
            return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/integer-simple/GHC/Integer.hs:(720,1)-(722,79)|function GHC.Integer.xorDigits\x00");
        };
        var hs_wild26zwPg = hs_ds26zwP8;
        if (hs_ds26zwP8.notEvaluated) {
            hs_wild26zwPg = hs_ds26zwP8.hscall();
        }
        switch (hs_wild26zwPg.tag) {
        case 1:
            var hs_wild126zwPk = hs_ds126zwPc;
            if (hs_ds126zwPc.notEvaluated) {
                hs_wild126zwPk = hs_ds126zwPc.hscall();
            }
            switch (hs_wild126zwPk.tag) {
            case 1:
                var hs_wild226zxaw = hs_wild26zwPg;
                if (hs_wild26zwPg.notEvaluated) {
                    hs_wild226zxaw = hs_wild26zwPg.hscall();
                }
                switch (hs_wild226zxaw.tag) {
                case 1:
                    var hs_w126zwPr = hs_wild226zxaw.data[0];
                    var hs_ds226zwPo = hs_wild226zxaw.data[1];
                    var hs_wild326zxaz = hs_wild126zwPk;
                    if (hs_wild126zwPk.notEvaluated) {
                        hs_wild326zxaz = hs_wild126zwPk.hscall();
                    }
                    switch (hs_wild326zxaz.tag) {
                    case 1:
                        var hs_w226zwPs = hs_wild326zxaz.data[0];
                        var hs_ds326zwPp = hs_wild326zxaz.data[1];
                        var hs_tpl226zwPu = hs_xorDigits25r5vg.hscall(hs_ds226zwPo, hs_ds326zwPp);
                        var hs_sat26zxaA = hs_w126zwPr ^ hs_w226zwPs;
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26zxaA, hs_tpl226zwPu];
                        return $res;
                    case 2:
                        return hs_fail26zwP7.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                case 2:
                    return hs_fail26zwP7.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            case 2:
                if (hs_wild26zwPg.notEvaluated) {
                    return hs_wild26zwPg.hscall();
                } else {
                    return hs_wild26zwPg;
                }
            }
        case 2:
            if (hs_ds126zwPc.notEvaluated) {
                return hs_ds126zwPc.hscall();
            } else {
                return hs_ds126zwPc;
            }
        }
    };
    hs_orDigits25r5vf.evaluate = function (hs_ds26zwPB, hs_ds126zwPF) {
        var hs_fail26zwPA = new $hs.Func(1);
        hs_fail26zwPA.evaluate = function (hs_ds226zwPz) {
            return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/integer-simple/GHC/Integer.hs:(715,1)-(717,76)|function GHC.Integer.orDigits\x00");
        };
        var hs_wild26zwPJ = hs_ds26zwPB;
        if (hs_ds26zwPB.notEvaluated) {
            hs_wild26zwPJ = hs_ds26zwPB.hscall();
        }
        switch (hs_wild26zwPJ.tag) {
        case 1:
            var hs_wild126zwPN = hs_ds126zwPF;
            if (hs_ds126zwPF.notEvaluated) {
                hs_wild126zwPN = hs_ds126zwPF.hscall();
            }
            switch (hs_wild126zwPN.tag) {
            case 1:
                var hs_wild226zxaD = hs_wild26zwPJ;
                if (hs_wild26zwPJ.notEvaluated) {
                    hs_wild226zxaD = hs_wild26zwPJ.hscall();
                }
                switch (hs_wild226zxaD.tag) {
                case 1:
                    var hs_w126zwPU = hs_wild226zxaD.data[0];
                    var hs_ds226zwPR = hs_wild226zxaD.data[1];
                    var hs_wild326zxaG = hs_wild126zwPN;
                    if (hs_wild126zwPN.notEvaluated) {
                        hs_wild326zxaG = hs_wild126zwPN.hscall();
                    }
                    switch (hs_wild326zxaG.tag) {
                    case 1:
                        var hs_w226zwPV = hs_wild326zxaG.data[0];
                        var hs_ds326zwPS = hs_wild326zxaG.data[1];
                        var hs_tpl226zwPX = hs_orDigits25r5vf.hscall(hs_ds226zwPR, hs_ds326zwPS);
                        var hs_sat26zxaH = hs_w126zwPU | hs_w226zwPV;
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26zxaH, hs_tpl226zwPX];
                        return $res;
                    case 2:
                        return hs_fail26zwPA.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                case 2:
                    return hs_fail26zwPA.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            case 2:
                if (hs_wild26zwPJ.notEvaluated) {
                    return hs_wild26zwPJ.hscall();
                } else {
                    return hs_wild26zwPJ;
                }
            }
        case 2:
            if (hs_ds126zwPF.notEvaluated) {
                return hs_ds126zwPF.hscall();
            } else {
                return hs_ds126zwPF;
            }
        }
    };
    hs_andDigitsOnes25r5ve.evaluate = function (hs_ds26zwQ0, hs_ds126zwQ2) {
        var hs_nt26zwQ6 = hs_ds26zwQ0;
        if (hs_ds26zwQ0.notEvaluated) {
            hs_nt26zwQ6 = hs_ds26zwQ0.hscall();
        }
        var hs_wild26zwQa = hs_ds126zwQ2;
        if (hs_ds126zwQ2.notEvaluated) {
            hs_wild26zwQa = hs_ds126zwQ2.hscall();
        }
        switch (hs_wild26zwQa.tag) {
        case 1:
            var hs_wild126zxaI = hs_nt26zwQ6;
            if (hs_nt26zwQ6.notEvaluated) {
                hs_wild126zxaI = hs_nt26zwQ6.hscall();
            }
            switch (hs_wild126zxaI.tag) {
            case 1:
                var hs_w126zwQh = hs_wild126zxaI.data[0];
                var hs_ws126zwQe = hs_wild126zxaI.data[1];
                var hs_wild226zxaL = hs_wild26zwQa;
                if (hs_wild26zwQa.notEvaluated) {
                    hs_wild226zxaL = hs_wild26zwQa.hscall();
                }
                switch (hs_wild226zxaL.tag) {
                case 1:
                    var hs_w226zwQi = hs_wild226zxaL.data[0];
                    var hs_ws226zwQf = hs_wild226zxaL.data[1];
                    var hs_tpl226zwQk = hs_andDigitsOnes25r5ve.hscall(hs_ws126zwQe, hs_ws226zwQf);
                    var hs_sat26zxaM = hs_w126zwQh & hs_w226zwQi;
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26zxaM, hs_tpl226zwQk];
                    return $res;
                case 2:
                    return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/integer-simple/GHC/Integer.hs:(709,1)-(712,62)|function GHC.Integer.andDigitsOnes\x00");
                }
            case 2:
                if (hs_wild26zwQa.notEvaluated) {
                    return hs_wild26zwQa.hscall();
                } else {
                    return hs_wild26zwQa;
                }
            }
        case 2:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_andDigits25r5vd.evaluate = function (hs_ds26zwQn, hs_ds126zwQp) {
        var hs_ds226zwQt = hs_ds26zwQn;
        if (hs_ds26zwQn.notEvaluated) {
            hs_ds226zwQt = hs_ds26zwQn.hscall();
        }
        var hs_wild26zwQx = hs_ds126zwQp;
        if (hs_ds126zwQp.notEvaluated) {
            hs_wild26zwQx = hs_ds126zwQp.hscall();
        }
        switch (hs_wild26zwQx.tag) {
        case 1:
            var hs_wild126zxaN = hs_ds226zwQt;
            if (hs_ds226zwQt.notEvaluated) {
                hs_wild126zxaN = hs_ds226zwQt.hscall();
            }
            switch (hs_wild126zxaN.tag) {
            case 1:
                var hs_w126zwQE = hs_wild126zxaN.data[0];
                var hs_ws126zwQB = hs_wild126zxaN.data[1];
                var hs_wild226zxaQ = hs_wild26zwQx;
                if (hs_wild26zwQx.notEvaluated) {
                    hs_wild226zxaQ = hs_wild26zwQx.hscall();
                }
                switch (hs_wild226zxaQ.tag) {
                case 1:
                    var hs_w226zwQF = hs_wild226zxaQ.data[0];
                    var hs_ws226zwQC = hs_wild226zxaQ.data[1];
                    var hs_tpl226zwQH = hs_andDigits25r5vd.hscall(hs_ws126zwQB, hs_ws226zwQC);
                    var hs_sat26zxaR = hs_w126zwQE & hs_w226zwQF;
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26zxaR, hs_tpl226zwQH];
                    return $res;
                case 2:
                    return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/integer-simple/GHC/Integer.hs:(698,1)-(700,79)|function GHC.Integer.andDigits\x00");
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
    hs_smallShiftLPositive25r5v8.evaluate = function (hs_p26zwQK, hs_ds26zwQM) {
        var hs_p126zwR8 = hs_p26zwQK;
        if (hs_p26zwQK.notEvaluated) {
            hs_p126zwR8 = hs_p26zwQK.hscall();
        }
        var hs_ds126zwQP = hs_ds26zwQM;
        if (hs_ds26zwQM.notEvaluated) {
            hs_ds126zwQP = hs_ds26zwQM.hscall();
        }
        switch (hs_ds126zwQP) {
        case 0:
            if (hs_p126zwR8.notEvaluated) {
                return hs_p126zwR8.hscall();
            } else {
                return hs_p126zwR8;
            }
        default:
            var hs_j26zwQQ = ($hs.Int.addCarry(32, ~hs_ds126zwQP, 1))[0];
            var hs_f26zwQZ = new $hs.Func(2);
            hs_f26zwQZ.evaluate = function (hs_carry26zwR4, hs_ds226zwQU) {
                var hs_wild26zxaS = hs_ds226zwQU;
                if (hs_ds226zwQU.notEvaluated) {
                    hs_wild26zxaS = hs_ds226zwQU.hscall();
                }
                switch (hs_wild26zxaS.tag) {
                case 1:
                    var hs_w26zwQY = hs_wild26zxaS.data[0];
                    var hs_ws26zwR1 = hs_wild26zxaS.data[1];
                    var hs_sat26zxaU = hs_w26zwQY >> hs_j26zwQQ;
                    var hs_tpl226zwR6 = hs_f26zwQZ.hscall(hs_sat26zxaU, hs_ws26zwR1);
                    var hs_sat26zxaV = hs_w26zwQY << hs_ds126zwQP;
                    var hs_sat26zxaW = hs_sat26zxaV | hs_carry26zwR4;
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26zxaW, hs_tpl226zwR6];
                    return $res;
                case 2:
                    var hs_wild126zxaT = hs_carry26zwR4 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild126zxaT.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [hs_carry26zwR4, $hs.modules.GHCziIntegerziType.hs_None];
                        return $res;
                    case 2:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                }
            };
            return hs_f26zwQZ.hscall(0, hs_p126zwR8);
        }
    };
    hs_shiftRPositive25r5v9.evaluate = function (hs_ds26zwRb, hs_ds126zwRf) {
        var hs_wild26zwRi = hs_ds26zwRb;
        if (hs_ds26zwRb.notEvaluated) {
            hs_wild26zwRi = hs_ds26zwRb.hscall();
        }
        switch (hs_wild26zwRi.tag) {
        case 1:
            var hs_q26zwRt = hs_wild26zwRi.data[1];
            var hs_wild126zxaY = hs_ds126zwRf >= 32 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild126zxaY.tag) {
            case 1:
                var hs_wild226zwRj = hs_ds126zwRf;
                if (hs_ds126zwRf.notEvaluated) {
                    hs_wild226zwRj = hs_ds126zwRf.hscall();
                }
                switch (hs_wild226zwRj) {
                case 0:
                    var $res = new $hs.Data(1);
                    $res.data = [hs_wild26zwRi];
                    return $res;
                default:
                    var hs_sat26zxb0 = ($hs.Int.addCarry(32, ~hs_wild226zwRj, 1))[0];
                    var hs_wild326zxb1 = hs_smallShiftLPositive25r5v8.hscall(hs_wild26zwRi, hs_sat26zxb0);
                    switch (hs_wild326zxb1.tag) {
                    case 1:
                        var hs_pzq26zwRo = hs_wild326zxb1.data[1];
                        var hs_wild426zwRs = hs_pzq26zwRo;
                        if (hs_pzq26zwRo.notEvaluated) {
                            hs_wild426zwRs = hs_pzq26zwRo.hscall();
                        }
                        switch (hs_wild426zwRs.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [hs_wild426zwRs];
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
                }
            case 2:
                var hs_sat26zxaZ = ($hs.Int.addCarry(hs_ds126zwRf, ~32, 1))[0];
                return hs_shiftRPositive25r5v9.hscall(hs_q26zwRt, hs_sat26zxaZ);
            }
        case 2:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_shiftLPositive25r5v7.evaluate = function (hs_p26zwRz, hs_i26zwRx) {
        var hs_wild26zxb6 = hs_i26zwRx >= 32 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26zxb6.tag) {
        case 1:
            return hs_smallShiftLPositive25r5v8.hscall(hs_p26zwRz, hs_i26zwRx);
        case 2:
            var hs_sat26zxb7 = ($hs.Int.addCarry(hs_i26zwRx, ~32, 1))[0];
            var hs_sat26zxb5 = new $hs.Thunk();
            hs_sat26zxb5.evaluateOnce = function () {
                var hs_tpl226zwRB = hs_p26zwRz;
                if (hs_p26zwRz.notEvaluated) {
                    hs_tpl226zwRB = hs_p26zwRz.hscall();
                }
                var $res = new $hs.Data(1);
                $res.data = [0, hs_tpl226zwRB];
                return $res;
            };
            return hs_shiftLPositive25r5v7.hscall(hs_sat26zxb5, hs_sat26zxb7);
        }
    };
    hs_comparePositive25r5v0.evaluate = function (hs_ds26zwRI, hs_ds126zwRK) {
        var hs_fail26zwRT = new $hs.Func(1);
        hs_fail26zwRT.evaluate = function (hs_ds226zwRS) {
            var hs_ds326zwRO = hs_ds26zwRI;
            if (hs_ds26zwRI.notEvaluated) {
                hs_ds326zwRO = hs_ds26zwRI.hscall();
            }
            var hs_wild26zxbf = hs_ds126zwRK;
            if (hs_ds126zwRK.notEvaluated) {
                hs_wild26zxbf = hs_ds126zwRK.hscall();
            }
            switch (hs_wild26zxbf.tag) {
            case 1:
                var hs_wild126zxbg = hs_ds326zwRO;
                if (hs_ds326zwRO.notEvaluated) {
                    hs_wild126zxbg = hs_ds326zwRO.hscall();
                }
                switch (hs_wild126zxbg.tag) {
                case 1:
                    return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/integer-simple/GHC/Integer.hs:(470,1)-(477,42)|function GHC.Integer.comparePositive\x00");
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
        var hs_wild26zxb9 = hs_ds26zwRI;
        if (hs_ds26zwRI.notEvaluated) {
            hs_wild26zxb9 = hs_ds26zwRI.hscall();
        }
        switch (hs_wild26zxb9.tag) {
        case 1:
            var hs_x26zwS4 = hs_wild26zxb9.data[0];
            var hs_xs26zwS0 = hs_wild26zxb9.data[1];
            var hs_wild126zxbc = hs_ds126zwRK;
            if (hs_ds126zwRK.notEvaluated) {
                hs_wild126zxbc = hs_ds126zwRK.hscall();
            }
            switch (hs_wild126zxbc.tag) {
            case 1:
                var hs_y26zwS5 = hs_wild126zxbc.data[0];
                var hs_ys26zwS1 = hs_wild126zxbc.data[1];
                var hs_wild226zwS3 = hs_comparePositive25r5v0.hscall(hs_xs26zwS0, hs_ys26zwS1);
                switch (hs_wild226zwS3.tag) {
                case 2:
                    var hs_wild326zxbd = $hs.Word.lt(hs_x26zwS4, hs_y26zwS5) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild326zxbd.tag) {
                    case 1:
                        var hs_wild426zxbe = $hs.Word.gt(hs_x26zwS4, hs_y26zwS5) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                        switch (hs_wild426zxbe.tag) {
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
                    if (hs_wild226zwS3.notEvaluated) {
                        return hs_wild226zwS3.hscall();
                    } else {
                        return hs_wild226zwS3;
                    }
                }
            case 2:
                return hs_fail26zwRT.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        case 2:
            var hs_wild126zxb8 = hs_ds126zwRK;
            if (hs_ds126zwRK.notEvaluated) {
                hs_wild126zxb8 = hs_ds126zwRK.hscall();
            }
            switch (hs_wild126zxb8.tag) {
            case 1:
                return hs_fail26zwRT.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_positiveToWord6425r5uZ.evaluate = function (hs_ds26zwSc) {
        var hs_wild26zxbl = hs_ds26zwSc;
        if (hs_ds26zwSc.notEvaluated) {
            hs_wild26zxbl = hs_ds26zwSc.hscall();
        }
        switch (hs_wild26zxbl.tag) {
        case 1:
            var hs_w26zwSo = hs_wild26zxbl.data[0];
            var hs_ds126zwSg = hs_wild26zxbl.data[1];
            var hs_wild126zxbm = hs_ds126zwSg;
            if (hs_ds126zwSg.notEvaluated) {
                hs_wild126zxbm = hs_ds126zwSg.hscall();
            }
            switch (hs_wild126zxbm.tag) {
            case 1:
                var hs_high26zwSk = hs_wild126zxbm.data[0];
                var hs_wild226zwSm = $hs.modules.GHCziIntWord64.hs_wordToWord64zh.hscall(hs_high26zwSk);
                var hs_wild326zwSr = $hs.modules.GHCziIntWord64.hs_uncheckedShiftL64zh.hscall(hs_wild226zwSm, 32);
                var hs_wild426zwSq = $hs.modules.GHCziIntWord64.hs_wordToWord64zh.hscall(hs_w26zwSo);
                return $hs.modules.GHCziIntWord64.hs_or64zh.hscall(hs_wild426zwSq, hs_wild326zwSr);
            case 2:
                return $hs.modules.GHCziIntWord64.hs_wordToWord64zh.hscall(hs_w26zwSo);
            }
        case 2:
            return $hs.modules.GHCziIntWord64.hs_wordToWord64zh.hscall(0);
        }
    };
    hs_word64ToPositive25r5uY.evaluate = function (hs_w26zwSu) {
        var hs_wild26zwSv = $hs.modules.GHCziIntWord64.hs_wordToWord64zh.hscall(0);
        var hs_wild126zxbo = $hs.modules.GHCziIntWord64.hs_eqWord64zh.hscall(hs_w26zwSu, hs_wild26zwSv);
        switch (hs_wild126zxbo.tag) {
        case 1:
            var hs_wild226zwSB = $hs.modules.GHCziIntWord64.hs_word64ToWordzh.hscall(hs_w26zwSu);
            var hs_wild326zwSz = $hs.modules.GHCziIntWord64.hs_uncheckedShiftRL64zh.hscall(hs_w26zwSu, 32);
            var hs_tpl226zwSC = hs_word64ToPositive25r5uY.hscall(hs_wild326zwSz);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild226zwSB, hs_tpl226zwSC];
            return $res;
        case 2:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_removeZZeroTails25r5uX.evaluate = function (hs_ds26zwSE) {
        var hs_wild26zxbp = hs_ds26zwSE;
        if (hs_ds26zwSE.notEvaluated) {
            hs_wild26zxbp = hs_ds26zwSE.hscall();
        }
        switch (hs_wild26zxbp.tag) {
        case 1:
            var hs_w26zwSI = hs_wild26zxbp.data[0];
            var hs_ds126zwSK = hs_wild26zxbp.data[1];
            var hs_wild126zxbq = hs_w26zwSI == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild126zxbq.tag) {
            case 1:
                var hs_tpl226zwSM = hs_removeZZeroTails25r5uX.hscall(hs_ds126zwSK);
                var $res = new $hs.Data(1);
                $res.data = [hs_w26zwSI, hs_tpl226zwSM];
                return $res;
            case 2:
                var hs_wild226zwSQ = hs_removeZZeroTails25r5uX.hscall(hs_ds126zwSK);
                switch (hs_wild226zwSQ.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [hs_w26zwSI, hs_wild226zwSQ];
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
    hs_digitsMaybeZZeroToInteger25r5uU.evaluate = function (hs_ds26zwSS) {
        var hs_wild26zwSW = hs_ds26zwSS;
        if (hs_ds26zwSS.notEvaluated) {
            hs_wild26zwSW = hs_ds26zwSS.hscall();
        }
        switch (hs_wild26zwSW.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [hs_wild26zwSW];
            return $res;
        case 2:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_doubleFromPositive25r5vh.evaluate = function (hs_ds26zwSY) {
        var hs_wild26zxbv = hs_ds26zwSY;
        if (hs_ds26zwSY.notEvaluated) {
            hs_wild26zxbv = hs_ds26zwSY.hscall();
        }
        switch (hs_wild26zxbv.tag) {
        case 1:
            var hs_w26zwT7 = hs_wild26zxbv.data[0];
            var hs_ds126zwT2 = hs_wild26zxbv.data[1];
            var hs_wild126zwT4 = hs_doubleFromPositive25r5vh.hscall(hs_ds126zwT2);
            var hs_sat26zxbw = hs_w26zwT7 & 65535;
            var hs_sat26zxbx = hs_sat26zxbw;
            throw "primitive operation int2Double#. Not implemeted yet.";
            throw "primitive operation **##. Not implemeted yet.";
            var hs_sat26zxbA = hs_w26zwT7 >> 16;
            var hs_sat26zxbB = hs_sat26zxbA;
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
    hs_floatFromPositive25r5vi.evaluate = function (hs_ds26zwTi) {
        var hs_wild26zxbH = hs_ds26zwTi;
        if (hs_ds26zwTi.notEvaluated) {
            hs_wild26zxbH = hs_ds26zwTi.hscall();
        }
        switch (hs_wild26zxbH.tag) {
        case 1:
            var hs_w26zwTr = hs_wild26zxbH.data[0];
            var hs_ds126zwTm = hs_wild26zxbH.data[1];
            var hs_wild126zwTo = hs_floatFromPositive25r5vi.hscall(hs_ds126zwTm);
            var hs_sat26zxbI = hs_w26zwTr & 65535;
            var hs_sat26zxbJ = hs_sat26zxbI;
            throw "primitive operation int2Float#. Not implemeted yet.";
            throw "primitive operation powerFloat#. Not implemeted yet.";
            var hs_sat26zxbM = hs_w26zwTr >> 16;
            var hs_sat26zxbN = hs_sat26zxbM;
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
    hs_succPositive25r5v2.evaluate = function (hs_ds26zwTC) {
        var hs_wild26zxbT = hs_ds26zwTC;
        if (hs_ds26zwTC.notEvaluated) {
            hs_wild26zxbT = hs_ds26zwTC.hscall();
        }
        switch (hs_wild26zxbT.tag) {
        case 1:
            var hs_w26zwTG = hs_wild26zxbT.data[0];
            var hs_ws26zwTJ = hs_wild26zxbT.data[1];
            var hs_wild126zxbU = hs_w26zwTG == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild126zxbU.tag) {
            case 1:
                var hs_sat26zxbV = ($hs.Int.addCarry(hs_w26zwTG, 1, 0))[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26zxbV, hs_ws26zwTJ];
                return $res;
            case 2:
                var hs_tpl226zwTL = hs_succPositive25r5v2.hscall(hs_ws26zwTJ);
                var $res = new $hs.Data(1);
                $res.data = [0, hs_tpl226zwTL];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [1, $hs.modules.GHCziIntegerziType.hs_None];
            return $res;
        }
    };
    hs_plusPositive25r5v1.evaluate = function (hs_x026zwUE, hs_y026zwUF) {
        var hs_addWithCarry26zwUd = new $hs.Func(3);
        hs_addWithCarry26zwUd.evaluate = function (hs_c26zwUg, hs_xs26zwTS, hs_ds26zwTU) {
            var hs_xs126zwTY = hs_xs26zwTS;
            if (hs_xs26zwTS.notEvaluated) {
                hs_xs126zwTY = hs_xs26zwTS.hscall();
            }
            var hs_wild26zwU2 = hs_ds26zwTU;
            if (hs_ds26zwTU.notEvaluated) {
                hs_wild26zwU2 = hs_ds26zwTU.hscall();
            }
            switch (hs_wild26zwU2.tag) {
            case 1:
                var hs_wild126zwUB = hs_xs126zwTY;
                if (hs_xs126zwTY.notEvaluated) {
                    hs_wild126zwUB = hs_xs126zwTY.hscall();
                }
                switch (hs_wild126zwUB.tag) {
                case 1:
                    var hs_x26zwU6 = hs_wild126zwUB.data[0];
                    var hs_xszq26zwUb = hs_wild126zwUB.data[1];
                    var hs_wild226zwUA = hs_wild26zwU2;
                    if (hs_wild26zwU2.notEvaluated) {
                        hs_wild226zwUA = hs_wild26zwU2.hscall();
                    }
                    switch (hs_wild226zwUA.tag) {
                    case 1:
                        var hs_y26zwU7 = hs_wild226zwUA.data[0];
                        var hs_yszq26zwUc = hs_wild226zwUA.data[1];
                        var hs_wild326zxc0 = $hs.Word.lt(hs_x26zwU6, hs_y26zwU7) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                        switch (hs_wild326zxc0.tag) {
                        case 1:
                            var hs_wild426zxc1 = $hs.Word.ge(hs_y26zwU7, -2147483647) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                            switch (hs_wild426zxc1.tag) {
                            case 1:
                                var hs_wild526zxc6 = $hs.Word.ge(hs_x26zwU6, -2147483647) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                                switch (hs_wild526zxc6.tag) {
                                case 1:
                                    var hs_tpl226zwUi = hs_addWithCarry26zwUd.hscall(0, hs_xszq26zwUb, hs_yszq26zwUc);
                                    var hs_sat26zxcc = ($hs.Int.addCarry(hs_x26zwU6, hs_y26zwU7, 0))[0];
                                    var hs_sat26zxcd = ($hs.Int.addCarry(hs_sat26zxcc, hs_c26zwUg, 0))[0];
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_sat26zxcd, hs_tpl226zwUi];
                                    return $res;
                                case 2:
                                    var hs_sat26zxc7 = ($hs.Int.addCarry(hs_x26zwU6, ~-2147483647, 1))[0];
                                    var hs_sat26zxc8 = ($hs.Int.addCarry(hs_sat26zxc7, hs_y26zwU7, 0))[0];
                                    var hs_zz26zwUm = ($hs.Int.addCarry(hs_sat26zxc8, hs_c26zwUg, 0))[0];
                                    var hs_wild626zxc9 = $hs.Word.lt(hs_zz26zwUm, -2147483647) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                                    switch (hs_wild626zxc9.tag) {
                                    case 1:
                                        var hs_tpl226zwUq = hs_addWithCarry26zwUd.hscall(1, hs_xszq26zwUb, hs_yszq26zwUc);
                                        var hs_sat26zxcb = ($hs.Int.addCarry(hs_zz26zwUm, ~-2147483647, 1))[0];
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_sat26zxcb, hs_tpl226zwUq];
                                        return $res;
                                    case 2:
                                        var hs_tpl226zwUt = hs_addWithCarry26zwUd.hscall(0, hs_xszq26zwUb, hs_yszq26zwUc);
                                        var hs_sat26zxca = ($hs.Int.addCarry(hs_zz26zwUm, -2147483647, 0))[0];
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_sat26zxca, hs_tpl226zwUt];
                                        return $res;
                                    }
                                }
                            case 2:
                                var hs_tpl226zwUz = hs_addWithCarry26zwUd.hscall(1, hs_xszq26zwUb, hs_yszq26zwUc);
                                var hs_sat26zxc2 = ($hs.Int.addCarry(hs_y26zwU7, ~-2147483647, 1))[0];
                                var hs_sat26zxc3 = ($hs.Int.addCarry(hs_x26zwU6, ~-2147483647, 1))[0];
                                var hs_sat26zxc4 = ($hs.Int.addCarry(hs_sat26zxc3, hs_sat26zxc2, 0))[0];
                                var hs_sat26zxc5 = ($hs.Int.addCarry(hs_sat26zxc4, hs_c26zwUg, 0))[0];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_sat26zxc5, hs_tpl226zwUz];
                                return $res;
                            }
                        case 2:
                            return hs_addWithCarry26zwUd.hscall(hs_c26zwUg, hs_wild226zwUA, hs_wild126zwUB);
                        }
                    case 2:
                        return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/integer-simple/GHC/Integer.hs:(483,8)-(510,56)|function addWithCarry\x00");
                    }
                case 2:
                    var hs_wild226zxbZ = hs_c26zwUg == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226zxbZ.tag) {
                    case 1:
                        return hs_succPositive25r5v2.hscall(hs_wild26zwU2);
                    case 2:
                        if (hs_wild26zwU2.notEvaluated) {
                            return hs_wild26zwU2.hscall();
                        } else {
                            return hs_wild26zwU2;
                        }
                    }
                }
            case 2:
                var hs_wild126zxbW = hs_c26zwUg == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild126zxbW.tag) {
                case 1:
                    return hs_succPositive25r5v2.hscall(hs_xs126zwTY);
                case 2:
                    if (hs_xs126zwTY.notEvaluated) {
                        return hs_xs126zwTY.hscall();
                    } else {
                        return hs_xs126zwTY;
                    }
                }
            }
        };
        return hs_addWithCarry26zwUd.hscall(0, hs_x026zwUE, hs_y026zwUF);
    };
    hs_timesDigit25r5v5.evaluate = function (hs_x26zwUJ, hs_y26zwUO) {
        var hs_xh26zwUK = hs_x26zwUJ >> 16;
        var hs_xl26zwUM = hs_x26zwUJ & 65535;
        var hs_yh26zwUP = hs_y26zwUO >> 16;
        var hs_yl26zwUR = hs_y26zwUO & 65535;
        var hs_x126zwUT = $hs.Int.mul(hs_xh26zwUK, hs_yl26zwUR);
        var hs_x226zwUV = $hs.Int.mul(hs_xl26zwUM, hs_yh26zwUP);
        var hs_sat26zxce = hs_x226zwUV >> 16;
        var hs_sat26zxcf = hs_x126zwUT >> 16;
        var hs_sat26zxcg = $hs.Int.mul(hs_xh26zwUK, hs_yh26zwUP);
        var hs_sat26zxch = ($hs.Int.addCarry(hs_sat26zxcg, hs_sat26zxcf, 0))[0];
        var hs_high26zwV1 = ($hs.Int.addCarry(hs_sat26zxch, hs_sat26zxce, 0))[0];
        var hs_low26zwVe = new $hs.Thunk();
        hs_low26zwVe.evaluateOnce = function () {
            var hs_sat26zxcm = $hs.Int.mul(hs_xl26zwUM, hs_yl26zwUR);
            var hs_sat26zxcn = new $hs.Data(1);
            hs_sat26zxcn.data = [hs_sat26zxcm, $hs.modules.GHCziIntegerziType.hs_None];
            var hs_sat26zxcl = new $hs.Thunk();
            hs_sat26zxcl.evaluateOnce = function () {
                var hs_sat26zwV9 = hs_x226zwUV & 65535;
                var hs_sat26zxcp = hs_sat26zwV9 << 16;
                var hs_sat26zxcq = new $hs.Data(1);
                hs_sat26zxcq.data = [hs_sat26zxcp, $hs.modules.GHCziIntegerziType.hs_None];
                var hs_sat26zwV5 = hs_x126zwUT & 65535;
                var hs_sat26zxcr = hs_sat26zwV5 << 16;
                var hs_sat26zxco = new $hs.Data(1);
                hs_sat26zxco.data = [hs_sat26zxcr, $hs.modules.GHCziIntegerziType.hs_None];
                return hs_plusPositive25r5v1.hscall(hs_sat26zxco, hs_sat26zxcq);
            };
            return hs_plusPositive25r5v1.hscall(hs_sat26zxcl, hs_sat26zxcn);
        };
        var hs_wild26zxci = hs_high26zwV1 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26zxci.tag) {
        case 1:
            var hs_sat26zxck = new $hs.Data(1);
            hs_sat26zxck.data = [hs_high26zwV1, $hs.modules.GHCziIntegerziType.hs_None];
            var hs_sat26zxcj = new $hs.Data(1);
            hs_sat26zxcj.data = [0, hs_sat26zxck];
            return hs_plusPositive25r5v1.hscall(hs_sat26zxcj, hs_low26zwVe);
        case 2:
            if (hs_low26zwVe.notEvaluated) {
                return hs_low26zwVe.hscall();
            } else {
                return hs_low26zwVe;
            }
        }
    };
    hs_onePositive25r5uO.data = [1, $hs.modules.GHCziIntegerziType.hs_None];
    this.hs_hashInteger.evaluate = function (hs_ds26zwVj) {
        var hs_ds126zxcs = hs_ds26zwVj;
        if (hs_ds26zwVj.notEvaluated) {
            hs_ds126zxcs = hs_ds26zwVj.hscall();
        }
        return 42;
    };
    this.hs_absInteger.evaluate = function (hs_ds26zwVm) {
        var hs_wild26zwVo = hs_ds26zwVm;
        if (hs_ds26zwVm.notEvaluated) {
            hs_wild26zwVo = hs_ds26zwVm.hscall();
        }
        switch (hs_wild26zwVo.tag) {
        case 2:
            var hs_x26zwVq = hs_wild26zwVo.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_x26zwVq];
            return $res;
        default:
            if (hs_wild26zwVo.notEvaluated) {
                return hs_wild26zwVo.hscall();
            } else {
                return hs_wild26zwVo;
            }
        }
    };
    this.hs_compareInteger.evaluate = function (hs_ds26zwVt, hs_ds126zwVw) {
        var hs_wild26zxcu = hs_ds26zwVt;
        if (hs_ds26zwVt.notEvaluated) {
            hs_wild26zxcu = hs_ds26zwVt.hscall();
        }
        switch (hs_wild26zxcu.tag) {
        case 1:
            var hs_x26zwVz = hs_wild26zxcu.data[0];
            var hs_wild126zxcy = hs_ds126zwVw;
            if (hs_ds126zwVw.notEvaluated) {
                hs_wild126zxcy = hs_ds126zwVw.hscall();
            }
            switch (hs_wild126zxcy.tag) {
            case 1:
                var hs_y26zwVA = hs_wild126zxcy.data[0];
                return hs_comparePositive25r5v0.hscall(hs_x26zwVz, hs_y26zwVA);
            default:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_x26zwVF = hs_wild26zxcu.data[0];
            var hs_wild126zxct = hs_ds126zwVw;
            if (hs_ds126zwVw.notEvaluated) {
                hs_wild126zxct = hs_ds126zwVw.hscall();
            }
            switch (hs_wild126zxct.tag) {
            case 2:
                var hs_y26zwVE = hs_wild126zxct.data[0];
                return hs_comparePositive25r5v0.hscall(hs_y26zwVE, hs_x26zwVF);
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126zxcw = hs_ds126zwVw;
            if (hs_ds126zwVw.notEvaluated) {
                hs_wild126zxcw = hs_ds126zwVw.hscall();
            }
            switch (hs_wild126zxcw.tag) {
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
    this.hs_eqInteger.evaluate = function (hs_x26zwVL, hs_y26zwVO) {
        var hs_wild26zxcA = hs_x26zwVL;
        if (hs_x26zwVL.notEvaluated) {
            hs_wild26zxcA = hs_x26zwVL.hscall();
        }
        switch (hs_wild26zxcA.tag) {
        case 1:
            var hs_x126zwVR = hs_wild26zxcA.data[0];
            var hs_wild126zxcF = hs_y26zwVO;
            if (hs_y26zwVO.notEvaluated) {
                hs_wild126zxcF = hs_y26zwVO.hscall();
            }
            switch (hs_wild126zxcF.tag) {
            case 1:
                var hs_y126zwVS = hs_wild126zxcF.data[0];
                var hs_wild226zxcG = hs_comparePositive25r5v0.hscall(hs_x126zwVR, hs_y126zwVS);
                switch (hs_wild226zxcG.tag) {
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
            var hs_x126zwVY = hs_wild26zxcA.data[0];
            var hs_wild126zxcz = hs_y26zwVO;
            if (hs_y26zwVO.notEvaluated) {
                hs_wild126zxcz = hs_y26zwVO.hscall();
            }
            switch (hs_wild126zxcz.tag) {
            case 2:
                var hs_y126zwVX = hs_wild126zxcz.data[0];
                var hs_wild226zxcB = hs_comparePositive25r5v0.hscall(hs_y126zwVX, hs_x126zwVY);
                switch (hs_wild226zxcB.tag) {
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
            var hs_wild126zxcD = hs_y26zwVO;
            if (hs_y26zwVO.notEvaluated) {
                hs_wild126zxcD = hs_y26zwVO.hscall();
            }
            switch (hs_wild126zxcD.tag) {
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
    this.hs_neqInteger.evaluate = function (hs_x26zwW5, hs_y26zwW8) {
        var hs_wild26zxcI = hs_x26zwW5;
        if (hs_x26zwW5.notEvaluated) {
            hs_wild26zxcI = hs_x26zwW5.hscall();
        }
        switch (hs_wild26zxcI.tag) {
        case 1:
            var hs_x126zwWb = hs_wild26zxcI.data[0];
            var hs_wild126zxcN = hs_y26zwW8;
            if (hs_y26zwW8.notEvaluated) {
                hs_wild126zxcN = hs_y26zwW8.hscall();
            }
            switch (hs_wild126zxcN.tag) {
            case 1:
                var hs_y126zwWc = hs_wild126zxcN.data[0];
                var hs_wild226zxcO = hs_comparePositive25r5v0.hscall(hs_x126zwWb, hs_y126zwWc);
                switch (hs_wild226zxcO.tag) {
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
            var hs_x126zwWi = hs_wild26zxcI.data[0];
            var hs_wild126zxcH = hs_y26zwW8;
            if (hs_y26zwW8.notEvaluated) {
                hs_wild126zxcH = hs_y26zwW8.hscall();
            }
            switch (hs_wild126zxcH.tag) {
            case 2:
                var hs_y126zwWh = hs_wild126zxcH.data[0];
                var hs_wild226zxcJ = hs_comparePositive25r5v0.hscall(hs_y126zwWh, hs_x126zwWi);
                switch (hs_wild226zxcJ.tag) {
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
            var hs_wild126zxcL = hs_y26zwW8;
            if (hs_y26zwW8.notEvaluated) {
                hs_wild126zxcL = hs_y26zwW8.hscall();
            }
            switch (hs_wild126zxcL.tag) {
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
    this.hs_ltInteger.evaluate = function (hs_x26zwWp, hs_y26zwWs) {
        var hs_wild26zxcQ = hs_x26zwWp;
        if (hs_x26zwWp.notEvaluated) {
            hs_wild26zxcQ = hs_x26zwWp.hscall();
        }
        switch (hs_wild26zxcQ.tag) {
        case 1:
            var hs_x126zwWv = hs_wild26zxcQ.data[0];
            var hs_wild126zxcV = hs_y26zwWs;
            if (hs_y26zwWs.notEvaluated) {
                hs_wild126zxcV = hs_y26zwWs.hscall();
            }
            switch (hs_wild126zxcV.tag) {
            case 1:
                var hs_y126zwWw = hs_wild126zxcV.data[0];
                var hs_wild226zxcW = hs_comparePositive25r5v0.hscall(hs_x126zwWv, hs_y126zwWw);
                switch (hs_wild226zxcW.tag) {
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
            var hs_x126zwWC = hs_wild26zxcQ.data[0];
            var hs_wild126zxcP = hs_y26zwWs;
            if (hs_y26zwWs.notEvaluated) {
                hs_wild126zxcP = hs_y26zwWs.hscall();
            }
            switch (hs_wild126zxcP.tag) {
            case 2:
                var hs_y126zwWB = hs_wild126zxcP.data[0];
                var hs_wild226zxcR = hs_comparePositive25r5v0.hscall(hs_y126zwWB, hs_x126zwWC);
                switch (hs_wild226zxcR.tag) {
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
            var hs_wild126zxcT = hs_y26zwWs;
            if (hs_y26zwWs.notEvaluated) {
                hs_wild126zxcT = hs_y26zwWs.hscall();
            }
            switch (hs_wild126zxcT.tag) {
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
    this.hs_gtInteger.evaluate = function (hs_x26zwWJ, hs_y26zwWM) {
        var hs_wild26zxcY = hs_x26zwWJ;
        if (hs_x26zwWJ.notEvaluated) {
            hs_wild26zxcY = hs_x26zwWJ.hscall();
        }
        switch (hs_wild26zxcY.tag) {
        case 1:
            var hs_x126zwWP = hs_wild26zxcY.data[0];
            var hs_wild126zxd3 = hs_y26zwWM;
            if (hs_y26zwWM.notEvaluated) {
                hs_wild126zxd3 = hs_y26zwWM.hscall();
            }
            switch (hs_wild126zxd3.tag) {
            case 1:
                var hs_y126zwWQ = hs_wild126zxd3.data[0];
                var hs_wild226zxd4 = hs_comparePositive25r5v0.hscall(hs_x126zwWP, hs_y126zwWQ);
                switch (hs_wild226zxd4.tag) {
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
            var hs_x126zwWW = hs_wild26zxcY.data[0];
            var hs_wild126zxcX = hs_y26zwWM;
            if (hs_y26zwWM.notEvaluated) {
                hs_wild126zxcX = hs_y26zwWM.hscall();
            }
            switch (hs_wild126zxcX.tag) {
            case 2:
                var hs_y126zwWV = hs_wild126zxcX.data[0];
                var hs_wild226zxcZ = hs_comparePositive25r5v0.hscall(hs_y126zwWV, hs_x126zwWW);
                switch (hs_wild226zxcZ.tag) {
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
            var hs_wild126zxd1 = hs_y26zwWM;
            if (hs_y26zwWM.notEvaluated) {
                hs_wild126zxd1 = hs_y26zwWM.hscall();
            }
            switch (hs_wild126zxd1.tag) {
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
    this.hs_leInteger.evaluate = function (hs_x26zwX3, hs_y26zwX6) {
        var hs_wild26zxd6 = hs_x26zwX3;
        if (hs_x26zwX3.notEvaluated) {
            hs_wild26zxd6 = hs_x26zwX3.hscall();
        }
        switch (hs_wild26zxd6.tag) {
        case 1:
            var hs_x126zwX9 = hs_wild26zxd6.data[0];
            var hs_wild126zxdb = hs_y26zwX6;
            if (hs_y26zwX6.notEvaluated) {
                hs_wild126zxdb = hs_y26zwX6.hscall();
            }
            switch (hs_wild126zxdb.tag) {
            case 1:
                var hs_y126zwXa = hs_wild126zxdb.data[0];
                var hs_wild226zxdc = hs_comparePositive25r5v0.hscall(hs_x126zwX9, hs_y126zwXa);
                switch (hs_wild226zxdc.tag) {
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
            var hs_x126zwXg = hs_wild26zxd6.data[0];
            var hs_wild126zxd5 = hs_y26zwX6;
            if (hs_y26zwX6.notEvaluated) {
                hs_wild126zxd5 = hs_y26zwX6.hscall();
            }
            switch (hs_wild126zxd5.tag) {
            case 2:
                var hs_y126zwXf = hs_wild126zxd5.data[0];
                var hs_wild226zxd7 = hs_comparePositive25r5v0.hscall(hs_y126zwXf, hs_x126zwXg);
                switch (hs_wild226zxd7.tag) {
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
            var hs_wild126zxd9 = hs_y26zwX6;
            if (hs_y26zwX6.notEvaluated) {
                hs_wild126zxd9 = hs_y26zwX6.hscall();
            }
            switch (hs_wild126zxd9.tag) {
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
    this.hs_geInteger.evaluate = function (hs_x26zwXn, hs_y26zwXq) {
        var hs_wild26zxde = hs_x26zwXn;
        if (hs_x26zwXn.notEvaluated) {
            hs_wild26zxde = hs_x26zwXn.hscall();
        }
        switch (hs_wild26zxde.tag) {
        case 1:
            var hs_x126zwXt = hs_wild26zxde.data[0];
            var hs_wild126zxdj = hs_y26zwXq;
            if (hs_y26zwXq.notEvaluated) {
                hs_wild126zxdj = hs_y26zwXq.hscall();
            }
            switch (hs_wild126zxdj.tag) {
            case 1:
                var hs_y126zwXu = hs_wild126zxdj.data[0];
                var hs_wild226zxdk = hs_comparePositive25r5v0.hscall(hs_x126zwXt, hs_y126zwXu);
                switch (hs_wild226zxdk.tag) {
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
            var hs_x126zwXA = hs_wild26zxde.data[0];
            var hs_wild126zxdd = hs_y26zwXq;
            if (hs_y26zwXq.notEvaluated) {
                hs_wild126zxdd = hs_y26zwXq.hscall();
            }
            switch (hs_wild126zxdd.tag) {
            case 2:
                var hs_y126zwXz = hs_wild126zxdd.data[0];
                var hs_wild226zxdf = hs_comparePositive25r5v0.hscall(hs_y126zwXz, hs_x126zwXA);
                switch (hs_wild226zxdf.tag) {
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
            var hs_wild126zxdh = hs_y26zwXq;
            if (hs_y26zwXq.notEvaluated) {
                hs_wild126zxdh = hs_y26zwXq.hscall();
            }
            switch (hs_wild126zxdh.tag) {
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
    this.hs_negateInteger.evaluate = function (hs_ds26zwXG) {
        var hs_wild26zxdl = hs_ds26zwXG;
        if (hs_ds26zwXG.notEvaluated) {
            hs_wild26zxdl = hs_ds26zwXG.hscall();
        }
        switch (hs_wild26zxdl.tag) {
        case 1:
            var hs_p26zwXJ = hs_wild26zxdl.data[0];
            var $res = new $hs.Data(2);
            $res.data = [hs_p26zwXJ];
            return $res;
        case 2:
            var hs_p26zwXL = hs_wild26zxdl.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_p26zwXL];
            return $res;
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_flipBitsDigits25r5uv.evaluate = function (hs_ds26zwXN) {
        var hs_wild26zxdm = hs_ds26zwXN;
        if (hs_ds26zwXN.notEvaluated) {
            hs_wild26zxdm = hs_ds26zwXN.hscall();
        }
        switch (hs_wild26zxdm.tag) {
        case 1:
            var hs_w26zwXT = hs_wild26zxdm.data[0];
            var hs_ws26zwXR = hs_wild26zxdm.data[1];
            var hs_tpl226zwXV = hs_flipBitsDigits25r5uv.hscall(hs_ws26zwXR);
            var hs_sat26zxdn = ~hs_w26zwXT;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26zxdn, hs_tpl226zwXV];
            return $res;
        case 2:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    this.hs_shiftLInteger.evaluate = function (hs_ds26zwXY, hs_i26zwY2) {
        var hs_wild26zxdo = hs_ds26zwXY;
        if (hs_ds26zwXY.notEvaluated) {
            hs_wild26zxdo = hs_ds26zwXY.hscall();
        }
        switch (hs_wild26zxdo.tag) {
        case 1:
            var hs_p26zwY1 = hs_wild26zxdo.data[0];
            var hs_tpl226zwY4 = hs_shiftLPositive25r5v7.hscall(hs_p26zwY1, hs_i26zwY2);
            var $res = new $hs.Data(1);
            $res.data = [hs_tpl226zwY4];
            return $res;
        case 2:
            var hs_n26zwY6 = hs_wild26zxdo.data[0];
            var hs_tpl226zwY8 = hs_shiftLPositive25r5v7.hscall(hs_n26zwY6, hs_i26zwY2);
            var $res = new $hs.Data(2);
            $res.data = [hs_tpl226zwY8];
            return $res;
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    this.hs_floatFromInteger.evaluate = function (hs_ds26zwYa) {
        var hs_wild26zxdp = hs_ds26zwYa;
        if (hs_ds26zwYa.notEvaluated) {
            hs_wild26zxdp = hs_ds26zwYa.hscall();
        }
        switch (hs_wild26zxdp.tag) {
        case 1:
            var hs_p26zwYd = hs_wild26zxdp.data[0];
            return hs_floatFromPositive25r5vi.hscall(hs_p26zwYd);
        case 2:
            var hs_p26zwYf = hs_wild26zxdp.data[0];
            var hs_wild126zwYh = hs_floatFromPositive25r5vi.hscall(hs_p26zwYf);
            throw "primitive operation negateFloat#. Not implemeted yet.";
        case 3:
            return 0 % 1;
        }
    };
    this.hs_doubleFromInteger.evaluate = function (hs_ds26zwYj) {
        var hs_wild26zxdq = hs_ds26zwYj;
        if (hs_ds26zwYj.notEvaluated) {
            hs_wild26zxdq = hs_ds26zwYj.hscall();
        }
        switch (hs_wild26zxdq.tag) {
        case 1:
            var hs_p26zwYm = hs_wild26zxdq.data[0];
            return hs_doubleFromPositive25r5vh.hscall(hs_p26zwYm);
        case 2:
            var hs_p26zwYo = hs_wild26zxdq.data[0];
            var hs_wild126zwYq = hs_doubleFromPositive25r5vh.hscall(hs_p26zwYo);
            throw "primitive operation negateDouble#. Not implemeted yet.";
        case 3:
            return 0 % 1;
        }
    };
    hs_tpl25r8sb.data = [1, $hs.modules.GHCziIntegerziType.hs_None];
    hs_tpl125r8sc.data = [0, hs_tpl25r8sb];
    hs_twoToTheThirtytwoInteger25r5ug.data = [hs_tpl125r8sc];
    hs_negativeOneInteger25r5uf.data = [hs_onePositive25r5uO];
    hs_oneInteger25r5ue.data = [hs_onePositive25r5uO];
    this.hs_signumInteger.evaluate = function (hs_ds26zwYu) {
        var hs_wild26zxds = hs_ds26zwYu;
        if (hs_ds26zwYu.notEvaluated) {
            hs_wild26zxds = hs_ds26zwYu.hscall();
        }
        switch (hs_wild26zxds.tag) {
        case 1:
            if (hs_oneInteger25r5ue.notEvaluated) {
                return hs_oneInteger25r5ue.hscall();
            } else {
                return hs_oneInteger25r5ue;
            }
        case 2:
            if (hs_negativeOneInteger25r5uf.notEvaluated) {
                return hs_negativeOneInteger25r5uf.hscall();
            } else {
                return hs_negativeOneInteger25r5uf;
            }
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    this.hs_int64ToInteger.evaluate = function (hs_i26zwYA) {
        var hs_wild26zwYB = $hs.modules.GHCziIntWord64.hs_intToInt64zh.hscall(0);
        var hs_wild126zxdu = $hs.modules.GHCziIntWord64.hs_eqInt64zh.hscall(hs_i26zwYA, hs_wild26zwYB);
        switch (hs_wild126zxdu.tag) {
        case 1:
            var hs_wild226zwYE = $hs.modules.GHCziIntWord64.hs_intToInt64zh.hscall(0);
            var hs_wild326zxdv = $hs.modules.GHCziIntWord64.hs_gtInt64zh.hscall(hs_i26zwYA, hs_wild226zwYE);
            switch (hs_wild326zxdv.tag) {
            case 1:
                var hs_wild426zwYH = $hs.modules.GHCziIntWord64.hs_negateInt64zh.hscall(hs_i26zwYA);
                var hs_wild526zwYJ = $hs.modules.GHCziIntWord64.hs_int64ToWord64zh.hscall(hs_wild426zwYH);
                var hs_tpl226zwYL = hs_word64ToPositive25r5uY.hscall(hs_wild526zwYJ);
                var $res = new $hs.Data(2);
                $res.data = [hs_tpl226zwYL];
                return $res;
            case 2:
                var hs_wild426zwYN = $hs.modules.GHCziIntWord64.hs_int64ToWord64zh.hscall(hs_i26zwYA);
                var hs_tpl226zwYP = hs_word64ToPositive25r5uY.hscall(hs_wild426zwYN);
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl226zwYP];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    this.hs_integerToInt64.evaluate = function (hs_ds26zwYR) {
        var hs_wild26zxdw = hs_ds26zwYR;
        if (hs_ds26zwYR.notEvaluated) {
            hs_wild26zxdw = hs_ds26zwYR.hscall();
        }
        switch (hs_wild26zxdw.tag) {
        case 1:
            var hs_p26zwYU = hs_wild26zxdw.data[0];
            var hs_wild126zwYW = hs_positiveToWord6425r5uZ.hscall(hs_p26zwYU);
            return $hs.modules.GHCziIntWord64.hs_word64ToInt64zh.hscall(hs_wild126zwYW);
        case 2:
            var hs_p26zwYY = hs_wild26zxdw.data[0];
            var hs_wild126zwZ0 = hs_positiveToWord6425r5uZ.hscall(hs_p26zwYY);
            var hs_wild226zwZ2 = $hs.modules.GHCziIntWord64.hs_word64ToInt64zh.hscall(hs_wild126zwZ0);
            return $hs.modules.GHCziIntWord64.hs_negateInt64zh.hscall(hs_wild226zwZ2);
        case 3:
            return $hs.modules.GHCziIntWord64.hs_intToInt64zh.hscall(0);
        }
    };
    this.hs_word64ToInteger.evaluate = function (hs_w26zwZ5) {
        var hs_wild26zwZ6 = $hs.modules.GHCziIntWord64.hs_wordToWord64zh.hscall(0);
        var hs_wild126zxdx = $hs.modules.GHCziIntWord64.hs_eqWord64zh.hscall(hs_w26zwZ5, hs_wild26zwZ6);
        switch (hs_wild126zxdx.tag) {
        case 1:
            var hs_tpl226zwZ9 = hs_word64ToPositive25r5uY.hscall(hs_w26zwZ5);
            var $res = new $hs.Data(1);
            $res.data = [hs_tpl226zwZ9];
            return $res;
        case 2:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    this.hs_integerToWord64.evaluate = function (hs_i26zwZb) {
        var hs_wild26zwZd = $hs.modules.GHCziInteger.hs_integerToInt64.hscall(hs_i26zwZb);
        return $hs.modules.GHCziIntWord64.hs_int64ToWord64zh.hscall(hs_wild26zwZd);
    };
    this.hs_integerToWord.evaluate = function (hs_ds26zwZf) {
        var hs_wild26zxdz = hs_ds26zwZf;
        if (hs_ds26zwZf.notEvaluated) {
            hs_wild26zxdz = hs_ds26zwZf.hscall();
        }
        switch (hs_wild26zxdz.tag) {
        case 1:
            var hs_ds126zwZi = hs_wild26zxdz.data[0];
            var hs_wild126zxdB = hs_ds126zwZi;
            if (hs_ds126zwZi.notEvaluated) {
                hs_wild126zxdB = hs_ds126zwZi.hscall();
            }
            switch (hs_wild126zxdB.tag) {
            case 1:
                var hs_w26zwZm = hs_wild126zxdB.data[0];
                if (hs_w26zwZm.notEvaluated) {
                    return hs_w26zwZm.hscall();
                } else {
                    return hs_w26zwZm;
                }
            case 2:
                return 0;
            }
        case 2:
            var hs_ds126zwZo = hs_wild26zxdz.data[0];
            var hs_wild126zxdy = hs_ds126zwZo;
            if (hs_ds126zwZo.notEvaluated) {
                hs_wild126zxdy = hs_ds126zwZo.hscall();
            }
            switch (hs_wild126zxdy.tag) {
            case 1:
                var hs_w26zwZs = hs_wild126zxdy.data[0];
                return ($hs.Int.addCarry(0, ~hs_w26zwZs, 1))[0];
            case 2:
                return 0;
            }
        case 3:
            return 0;
        }
    };
    this.hs_integerToInt.evaluate = function (hs_i26zwZu) {
        var hs_wild26zxdE = hs_i26zwZu;
        if (hs_i26zwZu.notEvaluated) {
            hs_wild26zxdE = hs_i26zwZu.hscall();
        }
        switch (hs_wild26zxdE.tag) {
        case 1:
            var hs_ds26zwZx = hs_wild26zxdE.data[0];
            var hs_wild126zxdH = hs_ds26zwZx;
            if (hs_ds26zwZx.notEvaluated) {
                hs_wild126zxdH = hs_ds26zwZx.hscall();
            }
            switch (hs_wild126zxdH.tag) {
            case 1:
                var hs_w26zwZB = hs_wild126zxdH.data[0];
                return hs_w26zwZB;
            case 2:
                return 0;
            }
        case 2:
            var hs_ds26zwZD = hs_wild26zxdE.data[0];
            var hs_wild126zxdD = hs_ds26zwZD;
            if (hs_ds26zwZD.notEvaluated) {
                hs_wild126zxdD = hs_ds26zwZD.hscall();
            }
            switch (hs_wild126zxdD.tag) {
            case 1:
                var hs_w26zwZH = hs_wild126zxdD.data[0];
                var hs_sat26zxdG = ($hs.Int.addCarry(0, ~hs_w26zwZH, 1))[0];
                return hs_sat26zxdG;
            case 2:
                return 0;
            }
        case 3:
            return 0;
        }
    };
    this.hs_wordToInteger.evaluate = function (hs_w26zwZK) {
        var hs_wild26zxdJ = hs_w26zwZK == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26zxdJ.tag) {
        case 1:
            var hs_sat26zxdK = new $hs.Data(1);
            hs_sat26zxdK.data = [hs_w26zwZK, $hs.modules.GHCziIntegerziType.hs_None];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26zxdK];
            return $res;
        case 2:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    this.hs_smallInteger.evaluate = function (hs_i26zwZO) {
        var hs_wild26zxdL = hs_i26zwZO >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26zxdL.tag) {
        case 1:
            var hs_sat26zxdQ = -hs_i26zwZO;
            var hs_w26zwZS = hs_sat26zxdQ;
            var hs_wild126zxdR = hs_w26zwZS == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild126zxdR.tag) {
            case 1:
                var hs_sat26zxdS = new $hs.Data(1);
                hs_sat26zxdS.data = [hs_w26zwZS, $hs.modules.GHCziIntegerziType.hs_None];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26zxdS];
                return $res;
            case 2:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_sat26zxdM = hs_i26zwZO;
            var hs_wild126zxdN = hs_sat26zxdM == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild126zxdN.tag) {
            case 1:
                var hs_sat26zxdP = hs_i26zwZO;
                var hs_sat26zxdO = new $hs.Data(1);
                hs_sat26zxdO.data = [hs_sat26zxdP, $hs.modules.GHCziIntegerziType.hs_None];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26zxdO];
                return $res;
            case 2:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        }
    };
    this.hs_decodeFloatInteger.evaluate = function (hs_f26zx00) {
        throw "primitive operation decodeFloat_Int#. Not implemeted yet.";
        var hs_mant26zx04 = hs_wild26zxdU[0];
        var hs_exp26zx06 = hs_wild26zxdU[1];
        var hs_sat26zxdT = new $hs.Thunk();
        hs_sat26zxdT.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_mant26zx04);
        };
        return [hs_sat26zxdT, hs_exp26zx06];
    };
    hs_errorPositive25r5u5.data = [47, $hs.modules.GHCziIntegerziType.hs_None];
    hs_minusPositive25r5v3.evaluate = function (hs_ds26zx0b, hs_ds126zx0d) {
        var hs_fail26zx0m = new $hs.Func(1);
        hs_fail26zx0m.evaluate = function (hs_ds226zx0l) {
            var hs_ds326zx0h = hs_ds26zx0b;
            if (hs_ds26zx0b.notEvaluated) {
                hs_ds326zx0h = hs_ds26zx0b.hscall();
            }
            var hs_wild26zxe6 = hs_ds126zx0d;
            if (hs_ds126zx0d.notEvaluated) {
                hs_wild26zxe6 = hs_ds126zx0d.hscall();
            }
            switch (hs_wild26zxe6.tag) {
            case 1:
                var hs_wild126zxe7 = hs_ds326zx0h;
                if (hs_ds326zx0h.notEvaluated) {
                    hs_wild126zxe7 = hs_ds326zx0h.hscall();
                }
                switch (hs_wild126zxe7.tag) {
                case 1:
                    return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/integer-simple/GHC/Integer.hs:(528,1)-(541,42)|function GHC.Integer.minusPositive\x00");
                case 2:
                    if (hs_errorPositive25r5u5.notEvaluated) {
                        return hs_errorPositive25r5u5.hscall();
                    } else {
                        return hs_errorPositive25r5u5;
                    }
                }
            case 2:
                if (hs_ds326zx0h.notEvaluated) {
                    return hs_ds326zx0h.hscall();
                } else {
                    return hs_ds326zx0h;
                }
            }
        };
        var hs_wild26zxdV = hs_ds26zx0b;
        if (hs_ds26zx0b.notEvaluated) {
            hs_wild26zxdV = hs_ds26zx0b.hscall();
        }
        switch (hs_wild26zxdV.tag) {
        case 1:
            var hs_x26zx0t = hs_wild26zxdV.data[0];
            var hs_xs26zx0x = hs_wild26zxdV.data[1];
            var hs_wild126zxdW = hs_ds126zx0d;
            if (hs_ds126zx0d.notEvaluated) {
                hs_wild126zxdW = hs_ds126zx0d.hscall();
            }
            switch (hs_wild126zxdW.tag) {
            case 1:
                var hs_y26zx0u = hs_wild126zxdW.data[0];
                var hs_ys26zx0y = hs_wild126zxdW.data[1];
                var hs_wild226zxdX = hs_x26zx0t == hs_y26zx0u ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild226zxdX.tag) {
                case 1:
                    var hs_wild326zxe0 = $hs.Word.gt(hs_x26zx0t, hs_y26zx0u) ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild326zxe0.tag) {
                    case 1:
                        var hs_sat26zxe2 = new $hs.Thunk();
                        hs_sat26zxe2.evaluateOnce = function () {
                            return hs_minusPositive25r5v3.hscall(hs_xs26zx0x, hs_ys26zx0y);
                        };
                        var hs_tpl226zx0E = hs_minusPositive25r5v3.hscall(hs_sat26zxe2, hs_onePositive25r5uO);
                        var hs_sat26zxe3 = ($hs.Int.addCarry(0, ~hs_y26zx0u, 1))[0];
                        var hs_sat26zxe4 = ($hs.Int.addCarry(hs_sat26zxe3, 1, 0))[0];
                        var hs_sat26zxe5 = ($hs.Int.addCarry(hs_sat26zxe4, hs_x26zx0t, 0))[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26zxe5, hs_tpl226zx0E];
                        return $res;
                    case 2:
                        var hs_tpl226zx0H = hs_minusPositive25r5v3.hscall(hs_xs26zx0x, hs_ys26zx0y);
                        var hs_sat26zxe1 = ($hs.Int.addCarry(hs_x26zx0t, ~hs_y26zx0u, 1))[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26zxe1, hs_tpl226zx0H];
                        return $res;
                    }
                case 2:
                    var hs_wild326zx0L = hs_minusPositive25r5v3.hscall(hs_xs26zx0x, hs_ys26zx0y);
                    switch (hs_wild326zx0L.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [0, hs_wild326zx0L];
                        return $res;
                    case 2:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                }
            case 2:
                return hs_fail26zx0m.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        case 2:
            return hs_fail26zx0m.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
        }
    };
    this.hs_orInteger.evaluate = function (hs_ds26zx0O, hs_i26zx0Q) {
        var hs_wild26zx0S = hs_ds26zx0O;
        if (hs_ds26zx0O.notEvaluated) {
            hs_wild26zx0S = hs_ds26zx0O.hscall();
        }
        switch (hs_wild26zx0S.tag) {
        case 3:
            if (hs_i26zx0Q.notEvaluated) {
                return hs_i26zx0Q.hscall();
            } else {
                return hs_i26zx0Q;
            }
        default:
            var hs_wild126zx0V = hs_i26zx0Q;
            if (hs_i26zx0Q.notEvaluated) {
                hs_wild126zx0V = hs_i26zx0Q.hscall();
            }
            switch (hs_wild126zx0V.tag) {
            case 3:
                if (hs_wild26zx0S.notEvaluated) {
                    return hs_wild26zx0S.hscall();
                } else {
                    return hs_wild26zx0S;
                }
            default:
                var hs_wild226zxed = hs_wild26zx0S;
                if (hs_wild26zx0S.notEvaluated) {
                    hs_wild226zxed = hs_wild26zx0S.hscall();
                }
                switch (hs_wild226zxed.tag) {
                case 1:
                    var hs_x26zx0Y = hs_wild226zxed.data[0];
                    var hs_wild326zxem = hs_wild126zx0V;
                    if (hs_wild126zx0V.notEvaluated) {
                        hs_wild326zxem = hs_wild126zx0V.hscall();
                    }
                    switch (hs_wild326zxem.tag) {
                    case 1:
                        var hs_y26zx0Z = hs_wild326zxem.data[0];
                        var hs_tpl226zx11 = hs_orDigits25r5vf.hscall(hs_x26zx0Y, hs_y26zx0Z);
                        var $res = new $hs.Data(1);
                        $res.data = [hs_tpl226zx11];
                        return $res;
                    case 2:
                        var hs_y26zx14 = hs_wild326zxem.data[0];
                        var hs_sat26zxen = new $hs.Thunk();
                        hs_sat26zxen.evaluateOnce = function () {
                            var hs_sat26zxeq = new $hs.Thunk();
                            hs_sat26zxeq.evaluateOnce = function () {
                                var hs_sat26zxes = new $hs.Thunk();
                                hs_sat26zxes.evaluateOnce = function () {
                                    return hs_minusPositive25r5v3.hscall(hs_y26zx14, hs_onePositive25r5uO);
                                };
                                var hs_sat26zxer = new $hs.Thunk();
                                hs_sat26zxer.evaluateOnce = function () {
                                    return hs_flipBitsDigits25r5uv.hscall(hs_x26zx0Y);
                                };
                                return hs_andDigitsOnes25r5ve.hscall(hs_sat26zxer, hs_sat26zxes);
                            };
                            return hs_succPositive25r5v2.hscall(hs_sat26zxeq);
                        };
                        var hs_wild426zx1b = hs_removeZZeroTails25r5uX.hscall(hs_sat26zxen);
                        switch (hs_wild426zx1b.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_wild426zx1b];
                            return $res;
                        case 2:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    }
                case 2:
                    var hs_x26zx1h = hs_wild226zxed.data[0];
                    var hs_wild326zxec = hs_wild126zx0V;
                    if (hs_wild126zx0V.notEvaluated) {
                        hs_wild326zxec = hs_wild126zx0V.hscall();
                    }
                    switch (hs_wild326zxec.tag) {
                    case 1:
                        var hs_y26zx1f = hs_wild326zxec.data[0];
                        var hs_sat26zxel = new $hs.Data(2);
                        hs_sat26zxel.data = [hs_x26zx1h];
                        var hs_sat26zxek = new $hs.Data(1);
                        hs_sat26zxek.data = [hs_y26zx1f];
                        return $hs.modules.GHCziInteger.hs_orInteger.hscall(hs_sat26zxek, hs_sat26zxel);
                    case 2:
                        var hs_y26zx1l = hs_wild326zxec.data[0];
                        var hs_sat26zxee = new $hs.Thunk();
                        hs_sat26zxee.evaluateOnce = function () {
                            var hs_sat26zxeh = new $hs.Thunk();
                            hs_sat26zxeh.evaluateOnce = function () {
                                var hs_sat26zxej = new $hs.Thunk();
                                hs_sat26zxej.evaluateOnce = function () {
                                    return hs_minusPositive25r5v3.hscall(hs_y26zx1l, hs_onePositive25r5uO);
                                };
                                var hs_sat26zxei = new $hs.Thunk();
                                hs_sat26zxei.evaluateOnce = function () {
                                    return hs_minusPositive25r5v3.hscall(hs_x26zx1h, hs_onePositive25r5uO);
                                };
                                return hs_andDigits25r5vd.hscall(hs_sat26zxei, hs_sat26zxej);
                            };
                            return hs_succPositive25r5v2.hscall(hs_sat26zxeh);
                        };
                        var hs_wild426zx1s = hs_removeZZeroTails25r5uX.hscall(hs_sat26zxee);
                        switch (hs_wild426zx1s.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_wild426zx1s];
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
    this.hs_xorInteger.evaluate = function (hs_ds26zx1v, hs_i26zx1x) {
        var hs_wild26zx1z = hs_ds26zx1v;
        if (hs_ds26zx1v.notEvaluated) {
            hs_wild26zx1z = hs_ds26zx1v.hscall();
        }
        switch (hs_wild26zx1z.tag) {
        case 3:
            if (hs_i26zx1x.notEvaluated) {
                return hs_i26zx1x.hscall();
            } else {
                return hs_i26zx1x;
            }
        default:
            var hs_wild126zx1C = hs_i26zx1x;
            if (hs_i26zx1x.notEvaluated) {
                hs_wild126zx1C = hs_i26zx1x.hscall();
            }
            switch (hs_wild126zx1C.tag) {
            case 3:
                if (hs_wild26zx1z.notEvaluated) {
                    return hs_wild26zx1z.hscall();
                } else {
                    return hs_wild26zx1z;
                }
            default:
                var hs_wild226zxeu = hs_wild26zx1z;
                if (hs_wild26zx1z.notEvaluated) {
                    hs_wild226zxeu = hs_wild26zx1z.hscall();
                }
                switch (hs_wild226zxeu.tag) {
                case 1:
                    var hs_x26zx1F = hs_wild226zxeu.data[0];
                    var hs_wild326zxeC = hs_wild126zx1C;
                    if (hs_wild126zx1C.notEvaluated) {
                        hs_wild326zxeC = hs_wild126zx1C.hscall();
                    }
                    switch (hs_wild326zxeC.tag) {
                    case 1:
                        var hs_y26zx1G = hs_wild326zxeC.data[0];
                        var hs_sat26zxeI = new $hs.Thunk();
                        hs_sat26zxeI.evaluateOnce = function () {
                            return hs_xorDigits25r5vg.hscall(hs_x26zx1F, hs_y26zx1G);
                        };
                        var hs_wild426zx1L = hs_removeZZeroTails25r5uX.hscall(hs_sat26zxeI);
                        switch (hs_wild426zx1L.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [hs_wild426zx1L];
                            return $res;
                        case 2:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    case 2:
                        var hs_y26zx1N = hs_wild326zxeC.data[0];
                        var hs_sat26zxeD = new $hs.Thunk();
                        hs_sat26zxeD.evaluateOnce = function () {
                            var hs_sat26zxeG = new $hs.Thunk();
                            hs_sat26zxeG.evaluateOnce = function () {
                                var hs_sat26zxeH = new $hs.Thunk();
                                hs_sat26zxeH.evaluateOnce = function () {
                                    return hs_minusPositive25r5v3.hscall(hs_y26zx1N, hs_onePositive25r5uO);
                                };
                                return hs_xorDigits25r5vg.hscall(hs_x26zx1F, hs_sat26zxeH);
                            };
                            return hs_succPositive25r5v2.hscall(hs_sat26zxeG);
                        };
                        var hs_wild426zx1U = hs_removeZZeroTails25r5uX.hscall(hs_sat26zxeD);
                        switch (hs_wild426zx1U.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_wild426zx1U];
                            return $res;
                        case 2:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    }
                case 2:
                    var hs_x26zx20 = hs_wild226zxeu.data[0];
                    var hs_wild326zxet = hs_wild126zx1C;
                    if (hs_wild126zx1C.notEvaluated) {
                        hs_wild326zxet = hs_wild126zx1C.hscall();
                    }
                    switch (hs_wild326zxet.tag) {
                    case 1:
                        var hs_y26zx1Y = hs_wild326zxet.data[0];
                        var hs_sat26zxeB = new $hs.Data(2);
                        hs_sat26zxeB.data = [hs_x26zx20];
                        var hs_sat26zxeA = new $hs.Data(1);
                        hs_sat26zxeA.data = [hs_y26zx1Y];
                        return $hs.modules.GHCziInteger.hs_xorInteger.hscall(hs_sat26zxeA, hs_sat26zxeB);
                    case 2:
                        var hs_y26zx24 = hs_wild326zxet.data[0];
                        var hs_sat26zxev = new $hs.Thunk();
                        hs_sat26zxev.evaluateOnce = function () {
                            var hs_sat26zxez = new $hs.Thunk();
                            hs_sat26zxez.evaluateOnce = function () {
                                return hs_minusPositive25r5v3.hscall(hs_y26zx24, hs_onePositive25r5uO);
                            };
                            var hs_sat26zxey = new $hs.Thunk();
                            hs_sat26zxey.evaluateOnce = function () {
                                return hs_minusPositive25r5v3.hscall(hs_x26zx20, hs_onePositive25r5uO);
                            };
                            return hs_xorDigits25r5vg.hscall(hs_sat26zxey, hs_sat26zxez);
                        };
                        var hs_wild426zx2a = hs_removeZZeroTails25r5uX.hscall(hs_sat26zxev);
                        switch (hs_wild426zx2a.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [hs_wild426zx2a];
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
    this.hs_andInteger.evaluate = function (hs_ds26zx2d, hs_ds126zx2f) {
        var hs_wild26zx2h = hs_ds26zx2d;
        if (hs_ds26zx2d.notEvaluated) {
            hs_wild26zx2h = hs_ds26zx2d.hscall();
        }
        switch (hs_wild26zx2h.tag) {
        case 3:
            var hs_ds226zxeL = hs_ds126zx2f;
            if (hs_ds126zx2f.notEvaluated) {
                hs_ds226zxeL = hs_ds126zx2f.hscall();
            }
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        default:
            var hs_wild126zx2k = hs_ds126zx2f;
            if (hs_ds126zx2f.notEvaluated) {
                hs_wild126zx2k = hs_ds126zx2f.hscall();
            }
            switch (hs_wild126zx2k.tag) {
            case 3:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            default:
                var hs_wild226zxeN = hs_wild26zx2h;
                if (hs_wild26zx2h.notEvaluated) {
                    hs_wild226zxeN = hs_wild26zx2h.hscall();
                }
                switch (hs_wild226zxeN.tag) {
                case 1:
                    var hs_x26zx2n = hs_wild226zxeN.data[0];
                    var hs_wild326zxeW = hs_wild126zx2k;
                    if (hs_wild126zx2k.notEvaluated) {
                        hs_wild326zxeW = hs_wild126zx2k.hscall();
                    }
                    switch (hs_wild326zxeW.tag) {
                    case 1:
                        var hs_y26zx2o = hs_wild326zxeW.data[0];
                        var hs_sat26zxf2 = new $hs.Thunk();
                        hs_sat26zxf2.evaluateOnce = function () {
                            return hs_andDigits25r5vd.hscall(hs_x26zx2n, hs_y26zx2o);
                        };
                        var hs_wild426zx2t = hs_removeZZeroTails25r5uX.hscall(hs_sat26zxf2);
                        switch (hs_wild426zx2t.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [hs_wild426zx2t];
                            return $res;
                        case 2:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    case 2:
                        var hs_y26zx2v = hs_wild326zxeW.data[0];
                        var hs_sat26zxeX = new $hs.Thunk();
                        hs_sat26zxeX.evaluateOnce = function () {
                            var hs_sat26zxf0 = new $hs.Thunk();
                            hs_sat26zxf0.evaluateOnce = function () {
                                var hs_sat26zxf1 = new $hs.Thunk();
                                hs_sat26zxf1.evaluateOnce = function () {
                                    return hs_minusPositive25r5v3.hscall(hs_y26zx2v, hs_onePositive25r5uO);
                                };
                                return hs_flipBitsDigits25r5uv.hscall(hs_sat26zxf1);
                            };
                            return hs_andDigitsOnes25r5ve.hscall(hs_sat26zxf0, hs_x26zx2n);
                        };
                        var hs_wild426zx2C = hs_removeZZeroTails25r5uX.hscall(hs_sat26zxeX);
                        switch (hs_wild426zx2C.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [hs_wild426zx2C];
                            return $res;
                        case 2:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    }
                case 2:
                    var hs_x26zx2I = hs_wild226zxeN.data[0];
                    var hs_wild326zxeM = hs_wild126zx2k;
                    if (hs_wild126zx2k.notEvaluated) {
                        hs_wild326zxeM = hs_wild126zx2k.hscall();
                    }
                    switch (hs_wild326zxeM.tag) {
                    case 1:
                        var hs_y26zx2G = hs_wild326zxeM.data[0];
                        var hs_sat26zxeV = new $hs.Data(2);
                        hs_sat26zxeV.data = [hs_x26zx2I];
                        var hs_sat26zxeU = new $hs.Data(1);
                        hs_sat26zxeU.data = [hs_y26zx2G];
                        return $hs.modules.GHCziInteger.hs_andInteger.hscall(hs_sat26zxeU, hs_sat26zxeV);
                    case 2:
                        var hs_y26zx2M = hs_wild326zxeM.data[0];
                        var hs_sat26zxeO = new $hs.Thunk();
                        hs_sat26zxeO.evaluateOnce = function () {
                            var hs_sat26zxeR = new $hs.Thunk();
                            hs_sat26zxeR.evaluateOnce = function () {
                                var hs_sat26zxeT = new $hs.Thunk();
                                hs_sat26zxeT.evaluateOnce = function () {
                                    return hs_minusPositive25r5v3.hscall(hs_y26zx2M, hs_onePositive25r5uO);
                                };
                                var hs_sat26zxeS = new $hs.Thunk();
                                hs_sat26zxeS.evaluateOnce = function () {
                                    return hs_minusPositive25r5v3.hscall(hs_x26zx2I, hs_onePositive25r5uO);
                                };
                                return hs_orDigits25r5vf.hscall(hs_sat26zxeS, hs_sat26zxeT);
                            };
                            return hs_succPositive25r5v2.hscall(hs_sat26zxeR);
                        };
                        var hs_wild426zx2T = hs_removeZZeroTails25r5uX.hscall(hs_sat26zxeO);
                        switch (hs_wild426zx2T.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_wild426zx2T];
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
    this.hs_plusInteger.evaluate = function (hs_ds26zx2Z, hs_ds126zx31) {
        var hs_fail26zx35 = new $hs.Func(1);
        hs_fail26zx35.evaluate = function (hs_ds226zx34) {
            var hs_ds326zx33 = hs_ds26zx2Z;
            if (hs_ds26zx2Z.notEvaluated) {
                hs_ds326zx33 = hs_ds26zx2Z.hscall();
            }
            var hs_wild26zxfb = hs_ds126zx31;
            if (hs_ds126zx31.notEvaluated) {
                hs_wild26zxfb = hs_ds126zx31.hscall();
            }
            switch (hs_wild26zxfb.tag) {
            case 3:
                if (hs_ds326zx33.notEvaluated) {
                    return hs_ds326zx33.hscall();
                } else {
                    return hs_ds326zx33;
                }
            default:
                return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/integer-simple/GHC/Integer.hs:(302,1)-(310,41)|function GHC.Integer.plusInteger\x00");
            }
        };
        var hs_wild26zxf6 = hs_ds26zx2Z;
        if (hs_ds26zx2Z.notEvaluated) {
            hs_wild26zxf6 = hs_ds26zx2Z.hscall();
        }
        switch (hs_wild26zxf6.tag) {
        case 1:
            var hs_p126zx3a = hs_wild26zxf6.data[0];
            var hs_wild126zxf9 = hs_ds126zx31;
            if (hs_ds126zx31.notEvaluated) {
                hs_wild126zxf9 = hs_ds126zx31.hscall();
            }
            switch (hs_wild126zxf9.tag) {
            case 1:
                var hs_p226zx3b = hs_wild126zxf9.data[0];
                var hs_tpl226zx3d = hs_plusPositive25r5v1.hscall(hs_p126zx3a, hs_p226zx3b);
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl226zx3d];
                return $res;
            case 2:
                var hs_p226zx3f = hs_wild126zxf9.data[0];
                var hs_wild226zxfa = hs_comparePositive25r5v0.hscall(hs_p126zx3a, hs_p226zx3f);
                switch (hs_wild226zxfa.tag) {
                case 1:
                    var hs_tpl226zx3i = hs_minusPositive25r5v3.hscall(hs_p226zx3f, hs_p126zx3a);
                    var $res = new $hs.Data(2);
                    $res.data = [hs_tpl226zx3i];
                    return $res;
                case 2:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                case 3:
                    var hs_tpl226zx3k = hs_minusPositive25r5v3.hscall(hs_p126zx3a, hs_p226zx3f);
                    var $res = new $hs.Data(1);
                    $res.data = [hs_tpl226zx3k];
                    return $res;
                }
            case 3:
                return hs_fail26zx35.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        case 2:
            var hs_p126zx3q = hs_wild26zxf6.data[0];
            var hs_wild126zxf5 = hs_ds126zx31;
            if (hs_ds126zx31.notEvaluated) {
                hs_wild126zxf5 = hs_ds126zx31.hscall();
            }
            switch (hs_wild126zxf5.tag) {
            case 1:
                var hs_p226zx3o = hs_wild126zxf5.data[0];
                var hs_sat26zxf8 = new $hs.Data(2);
                hs_sat26zxf8.data = [hs_p126zx3q];
                var hs_sat26zxf7 = new $hs.Data(1);
                hs_sat26zxf7.data = [hs_p226zx3o];
                return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_sat26zxf7, hs_sat26zxf8);
            case 2:
                var hs_p226zx3t = hs_wild126zxf5.data[0];
                var hs_tpl226zx3v = hs_plusPositive25r5v1.hscall(hs_p126zx3q, hs_p226zx3t);
                var $res = new $hs.Data(2);
                $res.data = [hs_tpl226zx3v];
                return $res;
            case 3:
                return hs_fail26zx35.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        case 3:
            if (hs_ds126zx31.notEvaluated) {
                return hs_ds126zx31.hscall();
            } else {
                return hs_ds126zx31;
            }
        }
    };
    this.hs_minusInteger.evaluate = function (hs_i126zx3y, hs_i226zx3z) {
        var hs_sat26zxfc = new $hs.Thunk();
        hs_sat26zxfc.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_negateInteger.hscall(hs_i226zx3z);
        };
        return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_i126zx3y, hs_sat26zxfc);
    };
    this.hs_complementInteger.evaluate = function (hs_x26zx3C) {
        var hs_sat26zxfd = new $hs.Thunk();
        hs_sat26zxfd.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_negateInteger.hscall(hs_x26zx3C);
        };
        return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_negativeOneInteger25r5uf, hs_sat26zxfd);
    };
    this.hs_shiftRInteger.evaluate = function (hs_ds26zx3G, hs_i26zx3K) {
        var hs_wild26zx3M = hs_ds26zx3G;
        if (hs_ds26zx3G.notEvaluated) {
            hs_wild26zx3M = hs_ds26zx3G.hscall();
        }
        switch (hs_wild26zx3M.tag) {
        case 1:
            var hs_p26zx3J = hs_wild26zx3M.data[0];
            return hs_shiftRPositive25r5v9.hscall(hs_p26zx3J, hs_i26zx3K);
        case 2:
            var hs_sat26zxfe = new $hs.Thunk();
            hs_sat26zxfe.evaluateOnce = function () {
                var hs_sat26zxfg = new $hs.Thunk();
                hs_sat26zxfg.evaluateOnce = function () {
                    var hs_sat26zxfi = new $hs.Thunk();
                    hs_sat26zxfi.evaluateOnce = function () {
                        var hs_wild126zxfj = hs_wild26zx3M;
                        if (hs_wild26zx3M.notEvaluated) {
                            hs_wild126zxfj = hs_wild26zx3M.hscall();
                        }
                        switch (hs_wild126zxfj.tag) {
                        case 1:
                            var hs_p26zx3P = hs_wild126zxfj.data[0];
                            var $res = new $hs.Data(2);
                            $res.data = [hs_p26zx3P];
                            return $res;
                        case 2:
                            var hs_p26zx3R = hs_wild126zxfj.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_p26zx3R];
                            return $res;
                        case 3:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    };
                    return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_negativeOneInteger25r5uf, hs_sat26zxfi);
                };
                var hs_wild126zxfh = $hs.modules.GHCziInteger.hs_shiftRInteger.hscall(hs_sat26zxfg, hs_i26zx3K);
                switch (hs_wild126zxfh.tag) {
                case 1:
                    var hs_p26zx3W = hs_wild126zxfh.data[0];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_p26zx3W];
                    return $res;
                case 2:
                    var hs_p26zx3Y = hs_wild126zxfh.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_p26zx3Y];
                    return $res;
                case 3:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                }
            };
            return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_negativeOneInteger25r5uf, hs_sat26zxfe);
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_quotRemPositive25r5vb.evaluate = function (hs_xs26zx42, hs_ys26zx44) {
        var hs_xs126zx59 = hs_xs26zx42;
        if (hs_xs26zx42.notEvaluated) {
            hs_xs126zx59 = hs_xs26zx42.hscall();
        }
        var hs_ys126zx4x = hs_ys26zx44;
        if (hs_ys26zx44.notEvaluated) {
            hs_ys126zx4x = hs_ys26zx44.hscall();
        }
        var hs_g26zx4n = new $hs.Func(3);
        hs_g26zx4n.evaluate = function (hs_d26zx4e, hs_ds26zx4a, hs_m26zx4c) {
            var hs_wild26zxfy = hs_ds26zx4a;
            if (hs_ds26zx4a.notEvaluated) {
                hs_wild26zxfy = hs_ds26zx4a.hscall();
            }
            switch (hs_wild26zxfy.tag) {
            case 1:
                var hs_m126zx4f = hs_m26zx4c;
                if (hs_m26zx4c.notEvaluated) {
                    hs_m126zx4f = hs_m26zx4c.hscall();
                }
                return [hs_d26zx4e, hs_m126zx4f];
            case 2:
                var hs_sub26zx4k = hs_wild26zxfy.data[0];
                var hs_subs26zx4p = hs_wild26zxfy.data[1];
                var hs_m126zx4j = hs_m26zx4c;
                if (hs_m26zx4c.notEvaluated) {
                    hs_m126zx4j = hs_m26zx4c.hscall();
                }
                var hs_wild126zxfz = hs_comparePositive25r5v0.hscall(hs_m126zx4j, hs_sub26zx4k);
                switch (hs_wild126zxfz.tag) {
                case 1:
                    var hs_sat26zxfA = hs_d26zx4e << 1;
                    return hs_g26zx4n.hscall(hs_sat26zxfA, hs_subs26zx4p, hs_m126zx4j);
                default:
                    var hs_sat26zxfB = new $hs.Thunk();
                    hs_sat26zxfB.evaluateOnce = function () {
                        return hs_minusPositive25r5v3.hscall(hs_m126zx4j, hs_sub26zx4k);
                    };
                    var hs_sat26zxfC = hs_d26zx4e << 1;
                    var hs_sat26zxfD = ($hs.Int.addCarry(hs_sat26zxfC, 1, 0))[0];
                    return hs_g26zx4n.hscall(hs_sat26zxfD, hs_subs26zx4p, hs_sat26zxfB);
                }
            }
        };
        var hs_subtractors26zx4D = new $hs.Thunk();
        hs_subtractors26zx4D.evaluateOnce = function () {
            var hs_mkSubtractors26zx4A = new $hs.Func(1);
            hs_mkSubtractors26zx4A.evaluate = function (hs_n26zx4v) {
                var hs_wild26zx4y = hs_n26zx4v;
                if (hs_n26zx4v.notEvaluated) {
                    hs_wild26zx4y = hs_n26zx4v.hscall();
                }
                switch (hs_wild26zx4y) {
                case 0:
                    var $res = new $hs.Data(2);
                    $res.data = [hs_ys126zx4x, $hs.modules.GHCziIntegerziType.hs_Nil];
                    return $res;
                default:
                    var hs_sat26zxfF = new $hs.Thunk();
                    hs_sat26zxfF.evaluateOnce = function () {
                        var hs_sat26zxfG = ($hs.Int.addCarry(hs_wild26zx4y, ~1, 1))[0];
                        return hs_mkSubtractors26zx4A.hscall(hs_sat26zxfG);
                    };
                    var hs_sat26zxfE = new $hs.Thunk();
                    hs_sat26zxfE.evaluateOnce = function () {
                        return hs_smallShiftLPositive25r5v8.hscall(hs_ys126zx4x, hs_wild26zx4y);
                    };
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26zxfE, hs_sat26zxfF];
                    return $res;
                }
            };
            return hs_mkSubtractors26zx4A.hscall(31);
        };
        var hs_f26zx4L = new $hs.Func(1);
        hs_f26zx4L.evaluate = function (hs_ds26zx4G) {
            var hs_wild26zxfn = hs_ds26zx4G;
            if (hs_ds26zx4G.notEvaluated) {
                hs_wild26zxfn = hs_ds26zx4G.hscall();
            }
            switch (hs_wild26zxfn.tag) {
            case 1:
                var hs_zz26zx4T = hs_wild26zxfn.data[0];
                var hs_zzs26zx4K = hs_wild26zxfn.data[1];
                var hs_wild126zxfp = hs_f26zx4L.hscall(hs_zzs26zx4K);
                var hs_ds126zx50 = hs_wild126zxfp[0];
                var hs_m26zx4P = hs_wild126zxfp[1];
                var hs_sat26zxfq = new $hs.Thunk();
                hs_sat26zxfq.evaluateOnce = function () {
                    var hs_wild226zx4U = hs_m26zx4P;
                    if (hs_m26zx4P.notEvaluated) {
                        hs_wild226zx4U = hs_m26zx4P.hscall();
                    }
                    switch (hs_wild226zx4U.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [hs_zz26zx4T, hs_wild226zx4U];
                        return $res;
                    case 2:
                        var hs_wild326zxfv = hs_zz26zx4T == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                        switch (hs_wild326zxfv.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [hs_zz26zx4T, $hs.modules.GHCziIntegerziType.hs_None];
                            return $res;
                        case 2:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        }
                    }
                };
                var hs_wild226zxfr = hs_g26zx4n.hscall(0, hs_subtractors26zx4D, hs_sat26zxfq);
                var hs_d26zx54 = hs_wild226zxfr[0];
                var hs_mzqzq26zx58 = hs_wild226zxfr[1];
                var hs_sat26zxfo = new $hs.Thunk();
                hs_sat26zxfo.evaluateOnce = function () {
                    var hs_wild326zx55 = hs_ds126zx50;
                    if (hs_ds126zx50.notEvaluated) {
                        hs_wild326zx55 = hs_ds126zx50.hscall();
                    }
                    switch (hs_wild326zx55.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [hs_d26zx54, hs_wild326zx55];
                        return $res;
                    case 2:
                        var hs_wild426zxfs = hs_d26zx54 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                        switch (hs_wild426zxfs.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [hs_d26zx54, $hs.modules.GHCziIntegerziType.hs_None];
                            return $res;
                        case 2:
                            var $res = new $hs.Data(2);
                            $res.data = [];
                            return $res;
                        }
                    }
                };
                return [hs_sat26zxfo, hs_mzqzq26zx58];
            case 2:
                return [$hs.modules.GHCziIntegerziType.hs_None, $hs.modules.GHCziIntegerziType.hs_None];
            }
        };
        var hs_wild26zxfl = hs_f26zx4L.hscall(hs_xs126zx59);
        var hs_d26zx5d = hs_wild26zxfl[0];
        var hs_m26zx5f = hs_wild26zxfl[1];
        var hs_sat26zxfm = new $hs.Thunk();
        hs_sat26zxfm.evaluateOnce = function () {
            return hs_digitsMaybeZZeroToInteger25r5uU.hscall(hs_m26zx5f);
        };
        var hs_sat26zxfk = new $hs.Thunk();
        hs_sat26zxfk.evaluateOnce = function () {
            return hs_digitsMaybeZZeroToInteger25r5uU.hscall(hs_d26zx5d);
        };
        return [hs_sat26zxfk, hs_sat26zxfm];
    };
    hs_timesPositive25r5v4.evaluate = function (hs_ds26zx5n, hs_ds126zx5r) {
        var hs_fail26zx5m = new $hs.Func(1);
        hs_fail26zx5m.evaluate = function (hs_ds226zx5l) {
            return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/integer-simple/GHC/Integer.hs:(546,1)-(561,39)|function GHC.Integer.timesPositive\x00");
        };
        var hs_wild26zx5v = hs_ds26zx5n;
        if (hs_ds26zx5n.notEvaluated) {
            hs_wild26zx5v = hs_ds26zx5n.hscall();
        }
        switch (hs_wild26zx5v.tag) {
        case 1:
            var hs_wild126zx5D = hs_ds126zx5r;
            if (hs_ds126zx5r.notEvaluated) {
                hs_wild126zx5D = hs_ds126zx5r.hscall();
            }
            switch (hs_wild126zx5D.tag) {
            case 1:
                var hs_wild226zx69 = hs_wild26zx5v;
                if (hs_wild26zx5v.notEvaluated) {
                    hs_wild226zx69 = hs_wild26zx5v.hscall();
                }
                switch (hs_wild226zx69.tag) {
                case 1:
                    var hs_x26zx5L = hs_wild226zx69.data[0];
                    var hs_ds226zx5z = hs_wild226zx69.data[1];
                    var hs_wild326zx5P = hs_ds226zx5z;
                    if (hs_ds226zx5z.notEvaluated) {
                        hs_wild326zx5P = hs_ds226zx5z.hscall();
                    }
                    switch (hs_wild326zx5P.tag) {
                    case 1:
                        var hs_wild426zx5N = hs_wild126zx5D;
                        if (hs_wild126zx5D.notEvaluated) {
                            hs_wild426zx5N = hs_wild126zx5D.hscall();
                        }
                        switch (hs_wild426zx5N.tag) {
                        case 1:
                            var hs_y26zx5U = hs_wild426zx5N.data[0];
                            var hs_ds326zx5H = hs_wild426zx5N.data[1];
                            var hs_wild526zxfR = hs_ds326zx5H;
                            if (hs_ds326zx5H.notEvaluated) {
                                hs_wild526zxfR = hs_ds326zx5H.hscall();
                            }
                            switch (hs_wild526zxfR.tag) {
                            case 1:
                                var hs_sat26zxfY = new $hs.Thunk();
                                hs_sat26zxfY.evaluateOnce = function () {
                                    var hs_tpl226zx5R = hs_timesPositive25r5v4.hscall(hs_wild326zx5P, hs_wild426zx5N);
                                    var $res = new $hs.Data(1);
                                    $res.data = [0, hs_tpl226zx5R];
                                    return $res;
                                };
                                var hs_sat26zxfV = new $hs.Thunk();
                                hs_sat26zxfV.evaluateOnce = function () {
                                    var hs_sat26zxfZ = new $hs.Data(1);
                                    hs_sat26zxfZ.data = [hs_x26zx5L, $hs.modules.GHCziIntegerziType.hs_None];
                                    return hs_timesPositive25r5v4.hscall(hs_sat26zxfZ, hs_wild426zx5N);
                                };
                                return hs_plusPositive25r5v1.hscall(hs_sat26zxfV, hs_sat26zxfY);
                            case 2:
                                var hs_wild626zxfS = hs_x26zx5L == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                                switch (hs_wild626zxfS.tag) {
                                case 1:
                                    var hs_sat26zxfU = new $hs.Thunk();
                                    hs_sat26zxfU.evaluateOnce = function () {
                                        var hs_tpl226zx5X = hs_timesPositive25r5v4.hscall(hs_wild326zx5P, hs_wild426zx5N);
                                        var $res = new $hs.Data(1);
                                        $res.data = [0, hs_tpl226zx5X];
                                        return $res;
                                    };
                                    var hs_sat26zxfT = new $hs.Thunk();
                                    hs_sat26zxfT.evaluateOnce = function () {
                                        return hs_timesDigit25r5v5.hscall(hs_x26zx5L, hs_y26zx5U);
                                    };
                                    return hs_plusPositive25r5v1.hscall(hs_sat26zxfT, hs_sat26zxfU);
                                case 2:
                                    var hs_tpl226zx60 = hs_timesPositive25r5v4.hscall(hs_wild326zx5P, hs_wild426zx5N);
                                    var $res = new $hs.Data(1);
                                    $res.data = [0, hs_tpl226zx60];
                                    return $res;
                                }
                            }
                        case 2:
                            return hs_fail26zx5m.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        }
                    case 2:
                        var hs_wild426zx68 = hs_wild126zx5D;
                        if (hs_wild126zx5D.notEvaluated) {
                            hs_wild426zx68 = hs_wild126zx5D.hscall();
                        }
                        switch (hs_wild426zx68.tag) {
                        case 1:
                            var hs_y26zx6a = hs_wild426zx68.data[0];
                            var hs_ds326zx64 = hs_wild426zx68.data[1];
                            var hs_wild526zxfM = hs_ds326zx64;
                            if (hs_ds326zx64.notEvaluated) {
                                hs_wild526zxfM = hs_ds326zx64.hscall();
                            }
                            switch (hs_wild526zxfM.tag) {
                            case 1:
                                return hs_timesPositive25r5v4.hscall(hs_wild426zx68, hs_wild226zx69);
                            case 2:
                                return hs_timesDigit25r5v5.hscall(hs_x26zx5L, hs_y26zx6a);
                            }
                        case 2:
                            return hs_timesPositive25r5v4.hscall($hs.modules.GHCziIntegerziType.hs_None, hs_wild226zx69);
                        }
                    }
                case 2:
                    return hs_fail26zx5m.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            case 2:
                if (hs_errorPositive25r5u5.notEvaluated) {
                    return hs_errorPositive25r5u5.hscall();
                } else {
                    return hs_errorPositive25r5u5;
                }
            }
        case 2:
            var hs_ds226zxfH = hs_ds126zx5r;
            if (hs_ds126zx5r.notEvaluated) {
                hs_ds226zxfH = hs_ds126zx5r.hscall();
            }
            if (hs_errorPositive25r5u5.notEvaluated) {
                return hs_errorPositive25r5u5.hscall();
            } else {
                return hs_errorPositive25r5u5;
            }
        }
    };
    this.hs_timesInteger.evaluate = function (hs_ds26zx6e, hs_ds126zx6h) {
        var hs_wild26zxg1 = hs_ds26zx6e;
        if (hs_ds26zx6e.notEvaluated) {
            hs_wild26zxg1 = hs_ds26zx6e.hscall();
        }
        switch (hs_wild26zxg1.tag) {
        case 1:
            var hs_p126zx6k = hs_wild26zxg1.data[0];
            var hs_wild126zxg3 = hs_ds126zx6h;
            if (hs_ds126zx6h.notEvaluated) {
                hs_wild126zxg3 = hs_ds126zx6h.hscall();
            }
            switch (hs_wild126zxg3.tag) {
            case 1:
                var hs_p226zx6l = hs_wild126zxg3.data[0];
                var hs_tpl226zx6n = hs_timesPositive25r5v4.hscall(hs_p126zx6k, hs_p226zx6l);
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl226zx6n];
                return $res;
            case 2:
                var hs_p226zx6p = hs_wild126zxg3.data[0];
                var hs_tpl226zx6r = hs_timesPositive25r5v4.hscall(hs_p126zx6k, hs_p226zx6p);
                var $res = new $hs.Data(2);
                $res.data = [hs_tpl226zx6r];
                return $res;
            case 3:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_p126zx6v = hs_wild26zxg1.data[0];
            var hs_wild126zxg0 = hs_ds126zx6h;
            if (hs_ds126zx6h.notEvaluated) {
                hs_wild126zxg0 = hs_ds126zx6h.hscall();
            }
            switch (hs_wild126zxg0.tag) {
            case 1:
                var hs_p226zx6w = hs_wild126zxg0.data[0];
                var hs_tpl226zx6y = hs_timesPositive25r5v4.hscall(hs_p126zx6v, hs_p226zx6w);
                var $res = new $hs.Data(2);
                $res.data = [hs_tpl226zx6y];
                return $res;
            case 2:
                var hs_p226zx6A = hs_wild126zxg0.data[0];
                var hs_tpl226zx6C = hs_timesPositive25r5v4.hscall(hs_p126zx6v, hs_p226zx6A);
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl226zx6C];
                return $res;
            case 3:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_ds226zxg2 = hs_ds126zx6h;
            if (hs_ds126zx6h.notEvaluated) {
                hs_ds226zxg2 = hs_ds126zx6h.hscall();
            }
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    this.hs_decodeDoubleInteger.evaluate = function (hs_d26zx6F) {
        throw "primitive operation decodeDouble_2Int#. Not implemeted yet.";
        var hs_mantSign26zx6L = hs_wild26zxg5[0];
        var hs_mantHigh26zx6X = hs_wild26zxg5[1];
        var hs_mantLow26zx7b = hs_wild26zxg5[2];
        var hs_exp26zx7f = hs_wild26zxg5[3];
        var hs_sat26zxg4 = new $hs.Thunk();
        hs_sat26zxg4.evaluateOnce = function () {
            var hs_sat26zxg7 = new $hs.Thunk();
            hs_sat26zxg7.evaluateOnce = function () {
                var hs_sat26zxgh = new $hs.Thunk();
                hs_sat26zxgh.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_wordToInteger.hscall(hs_mantLow26zx7b);
                };
                var hs_sat26zxgg = new $hs.Thunk();
                hs_sat26zxgg.evaluateOnce = function () {
                    var hs_wild126zxgi = hs_mantHigh26zx6X == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild126zxgi.tag) {
                    case 1:
                        var hs_wild226zxgj = hs_twoToTheThirtytwoInteger25r5ug;
                        if (hs_twoToTheThirtytwoInteger25r5ug.notEvaluated) {
                            hs_wild226zxgj = hs_twoToTheThirtytwoInteger25r5ug.hscall();
                        }
                        switch (hs_wild226zxgj.tag) {
                        case 1:
                            var hs_p226zx72 = hs_wild226zxgj.data[0];
                            var hs_sat26zxgl = new $hs.Data(1);
                            hs_sat26zxgl.data = [hs_mantHigh26zx6X, $hs.modules.GHCziIntegerziType.hs_None];
                            var hs_tpl226zx74 = hs_timesPositive25r5v4.hscall(hs_sat26zxgl, hs_p226zx72);
                            var $res = new $hs.Data(1);
                            $res.data = [hs_tpl226zx74];
                            return $res;
                        case 2:
                            var hs_p226zx77 = hs_wild226zxgj.data[0];
                            var hs_sat26zxgk = new $hs.Data(1);
                            hs_sat26zxgk.data = [hs_mantHigh26zx6X, $hs.modules.GHCziIntegerziType.hs_None];
                            var hs_tpl226zx79 = hs_timesPositive25r5v4.hscall(hs_sat26zxgk, hs_p226zx77);
                            var $res = new $hs.Data(2);
                            $res.data = [hs_tpl226zx79];
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
                return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_sat26zxgg, hs_sat26zxgh);
            };
            var hs_sat26zxg6 = new $hs.Thunk();
            hs_sat26zxg6.evaluateOnce = function () {
                var hs_wild126zxg8 = hs_mantSign26zx6L >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild126zxg8.tag) {
                case 1:
                    var hs_sat26zxgd = -hs_mantSign26zx6L;
                    var hs_w26zx6P = hs_sat26zxgd;
                    var hs_wild226zxge = hs_w26zx6P == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226zxge.tag) {
                    case 1:
                        var hs_sat26zxgf = new $hs.Data(1);
                        hs_sat26zxgf.data = [hs_w26zx6P, $hs.modules.GHCziIntegerziType.hs_None];
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26zxgf];
                        return $res;
                    case 2:
                        var $res = new $hs.Data(3);
                        $res.data = [];
                        return $res;
                    }
                case 2:
                    var hs_sat26zxg9 = hs_mantSign26zx6L;
                    var hs_wild226zxga = hs_sat26zxg9 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226zxga.tag) {
                    case 1:
                        var hs_sat26zxgc = hs_mantSign26zx6L;
                        var hs_sat26zxgb = new $hs.Data(1);
                        hs_sat26zxgb.data = [hs_sat26zxgc, $hs.modules.GHCziIntegerziType.hs_None];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26zxgb];
                        return $res;
                    case 2:
                        var $res = new $hs.Data(3);
                        $res.data = [];
                        return $res;
                    }
                }
            };
            return $hs.modules.GHCziInteger.hs_timesInteger.hscall(hs_sat26zxg6, hs_sat26zxg7);
        };
        return [hs_sat26zxg4, hs_exp26zx7f];
    };
    hs_errorInteger25r5u4.data = [hs_errorPositive25r5u5];
    this.hs_quotRemInteger.evaluate = function (hs_ds26zx7i, hs_ds126zx7k) {
        var hs_wild26zx7m = hs_ds26zx7i;
        if (hs_ds26zx7i.notEvaluated) {
            hs_wild26zx7m = hs_ds26zx7i.hscall();
        }
        switch (hs_wild26zx7m.tag) {
        case 3:
            var hs_ds226zxgm = hs_ds126zx7k;
            if (hs_ds126zx7k.notEvaluated) {
                hs_ds226zxgm = hs_ds126zx7k.hscall();
            }
            return [$hs.modules.GHCziIntegerziType.hs_Naught, $hs.modules.GHCziIntegerziType.hs_Naught];
        default:
            var hs_wild126zx7p = hs_ds126zx7k;
            if (hs_ds126zx7k.notEvaluated) {
                hs_wild126zx7p = hs_ds126zx7k.hscall();
            }
            switch (hs_wild126zx7p.tag) {
            case 3:
                return [hs_errorInteger25r5u4, hs_errorInteger25r5u4];
            default:
                var hs_wild226zxgp = hs_wild26zx7m;
                if (hs_wild26zx7m.notEvaluated) {
                    hs_wild226zxgp = hs_wild26zx7m.hscall();
                }
                switch (hs_wild226zxgp.tag) {
                case 1:
                    var hs_p126zx7s = hs_wild226zxgp.data[0];
                    var hs_wild326zxgv = hs_wild126zx7p;
                    if (hs_wild126zx7p.notEvaluated) {
                        hs_wild326zxgv = hs_wild126zx7p.hscall();
                    }
                    switch (hs_wild326zxgv.tag) {
                    case 1:
                        var hs_p226zx7t = hs_wild326zxgv.data[0];
                        return hs_quotRemPositive25r5vb.hscall(hs_p126zx7s, hs_p226zx7t);
                    case 2:
                        var hs_p226zx7v = hs_wild326zxgv.data[0];
                        var hs_wild426zxgw = hs_quotRemPositive25r5vb.hscall(hs_p126zx7s, hs_p226zx7v);
                        var hs_q26zx7z = hs_wild426zxgw[0];
                        var hs_r26zx7B = hs_wild426zxgw[1];
                        var hs_sat26zxgu = new $hs.Thunk();
                        hs_sat26zxgu.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_negateInteger.hscall(hs_q26zx7z);
                        };
                        return [hs_sat26zxgu, hs_r26zx7B];
                    }
                case 2:
                    var hs_p126zx7F = hs_wild226zxgp.data[0];
                    var hs_wild326zxgo = hs_wild126zx7p;
                    if (hs_wild126zx7p.notEvaluated) {
                        hs_wild326zxgo = hs_wild126zx7p.hscall();
                    }
                    switch (hs_wild326zxgo.tag) {
                    case 1:
                        var hs_p226zx7G = hs_wild326zxgo.data[0];
                        var hs_wild426zxgs = hs_quotRemPositive25r5vb.hscall(hs_p126zx7F, hs_p226zx7G);
                        var hs_q26zx7K = hs_wild426zxgs[0];
                        var hs_r26zx7M = hs_wild426zxgs[1];
                        var hs_sat26zxgt = new $hs.Thunk();
                        hs_sat26zxgt.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_negateInteger.hscall(hs_r26zx7M);
                        };
                        var hs_sat26zxgr = new $hs.Thunk();
                        hs_sat26zxgr.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_negateInteger.hscall(hs_q26zx7K);
                        };
                        return [hs_sat26zxgr, hs_sat26zxgt];
                    case 2:
                        var hs_p226zx7P = hs_wild326zxgo.data[0];
                        var hs_wild426zxgq = hs_quotRemPositive25r5vb.hscall(hs_p126zx7F, hs_p226zx7P);
                        var hs_q26zx7T = hs_wild426zxgq[0];
                        var hs_r26zx7U = hs_wild426zxgq[1];
                        var hs_sat26zxgn = new $hs.Thunk();
                        hs_sat26zxgn.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_negateInteger.hscall(hs_r26zx7U);
                        };
                        return [hs_q26zx7T, hs_sat26zxgn];
                    }
                }
            }
        }
    };
    this.hs_divModInteger.evaluate = function (hs_n26zx7Z, hs_d26zx80) {
        var hs_wild26zxgy = $hs.modules.GHCziInteger.hs_quotRemInteger.hscall(hs_n26zx7Z, hs_d26zx80);
        var hs_q26zx8l = hs_wild26zxgy[0];
        var hs_r26zx8t = hs_wild26zxgy[1];
        var hs_ds26zx8i = new $hs.Thunk();
        hs_ds26zx8i.evaluateOnce = function () {
            var hs_wild126zxgT = hs_d26zx80;
            if (hs_d26zx80.notEvaluated) {
                hs_wild126zxgT = hs_d26zx80.hscall();
            }
            switch (hs_wild126zxgT.tag) {
            case 1:
                var hs_wild226zxgX = hs_oneInteger25r5ue;
                if (hs_oneInteger25r5ue.notEvaluated) {
                    hs_wild226zxgX = hs_oneInteger25r5ue.hscall();
                }
                switch (hs_wild226zxgX.tag) {
                case 1:
                    var hs_p26zx89 = hs_wild226zxgX.data[0];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_p26zx89];
                    return $res;
                case 2:
                    var hs_p26zx8b = hs_wild226zxgX.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_p26zx8b];
                    return $res;
                case 3:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                }
            case 2:
                var hs_wild226zxgV = hs_negativeOneInteger25r5uf;
                if (hs_negativeOneInteger25r5uf.notEvaluated) {
                    hs_wild226zxgV = hs_negativeOneInteger25r5uf.hscall();
                }
                switch (hs_wild226zxgV.tag) {
                case 1:
                    var hs_p26zx8f = hs_wild226zxgV.data[0];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_p26zx8f];
                    return $res;
                case 2:
                    var hs_p26zx8h = hs_wild226zxgV.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_p26zx8h];
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
        var hs_zdj26zx8w = new $hs.Func(1);
        hs_zdj26zx8w.evaluate = function (hs_w26zx8v) {
            var hs_sat26zxgQ = new $hs.Thunk();
            hs_sat26zxgQ.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_r26zx8t, hs_d26zx80);
            };
            var hs_sat26zxgP = new $hs.Thunk();
            hs_sat26zxgP.evaluateOnce = function () {
                var hs_sat26zxgR = new $hs.Thunk();
                hs_sat26zxgR.evaluateOnce = function () {
                    var hs_wild126zxgS = hs_oneInteger25r5ue;
                    if (hs_oneInteger25r5ue.notEvaluated) {
                        hs_wild126zxgS = hs_oneInteger25r5ue.hscall();
                    }
                    switch (hs_wild126zxgS.tag) {
                    case 1:
                        var hs_p26zx8o = hs_wild126zxgS.data[0];
                        var $res = new $hs.Data(2);
                        $res.data = [hs_p26zx8o];
                        return $res;
                    case 2:
                        var hs_p26zx8q = hs_wild126zxgS.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_p26zx8q];
                        return $res;
                    case 3:
                        var $res = new $hs.Data(3);
                        $res.data = [];
                        return $res;
                    }
                };
                return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_q26zx8l, hs_sat26zxgR);
            };
            return [hs_sat26zxgP, hs_sat26zxgQ];
        };
        var hs_zdj126zx8E = new $hs.Func(1);
        hs_zdj126zx8E.evaluate = function (hs_x26zx8B) {
            var hs_wild126zxgN = hs_ds26zx8i;
            if (hs_ds26zx8i.notEvaluated) {
                hs_wild126zxgN = hs_ds26zx8i.hscall();
            }
            switch (hs_wild126zxgN.tag) {
            case 1:
                var hs_y26zx8C = hs_wild126zxgN.data[0];
                var hs_wild226zxgO = hs_comparePositive25r5v0.hscall(hs_x26zx8B, hs_y26zx8C);
                switch (hs_wild226zxgO.tag) {
                case 2:
                    return hs_zdj26zx8w.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                default:
                    return [hs_q26zx8l, hs_r26zx8t];
                }
            default:
                return [hs_q26zx8l, hs_r26zx8t];
            }
        };
        var hs_zdj226zx8M = new $hs.Func(1);
        hs_zdj226zx8M.evaluate = function (hs_x26zx8K) {
            var hs_wild126zxgL = hs_ds26zx8i;
            if (hs_ds26zx8i.notEvaluated) {
                hs_wild126zxgL = hs_ds26zx8i.hscall();
            }
            switch (hs_wild126zxgL.tag) {
            case 2:
                var hs_y26zx8J = hs_wild126zxgL.data[0];
                var hs_wild226zxgM = hs_comparePositive25r5v0.hscall(hs_y26zx8J, hs_x26zx8K);
                switch (hs_wild226zxgM.tag) {
                case 2:
                    return hs_zdj26zx8w.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                default:
                    return [hs_q26zx8l, hs_r26zx8t];
                }
            default:
                return [hs_q26zx8l, hs_r26zx8t];
            }
        };
        var hs_wild126zx8W = hs_r26zx8t;
        if (hs_r26zx8t.notEvaluated) {
            hs_wild126zx8W = hs_r26zx8t.hscall();
        }
        switch (hs_wild126zx8W.tag) {
        case 1:
            var hs_wild226zxgH = hs_oneInteger25r5ue;
            if (hs_oneInteger25r5ue.notEvaluated) {
                hs_wild226zxgH = hs_oneInteger25r5ue.hscall();
            }
            switch (hs_wild226zxgH.tag) {
            case 1:
                var hs_x26zx8R = hs_wild226zxgH.data[0];
                return hs_zdj126zx8E.hscall(hs_x26zx8R);
            case 2:
                var hs_x26zx8T = hs_wild226zxgH.data[0];
                return hs_zdj226zx8M.hscall(hs_x26zx8T);
            case 3:
                var hs_wild326zxgJ = hs_ds26zx8i;
                if (hs_ds26zx8i.notEvaluated) {
                    hs_wild326zxgJ = hs_ds26zx8i.hscall();
                }
                switch (hs_wild326zxgJ.tag) {
                case 1:
                    return [hs_q26zx8l, hs_wild126zx8W];
                case 2:
                    return [hs_q26zx8l, hs_wild126zx8W];
                case 3:
                    return hs_zdj26zx8w.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            }
        case 2:
            var hs_wild226zxgz = hs_negativeOneInteger25r5uf;
            if (hs_negativeOneInteger25r5uf.notEvaluated) {
                hs_wild226zxgz = hs_negativeOneInteger25r5uf.hscall();
            }
            switch (hs_wild226zxgz.tag) {
            case 1:
                var hs_x26zx91 = hs_wild226zxgz.data[0];
                return hs_zdj126zx8E.hscall(hs_x26zx91);
            case 2:
                var hs_x26zx93 = hs_wild226zxgz.data[0];
                return hs_zdj226zx8M.hscall(hs_x26zx93);
            case 3:
                var hs_wild326zxgB = hs_ds26zx8i;
                if (hs_ds26zx8i.notEvaluated) {
                    hs_wild326zxgB = hs_ds26zx8i.hscall();
                }
                switch (hs_wild326zxgB.tag) {
                case 1:
                    return [hs_q26zx8l, hs_wild126zx8W];
                case 2:
                    return [hs_q26zx8l, hs_wild126zx8W];
                case 3:
                    return hs_zdj26zx8w.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            }
        case 3:
            var hs_wild226zxgE = hs_ds26zx8i;
            if (hs_ds26zx8i.notEvaluated) {
                hs_wild226zxgE = hs_ds26zx8i.hscall();
            }
            switch (hs_wild226zxgE.tag) {
            case 1:
                return [hs_q26zx8l, $hs.modules.GHCziIntegerziType.hs_Naught];
            case 2:
                return [hs_q26zx8l, $hs.modules.GHCziIntegerziType.hs_Naught];
            case 3:
                return hs_zdj26zx8w.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        }
    };
    this.hs_quotInteger.evaluate = function (hs_x26zx9c, hs_y26zx9d) {
        var hs_wild26zxgZ = $hs.modules.GHCziInteger.hs_quotRemInteger.hscall(hs_x26zx9c, hs_y26zx9d);
        var hs_q26zx9h = hs_wild26zxgZ[0];
        if (hs_q26zx9h.notEvaluated) {
            return hs_q26zx9h.hscall();
        } else {
            return hs_q26zx9h;
        }
    };
    this.hs_remInteger.evaluate = function (hs_x26zx9k, hs_y26zx9l) {
        var hs_wild26zxh1 = $hs.modules.GHCziInteger.hs_quotRemInteger.hscall(hs_x26zx9k, hs_y26zx9l);
        var hs_r26zx9p = hs_wild26zxh1[1];
        if (hs_r26zx9p.notEvaluated) {
            return hs_r26zx9p.hscall();
        } else {
            return hs_r26zx9p;
        }
    };
    this.hs_encodeDoubleInteger.evaluate = function (hs_ds26zx9s, hs_e026zx9R) {
        var hs_wild26zxh2 = hs_ds26zx9s;
        if (hs_ds26zx9s.notEvaluated) {
            hs_wild26zxh2 = hs_ds26zx9s.hscall();
        }
        switch (hs_wild26zxh2.tag) {
        case 1:
            var hs_ds026zx9Q = hs_wild26zxh2.data[0];
            var hs_f26zx9M = new $hs.Func(3);
            hs_f26zx9M.evaluate = function (hs_acc26zx9K, hs_ds126zx9z, hs_ds226zx9F) {
                var hs_wild126zxh4 = hs_ds126zx9z;
                if (hs_ds126zx9z.notEvaluated) {
                    hs_wild126zxh4 = hs_ds126zx9z.hscall();
                }
                switch (hs_wild126zxh4.tag) {
                case 1:
                    var hs_d26zx9E = hs_wild126zxh4.data[0];
                    var hs_ds326zx9O = hs_wild126zxh4.data[1];
                    var hs_wild226zxh5 = [$hs.modules.GHCziPrim.hs_realWorldzh, __word_encodeDouble(hs_d26zx9E, hs_ds226zx9F)];
                    var hs_ds526zx9L = hs_wild226zxh5[1];
                    var hs_sat26zxh7 = ($hs.Int.addCarry(hs_ds226zx9F, 32, 0))[0];
                    throw "primitive operation +##. Not implemeted yet.";
                    return hs_f26zx9M.hscall(hs_sat26zxh8, hs_ds326zx9O, hs_sat26zxh7);
                case 2:
                    if (hs_acc26zx9K.notEvaluated) {
                        return hs_acc26zx9K.hscall();
                    } else {
                        return hs_acc26zx9K;
                    }
                }
            };
            return hs_f26zx9M.hscall(0 % 1, hs_ds026zx9Q, hs_e026zx9R);
        case 2:
            var hs_ds126zx9T = hs_wild26zxh2.data[0];
            var hs_sat26zxh3 = new $hs.Data(1);
            hs_sat26zxh3.data = [hs_ds126zx9T];
            var hs_wild126zx9W = $hs.modules.GHCziInteger.hs_encodeDoubleInteger.hscall(hs_sat26zxh3, hs_e026zx9R);
            throw "primitive operation negateDouble#. Not implemeted yet.";
        case 3:
            return 0 % 1;
        }
    };
    this.hs_encodeFloatInteger.evaluate = function (hs_ds26zx9Z, hs_e026zxao) {
        var hs_wild26zxh9 = hs_ds26zx9Z;
        if (hs_ds26zx9Z.notEvaluated) {
            hs_wild26zxh9 = hs_ds26zx9Z.hscall();
        }
        switch (hs_wild26zxh9.tag) {
        case 1:
            var hs_ds026zxan = hs_wild26zxh9.data[0];
            var hs_f26zxaj = new $hs.Func(3);
            hs_f26zxaj.evaluate = function (hs_acc26zxah, hs_ds126zxa6, hs_ds226zxac) {
                var hs_wild126zxhb = hs_ds126zxa6;
                if (hs_ds126zxa6.notEvaluated) {
                    hs_wild126zxhb = hs_ds126zxa6.hscall();
                }
                switch (hs_wild126zxhb.tag) {
                case 1:
                    var hs_d26zxab = hs_wild126zxhb.data[0];
                    var hs_ds326zxal = hs_wild126zxhb.data[1];
                    var hs_wild226zxhc = [$hs.modules.GHCziPrim.hs_realWorldzh, __word_encodeFloat(hs_d26zxab, hs_ds226zxac)];
                    var hs_ds526zxai = hs_wild226zxhc[1];
                    var hs_sat26zxhe = ($hs.Int.addCarry(hs_ds226zxac, 32, 0))[0];
                    throw "primitive operation plusFloat#. Not implemeted yet.";
                    return hs_f26zxaj.hscall(hs_sat26zxhf, hs_ds326zxal, hs_sat26zxhe);
                case 2:
                    if (hs_acc26zxah.notEvaluated) {
                        return hs_acc26zxah.hscall();
                    } else {
                        return hs_acc26zxah;
                    }
                }
            };
            return hs_f26zxaj.hscall(0 % 1, hs_ds026zxan, hs_e026zxao);
        case 2:
            var hs_ds126zxaq = hs_wild26zxh9.data[0];
            var hs_sat26zxha = new $hs.Data(1);
            hs_sat26zxha.data = [hs_ds126zxaq];
            var hs_wild126zxat = $hs.modules.GHCziInteger.hs_encodeFloatInteger.hscall(hs_sat26zxha, hs_e026zxao);
            throw "primitive operation negateFloat#. Not implemeted yet.";
        case 3:
            return 0 % 1;
        }
    };
    this.hs_DigitsOnes.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.GHCziInteger.hs_DigitsOnes.hscall(hs_eta1cW6l3);
    };
};
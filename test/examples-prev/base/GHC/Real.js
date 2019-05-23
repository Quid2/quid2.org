
$hs.modules.GHCziReal = new $hs.Module();
$hs.modules.GHCziReal.dependencies = ["GHC.Prim", "GHC.Integer", "GHC.Base", "GHC.Enum", "GHC.Num", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.List"];
$hs.modules.GHCziReal.initBeforeDependencies = function () {
    this.hs_zdp1Fractional = new $hs.Func(1);
    this.hs_zs = new $hs.Func(1);
    this.hs_recip = new $hs.Func(1);
    this.hs_fromRational = new $hs.Func(1);
    this.hs_zdp1Integral = new $hs.Func(1);
    this.hs_zdp2Integral = new $hs.Func(1);
    this.hs_quot = new $hs.Func(1);
    this.hs_rem = new $hs.Func(1);
    this.hs_div = new $hs.Func(1);
    this.hs_mod = new $hs.Func(1);
    this.hs_quotRem = new $hs.Func(1);
    this.hs_divMod = new $hs.Func(1);
    this.hs_toInteger = new $hs.Func(1);
    this.hs_zdp1Real = new $hs.Func(1);
    this.hs_zdp2Real = new $hs.Func(1);
    this.hs_toRational = new $hs.Func(1);
    this.hs_zdp1RealFrac = new $hs.Func(1);
    this.hs_zdp2RealFrac = new $hs.Func(1);
    this.hs_properFraction = new $hs.Func(1);
    this.hs_truncate = new $hs.Func(1);
    this.hs_round = new $hs.Func(1);
    this.hs_ceiling = new $hs.Func(1);
    this.hs_floor = new $hs.Func(1);
    this.hs_zdWZCzv = new $hs.Func(2);
    this.hs_zddmfloor = new $hs.Func(3);
    this.hs_zddmceiling = new $hs.Func(3);
    this.hs_zddmtruncate = new $hs.Func(3);
    this.hs_zddmrecip = new $hs.Func(2);
    this.hs_zddmzs = new $hs.Func(3);
    this.hs_zddmdivMod = new $hs.Func(3);
    this.hs_zddmmod = new $hs.Func(3);
    this.hs_zddmdiv = new $hs.Func(3);
    this.hs_zddmrem = new $hs.Func(3);
    this.hs_zddmquot = new $hs.Func(3);
    this.hs_integralEnumFromThenTo = new $hs.Func(4);
    this.hs_integralEnumFromTo = new $hs.Func(3);
    this.hs_integralEnumFromThen = new $hs.Func(4);
    this.hs_integralEnumFrom = new $hs.Func(3);
    this.hs_gcd = new $hs.Func(3);
    this.hs_even = new $hs.Func(2);
    this.hs_odd = new $hs.Func(1);
    this.hs_zddmround = new $hs.Func(3);
    this.hs_showSigned = new $hs.Func(4);
    this.hs_realToFrac = new $hs.Func(2);
    this.hs_fromIntegral = new $hs.Func(2);
    this.hs_numericEnumFromThen = new $hs.Func(3);
    this.hs_numericEnumFromThenTo = new $hs.Func(5);
    this.hs_numericEnumFrom = new $hs.Func(2);
    this.hs_numericEnumFromTo = new $hs.Func(4);
    this.hs_denominator = new $hs.Func(2);
    this.hs_numerator = new $hs.Func(2);
    this.hs_notANumber = new $hs.Thunk();
    this.hs_infinity = new $hs.Thunk();
    this.hs_ratioPrec = new $hs.Data(1);
    this.hs_zdfEqRatio = new $hs.Func(1);
    this.hs_ratioPrec1 = new $hs.Thunk();
    this.hs_reduce = new $hs.Func(3);
    this.hs_zv = new $hs.Func(3);
    this.hs_zdfRealInteger = new $hs.Data(1);
    this.hs_zdfIntegralInteger = new $hs.Data(1);
    this.hs_zdfShowRatio = new $hs.Func(1);
    this.hs_zdfOrdRatio = new $hs.Func(2);
    this.hs_zdfNumRatio = new $hs.Func(3);
    this.hs_zdfRealRatio = new $hs.Func(3);
    this.hs_zdfRealInt = new $hs.Data(1);
    this.hs_zdfIntegralInt = new $hs.Data(1);
    this.hs_zdfFractionalRatio = new $hs.Func(2);
    this.hs_zdfRealFracRatio = new $hs.Func(3);
    this.hs_zdfEnumRatio = new $hs.Func(1);
    this.hs_zc = new $hs.Func(4);
    this.hs_zczvzc = new $hs.Func(3);
    this.hs_zczczvzczc = new $hs.Func(3);
    this.hs_zczc = new $hs.Func(4);
    this.hs_lcm = new $hs.Func(3);
    this.hs_ZCzv = new $hs.Func(2);
    this.hs_DZCIntegral = new $hs.Func(9);
    this.hs_DZCReal = new $hs.Func(3);
    this.hs_DZCFractional = new $hs.Func(4);
    this.hs_DZCRealFrac = new $hs.Func(7);
    this.hs_zdp1Fractional.notEvaluated = true;
    this.hs_zdp1Fractional.evaluate = function (hs_tpl26DaxI) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26DaxI);
    };
    this.hs_zs.notEvaluated = true;
    this.hs_zs.evaluate = function (hs_tpl26DaxQ) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26DaxQ);
    };
    this.hs_recip.notEvaluated = true;
    this.hs_recip.evaluate = function (hs_tpl26DaxY) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26DaxY);
    };
    this.hs_fromRational.notEvaluated = true;
    this.hs_fromRational.evaluate = function (hs_tpl26Day6) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26Day6);
    };
    this.hs_zdp1Integral.notEvaluated = true;
    this.hs_zdp1Integral.evaluate = function (hs_tpl26Daye) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26Daye);
    };
    this.hs_zdp2Integral.notEvaluated = true;
    this.hs_zdp2Integral.evaluate = function (hs_tpl26Dayr) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26Dayr);
    };
    this.hs_quot.notEvaluated = true;
    this.hs_quot.evaluate = function (hs_tpl26DayE) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26DayE);
    };
    this.hs_rem.notEvaluated = true;
    this.hs_rem.evaluate = function (hs_tpl26DayR) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26DayR);
    };
    this.hs_div.notEvaluated = true;
    this.hs_div.evaluate = function (hs_tpl26Daz4) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26Daz4);
    };
    this.hs_mod.notEvaluated = true;
    this.hs_mod.evaluate = function (hs_tpl26Dazh) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26Dazh);
    };
    this.hs_quotRem.notEvaluated = true;
    this.hs_quotRem.evaluate = function (hs_tpl26Dazu) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26Dazu);
    };
    this.hs_divMod.notEvaluated = true;
    this.hs_divMod.evaluate = function (hs_tpl26DazH) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26DazH);
    };
    this.hs_toInteger.notEvaluated = true;
    this.hs_toInteger.evaluate = function (hs_tpl26DazU) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26DazU);
    };
    this.hs_zdp1Real.notEvaluated = true;
    this.hs_zdp1Real.evaluate = function (hs_tpl26DaA7) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26DaA7);
    };
    this.hs_zdp2Real.notEvaluated = true;
    this.hs_zdp2Real.evaluate = function (hs_tpl26DaAe) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26DaAe);
    };
    this.hs_toRational.notEvaluated = true;
    this.hs_toRational.evaluate = function (hs_tpl26DaAl) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26DaAl);
    };
    this.hs_zdp1RealFrac.notEvaluated = true;
    this.hs_zdp1RealFrac.evaluate = function (hs_tpl26DaAs) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26DaAs);
    };
    this.hs_zdp2RealFrac.notEvaluated = true;
    this.hs_zdp2RealFrac.evaluate = function (hs_tpl26DaAD) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26DaAD);
    };
    this.hs_properFraction.notEvaluated = true;
    this.hs_properFraction.evaluate = function (hs_tpl26DaAO) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26DaAO);
    };
    this.hs_truncate.notEvaluated = true;
    this.hs_truncate.evaluate = function (hs_tpl26DaAZ) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26DaAZ);
    };
    this.hs_round.notEvaluated = true;
    this.hs_round.evaluate = function (hs_tpl26DaBa) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26DaBa);
    };
    this.hs_ceiling.notEvaluated = true;
    this.hs_ceiling.evaluate = function (hs_tpl26DaBl) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26DaBl);
    };
    this.hs_floor.notEvaluated = true;
    this.hs_floor.evaluate = function (hs_tpl26DaBw) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26DaBw);
    };
    this.hs_zdWZCzv.notEvaluated = true;
    this.hs_zdWZCzv.evaluate = function (hs_tpl26DaBI, hs_tpl26DaBK) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26DaBI, hs_tpl26DaBK);
    };
    this.hs_zddmfloor.notEvaluated = true;
    this.hs_zddmfloor.evaluate = function (hs_zddRealFrac326DaBS, hs_eta26DaBV, hs_eta126DaC0) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddRealFrac326DaBS, hs_eta26DaBV, hs_eta126DaC0);
    };
    this.hs_zddmceiling.notEvaluated = true;
    this.hs_zddmceiling.evaluate = function (hs_zddRealFrac326DaCr, hs_eta26DaCu, hs_eta126DaCz) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddRealFrac326DaCr, hs_eta26DaCu, hs_eta126DaCz);
    };
    this.hs_zddmtruncate.notEvaluated = true;
    this.hs_zddmtruncate.evaluate = function (hs_zddRealFrac326DaCZ, hs_zddIntegral26DaD0, hs_x26DaD1) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddRealFrac326DaCZ, hs_zddIntegral26DaD0, hs_x26DaD1);
    };
    this.hs_zddmrecip.notEvaluated = true;
    this.hs_zddmrecip.evaluate = function (hs_zddFractional626DaD8, hs_eta26DaDc) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddFractional626DaD8, hs_eta26DaDc);
    };
    this.hs_zddmzs.notEvaluated = true;
    this.hs_zddmzs.evaluate = function (hs_zddFractional626DaDg, hs_eta26DaDi, hs_eta126DaDj) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddFractional626DaDg, hs_eta26DaDi, hs_eta126DaDj);
    };
    this.hs_zddmdivMod.notEvaluated = true;
    this.hs_zddmdivMod.evaluate = function (hs_zddIntegral26DaDp, hs_eta26DaDu, hs_eta126DaDv) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26DaDp, hs_eta26DaDu, hs_eta126DaDv);
    };
    this.hs_zddmmod.notEvaluated = true;
    this.hs_zddmmod.evaluate = function (hs_zddIntegral26DaE7, hs_n26DaE8, hs_d26DaE9) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26DaE7, hs_n26DaE8, hs_d26DaE9);
    };
    this.hs_zddmdiv.notEvaluated = true;
    this.hs_zddmdiv.evaluate = function (hs_zddIntegral26DaEh, hs_n26DaEi, hs_d26DaEj) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26DaEh, hs_n26DaEi, hs_d26DaEj);
    };
    this.hs_zddmrem.notEvaluated = true;
    this.hs_zddmrem.evaluate = function (hs_zddIntegral26DaEr, hs_n26DaEs, hs_d26DaEt) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26DaEr, hs_n26DaEs, hs_d26DaEt);
    };
    this.hs_zddmquot.notEvaluated = true;
    this.hs_zddmquot.evaluate = function (hs_zddIntegral26DaEB, hs_n26DaEC, hs_d26DaED) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26DaEB, hs_n26DaEC, hs_d26DaED);
    };
    this.hs_integralEnumFromThenTo.notEvaluated = true;
    this.hs_integralEnumFromThenTo.evaluate = function (hs_zddIntegral26DaEM, hs_eta26DaEQ, hs_eta126DaES, hs_eta226DaEU) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26DaEM, hs_eta26DaEQ, hs_eta126DaES, hs_eta226DaEU);
    };
    this.hs_integralEnumFromTo.notEvaluated = true;
    this.hs_integralEnumFromTo.evaluate = function (hs_zddIntegral26DaF0, hs_eta26DaF4, hs_eta126DaF6) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26DaF0, hs_eta26DaF4, hs_eta126DaF6);
    };
    this.hs_integralEnumFromThen.notEvaluated = true;
    this.hs_integralEnumFromThen.evaluate = function (hs_zddIntegral26DaFe, hs_zddBounded26DaFo, hs_eta26DaFi, hs_eta126DaFf) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26DaFe, hs_zddBounded26DaFo, hs_eta26DaFi, hs_eta126DaFf);
    };
    this.hs_integralEnumFrom.notEvaluated = true;
    this.hs_integralEnumFrom.evaluate = function (hs_zddIntegral26DaFD, hs_zddBounded26DaFJ, hs_eta26DaFH) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26DaFD, hs_zddBounded26DaFJ, hs_eta26DaFH);
    };
    this.hs_gcd.notEvaluated = true;
    this.hs_gcd.evaluate = function (hs_zddIntegral26DaFS, hs_eta26DaGg, hs_eta126DaGi) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26DaFS, hs_eta26DaGg, hs_eta126DaGi);
    };
    this.hs_even.notEvaluated = true;
    this.hs_even.evaluate = function (hs_zddIntegral26DaGw, hs_eta26DaGB) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26DaGw, hs_eta26DaGB);
    };
    this.hs_odd.notEvaluated = true;
    this.hs_odd.evaluate = function (hs_zddIntegral26DaGI) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26DaGI);
    };
    this.hs_zddmround.notEvaluated = true;
    this.hs_zddmround.evaluate = function (hs_zddRealFrac326DaGO, hs_eta26DaGV, hs_eta126DaH0) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddRealFrac326DaGO, hs_eta26DaGV, hs_eta126DaH0);
    };
    this.hs_showSigned.notEvaluated = true;
    this.hs_showSigned.evaluate = function (hs_zddReal2226DaHO, hs_eta26DaHV, hs_eta126DaHW, hs_eta226DaHR) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddReal2226DaHO, hs_eta26DaHV, hs_eta126DaHW, hs_eta226DaHR);
    };
    this.hs_realToFrac.notEvaluated = true;
    this.hs_realToFrac.evaluate = function (hs_zddReal2226DaI8, hs_zddFractional626DaI6) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddReal2226DaI8, hs_zddFractional626DaI6);
    };
    this.hs_fromIntegral.notEvaluated = true;
    this.hs_fromIntegral.evaluate = function (hs_zddIntegral26DaIe, hs_zddNum3126DaIc) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26DaIe, hs_zddNum3126DaIc);
    };
    this.hs_numericEnumFromThen.notEvaluated = true;
    this.hs_numericEnumFromThen.evaluate = function (hs_zddFractional626DaIk, hs_eta26DaIm, hs_eta126DaIo) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddFractional626DaIk, hs_eta26DaIm, hs_eta126DaIo);
    };
    this.hs_numericEnumFromThenTo.notEvaluated = true;
    this.hs_numericEnumFromThenTo.evaluate = function (hs_zddOrd1726DaIK, hs_zddFractional626DaIB, hs_eta26DaIF, hs_eta126DaIE, hs_eta226DaIN) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddOrd1726DaIK, hs_zddFractional626DaIB, hs_eta26DaIF, hs_eta126DaIE, hs_eta226DaIN);
    };
    this.hs_numericEnumFrom.notEvaluated = true;
    this.hs_numericEnumFrom.evaluate = function (hs_zddFractional626DaJ2, hs_eta26DaJ4) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddFractional626DaJ2, hs_eta26DaJ4);
    };
    this.hs_numericEnumFromTo.notEvaluated = true;
    this.hs_numericEnumFromTo.evaluate = function (hs_zddOrd1726DaJr, hs_zddFractional626DaJg, hs_eta26DaJu, hs_eta126DaJj) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddOrd1726DaJr, hs_zddFractional626DaJg, hs_eta26DaJu, hs_eta126DaJj);
    };
    this.hs_denominator.notEvaluated = true;
    this.hs_denominator.evaluate = function (hs_zddIntegral26DaJD, hs_ds26DaJy) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26DaJD, hs_ds26DaJy);
    };
    this.hs_numerator.notEvaluated = true;
    this.hs_numerator.evaluate = function (hs_zddIntegral26DaJL, hs_ds26DaJG) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26DaJL, hs_ds26DaJG);
    };
    this.hs_notANumber.evaluateOnce = function () {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_infinity.evaluateOnce = function () {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_ratioPrec.notEvaluated = true;
    this.hs_ratioPrec.evaluate = function () {
        $hs.modules.GHCziReal.loadDependencies();
        return this;
    };
    this.hs_zdfEqRatio.notEvaluated = true;
    this.hs_zdfEqRatio.evaluate = function (hs_zddIntegral26DaMA) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26DaMA);
    };
    this.hs_ratioPrec1.evaluateOnce = function () {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_reduce.notEvaluated = true;
    this.hs_reduce.evaluate = function (hs_zddIntegral26DaNc, hs_eta26DaNm, hs_eta126DaNh) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26DaNc, hs_eta26DaNm, hs_eta126DaNh);
    };
    this.hs_zv.notEvaluated = true;
    this.hs_zv.evaluate = function (hs_zddIntegral26DaNx, hs_eta26DaNB, hs_eta126DaNC) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26DaNx, hs_eta26DaNB, hs_eta126DaNC);
    };
    this.hs_zdfRealInteger.notEvaluated = true;
    this.hs_zdfRealInteger.evaluate = function () {
        $hs.modules.GHCziReal.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralInteger.notEvaluated = true;
    this.hs_zdfIntegralInteger.evaluate = function () {
        $hs.modules.GHCziReal.loadDependencies();
        return this;
    };
    this.hs_zdfShowRatio.notEvaluated = true;
    this.hs_zdfShowRatio.evaluate = function (hs_zddIntegral26DaPv) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26DaPv);
    };
    this.hs_zdfOrdRatio.notEvaluated = true;
    this.hs_zdfOrdRatio.evaluate = function (hs_zddEq1526DaS7, hs_zddIntegral26DaS8) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddEq1526DaS7, hs_zddIntegral26DaS8);
    };
    this.hs_zdfNumRatio.notEvaluated = true;
    this.hs_zdfNumRatio.evaluate = function (hs_zddEq1526DaYA, hs_zddShow1126DaYB, hs_zddIntegral26DaYC) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddEq1526DaYA, hs_zddShow1126DaYB, hs_zddIntegral26DaYC);
    };
    this.hs_zdfRealRatio.notEvaluated = true;
    this.hs_zdfRealRatio.evaluate = function (hs_zddNum3126Db1u, hs_zddOrd1726Db1v, hs_zddIntegral26Db1w) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddNum3126Db1u, hs_zddOrd1726Db1v, hs_zddIntegral26Db1w);
    };
    this.hs_zdfRealInt.notEvaluated = true;
    this.hs_zdfRealInt.evaluate = function () {
        $hs.modules.GHCziReal.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralInt.notEvaluated = true;
    this.hs_zdfIntegralInt.evaluate = function () {
        $hs.modules.GHCziReal.loadDependencies();
        return this;
    };
    this.hs_zdfFractionalRatio.notEvaluated = true;
    this.hs_zdfFractionalRatio.evaluate = function (hs_zddNum3126Db3G, hs_zddIntegral26Db3H) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddNum3126Db3G, hs_zddIntegral26Db3H);
    };
    this.hs_zdfRealFracRatio.notEvaluated = true;
    this.hs_zdfRealFracRatio.evaluate = function (hs_zddReal2226Db6d, hs_zddFractional626Db6e, hs_zddIntegral26Db6f) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddReal2226Db6d, hs_zddFractional626Db6e, hs_zddIntegral26Db6f);
    };
    this.hs_zdfEnumRatio.notEvaluated = true;
    this.hs_zdfEnumRatio.evaluate = function (hs_zddIntegral26Dbdx) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26Dbdx);
    };
    this.hs_zc.notEvaluated = true;
    this.hs_zc.evaluate = function (hs_zddNum3126Dbig, hs_zddIntegral26DbhA, hs_eta26DbiJ, hs_eta126DbhF) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddNum3126Dbig, hs_zddIntegral26DbhA, hs_eta26DbiJ, hs_eta126DbhF);
    };
    this.hs_zczvzc.notEvaluated = true;
    this.hs_zczvzc.evaluate = function (hs_zddIntegral26DbiQ, hs_eta26DbiU, hs_eta126DbiZ) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26DbiQ, hs_eta26DbiU, hs_eta126DbiZ);
    };
    this.hs_zczczvzczc.notEvaluated = true;
    this.hs_zczczvzczc.evaluate = function (hs_zddIntegral26Dbjm, hs_eta26Dbjq, hs_eta126Dbjv) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26Dbjm, hs_eta26Dbjq, hs_eta126Dbjv);
    };
    this.hs_zczc.notEvaluated = true;
    this.hs_zczc.evaluate = function (hs_zddFractional626Dbks, hs_zddIntegral26Dbkj, hs_eta26Dbku, hs_eta126Dbko) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddFractional626Dbks, hs_zddIntegral26Dbkj, hs_eta26Dbku, hs_eta126Dbko);
    };
    this.hs_lcm.notEvaluated = true;
    this.hs_lcm.evaluate = function (hs_zddIntegral26DbkZ, hs_eta26Dbl9, hs_eta126Dbl5) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26DbkZ, hs_eta26Dbl9, hs_eta126Dbl5);
    };
    this.hs_ZCzv.notEvaluated = true;
    this.hs_ZCzv.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_DZCIntegral.notEvaluated = true;
    this.hs_DZCIntegral.evaluate = function (hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_DZCReal.notEvaluated = true;
    this.hs_DZCReal.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_DZCFractional.notEvaluated = true;
    this.hs_DZCFractional.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_DZCRealFrac.notEvaluated = true;
    this.hs_DZCRealFrac.evaluate = function (hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziReal.initAfterDependencies = function () {
    this.hs_zdp1Fractional.notEvaluated = false;
    this.hs_zs.notEvaluated = false;
    this.hs_recip.notEvaluated = false;
    this.hs_fromRational.notEvaluated = false;
    this.hs_zdp1Integral.notEvaluated = false;
    this.hs_zdp2Integral.notEvaluated = false;
    this.hs_quot.notEvaluated = false;
    this.hs_rem.notEvaluated = false;
    this.hs_div.notEvaluated = false;
    this.hs_mod.notEvaluated = false;
    this.hs_quotRem.notEvaluated = false;
    this.hs_divMod.notEvaluated = false;
    this.hs_toInteger.notEvaluated = false;
    this.hs_zdp1Real.notEvaluated = false;
    this.hs_zdp2Real.notEvaluated = false;
    this.hs_toRational.notEvaluated = false;
    this.hs_zdp1RealFrac.notEvaluated = false;
    this.hs_zdp2RealFrac.notEvaluated = false;
    this.hs_properFraction.notEvaluated = false;
    this.hs_truncate.notEvaluated = false;
    this.hs_round.notEvaluated = false;
    this.hs_ceiling.notEvaluated = false;
    this.hs_floor.notEvaluated = false;
    this.hs_zdWZCzv.notEvaluated = false;
    this.hs_zddmfloor.notEvaluated = false;
    this.hs_zddmceiling.notEvaluated = false;
    this.hs_zddmtruncate.notEvaluated = false;
    this.hs_zddmrecip.notEvaluated = false;
    this.hs_zddmzs.notEvaluated = false;
    this.hs_zddmdivMod.notEvaluated = false;
    this.hs_zddmmod.notEvaluated = false;
    this.hs_zddmdiv.notEvaluated = false;
    this.hs_zddmrem.notEvaluated = false;
    this.hs_zddmquot.notEvaluated = false;
    this.hs_integralEnumFromThenTo.notEvaluated = false;
    this.hs_integralEnumFromTo.notEvaluated = false;
    this.hs_integralEnumFromThen.notEvaluated = false;
    this.hs_integralEnumFrom.notEvaluated = false;
    this.hs_gcd.notEvaluated = false;
    this.hs_even.notEvaluated = false;
    this.hs_odd.notEvaluated = false;
    this.hs_zddmround.notEvaluated = false;
    this.hs_showSigned.notEvaluated = false;
    this.hs_realToFrac.notEvaluated = false;
    this.hs_fromIntegral.notEvaluated = false;
    this.hs_numericEnumFromThen.notEvaluated = false;
    this.hs_numericEnumFromThenTo.notEvaluated = false;
    this.hs_numericEnumFrom.notEvaluated = false;
    this.hs_numericEnumFromTo.notEvaluated = false;
    this.hs_denominator.notEvaluated = false;
    this.hs_numerator.notEvaluated = false;
    this.hs_ratioPrec.notEvaluated = false;
    this.hs_ratioPrec.evaluate = function () {
        return this;
    };
    this.hs_zdfEqRatio.notEvaluated = false;
    this.hs_reduce.notEvaluated = false;
    this.hs_zv.notEvaluated = false;
    this.hs_zdfRealInteger.notEvaluated = false;
    this.hs_zdfRealInteger.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralInteger.notEvaluated = false;
    this.hs_zdfIntegralInteger.evaluate = function () {
        return this;
    };
    this.hs_zdfShowRatio.notEvaluated = false;
    this.hs_zdfOrdRatio.notEvaluated = false;
    this.hs_zdfNumRatio.notEvaluated = false;
    this.hs_zdfRealRatio.notEvaluated = false;
    this.hs_zdfRealInt.notEvaluated = false;
    this.hs_zdfRealInt.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralInt.notEvaluated = false;
    this.hs_zdfIntegralInt.evaluate = function () {
        return this;
    };
    this.hs_zdfFractionalRatio.notEvaluated = false;
    this.hs_zdfRealFracRatio.notEvaluated = false;
    this.hs_zdfEnumRatio.notEvaluated = false;
    this.hs_zc.notEvaluated = false;
    this.hs_zczvzc.notEvaluated = false;
    this.hs_zczczvzczc.notEvaluated = false;
    this.hs_zczc.notEvaluated = false;
    this.hs_lcm.notEvaluated = false;
    this.hs_ZCzv.notEvaluated = false;
    this.hs_DZCIntegral.notEvaluated = false;
    this.hs_DZCReal.notEvaluated = false;
    this.hs_DZCFractional.notEvaluated = false;
    this.hs_DZCRealFrac.notEvaluated = false;
    var hs_zdctoInteger25uMdF = new $hs.Func(1);
    var hs_zdcdivMod25uMdM = new $hs.Func(2);
    var hs_zdcquotRem25uMe0 = new $hs.Func(2);
    var hs_zdcmod25uMee = new $hs.Func(2);
    var hs_zdcdiv25uMes = new $hs.Func(2);
    var hs_zdcrem25uMeG = new $hs.Func(2);
    var hs_zdcquot25uMeU = new $hs.Func(2);
    var hs_zdctoInteger125uMf8 = new $hs.Func(1);
    var hs_zdcdivMod125uMfc = new $hs.Func(2);
    var hs_zdcquotRem125uMfp = new $hs.Func(2);
    var hs_zdcrem125uMfC = new $hs.Func(2);
    var hs_zdcquot125uMfK = new $hs.Func(2);
    var hs_zdczeze25uMfS = new $hs.Func(3);
    var hs_zdczsze25uMgi = new $hs.Func(1);
    var hs_sat26DbrY = new $hs.Data(1);
    var hs_zdcmod125uMgz = new $hs.Func(2);
    var hs_zdcdiv125uMgB = new $hs.Func(2);
    var hs_zdctoRational25uMgD = new $hs.Func(1);
    var hs_zddReal25uMgF = new $hs.Thunk();
    var hs_zddNum25uMgH = new $hs.Thunk();
    var hs_zddReal125uMgJ = new $hs.Thunk();
    var hs_zddNum125uMgL = new $hs.Thunk();
    var hs_zv125uMgN = new $hs.Func(2);
    var hs_zddEq25uMgP = new $hs.Thunk();
    var hs_reduce125uMgR = new $hs.Func(2);
    var hs_zddReal225uMi5 = new $hs.Thunk();
    var hs_zddNum225uMi7 = new $hs.Thunk();
    var hs_zddShow25uMi9 = new $hs.Thunk();
    var hs_zdcshowsPrec25uMib = new $hs.Func(2);
    var hs_zdcshowsPrec125uMiu = new $hs.Func(3);
    var hs_a25uMiV = new $hs.Func(2);
    var hs_zdcshowList25uMiX = new $hs.Func(1);
    var hs_zdcshow25uMiZ = new $hs.Func(1);
    var hs_zddShow125uMj1 = new $hs.Thunk();
    var hs_zdcshowList125uMj3 = new $hs.Thunk();
    var hs_a125uMj5 = new $hs.Thunk();
    var hs_a225uMj7 = new $hs.Thunk();
    var hs_zdfShowRatio125uMj9 = new $hs.Data(1);
    var hs_zddShow225uMjb = new $hs.Thunk();
    var hs_zdcshow125uMjd = new $hs.Thunk();
    var hs_zddEq125uMjq = new $hs.Thunk();
    var hs_zddReal325uMjs = new $hs.Thunk();
    var hs_zddNum325uMju = new $hs.Thunk();
    var hs_zddOrd25uMjw = new $hs.Thunk();
    var hs_zdczl25uMjy = new $hs.Func(2);
    var hs_zdczl125uMjQ = new $hs.Func(4);
    var hs_zddReal425uMkh = new $hs.Thunk();
    var hs_zddNum425uMkj = new $hs.Thunk();
    var hs_zddOrd125uMkl = new $hs.Thunk();
    var hs_zdczlze25uMkn = new $hs.Func(2);
    var hs_zdczlze125uMkF = new $hs.Func(4);
    var hs_a325uMl6 = new $hs.Func(2);
    var hs_a425uMl8 = new $hs.Func(2);
    var hs_zdcmin25uMla = new $hs.Func(2);
    var hs_zdcmax25uMlc = new $hs.Func(2);
    var hs_zdczg25uMle = new $hs.Func(2);
    var hs_zdczgze25uMlg = new $hs.Func(2);
    var hs_zdccompare25uMli = new $hs.Func(2);
    var hs_zddOrd225uMlk = new $hs.Thunk();
    var hs_zdczgze125uMlm = new $hs.Thunk();
    var hs_a525uMlo = new $hs.Thunk();
    var hs_zddOrd325uMlq = new $hs.Thunk();
    var hs_zdczg125uMls = new $hs.Thunk();
    var hs_a625uMlu = new $hs.Thunk();
    var hs_zddOrd425uMlw = new $hs.Thunk();
    var hs_zdcmax125uMly = new $hs.Thunk();
    var hs_a725uMlA = new $hs.Thunk();
    var hs_zddOrd525uMlC = new $hs.Thunk();
    var hs_zdcmin125uMlE = new $hs.Thunk();
    var hs_a825uMlG = new $hs.Thunk();
    var hs_a925uMlI = new $hs.Thunk();
    var hs_zdfOrdRatio125uMlK = new $hs.Data(1);
    var hs_zddOrd625uMlM = new $hs.Thunk();
    var hs_zdccompare125uMlO = new $hs.Thunk();
    var hs_zddShow325uMmq = new $hs.Thunk();
    var hs_zddReal525uMms = new $hs.Thunk();
    var hs_zddNum525uMmu = new $hs.Thunk();
    var hs_zdczp25uMmw = new $hs.Func(2);
    var hs_zdczp125uMmQ = new $hs.Func(5);
    var hs_zddReal625uMnk = new $hs.Thunk();
    var hs_zddNum625uMnm = new $hs.Thunk();
    var hs_zdczt25uMno = new $hs.Func(2);
    var hs_zdczt125uMnG = new $hs.Func(5);
    var hs_zddReal725uMo8 = new $hs.Thunk();
    var hs_zddNum725uMoa = new $hs.Thunk();
    var hs_zdczm25uMoc = new $hs.Func(2);
    var hs_zdczm125uMow = new $hs.Func(5);
    var hs_a1025uMp0 = new $hs.Thunk();
    var hs_zddNum825uMp2 = new $hs.Thunk();
    var hs_zdcnegate25uMp4 = new $hs.Func(1);
    var hs_zdcnegate125uMpf = new $hs.Func(4);
    var hs_a1125uMpy = new $hs.Thunk();
    var hs_zddNum925uMpA = new $hs.Thunk();
    var hs_zdcabs25uMpC = new $hs.Func(1);
    var hs_zdcabs125uMpN = new $hs.Func(4);
    var hs_zddReal825uMq6 = new $hs.Thunk();
    var hs_zddNum1025uMq8 = new $hs.Thunk();
    var hs_zdcsignum25uMqa = new $hs.Func(1);
    var hs_zdcsignum125uMqn = new $hs.Func(4);
    var hs_zddReal925uMqK = new $hs.Thunk();
    var hs_zddNum1125uMqM = new $hs.Thunk();
    var hs_zdcfromInteger25uMqO = new $hs.Func(1);
    var hs_zdcfromInteger125uMqX = new $hs.Func(4);
    var hs_a1225uMrg = new $hs.Func(2);
    var hs_a1325uMri = new $hs.Func(2);
    var hs_a1425uMrk = new $hs.Func(2);
    var hs_a1525uMrm = new $hs.Func(1);
    var hs_a1625uMrz = new $hs.Func(1);
    var hs_a1725uMrM = new $hs.Func(1);
    var hs_a1825uMs3 = new $hs.Func(1);
    var hs_zdfNumRatio125uMsg = new $hs.Data(1);
    var hs_zddShow425uMsv = new $hs.Thunk();
    var hs_zddEq225uMsx = new $hs.Thunk();
    var hs_zddNum1225uMsz = new $hs.Thunk();
    var hs_zdcsucc25uMsB = new $hs.Func(1);
    var hs_zdcsucc125uMsH = new $hs.Func(1);
    var hs_zddShow525uMsY = new $hs.Thunk();
    var hs_zddEq325uMt0 = new $hs.Thunk();
    var hs_zddNum1325uMt2 = new $hs.Thunk();
    var hs_zdcpred25uMt4 = new $hs.Func(1);
    var hs_zdcpred125uMta = new $hs.Func(1);
    var hs_zddNum1425uMtr = new $hs.Thunk();
    var hs_zddReal1025uMtt = new $hs.Thunk();
    var hs_zddNum1525uMtv = new $hs.Thunk();
    var hs_zddOrd725uMtx = new $hs.Thunk();
    var hs_zddEq425uMtz = new $hs.Thunk();
    var hs_zdcrecip25uMtB = new $hs.Func(1);
    var hs_zdcrecip125uMtV = new $hs.Func(3);
    var hs_zddOrd825uMup = new $hs.Thunk();
    var hs_zdctoRational125uMur = new $hs.Func(1);
    var hs_zdctoRational225uMuE = new $hs.Func(4);
    var hs_a1925uMuX = new $hs.Func(1);
    var hs_zdfRealRatio125uMva = new $hs.Data(1);
    var hs_zddReal1125uMvj = new $hs.Thunk();
    var hs_zdctoRational325uMvl = new $hs.Func(1);
    var hs_zddReal1225uMvr = new $hs.Thunk();
    var hs_zddNum1625uMvt = new $hs.Thunk();
    var hs_zdctoEnum25uMvv = new $hs.Func(1);
    var hs_zdctoEnum125uMvG = new $hs.Func(2);
    var hs_zddReal1325uMvX = new $hs.Thunk();
    var hs_zddNum1725uMvZ = new $hs.Thunk();
    var hs_zdczs25uMw1 = new $hs.Func(2);
    var hs_zdczs125uMwj = new $hs.Func(4);
    var hs_zddReal1425uMwJ = new $hs.Thunk();
    var hs_zddNum1825uMwL = new $hs.Thunk();
    var hs_zdcfromRational25uMwN = new $hs.Func(1);
    var hs_zdcfromRational125uMwY = new $hs.Func(3);
    var hs_a2025uMxh = new $hs.Func(2);
    var hs_a2125uMxj = new $hs.Func(1);
    var hs_a2225uMxl = new $hs.Func(1);
    var hs_zdfFractionalRatio125uMxn = new $hs.Data(1);
    var hs_zddFractional25uMxw = new $hs.Thunk();
    var hs_zdcproperFraction25uMxy = new $hs.Func(2);
    var hs_zdcproperFraction125uMy1 = new $hs.Func(5);
    var hs_a2325uMyA = new $hs.Func(2);
    var hs_zdctruncate25uMz3 = new $hs.Func(4);
    var hs_zdcfloor25uMz5 = new $hs.Func(3);
    var hs_zdcceiling25uMz7 = new $hs.Func(3);
    var hs_zdcround25uMz9 = new $hs.Func(3);
    var hs_zddRealFrac25uMzb = new $hs.Thunk();
    var hs_zddReal1525uMzd = new $hs.Thunk();
    var hs_zddNum1925uMzf = new $hs.Thunk();
    var hs_zddEq525uMzh = new $hs.Thunk();
    var hs_zddOrd925uMzj = new $hs.Thunk();
    var hs_zddFractional125uMzl = new $hs.Thunk();
    var hs_zdcround125uMzn = new $hs.Func(2);
    var hs_a2425uMzp = new $hs.Thunk();
    var hs_zddRealFrac125uMzr = new $hs.Thunk();
    var hs_zddReal1625uMzt = new $hs.Thunk();
    var hs_zddNum2025uMzv = new $hs.Thunk();
    var hs_zddOrd1025uMzx = new $hs.Thunk();
    var hs_zdcceiling125uMzz = new $hs.Func(2);
    var hs_a2525uMzB = new $hs.Thunk();
    var hs_zddRealFrac225uMzD = new $hs.Thunk();
    var hs_zddReal1725uMzF = new $hs.Thunk();
    var hs_zddNum2125uMzH = new $hs.Thunk();
    var hs_zddOrd1125uMzJ = new $hs.Thunk();
    var hs_zdcfloor125uMzL = new $hs.Func(2);
    var hs_a2625uMzN = new $hs.Thunk();
    var hs_zdctruncate125uMzP = new $hs.Func(1);
    var hs_a2725uMzR = new $hs.Func(1);
    var hs_zdfRealFracRatio125uMzT = new $hs.Data(1);
    var hs_zddShow625uMEX = new $hs.Thunk();
    var hs_zddEq625uMEZ = new $hs.Thunk();
    var hs_zddNum2225uMF1 = new $hs.Thunk();
    var hs_sat26DbxF = new $hs.Thunk();
    var hs_sat26DbxG = new $hs.Thunk();
    var hs_zdcfromEnum25uMF3 = new $hs.Thunk();
    var hs_zdcfromEnum125uMFb = new $hs.Func(1);
    var hs_zddShow725uMFr = new $hs.Thunk();
    var hs_zddEq725uMFt = new $hs.Thunk();
    var hs_zddNum2325uMFv = new $hs.Thunk();
    var hs_zddFractional225uMFx = new $hs.Thunk();
    var hs_zdcenumFrom25uMFz = new $hs.Func(1);
    var hs_zdcenumFrom125uMFB = new $hs.Func(1);
    var hs_zddShow825uMFJ = new $hs.Thunk();
    var hs_zddEq825uMFL = new $hs.Thunk();
    var hs_zddNum2425uMFN = new $hs.Thunk();
    var hs_zddFractional325uMFP = new $hs.Thunk();
    var hs_zdcenumFromThen25uMFR = new $hs.Func(2);
    var hs_zdcenumFromThen125uMFT = new $hs.Func(1);
    var hs_zddShow925uMG1 = new $hs.Thunk();
    var hs_zddEq925uMG3 = new $hs.Thunk();
    var hs_zddNum2525uMG5 = new $hs.Thunk();
    var hs_zddFractional425uMG7 = new $hs.Thunk();
    var hs_zddOrd1225uMG9 = new $hs.Thunk();
    var hs_zdcenumFromTo25uMGb = new $hs.Func(2);
    var hs_zdcenumFromTo125uMGd = new $hs.Func(1);
    var hs_zddShow1025uMGn = new $hs.Thunk();
    var hs_zddEq1025uMGp = new $hs.Thunk();
    var hs_zddNum2625uMGr = new $hs.Thunk();
    var hs_zddFractional525uMGt = new $hs.Thunk();
    var hs_zddOrd1325uMGv = new $hs.Thunk();
    var hs_zdcenumFromThenTo25uMGx = new $hs.Func(3);
    var hs_zdcenumFromThenTo125uMGz = new $hs.Func(1);
    var hs_a2825uMGJ = new $hs.Thunk();
    var hs_a2925uMGL = new $hs.Thunk();
    var hs_a3025uMGN = new $hs.Func(1);
    var hs_a3125uMGP = new $hs.Thunk();
    var hs_a3225uMGR = new $hs.Thunk();
    var hs_a3325uMGT = new $hs.Thunk();
    var hs_a3425uMGV = new $hs.Thunk();
    var hs_a3525uMGX = new $hs.Thunk();
    var hs_a3625uMGZ = new $hs.Func(1);
    var hs_a3725uMH1 = new $hs.Thunk();
    var hs_a3825uMH3 = new $hs.Thunk();
    var hs_a3925uMH5 = new $hs.Thunk();
    var hs_a4025uMH7 = new $hs.Thunk();
    var hs_a4125uMH9 = new $hs.Func(2);
    var hs_a4225uMHb = new $hs.Thunk();
    var hs_a4325uMHd = new $hs.Thunk();
    var hs_zdfEnumRatio125uMHf = new $hs.Data(1);
    var hs_zddReal1825uMHr = new $hs.Thunk();
    var hs_zddNum2725uMHt = new $hs.Thunk();
    var hs_zddEq1125uMHv = new $hs.Thunk();
    var hs_zddOrd1425uMHx = new $hs.Thunk();
    var hs_zc125uMHz = new $hs.Func(2);
    var hs_zddReal1925uMII = new $hs.Thunk();
    var hs_zddNum2825uMIK = new $hs.Thunk();
    var hs_zddEq1225uMIM = new $hs.Thunk();
    var hs_zddOrd1525uMIO = new $hs.Thunk();
    var hs_zc225uMIQ = new $hs.Func(2);
    var hs_zddReal2025uMJZ = new $hs.Thunk();
    var hs_zddNum2925uMK1 = new $hs.Thunk();
    var hs_zddEq1325uMK3 = new $hs.Thunk();
    var hs_zddOrd1625uMK5 = new $hs.Thunk();
    var hs_zc325uMK7 = new $hs.Func(2);
    var hs_zddReal2125uMOj = new $hs.Thunk();
    var hs_zddNum3025uMOl = new $hs.Thunk();
    var hs_zddEq1425uMOn = new $hs.Thunk();
    var hs_lcm125uMOp = new $hs.Func(2);
    this.hs_zdp1Fractional.evaluate = function (hs_tpl26DaxI) {
        var hs_tpl26Dbli = hs_tpl26DaxI;
        if (hs_tpl26DaxI.notEvaluated) {
            hs_tpl26Dbli = hs_tpl26DaxI.hscall();
        }
        var hs_tpl26DaxO = hs_tpl26Dbli.data[0];
        if (hs_tpl26DaxO.notEvaluated) {
            return hs_tpl26DaxO.hscall();
        } else {
            return hs_tpl26DaxO;
        }
    };
    this.hs_zs.evaluate = function (hs_tpl26DaxQ) {
        var hs_tpl26Dbln = hs_tpl26DaxQ;
        if (hs_tpl26DaxQ.notEvaluated) {
            hs_tpl26Dbln = hs_tpl26DaxQ.hscall();
        }
        var hs_tpl26DaxW = hs_tpl26Dbln.data[1];
        if (hs_tpl26DaxW.notEvaluated) {
            return hs_tpl26DaxW.hscall();
        } else {
            return hs_tpl26DaxW;
        }
    };
    this.hs_recip.evaluate = function (hs_tpl26DaxY) {
        var hs_tpl26Dblr = hs_tpl26DaxY;
        if (hs_tpl26DaxY.notEvaluated) {
            hs_tpl26Dblr = hs_tpl26DaxY.hscall();
        }
        var hs_tpl26Day4 = hs_tpl26Dblr.data[2];
        if (hs_tpl26Day4.notEvaluated) {
            return hs_tpl26Day4.hscall();
        } else {
            return hs_tpl26Day4;
        }
    };
    this.hs_fromRational.evaluate = function (hs_tpl26Day6) {
        var hs_tpl26Dblv = hs_tpl26Day6;
        if (hs_tpl26Day6.notEvaluated) {
            hs_tpl26Dblv = hs_tpl26Day6.hscall();
        }
        var hs_tpl26Dayc = hs_tpl26Dblv.data[3];
        if (hs_tpl26Dayc.notEvaluated) {
            return hs_tpl26Dayc.hscall();
        } else {
            return hs_tpl26Dayc;
        }
    };
    this.hs_zdp1Integral.evaluate = function (hs_tpl26Daye) {
        var hs_tpl26Dbly = hs_tpl26Daye;
        if (hs_tpl26Daye.notEvaluated) {
            hs_tpl26Dbly = hs_tpl26Daye.hscall();
        }
        var hs_tpl26Dayp = hs_tpl26Dbly.data[0];
        if (hs_tpl26Dayp.notEvaluated) {
            return hs_tpl26Dayp.hscall();
        } else {
            return hs_tpl26Dayp;
        }
    };
    this.hs_zdp2Integral.evaluate = function (hs_tpl26Dayr) {
        var hs_tpl26DblI = hs_tpl26Dayr;
        if (hs_tpl26Dayr.notEvaluated) {
            hs_tpl26DblI = hs_tpl26Dayr.hscall();
        }
        var hs_tpl26DayC = hs_tpl26DblI.data[1];
        if (hs_tpl26DayC.notEvaluated) {
            return hs_tpl26DayC.hscall();
        } else {
            return hs_tpl26DayC;
        }
    };
    this.hs_quot.evaluate = function (hs_tpl26DayE) {
        var hs_tpl26DblR = hs_tpl26DayE;
        if (hs_tpl26DayE.notEvaluated) {
            hs_tpl26DblR = hs_tpl26DayE.hscall();
        }
        var hs_tpl26DayP = hs_tpl26DblR.data[2];
        if (hs_tpl26DayP.notEvaluated) {
            return hs_tpl26DayP.hscall();
        } else {
            return hs_tpl26DayP;
        }
    };
    this.hs_rem.evaluate = function (hs_tpl26DayR) {
        var hs_tpl26Dbm0 = hs_tpl26DayR;
        if (hs_tpl26DayR.notEvaluated) {
            hs_tpl26Dbm0 = hs_tpl26DayR.hscall();
        }
        var hs_tpl26Daz2 = hs_tpl26Dbm0.data[3];
        if (hs_tpl26Daz2.notEvaluated) {
            return hs_tpl26Daz2.hscall();
        } else {
            return hs_tpl26Daz2;
        }
    };
    this.hs_div.evaluate = function (hs_tpl26Daz4) {
        var hs_tpl26Dbm9 = hs_tpl26Daz4;
        if (hs_tpl26Daz4.notEvaluated) {
            hs_tpl26Dbm9 = hs_tpl26Daz4.hscall();
        }
        var hs_tpl26Dazf = hs_tpl26Dbm9.data[4];
        if (hs_tpl26Dazf.notEvaluated) {
            return hs_tpl26Dazf.hscall();
        } else {
            return hs_tpl26Dazf;
        }
    };
    this.hs_mod.evaluate = function (hs_tpl26Dazh) {
        var hs_tpl26Dbmi = hs_tpl26Dazh;
        if (hs_tpl26Dazh.notEvaluated) {
            hs_tpl26Dbmi = hs_tpl26Dazh.hscall();
        }
        var hs_tpl26Dazs = hs_tpl26Dbmi.data[5];
        if (hs_tpl26Dazs.notEvaluated) {
            return hs_tpl26Dazs.hscall();
        } else {
            return hs_tpl26Dazs;
        }
    };
    this.hs_quotRem.evaluate = function (hs_tpl26Dazu) {
        var hs_tpl26Dbmr = hs_tpl26Dazu;
        if (hs_tpl26Dazu.notEvaluated) {
            hs_tpl26Dbmr = hs_tpl26Dazu.hscall();
        }
        var hs_tpl26DazF = hs_tpl26Dbmr.data[6];
        if (hs_tpl26DazF.notEvaluated) {
            return hs_tpl26DazF.hscall();
        } else {
            return hs_tpl26DazF;
        }
    };
    this.hs_divMod.evaluate = function (hs_tpl26DazH) {
        var hs_tpl26DbmA = hs_tpl26DazH;
        if (hs_tpl26DazH.notEvaluated) {
            hs_tpl26DbmA = hs_tpl26DazH.hscall();
        }
        var hs_tpl26DazS = hs_tpl26DbmA.data[7];
        if (hs_tpl26DazS.notEvaluated) {
            return hs_tpl26DazS.hscall();
        } else {
            return hs_tpl26DazS;
        }
    };
    this.hs_toInteger.evaluate = function (hs_tpl26DazU) {
        var hs_tpl26DbmJ = hs_tpl26DazU;
        if (hs_tpl26DazU.notEvaluated) {
            hs_tpl26DbmJ = hs_tpl26DazU.hscall();
        }
        var hs_tpl26DaA5 = hs_tpl26DbmJ.data[8];
        if (hs_tpl26DaA5.notEvaluated) {
            return hs_tpl26DaA5.hscall();
        } else {
            return hs_tpl26DaA5;
        }
    };
    this.hs_zdp1Real.evaluate = function (hs_tpl26DaA7) {
        var hs_tpl26DbmR = hs_tpl26DaA7;
        if (hs_tpl26DaA7.notEvaluated) {
            hs_tpl26DbmR = hs_tpl26DaA7.hscall();
        }
        var hs_tpl26DaAc = hs_tpl26DbmR.data[0];
        if (hs_tpl26DaAc.notEvaluated) {
            return hs_tpl26DaAc.hscall();
        } else {
            return hs_tpl26DaAc;
        }
    };
    this.hs_zdp2Real.evaluate = function (hs_tpl26DaAe) {
        var hs_tpl26DbmV = hs_tpl26DaAe;
        if (hs_tpl26DaAe.notEvaluated) {
            hs_tpl26DbmV = hs_tpl26DaAe.hscall();
        }
        var hs_tpl26DaAj = hs_tpl26DbmV.data[1];
        if (hs_tpl26DaAj.notEvaluated) {
            return hs_tpl26DaAj.hscall();
        } else {
            return hs_tpl26DaAj;
        }
    };
    this.hs_toRational.evaluate = function (hs_tpl26DaAl) {
        var hs_tpl26DbmY = hs_tpl26DaAl;
        if (hs_tpl26DaAl.notEvaluated) {
            hs_tpl26DbmY = hs_tpl26DaAl.hscall();
        }
        var hs_tpl26DaAq = hs_tpl26DbmY.data[2];
        if (hs_tpl26DaAq.notEvaluated) {
            return hs_tpl26DaAq.hscall();
        } else {
            return hs_tpl26DaAq;
        }
    };
    this.hs_zdp1RealFrac.evaluate = function (hs_tpl26DaAs) {
        var hs_tpl26Dbn0 = hs_tpl26DaAs;
        if (hs_tpl26DaAs.notEvaluated) {
            hs_tpl26Dbn0 = hs_tpl26DaAs.hscall();
        }
        var hs_tpl26DaAB = hs_tpl26Dbn0.data[0];
        if (hs_tpl26DaAB.notEvaluated) {
            return hs_tpl26DaAB.hscall();
        } else {
            return hs_tpl26DaAB;
        }
    };
    this.hs_zdp2RealFrac.evaluate = function (hs_tpl26DaAD) {
        var hs_tpl26Dbn8 = hs_tpl26DaAD;
        if (hs_tpl26DaAD.notEvaluated) {
            hs_tpl26Dbn8 = hs_tpl26DaAD.hscall();
        }
        var hs_tpl26DaAM = hs_tpl26Dbn8.data[1];
        if (hs_tpl26DaAM.notEvaluated) {
            return hs_tpl26DaAM.hscall();
        } else {
            return hs_tpl26DaAM;
        }
    };
    this.hs_properFraction.evaluate = function (hs_tpl26DaAO) {
        var hs_tpl26Dbnf = hs_tpl26DaAO;
        if (hs_tpl26DaAO.notEvaluated) {
            hs_tpl26Dbnf = hs_tpl26DaAO.hscall();
        }
        var hs_tpl26DaAX = hs_tpl26Dbnf.data[2];
        if (hs_tpl26DaAX.notEvaluated) {
            return hs_tpl26DaAX.hscall();
        } else {
            return hs_tpl26DaAX;
        }
    };
    this.hs_truncate.evaluate = function (hs_tpl26DaAZ) {
        var hs_tpl26Dbnm = hs_tpl26DaAZ;
        if (hs_tpl26DaAZ.notEvaluated) {
            hs_tpl26Dbnm = hs_tpl26DaAZ.hscall();
        }
        var hs_tpl26DaB8 = hs_tpl26Dbnm.data[3];
        if (hs_tpl26DaB8.notEvaluated) {
            return hs_tpl26DaB8.hscall();
        } else {
            return hs_tpl26DaB8;
        }
    };
    this.hs_round.evaluate = function (hs_tpl26DaBa) {
        var hs_tpl26Dbnt = hs_tpl26DaBa;
        if (hs_tpl26DaBa.notEvaluated) {
            hs_tpl26Dbnt = hs_tpl26DaBa.hscall();
        }
        var hs_tpl26DaBj = hs_tpl26Dbnt.data[4];
        if (hs_tpl26DaBj.notEvaluated) {
            return hs_tpl26DaBj.hscall();
        } else {
            return hs_tpl26DaBj;
        }
    };
    this.hs_ceiling.evaluate = function (hs_tpl26DaBl) {
        var hs_tpl26DbnA = hs_tpl26DaBl;
        if (hs_tpl26DaBl.notEvaluated) {
            hs_tpl26DbnA = hs_tpl26DaBl.hscall();
        }
        var hs_tpl26DaBu = hs_tpl26DbnA.data[5];
        if (hs_tpl26DaBu.notEvaluated) {
            return hs_tpl26DaBu.hscall();
        } else {
            return hs_tpl26DaBu;
        }
    };
    this.hs_floor.evaluate = function (hs_tpl26DaBw) {
        var hs_tpl26DbnH = hs_tpl26DaBw;
        if (hs_tpl26DaBw.notEvaluated) {
            hs_tpl26DbnH = hs_tpl26DaBw.hscall();
        }
        var hs_tpl26DaBF = hs_tpl26DbnH.data[6];
        if (hs_tpl26DaBF.notEvaluated) {
            return hs_tpl26DaBF.hscall();
        } else {
            return hs_tpl26DaBF;
        }
    };
    this.hs_zdWZCzv.evaluate = function (hs_tpl26DaBI, hs_tpl26DaBK) {
        var hs_tpl26DaBM = hs_tpl26DaBI;
        if (hs_tpl26DaBI.notEvaluated) {
            hs_tpl26DaBM = hs_tpl26DaBI.hscall();
        }
        var hs_tpl26DaBN = hs_tpl26DaBK;
        if (hs_tpl26DaBK.notEvaluated) {
            hs_tpl26DaBN = hs_tpl26DaBK.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DaBM, hs_tpl26DaBN];
        return $res;
    };
    this.hs_zddmfloor.evaluate = function (hs_zddRealFrac326DaBS, hs_eta26DaBV, hs_eta126DaC0) {
        var hs_zddReal2226DaBT = new $hs.Thunk();
        hs_zddReal2226DaBT.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac326DaBS);
        };
        var hs_zddReal2326DaBW = new $hs.Thunk();
        hs_zddReal2326DaBW.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_eta26DaBV);
        };
        var hs_zddNum3126DaBY = new $hs.Thunk();
        hs_zddNum3126DaBY.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2326DaBW);
        };
        var hs_ds26DaC1 = new $hs.Thunk();
        hs_ds26DaC1.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_properFraction.hscall(hs_zddRealFrac326DaBS, hs_eta26DaBV, hs_eta126DaC0);
        };
        var hs_sat26DbnR = new $hs.Thunk();
        hs_sat26DbnR.evaluateOnce = function () {
            var hs_sat26DbnN = new $hs.Thunk();
            hs_sat26DbnN.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            var hs_sat26DbnO = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226DaBT);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26DbnO, hs_sat26DbnN);
        };
        var hs_sat26DbnV = new $hs.Thunk();
        hs_sat26DbnV.evaluateOnce = function () {
            var hs_wild26DbnQ = hs_ds26DaC1;
            if (hs_ds26DaC1.notEvaluated) {
                hs_wild26DbnQ = hs_ds26DaC1.hscall();
            }
            var hs_r26DaC6 = hs_wild26DbnQ.data[1];
            if (hs_r26DaC6.notEvaluated) {
                return hs_r26DaC6.hscall();
            } else {
                return hs_r26DaC6;
            }
        };
        var hs_sat26DbnU = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2226DaBT);
        var hs_wild26DbnT = $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26DbnU, hs_sat26DbnV, hs_sat26DbnR);
        switch (hs_wild26DbnT.tag) {
        case 1:
            var hs_wild126DbnS = hs_ds26DaC1;
            if (hs_ds26DaC1.notEvaluated) {
                hs_wild126DbnS = hs_ds26DaC1.hscall();
            }
            var hs_n26DaCf = hs_wild126DbnS.data[0];
            if (hs_n26DaCf.notEvaluated) {
                return hs_n26DaCf.hscall();
            } else {
                return hs_n26DaCf;
            }
        case 2:
            var hs_sat26DbnZ = new $hs.Thunk();
            hs_sat26DbnZ.evaluateOnce = function () {
                var hs_sat26DbnX = new $hs.Thunk();
                hs_sat26DbnX.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaBY, hs_sat26DbnX);
            };
            var hs_sat26Dbo1 = new $hs.Thunk();
            hs_sat26Dbo1.evaluateOnce = function () {
                var hs_wild126DbnY = hs_ds26DaC1;
                if (hs_ds26DaC1.notEvaluated) {
                    hs_wild126DbnY = hs_ds26DaC1.hscall();
                }
                var hs_n26DaCj = hs_wild126DbnY.data[0];
                if (hs_n26DaCj.notEvaluated) {
                    return hs_n26DaCj.hscall();
                } else {
                    return hs_n26DaCj;
                }
            };
            return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum3126DaBY, hs_sat26Dbo1, hs_sat26DbnZ);
        }
    };
    this.hs_zddmceiling.evaluate = function (hs_zddRealFrac326DaCr, hs_eta26DaCu, hs_eta126DaCz) {
        var hs_zddReal2226DaCs = new $hs.Thunk();
        hs_zddReal2226DaCs.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac326DaCr);
        };
        var hs_zddReal2326DaCv = new $hs.Thunk();
        hs_zddReal2326DaCv.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_eta26DaCu);
        };
        var hs_zddNum3126DaCx = new $hs.Thunk();
        hs_zddNum3126DaCx.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2326DaCv);
        };
        var hs_ds26DaCA = new $hs.Thunk();
        hs_ds26DaCA.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_properFraction.hscall(hs_zddRealFrac326DaCr, hs_eta26DaCu, hs_eta126DaCz);
        };
        var hs_sat26Dbo6 = new $hs.Thunk();
        hs_sat26Dbo6.evaluateOnce = function () {
            var hs_sat26Dbo2 = new $hs.Thunk();
            hs_sat26Dbo2.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            var hs_sat26Dbo3 = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226DaCs);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26Dbo3, hs_sat26Dbo2);
        };
        var hs_sat26Dboa = new $hs.Thunk();
        hs_sat26Dboa.evaluateOnce = function () {
            var hs_wild26Dbo5 = hs_ds26DaCA;
            if (hs_ds26DaCA.notEvaluated) {
                hs_wild26Dbo5 = hs_ds26DaCA.hscall();
            }
            var hs_r26DaCF = hs_wild26Dbo5.data[1];
            if (hs_r26DaCF.notEvaluated) {
                return hs_r26DaCF.hscall();
            } else {
                return hs_r26DaCF;
            }
        };
        var hs_sat26Dbo9 = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2226DaCs);
        var hs_wild26Dbo8 = $hs.modules.GHCziClasses.hs_zg.hscall(hs_sat26Dbo9, hs_sat26Dboa, hs_sat26Dbo6);
        switch (hs_wild26Dbo8.tag) {
        case 1:
            var hs_wild126Dbo7 = hs_ds26DaCA;
            if (hs_ds26DaCA.notEvaluated) {
                hs_wild126Dbo7 = hs_ds26DaCA.hscall();
            }
            var hs_n26DaCO = hs_wild126Dbo7.data[0];
            if (hs_n26DaCO.notEvaluated) {
                return hs_n26DaCO.hscall();
            } else {
                return hs_n26DaCO;
            }
        case 2:
            var hs_sat26Dboe = new $hs.Thunk();
            hs_sat26Dboe.evaluateOnce = function () {
                var hs_sat26Dboc = new $hs.Thunk();
                hs_sat26Dboc.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaCx, hs_sat26Dboc);
            };
            var hs_sat26Dbog = new $hs.Thunk();
            hs_sat26Dbog.evaluateOnce = function () {
                var hs_wild126Dbod = hs_ds26DaCA;
                if (hs_ds26DaCA.notEvaluated) {
                    hs_wild126Dbod = hs_ds26DaCA.hscall();
                }
                var hs_n26DaCS = hs_wild126Dbod.data[0];
                if (hs_n26DaCS.notEvaluated) {
                    return hs_n26DaCS.hscall();
                } else {
                    return hs_n26DaCS;
                }
            };
            return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum3126DaCx, hs_sat26Dbog, hs_sat26Dboe);
        }
    };
    this.hs_zddmtruncate.evaluate = function (hs_zddRealFrac326DaCZ, hs_zddIntegral26DaD0, hs_x26DaD1) {
        var hs_wild26Dboh = $hs.modules.GHCziReal.hs_properFraction.hscall(hs_zddRealFrac326DaCZ, hs_zddIntegral26DaD0, hs_x26DaD1);
        var hs_m26DaD5 = hs_wild26Dboh.data[0];
        if (hs_m26DaD5.notEvaluated) {
            return hs_m26DaD5.hscall();
        } else {
            return hs_m26DaD5;
        }
    };
    this.hs_zddmrecip.evaluate = function (hs_zddFractional626DaD8, hs_eta26DaDc) {
        var hs_sat26Dbol = new $hs.Thunk();
        hs_sat26Dbol.evaluateOnce = function () {
            var hs_sat26Dboj = new $hs.Thunk();
            hs_sat26Dboj.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            var hs_sat26Dbok = $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional626DaD8);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26Dbok, hs_sat26Dboj);
        };
        return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional626DaD8, hs_sat26Dbol, hs_eta26DaDc);
    };
    this.hs_zddmzs.evaluate = function (hs_zddFractional626DaDg, hs_eta26DaDi, hs_eta126DaDj) {
        var hs_sat26Dbom = new $hs.Thunk();
        hs_sat26Dbom.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_recip.hscall(hs_zddFractional626DaDg, hs_eta126DaDj);
        };
        var hs_sat26Dbon = $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional626DaDg);
        return $hs.modules.GHCziNum.hs_zt.hscall(hs_sat26Dbon, hs_eta26DaDi, hs_sat26Dbom);
    };
    this.hs_zddmdivMod.evaluate = function (hs_zddIntegral26DaDp, hs_eta26DaDu, hs_eta126DaDv) {
        var hs_zddReal2226DaDq = new $hs.Thunk();
        hs_zddReal2226DaDq.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DaDp);
        };
        var hs_zddNum3126DaDs = new $hs.Thunk();
        hs_zddNum3126DaDs.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226DaDq);
        };
        var hs_ds26DaDC = new $hs.Thunk();
        hs_ds26DaDC.evaluateOnce = function () {
            var hs_wild26DaDz = $hs.modules.GHCziReal.hs_quotRem.hscall(hs_zddIntegral26DaDp, hs_eta26DaDu, hs_eta126DaDv);
            var hs_q26DaDA = hs_wild26DaDz.data[0];
            var hs_r26DaDB = hs_wild26DaDz.data[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_wild26DaDz, hs_q26DaDA, hs_r26DaDB];
            return $res;
        };
        var hs_r26DaDJ = new $hs.Thunk();
        hs_r26DaDJ.evaluateOnce = function () {
            var hs_ds126Dbop = hs_ds26DaDC;
            if (hs_ds26DaDC.notEvaluated) {
                hs_ds126Dbop = hs_ds26DaDC.hscall();
            }
            var hs_r126DaDI = hs_ds126Dbop.data[2];
            if (hs_r126DaDI.notEvaluated) {
                return hs_r126DaDI.hscall();
            } else {
                return hs_r126DaDI;
            }
        };
        var hs_sat26Dbos = new $hs.Thunk();
        hs_sat26Dbos.evaluateOnce = function () {
            var hs_sat26Dbor = new $hs.Thunk();
            hs_sat26Dbor.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_signum.hscall(hs_zddNum3126DaDs, hs_eta126DaDv);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum3126DaDs, hs_sat26Dbor);
        };
        var hs_sat26Dbow = new $hs.Thunk();
        hs_sat26Dbow.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_signum.hscall(hs_zddNum3126DaDs, hs_r26DaDJ);
        };
        var hs_sat26Dbov = $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum3126DaDs);
        var hs_wild26Dbou = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26Dbov, hs_sat26Dbow, hs_sat26Dbos);
        switch (hs_wild26Dbou.tag) {
        case 1:
            var hs_ds126Dbot = hs_ds26DaDC;
            if (hs_ds26DaDC.notEvaluated) {
                hs_ds126Dbot = hs_ds26DaDC.hscall();
            }
            var hs_qr26DaDT = hs_ds126Dbot.data[0];
            if (hs_qr26DaDT.notEvaluated) {
                return hs_qr26DaDT.hscall();
            } else {
                return hs_qr26DaDT;
            }
        case 2:
            var hs_sat26Dboz = new $hs.Thunk();
            hs_sat26Dboz.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum3126DaDs, hs_r26DaDJ, hs_eta126DaDv);
            };
            var hs_sat26DboG = new $hs.Thunk();
            hs_sat26DboG.evaluateOnce = function () {
                var hs_sat26DboD = new $hs.Thunk();
                hs_sat26DboD.evaluateOnce = function () {
                    var hs_sat26DboA = new $hs.Thunk();
                    hs_sat26DboA.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaDs, hs_sat26DboA);
                };
                var hs_sat26DboF = new $hs.Thunk();
                hs_sat26DboF.evaluateOnce = function () {
                    var hs_ds126DboC = hs_ds26DaDC;
                    if (hs_ds26DaDC.notEvaluated) {
                        hs_ds126DboC = hs_ds26DaDC.hscall();
                    }
                    var hs_q26DaDY = hs_ds126DboC.data[1];
                    if (hs_q26DaDY.notEvaluated) {
                        return hs_q26DaDY.hscall();
                    } else {
                        return hs_q26DaDY;
                    }
                };
                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum3126DaDs, hs_sat26DboF, hs_sat26DboD);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DboG, hs_sat26Dboz];
            return $res;
        }
    };
    this.hs_zddmmod.evaluate = function (hs_zddIntegral26DaE7, hs_n26DaE8, hs_d26DaE9) {
        var hs_wild26DboI = $hs.modules.GHCziReal.hs_divMod.hscall(hs_zddIntegral26DaE7, hs_n26DaE8, hs_d26DaE9);
        var hs_r26DaEd = hs_wild26DboI.data[1];
        if (hs_r26DaEd.notEvaluated) {
            return hs_r26DaEd.hscall();
        } else {
            return hs_r26DaEd;
        }
    };
    this.hs_zddmdiv.evaluate = function (hs_zddIntegral26DaEh, hs_n26DaEi, hs_d26DaEj) {
        var hs_wild26DboJ = $hs.modules.GHCziReal.hs_divMod.hscall(hs_zddIntegral26DaEh, hs_n26DaEi, hs_d26DaEj);
        var hs_q26DaEn = hs_wild26DboJ.data[0];
        if (hs_q26DaEn.notEvaluated) {
            return hs_q26DaEn.hscall();
        } else {
            return hs_q26DaEn;
        }
    };
    this.hs_zddmrem.evaluate = function (hs_zddIntegral26DaEr, hs_n26DaEs, hs_d26DaEt) {
        var hs_wild26DboM = $hs.modules.GHCziReal.hs_quotRem.hscall(hs_zddIntegral26DaEr, hs_n26DaEs, hs_d26DaEt);
        var hs_r26DaEx = hs_wild26DboM.data[1];
        if (hs_r26DaEx.notEvaluated) {
            return hs_r26DaEx.hscall();
        } else {
            return hs_r26DaEx;
        }
    };
    this.hs_zddmquot.evaluate = function (hs_zddIntegral26DaEB, hs_n26DaEC, hs_d26DaED) {
        var hs_wild26DboN = $hs.modules.GHCziReal.hs_quotRem.hscall(hs_zddIntegral26DaEB, hs_n26DaEC, hs_d26DaED);
        var hs_q26DaEH = hs_wild26DboN.data[0];
        if (hs_q26DaEH.notEvaluated) {
            return hs_q26DaEH.hscall();
        } else {
            return hs_q26DaEH;
        }
    };
    this.hs_integralEnumFromThenTo.evaluate = function (hs_zddIntegral26DaEM, hs_eta26DaEQ, hs_eta126DaES, hs_eta226DaEU) {
        var hs_sat26DboU = new $hs.Thunk();
        hs_sat26DboU.evaluateOnce = function () {
            var hs_sat26DboP = new $hs.Thunk();
            hs_sat26DboP.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26DaEM, hs_eta226DaEU);
            };
            var hs_sat26DboQ = new $hs.Thunk();
            hs_sat26DboQ.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26DaEM, hs_eta126DaES);
            };
            var hs_sat26DboR = new $hs.Thunk();
            hs_sat26DboR.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26DaEM, hs_eta26DaEQ);
            };
            return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziNum.hs_zdfEnumInteger, hs_sat26DboR, hs_sat26DboQ, hs_sat26DboP);
        };
        var hs_sat26DboV = new $hs.Thunk();
        hs_sat26DboV.evaluateOnce = function () {
            var hs_sat26DboT = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DaEM);
            var hs_sat26DboS = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26DboT);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26DboS);
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26DboV, hs_sat26DboU);
    };
    this.hs_integralEnumFromTo.evaluate = function (hs_zddIntegral26DaF0, hs_eta26DaF4, hs_eta126DaF6) {
        var hs_sat26Dbp0 = new $hs.Thunk();
        hs_sat26Dbp0.evaluateOnce = function () {
            var hs_sat26DboW = new $hs.Thunk();
            hs_sat26DboW.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26DaF0, hs_eta126DaF6);
            };
            var hs_sat26DboX = new $hs.Thunk();
            hs_sat26DboX.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26DaF0, hs_eta26DaF4);
            };
            return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziNum.hs_zdfEnumInteger, hs_sat26DboX, hs_sat26DboW);
        };
        var hs_sat26Dbp1 = new $hs.Thunk();
        hs_sat26Dbp1.evaluateOnce = function () {
            var hs_sat26DboZ = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DaF0);
            var hs_sat26DboY = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26DboZ);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26DboY);
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26Dbp1, hs_sat26Dbp0);
    };
    this.hs_integralEnumFromThen.evaluate = function (hs_zddIntegral26DaFe, hs_zddBounded26DaFo, hs_eta26DaFi, hs_eta126DaFf) {
        var hs_izun226DaFg = new $hs.Thunk();
        hs_izun226DaFg.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26DaFe, hs_eta126DaFf);
        };
        var hs_izun126DaFj = new $hs.Thunk();
        hs_izun126DaFj.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26DaFe, hs_eta26DaFi);
        };
        var hs_wild26Dbp2 = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_izun226DaFg, hs_izun126DaFj);
        switch (hs_wild26Dbp2.tag) {
        case 1:
            var hs_sat26Dbp8 = new $hs.Thunk();
            hs_sat26Dbp8.evaluateOnce = function () {
                var hs_sat26Dbp5 = new $hs.Thunk();
                hs_sat26Dbp5.evaluateOnce = function () {
                    var hs_sat26Dbp4 = new $hs.Thunk();
                    hs_sat26Dbp4.evaluateOnce = function () {
                        var hs_sat26Dbp3 = new $hs.Thunk();
                        hs_sat26Dbp3.evaluateOnce = function () {
                            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26DaFo);
                        };
                        return $hs.modules.GHCziBase.hs_asTypeOf.hscall(hs_sat26Dbp3, hs_eta26DaFi);
                    };
                    return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26DaFe, hs_sat26Dbp4);
                };
                return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziNum.hs_zdfEnumInteger, hs_izun126DaFj, hs_izun226DaFg, hs_sat26Dbp5);
            };
            var hs_sat26Dbp9 = new $hs.Thunk();
            hs_sat26Dbp9.evaluateOnce = function () {
                var hs_sat26Dbp7 = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DaFe);
                var hs_sat26Dbp6 = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26Dbp7);
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26Dbp6);
            };
            return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26Dbp9, hs_sat26Dbp8);
        case 2:
            var hs_sat26Dbpf = new $hs.Thunk();
            hs_sat26Dbpf.evaluateOnce = function () {
                var hs_sat26Dbpc = new $hs.Thunk();
                hs_sat26Dbpc.evaluateOnce = function () {
                    var hs_sat26Dbpb = new $hs.Thunk();
                    hs_sat26Dbpb.evaluateOnce = function () {
                        var hs_sat26Dbpa = new $hs.Thunk();
                        hs_sat26Dbpa.evaluateOnce = function () {
                            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26DaFo);
                        };
                        return $hs.modules.GHCziBase.hs_asTypeOf.hscall(hs_sat26Dbpa, hs_eta26DaFi);
                    };
                    return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26DaFe, hs_sat26Dbpb);
                };
                return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziNum.hs_zdfEnumInteger, hs_izun126DaFj, hs_izun226DaFg, hs_sat26Dbpc);
            };
            var hs_sat26Dbpg = new $hs.Thunk();
            hs_sat26Dbpg.evaluateOnce = function () {
                var hs_sat26Dbpe = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DaFe);
                var hs_sat26Dbpd = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26Dbpe);
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26Dbpd);
            };
            return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26Dbpg, hs_sat26Dbpf);
        }
    };
    this.hs_integralEnumFrom.evaluate = function (hs_zddIntegral26DaFD, hs_zddBounded26DaFJ, hs_eta26DaFH) {
        var hs_sat26Dbpn = new $hs.Thunk();
        hs_sat26Dbpn.evaluateOnce = function () {
            var hs_sat26Dbpj = new $hs.Thunk();
            hs_sat26Dbpj.evaluateOnce = function () {
                var hs_sat26Dbpi = new $hs.Thunk();
                hs_sat26Dbpi.evaluateOnce = function () {
                    var hs_sat26Dbph = new $hs.Thunk();
                    hs_sat26Dbph.evaluateOnce = function () {
                        return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26DaFJ);
                    };
                    return $hs.modules.GHCziBase.hs_asTypeOf.hscall(hs_sat26Dbph, hs_eta26DaFH);
                };
                return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26DaFD, hs_sat26Dbpi);
            };
            var hs_sat26Dbpk = new $hs.Thunk();
            hs_sat26Dbpk.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26DaFD, hs_eta26DaFH);
            };
            return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziNum.hs_zdfEnumInteger, hs_sat26Dbpk, hs_sat26Dbpj);
        };
        var hs_sat26Dbpo = new $hs.Thunk();
        hs_sat26Dbpo.evaluateOnce = function () {
            var hs_sat26Dbpm = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DaFD);
            var hs_sat26Dbpl = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26Dbpm);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26Dbpl);
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26Dbpo, hs_sat26Dbpn);
    };
    this.hs_gcd.evaluate = function (hs_zddIntegral26DaFS, hs_eta26DaGg, hs_eta126DaGi) {
        var hs_zddReal2226DaFT = new $hs.Thunk();
        hs_zddReal2226DaFT.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DaFS);
        };
        var hs_zddNum3126DaFV = new $hs.Thunk();
        hs_zddNum3126DaFV.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226DaFT);
        };
        var hs_zddEq1526DaFX = new $hs.Thunk();
        hs_zddEq1526DaFX.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum3126DaFV);
        };
        var hs_fail26DaGl = new $hs.Func(1);
        hs_fail26DaGl.evaluate = function (hs_ds26DaGk) {
            var hs_zddReal2326DaG1 = new $hs.Thunk();
            hs_zddReal2326DaG1.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DaFS);
            };
            var hs_zddNum3226DaG3 = new $hs.Thunk();
            hs_zddNum3226DaG3.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2326DaG1);
            };
            var hs_zddEq1626DaG5 = new $hs.Thunk();
            hs_zddEq1626DaG5.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum3226DaG3);
            };
            var hs_gcdzq26DaGe = new $hs.Func(2);
            hs_gcdzq26DaGe.evaluate = function (hs_a4426DaGd, hs_ds126DaG9) {
                var hs_sat26Dbpr = new $hs.Thunk();
                hs_sat26Dbpr.evaluateOnce = function () {
                    var hs_sat26Dbpp = new $hs.Thunk();
                    hs_sat26Dbpp.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226DaG3, hs_sat26Dbpp);
                };
                var hs_wild26Dbpq = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1626DaG5, hs_ds126DaG9, hs_sat26Dbpr);
                switch (hs_wild26Dbpq.tag) {
                case 1:
                    var hs_sat26Dbps = new $hs.Thunk();
                    hs_sat26Dbps.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_rem.hscall(hs_zddIntegral26DaFS, hs_a4426DaGd, hs_ds126DaG9);
                    };
                    return hs_gcdzq26DaGe.hscall(hs_ds126DaG9, hs_sat26Dbps);
                case 2:
                    if (hs_a4426DaGd.notEvaluated) {
                        return hs_a4426DaGd.hscall();
                    } else {
                        return hs_a4426DaGd;
                    }
                }
            };
            var hs_sat26Dbpt = new $hs.Thunk();
            hs_sat26Dbpt.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_abs.hscall(hs_zddNum3126DaFV, hs_eta126DaGi);
            };
            var hs_sat26Dbpu = new $hs.Thunk();
            hs_sat26Dbpu.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_abs.hscall(hs_zddNum3126DaFV, hs_eta26DaGg);
            };
            return hs_gcdzq26DaGe.hscall(hs_sat26Dbpu, hs_sat26Dbpt);
        };
        var hs_sat26Dbpx = new $hs.Thunk();
        hs_sat26Dbpx.evaluateOnce = function () {
            var hs_sat26Dbpv = new $hs.Thunk();
            hs_sat26Dbpv.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaFV, hs_sat26Dbpv);
        };
        var hs_wild26Dbpw = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1526DaFX, hs_eta26DaGg, hs_sat26Dbpx);
        switch (hs_wild26Dbpw.tag) {
        case 1:
            return hs_fail26DaGl.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
        case 2:
            var hs_sat26DbpA = new $hs.Thunk();
            hs_sat26DbpA.evaluateOnce = function () {
                var hs_sat26Dbpy = new $hs.Thunk();
                hs_sat26Dbpy.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaFV, hs_sat26Dbpy);
            };
            var hs_wild126Dbpz = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1526DaFX, hs_eta126DaGi, hs_sat26DbpA);
            switch (hs_wild126Dbpz.tag) {
            case 1:
                return hs_fail26DaGl.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            case 2:
                var hs_sat26DbpB = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Prelude.gcd: gcd 0 0 is undefined\x00");
                return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DbpB);
            }
        }
    };
    this.hs_even.evaluate = function (hs_zddIntegral26DaGw, hs_eta26DaGB) {
        var hs_zddReal2226DaGx = new $hs.Thunk();
        hs_zddReal2226DaGx.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DaGw);
        };
        var hs_zddNum3126DaGz = new $hs.Thunk();
        hs_zddNum3126DaGz.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226DaGx);
        };
        var hs_sat26DbpD = new $hs.Thunk();
        hs_sat26DbpD.evaluateOnce = function () {
            var hs_sat26DbpC = new $hs.Thunk();
            hs_sat26DbpC.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaGz, hs_sat26DbpC);
        };
        var hs_sat26DbpH = new $hs.Thunk();
        hs_sat26DbpH.evaluateOnce = function () {
            var hs_sat26DbpF = new $hs.Thunk();
            hs_sat26DbpF.evaluateOnce = function () {
                var hs_sat26DbpE = new $hs.Thunk();
                hs_sat26DbpE.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaGz, hs_sat26DbpE);
            };
            return $hs.modules.GHCziReal.hs_rem.hscall(hs_zddIntegral26DaGw, hs_eta26DaGB, hs_sat26DbpF);
        };
        var hs_sat26DbpG = $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum3126DaGz);
        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26DbpG, hs_sat26DbpH, hs_sat26DbpD);
    };
    this.hs_odd.evaluate = function (hs_zddIntegral26DaGI) {
        var hs_sat26DbpI = new $hs.Func(1);
        hs_sat26DbpI.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.GHCziReal.hs_even.hscall(hs_zddIntegral26DaGI, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziClasses.hs_not, hs_sat26DbpI);
    };
    this.hs_zddmround.evaluate = function (hs_zddRealFrac326DaGO, hs_eta26DaGV, hs_eta126DaH0) {
        var hs_zddReal2226DaGP = new $hs.Thunk();
        hs_zddReal2226DaGP.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac326DaGO);
        };
        var hs_zddNum3126DaGR = new $hs.Thunk();
        hs_zddNum3126DaGR.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226DaGP);
        };
        var hs_zddEq1526DaGT = new $hs.Thunk();
        hs_zddEq1526DaGT.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum3126DaGR);
        };
        var hs_zddReal2326DaGW = new $hs.Thunk();
        hs_zddReal2326DaGW.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_eta26DaGV);
        };
        var hs_zddNum3226DaGY = new $hs.Thunk();
        hs_zddNum3226DaGY.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2326DaGW);
        };
        var hs_ds26DaH1 = new $hs.Thunk();
        hs_ds26DaH1.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_properFraction.hscall(hs_zddRealFrac326DaGO, hs_eta26DaGV, hs_eta126DaH0);
        };
        var hs_r26DaH7 = new $hs.Thunk();
        hs_r26DaH7.evaluateOnce = function () {
            var hs_wild26DbpK = hs_ds26DaH1;
            if (hs_ds26DaH1.notEvaluated) {
                hs_wild26DbpK = hs_ds26DaH1.hscall();
            }
            var hs_r126DaH6 = hs_wild26DbpK.data[1];
            if (hs_r126DaH6.notEvaluated) {
                return hs_r126DaH6.hscall();
            } else {
                return hs_r126DaH6;
            }
        };
        var hs_n26DaHd = new $hs.Thunk();
        hs_n26DaHd.evaluateOnce = function () {
            var hs_wild26DbpL = hs_ds26DaH1;
            if (hs_ds26DaH1.notEvaluated) {
                hs_wild26DbpL = hs_ds26DaH1.hscall();
            }
            var hs_n126DaHc = hs_wild26DbpL.data[0];
            if (hs_n126DaHc.notEvaluated) {
                return hs_n126DaHc.hscall();
            } else {
                return hs_n126DaHc;
            }
        };
        var hs_m26DaHn = new $hs.Thunk();
        hs_m26DaHn.evaluateOnce = function () {
            var hs_sat26DbpQ = new $hs.Thunk();
            hs_sat26DbpQ.evaluateOnce = function () {
                var hs_sat26DbpN = new $hs.Thunk();
                hs_sat26DbpN.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaGR, hs_sat26DbpN);
            };
            var hs_sat26DbpP = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2226DaGP);
            var hs_wild26DbpO = $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26DbpP, hs_r26DaH7, hs_sat26DbpQ);
            switch (hs_wild26DbpO.tag) {
            case 1:
                var hs_sat26DbpS = new $hs.Thunk();
                hs_sat26DbpS.evaluateOnce = function () {
                    var hs_sat26DbpR = new $hs.Thunk();
                    hs_sat26DbpR.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226DaGY, hs_sat26DbpR);
                };
                return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum3226DaGY, hs_n26DaHd, hs_sat26DbpS);
            case 2:
                var hs_sat26DbpU = new $hs.Thunk();
                hs_sat26DbpU.evaluateOnce = function () {
                    var hs_sat26DbpT = new $hs.Thunk();
                    hs_sat26DbpT.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226DaGY, hs_sat26DbpT);
                };
                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum3226DaGY, hs_n26DaHd, hs_sat26DbpU);
            }
        };
        var hs_ds126DaHw = new $hs.Thunk();
        hs_ds126DaHw.evaluateOnce = function () {
            var hs_sat26Dbq1 = new $hs.Thunk();
            hs_sat26Dbq1.evaluateOnce = function () {
                var hs_sat26DbpZ = new $hs.Thunk();
                hs_sat26DbpZ.evaluateOnce = function () {
                    var hs_sat26DbpV = new $hs.Thunk();
                    hs_sat26DbpV.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                    };
                    var hs_sat26DbpW = new $hs.Thunk();
                    hs_sat26DbpW.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    var hs_sat26DbpX = new $hs.Data(1);
                    hs_sat26DbpX.data = [hs_sat26DbpW, hs_sat26DbpV];
                    var hs_sat26DbpY = $hs.modules.GHCziReal.hs_zdp2RealFrac.hscall(hs_zddRealFrac326DaGO);
                    return $hs.modules.GHCziReal.hs_fromRational.hscall(hs_sat26DbpY, hs_sat26DbpX);
                };
                var hs_sat26Dbq0 = new $hs.Thunk();
                hs_sat26Dbq0.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_abs.hscall(hs_zddNum3126DaGR, hs_r26DaH7);
                };
                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum3126DaGR, hs_sat26Dbq0, hs_sat26DbpZ);
            };
            return $hs.modules.GHCziNum.hs_signum.hscall(hs_zddNum3126DaGR, hs_sat26Dbq1);
        };
        var hs_sat26Dbq5 = new $hs.Thunk();
        hs_sat26Dbq5.evaluateOnce = function () {
            var hs_sat26Dbq3 = new $hs.Thunk();
            hs_sat26Dbq3.evaluateOnce = function () {
                var hs_sat26Dbq2 = new $hs.Thunk();
                hs_sat26Dbq2.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaGR, hs_sat26Dbq2);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum3126DaGR, hs_sat26Dbq3);
        };
        var hs_wild26Dbq4 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1526DaGT, hs_ds126DaHw, hs_sat26Dbq5);
        switch (hs_wild26Dbq4.tag) {
        case 1:
            var hs_sat26Dbq8 = new $hs.Thunk();
            hs_sat26Dbq8.evaluateOnce = function () {
                var hs_sat26Dbq6 = new $hs.Thunk();
                hs_sat26Dbq6.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaGR, hs_sat26Dbq6);
            };
            var hs_wild126Dbq7 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1526DaGT, hs_ds126DaHw, hs_sat26Dbq8);
            switch (hs_wild126Dbq7.tag) {
            case 1:
                var hs_sat26Dbqc = new $hs.Thunk();
                hs_sat26Dbqc.evaluateOnce = function () {
                    var hs_sat26Dbq9 = new $hs.Thunk();
                    hs_sat26Dbq9.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaGR, hs_sat26Dbq9);
                };
                var hs_wild226Dbqb = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1526DaGT, hs_ds126DaHw, hs_sat26Dbqc);
                switch (hs_wild226Dbqb.tag) {
                case 1:
                    var hs_sat26Dbqa = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("round default defn: Bad value\x00");
                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dbqa);
                case 2:
                    if (hs_m26DaHn.notEvaluated) {
                        return hs_m26DaHn.hscall();
                    } else {
                        return hs_m26DaHn;
                    }
                }
            case 2:
                var hs_wild226Dbqd = $hs.modules.GHCziReal.hs_even.hscall(hs_eta26DaGV, hs_n26DaHd);
                switch (hs_wild226Dbqd.tag) {
                case 1:
                    if (hs_m26DaHn.notEvaluated) {
                        return hs_m26DaHn.hscall();
                    } else {
                        return hs_m26DaHn;
                    }
                case 2:
                    if (hs_n26DaHd.notEvaluated) {
                        return hs_n26DaHd.hscall();
                    } else {
                        return hs_n26DaHd;
                    }
                }
            }
        case 2:
            if (hs_n26DaHd.notEvaluated) {
                return hs_n26DaHd.hscall();
            } else {
                return hs_n26DaHd;
            }
        }
    };
    this.hs_showSigned.evaluate = function (hs_zddReal2226DaHO, hs_eta26DaHV, hs_eta126DaHW, hs_eta226DaHR) {
        var hs_zddNum3126DaHP = new $hs.Thunk();
        hs_zddNum3126DaHP.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226DaHO);
        };
        var hs_sat26Dbqh = new $hs.Thunk();
        hs_sat26Dbqh.evaluateOnce = function () {
            var hs_sat26Dbqe = new $hs.Thunk();
            hs_sat26Dbqe.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaHP, hs_sat26Dbqe);
        };
        var hs_sat26Dbqg = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2226DaHO);
        var hs_wild26Dbqf = $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26Dbqg, hs_eta226DaHR, hs_sat26Dbqh);
        switch (hs_wild26Dbqf.tag) {
        case 1:
            return hs_eta26DaHV.hscall(hs_eta226DaHR);
        case 2:
            var hs_sat26Dbqm = new $hs.Thunk();
            hs_sat26Dbqm.evaluateOnce = function () {
                var hs_sat26Dbqj = new $hs.Thunk();
                hs_sat26Dbqj.evaluateOnce = function () {
                    var hs_sat26Dbqi = new $hs.Thunk();
                    hs_sat26Dbqi.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum3126DaHP, hs_eta226DaHR);
                    };
                    return hs_eta26DaHV.hscall(hs_sat26Dbqi);
                };
                var hs_sat26Dbql = new $hs.Thunk();
                hs_sat26Dbql.evaluateOnce = function () {
                    var hs_sat26Dbqk = new $hs.Data(1);
                    hs_sat26Dbqk.data = ["-"];
                    return $hs.modules.GHCziShow.hs_showChar.hscall(hs_sat26Dbqk);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dbql, hs_sat26Dbqj);
            };
            var hs_sat26Dbqo = new $hs.Thunk();
            hs_sat26Dbqo.evaluateOnce = function () {
                var hs_sat26Dbqn = new $hs.Data(1);
                hs_sat26Dbqn.data = [6];
                return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_eta126DaHW, hs_sat26Dbqn);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26Dbqo, hs_sat26Dbqm);
        }
    };
    this.hs_realToFrac.evaluate = function (hs_zddReal2226DaI8, hs_zddFractional626DaI6) {
        var hs_sat26Dbqp = new $hs.Thunk();
        hs_sat26Dbqp.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toRational.hscall(hs_zddReal2226DaI8);
        };
        var hs_sat26Dbqq = new $hs.Thunk();
        hs_sat26Dbqq.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromRational.hscall(hs_zddFractional626DaI6);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dbqq, hs_sat26Dbqp);
    };
    this.hs_fromIntegral.evaluate = function (hs_zddIntegral26DaIe, hs_zddNum3126DaIc) {
        var hs_sat26Dbqr = new $hs.Thunk();
        hs_sat26Dbqr.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26DaIe);
        };
        var hs_sat26Dbqs = new $hs.Thunk();
        hs_sat26Dbqs.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaIc);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dbqs, hs_sat26Dbqr);
    };
    this.hs_numericEnumFromThen.evaluate = function (hs_zddFractional626DaIk, hs_eta26DaIm, hs_eta126DaIo) {
        var hs_zddNum3126DaIl = new $hs.Thunk();
        hs_zddNum3126DaIl.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional626DaIk);
        };
        var hs_n26DaIq = hs_eta26DaIm;
        if (hs_eta26DaIm.notEvaluated) {
            hs_n26DaIq = hs_eta26DaIm.hscall();
        }
        var hs_m26DaIr = hs_eta126DaIo;
        if (hs_eta126DaIo.notEvaluated) {
            hs_m26DaIr = hs_eta126DaIo.hscall();
        }
        var hs_sat26Dbqv = new $hs.Thunk();
        hs_sat26Dbqv.evaluateOnce = function () {
            var hs_sat26Dbqu = new $hs.Thunk();
            hs_sat26Dbqu.evaluateOnce = function () {
                var hs_sat26Dbqt = new $hs.Thunk();
                hs_sat26Dbqt.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum3126DaIl, hs_m26DaIr, hs_m26DaIr);
                };
                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum3126DaIl, hs_sat26Dbqt, hs_n26DaIq);
            };
            return $hs.modules.GHCziReal.hs_numericEnumFromThen.hscall(hs_zddFractional626DaIk, hs_m26DaIr, hs_sat26Dbqu);
        };
        var $res = new $hs.Data(2);
        $res.data = [hs_n26DaIq, hs_sat26Dbqv];
        return $res;
    };
    this.hs_numericEnumFromThenTo.evaluate = function (hs_zddOrd1726DaIK, hs_zddFractional626DaIB, hs_eta26DaIF, hs_eta126DaIE, hs_eta226DaIN) {
        var hs_zddNum3126DaIC = new $hs.Thunk();
        hs_zddNum3126DaIC.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional626DaIB);
        };
        var hs_mid26DaIJ = new $hs.Thunk();
        hs_mid26DaIJ.evaluateOnce = function () {
            var hs_sat26Dbqx = new $hs.Thunk();
            hs_sat26Dbqx.evaluateOnce = function () {
                var hs_sat26Dbqw = new $hs.Thunk();
                hs_sat26Dbqw.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaIC, hs_sat26Dbqw);
            };
            var hs_sat26Dbqy = new $hs.Thunk();
            hs_sat26Dbqy.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum3126DaIC, hs_eta126DaIE, hs_eta26DaIF);
            };
            return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional626DaIB, hs_sat26Dbqy, hs_sat26Dbqx);
        };
        var hs_sat26DbqA = new $hs.Thunk();
        hs_sat26DbqA.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_numericEnumFromThen.hscall(hs_zddFractional626DaIB, hs_eta26DaIF, hs_eta126DaIE);
        };
        var hs_sat26DbqD = new $hs.Thunk();
        hs_sat26DbqD.evaluateOnce = function () {
            var hs_wild26Dbqz = $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd1726DaIK, hs_eta126DaIE, hs_eta26DaIF);
            switch (hs_wild26Dbqz.tag) {
            case 1:
                var hs_ds26DaIO = new $hs.Thunk();
                hs_ds26DaIO.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum3126DaIC, hs_eta226DaIN, hs_mid26DaIJ);
                };
                var hs_sat26DbqB = new $hs.Func(1);
                hs_sat26DbqB.evaluate = function (hs_ds126DaIQ) {
                    return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd1726DaIK, hs_ds126DaIQ, hs_ds26DaIO);
                };
                if (hs_sat26DbqB.notEvaluated) {
                    return hs_sat26DbqB.hscall();
                } else {
                    return hs_sat26DbqB;
                }
            case 2:
                var hs_ds26DaIT = new $hs.Thunk();
                hs_ds26DaIT.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum3126DaIC, hs_eta226DaIN, hs_mid26DaIJ);
                };
                var hs_sat26DbqC = new $hs.Func(1);
                hs_sat26DbqC.evaluate = function (hs_ds126DaIV) {
                    return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1726DaIK, hs_ds126DaIV, hs_ds26DaIT);
                };
                if (hs_sat26DbqC.notEvaluated) {
                    return hs_sat26DbqC.hscall();
                } else {
                    return hs_sat26DbqC;
                }
            }
        };
        return $hs.modules.GHCziList.hs_takeWhile.hscall(hs_sat26DbqD, hs_sat26DbqA);
    };
    this.hs_numericEnumFrom.evaluate = function (hs_zddFractional626DaJ2, hs_eta26DaJ4) {
        var hs_zddNum3126DaJ3 = new $hs.Thunk();
        hs_zddNum3126DaJ3.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional626DaJ2);
        };
        var hs_n26DaJ6 = hs_eta26DaJ4;
        if (hs_eta26DaJ4.notEvaluated) {
            hs_n26DaJ6 = hs_eta26DaJ4.hscall();
        }
        var hs_sat26DbqH = new $hs.Thunk();
        hs_sat26DbqH.evaluateOnce = function () {
            var hs_sat26DbqG = new $hs.Thunk();
            hs_sat26DbqG.evaluateOnce = function () {
                var hs_sat26DbqF = new $hs.Thunk();
                hs_sat26DbqF.evaluateOnce = function () {
                    var hs_sat26DbqE = new $hs.Thunk();
                    hs_sat26DbqE.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaJ3, hs_sat26DbqE);
                };
                return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum3126DaJ3, hs_n26DaJ6, hs_sat26DbqF);
            };
            return $hs.modules.GHCziReal.hs_numericEnumFrom.hscall(hs_zddFractional626DaJ2, hs_sat26DbqG);
        };
        var $res = new $hs.Data(2);
        $res.data = [hs_n26DaJ6, hs_sat26DbqH];
        return $res;
    };
    this.hs_numericEnumFromTo.evaluate = function (hs_zddOrd1726DaJr, hs_zddFractional626DaJg, hs_eta26DaJu, hs_eta126DaJj) {
        var hs_zddNum3126DaJh = new $hs.Thunk();
        hs_zddNum3126DaJh.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional626DaJg);
        };
        var hs_sat26DbqI = new $hs.Thunk();
        hs_sat26DbqI.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_numericEnumFrom.hscall(hs_zddFractional626DaJg, hs_eta26DaJu);
        };
        var hs_ds26DaJp = new $hs.Thunk();
        hs_ds26DaJp.evaluateOnce = function () {
            var hs_sat26DbqN = new $hs.Thunk();
            hs_sat26DbqN.evaluateOnce = function () {
                var hs_sat26DbqK = new $hs.Thunk();
                hs_sat26DbqK.evaluateOnce = function () {
                    var hs_sat26DbqJ = new $hs.Thunk();
                    hs_sat26DbqJ.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaJh, hs_sat26DbqJ);
                };
                var hs_sat26DbqM = new $hs.Thunk();
                hs_sat26DbqM.evaluateOnce = function () {
                    var hs_sat26DbqL = new $hs.Thunk();
                    hs_sat26DbqL.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaJh, hs_sat26DbqL);
                };
                return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional626DaJg, hs_sat26DbqM, hs_sat26DbqK);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum3126DaJh, hs_eta126DaJj, hs_sat26DbqN);
        };
        var hs_sat26DbqO = new $hs.Func(1);
        hs_sat26DbqO.evaluate = function (hs_ds126DaJs) {
            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1726DaJr, hs_ds126DaJs, hs_ds26DaJp);
        };
        return $hs.modules.GHCziList.hs_takeWhile.hscall(hs_sat26DbqO, hs_sat26DbqI);
    };
    this.hs_denominator.evaluate = function (hs_zddIntegral26DaJD, hs_ds26DaJy) {
        var hs_wild26DbqQ = hs_ds26DaJy;
        if (hs_ds26DaJy.notEvaluated) {
            hs_wild26DbqQ = hs_ds26DaJy.hscall();
        }
        var hs_y26DaJC = hs_wild26DbqQ.data[1];
        if (hs_y26DaJC.notEvaluated) {
            return hs_y26DaJC.hscall();
        } else {
            return hs_y26DaJC;
        }
    };
    this.hs_numerator.evaluate = function (hs_zddIntegral26DaJL, hs_ds26DaJG) {
        var hs_wild26DbqR = hs_ds26DaJG;
        if (hs_ds26DaJG.notEvaluated) {
            hs_wild26DbqR = hs_ds26DaJG.hscall();
        }
        var hs_x26DaJK = hs_wild26DbqR.data[0];
        if (hs_x26DaJK.notEvaluated) {
            return hs_x26DaJK.hscall();
        } else {
            return hs_x26DaJK;
        }
    };
    this.hs_notANumber.evaluateOnce = function () {
        var hs_tpl26DaJO = $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        var hs_tpl126DaJP = $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DaJO, hs_tpl126DaJP];
        return $res;
    };
    this.hs_infinity.evaluateOnce = function () {
        var hs_tpl26DaJS = $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        var hs_tpl126DaJT = $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DaJS, hs_tpl126DaJT];
        return $res;
    };
    this.hs_ratioPrec.data = [7];
    hs_zdctoInteger25uMdF.evaluate = function (hs_ds26DaJX) {
        var hs_wild26DbqT = hs_ds26DaJX;
        if (hs_ds26DaJX.notEvaluated) {
            hs_wild26DbqT = hs_ds26DaJX.hscall();
        }
        var hs_i26DaK0 = hs_wild26DbqT.data[0];
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_i26DaK0);
    };
    hs_zdcdivMod25uMdM.evaluate = function (hs_a4426DaK8, hs_b26DaK5) {
        var hs_sat26DbqV = new $hs.Data(1);
        hs_sat26DbqV.data = [0];
        var hs_wild26DbqU = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_b26DaK5, hs_sat26DbqV);
        switch (hs_wild26DbqU.tag) {
        case 1:
            var hs_sat26DbqY = new $hs.Thunk();
            hs_sat26DbqY.evaluateOnce = function () {
                var hs_sat26DbqX = new $hs.Thunk();
                hs_sat26DbqX.evaluateOnce = function () {
                    var hs_sat26DbqW = new $hs.Data(1);
                    hs_sat26DbqW.data = [1];
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DbqW);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_b26DaK5, hs_sat26DbqX);
            };
            var hs_sat26Dbr1 = new $hs.Thunk();
            hs_sat26Dbr1.evaluateOnce = function () {
                var hs_sat26DbqZ = new $hs.Thunk();
                hs_sat26DbqZ.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_a4426DaK8, hs_sat26DbqZ);
            };
            var hs_wild126Dbr0 = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dbr1, hs_sat26DbqY);
            switch (hs_wild126Dbr0.tag) {
            case 1:
                return $hs.modules.GHCziNum.hs_divModInt.hscall(hs_a4426DaK8, hs_b26DaK5);
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcquotRem25uMe0.evaluate = function (hs_a4426DaKm, hs_b26DaKj) {
        var hs_sat26Dbr3 = new $hs.Data(1);
        hs_sat26Dbr3.data = [0];
        var hs_wild26Dbr2 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_b26DaKj, hs_sat26Dbr3);
        switch (hs_wild26Dbr2.tag) {
        case 1:
            var hs_sat26Dbr6 = new $hs.Thunk();
            hs_sat26Dbr6.evaluateOnce = function () {
                var hs_sat26Dbr5 = new $hs.Thunk();
                hs_sat26Dbr5.evaluateOnce = function () {
                    var hs_sat26Dbr4 = new $hs.Data(1);
                    hs_sat26Dbr4.data = [1];
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dbr4);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_b26DaKj, hs_sat26Dbr5);
            };
            var hs_sat26Dbr9 = new $hs.Thunk();
            hs_sat26Dbr9.evaluateOnce = function () {
                var hs_sat26Dbr7 = new $hs.Thunk();
                hs_sat26Dbr7.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_a4426DaKm, hs_sat26Dbr7);
            };
            var hs_wild126Dbr8 = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dbr9, hs_sat26Dbr6);
            switch (hs_wild126Dbr8.tag) {
            case 1:
                return $hs.modules.GHCziNum.hs_quotRemInt.hscall(hs_a4426DaKm, hs_b26DaKj);
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcmod25uMee.evaluate = function (hs_a4426DaKA, hs_b26DaKx) {
        var hs_sat26Dbrb = new $hs.Data(1);
        hs_sat26Dbrb.data = [0];
        var hs_wild26Dbra = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_b26DaKx, hs_sat26Dbrb);
        switch (hs_wild26Dbra.tag) {
        case 1:
            var hs_sat26Dbre = new $hs.Thunk();
            hs_sat26Dbre.evaluateOnce = function () {
                var hs_sat26Dbrd = new $hs.Thunk();
                hs_sat26Dbrd.evaluateOnce = function () {
                    var hs_sat26Dbrc = new $hs.Data(1);
                    hs_sat26Dbrc.data = [1];
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dbrc);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_b26DaKx, hs_sat26Dbrd);
            };
            var hs_sat26Dbrh = new $hs.Thunk();
            hs_sat26Dbrh.evaluateOnce = function () {
                var hs_sat26Dbrf = new $hs.Thunk();
                hs_sat26Dbrf.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_a4426DaKA, hs_sat26Dbrf);
            };
            var hs_wild126Dbrg = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dbrh, hs_sat26Dbre);
            switch (hs_wild126Dbrg.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_modInt.hscall(hs_a4426DaKA, hs_b26DaKx);
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcdiv25uMes.evaluate = function (hs_a4426DaKO, hs_b26DaKL) {
        var hs_sat26Dbrj = new $hs.Data(1);
        hs_sat26Dbrj.data = [0];
        var hs_wild26Dbri = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_b26DaKL, hs_sat26Dbrj);
        switch (hs_wild26Dbri.tag) {
        case 1:
            var hs_sat26Dbrm = new $hs.Thunk();
            hs_sat26Dbrm.evaluateOnce = function () {
                var hs_sat26Dbrl = new $hs.Thunk();
                hs_sat26Dbrl.evaluateOnce = function () {
                    var hs_sat26Dbrk = new $hs.Data(1);
                    hs_sat26Dbrk.data = [1];
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dbrk);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_b26DaKL, hs_sat26Dbrl);
            };
            var hs_sat26Dbrp = new $hs.Thunk();
            hs_sat26Dbrp.evaluateOnce = function () {
                var hs_sat26Dbrn = new $hs.Thunk();
                hs_sat26Dbrn.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_a4426DaKO, hs_sat26Dbrn);
            };
            var hs_wild126Dbro = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dbrp, hs_sat26Dbrm);
            switch (hs_wild126Dbro.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_divInt.hscall(hs_a4426DaKO, hs_b26DaKL);
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcrem25uMeG.evaluate = function (hs_a4426DaL2, hs_b26DaKZ) {
        var hs_sat26Dbrr = new $hs.Data(1);
        hs_sat26Dbrr.data = [0];
        var hs_wild26Dbrq = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_b26DaKZ, hs_sat26Dbrr);
        switch (hs_wild26Dbrq.tag) {
        case 1:
            var hs_sat26Dbru = new $hs.Thunk();
            hs_sat26Dbru.evaluateOnce = function () {
                var hs_sat26Dbrt = new $hs.Thunk();
                hs_sat26Dbrt.evaluateOnce = function () {
                    var hs_sat26Dbrs = new $hs.Data(1);
                    hs_sat26Dbrs.data = [1];
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dbrs);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_b26DaKZ, hs_sat26Dbrt);
            };
            var hs_sat26Dbrx = new $hs.Thunk();
            hs_sat26Dbrx.evaluateOnce = function () {
                var hs_sat26Dbrv = new $hs.Thunk();
                hs_sat26Dbrv.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_a4426DaL2, hs_sat26Dbrv);
            };
            var hs_wild126Dbrw = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dbrx, hs_sat26Dbru);
            switch (hs_wild126Dbrw.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_remInt.hscall(hs_a4426DaL2, hs_b26DaKZ);
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcquot25uMeU.evaluate = function (hs_a4426DaLg, hs_b26DaLd) {
        var hs_sat26Dbrz = new $hs.Data(1);
        hs_sat26Dbrz.data = [0];
        var hs_wild26Dbry = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_b26DaLd, hs_sat26Dbrz);
        switch (hs_wild26Dbry.tag) {
        case 1:
            var hs_sat26DbrC = new $hs.Thunk();
            hs_sat26DbrC.evaluateOnce = function () {
                var hs_sat26DbrB = new $hs.Thunk();
                hs_sat26DbrB.evaluateOnce = function () {
                    var hs_sat26DbrA = new $hs.Data(1);
                    hs_sat26DbrA.data = [1];
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DbrA);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_b26DaLd, hs_sat26DbrB);
            };
            var hs_sat26DbrF = new $hs.Thunk();
            hs_sat26DbrF.evaluateOnce = function () {
                var hs_sat26DbrD = new $hs.Thunk();
                hs_sat26DbrD.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_a4426DaLg, hs_sat26DbrD);
            };
            var hs_wild126DbrE = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DbrF, hs_sat26DbrC);
            switch (hs_wild126DbrE.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_quotInt.hscall(hs_a4426DaLg, hs_b26DaLd);
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdctoInteger125uMf8.evaluate = function (hs_n26DaLq) {
        if (hs_n26DaLq.notEvaluated) {
            return hs_n26DaLq.hscall();
        } else {
            return hs_n26DaLq;
        }
    };
    hs_zdcdivMod125uMfc.evaluate = function (hs_ds26DaLy, hs_ds126DaLv) {
        var hs_sat26DbrI = new $hs.Thunk();
        hs_sat26DbrI.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_wild26DbrH = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_ds126DaLv, hs_sat26DbrI);
        switch (hs_wild26DbrH.tag) {
        case 1:
            var hs_wild126DbrG = $hs.modules.GHCziInteger.hs_divModInteger.hscall(hs_ds26DaLy, hs_ds126DaLv);
            var hs_x26DaLC = hs_wild126DbrG[0];
            var hs_y26DaLD = hs_wild126DbrG[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_x26DaLC, hs_y26DaLD];
            return $res;
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcquotRem125uMfp.evaluate = function (hs_ds26DaLL, hs_ds126DaLI) {
        var hs_sat26DbrL = new $hs.Thunk();
        hs_sat26DbrL.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_wild26DbrK = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_ds126DaLI, hs_sat26DbrL);
        switch (hs_wild26DbrK.tag) {
        case 1:
            var hs_wild126DbrJ = $hs.modules.GHCziInteger.hs_quotRemInteger.hscall(hs_ds26DaLL, hs_ds126DaLI);
            var hs_q26DaLP = hs_wild126DbrJ[0];
            var hs_r26DaLQ = hs_wild126DbrJ[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_q26DaLP, hs_r26DaLQ];
            return $res;
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcrem125uMfC.evaluate = function (hs_ds26DaLY, hs_ds126DaLV) {
        var hs_sat26DbrN = new $hs.Thunk();
        hs_sat26DbrN.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_wild26DbrM = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_ds126DaLV, hs_sat26DbrN);
        switch (hs_wild26DbrM.tag) {
        case 1:
            return $hs.modules.GHCziInteger.hs_remInteger.hscall(hs_ds26DaLY, hs_ds126DaLV);
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcquot125uMfK.evaluate = function (hs_ds26DaM6, hs_ds126DaM3) {
        var hs_sat26DbrP = new $hs.Thunk();
        hs_sat26DbrP.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_wild26DbrO = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_ds126DaM3, hs_sat26DbrP);
        switch (hs_wild26DbrO.tag) {
        case 1:
            return $hs.modules.GHCziInteger.hs_quotInteger.hscall(hs_ds26DaM6, hs_ds126DaM3);
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdczeze25uMfS.evaluate = function (hs_zddIntegral26DaMd, hs_eta26DaMj, hs_eta126DaMn) {
        var hs_zddReal2226DaMe = new $hs.Thunk();
        hs_zddReal2226DaMe.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DaMd);
        };
        var hs_zddNum3126DaMg = new $hs.Thunk();
        hs_zddNum3126DaMg.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226DaMe);
        };
        var hs_zddEq1526DaMi = new $hs.Thunk();
        hs_zddEq1526DaMi.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum3126DaMg);
        };
        var hs_wild26DbrR = hs_eta26DaMj;
        if (hs_eta26DaMj.notEvaluated) {
            hs_wild26DbrR = hs_eta26DaMj.hscall();
        }
        var hs_a4426DaMr = hs_wild26DbrR.data[0];
        var hs_a4526DaMu = hs_wild26DbrR.data[1];
        var hs_wild126DbrQ = hs_eta126DaMn;
        if (hs_eta126DaMn.notEvaluated) {
            hs_wild126DbrQ = hs_eta126DaMn.hscall();
        }
        var hs_b126DaMs = hs_wild126DbrQ.data[0];
        var hs_b226DaMv = hs_wild126DbrQ.data[1];
        var hs_sat26DbrS = new $hs.Thunk();
        hs_sat26DbrS.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1526DaMi, hs_a4526DaMu, hs_b226DaMv);
        };
        var hs_sat26DbrT = new $hs.Thunk();
        hs_sat26DbrT.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1526DaMi, hs_a4426DaMr, hs_b126DaMs);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DbrT, hs_sat26DbrS);
    };
    this.hs_zdfEqRatio.evaluate = function (hs_zddIntegral26DaMA) {
        var hs_sat26DbrU = new $hs.Thunk();
        hs_sat26DbrU.evaluateOnce = function () {
            return hs_zdczsze25uMgi.hscall(hs_zddIntegral26DaMA);
        };
        var hs_sat26DbrV = new $hs.Func(2);
        hs_sat26DbrV.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze25uMfS.hscall(hs_zddIntegral26DaMA, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DbrV, hs_sat26DbrU];
        return $res;
    };
    hs_zdczsze25uMgi.evaluate = function (hs_zddIntegral26DaMF) {
        var hs_zddEq1526DaMG = new $hs.Thunk();
        hs_zddEq1526DaMG.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall(hs_zddIntegral26DaMF);
        };
        var hs_sat26DbrX = new $hs.Func(2);
        hs_sat26DbrX.evaluate = function (hs_a4426DaMJ, hs_b26DaMK) {
            var hs_sat26DbrW = new $hs.Thunk();
            hs_sat26DbrW.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1526DaMG, hs_a4426DaMJ, hs_b26DaMK);
            };
            return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DbrW);
        };
        if (hs_sat26DbrX.notEvaluated) {
            return hs_sat26DbrX.hscall();
        } else {
            return hs_sat26DbrX;
        }
    };
    hs_sat26DbrY.data = [1];
    this.hs_ratioPrec1.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, $hs.modules.GHCziReal.hs_ratioPrec, hs_sat26DbrY);
    };
    this.hs_reduce.evaluate = function (hs_zddIntegral26DaNc, hs_eta26DaNm, hs_eta126DaNh) {
        var hs_zddReal2226DaNd = new $hs.Thunk();
        hs_zddReal2226DaNd.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DaNc);
        };
        var hs_zddNum3126DaNf = new $hs.Thunk();
        hs_zddNum3126DaNf.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226DaNd);
        };
        var hs_sat26Dbs2 = new $hs.Thunk();
        hs_sat26Dbs2.evaluateOnce = function () {
            var hs_sat26DbrZ = new $hs.Thunk();
            hs_sat26DbrZ.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaNf, hs_sat26DbrZ);
        };
        var hs_sat26Dbs1 = $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum3126DaNf);
        var hs_wild26Dbs0 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26Dbs1, hs_eta126DaNh, hs_sat26Dbs2);
        switch (hs_wild26Dbs0.tag) {
        case 1:
            var hs_d26DaNn = new $hs.Thunk();
            hs_d26DaNn.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_gcd.hscall(hs_zddIntegral26DaNc, hs_eta26DaNm, hs_eta126DaNh);
            };
            var hs_tpl26DaNq = $hs.modules.GHCziReal.hs_quot.hscall(hs_zddIntegral26DaNc, hs_eta26DaNm, hs_d26DaNn);
            var hs_tpl126DaNr = $hs.modules.GHCziReal.hs_quot.hscall(hs_zddIntegral26DaNc, hs_eta126DaNh, hs_d26DaNn);
            var $res = new $hs.Data(1);
            $res.data = [hs_tpl26DaNq, hs_tpl126DaNr];
            return $res;
        case 2:
            var hs_sat26Dbs3 = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Ratio.%: zero denominator\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dbs3);
        }
    };
    this.hs_zv.evaluate = function (hs_zddIntegral26DaNx, hs_eta26DaNB, hs_eta126DaNC) {
        var hs_zddReal2226DaNy = new $hs.Thunk();
        hs_zddReal2226DaNy.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DaNx);
        };
        var hs_zddNum3126DaNA = new $hs.Thunk();
        hs_zddNum3126DaNA.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226DaNy);
        };
        var hs_sat26Dbs4 = new $hs.Thunk();
        hs_sat26Dbs4.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_abs.hscall(hs_zddNum3126DaNA, hs_eta126DaNC);
        };
        var hs_sat26Dbs6 = new $hs.Thunk();
        hs_sat26Dbs6.evaluateOnce = function () {
            var hs_sat26Dbs5 = new $hs.Thunk();
            hs_sat26Dbs5.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_signum.hscall(hs_zddNum3126DaNA, hs_eta126DaNC);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum3126DaNA, hs_eta26DaNB, hs_sat26Dbs5);
        };
        return $hs.modules.GHCziReal.hs_reduce.hscall(hs_zddIntegral26DaNx, hs_sat26Dbs6, hs_sat26Dbs4);
    };
    this.hs_zdfRealInteger.data = [$hs.modules.GHCziNum.hs_zdfNumInteger, $hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_zdctoRational25uMgD];
    this.hs_zdfIntegralInteger.data = [$hs.modules.GHCziReal.hs_zdfRealInteger, $hs.modules.GHCziNum.hs_zdfEnumInteger, hs_zdcquot125uMfK, hs_zdcrem125uMfC, hs_zdcdiv125uMgB, hs_zdcmod125uMgz, hs_zdcquotRem125uMfp, hs_zdcdivMod125uMfc, hs_zdctoInteger125uMf8];
    hs_zdcmod125uMgz.evaluate = function (hs_eta26DaNI, hs_eta126DaNJ) {
        var hs_wild26Dbs8 = $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta26DaNI, hs_eta126DaNJ);
        var hs_r26DaNN = hs_wild26Dbs8.data[1];
        if (hs_r26DaNN.notEvaluated) {
            return hs_r26DaNN.hscall();
        } else {
            return hs_r26DaNN;
        }
    };
    hs_zdcdiv125uMgB.evaluate = function (hs_eta26DaNQ, hs_eta126DaNR) {
        var hs_wild26Dbs9 = $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta26DaNQ, hs_eta126DaNR);
        var hs_q26DaNV = hs_wild26Dbs9.data[0];
        if (hs_q26DaNV.notEvaluated) {
            return hs_q26DaNV.hscall();
        } else {
            return hs_q26DaNV;
        }
    };
    hs_zdctoRational25uMgD.evaluate = function (hs_x26DaNX) {
        var hs_sat26Dbsb = new $hs.Thunk();
        hs_sat26Dbsb.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_x26DaNX, hs_sat26Dbsb);
    };
    hs_zddReal25uMgF.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum25uMgH.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal25uMgF);
    };
    hs_zddReal125uMgJ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum125uMgL.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal125uMgJ);
    };
    hs_zv125uMgN.evaluate = function (hs_x26DaO1, hs_y26DaO2) {
        var hs_sat26Dbsc = new $hs.Thunk();
        hs_sat26Dbsc.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_abs.hscall(hs_zddNum25uMgH, hs_y26DaO2);
        };
        var hs_sat26Dbse = new $hs.Thunk();
        hs_sat26Dbse.evaluateOnce = function () {
            var hs_sat26Dbsd = new $hs.Thunk();
            hs_sat26Dbsd.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_signum.hscall(hs_zddNum25uMgH, hs_y26DaO2);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum25uMgH, hs_x26DaO1, hs_sat26Dbsd);
        };
        return $hs.modules.GHCziReal.hs_reduce.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26Dbse, hs_sat26Dbsc);
    };
    hs_zddEq25uMgP.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum125uMgL);
    };
    hs_reduce125uMgR.evaluate = function (hs_ds26DaOd, hs_ds126DaO8) {
        var hs_sat26Dbsh = new $hs.Thunk();
        hs_sat26Dbsh.evaluateOnce = function () {
            var hs_sat26Dbsf = new $hs.Thunk();
            hs_sat26Dbsf.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum125uMgL, hs_sat26Dbsf);
        };
        var hs_wild26Dbsg = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq25uMgP, hs_ds126DaO8, hs_sat26Dbsh);
        switch (hs_wild26Dbsg.tag) {
        case 1:
            var hs_d26DaOe = new $hs.Thunk();
            hs_d26DaOe.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_gcd.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_ds26DaOd, hs_ds126DaO8);
            };
            var hs_tpl26DaOh = $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_ds26DaOd, hs_d26DaOe);
            var hs_tpl126DaOi = $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_ds126DaO8, hs_d26DaOe);
            var $res = new $hs.Data(1);
            $res.data = [hs_tpl26DaOh, hs_tpl126DaOi];
            return $res;
        case 2:
            var hs_sat26Dbsi = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Ratio.%: zero denominator\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dbsi);
        }
    };
    hs_zddReal225uMi5.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum225uMi7.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal225uMi5);
    };
    hs_zddShow25uMi9.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zdp2Num.hscall(hs_zddNum225uMi7);
    };
    hs_zdcshowsPrec25uMib.evaluate = function (hs_p26DaOy, hs_ds26DaOu) {
        var hs_wild26Dbsj = hs_ds26DaOu;
        if (hs_ds26DaOu.notEvaluated) {
            hs_wild26Dbsj = hs_ds26DaOu.hscall();
        }
        var hs_x26DaOB = hs_wild26Dbsj.data[0];
        var hs_y26DaOF = hs_wild26Dbsj.data[1];
        var hs_sat26Dbsp = new $hs.Thunk();
        hs_sat26Dbsp.evaluateOnce = function () {
            var hs_sat26Dbsn = new $hs.Thunk();
            hs_sat26Dbsn.evaluateOnce = function () {
                var hs_sat26Dbsk = new $hs.Thunk();
                hs_sat26Dbsk.evaluateOnce = function () {
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow25uMi9, $hs.modules.GHCziReal.hs_ratioPrec1, hs_y26DaOF);
                };
                var hs_sat26Dbsm = new $hs.Thunk();
                hs_sat26Dbsm.evaluateOnce = function () {
                    var hs_sat26Dbsl = new $hs.Thunk();
                    hs_sat26Dbsl.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(" % \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dbsl);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dbsm, hs_sat26Dbsk);
            };
            var hs_sat26Dbso = new $hs.Thunk();
            hs_sat26Dbso.evaluateOnce = function () {
                return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow25uMi9, $hs.modules.GHCziReal.hs_ratioPrec1, hs_x26DaOB);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dbso, hs_sat26Dbsn);
        };
        var hs_sat26Dbsr = new $hs.Thunk();
        hs_sat26Dbsr.evaluateOnce = function () {
            var hs_sat26Dbsq = new $hs.Thunk();
            hs_sat26Dbsq.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_p26DaOy, $hs.modules.GHCziReal.hs_ratioPrec);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26Dbsq);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dbsr, hs_sat26Dbsp);
    };
    hs_zdcshowsPrec125uMiu.evaluate = function (hs_zddIntegral26DaOP, hs_eta26DaOZ, hs_eta126DaOV) {
        var hs_zddReal2226DaOQ = new $hs.Thunk();
        hs_zddReal2226DaOQ.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DaOP);
        };
        var hs_zddNum3126DaOS = new $hs.Thunk();
        hs_zddNum3126DaOS.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226DaOQ);
        };
        var hs_zddShow1126DaOU = new $hs.Thunk();
        hs_zddShow1126DaOU.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp2Num.hscall(hs_zddNum3126DaOS);
        };
        var hs_wild26Dbss = hs_eta126DaOV;
        if (hs_eta126DaOV.notEvaluated) {
            hs_wild26Dbss = hs_eta126DaOV.hscall();
        }
        var hs_x26DaP2 = hs_wild26Dbss.data[0];
        var hs_y26DaP6 = hs_wild26Dbss.data[1];
        var hs_sat26Dbsy = new $hs.Thunk();
        hs_sat26Dbsy.evaluateOnce = function () {
            var hs_sat26Dbsw = new $hs.Thunk();
            hs_sat26Dbsw.evaluateOnce = function () {
                var hs_sat26Dbst = new $hs.Thunk();
                hs_sat26Dbst.evaluateOnce = function () {
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1126DaOU, $hs.modules.GHCziReal.hs_ratioPrec1, hs_y26DaP6);
                };
                var hs_sat26Dbsv = new $hs.Thunk();
                hs_sat26Dbsv.evaluateOnce = function () {
                    var hs_sat26Dbsu = new $hs.Thunk();
                    hs_sat26Dbsu.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(" % \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dbsu);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dbsv, hs_sat26Dbst);
            };
            var hs_sat26Dbsx = new $hs.Thunk();
            hs_sat26Dbsx.evaluateOnce = function () {
                return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1126DaOU, $hs.modules.GHCziReal.hs_ratioPrec1, hs_x26DaP2);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dbsx, hs_sat26Dbsw);
        };
        var hs_sat26DbsA = new $hs.Thunk();
        hs_sat26DbsA.evaluateOnce = function () {
            var hs_sat26Dbsz = new $hs.Thunk();
            hs_sat26Dbsz.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_eta26DaOZ, $hs.modules.GHCziReal.hs_ratioPrec);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26Dbsz);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DbsA, hs_sat26Dbsy);
    };
    hs_a25uMiV.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_zdcshowsPrec125uMiu.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfShowRatio.evaluate = function (hs_zddIntegral26DaPv) {
        var hs_sat26DbsB = new $hs.Thunk();
        hs_sat26DbsB.evaluateOnce = function () {
            return hs_zdcshowList25uMiX.hscall(hs_zddIntegral26DaPv);
        };
        var hs_sat26DbsC = new $hs.Thunk();
        hs_sat26DbsC.evaluateOnce = function () {
            return hs_zdcshow25uMiZ.hscall(hs_zddIntegral26DaPv);
        };
        var hs_sat26DbsD = new $hs.Func(2);
        hs_sat26DbsD.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec125uMiu.hscall(hs_zddIntegral26DaPv, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DbsD, hs_sat26DbsC, hs_sat26DbsB];
        return $res;
    };
    hs_zdcshowList25uMiX.evaluate = function (hs_zddIntegral26DaPA) {
        var hs_sat26DbsE = new $hs.Thunk();
        hs_sat26DbsE.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall(hs_zddIntegral26DaPA);
        };
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall(hs_sat26DbsE);
    };
    hs_zdcshow25uMiZ.evaluate = function (hs_zddIntegral26DaPD) {
        var hs_sat26DbsF = new $hs.Thunk();
        hs_sat26DbsF.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall(hs_zddIntegral26DaPD);
        };
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_sat26DbsF);
    };
    hs_zddShow125uMj1.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdcshowList125uMj3.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall(hs_zddShow125uMj1);
    };
    hs_a125uMj5.evaluateOnce = function () {
        return hs_zdcshowList25uMiX.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a225uMj7.evaluateOnce = function () {
        return hs_zdcshow25uMiZ.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdfShowRatio125uMj9.data = [hs_a25uMiV, hs_a225uMj7, hs_a125uMj5];
    hs_zddShow225uMjb.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdcshow125uMjd.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_zddShow225uMjb);
    };
    hs_zddEq125uMjq.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddReal325uMjs.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum325uMju.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal325uMjs);
    };
    hs_zddOrd25uMjw.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal325uMjs);
    };
    hs_zdczl25uMjy.evaluate = function (hs_ds26DaPR, hs_ds126DaPV) {
        var hs_wild26DbsH = hs_ds26DaPR;
        if (hs_ds26DaPR.notEvaluated) {
            hs_wild26DbsH = hs_ds26DaPR.hscall();
        }
        var hs_x26DaPZ = hs_wild26DbsH.data[0];
        var hs_y26DaQ3 = hs_wild26DbsH.data[1];
        var hs_wild126DbsG = hs_ds126DaPV;
        if (hs_ds126DaPV.notEvaluated) {
            hs_wild126DbsG = hs_ds126DaPV.hscall();
        }
        var hs_xzq26DaQ2 = hs_wild126DbsG.data[0];
        var hs_yzq26DaQ0 = hs_wild126DbsG.data[1];
        var hs_sat26DbsI = new $hs.Thunk();
        hs_sat26DbsI.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum325uMju, hs_xzq26DaQ2, hs_y26DaQ3);
        };
        var hs_sat26DbsJ = new $hs.Thunk();
        hs_sat26DbsJ.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum325uMju, hs_x26DaPZ, hs_yzq26DaQ0);
        };
        return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd25uMjw, hs_sat26DbsJ, hs_sat26DbsI);
    };
    hs_zdczl125uMjQ.evaluate = function (hs_zddEq1526DaQv, hs_zddIntegral26DaQc, hs_eta26DaQg, hs_eta126DaQk) {
        var hs_zddReal2226DaQd = new $hs.Thunk();
        hs_zddReal2226DaQd.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DaQc);
        };
        var hs_zddNum3126DaQf = new $hs.Thunk();
        hs_zddNum3126DaQf.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226DaQd);
        };
        var hs_wild26DbsL = hs_eta26DaQg;
        if (hs_eta26DaQg.notEvaluated) {
            hs_wild26DbsL = hs_eta26DaQg.hscall();
        }
        var hs_x26DaQp = hs_wild26DbsL.data[0];
        var hs_y26DaQt = hs_wild26DbsL.data[1];
        var hs_wild126DbsK = hs_eta126DaQk;
        if (hs_eta126DaQk.notEvaluated) {
            hs_wild126DbsK = hs_eta126DaQk.hscall();
        }
        var hs_xzq26DaQs = hs_wild126DbsK.data[0];
        var hs_yzq26DaQq = hs_wild126DbsK.data[1];
        var hs_sat26DbsM = new $hs.Thunk();
        hs_sat26DbsM.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum3126DaQf, hs_xzq26DaQs, hs_y26DaQt);
        };
        var hs_sat26DbsO = new $hs.Thunk();
        hs_sat26DbsO.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum3126DaQf, hs_x26DaQp, hs_yzq26DaQq);
        };
        var hs_sat26DbsN = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2226DaQd);
        return $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26DbsN, hs_sat26DbsO, hs_sat26DbsM);
    };
    hs_zddReal425uMkh.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum425uMkj.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal425uMkh);
    };
    hs_zddOrd125uMkl.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal425uMkh);
    };
    hs_zdczlze25uMkn.evaluate = function (hs_ds26DaQG, hs_ds126DaQK) {
        var hs_wild26DbsQ = hs_ds26DaQG;
        if (hs_ds26DaQG.notEvaluated) {
            hs_wild26DbsQ = hs_ds26DaQG.hscall();
        }
        var hs_x26DaQO = hs_wild26DbsQ.data[0];
        var hs_y26DaQS = hs_wild26DbsQ.data[1];
        var hs_wild126DbsP = hs_ds126DaQK;
        if (hs_ds126DaQK.notEvaluated) {
            hs_wild126DbsP = hs_ds126DaQK.hscall();
        }
        var hs_xzq26DaQR = hs_wild126DbsP.data[0];
        var hs_yzq26DaQP = hs_wild126DbsP.data[1];
        var hs_sat26DbsR = new $hs.Thunk();
        hs_sat26DbsR.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum425uMkj, hs_xzq26DaQR, hs_y26DaQS);
        };
        var hs_sat26DbsS = new $hs.Thunk();
        hs_sat26DbsS.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum425uMkj, hs_x26DaQO, hs_yzq26DaQP);
        };
        return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd125uMkl, hs_sat26DbsS, hs_sat26DbsR);
    };
    hs_zdczlze125uMkF.evaluate = function (hs_zddEq1526DaRk, hs_zddIntegral26DaR1, hs_eta26DaR5, hs_eta126DaR9) {
        var hs_zddReal2226DaR2 = new $hs.Thunk();
        hs_zddReal2226DaR2.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DaR1);
        };
        var hs_zddNum3126DaR4 = new $hs.Thunk();
        hs_zddNum3126DaR4.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226DaR2);
        };
        var hs_wild26DbsU = hs_eta26DaR5;
        if (hs_eta26DaR5.notEvaluated) {
            hs_wild26DbsU = hs_eta26DaR5.hscall();
        }
        var hs_x26DaRe = hs_wild26DbsU.data[0];
        var hs_y26DaRi = hs_wild26DbsU.data[1];
        var hs_wild126DbsT = hs_eta126DaR9;
        if (hs_eta126DaR9.notEvaluated) {
            hs_wild126DbsT = hs_eta126DaR9.hscall();
        }
        var hs_xzq26DaRh = hs_wild126DbsT.data[0];
        var hs_yzq26DaRf = hs_wild126DbsT.data[1];
        var hs_sat26DbsV = new $hs.Thunk();
        hs_sat26DbsV.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum3126DaR4, hs_xzq26DaRh, hs_y26DaRi);
        };
        var hs_sat26DbsX = new $hs.Thunk();
        hs_sat26DbsX.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum3126DaR4, hs_x26DaRe, hs_yzq26DaRf);
        };
        var hs_sat26DbsW = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2226DaR2);
        return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_sat26DbsW, hs_sat26DbsX, hs_sat26DbsV);
    };
    hs_a325uMl6.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_zdczlze125uMkF.hscall(hs_zddEq125uMjq, $hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a425uMl8.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_zdczl125uMjQ.hscall(hs_zddEq125uMjq, $hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfOrdRatio.evaluate = function (hs_zddEq1526DaS7, hs_zddIntegral26DaS8) {
        var hs_sat26DbsY = new $hs.Thunk();
        hs_sat26DbsY.evaluateOnce = function () {
            return hs_zdcmin25uMla.hscall(hs_zddEq1526DaS7, hs_zddIntegral26DaS8);
        };
        var hs_sat26DbsZ = new $hs.Thunk();
        hs_sat26DbsZ.evaluateOnce = function () {
            return hs_zdcmax25uMlc.hscall(hs_zddEq1526DaS7, hs_zddIntegral26DaS8);
        };
        var hs_sat26Dbt0 = new $hs.Func(2);
        hs_sat26Dbt0.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze125uMkF.hscall(hs_zddEq1526DaS7, hs_zddIntegral26DaS8, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dbt1 = new $hs.Thunk();
        hs_sat26Dbt1.evaluateOnce = function () {
            return hs_zdczg25uMle.hscall(hs_zddEq1526DaS7, hs_zddIntegral26DaS8);
        };
        var hs_sat26Dbt2 = new $hs.Thunk();
        hs_sat26Dbt2.evaluateOnce = function () {
            return hs_zdczgze25uMlg.hscall(hs_zddEq1526DaS7, hs_zddIntegral26DaS8);
        };
        var hs_sat26Dbt3 = new $hs.Func(2);
        hs_sat26Dbt3.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl125uMjQ.hscall(hs_zddEq1526DaS7, hs_zddIntegral26DaS8, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dbt4 = new $hs.Thunk();
        hs_sat26Dbt4.evaluateOnce = function () {
            return hs_zdccompare25uMli.hscall(hs_zddEq1526DaS7, hs_zddIntegral26DaS8);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq1526DaS7, hs_sat26Dbt4, hs_sat26Dbt3, hs_sat26Dbt2, hs_sat26Dbt1, hs_sat26Dbt0, hs_sat26DbsZ, hs_sat26DbsY];
        return $res;
    };
    hs_zdcmin25uMla.evaluate = function (hs_zddEq1526DaSi, hs_zddIntegral26DaSj) {
        var hs_sat26Dbt5 = new $hs.Thunk();
        hs_sat26Dbt5.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddEq1526DaSi, hs_zddIntegral26DaSj);
        };
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall(hs_sat26Dbt5);
    };
    hs_zdcmax25uMlc.evaluate = function (hs_zddEq1526DaSn, hs_zddIntegral26DaSo) {
        var hs_sat26Dbt6 = new $hs.Thunk();
        hs_sat26Dbt6.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddEq1526DaSn, hs_zddIntegral26DaSo);
        };
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall(hs_sat26Dbt6);
    };
    hs_zdczg25uMle.evaluate = function (hs_zddEq1526DaSs, hs_zddIntegral26DaSt) {
        var hs_sat26Dbt7 = new $hs.Thunk();
        hs_sat26Dbt7.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddEq1526DaSs, hs_zddIntegral26DaSt);
        };
        return $hs.modules.GHCziClasses.hs_zddmzg.hscall(hs_sat26Dbt7);
    };
    hs_zdczgze25uMlg.evaluate = function (hs_zddEq1526DaSx, hs_zddIntegral26DaSy) {
        var hs_sat26Dbt8 = new $hs.Thunk();
        hs_sat26Dbt8.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddEq1526DaSx, hs_zddIntegral26DaSy);
        };
        return $hs.modules.GHCziClasses.hs_zddmzgze.hscall(hs_sat26Dbt8);
    };
    hs_zdccompare25uMli.evaluate = function (hs_zddEq1526DaSC, hs_zddIntegral26DaSD) {
        var hs_sat26Dbt9 = new $hs.Thunk();
        hs_sat26Dbt9.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddEq1526DaSC, hs_zddIntegral26DaSD);
        };
        return $hs.modules.GHCziClasses.hs_zddmcompare.hscall(hs_sat26Dbt9);
    };
    hs_zddOrd225uMlk.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddEq125uMjq, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdczgze125uMlm.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzgze.hscall(hs_zddOrd225uMlk);
    };
    hs_a525uMlo.evaluateOnce = function () {
        return hs_zdczgze25uMlg.hscall(hs_zddEq125uMjq, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddOrd325uMlq.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddEq125uMjq, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdczg125uMls.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzg.hscall(hs_zddOrd325uMlq);
    };
    hs_a625uMlu.evaluateOnce = function () {
        return hs_zdczg25uMle.hscall(hs_zddEq125uMjq, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddOrd425uMlw.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddEq125uMjq, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdcmax125uMly.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall(hs_zddOrd425uMlw);
    };
    hs_a725uMlA.evaluateOnce = function () {
        return hs_zdcmax25uMlc.hscall(hs_zddEq125uMjq, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddOrd525uMlC.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddEq125uMjq, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdcmin125uMlE.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall(hs_zddOrd525uMlC);
    };
    hs_a825uMlG.evaluateOnce = function () {
        return hs_zdcmin25uMla.hscall(hs_zddEq125uMjq, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a925uMlI.evaluateOnce = function () {
        return hs_zdccompare25uMli.hscall(hs_zddEq125uMjq, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdfOrdRatio125uMlK.data = [hs_zddEq125uMjq, hs_a925uMlI, hs_a425uMl8, hs_a525uMlo, hs_a625uMlu, hs_a325uMl6, hs_a725uMlA, hs_a825uMlG];
    hs_zddOrd625uMlM.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddEq125uMjq, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdccompare125uMlO.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmcompare.hscall(hs_zddOrd625uMlM);
    };
    hs_zddShow325uMmq.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddReal525uMms.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum525uMmu.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal525uMms);
    };
    hs_zdczp25uMmw.evaluate = function (hs_ds26DaSP, hs_ds126DaST) {
        var hs_wild26Dbtb = hs_ds26DaSP;
        if (hs_ds26DaSP.notEvaluated) {
            hs_wild26Dbtb = hs_ds26DaSP.hscall();
        }
        var hs_x26DaSX = hs_wild26Dbtb.data[0];
        var hs_y26DaT1 = hs_wild26Dbtb.data[1];
        var hs_wild126Dbta = hs_ds126DaST;
        if (hs_ds126DaST.notEvaluated) {
            hs_wild126Dbta = hs_ds126DaST.hscall();
        }
        var hs_xzq26DaT0 = hs_wild126Dbta.data[0];
        var hs_yzq26DaSY = hs_wild126Dbta.data[1];
        var hs_sat26Dbtc = new $hs.Thunk();
        hs_sat26Dbtc.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum525uMmu, hs_y26DaT1, hs_yzq26DaSY);
        };
        var hs_sat26Dbtf = new $hs.Thunk();
        hs_sat26Dbtf.evaluateOnce = function () {
            var hs_sat26Dbtd = new $hs.Thunk();
            hs_sat26Dbtd.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum525uMmu, hs_xzq26DaT0, hs_y26DaT1);
            };
            var hs_sat26Dbte = new $hs.Thunk();
            hs_sat26Dbte.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum525uMmu, hs_x26DaSX, hs_yzq26DaSY);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum525uMmu, hs_sat26Dbte, hs_sat26Dbtd);
        };
        return $hs.modules.GHCziReal.hs_reduce.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26Dbtf, hs_sat26Dbtc);
    };
    hs_zdczp125uMmQ.evaluate = function (hs_zddEq1526DaTx, hs_zddShow1126DaTy, hs_zddIntegral26DaTd, hs_eta26DaTh, hs_eta126DaTl) {
        var hs_zddReal2226DaTe = new $hs.Thunk();
        hs_zddReal2226DaTe.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DaTd);
        };
        var hs_zddNum3126DaTg = new $hs.Thunk();
        hs_zddNum3126DaTg.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226DaTe);
        };
        var hs_wild26Dbth = hs_eta26DaTh;
        if (hs_eta26DaTh.notEvaluated) {
            hs_wild26Dbth = hs_eta26DaTh.hscall();
        }
        var hs_x26DaTp = hs_wild26Dbth.data[0];
        var hs_y26DaTt = hs_wild26Dbth.data[1];
        var hs_wild126Dbtg = hs_eta126DaTl;
        if (hs_eta126DaTl.notEvaluated) {
            hs_wild126Dbtg = hs_eta126DaTl.hscall();
        }
        var hs_xzq26DaTs = hs_wild126Dbtg.data[0];
        var hs_yzq26DaTq = hs_wild126Dbtg.data[1];
        var hs_sat26Dbti = new $hs.Thunk();
        hs_sat26Dbti.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum3126DaTg, hs_y26DaTt, hs_yzq26DaTq);
        };
        var hs_sat26Dbtl = new $hs.Thunk();
        hs_sat26Dbtl.evaluateOnce = function () {
            var hs_sat26Dbtj = new $hs.Thunk();
            hs_sat26Dbtj.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum3126DaTg, hs_xzq26DaTs, hs_y26DaTt);
            };
            var hs_sat26Dbtk = new $hs.Thunk();
            hs_sat26Dbtk.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum3126DaTg, hs_x26DaTp, hs_yzq26DaTq);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum3126DaTg, hs_sat26Dbtk, hs_sat26Dbtj);
        };
        return $hs.modules.GHCziReal.hs_reduce.hscall(hs_zddIntegral26DaTd, hs_sat26Dbtl, hs_sat26Dbti);
    };
    hs_zddReal625uMnk.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum625uMnm.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal625uMnk);
    };
    hs_zdczt25uMno.evaluate = function (hs_ds26DaTH, hs_ds126DaTL) {
        var hs_wild26Dbtn = hs_ds26DaTH;
        if (hs_ds26DaTH.notEvaluated) {
            hs_wild26Dbtn = hs_ds26DaTH.hscall();
        }
        var hs_x26DaTP = hs_wild26Dbtn.data[0];
        var hs_y26DaTS = hs_wild26Dbtn.data[1];
        var hs_wild126Dbtm = hs_ds126DaTL;
        if (hs_ds126DaTL.notEvaluated) {
            hs_wild126Dbtm = hs_ds126DaTL.hscall();
        }
        var hs_xzq26DaTQ = hs_wild126Dbtm.data[0];
        var hs_yzq26DaTT = hs_wild126Dbtm.data[1];
        var hs_sat26Dbto = new $hs.Thunk();
        hs_sat26Dbto.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum625uMnm, hs_y26DaTS, hs_yzq26DaTT);
        };
        var hs_sat26Dbtp = new $hs.Thunk();
        hs_sat26Dbtp.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum625uMnm, hs_x26DaTP, hs_xzq26DaTQ);
        };
        return $hs.modules.GHCziReal.hs_reduce.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26Dbtp, hs_sat26Dbto);
    };
    hs_zdczt125uMnG.evaluate = function (hs_zddEq1526DaUl, hs_zddShow1126DaUm, hs_zddIntegral26DaU3, hs_eta26DaU7, hs_eta126DaUb) {
        var hs_zddReal2226DaU4 = new $hs.Thunk();
        hs_zddReal2226DaU4.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DaU3);
        };
        var hs_zddNum3126DaU6 = new $hs.Thunk();
        hs_zddNum3126DaU6.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226DaU4);
        };
        var hs_wild26Dbtr = hs_eta26DaU7;
        if (hs_eta26DaU7.notEvaluated) {
            hs_wild26Dbtr = hs_eta26DaU7.hscall();
        }
        var hs_x26DaUf = hs_wild26Dbtr.data[0];
        var hs_y26DaUi = hs_wild26Dbtr.data[1];
        var hs_wild126Dbtq = hs_eta126DaUb;
        if (hs_eta126DaUb.notEvaluated) {
            hs_wild126Dbtq = hs_eta126DaUb.hscall();
        }
        var hs_xzq26DaUg = hs_wild126Dbtq.data[0];
        var hs_yzq26DaUj = hs_wild126Dbtq.data[1];
        var hs_sat26Dbts = new $hs.Thunk();
        hs_sat26Dbts.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum3126DaU6, hs_y26DaUi, hs_yzq26DaUj);
        };
        var hs_sat26Dbtt = new $hs.Thunk();
        hs_sat26Dbtt.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum3126DaU6, hs_x26DaUf, hs_xzq26DaUg);
        };
        return $hs.modules.GHCziReal.hs_reduce.hscall(hs_zddIntegral26DaU3, hs_sat26Dbtt, hs_sat26Dbts);
    };
    hs_zddReal725uMo8.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum725uMoa.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal725uMo8);
    };
    hs_zdczm25uMoc.evaluate = function (hs_ds26DaUv, hs_ds126DaUz) {
        var hs_wild26Dbtv = hs_ds26DaUv;
        if (hs_ds26DaUv.notEvaluated) {
            hs_wild26Dbtv = hs_ds26DaUv.hscall();
        }
        var hs_x26DaUD = hs_wild26Dbtv.data[0];
        var hs_y26DaUH = hs_wild26Dbtv.data[1];
        var hs_wild126Dbtu = hs_ds126DaUz;
        if (hs_ds126DaUz.notEvaluated) {
            hs_wild126Dbtu = hs_ds126DaUz.hscall();
        }
        var hs_xzq26DaUG = hs_wild126Dbtu.data[0];
        var hs_yzq26DaUE = hs_wild126Dbtu.data[1];
        var hs_sat26Dbtw = new $hs.Thunk();
        hs_sat26Dbtw.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum725uMoa, hs_y26DaUH, hs_yzq26DaUE);
        };
        var hs_sat26Dbtz = new $hs.Thunk();
        hs_sat26Dbtz.evaluateOnce = function () {
            var hs_sat26Dbtx = new $hs.Thunk();
            hs_sat26Dbtx.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum725uMoa, hs_xzq26DaUG, hs_y26DaUH);
            };
            var hs_sat26Dbty = new $hs.Thunk();
            hs_sat26Dbty.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum725uMoa, hs_x26DaUD, hs_yzq26DaUE);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum725uMoa, hs_sat26Dbty, hs_sat26Dbtx);
        };
        return $hs.modules.GHCziReal.hs_reduce.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26Dbtz, hs_sat26Dbtw);
    };
    hs_zdczm125uMow.evaluate = function (hs_zddEq1526DaVd, hs_zddShow1126DaVe, hs_zddIntegral26DaUT, hs_eta26DaUX, hs_eta126DaV1) {
        var hs_zddReal2226DaUU = new $hs.Thunk();
        hs_zddReal2226DaUU.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DaUT);
        };
        var hs_zddNum3126DaUW = new $hs.Thunk();
        hs_zddNum3126DaUW.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226DaUU);
        };
        var hs_wild26DbtB = hs_eta26DaUX;
        if (hs_eta26DaUX.notEvaluated) {
            hs_wild26DbtB = hs_eta26DaUX.hscall();
        }
        var hs_x26DaV5 = hs_wild26DbtB.data[0];
        var hs_y26DaV9 = hs_wild26DbtB.data[1];
        var hs_wild126DbtA = hs_eta126DaV1;
        if (hs_eta126DaV1.notEvaluated) {
            hs_wild126DbtA = hs_eta126DaV1.hscall();
        }
        var hs_xzq26DaV8 = hs_wild126DbtA.data[0];
        var hs_yzq26DaV6 = hs_wild126DbtA.data[1];
        var hs_sat26DbtC = new $hs.Thunk();
        hs_sat26DbtC.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum3126DaUW, hs_y26DaV9, hs_yzq26DaV6);
        };
        var hs_sat26DbtF = new $hs.Thunk();
        hs_sat26DbtF.evaluateOnce = function () {
            var hs_sat26DbtD = new $hs.Thunk();
            hs_sat26DbtD.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum3126DaUW, hs_xzq26DaV8, hs_y26DaV9);
            };
            var hs_sat26DbtE = new $hs.Thunk();
            hs_sat26DbtE.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum3126DaUW, hs_x26DaV5, hs_yzq26DaV6);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum3126DaUW, hs_sat26DbtE, hs_sat26DbtD);
        };
        return $hs.modules.GHCziReal.hs_reduce.hscall(hs_zddIntegral26DaUT, hs_sat26DbtF, hs_sat26DbtC);
    };
    hs_a1025uMp0.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum825uMp2.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_a1025uMp0);
    };
    hs_zdcnegate25uMp4.evaluate = function (hs_ds26DaVm) {
        var hs_wild26DbtG = hs_ds26DaVm;
        if (hs_ds26DaVm.notEvaluated) {
            hs_wild26DbtG = hs_ds26DaVm.hscall();
        }
        var hs_x26DaVq = hs_wild26DbtG.data[0];
        var hs_y26DaVt = hs_wild26DbtG.data[1];
        var hs_tpl26DaVs = $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum825uMp2, hs_x26DaVq);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DaVs, hs_y26DaVt];
        return $res;
    };
    hs_zdcnegate125uMpf.evaluate = function (hs_zddEq1526DaVL, hs_zddShow1126DaVM, hs_zddIntegral26DaVE, hs_eta26DaVA) {
        var hs_wild26DbtJ = hs_eta26DaVA;
        if (hs_eta26DaVA.notEvaluated) {
            hs_wild26DbtJ = hs_eta26DaVA.hscall();
        }
        var hs_x26DaVH = hs_wild26DbtJ.data[0];
        var hs_y26DaVK = hs_wild26DbtJ.data[1];
        var hs_sat26DbtI = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DaVE);
        var hs_sat26DbtH = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26DbtI);
        var hs_tpl26DaVJ = $hs.modules.GHCziNum.hs_negate.hscall(hs_sat26DbtH, hs_x26DaVH);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DaVJ, hs_y26DaVK];
        return $res;
    };
    hs_a1125uMpy.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum925uMpA.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_a1125uMpy);
    };
    hs_zdcabs25uMpC.evaluate = function (hs_ds26DaVU) {
        var hs_wild26DbtK = hs_ds26DaVU;
        if (hs_ds26DaVU.notEvaluated) {
            hs_wild26DbtK = hs_ds26DaVU.hscall();
        }
        var hs_x26DaVY = hs_wild26DbtK.data[0];
        var hs_y26DaW1 = hs_wild26DbtK.data[1];
        var hs_tpl26DaW0 = $hs.modules.GHCziNum.hs_abs.hscall(hs_zddNum925uMpA, hs_x26DaVY);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DaW0, hs_y26DaW1];
        return $res;
    };
    hs_zdcabs125uMpN.evaluate = function (hs_zddEq1526DaWj, hs_zddShow1126DaWk, hs_zddIntegral26DaWc, hs_eta26DaW8) {
        var hs_wild26DbtN = hs_eta26DaW8;
        if (hs_eta26DaW8.notEvaluated) {
            hs_wild26DbtN = hs_eta26DaW8.hscall();
        }
        var hs_x26DaWf = hs_wild26DbtN.data[0];
        var hs_y26DaWi = hs_wild26DbtN.data[1];
        var hs_sat26DbtM = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DaWc);
        var hs_sat26DbtL = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26DbtM);
        var hs_tpl26DaWh = $hs.modules.GHCziNum.hs_abs.hscall(hs_sat26DbtL, hs_x26DaWf);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DaWh, hs_y26DaWi];
        return $res;
    };
    hs_zddReal825uMq6.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum1025uMq8.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal825uMq6);
    };
    hs_zdcsignum25uMqa.evaluate = function (hs_ds26DaWs) {
        var hs_wild26DbtO = hs_ds26DaWs;
        if (hs_ds26DaWs.notEvaluated) {
            hs_wild26DbtO = hs_ds26DaWs.hscall();
        }
        var hs_x26DaWw = hs_wild26DbtO.data[0];
        var hs_tpl26DaWA = $hs.modules.GHCziNum.hs_signum.hscall(hs_zddNum1025uMq8, hs_x26DaWw);
        var hs_sat26DbtQ = new $hs.Thunk();
        hs_sat26DbtQ.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_tpl126DaWB = $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1025uMq8, hs_sat26DbtQ);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DaWA, hs_tpl126DaWB];
        return $res;
    };
    hs_zdcsignum125uMqn.evaluate = function (hs_zddEq1526DaWX, hs_zddShow1126DaWY, hs_zddIntegral26DaWJ, hs_eta26DaWN) {
        var hs_zddReal2226DaWK = new $hs.Thunk();
        hs_zddReal2226DaWK.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DaWJ);
        };
        var hs_zddNum3126DaWM = new $hs.Thunk();
        hs_zddNum3126DaWM.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226DaWK);
        };
        var hs_wild26DbtR = hs_eta26DaWN;
        if (hs_eta26DaWN.notEvaluated) {
            hs_wild26DbtR = hs_eta26DaWN.hscall();
        }
        var hs_x26DaWR = hs_wild26DbtR.data[0];
        var hs_tpl26DaWV = $hs.modules.GHCziNum.hs_signum.hscall(hs_zddNum3126DaWM, hs_x26DaWR);
        var hs_sat26DbtT = new $hs.Thunk();
        hs_sat26DbtT.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_tpl126DaWW = $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaWM, hs_sat26DbtT);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DaWV, hs_tpl126DaWW];
        return $res;
    };
    hs_zddReal925uMqK.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum1125uMqM.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal925uMqK);
    };
    hs_zdcfromInteger25uMqO.evaluate = function (hs_x26DaX6) {
        var hs_tpl26DaXa = $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1125uMqM, hs_x26DaX6);
        var hs_sat26DbtU = new $hs.Thunk();
        hs_sat26DbtU.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_tpl126DaXb = $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1125uMqM, hs_sat26DbtU);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DaXa, hs_tpl126DaXb];
        return $res;
    };
    hs_zdcfromInteger125uMqX.evaluate = function (hs_zddEq1526DaXt, hs_zddShow1126DaXu, hs_zddIntegral26DaXj, hs_eta26DaXn) {
        var hs_zddReal2226DaXk = new $hs.Thunk();
        hs_zddReal2226DaXk.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DaXj);
        };
        var hs_zddNum3126DaXm = new $hs.Thunk();
        hs_zddNum3126DaXm.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226DaXk);
        };
        var hs_tpl26DaXr = $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaXm, hs_eta26DaXn);
        var hs_sat26DbtV = new $hs.Thunk();
        hs_sat26DbtV.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_tpl126DaXs = $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaXm, hs_sat26DbtV);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DaXr, hs_tpl126DaXs];
        return $res;
    };
    hs_a1225uMrg.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_zdczp125uMmQ.hscall(hs_zddEq125uMjq, hs_zddShow325uMmq, $hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1325uMri.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_zdczt125uMnG.hscall(hs_zddEq125uMjq, hs_zddShow325uMmq, $hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1425uMrk.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_zdczm125uMow.hscall(hs_zddEq125uMjq, hs_zddShow325uMmq, $hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1525uMrm.evaluate = function (hs_eta26DaXE) {
        var hs_wild26DbtY = hs_eta26DaXE;
        if (hs_eta26DaXE.notEvaluated) {
            hs_wild26DbtY = hs_eta26DaXE.hscall();
        }
        var hs_x26DaXK = hs_wild26DbtY.data[0];
        var hs_y26DaXN = hs_wild26DbtY.data[1];
        var hs_sat26DbtX = $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
        var hs_sat26DbtW = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26DbtX);
        var hs_tpl26DaXM = $hs.modules.GHCziNum.hs_negate.hscall(hs_sat26DbtW, hs_x26DaXK);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DaXM, hs_y26DaXN];
        return $res;
    };
    hs_a1625uMrz.evaluate = function (hs_eta26DaXR) {
        var hs_wild26Dbu1 = hs_eta26DaXR;
        if (hs_eta26DaXR.notEvaluated) {
            hs_wild26Dbu1 = hs_eta26DaXR.hscall();
        }
        var hs_x26DaXX = hs_wild26Dbu1.data[0];
        var hs_y26DaY0 = hs_wild26Dbu1.data[1];
        var hs_sat26Dbu0 = $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
        var hs_sat26DbtZ = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26Dbu0);
        var hs_tpl26DaXZ = $hs.modules.GHCziNum.hs_abs.hscall(hs_sat26DbtZ, hs_x26DaXX);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DaXZ, hs_y26DaY0];
        return $res;
    };
    hs_a1725uMrM.evaluate = function (hs_eta26DaY8) {
        var hs_zddReal2226DaY5 = new $hs.Thunk();
        hs_zddReal2226DaY5.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
        };
        var hs_zddNum3126DaY7 = new $hs.Thunk();
        hs_zddNum3126DaY7.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226DaY5);
        };
        var hs_wild26Dbu2 = hs_eta26DaY8;
        if (hs_eta26DaY8.notEvaluated) {
            hs_wild26Dbu2 = hs_eta26DaY8.hscall();
        }
        var hs_x26DaYc = hs_wild26Dbu2.data[0];
        var hs_tpl26DaYg = $hs.modules.GHCziNum.hs_signum.hscall(hs_zddNum3126DaY7, hs_x26DaYc);
        var hs_sat26Dbu4 = new $hs.Thunk();
        hs_sat26Dbu4.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_tpl126DaYh = $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaY7, hs_sat26Dbu4);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DaYg, hs_tpl126DaYh];
        return $res;
    };
    hs_a1825uMs3.evaluate = function (hs_eta26DaYp) {
        var hs_zddReal2226DaYm = new $hs.Thunk();
        hs_zddReal2226DaYm.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
        };
        var hs_zddNum3126DaYo = new $hs.Thunk();
        hs_zddNum3126DaYo.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226DaYm);
        };
        var hs_tpl26DaYt = $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaYo, hs_eta26DaYp);
        var hs_sat26Dbu5 = new $hs.Thunk();
        hs_sat26Dbu5.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_tpl126DaYu = $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaYo, hs_sat26Dbu5);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DaYt, hs_tpl126DaYu];
        return $res;
    };
    hs_zdfNumRatio125uMsg.data = [hs_zddEq125uMjq, hs_zddShow325uMmq, hs_a1225uMrg, hs_a1325uMri, hs_a1425uMrk, hs_a1525uMrm, hs_a1625uMrz, hs_a1725uMrM, hs_a1825uMs3];
    this.hs_zdfNumRatio.evaluate = function (hs_zddEq1526DaYA, hs_zddShow1126DaYB, hs_zddIntegral26DaYC) {
        var hs_sat26Dbu6 = new $hs.Func(1);
        hs_sat26Dbu6.evaluate = function (hs_eta1cW6l3) {
            return hs_zdcfromInteger125uMqX.hscall(hs_zddEq1526DaYA, hs_zddShow1126DaYB, hs_zddIntegral26DaYC, hs_eta1cW6l3);
        };
        var hs_sat26Dbu7 = new $hs.Func(1);
        hs_sat26Dbu7.evaluate = function (hs_eta1cW6l3) {
            return hs_zdcsignum125uMqn.hscall(hs_zddEq1526DaYA, hs_zddShow1126DaYB, hs_zddIntegral26DaYC, hs_eta1cW6l3);
        };
        var hs_sat26Dbu8 = new $hs.Func(1);
        hs_sat26Dbu8.evaluate = function (hs_eta1cW6l3) {
            return hs_zdcabs125uMpN.hscall(hs_zddEq1526DaYA, hs_zddShow1126DaYB, hs_zddIntegral26DaYC, hs_eta1cW6l3);
        };
        var hs_sat26Dbu9 = new $hs.Func(1);
        hs_sat26Dbu9.evaluate = function (hs_eta1cW6l3) {
            return hs_zdcnegate125uMpf.hscall(hs_zddEq1526DaYA, hs_zddShow1126DaYB, hs_zddIntegral26DaYC, hs_eta1cW6l3);
        };
        var hs_sat26Dbua = new $hs.Func(2);
        hs_sat26Dbua.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczm125uMow.hscall(hs_zddEq1526DaYA, hs_zddShow1126DaYB, hs_zddIntegral26DaYC, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dbub = new $hs.Func(2);
        hs_sat26Dbub.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczt125uMnG.hscall(hs_zddEq1526DaYA, hs_zddShow1126DaYB, hs_zddIntegral26DaYC, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Dbuc = new $hs.Func(2);
        hs_sat26Dbuc.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczp125uMmQ.hscall(hs_zddEq1526DaYA, hs_zddShow1126DaYB, hs_zddIntegral26DaYC, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq1526DaYA, hs_zddShow1126DaYB, hs_sat26Dbuc, hs_sat26Dbub, hs_sat26Dbua, hs_sat26Dbu9, hs_sat26Dbu8, hs_sat26Dbu7, hs_sat26Dbu6];
        return $res;
    };
    hs_zddShow425uMsv.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddEq225uMsx.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum1225uMsz.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall(hs_zddEq225uMsx, hs_zddShow425uMsv, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdcsucc25uMsB.evaluate = function (hs_x26DaYT) {
        var hs_sat26Dbue = new $hs.Thunk();
        hs_sat26Dbue.evaluateOnce = function () {
            var hs_sat26Dbud = new $hs.Thunk();
            hs_sat26Dbud.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1225uMsz, hs_sat26Dbud);
        };
        return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum1225uMsz, hs_x26DaYT, hs_sat26Dbue);
    };
    hs_zdcsucc125uMsH.evaluate = function (hs_zddIntegral26DaZ0) {
        var hs_zddShow1126DaZ1 = new $hs.Thunk();
        hs_zddShow1126DaZ1.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall(hs_zddIntegral26DaZ0);
        };
        var hs_zddEq1526DaZ3 = new $hs.Thunk();
        hs_zddEq1526DaZ3.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall(hs_zddIntegral26DaZ0);
        };
        var hs_zddNum3126DaZ5 = new $hs.Thunk();
        hs_zddNum3126DaZ5.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall(hs_zddEq1526DaZ3, hs_zddShow1126DaZ1, hs_zddIntegral26DaZ0);
        };
        var hs_sat26Dbuf = new $hs.Func(1);
        hs_sat26Dbuf.evaluate = function (hs_x26DaZ7) {
            var hs_sat26DaZb = new $hs.Thunk();
            hs_sat26DaZb.evaluateOnce = function () {
                var hs_sat26DaZa = new $hs.Thunk();
                hs_sat26DaZa.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaZ5, hs_sat26DaZa);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum3126DaZ5, hs_x26DaZ7, hs_sat26DaZb);
        };
        if (hs_sat26Dbuf.notEvaluated) {
            return hs_sat26Dbuf.hscall();
        } else {
            return hs_sat26Dbuf;
        }
    };
    hs_zddShow525uMsY.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddEq325uMt0.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum1325uMt2.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall(hs_zddEq325uMt0, hs_zddShow525uMsY, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdcpred25uMt4.evaluate = function (hs_x26DaZm) {
        var hs_sat26Dbuh = new $hs.Thunk();
        hs_sat26Dbuh.evaluateOnce = function () {
            var hs_sat26Dbug = new $hs.Thunk();
            hs_sat26Dbug.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1325uMt2, hs_sat26Dbug);
        };
        return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum1325uMt2, hs_x26DaZm, hs_sat26Dbuh);
    };
    hs_zdcpred125uMta.evaluate = function (hs_zddIntegral26DaZt) {
        var hs_zddShow1126DaZu = new $hs.Thunk();
        hs_zddShow1126DaZu.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall(hs_zddIntegral26DaZt);
        };
        var hs_zddEq1526DaZw = new $hs.Thunk();
        hs_zddEq1526DaZw.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall(hs_zddIntegral26DaZt);
        };
        var hs_zddNum3126DaZy = new $hs.Thunk();
        hs_zddNum3126DaZy.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall(hs_zddEq1526DaZw, hs_zddShow1126DaZu, hs_zddIntegral26DaZt);
        };
        var hs_sat26Dbui = new $hs.Func(1);
        hs_sat26Dbui.evaluate = function (hs_x26DaZA) {
            var hs_sat26DaZE = new $hs.Thunk();
            hs_sat26DaZE.evaluateOnce = function () {
                var hs_sat26DaZD = new $hs.Thunk();
                hs_sat26DaZD.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DaZy, hs_sat26DaZD);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum3126DaZy, hs_x26DaZA, hs_sat26DaZE);
        };
        if (hs_sat26Dbui.notEvaluated) {
            return hs_sat26Dbui.hscall();
        } else {
            return hs_sat26Dbui;
        }
    };
    hs_zddNum1425uMtr.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall(hs_zddEq125uMjq, hs_zddShow325uMmq, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddReal1025uMtt.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum1525uMtv.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1025uMtt);
    };
    hs_zddOrd725uMtx.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal1025uMtt);
    };
    hs_zddEq425uMtz.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum1525uMtv);
    };
    hs_zdcrecip25uMtB.evaluate = function (hs_ds26DaZT) {
        var hs_wild26Dbuj = hs_ds26DaZT;
        if (hs_ds26DaZT.notEvaluated) {
            hs_wild26Dbuj = hs_ds26DaZT.hscall();
        }
        var hs_ds126DaZX = hs_wild26Dbuj.data[0];
        var hs_ds226Db04 = hs_wild26Dbuj.data[1];
        var hs_sat26Dbum = new $hs.Thunk();
        hs_sat26Dbum.evaluateOnce = function () {
            var hs_sat26Dbuk = new $hs.Thunk();
            hs_sat26Dbuk.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1525uMtv, hs_sat26Dbuk);
        };
        var hs_wild126Dbul = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq425uMtz, hs_ds126DaZX, hs_sat26Dbum);
        switch (hs_wild126Dbul.tag) {
        case 1:
            var hs_sat26Dbup = new $hs.Thunk();
            hs_sat26Dbup.evaluateOnce = function () {
                var hs_sat26Dbun = new $hs.Thunk();
                hs_sat26Dbun.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1525uMtv, hs_sat26Dbun);
            };
            var hs_wild226Dbuo = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd725uMtx, hs_ds126DaZX, hs_sat26Dbup);
            switch (hs_wild226Dbuo.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [hs_ds226Db04, hs_ds126DaZX];
                return $res;
            case 2:
                var hs_tpl26Db07 = $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum1525uMtv, hs_ds226Db04);
                var hs_tpl126Db08 = $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum1525uMtv, hs_ds126DaZX);
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl26Db07, hs_tpl126Db08];
                return $res;
            }
        case 2:
            var hs_sat26Dbuq = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Ratio.%: zero denominator\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dbuq);
        }
    };
    hs_zdcrecip125uMtV.evaluate = function (hs_zddNum3126Db0D, hs_zddIntegral26Db0g, hs_eta26Db0k) {
        var hs_zddReal2226Db0h = new $hs.Thunk();
        hs_zddReal2226Db0h.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26Db0g);
        };
        var hs_zddNum3226Db0j = new $hs.Thunk();
        hs_zddNum3226Db0j.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226Db0h);
        };
        var hs_wild26Dbur = hs_eta26Db0k;
        if (hs_eta26Db0k.notEvaluated) {
            hs_wild26Dbur = hs_eta26Db0k.hscall();
        }
        var hs_ds26Db0p = hs_wild26Dbur.data[0];
        var hs_ds126Db0x = hs_wild26Dbur.data[1];
        var hs_sat26Dbuv = new $hs.Thunk();
        hs_sat26Dbuv.evaluateOnce = function () {
            var hs_sat26Dbus = new $hs.Thunk();
            hs_sat26Dbus.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226Db0j, hs_sat26Dbus);
        };
        var hs_sat26Dbuu = $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum3226Db0j);
        var hs_wild126Dbut = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26Dbuu, hs_ds26Db0p, hs_sat26Dbuv);
        switch (hs_wild126Dbut.tag) {
        case 1:
            var hs_sat26Dbuz = new $hs.Thunk();
            hs_sat26Dbuz.evaluateOnce = function () {
                var hs_sat26Dbuw = new $hs.Thunk();
                hs_sat26Dbuw.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226Db0j, hs_sat26Dbuw);
            };
            var hs_sat26Dbuy = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2226Db0h);
            var hs_wild226Dbux = $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26Dbuy, hs_ds26Db0p, hs_sat26Dbuz);
            switch (hs_wild226Dbux.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [hs_ds126Db0x, hs_ds26Db0p];
                return $res;
            case 2:
                var hs_tpl26Db0A = $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum3226Db0j, hs_ds126Db0x);
                var hs_tpl126Db0B = $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum3226Db0j, hs_ds26Db0p);
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl26Db0A, hs_tpl126Db0B];
                return $res;
            }
        case 2:
            var hs_sat26DbuA = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Ratio.%: zero denominator\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DbuA);
        }
    };
    hs_zddOrd825uMup.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddEq125uMjq, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdctoRational125uMur.evaluate = function (hs_ds26Db0J) {
        var hs_wild26DbuB = hs_ds26Db0J;
        if (hs_ds26Db0J.notEvaluated) {
            hs_wild26DbuB = hs_ds26Db0J.hscall();
        }
        var hs_x26Db0N = hs_wild26DbuB.data[0];
        var hs_y26Db0P = hs_wild26DbuB.data[1];
        var hs_tpl26Db0R = $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_x26Db0N);
        var hs_tpl126Db0S = $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_y26Db0P);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26Db0R, hs_tpl126Db0S];
        return $res;
    };
    hs_zdctoRational225uMuE.evaluate = function (hs_zddNum3126Db1a, hs_zddOrd1726Db1b, hs_zddIntegral26Db13, hs_ds26Db0Z) {
        var hs_wild26DbuC = hs_ds26Db0Z;
        if (hs_ds26Db0Z.notEvaluated) {
            hs_wild26DbuC = hs_ds26Db0Z.hscall();
        }
        var hs_x26Db14 = hs_wild26DbuC.data[0];
        var hs_y26Db16 = hs_wild26DbuC.data[1];
        var hs_tpl26Db18 = $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26Db13, hs_x26Db14);
        var hs_tpl126Db19 = $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26Db13, hs_y26Db16);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26Db18, hs_tpl126Db19];
        return $res;
    };
    hs_a1925uMuX.evaluate = function (hs_ds26Db1f) {
        var hs_wild26DbuD = hs_ds26Db1f;
        if (hs_ds26Db1f.notEvaluated) {
            hs_wild26DbuD = hs_ds26Db1f.hscall();
        }
        var hs_x26Db1j = hs_wild26DbuD.data[0];
        var hs_y26Db1l = hs_wild26DbuD.data[1];
        var hs_tpl26Db1n = $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_x26Db1j);
        var hs_tpl126Db1o = $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_y26Db1l);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26Db1n, hs_tpl126Db1o];
        return $res;
    };
    hs_zdfRealRatio125uMva.data = [hs_zddNum1425uMtr, hs_zddOrd825uMup, hs_a1925uMuX];
    this.hs_zdfRealRatio.evaluate = function (hs_zddNum3126Db1u, hs_zddOrd1726Db1v, hs_zddIntegral26Db1w) {
        var hs_sat26DbuE = new $hs.Func(1);
        hs_sat26DbuE.evaluate = function (hs_eta1cW6l3) {
            return hs_zdctoRational225uMuE.hscall(hs_zddNum3126Db1u, hs_zddOrd1726Db1v, hs_zddIntegral26Db1w, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddNum3126Db1u, hs_zddOrd1726Db1v, hs_sat26DbuE];
        return $res;
    };
    hs_zddReal1125uMvj.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfRealRatio.hscall(hs_zddNum1425uMtr, hs_zddOrd825uMup, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    this.hs_zdfRealInt.data = [$hs.modules.GHCziNum.hs_zdfNumInt, $hs.modules.GHCziBase.hs_zdfOrdInt, hs_zdctoRational325uMvl];
    this.hs_zdfIntegralInt.data = [$hs.modules.GHCziReal.hs_zdfRealInt, $hs.modules.GHCziEnum.hs_zdfEnumInt, hs_zdcquot25uMeU, hs_zdcrem25uMeG, hs_zdcdiv25uMes, hs_zdcmod25uMee, hs_zdcquotRem25uMe0, hs_zdcdivMod25uMdM, hs_zdctoInteger25uMdF];
    hs_zdctoRational325uMvl.evaluate = function (hs_x26Db1D) {
        var hs_sat26DbuF = new $hs.Thunk();
        hs_sat26DbuF.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_sat26DbuG = new $hs.Thunk();
        hs_sat26DbuG.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_x26Db1D);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DbuG, hs_sat26DbuF);
    };
    hs_zddReal1225uMvr.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum1625uMvt.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1225uMvr);
    };
    hs_zdctoEnum25uMvv.evaluate = function (hs_n26Db1P) {
        var hs_sat26DbuH = new $hs.Thunk();
        hs_sat26DbuH.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
        };
        var hs_sat26DbuI = new $hs.Thunk();
        hs_sat26DbuI.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1625uMvt);
        };
        var hs_tpl26Db1T = $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DbuI, hs_sat26DbuH, hs_n26Db1P);
        var hs_sat26DbuJ = new $hs.Thunk();
        hs_sat26DbuJ.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_tpl126Db1U = $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1625uMvt, hs_sat26DbuJ);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26Db1T, hs_tpl126Db1U];
        return $res;
    };
    hs_zdctoEnum125uMvG.evaluate = function (hs_zddIntegral26Db20, hs_eta26Db26) {
        var hs_zddReal2226Db21 = new $hs.Thunk();
        hs_zddReal2226Db21.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26Db20);
        };
        var hs_zddNum3126Db23 = new $hs.Thunk();
        hs_zddNum3126Db23.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226Db21);
        };
        var hs_sat26DbuK = new $hs.Thunk();
        hs_sat26DbuK.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
        };
        var hs_sat26DbuL = new $hs.Thunk();
        hs_sat26DbuL.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Db23);
        };
        var hs_tpl26Db2a = $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DbuL, hs_sat26DbuK, hs_eta26Db26);
        var hs_sat26DbuM = new $hs.Thunk();
        hs_sat26DbuM.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_tpl126Db2b = $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Db23, hs_sat26DbuM);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26Db2a, hs_tpl126Db2b];
        return $res;
    };
    hs_zddReal1325uMvX.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum1725uMvZ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1325uMvX);
    };
    hs_zdczs25uMw1.evaluate = function (hs_ds26Db2k, hs_ds126Db2o) {
        var hs_wild26DbuO = hs_ds26Db2k;
        if (hs_ds26Db2k.notEvaluated) {
            hs_wild26DbuO = hs_ds26Db2k.hscall();
        }
        var hs_x26Db2s = hs_wild26DbuO.data[0];
        var hs_y26Db2v = hs_wild26DbuO.data[1];
        var hs_wild126DbuN = hs_ds126Db2o;
        if (hs_ds126Db2o.notEvaluated) {
            hs_wild126DbuN = hs_ds126Db2o.hscall();
        }
        var hs_xzq26Db2w = hs_wild126DbuN.data[0];
        var hs_yzq26Db2t = hs_wild126DbuN.data[1];
        var hs_sat26DbuP = new $hs.Thunk();
        hs_sat26DbuP.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum1725uMvZ, hs_y26Db2v, hs_xzq26Db2w);
        };
        var hs_sat26DbuQ = new $hs.Thunk();
        hs_sat26DbuQ.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum1725uMvZ, hs_x26Db2s, hs_yzq26Db2t);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DbuQ, hs_sat26DbuP);
    };
    hs_zdczs125uMwj.evaluate = function (hs_zddNum3126Db2X, hs_zddIntegral26Db2F, hs_eta26Db2J, hs_eta126Db2N) {
        var hs_zddReal2226Db2G = new $hs.Thunk();
        hs_zddReal2226Db2G.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26Db2F);
        };
        var hs_zddNum3226Db2I = new $hs.Thunk();
        hs_zddNum3226Db2I.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226Db2G);
        };
        var hs_wild26DbuS = hs_eta26Db2J;
        if (hs_eta26Db2J.notEvaluated) {
            hs_wild26DbuS = hs_eta26Db2J.hscall();
        }
        var hs_x26Db2R = hs_wild26DbuS.data[0];
        var hs_y26Db2U = hs_wild26DbuS.data[1];
        var hs_wild126DbuR = hs_eta126Db2N;
        if (hs_eta126Db2N.notEvaluated) {
            hs_wild126DbuR = hs_eta126Db2N.hscall();
        }
        var hs_xzq26Db2V = hs_wild126DbuR.data[0];
        var hs_yzq26Db2S = hs_wild126DbuR.data[1];
        var hs_sat26DbuT = new $hs.Thunk();
        hs_sat26DbuT.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum3226Db2I, hs_y26Db2U, hs_xzq26Db2V);
        };
        var hs_sat26DbuU = new $hs.Thunk();
        hs_sat26DbuU.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum3226Db2I, hs_x26Db2R, hs_yzq26Db2S);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall(hs_zddIntegral26Db2F, hs_sat26DbuU, hs_sat26DbuT);
    };
    hs_zddReal1425uMwJ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum1825uMwL.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1425uMwJ);
    };
    hs_zdcfromRational25uMwN.evaluate = function (hs_ds26Db35) {
        var hs_wild26DbuV = hs_ds26Db35;
        if (hs_ds26Db35.notEvaluated) {
            hs_wild26DbuV = hs_ds26Db35.hscall();
        }
        var hs_x26Db39 = hs_wild26DbuV.data[0];
        var hs_y26Db3b = hs_wild26DbuV.data[1];
        var hs_sat26DbuW = new $hs.Thunk();
        hs_sat26DbuW.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1825uMwL, hs_y26Db3b);
        };
        var hs_sat26DbuX = new $hs.Thunk();
        hs_sat26DbuX.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1825uMwL, hs_x26Db39);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DbuX, hs_sat26DbuW);
    };
    hs_zdcfromRational125uMwY.evaluate = function (hs_zddNum3126Db3v, hs_zddIntegral26Db3j, hs_eta26Db3n) {
        var hs_zddReal2226Db3k = new $hs.Thunk();
        hs_zddReal2226Db3k.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26Db3j);
        };
        var hs_zddNum3226Db3m = new $hs.Thunk();
        hs_zddNum3226Db3m.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226Db3k);
        };
        var hs_wild26DbuY = hs_eta26Db3n;
        if (hs_eta26Db3n.notEvaluated) {
            hs_wild26DbuY = hs_eta26Db3n.hscall();
        }
        var hs_x26Db3r = hs_wild26DbuY.data[0];
        var hs_y26Db3t = hs_wild26DbuY.data[1];
        var hs_sat26DbuZ = new $hs.Thunk();
        hs_sat26DbuZ.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226Db3m, hs_y26Db3t);
        };
        var hs_sat26Dbv0 = new $hs.Thunk();
        hs_sat26Dbv0.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226Db3m, hs_x26Db3r);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall(hs_zddIntegral26Db3j, hs_sat26Dbv0, hs_sat26DbuZ);
    };
    hs_a2025uMxh.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_zdczs125uMwj.hscall(hs_zddNum1425uMtr, $hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2125uMxj.evaluate = function (hs_eta1cW6l3) {
        return hs_zdcrecip125uMtV.hscall(hs_zddNum1425uMtr, $hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta1cW6l3);
    };
    hs_a2225uMxl.evaluate = function (hs_eta1cW6l3) {
        return hs_zdcfromRational125uMwY.hscall(hs_zddNum1425uMtr, $hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta1cW6l3);
    };
    hs_zdfFractionalRatio125uMxn.data = [hs_zddNum1425uMtr, hs_a2025uMxh, hs_a2125uMxj, hs_a2225uMxl];
    this.hs_zdfFractionalRatio.evaluate = function (hs_zddNum3126Db3G, hs_zddIntegral26Db3H) {
        var hs_sat26Dbv1 = new $hs.Func(1);
        hs_sat26Dbv1.evaluate = function (hs_eta1cW6l3) {
            return hs_zdcfromRational125uMwY.hscall(hs_zddNum3126Db3G, hs_zddIntegral26Db3H, hs_eta1cW6l3);
        };
        var hs_sat26Dbv2 = new $hs.Func(1);
        hs_sat26Dbv2.evaluate = function (hs_eta1cW6l3) {
            return hs_zdcrecip125uMtV.hscall(hs_zddNum3126Db3G, hs_zddIntegral26Db3H, hs_eta1cW6l3);
        };
        var hs_sat26Dbv3 = new $hs.Func(2);
        hs_sat26Dbv3.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczs125uMwj.hscall(hs_zddNum3126Db3G, hs_zddIntegral26Db3H, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddNum3126Db3G, hs_sat26Dbv3, hs_sat26Dbv2, hs_sat26Dbv1];
        return $res;
    };
    hs_zddFractional25uMxw.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall(hs_zddNum1425uMtr, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdcproperFraction25uMxy.evaluate = function (hs_zddIntegral26Db3Z, hs_eta26Db3R) {
        var hs_wild26Dbv4 = hs_eta26Db3R;
        if (hs_eta26Db3R.notEvaluated) {
            hs_wild26Dbv4 = hs_eta26Db3R.hscall();
        }
        var hs_x26Db3W = hs_wild26Dbv4.data[0];
        var hs_y26Db3X = hs_wild26Dbv4.data[1];
        var hs_ds26Db3Y = new $hs.Thunk();
        hs_ds26Db3Y.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_x26Db3W, hs_y26Db3X);
        };
        var hs_sat26Dbv8 = new $hs.Thunk();
        hs_sat26Dbv8.evaluateOnce = function () {
            var hs_wild126Dbv6 = hs_ds26Db3Y;
            if (hs_ds26Db3Y.notEvaluated) {
                hs_wild126Dbv6 = hs_ds26Db3Y.hscall();
            }
            var hs_r26Db4c = hs_wild126Dbv6.data[1];
            var hs_tpl26Db4e = hs_r26Db4c;
            if (hs_r26Db4c.notEvaluated) {
                hs_tpl26Db4e = hs_r26Db4c.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [hs_tpl26Db4e, hs_y26Db3X];
            return $res;
        };
        var hs_sat26Dbve = new $hs.Thunk();
        hs_sat26Dbve.evaluateOnce = function () {
            var hs_sat26Dbvb = new $hs.Thunk();
            hs_sat26Dbvb.evaluateOnce = function () {
                var hs_sat26Dbva = new $hs.Thunk();
                hs_sat26Dbva.evaluateOnce = function () {
                    var hs_wild126Dbv7 = hs_ds26Db3Y;
                    if (hs_ds26Db3Y.notEvaluated) {
                        hs_wild126Dbv7 = hs_ds26Db3Y.hscall();
                    }
                    var hs_q26Db45 = hs_wild126Dbv7.data[0];
                    if (hs_q26Db45.notEvaluated) {
                        return hs_q26Db45.hscall();
                    } else {
                        return hs_q26Db45;
                    }
                };
                return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26Dbva);
            };
            var hs_sat26Dbvd = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26Db3Z);
            var hs_sat26Dbvc = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26Dbvd);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26Dbvc, hs_sat26Dbvb);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dbve, hs_sat26Dbv8];
        return $res;
    };
    hs_zdcproperFraction125uMy1.evaluate = function (hs_zddReal2226Db4N, hs_zddFractional626Db4O, hs_zddIntegral26Db4s, hs_zddIntegral126Db4w, hs_eta26Db4n) {
        var hs_wild26Dbvf = hs_eta26Db4n;
        if (hs_eta26Db4n.notEvaluated) {
            hs_wild26Dbvf = hs_eta26Db4n.hscall();
        }
        var hs_x26Db4t = hs_wild26Dbvf.data[0];
        var hs_y26Db4u = hs_wild26Dbvf.data[1];
        var hs_ds26Db4v = new $hs.Thunk();
        hs_ds26Db4v.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_quotRem.hscall(hs_zddIntegral26Db4s, hs_x26Db4t, hs_y26Db4u);
        };
        var hs_sat26Dbvj = new $hs.Thunk();
        hs_sat26Dbvj.evaluateOnce = function () {
            var hs_wild126Dbvh = hs_ds26Db4v;
            if (hs_ds26Db4v.notEvaluated) {
                hs_wild126Dbvh = hs_ds26Db4v.hscall();
            }
            var hs_r26Db4J = hs_wild126Dbvh.data[1];
            var hs_tpl26Db4L = hs_r26Db4J;
            if (hs_r26Db4J.notEvaluated) {
                hs_tpl26Db4L = hs_r26Db4J.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [hs_tpl26Db4L, hs_y26Db4u];
            return $res;
        };
        var hs_sat26Dbvp = new $hs.Thunk();
        hs_sat26Dbvp.evaluateOnce = function () {
            var hs_sat26Dbvm = new $hs.Thunk();
            hs_sat26Dbvm.evaluateOnce = function () {
                var hs_sat26Dbvl = new $hs.Thunk();
                hs_sat26Dbvl.evaluateOnce = function () {
                    var hs_wild126Dbvi = hs_ds26Db4v;
                    if (hs_ds26Db4v.notEvaluated) {
                        hs_wild126Dbvi = hs_ds26Db4v.hscall();
                    }
                    var hs_q26Db4C = hs_wild126Dbvi.data[0];
                    if (hs_q26Db4C.notEvaluated) {
                        return hs_q26Db4C.hscall();
                    } else {
                        return hs_q26Db4C;
                    }
                };
                return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26Db4s, hs_sat26Dbvl);
            };
            var hs_sat26Dbvo = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral126Db4w);
            var hs_sat26Dbvn = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26Dbvo);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26Dbvn, hs_sat26Dbvm);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dbvp, hs_sat26Dbvj];
        return $res;
    };
    hs_a2325uMyA.evaluate = function (hs_zddIntegral26Db51, hs_eta26Db4T) {
        var hs_wild26Dbvq = hs_eta26Db4T;
        if (hs_eta26Db4T.notEvaluated) {
            hs_wild26Dbvq = hs_eta26Db4T.hscall();
        }
        var hs_x26Db4Y = hs_wild26Dbvq.data[0];
        var hs_y26Db4Z = hs_wild26Dbvq.data[1];
        var hs_ds26Db50 = new $hs.Thunk();
        hs_ds26Db50.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_x26Db4Y, hs_y26Db4Z);
        };
        var hs_sat26Dbvu = new $hs.Thunk();
        hs_sat26Dbvu.evaluateOnce = function () {
            var hs_wild126Dbvs = hs_ds26Db50;
            if (hs_ds26Db50.notEvaluated) {
                hs_wild126Dbvs = hs_ds26Db50.hscall();
            }
            var hs_r26Db5e = hs_wild126Dbvs.data[1];
            var hs_tpl26Db5g = hs_r26Db5e;
            if (hs_r26Db5e.notEvaluated) {
                hs_tpl26Db5g = hs_r26Db5e.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [hs_tpl26Db5g, hs_y26Db4Z];
            return $res;
        };
        var hs_sat26DbvA = new $hs.Thunk();
        hs_sat26DbvA.evaluateOnce = function () {
            var hs_sat26Dbvx = new $hs.Thunk();
            hs_sat26Dbvx.evaluateOnce = function () {
                var hs_sat26Dbvw = new $hs.Thunk();
                hs_sat26Dbvw.evaluateOnce = function () {
                    var hs_wild126Dbvt = hs_ds26Db50;
                    if (hs_ds26Db50.notEvaluated) {
                        hs_wild126Dbvt = hs_ds26Db50.hscall();
                    }
                    var hs_q26Db57 = hs_wild126Dbvt.data[0];
                    if (hs_q26Db57.notEvaluated) {
                        return hs_q26Db57.hscall();
                    } else {
                        return hs_q26Db57;
                    }
                };
                return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26Dbvw);
            };
            var hs_sat26Dbvz = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26Db51);
            var hs_sat26Dbvy = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26Dbvz);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26Dbvy, hs_sat26Dbvx);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DbvA, hs_sat26Dbvu];
        return $res;
    };
    this.hs_zdfRealFracRatio.evaluate = function (hs_zddReal2226Db6d, hs_zddFractional626Db6e, hs_zddIntegral26Db6f) {
        var hs_sat26DbvB = new $hs.Thunk();
        hs_sat26DbvB.evaluateOnce = function () {
            return hs_zdcfloor25uMz5.hscall(hs_zddReal2226Db6d, hs_zddFractional626Db6e, hs_zddIntegral26Db6f);
        };
        var hs_sat26DbvC = new $hs.Thunk();
        hs_sat26DbvC.evaluateOnce = function () {
            return hs_zdcceiling25uMz7.hscall(hs_zddReal2226Db6d, hs_zddFractional626Db6e, hs_zddIntegral26Db6f);
        };
        var hs_sat26DbvD = new $hs.Thunk();
        hs_sat26DbvD.evaluateOnce = function () {
            return hs_zdcround25uMz9.hscall(hs_zddReal2226Db6d, hs_zddFractional626Db6e, hs_zddIntegral26Db6f);
        };
        var hs_sat26DbvE = new $hs.Func(1);
        hs_sat26DbvE.evaluate = function (hs_eta1cW6l3) {
            return hs_zdctruncate25uMz3.hscall(hs_zddReal2226Db6d, hs_zddFractional626Db6e, hs_zddIntegral26Db6f, hs_eta1cW6l3);
        };
        var hs_sat26DbvF = new $hs.Func(2);
        hs_sat26DbvF.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcproperFraction125uMy1.hscall(hs_zddReal2226Db6d, hs_zddFractional626Db6e, hs_zddIntegral26Db6f, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddReal2226Db6d, hs_zddFractional626Db6e, hs_sat26DbvF, hs_sat26DbvE, hs_sat26DbvD, hs_sat26DbvC, hs_sat26DbvB];
        return $res;
    };
    hs_zdctruncate25uMz3.evaluate = function (hs_zddReal2226Db6q, hs_zddFractional626Db6r, hs_zddIntegral26Db6s, hs_eta26Db6v) {
        var hs_zddRealFrac326Db6t = new $hs.Thunk();
        hs_zddRealFrac326Db6t.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfRealFracRatio.hscall(hs_zddReal2226Db6q, hs_zddFractional626Db6r, hs_zddIntegral26Db6s);
        };
        var hs_sat26DbvI = new $hs.Func(1);
        hs_sat26DbvI.evaluate = function (hs_x26Db6w) {
            var hs_wild26DbvG = $hs.modules.GHCziReal.hs_properFraction.hscall(hs_zddRealFrac326Db6t, hs_eta26Db6v, hs_x26Db6w);
            var hs_m26Db6A = hs_wild26DbvG.data[0];
            if (hs_m26Db6A.notEvaluated) {
                return hs_m26Db6A.hscall();
            } else {
                return hs_m26Db6A;
            }
        };
        if (hs_sat26DbvI.notEvaluated) {
            return hs_sat26DbvI.hscall();
        } else {
            return hs_sat26DbvI;
        }
    };
    hs_zdcfloor25uMz5.evaluate = function (hs_zddReal2226Db6G, hs_zddFractional626Db6H, hs_zddIntegral26Db6I) {
        var hs_zddRealFrac326Db6J = new $hs.Thunk();
        hs_zddRealFrac326Db6J.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfRealFracRatio.hscall(hs_zddReal2226Db6G, hs_zddFractional626Db6H, hs_zddIntegral26Db6I);
        };
        var hs_zddReal2326Db6L = new $hs.Thunk();
        hs_zddReal2326Db6L.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac326Db6J);
        };
        var hs_zddNum3126Db6N = new $hs.Thunk();
        hs_zddNum3126Db6N.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2326Db6L);
        };
        var hs_zddOrd1726Db6P = new $hs.Thunk();
        hs_zddOrd1726Db6P.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2326Db6L);
        };
        var hs_sat26DbvW = new $hs.Func(1);
        hs_sat26DbvW.evaluate = function (hs_zddIntegral126Db6S) {
            var hs_zddReal2426Db6T = new $hs.Thunk();
            hs_zddReal2426Db6T.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral126Db6S);
            };
            var hs_zddNum3226Db6V = new $hs.Thunk();
            hs_zddNum3226Db6V.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2426Db6T);
            };
            var hs_sat26Db7k = new $hs.Func(1);
            hs_sat26Db7k.evaluate = function (hs_x26Db6Y) {
                var hs_ds26Db6Z = new $hs.Thunk();
                hs_ds26Db6Z.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_properFraction.hscall(hs_zddRealFrac326Db6J, hs_zddIntegral126Db6S, hs_x26Db6Y);
                };
                var hs_sat26DbvM = new $hs.Thunk();
                hs_sat26DbvM.evaluateOnce = function () {
                    var hs_sat26DbvJ = new $hs.Thunk();
                    hs_sat26DbvJ.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Db6N, hs_sat26DbvJ);
                };
                var hs_sat26DbvP = new $hs.Thunk();
                hs_sat26DbvP.evaluateOnce = function () {
                    var hs_wild26DbvL = hs_ds26Db6Z;
                    if (hs_ds26Db6Z.notEvaluated) {
                        hs_wild26DbvL = hs_ds26Db6Z.hscall();
                    }
                    var hs_r26Db73 = hs_wild26DbvL.data[1];
                    if (hs_r26Db73.notEvaluated) {
                        return hs_r26Db73.hscall();
                    } else {
                        return hs_r26Db73;
                    }
                };
                var hs_wild26DbvO = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1726Db6P, hs_sat26DbvP, hs_sat26DbvM);
                switch (hs_wild26DbvO.tag) {
                case 1:
                    var hs_wild126DbvN = hs_ds26Db6Z;
                    if (hs_ds26Db6Z.notEvaluated) {
                        hs_wild126DbvN = hs_ds26Db6Z.hscall();
                    }
                    var hs_n26Db7b = hs_wild126DbvN.data[0];
                    if (hs_n26Db7b.notEvaluated) {
                        return hs_n26Db7b.hscall();
                    } else {
                        return hs_n26Db7b;
                    }
                case 2:
                    var hs_sat26DbvT = new $hs.Thunk();
                    hs_sat26DbvT.evaluateOnce = function () {
                        var hs_sat26DbvR = new $hs.Thunk();
                        hs_sat26DbvR.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226Db6V, hs_sat26DbvR);
                    };
                    var hs_sat26DbvV = new $hs.Thunk();
                    hs_sat26DbvV.evaluateOnce = function () {
                        var hs_wild126DbvS = hs_ds26Db6Z;
                        if (hs_ds26Db6Z.notEvaluated) {
                            hs_wild126DbvS = hs_ds26Db6Z.hscall();
                        }
                        var hs_n26Db7f = hs_wild126DbvS.data[0];
                        if (hs_n26Db7f.notEvaluated) {
                            return hs_n26Db7f.hscall();
                        } else {
                            return hs_n26Db7f;
                        }
                    };
                    return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum3226Db6V, hs_sat26DbvV, hs_sat26DbvT);
                }
            };
            if (hs_sat26Db7k.notEvaluated) {
                return hs_sat26Db7k.hscall();
            } else {
                return hs_sat26Db7k;
            }
        };
        if (hs_sat26DbvW.notEvaluated) {
            return hs_sat26DbvW.hscall();
        } else {
            return hs_sat26DbvW;
        }
    };
    hs_zdcceiling25uMz7.evaluate = function (hs_zddReal2226Db7q, hs_zddFractional626Db7r, hs_zddIntegral26Db7s) {
        var hs_zddRealFrac326Db7t = new $hs.Thunk();
        hs_zddRealFrac326Db7t.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfRealFracRatio.hscall(hs_zddReal2226Db7q, hs_zddFractional626Db7r, hs_zddIntegral26Db7s);
        };
        var hs_zddReal2326Db7v = new $hs.Thunk();
        hs_zddReal2326Db7v.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac326Db7t);
        };
        var hs_zddNum3126Db7x = new $hs.Thunk();
        hs_zddNum3126Db7x.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2326Db7v);
        };
        var hs_zddOrd1726Db7z = new $hs.Thunk();
        hs_zddOrd1726Db7z.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2326Db7v);
        };
        var hs_sat26Dbwa = new $hs.Func(1);
        hs_sat26Dbwa.evaluate = function (hs_zddIntegral126Db7C) {
            var hs_zddReal2426Db7D = new $hs.Thunk();
            hs_zddReal2426Db7D.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral126Db7C);
            };
            var hs_zddNum3226Db7F = new $hs.Thunk();
            hs_zddNum3226Db7F.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2426Db7D);
            };
            var hs_sat26Db84 = new $hs.Func(1);
            hs_sat26Db84.evaluate = function (hs_x26Db7I) {
                var hs_ds26Db7J = new $hs.Thunk();
                hs_ds26Db7J.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_properFraction.hscall(hs_zddRealFrac326Db7t, hs_zddIntegral126Db7C, hs_x26Db7I);
                };
                var hs_sat26Dbw0 = new $hs.Thunk();
                hs_sat26Dbw0.evaluateOnce = function () {
                    var hs_sat26DbvX = new $hs.Thunk();
                    hs_sat26DbvX.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Db7x, hs_sat26DbvX);
                };
                var hs_sat26Dbw3 = new $hs.Thunk();
                hs_sat26Dbw3.evaluateOnce = function () {
                    var hs_wild26DbvZ = hs_ds26Db7J;
                    if (hs_ds26Db7J.notEvaluated) {
                        hs_wild26DbvZ = hs_ds26Db7J.hscall();
                    }
                    var hs_r26Db7N = hs_wild26DbvZ.data[1];
                    if (hs_r26Db7N.notEvaluated) {
                        return hs_r26Db7N.hscall();
                    } else {
                        return hs_r26Db7N;
                    }
                };
                var hs_wild26Dbw2 = $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd1726Db7z, hs_sat26Dbw3, hs_sat26Dbw0);
                switch (hs_wild26Dbw2.tag) {
                case 1:
                    var hs_wild126Dbw1 = hs_ds26Db7J;
                    if (hs_ds26Db7J.notEvaluated) {
                        hs_wild126Dbw1 = hs_ds26Db7J.hscall();
                    }
                    var hs_n26Db7V = hs_wild126Dbw1.data[0];
                    if (hs_n26Db7V.notEvaluated) {
                        return hs_n26Db7V.hscall();
                    } else {
                        return hs_n26Db7V;
                    }
                case 2:
                    var hs_sat26Dbw7 = new $hs.Thunk();
                    hs_sat26Dbw7.evaluateOnce = function () {
                        var hs_sat26Dbw5 = new $hs.Thunk();
                        hs_sat26Dbw5.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226Db7F, hs_sat26Dbw5);
                    };
                    var hs_sat26Dbw9 = new $hs.Thunk();
                    hs_sat26Dbw9.evaluateOnce = function () {
                        var hs_wild126Dbw6 = hs_ds26Db7J;
                        if (hs_ds26Db7J.notEvaluated) {
                            hs_wild126Dbw6 = hs_ds26Db7J.hscall();
                        }
                        var hs_n26Db7Z = hs_wild126Dbw6.data[0];
                        if (hs_n26Db7Z.notEvaluated) {
                            return hs_n26Db7Z.hscall();
                        } else {
                            return hs_n26Db7Z;
                        }
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum3226Db7F, hs_sat26Dbw9, hs_sat26Dbw7);
                }
            };
            if (hs_sat26Db84.notEvaluated) {
                return hs_sat26Db84.hscall();
            } else {
                return hs_sat26Db84;
            }
        };
        if (hs_sat26Dbwa.notEvaluated) {
            return hs_sat26Dbwa.hscall();
        } else {
            return hs_sat26Dbwa;
        }
    };
    hs_zdcround25uMz9.evaluate = function (hs_zddReal2226Db8a, hs_zddFractional626Db8b, hs_zddIntegral26Db8c) {
        var hs_zddRealFrac326Db8d = new $hs.Thunk();
        hs_zddRealFrac326Db8d.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfRealFracRatio.hscall(hs_zddReal2226Db8a, hs_zddFractional626Db8b, hs_zddIntegral26Db8c);
        };
        var hs_zddFractional726Db8f = new $hs.Thunk();
        hs_zddFractional726Db8f.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp2RealFrac.hscall(hs_zddRealFrac326Db8d);
        };
        var hs_zddReal2326Db8h = new $hs.Thunk();
        hs_zddReal2326Db8h.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac326Db8d);
        };
        var hs_zddNum3126Db8j = new $hs.Thunk();
        hs_zddNum3126Db8j.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2326Db8h);
        };
        var hs_zddEq1526Db8l = new $hs.Thunk();
        hs_zddEq1526Db8l.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum3126Db8j);
        };
        var hs_zddOrd1726Db8n = new $hs.Thunk();
        hs_zddOrd1726Db8n.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2326Db8h);
        };
        var hs_sat26DbwE = new $hs.Func(1);
        hs_sat26DbwE.evaluate = function (hs_zddIntegral126Db8q) {
            var hs_zddReal2426Db8r = new $hs.Thunk();
            hs_zddReal2426Db8r.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral126Db8q);
            };
            var hs_zddNum3226Db8t = new $hs.Thunk();
            hs_zddNum3226Db8t.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2426Db8r);
            };
            var hs_sat26Db9e = new $hs.Func(1);
            hs_sat26Db9e.evaluate = function (hs_x26Db8w) {
                var hs_ds26Db8x = new $hs.Thunk();
                hs_ds26Db8x.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_properFraction.hscall(hs_zddRealFrac326Db8d, hs_zddIntegral126Db8q, hs_x26Db8w);
                };
                var hs_r26Db8D = new $hs.Thunk();
                hs_r26Db8D.evaluateOnce = function () {
                    var hs_wild26Dbwc = hs_ds26Db8x;
                    if (hs_ds26Db8x.notEvaluated) {
                        hs_wild26Dbwc = hs_ds26Db8x.hscall();
                    }
                    var hs_r126Db8C = hs_wild26Dbwc.data[1];
                    if (hs_r126Db8C.notEvaluated) {
                        return hs_r126Db8C.hscall();
                    } else {
                        return hs_r126Db8C;
                    }
                };
                var hs_n26Db8J = new $hs.Thunk();
                hs_n26Db8J.evaluateOnce = function () {
                    var hs_wild26Dbwd = hs_ds26Db8x;
                    if (hs_ds26Db8x.notEvaluated) {
                        hs_wild26Dbwd = hs_ds26Db8x.hscall();
                    }
                    var hs_n126Db8I = hs_wild26Dbwd.data[0];
                    if (hs_n126Db8I.notEvaluated) {
                        return hs_n126Db8I.hscall();
                    } else {
                        return hs_n126Db8I;
                    }
                };
                var hs_m26Db8S = new $hs.Thunk();
                hs_m26Db8S.evaluateOnce = function () {
                    var hs_sat26Dbwh = new $hs.Thunk();
                    hs_sat26Dbwh.evaluateOnce = function () {
                        var hs_sat26Dbwf = new $hs.Thunk();
                        hs_sat26Dbwf.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Db8j, hs_sat26Dbwf);
                    };
                    var hs_wild26Dbwg = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1726Db8n, hs_r26Db8D, hs_sat26Dbwh);
                    switch (hs_wild26Dbwg.tag) {
                    case 1:
                        var hs_sat26Dbwj = new $hs.Thunk();
                        hs_sat26Dbwj.evaluateOnce = function () {
                            var hs_sat26Dbwi = new $hs.Thunk();
                            hs_sat26Dbwi.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226Db8t, hs_sat26Dbwi);
                        };
                        return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum3226Db8t, hs_n26Db8J, hs_sat26Dbwj);
                    case 2:
                        var hs_sat26Dbwl = new $hs.Thunk();
                        hs_sat26Dbwl.evaluateOnce = function () {
                            var hs_sat26Dbwk = new $hs.Thunk();
                            hs_sat26Dbwk.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226Db8t, hs_sat26Dbwk);
                        };
                        return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum3226Db8t, hs_n26Db8J, hs_sat26Dbwl);
                    }
                };
                var hs_ds126Db90 = new $hs.Thunk();
                hs_ds126Db90.evaluateOnce = function () {
                    var hs_sat26Dbwr = new $hs.Thunk();
                    hs_sat26Dbwr.evaluateOnce = function () {
                        var hs_sat26Dbwp = new $hs.Thunk();
                        hs_sat26Dbwp.evaluateOnce = function () {
                            var hs_sat26Dbwm = new $hs.Thunk();
                            hs_sat26Dbwm.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                            };
                            var hs_sat26Dbwn = new $hs.Thunk();
                            hs_sat26Dbwn.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            var hs_sat26Dbwo = new $hs.Data(1);
                            hs_sat26Dbwo.data = [hs_sat26Dbwn, hs_sat26Dbwm];
                            return $hs.modules.GHCziReal.hs_fromRational.hscall(hs_zddFractional726Db8f, hs_sat26Dbwo);
                        };
                        var hs_sat26Dbwq = new $hs.Thunk();
                        hs_sat26Dbwq.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_abs.hscall(hs_zddNum3126Db8j, hs_r26Db8D);
                        };
                        return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum3126Db8j, hs_sat26Dbwq, hs_sat26Dbwp);
                    };
                    return $hs.modules.GHCziNum.hs_signum.hscall(hs_zddNum3126Db8j, hs_sat26Dbwr);
                };
                var hs_sat26Dbwv = new $hs.Thunk();
                hs_sat26Dbwv.evaluateOnce = function () {
                    var hs_sat26Dbwt = new $hs.Thunk();
                    hs_sat26Dbwt.evaluateOnce = function () {
                        var hs_sat26Dbws = new $hs.Thunk();
                        hs_sat26Dbws.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Db8j, hs_sat26Dbws);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum3126Db8j, hs_sat26Dbwt);
                };
                var hs_wild26Dbwu = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1526Db8l, hs_ds126Db90, hs_sat26Dbwv);
                switch (hs_wild26Dbwu.tag) {
                case 1:
                    var hs_sat26Dbwy = new $hs.Thunk();
                    hs_sat26Dbwy.evaluateOnce = function () {
                        var hs_sat26Dbww = new $hs.Thunk();
                        hs_sat26Dbww.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Db8j, hs_sat26Dbww);
                    };
                    var hs_wild126Dbwx = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1526Db8l, hs_ds126Db90, hs_sat26Dbwy);
                    switch (hs_wild126Dbwx.tag) {
                    case 1:
                        var hs_sat26DbwC = new $hs.Thunk();
                        hs_sat26DbwC.evaluateOnce = function () {
                            var hs_sat26Dbwz = new $hs.Thunk();
                            hs_sat26Dbwz.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Db8j, hs_sat26Dbwz);
                        };
                        var hs_wild226DbwB = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1526Db8l, hs_ds126Db90, hs_sat26DbwC);
                        switch (hs_wild226DbwB.tag) {
                        case 1:
                            var hs_sat26DbwA = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("round default defn: Bad value\x00");
                            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DbwA);
                        case 2:
                            if (hs_m26Db8S.notEvaluated) {
                                return hs_m26Db8S.hscall();
                            } else {
                                return hs_m26Db8S;
                            }
                        }
                    case 2:
                        var hs_wild226DbwD = $hs.modules.GHCziReal.hs_even.hscall(hs_zddIntegral126Db8q, hs_n26Db8J);
                        switch (hs_wild226DbwD.tag) {
                        case 1:
                            if (hs_m26Db8S.notEvaluated) {
                                return hs_m26Db8S.hscall();
                            } else {
                                return hs_m26Db8S;
                            }
                        case 2:
                            if (hs_n26Db8J.notEvaluated) {
                                return hs_n26Db8J.hscall();
                            } else {
                                return hs_n26Db8J;
                            }
                        }
                    }
                case 2:
                    if (hs_n26Db8J.notEvaluated) {
                        return hs_n26Db8J.hscall();
                    } else {
                        return hs_n26Db8J;
                    }
                }
            };
            if (hs_sat26Db9e.notEvaluated) {
                return hs_sat26Db9e.hscall();
            } else {
                return hs_sat26Db9e;
            }
        };
        if (hs_sat26DbwE.notEvaluated) {
            return hs_sat26DbwE.hscall();
        } else {
            return hs_sat26DbwE;
        }
    };
    hs_zddRealFrac25uMzb.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfRealFracRatio.hscall(hs_zddReal1125uMvj, hs_zddFractional25uMxw, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddReal1525uMzd.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac25uMzb);
    };
    hs_zddNum1925uMzf.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1525uMzd);
    };
    hs_zddEq525uMzh.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum1925uMzf);
    };
    hs_zddOrd925uMzj.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal1525uMzd);
    };
    hs_zddFractional125uMzl.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2RealFrac.hscall(hs_zddRealFrac25uMzb);
    };
    hs_zdcround125uMzn.evaluate = function (hs_zddIntegral26Db9j, hs_eta26Db9o) {
        var hs_zddReal2226Db9k = new $hs.Thunk();
        hs_zddReal2226Db9k.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26Db9j);
        };
        var hs_zddNum3126Db9m = new $hs.Thunk();
        hs_zddNum3126Db9m.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226Db9k);
        };
        var hs_ds26Db9p = new $hs.Thunk();
        hs_ds26Db9p.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_properFraction.hscall(hs_zddRealFrac25uMzb, hs_zddIntegral26Db9j, hs_eta26Db9o);
        };
        var hs_r26Db9v = new $hs.Thunk();
        hs_r26Db9v.evaluateOnce = function () {
            var hs_wild26DbwG = hs_ds26Db9p;
            if (hs_ds26Db9p.notEvaluated) {
                hs_wild26DbwG = hs_ds26Db9p.hscall();
            }
            var hs_r126Db9u = hs_wild26DbwG.data[1];
            if (hs_r126Db9u.notEvaluated) {
                return hs_r126Db9u.hscall();
            } else {
                return hs_r126Db9u;
            }
        };
        var hs_n26Db9B = new $hs.Thunk();
        hs_n26Db9B.evaluateOnce = function () {
            var hs_wild26DbwH = hs_ds26Db9p;
            if (hs_ds26Db9p.notEvaluated) {
                hs_wild26DbwH = hs_ds26Db9p.hscall();
            }
            var hs_n126Db9A = hs_wild26DbwH.data[0];
            if (hs_n126Db9A.notEvaluated) {
                return hs_n126Db9A.hscall();
            } else {
                return hs_n126Db9A;
            }
        };
        var hs_m26Db9K = new $hs.Thunk();
        hs_m26Db9K.evaluateOnce = function () {
            var hs_sat26DbwL = new $hs.Thunk();
            hs_sat26DbwL.evaluateOnce = function () {
                var hs_sat26DbwJ = new $hs.Thunk();
                hs_sat26DbwJ.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1925uMzf, hs_sat26DbwJ);
            };
            var hs_wild26DbwK = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd925uMzj, hs_r26Db9v, hs_sat26DbwL);
            switch (hs_wild26DbwK.tag) {
            case 1:
                var hs_sat26DbwN = new $hs.Thunk();
                hs_sat26DbwN.evaluateOnce = function () {
                    var hs_sat26DbwM = new $hs.Thunk();
                    hs_sat26DbwM.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Db9m, hs_sat26DbwM);
                };
                return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum3126Db9m, hs_n26Db9B, hs_sat26DbwN);
            case 2:
                var hs_sat26DbwP = new $hs.Thunk();
                hs_sat26DbwP.evaluateOnce = function () {
                    var hs_sat26DbwO = new $hs.Thunk();
                    hs_sat26DbwO.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Db9m, hs_sat26DbwO);
                };
                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum3126Db9m, hs_n26Db9B, hs_sat26DbwP);
            }
        };
        var hs_ds126Db9S = new $hs.Thunk();
        hs_ds126Db9S.evaluateOnce = function () {
            var hs_sat26DbwV = new $hs.Thunk();
            hs_sat26DbwV.evaluateOnce = function () {
                var hs_sat26DbwT = new $hs.Thunk();
                hs_sat26DbwT.evaluateOnce = function () {
                    var hs_sat26DbwQ = new $hs.Thunk();
                    hs_sat26DbwQ.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                    };
                    var hs_sat26DbwR = new $hs.Thunk();
                    hs_sat26DbwR.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    var hs_sat26DbwS = new $hs.Data(1);
                    hs_sat26DbwS.data = [hs_sat26DbwR, hs_sat26DbwQ];
                    return $hs.modules.GHCziReal.hs_fromRational.hscall(hs_zddFractional125uMzl, hs_sat26DbwS);
                };
                var hs_sat26DbwU = new $hs.Thunk();
                hs_sat26DbwU.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_abs.hscall(hs_zddNum1925uMzf, hs_r26Db9v);
                };
                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum1925uMzf, hs_sat26DbwU, hs_sat26DbwT);
            };
            return $hs.modules.GHCziNum.hs_signum.hscall(hs_zddNum1925uMzf, hs_sat26DbwV);
        };
        var hs_sat26DbwZ = new $hs.Thunk();
        hs_sat26DbwZ.evaluateOnce = function () {
            var hs_sat26DbwX = new $hs.Thunk();
            hs_sat26DbwX.evaluateOnce = function () {
                var hs_sat26DbwW = new $hs.Thunk();
                hs_sat26DbwW.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1925uMzf, hs_sat26DbwW);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum1925uMzf, hs_sat26DbwX);
        };
        var hs_wild26DbwY = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq525uMzh, hs_ds126Db9S, hs_sat26DbwZ);
        switch (hs_wild26DbwY.tag) {
        case 1:
            var hs_sat26Dbx2 = new $hs.Thunk();
            hs_sat26Dbx2.evaluateOnce = function () {
                var hs_sat26Dbx0 = new $hs.Thunk();
                hs_sat26Dbx0.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1925uMzf, hs_sat26Dbx0);
            };
            var hs_wild126Dbx1 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq525uMzh, hs_ds126Db9S, hs_sat26Dbx2);
            switch (hs_wild126Dbx1.tag) {
            case 1:
                var hs_sat26Dbx6 = new $hs.Thunk();
                hs_sat26Dbx6.evaluateOnce = function () {
                    var hs_sat26Dbx3 = new $hs.Thunk();
                    hs_sat26Dbx3.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1925uMzf, hs_sat26Dbx3);
                };
                var hs_wild226Dbx5 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq525uMzh, hs_ds126Db9S, hs_sat26Dbx6);
                switch (hs_wild226Dbx5.tag) {
                case 1:
                    var hs_sat26Dbx4 = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("round default defn: Bad value\x00");
                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dbx4);
                case 2:
                    if (hs_m26Db9K.notEvaluated) {
                        return hs_m26Db9K.hscall();
                    } else {
                        return hs_m26Db9K;
                    }
                }
            case 2:
                var hs_wild226Dbx7 = $hs.modules.GHCziReal.hs_even.hscall(hs_zddIntegral26Db9j, hs_n26Db9B);
                switch (hs_wild226Dbx7.tag) {
                case 1:
                    if (hs_m26Db9K.notEvaluated) {
                        return hs_m26Db9K.hscall();
                    } else {
                        return hs_m26Db9K;
                    }
                case 2:
                    if (hs_n26Db9B.notEvaluated) {
                        return hs_n26Db9B.hscall();
                    } else {
                        return hs_n26Db9B;
                    }
                }
            }
        case 2:
            if (hs_n26Db9B.notEvaluated) {
                return hs_n26Db9B.hscall();
            } else {
                return hs_n26Db9B;
            }
        }
    };
    hs_a2425uMzp.evaluateOnce = function () {
        return hs_zdcround25uMz9.hscall(hs_zddReal1125uMvj, hs_zddFractional25uMxw, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddRealFrac125uMzr.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfRealFracRatio.hscall(hs_zddReal1125uMvj, hs_zddFractional25uMxw, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddReal1625uMzt.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac125uMzr);
    };
    hs_zddNum2025uMzv.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1625uMzt);
    };
    hs_zddOrd1025uMzx.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal1625uMzt);
    };
    hs_zdcceiling125uMzz.evaluate = function (hs_zddIntegral26Dba8, hs_eta26Dbad) {
        var hs_zddReal2226Dba9 = new $hs.Thunk();
        hs_zddReal2226Dba9.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26Dba8);
        };
        var hs_zddNum3126Dbab = new $hs.Thunk();
        hs_zddNum3126Dbab.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226Dba9);
        };
        var hs_ds26Dbae = new $hs.Thunk();
        hs_ds26Dbae.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_properFraction.hscall(hs_zddRealFrac125uMzr, hs_zddIntegral26Dba8, hs_eta26Dbad);
        };
        var hs_sat26Dbxb = new $hs.Thunk();
        hs_sat26Dbxb.evaluateOnce = function () {
            var hs_sat26Dbx8 = new $hs.Thunk();
            hs_sat26Dbx8.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2025uMzv, hs_sat26Dbx8);
        };
        var hs_sat26Dbxe = new $hs.Thunk();
        hs_sat26Dbxe.evaluateOnce = function () {
            var hs_wild26Dbxa = hs_ds26Dbae;
            if (hs_ds26Dbae.notEvaluated) {
                hs_wild26Dbxa = hs_ds26Dbae.hscall();
            }
            var hs_r26Dbai = hs_wild26Dbxa.data[1];
            if (hs_r26Dbai.notEvaluated) {
                return hs_r26Dbai.hscall();
            } else {
                return hs_r26Dbai;
            }
        };
        var hs_wild26Dbxd = $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd1025uMzx, hs_sat26Dbxe, hs_sat26Dbxb);
        switch (hs_wild26Dbxd.tag) {
        case 1:
            var hs_wild126Dbxc = hs_ds26Dbae;
            if (hs_ds26Dbae.notEvaluated) {
                hs_wild126Dbxc = hs_ds26Dbae.hscall();
            }
            var hs_n26Dbaq = hs_wild126Dbxc.data[0];
            if (hs_n26Dbaq.notEvaluated) {
                return hs_n26Dbaq.hscall();
            } else {
                return hs_n26Dbaq;
            }
        case 2:
            var hs_sat26Dbxi = new $hs.Thunk();
            hs_sat26Dbxi.evaluateOnce = function () {
                var hs_sat26Dbxg = new $hs.Thunk();
                hs_sat26Dbxg.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Dbab, hs_sat26Dbxg);
            };
            var hs_sat26Dbxk = new $hs.Thunk();
            hs_sat26Dbxk.evaluateOnce = function () {
                var hs_wild126Dbxh = hs_ds26Dbae;
                if (hs_ds26Dbae.notEvaluated) {
                    hs_wild126Dbxh = hs_ds26Dbae.hscall();
                }
                var hs_n26Dbau = hs_wild126Dbxh.data[0];
                if (hs_n26Dbau.notEvaluated) {
                    return hs_n26Dbau.hscall();
                } else {
                    return hs_n26Dbau;
                }
            };
            return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum3126Dbab, hs_sat26Dbxk, hs_sat26Dbxi);
        }
    };
    hs_a2525uMzB.evaluateOnce = function () {
        return hs_zdcceiling25uMz7.hscall(hs_zddReal1125uMvj, hs_zddFractional25uMxw, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddRealFrac225uMzD.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfRealFracRatio.hscall(hs_zddReal1125uMvj, hs_zddFractional25uMxw, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddReal1725uMzF.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac225uMzD);
    };
    hs_zddNum2125uMzH.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1725uMzF);
    };
    hs_zddOrd1125uMzJ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal1725uMzF);
    };
    hs_zdcfloor125uMzL.evaluate = function (hs_zddIntegral26DbaB, hs_eta26DbaG) {
        var hs_zddReal2226DbaC = new $hs.Thunk();
        hs_zddReal2226DbaC.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DbaB);
        };
        var hs_zddNum3126DbaE = new $hs.Thunk();
        hs_zddNum3126DbaE.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226DbaC);
        };
        var hs_ds26DbaH = new $hs.Thunk();
        hs_ds26DbaH.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_properFraction.hscall(hs_zddRealFrac225uMzD, hs_zddIntegral26DbaB, hs_eta26DbaG);
        };
        var hs_sat26Dbxo = new $hs.Thunk();
        hs_sat26Dbxo.evaluateOnce = function () {
            var hs_sat26Dbxl = new $hs.Thunk();
            hs_sat26Dbxl.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2125uMzH, hs_sat26Dbxl);
        };
        var hs_sat26Dbxr = new $hs.Thunk();
        hs_sat26Dbxr.evaluateOnce = function () {
            var hs_wild26Dbxn = hs_ds26DbaH;
            if (hs_ds26DbaH.notEvaluated) {
                hs_wild26Dbxn = hs_ds26DbaH.hscall();
            }
            var hs_r26DbaL = hs_wild26Dbxn.data[1];
            if (hs_r26DbaL.notEvaluated) {
                return hs_r26DbaL.hscall();
            } else {
                return hs_r26DbaL;
            }
        };
        var hs_wild26Dbxq = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1125uMzJ, hs_sat26Dbxr, hs_sat26Dbxo);
        switch (hs_wild26Dbxq.tag) {
        case 1:
            var hs_wild126Dbxp = hs_ds26DbaH;
            if (hs_ds26DbaH.notEvaluated) {
                hs_wild126Dbxp = hs_ds26DbaH.hscall();
            }
            var hs_n26DbaT = hs_wild126Dbxp.data[0];
            if (hs_n26DbaT.notEvaluated) {
                return hs_n26DbaT.hscall();
            } else {
                return hs_n26DbaT;
            }
        case 2:
            var hs_sat26Dbxv = new $hs.Thunk();
            hs_sat26Dbxv.evaluateOnce = function () {
                var hs_sat26Dbxt = new $hs.Thunk();
                hs_sat26Dbxt.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DbaE, hs_sat26Dbxt);
            };
            var hs_sat26Dbxx = new $hs.Thunk();
            hs_sat26Dbxx.evaluateOnce = function () {
                var hs_wild126Dbxu = hs_ds26DbaH;
                if (hs_ds26DbaH.notEvaluated) {
                    hs_wild126Dbxu = hs_ds26DbaH.hscall();
                }
                var hs_n26DbaX = hs_wild126Dbxu.data[0];
                if (hs_n26DbaX.notEvaluated) {
                    return hs_n26DbaX.hscall();
                } else {
                    return hs_n26DbaX;
                }
            };
            return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum3126DbaE, hs_sat26Dbxx, hs_sat26Dbxv);
        }
    };
    hs_a2625uMzN.evaluateOnce = function () {
        return hs_zdcfloor25uMz5.hscall(hs_zddReal1125uMvj, hs_zddFractional25uMxw, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdctruncate125uMzP.evaluate = function (hs_eta26Dbb5) {
        var hs_zddRealFrac326Dbb3 = new $hs.Thunk();
        hs_zddRealFrac326Dbb3.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfRealFracRatio.hscall(hs_zddReal1125uMvj, hs_zddFractional25uMxw, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
        };
        var hs_sat26DbxA = new $hs.Func(1);
        hs_sat26DbxA.evaluate = function (hs_x26Dbb6) {
            var hs_wild26Dbxy = $hs.modules.GHCziReal.hs_properFraction.hscall(hs_zddRealFrac326Dbb3, hs_eta26Dbb5, hs_x26Dbb6);
            var hs_m26Dbba = hs_wild26Dbxy.data[0];
            if (hs_m26Dbba.notEvaluated) {
                return hs_m26Dbba.hscall();
            } else {
                return hs_m26Dbba;
            }
        };
        if (hs_sat26DbxA.notEvaluated) {
            return hs_sat26DbxA.hscall();
        } else {
            return hs_sat26DbxA;
        }
    };
    hs_a2725uMzR.evaluate = function (hs_eta1cW6l3) {
        return hs_zdctruncate25uMz3.hscall(hs_zddReal1125uMvj, hs_zddFractional25uMxw, $hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta1cW6l3);
    };
    hs_zdfRealFracRatio125uMzT.data = [hs_zddReal1125uMvj, hs_zddFractional25uMxw, hs_a2325uMyA, hs_a2725uMzR, hs_a2425uMzp, hs_a2525uMzB, hs_a2625uMzN];
    hs_zddShow625uMEX.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddEq625uMEZ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum2225uMF1.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall(hs_zddEq625uMEZ, hs_zddShow625uMEX, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_sat26DbxF.evaluateOnce = function () {
        var hs_sat26DbxB = new $hs.Thunk();
        hs_sat26DbxB.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall(hs_zddNum2225uMF1, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
        };
        var hs_sat26DbxE = new $hs.Thunk();
        hs_sat26DbxE.evaluateOnce = function () {
            var hs_sat26DbxC = new $hs.Thunk();
            hs_sat26DbxC.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddEq625uMEZ, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
            };
            return $hs.modules.GHCziReal.hs_zdfRealRatio.hscall(hs_zddNum2225uMF1, hs_sat26DbxC, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
        };
        var hs_sat26DbxD = $hs.modules.GHCziReal.hs_zdfRealFracRatio.hscall(hs_sat26DbxE, hs_sat26DbxB, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
        return $hs.modules.GHCziReal.hs_truncate.hscall(hs_sat26DbxD, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_sat26DbxG.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
    };
    hs_zdcfromEnum25uMF3.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DbxG, hs_sat26DbxF);
    };
    hs_zdcfromEnum125uMFb.evaluate = function (hs_zddIntegral26Dbbu) {
        var hs_zddShow1126Dbbv = new $hs.Thunk();
        hs_zddShow1126Dbbv.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall(hs_zddIntegral26Dbbu);
        };
        var hs_zddEq1526Dbbx = new $hs.Thunk();
        hs_zddEq1526Dbbx.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall(hs_zddIntegral26Dbbu);
        };
        var hs_zddNum3126Dbbz = new $hs.Thunk();
        hs_zddNum3126Dbbz.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall(hs_zddEq1526Dbbx, hs_zddShow1126Dbbv, hs_zddIntegral26Dbbu);
        };
        var hs_sat26DbxL = new $hs.Thunk();
        hs_sat26DbxL.evaluateOnce = function () {
            var hs_sat26DbxH = new $hs.Thunk();
            hs_sat26DbxH.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall(hs_zddNum3126Dbbz, hs_zddIntegral26Dbbu);
            };
            var hs_sat26DbxK = new $hs.Thunk();
            hs_sat26DbxK.evaluateOnce = function () {
                var hs_sat26DbxI = new $hs.Thunk();
                hs_sat26DbxI.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddEq1526Dbbx, hs_zddIntegral26Dbbu);
                };
                return $hs.modules.GHCziReal.hs_zdfRealRatio.hscall(hs_zddNum3126Dbbz, hs_sat26DbxI, hs_zddIntegral26Dbbu);
            };
            var hs_sat26DbxJ = $hs.modules.GHCziReal.hs_zdfRealFracRatio.hscall(hs_sat26DbxK, hs_sat26DbxH, hs_zddIntegral26Dbbu);
            return $hs.modules.GHCziReal.hs_truncate.hscall(hs_sat26DbxJ, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
        };
        var hs_sat26DbxM = new $hs.Thunk();
        hs_sat26DbxM.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DbxM, hs_sat26DbxL);
    };
    hs_zddShow725uMFr.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddEq725uMFt.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum2325uMFv.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall(hs_zddEq725uMFt, hs_zddShow725uMFr, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddFractional225uMFx.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall(hs_zddNum2325uMFv, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdcenumFrom25uMFz.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.GHCziReal.hs_numericEnumFrom.hscall(hs_zddFractional225uMFx, hs_eta1cW6l3);
    };
    hs_zdcenumFrom125uMFB.evaluate = function (hs_zddIntegral26DbbT) {
        var hs_sat26DbxQ = new $hs.Thunk();
        hs_sat26DbxQ.evaluateOnce = function () {
            var hs_sat26DbxP = new $hs.Thunk();
            hs_sat26DbxP.evaluateOnce = function () {
                var hs_sat26DbxN = new $hs.Thunk();
                hs_sat26DbxN.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall(hs_zddIntegral26DbbT);
                };
                var hs_sat26DbxO = new $hs.Thunk();
                hs_sat26DbxO.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall(hs_zddIntegral26DbbT);
                };
                return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall(hs_sat26DbxO, hs_sat26DbxN, hs_zddIntegral26DbbT);
            };
            return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall(hs_sat26DbxP, hs_zddIntegral26DbbT);
        };
        return $hs.modules.GHCziReal.hs_numericEnumFrom.hscall(hs_sat26DbxQ);
    };
    hs_zddShow825uMFJ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddEq825uMFL.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum2425uMFN.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall(hs_zddEq825uMFL, hs_zddShow825uMFJ, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddFractional325uMFP.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall(hs_zddNum2425uMFN, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdcenumFromThen25uMFR.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.GHCziReal.hs_numericEnumFromThen.hscall(hs_zddFractional325uMFP, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcenumFromThen125uMFT.evaluate = function (hs_zddIntegral26Dbcb) {
        var hs_sat26DbxU = new $hs.Thunk();
        hs_sat26DbxU.evaluateOnce = function () {
            var hs_sat26DbxT = new $hs.Thunk();
            hs_sat26DbxT.evaluateOnce = function () {
                var hs_sat26DbxR = new $hs.Thunk();
                hs_sat26DbxR.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall(hs_zddIntegral26Dbcb);
                };
                var hs_sat26DbxS = new $hs.Thunk();
                hs_sat26DbxS.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall(hs_zddIntegral26Dbcb);
                };
                return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall(hs_sat26DbxS, hs_sat26DbxR, hs_zddIntegral26Dbcb);
            };
            return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall(hs_sat26DbxT, hs_zddIntegral26Dbcb);
        };
        return $hs.modules.GHCziReal.hs_numericEnumFromThen.hscall(hs_sat26DbxU);
    };
    hs_zddShow925uMG1.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddEq925uMG3.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum2525uMG5.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall(hs_zddEq925uMG3, hs_zddShow925uMG1, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddFractional425uMG7.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall(hs_zddNum2525uMG5, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddOrd1225uMG9.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddEq925uMG3, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdcenumFromTo25uMGb.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.GHCziReal.hs_numericEnumFromTo.hscall(hs_zddOrd1225uMG9, hs_zddFractional425uMG7, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcenumFromTo125uMGd.evaluate = function (hs_zddIntegral26Dbcw) {
        var hs_zddEq1526Dbcx = new $hs.Thunk();
        hs_zddEq1526Dbcx.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall(hs_zddIntegral26Dbcw);
        };
        var hs_sat26DbxX = new $hs.Thunk();
        hs_sat26DbxX.evaluateOnce = function () {
            var hs_sat26DbxW = new $hs.Thunk();
            hs_sat26DbxW.evaluateOnce = function () {
                var hs_sat26DbxV = new $hs.Thunk();
                hs_sat26DbxV.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall(hs_zddIntegral26Dbcw);
                };
                return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall(hs_zddEq1526Dbcx, hs_sat26DbxV, hs_zddIntegral26Dbcw);
            };
            return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall(hs_sat26DbxW, hs_zddIntegral26Dbcw);
        };
        var hs_sat26DbxY = new $hs.Thunk();
        hs_sat26DbxY.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddEq1526Dbcx, hs_zddIntegral26Dbcw);
        };
        return $hs.modules.GHCziReal.hs_numericEnumFromTo.hscall(hs_sat26DbxY, hs_sat26DbxX);
    };
    hs_zddShow1025uMGn.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddEq1025uMGp.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum2625uMGr.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall(hs_zddEq1025uMGp, hs_zddShow1025uMGn, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddFractional525uMGt.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall(hs_zddNum2625uMGr, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddOrd1325uMGv.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddEq1025uMGp, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdcenumFromThenTo25uMGx.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.GHCziReal.hs_numericEnumFromThenTo.hscall(hs_zddOrd1325uMGv, hs_zddFractional525uMGt, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcenumFromThenTo125uMGz.evaluate = function (hs_zddIntegral26DbcS) {
        var hs_zddEq1526DbcT = new $hs.Thunk();
        hs_zddEq1526DbcT.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall(hs_zddIntegral26DbcS);
        };
        var hs_sat26Dby1 = new $hs.Thunk();
        hs_sat26Dby1.evaluateOnce = function () {
            var hs_sat26Dby0 = new $hs.Thunk();
            hs_sat26Dby0.evaluateOnce = function () {
                var hs_sat26DbxZ = new $hs.Thunk();
                hs_sat26DbxZ.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall(hs_zddIntegral26DbcS);
                };
                return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall(hs_zddEq1526DbcT, hs_sat26DbxZ, hs_zddIntegral26DbcS);
            };
            return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall(hs_sat26Dby0, hs_zddIntegral26DbcS);
        };
        var hs_sat26Dby2 = new $hs.Thunk();
        hs_sat26Dby2.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddEq1526DbcT, hs_zddIntegral26DbcS);
        };
        return $hs.modules.GHCziReal.hs_numericEnumFromThenTo.hscall(hs_sat26Dby2, hs_sat26Dby1);
    };
    hs_a2825uMGJ.evaluateOnce = function () {
        return hs_zdcsucc125uMsH.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a2925uMGL.evaluateOnce = function () {
        return hs_zdcpred125uMta.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a3025uMGN.evaluate = function (hs_eta1cW6l3) {
        return hs_zdctoEnum125uMvG.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta1cW6l3);
    };
    hs_a3125uMGP.evaluateOnce = function () {
        return hs_zdcfromEnum125uMFb.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a3225uMGR.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a3325uMGT.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a3425uMGV.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall(hs_a3225uMGR, hs_a3325uMGT, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a3525uMGX.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall(hs_a3425uMGV, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a3625uMGZ.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.GHCziReal.hs_numericEnumFrom.hscall(hs_a3525uMGX, hs_eta1cW6l3);
    };
    hs_a3725uMH1.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a3825uMH3.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a3925uMH5.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall(hs_a3725uMH1, hs_a3825uMH3, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a4025uMH7.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall(hs_a3925uMH5, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a4125uMH9.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.GHCziReal.hs_numericEnumFromThen.hscall(hs_a4025uMH7, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a4225uMHb.evaluateOnce = function () {
        return hs_zdcenumFromTo125uMGd.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a4325uMHd.evaluateOnce = function () {
        return hs_zdcenumFromThenTo125uMGz.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdfEnumRatio125uMHf.data = [hs_a2825uMGJ, hs_a2925uMGL, hs_a3025uMGN, hs_a3125uMGP, hs_a3625uMGZ, hs_a4125uMH9, hs_a4225uMHb, hs_a4325uMHd];
    this.hs_zdfEnumRatio.evaluate = function (hs_zddIntegral26Dbdx) {
        var hs_sat26Dby3 = new $hs.Thunk();
        hs_sat26Dby3.evaluateOnce = function () {
            return hs_zdcenumFromThenTo125uMGz.hscall(hs_zddIntegral26Dbdx);
        };
        var hs_sat26Dby4 = new $hs.Thunk();
        hs_sat26Dby4.evaluateOnce = function () {
            return hs_zdcenumFromTo125uMGd.hscall(hs_zddIntegral26Dbdx);
        };
        var hs_sat26Dby5 = new $hs.Thunk();
        hs_sat26Dby5.evaluateOnce = function () {
            return hs_zdcenumFromThen125uMFT.hscall(hs_zddIntegral26Dbdx);
        };
        var hs_sat26Dby6 = new $hs.Thunk();
        hs_sat26Dby6.evaluateOnce = function () {
            return hs_zdcenumFrom125uMFB.hscall(hs_zddIntegral26Dbdx);
        };
        var hs_sat26Dby7 = new $hs.Thunk();
        hs_sat26Dby7.evaluateOnce = function () {
            return hs_zdcfromEnum125uMFb.hscall(hs_zddIntegral26Dbdx);
        };
        var hs_sat26Dby8 = new $hs.Func(1);
        hs_sat26Dby8.evaluate = function (hs_eta1cW6l3) {
            return hs_zdctoEnum125uMvG.hscall(hs_zddIntegral26Dbdx, hs_eta1cW6l3);
        };
        var hs_sat26Dby9 = new $hs.Thunk();
        hs_sat26Dby9.evaluateOnce = function () {
            return hs_zdcpred125uMta.hscall(hs_zddIntegral26Dbdx);
        };
        var hs_sat26Dbya = new $hs.Thunk();
        hs_sat26Dbya.evaluateOnce = function () {
            return hs_zdcsucc125uMsH.hscall(hs_zddIntegral26Dbdx);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dbya, hs_sat26Dby9, hs_sat26Dby8, hs_sat26Dby7, hs_sat26Dby6, hs_sat26Dby5, hs_sat26Dby4, hs_sat26Dby3];
        return $res;
    };
    hs_zddReal1825uMHr.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zddNum2725uMHt.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1825uMHr);
    };
    hs_zddEq1125uMHv.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum2725uMHt);
    };
    hs_zddOrd1425uMHx.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal1825uMHr);
    };
    hs_zc125uMHz.evaluate = function (hs_x026DbeU, hs_y026DbdS) {
        var hs_sat26Dbyd = new $hs.Thunk();
        hs_sat26Dbyd.evaluateOnce = function () {
            var hs_sat26Dbyb = new $hs.Thunk();
            hs_sat26Dbyb.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2725uMHt, hs_sat26Dbyb);
        };
        var hs_wild26Dbyc = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1425uMHx, hs_y026DbdS, hs_sat26Dbyd);
        switch (hs_wild26Dbyc.tag) {
        case 1:
            var hs_sat26Dbyg = new $hs.Thunk();
            hs_sat26Dbyg.evaluateOnce = function () {
                var hs_sat26Dbye = new $hs.Thunk();
                hs_sat26Dbye.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2725uMHt, hs_sat26Dbye);
            };
            var hs_wild126Dbyf = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1125uMHv, hs_y026DbdS, hs_sat26Dbyg);
            switch (hs_wild126Dbyf.tag) {
            case 1:
                var hs_zddReal2226Dbe0 = new $hs.Thunk();
                hs_zddReal2226Dbe0.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
                };
                var hs_zddNum3126Dbe2 = new $hs.Thunk();
                hs_zddNum3126Dbe2.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226Dbe0);
                };
                var hs_zddEq1526Dbe4 = new $hs.Thunk();
                hs_zddEq1526Dbe4.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum3126Dbe2);
                };
                var hs_f26DbeP = new $hs.Func(2);
                hs_f26DbeP.evaluate = function (hs_x26DbeH, hs_y26Dbe8) {
                    var hs_wild226Dbyh = $hs.modules.GHCziReal.hs_even.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_y26Dbe8);
                    switch (hs_wild226Dbyh.tag) {
                    case 1:
                        var hs_sat26Dbyk = new $hs.Thunk();
                        hs_sat26Dbyk.evaluateOnce = function () {
                            var hs_sat26Dbyi = new $hs.Thunk();
                            hs_sat26Dbyi.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Dbe2, hs_sat26Dbyi);
                        };
                        var hs_wild326Dbyj = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1526Dbe4, hs_y26Dbe8, hs_sat26Dbyk);
                        switch (hs_wild326Dbyj.tag) {
                        case 1:
                            var hs_zddReal2326Dbee = new $hs.Thunk();
                            hs_zddReal2326Dbee.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
                            };
                            var hs_zddNum3226Dbeg = new $hs.Thunk();
                            hs_zddNum3226Dbeg.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2326Dbee);
                            };
                            var hs_zddEq1626Dbei = new $hs.Thunk();
                            hs_zddEq1626Dbei.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum3226Dbeg);
                            };
                            var hs_g26Dbet = new $hs.Func(3);
                            hs_g26Dbet.evaluate = function (hs_x126Dbes, hs_y126Dben, hs_zz26DbeB) {
                                var hs_wild426Dbyl = $hs.modules.GHCziReal.hs_even.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_y126Dben);
                                switch (hs_wild426Dbyl.tag) {
                                case 1:
                                    var hs_sat26Dbyo = new $hs.Thunk();
                                    hs_sat26Dbyo.evaluateOnce = function () {
                                        var hs_sat26Dbym = new $hs.Thunk();
                                        hs_sat26Dbym.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226Dbeg, hs_sat26Dbym);
                                    };
                                    var hs_wild526Dbyn = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1626Dbei, hs_y126Dben, hs_sat26Dbyo);
                                    switch (hs_wild526Dbyn.tag) {
                                    case 1:
                                        var hs_sat26Dbyp = new $hs.Thunk();
                                        hs_sat26Dbyp.evaluateOnce = function () {
                                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_x126Dbes, hs_zz26DbeB);
                                        };
                                        var hs_sat26Dbyv = new $hs.Thunk();
                                        hs_sat26Dbyv.evaluateOnce = function () {
                                            var hs_sat26Dbyr = new $hs.Thunk();
                                            hs_sat26Dbyr.evaluateOnce = function () {
                                                var hs_sat26Dbyq = new $hs.Thunk();
                                                hs_sat26Dbyq.evaluateOnce = function () {
                                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                                };
                                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226Dbeg, hs_sat26Dbyq);
                                            };
                                            var hs_sat26Dbyu = new $hs.Thunk();
                                            hs_sat26Dbyu.evaluateOnce = function () {
                                                var hs_sat26Dbyt = new $hs.Thunk();
                                                hs_sat26Dbyt.evaluateOnce = function () {
                                                    var hs_sat26Dbys = new $hs.Thunk();
                                                    hs_sat26Dbys.evaluateOnce = function () {
                                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                                    };
                                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226Dbeg, hs_sat26Dbys);
                                                };
                                                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum3226Dbeg, hs_y126Dben, hs_sat26Dbyt);
                                            };
                                            return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26Dbyu, hs_sat26Dbyr);
                                        };
                                        var hs_sat26Dbyw = new $hs.Thunk();
                                        hs_sat26Dbyw.evaluateOnce = function () {
                                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_x126Dbes, hs_x126Dbes);
                                        };
                                        return hs_g26Dbet.hscall(hs_sat26Dbyw, hs_sat26Dbyv, hs_sat26Dbyp);
                                    case 2:
                                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_x126Dbes, hs_zz26DbeB);
                                    }
                                case 2:
                                    var hs_sat26Dbyz = new $hs.Thunk();
                                    hs_sat26Dbyz.evaluateOnce = function () {
                                        var hs_sat26Dbyy = new $hs.Thunk();
                                        hs_sat26Dbyy.evaluateOnce = function () {
                                            var hs_sat26Dbyx = new $hs.Thunk();
                                            hs_sat26Dbyx.evaluateOnce = function () {
                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                            };
                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226Dbeg, hs_sat26Dbyx);
                                        };
                                        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_y126Dben, hs_sat26Dbyy);
                                    };
                                    var hs_sat26DbyA = new $hs.Thunk();
                                    hs_sat26DbyA.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_x126Dbes, hs_x126Dbes);
                                    };
                                    return hs_g26Dbet.hscall(hs_sat26DbyA, hs_sat26Dbyz, hs_zz26DbeB);
                                }
                            };
                            var hs_sat26DbyG = new $hs.Thunk();
                            hs_sat26DbyG.evaluateOnce = function () {
                                var hs_sat26DbyC = new $hs.Thunk();
                                hs_sat26DbyC.evaluateOnce = function () {
                                    var hs_sat26DbyB = new $hs.Thunk();
                                    hs_sat26DbyB.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Dbe2, hs_sat26DbyB);
                                };
                                var hs_sat26DbyF = new $hs.Thunk();
                                hs_sat26DbyF.evaluateOnce = function () {
                                    var hs_sat26DbyE = new $hs.Thunk();
                                    hs_sat26DbyE.evaluateOnce = function () {
                                        var hs_sat26DbyD = new $hs.Thunk();
                                        hs_sat26DbyD.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Dbe2, hs_sat26DbyD);
                                    };
                                    return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum3126Dbe2, hs_y26Dbe8, hs_sat26DbyE);
                                };
                                return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26DbyF, hs_sat26DbyC);
                            };
                            var hs_sat26DbyH = new $hs.Thunk();
                            hs_sat26DbyH.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_x26DbeH, hs_x26DbeH);
                            };
                            return hs_g26Dbet.hscall(hs_sat26DbyH, hs_sat26DbyG, hs_x26DbeH);
                        case 2:
                            if (hs_x26DbeH.notEvaluated) {
                                return hs_x26DbeH.hscall();
                            } else {
                                return hs_x26DbeH;
                            }
                        }
                    case 2:
                        var hs_sat26DbyK = new $hs.Thunk();
                        hs_sat26DbyK.evaluateOnce = function () {
                            var hs_sat26DbyJ = new $hs.Thunk();
                            hs_sat26DbyJ.evaluateOnce = function () {
                                var hs_sat26DbyI = new $hs.Thunk();
                                hs_sat26DbyI.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Dbe2, hs_sat26DbyI);
                            };
                            return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_y26Dbe8, hs_sat26DbyJ);
                        };
                        var hs_sat26DbyL = new $hs.Thunk();
                        hs_sat26DbyL.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_x26DbeH, hs_x26DbeH);
                        };
                        return hs_f26DbeP.hscall(hs_sat26DbyL, hs_sat26DbyK);
                    }
                };
                return hs_f26DbeP.hscall(hs_x026DbeU, hs_y026DbdS);
            case 2:
                var hs_sat26DbyM = new $hs.Thunk();
                hs_sat26DbyM.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DbyM);
            }
        case 2:
            var hs_sat26DbyN = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Negative exponent\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DbyN);
        }
    };
    hs_zddReal1925uMII.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zddNum2825uMIK.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1925uMII);
    };
    hs_zddEq1225uMIM.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum2825uMIK);
    };
    hs_zddOrd1525uMIO.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal1925uMII);
    };
    hs_zc225uMIQ.evaluate = function (hs_x026Dbgb, hs_y026Dbf9) {
        var hs_sat26DbyQ = new $hs.Thunk();
        hs_sat26DbyQ.evaluateOnce = function () {
            var hs_sat26DbyO = new $hs.Thunk();
            hs_sat26DbyO.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2825uMIK, hs_sat26DbyO);
        };
        var hs_wild26DbyP = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1525uMIO, hs_y026Dbf9, hs_sat26DbyQ);
        switch (hs_wild26DbyP.tag) {
        case 1:
            var hs_sat26DbyT = new $hs.Thunk();
            hs_sat26DbyT.evaluateOnce = function () {
                var hs_sat26DbyR = new $hs.Thunk();
                hs_sat26DbyR.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2825uMIK, hs_sat26DbyR);
            };
            var hs_wild126DbyS = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1225uMIM, hs_y026Dbf9, hs_sat26DbyT);
            switch (hs_wild126DbyS.tag) {
            case 1:
                var hs_zddReal2226Dbfh = new $hs.Thunk();
                hs_zddReal2226Dbfh.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
                };
                var hs_zddNum3126Dbfj = new $hs.Thunk();
                hs_zddNum3126Dbfj.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226Dbfh);
                };
                var hs_zddEq1526Dbfl = new $hs.Thunk();
                hs_zddEq1526Dbfl.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum3126Dbfj);
                };
                var hs_f26Dbg6 = new $hs.Func(2);
                hs_f26Dbg6.evaluate = function (hs_x26DbfY, hs_y26Dbfp) {
                    var hs_wild226DbyU = $hs.modules.GHCziReal.hs_even.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_y26Dbfp);
                    switch (hs_wild226DbyU.tag) {
                    case 1:
                        var hs_sat26DbyX = new $hs.Thunk();
                        hs_sat26DbyX.evaluateOnce = function () {
                            var hs_sat26DbyV = new $hs.Thunk();
                            hs_sat26DbyV.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Dbfj, hs_sat26DbyV);
                        };
                        var hs_wild326DbyW = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1526Dbfl, hs_y26Dbfp, hs_sat26DbyX);
                        switch (hs_wild326DbyW.tag) {
                        case 1:
                            var hs_zddReal2326Dbfv = new $hs.Thunk();
                            hs_zddReal2326Dbfv.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
                            };
                            var hs_zddNum3226Dbfx = new $hs.Thunk();
                            hs_zddNum3226Dbfx.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2326Dbfv);
                            };
                            var hs_zddEq1626Dbfz = new $hs.Thunk();
                            hs_zddEq1626Dbfz.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum3226Dbfx);
                            };
                            var hs_g26DbfK = new $hs.Func(3);
                            hs_g26DbfK.evaluate = function (hs_x126DbfJ, hs_y126DbfE, hs_zz26DbfS) {
                                var hs_wild426DbyY = $hs.modules.GHCziReal.hs_even.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_y126DbfE);
                                switch (hs_wild426DbyY.tag) {
                                case 1:
                                    var hs_sat26Dbz1 = new $hs.Thunk();
                                    hs_sat26Dbz1.evaluateOnce = function () {
                                        var hs_sat26DbyZ = new $hs.Thunk();
                                        hs_sat26DbyZ.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226Dbfx, hs_sat26DbyZ);
                                    };
                                    var hs_wild526Dbz0 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1626Dbfz, hs_y126DbfE, hs_sat26Dbz1);
                                    switch (hs_wild526Dbz0.tag) {
                                    case 1:
                                        var hs_sat26Dbz2 = new $hs.Thunk();
                                        hs_sat26Dbz2.evaluateOnce = function () {
                                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x126DbfJ, hs_zz26DbfS);
                                        };
                                        var hs_sat26Dbz8 = new $hs.Thunk();
                                        hs_sat26Dbz8.evaluateOnce = function () {
                                            var hs_sat26Dbz4 = new $hs.Thunk();
                                            hs_sat26Dbz4.evaluateOnce = function () {
                                                var hs_sat26Dbz3 = new $hs.Thunk();
                                                hs_sat26Dbz3.evaluateOnce = function () {
                                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                                };
                                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226Dbfx, hs_sat26Dbz3);
                                            };
                                            var hs_sat26Dbz7 = new $hs.Thunk();
                                            hs_sat26Dbz7.evaluateOnce = function () {
                                                var hs_sat26Dbz6 = new $hs.Thunk();
                                                hs_sat26Dbz6.evaluateOnce = function () {
                                                    var hs_sat26Dbz5 = new $hs.Thunk();
                                                    hs_sat26Dbz5.evaluateOnce = function () {
                                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                                    };
                                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226Dbfx, hs_sat26Dbz5);
                                                };
                                                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum3226Dbfx, hs_y126DbfE, hs_sat26Dbz6);
                                            };
                                            return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26Dbz7, hs_sat26Dbz4);
                                        };
                                        var hs_sat26Dbz9 = new $hs.Thunk();
                                        hs_sat26Dbz9.evaluateOnce = function () {
                                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x126DbfJ, hs_x126DbfJ);
                                        };
                                        return hs_g26DbfK.hscall(hs_sat26Dbz9, hs_sat26Dbz8, hs_sat26Dbz2);
                                    case 2:
                                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x126DbfJ, hs_zz26DbfS);
                                    }
                                case 2:
                                    var hs_sat26Dbzc = new $hs.Thunk();
                                    hs_sat26Dbzc.evaluateOnce = function () {
                                        var hs_sat26Dbzb = new $hs.Thunk();
                                        hs_sat26Dbzb.evaluateOnce = function () {
                                            var hs_sat26Dbza = new $hs.Thunk();
                                            hs_sat26Dbza.evaluateOnce = function () {
                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                            };
                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226Dbfx, hs_sat26Dbza);
                                        };
                                        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_y126DbfE, hs_sat26Dbzb);
                                    };
                                    var hs_sat26Dbzd = new $hs.Thunk();
                                    hs_sat26Dbzd.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x126DbfJ, hs_x126DbfJ);
                                    };
                                    return hs_g26DbfK.hscall(hs_sat26Dbzd, hs_sat26Dbzc, hs_zz26DbfS);
                                }
                            };
                            var hs_sat26Dbzj = new $hs.Thunk();
                            hs_sat26Dbzj.evaluateOnce = function () {
                                var hs_sat26Dbzf = new $hs.Thunk();
                                hs_sat26Dbzf.evaluateOnce = function () {
                                    var hs_sat26Dbze = new $hs.Thunk();
                                    hs_sat26Dbze.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Dbfj, hs_sat26Dbze);
                                };
                                var hs_sat26Dbzi = new $hs.Thunk();
                                hs_sat26Dbzi.evaluateOnce = function () {
                                    var hs_sat26Dbzh = new $hs.Thunk();
                                    hs_sat26Dbzh.evaluateOnce = function () {
                                        var hs_sat26Dbzg = new $hs.Thunk();
                                        hs_sat26Dbzg.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Dbfj, hs_sat26Dbzg);
                                    };
                                    return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum3126Dbfj, hs_y26Dbfp, hs_sat26Dbzh);
                                };
                                return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26Dbzi, hs_sat26Dbzf);
                            };
                            var hs_sat26Dbzk = new $hs.Thunk();
                            hs_sat26Dbzk.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x26DbfY, hs_x26DbfY);
                            };
                            return hs_g26DbfK.hscall(hs_sat26Dbzk, hs_sat26Dbzj, hs_x26DbfY);
                        case 2:
                            if (hs_x26DbfY.notEvaluated) {
                                return hs_x26DbfY.hscall();
                            } else {
                                return hs_x26DbfY;
                            }
                        }
                    case 2:
                        var hs_sat26Dbzn = new $hs.Thunk();
                        hs_sat26Dbzn.evaluateOnce = function () {
                            var hs_sat26Dbzm = new $hs.Thunk();
                            hs_sat26Dbzm.evaluateOnce = function () {
                                var hs_sat26Dbzl = new $hs.Thunk();
                                hs_sat26Dbzl.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Dbfj, hs_sat26Dbzl);
                            };
                            return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_y26Dbfp, hs_sat26Dbzm);
                        };
                        var hs_sat26Dbzo = new $hs.Thunk();
                        hs_sat26Dbzo.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x26DbfY, hs_x26DbfY);
                        };
                        return hs_f26Dbg6.hscall(hs_sat26Dbzo, hs_sat26Dbzn);
                    }
                };
                return hs_f26Dbg6.hscall(hs_x026Dbgb, hs_y026Dbf9);
            case 2:
                var hs_sat26Dbzp = new $hs.Thunk();
                hs_sat26Dbzp.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26Dbzp);
            }
        case 2:
            var hs_sat26Dbzq = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Negative exponent\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dbzq);
        }
    };
    hs_zddReal2025uMJZ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum2925uMK1.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2025uMJZ);
    };
    hs_zddEq1325uMK3.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum2925uMK1);
    };
    hs_zddOrd1625uMK5.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2025uMJZ);
    };
    hs_zc325uMK7.evaluate = function (hs_x026Dbhs, hs_y026Dbgq) {
        var hs_sat26Dbzt = new $hs.Thunk();
        hs_sat26Dbzt.evaluateOnce = function () {
            var hs_sat26Dbzr = new $hs.Thunk();
            hs_sat26Dbzr.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2925uMK1, hs_sat26Dbzr);
        };
        var hs_wild26Dbzs = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1625uMK5, hs_y026Dbgq, hs_sat26Dbzt);
        switch (hs_wild26Dbzs.tag) {
        case 1:
            var hs_sat26Dbzw = new $hs.Thunk();
            hs_sat26Dbzw.evaluateOnce = function () {
                var hs_sat26Dbzu = new $hs.Thunk();
                hs_sat26Dbzu.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2925uMK1, hs_sat26Dbzu);
            };
            var hs_wild126Dbzv = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1325uMK3, hs_y026Dbgq, hs_sat26Dbzw);
            switch (hs_wild126Dbzv.tag) {
            case 1:
                var hs_zddReal2226Dbgy = new $hs.Thunk();
                hs_zddReal2226Dbgy.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
                };
                var hs_zddNum3126DbgA = new $hs.Thunk();
                hs_zddNum3126DbgA.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226Dbgy);
                };
                var hs_zddEq1526DbgC = new $hs.Thunk();
                hs_zddEq1526DbgC.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum3126DbgA);
                };
                var hs_f26Dbhn = new $hs.Func(2);
                hs_f26Dbhn.evaluate = function (hs_x26Dbhf, hs_y26DbgG) {
                    var hs_wild226Dbzx = $hs.modules.GHCziReal.hs_even.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_y26DbgG);
                    switch (hs_wild226Dbzx.tag) {
                    case 1:
                        var hs_sat26DbzA = new $hs.Thunk();
                        hs_sat26DbzA.evaluateOnce = function () {
                            var hs_sat26Dbzy = new $hs.Thunk();
                            hs_sat26Dbzy.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DbgA, hs_sat26Dbzy);
                        };
                        var hs_wild326Dbzz = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1526DbgC, hs_y26DbgG, hs_sat26DbzA);
                        switch (hs_wild326Dbzz.tag) {
                        case 1:
                            var hs_zddReal2326DbgM = new $hs.Thunk();
                            hs_zddReal2326DbgM.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
                            };
                            var hs_zddNum3226DbgO = new $hs.Thunk();
                            hs_zddNum3226DbgO.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2326DbgM);
                            };
                            var hs_zddEq1626DbgQ = new $hs.Thunk();
                            hs_zddEq1626DbgQ.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum3226DbgO);
                            };
                            var hs_g26Dbh1 = new $hs.Func(3);
                            hs_g26Dbh1.evaluate = function (hs_x126Dbh0, hs_y126DbgV, hs_zz26Dbh9) {
                                var hs_wild426DbzB = $hs.modules.GHCziReal.hs_even.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_y126DbgV);
                                switch (hs_wild426DbzB.tag) {
                                case 1:
                                    var hs_sat26DbzE = new $hs.Thunk();
                                    hs_sat26DbzE.evaluateOnce = function () {
                                        var hs_sat26DbzC = new $hs.Thunk();
                                        hs_sat26DbzC.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226DbgO, hs_sat26DbzC);
                                    };
                                    var hs_wild526DbzD = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1626DbgQ, hs_y126DbgV, hs_sat26DbzE);
                                    switch (hs_wild526DbzD.tag) {
                                    case 1:
                                        var hs_sat26DbzF = new $hs.Thunk();
                                        hs_sat26DbzF.evaluateOnce = function () {
                                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x126Dbh0, hs_zz26Dbh9);
                                        };
                                        var hs_sat26DbzL = new $hs.Thunk();
                                        hs_sat26DbzL.evaluateOnce = function () {
                                            var hs_sat26DbzH = new $hs.Thunk();
                                            hs_sat26DbzH.evaluateOnce = function () {
                                                var hs_sat26DbzG = new $hs.Thunk();
                                                hs_sat26DbzG.evaluateOnce = function () {
                                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                                };
                                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226DbgO, hs_sat26DbzG);
                                            };
                                            var hs_sat26DbzK = new $hs.Thunk();
                                            hs_sat26DbzK.evaluateOnce = function () {
                                                var hs_sat26DbzJ = new $hs.Thunk();
                                                hs_sat26DbzJ.evaluateOnce = function () {
                                                    var hs_sat26DbzI = new $hs.Thunk();
                                                    hs_sat26DbzI.evaluateOnce = function () {
                                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                                    };
                                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226DbgO, hs_sat26DbzI);
                                                };
                                                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum3226DbgO, hs_y126DbgV, hs_sat26DbzJ);
                                            };
                                            return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DbzK, hs_sat26DbzH);
                                        };
                                        var hs_sat26DbzM = new $hs.Thunk();
                                        hs_sat26DbzM.evaluateOnce = function () {
                                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x126Dbh0, hs_x126Dbh0);
                                        };
                                        return hs_g26Dbh1.hscall(hs_sat26DbzM, hs_sat26DbzL, hs_sat26DbzF);
                                    case 2:
                                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x126Dbh0, hs_zz26Dbh9);
                                    }
                                case 2:
                                    var hs_sat26DbzP = new $hs.Thunk();
                                    hs_sat26DbzP.evaluateOnce = function () {
                                        var hs_sat26DbzO = new $hs.Thunk();
                                        hs_sat26DbzO.evaluateOnce = function () {
                                            var hs_sat26DbzN = new $hs.Thunk();
                                            hs_sat26DbzN.evaluateOnce = function () {
                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                            };
                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226DbgO, hs_sat26DbzN);
                                        };
                                        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_y126DbgV, hs_sat26DbzO);
                                    };
                                    var hs_sat26DbzQ = new $hs.Thunk();
                                    hs_sat26DbzQ.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x126Dbh0, hs_x126Dbh0);
                                    };
                                    return hs_g26Dbh1.hscall(hs_sat26DbzQ, hs_sat26DbzP, hs_zz26Dbh9);
                                }
                            };
                            var hs_sat26DbzW = new $hs.Thunk();
                            hs_sat26DbzW.evaluateOnce = function () {
                                var hs_sat26DbzS = new $hs.Thunk();
                                hs_sat26DbzS.evaluateOnce = function () {
                                    var hs_sat26DbzR = new $hs.Thunk();
                                    hs_sat26DbzR.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DbgA, hs_sat26DbzR);
                                };
                                var hs_sat26DbzV = new $hs.Thunk();
                                hs_sat26DbzV.evaluateOnce = function () {
                                    var hs_sat26DbzU = new $hs.Thunk();
                                    hs_sat26DbzU.evaluateOnce = function () {
                                        var hs_sat26DbzT = new $hs.Thunk();
                                        hs_sat26DbzT.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DbgA, hs_sat26DbzT);
                                    };
                                    return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum3126DbgA, hs_y26DbgG, hs_sat26DbzU);
                                };
                                return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DbzV, hs_sat26DbzS);
                            };
                            var hs_sat26DbzX = new $hs.Thunk();
                            hs_sat26DbzX.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x26Dbhf, hs_x26Dbhf);
                            };
                            return hs_g26Dbh1.hscall(hs_sat26DbzX, hs_sat26DbzW, hs_x26Dbhf);
                        case 2:
                            if (hs_x26Dbhf.notEvaluated) {
                                return hs_x26Dbhf.hscall();
                            } else {
                                return hs_x26Dbhf;
                            }
                        }
                    case 2:
                        var hs_sat26DbA0 = new $hs.Thunk();
                        hs_sat26DbA0.evaluateOnce = function () {
                            var hs_sat26DbzZ = new $hs.Thunk();
                            hs_sat26DbzZ.evaluateOnce = function () {
                                var hs_sat26DbzY = new $hs.Thunk();
                                hs_sat26DbzY.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DbgA, hs_sat26DbzY);
                            };
                            return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_y26DbgG, hs_sat26DbzZ);
                        };
                        var hs_sat26DbA1 = new $hs.Thunk();
                        hs_sat26DbA1.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x26Dbhf, hs_x26Dbhf);
                        };
                        return hs_f26Dbhn.hscall(hs_sat26DbA1, hs_sat26DbA0);
                    }
                };
                return hs_f26Dbhn.hscall(hs_x026Dbhs, hs_y026Dbgq);
            case 2:
                var hs_sat26DbA2 = new $hs.Thunk();
                hs_sat26DbA2.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DbA2);
            }
        case 2:
            var hs_sat26DbA3 = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Negative exponent\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DbA3);
        }
    };
    this.hs_zc.evaluate = function (hs_zddNum3126Dbig, hs_zddIntegral26DbhA, hs_eta26DbiJ, hs_eta126DbhF) {
        var hs_zddReal2226DbhB = new $hs.Thunk();
        hs_zddReal2226DbhB.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DbhA);
        };
        var hs_zddNum3226DbhD = new $hs.Thunk();
        hs_zddNum3226DbhD.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226DbhB);
        };
        var hs_sat26DbA7 = new $hs.Thunk();
        hs_sat26DbA7.evaluateOnce = function () {
            var hs_sat26DbA4 = new $hs.Thunk();
            hs_sat26DbA4.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226DbhD, hs_sat26DbA4);
        };
        var hs_sat26DbA6 = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2226DbhB);
        var hs_wild26DbA5 = $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26DbA6, hs_eta126DbhF, hs_sat26DbA7);
        switch (hs_wild26DbA5.tag) {
        case 1:
            var hs_sat26DbAb = new $hs.Thunk();
            hs_sat26DbAb.evaluateOnce = function () {
                var hs_sat26DbA8 = new $hs.Thunk();
                hs_sat26DbA8.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3226DbhD, hs_sat26DbA8);
            };
            var hs_sat26DbAa = $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum3226DbhD);
            var hs_wild126DbA9 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26DbAa, hs_eta126DbhF, hs_sat26DbAb);
            switch (hs_wild126DbA9.tag) {
            case 1:
                var hs_zddReal2326DbhO = new $hs.Thunk();
                hs_zddReal2326DbhO.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DbhA);
                };
                var hs_zddNum3326DbhQ = new $hs.Thunk();
                hs_zddNum3326DbhQ.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2326DbhO);
                };
                var hs_zddEq1526DbhS = new $hs.Thunk();
                hs_zddEq1526DbhS.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum3326DbhQ);
                };
                var hs_f26DbiE = new $hs.Func(2);
                hs_f26DbiE.evaluate = function (hs_x26Dbiw, hs_y26DbhW) {
                    var hs_wild226DbAc = $hs.modules.GHCziReal.hs_even.hscall(hs_zddIntegral26DbhA, hs_y26DbhW);
                    switch (hs_wild226DbAc.tag) {
                    case 1:
                        var hs_sat26DbAf = new $hs.Thunk();
                        hs_sat26DbAf.evaluateOnce = function () {
                            var hs_sat26DbAd = new $hs.Thunk();
                            hs_sat26DbAd.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3326DbhQ, hs_sat26DbAd);
                        };
                        var hs_wild326DbAe = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1526DbhS, hs_y26DbhW, hs_sat26DbAf);
                        switch (hs_wild326DbAe.tag) {
                        case 1:
                            var hs_zddReal2426Dbi2 = new $hs.Thunk();
                            hs_zddReal2426Dbi2.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DbhA);
                            };
                            var hs_zddNum3426Dbi4 = new $hs.Thunk();
                            hs_zddNum3426Dbi4.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2426Dbi2);
                            };
                            var hs_zddEq1626Dbi6 = new $hs.Thunk();
                            hs_zddEq1626Dbi6.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum3426Dbi4);
                            };
                            var hs_g26Dbii = new $hs.Func(3);
                            hs_g26Dbii.evaluate = function (hs_x126Dbih, hs_y126Dbib, hs_zz26Dbiq) {
                                var hs_wild426DbAg = $hs.modules.GHCziReal.hs_even.hscall(hs_zddIntegral26DbhA, hs_y126Dbib);
                                switch (hs_wild426DbAg.tag) {
                                case 1:
                                    var hs_sat26DbAj = new $hs.Thunk();
                                    hs_sat26DbAj.evaluateOnce = function () {
                                        var hs_sat26DbAh = new $hs.Thunk();
                                        hs_sat26DbAh.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3426Dbi4, hs_sat26DbAh);
                                    };
                                    var hs_wild526DbAi = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1626Dbi6, hs_y126Dbib, hs_sat26DbAj);
                                    switch (hs_wild526DbAi.tag) {
                                    case 1:
                                        var hs_sat26DbAk = new $hs.Thunk();
                                        hs_sat26DbAk.evaluateOnce = function () {
                                            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum3126Dbig, hs_x126Dbih, hs_zz26Dbiq);
                                        };
                                        var hs_sat26DbAq = new $hs.Thunk();
                                        hs_sat26DbAq.evaluateOnce = function () {
                                            var hs_sat26DbAm = new $hs.Thunk();
                                            hs_sat26DbAm.evaluateOnce = function () {
                                                var hs_sat26DbAl = new $hs.Thunk();
                                                hs_sat26DbAl.evaluateOnce = function () {
                                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                                };
                                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3426Dbi4, hs_sat26DbAl);
                                            };
                                            var hs_sat26DbAp = new $hs.Thunk();
                                            hs_sat26DbAp.evaluateOnce = function () {
                                                var hs_sat26DbAo = new $hs.Thunk();
                                                hs_sat26DbAo.evaluateOnce = function () {
                                                    var hs_sat26DbAn = new $hs.Thunk();
                                                    hs_sat26DbAn.evaluateOnce = function () {
                                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                                    };
                                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3426Dbi4, hs_sat26DbAn);
                                                };
                                                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum3426Dbi4, hs_y126Dbib, hs_sat26DbAo);
                                            };
                                            return $hs.modules.GHCziReal.hs_quot.hscall(hs_zddIntegral26DbhA, hs_sat26DbAp, hs_sat26DbAm);
                                        };
                                        var hs_sat26DbAr = new $hs.Thunk();
                                        hs_sat26DbAr.evaluateOnce = function () {
                                            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum3126Dbig, hs_x126Dbih, hs_x126Dbih);
                                        };
                                        return hs_g26Dbii.hscall(hs_sat26DbAr, hs_sat26DbAq, hs_sat26DbAk);
                                    case 2:
                                        return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum3126Dbig, hs_x126Dbih, hs_zz26Dbiq);
                                    }
                                case 2:
                                    var hs_sat26DbAu = new $hs.Thunk();
                                    hs_sat26DbAu.evaluateOnce = function () {
                                        var hs_sat26DbAt = new $hs.Thunk();
                                        hs_sat26DbAt.evaluateOnce = function () {
                                            var hs_sat26DbAs = new $hs.Thunk();
                                            hs_sat26DbAs.evaluateOnce = function () {
                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                            };
                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3426Dbi4, hs_sat26DbAs);
                                        };
                                        return $hs.modules.GHCziReal.hs_quot.hscall(hs_zddIntegral26DbhA, hs_y126Dbib, hs_sat26DbAt);
                                    };
                                    var hs_sat26DbAv = new $hs.Thunk();
                                    hs_sat26DbAv.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum3126Dbig, hs_x126Dbih, hs_x126Dbih);
                                    };
                                    return hs_g26Dbii.hscall(hs_sat26DbAv, hs_sat26DbAu, hs_zz26Dbiq);
                                }
                            };
                            var hs_sat26DbAB = new $hs.Thunk();
                            hs_sat26DbAB.evaluateOnce = function () {
                                var hs_sat26DbAx = new $hs.Thunk();
                                hs_sat26DbAx.evaluateOnce = function () {
                                    var hs_sat26DbAw = new $hs.Thunk();
                                    hs_sat26DbAw.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3326DbhQ, hs_sat26DbAw);
                                };
                                var hs_sat26DbAA = new $hs.Thunk();
                                hs_sat26DbAA.evaluateOnce = function () {
                                    var hs_sat26DbAz = new $hs.Thunk();
                                    hs_sat26DbAz.evaluateOnce = function () {
                                        var hs_sat26DbAy = new $hs.Thunk();
                                        hs_sat26DbAy.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3326DbhQ, hs_sat26DbAy);
                                    };
                                    return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum3326DbhQ, hs_y26DbhW, hs_sat26DbAz);
                                };
                                return $hs.modules.GHCziReal.hs_quot.hscall(hs_zddIntegral26DbhA, hs_sat26DbAA, hs_sat26DbAx);
                            };
                            var hs_sat26DbAC = new $hs.Thunk();
                            hs_sat26DbAC.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum3126Dbig, hs_x26Dbiw, hs_x26Dbiw);
                            };
                            return hs_g26Dbii.hscall(hs_sat26DbAC, hs_sat26DbAB, hs_x26Dbiw);
                        case 2:
                            if (hs_x26Dbiw.notEvaluated) {
                                return hs_x26Dbiw.hscall();
                            } else {
                                return hs_x26Dbiw;
                            }
                        }
                    case 2:
                        var hs_sat26DbAF = new $hs.Thunk();
                        hs_sat26DbAF.evaluateOnce = function () {
                            var hs_sat26DbAE = new $hs.Thunk();
                            hs_sat26DbAE.evaluateOnce = function () {
                                var hs_sat26DbAD = new $hs.Thunk();
                                hs_sat26DbAD.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3326DbhQ, hs_sat26DbAD);
                            };
                            return $hs.modules.GHCziReal.hs_quot.hscall(hs_zddIntegral26DbhA, hs_y26DbhW, hs_sat26DbAE);
                        };
                        var hs_sat26DbAG = new $hs.Thunk();
                        hs_sat26DbAG.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum3126Dbig, hs_x26Dbiw, hs_x26Dbiw);
                        };
                        return hs_f26DbiE.hscall(hs_sat26DbAG, hs_sat26DbAF);
                    }
                };
                return hs_f26DbiE.hscall(hs_eta26DbiJ, hs_eta126DbhF);
            case 2:
                var hs_sat26DbAH = new $hs.Thunk();
                hs_sat26DbAH.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Dbig, hs_sat26DbAH);
            }
        case 2:
            var hs_sat26DbAI = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Negative exponent\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DbAI);
        }
    };
    this.hs_zczvzc.evaluate = function (hs_zddIntegral26DbiQ, hs_eta26DbiU, hs_eta126DbiZ) {
        var hs_zddReal2226DbiR = new $hs.Thunk();
        hs_zddReal2226DbiR.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DbiQ);
        };
        var hs_zddNum3126DbiT = new $hs.Thunk();
        hs_zddNum3126DbiT.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226DbiR);
        };
        var hs_wild26DbAJ = hs_eta26DbiU;
        if (hs_eta26DbiU.notEvaluated) {
            hs_wild26DbAJ = hs_eta26DbiU.hscall();
        }
        var hs_n26Dbj7 = hs_wild26DbAJ.data[0];
        var hs_d26Dbj9 = hs_wild26DbAJ.data[1];
        var hs_sat26DbAN = new $hs.Thunk();
        hs_sat26DbAN.evaluateOnce = function () {
            var hs_sat26DbAK = new $hs.Thunk();
            hs_sat26DbAK.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DbiT, hs_sat26DbAK);
        };
        var hs_sat26DbAM = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2226DbiR);
        var hs_wild126DbAL = $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26DbAM, hs_eta126DbiZ, hs_sat26DbAN);
        switch (hs_wild126DbAL.tag) {
        case 1:
            var hs_sat26DbAR = new $hs.Thunk();
            hs_sat26DbAR.evaluateOnce = function () {
                var hs_sat26DbAO = new $hs.Thunk();
                hs_sat26DbAO.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126DbiT, hs_sat26DbAO);
            };
            var hs_sat26DbAQ = $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum3126DbiT);
            var hs_wild226DbAP = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26DbAQ, hs_eta126DbiZ, hs_sat26DbAR);
            switch (hs_wild226DbAP.tag) {
            case 1:
                var hs_tpl26Dbjb = $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_zddIntegral26DbiQ, hs_n26Dbj7, hs_eta126DbiZ);
                var hs_tpl126Dbjc = $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_zddIntegral26DbiQ, hs_d26Dbj9, hs_eta126DbiZ);
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl26Dbjb, hs_tpl126Dbjc];
                return $res;
            case 2:
                var hs_tpl26Dbjf = $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                var hs_tpl126Dbjg = $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl26Dbjf, hs_tpl126Dbjg];
                return $res;
            }
        case 2:
            var hs_sat26DbAS = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Negative exponent\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DbAS);
        }
    };
    this.hs_zczczvzczc.evaluate = function (hs_zddIntegral26Dbjm, hs_eta26Dbjq, hs_eta126Dbjv) {
        var hs_zddReal2226Dbjn = new $hs.Thunk();
        hs_zddReal2226Dbjn.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26Dbjm);
        };
        var hs_zddNum3126Dbjp = new $hs.Thunk();
        hs_zddNum3126Dbjp.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226Dbjn);
        };
        var hs_wild26DbAT = hs_eta26Dbjq;
        if (hs_eta26Dbjq.notEvaluated) {
            hs_wild26DbAT = hs_eta26Dbjq.hscall();
        }
        var hs_n26DbjD = hs_wild26DbAT.data[0];
        var hs_d26DbjN = hs_wild26DbAT.data[1];
        var hs_sat26DbAX = new $hs.Thunk();
        hs_sat26DbAX.evaluateOnce = function () {
            var hs_sat26DbAU = new $hs.Thunk();
            hs_sat26DbAU.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Dbjp, hs_sat26DbAU);
        };
        var hs_sat26DbAW = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2226Dbjn);
        var hs_wild126DbAV = $hs.modules.GHCziClasses.hs_zg.hscall(hs_sat26DbAW, hs_eta126Dbjv, hs_sat26DbAX);
        switch (hs_wild126DbAV.tag) {
        case 1:
            var hs_sat26DbB1 = new $hs.Thunk();
            hs_sat26DbB1.evaluateOnce = function () {
                var hs_sat26DbAY = new $hs.Thunk();
                hs_sat26DbAY.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Dbjp, hs_sat26DbAY);
            };
            var hs_sat26DbB0 = $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum3126Dbjp);
            var hs_wild226DbAZ = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26DbB0, hs_eta126Dbjv, hs_sat26DbB1);
            switch (hs_wild226DbAZ.tag) {
            case 1:
                var hs_sat26DbB3 = new $hs.Thunk();
                hs_sat26DbB3.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_wild326DbB2 = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26DbjD, hs_sat26DbB3);
                switch (hs_wild326DbB2.tag) {
                case 1:
                    var hs_sat26DbB5 = new $hs.Thunk();
                    hs_sat26DbB5.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    var hs_wild426DbB4 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_n26DbjD, hs_sat26DbB5);
                    switch (hs_wild426DbB4.tag) {
                    case 1:
                        var hs_dd26DbjL = new $hs.Thunk();
                        hs_dd26DbjL.evaluateOnce = function () {
                            var hs_sat26DbB6 = new $hs.Thunk();
                            hs_sat26DbB6.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum3126Dbjp, hs_eta126Dbjv);
                            };
                            var hs_sat26DbB7 = new $hs.Thunk();
                            hs_sat26DbB7.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_n26DbjD);
                            };
                            return $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_zddIntegral26Dbjm, hs_sat26DbB7, hs_sat26DbB6);
                        };
                        var hs_nn26DbjP = new $hs.Thunk();
                        hs_nn26DbjP.evaluateOnce = function () {
                            var hs_sat26DbB8 = new $hs.Thunk();
                            hs_sat26DbB8.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum3126Dbjp, hs_eta126Dbjv);
                            };
                            return $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_zddIntegral26Dbjm, hs_d26DbjN, hs_sat26DbB8);
                        };
                        var hs_wild526DbB9 = $hs.modules.GHCziReal.hs_even.hscall(hs_zddIntegral26Dbjm, hs_eta126Dbjv);
                        switch (hs_wild526DbB9.tag) {
                        case 1:
                            var hs_tpl26DbjT = $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_nn26DbjP);
                            var hs_tpl126DbjU = hs_dd26DbjL;
                            if (hs_dd26DbjL.notEvaluated) {
                                hs_tpl126DbjU = hs_dd26DbjL.hscall();
                            }
                            var $res = new $hs.Data(1);
                            $res.data = [hs_tpl26DbjT, hs_tpl126DbjU];
                            return $res;
                        case 2:
                            var hs_tpl26DbjX = hs_nn26DbjP;
                            if (hs_nn26DbjP.notEvaluated) {
                                hs_tpl26DbjX = hs_nn26DbjP.hscall();
                            }
                            var hs_tpl126DbjY = hs_dd26DbjL;
                            if (hs_dd26DbjL.notEvaluated) {
                                hs_tpl126DbjY = hs_dd26DbjL.hscall();
                            }
                            var $res = new $hs.Data(1);
                            $res.data = [hs_tpl26DbjX, hs_tpl126DbjY];
                            return $res;
                        }
                    case 2:
                        var hs_sat26DbBa = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Ratio.%: zero denominator\x00");
                        return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DbBa);
                    }
                case 2:
                    var hs_sat26DbBb = new $hs.Thunk();
                    hs_sat26DbBb.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum3126Dbjp, hs_eta126Dbjv);
                    };
                    var hs_tpl26Dbk4 = $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_zddIntegral26Dbjm, hs_d26DbjN, hs_sat26DbBb);
                    var hs_sat26DbBc = new $hs.Thunk();
                    hs_sat26DbBc.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum3126Dbjp, hs_eta126Dbjv);
                    };
                    var hs_tpl126Dbk5 = $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_zddIntegral26Dbjm, hs_n26DbjD, hs_sat26DbBc);
                    var $res = new $hs.Data(1);
                    $res.data = [hs_tpl26Dbk4, hs_tpl126Dbk5];
                    return $res;
                }
            case 2:
                var hs_tpl26Dbk8 = $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                var hs_tpl126Dbk9 = $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl26Dbk8, hs_tpl126Dbk9];
                return $res;
            }
        case 2:
            var hs_tpl26Dbkc = $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_zddIntegral26Dbjm, hs_n26DbjD, hs_eta126Dbjv);
            var hs_tpl126Dbkd = $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_zddIntegral26Dbjm, hs_d26DbjN, hs_eta126Dbjv);
            var $res = new $hs.Data(1);
            $res.data = [hs_tpl26Dbkc, hs_tpl126Dbkd];
            return $res;
        }
    };
    this.hs_zczc.evaluate = function (hs_zddFractional626Dbks, hs_zddIntegral26Dbkj, hs_eta26Dbku, hs_eta126Dbko) {
        var hs_zddReal2226Dbkk = new $hs.Thunk();
        hs_zddReal2226Dbkk.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26Dbkj);
        };
        var hs_zddNum3126Dbkm = new $hs.Thunk();
        hs_zddNum3126Dbkm.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226Dbkk);
        };
        var hs_sat26DbBg = new $hs.Thunk();
        hs_sat26DbBg.evaluateOnce = function () {
            var hs_sat26DbBd = new $hs.Thunk();
            hs_sat26DbBd.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Dbkm, hs_sat26DbBd);
        };
        var hs_sat26DbBf = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2226Dbkk);
        var hs_wild26DbBe = $hs.modules.GHCziClasses.hs_zgze.hscall(hs_sat26DbBf, hs_eta126Dbko, hs_sat26DbBg);
        switch (hs_wild26DbBe.tag) {
        case 1:
            var hs_sat26DbBj = new $hs.Thunk();
            hs_sat26DbBj.evaluateOnce = function () {
                var hs_sat26DbBh = new $hs.Thunk();
                hs_sat26DbBh.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum3126Dbkm, hs_eta126Dbko);
                };
                var hs_sat26DbBi = new $hs.Thunk();
                hs_sat26DbBi.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional626Dbks);
                };
                return $hs.modules.GHCziReal.hs_zc.hscall(hs_sat26DbBi, hs_zddIntegral26Dbkj, hs_eta26Dbku, hs_sat26DbBh);
            };
            return $hs.modules.GHCziReal.hs_recip.hscall(hs_zddFractional626Dbks, hs_sat26DbBj);
        case 2:
            var hs_sat26DbBk = new $hs.Thunk();
            hs_sat26DbBk.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional626Dbks);
            };
            return $hs.modules.GHCziReal.hs_zc.hscall(hs_sat26DbBk, hs_zddIntegral26Dbkj, hs_eta26Dbku, hs_eta126Dbko);
        }
    };
    hs_zddReal2125uMOj.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zddNum3025uMOl.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2125uMOj);
    };
    hs_zddEq1425uMOn.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum3025uMOl);
    };
    hs_lcm125uMOp.evaluate = function (hs_ds26DbkM, hs_ds126DbkI) {
        var hs_sat26DbBn = new $hs.Thunk();
        hs_sat26DbBn.evaluateOnce = function () {
            var hs_sat26DbBl = new $hs.Thunk();
            hs_sat26DbBl.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3025uMOl, hs_sat26DbBl);
        };
        var hs_wild26DbBm = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1425uMOn, hs_ds126DbkI, hs_sat26DbBn);
        switch (hs_wild26DbBm.tag) {
        case 1:
            var hs_sat26DbBq = new $hs.Thunk();
            hs_sat26DbBq.evaluateOnce = function () {
                var hs_sat26DbBo = new $hs.Thunk();
                hs_sat26DbBo.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3025uMOl, hs_sat26DbBo);
            };
            var hs_wild126DbBp = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1425uMOn, hs_ds26DbkM, hs_sat26DbBq);
            switch (hs_wild126DbBp.tag) {
            case 1:
                var hs_sat26DbBt = new $hs.Thunk();
                hs_sat26DbBt.evaluateOnce = function () {
                    var hs_sat26DbBs = new $hs.Thunk();
                    hs_sat26DbBs.evaluateOnce = function () {
                        var hs_sat26DbBr = new $hs.Thunk();
                        hs_sat26DbBr.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_gcd.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_ds26DbkM, hs_ds126DbkI);
                        };
                        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_ds26DbkM, hs_sat26DbBr);
                    };
                    return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum3025uMOl, hs_sat26DbBs, hs_ds126DbkI);
                };
                return $hs.modules.GHCziNum.hs_abs.hscall(hs_zddNum3025uMOl, hs_sat26DbBt);
            case 2:
                var hs_sat26DbBu = new $hs.Thunk();
                hs_sat26DbBu.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3025uMOl, hs_sat26DbBu);
            }
        case 2:
            var hs_sat26DbBv = new $hs.Thunk();
            hs_sat26DbBv.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3025uMOl, hs_sat26DbBv);
        }
    };
    this.hs_lcm.evaluate = function (hs_zddIntegral26DbkZ, hs_eta26Dbl9, hs_eta126Dbl5) {
        var hs_zddReal2226Dbl0 = new $hs.Thunk();
        hs_zddReal2226Dbl0.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DbkZ);
        };
        var hs_zddNum3126Dbl2 = new $hs.Thunk();
        hs_zddNum3126Dbl2.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226Dbl0);
        };
        var hs_zddEq1526Dbl4 = new $hs.Thunk();
        hs_zddEq1526Dbl4.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum3126Dbl2);
        };
        var hs_sat26DbBy = new $hs.Thunk();
        hs_sat26DbBy.evaluateOnce = function () {
            var hs_sat26DbBw = new $hs.Thunk();
            hs_sat26DbBw.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Dbl2, hs_sat26DbBw);
        };
        var hs_wild26DbBx = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1526Dbl4, hs_eta126Dbl5, hs_sat26DbBy);
        switch (hs_wild26DbBx.tag) {
        case 1:
            var hs_sat26DbBB = new $hs.Thunk();
            hs_sat26DbBB.evaluateOnce = function () {
                var hs_sat26DbBz = new $hs.Thunk();
                hs_sat26DbBz.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Dbl2, hs_sat26DbBz);
            };
            var hs_wild126DbBA = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq1526Dbl4, hs_eta26Dbl9, hs_sat26DbBB);
            switch (hs_wild126DbBA.tag) {
            case 1:
                var hs_sat26DbBE = new $hs.Thunk();
                hs_sat26DbBE.evaluateOnce = function () {
                    var hs_sat26DbBD = new $hs.Thunk();
                    hs_sat26DbBD.evaluateOnce = function () {
                        var hs_sat26DbBC = new $hs.Thunk();
                        hs_sat26DbBC.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_gcd.hscall(hs_zddIntegral26DbkZ, hs_eta26Dbl9, hs_eta126Dbl5);
                        };
                        return $hs.modules.GHCziReal.hs_quot.hscall(hs_zddIntegral26DbkZ, hs_eta26Dbl9, hs_sat26DbBC);
                    };
                    return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum3126Dbl2, hs_sat26DbBD, hs_eta126Dbl5);
                };
                return $hs.modules.GHCziNum.hs_abs.hscall(hs_zddNum3126Dbl2, hs_sat26DbBE);
            case 2:
                var hs_sat26DbBF = new $hs.Thunk();
                hs_sat26DbBF.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Dbl2, hs_sat26DbBF);
            }
        case 2:
            var hs_sat26DbBG = new $hs.Thunk();
            hs_sat26DbBG.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3126Dbl2, hs_sat26DbBG);
        }
    };
    this.hs_ZCzv.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_DZCIntegral.evaluate = function (hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_DZCReal.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_DZCFractional.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_DZCRealFrac.evaluate = function (hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
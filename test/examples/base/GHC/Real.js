
$hs.modules.GHCziReal = new $hs.Module();
$hs.modules.GHCziReal.dependencies = ["GHC.CString", "GHC.Integer", "GHC.Base", "GHC.Enum", "GHC.Num", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.List"];
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
    this.hs_zdfNumRatio = new $hs.Func(1);
    this.hs_zdfOrdRatio = new $hs.Func(1);
    this.hs_zdfRealRatio = new $hs.Func(1);
    this.hs_zdfRealInt = new $hs.Data(1);
    this.hs_zdfIntegralInt = new $hs.Data(1);
    this.hs_zdfFractionalRatio = new $hs.Func(1);
    this.hs_zdfRealFracRatio = new $hs.Func(1);
    this.hs_zc = new $hs.Func(4);
    this.hs_zczvzc = new $hs.Func(3);
    this.hs_zczczvzczc = new $hs.Func(3);
    this.hs_zczc = new $hs.Func(4);
    this.hs_lcm = new $hs.Func(3);
    this.hs_realToFrac = new $hs.Func(2);
    this.hs_fromIntegral = new $hs.Func(2);
    this.hs_zdfEnumRatio = new $hs.Func(1);
    this.hs_ZCzv = new $hs.Func(2);
    this.hs_DZCReal = new $hs.Func(3);
    this.hs_DZCIntegral = new $hs.Func(9);
    this.hs_DZCFractional = new $hs.Func(4);
    this.hs_DZCRealFrac = new $hs.Func(7);
    this.hs_zdp1Fractional.notEvaluated = true;
    this.hs_zdp1Fractional.evaluate = function (hs_tpl26CLrq) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26CLrq);
    };
    this.hs_zs.notEvaluated = true;
    this.hs_zs.evaluate = function (hs_tpl26CLry) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26CLry);
    };
    this.hs_recip.notEvaluated = true;
    this.hs_recip.evaluate = function (hs_tpl26CLrG) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26CLrG);
    };
    this.hs_fromRational.notEvaluated = true;
    this.hs_fromRational.evaluate = function (hs_tpl26CLrO) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26CLrO);
    };
    this.hs_zdp1Integral.notEvaluated = true;
    this.hs_zdp1Integral.evaluate = function (hs_tpl26CLrW) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26CLrW);
    };
    this.hs_zdp2Integral.notEvaluated = true;
    this.hs_zdp2Integral.evaluate = function (hs_tpl26CLs9) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26CLs9);
    };
    this.hs_quot.notEvaluated = true;
    this.hs_quot.evaluate = function (hs_tpl26CLsm) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26CLsm);
    };
    this.hs_rem.notEvaluated = true;
    this.hs_rem.evaluate = function (hs_tpl26CLsz) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26CLsz);
    };
    this.hs_div.notEvaluated = true;
    this.hs_div.evaluate = function (hs_tpl26CLsM) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26CLsM);
    };
    this.hs_mod.notEvaluated = true;
    this.hs_mod.evaluate = function (hs_tpl26CLsZ) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26CLsZ);
    };
    this.hs_quotRem.notEvaluated = true;
    this.hs_quotRem.evaluate = function (hs_tpl26CLtc) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26CLtc);
    };
    this.hs_divMod.notEvaluated = true;
    this.hs_divMod.evaluate = function (hs_tpl26CLtp) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26CLtp);
    };
    this.hs_toInteger.notEvaluated = true;
    this.hs_toInteger.evaluate = function (hs_tpl26CLtC) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26CLtC);
    };
    this.hs_zdp1Real.notEvaluated = true;
    this.hs_zdp1Real.evaluate = function (hs_tpl26CLtP) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26CLtP);
    };
    this.hs_zdp2Real.notEvaluated = true;
    this.hs_zdp2Real.evaluate = function (hs_tpl26CLtW) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26CLtW);
    };
    this.hs_toRational.notEvaluated = true;
    this.hs_toRational.evaluate = function (hs_tpl26CLu3) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26CLu3);
    };
    this.hs_zdp1RealFrac.notEvaluated = true;
    this.hs_zdp1RealFrac.evaluate = function (hs_tpl26CLua) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26CLua);
    };
    this.hs_zdp2RealFrac.notEvaluated = true;
    this.hs_zdp2RealFrac.evaluate = function (hs_tpl26CLul) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26CLul);
    };
    this.hs_properFraction.notEvaluated = true;
    this.hs_properFraction.evaluate = function (hs_tpl26CLuw) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26CLuw);
    };
    this.hs_truncate.notEvaluated = true;
    this.hs_truncate.evaluate = function (hs_tpl26CLuH) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26CLuH);
    };
    this.hs_round.notEvaluated = true;
    this.hs_round.evaluate = function (hs_tpl26CLuS) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26CLuS);
    };
    this.hs_ceiling.notEvaluated = true;
    this.hs_ceiling.evaluate = function (hs_tpl26CLv3) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26CLv3);
    };
    this.hs_floor.notEvaluated = true;
    this.hs_floor.evaluate = function (hs_tpl26CLve) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26CLve);
    };
    this.hs_zdWZCzv.notEvaluated = true;
    this.hs_zdWZCzv.evaluate = function (hs_tpl26CLvq, hs_tpl26CLvs) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_tpl26CLvq, hs_tpl26CLvs);
    };
    this.hs_zddmfloor.notEvaluated = true;
    this.hs_zddmfloor.evaluate = function (hs_zddRealFrac326CLvF, hs_eta26CLvA, hs_eta126CLvG) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddRealFrac326CLvF, hs_eta26CLvA, hs_eta126CLvG);
    };
    this.hs_zddmceiling.notEvaluated = true;
    this.hs_zddmceiling.evaluate = function (hs_zddRealFrac326CLwe, hs_eta26CLw9, hs_eta126CLwf) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddRealFrac326CLwe, hs_eta26CLw9, hs_eta126CLwf);
    };
    this.hs_zddmtruncate.notEvaluated = true;
    this.hs_zddmtruncate.evaluate = function (hs_zddRealFrac326CLwH, hs_zddIntegral26CLwI, hs_x26CLwJ) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddRealFrac326CLwH, hs_zddIntegral26CLwI, hs_x26CLwJ);
    };
    this.hs_zddmrecip.notEvaluated = true;
    this.hs_zddmrecip.evaluate = function (hs_zddFractional726CLwQ, hs_eta26CLwU) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddFractional726CLwQ, hs_eta26CLwU);
    };
    this.hs_zddmzs.notEvaluated = true;
    this.hs_zddmzs.evaluate = function (hs_zddFractional726CLwY, hs_eta26CLx0, hs_eta126CLx1) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddFractional726CLwY, hs_eta26CLx0, hs_eta126CLx1);
    };
    this.hs_zddmdivMod.notEvaluated = true;
    this.hs_zddmdivMod.evaluate = function (hs_zddIntegral26CLx7, hs_eta26CLxc, hs_eta126CLxd) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CLx7, hs_eta26CLxc, hs_eta126CLxd);
    };
    this.hs_zddmmod.notEvaluated = true;
    this.hs_zddmmod.evaluate = function (hs_zddIntegral26CLxQ, hs_n26CLxR, hs_d26CLxS) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CLxQ, hs_n26CLxR, hs_d26CLxS);
    };
    this.hs_zddmdiv.notEvaluated = true;
    this.hs_zddmdiv.evaluate = function (hs_zddIntegral26CLy0, hs_n26CLy1, hs_d26CLy2) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CLy0, hs_n26CLy1, hs_d26CLy2);
    };
    this.hs_zddmrem.notEvaluated = true;
    this.hs_zddmrem.evaluate = function (hs_zddIntegral26CLya, hs_n26CLyb, hs_d26CLyc) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CLya, hs_n26CLyb, hs_d26CLyc);
    };
    this.hs_zddmquot.notEvaluated = true;
    this.hs_zddmquot.evaluate = function (hs_zddIntegral26CLyk, hs_n26CLyl, hs_d26CLym) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CLyk, hs_n26CLyl, hs_d26CLym);
    };
    this.hs_integralEnumFromThenTo.notEvaluated = true;
    this.hs_integralEnumFromThenTo.evaluate = function (hs_zddIntegral26CLyv, hs_eta26CLyz, hs_eta126CLyB, hs_eta226CLyD) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CLyv, hs_eta26CLyz, hs_eta126CLyB, hs_eta226CLyD);
    };
    this.hs_integralEnumFromTo.notEvaluated = true;
    this.hs_integralEnumFromTo.evaluate = function (hs_zddIntegral26CLyJ, hs_eta26CLyN, hs_eta126CLyP) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CLyJ, hs_eta26CLyN, hs_eta126CLyP);
    };
    this.hs_integralEnumFromThen.notEvaluated = true;
    this.hs_integralEnumFromThen.evaluate = function (hs_zddIntegral26CLyX, hs_zddBounded26CLz7, hs_eta26CLz1, hs_eta126CLyY) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CLyX, hs_zddBounded26CLz7, hs_eta26CLz1, hs_eta126CLyY);
    };
    this.hs_integralEnumFrom.notEvaluated = true;
    this.hs_integralEnumFrom.evaluate = function (hs_zddIntegral26CLzm, hs_zddBounded26CLzs, hs_eta26CLzq) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CLzm, hs_zddBounded26CLzs, hs_eta26CLzq);
    };
    this.hs_gcd.notEvaluated = true;
    this.hs_gcd.evaluate = function (hs_zddIntegral26CLzB, hs_eta26CLzX, hs_eta126CLzZ) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CLzB, hs_eta26CLzX, hs_eta126CLzZ);
    };
    this.hs_even.notEvaluated = true;
    this.hs_even.evaluate = function (hs_zddIntegral26CLA4, hs_eta26CLAa) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CLA4, hs_eta26CLAa);
    };
    this.hs_odd.notEvaluated = true;
    this.hs_odd.evaluate = function (hs_zddIntegral26CLAh) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CLAh);
    };
    this.hs_zddmround.notEvaluated = true;
    this.hs_zddmround.evaluate = function (hs_zddRealFrac326CLAn, hs_eta26CLAu, hs_eta126CLAz) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddRealFrac326CLAn, hs_eta26CLAu, hs_eta126CLAz);
    };
    this.hs_showSigned.notEvaluated = true;
    this.hs_showSigned.evaluate = function (hs_zddReal2126CLBn, hs_eta26CLBu, hs_eta126CLBv, hs_eta226CLBq) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddReal2126CLBn, hs_eta26CLBu, hs_eta126CLBv, hs_eta226CLBq);
    };
    this.hs_numericEnumFromThen.notEvaluated = true;
    this.hs_numericEnumFromThen.evaluate = function (hs_zddFractional726CLBH, hs_eta26CLBJ, hs_eta126CLBL) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddFractional726CLBH, hs_eta26CLBJ, hs_eta126CLBL);
    };
    this.hs_numericEnumFromThenTo.notEvaluated = true;
    this.hs_numericEnumFromThenTo.evaluate = function (hs_zddOrd1726CLC7, hs_zddFractional726CLBY, hs_eta26CLC2, hs_eta126CLC1, hs_eta226CLCa) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddOrd1726CLC7, hs_zddFractional726CLBY, hs_eta26CLC2, hs_eta126CLC1, hs_eta226CLCa);
    };
    this.hs_numericEnumFrom.notEvaluated = true;
    this.hs_numericEnumFrom.evaluate = function (hs_zddFractional726CLCp, hs_eta26CLCr) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddFractional726CLCp, hs_eta26CLCr);
    };
    this.hs_numericEnumFromTo.notEvaluated = true;
    this.hs_numericEnumFromTo.evaluate = function (hs_zddOrd1726CLCO, hs_zddFractional726CLCD, hs_eta26CLCR, hs_eta126CLCG) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddOrd1726CLCO, hs_zddFractional726CLCD, hs_eta26CLCR, hs_eta126CLCG);
    };
    this.hs_denominator.notEvaluated = true;
    this.hs_denominator.evaluate = function (hs_zddIntegral26CLD0, hs_ds26CLCV) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CLD0, hs_ds26CLCV);
    };
    this.hs_numerator.notEvaluated = true;
    this.hs_numerator.evaluate = function (hs_zddIntegral26CLD8, hs_ds26CLD3) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CLD8, hs_ds26CLD3);
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
    this.hs_zdfEqRatio.evaluate = function (hs_zddEq726CLFz) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddEq726CLFz);
    };
    this.hs_ratioPrec1.evaluateOnce = function () {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_reduce.notEvaluated = true;
    this.hs_reduce.evaluate = function (hs_zddIntegral26CLGf, hs_eta26CLGp, hs_eta126CLGj) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CLGf, hs_eta26CLGp, hs_eta126CLGj);
    };
    this.hs_zv.notEvaluated = true;
    this.hs_zv.evaluate = function (hs_zddIntegral26CLGA, hs_eta26CLGE, hs_eta126CLGF) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CLGA, hs_eta26CLGE, hs_eta126CLGF);
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
    this.hs_zdfShowRatio.evaluate = function (hs_zddIntegral26CLIj) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CLIj);
    };
    this.hs_zdfNumRatio.notEvaluated = true;
    this.hs_zdfNumRatio.evaluate = function (hs_zddIntegral26CLPy) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CLPy);
    };
    this.hs_zdfOrdRatio.notEvaluated = true;
    this.hs_zdfOrdRatio.evaluate = function (hs_zddIntegral26CLSa) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CLSa);
    };
    this.hs_zdfRealRatio.notEvaluated = true;
    this.hs_zdfRealRatio.evaluate = function (hs_zddIntegral26CLSO) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CLSO);
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
    this.hs_zdfFractionalRatio.evaluate = function (hs_zddIntegral26CLUb) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CLUb);
    };
    this.hs_zdfRealFracRatio.notEvaluated = true;
    this.hs_zdfRealFracRatio.evaluate = function (hs_zddIntegral26CLVe) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CLVe);
    };
    this.hs_zc.notEvaluated = true;
    this.hs_zc.evaluate = function (hs_zddNum2726CM5f, hs_zddIntegral26CM4u, hs_eta26CM5I, hs_eta126CM4A) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddNum2726CM5f, hs_zddIntegral26CM4u, hs_eta26CM5I, hs_eta126CM4A);
    };
    this.hs_zczvzc.notEvaluated = true;
    this.hs_zczvzc.evaluate = function (hs_zddIntegral26CM5P, hs_eta26CM5V, hs_eta126CM5Z) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CM5P, hs_eta26CM5V, hs_eta126CM5Z);
    };
    this.hs_zczczvzczc.notEvaluated = true;
    this.hs_zczczvzczc.evaluate = function (hs_zddIntegral26CM6m, hs_eta26CM6s, hs_eta126CM6w) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CM6m, hs_eta26CM6s, hs_eta126CM6w);
    };
    this.hs_zczc.notEvaluated = true;
    this.hs_zczc.evaluate = function (hs_zddFractional726CM7p, hs_zddIntegral26CM7g, hs_eta26CM7r, hs_eta126CM7l) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddFractional726CM7p, hs_zddIntegral26CM7g, hs_eta26CM7r, hs_eta126CM7l);
    };
    this.hs_lcm.notEvaluated = true;
    this.hs_lcm.evaluate = function (hs_zddIntegral26CM7T, hs_eta26CM85, hs_eta126CM81) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CM7T, hs_eta26CM85, hs_eta126CM81);
    };
    this.hs_realToFrac.notEvaluated = true;
    this.hs_realToFrac.evaluate = function (hs_zddReal2126CM8i, hs_zddFractional726CM8g) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddReal2126CM8i, hs_zddFractional726CM8g);
    };
    this.hs_fromIntegral.notEvaluated = true;
    this.hs_fromIntegral.evaluate = function (hs_zddIntegral26CM8o, hs_zddNum2726CM8m) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CM8o, hs_zddNum2726CM8m);
    };
    this.hs_zdfEnumRatio.notEvaluated = true;
    this.hs_zdfEnumRatio.evaluate = function (hs_zddIntegral26CM9i) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_zddIntegral26CM9i);
    };
    this.hs_ZCzv.notEvaluated = true;
    this.hs_ZCzv.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_DZCReal.notEvaluated = true;
    this.hs_DZCReal.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_DZCIntegral.notEvaluated = true;
    this.hs_DZCIntegral.evaluate = function (hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziReal.loadDependencies();
        return this.evaluate(hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
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
    this.hs_zdfNumRatio.notEvaluated = false;
    this.hs_zdfOrdRatio.notEvaluated = false;
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
    this.hs_zc.notEvaluated = false;
    this.hs_zczvzc.notEvaluated = false;
    this.hs_zczczvzczc.notEvaluated = false;
    this.hs_zczc.notEvaluated = false;
    this.hs_lcm.notEvaluated = false;
    this.hs_realToFrac.notEvaluated = false;
    this.hs_fromIntegral.notEvaluated = false;
    this.hs_zdfEnumRatio.notEvaluated = false;
    this.hs_ZCzv.notEvaluated = false;
    this.hs_DZCReal.notEvaluated = false;
    this.hs_DZCIntegral.notEvaluated = false;
    this.hs_DZCFractional.notEvaluated = false;
    this.hs_DZCRealFrac.notEvaluated = false;
    var hs_zdctoInteger25un71 = new $hs.Func(1);
    var hs_zdcdivMod25un77 = new $hs.Func(2);
    var hs_zdcquotRem25un7l = new $hs.Func(2);
    var hs_zdcmod25un7z = new $hs.Func(2);
    var hs_zdcdiv25un7J = new $hs.Func(2);
    var hs_zdcrem25un7W = new $hs.Func(2);
    var hs_zdcquot25un86 = new $hs.Func(2);
    var hs_zdctoInteger125un8j = new $hs.Func(1);
    var hs_zdcdivMod125un8m = new $hs.Func(2);
    var hs_zdcquotRem125un8y = new $hs.Func(2);
    var hs_zdcrem125un8K = new $hs.Func(2);
    var hs_zdcquot125un8R = new $hs.Func(2);
    var hs_zdczeze25un8Y = new $hs.Func(3);
    var hs_zdczsze25un9h = new $hs.Func(1);
    var hs_zdczdp1Num25un9w = new $hs.Func(1);
    var hs_zdczdp1Ord25un9C = new $hs.Func(1);
    var hs_sat26CMg4 = new $hs.Data(1);
    var hs_zdczdp1Integral25un9J = new $hs.Thunk();
    var hs_zdcmod125un9K = new $hs.Func(2);
    var hs_zdcdiv125un9L = new $hs.Func(2);
    var hs_zdctoRational25un9M = new $hs.Func(1);
    var hs_zddReal25un9N = new $hs.Thunk();
    var hs_a25un9O = new $hs.Thunk();
    var hs_zddReal125un9P = new $hs.Thunk();
    var hs_zddNum25un9Q = new $hs.Thunk();
    var hs_zv125un9R = new $hs.Func(2);
    var hs_zddEq25un9S = new $hs.Thunk();
    var hs_zddNum125un9T = new $hs.Thunk();
    var hs_reduce125un9U = new $hs.Func(2);
    var hs_zddReal225unb7 = new $hs.Thunk();
    var hs_zddNum225unb8 = new $hs.Thunk();
    var hs_zddShow25unb9 = new $hs.Thunk();
    var hs_zdcshowsPrec25unba = new $hs.Func(2);
    var hs_zdcshowsPrec125unbs = new $hs.Func(3);
    var hs_a125unbS = new $hs.Func(2);
    var hs_zdcshowList25unbT = new $hs.Func(1);
    var hs_zdcshow25unbU = new $hs.Func(1);
    var hs_zddShow125unbV = new $hs.Thunk();
    var hs_zdcshowList125unbW = new $hs.Thunk();
    var hs_a225unbX = new $hs.Thunk();
    var hs_a325unbY = new $hs.Thunk();
    var hs_zdfShowRatio125unbZ = new $hs.Data(1);
    var hs_zddShow225unc0 = new $hs.Thunk();
    var hs_zdcshow125unc1 = new $hs.Thunk();
    var hs_zdcproperFraction25uncd = new $hs.Func(2);
    var hs_zdcproperFraction125uncF = new $hs.Func(3);
    var hs_zdctoRational125und9 = new $hs.Func(1);
    var hs_zdctoRational225undl = new $hs.Func(2);
    var hs_zddReal325undz = new $hs.Thunk();
    var hs_zddNum325undA = new $hs.Thunk();
    var hs_zddOrd25undB = new $hs.Thunk();
    var hs_zddEq125undC = new $hs.Thunk();
    var hs_zdcrecip25undD = new $hs.Func(1);
    var hs_zdcrecip125undW = new $hs.Func(2);
    var hs_zddReal425uneo = new $hs.Thunk();
    var hs_zddNum425unep = new $hs.Thunk();
    var hs_zdczp25uneq = new $hs.Func(2);
    var hs_zdczp125uneJ = new $hs.Func(3);
    var hs_zddReal525unf8 = new $hs.Thunk();
    var hs_zddNum525unf9 = new $hs.Thunk();
    var hs_zdczt25unfa = new $hs.Func(2);
    var hs_zdczt125unfr = new $hs.Func(3);
    var hs_zddReal625unfO = new $hs.Thunk();
    var hs_zddNum625unfP = new $hs.Thunk();
    var hs_zdczm25unfQ = new $hs.Func(2);
    var hs_zdczm125ung9 = new $hs.Func(3);
    var hs_a425ungy = new $hs.Thunk();
    var hs_zddNum725ungz = new $hs.Thunk();
    var hs_zdcnegate25ungA = new $hs.Func(1);
    var hs_zdcnegate125ungK = new $hs.Func(2);
    var hs_a525ungY = new $hs.Thunk();
    var hs_zddNum825ungZ = new $hs.Thunk();
    var hs_zdcabs25unh0 = new $hs.Func(1);
    var hs_zdcabs125unha = new $hs.Func(2);
    var hs_zddReal725unho = new $hs.Thunk();
    var hs_zddNum925unhp = new $hs.Thunk();
    var hs_zdcsignum25unhq = new $hs.Func(1);
    var hs_zdcsignum125unhC = new $hs.Func(2);
    var hs_zddReal825unhU = new $hs.Thunk();
    var hs_zddNum1025unhV = new $hs.Thunk();
    var hs_zdcfromInteger25unhW = new $hs.Func(1);
    var hs_zdcfromInteger125uni4 = new $hs.Func(2);
    var hs_a625unii = new $hs.Thunk();
    var hs_a725unij = new $hs.Thunk();
    var hs_a825unik = new $hs.Thunk();
    var hs_a925unil = new $hs.Thunk();
    var hs_a1025unim = new $hs.Thunk();
    var hs_a1125unin = new $hs.Func(2);
    var hs_a1225unio = new $hs.Func(2);
    var hs_a1325unip = new $hs.Func(2);
    var hs_a1425uniq = new $hs.Func(1);
    var hs_a1525uniC = new $hs.Func(1);
    var hs_a1625uniO = new $hs.Func(1);
    var hs_a1725unj4 = new $hs.Func(1);
    var hs_zdfNumRatio125unjg = new $hs.Data(1);
    var hs_zddNum1125unjs = new $hs.Thunk();
    var hs_zdcsucc25unjt = new $hs.Func(1);
    var hs_zdcsucc125unjy = new $hs.Func(1);
    var hs_zddNum1225unjK = new $hs.Thunk();
    var hs_zdcpred25unjL = new $hs.Func(1);
    var hs_zdcpred125unjQ = new $hs.Func(1);
    var hs_zddReal925unk2 = new $hs.Thunk();
    var hs_zddNum1325unk3 = new $hs.Thunk();
    var hs_zddOrd125unk4 = new $hs.Thunk();
    var hs_zdczl25unk5 = new $hs.Func(2);
    var hs_zdczl125unkm = new $hs.Func(3);
    var hs_zddReal1025unkK = new $hs.Thunk();
    var hs_zddNum1425unkL = new $hs.Thunk();
    var hs_zddOrd225unkM = new $hs.Thunk();
    var hs_zdczlze25unkN = new $hs.Func(2);
    var hs_zdczlze125unl4 = new $hs.Func(3);
    var hs_a1825unls = new $hs.Func(2);
    var hs_a1925unlt = new $hs.Func(2);
    var hs_a2025unlu = new $hs.Thunk();
    var hs_a2125unlv = new $hs.Thunk();
    var hs_a2225unlw = new $hs.Thunk();
    var hs_a2325unlx = new $hs.Thunk();
    var hs_zdcmin25unly = new $hs.Func(1);
    var hs_zdcmax25unlz = new $hs.Func(1);
    var hs_zdczg25unlA = new $hs.Func(1);
    var hs_zdczgze25unlB = new $hs.Func(1);
    var hs_zdccompare25unlC = new $hs.Func(1);
    var hs_zddOrd325unlD = new $hs.Thunk();
    var hs_zdczgze125unlE = new $hs.Thunk();
    var hs_a2425unlF = new $hs.Thunk();
    var hs_zddOrd425unlG = new $hs.Thunk();
    var hs_zdczg125unlH = new $hs.Thunk();
    var hs_a2525unlI = new $hs.Thunk();
    var hs_zddOrd525unlJ = new $hs.Thunk();
    var hs_zdcmax125unlK = new $hs.Thunk();
    var hs_a2625unlL = new $hs.Thunk();
    var hs_zddOrd625unlM = new $hs.Thunk();
    var hs_zdcmin125unlN = new $hs.Thunk();
    var hs_a2725unlO = new $hs.Thunk();
    var hs_a2825unlP = new $hs.Thunk();
    var hs_zdfOrdRatio125unlQ = new $hs.Data(1);
    var hs_zddOrd725unlR = new $hs.Thunk();
    var hs_zdccompare125unlS = new $hs.Thunk();
    var hs_a2925unmi = new $hs.Thunk();
    var hs_a3025unmj = new $hs.Thunk();
    var hs_a3125unmk = new $hs.Func(1);
    var hs_zdfRealRatio125unmw = new $hs.Data(1);
    var hs_zdctoRational325unmC = new $hs.Func(1);
    var hs_zddReal1125unmH = new $hs.Thunk();
    var hs_zddNum1525unmI = new $hs.Thunk();
    var hs_zdczs25unmJ = new $hs.Func(2);
    var hs_zdczs125unn0 = new $hs.Func(3);
    var hs_zddReal1225unnn = new $hs.Thunk();
    var hs_zddNum1625unno = new $hs.Thunk();
    var hs_zdcfromRational25unnp = new $hs.Func(1);
    var hs_zdcfromRational125unnz = new $hs.Func(2);
    var hs_a3225unnP = new $hs.Thunk();
    var hs_a3325unnQ = new $hs.Func(2);
    var hs_a3425unnR = new $hs.Func(1);
    var hs_a3525unnS = new $hs.Func(1);
    var hs_zdfFractionalRatio125unnT = new $hs.Data(1);
    var hs_a3625uno0 = new $hs.Func(2);
    var hs_a3725unos = new $hs.Thunk();
    var hs_a3825unot = new $hs.Thunk();
    var hs_zdctruncate25unou = new $hs.Func(2);
    var hs_zdcfloor25unov = new $hs.Func(1);
    var hs_zdcceiling25unow = new $hs.Func(1);
    var hs_zdcround25unox = new $hs.Func(1);
    var hs_zddRealFrac25unoy = new $hs.Thunk();
    var hs_zddReal1325unoz = new $hs.Thunk();
    var hs_zddOrd825unoA = new $hs.Thunk();
    var hs_zddFractional25unoB = new $hs.Thunk();
    var hs_zddNum1725unoC = new $hs.Thunk();
    var hs_zddEq225unoD = new $hs.Thunk();
    var hs_zdcround125unoE = new $hs.Func(2);
    var hs_a3925unoF = new $hs.Thunk();
    var hs_zddRealFrac125unoG = new $hs.Thunk();
    var hs_zddReal1425unoH = new $hs.Thunk();
    var hs_zddOrd925unoI = new $hs.Thunk();
    var hs_zddFractional125unoJ = new $hs.Thunk();
    var hs_zddNum1825unoK = new $hs.Thunk();
    var hs_zdcceiling125unoL = new $hs.Func(2);
    var hs_a4025unoM = new $hs.Thunk();
    var hs_zddRealFrac225unoN = new $hs.Thunk();
    var hs_zddReal1525unoO = new $hs.Thunk();
    var hs_zddOrd1025unoP = new $hs.Thunk();
    var hs_zddFractional225unoQ = new $hs.Thunk();
    var hs_zddNum1925unoR = new $hs.Thunk();
    var hs_zdcfloor125unoS = new $hs.Func(2);
    var hs_a4125unoT = new $hs.Thunk();
    var hs_zdctruncate125unoU = new $hs.Func(1);
    var hs_a4225unoV = new $hs.Func(1);
    var hs_zdfRealFracRatio125unoW = new $hs.Data(1);
    var hs_sat26CMlL = new $hs.Thunk();
    var hs_sat26CMlM = new $hs.Thunk();
    var hs_zdcfromEnum25untL = new $hs.Thunk();
    var hs_zdcfromEnum125untP = new $hs.Func(1);
    var hs_zddFractional325untV = new $hs.Thunk();
    var hs_zdcenumFrom25untW = new $hs.Func(1);
    var hs_zdcenumFrom125untX = new $hs.Func(1);
    var hs_zddFractional425unu1 = new $hs.Thunk();
    var hs_zdcenumFromThen25unu2 = new $hs.Func(2);
    var hs_zdcenumFromThen125unu3 = new $hs.Func(1);
    var hs_zddFractional525unu7 = new $hs.Thunk();
    var hs_zddOrd1125unu8 = new $hs.Thunk();
    var hs_zdcenumFromTo25unu9 = new $hs.Func(2);
    var hs_zdcenumFromTo125unua = new $hs.Func(1);
    var hs_zddFractional625unuf = new $hs.Thunk();
    var hs_zddOrd1225unug = new $hs.Thunk();
    var hs_zdcenumFromThenTo25unuh = new $hs.Func(3);
    var hs_zdcenumFromThenTo125unui = new $hs.Func(1);
    var hs_zddReal1625unun = new $hs.Thunk();
    var hs_zddNum2025unuo = new $hs.Thunk();
    var hs_zddOrd1325unup = new $hs.Thunk();
    var hs_zddEq325unuq = new $hs.Thunk();
    var hs_zc125unur = new $hs.Func(2);
    var hs_zddReal1725unvD = new $hs.Thunk();
    var hs_zddNum2125unvE = new $hs.Thunk();
    var hs_zddOrd1425unvF = new $hs.Thunk();
    var hs_zddEq425unvG = new $hs.Thunk();
    var hs_zc225unvH = new $hs.Func(2);
    var hs_zddReal1825unwT = new $hs.Thunk();
    var hs_zddNum2225unwU = new $hs.Thunk();
    var hs_zddOrd1525unwV = new $hs.Thunk();
    var hs_zddEq525unwW = new $hs.Thunk();
    var hs_zc325unwX = new $hs.Func(2);
    var hs_zddReal1925unBf = new $hs.Thunk();
    var hs_zddNum2325unBg = new $hs.Thunk();
    var hs_zddOrd1625unBh = new $hs.Thunk();
    var hs_zddEq625unBi = new $hs.Thunk();
    var hs_lcm125unBj = new $hs.Func(2);
    var hs_zddReal2025unCa = new $hs.Thunk();
    var hs_zddNum2425unCb = new $hs.Thunk();
    var hs_zdctoEnum25unCc = new $hs.Func(1);
    var hs_zdctoEnum125unCm = new $hs.Func(2);
    var hs_zddNum2525unCC = new $hs.Thunk();
    var hs_a4325unCD = new $hs.Func(1);
    var hs_zddNum2625unCI = new $hs.Thunk();
    var hs_a4425unCJ = new $hs.Func(1);
    var hs_a4525unCO = new $hs.Func(1);
    var hs_a4625unCP = new $hs.Thunk();
    var hs_a4725unCQ = new $hs.Thunk();
    var hs_a4825unCR = new $hs.Func(1);
    var hs_a4925unCS = new $hs.Thunk();
    var hs_a5025unCT = new $hs.Func(2);
    var hs_a5125unCU = new $hs.Thunk();
    var hs_a5225unCV = new $hs.Thunk();
    var hs_a5325unCW = new $hs.Func(2);
    var hs_a5425unCX = new $hs.Thunk();
    var hs_a5525unCY = new $hs.Thunk();
    var hs_a5625unCZ = new $hs.Func(3);
    var hs_zdfEnumRatio125unD0 = new $hs.Data(1);
    this.hs_zdp1Fractional.evaluate = function (hs_tpl26CLrq) {
        var hs_tpl26CM9u = hs_tpl26CLrq;
        if (hs_tpl26CLrq.notEvaluated) {
            hs_tpl26CM9u = hs_tpl26CLrq.hscall();
        }
        var hs_tpl26CLrw = hs_tpl26CM9u.data[0];
        if (hs_tpl26CLrw.notEvaluated) {
            return hs_tpl26CLrw.hscall();
        } else {
            return hs_tpl26CLrw;
        }
    };
    this.hs_zs.evaluate = function (hs_tpl26CLry) {
        var hs_tpl26CM9y = hs_tpl26CLry;
        if (hs_tpl26CLry.notEvaluated) {
            hs_tpl26CM9y = hs_tpl26CLry.hscall();
        }
        var hs_tpl26CLrE = hs_tpl26CM9y.data[1];
        if (hs_tpl26CLrE.notEvaluated) {
            return hs_tpl26CLrE.hscall();
        } else {
            return hs_tpl26CLrE;
        }
    };
    this.hs_recip.evaluate = function (hs_tpl26CLrG) {
        var hs_tpl26CM9C = hs_tpl26CLrG;
        if (hs_tpl26CLrG.notEvaluated) {
            hs_tpl26CM9C = hs_tpl26CLrG.hscall();
        }
        var hs_tpl26CLrM = hs_tpl26CM9C.data[2];
        if (hs_tpl26CLrM.notEvaluated) {
            return hs_tpl26CLrM.hscall();
        } else {
            return hs_tpl26CLrM;
        }
    };
    this.hs_fromRational.evaluate = function (hs_tpl26CLrO) {
        var hs_tpl26CM9G = hs_tpl26CLrO;
        if (hs_tpl26CLrO.notEvaluated) {
            hs_tpl26CM9G = hs_tpl26CLrO.hscall();
        }
        var hs_tpl26CLrU = hs_tpl26CM9G.data[3];
        if (hs_tpl26CLrU.notEvaluated) {
            return hs_tpl26CLrU.hscall();
        } else {
            return hs_tpl26CLrU;
        }
    };
    this.hs_zdp1Integral.evaluate = function (hs_tpl26CLrW) {
        var hs_tpl26CM9P = hs_tpl26CLrW;
        if (hs_tpl26CLrW.notEvaluated) {
            hs_tpl26CM9P = hs_tpl26CLrW.hscall();
        }
        var hs_tpl26CLs7 = hs_tpl26CM9P.data[0];
        if (hs_tpl26CLs7.notEvaluated) {
            return hs_tpl26CLs7.hscall();
        } else {
            return hs_tpl26CLs7;
        }
    };
    this.hs_zdp2Integral.evaluate = function (hs_tpl26CLs9) {
        var hs_tpl26CM9Y = hs_tpl26CLs9;
        if (hs_tpl26CLs9.notEvaluated) {
            hs_tpl26CM9Y = hs_tpl26CLs9.hscall();
        }
        var hs_tpl26CLsk = hs_tpl26CM9Y.data[1];
        if (hs_tpl26CLsk.notEvaluated) {
            return hs_tpl26CLsk.hscall();
        } else {
            return hs_tpl26CLsk;
        }
    };
    this.hs_quot.evaluate = function (hs_tpl26CLsm) {
        var hs_tpl26CMa7 = hs_tpl26CLsm;
        if (hs_tpl26CLsm.notEvaluated) {
            hs_tpl26CMa7 = hs_tpl26CLsm.hscall();
        }
        var hs_tpl26CLsx = hs_tpl26CMa7.data[2];
        if (hs_tpl26CLsx.notEvaluated) {
            return hs_tpl26CLsx.hscall();
        } else {
            return hs_tpl26CLsx;
        }
    };
    this.hs_rem.evaluate = function (hs_tpl26CLsz) {
        var hs_tpl26CMag = hs_tpl26CLsz;
        if (hs_tpl26CLsz.notEvaluated) {
            hs_tpl26CMag = hs_tpl26CLsz.hscall();
        }
        var hs_tpl26CLsK = hs_tpl26CMag.data[3];
        if (hs_tpl26CLsK.notEvaluated) {
            return hs_tpl26CLsK.hscall();
        } else {
            return hs_tpl26CLsK;
        }
    };
    this.hs_div.evaluate = function (hs_tpl26CLsM) {
        var hs_tpl26CMap = hs_tpl26CLsM;
        if (hs_tpl26CLsM.notEvaluated) {
            hs_tpl26CMap = hs_tpl26CLsM.hscall();
        }
        var hs_tpl26CLsX = hs_tpl26CMap.data[4];
        if (hs_tpl26CLsX.notEvaluated) {
            return hs_tpl26CLsX.hscall();
        } else {
            return hs_tpl26CLsX;
        }
    };
    this.hs_mod.evaluate = function (hs_tpl26CLsZ) {
        var hs_tpl26CMay = hs_tpl26CLsZ;
        if (hs_tpl26CLsZ.notEvaluated) {
            hs_tpl26CMay = hs_tpl26CLsZ.hscall();
        }
        var hs_tpl26CLta = hs_tpl26CMay.data[5];
        if (hs_tpl26CLta.notEvaluated) {
            return hs_tpl26CLta.hscall();
        } else {
            return hs_tpl26CLta;
        }
    };
    this.hs_quotRem.evaluate = function (hs_tpl26CLtc) {
        var hs_tpl26CMaH = hs_tpl26CLtc;
        if (hs_tpl26CLtc.notEvaluated) {
            hs_tpl26CMaH = hs_tpl26CLtc.hscall();
        }
        var hs_tpl26CLtn = hs_tpl26CMaH.data[6];
        if (hs_tpl26CLtn.notEvaluated) {
            return hs_tpl26CLtn.hscall();
        } else {
            return hs_tpl26CLtn;
        }
    };
    this.hs_divMod.evaluate = function (hs_tpl26CLtp) {
        var hs_tpl26CMaQ = hs_tpl26CLtp;
        if (hs_tpl26CLtp.notEvaluated) {
            hs_tpl26CMaQ = hs_tpl26CLtp.hscall();
        }
        var hs_tpl26CLtA = hs_tpl26CMaQ.data[7];
        if (hs_tpl26CLtA.notEvaluated) {
            return hs_tpl26CLtA.hscall();
        } else {
            return hs_tpl26CLtA;
        }
    };
    this.hs_toInteger.evaluate = function (hs_tpl26CLtC) {
        var hs_tpl26CMaZ = hs_tpl26CLtC;
        if (hs_tpl26CLtC.notEvaluated) {
            hs_tpl26CMaZ = hs_tpl26CLtC.hscall();
        }
        var hs_tpl26CLtN = hs_tpl26CMaZ.data[8];
        if (hs_tpl26CLtN.notEvaluated) {
            return hs_tpl26CLtN.hscall();
        } else {
            return hs_tpl26CLtN;
        }
    };
    this.hs_zdp1Real.evaluate = function (hs_tpl26CLtP) {
        var hs_tpl26CMb2 = hs_tpl26CLtP;
        if (hs_tpl26CLtP.notEvaluated) {
            hs_tpl26CMb2 = hs_tpl26CLtP.hscall();
        }
        var hs_tpl26CLtU = hs_tpl26CMb2.data[0];
        if (hs_tpl26CLtU.notEvaluated) {
            return hs_tpl26CLtU.hscall();
        } else {
            return hs_tpl26CLtU;
        }
    };
    this.hs_zdp2Real.evaluate = function (hs_tpl26CLtW) {
        var hs_tpl26CMb5 = hs_tpl26CLtW;
        if (hs_tpl26CLtW.notEvaluated) {
            hs_tpl26CMb5 = hs_tpl26CLtW.hscall();
        }
        var hs_tpl26CLu1 = hs_tpl26CMb5.data[1];
        if (hs_tpl26CLu1.notEvaluated) {
            return hs_tpl26CLu1.hscall();
        } else {
            return hs_tpl26CLu1;
        }
    };
    this.hs_toRational.evaluate = function (hs_tpl26CLu3) {
        var hs_tpl26CMb8 = hs_tpl26CLu3;
        if (hs_tpl26CLu3.notEvaluated) {
            hs_tpl26CMb8 = hs_tpl26CLu3.hscall();
        }
        var hs_tpl26CLu8 = hs_tpl26CMb8.data[2];
        if (hs_tpl26CLu8.notEvaluated) {
            return hs_tpl26CLu8.hscall();
        } else {
            return hs_tpl26CLu8;
        }
    };
    this.hs_zdp1RealFrac.evaluate = function (hs_tpl26CLua) {
        var hs_tpl26CMbf = hs_tpl26CLua;
        if (hs_tpl26CLua.notEvaluated) {
            hs_tpl26CMbf = hs_tpl26CLua.hscall();
        }
        var hs_tpl26CLuj = hs_tpl26CMbf.data[0];
        if (hs_tpl26CLuj.notEvaluated) {
            return hs_tpl26CLuj.hscall();
        } else {
            return hs_tpl26CLuj;
        }
    };
    this.hs_zdp2RealFrac.evaluate = function (hs_tpl26CLul) {
        var hs_tpl26CMbm = hs_tpl26CLul;
        if (hs_tpl26CLul.notEvaluated) {
            hs_tpl26CMbm = hs_tpl26CLul.hscall();
        }
        var hs_tpl26CLuu = hs_tpl26CMbm.data[1];
        if (hs_tpl26CLuu.notEvaluated) {
            return hs_tpl26CLuu.hscall();
        } else {
            return hs_tpl26CLuu;
        }
    };
    this.hs_properFraction.evaluate = function (hs_tpl26CLuw) {
        var hs_tpl26CMbt = hs_tpl26CLuw;
        if (hs_tpl26CLuw.notEvaluated) {
            hs_tpl26CMbt = hs_tpl26CLuw.hscall();
        }
        var hs_tpl26CLuF = hs_tpl26CMbt.data[2];
        if (hs_tpl26CLuF.notEvaluated) {
            return hs_tpl26CLuF.hscall();
        } else {
            return hs_tpl26CLuF;
        }
    };
    this.hs_truncate.evaluate = function (hs_tpl26CLuH) {
        var hs_tpl26CMbA = hs_tpl26CLuH;
        if (hs_tpl26CLuH.notEvaluated) {
            hs_tpl26CMbA = hs_tpl26CLuH.hscall();
        }
        var hs_tpl26CLuQ = hs_tpl26CMbA.data[3];
        if (hs_tpl26CLuQ.notEvaluated) {
            return hs_tpl26CLuQ.hscall();
        } else {
            return hs_tpl26CLuQ;
        }
    };
    this.hs_round.evaluate = function (hs_tpl26CLuS) {
        var hs_tpl26CMbH = hs_tpl26CLuS;
        if (hs_tpl26CLuS.notEvaluated) {
            hs_tpl26CMbH = hs_tpl26CLuS.hscall();
        }
        var hs_tpl26CLv1 = hs_tpl26CMbH.data[4];
        if (hs_tpl26CLv1.notEvaluated) {
            return hs_tpl26CLv1.hscall();
        } else {
            return hs_tpl26CLv1;
        }
    };
    this.hs_ceiling.evaluate = function (hs_tpl26CLv3) {
        var hs_tpl26CMbO = hs_tpl26CLv3;
        if (hs_tpl26CLv3.notEvaluated) {
            hs_tpl26CMbO = hs_tpl26CLv3.hscall();
        }
        var hs_tpl26CLvc = hs_tpl26CMbO.data[5];
        if (hs_tpl26CLvc.notEvaluated) {
            return hs_tpl26CLvc.hscall();
        } else {
            return hs_tpl26CLvc;
        }
    };
    this.hs_floor.evaluate = function (hs_tpl26CLve) {
        var hs_tpl26CMbV = hs_tpl26CLve;
        if (hs_tpl26CLve.notEvaluated) {
            hs_tpl26CMbV = hs_tpl26CLve.hscall();
        }
        var hs_tpl26CLvn = hs_tpl26CMbV.data[6];
        if (hs_tpl26CLvn.notEvaluated) {
            return hs_tpl26CLvn.hscall();
        } else {
            return hs_tpl26CLvn;
        }
    };
    this.hs_zdWZCzv.evaluate = function (hs_tpl26CLvq, hs_tpl26CLvs) {
        var hs_tpl26CLvu = hs_tpl26CLvq;
        if (hs_tpl26CLvq.notEvaluated) {
            hs_tpl26CLvu = hs_tpl26CLvq.hscall();
        }
        var hs_tpl26CLvv = hs_tpl26CLvs;
        if (hs_tpl26CLvs.notEvaluated) {
            hs_tpl26CLvv = hs_tpl26CLvs.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CLvu, hs_tpl26CLvv];
        return $res;
    };
    this.hs_zddmfloor.evaluate = function (hs_zddRealFrac326CLvF, hs_eta26CLvA, hs_eta126CLvG) {
        var hs_zddReal2126CLvB = new $hs.Thunk();
        hs_zddReal2126CLvB.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_eta26CLvA);
        };
        var hs_zddNum2726CLvD = new $hs.Thunk();
        hs_zddNum2726CLvD.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLvB);
        };
        var hs_ds26CLvH = new $hs.Thunk();
        hs_ds26CLvH.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_properFraction.hscall(hs_zddRealFrac326CLvF, hs_eta26CLvA, hs_eta126CLvG);
        };
        var hs_sat26CMbX = new $hs.Thunk();
        hs_sat26CMbX.evaluateOnce = function () {
            var hs_sat26CMca = new $hs.Thunk();
            hs_sat26CMca.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            var hs_sat26CMcb = $hs.modules.GHCziReal.hs_zdp2RealFrac.hscall(hs_zddRealFrac326CLvF);
            var hs_sat26CMcc = $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_sat26CMcb);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26CMcc, hs_sat26CMca);
        };
        var hs_sat26CMbY = new $hs.Thunk();
        hs_sat26CMbY.evaluateOnce = function () {
            var hs_wild26CMc9 = hs_ds26CLvH;
            if (hs_ds26CLvH.notEvaluated) {
                hs_wild26CMc9 = hs_ds26CLvH.hscall();
            }
            var hs_r26CLvN = hs_wild26CMc9.data[1];
            if (hs_r26CLvN.notEvaluated) {
                return hs_r26CLvN.hscall();
            } else {
                return hs_r26CLvN;
            }
        };
        var hs_sat26CMbZ = $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac326CLvF);
        var hs_sat26CMc0 = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_sat26CMbZ);
        var hs_wild26CMc1 = $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26CMc0, hs_sat26CMbY, hs_sat26CMbX);
        switch (hs_wild26CMc1.tag) {
        case 1:
            var hs_wild126CMc7 = hs_ds26CLvH;
            if (hs_ds26CLvH.notEvaluated) {
                hs_wild126CMc7 = hs_ds26CLvH.hscall();
            }
            var hs_n26CLvX = hs_wild126CMc7.data[0];
            if (hs_n26CLvX.notEvaluated) {
                return hs_n26CLvX.hscall();
            } else {
                return hs_n26CLvX;
            }
        case 2:
            var hs_sat26CMc2 = new $hs.Thunk();
            hs_sat26CMc2.evaluateOnce = function () {
                var hs_sat26CMc5 = new $hs.Thunk();
                hs_sat26CMc5.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLvD, hs_sat26CMc5);
            };
            var hs_sat26CMbW = new $hs.Thunk();
            hs_sat26CMbW.evaluateOnce = function () {
                var hs_wild126CMc4 = hs_ds26CLvH;
                if (hs_ds26CLvH.notEvaluated) {
                    hs_wild126CMc4 = hs_ds26CLvH.hscall();
                }
                var hs_n26CLw1 = hs_wild126CMc4.data[0];
                if (hs_n26CLw1.notEvaluated) {
                    return hs_n26CLw1.hscall();
                } else {
                    return hs_n26CLw1;
                }
            };
            return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum2726CLvD, hs_sat26CMbW, hs_sat26CMc2);
        }
    };
    this.hs_zddmceiling.evaluate = function (hs_zddRealFrac326CLwe, hs_eta26CLw9, hs_eta126CLwf) {
        var hs_zddReal2126CLwa = new $hs.Thunk();
        hs_zddReal2126CLwa.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_eta26CLw9);
        };
        var hs_zddNum2726CLwc = new $hs.Thunk();
        hs_zddNum2726CLwc.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLwa);
        };
        var hs_ds26CLwg = new $hs.Thunk();
        hs_ds26CLwg.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_properFraction.hscall(hs_zddRealFrac326CLwe, hs_eta26CLw9, hs_eta126CLwf);
        };
        var hs_sat26CMce = new $hs.Thunk();
        hs_sat26CMce.evaluateOnce = function () {
            var hs_sat26CMcr = new $hs.Thunk();
            hs_sat26CMcr.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            var hs_sat26CMcs = $hs.modules.GHCziReal.hs_zdp2RealFrac.hscall(hs_zddRealFrac326CLwe);
            var hs_sat26CMct = $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_sat26CMcs);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26CMct, hs_sat26CMcr);
        };
        var hs_sat26CMcf = new $hs.Thunk();
        hs_sat26CMcf.evaluateOnce = function () {
            var hs_wild26CMcq = hs_ds26CLwg;
            if (hs_ds26CLwg.notEvaluated) {
                hs_wild26CMcq = hs_ds26CLwg.hscall();
            }
            var hs_r26CLwm = hs_wild26CMcq.data[1];
            if (hs_r26CLwm.notEvaluated) {
                return hs_r26CLwm.hscall();
            } else {
                return hs_r26CLwm;
            }
        };
        var hs_sat26CMcg = $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac326CLwe);
        var hs_sat26CMch = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_sat26CMcg);
        var hs_wild26CMci = $hs.modules.GHCziClasses.hs_zg.hscall(hs_sat26CMch, hs_sat26CMcf, hs_sat26CMce);
        switch (hs_wild26CMci.tag) {
        case 1:
            var hs_wild126CMco = hs_ds26CLwg;
            if (hs_ds26CLwg.notEvaluated) {
                hs_wild126CMco = hs_ds26CLwg.hscall();
            }
            var hs_n26CLww = hs_wild126CMco.data[0];
            if (hs_n26CLww.notEvaluated) {
                return hs_n26CLww.hscall();
            } else {
                return hs_n26CLww;
            }
        case 2:
            var hs_sat26CMcj = new $hs.Thunk();
            hs_sat26CMcj.evaluateOnce = function () {
                var hs_sat26CMcm = new $hs.Thunk();
                hs_sat26CMcm.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLwc, hs_sat26CMcm);
            };
            var hs_sat26CMcd = new $hs.Thunk();
            hs_sat26CMcd.evaluateOnce = function () {
                var hs_wild126CMcl = hs_ds26CLwg;
                if (hs_ds26CLwg.notEvaluated) {
                    hs_wild126CMcl = hs_ds26CLwg.hscall();
                }
                var hs_n26CLwA = hs_wild126CMcl.data[0];
                if (hs_n26CLwA.notEvaluated) {
                    return hs_n26CLwA.hscall();
                } else {
                    return hs_n26CLwA;
                }
            };
            return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum2726CLwc, hs_sat26CMcd, hs_sat26CMcj);
        }
    };
    this.hs_zddmtruncate.evaluate = function (hs_zddRealFrac326CLwH, hs_zddIntegral26CLwI, hs_x26CLwJ) {
        var hs_wild26CMcv = $hs.modules.GHCziReal.hs_properFraction.hscall(hs_zddRealFrac326CLwH, hs_zddIntegral26CLwI, hs_x26CLwJ);
        var hs_m26CLwN = hs_wild26CMcv.data[0];
        if (hs_m26CLwN.notEvaluated) {
            return hs_m26CLwN.hscall();
        } else {
            return hs_m26CLwN;
        }
    };
    this.hs_zddmrecip.evaluate = function (hs_zddFractional726CLwQ, hs_eta26CLwU) {
        var hs_sat26CMcw = new $hs.Thunk();
        hs_sat26CMcw.evaluateOnce = function () {
            var hs_sat26CMcx = new $hs.Thunk();
            hs_sat26CMcx.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            var hs_sat26CMcy = $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional726CLwQ);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26CMcy, hs_sat26CMcx);
        };
        return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional726CLwQ, hs_sat26CMcw, hs_eta26CLwU);
    };
    this.hs_zddmzs.evaluate = function (hs_zddFractional726CLwY, hs_eta26CLx0, hs_eta126CLx1) {
        var hs_sat26CMcz = new $hs.Thunk();
        hs_sat26CMcz.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_recip.hscall(hs_zddFractional726CLwY, hs_eta126CLx1);
        };
        var hs_sat26CMcA = $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional726CLwY);
        return $hs.modules.GHCziNum.hs_zt.hscall(hs_sat26CMcA, hs_eta26CLx0, hs_sat26CMcz);
    };
    this.hs_zddmdivMod.evaluate = function (hs_zddIntegral26CLx7, hs_eta26CLxc, hs_eta126CLxd) {
        var hs_zddReal2126CLx8 = new $hs.Thunk();
        hs_zddReal2126CLx8.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLx7);
        };
        var hs_zddNum2726CLxa = new $hs.Thunk();
        hs_zddNum2726CLxa.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLx8);
        };
        var hs_ds26CLxk = new $hs.Thunk();
        hs_ds26CLxk.evaluateOnce = function () {
            var hs_wild26CLxh = $hs.modules.GHCziReal.hs_quotRem.hscall(hs_zddIntegral26CLx7, hs_eta26CLxc, hs_eta126CLxd);
            var hs_q26CLxi = hs_wild26CLxh.data[0];
            var hs_r26CLxj = hs_wild26CLxh.data[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_wild26CLxh, hs_q26CLxi, hs_r26CLxj];
            return $res;
        };
        var hs_r26CLxr = new $hs.Thunk();
        hs_r26CLxr.evaluateOnce = function () {
            var hs_ds126CMcU = hs_ds26CLxk;
            if (hs_ds26CLxk.notEvaluated) {
                hs_ds126CMcU = hs_ds26CLxk.hscall();
            }
            var hs_r126CLxq = hs_ds126CMcU.data[2];
            if (hs_r126CLxq.notEvaluated) {
                return hs_r126CLxq.hscall();
            } else {
                return hs_r126CLxq;
            }
        };
        var hs_sat26CMcC = new $hs.Thunk();
        hs_sat26CMcC.evaluateOnce = function () {
            var hs_sat26CMcR = new $hs.Thunk();
            hs_sat26CMcR.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_signum.hscall(hs_zddNum2726CLxa, hs_eta126CLxd);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum2726CLxa, hs_sat26CMcR);
        };
        var hs_sat26CMcD = new $hs.Thunk();
        hs_sat26CMcD.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_signum.hscall(hs_zddNum2726CLxa, hs_r26CLxr);
        };
        var hs_sat26CMcE = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2126CLx8);
        var hs_sat26CMcF = $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_sat26CMcE);
        var hs_wild26CMcG = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26CMcF, hs_sat26CMcD, hs_sat26CMcC);
        switch (hs_wild26CMcG.tag) {
        case 1:
            var hs_ds126CMcQ = hs_ds26CLxk;
            if (hs_ds26CLxk.notEvaluated) {
                hs_ds126CMcQ = hs_ds26CLxk.hscall();
            }
            var hs_qr26CLxC = hs_ds126CMcQ.data[0];
            if (hs_qr26CLxC.notEvaluated) {
                return hs_qr26CLxC.hscall();
            } else {
                return hs_qr26CLxC;
            }
        case 2:
            var hs_sat26CMcH = new $hs.Thunk();
            hs_sat26CMcH.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum2726CLxa, hs_r26CLxr, hs_eta126CLxd);
            };
            var hs_sat26CMcB = new $hs.Thunk();
            hs_sat26CMcB.evaluateOnce = function () {
                var hs_sat26CMcJ = new $hs.Thunk();
                hs_sat26CMcJ.evaluateOnce = function () {
                    var hs_sat26CMcN = new $hs.Thunk();
                    hs_sat26CMcN.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLxa, hs_sat26CMcN);
                };
                var hs_sat26CMcI = new $hs.Thunk();
                hs_sat26CMcI.evaluateOnce = function () {
                    var hs_ds126CMcM = hs_ds26CLxk;
                    if (hs_ds26CLxk.notEvaluated) {
                        hs_ds126CMcM = hs_ds26CLxk.hscall();
                    }
                    var hs_q26CLxH = hs_ds126CMcM.data[1];
                    if (hs_q26CLxH.notEvaluated) {
                        return hs_q26CLxH.hscall();
                    } else {
                        return hs_q26CLxH;
                    }
                };
                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum2726CLxa, hs_sat26CMcI, hs_sat26CMcJ);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26CMcB, hs_sat26CMcH];
            return $res;
        }
    };
    this.hs_zddmmod.evaluate = function (hs_zddIntegral26CLxQ, hs_n26CLxR, hs_d26CLxS) {
        var hs_wild26CMcW = $hs.modules.GHCziReal.hs_divMod.hscall(hs_zddIntegral26CLxQ, hs_n26CLxR, hs_d26CLxS);
        var hs_r26CLxW = hs_wild26CMcW.data[1];
        if (hs_r26CLxW.notEvaluated) {
            return hs_r26CLxW.hscall();
        } else {
            return hs_r26CLxW;
        }
    };
    this.hs_zddmdiv.evaluate = function (hs_zddIntegral26CLy0, hs_n26CLy1, hs_d26CLy2) {
        var hs_wild26CMcY = $hs.modules.GHCziReal.hs_divMod.hscall(hs_zddIntegral26CLy0, hs_n26CLy1, hs_d26CLy2);
        var hs_q26CLy6 = hs_wild26CMcY.data[0];
        if (hs_q26CLy6.notEvaluated) {
            return hs_q26CLy6.hscall();
        } else {
            return hs_q26CLy6;
        }
    };
    this.hs_zddmrem.evaluate = function (hs_zddIntegral26CLya, hs_n26CLyb, hs_d26CLyc) {
        var hs_wild26CMd0 = $hs.modules.GHCziReal.hs_quotRem.hscall(hs_zddIntegral26CLya, hs_n26CLyb, hs_d26CLyc);
        var hs_r26CLyg = hs_wild26CMd0.data[1];
        if (hs_r26CLyg.notEvaluated) {
            return hs_r26CLyg.hscall();
        } else {
            return hs_r26CLyg;
        }
    };
    this.hs_zddmquot.evaluate = function (hs_zddIntegral26CLyk, hs_n26CLyl, hs_d26CLym) {
        var hs_wild26CMd2 = $hs.modules.GHCziReal.hs_quotRem.hscall(hs_zddIntegral26CLyk, hs_n26CLyl, hs_d26CLym);
        var hs_q26CLyq = hs_wild26CMd2.data[0];
        if (hs_q26CLyq.notEvaluated) {
            return hs_q26CLyq.hscall();
        } else {
            return hs_q26CLyq;
        }
    };
    this.hs_integralEnumFromThenTo.evaluate = function (hs_zddIntegral26CLyv, hs_eta26CLyz, hs_eta126CLyB, hs_eta226CLyD) {
        var hs_sat26CMd4 = new $hs.Thunk();
        hs_sat26CMd4.evaluateOnce = function () {
            var hs_sat26CMd8 = new $hs.Thunk();
            hs_sat26CMd8.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26CLyv, hs_eta226CLyD);
            };
            var hs_sat26CMd9 = new $hs.Thunk();
            hs_sat26CMd9.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26CLyv, hs_eta126CLyB);
            };
            var hs_sat26CMd7 = new $hs.Thunk();
            hs_sat26CMd7.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26CLyv, hs_eta26CLyz);
            };
            return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziNum.hs_zdfEnumInteger, hs_sat26CMd7, hs_sat26CMd9, hs_sat26CMd8);
        };
        var hs_sat26CMd3 = new $hs.Thunk();
        hs_sat26CMd3.evaluateOnce = function () {
            var hs_sat26CMd5 = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLyv);
            var hs_sat26CMd6 = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26CMd5);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26CMd6);
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26CMd3, hs_sat26CMd4);
    };
    this.hs_integralEnumFromTo.evaluate = function (hs_zddIntegral26CLyJ, hs_eta26CLyN, hs_eta126CLyP) {
        var hs_sat26CMdb = new $hs.Thunk();
        hs_sat26CMdb.evaluateOnce = function () {
            var hs_sat26CMdf = new $hs.Thunk();
            hs_sat26CMdf.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26CLyJ, hs_eta126CLyP);
            };
            var hs_sat26CMde = new $hs.Thunk();
            hs_sat26CMde.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26CLyJ, hs_eta26CLyN);
            };
            return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziNum.hs_zdfEnumInteger, hs_sat26CMde, hs_sat26CMdf);
        };
        var hs_sat26CMda = new $hs.Thunk();
        hs_sat26CMda.evaluateOnce = function () {
            var hs_sat26CMdc = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLyJ);
            var hs_sat26CMdd = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26CMdc);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26CMdd);
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26CMda, hs_sat26CMdb);
    };
    this.hs_integralEnumFromThen.evaluate = function (hs_zddIntegral26CLyX, hs_zddBounded26CLz7, hs_eta26CLz1, hs_eta126CLyY) {
        var hs_izun226CLyZ = new $hs.Thunk();
        hs_izun226CLyZ.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26CLyX, hs_eta126CLyY);
        };
        var hs_izun126CLz2 = new $hs.Thunk();
        hs_izun126CLz2.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26CLyX, hs_eta26CLz1);
        };
        var hs_wild26CMdh = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_izun226CLyZ, hs_izun126CLz2);
        switch (hs_wild26CMdh.tag) {
        case 1:
            var hs_sat26CMdp = new $hs.Thunk();
            hs_sat26CMdp.evaluateOnce = function () {
                var hs_sat26CMds = new $hs.Thunk();
                hs_sat26CMds.evaluateOnce = function () {
                    var hs_sat26CMdt = new $hs.Thunk();
                    hs_sat26CMdt.evaluateOnce = function () {
                        var hs_sat26CMdu = new $hs.Thunk();
                        hs_sat26CMdu.evaluateOnce = function () {
                            return $hs.modules.GHCziEnum.hs_minBound.hscall(hs_zddBounded26CLz7);
                        };
                        return $hs.modules.GHCziBase.hs_asTypeOf.hscall(hs_sat26CMdu, hs_eta26CLz1);
                    };
                    return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26CLyX, hs_sat26CMdt);
                };
                return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziNum.hs_zdfEnumInteger, hs_izun126CLz2, hs_izun226CLyZ, hs_sat26CMds);
            };
            var hs_sat26CMdo = new $hs.Thunk();
            hs_sat26CMdo.evaluateOnce = function () {
                var hs_sat26CMdq = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLyX);
                var hs_sat26CMdr = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26CMdq);
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26CMdr);
            };
            return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26CMdo, hs_sat26CMdp);
        case 2:
            var hs_sat26CMdi = new $hs.Thunk();
            hs_sat26CMdi.evaluateOnce = function () {
                var hs_sat26CMdl = new $hs.Thunk();
                hs_sat26CMdl.evaluateOnce = function () {
                    var hs_sat26CMdm = new $hs.Thunk();
                    hs_sat26CMdm.evaluateOnce = function () {
                        var hs_sat26CMdn = new $hs.Thunk();
                        hs_sat26CMdn.evaluateOnce = function () {
                            return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26CLz7);
                        };
                        return $hs.modules.GHCziBase.hs_asTypeOf.hscall(hs_sat26CMdn, hs_eta26CLz1);
                    };
                    return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26CLyX, hs_sat26CMdm);
                };
                return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziNum.hs_zdfEnumInteger, hs_izun126CLz2, hs_izun226CLyZ, hs_sat26CMdl);
            };
            var hs_sat26CMdg = new $hs.Thunk();
            hs_sat26CMdg.evaluateOnce = function () {
                var hs_sat26CMdj = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLyX);
                var hs_sat26CMdk = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26CMdj);
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26CMdk);
            };
            return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26CMdg, hs_sat26CMdi);
        }
    };
    this.hs_integralEnumFrom.evaluate = function (hs_zddIntegral26CLzm, hs_zddBounded26CLzs, hs_eta26CLzq) {
        var hs_sat26CMdw = new $hs.Thunk();
        hs_sat26CMdw.evaluateOnce = function () {
            var hs_sat26CMdA = new $hs.Thunk();
            hs_sat26CMdA.evaluateOnce = function () {
                var hs_sat26CMdB = new $hs.Thunk();
                hs_sat26CMdB.evaluateOnce = function () {
                    var hs_sat26CMdC = new $hs.Thunk();
                    hs_sat26CMdC.evaluateOnce = function () {
                        return $hs.modules.GHCziEnum.hs_maxBound.hscall(hs_zddBounded26CLzs);
                    };
                    return $hs.modules.GHCziBase.hs_asTypeOf.hscall(hs_sat26CMdC, hs_eta26CLzq);
                };
                return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26CLzm, hs_sat26CMdB);
            };
            var hs_sat26CMdz = new $hs.Thunk();
            hs_sat26CMdz.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26CLzm, hs_eta26CLzq);
            };
            return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziNum.hs_zdfEnumInteger, hs_sat26CMdz, hs_sat26CMdA);
        };
        var hs_sat26CMdv = new $hs.Thunk();
        hs_sat26CMdv.evaluateOnce = function () {
            var hs_sat26CMdx = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLzm);
            var hs_sat26CMdy = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26CMdx);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26CMdy);
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26CMdv, hs_sat26CMdw);
    };
    this.hs_gcd.evaluate = function (hs_zddIntegral26CLzB, hs_eta26CLzX, hs_eta126CLzZ) {
        var hs_zddReal2126CLzC = new $hs.Thunk();
        hs_zddReal2126CLzC.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLzB);
        };
        var hs_zddNum2726CLzE = new $hs.Thunk();
        hs_zddNum2726CLzE.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLzC);
        };
        var hs_zddReal2226CLzG = new $hs.Thunk();
        hs_zddReal2226CLzG.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLzB);
        };
        var hs_a5726CLzI = new $hs.Thunk();
        hs_a5726CLzI.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2226CLzG);
        };
        var hs_zddEq726CLzK = new $hs.Thunk();
        hs_zddEq726CLzK.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_a5726CLzI);
        };
        var hs_zddNum2826CLzM = new $hs.Thunk();
        hs_zddNum2826CLzM.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226CLzG);
        };
        var hs_gcdzq26CLzV = new $hs.Func(2);
        hs_gcdzq26CLzV.evaluate = function (hs_a5826CLzU, hs_ds26CLzQ) {
            var hs_sat26CMdF = new $hs.Thunk();
            hs_sat26CMdF.evaluateOnce = function () {
                var hs_sat26CMdI = new $hs.Thunk();
                hs_sat26CMdI.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2826CLzM, hs_sat26CMdI);
            };
            var hs_wild26CMdG = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CLzK, hs_ds26CLzQ, hs_sat26CMdF);
            switch (hs_wild26CMdG.tag) {
            case 1:
                var hs_sat26CMdH = new $hs.Thunk();
                hs_sat26CMdH.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_rem.hscall(hs_zddIntegral26CLzB, hs_a5826CLzU, hs_ds26CLzQ);
                };
                return hs_gcdzq26CLzV.hscall(hs_ds26CLzQ, hs_sat26CMdH);
            case 2:
                if (hs_a5826CLzU.notEvaluated) {
                    return hs_a5826CLzU.hscall();
                } else {
                    return hs_a5826CLzU;
                }
            }
        };
        var hs_sat26CMdE = new $hs.Thunk();
        hs_sat26CMdE.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_abs.hscall(hs_zddNum2726CLzE, hs_eta126CLzZ);
        };
        var hs_sat26CMdD = new $hs.Thunk();
        hs_sat26CMdD.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_abs.hscall(hs_zddNum2726CLzE, hs_eta26CLzX);
        };
        return hs_gcdzq26CLzV.hscall(hs_sat26CMdD, hs_sat26CMdE);
    };
    this.hs_even.evaluate = function (hs_zddIntegral26CLA4, hs_eta26CLAa) {
        var hs_zddReal2126CLA5 = new $hs.Thunk();
        hs_zddReal2126CLA5.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLA4);
        };
        var hs_zddNum2726CLA7 = new $hs.Thunk();
        hs_zddNum2726CLA7.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLA5);
        };
        var hs_sat26CMdJ = new $hs.Thunk();
        hs_sat26CMdJ.evaluateOnce = function () {
            var hs_sat26CMdP = new $hs.Thunk();
            hs_sat26CMdP.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLA7, hs_sat26CMdP);
        };
        var hs_sat26CMdK = new $hs.Thunk();
        hs_sat26CMdK.evaluateOnce = function () {
            var hs_sat26CMdN = new $hs.Thunk();
            hs_sat26CMdN.evaluateOnce = function () {
                var hs_sat26CMdO = new $hs.Thunk();
                hs_sat26CMdO.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLA7, hs_sat26CMdO);
            };
            return $hs.modules.GHCziReal.hs_rem.hscall(hs_zddIntegral26CLA4, hs_eta26CLAa, hs_sat26CMdN);
        };
        var hs_sat26CMdL = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2126CLA5);
        var hs_sat26CMdM = $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_sat26CMdL);
        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26CMdM, hs_sat26CMdK, hs_sat26CMdJ);
    };
    this.hs_odd.evaluate = function (hs_zddIntegral26CLAh) {
        var hs_sat26CMdQ = new $hs.Func(1);
        hs_sat26CMdQ.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.GHCziReal.hs_even.hscall(hs_zddIntegral26CLAh, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziClasses.hs_not, hs_sat26CMdQ);
    };
    this.hs_zddmround.evaluate = function (hs_zddRealFrac326CLAn, hs_eta26CLAu, hs_eta126CLAz) {
        var hs_zddFractional726CLAo = new $hs.Thunk();
        hs_zddFractional726CLAo.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp2RealFrac.hscall(hs_zddRealFrac326CLAn);
        };
        var hs_zddNum2726CLAq = new $hs.Thunk();
        hs_zddNum2726CLAq.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional726CLAo);
        };
        var hs_zddEq726CLAs = new $hs.Thunk();
        hs_zddEq726CLAs.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum2726CLAq);
        };
        var hs_zddReal2126CLAv = new $hs.Thunk();
        hs_zddReal2126CLAv.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_eta26CLAu);
        };
        var hs_zddNum2826CLAx = new $hs.Thunk();
        hs_zddNum2826CLAx.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLAv);
        };
        var hs_ds26CLAA = new $hs.Thunk();
        hs_ds26CLAA.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_properFraction.hscall(hs_zddRealFrac326CLAn, hs_eta26CLAu, hs_eta126CLAz);
        };
        var hs_r26CLAG = new $hs.Thunk();
        hs_r26CLAG.evaluateOnce = function () {
            var hs_wild26CMel = hs_ds26CLAA;
            if (hs_ds26CLAA.notEvaluated) {
                hs_wild26CMel = hs_ds26CLAA.hscall();
            }
            var hs_r126CLAF = hs_wild26CMel.data[1];
            if (hs_r126CLAF.notEvaluated) {
                return hs_r126CLAF.hscall();
            } else {
                return hs_r126CLAF;
            }
        };
        var hs_n26CLAM = new $hs.Thunk();
        hs_n26CLAM.evaluateOnce = function () {
            var hs_wild26CMej = hs_ds26CLAA;
            if (hs_ds26CLAA.notEvaluated) {
                hs_wild26CMej = hs_ds26CLAA.hscall();
            }
            var hs_n126CLAL = hs_wild26CMej.data[0];
            if (hs_n126CLAL.notEvaluated) {
                return hs_n126CLAL.hscall();
            } else {
                return hs_n126CLAL;
            }
        };
        var hs_m26CLAX = new $hs.Thunk();
        hs_m26CLAX.evaluateOnce = function () {
            var hs_sat26CMea = new $hs.Thunk();
            hs_sat26CMea.evaluateOnce = function () {
                var hs_sat26CMeh = new $hs.Thunk();
                hs_sat26CMeh.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLAq, hs_sat26CMeh);
            };
            var hs_sat26CMeb = $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac326CLAn);
            var hs_sat26CMec = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_sat26CMeb);
            var hs_wild26CMed = $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26CMec, hs_r26CLAG, hs_sat26CMea);
            switch (hs_wild26CMed.tag) {
            case 1:
                var hs_sat26CMef = new $hs.Thunk();
                hs_sat26CMef.evaluateOnce = function () {
                    var hs_sat26CMeg = new $hs.Thunk();
                    hs_sat26CMeg.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2826CLAx, hs_sat26CMeg);
                };
                return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum2826CLAx, hs_n26CLAM, hs_sat26CMef);
            case 2:
                var hs_sat26CMe9 = new $hs.Thunk();
                hs_sat26CMe9.evaluateOnce = function () {
                    var hs_sat26CMee = new $hs.Thunk();
                    hs_sat26CMee.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2826CLAx, hs_sat26CMee);
                };
                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum2826CLAx, hs_n26CLAM, hs_sat26CMe9);
            }
        };
        var hs_ds126CLB5 = new $hs.Thunk();
        hs_ds126CLB5.evaluateOnce = function () {
            var hs_sat26CMe3 = new $hs.Thunk();
            hs_sat26CMe3.evaluateOnce = function () {
                var hs_sat26CMe5 = new $hs.Thunk();
                hs_sat26CMe5.evaluateOnce = function () {
                    var hs_sat26CMe7 = new $hs.Thunk();
                    hs_sat26CMe7.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                    };
                    var hs_sat26CMe8 = new $hs.Thunk();
                    hs_sat26CMe8.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    var hs_sat26CMe6 = new $hs.Data(1);
                    hs_sat26CMe6.data = [hs_sat26CMe8, hs_sat26CMe7];
                    return $hs.modules.GHCziReal.hs_fromRational.hscall(hs_zddFractional726CLAo, hs_sat26CMe6);
                };
                var hs_sat26CMe4 = new $hs.Thunk();
                hs_sat26CMe4.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_abs.hscall(hs_zddNum2726CLAq, hs_r26CLAG);
                };
                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum2726CLAq, hs_sat26CMe4, hs_sat26CMe5);
            };
            return $hs.modules.GHCziNum.hs_signum.hscall(hs_zddNum2726CLAq, hs_sat26CMe3);
        };
        var hs_sat26CMdR = new $hs.Thunk();
        hs_sat26CMdR.evaluateOnce = function () {
            var hs_sat26CMe1 = new $hs.Thunk();
            hs_sat26CMe1.evaluateOnce = function () {
                var hs_sat26CMe2 = new $hs.Thunk();
                hs_sat26CMe2.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLAq, hs_sat26CMe2);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum2726CLAq, hs_sat26CMe1);
        };
        var hs_wild26CMdS = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CLAs, hs_ds126CLB5, hs_sat26CMdR);
        switch (hs_wild26CMdS.tag) {
        case 1:
            var hs_sat26CMdT = new $hs.Thunk();
            hs_sat26CMdT.evaluateOnce = function () {
                var hs_sat26CMe0 = new $hs.Thunk();
                hs_sat26CMe0.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLAq, hs_sat26CMe0);
            };
            var hs_wild126CMdU = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CLAs, hs_ds126CLB5, hs_sat26CMdT);
            switch (hs_wild126CMdU.tag) {
            case 1:
                var hs_sat26CMdW = new $hs.Thunk();
                hs_sat26CMdW.evaluateOnce = function () {
                    var hs_sat26CMdZ = new $hs.Thunk();
                    hs_sat26CMdZ.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLAq, hs_sat26CMdZ);
                };
                var hs_wild226CMdX = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CLAs, hs_ds126CLB5, hs_sat26CMdW);
                switch (hs_wild226CMdX.tag) {
                case 1:
                    var hs_sat26CMdY = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("round default defn: Bad value\x00");
                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CMdY);
                case 2:
                    if (hs_m26CLAX.notEvaluated) {
                        return hs_m26CLAX.hscall();
                    } else {
                        return hs_m26CLAX;
                    }
                }
            case 2:
                var hs_wild226CMdV = $hs.modules.GHCziReal.hs_even.hscall(hs_eta26CLAu, hs_n26CLAM);
                switch (hs_wild226CMdV.tag) {
                case 1:
                    if (hs_m26CLAX.notEvaluated) {
                        return hs_m26CLAX.hscall();
                    } else {
                        return hs_m26CLAX;
                    }
                case 2:
                    if (hs_n26CLAM.notEvaluated) {
                        return hs_n26CLAM.hscall();
                    } else {
                        return hs_n26CLAM;
                    }
                }
            }
        case 2:
            if (hs_n26CLAM.notEvaluated) {
                return hs_n26CLAM.hscall();
            } else {
                return hs_n26CLAM;
            }
        }
    };
    this.hs_showSigned.evaluate = function (hs_zddReal2126CLBn, hs_eta26CLBu, hs_eta126CLBv, hs_eta226CLBq) {
        var hs_zddNum2726CLBo = new $hs.Thunk();
        hs_zddNum2726CLBo.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLBn);
        };
        var hs_sat26CMen = new $hs.Thunk();
        hs_sat26CMen.evaluateOnce = function () {
            var hs_sat26CMew = new $hs.Thunk();
            hs_sat26CMew.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLBo, hs_sat26CMew);
        };
        var hs_sat26CMeo = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2126CLBn);
        var hs_wild26CMep = $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26CMeo, hs_eta226CLBq, hs_sat26CMen);
        switch (hs_wild26CMep.tag) {
        case 1:
            return hs_eta26CLBu.hscall(hs_eta226CLBq);
        case 2:
            var hs_sat26CMeq = new $hs.Thunk();
            hs_sat26CMeq.evaluateOnce = function () {
                var hs_sat26CMet = new $hs.Thunk();
                hs_sat26CMet.evaluateOnce = function () {
                    var hs_sat26CMev = new $hs.Thunk();
                    hs_sat26CMev.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum2726CLBo, hs_eta226CLBq);
                    };
                    return hs_eta26CLBu.hscall(hs_sat26CMev);
                };
                var hs_sat26CMes = new $hs.Thunk();
                hs_sat26CMes.evaluateOnce = function () {
                    var hs_sat26CMeu = new $hs.Data(1);
                    hs_sat26CMeu.data = ["-"];
                    return $hs.modules.GHCziShow.hs_showChar.hscall(hs_sat26CMeu);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CMes, hs_sat26CMet);
            };
            var hs_sat26CMem = new $hs.Thunk();
            hs_sat26CMem.evaluateOnce = function () {
                var hs_sat26CMer = new $hs.Data(1);
                hs_sat26CMer.data = [6];
                return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_eta126CLBv, hs_sat26CMer);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26CMem, hs_sat26CMeq);
        }
    };
    this.hs_numericEnumFromThen.evaluate = function (hs_zddFractional726CLBH, hs_eta26CLBJ, hs_eta126CLBL) {
        var hs_zddNum2726CLBI = new $hs.Thunk();
        hs_zddNum2726CLBI.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional726CLBH);
        };
        var hs_n26CLBN = hs_eta26CLBJ;
        if (hs_eta26CLBJ.notEvaluated) {
            hs_n26CLBN = hs_eta26CLBJ.hscall();
        }
        var hs_m26CLBO = hs_eta126CLBL;
        if (hs_eta126CLBL.notEvaluated) {
            hs_m26CLBO = hs_eta126CLBL.hscall();
        }
        var hs_sat26CMex = new $hs.Thunk();
        hs_sat26CMex.evaluateOnce = function () {
            var hs_sat26CMey = new $hs.Thunk();
            hs_sat26CMey.evaluateOnce = function () {
                var hs_sat26CMez = new $hs.Thunk();
                hs_sat26CMez.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum2726CLBI, hs_m26CLBO, hs_m26CLBO);
                };
                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum2726CLBI, hs_sat26CMez, hs_n26CLBN);
            };
            return $hs.modules.GHCziReal.hs_numericEnumFromThen.hscall(hs_zddFractional726CLBH, hs_m26CLBO, hs_sat26CMey);
        };
        var $res = new $hs.Data(2);
        $res.data = [hs_n26CLBN, hs_sat26CMex];
        return $res;
    };
    this.hs_numericEnumFromThenTo.evaluate = function (hs_zddOrd1726CLC7, hs_zddFractional726CLBY, hs_eta26CLC2, hs_eta126CLC1, hs_eta226CLCa) {
        var hs_zddNum2726CLBZ = new $hs.Thunk();
        hs_zddNum2726CLBZ.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional726CLBY);
        };
        var hs_mid26CLC6 = new $hs.Thunk();
        hs_mid26CLC6.evaluateOnce = function () {
            var hs_sat26CMeG = new $hs.Thunk();
            hs_sat26CMeG.evaluateOnce = function () {
                var hs_sat26CMeH = new $hs.Thunk();
                hs_sat26CMeH.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLBZ, hs_sat26CMeH);
            };
            var hs_sat26CMeF = new $hs.Thunk();
            hs_sat26CMeF.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum2726CLBZ, hs_eta126CLC1, hs_eta26CLC2);
            };
            return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional726CLBY, hs_sat26CMeF, hs_sat26CMeG);
        };
        var hs_sat26CMeB = new $hs.Thunk();
        hs_sat26CMeB.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_numericEnumFromThen.hscall(hs_zddFractional726CLBY, hs_eta26CLC2, hs_eta126CLC1);
        };
        var hs_sat26CMeA = new $hs.Thunk();
        hs_sat26CMeA.evaluateOnce = function () {
            var hs_wild26CMeD = $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd1726CLC7, hs_eta126CLC1, hs_eta26CLC2);
            switch (hs_wild26CMeD.tag) {
            case 1:
                var hs_ds26CLCb = new $hs.Thunk();
                hs_ds26CLCb.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum2726CLBZ, hs_eta226CLCa, hs_mid26CLC6);
                };
                var hs_sat26CMeE = new $hs.Func(1);
                hs_sat26CMeE.evaluate = function (hs_ds126CLCd) {
                    return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd1726CLC7, hs_ds126CLCd, hs_ds26CLCb);
                };
                if (hs_sat26CMeE.notEvaluated) {
                    return hs_sat26CMeE.hscall();
                } else {
                    return hs_sat26CMeE;
                }
            case 2:
                var hs_ds26CLCg = new $hs.Thunk();
                hs_ds26CLCg.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum2726CLBZ, hs_eta226CLCa, hs_mid26CLC6);
                };
                var hs_sat26CMeC = new $hs.Func(1);
                hs_sat26CMeC.evaluate = function (hs_ds126CLCi) {
                    return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1726CLC7, hs_ds126CLCi, hs_ds26CLCg);
                };
                if (hs_sat26CMeC.notEvaluated) {
                    return hs_sat26CMeC.hscall();
                } else {
                    return hs_sat26CMeC;
                }
            }
        };
        return $hs.modules.GHCziList.hs_takeWhile.hscall(hs_sat26CMeA, hs_sat26CMeB);
    };
    this.hs_numericEnumFrom.evaluate = function (hs_zddFractional726CLCp, hs_eta26CLCr) {
        var hs_zddNum2726CLCq = new $hs.Thunk();
        hs_zddNum2726CLCq.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional726CLCp);
        };
        var hs_n26CLCt = hs_eta26CLCr;
        if (hs_eta26CLCr.notEvaluated) {
            hs_n26CLCt = hs_eta26CLCr.hscall();
        }
        var hs_sat26CMeI = new $hs.Thunk();
        hs_sat26CMeI.evaluateOnce = function () {
            var hs_sat26CMeJ = new $hs.Thunk();
            hs_sat26CMeJ.evaluateOnce = function () {
                var hs_sat26CMeK = new $hs.Thunk();
                hs_sat26CMeK.evaluateOnce = function () {
                    var hs_sat26CMeL = new $hs.Thunk();
                    hs_sat26CMeL.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLCq, hs_sat26CMeL);
                };
                return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum2726CLCq, hs_n26CLCt, hs_sat26CMeK);
            };
            return $hs.modules.GHCziReal.hs_numericEnumFrom.hscall(hs_zddFractional726CLCp, hs_sat26CMeJ);
        };
        var $res = new $hs.Data(2);
        $res.data = [hs_n26CLCt, hs_sat26CMeI];
        return $res;
    };
    this.hs_numericEnumFromTo.evaluate = function (hs_zddOrd1726CLCO, hs_zddFractional726CLCD, hs_eta26CLCR, hs_eta126CLCG) {
        var hs_zddNum2726CLCE = new $hs.Thunk();
        hs_zddNum2726CLCE.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional726CLCD);
        };
        var hs_sat26CMeN = new $hs.Thunk();
        hs_sat26CMeN.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_numericEnumFrom.hscall(hs_zddFractional726CLCD, hs_eta26CLCR);
        };
        var hs_ds26CLCM = new $hs.Thunk();
        hs_ds26CLCM.evaluateOnce = function () {
            var hs_sat26CMeO = new $hs.Thunk();
            hs_sat26CMeO.evaluateOnce = function () {
                var hs_sat26CMeQ = new $hs.Thunk();
                hs_sat26CMeQ.evaluateOnce = function () {
                    var hs_sat26CMeS = new $hs.Thunk();
                    hs_sat26CMeS.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLCE, hs_sat26CMeS);
                };
                var hs_sat26CMeP = new $hs.Thunk();
                hs_sat26CMeP.evaluateOnce = function () {
                    var hs_sat26CMeR = new $hs.Thunk();
                    hs_sat26CMeR.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLCE, hs_sat26CMeR);
                };
                return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional726CLCD, hs_sat26CMeP, hs_sat26CMeQ);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum2726CLCE, hs_eta126CLCG, hs_sat26CMeO);
        };
        var hs_sat26CMeM = new $hs.Func(1);
        hs_sat26CMeM.evaluate = function (hs_ds126CLCP) {
            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd1726CLCO, hs_ds126CLCP, hs_ds26CLCM);
        };
        return $hs.modules.GHCziList.hs_takeWhile.hscall(hs_sat26CMeM, hs_sat26CMeN);
    };
    this.hs_denominator.evaluate = function (hs_zddIntegral26CLD0, hs_ds26CLCV) {
        var hs_wild26CMeU = hs_ds26CLCV;
        if (hs_ds26CLCV.notEvaluated) {
            hs_wild26CMeU = hs_ds26CLCV.hscall();
        }
        var hs_y26CLCZ = hs_wild26CMeU.data[1];
        if (hs_y26CLCZ.notEvaluated) {
            return hs_y26CLCZ.hscall();
        } else {
            return hs_y26CLCZ;
        }
    };
    this.hs_numerator.evaluate = function (hs_zddIntegral26CLD8, hs_ds26CLD3) {
        var hs_wild26CMeW = hs_ds26CLD3;
        if (hs_ds26CLD3.notEvaluated) {
            hs_wild26CMeW = hs_ds26CLD3.hscall();
        }
        var hs_x26CLD7 = hs_wild26CMeW.data[0];
        if (hs_x26CLD7.notEvaluated) {
            return hs_x26CLD7.hscall();
        } else {
            return hs_x26CLD7;
        }
    };
    this.hs_notANumber.evaluateOnce = function () {
        var hs_tpl26CLDb = $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        var hs_tpl126CLDc = $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CLDb, hs_tpl126CLDc];
        return $res;
    };
    this.hs_infinity.evaluateOnce = function () {
        var hs_tpl26CLDf = $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        var hs_tpl126CLDg = $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CLDf, hs_tpl126CLDg];
        return $res;
    };
    this.hs_ratioPrec.data = [7];
    hs_zdctoInteger25un71.evaluate = function (hs_ds26CLDj) {
        var hs_wild26CMeX = hs_ds26CLDj;
        if (hs_ds26CLDj.notEvaluated) {
            hs_wild26CMeX = hs_ds26CLDj.hscall();
        }
        var hs_i26CLDm = hs_wild26CMeX.data[0];
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_i26CLDm);
    };
    hs_zdcdivMod25un77.evaluate = function (hs_a5726CLDw, hs_b26CLDq) {
        var hs_sat26CMeY = new $hs.Data(1);
        hs_sat26CMeY.data = [0];
        var hs_wild26CMeZ = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_b26CLDq, hs_sat26CMeY);
        switch (hs_wild26CMeZ.tag) {
        case 1:
            var hs_sat26CMf1 = new $hs.Thunk();
            hs_sat26CMf1.evaluateOnce = function () {
                var hs_sat26CMf6 = new $hs.Thunk();
                hs_sat26CMf6.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_a5726CLDw, hs_sat26CMf6);
            };
            var hs_sat26CMf2 = new $hs.Thunk();
            hs_sat26CMf2.evaluateOnce = function () {
                var hs_sat26CMf4 = new $hs.Thunk();
                hs_sat26CMf4.evaluateOnce = function () {
                    var hs_sat26CMf5 = new $hs.Data(1);
                    hs_sat26CMf5.data = [1];
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26CMf5);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_b26CLDq, hs_sat26CMf4);
            };
            var hs_wild126CMf3 = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26CMf2, hs_sat26CMf1);
            switch (hs_wild126CMf3.tag) {
            case 1:
                return $hs.modules.GHCziNum.hs_divModInt.hscall(hs_a5726CLDw, hs_b26CLDq);
            case 2:
                var hs_sat26CMf0 = new $hs.Data(1);
                hs_sat26CMf0.data = [0];
                var $res = new $hs.Data(1);
                $res.data = [$hs.modules.GHCziErr.hs_overflowError, hs_sat26CMf0];
                return $res;
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcquotRem25un7l.evaluate = function (hs_a5726CLDK, hs_b26CLDE) {
        var hs_sat26CMf7 = new $hs.Data(1);
        hs_sat26CMf7.data = [0];
        var hs_wild26CMf8 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_b26CLDE, hs_sat26CMf7);
        switch (hs_wild26CMf8.tag) {
        case 1:
            var hs_sat26CMfa = new $hs.Thunk();
            hs_sat26CMfa.evaluateOnce = function () {
                var hs_sat26CMff = new $hs.Thunk();
                hs_sat26CMff.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_a5726CLDK, hs_sat26CMff);
            };
            var hs_sat26CMfb = new $hs.Thunk();
            hs_sat26CMfb.evaluateOnce = function () {
                var hs_sat26CMfd = new $hs.Thunk();
                hs_sat26CMfd.evaluateOnce = function () {
                    var hs_sat26CMfe = new $hs.Data(1);
                    hs_sat26CMfe.data = [1];
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26CMfe);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_b26CLDE, hs_sat26CMfd);
            };
            var hs_wild126CMfc = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26CMfb, hs_sat26CMfa);
            switch (hs_wild126CMfc.tag) {
            case 1:
                return $hs.modules.GHCziNum.hs_quotRemInt.hscall(hs_a5726CLDK, hs_b26CLDE);
            case 2:
                var hs_sat26CMf9 = new $hs.Data(1);
                hs_sat26CMf9.data = [0];
                var $res = new $hs.Data(1);
                $res.data = [$hs.modules.GHCziErr.hs_overflowError, hs_sat26CMf9];
                return $res;
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcmod25un7z.evaluate = function (hs_a5726CLDY, hs_b26CLDS) {
        var hs_sat26CMfg = new $hs.Data(1);
        hs_sat26CMfg.data = [0];
        var hs_wild26CMfh = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_b26CLDS, hs_sat26CMfg);
        switch (hs_wild26CMfh.tag) {
        case 1:
            var hs_sat26CMfi = new $hs.Thunk();
            hs_sat26CMfi.evaluateOnce = function () {
                var hs_sat26CMfk = new $hs.Data(1);
                hs_sat26CMfk.data = [1];
                return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26CMfk);
            };
            var hs_wild126CMfj = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_b26CLDS, hs_sat26CMfi);
            switch (hs_wild126CMfj.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_modInt.hscall(hs_a5726CLDY, hs_b26CLDS);
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [0];
                return $res;
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcdiv25un7J.evaluate = function (hs_a5726CLE8, hs_b26CLE2) {
        var hs_sat26CMfl = new $hs.Data(1);
        hs_sat26CMfl.data = [0];
        var hs_wild26CMfm = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_b26CLE2, hs_sat26CMfl);
        switch (hs_wild26CMfm.tag) {
        case 1:
            var hs_sat26CMfn = new $hs.Thunk();
            hs_sat26CMfn.evaluateOnce = function () {
                var hs_sat26CMfs = new $hs.Thunk();
                hs_sat26CMfs.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_a5726CLE8, hs_sat26CMfs);
            };
            var hs_sat26CMfo = new $hs.Thunk();
            hs_sat26CMfo.evaluateOnce = function () {
                var hs_sat26CMfq = new $hs.Thunk();
                hs_sat26CMfq.evaluateOnce = function () {
                    var hs_sat26CMfr = new $hs.Data(1);
                    hs_sat26CMfr.data = [1];
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26CMfr);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_b26CLE2, hs_sat26CMfq);
            };
            var hs_wild126CMfp = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26CMfo, hs_sat26CMfn);
            switch (hs_wild126CMfp.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_divInt.hscall(hs_a5726CLE8, hs_b26CLE2);
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
    hs_zdcrem25un7W.evaluate = function (hs_a5726CLEl, hs_b26CLEf) {
        var hs_sat26CMft = new $hs.Data(1);
        hs_sat26CMft.data = [0];
        var hs_wild26CMfu = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_b26CLEf, hs_sat26CMft);
        switch (hs_wild26CMfu.tag) {
        case 1:
            var hs_sat26CMfv = new $hs.Thunk();
            hs_sat26CMfv.evaluateOnce = function () {
                var hs_sat26CMfx = new $hs.Data(1);
                hs_sat26CMfx.data = [1];
                return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26CMfx);
            };
            var hs_wild126CMfw = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_b26CLEf, hs_sat26CMfv);
            switch (hs_wild126CMfw.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_remInt.hscall(hs_a5726CLEl, hs_b26CLEf);
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [0];
                return $res;
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcquot25un86.evaluate = function (hs_a5726CLEv, hs_b26CLEp) {
        var hs_sat26CMfy = new $hs.Data(1);
        hs_sat26CMfy.data = [0];
        var hs_wild26CMfz = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_b26CLEp, hs_sat26CMfy);
        switch (hs_wild26CMfz.tag) {
        case 1:
            var hs_sat26CMfA = new $hs.Thunk();
            hs_sat26CMfA.evaluateOnce = function () {
                var hs_sat26CMfF = new $hs.Thunk();
                hs_sat26CMfF.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_a5726CLEv, hs_sat26CMfF);
            };
            var hs_sat26CMfB = new $hs.Thunk();
            hs_sat26CMfB.evaluateOnce = function () {
                var hs_sat26CMfD = new $hs.Thunk();
                hs_sat26CMfD.evaluateOnce = function () {
                    var hs_sat26CMfE = new $hs.Data(1);
                    hs_sat26CMfE.data = [1];
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26CMfE);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_b26CLEp, hs_sat26CMfD);
            };
            var hs_wild126CMfC = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26CMfB, hs_sat26CMfA);
            switch (hs_wild126CMfC.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_quotInt.hscall(hs_a5726CLEv, hs_b26CLEp);
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
    hs_zdctoInteger125un8j.evaluate = function (hs_n26CLEB) {
        if (hs_n26CLEB.notEvaluated) {
            return hs_n26CLEB.hscall();
        } else {
            return hs_n26CLEB;
        }
    };
    hs_zdcdivMod125un8m.evaluate = function (hs_ds26CLEI, hs_ds126CLEF) {
        var hs_sat26CMfG = new $hs.Thunk();
        hs_sat26CMfG.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_wild26CMfH = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_ds126CLEF, hs_sat26CMfG);
        switch (hs_wild26CMfH.tag) {
        case 1:
            var hs_wild126CMfI = $hs.modules.GHCziInteger.hs_divModInteger.hscall(hs_ds26CLEI, hs_ds126CLEF);
            var hs_x26CLEM = hs_wild126CMfI[0];
            var hs_y26CLEN = hs_wild126CMfI[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_x26CLEM, hs_y26CLEN];
            return $res;
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcquotRem125un8y.evaluate = function (hs_ds26CLEU, hs_ds126CLER) {
        var hs_sat26CMfJ = new $hs.Thunk();
        hs_sat26CMfJ.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_wild26CMfK = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_ds126CLER, hs_sat26CMfJ);
        switch (hs_wild26CMfK.tag) {
        case 1:
            var hs_wild126CMfL = $hs.modules.GHCziInteger.hs_quotRemInteger.hscall(hs_ds26CLEU, hs_ds126CLER);
            var hs_q26CLEY = hs_wild126CMfL[0];
            var hs_r26CLEZ = hs_wild126CMfL[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_q26CLEY, hs_r26CLEZ];
            return $res;
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcrem125un8K.evaluate = function (hs_ds26CLF6, hs_ds126CLF3) {
        var hs_sat26CMfM = new $hs.Thunk();
        hs_sat26CMfM.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_wild26CMfN = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_ds126CLF3, hs_sat26CMfM);
        switch (hs_wild26CMfN.tag) {
        case 1:
            return $hs.modules.GHCziInteger.hs_remInteger.hscall(hs_ds26CLF6, hs_ds126CLF3);
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcquot125un8R.evaluate = function (hs_ds26CLFd, hs_ds126CLFa) {
        var hs_sat26CMfO = new $hs.Thunk();
        hs_sat26CMfO.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_wild26CMfP = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_ds126CLFa, hs_sat26CMfO);
        switch (hs_wild26CMfP.tag) {
        case 1:
            return $hs.modules.GHCziInteger.hs_quotInteger.hscall(hs_ds26CLFd, hs_ds126CLFa);
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdczeze25un8Y.evaluate = function (hs_zddEq726CLFq, hs_ds26CLFi, hs_ds126CLFm) {
        var hs_wild26CMfS = hs_ds26CLFi;
        if (hs_ds26CLFi.notEvaluated) {
            hs_wild26CMfS = hs_ds26CLFi.hscall();
        }
        var hs_a5726CLFr = hs_wild26CMfS.data[0];
        var hs_a5826CLFu = hs_wild26CMfS.data[1];
        var hs_wild126CMfR = hs_ds126CLFm;
        if (hs_ds126CLFm.notEvaluated) {
            hs_wild126CMfR = hs_ds126CLFm.hscall();
        }
        var hs_b126CLFs = hs_wild126CMfR.data[0];
        var hs_b226CLFv = hs_wild126CMfR.data[1];
        var hs_sat26CMfT = new $hs.Thunk();
        hs_sat26CMfT.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CLFq, hs_a5826CLFu, hs_b226CLFv);
        };
        var hs_sat26CMfQ = new $hs.Thunk();
        hs_sat26CMfQ.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CLFq, hs_a5726CLFr, hs_b126CLFs);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26CMfQ, hs_sat26CMfT);
    };
    this.hs_zdfEqRatio.evaluate = function (hs_zddEq726CLFz) {
        var hs_sat26CMfV = new $hs.Thunk();
        hs_sat26CMfV.evaluateOnce = function () {
            return hs_zdczsze25un9h.hscall(hs_zddEq726CLFz);
        };
        var hs_sat26CMfU = new $hs.Func(2);
        hs_sat26CMfU.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze25un8Y.hscall(hs_zddEq726CLFz, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CMfU, hs_sat26CMfV];
        return $res;
    };
    hs_zdczsze25un9h.evaluate = function (hs_zddEq726CLFE) {
        var hs_zddEq826CLFF = new $hs.Thunk();
        hs_zddEq826CLFF.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall(hs_zddEq726CLFE);
        };
        var hs_sat26CMfW = new $hs.Func(2);
        hs_sat26CMfW.evaluate = function (hs_a5726CLFI, hs_b26CLFJ) {
            var hs_sat26CMfX = new $hs.Thunk();
            hs_sat26CMfX.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826CLFF, hs_a5726CLFI, hs_b26CLFJ);
            };
            return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26CMfX);
        };
        if (hs_sat26CMfW.notEvaluated) {
            return hs_sat26CMfW.hscall();
        } else {
            return hs_sat26CMfW;
        }
    };
    hs_zdczdp1Num25un9w.evaluate = function (hs_zddIntegral26CLFO) {
        var hs_sat26CMfY = new $hs.Thunk();
        hs_sat26CMfY.evaluateOnce = function () {
            var hs_sat26CMfZ = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLFO);
            var hs_sat26CMg0 = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_sat26CMfZ);
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_sat26CMg0);
        };
        return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall(hs_sat26CMfY);
    };
    hs_zdczdp1Ord25un9C.evaluate = function (hs_zddIntegral26CLFU) {
        var hs_sat26CMg1 = new $hs.Thunk();
        hs_sat26CMg1.evaluateOnce = function () {
            var hs_sat26CMg2 = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLFU);
            var hs_sat26CMg3 = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_sat26CMg2);
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_sat26CMg3);
        };
        return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall(hs_sat26CMg1);
    };
    hs_sat26CMg4.data = [1];
    this.hs_ratioPrec1.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, $hs.modules.GHCziReal.hs_ratioPrec, hs_sat26CMg4);
    };
    this.hs_reduce.evaluate = function (hs_zddIntegral26CLGf, hs_eta26CLGp, hs_eta126CLGj) {
        var hs_zddReal2126CLGg = new $hs.Thunk();
        hs_zddReal2126CLGg.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLGf);
        };
        var hs_sat26CMg5 = new $hs.Thunk();
        hs_sat26CMg5.evaluateOnce = function () {
            var hs_sat26CMga = new $hs.Thunk();
            hs_sat26CMga.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            var hs_sat26CMgb = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLGg);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26CMgb, hs_sat26CMga);
        };
        var hs_sat26CMg6 = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2126CLGg);
        var hs_sat26CMg7 = $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_sat26CMg6);
        var hs_wild26CMg8 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26CMg7, hs_eta126CLGj, hs_sat26CMg5);
        switch (hs_wild26CMg8.tag) {
        case 1:
            var hs_d26CLGq = new $hs.Thunk();
            hs_d26CLGq.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_gcd.hscall(hs_zddIntegral26CLGf, hs_eta26CLGp, hs_eta126CLGj);
            };
            var hs_tpl26CLGt = $hs.modules.GHCziReal.hs_quot.hscall(hs_zddIntegral26CLGf, hs_eta26CLGp, hs_d26CLGq);
            var hs_tpl126CLGu = $hs.modules.GHCziReal.hs_quot.hscall(hs_zddIntegral26CLGf, hs_eta126CLGj, hs_d26CLGq);
            var $res = new $hs.Data(1);
            $res.data = [hs_tpl26CLGt, hs_tpl126CLGu];
            return $res;
        case 2:
            var hs_sat26CMg9 = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Ratio.%: zero denominator\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CMg9);
        }
    };
    this.hs_zv.evaluate = function (hs_zddIntegral26CLGA, hs_eta26CLGE, hs_eta126CLGF) {
        var hs_zddReal2126CLGB = new $hs.Thunk();
        hs_zddReal2126CLGB.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLGA);
        };
        var hs_zddNum2726CLGD = new $hs.Thunk();
        hs_zddNum2726CLGD.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLGB);
        };
        var hs_sat26CMgd = new $hs.Thunk();
        hs_sat26CMgd.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_abs.hscall(hs_zddNum2726CLGD, hs_eta126CLGF);
        };
        var hs_sat26CMgc = new $hs.Thunk();
        hs_sat26CMgc.evaluateOnce = function () {
            var hs_sat26CMge = new $hs.Thunk();
            hs_sat26CMge.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_signum.hscall(hs_zddNum2726CLGD, hs_eta126CLGF);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum2726CLGD, hs_eta26CLGE, hs_sat26CMge);
        };
        return $hs.modules.GHCziReal.hs_reduce.hscall(hs_zddIntegral26CLGA, hs_sat26CMgc, hs_sat26CMgd);
    };
    this.hs_zdfRealInteger.data = [$hs.modules.GHCziNum.hs_zdfNumInteger, $hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_zdctoRational25un9M];
    hs_zdczdp1Integral25un9J.evaluateOnce = function () {
        if ($hs.modules.GHCziReal.hs_zdfRealInteger.notEvaluated) {
            return $hs.modules.GHCziReal.hs_zdfRealInteger.hscall();
        } else {
            return $hs.modules.GHCziReal.hs_zdfRealInteger;
        }
    };
    this.hs_zdfIntegralInteger.data = [$hs.modules.GHCziReal.hs_zdfRealInteger, $hs.modules.GHCziNum.hs_zdfEnumInteger, hs_zdcquot125un8R, hs_zdcrem125un8K, hs_zdcdiv125un9L, hs_zdcmod125un9K, hs_zdcquotRem125un8y, hs_zdcdivMod125un8m, hs_zdctoInteger125un8j];
    hs_zdcmod125un9K.evaluate = function (hs_eta26CLGL, hs_eta126CLGM) {
        var hs_wild26CMgh = $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta26CLGL, hs_eta126CLGM);
        var hs_r26CLGQ = hs_wild26CMgh.data[1];
        if (hs_r26CLGQ.notEvaluated) {
            return hs_r26CLGQ.hscall();
        } else {
            return hs_r26CLGQ;
        }
    };
    hs_zdcdiv125un9L.evaluate = function (hs_eta26CLGT, hs_eta126CLGU) {
        var hs_wild26CMgj = $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta26CLGT, hs_eta126CLGU);
        var hs_q26CLGY = hs_wild26CMgj.data[0];
        if (hs_q26CLGY.notEvaluated) {
            return hs_q26CLGY.hscall();
        } else {
            return hs_q26CLGY;
        }
    };
    hs_zdctoRational25un9M.evaluate = function (hs_x26CLH0) {
        var hs_sat26CMgf = new $hs.Thunk();
        hs_sat26CMgf.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_x26CLH0, hs_sat26CMgf);
    };
    hs_zddReal25un9N.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a25un9O.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal25un9N);
    };
    hs_zddReal125un9P.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum25un9Q.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal125un9P);
    };
    hs_zv125un9R.evaluate = function (hs_x26CLH4, hs_y26CLH5) {
        var hs_sat26CMgl = new $hs.Thunk();
        hs_sat26CMgl.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_abs.hscall(hs_zddNum25un9Q, hs_y26CLH5);
        };
        var hs_sat26CMgk = new $hs.Thunk();
        hs_sat26CMgk.evaluateOnce = function () {
            var hs_sat26CMgm = new $hs.Thunk();
            hs_sat26CMgm.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_signum.hscall(hs_zddNum25un9Q, hs_y26CLH5);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum25un9Q, hs_x26CLH4, hs_sat26CMgm);
        };
        return $hs.modules.GHCziReal.hs_reduce.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26CMgk, hs_sat26CMgl);
    };
    hs_zddEq25un9S.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_a25un9O);
    };
    hs_zddNum125un9T.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal25un9N);
    };
    hs_reduce125un9U.evaluate = function (hs_ds26CLHg, hs_ds126CLHb) {
        var hs_sat26CMgn = new $hs.Thunk();
        hs_sat26CMgn.evaluateOnce = function () {
            var hs_sat26CMgq = new $hs.Thunk();
            hs_sat26CMgq.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum125un9T, hs_sat26CMgq);
        };
        var hs_wild26CMgo = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq25un9S, hs_ds126CLHb, hs_sat26CMgn);
        switch (hs_wild26CMgo.tag) {
        case 1:
            var hs_d26CLHh = new $hs.Thunk();
            hs_d26CLHh.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_gcd.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_ds26CLHg, hs_ds126CLHb);
            };
            var hs_tpl26CLHk = $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_ds26CLHg, hs_d26CLHh);
            var hs_tpl126CLHl = $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_ds126CLHb, hs_d26CLHh);
            var $res = new $hs.Data(1);
            $res.data = [hs_tpl26CLHk, hs_tpl126CLHl];
            return $res;
        case 2:
            var hs_sat26CMgp = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Ratio.%: zero denominator\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CMgp);
        }
    };
    hs_zddReal225unb7.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum225unb8.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal225unb7);
    };
    hs_zddShow25unb9.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zdp2Num.hscall(hs_zddNum225unb8);
    };
    hs_zdcshowsPrec25unba.evaluate = function (hs_p26CLHx, hs_ds26CLHt) {
        var hs_wild26CMgs = hs_ds26CLHt;
        if (hs_ds26CLHt.notEvaluated) {
            hs_wild26CMgs = hs_ds26CLHt.hscall();
        }
        var hs_x26CLHA = hs_wild26CMgs.data[0];
        var hs_y26CLHE = hs_wild26CMgs.data[1];
        var hs_sat26CMgt = new $hs.Thunk();
        hs_sat26CMgt.evaluateOnce = function () {
            var hs_sat26CMgw = new $hs.Thunk();
            hs_sat26CMgw.evaluateOnce = function () {
                var hs_sat26CMgy = new $hs.Thunk();
                hs_sat26CMgy.evaluateOnce = function () {
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow25unb9, $hs.modules.GHCziReal.hs_ratioPrec1, hs_y26CLHE);
                };
                var hs_sat26CMgx = new $hs.Thunk();
                hs_sat26CMgx.evaluateOnce = function () {
                    var hs_sat26CMgz = new $hs.Thunk();
                    hs_sat26CMgz.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(" % \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26CMgz);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CMgx, hs_sat26CMgy);
            };
            var hs_sat26CMgv = new $hs.Thunk();
            hs_sat26CMgv.evaluateOnce = function () {
                return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow25unb9, $hs.modules.GHCziReal.hs_ratioPrec1, hs_x26CLHA);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CMgv, hs_sat26CMgw);
        };
        var hs_sat26CMgr = new $hs.Thunk();
        hs_sat26CMgr.evaluateOnce = function () {
            var hs_sat26CMgu = new $hs.Thunk();
            hs_sat26CMgu.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_p26CLHx, $hs.modules.GHCziReal.hs_ratioPrec);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26CMgu);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CMgr, hs_sat26CMgt);
    };
    hs_zdcshowsPrec125unbs.evaluate = function (hs_zddIntegral26CLHN, hs_eta26CLHX, hs_eta126CLHT) {
        var hs_zddReal2126CLHO = new $hs.Thunk();
        hs_zddReal2126CLHO.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLHN);
        };
        var hs_zddNum2726CLHQ = new $hs.Thunk();
        hs_zddNum2726CLHQ.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLHO);
        };
        var hs_zddShow326CLHS = new $hs.Thunk();
        hs_zddShow326CLHS.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp2Num.hscall(hs_zddNum2726CLHQ);
        };
        var hs_wild26CMgB = hs_eta126CLHT;
        if (hs_eta126CLHT.notEvaluated) {
            hs_wild26CMgB = hs_eta126CLHT.hscall();
        }
        var hs_x26CLI0 = hs_wild26CMgB.data[0];
        var hs_y26CLI4 = hs_wild26CMgB.data[1];
        var hs_sat26CMgC = new $hs.Thunk();
        hs_sat26CMgC.evaluateOnce = function () {
            var hs_sat26CMgF = new $hs.Thunk();
            hs_sat26CMgF.evaluateOnce = function () {
                var hs_sat26CMgH = new $hs.Thunk();
                hs_sat26CMgH.evaluateOnce = function () {
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326CLHS, $hs.modules.GHCziReal.hs_ratioPrec1, hs_y26CLI4);
                };
                var hs_sat26CMgG = new $hs.Thunk();
                hs_sat26CMgG.evaluateOnce = function () {
                    var hs_sat26CMgI = new $hs.Thunk();
                    hs_sat26CMgI.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(" % \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26CMgI);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CMgG, hs_sat26CMgH);
            };
            var hs_sat26CMgE = new $hs.Thunk();
            hs_sat26CMgE.evaluateOnce = function () {
                return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326CLHS, $hs.modules.GHCziReal.hs_ratioPrec1, hs_x26CLI0);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CMgE, hs_sat26CMgF);
        };
        var hs_sat26CMgA = new $hs.Thunk();
        hs_sat26CMgA.evaluateOnce = function () {
            var hs_sat26CMgD = new $hs.Thunk();
            hs_sat26CMgD.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_eta26CLHX, $hs.modules.GHCziReal.hs_ratioPrec);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26CMgD);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CMgA, hs_sat26CMgC);
    };
    hs_a125unbS.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_zdcshowsPrec125unbs.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfShowRatio.evaluate = function (hs_zddIntegral26CLIj) {
        var hs_sat26CMgK = new $hs.Thunk();
        hs_sat26CMgK.evaluateOnce = function () {
            return hs_zdcshowList25unbT.hscall(hs_zddIntegral26CLIj);
        };
        var hs_sat26CMgL = new $hs.Thunk();
        hs_sat26CMgL.evaluateOnce = function () {
            return hs_zdcshow25unbU.hscall(hs_zddIntegral26CLIj);
        };
        var hs_sat26CMgJ = new $hs.Func(2);
        hs_sat26CMgJ.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec125unbs.hscall(hs_zddIntegral26CLIj, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CMgJ, hs_sat26CMgL, hs_sat26CMgK];
        return $res;
    };
    hs_zdcshowList25unbT.evaluate = function (hs_zddIntegral26CLIo) {
        var hs_sat26CMgM = new $hs.Thunk();
        hs_sat26CMgM.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall(hs_zddIntegral26CLIo);
        };
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall(hs_sat26CMgM);
    };
    hs_zdcshow25unbU.evaluate = function (hs_zddIntegral26CLIr) {
        var hs_sat26CMgN = new $hs.Thunk();
        hs_sat26CMgN.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall(hs_zddIntegral26CLIr);
        };
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_sat26CMgN);
    };
    hs_zddShow125unbV.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdcshowList125unbW.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall(hs_zddShow125unbV);
    };
    hs_a225unbX.evaluateOnce = function () {
        return hs_zdcshowList25unbT.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a325unbY.evaluateOnce = function () {
        return hs_zdcshow25unbU.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdfShowRatio125unbZ.data = [hs_a125unbS, hs_a325unbY, hs_a225unbX];
    hs_zddShow225unc0.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdcshow125unc1.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_zddShow225unc0);
    };
    hs_zdcproperFraction25uncd.evaluate = function (hs_zddIntegral26CLIE, hs_eta26CLIw) {
        var hs_wild26CMgP = hs_eta26CLIw;
        if (hs_eta26CLIw.notEvaluated) {
            hs_wild26CMgP = hs_eta26CLIw.hscall();
        }
        var hs_x26CLIB = hs_wild26CMgP.data[0];
        var hs_y26CLIC = hs_wild26CMgP.data[1];
        var hs_ds26CLID = new $hs.Thunk();
        hs_ds26CLID.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_x26CLIB, hs_y26CLIC);
        };
        var hs_sat26CMgQ = new $hs.Thunk();
        hs_sat26CMgQ.evaluateOnce = function () {
            var hs_wild126CMgX = hs_ds26CLID;
            if (hs_ds26CLID.notEvaluated) {
                hs_wild126CMgX = hs_ds26CLID.hscall();
            }
            var hs_r26CLIR = hs_wild126CMgX.data[1];
            var hs_tpl26CLIT = hs_r26CLIR;
            if (hs_r26CLIR.notEvaluated) {
                hs_tpl26CLIT = hs_r26CLIR.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [hs_tpl26CLIT, hs_y26CLIC];
            return $res;
        };
        var hs_sat26CMgO = new $hs.Thunk();
        hs_sat26CMgO.evaluateOnce = function () {
            var hs_sat26CMgR = new $hs.Thunk();
            hs_sat26CMgR.evaluateOnce = function () {
                var hs_sat26CMgU = new $hs.Thunk();
                hs_sat26CMgU.evaluateOnce = function () {
                    var hs_wild126CMgW = hs_ds26CLID;
                    if (hs_ds26CLID.notEvaluated) {
                        hs_wild126CMgW = hs_ds26CLID.hscall();
                    }
                    var hs_q26CLIK = hs_wild126CMgW.data[0];
                    if (hs_q26CLIK.notEvaluated) {
                        return hs_q26CLIK.hscall();
                    } else {
                        return hs_q26CLIK;
                    }
                };
                return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26CMgU);
            };
            var hs_sat26CMgS = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLIE);
            var hs_sat26CMgT = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26CMgS);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26CMgT, hs_sat26CMgR);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CMgO, hs_sat26CMgQ];
        return $res;
    };
    hs_zdcproperFraction125uncF.evaluate = function (hs_zddIntegral26CLJ4, hs_zddIntegral126CLJ8, hs_eta26CLIZ) {
        var hs_wild26CMh0 = hs_eta26CLIZ;
        if (hs_eta26CLIZ.notEvaluated) {
            hs_wild26CMh0 = hs_eta26CLIZ.hscall();
        }
        var hs_x26CLJ5 = hs_wild26CMh0.data[0];
        var hs_y26CLJ6 = hs_wild26CMh0.data[1];
        var hs_ds26CLJ7 = new $hs.Thunk();
        hs_ds26CLJ7.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_quotRem.hscall(hs_zddIntegral26CLJ4, hs_x26CLJ5, hs_y26CLJ6);
        };
        var hs_sat26CMh1 = new $hs.Thunk();
        hs_sat26CMh1.evaluateOnce = function () {
            var hs_wild126CMh8 = hs_ds26CLJ7;
            if (hs_ds26CLJ7.notEvaluated) {
                hs_wild126CMh8 = hs_ds26CLJ7.hscall();
            }
            var hs_r26CLJl = hs_wild126CMh8.data[1];
            var hs_tpl26CLJn = hs_r26CLJl;
            if (hs_r26CLJl.notEvaluated) {
                hs_tpl26CLJn = hs_r26CLJl.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [hs_tpl26CLJn, hs_y26CLJ6];
            return $res;
        };
        var hs_sat26CMgZ = new $hs.Thunk();
        hs_sat26CMgZ.evaluateOnce = function () {
            var hs_sat26CMh2 = new $hs.Thunk();
            hs_sat26CMh2.evaluateOnce = function () {
                var hs_sat26CMh5 = new $hs.Thunk();
                hs_sat26CMh5.evaluateOnce = function () {
                    var hs_wild126CMh7 = hs_ds26CLJ7;
                    if (hs_ds26CLJ7.notEvaluated) {
                        hs_wild126CMh7 = hs_ds26CLJ7.hscall();
                    }
                    var hs_q26CLJe = hs_wild126CMh7.data[0];
                    if (hs_q26CLJe.notEvaluated) {
                        return hs_q26CLJe.hscall();
                    } else {
                        return hs_q26CLJe;
                    }
                };
                return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26CLJ4, hs_sat26CMh5);
            };
            var hs_sat26CMh3 = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral126CLJ8);
            var hs_sat26CMh4 = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26CMh3);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26CMh4, hs_sat26CMh2);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CMgZ, hs_sat26CMh1];
        return $res;
    };
    hs_zdctoRational125und9.evaluate = function (hs_ds26CLJr) {
        var hs_wild26CMha = hs_ds26CLJr;
        if (hs_ds26CLJr.notEvaluated) {
            hs_wild26CMha = hs_ds26CLJr.hscall();
        }
        var hs_x26CLJv = hs_wild26CMha.data[0];
        var hs_y26CLJx = hs_wild26CMha.data[1];
        var hs_tpl26CLJz = $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_x26CLJv);
        var hs_tpl126CLJA = $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_y26CLJx);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CLJz, hs_tpl126CLJA];
        return $res;
    };
    hs_zdctoRational225undl.evaluate = function (hs_zddIntegral26CLJI, hs_ds26CLJE) {
        var hs_wild26CMhb = hs_ds26CLJE;
        if (hs_ds26CLJE.notEvaluated) {
            hs_wild26CMhb = hs_ds26CLJE.hscall();
        }
        var hs_x26CLJJ = hs_wild26CMhb.data[0];
        var hs_y26CLJL = hs_wild26CMhb.data[1];
        var hs_tpl26CLJN = $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26CLJI, hs_x26CLJJ);
        var hs_tpl126CLJO = $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26CLJI, hs_y26CLJL);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CLJN, hs_tpl126CLJO];
        return $res;
    };
    hs_zddReal325undz.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum325undA.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal325undz);
    };
    hs_zddOrd25undB.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal325undz);
    };
    hs_zddEq125undC.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd25undB);
    };
    hs_zdcrecip25undD.evaluate = function (hs_ds26CLJV) {
        var hs_wild26CMhc = hs_ds26CLJV;
        if (hs_ds26CLJV.notEvaluated) {
            hs_wild26CMhc = hs_ds26CLJV.hscall();
        }
        var hs_ds126CLJZ = hs_wild26CMhc.data[0];
        var hs_ds226CLK6 = hs_wild26CMhc.data[1];
        var hs_sat26CMhd = new $hs.Thunk();
        hs_sat26CMhd.evaluateOnce = function () {
            var hs_sat26CMhj = new $hs.Thunk();
            hs_sat26CMhj.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum325undA, hs_sat26CMhj);
        };
        var hs_wild126CMhe = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq125undC, hs_ds126CLJZ, hs_sat26CMhd);
        switch (hs_wild126CMhe.tag) {
        case 1:
            var hs_sat26CMhg = new $hs.Thunk();
            hs_sat26CMhg.evaluateOnce = function () {
                var hs_sat26CMhi = new $hs.Thunk();
                hs_sat26CMhi.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum325undA, hs_sat26CMhi);
            };
            var hs_wild226CMhh = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd25undB, hs_ds126CLJZ, hs_sat26CMhg);
            switch (hs_wild226CMhh.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [hs_ds226CLK6, hs_ds126CLJZ];
                return $res;
            case 2:
                var hs_tpl26CLK9 = $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum325undA, hs_ds226CLK6);
                var hs_tpl126CLKa = $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum325undA, hs_ds126CLJZ);
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl26CLK9, hs_tpl126CLKa];
                return $res;
            }
        case 2:
            var hs_sat26CMhf = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Ratio.%: zero denominator\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CMhf);
        }
    };
    hs_zdcrecip125undW.evaluate = function (hs_zddIntegral26CLKg, hs_eta26CLKm) {
        var hs_zddReal2126CLKh = new $hs.Thunk();
        hs_zddReal2126CLKh.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLKg);
        };
        var hs_zddNum2726CLKj = new $hs.Thunk();
        hs_zddNum2726CLKj.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLKh);
        };
        var hs_zddOrd1726CLKl = new $hs.Thunk();
        hs_zddOrd1726CLKl.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2126CLKh);
        };
        var hs_wild26CMhk = hs_eta26CLKm;
        if (hs_eta26CLKm.notEvaluated) {
            hs_wild26CMhk = hs_eta26CLKm.hscall();
        }
        var hs_ds26CLKr = hs_wild26CMhk.data[0];
        var hs_ds126CLKy = hs_wild26CMhk.data[1];
        var hs_sat26CMhl = new $hs.Thunk();
        hs_sat26CMhl.evaluateOnce = function () {
            var hs_sat26CMhs = new $hs.Thunk();
            hs_sat26CMhs.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLKj, hs_sat26CMhs);
        };
        var hs_sat26CMhm = $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1726CLKl);
        var hs_wild126CMhn = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26CMhm, hs_ds26CLKr, hs_sat26CMhl);
        switch (hs_wild126CMhn.tag) {
        case 1:
            var hs_sat26CMhp = new $hs.Thunk();
            hs_sat26CMhp.evaluateOnce = function () {
                var hs_sat26CMhr = new $hs.Thunk();
                hs_sat26CMhr.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLKj, hs_sat26CMhr);
            };
            var hs_wild226CMhq = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1726CLKl, hs_ds26CLKr, hs_sat26CMhp);
            switch (hs_wild226CMhq.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [hs_ds126CLKy, hs_ds26CLKr];
                return $res;
            case 2:
                var hs_tpl26CLKB = $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum2726CLKj, hs_ds126CLKy);
                var hs_tpl126CLKC = $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum2726CLKj, hs_ds26CLKr);
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl26CLKB, hs_tpl126CLKC];
                return $res;
            }
        case 2:
            var hs_sat26CMho = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Ratio.%: zero denominator\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CMho);
        }
    };
    hs_zddReal425uneo.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum425unep.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal425uneo);
    };
    hs_zdczp25uneq.evaluate = function (hs_ds26CLKJ, hs_ds126CLKN) {
        var hs_wild26CMhv = hs_ds26CLKJ;
        if (hs_ds26CLKJ.notEvaluated) {
            hs_wild26CMhv = hs_ds26CLKJ.hscall();
        }
        var hs_x26CLKR = hs_wild26CMhv.data[0];
        var hs_y26CLKV = hs_wild26CMhv.data[1];
        var hs_wild126CMhu = hs_ds126CLKN;
        if (hs_ds126CLKN.notEvaluated) {
            hs_wild126CMhu = hs_ds126CLKN.hscall();
        }
        var hs_xzq26CLKU = hs_wild126CMhu.data[0];
        var hs_yzq26CLKS = hs_wild126CMhu.data[1];
        var hs_sat26CMhw = new $hs.Thunk();
        hs_sat26CMhw.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum425unep, hs_y26CLKV, hs_yzq26CLKS);
        };
        var hs_sat26CMht = new $hs.Thunk();
        hs_sat26CMht.evaluateOnce = function () {
            var hs_sat26CMhy = new $hs.Thunk();
            hs_sat26CMhy.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum425unep, hs_xzq26CLKU, hs_y26CLKV);
            };
            var hs_sat26CMhx = new $hs.Thunk();
            hs_sat26CMhx.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum425unep, hs_x26CLKR, hs_yzq26CLKS);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum425unep, hs_sat26CMhx, hs_sat26CMhy);
        };
        return $hs.modules.GHCziReal.hs_reduce.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26CMht, hs_sat26CMhw);
    };
    hs_zdczp125uneJ.evaluate = function (hs_zddIntegral26CLL4, hs_eta26CLL8, hs_eta126CLLc) {
        var hs_zddReal2126CLL5 = new $hs.Thunk();
        hs_zddReal2126CLL5.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLL4);
        };
        var hs_zddNum2726CLL7 = new $hs.Thunk();
        hs_zddNum2726CLL7.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLL5);
        };
        var hs_wild26CMhB = hs_eta26CLL8;
        if (hs_eta26CLL8.notEvaluated) {
            hs_wild26CMhB = hs_eta26CLL8.hscall();
        }
        var hs_x26CLLg = hs_wild26CMhB.data[0];
        var hs_y26CLLk = hs_wild26CMhB.data[1];
        var hs_wild126CMhA = hs_eta126CLLc;
        if (hs_eta126CLLc.notEvaluated) {
            hs_wild126CMhA = hs_eta126CLLc.hscall();
        }
        var hs_xzq26CLLj = hs_wild126CMhA.data[0];
        var hs_yzq26CLLh = hs_wild126CMhA.data[1];
        var hs_sat26CMhC = new $hs.Thunk();
        hs_sat26CMhC.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum2726CLL7, hs_y26CLLk, hs_yzq26CLLh);
        };
        var hs_sat26CMhz = new $hs.Thunk();
        hs_sat26CMhz.evaluateOnce = function () {
            var hs_sat26CMhE = new $hs.Thunk();
            hs_sat26CMhE.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum2726CLL7, hs_xzq26CLLj, hs_y26CLLk);
            };
            var hs_sat26CMhD = new $hs.Thunk();
            hs_sat26CMhD.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum2726CLL7, hs_x26CLLg, hs_yzq26CLLh);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum2726CLL7, hs_sat26CMhD, hs_sat26CMhE);
        };
        return $hs.modules.GHCziReal.hs_reduce.hscall(hs_zddIntegral26CLL4, hs_sat26CMhz, hs_sat26CMhC);
    };
    hs_zddReal525unf8.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum525unf9.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal525unf8);
    };
    hs_zdczt25unfa.evaluate = function (hs_ds26CLLt, hs_ds126CLLx) {
        var hs_wild26CMhH = hs_ds26CLLt;
        if (hs_ds26CLLt.notEvaluated) {
            hs_wild26CMhH = hs_ds26CLLt.hscall();
        }
        var hs_x26CLLB = hs_wild26CMhH.data[0];
        var hs_y26CLLE = hs_wild26CMhH.data[1];
        var hs_wild126CMhG = hs_ds126CLLx;
        if (hs_ds126CLLx.notEvaluated) {
            hs_wild126CMhG = hs_ds126CLLx.hscall();
        }
        var hs_xzq26CLLC = hs_wild126CMhG.data[0];
        var hs_yzq26CLLF = hs_wild126CMhG.data[1];
        var hs_sat26CMhI = new $hs.Thunk();
        hs_sat26CMhI.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum525unf9, hs_y26CLLE, hs_yzq26CLLF);
        };
        var hs_sat26CMhF = new $hs.Thunk();
        hs_sat26CMhF.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum525unf9, hs_x26CLLB, hs_xzq26CLLC);
        };
        return $hs.modules.GHCziReal.hs_reduce.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26CMhF, hs_sat26CMhI);
    };
    hs_zdczt125unfr.evaluate = function (hs_zddIntegral26CLLM, hs_eta26CLLQ, hs_eta126CLLU) {
        var hs_zddReal2126CLLN = new $hs.Thunk();
        hs_zddReal2126CLLN.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLLM);
        };
        var hs_zddNum2726CLLP = new $hs.Thunk();
        hs_zddNum2726CLLP.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLLN);
        };
        var hs_wild26CMhL = hs_eta26CLLQ;
        if (hs_eta26CLLQ.notEvaluated) {
            hs_wild26CMhL = hs_eta26CLLQ.hscall();
        }
        var hs_x26CLLY = hs_wild26CMhL.data[0];
        var hs_y26CLM1 = hs_wild26CMhL.data[1];
        var hs_wild126CMhK = hs_eta126CLLU;
        if (hs_eta126CLLU.notEvaluated) {
            hs_wild126CMhK = hs_eta126CLLU.hscall();
        }
        var hs_xzq26CLLZ = hs_wild126CMhK.data[0];
        var hs_yzq26CLM2 = hs_wild126CMhK.data[1];
        var hs_sat26CMhM = new $hs.Thunk();
        hs_sat26CMhM.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum2726CLLP, hs_y26CLM1, hs_yzq26CLM2);
        };
        var hs_sat26CMhJ = new $hs.Thunk();
        hs_sat26CMhJ.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum2726CLLP, hs_x26CLLY, hs_xzq26CLLZ);
        };
        return $hs.modules.GHCziReal.hs_reduce.hscall(hs_zddIntegral26CLLM, hs_sat26CMhJ, hs_sat26CMhM);
    };
    hs_zddReal625unfO.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum625unfP.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal625unfO);
    };
    hs_zdczm25unfQ.evaluate = function (hs_ds26CLM9, hs_ds126CLMd) {
        var hs_wild26CMhP = hs_ds26CLM9;
        if (hs_ds26CLM9.notEvaluated) {
            hs_wild26CMhP = hs_ds26CLM9.hscall();
        }
        var hs_x26CLMh = hs_wild26CMhP.data[0];
        var hs_y26CLMl = hs_wild26CMhP.data[1];
        var hs_wild126CMhO = hs_ds126CLMd;
        if (hs_ds126CLMd.notEvaluated) {
            hs_wild126CMhO = hs_ds126CLMd.hscall();
        }
        var hs_xzq26CLMk = hs_wild126CMhO.data[0];
        var hs_yzq26CLMi = hs_wild126CMhO.data[1];
        var hs_sat26CMhQ = new $hs.Thunk();
        hs_sat26CMhQ.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum625unfP, hs_y26CLMl, hs_yzq26CLMi);
        };
        var hs_sat26CMhN = new $hs.Thunk();
        hs_sat26CMhN.evaluateOnce = function () {
            var hs_sat26CMhS = new $hs.Thunk();
            hs_sat26CMhS.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum625unfP, hs_xzq26CLMk, hs_y26CLMl);
            };
            var hs_sat26CMhR = new $hs.Thunk();
            hs_sat26CMhR.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum625unfP, hs_x26CLMh, hs_yzq26CLMi);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum625unfP, hs_sat26CMhR, hs_sat26CMhS);
        };
        return $hs.modules.GHCziReal.hs_reduce.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26CMhN, hs_sat26CMhQ);
    };
    hs_zdczm125ung9.evaluate = function (hs_zddIntegral26CLMu, hs_eta26CLMy, hs_eta126CLMC) {
        var hs_zddReal2126CLMv = new $hs.Thunk();
        hs_zddReal2126CLMv.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLMu);
        };
        var hs_zddNum2726CLMx = new $hs.Thunk();
        hs_zddNum2726CLMx.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLMv);
        };
        var hs_wild26CMhV = hs_eta26CLMy;
        if (hs_eta26CLMy.notEvaluated) {
            hs_wild26CMhV = hs_eta26CLMy.hscall();
        }
        var hs_x26CLMG = hs_wild26CMhV.data[0];
        var hs_y26CLMK = hs_wild26CMhV.data[1];
        var hs_wild126CMhU = hs_eta126CLMC;
        if (hs_eta126CLMC.notEvaluated) {
            hs_wild126CMhU = hs_eta126CLMC.hscall();
        }
        var hs_xzq26CLMJ = hs_wild126CMhU.data[0];
        var hs_yzq26CLMH = hs_wild126CMhU.data[1];
        var hs_sat26CMhW = new $hs.Thunk();
        hs_sat26CMhW.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum2726CLMx, hs_y26CLMK, hs_yzq26CLMH);
        };
        var hs_sat26CMhT = new $hs.Thunk();
        hs_sat26CMhT.evaluateOnce = function () {
            var hs_sat26CMhY = new $hs.Thunk();
            hs_sat26CMhY.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum2726CLMx, hs_xzq26CLMJ, hs_y26CLMK);
            };
            var hs_sat26CMhX = new $hs.Thunk();
            hs_sat26CMhX.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum2726CLMx, hs_x26CLMG, hs_yzq26CLMH);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum2726CLMx, hs_sat26CMhX, hs_sat26CMhY);
        };
        return $hs.modules.GHCziReal.hs_reduce.hscall(hs_zddIntegral26CLMu, hs_sat26CMhT, hs_sat26CMhW);
    };
    hs_a425ungy.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum725ungz.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_a425ungy);
    };
    hs_zdcnegate25ungA.evaluate = function (hs_ds26CLMS) {
        var hs_wild26CMhZ = hs_ds26CLMS;
        if (hs_ds26CLMS.notEvaluated) {
            hs_wild26CMhZ = hs_ds26CLMS.hscall();
        }
        var hs_x26CLMW = hs_wild26CMhZ.data[0];
        var hs_y26CLMZ = hs_wild26CMhZ.data[1];
        var hs_tpl26CLMY = $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum725ungz, hs_x26CLMW);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CLMY, hs_y26CLMZ];
        return $res;
    };
    hs_zdcnegate125ungK.evaluate = function (hs_zddIntegral26CLN7, hs_eta26CLN3) {
        var hs_wild26CMi0 = hs_eta26CLN3;
        if (hs_eta26CLN3.notEvaluated) {
            hs_wild26CMi0 = hs_eta26CLN3.hscall();
        }
        var hs_x26CLNa = hs_wild26CMi0.data[0];
        var hs_y26CLNd = hs_wild26CMi0.data[1];
        var hs_sat26CMi1 = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLN7);
        var hs_sat26CMi2 = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26CMi1);
        var hs_tpl26CLNc = $hs.modules.GHCziNum.hs_negate.hscall(hs_sat26CMi2, hs_x26CLNa);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CLNc, hs_y26CLNd];
        return $res;
    };
    hs_a525ungY.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum825ungZ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_a525ungY);
    };
    hs_zdcabs25unh0.evaluate = function (hs_ds26CLNi) {
        var hs_wild26CMi3 = hs_ds26CLNi;
        if (hs_ds26CLNi.notEvaluated) {
            hs_wild26CMi3 = hs_ds26CLNi.hscall();
        }
        var hs_x26CLNm = hs_wild26CMi3.data[0];
        var hs_y26CLNp = hs_wild26CMi3.data[1];
        var hs_tpl26CLNo = $hs.modules.GHCziNum.hs_abs.hscall(hs_zddNum825ungZ, hs_x26CLNm);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CLNo, hs_y26CLNp];
        return $res;
    };
    hs_zdcabs125unha.evaluate = function (hs_zddIntegral26CLNx, hs_eta26CLNt) {
        var hs_wild26CMi4 = hs_eta26CLNt;
        if (hs_eta26CLNt.notEvaluated) {
            hs_wild26CMi4 = hs_eta26CLNt.hscall();
        }
        var hs_x26CLNA = hs_wild26CMi4.data[0];
        var hs_y26CLND = hs_wild26CMi4.data[1];
        var hs_sat26CMi5 = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLNx);
        var hs_sat26CMi6 = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26CMi5);
        var hs_tpl26CLNC = $hs.modules.GHCziNum.hs_abs.hscall(hs_sat26CMi6, hs_x26CLNA);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CLNC, hs_y26CLND];
        return $res;
    };
    hs_zddReal725unho.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum925unhp.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal725unho);
    };
    hs_zdcsignum25unhq.evaluate = function (hs_ds26CLNI) {
        var hs_wild26CMi7 = hs_ds26CLNI;
        if (hs_ds26CLNI.notEvaluated) {
            hs_wild26CMi7 = hs_ds26CLNI.hscall();
        }
        var hs_x26CLNM = hs_wild26CMi7.data[0];
        var hs_tpl26CLNQ = $hs.modules.GHCziNum.hs_signum.hscall(hs_zddNum925unhp, hs_x26CLNM);
        var hs_sat26CMi9 = new $hs.Thunk();
        hs_sat26CMi9.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_tpl126CLNR = $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum925unhp, hs_sat26CMi9);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CLNQ, hs_tpl126CLNR];
        return $res;
    };
    hs_zdcsignum125unhC.evaluate = function (hs_zddIntegral26CLNW, hs_eta26CLO0) {
        var hs_zddReal2126CLNX = new $hs.Thunk();
        hs_zddReal2126CLNX.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLNW);
        };
        var hs_zddNum2726CLNZ = new $hs.Thunk();
        hs_zddNum2726CLNZ.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLNX);
        };
        var hs_wild26CMia = hs_eta26CLO0;
        if (hs_eta26CLO0.notEvaluated) {
            hs_wild26CMia = hs_eta26CLO0.hscall();
        }
        var hs_x26CLO4 = hs_wild26CMia.data[0];
        var hs_tpl26CLO8 = $hs.modules.GHCziNum.hs_signum.hscall(hs_zddNum2726CLNZ, hs_x26CLO4);
        var hs_sat26CMic = new $hs.Thunk();
        hs_sat26CMic.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_tpl126CLO9 = $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLNZ, hs_sat26CMic);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CLO8, hs_tpl126CLO9];
        return $res;
    };
    hs_zddReal825unhU.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum1025unhV.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal825unhU);
    };
    hs_zdcfromInteger25unhW.evaluate = function (hs_x26CLOe) {
        var hs_tpl26CLOi = $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1025unhV, hs_x26CLOe);
        var hs_sat26CMid = new $hs.Thunk();
        hs_sat26CMid.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_tpl126CLOj = $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1025unhV, hs_sat26CMid);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CLOi, hs_tpl126CLOj];
        return $res;
    };
    hs_zdcfromInteger125uni4.evaluate = function (hs_zddIntegral26CLOo, hs_eta26CLOs) {
        var hs_zddReal2126CLOp = new $hs.Thunk();
        hs_zddReal2126CLOp.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLOo);
        };
        var hs_zddNum2726CLOr = new $hs.Thunk();
        hs_zddNum2726CLOr.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLOp);
        };
        var hs_tpl26CLOw = $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLOr, hs_eta26CLOs);
        var hs_sat26CMie = new $hs.Thunk();
        hs_sat26CMie.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_tpl126CLOx = $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLOr, hs_sat26CMie);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CLOw, hs_tpl126CLOx];
        return $res;
    };
    hs_a625unii.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a725unij.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_a625unii);
    };
    hs_a825unik.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_a725unij);
    };
    hs_a925unil.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall(hs_a825unik);
    };
    hs_a1025unim.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a1125unin.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_zdczp125uneJ.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1225unio.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_zdczt125unfr.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1325unip.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_zdczm125ung9.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1425uniq.evaluate = function (hs_eta26CLOI) {
        var hs_wild26CMif = hs_eta26CLOI;
        if (hs_eta26CLOI.notEvaluated) {
            hs_wild26CMif = hs_eta26CLOI.hscall();
        }
        var hs_x26CLOO = hs_wild26CMif.data[0];
        var hs_y26CLOR = hs_wild26CMif.data[1];
        var hs_sat26CMig = $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
        var hs_sat26CMih = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26CMig);
        var hs_tpl26CLOQ = $hs.modules.GHCziNum.hs_negate.hscall(hs_sat26CMih, hs_x26CLOO);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CLOQ, hs_y26CLOR];
        return $res;
    };
    hs_a1525uniC.evaluate = function (hs_eta26CLOU) {
        var hs_wild26CMii = hs_eta26CLOU;
        if (hs_eta26CLOU.notEvaluated) {
            hs_wild26CMii = hs_eta26CLOU.hscall();
        }
        var hs_x26CLP0 = hs_wild26CMii.data[0];
        var hs_y26CLP3 = hs_wild26CMii.data[1];
        var hs_sat26CMij = $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
        var hs_sat26CMik = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26CMij);
        var hs_tpl26CLP2 = $hs.modules.GHCziNum.hs_abs.hscall(hs_sat26CMik, hs_x26CLP0);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CLP2, hs_y26CLP3];
        return $res;
    };
    hs_a1625uniO.evaluate = function (hs_eta26CLPa) {
        var hs_zddReal2126CLP7 = new $hs.Thunk();
        hs_zddReal2126CLP7.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
        };
        var hs_zddNum2726CLP9 = new $hs.Thunk();
        hs_zddNum2726CLP9.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLP7);
        };
        var hs_wild26CMil = hs_eta26CLPa;
        if (hs_eta26CLPa.notEvaluated) {
            hs_wild26CMil = hs_eta26CLPa.hscall();
        }
        var hs_x26CLPe = hs_wild26CMil.data[0];
        var hs_tpl26CLPi = $hs.modules.GHCziNum.hs_signum.hscall(hs_zddNum2726CLP9, hs_x26CLPe);
        var hs_sat26CMin = new $hs.Thunk();
        hs_sat26CMin.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_tpl126CLPj = $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLP9, hs_sat26CMin);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CLPi, hs_tpl126CLPj];
        return $res;
    };
    hs_a1725unj4.evaluate = function (hs_eta26CLPq) {
        var hs_zddReal2126CLPn = new $hs.Thunk();
        hs_zddReal2126CLPn.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
        };
        var hs_zddNum2726CLPp = new $hs.Thunk();
        hs_zddNum2726CLPp.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLPn);
        };
        var hs_tpl26CLPu = $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLPp, hs_eta26CLPq);
        var hs_sat26CMio = new $hs.Thunk();
        hs_sat26CMio.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_tpl126CLPv = $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLPp, hs_sat26CMio);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CLPu, hs_tpl126CLPv];
        return $res;
    };
    hs_zdfNumRatio125unjg.data = [hs_a925unil, hs_a1025unim, hs_a1125unin, hs_a1225unio, hs_a1325unip, hs_a1425uniq, hs_a1525uniC, hs_a1625uniO, hs_a1725unj4];
    this.hs_zdfNumRatio.evaluate = function (hs_zddIntegral26CLPy) {
        var hs_sat26CMiq = new $hs.Func(1);
        hs_sat26CMiq.evaluate = function (hs_eta1cW6l3) {
            return hs_zdcfromInteger125uni4.hscall(hs_zddIntegral26CLPy, hs_eta1cW6l3);
        };
        var hs_sat26CMir = new $hs.Func(1);
        hs_sat26CMir.evaluate = function (hs_eta1cW6l3) {
            return hs_zdcsignum125unhC.hscall(hs_zddIntegral26CLPy, hs_eta1cW6l3);
        };
        var hs_sat26CMis = new $hs.Func(1);
        hs_sat26CMis.evaluate = function (hs_eta1cW6l3) {
            return hs_zdcabs125unha.hscall(hs_zddIntegral26CLPy, hs_eta1cW6l3);
        };
        var hs_sat26CMit = new $hs.Func(1);
        hs_sat26CMit.evaluate = function (hs_eta1cW6l3) {
            return hs_zdcnegate125ungK.hscall(hs_zddIntegral26CLPy, hs_eta1cW6l3);
        };
        var hs_sat26CMiu = new $hs.Func(2);
        hs_sat26CMiu.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczm125ung9.hscall(hs_zddIntegral26CLPy, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CMiv = new $hs.Func(2);
        hs_sat26CMiv.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczt125unfr.hscall(hs_zddIntegral26CLPy, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CMiw = new $hs.Func(2);
        hs_sat26CMiw.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczp125uneJ.hscall(hs_zddIntegral26CLPy, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CMix = new $hs.Thunk();
        hs_sat26CMix.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall(hs_zddIntegral26CLPy);
        };
        var hs_sat26CMip = new $hs.Thunk();
        hs_sat26CMip.evaluateOnce = function () {
            return hs_zdczdp1Num25un9w.hscall(hs_zddIntegral26CLPy);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CMip, hs_sat26CMix, hs_sat26CMiw, hs_sat26CMiv, hs_sat26CMiu, hs_sat26CMit, hs_sat26CMis, hs_sat26CMir, hs_sat26CMiq];
        return $res;
    };
    hs_zddNum1125unjs.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdcsucc25unjt.evaluate = function (hs_x26CLPL) {
        var hs_sat26CMiy = new $hs.Thunk();
        hs_sat26CMiy.evaluateOnce = function () {
            var hs_sat26CMiz = new $hs.Thunk();
            hs_sat26CMiz.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1125unjs, hs_sat26CMiz);
        };
        return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum1125unjs, hs_x26CLPL, hs_sat26CMiy);
    };
    hs_zdcsucc125unjy.evaluate = function (hs_zddIntegral26CLPR) {
        var hs_zddNum2726CLPS = new $hs.Thunk();
        hs_zddNum2726CLPS.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall(hs_zddIntegral26CLPR);
        };
        var hs_sat26CMiA = new $hs.Func(1);
        hs_sat26CMiA.evaluate = function (hs_x26CLPU) {
            var hs_sat26CLPY = new $hs.Thunk();
            hs_sat26CLPY.evaluateOnce = function () {
                var hs_sat26CLPX = new $hs.Thunk();
                hs_sat26CLPX.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLPS, hs_sat26CLPX);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum2726CLPS, hs_x26CLPU, hs_sat26CLPY);
        };
        if (hs_sat26CMiA.notEvaluated) {
            return hs_sat26CMiA.hscall();
        } else {
            return hs_sat26CMiA;
        }
    };
    hs_zddNum1225unjK.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdcpred25unjL.evaluate = function (hs_x26CLQ3) {
        var hs_sat26CMiB = new $hs.Thunk();
        hs_sat26CMiB.evaluateOnce = function () {
            var hs_sat26CMiC = new $hs.Thunk();
            hs_sat26CMiC.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1225unjK, hs_sat26CMiC);
        };
        return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum1225unjK, hs_x26CLQ3, hs_sat26CMiB);
    };
    hs_zdcpred125unjQ.evaluate = function (hs_zddIntegral26CLQ9) {
        var hs_zddNum2726CLQa = new $hs.Thunk();
        hs_zddNum2726CLQa.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall(hs_zddIntegral26CLQ9);
        };
        var hs_sat26CMiD = new $hs.Func(1);
        hs_sat26CMiD.evaluate = function (hs_x26CLQc) {
            var hs_sat26CLQg = new $hs.Thunk();
            hs_sat26CLQg.evaluateOnce = function () {
                var hs_sat26CLQf = new $hs.Thunk();
                hs_sat26CLQf.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLQa, hs_sat26CLQf);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum2726CLQa, hs_x26CLQc, hs_sat26CLQg);
        };
        if (hs_sat26CMiD.notEvaluated) {
            return hs_sat26CMiD.hscall();
        } else {
            return hs_sat26CMiD;
        }
    };
    hs_zddReal925unk2.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum1325unk3.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal925unk2);
    };
    hs_zddOrd125unk4.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal925unk2);
    };
    hs_zdczl25unk5.evaluate = function (hs_ds26CLQo, hs_ds126CLQs) {
        var hs_wild26CMiG = hs_ds26CLQo;
        if (hs_ds26CLQo.notEvaluated) {
            hs_wild26CMiG = hs_ds26CLQo.hscall();
        }
        var hs_x26CLQw = hs_wild26CMiG.data[0];
        var hs_y26CLQA = hs_wild26CMiG.data[1];
        var hs_wild126CMiF = hs_ds126CLQs;
        if (hs_ds126CLQs.notEvaluated) {
            hs_wild126CMiF = hs_ds126CLQs.hscall();
        }
        var hs_xzq26CLQz = hs_wild126CMiF.data[0];
        var hs_yzq26CLQx = hs_wild126CMiF.data[1];
        var hs_sat26CMiH = new $hs.Thunk();
        hs_sat26CMiH.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum1325unk3, hs_xzq26CLQz, hs_y26CLQA);
        };
        var hs_sat26CMiE = new $hs.Thunk();
        hs_sat26CMiE.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum1325unk3, hs_x26CLQw, hs_yzq26CLQx);
        };
        return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd125unk4, hs_sat26CMiE, hs_sat26CMiH);
    };
    hs_zdczl125unkm.evaluate = function (hs_zddIntegral26CLQH, hs_eta26CLQL, hs_eta126CLQP) {
        var hs_zddReal2126CLQI = new $hs.Thunk();
        hs_zddReal2126CLQI.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLQH);
        };
        var hs_zddNum2726CLQK = new $hs.Thunk();
        hs_zddNum2726CLQK.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLQI);
        };
        var hs_wild26CMiJ = hs_eta26CLQL;
        if (hs_eta26CLQL.notEvaluated) {
            hs_wild26CMiJ = hs_eta26CLQL.hscall();
        }
        var hs_x26CLQU = hs_wild26CMiJ.data[0];
        var hs_y26CLQY = hs_wild26CMiJ.data[1];
        var hs_wild126CMiI = hs_eta126CLQP;
        if (hs_eta126CLQP.notEvaluated) {
            hs_wild126CMiI = hs_eta126CLQP.hscall();
        }
        var hs_xzq26CLQX = hs_wild126CMiI.data[0];
        var hs_yzq26CLQV = hs_wild126CMiI.data[1];
        var hs_sat26CMiK = new $hs.Thunk();
        hs_sat26CMiK.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum2726CLQK, hs_xzq26CLQX, hs_y26CLQY);
        };
        var hs_sat26CMiL = new $hs.Thunk();
        hs_sat26CMiL.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum2726CLQK, hs_x26CLQU, hs_yzq26CLQV);
        };
        var hs_sat26CMiM = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2126CLQI);
        return $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26CMiM, hs_sat26CMiL, hs_sat26CMiK);
    };
    hs_zddReal1025unkK.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum1425unkL.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1025unkK);
    };
    hs_zddOrd225unkM.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal1025unkK);
    };
    hs_zdczlze25unkN.evaluate = function (hs_ds26CLR6, hs_ds126CLRa) {
        var hs_wild26CMiP = hs_ds26CLR6;
        if (hs_ds26CLR6.notEvaluated) {
            hs_wild26CMiP = hs_ds26CLR6.hscall();
        }
        var hs_x26CLRe = hs_wild26CMiP.data[0];
        var hs_y26CLRi = hs_wild26CMiP.data[1];
        var hs_wild126CMiO = hs_ds126CLRa;
        if (hs_ds126CLRa.notEvaluated) {
            hs_wild126CMiO = hs_ds126CLRa.hscall();
        }
        var hs_xzq26CLRh = hs_wild126CMiO.data[0];
        var hs_yzq26CLRf = hs_wild126CMiO.data[1];
        var hs_sat26CMiQ = new $hs.Thunk();
        hs_sat26CMiQ.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum1425unkL, hs_xzq26CLRh, hs_y26CLRi);
        };
        var hs_sat26CMiN = new $hs.Thunk();
        hs_sat26CMiN.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum1425unkL, hs_x26CLRe, hs_yzq26CLRf);
        };
        return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd225unkM, hs_sat26CMiN, hs_sat26CMiQ);
    };
    hs_zdczlze125unl4.evaluate = function (hs_zddIntegral26CLRp, hs_eta26CLRt, hs_eta126CLRx) {
        var hs_zddReal2126CLRq = new $hs.Thunk();
        hs_zddReal2126CLRq.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLRp);
        };
        var hs_zddNum2726CLRs = new $hs.Thunk();
        hs_zddNum2726CLRs.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLRq);
        };
        var hs_wild26CMiS = hs_eta26CLRt;
        if (hs_eta26CLRt.notEvaluated) {
            hs_wild26CMiS = hs_eta26CLRt.hscall();
        }
        var hs_x26CLRC = hs_wild26CMiS.data[0];
        var hs_y26CLRG = hs_wild26CMiS.data[1];
        var hs_wild126CMiR = hs_eta126CLRx;
        if (hs_eta126CLRx.notEvaluated) {
            hs_wild126CMiR = hs_eta126CLRx.hscall();
        }
        var hs_xzq26CLRF = hs_wild126CMiR.data[0];
        var hs_yzq26CLRD = hs_wild126CMiR.data[1];
        var hs_sat26CMiT = new $hs.Thunk();
        hs_sat26CMiT.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum2726CLRs, hs_xzq26CLRF, hs_y26CLRG);
        };
        var hs_sat26CMiU = new $hs.Thunk();
        hs_sat26CMiU.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum2726CLRs, hs_x26CLRC, hs_yzq26CLRD);
        };
        var hs_sat26CMiV = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2126CLRq);
        return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_sat26CMiV, hs_sat26CMiU, hs_sat26CMiT);
    };
    hs_a1825unls.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_zdczlze125unl4.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1925unlt.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_zdczl125unkm.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2025unlu.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a2125unlv.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_a2025unlu);
    };
    hs_a2225unlw.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_a2125unlv);
    };
    hs_a2325unlx.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall(hs_a2225unlw);
    };
    this.hs_zdfOrdRatio.evaluate = function (hs_zddIntegral26CLSa) {
        var hs_sat26CMiX = new $hs.Thunk();
        hs_sat26CMiX.evaluateOnce = function () {
            return hs_zdcmin25unly.hscall(hs_zddIntegral26CLSa);
        };
        var hs_sat26CMiY = new $hs.Thunk();
        hs_sat26CMiY.evaluateOnce = function () {
            return hs_zdcmax25unlz.hscall(hs_zddIntegral26CLSa);
        };
        var hs_sat26CMiZ = new $hs.Func(2);
        hs_sat26CMiZ.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze125unl4.hscall(hs_zddIntegral26CLSa, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CMj0 = new $hs.Thunk();
        hs_sat26CMj0.evaluateOnce = function () {
            return hs_zdczg25unlA.hscall(hs_zddIntegral26CLSa);
        };
        var hs_sat26CMj1 = new $hs.Thunk();
        hs_sat26CMj1.evaluateOnce = function () {
            return hs_zdczgze25unlB.hscall(hs_zddIntegral26CLSa);
        };
        var hs_sat26CMj2 = new $hs.Func(2);
        hs_sat26CMj2.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl125unkm.hscall(hs_zddIntegral26CLSa, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CMj3 = new $hs.Thunk();
        hs_sat26CMj3.evaluateOnce = function () {
            return hs_zdccompare25unlC.hscall(hs_zddIntegral26CLSa);
        };
        var hs_sat26CMiW = new $hs.Thunk();
        hs_sat26CMiW.evaluateOnce = function () {
            return hs_zdczdp1Ord25un9C.hscall(hs_zddIntegral26CLSa);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CMiW, hs_sat26CMj3, hs_sat26CMj2, hs_sat26CMj1, hs_sat26CMj0, hs_sat26CMiZ, hs_sat26CMiY, hs_sat26CMiX];
        return $res;
    };
    hs_zdcmin25unly.evaluate = function (hs_zddIntegral26CLSk) {
        var hs_sat26CMj4 = new $hs.Thunk();
        hs_sat26CMj4.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddIntegral26CLSk);
        };
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall(hs_sat26CMj4);
    };
    hs_zdcmax25unlz.evaluate = function (hs_zddIntegral26CLSn) {
        var hs_sat26CMj5 = new $hs.Thunk();
        hs_sat26CMj5.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddIntegral26CLSn);
        };
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall(hs_sat26CMj5);
    };
    hs_zdczg25unlA.evaluate = function (hs_zddIntegral26CLSq) {
        var hs_sat26CMj6 = new $hs.Thunk();
        hs_sat26CMj6.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddIntegral26CLSq);
        };
        return $hs.modules.GHCziClasses.hs_zddmzg.hscall(hs_sat26CMj6);
    };
    hs_zdczgze25unlB.evaluate = function (hs_zddIntegral26CLSt) {
        var hs_sat26CMj7 = new $hs.Thunk();
        hs_sat26CMj7.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddIntegral26CLSt);
        };
        return $hs.modules.GHCziClasses.hs_zddmzgze.hscall(hs_sat26CMj7);
    };
    hs_zdccompare25unlC.evaluate = function (hs_zddIntegral26CLSw) {
        var hs_sat26CMj8 = new $hs.Thunk();
        hs_sat26CMj8.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddIntegral26CLSw);
        };
        return $hs.modules.GHCziClasses.hs_zddmcompare.hscall(hs_sat26CMj8);
    };
    hs_zddOrd325unlD.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdczgze125unlE.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzgze.hscall(hs_zddOrd325unlD);
    };
    hs_a2425unlF.evaluateOnce = function () {
        return hs_zdczgze25unlB.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddOrd425unlG.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdczg125unlH.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzg.hscall(hs_zddOrd425unlG);
    };
    hs_a2525unlI.evaluateOnce = function () {
        return hs_zdczg25unlA.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddOrd525unlJ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdcmax125unlK.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall(hs_zddOrd525unlJ);
    };
    hs_a2625unlL.evaluateOnce = function () {
        return hs_zdcmax25unlz.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddOrd625unlM.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdcmin125unlN.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall(hs_zddOrd625unlM);
    };
    hs_a2725unlO.evaluateOnce = function () {
        return hs_zdcmin25unly.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a2825unlP.evaluateOnce = function () {
        return hs_zdccompare25unlC.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdfOrdRatio125unlQ.data = [hs_a2325unlx, hs_a2825unlP, hs_a1925unlt, hs_a2425unlF, hs_a2525unlI, hs_a1825unls, hs_a2625unlL, hs_a2725unlO];
    hs_zddOrd725unlR.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdccompare125unlS.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmcompare.hscall(hs_zddOrd725unlR);
    };
    hs_a2925unmi.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a3025unmj.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a3125unmk.evaluate = function (hs_ds26CLSC) {
        var hs_wild26CMj9 = hs_ds26CLSC;
        if (hs_ds26CLSC.notEvaluated) {
            hs_wild26CMj9 = hs_ds26CLSC.hscall();
        }
        var hs_x26CLSG = hs_wild26CMj9.data[0];
        var hs_y26CLSI = hs_wild26CMj9.data[1];
        var hs_tpl26CLSK = $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_x26CLSG);
        var hs_tpl126CLSL = $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_y26CLSI);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CLSK, hs_tpl126CLSL];
        return $res;
    };
    hs_zdfRealRatio125unmw.data = [hs_a2925unmi, hs_a3025unmj, hs_a3125unmk];
    this.hs_zdfRealRatio.evaluate = function (hs_zddIntegral26CLSO) {
        var hs_sat26CMjb = new $hs.Func(1);
        hs_sat26CMjb.evaluate = function (hs_eta1cW6l3) {
            return hs_zdctoRational225undl.hscall(hs_zddIntegral26CLSO, hs_eta1cW6l3);
        };
        var hs_sat26CMjc = new $hs.Thunk();
        hs_sat26CMjc.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddIntegral26CLSO);
        };
        var hs_sat26CMja = new $hs.Thunk();
        hs_sat26CMja.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall(hs_zddIntegral26CLSO);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CMja, hs_sat26CMjc, hs_sat26CMjb];
        return $res;
    };
    this.hs_zdfRealInt.data = [$hs.modules.GHCziNum.hs_zdfNumInt, $hs.modules.GHCziClasses.hs_zdfOrdInt, hs_zdctoRational325unmC];
    this.hs_zdfIntegralInt.data = [$hs.modules.GHCziReal.hs_zdfRealInt, $hs.modules.GHCziEnum.hs_zdfEnumInt, hs_zdcquot25un86, hs_zdcrem25un7W, hs_zdcdiv25un7J, hs_zdcmod25un7z, hs_zdcquotRem25un7l, hs_zdcdivMod25un77, hs_zdctoInteger25un71];
    hs_zdctoRational325unmC.evaluate = function (hs_x26CLSU) {
        var hs_sat26CMje = new $hs.Thunk();
        hs_sat26CMje.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_sat26CMjd = new $hs.Thunk();
        hs_sat26CMjd.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_x26CLSU);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26CMjd, hs_sat26CMje);
    };
    hs_zddReal1125unmH.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum1525unmI.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1125unmH);
    };
    hs_zdczs25unmJ.evaluate = function (hs_ds26CLT2, hs_ds126CLT6) {
        var hs_wild26CMjh = hs_ds26CLT2;
        if (hs_ds26CLT2.notEvaluated) {
            hs_wild26CMjh = hs_ds26CLT2.hscall();
        }
        var hs_x26CLTa = hs_wild26CMjh.data[0];
        var hs_y26CLTd = hs_wild26CMjh.data[1];
        var hs_wild126CMjg = hs_ds126CLT6;
        if (hs_ds126CLT6.notEvaluated) {
            hs_wild126CMjg = hs_ds126CLT6.hscall();
        }
        var hs_xzq26CLTe = hs_wild126CMjg.data[0];
        var hs_yzq26CLTb = hs_wild126CMjg.data[1];
        var hs_sat26CMji = new $hs.Thunk();
        hs_sat26CMji.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum1525unmI, hs_y26CLTd, hs_xzq26CLTe);
        };
        var hs_sat26CMjf = new $hs.Thunk();
        hs_sat26CMjf.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum1525unmI, hs_x26CLTa, hs_yzq26CLTb);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26CMjf, hs_sat26CMji);
    };
    hs_zdczs125unn0.evaluate = function (hs_zddIntegral26CLTl, hs_eta26CLTp, hs_eta126CLTt) {
        var hs_zddReal2126CLTm = new $hs.Thunk();
        hs_zddReal2126CLTm.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLTl);
        };
        var hs_zddNum2726CLTo = new $hs.Thunk();
        hs_zddNum2726CLTo.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLTm);
        };
        var hs_wild26CMjl = hs_eta26CLTp;
        if (hs_eta26CLTp.notEvaluated) {
            hs_wild26CMjl = hs_eta26CLTp.hscall();
        }
        var hs_x26CLTx = hs_wild26CMjl.data[0];
        var hs_y26CLTA = hs_wild26CMjl.data[1];
        var hs_wild126CMjk = hs_eta126CLTt;
        if (hs_eta126CLTt.notEvaluated) {
            hs_wild126CMjk = hs_eta126CLTt.hscall();
        }
        var hs_xzq26CLTB = hs_wild126CMjk.data[0];
        var hs_yzq26CLTy = hs_wild126CMjk.data[1];
        var hs_sat26CMjm = new $hs.Thunk();
        hs_sat26CMjm.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum2726CLTo, hs_y26CLTA, hs_xzq26CLTB);
        };
        var hs_sat26CMjj = new $hs.Thunk();
        hs_sat26CMjj.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum2726CLTo, hs_x26CLTx, hs_yzq26CLTy);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall(hs_zddIntegral26CLTl, hs_sat26CMjj, hs_sat26CMjm);
    };
    hs_zddReal1225unnn.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum1625unno.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1225unnn);
    };
    hs_zdcfromRational25unnp.evaluate = function (hs_ds26CLTH) {
        var hs_wild26CMjo = hs_ds26CLTH;
        if (hs_ds26CLTH.notEvaluated) {
            hs_wild26CMjo = hs_ds26CLTH.hscall();
        }
        var hs_x26CLTL = hs_wild26CMjo.data[0];
        var hs_y26CLTN = hs_wild26CMjo.data[1];
        var hs_sat26CMjp = new $hs.Thunk();
        hs_sat26CMjp.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1625unno, hs_y26CLTN);
        };
        var hs_sat26CMjn = new $hs.Thunk();
        hs_sat26CMjn.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1625unno, hs_x26CLTL);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26CMjn, hs_sat26CMjp);
    };
    hs_zdcfromRational125unnz.evaluate = function (hs_zddIntegral26CLTT, hs_eta26CLTX) {
        var hs_zddReal2126CLTU = new $hs.Thunk();
        hs_zddReal2126CLTU.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLTT);
        };
        var hs_zddNum2726CLTW = new $hs.Thunk();
        hs_zddNum2726CLTW.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLTU);
        };
        var hs_wild26CMjr = hs_eta26CLTX;
        if (hs_eta26CLTX.notEvaluated) {
            hs_wild26CMjr = hs_eta26CLTX.hscall();
        }
        var hs_x26CLU1 = hs_wild26CMjr.data[0];
        var hs_y26CLU3 = hs_wild26CMjr.data[1];
        var hs_sat26CMjs = new $hs.Thunk();
        hs_sat26CMjs.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLTW, hs_y26CLU3);
        };
        var hs_sat26CMjq = new $hs.Thunk();
        hs_sat26CMjq.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLTW, hs_x26CLU1);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall(hs_zddIntegral26CLTT, hs_sat26CMjq, hs_sat26CMjs);
    };
    hs_a3225unnP.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a3325unnQ.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_zdczs125unn0.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a3425unnR.evaluate = function (hs_eta1cW6l3) {
        return hs_zdcrecip125undW.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta1cW6l3);
    };
    hs_a3525unnS.evaluate = function (hs_eta1cW6l3) {
        return hs_zdcfromRational125unnz.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta1cW6l3);
    };
    hs_zdfFractionalRatio125unnT.data = [hs_a3225unnP, hs_a3325unnQ, hs_a3425unnR, hs_a3525unnS];
    this.hs_zdfFractionalRatio.evaluate = function (hs_zddIntegral26CLUb) {
        var hs_sat26CMju = new $hs.Func(1);
        hs_sat26CMju.evaluate = function (hs_eta1cW6l3) {
            return hs_zdcfromRational125unnz.hscall(hs_zddIntegral26CLUb, hs_eta1cW6l3);
        };
        var hs_sat26CMjv = new $hs.Func(1);
        hs_sat26CMjv.evaluate = function (hs_eta1cW6l3) {
            return hs_zdcrecip125undW.hscall(hs_zddIntegral26CLUb, hs_eta1cW6l3);
        };
        var hs_sat26CMjw = new $hs.Func(2);
        hs_sat26CMjw.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczs125unn0.hscall(hs_zddIntegral26CLUb, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CMjt = new $hs.Thunk();
        hs_sat26CMjt.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall(hs_zddIntegral26CLUb);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CMjt, hs_sat26CMjw, hs_sat26CMjv, hs_sat26CMju];
        return $res;
    };
    hs_a3625uno0.evaluate = function (hs_zddIntegral26CLUr, hs_eta26CLUj) {
        var hs_wild26CMjy = hs_eta26CLUj;
        if (hs_eta26CLUj.notEvaluated) {
            hs_wild26CMjy = hs_eta26CLUj.hscall();
        }
        var hs_x26CLUo = hs_wild26CMjy.data[0];
        var hs_y26CLUp = hs_wild26CMjy.data[1];
        var hs_ds26CLUq = new $hs.Thunk();
        hs_ds26CLUq.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_x26CLUo, hs_y26CLUp);
        };
        var hs_sat26CMjz = new $hs.Thunk();
        hs_sat26CMjz.evaluateOnce = function () {
            var hs_wild126CMjG = hs_ds26CLUq;
            if (hs_ds26CLUq.notEvaluated) {
                hs_wild126CMjG = hs_ds26CLUq.hscall();
            }
            var hs_r26CLUE = hs_wild126CMjG.data[1];
            var hs_tpl26CLUG = hs_r26CLUE;
            if (hs_r26CLUE.notEvaluated) {
                hs_tpl26CLUG = hs_r26CLUE.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [hs_tpl26CLUG, hs_y26CLUp];
            return $res;
        };
        var hs_sat26CMjx = new $hs.Thunk();
        hs_sat26CMjx.evaluateOnce = function () {
            var hs_sat26CMjA = new $hs.Thunk();
            hs_sat26CMjA.evaluateOnce = function () {
                var hs_sat26CMjD = new $hs.Thunk();
                hs_sat26CMjD.evaluateOnce = function () {
                    var hs_wild126CMjF = hs_ds26CLUq;
                    if (hs_ds26CLUq.notEvaluated) {
                        hs_wild126CMjF = hs_ds26CLUq.hscall();
                    }
                    var hs_q26CLUx = hs_wild126CMjF.data[0];
                    if (hs_q26CLUx.notEvaluated) {
                        return hs_q26CLUx.hscall();
                    } else {
                        return hs_q26CLUx;
                    }
                };
                return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26CMjD);
            };
            var hs_sat26CMjB = $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLUr);
            var hs_sat26CMjC = $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_sat26CMjB);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26CMjC, hs_sat26CMjA);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CMjx, hs_sat26CMjz];
        return $res;
    };
    hs_a3725unos.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a3825unot.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfRealRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    this.hs_zdfRealFracRatio.evaluate = function (hs_zddIntegral26CLVe) {
        var hs_sat26CMjJ = new $hs.Thunk();
        hs_sat26CMjJ.evaluateOnce = function () {
            return hs_zdcfloor25unov.hscall(hs_zddIntegral26CLVe);
        };
        var hs_sat26CMjK = new $hs.Thunk();
        hs_sat26CMjK.evaluateOnce = function () {
            return hs_zdcceiling25unow.hscall(hs_zddIntegral26CLVe);
        };
        var hs_sat26CMjL = new $hs.Thunk();
        hs_sat26CMjL.evaluateOnce = function () {
            return hs_zdcround25unox.hscall(hs_zddIntegral26CLVe);
        };
        var hs_sat26CMjM = new $hs.Func(1);
        hs_sat26CMjM.evaluate = function (hs_eta1cW6l3) {
            return hs_zdctruncate25unou.hscall(hs_zddIntegral26CLVe, hs_eta1cW6l3);
        };
        var hs_sat26CMjN = new $hs.Func(2);
        hs_sat26CMjN.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcproperFraction125uncF.hscall(hs_zddIntegral26CLVe, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CMjO = new $hs.Thunk();
        hs_sat26CMjO.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall(hs_zddIntegral26CLVe);
        };
        var hs_sat26CMjI = new $hs.Thunk();
        hs_sat26CMjI.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfRealRatio.hscall(hs_zddIntegral26CLVe);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CMjI, hs_sat26CMjO, hs_sat26CMjN, hs_sat26CMjM, hs_sat26CMjL, hs_sat26CMjK, hs_sat26CMjJ];
        return $res;
    };
    hs_zdctruncate25unou.evaluate = function (hs_zddIntegral26CLVp, hs_eta26CLVs) {
        var hs_zddRealFrac326CLVq = new $hs.Thunk();
        hs_zddRealFrac326CLVq.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfRealFracRatio.hscall(hs_zddIntegral26CLVp);
        };
        var hs_sat26CMkL = new $hs.Func(1);
        hs_sat26CMkL.evaluate = function (hs_x26CLVt) {
            var hs_wild26CMkN = $hs.modules.GHCziReal.hs_properFraction.hscall(hs_zddRealFrac326CLVq, hs_eta26CLVs, hs_x26CLVt);
            var hs_m26CLVx = hs_wild26CMkN.data[0];
            if (hs_m26CLVx.notEvaluated) {
                return hs_m26CLVx.hscall();
            } else {
                return hs_m26CLVx;
            }
        };
        if (hs_sat26CMkL.notEvaluated) {
            return hs_sat26CMkL.hscall();
        } else {
            return hs_sat26CMkL;
        }
    };
    hs_zdcfloor25unov.evaluate = function (hs_zddIntegral26CLVB) {
        var hs_zddRealFrac326CLVC = new $hs.Thunk();
        hs_zddRealFrac326CLVC.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfRealFracRatio.hscall(hs_zddIntegral26CLVB);
        };
        var hs_zddFractional726CLVE = new $hs.Thunk();
        hs_zddFractional726CLVE.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp2RealFrac.hscall(hs_zddRealFrac326CLVC);
        };
        var hs_zddNum2726CLVG = new $hs.Thunk();
        hs_zddNum2726CLVG.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional726CLVE);
        };
        var hs_zddReal2126CLVI = new $hs.Thunk();
        hs_zddReal2126CLVI.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac326CLVC);
        };
        var hs_zddOrd1726CLVK = new $hs.Thunk();
        hs_zddOrd1726CLVK.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2126CLVI);
        };
        var hs_sat26CMjP = new $hs.Func(1);
        hs_sat26CMjP.evaluate = function (hs_zddIntegral126CLVN) {
            var hs_zddReal2226CLVO = new $hs.Thunk();
            hs_zddReal2226CLVO.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral126CLVN);
            };
            var hs_zddNum2826CLVQ = new $hs.Thunk();
            hs_zddNum2826CLVQ.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226CLVO);
            };
            var hs_sat26CLWf = new $hs.Func(1);
            hs_sat26CLWf.evaluate = function (hs_x26CLVT) {
                var hs_ds26CLVU = new $hs.Thunk();
                hs_ds26CLVU.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_properFraction.hscall(hs_zddRealFrac326CLVC, hs_zddIntegral126CLVN, hs_x26CLVT);
                };
                var hs_sat26CMjR = new $hs.Thunk();
                hs_sat26CMjR.evaluateOnce = function () {
                    var hs_sat26CMk2 = new $hs.Thunk();
                    hs_sat26CMk2.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLVG, hs_sat26CMk2);
                };
                var hs_sat26CMjS = new $hs.Thunk();
                hs_sat26CMjS.evaluateOnce = function () {
                    var hs_wild26CMk1 = hs_ds26CLVU;
                    if (hs_ds26CLVU.notEvaluated) {
                        hs_wild26CMk1 = hs_ds26CLVU.hscall();
                    }
                    var hs_r26CLVY = hs_wild26CMk1.data[1];
                    if (hs_r26CLVY.notEvaluated) {
                        return hs_r26CLVY.hscall();
                    } else {
                        return hs_r26CLVY;
                    }
                };
                var hs_wild26CMjT = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1726CLVK, hs_sat26CMjS, hs_sat26CMjR);
                switch (hs_wild26CMjT.tag) {
                case 1:
                    var hs_wild126CMjZ = hs_ds26CLVU;
                    if (hs_ds26CLVU.notEvaluated) {
                        hs_wild126CMjZ = hs_ds26CLVU.hscall();
                    }
                    var hs_n26CLW6 = hs_wild126CMjZ.data[0];
                    if (hs_n26CLW6.notEvaluated) {
                        return hs_n26CLW6.hscall();
                    } else {
                        return hs_n26CLW6;
                    }
                case 2:
                    var hs_sat26CMjU = new $hs.Thunk();
                    hs_sat26CMjU.evaluateOnce = function () {
                        var hs_sat26CMjX = new $hs.Thunk();
                        hs_sat26CMjX.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2826CLVQ, hs_sat26CMjX);
                    };
                    var hs_sat26CMjQ = new $hs.Thunk();
                    hs_sat26CMjQ.evaluateOnce = function () {
                        var hs_wild126CMjW = hs_ds26CLVU;
                        if (hs_ds26CLVU.notEvaluated) {
                            hs_wild126CMjW = hs_ds26CLVU.hscall();
                        }
                        var hs_n26CLWa = hs_wild126CMjW.data[0];
                        if (hs_n26CLWa.notEvaluated) {
                            return hs_n26CLWa.hscall();
                        } else {
                            return hs_n26CLWa;
                        }
                    };
                    return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum2826CLVQ, hs_sat26CMjQ, hs_sat26CMjU);
                }
            };
            if (hs_sat26CLWf.notEvaluated) {
                return hs_sat26CLWf.hscall();
            } else {
                return hs_sat26CLWf;
            }
        };
        if (hs_sat26CMjP.notEvaluated) {
            return hs_sat26CMjP.hscall();
        } else {
            return hs_sat26CMjP;
        }
    };
    hs_zdcceiling25unow.evaluate = function (hs_zddIntegral26CLWj) {
        var hs_zddRealFrac326CLWk = new $hs.Thunk();
        hs_zddRealFrac326CLWk.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfRealFracRatio.hscall(hs_zddIntegral26CLWj);
        };
        var hs_zddFractional726CLWm = new $hs.Thunk();
        hs_zddFractional726CLWm.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp2RealFrac.hscall(hs_zddRealFrac326CLWk);
        };
        var hs_zddNum2726CLWo = new $hs.Thunk();
        hs_zddNum2726CLWo.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional726CLWm);
        };
        var hs_zddReal2126CLWq = new $hs.Thunk();
        hs_zddReal2126CLWq.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac326CLWk);
        };
        var hs_zddOrd1726CLWs = new $hs.Thunk();
        hs_zddOrd1726CLWs.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2126CLWq);
        };
        var hs_sat26CMk3 = new $hs.Func(1);
        hs_sat26CMk3.evaluate = function (hs_zddIntegral126CLWv) {
            var hs_zddReal2226CLWw = new $hs.Thunk();
            hs_zddReal2226CLWw.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral126CLWv);
            };
            var hs_zddNum2826CLWy = new $hs.Thunk();
            hs_zddNum2826CLWy.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226CLWw);
            };
            var hs_sat26CLWX = new $hs.Func(1);
            hs_sat26CLWX.evaluate = function (hs_x26CLWB) {
                var hs_ds26CLWC = new $hs.Thunk();
                hs_ds26CLWC.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_properFraction.hscall(hs_zddRealFrac326CLWk, hs_zddIntegral126CLWv, hs_x26CLWB);
                };
                var hs_sat26CMk5 = new $hs.Thunk();
                hs_sat26CMk5.evaluateOnce = function () {
                    var hs_sat26CMkg = new $hs.Thunk();
                    hs_sat26CMkg.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLWo, hs_sat26CMkg);
                };
                var hs_sat26CMk6 = new $hs.Thunk();
                hs_sat26CMk6.evaluateOnce = function () {
                    var hs_wild26CMkf = hs_ds26CLWC;
                    if (hs_ds26CLWC.notEvaluated) {
                        hs_wild26CMkf = hs_ds26CLWC.hscall();
                    }
                    var hs_r26CLWG = hs_wild26CMkf.data[1];
                    if (hs_r26CLWG.notEvaluated) {
                        return hs_r26CLWG.hscall();
                    } else {
                        return hs_r26CLWG;
                    }
                };
                var hs_wild26CMk7 = $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd1726CLWs, hs_sat26CMk6, hs_sat26CMk5);
                switch (hs_wild26CMk7.tag) {
                case 1:
                    var hs_wild126CMkd = hs_ds26CLWC;
                    if (hs_ds26CLWC.notEvaluated) {
                        hs_wild126CMkd = hs_ds26CLWC.hscall();
                    }
                    var hs_n26CLWO = hs_wild126CMkd.data[0];
                    if (hs_n26CLWO.notEvaluated) {
                        return hs_n26CLWO.hscall();
                    } else {
                        return hs_n26CLWO;
                    }
                case 2:
                    var hs_sat26CMk8 = new $hs.Thunk();
                    hs_sat26CMk8.evaluateOnce = function () {
                        var hs_sat26CMkb = new $hs.Thunk();
                        hs_sat26CMkb.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2826CLWy, hs_sat26CMkb);
                    };
                    var hs_sat26CMk4 = new $hs.Thunk();
                    hs_sat26CMk4.evaluateOnce = function () {
                        var hs_wild126CMka = hs_ds26CLWC;
                        if (hs_ds26CLWC.notEvaluated) {
                            hs_wild126CMka = hs_ds26CLWC.hscall();
                        }
                        var hs_n26CLWS = hs_wild126CMka.data[0];
                        if (hs_n26CLWS.notEvaluated) {
                            return hs_n26CLWS.hscall();
                        } else {
                            return hs_n26CLWS;
                        }
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum2826CLWy, hs_sat26CMk4, hs_sat26CMk8);
                }
            };
            if (hs_sat26CLWX.notEvaluated) {
                return hs_sat26CLWX.hscall();
            } else {
                return hs_sat26CLWX;
            }
        };
        if (hs_sat26CMk3.notEvaluated) {
            return hs_sat26CMk3.hscall();
        } else {
            return hs_sat26CMk3;
        }
    };
    hs_zdcround25unox.evaluate = function (hs_zddIntegral26CLX1) {
        var hs_zddRealFrac326CLX2 = new $hs.Thunk();
        hs_zddRealFrac326CLX2.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfRealFracRatio.hscall(hs_zddIntegral26CLX1);
        };
        var hs_zddFractional726CLX4 = new $hs.Thunk();
        hs_zddFractional726CLX4.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp2RealFrac.hscall(hs_zddRealFrac326CLX2);
        };
        var hs_zddNum2726CLX6 = new $hs.Thunk();
        hs_zddNum2726CLX6.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional726CLX4);
        };
        var hs_zddEq726CLX8 = new $hs.Thunk();
        hs_zddEq726CLX8.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum2726CLX6);
        };
        var hs_zddReal2126CLXa = new $hs.Thunk();
        hs_zddReal2126CLXa.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac326CLX2);
        };
        var hs_zddOrd1726CLXc = new $hs.Thunk();
        hs_zddOrd1726CLXc.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2126CLXa);
        };
        var hs_sat26CMkh = new $hs.Func(1);
        hs_sat26CMkh.evaluate = function (hs_zddIntegral126CLXf) {
            var hs_zddReal2226CLXg = new $hs.Thunk();
            hs_zddReal2226CLXg.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral126CLXf);
            };
            var hs_zddNum2826CLXi = new $hs.Thunk();
            hs_zddNum2826CLXi.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226CLXg);
            };
            var hs_sat26CLY3 = new $hs.Func(1);
            hs_sat26CLY3.evaluate = function (hs_x26CLXl) {
                var hs_ds26CLXm = new $hs.Thunk();
                hs_ds26CLXm.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_properFraction.hscall(hs_zddRealFrac326CLX2, hs_zddIntegral126CLXf, hs_x26CLXl);
                };
                var hs_r26CLXs = new $hs.Thunk();
                hs_r26CLXs.evaluateOnce = function () {
                    var hs_wild26CMkK = hs_ds26CLXm;
                    if (hs_ds26CLXm.notEvaluated) {
                        hs_wild26CMkK = hs_ds26CLXm.hscall();
                    }
                    var hs_r126CLXr = hs_wild26CMkK.data[1];
                    if (hs_r126CLXr.notEvaluated) {
                        return hs_r126CLXr.hscall();
                    } else {
                        return hs_r126CLXr;
                    }
                };
                var hs_n26CLXy = new $hs.Thunk();
                hs_n26CLXy.evaluateOnce = function () {
                    var hs_wild26CMkI = hs_ds26CLXm;
                    if (hs_ds26CLXm.notEvaluated) {
                        hs_wild26CMkI = hs_ds26CLXm.hscall();
                    }
                    var hs_n126CLXx = hs_wild26CMkI.data[0];
                    if (hs_n126CLXx.notEvaluated) {
                        return hs_n126CLXx.hscall();
                    } else {
                        return hs_n126CLXx;
                    }
                };
                var hs_m26CLXH = new $hs.Thunk();
                hs_m26CLXH.evaluateOnce = function () {
                    var hs_sat26CMkB = new $hs.Thunk();
                    hs_sat26CMkB.evaluateOnce = function () {
                        var hs_sat26CMkG = new $hs.Thunk();
                        hs_sat26CMkG.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLX6, hs_sat26CMkG);
                    };
                    var hs_wild26CMkC = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1726CLXc, hs_r26CLXs, hs_sat26CMkB);
                    switch (hs_wild26CMkC.tag) {
                    case 1:
                        var hs_sat26CMkE = new $hs.Thunk();
                        hs_sat26CMkE.evaluateOnce = function () {
                            var hs_sat26CMkF = new $hs.Thunk();
                            hs_sat26CMkF.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2826CLXi, hs_sat26CMkF);
                        };
                        return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum2826CLXi, hs_n26CLXy, hs_sat26CMkE);
                    case 2:
                        var hs_sat26CMkA = new $hs.Thunk();
                        hs_sat26CMkA.evaluateOnce = function () {
                            var hs_sat26CMkD = new $hs.Thunk();
                            hs_sat26CMkD.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2826CLXi, hs_sat26CMkD);
                        };
                        return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum2826CLXi, hs_n26CLXy, hs_sat26CMkA);
                    }
                };
                var hs_ds126CLXP = new $hs.Thunk();
                hs_ds126CLXP.evaluateOnce = function () {
                    var hs_sat26CMku = new $hs.Thunk();
                    hs_sat26CMku.evaluateOnce = function () {
                        var hs_sat26CMkw = new $hs.Thunk();
                        hs_sat26CMkw.evaluateOnce = function () {
                            var hs_sat26CMky = new $hs.Thunk();
                            hs_sat26CMky.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                            };
                            var hs_sat26CMkz = new $hs.Thunk();
                            hs_sat26CMkz.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            var hs_sat26CMkx = new $hs.Data(1);
                            hs_sat26CMkx.data = [hs_sat26CMkz, hs_sat26CMky];
                            return $hs.modules.GHCziReal.hs_fromRational.hscall(hs_zddFractional726CLX4, hs_sat26CMkx);
                        };
                        var hs_sat26CMkv = new $hs.Thunk();
                        hs_sat26CMkv.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_abs.hscall(hs_zddNum2726CLX6, hs_r26CLXs);
                        };
                        return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum2726CLX6, hs_sat26CMkv, hs_sat26CMkw);
                    };
                    return $hs.modules.GHCziNum.hs_signum.hscall(hs_zddNum2726CLX6, hs_sat26CMku);
                };
                var hs_sat26CMki = new $hs.Thunk();
                hs_sat26CMki.evaluateOnce = function () {
                    var hs_sat26CMks = new $hs.Thunk();
                    hs_sat26CMks.evaluateOnce = function () {
                        var hs_sat26CMkt = new $hs.Thunk();
                        hs_sat26CMkt.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLX6, hs_sat26CMkt);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum2726CLX6, hs_sat26CMks);
                };
                var hs_wild26CMkj = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CLX8, hs_ds126CLXP, hs_sat26CMki);
                switch (hs_wild26CMkj.tag) {
                case 1:
                    var hs_sat26CMkk = new $hs.Thunk();
                    hs_sat26CMkk.evaluateOnce = function () {
                        var hs_sat26CMkr = new $hs.Thunk();
                        hs_sat26CMkr.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLX6, hs_sat26CMkr);
                    };
                    var hs_wild126CMkl = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CLX8, hs_ds126CLXP, hs_sat26CMkk);
                    switch (hs_wild126CMkl.tag) {
                    case 1:
                        var hs_sat26CMkn = new $hs.Thunk();
                        hs_sat26CMkn.evaluateOnce = function () {
                            var hs_sat26CMkq = new $hs.Thunk();
                            hs_sat26CMkq.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLX6, hs_sat26CMkq);
                        };
                        var hs_wild226CMko = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CLX8, hs_ds126CLXP, hs_sat26CMkn);
                        switch (hs_wild226CMko.tag) {
                        case 1:
                            var hs_sat26CMkp = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("round default defn: Bad value\x00");
                            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CMkp);
                        case 2:
                            if (hs_m26CLXH.notEvaluated) {
                                return hs_m26CLXH.hscall();
                            } else {
                                return hs_m26CLXH;
                            }
                        }
                    case 2:
                        var hs_wild226CMkm = $hs.modules.GHCziReal.hs_even.hscall(hs_zddIntegral126CLXf, hs_n26CLXy);
                        switch (hs_wild226CMkm.tag) {
                        case 1:
                            if (hs_m26CLXH.notEvaluated) {
                                return hs_m26CLXH.hscall();
                            } else {
                                return hs_m26CLXH;
                            }
                        case 2:
                            if (hs_n26CLXy.notEvaluated) {
                                return hs_n26CLXy.hscall();
                            } else {
                                return hs_n26CLXy;
                            }
                        }
                    }
                case 2:
                    if (hs_n26CLXy.notEvaluated) {
                        return hs_n26CLXy.hscall();
                    } else {
                        return hs_n26CLXy;
                    }
                }
            };
            if (hs_sat26CLY3.notEvaluated) {
                return hs_sat26CLY3.hscall();
            } else {
                return hs_sat26CLY3;
            }
        };
        if (hs_sat26CMkh.notEvaluated) {
            return hs_sat26CMkh.hscall();
        } else {
            return hs_sat26CMkh;
        }
    };
    hs_zddRealFrac25unoy.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfRealFracRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddReal1325unoz.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac25unoy);
    };
    hs_zddOrd825unoA.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal1325unoz);
    };
    hs_zddFractional25unoB.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2RealFrac.hscall(hs_zddRealFrac25unoy);
    };
    hs_zddNum1725unoC.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional25unoB);
    };
    hs_zddEq225unoD.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum1725unoC);
    };
    hs_zdcround125unoE.evaluate = function (hs_zddIntegral26CLY8, hs_eta26CLYd) {
        var hs_zddReal2126CLY9 = new $hs.Thunk();
        hs_zddReal2126CLY9.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLY8);
        };
        var hs_zddNum2726CLYb = new $hs.Thunk();
        hs_zddNum2726CLYb.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLY9);
        };
        var hs_ds26CLYe = new $hs.Thunk();
        hs_ds26CLYe.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_properFraction.hscall(hs_zddRealFrac25unoy, hs_zddIntegral26CLY8, hs_eta26CLYd);
        };
        var hs_r26CLYk = new $hs.Thunk();
        hs_r26CLYk.evaluateOnce = function () {
            var hs_wild26CMlg = hs_ds26CLYe;
            if (hs_ds26CLYe.notEvaluated) {
                hs_wild26CMlg = hs_ds26CLYe.hscall();
            }
            var hs_r126CLYj = hs_wild26CMlg.data[1];
            if (hs_r126CLYj.notEvaluated) {
                return hs_r126CLYj.hscall();
            } else {
                return hs_r126CLYj;
            }
        };
        var hs_n26CLYq = new $hs.Thunk();
        hs_n26CLYq.evaluateOnce = function () {
            var hs_wild26CMle = hs_ds26CLYe;
            if (hs_ds26CLYe.notEvaluated) {
                hs_wild26CMle = hs_ds26CLYe.hscall();
            }
            var hs_n126CLYp = hs_wild26CMle.data[0];
            if (hs_n126CLYp.notEvaluated) {
                return hs_n126CLYp.hscall();
            } else {
                return hs_n126CLYp;
            }
        };
        var hs_m26CLYz = new $hs.Thunk();
        hs_m26CLYz.evaluateOnce = function () {
            var hs_sat26CMl7 = new $hs.Thunk();
            hs_sat26CMl7.evaluateOnce = function () {
                var hs_sat26CMlc = new $hs.Thunk();
                hs_sat26CMlc.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1725unoC, hs_sat26CMlc);
            };
            var hs_wild26CMl8 = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd825unoA, hs_r26CLYk, hs_sat26CMl7);
            switch (hs_wild26CMl8.tag) {
            case 1:
                var hs_sat26CMla = new $hs.Thunk();
                hs_sat26CMla.evaluateOnce = function () {
                    var hs_sat26CMlb = new $hs.Thunk();
                    hs_sat26CMlb.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLYb, hs_sat26CMlb);
                };
                return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum2726CLYb, hs_n26CLYq, hs_sat26CMla);
            case 2:
                var hs_sat26CMl6 = new $hs.Thunk();
                hs_sat26CMl6.evaluateOnce = function () {
                    var hs_sat26CMl9 = new $hs.Thunk();
                    hs_sat26CMl9.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLYb, hs_sat26CMl9);
                };
                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum2726CLYb, hs_n26CLYq, hs_sat26CMl6);
            }
        };
        var hs_ds126CLYH = new $hs.Thunk();
        hs_ds126CLYH.evaluateOnce = function () {
            var hs_sat26CMl0 = new $hs.Thunk();
            hs_sat26CMl0.evaluateOnce = function () {
                var hs_sat26CMl2 = new $hs.Thunk();
                hs_sat26CMl2.evaluateOnce = function () {
                    var hs_sat26CMl4 = new $hs.Thunk();
                    hs_sat26CMl4.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                    };
                    var hs_sat26CMl5 = new $hs.Thunk();
                    hs_sat26CMl5.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    var hs_sat26CMl3 = new $hs.Data(1);
                    hs_sat26CMl3.data = [hs_sat26CMl5, hs_sat26CMl4];
                    return $hs.modules.GHCziReal.hs_fromRational.hscall(hs_zddFractional25unoB, hs_sat26CMl3);
                };
                var hs_sat26CMl1 = new $hs.Thunk();
                hs_sat26CMl1.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_abs.hscall(hs_zddNum1725unoC, hs_r26CLYk);
                };
                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum1725unoC, hs_sat26CMl1, hs_sat26CMl2);
            };
            return $hs.modules.GHCziNum.hs_signum.hscall(hs_zddNum1725unoC, hs_sat26CMl0);
        };
        var hs_sat26CMkO = new $hs.Thunk();
        hs_sat26CMkO.evaluateOnce = function () {
            var hs_sat26CMkY = new $hs.Thunk();
            hs_sat26CMkY.evaluateOnce = function () {
                var hs_sat26CMkZ = new $hs.Thunk();
                hs_sat26CMkZ.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1725unoC, hs_sat26CMkZ);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum1725unoC, hs_sat26CMkY);
        };
        var hs_wild26CMkP = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq225unoD, hs_ds126CLYH, hs_sat26CMkO);
        switch (hs_wild26CMkP.tag) {
        case 1:
            var hs_sat26CMkQ = new $hs.Thunk();
            hs_sat26CMkQ.evaluateOnce = function () {
                var hs_sat26CMkX = new $hs.Thunk();
                hs_sat26CMkX.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1725unoC, hs_sat26CMkX);
            };
            var hs_wild126CMkR = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq225unoD, hs_ds126CLYH, hs_sat26CMkQ);
            switch (hs_wild126CMkR.tag) {
            case 1:
                var hs_sat26CMkT = new $hs.Thunk();
                hs_sat26CMkT.evaluateOnce = function () {
                    var hs_sat26CMkW = new $hs.Thunk();
                    hs_sat26CMkW.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1725unoC, hs_sat26CMkW);
                };
                var hs_wild226CMkU = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq225unoD, hs_ds126CLYH, hs_sat26CMkT);
                switch (hs_wild226CMkU.tag) {
                case 1:
                    var hs_sat26CMkV = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("round default defn: Bad value\x00");
                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CMkV);
                case 2:
                    if (hs_m26CLYz.notEvaluated) {
                        return hs_m26CLYz.hscall();
                    } else {
                        return hs_m26CLYz;
                    }
                }
            case 2:
                var hs_wild226CMkS = $hs.modules.GHCziReal.hs_even.hscall(hs_zddIntegral26CLY8, hs_n26CLYq);
                switch (hs_wild226CMkS.tag) {
                case 1:
                    if (hs_m26CLYz.notEvaluated) {
                        return hs_m26CLYz.hscall();
                    } else {
                        return hs_m26CLYz;
                    }
                case 2:
                    if (hs_n26CLYq.notEvaluated) {
                        return hs_n26CLYq.hscall();
                    } else {
                        return hs_n26CLYq;
                    }
                }
            }
        case 2:
            if (hs_n26CLYq.notEvaluated) {
                return hs_n26CLYq.hscall();
            } else {
                return hs_n26CLYq;
            }
        }
    };
    hs_a3925unoF.evaluateOnce = function () {
        return hs_zdcround25unox.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddRealFrac125unoG.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfRealFracRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddReal1425unoH.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac125unoG);
    };
    hs_zddOrd925unoI.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal1425unoH);
    };
    hs_zddFractional125unoJ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2RealFrac.hscall(hs_zddRealFrac125unoG);
    };
    hs_zddNum1825unoK.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional125unoJ);
    };
    hs_zdcceiling125unoL.evaluate = function (hs_zddIntegral26CLYX, hs_eta26CLZ2) {
        var hs_zddReal2126CLYY = new $hs.Thunk();
        hs_zddReal2126CLYY.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLYX);
        };
        var hs_zddNum2726CLZ0 = new $hs.Thunk();
        hs_zddNum2726CLZ0.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLYY);
        };
        var hs_ds26CLZ3 = new $hs.Thunk();
        hs_ds26CLZ3.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_properFraction.hscall(hs_zddRealFrac125unoG, hs_zddIntegral26CLYX, hs_eta26CLZ2);
        };
        var hs_sat26CMli = new $hs.Thunk();
        hs_sat26CMli.evaluateOnce = function () {
            var hs_sat26CMlt = new $hs.Thunk();
            hs_sat26CMlt.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1825unoK, hs_sat26CMlt);
        };
        var hs_sat26CMlj = new $hs.Thunk();
        hs_sat26CMlj.evaluateOnce = function () {
            var hs_wild26CMls = hs_ds26CLZ3;
            if (hs_ds26CLZ3.notEvaluated) {
                hs_wild26CMls = hs_ds26CLZ3.hscall();
            }
            var hs_r26CLZ7 = hs_wild26CMls.data[1];
            if (hs_r26CLZ7.notEvaluated) {
                return hs_r26CLZ7.hscall();
            } else {
                return hs_r26CLZ7;
            }
        };
        var hs_wild26CMlk = $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd925unoI, hs_sat26CMlj, hs_sat26CMli);
        switch (hs_wild26CMlk.tag) {
        case 1:
            var hs_wild126CMlq = hs_ds26CLZ3;
            if (hs_ds26CLZ3.notEvaluated) {
                hs_wild126CMlq = hs_ds26CLZ3.hscall();
            }
            var hs_n26CLZf = hs_wild126CMlq.data[0];
            if (hs_n26CLZf.notEvaluated) {
                return hs_n26CLZf.hscall();
            } else {
                return hs_n26CLZf;
            }
        case 2:
            var hs_sat26CMll = new $hs.Thunk();
            hs_sat26CMll.evaluateOnce = function () {
                var hs_sat26CMlo = new $hs.Thunk();
                hs_sat26CMlo.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLZ0, hs_sat26CMlo);
            };
            var hs_sat26CMlh = new $hs.Thunk();
            hs_sat26CMlh.evaluateOnce = function () {
                var hs_wild126CMln = hs_ds26CLZ3;
                if (hs_ds26CLZ3.notEvaluated) {
                    hs_wild126CMln = hs_ds26CLZ3.hscall();
                }
                var hs_n26CLZj = hs_wild126CMln.data[0];
                if (hs_n26CLZj.notEvaluated) {
                    return hs_n26CLZj.hscall();
                } else {
                    return hs_n26CLZj;
                }
            };
            return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum2726CLZ0, hs_sat26CMlh, hs_sat26CMll);
        }
    };
    hs_a4025unoM.evaluateOnce = function () {
        return hs_zdcceiling25unow.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddRealFrac225unoN.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfRealFracRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddReal1525unoO.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac225unoN);
    };
    hs_zddOrd1025unoP.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal1525unoO);
    };
    hs_zddFractional225unoQ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2RealFrac.hscall(hs_zddRealFrac225unoN);
    };
    hs_zddNum1925unoR.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional225unoQ);
    };
    hs_zdcfloor125unoS.evaluate = function (hs_zddIntegral26CLZq, hs_eta26CLZv) {
        var hs_zddReal2126CLZr = new $hs.Thunk();
        hs_zddReal2126CLZr.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CLZq);
        };
        var hs_zddNum2726CLZt = new $hs.Thunk();
        hs_zddNum2726CLZt.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CLZr);
        };
        var hs_ds26CLZw = new $hs.Thunk();
        hs_ds26CLZw.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_properFraction.hscall(hs_zddRealFrac225unoN, hs_zddIntegral26CLZq, hs_eta26CLZv);
        };
        var hs_sat26CMlv = new $hs.Thunk();
        hs_sat26CMlv.evaluateOnce = function () {
            var hs_sat26CMlG = new $hs.Thunk();
            hs_sat26CMlG.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1925unoR, hs_sat26CMlG);
        };
        var hs_sat26CMlw = new $hs.Thunk();
        hs_sat26CMlw.evaluateOnce = function () {
            var hs_wild26CMlF = hs_ds26CLZw;
            if (hs_ds26CLZw.notEvaluated) {
                hs_wild26CMlF = hs_ds26CLZw.hscall();
            }
            var hs_r26CLZA = hs_wild26CMlF.data[1];
            if (hs_r26CLZA.notEvaluated) {
                return hs_r26CLZA.hscall();
            } else {
                return hs_r26CLZA;
            }
        };
        var hs_wild26CMlx = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1025unoP, hs_sat26CMlw, hs_sat26CMlv);
        switch (hs_wild26CMlx.tag) {
        case 1:
            var hs_wild126CMlD = hs_ds26CLZw;
            if (hs_ds26CLZw.notEvaluated) {
                hs_wild126CMlD = hs_ds26CLZw.hscall();
            }
            var hs_n26CLZI = hs_wild126CMlD.data[0];
            if (hs_n26CLZI.notEvaluated) {
                return hs_n26CLZI.hscall();
            } else {
                return hs_n26CLZI;
            }
        case 2:
            var hs_sat26CMly = new $hs.Thunk();
            hs_sat26CMly.evaluateOnce = function () {
                var hs_sat26CMlB = new $hs.Thunk();
                hs_sat26CMlB.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CLZt, hs_sat26CMlB);
            };
            var hs_sat26CMlu = new $hs.Thunk();
            hs_sat26CMlu.evaluateOnce = function () {
                var hs_wild126CMlA = hs_ds26CLZw;
                if (hs_ds26CLZw.notEvaluated) {
                    hs_wild126CMlA = hs_ds26CLZw.hscall();
                }
                var hs_n26CLZM = hs_wild126CMlA.data[0];
                if (hs_n26CLZM.notEvaluated) {
                    return hs_n26CLZM.hscall();
                } else {
                    return hs_n26CLZM;
                }
            };
            return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum2726CLZt, hs_sat26CMlu, hs_sat26CMly);
        }
    };
    hs_a4125unoT.evaluateOnce = function () {
        return hs_zdcfloor25unov.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdctruncate125unoU.evaluate = function (hs_eta26CLZU) {
        var hs_zddRealFrac326CLZS = new $hs.Thunk();
        hs_zddRealFrac326CLZS.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfRealFracRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
        };
        var hs_sat26CMlH = new $hs.Func(1);
        hs_sat26CMlH.evaluate = function (hs_x26CLZV) {
            var hs_wild26CMlJ = $hs.modules.GHCziReal.hs_properFraction.hscall(hs_zddRealFrac326CLZS, hs_eta26CLZU, hs_x26CLZV);
            var hs_m26CLZZ = hs_wild26CMlJ.data[0];
            if (hs_m26CLZZ.notEvaluated) {
                return hs_m26CLZZ.hscall();
            } else {
                return hs_m26CLZZ;
            }
        };
        if (hs_sat26CMlH.notEvaluated) {
            return hs_sat26CMlH.hscall();
        } else {
            return hs_sat26CMlH;
        }
    };
    hs_a4225unoV.evaluate = function (hs_eta1cW6l3) {
        return hs_zdctruncate25unou.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta1cW6l3);
    };
    hs_zdfRealFracRatio125unoW.data = [hs_a3825unot, hs_a3725unos, hs_a3625uno0, hs_a4225unoV, hs_a3925unoF, hs_a4025unoM, hs_a4125unoT];
    hs_sat26CMlL.evaluateOnce = function () {
        var hs_sat26CMlK = $hs.modules.GHCziReal.hs_zdfRealFracRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
        return $hs.modules.GHCziReal.hs_truncate.hscall(hs_sat26CMlK, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_sat26CMlM.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
    };
    hs_zdcfromEnum25untL.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CMlM, hs_sat26CMlL);
    };
    hs_zdcfromEnum125untP.evaluate = function (hs_zddIntegral26CM08) {
        var hs_sat26CMlO = new $hs.Thunk();
        hs_sat26CMlO.evaluateOnce = function () {
            var hs_sat26CMlP = $hs.modules.GHCziReal.hs_zdfRealFracRatio.hscall(hs_zddIntegral26CM08);
            return $hs.modules.GHCziReal.hs_truncate.hscall(hs_sat26CMlP, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
        };
        var hs_sat26CMlN = new $hs.Thunk();
        hs_sat26CMlN.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CMlN, hs_sat26CMlO);
    };
    hs_zddFractional325untV.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdcenumFrom25untW.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.GHCziReal.hs_numericEnumFrom.hscall(hs_zddFractional325untV, hs_eta1cW6l3);
    };
    hs_zdcenumFrom125untX.evaluate = function (hs_zddIntegral26CM0f) {
        var hs_sat26CMlQ = new $hs.Thunk();
        hs_sat26CMlQ.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall(hs_zddIntegral26CM0f);
        };
        return $hs.modules.GHCziReal.hs_numericEnumFrom.hscall(hs_sat26CMlQ);
    };
    hs_zddFractional425unu1.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdcenumFromThen25unu2.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.GHCziReal.hs_numericEnumFromThen.hscall(hs_zddFractional425unu1, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcenumFromThen125unu3.evaluate = function (hs_zddIntegral26CM0l) {
        var hs_sat26CMlR = new $hs.Thunk();
        hs_sat26CMlR.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall(hs_zddIntegral26CM0l);
        };
        return $hs.modules.GHCziReal.hs_numericEnumFromThen.hscall(hs_sat26CMlR);
    };
    hs_zddFractional525unu7.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddOrd1125unu8.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdcenumFromTo25unu9.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.GHCziReal.hs_numericEnumFromTo.hscall(hs_zddOrd1125unu8, hs_zddFractional525unu7, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcenumFromTo125unua.evaluate = function (hs_zddIntegral26CM0s) {
        var hs_sat26CMlT = new $hs.Thunk();
        hs_sat26CMlT.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall(hs_zddIntegral26CM0s);
        };
        var hs_sat26CMlS = new $hs.Thunk();
        hs_sat26CMlS.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddIntegral26CM0s);
        };
        return $hs.modules.GHCziReal.hs_numericEnumFromTo.hscall(hs_sat26CMlS, hs_sat26CMlT);
    };
    hs_zddFractional625unuf.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddOrd1225unug.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdcenumFromThenTo25unuh.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.GHCziReal.hs_numericEnumFromThenTo.hscall(hs_zddOrd1225unug, hs_zddFractional625unuf, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcenumFromThenTo125unui.evaluate = function (hs_zddIntegral26CM0A) {
        var hs_sat26CMlV = new $hs.Thunk();
        hs_sat26CMlV.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall(hs_zddIntegral26CM0A);
        };
        var hs_sat26CMlU = new $hs.Thunk();
        hs_sat26CMlU.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddIntegral26CM0A);
        };
        return $hs.modules.GHCziReal.hs_numericEnumFromThenTo.hscall(hs_sat26CMlU, hs_sat26CMlV);
    };
    hs_zddReal1625unun.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zddNum2025unuo.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1625unun);
    };
    hs_zddOrd1325unup.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal1625unun);
    };
    hs_zddEq325unuq.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1325unup);
    };
    hs_zc125unur.evaluate = function (hs_x026CM1Q, hs_y026CM0K) {
        var hs_sat26CMlW = new $hs.Thunk();
        hs_sat26CMlW.evaluateOnce = function () {
            var hs_sat26CMmy = new $hs.Thunk();
            hs_sat26CMmy.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2025unuo, hs_sat26CMmy);
        };
        var hs_wild26CMlX = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1325unup, hs_y026CM0K, hs_sat26CMlW);
        switch (hs_wild26CMlX.tag) {
        case 1:
            var hs_sat26CMm0 = new $hs.Thunk();
            hs_sat26CMm0.evaluateOnce = function () {
                var hs_sat26CMmx = new $hs.Thunk();
                hs_sat26CMmx.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2025unuo, hs_sat26CMmx);
            };
            var hs_wild126CMm1 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq325unuq, hs_y026CM0K, hs_sat26CMm0);
            switch (hs_wild126CMm1.tag) {
            case 1:
                var hs_zddReal2126CM0S = new $hs.Thunk();
                hs_zddReal2126CM0S.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
                };
                var hs_zddNum2726CM0U = new $hs.Thunk();
                hs_zddNum2726CM0U.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CM0S);
                };
                var hs_a5726CM0W = new $hs.Thunk();
                hs_a5726CM0W.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2126CM0S);
                };
                var hs_zddEq726CM0Y = new $hs.Thunk();
                hs_zddEq726CM0Y.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_a5726CM0W);
                };
                var hs_f26CM1L = new $hs.Func(2);
                hs_f26CM1L.evaluate = function (hs_x26CM1D, hs_y26CM12) {
                    var hs_wild226CMm4 = $hs.modules.GHCziReal.hs_even.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_y26CM12);
                    switch (hs_wild226CMm4.tag) {
                    case 1:
                        var hs_sat26CMm7 = new $hs.Thunk();
                        hs_sat26CMm7.evaluateOnce = function () {
                            var hs_sat26CMmw = new $hs.Thunk();
                            hs_sat26CMmw.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM0U, hs_sat26CMmw);
                        };
                        var hs_wild326CMm8 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CM0Y, hs_y26CM12, hs_sat26CMm7);
                        switch (hs_wild326CMm8.tag) {
                        case 1:
                            var hs_zddReal2226CM18 = new $hs.Thunk();
                            hs_zddReal2226CM18.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
                            };
                            var hs_zddNum2826CM1a = new $hs.Thunk();
                            hs_zddNum2826CM1a.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226CM18);
                            };
                            var hs_a5826CM1c = new $hs.Thunk();
                            hs_a5826CM1c.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2226CM18);
                            };
                            var hs_zddEq826CM1e = new $hs.Thunk();
                            hs_zddEq826CM1e.evaluateOnce = function () {
                                return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_a5826CM1c);
                            };
                            var hs_g26CM1p = new $hs.Func(3);
                            hs_g26CM1p.evaluate = function (hs_x126CM1o, hs_y126CM1j, hs_zz26CM1x) {
                                var hs_wild426CMmd = $hs.modules.GHCziReal.hs_even.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_y126CM1j);
                                switch (hs_wild426CMmd.tag) {
                                case 1:
                                    var hs_sat26CMmg = new $hs.Thunk();
                                    hs_sat26CMmg.evaluateOnce = function () {
                                        var hs_sat26CMmq = new $hs.Thunk();
                                        hs_sat26CMmq.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2826CM1a, hs_sat26CMmq);
                                    };
                                    var hs_wild526CMmh = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826CM1e, hs_y126CM1j, hs_sat26CMmg);
                                    switch (hs_wild526CMmh.tag) {
                                    case 1:
                                        var hs_sat26CMmj = new $hs.Thunk();
                                        hs_sat26CMmj.evaluateOnce = function () {
                                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_x126CM1o, hs_zz26CM1x);
                                        };
                                        var hs_sat26CMmk = new $hs.Thunk();
                                        hs_sat26CMmk.evaluateOnce = function () {
                                            var hs_sat26CMmm = new $hs.Thunk();
                                            hs_sat26CMmm.evaluateOnce = function () {
                                                var hs_sat26CMmp = new $hs.Thunk();
                                                hs_sat26CMmp.evaluateOnce = function () {
                                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                                };
                                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2826CM1a, hs_sat26CMmp);
                                            };
                                            var hs_sat26CMml = new $hs.Thunk();
                                            hs_sat26CMml.evaluateOnce = function () {
                                                var hs_sat26CMmn = new $hs.Thunk();
                                                hs_sat26CMmn.evaluateOnce = function () {
                                                    var hs_sat26CMmo = new $hs.Thunk();
                                                    hs_sat26CMmo.evaluateOnce = function () {
                                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                                    };
                                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2826CM1a, hs_sat26CMmo);
                                                };
                                                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum2826CM1a, hs_y126CM1j, hs_sat26CMmn);
                                            };
                                            return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26CMml, hs_sat26CMmm);
                                        };
                                        var hs_sat26CMmi = new $hs.Thunk();
                                        hs_sat26CMmi.evaluateOnce = function () {
                                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_x126CM1o, hs_x126CM1o);
                                        };
                                        return hs_g26CM1p.hscall(hs_sat26CMmi, hs_sat26CMmk, hs_sat26CMmj);
                                    case 2:
                                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_x126CM1o, hs_zz26CM1x);
                                    }
                                case 2:
                                    var hs_sat26CMmc = new $hs.Thunk();
                                    hs_sat26CMmc.evaluateOnce = function () {
                                        var hs_sat26CMme = new $hs.Thunk();
                                        hs_sat26CMme.evaluateOnce = function () {
                                            var hs_sat26CMmf = new $hs.Thunk();
                                            hs_sat26CMmf.evaluateOnce = function () {
                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                            };
                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2826CM1a, hs_sat26CMmf);
                                        };
                                        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_y126CM1j, hs_sat26CMme);
                                    };
                                    var hs_sat26CMmb = new $hs.Thunk();
                                    hs_sat26CMmb.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_x126CM1o, hs_x126CM1o);
                                    };
                                    return hs_g26CM1p.hscall(hs_sat26CMmb, hs_sat26CMmc, hs_zz26CM1x);
                                }
                            };
                            var hs_sat26CMma = new $hs.Thunk();
                            hs_sat26CMma.evaluateOnce = function () {
                                var hs_sat26CMms = new $hs.Thunk();
                                hs_sat26CMms.evaluateOnce = function () {
                                    var hs_sat26CMmv = new $hs.Thunk();
                                    hs_sat26CMmv.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM0U, hs_sat26CMmv);
                                };
                                var hs_sat26CMmr = new $hs.Thunk();
                                hs_sat26CMmr.evaluateOnce = function () {
                                    var hs_sat26CMmt = new $hs.Thunk();
                                    hs_sat26CMmt.evaluateOnce = function () {
                                        var hs_sat26CMmu = new $hs.Thunk();
                                        hs_sat26CMmu.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM0U, hs_sat26CMmu);
                                    };
                                    return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum2726CM0U, hs_y26CM12, hs_sat26CMmt);
                                };
                                return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26CMmr, hs_sat26CMms);
                            };
                            var hs_sat26CMm9 = new $hs.Thunk();
                            hs_sat26CMm9.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_x26CM1D, hs_x26CM1D);
                            };
                            return hs_g26CM1p.hscall(hs_sat26CMm9, hs_sat26CMma, hs_x26CM1D);
                        case 2:
                            if (hs_x26CM1D.notEvaluated) {
                                return hs_x26CM1D.hscall();
                            } else {
                                return hs_x26CM1D;
                            }
                        }
                    case 2:
                        var hs_sat26CMm3 = new $hs.Thunk();
                        hs_sat26CMm3.evaluateOnce = function () {
                            var hs_sat26CMm5 = new $hs.Thunk();
                            hs_sat26CMm5.evaluateOnce = function () {
                                var hs_sat26CMm6 = new $hs.Thunk();
                                hs_sat26CMm6.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM0U, hs_sat26CMm6);
                            };
                            return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_y26CM12, hs_sat26CMm5);
                        };
                        var hs_sat26CMm2 = new $hs.Thunk();
                        hs_sat26CMm2.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_x26CM1D, hs_x26CM1D);
                        };
                        return hs_f26CM1L.hscall(hs_sat26CMm2, hs_sat26CMm3);
                    }
                };
                return hs_f26CM1L.hscall(hs_x026CM1Q, hs_y026CM0K);
            case 2:
                var hs_sat26CMlZ = new $hs.Thunk();
                hs_sat26CMlZ.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26CMlZ);
            }
        case 2:
            var hs_sat26CMlY = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Negative exponent\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CMlY);
        }
    };
    hs_zddReal1725unvD.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zddNum2125unvE.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1725unvD);
    };
    hs_zddOrd1425unvF.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal1725unvD);
    };
    hs_zddEq425unvG.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1425unvF);
    };
    hs_zc225unvH.evaluate = function (hs_x026CM36, hs_y026CM20) {
        var hs_sat26CMmz = new $hs.Thunk();
        hs_sat26CMmz.evaluateOnce = function () {
            var hs_sat26CMnb = new $hs.Thunk();
            hs_sat26CMnb.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2125unvE, hs_sat26CMnb);
        };
        var hs_wild26CMmA = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1425unvF, hs_y026CM20, hs_sat26CMmz);
        switch (hs_wild26CMmA.tag) {
        case 1:
            var hs_sat26CMmD = new $hs.Thunk();
            hs_sat26CMmD.evaluateOnce = function () {
                var hs_sat26CMna = new $hs.Thunk();
                hs_sat26CMna.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2125unvE, hs_sat26CMna);
            };
            var hs_wild126CMmE = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq425unvG, hs_y026CM20, hs_sat26CMmD);
            switch (hs_wild126CMmE.tag) {
            case 1:
                var hs_zddReal2126CM28 = new $hs.Thunk();
                hs_zddReal2126CM28.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
                };
                var hs_zddNum2726CM2a = new $hs.Thunk();
                hs_zddNum2726CM2a.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CM28);
                };
                var hs_a5726CM2c = new $hs.Thunk();
                hs_a5726CM2c.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2126CM28);
                };
                var hs_zddEq726CM2e = new $hs.Thunk();
                hs_zddEq726CM2e.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_a5726CM2c);
                };
                var hs_f26CM31 = new $hs.Func(2);
                hs_f26CM31.evaluate = function (hs_x26CM2T, hs_y26CM2i) {
                    var hs_wild226CMmH = $hs.modules.GHCziReal.hs_even.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_y26CM2i);
                    switch (hs_wild226CMmH.tag) {
                    case 1:
                        var hs_sat26CMmK = new $hs.Thunk();
                        hs_sat26CMmK.evaluateOnce = function () {
                            var hs_sat26CMn9 = new $hs.Thunk();
                            hs_sat26CMn9.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM2a, hs_sat26CMn9);
                        };
                        var hs_wild326CMmL = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CM2e, hs_y26CM2i, hs_sat26CMmK);
                        switch (hs_wild326CMmL.tag) {
                        case 1:
                            var hs_zddReal2226CM2o = new $hs.Thunk();
                            hs_zddReal2226CM2o.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
                            };
                            var hs_zddNum2826CM2q = new $hs.Thunk();
                            hs_zddNum2826CM2q.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226CM2o);
                            };
                            var hs_a5826CM2s = new $hs.Thunk();
                            hs_a5826CM2s.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2226CM2o);
                            };
                            var hs_zddEq826CM2u = new $hs.Thunk();
                            hs_zddEq826CM2u.evaluateOnce = function () {
                                return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_a5826CM2s);
                            };
                            var hs_g26CM2F = new $hs.Func(3);
                            hs_g26CM2F.evaluate = function (hs_x126CM2E, hs_y126CM2z, hs_zz26CM2N) {
                                var hs_wild426CMmQ = $hs.modules.GHCziReal.hs_even.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_y126CM2z);
                                switch (hs_wild426CMmQ.tag) {
                                case 1:
                                    var hs_sat26CMmT = new $hs.Thunk();
                                    hs_sat26CMmT.evaluateOnce = function () {
                                        var hs_sat26CMn3 = new $hs.Thunk();
                                        hs_sat26CMn3.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2826CM2q, hs_sat26CMn3);
                                    };
                                    var hs_wild526CMmU = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826CM2u, hs_y126CM2z, hs_sat26CMmT);
                                    switch (hs_wild526CMmU.tag) {
                                    case 1:
                                        var hs_sat26CMmW = new $hs.Thunk();
                                        hs_sat26CMmW.evaluateOnce = function () {
                                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x126CM2E, hs_zz26CM2N);
                                        };
                                        var hs_sat26CMmX = new $hs.Thunk();
                                        hs_sat26CMmX.evaluateOnce = function () {
                                            var hs_sat26CMmZ = new $hs.Thunk();
                                            hs_sat26CMmZ.evaluateOnce = function () {
                                                var hs_sat26CMn2 = new $hs.Thunk();
                                                hs_sat26CMn2.evaluateOnce = function () {
                                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                                };
                                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2826CM2q, hs_sat26CMn2);
                                            };
                                            var hs_sat26CMmY = new $hs.Thunk();
                                            hs_sat26CMmY.evaluateOnce = function () {
                                                var hs_sat26CMn0 = new $hs.Thunk();
                                                hs_sat26CMn0.evaluateOnce = function () {
                                                    var hs_sat26CMn1 = new $hs.Thunk();
                                                    hs_sat26CMn1.evaluateOnce = function () {
                                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                                    };
                                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2826CM2q, hs_sat26CMn1);
                                                };
                                                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum2826CM2q, hs_y126CM2z, hs_sat26CMn0);
                                            };
                                            return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26CMmY, hs_sat26CMmZ);
                                        };
                                        var hs_sat26CMmV = new $hs.Thunk();
                                        hs_sat26CMmV.evaluateOnce = function () {
                                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x126CM2E, hs_x126CM2E);
                                        };
                                        return hs_g26CM2F.hscall(hs_sat26CMmV, hs_sat26CMmX, hs_sat26CMmW);
                                    case 2:
                                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x126CM2E, hs_zz26CM2N);
                                    }
                                case 2:
                                    var hs_sat26CMmP = new $hs.Thunk();
                                    hs_sat26CMmP.evaluateOnce = function () {
                                        var hs_sat26CMmR = new $hs.Thunk();
                                        hs_sat26CMmR.evaluateOnce = function () {
                                            var hs_sat26CMmS = new $hs.Thunk();
                                            hs_sat26CMmS.evaluateOnce = function () {
                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                            };
                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2826CM2q, hs_sat26CMmS);
                                        };
                                        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_y126CM2z, hs_sat26CMmR);
                                    };
                                    var hs_sat26CMmO = new $hs.Thunk();
                                    hs_sat26CMmO.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x126CM2E, hs_x126CM2E);
                                    };
                                    return hs_g26CM2F.hscall(hs_sat26CMmO, hs_sat26CMmP, hs_zz26CM2N);
                                }
                            };
                            var hs_sat26CMmN = new $hs.Thunk();
                            hs_sat26CMmN.evaluateOnce = function () {
                                var hs_sat26CMn5 = new $hs.Thunk();
                                hs_sat26CMn5.evaluateOnce = function () {
                                    var hs_sat26CMn8 = new $hs.Thunk();
                                    hs_sat26CMn8.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM2a, hs_sat26CMn8);
                                };
                                var hs_sat26CMn4 = new $hs.Thunk();
                                hs_sat26CMn4.evaluateOnce = function () {
                                    var hs_sat26CMn6 = new $hs.Thunk();
                                    hs_sat26CMn6.evaluateOnce = function () {
                                        var hs_sat26CMn7 = new $hs.Thunk();
                                        hs_sat26CMn7.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM2a, hs_sat26CMn7);
                                    };
                                    return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum2726CM2a, hs_y26CM2i, hs_sat26CMn6);
                                };
                                return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26CMn4, hs_sat26CMn5);
                            };
                            var hs_sat26CMmM = new $hs.Thunk();
                            hs_sat26CMmM.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x26CM2T, hs_x26CM2T);
                            };
                            return hs_g26CM2F.hscall(hs_sat26CMmM, hs_sat26CMmN, hs_x26CM2T);
                        case 2:
                            if (hs_x26CM2T.notEvaluated) {
                                return hs_x26CM2T.hscall();
                            } else {
                                return hs_x26CM2T;
                            }
                        }
                    case 2:
                        var hs_sat26CMmG = new $hs.Thunk();
                        hs_sat26CMmG.evaluateOnce = function () {
                            var hs_sat26CMmI = new $hs.Thunk();
                            hs_sat26CMmI.evaluateOnce = function () {
                                var hs_sat26CMmJ = new $hs.Thunk();
                                hs_sat26CMmJ.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM2a, hs_sat26CMmJ);
                            };
                            return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_y26CM2i, hs_sat26CMmI);
                        };
                        var hs_sat26CMmF = new $hs.Thunk();
                        hs_sat26CMmF.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x26CM2T, hs_x26CM2T);
                        };
                        return hs_f26CM31.hscall(hs_sat26CMmF, hs_sat26CMmG);
                    }
                };
                return hs_f26CM31.hscall(hs_x026CM36, hs_y026CM20);
            case 2:
                var hs_sat26CMmC = new $hs.Thunk();
                hs_sat26CMmC.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26CMmC);
            }
        case 2:
            var hs_sat26CMmB = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Negative exponent\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CMmB);
        }
    };
    hs_zddReal1825unwT.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum2225unwU.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1825unwT);
    };
    hs_zddOrd1525unwV.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal1825unwT);
    };
    hs_zddEq525unwW.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1525unwV);
    };
    hs_zc325unwX.evaluate = function (hs_x026CM4m, hs_y026CM3g) {
        var hs_sat26CMnc = new $hs.Thunk();
        hs_sat26CMnc.evaluateOnce = function () {
            var hs_sat26CMnO = new $hs.Thunk();
            hs_sat26CMnO.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2225unwU, hs_sat26CMnO);
        };
        var hs_wild26CMnd = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1525unwV, hs_y026CM3g, hs_sat26CMnc);
        switch (hs_wild26CMnd.tag) {
        case 1:
            var hs_sat26CMng = new $hs.Thunk();
            hs_sat26CMng.evaluateOnce = function () {
                var hs_sat26CMnN = new $hs.Thunk();
                hs_sat26CMnN.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2225unwU, hs_sat26CMnN);
            };
            var hs_wild126CMnh = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq525unwW, hs_y026CM3g, hs_sat26CMng);
            switch (hs_wild126CMnh.tag) {
            case 1:
                var hs_zddReal2126CM3o = new $hs.Thunk();
                hs_zddReal2126CM3o.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
                };
                var hs_zddNum2726CM3q = new $hs.Thunk();
                hs_zddNum2726CM3q.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CM3o);
                };
                var hs_a5726CM3s = new $hs.Thunk();
                hs_a5726CM3s.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2126CM3o);
                };
                var hs_zddEq726CM3u = new $hs.Thunk();
                hs_zddEq726CM3u.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_a5726CM3s);
                };
                var hs_f26CM4h = new $hs.Func(2);
                hs_f26CM4h.evaluate = function (hs_x26CM49, hs_y26CM3y) {
                    var hs_wild226CMnk = $hs.modules.GHCziReal.hs_even.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_y26CM3y);
                    switch (hs_wild226CMnk.tag) {
                    case 1:
                        var hs_sat26CMnn = new $hs.Thunk();
                        hs_sat26CMnn.evaluateOnce = function () {
                            var hs_sat26CMnM = new $hs.Thunk();
                            hs_sat26CMnM.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM3q, hs_sat26CMnM);
                        };
                        var hs_wild326CMno = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CM3u, hs_y26CM3y, hs_sat26CMnn);
                        switch (hs_wild326CMno.tag) {
                        case 1:
                            var hs_zddReal2226CM3E = new $hs.Thunk();
                            hs_zddReal2226CM3E.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
                            };
                            var hs_zddNum2826CM3G = new $hs.Thunk();
                            hs_zddNum2826CM3G.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226CM3E);
                            };
                            var hs_a5826CM3I = new $hs.Thunk();
                            hs_a5826CM3I.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2226CM3E);
                            };
                            var hs_zddEq826CM3K = new $hs.Thunk();
                            hs_zddEq826CM3K.evaluateOnce = function () {
                                return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_a5826CM3I);
                            };
                            var hs_g26CM3V = new $hs.Func(3);
                            hs_g26CM3V.evaluate = function (hs_x126CM3U, hs_y126CM3P, hs_zz26CM43) {
                                var hs_wild426CMnt = $hs.modules.GHCziReal.hs_even.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_y126CM3P);
                                switch (hs_wild426CMnt.tag) {
                                case 1:
                                    var hs_sat26CMnw = new $hs.Thunk();
                                    hs_sat26CMnw.evaluateOnce = function () {
                                        var hs_sat26CMnG = new $hs.Thunk();
                                        hs_sat26CMnG.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2826CM3G, hs_sat26CMnG);
                                    };
                                    var hs_wild526CMnx = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826CM3K, hs_y126CM3P, hs_sat26CMnw);
                                    switch (hs_wild526CMnx.tag) {
                                    case 1:
                                        var hs_sat26CMnz = new $hs.Thunk();
                                        hs_sat26CMnz.evaluateOnce = function () {
                                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x126CM3U, hs_zz26CM43);
                                        };
                                        var hs_sat26CMnA = new $hs.Thunk();
                                        hs_sat26CMnA.evaluateOnce = function () {
                                            var hs_sat26CMnC = new $hs.Thunk();
                                            hs_sat26CMnC.evaluateOnce = function () {
                                                var hs_sat26CMnF = new $hs.Thunk();
                                                hs_sat26CMnF.evaluateOnce = function () {
                                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                                };
                                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2826CM3G, hs_sat26CMnF);
                                            };
                                            var hs_sat26CMnB = new $hs.Thunk();
                                            hs_sat26CMnB.evaluateOnce = function () {
                                                var hs_sat26CMnD = new $hs.Thunk();
                                                hs_sat26CMnD.evaluateOnce = function () {
                                                    var hs_sat26CMnE = new $hs.Thunk();
                                                    hs_sat26CMnE.evaluateOnce = function () {
                                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                                    };
                                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2826CM3G, hs_sat26CMnE);
                                                };
                                                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum2826CM3G, hs_y126CM3P, hs_sat26CMnD);
                                            };
                                            return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26CMnB, hs_sat26CMnC);
                                        };
                                        var hs_sat26CMny = new $hs.Thunk();
                                        hs_sat26CMny.evaluateOnce = function () {
                                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x126CM3U, hs_x126CM3U);
                                        };
                                        return hs_g26CM3V.hscall(hs_sat26CMny, hs_sat26CMnA, hs_sat26CMnz);
                                    case 2:
                                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x126CM3U, hs_zz26CM43);
                                    }
                                case 2:
                                    var hs_sat26CMns = new $hs.Thunk();
                                    hs_sat26CMns.evaluateOnce = function () {
                                        var hs_sat26CMnu = new $hs.Thunk();
                                        hs_sat26CMnu.evaluateOnce = function () {
                                            var hs_sat26CMnv = new $hs.Thunk();
                                            hs_sat26CMnv.evaluateOnce = function () {
                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                            };
                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2826CM3G, hs_sat26CMnv);
                                        };
                                        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_y126CM3P, hs_sat26CMnu);
                                    };
                                    var hs_sat26CMnr = new $hs.Thunk();
                                    hs_sat26CMnr.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x126CM3U, hs_x126CM3U);
                                    };
                                    return hs_g26CM3V.hscall(hs_sat26CMnr, hs_sat26CMns, hs_zz26CM43);
                                }
                            };
                            var hs_sat26CMnq = new $hs.Thunk();
                            hs_sat26CMnq.evaluateOnce = function () {
                                var hs_sat26CMnI = new $hs.Thunk();
                                hs_sat26CMnI.evaluateOnce = function () {
                                    var hs_sat26CMnL = new $hs.Thunk();
                                    hs_sat26CMnL.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM3q, hs_sat26CMnL);
                                };
                                var hs_sat26CMnH = new $hs.Thunk();
                                hs_sat26CMnH.evaluateOnce = function () {
                                    var hs_sat26CMnJ = new $hs.Thunk();
                                    hs_sat26CMnJ.evaluateOnce = function () {
                                        var hs_sat26CMnK = new $hs.Thunk();
                                        hs_sat26CMnK.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM3q, hs_sat26CMnK);
                                    };
                                    return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum2726CM3q, hs_y26CM3y, hs_sat26CMnJ);
                                };
                                return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26CMnH, hs_sat26CMnI);
                            };
                            var hs_sat26CMnp = new $hs.Thunk();
                            hs_sat26CMnp.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x26CM49, hs_x26CM49);
                            };
                            return hs_g26CM3V.hscall(hs_sat26CMnp, hs_sat26CMnq, hs_x26CM49);
                        case 2:
                            if (hs_x26CM49.notEvaluated) {
                                return hs_x26CM49.hscall();
                            } else {
                                return hs_x26CM49;
                            }
                        }
                    case 2:
                        var hs_sat26CMnj = new $hs.Thunk();
                        hs_sat26CMnj.evaluateOnce = function () {
                            var hs_sat26CMnl = new $hs.Thunk();
                            hs_sat26CMnl.evaluateOnce = function () {
                                var hs_sat26CMnm = new $hs.Thunk();
                                hs_sat26CMnm.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM3q, hs_sat26CMnm);
                            };
                            return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_y26CM3y, hs_sat26CMnl);
                        };
                        var hs_sat26CMni = new $hs.Thunk();
                        hs_sat26CMni.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x26CM49, hs_x26CM49);
                        };
                        return hs_f26CM4h.hscall(hs_sat26CMni, hs_sat26CMnj);
                    }
                };
                return hs_f26CM4h.hscall(hs_x026CM4m, hs_y026CM3g);
            case 2:
                var hs_sat26CMnf = new $hs.Thunk();
                hs_sat26CMnf.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26CMnf);
            }
        case 2:
            var hs_sat26CMne = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Negative exponent\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CMne);
        }
    };
    this.hs_zc.evaluate = function (hs_zddNum2726CM5f, hs_zddIntegral26CM4u, hs_eta26CM5I, hs_eta126CM4A) {
        var hs_zddReal2126CM4v = new $hs.Thunk();
        hs_zddReal2126CM4v.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CM4u);
        };
        var hs_zddNum2826CM4x = new $hs.Thunk();
        hs_zddNum2826CM4x.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CM4v);
        };
        var hs_zddOrd1726CM4z = new $hs.Thunk();
        hs_zddOrd1726CM4z.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2126CM4v);
        };
        var hs_sat26CMnP = new $hs.Thunk();
        hs_sat26CMnP.evaluateOnce = function () {
            var hs_sat26CMos = new $hs.Thunk();
            hs_sat26CMos.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2826CM4x, hs_sat26CMos);
        };
        var hs_wild26CMnQ = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1726CM4z, hs_eta126CM4A, hs_sat26CMnP);
        switch (hs_wild26CMnQ.tag) {
        case 1:
            var hs_sat26CMnT = new $hs.Thunk();
            hs_sat26CMnT.evaluateOnce = function () {
                var hs_sat26CMor = new $hs.Thunk();
                hs_sat26CMor.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2826CM4x, hs_sat26CMor);
            };
            var hs_sat26CMnU = $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1726CM4z);
            var hs_wild126CMnV = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26CMnU, hs_eta126CM4A, hs_sat26CMnT);
            switch (hs_wild126CMnV.tag) {
            case 1:
                var hs_zddReal2226CM4J = new $hs.Thunk();
                hs_zddReal2226CM4J.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CM4u);
                };
                var hs_zddNum2926CM4L = new $hs.Thunk();
                hs_zddNum2926CM4L.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2226CM4J);
                };
                var hs_a5726CM4N = new $hs.Thunk();
                hs_a5726CM4N.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2226CM4J);
                };
                var hs_zddEq726CM4P = new $hs.Thunk();
                hs_zddEq726CM4P.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_a5726CM4N);
                };
                var hs_f26CM5D = new $hs.Func(2);
                hs_f26CM5D.evaluate = function (hs_x26CM5v, hs_y26CM4T) {
                    var hs_wild226CMnY = $hs.modules.GHCziReal.hs_even.hscall(hs_zddIntegral26CM4u, hs_y26CM4T);
                    switch (hs_wild226CMnY.tag) {
                    case 1:
                        var hs_sat26CMo1 = new $hs.Thunk();
                        hs_sat26CMo1.evaluateOnce = function () {
                            var hs_sat26CMoq = new $hs.Thunk();
                            hs_sat26CMoq.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2926CM4L, hs_sat26CMoq);
                        };
                        var hs_wild326CMo2 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CM4P, hs_y26CM4T, hs_sat26CMo1);
                        switch (hs_wild326CMo2.tag) {
                        case 1:
                            var hs_zddReal2326CM4Z = new $hs.Thunk();
                            hs_zddReal2326CM4Z.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CM4u);
                            };
                            var hs_zddNum3026CM51 = new $hs.Thunk();
                            hs_zddNum3026CM51.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2326CM4Z);
                            };
                            var hs_a5826CM53 = new $hs.Thunk();
                            hs_a5826CM53.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2326CM4Z);
                            };
                            var hs_zddEq826CM55 = new $hs.Thunk();
                            hs_zddEq826CM55.evaluateOnce = function () {
                                return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_a5826CM53);
                            };
                            var hs_g26CM5h = new $hs.Func(3);
                            hs_g26CM5h.evaluate = function (hs_x126CM5g, hs_y126CM5a, hs_zz26CM5p) {
                                var hs_wild426CMo7 = $hs.modules.GHCziReal.hs_even.hscall(hs_zddIntegral26CM4u, hs_y126CM5a);
                                switch (hs_wild426CMo7.tag) {
                                case 1:
                                    var hs_sat26CMoa = new $hs.Thunk();
                                    hs_sat26CMoa.evaluateOnce = function () {
                                        var hs_sat26CMok = new $hs.Thunk();
                                        hs_sat26CMok.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3026CM51, hs_sat26CMok);
                                    };
                                    var hs_wild526CMob = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq826CM55, hs_y126CM5a, hs_sat26CMoa);
                                    switch (hs_wild526CMob.tag) {
                                    case 1:
                                        var hs_sat26CMod = new $hs.Thunk();
                                        hs_sat26CMod.evaluateOnce = function () {
                                            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum2726CM5f, hs_x126CM5g, hs_zz26CM5p);
                                        };
                                        var hs_sat26CMoe = new $hs.Thunk();
                                        hs_sat26CMoe.evaluateOnce = function () {
                                            var hs_sat26CMog = new $hs.Thunk();
                                            hs_sat26CMog.evaluateOnce = function () {
                                                var hs_sat26CMoj = new $hs.Thunk();
                                                hs_sat26CMoj.evaluateOnce = function () {
                                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                                };
                                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3026CM51, hs_sat26CMoj);
                                            };
                                            var hs_sat26CMof = new $hs.Thunk();
                                            hs_sat26CMof.evaluateOnce = function () {
                                                var hs_sat26CMoh = new $hs.Thunk();
                                                hs_sat26CMoh.evaluateOnce = function () {
                                                    var hs_sat26CMoi = new $hs.Thunk();
                                                    hs_sat26CMoi.evaluateOnce = function () {
                                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                                    };
                                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3026CM51, hs_sat26CMoi);
                                                };
                                                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum3026CM51, hs_y126CM5a, hs_sat26CMoh);
                                            };
                                            return $hs.modules.GHCziReal.hs_quot.hscall(hs_zddIntegral26CM4u, hs_sat26CMof, hs_sat26CMog);
                                        };
                                        var hs_sat26CMoc = new $hs.Thunk();
                                        hs_sat26CMoc.evaluateOnce = function () {
                                            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum2726CM5f, hs_x126CM5g, hs_x126CM5g);
                                        };
                                        return hs_g26CM5h.hscall(hs_sat26CMoc, hs_sat26CMoe, hs_sat26CMod);
                                    case 2:
                                        return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum2726CM5f, hs_x126CM5g, hs_zz26CM5p);
                                    }
                                case 2:
                                    var hs_sat26CMo6 = new $hs.Thunk();
                                    hs_sat26CMo6.evaluateOnce = function () {
                                        var hs_sat26CMo8 = new $hs.Thunk();
                                        hs_sat26CMo8.evaluateOnce = function () {
                                            var hs_sat26CMo9 = new $hs.Thunk();
                                            hs_sat26CMo9.evaluateOnce = function () {
                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                            };
                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum3026CM51, hs_sat26CMo9);
                                        };
                                        return $hs.modules.GHCziReal.hs_quot.hscall(hs_zddIntegral26CM4u, hs_y126CM5a, hs_sat26CMo8);
                                    };
                                    var hs_sat26CMo5 = new $hs.Thunk();
                                    hs_sat26CMo5.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum2726CM5f, hs_x126CM5g, hs_x126CM5g);
                                    };
                                    return hs_g26CM5h.hscall(hs_sat26CMo5, hs_sat26CMo6, hs_zz26CM5p);
                                }
                            };
                            var hs_sat26CMo4 = new $hs.Thunk();
                            hs_sat26CMo4.evaluateOnce = function () {
                                var hs_sat26CMom = new $hs.Thunk();
                                hs_sat26CMom.evaluateOnce = function () {
                                    var hs_sat26CMop = new $hs.Thunk();
                                    hs_sat26CMop.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2926CM4L, hs_sat26CMop);
                                };
                                var hs_sat26CMol = new $hs.Thunk();
                                hs_sat26CMol.evaluateOnce = function () {
                                    var hs_sat26CMon = new $hs.Thunk();
                                    hs_sat26CMon.evaluateOnce = function () {
                                        var hs_sat26CMoo = new $hs.Thunk();
                                        hs_sat26CMoo.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2926CM4L, hs_sat26CMoo);
                                    };
                                    return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum2926CM4L, hs_y26CM4T, hs_sat26CMon);
                                };
                                return $hs.modules.GHCziReal.hs_quot.hscall(hs_zddIntegral26CM4u, hs_sat26CMol, hs_sat26CMom);
                            };
                            var hs_sat26CMo3 = new $hs.Thunk();
                            hs_sat26CMo3.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum2726CM5f, hs_x26CM5v, hs_x26CM5v);
                            };
                            return hs_g26CM5h.hscall(hs_sat26CMo3, hs_sat26CMo4, hs_x26CM5v);
                        case 2:
                            if (hs_x26CM5v.notEvaluated) {
                                return hs_x26CM5v.hscall();
                            } else {
                                return hs_x26CM5v;
                            }
                        }
                    case 2:
                        var hs_sat26CMnX = new $hs.Thunk();
                        hs_sat26CMnX.evaluateOnce = function () {
                            var hs_sat26CMnZ = new $hs.Thunk();
                            hs_sat26CMnZ.evaluateOnce = function () {
                                var hs_sat26CMo0 = new $hs.Thunk();
                                hs_sat26CMo0.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2926CM4L, hs_sat26CMo0);
                            };
                            return $hs.modules.GHCziReal.hs_quot.hscall(hs_zddIntegral26CM4u, hs_y26CM4T, hs_sat26CMnZ);
                        };
                        var hs_sat26CMnW = new $hs.Thunk();
                        hs_sat26CMnW.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum2726CM5f, hs_x26CM5v, hs_x26CM5v);
                        };
                        return hs_f26CM5D.hscall(hs_sat26CMnW, hs_sat26CMnX);
                    }
                };
                return hs_f26CM5D.hscall(hs_eta26CM5I, hs_eta126CM4A);
            case 2:
                var hs_sat26CMnS = new $hs.Thunk();
                hs_sat26CMnS.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM5f, hs_sat26CMnS);
            }
        case 2:
            var hs_sat26CMnR = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Negative exponent\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CMnR);
        }
    };
    this.hs_zczvzc.evaluate = function (hs_zddIntegral26CM5P, hs_eta26CM5V, hs_eta126CM5Z) {
        var hs_zddReal2126CM5Q = new $hs.Thunk();
        hs_zddReal2126CM5Q.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CM5P);
        };
        var hs_zddNum2726CM5S = new $hs.Thunk();
        hs_zddNum2726CM5S.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CM5Q);
        };
        var hs_zddOrd1726CM5U = new $hs.Thunk();
        hs_zddOrd1726CM5U.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2126CM5Q);
        };
        var hs_wild26CMot = hs_eta26CM5V;
        if (hs_eta26CM5V.notEvaluated) {
            hs_wild26CMot = hs_eta26CM5V.hscall();
        }
        var hs_n26CM67 = hs_wild26CMot.data[0];
        var hs_d26CM69 = hs_wild26CMot.data[1];
        var hs_sat26CMou = new $hs.Thunk();
        hs_sat26CMou.evaluateOnce = function () {
            var hs_sat26CMoB = new $hs.Thunk();
            hs_sat26CMoB.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM5S, hs_sat26CMoB);
        };
        var hs_wild126CMov = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd1726CM5U, hs_eta126CM5Z, hs_sat26CMou);
        switch (hs_wild126CMov.tag) {
        case 1:
            var hs_sat26CMox = new $hs.Thunk();
            hs_sat26CMox.evaluateOnce = function () {
                var hs_sat26CMoA = new $hs.Thunk();
                hs_sat26CMoA.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM5S, hs_sat26CMoA);
            };
            var hs_sat26CMoy = $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1726CM5U);
            var hs_wild226CMoz = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26CMoy, hs_eta126CM5Z, hs_sat26CMox);
            switch (hs_wild226CMoz.tag) {
            case 1:
                var hs_tpl26CM6b = $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_zddIntegral26CM5P, hs_n26CM67, hs_eta126CM5Z);
                var hs_tpl126CM6c = $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_zddIntegral26CM5P, hs_d26CM69, hs_eta126CM5Z);
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl26CM6b, hs_tpl126CM6c];
                return $res;
            case 2:
                var hs_tpl26CM6f = $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                var hs_tpl126CM6g = $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl26CM6f, hs_tpl126CM6g];
                return $res;
            }
        case 2:
            var hs_sat26CMow = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Negative exponent\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CMow);
        }
    };
    this.hs_zczczvzczc.evaluate = function (hs_zddIntegral26CM6m, hs_eta26CM6s, hs_eta126CM6w) {
        var hs_zddReal2126CM6n = new $hs.Thunk();
        hs_zddReal2126CM6n.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CM6m);
        };
        var hs_zddNum2726CM6p = new $hs.Thunk();
        hs_zddNum2726CM6p.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CM6n);
        };
        var hs_zddOrd1726CM6r = new $hs.Thunk();
        hs_zddOrd1726CM6r.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2126CM6n);
        };
        var hs_wild26CMoC = hs_eta26CM6s;
        if (hs_eta26CM6s.notEvaluated) {
            hs_wild26CMoC = hs_eta26CM6s.hscall();
        }
        var hs_n26CM6E = hs_wild26CMoC.data[0];
        var hs_d26CM6O = hs_wild26CMoC.data[1];
        var hs_sat26CMoD = new $hs.Thunk();
        hs_sat26CMoD.evaluateOnce = function () {
            var hs_sat26CMoU = new $hs.Thunk();
            hs_sat26CMoU.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM6p, hs_sat26CMoU);
        };
        var hs_wild126CMoE = $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd1726CM6r, hs_eta126CM6w, hs_sat26CMoD);
        switch (hs_wild126CMoE.tag) {
        case 1:
            var hs_sat26CMoF = new $hs.Thunk();
            hs_sat26CMoF.evaluateOnce = function () {
                var hs_sat26CMoT = new $hs.Thunk();
                hs_sat26CMoT.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM6p, hs_sat26CMoT);
            };
            var hs_sat26CMoG = $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1726CM6r);
            var hs_wild226CMoH = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26CMoG, hs_eta126CM6w, hs_sat26CMoF);
            switch (hs_wild226CMoH.tag) {
            case 1:
                var hs_sat26CMoI = new $hs.Thunk();
                hs_sat26CMoI.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_wild326CMoJ = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26CM6E, hs_sat26CMoI);
                switch (hs_wild326CMoJ.tag) {
                case 1:
                    var hs_sat26CMoM = new $hs.Thunk();
                    hs_sat26CMoM.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    var hs_wild426CMoN = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_n26CM6E, hs_sat26CMoM);
                    switch (hs_wild426CMoN.tag) {
                    case 1:
                        var hs_dd26CM6M = new $hs.Thunk();
                        hs_dd26CM6M.evaluateOnce = function () {
                            var hs_sat26CMoS = new $hs.Thunk();
                            hs_sat26CMoS.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum2726CM6p, hs_eta126CM6w);
                            };
                            var hs_sat26CMoR = new $hs.Thunk();
                            hs_sat26CMoR.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_n26CM6E);
                            };
                            return $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_zddIntegral26CM6m, hs_sat26CMoR, hs_sat26CMoS);
                        };
                        var hs_nn26CM6Q = new $hs.Thunk();
                        hs_nn26CM6Q.evaluateOnce = function () {
                            var hs_sat26CMoQ = new $hs.Thunk();
                            hs_sat26CMoQ.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum2726CM6p, hs_eta126CM6w);
                            };
                            return $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_zddIntegral26CM6m, hs_d26CM6O, hs_sat26CMoQ);
                        };
                        var hs_wild526CMoP = $hs.modules.GHCziReal.hs_even.hscall(hs_zddIntegral26CM6m, hs_eta126CM6w);
                        switch (hs_wild526CMoP.tag) {
                        case 1:
                            var hs_tpl26CM6U = $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_nn26CM6Q);
                            var hs_tpl126CM6V = hs_dd26CM6M;
                            if (hs_dd26CM6M.notEvaluated) {
                                hs_tpl126CM6V = hs_dd26CM6M.hscall();
                            }
                            var $res = new $hs.Data(1);
                            $res.data = [hs_tpl26CM6U, hs_tpl126CM6V];
                            return $res;
                        case 2:
                            return $hs.modules.GHCziReal.hs_zdWZCzv.hscall(hs_nn26CM6Q, hs_dd26CM6M);
                        }
                    case 2:
                        var hs_sat26CMoO = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Ratio.%: zero denominator\x00");
                        return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CMoO);
                    }
                case 2:
                    var hs_sat26CMoK = new $hs.Thunk();
                    hs_sat26CMoK.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum2726CM6p, hs_eta126CM6w);
                    };
                    var hs_tpl26CM71 = $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_zddIntegral26CM6m, hs_d26CM6O, hs_sat26CMoK);
                    var hs_sat26CMoL = new $hs.Thunk();
                    hs_sat26CMoL.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum2726CM6p, hs_eta126CM6w);
                    };
                    var hs_tpl126CM72 = $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_zddIntegral26CM6m, hs_n26CM6E, hs_sat26CMoL);
                    var $res = new $hs.Data(1);
                    $res.data = [hs_tpl26CM71, hs_tpl126CM72];
                    return $res;
                }
            case 2:
                var hs_tpl26CM75 = $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                var hs_tpl126CM76 = $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl26CM75, hs_tpl126CM76];
                return $res;
            }
        case 2:
            var hs_tpl26CM79 = $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_zddIntegral26CM6m, hs_n26CM6E, hs_eta126CM6w);
            var hs_tpl126CM7a = $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_zddIntegral26CM6m, hs_d26CM6O, hs_eta126CM6w);
            var $res = new $hs.Data(1);
            $res.data = [hs_tpl26CM79, hs_tpl126CM7a];
            return $res;
        }
    };
    this.hs_zczc.evaluate = function (hs_zddFractional726CM7p, hs_zddIntegral26CM7g, hs_eta26CM7r, hs_eta126CM7l) {
        var hs_zddReal2126CM7h = new $hs.Thunk();
        hs_zddReal2126CM7h.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CM7g);
        };
        var hs_zddNum2726CM7j = new $hs.Thunk();
        hs_zddNum2726CM7j.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CM7h);
        };
        var hs_sat26CMoW = new $hs.Thunk();
        hs_sat26CMoW.evaluateOnce = function () {
            var hs_sat26CMp2 = new $hs.Thunk();
            hs_sat26CMp2.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM7j, hs_sat26CMp2);
        };
        var hs_sat26CMoX = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2126CM7h);
        var hs_wild26CMoY = $hs.modules.GHCziClasses.hs_zgze.hscall(hs_sat26CMoX, hs_eta126CM7l, hs_sat26CMoW);
        switch (hs_wild26CMoY.tag) {
        case 1:
            var hs_sat26CMoZ = new $hs.Thunk();
            hs_sat26CMoZ.evaluateOnce = function () {
                var hs_sat26CMp1 = new $hs.Thunk();
                hs_sat26CMp1.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum2726CM7j, hs_eta126CM7l);
                };
                var hs_sat26CMp0 = new $hs.Thunk();
                hs_sat26CMp0.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional726CM7p);
                };
                return $hs.modules.GHCziReal.hs_zc.hscall(hs_sat26CMp0, hs_zddIntegral26CM7g, hs_eta26CM7r, hs_sat26CMp1);
            };
            return $hs.modules.GHCziReal.hs_recip.hscall(hs_zddFractional726CM7p, hs_sat26CMoZ);
        case 2:
            var hs_sat26CMoV = new $hs.Thunk();
            hs_sat26CMoV.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional726CM7p);
            };
            return $hs.modules.GHCziReal.hs_zc.hscall(hs_sat26CMoV, hs_zddIntegral26CM7g, hs_eta26CM7r, hs_eta126CM7l);
        }
    };
    hs_zddReal1925unBf.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zddNum2325unBg.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1925unBf);
    };
    hs_zddOrd1625unBh.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal1925unBf);
    };
    hs_zddEq625unBi.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1625unBh);
    };
    hs_lcm125unBj.evaluate = function (hs_ds26CM7G, hs_ds126CM7C) {
        var hs_sat26CMp4 = new $hs.Thunk();
        hs_sat26CMp4.evaluateOnce = function () {
            var hs_sat26CMpd = new $hs.Thunk();
            hs_sat26CMpd.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2325unBg, hs_sat26CMpd);
        };
        var hs_wild26CMp5 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq625unBi, hs_ds126CM7C, hs_sat26CMp4);
        switch (hs_wild26CMp5.tag) {
        case 1:
            var hs_sat26CMp7 = new $hs.Thunk();
            hs_sat26CMp7.evaluateOnce = function () {
                var hs_sat26CMpc = new $hs.Thunk();
                hs_sat26CMpc.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2325unBg, hs_sat26CMpc);
            };
            var hs_wild126CMp8 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq625unBi, hs_ds26CM7G, hs_sat26CMp7);
            switch (hs_wild126CMp8.tag) {
            case 1:
                var hs_sat26CMp9 = new $hs.Thunk();
                hs_sat26CMp9.evaluateOnce = function () {
                    var hs_sat26CMpa = new $hs.Thunk();
                    hs_sat26CMpa.evaluateOnce = function () {
                        var hs_sat26CMpb = new $hs.Thunk();
                        hs_sat26CMpb.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_gcd.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_ds26CM7G, hs_ds126CM7C);
                        };
                        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_ds26CM7G, hs_sat26CMpb);
                    };
                    return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum2325unBg, hs_sat26CMpa, hs_ds126CM7C);
                };
                return $hs.modules.GHCziNum.hs_abs.hscall(hs_zddNum2325unBg, hs_sat26CMp9);
            case 2:
                var hs_sat26CMp6 = new $hs.Thunk();
                hs_sat26CMp6.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2325unBg, hs_sat26CMp6);
            }
        case 2:
            var hs_sat26CMp3 = new $hs.Thunk();
            hs_sat26CMp3.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2325unBg, hs_sat26CMp3);
        }
    };
    this.hs_lcm.evaluate = function (hs_zddIntegral26CM7T, hs_eta26CM85, hs_eta126CM81) {
        var hs_zddReal2126CM7U = new $hs.Thunk();
        hs_zddReal2126CM7U.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CM7T);
        };
        var hs_zddNum2726CM7W = new $hs.Thunk();
        hs_zddNum2726CM7W.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CM7U);
        };
        var hs_zddOrd1726CM7Y = new $hs.Thunk();
        hs_zddOrd1726CM7Y.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal2126CM7U);
        };
        var hs_zddEq726CM80 = new $hs.Thunk();
        hs_zddEq726CM80.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd1726CM7Y);
        };
        var hs_sat26CMpf = new $hs.Thunk();
        hs_sat26CMpf.evaluateOnce = function () {
            var hs_sat26CMpo = new $hs.Thunk();
            hs_sat26CMpo.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM7W, hs_sat26CMpo);
        };
        var hs_wild26CMpg = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CM80, hs_eta126CM81, hs_sat26CMpf);
        switch (hs_wild26CMpg.tag) {
        case 1:
            var hs_sat26CMpi = new $hs.Thunk();
            hs_sat26CMpi.evaluateOnce = function () {
                var hs_sat26CMpn = new $hs.Thunk();
                hs_sat26CMpn.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM7W, hs_sat26CMpn);
            };
            var hs_wild126CMpj = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq726CM80, hs_eta26CM85, hs_sat26CMpi);
            switch (hs_wild126CMpj.tag) {
            case 1:
                var hs_sat26CMpk = new $hs.Thunk();
                hs_sat26CMpk.evaluateOnce = function () {
                    var hs_sat26CMpl = new $hs.Thunk();
                    hs_sat26CMpl.evaluateOnce = function () {
                        var hs_sat26CMpm = new $hs.Thunk();
                        hs_sat26CMpm.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_gcd.hscall(hs_zddIntegral26CM7T, hs_eta26CM85, hs_eta126CM81);
                        };
                        return $hs.modules.GHCziReal.hs_quot.hscall(hs_zddIntegral26CM7T, hs_eta26CM85, hs_sat26CMpm);
                    };
                    return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum2726CM7W, hs_sat26CMpl, hs_eta126CM81);
                };
                return $hs.modules.GHCziNum.hs_abs.hscall(hs_zddNum2726CM7W, hs_sat26CMpk);
            case 2:
                var hs_sat26CMph = new $hs.Thunk();
                hs_sat26CMph.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM7W, hs_sat26CMph);
            }
        case 2:
            var hs_sat26CMpe = new $hs.Thunk();
            hs_sat26CMpe.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM7W, hs_sat26CMpe);
        }
    };
    this.hs_realToFrac.evaluate = function (hs_zddReal2126CM8i, hs_zddFractional726CM8g) {
        var hs_sat26CMpq = new $hs.Thunk();
        hs_sat26CMpq.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toRational.hscall(hs_zddReal2126CM8i);
        };
        var hs_sat26CMpp = new $hs.Thunk();
        hs_sat26CMpp.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromRational.hscall(hs_zddFractional726CM8g);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CMpp, hs_sat26CMpq);
    };
    this.hs_fromIntegral.evaluate = function (hs_zddIntegral26CM8o, hs_zddNum2726CM8m) {
        var hs_sat26CMps = new $hs.Thunk();
        hs_sat26CMps.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall(hs_zddIntegral26CM8o);
        };
        var hs_sat26CMpr = new $hs.Thunk();
        hs_sat26CMpr.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM8m);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CMpr, hs_sat26CMps);
    };
    hs_zddReal2025unCa.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum2425unCb.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2025unCa);
    };
    hs_zdctoEnum25unCc.evaluate = function (hs_n26CM8w) {
        var hs_sat26CMpt = new $hs.Thunk();
        hs_sat26CMpt.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
        };
        var hs_sat26CMpu = new $hs.Thunk();
        hs_sat26CMpu.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2425unCb);
        };
        var hs_tpl26CM8A = $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CMpu, hs_sat26CMpt, hs_n26CM8w);
        var hs_sat26CMpv = new $hs.Thunk();
        hs_sat26CMpv.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_tpl126CM8B = $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2425unCb, hs_sat26CMpv);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CM8A, hs_tpl126CM8B];
        return $res;
    };
    hs_zdctoEnum125unCm.evaluate = function (hs_zddIntegral26CM8G, hs_eta26CM8M) {
        var hs_zddReal2126CM8H = new $hs.Thunk();
        hs_zddReal2126CM8H.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CM8G);
        };
        var hs_zddNum2726CM8J = new $hs.Thunk();
        hs_zddNum2726CM8J.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal2126CM8H);
        };
        var hs_sat26CMpw = new $hs.Thunk();
        hs_sat26CMpw.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
        };
        var hs_sat26CMpx = new $hs.Thunk();
        hs_sat26CMpx.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM8J);
        };
        var hs_tpl26CM8Q = $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CMpx, hs_sat26CMpw, hs_eta26CM8M);
        var hs_sat26CMpy = new $hs.Thunk();
        hs_sat26CMpy.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_tpl126CM8R = $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2726CM8J, hs_sat26CMpy);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CM8Q, hs_tpl126CM8R];
        return $res;
    };
    hs_zddNum2525unCC.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a4325unCD.evaluate = function (hs_x26CM8V) {
        var hs_sat26CMpz = new $hs.Thunk();
        hs_sat26CMpz.evaluateOnce = function () {
            var hs_sat26CMpA = new $hs.Thunk();
            hs_sat26CMpA.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2525unCC, hs_sat26CMpA);
        };
        return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum2525unCC, hs_x26CM8V, hs_sat26CMpz);
    };
    hs_zddNum2625unCI.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a4425unCJ.evaluate = function (hs_x26CM91) {
        var hs_sat26CMpB = new $hs.Thunk();
        hs_sat26CMpB.evaluateOnce = function () {
            var hs_sat26CMpC = new $hs.Thunk();
            hs_sat26CMpC.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum2625unCI, hs_sat26CMpC);
        };
        return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum2625unCI, hs_x26CM91, hs_sat26CMpB);
    };
    hs_a4525unCO.evaluate = function (hs_eta1cW6l3) {
        return hs_zdctoEnum125unCm.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_eta1cW6l3);
    };
    hs_a4625unCP.evaluateOnce = function () {
        return hs_zdcfromEnum125untP.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a4725unCQ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a4825unCR.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.GHCziReal.hs_numericEnumFrom.hscall(hs_a4725unCQ, hs_eta1cW6l3);
    };
    hs_a4925unCS.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a5025unCT.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.GHCziReal.hs_numericEnumFromThen.hscall(hs_a4925unCS, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a5125unCU.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a5225unCV.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a5325unCW.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.GHCziReal.hs_numericEnumFromTo.hscall(hs_a5125unCU, hs_a5225unCV, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a5425unCX.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a5525unCY.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_a5625unCZ.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.GHCziReal.hs_numericEnumFromThenTo.hscall(hs_a5425unCX, hs_a5525unCY, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdfEnumRatio125unD0.data = [hs_a4325unCD, hs_a4425unCJ, hs_a4525unCO, hs_a4625unCP, hs_a4825unCR, hs_a5025unCT, hs_a5325unCW, hs_a5625unCZ];
    this.hs_zdfEnumRatio.evaluate = function (hs_zddIntegral26CM9i) {
        var hs_sat26CMpE = new $hs.Thunk();
        hs_sat26CMpE.evaluateOnce = function () {
            return hs_zdcenumFromThenTo125unui.hscall(hs_zddIntegral26CM9i);
        };
        var hs_sat26CMpF = new $hs.Thunk();
        hs_sat26CMpF.evaluateOnce = function () {
            return hs_zdcenumFromTo125unua.hscall(hs_zddIntegral26CM9i);
        };
        var hs_sat26CMpG = new $hs.Thunk();
        hs_sat26CMpG.evaluateOnce = function () {
            return hs_zdcenumFromThen125unu3.hscall(hs_zddIntegral26CM9i);
        };
        var hs_sat26CMpH = new $hs.Thunk();
        hs_sat26CMpH.evaluateOnce = function () {
            return hs_zdcenumFrom125untX.hscall(hs_zddIntegral26CM9i);
        };
        var hs_sat26CMpI = new $hs.Thunk();
        hs_sat26CMpI.evaluateOnce = function () {
            return hs_zdcfromEnum125untP.hscall(hs_zddIntegral26CM9i);
        };
        var hs_sat26CMpJ = new $hs.Func(1);
        hs_sat26CMpJ.evaluate = function (hs_eta1cW6l3) {
            return hs_zdctoEnum125unCm.hscall(hs_zddIntegral26CM9i, hs_eta1cW6l3);
        };
        var hs_sat26CMpK = new $hs.Thunk();
        hs_sat26CMpK.evaluateOnce = function () {
            return hs_zdcpred125unjQ.hscall(hs_zddIntegral26CM9i);
        };
        var hs_sat26CMpD = new $hs.Thunk();
        hs_sat26CMpD.evaluateOnce = function () {
            return hs_zdcsucc125unjy.hscall(hs_zddIntegral26CM9i);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CMpD, hs_sat26CMpK, hs_sat26CMpJ, hs_sat26CMpI, hs_sat26CMpH, hs_sat26CMpG, hs_sat26CMpF, hs_sat26CMpE];
        return $res;
    };
    this.hs_ZCzv.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_DZCReal.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_DZCIntegral.evaluate = function (hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
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
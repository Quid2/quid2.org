
$hs.modules.GHCziFloat = new $hs.Module();
$hs.modules.GHCziFloat.dependencies = ["GHC.Prim", "GHC.Types", "GHC.CString", "GHC.Integer", "GHC.Integer.Logarithms", "GHC.Integer.Logarithms.Internals", "Data.Maybe", "GHC.Base", "GHC.Enum", "GHC.Num", "GHC.Real", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.Arr", "GHC.Float.ConversionUtils", "GHC.Float.RealFracMethods", "GHC.List", "Control.Exception.Base", "Data.Bits"];
$hs.modules.GHCziFloat.initBeforeDependencies = function () {
    this.hs_zdp1Floating = new $hs.Func(1);
    this.hs_pi = new $hs.Func(1);
    this.hs_exp = new $hs.Func(1);
    this.hs_sqrt = new $hs.Func(1);
    this.hs_log = new $hs.Func(1);
    this.hs_ztzt = new $hs.Func(1);
    this.hs_logBase = new $hs.Func(1);
    this.hs_sin = new $hs.Func(1);
    this.hs_tan = new $hs.Func(1);
    this.hs_cos = new $hs.Func(1);
    this.hs_asin = new $hs.Func(1);
    this.hs_atan = new $hs.Func(1);
    this.hs_acos = new $hs.Func(1);
    this.hs_sinh = new $hs.Func(1);
    this.hs_tanh = new $hs.Func(1);
    this.hs_cosh = new $hs.Func(1);
    this.hs_asinh = new $hs.Func(1);
    this.hs_atanh = new $hs.Func(1);
    this.hs_acosh = new $hs.Func(1);
    this.hs_zdp1RealFloat = new $hs.Func(1);
    this.hs_zdp2RealFloat = new $hs.Func(1);
    this.hs_floatRadix = new $hs.Func(1);
    this.hs_floatDigits = new $hs.Func(1);
    this.hs_floatRange = new $hs.Func(1);
    this.hs_decodeFloat = new $hs.Func(1);
    this.hs_encodeFloat = new $hs.Func(1);
    this.hs_exponent = new $hs.Func(1);
    this.hs_significand = new $hs.Func(1);
    this.hs_scaleFloat = new $hs.Func(1);
    this.hs_isNaN = new $hs.Func(1);
    this.hs_isInfinite = new $hs.Func(1);
    this.hs_isDenormalizzed = new $hs.Func(1);
    this.hs_isNegativeZZero = new $hs.Func(1);
    this.hs_isIEEE = new $hs.Func(1);
    this.hs_atan2 = new $hs.Func(1);
    this.hs_zddmatan2 = new $hs.Func(3);
    this.hs_zddmsignificand = new $hs.Func(2);
    this.hs_zddmexponent = new $hs.Func(2);
    this.hs_zddmtanh = new $hs.Func(2);
    this.hs_zddmtan = new $hs.Func(2);
    this.hs_zddmlogBase = new $hs.Func(3);
    this.hs_zddmztzt = new $hs.Func(3);
    this.hs_zddmsqrt = new $hs.Func(2);
    this.hs_showSignedFloat = new $hs.Func(4);
    this.hs_powerDouble = new $hs.Func(2);
    this.hs_tanhDouble = new $hs.Func(1);
    this.hs_coshDouble = new $hs.Func(1);
    this.hs_sinhDouble = new $hs.Func(1);
    this.hs_atanDouble = new $hs.Func(1);
    this.hs_acosDouble = new $hs.Func(1);
    this.hs_asinDouble = new $hs.Func(1);
    this.hs_tanDouble = new $hs.Func(1);
    this.hs_cosDouble = new $hs.Func(1);
    this.hs_sinDouble = new $hs.Func(1);
    this.hs_sqrtDouble = new $hs.Func(1);
    this.hs_logDouble = new $hs.Func(1);
    this.hs_expDouble = new $hs.Func(1);
    this.hs_float2Double = new $hs.Func(1);
    this.hs_double2Float = new $hs.Func(1);
    this.hs_leDouble = new $hs.Func(2);
    this.hs_ltDouble = new $hs.Func(2);
    this.hs_neDouble = new $hs.Func(2);
    this.hs_eqDouble = new $hs.Func(2);
    this.hs_geDouble = new $hs.Func(2);
    this.hs_gtDouble = new $hs.Func(2);
    this.hs_negateDouble = new $hs.Func(1);
    this.hs_divideDouble = new $hs.Func(2);
    this.hs_timesDouble = new $hs.Func(2);
    this.hs_minusDouble = new $hs.Func(2);
    this.hs_plusDouble = new $hs.Func(2);
    this.hs_powerFloat = new $hs.Func(2);
    this.hs_tanhFloat = new $hs.Func(1);
    this.hs_coshFloat = new $hs.Func(1);
    this.hs_sinhFloat = new $hs.Func(1);
    this.hs_atanFloat = new $hs.Func(1);
    this.hs_acosFloat = new $hs.Func(1);
    this.hs_asinFloat = new $hs.Func(1);
    this.hs_tanFloat = new $hs.Func(1);
    this.hs_cosFloat = new $hs.Func(1);
    this.hs_sinFloat = new $hs.Func(1);
    this.hs_sqrtFloat = new $hs.Func(1);
    this.hs_logFloat = new $hs.Func(1);
    this.hs_expFloat = new $hs.Func(1);
    this.hs_leFloat = new $hs.Func(2);
    this.hs_ltFloat = new $hs.Func(2);
    this.hs_neFloat = new $hs.Func(2);
    this.hs_eqFloat = new $hs.Func(2);
    this.hs_geFloat = new $hs.Func(2);
    this.hs_gtFloat = new $hs.Func(2);
    this.hs_negateFloat = new $hs.Func(1);
    this.hs_divideFloat = new $hs.Func(2);
    this.hs_timesFloat = new $hs.Func(2);
    this.hs_minusFloat = new $hs.Func(2);
    this.hs_plusFloat = new $hs.Func(2);
    this.hs_maxExpt10 = new $hs.Data(1);
    this.hs_maxExpt = new $hs.Data(1);
    this.hs_minExpt = new $hs.Data(1);
    this.hs_isFloatNaN = new $hs.Func(1);
    this.hs_isFloatInfinite = new $hs.Func(1);
    this.hs_isFloatDenormalizzed = new $hs.Func(1);
    this.hs_isFloatNegativeZZero = new $hs.Func(1);
    this.hs_isDoubleNaN = new $hs.Func(1);
    this.hs_isDoubleInfinite = new $hs.Func(1);
    this.hs_isDoubleDenormalizzed = new $hs.Func(1);
    this.hs_isDoubleNegativeZZero = new $hs.Func(1);
    this.hs_roundTo = new $hs.Func(3);
    this.hs_scaleRat = new $hs.Func(6);
    this.hs_expts10 = new $hs.Thunk();
    this.hs_expts = new $hs.Thunk();
    this.hs_expt = new $hs.Func(2);
    this.hs_integerLogBase = new $hs.Func(2);
    this.hs_fromRatzq = new $hs.Func(1);
    this.hs_fromRat = new $hs.Func(2);
    this.hs_clamp = new $hs.Func(2);
    this.hs_fromRatzqzq = new $hs.Func(5);
    this.hs_zdfShowFloat = new $hs.Data(1);
    this.hs_zdfNumFloat = new $hs.Data(1);
    this.hs_zdfFractionalFloat = new $hs.Data(1);
    this.hs_zdfFloatingFloat = new $hs.Data(1);
    this.hs_zdfRealFloat = new $hs.Data(1);
    this.hs_zdfRealFracFloat = new $hs.Data(1);
    this.hs_zdfRealFloatFloat = new $hs.Data(1);
    this.hs_floatToDigits = new $hs.Func(3);
    this.hs_formatRealFloat = new $hs.Func(4);
    this.hs_zdfShowDouble = new $hs.Data(1);
    this.hs_zdfNumDouble = new $hs.Data(1);
    this.hs_zdfFractionalDouble = new $hs.Data(1);
    this.hs_zdfFloatingDouble = new $hs.Data(1);
    this.hs_zdfRealDouble = new $hs.Data(1);
    this.hs_zdfRealFracDouble = new $hs.Data(1);
    this.hs_zdfRealFloatDouble = new $hs.Data(1);
    this.hs_showFloat = new $hs.Func(2);
    this.hs_zdfEnumDouble = new $hs.Data(1);
    this.hs_zdfEnumFloat = new $hs.Data(1);
    this.hs_zddmscaleFloat = new $hs.Func(3);
    this.hs_FFExponent = new $hs.Data(1);
    this.hs_FFFixed = new $hs.Data(2);
    this.hs_FFGeneric = new $hs.Data(3);
    this.hs_DZCFloating = new $hs.Func(19);
    this.hs_DZCRealFloat = new $hs.Func(16);
    this.hs_zdp1Floating.notEvaluated = true;
    this.hs_zdp1Floating.evaluate = function (hs_tpl26CNoi) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNoi);
    };
    this.hs_pi.notEvaluated = true;
    this.hs_pi.evaluate = function (hs_tpl26CNoF) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNoF);
    };
    this.hs_exp.notEvaluated = true;
    this.hs_exp.evaluate = function (hs_tpl26CNp2) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNp2);
    };
    this.hs_sqrt.notEvaluated = true;
    this.hs_sqrt.evaluate = function (hs_tpl26CNpp) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNpp);
    };
    this.hs_log.notEvaluated = true;
    this.hs_log.evaluate = function (hs_tpl26CNpM) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNpM);
    };
    this.hs_ztzt.notEvaluated = true;
    this.hs_ztzt.evaluate = function (hs_tpl26CNq9) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNq9);
    };
    this.hs_logBase.notEvaluated = true;
    this.hs_logBase.evaluate = function (hs_tpl26CNqw) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNqw);
    };
    this.hs_sin.notEvaluated = true;
    this.hs_sin.evaluate = function (hs_tpl26CNqT) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNqT);
    };
    this.hs_tan.notEvaluated = true;
    this.hs_tan.evaluate = function (hs_tpl26CNrg) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNrg);
    };
    this.hs_cos.notEvaluated = true;
    this.hs_cos.evaluate = function (hs_tpl26CNrD) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNrD);
    };
    this.hs_asin.notEvaluated = true;
    this.hs_asin.evaluate = function (hs_tpl26CNs0) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNs0);
    };
    this.hs_atan.notEvaluated = true;
    this.hs_atan.evaluate = function (hs_tpl26CNsn) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNsn);
    };
    this.hs_acos.notEvaluated = true;
    this.hs_acos.evaluate = function (hs_tpl26CNsK) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNsK);
    };
    this.hs_sinh.notEvaluated = true;
    this.hs_sinh.evaluate = function (hs_tpl26CNt7) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNt7);
    };
    this.hs_tanh.notEvaluated = true;
    this.hs_tanh.evaluate = function (hs_tpl26CNtu) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNtu);
    };
    this.hs_cosh.notEvaluated = true;
    this.hs_cosh.evaluate = function (hs_tpl26CNtR) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNtR);
    };
    this.hs_asinh.notEvaluated = true;
    this.hs_asinh.evaluate = function (hs_tpl26CNue) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNue);
    };
    this.hs_atanh.notEvaluated = true;
    this.hs_atanh.evaluate = function (hs_tpl26CNuB) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNuB);
    };
    this.hs_acosh.notEvaluated = true;
    this.hs_acosh.evaluate = function (hs_tpl26CNuY) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNuY);
    };
    this.hs_zdp1RealFloat.notEvaluated = true;
    this.hs_zdp1RealFloat.evaluate = function (hs_tpl26CNvl) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNvl);
    };
    this.hs_zdp2RealFloat.notEvaluated = true;
    this.hs_zdp2RealFloat.evaluate = function (hs_tpl26CNvF) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNvF);
    };
    this.hs_floatRadix.notEvaluated = true;
    this.hs_floatRadix.evaluate = function (hs_tpl26CNvZ) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNvZ);
    };
    this.hs_floatDigits.notEvaluated = true;
    this.hs_floatDigits.evaluate = function (hs_tpl26CNwj) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNwj);
    };
    this.hs_floatRange.notEvaluated = true;
    this.hs_floatRange.evaluate = function (hs_tpl26CNwD) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNwD);
    };
    this.hs_decodeFloat.notEvaluated = true;
    this.hs_decodeFloat.evaluate = function (hs_tpl26CNwX) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNwX);
    };
    this.hs_encodeFloat.notEvaluated = true;
    this.hs_encodeFloat.evaluate = function (hs_tpl26CNxh) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNxh);
    };
    this.hs_exponent.notEvaluated = true;
    this.hs_exponent.evaluate = function (hs_tpl26CNxB) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNxB);
    };
    this.hs_significand.notEvaluated = true;
    this.hs_significand.evaluate = function (hs_tpl26CNxV) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNxV);
    };
    this.hs_scaleFloat.notEvaluated = true;
    this.hs_scaleFloat.evaluate = function (hs_tpl26CNyf) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNyf);
    };
    this.hs_isNaN.notEvaluated = true;
    this.hs_isNaN.evaluate = function (hs_tpl26CNyz) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNyz);
    };
    this.hs_isInfinite.notEvaluated = true;
    this.hs_isInfinite.evaluate = function (hs_tpl26CNyT) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNyT);
    };
    this.hs_isDenormalizzed.notEvaluated = true;
    this.hs_isDenormalizzed.evaluate = function (hs_tpl26CNzd) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNzd);
    };
    this.hs_isNegativeZZero.notEvaluated = true;
    this.hs_isNegativeZZero.evaluate = function (hs_tpl26CNzx) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNzx);
    };
    this.hs_isIEEE.notEvaluated = true;
    this.hs_isIEEE.evaluate = function (hs_tpl26CNzR) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNzR);
    };
    this.hs_atan2.notEvaluated = true;
    this.hs_atan2.evaluate = function (hs_tpl26CNAb) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26CNAb);
    };
    this.hs_zddmatan2.notEvaluated = true;
    this.hs_zddmatan2.evaluate = function (hs_zddRealFloat26CNAy, hs_eta26CNAT, hs_eta126CNAM) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddRealFloat26CNAy, hs_eta26CNAT, hs_eta126CNAM);
    };
    this.hs_zddmsignificand.notEvaluated = true;
    this.hs_zddmsignificand.evaluate = function (hs_zddRealFloat26CNBN, hs_x26CNBO) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddRealFloat26CNBN, hs_x26CNBO);
    };
    this.hs_zddmexponent.notEvaluated = true;
    this.hs_zddmexponent.evaluate = function (hs_zddRealFloat26CNBZ, hs_x26CNC0) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddRealFloat26CNBZ, hs_x26CNC0);
    };
    this.hs_zddmtanh.notEvaluated = true;
    this.hs_zddmtanh.evaluate = function (hs_zddFloating226CNCh, hs_eta26CNCj) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddFloating226CNCh, hs_eta26CNCj);
    };
    this.hs_zddmtan.notEvaluated = true;
    this.hs_zddmtan.evaluate = function (hs_zddFloating226CNCo, hs_eta26CNCq) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddFloating226CNCo, hs_eta26CNCq);
    };
    this.hs_zddmlogBase.notEvaluated = true;
    this.hs_zddmlogBase.evaluate = function (hs_zddFloating226CNCw, hs_eta26CNCA, hs_eta126CNCy) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddFloating226CNCw, hs_eta26CNCA, hs_eta126CNCy);
    };
    this.hs_zddmztzt.notEvaluated = true;
    this.hs_zddmztzt.evaluate = function (hs_zddFloating226CNCF, hs_eta26CNCI, hs_eta126CNCK) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddFloating226CNCF, hs_eta26CNCI, hs_eta126CNCK);
    };
    this.hs_zddmsqrt.notEvaluated = true;
    this.hs_zddmsqrt.evaluate = function (hs_zddFloating226CNCO, hs_eta26CNCP) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddFloating226CNCO, hs_eta26CNCP);
    };
    this.hs_showSignedFloat.notEvaluated = true;
    this.hs_showSignedFloat.evaluate = function (hs_zddRealFloat26CND0, hs_eta26CNDf, hs_eta126CNDg, hs_eta226CND9) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddRealFloat26CND0, hs_eta26CNDf, hs_eta126CNDg, hs_eta226CND9);
    };
    this.hs_powerDouble.notEvaluated = true;
    this.hs_powerDouble.evaluate = function (hs_ds26CNDq, hs_ds126CNDt) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNDq, hs_ds126CNDt);
    };
    this.hs_tanhDouble.notEvaluated = true;
    this.hs_tanhDouble.evaluate = function (hs_ds26CNDA) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNDA);
    };
    this.hs_coshDouble.notEvaluated = true;
    this.hs_coshDouble.evaluate = function (hs_ds26CNDG) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNDG);
    };
    this.hs_sinhDouble.notEvaluated = true;
    this.hs_sinhDouble.evaluate = function (hs_ds26CNDM) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNDM);
    };
    this.hs_atanDouble.notEvaluated = true;
    this.hs_atanDouble.evaluate = function (hs_ds26CNDS) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNDS);
    };
    this.hs_acosDouble.notEvaluated = true;
    this.hs_acosDouble.evaluate = function (hs_ds26CNDY) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNDY);
    };
    this.hs_asinDouble.notEvaluated = true;
    this.hs_asinDouble.evaluate = function (hs_ds26CNE5) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNE5);
    };
    this.hs_tanDouble.notEvaluated = true;
    this.hs_tanDouble.evaluate = function (hs_ds26CNEc) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNEc);
    };
    this.hs_cosDouble.notEvaluated = true;
    this.hs_cosDouble.evaluate = function (hs_ds26CNEi) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNEi);
    };
    this.hs_sinDouble.notEvaluated = true;
    this.hs_sinDouble.evaluate = function (hs_ds26CNEo) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNEo);
    };
    this.hs_sqrtDouble.notEvaluated = true;
    this.hs_sqrtDouble.evaluate = function (hs_ds26CNEu) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNEu);
    };
    this.hs_logDouble.notEvaluated = true;
    this.hs_logDouble.evaluate = function (hs_ds26CNEA) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNEA);
    };
    this.hs_expDouble.notEvaluated = true;
    this.hs_expDouble.evaluate = function (hs_ds26CNEH) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNEH);
    };
    this.hs_float2Double.notEvaluated = true;
    this.hs_float2Double.evaluate = function (hs_ds26CNEN) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNEN);
    };
    this.hs_double2Float.notEvaluated = true;
    this.hs_double2Float.evaluate = function (hs_ds26CNET) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNET);
    };
    this.hs_leDouble.notEvaluated = true;
    this.hs_leDouble.evaluate = function (hs_ds26CNF0, hs_ds126CNF3) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNF0, hs_ds126CNF3);
    };
    this.hs_ltDouble.notEvaluated = true;
    this.hs_ltDouble.evaluate = function (hs_ds26CNFa, hs_ds126CNFd) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNFa, hs_ds126CNFd);
    };
    this.hs_neDouble.notEvaluated = true;
    this.hs_neDouble.evaluate = function (hs_ds26CNFk, hs_ds126CNFn) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNFk, hs_ds126CNFn);
    };
    this.hs_eqDouble.notEvaluated = true;
    this.hs_eqDouble.evaluate = function (hs_ds26CNFu, hs_ds126CNFx) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNFu, hs_ds126CNFx);
    };
    this.hs_geDouble.notEvaluated = true;
    this.hs_geDouble.evaluate = function (hs_ds26CNFE, hs_ds126CNFH) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNFE, hs_ds126CNFH);
    };
    this.hs_gtDouble.notEvaluated = true;
    this.hs_gtDouble.evaluate = function (hs_ds26CNFO, hs_ds126CNFR) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNFO, hs_ds126CNFR);
    };
    this.hs_negateDouble.notEvaluated = true;
    this.hs_negateDouble.evaluate = function (hs_ds26CNFX) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNFX);
    };
    this.hs_divideDouble.notEvaluated = true;
    this.hs_divideDouble.evaluate = function (hs_ds26CNG4, hs_ds126CNG7) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNG4, hs_ds126CNG7);
    };
    this.hs_timesDouble.notEvaluated = true;
    this.hs_timesDouble.evaluate = function (hs_ds26CNGg, hs_ds126CNGj) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNGg, hs_ds126CNGj);
    };
    this.hs_minusDouble.notEvaluated = true;
    this.hs_minusDouble.evaluate = function (hs_ds26CNGr, hs_ds126CNGu) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNGr, hs_ds126CNGu);
    };
    this.hs_plusDouble.notEvaluated = true;
    this.hs_plusDouble.evaluate = function (hs_ds26CNGC, hs_ds126CNGF) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNGC, hs_ds126CNGF);
    };
    this.hs_powerFloat.notEvaluated = true;
    this.hs_powerFloat.evaluate = function (hs_ds26CNGN, hs_ds126CNGQ) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNGN, hs_ds126CNGQ);
    };
    this.hs_tanhFloat.notEvaluated = true;
    this.hs_tanhFloat.evaluate = function (hs_ds26CNGX) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNGX);
    };
    this.hs_coshFloat.notEvaluated = true;
    this.hs_coshFloat.evaluate = function (hs_ds26CNH3) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNH3);
    };
    this.hs_sinhFloat.notEvaluated = true;
    this.hs_sinhFloat.evaluate = function (hs_ds26CNH9) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNH9);
    };
    this.hs_atanFloat.notEvaluated = true;
    this.hs_atanFloat.evaluate = function (hs_ds26CNHf) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNHf);
    };
    this.hs_acosFloat.notEvaluated = true;
    this.hs_acosFloat.evaluate = function (hs_ds26CNHl) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNHl);
    };
    this.hs_asinFloat.notEvaluated = true;
    this.hs_asinFloat.evaluate = function (hs_ds26CNHs) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNHs);
    };
    this.hs_tanFloat.notEvaluated = true;
    this.hs_tanFloat.evaluate = function (hs_ds26CNHz) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNHz);
    };
    this.hs_cosFloat.notEvaluated = true;
    this.hs_cosFloat.evaluate = function (hs_ds26CNHF) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNHF);
    };
    this.hs_sinFloat.notEvaluated = true;
    this.hs_sinFloat.evaluate = function (hs_ds26CNHL) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNHL);
    };
    this.hs_sqrtFloat.notEvaluated = true;
    this.hs_sqrtFloat.evaluate = function (hs_ds26CNHR) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNHR);
    };
    this.hs_logFloat.notEvaluated = true;
    this.hs_logFloat.evaluate = function (hs_ds26CNHX) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNHX);
    };
    this.hs_expFloat.notEvaluated = true;
    this.hs_expFloat.evaluate = function (hs_ds26CNI4) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNI4);
    };
    this.hs_leFloat.notEvaluated = true;
    this.hs_leFloat.evaluate = function (hs_ds26CNIb, hs_ds126CNIe) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNIb, hs_ds126CNIe);
    };
    this.hs_ltFloat.notEvaluated = true;
    this.hs_ltFloat.evaluate = function (hs_ds26CNIl, hs_ds126CNIo) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNIl, hs_ds126CNIo);
    };
    this.hs_neFloat.notEvaluated = true;
    this.hs_neFloat.evaluate = function (hs_ds26CNIv, hs_ds126CNIy) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNIv, hs_ds126CNIy);
    };
    this.hs_eqFloat.notEvaluated = true;
    this.hs_eqFloat.evaluate = function (hs_ds26CNIF, hs_ds126CNII) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNIF, hs_ds126CNII);
    };
    this.hs_geFloat.notEvaluated = true;
    this.hs_geFloat.evaluate = function (hs_ds26CNIP, hs_ds126CNIS) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNIP, hs_ds126CNIS);
    };
    this.hs_gtFloat.notEvaluated = true;
    this.hs_gtFloat.evaluate = function (hs_ds26CNIZ, hs_ds126CNJ2) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNIZ, hs_ds126CNJ2);
    };
    this.hs_negateFloat.notEvaluated = true;
    this.hs_negateFloat.evaluate = function (hs_ds26CNJ8) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNJ8);
    };
    this.hs_divideFloat.notEvaluated = true;
    this.hs_divideFloat.evaluate = function (hs_ds26CNJf, hs_ds126CNJi) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNJf, hs_ds126CNJi);
    };
    this.hs_timesFloat.notEvaluated = true;
    this.hs_timesFloat.evaluate = function (hs_ds26CNJr, hs_ds126CNJu) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNJr, hs_ds126CNJu);
    };
    this.hs_minusFloat.notEvaluated = true;
    this.hs_minusFloat.evaluate = function (hs_ds26CNJC, hs_ds126CNJF) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNJC, hs_ds126CNJF);
    };
    this.hs_plusFloat.notEvaluated = true;
    this.hs_plusFloat.evaluate = function (hs_ds26CNJN, hs_ds126CNJQ) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNJN, hs_ds126CNJQ);
    };
    this.hs_maxExpt10.notEvaluated = true;
    this.hs_maxExpt10.evaluate = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this;
    };
    this.hs_maxExpt.notEvaluated = true;
    this.hs_maxExpt.evaluate = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this;
    };
    this.hs_minExpt.notEvaluated = true;
    this.hs_minExpt.evaluate = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this;
    };
    this.hs_isFloatNaN.notEvaluated = true;
    this.hs_isFloatNaN.evaluate = function (hs_ds26CNJX) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNJX);
    };
    this.hs_isFloatInfinite.notEvaluated = true;
    this.hs_isFloatInfinite.evaluate = function (hs_ds26CNK8) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNK8);
    };
    this.hs_isFloatDenormalizzed.notEvaluated = true;
    this.hs_isFloatDenormalizzed.evaluate = function (hs_ds26CNKj) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNKj);
    };
    this.hs_isFloatNegativeZZero.notEvaluated = true;
    this.hs_isFloatNegativeZZero.evaluate = function (hs_ds26CNKu) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNKu);
    };
    this.hs_isDoubleNaN.notEvaluated = true;
    this.hs_isDoubleNaN.evaluate = function (hs_ds26CNKF) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNKF);
    };
    this.hs_isDoubleInfinite.notEvaluated = true;
    this.hs_isDoubleInfinite.evaluate = function (hs_ds26CNKQ) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNKQ);
    };
    this.hs_isDoubleDenormalizzed.notEvaluated = true;
    this.hs_isDoubleDenormalizzed.evaluate = function (hs_ds26CNL1) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNL1);
    };
    this.hs_isDoubleNegativeZZero.notEvaluated = true;
    this.hs_isDoubleNegativeZZero.evaluate = function (hs_ds26CNLc) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26CNLc);
    };
    this.hs_roundTo.notEvaluated = true;
    this.hs_roundTo.evaluate = function (hs_base26CNS4, hs_d26CNT4, hs_is26CNT5) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_base26CNS4, hs_d26CNT4, hs_is26CNT5);
    };
    this.hs_scaleRat.notEvaluated = true;
    this.hs_scaleRat.evaluate = function (hs_b26CNTB, hs_minExp26CNTu, hs_xMin26CNTz, hs_xMax26CNTx, hs_p26CNTt, hs_x26CNTw) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_b26CNTB, hs_minExp26CNTu, hs_xMin26CNTz, hs_xMax26CNTx, hs_p26CNTt, hs_x26CNTw);
    };
    this.hs_expts10.evaluateOnce = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_expts.evaluateOnce = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_expt.notEvaluated = true;
    this.hs_expt.evaluate = function (hs_base26CNUg, hs_n26CNUj) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_base26CNUg, hs_n26CNUj);
    };
    this.hs_integerLogBase.notEvaluated = true;
    this.hs_integerLogBase.evaluate = function (hs_b26CNUv, hs_i26CNUu) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_b26CNUv, hs_i26CNUu);
    };
    this.hs_fromRatzq.notEvaluated = true;
    this.hs_fromRatzq.evaluate = function (hs_zddRealFloat26CNUN) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddRealFloat26CNUN);
    };
    this.hs_fromRat.notEvaluated = true;
    this.hs_fromRat.evaluate = function (hs_zddRealFloat26CNVB, hs_eta26CNVH) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddRealFloat26CNVB, hs_eta26CNVH);
    };
    this.hs_clamp.notEvaluated = true;
    this.hs_clamp.evaluate = function (hs_bd26CNWj, hs_k26CNWl) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_bd26CNWj, hs_k26CNWl);
    };
    this.hs_fromRatzqzq.notEvaluated = true;
    this.hs_fromRatzqzq.evaluate = function (hs_zddRealFloat26CNYA, hs_minEx26CNXs, hs_mantDigs26CNXv, hs_n26CNXG, hs_d26CNXy) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddRealFloat26CNYA, hs_minEx26CNXs, hs_mantDigs26CNXv, hs_n26CNXG, hs_d26CNXy);
    };
    this.hs_zdfShowFloat.notEvaluated = true;
    this.hs_zdfShowFloat.evaluate = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this;
    };
    this.hs_zdfNumFloat.notEvaluated = true;
    this.hs_zdfNumFloat.evaluate = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this;
    };
    this.hs_zdfFractionalFloat.notEvaluated = true;
    this.hs_zdfFractionalFloat.evaluate = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this;
    };
    this.hs_zdfFloatingFloat.notEvaluated = true;
    this.hs_zdfFloatingFloat.evaluate = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this;
    };
    this.hs_zdfRealFloat.notEvaluated = true;
    this.hs_zdfRealFloat.evaluate = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this;
    };
    this.hs_zdfRealFracFloat.notEvaluated = true;
    this.hs_zdfRealFracFloat.evaluate = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this;
    };
    this.hs_zdfRealFloatFloat.notEvaluated = true;
    this.hs_zdfRealFloatFloat.evaluate = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this;
    };
    this.hs_floatToDigits.notEvaluated = true;
    this.hs_floatToDigits.evaluate = function (hs_zddRealFloat26CO5k, hs_eta26CO5D, hs_eta126CO5r) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddRealFloat26CO5k, hs_eta26CO5D, hs_eta126CO5r);
    };
    this.hs_formatRealFloat.notEvaluated = true;
    this.hs_formatRealFloat.evaluate = function (hs_zddRealFloat26CO9S, hs_eta26COes, hs_eta126COa9, hs_eta226COeh) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddRealFloat26CO9S, hs_eta26COes, hs_eta126COa9, hs_eta226COeh);
    };
    this.hs_zdfShowDouble.notEvaluated = true;
    this.hs_zdfShowDouble.evaluate = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this;
    };
    this.hs_zdfNumDouble.notEvaluated = true;
    this.hs_zdfNumDouble.evaluate = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this;
    };
    this.hs_zdfFractionalDouble.notEvaluated = true;
    this.hs_zdfFractionalDouble.evaluate = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this;
    };
    this.hs_zdfFloatingDouble.notEvaluated = true;
    this.hs_zdfFloatingDouble.evaluate = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this;
    };
    this.hs_zdfRealDouble.notEvaluated = true;
    this.hs_zdfRealDouble.evaluate = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this;
    };
    this.hs_zdfRealFracDouble.notEvaluated = true;
    this.hs_zdfRealFracDouble.evaluate = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this;
    };
    this.hs_zdfRealFloatDouble.notEvaluated = true;
    this.hs_zdfRealFloatDouble.evaluate = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this;
    };
    this.hs_showFloat.notEvaluated = true;
    this.hs_showFloat.evaluate = function (hs_zddRealFloat26COpq, hs_x26COpr) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddRealFloat26COpq, hs_x26COpr);
    };
    this.hs_zdfEnumDouble.notEvaluated = true;
    this.hs_zdfEnumDouble.evaluate = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this;
    };
    this.hs_zdfEnumFloat.notEvaluated = true;
    this.hs_zdfEnumFloat.evaluate = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this;
    };
    this.hs_zddmscaleFloat.notEvaluated = true;
    this.hs_zddmscaleFloat.evaluate = function (hs_zddRealFloat26COq1, hs_k26COqv, hs_x26COq2) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddRealFloat26COq1, hs_k26COqv, hs_x26COq2);
    };
    this.hs_FFExponent.notEvaluated = true;
    this.hs_FFExponent.evaluate = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this;
    };
    this.hs_FFFixed.notEvaluated = true;
    this.hs_FFFixed.evaluate = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this;
    };
    this.hs_FFGeneric.notEvaluated = true;
    this.hs_FFGeneric.evaluate = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this;
    };
    this.hs_DZCFloating.notEvaluated = true;
    this.hs_DZCFloating.evaluate = function (hs_eta1cW6ll, hs_eta1cW6lk, hs_eta1cW6lj, hs_eta1cW6li, hs_eta1cW6lh, hs_eta1cW6lg, hs_eta1cW6lf, hs_eta1cW6le, hs_eta1cW6ld, hs_eta1cW6lc, hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_eta1cW6ll, hs_eta1cW6lk, hs_eta1cW6lj, hs_eta1cW6li, hs_eta1cW6lh, hs_eta1cW6lg, hs_eta1cW6lf, hs_eta1cW6le, hs_eta1cW6ld, hs_eta1cW6lc, hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_DZCRealFloat.notEvaluated = true;
    this.hs_DZCRealFloat.evaluate = function (hs_eta1cW6li, hs_eta1cW6lh, hs_eta1cW6lg, hs_eta1cW6lf, hs_eta1cW6le, hs_eta1cW6ld, hs_eta1cW6lc, hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_eta1cW6li, hs_eta1cW6lh, hs_eta1cW6lg, hs_eta1cW6lf, hs_eta1cW6le, hs_eta1cW6ld, hs_eta1cW6lc, hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziFloat.initAfterDependencies = function () {
    this.hs_zdp1Floating.notEvaluated = false;
    this.hs_pi.notEvaluated = false;
    this.hs_exp.notEvaluated = false;
    this.hs_sqrt.notEvaluated = false;
    this.hs_log.notEvaluated = false;
    this.hs_ztzt.notEvaluated = false;
    this.hs_logBase.notEvaluated = false;
    this.hs_sin.notEvaluated = false;
    this.hs_tan.notEvaluated = false;
    this.hs_cos.notEvaluated = false;
    this.hs_asin.notEvaluated = false;
    this.hs_atan.notEvaluated = false;
    this.hs_acos.notEvaluated = false;
    this.hs_sinh.notEvaluated = false;
    this.hs_tanh.notEvaluated = false;
    this.hs_cosh.notEvaluated = false;
    this.hs_asinh.notEvaluated = false;
    this.hs_atanh.notEvaluated = false;
    this.hs_acosh.notEvaluated = false;
    this.hs_zdp1RealFloat.notEvaluated = false;
    this.hs_zdp2RealFloat.notEvaluated = false;
    this.hs_floatRadix.notEvaluated = false;
    this.hs_floatDigits.notEvaluated = false;
    this.hs_floatRange.notEvaluated = false;
    this.hs_decodeFloat.notEvaluated = false;
    this.hs_encodeFloat.notEvaluated = false;
    this.hs_exponent.notEvaluated = false;
    this.hs_significand.notEvaluated = false;
    this.hs_scaleFloat.notEvaluated = false;
    this.hs_isNaN.notEvaluated = false;
    this.hs_isInfinite.notEvaluated = false;
    this.hs_isDenormalizzed.notEvaluated = false;
    this.hs_isNegativeZZero.notEvaluated = false;
    this.hs_isIEEE.notEvaluated = false;
    this.hs_atan2.notEvaluated = false;
    this.hs_zddmatan2.notEvaluated = false;
    this.hs_zddmsignificand.notEvaluated = false;
    this.hs_zddmexponent.notEvaluated = false;
    this.hs_zddmtanh.notEvaluated = false;
    this.hs_zddmtan.notEvaluated = false;
    this.hs_zddmlogBase.notEvaluated = false;
    this.hs_zddmztzt.notEvaluated = false;
    this.hs_zddmsqrt.notEvaluated = false;
    this.hs_showSignedFloat.notEvaluated = false;
    this.hs_powerDouble.notEvaluated = false;
    this.hs_tanhDouble.notEvaluated = false;
    this.hs_coshDouble.notEvaluated = false;
    this.hs_sinhDouble.notEvaluated = false;
    this.hs_atanDouble.notEvaluated = false;
    this.hs_acosDouble.notEvaluated = false;
    this.hs_asinDouble.notEvaluated = false;
    this.hs_tanDouble.notEvaluated = false;
    this.hs_cosDouble.notEvaluated = false;
    this.hs_sinDouble.notEvaluated = false;
    this.hs_sqrtDouble.notEvaluated = false;
    this.hs_logDouble.notEvaluated = false;
    this.hs_expDouble.notEvaluated = false;
    this.hs_float2Double.notEvaluated = false;
    this.hs_double2Float.notEvaluated = false;
    this.hs_leDouble.notEvaluated = false;
    this.hs_ltDouble.notEvaluated = false;
    this.hs_neDouble.notEvaluated = false;
    this.hs_eqDouble.notEvaluated = false;
    this.hs_geDouble.notEvaluated = false;
    this.hs_gtDouble.notEvaluated = false;
    this.hs_negateDouble.notEvaluated = false;
    this.hs_divideDouble.notEvaluated = false;
    this.hs_timesDouble.notEvaluated = false;
    this.hs_minusDouble.notEvaluated = false;
    this.hs_plusDouble.notEvaluated = false;
    this.hs_powerFloat.notEvaluated = false;
    this.hs_tanhFloat.notEvaluated = false;
    this.hs_coshFloat.notEvaluated = false;
    this.hs_sinhFloat.notEvaluated = false;
    this.hs_atanFloat.notEvaluated = false;
    this.hs_acosFloat.notEvaluated = false;
    this.hs_asinFloat.notEvaluated = false;
    this.hs_tanFloat.notEvaluated = false;
    this.hs_cosFloat.notEvaluated = false;
    this.hs_sinFloat.notEvaluated = false;
    this.hs_sqrtFloat.notEvaluated = false;
    this.hs_logFloat.notEvaluated = false;
    this.hs_expFloat.notEvaluated = false;
    this.hs_leFloat.notEvaluated = false;
    this.hs_ltFloat.notEvaluated = false;
    this.hs_neFloat.notEvaluated = false;
    this.hs_eqFloat.notEvaluated = false;
    this.hs_geFloat.notEvaluated = false;
    this.hs_gtFloat.notEvaluated = false;
    this.hs_negateFloat.notEvaluated = false;
    this.hs_divideFloat.notEvaluated = false;
    this.hs_timesFloat.notEvaluated = false;
    this.hs_minusFloat.notEvaluated = false;
    this.hs_plusFloat.notEvaluated = false;
    this.hs_maxExpt10.notEvaluated = false;
    this.hs_maxExpt10.evaluate = function () {
        return this;
    };
    this.hs_maxExpt.notEvaluated = false;
    this.hs_maxExpt.evaluate = function () {
        return this;
    };
    this.hs_minExpt.notEvaluated = false;
    this.hs_minExpt.evaluate = function () {
        return this;
    };
    this.hs_isFloatNaN.notEvaluated = false;
    this.hs_isFloatInfinite.notEvaluated = false;
    this.hs_isFloatDenormalizzed.notEvaluated = false;
    this.hs_isFloatNegativeZZero.notEvaluated = false;
    this.hs_isDoubleNaN.notEvaluated = false;
    this.hs_isDoubleInfinite.notEvaluated = false;
    this.hs_isDoubleDenormalizzed.notEvaluated = false;
    this.hs_isDoubleNegativeZZero.notEvaluated = false;
    this.hs_roundTo.notEvaluated = false;
    this.hs_scaleRat.notEvaluated = false;
    this.hs_expt.notEvaluated = false;
    this.hs_integerLogBase.notEvaluated = false;
    this.hs_fromRatzq.notEvaluated = false;
    this.hs_fromRat.notEvaluated = false;
    this.hs_clamp.notEvaluated = false;
    this.hs_fromRatzqzq.notEvaluated = false;
    this.hs_zdfShowFloat.notEvaluated = false;
    this.hs_zdfShowFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfNumFloat.notEvaluated = false;
    this.hs_zdfNumFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfFractionalFloat.notEvaluated = false;
    this.hs_zdfFractionalFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfFloatingFloat.notEvaluated = false;
    this.hs_zdfFloatingFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfRealFloat.notEvaluated = false;
    this.hs_zdfRealFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfRealFracFloat.notEvaluated = false;
    this.hs_zdfRealFracFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfRealFloatFloat.notEvaluated = false;
    this.hs_zdfRealFloatFloat.evaluate = function () {
        return this;
    };
    this.hs_floatToDigits.notEvaluated = false;
    this.hs_formatRealFloat.notEvaluated = false;
    this.hs_zdfShowDouble.notEvaluated = false;
    this.hs_zdfShowDouble.evaluate = function () {
        return this;
    };
    this.hs_zdfNumDouble.notEvaluated = false;
    this.hs_zdfNumDouble.evaluate = function () {
        return this;
    };
    this.hs_zdfFractionalDouble.notEvaluated = false;
    this.hs_zdfFractionalDouble.evaluate = function () {
        return this;
    };
    this.hs_zdfFloatingDouble.notEvaluated = false;
    this.hs_zdfFloatingDouble.evaluate = function () {
        return this;
    };
    this.hs_zdfRealDouble.notEvaluated = false;
    this.hs_zdfRealDouble.evaluate = function () {
        return this;
    };
    this.hs_zdfRealFracDouble.notEvaluated = false;
    this.hs_zdfRealFracDouble.evaluate = function () {
        return this;
    };
    this.hs_zdfRealFloatDouble.notEvaluated = false;
    this.hs_zdfRealFloatDouble.evaluate = function () {
        return this;
    };
    this.hs_showFloat.notEvaluated = false;
    this.hs_zdfEnumDouble.notEvaluated = false;
    this.hs_zdfEnumDouble.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumFloat.notEvaluated = false;
    this.hs_zdfEnumFloat.evaluate = function () {
        return this;
    };
    this.hs_zddmscaleFloat.notEvaluated = false;
    this.hs_FFExponent.notEvaluated = false;
    this.hs_FFExponent.evaluate = function () {
        return this;
    };
    this.hs_FFFixed.notEvaluated = false;
    this.hs_FFFixed.evaluate = function () {
        return this;
    };
    this.hs_FFGeneric.notEvaluated = false;
    this.hs_FFGeneric.evaluate = function () {
        return this;
    };
    this.hs_DZCFloating.notEvaluated = false;
    this.hs_DZCRealFloat.notEvaluated = false;
    var hs_zdcfromInteger25upf6 = new $hs.Func(1);
    var hs_zdcabs25upfb = new $hs.Func(1);
    var hs_zdcnegate25upfg = new $hs.Func(1);
    var hs_zdczm25upfj = new $hs.Func(2);
    var hs_zdczt25upfo = new $hs.Func(2);
    var hs_zdczp25upft = new $hs.Func(2);
    var hs_zdctoRational25upfy = new $hs.Func(1);
    var hs_zdczs25upg9 = new $hs.Func(2);
    var hs_zdccosh25upge = new $hs.Func(1);
    var hs_zdctanh25upgh = new $hs.Func(1);
    var hs_zdcsinh25upgk = new $hs.Func(1);
    var hs_zdcacos25upgn = new $hs.Func(1);
    var hs_zdcatan25upgq = new $hs.Func(1);
    var hs_zdcasin25upgt = new $hs.Func(1);
    var hs_zdccos25upgw = new $hs.Func(1);
    var hs_zdctan25upgz = new $hs.Func(1);
    var hs_zdcsin25upgC = new $hs.Func(1);
    var hs_zdcztzt25upgF = new $hs.Func(2);
    var hs_zdclog25upgK = new $hs.Func(1);
    var hs_zdcsqrt25upgN = new $hs.Func(1);
    var hs_zdcexp25upgQ = new $hs.Func(1);
    var hs_zdcpi25upgT = new $hs.Data(1);
    var hs_zdcisIEEE25upgU = new $hs.Func(1);
    var hs_zdcisNegativeZZero25upgX = new $hs.Func(1);
    var hs_zdcisDenormalizzed25uphb = new $hs.Func(1);
    var hs_zdcisInfinite25uphp = new $hs.Func(1);
    var hs_zdcisNaN25uphD = new $hs.Func(1);
    var hs_zdcencodeFloat25uphR = new $hs.Func(2);
    var hs_zdcdecodeFloat25upi1 = new $hs.Func(1);
    var hs_zdcfloatRange25upie = new $hs.Func(1);
    var hs_zdcfloatDigits25upik = new $hs.Func(1);
    var hs_zdcfloatRadix25upin = new $hs.Func(1);
    var hs_zdcfromInteger125upiq = new $hs.Func(1);
    var hs_zdcabs125upiv = new $hs.Func(1);
    var hs_zdcnegate125upiA = new $hs.Func(1);
    var hs_zdczm125upiD = new $hs.Func(2);
    var hs_zdczt125upiI = new $hs.Func(2);
    var hs_zdczp125upiN = new $hs.Func(2);
    var hs_zdctoRational125upiS = new $hs.Func(1);
    var hs_zdczs125upju = new $hs.Func(2);
    var hs_zdccosh125upjz = new $hs.Func(1);
    var hs_zdctanh125upjC = new $hs.Func(1);
    var hs_zdcsinh125upjF = new $hs.Func(1);
    var hs_zdcacos125upjI = new $hs.Func(1);
    var hs_zdcatan125upjL = new $hs.Func(1);
    var hs_zdcasin125upjO = new $hs.Func(1);
    var hs_zdccos125upjR = new $hs.Func(1);
    var hs_zdctan125upjU = new $hs.Func(1);
    var hs_zdcsin125upjX = new $hs.Func(1);
    var hs_zdcztzt125upk0 = new $hs.Func(2);
    var hs_zdclog125upk5 = new $hs.Func(1);
    var hs_zdcsqrt125upk8 = new $hs.Func(1);
    var hs_zdcexp125upkb = new $hs.Func(1);
    var hs_zdcpi125upke = new $hs.Data(1);
    var hs_zdcisIEEE125upkf = new $hs.Func(1);
    var hs_zdcisNegativeZZero125upki = new $hs.Func(1);
    var hs_zdcisDenormalizzed125upkw = new $hs.Func(1);
    var hs_zdcisInfinite125upkK = new $hs.Func(1);
    var hs_zdcisNaN125upkY = new $hs.Func(1);
    var hs_zdcencodeFloat125uplc = new $hs.Func(2);
    var hs_zdcdecodeFloat125uplm = new $hs.Func(1);
    var hs_zdcfloatRange125uply = new $hs.Func(1);
    var hs_zdcfloatDigits125uplE = new $hs.Func(1);
    var hs_zdcfloatRadix125uplH = new $hs.Func(1);
    var hs_zddNum25upn4 = new $hs.Thunk();
    var hs_zddOrd25upn5 = new $hs.Thunk();
    var hs_zddFractional25upn6 = new $hs.Thunk();
    var hs_sat26COGo = new $hs.Thunk();
    var hs_sat26COGp = new $hs.Data(1);
    var hs_sat26COGw = new $hs.Thunk();
    var hs_sat26COGx = new $hs.Data(1);
    var hs_sat26COHO = new $hs.Thunk();
    var hs_sat26COHP = new $hs.Thunk();
    var hs_zdcshowList25upq7 = new $hs.Thunk();
    var hs_zdcshow25upq8 = new $hs.Thunk();
    var hs_zdcsignum25upq9 = new $hs.Func(1);
    var hs_zdcrecip25upqa = new $hs.Func(1);
    var hs_zdczdp1Floating25upqb = new $hs.Thunk();
    var hs_zdcatanh25upqc = new $hs.Func(1);
    var hs_zdcasinh25upqd = new $hs.Func(1);
    var hs_zdclogBase25upqe = new $hs.Func(2);
    var hs_zdcacosh25upqf = new $hs.Func(1);
    var hs_zdczdp2RealFloat25upqg = new $hs.Thunk();
    var hs_zdczdp2RealFrac25upqh = new $hs.Thunk();
    var hs_zdcfloor25upqi = new $hs.Func(2);
    var hs_zdcceiling25upqj = new $hs.Func(2);
    var hs_zdctruncate25upqk = new $hs.Func(2);
    var hs_zdczdp1RealFloat25upql = new $hs.Thunk();
    var hs_zdcscaleFloat25upqm = new $hs.Func(2);
    var hs_zdcsignificand25upqn = new $hs.Func(1);
    var hs_zdcexponent25upqo = new $hs.Func(1);
    var hs_zdcshowsPrec25upqp = new $hs.Func(2);
    var hs_zddRealFrac25upqq = new $hs.Thunk();
    var hs_zddReal25upqr = new $hs.Thunk();
    var hs_zddOrd125upqs = new $hs.Thunk();
    var hs_zddFloating25upqt = new $hs.Thunk();
    var hs_zddFractional125upqu = new $hs.Thunk();
    var hs_zddNum125upqv = new $hs.Thunk();
    var hs_zddEq25upqw = new $hs.Thunk();
    var hs_zdcatan225upqx = new $hs.Func(2);
    var hs_zdcround25upqy = new $hs.Func(2);
    var hs_zdcproperFraction25upqz = new $hs.Func(2);
    var hs_zdcfromRational25upqA = new $hs.Func(1);
    var hs_fromRatzqzq125upqB = new $hs.Func(4);
    var hs_zdcshowList125upqC = new $hs.Thunk();
    var hs_zdcshow125upqD = new $hs.Thunk();
    var hs_zdcsignum125upqE = new $hs.Func(1);
    var hs_zdcrecip125upqF = new $hs.Func(1);
    var hs_zdczdp2RealFrac125upqG = new $hs.Thunk();
    var hs_zdczdp1Floating125upqH = new $hs.Thunk();
    var hs_zdcatanh125upqI = new $hs.Func(1);
    var hs_zdcasinh125upqJ = new $hs.Func(1);
    var hs_zdclogBase125upqK = new $hs.Func(2);
    var hs_zdcacosh125upqL = new $hs.Func(1);
    var hs_zdczdp2RealFloat125upqM = new $hs.Thunk();
    var hs_zdcfloor125upqN = new $hs.Func(2);
    var hs_zdcceiling125upqO = new $hs.Func(2);
    var hs_zdctruncate125upqP = new $hs.Func(2);
    var hs_zdczdp1RealFloat125upqQ = new $hs.Thunk();
    var hs_zdcscaleFloat125upqR = new $hs.Func(2);
    var hs_zdcsignificand125upqS = new $hs.Func(1);
    var hs_zdcexponent125upqT = new $hs.Func(1);
    var hs_zdcproperFraction125upqU = new $hs.Func(2);
    var hs_zdcshowsPrec125upqV = new $hs.Func(2);
    var hs_zddRealFrac125upqW = new $hs.Thunk();
    var hs_zddReal125upqX = new $hs.Thunk();
    var hs_zddOrd225upqY = new $hs.Thunk();
    var hs_zddFloating125upqZ = new $hs.Thunk();
    var hs_zddFractional225upr0 = new $hs.Thunk();
    var hs_zddNum225upr1 = new $hs.Thunk();
    var hs_zddEq125upr2 = new $hs.Thunk();
    var hs_zdcatan325upr3 = new $hs.Func(2);
    var hs_zdcround125upr4 = new $hs.Func(2);
    var hs_zdcfromRational125upr5 = new $hs.Func(1);
    var hs_fromRatzqzq225upr6 = new $hs.Func(4);
    var hs_zdcenumFrom25upTd = new $hs.Thunk();
    var hs_zdcenumFromThen25upTe = new $hs.Thunk();
    var hs_zdcenumFromTo25upTf = new $hs.Thunk();
    var hs_zdcenumFromThenTo25upTg = new $hs.Thunk();
    var hs_zdcsucc25upTh = new $hs.Func(1);
    var hs_zdcpred25upTl = new $hs.Func(1);
    var hs_sat26COYD = new $hs.Thunk();
    var hs_sat26COYE = new $hs.Thunk();
    var hs_zdcfromEnum25upTp = new $hs.Thunk();
    var hs_zdcenumFrom125upTs = new $hs.Thunk();
    var hs_zdcenumFromThen125upTt = new $hs.Thunk();
    var hs_zdcenumFromTo125upTu = new $hs.Thunk();
    var hs_zdcenumFromThenTo125upTv = new $hs.Thunk();
    var hs_zdcsucc125upTw = new $hs.Func(1);
    var hs_zdcpred125upTA = new $hs.Func(1);
    var hs_sat26COYH = new $hs.Thunk();
    var hs_sat26COYI = new $hs.Thunk();
    var hs_zdcfromEnum125upTE = new $hs.Thunk();
    this.hs_zdp1Floating.evaluate = function (hs_tpl26CNoi) {
        var hs_tpl26COqQ = hs_tpl26CNoi;
        if (hs_tpl26CNoi.notEvaluated) {
            hs_tpl26COqQ = hs_tpl26CNoi.hscall();
        }
        var hs_tpl26CNoD = hs_tpl26COqQ.data[0];
        if (hs_tpl26CNoD.notEvaluated) {
            return hs_tpl26CNoD.hscall();
        } else {
            return hs_tpl26CNoD;
        }
    };
    this.hs_pi.evaluate = function (hs_tpl26CNoF) {
        var hs_tpl26COr9 = hs_tpl26CNoF;
        if (hs_tpl26CNoF.notEvaluated) {
            hs_tpl26COr9 = hs_tpl26CNoF.hscall();
        }
        var hs_tpl26CNp0 = hs_tpl26COr9.data[1];
        if (hs_tpl26CNp0.notEvaluated) {
            return hs_tpl26CNp0.hscall();
        } else {
            return hs_tpl26CNp0;
        }
    };
    this.hs_exp.evaluate = function (hs_tpl26CNp2) {
        var hs_tpl26COrs = hs_tpl26CNp2;
        if (hs_tpl26CNp2.notEvaluated) {
            hs_tpl26COrs = hs_tpl26CNp2.hscall();
        }
        var hs_tpl26CNpn = hs_tpl26COrs.data[2];
        if (hs_tpl26CNpn.notEvaluated) {
            return hs_tpl26CNpn.hscall();
        } else {
            return hs_tpl26CNpn;
        }
    };
    this.hs_sqrt.evaluate = function (hs_tpl26CNpp) {
        var hs_tpl26COrL = hs_tpl26CNpp;
        if (hs_tpl26CNpp.notEvaluated) {
            hs_tpl26COrL = hs_tpl26CNpp.hscall();
        }
        var hs_tpl26CNpK = hs_tpl26COrL.data[3];
        if (hs_tpl26CNpK.notEvaluated) {
            return hs_tpl26CNpK.hscall();
        } else {
            return hs_tpl26CNpK;
        }
    };
    this.hs_log.evaluate = function (hs_tpl26CNpM) {
        var hs_tpl26COs4 = hs_tpl26CNpM;
        if (hs_tpl26CNpM.notEvaluated) {
            hs_tpl26COs4 = hs_tpl26CNpM.hscall();
        }
        var hs_tpl26CNq7 = hs_tpl26COs4.data[4];
        if (hs_tpl26CNq7.notEvaluated) {
            return hs_tpl26CNq7.hscall();
        } else {
            return hs_tpl26CNq7;
        }
    };
    this.hs_ztzt.evaluate = function (hs_tpl26CNq9) {
        var hs_tpl26COsn = hs_tpl26CNq9;
        if (hs_tpl26CNq9.notEvaluated) {
            hs_tpl26COsn = hs_tpl26CNq9.hscall();
        }
        var hs_tpl26CNqu = hs_tpl26COsn.data[5];
        if (hs_tpl26CNqu.notEvaluated) {
            return hs_tpl26CNqu.hscall();
        } else {
            return hs_tpl26CNqu;
        }
    };
    this.hs_logBase.evaluate = function (hs_tpl26CNqw) {
        var hs_tpl26COsG = hs_tpl26CNqw;
        if (hs_tpl26CNqw.notEvaluated) {
            hs_tpl26COsG = hs_tpl26CNqw.hscall();
        }
        var hs_tpl26CNqR = hs_tpl26COsG.data[6];
        if (hs_tpl26CNqR.notEvaluated) {
            return hs_tpl26CNqR.hscall();
        } else {
            return hs_tpl26CNqR;
        }
    };
    this.hs_sin.evaluate = function (hs_tpl26CNqT) {
        var hs_tpl26COsZ = hs_tpl26CNqT;
        if (hs_tpl26CNqT.notEvaluated) {
            hs_tpl26COsZ = hs_tpl26CNqT.hscall();
        }
        var hs_tpl26CNre = hs_tpl26COsZ.data[7];
        if (hs_tpl26CNre.notEvaluated) {
            return hs_tpl26CNre.hscall();
        } else {
            return hs_tpl26CNre;
        }
    };
    this.hs_tan.evaluate = function (hs_tpl26CNrg) {
        var hs_tpl26COti = hs_tpl26CNrg;
        if (hs_tpl26CNrg.notEvaluated) {
            hs_tpl26COti = hs_tpl26CNrg.hscall();
        }
        var hs_tpl26CNrB = hs_tpl26COti.data[8];
        if (hs_tpl26CNrB.notEvaluated) {
            return hs_tpl26CNrB.hscall();
        } else {
            return hs_tpl26CNrB;
        }
    };
    this.hs_cos.evaluate = function (hs_tpl26CNrD) {
        var hs_tpl26COtB = hs_tpl26CNrD;
        if (hs_tpl26CNrD.notEvaluated) {
            hs_tpl26COtB = hs_tpl26CNrD.hscall();
        }
        var hs_tpl26CNrY = hs_tpl26COtB.data[9];
        if (hs_tpl26CNrY.notEvaluated) {
            return hs_tpl26CNrY.hscall();
        } else {
            return hs_tpl26CNrY;
        }
    };
    this.hs_asin.evaluate = function (hs_tpl26CNs0) {
        var hs_tpl26COtU = hs_tpl26CNs0;
        if (hs_tpl26CNs0.notEvaluated) {
            hs_tpl26COtU = hs_tpl26CNs0.hscall();
        }
        var hs_tpl26CNsl = hs_tpl26COtU.data[10];
        if (hs_tpl26CNsl.notEvaluated) {
            return hs_tpl26CNsl.hscall();
        } else {
            return hs_tpl26CNsl;
        }
    };
    this.hs_atan.evaluate = function (hs_tpl26CNsn) {
        var hs_tpl26COud = hs_tpl26CNsn;
        if (hs_tpl26CNsn.notEvaluated) {
            hs_tpl26COud = hs_tpl26CNsn.hscall();
        }
        var hs_tpl26CNsI = hs_tpl26COud.data[11];
        if (hs_tpl26CNsI.notEvaluated) {
            return hs_tpl26CNsI.hscall();
        } else {
            return hs_tpl26CNsI;
        }
    };
    this.hs_acos.evaluate = function (hs_tpl26CNsK) {
        var hs_tpl26COuw = hs_tpl26CNsK;
        if (hs_tpl26CNsK.notEvaluated) {
            hs_tpl26COuw = hs_tpl26CNsK.hscall();
        }
        var hs_tpl26CNt5 = hs_tpl26COuw.data[12];
        if (hs_tpl26CNt5.notEvaluated) {
            return hs_tpl26CNt5.hscall();
        } else {
            return hs_tpl26CNt5;
        }
    };
    this.hs_sinh.evaluate = function (hs_tpl26CNt7) {
        var hs_tpl26COuP = hs_tpl26CNt7;
        if (hs_tpl26CNt7.notEvaluated) {
            hs_tpl26COuP = hs_tpl26CNt7.hscall();
        }
        var hs_tpl26CNts = hs_tpl26COuP.data[13];
        if (hs_tpl26CNts.notEvaluated) {
            return hs_tpl26CNts.hscall();
        } else {
            return hs_tpl26CNts;
        }
    };
    this.hs_tanh.evaluate = function (hs_tpl26CNtu) {
        var hs_tpl26COv8 = hs_tpl26CNtu;
        if (hs_tpl26CNtu.notEvaluated) {
            hs_tpl26COv8 = hs_tpl26CNtu.hscall();
        }
        var hs_tpl26CNtP = hs_tpl26COv8.data[14];
        if (hs_tpl26CNtP.notEvaluated) {
            return hs_tpl26CNtP.hscall();
        } else {
            return hs_tpl26CNtP;
        }
    };
    this.hs_cosh.evaluate = function (hs_tpl26CNtR) {
        var hs_tpl26COvr = hs_tpl26CNtR;
        if (hs_tpl26CNtR.notEvaluated) {
            hs_tpl26COvr = hs_tpl26CNtR.hscall();
        }
        var hs_tpl26CNuc = hs_tpl26COvr.data[15];
        if (hs_tpl26CNuc.notEvaluated) {
            return hs_tpl26CNuc.hscall();
        } else {
            return hs_tpl26CNuc;
        }
    };
    this.hs_asinh.evaluate = function (hs_tpl26CNue) {
        var hs_tpl26COvK = hs_tpl26CNue;
        if (hs_tpl26CNue.notEvaluated) {
            hs_tpl26COvK = hs_tpl26CNue.hscall();
        }
        var hs_tpl26CNuz = hs_tpl26COvK.data[16];
        if (hs_tpl26CNuz.notEvaluated) {
            return hs_tpl26CNuz.hscall();
        } else {
            return hs_tpl26CNuz;
        }
    };
    this.hs_atanh.evaluate = function (hs_tpl26CNuB) {
        var hs_tpl26COw3 = hs_tpl26CNuB;
        if (hs_tpl26CNuB.notEvaluated) {
            hs_tpl26COw3 = hs_tpl26CNuB.hscall();
        }
        var hs_tpl26CNuW = hs_tpl26COw3.data[17];
        if (hs_tpl26CNuW.notEvaluated) {
            return hs_tpl26CNuW.hscall();
        } else {
            return hs_tpl26CNuW;
        }
    };
    this.hs_acosh.evaluate = function (hs_tpl26CNuY) {
        var hs_tpl26COwm = hs_tpl26CNuY;
        if (hs_tpl26CNuY.notEvaluated) {
            hs_tpl26COwm = hs_tpl26CNuY.hscall();
        }
        var hs_tpl26CNvj = hs_tpl26COwm.data[18];
        if (hs_tpl26CNvj.notEvaluated) {
            return hs_tpl26CNvj.hscall();
        } else {
            return hs_tpl26CNvj;
        }
    };
    this.hs_zdp1RealFloat.evaluate = function (hs_tpl26CNvl) {
        var hs_tpl26COwC = hs_tpl26CNvl;
        if (hs_tpl26CNvl.notEvaluated) {
            hs_tpl26COwC = hs_tpl26CNvl.hscall();
        }
        var hs_tpl26CNvD = hs_tpl26COwC.data[0];
        if (hs_tpl26CNvD.notEvaluated) {
            return hs_tpl26CNvD.hscall();
        } else {
            return hs_tpl26CNvD;
        }
    };
    this.hs_zdp2RealFloat.evaluate = function (hs_tpl26CNvF) {
        var hs_tpl26COwS = hs_tpl26CNvF;
        if (hs_tpl26CNvF.notEvaluated) {
            hs_tpl26COwS = hs_tpl26CNvF.hscall();
        }
        var hs_tpl26CNvX = hs_tpl26COwS.data[1];
        if (hs_tpl26CNvX.notEvaluated) {
            return hs_tpl26CNvX.hscall();
        } else {
            return hs_tpl26CNvX;
        }
    };
    this.hs_floatRadix.evaluate = function (hs_tpl26CNvZ) {
        var hs_tpl26COx8 = hs_tpl26CNvZ;
        if (hs_tpl26CNvZ.notEvaluated) {
            hs_tpl26COx8 = hs_tpl26CNvZ.hscall();
        }
        var hs_tpl26CNwh = hs_tpl26COx8.data[2];
        if (hs_tpl26CNwh.notEvaluated) {
            return hs_tpl26CNwh.hscall();
        } else {
            return hs_tpl26CNwh;
        }
    };
    this.hs_floatDigits.evaluate = function (hs_tpl26CNwj) {
        var hs_tpl26COxo = hs_tpl26CNwj;
        if (hs_tpl26CNwj.notEvaluated) {
            hs_tpl26COxo = hs_tpl26CNwj.hscall();
        }
        var hs_tpl26CNwB = hs_tpl26COxo.data[3];
        if (hs_tpl26CNwB.notEvaluated) {
            return hs_tpl26CNwB.hscall();
        } else {
            return hs_tpl26CNwB;
        }
    };
    this.hs_floatRange.evaluate = function (hs_tpl26CNwD) {
        var hs_tpl26COxE = hs_tpl26CNwD;
        if (hs_tpl26CNwD.notEvaluated) {
            hs_tpl26COxE = hs_tpl26CNwD.hscall();
        }
        var hs_tpl26CNwV = hs_tpl26COxE.data[4];
        if (hs_tpl26CNwV.notEvaluated) {
            return hs_tpl26CNwV.hscall();
        } else {
            return hs_tpl26CNwV;
        }
    };
    this.hs_decodeFloat.evaluate = function (hs_tpl26CNwX) {
        var hs_tpl26COxU = hs_tpl26CNwX;
        if (hs_tpl26CNwX.notEvaluated) {
            hs_tpl26COxU = hs_tpl26CNwX.hscall();
        }
        var hs_tpl26CNxf = hs_tpl26COxU.data[5];
        if (hs_tpl26CNxf.notEvaluated) {
            return hs_tpl26CNxf.hscall();
        } else {
            return hs_tpl26CNxf;
        }
    };
    this.hs_encodeFloat.evaluate = function (hs_tpl26CNxh) {
        var hs_tpl26COya = hs_tpl26CNxh;
        if (hs_tpl26CNxh.notEvaluated) {
            hs_tpl26COya = hs_tpl26CNxh.hscall();
        }
        var hs_tpl26CNxz = hs_tpl26COya.data[6];
        if (hs_tpl26CNxz.notEvaluated) {
            return hs_tpl26CNxz.hscall();
        } else {
            return hs_tpl26CNxz;
        }
    };
    this.hs_exponent.evaluate = function (hs_tpl26CNxB) {
        var hs_tpl26COyq = hs_tpl26CNxB;
        if (hs_tpl26CNxB.notEvaluated) {
            hs_tpl26COyq = hs_tpl26CNxB.hscall();
        }
        var hs_tpl26CNxT = hs_tpl26COyq.data[7];
        if (hs_tpl26CNxT.notEvaluated) {
            return hs_tpl26CNxT.hscall();
        } else {
            return hs_tpl26CNxT;
        }
    };
    this.hs_significand.evaluate = function (hs_tpl26CNxV) {
        var hs_tpl26COyG = hs_tpl26CNxV;
        if (hs_tpl26CNxV.notEvaluated) {
            hs_tpl26COyG = hs_tpl26CNxV.hscall();
        }
        var hs_tpl26CNyd = hs_tpl26COyG.data[8];
        if (hs_tpl26CNyd.notEvaluated) {
            return hs_tpl26CNyd.hscall();
        } else {
            return hs_tpl26CNyd;
        }
    };
    this.hs_scaleFloat.evaluate = function (hs_tpl26CNyf) {
        var hs_tpl26COyW = hs_tpl26CNyf;
        if (hs_tpl26CNyf.notEvaluated) {
            hs_tpl26COyW = hs_tpl26CNyf.hscall();
        }
        var hs_tpl26CNyx = hs_tpl26COyW.data[9];
        if (hs_tpl26CNyx.notEvaluated) {
            return hs_tpl26CNyx.hscall();
        } else {
            return hs_tpl26CNyx;
        }
    };
    this.hs_isNaN.evaluate = function (hs_tpl26CNyz) {
        var hs_tpl26COzc = hs_tpl26CNyz;
        if (hs_tpl26CNyz.notEvaluated) {
            hs_tpl26COzc = hs_tpl26CNyz.hscall();
        }
        var hs_tpl26CNyR = hs_tpl26COzc.data[10];
        if (hs_tpl26CNyR.notEvaluated) {
            return hs_tpl26CNyR.hscall();
        } else {
            return hs_tpl26CNyR;
        }
    };
    this.hs_isInfinite.evaluate = function (hs_tpl26CNyT) {
        var hs_tpl26COzs = hs_tpl26CNyT;
        if (hs_tpl26CNyT.notEvaluated) {
            hs_tpl26COzs = hs_tpl26CNyT.hscall();
        }
        var hs_tpl26CNzb = hs_tpl26COzs.data[11];
        if (hs_tpl26CNzb.notEvaluated) {
            return hs_tpl26CNzb.hscall();
        } else {
            return hs_tpl26CNzb;
        }
    };
    this.hs_isDenormalizzed.evaluate = function (hs_tpl26CNzd) {
        var hs_tpl26COzI = hs_tpl26CNzd;
        if (hs_tpl26CNzd.notEvaluated) {
            hs_tpl26COzI = hs_tpl26CNzd.hscall();
        }
        var hs_tpl26CNzv = hs_tpl26COzI.data[12];
        if (hs_tpl26CNzv.notEvaluated) {
            return hs_tpl26CNzv.hscall();
        } else {
            return hs_tpl26CNzv;
        }
    };
    this.hs_isNegativeZZero.evaluate = function (hs_tpl26CNzx) {
        var hs_tpl26COzY = hs_tpl26CNzx;
        if (hs_tpl26CNzx.notEvaluated) {
            hs_tpl26COzY = hs_tpl26CNzx.hscall();
        }
        var hs_tpl26CNzP = hs_tpl26COzY.data[13];
        if (hs_tpl26CNzP.notEvaluated) {
            return hs_tpl26CNzP.hscall();
        } else {
            return hs_tpl26CNzP;
        }
    };
    this.hs_isIEEE.evaluate = function (hs_tpl26CNzR) {
        var hs_tpl26COAe = hs_tpl26CNzR;
        if (hs_tpl26CNzR.notEvaluated) {
            hs_tpl26COAe = hs_tpl26CNzR.hscall();
        }
        var hs_tpl26CNA9 = hs_tpl26COAe.data[14];
        if (hs_tpl26CNA9.notEvaluated) {
            return hs_tpl26CNA9.hscall();
        } else {
            return hs_tpl26CNA9;
        }
    };
    this.hs_atan2.evaluate = function (hs_tpl26CNAb) {
        var hs_tpl26COAu = hs_tpl26CNAb;
        if (hs_tpl26CNAb.notEvaluated) {
            hs_tpl26COAu = hs_tpl26CNAb.hscall();
        }
        var hs_tpl26CNAt = hs_tpl26COAu.data[15];
        if (hs_tpl26CNAt.notEvaluated) {
            return hs_tpl26CNAt.hscall();
        } else {
            return hs_tpl26CNAt;
        }
    };
    this.hs_zddmatan2.evaluate = function (hs_zddRealFloat26CNAy, hs_eta26CNAT, hs_eta126CNAM) {
        var hs_zddFloating226CNAz = new $hs.Thunk();
        hs_zddFloating226CNAz.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_zdp2RealFloat.hscall(hs_zddRealFloat26CNAy);
        };
        var hs_zddFractional326CNAB = new $hs.Thunk();
        hs_zddFractional326CNAB.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_zdp1Floating.hscall(hs_zddFloating226CNAz);
        };
        var hs_zddNum326CNAD = new $hs.Thunk();
        hs_zddNum326CNAD.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional326CNAB);
        };
        var hs_zddEq226CNAF = new $hs.Thunk();
        hs_zddEq226CNAF.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum326CNAD);
        };
        var hs_zddRealFrac226CNAH = new $hs.Thunk();
        hs_zddRealFrac226CNAH.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_zdp1RealFloat.hscall(hs_zddRealFloat26CNAy);
        };
        var hs_zddReal226CNAJ = new $hs.Thunk();
        hs_zddReal226CNAJ.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac226CNAH);
        };
        var hs_zddOrd326CNAL = new $hs.Thunk();
        hs_zddOrd326CNAL.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal226CNAJ);
        };
        var hs_sat26COAw = new $hs.Thunk();
        hs_sat26COAw.evaluateOnce = function () {
            var hs_sat26COBr = new $hs.Thunk();
            hs_sat26COBr.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CNAD, hs_sat26COBr);
        };
        var hs_wild26COAx = $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd326CNAL, hs_eta126CNAM, hs_sat26COAw);
        switch (hs_wild26COAx.tag) {
        case 1:
            var hs_sat26COAz = new $hs.Thunk();
            hs_sat26COAz.evaluateOnce = function () {
                var hs_sat26COBp = new $hs.Thunk();
                hs_sat26COBp.evaluateOnce = function () {
                    var hs_sat26COBq = new $hs.Thunk();
                    hs_sat26COBq.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CNAD, hs_sat26COBq);
                };
                return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd326CNAL, hs_eta26CNAT, hs_sat26COBp);
            };
            var hs_sat26COAA = new $hs.Thunk();
            hs_sat26COAA.evaluateOnce = function () {
                var hs_sat26COBn = new $hs.Thunk();
                hs_sat26COBn.evaluateOnce = function () {
                    var hs_sat26COBo = new $hs.Thunk();
                    hs_sat26COBo.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CNAD, hs_sat26COBo);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226CNAF, hs_eta126CNAM, hs_sat26COBn);
            };
            var hs_wild126COAB = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COAA, hs_sat26COAz);
            switch (hs_wild126COAB.tag) {
            case 1:
                var hs_sat26COAF = new $hs.Thunk();
                hs_sat26COAF.evaluateOnce = function () {
                    var hs_sat26COBl = new $hs.Thunk();
                    hs_sat26COBl.evaluateOnce = function () {
                        var hs_sat26COBm = new $hs.Thunk();
                        hs_sat26COBm.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CNAD, hs_sat26COBm);
                    };
                    return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd326CNAL, hs_eta26CNAT, hs_sat26COBl);
                };
                var hs_sat26COAG = new $hs.Thunk();
                hs_sat26COAG.evaluateOnce = function () {
                    var hs_sat26COBj = new $hs.Thunk();
                    hs_sat26COBj.evaluateOnce = function () {
                        var hs_sat26COBk = new $hs.Thunk();
                        hs_sat26COBk.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CNAD, hs_sat26COBk);
                    };
                    return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd326CNAL, hs_eta126CNAM, hs_sat26COBj);
                };
                var hs_wild226COAH = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COAG, hs_sat26COAF);
                switch (hs_wild226COAH.tag) {
                case 1:
                    var hs_sat26COAL = new $hs.Thunk();
                    hs_sat26COAL.evaluateOnce = function () {
                        var hs_sat26COBc = new $hs.Thunk();
                        hs_sat26COBc.evaluateOnce = function () {
                            var hs_sat26COBi = new $hs.Thunk();
                            hs_sat26COBi.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall(hs_zddRealFloat26CNAy, hs_eta26CNAT);
                            };
                            var hs_sat26COBh = new $hs.Thunk();
                            hs_sat26COBh.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall(hs_zddRealFloat26CNAy, hs_eta126CNAM);
                            };
                            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COBh, hs_sat26COBi);
                        };
                        var hs_sat26COBb = new $hs.Thunk();
                        hs_sat26COBb.evaluateOnce = function () {
                            var hs_sat26COBe = new $hs.Thunk();
                            hs_sat26COBe.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall(hs_zddRealFloat26CNAy, hs_eta26CNAT);
                            };
                            var hs_sat26COBd = new $hs.Thunk();
                            hs_sat26COBd.evaluateOnce = function () {
                                var hs_sat26COBf = new $hs.Thunk();
                                hs_sat26COBf.evaluateOnce = function () {
                                    var hs_sat26COBg = new $hs.Thunk();
                                    hs_sat26COBg.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CNAD, hs_sat26COBg);
                                };
                                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd326CNAL, hs_eta126CNAM, hs_sat26COBf);
                            };
                            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COBd, hs_sat26COBe);
                        };
                        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26COBb, hs_sat26COBc);
                    };
                    var hs_sat26COAM = new $hs.Thunk();
                    hs_sat26COAM.evaluateOnce = function () {
                        var hs_sat26COB6 = new $hs.Thunk();
                        hs_sat26COB6.evaluateOnce = function () {
                            var hs_sat26COB9 = new $hs.Thunk();
                            hs_sat26COB9.evaluateOnce = function () {
                                var hs_sat26COBa = new $hs.Thunk();
                                hs_sat26COBa.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CNAD, hs_sat26COBa);
                            };
                            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd326CNAL, hs_eta26CNAT, hs_sat26COB9);
                        };
                        var hs_sat26COB5 = new $hs.Thunk();
                        hs_sat26COB5.evaluateOnce = function () {
                            var hs_sat26COB7 = new $hs.Thunk();
                            hs_sat26COB7.evaluateOnce = function () {
                                var hs_sat26COB8 = new $hs.Thunk();
                                hs_sat26COB8.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CNAD, hs_sat26COB8);
                            };
                            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd326CNAL, hs_eta126CNAM, hs_sat26COB7);
                        };
                        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COB5, hs_sat26COB6);
                    };
                    var hs_wild326COAN = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26COAM, hs_sat26COAL);
                    switch (hs_wild326COAN.tag) {
                    case 1:
                        var hs_sat26COAP = new $hs.Thunk();
                        hs_sat26COAP.evaluateOnce = function () {
                            var hs_sat26COB2 = new $hs.Thunk();
                            hs_sat26COB2.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall(hs_zddRealFloat26CNAy, hs_eta126CNAM);
                            };
                            var hs_sat26COB1 = new $hs.Thunk();
                            hs_sat26COB1.evaluateOnce = function () {
                                var hs_sat26COB3 = new $hs.Thunk();
                                hs_sat26COB3.evaluateOnce = function () {
                                    var hs_sat26COB4 = new $hs.Thunk();
                                    hs_sat26COB4.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CNAD, hs_sat26COB4);
                                };
                                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd326CNAL, hs_eta126CNAM, hs_sat26COB3);
                            };
                            return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26COB1, hs_sat26COB2);
                        };
                        var hs_sat26COAQ = new $hs.Thunk();
                        hs_sat26COAQ.evaluateOnce = function () {
                            var hs_sat26COAZ = new $hs.Thunk();
                            hs_sat26COAZ.evaluateOnce = function () {
                                var hs_sat26COB0 = new $hs.Thunk();
                                hs_sat26COB0.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CNAD, hs_sat26COB0);
                            };
                            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226CNAF, hs_eta26CNAT, hs_sat26COAZ);
                        };
                        var hs_wild426COAR = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COAQ, hs_sat26COAP);
                        switch (hs_wild426COAR.tag) {
                        case 1:
                            var hs_sat26COAS = new $hs.Thunk();
                            hs_sat26COAS.evaluateOnce = function () {
                                var hs_sat26COAX = new $hs.Thunk();
                                hs_sat26COAX.evaluateOnce = function () {
                                    var hs_sat26COAY = new $hs.Thunk();
                                    hs_sat26COAY.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CNAD, hs_sat26COAY);
                                };
                                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226CNAF, hs_eta26CNAT, hs_sat26COAX);
                            };
                            var hs_sat26COAT = new $hs.Thunk();
                            hs_sat26COAT.evaluateOnce = function () {
                                var hs_sat26COAV = new $hs.Thunk();
                                hs_sat26COAV.evaluateOnce = function () {
                                    var hs_sat26COAW = new $hs.Thunk();
                                    hs_sat26COAW.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CNAD, hs_sat26COAW);
                                };
                                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226CNAF, hs_eta126CNAM, hs_sat26COAV);
                            };
                            var hs_wild526COAU = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COAT, hs_sat26COAS);
                            switch (hs_wild526COAU.tag) {
                            case 1:
                                return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum326CNAD, hs_eta126CNAM, hs_eta26CNAT);
                            case 2:
                                if (hs_eta26CNAT.notEvaluated) {
                                    return hs_eta26CNAT.hscall();
                                } else {
                                    return hs_eta26CNAT;
                                }
                            }
                        case 2:
                            return $hs.modules.GHCziFloat.hs_pi.hscall(hs_zddFloating226CNAz);
                        }
                    case 2:
                        var hs_sat26COAK = new $hs.Thunk();
                        hs_sat26COAK.evaluateOnce = function () {
                            var hs_sat26COAO = new $hs.Thunk();
                            hs_sat26COAO.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum326CNAD, hs_eta26CNAT);
                            };
                            return $hs.modules.GHCziFloat.hs_atan2.hscall(hs_zddRealFloat26CNAy, hs_sat26COAO, hs_eta126CNAM);
                        };
                        return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum326CNAD, hs_sat26COAK);
                    }
                case 2:
                    var hs_sat26COAI = new $hs.Thunk();
                    hs_sat26COAI.evaluateOnce = function () {
                        var hs_sat26COAJ = new $hs.Thunk();
                        hs_sat26COAJ.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional326CNAB, hs_eta26CNAT, hs_eta126CNAM);
                        };
                        return $hs.modules.GHCziFloat.hs_atan.hscall(hs_zddFloating226CNAz, hs_sat26COAJ);
                    };
                    var hs_sat26COAE = new $hs.Thunk();
                    hs_sat26COAE.evaluateOnce = function () {
                        return $hs.modules.GHCziFloat.hs_pi.hscall(hs_zddFloating226CNAz);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum326CNAD, hs_sat26COAE, hs_sat26COAI);
                }
            case 2:
                var hs_sat26COAC = new $hs.Thunk();
                hs_sat26COAC.evaluateOnce = function () {
                    var hs_sat26COAD = new $hs.Thunk();
                    hs_sat26COAD.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CNAD, hs_sat26COAD);
                };
                var hs_sat26COAy = new $hs.Thunk();
                hs_sat26COAy.evaluateOnce = function () {
                    return $hs.modules.GHCziFloat.hs_pi.hscall(hs_zddFloating226CNAz);
                };
                return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional326CNAB, hs_sat26COAy, hs_sat26COAC);
            }
        case 2:
            var hs_sat26COAv = new $hs.Thunk();
            hs_sat26COAv.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional326CNAB, hs_eta26CNAT, hs_eta126CNAM);
            };
            return $hs.modules.GHCziFloat.hs_atan.hscall(hs_zddFloating226CNAz, hs_sat26COAv);
        }
    };
    this.hs_zddmsignificand.evaluate = function (hs_zddRealFloat26CNBN, hs_x26CNBO) {
        var hs_sat26COBt = new $hs.Thunk();
        hs_sat26COBt.evaluateOnce = function () {
            var hs_sat26COBw = new $hs.Thunk();
            hs_sat26COBw.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_floatDigits.hscall(hs_zddRealFloat26CNBN, hs_x26CNBO);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COBw);
        };
        var hs_sat26COBs = new $hs.Thunk();
        hs_sat26COBs.evaluateOnce = function () {
            var hs_wild26COBv = $hs.modules.GHCziFloat.hs_decodeFloat.hscall(hs_zddRealFloat26CNBN, hs_x26CNBO);
            var hs_m26CNBS = hs_wild26COBv.data[0];
            if (hs_m26CNBS.notEvaluated) {
                return hs_m26CNBS.hscall();
            } else {
                return hs_m26CNBS;
            }
        };
        return $hs.modules.GHCziFloat.hs_encodeFloat.hscall(hs_zddRealFloat26CNBN, hs_sat26COBs, hs_sat26COBt);
    };
    this.hs_zddmexponent.evaluate = function (hs_zddRealFloat26CNBZ, hs_x26CNC0) {
        var hs_ds26CNC1 = new $hs.Thunk();
        hs_ds26CNC1.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_decodeFloat.hscall(hs_zddRealFloat26CNBZ, hs_x26CNC0);
        };
        var hs_sat26COBx = new $hs.Thunk();
        hs_sat26COBx.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_sat26COBy = new $hs.Thunk();
        hs_sat26COBy.evaluateOnce = function () {
            var hs_wild26COBF = hs_ds26CNC1;
            if (hs_ds26CNC1.notEvaluated) {
                hs_wild26COBF = hs_ds26CNC1.hscall();
            }
            var hs_m26CNC5 = hs_wild26COBF.data[0];
            if (hs_m26CNC5.notEvaluated) {
                return hs_m26CNC5.hscall();
            } else {
                return hs_m26CNC5;
            }
        };
        var hs_wild26COBz = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_sat26COBy, hs_sat26COBx);
        switch (hs_wild26COBz.tag) {
        case 1:
            var hs_sat26COBB = new $hs.Thunk();
            hs_sat26COBB.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_floatDigits.hscall(hs_zddRealFloat26CNBZ, hs_x26CNC0);
            };
            var hs_sat26COBA = new $hs.Thunk();
            hs_sat26COBA.evaluateOnce = function () {
                var hs_wild126COBD = hs_ds26CNC1;
                if (hs_ds26CNC1.notEvaluated) {
                    hs_wild126COBD = hs_ds26CNC1.hscall();
                }
                var hs_n26CNCc = hs_wild126COBD.data[1];
                if (hs_n26CNCc.notEvaluated) {
                    return hs_n26CNCc.hscall();
                } else {
                    return hs_n26CNCc;
                }
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COBA, hs_sat26COBB);
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [0];
            return $res;
        }
    };
    this.hs_zddmtanh.evaluate = function (hs_zddFloating226CNCh, hs_eta26CNCj) {
        var hs_sat26COBG = new $hs.Thunk();
        hs_sat26COBG.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_cosh.hscall(hs_zddFloating226CNCh, hs_eta26CNCj);
        };
        var hs_sat26COBH = new $hs.Thunk();
        hs_sat26COBH.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_sinh.hscall(hs_zddFloating226CNCh, hs_eta26CNCj);
        };
        var hs_sat26COBI = $hs.modules.GHCziFloat.hs_zdp1Floating.hscall(hs_zddFloating226CNCh);
        return $hs.modules.GHCziReal.hs_zs.hscall(hs_sat26COBI, hs_sat26COBH, hs_sat26COBG);
    };
    this.hs_zddmtan.evaluate = function (hs_zddFloating226CNCo, hs_eta26CNCq) {
        var hs_sat26COBJ = new $hs.Thunk();
        hs_sat26COBJ.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_cos.hscall(hs_zddFloating226CNCo, hs_eta26CNCq);
        };
        var hs_sat26COBK = new $hs.Thunk();
        hs_sat26COBK.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_sin.hscall(hs_zddFloating226CNCo, hs_eta26CNCq);
        };
        var hs_sat26COBL = $hs.modules.GHCziFloat.hs_zdp1Floating.hscall(hs_zddFloating226CNCo);
        return $hs.modules.GHCziReal.hs_zs.hscall(hs_sat26COBL, hs_sat26COBK, hs_sat26COBJ);
    };
    this.hs_zddmlogBase.evaluate = function (hs_zddFloating226CNCw, hs_eta26CNCA, hs_eta126CNCy) {
        var hs_sat26COBM = new $hs.Thunk();
        hs_sat26COBM.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_log.hscall(hs_zddFloating226CNCw, hs_eta26CNCA);
        };
        var hs_sat26COBN = new $hs.Thunk();
        hs_sat26COBN.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_log.hscall(hs_zddFloating226CNCw, hs_eta126CNCy);
        };
        var hs_sat26COBO = $hs.modules.GHCziFloat.hs_zdp1Floating.hscall(hs_zddFloating226CNCw);
        return $hs.modules.GHCziReal.hs_zs.hscall(hs_sat26COBO, hs_sat26COBN, hs_sat26COBM);
    };
    this.hs_zddmztzt.evaluate = function (hs_zddFloating226CNCF, hs_eta26CNCI, hs_eta126CNCK) {
        var hs_sat26COBP = new $hs.Thunk();
        hs_sat26COBP.evaluateOnce = function () {
            var hs_sat26COBQ = new $hs.Thunk();
            hs_sat26COBQ.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_log.hscall(hs_zddFloating226CNCF, hs_eta26CNCI);
            };
            var hs_sat26COBR = $hs.modules.GHCziFloat.hs_zdp1Floating.hscall(hs_zddFloating226CNCF);
            var hs_sat26COBS = $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_sat26COBR);
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_sat26COBS, hs_sat26COBQ, hs_eta126CNCK);
        };
        return $hs.modules.GHCziFloat.hs_exp.hscall(hs_zddFloating226CNCF, hs_sat26COBP);
    };
    this.hs_zddmsqrt.evaluate = function (hs_zddFloating226CNCO, hs_eta26CNCP) {
        var hs_sat26COBT = new $hs.Thunk();
        hs_sat26COBT.evaluateOnce = function () {
            var hs_sat26COBU = new $hs.Thunk();
            hs_sat26COBU.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
            };
            var hs_sat26COBV = new $hs.Thunk();
            hs_sat26COBV.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            var hs_sat26COBW = new $hs.Data(1);
            hs_sat26COBW.data = [hs_sat26COBV, hs_sat26COBU];
            var hs_sat26COBX = $hs.modules.GHCziFloat.hs_zdp1Floating.hscall(hs_zddFloating226CNCO);
            return $hs.modules.GHCziReal.hs_fromRational.hscall(hs_sat26COBX, hs_sat26COBW);
        };
        return $hs.modules.GHCziFloat.hs_ztzt.hscall(hs_zddFloating226CNCO, hs_eta26CNCP, hs_sat26COBT);
    };
    this.hs_showSignedFloat.evaluate = function (hs_zddRealFloat26CND0, hs_eta26CNDf, hs_eta126CNDg, hs_eta226CND9) {
        var hs_zddFloating226CND1 = new $hs.Thunk();
        hs_zddFloating226CND1.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_zdp2RealFloat.hscall(hs_zddRealFloat26CND0);
        };
        var hs_zddFractional326CND3 = new $hs.Thunk();
        hs_zddFractional326CND3.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_zdp1Floating.hscall(hs_zddFloating226CND1);
        };
        var hs_zddNum326CND5 = new $hs.Thunk();
        hs_zddNum326CND5.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional326CND3);
        };
        var hs_sat26COBZ = new $hs.Thunk();
        hs_sat26COBZ.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall(hs_zddRealFloat26CND0, hs_eta226CND9);
        };
        var hs_sat26COC0 = new $hs.Thunk();
        hs_sat26COC0.evaluateOnce = function () {
            var hs_sat26COC8 = new $hs.Thunk();
            hs_sat26COC8.evaluateOnce = function () {
                var hs_sat26COCc = new $hs.Thunk();
                hs_sat26COCc.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CND5, hs_sat26COCc);
            };
            var hs_sat26COC9 = $hs.modules.GHCziFloat.hs_zdp1RealFloat.hscall(hs_zddRealFloat26CND0);
            var hs_sat26COCa = $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_sat26COC9);
            var hs_sat26COCb = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_sat26COCa);
            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26COCb, hs_eta226CND9, hs_sat26COC8);
        };
        var hs_wild26COC1 = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26COC0, hs_sat26COBZ);
        switch (hs_wild26COC1.tag) {
        case 1:
            return hs_eta26CNDf.hscall(hs_eta226CND9);
        case 2:
            var hs_sat26COC2 = new $hs.Thunk();
            hs_sat26COC2.evaluateOnce = function () {
                var hs_sat26COC5 = new $hs.Thunk();
                hs_sat26COC5.evaluateOnce = function () {
                    var hs_sat26COC7 = new $hs.Thunk();
                    hs_sat26COC7.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum326CND5, hs_eta226CND9);
                    };
                    return hs_eta26CNDf.hscall(hs_sat26COC7);
                };
                var hs_sat26COC4 = new $hs.Thunk();
                hs_sat26COC4.evaluateOnce = function () {
                    var hs_sat26COC6 = new $hs.Data(1);
                    hs_sat26COC6.data = ["-"];
                    return $hs.modules.GHCziShow.hs_showChar.hscall(hs_sat26COC6);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26COC4, hs_sat26COC5);
            };
            var hs_sat26COBY = new $hs.Thunk();
            hs_sat26COBY.evaluateOnce = function () {
                var hs_sat26COC3 = new $hs.Data(1);
                hs_sat26COC3.data = [6];
                return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_eta126CNDg, hs_sat26COC3);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26COBY, hs_sat26COC2);
        }
    };
    this.hs_powerDouble.evaluate = function (hs_ds26CNDq, hs_ds126CNDt) {
        var hs_wild26COCe = hs_ds26CNDq;
        if (hs_ds26CNDq.notEvaluated) {
            hs_wild26COCe = hs_ds26CNDq.hscall();
        }
        var hs_x26CNDw = hs_wild26COCe.data[0];
        var hs_wild126COCd = hs_ds126CNDt;
        if (hs_ds126CNDt.notEvaluated) {
            hs_wild126COCd = hs_ds126CNDt.hscall();
        }
        var hs_y26CNDx = hs_wild126COCd.data[0];
        throw "primitive operation **##. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26COCf];
        return $res;
    };
    this.hs_tanhDouble.evaluate = function (hs_ds26CNDA) {
        var hs_wild26COCg = hs_ds26CNDA;
        if (hs_ds26CNDA.notEvaluated) {
            hs_wild26COCg = hs_ds26CNDA.hscall();
        }
        var hs_x26CNDD = hs_wild26COCg.data[0];
        throw "primitive operation tanhDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26COCh];
        return $res;
    };
    this.hs_coshDouble.evaluate = function (hs_ds26CNDG) {
        var hs_wild26COCi = hs_ds26CNDG;
        if (hs_ds26CNDG.notEvaluated) {
            hs_wild26COCi = hs_ds26CNDG.hscall();
        }
        var hs_x26CNDJ = hs_wild26COCi.data[0];
        throw "primitive operation coshDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26COCj];
        return $res;
    };
    this.hs_sinhDouble.evaluate = function (hs_ds26CNDM) {
        var hs_wild26COCk = hs_ds26CNDM;
        if (hs_ds26CNDM.notEvaluated) {
            hs_wild26COCk = hs_ds26CNDM.hscall();
        }
        var hs_x26CNDP = hs_wild26COCk.data[0];
        throw "primitive operation sinhDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26COCl];
        return $res;
    };
    this.hs_atanDouble.evaluate = function (hs_ds26CNDS) {
        var hs_wild26COCm = hs_ds26CNDS;
        if (hs_ds26CNDS.notEvaluated) {
            hs_wild26COCm = hs_ds26CNDS.hscall();
        }
        var hs_x26CNDV = hs_wild26COCm.data[0];
        throw "primitive operation atanDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26COCn];
        return $res;
    };
    this.hs_acosDouble.evaluate = function (hs_ds26CNDY) {
        var hs_wild26COCo = hs_ds26CNDY;
        if (hs_ds26CNDY.notEvaluated) {
            hs_wild26COCo = hs_ds26CNDY.hscall();
        }
        var hs_x26CNE1 = hs_wild26COCo.data[0];
        throw "primitive operation acosDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_wild126CNE3];
        return $res;
    };
    this.hs_asinDouble.evaluate = function (hs_ds26CNE5) {
        var hs_wild26COCp = hs_ds26CNE5;
        if (hs_ds26CNE5.notEvaluated) {
            hs_wild26COCp = hs_ds26CNE5.hscall();
        }
        var hs_x26CNE8 = hs_wild26COCp.data[0];
        throw "primitive operation asinDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_wild126CNEa];
        return $res;
    };
    this.hs_tanDouble.evaluate = function (hs_ds26CNEc) {
        var hs_wild26COCq = hs_ds26CNEc;
        if (hs_ds26CNEc.notEvaluated) {
            hs_wild26COCq = hs_ds26CNEc.hscall();
        }
        var hs_x26CNEf = hs_wild26COCq.data[0];
        throw "primitive operation tanDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26COCr];
        return $res;
    };
    this.hs_cosDouble.evaluate = function (hs_ds26CNEi) {
        var hs_wild26COCs = hs_ds26CNEi;
        if (hs_ds26CNEi.notEvaluated) {
            hs_wild26COCs = hs_ds26CNEi.hscall();
        }
        var hs_x26CNEl = hs_wild26COCs.data[0];
        throw "primitive operation cosDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26COCt];
        return $res;
    };
    this.hs_sinDouble.evaluate = function (hs_ds26CNEo) {
        var hs_wild26COCu = hs_ds26CNEo;
        if (hs_ds26CNEo.notEvaluated) {
            hs_wild26COCu = hs_ds26CNEo.hscall();
        }
        var hs_x26CNEr = hs_wild26COCu.data[0];
        throw "primitive operation sinDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26COCv];
        return $res;
    };
    this.hs_sqrtDouble.evaluate = function (hs_ds26CNEu) {
        var hs_wild26COCw = hs_ds26CNEu;
        if (hs_ds26CNEu.notEvaluated) {
            hs_wild26COCw = hs_ds26CNEu.hscall();
        }
        var hs_x26CNEx = hs_wild26COCw.data[0];
        throw "primitive operation sqrtDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26COCx];
        return $res;
    };
    this.hs_logDouble.evaluate = function (hs_ds26CNEA) {
        var hs_wild26COCy = hs_ds26CNEA;
        if (hs_ds26CNEA.notEvaluated) {
            hs_wild26COCy = hs_ds26CNEA.hscall();
        }
        var hs_x26CNED = hs_wild26COCy.data[0];
        throw "primitive operation logDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_wild126CNEF];
        return $res;
    };
    this.hs_expDouble.evaluate = function (hs_ds26CNEH) {
        var hs_wild26COCz = hs_ds26CNEH;
        if (hs_ds26CNEH.notEvaluated) {
            hs_wild26COCz = hs_ds26CNEH.hscall();
        }
        var hs_x26CNEK = hs_wild26COCz.data[0];
        throw "primitive operation expDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26COCA];
        return $res;
    };
    this.hs_float2Double.evaluate = function (hs_ds26CNEN) {
        var hs_wild26COCB = hs_ds26CNEN;
        if (hs_ds26CNEN.notEvaluated) {
            hs_wild26COCB = hs_ds26CNEN.hscall();
        }
        var hs_x26CNEQ = hs_wild26COCB.data[0];
        throw "primitive operation float2Double#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26COCC];
        return $res;
    };
    this.hs_double2Float.evaluate = function (hs_ds26CNET) {
        var hs_wild26COCD = hs_ds26CNET;
        if (hs_ds26CNET.notEvaluated) {
            hs_wild26COCD = hs_ds26CNET.hscall();
        }
        var hs_x26CNEW = hs_wild26COCD.data[0];
        throw "primitive operation double2Float#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26COCE];
        return $res;
    };
    this.hs_leDouble.evaluate = function (hs_ds26CNF0, hs_ds126CNF3) {
        var hs_wild26COCG = hs_ds26CNF0;
        if (hs_ds26CNF0.notEvaluated) {
            hs_wild26COCG = hs_ds26CNF0.hscall();
        }
        var hs_x26CNF6 = hs_wild26COCG.data[0];
        var hs_wild126COCF = hs_ds126CNF3;
        if (hs_ds126CNF3.notEvaluated) {
            hs_wild126COCF = hs_ds126CNF3.hscall();
        }
        var hs_y26CNF7 = hs_wild126COCF.data[0];
        throw "primitive operation <=##. Not implemeted yet.";
    };
    this.hs_ltDouble.evaluate = function (hs_ds26CNFa, hs_ds126CNFd) {
        var hs_wild26COCI = hs_ds26CNFa;
        if (hs_ds26CNFa.notEvaluated) {
            hs_wild26COCI = hs_ds26CNFa.hscall();
        }
        var hs_x26CNFg = hs_wild26COCI.data[0];
        var hs_wild126COCH = hs_ds126CNFd;
        if (hs_ds126CNFd.notEvaluated) {
            hs_wild126COCH = hs_ds126CNFd.hscall();
        }
        var hs_y26CNFh = hs_wild126COCH.data[0];
        throw "primitive operation <##. Not implemeted yet.";
    };
    this.hs_neDouble.evaluate = function (hs_ds26CNFk, hs_ds126CNFn) {
        var hs_wild26COCK = hs_ds26CNFk;
        if (hs_ds26CNFk.notEvaluated) {
            hs_wild26COCK = hs_ds26CNFk.hscall();
        }
        var hs_x26CNFq = hs_wild26COCK.data[0];
        var hs_wild126COCJ = hs_ds126CNFn;
        if (hs_ds126CNFn.notEvaluated) {
            hs_wild126COCJ = hs_ds126CNFn.hscall();
        }
        var hs_y26CNFr = hs_wild126COCJ.data[0];
        throw "primitive operation /=##. Not implemeted yet.";
    };
    this.hs_eqDouble.evaluate = function (hs_ds26CNFu, hs_ds126CNFx) {
        var hs_wild26COCM = hs_ds26CNFu;
        if (hs_ds26CNFu.notEvaluated) {
            hs_wild26COCM = hs_ds26CNFu.hscall();
        }
        var hs_x26CNFA = hs_wild26COCM.data[0];
        var hs_wild126COCL = hs_ds126CNFx;
        if (hs_ds126CNFx.notEvaluated) {
            hs_wild126COCL = hs_ds126CNFx.hscall();
        }
        var hs_y26CNFB = hs_wild126COCL.data[0];
        throw "primitive operation ==##. Not implemeted yet.";
    };
    this.hs_geDouble.evaluate = function (hs_ds26CNFE, hs_ds126CNFH) {
        var hs_wild26COCO = hs_ds26CNFE;
        if (hs_ds26CNFE.notEvaluated) {
            hs_wild26COCO = hs_ds26CNFE.hscall();
        }
        var hs_x26CNFK = hs_wild26COCO.data[0];
        var hs_wild126COCN = hs_ds126CNFH;
        if (hs_ds126CNFH.notEvaluated) {
            hs_wild126COCN = hs_ds126CNFH.hscall();
        }
        var hs_y26CNFL = hs_wild126COCN.data[0];
        throw "primitive operation >=##. Not implemeted yet.";
    };
    this.hs_gtDouble.evaluate = function (hs_ds26CNFO, hs_ds126CNFR) {
        var hs_wild26COCQ = hs_ds26CNFO;
        if (hs_ds26CNFO.notEvaluated) {
            hs_wild26COCQ = hs_ds26CNFO.hscall();
        }
        var hs_x26CNFU = hs_wild26COCQ.data[0];
        var hs_wild126COCP = hs_ds126CNFR;
        if (hs_ds126CNFR.notEvaluated) {
            hs_wild126COCP = hs_ds126CNFR.hscall();
        }
        var hs_y26CNFV = hs_wild126COCP.data[0];
        throw "primitive operation >##. Not implemeted yet.";
    };
    this.hs_negateDouble.evaluate = function (hs_ds26CNFX) {
        var hs_wild26COCR = hs_ds26CNFX;
        if (hs_ds26CNFX.notEvaluated) {
            hs_wild26COCR = hs_ds26CNFX.hscall();
        }
        var hs_x26CNG0 = hs_wild26COCR.data[0];
        throw "primitive operation negateDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26COCS];
        return $res;
    };
    this.hs_divideDouble.evaluate = function (hs_ds26CNG4, hs_ds126CNG7) {
        var hs_wild26COCU = hs_ds26CNG4;
        if (hs_ds26CNG4.notEvaluated) {
            hs_wild26COCU = hs_ds26CNG4.hscall();
        }
        var hs_x26CNGa = hs_wild26COCU.data[0];
        var hs_wild126COCT = hs_ds126CNG7;
        if (hs_ds126CNG7.notEvaluated) {
            hs_wild126COCT = hs_ds126CNG7.hscall();
        }
        var hs_y26CNGb = hs_wild126COCT.data[0];
        throw "primitive operation /##. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_wild226CNGd];
        return $res;
    };
    this.hs_timesDouble.evaluate = function (hs_ds26CNGg, hs_ds126CNGj) {
        var hs_wild26COCW = hs_ds26CNGg;
        if (hs_ds26CNGg.notEvaluated) {
            hs_wild26COCW = hs_ds26CNGg.hscall();
        }
        var hs_x26CNGm = hs_wild26COCW.data[0];
        var hs_wild126COCV = hs_ds126CNGj;
        if (hs_ds126CNGj.notEvaluated) {
            hs_wild126COCV = hs_ds126CNGj.hscall();
        }
        var hs_y26CNGn = hs_wild126COCV.data[0];
        throw "primitive operation *##. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26COCX];
        return $res;
    };
    this.hs_minusDouble.evaluate = function (hs_ds26CNGr, hs_ds126CNGu) {
        var hs_wild26COCZ = hs_ds26CNGr;
        if (hs_ds26CNGr.notEvaluated) {
            hs_wild26COCZ = hs_ds26CNGr.hscall();
        }
        var hs_x26CNGx = hs_wild26COCZ.data[0];
        var hs_wild126COCY = hs_ds126CNGu;
        if (hs_ds126CNGu.notEvaluated) {
            hs_wild126COCY = hs_ds126CNGu.hscall();
        }
        var hs_y26CNGy = hs_wild126COCY.data[0];
        throw "primitive operation -##. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26COD0];
        return $res;
    };
    this.hs_plusDouble.evaluate = function (hs_ds26CNGC, hs_ds126CNGF) {
        var hs_wild26COD2 = hs_ds26CNGC;
        if (hs_ds26CNGC.notEvaluated) {
            hs_wild26COD2 = hs_ds26CNGC.hscall();
        }
        var hs_x26CNGI = hs_wild26COD2.data[0];
        var hs_wild126COD1 = hs_ds126CNGF;
        if (hs_ds126CNGF.notEvaluated) {
            hs_wild126COD1 = hs_ds126CNGF.hscall();
        }
        var hs_y26CNGJ = hs_wild126COD1.data[0];
        throw "primitive operation +##. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26COD3];
        return $res;
    };
    this.hs_powerFloat.evaluate = function (hs_ds26CNGN, hs_ds126CNGQ) {
        var hs_wild26COD5 = hs_ds26CNGN;
        if (hs_ds26CNGN.notEvaluated) {
            hs_wild26COD5 = hs_ds26CNGN.hscall();
        }
        var hs_x26CNGT = hs_wild26COD5.data[0];
        var hs_wild126COD4 = hs_ds126CNGQ;
        if (hs_ds126CNGQ.notEvaluated) {
            hs_wild126COD4 = hs_ds126CNGQ.hscall();
        }
        var hs_y26CNGU = hs_wild126COD4.data[0];
        throw "primitive operation powerFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26COD6];
        return $res;
    };
    this.hs_tanhFloat.evaluate = function (hs_ds26CNGX) {
        var hs_wild26COD7 = hs_ds26CNGX;
        if (hs_ds26CNGX.notEvaluated) {
            hs_wild26COD7 = hs_ds26CNGX.hscall();
        }
        var hs_x26CNH0 = hs_wild26COD7.data[0];
        throw "primitive operation tanhFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26COD8];
        return $res;
    };
    this.hs_coshFloat.evaluate = function (hs_ds26CNH3) {
        var hs_wild26COD9 = hs_ds26CNH3;
        if (hs_ds26CNH3.notEvaluated) {
            hs_wild26COD9 = hs_ds26CNH3.hscall();
        }
        var hs_x26CNH6 = hs_wild26COD9.data[0];
        throw "primitive operation coshFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CODa];
        return $res;
    };
    this.hs_sinhFloat.evaluate = function (hs_ds26CNH9) {
        var hs_wild26CODb = hs_ds26CNH9;
        if (hs_ds26CNH9.notEvaluated) {
            hs_wild26CODb = hs_ds26CNH9.hscall();
        }
        var hs_x26CNHc = hs_wild26CODb.data[0];
        throw "primitive operation sinhFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CODc];
        return $res;
    };
    this.hs_atanFloat.evaluate = function (hs_ds26CNHf) {
        var hs_wild26CODd = hs_ds26CNHf;
        if (hs_ds26CNHf.notEvaluated) {
            hs_wild26CODd = hs_ds26CNHf.hscall();
        }
        var hs_x26CNHi = hs_wild26CODd.data[0];
        throw "primitive operation atanFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CODe];
        return $res;
    };
    this.hs_acosFloat.evaluate = function (hs_ds26CNHl) {
        var hs_wild26CODf = hs_ds26CNHl;
        if (hs_ds26CNHl.notEvaluated) {
            hs_wild26CODf = hs_ds26CNHl.hscall();
        }
        var hs_x26CNHo = hs_wild26CODf.data[0];
        throw "primitive operation acosFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_wild126CNHq];
        return $res;
    };
    this.hs_asinFloat.evaluate = function (hs_ds26CNHs) {
        var hs_wild26CODg = hs_ds26CNHs;
        if (hs_ds26CNHs.notEvaluated) {
            hs_wild26CODg = hs_ds26CNHs.hscall();
        }
        var hs_x26CNHv = hs_wild26CODg.data[0];
        throw "primitive operation asinFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_wild126CNHx];
        return $res;
    };
    this.hs_tanFloat.evaluate = function (hs_ds26CNHz) {
        var hs_wild26CODh = hs_ds26CNHz;
        if (hs_ds26CNHz.notEvaluated) {
            hs_wild26CODh = hs_ds26CNHz.hscall();
        }
        var hs_x26CNHC = hs_wild26CODh.data[0];
        throw "primitive operation tanFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CODi];
        return $res;
    };
    this.hs_cosFloat.evaluate = function (hs_ds26CNHF) {
        var hs_wild26CODj = hs_ds26CNHF;
        if (hs_ds26CNHF.notEvaluated) {
            hs_wild26CODj = hs_ds26CNHF.hscall();
        }
        var hs_x26CNHI = hs_wild26CODj.data[0];
        throw "primitive operation cosFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CODk];
        return $res;
    };
    this.hs_sinFloat.evaluate = function (hs_ds26CNHL) {
        var hs_wild26CODl = hs_ds26CNHL;
        if (hs_ds26CNHL.notEvaluated) {
            hs_wild26CODl = hs_ds26CNHL.hscall();
        }
        var hs_x26CNHO = hs_wild26CODl.data[0];
        throw "primitive operation sinFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CODm];
        return $res;
    };
    this.hs_sqrtFloat.evaluate = function (hs_ds26CNHR) {
        var hs_wild26CODn = hs_ds26CNHR;
        if (hs_ds26CNHR.notEvaluated) {
            hs_wild26CODn = hs_ds26CNHR.hscall();
        }
        var hs_x26CNHU = hs_wild26CODn.data[0];
        throw "primitive operation sqrtFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CODo];
        return $res;
    };
    this.hs_logFloat.evaluate = function (hs_ds26CNHX) {
        var hs_wild26CODp = hs_ds26CNHX;
        if (hs_ds26CNHX.notEvaluated) {
            hs_wild26CODp = hs_ds26CNHX.hscall();
        }
        var hs_x26CNI0 = hs_wild26CODp.data[0];
        throw "primitive operation logFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_wild126CNI2];
        return $res;
    };
    this.hs_expFloat.evaluate = function (hs_ds26CNI4) {
        var hs_wild26CODq = hs_ds26CNI4;
        if (hs_ds26CNI4.notEvaluated) {
            hs_wild26CODq = hs_ds26CNI4.hscall();
        }
        var hs_x26CNI7 = hs_wild26CODq.data[0];
        throw "primitive operation expFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CODr];
        return $res;
    };
    this.hs_leFloat.evaluate = function (hs_ds26CNIb, hs_ds126CNIe) {
        var hs_wild26CODt = hs_ds26CNIb;
        if (hs_ds26CNIb.notEvaluated) {
            hs_wild26CODt = hs_ds26CNIb.hscall();
        }
        var hs_x26CNIh = hs_wild26CODt.data[0];
        var hs_wild126CODs = hs_ds126CNIe;
        if (hs_ds126CNIe.notEvaluated) {
            hs_wild126CODs = hs_ds126CNIe.hscall();
        }
        var hs_y26CNIi = hs_wild126CODs.data[0];
        throw "primitive operation leFloat#. Not implemeted yet.";
    };
    this.hs_ltFloat.evaluate = function (hs_ds26CNIl, hs_ds126CNIo) {
        var hs_wild26CODv = hs_ds26CNIl;
        if (hs_ds26CNIl.notEvaluated) {
            hs_wild26CODv = hs_ds26CNIl.hscall();
        }
        var hs_x26CNIr = hs_wild26CODv.data[0];
        var hs_wild126CODu = hs_ds126CNIo;
        if (hs_ds126CNIo.notEvaluated) {
            hs_wild126CODu = hs_ds126CNIo.hscall();
        }
        var hs_y26CNIs = hs_wild126CODu.data[0];
        throw "primitive operation ltFloat#. Not implemeted yet.";
    };
    this.hs_neFloat.evaluate = function (hs_ds26CNIv, hs_ds126CNIy) {
        var hs_wild26CODx = hs_ds26CNIv;
        if (hs_ds26CNIv.notEvaluated) {
            hs_wild26CODx = hs_ds26CNIv.hscall();
        }
        var hs_x26CNIB = hs_wild26CODx.data[0];
        var hs_wild126CODw = hs_ds126CNIy;
        if (hs_ds126CNIy.notEvaluated) {
            hs_wild126CODw = hs_ds126CNIy.hscall();
        }
        var hs_y26CNIC = hs_wild126CODw.data[0];
        throw "primitive operation neFloat#. Not implemeted yet.";
    };
    this.hs_eqFloat.evaluate = function (hs_ds26CNIF, hs_ds126CNII) {
        var hs_wild26CODz = hs_ds26CNIF;
        if (hs_ds26CNIF.notEvaluated) {
            hs_wild26CODz = hs_ds26CNIF.hscall();
        }
        var hs_x26CNIL = hs_wild26CODz.data[0];
        var hs_wild126CODy = hs_ds126CNII;
        if (hs_ds126CNII.notEvaluated) {
            hs_wild126CODy = hs_ds126CNII.hscall();
        }
        var hs_y26CNIM = hs_wild126CODy.data[0];
        throw "primitive operation eqFloat#. Not implemeted yet.";
    };
    this.hs_geFloat.evaluate = function (hs_ds26CNIP, hs_ds126CNIS) {
        var hs_wild26CODB = hs_ds26CNIP;
        if (hs_ds26CNIP.notEvaluated) {
            hs_wild26CODB = hs_ds26CNIP.hscall();
        }
        var hs_x26CNIV = hs_wild26CODB.data[0];
        var hs_wild126CODA = hs_ds126CNIS;
        if (hs_ds126CNIS.notEvaluated) {
            hs_wild126CODA = hs_ds126CNIS.hscall();
        }
        var hs_y26CNIW = hs_wild126CODA.data[0];
        throw "primitive operation geFloat#. Not implemeted yet.";
    };
    this.hs_gtFloat.evaluate = function (hs_ds26CNIZ, hs_ds126CNJ2) {
        var hs_wild26CODD = hs_ds26CNIZ;
        if (hs_ds26CNIZ.notEvaluated) {
            hs_wild26CODD = hs_ds26CNIZ.hscall();
        }
        var hs_x26CNJ5 = hs_wild26CODD.data[0];
        var hs_wild126CODC = hs_ds126CNJ2;
        if (hs_ds126CNJ2.notEvaluated) {
            hs_wild126CODC = hs_ds126CNJ2.hscall();
        }
        var hs_y26CNJ6 = hs_wild126CODC.data[0];
        throw "primitive operation gtFloat#. Not implemeted yet.";
    };
    this.hs_negateFloat.evaluate = function (hs_ds26CNJ8) {
        var hs_wild26CODE = hs_ds26CNJ8;
        if (hs_ds26CNJ8.notEvaluated) {
            hs_wild26CODE = hs_ds26CNJ8.hscall();
        }
        var hs_x26CNJb = hs_wild26CODE.data[0];
        throw "primitive operation negateFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CODF];
        return $res;
    };
    this.hs_divideFloat.evaluate = function (hs_ds26CNJf, hs_ds126CNJi) {
        var hs_wild26CODH = hs_ds26CNJf;
        if (hs_ds26CNJf.notEvaluated) {
            hs_wild26CODH = hs_ds26CNJf.hscall();
        }
        var hs_x26CNJl = hs_wild26CODH.data[0];
        var hs_wild126CODG = hs_ds126CNJi;
        if (hs_ds126CNJi.notEvaluated) {
            hs_wild126CODG = hs_ds126CNJi.hscall();
        }
        var hs_y26CNJm = hs_wild126CODG.data[0];
        throw "primitive operation divideFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_wild226CNJo];
        return $res;
    };
    this.hs_timesFloat.evaluate = function (hs_ds26CNJr, hs_ds126CNJu) {
        var hs_wild26CODJ = hs_ds26CNJr;
        if (hs_ds26CNJr.notEvaluated) {
            hs_wild26CODJ = hs_ds26CNJr.hscall();
        }
        var hs_x26CNJx = hs_wild26CODJ.data[0];
        var hs_wild126CODI = hs_ds126CNJu;
        if (hs_ds126CNJu.notEvaluated) {
            hs_wild126CODI = hs_ds126CNJu.hscall();
        }
        var hs_y26CNJy = hs_wild126CODI.data[0];
        throw "primitive operation timesFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CODK];
        return $res;
    };
    this.hs_minusFloat.evaluate = function (hs_ds26CNJC, hs_ds126CNJF) {
        var hs_wild26CODM = hs_ds26CNJC;
        if (hs_ds26CNJC.notEvaluated) {
            hs_wild26CODM = hs_ds26CNJC.hscall();
        }
        var hs_x26CNJI = hs_wild26CODM.data[0];
        var hs_wild126CODL = hs_ds126CNJF;
        if (hs_ds126CNJF.notEvaluated) {
            hs_wild126CODL = hs_ds126CNJF.hscall();
        }
        var hs_y26CNJJ = hs_wild126CODL.data[0];
        throw "primitive operation minusFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CODN];
        return $res;
    };
    this.hs_plusFloat.evaluate = function (hs_ds26CNJN, hs_ds126CNJQ) {
        var hs_wild26CODP = hs_ds26CNJN;
        if (hs_ds26CNJN.notEvaluated) {
            hs_wild26CODP = hs_ds26CNJN.hscall();
        }
        var hs_x26CNJT = hs_wild26CODP.data[0];
        var hs_wild126CODO = hs_ds126CNJQ;
        if (hs_ds126CNJQ.notEvaluated) {
            hs_wild126CODO = hs_ds126CNJQ.hscall();
        }
        var hs_y26CNJU = hs_wild126CODO.data[0];
        throw "primitive operation plusFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CODQ];
        return $res;
    };
    this.hs_maxExpt10.data = [324];
    this.hs_maxExpt.data = [1100];
    this.hs_minExpt.data = [0];
    this.hs_isFloatNaN.evaluate = function (hs_ds26CNJX) {
        var hs_ds126CODS = hs_ds26CNJX;
        if (hs_ds26CNJX.notEvaluated) {
            hs_ds126CODS = hs_ds26CNJX.hscall();
        }
        var hs_ds226CNK1 = hs_ds126CODS.data[0];
        var hs_wild26CODT = [$hs.modules.GHCziPrim.hs_realWorldzh, isFloatNaN(hs_ds226CNK1)];
        var hs_ds426CNK6 = hs_wild26CODT[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426CNK6];
        return $res;
    };
    this.hs_isFloatInfinite.evaluate = function (hs_ds26CNK8) {
        var hs_ds126CODV = hs_ds26CNK8;
        if (hs_ds26CNK8.notEvaluated) {
            hs_ds126CODV = hs_ds26CNK8.hscall();
        }
        var hs_ds226CNKc = hs_ds126CODV.data[0];
        var hs_wild26CODW = [$hs.modules.GHCziPrim.hs_realWorldzh, isFloatInfinite(hs_ds226CNKc)];
        var hs_ds426CNKh = hs_wild26CODW[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426CNKh];
        return $res;
    };
    this.hs_isFloatDenormalizzed.evaluate = function (hs_ds26CNKj) {
        var hs_ds126CODY = hs_ds26CNKj;
        if (hs_ds26CNKj.notEvaluated) {
            hs_ds126CODY = hs_ds26CNKj.hscall();
        }
        var hs_ds226CNKn = hs_ds126CODY.data[0];
        var hs_wild26CODZ = [$hs.modules.GHCziPrim.hs_realWorldzh, isFloatDenormali=d(hs_ds226CNKn)];
        var hs_ds426CNKs = hs_wild26CODZ[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426CNKs];
        return $res;
    };
    this.hs_isFloatNegativeZZero.evaluate = function (hs_ds26CNKu) {
        var hs_ds126COE1 = hs_ds26CNKu;
        if (hs_ds26CNKu.notEvaluated) {
            hs_ds126COE1 = hs_ds26CNKu.hscall();
        }
        var hs_ds226CNKy = hs_ds126COE1.data[0];
        var hs_wild26COE2 = [$hs.modules.GHCziPrim.hs_realWorldzh, isFloatNegativeero(hs_ds226CNKy)];
        var hs_ds426CNKD = hs_wild26COE2[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426CNKD];
        return $res;
    };
    this.hs_isDoubleNaN.evaluate = function (hs_ds26CNKF) {
        var hs_ds126COE4 = hs_ds26CNKF;
        if (hs_ds26CNKF.notEvaluated) {
            hs_ds126COE4 = hs_ds26CNKF.hscall();
        }
        var hs_ds226CNKJ = hs_ds126COE4.data[0];
        var hs_wild26COE5 = [$hs.modules.GHCziPrim.hs_realWorldzh, isDoubleNaN(hs_ds226CNKJ)];
        var hs_ds426CNKO = hs_wild26COE5[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426CNKO];
        return $res;
    };
    this.hs_isDoubleInfinite.evaluate = function (hs_ds26CNKQ) {
        var hs_ds126COE7 = hs_ds26CNKQ;
        if (hs_ds26CNKQ.notEvaluated) {
            hs_ds126COE7 = hs_ds26CNKQ.hscall();
        }
        var hs_ds226CNKU = hs_ds126COE7.data[0];
        var hs_wild26COE8 = [$hs.modules.GHCziPrim.hs_realWorldzh, isDoubleInfinite(hs_ds226CNKU)];
        var hs_ds426CNKZ = hs_wild26COE8[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426CNKZ];
        return $res;
    };
    this.hs_isDoubleDenormalizzed.evaluate = function (hs_ds26CNL1) {
        var hs_ds126COEa = hs_ds26CNL1;
        if (hs_ds26CNL1.notEvaluated) {
            hs_ds126COEa = hs_ds26CNL1.hscall();
        }
        var hs_ds226CNL5 = hs_ds126COEa.data[0];
        var hs_wild26COEb = [$hs.modules.GHCziPrim.hs_realWorldzh, isDoubleDenormali=d(hs_ds226CNL5)];
        var hs_ds426CNLa = hs_wild26COEb[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426CNLa];
        return $res;
    };
    this.hs_isDoubleNegativeZZero.evaluate = function (hs_ds26CNLc) {
        var hs_ds126COEd = hs_ds26CNLc;
        if (hs_ds26CNLc.notEvaluated) {
            hs_ds126COEd = hs_ds26CNLc.hscall();
        }
        var hs_ds226CNLg = hs_ds126COEd.data[0];
        var hs_wild26COEe = [$hs.modules.GHCziPrim.hs_realWorldzh, isDoubleNegativeero(hs_ds226CNLg)];
        var hs_ds426CNLl = hs_wild26COEe[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426CNLl];
        return $res;
    };
    hs_zdcfromInteger25upf6.evaluate = function (hs_eta26CNLo) {
        var hs_wild26CNLq = $hs.modules.GHCziInteger.hs_floatFromInteger.hscall(hs_eta26CNLo);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild26CNLq];
        return $res;
    };
    hs_zdcabs25upfb.evaluate = function (hs_x26CNLt) {
        var hs_sat26COEf = new $hs.Data(1);
        hs_sat26COEf.data = [0 % 1];
        var hs_wild26COEg = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat, hs_x26CNLt, hs_sat26COEf);
        switch (hs_wild26COEg.tag) {
        case 1:
            return $hs.modules.GHCziFloat.hs_negateFloat.hscall(hs_x26CNLt);
        case 2:
            if (hs_x26CNLt.notEvaluated) {
                return hs_x26CNLt.hscall();
            } else {
                return hs_x26CNLt;
            }
        }
    };
    hs_zdcnegate25upfg.evaluate = function (hs_x26CNLy) {
        return $hs.modules.GHCziFloat.hs_negateFloat.hscall(hs_x26CNLy);
    };
    hs_zdczm25upfj.evaluate = function (hs_x26CNLC, hs_y26CNLD) {
        return $hs.modules.GHCziFloat.hs_minusFloat.hscall(hs_x26CNLC, hs_y26CNLD);
    };
    hs_zdczt25upfo.evaluate = function (hs_x26CNLH, hs_y26CNLI) {
        return $hs.modules.GHCziFloat.hs_timesFloat.hscall(hs_x26CNLH, hs_y26CNLI);
    };
    hs_zdczp25upft.evaluate = function (hs_x26CNLM, hs_y26CNLN) {
        return $hs.modules.GHCziFloat.hs_plusFloat.hscall(hs_x26CNLM, hs_y26CNLN);
    };
    hs_zdctoRational25upfy.evaluate = function (hs_ds26CNLQ) {
        var hs_wild26COEh = hs_ds26CNLQ;
        if (hs_ds26CNLQ.notEvaluated) {
            hs_wild26COEh = hs_ds26CNLQ.hscall();
        }
        var hs_xzh26CNLT = hs_wild26COEh.data[0];
        throw "primitive operation decodeFloat_Int#. Not implemeted yet.";
        var hs_mzh26CNLZ = hs_wild126COEi[0];
        var hs_ezh26CNLX = hs_wild126COEi[1];
        var hs_wild226COEj = hs_ezh26CNLX >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226COEj.tag) {
        case 1:
            var hs_sat26COEl = hs_mzh26CNLZ;
            var hs_sat26COEm = hs_sat26COEl & 1;
            var hs_wild326COEn = hs_sat26COEm == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild326COEn.tag) {
            case 1:
                var hs_tpl26CNM7 = $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_mzh26CNLZ);
                var hs_sat26COEr = -hs_ezh26CNLX;
                var hs_sat26COEs = new $hs.Thunk();
                hs_sat26COEs.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                var hs_tpl126CNM8 = $hs.modules.GHCziInteger.hs_shiftLInteger.hscall(hs_sat26COEs, hs_sat26COEr);
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl26CNM7, hs_tpl126CNM8];
                return $res;
            case 2:
                var hs_sat26COEo = -hs_ezh26CNLX;
                var hs_wild426COEp = $hs.modules.GHCziFloatziConversionUtils.hs_elimZZerosIntzh.hscall(hs_mzh26CNLZ, hs_sat26COEo);
                var hs_n26CNMd = hs_wild426COEp[0];
                var hs_dzh26CNMg = hs_wild426COEp[1];
                var hs_tpl26CNMi = hs_n26CNMd;
                if (hs_n26CNMd.notEvaluated) {
                    hs_tpl26CNMi = hs_n26CNMd.hscall();
                }
                var hs_sat26COEq = new $hs.Thunk();
                hs_sat26COEq.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                var hs_tpl126CNMj = $hs.modules.GHCziInteger.hs_shiftLInteger.hscall(hs_sat26COEq, hs_dzh26CNMg);
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl26CNMi, hs_tpl126CNMj];
                return $res;
            }
        case 2:
            var hs_sat26COEk = new $hs.Thunk();
            hs_sat26COEk.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_mzh26CNLZ);
            };
            var hs_tpl26CNMn = $hs.modules.GHCziInteger.hs_shiftLInteger.hscall(hs_sat26COEk, hs_ezh26CNLX);
            var hs_tpl126CNMo = $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            var $res = new $hs.Data(1);
            $res.data = [hs_tpl26CNMn, hs_tpl126CNMo];
            return $res;
        }
    };
    hs_zdczs25upg9.evaluate = function (hs_x26CNMs, hs_y26CNMt) {
        return $hs.modules.GHCziFloat.hs_divideFloat.hscall(hs_x26CNMs, hs_y26CNMt);
    };
    hs_zdccosh25upge.evaluate = function (hs_x26CNMw) {
        return $hs.modules.GHCziFloat.hs_coshFloat.hscall(hs_x26CNMw);
    };
    hs_zdctanh25upgh.evaluate = function (hs_x26CNMz) {
        return $hs.modules.GHCziFloat.hs_tanhFloat.hscall(hs_x26CNMz);
    };
    hs_zdcsinh25upgk.evaluate = function (hs_x26CNMC) {
        return $hs.modules.GHCziFloat.hs_sinhFloat.hscall(hs_x26CNMC);
    };
    hs_zdcacos25upgn.evaluate = function (hs_x26CNMF) {
        return $hs.modules.GHCziFloat.hs_acosFloat.hscall(hs_x26CNMF);
    };
    hs_zdcatan25upgq.evaluate = function (hs_x26CNMI) {
        return $hs.modules.GHCziFloat.hs_atanFloat.hscall(hs_x26CNMI);
    };
    hs_zdcasin25upgt.evaluate = function (hs_x26CNML) {
        return $hs.modules.GHCziFloat.hs_asinFloat.hscall(hs_x26CNML);
    };
    hs_zdccos25upgw.evaluate = function (hs_x26CNMO) {
        return $hs.modules.GHCziFloat.hs_cosFloat.hscall(hs_x26CNMO);
    };
    hs_zdctan25upgz.evaluate = function (hs_x26CNMR) {
        return $hs.modules.GHCziFloat.hs_tanFloat.hscall(hs_x26CNMR);
    };
    hs_zdcsin25upgC.evaluate = function (hs_x26CNMU) {
        return $hs.modules.GHCziFloat.hs_sinFloat.hscall(hs_x26CNMU);
    };
    hs_zdcztzt25upgF.evaluate = function (hs_x26CNMY, hs_y26CNMZ) {
        return $hs.modules.GHCziFloat.hs_powerFloat.hscall(hs_x26CNMY, hs_y26CNMZ);
    };
    hs_zdclog25upgK.evaluate = function (hs_x26CNN2) {
        return $hs.modules.GHCziFloat.hs_logFloat.hscall(hs_x26CNN2);
    };
    hs_zdcsqrt25upgN.evaluate = function (hs_x26CNN5) {
        return $hs.modules.GHCziFloat.hs_sqrtFloat.hscall(hs_x26CNN5);
    };
    hs_zdcexp25upgQ.evaluate = function (hs_x26CNN8) {
        return $hs.modules.GHCziFloat.hs_expFloat.hscall(hs_x26CNN8);
    };
    hs_zdcpi25upgT.data = [1570796326794896619 % 500000000000000000];
    hs_zdcisIEEE25upgU.evaluate = function (hs_ds26CNNc) {
        var $res = new $hs.Data(2);
        $res.data = [];
        return $res;
    };
    hs_zdcisNegativeZZero25upgX.evaluate = function (hs_x26CNNg) {
        var hs_sat26COEu = new $hs.Thunk();
        hs_sat26COEu.evaluateOnce = function () {
            var hs_ds26COEw = hs_x26CNNg;
            if (hs_x26CNNg.notEvaluated) {
                hs_ds26COEw = hs_x26CNNg.hscall();
            }
            var hs_ds126CNNk = hs_ds26COEw.data[0];
            var hs_wild26COEx = [$hs.modules.GHCziPrim.hs_realWorldzh, isFloatNegativeero(hs_ds126CNNk)];
            var hs_ds326CNNp = hs_wild26COEx[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326CNNp];
            return $res;
        };
        var hs_sat26COEt = new $hs.Data(1);
        hs_sat26COEt.data = [0];
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26COEt, hs_sat26COEu);
    };
    hs_zdcisDenormalizzed25uphb.evaluate = function (hs_x26CNNu) {
        var hs_sat26COEz = new $hs.Thunk();
        hs_sat26COEz.evaluateOnce = function () {
            var hs_ds26COEB = hs_x26CNNu;
            if (hs_x26CNNu.notEvaluated) {
                hs_ds26COEB = hs_x26CNNu.hscall();
            }
            var hs_ds126CNNy = hs_ds26COEB.data[0];
            var hs_wild26COEC = [$hs.modules.GHCziPrim.hs_realWorldzh, isFloatDenormali=d(hs_ds126CNNy)];
            var hs_ds326CNND = hs_wild26COEC[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326CNND];
            return $res;
        };
        var hs_sat26COEy = new $hs.Data(1);
        hs_sat26COEy.data = [0];
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26COEy, hs_sat26COEz);
    };
    hs_zdcisInfinite25uphp.evaluate = function (hs_x26CNNI) {
        var hs_sat26COEE = new $hs.Thunk();
        hs_sat26COEE.evaluateOnce = function () {
            var hs_ds26COEG = hs_x26CNNI;
            if (hs_x26CNNI.notEvaluated) {
                hs_ds26COEG = hs_x26CNNI.hscall();
            }
            var hs_ds126CNNM = hs_ds26COEG.data[0];
            var hs_wild26COEH = [$hs.modules.GHCziPrim.hs_realWorldzh, isFloatInfinite(hs_ds126CNNM)];
            var hs_ds326CNNR = hs_wild26COEH[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326CNNR];
            return $res;
        };
        var hs_sat26COED = new $hs.Data(1);
        hs_sat26COED.data = [0];
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26COED, hs_sat26COEE);
    };
    hs_zdcisNaN25uphD.evaluate = function (hs_x26CNNW) {
        var hs_sat26COEJ = new $hs.Thunk();
        hs_sat26COEJ.evaluateOnce = function () {
            var hs_ds26COEL = hs_x26CNNW;
            if (hs_x26CNNW.notEvaluated) {
                hs_ds26COEL = hs_x26CNNW.hscall();
            }
            var hs_ds126CNO0 = hs_ds26COEL.data[0];
            var hs_wild26COEM = [$hs.modules.GHCziPrim.hs_realWorldzh, isFloatNaN(hs_ds126CNO0)];
            var hs_ds326CNO5 = hs_wild26COEM[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326CNO5];
            return $res;
        };
        var hs_sat26COEI = new $hs.Data(1);
        hs_sat26COEI.data = [0];
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26COEI, hs_sat26COEJ);
    };
    hs_zdcencodeFloat25uphR.evaluate = function (hs_i26CNOd, hs_ds26CNOa) {
        var hs_wild26COEN = hs_ds26CNOa;
        if (hs_ds26CNOa.notEvaluated) {
            hs_wild26COEN = hs_ds26CNOa.hscall();
        }
        var hs_e26CNOe = hs_wild26COEN.data[0];
        var hs_wild126CNOg = $hs.modules.GHCziInteger.hs_encodeFloatInteger.hscall(hs_i26CNOd, hs_e26CNOe);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild126CNOg];
        return $res;
    };
    hs_zdcdecodeFloat25upi1.evaluate = function (hs_ds26CNOj) {
        var hs_wild26COEP = hs_ds26CNOj;
        if (hs_ds26CNOj.notEvaluated) {
            hs_wild26COEP = hs_ds26CNOj.hscall();
        }
        var hs_fzh26CNOm = hs_wild26COEP.data[0];
        throw "primitive operation decodeFloat_Int#. Not implemeted yet.";
        var hs_i26CNOq = hs_wild126COEQ[0];
        var hs_e26CNOs = hs_wild126COEQ[1];
        var hs_sat26COER = new $hs.Data(1);
        hs_sat26COER.data = [hs_e26CNOs];
        var hs_sat26COEO = new $hs.Thunk();
        hs_sat26COEO.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_i26CNOq);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26COEO, hs_sat26COER];
        return $res;
    };
    hs_zdcfloatRange25upie.evaluate = function (hs_ds26CNOz) {
        var hs_sat26COET = new $hs.Data(1);
        hs_sat26COET.data = [128];
        var hs_sat26COES = new $hs.Thunk();
        hs_sat26COES.evaluateOnce = function () {
            var hs_sat26COEU = new $hs.Data(1);
            hs_sat26COEU.data = [125];
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COEU);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26COES, hs_sat26COET];
        return $res;
    };
    hs_zdcfloatDigits25upik.evaluate = function (hs_ds26CNOC) {
        var $res = new $hs.Data(1);
        $res.data = [24];
        return $res;
    };
    hs_zdcfloatRadix25upin.evaluate = function (hs_ds26CNOF) {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
    };
    hs_zdcfromInteger125upiq.evaluate = function (hs_eta26CNOI) {
        var hs_wild26CNOK = $hs.modules.GHCziInteger.hs_doubleFromInteger.hscall(hs_eta26CNOI);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild26CNOK];
        return $res;
    };
    hs_zdcabs125upiv.evaluate = function (hs_x26CNON) {
        var hs_sat26COEV = new $hs.Data(1);
        hs_sat26COEV.data = [0 % 1];
        var hs_wild26COEW = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_x26CNON, hs_sat26COEV);
        switch (hs_wild26COEW.tag) {
        case 1:
            return $hs.modules.GHCziFloat.hs_negateDouble.hscall(hs_x26CNON);
        case 2:
            if (hs_x26CNON.notEvaluated) {
                return hs_x26CNON.hscall();
            } else {
                return hs_x26CNON;
            }
        }
    };
    hs_zdcnegate125upiA.evaluate = function (hs_x26CNOS) {
        return $hs.modules.GHCziFloat.hs_negateDouble.hscall(hs_x26CNOS);
    };
    hs_zdczm125upiD.evaluate = function (hs_x26CNOW, hs_y26CNOX) {
        return $hs.modules.GHCziFloat.hs_minusDouble.hscall(hs_x26CNOW, hs_y26CNOX);
    };
    hs_zdczt125upiI.evaluate = function (hs_x26CNP1, hs_y26CNP2) {
        return $hs.modules.GHCziFloat.hs_timesDouble.hscall(hs_x26CNP1, hs_y26CNP2);
    };
    hs_zdczp125upiN.evaluate = function (hs_x26CNP6, hs_y26CNP7) {
        return $hs.modules.GHCziFloat.hs_plusDouble.hscall(hs_x26CNP6, hs_y26CNP7);
    };
    hs_zdctoRational125upiS.evaluate = function (hs_ds26CNPa) {
        var hs_wild26COEX = hs_ds26CNPa;
        if (hs_ds26CNPa.notEvaluated) {
            hs_wild26COEX = hs_ds26CNPa.hscall();
        }
        var hs_xzh26CNPd = hs_wild26COEX.data[0];
        var hs_wild126COEY = $hs.modules.GHCziInteger.hs_decodeDoubleInteger.hscall(hs_xzh26CNPd);
        var hs_m26CNPj = hs_wild126COEY[0];
        var hs_ezh26CNPh = hs_wild126COEY[1];
        var hs_wild226COEZ = hs_ezh26CNPh >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226COEZ.tag) {
        case 1:
            var hs_wild326CNPl = $hs.modules.GHCziInteger.hs_integerToInt.hscall(hs_m26CNPj);
            var hs_sat26COF0 = hs_wild326CNPl;
            var hs_sat26COF1 = hs_sat26COF0 & 1;
            var hs_wild426COF2 = hs_sat26COF1 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild426COF2.tag) {
            case 1:
                var hs_tpl26CNPt = hs_m26CNPj;
                if (hs_m26CNPj.notEvaluated) {
                    hs_tpl26CNPt = hs_m26CNPj.hscall();
                }
                var hs_sat26COF6 = -hs_ezh26CNPh;
                var hs_sat26COF7 = new $hs.Thunk();
                hs_sat26COF7.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                var hs_tpl126CNPu = $hs.modules.GHCziInteger.hs_shiftLInteger.hscall(hs_sat26COF7, hs_sat26COF6);
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl26CNPt, hs_tpl126CNPu];
                return $res;
            case 2:
                var hs_sat26COF3 = -hs_ezh26CNPh;
                var hs_wild526COF4 = $hs.modules.GHCziFloatziConversionUtils.hs_elimZZerosInteger.hscall(hs_m26CNPj, hs_sat26COF3);
                var hs_n26CNPz = hs_wild526COF4[0];
                var hs_dzh26CNPC = hs_wild526COF4[1];
                var hs_tpl26CNPE = hs_n26CNPz;
                if (hs_n26CNPz.notEvaluated) {
                    hs_tpl26CNPE = hs_n26CNPz.hscall();
                }
                var hs_sat26COF5 = new $hs.Thunk();
                hs_sat26COF5.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                var hs_tpl126CNPF = $hs.modules.GHCziInteger.hs_shiftLInteger.hscall(hs_sat26COF5, hs_dzh26CNPC);
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl26CNPE, hs_tpl126CNPF];
                return $res;
            }
        case 2:
            var hs_tpl26CNPI = $hs.modules.GHCziInteger.hs_shiftLInteger.hscall(hs_m26CNPj, hs_ezh26CNPh);
            var hs_tpl126CNPJ = $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            var $res = new $hs.Data(1);
            $res.data = [hs_tpl26CNPI, hs_tpl126CNPJ];
            return $res;
        }
    };
    hs_zdczs125upju.evaluate = function (hs_x26CNPN, hs_y26CNPO) {
        return $hs.modules.GHCziFloat.hs_divideDouble.hscall(hs_x26CNPN, hs_y26CNPO);
    };
    hs_zdccosh125upjz.evaluate = function (hs_x26CNPR) {
        return $hs.modules.GHCziFloat.hs_coshDouble.hscall(hs_x26CNPR);
    };
    hs_zdctanh125upjC.evaluate = function (hs_x26CNPU) {
        return $hs.modules.GHCziFloat.hs_tanhDouble.hscall(hs_x26CNPU);
    };
    hs_zdcsinh125upjF.evaluate = function (hs_x26CNPX) {
        return $hs.modules.GHCziFloat.hs_sinhDouble.hscall(hs_x26CNPX);
    };
    hs_zdcacos125upjI.evaluate = function (hs_x26CNQ0) {
        return $hs.modules.GHCziFloat.hs_acosDouble.hscall(hs_x26CNQ0);
    };
    hs_zdcatan125upjL.evaluate = function (hs_x26CNQ3) {
        return $hs.modules.GHCziFloat.hs_atanDouble.hscall(hs_x26CNQ3);
    };
    hs_zdcasin125upjO.evaluate = function (hs_x26CNQ6) {
        return $hs.modules.GHCziFloat.hs_asinDouble.hscall(hs_x26CNQ6);
    };
    hs_zdccos125upjR.evaluate = function (hs_x26CNQ9) {
        return $hs.modules.GHCziFloat.hs_cosDouble.hscall(hs_x26CNQ9);
    };
    hs_zdctan125upjU.evaluate = function (hs_x26CNQc) {
        return $hs.modules.GHCziFloat.hs_tanDouble.hscall(hs_x26CNQc);
    };
    hs_zdcsin125upjX.evaluate = function (hs_x26CNQf) {
        return $hs.modules.GHCziFloat.hs_sinDouble.hscall(hs_x26CNQf);
    };
    hs_zdcztzt125upk0.evaluate = function (hs_x26CNQj, hs_y26CNQk) {
        return $hs.modules.GHCziFloat.hs_powerDouble.hscall(hs_x26CNQj, hs_y26CNQk);
    };
    hs_zdclog125upk5.evaluate = function (hs_x26CNQn) {
        return $hs.modules.GHCziFloat.hs_logDouble.hscall(hs_x26CNQn);
    };
    hs_zdcsqrt125upk8.evaluate = function (hs_x26CNQq) {
        return $hs.modules.GHCziFloat.hs_sqrtDouble.hscall(hs_x26CNQq);
    };
    hs_zdcexp125upkb.evaluate = function (hs_x26CNQt) {
        return $hs.modules.GHCziFloat.hs_expDouble.hscall(hs_x26CNQt);
    };
    hs_zdcpi125upke.data = [1570796326794896619 % 500000000000000000];
    hs_zdcisIEEE125upkf.evaluate = function (hs_ds26CNQx) {
        var $res = new $hs.Data(2);
        $res.data = [];
        return $res;
    };
    hs_zdcisNegativeZZero125upki.evaluate = function (hs_x26CNQB) {
        var hs_sat26COF9 = new $hs.Thunk();
        hs_sat26COF9.evaluateOnce = function () {
            var hs_ds26COFb = hs_x26CNQB;
            if (hs_x26CNQB.notEvaluated) {
                hs_ds26COFb = hs_x26CNQB.hscall();
            }
            var hs_ds126CNQF = hs_ds26COFb.data[0];
            var hs_wild26COFc = [$hs.modules.GHCziPrim.hs_realWorldzh, isDoubleNegativeero(hs_ds126CNQF)];
            var hs_ds326CNQK = hs_wild26COFc[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326CNQK];
            return $res;
        };
        var hs_sat26COF8 = new $hs.Data(1);
        hs_sat26COF8.data = [0];
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26COF8, hs_sat26COF9);
    };
    hs_zdcisDenormalizzed125upkw.evaluate = function (hs_x26CNQP) {
        var hs_sat26COFe = new $hs.Thunk();
        hs_sat26COFe.evaluateOnce = function () {
            var hs_ds26COFg = hs_x26CNQP;
            if (hs_x26CNQP.notEvaluated) {
                hs_ds26COFg = hs_x26CNQP.hscall();
            }
            var hs_ds126CNQT = hs_ds26COFg.data[0];
            var hs_wild26COFh = [$hs.modules.GHCziPrim.hs_realWorldzh, isDoubleDenormali=d(hs_ds126CNQT)];
            var hs_ds326CNQY = hs_wild26COFh[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326CNQY];
            return $res;
        };
        var hs_sat26COFd = new $hs.Data(1);
        hs_sat26COFd.data = [0];
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26COFd, hs_sat26COFe);
    };
    hs_zdcisInfinite125upkK.evaluate = function (hs_x26CNR3) {
        var hs_sat26COFj = new $hs.Thunk();
        hs_sat26COFj.evaluateOnce = function () {
            var hs_ds26COFl = hs_x26CNR3;
            if (hs_x26CNR3.notEvaluated) {
                hs_ds26COFl = hs_x26CNR3.hscall();
            }
            var hs_ds126CNR7 = hs_ds26COFl.data[0];
            var hs_wild26COFm = [$hs.modules.GHCziPrim.hs_realWorldzh, isDoubleInfinite(hs_ds126CNR7)];
            var hs_ds326CNRc = hs_wild26COFm[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326CNRc];
            return $res;
        };
        var hs_sat26COFi = new $hs.Data(1);
        hs_sat26COFi.data = [0];
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26COFi, hs_sat26COFj);
    };
    hs_zdcisNaN125upkY.evaluate = function (hs_x26CNRh) {
        var hs_sat26COFo = new $hs.Thunk();
        hs_sat26COFo.evaluateOnce = function () {
            var hs_ds26COFq = hs_x26CNRh;
            if (hs_x26CNRh.notEvaluated) {
                hs_ds26COFq = hs_x26CNRh.hscall();
            }
            var hs_ds126CNRl = hs_ds26COFq.data[0];
            var hs_wild26COFr = [$hs.modules.GHCziPrim.hs_realWorldzh, isDoubleNaN(hs_ds126CNRl)];
            var hs_ds326CNRq = hs_wild26COFr[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326CNRq];
            return $res;
        };
        var hs_sat26COFn = new $hs.Data(1);
        hs_sat26COFn.data = [0];
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26COFn, hs_sat26COFo);
    };
    hs_zdcencodeFloat125uplc.evaluate = function (hs_i26CNRy, hs_ds26CNRv) {
        var hs_wild26COFs = hs_ds26CNRv;
        if (hs_ds26CNRv.notEvaluated) {
            hs_wild26COFs = hs_ds26CNRv.hscall();
        }
        var hs_j26CNRz = hs_wild26COFs.data[0];
        var hs_wild126CNRB = $hs.modules.GHCziInteger.hs_encodeDoubleInteger.hscall(hs_i26CNRy, hs_j26CNRz);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild126CNRB];
        return $res;
    };
    hs_zdcdecodeFloat125uplm.evaluate = function (hs_ds26CNRE) {
        var hs_wild26COFu = hs_ds26CNRE;
        if (hs_ds26CNRE.notEvaluated) {
            hs_wild26COFu = hs_ds26CNRE.hscall();
        }
        var hs_xzh26CNRH = hs_wild26COFu.data[0];
        var hs_wild126COFv = $hs.modules.GHCziInteger.hs_decodeDoubleInteger.hscall(hs_xzh26CNRH);
        var hs_i26CNRL = hs_wild126COFv[0];
        var hs_j26CNRM = hs_wild126COFv[1];
        var hs_sat26COFt = new $hs.Data(1);
        hs_sat26COFt.data = [hs_j26CNRM];
        var $res = new $hs.Data(1);
        $res.data = [hs_i26CNRL, hs_sat26COFt];
        return $res;
    };
    hs_zdcfloatRange125uply.evaluate = function (hs_ds26CNRT) {
        var hs_sat26COFx = new $hs.Data(1);
        hs_sat26COFx.data = [1024];
        var hs_sat26COFw = new $hs.Thunk();
        hs_sat26COFw.evaluateOnce = function () {
            var hs_sat26COFy = new $hs.Data(1);
            hs_sat26COFy.data = [1021];
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COFy);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26COFw, hs_sat26COFx];
        return $res;
    };
    hs_zdcfloatDigits125uplE.evaluate = function (hs_ds26CNRW) {
        var $res = new $hs.Data(1);
        $res.data = [53];
        return $res;
    };
    hs_zdcfloatRadix125uplH.evaluate = function (hs_ds26CNRZ) {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
    };
    this.hs_roundTo.evaluate = function (hs_base26CNS4, hs_d26CNT4, hs_is26CNT5) {
        var hs_b226CNS6 = new $hs.Thunk();
        hs_b226CNS6.evaluateOnce = function () {
            var hs_sat26COG8 = new $hs.Data(1);
            hs_sat26COG8.data = [2];
            return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_base26CNS4, hs_sat26COG8);
        };
        var hs_f26CNSq = new $hs.Func(2);
        hs_f26CNSq.evaluate = function (hs_n26CNSd, hs_ds26CNSa) {
            var hs_wild26CNSk = hs_ds26CNSa;
            if (hs_ds26CNSa.notEvaluated) {
                hs_wild26CNSk = hs_ds26CNSa.hscall();
            }
            switch (hs_wild26CNSk.tag) {
            case 1:
                var hs_sat26COG6 = new $hs.Thunk();
                hs_sat26COG6.evaluateOnce = function () {
                    var hs_sat26COG7 = new $hs.Data(1);
                    hs_sat26COG7.data = [0];
                    return $hs.modules.GHCziList.hs_replicate.hscall(hs_n26CNSd, hs_sat26COG7);
                };
                var hs_sat26COG5 = new $hs.Data(1);
                hs_sat26COG5.data = [0];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26COG5, hs_sat26COG6];
                return $res;
            case 2:
                var hs_fail26CNST = new $hs.Func(1);
                hs_fail26CNST.evaluate = function (hs_ds126CNSS) {
                    var hs_wild126COFO = hs_wild26CNSk;
                    if (hs_wild26CNSk.notEvaluated) {
                        hs_wild126COFO = hs_wild26CNSk.hscall();
                    }
                    switch (hs_wild126COFO.tag) {
                    case 1:
                        return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Float.lhs:(615,3)-(622,21)|function f\x00");
                    case 2:
                        var hs_i26CNSA = hs_wild126COFO.data[0];
                        var hs_xs26CNSs = hs_wild126COFO.data[1];
                        var hs_ds226CNSt = new $hs.Thunk();
                        hs_ds226CNSt.evaluateOnce = function () {
                            var hs_sat26COG3 = new $hs.Thunk();
                            hs_sat26COG3.evaluateOnce = function () {
                                var hs_sat26COG4 = new $hs.Data(1);
                                hs_sat26COG4.data = [1];
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26CNSd, hs_sat26COG4);
                            };
                            return hs_f26CNSq.hscall(hs_sat26COG3, hs_xs26CNSs);
                        };
                        var hs_izq26CNSB = new $hs.Thunk();
                        hs_izq26CNSB.evaluateOnce = function () {
                            var hs_sat26COG0 = new $hs.Thunk();
                            hs_sat26COG0.evaluateOnce = function () {
                                var hs_wild226COG2 = hs_ds226CNSt;
                                if (hs_ds226CNSt.notEvaluated) {
                                    hs_wild226COG2 = hs_ds226CNSt.hscall();
                                }
                                var hs_c26CNSy = hs_wild226COG2.data[0];
                                if (hs_c26CNSy.notEvaluated) {
                                    return hs_c26CNSy.hscall();
                                } else {
                                    return hs_c26CNSy;
                                }
                            };
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COG0, hs_i26CNSA);
                        };
                        var hs_wild226COFP = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_izq26CNSB, hs_base26CNS4);
                        switch (hs_wild226COFP.tag) {
                        case 1:
                            var hs_sat26COFW = new $hs.Thunk();
                            hs_sat26COFW.evaluateOnce = function () {
                                var hs_wild326COFZ = hs_ds226CNSt;
                                if (hs_ds226CNSt.notEvaluated) {
                                    hs_wild326COFZ = hs_ds226CNSt.hscall();
                                }
                                var hs_ds326CNSH = hs_wild326COFZ.data[1];
                                if (hs_ds326CNSH.notEvaluated) {
                                    return hs_ds326CNSH.hscall();
                                } else {
                                    return hs_ds326CNSH;
                                }
                            };
                            var hs_sat26COFX = new $hs.Data(2);
                            hs_sat26COFX.data = [hs_izq26CNSB, hs_sat26COFW];
                            var hs_sat26COFV = new $hs.Data(1);
                            hs_sat26COFV.data = [0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_sat26COFV, hs_sat26COFX];
                            return $res;
                        case 2:
                            var hs_sat26COFQ = new $hs.Thunk();
                            hs_sat26COFQ.evaluateOnce = function () {
                                var hs_wild326COFU = hs_ds226CNSt;
                                if (hs_ds226CNSt.notEvaluated) {
                                    hs_wild326COFU = hs_ds226CNSt.hscall();
                                }
                                var hs_ds326CNSP = hs_wild326COFU.data[1];
                                if (hs_ds326CNSP.notEvaluated) {
                                    return hs_ds326CNSP.hscall();
                                } else {
                                    return hs_ds326CNSP;
                                }
                            };
                            var hs_sat26COFR = new $hs.Data(1);
                            hs_sat26COFR.data = [0];
                            var hs_sat26COFS = new $hs.Data(2);
                            hs_sat26COFS.data = [hs_sat26COFR, hs_sat26COFQ];
                            var hs_sat26COFN = new $hs.Data(1);
                            hs_sat26COFN.data = [1];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_sat26COFN, hs_sat26COFS];
                            return $res;
                        }
                    }
                };
                var hs_wild126COFJ = hs_n26CNSd;
                if (hs_n26CNSd.notEvaluated) {
                    hs_wild126COFJ = hs_n26CNSd.hscall();
                }
                var hs_ds126CNSW = hs_wild126COFJ.data[0];
                var hs_ds226COFI = hs_ds126CNSW;
                if (hs_ds126CNSW.notEvaluated) {
                    hs_ds226COFI = hs_ds126CNSW.hscall();
                }
                switch (hs_ds226COFI) {
                case 0:
                    var hs_wild226COFG = hs_wild26CNSk;
                    if (hs_wild26CNSk.notEvaluated) {
                        hs_wild226COFG = hs_wild26CNSk.hscall();
                    }
                    switch (hs_wild226COFG.tag) {
                    case 1:
                        return hs_fail26CNST.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    case 2:
                        var hs_x26CNT1 = hs_wild226COFG.data[0];
                        var hs_sat26COFF = new $hs.Thunk();
                        hs_sat26COFF.evaluateOnce = function () {
                            var hs_wild326COFM = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_x26CNT1, hs_b226CNS6);
                            switch (hs_wild326COFM.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [0];
                                return $res;
                            case 2:
                                var $res = new $hs.Data(1);
                                $res.data = [1];
                                return $res;
                            }
                        };
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26COFF, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $res;
                    }
                default:
                    return hs_fail26CNST.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            }
        };
        var hs_wild26CNTf = hs_f26CNSq.hscall(hs_d26CNT4, hs_is26CNT5);
        var hs_ds26CNT9 = hs_wild26CNTf.data[0];
        var hs_ds126CNTi = hs_wild26CNTf.data[1];
        var hs_wild126COFA = hs_ds26CNT9;
        if (hs_ds26CNT9.notEvaluated) {
            hs_wild126COFA = hs_ds26CNT9.hscall();
        }
        var hs_ds226CNTc = hs_wild126COFA.data[0];
        var hs_ds326COFz = hs_ds226CNTc;
        if (hs_ds226CNTc.notEvaluated) {
            hs_ds326COFz = hs_ds226CNTc.hscall();
        }
        switch (hs_ds326COFz) {
        case 0:
            if (hs_wild26CNTf.notEvaluated) {
                return hs_wild26CNTf.hscall();
            } else {
                return hs_wild26CNTf;
            }
        case 1:
            var hs_sat26COFC = new $hs.Data(1);
            hs_sat26COFC.data = [1];
            var hs_sat26COFD = new $hs.Data(2);
            hs_sat26COFD.data = [hs_sat26COFC, hs_ds126CNTi];
            var hs_sat26COFB = new $hs.Data(1);
            hs_sat26COFB.data = [1];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26COFB, hs_sat26COFD];
            return $res;
        default:
            var hs_sat26COFE = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("roundTo: bad Value\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26COFE);
        }
    };
    hs_zddNum25upn4.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddOrd25upn5.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddFractional25upn6.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    this.hs_scaleRat.evaluate = function (hs_b26CNTB, hs_minExp26CNTu, hs_xMin26CNTz, hs_xMax26CNTx, hs_p26CNTt, hs_x26CNTw) {
        var hs_wild26COG9 = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_p26CNTt, hs_minExp26CNTu);
        switch (hs_wild26COG9.tag) {
        case 1:
            var hs_wild126COGb = $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd25upn5, hs_x26CNTw, hs_xMax26CNTx);
            switch (hs_wild126COGb.tag) {
            case 1:
                var hs_wild226COGf = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd25upn5, hs_x26CNTw, hs_xMin26CNTz);
                switch (hs_wild226COGf.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [hs_x26CNTw, hs_p26CNTt];
                    return $res;
                case 2:
                    var hs_sat26COGg = new $hs.Thunk();
                    hs_sat26COGg.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum25upn4, hs_x26CNTw, hs_b26CNTB);
                    };
                    var hs_sat26COGe = new $hs.Thunk();
                    hs_sat26COGe.evaluateOnce = function () {
                        var hs_sat26COGh = new $hs.Data(1);
                        hs_sat26COGh.data = [1];
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p26CNTt, hs_sat26COGh);
                    };
                    return $hs.modules.GHCziFloat.hs_scaleRat.hscall(hs_b26CNTB, hs_minExp26CNTu, hs_xMin26CNTz, hs_xMax26CNTx, hs_sat26COGe, hs_sat26COGg);
                }
            case 2:
                var hs_sat26COGc = new $hs.Thunk();
                hs_sat26COGc.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional25upn6, hs_x26CNTw, hs_b26CNTB);
                };
                var hs_sat26COGa = new $hs.Thunk();
                hs_sat26COGa.evaluateOnce = function () {
                    var hs_sat26COGd = new $hs.Data(1);
                    hs_sat26COGd.data = [1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p26CNTt, hs_sat26COGd);
                };
                return $hs.modules.GHCziFloat.hs_scaleRat.hscall(hs_b26CNTB, hs_minExp26CNTu, hs_xMin26CNTz, hs_xMax26CNTx, hs_sat26COGa, hs_sat26COGc);
            }
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [hs_x26CNTw, hs_p26CNTt];
            return $res;
        }
    };
    hs_sat26COGo.evaluateOnce = function () {
        var hs_ds26CNTU = new $hs.Func(1);
        hs_ds26CNTU.evaluate = function (hs_ds126CNTL) {
            var hs_ds226COGk = hs_ds126CNTL;
            if (hs_ds126CNTL.notEvaluated) {
                hs_ds226COGk = hs_ds126CNTL.hscall();
            }
            switch (hs_ds226COGk.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326CNTP = hs_ds226COGk.data[0];
                var hs_ds426CNTT = hs_ds226COGk.data[1];
                var hs_sat26COGl = new $hs.Thunk();
                hs_sat26COGl.evaluateOnce = function () {
                    return hs_ds26CNTU.hscall(hs_ds426CNTT);
                };
                var hs_sat26COGm = new $hs.Thunk();
                hs_sat26COGm.evaluateOnce = function () {
                    var hs_sat26COGn = new $hs.Thunk();
                    hs_sat26COGn.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(10);
                    };
                    return $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26COGn, hs_ds326CNTP);
                };
                var hs_sat26COGj = new $hs.Data(1);
                hs_sat26COGj.data = [hs_ds326CNTP, hs_sat26COGm];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26COGj, hs_sat26COGl];
                return $res;
            }
        };
        var hs_sat26COGi = new $hs.Thunk();
        hs_sat26COGi.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, $hs.modules.GHCziFloat.hs_minExpt, $hs.modules.GHCziFloat.hs_maxExpt10);
        };
        return hs_ds26CNTU.hscall(hs_sat26COGi);
    };
    hs_sat26COGp.data = [$hs.modules.GHCziFloat.hs_minExpt, $hs.modules.GHCziFloat.hs_maxExpt10];
    this.hs_expts10.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_array.hscall($hs.modules.GHCziArr.hs_zdfIxInt, hs_sat26COGp, hs_sat26COGo);
    };
    hs_sat26COGw.evaluateOnce = function () {
        var hs_ds26CNUa = new $hs.Func(1);
        hs_ds26CNUa.evaluate = function (hs_ds126CNU1) {
            var hs_ds226COGs = hs_ds126CNU1;
            if (hs_ds126CNU1.notEvaluated) {
                hs_ds226COGs = hs_ds126CNU1.hscall();
            }
            switch (hs_ds226COGs.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326CNU5 = hs_ds226COGs.data[0];
                var hs_ds426CNU9 = hs_ds226COGs.data[1];
                var hs_sat26COGt = new $hs.Thunk();
                hs_sat26COGt.evaluateOnce = function () {
                    return hs_ds26CNUa.hscall(hs_ds426CNU9);
                };
                var hs_sat26COGu = new $hs.Thunk();
                hs_sat26COGu.evaluateOnce = function () {
                    var hs_sat26COGv = new $hs.Thunk();
                    hs_sat26COGv.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                    };
                    return $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26COGv, hs_ds326CNU5);
                };
                var hs_sat26COGr = new $hs.Data(1);
                hs_sat26COGr.data = [hs_ds326CNU5, hs_sat26COGu];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26COGr, hs_sat26COGt];
                return $res;
            }
        };
        var hs_sat26COGq = new $hs.Thunk();
        hs_sat26COGq.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, $hs.modules.GHCziFloat.hs_minExpt, $hs.modules.GHCziFloat.hs_maxExpt);
        };
        return hs_ds26CNUa.hscall(hs_sat26COGq);
    };
    hs_sat26COGx.data = [$hs.modules.GHCziFloat.hs_minExpt, $hs.modules.GHCziFloat.hs_maxExpt];
    this.hs_expts.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_array.hscall($hs.modules.GHCziArr.hs_zdfIxInt, hs_sat26COGx, hs_sat26COGw);
    };
    this.hs_expt.evaluate = function (hs_base26CNUg, hs_n26CNUj) {
        var hs_sat26COGy = new $hs.Thunk();
        hs_sat26COGy.evaluateOnce = function () {
            var hs_sat26COGH = new $hs.Thunk();
            hs_sat26COGH.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_n26CNUj, $hs.modules.GHCziFloat.hs_maxExpt);
            };
            var hs_sat26COGG = new $hs.Thunk();
            hs_sat26COGG.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_n26CNUj, $hs.modules.GHCziFloat.hs_minExpt);
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COGG, hs_sat26COGH);
        };
        var hs_sat26COGz = new $hs.Thunk();
        hs_sat26COGz.evaluateOnce = function () {
            var hs_sat26COGF = new $hs.Thunk();
            hs_sat26COGF.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
            };
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_base26CNUg, hs_sat26COGF);
        };
        var hs_wild26COGA = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COGz, hs_sat26COGy);
        switch (hs_wild26COGA.tag) {
        case 1:
            var hs_sat26COGB = new $hs.Thunk();
            hs_sat26COGB.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_n26CNUj, $hs.modules.GHCziFloat.hs_maxExpt10);
            };
            var hs_sat26COGC = new $hs.Thunk();
            hs_sat26COGC.evaluateOnce = function () {
                var hs_sat26COGE = new $hs.Thunk();
                hs_sat26COGE.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(10);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_base26CNUg, hs_sat26COGE);
            };
            var hs_wild126COGD = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COGC, hs_sat26COGB);
            switch (hs_wild126COGD.tag) {
            case 1:
                return $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_base26CNUg, hs_n26CNUj);
            case 2:
                return $hs.modules.GHCziArr.hs_zn.hscall($hs.modules.GHCziArr.hs_zdfIxInt, $hs.modules.GHCziFloat.hs_expts10, hs_n26CNUj);
            }
        case 2:
            return $hs.modules.GHCziArr.hs_zn.hscall($hs.modules.GHCziArr.hs_zdfIxInt, $hs.modules.GHCziFloat.hs_expts, hs_n26CNUj);
        }
    };
    this.hs_integerLogBase.evaluate = function (hs_b26CNUv, hs_i26CNUu) {
        var hs_wild26COGI = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_i26CNUu, hs_b26CNUv);
        switch (hs_wild26COGI.tag) {
        case 1:
            var hs_sat26COGJ = new $hs.Thunk();
            hs_sat26COGJ.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
            };
            var hs_wild126COGK = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_b26CNUv, hs_sat26COGJ);
            switch (hs_wild126COGK.tag) {
            case 1:
                var hs_wild226CNUA = $hs.modules.GHCziIntegerziLogarithms.hs_integerLogBasezh.hscall(hs_b26CNUv, hs_i26CNUu);
                var $res = new $hs.Data(1);
                $res.data = [hs_wild226CNUA];
                return $res;
            case 2:
                var hs_wild226CNUC = $hs.modules.GHCziIntegerziLogarithmsziInternals.hs_integerLog2zh.hscall(hs_i26CNUu);
                var $res = new $hs.Data(1);
                $res.data = [hs_wild226CNUC];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [0];
            return $res;
        }
    };
    this.hs_fromRatzq.evaluate = function (hs_zddRealFloat26CNUN) {
        var hs_zddRealFrac226CNUF = new $hs.Thunk();
        hs_zddRealFrac226CNUF.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfRealFracRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
        };
        var hs_sat26COGL = new $hs.Func(1);
        hs_sat26COGL.evaluate = function (hs_x26CNV9) {
            var hs_r26CNV0 = new $hs.Thunk();
            var hs_p26CNV1 = new $hs.Thunk();
            var hs_minExp26CNV7 = new $hs.Thunk();
            var hs_b26CNV8 = new $hs.Thunk();
            var hs_p026CNVg = new $hs.Thunk();
            var hs_ds26CNUO = new $hs.Thunk();
            hs_r26CNV0.evaluateOnce = function () {
                var hs_sat26COH3 = new $hs.Thunk();
                hs_sat26COH3.evaluateOnce = function () {
                    var hs_wild26COH8 = hs_ds26CNUO;
                    if (hs_ds26CNUO.notEvaluated) {
                        hs_wild26COH8 = hs_ds26CNUO.hscall();
                    }
                    var hs_pzq26CNUY = hs_wild26COH8.data[1];
                    if (hs_pzq26CNUY.notEvaluated) {
                        return hs_pzq26CNUY.hscall();
                    } else {
                        return hs_pzq26CNUY;
                    }
                };
                var hs_sat26COH2 = new $hs.Thunk();
                hs_sat26COH2.evaluateOnce = function () {
                    var hs_sat26COH4 = new $hs.Thunk();
                    hs_sat26COH4.evaluateOnce = function () {
                        var hs_wild26COH6 = hs_ds26CNUO;
                        if (hs_ds26CNUO.notEvaluated) {
                            hs_wild26COH6 = hs_ds26CNUO.hscall();
                        }
                        var hs_xzq26CNUS = hs_wild26COH6.data[0];
                        if (hs_xzq26CNUS.notEvaluated) {
                            return hs_xzq26CNUS.hscall();
                        } else {
                            return hs_xzq26CNUS;
                        }
                    };
                    return $hs.modules.GHCziReal.hs_round.hscall(hs_zddRealFrac226CNUF, $hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26COH4);
                };
                return $hs.modules.GHCziFloat.hs_encodeFloat.hscall(hs_zddRealFloat26CNUN, hs_sat26COH2, hs_sat26COH3);
            };
            hs_p26CNV1.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_floatDigits.hscall(hs_zddRealFloat26CNUN, hs_r26CNV0);
            };
            hs_minExp26CNV7.evaluateOnce = function () {
                var hs_sat26COH9 = new $hs.Thunk();
                hs_sat26COH9.evaluateOnce = function () {
                    var hs_wild26COHb = $hs.modules.GHCziFloat.hs_floatRange.hscall(hs_zddRealFloat26CNUN, hs_r26CNV0);
                    var hs_minExp026CNV5 = hs_wild26COHb.data[0];
                    if (hs_minExp026CNV5.notEvaluated) {
                        return hs_minExp026CNV5.hscall();
                    } else {
                        return hs_minExp026CNV5;
                    }
                };
                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COH9, hs_p26CNV1);
            };
            hs_b26CNV8.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_floatRadix.hscall(hs_zddRealFloat26CNUN, hs_r26CNV0);
            };
            hs_p026CNVg.evaluateOnce = function () {
                var hs_sat26COHc = new $hs.Thunk();
                hs_sat26COHc.evaluateOnce = function () {
                    var hs_sat26COHd = new $hs.Thunk();
                    hs_sat26COHd.evaluateOnce = function () {
                        var hs_sat26COHf = new $hs.Thunk();
                        hs_sat26COHf.evaluateOnce = function () {
                            var hs_sat26COHh = new $hs.Thunk();
                            hs_sat26COHh.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_denominator.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_x26CNV9);
                            };
                            return $hs.modules.GHCziFloat.hs_integerLogBase.hscall(hs_b26CNV8, hs_sat26COHh);
                        };
                        var hs_sat26COHe = new $hs.Thunk();
                        hs_sat26COHe.evaluateOnce = function () {
                            var hs_sat26COHg = new $hs.Thunk();
                            hs_sat26COHg.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_numerator.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_x26CNV9);
                            };
                            return $hs.modules.GHCziFloat.hs_integerLogBase.hscall(hs_b26CNV8, hs_sat26COHg);
                        };
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COHe, hs_sat26COHf);
                    };
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COHd, hs_p26CNV1);
                };
                return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26COHc, hs_minExp26CNV7);
            };
            hs_ds26CNUO.evaluateOnce = function () {
                var hs_sat26COGN = new $hs.Thunk();
                hs_sat26COGN.evaluateOnce = function () {
                    var hs_sat26COGU = new $hs.Thunk();
                    hs_sat26COGU.evaluateOnce = function () {
                        var hs_sat26COGW = new $hs.Data(1);
                        hs_sat26COGW.data = [0];
                        var hs_wild26COGX = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_p026CNVg, hs_sat26COGW);
                        switch (hs_wild26COGX.tag) {
                        case 1:
                            var hs_sat26COH1 = new $hs.Thunk();
                            hs_sat26COH1.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            var hs_sat26COH0 = new $hs.Thunk();
                            hs_sat26COH0.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_expt.hscall(hs_b26CNV8, hs_p026CNVg);
                            };
                            return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26COH0, hs_sat26COH1);
                        case 2:
                            var hs_sat26COGY = new $hs.Thunk();
                            hs_sat26COGY.evaluateOnce = function () {
                                var hs_sat26COGZ = new $hs.Thunk();
                                hs_sat26COGZ.evaluateOnce = function () {
                                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p026CNVg);
                                };
                                return $hs.modules.GHCziFloat.hs_expt.hscall(hs_b26CNV8, hs_sat26COGZ);
                            };
                            var hs_sat26COGV = new $hs.Thunk();
                            hs_sat26COGV.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26COGV, hs_sat26COGY);
                        }
                    };
                    return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional25upn6, hs_x26CNV9, hs_sat26COGU);
                };
                var hs_sat26COGO = new $hs.Thunk();
                hs_sat26COGO.evaluateOnce = function () {
                    var hs_sat26COGT = new $hs.Thunk();
                    hs_sat26COGT.evaluateOnce = function () {
                        return $hs.modules.GHCziFloat.hs_expt.hscall(hs_b26CNV8, hs_p26CNV1);
                    };
                    return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziReal.hs_zdfRealInteger, hs_sat26COGT);
                };
                var hs_sat26COGP = new $hs.Thunk();
                hs_sat26COGP.evaluateOnce = function () {
                    var hs_sat26COGQ = new $hs.Thunk();
                    hs_sat26COGQ.evaluateOnce = function () {
                        var hs_sat26COGR = new $hs.Thunk();
                        hs_sat26COGR.evaluateOnce = function () {
                            var hs_sat26COGS = new $hs.Data(1);
                            hs_sat26COGS.data = [1];
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p26CNV1, hs_sat26COGS);
                        };
                        return $hs.modules.GHCziFloat.hs_expt.hscall(hs_b26CNV8, hs_sat26COGR);
                    };
                    return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziReal.hs_zdfRealInteger, hs_sat26COGQ);
                };
                var hs_sat26COGM = new $hs.Thunk();
                hs_sat26COGM.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziReal.hs_zdfRealInteger, hs_b26CNV8);
                };
                return $hs.modules.GHCziFloat.hs_scaleRat.hscall(hs_sat26COGM, hs_minExp26CNV7, hs_sat26COGP, hs_sat26COGO, hs_p026CNVg, hs_sat26COGN);
            };
            if (hs_r26CNV0.notEvaluated) {
                return hs_r26CNV0.hscall();
            } else {
                return hs_r26CNV0;
            }
        };
        if (hs_sat26COGL.notEvaluated) {
            return hs_sat26COGL.hscall();
        } else {
            return hs_sat26COGL;
        }
    };
    this.hs_fromRat.evaluate = function (hs_zddRealFloat26CNVB, hs_eta26CNVH) {
        var hs_zddFloating226CNVC = new $hs.Thunk();
        hs_zddFloating226CNVC.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_zdp2RealFloat.hscall(hs_zddRealFloat26CNVB);
        };
        var hs_zddFractional326CNVE = new $hs.Thunk();
        hs_zddFractional326CNVE.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_zdp1Floating.hscall(hs_zddFloating226CNVC);
        };
        var hs_zddNum326CNVG = new $hs.Thunk();
        hs_zddNum326CNVG.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional326CNVE);
        };
        var hs_wild26COHj = hs_eta26CNVH;
        if (hs_eta26CNVH.notEvaluated) {
            hs_wild26COHj = hs_eta26CNVH.hscall();
        }
        var hs_n26CNVO = hs_wild26COHj.data[0];
        var hs_ds26CNVL = hs_wild26COHj.data[1];
        var hs_sat26COHk = new $hs.Thunk();
        hs_sat26COHk.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_wild126COHl = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_ds26CNVL, hs_sat26COHk);
        switch (hs_wild126COHl.tag) {
        case 1:
            var hs_sat26COHD = new $hs.Thunk();
            hs_sat26COHD.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            var hs_wild226COHE = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26CNVO, hs_sat26COHD);
            switch (hs_wild226COHE.tag) {
            case 1:
                var hs_sat26COHG = new $hs.Thunk();
                hs_sat26COHG.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_wild326COHH = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26CNVO, hs_sat26COHG);
                switch (hs_wild326COHH.tag) {
                case 1:
                    var hs_sat26COHK = new $hs.Data(1);
                    hs_sat26COHK.data = [0];
                    var hs_sat26COHJ = new $hs.Thunk();
                    hs_sat26COHJ.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziFloat.hs_encodeFloat.hscall(hs_zddRealFloat26CNVB, hs_sat26COHJ, hs_sat26COHK);
                case 2:
                    var hs_sat26COHF = new $hs.Thunk();
                    hs_sat26COHF.evaluateOnce = function () {
                        var hs_sat26COHI = new $hs.Thunk();
                        hs_sat26COHI.evaluateOnce = function () {
                            var hs_tpl26CNVW = $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_n26CNVO);
                            var $res = new $hs.Data(1);
                            $res.data = [hs_tpl26CNVW, hs_ds26CNVL];
                            return $res;
                        };
                        return $hs.modules.GHCziFloat.hs_fromRatzq.hscall(hs_zddRealFloat26CNVB, hs_sat26COHI);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum326CNVG, hs_sat26COHF);
                }
            case 2:
                var hs_sat26COHC = new $hs.Data(1);
                hs_sat26COHC.data = [hs_n26CNVO, hs_ds26CNVL];
                return $hs.modules.GHCziFloat.hs_fromRatzq.hscall(hs_zddRealFloat26CNVB, hs_sat26COHC);
            }
        case 2:
            var hs_sat26COHm = new $hs.Thunk();
            hs_sat26COHm.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            var hs_wild226COHn = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26CNVO, hs_sat26COHm);
            switch (hs_wild226COHn.tag) {
            case 1:
                var hs_sat26COHs = new $hs.Thunk();
                hs_sat26COHs.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_wild326COHt = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26CNVO, hs_sat26COHs);
                switch (hs_wild326COHt.tag) {
                case 1:
                    var hs_sat26COHz = new $hs.Thunk();
                    hs_sat26COHz.evaluateOnce = function () {
                        var hs_sat26COHB = new $hs.Thunk();
                        hs_sat26COHB.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CNVG, hs_sat26COHB);
                    };
                    var hs_sat26COHy = new $hs.Thunk();
                    hs_sat26COHy.evaluateOnce = function () {
                        var hs_sat26COHA = new $hs.Thunk();
                        hs_sat26COHA.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CNVG, hs_sat26COHA);
                    };
                    return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional326CNVE, hs_sat26COHy, hs_sat26COHz);
                case 2:
                    var hs_sat26COHr = new $hs.Thunk();
                    hs_sat26COHr.evaluateOnce = function () {
                        var hs_sat26COHv = new $hs.Thunk();
                        hs_sat26COHv.evaluateOnce = function () {
                            var hs_sat26COHx = new $hs.Thunk();
                            hs_sat26COHx.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CNVG, hs_sat26COHx);
                        };
                        var hs_sat26COHu = new $hs.Thunk();
                        hs_sat26COHu.evaluateOnce = function () {
                            var hs_sat26COHw = new $hs.Thunk();
                            hs_sat26COHw.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CNVG, hs_sat26COHw);
                        };
                        return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional326CNVE, hs_sat26COHu, hs_sat26COHv);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum326CNVG, hs_sat26COHr);
                }
            case 2:
                var hs_sat26COHo = new $hs.Thunk();
                hs_sat26COHo.evaluateOnce = function () {
                    var hs_sat26COHq = new $hs.Thunk();
                    hs_sat26COHq.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CNVG, hs_sat26COHq);
                };
                var hs_sat26COHi = new $hs.Thunk();
                hs_sat26COHi.evaluateOnce = function () {
                    var hs_sat26COHp = new $hs.Thunk();
                    hs_sat26COHp.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CNVG, hs_sat26COHp);
                };
                return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional326CNVE, hs_sat26COHi, hs_sat26COHo);
            }
        }
    };
    this.hs_clamp.evaluate = function (hs_bd26CNWj, hs_k26CNWl) {
        var hs_sat26COHM = new $hs.Thunk();
        hs_sat26COHM.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_bd26CNWj, hs_k26CNWl);
        };
        var hs_sat26COHL = new $hs.Thunk();
        hs_sat26COHL.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_bd26CNWj);
        };
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26COHL, hs_sat26COHM);
    };
    hs_sat26COHO.evaluateOnce = function () {
        var hs_sat26COHN = new $hs.Data(1);
        hs_sat26COHN.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziFloat.hs_zdfShowFloat, hs_sat26COHN);
    };
    hs_sat26COHP.evaluateOnce = function () {
        var hs_sat26COHQ = new $hs.Data(1);
        hs_sat26COHQ.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziFloat.hs_zdfShowDouble, hs_sat26COHQ);
    };
    this.hs_fromRatzqzq.evaluate = function (hs_zddRealFloat26CNYA, hs_minEx26CNXs, hs_mantDigs26CNXv, hs_n26CNXG, hs_d26CNXy) {
        var hs_wild26CNXF = hs_minEx26CNXs;
        if (hs_minEx26CNXs.notEvaluated) {
            hs_wild26CNXF = hs_minEx26CNXs.hscall();
        }
        var hs_mezh26CNZ5 = hs_wild26CNXF.data[0];
        var hs_wild126CNXP = hs_mantDigs26CNXv;
        if (hs_mantDigs26CNXv.notEvaluated) {
            hs_wild126CNXP = hs_mantDigs26CNXv.hscall();
        }
        var hs_mdzh26CNZ9 = hs_wild126CNXP.data[0];
        var hs_wild226COHT = $hs.modules.GHCziIntegerziLogarithmsziInternals.hs_integerLog2IsPowerOf2zh.hscall(hs_d26CNXy);
        var hs_ldzh26CNXK = hs_wild226COHT[0];
        var hs_pwzh26CNXC = hs_wild226COHT[1];
        var hs_wild326COHS = hs_pwzh26CNXC;
        if (hs_pwzh26CNXC.notEvaluated) {
            hs_wild326COHS = hs_pwzh26CNXC.hscall();
        }
        switch (hs_wild326COHS) {
        case 0:
            var hs_lnzh26CNZ4 = $hs.modules.GHCziIntegerziLogarithmsziInternals.hs_integerLog2zh.hscall(hs_n26CNXG);
            var hs_sat26COHU = ($hs.Int.addCarry(hs_ldzh26CNXK, hs_mezh26CNZ5, 0))[0];
            var hs_wild426COHV = hs_lnzh26CNZ4 > hs_sat26COHU ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild426COHV.tag) {
            case 1:
                var hs_sat26COIf = ($hs.Int.addCarry(hs_mezh26CNZ5, ~hs_mdzh26CNZ9, 1))[0];
                var hs_ldzqzh26CNZb = ($hs.Int.addCarry(hs_ldzh26CNXK, hs_sat26COIf, 0))[0];
                var hs_sat26COIg = ($hs.Int.addCarry(hs_lnzh26CNZ4, 1, 0))[0];
                var hs_wild526COIh = hs_ldzqzh26CNZb > hs_sat26COIg ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild526COIh.tag) {
                case 1:
                    var hs_sat26COIl = ($hs.Int.addCarry(hs_lnzh26CNZ4, 1, 0))[0];
                    var hs_wild626COIm = hs_ldzqzh26CNZb == hs_sat26COIl ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild626COIm.tag) {
                    case 1:
                        var hs_wild726COIt = hs_ldzqzh26CNZb <= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                        switch (hs_wild726COIt.tag) {
                        case 1:
                            var hs_nzq26CNZj = new $hs.Thunk();
                            hs_nzq26CNZj.evaluateOnce = function () {
                                var hs_sat26COIK = new $hs.Data(1);
                                hs_sat26COIK.data = [hs_ldzqzh26CNZb];
                                return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_n26CNXG, hs_sat26COIK);
                            };
                            var hs_sat26COIx = ($hs.Int.addCarry(hs_ldzqzh26CNZb, ~1, 1))[0];
                            var hs_ds26CNZm = $hs.modules.GHCziIntegerziLogarithmsziInternals.hs_roundingModezh.hscall(hs_n26CNXG, hs_sat26COIx);
                            var hs_ds126COIw = hs_ds26CNZm;
                            if (hs_ds26CNZm.notEvaluated) {
                                hs_ds126COIw = hs_ds26CNZm.hscall();
                            }
                            switch (hs_ds126COIw) {
                            case 0:
                                var hs_sat26COIv = new $hs.Thunk();
                                hs_sat26COIv.evaluateOnce = function () {
                                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild26CNXF, hs_wild126CNXP);
                                };
                                return $hs.modules.GHCziFloat.hs_encodeFloat.hscall(hs_zddRealFloat26CNYA, hs_nzq26CNZj, hs_sat26COIv);
                            case 1:
                                var hs_sat26COIz = new $hs.Data(1);
                                hs_sat26COIz.data = [0];
                                var hs_sat26COIA = new $hs.Thunk();
                                hs_sat26COIA.evaluateOnce = function () {
                                    var hs_sat26COIG = new $hs.Data(1);
                                    hs_sat26COIG.data = [1];
                                    var hs_sat26COIF = new $hs.Thunk();
                                    hs_sat26COIF.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_nzq26CNZj);
                                    };
                                    return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26COIF, hs_sat26COIG);
                                };
                                var hs_wild826COIB = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26COIA, hs_sat26COIz);
                                switch (hs_wild826COIB.tag) {
                                case 1:
                                    var hs_sat26COID = new $hs.Thunk();
                                    hs_sat26COID.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild26CNXF, hs_wild126CNXP);
                                    };
                                    var hs_sat26COIC = new $hs.Thunk();
                                    hs_sat26COIC.evaluateOnce = function () {
                                        var hs_sat26COIE = new $hs.Thunk();
                                        hs_sat26COIE.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                        };
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_nzq26CNZj, hs_sat26COIE);
                                    };
                                    return $hs.modules.GHCziFloat.hs_encodeFloat.hscall(hs_zddRealFloat26CNYA, hs_sat26COIC, hs_sat26COID);
                                case 2:
                                    var hs_sat26COIy = new $hs.Thunk();
                                    hs_sat26COIy.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild26CNXF, hs_wild126CNXP);
                                    };
                                    return $hs.modules.GHCziFloat.hs_encodeFloat.hscall(hs_zddRealFloat26CNYA, hs_nzq26CNZj, hs_sat26COIy);
                                }
                            default:
                                var hs_sat26COII = new $hs.Thunk();
                                hs_sat26COII.evaluateOnce = function () {
                                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild26CNXF, hs_wild126CNXP);
                                };
                                var hs_sat26COIH = new $hs.Thunk();
                                hs_sat26COIH.evaluateOnce = function () {
                                    var hs_sat26COIJ = new $hs.Thunk();
                                    hs_sat26COIJ.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                    };
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_nzq26CNZj, hs_sat26COIJ);
                                };
                                return $hs.modules.GHCziFloat.hs_encodeFloat.hscall(hs_zddRealFloat26CNYA, hs_sat26COIH, hs_sat26COII);
                            }
                        case 2:
                            var hs_sat26CNZD = ($hs.Int.addCarry(hs_mezh26CNZ5, ~hs_mdzh26CNZ9, 1))[0];
                            var hs_sat26COIu = ($hs.Int.addCarry(hs_sat26CNZD, ~hs_ldzqzh26CNZb, 1))[0];
                            var hs_sat26COIs = new $hs.Data(1);
                            hs_sat26COIs.data = [hs_sat26COIu];
                            return $hs.modules.GHCziFloat.hs_encodeFloat.hscall(hs_zddRealFloat26CNYA, hs_n26CNXG, hs_sat26COIs);
                        }
                    case 2:
                        var hs_wild726COIn = $hs.modules.GHCziIntegerziLogarithmsziInternals.hs_integerLog2IsPowerOf2zh.hscall(hs_n26CNXG);
                        var hs_ds126CNZI = hs_wild726COIn[1];
                        var hs_ds226COIk = hs_ds126CNZI;
                        if (hs_ds126CNZI.notEvaluated) {
                            hs_ds226COIk = hs_ds126CNZI.hscall();
                        }
                        switch (hs_ds226COIk) {
                        case 0:
                            var hs_sat26COIp = new $hs.Data(1);
                            hs_sat26COIp.data = [0];
                            var hs_sat26COIj = new $hs.Thunk();
                            hs_sat26COIj.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                            };
                            return $hs.modules.GHCziFloat.hs_encodeFloat.hscall(hs_zddRealFloat26CNYA, hs_sat26COIj, hs_sat26COIp);
                        default:
                            var hs_sat26COIr = new $hs.Thunk();
                            hs_sat26COIr.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild26CNXF, hs_wild126CNXP);
                            };
                            var hs_sat26COIq = new $hs.Thunk();
                            hs_sat26COIq.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziFloat.hs_encodeFloat.hscall(hs_zddRealFloat26CNYA, hs_sat26COIq, hs_sat26COIr);
                        }
                    }
                case 2:
                    var hs_sat26COIi = new $hs.Data(1);
                    hs_sat26COIi.data = [0];
                    var hs_sat26COIe = new $hs.Thunk();
                    hs_sat26COIe.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziFloat.hs_encodeFloat.hscall(hs_zddRealFloat26CNYA, hs_sat26COIe, hs_sat26COIi);
                }
            case 2:
                var hs_wild526COHW = hs_lnzh26CNZ4 < hs_mdzh26CNZ9 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild526COHW.tag) {
                case 1:
                    var hs_nzq26CNZW = new $hs.Thunk();
                    hs_nzq26CNZW.evaluateOnce = function () {
                        var hs_sat26CNZU = ($hs.Int.addCarry(hs_lnzh26CNZ4, 1, 0))[0];
                        var hs_sat26COId = ($hs.Int.addCarry(hs_sat26CNZU, ~hs_mdzh26CNZ9, 1))[0];
                        var hs_sat26COIc = new $hs.Data(1);
                        hs_sat26COIc.data = [hs_sat26COId];
                        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_n26CNXG, hs_sat26COIc);
                    };
                    var hs_sat26CO0d = ($hs.Int.addCarry(hs_lnzh26CNZ4, ~hs_ldzh26CNXK, 1))[0];
                    var hs_sat26CO0e = ($hs.Int.addCarry(hs_sat26CO0d, 1, 0))[0];
                    var hs_sat26COI2 = ($hs.Int.addCarry(hs_sat26CO0e, ~hs_mdzh26CNZ9, 1))[0];
                    var hs_sat26COI3 = new $hs.Data(1);
                    hs_sat26COI3.data = [hs_sat26COI2];
                    var hs_sat26COI1 = new $hs.Thunk();
                    hs_sat26COI1.evaluateOnce = function () {
                        var hs_sat26COI5 = ($hs.Int.addCarry(hs_lnzh26CNZ4, ~hs_mdzh26CNZ9, 1))[0];
                        var hs_ds26CNZZ = $hs.modules.GHCziIntegerziLogarithmsziInternals.hs_roundingModezh.hscall(hs_n26CNXG, hs_sat26COI5);
                        var hs_ds126COI4 = hs_ds26CNZZ;
                        if (hs_ds26CNZZ.notEvaluated) {
                            hs_ds126COI4 = hs_ds26CNZZ.hscall();
                        }
                        switch (hs_ds126COI4) {
                        case 0:
                            if (hs_nzq26CNZW.notEvaluated) {
                                return hs_nzq26CNZW.hscall();
                            } else {
                                return hs_nzq26CNZW;
                            }
                        case 2:
                            var hs_sat26COI6 = new $hs.Thunk();
                            hs_sat26COI6.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_nzq26CNZW, hs_sat26COI6);
                        default:
                            var hs_sat26COI8 = new $hs.Data(1);
                            hs_sat26COI8.data = [1];
                            var hs_sat26COI9 = new $hs.Thunk();
                            hs_sat26COI9.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_nzq26CNZW);
                            };
                            var hs_wild626COIa = $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26COI9, hs_sat26COI8);
                            var hs_ds226CO05 = hs_wild626COIa.data[0];
                            var hs_ds326COI7 = hs_ds226CO05;
                            if (hs_ds226CO05.notEvaluated) {
                                hs_ds326COI7 = hs_ds226CO05.hscall();
                            }
                            switch (hs_ds326COI7) {
                            case 0:
                                if (hs_nzq26CNZW.notEvaluated) {
                                    return hs_nzq26CNZW.hscall();
                                } else {
                                    return hs_nzq26CNZW;
                                }
                            default:
                                var hs_sat26COIb = new $hs.Thunk();
                                hs_sat26COIb.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                };
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_nzq26CNZW, hs_sat26COIb);
                            }
                        }
                    };
                    return $hs.modules.GHCziFloat.hs_encodeFloat.hscall(hs_zddRealFloat26CNYA, hs_sat26COI1, hs_sat26COI3);
                case 2:
                    var hs_sat26CO0o = ($hs.Int.addCarry(hs_lnzh26CNZ4, 1, 0))[0];
                    var hs_sat26CO0p = ($hs.Int.addCarry(hs_sat26CO0o, ~hs_ldzh26CNXK, 1))[0];
                    var hs_sat26COHX = ($hs.Int.addCarry(hs_sat26CO0p, ~hs_mdzh26CNZ9, 1))[0];
                    var hs_sat26COHY = new $hs.Data(1);
                    hs_sat26COHY.data = [hs_sat26COHX];
                    var hs_sat26COHR = new $hs.Thunk();
                    hs_sat26COHR.evaluateOnce = function () {
                        var hs_sat26CO0i = ($hs.Int.addCarry(hs_mdzh26CNZ9, ~1, 1))[0];
                        var hs_sat26COI0 = ($hs.Int.addCarry(hs_sat26CO0i, ~hs_lnzh26CNZ4, 1))[0];
                        var hs_sat26COHZ = new $hs.Data(1);
                        hs_sat26COHZ.data = [hs_sat26COI0];
                        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_n26CNXG, hs_sat26COHZ);
                    };
                    return $hs.modules.GHCziFloat.hs_encodeFloat.hscall(hs_zddRealFloat26CNYA, hs_sat26COHR, hs_sat26COHY);
                }
            }
        default:
            var hs_p026CNXN = new $hs.Thunk();
            hs_p026CNXN.evaluateOnce = function () {
                var hs_sat26COJy = new $hs.Thunk();
                hs_sat26COJy.evaluateOnce = function () {
                    var hs_sat26COJA = new $hs.Data(1);
                    hs_sat26COJA.data = [hs_ldzh26CNXK];
                    var hs_sat26COJz = new $hs.Thunk();
                    hs_sat26COJz.evaluateOnce = function () {
                        var hs_wild426CNXI = $hs.modules.GHCziIntegerziLogarithmsziInternals.hs_integerLog2zh.hscall(hs_n26CNXG);
                        var $res = new $hs.Data(1);
                        $res.data = [hs_wild426CNXI];
                        return $res;
                    };
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COJz, hs_sat26COJA);
                };
                return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_wild26CNXF, hs_sat26COJy);
            };
            var hs_ds26CNXW = new $hs.Thunk();
            hs_ds26CNXW.evaluateOnce = function () {
                var hs_wild426COJt = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_p026CNXN, hs_wild126CNXP);
                switch (hs_wild426COJt.tag) {
                case 1:
                    var hs_wild526COJv = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_p026CNXN, hs_wild126CNXP);
                    switch (hs_wild526COJv.tag) {
                    case 1:
                        var hs_sat26COJw = new $hs.Thunk();
                        hs_sat26COJw.evaluateOnce = function () {
                            var hs_sat26COJx = new $hs.Thunk();
                            hs_sat26COJx.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p026CNXN, hs_wild126CNXP);
                            };
                            return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_d26CNXy, hs_sat26COJx);
                        };
                        var $res = new $hs.Data(1);
                        $res.data = [hs_n26CNXG, hs_sat26COJw];
                        return $res;
                    case 2:
                        var $res = new $hs.Data(1);
                        $res.data = [hs_n26CNXG, hs_d26CNXy];
                        return $res;
                    }
                case 2:
                    var hs_sat26COJs = new $hs.Thunk();
                    hs_sat26COJs.evaluateOnce = function () {
                        var hs_sat26COJu = new $hs.Thunk();
                        hs_sat26COJu.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild126CNXP, hs_p026CNXN);
                        };
                        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_n26CNXG, hs_sat26COJu);
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26COJs, hs_d26CNXy];
                    return $res;
                }
            };
            var hs_ds126CNYs = new $hs.Thunk();
            hs_ds126CNYs.evaluateOnce = function () {
                var hs_p26CNXZ = new $hs.Thunk();
                hs_p26CNXZ.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p026CNXN, hs_wild126CNXP);
                };
                var hs_a26CNY5 = new $hs.Thunk();
                hs_a26CNY5.evaluateOnce = function () {
                    var hs_wild426COJr = hs_ds26CNXW;
                    if (hs_ds26CNXW.notEvaluated) {
                        hs_wild426COJr = hs_ds26CNXW.hscall();
                    }
                    var hs_nzq26CNY4 = hs_wild426COJr.data[0];
                    if (hs_nzq26CNY4.notEvaluated) {
                        return hs_nzq26CNY4.hscall();
                    } else {
                        return hs_nzq26CNY4;
                    }
                };
                var hs_b26CNYb = new $hs.Thunk();
                hs_b26CNYb.evaluateOnce = function () {
                    var hs_wild426COJp = hs_ds26CNXW;
                    if (hs_ds26CNXW.notEvaluated) {
                        hs_wild426COJp = hs_ds26CNXW.hscall();
                    }
                    var hs_dzq26CNYa = hs_wild426COJp.data[1];
                    if (hs_dzq26CNYa.notEvaluated) {
                        return hs_dzq26CNYa.hscall();
                    } else {
                        return hs_dzq26CNYa;
                    }
                };
                var hs_sat26COJ8 = new $hs.Thunk();
                hs_sat26COJ8.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild26CNXF, hs_wild126CNXP);
                };
                var hs_wild426COJ9 = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_p26CNXZ, hs_sat26COJ8);
                switch (hs_wild426COJ9.tag) {
                case 1:
                    var hs_sat26COJb = new $hs.Thunk();
                    hs_sat26COJb.evaluateOnce = function () {
                        var hs_sat26COJm = new $hs.Thunk();
                        hs_sat26COJm.evaluateOnce = function () {
                            var hs_sat26COJn = new $hs.Data(1);
                            hs_sat26COJn.data = [1];
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild126CNXP, hs_sat26COJn);
                        };
                        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_b26CNYb, hs_sat26COJm);
                    };
                    var hs_wild526COJc = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_a26CNY5, hs_sat26COJb);
                    switch (hs_wild526COJc.tag) {
                    case 1:
                        var hs_sat26COJh = new $hs.Thunk();
                        hs_sat26COJh.evaluateOnce = function () {
                            return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_b26CNYb, hs_wild126CNXP);
                        };
                        var hs_wild626COJi = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_sat26COJh, hs_a26CNY5);
                        switch (hs_wild626COJi.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [hs_p26CNXZ, hs_a26CNY5, hs_b26CNYb];
                            return $res;
                        case 2:
                            var hs_sat26COJj = new $hs.Thunk();
                            hs_sat26COJj.evaluateOnce = function () {
                                var hs_sat26COJl = new $hs.Data(1);
                                hs_sat26COJl.data = [1];
                                return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_b26CNYb, hs_sat26COJl);
                            };
                            var hs_sat26COJg = new $hs.Thunk();
                            hs_sat26COJg.evaluateOnce = function () {
                                var hs_sat26COJk = new $hs.Data(1);
                                hs_sat26COJk.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p26CNXZ, hs_sat26COJk);
                            };
                            var $res = new $hs.Data(1);
                            $res.data = [hs_sat26COJg, hs_a26CNY5, hs_sat26COJj];
                            return $res;
                        }
                    case 2:
                        var hs_sat26COJd = new $hs.Thunk();
                        hs_sat26COJd.evaluateOnce = function () {
                            var hs_sat26COJf = new $hs.Data(1);
                            hs_sat26COJf.data = [1];
                            return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_a26CNY5, hs_sat26COJf);
                        };
                        var hs_sat26COJa = new $hs.Thunk();
                        hs_sat26COJa.evaluateOnce = function () {
                            var hs_sat26COJe = new $hs.Data(1);
                            hs_sat26COJe.data = [1];
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p26CNXZ, hs_sat26COJe);
                        };
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26COJa, hs_sat26COJd, hs_b26CNYb];
                        return $res;
                    }
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [hs_p26CNXZ, hs_a26CNY5, hs_b26CNYb];
                    return $res;
                }
            };
            var hs_dzqzq26CNYz = new $hs.Thunk();
            hs_dzqzq26CNYz.evaluateOnce = function () {
                var hs_wild426COJ7 = hs_ds126CNYs;
                if (hs_ds126CNYs.notEvaluated) {
                    hs_wild426COJ7 = hs_ds126CNYs.hscall();
                }
                var hs_dzqzq126CNYy = hs_wild426COJ7.data[2];
                if (hs_dzqzq126CNYy.notEvaluated) {
                    return hs_dzqzq126CNYy.hscall();
                } else {
                    return hs_dzqzq126CNYy;
                }
            };
            var hs_sat26COIM = new $hs.Thunk();
            hs_sat26COIM.evaluateOnce = function () {
                var hs_wild426COJ4 = hs_ds126CNYs;
                if (hs_ds126CNYs.notEvaluated) {
                    hs_wild426COJ4 = hs_ds126CNYs.hscall();
                }
                var hs_pzq26CNZ1 = hs_wild426COJ4.data[0];
                if (hs_pzq26CNZ1.notEvaluated) {
                    return hs_pzq26CNZ1.hscall();
                } else {
                    return hs_pzq26CNZ1;
                }
            };
            var hs_sat26COIL = new $hs.Thunk();
            hs_sat26COIL.evaluateOnce = function () {
                var hs_sat26COIN = new $hs.Thunk();
                hs_sat26COIN.evaluateOnce = function () {
                    var hs_wild426COJ1 = hs_ds126CNYs;
                    if (hs_ds126CNYs.notEvaluated) {
                        hs_wild426COJ1 = hs_ds126CNYs.hscall();
                    }
                    var hs_nzqzq26CNYF = hs_wild426COJ1.data[1];
                    if (hs_nzqzq26CNYF.notEvaluated) {
                        return hs_nzqzq26CNYF.hscall();
                    } else {
                        return hs_nzqzq26CNYF;
                    }
                };
                var hs_wild426COIO = $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26COIN, hs_dzqzq26CNYz);
                var hs_q26CNYO = hs_wild426COIO.data[0];
                var hs_r26CNYK = hs_wild426COIO.data[1];
                var hs_sat26COIP = new $hs.Thunk();
                hs_sat26COIP.evaluateOnce = function () {
                    var hs_sat26COIY = new $hs.Data(1);
                    hs_sat26COIY.data = [1];
                    return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_r26CNYK, hs_sat26COIY);
                };
                var hs_wild526COIQ = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_sat26COIP, hs_dzqzq26CNYz);
                switch (hs_wild526COIQ.tag) {
                case 1:
                    if (hs_q26CNYO.notEvaluated) {
                        return hs_q26CNYO.hscall();
                    } else {
                        return hs_q26CNYO;
                    }
                case 2:
                    var hs_sat26COIR = new $hs.Data(1);
                    hs_sat26COIR.data = [0];
                    var hs_sat26COIS = new $hs.Thunk();
                    hs_sat26COIS.evaluateOnce = function () {
                        var hs_sat26COIW = new $hs.Data(1);
                        hs_sat26COIW.data = [1];
                        var hs_sat26COIV = new $hs.Thunk();
                        hs_sat26COIV.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_q26CNYO);
                        };
                        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26COIV, hs_sat26COIW);
                    };
                    var hs_wild626COIT = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26COIS, hs_sat26COIR);
                    switch (hs_wild626COIT.tag) {
                    case 1:
                        var hs_sat26COIU = new $hs.Thunk();
                        hs_sat26COIU.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_q26CNYO, hs_sat26COIU);
                    case 2:
                        if (hs_q26CNYO.notEvaluated) {
                            return hs_q26CNYO.hscall();
                        } else {
                            return hs_q26CNYO;
                        }
                    }
                case 3:
                    var hs_sat26COIX = new $hs.Thunk();
                    hs_sat26COIX.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_q26CNYO, hs_sat26COIX);
                }
            };
            return $hs.modules.GHCziFloat.hs_encodeFloat.hscall(hs_zddRealFloat26CNYA, hs_sat26COIL, hs_sat26COIM);
        }
    };
    this.hs_zdfShowFloat.data = [hs_zdcshowsPrec25upqp, hs_zdcshow25upq8, hs_zdcshowList25upq7];
    hs_zdcshowList25upq7.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26COHO);
    };
    hs_zdcshow25upq8.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziFloat.hs_zdfShowFloat);
    };
    this.hs_zdfNumFloat.data = [$hs.modules.GHCziClasses.hs_zdfEqFloat, $hs.modules.GHCziFloat.hs_zdfShowFloat, hs_zdczp25upft, hs_zdczt25upfo, hs_zdczm25upfj, hs_zdcnegate25upfg, hs_zdcabs25upfb, hs_zdcsignum25upq9, hs_zdcfromInteger25upf6];
    hs_zdcsignum25upq9.evaluate = function (hs_x26CO0u) {
        var hs_sat26COJD = new $hs.Data(1);
        hs_sat26COJD.data = [0 % 1];
        var hs_wild26COJE = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqFloat, hs_x26CO0u, hs_sat26COJD);
        switch (hs_wild26COJE.tag) {
        case 1:
            var hs_sat26COJF = new $hs.Data(1);
            hs_sat26COJF.data = [0 % 1];
            var hs_wild126COJG = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat, hs_x26CO0u, hs_sat26COJF);
            switch (hs_wild126COJG.tag) {
            case 1:
                var hs_sat26COJH = new $hs.Data(1);
                hs_sat26COJH.data = [1 % 1];
                return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26COJH);
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [1 % 1];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [0 % 1];
            return $res;
        }
    };
    this.hs_zdfFractionalFloat.data = [$hs.modules.GHCziFloat.hs_zdfNumFloat, hs_zdczs25upg9, hs_zdcrecip25upqa, hs_zdcfromRational25upqA];
    hs_zdcrecip25upqa.evaluate = function (hs_x26CO0C) {
        var hs_sat26COKa = new $hs.Data(1);
        hs_sat26COKa.data = [1 % 1];
        return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat, hs_sat26COKa, hs_x26CO0C);
    };
    hs_zdczdp1Floating25upqb.evaluateOnce = function () {
        if ($hs.modules.GHCziFloat.hs_zdfFractionalFloat.notEvaluated) {
            return $hs.modules.GHCziFloat.hs_zdfFractionalFloat.hscall();
        } else {
            return $hs.modules.GHCziFloat.hs_zdfFractionalFloat;
        }
    };
    this.hs_zdfFloatingFloat.data = [$hs.modules.GHCziFloat.hs_zdfFractionalFloat, hs_zdcpi25upgT, hs_zdcexp25upgQ, hs_zdcsqrt25upgN, hs_zdclog25upgK, hs_zdcztzt25upgF, hs_zdclogBase25upqe, hs_zdcsin25upgC, hs_zdctan25upgz, hs_zdccos25upgw, hs_zdcasin25upgt, hs_zdcatan25upgq, hs_zdcacos25upgn, hs_zdcsinh25upgk, hs_zdctanh25upgh, hs_zdccosh25upge, hs_zdcasinh25upqd, hs_zdcatanh25upqc, hs_zdcacosh25upqf];
    hs_zdcatanh25upqc.evaluate = function (hs_x26CO0G) {
        var hs_sat26COKm = new $hs.Thunk();
        hs_sat26COKm.evaluateOnce = function () {
            var hs_sat26COKn = new $hs.Thunk();
            hs_sat26COKn.evaluateOnce = function () {
                var hs_sat26COKp = new $hs.Thunk();
                hs_sat26COKp.evaluateOnce = function () {
                    var hs_sat26COKr = new $hs.Data(1);
                    hs_sat26COKr.data = [1 % 1];
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26COKr, hs_x26CO0G);
                };
                var hs_sat26COKo = new $hs.Thunk();
                hs_sat26COKo.evaluateOnce = function () {
                    var hs_sat26COKq = new $hs.Data(1);
                    hs_sat26COKq.data = [1 % 1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26COKq, hs_x26CO0G);
                };
                return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat, hs_sat26COKo, hs_sat26COKp);
            };
            return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat, hs_sat26COKn);
        };
        var hs_sat26COKl = new $hs.Data(1);
        hs_sat26COKl.data = [1 % 2];
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26COKl, hs_sat26COKm);
    };
    hs_zdcasinh25upqd.evaluate = function (hs_x26CO0N) {
        var hs_sat26COKs = new $hs.Thunk();
        hs_sat26COKs.evaluateOnce = function () {
            var hs_sat26COKt = new $hs.Thunk();
            hs_sat26COKt.evaluateOnce = function () {
                var hs_sat26COKu = new $hs.Thunk();
                hs_sat26COKu.evaluateOnce = function () {
                    var hs_sat26COKw = new $hs.Thunk();
                    hs_sat26COKw.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_x26CO0N, hs_x26CO0N);
                    };
                    var hs_sat26COKv = new $hs.Data(1);
                    hs_sat26COKv.data = [1 % 1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26COKv, hs_sat26COKw);
                };
                return $hs.modules.GHCziFloat.hs_sqrt.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat, hs_sat26COKu);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_x26CO0N, hs_sat26COKt);
        };
        return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat, hs_sat26COKs);
    };
    hs_zdclogBase25upqe.evaluate = function (hs_x26CO0X, hs_y26CO0V) {
        var hs_sat26COKy = new $hs.Thunk();
        hs_sat26COKy.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat, hs_x26CO0X);
        };
        var hs_sat26COKx = new $hs.Thunk();
        hs_sat26COKx.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat, hs_y26CO0V);
        };
        return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat, hs_sat26COKx, hs_sat26COKy);
    };
    hs_zdcacosh25upqf.evaluate = function (hs_x26CO10) {
        var hs_sat26COKb = new $hs.Thunk();
        hs_sat26COKb.evaluateOnce = function () {
            var hs_sat26COKc = new $hs.Thunk();
            hs_sat26COKc.evaluateOnce = function () {
                var hs_sat26COKe = new $hs.Thunk();
                hs_sat26COKe.evaluateOnce = function () {
                    var hs_sat26COKg = new $hs.Thunk();
                    hs_sat26COKg.evaluateOnce = function () {
                        var hs_sat26COKi = new $hs.Thunk();
                        hs_sat26COKi.evaluateOnce = function () {
                            var hs_sat26COKk = new $hs.Data(1);
                            hs_sat26COKk.data = [1 % 1];
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_x26CO10, hs_sat26COKk);
                        };
                        var hs_sat26COKh = new $hs.Thunk();
                        hs_sat26COKh.evaluateOnce = function () {
                            var hs_sat26COKj = new $hs.Data(1);
                            hs_sat26COKj.data = [1 % 1];
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_x26CO10, hs_sat26COKj);
                        };
                        return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat, hs_sat26COKh, hs_sat26COKi);
                    };
                    return $hs.modules.GHCziFloat.hs_sqrt.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat, hs_sat26COKg);
                };
                var hs_sat26COKd = new $hs.Thunk();
                hs_sat26COKd.evaluateOnce = function () {
                    var hs_sat26COKf = new $hs.Data(1);
                    hs_sat26COKf.data = [1 % 1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_x26CO10, hs_sat26COKf);
                };
                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26COKd, hs_sat26COKe);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_x26CO10, hs_sat26COKc);
        };
        return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat, hs_sat26COKb);
    };
    hs_zdczdp2RealFloat25upqg.evaluateOnce = function () {
        if ($hs.modules.GHCziFloat.hs_zdfFloatingFloat.notEvaluated) {
            return $hs.modules.GHCziFloat.hs_zdfFloatingFloat.hscall();
        } else {
            return $hs.modules.GHCziFloat.hs_zdfFloatingFloat;
        }
    };
    hs_zdczdp2RealFrac25upqh.evaluateOnce = function () {
        if ($hs.modules.GHCziFloat.hs_zdfFractionalFloat.notEvaluated) {
            return $hs.modules.GHCziFloat.hs_zdfFractionalFloat.hscall();
        } else {
            return $hs.modules.GHCziFloat.hs_zdfFractionalFloat;
        }
    };
    this.hs_zdfRealFloat.data = [$hs.modules.GHCziFloat.hs_zdfNumFloat, $hs.modules.GHCziClasses.hs_zdfOrdFloat, hs_zdctoRational25upfy];
    this.hs_zdfRealFracFloat.data = [$hs.modules.GHCziFloat.hs_zdfRealFloat, $hs.modules.GHCziFloat.hs_zdfFractionalFloat, hs_zdcproperFraction25upqz, hs_zdctruncate25upqk, hs_zdcround25upqy, hs_zdcceiling25upqj, hs_zdcfloor25upqi];
    hs_zdcfloor25upqi.evaluate = function (hs_eta26CO1e, hs_eta126CO1i) {
        var hs_zddReal226CO1f = new $hs.Thunk();
        hs_zddReal226CO1f.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_eta26CO1e);
        };
        var hs_zddNum326CO1h = new $hs.Thunk();
        hs_zddNum326CO1h.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal226CO1f);
        };
        var hs_wild26COKA = $hs.modules.GHCziReal.hs_properFraction.hscall($hs.modules.GHCziFloat.hs_zdfRealFracFloat, hs_eta26CO1e, hs_eta126CO1i);
        var hs_n26CO1p = hs_wild26COKA.data[0];
        var hs_r26CO1m = hs_wild26COKA.data[1];
        var hs_sat26COKB = new $hs.Data(1);
        hs_sat26COKB.data = [0 % 1];
        var hs_wild126COKC = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat, hs_r26CO1m, hs_sat26COKB);
        switch (hs_wild126COKC.tag) {
        case 1:
            if (hs_n26CO1p.notEvaluated) {
                return hs_n26CO1p.hscall();
            } else {
                return hs_n26CO1p;
            }
        case 2:
            var hs_sat26COKz = new $hs.Thunk();
            hs_sat26COKz.evaluateOnce = function () {
                var hs_sat26COKD = new $hs.Thunk();
                hs_sat26COKD.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CO1h, hs_sat26COKD);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum326CO1h, hs_n26CO1p, hs_sat26COKz);
        }
    };
    hs_zdcceiling25upqj.evaluate = function (hs_eta26CO1v, hs_eta126CO1z) {
        var hs_zddReal226CO1w = new $hs.Thunk();
        hs_zddReal226CO1w.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_eta26CO1v);
        };
        var hs_zddNum326CO1y = new $hs.Thunk();
        hs_zddNum326CO1y.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal226CO1w);
        };
        var hs_wild26COKF = $hs.modules.GHCziReal.hs_properFraction.hscall($hs.modules.GHCziFloat.hs_zdfRealFracFloat, hs_eta26CO1v, hs_eta126CO1z);
        var hs_n26CO1G = hs_wild26COKF.data[0];
        var hs_r26CO1D = hs_wild26COKF.data[1];
        var hs_sat26COKG = new $hs.Data(1);
        hs_sat26COKG.data = [0 % 1];
        var hs_wild126COKH = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat, hs_r26CO1D, hs_sat26COKG);
        switch (hs_wild126COKH.tag) {
        case 1:
            if (hs_n26CO1G.notEvaluated) {
                return hs_n26CO1G.hscall();
            } else {
                return hs_n26CO1G;
            }
        case 2:
            var hs_sat26COKE = new $hs.Thunk();
            hs_sat26COKE.evaluateOnce = function () {
                var hs_sat26COKI = new $hs.Thunk();
                hs_sat26COKI.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CO1y, hs_sat26COKI);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum326CO1y, hs_n26CO1G, hs_sat26COKE);
        }
    };
    hs_zdctruncate25upqk.evaluate = function (hs_eta26CO1L, hs_x26CO1M) {
        var hs_wild26COKX = $hs.modules.GHCziReal.hs_properFraction.hscall($hs.modules.GHCziFloat.hs_zdfRealFracFloat, hs_eta26CO1L, hs_x26CO1M);
        var hs_n26CO1Q = hs_wild26COKX.data[0];
        if (hs_n26CO1Q.notEvaluated) {
            return hs_n26CO1Q.hscall();
        } else {
            return hs_n26CO1Q;
        }
    };
    hs_zdczdp1RealFloat25upql.evaluateOnce = function () {
        if ($hs.modules.GHCziFloat.hs_zdfRealFracFloat.notEvaluated) {
            return $hs.modules.GHCziFloat.hs_zdfRealFracFloat.hscall();
        } else {
            return $hs.modules.GHCziFloat.hs_zdfRealFracFloat;
        }
    };
    this.hs_zdfRealFloatFloat.data = [$hs.modules.GHCziFloat.hs_zdfRealFracFloat, $hs.modules.GHCziFloat.hs_zdfFloatingFloat, hs_zdcfloatRadix25upin, hs_zdcfloatDigits25upik, hs_zdcfloatRange25upie, hs_zdcdecodeFloat25upi1, hs_zdcencodeFloat25uphR, hs_zdcexponent25upqo, hs_zdcsignificand25upqn, hs_zdcscaleFloat25upqm, hs_zdcisNaN25uphD, hs_zdcisInfinite25uphp, hs_zdcisDenormalizzed25uphb, hs_zdcisNegativeZZero25upgX, hs_zdcisIEEE25upgU, hs_zdcatan225upqx];
    hs_zdcscaleFloat25upqm.evaluate = function (hs_k26CO27, hs_x26CO1T) {
        var hs_wild26COMi = $hs.modules.GHCziFloat.hs_decodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_x26CO1T);
        var hs_m26CO1X = hs_wild26COMi.data[0];
        var hs_n26CO1Y = hs_wild26COMi.data[1];
        var hs_sat26COMh = new $hs.Thunk();
        hs_sat26COMh.evaluateOnce = function () {
            var hs_sat26COMj = new $hs.Thunk();
            hs_sat26COMj.evaluateOnce = function () {
                var hs_sat26COMk = new $hs.Thunk();
                hs_sat26COMk.evaluateOnce = function () {
                    var hs_sat26COMm = new $hs.Thunk();
                    hs_sat26COMm.evaluateOnce = function () {
                        var hs_sat26COMr = new $hs.Data(1);
                        hs_sat26COMr.data = [24];
                        var hs_sat26COMq = new $hs.Data(1);
                        hs_sat26COMq.data = [4];
                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COMq, hs_sat26COMr);
                    };
                    var hs_sat26COMl = new $hs.Thunk();
                    hs_sat26COMl.evaluateOnce = function () {
                        var hs_sat26COMo = new $hs.Thunk();
                        hs_sat26COMo.evaluateOnce = function () {
                            var hs_sat26COMp = new $hs.Data(1);
                            hs_sat26COMp.data = [125];
                            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COMp);
                        };
                        var hs_sat26COMn = new $hs.Data(1);
                        hs_sat26COMn.data = [128];
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COMn, hs_sat26COMo);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COMl, hs_sat26COMm);
                };
                return $hs.modules.GHCziFloat.hs_clamp.hscall(hs_sat26COMk, hs_k26CO27);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26CO1Y, hs_sat26COMj);
        };
        return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_m26CO1X, hs_sat26COMh);
    };
    hs_zdcsignificand25upqn.evaluate = function (hs_x26CO2b) {
        var hs_wild26COMt = $hs.modules.GHCziFloat.hs_decodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_x26CO2b);
        var hs_m26CO2f = hs_wild26COMt.data[0];
        var hs_sat26COMs = new $hs.Thunk();
        hs_sat26COMs.evaluateOnce = function () {
            var hs_sat26COMv = new $hs.Thunk();
            hs_sat26COMv.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_floatDigits.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_x26CO2b);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COMv);
        };
        return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_m26CO2f, hs_sat26COMs);
    };
    hs_zdcexponent25upqo.evaluate = function (hs_x26CO2j) {
        var hs_wild26COMw = $hs.modules.GHCziFloat.hs_decodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_x26CO2j);
        var hs_m26CO2n = hs_wild26COMw.data[0];
        var hs_n26CO2q = hs_wild26COMw.data[1];
        var hs_sat26COMx = new $hs.Thunk();
        hs_sat26COMx.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_wild126COMy = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_m26CO2n, hs_sat26COMx);
        switch (hs_wild126COMy.tag) {
        case 1:
            var hs_sat26COMz = new $hs.Thunk();
            hs_sat26COMz.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_floatDigits.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_x26CO2j);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26CO2q, hs_sat26COMz);
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [0];
            return $res;
        }
    };
    hs_zdcshowsPrec25upqp.evaluate = function (hs_x26CO2y, hs_eta26CO2z) {
        var hs_sat26COJB = new $hs.Func(1);
        hs_sat26COJB.evaluate = function (hs_x126CO2v) {
            var hs_sat26COJC = new $hs.Thunk();
            hs_sat26COJC.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_formatRealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, $hs.modules.GHCziFloat.hs_FFGeneric, $hs.modules.DataziMaybe.hs_Nothing, hs_x126CO2v);
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26COJC);
        };
        return $hs.modules.GHCziFloat.hs_showSignedFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_sat26COJB, hs_x26CO2y, hs_eta26CO2z);
    };
    hs_zddRealFrac25upqq.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_zdp1RealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zddReal25upqr.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac25upqq);
    };
    hs_zddOrd125upqs.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal25upqr);
    };
    hs_zddFloating25upqt.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_zdp2RealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zddFractional125upqu.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_zdp1Floating.hscall(hs_zddFloating25upqt);
    };
    hs_zddNum125upqv.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional125upqu);
    };
    hs_zddEq25upqw.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum125upqv);
    };
    hs_zdcatan225upqx.evaluate = function (hs_y26CO2J, hs_x26CO2C) {
        var hs_sat26COLl = new $hs.Thunk();
        hs_sat26COLl.evaluateOnce = function () {
            var hs_sat26COMg = new $hs.Thunk();
            hs_sat26COMg.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum125upqv, hs_sat26COMg);
        };
        var hs_wild26COLm = $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd125upqs, hs_x26CO2C, hs_sat26COLl);
        switch (hs_wild26COLm.tag) {
        case 1:
            var hs_sat26COLo = new $hs.Thunk();
            hs_sat26COLo.evaluateOnce = function () {
                var hs_sat26COMe = new $hs.Thunk();
                hs_sat26COMe.evaluateOnce = function () {
                    var hs_sat26COMf = new $hs.Thunk();
                    hs_sat26COMf.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum125upqv, hs_sat26COMf);
                };
                return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd125upqs, hs_y26CO2J, hs_sat26COMe);
            };
            var hs_sat26COLp = new $hs.Thunk();
            hs_sat26COLp.evaluateOnce = function () {
                var hs_sat26COMc = new $hs.Thunk();
                hs_sat26COMc.evaluateOnce = function () {
                    var hs_sat26COMd = new $hs.Thunk();
                    hs_sat26COMd.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum125upqv, hs_sat26COMd);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq25upqw, hs_x26CO2C, hs_sat26COMc);
            };
            var hs_wild126COLq = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COLp, hs_sat26COLo);
            switch (hs_wild126COLq.tag) {
            case 1:
                var hs_sat26COLu = new $hs.Thunk();
                hs_sat26COLu.evaluateOnce = function () {
                    var hs_sat26COMa = new $hs.Thunk();
                    hs_sat26COMa.evaluateOnce = function () {
                        var hs_sat26COMb = new $hs.Thunk();
                        hs_sat26COMb.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum125upqv, hs_sat26COMb);
                    };
                    return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd125upqs, hs_y26CO2J, hs_sat26COMa);
                };
                var hs_sat26COLv = new $hs.Thunk();
                hs_sat26COLv.evaluateOnce = function () {
                    var hs_sat26COM8 = new $hs.Thunk();
                    hs_sat26COM8.evaluateOnce = function () {
                        var hs_sat26COM9 = new $hs.Thunk();
                        hs_sat26COM9.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum125upqv, hs_sat26COM9);
                    };
                    return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd125upqs, hs_x26CO2C, hs_sat26COM8);
                };
                var hs_wild226COLw = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COLv, hs_sat26COLu);
                switch (hs_wild226COLw.tag) {
                case 1:
                    var hs_sat26COLA = new $hs.Thunk();
                    hs_sat26COLA.evaluateOnce = function () {
                        var hs_sat26COM1 = new $hs.Thunk();
                        hs_sat26COM1.evaluateOnce = function () {
                            var hs_sat26COM7 = new $hs.Thunk();
                            hs_sat26COM7.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_y26CO2J);
                            };
                            var hs_sat26COM6 = new $hs.Thunk();
                            hs_sat26COM6.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_x26CO2C);
                            };
                            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COM6, hs_sat26COM7);
                        };
                        var hs_sat26COM0 = new $hs.Thunk();
                        hs_sat26COM0.evaluateOnce = function () {
                            var hs_sat26COM3 = new $hs.Thunk();
                            hs_sat26COM3.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_y26CO2J);
                            };
                            var hs_sat26COM2 = new $hs.Thunk();
                            hs_sat26COM2.evaluateOnce = function () {
                                var hs_sat26COM4 = new $hs.Thunk();
                                hs_sat26COM4.evaluateOnce = function () {
                                    var hs_sat26COM5 = new $hs.Thunk();
                                    hs_sat26COM5.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum125upqv, hs_sat26COM5);
                                };
                                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd125upqs, hs_x26CO2C, hs_sat26COM4);
                            };
                            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COM2, hs_sat26COM3);
                        };
                        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26COM0, hs_sat26COM1);
                    };
                    var hs_sat26COLB = new $hs.Thunk();
                    hs_sat26COLB.evaluateOnce = function () {
                        var hs_sat26COLV = new $hs.Thunk();
                        hs_sat26COLV.evaluateOnce = function () {
                            var hs_sat26COLY = new $hs.Thunk();
                            hs_sat26COLY.evaluateOnce = function () {
                                var hs_sat26COLZ = new $hs.Thunk();
                                hs_sat26COLZ.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum125upqv, hs_sat26COLZ);
                            };
                            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd125upqs, hs_y26CO2J, hs_sat26COLY);
                        };
                        var hs_sat26COLU = new $hs.Thunk();
                        hs_sat26COLU.evaluateOnce = function () {
                            var hs_sat26COLW = new $hs.Thunk();
                            hs_sat26COLW.evaluateOnce = function () {
                                var hs_sat26COLX = new $hs.Thunk();
                                hs_sat26COLX.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum125upqv, hs_sat26COLX);
                            };
                            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd125upqs, hs_x26CO2C, hs_sat26COLW);
                        };
                        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COLU, hs_sat26COLV);
                    };
                    var hs_wild326COLC = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26COLB, hs_sat26COLA);
                    switch (hs_wild326COLC.tag) {
                    case 1:
                        var hs_sat26COLE = new $hs.Thunk();
                        hs_sat26COLE.evaluateOnce = function () {
                            var hs_sat26COLR = new $hs.Thunk();
                            hs_sat26COLR.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_x26CO2C);
                            };
                            var hs_sat26COLQ = new $hs.Thunk();
                            hs_sat26COLQ.evaluateOnce = function () {
                                var hs_sat26COLS = new $hs.Thunk();
                                hs_sat26COLS.evaluateOnce = function () {
                                    var hs_sat26COLT = new $hs.Thunk();
                                    hs_sat26COLT.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum125upqv, hs_sat26COLT);
                                };
                                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd125upqs, hs_x26CO2C, hs_sat26COLS);
                            };
                            return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26COLQ, hs_sat26COLR);
                        };
                        var hs_sat26COLF = new $hs.Thunk();
                        hs_sat26COLF.evaluateOnce = function () {
                            var hs_sat26COLO = new $hs.Thunk();
                            hs_sat26COLO.evaluateOnce = function () {
                                var hs_sat26COLP = new $hs.Thunk();
                                hs_sat26COLP.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum125upqv, hs_sat26COLP);
                            };
                            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq25upqw, hs_y26CO2J, hs_sat26COLO);
                        };
                        var hs_wild426COLG = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COLF, hs_sat26COLE);
                        switch (hs_wild426COLG.tag) {
                        case 1:
                            var hs_sat26COLH = new $hs.Thunk();
                            hs_sat26COLH.evaluateOnce = function () {
                                var hs_sat26COLM = new $hs.Thunk();
                                hs_sat26COLM.evaluateOnce = function () {
                                    var hs_sat26COLN = new $hs.Thunk();
                                    hs_sat26COLN.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum125upqv, hs_sat26COLN);
                                };
                                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq25upqw, hs_y26CO2J, hs_sat26COLM);
                            };
                            var hs_sat26COLI = new $hs.Thunk();
                            hs_sat26COLI.evaluateOnce = function () {
                                var hs_sat26COLK = new $hs.Thunk();
                                hs_sat26COLK.evaluateOnce = function () {
                                    var hs_sat26COLL = new $hs.Thunk();
                                    hs_sat26COLL.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum125upqv, hs_sat26COLL);
                                };
                                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq25upqw, hs_x26CO2C, hs_sat26COLK);
                            };
                            var hs_wild526COLJ = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COLI, hs_sat26COLH);
                            switch (hs_wild526COLJ.tag) {
                            case 1:
                                return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum125upqv, hs_x26CO2C, hs_y26CO2J);
                            case 2:
                                if (hs_y26CO2J.notEvaluated) {
                                    return hs_y26CO2J.hscall();
                                } else {
                                    return hs_y26CO2J;
                                }
                            }
                        case 2:
                            return $hs.modules.GHCziFloat.hs_pi.hscall(hs_zddFloating25upqt);
                        }
                    case 2:
                        var hs_sat26COLz = new $hs.Thunk();
                        hs_sat26COLz.evaluateOnce = function () {
                            var hs_sat26COLD = new $hs.Thunk();
                            hs_sat26COLD.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum125upqv, hs_y26CO2J);
                            };
                            return $hs.modules.GHCziFloat.hs_atan2.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_sat26COLD, hs_x26CO2C);
                        };
                        return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum125upqv, hs_sat26COLz);
                    }
                case 2:
                    var hs_sat26COLx = new $hs.Thunk();
                    hs_sat26COLx.evaluateOnce = function () {
                        var hs_sat26COLy = new $hs.Thunk();
                        hs_sat26COLy.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional125upqu, hs_y26CO2J, hs_x26CO2C);
                        };
                        return $hs.modules.GHCziFloat.hs_atan.hscall(hs_zddFloating25upqt, hs_sat26COLy);
                    };
                    var hs_sat26COLt = new $hs.Thunk();
                    hs_sat26COLt.evaluateOnce = function () {
                        return $hs.modules.GHCziFloat.hs_pi.hscall(hs_zddFloating25upqt);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum125upqv, hs_sat26COLt, hs_sat26COLx);
                }
            case 2:
                var hs_sat26COLr = new $hs.Thunk();
                hs_sat26COLr.evaluateOnce = function () {
                    var hs_sat26COLs = new $hs.Thunk();
                    hs_sat26COLs.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum125upqv, hs_sat26COLs);
                };
                var hs_sat26COLn = new $hs.Thunk();
                hs_sat26COLn.evaluateOnce = function () {
                    return $hs.modules.GHCziFloat.hs_pi.hscall(hs_zddFloating25upqt);
                };
                return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional125upqu, hs_sat26COLn, hs_sat26COLr);
            }
        case 2:
            var hs_sat26COLk = new $hs.Thunk();
            hs_sat26COLk.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional125upqu, hs_y26CO2J, hs_x26CO2C);
            };
            return $hs.modules.GHCziFloat.hs_atan.hscall(hs_zddFloating25upqt, hs_sat26COLk);
        }
    };
    hs_zdcround25upqy.evaluate = function (hs_zddIntegral26CO3E, hs_eta26CO3I) {
        var hs_zddReal226CO3F = new $hs.Thunk();
        hs_zddReal226CO3F.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CO3E);
        };
        var hs_zddNum326CO3H = new $hs.Thunk();
        hs_zddNum326CO3H.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal226CO3F);
        };
        var hs_wild26COKJ = $hs.modules.GHCziReal.hs_properFraction.hscall($hs.modules.GHCziFloat.hs_zdfRealFracFloat, hs_zddIntegral26CO3E, hs_eta26CO3I);
        var hs_n26CO3Q = hs_wild26COKJ.data[0];
        var hs_r26CO3N = hs_wild26COKJ.data[1];
        var hs_m26CO3V = new $hs.Thunk();
        hs_m26CO3V.evaluateOnce = function () {
            var hs_sat26COKR = new $hs.Data(1);
            hs_sat26COKR.data = [0 % 1];
            var hs_wild126COKS = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat, hs_r26CO3N, hs_sat26COKR);
            switch (hs_wild126COKS.tag) {
            case 1:
                var hs_sat26COKU = new $hs.Thunk();
                hs_sat26COKU.evaluateOnce = function () {
                    var hs_sat26COKV = new $hs.Thunk();
                    hs_sat26COKV.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CO3H, hs_sat26COKV);
                };
                return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum326CO3H, hs_n26CO3Q, hs_sat26COKU);
            case 2:
                var hs_sat26COKQ = new $hs.Thunk();
                hs_sat26COKQ.evaluateOnce = function () {
                    var hs_sat26COKT = new $hs.Thunk();
                    hs_sat26COKT.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CO3H, hs_sat26COKT);
                };
                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum326CO3H, hs_n26CO3Q, hs_sat26COKQ);
            }
        };
        var hs_sat26COKK = new $hs.Data(1);
        hs_sat26COKK.data = [0 % 1];
        var hs_sat26COKL = new $hs.Thunk();
        hs_sat26COKL.evaluateOnce = function () {
            var hs_sat26COKP = new $hs.Data(1);
            hs_sat26COKP.data = [1 % 2];
            var hs_sat26COKO = new $hs.Thunk();
            hs_sat26COKO.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_r26CO3N);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26COKO, hs_sat26COKP);
        };
        var hs_wild126COKM = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat, hs_sat26COKL, hs_sat26COKK);
        switch (hs_wild126COKM.tag) {
        case 1:
            if (hs_n26CO3Q.notEvaluated) {
                return hs_n26CO3Q.hscall();
            } else {
                return hs_n26CO3Q;
            }
        case 2:
            var hs_wild226COKN = $hs.modules.GHCziReal.hs_even.hscall(hs_zddIntegral26CO3E, hs_n26CO3Q);
            switch (hs_wild226COKN.tag) {
            case 1:
                if (hs_m26CO3V.notEvaluated) {
                    return hs_m26CO3V.hscall();
                } else {
                    return hs_m26CO3V;
                }
            case 2:
                if (hs_n26CO3Q.notEvaluated) {
                    return hs_n26CO3Q.hscall();
                } else {
                    return hs_n26CO3Q;
                }
            }
        case 3:
            if (hs_m26CO3V.notEvaluated) {
                return hs_m26CO3V.hscall();
            } else {
                return hs_m26CO3V;
            }
        }
    };
    hs_zdcproperFraction25upqz.evaluate = function (hs_zddIntegral26CO45, hs_eta26CO49) {
        var hs_zddReal226CO46 = new $hs.Thunk();
        hs_zddReal226CO46.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26CO45);
        };
        var hs_zddNum326CO48 = new $hs.Thunk();
        hs_zddNum326CO48.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal226CO46);
        };
        var hs_wild26COKZ = hs_eta26CO49;
        if (hs_eta26CO49.notEvaluated) {
            hs_wild26COKZ = hs_eta26CO49.hscall();
        }
        var hs_xzh26CO4c = hs_wild26COKZ.data[0];
        throw "primitive operation decodeFloat_Int#. Not implemeted yet.";
        var hs_mzh26CO4k = hs_wild126COL0[0];
        var hs_nzh26CO4h = hs_wild126COL0[1];
        var hs_n26CO4i = new $hs.Data(1);
        hs_n26CO4i.data = [hs_nzh26CO4h];
        var hs_m26CO4l = new $hs.Data(1);
        hs_m26CO4l.data = [hs_mzh26CO4k];
        var hs_sat26COL1 = new $hs.Data(1);
        hs_sat26COL1.data = [0];
        var hs_wild226COL2 = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_n26CO4i, hs_sat26COL1);
        switch (hs_wild226COL2.tag) {
        case 1:
            var hs_i26CO4v = new $hs.Thunk();
            hs_i26CO4v.evaluateOnce = function () {
                var hs_sat26COLf = new $hs.Data(1);
                hs_sat26COLf.data = [0];
                var hs_wild326COLg = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_m26CO4l, hs_sat26COLf);
                switch (hs_wild326COLg.tag) {
                case 1:
                    var hs_sat26COLh = new $hs.Thunk();
                    hs_sat26COLh.evaluateOnce = function () {
                        var hs_sat26COLj = new $hs.Thunk();
                        hs_sat26COLj.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26CO4i);
                        };
                        var hs_sat26COLi = new $hs.Thunk();
                        hs_sat26COLi.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_m26CO4l);
                        };
                        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26COLi, hs_sat26COLj);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COLh);
                case 2:
                    var hs_sat26COLe = new $hs.Thunk();
                    hs_sat26COLe.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26CO4i);
                    };
                    return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_m26CO4l, hs_sat26COLe);
                }
            };
            var hs_sat26COL9 = new $hs.Thunk();
            hs_sat26COL9.evaluateOnce = function () {
                var hs_sat26COLa = new $hs.Thunk();
                hs_sat26COLa.evaluateOnce = function () {
                    var hs_sat26COLb = new $hs.Thunk();
                    hs_sat26COLb.evaluateOnce = function () {
                        var hs_sat26COLc = new $hs.Thunk();
                        hs_sat26COLc.evaluateOnce = function () {
                            var hs_sat26COLd = new $hs.Thunk();
                            hs_sat26COLd.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26CO4i);
                            };
                            return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_i26CO4v, hs_sat26COLd);
                        };
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_m26CO4l, hs_sat26COLc);
                    };
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26COLb);
                };
                return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_sat26COLa, hs_n26CO4i);
            };
            var hs_sat26COL8 = new $hs.Thunk();
            hs_sat26COL8.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_zddNum326CO48, hs_i26CO4v);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26COL8, hs_sat26COL9];
            return $res;
        case 2:
            var hs_sat26COL3 = new $hs.Data(1);
            hs_sat26COL3.data = [0 % 1];
            var hs_sat26COKY = new $hs.Thunk();
            hs_sat26COKY.evaluateOnce = function () {
                var hs_sat26COL5 = new $hs.Thunk();
                hs_sat26COL5.evaluateOnce = function () {
                    var hs_sat26COL6 = new $hs.Thunk();
                    hs_sat26COL6.evaluateOnce = function () {
                        var hs_sat26COL7 = new $hs.Thunk();
                        hs_sat26COL7.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CO48, hs_sat26COL7);
                    };
                    return $hs.modules.GHCziReal.hs_zc.hscall(hs_zddNum326CO48, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26COL6, hs_n26CO4i);
                };
                var hs_sat26COL4 = new $hs.Thunk();
                hs_sat26COL4.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_zddNum326CO48, hs_m26CO4l);
                };
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum326CO48, hs_sat26COL4, hs_sat26COL5);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26COKY, hs_sat26COL3];
            return $res;
        }
    };
    hs_zdcfromRational25upqA.evaluate = function (hs_ds26CO4J) {
        var hs_wild26COJJ = hs_ds26CO4J;
        if (hs_ds26CO4J.notEvaluated) {
            hs_wild26COJJ = hs_ds26CO4J.hscall();
        }
        var hs_n26CO4Q = hs_wild26COJJ.data[0];
        var hs_ds126CO4N = hs_wild26COJJ.data[1];
        var hs_sat26COJK = new $hs.Thunk();
        hs_sat26COJK.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_wild126COJL = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_ds126CO4N, hs_sat26COJK);
        switch (hs_wild126COJL.tag) {
        case 1:
            var hs_sat26COJX = new $hs.Thunk();
            hs_sat26COJX.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            var hs_wild226COJY = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_n26CO4Q, hs_sat26COJX);
            switch (hs_wild226COJY.tag) {
            case 1:
                var hs_sat26COK1 = new $hs.Thunk();
                hs_sat26COK1.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_wild326COK2 = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26CO4Q, hs_sat26COK1);
                switch (hs_wild326COK2.tag) {
                case 1:
                    var hs_sat26COK8 = new $hs.Data(1);
                    hs_sat26COK8.data = [24];
                    var hs_sat26COK7 = new $hs.Thunk();
                    hs_sat26COK7.evaluateOnce = function () {
                        var hs_sat26COK9 = new $hs.Data(1);
                        hs_sat26COK9.data = [125];
                        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COK9);
                    };
                    return $hs.modules.GHCziFloat.hs_fromRatzqzq.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_sat26COK7, hs_sat26COK8, hs_n26CO4Q, hs_ds126CO4N);
                case 2:
                    var hs_sat26COK0 = new $hs.Thunk();
                    hs_sat26COK0.evaluateOnce = function () {
                        var hs_sat26COK4 = new $hs.Thunk();
                        hs_sat26COK4.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_n26CO4Q);
                        };
                        var hs_sat26COK5 = new $hs.Data(1);
                        hs_sat26COK5.data = [24];
                        var hs_sat26COK3 = new $hs.Thunk();
                        hs_sat26COK3.evaluateOnce = function () {
                            var hs_sat26COK6 = new $hs.Data(1);
                            hs_sat26COK6.data = [125];
                            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COK6);
                        };
                        return $hs.modules.GHCziFloat.hs_fromRatzqzq.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_sat26COK3, hs_sat26COK5, hs_sat26COK4, hs_ds126CO4N);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26COK0);
                }
            case 2:
                var hs_sat26COJZ = new $hs.Data(1);
                hs_sat26COJZ.data = [0];
                var hs_sat26COJW = new $hs.Thunk();
                hs_sat26COJW.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_sat26COJW, hs_sat26COJZ);
            }
        case 2:
            var hs_sat26COJM = new $hs.Thunk();
            hs_sat26COJM.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            var hs_wild226COJN = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_n26CO4Q, hs_sat26COJM);
            switch (hs_wild226COJN.tag) {
            case 1:
                var hs_sat26COJQ = new $hs.Thunk();
                hs_sat26COJQ.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_wild326COJR = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26CO4Q, hs_sat26COJQ);
                switch (hs_wild326COJR.tag) {
                case 1:
                    var hs_sat26COJV = new $hs.Data(1);
                    hs_sat26COJV.data = [0 % 1];
                    var hs_sat26COJU = new $hs.Data(1);
                    hs_sat26COJU.data = [1 % 1];
                    return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat, hs_sat26COJU, hs_sat26COJV);
                case 2:
                    var hs_sat26COJS = new $hs.Data(1);
                    hs_sat26COJS.data = [0 % 1];
                    var hs_sat26COJP = new $hs.Thunk();
                    hs_sat26COJP.evaluateOnce = function () {
                        var hs_sat26COJT = new $hs.Data(1);
                        hs_sat26COJT.data = [1 % 1];
                        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26COJT);
                    };
                    return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat, hs_sat26COJP, hs_sat26COJS);
                }
            case 2:
                var hs_sat26COJO = new $hs.Data(1);
                hs_sat26COJO.data = [0 % 1];
                var hs_sat26COJI = new $hs.Data(1);
                hs_sat26COJI.data = [0 % 1];
                return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat, hs_sat26COJI, hs_sat26COJO);
            }
        }
    };
    this.hs_floatToDigits.evaluate = function (hs_zddRealFloat26CO5k, hs_eta26CO5D, hs_eta126CO5r) {
        var hs_zddFloating226CO5l = new $hs.Thunk();
        hs_zddFloating226CO5l.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_zdp2RealFloat.hscall(hs_zddRealFloat26CO5k);
        };
        var hs_zddFractional326CO5n = new $hs.Thunk();
        hs_zddFractional326CO5n.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_zdp1Floating.hscall(hs_zddFloating226CO5l);
        };
        var hs_zddNum326CO5p = new $hs.Thunk();
        hs_zddNum326CO5p.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional326CO5n);
        };
        var hs_sat26COPs = new $hs.Thunk();
        hs_sat26COPs.evaluateOnce = function () {
            var hs_sat26COSd = new $hs.Thunk();
            hs_sat26COSd.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CO5p, hs_sat26COSd);
        };
        var hs_sat26COPt = $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum326CO5p);
        var hs_wild26COPu = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26COPt, hs_eta126CO5r, hs_sat26COPs);
        switch (hs_wild26COPu.tag) {
        case 1:
            var hs_gen26CO64 = new $hs.Func(5);
            hs_gen26CO64.evaluate = function (hs_ds26CO63, hs_rn26CO5J, hs_sN26CO5L, hs_mUpN26CO5G, hs_mDnN26CO5C) {
                var hs_mDnNzq26CO5E = new $hs.Thunk();
                hs_mDnNzq26CO5E.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_mDnN26CO5C, hs_eta26CO5D);
                };
                var hs_mUpNzq26CO5H = new $hs.Thunk();
                hs_mUpNzq26CO5H.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_mUpN26CO5G, hs_eta26CO5D);
                };
                var hs_ds126CO5M = new $hs.Thunk();
                hs_ds126CO5M.evaluateOnce = function () {
                    var hs_sat26COSc = new $hs.Thunk();
                    hs_sat26COSc.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_rn26CO5J, hs_eta26CO5D);
                    };
                    return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26COSc, hs_sN26CO5L);
                };
                var hs_rnzq26CO5S = new $hs.Thunk();
                hs_rnzq26CO5S.evaluateOnce = function () {
                    var hs_wild126COSb = hs_ds126CO5M;
                    if (hs_ds126CO5M.notEvaluated) {
                        hs_wild126COSb = hs_ds126CO5M.hscall();
                    }
                    var hs_rnzq126CO5R = hs_wild126COSb.data[1];
                    if (hs_rnzq126CO5R.notEvaluated) {
                        return hs_rnzq126CO5R.hscall();
                    } else {
                        return hs_rnzq126CO5R;
                    }
                };
                var hs_ds226CO5V = new $hs.Thunk();
                hs_ds226CO5V.evaluateOnce = function () {
                    var hs_sat26COS9 = new $hs.Thunk();
                    hs_sat26COS9.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_rnzq26CO5S, hs_mUpNzq26CO5H);
                    };
                    return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_sat26COS9, hs_sN26CO5L);
                };
                var hs_wild126CORL = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_rnzq26CO5S, hs_mDnNzq26CO5E);
                switch (hs_wild126CORL.tag) {
                case 1:
                    var hs_wild226COS0 = hs_ds226CO5V;
                    if (hs_ds226CO5V.notEvaluated) {
                        hs_wild226COS0 = hs_ds226CO5V.hscall();
                    }
                    switch (hs_wild226COS0.tag) {
                    case 1:
                        var hs_sat26COS6 = new $hs.Thunk();
                        hs_sat26COS6.evaluateOnce = function () {
                            var hs_wild326COS8 = hs_ds126CO5M;
                            if (hs_ds126CO5M.notEvaluated) {
                                hs_wild326COS8 = hs_ds126CO5M.hscall();
                            }
                            var hs_dn26CO61 = hs_wild326COS8.data[0];
                            if (hs_dn26CO61.notEvaluated) {
                                return hs_dn26CO61.hscall();
                            } else {
                                return hs_dn26CO61;
                            }
                        };
                        var hs_sat26COS5 = new $hs.Data(2);
                        hs_sat26COS5.data = [hs_sat26COS6, hs_ds26CO63];
                        return hs_gen26CO64.hscall(hs_sat26COS5, hs_rnzq26CO5S, hs_sN26CO5L, hs_mUpNzq26CO5H, hs_mDnNzq26CO5E);
                    case 2:
                        var hs_sat26CORZ = new $hs.Thunk();
                        hs_sat26CORZ.evaluateOnce = function () {
                            var hs_sat26COS2 = new $hs.Thunk();
                            hs_sat26COS2.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            var hs_sat26COS1 = new $hs.Thunk();
                            hs_sat26COS1.evaluateOnce = function () {
                                var hs_wild326COS4 = hs_ds126CO5M;
                                if (hs_ds126CO5M.notEvaluated) {
                                    hs_wild326COS4 = hs_ds126CO5M.hscall();
                                }
                                var hs_dn26CO69 = hs_wild326COS4.data[0];
                                if (hs_dn26CO69.notEvaluated) {
                                    return hs_dn26CO69.hscall();
                                } else {
                                    return hs_dn26CO69;
                                }
                            };
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26COS1, hs_sat26COS2);
                        };
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26CORZ, hs_ds26CO63];
                        return $res;
                    }
                case 2:
                    var hs_wild226CORK = hs_ds226CO5V;
                    if (hs_ds226CO5V.notEvaluated) {
                        hs_wild226CORK = hs_ds226CO5V.hscall();
                    }
                    switch (hs_wild226CORK.tag) {
                    case 1:
                        var hs_sat26CORW = new $hs.Thunk();
                        hs_sat26CORW.evaluateOnce = function () {
                            var hs_wild326CORY = hs_ds126CO5M;
                            if (hs_ds126CO5M.notEvaluated) {
                                hs_wild326CORY = hs_ds126CO5M.hscall();
                            }
                            var hs_dn26CO6h = hs_wild326CORY.data[0];
                            if (hs_dn26CO6h.notEvaluated) {
                                return hs_dn26CO6h.hscall();
                            } else {
                                return hs_dn26CO6h;
                            }
                        };
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26CORW, hs_ds26CO63];
                        return $res;
                    case 2:
                        var hs_sat26CORM = new $hs.Thunk();
                        hs_sat26CORM.evaluateOnce = function () {
                            var hs_sat26CORV = new $hs.Thunk();
                            hs_sat26CORV.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                            };
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_rnzq26CO5S, hs_sat26CORV);
                        };
                        var hs_wild326CORN = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_sat26CORM, hs_sN26CO5L);
                        switch (hs_wild326CORN.tag) {
                        case 1:
                            var hs_sat26CORQ = new $hs.Thunk();
                            hs_sat26CORQ.evaluateOnce = function () {
                                var hs_sat26CORS = new $hs.Thunk();
                                hs_sat26CORS.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                };
                                var hs_sat26CORR = new $hs.Thunk();
                                hs_sat26CORR.evaluateOnce = function () {
                                    var hs_wild426CORU = hs_ds126CO5M;
                                    if (hs_ds126CO5M.notEvaluated) {
                                        hs_wild426CORU = hs_ds126CO5M.hscall();
                                    }
                                    var hs_dn26CO6p = hs_wild426CORU.data[0];
                                    if (hs_dn26CO6p.notEvaluated) {
                                        return hs_dn26CO6p.hscall();
                                    } else {
                                        return hs_dn26CO6p;
                                    }
                                };
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26CORR, hs_sat26CORS);
                            };
                            var $res = new $hs.Data(2);
                            $res.data = [hs_sat26CORQ, hs_ds26CO63];
                            return $res;
                        case 2:
                            var hs_sat26CORJ = new $hs.Thunk();
                            hs_sat26CORJ.evaluateOnce = function () {
                                var hs_wild426CORP = hs_ds126CO5M;
                                if (hs_ds126CO5M.notEvaluated) {
                                    hs_wild426CORP = hs_ds126CO5M.hscall();
                                }
                                var hs_dn26CO6w = hs_wild426CORP.data[0];
                                if (hs_dn26CO6w.notEvaluated) {
                                    return hs_dn26CO6w.hscall();
                                } else {
                                    return hs_dn26CO6w;
                                }
                            };
                            var $res = new $hs.Data(2);
                            $res.data = [hs_sat26CORJ, hs_ds26CO63];
                            return $res;
                        }
                    }
                }
            };
            var hs_b26CO6z = new $hs.Thunk();
            hs_b26CO6z.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_floatRadix.hscall(hs_zddRealFloat26CO5k, hs_eta126CO5r);
            };
            var hs_p26CO6B = new $hs.Thunk();
            hs_p26CO6B.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_floatDigits.hscall(hs_zddRealFloat26CO5k, hs_eta126CO5r);
            };
            var hs_minExp26CO6I = new $hs.Thunk();
            hs_minExp26CO6I.evaluateOnce = function () {
                var hs_sat26CORG = new $hs.Thunk();
                hs_sat26CORG.evaluateOnce = function () {
                    var hs_wild126CORI = $hs.modules.GHCziFloat.hs_floatRange.hscall(hs_zddRealFloat26CO5k, hs_eta126CO5r);
                    var hs_minExp026CO6G = hs_wild126CORI.data[0];
                    if (hs_minExp026CO6G.notEvaluated) {
                        return hs_minExp026CO6G.hscall();
                    } else {
                        return hs_minExp026CO6G;
                    }
                };
                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26CORG, hs_p26CO6B);
            };
            var hs_ds26CO6K = new $hs.Thunk();
            hs_ds26CO6K.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_decodeFloat.hscall(hs_zddRealFloat26CO5k, hs_eta126CO5r);
            };
            var hs_e026CO6Q = new $hs.Thunk();
            hs_e026CO6Q.evaluateOnce = function () {
                var hs_wild126CORF = hs_ds26CO6K;
                if (hs_ds26CO6K.notEvaluated) {
                    hs_wild126CORF = hs_ds26CO6K.hscall();
                }
                var hs_e126CO6P = hs_wild126CORF.data[1];
                if (hs_e126CO6P.notEvaluated) {
                    return hs_e126CO6P.hscall();
                } else {
                    return hs_e126CO6P;
                }
            };
            var hs_ds126CO79 = new $hs.Thunk();
            hs_ds126CO79.evaluateOnce = function () {
                var hs_n26CO6T = new $hs.Thunk();
                hs_n26CO6T.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_minExp26CO6I, hs_e026CO6Q);
                };
                var hs_sat26CORu = new $hs.Data(1);
                hs_sat26CORu.data = [0];
                var hs_wild126CORv = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_n26CO6T, hs_sat26CORu);
                switch (hs_wild126CORv.tag) {
                case 1:
                    var hs_sat26CORB = new $hs.Thunk();
                    hs_sat26CORB.evaluateOnce = function () {
                        var hs_wild226CORD = hs_ds26CO6K;
                        if (hs_ds26CO6K.notEvaluated) {
                            hs_wild226CORD = hs_ds26CO6K.hscall();
                        }
                        var hs_f026CO6Z = hs_wild226CORD.data[0];
                        if (hs_f026CO6Z.notEvaluated) {
                            return hs_f026CO6Z.hscall();
                        } else {
                            return hs_f026CO6Z;
                        }
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26CORB, hs_e026CO6Q];
                    return $res;
                case 2:
                    var hs_sat26CORw = new $hs.Thunk();
                    hs_sat26CORw.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_e026CO6Q, hs_n26CO6T);
                    };
                    var hs_sat26CORt = new $hs.Thunk();
                    hs_sat26CORt.evaluateOnce = function () {
                        var hs_sat26CORy = new $hs.Thunk();
                        hs_sat26CORy.evaluateOnce = function () {
                            return $hs.modules.GHCziFloat.hs_expt.hscall(hs_b26CO6z, hs_n26CO6T);
                        };
                        var hs_sat26CORx = new $hs.Thunk();
                        hs_sat26CORx.evaluateOnce = function () {
                            var hs_wild226CORA = hs_ds26CO6K;
                            if (hs_ds26CO6K.notEvaluated) {
                                hs_wild226CORA = hs_ds26CO6K.hscall();
                            }
                            var hs_f026CO74 = hs_wild226CORA.data[0];
                            if (hs_f026CO74.notEvaluated) {
                                return hs_f026CO74.hscall();
                            } else {
                                return hs_f026CO74;
                            }
                        };
                        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26CORx, hs_sat26CORy);
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26CORt, hs_sat26CORw];
                    return $res;
                }
            };
            var hs_e26CO7f = new $hs.Thunk();
            hs_e26CO7f.evaluateOnce = function () {
                var hs_wild126CORs = hs_ds126CO79;
                if (hs_ds126CO79.notEvaluated) {
                    hs_wild126CORs = hs_ds126CO79.hscall();
                }
                var hs_e126CO7e = hs_wild126CORs.data[1];
                if (hs_e126CO7e.notEvaluated) {
                    return hs_e126CO7e.hscall();
                } else {
                    return hs_e126CO7e;
                }
            };
            var hs_f26CO7l = new $hs.Thunk();
            hs_f26CO7l.evaluateOnce = function () {
                var hs_wild126CORq = hs_ds126CO79;
                if (hs_ds126CO79.notEvaluated) {
                    hs_wild126CORq = hs_ds126CO79.hscall();
                }
                var hs_f126CO7k = hs_wild126CORq.data[0];
                if (hs_f126CO7k.notEvaluated) {
                    return hs_f126CO7k.hscall();
                } else {
                    return hs_f126CO7k;
                }
            };
            var hs_ds226CO84 = new $hs.Thunk();
            hs_ds226CO84.evaluateOnce = function () {
                var hs_sat26COQL = new $hs.Data(1);
                hs_sat26COQL.data = [0];
                var hs_wild126COQM = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_e26CO7f, hs_sat26COQL);
                switch (hs_wild126COQM.tag) {
                case 1:
                    var hs_sat26COR2 = new $hs.Thunk();
                    hs_sat26COR2.evaluateOnce = function () {
                        var hs_sat26CORm = new $hs.Thunk();
                        hs_sat26CORm.evaluateOnce = function () {
                            var hs_sat26CORn = new $hs.Thunk();
                            hs_sat26CORn.evaluateOnce = function () {
                                var hs_sat26CORo = new $hs.Data(1);
                                hs_sat26CORo.data = [1];
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p26CO6B, hs_sat26CORo);
                            };
                            return $hs.modules.GHCziFloat.hs_expt.hscall(hs_b26CO6z, hs_sat26CORn);
                        };
                        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_f26CO7l, hs_sat26CORm);
                    };
                    var hs_sat26COR3 = new $hs.Thunk();
                    hs_sat26COR3.evaluateOnce = function () {
                        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_e26CO7f, hs_minExp26CO6I);
                    };
                    var hs_wild226COR4 = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COR3, hs_sat26COR2);
                    switch (hs_wild226COR4.tag) {
                    case 1:
                        var hs_sat26CORf = new $hs.Thunk();
                        hs_sat26CORf.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        var hs_sat26CORg = new $hs.Thunk();
                        hs_sat26CORg.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        var hs_sat26CORh = new $hs.Thunk();
                        hs_sat26CORh.evaluateOnce = function () {
                            var hs_sat26CORk = new $hs.Thunk();
                            hs_sat26CORk.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                            };
                            var hs_sat26CORj = new $hs.Thunk();
                            hs_sat26CORj.evaluateOnce = function () {
                                var hs_sat26CORl = new $hs.Thunk();
                                hs_sat26CORl.evaluateOnce = function () {
                                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_e26CO7f);
                                };
                                return $hs.modules.GHCziFloat.hs_expt.hscall(hs_b26CO6z, hs_sat26CORl);
                            };
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26CORj, hs_sat26CORk);
                        };
                        var hs_sat26CORe = new $hs.Thunk();
                        hs_sat26CORe.evaluateOnce = function () {
                            var hs_sat26CORi = new $hs.Thunk();
                            hs_sat26CORi.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                            };
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_f26CO7l, hs_sat26CORi);
                        };
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26CORe, hs_sat26CORh, hs_sat26CORg, hs_sat26CORf];
                        return $res;
                    case 2:
                        var hs_sat26COR5 = new $hs.Thunk();
                        hs_sat26COR5.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        var hs_sat26COR6 = new $hs.Thunk();
                        hs_sat26COR6.evaluateOnce = function () {
                            var hs_sat26CORa = new $hs.Thunk();
                            hs_sat26CORa.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                            };
                            var hs_sat26COR9 = new $hs.Thunk();
                            hs_sat26COR9.evaluateOnce = function () {
                                var hs_sat26CORb = new $hs.Thunk();
                                hs_sat26CORb.evaluateOnce = function () {
                                    var hs_sat26CORd = new $hs.Data(1);
                                    hs_sat26CORd.data = [1];
                                    var hs_sat26CORc = new $hs.Thunk();
                                    hs_sat26CORc.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_e26CO7f);
                                    };
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26CORc, hs_sat26CORd);
                                };
                                return $hs.modules.GHCziFloat.hs_expt.hscall(hs_b26CO6z, hs_sat26CORb);
                            };
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26COR9, hs_sat26CORa);
                        };
                        var hs_sat26COR1 = new $hs.Thunk();
                        hs_sat26COR1.evaluateOnce = function () {
                            var hs_sat26COR8 = new $hs.Thunk();
                            hs_sat26COR8.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                            };
                            var hs_sat26COR7 = new $hs.Thunk();
                            hs_sat26COR7.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_f26CO7l, hs_b26CO6z);
                            };
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26COR7, hs_sat26COR8);
                        };
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26COR1, hs_sat26COR6, hs_b26CO6z, hs_sat26COR5];
                        return $res;
                    }
                case 2:
                    var hs_be26CO7O = new $hs.Thunk();
                    hs_be26CO7O.evaluateOnce = function () {
                        return $hs.modules.GHCziFloat.hs_expt.hscall(hs_b26CO6z, hs_e26CO7f);
                    };
                    var hs_sat26COQN = new $hs.Thunk();
                    hs_sat26COQN.evaluateOnce = function () {
                        var hs_sat26COQZ = new $hs.Thunk();
                        hs_sat26COQZ.evaluateOnce = function () {
                            var hs_sat26COR0 = new $hs.Data(1);
                            hs_sat26COR0.data = [1];
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p26CO6B, hs_sat26COR0);
                        };
                        return $hs.modules.GHCziFloat.hs_expt.hscall(hs_b26CO6z, hs_sat26COQZ);
                    };
                    var hs_wild226COQO = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_f26CO7l, hs_sat26COQN);
                    switch (hs_wild226COQO.tag) {
                    case 1:
                        var hs_sat26COQW = new $hs.Thunk();
                        hs_sat26COQW.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                        };
                        var hs_sat26COQV = new $hs.Thunk();
                        hs_sat26COQV.evaluateOnce = function () {
                            var hs_sat26COQY = new $hs.Thunk();
                            hs_sat26COQY.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                            };
                            var hs_sat26COQX = new $hs.Thunk();
                            hs_sat26COQX.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_f26CO7l, hs_be26CO7O);
                            };
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26COQX, hs_sat26COQY);
                        };
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26COQV, hs_sat26COQW, hs_be26CO7O, hs_be26CO7O];
                        return $res;
                    case 2:
                        var hs_sat26COQP = new $hs.Thunk();
                        hs_sat26COQP.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_be26CO7O, hs_b26CO6z);
                        };
                        var hs_sat26COQQ = new $hs.Thunk();
                        hs_sat26COQQ.evaluateOnce = function () {
                            var hs_sat26COQU = new $hs.Thunk();
                            hs_sat26COQU.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                            };
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26COQU, hs_b26CO6z);
                        };
                        var hs_sat26COQK = new $hs.Thunk();
                        hs_sat26COQK.evaluateOnce = function () {
                            var hs_sat26COQS = new $hs.Thunk();
                            hs_sat26COQS.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                            };
                            var hs_sat26COQR = new $hs.Thunk();
                            hs_sat26COQR.evaluateOnce = function () {
                                var hs_sat26COQT = new $hs.Thunk();
                                hs_sat26COQT.evaluateOnce = function () {
                                    return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_f26CO7l, hs_be26CO7O);
                                };
                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26COQT, hs_b26CO6z);
                            };
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26COQR, hs_sat26COQS);
                        };
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26COQK, hs_sat26COQQ, hs_sat26COQP, hs_be26CO7O];
                        return $res;
                    }
                }
            };
            var hs_mUp26CO8c = new $hs.Thunk();
            hs_mUp26CO8c.evaluateOnce = function () {
                var hs_wild126COQJ = hs_ds226CO84;
                if (hs_ds226CO84.notEvaluated) {
                    hs_wild126COQJ = hs_ds226CO84.hscall();
                }
                var hs_mUp126CO8b = hs_wild126COQJ.data[2];
                if (hs_mUp126CO8b.notEvaluated) {
                    return hs_mUp126CO8b.hscall();
                } else {
                    return hs_mUp126CO8b;
                }
            };
            var hs_s26CO8k = new $hs.Thunk();
            hs_s26CO8k.evaluateOnce = function () {
                var hs_wild126COQF = hs_ds226CO84;
                if (hs_ds226CO84.notEvaluated) {
                    hs_wild126COQF = hs_ds226CO84.hscall();
                }
                var hs_s126CO8j = hs_wild126COQF.data[1];
                if (hs_s126CO8j.notEvaluated) {
                    return hs_s126CO8j.hscall();
                } else {
                    return hs_s126CO8j;
                }
            };
            var hs_r26CO8s = new $hs.Thunk();
            hs_r26CO8s.evaluateOnce = function () {
                var hs_wild126COQB = hs_ds226CO84;
                if (hs_ds226CO84.notEvaluated) {
                    hs_wild126COQB = hs_ds226CO84.hscall();
                }
                var hs_r126CO8r = hs_wild126COQB.data[0];
                if (hs_r126CO8r.notEvaluated) {
                    return hs_r126CO8r.hscall();
                } else {
                    return hs_r126CO8r;
                }
            };
            var hs_k26CO9h = new $hs.Thunk();
            hs_k26CO9h.evaluateOnce = function () {
                var hs_fixup26CO8F = new $hs.Func(1);
                hs_fixup26CO8F.evaluate = function (hs_n26CO8w) {
                    var hs_sat26COPU = new $hs.Data(1);
                    hs_sat26COPU.data = [0];
                    var hs_wild126COPV = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_n26CO8w, hs_sat26COPU);
                    switch (hs_wild126COPV.tag) {
                    case 1:
                        var hs_sat26COQ2 = new $hs.Thunk();
                        hs_sat26COQ2.evaluateOnce = function () {
                            var hs_sat26COQ7 = new $hs.Thunk();
                            hs_sat26COQ7.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_r26CO8s, hs_mUp26CO8c);
                            };
                            var hs_sat26COQ6 = new $hs.Thunk();
                            hs_sat26COQ6.evaluateOnce = function () {
                                var hs_sat26COQ8 = new $hs.Thunk();
                                hs_sat26COQ8.evaluateOnce = function () {
                                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26CO8w);
                                };
                                return $hs.modules.GHCziFloat.hs_expt.hscall(hs_eta26CO5D, hs_sat26COQ8);
                            };
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26COQ6, hs_sat26COQ7);
                        };
                        var hs_wild226COQ3 = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_sat26COQ2, hs_s26CO8k);
                        switch (hs_wild226COQ3.tag) {
                        case 1:
                            var hs_sat26COQ4 = new $hs.Thunk();
                            hs_sat26COQ4.evaluateOnce = function () {
                                var hs_sat26COQ5 = new $hs.Data(1);
                                hs_sat26COQ5.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26CO8w, hs_sat26COQ5);
                            };
                            return hs_fixup26CO8F.hscall(hs_sat26COQ4);
                        case 2:
                            if (hs_n26CO8w.notEvaluated) {
                                return hs_n26CO8w.hscall();
                            } else {
                                return hs_n26CO8w;
                            }
                        }
                    case 2:
                        var hs_sat26COPW = new $hs.Thunk();
                        hs_sat26COPW.evaluateOnce = function () {
                            var hs_sat26COQ1 = new $hs.Thunk();
                            hs_sat26COQ1.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_expt.hscall(hs_eta26CO5D, hs_n26CO8w);
                            };
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26COQ1, hs_s26CO8k);
                        };
                        var hs_sat26COPX = new $hs.Thunk();
                        hs_sat26COPX.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_r26CO8s, hs_mUp26CO8c);
                        };
                        var hs_wild226COPY = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_sat26COPX, hs_sat26COPW);
                        switch (hs_wild226COPY.tag) {
                        case 1:
                            var hs_sat26COPZ = new $hs.Thunk();
                            hs_sat26COPZ.evaluateOnce = function () {
                                var hs_sat26COQ0 = new $hs.Data(1);
                                hs_sat26COQ0.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26CO8w, hs_sat26COQ0);
                            };
                            return hs_fixup26CO8F.hscall(hs_sat26COPZ);
                        case 2:
                            if (hs_n26CO8w.notEvaluated) {
                                return hs_n26CO8w.hscall();
                            } else {
                                return hs_n26CO8w;
                            }
                        }
                    }
                };
                var hs_sat26COPT = new $hs.Thunk();
                hs_sat26COPT.evaluateOnce = function () {
                    var hs_sat26COQa = new $hs.Thunk();
                    hs_sat26COQa.evaluateOnce = function () {
                        var hs_sat26COQx = new $hs.Thunk();
                        hs_sat26COQx.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(10);
                        };
                        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_eta26CO5D, hs_sat26COQx);
                    };
                    var hs_sat26COQb = new $hs.Thunk();
                    hs_sat26COQb.evaluateOnce = function () {
                        var hs_sat26COQw = new $hs.Thunk();
                        hs_sat26COQw.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                        };
                        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_b26CO6z, hs_sat26COQw);
                    };
                    var hs_wild126COQc = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COQb, hs_sat26COQa);
                    switch (hs_wild126COQc.tag) {
                    case 1:
                        var hs_sat26COQk = new $hs.Thunk();
                        hs_sat26COQk.evaluateOnce = function () {
                            var hs_sat26COQm = new $hs.Thunk();
                            hs_sat26COQm.evaluateOnce = function () {
                                var hs_sat26COQv = new $hs.Thunk();
                                hs_sat26COQv.evaluateOnce = function () {
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_eta26CO5D);
                                };
                                return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat, hs_sat26COQv);
                            };
                            var hs_sat26COQl = new $hs.Thunk();
                            hs_sat26COQl.evaluateOnce = function () {
                                var hs_sat26COQo = new $hs.Thunk();
                                hs_sat26COQo.evaluateOnce = function () {
                                    var hs_sat26COQt = new $hs.Thunk();
                                    hs_sat26COQt.evaluateOnce = function () {
                                        var hs_sat26COQu = new $hs.Thunk();
                                        hs_sat26COQu.evaluateOnce = function () {
                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_b26CO6z);
                                        };
                                        return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat, hs_sat26COQu);
                                    };
                                    var hs_sat26COQs = new $hs.Thunk();
                                    hs_sat26COQs.evaluateOnce = function () {
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziFloat.hs_zdfNumFloat, hs_e26CO7f);
                                    };
                                    return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26COQs, hs_sat26COQt);
                                };
                                var hs_sat26COQn = new $hs.Thunk();
                                hs_sat26COQn.evaluateOnce = function () {
                                    var hs_sat26COQp = new $hs.Thunk();
                                    hs_sat26COQp.evaluateOnce = function () {
                                        var hs_sat26COQq = new $hs.Thunk();
                                        hs_sat26COQq.evaluateOnce = function () {
                                            var hs_sat26COQr = new $hs.Thunk();
                                            hs_sat26COQr.evaluateOnce = function () {
                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                            };
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_f26CO7l, hs_sat26COQr);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26COQq);
                                    };
                                    return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat, hs_sat26COQp);
                                };
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26COQn, hs_sat26COQo);
                            };
                            return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat, hs_sat26COQl, hs_sat26COQm);
                        };
                        return $hs.modules.GHCziReal.hs_ceiling.hscall($hs.modules.GHCziFloat.hs_zdfRealFracFloat, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26COQk);
                    case 2:
                        var hs_lx26CO97 = new $hs.Thunk();
                        hs_lx26CO97.evaluateOnce = function () {
                            var hs_sat26COQi = new $hs.Thunk();
                            hs_sat26COQi.evaluateOnce = function () {
                                var hs_sat26COQj = new $hs.Data(1);
                                hs_sat26COQj.data = [1];
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p26CO6B, hs_sat26COQj);
                            };
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COQi, hs_e026CO6Q);
                        };
                        var hs_k126CO9c = new $hs.Thunk();
                        hs_k126CO9c.evaluateOnce = function () {
                            var hs_sat26COQg = new $hs.Data(1);
                            hs_sat26COQg.data = [28738];
                            var hs_sat26COQf = new $hs.Thunk();
                            hs_sat26COQf.evaluateOnce = function () {
                                var hs_sat26COQh = new $hs.Data(1);
                                hs_sat26COQh.data = [8651];
                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_lx26CO97, hs_sat26COQh);
                            };
                            return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26COQf, hs_sat26COQg);
                        };
                        var hs_sat26COQd = new $hs.Data(1);
                        hs_sat26COQd.data = [0];
                        var hs_wild226COQe = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_lx26CO97, hs_sat26COQd);
                        switch (hs_wild226COQe.tag) {
                        case 1:
                            if (hs_k126CO9c.notEvaluated) {
                                return hs_k126CO9c.hscall();
                            } else {
                                return hs_k126CO9c;
                            }
                        case 2:
                            var hs_sat26COQ9 = new $hs.Data(1);
                            hs_sat26COQ9.data = [1];
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_k126CO9c, hs_sat26COQ9);
                        }
                    }
                };
                return hs_fixup26CO8F.hscall(hs_sat26COPT);
            };
            var hs_sat26COPx = new $hs.Thunk();
            hs_sat26COPx.evaluateOnce = function () {
                var hs_sat26COPz = new $hs.Thunk();
                hs_sat26COPz.evaluateOnce = function () {
                    var hs_sat26COPA = new $hs.Thunk();
                    hs_sat26COPA.evaluateOnce = function () {
                        var hs_sat26COPD = new $hs.Data(1);
                        hs_sat26COPD.data = [0];
                        var hs_wild126COPE = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_k26CO9h, hs_sat26COPD);
                        switch (hs_wild126COPE.tag) {
                        case 1:
                            var hs_bk26CO9n = new $hs.Thunk();
                            hs_bk26CO9n.evaluateOnce = function () {
                                var hs_sat26COPS = new $hs.Thunk();
                                hs_sat26COPS.evaluateOnce = function () {
                                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_k26CO9h);
                                };
                                return $hs.modules.GHCziFloat.hs_expt.hscall(hs_eta26CO5D, hs_sat26COPS);
                            };
                            var hs_sat26COPL = new $hs.Thunk();
                            hs_sat26COPL.evaluateOnce = function () {
                                var hs_sat26COPN = new $hs.Thunk();
                                hs_sat26COPN.evaluateOnce = function () {
                                    var hs_wild226COPR = hs_ds226CO84;
                                    if (hs_ds226CO84.notEvaluated) {
                                        hs_wild226COPR = hs_ds226CO84.hscall();
                                    }
                                    var hs_mDn26CO9v = hs_wild226COPR.data[3];
                                    if (hs_mDn26CO9v.notEvaluated) {
                                        return hs_mDn26CO9v.hscall();
                                    } else {
                                        return hs_mDn26CO9v;
                                    }
                                };
                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26COPN, hs_bk26CO9n);
                            };
                            var hs_sat26COPM = new $hs.Thunk();
                            hs_sat26COPM.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_mUp26CO8c, hs_bk26CO9n);
                            };
                            var hs_sat26COPK = new $hs.Thunk();
                            hs_sat26COPK.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_r26CO8s, hs_bk26CO9n);
                            };
                            return hs_gen26CO64.hscall($hs.modules.GHCziTypes.hs_ZMZN, hs_sat26COPK, hs_s26CO8k, hs_sat26COPM, hs_sat26COPL);
                        case 2:
                            var hs_sat26COPC = new $hs.Thunk();
                            hs_sat26COPC.evaluateOnce = function () {
                                var hs_wild226COPJ = hs_ds226CO84;
                                if (hs_ds226CO84.notEvaluated) {
                                    hs_wild226COPJ = hs_ds226CO84.hscall();
                                }
                                var hs_mDn26CO9F = hs_wild226COPJ.data[3];
                                if (hs_mDn26CO9F.notEvaluated) {
                                    return hs_mDn26CO9F.hscall();
                                } else {
                                    return hs_mDn26CO9F;
                                }
                            };
                            var hs_sat26COPB = new $hs.Thunk();
                            hs_sat26COPB.evaluateOnce = function () {
                                var hs_sat26COPF = new $hs.Thunk();
                                hs_sat26COPF.evaluateOnce = function () {
                                    return $hs.modules.GHCziFloat.hs_expt.hscall(hs_eta26CO5D, hs_k26CO9h);
                                };
                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_s26CO8k, hs_sat26COPF);
                            };
                            return hs_gen26CO64.hscall($hs.modules.GHCziTypes.hs_ZMZN, hs_r26CO8s, hs_sat26COPB, hs_mUp26CO8c, hs_sat26COPC);
                        }
                    };
                    return $hs.modules.GHCziList.hs_reverse.hscall(hs_sat26COPA);
                };
                var hs_sat26COPy = new $hs.Thunk();
                hs_sat26COPy.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, $hs.modules.GHCziNum.hs_zdfNumInt);
                };
                return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26COPy, hs_sat26COPz);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26COPx, hs_k26CO9h];
            return $res;
        case 2:
            var hs_sat26COPv = new $hs.Data(1);
            hs_sat26COPv.data = [0];
            var hs_sat26COPw = new $hs.Data(1);
            hs_sat26COPw.data = [0];
            var hs_sat26COPr = new $hs.Data(2);
            hs_sat26COPr.data = [hs_sat26COPw, $hs.modules.GHCziTypes.hs_ZMZN];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26COPr, hs_sat26COPv];
            return $res;
        }
    };
    this.hs_formatRealFloat.evaluate = function (hs_zddRealFloat26CO9S, hs_eta26COes, hs_eta126COa9, hs_eta226COeh) {
        var hs_zddFloating226CO9T = new $hs.Thunk();
        hs_zddFloating226CO9T.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_zdp2RealFloat.hscall(hs_zddRealFloat26CO9S);
        };
        var hs_zddFractional326CO9V = new $hs.Thunk();
        hs_zddFractional326CO9V.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_zdp1Floating.hscall(hs_zddFloating226CO9T);
        };
        var hs_zddNum326CO9X = new $hs.Thunk();
        hs_zddNum326CO9X.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional326CO9V);
        };
        var hs_base26CO9Z = new $hs.Data(1);
        hs_base26CO9Z.data = [10];
        var hs_doFmt26COee = new $hs.Func(2);
        hs_doFmt26COee.evaluate = function (hs_format26COa7, hs_ds26COa3) {
            var hs_wild26CON0 = hs_ds26COa3;
            if (hs_ds26COa3.notEvaluated) {
                hs_wild26CON0 = hs_ds26COa3.hscall();
            }
            var hs_is26COag = hs_wild26CON0.data[0];
            var hs_e26COac = hs_wild26CON0.data[1];
            var hs_wild126COMZ = hs_format26COa7;
            if (hs_format26COa7.notEvaluated) {
                hs_wild126COMZ = hs_format26COa7.hscall();
            }
            switch (hs_wild126COMZ.tag) {
            case 1:
                var hs_wild226COOx = hs_eta126COa9;
                if (hs_eta126COa9.notEvaluated) {
                    hs_wild226COOx = hs_eta126COa9.hscall();
                }
                switch (hs_wild226COOx.tag) {
                case 1:
                    var hs_showzuezq26COaf = new $hs.Thunk();
                    hs_showzuezq26COaf.evaluateOnce = function () {
                        var hs_sat26COPp = new $hs.Thunk();
                        hs_sat26COPp.evaluateOnce = function () {
                            var hs_sat26COPq = new $hs.Data(1);
                            hs_sat26COPq.data = [1];
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_e26COac, hs_sat26COPq);
                        };
                        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26COPp);
                    };
                    var hs_wild326COPd = $hs.modules.GHCziBase.hs_map.hscall($hs.modules.GHCziShow.hs_intToDigit, hs_is26COag);
                    switch (hs_wild326COPd.tag) {
                    case 1:
                        var hs_sat26COPo = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("formatRealFloat/doFmt/FFExponent: []\x00");
                        return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26COPo);
                    case 2:
                        var hs_ds126COap = hs_wild326COPd.data[0];
                        var hs_ds226COan = hs_wild326COPd.data[1];
                        var hs_fail26COaC = new $hs.Func(1);
                        hs_fail26COaC.evaluate = function (hs_ds326COaB) {
                            var hs_wild426COav = hs_ds226COan;
                            if (hs_ds226COan.notEvaluated) {
                                hs_wild426COav = hs_ds226COan.hscall();
                            }
                            switch (hs_wild426COav.tag) {
                            case 1:
                                var hs_sat26COPm = new $hs.Thunk();
                                hs_sat26COPm.evaluateOnce = function () {
                                    var hs_sat26COPn = new $hs.Thunk();
                                    hs_sat26COPn.evaluateOnce = function () {
                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(".0e\x00");
                                    };
                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26COPn, hs_showzuezq26COaf);
                                };
                                var $res = new $hs.Data(2);
                                $res.data = [hs_ds126COap, hs_sat26COPm];
                                return $res;
                            case 2:
                                var hs_sat26COPh = new $hs.Thunk();
                                hs_sat26COPh.evaluateOnce = function () {
                                    var hs_sat26COPj = new $hs.Thunk();
                                    hs_sat26COPj.evaluateOnce = function () {
                                        var hs_sat26COPl = new $hs.Data(1);
                                        hs_sat26COPl.data = ["e"];
                                        var hs_sat26COPk = new $hs.Data(2);
                                        hs_sat26COPk.data = [hs_sat26COPl, $hs.modules.GHCziTypes.hs_ZMZN];
                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26COPk, hs_showzuezq26COaf);
                                    };
                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_wild426COav, hs_sat26COPj);
                                };
                                var hs_sat26COPi = new $hs.Data(1);
                                hs_sat26COPi.data = ["."];
                                var hs_sat26COPe = new $hs.Data(2);
                                hs_sat26COPe.data = [hs_sat26COPi, hs_sat26COPh];
                                var $res = new $hs.Data(2);
                                $res.data = [hs_ds126COap, hs_sat26COPe];
                                return $res;
                            }
                        };
                        var hs_wild426COPc = hs_ds126COap;
                        if (hs_ds126COap.notEvaluated) {
                            hs_wild426COPc = hs_ds126COap.hscall();
                        }
                        var hs_ds326COaF = hs_wild426COPc.data[0];
                        var hs_ds426COPb = hs_ds326COaF;
                        if (hs_ds326COaF.notEvaluated) {
                            hs_ds426COPb = hs_ds326COaF.hscall();
                        }
                        switch (hs_ds426COPb) {
                        case "0":
                            var hs_wild526COPa = hs_ds226COan;
                            if (hs_ds226COan.notEvaluated) {
                                hs_wild526COPa = hs_ds226COan.hscall();
                            }
                            switch (hs_wild526COPa.tag) {
                            case 1:
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("0.0e0\x00");
                            case 2:
                                return hs_fail26COaC.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            }
                        default:
                            return hs_fail26COaC.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        }
                    }
                case 2:
                    var hs_dec26COaM = hs_wild226COOx.data[0];
                    var hs_deczq26COaO = new $hs.Thunk();
                    hs_deczq26COaO.evaluateOnce = function () {
                        var hs_sat26COP7 = new $hs.Data(1);
                        hs_sat26COP7.data = [1];
                        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_dec26COaM, hs_sat26COP7);
                    };
                    var hs_fail26CObB = new $hs.Func(1);
                    hs_fail26CObB.evaluate = function (hs_ds126CObA) {
                        var hs_ds226COaU = new $hs.Thunk();
                        hs_ds226COaU.evaluateOnce = function () {
                            var hs_sat26COP5 = new $hs.Thunk();
                            hs_sat26COP5.evaluateOnce = function () {
                                var hs_sat26COP6 = new $hs.Data(1);
                                hs_sat26COP6.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_deczq26COaO, hs_sat26COP6);
                            };
                            return $hs.modules.GHCziFloat.hs_roundTo.hscall(hs_base26CO9Z, hs_sat26COP5, hs_is26COag);
                        };
                        var hs_ei26COb0 = new $hs.Thunk();
                        hs_ei26COb0.evaluateOnce = function () {
                            var hs_wild326COP4 = hs_ds226COaU;
                            if (hs_ds226COaU.notEvaluated) {
                                hs_wild326COP4 = hs_ds226COaU.hscall();
                            }
                            var hs_ei126COaZ = hs_wild326COP4.data[0];
                            if (hs_ei126COaZ.notEvaluated) {
                                return hs_ei126COaZ.hscall();
                            } else {
                                return hs_ei126COaZ;
                            }
                        };
                        var hs_ds326COb2 = new $hs.Thunk();
                        hs_ds326COb2.evaluateOnce = function () {
                            return $hs.modules.ControlziExceptionziBase.hs_irrefutPatError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Float.lhs:573:12-70|(d : ds')\x00");
                        };
                        var hs_ds426CObg = new $hs.Thunk();
                        hs_ds426CObg.evaluateOnce = function () {
                            var hs_sat26COOV = new $hs.Thunk();
                            hs_sat26COOV.evaluateOnce = function () {
                                var hs_sat26COOX = new $hs.Data(1);
                                hs_sat26COOX.data = [0];
                                var hs_wild326COOY = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_ei26COb0, hs_sat26COOX);
                                switch (hs_wild326COOY.tag) {
                                case 1:
                                    var hs_wild426COP2 = hs_ds226COaU;
                                    if (hs_ds226COaU.notEvaluated) {
                                        hs_wild426COP2 = hs_ds226COaU.hscall();
                                    }
                                    var hs_iszq26COb9 = hs_wild426COP2.data[1];
                                    if (hs_iszq26COb9.notEvaluated) {
                                        return hs_iszq26COb9.hscall();
                                    } else {
                                        return hs_iszq26COb9;
                                    }
                                case 2:
                                    var hs_sat26COOW = new $hs.Thunk();
                                    hs_sat26COOW.evaluateOnce = function () {
                                        var hs_wild426COP0 = hs_ds226COaU;
                                        if (hs_ds226COaU.notEvaluated) {
                                            hs_wild426COP0 = hs_ds226COaU.hscall();
                                        }
                                        var hs_iszq26CObd = hs_wild426COP0.data[1];
                                        if (hs_iszq26CObd.notEvaluated) {
                                            return hs_iszq26CObd.hscall();
                                        } else {
                                            return hs_iszq26CObd;
                                        }
                                    };
                                    return $hs.modules.GHCziList.hs_init.hscall(hs_sat26COOW);
                                }
                            };
                            return $hs.modules.GHCziBase.hs_map.hscall($hs.modules.GHCziShow.hs_intToDigit, hs_sat26COOV);
                        };
                        var hs_sat26COOH = new $hs.Thunk();
                        hs_sat26COOH.evaluateOnce = function () {
                            var hs_sat26COON = new $hs.Thunk();
                            hs_sat26COON.evaluateOnce = function () {
                                var hs_sat26COOS = new $hs.Thunk();
                                hs_sat26COOS.evaluateOnce = function () {
                                    var hs_sat26COOT = new $hs.Thunk();
                                    hs_sat26COOT.evaluateOnce = function () {
                                        var hs_sat26COOU = new $hs.Data(1);
                                        hs_sat26COOU.data = [1];
                                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_e26COac, hs_sat26COOU);
                                    };
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COOT, hs_ei26COb0);
                                };
                                return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26COOS);
                            };
                            var hs_sat26COOO = new $hs.Data(1);
                            hs_sat26COOO.data = ["e"];
                            var hs_sat26COOP = new $hs.Data(2);
                            hs_sat26COOP.data = [hs_sat26COOO, hs_sat26COON];
                            var hs_sat26COOM = new $hs.Thunk();
                            hs_sat26COOM.evaluateOnce = function () {
                                var hs_wild326COOR = hs_ds426CObg;
                                if (hs_ds426CObg.notEvaluated) {
                                    hs_wild326COOR = hs_ds426CObg.hscall();
                                }
                                switch (hs_wild326COOR.tag) {
                                case 1:
                                    if (hs_ds326COb2.notEvaluated) {
                                        return hs_ds326COb2.hscall();
                                    } else {
                                        return hs_ds326COb2;
                                    }
                                case 2:
                                    var hs_dszq26CObq = hs_wild326COOR.data[1];
                                    if (hs_dszq26CObq.notEvaluated) {
                                        return hs_dszq26CObq.hscall();
                                    } else {
                                        return hs_dszq26CObq;
                                    }
                                }
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26COOM, hs_sat26COOP);
                        };
                        var hs_sat26COOI = new $hs.Data(1);
                        hs_sat26COOI.data = ["."];
                        var hs_sat26COOJ = new $hs.Data(2);
                        hs_sat26COOJ.data = [hs_sat26COOI, hs_sat26COOH];
                        var hs_sat26COOG = new $hs.Thunk();
                        hs_sat26COOG.evaluateOnce = function () {
                            var hs_wild326COOL = hs_ds426CObg;
                            if (hs_ds426CObg.notEvaluated) {
                                hs_wild326COOL = hs_ds426CObg.hscall();
                            }
                            switch (hs_wild326COOL.tag) {
                            case 1:
                                if (hs_ds326COb2.notEvaluated) {
                                    return hs_ds326COb2.hscall();
                                } else {
                                    return hs_ds326COb2;
                                }
                            case 2:
                                var hs_d26CObk = hs_wild326COOL.data[0];
                                if (hs_d26CObk.notEvaluated) {
                                    return hs_d26CObk.hscall();
                                } else {
                                    return hs_d26CObk;
                                }
                            }
                        };
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26COOG, hs_sat26COOJ];
                        return $res;
                    };
                    var hs_wild326COOw = hs_is26COag;
                    if (hs_is26COag.notEvaluated) {
                        hs_wild326COOw = hs_is26COag.hscall();
                    }
                    switch (hs_wild326COOw.tag) {
                    case 1:
                        return hs_fail26CObB.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    case 2:
                        var hs_ds126CObF = hs_wild326COOw.data[0];
                        var hs_ds226CObK = hs_wild326COOw.data[1];
                        var hs_wild426COOv = hs_ds126CObF;
                        if (hs_ds126CObF.notEvaluated) {
                            hs_wild426COOv = hs_ds126CObF.hscall();
                        }
                        var hs_ds326CObI = hs_wild426COOv.data[0];
                        var hs_ds426COOu = hs_ds326CObI;
                        if (hs_ds326CObI.notEvaluated) {
                            hs_ds426COOu = hs_ds326CObI.hscall();
                        }
                        switch (hs_ds426COOu) {
                        case 0:
                            var hs_wild526COOt = hs_ds226CObK;
                            if (hs_ds226CObK.notEvaluated) {
                                hs_wild526COOt = hs_ds226CObK.hscall();
                            }
                            switch (hs_wild526COOt.tag) {
                            case 1:
                                var hs_sat26COOz = new $hs.Thunk();
                                hs_sat26COOz.evaluateOnce = function () {
                                    var hs_sat26COOD = new $hs.Thunk();
                                    hs_sat26COOD.evaluateOnce = function () {
                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("e0\x00");
                                    };
                                    var hs_sat26COOC = new $hs.Thunk();
                                    hs_sat26COOC.evaluateOnce = function () {
                                        var hs_sat26COOE = new $hs.Thunk();
                                        hs_sat26COOE.evaluateOnce = function () {
                                            var hs_sat26COOF = new $hs.Data(1);
                                            hs_sat26COOF.data = ["0"];
                                            return $hs.modules.GHCziList.hs_repeat.hscall(hs_sat26COOF);
                                        };
                                        return $hs.modules.GHCziList.hs_take.hscall(hs_deczq26COaO, hs_sat26COOE);
                                    };
                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26COOC, hs_sat26COOD);
                                };
                                var hs_sat26COOA = new $hs.Data(1);
                                hs_sat26COOA.data = ["."];
                                var hs_sat26COOB = new $hs.Data(2);
                                hs_sat26COOB.data = [hs_sat26COOA, hs_sat26COOz];
                                var hs_sat26COOy = new $hs.Data(1);
                                hs_sat26COOy.data = ["0"];
                                var $res = new $hs.Data(2);
                                $res.data = [hs_sat26COOy, hs_sat26COOB];
                                return $res;
                            case 2:
                                return hs_fail26CObB.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            }
                        default:
                            return hs_fail26CObB.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        }
                    }
                }
            case 2:
                var hs_wild226COMY = hs_eta126COa9;
                if (hs_eta126COa9.notEvaluated) {
                    hs_wild226COMY = hs_eta126COa9.hscall();
                }
                switch (hs_wild226COMY.tag) {
                case 1:
                    var hs_sat26CONP = new $hs.Data(1);
                    hs_sat26CONP.data = [0];
                    var hs_wild326CONQ = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_e26COac, hs_sat26CONP);
                    switch (hs_wild326CONQ.tag) {
                    case 1:
                        var hs_zddEq226COc0 = new $hs.Thunk();
                        hs_zddEq226COc0.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zdp1Num.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
                        };
                        var hs_f26COcd = new $hs.Func(3);
                        hs_f26COcd.evaluate = function (hs_ds126COc5, hs_s26COcg, hs_rs26COc9) {
                            var hs_sat26CONY = new $hs.Thunk();
                            hs_sat26CONY.evaluateOnce = function () {
                                var hs_sat26COOj = new $hs.Thunk();
                                hs_sat26COOj.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COOj);
                            };
                            var hs_wild426CONZ = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226COc0, hs_ds126COc5, hs_sat26CONY);
                            switch (hs_wild426CONZ.tag) {
                            case 1:
                                var hs_wild526COOc = hs_rs26COc9;
                                if (hs_rs26COc9.notEvaluated) {
                                    hs_wild526COOc = hs_rs26COc9.hscall();
                                }
                                switch (hs_wild526COOc.tag) {
                                case 1:
                                    var hs_sat26COOf = new $hs.Data(1);
                                    hs_sat26COOf.data = ["0"];
                                    var hs_sat26COOg = new $hs.Data(2);
                                    hs_sat26COOg.data = [hs_sat26COOf, hs_s26COcg];
                                    var hs_sat26COOe = new $hs.Thunk();
                                    hs_sat26COOe.evaluateOnce = function () {
                                        var hs_sat26COOh = new $hs.Thunk();
                                        hs_sat26COOh.evaluateOnce = function () {
                                            var hs_sat26COOi = new $hs.Thunk();
                                            hs_sat26COOi.evaluateOnce = function () {
                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                            };
                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COOi);
                                        };
                                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ds126COc5, hs_sat26COOh);
                                    };
                                    return hs_f26COcd.hscall(hs_sat26COOe, hs_sat26COOg, $hs.modules.GHCziTypes.hs_ZMZN);
                                case 2:
                                    var hs_r26COcn = hs_wild526COOc.data[0];
                                    var hs_rs126COcp = hs_wild526COOc.data[1];
                                    var hs_sat26COOa = new $hs.Data(2);
                                    hs_sat26COOa.data = [hs_r26COcn, hs_s26COcg];
                                    var hs_sat26COO9 = new $hs.Thunk();
                                    hs_sat26COO9.evaluateOnce = function () {
                                        var hs_sat26COOb = new $hs.Thunk();
                                        hs_sat26COOb.evaluateOnce = function () {
                                            var hs_sat26COOd = new $hs.Thunk();
                                            hs_sat26COOd.evaluateOnce = function () {
                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                            };
                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COOd);
                                        };
                                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ds126COc5, hs_sat26COOb);
                                    };
                                    return hs_f26COcd.hscall(hs_sat26COO9, hs_sat26COOa, hs_rs126COcp);
                                }
                            case 2:
                                var hs_sat26COO0 = new $hs.Thunk();
                                hs_sat26COO0.evaluateOnce = function () {
                                    var hs_wild526COcB = hs_rs26COc9;
                                    if (hs_rs26COc9.notEvaluated) {
                                        hs_wild526COcB = hs_rs26COc9.hscall();
                                    }
                                    switch (hs_wild526COcB.tag) {
                                    case 1:
                                        var hs_sat26COO8 = new $hs.Data(1);
                                        hs_sat26COO8.data = ["0"];
                                        var $res = new $hs.Data(2);
                                        $res.data = [hs_sat26COO8, $hs.modules.GHCziTypes.hs_ZMZN];
                                        return $res;
                                    case 2:
                                        if (hs_wild526COcB.notEvaluated) {
                                            return hs_wild526COcB.hscall();
                                        } else {
                                            return hs_wild526COcB;
                                        }
                                    }
                                };
                                var hs_sat26COO1 = new $hs.Data(1);
                                hs_sat26COO1.data = ["."];
                                var hs_sat26COO2 = new $hs.Data(2);
                                hs_sat26COO2.data = [hs_sat26COO1, hs_sat26COO0];
                                var hs_sat26CONX = new $hs.Thunk();
                                hs_sat26CONX.evaluateOnce = function () {
                                    var hs_wild526COcu = $hs.modules.GHCziList.hs_reverse.hscall(hs_s26COcg);
                                    switch (hs_wild526COcu.tag) {
                                    case 1:
                                        var hs_sat26COO5 = new $hs.Data(1);
                                        hs_sat26COO5.data = ["0"];
                                        var $res = new $hs.Data(2);
                                        $res.data = [hs_sat26COO5, $hs.modules.GHCziTypes.hs_ZMZN];
                                        return $res;
                                    case 2:
                                        if (hs_wild526COcu.notEvaluated) {
                                            return hs_wild526COcu.hscall();
                                        } else {
                                            return hs_wild526COcu;
                                        }
                                    }
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CONX, hs_sat26COO2);
                            }
                        };
                        var hs_sat26CONW = new $hs.Thunk();
                        hs_sat26CONW.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_map.hscall($hs.modules.GHCziShow.hs_intToDigit, hs_is26COag);
                        };
                        return hs_f26COcd.hscall(hs_e26COac, $hs.modules.GHCziTypes.hs_ZMZN, hs_sat26CONW);
                    case 2:
                        var hs_sat26CONR = new $hs.Thunk();
                        hs_sat26CONR.evaluateOnce = function () {
                            var hs_sat26CONT = new $hs.Thunk();
                            hs_sat26CONT.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_map.hscall($hs.modules.GHCziShow.hs_intToDigit, hs_is26COag);
                            };
                            var hs_sat26CONS = new $hs.Thunk();
                            hs_sat26CONS.evaluateOnce = function () {
                                var hs_sat26CONV = new $hs.Data(1);
                                hs_sat26CONV.data = ["0"];
                                var hs_sat26CONU = new $hs.Thunk();
                                hs_sat26CONU.evaluateOnce = function () {
                                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_e26COac);
                                };
                                return $hs.modules.GHCziList.hs_replicate.hscall(hs_sat26CONU, hs_sat26CONV);
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CONS, hs_sat26CONT);
                        };
                        var hs_sat26CONO = new $hs.Thunk();
                        hs_sat26CONO.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("0.\x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CONO, hs_sat26CONR);
                    }
                case 2:
                    var hs_dec26COcP = hs_wild226COMY.data[0];
                    var hs_sat26CON1 = new $hs.Data(1);
                    hs_sat26CON1.data = [0];
                    var hs_wild326CON2 = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_e26COac, hs_sat26CON1);
                    switch (hs_wild326CON2.tag) {
                    case 1:
                        var hs_ds126COcW = new $hs.Thunk();
                        hs_ds126COcW.evaluateOnce = function () {
                            var hs_sat26CONJ = new $hs.Thunk();
                            hs_sat26CONJ.evaluateOnce = function () {
                                var hs_sat26CONL = new $hs.Thunk();
                                hs_sat26CONL.evaluateOnce = function () {
                                    var hs_sat26CONN = new $hs.Data(1);
                                    hs_sat26CONN.data = [0];
                                    var hs_sat26CONM = new $hs.Thunk();
                                    hs_sat26CONM.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_e26COac);
                                    };
                                    return $hs.modules.GHCziList.hs_replicate.hscall(hs_sat26CONM, hs_sat26CONN);
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CONL, hs_is26COag);
                            };
                            var hs_sat26CONI = new $hs.Thunk();
                            hs_sat26CONI.evaluateOnce = function () {
                                var hs_sat26CONK = new $hs.Data(1);
                                hs_sat26CONK.data = [0];
                                return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_dec26COcP, hs_sat26CONK);
                            };
                            return $hs.modules.GHCziFloat.hs_roundTo.hscall(hs_base26CO9Z, hs_sat26CONI, hs_sat26CONJ);
                        };
                        var hs_ds226COcY = new $hs.Thunk();
                        hs_ds226COcY.evaluateOnce = function () {
                            return $hs.modules.ControlziExceptionziBase.hs_irrefutPatError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Float.lhs:601:11-64|d : ds'\x00");
                        };
                        var hs_ds326COdi = new $hs.Thunk();
                        hs_ds326COdi.evaluateOnce = function () {
                            var hs_sat26CONw = new $hs.Thunk();
                            hs_sat26CONw.evaluateOnce = function () {
                                var hs_sat26CONz = new $hs.Data(1);
                                hs_sat26CONz.data = [0];
                                var hs_sat26CONA = new $hs.Thunk();
                                hs_sat26CONA.evaluateOnce = function () {
                                    var hs_wild426CONH = hs_ds126COcW;
                                    if (hs_ds126COcW.notEvaluated) {
                                        hs_wild426CONH = hs_ds126COcW.hscall();
                                    }
                                    var hs_ei26COd3 = hs_wild426CONH.data[0];
                                    if (hs_ei26COd3.notEvaluated) {
                                        return hs_ei26COd3.hscall();
                                    } else {
                                        return hs_ei26COd3;
                                    }
                                };
                                var hs_wild426CONB = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26CONA, hs_sat26CONz);
                                switch (hs_wild426CONB.tag) {
                                case 1:
                                    var hs_sat26COND = new $hs.Thunk();
                                    hs_sat26COND.evaluateOnce = function () {
                                        var hs_wild526CONF = hs_ds126COcW;
                                        if (hs_ds126COcW.notEvaluated) {
                                            hs_wild526CONF = hs_ds126COcW.hscall();
                                        }
                                        var hs_iszq26COdb = hs_wild526CONF.data[1];
                                        if (hs_iszq26COdb.notEvaluated) {
                                            return hs_iszq26COdb.hscall();
                                        } else {
                                            return hs_iszq26COdb;
                                        }
                                    };
                                    var hs_sat26CONC = new $hs.Data(1);
                                    hs_sat26CONC.data = [0];
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_sat26CONC, hs_sat26COND];
                                    return $res;
                                case 2:
                                    var hs_wild526CONy = hs_ds126COcW;
                                    if (hs_ds126COcW.notEvaluated) {
                                        hs_wild526CONy = hs_ds126COcW.hscall();
                                    }
                                    var hs_iszq26COdg = hs_wild526CONy.data[1];
                                    if (hs_iszq26COdg.notEvaluated) {
                                        return hs_iszq26COdg.hscall();
                                    } else {
                                        return hs_iszq26COdg;
                                    }
                                }
                            };
                            return $hs.modules.GHCziBase.hs_map.hscall($hs.modules.GHCziShow.hs_intToDigit, hs_sat26CONw);
                        };
                        var hs_dszq26COdo = new $hs.Thunk();
                        hs_dszq26COdo.evaluateOnce = function () {
                            var hs_wild426CONv = hs_ds326COdi;
                            if (hs_ds326COdi.notEvaluated) {
                                hs_wild426CONv = hs_ds326COdi.hscall();
                            }
                            switch (hs_wild426CONv.tag) {
                            case 1:
                                if (hs_ds226COcY.notEvaluated) {
                                    return hs_ds226COcY.hscall();
                                } else {
                                    return hs_ds226COcY;
                                }
                            case 2:
                                var hs_dszq126COdn = hs_wild426CONv.data[1];
                                if (hs_dszq126COdn.notEvaluated) {
                                    return hs_dszq126COdn.hscall();
                                } else {
                                    return hs_dszq126COdn;
                                }
                            }
                        };
                        var hs_sat26CONp = new $hs.Thunk();
                        hs_sat26CONp.evaluateOnce = function () {
                            var hs_wild426CONs = $hs.modules.GHCziList.hs_null.hscall(hs_dszq26COdo);
                            switch (hs_wild426CONs.tag) {
                            case 1:
                                var hs_sat26CONt = new $hs.Data(1);
                                hs_sat26CONt.data = ["."];
                                var $res = new $hs.Data(2);
                                $res.data = [hs_sat26CONt, hs_dszq26COdo];
                                return $res;
                            case 2:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            }
                        };
                        var hs_sat26CONo = new $hs.Thunk();
                        hs_sat26CONo.evaluateOnce = function () {
                            var hs_wild426CONr = hs_ds326COdi;
                            if (hs_ds326COdi.notEvaluated) {
                                hs_wild426CONr = hs_ds326COdi.hscall();
                            }
                            switch (hs_wild426CONr.tag) {
                            case 1:
                                if (hs_ds226COcY.notEvaluated) {
                                    return hs_ds226COcY.hscall();
                                } else {
                                    return hs_ds226COcY;
                                }
                            case 2:
                                var hs_d26COds = hs_wild426CONr.data[0];
                                if (hs_d26COds.notEvaluated) {
                                    return hs_d26COds.hscall();
                                } else {
                                    return hs_d26COds;
                                }
                            }
                        };
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26CONo, hs_sat26CONp];
                        return $res;
                    case 2:
                        var hs_ds126COdB = new $hs.Thunk();
                        hs_ds126COdB.evaluateOnce = function () {
                            var hs_sat26CONl = new $hs.Thunk();
                            hs_sat26CONl.evaluateOnce = function () {
                                var hs_sat26CONm = new $hs.Thunk();
                                hs_sat26CONm.evaluateOnce = function () {
                                    var hs_sat26CONn = new $hs.Data(1);
                                    hs_sat26CONn.data = [0];
                                    return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_dec26COcP, hs_sat26CONn);
                                };
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26CONm, hs_e26COac);
                            };
                            return $hs.modules.GHCziFloat.hs_roundTo.hscall(hs_base26CO9Z, hs_sat26CONl, hs_is26COag);
                        };
                        var hs_ds226COdP = new $hs.Thunk();
                        hs_ds226COdP.evaluateOnce = function () {
                            var hs_sat26CONe = new $hs.Thunk();
                            hs_sat26CONe.evaluateOnce = function () {
                                var hs_sat26CONi = new $hs.Thunk();
                                hs_sat26CONi.evaluateOnce = function () {
                                    var hs_wild426CONk = hs_ds126COdB;
                                    if (hs_ds126COdB.notEvaluated) {
                                        hs_wild426CONk = hs_ds126COdB.hscall();
                                    }
                                    var hs_iszq26COdM = hs_wild426CONk.data[1];
                                    if (hs_iszq26COdM.notEvaluated) {
                                        return hs_iszq26COdM.hscall();
                                    } else {
                                        return hs_iszq26COdM;
                                    }
                                };
                                return $hs.modules.GHCziBase.hs_map.hscall($hs.modules.GHCziShow.hs_intToDigit, hs_sat26CONi);
                            };
                            var hs_sat26CONd = new $hs.Thunk();
                            hs_sat26CONd.evaluateOnce = function () {
                                var hs_sat26CONf = new $hs.Thunk();
                                hs_sat26CONf.evaluateOnce = function () {
                                    var hs_wild426CONh = hs_ds126COdB;
                                    if (hs_ds126COdB.notEvaluated) {
                                        hs_wild426CONh = hs_ds126COdB.hscall();
                                    }
                                    var hs_ei26COdG = hs_wild426CONh.data[0];
                                    if (hs_ei26COdG.notEvaluated) {
                                        return hs_ei26COdG.hscall();
                                    } else {
                                        return hs_ei26COdG;
                                    }
                                };
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_e26COac, hs_sat26CONf);
                            };
                            return $hs.modules.GHCziList.hs_splitAt.hscall(hs_sat26CONd, hs_sat26CONe);
                        };
                        var hs_rs26COdV = new $hs.Thunk();
                        hs_rs26COdV.evaluateOnce = function () {
                            var hs_wild426CONc = hs_ds226COdP;
                            if (hs_ds226COdP.notEvaluated) {
                                hs_wild426CONc = hs_ds226COdP.hscall();
                            }
                            var hs_rs126COdU = hs_wild426CONc.data[1];
                            if (hs_rs126COdU.notEvaluated) {
                                return hs_rs126COdU.hscall();
                            } else {
                                return hs_rs126COdU;
                            }
                        };
                        var hs_sat26CON3 = new $hs.Thunk();
                        hs_sat26CON3.evaluateOnce = function () {
                            var hs_wild426CON9 = $hs.modules.GHCziList.hs_null.hscall(hs_rs26COdV);
                            switch (hs_wild426CON9.tag) {
                            case 1:
                                var hs_sat26CONa = new $hs.Data(1);
                                hs_sat26CONa.data = ["."];
                                var $res = new $hs.Data(2);
                                $res.data = [hs_sat26CONa, hs_rs26COdV];
                                return $res;
                            case 2:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            }
                        };
                        var hs_sat26COMX = new $hs.Thunk();
                        hs_sat26COMX.evaluateOnce = function () {
                            var hs_wild426CON6 = hs_ds226COdP;
                            if (hs_ds226COdP.notEvaluated) {
                                hs_wild426CON6 = hs_ds226COdP.hscall();
                            }
                            var hs_ls26COdZ = hs_wild426CON6.data[0];
                            var hs_wild526COe4 = hs_ls26COdZ;
                            if (hs_ls26COdZ.notEvaluated) {
                                hs_wild526COe4 = hs_ls26COdZ.hscall();
                            }
                            switch (hs_wild526COe4.tag) {
                            case 1:
                                var hs_sat26CON8 = new $hs.Data(1);
                                hs_sat26CON8.data = ["0"];
                                var $res = new $hs.Data(2);
                                $res.data = [hs_sat26CON8, $hs.modules.GHCziTypes.hs_ZMZN];
                                return $res;
                            case 2:
                                if (hs_wild526COe4.notEvaluated) {
                                    return hs_wild526COe4.hscall();
                                } else {
                                    return hs_wild526COe4;
                                }
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26COMX, hs_sat26CON3);
                    }
                }
            case 3:
                var hs_sat26COOl = new $hs.Data(1);
                hs_sat26COOl.data = [hs_is26COag, hs_e26COac];
                var hs_sat26COOk = new $hs.Thunk();
                hs_sat26COOk.evaluateOnce = function () {
                    var hs_sat26COOm = new $hs.Thunk();
                    hs_sat26COOm.evaluateOnce = function () {
                        var hs_sat26COOq = new $hs.Data(1);
                        hs_sat26COOq.data = [7];
                        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_e26COac, hs_sat26COOq);
                    };
                    var hs_sat26COOn = new $hs.Thunk();
                    hs_sat26COOn.evaluateOnce = function () {
                        var hs_sat26COOp = new $hs.Data(1);
                        hs_sat26COOp.data = [0];
                        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_e26COac, hs_sat26COOp);
                    };
                    var hs_wild226COOo = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26COOn, hs_sat26COOm);
                    switch (hs_wild226COOo.tag) {
                    case 1:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    case 2:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                };
                return hs_doFmt26COee.hscall(hs_sat26COOk, hs_sat26COOl);
            }
        };
        var hs_wild26COMA = $hs.modules.GHCziFloat.hs_isNaN.hscall(hs_zddRealFloat26CO9S, hs_eta226COeh);
        switch (hs_wild26COMA.tag) {
        case 1:
            var hs_wild126COMB = $hs.modules.GHCziFloat.hs_isInfinite.hscall(hs_zddRealFloat26CO9S, hs_eta226COeh);
            switch (hs_wild126COMB.tag) {
            case 1:
                var hs_sat26COMJ = new $hs.Thunk();
                hs_sat26COMJ.evaluateOnce = function () {
                    return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall(hs_zddRealFloat26CO9S, hs_eta226COeh);
                };
                var hs_sat26COMK = new $hs.Thunk();
                hs_sat26COMK.evaluateOnce = function () {
                    var hs_sat26COMS = new $hs.Thunk();
                    hs_sat26COMS.evaluateOnce = function () {
                        var hs_sat26COMW = new $hs.Thunk();
                        hs_sat26COMW.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CO9X, hs_sat26COMW);
                    };
                    var hs_sat26COMT = $hs.modules.GHCziFloat.hs_zdp1RealFloat.hscall(hs_zddRealFloat26CO9S);
                    var hs_sat26COMU = $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_sat26COMT);
                    var hs_sat26COMV = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_sat26COMU);
                    return $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26COMV, hs_eta226COeh, hs_sat26COMS);
                };
                var hs_wild226COML = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26COMK, hs_sat26COMJ);
                switch (hs_wild226COML.tag) {
                case 1:
                    var hs_sat26COMQ = new $hs.Thunk();
                    hs_sat26COMQ.evaluateOnce = function () {
                        var hs_sat26COMR = new $hs.Thunk();
                        hs_sat26COMR.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_base26CO9Z);
                        };
                        return $hs.modules.GHCziFloat.hs_floatToDigits.hscall(hs_zddRealFloat26CO9S, hs_sat26COMR, hs_eta226COeh);
                    };
                    return hs_doFmt26COee.hscall(hs_eta26COes, hs_sat26COMQ);
                case 2:
                    var hs_sat26COMM = new $hs.Thunk();
                    hs_sat26COMM.evaluateOnce = function () {
                        var hs_sat26COMN = new $hs.Thunk();
                        hs_sat26COMN.evaluateOnce = function () {
                            var hs_sat26COMP = new $hs.Thunk();
                            hs_sat26COMP.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum326CO9X, hs_eta226COeh);
                            };
                            var hs_sat26COMO = new $hs.Thunk();
                            hs_sat26COMO.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_base26CO9Z);
                            };
                            return $hs.modules.GHCziFloat.hs_floatToDigits.hscall(hs_zddRealFloat26CO9S, hs_sat26COMO, hs_sat26COMP);
                        };
                        return hs_doFmt26COee.hscall(hs_eta26COes, hs_sat26COMN);
                    };
                    var hs_sat26COMI = new $hs.Data(1);
                    hs_sat26COMI.data = ["-"];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26COMI, hs_sat26COMM];
                    return $res;
                }
            case 2:
                var hs_sat26COMC = new $hs.Thunk();
                hs_sat26COMC.evaluateOnce = function () {
                    var hs_sat26COMH = new $hs.Thunk();
                    hs_sat26COMH.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326CO9X, hs_sat26COMH);
                };
                var hs_sat26COMD = $hs.modules.GHCziFloat.hs_zdp1RealFloat.hscall(hs_zddRealFloat26CO9S);
                var hs_sat26COME = $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_sat26COMD);
                var hs_sat26COMF = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_sat26COME);
                var hs_wild226COMG = $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26COMF, hs_eta226COeh, hs_sat26COMC);
                switch (hs_wild226COMG.tag) {
                case 1:
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Infinity\x00");
                case 2:
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("-Infinity\x00");
                }
            }
        case 2:
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("NaN\x00");
        }
    };
    hs_fromRatzqzq125upqB.evaluate = function (hs_minEx26COeK, hs_mantDigs26COeN, hs_n26COeY, hs_d26COeQ) {
        var hs_wild26COeX = hs_minEx26COeK;
        if (hs_minEx26COeK.notEvaluated) {
            hs_wild26COeX = hs_minEx26COeK.hscall();
        }
        var hs_mezh26COgm = hs_wild26COeX.data[0];
        var hs_wild126COf7 = hs_mantDigs26COeN;
        if (hs_mantDigs26COeN.notEvaluated) {
            hs_wild126COf7 = hs_mantDigs26COeN.hscall();
        }
        var hs_mdzh26COgq = hs_wild126COf7.data[0];
        var hs_wild226COSg = $hs.modules.GHCziIntegerziLogarithmsziInternals.hs_integerLog2IsPowerOf2zh.hscall(hs_d26COeQ);
        var hs_ldzh26COf2 = hs_wild226COSg[0];
        var hs_pwzh26COeU = hs_wild226COSg[1];
        var hs_wild326COSf = hs_pwzh26COeU;
        if (hs_pwzh26COeU.notEvaluated) {
            hs_wild326COSf = hs_pwzh26COeU.hscall();
        }
        switch (hs_wild326COSf) {
        case 0:
            var hs_lnzh26COgl = $hs.modules.GHCziIntegerziLogarithmsziInternals.hs_integerLog2zh.hscall(hs_n26COeY);
            var hs_sat26COSh = ($hs.Int.addCarry(hs_ldzh26COf2, hs_mezh26COgm, 0))[0];
            var hs_wild426COSi = hs_lnzh26COgl > hs_sat26COSh ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild426COSi.tag) {
            case 1:
                var hs_sat26COSC = ($hs.Int.addCarry(hs_mezh26COgm, ~hs_mdzh26COgq, 1))[0];
                var hs_ldzqzh26COgs = ($hs.Int.addCarry(hs_ldzh26COf2, hs_sat26COSC, 0))[0];
                var hs_sat26COSD = ($hs.Int.addCarry(hs_lnzh26COgl, 1, 0))[0];
                var hs_wild526COSE = hs_ldzqzh26COgs > hs_sat26COSD ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild526COSE.tag) {
                case 1:
                    var hs_sat26COSI = ($hs.Int.addCarry(hs_lnzh26COgl, 1, 0))[0];
                    var hs_wild626COSJ = hs_ldzqzh26COgs == hs_sat26COSI ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild626COSJ.tag) {
                    case 1:
                        var hs_wild726COSQ = hs_ldzqzh26COgs <= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                        switch (hs_wild726COSQ.tag) {
                        case 1:
                            var hs_nzq26COgA = new $hs.Thunk();
                            hs_nzq26COgA.evaluateOnce = function () {
                                var hs_sat26COT7 = new $hs.Data(1);
                                hs_sat26COT7.data = [hs_ldzqzh26COgs];
                                return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_n26COeY, hs_sat26COT7);
                            };
                            var hs_sat26COSU = ($hs.Int.addCarry(hs_ldzqzh26COgs, ~1, 1))[0];
                            var hs_ds26COgD = $hs.modules.GHCziIntegerziLogarithmsziInternals.hs_roundingModezh.hscall(hs_n26COeY, hs_sat26COSU);
                            var hs_ds126COST = hs_ds26COgD;
                            if (hs_ds26COgD.notEvaluated) {
                                hs_ds126COST = hs_ds26COgD.hscall();
                            }
                            switch (hs_ds126COST) {
                            case 0:
                                var hs_sat26COSS = new $hs.Thunk();
                                hs_sat26COSS.evaluateOnce = function () {
                                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild26COeX, hs_wild126COf7);
                                };
                                return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_nzq26COgA, hs_sat26COSS);
                            case 1:
                                var hs_sat26COSW = new $hs.Data(1);
                                hs_sat26COSW.data = [0];
                                var hs_sat26COSX = new $hs.Thunk();
                                hs_sat26COSX.evaluateOnce = function () {
                                    var hs_sat26COT3 = new $hs.Data(1);
                                    hs_sat26COT3.data = [1];
                                    var hs_sat26COT2 = new $hs.Thunk();
                                    hs_sat26COT2.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_nzq26COgA);
                                    };
                                    return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26COT2, hs_sat26COT3);
                                };
                                var hs_wild826COSY = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26COSX, hs_sat26COSW);
                                switch (hs_wild826COSY.tag) {
                                case 1:
                                    var hs_sat26COT0 = new $hs.Thunk();
                                    hs_sat26COT0.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild26COeX, hs_wild126COf7);
                                    };
                                    var hs_sat26COSZ = new $hs.Thunk();
                                    hs_sat26COSZ.evaluateOnce = function () {
                                        var hs_sat26COT1 = new $hs.Thunk();
                                        hs_sat26COT1.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                        };
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_nzq26COgA, hs_sat26COT1);
                                    };
                                    return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_sat26COSZ, hs_sat26COT0);
                                case 2:
                                    var hs_sat26COSV = new $hs.Thunk();
                                    hs_sat26COSV.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild26COeX, hs_wild126COf7);
                                    };
                                    return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_nzq26COgA, hs_sat26COSV);
                                }
                            default:
                                var hs_sat26COT5 = new $hs.Thunk();
                                hs_sat26COT5.evaluateOnce = function () {
                                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild26COeX, hs_wild126COf7);
                                };
                                var hs_sat26COT4 = new $hs.Thunk();
                                hs_sat26COT4.evaluateOnce = function () {
                                    var hs_sat26COT6 = new $hs.Thunk();
                                    hs_sat26COT6.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                    };
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_nzq26COgA, hs_sat26COT6);
                                };
                                return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_sat26COT4, hs_sat26COT5);
                            }
                        case 2:
                            var hs_sat26COgU = ($hs.Int.addCarry(hs_mezh26COgm, ~hs_mdzh26COgq, 1))[0];
                            var hs_sat26COSR = ($hs.Int.addCarry(hs_sat26COgU, ~hs_ldzqzh26COgs, 1))[0];
                            var hs_sat26COSP = new $hs.Data(1);
                            hs_sat26COSP.data = [hs_sat26COSR];
                            return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_n26COeY, hs_sat26COSP);
                        }
                    case 2:
                        var hs_wild726COSK = $hs.modules.GHCziIntegerziLogarithmsziInternals.hs_integerLog2IsPowerOf2zh.hscall(hs_n26COeY);
                        var hs_ds126COgZ = hs_wild726COSK[1];
                        var hs_ds226COSH = hs_ds126COgZ;
                        if (hs_ds126COgZ.notEvaluated) {
                            hs_ds226COSH = hs_ds126COgZ.hscall();
                        }
                        switch (hs_ds226COSH) {
                        case 0:
                            var hs_sat26COSM = new $hs.Data(1);
                            hs_sat26COSM.data = [0];
                            var hs_sat26COSG = new $hs.Thunk();
                            hs_sat26COSG.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                            };
                            return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_sat26COSG, hs_sat26COSM);
                        default:
                            var hs_sat26COSO = new $hs.Thunk();
                            hs_sat26COSO.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild26COeX, hs_wild126COf7);
                            };
                            var hs_sat26COSN = new $hs.Thunk();
                            hs_sat26COSN.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_sat26COSN, hs_sat26COSO);
                        }
                    }
                case 2:
                    var hs_sat26COSF = new $hs.Data(1);
                    hs_sat26COSF.data = [0];
                    var hs_sat26COSB = new $hs.Thunk();
                    hs_sat26COSB.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_sat26COSB, hs_sat26COSF);
                }
            case 2:
                var hs_wild526COSj = hs_lnzh26COgl < hs_mdzh26COgq ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild526COSj.tag) {
                case 1:
                    var hs_nzq26COhd = new $hs.Thunk();
                    hs_nzq26COhd.evaluateOnce = function () {
                        var hs_sat26COhb = ($hs.Int.addCarry(hs_lnzh26COgl, 1, 0))[0];
                        var hs_sat26COSA = ($hs.Int.addCarry(hs_sat26COhb, ~hs_mdzh26COgq, 1))[0];
                        var hs_sat26COSz = new $hs.Data(1);
                        hs_sat26COSz.data = [hs_sat26COSA];
                        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_n26COeY, hs_sat26COSz);
                    };
                    var hs_sat26COhu = ($hs.Int.addCarry(hs_lnzh26COgl, ~hs_ldzh26COf2, 1))[0];
                    var hs_sat26COhv = ($hs.Int.addCarry(hs_sat26COhu, 1, 0))[0];
                    var hs_sat26COSp = ($hs.Int.addCarry(hs_sat26COhv, ~hs_mdzh26COgq, 1))[0];
                    var hs_sat26COSq = new $hs.Data(1);
                    hs_sat26COSq.data = [hs_sat26COSp];
                    var hs_sat26COSo = new $hs.Thunk();
                    hs_sat26COSo.evaluateOnce = function () {
                        var hs_sat26COSs = ($hs.Int.addCarry(hs_lnzh26COgl, ~hs_mdzh26COgq, 1))[0];
                        var hs_ds26COhg = $hs.modules.GHCziIntegerziLogarithmsziInternals.hs_roundingModezh.hscall(hs_n26COeY, hs_sat26COSs);
                        var hs_ds126COSr = hs_ds26COhg;
                        if (hs_ds26COhg.notEvaluated) {
                            hs_ds126COSr = hs_ds26COhg.hscall();
                        }
                        switch (hs_ds126COSr) {
                        case 0:
                            if (hs_nzq26COhd.notEvaluated) {
                                return hs_nzq26COhd.hscall();
                            } else {
                                return hs_nzq26COhd;
                            }
                        case 2:
                            var hs_sat26COSt = new $hs.Thunk();
                            hs_sat26COSt.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_nzq26COhd, hs_sat26COSt);
                        default:
                            var hs_sat26COSv = new $hs.Data(1);
                            hs_sat26COSv.data = [1];
                            var hs_sat26COSw = new $hs.Thunk();
                            hs_sat26COSw.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_nzq26COhd);
                            };
                            var hs_wild626COSx = $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26COSw, hs_sat26COSv);
                            var hs_ds226COhm = hs_wild626COSx.data[0];
                            var hs_ds326COSu = hs_ds226COhm;
                            if (hs_ds226COhm.notEvaluated) {
                                hs_ds326COSu = hs_ds226COhm.hscall();
                            }
                            switch (hs_ds326COSu) {
                            case 0:
                                if (hs_nzq26COhd.notEvaluated) {
                                    return hs_nzq26COhd.hscall();
                                } else {
                                    return hs_nzq26COhd;
                                }
                            default:
                                var hs_sat26COSy = new $hs.Thunk();
                                hs_sat26COSy.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                };
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_nzq26COhd, hs_sat26COSy);
                            }
                        }
                    };
                    return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_sat26COSo, hs_sat26COSq);
                case 2:
                    var hs_sat26COhF = ($hs.Int.addCarry(hs_lnzh26COgl, 1, 0))[0];
                    var hs_sat26COhG = ($hs.Int.addCarry(hs_sat26COhF, ~hs_ldzh26COf2, 1))[0];
                    var hs_sat26COSk = ($hs.Int.addCarry(hs_sat26COhG, ~hs_mdzh26COgq, 1))[0];
                    var hs_sat26COSl = new $hs.Data(1);
                    hs_sat26COSl.data = [hs_sat26COSk];
                    var hs_sat26COSe = new $hs.Thunk();
                    hs_sat26COSe.evaluateOnce = function () {
                        var hs_sat26COhz = ($hs.Int.addCarry(hs_mdzh26COgq, ~1, 1))[0];
                        var hs_sat26COSn = ($hs.Int.addCarry(hs_sat26COhz, ~hs_lnzh26COgl, 1))[0];
                        var hs_sat26COSm = new $hs.Data(1);
                        hs_sat26COSm.data = [hs_sat26COSn];
                        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_n26COeY, hs_sat26COSm);
                    };
                    return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_sat26COSe, hs_sat26COSl);
                }
            }
        default:
            var hs_p026COf5 = new $hs.Thunk();
            hs_p026COf5.evaluateOnce = function () {
                var hs_sat26COTV = new $hs.Thunk();
                hs_sat26COTV.evaluateOnce = function () {
                    var hs_sat26COTX = new $hs.Data(1);
                    hs_sat26COTX.data = [hs_ldzh26COf2];
                    var hs_sat26COTW = new $hs.Thunk();
                    hs_sat26COTW.evaluateOnce = function () {
                        var hs_wild426COf0 = $hs.modules.GHCziIntegerziLogarithmsziInternals.hs_integerLog2zh.hscall(hs_n26COeY);
                        var $res = new $hs.Data(1);
                        $res.data = [hs_wild426COf0];
                        return $res;
                    };
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COTW, hs_sat26COTX);
                };
                return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_wild26COeX, hs_sat26COTV);
            };
            var hs_ds26COfe = new $hs.Thunk();
            hs_ds26COfe.evaluateOnce = function () {
                var hs_wild426COTQ = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_p026COf5, hs_wild126COf7);
                switch (hs_wild426COTQ.tag) {
                case 1:
                    var hs_wild526COTS = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_p026COf5, hs_wild126COf7);
                    switch (hs_wild526COTS.tag) {
                    case 1:
                        var hs_sat26COTT = new $hs.Thunk();
                        hs_sat26COTT.evaluateOnce = function () {
                            var hs_sat26COTU = new $hs.Thunk();
                            hs_sat26COTU.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p026COf5, hs_wild126COf7);
                            };
                            return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_d26COeQ, hs_sat26COTU);
                        };
                        var $res = new $hs.Data(1);
                        $res.data = [hs_n26COeY, hs_sat26COTT];
                        return $res;
                    case 2:
                        var $res = new $hs.Data(1);
                        $res.data = [hs_n26COeY, hs_d26COeQ];
                        return $res;
                    }
                case 2:
                    var hs_sat26COTP = new $hs.Thunk();
                    hs_sat26COTP.evaluateOnce = function () {
                        var hs_sat26COTR = new $hs.Thunk();
                        hs_sat26COTR.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild126COf7, hs_p026COf5);
                        };
                        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_n26COeY, hs_sat26COTR);
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26COTP, hs_d26COeQ];
                    return $res;
                }
            };
            var hs_ds126COfK = new $hs.Thunk();
            hs_ds126COfK.evaluateOnce = function () {
                var hs_p26COfh = new $hs.Thunk();
                hs_p26COfh.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p026COf5, hs_wild126COf7);
                };
                var hs_a26COfn = new $hs.Thunk();
                hs_a26COfn.evaluateOnce = function () {
                    var hs_wild426COTO = hs_ds26COfe;
                    if (hs_ds26COfe.notEvaluated) {
                        hs_wild426COTO = hs_ds26COfe.hscall();
                    }
                    var hs_nzq26COfm = hs_wild426COTO.data[0];
                    if (hs_nzq26COfm.notEvaluated) {
                        return hs_nzq26COfm.hscall();
                    } else {
                        return hs_nzq26COfm;
                    }
                };
                var hs_b26COft = new $hs.Thunk();
                hs_b26COft.evaluateOnce = function () {
                    var hs_wild426COTM = hs_ds26COfe;
                    if (hs_ds26COfe.notEvaluated) {
                        hs_wild426COTM = hs_ds26COfe.hscall();
                    }
                    var hs_dzq26COfs = hs_wild426COTM.data[1];
                    if (hs_dzq26COfs.notEvaluated) {
                        return hs_dzq26COfs.hscall();
                    } else {
                        return hs_dzq26COfs;
                    }
                };
                var hs_sat26COTv = new $hs.Thunk();
                hs_sat26COTv.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild26COeX, hs_wild126COf7);
                };
                var hs_wild426COTw = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_p26COfh, hs_sat26COTv);
                switch (hs_wild426COTw.tag) {
                case 1:
                    var hs_sat26COTy = new $hs.Thunk();
                    hs_sat26COTy.evaluateOnce = function () {
                        var hs_sat26COTJ = new $hs.Thunk();
                        hs_sat26COTJ.evaluateOnce = function () {
                            var hs_sat26COTK = new $hs.Data(1);
                            hs_sat26COTK.data = [1];
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild126COf7, hs_sat26COTK);
                        };
                        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_b26COft, hs_sat26COTJ);
                    };
                    var hs_wild526COTz = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_a26COfn, hs_sat26COTy);
                    switch (hs_wild526COTz.tag) {
                    case 1:
                        var hs_sat26COTE = new $hs.Thunk();
                        hs_sat26COTE.evaluateOnce = function () {
                            return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_b26COft, hs_wild126COf7);
                        };
                        var hs_wild626COTF = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_sat26COTE, hs_a26COfn);
                        switch (hs_wild626COTF.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [hs_p26COfh, hs_a26COfn, hs_b26COft];
                            return $res;
                        case 2:
                            var hs_sat26COTG = new $hs.Thunk();
                            hs_sat26COTG.evaluateOnce = function () {
                                var hs_sat26COTI = new $hs.Data(1);
                                hs_sat26COTI.data = [1];
                                return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_b26COft, hs_sat26COTI);
                            };
                            var hs_sat26COTD = new $hs.Thunk();
                            hs_sat26COTD.evaluateOnce = function () {
                                var hs_sat26COTH = new $hs.Data(1);
                                hs_sat26COTH.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p26COfh, hs_sat26COTH);
                            };
                            var $res = new $hs.Data(1);
                            $res.data = [hs_sat26COTD, hs_a26COfn, hs_sat26COTG];
                            return $res;
                        }
                    case 2:
                        var hs_sat26COTA = new $hs.Thunk();
                        hs_sat26COTA.evaluateOnce = function () {
                            var hs_sat26COTC = new $hs.Data(1);
                            hs_sat26COTC.data = [1];
                            return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_a26COfn, hs_sat26COTC);
                        };
                        var hs_sat26COTx = new $hs.Thunk();
                        hs_sat26COTx.evaluateOnce = function () {
                            var hs_sat26COTB = new $hs.Data(1);
                            hs_sat26COTB.data = [1];
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p26COfh, hs_sat26COTB);
                        };
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26COTx, hs_sat26COTA, hs_b26COft];
                        return $res;
                    }
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [hs_p26COfh, hs_a26COfn, hs_b26COft];
                    return $res;
                }
            };
            var hs_dzqzq26COfR = new $hs.Thunk();
            hs_dzqzq26COfR.evaluateOnce = function () {
                var hs_wild426COTu = hs_ds126COfK;
                if (hs_ds126COfK.notEvaluated) {
                    hs_wild426COTu = hs_ds126COfK.hscall();
                }
                var hs_dzqzq126COfQ = hs_wild426COTu.data[2];
                if (hs_dzqzq126COfQ.notEvaluated) {
                    return hs_dzqzq126COfQ.hscall();
                } else {
                    return hs_dzqzq126COfQ;
                }
            };
            var hs_sat26COT9 = new $hs.Thunk();
            hs_sat26COT9.evaluateOnce = function () {
                var hs_wild426COTr = hs_ds126COfK;
                if (hs_ds126COfK.notEvaluated) {
                    hs_wild426COTr = hs_ds126COfK.hscall();
                }
                var hs_pzq26COgi = hs_wild426COTr.data[0];
                if (hs_pzq26COgi.notEvaluated) {
                    return hs_pzq26COgi.hscall();
                } else {
                    return hs_pzq26COgi;
                }
            };
            var hs_sat26COT8 = new $hs.Thunk();
            hs_sat26COT8.evaluateOnce = function () {
                var hs_sat26COTa = new $hs.Thunk();
                hs_sat26COTa.evaluateOnce = function () {
                    var hs_wild426COTo = hs_ds126COfK;
                    if (hs_ds126COfK.notEvaluated) {
                        hs_wild426COTo = hs_ds126COfK.hscall();
                    }
                    var hs_nzqzq26COfW = hs_wild426COTo.data[1];
                    if (hs_nzqzq26COfW.notEvaluated) {
                        return hs_nzqzq26COfW.hscall();
                    } else {
                        return hs_nzqzq26COfW;
                    }
                };
                var hs_wild426COTb = $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26COTa, hs_dzqzq26COfR);
                var hs_q26COg5 = hs_wild426COTb.data[0];
                var hs_r26COg1 = hs_wild426COTb.data[1];
                var hs_sat26COTc = new $hs.Thunk();
                hs_sat26COTc.evaluateOnce = function () {
                    var hs_sat26COTl = new $hs.Data(1);
                    hs_sat26COTl.data = [1];
                    return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_r26COg1, hs_sat26COTl);
                };
                var hs_wild526COTd = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_sat26COTc, hs_dzqzq26COfR);
                switch (hs_wild526COTd.tag) {
                case 1:
                    if (hs_q26COg5.notEvaluated) {
                        return hs_q26COg5.hscall();
                    } else {
                        return hs_q26COg5;
                    }
                case 2:
                    var hs_sat26COTe = new $hs.Data(1);
                    hs_sat26COTe.data = [0];
                    var hs_sat26COTf = new $hs.Thunk();
                    hs_sat26COTf.evaluateOnce = function () {
                        var hs_sat26COTj = new $hs.Data(1);
                        hs_sat26COTj.data = [1];
                        var hs_sat26COTi = new $hs.Thunk();
                        hs_sat26COTi.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_q26COg5);
                        };
                        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26COTi, hs_sat26COTj);
                    };
                    var hs_wild626COTg = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26COTf, hs_sat26COTe);
                    switch (hs_wild626COTg.tag) {
                    case 1:
                        var hs_sat26COTh = new $hs.Thunk();
                        hs_sat26COTh.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_q26COg5, hs_sat26COTh);
                    case 2:
                        if (hs_q26COg5.notEvaluated) {
                            return hs_q26COg5.hscall();
                        } else {
                            return hs_q26COg5;
                        }
                    }
                case 3:
                    var hs_sat26COTk = new $hs.Thunk();
                    hs_sat26COTk.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_q26COg5, hs_sat26COTk);
                }
            };
            return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_sat26COT8, hs_sat26COT9);
        }
    };
    this.hs_zdfShowDouble.data = [hs_zdcshowsPrec125upqV, hs_zdcshow125upqD, hs_zdcshowList125upqC];
    hs_zdcshowList125upqC.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26COHP);
    };
    hs_zdcshow125upqD.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziFloat.hs_zdfShowDouble);
    };
    this.hs_zdfNumDouble.data = [$hs.modules.GHCziClasses.hs_zdfEqDouble, $hs.modules.GHCziFloat.hs_zdfShowDouble, hs_zdczp125upiN, hs_zdczt125upiI, hs_zdczm125upiD, hs_zdcnegate125upiA, hs_zdcabs125upiv, hs_zdcsignum125upqE, hs_zdcfromInteger125upiq];
    hs_zdcsignum125upqE.evaluate = function (hs_x26COhL) {
        var hs_sat26COU0 = new $hs.Data(1);
        hs_sat26COU0.data = [0 % 1];
        var hs_wild26COU1 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqDouble, hs_x26COhL, hs_sat26COU0);
        switch (hs_wild26COU1.tag) {
        case 1:
            var hs_sat26COU2 = new $hs.Data(1);
            hs_sat26COU2.data = [0 % 1];
            var hs_wild126COU3 = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_x26COhL, hs_sat26COU2);
            switch (hs_wild126COU3.tag) {
            case 1:
                var hs_sat26COU4 = new $hs.Data(1);
                hs_sat26COU4.data = [1 % 1];
                return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26COU4);
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [1 % 1];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [0 % 1];
            return $res;
        }
    };
    this.hs_zdfFractionalDouble.data = [$hs.modules.GHCziFloat.hs_zdfNumDouble, hs_zdczs125upju, hs_zdcrecip125upqF, hs_zdcfromRational125upr5];
    hs_zdcrecip125upqF.evaluate = function (hs_x26COhT) {
        var hs_sat26COUx = new $hs.Data(1);
        hs_sat26COUx.data = [1 % 1];
        return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_sat26COUx, hs_x26COhT);
    };
    hs_zdczdp2RealFrac125upqG.evaluateOnce = function () {
        if ($hs.modules.GHCziFloat.hs_zdfFractionalDouble.notEvaluated) {
            return $hs.modules.GHCziFloat.hs_zdfFractionalDouble.hscall();
        } else {
            return $hs.modules.GHCziFloat.hs_zdfFractionalDouble;
        }
    };
    hs_zdczdp1Floating125upqH.evaluateOnce = function () {
        if ($hs.modules.GHCziFloat.hs_zdfFractionalDouble.notEvaluated) {
            return $hs.modules.GHCziFloat.hs_zdfFractionalDouble.hscall();
        } else {
            return $hs.modules.GHCziFloat.hs_zdfFractionalDouble;
        }
    };
    this.hs_zdfFloatingDouble.data = [$hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_zdcpi125upke, hs_zdcexp125upkb, hs_zdcsqrt125upk8, hs_zdclog125upk5, hs_zdcztzt125upk0, hs_zdclogBase125upqK, hs_zdcsin125upjX, hs_zdctan125upjU, hs_zdccos125upjR, hs_zdcasin125upjO, hs_zdcatan125upjL, hs_zdcacos125upjI, hs_zdcsinh125upjF, hs_zdctanh125upjC, hs_zdccosh125upjz, hs_zdcasinh125upqJ, hs_zdcatanh125upqI, hs_zdcacosh125upqL];
    hs_zdcatanh125upqI.evaluate = function (hs_x26COhX) {
        var hs_sat26COUJ = new $hs.Thunk();
        hs_sat26COUJ.evaluateOnce = function () {
            var hs_sat26COUK = new $hs.Thunk();
            hs_sat26COUK.evaluateOnce = function () {
                var hs_sat26COUM = new $hs.Thunk();
                hs_sat26COUM.evaluateOnce = function () {
                    var hs_sat26COUO = new $hs.Data(1);
                    hs_sat26COUO.data = [1 % 1];
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26COUO, hs_x26COhX);
                };
                var hs_sat26COUL = new $hs.Thunk();
                hs_sat26COUL.evaluateOnce = function () {
                    var hs_sat26COUN = new $hs.Data(1);
                    hs_sat26COUN.data = [1 % 1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26COUN, hs_x26COhX);
                };
                return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_sat26COUL, hs_sat26COUM);
            };
            return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble, hs_sat26COUK);
        };
        var hs_sat26COUI = new $hs.Data(1);
        hs_sat26COUI.data = [1 % 2];
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26COUI, hs_sat26COUJ);
    };
    hs_zdcasinh125upqJ.evaluate = function (hs_x26COi4) {
        var hs_sat26COUP = new $hs.Thunk();
        hs_sat26COUP.evaluateOnce = function () {
            var hs_sat26COUQ = new $hs.Thunk();
            hs_sat26COUQ.evaluateOnce = function () {
                var hs_sat26COUR = new $hs.Thunk();
                hs_sat26COUR.evaluateOnce = function () {
                    var hs_sat26COUT = new $hs.Thunk();
                    hs_sat26COUT.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_x26COi4, hs_x26COi4);
                    };
                    var hs_sat26COUS = new $hs.Data(1);
                    hs_sat26COUS.data = [1 % 1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26COUS, hs_sat26COUT);
                };
                return $hs.modules.GHCziFloat.hs_sqrt.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble, hs_sat26COUR);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_x26COi4, hs_sat26COUQ);
        };
        return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble, hs_sat26COUP);
    };
    hs_zdclogBase125upqK.evaluate = function (hs_x26COie, hs_y26COic) {
        var hs_sat26COUV = new $hs.Thunk();
        hs_sat26COUV.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble, hs_x26COie);
        };
        var hs_sat26COUU = new $hs.Thunk();
        hs_sat26COUU.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble, hs_y26COic);
        };
        return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_sat26COUU, hs_sat26COUV);
    };
    hs_zdcacosh125upqL.evaluate = function (hs_x26COih) {
        var hs_sat26COUy = new $hs.Thunk();
        hs_sat26COUy.evaluateOnce = function () {
            var hs_sat26COUz = new $hs.Thunk();
            hs_sat26COUz.evaluateOnce = function () {
                var hs_sat26COUB = new $hs.Thunk();
                hs_sat26COUB.evaluateOnce = function () {
                    var hs_sat26COUD = new $hs.Thunk();
                    hs_sat26COUD.evaluateOnce = function () {
                        var hs_sat26COUF = new $hs.Thunk();
                        hs_sat26COUF.evaluateOnce = function () {
                            var hs_sat26COUH = new $hs.Data(1);
                            hs_sat26COUH.data = [1 % 1];
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_x26COih, hs_sat26COUH);
                        };
                        var hs_sat26COUE = new $hs.Thunk();
                        hs_sat26COUE.evaluateOnce = function () {
                            var hs_sat26COUG = new $hs.Data(1);
                            hs_sat26COUG.data = [1 % 1];
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_x26COih, hs_sat26COUG);
                        };
                        return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_sat26COUE, hs_sat26COUF);
                    };
                    return $hs.modules.GHCziFloat.hs_sqrt.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble, hs_sat26COUD);
                };
                var hs_sat26COUA = new $hs.Thunk();
                hs_sat26COUA.evaluateOnce = function () {
                    var hs_sat26COUC = new $hs.Data(1);
                    hs_sat26COUC.data = [1 % 1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_x26COih, hs_sat26COUC);
                };
                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26COUA, hs_sat26COUB);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_x26COih, hs_sat26COUz);
        };
        return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble, hs_sat26COUy);
    };
    hs_zdczdp2RealFloat125upqM.evaluateOnce = function () {
        if ($hs.modules.GHCziFloat.hs_zdfFloatingDouble.notEvaluated) {
            return $hs.modules.GHCziFloat.hs_zdfFloatingDouble.hscall();
        } else {
            return $hs.modules.GHCziFloat.hs_zdfFloatingDouble;
        }
    };
    this.hs_zdfRealDouble.data = [$hs.modules.GHCziFloat.hs_zdfNumDouble, $hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_zdctoRational125upiS];
    this.hs_zdfRealFracDouble.data = [$hs.modules.GHCziFloat.hs_zdfRealDouble, $hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_zdcproperFraction125upqU, hs_zdctruncate125upqP, hs_zdcround125upr4, hs_zdcceiling125upqO, hs_zdcfloor125upqN];
    hs_zdcfloor125upqN.evaluate = function (hs_eta26COiv, hs_eta126COiz) {
        var hs_zddReal226COiw = new $hs.Thunk();
        hs_zddReal226COiw.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_eta26COiv);
        };
        var hs_zddNum326COiy = new $hs.Thunk();
        hs_zddNum326COiy.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal226COiw);
        };
        var hs_wild26COUX = $hs.modules.GHCziReal.hs_properFraction.hscall($hs.modules.GHCziFloat.hs_zdfRealFracDouble, hs_eta26COiv, hs_eta126COiz);
        var hs_n26COiG = hs_wild26COUX.data[0];
        var hs_r26COiD = hs_wild26COUX.data[1];
        var hs_sat26COUY = new $hs.Data(1);
        hs_sat26COUY.data = [0 % 1];
        var hs_wild126COUZ = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_r26COiD, hs_sat26COUY);
        switch (hs_wild126COUZ.tag) {
        case 1:
            if (hs_n26COiG.notEvaluated) {
                return hs_n26COiG.hscall();
            } else {
                return hs_n26COiG;
            }
        case 2:
            var hs_sat26COUW = new $hs.Thunk();
            hs_sat26COUW.evaluateOnce = function () {
                var hs_sat26COV0 = new $hs.Thunk();
                hs_sat26COV0.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326COiy, hs_sat26COV0);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum326COiy, hs_n26COiG, hs_sat26COUW);
        }
    };
    hs_zdcceiling125upqO.evaluate = function (hs_eta26COiM, hs_eta126COiQ) {
        var hs_zddReal226COiN = new $hs.Thunk();
        hs_zddReal226COiN.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_eta26COiM);
        };
        var hs_zddNum326COiP = new $hs.Thunk();
        hs_zddNum326COiP.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal226COiN);
        };
        var hs_wild26COV2 = $hs.modules.GHCziReal.hs_properFraction.hscall($hs.modules.GHCziFloat.hs_zdfRealFracDouble, hs_eta26COiM, hs_eta126COiQ);
        var hs_n26COiX = hs_wild26COV2.data[0];
        var hs_r26COiU = hs_wild26COV2.data[1];
        var hs_sat26COV3 = new $hs.Data(1);
        hs_sat26COV3.data = [0 % 1];
        var hs_wild126COV4 = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_r26COiU, hs_sat26COV3);
        switch (hs_wild126COV4.tag) {
        case 1:
            if (hs_n26COiX.notEvaluated) {
                return hs_n26COiX.hscall();
            } else {
                return hs_n26COiX;
            }
        case 2:
            var hs_sat26COV1 = new $hs.Thunk();
            hs_sat26COV1.evaluateOnce = function () {
                var hs_sat26COV5 = new $hs.Thunk();
                hs_sat26COV5.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326COiP, hs_sat26COV5);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum326COiP, hs_n26COiX, hs_sat26COV1);
        }
    };
    hs_zdctruncate125upqP.evaluate = function (hs_eta26COj2, hs_x26COj3) {
        var hs_wild26COVk = $hs.modules.GHCziReal.hs_properFraction.hscall($hs.modules.GHCziFloat.hs_zdfRealFracDouble, hs_eta26COj2, hs_x26COj3);
        var hs_n26COj7 = hs_wild26COVk.data[0];
        if (hs_n26COj7.notEvaluated) {
            return hs_n26COj7.hscall();
        } else {
            return hs_n26COj7;
        }
    };
    hs_zdczdp1RealFloat125upqQ.evaluateOnce = function () {
        if ($hs.modules.GHCziFloat.hs_zdfRealFracDouble.notEvaluated) {
            return $hs.modules.GHCziFloat.hs_zdfRealFracDouble.hscall();
        } else {
            return $hs.modules.GHCziFloat.hs_zdfRealFracDouble;
        }
    };
    this.hs_zdfRealFloatDouble.data = [$hs.modules.GHCziFloat.hs_zdfRealFracDouble, $hs.modules.GHCziFloat.hs_zdfFloatingDouble, hs_zdcfloatRadix125uplH, hs_zdcfloatDigits125uplE, hs_zdcfloatRange125uply, hs_zdcdecodeFloat125uplm, hs_zdcencodeFloat125uplc, hs_zdcexponent125upqT, hs_zdcsignificand125upqS, hs_zdcscaleFloat125upqR, hs_zdcisNaN125upkY, hs_zdcisInfinite125upkK, hs_zdcisDenormalizzed125upkw, hs_zdcisNegativeZZero125upki, hs_zdcisIEEE125upkf, hs_zdcatan325upr3];
    hs_zdcscaleFloat125upqR.evaluate = function (hs_k26COjo, hs_x26COja) {
        var hs_wild26COWy = $hs.modules.GHCziFloat.hs_decodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_x26COja);
        var hs_m26COje = hs_wild26COWy.data[0];
        var hs_n26COjf = hs_wild26COWy.data[1];
        var hs_sat26COWx = new $hs.Thunk();
        hs_sat26COWx.evaluateOnce = function () {
            var hs_sat26COWz = new $hs.Thunk();
            hs_sat26COWz.evaluateOnce = function () {
                var hs_sat26COWA = new $hs.Thunk();
                hs_sat26COWA.evaluateOnce = function () {
                    var hs_sat26COWC = new $hs.Thunk();
                    hs_sat26COWC.evaluateOnce = function () {
                        var hs_sat26COWH = new $hs.Data(1);
                        hs_sat26COWH.data = [53];
                        var hs_sat26COWG = new $hs.Data(1);
                        hs_sat26COWG.data = [4];
                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COWG, hs_sat26COWH);
                    };
                    var hs_sat26COWB = new $hs.Thunk();
                    hs_sat26COWB.evaluateOnce = function () {
                        var hs_sat26COWE = new $hs.Thunk();
                        hs_sat26COWE.evaluateOnce = function () {
                            var hs_sat26COWF = new $hs.Data(1);
                            hs_sat26COWF.data = [1021];
                            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COWF);
                        };
                        var hs_sat26COWD = new $hs.Data(1);
                        hs_sat26COWD.data = [1024];
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COWD, hs_sat26COWE);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COWB, hs_sat26COWC);
                };
                return $hs.modules.GHCziFloat.hs_clamp.hscall(hs_sat26COWA, hs_k26COjo);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26COjf, hs_sat26COWz);
        };
        return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_m26COje, hs_sat26COWx);
    };
    hs_zdcsignificand125upqS.evaluate = function (hs_x26COjs) {
        var hs_wild26COWJ = $hs.modules.GHCziFloat.hs_decodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_x26COjs);
        var hs_m26COjw = hs_wild26COWJ.data[0];
        var hs_sat26COWI = new $hs.Thunk();
        hs_sat26COWI.evaluateOnce = function () {
            var hs_sat26COWL = new $hs.Thunk();
            hs_sat26COWL.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_floatDigits.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_x26COjs);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COWL);
        };
        return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_m26COjw, hs_sat26COWI);
    };
    hs_zdcexponent125upqT.evaluate = function (hs_x26COjA) {
        var hs_wild26COWM = $hs.modules.GHCziFloat.hs_decodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_x26COjA);
        var hs_m26COjE = hs_wild26COWM.data[0];
        var hs_n26COjH = hs_wild26COWM.data[1];
        var hs_sat26COWN = new $hs.Thunk();
        hs_sat26COWN.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_wild126COWO = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_m26COjE, hs_sat26COWN);
        switch (hs_wild126COWO.tag) {
        case 1:
            var hs_sat26COWP = new $hs.Thunk();
            hs_sat26COWP.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_floatDigits.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_x26COjA);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26COjH, hs_sat26COWP);
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [0];
            return $res;
        }
    };
    hs_zdcproperFraction125upqU.evaluate = function (hs_zddIntegral26COjM, hs_eta26COjQ) {
        var hs_zddReal226COjN = new $hs.Thunk();
        hs_zddReal226COjN.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26COjM);
        };
        var hs_zddNum326COjP = new $hs.Thunk();
        hs_zddNum326COjP.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal226COjN);
        };
        var hs_wild26COVm = $hs.modules.GHCziFloat.hs_decodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_eta26COjQ);
        var hs_m26COjX = hs_wild26COVm.data[0];
        var hs_n26COjU = hs_wild26COVm.data[1];
        var hs_sat26COVn = new $hs.Data(1);
        hs_sat26COVn.data = [0];
        var hs_wild126COVo = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_n26COjU, hs_sat26COVn);
        switch (hs_wild126COVo.tag) {
        case 1:
            var hs_sat26COVv = new $hs.Thunk();
            hs_sat26COVv.evaluateOnce = function () {
                var hs_sat26COVz = new $hs.Thunk();
                hs_sat26COVz.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26COjU);
                };
                var hs_sat26COVy = new $hs.Thunk();
                hs_sat26COVy.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                };
                return $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26COVy, hs_sat26COVz);
            };
            var hs_wild226COVw = $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_m26COjX, hs_sat26COVv);
            var hs_w26COk4 = hs_wild226COVw.data[0];
            var hs_r26COk6 = hs_wild226COVw.data[1];
            var hs_sat26COVx = new $hs.Thunk();
            hs_sat26COVx.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_r26COk6, hs_n26COjU);
            };
            var hs_sat26COVu = new $hs.Thunk();
            hs_sat26COVu.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326COjP, hs_w26COk4);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26COVu, hs_sat26COVx];
            return $res;
        case 2:
            var hs_sat26COVp = new $hs.Data(1);
            hs_sat26COVp.data = [0 % 1];
            var hs_sat26COVl = new $hs.Thunk();
            hs_sat26COVl.evaluateOnce = function () {
                var hs_sat26COVr = new $hs.Thunk();
                hs_sat26COVr.evaluateOnce = function () {
                    var hs_sat26COVs = new $hs.Thunk();
                    hs_sat26COVs.evaluateOnce = function () {
                        var hs_sat26COVt = new $hs.Thunk();
                        hs_sat26COVt.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326COjP, hs_sat26COVt);
                    };
                    return $hs.modules.GHCziReal.hs_zc.hscall(hs_zddNum326COjP, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26COVs, hs_n26COjU);
                };
                var hs_sat26COVq = new $hs.Thunk();
                hs_sat26COVq.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326COjP, hs_m26COjX);
                };
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum326COjP, hs_sat26COVq, hs_sat26COVr);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26COVl, hs_sat26COVp];
            return $res;
        }
    };
    hs_zdcshowsPrec125upqV.evaluate = function (hs_x26COkk, hs_eta26COkl) {
        var hs_sat26COTY = new $hs.Func(1);
        hs_sat26COTY.evaluate = function (hs_x126COkh) {
            var hs_sat26COTZ = new $hs.Thunk();
            hs_sat26COTZ.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_formatRealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, $hs.modules.GHCziFloat.hs_FFGeneric, $hs.modules.DataziMaybe.hs_Nothing, hs_x126COkh);
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26COTZ);
        };
        return $hs.modules.GHCziFloat.hs_showSignedFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_sat26COTY, hs_x26COkk, hs_eta26COkl);
    };
    hs_zddRealFrac125upqW.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_zdp1RealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zddReal125upqX.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac125upqW);
    };
    hs_zddOrd225upqY.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal125upqX);
    };
    hs_zddFloating125upqZ.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_zdp2RealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zddFractional225upr0.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_zdp1Floating.hscall(hs_zddFloating125upqZ);
    };
    hs_zddNum225upr1.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional225upr0);
    };
    hs_zddEq125upr2.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum225upr1);
    };
    hs_zdcatan325upr3.evaluate = function (hs_y26COkv, hs_x26COko) {
        var hs_sat26COVB = new $hs.Thunk();
        hs_sat26COVB.evaluateOnce = function () {
            var hs_sat26COWw = new $hs.Thunk();
            hs_sat26COWw.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum225upr1, hs_sat26COWw);
        };
        var hs_wild26COVC = $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd225upqY, hs_x26COko, hs_sat26COVB);
        switch (hs_wild26COVC.tag) {
        case 1:
            var hs_sat26COVE = new $hs.Thunk();
            hs_sat26COVE.evaluateOnce = function () {
                var hs_sat26COWu = new $hs.Thunk();
                hs_sat26COWu.evaluateOnce = function () {
                    var hs_sat26COWv = new $hs.Thunk();
                    hs_sat26COWv.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum225upr1, hs_sat26COWv);
                };
                return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd225upqY, hs_y26COkv, hs_sat26COWu);
            };
            var hs_sat26COVF = new $hs.Thunk();
            hs_sat26COVF.evaluateOnce = function () {
                var hs_sat26COWs = new $hs.Thunk();
                hs_sat26COWs.evaluateOnce = function () {
                    var hs_sat26COWt = new $hs.Thunk();
                    hs_sat26COWt.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum225upr1, hs_sat26COWt);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq125upr2, hs_x26COko, hs_sat26COWs);
            };
            var hs_wild126COVG = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COVF, hs_sat26COVE);
            switch (hs_wild126COVG.tag) {
            case 1:
                var hs_sat26COVK = new $hs.Thunk();
                hs_sat26COVK.evaluateOnce = function () {
                    var hs_sat26COWq = new $hs.Thunk();
                    hs_sat26COWq.evaluateOnce = function () {
                        var hs_sat26COWr = new $hs.Thunk();
                        hs_sat26COWr.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum225upr1, hs_sat26COWr);
                    };
                    return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd225upqY, hs_y26COkv, hs_sat26COWq);
                };
                var hs_sat26COVL = new $hs.Thunk();
                hs_sat26COVL.evaluateOnce = function () {
                    var hs_sat26COWo = new $hs.Thunk();
                    hs_sat26COWo.evaluateOnce = function () {
                        var hs_sat26COWp = new $hs.Thunk();
                        hs_sat26COWp.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum225upr1, hs_sat26COWp);
                    };
                    return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd225upqY, hs_x26COko, hs_sat26COWo);
                };
                var hs_wild226COVM = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COVL, hs_sat26COVK);
                switch (hs_wild226COVM.tag) {
                case 1:
                    var hs_sat26COVQ = new $hs.Thunk();
                    hs_sat26COVQ.evaluateOnce = function () {
                        var hs_sat26COWh = new $hs.Thunk();
                        hs_sat26COWh.evaluateOnce = function () {
                            var hs_sat26COWn = new $hs.Thunk();
                            hs_sat26COWn.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_y26COkv);
                            };
                            var hs_sat26COWm = new $hs.Thunk();
                            hs_sat26COWm.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_x26COko);
                            };
                            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COWm, hs_sat26COWn);
                        };
                        var hs_sat26COWg = new $hs.Thunk();
                        hs_sat26COWg.evaluateOnce = function () {
                            var hs_sat26COWj = new $hs.Thunk();
                            hs_sat26COWj.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_y26COkv);
                            };
                            var hs_sat26COWi = new $hs.Thunk();
                            hs_sat26COWi.evaluateOnce = function () {
                                var hs_sat26COWk = new $hs.Thunk();
                                hs_sat26COWk.evaluateOnce = function () {
                                    var hs_sat26COWl = new $hs.Thunk();
                                    hs_sat26COWl.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum225upr1, hs_sat26COWl);
                                };
                                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd225upqY, hs_x26COko, hs_sat26COWk);
                            };
                            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COWi, hs_sat26COWj);
                        };
                        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26COWg, hs_sat26COWh);
                    };
                    var hs_sat26COVR = new $hs.Thunk();
                    hs_sat26COVR.evaluateOnce = function () {
                        var hs_sat26COWb = new $hs.Thunk();
                        hs_sat26COWb.evaluateOnce = function () {
                            var hs_sat26COWe = new $hs.Thunk();
                            hs_sat26COWe.evaluateOnce = function () {
                                var hs_sat26COWf = new $hs.Thunk();
                                hs_sat26COWf.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum225upr1, hs_sat26COWf);
                            };
                            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd225upqY, hs_y26COkv, hs_sat26COWe);
                        };
                        var hs_sat26COWa = new $hs.Thunk();
                        hs_sat26COWa.evaluateOnce = function () {
                            var hs_sat26COWc = new $hs.Thunk();
                            hs_sat26COWc.evaluateOnce = function () {
                                var hs_sat26COWd = new $hs.Thunk();
                                hs_sat26COWd.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum225upr1, hs_sat26COWd);
                            };
                            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd225upqY, hs_x26COko, hs_sat26COWc);
                        };
                        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COWa, hs_sat26COWb);
                    };
                    var hs_wild326COVS = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26COVR, hs_sat26COVQ);
                    switch (hs_wild326COVS.tag) {
                    case 1:
                        var hs_sat26COVU = new $hs.Thunk();
                        hs_sat26COVU.evaluateOnce = function () {
                            var hs_sat26COW7 = new $hs.Thunk();
                            hs_sat26COW7.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_x26COko);
                            };
                            var hs_sat26COW6 = new $hs.Thunk();
                            hs_sat26COW6.evaluateOnce = function () {
                                var hs_sat26COW8 = new $hs.Thunk();
                                hs_sat26COW8.evaluateOnce = function () {
                                    var hs_sat26COW9 = new $hs.Thunk();
                                    hs_sat26COW9.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum225upr1, hs_sat26COW9);
                                };
                                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd225upqY, hs_x26COko, hs_sat26COW8);
                            };
                            return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26COW6, hs_sat26COW7);
                        };
                        var hs_sat26COVV = new $hs.Thunk();
                        hs_sat26COVV.evaluateOnce = function () {
                            var hs_sat26COW4 = new $hs.Thunk();
                            hs_sat26COW4.evaluateOnce = function () {
                                var hs_sat26COW5 = new $hs.Thunk();
                                hs_sat26COW5.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum225upr1, hs_sat26COW5);
                            };
                            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq125upr2, hs_y26COkv, hs_sat26COW4);
                        };
                        var hs_wild426COVW = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COVV, hs_sat26COVU);
                        switch (hs_wild426COVW.tag) {
                        case 1:
                            var hs_sat26COVX = new $hs.Thunk();
                            hs_sat26COVX.evaluateOnce = function () {
                                var hs_sat26COW2 = new $hs.Thunk();
                                hs_sat26COW2.evaluateOnce = function () {
                                    var hs_sat26COW3 = new $hs.Thunk();
                                    hs_sat26COW3.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum225upr1, hs_sat26COW3);
                                };
                                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq125upr2, hs_y26COkv, hs_sat26COW2);
                            };
                            var hs_sat26COVY = new $hs.Thunk();
                            hs_sat26COVY.evaluateOnce = function () {
                                var hs_sat26COW0 = new $hs.Thunk();
                                hs_sat26COW0.evaluateOnce = function () {
                                    var hs_sat26COW1 = new $hs.Thunk();
                                    hs_sat26COW1.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum225upr1, hs_sat26COW1);
                                };
                                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq125upr2, hs_x26COko, hs_sat26COW0);
                            };
                            var hs_wild526COVZ = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26COVY, hs_sat26COVX);
                            switch (hs_wild526COVZ.tag) {
                            case 1:
                                return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum225upr1, hs_x26COko, hs_y26COkv);
                            case 2:
                                if (hs_y26COkv.notEvaluated) {
                                    return hs_y26COkv.hscall();
                                } else {
                                    return hs_y26COkv;
                                }
                            }
                        case 2:
                            return $hs.modules.GHCziFloat.hs_pi.hscall(hs_zddFloating125upqZ);
                        }
                    case 2:
                        var hs_sat26COVP = new $hs.Thunk();
                        hs_sat26COVP.evaluateOnce = function () {
                            var hs_sat26COVT = new $hs.Thunk();
                            hs_sat26COVT.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum225upr1, hs_y26COkv);
                            };
                            return $hs.modules.GHCziFloat.hs_atan2.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_sat26COVT, hs_x26COko);
                        };
                        return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum225upr1, hs_sat26COVP);
                    }
                case 2:
                    var hs_sat26COVN = new $hs.Thunk();
                    hs_sat26COVN.evaluateOnce = function () {
                        var hs_sat26COVO = new $hs.Thunk();
                        hs_sat26COVO.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional225upr0, hs_y26COkv, hs_x26COko);
                        };
                        return $hs.modules.GHCziFloat.hs_atan.hscall(hs_zddFloating125upqZ, hs_sat26COVO);
                    };
                    var hs_sat26COVJ = new $hs.Thunk();
                    hs_sat26COVJ.evaluateOnce = function () {
                        return $hs.modules.GHCziFloat.hs_pi.hscall(hs_zddFloating125upqZ);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum225upr1, hs_sat26COVJ, hs_sat26COVN);
                }
            case 2:
                var hs_sat26COVH = new $hs.Thunk();
                hs_sat26COVH.evaluateOnce = function () {
                    var hs_sat26COVI = new $hs.Thunk();
                    hs_sat26COVI.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum225upr1, hs_sat26COVI);
                };
                var hs_sat26COVD = new $hs.Thunk();
                hs_sat26COVD.evaluateOnce = function () {
                    return $hs.modules.GHCziFloat.hs_pi.hscall(hs_zddFloating125upqZ);
                };
                return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional225upr0, hs_sat26COVD, hs_sat26COVH);
            }
        case 2:
            var hs_sat26COVA = new $hs.Thunk();
            hs_sat26COVA.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional225upr0, hs_y26COkv, hs_x26COko);
            };
            return $hs.modules.GHCziFloat.hs_atan.hscall(hs_zddFloating125upqZ, hs_sat26COVA);
        }
    };
    hs_zdcround125upr4.evaluate = function (hs_zddIntegral26COlq, hs_eta26COlu) {
        var hs_zddReal226COlr = new $hs.Thunk();
        hs_zddReal226COlr.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26COlq);
        };
        var hs_zddNum326COlt = new $hs.Thunk();
        hs_zddNum326COlt.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal226COlr);
        };
        var hs_wild26COV6 = $hs.modules.GHCziReal.hs_properFraction.hscall($hs.modules.GHCziFloat.hs_zdfRealFracDouble, hs_zddIntegral26COlq, hs_eta26COlu);
        var hs_n26COlC = hs_wild26COV6.data[0];
        var hs_r26COlz = hs_wild26COV6.data[1];
        var hs_m26COlH = new $hs.Thunk();
        hs_m26COlH.evaluateOnce = function () {
            var hs_sat26COVe = new $hs.Data(1);
            hs_sat26COVe.data = [0 % 1];
            var hs_wild126COVf = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_r26COlz, hs_sat26COVe);
            switch (hs_wild126COVf.tag) {
            case 1:
                var hs_sat26COVh = new $hs.Thunk();
                hs_sat26COVh.evaluateOnce = function () {
                    var hs_sat26COVi = new $hs.Thunk();
                    hs_sat26COVi.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326COlt, hs_sat26COVi);
                };
                return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum326COlt, hs_n26COlC, hs_sat26COVh);
            case 2:
                var hs_sat26COVd = new $hs.Thunk();
                hs_sat26COVd.evaluateOnce = function () {
                    var hs_sat26COVg = new $hs.Thunk();
                    hs_sat26COVg.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum326COlt, hs_sat26COVg);
                };
                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum326COlt, hs_n26COlC, hs_sat26COVd);
            }
        };
        var hs_sat26COV7 = new $hs.Data(1);
        hs_sat26COV7.data = [0 % 1];
        var hs_sat26COV8 = new $hs.Thunk();
        hs_sat26COV8.evaluateOnce = function () {
            var hs_sat26COVc = new $hs.Data(1);
            hs_sat26COVc.data = [1 % 2];
            var hs_sat26COVb = new $hs.Thunk();
            hs_sat26COVb.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_r26COlz);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26COVb, hs_sat26COVc);
        };
        var hs_wild126COV9 = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_sat26COV8, hs_sat26COV7);
        switch (hs_wild126COV9.tag) {
        case 1:
            if (hs_n26COlC.notEvaluated) {
                return hs_n26COlC.hscall();
            } else {
                return hs_n26COlC;
            }
        case 2:
            var hs_wild226COVa = $hs.modules.GHCziReal.hs_even.hscall(hs_zddIntegral26COlq, hs_n26COlC);
            switch (hs_wild226COVa.tag) {
            case 1:
                if (hs_m26COlH.notEvaluated) {
                    return hs_m26COlH.hscall();
                } else {
                    return hs_m26COlH;
                }
            case 2:
                if (hs_n26COlC.notEvaluated) {
                    return hs_n26COlC.hscall();
                } else {
                    return hs_n26COlC;
                }
            }
        case 3:
            if (hs_m26COlH.notEvaluated) {
                return hs_m26COlH.hscall();
            } else {
                return hs_m26COlH;
            }
        }
    };
    hs_zdcfromRational125upr5.evaluate = function (hs_ds26COlP) {
        var hs_wild26COU6 = hs_ds26COlP;
        if (hs_ds26COlP.notEvaluated) {
            hs_wild26COU6 = hs_ds26COlP.hscall();
        }
        var hs_n26COlW = hs_wild26COU6.data[0];
        var hs_ds126COlT = hs_wild26COU6.data[1];
        var hs_sat26COU7 = new $hs.Thunk();
        hs_sat26COU7.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_wild126COU8 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_ds126COlT, hs_sat26COU7);
        switch (hs_wild126COU8.tag) {
        case 1:
            var hs_sat26COUk = new $hs.Thunk();
            hs_sat26COUk.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            var hs_wild226COUl = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_n26COlW, hs_sat26COUk);
            switch (hs_wild226COUl.tag) {
            case 1:
                var hs_sat26COUo = new $hs.Thunk();
                hs_sat26COUo.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_wild326COUp = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26COlW, hs_sat26COUo);
                switch (hs_wild326COUp.tag) {
                case 1:
                    var hs_sat26COUv = new $hs.Data(1);
                    hs_sat26COUv.data = [53];
                    var hs_sat26COUu = new $hs.Thunk();
                    hs_sat26COUu.evaluateOnce = function () {
                        var hs_sat26COUw = new $hs.Data(1);
                        hs_sat26COUw.data = [1021];
                        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COUw);
                    };
                    return $hs.modules.GHCziFloat.hs_fromRatzqzq.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_sat26COUu, hs_sat26COUv, hs_n26COlW, hs_ds126COlT);
                case 2:
                    var hs_sat26COUn = new $hs.Thunk();
                    hs_sat26COUn.evaluateOnce = function () {
                        var hs_sat26COUr = new $hs.Thunk();
                        hs_sat26COUr.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_n26COlW);
                        };
                        var hs_sat26COUs = new $hs.Data(1);
                        hs_sat26COUs.data = [53];
                        var hs_sat26COUq = new $hs.Thunk();
                        hs_sat26COUq.evaluateOnce = function () {
                            var hs_sat26COUt = new $hs.Data(1);
                            hs_sat26COUt.data = [1021];
                            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COUt);
                        };
                        return $hs.modules.GHCziFloat.hs_fromRatzqzq.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_sat26COUq, hs_sat26COUs, hs_sat26COUr, hs_ds126COlT);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26COUn);
                }
            case 2:
                var hs_sat26COUm = new $hs.Data(1);
                hs_sat26COUm.data = [0];
                var hs_sat26COUj = new $hs.Thunk();
                hs_sat26COUj.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_sat26COUj, hs_sat26COUm);
            }
        case 2:
            var hs_sat26COU9 = new $hs.Thunk();
            hs_sat26COU9.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            var hs_wild226COUa = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_n26COlW, hs_sat26COU9);
            switch (hs_wild226COUa.tag) {
            case 1:
                var hs_sat26COUd = new $hs.Thunk();
                hs_sat26COUd.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_wild326COUe = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26COlW, hs_sat26COUd);
                switch (hs_wild326COUe.tag) {
                case 1:
                    var hs_sat26COUi = new $hs.Data(1);
                    hs_sat26COUi.data = [0 % 1];
                    var hs_sat26COUh = new $hs.Data(1);
                    hs_sat26COUh.data = [1 % 1];
                    return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_sat26COUh, hs_sat26COUi);
                case 2:
                    var hs_sat26COUf = new $hs.Data(1);
                    hs_sat26COUf.data = [0 % 1];
                    var hs_sat26COUc = new $hs.Thunk();
                    hs_sat26COUc.evaluateOnce = function () {
                        var hs_sat26COUg = new $hs.Data(1);
                        hs_sat26COUg.data = [1 % 1];
                        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26COUg);
                    };
                    return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_sat26COUc, hs_sat26COUf);
                }
            case 2:
                var hs_sat26COUb = new $hs.Data(1);
                hs_sat26COUb.data = [0 % 1];
                var hs_sat26COU5 = new $hs.Data(1);
                hs_sat26COU5.data = [0 % 1];
                return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_sat26COU5, hs_sat26COUb);
            }
        }
    };
    hs_fromRatzqzq225upr6.evaluate = function (hs_minEx26COmq, hs_mantDigs26COmt, hs_n26COmE, hs_d26COmw) {
        var hs_wild26COmD = hs_minEx26COmq;
        if (hs_minEx26COmq.notEvaluated) {
            hs_wild26COmD = hs_minEx26COmq.hscall();
        }
        var hs_mezh26COo2 = hs_wild26COmD.data[0];
        var hs_wild126COmN = hs_mantDigs26COmt;
        if (hs_mantDigs26COmt.notEvaluated) {
            hs_wild126COmN = hs_mantDigs26COmt.hscall();
        }
        var hs_mdzh26COo6 = hs_wild126COmN.data[0];
        var hs_wild226COWS = $hs.modules.GHCziIntegerziLogarithmsziInternals.hs_integerLog2IsPowerOf2zh.hscall(hs_d26COmw);
        var hs_ldzh26COmI = hs_wild226COWS[0];
        var hs_pwzh26COmA = hs_wild226COWS[1];
        var hs_wild326COWR = hs_pwzh26COmA;
        if (hs_pwzh26COmA.notEvaluated) {
            hs_wild326COWR = hs_pwzh26COmA.hscall();
        }
        switch (hs_wild326COWR) {
        case 0:
            var hs_lnzh26COo1 = $hs.modules.GHCziIntegerziLogarithmsziInternals.hs_integerLog2zh.hscall(hs_n26COmE);
            var hs_sat26COWT = ($hs.Int.addCarry(hs_ldzh26COmI, hs_mezh26COo2, 0))[0];
            var hs_wild426COWU = hs_lnzh26COo1 > hs_sat26COWT ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild426COWU.tag) {
            case 1:
                var hs_sat26COXe = ($hs.Int.addCarry(hs_mezh26COo2, ~hs_mdzh26COo6, 1))[0];
                var hs_ldzqzh26COo8 = ($hs.Int.addCarry(hs_ldzh26COmI, hs_sat26COXe, 0))[0];
                var hs_sat26COXf = ($hs.Int.addCarry(hs_lnzh26COo1, 1, 0))[0];
                var hs_wild526COXg = hs_ldzqzh26COo8 > hs_sat26COXf ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild526COXg.tag) {
                case 1:
                    var hs_sat26COXk = ($hs.Int.addCarry(hs_lnzh26COo1, 1, 0))[0];
                    var hs_wild626COXl = hs_ldzqzh26COo8 == hs_sat26COXk ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild626COXl.tag) {
                    case 1:
                        var hs_wild726COXs = hs_ldzqzh26COo8 <= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                        switch (hs_wild726COXs.tag) {
                        case 1:
                            var hs_nzq26COog = new $hs.Thunk();
                            hs_nzq26COog.evaluateOnce = function () {
                                var hs_sat26COXJ = new $hs.Data(1);
                                hs_sat26COXJ.data = [hs_ldzqzh26COo8];
                                return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_n26COmE, hs_sat26COXJ);
                            };
                            var hs_sat26COXw = ($hs.Int.addCarry(hs_ldzqzh26COo8, ~1, 1))[0];
                            var hs_ds26COoj = $hs.modules.GHCziIntegerziLogarithmsziInternals.hs_roundingModezh.hscall(hs_n26COmE, hs_sat26COXw);
                            var hs_ds126COXv = hs_ds26COoj;
                            if (hs_ds26COoj.notEvaluated) {
                                hs_ds126COXv = hs_ds26COoj.hscall();
                            }
                            switch (hs_ds126COXv) {
                            case 0:
                                var hs_sat26COXu = new $hs.Thunk();
                                hs_sat26COXu.evaluateOnce = function () {
                                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild26COmD, hs_wild126COmN);
                                };
                                return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_nzq26COog, hs_sat26COXu);
                            case 1:
                                var hs_sat26COXy = new $hs.Data(1);
                                hs_sat26COXy.data = [0];
                                var hs_sat26COXz = new $hs.Thunk();
                                hs_sat26COXz.evaluateOnce = function () {
                                    var hs_sat26COXF = new $hs.Data(1);
                                    hs_sat26COXF.data = [1];
                                    var hs_sat26COXE = new $hs.Thunk();
                                    hs_sat26COXE.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_nzq26COog);
                                    };
                                    return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26COXE, hs_sat26COXF);
                                };
                                var hs_wild826COXA = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26COXz, hs_sat26COXy);
                                switch (hs_wild826COXA.tag) {
                                case 1:
                                    var hs_sat26COXC = new $hs.Thunk();
                                    hs_sat26COXC.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild26COmD, hs_wild126COmN);
                                    };
                                    var hs_sat26COXB = new $hs.Thunk();
                                    hs_sat26COXB.evaluateOnce = function () {
                                        var hs_sat26COXD = new $hs.Thunk();
                                        hs_sat26COXD.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                        };
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_nzq26COog, hs_sat26COXD);
                                    };
                                    return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_sat26COXB, hs_sat26COXC);
                                case 2:
                                    var hs_sat26COXx = new $hs.Thunk();
                                    hs_sat26COXx.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild26COmD, hs_wild126COmN);
                                    };
                                    return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_nzq26COog, hs_sat26COXx);
                                }
                            default:
                                var hs_sat26COXH = new $hs.Thunk();
                                hs_sat26COXH.evaluateOnce = function () {
                                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild26COmD, hs_wild126COmN);
                                };
                                var hs_sat26COXG = new $hs.Thunk();
                                hs_sat26COXG.evaluateOnce = function () {
                                    var hs_sat26COXI = new $hs.Thunk();
                                    hs_sat26COXI.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                    };
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_nzq26COog, hs_sat26COXI);
                                };
                                return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_sat26COXG, hs_sat26COXH);
                            }
                        case 2:
                            var hs_sat26COoA = ($hs.Int.addCarry(hs_mezh26COo2, ~hs_mdzh26COo6, 1))[0];
                            var hs_sat26COXt = ($hs.Int.addCarry(hs_sat26COoA, ~hs_ldzqzh26COo8, 1))[0];
                            var hs_sat26COXr = new $hs.Data(1);
                            hs_sat26COXr.data = [hs_sat26COXt];
                            return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_n26COmE, hs_sat26COXr);
                        }
                    case 2:
                        var hs_wild726COXm = $hs.modules.GHCziIntegerziLogarithmsziInternals.hs_integerLog2IsPowerOf2zh.hscall(hs_n26COmE);
                        var hs_ds126COoF = hs_wild726COXm[1];
                        var hs_ds226COXj = hs_ds126COoF;
                        if (hs_ds126COoF.notEvaluated) {
                            hs_ds226COXj = hs_ds126COoF.hscall();
                        }
                        switch (hs_ds226COXj) {
                        case 0:
                            var hs_sat26COXo = new $hs.Data(1);
                            hs_sat26COXo.data = [0];
                            var hs_sat26COXi = new $hs.Thunk();
                            hs_sat26COXi.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                            };
                            return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_sat26COXi, hs_sat26COXo);
                        default:
                            var hs_sat26COXq = new $hs.Thunk();
                            hs_sat26COXq.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild26COmD, hs_wild126COmN);
                            };
                            var hs_sat26COXp = new $hs.Thunk();
                            hs_sat26COXp.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_sat26COXp, hs_sat26COXq);
                        }
                    }
                case 2:
                    var hs_sat26COXh = new $hs.Data(1);
                    hs_sat26COXh.data = [0];
                    var hs_sat26COXd = new $hs.Thunk();
                    hs_sat26COXd.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_sat26COXd, hs_sat26COXh);
                }
            case 2:
                var hs_wild526COWV = hs_lnzh26COo1 < hs_mdzh26COo6 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild526COWV.tag) {
                case 1:
                    var hs_nzq26COoT = new $hs.Thunk();
                    hs_nzq26COoT.evaluateOnce = function () {
                        var hs_sat26COoR = ($hs.Int.addCarry(hs_lnzh26COo1, 1, 0))[0];
                        var hs_sat26COXc = ($hs.Int.addCarry(hs_sat26COoR, ~hs_mdzh26COo6, 1))[0];
                        var hs_sat26COXb = new $hs.Data(1);
                        hs_sat26COXb.data = [hs_sat26COXc];
                        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_n26COmE, hs_sat26COXb);
                    };
                    var hs_sat26COpa = ($hs.Int.addCarry(hs_lnzh26COo1, ~hs_ldzh26COmI, 1))[0];
                    var hs_sat26COpb = ($hs.Int.addCarry(hs_sat26COpa, 1, 0))[0];
                    var hs_sat26COX1 = ($hs.Int.addCarry(hs_sat26COpb, ~hs_mdzh26COo6, 1))[0];
                    var hs_sat26COX2 = new $hs.Data(1);
                    hs_sat26COX2.data = [hs_sat26COX1];
                    var hs_sat26COX0 = new $hs.Thunk();
                    hs_sat26COX0.evaluateOnce = function () {
                        var hs_sat26COX4 = ($hs.Int.addCarry(hs_lnzh26COo1, ~hs_mdzh26COo6, 1))[0];
                        var hs_ds26COoW = $hs.modules.GHCziIntegerziLogarithmsziInternals.hs_roundingModezh.hscall(hs_n26COmE, hs_sat26COX4);
                        var hs_ds126COX3 = hs_ds26COoW;
                        if (hs_ds26COoW.notEvaluated) {
                            hs_ds126COX3 = hs_ds26COoW.hscall();
                        }
                        switch (hs_ds126COX3) {
                        case 0:
                            if (hs_nzq26COoT.notEvaluated) {
                                return hs_nzq26COoT.hscall();
                            } else {
                                return hs_nzq26COoT;
                            }
                        case 2:
                            var hs_sat26COX5 = new $hs.Thunk();
                            hs_sat26COX5.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_nzq26COoT, hs_sat26COX5);
                        default:
                            var hs_sat26COX7 = new $hs.Data(1);
                            hs_sat26COX7.data = [1];
                            var hs_sat26COX8 = new $hs.Thunk();
                            hs_sat26COX8.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_nzq26COoT);
                            };
                            var hs_wild626COX9 = $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26COX8, hs_sat26COX7);
                            var hs_ds226COp2 = hs_wild626COX9.data[0];
                            var hs_ds326COX6 = hs_ds226COp2;
                            if (hs_ds226COp2.notEvaluated) {
                                hs_ds326COX6 = hs_ds226COp2.hscall();
                            }
                            switch (hs_ds326COX6) {
                            case 0:
                                if (hs_nzq26COoT.notEvaluated) {
                                    return hs_nzq26COoT.hscall();
                                } else {
                                    return hs_nzq26COoT;
                                }
                            default:
                                var hs_sat26COXa = new $hs.Thunk();
                                hs_sat26COXa.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                };
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_nzq26COoT, hs_sat26COXa);
                            }
                        }
                    };
                    return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_sat26COX0, hs_sat26COX2);
                case 2:
                    var hs_sat26COpl = ($hs.Int.addCarry(hs_lnzh26COo1, 1, 0))[0];
                    var hs_sat26COpm = ($hs.Int.addCarry(hs_sat26COpl, ~hs_ldzh26COmI, 1))[0];
                    var hs_sat26COWW = ($hs.Int.addCarry(hs_sat26COpm, ~hs_mdzh26COo6, 1))[0];
                    var hs_sat26COWX = new $hs.Data(1);
                    hs_sat26COWX.data = [hs_sat26COWW];
                    var hs_sat26COWQ = new $hs.Thunk();
                    hs_sat26COWQ.evaluateOnce = function () {
                        var hs_sat26COpf = ($hs.Int.addCarry(hs_mdzh26COo6, ~1, 1))[0];
                        var hs_sat26COWZ = ($hs.Int.addCarry(hs_sat26COpf, ~hs_lnzh26COo1, 1))[0];
                        var hs_sat26COWY = new $hs.Data(1);
                        hs_sat26COWY.data = [hs_sat26COWZ];
                        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_n26COmE, hs_sat26COWY);
                    };
                    return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_sat26COWQ, hs_sat26COWX);
                }
            }
        default:
            var hs_p026COmL = new $hs.Thunk();
            hs_p026COmL.evaluateOnce = function () {
                var hs_sat26COYx = new $hs.Thunk();
                hs_sat26COYx.evaluateOnce = function () {
                    var hs_sat26COYz = new $hs.Data(1);
                    hs_sat26COYz.data = [hs_ldzh26COmI];
                    var hs_sat26COYy = new $hs.Thunk();
                    hs_sat26COYy.evaluateOnce = function () {
                        var hs_wild426COmG = $hs.modules.GHCziIntegerziLogarithmsziInternals.hs_integerLog2zh.hscall(hs_n26COmE);
                        var $res = new $hs.Data(1);
                        $res.data = [hs_wild426COmG];
                        return $res;
                    };
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COYy, hs_sat26COYz);
                };
                return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_wild26COmD, hs_sat26COYx);
            };
            var hs_ds26COmU = new $hs.Thunk();
            hs_ds26COmU.evaluateOnce = function () {
                var hs_wild426COYs = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_p026COmL, hs_wild126COmN);
                switch (hs_wild426COYs.tag) {
                case 1:
                    var hs_wild526COYu = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_p026COmL, hs_wild126COmN);
                    switch (hs_wild526COYu.tag) {
                    case 1:
                        var hs_sat26COYv = new $hs.Thunk();
                        hs_sat26COYv.evaluateOnce = function () {
                            var hs_sat26COYw = new $hs.Thunk();
                            hs_sat26COYw.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p026COmL, hs_wild126COmN);
                            };
                            return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_d26COmw, hs_sat26COYw);
                        };
                        var $res = new $hs.Data(1);
                        $res.data = [hs_n26COmE, hs_sat26COYv];
                        return $res;
                    case 2:
                        var $res = new $hs.Data(1);
                        $res.data = [hs_n26COmE, hs_d26COmw];
                        return $res;
                    }
                case 2:
                    var hs_sat26COYr = new $hs.Thunk();
                    hs_sat26COYr.evaluateOnce = function () {
                        var hs_sat26COYt = new $hs.Thunk();
                        hs_sat26COYt.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild126COmN, hs_p026COmL);
                        };
                        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_n26COmE, hs_sat26COYt);
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26COYr, hs_d26COmw];
                    return $res;
                }
            };
            var hs_ds126COnq = new $hs.Thunk();
            hs_ds126COnq.evaluateOnce = function () {
                var hs_p26COmX = new $hs.Thunk();
                hs_p26COmX.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p026COmL, hs_wild126COmN);
                };
                var hs_a26COn3 = new $hs.Thunk();
                hs_a26COn3.evaluateOnce = function () {
                    var hs_wild426COYq = hs_ds26COmU;
                    if (hs_ds26COmU.notEvaluated) {
                        hs_wild426COYq = hs_ds26COmU.hscall();
                    }
                    var hs_nzq26COn2 = hs_wild426COYq.data[0];
                    if (hs_nzq26COn2.notEvaluated) {
                        return hs_nzq26COn2.hscall();
                    } else {
                        return hs_nzq26COn2;
                    }
                };
                var hs_b26COn9 = new $hs.Thunk();
                hs_b26COn9.evaluateOnce = function () {
                    var hs_wild426COYo = hs_ds26COmU;
                    if (hs_ds26COmU.notEvaluated) {
                        hs_wild426COYo = hs_ds26COmU.hscall();
                    }
                    var hs_dzq26COn8 = hs_wild426COYo.data[1];
                    if (hs_dzq26COn8.notEvaluated) {
                        return hs_dzq26COn8.hscall();
                    } else {
                        return hs_dzq26COn8;
                    }
                };
                var hs_sat26COY7 = new $hs.Thunk();
                hs_sat26COY7.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild26COmD, hs_wild126COmN);
                };
                var hs_wild426COY8 = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_p26COmX, hs_sat26COY7);
                switch (hs_wild426COY8.tag) {
                case 1:
                    var hs_sat26COYa = new $hs.Thunk();
                    hs_sat26COYa.evaluateOnce = function () {
                        var hs_sat26COYl = new $hs.Thunk();
                        hs_sat26COYl.evaluateOnce = function () {
                            var hs_sat26COYm = new $hs.Data(1);
                            hs_sat26COYm.data = [1];
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild126COmN, hs_sat26COYm);
                        };
                        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_b26COn9, hs_sat26COYl);
                    };
                    var hs_wild526COYb = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_a26COn3, hs_sat26COYa);
                    switch (hs_wild526COYb.tag) {
                    case 1:
                        var hs_sat26COYg = new $hs.Thunk();
                        hs_sat26COYg.evaluateOnce = function () {
                            return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_b26COn9, hs_wild126COmN);
                        };
                        var hs_wild626COYh = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_sat26COYg, hs_a26COn3);
                        switch (hs_wild626COYh.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [hs_p26COmX, hs_a26COn3, hs_b26COn9];
                            return $res;
                        case 2:
                            var hs_sat26COYi = new $hs.Thunk();
                            hs_sat26COYi.evaluateOnce = function () {
                                var hs_sat26COYk = new $hs.Data(1);
                                hs_sat26COYk.data = [1];
                                return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_b26COn9, hs_sat26COYk);
                            };
                            var hs_sat26COYf = new $hs.Thunk();
                            hs_sat26COYf.evaluateOnce = function () {
                                var hs_sat26COYj = new $hs.Data(1);
                                hs_sat26COYj.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p26COmX, hs_sat26COYj);
                            };
                            var $res = new $hs.Data(1);
                            $res.data = [hs_sat26COYf, hs_a26COn3, hs_sat26COYi];
                            return $res;
                        }
                    case 2:
                        var hs_sat26COYc = new $hs.Thunk();
                        hs_sat26COYc.evaluateOnce = function () {
                            var hs_sat26COYe = new $hs.Data(1);
                            hs_sat26COYe.data = [1];
                            return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_a26COn3, hs_sat26COYe);
                        };
                        var hs_sat26COY9 = new $hs.Thunk();
                        hs_sat26COY9.evaluateOnce = function () {
                            var hs_sat26COYd = new $hs.Data(1);
                            hs_sat26COYd.data = [1];
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p26COmX, hs_sat26COYd);
                        };
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26COY9, hs_sat26COYc, hs_b26COn9];
                        return $res;
                    }
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [hs_p26COmX, hs_a26COn3, hs_b26COn9];
                    return $res;
                }
            };
            var hs_dzqzq26COnx = new $hs.Thunk();
            hs_dzqzq26COnx.evaluateOnce = function () {
                var hs_wild426COY6 = hs_ds126COnq;
                if (hs_ds126COnq.notEvaluated) {
                    hs_wild426COY6 = hs_ds126COnq.hscall();
                }
                var hs_dzqzq126COnw = hs_wild426COY6.data[2];
                if (hs_dzqzq126COnw.notEvaluated) {
                    return hs_dzqzq126COnw.hscall();
                } else {
                    return hs_dzqzq126COnw;
                }
            };
            var hs_sat26COXL = new $hs.Thunk();
            hs_sat26COXL.evaluateOnce = function () {
                var hs_wild426COY3 = hs_ds126COnq;
                if (hs_ds126COnq.notEvaluated) {
                    hs_wild426COY3 = hs_ds126COnq.hscall();
                }
                var hs_pzq26COnY = hs_wild426COY3.data[0];
                if (hs_pzq26COnY.notEvaluated) {
                    return hs_pzq26COnY.hscall();
                } else {
                    return hs_pzq26COnY;
                }
            };
            var hs_sat26COXK = new $hs.Thunk();
            hs_sat26COXK.evaluateOnce = function () {
                var hs_sat26COXM = new $hs.Thunk();
                hs_sat26COXM.evaluateOnce = function () {
                    var hs_wild426COY0 = hs_ds126COnq;
                    if (hs_ds126COnq.notEvaluated) {
                        hs_wild426COY0 = hs_ds126COnq.hscall();
                    }
                    var hs_nzqzq26COnC = hs_wild426COY0.data[1];
                    if (hs_nzqzq26COnC.notEvaluated) {
                        return hs_nzqzq26COnC.hscall();
                    } else {
                        return hs_nzqzq26COnC;
                    }
                };
                var hs_wild426COXN = $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26COXM, hs_dzqzq26COnx);
                var hs_q26COnL = hs_wild426COXN.data[0];
                var hs_r26COnH = hs_wild426COXN.data[1];
                var hs_sat26COXO = new $hs.Thunk();
                hs_sat26COXO.evaluateOnce = function () {
                    var hs_sat26COXX = new $hs.Data(1);
                    hs_sat26COXX.data = [1];
                    return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_r26COnH, hs_sat26COXX);
                };
                var hs_wild526COXP = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_sat26COXO, hs_dzqzq26COnx);
                switch (hs_wild526COXP.tag) {
                case 1:
                    if (hs_q26COnL.notEvaluated) {
                        return hs_q26COnL.hscall();
                    } else {
                        return hs_q26COnL;
                    }
                case 2:
                    var hs_sat26COXQ = new $hs.Data(1);
                    hs_sat26COXQ.data = [0];
                    var hs_sat26COXR = new $hs.Thunk();
                    hs_sat26COXR.evaluateOnce = function () {
                        var hs_sat26COXV = new $hs.Data(1);
                        hs_sat26COXV.data = [1];
                        var hs_sat26COXU = new $hs.Thunk();
                        hs_sat26COXU.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_q26COnL);
                        };
                        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26COXU, hs_sat26COXV);
                    };
                    var hs_wild626COXS = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26COXR, hs_sat26COXQ);
                    switch (hs_wild626COXS.tag) {
                    case 1:
                        var hs_sat26COXT = new $hs.Thunk();
                        hs_sat26COXT.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_q26COnL, hs_sat26COXT);
                    case 2:
                        if (hs_q26COnL.notEvaluated) {
                            return hs_q26COnL.hscall();
                        } else {
                            return hs_q26COnL;
                        }
                    }
                case 3:
                    var hs_sat26COXW = new $hs.Thunk();
                    hs_sat26COXW.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_q26COnL, hs_sat26COXW);
                }
            };
            return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_sat26COXK, hs_sat26COXL);
        }
    };
    this.hs_showFloat.evaluate = function (hs_zddRealFloat26COpq, hs_x26COpr) {
        var hs_sat26COYA = new $hs.Thunk();
        hs_sat26COYA.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_formatRealFloat.hscall(hs_zddRealFloat26COpq, $hs.modules.GHCziFloat.hs_FFGeneric, $hs.modules.DataziMaybe.hs_Nothing, hs_x26COpr);
        };
        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26COYA);
    };
    hs_zdcenumFrom25upTd.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_numericEnumFrom.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat);
    };
    hs_zdcenumFromThen25upTe.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_numericEnumFromThen.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat);
    };
    hs_zdcenumFromTo25upTf.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_numericEnumFromTo.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat, $hs.modules.GHCziFloat.hs_zdfFractionalFloat);
    };
    hs_zdcenumFromThenTo25upTg.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_numericEnumFromThenTo.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat, $hs.modules.GHCziFloat.hs_zdfFractionalFloat);
    };
    hs_zdcsucc25upTh.evaluate = function (hs_x26COpz) {
        var hs_sat26COYB = new $hs.Data(1);
        hs_sat26COYB.data = [1 % 1];
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_x26COpz, hs_sat26COYB);
    };
    hs_zdcpred25upTl.evaluate = function (hs_x26COpD) {
        var hs_sat26COYC = new $hs.Data(1);
        hs_sat26COYC.data = [1 % 1];
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_x26COpD, hs_sat26COYC);
    };
    hs_sat26COYD.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_truncate.hscall($hs.modules.GHCziFloat.hs_zdfRealFracDouble, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_sat26COYE.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
    };
    hs_zdcfromEnum25upTp.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26COYE, hs_sat26COYD);
    };
    hs_zdcenumFrom125upTs.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_numericEnumFrom.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble);
    };
    hs_zdcenumFromThen125upTt.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_numericEnumFromThen.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble);
    };
    hs_zdcenumFromTo125upTu.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_numericEnumFromTo.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, $hs.modules.GHCziFloat.hs_zdfFractionalDouble);
    };
    hs_zdcenumFromThenTo125upTv.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_numericEnumFromThenTo.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, $hs.modules.GHCziFloat.hs_zdfFractionalDouble);
    };
    this.hs_zdfEnumDouble.data = [hs_zdcsucc25upTh, hs_zdcpred25upTl, $hs.modules.GHCziFloatziRealFracMethods.hs_int2Double, hs_zdcfromEnum25upTp, hs_zdcenumFrom125upTs, hs_zdcenumFromThen125upTt, hs_zdcenumFromTo125upTu, hs_zdcenumFromThenTo125upTv];
    hs_zdcsucc125upTw.evaluate = function (hs_x26COpO) {
        var hs_sat26COYF = new $hs.Data(1);
        hs_sat26COYF.data = [1 % 1];
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_x26COpO, hs_sat26COYF);
    };
    hs_zdcpred125upTA.evaluate = function (hs_x26COpS) {
        var hs_sat26COYG = new $hs.Data(1);
        hs_sat26COYG.data = [1 % 1];
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_x26COpS, hs_sat26COYG);
    };
    hs_sat26COYH.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_truncate.hscall($hs.modules.GHCziFloat.hs_zdfRealFracFloat, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_sat26COYI.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
    };
    hs_zdcfromEnum125upTE.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26COYI, hs_sat26COYH);
    };
    this.hs_zdfEnumFloat.data = [hs_zdcsucc125upTw, hs_zdcpred125upTA, $hs.modules.GHCziFloatziRealFracMethods.hs_int2Float, hs_zdcfromEnum125upTE, hs_zdcenumFrom25upTd, hs_zdcenumFromThen25upTe, hs_zdcenumFromTo25upTf, hs_zdcenumFromThenTo25upTg];
    this.hs_zddmscaleFloat.evaluate = function (hs_zddRealFloat26COq1, hs_k26COqv, hs_x26COq2) {
        var hs_ds26COq3 = new $hs.Thunk();
        hs_ds26COq3.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_floatRange.hscall(hs_zddRealFloat26COq1, hs_x26COq2);
        };
        var hs_ds126COq5 = new $hs.Thunk();
        hs_ds126COq5.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_decodeFloat.hscall(hs_zddRealFloat26COq1, hs_x26COq2);
        };
        var hs_sat26COYK = new $hs.Thunk();
        hs_sat26COYK.evaluateOnce = function () {
            var hs_sat26COYO = new $hs.Thunk();
            hs_sat26COYO.evaluateOnce = function () {
                var hs_sat26COYR = new $hs.Thunk();
                hs_sat26COYR.evaluateOnce = function () {
                    var hs_sat26COYT = new $hs.Thunk();
                    hs_sat26COYT.evaluateOnce = function () {
                        var hs_sat26COZ1 = new $hs.Thunk();
                        hs_sat26COZ1.evaluateOnce = function () {
                            return $hs.modules.GHCziFloat.hs_floatDigits.hscall(hs_zddRealFloat26COq1, hs_x26COq2);
                        };
                        var hs_sat26COZ0 = new $hs.Data(1);
                        hs_sat26COZ0.data = [4];
                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COZ0, hs_sat26COZ1);
                    };
                    var hs_sat26COYS = new $hs.Thunk();
                    hs_sat26COYS.evaluateOnce = function () {
                        var hs_sat26COYV = new $hs.Thunk();
                        hs_sat26COYV.evaluateOnce = function () {
                            var hs_wild26COYZ = hs_ds26COq3;
                            if (hs_ds26COq3.notEvaluated) {
                                hs_wild26COYZ = hs_ds26COq3.hscall();
                            }
                            var hs_l26COqo = hs_wild26COYZ.data[0];
                            if (hs_l26COqo.notEvaluated) {
                                return hs_l26COqo.hscall();
                            } else {
                                return hs_l26COqo;
                            }
                        };
                        var hs_sat26COYU = new $hs.Thunk();
                        hs_sat26COYU.evaluateOnce = function () {
                            var hs_wild26COYX = hs_ds26COq3;
                            if (hs_ds26COq3.notEvaluated) {
                                hs_wild26COYX = hs_ds26COq3.hscall();
                            }
                            var hs_h26COqj = hs_wild26COYX.data[1];
                            if (hs_h26COqj.notEvaluated) {
                                return hs_h26COqj.hscall();
                            } else {
                                return hs_h26COqj;
                            }
                        };
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COYU, hs_sat26COYV);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COYS, hs_sat26COYT);
                };
                return $hs.modules.GHCziFloat.hs_clamp.hscall(hs_sat26COYR, hs_k26COqv);
            };
            var hs_sat26COYN = new $hs.Thunk();
            hs_sat26COYN.evaluateOnce = function () {
                var hs_wild26COYQ = hs_ds126COq5;
                if (hs_ds126COq5.notEvaluated) {
                    hs_wild26COYQ = hs_ds126COq5.hscall();
                }
                var hs_n26COqe = hs_wild26COYQ.data[1];
                if (hs_n26COqe.notEvaluated) {
                    return hs_n26COqe.hscall();
                } else {
                    return hs_n26COqe;
                }
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26COYN, hs_sat26COYO);
        };
        var hs_sat26COYJ = new $hs.Thunk();
        hs_sat26COYJ.evaluateOnce = function () {
            var hs_wild26COYM = hs_ds126COq5;
            if (hs_ds126COq5.notEvaluated) {
                hs_wild26COYM = hs_ds126COq5.hscall();
            }
            var hs_m26COq9 = hs_wild26COYM.data[0];
            if (hs_m26COq9.notEvaluated) {
                return hs_m26COq9.hscall();
            } else {
                return hs_m26COq9;
            }
        };
        return $hs.modules.GHCziFloat.hs_encodeFloat.hscall(hs_zddRealFloat26COq1, hs_sat26COYJ, hs_sat26COYK);
    };
    this.hs_FFExponent.data = [];
    this.hs_FFFixed.data = [];
    this.hs_FFGeneric.data = [];
    this.hs_DZCFloating.evaluate = function (hs_eta1cW6ll, hs_eta1cW6lk, hs_eta1cW6lj, hs_eta1cW6li, hs_eta1cW6lh, hs_eta1cW6lg, hs_eta1cW6lf, hs_eta1cW6le, hs_eta1cW6ld, hs_eta1cW6lc, hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6ll, hs_eta1cW6lk, hs_eta1cW6lj, hs_eta1cW6li, hs_eta1cW6lh, hs_eta1cW6lg, hs_eta1cW6lf, hs_eta1cW6le, hs_eta1cW6ld, hs_eta1cW6lc, hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_DZCRealFloat.evaluate = function (hs_eta1cW6li, hs_eta1cW6lh, hs_eta1cW6lg, hs_eta1cW6lf, hs_eta1cW6le, hs_eta1cW6ld, hs_eta1cW6lc, hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6li, hs_eta1cW6lh, hs_eta1cW6lg, hs_eta1cW6lf, hs_eta1cW6le, hs_eta1cW6ld, hs_eta1cW6lc, hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
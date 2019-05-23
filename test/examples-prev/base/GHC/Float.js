
$hs.modules.GHCziFloat = new $hs.Module();
$hs.modules.GHCziFloat.dependencies = ["GHC.Prim", "GHC.Types", "GHC.Integer", "Data.Maybe", "GHC.Base", "GHC.Enum", "GHC.Num", "GHC.Real", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.Arr", "GHC.List", "Control.Exception.Base", "Data.Bits"];
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
    this.hs_int2Double = new $hs.Func(1);
    this.hs_double2Int = new $hs.Func(1);
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
    this.hs_int2Float = new $hs.Func(1);
    this.hs_float2Int = new $hs.Func(1);
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
    this.hs_expts = new $hs.Thunk();
    this.hs_expt = new $hs.Func(2);
    this.hs_integerLogBase = new $hs.Func(2);
    this.hs_fromRatzq = new $hs.Func(1);
    this.hs_clamp = new $hs.Func(2);
    this.hs_fromRat = new $hs.Func(2);
    this.hs_zdfShowFloat = new $hs.Data(1);
    this.hs_zdfNumFloat = new $hs.Data(1);
    this.hs_zdfRealFloat = new $hs.Data(1);
    this.hs_zdfFractionalFloat = new $hs.Data(1);
    this.hs_zdfFloatingFloat = new $hs.Data(1);
    this.hs_zdfRealFracFloat = new $hs.Data(1);
    this.hs_zdfRealFloatFloat = new $hs.Data(1);
    this.hs_floatToDigits = new $hs.Func(3);
    this.hs_formatRealFloat = new $hs.Func(4);
    this.hs_zdfShowDouble = new $hs.Data(1);
    this.hs_zdfNumDouble = new $hs.Data(1);
    this.hs_zdfRealDouble = new $hs.Data(1);
    this.hs_zdfFractionalDouble = new $hs.Data(1);
    this.hs_zdfFloatingDouble = new $hs.Data(1);
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
    this.hs_zdp1Floating.evaluate = function (hs_tpl26Dciw) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26Dciw);
    };
    this.hs_pi.notEvaluated = true;
    this.hs_pi.evaluate = function (hs_tpl26DciT) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26DciT);
    };
    this.hs_exp.notEvaluated = true;
    this.hs_exp.evaluate = function (hs_tpl26Dcjg) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26Dcjg);
    };
    this.hs_sqrt.notEvaluated = true;
    this.hs_sqrt.evaluate = function (hs_tpl26DcjD) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26DcjD);
    };
    this.hs_log.notEvaluated = true;
    this.hs_log.evaluate = function (hs_tpl26Dck0) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26Dck0);
    };
    this.hs_ztzt.notEvaluated = true;
    this.hs_ztzt.evaluate = function (hs_tpl26Dckn) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26Dckn);
    };
    this.hs_logBase.notEvaluated = true;
    this.hs_logBase.evaluate = function (hs_tpl26DckK) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26DckK);
    };
    this.hs_sin.notEvaluated = true;
    this.hs_sin.evaluate = function (hs_tpl26Dcl7) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26Dcl7);
    };
    this.hs_tan.notEvaluated = true;
    this.hs_tan.evaluate = function (hs_tpl26Dclu) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26Dclu);
    };
    this.hs_cos.notEvaluated = true;
    this.hs_cos.evaluate = function (hs_tpl26DclR) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26DclR);
    };
    this.hs_asin.notEvaluated = true;
    this.hs_asin.evaluate = function (hs_tpl26Dcme) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26Dcme);
    };
    this.hs_atan.notEvaluated = true;
    this.hs_atan.evaluate = function (hs_tpl26DcmB) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26DcmB);
    };
    this.hs_acos.notEvaluated = true;
    this.hs_acos.evaluate = function (hs_tpl26DcmY) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26DcmY);
    };
    this.hs_sinh.notEvaluated = true;
    this.hs_sinh.evaluate = function (hs_tpl26Dcnl) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26Dcnl);
    };
    this.hs_tanh.notEvaluated = true;
    this.hs_tanh.evaluate = function (hs_tpl26DcnI) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26DcnI);
    };
    this.hs_cosh.notEvaluated = true;
    this.hs_cosh.evaluate = function (hs_tpl26Dco5) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26Dco5);
    };
    this.hs_asinh.notEvaluated = true;
    this.hs_asinh.evaluate = function (hs_tpl26Dcos) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26Dcos);
    };
    this.hs_atanh.notEvaluated = true;
    this.hs_atanh.evaluate = function (hs_tpl26DcoP) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26DcoP);
    };
    this.hs_acosh.notEvaluated = true;
    this.hs_acosh.evaluate = function (hs_tpl26Dcpc) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26Dcpc);
    };
    this.hs_zdp1RealFloat.notEvaluated = true;
    this.hs_zdp1RealFloat.evaluate = function (hs_tpl26Dcpz) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26Dcpz);
    };
    this.hs_zdp2RealFloat.notEvaluated = true;
    this.hs_zdp2RealFloat.evaluate = function (hs_tpl26DcpT) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26DcpT);
    };
    this.hs_floatRadix.notEvaluated = true;
    this.hs_floatRadix.evaluate = function (hs_tpl26Dcqd) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26Dcqd);
    };
    this.hs_floatDigits.notEvaluated = true;
    this.hs_floatDigits.evaluate = function (hs_tpl26Dcqx) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26Dcqx);
    };
    this.hs_floatRange.notEvaluated = true;
    this.hs_floatRange.evaluate = function (hs_tpl26DcqR) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26DcqR);
    };
    this.hs_decodeFloat.notEvaluated = true;
    this.hs_decodeFloat.evaluate = function (hs_tpl26Dcrb) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26Dcrb);
    };
    this.hs_encodeFloat.notEvaluated = true;
    this.hs_encodeFloat.evaluate = function (hs_tpl26Dcrv) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26Dcrv);
    };
    this.hs_exponent.notEvaluated = true;
    this.hs_exponent.evaluate = function (hs_tpl26DcrP) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26DcrP);
    };
    this.hs_significand.notEvaluated = true;
    this.hs_significand.evaluate = function (hs_tpl26Dcs9) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26Dcs9);
    };
    this.hs_scaleFloat.notEvaluated = true;
    this.hs_scaleFloat.evaluate = function (hs_tpl26Dcst) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26Dcst);
    };
    this.hs_isNaN.notEvaluated = true;
    this.hs_isNaN.evaluate = function (hs_tpl26DcsN) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26DcsN);
    };
    this.hs_isInfinite.notEvaluated = true;
    this.hs_isInfinite.evaluate = function (hs_tpl26Dct7) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26Dct7);
    };
    this.hs_isDenormalizzed.notEvaluated = true;
    this.hs_isDenormalizzed.evaluate = function (hs_tpl26Dctr) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26Dctr);
    };
    this.hs_isNegativeZZero.notEvaluated = true;
    this.hs_isNegativeZZero.evaluate = function (hs_tpl26DctL) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26DctL);
    };
    this.hs_isIEEE.notEvaluated = true;
    this.hs_isIEEE.evaluate = function (hs_tpl26Dcu5) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26Dcu5);
    };
    this.hs_atan2.notEvaluated = true;
    this.hs_atan2.evaluate = function (hs_tpl26Dcup) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_tpl26Dcup);
    };
    this.hs_zddmatan2.notEvaluated = true;
    this.hs_zddmatan2.evaluate = function (hs_zddRealFloat26DcuM, hs_eta26Dcv5, hs_eta126DcuY) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddRealFloat26DcuM, hs_eta26Dcv5, hs_eta126DcuY);
    };
    this.hs_zddmsignificand.notEvaluated = true;
    this.hs_zddmsignificand.evaluate = function (hs_zddRealFloat26Dcw2, hs_x26Dcw3) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddRealFloat26Dcw2, hs_x26Dcw3);
    };
    this.hs_zddmexponent.notEvaluated = true;
    this.hs_zddmexponent.evaluate = function (hs_zddRealFloat26Dcwe, hs_x26Dcwf) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddRealFloat26Dcwe, hs_x26Dcwf);
    };
    this.hs_zddmtanh.notEvaluated = true;
    this.hs_zddmtanh.evaluate = function (hs_zddFloating226Dcww, hs_eta26Dcwy) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddFloating226Dcww, hs_eta26Dcwy);
    };
    this.hs_zddmtan.notEvaluated = true;
    this.hs_zddmtan.evaluate = function (hs_zddFloating226DcwD, hs_eta26DcwF) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddFloating226DcwD, hs_eta26DcwF);
    };
    this.hs_zddmlogBase.notEvaluated = true;
    this.hs_zddmlogBase.evaluate = function (hs_zddFloating226DcwL, hs_eta26DcwP, hs_eta126DcwN) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddFloating226DcwL, hs_eta26DcwP, hs_eta126DcwN);
    };
    this.hs_zddmztzt.notEvaluated = true;
    this.hs_zddmztzt.evaluate = function (hs_zddFloating226DcwU, hs_eta26DcwX, hs_eta126DcwZ) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddFloating226DcwU, hs_eta26DcwX, hs_eta126DcwZ);
    };
    this.hs_zddmsqrt.notEvaluated = true;
    this.hs_zddmsqrt.evaluate = function (hs_zddFloating226Dcx3, hs_eta26Dcx4) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddFloating226Dcx3, hs_eta26Dcx4);
    };
    this.hs_showSignedFloat.notEvaluated = true;
    this.hs_showSignedFloat.evaluate = function (hs_zddRealFloat26Dcxf, hs_eta26Dcxs, hs_eta126Dcxt, hs_eta226Dcxm) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddRealFloat26Dcxf, hs_eta26Dcxs, hs_eta126Dcxt, hs_eta226Dcxm);
    };
    this.hs_powerDouble.notEvaluated = true;
    this.hs_powerDouble.evaluate = function (hs_ds26DcxD, hs_ds126DcxG) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcxD, hs_ds126DcxG);
    };
    this.hs_tanhDouble.notEvaluated = true;
    this.hs_tanhDouble.evaluate = function (hs_ds26DcxN) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcxN);
    };
    this.hs_coshDouble.notEvaluated = true;
    this.hs_coshDouble.evaluate = function (hs_ds26DcxT) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcxT);
    };
    this.hs_sinhDouble.notEvaluated = true;
    this.hs_sinhDouble.evaluate = function (hs_ds26DcxZ) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcxZ);
    };
    this.hs_atanDouble.notEvaluated = true;
    this.hs_atanDouble.evaluate = function (hs_ds26Dcy5) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26Dcy5);
    };
    this.hs_acosDouble.notEvaluated = true;
    this.hs_acosDouble.evaluate = function (hs_ds26Dcyb) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26Dcyb);
    };
    this.hs_asinDouble.notEvaluated = true;
    this.hs_asinDouble.evaluate = function (hs_ds26Dcyi) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26Dcyi);
    };
    this.hs_tanDouble.notEvaluated = true;
    this.hs_tanDouble.evaluate = function (hs_ds26Dcyp) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26Dcyp);
    };
    this.hs_cosDouble.notEvaluated = true;
    this.hs_cosDouble.evaluate = function (hs_ds26Dcyv) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26Dcyv);
    };
    this.hs_sinDouble.notEvaluated = true;
    this.hs_sinDouble.evaluate = function (hs_ds26DcyB) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcyB);
    };
    this.hs_sqrtDouble.notEvaluated = true;
    this.hs_sqrtDouble.evaluate = function (hs_ds26DcyH) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcyH);
    };
    this.hs_logDouble.notEvaluated = true;
    this.hs_logDouble.evaluate = function (hs_ds26DcyN) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcyN);
    };
    this.hs_expDouble.notEvaluated = true;
    this.hs_expDouble.evaluate = function (hs_ds26DcyU) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcyU);
    };
    this.hs_float2Double.notEvaluated = true;
    this.hs_float2Double.evaluate = function (hs_ds26Dcz0) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26Dcz0);
    };
    this.hs_double2Float.notEvaluated = true;
    this.hs_double2Float.evaluate = function (hs_ds26Dcz6) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26Dcz6);
    };
    this.hs_int2Double.notEvaluated = true;
    this.hs_int2Double.evaluate = function (hs_ds26Dczc) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26Dczc);
    };
    this.hs_double2Int.notEvaluated = true;
    this.hs_double2Int.evaluate = function (hs_ds26Dczi) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26Dczi);
    };
    this.hs_leDouble.notEvaluated = true;
    this.hs_leDouble.evaluate = function (hs_ds26Dczp, hs_ds126Dczs) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26Dczp, hs_ds126Dczs);
    };
    this.hs_ltDouble.notEvaluated = true;
    this.hs_ltDouble.evaluate = function (hs_ds26Dczz, hs_ds126DczC) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26Dczz, hs_ds126DczC);
    };
    this.hs_neDouble.notEvaluated = true;
    this.hs_neDouble.evaluate = function (hs_ds26DczJ, hs_ds126DczM) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DczJ, hs_ds126DczM);
    };
    this.hs_eqDouble.notEvaluated = true;
    this.hs_eqDouble.evaluate = function (hs_ds26DczT, hs_ds126DczW) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DczT, hs_ds126DczW);
    };
    this.hs_geDouble.notEvaluated = true;
    this.hs_geDouble.evaluate = function (hs_ds26DcA3, hs_ds126DcA6) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcA3, hs_ds126DcA6);
    };
    this.hs_gtDouble.notEvaluated = true;
    this.hs_gtDouble.evaluate = function (hs_ds26DcAd, hs_ds126DcAg) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcAd, hs_ds126DcAg);
    };
    this.hs_negateDouble.notEvaluated = true;
    this.hs_negateDouble.evaluate = function (hs_ds26DcAm) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcAm);
    };
    this.hs_divideDouble.notEvaluated = true;
    this.hs_divideDouble.evaluate = function (hs_ds26DcAt, hs_ds126DcAw) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcAt, hs_ds126DcAw);
    };
    this.hs_timesDouble.notEvaluated = true;
    this.hs_timesDouble.evaluate = function (hs_ds26DcAF, hs_ds126DcAI) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcAF, hs_ds126DcAI);
    };
    this.hs_minusDouble.notEvaluated = true;
    this.hs_minusDouble.evaluate = function (hs_ds26DcAQ, hs_ds126DcAT) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcAQ, hs_ds126DcAT);
    };
    this.hs_plusDouble.notEvaluated = true;
    this.hs_plusDouble.evaluate = function (hs_ds26DcB1, hs_ds126DcB4) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcB1, hs_ds126DcB4);
    };
    this.hs_powerFloat.notEvaluated = true;
    this.hs_powerFloat.evaluate = function (hs_ds26DcBc, hs_ds126DcBf) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcBc, hs_ds126DcBf);
    };
    this.hs_tanhFloat.notEvaluated = true;
    this.hs_tanhFloat.evaluate = function (hs_ds26DcBm) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcBm);
    };
    this.hs_coshFloat.notEvaluated = true;
    this.hs_coshFloat.evaluate = function (hs_ds26DcBs) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcBs);
    };
    this.hs_sinhFloat.notEvaluated = true;
    this.hs_sinhFloat.evaluate = function (hs_ds26DcBy) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcBy);
    };
    this.hs_atanFloat.notEvaluated = true;
    this.hs_atanFloat.evaluate = function (hs_ds26DcBE) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcBE);
    };
    this.hs_acosFloat.notEvaluated = true;
    this.hs_acosFloat.evaluate = function (hs_ds26DcBK) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcBK);
    };
    this.hs_asinFloat.notEvaluated = true;
    this.hs_asinFloat.evaluate = function (hs_ds26DcBR) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcBR);
    };
    this.hs_tanFloat.notEvaluated = true;
    this.hs_tanFloat.evaluate = function (hs_ds26DcBY) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcBY);
    };
    this.hs_cosFloat.notEvaluated = true;
    this.hs_cosFloat.evaluate = function (hs_ds26DcC4) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcC4);
    };
    this.hs_sinFloat.notEvaluated = true;
    this.hs_sinFloat.evaluate = function (hs_ds26DcCa) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcCa);
    };
    this.hs_sqrtFloat.notEvaluated = true;
    this.hs_sqrtFloat.evaluate = function (hs_ds26DcCg) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcCg);
    };
    this.hs_logFloat.notEvaluated = true;
    this.hs_logFloat.evaluate = function (hs_ds26DcCm) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcCm);
    };
    this.hs_expFloat.notEvaluated = true;
    this.hs_expFloat.evaluate = function (hs_ds26DcCt) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcCt);
    };
    this.hs_int2Float.notEvaluated = true;
    this.hs_int2Float.evaluate = function (hs_ds26DcCz) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcCz);
    };
    this.hs_float2Int.notEvaluated = true;
    this.hs_float2Int.evaluate = function (hs_ds26DcCF) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcCF);
    };
    this.hs_leFloat.notEvaluated = true;
    this.hs_leFloat.evaluate = function (hs_ds26DcCM, hs_ds126DcCP) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcCM, hs_ds126DcCP);
    };
    this.hs_ltFloat.notEvaluated = true;
    this.hs_ltFloat.evaluate = function (hs_ds26DcCW, hs_ds126DcCZ) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcCW, hs_ds126DcCZ);
    };
    this.hs_neFloat.notEvaluated = true;
    this.hs_neFloat.evaluate = function (hs_ds26DcD6, hs_ds126DcD9) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcD6, hs_ds126DcD9);
    };
    this.hs_eqFloat.notEvaluated = true;
    this.hs_eqFloat.evaluate = function (hs_ds26DcDg, hs_ds126DcDj) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcDg, hs_ds126DcDj);
    };
    this.hs_geFloat.notEvaluated = true;
    this.hs_geFloat.evaluate = function (hs_ds26DcDq, hs_ds126DcDt) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcDq, hs_ds126DcDt);
    };
    this.hs_gtFloat.notEvaluated = true;
    this.hs_gtFloat.evaluate = function (hs_ds26DcDA, hs_ds126DcDD) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcDA, hs_ds126DcDD);
    };
    this.hs_negateFloat.notEvaluated = true;
    this.hs_negateFloat.evaluate = function (hs_ds26DcDJ) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcDJ);
    };
    this.hs_divideFloat.notEvaluated = true;
    this.hs_divideFloat.evaluate = function (hs_ds26DcDQ, hs_ds126DcDT) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcDQ, hs_ds126DcDT);
    };
    this.hs_timesFloat.notEvaluated = true;
    this.hs_timesFloat.evaluate = function (hs_ds26DcE2, hs_ds126DcE5) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcE2, hs_ds126DcE5);
    };
    this.hs_minusFloat.notEvaluated = true;
    this.hs_minusFloat.evaluate = function (hs_ds26DcEd, hs_ds126DcEg) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcEd, hs_ds126DcEg);
    };
    this.hs_plusFloat.notEvaluated = true;
    this.hs_plusFloat.evaluate = function (hs_ds26DcEo, hs_ds126DcEr) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcEo, hs_ds126DcEr);
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
    this.hs_isFloatNaN.evaluate = function (hs_ds26DcEy) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcEy);
    };
    this.hs_isFloatInfinite.notEvaluated = true;
    this.hs_isFloatInfinite.evaluate = function (hs_ds26DcEJ) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcEJ);
    };
    this.hs_isFloatDenormalizzed.notEvaluated = true;
    this.hs_isFloatDenormalizzed.evaluate = function (hs_ds26DcEU) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcEU);
    };
    this.hs_isFloatNegativeZZero.notEvaluated = true;
    this.hs_isFloatNegativeZZero.evaluate = function (hs_ds26DcF5) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcF5);
    };
    this.hs_isDoubleNaN.notEvaluated = true;
    this.hs_isDoubleNaN.evaluate = function (hs_ds26DcFg) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcFg);
    };
    this.hs_isDoubleInfinite.notEvaluated = true;
    this.hs_isDoubleInfinite.evaluate = function (hs_ds26DcFr) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcFr);
    };
    this.hs_isDoubleDenormalizzed.notEvaluated = true;
    this.hs_isDoubleDenormalizzed.evaluate = function (hs_ds26DcFC) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcFC);
    };
    this.hs_isDoubleNegativeZZero.notEvaluated = true;
    this.hs_isDoubleNegativeZZero.evaluate = function (hs_ds26DcFN) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_ds26DcFN);
    };
    this.hs_roundTo.notEvaluated = true;
    this.hs_roundTo.evaluate = function (hs_base26DcMA, hs_d26DcNA, hs_is26DcNB) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_base26DcMA, hs_d26DcNA, hs_is26DcNB);
    };
    this.hs_scaleRat.notEvaluated = true;
    this.hs_scaleRat.evaluate = function (hs_b26DcO6, hs_minExp26DcNZ, hs_xMin26DcO4, hs_xMax26DcO2, hs_p26DcNY, hs_x26DcO1) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_b26DcO6, hs_minExp26DcNZ, hs_xMin26DcO4, hs_xMax26DcO2, hs_p26DcNY, hs_x26DcO1);
    };
    this.hs_expts.evaluateOnce = function () {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_expt.notEvaluated = true;
    this.hs_expt.evaluate = function (hs_base26DcOv, hs_n26DcOy) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_base26DcOv, hs_n26DcOy);
    };
    this.hs_integerLogBase.notEvaluated = true;
    this.hs_integerLogBase.evaluate = function (hs_b26DcOJ, hs_i26DcOT) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_b26DcOJ, hs_i26DcOT);
    };
    this.hs_fromRatzq.notEvaluated = true;
    this.hs_fromRatzq.evaluate = function (hs_zddRealFloat26DcPb) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddRealFloat26DcPb);
    };
    this.hs_clamp.notEvaluated = true;
    this.hs_clamp.evaluate = function (hs_bd26DcPY, hs_k26DcQ0) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_bd26DcPY, hs_k26DcQ0);
    };
    this.hs_fromRat.notEvaluated = true;
    this.hs_fromRat.evaluate = function (hs_zddRealFloat26DcSV, hs_eta26DcT1) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddRealFloat26DcSV, hs_eta26DcT1);
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
    this.hs_zdfRealFloat.notEvaluated = true;
    this.hs_zdfRealFloat.evaluate = function () {
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
    this.hs_floatToDigits.evaluate = function (hs_zddRealFloat26DcYo, hs_eta26DcYH, hs_eta126DcYv) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddRealFloat26DcYo, hs_eta26DcYH, hs_eta126DcYv);
    };
    this.hs_formatRealFloat.notEvaluated = true;
    this.hs_formatRealFloat.evaluate = function (hs_zddRealFloat26Dd2W, hs_eta26Dd7u, hs_eta126Dd3d, hs_eta226Dd7l) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddRealFloat26Dd2W, hs_eta26Dd7u, hs_eta126Dd3d, hs_eta226Dd7l);
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
    this.hs_zdfRealDouble.notEvaluated = true;
    this.hs_zdfRealDouble.evaluate = function () {
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
    this.hs_showFloat.evaluate = function (hs_zddRealFloat26DdgJ, hs_x26DdgK) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddRealFloat26DdgJ, hs_x26DdgK);
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
    this.hs_zddmscaleFloat.evaluate = function (hs_zddRealFloat26Ddhy, hs_k26Ddi4, hs_x26Ddhz) {
        $hs.modules.GHCziFloat.loadDependencies();
        return this.evaluate(hs_zddRealFloat26Ddhy, hs_k26Ddi4, hs_x26Ddhz);
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
    this.hs_int2Double.notEvaluated = false;
    this.hs_double2Int.notEvaluated = false;
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
    this.hs_int2Float.notEvaluated = false;
    this.hs_float2Int.notEvaluated = false;
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
    this.hs_clamp.notEvaluated = false;
    this.hs_fromRat.notEvaluated = false;
    this.hs_zdfShowFloat.notEvaluated = false;
    this.hs_zdfShowFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfNumFloat.notEvaluated = false;
    this.hs_zdfNumFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfRealFloat.notEvaluated = false;
    this.hs_zdfRealFloat.evaluate = function () {
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
    this.hs_zdfRealDouble.notEvaluated = false;
    this.hs_zdfRealDouble.evaluate = function () {
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
    var hs_zddShow25uO9I = new $hs.Thunk();
    var hs_zddEq25uO9K = new $hs.Thunk();
    var hs_zddNum25uO9M = new $hs.Thunk();
    var hs_zdcfromInteger25uO9O = new $hs.Func(1);
    var hs_zdcabs25uO9U = new $hs.Func(1);
    var hs_zdcnegate25uOa0 = new $hs.Func(1);
    var hs_zdczm25uOa4 = new $hs.Func(2);
    var hs_zdczt25uOaa = new $hs.Func(2);
    var hs_zdczp25uOag = new $hs.Func(2);
    var hs_zddFractional25uOam = new $hs.Thunk();
    var hs_zdczs25uOao = new $hs.Func(2);
    var hs_zdccosh25uOau = new $hs.Func(1);
    var hs_zdctanh25uOay = new $hs.Func(1);
    var hs_zdcsinh25uOaC = new $hs.Func(1);
    var hs_zdcacos25uOaG = new $hs.Func(1);
    var hs_zdcatan25uOaK = new $hs.Func(1);
    var hs_zdcasin25uOaO = new $hs.Func(1);
    var hs_zdccos25uOaS = new $hs.Func(1);
    var hs_zdctan25uOaW = new $hs.Func(1);
    var hs_zdcsin25uOb0 = new $hs.Func(1);
    var hs_zdcztzt25uOb4 = new $hs.Func(2);
    var hs_zdclog25uOba = new $hs.Func(1);
    var hs_zdcsqrt25uObe = new $hs.Func(1);
    var hs_zdcexp25uObi = new $hs.Func(1);
    var hs_zdcpi25uObm = new $hs.Data(1);
    var hs_zdcisIEEE25uObo = new $hs.Func(1);
    var hs_zdcisNegativeZZero25uObs = new $hs.Func(1);
    var hs_zdcisDenormalizzed25uObH = new $hs.Func(1);
    var hs_zdcisInfinite25uObW = new $hs.Func(1);
    var hs_zdcisNaN25uOcb = new $hs.Func(1);
    var hs_zdcencodeFloat25uOcq = new $hs.Func(2);
    var hs_zdcdecodeFloat25uOcB = new $hs.Func(1);
    var hs_zdcfloatRange25uOcP = new $hs.Func(1);
    var hs_zdcfloatDigits25uOcW = new $hs.Func(1);
    var hs_zdcfloatRadix25uOd0 = new $hs.Func(1);
    var hs_zdcfromInteger125uOd4 = new $hs.Func(1);
    var hs_zdcabs125uOda = new $hs.Func(1);
    var hs_zdcnegate125uOdg = new $hs.Func(1);
    var hs_zdczm125uOdk = new $hs.Func(2);
    var hs_zdczt125uOdq = new $hs.Func(2);
    var hs_zdczp125uOdw = new $hs.Func(2);
    var hs_zdczs125uOdC = new $hs.Func(2);
    var hs_zdccosh125uOdI = new $hs.Func(1);
    var hs_zdctanh125uOdM = new $hs.Func(1);
    var hs_zdcsinh125uOdQ = new $hs.Func(1);
    var hs_zdcacos125uOdU = new $hs.Func(1);
    var hs_zdcatan125uOdY = new $hs.Func(1);
    var hs_zdcasin125uOe2 = new $hs.Func(1);
    var hs_zdccos125uOe6 = new $hs.Func(1);
    var hs_zdctan125uOea = new $hs.Func(1);
    var hs_zdcsin125uOee = new $hs.Func(1);
    var hs_zdcztzt125uOei = new $hs.Func(2);
    var hs_zdclog125uOeo = new $hs.Func(1);
    var hs_zdcsqrt125uOes = new $hs.Func(1);
    var hs_zdcexp125uOew = new $hs.Func(1);
    var hs_zdcpi125uOeA = new $hs.Data(1);
    var hs_zdcisIEEE125uOeC = new $hs.Func(1);
    var hs_zdcisNegativeZZero125uOeG = new $hs.Func(1);
    var hs_zdcisDenormalizzed125uOeV = new $hs.Func(1);
    var hs_zdcisInfinite125uOfa = new $hs.Func(1);
    var hs_zdcisNaN125uOfp = new $hs.Func(1);
    var hs_zdcencodeFloat125uOfE = new $hs.Func(2);
    var hs_zdcdecodeFloat125uOfP = new $hs.Func(1);
    var hs_zdcfloatRange125uOg2 = new $hs.Func(1);
    var hs_zdcfloatDigits125uOg9 = new $hs.Func(1);
    var hs_zdcfloatRadix125uOgd = new $hs.Func(1);
    var hs_zddOrd25uOhB = new $hs.Thunk();
    var hs_sat26DdxK = new $hs.Thunk();
    var hs_sat26DdxL = new $hs.Data(1);
    var hs_zddReal25uOjN = new $hs.Thunk();
    var hs_zddNum125uOjP = new $hs.Thunk();
    var hs_zddReal125uOjR = new $hs.Thunk();
    var hs_zddNum225uOjT = new $hs.Thunk();
    var hs_zddReal225uOjV = new $hs.Thunk();
    var hs_zddNum325uOjX = new $hs.Thunk();
    var hs_zddReal325uOjZ = new $hs.Thunk();
    var hs_zddNum425uOk1 = new $hs.Thunk();
    var hs_zddReal425uOk3 = new $hs.Thunk();
    var hs_zddNum525uOk5 = new $hs.Thunk();
    var hs_zddReal525uOk7 = new $hs.Thunk();
    var hs_zddNum625uOk9 = new $hs.Thunk();
    var hs_zddReal625uOkb = new $hs.Thunk();
    var hs_zddNum725uOkd = new $hs.Thunk();
    var hs_zddReal725uOkf = new $hs.Thunk();
    var hs_zddNum825uOkh = new $hs.Thunk();
    var hs_sat26DdyB = new $hs.Thunk();
    var hs_sat26DdyC = new $hs.Thunk();
    var hs_zdcshowList25uOkj = new $hs.Thunk();
    var hs_zdcshow25uOkl = new $hs.Thunk();
    var hs_zdcsignum25uOkn = new $hs.Func(1);
    var hs_zdcfloor25uOkp = new $hs.Func(2);
    var hs_zdcceiling25uOkr = new $hs.Func(2);
    var hs_zdctruncate25uOkt = new $hs.Func(2);
    var hs_zdcacosh25uOkv = new $hs.Func(1);
    var hs_zdcatanh25uOkx = new $hs.Func(1);
    var hs_zdcasinh25uOkz = new $hs.Func(1);
    var hs_zdcfromRational25uOkB = new $hs.Func(1);
    var hs_zdcrecip25uOkD = new $hs.Func(1);
    var hs_zdclogBase25uOkF = new $hs.Func(2);
    var hs_zdcscaleFloat25uOkH = new $hs.Func(2);
    var hs_zdcsignificand25uOkJ = new $hs.Func(1);
    var hs_zdcexponent25uOkL = new $hs.Func(1);
    var hs_zdctoRational25uOkN = new $hs.Func(1);
    var hs_zdcshowsPrec25uOkP = new $hs.Func(2);
    var hs_zdcround25uOkR = new $hs.Func(2);
    var hs_zdcproperFraction25uOkT = new $hs.Func(2);
    var hs_zddRealFrac25uOkV = new $hs.Thunk();
    var hs_zddReal825uOkX = new $hs.Thunk();
    var hs_zddNum925uOkZ = new $hs.Thunk();
    var hs_zddEq125uOl1 = new $hs.Thunk();
    var hs_zddOrd125uOl3 = new $hs.Thunk();
    var hs_zddFractional125uOl5 = new $hs.Thunk();
    var hs_zddFloating25uOl7 = new $hs.Thunk();
    var hs_zdcatan225uOl9 = new $hs.Func(2);
    var hs_zdcround125uOlb = new $hs.Func(1);
    var hs_zdcround225uOld = new $hs.Func(1);
    var hs_zddRealFrac125uOlf = new $hs.Thunk();
    var hs_zddReal925uOlh = new $hs.Thunk();
    var hs_zddNum1025uOlj = new $hs.Thunk();
    var hs_zddFractional225uOll = new $hs.Thunk();
    var hs_fromRat125uOln = new $hs.Func(1);
    var hs_zdcproperFraction125uOlp = new $hs.Func(1);
    var hs_zdcproperFraction225uOlr = new $hs.Func(1);
    var hs_zdcshowList125uOlt = new $hs.Thunk();
    var hs_zdcshow125uOlv = new $hs.Thunk();
    var hs_zdcsignum125uOlx = new $hs.Func(1);
    var hs_zdcfloor125uOlz = new $hs.Func(2);
    var hs_zdcceiling125uOlB = new $hs.Func(2);
    var hs_zdctruncate125uOlD = new $hs.Func(2);
    var hs_zdcacosh125uOlF = new $hs.Func(1);
    var hs_zdcatanh125uOlH = new $hs.Func(1);
    var hs_zdcasinh125uOlJ = new $hs.Func(1);
    var hs_zdclogBase125uOlL = new $hs.Func(2);
    var hs_zdcfromRational125uOlN = new $hs.Func(1);
    var hs_zdcrecip125uOlP = new $hs.Func(1);
    var hs_zdcscaleFloat125uOlR = new $hs.Func(2);
    var hs_zdcsignificand125uOlT = new $hs.Func(1);
    var hs_zdcexponent125uOlV = new $hs.Func(1);
    var hs_zdctoRational125uOlX = new $hs.Func(1);
    var hs_zdcshowsPrec125uOlZ = new $hs.Func(2);
    var hs_zdcround325uOm1 = new $hs.Func(2);
    var hs_zdcproperFraction325uOm3 = new $hs.Func(2);
    var hs_zddRealFrac225uOm5 = new $hs.Thunk();
    var hs_zddReal1025uOm7 = new $hs.Thunk();
    var hs_zddNum1125uOm9 = new $hs.Thunk();
    var hs_zddEq225uOmb = new $hs.Thunk();
    var hs_zddOrd225uOmd = new $hs.Thunk();
    var hs_zddFractional325uOmf = new $hs.Thunk();
    var hs_zddFloating125uOmh = new $hs.Thunk();
    var hs_zdcatan325uOmj = new $hs.Func(2);
    var hs_zddRealFrac325uOml = new $hs.Thunk();
    var hs_zddReal1125uOmn = new $hs.Thunk();
    var hs_zddNum1225uOmp = new $hs.Thunk();
    var hs_zddFractional425uOmr = new $hs.Thunk();
    var hs_zdcround425uOmt = new $hs.Func(1);
    var hs_zdcround525uOmv = new $hs.Func(1);
    var hs_fromRat225uOmx = new $hs.Func(1);
    var hs_zdcproperFraction425uOmz = new $hs.Func(1);
    var hs_zdcproperFraction525uOmB = new $hs.Func(1);
    var hs_sat26DdN7 = new $hs.Thunk();
    var hs_sat26DdN8 = new $hs.Thunk();
    var hs_zdcfromEnum25uOKx = new $hs.Thunk();
    var hs_zdcsucc25uOKB = new $hs.Func(1);
    var hs_zdcpred25uOKG = new $hs.Func(1);
    var hs_sat26DdNb = new $hs.Thunk();
    var hs_sat26DdNc = new $hs.Thunk();
    var hs_zdcfromEnum125uOKL = new $hs.Thunk();
    var hs_zdcenumFrom25uOKP = new $hs.Thunk();
    var hs_zdcenumFromThen25uOKR = new $hs.Thunk();
    var hs_zdcenumFromTo25uOKT = new $hs.Thunk();
    var hs_zdcenumFromThenTo25uOKV = new $hs.Thunk();
    var hs_zdcsucc125uOKX = new $hs.Func(1);
    var hs_zdcpred125uOL2 = new $hs.Func(1);
    var hs_zdcenumFrom125uOL7 = new $hs.Thunk();
    var hs_zdcenumFromThen125uOL9 = new $hs.Thunk();
    var hs_zdcenumFromTo125uOLb = new $hs.Thunk();
    var hs_zdcenumFromThenTo125uOLd = new $hs.Thunk();
    this.hs_zdp1Floating.evaluate = function (hs_tpl26Dciw) {
        var hs_tpl26Ddi8 = hs_tpl26Dciw;
        if (hs_tpl26Dciw.notEvaluated) {
            hs_tpl26Ddi8 = hs_tpl26Dciw.hscall();
        }
        var hs_tpl26DciR = hs_tpl26Ddi8.data[0];
        if (hs_tpl26DciR.notEvaluated) {
            return hs_tpl26DciR.hscall();
        } else {
            return hs_tpl26DciR;
        }
    };
    this.hs_pi.evaluate = function (hs_tpl26DciT) {
        var hs_tpl26Ddis = hs_tpl26DciT;
        if (hs_tpl26DciT.notEvaluated) {
            hs_tpl26Ddis = hs_tpl26DciT.hscall();
        }
        var hs_tpl26Dcje = hs_tpl26Ddis.data[1];
        if (hs_tpl26Dcje.notEvaluated) {
            return hs_tpl26Dcje.hscall();
        } else {
            return hs_tpl26Dcje;
        }
    };
    this.hs_exp.evaluate = function (hs_tpl26Dcjg) {
        var hs_tpl26DdiL = hs_tpl26Dcjg;
        if (hs_tpl26Dcjg.notEvaluated) {
            hs_tpl26DdiL = hs_tpl26Dcjg.hscall();
        }
        var hs_tpl26DcjB = hs_tpl26DdiL.data[2];
        if (hs_tpl26DcjB.notEvaluated) {
            return hs_tpl26DcjB.hscall();
        } else {
            return hs_tpl26DcjB;
        }
    };
    this.hs_sqrt.evaluate = function (hs_tpl26DcjD) {
        var hs_tpl26Ddj4 = hs_tpl26DcjD;
        if (hs_tpl26DcjD.notEvaluated) {
            hs_tpl26Ddj4 = hs_tpl26DcjD.hscall();
        }
        var hs_tpl26DcjY = hs_tpl26Ddj4.data[3];
        if (hs_tpl26DcjY.notEvaluated) {
            return hs_tpl26DcjY.hscall();
        } else {
            return hs_tpl26DcjY;
        }
    };
    this.hs_log.evaluate = function (hs_tpl26Dck0) {
        var hs_tpl26Ddjn = hs_tpl26Dck0;
        if (hs_tpl26Dck0.notEvaluated) {
            hs_tpl26Ddjn = hs_tpl26Dck0.hscall();
        }
        var hs_tpl26Dckl = hs_tpl26Ddjn.data[4];
        if (hs_tpl26Dckl.notEvaluated) {
            return hs_tpl26Dckl.hscall();
        } else {
            return hs_tpl26Dckl;
        }
    };
    this.hs_ztzt.evaluate = function (hs_tpl26Dckn) {
        var hs_tpl26DdjG = hs_tpl26Dckn;
        if (hs_tpl26Dckn.notEvaluated) {
            hs_tpl26DdjG = hs_tpl26Dckn.hscall();
        }
        var hs_tpl26DckI = hs_tpl26DdjG.data[5];
        if (hs_tpl26DckI.notEvaluated) {
            return hs_tpl26DckI.hscall();
        } else {
            return hs_tpl26DckI;
        }
    };
    this.hs_logBase.evaluate = function (hs_tpl26DckK) {
        var hs_tpl26DdjZ = hs_tpl26DckK;
        if (hs_tpl26DckK.notEvaluated) {
            hs_tpl26DdjZ = hs_tpl26DckK.hscall();
        }
        var hs_tpl26Dcl5 = hs_tpl26DdjZ.data[6];
        if (hs_tpl26Dcl5.notEvaluated) {
            return hs_tpl26Dcl5.hscall();
        } else {
            return hs_tpl26Dcl5;
        }
    };
    this.hs_sin.evaluate = function (hs_tpl26Dcl7) {
        var hs_tpl26Ddki = hs_tpl26Dcl7;
        if (hs_tpl26Dcl7.notEvaluated) {
            hs_tpl26Ddki = hs_tpl26Dcl7.hscall();
        }
        var hs_tpl26Dcls = hs_tpl26Ddki.data[7];
        if (hs_tpl26Dcls.notEvaluated) {
            return hs_tpl26Dcls.hscall();
        } else {
            return hs_tpl26Dcls;
        }
    };
    this.hs_tan.evaluate = function (hs_tpl26Dclu) {
        var hs_tpl26DdkB = hs_tpl26Dclu;
        if (hs_tpl26Dclu.notEvaluated) {
            hs_tpl26DdkB = hs_tpl26Dclu.hscall();
        }
        var hs_tpl26DclP = hs_tpl26DdkB.data[8];
        if (hs_tpl26DclP.notEvaluated) {
            return hs_tpl26DclP.hscall();
        } else {
            return hs_tpl26DclP;
        }
    };
    this.hs_cos.evaluate = function (hs_tpl26DclR) {
        var hs_tpl26DdkU = hs_tpl26DclR;
        if (hs_tpl26DclR.notEvaluated) {
            hs_tpl26DdkU = hs_tpl26DclR.hscall();
        }
        var hs_tpl26Dcmc = hs_tpl26DdkU.data[9];
        if (hs_tpl26Dcmc.notEvaluated) {
            return hs_tpl26Dcmc.hscall();
        } else {
            return hs_tpl26Dcmc;
        }
    };
    this.hs_asin.evaluate = function (hs_tpl26Dcme) {
        var hs_tpl26Ddld = hs_tpl26Dcme;
        if (hs_tpl26Dcme.notEvaluated) {
            hs_tpl26Ddld = hs_tpl26Dcme.hscall();
        }
        var hs_tpl26Dcmz = hs_tpl26Ddld.data[10];
        if (hs_tpl26Dcmz.notEvaluated) {
            return hs_tpl26Dcmz.hscall();
        } else {
            return hs_tpl26Dcmz;
        }
    };
    this.hs_atan.evaluate = function (hs_tpl26DcmB) {
        var hs_tpl26Ddlw = hs_tpl26DcmB;
        if (hs_tpl26DcmB.notEvaluated) {
            hs_tpl26Ddlw = hs_tpl26DcmB.hscall();
        }
        var hs_tpl26DcmW = hs_tpl26Ddlw.data[11];
        if (hs_tpl26DcmW.notEvaluated) {
            return hs_tpl26DcmW.hscall();
        } else {
            return hs_tpl26DcmW;
        }
    };
    this.hs_acos.evaluate = function (hs_tpl26DcmY) {
        var hs_tpl26DdlP = hs_tpl26DcmY;
        if (hs_tpl26DcmY.notEvaluated) {
            hs_tpl26DdlP = hs_tpl26DcmY.hscall();
        }
        var hs_tpl26Dcnj = hs_tpl26DdlP.data[12];
        if (hs_tpl26Dcnj.notEvaluated) {
            return hs_tpl26Dcnj.hscall();
        } else {
            return hs_tpl26Dcnj;
        }
    };
    this.hs_sinh.evaluate = function (hs_tpl26Dcnl) {
        var hs_tpl26Ddm8 = hs_tpl26Dcnl;
        if (hs_tpl26Dcnl.notEvaluated) {
            hs_tpl26Ddm8 = hs_tpl26Dcnl.hscall();
        }
        var hs_tpl26DcnG = hs_tpl26Ddm8.data[13];
        if (hs_tpl26DcnG.notEvaluated) {
            return hs_tpl26DcnG.hscall();
        } else {
            return hs_tpl26DcnG;
        }
    };
    this.hs_tanh.evaluate = function (hs_tpl26DcnI) {
        var hs_tpl26Ddmr = hs_tpl26DcnI;
        if (hs_tpl26DcnI.notEvaluated) {
            hs_tpl26Ddmr = hs_tpl26DcnI.hscall();
        }
        var hs_tpl26Dco3 = hs_tpl26Ddmr.data[14];
        if (hs_tpl26Dco3.notEvaluated) {
            return hs_tpl26Dco3.hscall();
        } else {
            return hs_tpl26Dco3;
        }
    };
    this.hs_cosh.evaluate = function (hs_tpl26Dco5) {
        var hs_tpl26DdmK = hs_tpl26Dco5;
        if (hs_tpl26Dco5.notEvaluated) {
            hs_tpl26DdmK = hs_tpl26Dco5.hscall();
        }
        var hs_tpl26Dcoq = hs_tpl26DdmK.data[15];
        if (hs_tpl26Dcoq.notEvaluated) {
            return hs_tpl26Dcoq.hscall();
        } else {
            return hs_tpl26Dcoq;
        }
    };
    this.hs_asinh.evaluate = function (hs_tpl26Dcos) {
        var hs_tpl26Ddn3 = hs_tpl26Dcos;
        if (hs_tpl26Dcos.notEvaluated) {
            hs_tpl26Ddn3 = hs_tpl26Dcos.hscall();
        }
        var hs_tpl26DcoN = hs_tpl26Ddn3.data[16];
        if (hs_tpl26DcoN.notEvaluated) {
            return hs_tpl26DcoN.hscall();
        } else {
            return hs_tpl26DcoN;
        }
    };
    this.hs_atanh.evaluate = function (hs_tpl26DcoP) {
        var hs_tpl26Ddnm = hs_tpl26DcoP;
        if (hs_tpl26DcoP.notEvaluated) {
            hs_tpl26Ddnm = hs_tpl26DcoP.hscall();
        }
        var hs_tpl26Dcpa = hs_tpl26Ddnm.data[17];
        if (hs_tpl26Dcpa.notEvaluated) {
            return hs_tpl26Dcpa.hscall();
        } else {
            return hs_tpl26Dcpa;
        }
    };
    this.hs_acosh.evaluate = function (hs_tpl26Dcpc) {
        var hs_tpl26DdnF = hs_tpl26Dcpc;
        if (hs_tpl26Dcpc.notEvaluated) {
            hs_tpl26DdnF = hs_tpl26Dcpc.hscall();
        }
        var hs_tpl26Dcpx = hs_tpl26DdnF.data[18];
        if (hs_tpl26Dcpx.notEvaluated) {
            return hs_tpl26Dcpx.hscall();
        } else {
            return hs_tpl26Dcpx;
        }
    };
    this.hs_zdp1RealFloat.evaluate = function (hs_tpl26Dcpz) {
        var hs_tpl26DdnX = hs_tpl26Dcpz;
        if (hs_tpl26Dcpz.notEvaluated) {
            hs_tpl26DdnX = hs_tpl26Dcpz.hscall();
        }
        var hs_tpl26DcpR = hs_tpl26DdnX.data[0];
        if (hs_tpl26DcpR.notEvaluated) {
            return hs_tpl26DcpR.hscall();
        } else {
            return hs_tpl26DcpR;
        }
    };
    this.hs_zdp2RealFloat.evaluate = function (hs_tpl26DcpT) {
        var hs_tpl26Ddoe = hs_tpl26DcpT;
        if (hs_tpl26DcpT.notEvaluated) {
            hs_tpl26Ddoe = hs_tpl26DcpT.hscall();
        }
        var hs_tpl26Dcqb = hs_tpl26Ddoe.data[1];
        if (hs_tpl26Dcqb.notEvaluated) {
            return hs_tpl26Dcqb.hscall();
        } else {
            return hs_tpl26Dcqb;
        }
    };
    this.hs_floatRadix.evaluate = function (hs_tpl26Dcqd) {
        var hs_tpl26Ddou = hs_tpl26Dcqd;
        if (hs_tpl26Dcqd.notEvaluated) {
            hs_tpl26Ddou = hs_tpl26Dcqd.hscall();
        }
        var hs_tpl26Dcqv = hs_tpl26Ddou.data[2];
        if (hs_tpl26Dcqv.notEvaluated) {
            return hs_tpl26Dcqv.hscall();
        } else {
            return hs_tpl26Dcqv;
        }
    };
    this.hs_floatDigits.evaluate = function (hs_tpl26Dcqx) {
        var hs_tpl26DdoK = hs_tpl26Dcqx;
        if (hs_tpl26Dcqx.notEvaluated) {
            hs_tpl26DdoK = hs_tpl26Dcqx.hscall();
        }
        var hs_tpl26DcqP = hs_tpl26DdoK.data[3];
        if (hs_tpl26DcqP.notEvaluated) {
            return hs_tpl26DcqP.hscall();
        } else {
            return hs_tpl26DcqP;
        }
    };
    this.hs_floatRange.evaluate = function (hs_tpl26DcqR) {
        var hs_tpl26Ddp0 = hs_tpl26DcqR;
        if (hs_tpl26DcqR.notEvaluated) {
            hs_tpl26Ddp0 = hs_tpl26DcqR.hscall();
        }
        var hs_tpl26Dcr9 = hs_tpl26Ddp0.data[4];
        if (hs_tpl26Dcr9.notEvaluated) {
            return hs_tpl26Dcr9.hscall();
        } else {
            return hs_tpl26Dcr9;
        }
    };
    this.hs_decodeFloat.evaluate = function (hs_tpl26Dcrb) {
        var hs_tpl26Ddpg = hs_tpl26Dcrb;
        if (hs_tpl26Dcrb.notEvaluated) {
            hs_tpl26Ddpg = hs_tpl26Dcrb.hscall();
        }
        var hs_tpl26Dcrt = hs_tpl26Ddpg.data[5];
        if (hs_tpl26Dcrt.notEvaluated) {
            return hs_tpl26Dcrt.hscall();
        } else {
            return hs_tpl26Dcrt;
        }
    };
    this.hs_encodeFloat.evaluate = function (hs_tpl26Dcrv) {
        var hs_tpl26Ddpw = hs_tpl26Dcrv;
        if (hs_tpl26Dcrv.notEvaluated) {
            hs_tpl26Ddpw = hs_tpl26Dcrv.hscall();
        }
        var hs_tpl26DcrN = hs_tpl26Ddpw.data[6];
        if (hs_tpl26DcrN.notEvaluated) {
            return hs_tpl26DcrN.hscall();
        } else {
            return hs_tpl26DcrN;
        }
    };
    this.hs_exponent.evaluate = function (hs_tpl26DcrP) {
        var hs_tpl26DdpM = hs_tpl26DcrP;
        if (hs_tpl26DcrP.notEvaluated) {
            hs_tpl26DdpM = hs_tpl26DcrP.hscall();
        }
        var hs_tpl26Dcs7 = hs_tpl26DdpM.data[7];
        if (hs_tpl26Dcs7.notEvaluated) {
            return hs_tpl26Dcs7.hscall();
        } else {
            return hs_tpl26Dcs7;
        }
    };
    this.hs_significand.evaluate = function (hs_tpl26Dcs9) {
        var hs_tpl26Ddq2 = hs_tpl26Dcs9;
        if (hs_tpl26Dcs9.notEvaluated) {
            hs_tpl26Ddq2 = hs_tpl26Dcs9.hscall();
        }
        var hs_tpl26Dcsr = hs_tpl26Ddq2.data[8];
        if (hs_tpl26Dcsr.notEvaluated) {
            return hs_tpl26Dcsr.hscall();
        } else {
            return hs_tpl26Dcsr;
        }
    };
    this.hs_scaleFloat.evaluate = function (hs_tpl26Dcst) {
        var hs_tpl26Ddqi = hs_tpl26Dcst;
        if (hs_tpl26Dcst.notEvaluated) {
            hs_tpl26Ddqi = hs_tpl26Dcst.hscall();
        }
        var hs_tpl26DcsL = hs_tpl26Ddqi.data[9];
        if (hs_tpl26DcsL.notEvaluated) {
            return hs_tpl26DcsL.hscall();
        } else {
            return hs_tpl26DcsL;
        }
    };
    this.hs_isNaN.evaluate = function (hs_tpl26DcsN) {
        var hs_tpl26Ddqy = hs_tpl26DcsN;
        if (hs_tpl26DcsN.notEvaluated) {
            hs_tpl26Ddqy = hs_tpl26DcsN.hscall();
        }
        var hs_tpl26Dct5 = hs_tpl26Ddqy.data[10];
        if (hs_tpl26Dct5.notEvaluated) {
            return hs_tpl26Dct5.hscall();
        } else {
            return hs_tpl26Dct5;
        }
    };
    this.hs_isInfinite.evaluate = function (hs_tpl26Dct7) {
        var hs_tpl26DdqO = hs_tpl26Dct7;
        if (hs_tpl26Dct7.notEvaluated) {
            hs_tpl26DdqO = hs_tpl26Dct7.hscall();
        }
        var hs_tpl26Dctp = hs_tpl26DdqO.data[11];
        if (hs_tpl26Dctp.notEvaluated) {
            return hs_tpl26Dctp.hscall();
        } else {
            return hs_tpl26Dctp;
        }
    };
    this.hs_isDenormalizzed.evaluate = function (hs_tpl26Dctr) {
        var hs_tpl26Ddr4 = hs_tpl26Dctr;
        if (hs_tpl26Dctr.notEvaluated) {
            hs_tpl26Ddr4 = hs_tpl26Dctr.hscall();
        }
        var hs_tpl26DctJ = hs_tpl26Ddr4.data[12];
        if (hs_tpl26DctJ.notEvaluated) {
            return hs_tpl26DctJ.hscall();
        } else {
            return hs_tpl26DctJ;
        }
    };
    this.hs_isNegativeZZero.evaluate = function (hs_tpl26DctL) {
        var hs_tpl26Ddrk = hs_tpl26DctL;
        if (hs_tpl26DctL.notEvaluated) {
            hs_tpl26Ddrk = hs_tpl26DctL.hscall();
        }
        var hs_tpl26Dcu3 = hs_tpl26Ddrk.data[13];
        if (hs_tpl26Dcu3.notEvaluated) {
            return hs_tpl26Dcu3.hscall();
        } else {
            return hs_tpl26Dcu3;
        }
    };
    this.hs_isIEEE.evaluate = function (hs_tpl26Dcu5) {
        var hs_tpl26DdrA = hs_tpl26Dcu5;
        if (hs_tpl26Dcu5.notEvaluated) {
            hs_tpl26DdrA = hs_tpl26Dcu5.hscall();
        }
        var hs_tpl26Dcun = hs_tpl26DdrA.data[14];
        if (hs_tpl26Dcun.notEvaluated) {
            return hs_tpl26Dcun.hscall();
        } else {
            return hs_tpl26Dcun;
        }
    };
    this.hs_atan2.evaluate = function (hs_tpl26Dcup) {
        var hs_tpl26DdrQ = hs_tpl26Dcup;
        if (hs_tpl26Dcup.notEvaluated) {
            hs_tpl26DdrQ = hs_tpl26Dcup.hscall();
        }
        var hs_tpl26DcuH = hs_tpl26DdrQ.data[15];
        if (hs_tpl26DcuH.notEvaluated) {
            return hs_tpl26DcuH.hscall();
        } else {
            return hs_tpl26DcuH;
        }
    };
    this.hs_zddmatan2.evaluate = function (hs_zddRealFloat26DcuM, hs_eta26Dcv5, hs_eta126DcuY) {
        var hs_zddFloating226DcuN = new $hs.Thunk();
        hs_zddFloating226DcuN.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_zdp2RealFloat.hscall(hs_zddRealFloat26DcuM);
        };
        var hs_zddRealFrac426DcuP = new $hs.Thunk();
        hs_zddRealFrac426DcuP.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_zdp1RealFloat.hscall(hs_zddRealFloat26DcuM);
        };
        var hs_zddReal1226DcuR = new $hs.Thunk();
        hs_zddReal1226DcuR.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac426DcuP);
        };
        var hs_zddNum1326DcuT = new $hs.Thunk();
        hs_zddNum1326DcuT.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1226DcuR);
        };
        var hs_zddEq326DcuV = new $hs.Thunk();
        hs_zddEq326DcuV.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum1326DcuT);
        };
        var hs_zddOrd326DcuX = new $hs.Thunk();
        hs_zddOrd326DcuX.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal1226DcuR);
        };
        var hs_sat26Dds7 = new $hs.Thunk();
        hs_sat26Dds7.evaluateOnce = function () {
            var hs_sat26Dds5 = new $hs.Thunk();
            hs_sat26Dds5.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcuT, hs_sat26Dds5);
        };
        var hs_wild26Dds6 = $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd326DcuX, hs_eta126DcuY, hs_sat26Dds7);
        switch (hs_wild26Dds6.tag) {
        case 1:
            var hs_sat26Ddsa = new $hs.Thunk();
            hs_sat26Ddsa.evaluateOnce = function () {
                var hs_sat26Dds9 = new $hs.Thunk();
                hs_sat26Dds9.evaluateOnce = function () {
                    var hs_sat26Dds8 = new $hs.Thunk();
                    hs_sat26Dds8.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcuT, hs_sat26Dds8);
                };
                return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd326DcuX, hs_eta26Dcv5, hs_sat26Dds9);
            };
            var hs_sat26Ddse = new $hs.Thunk();
            hs_sat26Ddse.evaluateOnce = function () {
                var hs_sat26Ddsc = new $hs.Thunk();
                hs_sat26Ddsc.evaluateOnce = function () {
                    var hs_sat26Ddsb = new $hs.Thunk();
                    hs_sat26Ddsb.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcuT, hs_sat26Ddsb);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326DcuV, hs_eta126DcuY, hs_sat26Ddsc);
            };
            var hs_wild126Ddsd = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Ddse, hs_sat26Ddsa);
            switch (hs_wild126Ddsd.tag) {
            case 1:
                var hs_sat26Ddsh = new $hs.Thunk();
                hs_sat26Ddsh.evaluateOnce = function () {
                    var hs_sat26Ddsg = new $hs.Thunk();
                    hs_sat26Ddsg.evaluateOnce = function () {
                        var hs_sat26Ddsf = new $hs.Thunk();
                        hs_sat26Ddsf.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcuT, hs_sat26Ddsf);
                    };
                    return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd326DcuX, hs_eta26Dcv5, hs_sat26Ddsg);
                };
                var hs_sat26Ddsl = new $hs.Thunk();
                hs_sat26Ddsl.evaluateOnce = function () {
                    var hs_sat26Ddsj = new $hs.Thunk();
                    hs_sat26Ddsj.evaluateOnce = function () {
                        var hs_sat26Ddsi = new $hs.Thunk();
                        hs_sat26Ddsi.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcuT, hs_sat26Ddsi);
                    };
                    return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd326DcuX, hs_eta126DcuY, hs_sat26Ddsj);
                };
                var hs_wild226Ddsk = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Ddsl, hs_sat26Ddsh);
                switch (hs_wild226Ddsk.tag) {
                case 1:
                    var hs_sat26Ddsu = new $hs.Thunk();
                    hs_sat26Ddsu.evaluateOnce = function () {
                        var hs_sat26Ddso = new $hs.Thunk();
                        hs_sat26Ddso.evaluateOnce = function () {
                            var hs_sat26Ddsm = new $hs.Thunk();
                            hs_sat26Ddsm.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall(hs_zddRealFloat26DcuM, hs_eta26Dcv5);
                            };
                            var hs_sat26Ddsn = new $hs.Thunk();
                            hs_sat26Ddsn.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall(hs_zddRealFloat26DcuM, hs_eta126DcuY);
                            };
                            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Ddsn, hs_sat26Ddsm);
                        };
                        var hs_sat26Ddst = new $hs.Thunk();
                        hs_sat26Ddst.evaluateOnce = function () {
                            var hs_sat26Ddsp = new $hs.Thunk();
                            hs_sat26Ddsp.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall(hs_zddRealFloat26DcuM, hs_eta26Dcv5);
                            };
                            var hs_sat26Ddss = new $hs.Thunk();
                            hs_sat26Ddss.evaluateOnce = function () {
                                var hs_sat26Ddsr = new $hs.Thunk();
                                hs_sat26Ddsr.evaluateOnce = function () {
                                    var hs_sat26Ddsq = new $hs.Thunk();
                                    hs_sat26Ddsq.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcuT, hs_sat26Ddsq);
                                };
                                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd326DcuX, hs_eta126DcuY, hs_sat26Ddsr);
                            };
                            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Ddss, hs_sat26Ddsp);
                        };
                        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26Ddst, hs_sat26Ddso);
                    };
                    var hs_sat26DdsC = new $hs.Thunk();
                    hs_sat26DdsC.evaluateOnce = function () {
                        var hs_sat26Ddsx = new $hs.Thunk();
                        hs_sat26Ddsx.evaluateOnce = function () {
                            var hs_sat26Ddsw = new $hs.Thunk();
                            hs_sat26Ddsw.evaluateOnce = function () {
                                var hs_sat26Ddsv = new $hs.Thunk();
                                hs_sat26Ddsv.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcuT, hs_sat26Ddsv);
                            };
                            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd326DcuX, hs_eta26Dcv5, hs_sat26Ddsw);
                        };
                        var hs_sat26DdsA = new $hs.Thunk();
                        hs_sat26DdsA.evaluateOnce = function () {
                            var hs_sat26Ddsz = new $hs.Thunk();
                            hs_sat26Ddsz.evaluateOnce = function () {
                                var hs_sat26Ddsy = new $hs.Thunk();
                                hs_sat26Ddsy.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcuT, hs_sat26Ddsy);
                            };
                            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd326DcuX, hs_eta126DcuY, hs_sat26Ddsz);
                        };
                        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DdsA, hs_sat26Ddsx);
                    };
                    var hs_wild326DdsB = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DdsC, hs_sat26Ddsu);
                    switch (hs_wild326DdsB.tag) {
                    case 1:
                        var hs_sat26DdsH = new $hs.Thunk();
                        hs_sat26DdsH.evaluateOnce = function () {
                            var hs_sat26DdsD = new $hs.Thunk();
                            hs_sat26DdsD.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall(hs_zddRealFloat26DcuM, hs_eta126DcuY);
                            };
                            var hs_sat26DdsG = new $hs.Thunk();
                            hs_sat26DdsG.evaluateOnce = function () {
                                var hs_sat26DdsF = new $hs.Thunk();
                                hs_sat26DdsF.evaluateOnce = function () {
                                    var hs_sat26DdsE = new $hs.Thunk();
                                    hs_sat26DdsE.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcuT, hs_sat26DdsE);
                                };
                                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd326DcuX, hs_eta126DcuY, hs_sat26DdsF);
                            };
                            return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DdsG, hs_sat26DdsD);
                        };
                        var hs_sat26DdsL = new $hs.Thunk();
                        hs_sat26DdsL.evaluateOnce = function () {
                            var hs_sat26DdsJ = new $hs.Thunk();
                            hs_sat26DdsJ.evaluateOnce = function () {
                                var hs_sat26DdsI = new $hs.Thunk();
                                hs_sat26DdsI.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcuT, hs_sat26DdsI);
                            };
                            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326DcuV, hs_eta26Dcv5, hs_sat26DdsJ);
                        };
                        var hs_wild426DdsK = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DdsL, hs_sat26DdsH);
                        switch (hs_wild426DdsK.tag) {
                        case 1:
                            var hs_sat26DdsO = new $hs.Thunk();
                            hs_sat26DdsO.evaluateOnce = function () {
                                var hs_sat26DdsN = new $hs.Thunk();
                                hs_sat26DdsN.evaluateOnce = function () {
                                    var hs_sat26DdsM = new $hs.Thunk();
                                    hs_sat26DdsM.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcuT, hs_sat26DdsM);
                                };
                                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326DcuV, hs_eta26Dcv5, hs_sat26DdsN);
                            };
                            var hs_sat26DdsS = new $hs.Thunk();
                            hs_sat26DdsS.evaluateOnce = function () {
                                var hs_sat26DdsQ = new $hs.Thunk();
                                hs_sat26DdsQ.evaluateOnce = function () {
                                    var hs_sat26DdsP = new $hs.Thunk();
                                    hs_sat26DdsP.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcuT, hs_sat26DdsP);
                                };
                                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326DcuV, hs_eta126DcuY, hs_sat26DdsQ);
                            };
                            var hs_wild526DdsR = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DdsS, hs_sat26DdsO);
                            switch (hs_wild526DdsR.tag) {
                            case 1:
                                return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum1326DcuT, hs_eta126DcuY, hs_eta26Dcv5);
                            case 2:
                                if (hs_eta26Dcv5.notEvaluated) {
                                    return hs_eta26Dcv5.hscall();
                                } else {
                                    return hs_eta26Dcv5;
                                }
                            }
                        case 2:
                            return $hs.modules.GHCziFloat.hs_pi.hscall(hs_zddFloating226DcuN);
                        }
                    case 2:
                        var hs_sat26DdsU = new $hs.Thunk();
                        hs_sat26DdsU.evaluateOnce = function () {
                            var hs_sat26DdsT = new $hs.Thunk();
                            hs_sat26DdsT.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum1326DcuT, hs_eta26Dcv5);
                            };
                            return $hs.modules.GHCziFloat.hs_atan2.hscall(hs_zddRealFloat26DcuM, hs_sat26DdsT, hs_eta126DcuY);
                        };
                        return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum1326DcuT, hs_sat26DdsU);
                    }
                case 2:
                    var hs_sat26DdsX = new $hs.Thunk();
                    hs_sat26DdsX.evaluateOnce = function () {
                        var hs_sat26DdsW = new $hs.Thunk();
                        hs_sat26DdsW.evaluateOnce = function () {
                            var hs_sat26DdsV = $hs.modules.GHCziReal.hs_zdp2RealFrac.hscall(hs_zddRealFrac426DcuP);
                            return $hs.modules.GHCziReal.hs_zs.hscall(hs_sat26DdsV, hs_eta26Dcv5, hs_eta126DcuY);
                        };
                        return $hs.modules.GHCziFloat.hs_atan.hscall(hs_zddFloating226DcuN, hs_sat26DdsW);
                    };
                    var hs_sat26DdsY = new $hs.Thunk();
                    hs_sat26DdsY.evaluateOnce = function () {
                        return $hs.modules.GHCziFloat.hs_pi.hscall(hs_zddFloating226DcuN);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum1326DcuT, hs_sat26DdsY, hs_sat26DdsX);
                }
            case 2:
                var hs_sat26Ddt0 = new $hs.Thunk();
                hs_sat26Ddt0.evaluateOnce = function () {
                    var hs_sat26DdsZ = new $hs.Thunk();
                    hs_sat26DdsZ.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcuT, hs_sat26DdsZ);
                };
                var hs_sat26Ddt2 = new $hs.Thunk();
                hs_sat26Ddt2.evaluateOnce = function () {
                    return $hs.modules.GHCziFloat.hs_pi.hscall(hs_zddFloating226DcuN);
                };
                var hs_sat26Ddt1 = $hs.modules.GHCziReal.hs_zdp2RealFrac.hscall(hs_zddRealFrac426DcuP);
                return $hs.modules.GHCziReal.hs_zs.hscall(hs_sat26Ddt1, hs_sat26Ddt2, hs_sat26Ddt0);
            }
        case 2:
            var hs_sat26Ddt4 = new $hs.Thunk();
            hs_sat26Ddt4.evaluateOnce = function () {
                var hs_sat26Ddt3 = $hs.modules.GHCziReal.hs_zdp2RealFrac.hscall(hs_zddRealFrac426DcuP);
                return $hs.modules.GHCziReal.hs_zs.hscall(hs_sat26Ddt3, hs_eta26Dcv5, hs_eta126DcuY);
            };
            return $hs.modules.GHCziFloat.hs_atan.hscall(hs_zddFloating226DcuN, hs_sat26Ddt4);
        }
    };
    this.hs_zddmsignificand.evaluate = function (hs_zddRealFloat26Dcw2, hs_x26Dcw3) {
        var hs_sat26Ddt7 = new $hs.Thunk();
        hs_sat26Ddt7.evaluateOnce = function () {
            var hs_sat26Ddt5 = new $hs.Thunk();
            hs_sat26Ddt5.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_floatDigits.hscall(hs_zddRealFloat26Dcw2, hs_x26Dcw3);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Ddt5);
        };
        var hs_sat26Ddt9 = new $hs.Thunk();
        hs_sat26Ddt9.evaluateOnce = function () {
            var hs_wild26Ddt6 = $hs.modules.GHCziFloat.hs_decodeFloat.hscall(hs_zddRealFloat26Dcw2, hs_x26Dcw3);
            var hs_m26Dcw7 = hs_wild26Ddt6.data[0];
            if (hs_m26Dcw7.notEvaluated) {
                return hs_m26Dcw7.hscall();
            } else {
                return hs_m26Dcw7;
            }
        };
        return $hs.modules.GHCziFloat.hs_encodeFloat.hscall(hs_zddRealFloat26Dcw2, hs_sat26Ddt9, hs_sat26Ddt7);
    };
    this.hs_zddmexponent.evaluate = function (hs_zddRealFloat26Dcwe, hs_x26Dcwf) {
        var hs_ds26Dcwg = new $hs.Thunk();
        hs_ds26Dcwg.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_decodeFloat.hscall(hs_zddRealFloat26Dcwe, hs_x26Dcwf);
        };
        var hs_sat26Ddtb = new $hs.Thunk();
        hs_sat26Ddtb.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_sat26Ddte = new $hs.Thunk();
        hs_sat26Ddte.evaluateOnce = function () {
            var hs_wild26Ddta = hs_ds26Dcwg;
            if (hs_ds26Dcwg.notEvaluated) {
                hs_wild26Ddta = hs_ds26Dcwg.hscall();
            }
            var hs_m26Dcwk = hs_wild26Ddta.data[0];
            if (hs_m26Dcwk.notEvaluated) {
                return hs_m26Dcwk.hscall();
            } else {
                return hs_m26Dcwk;
            }
        };
        var hs_wild26Ddtd = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_sat26Ddte, hs_sat26Ddtb);
        switch (hs_wild26Ddtd.tag) {
        case 1:
            var hs_sat26Ddth = new $hs.Thunk();
            hs_sat26Ddth.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_floatDigits.hscall(hs_zddRealFloat26Dcwe, hs_x26Dcwf);
            };
            var hs_sat26Ddti = new $hs.Thunk();
            hs_sat26Ddti.evaluateOnce = function () {
                var hs_wild126Ddtg = hs_ds26Dcwg;
                if (hs_ds26Dcwg.notEvaluated) {
                    hs_wild126Ddtg = hs_ds26Dcwg.hscall();
                }
                var hs_n26Dcwr = hs_wild126Ddtg.data[1];
                if (hs_n26Dcwr.notEvaluated) {
                    return hs_n26Dcwr.hscall();
                } else {
                    return hs_n26Dcwr;
                }
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Ddti, hs_sat26Ddth);
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [0];
            return $res;
        }
    };
    this.hs_zddmtanh.evaluate = function (hs_zddFloating226Dcww, hs_eta26Dcwy) {
        var hs_sat26Ddtj = new $hs.Thunk();
        hs_sat26Ddtj.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_cosh.hscall(hs_zddFloating226Dcww, hs_eta26Dcwy);
        };
        var hs_sat26Ddtl = new $hs.Thunk();
        hs_sat26Ddtl.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_sinh.hscall(hs_zddFloating226Dcww, hs_eta26Dcwy);
        };
        var hs_sat26Ddtk = $hs.modules.GHCziFloat.hs_zdp1Floating.hscall(hs_zddFloating226Dcww);
        return $hs.modules.GHCziReal.hs_zs.hscall(hs_sat26Ddtk, hs_sat26Ddtl, hs_sat26Ddtj);
    };
    this.hs_zddmtan.evaluate = function (hs_zddFloating226DcwD, hs_eta26DcwF) {
        var hs_sat26Ddtm = new $hs.Thunk();
        hs_sat26Ddtm.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_cos.hscall(hs_zddFloating226DcwD, hs_eta26DcwF);
        };
        var hs_sat26Ddto = new $hs.Thunk();
        hs_sat26Ddto.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_sin.hscall(hs_zddFloating226DcwD, hs_eta26DcwF);
        };
        var hs_sat26Ddtn = $hs.modules.GHCziFloat.hs_zdp1Floating.hscall(hs_zddFloating226DcwD);
        return $hs.modules.GHCziReal.hs_zs.hscall(hs_sat26Ddtn, hs_sat26Ddto, hs_sat26Ddtm);
    };
    this.hs_zddmlogBase.evaluate = function (hs_zddFloating226DcwL, hs_eta26DcwP, hs_eta126DcwN) {
        var hs_sat26Ddtp = new $hs.Thunk();
        hs_sat26Ddtp.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_log.hscall(hs_zddFloating226DcwL, hs_eta26DcwP);
        };
        var hs_sat26Ddtr = new $hs.Thunk();
        hs_sat26Ddtr.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_log.hscall(hs_zddFloating226DcwL, hs_eta126DcwN);
        };
        var hs_sat26Ddtq = $hs.modules.GHCziFloat.hs_zdp1Floating.hscall(hs_zddFloating226DcwL);
        return $hs.modules.GHCziReal.hs_zs.hscall(hs_sat26Ddtq, hs_sat26Ddtr, hs_sat26Ddtp);
    };
    this.hs_zddmztzt.evaluate = function (hs_zddFloating226DcwU, hs_eta26DcwX, hs_eta126DcwZ) {
        var hs_sat26Ddtv = new $hs.Thunk();
        hs_sat26Ddtv.evaluateOnce = function () {
            var hs_sat26Ddtu = new $hs.Thunk();
            hs_sat26Ddtu.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_log.hscall(hs_zddFloating226DcwU, hs_eta26DcwX);
            };
            var hs_sat26Ddtt = $hs.modules.GHCziFloat.hs_zdp1Floating.hscall(hs_zddFloating226DcwU);
            var hs_sat26Ddts = $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_sat26Ddtt);
            return $hs.modules.GHCziNum.hs_zt.hscall(hs_sat26Ddts, hs_sat26Ddtu, hs_eta126DcwZ);
        };
        return $hs.modules.GHCziFloat.hs_exp.hscall(hs_zddFloating226DcwU, hs_sat26Ddtv);
    };
    this.hs_zddmsqrt.evaluate = function (hs_zddFloating226Dcx3, hs_eta26Dcx4) {
        var hs_sat26DdtA = new $hs.Thunk();
        hs_sat26DdtA.evaluateOnce = function () {
            var hs_sat26Ddtw = new $hs.Thunk();
            hs_sat26Ddtw.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
            };
            var hs_sat26Ddtx = new $hs.Thunk();
            hs_sat26Ddtx.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            var hs_sat26Ddty = new $hs.Data(1);
            hs_sat26Ddty.data = [hs_sat26Ddtx, hs_sat26Ddtw];
            var hs_sat26Ddtz = $hs.modules.GHCziFloat.hs_zdp1Floating.hscall(hs_zddFloating226Dcx3);
            return $hs.modules.GHCziReal.hs_fromRational.hscall(hs_sat26Ddtz, hs_sat26Ddty);
        };
        return $hs.modules.GHCziFloat.hs_ztzt.hscall(hs_zddFloating226Dcx3, hs_eta26Dcx4, hs_sat26DdtA);
    };
    this.hs_showSignedFloat.evaluate = function (hs_zddRealFloat26Dcxf, hs_eta26Dcxs, hs_eta126Dcxt, hs_eta226Dcxm) {
        var hs_zddRealFrac426Dcxg = new $hs.Thunk();
        hs_zddRealFrac426Dcxg.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_zdp1RealFloat.hscall(hs_zddRealFloat26Dcxf);
        };
        var hs_zddReal1226Dcxi = new $hs.Thunk();
        hs_zddReal1226Dcxi.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac426Dcxg);
        };
        var hs_zddNum1326Dcxk = new $hs.Thunk();
        hs_zddNum1326Dcxk.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1226Dcxi);
        };
        var hs_sat26DdtB = new $hs.Thunk();
        hs_sat26DdtB.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall(hs_zddRealFloat26Dcxf, hs_eta226Dcxm);
        };
        var hs_sat26DdtG = new $hs.Thunk();
        hs_sat26DdtG.evaluateOnce = function () {
            var hs_sat26DdtD = new $hs.Thunk();
            hs_sat26DdtD.evaluateOnce = function () {
                var hs_sat26DdtC = new $hs.Thunk();
                hs_sat26DdtC.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326Dcxk, hs_sat26DdtC);
            };
            var hs_sat26DdtE = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal1226Dcxi);
            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26DdtE, hs_eta226Dcxm, hs_sat26DdtD);
        };
        var hs_wild26DdtF = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DdtG, hs_sat26DdtB);
        switch (hs_wild26DdtF.tag) {
        case 1:
            return hs_eta26Dcxs.hscall(hs_eta226Dcxm);
        case 2:
            var hs_sat26DdtL = new $hs.Thunk();
            hs_sat26DdtL.evaluateOnce = function () {
                var hs_sat26DdtI = new $hs.Thunk();
                hs_sat26DdtI.evaluateOnce = function () {
                    var hs_sat26DdtH = new $hs.Thunk();
                    hs_sat26DdtH.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum1326Dcxk, hs_eta226Dcxm);
                    };
                    return hs_eta26Dcxs.hscall(hs_sat26DdtH);
                };
                var hs_sat26DdtK = new $hs.Thunk();
                hs_sat26DdtK.evaluateOnce = function () {
                    var hs_sat26DdtJ = new $hs.Data(1);
                    hs_sat26DdtJ.data = ["-"];
                    return $hs.modules.GHCziShow.hs_showChar.hscall(hs_sat26DdtJ);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DdtK, hs_sat26DdtI);
            };
            var hs_sat26DdtN = new $hs.Thunk();
            hs_sat26DdtN.evaluateOnce = function () {
                var hs_sat26DdtM = new $hs.Data(1);
                hs_sat26DdtM.data = [6];
                return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_eta126Dcxt, hs_sat26DdtM);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DdtN, hs_sat26DdtL);
        }
    };
    this.hs_powerDouble.evaluate = function (hs_ds26DcxD, hs_ds126DcxG) {
        var hs_wild26DdtQ = hs_ds26DcxD;
        if (hs_ds26DcxD.notEvaluated) {
            hs_wild26DdtQ = hs_ds26DcxD.hscall();
        }
        var hs_x26DcxJ = hs_wild26DdtQ.data[0];
        var hs_wild126DdtP = hs_ds126DcxG;
        if (hs_ds126DcxG.notEvaluated) {
            hs_wild126DdtP = hs_ds126DcxG.hscall();
        }
        var hs_y26DcxK = hs_wild126DdtP.data[0];
        throw "primitive operation **##. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DdtO];
        return $res;
    };
    this.hs_tanhDouble.evaluate = function (hs_ds26DcxN) {
        var hs_wild26DdtS = hs_ds26DcxN;
        if (hs_ds26DcxN.notEvaluated) {
            hs_wild26DdtS = hs_ds26DcxN.hscall();
        }
        var hs_x26DcxQ = hs_wild26DdtS.data[0];
        throw "primitive operation tanhDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DdtR];
        return $res;
    };
    this.hs_coshDouble.evaluate = function (hs_ds26DcxT) {
        var hs_wild26DdtU = hs_ds26DcxT;
        if (hs_ds26DcxT.notEvaluated) {
            hs_wild26DdtU = hs_ds26DcxT.hscall();
        }
        var hs_x26DcxW = hs_wild26DdtU.data[0];
        throw "primitive operation coshDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DdtT];
        return $res;
    };
    this.hs_sinhDouble.evaluate = function (hs_ds26DcxZ) {
        var hs_wild26DdtW = hs_ds26DcxZ;
        if (hs_ds26DcxZ.notEvaluated) {
            hs_wild26DdtW = hs_ds26DcxZ.hscall();
        }
        var hs_x26Dcy2 = hs_wild26DdtW.data[0];
        throw "primitive operation sinhDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DdtV];
        return $res;
    };
    this.hs_atanDouble.evaluate = function (hs_ds26Dcy5) {
        var hs_wild26DdtY = hs_ds26Dcy5;
        if (hs_ds26Dcy5.notEvaluated) {
            hs_wild26DdtY = hs_ds26Dcy5.hscall();
        }
        var hs_x26Dcy8 = hs_wild26DdtY.data[0];
        throw "primitive operation atanDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DdtX];
        return $res;
    };
    this.hs_acosDouble.evaluate = function (hs_ds26Dcyb) {
        var hs_wild26DdtZ = hs_ds26Dcyb;
        if (hs_ds26Dcyb.notEvaluated) {
            hs_wild26DdtZ = hs_ds26Dcyb.hscall();
        }
        var hs_x26Dcye = hs_wild26DdtZ.data[0];
        throw "primitive operation acosDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_wild126Dcyg];
        return $res;
    };
    this.hs_asinDouble.evaluate = function (hs_ds26Dcyi) {
        var hs_wild26Ddu0 = hs_ds26Dcyi;
        if (hs_ds26Dcyi.notEvaluated) {
            hs_wild26Ddu0 = hs_ds26Dcyi.hscall();
        }
        var hs_x26Dcyl = hs_wild26Ddu0.data[0];
        throw "primitive operation asinDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_wild126Dcyn];
        return $res;
    };
    this.hs_tanDouble.evaluate = function (hs_ds26Dcyp) {
        var hs_wild26Ddu2 = hs_ds26Dcyp;
        if (hs_ds26Dcyp.notEvaluated) {
            hs_wild26Ddu2 = hs_ds26Dcyp.hscall();
        }
        var hs_x26Dcys = hs_wild26Ddu2.data[0];
        throw "primitive operation tanDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddu1];
        return $res;
    };
    this.hs_cosDouble.evaluate = function (hs_ds26Dcyv) {
        var hs_wild26Ddu4 = hs_ds26Dcyv;
        if (hs_ds26Dcyv.notEvaluated) {
            hs_wild26Ddu4 = hs_ds26Dcyv.hscall();
        }
        var hs_x26Dcyy = hs_wild26Ddu4.data[0];
        throw "primitive operation cosDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddu3];
        return $res;
    };
    this.hs_sinDouble.evaluate = function (hs_ds26DcyB) {
        var hs_wild26Ddu6 = hs_ds26DcyB;
        if (hs_ds26DcyB.notEvaluated) {
            hs_wild26Ddu6 = hs_ds26DcyB.hscall();
        }
        var hs_x26DcyE = hs_wild26Ddu6.data[0];
        throw "primitive operation sinDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddu5];
        return $res;
    };
    this.hs_sqrtDouble.evaluate = function (hs_ds26DcyH) {
        var hs_wild26Ddu8 = hs_ds26DcyH;
        if (hs_ds26DcyH.notEvaluated) {
            hs_wild26Ddu8 = hs_ds26DcyH.hscall();
        }
        var hs_x26DcyK = hs_wild26Ddu8.data[0];
        throw "primitive operation sqrtDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddu7];
        return $res;
    };
    this.hs_logDouble.evaluate = function (hs_ds26DcyN) {
        var hs_wild26Ddu9 = hs_ds26DcyN;
        if (hs_ds26DcyN.notEvaluated) {
            hs_wild26Ddu9 = hs_ds26DcyN.hscall();
        }
        var hs_x26DcyQ = hs_wild26Ddu9.data[0];
        throw "primitive operation logDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_wild126DcyS];
        return $res;
    };
    this.hs_expDouble.evaluate = function (hs_ds26DcyU) {
        var hs_wild26Ddub = hs_ds26DcyU;
        if (hs_ds26DcyU.notEvaluated) {
            hs_wild26Ddub = hs_ds26DcyU.hscall();
        }
        var hs_x26DcyX = hs_wild26Ddub.data[0];
        throw "primitive operation expDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddua];
        return $res;
    };
    this.hs_float2Double.evaluate = function (hs_ds26Dcz0) {
        var hs_wild26Ddud = hs_ds26Dcz0;
        if (hs_ds26Dcz0.notEvaluated) {
            hs_wild26Ddud = hs_ds26Dcz0.hscall();
        }
        var hs_x26Dcz3 = hs_wild26Ddud.data[0];
        throw "primitive operation float2Double#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dduc];
        return $res;
    };
    this.hs_double2Float.evaluate = function (hs_ds26Dcz6) {
        var hs_wild26Dduf = hs_ds26Dcz6;
        if (hs_ds26Dcz6.notEvaluated) {
            hs_wild26Dduf = hs_ds26Dcz6.hscall();
        }
        var hs_x26Dcz9 = hs_wild26Dduf.data[0];
        throw "primitive operation double2Float#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddue];
        return $res;
    };
    this.hs_int2Double.evaluate = function (hs_ds26Dczc) {
        var hs_wild26Dduh = hs_ds26Dczc;
        if (hs_ds26Dczc.notEvaluated) {
            hs_wild26Dduh = hs_ds26Dczc.hscall();
        }
        var hs_x26Dczf = hs_wild26Dduh.data[0];
        throw "primitive operation int2Double#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddug];
        return $res;
    };
    this.hs_double2Int.evaluate = function (hs_ds26Dczi) {
        var hs_wild26Dduj = hs_ds26Dczi;
        if (hs_ds26Dczi.notEvaluated) {
            hs_wild26Dduj = hs_ds26Dczi.hscall();
        }
        var hs_x26Dczl = hs_wild26Dduj.data[0];
        throw "primitive operation double2Int#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddui];
        return $res;
    };
    this.hs_leDouble.evaluate = function (hs_ds26Dczp, hs_ds126Dczs) {
        var hs_wild26Ddul = hs_ds26Dczp;
        if (hs_ds26Dczp.notEvaluated) {
            hs_wild26Ddul = hs_ds26Dczp.hscall();
        }
        var hs_x26Dczv = hs_wild26Ddul.data[0];
        var hs_wild126Dduk = hs_ds126Dczs;
        if (hs_ds126Dczs.notEvaluated) {
            hs_wild126Dduk = hs_ds126Dczs.hscall();
        }
        var hs_y26Dczw = hs_wild126Dduk.data[0];
        throw "primitive operation <=##. Not implemeted yet.";
    };
    this.hs_ltDouble.evaluate = function (hs_ds26Dczz, hs_ds126DczC) {
        var hs_wild26Ddun = hs_ds26Dczz;
        if (hs_ds26Dczz.notEvaluated) {
            hs_wild26Ddun = hs_ds26Dczz.hscall();
        }
        var hs_x26DczF = hs_wild26Ddun.data[0];
        var hs_wild126Ddum = hs_ds126DczC;
        if (hs_ds126DczC.notEvaluated) {
            hs_wild126Ddum = hs_ds126DczC.hscall();
        }
        var hs_y26DczG = hs_wild126Ddum.data[0];
        throw "primitive operation <##. Not implemeted yet.";
    };
    this.hs_neDouble.evaluate = function (hs_ds26DczJ, hs_ds126DczM) {
        var hs_wild26Ddup = hs_ds26DczJ;
        if (hs_ds26DczJ.notEvaluated) {
            hs_wild26Ddup = hs_ds26DczJ.hscall();
        }
        var hs_x26DczP = hs_wild26Ddup.data[0];
        var hs_wild126Dduo = hs_ds126DczM;
        if (hs_ds126DczM.notEvaluated) {
            hs_wild126Dduo = hs_ds126DczM.hscall();
        }
        var hs_y26DczQ = hs_wild126Dduo.data[0];
        throw "primitive operation /=##. Not implemeted yet.";
    };
    this.hs_eqDouble.evaluate = function (hs_ds26DczT, hs_ds126DczW) {
        var hs_wild26Ddur = hs_ds26DczT;
        if (hs_ds26DczT.notEvaluated) {
            hs_wild26Ddur = hs_ds26DczT.hscall();
        }
        var hs_x26DczZ = hs_wild26Ddur.data[0];
        var hs_wild126Dduq = hs_ds126DczW;
        if (hs_ds126DczW.notEvaluated) {
            hs_wild126Dduq = hs_ds126DczW.hscall();
        }
        var hs_y26DcA0 = hs_wild126Dduq.data[0];
        throw "primitive operation ==##. Not implemeted yet.";
    };
    this.hs_geDouble.evaluate = function (hs_ds26DcA3, hs_ds126DcA6) {
        var hs_wild26Ddut = hs_ds26DcA3;
        if (hs_ds26DcA3.notEvaluated) {
            hs_wild26Ddut = hs_ds26DcA3.hscall();
        }
        var hs_x26DcA9 = hs_wild26Ddut.data[0];
        var hs_wild126Ddus = hs_ds126DcA6;
        if (hs_ds126DcA6.notEvaluated) {
            hs_wild126Ddus = hs_ds126DcA6.hscall();
        }
        var hs_y26DcAa = hs_wild126Ddus.data[0];
        throw "primitive operation >=##. Not implemeted yet.";
    };
    this.hs_gtDouble.evaluate = function (hs_ds26DcAd, hs_ds126DcAg) {
        var hs_wild26Dduv = hs_ds26DcAd;
        if (hs_ds26DcAd.notEvaluated) {
            hs_wild26Dduv = hs_ds26DcAd.hscall();
        }
        var hs_x26DcAj = hs_wild26Dduv.data[0];
        var hs_wild126Dduu = hs_ds126DcAg;
        if (hs_ds126DcAg.notEvaluated) {
            hs_wild126Dduu = hs_ds126DcAg.hscall();
        }
        var hs_y26DcAk = hs_wild126Dduu.data[0];
        throw "primitive operation >##. Not implemeted yet.";
    };
    this.hs_negateDouble.evaluate = function (hs_ds26DcAm) {
        var hs_wild26Ddux = hs_ds26DcAm;
        if (hs_ds26DcAm.notEvaluated) {
            hs_wild26Ddux = hs_ds26DcAm.hscall();
        }
        var hs_x26DcAp = hs_wild26Ddux.data[0];
        throw "primitive operation negateDouble#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dduw];
        return $res;
    };
    this.hs_divideDouble.evaluate = function (hs_ds26DcAt, hs_ds126DcAw) {
        var hs_wild26Dduz = hs_ds26DcAt;
        if (hs_ds26DcAt.notEvaluated) {
            hs_wild26Dduz = hs_ds26DcAt.hscall();
        }
        var hs_x26DcAz = hs_wild26Dduz.data[0];
        var hs_wild126Dduy = hs_ds126DcAw;
        if (hs_ds126DcAw.notEvaluated) {
            hs_wild126Dduy = hs_ds126DcAw.hscall();
        }
        var hs_y26DcAA = hs_wild126Dduy.data[0];
        throw "primitive operation /##. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_wild226DcAC];
        return $res;
    };
    this.hs_timesDouble.evaluate = function (hs_ds26DcAF, hs_ds126DcAI) {
        var hs_wild26DduC = hs_ds26DcAF;
        if (hs_ds26DcAF.notEvaluated) {
            hs_wild26DduC = hs_ds26DcAF.hscall();
        }
        var hs_x26DcAL = hs_wild26DduC.data[0];
        var hs_wild126DduB = hs_ds126DcAI;
        if (hs_ds126DcAI.notEvaluated) {
            hs_wild126DduB = hs_ds126DcAI.hscall();
        }
        var hs_y26DcAM = hs_wild126DduB.data[0];
        throw "primitive operation *##. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DduA];
        return $res;
    };
    this.hs_minusDouble.evaluate = function (hs_ds26DcAQ, hs_ds126DcAT) {
        var hs_wild26DduF = hs_ds26DcAQ;
        if (hs_ds26DcAQ.notEvaluated) {
            hs_wild26DduF = hs_ds26DcAQ.hscall();
        }
        var hs_x26DcAW = hs_wild26DduF.data[0];
        var hs_wild126DduE = hs_ds126DcAT;
        if (hs_ds126DcAT.notEvaluated) {
            hs_wild126DduE = hs_ds126DcAT.hscall();
        }
        var hs_y26DcAX = hs_wild126DduE.data[0];
        throw "primitive operation -##. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DduD];
        return $res;
    };
    this.hs_plusDouble.evaluate = function (hs_ds26DcB1, hs_ds126DcB4) {
        var hs_wild26DduI = hs_ds26DcB1;
        if (hs_ds26DcB1.notEvaluated) {
            hs_wild26DduI = hs_ds26DcB1.hscall();
        }
        var hs_x26DcB7 = hs_wild26DduI.data[0];
        var hs_wild126DduH = hs_ds126DcB4;
        if (hs_ds126DcB4.notEvaluated) {
            hs_wild126DduH = hs_ds126DcB4.hscall();
        }
        var hs_y26DcB8 = hs_wild126DduH.data[0];
        throw "primitive operation +##. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DduG];
        return $res;
    };
    this.hs_powerFloat.evaluate = function (hs_ds26DcBc, hs_ds126DcBf) {
        var hs_wild26DduL = hs_ds26DcBc;
        if (hs_ds26DcBc.notEvaluated) {
            hs_wild26DduL = hs_ds26DcBc.hscall();
        }
        var hs_x26DcBi = hs_wild26DduL.data[0];
        var hs_wild126DduK = hs_ds126DcBf;
        if (hs_ds126DcBf.notEvaluated) {
            hs_wild126DduK = hs_ds126DcBf.hscall();
        }
        var hs_y26DcBj = hs_wild126DduK.data[0];
        throw "primitive operation powerFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DduJ];
        return $res;
    };
    this.hs_tanhFloat.evaluate = function (hs_ds26DcBm) {
        var hs_wild26DduN = hs_ds26DcBm;
        if (hs_ds26DcBm.notEvaluated) {
            hs_wild26DduN = hs_ds26DcBm.hscall();
        }
        var hs_x26DcBp = hs_wild26DduN.data[0];
        throw "primitive operation tanhFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DduM];
        return $res;
    };
    this.hs_coshFloat.evaluate = function (hs_ds26DcBs) {
        var hs_wild26DduP = hs_ds26DcBs;
        if (hs_ds26DcBs.notEvaluated) {
            hs_wild26DduP = hs_ds26DcBs.hscall();
        }
        var hs_x26DcBv = hs_wild26DduP.data[0];
        throw "primitive operation coshFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DduO];
        return $res;
    };
    this.hs_sinhFloat.evaluate = function (hs_ds26DcBy) {
        var hs_wild26DduR = hs_ds26DcBy;
        if (hs_ds26DcBy.notEvaluated) {
            hs_wild26DduR = hs_ds26DcBy.hscall();
        }
        var hs_x26DcBB = hs_wild26DduR.data[0];
        throw "primitive operation sinhFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DduQ];
        return $res;
    };
    this.hs_atanFloat.evaluate = function (hs_ds26DcBE) {
        var hs_wild26DduT = hs_ds26DcBE;
        if (hs_ds26DcBE.notEvaluated) {
            hs_wild26DduT = hs_ds26DcBE.hscall();
        }
        var hs_x26DcBH = hs_wild26DduT.data[0];
        throw "primitive operation atanFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DduS];
        return $res;
    };
    this.hs_acosFloat.evaluate = function (hs_ds26DcBK) {
        var hs_wild26DduU = hs_ds26DcBK;
        if (hs_ds26DcBK.notEvaluated) {
            hs_wild26DduU = hs_ds26DcBK.hscall();
        }
        var hs_x26DcBN = hs_wild26DduU.data[0];
        throw "primitive operation acosFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_wild126DcBP];
        return $res;
    };
    this.hs_asinFloat.evaluate = function (hs_ds26DcBR) {
        var hs_wild26DduV = hs_ds26DcBR;
        if (hs_ds26DcBR.notEvaluated) {
            hs_wild26DduV = hs_ds26DcBR.hscall();
        }
        var hs_x26DcBU = hs_wild26DduV.data[0];
        throw "primitive operation asinFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_wild126DcBW];
        return $res;
    };
    this.hs_tanFloat.evaluate = function (hs_ds26DcBY) {
        var hs_wild26DduX = hs_ds26DcBY;
        if (hs_ds26DcBY.notEvaluated) {
            hs_wild26DduX = hs_ds26DcBY.hscall();
        }
        var hs_x26DcC1 = hs_wild26DduX.data[0];
        throw "primitive operation tanFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DduW];
        return $res;
    };
    this.hs_cosFloat.evaluate = function (hs_ds26DcC4) {
        var hs_wild26DduZ = hs_ds26DcC4;
        if (hs_ds26DcC4.notEvaluated) {
            hs_wild26DduZ = hs_ds26DcC4.hscall();
        }
        var hs_x26DcC7 = hs_wild26DduZ.data[0];
        throw "primitive operation cosFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DduY];
        return $res;
    };
    this.hs_sinFloat.evaluate = function (hs_ds26DcCa) {
        var hs_wild26Ddv1 = hs_ds26DcCa;
        if (hs_ds26DcCa.notEvaluated) {
            hs_wild26Ddv1 = hs_ds26DcCa.hscall();
        }
        var hs_x26DcCd = hs_wild26Ddv1.data[0];
        throw "primitive operation sinFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddv0];
        return $res;
    };
    this.hs_sqrtFloat.evaluate = function (hs_ds26DcCg) {
        var hs_wild26Ddv3 = hs_ds26DcCg;
        if (hs_ds26DcCg.notEvaluated) {
            hs_wild26Ddv3 = hs_ds26DcCg.hscall();
        }
        var hs_x26DcCj = hs_wild26Ddv3.data[0];
        throw "primitive operation sqrtFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddv2];
        return $res;
    };
    this.hs_logFloat.evaluate = function (hs_ds26DcCm) {
        var hs_wild26Ddv4 = hs_ds26DcCm;
        if (hs_ds26DcCm.notEvaluated) {
            hs_wild26Ddv4 = hs_ds26DcCm.hscall();
        }
        var hs_x26DcCp = hs_wild26Ddv4.data[0];
        throw "primitive operation logFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_wild126DcCr];
        return $res;
    };
    this.hs_expFloat.evaluate = function (hs_ds26DcCt) {
        var hs_wild26Ddv6 = hs_ds26DcCt;
        if (hs_ds26DcCt.notEvaluated) {
            hs_wild26Ddv6 = hs_ds26DcCt.hscall();
        }
        var hs_x26DcCw = hs_wild26Ddv6.data[0];
        throw "primitive operation expFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddv5];
        return $res;
    };
    this.hs_int2Float.evaluate = function (hs_ds26DcCz) {
        var hs_wild26Ddv8 = hs_ds26DcCz;
        if (hs_ds26DcCz.notEvaluated) {
            hs_wild26Ddv8 = hs_ds26DcCz.hscall();
        }
        var hs_x26DcCC = hs_wild26Ddv8.data[0];
        throw "primitive operation int2Float#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddv7];
        return $res;
    };
    this.hs_float2Int.evaluate = function (hs_ds26DcCF) {
        var hs_wild26Ddva = hs_ds26DcCF;
        if (hs_ds26DcCF.notEvaluated) {
            hs_wild26Ddva = hs_ds26DcCF.hscall();
        }
        var hs_x26DcCI = hs_wild26Ddva.data[0];
        throw "primitive operation float2Int#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddv9];
        return $res;
    };
    this.hs_leFloat.evaluate = function (hs_ds26DcCM, hs_ds126DcCP) {
        var hs_wild26Ddvc = hs_ds26DcCM;
        if (hs_ds26DcCM.notEvaluated) {
            hs_wild26Ddvc = hs_ds26DcCM.hscall();
        }
        var hs_x26DcCS = hs_wild26Ddvc.data[0];
        var hs_wild126Ddvb = hs_ds126DcCP;
        if (hs_ds126DcCP.notEvaluated) {
            hs_wild126Ddvb = hs_ds126DcCP.hscall();
        }
        var hs_y26DcCT = hs_wild126Ddvb.data[0];
        throw "primitive operation leFloat#. Not implemeted yet.";
    };
    this.hs_ltFloat.evaluate = function (hs_ds26DcCW, hs_ds126DcCZ) {
        var hs_wild26Ddve = hs_ds26DcCW;
        if (hs_ds26DcCW.notEvaluated) {
            hs_wild26Ddve = hs_ds26DcCW.hscall();
        }
        var hs_x26DcD2 = hs_wild26Ddve.data[0];
        var hs_wild126Ddvd = hs_ds126DcCZ;
        if (hs_ds126DcCZ.notEvaluated) {
            hs_wild126Ddvd = hs_ds126DcCZ.hscall();
        }
        var hs_y26DcD3 = hs_wild126Ddvd.data[0];
        throw "primitive operation ltFloat#. Not implemeted yet.";
    };
    this.hs_neFloat.evaluate = function (hs_ds26DcD6, hs_ds126DcD9) {
        var hs_wild26Ddvg = hs_ds26DcD6;
        if (hs_ds26DcD6.notEvaluated) {
            hs_wild26Ddvg = hs_ds26DcD6.hscall();
        }
        var hs_x26DcDc = hs_wild26Ddvg.data[0];
        var hs_wild126Ddvf = hs_ds126DcD9;
        if (hs_ds126DcD9.notEvaluated) {
            hs_wild126Ddvf = hs_ds126DcD9.hscall();
        }
        var hs_y26DcDd = hs_wild126Ddvf.data[0];
        throw "primitive operation neFloat#. Not implemeted yet.";
    };
    this.hs_eqFloat.evaluate = function (hs_ds26DcDg, hs_ds126DcDj) {
        var hs_wild26Ddvi = hs_ds26DcDg;
        if (hs_ds26DcDg.notEvaluated) {
            hs_wild26Ddvi = hs_ds26DcDg.hscall();
        }
        var hs_x26DcDm = hs_wild26Ddvi.data[0];
        var hs_wild126Ddvh = hs_ds126DcDj;
        if (hs_ds126DcDj.notEvaluated) {
            hs_wild126Ddvh = hs_ds126DcDj.hscall();
        }
        var hs_y26DcDn = hs_wild126Ddvh.data[0];
        throw "primitive operation eqFloat#. Not implemeted yet.";
    };
    this.hs_geFloat.evaluate = function (hs_ds26DcDq, hs_ds126DcDt) {
        var hs_wild26Ddvk = hs_ds26DcDq;
        if (hs_ds26DcDq.notEvaluated) {
            hs_wild26Ddvk = hs_ds26DcDq.hscall();
        }
        var hs_x26DcDw = hs_wild26Ddvk.data[0];
        var hs_wild126Ddvj = hs_ds126DcDt;
        if (hs_ds126DcDt.notEvaluated) {
            hs_wild126Ddvj = hs_ds126DcDt.hscall();
        }
        var hs_y26DcDx = hs_wild126Ddvj.data[0];
        throw "primitive operation geFloat#. Not implemeted yet.";
    };
    this.hs_gtFloat.evaluate = function (hs_ds26DcDA, hs_ds126DcDD) {
        var hs_wild26Ddvm = hs_ds26DcDA;
        if (hs_ds26DcDA.notEvaluated) {
            hs_wild26Ddvm = hs_ds26DcDA.hscall();
        }
        var hs_x26DcDG = hs_wild26Ddvm.data[0];
        var hs_wild126Ddvl = hs_ds126DcDD;
        if (hs_ds126DcDD.notEvaluated) {
            hs_wild126Ddvl = hs_ds126DcDD.hscall();
        }
        var hs_y26DcDH = hs_wild126Ddvl.data[0];
        throw "primitive operation gtFloat#. Not implemeted yet.";
    };
    this.hs_negateFloat.evaluate = function (hs_ds26DcDJ) {
        var hs_wild26Ddvo = hs_ds26DcDJ;
        if (hs_ds26DcDJ.notEvaluated) {
            hs_wild26Ddvo = hs_ds26DcDJ.hscall();
        }
        var hs_x26DcDM = hs_wild26Ddvo.data[0];
        throw "primitive operation negateFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddvn];
        return $res;
    };
    this.hs_divideFloat.evaluate = function (hs_ds26DcDQ, hs_ds126DcDT) {
        var hs_wild26Ddvq = hs_ds26DcDQ;
        if (hs_ds26DcDQ.notEvaluated) {
            hs_wild26Ddvq = hs_ds26DcDQ.hscall();
        }
        var hs_x26DcDW = hs_wild26Ddvq.data[0];
        var hs_wild126Ddvp = hs_ds126DcDT;
        if (hs_ds126DcDT.notEvaluated) {
            hs_wild126Ddvp = hs_ds126DcDT.hscall();
        }
        var hs_y26DcDX = hs_wild126Ddvp.data[0];
        throw "primitive operation divideFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_wild226DcDZ];
        return $res;
    };
    this.hs_timesFloat.evaluate = function (hs_ds26DcE2, hs_ds126DcE5) {
        var hs_wild26Ddvt = hs_ds26DcE2;
        if (hs_ds26DcE2.notEvaluated) {
            hs_wild26Ddvt = hs_ds26DcE2.hscall();
        }
        var hs_x26DcE8 = hs_wild26Ddvt.data[0];
        var hs_wild126Ddvs = hs_ds126DcE5;
        if (hs_ds126DcE5.notEvaluated) {
            hs_wild126Ddvs = hs_ds126DcE5.hscall();
        }
        var hs_y26DcE9 = hs_wild126Ddvs.data[0];
        throw "primitive operation timesFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddvr];
        return $res;
    };
    this.hs_minusFloat.evaluate = function (hs_ds26DcEd, hs_ds126DcEg) {
        var hs_wild26Ddvw = hs_ds26DcEd;
        if (hs_ds26DcEd.notEvaluated) {
            hs_wild26Ddvw = hs_ds26DcEd.hscall();
        }
        var hs_x26DcEj = hs_wild26Ddvw.data[0];
        var hs_wild126Ddvv = hs_ds126DcEg;
        if (hs_ds126DcEg.notEvaluated) {
            hs_wild126Ddvv = hs_ds126DcEg.hscall();
        }
        var hs_y26DcEk = hs_wild126Ddvv.data[0];
        throw "primitive operation minusFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddvu];
        return $res;
    };
    this.hs_plusFloat.evaluate = function (hs_ds26DcEo, hs_ds126DcEr) {
        var hs_wild26Ddvz = hs_ds26DcEo;
        if (hs_ds26DcEo.notEvaluated) {
            hs_wild26Ddvz = hs_ds26DcEo.hscall();
        }
        var hs_x26DcEu = hs_wild26Ddvz.data[0];
        var hs_wild126Ddvy = hs_ds126DcEr;
        if (hs_ds126DcEr.notEvaluated) {
            hs_wild126Ddvy = hs_ds126DcEr.hscall();
        }
        var hs_y26DcEv = hs_wild126Ddvy.data[0];
        throw "primitive operation plusFloat#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddvx];
        return $res;
    };
    this.hs_maxExpt.data = [1100];
    this.hs_minExpt.data = [0];
    this.hs_isFloatNaN.evaluate = function (hs_ds26DcEy) {
        var hs_ds126DdvC = hs_ds26DcEy;
        if (hs_ds26DcEy.notEvaluated) {
            hs_ds126DdvC = hs_ds26DcEy.hscall();
        }
        var hs_ds226DcEC = hs_ds126DdvC.data[0];
        var hs_wild26DdvB = [$hs.modules.GHCziPrim.hs_realWorldzh, isFloatNaN(hs_ds226DcEC)];
        var hs_ds426DcEH = hs_wild26DdvB[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426DcEH];
        return $res;
    };
    this.hs_isFloatInfinite.evaluate = function (hs_ds26DcEJ) {
        var hs_ds126DdvF = hs_ds26DcEJ;
        if (hs_ds26DcEJ.notEvaluated) {
            hs_ds126DdvF = hs_ds26DcEJ.hscall();
        }
        var hs_ds226DcEN = hs_ds126DdvF.data[0];
        var hs_wild26DdvE = [$hs.modules.GHCziPrim.hs_realWorldzh, isFloatInfinite(hs_ds226DcEN)];
        var hs_ds426DcES = hs_wild26DdvE[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426DcES];
        return $res;
    };
    this.hs_isFloatDenormalizzed.evaluate = function (hs_ds26DcEU) {
        var hs_ds126DdvI = hs_ds26DcEU;
        if (hs_ds26DcEU.notEvaluated) {
            hs_ds126DdvI = hs_ds26DcEU.hscall();
        }
        var hs_ds226DcEY = hs_ds126DdvI.data[0];
        var hs_wild26DdvH = [$hs.modules.GHCziPrim.hs_realWorldzh, isFloatDenormali=d(hs_ds226DcEY)];
        var hs_ds426DcF3 = hs_wild26DdvH[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426DcF3];
        return $res;
    };
    this.hs_isFloatNegativeZZero.evaluate = function (hs_ds26DcF5) {
        var hs_ds126DdvL = hs_ds26DcF5;
        if (hs_ds26DcF5.notEvaluated) {
            hs_ds126DdvL = hs_ds26DcF5.hscall();
        }
        var hs_ds226DcF9 = hs_ds126DdvL.data[0];
        var hs_wild26DdvK = [$hs.modules.GHCziPrim.hs_realWorldzh, isFloatNegativeero(hs_ds226DcF9)];
        var hs_ds426DcFe = hs_wild26DdvK[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426DcFe];
        return $res;
    };
    this.hs_isDoubleNaN.evaluate = function (hs_ds26DcFg) {
        var hs_ds126DdvO = hs_ds26DcFg;
        if (hs_ds26DcFg.notEvaluated) {
            hs_ds126DdvO = hs_ds26DcFg.hscall();
        }
        var hs_ds226DcFk = hs_ds126DdvO.data[0];
        var hs_wild26DdvN = [$hs.modules.GHCziPrim.hs_realWorldzh, isDoubleNaN(hs_ds226DcFk)];
        var hs_ds426DcFp = hs_wild26DdvN[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426DcFp];
        return $res;
    };
    this.hs_isDoubleInfinite.evaluate = function (hs_ds26DcFr) {
        var hs_ds126DdvR = hs_ds26DcFr;
        if (hs_ds26DcFr.notEvaluated) {
            hs_ds126DdvR = hs_ds26DcFr.hscall();
        }
        var hs_ds226DcFv = hs_ds126DdvR.data[0];
        var hs_wild26DdvQ = [$hs.modules.GHCziPrim.hs_realWorldzh, isDoubleInfinite(hs_ds226DcFv)];
        var hs_ds426DcFA = hs_wild26DdvQ[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426DcFA];
        return $res;
    };
    this.hs_isDoubleDenormalizzed.evaluate = function (hs_ds26DcFC) {
        var hs_ds126DdvU = hs_ds26DcFC;
        if (hs_ds26DcFC.notEvaluated) {
            hs_ds126DdvU = hs_ds26DcFC.hscall();
        }
        var hs_ds226DcFG = hs_ds126DdvU.data[0];
        var hs_wild26DdvT = [$hs.modules.GHCziPrim.hs_realWorldzh, isDoubleDenormali=d(hs_ds226DcFG)];
        var hs_ds426DcFL = hs_wild26DdvT[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426DcFL];
        return $res;
    };
    this.hs_isDoubleNegativeZZero.evaluate = function (hs_ds26DcFN) {
        var hs_ds126DdvX = hs_ds26DcFN;
        if (hs_ds26DcFN.notEvaluated) {
            hs_ds126DdvX = hs_ds26DcFN.hscall();
        }
        var hs_ds226DcFR = hs_ds126DdvX.data[0];
        var hs_wild26DdvW = [$hs.modules.GHCziPrim.hs_realWorldzh, isDoubleNegativeero(hs_ds226DcFR)];
        var hs_ds426DcFW = hs_wild26DdvW[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426DcFW];
        return $res;
    };
    hs_zddShow25uO9I.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfShowRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddEq25uO9K.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfEqRatio.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum25uO9M.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfNumRatio.hscall(hs_zddEq25uO9K, hs_zddShow25uO9I, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdcfromInteger25uO9O.evaluate = function (hs_eta26DcG6) {
        var hs_wild26DcG8 = $hs.modules.GHCziInteger.hs_floatFromInteger.hscall(hs_eta26DcG6);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild26DcG8];
        return $res;
    };
    hs_zdcabs25uO9U.evaluate = function (hs_x26DcGc) {
        var hs_sat26DdvZ = new $hs.Data(1);
        hs_sat26DdvZ.data = [0 % 1];
        var hs_wild26DdvY = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat, hs_x26DcGc, hs_sat26DdvZ);
        switch (hs_wild26DdvY.tag) {
        case 1:
            return $hs.modules.GHCziFloat.hs_negateFloat.hscall(hs_x26DcGc);
        case 2:
            if (hs_x26DcGc.notEvaluated) {
                return hs_x26DcGc.hscall();
            } else {
                return hs_x26DcGc;
            }
        }
    };
    hs_zdcnegate25uOa0.evaluate = function (hs_x26DcGi) {
        return $hs.modules.GHCziFloat.hs_negateFloat.hscall(hs_x26DcGi);
    };
    hs_zdczm25uOa4.evaluate = function (hs_x26DcGn, hs_y26DcGo) {
        return $hs.modules.GHCziFloat.hs_minusFloat.hscall(hs_x26DcGn, hs_y26DcGo);
    };
    hs_zdczt25uOaa.evaluate = function (hs_x26DcGt, hs_y26DcGu) {
        return $hs.modules.GHCziFloat.hs_timesFloat.hscall(hs_x26DcGt, hs_y26DcGu);
    };
    hs_zdczp25uOag.evaluate = function (hs_x26DcGz, hs_y26DcGA) {
        return $hs.modules.GHCziFloat.hs_plusFloat.hscall(hs_x26DcGz, hs_y26DcGA);
    };
    hs_zddFractional25uOam.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfFractionalRatio.hscall(hs_zddNum25uO9M, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zdczs25uOao.evaluate = function (hs_x26DcGH, hs_y26DcGI) {
        return $hs.modules.GHCziFloat.hs_divideFloat.hscall(hs_x26DcGH, hs_y26DcGI);
    };
    hs_zdccosh25uOau.evaluate = function (hs_x26DcGM) {
        return $hs.modules.GHCziFloat.hs_coshFloat.hscall(hs_x26DcGM);
    };
    hs_zdctanh25uOay.evaluate = function (hs_x26DcGQ) {
        return $hs.modules.GHCziFloat.hs_tanhFloat.hscall(hs_x26DcGQ);
    };
    hs_zdcsinh25uOaC.evaluate = function (hs_x26DcGU) {
        return $hs.modules.GHCziFloat.hs_sinhFloat.hscall(hs_x26DcGU);
    };
    hs_zdcacos25uOaG.evaluate = function (hs_x26DcGY) {
        return $hs.modules.GHCziFloat.hs_acosFloat.hscall(hs_x26DcGY);
    };
    hs_zdcatan25uOaK.evaluate = function (hs_x26DcH2) {
        return $hs.modules.GHCziFloat.hs_atanFloat.hscall(hs_x26DcH2);
    };
    hs_zdcasin25uOaO.evaluate = function (hs_x26DcH6) {
        return $hs.modules.GHCziFloat.hs_asinFloat.hscall(hs_x26DcH6);
    };
    hs_zdccos25uOaS.evaluate = function (hs_x26DcHa) {
        return $hs.modules.GHCziFloat.hs_cosFloat.hscall(hs_x26DcHa);
    };
    hs_zdctan25uOaW.evaluate = function (hs_x26DcHe) {
        return $hs.modules.GHCziFloat.hs_tanFloat.hscall(hs_x26DcHe);
    };
    hs_zdcsin25uOb0.evaluate = function (hs_x26DcHi) {
        return $hs.modules.GHCziFloat.hs_sinFloat.hscall(hs_x26DcHi);
    };
    hs_zdcztzt25uOb4.evaluate = function (hs_x26DcHn, hs_y26DcHo) {
        return $hs.modules.GHCziFloat.hs_powerFloat.hscall(hs_x26DcHn, hs_y26DcHo);
    };
    hs_zdclog25uOba.evaluate = function (hs_x26DcHs) {
        return $hs.modules.GHCziFloat.hs_logFloat.hscall(hs_x26DcHs);
    };
    hs_zdcsqrt25uObe.evaluate = function (hs_x26DcHw) {
        return $hs.modules.GHCziFloat.hs_sqrtFloat.hscall(hs_x26DcHw);
    };
    hs_zdcexp25uObi.evaluate = function (hs_x26DcHA) {
        return $hs.modules.GHCziFloat.hs_expFloat.hscall(hs_x26DcHA);
    };
    hs_zdcpi25uObm.data = [1570796326794896619 % 500000000000000000];
    hs_zdcisIEEE25uObo.evaluate = function (hs_ds26DcHG) {
        var $res = new $hs.Data(2);
        $res.data = [];
        return $res;
    };
    hs_zdcisNegativeZZero25uObs.evaluate = function (hs_x26DcHL) {
        var hs_sat26Ddw3 = new $hs.Thunk();
        hs_sat26Ddw3.evaluateOnce = function () {
            var hs_ds26Ddw2 = hs_x26DcHL;
            if (hs_x26DcHL.notEvaluated) {
                hs_ds26Ddw2 = hs_x26DcHL.hscall();
            }
            var hs_ds126DcHP = hs_ds26Ddw2.data[0];
            var hs_wild26Ddw1 = [$hs.modules.GHCziPrim.hs_realWorldzh, isFloatNegativeero(hs_ds126DcHP)];
            var hs_ds326DcHU = hs_wild26Ddw1[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DcHU];
            return $res;
        };
        var hs_sat26Ddw4 = new $hs.Data(1);
        hs_sat26Ddw4.data = [0];
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26Ddw4, hs_sat26Ddw3);
    };
    hs_zdcisDenormalizzed25uObH.evaluate = function (hs_x26DcI0) {
        var hs_sat26Ddw8 = new $hs.Thunk();
        hs_sat26Ddw8.evaluateOnce = function () {
            var hs_ds26Ddw7 = hs_x26DcI0;
            if (hs_x26DcI0.notEvaluated) {
                hs_ds26Ddw7 = hs_x26DcI0.hscall();
            }
            var hs_ds126DcI4 = hs_ds26Ddw7.data[0];
            var hs_wild26Ddw6 = [$hs.modules.GHCziPrim.hs_realWorldzh, isFloatDenormali=d(hs_ds126DcI4)];
            var hs_ds326DcI9 = hs_wild26Ddw6[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DcI9];
            return $res;
        };
        var hs_sat26Ddw9 = new $hs.Data(1);
        hs_sat26Ddw9.data = [0];
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26Ddw9, hs_sat26Ddw8);
    };
    hs_zdcisInfinite25uObW.evaluate = function (hs_x26DcIf) {
        var hs_sat26Ddwd = new $hs.Thunk();
        hs_sat26Ddwd.evaluateOnce = function () {
            var hs_ds26Ddwc = hs_x26DcIf;
            if (hs_x26DcIf.notEvaluated) {
                hs_ds26Ddwc = hs_x26DcIf.hscall();
            }
            var hs_ds126DcIj = hs_ds26Ddwc.data[0];
            var hs_wild26Ddwb = [$hs.modules.GHCziPrim.hs_realWorldzh, isFloatInfinite(hs_ds126DcIj)];
            var hs_ds326DcIo = hs_wild26Ddwb[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DcIo];
            return $res;
        };
        var hs_sat26Ddwe = new $hs.Data(1);
        hs_sat26Ddwe.data = [0];
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26Ddwe, hs_sat26Ddwd);
    };
    hs_zdcisNaN25uOcb.evaluate = function (hs_x26DcIu) {
        var hs_sat26Ddwi = new $hs.Thunk();
        hs_sat26Ddwi.evaluateOnce = function () {
            var hs_ds26Ddwh = hs_x26DcIu;
            if (hs_x26DcIu.notEvaluated) {
                hs_ds26Ddwh = hs_x26DcIu.hscall();
            }
            var hs_ds126DcIy = hs_ds26Ddwh.data[0];
            var hs_wild26Ddwg = [$hs.modules.GHCziPrim.hs_realWorldzh, isFloatNaN(hs_ds126DcIy)];
            var hs_ds326DcID = hs_wild26Ddwg[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DcID];
            return $res;
        };
        var hs_sat26Ddwj = new $hs.Data(1);
        hs_sat26Ddwj.data = [0];
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26Ddwj, hs_sat26Ddwi);
    };
    hs_zdcencodeFloat25uOcq.evaluate = function (hs_i26DcIM, hs_ds26DcIJ) {
        var hs_wild26Ddwk = hs_ds26DcIJ;
        if (hs_ds26DcIJ.notEvaluated) {
            hs_wild26Ddwk = hs_ds26DcIJ.hscall();
        }
        var hs_e26DcIN = hs_wild26Ddwk.data[0];
        var hs_wild126DcIP = $hs.modules.GHCziInteger.hs_encodeFloatInteger.hscall(hs_i26DcIM, hs_e26DcIN);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild126DcIP];
        return $res;
    };
    hs_zdcdecodeFloat25uOcB.evaluate = function (hs_ds26DcIT) {
        var hs_wild26Ddwm = hs_ds26DcIT;
        if (hs_ds26DcIT.notEvaluated) {
            hs_wild26Ddwm = hs_ds26DcIT.hscall();
        }
        var hs_fzh26DcIW = hs_wild26Ddwm.data[0];
        throw "primitive operation decodeFloat_Int#. Not implemeted yet.";
        var hs_i26DcJ0 = hs_wild126Ddwl[0];
        var hs_e26DcJ2 = hs_wild126Ddwl[1];
        var hs_sat26Ddwn = new $hs.Data(1);
        hs_sat26Ddwn.data = [hs_e26DcJ2];
        var hs_sat26Ddwo = new $hs.Thunk();
        hs_sat26Ddwo.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_i26DcJ0);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddwo, hs_sat26Ddwn];
        return $res;
    };
    hs_zdcfloatRange25uOcP.evaluate = function (hs_ds26DcJa) {
        var hs_sat26Ddwp = new $hs.Data(1);
        hs_sat26Ddwp.data = [128];
        var hs_sat26Ddwr = new $hs.Thunk();
        hs_sat26Ddwr.evaluateOnce = function () {
            var hs_sat26Ddwq = new $hs.Data(1);
            hs_sat26Ddwq.data = [125];
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Ddwq);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddwr, hs_sat26Ddwp];
        return $res;
    };
    hs_zdcfloatDigits25uOcW.evaluate = function (hs_ds26DcJe) {
        var $res = new $hs.Data(1);
        $res.data = [24];
        return $res;
    };
    hs_zdcfloatRadix25uOd0.evaluate = function (hs_ds26DcJi) {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
    };
    hs_zdcfromInteger125uOd4.evaluate = function (hs_eta26DcJm) {
        var hs_wild26DcJo = $hs.modules.GHCziInteger.hs_doubleFromInteger.hscall(hs_eta26DcJm);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild26DcJo];
        return $res;
    };
    hs_zdcabs125uOda.evaluate = function (hs_x26DcJs) {
        var hs_sat26Ddwt = new $hs.Data(1);
        hs_sat26Ddwt.data = [0 % 1];
        var hs_wild26Ddws = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_x26DcJs, hs_sat26Ddwt);
        switch (hs_wild26Ddws.tag) {
        case 1:
            return $hs.modules.GHCziFloat.hs_negateDouble.hscall(hs_x26DcJs);
        case 2:
            if (hs_x26DcJs.notEvaluated) {
                return hs_x26DcJs.hscall();
            } else {
                return hs_x26DcJs;
            }
        }
    };
    hs_zdcnegate125uOdg.evaluate = function (hs_x26DcJy) {
        return $hs.modules.GHCziFloat.hs_negateDouble.hscall(hs_x26DcJy);
    };
    hs_zdczm125uOdk.evaluate = function (hs_x26DcJD, hs_y26DcJE) {
        return $hs.modules.GHCziFloat.hs_minusDouble.hscall(hs_x26DcJD, hs_y26DcJE);
    };
    hs_zdczt125uOdq.evaluate = function (hs_x26DcJJ, hs_y26DcJK) {
        return $hs.modules.GHCziFloat.hs_timesDouble.hscall(hs_x26DcJJ, hs_y26DcJK);
    };
    hs_zdczp125uOdw.evaluate = function (hs_x26DcJP, hs_y26DcJQ) {
        return $hs.modules.GHCziFloat.hs_plusDouble.hscall(hs_x26DcJP, hs_y26DcJQ);
    };
    hs_zdczs125uOdC.evaluate = function (hs_x26DcJV, hs_y26DcJW) {
        return $hs.modules.GHCziFloat.hs_divideDouble.hscall(hs_x26DcJV, hs_y26DcJW);
    };
    hs_zdccosh125uOdI.evaluate = function (hs_x26DcK0) {
        return $hs.modules.GHCziFloat.hs_coshDouble.hscall(hs_x26DcK0);
    };
    hs_zdctanh125uOdM.evaluate = function (hs_x26DcK4) {
        return $hs.modules.GHCziFloat.hs_tanhDouble.hscall(hs_x26DcK4);
    };
    hs_zdcsinh125uOdQ.evaluate = function (hs_x26DcK8) {
        return $hs.modules.GHCziFloat.hs_sinhDouble.hscall(hs_x26DcK8);
    };
    hs_zdcacos125uOdU.evaluate = function (hs_x26DcKc) {
        return $hs.modules.GHCziFloat.hs_acosDouble.hscall(hs_x26DcKc);
    };
    hs_zdcatan125uOdY.evaluate = function (hs_x26DcKg) {
        return $hs.modules.GHCziFloat.hs_atanDouble.hscall(hs_x26DcKg);
    };
    hs_zdcasin125uOe2.evaluate = function (hs_x26DcKk) {
        return $hs.modules.GHCziFloat.hs_asinDouble.hscall(hs_x26DcKk);
    };
    hs_zdccos125uOe6.evaluate = function (hs_x26DcKo) {
        return $hs.modules.GHCziFloat.hs_cosDouble.hscall(hs_x26DcKo);
    };
    hs_zdctan125uOea.evaluate = function (hs_x26DcKs) {
        return $hs.modules.GHCziFloat.hs_tanDouble.hscall(hs_x26DcKs);
    };
    hs_zdcsin125uOee.evaluate = function (hs_x26DcKw) {
        return $hs.modules.GHCziFloat.hs_sinDouble.hscall(hs_x26DcKw);
    };
    hs_zdcztzt125uOei.evaluate = function (hs_x26DcKB, hs_y26DcKC) {
        return $hs.modules.GHCziFloat.hs_powerDouble.hscall(hs_x26DcKB, hs_y26DcKC);
    };
    hs_zdclog125uOeo.evaluate = function (hs_x26DcKG) {
        return $hs.modules.GHCziFloat.hs_logDouble.hscall(hs_x26DcKG);
    };
    hs_zdcsqrt125uOes.evaluate = function (hs_x26DcKK) {
        return $hs.modules.GHCziFloat.hs_sqrtDouble.hscall(hs_x26DcKK);
    };
    hs_zdcexp125uOew.evaluate = function (hs_x26DcKO) {
        return $hs.modules.GHCziFloat.hs_expDouble.hscall(hs_x26DcKO);
    };
    hs_zdcpi125uOeA.data = [1570796326794896619 % 500000000000000000];
    hs_zdcisIEEE125uOeC.evaluate = function (hs_ds26DcKU) {
        var $res = new $hs.Data(2);
        $res.data = [];
        return $res;
    };
    hs_zdcisNegativeZZero125uOeG.evaluate = function (hs_x26DcKZ) {
        var hs_sat26Ddwx = new $hs.Thunk();
        hs_sat26Ddwx.evaluateOnce = function () {
            var hs_ds26Ddww = hs_x26DcKZ;
            if (hs_x26DcKZ.notEvaluated) {
                hs_ds26Ddww = hs_x26DcKZ.hscall();
            }
            var hs_ds126DcL3 = hs_ds26Ddww.data[0];
            var hs_wild26Ddwv = [$hs.modules.GHCziPrim.hs_realWorldzh, isDoubleNegativeero(hs_ds126DcL3)];
            var hs_ds326DcL8 = hs_wild26Ddwv[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DcL8];
            return $res;
        };
        var hs_sat26Ddwy = new $hs.Data(1);
        hs_sat26Ddwy.data = [0];
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26Ddwy, hs_sat26Ddwx);
    };
    hs_zdcisDenormalizzed125uOeV.evaluate = function (hs_x26DcLe) {
        var hs_sat26DdwC = new $hs.Thunk();
        hs_sat26DdwC.evaluateOnce = function () {
            var hs_ds26DdwB = hs_x26DcLe;
            if (hs_x26DcLe.notEvaluated) {
                hs_ds26DdwB = hs_x26DcLe.hscall();
            }
            var hs_ds126DcLi = hs_ds26DdwB.data[0];
            var hs_wild26DdwA = [$hs.modules.GHCziPrim.hs_realWorldzh, isDoubleDenormali=d(hs_ds126DcLi)];
            var hs_ds326DcLn = hs_wild26DdwA[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DcLn];
            return $res;
        };
        var hs_sat26DdwD = new $hs.Data(1);
        hs_sat26DdwD.data = [0];
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DdwD, hs_sat26DdwC);
    };
    hs_zdcisInfinite125uOfa.evaluate = function (hs_x26DcLt) {
        var hs_sat26DdwH = new $hs.Thunk();
        hs_sat26DdwH.evaluateOnce = function () {
            var hs_ds26DdwG = hs_x26DcLt;
            if (hs_x26DcLt.notEvaluated) {
                hs_ds26DdwG = hs_x26DcLt.hscall();
            }
            var hs_ds126DcLx = hs_ds26DdwG.data[0];
            var hs_wild26DdwF = [$hs.modules.GHCziPrim.hs_realWorldzh, isDoubleInfinite(hs_ds126DcLx)];
            var hs_ds326DcLC = hs_wild26DdwF[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DcLC];
            return $res;
        };
        var hs_sat26DdwI = new $hs.Data(1);
        hs_sat26DdwI.data = [0];
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DdwI, hs_sat26DdwH);
    };
    hs_zdcisNaN125uOfp.evaluate = function (hs_x26DcLI) {
        var hs_sat26DdwM = new $hs.Thunk();
        hs_sat26DdwM.evaluateOnce = function () {
            var hs_ds26DdwL = hs_x26DcLI;
            if (hs_x26DcLI.notEvaluated) {
                hs_ds26DdwL = hs_x26DcLI.hscall();
            }
            var hs_ds126DcLM = hs_ds26DdwL.data[0];
            var hs_wild26DdwK = [$hs.modules.GHCziPrim.hs_realWorldzh, isDoubleNaN(hs_ds126DcLM)];
            var hs_ds326DcLR = hs_wild26DdwK[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DcLR];
            return $res;
        };
        var hs_sat26DdwN = new $hs.Data(1);
        hs_sat26DdwN.data = [0];
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DdwN, hs_sat26DdwM);
    };
    hs_zdcencodeFloat125uOfE.evaluate = function (hs_i26DcM0, hs_ds26DcLX) {
        var hs_wild26DdwO = hs_ds26DcLX;
        if (hs_ds26DcLX.notEvaluated) {
            hs_wild26DdwO = hs_ds26DcLX.hscall();
        }
        var hs_j26DcM1 = hs_wild26DdwO.data[0];
        var hs_wild126DcM3 = $hs.modules.GHCziInteger.hs_encodeDoubleInteger.hscall(hs_i26DcM0, hs_j26DcM1);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild126DcM3];
        return $res;
    };
    hs_zdcdecodeFloat125uOfP.evaluate = function (hs_ds26DcM7) {
        var hs_wild26DdwQ = hs_ds26DcM7;
        if (hs_ds26DcM7.notEvaluated) {
            hs_wild26DdwQ = hs_ds26DcM7.hscall();
        }
        var hs_xzh26DcMa = hs_wild26DdwQ.data[0];
        var hs_wild126DdwP = $hs.modules.GHCziInteger.hs_decodeDoubleInteger.hscall(hs_xzh26DcMa);
        var hs_i26DcMe = hs_wild126DdwP[0];
        var hs_j26DcMf = hs_wild126DdwP[1];
        var hs_sat26DdwR = new $hs.Data(1);
        hs_sat26DdwR.data = [hs_j26DcMf];
        var $res = new $hs.Data(1);
        $res.data = [hs_i26DcMe, hs_sat26DdwR];
        return $res;
    };
    hs_zdcfloatRange125uOg2.evaluate = function (hs_ds26DcMn) {
        var hs_sat26DdwS = new $hs.Data(1);
        hs_sat26DdwS.data = [1024];
        var hs_sat26DdwU = new $hs.Thunk();
        hs_sat26DdwU.evaluateOnce = function () {
            var hs_sat26DdwT = new $hs.Data(1);
            hs_sat26DdwT.data = [1021];
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdwT);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DdwU, hs_sat26DdwS];
        return $res;
    };
    hs_zdcfloatDigits125uOg9.evaluate = function (hs_ds26DcMr) {
        var $res = new $hs.Data(1);
        $res.data = [53];
        return $res;
    };
    hs_zdcfloatRadix125uOgd.evaluate = function (hs_ds26DcMv) {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
    };
    this.hs_roundTo.evaluate = function (hs_base26DcMA, hs_d26DcNA, hs_is26DcNB) {
        var hs_b226DcMC = new $hs.Thunk();
        hs_b226DcMC.evaluateOnce = function () {
            var hs_sat26DdwV = new $hs.Data(1);
            hs_sat26DdwV.data = [2];
            return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_base26DcMA, hs_sat26DdwV);
        };
        var hs_f26DcMW = new $hs.Func(2);
        hs_f26DcMW.evaluate = function (hs_n26DcMJ, hs_ds26DcMG) {
            var hs_wild26DcMQ = hs_ds26DcMG;
            if (hs_ds26DcMG.notEvaluated) {
                hs_wild26DcMQ = hs_ds26DcMG.hscall();
            }
            switch (hs_wild26DcMQ.tag) {
            case 1:
                var hs_sat26DdwX = new $hs.Thunk();
                hs_sat26DdwX.evaluateOnce = function () {
                    var hs_sat26DdwW = new $hs.Data(1);
                    hs_sat26DdwW.data = [0];
                    return $hs.modules.GHCziList.hs_replicate.hscall(hs_n26DcMJ, hs_sat26DdwW);
                };
                var hs_sat26DdwY = new $hs.Data(1);
                hs_sat26DdwY.data = [0];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26DdwY, hs_sat26DdwX];
                return $res;
            case 2:
                var hs_fail26DcNp = new $hs.Func(1);
                hs_fail26DcNp.evaluate = function (hs_ds126DcNo) {
                    var hs_wild126DdwZ = hs_wild26DcMQ;
                    if (hs_wild26DcMQ.notEvaluated) {
                        hs_wild126DdwZ = hs_wild26DcMQ.hscall();
                    }
                    switch (hs_wild126DdwZ.tag) {
                    case 1:
                        return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("../../ghc-7.0.2/libraries/base/GHC/Float.lhs:(558,3)-(565,21)|function f\x00");
                    case 2:
                        var hs_i26DcN6 = hs_wild126DdwZ.data[0];
                        var hs_xs26DcMY = hs_wild126DdwZ.data[1];
                        var hs_ds226DcMZ = new $hs.Thunk();
                        hs_ds226DcMZ.evaluateOnce = function () {
                            var hs_sat26Ddx3 = new $hs.Thunk();
                            hs_sat26Ddx3.evaluateOnce = function () {
                                var hs_sat26Ddx2 = new $hs.Data(1);
                                hs_sat26Ddx2.data = [1];
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26DcMJ, hs_sat26Ddx2);
                            };
                            return hs_f26DcMW.hscall(hs_sat26Ddx3, hs_xs26DcMY);
                        };
                        var hs_izq26DcN7 = new $hs.Thunk();
                        hs_izq26DcN7.evaluateOnce = function () {
                            var hs_sat26Ddx6 = new $hs.Thunk();
                            hs_sat26Ddx6.evaluateOnce = function () {
                                var hs_wild226Ddx4 = hs_ds226DcMZ;
                                if (hs_ds226DcMZ.notEvaluated) {
                                    hs_wild226Ddx4 = hs_ds226DcMZ.hscall();
                                }
                                var hs_c26DcN4 = hs_wild226Ddx4.data[0];
                                if (hs_c26DcN4.notEvaluated) {
                                    return hs_c26DcN4.hscall();
                                } else {
                                    return hs_c26DcN4;
                                }
                            };
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Ddx6, hs_i26DcN6);
                        };
                        var hs_wild226Ddx9 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_izq26DcN7, hs_base26DcMA);
                        switch (hs_wild226Ddx9.tag) {
                        case 1:
                            var hs_sat26Ddxa = new $hs.Thunk();
                            hs_sat26Ddxa.evaluateOnce = function () {
                                var hs_wild326Ddx8 = hs_ds226DcMZ;
                                if (hs_ds226DcMZ.notEvaluated) {
                                    hs_wild326Ddx8 = hs_ds226DcMZ.hscall();
                                }
                                var hs_ds326DcNd = hs_wild326Ddx8.data[1];
                                if (hs_ds326DcNd.notEvaluated) {
                                    return hs_ds326DcNd.hscall();
                                } else {
                                    return hs_ds326DcNd;
                                }
                            };
                            var hs_sat26Ddxb = new $hs.Data(2);
                            hs_sat26Ddxb.data = [hs_izq26DcN7, hs_sat26Ddxa];
                            var hs_sat26Ddxc = new $hs.Data(1);
                            hs_sat26Ddxc.data = [0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_sat26Ddxc, hs_sat26Ddxb];
                            return $res;
                        case 2:
                            var hs_sat26Ddxf = new $hs.Thunk();
                            hs_sat26Ddxf.evaluateOnce = function () {
                                var hs_wild326Ddxe = hs_ds226DcMZ;
                                if (hs_ds226DcMZ.notEvaluated) {
                                    hs_wild326Ddxe = hs_ds226DcMZ.hscall();
                                }
                                var hs_ds326DcNl = hs_wild326Ddxe.data[1];
                                if (hs_ds326DcNl.notEvaluated) {
                                    return hs_ds326DcNl.hscall();
                                } else {
                                    return hs_ds326DcNl;
                                }
                            };
                            var hs_sat26Ddxg = new $hs.Data(1);
                            hs_sat26Ddxg.data = [0];
                            var hs_sat26Ddxh = new $hs.Data(2);
                            hs_sat26Ddxh.data = [hs_sat26Ddxg, hs_sat26Ddxf];
                            var hs_sat26Ddxi = new $hs.Data(1);
                            hs_sat26Ddxi.data = [1];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_sat26Ddxi, hs_sat26Ddxh];
                            return $res;
                        }
                    }
                };
                var hs_wild126Ddxk = hs_n26DcMJ;
                if (hs_n26DcMJ.notEvaluated) {
                    hs_wild126Ddxk = hs_n26DcMJ.hscall();
                }
                var hs_ds126DcNs = hs_wild126Ddxk.data[0];
                var hs_ds226Ddxj = hs_ds126DcNs;
                if (hs_ds126DcNs.notEvaluated) {
                    hs_ds226Ddxj = hs_ds126DcNs.hscall();
                }
                switch (hs_ds226Ddxj) {
                case 0:
                    var hs_wild226Ddxl = hs_wild26DcMQ;
                    if (hs_wild26DcMQ.notEvaluated) {
                        hs_wild226Ddxl = hs_wild26DcMQ.hscall();
                    }
                    switch (hs_wild226Ddxl.tag) {
                    case 1:
                        return hs_fail26DcNp.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    case 2:
                        var hs_x26DcNx = hs_wild226Ddxl.data[0];
                        var hs_sat26Ddxo = new $hs.Thunk();
                        hs_sat26Ddxo.evaluateOnce = function () {
                            var hs_wild326Ddxm = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_x26DcNx, hs_b226DcMC);
                            switch (hs_wild326Ddxm.tag) {
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
                        $res.data = [hs_sat26Ddxo, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $res;
                    }
                default:
                    return hs_fail26DcNp.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            }
        };
        var hs_wild26DcNL = hs_f26DcMW.hscall(hs_d26DcNA, hs_is26DcNB);
        var hs_ds26DcNF = hs_wild26DcNL.data[0];
        var hs_ds126DcNO = hs_wild26DcNL.data[1];
        var hs_wild126Ddxr = hs_ds26DcNF;
        if (hs_ds26DcNF.notEvaluated) {
            hs_wild126Ddxr = hs_ds26DcNF.hscall();
        }
        var hs_ds226DcNI = hs_wild126Ddxr.data[0];
        var hs_ds326Ddxq = hs_ds226DcNI;
        if (hs_ds226DcNI.notEvaluated) {
            hs_ds326Ddxq = hs_ds226DcNI.hscall();
        }
        switch (hs_ds326Ddxq) {
        case 0:
            if (hs_wild26DcNL.notEvaluated) {
                return hs_wild26DcNL.hscall();
            } else {
                return hs_wild26DcNL;
            }
        case 1:
            var hs_sat26Ddxs = new $hs.Data(1);
            hs_sat26Ddxs.data = [1];
            var hs_sat26Ddxt = new $hs.Data(2);
            hs_sat26Ddxt.data = [hs_sat26Ddxs, hs_ds126DcNO];
            var hs_sat26Ddxu = new $hs.Data(1);
            hs_sat26Ddxu.data = [1];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Ddxu, hs_sat26Ddxt];
            return $res;
        default:
            var hs_sat26Ddxp = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("roundTo: bad Value\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Ddxp);
        }
    };
    hs_zddOrd25uOhB.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdfOrdRatio.hscall(hs_zddEq25uO9K, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    this.hs_scaleRat.evaluate = function (hs_b26DcO6, hs_minExp26DcNZ, hs_xMin26DcO4, hs_xMax26DcO2, hs_p26DcNY, hs_x26DcO1) {
        var hs_wild26Ddxx = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_p26DcNY, hs_minExp26DcNZ);
        switch (hs_wild26Ddxx.tag) {
        case 1:
            var hs_wild126Ddxw = $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd25uOhB, hs_x26DcO1, hs_xMax26DcO2);
            switch (hs_wild126Ddxw.tag) {
            case 1:
                var hs_wild226Ddxv = $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd25uOhB, hs_x26DcO1, hs_xMin26DcO4);
                switch (hs_wild226Ddxv.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [hs_x26DcO1, hs_p26DcNY];
                    return $res;
                case 2:
                    var hs_sat26Ddxy = new $hs.Thunk();
                    hs_sat26Ddxy.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum25uO9M, hs_x26DcO1, hs_b26DcO6);
                    };
                    var hs_sat26DdxA = new $hs.Thunk();
                    hs_sat26DdxA.evaluateOnce = function () {
                        var hs_sat26Ddxz = new $hs.Data(1);
                        hs_sat26Ddxz.data = [1];
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p26DcNY, hs_sat26Ddxz);
                    };
                    return $hs.modules.GHCziFloat.hs_scaleRat.hscall(hs_b26DcO6, hs_minExp26DcNZ, hs_xMin26DcO4, hs_xMax26DcO2, hs_sat26DdxA, hs_sat26Ddxy);
                }
            case 2:
                var hs_sat26DdxB = new $hs.Thunk();
                hs_sat26DdxB.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional25uOam, hs_x26DcO1, hs_b26DcO6);
                };
                var hs_sat26DdxD = new $hs.Thunk();
                hs_sat26DdxD.evaluateOnce = function () {
                    var hs_sat26DdxC = new $hs.Data(1);
                    hs_sat26DdxC.data = [1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p26DcNY, hs_sat26DdxC);
                };
                return $hs.modules.GHCziFloat.hs_scaleRat.hscall(hs_b26DcO6, hs_minExp26DcNZ, hs_xMin26DcO4, hs_xMax26DcO2, hs_sat26DdxD, hs_sat26DdxB);
            }
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [hs_x26DcO1, hs_p26DcNY];
            return $res;
        }
    };
    hs_sat26DdxK.evaluateOnce = function () {
        var hs_ds26DcOp = new $hs.Func(1);
        hs_ds26DcOp.evaluate = function (hs_ds126DcOg) {
            var hs_ds226DdxE = hs_ds126DcOg;
            if (hs_ds126DcOg.notEvaluated) {
                hs_ds226DdxE = hs_ds126DcOg.hscall();
            }
            switch (hs_ds226DdxE.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326DcOk = hs_ds226DdxE.data[0];
                var hs_ds426DcOo = hs_ds226DdxE.data[1];
                var hs_sat26DdxF = new $hs.Thunk();
                hs_sat26DdxF.evaluateOnce = function () {
                    return hs_ds26DcOp.hscall(hs_ds426DcOo);
                };
                var hs_sat26DdxH = new $hs.Thunk();
                hs_sat26DdxH.evaluateOnce = function () {
                    var hs_sat26DdxG = new $hs.Thunk();
                    hs_sat26DdxG.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                    };
                    return $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26DdxG, hs_ds326DcOk);
                };
                var hs_sat26DdxI = new $hs.Data(1);
                hs_sat26DdxI.data = [hs_ds326DcOk, hs_sat26DdxH];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26DdxI, hs_sat26DdxF];
                return $res;
            }
        };
        var hs_sat26DdxJ = new $hs.Thunk();
        hs_sat26DdxJ.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, $hs.modules.GHCziFloat.hs_minExpt, $hs.modules.GHCziFloat.hs_maxExpt);
        };
        return hs_ds26DcOp.hscall(hs_sat26DdxJ);
    };
    hs_sat26DdxL.data = [$hs.modules.GHCziFloat.hs_minExpt, $hs.modules.GHCziFloat.hs_maxExpt];
    this.hs_expts.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_array.hscall($hs.modules.GHCziArr.hs_zdfIxInt, hs_sat26DdxL, hs_sat26DdxK);
    };
    this.hs_expt.evaluate = function (hs_base26DcOv, hs_n26DcOy) {
        var hs_sat26DdxO = new $hs.Thunk();
        hs_sat26DdxO.evaluateOnce = function () {
            var hs_sat26DdxM = new $hs.Thunk();
            hs_sat26DdxM.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_n26DcOy, $hs.modules.GHCziFloat.hs_maxExpt);
            };
            var hs_sat26DdxN = new $hs.Thunk();
            hs_sat26DdxN.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_n26DcOy, $hs.modules.GHCziFloat.hs_minExpt);
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DdxN, hs_sat26DdxM);
        };
        var hs_sat26DdxR = new $hs.Thunk();
        hs_sat26DdxR.evaluateOnce = function () {
            var hs_sat26DdxP = new $hs.Thunk();
            hs_sat26DdxP.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
            };
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_base26DcOv, hs_sat26DdxP);
        };
        var hs_wild26DdxQ = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DdxR, hs_sat26DdxO);
        switch (hs_wild26DdxQ.tag) {
        case 1:
            return $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_base26DcOv, hs_n26DcOy);
        case 2:
            return $hs.modules.GHCziArr.hs_zn.hscall($hs.modules.GHCziArr.hs_zdfIxInt, $hs.modules.GHCziFloat.hs_expts, hs_n26DcOy);
        }
    };
    this.hs_integerLogBase.evaluate = function (hs_b26DcOJ, hs_i26DcOT) {
        var hs_doDiv26DcOL = new $hs.Func(2);
        hs_doDiv26DcOL.evaluate = function (hs_x26DcOI, hs_y26DcON) {
            var hs_wild26DdxS = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_x26DcOI, hs_b26DcOJ);
            switch (hs_wild26DdxS.tag) {
            case 1:
                var hs_sat26DdxU = new $hs.Thunk();
                hs_sat26DdxU.evaluateOnce = function () {
                    var hs_sat26DdxT = new $hs.Data(1);
                    hs_sat26DdxT.data = [1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_y26DcON, hs_sat26DdxT);
                };
                var hs_sat26DdxV = new $hs.Thunk();
                hs_sat26DdxV.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_x26DcOI, hs_b26DcOJ);
                };
                return hs_doDiv26DcOL.hscall(hs_sat26DdxV, hs_sat26DdxU);
            case 2:
                if (hs_y26DcON.notEvaluated) {
                    return hs_y26DcON.hscall();
                } else {
                    return hs_y26DcON;
                }
            }
        };
        var hs_l26DcOV = new $hs.Thunk();
        hs_l26DcOV.evaluateOnce = function () {
            var hs_sat26DdxX = new $hs.Thunk();
            hs_sat26DdxX.evaluateOnce = function () {
                var hs_sat26DdxW = new $hs.Thunk();
                hs_sat26DdxW.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_b26DcOJ, hs_b26DcOJ);
                };
                return $hs.modules.GHCziFloat.hs_integerLogBase.hscall(hs_sat26DdxW, hs_i26DcOT);
            };
            var hs_sat26DdxY = new $hs.Data(1);
            hs_sat26DdxY.data = [2];
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdxY, hs_sat26DdxX);
        };
        var hs_wild26DdxZ = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_i26DcOT, hs_b26DcOJ);
        switch (hs_wild26DdxZ.tag) {
        case 1:
            var hs_sat26Ddy1 = new $hs.Thunk();
            hs_sat26Ddy1.evaluateOnce = function () {
                var hs_sat26Ddy0 = new $hs.Thunk();
                hs_sat26Ddy0.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_b26DcOJ, hs_l26DcOV);
                };
                return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_i26DcOT, hs_sat26Ddy0);
            };
            return hs_doDiv26DcOL.hscall(hs_sat26Ddy1, hs_l26DcOV);
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [0];
            return $res;
        }
    };
    this.hs_fromRatzq.evaluate = function (hs_zddRealFloat26DcPb) {
        var hs_zddReal1226DcP1 = new $hs.Thunk();
        hs_zddReal1226DcP1.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfRealRatio.hscall(hs_zddNum25uO9M, hs_zddOrd25uOhB, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
        };
        var hs_zddRealFrac426DcP3 = new $hs.Thunk();
        hs_zddRealFrac426DcP3.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdfRealFracRatio.hscall(hs_zddReal1226DcP1, hs_zddFractional25uOam, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
        };
        var hs_sat26Ddyy = new $hs.Func(1);
        hs_sat26Ddyy.evaluate = function (hs_x26DcPx) {
            var hs_r26DcPo = new $hs.Thunk();
            var hs_p26DcPp = new $hs.Thunk();
            var hs_minExp26DcPv = new $hs.Thunk();
            var hs_b26DcPw = new $hs.Thunk();
            var hs_p026DcPE = new $hs.Thunk();
            var hs_ds26DcPc = new $hs.Thunk();
            hs_r26DcPo.evaluateOnce = function () {
                var hs_sat26Ddy5 = new $hs.Thunk();
                hs_sat26Ddy5.evaluateOnce = function () {
                    var hs_wild26Ddy3 = hs_ds26DcPc;
                    if (hs_ds26DcPc.notEvaluated) {
                        hs_wild26Ddy3 = hs_ds26DcPc.hscall();
                    }
                    var hs_pzq26DcPm = hs_wild26Ddy3.data[1];
                    if (hs_pzq26DcPm.notEvaluated) {
                        return hs_pzq26DcPm.hscall();
                    } else {
                        return hs_pzq26DcPm;
                    }
                };
                var hs_sat26Ddy8 = new $hs.Thunk();
                hs_sat26Ddy8.evaluateOnce = function () {
                    var hs_sat26Ddy7 = new $hs.Thunk();
                    hs_sat26Ddy7.evaluateOnce = function () {
                        var hs_wild26Ddy4 = hs_ds26DcPc;
                        if (hs_ds26DcPc.notEvaluated) {
                            hs_wild26Ddy4 = hs_ds26DcPc.hscall();
                        }
                        var hs_xzq26DcPg = hs_wild26Ddy4.data[0];
                        if (hs_xzq26DcPg.notEvaluated) {
                            return hs_xzq26DcPg.hscall();
                        } else {
                            return hs_xzq26DcPg;
                        }
                    };
                    return $hs.modules.GHCziReal.hs_round.hscall(hs_zddRealFrac426DcP3, $hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26Ddy7);
                };
                return $hs.modules.GHCziFloat.hs_encodeFloat.hscall(hs_zddRealFloat26DcPb, hs_sat26Ddy8, hs_sat26Ddy5);
            };
            hs_p26DcPp.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_floatDigits.hscall(hs_zddRealFloat26DcPb, hs_r26DcPo);
            };
            hs_minExp26DcPv.evaluateOnce = function () {
                var hs_sat26Ddyb = new $hs.Thunk();
                hs_sat26Ddyb.evaluateOnce = function () {
                    var hs_wild26Ddy9 = $hs.modules.GHCziFloat.hs_floatRange.hscall(hs_zddRealFloat26DcPb, hs_r26DcPo);
                    var hs_minExp026DcPt = hs_wild26Ddy9.data[0];
                    if (hs_minExp026DcPt.notEvaluated) {
                        return hs_minExp026DcPt.hscall();
                    } else {
                        return hs_minExp026DcPt;
                    }
                };
                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Ddyb, hs_p26DcPp);
            };
            hs_b26DcPw.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_floatRadix.hscall(hs_zddRealFloat26DcPb, hs_r26DcPo);
            };
            hs_p026DcPE.evaluateOnce = function () {
                var hs_sat26Ddyh = new $hs.Thunk();
                hs_sat26Ddyh.evaluateOnce = function () {
                    var hs_sat26Ddyg = new $hs.Thunk();
                    hs_sat26Ddyg.evaluateOnce = function () {
                        var hs_sat26Ddyd = new $hs.Thunk();
                        hs_sat26Ddyd.evaluateOnce = function () {
                            var hs_sat26Ddyc = new $hs.Thunk();
                            hs_sat26Ddyc.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_denominator.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_x26DcPx);
                            };
                            return $hs.modules.GHCziFloat.hs_integerLogBase.hscall(hs_b26DcPw, hs_sat26Ddyc);
                        };
                        var hs_sat26Ddyf = new $hs.Thunk();
                        hs_sat26Ddyf.evaluateOnce = function () {
                            var hs_sat26Ddye = new $hs.Thunk();
                            hs_sat26Ddye.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_numerator.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_x26DcPx);
                            };
                            return $hs.modules.GHCziFloat.hs_integerLogBase.hscall(hs_b26DcPw, hs_sat26Ddye);
                        };
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Ddyf, hs_sat26Ddyd);
                    };
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Ddyg, hs_p26DcPp);
                };
                return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26Ddyh, hs_minExp26DcPv);
            };
            hs_ds26DcPc.evaluateOnce = function () {
                var hs_sat26Ddyq = new $hs.Thunk();
                hs_sat26Ddyq.evaluateOnce = function () {
                    var hs_sat26Ddyp = new $hs.Thunk();
                    hs_sat26Ddyp.evaluateOnce = function () {
                        var hs_sat26Ddyj = new $hs.Data(1);
                        hs_sat26Ddyj.data = [0];
                        var hs_wild26Ddyi = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_p026DcPE, hs_sat26Ddyj);
                        switch (hs_wild26Ddyi.tag) {
                        case 1:
                            var hs_sat26Ddyk = new $hs.Thunk();
                            hs_sat26Ddyk.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            var hs_sat26Ddyl = new $hs.Thunk();
                            hs_sat26Ddyl.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_expt.hscall(hs_b26DcPw, hs_p026DcPE);
                            };
                            return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26Ddyl, hs_sat26Ddyk);
                        case 2:
                            var hs_sat26Ddyn = new $hs.Thunk();
                            hs_sat26Ddyn.evaluateOnce = function () {
                                var hs_sat26Ddym = new $hs.Thunk();
                                hs_sat26Ddym.evaluateOnce = function () {
                                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p026DcPE);
                                };
                                return $hs.modules.GHCziFloat.hs_expt.hscall(hs_b26DcPw, hs_sat26Ddym);
                            };
                            var hs_sat26Ddyo = new $hs.Thunk();
                            hs_sat26Ddyo.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26Ddyo, hs_sat26Ddyn);
                        }
                    };
                    return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional25uOam, hs_x26DcPx, hs_sat26Ddyp);
                };
                var hs_sat26Ddys = new $hs.Thunk();
                hs_sat26Ddys.evaluateOnce = function () {
                    var hs_sat26Ddyr = new $hs.Thunk();
                    hs_sat26Ddyr.evaluateOnce = function () {
                        return $hs.modules.GHCziFloat.hs_expt.hscall(hs_b26DcPw, hs_p26DcPp);
                    };
                    return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziReal.hs_zdfRealInteger, hs_sat26Ddyr);
                };
                var hs_sat26Ddyw = new $hs.Thunk();
                hs_sat26Ddyw.evaluateOnce = function () {
                    var hs_sat26Ddyv = new $hs.Thunk();
                    hs_sat26Ddyv.evaluateOnce = function () {
                        var hs_sat26Ddyu = new $hs.Thunk();
                        hs_sat26Ddyu.evaluateOnce = function () {
                            var hs_sat26Ddyt = new $hs.Data(1);
                            hs_sat26Ddyt.data = [1];
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p26DcPp, hs_sat26Ddyt);
                        };
                        return $hs.modules.GHCziFloat.hs_expt.hscall(hs_b26DcPw, hs_sat26Ddyu);
                    };
                    return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziReal.hs_zdfRealInteger, hs_sat26Ddyv);
                };
                var hs_sat26Ddyx = new $hs.Thunk();
                hs_sat26Ddyx.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziReal.hs_zdfRealInteger, hs_b26DcPw);
                };
                return $hs.modules.GHCziFloat.hs_scaleRat.hscall(hs_sat26Ddyx, hs_minExp26DcPv, hs_sat26Ddyw, hs_sat26Ddys, hs_p026DcPE, hs_sat26Ddyq);
            };
            if (hs_r26DcPo.notEvaluated) {
                return hs_r26DcPo.hscall();
            } else {
                return hs_r26DcPo;
            }
        };
        if (hs_sat26Ddyy.notEvaluated) {
            return hs_sat26Ddyy.hscall();
        } else {
            return hs_sat26Ddyy;
        }
    };
    this.hs_clamp.evaluate = function (hs_bd26DcPY, hs_k26DcQ0) {
        var hs_sat26Ddyz = new $hs.Thunk();
        hs_sat26Ddyz.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_bd26DcPY, hs_k26DcQ0);
        };
        var hs_sat26DdyA = new $hs.Thunk();
        hs_sat26DdyA.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_bd26DcPY);
        };
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DdyA, hs_sat26Ddyz);
    };
    hs_zddReal25uOjN.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum125uOjP.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal25uOjN);
    };
    hs_zddReal125uOjR.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum225uOjT.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal125uOjR);
    };
    hs_zddReal225uOjV.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum325uOjX.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal225uOjV);
    };
    hs_zddReal325uOjZ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_zddNum425uOk1.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal325uOjZ);
    };
    hs_zddReal425uOk3.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zddNum525uOk5.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal425uOk3);
    };
    hs_zddReal525uOk7.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zddNum625uOk9.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal525uOk7);
    };
    hs_zddReal625uOkb.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zddNum725uOkd.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal625uOkb);
    };
    hs_zddReal725uOkf.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zddNum825uOkh.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal725uOkf);
    };
    hs_sat26DdyB.evaluateOnce = function () {
        var hs_sat26DdyD = new $hs.Data(1);
        hs_sat26DdyD.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziFloat.hs_zdfShowFloat, hs_sat26DdyD);
    };
    hs_sat26DdyC.evaluateOnce = function () {
        var hs_sat26DdyE = new $hs.Data(1);
        hs_sat26DdyE.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziFloat.hs_zdfShowDouble, hs_sat26DdyE);
    };
    this.hs_fromRat.evaluate = function (hs_zddRealFloat26DcSV, hs_eta26DcT1) {
        var hs_zddRealFrac426DcSW = new $hs.Thunk();
        hs_zddRealFrac426DcSW.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_zdp1RealFloat.hscall(hs_zddRealFloat26DcSV);
        };
        var hs_zddReal1226DcSY = new $hs.Thunk();
        hs_zddReal1226DcSY.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac426DcSW);
        };
        var hs_zddNum1326DcT0 = new $hs.Thunk();
        hs_zddNum1326DcT0.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1226DcSY);
        };
        var hs_wild26DdyF = hs_eta26DcT1;
        if (hs_eta26DcT1.notEvaluated) {
            hs_wild26DdyF = hs_eta26DcT1.hscall();
        }
        var hs_n26DcT8 = hs_wild26DdyF.data[0];
        var hs_ds26DcT5 = hs_wild26DdyF.data[1];
        var hs_sat26DdyH = new $hs.Thunk();
        hs_sat26DdyH.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_wild126DdyG = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_ds26DcT5, hs_sat26DdyH);
        switch (hs_wild126DdyG.tag) {
        case 1:
            var hs_sat26DdyJ = new $hs.Thunk();
            hs_sat26DdyJ.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            var hs_wild226DdyI = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26DcT8, hs_sat26DdyJ);
            switch (hs_wild226DdyI.tag) {
            case 1:
                var hs_sat26DdyL = new $hs.Thunk();
                hs_sat26DdyL.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_wild326DdyK = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26DcT8, hs_sat26DdyL);
                switch (hs_wild326DdyK.tag) {
                case 1:
                    var hs_sat26DdyM = new $hs.Data(1);
                    hs_sat26DdyM.data = [0];
                    var hs_sat26DdyN = new $hs.Thunk();
                    hs_sat26DdyN.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziFloat.hs_encodeFloat.hscall(hs_zddRealFloat26DcSV, hs_sat26DdyN, hs_sat26DdyM);
                case 2:
                    var hs_sat26DdyP = new $hs.Thunk();
                    hs_sat26DdyP.evaluateOnce = function () {
                        var hs_sat26DdyO = new $hs.Thunk();
                        hs_sat26DdyO.evaluateOnce = function () {
                            var hs_tpl26DcTg = $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_n26DcT8);
                            var $res = new $hs.Data(1);
                            $res.data = [hs_tpl26DcTg, hs_ds26DcT5];
                            return $res;
                        };
                        return $hs.modules.GHCziFloat.hs_fromRatzq.hscall(hs_zddRealFloat26DcSV, hs_sat26DdyO);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum1326DcT0, hs_sat26DdyP);
                }
            case 2:
                var hs_sat26DdyQ = new $hs.Data(1);
                hs_sat26DdyQ.data = [hs_n26DcT8, hs_ds26DcT5];
                return $hs.modules.GHCziFloat.hs_fromRatzq.hscall(hs_zddRealFloat26DcSV, hs_sat26DdyQ);
            }
        case 2:
            var hs_sat26DdyS = new $hs.Thunk();
            hs_sat26DdyS.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            var hs_wild226DdyR = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26DcT8, hs_sat26DdyS);
            switch (hs_wild226DdyR.tag) {
            case 1:
                var hs_sat26DdyU = new $hs.Thunk();
                hs_sat26DdyU.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_wild326DdyT = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26DcT8, hs_sat26DdyU);
                switch (hs_wild326DdyT.tag) {
                case 1:
                    var hs_sat26DdyW = new $hs.Thunk();
                    hs_sat26DdyW.evaluateOnce = function () {
                        var hs_sat26DdyV = new $hs.Thunk();
                        hs_sat26DdyV.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcT0, hs_sat26DdyV);
                    };
                    var hs_sat26DdyZ = new $hs.Thunk();
                    hs_sat26DdyZ.evaluateOnce = function () {
                        var hs_sat26DdyX = new $hs.Thunk();
                        hs_sat26DdyX.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcT0, hs_sat26DdyX);
                    };
                    var hs_sat26DdyY = $hs.modules.GHCziReal.hs_zdp2RealFrac.hscall(hs_zddRealFrac426DcSW);
                    return $hs.modules.GHCziReal.hs_zs.hscall(hs_sat26DdyY, hs_sat26DdyZ, hs_sat26DdyW);
                case 2:
                    var hs_sat26Ddz5 = new $hs.Thunk();
                    hs_sat26Ddz5.evaluateOnce = function () {
                        var hs_sat26Ddz1 = new $hs.Thunk();
                        hs_sat26Ddz1.evaluateOnce = function () {
                            var hs_sat26Ddz0 = new $hs.Thunk();
                            hs_sat26Ddz0.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcT0, hs_sat26Ddz0);
                        };
                        var hs_sat26Ddz4 = new $hs.Thunk();
                        hs_sat26Ddz4.evaluateOnce = function () {
                            var hs_sat26Ddz2 = new $hs.Thunk();
                            hs_sat26Ddz2.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcT0, hs_sat26Ddz2);
                        };
                        var hs_sat26Ddz3 = $hs.modules.GHCziReal.hs_zdp2RealFrac.hscall(hs_zddRealFrac426DcSW);
                        return $hs.modules.GHCziReal.hs_zs.hscall(hs_sat26Ddz3, hs_sat26Ddz4, hs_sat26Ddz1);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum1326DcT0, hs_sat26Ddz5);
                }
            case 2:
                var hs_sat26Ddz7 = new $hs.Thunk();
                hs_sat26Ddz7.evaluateOnce = function () {
                    var hs_sat26Ddz6 = new $hs.Thunk();
                    hs_sat26Ddz6.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcT0, hs_sat26Ddz6);
                };
                var hs_sat26Ddza = new $hs.Thunk();
                hs_sat26Ddza.evaluateOnce = function () {
                    var hs_sat26Ddz8 = new $hs.Thunk();
                    hs_sat26Ddz8.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcT0, hs_sat26Ddz8);
                };
                var hs_sat26Ddz9 = $hs.modules.GHCziReal.hs_zdp2RealFrac.hscall(hs_zddRealFrac426DcSW);
                return $hs.modules.GHCziReal.hs_zs.hscall(hs_sat26Ddz9, hs_sat26Ddza, hs_sat26Ddz7);
            }
        }
    };
    this.hs_zdfShowFloat.data = [hs_zdcshowsPrec25uOkP, hs_zdcshow25uOkl, hs_zdcshowList25uOkj];
    hs_zdcshowList25uOkj.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DdyB);
    };
    hs_zdcshow25uOkl.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziFloat.hs_zdfShowFloat);
    };
    this.hs_zdfNumFloat.data = [$hs.modules.GHCziClasses.hs_zdfEqFloat, $hs.modules.GHCziFloat.hs_zdfShowFloat, hs_zdczp25uOag, hs_zdczt25uOaa, hs_zdczm25uOa4, hs_zdcnegate25uOa0, hs_zdcabs25uO9U, hs_zdcsignum25uOkn, hs_zdcfromInteger25uO9O];
    hs_zdcsignum25uOkn.evaluate = function (hs_x26DcTH) {
        var hs_sat26Ddzc = new $hs.Data(1);
        hs_sat26Ddzc.data = [0 % 1];
        var hs_wild26Ddzb = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqFloat, hs_x26DcTH, hs_sat26Ddzc);
        switch (hs_wild26Ddzb.tag) {
        case 1:
            var hs_sat26Ddze = new $hs.Data(1);
            hs_sat26Ddze.data = [0 % 1];
            var hs_wild126Ddzd = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat, hs_x26DcTH, hs_sat26Ddze);
            switch (hs_wild126Ddzd.tag) {
            case 1:
                var hs_sat26Ddzf = new $hs.Data(1);
                hs_sat26Ddzf.data = [1 % 1];
                return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26Ddzf);
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
    this.hs_zdfRealFloat.data = [$hs.modules.GHCziFloat.hs_zdfNumFloat, $hs.modules.GHCziClasses.hs_zdfOrdFloat, hs_zdctoRational25uOkN];
    this.hs_zdfFractionalFloat.data = [$hs.modules.GHCziFloat.hs_zdfNumFloat, hs_zdczs25uOao, hs_zdcrecip25uOkD, hs_zdcfromRational25uOkB];
    this.hs_zdfFloatingFloat.data = [$hs.modules.GHCziFloat.hs_zdfFractionalFloat, hs_zdcpi25uObm, hs_zdcexp25uObi, hs_zdcsqrt25uObe, hs_zdclog25uOba, hs_zdcztzt25uOb4, hs_zdclogBase25uOkF, hs_zdcsin25uOb0, hs_zdctan25uOaW, hs_zdccos25uOaS, hs_zdcasin25uOaO, hs_zdcatan25uOaK, hs_zdcacos25uOaG, hs_zdcsinh25uOaC, hs_zdctanh25uOay, hs_zdccosh25uOau, hs_zdcasinh25uOkz, hs_zdcatanh25uOkx, hs_zdcacosh25uOkv];
    this.hs_zdfRealFracFloat.data = [$hs.modules.GHCziFloat.hs_zdfRealFloat, $hs.modules.GHCziFloat.hs_zdfFractionalFloat, hs_zdcproperFraction25uOkT, hs_zdctruncate25uOkt, hs_zdcround25uOkR, hs_zdcceiling25uOkr, hs_zdcfloor25uOkp];
    hs_zdcfloor25uOkp.evaluate = function (hs_eta26DcTQ, hs_eta126DcTU) {
        var hs_zddReal1226DcTR = new $hs.Thunk();
        hs_zddReal1226DcTR.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_eta26DcTQ);
        };
        var hs_zddNum1326DcTT = new $hs.Thunk();
        hs_zddNum1326DcTT.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1226DcTR);
        };
        var hs_wild26Ddzg = $hs.modules.GHCziReal.hs_properFraction.hscall($hs.modules.GHCziFloat.hs_zdfRealFracFloat, hs_eta26DcTQ, hs_eta126DcTU);
        var hs_n26DcU1 = hs_wild26Ddzg.data[0];
        var hs_r26DcTY = hs_wild26Ddzg.data[1];
        var hs_sat26Ddzi = new $hs.Data(1);
        hs_sat26Ddzi.data = [0 % 1];
        var hs_wild126Ddzh = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat, hs_r26DcTY, hs_sat26Ddzi);
        switch (hs_wild126Ddzh.tag) {
        case 1:
            if (hs_n26DcU1.notEvaluated) {
                return hs_n26DcU1.hscall();
            } else {
                return hs_n26DcU1;
            }
        case 2:
            var hs_sat26Ddzk = new $hs.Thunk();
            hs_sat26Ddzk.evaluateOnce = function () {
                var hs_sat26Ddzj = new $hs.Thunk();
                hs_sat26Ddzj.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcTT, hs_sat26Ddzj);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum1326DcTT, hs_n26DcU1, hs_sat26Ddzk);
        }
    };
    hs_zdcceiling25uOkr.evaluate = function (hs_eta26DcU7, hs_eta126DcUb) {
        var hs_zddReal1226DcU8 = new $hs.Thunk();
        hs_zddReal1226DcU8.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_eta26DcU7);
        };
        var hs_zddNum1326DcUa = new $hs.Thunk();
        hs_zddNum1326DcUa.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1226DcU8);
        };
        var hs_wild26Ddzl = $hs.modules.GHCziReal.hs_properFraction.hscall($hs.modules.GHCziFloat.hs_zdfRealFracFloat, hs_eta26DcU7, hs_eta126DcUb);
        var hs_n26DcUi = hs_wild26Ddzl.data[0];
        var hs_r26DcUf = hs_wild26Ddzl.data[1];
        var hs_sat26Ddzn = new $hs.Data(1);
        hs_sat26Ddzn.data = [0 % 1];
        var hs_wild126Ddzm = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat, hs_r26DcUf, hs_sat26Ddzn);
        switch (hs_wild126Ddzm.tag) {
        case 1:
            if (hs_n26DcUi.notEvaluated) {
                return hs_n26DcUi.hscall();
            } else {
                return hs_n26DcUi;
            }
        case 2:
            var hs_sat26Ddzp = new $hs.Thunk();
            hs_sat26Ddzp.evaluateOnce = function () {
                var hs_sat26Ddzo = new $hs.Thunk();
                hs_sat26Ddzo.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcUa, hs_sat26Ddzo);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum1326DcUa, hs_n26DcUi, hs_sat26Ddzp);
        }
    };
    hs_zdctruncate25uOkt.evaluate = function (hs_eta26DcUn, hs_x26DcUo) {
        var hs_wild26Ddzq = $hs.modules.GHCziReal.hs_properFraction.hscall($hs.modules.GHCziFloat.hs_zdfRealFracFloat, hs_eta26DcUn, hs_x26DcUo);
        var hs_n26DcUs = hs_wild26Ddzq.data[0];
        if (hs_n26DcUs.notEvaluated) {
            return hs_n26DcUs.hscall();
        } else {
            return hs_n26DcUs;
        }
    };
    this.hs_zdfRealFloatFloat.data = [$hs.modules.GHCziFloat.hs_zdfRealFracFloat, $hs.modules.GHCziFloat.hs_zdfFloatingFloat, hs_zdcfloatRadix25uOd0, hs_zdcfloatDigits25uOcW, hs_zdcfloatRange25uOcP, hs_zdcdecodeFloat25uOcB, hs_zdcencodeFloat25uOcq, hs_zdcexponent25uOkL, hs_zdcsignificand25uOkJ, hs_zdcscaleFloat25uOkH, hs_zdcisNaN25uOcb, hs_zdcisInfinite25uObW, hs_zdcisDenormalizzed25uObH, hs_zdcisNegativeZZero25uObs, hs_zdcisIEEE25uObo, hs_zdcatan225uOl9];
    hs_zdcacosh25uOkv.evaluate = function (hs_x26DcUu) {
        var hs_sat26DdzB = new $hs.Thunk();
        hs_sat26DdzB.evaluateOnce = function () {
            var hs_sat26DdzA = new $hs.Thunk();
            hs_sat26DdzA.evaluateOnce = function () {
                var hs_sat26Ddzx = new $hs.Thunk();
                hs_sat26Ddzx.evaluateOnce = function () {
                    var hs_sat26Ddzw = new $hs.Thunk();
                    hs_sat26Ddzw.evaluateOnce = function () {
                        var hs_sat26Ddzt = new $hs.Thunk();
                        hs_sat26Ddzt.evaluateOnce = function () {
                            var hs_sat26Ddzs = new $hs.Data(1);
                            hs_sat26Ddzs.data = [1 % 1];
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_x26DcUu, hs_sat26Ddzs);
                        };
                        var hs_sat26Ddzv = new $hs.Thunk();
                        hs_sat26Ddzv.evaluateOnce = function () {
                            var hs_sat26Ddzu = new $hs.Data(1);
                            hs_sat26Ddzu.data = [1 % 1];
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_x26DcUu, hs_sat26Ddzu);
                        };
                        return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat, hs_sat26Ddzv, hs_sat26Ddzt);
                    };
                    return $hs.modules.GHCziFloat.hs_sqrt.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat, hs_sat26Ddzw);
                };
                var hs_sat26Ddzz = new $hs.Thunk();
                hs_sat26Ddzz.evaluateOnce = function () {
                    var hs_sat26Ddzy = new $hs.Data(1);
                    hs_sat26Ddzy.data = [1 % 1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_x26DcUu, hs_sat26Ddzy);
                };
                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26Ddzz, hs_sat26Ddzx);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_x26DcUu, hs_sat26DdzA);
        };
        return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat, hs_sat26DdzB);
    };
    hs_zdcatanh25uOkx.evaluate = function (hs_x26DcUI) {
        var hs_sat26DdzH = new $hs.Thunk();
        hs_sat26DdzH.evaluateOnce = function () {
            var hs_sat26DdzG = new $hs.Thunk();
            hs_sat26DdzG.evaluateOnce = function () {
                var hs_sat26DdzD = new $hs.Thunk();
                hs_sat26DdzD.evaluateOnce = function () {
                    var hs_sat26DdzC = new $hs.Data(1);
                    hs_sat26DdzC.data = [1 % 1];
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26DdzC, hs_x26DcUI);
                };
                var hs_sat26DdzF = new $hs.Thunk();
                hs_sat26DdzF.evaluateOnce = function () {
                    var hs_sat26DdzE = new $hs.Data(1);
                    hs_sat26DdzE.data = [1 % 1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26DdzE, hs_x26DcUI);
                };
                return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat, hs_sat26DdzF, hs_sat26DdzD);
            };
            return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat, hs_sat26DdzG);
        };
        var hs_sat26DdzI = new $hs.Data(1);
        hs_sat26DdzI.data = [1 % 2];
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26DdzI, hs_sat26DdzH);
    };
    hs_zdcasinh25uOkz.evaluate = function (hs_x26DcUP) {
        var hs_sat26DdzN = new $hs.Thunk();
        hs_sat26DdzN.evaluateOnce = function () {
            var hs_sat26DdzM = new $hs.Thunk();
            hs_sat26DdzM.evaluateOnce = function () {
                var hs_sat26DdzL = new $hs.Thunk();
                hs_sat26DdzL.evaluateOnce = function () {
                    var hs_sat26DdzJ = new $hs.Thunk();
                    hs_sat26DdzJ.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_x26DcUP, hs_x26DcUP);
                    };
                    var hs_sat26DdzK = new $hs.Data(1);
                    hs_sat26DdzK.data = [1 % 1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26DdzK, hs_sat26DdzJ);
                };
                return $hs.modules.GHCziFloat.hs_sqrt.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat, hs_sat26DdzL);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_x26DcUP, hs_sat26DdzM);
        };
        return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat, hs_sat26DdzN);
    };
    hs_zdcfromRational25uOkB.evaluate = function (hs_x26DcUW) {
        return $hs.modules.GHCziFloat.hs_fromRat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_x26DcUW);
    };
    hs_zdcrecip25uOkD.evaluate = function (hs_x26DcUZ) {
        var hs_sat26DdzO = new $hs.Data(1);
        hs_sat26DdzO.data = [1 % 1];
        return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat, hs_sat26DdzO, hs_x26DcUZ);
    };
    hs_zdclogBase25uOkF.evaluate = function (hs_x26DcV4, hs_y26DcV2) {
        var hs_sat26DdzP = new $hs.Thunk();
        hs_sat26DdzP.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat, hs_x26DcV4);
        };
        var hs_sat26DdzQ = new $hs.Thunk();
        hs_sat26DdzQ.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat, hs_y26DcV2);
        };
        return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat, hs_sat26DdzQ, hs_sat26DdzP);
    };
    hs_zdcscaleFloat25uOkH.evaluate = function (hs_k26DcVo, hs_x26DcV8) {
        var hs_wild26DdzR = $hs.modules.GHCziFloat.hs_decodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_x26DcV8);
        var hs_m26DcVc = hs_wild26DdzR.data[0];
        var hs_n26DcVd = hs_wild26DdzR.data[1];
        var hs_sat26DdA2 = new $hs.Thunk();
        hs_sat26DdA2.evaluateOnce = function () {
            var hs_sat26DdA1 = new $hs.Thunk();
            hs_sat26DdA1.evaluateOnce = function () {
                var hs_bd26DcVm = new $hs.Thunk();
                hs_bd26DcVm.evaluateOnce = function () {
                    var hs_sat26DdzU = new $hs.Thunk();
                    hs_sat26DdzU.evaluateOnce = function () {
                        var hs_sat26DdzS = new $hs.Data(1);
                        hs_sat26DdzS.data = [24];
                        var hs_sat26DdzT = new $hs.Data(1);
                        hs_sat26DdzT.data = [4];
                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdzT, hs_sat26DdzS);
                    };
                    var hs_sat26DdzY = new $hs.Thunk();
                    hs_sat26DdzY.evaluateOnce = function () {
                        var hs_sat26DdzW = new $hs.Thunk();
                        hs_sat26DdzW.evaluateOnce = function () {
                            var hs_sat26DdzV = new $hs.Data(1);
                            hs_sat26DdzV.data = [125];
                            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdzV);
                        };
                        var hs_sat26DdzX = new $hs.Data(1);
                        hs_sat26DdzX.data = [128];
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdzX, hs_sat26DdzW);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdzY, hs_sat26DdzU);
                };
                var hs_sat26DdzZ = new $hs.Thunk();
                hs_sat26DdzZ.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_bd26DcVm, hs_k26DcVo);
                };
                var hs_sat26DdA0 = new $hs.Thunk();
                hs_sat26DdA0.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_bd26DcVm);
                };
                return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DdA0, hs_sat26DdzZ);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26DcVd, hs_sat26DdA1);
        };
        return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_m26DcVc, hs_sat26DdA2);
    };
    hs_zdcsignificand25uOkJ.evaluate = function (hs_x26DcVt) {
        var hs_wild26DdA3 = $hs.modules.GHCziFloat.hs_decodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_x26DcVt);
        var hs_m26DcVx = hs_wild26DdA3.data[0];
        var hs_sat26DdA6 = new $hs.Thunk();
        hs_sat26DdA6.evaluateOnce = function () {
            var hs_sat26DdA5 = new $hs.Thunk();
            hs_sat26DdA5.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_floatDigits.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_x26DcVt);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdA5);
        };
        return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_m26DcVx, hs_sat26DdA6);
    };
    hs_zdcexponent25uOkL.evaluate = function (hs_x26DcVB) {
        var hs_wild26DdA7 = $hs.modules.GHCziFloat.hs_decodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_x26DcVB);
        var hs_m26DcVF = hs_wild26DdA7.data[0];
        var hs_n26DcVI = hs_wild26DdA7.data[1];
        var hs_sat26DdA9 = new $hs.Thunk();
        hs_sat26DdA9.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_wild126DdA8 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_m26DcVF, hs_sat26DdA9);
        switch (hs_wild126DdA8.tag) {
        case 1:
            var hs_sat26DdAa = new $hs.Thunk();
            hs_sat26DdAa.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_floatDigits.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_x26DcVB);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26DcVI, hs_sat26DdAa);
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [0];
            return $res;
        }
    };
    hs_zdctoRational25uOkN.evaluate = function (hs_x26DcVM) {
        var hs_ds26DcVN = new $hs.Thunk();
        hs_ds26DcVN.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_decodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_x26DcVM);
        };
        var hs_sat26DdAh = new $hs.Thunk();
        hs_sat26DdAh.evaluateOnce = function () {
            var hs_sat26DdAd = new $hs.Thunk();
            hs_sat26DdAd.evaluateOnce = function () {
                var hs_wild26DdAc = hs_ds26DcVN;
                if (hs_ds26DcVN.notEvaluated) {
                    hs_wild26DdAc = hs_ds26DcVN.hscall();
                }
                var hs_n26DcW1 = hs_wild26DdAc.data[1];
                if (hs_n26DcW1.notEvaluated) {
                    return hs_n26DcW1.hscall();
                } else {
                    return hs_n26DcW1;
                }
            };
            var hs_sat26DdAg = new $hs.Thunk();
            hs_sat26DdAg.evaluateOnce = function () {
                var hs_sat26DdAe = new $hs.Thunk();
                hs_sat26DdAe.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                var hs_sat26DdAf = new $hs.Thunk();
                hs_sat26DdAf.evaluateOnce = function () {
                    return $hs.modules.GHCziFloat.hs_floatRadix.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_x26DcVM);
                };
                return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DdAf, hs_sat26DdAe);
            };
            return $hs.modules.GHCziReal.hs_zczc.hscall(hs_zddFractional25uOam, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26DdAg, hs_sat26DdAd);
        };
        var hs_sat26DdAm = new $hs.Thunk();
        hs_sat26DdAm.evaluateOnce = function () {
            var hs_sat26DdAj = new $hs.Thunk();
            hs_sat26DdAj.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            var hs_sat26DdAl = new $hs.Thunk();
            hs_sat26DdAl.evaluateOnce = function () {
                var hs_wild26DdAi = hs_ds26DcVN;
                if (hs_ds26DcVN.notEvaluated) {
                    hs_wild26DdAi = hs_ds26DcVN.hscall();
                }
                var hs_m26DcVR = hs_wild26DdAi.data[0];
                if (hs_m26DcVR.notEvaluated) {
                    return hs_m26DcVR.hscall();
                } else {
                    return hs_m26DcVR;
                }
            };
            return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DdAl, hs_sat26DdAj);
        };
        return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum25uO9M, hs_sat26DdAm, hs_sat26DdAh);
    };
    hs_zdcshowsPrec25uOkP.evaluate = function (hs_x26DcWa, hs_eta26DcWb) {
        var hs_sat26DdAo = new $hs.Func(1);
        hs_sat26DdAo.evaluate = function (hs_x126DcW7) {
            var hs_sat26DdAn = new $hs.Thunk();
            hs_sat26DdAn.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_formatRealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, $hs.modules.GHCziFloat.hs_FFGeneric, $hs.modules.DataziMaybe.hs_Nothing, hs_x126DcW7);
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DdAn);
        };
        return $hs.modules.GHCziFloat.hs_showSignedFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_sat26DdAo, hs_x26DcWa, hs_eta26DcWb);
    };
    hs_zdcround25uOkR.evaluate = function (hs_zddIntegral26DcWf, hs_eta26DcWj) {
        var hs_zddReal1226DcWg = new $hs.Thunk();
        hs_zddReal1226DcWg.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DcWf);
        };
        var hs_zddNum1326DcWi = new $hs.Thunk();
        hs_zddNum1326DcWi.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1226DcWg);
        };
        var hs_wild26DdAp = $hs.modules.GHCziReal.hs_properFraction.hscall($hs.modules.GHCziFloat.hs_zdfRealFracFloat, hs_zddIntegral26DcWf, hs_eta26DcWj);
        var hs_n26DcWr = hs_wild26DdAp.data[0];
        var hs_r26DcWo = hs_wild26DdAp.data[1];
        var hs_m26DcWw = new $hs.Thunk();
        hs_m26DcWw.evaluateOnce = function () {
            var hs_sat26DdAr = new $hs.Data(1);
            hs_sat26DdAr.data = [0 % 1];
            var hs_wild126DdAq = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat, hs_r26DcWo, hs_sat26DdAr);
            switch (hs_wild126DdAq.tag) {
            case 1:
                var hs_sat26DdAt = new $hs.Thunk();
                hs_sat26DdAt.evaluateOnce = function () {
                    var hs_sat26DdAs = new $hs.Thunk();
                    hs_sat26DdAs.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcWi, hs_sat26DdAs);
                };
                return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum1326DcWi, hs_n26DcWr, hs_sat26DdAt);
            case 2:
                var hs_sat26DdAv = new $hs.Thunk();
                hs_sat26DdAv.evaluateOnce = function () {
                    var hs_sat26DdAu = new $hs.Thunk();
                    hs_sat26DdAu.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcWi, hs_sat26DdAu);
                };
                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum1326DcWi, hs_n26DcWr, hs_sat26DdAv);
            }
        };
        var hs_sat26DdAw = new $hs.Data(1);
        hs_sat26DdAw.data = [0 % 1];
        var hs_sat26DdAA = new $hs.Thunk();
        hs_sat26DdAA.evaluateOnce = function () {
            var hs_sat26DdAx = new $hs.Data(1);
            hs_sat26DdAx.data = [1 % 2];
            var hs_sat26DdAy = new $hs.Thunk();
            hs_sat26DdAy.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_r26DcWo);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26DdAy, hs_sat26DdAx);
        };
        var hs_wild126DdAz = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat, hs_sat26DdAA, hs_sat26DdAw);
        switch (hs_wild126DdAz.tag) {
        case 1:
            if (hs_n26DcWr.notEvaluated) {
                return hs_n26DcWr.hscall();
            } else {
                return hs_n26DcWr;
            }
        case 2:
            var hs_wild226DdAB = $hs.modules.GHCziReal.hs_even.hscall(hs_zddIntegral26DcWf, hs_n26DcWr);
            switch (hs_wild226DdAB.tag) {
            case 1:
                if (hs_m26DcWw.notEvaluated) {
                    return hs_m26DcWw.hscall();
                } else {
                    return hs_m26DcWw;
                }
            case 2:
                if (hs_n26DcWr.notEvaluated) {
                    return hs_n26DcWr.hscall();
                } else {
                    return hs_n26DcWr;
                }
            }
        case 3:
            if (hs_m26DcWw.notEvaluated) {
                return hs_m26DcWw.hscall();
            } else {
                return hs_m26DcWw;
            }
        }
    };
    hs_zdcproperFraction25uOkT.evaluate = function (hs_zddIntegral26DcWG, hs_eta26DcWK) {
        var hs_zddReal1226DcWH = new $hs.Thunk();
        hs_zddReal1226DcWH.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DcWG);
        };
        var hs_zddNum1326DcWJ = new $hs.Thunk();
        hs_zddNum1326DcWJ.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1226DcWH);
        };
        var hs_wild26DdAD = hs_eta26DcWK;
        if (hs_eta26DcWK.notEvaluated) {
            hs_wild26DdAD = hs_eta26DcWK.hscall();
        }
        var hs_xzh26DcWN = hs_wild26DdAD.data[0];
        throw "primitive operation decodeFloat_Int#. Not implemeted yet.";
        var hs_mzh26DcWV = hs_wild126DdAC[0];
        var hs_nzh26DcWS = hs_wild126DdAC[1];
        var hs_n26DcWT = new $hs.Data(1);
        hs_n26DcWT.data = [hs_nzh26DcWS];
        var hs_m26DcWW = new $hs.Data(1);
        hs_m26DcWW.data = [hs_mzh26DcWV];
        var hs_sat26DdAF = new $hs.Data(1);
        hs_sat26DdAF.data = [0];
        var hs_wild226DdAE = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_n26DcWT, hs_sat26DdAF);
        switch (hs_wild226DdAE.tag) {
        case 1:
            var hs_i26DcX6 = new $hs.Thunk();
            hs_i26DcX6.evaluateOnce = function () {
                var hs_sat26DdAH = new $hs.Data(1);
                hs_sat26DdAH.data = [0];
                var hs_wild326DdAG = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_m26DcWW, hs_sat26DdAH);
                switch (hs_wild326DdAG.tag) {
                case 1:
                    var hs_sat26DdAK = new $hs.Thunk();
                    hs_sat26DdAK.evaluateOnce = function () {
                        var hs_sat26DdAI = new $hs.Thunk();
                        hs_sat26DdAI.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26DcWT);
                        };
                        var hs_sat26DdAJ = new $hs.Thunk();
                        hs_sat26DdAJ.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_m26DcWW);
                        };
                        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26DdAJ, hs_sat26DdAI);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdAK);
                case 2:
                    var hs_sat26DdAL = new $hs.Thunk();
                    hs_sat26DdAL.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26DcWT);
                    };
                    return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_m26DcWW, hs_sat26DdAL);
                }
            };
            var hs_sat26DdAQ = new $hs.Thunk();
            hs_sat26DdAQ.evaluateOnce = function () {
                var hs_sat26DdAP = new $hs.Thunk();
                hs_sat26DdAP.evaluateOnce = function () {
                    var hs_sat26DdAO = new $hs.Thunk();
                    hs_sat26DdAO.evaluateOnce = function () {
                        var hs_sat26DdAN = new $hs.Thunk();
                        hs_sat26DdAN.evaluateOnce = function () {
                            var hs_sat26DdAM = new $hs.Thunk();
                            hs_sat26DdAM.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26DcWT);
                            };
                            return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_i26DcX6, hs_sat26DdAM);
                        };
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_m26DcWW, hs_sat26DdAN);
                    };
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DdAO);
                };
                return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_sat26DdAP, hs_n26DcWT);
            };
            var hs_sat26DdAR = new $hs.Thunk();
            hs_sat26DdAR.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_zddNum1326DcWJ, hs_i26DcX6);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DdAR, hs_sat26DdAQ];
            return $res;
        case 2:
            var hs_sat26DdAS = new $hs.Data(1);
            hs_sat26DdAS.data = [0 % 1];
            var hs_sat26DdAX = new $hs.Thunk();
            hs_sat26DdAX.evaluateOnce = function () {
                var hs_sat26DdAV = new $hs.Thunk();
                hs_sat26DdAV.evaluateOnce = function () {
                    var hs_sat26DdAU = new $hs.Thunk();
                    hs_sat26DdAU.evaluateOnce = function () {
                        var hs_sat26DdAT = new $hs.Thunk();
                        hs_sat26DdAT.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcWJ, hs_sat26DdAT);
                    };
                    return $hs.modules.GHCziReal.hs_zc.hscall(hs_zddNum1326DcWJ, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26DdAU, hs_n26DcWT);
                };
                var hs_sat26DdAW = new $hs.Thunk();
                hs_sat26DdAW.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_zddNum1326DcWJ, hs_m26DcWW);
                };
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum1326DcWJ, hs_sat26DdAW, hs_sat26DdAV);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DdAX, hs_sat26DdAS];
            return $res;
        }
    };
    hs_zddRealFrac25uOkV.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_zdp1RealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zddReal825uOkX.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac25uOkV);
    };
    hs_zddNum925uOkZ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal825uOkX);
    };
    hs_zddEq125uOl1.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum925uOkZ);
    };
    hs_zddOrd125uOl3.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal825uOkX);
    };
    hs_zddFractional125uOl5.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2RealFrac.hscall(hs_zddRealFrac25uOkV);
    };
    hs_zddFloating25uOl7.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_zdp2RealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcatan225uOl9.evaluate = function (hs_y26DcXs, hs_x26DcXl) {
        var hs_sat26DdB0 = new $hs.Thunk();
        hs_sat26DdB0.evaluateOnce = function () {
            var hs_sat26DdAY = new $hs.Thunk();
            hs_sat26DdAY.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum925uOkZ, hs_sat26DdAY);
        };
        var hs_wild26DdAZ = $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd125uOl3, hs_x26DcXl, hs_sat26DdB0);
        switch (hs_wild26DdAZ.tag) {
        case 1:
            var hs_sat26DdB3 = new $hs.Thunk();
            hs_sat26DdB3.evaluateOnce = function () {
                var hs_sat26DdB2 = new $hs.Thunk();
                hs_sat26DdB2.evaluateOnce = function () {
                    var hs_sat26DdB1 = new $hs.Thunk();
                    hs_sat26DdB1.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum925uOkZ, hs_sat26DdB1);
                };
                return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd125uOl3, hs_y26DcXs, hs_sat26DdB2);
            };
            var hs_sat26DdB7 = new $hs.Thunk();
            hs_sat26DdB7.evaluateOnce = function () {
                var hs_sat26DdB5 = new $hs.Thunk();
                hs_sat26DdB5.evaluateOnce = function () {
                    var hs_sat26DdB4 = new $hs.Thunk();
                    hs_sat26DdB4.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum925uOkZ, hs_sat26DdB4);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq125uOl1, hs_x26DcXl, hs_sat26DdB5);
            };
            var hs_wild126DdB6 = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DdB7, hs_sat26DdB3);
            switch (hs_wild126DdB6.tag) {
            case 1:
                var hs_sat26DdBa = new $hs.Thunk();
                hs_sat26DdBa.evaluateOnce = function () {
                    var hs_sat26DdB9 = new $hs.Thunk();
                    hs_sat26DdB9.evaluateOnce = function () {
                        var hs_sat26DdB8 = new $hs.Thunk();
                        hs_sat26DdB8.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum925uOkZ, hs_sat26DdB8);
                    };
                    return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd125uOl3, hs_y26DcXs, hs_sat26DdB9);
                };
                var hs_sat26DdBe = new $hs.Thunk();
                hs_sat26DdBe.evaluateOnce = function () {
                    var hs_sat26DdBc = new $hs.Thunk();
                    hs_sat26DdBc.evaluateOnce = function () {
                        var hs_sat26DdBb = new $hs.Thunk();
                        hs_sat26DdBb.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum925uOkZ, hs_sat26DdBb);
                    };
                    return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd125uOl3, hs_x26DcXl, hs_sat26DdBc);
                };
                var hs_wild226DdBd = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DdBe, hs_sat26DdBa);
                switch (hs_wild226DdBd.tag) {
                case 1:
                    var hs_sat26DdBn = new $hs.Thunk();
                    hs_sat26DdBn.evaluateOnce = function () {
                        var hs_sat26DdBh = new $hs.Thunk();
                        hs_sat26DdBh.evaluateOnce = function () {
                            var hs_sat26DdBf = new $hs.Thunk();
                            hs_sat26DdBf.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_y26DcXs);
                            };
                            var hs_sat26DdBg = new $hs.Thunk();
                            hs_sat26DdBg.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_x26DcXl);
                            };
                            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DdBg, hs_sat26DdBf);
                        };
                        var hs_sat26DdBm = new $hs.Thunk();
                        hs_sat26DdBm.evaluateOnce = function () {
                            var hs_sat26DdBi = new $hs.Thunk();
                            hs_sat26DdBi.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_y26DcXs);
                            };
                            var hs_sat26DdBl = new $hs.Thunk();
                            hs_sat26DdBl.evaluateOnce = function () {
                                var hs_sat26DdBk = new $hs.Thunk();
                                hs_sat26DdBk.evaluateOnce = function () {
                                    var hs_sat26DdBj = new $hs.Thunk();
                                    hs_sat26DdBj.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum925uOkZ, hs_sat26DdBj);
                                };
                                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd125uOl3, hs_x26DcXl, hs_sat26DdBk);
                            };
                            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DdBl, hs_sat26DdBi);
                        };
                        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DdBm, hs_sat26DdBh);
                    };
                    var hs_sat26DdBv = new $hs.Thunk();
                    hs_sat26DdBv.evaluateOnce = function () {
                        var hs_sat26DdBq = new $hs.Thunk();
                        hs_sat26DdBq.evaluateOnce = function () {
                            var hs_sat26DdBp = new $hs.Thunk();
                            hs_sat26DdBp.evaluateOnce = function () {
                                var hs_sat26DdBo = new $hs.Thunk();
                                hs_sat26DdBo.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum925uOkZ, hs_sat26DdBo);
                            };
                            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd125uOl3, hs_y26DcXs, hs_sat26DdBp);
                        };
                        var hs_sat26DdBt = new $hs.Thunk();
                        hs_sat26DdBt.evaluateOnce = function () {
                            var hs_sat26DdBs = new $hs.Thunk();
                            hs_sat26DdBs.evaluateOnce = function () {
                                var hs_sat26DdBr = new $hs.Thunk();
                                hs_sat26DdBr.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum925uOkZ, hs_sat26DdBr);
                            };
                            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd125uOl3, hs_x26DcXl, hs_sat26DdBs);
                        };
                        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DdBt, hs_sat26DdBq);
                    };
                    var hs_wild326DdBu = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DdBv, hs_sat26DdBn);
                    switch (hs_wild326DdBu.tag) {
                    case 1:
                        var hs_sat26DdBA = new $hs.Thunk();
                        hs_sat26DdBA.evaluateOnce = function () {
                            var hs_sat26DdBw = new $hs.Thunk();
                            hs_sat26DdBw.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_x26DcXl);
                            };
                            var hs_sat26DdBz = new $hs.Thunk();
                            hs_sat26DdBz.evaluateOnce = function () {
                                var hs_sat26DdBy = new $hs.Thunk();
                                hs_sat26DdBy.evaluateOnce = function () {
                                    var hs_sat26DdBx = new $hs.Thunk();
                                    hs_sat26DdBx.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum925uOkZ, hs_sat26DdBx);
                                };
                                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd125uOl3, hs_x26DcXl, hs_sat26DdBy);
                            };
                            return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DdBz, hs_sat26DdBw);
                        };
                        var hs_sat26DdBE = new $hs.Thunk();
                        hs_sat26DdBE.evaluateOnce = function () {
                            var hs_sat26DdBC = new $hs.Thunk();
                            hs_sat26DdBC.evaluateOnce = function () {
                                var hs_sat26DdBB = new $hs.Thunk();
                                hs_sat26DdBB.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum925uOkZ, hs_sat26DdBB);
                            };
                            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq125uOl1, hs_y26DcXs, hs_sat26DdBC);
                        };
                        var hs_wild426DdBD = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DdBE, hs_sat26DdBA);
                        switch (hs_wild426DdBD.tag) {
                        case 1:
                            var hs_sat26DdBH = new $hs.Thunk();
                            hs_sat26DdBH.evaluateOnce = function () {
                                var hs_sat26DdBG = new $hs.Thunk();
                                hs_sat26DdBG.evaluateOnce = function () {
                                    var hs_sat26DdBF = new $hs.Thunk();
                                    hs_sat26DdBF.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum925uOkZ, hs_sat26DdBF);
                                };
                                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq125uOl1, hs_y26DcXs, hs_sat26DdBG);
                            };
                            var hs_sat26DdBL = new $hs.Thunk();
                            hs_sat26DdBL.evaluateOnce = function () {
                                var hs_sat26DdBJ = new $hs.Thunk();
                                hs_sat26DdBJ.evaluateOnce = function () {
                                    var hs_sat26DdBI = new $hs.Thunk();
                                    hs_sat26DdBI.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum925uOkZ, hs_sat26DdBI);
                                };
                                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq125uOl1, hs_x26DcXl, hs_sat26DdBJ);
                            };
                            var hs_wild526DdBK = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DdBL, hs_sat26DdBH);
                            switch (hs_wild526DdBK.tag) {
                            case 1:
                                return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum925uOkZ, hs_x26DcXl, hs_y26DcXs);
                            case 2:
                                if (hs_y26DcXs.notEvaluated) {
                                    return hs_y26DcXs.hscall();
                                } else {
                                    return hs_y26DcXs;
                                }
                            }
                        case 2:
                            return $hs.modules.GHCziFloat.hs_pi.hscall(hs_zddFloating25uOl7);
                        }
                    case 2:
                        var hs_sat26DdBN = new $hs.Thunk();
                        hs_sat26DdBN.evaluateOnce = function () {
                            var hs_sat26DdBM = new $hs.Thunk();
                            hs_sat26DdBM.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum925uOkZ, hs_y26DcXs);
                            };
                            return $hs.modules.GHCziFloat.hs_atan2.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_sat26DdBM, hs_x26DcXl);
                        };
                        return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum925uOkZ, hs_sat26DdBN);
                    }
                case 2:
                    var hs_sat26DdBP = new $hs.Thunk();
                    hs_sat26DdBP.evaluateOnce = function () {
                        var hs_sat26DdBO = new $hs.Thunk();
                        hs_sat26DdBO.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional125uOl5, hs_y26DcXs, hs_x26DcXl);
                        };
                        return $hs.modules.GHCziFloat.hs_atan.hscall(hs_zddFloating25uOl7, hs_sat26DdBO);
                    };
                    var hs_sat26DdBQ = new $hs.Thunk();
                    hs_sat26DdBQ.evaluateOnce = function () {
                        return $hs.modules.GHCziFloat.hs_pi.hscall(hs_zddFloating25uOl7);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum925uOkZ, hs_sat26DdBQ, hs_sat26DdBP);
                }
            case 2:
                var hs_sat26DdBS = new $hs.Thunk();
                hs_sat26DdBS.evaluateOnce = function () {
                    var hs_sat26DdBR = new $hs.Thunk();
                    hs_sat26DdBR.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum925uOkZ, hs_sat26DdBR);
                };
                var hs_sat26DdBT = new $hs.Thunk();
                hs_sat26DdBT.evaluateOnce = function () {
                    return $hs.modules.GHCziFloat.hs_pi.hscall(hs_zddFloating25uOl7);
                };
                return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional125uOl5, hs_sat26DdBT, hs_sat26DdBS);
            }
        case 2:
            var hs_sat26DdBU = new $hs.Thunk();
            hs_sat26DdBU.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional125uOl5, hs_y26DcXs, hs_x26DcXl);
            };
            return $hs.modules.GHCziFloat.hs_atan.hscall(hs_zddFloating25uOl7, hs_sat26DdBU);
        }
    };
    this.hs_floatToDigits.evaluate = function (hs_zddRealFloat26DcYo, hs_eta26DcYH, hs_eta126DcYv) {
        var hs_zddRealFrac426DcYp = new $hs.Thunk();
        hs_zddRealFrac426DcYp.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_zdp1RealFloat.hscall(hs_zddRealFloat26DcYo);
        };
        var hs_zddReal1226DcYr = new $hs.Thunk();
        hs_zddReal1226DcYr.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac426DcYp);
        };
        var hs_zddNum1326DcYt = new $hs.Thunk();
        hs_zddNum1326DcYt.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1226DcYr);
        };
        var hs_sat26DdBY = new $hs.Thunk();
        hs_sat26DdBY.evaluateOnce = function () {
            var hs_sat26DdBV = new $hs.Thunk();
            hs_sat26DdBV.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DcYt, hs_sat26DdBV);
        };
        var hs_sat26DdBX = $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum1326DcYt);
        var hs_wild26DdBW = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_sat26DdBX, hs_eta126DcYv, hs_sat26DdBY);
        switch (hs_wild26DdBW.tag) {
        case 1:
            var hs_gen26DcZ8 = new $hs.Func(5);
            hs_gen26DcZ8.evaluate = function (hs_ds26DcZ7, hs_rn26DcYN, hs_sN26DcYP, hs_mUpN26DcYK, hs_mDnN26DcYG) {
                var hs_mDnNzq26DcYI = new $hs.Thunk();
                hs_mDnNzq26DcYI.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_mDnN26DcYG, hs_eta26DcYH);
                };
                var hs_mUpNzq26DcYL = new $hs.Thunk();
                hs_mUpNzq26DcYL.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_mUpN26DcYK, hs_eta26DcYH);
                };
                var hs_ds126DcYQ = new $hs.Thunk();
                hs_ds126DcYQ.evaluateOnce = function () {
                    var hs_sat26DdBZ = new $hs.Thunk();
                    hs_sat26DdBZ.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_rn26DcYN, hs_eta26DcYH);
                    };
                    return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DdBZ, hs_sN26DcYP);
                };
                var hs_rnzq26DcYW = new $hs.Thunk();
                hs_rnzq26DcYW.evaluateOnce = function () {
                    var hs_wild126DdC1 = hs_ds126DcYQ;
                    if (hs_ds126DcYQ.notEvaluated) {
                        hs_wild126DdC1 = hs_ds126DcYQ.hscall();
                    }
                    var hs_rnzq126DcYV = hs_wild126DdC1.data[1];
                    if (hs_rnzq126DcYV.notEvaluated) {
                        return hs_rnzq126DcYV.hscall();
                    } else {
                        return hs_rnzq126DcYV;
                    }
                };
                var hs_ds226DcYZ = new $hs.Thunk();
                hs_ds226DcYZ.evaluateOnce = function () {
                    var hs_sat26DdC2 = new $hs.Thunk();
                    hs_sat26DdC2.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_rnzq26DcYW, hs_mUpNzq26DcYL);
                    };
                    return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_sat26DdC2, hs_sN26DcYP);
                };
                var hs_wild126DdC5 = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_rnzq26DcYW, hs_mDnNzq26DcYI);
                switch (hs_wild126DdC5.tag) {
                case 1:
                    var hs_wild226DdC4 = hs_ds226DcYZ;
                    if (hs_ds226DcYZ.notEvaluated) {
                        hs_wild226DdC4 = hs_ds226DcYZ.hscall();
                    }
                    switch (hs_wild226DdC4.tag) {
                    case 1:
                        var hs_sat26DdC7 = new $hs.Thunk();
                        hs_sat26DdC7.evaluateOnce = function () {
                            var hs_wild326DdC3 = hs_ds126DcYQ;
                            if (hs_ds126DcYQ.notEvaluated) {
                                hs_wild326DdC3 = hs_ds126DcYQ.hscall();
                            }
                            var hs_dn26DcZ5 = hs_wild326DdC3.data[0];
                            if (hs_dn26DcZ5.notEvaluated) {
                                return hs_dn26DcZ5.hscall();
                            } else {
                                return hs_dn26DcZ5;
                            }
                        };
                        var hs_sat26DdC8 = new $hs.Data(2);
                        hs_sat26DdC8.data = [hs_sat26DdC7, hs_ds26DcZ7];
                        return hs_gen26DcZ8.hscall(hs_sat26DdC8, hs_rnzq26DcYW, hs_sN26DcYP, hs_mUpNzq26DcYL, hs_mDnNzq26DcYI);
                    case 2:
                        var hs_sat26DdCd = new $hs.Thunk();
                        hs_sat26DdCd.evaluateOnce = function () {
                            var hs_sat26DdCa = new $hs.Thunk();
                            hs_sat26DdCa.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            var hs_sat26DdCc = new $hs.Thunk();
                            hs_sat26DdCc.evaluateOnce = function () {
                                var hs_wild326DdC9 = hs_ds126DcYQ;
                                if (hs_ds126DcYQ.notEvaluated) {
                                    hs_wild326DdC9 = hs_ds126DcYQ.hscall();
                                }
                                var hs_dn26DcZd = hs_wild326DdC9.data[0];
                                if (hs_dn26DcZd.notEvaluated) {
                                    return hs_dn26DcZd.hscall();
                                } else {
                                    return hs_dn26DcZd;
                                }
                            };
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DdCc, hs_sat26DdCa);
                        };
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26DdCd, hs_ds26DcZ7];
                        return $res;
                    }
                case 2:
                    var hs_wild226DdCf = hs_ds226DcYZ;
                    if (hs_ds226DcYZ.notEvaluated) {
                        hs_wild226DdCf = hs_ds226DcYZ.hscall();
                    }
                    switch (hs_wild226DdCf.tag) {
                    case 1:
                        var hs_sat26DdCh = new $hs.Thunk();
                        hs_sat26DdCh.evaluateOnce = function () {
                            var hs_wild326DdCe = hs_ds126DcYQ;
                            if (hs_ds126DcYQ.notEvaluated) {
                                hs_wild326DdCe = hs_ds126DcYQ.hscall();
                            }
                            var hs_dn26DcZl = hs_wild326DdCe.data[0];
                            if (hs_dn26DcZl.notEvaluated) {
                                return hs_dn26DcZl.hscall();
                            } else {
                                return hs_dn26DcZl;
                            }
                        };
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26DdCh, hs_ds26DcZ7];
                        return $res;
                    case 2:
                        var hs_sat26DdCk = new $hs.Thunk();
                        hs_sat26DdCk.evaluateOnce = function () {
                            var hs_sat26DdCi = new $hs.Thunk();
                            hs_sat26DdCi.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                            };
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_rnzq26DcYW, hs_sat26DdCi);
                        };
                        var hs_wild326DdCj = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_sat26DdCk, hs_sN26DcYP);
                        switch (hs_wild326DdCj.tag) {
                        case 1:
                            var hs_sat26DdCp = new $hs.Thunk();
                            hs_sat26DdCp.evaluateOnce = function () {
                                var hs_sat26DdCm = new $hs.Thunk();
                                hs_sat26DdCm.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                };
                                var hs_sat26DdCo = new $hs.Thunk();
                                hs_sat26DdCo.evaluateOnce = function () {
                                    var hs_wild426DdCl = hs_ds126DcYQ;
                                    if (hs_ds126DcYQ.notEvaluated) {
                                        hs_wild426DdCl = hs_ds126DcYQ.hscall();
                                    }
                                    var hs_dn26DcZt = hs_wild426DdCl.data[0];
                                    if (hs_dn26DcZt.notEvaluated) {
                                        return hs_dn26DcZt.hscall();
                                    } else {
                                        return hs_dn26DcZt;
                                    }
                                };
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DdCo, hs_sat26DdCm);
                            };
                            var $res = new $hs.Data(2);
                            $res.data = [hs_sat26DdCp, hs_ds26DcZ7];
                            return $res;
                        case 2:
                            var hs_sat26DdCs = new $hs.Thunk();
                            hs_sat26DdCs.evaluateOnce = function () {
                                var hs_wild426DdCq = hs_ds126DcYQ;
                                if (hs_ds126DcYQ.notEvaluated) {
                                    hs_wild426DdCq = hs_ds126DcYQ.hscall();
                                }
                                var hs_dn26DcZA = hs_wild426DdCq.data[0];
                                if (hs_dn26DcZA.notEvaluated) {
                                    return hs_dn26DcZA.hscall();
                                } else {
                                    return hs_dn26DcZA;
                                }
                            };
                            var $res = new $hs.Data(2);
                            $res.data = [hs_sat26DdCs, hs_ds26DcZ7];
                            return $res;
                        }
                    }
                }
            };
            var hs_b26DcZD = new $hs.Thunk();
            hs_b26DcZD.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_floatRadix.hscall(hs_zddRealFloat26DcYo, hs_eta126DcYv);
            };
            var hs_p26DcZF = new $hs.Thunk();
            hs_p26DcZF.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_floatDigits.hscall(hs_zddRealFloat26DcYo, hs_eta126DcYv);
            };
            var hs_minExp26DcZM = new $hs.Thunk();
            hs_minExp26DcZM.evaluateOnce = function () {
                var hs_sat26DdCv = new $hs.Thunk();
                hs_sat26DdCv.evaluateOnce = function () {
                    var hs_wild126DdCt = $hs.modules.GHCziFloat.hs_floatRange.hscall(hs_zddRealFloat26DcYo, hs_eta126DcYv);
                    var hs_minExp026DcZK = hs_wild126DdCt.data[0];
                    if (hs_minExp026DcZK.notEvaluated) {
                        return hs_minExp026DcZK.hscall();
                    } else {
                        return hs_minExp026DcZK;
                    }
                };
                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdCv, hs_p26DcZF);
            };
            var hs_ds26DcZO = new $hs.Thunk();
            hs_ds26DcZO.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_decodeFloat.hscall(hs_zddRealFloat26DcYo, hs_eta126DcYv);
            };
            var hs_e026DcZU = new $hs.Thunk();
            hs_e026DcZU.evaluateOnce = function () {
                var hs_wild126DdCx = hs_ds26DcZO;
                if (hs_ds26DcZO.notEvaluated) {
                    hs_wild126DdCx = hs_ds26DcZO.hscall();
                }
                var hs_e126DcZT = hs_wild126DdCx.data[1];
                if (hs_e126DcZT.notEvaluated) {
                    return hs_e126DcZT.hscall();
                } else {
                    return hs_e126DcZT;
                }
            };
            var hs_ds126Dd0d = new $hs.Thunk();
            hs_ds126Dd0d.evaluateOnce = function () {
                var hs_n26DcZX = new $hs.Thunk();
                hs_n26DcZX.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_minExp26DcZM, hs_e026DcZU);
                };
                var hs_sat26DdCA = new $hs.Data(1);
                hs_sat26DdCA.data = [0];
                var hs_wild126DdCz = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_n26DcZX, hs_sat26DdCA);
                switch (hs_wild126DdCz.tag) {
                case 1:
                    var hs_sat26DdCC = new $hs.Thunk();
                    hs_sat26DdCC.evaluateOnce = function () {
                        var hs_wild226DdCy = hs_ds26DcZO;
                        if (hs_ds26DcZO.notEvaluated) {
                            hs_wild226DdCy = hs_ds26DcZO.hscall();
                        }
                        var hs_f026Dd03 = hs_wild226DdCy.data[0];
                        if (hs_f026Dd03.notEvaluated) {
                            return hs_f026Dd03.hscall();
                        } else {
                            return hs_f026Dd03;
                        }
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26DdCC, hs_e026DcZU];
                    return $res;
                case 2:
                    var hs_sat26DdCD = new $hs.Thunk();
                    hs_sat26DdCD.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_e026DcZU, hs_n26DcZX);
                    };
                    var hs_sat26DdCI = new $hs.Thunk();
                    hs_sat26DdCI.evaluateOnce = function () {
                        var hs_sat26DdCF = new $hs.Thunk();
                        hs_sat26DdCF.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_b26DcZD, hs_n26DcZX);
                        };
                        var hs_sat26DdCH = new $hs.Thunk();
                        hs_sat26DdCH.evaluateOnce = function () {
                            var hs_wild226DdCE = hs_ds26DcZO;
                            if (hs_ds26DcZO.notEvaluated) {
                                hs_wild226DdCE = hs_ds26DcZO.hscall();
                            }
                            var hs_f026Dd08 = hs_wild226DdCE.data[0];
                            if (hs_f026Dd08.notEvaluated) {
                                return hs_f026Dd08.hscall();
                            } else {
                                return hs_f026Dd08;
                            }
                        };
                        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DdCH, hs_sat26DdCF);
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26DdCI, hs_sat26DdCD];
                    return $res;
                }
            };
            var hs_e26Dd0j = new $hs.Thunk();
            hs_e26Dd0j.evaluateOnce = function () {
                var hs_wild126DdCK = hs_ds126Dd0d;
                if (hs_ds126Dd0d.notEvaluated) {
                    hs_wild126DdCK = hs_ds126Dd0d.hscall();
                }
                var hs_e126Dd0i = hs_wild126DdCK.data[1];
                if (hs_e126Dd0i.notEvaluated) {
                    return hs_e126Dd0i.hscall();
                } else {
                    return hs_e126Dd0i;
                }
            };
            var hs_f26Dd0p = new $hs.Thunk();
            hs_f26Dd0p.evaluateOnce = function () {
                var hs_wild126DdCL = hs_ds126Dd0d;
                if (hs_ds126Dd0d.notEvaluated) {
                    hs_wild126DdCL = hs_ds126Dd0d.hscall();
                }
                var hs_f126Dd0o = hs_wild126DdCL.data[0];
                if (hs_f126Dd0o.notEvaluated) {
                    return hs_f126Dd0o.hscall();
                } else {
                    return hs_f126Dd0o;
                }
            };
            var hs_ds226Dd18 = new $hs.Thunk();
            hs_ds226Dd18.evaluateOnce = function () {
                var hs_sat26DdCO = new $hs.Data(1);
                hs_sat26DdCO.data = [0];
                var hs_wild126DdCN = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_e26Dd0j, hs_sat26DdCO);
                switch (hs_wild126DdCN.tag) {
                case 1:
                    var hs_sat26DdCS = new $hs.Thunk();
                    hs_sat26DdCS.evaluateOnce = function () {
                        var hs_sat26DdCR = new $hs.Thunk();
                        hs_sat26DdCR.evaluateOnce = function () {
                            var hs_sat26DdCQ = new $hs.Thunk();
                            hs_sat26DdCQ.evaluateOnce = function () {
                                var hs_sat26DdCP = new $hs.Data(1);
                                hs_sat26DdCP.data = [1];
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p26DcZF, hs_sat26DdCP);
                            };
                            return $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_b26DcZD, hs_sat26DdCQ);
                        };
                        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_f26Dd0p, hs_sat26DdCR);
                    };
                    var hs_sat26DdCU = new $hs.Thunk();
                    hs_sat26DdCU.evaluateOnce = function () {
                        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_e26Dd0j, hs_minExp26DcZM);
                    };
                    var hs_wild226DdCT = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DdCU, hs_sat26DdCS);
                    switch (hs_wild226DdCT.tag) {
                    case 1:
                        var hs_sat26DdCV = new $hs.Thunk();
                        hs_sat26DdCV.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        var hs_sat26DdCW = new $hs.Thunk();
                        hs_sat26DdCW.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        var hs_sat26DdD0 = new $hs.Thunk();
                        hs_sat26DdD0.evaluateOnce = function () {
                            var hs_sat26DdCX = new $hs.Thunk();
                            hs_sat26DdCX.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                            };
                            var hs_sat26DdCZ = new $hs.Thunk();
                            hs_sat26DdCZ.evaluateOnce = function () {
                                var hs_sat26DdCY = new $hs.Thunk();
                                hs_sat26DdCY.evaluateOnce = function () {
                                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_e26Dd0j);
                                };
                                return $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_b26DcZD, hs_sat26DdCY);
                            };
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DdCZ, hs_sat26DdCX);
                        };
                        var hs_sat26DdD2 = new $hs.Thunk();
                        hs_sat26DdD2.evaluateOnce = function () {
                            var hs_sat26DdD1 = new $hs.Thunk();
                            hs_sat26DdD1.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                            };
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_f26Dd0p, hs_sat26DdD1);
                        };
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26DdD2, hs_sat26DdD0, hs_sat26DdCW, hs_sat26DdCV];
                        return $res;
                    case 2:
                        var hs_sat26DdD3 = new $hs.Thunk();
                        hs_sat26DdD3.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        var hs_sat26DdD9 = new $hs.Thunk();
                        hs_sat26DdD9.evaluateOnce = function () {
                            var hs_sat26DdD4 = new $hs.Thunk();
                            hs_sat26DdD4.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                            };
                            var hs_sat26DdD8 = new $hs.Thunk();
                            hs_sat26DdD8.evaluateOnce = function () {
                                var hs_sat26DdD7 = new $hs.Thunk();
                                hs_sat26DdD7.evaluateOnce = function () {
                                    var hs_sat26DdD5 = new $hs.Data(1);
                                    hs_sat26DdD5.data = [1];
                                    var hs_sat26DdD6 = new $hs.Thunk();
                                    hs_sat26DdD6.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_e26Dd0j);
                                    };
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdD6, hs_sat26DdD5);
                                };
                                return $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_b26DcZD, hs_sat26DdD7);
                            };
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DdD8, hs_sat26DdD4);
                        };
                        var hs_sat26DdDc = new $hs.Thunk();
                        hs_sat26DdDc.evaluateOnce = function () {
                            var hs_sat26DdDa = new $hs.Thunk();
                            hs_sat26DdDa.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                            };
                            var hs_sat26DdDb = new $hs.Thunk();
                            hs_sat26DdDb.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_f26Dd0p, hs_b26DcZD);
                            };
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DdDb, hs_sat26DdDa);
                        };
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26DdDc, hs_sat26DdD9, hs_b26DcZD, hs_sat26DdD3];
                        return $res;
                    }
                case 2:
                    var hs_be26Dd0S = new $hs.Thunk();
                    hs_be26Dd0S.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_b26DcZD, hs_e26Dd0j);
                    };
                    var hs_sat26DdDg = new $hs.Thunk();
                    hs_sat26DdDg.evaluateOnce = function () {
                        var hs_sat26DdDe = new $hs.Thunk();
                        hs_sat26DdDe.evaluateOnce = function () {
                            var hs_sat26DdDd = new $hs.Data(1);
                            hs_sat26DdDd.data = [1];
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p26DcZF, hs_sat26DdDd);
                        };
                        return $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_b26DcZD, hs_sat26DdDe);
                    };
                    var hs_wild226DdDf = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_f26Dd0p, hs_sat26DdDg);
                    switch (hs_wild226DdDf.tag) {
                    case 1:
                        var hs_sat26DdDh = new $hs.Thunk();
                        hs_sat26DdDh.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                        };
                        var hs_sat26DdDk = new $hs.Thunk();
                        hs_sat26DdDk.evaluateOnce = function () {
                            var hs_sat26DdDi = new $hs.Thunk();
                            hs_sat26DdDi.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                            };
                            var hs_sat26DdDj = new $hs.Thunk();
                            hs_sat26DdDj.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_f26Dd0p, hs_be26Dd0S);
                            };
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DdDj, hs_sat26DdDi);
                        };
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26DdDk, hs_sat26DdDh, hs_be26Dd0S, hs_be26Dd0S];
                        return $res;
                    case 2:
                        var hs_sat26DdDl = new $hs.Thunk();
                        hs_sat26DdDl.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_be26Dd0S, hs_b26DcZD);
                        };
                        var hs_sat26DdDn = new $hs.Thunk();
                        hs_sat26DdDn.evaluateOnce = function () {
                            var hs_sat26DdDm = new $hs.Thunk();
                            hs_sat26DdDm.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                            };
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DdDm, hs_b26DcZD);
                        };
                        var hs_sat26DdDr = new $hs.Thunk();
                        hs_sat26DdDr.evaluateOnce = function () {
                            var hs_sat26DdDo = new $hs.Thunk();
                            hs_sat26DdDo.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                            };
                            var hs_sat26DdDq = new $hs.Thunk();
                            hs_sat26DdDq.evaluateOnce = function () {
                                var hs_sat26DdDp = new $hs.Thunk();
                                hs_sat26DdDp.evaluateOnce = function () {
                                    return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_f26Dd0p, hs_be26Dd0S);
                                };
                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DdDp, hs_b26DcZD);
                            };
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DdDq, hs_sat26DdDo);
                        };
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26DdDr, hs_sat26DdDn, hs_sat26DdDl, hs_be26Dd0S];
                        return $res;
                    }
                }
            };
            var hs_mUp26Dd1g = new $hs.Thunk();
            hs_mUp26Dd1g.evaluateOnce = function () {
                var hs_wild126DdDt = hs_ds226Dd18;
                if (hs_ds226Dd18.notEvaluated) {
                    hs_wild126DdDt = hs_ds226Dd18.hscall();
                }
                var hs_mUp126Dd1f = hs_wild126DdDt.data[2];
                if (hs_mUp126Dd1f.notEvaluated) {
                    return hs_mUp126Dd1f.hscall();
                } else {
                    return hs_mUp126Dd1f;
                }
            };
            var hs_s26Dd1o = new $hs.Thunk();
            hs_s26Dd1o.evaluateOnce = function () {
                var hs_wild126DdDx = hs_ds226Dd18;
                if (hs_ds226Dd18.notEvaluated) {
                    hs_wild126DdDx = hs_ds226Dd18.hscall();
                }
                var hs_s126Dd1n = hs_wild126DdDx.data[1];
                if (hs_s126Dd1n.notEvaluated) {
                    return hs_s126Dd1n.hscall();
                } else {
                    return hs_s126Dd1n;
                }
            };
            var hs_r26Dd1w = new $hs.Thunk();
            hs_r26Dd1w.evaluateOnce = function () {
                var hs_wild126DdDA = hs_ds226Dd18;
                if (hs_ds226Dd18.notEvaluated) {
                    hs_wild126DdDA = hs_ds226Dd18.hscall();
                }
                var hs_r126Dd1v = hs_wild126DdDA.data[0];
                if (hs_r126Dd1v.notEvaluated) {
                    return hs_r126Dd1v.hscall();
                } else {
                    return hs_r126Dd1v;
                }
            };
            var hs_k26Dd2l = new $hs.Thunk();
            hs_k26Dd2l.evaluateOnce = function () {
                var hs_fixup26Dd1J = new $hs.Func(1);
                hs_fixup26Dd1J.evaluate = function (hs_n26Dd1A) {
                    var hs_sat26DdDF = new $hs.Data(1);
                    hs_sat26DdDF.data = [0];
                    var hs_wild126DdDE = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_n26Dd1A, hs_sat26DdDF);
                    switch (hs_wild126DdDE.tag) {
                    case 1:
                        var hs_sat26DdDK = new $hs.Thunk();
                        hs_sat26DdDK.evaluateOnce = function () {
                            var hs_sat26DdDG = new $hs.Thunk();
                            hs_sat26DdDG.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_r26Dd1w, hs_mUp26Dd1g);
                            };
                            var hs_sat26DdDI = new $hs.Thunk();
                            hs_sat26DdDI.evaluateOnce = function () {
                                var hs_sat26DdDH = new $hs.Thunk();
                                hs_sat26DdDH.evaluateOnce = function () {
                                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26Dd1A);
                                };
                                return $hs.modules.GHCziFloat.hs_expt.hscall(hs_eta26DcYH, hs_sat26DdDH);
                            };
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DdDI, hs_sat26DdDG);
                        };
                        var hs_wild226DdDJ = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_sat26DdDK, hs_s26Dd1o);
                        switch (hs_wild226DdDJ.tag) {
                        case 1:
                            var hs_sat26DdDM = new $hs.Thunk();
                            hs_sat26DdDM.evaluateOnce = function () {
                                var hs_sat26DdDL = new $hs.Data(1);
                                hs_sat26DdDL.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26Dd1A, hs_sat26DdDL);
                            };
                            return hs_fixup26Dd1J.hscall(hs_sat26DdDM);
                        case 2:
                            if (hs_n26Dd1A.notEvaluated) {
                                return hs_n26Dd1A.hscall();
                            } else {
                                return hs_n26Dd1A;
                            }
                        }
                    case 2:
                        var hs_sat26DdDO = new $hs.Thunk();
                        hs_sat26DdDO.evaluateOnce = function () {
                            var hs_sat26DdDN = new $hs.Thunk();
                            hs_sat26DdDN.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_expt.hscall(hs_eta26DcYH, hs_n26Dd1A);
                            };
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DdDN, hs_s26Dd1o);
                        };
                        var hs_sat26DdDQ = new $hs.Thunk();
                        hs_sat26DdDQ.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_r26Dd1w, hs_mUp26Dd1g);
                        };
                        var hs_wild226DdDP = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_sat26DdDQ, hs_sat26DdDO);
                        switch (hs_wild226DdDP.tag) {
                        case 1:
                            var hs_sat26DdDS = new $hs.Thunk();
                            hs_sat26DdDS.evaluateOnce = function () {
                                var hs_sat26DdDR = new $hs.Data(1);
                                hs_sat26DdDR.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26Dd1A, hs_sat26DdDR);
                            };
                            return hs_fixup26Dd1J.hscall(hs_sat26DdDS);
                        case 2:
                            if (hs_n26Dd1A.notEvaluated) {
                                return hs_n26Dd1A.hscall();
                            } else {
                                return hs_n26Dd1A;
                            }
                        }
                    }
                };
                var hs_sat26DdEi = new $hs.Thunk();
                hs_sat26DdEi.evaluateOnce = function () {
                    var hs_sat26DdDU = new $hs.Thunk();
                    hs_sat26DdDU.evaluateOnce = function () {
                        var hs_sat26DdDT = new $hs.Thunk();
                        hs_sat26DdDT.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(10);
                        };
                        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_eta26DcYH, hs_sat26DdDT);
                    };
                    var hs_sat26DdDX = new $hs.Thunk();
                    hs_sat26DdDX.evaluateOnce = function () {
                        var hs_sat26DdDV = new $hs.Thunk();
                        hs_sat26DdDV.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                        };
                        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_b26DcZD, hs_sat26DdDV);
                    };
                    var hs_wild126DdDW = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DdDX, hs_sat26DdDU);
                    switch (hs_wild126DdDW.tag) {
                    case 1:
                        var hs_sat26DdE9 = new $hs.Thunk();
                        hs_sat26DdE9.evaluateOnce = function () {
                            var hs_sat26DdDZ = new $hs.Thunk();
                            hs_sat26DdDZ.evaluateOnce = function () {
                                var hs_sat26DdDY = new $hs.Thunk();
                                hs_sat26DdDY.evaluateOnce = function () {
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_eta26DcYH);
                                };
                                return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat, hs_sat26DdDY);
                            };
                            var hs_sat26DdE8 = new $hs.Thunk();
                            hs_sat26DdE8.evaluateOnce = function () {
                                var hs_sat26DdE3 = new $hs.Thunk();
                                hs_sat26DdE3.evaluateOnce = function () {
                                    var hs_sat26DdE1 = new $hs.Thunk();
                                    hs_sat26DdE1.evaluateOnce = function () {
                                        var hs_sat26DdE0 = new $hs.Thunk();
                                        hs_sat26DdE0.evaluateOnce = function () {
                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_b26DcZD);
                                        };
                                        return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat, hs_sat26DdE0);
                                    };
                                    var hs_sat26DdE2 = new $hs.Thunk();
                                    hs_sat26DdE2.evaluateOnce = function () {
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziFloat.hs_zdfNumFloat, hs_e26Dd0j);
                                    };
                                    return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26DdE2, hs_sat26DdE1);
                                };
                                var hs_sat26DdE7 = new $hs.Thunk();
                                hs_sat26DdE7.evaluateOnce = function () {
                                    var hs_sat26DdE6 = new $hs.Thunk();
                                    hs_sat26DdE6.evaluateOnce = function () {
                                        var hs_sat26DdE5 = new $hs.Thunk();
                                        hs_sat26DdE5.evaluateOnce = function () {
                                            var hs_sat26DdE4 = new $hs.Thunk();
                                            hs_sat26DdE4.evaluateOnce = function () {
                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                            };
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_f26Dd0p, hs_sat26DdE4);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26DdE5);
                                    };
                                    return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingFloat, hs_sat26DdE6);
                                };
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26DdE7, hs_sat26DdE3);
                            };
                            return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat, hs_sat26DdE8, hs_sat26DdDZ);
                        };
                        return $hs.modules.GHCziReal.hs_ceiling.hscall($hs.modules.GHCziFloat.hs_zdfRealFracFloat, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26DdE9);
                    case 2:
                        var hs_lx26Dd2b = new $hs.Thunk();
                        hs_lx26Dd2b.evaluateOnce = function () {
                            var hs_sat26DdEb = new $hs.Thunk();
                            hs_sat26DdEb.evaluateOnce = function () {
                                var hs_sat26DdEa = new $hs.Data(1);
                                hs_sat26DdEa.data = [1];
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_p26DcZF, hs_sat26DdEa);
                            };
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdEb, hs_e026DcZU);
                        };
                        var hs_k126Dd2g = new $hs.Thunk();
                        hs_k126Dd2g.evaluateOnce = function () {
                            var hs_sat26DdEc = new $hs.Data(1);
                            hs_sat26DdEc.data = [28738];
                            var hs_sat26DdEe = new $hs.Thunk();
                            hs_sat26DdEe.evaluateOnce = function () {
                                var hs_sat26DdEd = new $hs.Data(1);
                                hs_sat26DdEd.data = [8651];
                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_lx26Dd2b, hs_sat26DdEd);
                            };
                            return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26DdEe, hs_sat26DdEc);
                        };
                        var hs_sat26DdEg = new $hs.Data(1);
                        hs_sat26DdEg.data = [0];
                        var hs_wild226DdEf = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_lx26Dd2b, hs_sat26DdEg);
                        switch (hs_wild226DdEf.tag) {
                        case 1:
                            if (hs_k126Dd2g.notEvaluated) {
                                return hs_k126Dd2g.hscall();
                            } else {
                                return hs_k126Dd2g;
                            }
                        case 2:
                            var hs_sat26DdEh = new $hs.Data(1);
                            hs_sat26DdEh.data = [1];
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_k126Dd2g, hs_sat26DdEh);
                        }
                    }
                };
                return hs_fixup26Dd1J.hscall(hs_sat26DdEi);
            };
            var hs_sat26DdEE = new $hs.Thunk();
            hs_sat26DdEE.evaluateOnce = function () {
                var hs_sat26DdEC = new $hs.Thunk();
                hs_sat26DdEC.evaluateOnce = function () {
                    var hs_sat26DdEB = new $hs.Thunk();
                    hs_sat26DdEB.evaluateOnce = function () {
                        var hs_sat26DdEk = new $hs.Data(1);
                        hs_sat26DdEk.data = [0];
                        var hs_wild126DdEj = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_k26Dd2l, hs_sat26DdEk);
                        switch (hs_wild126DdEj.tag) {
                        case 1:
                            var hs_bk26Dd2r = new $hs.Thunk();
                            hs_bk26Dd2r.evaluateOnce = function () {
                                var hs_sat26DdEl = new $hs.Thunk();
                                hs_sat26DdEl.evaluateOnce = function () {
                                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_k26Dd2l);
                                };
                                return $hs.modules.GHCziFloat.hs_expt.hscall(hs_eta26DcYH, hs_sat26DdEl);
                            };
                            var hs_sat26DdEr = new $hs.Thunk();
                            hs_sat26DdEr.evaluateOnce = function () {
                                var hs_sat26DdEq = new $hs.Thunk();
                                hs_sat26DdEq.evaluateOnce = function () {
                                    var hs_wild226DdEn = hs_ds226Dd18;
                                    if (hs_ds226Dd18.notEvaluated) {
                                        hs_wild226DdEn = hs_ds226Dd18.hscall();
                                    }
                                    var hs_mDn26Dd2z = hs_wild226DdEn.data[3];
                                    if (hs_mDn26Dd2z.notEvaluated) {
                                        return hs_mDn26Dd2z.hscall();
                                    } else {
                                        return hs_mDn26Dd2z;
                                    }
                                };
                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DdEq, hs_bk26Dd2r);
                            };
                            var hs_sat26DdEs = new $hs.Thunk();
                            hs_sat26DdEs.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_mUp26Dd1g, hs_bk26Dd2r);
                            };
                            var hs_sat26DdEt = new $hs.Thunk();
                            hs_sat26DdEt.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_r26Dd1w, hs_bk26Dd2r);
                            };
                            return hs_gen26DcZ8.hscall($hs.modules.GHCziTypes.hs_ZMZN, hs_sat26DdEt, hs_s26Dd1o, hs_sat26DdEs, hs_sat26DdEr);
                        case 2:
                            var hs_sat26DdEy = new $hs.Thunk();
                            hs_sat26DdEy.evaluateOnce = function () {
                                var hs_wild226DdEv = hs_ds226Dd18;
                                if (hs_ds226Dd18.notEvaluated) {
                                    hs_wild226DdEv = hs_ds226Dd18.hscall();
                                }
                                var hs_mDn26Dd2J = hs_wild226DdEv.data[3];
                                if (hs_mDn26Dd2J.notEvaluated) {
                                    return hs_mDn26Dd2J.hscall();
                                } else {
                                    return hs_mDn26Dd2J;
                                }
                            };
                            var hs_sat26DdEA = new $hs.Thunk();
                            hs_sat26DdEA.evaluateOnce = function () {
                                var hs_sat26DdEz = new $hs.Thunk();
                                hs_sat26DdEz.evaluateOnce = function () {
                                    return $hs.modules.GHCziFloat.hs_expt.hscall(hs_eta26DcYH, hs_k26Dd2l);
                                };
                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_s26Dd1o, hs_sat26DdEz);
                            };
                            return hs_gen26DcZ8.hscall($hs.modules.GHCziTypes.hs_ZMZN, hs_r26Dd1w, hs_sat26DdEA, hs_mUp26Dd1g, hs_sat26DdEy);
                        }
                    };
                    return $hs.modules.GHCziList.hs_reverse.hscall(hs_sat26DdEB);
                };
                var hs_sat26DdED = new $hs.Thunk();
                hs_sat26DdED.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, $hs.modules.GHCziNum.hs_zdfNumInt);
                };
                return $hs.modules.GHCziBase.hs_map.hscall(hs_sat26DdED, hs_sat26DdEC);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DdEE, hs_k26Dd2l];
            return $res;
        case 2:
            var hs_sat26DdEF = new $hs.Data(1);
            hs_sat26DdEF.data = [0];
            var hs_sat26DdEG = new $hs.Data(1);
            hs_sat26DdEG.data = [0];
            var hs_sat26DdEH = new $hs.Data(2);
            hs_sat26DdEH.data = [hs_sat26DdEG, $hs.modules.GHCziTypes.hs_ZMZN];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DdEH, hs_sat26DdEF];
            return $res;
        }
    };
    this.hs_formatRealFloat.evaluate = function (hs_zddRealFloat26Dd2W, hs_eta26Dd7u, hs_eta126Dd3d, hs_eta226Dd7l) {
        var hs_zddRealFrac426Dd2X = new $hs.Thunk();
        hs_zddRealFrac426Dd2X.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_zdp1RealFloat.hscall(hs_zddRealFloat26Dd2W);
        };
        var hs_zddReal1226Dd2Z = new $hs.Thunk();
        hs_zddReal1226Dd2Z.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac426Dd2X);
        };
        var hs_zddNum1326Dd31 = new $hs.Thunk();
        hs_zddNum1326Dd31.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1226Dd2Z);
        };
        var hs_base26Dd33 = new $hs.Data(1);
        hs_base26Dd33.data = [10];
        var hs_doFmt26Dd7i = new $hs.Func(2);
        hs_doFmt26Dd7i.evaluate = function (hs_format26Dd3b, hs_ds26Dd37) {
            var hs_wild26DdEK = hs_ds26Dd37;
            if (hs_ds26Dd37.notEvaluated) {
                hs_wild26DdEK = hs_ds26Dd37.hscall();
            }
            var hs_is26Dd3k = hs_wild26DdEK.data[0];
            var hs_e26Dd3g = hs_wild26DdEK.data[1];
            var hs_wild126DdEJ = hs_format26Dd3b;
            if (hs_format26Dd3b.notEvaluated) {
                hs_wild126DdEJ = hs_format26Dd3b.hscall();
            }
            switch (hs_wild126DdEJ.tag) {
            case 1:
                var hs_wild226DdEI = hs_eta126Dd3d;
                if (hs_eta126Dd3d.notEvaluated) {
                    hs_wild226DdEI = hs_eta126Dd3d.hscall();
                }
                switch (hs_wild226DdEI.tag) {
                case 1:
                    var hs_showzuezq26Dd3j = new $hs.Thunk();
                    hs_showzuezq26Dd3j.evaluateOnce = function () {
                        var hs_sat26DdEM = new $hs.Thunk();
                        hs_sat26DdEM.evaluateOnce = function () {
                            var hs_sat26DdEL = new $hs.Data(1);
                            hs_sat26DdEL.data = [1];
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_e26Dd3g, hs_sat26DdEL);
                        };
                        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26DdEM);
                    };
                    var hs_wild326DdEO = $hs.modules.GHCziBase.hs_map.hscall($hs.modules.GHCziShow.hs_intToDigit, hs_is26Dd3k);
                    switch (hs_wild326DdEO.tag) {
                    case 1:
                        var hs_sat26DdEN = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("formatRealFloat/doFmt/FFExponent: []\x00");
                        return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DdEN);
                    case 2:
                        var hs_ds126Dd3t = hs_wild326DdEO.data[0];
                        var hs_ds226Dd3r = hs_wild326DdEO.data[1];
                        var hs_fail26Dd3G = new $hs.Func(1);
                        hs_fail26Dd3G.evaluate = function (hs_ds326Dd3F) {
                            var hs_wild426Dd3z = hs_ds226Dd3r;
                            if (hs_ds226Dd3r.notEvaluated) {
                                hs_wild426Dd3z = hs_ds226Dd3r.hscall();
                            }
                            switch (hs_wild426Dd3z.tag) {
                            case 1:
                                var hs_sat26DdEQ = new $hs.Thunk();
                                hs_sat26DdEQ.evaluateOnce = function () {
                                    var hs_sat26DdEP = new $hs.Thunk();
                                    hs_sat26DdEP.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(".0e\x00");
                                    };
                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DdEP, hs_showzuezq26Dd3j);
                                };
                                var $res = new $hs.Data(2);
                                $res.data = [hs_ds126Dd3t, hs_sat26DdEQ];
                                return $res;
                            case 2:
                                var hs_sat26DdEW = new $hs.Thunk();
                                hs_sat26DdEW.evaluateOnce = function () {
                                    var hs_sat26DdEV = new $hs.Thunk();
                                    hs_sat26DdEV.evaluateOnce = function () {
                                        var hs_sat26DdET = new $hs.Data(1);
                                        hs_sat26DdET.data = ["e"];
                                        var hs_sat26DdEU = new $hs.Data(2);
                                        hs_sat26DdEU.data = [hs_sat26DdET, $hs.modules.GHCziTypes.hs_ZMZN];
                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DdEU, hs_showzuezq26Dd3j);
                                    };
                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_wild426Dd3z, hs_sat26DdEV);
                                };
                                var hs_sat26DdEX = new $hs.Data(1);
                                hs_sat26DdEX.data = ["."];
                                var hs_sat26DdEY = new $hs.Data(2);
                                hs_sat26DdEY.data = [hs_sat26DdEX, hs_sat26DdEW];
                                var $res = new $hs.Data(2);
                                $res.data = [hs_ds126Dd3t, hs_sat26DdEY];
                                return $res;
                            }
                        };
                        var hs_wild426DdF0 = hs_ds126Dd3t;
                        if (hs_ds126Dd3t.notEvaluated) {
                            hs_wild426DdF0 = hs_ds126Dd3t.hscall();
                        }
                        var hs_ds326Dd3J = hs_wild426DdF0.data[0];
                        var hs_ds426DdEZ = hs_ds326Dd3J;
                        if (hs_ds326Dd3J.notEvaluated) {
                            hs_ds426DdEZ = hs_ds326Dd3J.hscall();
                        }
                        switch (hs_ds426DdEZ) {
                        case "0":
                            var hs_wild526DdF1 = hs_ds226Dd3r;
                            if (hs_ds226Dd3r.notEvaluated) {
                                hs_wild526DdF1 = hs_ds226Dd3r.hscall();
                            }
                            switch (hs_wild526DdF1.tag) {
                            case 1:
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("0.0e0\x00");
                            case 2:
                                return hs_fail26Dd3G.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            }
                        default:
                            return hs_fail26Dd3G.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        }
                    }
                case 2:
                    var hs_dec26Dd3Q = hs_wild226DdEI.data[0];
                    var hs_deczq26Dd3S = new $hs.Thunk();
                    hs_deczq26Dd3S.evaluateOnce = function () {
                        var hs_sat26DdF4 = new $hs.Data(1);
                        hs_sat26DdF4.data = [1];
                        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_dec26Dd3Q, hs_sat26DdF4);
                    };
                    var hs_fail26Dd4F = new $hs.Func(1);
                    hs_fail26Dd4F.evaluate = function (hs_ds126Dd4E) {
                        var hs_ds226Dd3Y = new $hs.Thunk();
                        hs_ds226Dd3Y.evaluateOnce = function () {
                            var hs_sat26DdF6 = new $hs.Thunk();
                            hs_sat26DdF6.evaluateOnce = function () {
                                var hs_sat26DdF5 = new $hs.Data(1);
                                hs_sat26DdF5.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_deczq26Dd3S, hs_sat26DdF5);
                            };
                            return $hs.modules.GHCziFloat.hs_roundTo.hscall(hs_base26Dd33, hs_sat26DdF6, hs_is26Dd3k);
                        };
                        var hs_ei26Dd44 = new $hs.Thunk();
                        hs_ei26Dd44.evaluateOnce = function () {
                            var hs_wild326DdF7 = hs_ds226Dd3Y;
                            if (hs_ds226Dd3Y.notEvaluated) {
                                hs_wild326DdF7 = hs_ds226Dd3Y.hscall();
                            }
                            var hs_ei126Dd43 = hs_wild326DdF7.data[0];
                            if (hs_ei126Dd43.notEvaluated) {
                                return hs_ei126Dd43.hscall();
                            } else {
                                return hs_ei126Dd43;
                            }
                        };
                        var hs_ds326Dd46 = new $hs.Thunk();
                        hs_ds326Dd46.evaluateOnce = function () {
                            return $hs.modules.ControlziExceptionziBase.hs_irrefutPatError.hscall("../../ghc-7.0.2/libraries/base/GHC/Float.lhs:516:12-70|(d : ds')\x00");
                        };
                        var hs_ds426Dd4k = new $hs.Thunk();
                        hs_ds426Dd4k.evaluateOnce = function () {
                            var hs_sat26DdFg = new $hs.Thunk();
                            hs_sat26DdFg.evaluateOnce = function () {
                                var hs_sat26DdFc = new $hs.Data(1);
                                hs_sat26DdFc.data = [0];
                                var hs_wild326DdFb = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ei26Dd44, hs_sat26DdFc);
                                switch (hs_wild326DdFb.tag) {
                                case 1:
                                    var hs_wild426DdFa = hs_ds226Dd3Y;
                                    if (hs_ds226Dd3Y.notEvaluated) {
                                        hs_wild426DdFa = hs_ds226Dd3Y.hscall();
                                    }
                                    var hs_iszq26Dd4d = hs_wild426DdFa.data[1];
                                    if (hs_iszq26Dd4d.notEvaluated) {
                                        return hs_iszq26Dd4d.hscall();
                                    } else {
                                        return hs_iszq26Dd4d;
                                    }
                                case 2:
                                    var hs_sat26DdFf = new $hs.Thunk();
                                    hs_sat26DdFf.evaluateOnce = function () {
                                        var hs_wild426DdFe = hs_ds226Dd3Y;
                                        if (hs_ds226Dd3Y.notEvaluated) {
                                            hs_wild426DdFe = hs_ds226Dd3Y.hscall();
                                        }
                                        var hs_iszq26Dd4h = hs_wild426DdFe.data[1];
                                        if (hs_iszq26Dd4h.notEvaluated) {
                                            return hs_iszq26Dd4h.hscall();
                                        } else {
                                            return hs_iszq26Dd4h;
                                        }
                                    };
                                    return $hs.modules.GHCziList.hs_init.hscall(hs_sat26DdFf);
                                }
                            };
                            return $hs.modules.GHCziBase.hs_map.hscall($hs.modules.GHCziShow.hs_intToDigit, hs_sat26DdFg);
                        };
                        var hs_sat26DdFq = new $hs.Thunk();
                        hs_sat26DdFq.evaluateOnce = function () {
                            var hs_sat26DdFk = new $hs.Thunk();
                            hs_sat26DdFk.evaluateOnce = function () {
                                var hs_sat26DdFj = new $hs.Thunk();
                                hs_sat26DdFj.evaluateOnce = function () {
                                    var hs_sat26DdFi = new $hs.Thunk();
                                    hs_sat26DdFi.evaluateOnce = function () {
                                        var hs_sat26DdFh = new $hs.Data(1);
                                        hs_sat26DdFh.data = [1];
                                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_e26Dd3g, hs_sat26DdFh);
                                    };
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdFi, hs_ei26Dd44);
                                };
                                return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26DdFj);
                            };
                            var hs_sat26DdFl = new $hs.Data(1);
                            hs_sat26DdFl.data = ["e"];
                            var hs_sat26DdFn = new $hs.Data(2);
                            hs_sat26DdFn.data = [hs_sat26DdFl, hs_sat26DdFk];
                            var hs_sat26DdFp = new $hs.Thunk();
                            hs_sat26DdFp.evaluateOnce = function () {
                                var hs_wild326DdFm = hs_ds426Dd4k;
                                if (hs_ds426Dd4k.notEvaluated) {
                                    hs_wild326DdFm = hs_ds426Dd4k.hscall();
                                }
                                switch (hs_wild326DdFm.tag) {
                                case 1:
                                    if (hs_ds326Dd46.notEvaluated) {
                                        return hs_ds326Dd46.hscall();
                                    } else {
                                        return hs_ds326Dd46;
                                    }
                                case 2:
                                    var hs_dszq26Dd4u = hs_wild326DdFm.data[1];
                                    if (hs_dszq26Dd4u.notEvaluated) {
                                        return hs_dszq26Dd4u.hscall();
                                    } else {
                                        return hs_dszq26Dd4u;
                                    }
                                }
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DdFp, hs_sat26DdFn);
                        };
                        var hs_sat26DdFr = new $hs.Data(1);
                        hs_sat26DdFr.data = ["."];
                        var hs_sat26DdFt = new $hs.Data(2);
                        hs_sat26DdFt.data = [hs_sat26DdFr, hs_sat26DdFq];
                        var hs_sat26DdFv = new $hs.Thunk();
                        hs_sat26DdFv.evaluateOnce = function () {
                            var hs_wild326DdFs = hs_ds426Dd4k;
                            if (hs_ds426Dd4k.notEvaluated) {
                                hs_wild326DdFs = hs_ds426Dd4k.hscall();
                            }
                            switch (hs_wild326DdFs.tag) {
                            case 1:
                                if (hs_ds326Dd46.notEvaluated) {
                                    return hs_ds326Dd46.hscall();
                                } else {
                                    return hs_ds326Dd46;
                                }
                            case 2:
                                var hs_d26Dd4o = hs_wild326DdFs.data[0];
                                if (hs_d26Dd4o.notEvaluated) {
                                    return hs_d26Dd4o.hscall();
                                } else {
                                    return hs_d26Dd4o;
                                }
                            }
                        };
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26DdFv, hs_sat26DdFt];
                        return $res;
                    };
                    var hs_wild326DdFw = hs_is26Dd3k;
                    if (hs_is26Dd3k.notEvaluated) {
                        hs_wild326DdFw = hs_is26Dd3k.hscall();
                    }
                    switch (hs_wild326DdFw.tag) {
                    case 1:
                        return hs_fail26Dd4F.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    case 2:
                        var hs_ds126Dd4J = hs_wild326DdFw.data[0];
                        var hs_ds226Dd4O = hs_wild326DdFw.data[1];
                        var hs_wild426DdFy = hs_ds126Dd4J;
                        if (hs_ds126Dd4J.notEvaluated) {
                            hs_wild426DdFy = hs_ds126Dd4J.hscall();
                        }
                        var hs_ds326Dd4M = hs_wild426DdFy.data[0];
                        var hs_ds426DdFx = hs_ds326Dd4M;
                        if (hs_ds326Dd4M.notEvaluated) {
                            hs_ds426DdFx = hs_ds326Dd4M.hscall();
                        }
                        switch (hs_ds426DdFx) {
                        case 0:
                            var hs_wild526DdFz = hs_ds226Dd4O;
                            if (hs_ds226Dd4O.notEvaluated) {
                                hs_wild526DdFz = hs_ds226Dd4O.hscall();
                            }
                            switch (hs_wild526DdFz.tag) {
                            case 1:
                                var hs_sat26DdFE = new $hs.Thunk();
                                hs_sat26DdFE.evaluateOnce = function () {
                                    var hs_sat26DdFA = new $hs.Thunk();
                                    hs_sat26DdFA.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("e0\x00");
                                    };
                                    var hs_sat26DdFD = new $hs.Thunk();
                                    hs_sat26DdFD.evaluateOnce = function () {
                                        var hs_sat26DdFC = new $hs.Thunk();
                                        hs_sat26DdFC.evaluateOnce = function () {
                                            var hs_sat26DdFB = new $hs.Data(1);
                                            hs_sat26DdFB.data = ["0"];
                                            return $hs.modules.GHCziList.hs_repeat.hscall(hs_sat26DdFB);
                                        };
                                        return $hs.modules.GHCziList.hs_take.hscall(hs_deczq26Dd3S, hs_sat26DdFC);
                                    };
                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DdFD, hs_sat26DdFA);
                                };
                                var hs_sat26DdFF = new $hs.Data(1);
                                hs_sat26DdFF.data = ["."];
                                var hs_sat26DdFG = new $hs.Data(2);
                                hs_sat26DdFG.data = [hs_sat26DdFF, hs_sat26DdFE];
                                var hs_sat26DdFH = new $hs.Data(1);
                                hs_sat26DdFH.data = ["0"];
                                var $res = new $hs.Data(2);
                                $res.data = [hs_sat26DdFH, hs_sat26DdFG];
                                return $res;
                            case 2:
                                return hs_fail26Dd4F.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            }
                        default:
                            return hs_fail26Dd4F.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        }
                    }
                }
            case 2:
                var hs_wild226DdFK = hs_eta126Dd3d;
                if (hs_eta126Dd3d.notEvaluated) {
                    hs_wild226DdFK = hs_eta126Dd3d.hscall();
                }
                switch (hs_wild226DdFK.tag) {
                case 1:
                    var hs_sat26DdFM = new $hs.Data(1);
                    hs_sat26DdFM.data = [0];
                    var hs_wild326DdFL = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_e26Dd3g, hs_sat26DdFM);
                    switch (hs_wild326DdFL.tag) {
                    case 1:
                        var hs_zddEq326Dd54 = new $hs.Thunk();
                        hs_zddEq326Dd54.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zdp1Num.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
                        };
                        var hs_f26Dd5h = new $hs.Func(3);
                        hs_f26Dd5h.evaluate = function (hs_ds126Dd59, hs_s26Dd5k, hs_rs26Dd5d) {
                            var hs_sat26DdFQ = new $hs.Thunk();
                            hs_sat26DdFQ.evaluateOnce = function () {
                                var hs_sat26DdFN = new $hs.Thunk();
                                hs_sat26DdFN.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdFN);
                            };
                            var hs_wild426DdFP = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq326Dd54, hs_ds126Dd59, hs_sat26DdFQ);
                            switch (hs_wild426DdFP.tag) {
                            case 1:
                                var hs_wild526DdFO = hs_rs26Dd5d;
                                if (hs_rs26Dd5d.notEvaluated) {
                                    hs_wild526DdFO = hs_rs26Dd5d.hscall();
                                }
                                switch (hs_wild526DdFO.tag) {
                                case 1:
                                    var hs_sat26DdFR = new $hs.Data(1);
                                    hs_sat26DdFR.data = ["0"];
                                    var hs_sat26DdFS = new $hs.Data(2);
                                    hs_sat26DdFS.data = [hs_sat26DdFR, hs_s26Dd5k];
                                    var hs_sat26DdFV = new $hs.Thunk();
                                    hs_sat26DdFV.evaluateOnce = function () {
                                        var hs_sat26DdFU = new $hs.Thunk();
                                        hs_sat26DdFU.evaluateOnce = function () {
                                            var hs_sat26DdFT = new $hs.Thunk();
                                            hs_sat26DdFT.evaluateOnce = function () {
                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                            };
                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdFT);
                                        };
                                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ds126Dd59, hs_sat26DdFU);
                                    };
                                    return hs_f26Dd5h.hscall(hs_sat26DdFV, hs_sat26DdFS, $hs.modules.GHCziTypes.hs_ZMZN);
                                case 2:
                                    var hs_r26Dd5r = hs_wild526DdFO.data[0];
                                    var hs_rs126Dd5t = hs_wild526DdFO.data[1];
                                    var hs_sat26DdFW = new $hs.Data(2);
                                    hs_sat26DdFW.data = [hs_r26Dd5r, hs_s26Dd5k];
                                    var hs_sat26DdFZ = new $hs.Thunk();
                                    hs_sat26DdFZ.evaluateOnce = function () {
                                        var hs_sat26DdFY = new $hs.Thunk();
                                        hs_sat26DdFY.evaluateOnce = function () {
                                            var hs_sat26DdFX = new $hs.Thunk();
                                            hs_sat26DdFX.evaluateOnce = function () {
                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                            };
                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdFX);
                                        };
                                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ds126Dd59, hs_sat26DdFY);
                                    };
                                    return hs_f26Dd5h.hscall(hs_sat26DdFZ, hs_sat26DdFW, hs_rs126Dd5t);
                                }
                            case 2:
                                var hs_sat26DdG3 = new $hs.Thunk();
                                hs_sat26DdG3.evaluateOnce = function () {
                                    var hs_wild526Dd5F = hs_rs26Dd5d;
                                    if (hs_rs26Dd5d.notEvaluated) {
                                        hs_wild526Dd5F = hs_rs26Dd5d.hscall();
                                    }
                                    switch (hs_wild526Dd5F.tag) {
                                    case 1:
                                        var hs_sat26DdG0 = new $hs.Data(1);
                                        hs_sat26DdG0.data = ["0"];
                                        var $res = new $hs.Data(2);
                                        $res.data = [hs_sat26DdG0, $hs.modules.GHCziTypes.hs_ZMZN];
                                        return $res;
                                    case 2:
                                        if (hs_wild526Dd5F.notEvaluated) {
                                            return hs_wild526Dd5F.hscall();
                                        } else {
                                            return hs_wild526Dd5F;
                                        }
                                    }
                                };
                                var hs_sat26DdG4 = new $hs.Data(1);
                                hs_sat26DdG4.data = ["."];
                                var hs_sat26DdG5 = new $hs.Data(2);
                                hs_sat26DdG5.data = [hs_sat26DdG4, hs_sat26DdG3];
                                var hs_sat26DdG9 = new $hs.Thunk();
                                hs_sat26DdG9.evaluateOnce = function () {
                                    var hs_wild526Dd5y = $hs.modules.GHCziList.hs_reverse.hscall(hs_s26Dd5k);
                                    switch (hs_wild526Dd5y.tag) {
                                    case 1:
                                        var hs_sat26DdG6 = new $hs.Data(1);
                                        hs_sat26DdG6.data = ["0"];
                                        var $res = new $hs.Data(2);
                                        $res.data = [hs_sat26DdG6, $hs.modules.GHCziTypes.hs_ZMZN];
                                        return $res;
                                    case 2:
                                        if (hs_wild526Dd5y.notEvaluated) {
                                            return hs_wild526Dd5y.hscall();
                                        } else {
                                            return hs_wild526Dd5y;
                                        }
                                    }
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DdG9, hs_sat26DdG5);
                            }
                        };
                        var hs_sat26DdGa = new $hs.Thunk();
                        hs_sat26DdGa.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_map.hscall($hs.modules.GHCziShow.hs_intToDigit, hs_is26Dd3k);
                        };
                        return hs_f26Dd5h.hscall(hs_e26Dd3g, $hs.modules.GHCziTypes.hs_ZMZN, hs_sat26DdGa);
                    case 2:
                        var hs_sat26DdGf = new $hs.Thunk();
                        hs_sat26DdGf.evaluateOnce = function () {
                            var hs_sat26DdGb = new $hs.Thunk();
                            hs_sat26DdGb.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_map.hscall($hs.modules.GHCziShow.hs_intToDigit, hs_is26Dd3k);
                            };
                            var hs_sat26DdGe = new $hs.Thunk();
                            hs_sat26DdGe.evaluateOnce = function () {
                                var hs_sat26DdGc = new $hs.Data(1);
                                hs_sat26DdGc.data = ["0"];
                                var hs_sat26DdGd = new $hs.Thunk();
                                hs_sat26DdGd.evaluateOnce = function () {
                                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_e26Dd3g);
                                };
                                return $hs.modules.GHCziList.hs_replicate.hscall(hs_sat26DdGd, hs_sat26DdGc);
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DdGe, hs_sat26DdGb);
                        };
                        var hs_sat26DdGg = new $hs.Thunk();
                        hs_sat26DdGg.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("0.\x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DdGg, hs_sat26DdGf);
                    }
                case 2:
                    var hs_dec26Dd5T = hs_wild226DdFK.data[0];
                    var hs_sat26DdGi = new $hs.Data(1);
                    hs_sat26DdGi.data = [0];
                    var hs_wild326DdGh = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_e26Dd3g, hs_sat26DdGi);
                    switch (hs_wild326DdGh.tag) {
                    case 1:
                        var hs_ds126Dd60 = new $hs.Thunk();
                        hs_ds126Dd60.evaluateOnce = function () {
                            var hs_sat26DdGm = new $hs.Thunk();
                            hs_sat26DdGm.evaluateOnce = function () {
                                var hs_sat26DdGl = new $hs.Thunk();
                                hs_sat26DdGl.evaluateOnce = function () {
                                    var hs_sat26DdGj = new $hs.Data(1);
                                    hs_sat26DdGj.data = [0];
                                    var hs_sat26DdGk = new $hs.Thunk();
                                    hs_sat26DdGk.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_e26Dd3g);
                                    };
                                    return $hs.modules.GHCziList.hs_replicate.hscall(hs_sat26DdGk, hs_sat26DdGj);
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DdGl, hs_is26Dd3k);
                            };
                            var hs_sat26DdGo = new $hs.Thunk();
                            hs_sat26DdGo.evaluateOnce = function () {
                                var hs_sat26DdGn = new $hs.Data(1);
                                hs_sat26DdGn.data = [0];
                                return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_dec26Dd5T, hs_sat26DdGn);
                            };
                            return $hs.modules.GHCziFloat.hs_roundTo.hscall(hs_base26Dd33, hs_sat26DdGo, hs_sat26DdGm);
                        };
                        var hs_ds226Dd62 = new $hs.Thunk();
                        hs_ds226Dd62.evaluateOnce = function () {
                            return $hs.modules.ControlziExceptionziBase.hs_irrefutPatError.hscall("../../ghc-7.0.2/libraries/base/GHC/Float.lhs:544:11-64|d : ds'\x00");
                        };
                        var hs_ds326Dd6m = new $hs.Thunk();
                        hs_ds326Dd6m.evaluateOnce = function () {
                            var hs_sat26DdGA = new $hs.Thunk();
                            hs_sat26DdGA.evaluateOnce = function () {
                                var hs_sat26DdGq = new $hs.Data(1);
                                hs_sat26DdGq.data = [0];
                                var hs_sat26DdGv = new $hs.Thunk();
                                hs_sat26DdGv.evaluateOnce = function () {
                                    var hs_wild426DdGp = hs_ds126Dd60;
                                    if (hs_ds126Dd60.notEvaluated) {
                                        hs_wild426DdGp = hs_ds126Dd60.hscall();
                                    }
                                    var hs_ei26Dd67 = hs_wild426DdGp.data[0];
                                    if (hs_ei26Dd67.notEvaluated) {
                                        return hs_ei26Dd67.hscall();
                                    } else {
                                        return hs_ei26Dd67;
                                    }
                                };
                                var hs_wild426DdGu = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DdGv, hs_sat26DdGq);
                                switch (hs_wild426DdGu.tag) {
                                case 1:
                                    var hs_sat26DdGw = new $hs.Thunk();
                                    hs_sat26DdGw.evaluateOnce = function () {
                                        var hs_wild526DdGt = hs_ds126Dd60;
                                        if (hs_ds126Dd60.notEvaluated) {
                                            hs_wild526DdGt = hs_ds126Dd60.hscall();
                                        }
                                        var hs_iszq26Dd6f = hs_wild526DdGt.data[1];
                                        if (hs_iszq26Dd6f.notEvaluated) {
                                            return hs_iszq26Dd6f.hscall();
                                        } else {
                                            return hs_iszq26Dd6f;
                                        }
                                    };
                                    var hs_sat26DdGx = new $hs.Data(1);
                                    hs_sat26DdGx.data = [0];
                                    var $res = new $hs.Data(2);
                                    $res.data = [hs_sat26DdGx, hs_sat26DdGw];
                                    return $res;
                                case 2:
                                    var hs_wild526DdGz = hs_ds126Dd60;
                                    if (hs_ds126Dd60.notEvaluated) {
                                        hs_wild526DdGz = hs_ds126Dd60.hscall();
                                    }
                                    var hs_iszq26Dd6k = hs_wild526DdGz.data[1];
                                    if (hs_iszq26Dd6k.notEvaluated) {
                                        return hs_iszq26Dd6k.hscall();
                                    } else {
                                        return hs_iszq26Dd6k;
                                    }
                                }
                            };
                            return $hs.modules.GHCziBase.hs_map.hscall($hs.modules.GHCziShow.hs_intToDigit, hs_sat26DdGA);
                        };
                        var hs_dszq26Dd6s = new $hs.Thunk();
                        hs_dszq26Dd6s.evaluateOnce = function () {
                            var hs_wild426DdGB = hs_ds326Dd6m;
                            if (hs_ds326Dd6m.notEvaluated) {
                                hs_wild426DdGB = hs_ds326Dd6m.hscall();
                            }
                            switch (hs_wild426DdGB.tag) {
                            case 1:
                                if (hs_ds226Dd62.notEvaluated) {
                                    return hs_ds226Dd62.hscall();
                                } else {
                                    return hs_ds226Dd62;
                                }
                            case 2:
                                var hs_dszq126Dd6r = hs_wild426DdGB.data[1];
                                if (hs_dszq126Dd6r.notEvaluated) {
                                    return hs_dszq126Dd6r.hscall();
                                } else {
                                    return hs_dszq126Dd6r;
                                }
                            }
                        };
                        var hs_sat26DdGG = new $hs.Thunk();
                        hs_sat26DdGG.evaluateOnce = function () {
                            var hs_wild426DdGD = $hs.modules.GHCziList.hs_null.hscall(hs_dszq26Dd6s);
                            switch (hs_wild426DdGD.tag) {
                            case 1:
                                var hs_sat26DdGE = new $hs.Data(1);
                                hs_sat26DdGE.data = ["."];
                                var $res = new $hs.Data(2);
                                $res.data = [hs_sat26DdGE, hs_dszq26Dd6s];
                                return $res;
                            case 2:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            }
                        };
                        var hs_sat26DdGI = new $hs.Thunk();
                        hs_sat26DdGI.evaluateOnce = function () {
                            var hs_wild426DdGF = hs_ds326Dd6m;
                            if (hs_ds326Dd6m.notEvaluated) {
                                hs_wild426DdGF = hs_ds326Dd6m.hscall();
                            }
                            switch (hs_wild426DdGF.tag) {
                            case 1:
                                if (hs_ds226Dd62.notEvaluated) {
                                    return hs_ds226Dd62.hscall();
                                } else {
                                    return hs_ds226Dd62;
                                }
                            case 2:
                                var hs_d26Dd6w = hs_wild426DdGF.data[0];
                                if (hs_d26Dd6w.notEvaluated) {
                                    return hs_d26Dd6w.hscall();
                                } else {
                                    return hs_d26Dd6w;
                                }
                            }
                        };
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26DdGI, hs_sat26DdGG];
                        return $res;
                    case 2:
                        var hs_ds126Dd6F = new $hs.Thunk();
                        hs_ds126Dd6F.evaluateOnce = function () {
                            var hs_sat26DdGL = new $hs.Thunk();
                            hs_sat26DdGL.evaluateOnce = function () {
                                var hs_sat26DdGK = new $hs.Thunk();
                                hs_sat26DdGK.evaluateOnce = function () {
                                    var hs_sat26DdGJ = new $hs.Data(1);
                                    hs_sat26DdGJ.data = [0];
                                    return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_dec26Dd5T, hs_sat26DdGJ);
                                };
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdGK, hs_e26Dd3g);
                            };
                            return $hs.modules.GHCziFloat.hs_roundTo.hscall(hs_base26Dd33, hs_sat26DdGL, hs_is26Dd3k);
                        };
                        var hs_ds226Dd6T = new $hs.Thunk();
                        hs_ds226Dd6T.evaluateOnce = function () {
                            var hs_sat26DdGQ = new $hs.Thunk();
                            hs_sat26DdGQ.evaluateOnce = function () {
                                var hs_sat26DdGO = new $hs.Thunk();
                                hs_sat26DdGO.evaluateOnce = function () {
                                    var hs_wild426DdGN = hs_ds126Dd6F;
                                    if (hs_ds126Dd6F.notEvaluated) {
                                        hs_wild426DdGN = hs_ds126Dd6F.hscall();
                                    }
                                    var hs_iszq26Dd6Q = hs_wild426DdGN.data[1];
                                    if (hs_iszq26Dd6Q.notEvaluated) {
                                        return hs_iszq26Dd6Q.hscall();
                                    } else {
                                        return hs_iszq26Dd6Q;
                                    }
                                };
                                return $hs.modules.GHCziBase.hs_map.hscall($hs.modules.GHCziShow.hs_intToDigit, hs_sat26DdGO);
                            };
                            var hs_sat26DdGT = new $hs.Thunk();
                            hs_sat26DdGT.evaluateOnce = function () {
                                var hs_sat26DdGS = new $hs.Thunk();
                                hs_sat26DdGS.evaluateOnce = function () {
                                    var hs_wild426DdGP = hs_ds126Dd6F;
                                    if (hs_ds126Dd6F.notEvaluated) {
                                        hs_wild426DdGP = hs_ds126Dd6F.hscall();
                                    }
                                    var hs_ei26Dd6K = hs_wild426DdGP.data[0];
                                    if (hs_ei26Dd6K.notEvaluated) {
                                        return hs_ei26Dd6K.hscall();
                                    } else {
                                        return hs_ei26Dd6K;
                                    }
                                };
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_e26Dd3g, hs_sat26DdGS);
                            };
                            return $hs.modules.GHCziList.hs_splitAt.hscall(hs_sat26DdGT, hs_sat26DdGQ);
                        };
                        var hs_rs26Dd6Z = new $hs.Thunk();
                        hs_rs26Dd6Z.evaluateOnce = function () {
                            var hs_wild426DdGV = hs_ds226Dd6T;
                            if (hs_ds226Dd6T.notEvaluated) {
                                hs_wild426DdGV = hs_ds226Dd6T.hscall();
                            }
                            var hs_rs126Dd6Y = hs_wild426DdGV.data[1];
                            if (hs_rs126Dd6Y.notEvaluated) {
                                return hs_rs126Dd6Y.hscall();
                            } else {
                                return hs_rs126Dd6Y;
                            }
                        };
                        var hs_sat26DdGZ = new $hs.Thunk();
                        hs_sat26DdGZ.evaluateOnce = function () {
                            var hs_wild426DdGW = $hs.modules.GHCziList.hs_null.hscall(hs_rs26Dd6Z);
                            switch (hs_wild426DdGW.tag) {
                            case 1:
                                var hs_sat26DdGX = new $hs.Data(1);
                                hs_sat26DdGX.data = ["."];
                                var $res = new $hs.Data(2);
                                $res.data = [hs_sat26DdGX, hs_rs26Dd6Z];
                                return $res;
                            case 2:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            }
                        };
                        var hs_sat26DdH4 = new $hs.Thunk();
                        hs_sat26DdH4.evaluateOnce = function () {
                            var hs_wild426DdGY = hs_ds226Dd6T;
                            if (hs_ds226Dd6T.notEvaluated) {
                                hs_wild426DdGY = hs_ds226Dd6T.hscall();
                            }
                            var hs_ls26Dd73 = hs_wild426DdGY.data[0];
                            var hs_wild526Dd78 = hs_ls26Dd73;
                            if (hs_ls26Dd73.notEvaluated) {
                                hs_wild526Dd78 = hs_ls26Dd73.hscall();
                            }
                            switch (hs_wild526Dd78.tag) {
                            case 1:
                                var hs_sat26DdH1 = new $hs.Data(1);
                                hs_sat26DdH1.data = ["0"];
                                var $res = new $hs.Data(2);
                                $res.data = [hs_sat26DdH1, $hs.modules.GHCziTypes.hs_ZMZN];
                                return $res;
                            case 2:
                                if (hs_wild526Dd78.notEvaluated) {
                                    return hs_wild526Dd78.hscall();
                                } else {
                                    return hs_wild526Dd78;
                                }
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DdH4, hs_sat26DdGZ);
                    }
                }
            case 3:
                var hs_sat26DdH5 = new $hs.Data(1);
                hs_sat26DdH5.data = [hs_is26Dd3k, hs_e26Dd3g];
                var hs_sat26DdHb = new $hs.Thunk();
                hs_sat26DdHb.evaluateOnce = function () {
                    var hs_sat26DdH7 = new $hs.Thunk();
                    hs_sat26DdH7.evaluateOnce = function () {
                        var hs_sat26DdH6 = new $hs.Data(1);
                        hs_sat26DdH6.data = [7];
                        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_e26Dd3g, hs_sat26DdH6);
                    };
                    var hs_sat26DdHa = new $hs.Thunk();
                    hs_sat26DdHa.evaluateOnce = function () {
                        var hs_sat26DdH8 = new $hs.Data(1);
                        hs_sat26DdH8.data = [0];
                        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_e26Dd3g, hs_sat26DdH8);
                    };
                    var hs_wild226DdH9 = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DdHa, hs_sat26DdH7);
                    switch (hs_wild226DdH9.tag) {
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
                return hs_doFmt26Dd7i.hscall(hs_sat26DdHb, hs_sat26DdH5);
            }
        };
        var hs_wild26DdHd = $hs.modules.GHCziFloat.hs_isNaN.hscall(hs_zddRealFloat26Dd2W, hs_eta226Dd7l);
        switch (hs_wild26DdHd.tag) {
        case 1:
            var hs_wild126DdHc = $hs.modules.GHCziFloat.hs_isInfinite.hscall(hs_zddRealFloat26Dd2W, hs_eta226Dd7l);
            switch (hs_wild126DdHc.tag) {
            case 1:
                var hs_sat26DdHe = new $hs.Thunk();
                hs_sat26DdHe.evaluateOnce = function () {
                    return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall(hs_zddRealFloat26Dd2W, hs_eta226Dd7l);
                };
                var hs_sat26DdHj = new $hs.Thunk();
                hs_sat26DdHj.evaluateOnce = function () {
                    var hs_sat26DdHg = new $hs.Thunk();
                    hs_sat26DdHg.evaluateOnce = function () {
                        var hs_sat26DdHf = new $hs.Thunk();
                        hs_sat26DdHf.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326Dd31, hs_sat26DdHf);
                    };
                    var hs_sat26DdHh = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal1226Dd2Z);
                    return $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26DdHh, hs_eta226Dd7l, hs_sat26DdHg);
                };
                var hs_wild226DdHi = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DdHj, hs_sat26DdHe);
                switch (hs_wild226DdHi.tag) {
                case 1:
                    var hs_sat26DdHl = new $hs.Thunk();
                    hs_sat26DdHl.evaluateOnce = function () {
                        var hs_sat26DdHk = new $hs.Thunk();
                        hs_sat26DdHk.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_base26Dd33);
                        };
                        return $hs.modules.GHCziFloat.hs_floatToDigits.hscall(hs_zddRealFloat26Dd2W, hs_sat26DdHk, hs_eta226Dd7l);
                    };
                    return hs_doFmt26Dd7i.hscall(hs_eta26Dd7u, hs_sat26DdHl);
                case 2:
                    var hs_sat26DdHp = new $hs.Thunk();
                    hs_sat26DdHp.evaluateOnce = function () {
                        var hs_sat26DdHo = new $hs.Thunk();
                        hs_sat26DdHo.evaluateOnce = function () {
                            var hs_sat26DdHm = new $hs.Thunk();
                            hs_sat26DdHm.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum1326Dd31, hs_eta226Dd7l);
                            };
                            var hs_sat26DdHn = new $hs.Thunk();
                            hs_sat26DdHn.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_base26Dd33);
                            };
                            return $hs.modules.GHCziFloat.hs_floatToDigits.hscall(hs_zddRealFloat26Dd2W, hs_sat26DdHn, hs_sat26DdHm);
                        };
                        return hs_doFmt26Dd7i.hscall(hs_eta26Dd7u, hs_sat26DdHo);
                    };
                    var hs_sat26DdHq = new $hs.Data(1);
                    hs_sat26DdHq.data = ["-"];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26DdHq, hs_sat26DdHp];
                    return $res;
                }
            case 2:
                var hs_sat26DdHu = new $hs.Thunk();
                hs_sat26DdHu.evaluateOnce = function () {
                    var hs_sat26DdHr = new $hs.Thunk();
                    hs_sat26DdHr.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326Dd31, hs_sat26DdHr);
                };
                var hs_sat26DdHt = $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal1226Dd2Z);
                var hs_wild226DdHs = $hs.modules.GHCziClasses.hs_zl.hscall(hs_sat26DdHt, hs_eta226Dd7l, hs_sat26DdHu);
                switch (hs_wild226DdHs.tag) {
                case 1:
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Infinity\x00");
                case 2:
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("-Infinity\x00");
                }
            }
        case 2:
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("NaN\x00");
        }
    };
    hs_zdcround125uOlb.evaluate = function (hs_x26Dd7H) {
        var hs_wild26DdHv = $hs.modules.GHCziReal.hs_properFraction.hscall($hs.modules.GHCziFloat.hs_zdfRealFracFloat, $hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_x26Dd7H);
        var hs_n26Dd7P = hs_wild26DdHv.data[0];
        var hs_r26Dd7M = hs_wild26DdHv.data[1];
        var hs_m26Dd7U = new $hs.Thunk();
        hs_m26Dd7U.evaluateOnce = function () {
            var hs_sat26DdHx = new $hs.Data(1);
            hs_sat26DdHx.data = [0 % 1];
            var hs_wild126DdHw = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat, hs_r26Dd7M, hs_sat26DdHx);
            switch (hs_wild126DdHw.tag) {
            case 1:
                var hs_sat26DdHz = new $hs.Thunk();
                hs_sat26DdHz.evaluateOnce = function () {
                    var hs_sat26DdHy = new $hs.Thunk();
                    hs_sat26DdHy.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum425uOk1, hs_sat26DdHy);
                };
                return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum425uOk1, hs_n26Dd7P, hs_sat26DdHz);
            case 2:
                var hs_sat26DdHB = new $hs.Thunk();
                hs_sat26DdHB.evaluateOnce = function () {
                    var hs_sat26DdHA = new $hs.Thunk();
                    hs_sat26DdHA.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum425uOk1, hs_sat26DdHA);
                };
                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum425uOk1, hs_n26Dd7P, hs_sat26DdHB);
            }
        };
        var hs_sat26DdHC = new $hs.Data(1);
        hs_sat26DdHC.data = [0 % 1];
        var hs_sat26DdHG = new $hs.Thunk();
        hs_sat26DdHG.evaluateOnce = function () {
            var hs_sat26DdHD = new $hs.Data(1);
            hs_sat26DdHD.data = [1 % 2];
            var hs_sat26DdHE = new $hs.Thunk();
            hs_sat26DdHE.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_r26Dd7M);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26DdHE, hs_sat26DdHD);
        };
        var hs_wild126DdHF = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat, hs_sat26DdHG, hs_sat26DdHC);
        switch (hs_wild126DdHF.tag) {
        case 1:
            if (hs_n26Dd7P.notEvaluated) {
                return hs_n26Dd7P.hscall();
            } else {
                return hs_n26Dd7P;
            }
        case 2:
            var hs_wild226DdHH = $hs.modules.GHCziReal.hs_even.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_n26Dd7P);
            switch (hs_wild226DdHH.tag) {
            case 1:
                if (hs_m26Dd7U.notEvaluated) {
                    return hs_m26Dd7U.hscall();
                } else {
                    return hs_m26Dd7U;
                }
            case 2:
                if (hs_n26Dd7P.notEvaluated) {
                    return hs_n26Dd7P.hscall();
                } else {
                    return hs_n26Dd7P;
                }
            }
        case 3:
            if (hs_m26Dd7U.notEvaluated) {
                return hs_m26Dd7U.hscall();
            } else {
                return hs_m26Dd7U;
            }
        }
    };
    hs_zdcround225uOld.evaluate = function (hs_x26Dd82) {
        var hs_wild26DdHI = $hs.modules.GHCziReal.hs_properFraction.hscall($hs.modules.GHCziFloat.hs_zdfRealFracFloat, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_x26Dd82);
        var hs_n26Dd8a = hs_wild26DdHI.data[0];
        var hs_r26Dd87 = hs_wild26DdHI.data[1];
        var hs_m26Dd8f = new $hs.Thunk();
        hs_m26Dd8f.evaluateOnce = function () {
            var hs_sat26DdHK = new $hs.Data(1);
            hs_sat26DdHK.data = [0 % 1];
            var hs_wild126DdHJ = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat, hs_r26Dd87, hs_sat26DdHK);
            switch (hs_wild126DdHJ.tag) {
            case 1:
                var hs_sat26DdHM = new $hs.Thunk();
                hs_sat26DdHM.evaluateOnce = function () {
                    var hs_sat26DdHL = new $hs.Thunk();
                    hs_sat26DdHL.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum825uOkh, hs_sat26DdHL);
                };
                return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum825uOkh, hs_n26Dd8a, hs_sat26DdHM);
            case 2:
                var hs_sat26DdHO = new $hs.Thunk();
                hs_sat26DdHO.evaluateOnce = function () {
                    var hs_sat26DdHN = new $hs.Thunk();
                    hs_sat26DdHN.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum825uOkh, hs_sat26DdHN);
                };
                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum825uOkh, hs_n26Dd8a, hs_sat26DdHO);
            }
        };
        var hs_sat26DdHP = new $hs.Data(1);
        hs_sat26DdHP.data = [0 % 1];
        var hs_sat26DdHT = new $hs.Thunk();
        hs_sat26DdHT.evaluateOnce = function () {
            var hs_sat26DdHQ = new $hs.Data(1);
            hs_sat26DdHQ.data = [1 % 2];
            var hs_sat26DdHR = new $hs.Thunk();
            hs_sat26DdHR.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_r26Dd87);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26DdHR, hs_sat26DdHQ);
        };
        var hs_wild126DdHS = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat, hs_sat26DdHT, hs_sat26DdHP);
        switch (hs_wild126DdHS.tag) {
        case 1:
            if (hs_n26Dd8a.notEvaluated) {
                return hs_n26Dd8a.hscall();
            } else {
                return hs_n26Dd8a;
            }
        case 2:
            var hs_wild226DdHU = $hs.modules.GHCziReal.hs_even.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_n26Dd8a);
            switch (hs_wild226DdHU.tag) {
            case 1:
                if (hs_m26Dd8f.notEvaluated) {
                    return hs_m26Dd8f.hscall();
                } else {
                    return hs_m26Dd8f;
                }
            case 2:
                if (hs_n26Dd8a.notEvaluated) {
                    return hs_n26Dd8a.hscall();
                } else {
                    return hs_n26Dd8a;
                }
            }
        case 3:
            if (hs_m26Dd8f.notEvaluated) {
                return hs_m26Dd8f.hscall();
            } else {
                return hs_m26Dd8f;
            }
        }
    };
    hs_zddRealFrac125uOlf.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_zdp1RealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zddReal925uOlh.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac125uOlf);
    };
    hs_zddNum1025uOlj.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal925uOlh);
    };
    hs_zddFractional225uOll.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2RealFrac.hscall(hs_zddRealFrac125uOlf);
    };
    hs_fromRat125uOln.evaluate = function (hs_ds26Dd8n) {
        var hs_wild26DdHV = hs_ds26Dd8n;
        if (hs_ds26Dd8n.notEvaluated) {
            hs_wild26DdHV = hs_ds26Dd8n.hscall();
        }
        var hs_n26Dd8u = hs_wild26DdHV.data[0];
        var hs_ds126Dd8r = hs_wild26DdHV.data[1];
        var hs_sat26DdHX = new $hs.Thunk();
        hs_sat26DdHX.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_wild126DdHW = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_ds126Dd8r, hs_sat26DdHX);
        switch (hs_wild126DdHW.tag) {
        case 1:
            var hs_sat26DdHZ = new $hs.Thunk();
            hs_sat26DdHZ.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            var hs_wild226DdHY = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26Dd8u, hs_sat26DdHZ);
            switch (hs_wild226DdHY.tag) {
            case 1:
                var hs_sat26DdI1 = new $hs.Thunk();
                hs_sat26DdI1.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_wild326DdI0 = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26Dd8u, hs_sat26DdI1);
                switch (hs_wild326DdI0.tag) {
                case 1:
                    var hs_sat26DdI2 = new $hs.Data(1);
                    hs_sat26DdI2.data = [0];
                    var hs_sat26DdI3 = new $hs.Thunk();
                    hs_sat26DdI3.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_sat26DdI3, hs_sat26DdI2);
                case 2:
                    var hs_sat26DdI5 = new $hs.Thunk();
                    hs_sat26DdI5.evaluateOnce = function () {
                        var hs_sat26DdI4 = new $hs.Thunk();
                        hs_sat26DdI4.evaluateOnce = function () {
                            var hs_tpl26Dd8C = $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_n26Dd8u);
                            var $res = new $hs.Data(1);
                            $res.data = [hs_tpl26Dd8C, hs_ds126Dd8r];
                            return $res;
                        };
                        return $hs.modules.GHCziFloat.hs_fromRatzq.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_sat26DdI4);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum1025uOlj, hs_sat26DdI5);
                }
            case 2:
                var hs_sat26DdI6 = new $hs.Data(1);
                hs_sat26DdI6.data = [hs_n26Dd8u, hs_ds126Dd8r];
                return $hs.modules.GHCziFloat.hs_fromRatzq.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_sat26DdI6);
            }
        case 2:
            var hs_sat26DdI8 = new $hs.Thunk();
            hs_sat26DdI8.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            var hs_wild226DdI7 = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26Dd8u, hs_sat26DdI8);
            switch (hs_wild226DdI7.tag) {
            case 1:
                var hs_sat26DdIa = new $hs.Thunk();
                hs_sat26DdIa.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_wild326DdI9 = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26Dd8u, hs_sat26DdIa);
                switch (hs_wild326DdI9.tag) {
                case 1:
                    var hs_sat26DdIc = new $hs.Thunk();
                    hs_sat26DdIc.evaluateOnce = function () {
                        var hs_sat26DdIb = new $hs.Thunk();
                        hs_sat26DdIb.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1025uOlj, hs_sat26DdIb);
                    };
                    var hs_sat26DdIe = new $hs.Thunk();
                    hs_sat26DdIe.evaluateOnce = function () {
                        var hs_sat26DdId = new $hs.Thunk();
                        hs_sat26DdId.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1025uOlj, hs_sat26DdId);
                    };
                    return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional225uOll, hs_sat26DdIe, hs_sat26DdIc);
                case 2:
                    var hs_sat26DdIj = new $hs.Thunk();
                    hs_sat26DdIj.evaluateOnce = function () {
                        var hs_sat26DdIg = new $hs.Thunk();
                        hs_sat26DdIg.evaluateOnce = function () {
                            var hs_sat26DdIf = new $hs.Thunk();
                            hs_sat26DdIf.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1025uOlj, hs_sat26DdIf);
                        };
                        var hs_sat26DdIi = new $hs.Thunk();
                        hs_sat26DdIi.evaluateOnce = function () {
                            var hs_sat26DdIh = new $hs.Thunk();
                            hs_sat26DdIh.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1025uOlj, hs_sat26DdIh);
                        };
                        return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional225uOll, hs_sat26DdIi, hs_sat26DdIg);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum1025uOlj, hs_sat26DdIj);
                }
            case 2:
                var hs_sat26DdIl = new $hs.Thunk();
                hs_sat26DdIl.evaluateOnce = function () {
                    var hs_sat26DdIk = new $hs.Thunk();
                    hs_sat26DdIk.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1025uOlj, hs_sat26DdIk);
                };
                var hs_sat26DdIn = new $hs.Thunk();
                hs_sat26DdIn.evaluateOnce = function () {
                    var hs_sat26DdIm = new $hs.Thunk();
                    hs_sat26DdIm.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1025uOlj, hs_sat26DdIm);
                };
                return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional225uOll, hs_sat26DdIn, hs_sat26DdIl);
            }
        }
    };
    hs_zdcproperFraction125uOlp.evaluate = function (hs_ds26Dd8Y) {
        var hs_wild26DdIp = hs_ds26Dd8Y;
        if (hs_ds26Dd8Y.notEvaluated) {
            hs_wild26DdIp = hs_ds26Dd8Y.hscall();
        }
        var hs_xzh26Dd91 = hs_wild26DdIp.data[0];
        throw "primitive operation decodeFloat_Int#. Not implemeted yet.";
        var hs_mzh26Dd99 = hs_wild126DdIo[0];
        var hs_nzh26Dd96 = hs_wild126DdIo[1];
        var hs_n26Dd97 = new $hs.Data(1);
        hs_n26Dd97.data = [hs_nzh26Dd96];
        var hs_m26Dd9a = new $hs.Data(1);
        hs_m26Dd9a.data = [hs_mzh26Dd99];
        var hs_sat26DdIr = new $hs.Data(1);
        hs_sat26DdIr.data = [0];
        var hs_wild226DdIq = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_n26Dd97, hs_sat26DdIr);
        switch (hs_wild226DdIq.tag) {
        case 1:
            var hs_i26Dd9k = new $hs.Thunk();
            hs_i26Dd9k.evaluateOnce = function () {
                var hs_sat26DdIt = new $hs.Data(1);
                hs_sat26DdIt.data = [0];
                var hs_wild326DdIs = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_m26Dd9a, hs_sat26DdIt);
                switch (hs_wild326DdIs.tag) {
                case 1:
                    var hs_sat26DdIw = new $hs.Thunk();
                    hs_sat26DdIw.evaluateOnce = function () {
                        var hs_sat26DdIu = new $hs.Thunk();
                        hs_sat26DdIu.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26Dd97);
                        };
                        var hs_sat26DdIv = new $hs.Thunk();
                        hs_sat26DdIv.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_m26Dd9a);
                        };
                        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26DdIv, hs_sat26DdIu);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdIw);
                case 2:
                    var hs_sat26DdIx = new $hs.Thunk();
                    hs_sat26DdIx.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26Dd97);
                    };
                    return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_m26Dd9a, hs_sat26DdIx);
                }
            };
            var hs_sat26DdIC = new $hs.Thunk();
            hs_sat26DdIC.evaluateOnce = function () {
                var hs_sat26DdIB = new $hs.Thunk();
                hs_sat26DdIB.evaluateOnce = function () {
                    var hs_sat26DdIA = new $hs.Thunk();
                    hs_sat26DdIA.evaluateOnce = function () {
                        var hs_sat26DdIz = new $hs.Thunk();
                        hs_sat26DdIz.evaluateOnce = function () {
                            var hs_sat26DdIy = new $hs.Thunk();
                            hs_sat26DdIy.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26Dd97);
                            };
                            return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_i26Dd9k, hs_sat26DdIy);
                        };
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_m26Dd9a, hs_sat26DdIz);
                    };
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DdIA);
                };
                return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_sat26DdIB, hs_n26Dd97);
            };
            var hs_sat26DdID = new $hs.Thunk();
            hs_sat26DdID.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_zddNum325uOjX, hs_i26Dd9k);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DdID, hs_sat26DdIC];
            return $res;
        case 2:
            var hs_sat26DdIE = new $hs.Data(1);
            hs_sat26DdIE.data = [0 % 1];
            var hs_sat26DdIJ = new $hs.Thunk();
            hs_sat26DdIJ.evaluateOnce = function () {
                var hs_sat26DdIH = new $hs.Thunk();
                hs_sat26DdIH.evaluateOnce = function () {
                    var hs_sat26DdIG = new $hs.Thunk();
                    hs_sat26DdIG.evaluateOnce = function () {
                        var hs_sat26DdIF = new $hs.Thunk();
                        hs_sat26DdIF.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum325uOjX, hs_sat26DdIF);
                    };
                    return $hs.modules.GHCziReal.hs_zc.hscall(hs_zddNum325uOjX, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26DdIG, hs_n26Dd97);
                };
                var hs_sat26DdII = new $hs.Thunk();
                hs_sat26DdII.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_zddNum325uOjX, hs_m26Dd9a);
                };
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum325uOjX, hs_sat26DdII, hs_sat26DdIH);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DdIJ, hs_sat26DdIE];
            return $res;
        }
    };
    hs_zdcproperFraction225uOlr.evaluate = function (hs_ds26Dd9y) {
        var hs_wild26DdIL = hs_ds26Dd9y;
        if (hs_ds26Dd9y.notEvaluated) {
            hs_wild26DdIL = hs_ds26Dd9y.hscall();
        }
        var hs_xzh26Dd9B = hs_wild26DdIL.data[0];
        throw "primitive operation decodeFloat_Int#. Not implemeted yet.";
        var hs_mzh26Dd9J = hs_wild126DdIK[0];
        var hs_nzh26Dd9G = hs_wild126DdIK[1];
        var hs_n26Dd9H = new $hs.Data(1);
        hs_n26Dd9H.data = [hs_nzh26Dd9G];
        var hs_m26Dd9K = new $hs.Data(1);
        hs_m26Dd9K.data = [hs_mzh26Dd9J];
        var hs_sat26DdIN = new $hs.Data(1);
        hs_sat26DdIN.data = [0];
        var hs_wild226DdIM = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_n26Dd9H, hs_sat26DdIN);
        switch (hs_wild226DdIM.tag) {
        case 1:
            var hs_i26Dd9U = new $hs.Thunk();
            hs_i26Dd9U.evaluateOnce = function () {
                var hs_sat26DdIP = new $hs.Data(1);
                hs_sat26DdIP.data = [0];
                var hs_wild326DdIO = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_m26Dd9K, hs_sat26DdIP);
                switch (hs_wild326DdIO.tag) {
                case 1:
                    var hs_sat26DdIS = new $hs.Thunk();
                    hs_sat26DdIS.evaluateOnce = function () {
                        var hs_sat26DdIQ = new $hs.Thunk();
                        hs_sat26DdIQ.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26Dd9H);
                        };
                        var hs_sat26DdIR = new $hs.Thunk();
                        hs_sat26DdIR.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_m26Dd9K);
                        };
                        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26DdIR, hs_sat26DdIQ);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdIS);
                case 2:
                    var hs_sat26DdIT = new $hs.Thunk();
                    hs_sat26DdIT.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26Dd9H);
                    };
                    return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_m26Dd9K, hs_sat26DdIT);
                }
            };
            var hs_sat26DdIY = new $hs.Thunk();
            hs_sat26DdIY.evaluateOnce = function () {
                var hs_sat26DdIX = new $hs.Thunk();
                hs_sat26DdIX.evaluateOnce = function () {
                    var hs_sat26DdIW = new $hs.Thunk();
                    hs_sat26DdIW.evaluateOnce = function () {
                        var hs_sat26DdIV = new $hs.Thunk();
                        hs_sat26DdIV.evaluateOnce = function () {
                            var hs_sat26DdIU = new $hs.Thunk();
                            hs_sat26DdIU.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26Dd9H);
                            };
                            return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_i26Dd9U, hs_sat26DdIU);
                        };
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_m26Dd9K, hs_sat26DdIV);
                    };
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DdIW);
                };
                return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_sat26DdIX, hs_n26Dd9H);
            };
            var hs_sat26DdIZ = new $hs.Thunk();
            hs_sat26DdIZ.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_zddNum725uOkd, hs_i26Dd9U);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DdIZ, hs_sat26DdIY];
            return $res;
        case 2:
            var hs_sat26DdJ0 = new $hs.Data(1);
            hs_sat26DdJ0.data = [0 % 1];
            var hs_sat26DdJ5 = new $hs.Thunk();
            hs_sat26DdJ5.evaluateOnce = function () {
                var hs_sat26DdJ3 = new $hs.Thunk();
                hs_sat26DdJ3.evaluateOnce = function () {
                    var hs_sat26DdJ2 = new $hs.Thunk();
                    hs_sat26DdJ2.evaluateOnce = function () {
                        var hs_sat26DdJ1 = new $hs.Thunk();
                        hs_sat26DdJ1.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum725uOkd, hs_sat26DdJ1);
                    };
                    return $hs.modules.GHCziReal.hs_zc.hscall(hs_zddNum725uOkd, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26DdJ2, hs_n26Dd9H);
                };
                var hs_sat26DdJ4 = new $hs.Thunk();
                hs_sat26DdJ4.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_zddNum725uOkd, hs_m26Dd9K);
                };
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum725uOkd, hs_sat26DdJ4, hs_sat26DdJ3);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DdJ5, hs_sat26DdJ0];
            return $res;
        }
    };
    this.hs_zdfShowDouble.data = [hs_zdcshowsPrec125uOlZ, hs_zdcshow125uOlv, hs_zdcshowList125uOlt];
    hs_zdcshowList125uOlt.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DdyC);
    };
    hs_zdcshow125uOlv.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziFloat.hs_zdfShowDouble);
    };
    this.hs_zdfNumDouble.data = [$hs.modules.GHCziClasses.hs_zdfEqDouble, $hs.modules.GHCziFloat.hs_zdfShowDouble, hs_zdczp125uOdw, hs_zdczt125uOdq, hs_zdczm125uOdk, hs_zdcnegate125uOdg, hs_zdcabs125uOda, hs_zdcsignum125uOlx, hs_zdcfromInteger125uOd4];
    hs_zdcsignum125uOlx.evaluate = function (hs_x26Ddaa) {
        var hs_sat26DdJ7 = new $hs.Data(1);
        hs_sat26DdJ7.data = [0 % 1];
        var hs_wild26DdJ6 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqDouble, hs_x26Ddaa, hs_sat26DdJ7);
        switch (hs_wild26DdJ6.tag) {
        case 1:
            var hs_sat26DdJ9 = new $hs.Data(1);
            hs_sat26DdJ9.data = [0 % 1];
            var hs_wild126DdJ8 = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_x26Ddaa, hs_sat26DdJ9);
            switch (hs_wild126DdJ8.tag) {
            case 1:
                var hs_sat26DdJa = new $hs.Data(1);
                hs_sat26DdJa.data = [1 % 1];
                return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26DdJa);
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
    this.hs_zdfRealDouble.data = [$hs.modules.GHCziFloat.hs_zdfNumDouble, $hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_zdctoRational125uOlX];
    this.hs_zdfFractionalDouble.data = [$hs.modules.GHCziFloat.hs_zdfNumDouble, hs_zdczs125uOdC, hs_zdcrecip125uOlP, hs_zdcfromRational125uOlN];
    this.hs_zdfFloatingDouble.data = [$hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_zdcpi125uOeA, hs_zdcexp125uOew, hs_zdcsqrt125uOes, hs_zdclog125uOeo, hs_zdcztzt125uOei, hs_zdclogBase125uOlL, hs_zdcsin125uOee, hs_zdctan125uOea, hs_zdccos125uOe6, hs_zdcasin125uOe2, hs_zdcatan125uOdY, hs_zdcacos125uOdU, hs_zdcsinh125uOdQ, hs_zdctanh125uOdM, hs_zdccosh125uOdI, hs_zdcasinh125uOlJ, hs_zdcatanh125uOlH, hs_zdcacosh125uOlF];
    this.hs_zdfRealFracDouble.data = [$hs.modules.GHCziFloat.hs_zdfRealDouble, $hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_zdcproperFraction325uOm3, hs_zdctruncate125uOlD, hs_zdcround325uOm1, hs_zdcceiling125uOlB, hs_zdcfloor125uOlz];
    hs_zdcfloor125uOlz.evaluate = function (hs_eta26Ddaj, hs_eta126Ddan) {
        var hs_zddReal1226Ddak = new $hs.Thunk();
        hs_zddReal1226Ddak.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_eta26Ddaj);
        };
        var hs_zddNum1326Ddam = new $hs.Thunk();
        hs_zddNum1326Ddam.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1226Ddak);
        };
        var hs_wild26DdJb = $hs.modules.GHCziReal.hs_properFraction.hscall($hs.modules.GHCziFloat.hs_zdfRealFracDouble, hs_eta26Ddaj, hs_eta126Ddan);
        var hs_n26Ddau = hs_wild26DdJb.data[0];
        var hs_r26Ddar = hs_wild26DdJb.data[1];
        var hs_sat26DdJd = new $hs.Data(1);
        hs_sat26DdJd.data = [0 % 1];
        var hs_wild126DdJc = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_r26Ddar, hs_sat26DdJd);
        switch (hs_wild126DdJc.tag) {
        case 1:
            if (hs_n26Ddau.notEvaluated) {
                return hs_n26Ddau.hscall();
            } else {
                return hs_n26Ddau;
            }
        case 2:
            var hs_sat26DdJf = new $hs.Thunk();
            hs_sat26DdJf.evaluateOnce = function () {
                var hs_sat26DdJe = new $hs.Thunk();
                hs_sat26DdJe.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326Ddam, hs_sat26DdJe);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum1326Ddam, hs_n26Ddau, hs_sat26DdJf);
        }
    };
    hs_zdcceiling125uOlB.evaluate = function (hs_eta26DdaA, hs_eta126DdaE) {
        var hs_zddReal1226DdaB = new $hs.Thunk();
        hs_zddReal1226DdaB.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_eta26DdaA);
        };
        var hs_zddNum1326DdaD = new $hs.Thunk();
        hs_zddNum1326DdaD.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1226DdaB);
        };
        var hs_wild26DdJg = $hs.modules.GHCziReal.hs_properFraction.hscall($hs.modules.GHCziFloat.hs_zdfRealFracDouble, hs_eta26DdaA, hs_eta126DdaE);
        var hs_n26DdaL = hs_wild26DdJg.data[0];
        var hs_r26DdaI = hs_wild26DdJg.data[1];
        var hs_sat26DdJi = new $hs.Data(1);
        hs_sat26DdJi.data = [0 % 1];
        var hs_wild126DdJh = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_r26DdaI, hs_sat26DdJi);
        switch (hs_wild126DdJh.tag) {
        case 1:
            if (hs_n26DdaL.notEvaluated) {
                return hs_n26DdaL.hscall();
            } else {
                return hs_n26DdaL;
            }
        case 2:
            var hs_sat26DdJk = new $hs.Thunk();
            hs_sat26DdJk.evaluateOnce = function () {
                var hs_sat26DdJj = new $hs.Thunk();
                hs_sat26DdJj.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DdaD, hs_sat26DdJj);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum1326DdaD, hs_n26DdaL, hs_sat26DdJk);
        }
    };
    hs_zdctruncate125uOlD.evaluate = function (hs_eta26DdaQ, hs_x26DdaR) {
        var hs_wild26DdJl = $hs.modules.GHCziReal.hs_properFraction.hscall($hs.modules.GHCziFloat.hs_zdfRealFracDouble, hs_eta26DdaQ, hs_x26DdaR);
        var hs_n26DdaV = hs_wild26DdJl.data[0];
        if (hs_n26DdaV.notEvaluated) {
            return hs_n26DdaV.hscall();
        } else {
            return hs_n26DdaV;
        }
    };
    this.hs_zdfRealFloatDouble.data = [$hs.modules.GHCziFloat.hs_zdfRealFracDouble, $hs.modules.GHCziFloat.hs_zdfFloatingDouble, hs_zdcfloatRadix125uOgd, hs_zdcfloatDigits125uOg9, hs_zdcfloatRange125uOg2, hs_zdcdecodeFloat125uOfP, hs_zdcencodeFloat125uOfE, hs_zdcexponent125uOlV, hs_zdcsignificand125uOlT, hs_zdcscaleFloat125uOlR, hs_zdcisNaN125uOfp, hs_zdcisInfinite125uOfa, hs_zdcisDenormalizzed125uOeV, hs_zdcisNegativeZZero125uOeG, hs_zdcisIEEE125uOeC, hs_zdcatan325uOmj];
    hs_zdcacosh125uOlF.evaluate = function (hs_x26DdaX) {
        var hs_sat26DdJw = new $hs.Thunk();
        hs_sat26DdJw.evaluateOnce = function () {
            var hs_sat26DdJv = new $hs.Thunk();
            hs_sat26DdJv.evaluateOnce = function () {
                var hs_sat26DdJs = new $hs.Thunk();
                hs_sat26DdJs.evaluateOnce = function () {
                    var hs_sat26DdJr = new $hs.Thunk();
                    hs_sat26DdJr.evaluateOnce = function () {
                        var hs_sat26DdJo = new $hs.Thunk();
                        hs_sat26DdJo.evaluateOnce = function () {
                            var hs_sat26DdJn = new $hs.Data(1);
                            hs_sat26DdJn.data = [1 % 1];
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_x26DdaX, hs_sat26DdJn);
                        };
                        var hs_sat26DdJq = new $hs.Thunk();
                        hs_sat26DdJq.evaluateOnce = function () {
                            var hs_sat26DdJp = new $hs.Data(1);
                            hs_sat26DdJp.data = [1 % 1];
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_x26DdaX, hs_sat26DdJp);
                        };
                        return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_sat26DdJq, hs_sat26DdJo);
                    };
                    return $hs.modules.GHCziFloat.hs_sqrt.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble, hs_sat26DdJr);
                };
                var hs_sat26DdJu = new $hs.Thunk();
                hs_sat26DdJu.evaluateOnce = function () {
                    var hs_sat26DdJt = new $hs.Data(1);
                    hs_sat26DdJt.data = [1 % 1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_x26DdaX, hs_sat26DdJt);
                };
                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26DdJu, hs_sat26DdJs);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_x26DdaX, hs_sat26DdJv);
        };
        return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble, hs_sat26DdJw);
    };
    hs_zdcatanh125uOlH.evaluate = function (hs_x26Ddbb) {
        var hs_sat26DdJC = new $hs.Thunk();
        hs_sat26DdJC.evaluateOnce = function () {
            var hs_sat26DdJB = new $hs.Thunk();
            hs_sat26DdJB.evaluateOnce = function () {
                var hs_sat26DdJy = new $hs.Thunk();
                hs_sat26DdJy.evaluateOnce = function () {
                    var hs_sat26DdJx = new $hs.Data(1);
                    hs_sat26DdJx.data = [1 % 1];
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26DdJx, hs_x26Ddbb);
                };
                var hs_sat26DdJA = new $hs.Thunk();
                hs_sat26DdJA.evaluateOnce = function () {
                    var hs_sat26DdJz = new $hs.Data(1);
                    hs_sat26DdJz.data = [1 % 1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26DdJz, hs_x26Ddbb);
                };
                return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_sat26DdJA, hs_sat26DdJy);
            };
            return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble, hs_sat26DdJB);
        };
        var hs_sat26DdJD = new $hs.Data(1);
        hs_sat26DdJD.data = [1 % 2];
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26DdJD, hs_sat26DdJC);
    };
    hs_zdcasinh125uOlJ.evaluate = function (hs_x26Ddbi) {
        var hs_sat26DdJI = new $hs.Thunk();
        hs_sat26DdJI.evaluateOnce = function () {
            var hs_sat26DdJH = new $hs.Thunk();
            hs_sat26DdJH.evaluateOnce = function () {
                var hs_sat26DdJG = new $hs.Thunk();
                hs_sat26DdJG.evaluateOnce = function () {
                    var hs_sat26DdJE = new $hs.Thunk();
                    hs_sat26DdJE.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_x26Ddbi, hs_x26Ddbi);
                    };
                    var hs_sat26DdJF = new $hs.Data(1);
                    hs_sat26DdJF.data = [1 % 1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26DdJF, hs_sat26DdJE);
                };
                return $hs.modules.GHCziFloat.hs_sqrt.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble, hs_sat26DdJG);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_x26Ddbi, hs_sat26DdJH);
        };
        return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble, hs_sat26DdJI);
    };
    hs_zdclogBase125uOlL.evaluate = function (hs_x26Ddbs, hs_y26Ddbq) {
        var hs_sat26DdJJ = new $hs.Thunk();
        hs_sat26DdJJ.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble, hs_x26Ddbs);
        };
        var hs_sat26DdJK = new $hs.Thunk();
        hs_sat26DdJK.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_log.hscall($hs.modules.GHCziFloat.hs_zdfFloatingDouble, hs_y26Ddbq);
        };
        return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_sat26DdJK, hs_sat26DdJJ);
    };
    hs_zdcfromRational125uOlN.evaluate = function (hs_x26Ddbv) {
        return $hs.modules.GHCziFloat.hs_fromRat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_x26Ddbv);
    };
    hs_zdcrecip125uOlP.evaluate = function (hs_x26Ddby) {
        var hs_sat26DdJL = new $hs.Data(1);
        hs_sat26DdJL.data = [1 % 1];
        return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_sat26DdJL, hs_x26Ddby);
    };
    hs_zdcscaleFloat125uOlR.evaluate = function (hs_k26DdbR, hs_x26DdbB) {
        var hs_wild26DdJM = $hs.modules.GHCziFloat.hs_decodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_x26DdbB);
        var hs_m26DdbF = hs_wild26DdJM.data[0];
        var hs_n26DdbG = hs_wild26DdJM.data[1];
        var hs_sat26DdJX = new $hs.Thunk();
        hs_sat26DdJX.evaluateOnce = function () {
            var hs_sat26DdJW = new $hs.Thunk();
            hs_sat26DdJW.evaluateOnce = function () {
                var hs_bd26DdbP = new $hs.Thunk();
                hs_bd26DdbP.evaluateOnce = function () {
                    var hs_sat26DdJP = new $hs.Thunk();
                    hs_sat26DdJP.evaluateOnce = function () {
                        var hs_sat26DdJN = new $hs.Data(1);
                        hs_sat26DdJN.data = [53];
                        var hs_sat26DdJO = new $hs.Data(1);
                        hs_sat26DdJO.data = [4];
                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdJO, hs_sat26DdJN);
                    };
                    var hs_sat26DdJT = new $hs.Thunk();
                    hs_sat26DdJT.evaluateOnce = function () {
                        var hs_sat26DdJR = new $hs.Thunk();
                        hs_sat26DdJR.evaluateOnce = function () {
                            var hs_sat26DdJQ = new $hs.Data(1);
                            hs_sat26DdJQ.data = [1021];
                            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdJQ);
                        };
                        var hs_sat26DdJS = new $hs.Data(1);
                        hs_sat26DdJS.data = [1024];
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdJS, hs_sat26DdJR);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdJT, hs_sat26DdJP);
                };
                var hs_sat26DdJU = new $hs.Thunk();
                hs_sat26DdJU.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_bd26DdbP, hs_k26DdbR);
                };
                var hs_sat26DdJV = new $hs.Thunk();
                hs_sat26DdJV.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_bd26DdbP);
                };
                return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DdJV, hs_sat26DdJU);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26DdbG, hs_sat26DdJW);
        };
        return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_m26DdbF, hs_sat26DdJX);
    };
    hs_zdcsignificand125uOlT.evaluate = function (hs_x26DdbW) {
        var hs_wild26DdJY = $hs.modules.GHCziFloat.hs_decodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_x26DdbW);
        var hs_m26Ddc0 = hs_wild26DdJY.data[0];
        var hs_sat26DdK1 = new $hs.Thunk();
        hs_sat26DdK1.evaluateOnce = function () {
            var hs_sat26DdK0 = new $hs.Thunk();
            hs_sat26DdK0.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_floatDigits.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_x26DdbW);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdK0);
        };
        return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_m26Ddc0, hs_sat26DdK1);
    };
    hs_zdcexponent125uOlV.evaluate = function (hs_x26Ddc4) {
        var hs_wild26DdK2 = $hs.modules.GHCziFloat.hs_decodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_x26Ddc4);
        var hs_m26Ddc8 = hs_wild26DdK2.data[0];
        var hs_n26Ddcb = hs_wild26DdK2.data[1];
        var hs_sat26DdK4 = new $hs.Thunk();
        hs_sat26DdK4.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_wild126DdK3 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_m26Ddc8, hs_sat26DdK4);
        switch (hs_wild126DdK3.tag) {
        case 1:
            var hs_sat26DdK5 = new $hs.Thunk();
            hs_sat26DdK5.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_floatDigits.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_x26Ddc4);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26Ddcb, hs_sat26DdK5);
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [0];
            return $res;
        }
    };
    hs_zdctoRational125uOlX.evaluate = function (hs_x26Ddcf) {
        var hs_ds26Ddcg = new $hs.Thunk();
        hs_ds26Ddcg.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_decodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_x26Ddcf);
        };
        var hs_sat26DdKc = new $hs.Thunk();
        hs_sat26DdKc.evaluateOnce = function () {
            var hs_sat26DdK8 = new $hs.Thunk();
            hs_sat26DdK8.evaluateOnce = function () {
                var hs_wild26DdK7 = hs_ds26Ddcg;
                if (hs_ds26Ddcg.notEvaluated) {
                    hs_wild26DdK7 = hs_ds26Ddcg.hscall();
                }
                var hs_n26Ddcu = hs_wild26DdK7.data[1];
                if (hs_n26Ddcu.notEvaluated) {
                    return hs_n26Ddcu.hscall();
                } else {
                    return hs_n26Ddcu;
                }
            };
            var hs_sat26DdKb = new $hs.Thunk();
            hs_sat26DdKb.evaluateOnce = function () {
                var hs_sat26DdK9 = new $hs.Thunk();
                hs_sat26DdK9.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                var hs_sat26DdKa = new $hs.Thunk();
                hs_sat26DdKa.evaluateOnce = function () {
                    return $hs.modules.GHCziFloat.hs_floatRadix.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_x26Ddcf);
                };
                return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DdKa, hs_sat26DdK9);
            };
            return $hs.modules.GHCziReal.hs_zczc.hscall(hs_zddFractional25uOam, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26DdKb, hs_sat26DdK8);
        };
        var hs_sat26DdKh = new $hs.Thunk();
        hs_sat26DdKh.evaluateOnce = function () {
            var hs_sat26DdKe = new $hs.Thunk();
            hs_sat26DdKe.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            var hs_sat26DdKg = new $hs.Thunk();
            hs_sat26DdKg.evaluateOnce = function () {
                var hs_wild26DdKd = hs_ds26Ddcg;
                if (hs_ds26Ddcg.notEvaluated) {
                    hs_wild26DdKd = hs_ds26Ddcg.hscall();
                }
                var hs_m26Ddck = hs_wild26DdKd.data[0];
                if (hs_m26Ddck.notEvaluated) {
                    return hs_m26Ddck.hscall();
                } else {
                    return hs_m26Ddck;
                }
            };
            return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DdKg, hs_sat26DdKe);
        };
        return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum25uO9M, hs_sat26DdKh, hs_sat26DdKc);
    };
    hs_zdcshowsPrec125uOlZ.evaluate = function (hs_x26DdcD, hs_eta26DdcE) {
        var hs_sat26DdKj = new $hs.Func(1);
        hs_sat26DdKj.evaluate = function (hs_x126DdcA) {
            var hs_sat26DdKi = new $hs.Thunk();
            hs_sat26DdKi.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_formatRealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, $hs.modules.GHCziFloat.hs_FFGeneric, $hs.modules.DataziMaybe.hs_Nothing, hs_x126DdcA);
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DdKi);
        };
        return $hs.modules.GHCziFloat.hs_showSignedFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_sat26DdKj, hs_x26DdcD, hs_eta26DdcE);
    };
    hs_zdcround325uOm1.evaluate = function (hs_zddIntegral26DdcI, hs_eta26DdcM) {
        var hs_zddReal1226DdcJ = new $hs.Thunk();
        hs_zddReal1226DdcJ.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26DdcI);
        };
        var hs_zddNum1326DdcL = new $hs.Thunk();
        hs_zddNum1326DdcL.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1226DdcJ);
        };
        var hs_wild26DdKk = $hs.modules.GHCziReal.hs_properFraction.hscall($hs.modules.GHCziFloat.hs_zdfRealFracDouble, hs_zddIntegral26DdcI, hs_eta26DdcM);
        var hs_n26DdcU = hs_wild26DdKk.data[0];
        var hs_r26DdcR = hs_wild26DdKk.data[1];
        var hs_m26DdcZ = new $hs.Thunk();
        hs_m26DdcZ.evaluateOnce = function () {
            var hs_sat26DdKm = new $hs.Data(1);
            hs_sat26DdKm.data = [0 % 1];
            var hs_wild126DdKl = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_r26DdcR, hs_sat26DdKm);
            switch (hs_wild126DdKl.tag) {
            case 1:
                var hs_sat26DdKo = new $hs.Thunk();
                hs_sat26DdKo.evaluateOnce = function () {
                    var hs_sat26DdKn = new $hs.Thunk();
                    hs_sat26DdKn.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DdcL, hs_sat26DdKn);
                };
                return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum1326DdcL, hs_n26DdcU, hs_sat26DdKo);
            case 2:
                var hs_sat26DdKq = new $hs.Thunk();
                hs_sat26DdKq.evaluateOnce = function () {
                    var hs_sat26DdKp = new $hs.Thunk();
                    hs_sat26DdKp.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326DdcL, hs_sat26DdKp);
                };
                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum1326DdcL, hs_n26DdcU, hs_sat26DdKq);
            }
        };
        var hs_sat26DdKr = new $hs.Data(1);
        hs_sat26DdKr.data = [0 % 1];
        var hs_sat26DdKv = new $hs.Thunk();
        hs_sat26DdKv.evaluateOnce = function () {
            var hs_sat26DdKs = new $hs.Data(1);
            hs_sat26DdKs.data = [1 % 2];
            var hs_sat26DdKt = new $hs.Thunk();
            hs_sat26DdKt.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_r26DdcR);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26DdKt, hs_sat26DdKs);
        };
        var hs_wild126DdKu = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_sat26DdKv, hs_sat26DdKr);
        switch (hs_wild126DdKu.tag) {
        case 1:
            if (hs_n26DdcU.notEvaluated) {
                return hs_n26DdcU.hscall();
            } else {
                return hs_n26DdcU;
            }
        case 2:
            var hs_wild226DdKw = $hs.modules.GHCziReal.hs_even.hscall(hs_zddIntegral26DdcI, hs_n26DdcU);
            switch (hs_wild226DdKw.tag) {
            case 1:
                if (hs_m26DdcZ.notEvaluated) {
                    return hs_m26DdcZ.hscall();
                } else {
                    return hs_m26DdcZ;
                }
            case 2:
                if (hs_n26DdcU.notEvaluated) {
                    return hs_n26DdcU.hscall();
                } else {
                    return hs_n26DdcU;
                }
            }
        case 3:
            if (hs_m26DdcZ.notEvaluated) {
                return hs_m26DdcZ.hscall();
            } else {
                return hs_m26DdcZ;
            }
        }
    };
    hs_zdcproperFraction325uOm3.evaluate = function (hs_zddIntegral26Ddd9, hs_eta26Dddd) {
        var hs_zddReal1226Ddda = new $hs.Thunk();
        hs_zddReal1226Ddda.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Integral.hscall(hs_zddIntegral26Ddd9);
        };
        var hs_zddNum1326Dddc = new $hs.Thunk();
        hs_zddNum1326Dddc.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1226Ddda);
        };
        var hs_wild26DdKx = $hs.modules.GHCziFloat.hs_decodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_eta26Dddd);
        var hs_m26Dddk = hs_wild26DdKx.data[0];
        var hs_n26Dddh = hs_wild26DdKx.data[1];
        var hs_sat26DdKz = new $hs.Data(1);
        hs_sat26DdKz.data = [0];
        var hs_wild126DdKy = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_n26Dddh, hs_sat26DdKz);
        switch (hs_wild126DdKy.tag) {
        case 1:
            var hs_sat26DdKD = new $hs.Thunk();
            hs_sat26DdKD.evaluateOnce = function () {
                var hs_sat26DdKA = new $hs.Thunk();
                hs_sat26DdKA.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26Dddh);
                };
                var hs_sat26DdKB = new $hs.Thunk();
                hs_sat26DdKB.evaluateOnce = function () {
                    return $hs.modules.GHCziFloat.hs_floatRadix.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_eta26Dddd);
                };
                return $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26DdKB, hs_sat26DdKA);
            };
            var hs_wild226DdKC = $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_m26Dddk, hs_sat26DdKD);
            var hs_w26Dddr = hs_wild226DdKC.data[0];
            var hs_r26Dddt = hs_wild226DdKC.data[1];
            var hs_sat26DdKE = new $hs.Thunk();
            hs_sat26DdKE.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_r26Dddt, hs_n26Dddh);
            };
            var hs_sat26DdKF = new $hs.Thunk();
            hs_sat26DdKF.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326Dddc, hs_w26Dddr);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DdKF, hs_sat26DdKE];
            return $res;
        case 2:
            var hs_sat26DdKG = new $hs.Data(1);
            hs_sat26DdKG.data = [0 % 1];
            var hs_sat26DdKL = new $hs.Thunk();
            hs_sat26DdKL.evaluateOnce = function () {
                var hs_sat26DdKJ = new $hs.Thunk();
                hs_sat26DdKJ.evaluateOnce = function () {
                    var hs_sat26DdKI = new $hs.Thunk();
                    hs_sat26DdKI.evaluateOnce = function () {
                        var hs_sat26DdKH = new $hs.Thunk();
                        hs_sat26DdKH.evaluateOnce = function () {
                            return $hs.modules.GHCziFloat.hs_floatRadix.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_eta26Dddd);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326Dddc, hs_sat26DdKH);
                    };
                    return $hs.modules.GHCziReal.hs_zc.hscall(hs_zddNum1326Dddc, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26DdKI, hs_n26Dddh);
                };
                var hs_sat26DdKK = new $hs.Thunk();
                hs_sat26DdKK.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1326Dddc, hs_m26Dddk);
                };
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum1326Dddc, hs_sat26DdKK, hs_sat26DdKJ);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DdKL, hs_sat26DdKG];
            return $res;
        }
    };
    hs_zddRealFrac225uOm5.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_zdp1RealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zddReal1025uOm7.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac225uOm5);
    };
    hs_zddNum1125uOm9.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1025uOm7);
    };
    hs_zddEq225uOmb.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum1125uOm9);
    };
    hs_zddOrd225uOmd.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal1025uOm7);
    };
    hs_zddFractional325uOmf.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2RealFrac.hscall(hs_zddRealFrac225uOm5);
    };
    hs_zddFloating125uOmh.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_zdp2RealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcatan325uOmj.evaluate = function (hs_y26DddK, hs_x26DddD) {
        var hs_sat26DdKO = new $hs.Thunk();
        hs_sat26DdKO.evaluateOnce = function () {
            var hs_sat26DdKM = new $hs.Thunk();
            hs_sat26DdKM.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1125uOm9, hs_sat26DdKM);
        };
        var hs_wild26DdKN = $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd225uOmd, hs_x26DddD, hs_sat26DdKO);
        switch (hs_wild26DdKN.tag) {
        case 1:
            var hs_sat26DdKR = new $hs.Thunk();
            hs_sat26DdKR.evaluateOnce = function () {
                var hs_sat26DdKQ = new $hs.Thunk();
                hs_sat26DdKQ.evaluateOnce = function () {
                    var hs_sat26DdKP = new $hs.Thunk();
                    hs_sat26DdKP.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1125uOm9, hs_sat26DdKP);
                };
                return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd225uOmd, hs_y26DddK, hs_sat26DdKQ);
            };
            var hs_sat26DdKV = new $hs.Thunk();
            hs_sat26DdKV.evaluateOnce = function () {
                var hs_sat26DdKT = new $hs.Thunk();
                hs_sat26DdKT.evaluateOnce = function () {
                    var hs_sat26DdKS = new $hs.Thunk();
                    hs_sat26DdKS.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1125uOm9, hs_sat26DdKS);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq225uOmb, hs_x26DddD, hs_sat26DdKT);
            };
            var hs_wild126DdKU = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DdKV, hs_sat26DdKR);
            switch (hs_wild126DdKU.tag) {
            case 1:
                var hs_sat26DdKY = new $hs.Thunk();
                hs_sat26DdKY.evaluateOnce = function () {
                    var hs_sat26DdKX = new $hs.Thunk();
                    hs_sat26DdKX.evaluateOnce = function () {
                        var hs_sat26DdKW = new $hs.Thunk();
                        hs_sat26DdKW.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1125uOm9, hs_sat26DdKW);
                    };
                    return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd225uOmd, hs_y26DddK, hs_sat26DdKX);
                };
                var hs_sat26DdL2 = new $hs.Thunk();
                hs_sat26DdL2.evaluateOnce = function () {
                    var hs_sat26DdL0 = new $hs.Thunk();
                    hs_sat26DdL0.evaluateOnce = function () {
                        var hs_sat26DdKZ = new $hs.Thunk();
                        hs_sat26DdKZ.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1125uOm9, hs_sat26DdKZ);
                    };
                    return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd225uOmd, hs_x26DddD, hs_sat26DdL0);
                };
                var hs_wild226DdL1 = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DdL2, hs_sat26DdKY);
                switch (hs_wild226DdL1.tag) {
                case 1:
                    var hs_sat26DdLb = new $hs.Thunk();
                    hs_sat26DdLb.evaluateOnce = function () {
                        var hs_sat26DdL5 = new $hs.Thunk();
                        hs_sat26DdL5.evaluateOnce = function () {
                            var hs_sat26DdL3 = new $hs.Thunk();
                            hs_sat26DdL3.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_y26DddK);
                            };
                            var hs_sat26DdL4 = new $hs.Thunk();
                            hs_sat26DdL4.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_x26DddD);
                            };
                            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DdL4, hs_sat26DdL3);
                        };
                        var hs_sat26DdLa = new $hs.Thunk();
                        hs_sat26DdLa.evaluateOnce = function () {
                            var hs_sat26DdL6 = new $hs.Thunk();
                            hs_sat26DdL6.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_y26DddK);
                            };
                            var hs_sat26DdL9 = new $hs.Thunk();
                            hs_sat26DdL9.evaluateOnce = function () {
                                var hs_sat26DdL8 = new $hs.Thunk();
                                hs_sat26DdL8.evaluateOnce = function () {
                                    var hs_sat26DdL7 = new $hs.Thunk();
                                    hs_sat26DdL7.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1125uOm9, hs_sat26DdL7);
                                };
                                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd225uOmd, hs_x26DddD, hs_sat26DdL8);
                            };
                            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DdL9, hs_sat26DdL6);
                        };
                        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DdLa, hs_sat26DdL5);
                    };
                    var hs_sat26DdLj = new $hs.Thunk();
                    hs_sat26DdLj.evaluateOnce = function () {
                        var hs_sat26DdLe = new $hs.Thunk();
                        hs_sat26DdLe.evaluateOnce = function () {
                            var hs_sat26DdLd = new $hs.Thunk();
                            hs_sat26DdLd.evaluateOnce = function () {
                                var hs_sat26DdLc = new $hs.Thunk();
                                hs_sat26DdLc.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1125uOm9, hs_sat26DdLc);
                            };
                            return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd225uOmd, hs_y26DddK, hs_sat26DdLd);
                        };
                        var hs_sat26DdLh = new $hs.Thunk();
                        hs_sat26DdLh.evaluateOnce = function () {
                            var hs_sat26DdLg = new $hs.Thunk();
                            hs_sat26DdLg.evaluateOnce = function () {
                                var hs_sat26DdLf = new $hs.Thunk();
                                hs_sat26DdLf.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1125uOm9, hs_sat26DdLf);
                            };
                            return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd225uOmd, hs_x26DddD, hs_sat26DdLg);
                        };
                        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DdLh, hs_sat26DdLe);
                    };
                    var hs_wild326DdLi = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DdLj, hs_sat26DdLb);
                    switch (hs_wild326DdLi.tag) {
                    case 1:
                        var hs_sat26DdLo = new $hs.Thunk();
                        hs_sat26DdLo.evaluateOnce = function () {
                            var hs_sat26DdLk = new $hs.Thunk();
                            hs_sat26DdLk.evaluateOnce = function () {
                                return $hs.modules.GHCziFloat.hs_isNegativeZZero.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_x26DddD);
                            };
                            var hs_sat26DdLn = new $hs.Thunk();
                            hs_sat26DdLn.evaluateOnce = function () {
                                var hs_sat26DdLm = new $hs.Thunk();
                                hs_sat26DdLm.evaluateOnce = function () {
                                    var hs_sat26DdLl = new $hs.Thunk();
                                    hs_sat26DdLl.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1125uOm9, hs_sat26DdLl);
                                };
                                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd225uOmd, hs_x26DddD, hs_sat26DdLm);
                            };
                            return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DdLn, hs_sat26DdLk);
                        };
                        var hs_sat26DdLs = new $hs.Thunk();
                        hs_sat26DdLs.evaluateOnce = function () {
                            var hs_sat26DdLq = new $hs.Thunk();
                            hs_sat26DdLq.evaluateOnce = function () {
                                var hs_sat26DdLp = new $hs.Thunk();
                                hs_sat26DdLp.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1125uOm9, hs_sat26DdLp);
                            };
                            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq225uOmb, hs_y26DddK, hs_sat26DdLq);
                        };
                        var hs_wild426DdLr = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DdLs, hs_sat26DdLo);
                        switch (hs_wild426DdLr.tag) {
                        case 1:
                            var hs_sat26DdLv = new $hs.Thunk();
                            hs_sat26DdLv.evaluateOnce = function () {
                                var hs_sat26DdLu = new $hs.Thunk();
                                hs_sat26DdLu.evaluateOnce = function () {
                                    var hs_sat26DdLt = new $hs.Thunk();
                                    hs_sat26DdLt.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1125uOm9, hs_sat26DdLt);
                                };
                                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq225uOmb, hs_y26DddK, hs_sat26DdLu);
                            };
                            var hs_sat26DdLz = new $hs.Thunk();
                            hs_sat26DdLz.evaluateOnce = function () {
                                var hs_sat26DdLx = new $hs.Thunk();
                                hs_sat26DdLx.evaluateOnce = function () {
                                    var hs_sat26DdLw = new $hs.Thunk();
                                    hs_sat26DdLw.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1125uOm9, hs_sat26DdLw);
                                };
                                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq225uOmb, hs_x26DddD, hs_sat26DdLx);
                            };
                            var hs_wild526DdLy = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DdLz, hs_sat26DdLv);
                            switch (hs_wild526DdLy.tag) {
                            case 1:
                                return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum1125uOm9, hs_x26DddD, hs_y26DddK);
                            case 2:
                                if (hs_y26DddK.notEvaluated) {
                                    return hs_y26DddK.hscall();
                                } else {
                                    return hs_y26DddK;
                                }
                            }
                        case 2:
                            return $hs.modules.GHCziFloat.hs_pi.hscall(hs_zddFloating125uOmh);
                        }
                    case 2:
                        var hs_sat26DdLB = new $hs.Thunk();
                        hs_sat26DdLB.evaluateOnce = function () {
                            var hs_sat26DdLA = new $hs.Thunk();
                            hs_sat26DdLA.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum1125uOm9, hs_y26DddK);
                            };
                            return $hs.modules.GHCziFloat.hs_atan2.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_sat26DdLA, hs_x26DddD);
                        };
                        return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum1125uOm9, hs_sat26DdLB);
                    }
                case 2:
                    var hs_sat26DdLD = new $hs.Thunk();
                    hs_sat26DdLD.evaluateOnce = function () {
                        var hs_sat26DdLC = new $hs.Thunk();
                        hs_sat26DdLC.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional325uOmf, hs_y26DddK, hs_x26DddD);
                        };
                        return $hs.modules.GHCziFloat.hs_atan.hscall(hs_zddFloating125uOmh, hs_sat26DdLC);
                    };
                    var hs_sat26DdLE = new $hs.Thunk();
                    hs_sat26DdLE.evaluateOnce = function () {
                        return $hs.modules.GHCziFloat.hs_pi.hscall(hs_zddFloating125uOmh);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum1125uOm9, hs_sat26DdLE, hs_sat26DdLD);
                }
            case 2:
                var hs_sat26DdLG = new $hs.Thunk();
                hs_sat26DdLG.evaluateOnce = function () {
                    var hs_sat26DdLF = new $hs.Thunk();
                    hs_sat26DdLF.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1125uOm9, hs_sat26DdLF);
                };
                var hs_sat26DdLH = new $hs.Thunk();
                hs_sat26DdLH.evaluateOnce = function () {
                    return $hs.modules.GHCziFloat.hs_pi.hscall(hs_zddFloating125uOmh);
                };
                return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional325uOmf, hs_sat26DdLH, hs_sat26DdLG);
            }
        case 2:
            var hs_sat26DdLI = new $hs.Thunk();
            hs_sat26DdLI.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional325uOmf, hs_y26DddK, hs_x26DddD);
            };
            return $hs.modules.GHCziFloat.hs_atan.hscall(hs_zddFloating125uOmh, hs_sat26DdLI);
        }
    };
    hs_zddRealFrac325uOml.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_zdp1RealFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zddReal1125uOmn.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1RealFrac.hscall(hs_zddRealFrac325uOml);
    };
    hs_zddNum1225uOmp.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal1125uOmn);
    };
    hs_zddFractional425uOmr.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2RealFrac.hscall(hs_zddRealFrac325uOml);
    };
    hs_zdcround425uOmt.evaluate = function (hs_x26DdeD) {
        var hs_wild26DdLJ = $hs.modules.GHCziReal.hs_properFraction.hscall($hs.modules.GHCziFloat.hs_zdfRealFracDouble, $hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_x26DdeD);
        var hs_n26DdeL = hs_wild26DdLJ.data[0];
        var hs_r26DdeI = hs_wild26DdLJ.data[1];
        var hs_m26DdeQ = new $hs.Thunk();
        hs_m26DdeQ.evaluateOnce = function () {
            var hs_sat26DdLL = new $hs.Data(1);
            hs_sat26DdLL.data = [0 % 1];
            var hs_wild126DdLK = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_r26DdeI, hs_sat26DdLL);
            switch (hs_wild126DdLK.tag) {
            case 1:
                var hs_sat26DdLN = new $hs.Thunk();
                hs_sat26DdLN.evaluateOnce = function () {
                    var hs_sat26DdLM = new $hs.Thunk();
                    hs_sat26DdLM.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum225uOjT, hs_sat26DdLM);
                };
                return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum225uOjT, hs_n26DdeL, hs_sat26DdLN);
            case 2:
                var hs_sat26DdLP = new $hs.Thunk();
                hs_sat26DdLP.evaluateOnce = function () {
                    var hs_sat26DdLO = new $hs.Thunk();
                    hs_sat26DdLO.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum225uOjT, hs_sat26DdLO);
                };
                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum225uOjT, hs_n26DdeL, hs_sat26DdLP);
            }
        };
        var hs_sat26DdLQ = new $hs.Data(1);
        hs_sat26DdLQ.data = [0 % 1];
        var hs_sat26DdLU = new $hs.Thunk();
        hs_sat26DdLU.evaluateOnce = function () {
            var hs_sat26DdLR = new $hs.Data(1);
            hs_sat26DdLR.data = [1 % 2];
            var hs_sat26DdLS = new $hs.Thunk();
            hs_sat26DdLS.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_r26DdeI);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26DdLS, hs_sat26DdLR);
        };
        var hs_wild126DdLT = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_sat26DdLU, hs_sat26DdLQ);
        switch (hs_wild126DdLT.tag) {
        case 1:
            if (hs_n26DdeL.notEvaluated) {
                return hs_n26DdeL.hscall();
            } else {
                return hs_n26DdeL;
            }
        case 2:
            var hs_wild226DdLV = $hs.modules.GHCziReal.hs_even.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_n26DdeL);
            switch (hs_wild226DdLV.tag) {
            case 1:
                if (hs_m26DdeQ.notEvaluated) {
                    return hs_m26DdeQ.hscall();
                } else {
                    return hs_m26DdeQ;
                }
            case 2:
                if (hs_n26DdeL.notEvaluated) {
                    return hs_n26DdeL.hscall();
                } else {
                    return hs_n26DdeL;
                }
            }
        case 3:
            if (hs_m26DdeQ.notEvaluated) {
                return hs_m26DdeQ.hscall();
            } else {
                return hs_m26DdeQ;
            }
        }
    };
    hs_zdcround525uOmv.evaluate = function (hs_x26DdeY) {
        var hs_wild26DdLW = $hs.modules.GHCziReal.hs_properFraction.hscall($hs.modules.GHCziFloat.hs_zdfRealFracDouble, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_x26DdeY);
        var hs_n26Ddf6 = hs_wild26DdLW.data[0];
        var hs_r26Ddf3 = hs_wild26DdLW.data[1];
        var hs_m26Ddfb = new $hs.Thunk();
        hs_m26Ddfb.evaluateOnce = function () {
            var hs_sat26DdLY = new $hs.Data(1);
            hs_sat26DdLY.data = [0 % 1];
            var hs_wild126DdLX = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_r26Ddf3, hs_sat26DdLY);
            switch (hs_wild126DdLX.tag) {
            case 1:
                var hs_sat26DdM0 = new $hs.Thunk();
                hs_sat26DdM0.evaluateOnce = function () {
                    var hs_sat26DdLZ = new $hs.Thunk();
                    hs_sat26DdLZ.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum625uOk9, hs_sat26DdLZ);
                };
                return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum625uOk9, hs_n26Ddf6, hs_sat26DdM0);
            case 2:
                var hs_sat26DdM2 = new $hs.Thunk();
                hs_sat26DdM2.evaluateOnce = function () {
                    var hs_sat26DdM1 = new $hs.Thunk();
                    hs_sat26DdM1.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum625uOk9, hs_sat26DdM1);
                };
                return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum625uOk9, hs_n26Ddf6, hs_sat26DdM2);
            }
        };
        var hs_sat26DdM3 = new $hs.Data(1);
        hs_sat26DdM3.data = [0 % 1];
        var hs_sat26DdM7 = new $hs.Thunk();
        hs_sat26DdM7.evaluateOnce = function () {
            var hs_sat26DdM4 = new $hs.Data(1);
            hs_sat26DdM4.data = [1 % 2];
            var hs_sat26DdM5 = new $hs.Thunk();
            hs_sat26DdM5.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_r26Ddf3);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26DdM5, hs_sat26DdM4);
        };
        var hs_wild126DdM6 = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, hs_sat26DdM7, hs_sat26DdM3);
        switch (hs_wild126DdM6.tag) {
        case 1:
            if (hs_n26Ddf6.notEvaluated) {
                return hs_n26Ddf6.hscall();
            } else {
                return hs_n26Ddf6;
            }
        case 2:
            var hs_wild226DdM8 = $hs.modules.GHCziReal.hs_even.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_n26Ddf6);
            switch (hs_wild226DdM8.tag) {
            case 1:
                if (hs_m26Ddfb.notEvaluated) {
                    return hs_m26Ddfb.hscall();
                } else {
                    return hs_m26Ddfb;
                }
            case 2:
                if (hs_n26Ddf6.notEvaluated) {
                    return hs_n26Ddf6.hscall();
                } else {
                    return hs_n26Ddf6;
                }
            }
        case 3:
            if (hs_m26Ddfb.notEvaluated) {
                return hs_m26Ddfb.hscall();
            } else {
                return hs_m26Ddfb;
            }
        }
    };
    hs_fromRat225uOmx.evaluate = function (hs_ds26Ddfj) {
        var hs_wild26DdM9 = hs_ds26Ddfj;
        if (hs_ds26Ddfj.notEvaluated) {
            hs_wild26DdM9 = hs_ds26Ddfj.hscall();
        }
        var hs_n26Ddfq = hs_wild26DdM9.data[0];
        var hs_ds126Ddfn = hs_wild26DdM9.data[1];
        var hs_sat26DdMb = new $hs.Thunk();
        hs_sat26DdMb.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_wild126DdMa = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_ds126Ddfn, hs_sat26DdMb);
        switch (hs_wild126DdMa.tag) {
        case 1:
            var hs_sat26DdMd = new $hs.Thunk();
            hs_sat26DdMd.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            var hs_wild226DdMc = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26Ddfq, hs_sat26DdMd);
            switch (hs_wild226DdMc.tag) {
            case 1:
                var hs_sat26DdMf = new $hs.Thunk();
                hs_sat26DdMf.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_wild326DdMe = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26Ddfq, hs_sat26DdMf);
                switch (hs_wild326DdMe.tag) {
                case 1:
                    var hs_sat26DdMg = new $hs.Data(1);
                    hs_sat26DdMg.data = [0];
                    var hs_sat26DdMh = new $hs.Thunk();
                    hs_sat26DdMh.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_sat26DdMh, hs_sat26DdMg);
                case 2:
                    var hs_sat26DdMj = new $hs.Thunk();
                    hs_sat26DdMj.evaluateOnce = function () {
                        var hs_sat26DdMi = new $hs.Thunk();
                        hs_sat26DdMi.evaluateOnce = function () {
                            var hs_tpl26Ddfy = $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_n26Ddfq);
                            var $res = new $hs.Data(1);
                            $res.data = [hs_tpl26Ddfy, hs_ds126Ddfn];
                            return $res;
                        };
                        return $hs.modules.GHCziFloat.hs_fromRatzq.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_sat26DdMi);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum1225uOmp, hs_sat26DdMj);
                }
            case 2:
                var hs_sat26DdMk = new $hs.Data(1);
                hs_sat26DdMk.data = [hs_n26Ddfq, hs_ds126Ddfn];
                return $hs.modules.GHCziFloat.hs_fromRatzq.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_sat26DdMk);
            }
        case 2:
            var hs_sat26DdMm = new $hs.Thunk();
            hs_sat26DdMm.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            var hs_wild226DdMl = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26Ddfq, hs_sat26DdMm);
            switch (hs_wild226DdMl.tag) {
            case 1:
                var hs_sat26DdMo = new $hs.Thunk();
                hs_sat26DdMo.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_wild326DdMn = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26Ddfq, hs_sat26DdMo);
                switch (hs_wild326DdMn.tag) {
                case 1:
                    var hs_sat26DdMq = new $hs.Thunk();
                    hs_sat26DdMq.evaluateOnce = function () {
                        var hs_sat26DdMp = new $hs.Thunk();
                        hs_sat26DdMp.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1225uOmp, hs_sat26DdMp);
                    };
                    var hs_sat26DdMs = new $hs.Thunk();
                    hs_sat26DdMs.evaluateOnce = function () {
                        var hs_sat26DdMr = new $hs.Thunk();
                        hs_sat26DdMr.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1225uOmp, hs_sat26DdMr);
                    };
                    return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional425uOmr, hs_sat26DdMs, hs_sat26DdMq);
                case 2:
                    var hs_sat26DdMx = new $hs.Thunk();
                    hs_sat26DdMx.evaluateOnce = function () {
                        var hs_sat26DdMu = new $hs.Thunk();
                        hs_sat26DdMu.evaluateOnce = function () {
                            var hs_sat26DdMt = new $hs.Thunk();
                            hs_sat26DdMt.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1225uOmp, hs_sat26DdMt);
                        };
                        var hs_sat26DdMw = new $hs.Thunk();
                        hs_sat26DdMw.evaluateOnce = function () {
                            var hs_sat26DdMv = new $hs.Thunk();
                            hs_sat26DdMv.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1225uOmp, hs_sat26DdMv);
                        };
                        return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional425uOmr, hs_sat26DdMw, hs_sat26DdMu);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum1225uOmp, hs_sat26DdMx);
                }
            case 2:
                var hs_sat26DdMz = new $hs.Thunk();
                hs_sat26DdMz.evaluateOnce = function () {
                    var hs_sat26DdMy = new $hs.Thunk();
                    hs_sat26DdMy.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1225uOmp, hs_sat26DdMy);
                };
                var hs_sat26DdMB = new $hs.Thunk();
                hs_sat26DdMB.evaluateOnce = function () {
                    var hs_sat26DdMA = new $hs.Thunk();
                    hs_sat26DdMA.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum1225uOmp, hs_sat26DdMA);
                };
                return $hs.modules.GHCziReal.hs_zs.hscall(hs_zddFractional425uOmr, hs_sat26DdMB, hs_sat26DdMz);
            }
        }
    };
    hs_zdcproperFraction425uOmz.evaluate = function (hs_x26DdfU) {
        var hs_wild26DdMC = $hs.modules.GHCziFloat.hs_decodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_x26DdfU);
        var hs_m26Ddg1 = hs_wild26DdMC.data[0];
        var hs_n26DdfY = hs_wild26DdMC.data[1];
        var hs_sat26DdME = new $hs.Data(1);
        hs_sat26DdME.data = [0];
        var hs_wild126DdMD = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_n26DdfY, hs_sat26DdME);
        switch (hs_wild126DdMD.tag) {
        case 1:
            var hs_sat26DdMI = new $hs.Thunk();
            hs_sat26DdMI.evaluateOnce = function () {
                var hs_sat26DdMF = new $hs.Thunk();
                hs_sat26DdMF.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26DdfY);
                };
                var hs_sat26DdMG = new $hs.Thunk();
                hs_sat26DdMG.evaluateOnce = function () {
                    return $hs.modules.GHCziFloat.hs_floatRadix.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_x26DdfU);
                };
                return $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26DdMG, hs_sat26DdMF);
            };
            var hs_wild226DdMH = $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_m26Ddg1, hs_sat26DdMI);
            var hs_w26Ddg8 = hs_wild226DdMH.data[0];
            var hs_r26Ddga = hs_wild226DdMH.data[1];
            var hs_sat26DdMJ = new $hs.Thunk();
            hs_sat26DdMJ.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_r26Ddga, hs_n26DdfY);
            };
            var hs_sat26DdMK = new $hs.Thunk();
            hs_sat26DdMK.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum125uOjP, hs_w26Ddg8);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DdMK, hs_sat26DdMJ];
            return $res;
        case 2:
            var hs_sat26DdML = new $hs.Data(1);
            hs_sat26DdML.data = [0 % 1];
            var hs_sat26DdMQ = new $hs.Thunk();
            hs_sat26DdMQ.evaluateOnce = function () {
                var hs_sat26DdMO = new $hs.Thunk();
                hs_sat26DdMO.evaluateOnce = function () {
                    var hs_sat26DdMN = new $hs.Thunk();
                    hs_sat26DdMN.evaluateOnce = function () {
                        var hs_sat26DdMM = new $hs.Thunk();
                        hs_sat26DdMM.evaluateOnce = function () {
                            return $hs.modules.GHCziFloat.hs_floatRadix.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_x26DdfU);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum125uOjP, hs_sat26DdMM);
                    };
                    return $hs.modules.GHCziReal.hs_zc.hscall(hs_zddNum125uOjP, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26DdMN, hs_n26DdfY);
                };
                var hs_sat26DdMP = new $hs.Thunk();
                hs_sat26DdMP.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum125uOjP, hs_m26Ddg1);
                };
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum125uOjP, hs_sat26DdMP, hs_sat26DdMO);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DdMQ, hs_sat26DdML];
            return $res;
        }
    };
    hs_zdcproperFraction525uOmB.evaluate = function (hs_x26Ddgj) {
        var hs_wild26DdMR = $hs.modules.GHCziFloat.hs_decodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_x26Ddgj);
        var hs_m26Ddgq = hs_wild26DdMR.data[0];
        var hs_n26Ddgn = hs_wild26DdMR.data[1];
        var hs_sat26DdMT = new $hs.Data(1);
        hs_sat26DdMT.data = [0];
        var hs_wild126DdMS = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_n26Ddgn, hs_sat26DdMT);
        switch (hs_wild126DdMS.tag) {
        case 1:
            var hs_sat26DdMX = new $hs.Thunk();
            hs_sat26DdMX.evaluateOnce = function () {
                var hs_sat26DdMU = new $hs.Thunk();
                hs_sat26DdMU.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26Ddgn);
                };
                var hs_sat26DdMV = new $hs.Thunk();
                hs_sat26DdMV.evaluateOnce = function () {
                    return $hs.modules.GHCziFloat.hs_floatRadix.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_x26Ddgj);
                };
                return $hs.modules.GHCziReal.hs_zc.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26DdMV, hs_sat26DdMU);
            };
            var hs_wild226DdMW = $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_m26Ddgq, hs_sat26DdMX);
            var hs_w26Ddgx = hs_wild226DdMW.data[0];
            var hs_r26Ddgz = hs_wild226DdMW.data[1];
            var hs_sat26DdMY = new $hs.Thunk();
            hs_sat26DdMY.evaluateOnce = function () {
                return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_r26Ddgz, hs_n26Ddgn);
            };
            var hs_sat26DdMZ = new $hs.Thunk();
            hs_sat26DdMZ.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum525uOk5, hs_w26Ddgx);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DdMZ, hs_sat26DdMY];
            return $res;
        case 2:
            var hs_sat26DdN0 = new $hs.Data(1);
            hs_sat26DdN0.data = [0 % 1];
            var hs_sat26DdN5 = new $hs.Thunk();
            hs_sat26DdN5.evaluateOnce = function () {
                var hs_sat26DdN3 = new $hs.Thunk();
                hs_sat26DdN3.evaluateOnce = function () {
                    var hs_sat26DdN2 = new $hs.Thunk();
                    hs_sat26DdN2.evaluateOnce = function () {
                        var hs_sat26DdN1 = new $hs.Thunk();
                        hs_sat26DdN1.evaluateOnce = function () {
                            return $hs.modules.GHCziFloat.hs_floatRadix.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_x26Ddgj);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum525uOk5, hs_sat26DdN1);
                    };
                    return $hs.modules.GHCziReal.hs_zc.hscall(hs_zddNum525uOk5, $hs.modules.GHCziReal.hs_zdfIntegralInt, hs_sat26DdN2, hs_n26Ddgn);
                };
                var hs_sat26DdN4 = new $hs.Thunk();
                hs_sat26DdN4.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum525uOk5, hs_m26Ddgq);
                };
                return $hs.modules.GHCziNum.hs_zt.hscall(hs_zddNum525uOk5, hs_sat26DdN4, hs_sat26DdN3);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DdN5, hs_sat26DdN0];
            return $res;
        }
    };
    this.hs_showFloat.evaluate = function (hs_zddRealFloat26DdgJ, hs_x26DdgK) {
        var hs_sat26DdN6 = new $hs.Thunk();
        hs_sat26DdN6.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_formatRealFloat.hscall(hs_zddRealFloat26DdgJ, $hs.modules.GHCziFloat.hs_FFGeneric, $hs.modules.DataziMaybe.hs_Nothing, hs_x26DdgK);
        };
        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DdN6);
    };
    hs_sat26DdN7.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_truncate.hscall($hs.modules.GHCziFloat.hs_zdfRealFracFloat, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_sat26DdN8.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
    };
    hs_zdcfromEnum25uOKx.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DdN8, hs_sat26DdN7);
    };
    hs_zdcsucc25uOKB.evaluate = function (hs_x26DdgT) {
        var hs_sat26DdN9 = new $hs.Data(1);
        hs_sat26DdN9.data = [1 % 1];
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_x26DdgT, hs_sat26DdN9);
    };
    hs_zdcpred25uOKG.evaluate = function (hs_x26DdgY) {
        var hs_sat26DdNa = new $hs.Data(1);
        hs_sat26DdNa.data = [1 % 1];
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_x26DdgY, hs_sat26DdNa);
    };
    hs_sat26DdNb.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_truncate.hscall($hs.modules.GHCziFloat.hs_zdfRealFracDouble, $hs.modules.GHCziReal.hs_zdfIntegralInteger);
    };
    hs_sat26DdNc.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
    };
    hs_zdcfromEnum125uOKL.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DdNc, hs_sat26DdNb);
    };
    hs_zdcenumFrom25uOKP.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_numericEnumFrom.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble);
    };
    hs_zdcenumFromThen25uOKR.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_numericEnumFromThen.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble);
    };
    hs_zdcenumFromTo25uOKT.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_numericEnumFromTo.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, $hs.modules.GHCziFloat.hs_zdfFractionalDouble);
    };
    hs_zdcenumFromThenTo25uOKV.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_numericEnumFromThenTo.hscall($hs.modules.GHCziClasses.hs_zdfOrdDouble, $hs.modules.GHCziFloat.hs_zdfFractionalDouble);
    };
    this.hs_zdfEnumDouble.data = [hs_zdcsucc25uOKB, hs_zdcpred25uOKG, $hs.modules.GHCziFloat.hs_int2Double, hs_zdcfromEnum125uOKL, hs_zdcenumFrom25uOKP, hs_zdcenumFromThen25uOKR, hs_zdcenumFromTo25uOKT, hs_zdcenumFromThenTo25uOKV];
    hs_zdcsucc125uOKX.evaluate = function (hs_x26Ddhf) {
        var hs_sat26DdNd = new $hs.Data(1);
        hs_sat26DdNd.data = [1 % 1];
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_x26Ddhf, hs_sat26DdNd);
    };
    hs_zdcpred125uOL2.evaluate = function (hs_x26Ddhk) {
        var hs_sat26DdNe = new $hs.Data(1);
        hs_sat26DdNe.data = [1 % 1];
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_x26Ddhk, hs_sat26DdNe);
    };
    hs_zdcenumFrom125uOL7.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_numericEnumFrom.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat);
    };
    hs_zdcenumFromThen125uOL9.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_numericEnumFromThen.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat);
    };
    hs_zdcenumFromTo125uOLb.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_numericEnumFromTo.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat, $hs.modules.GHCziFloat.hs_zdfFractionalFloat);
    };
    hs_zdcenumFromThenTo125uOLd.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_numericEnumFromThenTo.hscall($hs.modules.GHCziClasses.hs_zdfOrdFloat, $hs.modules.GHCziFloat.hs_zdfFractionalFloat);
    };
    this.hs_zdfEnumFloat.data = [hs_zdcsucc125uOKX, hs_zdcpred125uOL2, $hs.modules.GHCziFloat.hs_int2Float, hs_zdcfromEnum25uOKx, hs_zdcenumFrom125uOL7, hs_zdcenumFromThen125uOL9, hs_zdcenumFromTo125uOLb, hs_zdcenumFromThenTo125uOLd];
    this.hs_zddmscaleFloat.evaluate = function (hs_zddRealFloat26Ddhy, hs_k26Ddi4, hs_x26Ddhz) {
        var hs_ds26DdhA = new $hs.Thunk();
        hs_ds26DdhA.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_floatRange.hscall(hs_zddRealFloat26Ddhy, hs_x26Ddhz);
        };
        var hs_ds126DdhC = new $hs.Thunk();
        hs_ds126DdhC.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_decodeFloat.hscall(hs_zddRealFloat26Ddhy, hs_x26Ddhz);
        };
        var hs_sat26DdNw = new $hs.Thunk();
        hs_sat26DdNw.evaluateOnce = function () {
            var hs_sat26DdNt = new $hs.Thunk();
            hs_sat26DdNt.evaluateOnce = function () {
                var hs_bd26Ddi2 = new $hs.Thunk();
                hs_bd26Ddi2.evaluateOnce = function () {
                    var hs_sat26DdNi = new $hs.Thunk();
                    hs_sat26DdNi.evaluateOnce = function () {
                        var hs_sat26DdNf = new $hs.Thunk();
                        hs_sat26DdNf.evaluateOnce = function () {
                            return $hs.modules.GHCziFloat.hs_floatDigits.hscall(hs_zddRealFloat26Ddhy, hs_x26Ddhz);
                        };
                        var hs_sat26DdNg = new $hs.Data(1);
                        hs_sat26DdNg.data = [4];
                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdNg, hs_sat26DdNf);
                    };
                    var hs_sat26DdNo = new $hs.Thunk();
                    hs_sat26DdNo.evaluateOnce = function () {
                        var hs_sat26DdNm = new $hs.Thunk();
                        hs_sat26DdNm.evaluateOnce = function () {
                            var hs_wild26DdNh = hs_ds26DdhA;
                            if (hs_ds26DdhA.notEvaluated) {
                                hs_wild26DdNh = hs_ds26DdhA.hscall();
                            }
                            var hs_l26DdhW = hs_wild26DdNh.data[0];
                            if (hs_l26DdhW.notEvaluated) {
                                return hs_l26DdhW.hscall();
                            } else {
                                return hs_l26DdhW;
                            }
                        };
                        var hs_sat26DdNn = new $hs.Thunk();
                        hs_sat26DdNn.evaluateOnce = function () {
                            var hs_wild26DdNl = hs_ds26DdhA;
                            if (hs_ds26DdhA.notEvaluated) {
                                hs_wild26DdNl = hs_ds26DdhA.hscall();
                            }
                            var hs_h26DdhR = hs_wild26DdNl.data[1];
                            if (hs_h26DdhR.notEvaluated) {
                                return hs_h26DdhR.hscall();
                            } else {
                                return hs_h26DdhR;
                            }
                        };
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdNn, hs_sat26DdNm);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdNo, hs_sat26DdNi);
                };
                var hs_sat26DdNp = new $hs.Thunk();
                hs_sat26DdNp.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_bd26Ddi2, hs_k26Ddi4);
                };
                var hs_sat26DdNq = new $hs.Thunk();
                hs_sat26DdNq.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_bd26Ddi2);
                };
                return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DdNq, hs_sat26DdNp);
            };
            var hs_sat26DdNu = new $hs.Thunk();
            hs_sat26DdNu.evaluateOnce = function () {
                var hs_wild26DdNs = hs_ds126DdhC;
                if (hs_ds126DdhC.notEvaluated) {
                    hs_wild26DdNs = hs_ds126DdhC.hscall();
                }
                var hs_n26DdhL = hs_wild26DdNs.data[1];
                if (hs_n26DdhL.notEvaluated) {
                    return hs_n26DdhL.hscall();
                } else {
                    return hs_n26DdhL;
                }
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdNu, hs_sat26DdNt);
        };
        var hs_sat26DdNy = new $hs.Thunk();
        hs_sat26DdNy.evaluateOnce = function () {
            var hs_wild26DdNv = hs_ds126DdhC;
            if (hs_ds126DdhC.notEvaluated) {
                hs_wild26DdNv = hs_ds126DdhC.hscall();
            }
            var hs_m26DdhG = hs_wild26DdNv.data[0];
            if (hs_m26DdhG.notEvaluated) {
                return hs_m26DdhG.hscall();
            } else {
                return hs_m26DdhG;
            }
        };
        return $hs.modules.GHCziFloat.hs_encodeFloat.hscall(hs_zddRealFloat26Ddhy, hs_sat26DdNy, hs_sat26DdNw);
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
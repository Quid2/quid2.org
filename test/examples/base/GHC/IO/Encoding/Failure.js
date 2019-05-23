
$hs.modules.GHCziIOziEncodingziFailure = new $hs.Module();
$hs.modules.GHCziIOziEncodingziFailure.dependencies = ["GHC.CString", "GHC.Integer", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Show", "GHC.Classes", "GHC.IO.Buffer", "GHC.IO.Exception", "GHC.Word"];
$hs.modules.GHCziIOziEncodingziFailure.initBeforeDependencies = function () {
    this.hs_codingFailureModeSuffix = new $hs.Func(1);
    this.hs_zdfShowCodingFailureMode = new $hs.Data(1);
    this.hs_isSurrogate = new $hs.Func(1);
    this.hs_surrogatifyRoundtripCharacter = new $hs.Func(1);
    this.hs_desurrogatifyRoundtripCharacter = new $hs.Func(1);
    this.hs_recoverDecode = new $hs.Func(3);
    this.hs_recoverEncode = new $hs.Func(3);
    this.hs_ErrorOnCodingFailure = new $hs.Data(1);
    this.hs_IgnoreCodingFailure = new $hs.Data(2);
    this.hs_TransliterateCodingFailure = new $hs.Data(3);
    this.hs_RoundtripFailure = new $hs.Data(4);
    this.hs_codingFailureModeSuffix.notEvaluated = true;
    this.hs_codingFailureModeSuffix.evaluate = function (hs_ds26D0Mv) {
        $hs.modules.GHCziIOziEncodingziFailure.loadDependencies();
        return this.evaluate(hs_ds26D0Mv);
    };
    this.hs_zdfShowCodingFailureMode.notEvaluated = true;
    this.hs_zdfShowCodingFailureMode.evaluate = function () {
        $hs.modules.GHCziIOziEncodingziFailure.loadDependencies();
        return this;
    };
    this.hs_isSurrogate.notEvaluated = true;
    this.hs_isSurrogate.evaluate = function (hs_c26D0MN) {
        $hs.modules.GHCziIOziEncodingziFailure.loadDependencies();
        return this.evaluate(hs_c26D0MN);
    };
    this.hs_surrogatifyRoundtripCharacter.notEvaluated = true;
    this.hs_surrogatifyRoundtripCharacter.evaluate = function (hs_c26D0N1) {
        $hs.modules.GHCziIOziEncodingziFailure.loadDependencies();
        return this.evaluate(hs_c26D0N1);
    };
    this.hs_desurrogatifyRoundtripCharacter.notEvaluated = true;
    this.hs_desurrogatifyRoundtripCharacter.evaluate = function (hs_c26D0Nf) {
        $hs.modules.GHCziIOziEncodingziFailure.loadDependencies();
        return this.evaluate(hs_c26D0Nf);
    };
    this.hs_recoverDecode.notEvaluated = true;
    this.hs_recoverDecode.evaluate = function (hs_cfm26D0NU, hs_input26D0Nu, hs_output26D0NF) {
        $hs.modules.GHCziIOziEncodingziFailure.loadDependencies();
        return this.evaluate(hs_cfm26D0NU, hs_input26D0Nu, hs_output26D0NF);
    };
    this.hs_recoverEncode.notEvaluated = true;
    this.hs_recoverEncode.evaluate = function (hs_cfm26D0Qm, hs_input26D0PM, hs_output26D0Q1) {
        $hs.modules.GHCziIOziEncodingziFailure.loadDependencies();
        return this.evaluate(hs_cfm26D0Qm, hs_input26D0PM, hs_output26D0Q1);
    };
    this.hs_ErrorOnCodingFailure.notEvaluated = true;
    this.hs_ErrorOnCodingFailure.evaluate = function () {
        $hs.modules.GHCziIOziEncodingziFailure.loadDependencies();
        return this;
    };
    this.hs_IgnoreCodingFailure.notEvaluated = true;
    this.hs_IgnoreCodingFailure.evaluate = function () {
        $hs.modules.GHCziIOziEncodingziFailure.loadDependencies();
        return this;
    };
    this.hs_TransliterateCodingFailure.notEvaluated = true;
    this.hs_TransliterateCodingFailure.evaluate = function () {
        $hs.modules.GHCziIOziEncodingziFailure.loadDependencies();
        return this;
    };
    this.hs_RoundtripFailure.notEvaluated = true;
    this.hs_RoundtripFailure.evaluate = function () {
        $hs.modules.GHCziIOziEncodingziFailure.loadDependencies();
        return this;
    };
};
$hs.modules.GHCziIOziEncodingziFailure.initAfterDependencies = function () {
    this.hs_codingFailureModeSuffix.notEvaluated = false;
    this.hs_zdfShowCodingFailureMode.notEvaluated = false;
    this.hs_zdfShowCodingFailureMode.evaluate = function () {
        return this;
    };
    this.hs_isSurrogate.notEvaluated = false;
    this.hs_surrogatifyRoundtripCharacter.notEvaluated = false;
    this.hs_desurrogatifyRoundtripCharacter.notEvaluated = false;
    this.hs_recoverDecode.notEvaluated = false;
    this.hs_recoverEncode.notEvaluated = false;
    this.hs_ErrorOnCodingFailure.notEvaluated = false;
    this.hs_ErrorOnCodingFailure.evaluate = function () {
        return this;
    };
    this.hs_IgnoreCodingFailure.notEvaluated = false;
    this.hs_IgnoreCodingFailure.evaluate = function () {
        return this;
    };
    this.hs_TransliterateCodingFailure.notEvaluated = false;
    this.hs_TransliterateCodingFailure.evaluate = function () {
        return this;
    };
    this.hs_RoundtripFailure.notEvaluated = false;
    this.hs_RoundtripFailure.evaluate = function () {
        return this;
    };
    var hs_ioezuencodingError25tcfA = new $hs.Thunk();
    var hs_ioezudecodingError25tcfz = new $hs.Thunk();
    var hs_unrepresentableChar25tcfp = new $hs.Data(1);
    var hs_zdcshowsPrec25uCgh = new $hs.Func(2);
    var hs_sat26D0S4 = new $hs.Thunk();
    var hs_zdcshowList25uCgr = new $hs.Thunk();
    var hs_zdcshow25uCgs = new $hs.Thunk();
    hs_ioezuencodingError25tcfA.evaluateOnce = function () {
        var hs_sat26D0RS = new $hs.Thunk();
        hs_sat26D0RS.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("invalid character\x00");
        };
        var hs_sat26D0RT = new $hs.Thunk();
        hs_sat26D0RT.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("recoverEncode\x00");
        };
        var hs_sat26D0RR = new $hs.Data(1);
        hs_sat26D0RR.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_InvalidArgument, hs_sat26D0RT, hs_sat26D0RS, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26D0RR);
    };
    hs_ioezudecodingError25tcfz.evaluateOnce = function () {
        var hs_sat26D0RV = new $hs.Thunk();
        hs_sat26D0RV.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("invalid byte sequence\x00");
        };
        var hs_sat26D0RW = new $hs.Thunk();
        hs_sat26D0RW.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("recoverDecode\x00");
        };
        var hs_sat26D0RU = new $hs.Data(1);
        hs_sat26D0RU.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_InvalidArgument, hs_sat26D0RW, hs_sat26D0RV, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26D0RU);
    };
    hs_unrepresentableChar25tcfp.data = ["\ufffd"];
    this.hs_codingFailureModeSuffix.evaluate = function (hs_ds26D0Mv) {
        var hs_wild26D0RX = hs_ds26D0Mv;
        if (hs_ds26D0Mv.notEvaluated) {
            hs_wild26D0RX = hs_ds26D0Mv.hscall();
        }
        switch (hs_wild26D0RX.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("//IGNORE\x00");
        case 3:
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("//TRANSLIT\x00");
        case 4:
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("//ROUNDTRIP\x00");
        }
    };
    hs_zdcshowsPrec25uCgh.evaluate = function (hs_ds26D0MG, hs_ds126D0MA) {
        var hs_wild26D0RZ = hs_ds126D0MA;
        if (hs_ds126D0MA.notEvaluated) {
            hs_wild26D0RZ = hs_ds126D0MA.hscall();
        }
        switch (hs_wild26D0RZ.tag) {
        case 1:
            var hs_sat26D0S2 = new $hs.Thunk();
            hs_sat26D0S2.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ErrorOnCodingFailure\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D0S2);
        case 2:
            var hs_sat26D0RY = new $hs.Thunk();
            hs_sat26D0RY.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("IgnoreCodingFailure\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D0RY);
        case 3:
            var hs_sat26D0S0 = new $hs.Thunk();
            hs_sat26D0S0.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("TransliterateCodingFailure\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D0S0);
        case 4:
            var hs_sat26D0S1 = new $hs.Thunk();
            hs_sat26D0S1.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("RoundtripFailure\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D0S1);
        }
    };
    hs_sat26D0S4.evaluateOnce = function () {
        var hs_sat26D0S3 = new $hs.Data(1);
        hs_sat26D0S3.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_zdfShowCodingFailureMode, hs_sat26D0S3);
    };
    this.hs_zdfShowCodingFailureMode.data = [hs_zdcshowsPrec25uCgh, hs_zdcshow25uCgs, hs_zdcshowList25uCgr];
    hs_zdcshowList25uCgr.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26D0S4);
    };
    hs_zdcshow25uCgs.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_zdfShowCodingFailureMode);
    };
    this.hs_isSurrogate.evaluate = function (hs_c26D0MN) {
        var hs_x26D0MO = new $hs.Thunk();
        hs_x26D0MO.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26D0MN);
        };
        var hs_sat26D0S6 = new $hs.Thunk();
        hs_sat26D0S6.evaluateOnce = function () {
            var hs_sat26D0Sc = new $hs.Thunk();
            hs_sat26D0Sc.evaluateOnce = function () {
                var hs_sat26D0Se = new $hs.Data(1);
                hs_sat26D0Se.data = [57343];
                return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_x26D0MO, hs_sat26D0Se);
            };
            var hs_sat26D0Sb = new $hs.Thunk();
            hs_sat26D0Sb.evaluateOnce = function () {
                var hs_sat26D0Sd = new $hs.Data(1);
                hs_sat26D0Sd.data = [56320];
                return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D0Sd, hs_x26D0MO);
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D0Sb, hs_sat26D0Sc);
        };
        var hs_sat26D0S5 = new $hs.Thunk();
        hs_sat26D0S5.evaluateOnce = function () {
            var hs_sat26D0S8 = new $hs.Thunk();
            hs_sat26D0S8.evaluateOnce = function () {
                var hs_sat26D0Sa = new $hs.Data(1);
                hs_sat26D0Sa.data = [56319];
                return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_x26D0MO, hs_sat26D0Sa);
            };
            var hs_sat26D0S7 = new $hs.Thunk();
            hs_sat26D0S7.evaluateOnce = function () {
                var hs_sat26D0S9 = new $hs.Data(1);
                hs_sat26D0S9.data = [55296];
                return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D0S9, hs_x26D0MO);
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D0S7, hs_sat26D0S8);
        };
        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26D0S5, hs_sat26D0S6);
    };
    this.hs_surrogatifyRoundtripCharacter.evaluate = function (hs_c26D0N1) {
        var hs_x26D0N2 = new $hs.Thunk();
        hs_x26D0N2.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26D0N1);
        };
        var hs_sat26D0Sg = new $hs.Thunk();
        hs_sat26D0Sg.evaluateOnce = function () {
            var hs_sat26D0So = new $hs.Data(1);
            hs_sat26D0So.data = [61440];
            return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_x26D0N2, hs_sat26D0So);
        };
        var hs_sat26D0Sh = new $hs.Thunk();
        hs_sat26D0Sh.evaluateOnce = function () {
            var hs_sat26D0Sn = new $hs.Data(1);
            hs_sat26D0Sn.data = [61184];
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D0Sn, hs_x26D0N2);
        };
        var hs_wild26D0Si = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D0Sh, hs_sat26D0Sg);
        switch (hs_wild26D0Si.tag) {
        case 1:
            if (hs_c26D0N1.notEvaluated) {
                return hs_c26D0N1.hscall();
            } else {
                return hs_c26D0N1;
            }
        case 2:
            var hs_sat26D0Sf = new $hs.Thunk();
            hs_sat26D0Sf.evaluateOnce = function () {
                var hs_sat26D0Sk = new $hs.Data(1);
                hs_sat26D0Sk.data = [56320];
                var hs_sat26D0Sj = new $hs.Thunk();
                hs_sat26D0Sj.evaluateOnce = function () {
                    var hs_sat26D0Sm = new $hs.Data(1);
                    hs_sat26D0Sm.data = [61184];
                    var hs_sat26D0Sl = new $hs.Thunk();
                    hs_sat26D0Sl.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26D0N1);
                    };
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D0Sl, hs_sat26D0Sm);
                };
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D0Sj, hs_sat26D0Sk);
            };
            return $hs.modules.GHCziBase.hs_chr.hscall(hs_sat26D0Sf);
        }
    };
    this.hs_desurrogatifyRoundtripCharacter.evaluate = function (hs_c26D0Nf) {
        var hs_x26D0Ng = new $hs.Thunk();
        hs_x26D0Ng.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26D0Nf);
        };
        var hs_sat26D0Sq = new $hs.Thunk();
        hs_sat26D0Sq.evaluateOnce = function () {
            var hs_sat26D0Sy = new $hs.Data(1);
            hs_sat26D0Sy.data = [56576];
            return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_x26D0Ng, hs_sat26D0Sy);
        };
        var hs_sat26D0Sr = new $hs.Thunk();
        hs_sat26D0Sr.evaluateOnce = function () {
            var hs_sat26D0Sx = new $hs.Data(1);
            hs_sat26D0Sx.data = [56320];
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D0Sx, hs_x26D0Ng);
        };
        var hs_wild26D0Ss = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D0Sr, hs_sat26D0Sq);
        switch (hs_wild26D0Ss.tag) {
        case 1:
            if (hs_c26D0Nf.notEvaluated) {
                return hs_c26D0Nf.hscall();
            } else {
                return hs_c26D0Nf;
            }
        case 2:
            var hs_sat26D0Sp = new $hs.Thunk();
            hs_sat26D0Sp.evaluateOnce = function () {
                var hs_sat26D0Su = new $hs.Data(1);
                hs_sat26D0Su.data = [61184];
                var hs_sat26D0St = new $hs.Thunk();
                hs_sat26D0St.evaluateOnce = function () {
                    var hs_sat26D0Sw = new $hs.Data(1);
                    hs_sat26D0Sw.data = [56320];
                    var hs_sat26D0Sv = new $hs.Thunk();
                    hs_sat26D0Sv.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26D0Nf);
                    };
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D0Sv, hs_sat26D0Sw);
                };
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D0St, hs_sat26D0Su);
            };
            return $hs.modules.GHCziBase.hs_chr.hscall(hs_sat26D0Sp);
        }
    };
    this.hs_recoverDecode.evaluate = function (hs_cfm26D0NU, hs_input26D0Nu, hs_output26D0NF) {
        var hs_wild26D0NW = hs_input26D0Nu;
        if (hs_input26D0Nu.notEvaluated) {
            hs_wild26D0NW = hs_input26D0Nu.hscall();
        }
        var hs_rb26D0OS = hs_wild26D0NW.data[0];
        var hs_rb126D0OT = hs_wild26D0NW.data[1];
        var hs_rb326D0ND = hs_wild26D0NW.data[4];
        var hs_ir26D0NE = new $hs.Data(1);
        hs_ir26D0NE.data = [hs_rb326D0ND];
        var hs_wild126D0Oe = hs_output26D0NF;
        if (hs_output26D0NF.notEvaluated) {
            hs_wild126D0Oe = hs_output26D0NF.hscall();
        }
        var hs_rb526D0NO = hs_wild126D0Oe.data[0];
        var hs_rb626D0NP = hs_wild126D0Oe.data[1];
        var hs_rb926D0NS = hs_wild126D0Oe.data[5];
        var hs_oraw26D0NQ = new $hs.Data(1);
        hs_oraw26D0NQ.data = [hs_rb526D0NO, hs_rb626D0NP];
        var hs_ow26D0NT = new $hs.Data(1);
        hs_ow26D0NT.data = [hs_rb926D0NS];
        var hs_wild226D0SA = hs_cfm26D0NU;
        if (hs_cfm26D0NU.notEvaluated) {
            hs_wild226D0SA = hs_cfm26D0NU.hscall();
        }
        switch (hs_wild226D0SA.tag) {
        case 1:
            if (hs_ioezudecodingError25tcfz.notEvaluated) {
                return hs_ioezudecodingError25tcfz.hscall();
            } else {
                return hs_ioezudecodingError25tcfz;
            }
        case 2:
            var hs_sat26D0SH = new $hs.Thunk();
            hs_sat26D0SH.evaluateOnce = function () {
                var hs_wild326D0SI = hs_wild26D0NW;
                if (hs_wild26D0NW.notEvaluated) {
                    hs_wild326D0SI = hs_wild26D0NW.hscall();
                }
                var hs_rb1026D0O7 = hs_wild326D0SI.data[0];
                var hs_rb1126D0O8 = hs_wild326D0SI.data[1];
                var hs_ds226D0O9 = hs_wild326D0SI.data[2];
                var hs_rb1226D0Oa = hs_wild326D0SI.data[3];
                var hs_rb1426D0Oc = hs_wild326D0SI.data[5];
                var hs_sat26D0SK = new $hs.Data(1);
                hs_sat26D0SK.data = [1];
                var hs_tpl26D0SL = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir26D0NE, hs_sat26D0SK);
                var hs_tpl126D0Ob = hs_tpl26D0SL.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb1026D0O7, hs_rb1126D0O8, hs_ds226D0O9, hs_rb1226D0Oa, hs_tpl126D0Ob, hs_rb1426D0Oc];
                return $res;
            };
            var hs_sat26D0Sz = new $hs.Data(1);
            hs_sat26D0Sz.data = [hs_sat26D0SH, hs_wild126D0Oe];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0Sz);
        case 3:
            var hs_sat26D0SN = new $hs.Func(1);
            hs_sat26D0SN.evaluate = function (hs_owzq26D0OG) {
                var hs_sat26D0SP = new $hs.Thunk();
                hs_sat26D0SP.evaluateOnce = function () {
                    var hs_wild326D0SW = hs_wild126D0Oe;
                    if (hs_wild126D0Oe.notEvaluated) {
                        hs_wild326D0SW = hs_wild126D0Oe.hscall();
                    }
                    var hs_rb1026D0OJ = hs_wild326D0SW.data[0];
                    var hs_rb1126D0OK = hs_wild326D0SW.data[1];
                    var hs_ds226D0OL = hs_wild326D0SW.data[2];
                    var hs_rb1226D0OM = hs_wild326D0SW.data[3];
                    var hs_rb1326D0ON = hs_wild326D0SW.data[4];
                    var hs_tpl26D0SV = hs_owzq26D0OG;
                    if (hs_owzq26D0OG.notEvaluated) {
                        hs_tpl26D0SV = hs_owzq26D0OG.hscall();
                    }
                    var hs_tpl126D0OO = hs_tpl26D0SV.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D0OJ, hs_rb1126D0OK, hs_ds226D0OL, hs_rb1226D0OM, hs_rb1326D0ON, hs_tpl126D0OO];
                    return $res;
                };
                var hs_sat26D0SQ = new $hs.Thunk();
                hs_sat26D0SQ.evaluateOnce = function () {
                    var hs_wild326D0SR = hs_wild26D0NW;
                    if (hs_wild26D0NW.notEvaluated) {
                        hs_wild326D0SR = hs_wild26D0NW.hscall();
                    }
                    var hs_rb1026D0Os = hs_wild326D0SR.data[0];
                    var hs_rb1126D0Ot = hs_wild326D0SR.data[1];
                    var hs_ds226D0Ou = hs_wild326D0SR.data[2];
                    var hs_rb1226D0Ov = hs_wild326D0SR.data[3];
                    var hs_rb1426D0Ox = hs_wild326D0SR.data[5];
                    var hs_sat26D0ST = new $hs.Data(1);
                    hs_sat26D0ST.data = [1];
                    var hs_tpl26D0SU = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir26D0NE, hs_sat26D0ST);
                    var hs_tpl126D0Ow = hs_tpl26D0SU.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D0Os, hs_rb1126D0Ot, hs_ds226D0Ou, hs_rb1226D0Ov, hs_tpl126D0Ow, hs_rb1426D0Ox];
                    return $res;
                };
                var hs_sat26D0SO = new $hs.Data(1);
                hs_sat26D0SO.data = [hs_sat26D0SQ, hs_sat26D0SP];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0SO);
            };
            var hs_sat26D0SM = new $hs.Thunk();
            hs_sat26D0SM.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_oraw26D0NQ, hs_ow26D0NT, hs_unrepresentableChar25tcfp);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0SM, hs_sat26D0SN);
        case 4:
            var hs_sat26D0SZ = new $hs.Func(1);
            hs_sat26D0SZ.evaluate = function (hs_b26D0OX) {
                var hs_sat26D0T2 = new $hs.Func(1);
                hs_sat26D0T2.evaluate = function (hs_owzq26D0Pw) {
                    var hs_sat26D0Tc = new $hs.Thunk();
                    hs_sat26D0Tc.evaluateOnce = function () {
                        var hs_wild326D0Tj = hs_wild126D0Oe;
                        if (hs_wild126D0Oe.notEvaluated) {
                            hs_wild326D0Tj = hs_wild126D0Oe.hscall();
                        }
                        var hs_rb1026D0Pz = hs_wild326D0Tj.data[0];
                        var hs_rb1126D0PA = hs_wild326D0Tj.data[1];
                        var hs_ds226D0PB = hs_wild326D0Tj.data[2];
                        var hs_rb1226D0PC = hs_wild326D0Tj.data[3];
                        var hs_rb1326D0PD = hs_wild326D0Tj.data[4];
                        var hs_tpl26D0Ti = hs_owzq26D0Pw;
                        if (hs_owzq26D0Pw.notEvaluated) {
                            hs_tpl26D0Ti = hs_owzq26D0Pw.hscall();
                        }
                        var hs_tpl126D0PE = hs_tpl26D0Ti.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb1026D0Pz, hs_rb1126D0PA, hs_ds226D0PB, hs_rb1226D0PC, hs_rb1326D0PD, hs_tpl126D0PE];
                        return $res;
                    };
                    var hs_sat26D0Td = new $hs.Thunk();
                    hs_sat26D0Td.evaluateOnce = function () {
                        var hs_wild326D0Te = hs_wild26D0NW;
                        if (hs_wild26D0NW.notEvaluated) {
                            hs_wild326D0Te = hs_wild26D0NW.hscall();
                        }
                        var hs_rb1026D0Pi = hs_wild326D0Te.data[0];
                        var hs_rb1126D0Pj = hs_wild326D0Te.data[1];
                        var hs_ds226D0Pk = hs_wild326D0Te.data[2];
                        var hs_rb1226D0Pl = hs_wild326D0Te.data[3];
                        var hs_rb1426D0Pn = hs_wild326D0Te.data[5];
                        var hs_sat26D0Tg = new $hs.Data(1);
                        hs_sat26D0Tg.data = [1];
                        var hs_tpl26D0Th = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir26D0NE, hs_sat26D0Tg);
                        var hs_tpl126D0Pm = hs_tpl26D0Th.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb1026D0Pi, hs_rb1126D0Pj, hs_ds226D0Pk, hs_rb1226D0Pl, hs_tpl126D0Pm, hs_rb1426D0Pn];
                        return $res;
                    };
                    var hs_sat26D0Tb = new $hs.Data(1);
                    hs_sat26D0Tb.data = [hs_sat26D0Td, hs_sat26D0Tc];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0Tb);
                };
                var hs_sat26D0T1 = new $hs.Thunk();
                hs_sat26D0T1.evaluateOnce = function () {
                    var hs_sat26D0T3 = new $hs.Thunk();
                    hs_sat26D0T3.evaluateOnce = function () {
                        var hs_sat26D0T5 = new $hs.Thunk();
                        hs_sat26D0T5.evaluateOnce = function () {
                            var hs_sat26D0Ta = new $hs.Thunk();
                            hs_sat26D0Ta.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(128);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26D0Ta);
                        };
                        var hs_wild326D0T6 = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8, hs_b26D0OX, hs_sat26D0T5);
                        switch (hs_wild326D0T6.tag) {
                        case 1:
                            var hs_sat26D0T7 = new $hs.Thunk();
                            hs_sat26D0T7.evaluateOnce = function () {
                                var hs_sat26D0T9 = new $hs.Thunk();
                                hs_sat26D0T9.evaluateOnce = function () {
                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziNum.hs_zdfNumInt, hs_b26D0OX);
                                };
                                var hs_sat26D0T8 = new $hs.Data(1);
                                hs_sat26D0T8.data = [56320];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D0T8, hs_sat26D0T9);
                            };
                            return $hs.modules.GHCziBase.hs_chr.hscall(hs_sat26D0T7);
                        case 2:
                            var hs_sat26D0T4 = new $hs.Thunk();
                            hs_sat26D0T4.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziNum.hs_zdfNumInt, hs_b26D0OX);
                            };
                            return $hs.modules.GHCziBase.hs_chr.hscall(hs_sat26D0T4);
                        }
                    };
                    return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_oraw26D0NQ, hs_ow26D0NT, hs_sat26D0T3);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0T1, hs_sat26D0T2);
            };
            var hs_sat26D0SY = new $hs.Thunk();
            hs_sat26D0SY.evaluateOnce = function () {
                var hs_sat26D0T0 = new $hs.Data(1);
                hs_sat26D0T0.data = [hs_rb26D0OS, hs_rb126D0OT];
                return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_sat26D0T0, hs_ir26D0NE);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0SY, hs_sat26D0SZ);
        }
    };
    this.hs_recoverEncode.evaluate = function (hs_cfm26D0Qm, hs_input26D0PM, hs_output26D0Q1) {
        var hs_wild26D0Qo = hs_input26D0PM;
        if (hs_input26D0PM.notEvaluated) {
            hs_wild26D0Qo = hs_input26D0PM.hscall();
        }
        var hs_rb26D0PV = hs_wild26D0Qo.data[0];
        var hs_rb126D0PW = hs_wild26D0Qo.data[1];
        var hs_rb326D0PZ = hs_wild26D0Qo.data[4];
        var hs_iraw26D0PX = new $hs.Data(1);
        hs_iraw26D0PX.data = [hs_rb26D0PV, hs_rb126D0PW];
        var hs_ir26D0Q0 = new $hs.Data(1);
        hs_ir26D0Q0.data = [hs_rb326D0PZ];
        var hs_wild126D0QG = hs_output26D0Q1;
        if (hs_output26D0Q1.notEvaluated) {
            hs_wild126D0QG = hs_output26D0Q1.hscall();
        }
        var hs_rb526D0Qa = hs_wild126D0QG.data[0];
        var hs_rb626D0Qb = hs_wild126D0QG.data[1];
        var hs_rb926D0Qe = hs_wild126D0QG.data[5];
        var hs_oraw26D0Qc = new $hs.Data(1);
        hs_oraw26D0Qc.data = [hs_rb526D0Qa, hs_rb626D0Qb];
        var hs_ow26D0Qf = new $hs.Data(1);
        hs_ow26D0Qf.data = [hs_rb926D0Qe];
        var hs_sat26D0Ts = new $hs.Func(1);
        hs_sat26D0Ts.evaluate = function (hs_ds226D0Qi) {
            var hs_wild226D0Tv = hs_ds226D0Qi;
            if (hs_ds226D0Qi.notEvaluated) {
                hs_wild226D0Tv = hs_ds226D0Qi.hscall();
            }
            var hs_c26D0QI = hs_wild226D0Tv.data[0];
            var hs_irzq26D0Qw = hs_wild226D0Tv.data[1];
            var hs_wild326D0Tu = hs_cfm26D0Qm;
            if (hs_cfm26D0Qm.notEvaluated) {
                hs_wild326D0Tu = hs_cfm26D0Qm.hscall();
            }
            switch (hs_wild326D0Tu.tag) {
            case 1:
                if (hs_ioezuencodingError25tcfA.notEvaluated) {
                    return hs_ioezuencodingError25tcfA.hscall();
                } else {
                    return hs_ioezuencodingError25tcfA;
                }
            case 2:
                var hs_sat26D0Tw = new $hs.Thunk();
                hs_sat26D0Tw.evaluateOnce = function () {
                    var hs_wild426D0Ty = hs_wild26D0Qo;
                    if (hs_wild26D0Qo.notEvaluated) {
                        hs_wild426D0Ty = hs_wild26D0Qo.hscall();
                    }
                    var hs_rb1026D0Qz = hs_wild426D0Ty.data[0];
                    var hs_rb1126D0QA = hs_wild426D0Ty.data[1];
                    var hs_ds326D0QB = hs_wild426D0Ty.data[2];
                    var hs_rb1226D0QC = hs_wild426D0Ty.data[3];
                    var hs_rb1426D0QE = hs_wild426D0Ty.data[5];
                    var hs_tpl26D0Tx = hs_irzq26D0Qw;
                    if (hs_irzq26D0Qw.notEvaluated) {
                        hs_tpl26D0Tx = hs_irzq26D0Qw.hscall();
                    }
                    var hs_tpl126D0QD = hs_tpl26D0Tx.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D0Qz, hs_rb1126D0QA, hs_ds326D0QB, hs_rb1226D0QC, hs_tpl126D0QD, hs_rb1426D0QE];
                    return $res;
                };
                var hs_sat26D0Tt = new $hs.Data(1);
                hs_sat26D0Tt.data = [hs_sat26D0Tw, hs_wild126D0QG];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0Tt);
            case 3:
                var hs_sat26D0TB = new $hs.Data(1);
                hs_sat26D0TB.data = ["?"];
                var hs_wild426D0TC = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26D0QI, hs_sat26D0TB);
                switch (hs_wild426D0TC.tag) {
                case 1:
                    var hs_sat26D0TI = new $hs.Func(1);
                    hs_sat26D0TI.evaluate = function (hs_zuirzq26D0QP) {
                        var hs_sat26D0TK = new $hs.Data(1);
                        hs_sat26D0TK.data = [hs_wild26D0Qo, hs_wild126D0QG];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0TK);
                    };
                    var hs_sat26D0TH = new $hs.Thunk();
                    hs_sat26D0TH.evaluateOnce = function () {
                        var hs_sat26D0TJ = new $hs.Data(1);
                        hs_sat26D0TJ.data = ["?"];
                        return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_iraw26D0PX, hs_ir26D0Q0, hs_sat26D0TJ);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0TH, hs_sat26D0TI);
                case 2:
                    var hs_sat26D0TD = new $hs.Thunk();
                    hs_sat26D0TD.evaluateOnce = function () {
                        var hs_wild526D0TF = hs_wild26D0Qo;
                        if (hs_wild26D0Qo.notEvaluated) {
                            hs_wild526D0TF = hs_wild26D0Qo.hscall();
                        }
                        var hs_rb1026D0R0 = hs_wild526D0TF.data[0];
                        var hs_rb1126D0R1 = hs_wild526D0TF.data[1];
                        var hs_ds326D0R2 = hs_wild526D0TF.data[2];
                        var hs_rb1226D0R3 = hs_wild526D0TF.data[3];
                        var hs_rb1426D0R5 = hs_wild526D0TF.data[5];
                        var hs_tpl26D0TE = hs_irzq26D0Qw;
                        if (hs_irzq26D0Qw.notEvaluated) {
                            hs_tpl26D0TE = hs_irzq26D0Qw.hscall();
                        }
                        var hs_tpl126D0R4 = hs_tpl26D0TE.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb1026D0R0, hs_rb1126D0R1, hs_ds326D0R2, hs_rb1226D0R3, hs_tpl126D0R4, hs_rb1426D0R5];
                        return $res;
                    };
                    var hs_sat26D0TA = new $hs.Data(1);
                    hs_sat26D0TA.data = [hs_sat26D0TD, hs_wild126D0QG];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0TA);
                }
            case 4:
                var hs_x26D0R9 = new $hs.Thunk();
                hs_x26D0R9.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26D0QI);
                };
                var hs_sat26D0TM = new $hs.Thunk();
                hs_sat26D0TM.evaluateOnce = function () {
                    var hs_sat26D0U2 = new $hs.Data(1);
                    hs_sat26D0U2.data = [56576];
                    return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_x26D0R9, hs_sat26D0U2);
                };
                var hs_sat26D0TN = new $hs.Thunk();
                hs_sat26D0TN.evaluateOnce = function () {
                    var hs_sat26D0U1 = new $hs.Data(1);
                    hs_sat26D0U1.data = [56448];
                    return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D0U1, hs_x26D0R9);
                };
                var hs_wild426D0TO = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D0TN, hs_sat26D0TM);
                switch (hs_wild426D0TO.tag) {
                case 1:
                    if (hs_ioezuencodingError25tcfA.notEvaluated) {
                        return hs_ioezuencodingError25tcfA.hscall();
                    } else {
                        return hs_ioezuencodingError25tcfA;
                    }
                case 2:
                    var hs_sat26D0TP = new $hs.Thunk();
                    hs_sat26D0TP.evaluateOnce = function () {
                        var hs_sat26D0TS = new $hs.Thunk();
                        hs_sat26D0TS.evaluateOnce = function () {
                            var hs_wild526D0TX = hs_wild126D0QG;
                            if (hs_wild126D0QG.notEvaluated) {
                                hs_wild526D0TX = hs_wild126D0QG.hscall();
                            }
                            var hs_rb1026D0RH = hs_wild526D0TX.data[0];
                            var hs_rb1126D0RI = hs_wild526D0TX.data[1];
                            var hs_ds326D0RJ = hs_wild526D0TX.data[2];
                            var hs_rb1226D0RK = hs_wild526D0TX.data[3];
                            var hs_rb1326D0RL = hs_wild526D0TX.data[4];
                            var hs_sat26D0TZ = new $hs.Data(1);
                            hs_sat26D0TZ.data = [1];
                            var hs_tpl26D0U0 = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow26D0Qf, hs_sat26D0TZ);
                            var hs_tpl126D0RM = hs_tpl26D0U0.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb1026D0RH, hs_rb1126D0RI, hs_ds326D0RJ, hs_rb1226D0RK, hs_rb1326D0RL, hs_tpl126D0RM];
                            return $res;
                        };
                        var hs_sat26D0TT = new $hs.Thunk();
                        hs_sat26D0TT.evaluateOnce = function () {
                            var hs_wild526D0TV = hs_wild26D0Qo;
                            if (hs_wild26D0Qo.notEvaluated) {
                                hs_wild526D0TV = hs_wild26D0Qo.hscall();
                            }
                            var hs_rb1026D0Rq = hs_wild526D0TV.data[0];
                            var hs_rb1126D0Rr = hs_wild526D0TV.data[1];
                            var hs_ds326D0Rs = hs_wild526D0TV.data[2];
                            var hs_rb1226D0Rt = hs_wild526D0TV.data[3];
                            var hs_rb1426D0Rv = hs_wild526D0TV.data[5];
                            var hs_tpl26D0TU = hs_irzq26D0Qw;
                            if (hs_irzq26D0Qw.notEvaluated) {
                                hs_tpl26D0TU = hs_irzq26D0Qw.hscall();
                            }
                            var hs_tpl126D0Ru = hs_tpl26D0TU.data[0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb1026D0Rq, hs_rb1126D0Rr, hs_ds326D0Rs, hs_rb1226D0Rt, hs_tpl126D0Ru, hs_rb1426D0Rv];
                            return $res;
                        };
                        var hs_sat26D0TR = new $hs.Data(1);
                        hs_sat26D0TR.data = [hs_sat26D0TT, hs_sat26D0TS];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0TR);
                    };
                    var hs_sat26D0TL = new $hs.Thunk();
                    hs_sat26D0TL.evaluateOnce = function () {
                        var hs_sat26D0TQ = new $hs.Thunk();
                        hs_sat26D0TQ.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_x26D0R9);
                        };
                        return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D0Qc, hs_ow26D0Qf, hs_sat26D0TQ);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0TL, hs_sat26D0TP);
                }
            }
        };
        var hs_sat26D0Tl = new $hs.Thunk();
        hs_sat26D0Tl.evaluateOnce = function () {
            return $hs.modules.GHCziIOziBuffer.hs_readCharBuf.hscall(hs_iraw26D0PX, hs_ir26D0Q0);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0Tl, hs_sat26D0Ts);
    };
    this.hs_ErrorOnCodingFailure.data = [];
    this.hs_IgnoreCodingFailure.data = [];
    this.hs_TransliterateCodingFailure.data = [];
    this.hs_RoundtripFailure.data = [];
};
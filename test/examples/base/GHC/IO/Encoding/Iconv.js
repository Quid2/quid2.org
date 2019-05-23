
$hs.modules.GHCziIOziEncodingziIconv = new $hs.Module();
$hs.modules.GHCziIOziEncodingziIconv.dependencies = ["GHC.CString", "GHC.Unit", "GHC.Integer", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Classes", "GHC.IO", "GHC.IO.Buffer", "GHC.IO.Encoding.Failure", "GHC.IO.Encoding.Types", "GHC.List", "GHC.Ptr", "Data.Bits", "Foreign.C.Error", "Foreign.C.String", "Foreign.C.Types", "Foreign.Marshal.Utils", "Foreign.Storable"];
$hs.modules.GHCziIOziEncodingziIconv.initBeforeDependencies = function () {
    this.hs_mkIconvEncoding = new $hs.Func(2);
    this.hs_mkLocaleEncoding = new $hs.Func(1);
    this.hs_localeEncoding = new $hs.Thunk();
    this.hs_iconvEncoding = new $hs.Func(1);
    this.hs_mkIconvEncoding.notEvaluated = true;
    this.hs_mkIconvEncoding.evaluate = function (hs_cfm26D14t, hs_charset26D14g) {
        $hs.modules.GHCziIOziEncodingziIconv.loadDependencies();
        return this.evaluate(hs_cfm26D14t, hs_charset26D14g);
    };
    this.hs_mkLocaleEncoding.notEvaluated = true;
    this.hs_mkLocaleEncoding.evaluate = function (hs_cfm26D14A) {
        $hs.modules.GHCziIOziEncodingziIconv.loadDependencies();
        return this.evaluate(hs_cfm26D14A);
    };
    this.hs_localeEncoding.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncodingziIconv.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_iconvEncoding.notEvaluated = true;
    this.hs_iconvEncoding.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziIOziEncodingziIconv.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.GHCziIOziEncodingziIconv.initAfterDependencies = function () {
    this.hs_mkIconvEncoding.notEvaluated = false;
    this.hs_mkLocaleEncoding.notEvaluated = false;
    this.hs_iconvEncoding.notEvaluated = false;
    var hs_newIConv25tUyw = new $hs.Func(4);
    var hs_a25uCu5 = new $hs.Func(1);
    var hs_czulocaleEncoding25tUyj = new $hs.Func(1);
    var hs_sat26D157 = new $hs.Thunk();
    var hs_localeEncodingName25tUyp = new $hs.Thunk();
    var hs_sat26D158 = new $hs.Data(1);
    var hs_haskellChar25tUys = new $hs.Thunk();
    var hs_iconvRecode25tUyz = new $hs.Func(5);
    var hs_sat26D16y = new $hs.Data(1);
    var hs_charzushift25tUyt = new $hs.Thunk();
    var hs_iconvDecode25tUyx = new $hs.Func(3);
    var hs_iconvEncode25tUyy = new $hs.Func(3);
    var hs_sat26D16Q = new $hs.Thunk();
    hs_newIConv25tUyw.evaluate = function (hs_from26D0Zo, hs_to26D0Zr, hs_rec26D0ZV, hs_fn26D0ZT) {
        var hs_sat26D14E = new $hs.Func(1);
        hs_sat26D14E.evaluate = function (hs_fromzustr26D0Zz) {
            var hs_sat26D14G = new $hs.Func(1);
            hs_sat26D14G.evaluate = function (hs_tozustr26D0Zw) {
                var hs_sat26D14I = new $hs.Func(1);
                hs_sat26D14I.evaluate = function (hs_iconvt26D0ZS) {
                    var hs_sat26D14S = new $hs.Thunk();
                    hs_sat26D14S.evaluateOnce = function () {
                        var hs_sat26D153 = new $hs.Thunk();
                        hs_sat26D153.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziBase.hs_const, hs_sat26D153);
                    };
                    var hs_sat26D14T = new $hs.Thunk();
                    hs_sat26D14T.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                    };
                    var hs_sat26D14U = new $hs.Thunk();
                    hs_sat26D14U.evaluateOnce = function () {
                        var hs_sat26D14X = new $hs.Thunk();
                        hs_sat26D14X.evaluateOnce = function () {
                            var hs_ds26D150 = hs_iconvt26D0ZS;
                            if (hs_iconvt26D0ZS.notEvaluated) {
                                hs_ds26D150 = hs_iconvt26D0ZS.hscall();
                            }
                            var hs_ds126D102 = hs_ds26D150.data[0];
                            var hs_sat26D14Z = new $hs.Func(1);
                            hs_sat26D14Z.evaluate = function (hs_ds226D103) {
                                var hs_wild26D152 = [hs_ds226D103, hs_iconv_close(hs_ds126D102)];
                                var hs_ds326D108 = hs_wild26D152[0];
                                var hs_ds426D109 = hs_wild26D152[1];
                                var hs_sat26D151 = new $hs.Data(1);
                                hs_sat26D151.data = [hs_ds426D109];
                                return [hs_ds326D108, hs_sat26D151];
                            };
                            if (hs_sat26D14Z.notEvaluated) {
                                return hs_sat26D14Z.hscall();
                            } else {
                                return hs_sat26D14Z;
                            }
                        };
                        var hs_sat26D14W = new $hs.Thunk();
                        hs_sat26D14W.evaluateOnce = function () {
                            var hs_sat26D14Y = new $hs.Thunk();
                            hs_sat26D14Y.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Iconv.close\x00");
                            };
                            return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26D14Y);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D14W, hs_sat26D14X);
                    };
                    var hs_sat26D14V = new $hs.Thunk();
                    hs_sat26D14V.evaluateOnce = function () {
                        return hs_fn26D0ZT.hscall(hs_iconvt26D0ZS);
                    };
                    var hs_sat26D14R = new $hs.Data(1);
                    hs_sat26D14R.data = [hs_sat26D14V, hs_rec26D0ZV, hs_sat26D14U, hs_sat26D14T, hs_sat26D14S];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D14R);
                };
                var hs_sat26D14H = new $hs.Thunk();
                hs_sat26D14H.evaluateOnce = function () {
                    var hs_sat26D14K = new $hs.Thunk();
                    hs_sat26D14K.evaluateOnce = function () {
                        var hs_ds26D14O = hs_tozustr26D0Zw;
                        if (hs_tozustr26D0Zw.notEvaluated) {
                            hs_ds26D14O = hs_tozustr26D0Zw.hscall();
                        }
                        var hs_ds126D0ZE = hs_ds26D14O.data[0];
                        var hs_ds226D14N = hs_fromzustr26D0Zz;
                        if (hs_fromzustr26D0Zz.notEvaluated) {
                            hs_ds226D14N = hs_fromzustr26D0Zz.hscall();
                        }
                        var hs_ds326D0ZF = hs_ds226D14N.data[0];
                        var hs_sat26D14M = new $hs.Func(1);
                        hs_sat26D14M.evaluate = function (hs_ds426D0ZG) {
                            var hs_wild26D14Q = [hs_ds426D0ZG, hs_iconv_open(hs_ds126D0ZE, hs_ds326D0ZF)];
                            var hs_ds526D0ZL = hs_wild26D14Q[0];
                            var hs_ds626D0ZM = hs_wild26D14Q[1];
                            var hs_sat26D14P = new $hs.Data(1);
                            hs_sat26D14P.data = [hs_ds626D0ZM];
                            return [hs_ds526D0ZL, hs_sat26D14P];
                        };
                        if (hs_sat26D14M.notEvaluated) {
                            return hs_sat26D14M.hscall();
                        } else {
                            return hs_sat26D14M;
                        }
                    };
                    var hs_sat26D14J = new $hs.Thunk();
                    hs_sat26D14J.evaluateOnce = function () {
                        var hs_sat26D14L = new $hs.Thunk();
                        hs_sat26D14L.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("mkTextEncoding\x00");
                        };
                        return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCLong, hs_sat26D14L);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D14J, hs_sat26D14K);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D14H, hs_sat26D14I);
            };
            var hs_sat26D14F = new $hs.Thunk();
            hs_sat26D14F.evaluateOnce = function () {
                return $hs.modules.ForeignziCziString.hs_withCAString.hscall(hs_to26D0Zr);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D14F, hs_sat26D14G);
        };
        var hs_sat26D14D = new $hs.Thunk();
        hs_sat26D14D.evaluateOnce = function () {
            return $hs.modules.ForeignziCziString.hs_withCAString.hscall(hs_from26D0Zo);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D14D, hs_sat26D14E);
    };
    hs_a25uCu5.evaluate = function (hs_ds26D10o) {
        var hs_wild26D155 = [hs_ds26D10o, localeEncoding()];
        var hs_ds126D10t = hs_wild26D155[0];
        var hs_ds226D10u = hs_wild26D155[1];
        var hs_sat26D154 = new $hs.Data(1);
        hs_sat26D154.data = [hs_ds226D10u];
        return [hs_ds126D10t, hs_sat26D154];
    };
    hs_czulocaleEncoding25tUyj.evaluate = function (hs_eta1cW6l3) {
        return hs_a25uCu5.hscall(hs_eta1cW6l3);
    };
    hs_sat26D157.evaluateOnce = function () {
        var hs_sat26D156 = new $hs.Func(1);
        hs_sat26D156.evaluate = function (hs_cstr26D10x) {
            return $hs.modules.ForeignziCziString.hs_peekCAString.hscall(hs_cstr26D10x);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_czulocaleEncoding25tUyj, hs_sat26D156);
    };
    hs_localeEncodingName25tUyp.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafePerformIO, hs_sat26D157);
    };
    hs_sat26D158.data = [2];
    hs_haskellChar25tUys.evaluateOnce = function () {
        var hs_wild26D159 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, $hs.modules.GHCziIOziBuffer.hs_charSizze, hs_sat26D158);
        switch (hs_wild26D159.tag) {
        case 1:
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("UTF-32LE\x00");
        case 2:
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("UTF-16LE\x00");
        }
    };
    hs_iconvRecode25tUyz.evaluate = function (hs_iconvzut26D11J, hs_input26D10H, hs_iscale26D11o, hs_output26D10V, hs_oscale26D11u) {
        var hs_wild26D12L = hs_input26D10H;
        if (hs_input26D10H.notEvaluated) {
            hs_wild26D12L = hs_input26D10H.hscall();
        }
        var hs_rb26D11g = hs_wild26D12L.data[0];
        var hs_rb126D11h = hs_wild26D12L.data[1];
        var hs_rb326D10Q = hs_wild26D12L.data[4];
        var hs_rb426D10T = hs_wild26D12L.data[5];
        var hs_ir26D10R = new $hs.Data(1);
        hs_ir26D10R.data = [hs_rb326D10Q];
        var hs_iw26D10U = new $hs.Data(1);
        hs_iw26D10U.data = [hs_rb426D10T];
        var hs_wild126D12p = hs_output26D10V;
        if (hs_output26D10V.notEvaluated) {
            hs_wild126D12p = hs_output26D10V.hscall();
        }
        var hs_rb526D114 = hs_wild126D12p.data[0];
        var hs_rb626D115 = hs_wild126D12p.data[1];
        var hs_rb726D11b = hs_wild126D12p.data[3];
        var hs_rb926D118 = hs_wild126D12p.data[5];
        var hs_oraw26D116 = new $hs.Data(1);
        hs_oraw26D116.data = [hs_rb526D114, hs_rb626D115];
        var hs_ow26D119 = new $hs.Data(1);
        hs_ow26D119.data = [hs_rb926D118];
        var hs_os26D11c = new $hs.Data(1);
        hs_os26D11c.data = [hs_rb726D11b];
        var hs_sat26D15f = new $hs.Thunk();
        hs_sat26D15f.evaluateOnce = function () {
            var hs_sat26D15h = new $hs.Thunk();
            hs_sat26D15h.evaluateOnce = function () {
                var hs_sat26D15j = new $hs.Thunk();
                hs_sat26D15j.evaluateOnce = function () {
                    var hs_sat26D15l = new $hs.Func(1);
                    hs_sat26D15l.evaluate = function (hs_piraw26D11n) {
                        var hs_sat26D15o = new $hs.Func(1);
                        hs_sat26D15o.evaluate = function (hs_poraw26D11t) {
                            var hs_sat26D15q = new $hs.Func(1);
                            hs_sat26D15q.evaluate = function (hs_pzuinbuf26D11M) {
                                var hs_sat26D15u = new $hs.Func(1);
                                hs_sat26D15u.evaluate = function (hs_pzuoutbuf26D11S) {
                                    var hs_sat26D15y = new $hs.Func(1);
                                    hs_sat26D15y.evaluate = function (hs_pzuinleft26D11P) {
                                        var hs_sat26D15D = new $hs.Func(1);
                                        hs_sat26D15D.evaluate = function (hs_pzuoutleft26D11V) {
                                            var hs_sat26D15I = new $hs.Func(1);
                                            hs_sat26D15I.evaluate = function (hs_res26D13i) {
                                                var hs_sat26D15S = new $hs.Func(1);
                                                hs_sat26D15S.evaluate = function (hs_newzuinleft26D12H) {
                                                    var hs_sat26D15U = new $hs.Func(1);
                                                    hs_sat26D15U.evaluate = function (hs_newzuoutleft26D12l) {
                                                        var hs_newzuoutleftzq26D12n = new $hs.Thunk();
                                                        hs_newzuoutleftzq26D12n.evaluateOnce = function () {
                                                            var hs_sat26D16x = new $hs.Thunk();
                                                            hs_sat26D16x.evaluateOnce = function () {
                                                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCSizze, $hs.modules.GHCziNum.hs_zdfNumInt, hs_newzuoutleft26D12l);
                                                            };
                                                            return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26D16x, hs_oscale26D11u);
                                                        };
                                                        var hs_newzuoutput26D12F = new $hs.Thunk();
                                                        hs_newzuoutput26D12F.evaluateOnce = function () {
                                                            var hs_wild226D16u = hs_wild126D12p;
                                                            if (hs_wild126D12p.notEvaluated) {
                                                                hs_wild226D16u = hs_wild126D12p.hscall();
                                                            }
                                                            var hs_rb1026D12z = hs_wild226D16u.data[0];
                                                            var hs_rb1126D12A = hs_wild226D16u.data[1];
                                                            var hs_ds226D12B = hs_wild226D16u.data[2];
                                                            var hs_rb1226D12C = hs_wild226D16u.data[3];
                                                            var hs_rb1326D12D = hs_wild226D16u.data[4];
                                                            var hs_tpl26D16w = $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_os26D11c, hs_newzuoutleftzq26D12n);
                                                            var hs_tpl126D12E = hs_tpl26D16w.data[0];
                                                            var $res = new $hs.Data(1);
                                                            $res.data = [hs_rb1026D12z, hs_rb1126D12A, hs_ds226D12B, hs_rb1226D12C, hs_rb1326D12D, hs_tpl126D12E];
                                                            return $res;
                                                        };
                                                        var hs_newzuinput26D13e = new $hs.Thunk();
                                                        hs_newzuinput26D13e.evaluateOnce = function () {
                                                            var hs_sat26D16m = new $hs.Thunk();
                                                            hs_sat26D16m.evaluateOnce = function () {
                                                                var hs_sat26D16t = new $hs.Thunk();
                                                                hs_sat26D16t.evaluateOnce = function () {
                                                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                                                };
                                                                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_sat26D16t);
                                                            };
                                                            var hs_wild226D16n = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCSizze, hs_newzuinleft26D12H, hs_sat26D16m);
                                                            switch (hs_wild226D16n.tag) {
                                                            case 1:
                                                                var hs_wild326D16o = hs_wild26D12L;
                                                                if (hs_wild26D12L.notEvaluated) {
                                                                    hs_wild326D16o = hs_wild26D12L.hscall();
                                                                }
                                                                var hs_rb1026D12X = hs_wild326D16o.data[0];
                                                                var hs_rb1126D12Y = hs_wild326D16o.data[1];
                                                                var hs_ds226D12Z = hs_wild326D16o.data[2];
                                                                var hs_rb1226D130 = hs_wild326D16o.data[3];
                                                                var hs_rb1426D132 = hs_wild326D16o.data[5];
                                                                var hs_sat26D16q = new $hs.Thunk();
                                                                hs_sat26D16q.evaluateOnce = function () {
                                                                    var hs_sat26D16s = new $hs.Thunk();
                                                                    hs_sat26D16s.evaluateOnce = function () {
                                                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCSizze, $hs.modules.GHCziNum.hs_zdfNumInt, hs_newzuinleft26D12H);
                                                                    };
                                                                    return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26D16s, hs_iscale26D11o);
                                                                };
                                                                var hs_tpl26D16r = $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_iw26D10U, hs_sat26D16q);
                                                                var hs_tpl126D131 = hs_tpl26D16r.data[0];
                                                                var $res = new $hs.Data(1);
                                                                $res.data = [hs_rb1026D12X, hs_rb1126D12Y, hs_ds226D12Z, hs_rb1226D130, hs_tpl126D131, hs_rb1426D132];
                                                                return $res;
                                                            case 2:
                                                                var hs_wild326D16l = hs_wild26D12L;
                                                                if (hs_wild26D12L.notEvaluated) {
                                                                    hs_wild326D16l = hs_wild26D12L.hscall();
                                                                }
                                                                var hs_rb1026D13a = hs_wild326D16l.data[0];
                                                                var hs_rb1126D13b = hs_wild326D16l.data[1];
                                                                var hs_ds226D13c = hs_wild326D16l.data[2];
                                                                var hs_rb1226D13d = hs_wild326D16l.data[3];
                                                                var $res = new $hs.Data(1);
                                                                $res.data = [hs_rb1026D13a, hs_rb1126D13b, hs_ds226D13c, hs_rb1226D13d, 0, 0];
                                                                return $res;
                                                            }
                                                        };
                                                        var hs_sat26D15W = new $hs.Thunk();
                                                        hs_sat26D15W.evaluateOnce = function () {
                                                            var hs_sat26D15Y = new $hs.Thunk();
                                                            hs_sat26D15Y.evaluateOnce = function () {
                                                                var hs_sat26D160 = new $hs.Thunk();
                                                                hs_sat26D160.evaluateOnce = function () {
                                                                    var hs_sat26D162 = new $hs.Thunk();
                                                                    hs_sat26D162.evaluateOnce = function () {
                                                                        var hs_sat26D16h = new $hs.Thunk();
                                                                        hs_sat26D16h.evaluateOnce = function () {
                                                                            var hs_sat26D16i = new $hs.Thunk();
                                                                            hs_sat26D16i.evaluateOnce = function () {
                                                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                                                            };
                                                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_sat26D16i);
                                                                        };
                                                                        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_sat26D16h);
                                                                    };
                                                                    var hs_wild226D163 = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCSizze, hs_res26D13i, hs_sat26D162);
                                                                    switch (hs_wild226D163.tag) {
                                                                    case 1:
                                                                        var hs_sat26D164 = new $hs.Func(1);
                                                                        hs_sat26D164.evaluate = function (hs_errno26D13o) {
                                                                            var hs_wild326D166 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26D13o, $hs.modules.ForeignziCziError.hs_e2BIG);
                                                                            switch (hs_wild326D166.tag) {
                                                                            case 1:
                                                                                var hs_wild426D168 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26D13o, $hs.modules.ForeignziCziError.hs_eINVAL);
                                                                                switch (hs_wild426D168.tag) {
                                                                                case 1:
                                                                                    var hs_wild526D16a = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26D13o, $hs.modules.ForeignziCziError.hs_eILSEQ);
                                                                                    switch (hs_wild526D16a.tag) {
                                                                                    case 1:
                                                                                        var hs_sat26D16f = new $hs.Thunk();
                                                                                        hs_sat26D16f.evaluateOnce = function () {
                                                                                            var hs_sat26D16g = new $hs.Thunk();
                                                                                            hs_sat26D16g.evaluateOnce = function () {
                                                                                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("iconvRecoder\x00");
                                                                                            };
                                                                                            return $hs.modules.ForeignziCziError.hs_throwErrno.hscall(hs_sat26D16g);
                                                                                        };
                                                                                        var hs_sat26D16e = new $hs.Thunk();
                                                                                        hs_sat26D16e.evaluateOnce = function () {
                                                                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                                                                        };
                                                                                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D16e, hs_sat26D16f);
                                                                                    case 2:
                                                                                        var hs_sat26D16b = new $hs.Thunk();
                                                                                        hs_sat26D16b.evaluateOnce = function () {
                                                                                            var hs_sat26D16c = new $hs.Data(1);
                                                                                            hs_sat26D16c.data = [0];
                                                                                            var hs_wild626D16d = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_newzuoutleftzq26D12n, hs_sat26D16c);
                                                                                            switch (hs_wild626D16d.tag) {
                                                                                            case 1:
                                                                                                var $res = new $hs.Data(3);
                                                                                                $res.data = [];
                                                                                                return $res;
                                                                                            case 2:
                                                                                                var $res = new $hs.Data(2);
                                                                                                $res.data = [];
                                                                                                return $res;
                                                                                            }
                                                                                        };
                                                                                        var hs_sat26D169 = new $hs.Data(1);
                                                                                        hs_sat26D169.data = [hs_sat26D16b, hs_newzuinput26D13e, hs_newzuoutput26D12F];
                                                                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D169);
                                                                                    }
                                                                                case 2:
                                                                                    var hs_sat26D167 = new $hs.Data(1);
                                                                                    hs_sat26D167.data = [$hs.modules.GHCziIOziEncodingziTypes.hs_InputUnderflow, hs_newzuinput26D13e, hs_newzuoutput26D12F];
                                                                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D167);
                                                                                }
                                                                            case 2:
                                                                                var hs_sat26D165 = new $hs.Data(1);
                                                                                hs_sat26D165.data = [$hs.modules.GHCziIOziEncodingziTypes.hs_OutputUnderflow, hs_newzuinput26D13e, hs_newzuoutput26D12F];
                                                                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D165);
                                                                            }
                                                                        };
                                                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.ForeignziCziError.hs_getErrno, hs_sat26D164);
                                                                    case 2:
                                                                        var hs_sat26D161 = new $hs.Data(1);
                                                                        hs_sat26D161.data = [$hs.modules.GHCziIOziEncodingziTypes.hs_InputUnderflow, hs_newzuinput26D13e, hs_newzuoutput26D12F];
                                                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D161);
                                                                    }
                                                                };
                                                                var hs_sat26D15Z = new $hs.Thunk();
                                                                hs_sat26D15Z.evaluateOnce = function () {
                                                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                                                };
                                                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D15Z, hs_sat26D160);
                                                            };
                                                            var hs_sat26D15X = new $hs.Thunk();
                                                            hs_sat26D15X.evaluateOnce = function () {
                                                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                                            };
                                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D15X, hs_sat26D15Y);
                                                        };
                                                        var hs_sat26D15V = new $hs.Thunk();
                                                        hs_sat26D15V.evaluateOnce = function () {
                                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                                        };
                                                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D15V, hs_sat26D15W);
                                                    };
                                                    var hs_sat26D15T = new $hs.Thunk();
                                                    hs_sat26D15T.evaluateOnce = function () {
                                                        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCSizze, hs_pzuoutleft26D11V);
                                                    };
                                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D15T, hs_sat26D15U);
                                                };
                                                var hs_sat26D15R = new $hs.Thunk();
                                                hs_sat26D15R.evaluateOnce = function () {
                                                    return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCSizze, hs_pzuinleft26D11P);
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D15R, hs_sat26D15S);
                                            };
                                            var hs_sat26D15H = new $hs.Thunk();
                                            hs_sat26D15H.evaluateOnce = function () {
                                                var hs_ds226D15O = hs_iconvzut26D11J;
                                                if (hs_iconvzut26D11J.notEvaluated) {
                                                    hs_ds226D15O = hs_iconvzut26D11J.hscall();
                                                }
                                                var hs_ds326D120 = hs_ds226D15O.data[0];
                                                var hs_ds426D15N = hs_pzuinbuf26D11M;
                                                if (hs_pzuinbuf26D11M.notEvaluated) {
                                                    hs_ds426D15N = hs_pzuinbuf26D11M.hscall();
                                                }
                                                var hs_ds526D121 = hs_ds426D15N.data[0];
                                                var hs_ds626D15M = hs_pzuinleft26D11P;
                                                if (hs_pzuinleft26D11P.notEvaluated) {
                                                    hs_ds626D15M = hs_pzuinleft26D11P.hscall();
                                                }
                                                var hs_ds726D122 = hs_ds626D15M.data[0];
                                                var hs_ds826D15L = hs_pzuoutbuf26D11S;
                                                if (hs_pzuoutbuf26D11S.notEvaluated) {
                                                    hs_ds826D15L = hs_pzuoutbuf26D11S.hscall();
                                                }
                                                var hs_ds926D123 = hs_ds826D15L.data[0];
                                                var hs_ds1026D15K = hs_pzuoutleft26D11V;
                                                if (hs_pzuoutleft26D11V.notEvaluated) {
                                                    hs_ds1026D15K = hs_pzuoutleft26D11V.hscall();
                                                }
                                                var hs_ds1126D124 = hs_ds1026D15K.data[0];
                                                var hs_sat26D15J = new $hs.Func(1);
                                                hs_sat26D15J.evaluate = function (hs_ds1226D125) {
                                                    var hs_wild226D15Q = [hs_ds1226D125, hs_iconv(hs_ds326D120, hs_ds526D121, hs_ds726D122, hs_ds926D123, hs_ds1126D124)];
                                                    var hs_ds1326D12a = hs_wild226D15Q[0];
                                                    var hs_ds1426D12b = hs_wild226D15Q[1];
                                                    var hs_sat26D15P = new $hs.Data(1);
                                                    hs_sat26D15P.data = [hs_ds1426D12b];
                                                    return [hs_ds1326D12a, hs_sat26D15P];
                                                };
                                                if (hs_sat26D15J.notEvaluated) {
                                                    return hs_sat26D15J.hscall();
                                                } else {
                                                    return hs_sat26D15J;
                                                }
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D15H, hs_sat26D15I);
                                        };
                                        var hs_sat26D15C = new $hs.Thunk();
                                        hs_sat26D15C.evaluateOnce = function () {
                                            var hs_sat26D15E = new $hs.Thunk();
                                            hs_sat26D15E.evaluateOnce = function () {
                                                var hs_sat26D15F = new $hs.Thunk();
                                                hs_sat26D15F.evaluateOnce = function () {
                                                    var hs_sat26D15G = new $hs.Thunk();
                                                    hs_sat26D15G.evaluateOnce = function () {
                                                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_os26D11c, hs_ow26D119);
                                                    };
                                                    return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26D15G, hs_oscale26D11u);
                                                };
                                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_sat26D15F);
                                            };
                                            return $hs.modules.ForeignziMarshalziUtils.hs_with.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCSizze, hs_sat26D15E);
                                        };
                                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D15C, hs_sat26D15D);
                                    };
                                    var hs_sat26D15x = new $hs.Thunk();
                                    hs_sat26D15x.evaluateOnce = function () {
                                        var hs_sat26D15z = new $hs.Thunk();
                                        hs_sat26D15z.evaluateOnce = function () {
                                            var hs_sat26D15A = new $hs.Thunk();
                                            hs_sat26D15A.evaluateOnce = function () {
                                                var hs_sat26D15B = new $hs.Thunk();
                                                hs_sat26D15B.evaluateOnce = function () {
                                                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_iw26D10U, hs_ir26D10R);
                                                };
                                                return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26D15B, hs_iscale26D11o);
                                            };
                                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_sat26D15A);
                                        };
                                        return $hs.modules.ForeignziMarshalziUtils.hs_with.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCSizze, hs_sat26D15z);
                                    };
                                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D15x, hs_sat26D15y);
                                };
                                var hs_sat26D15t = new $hs.Thunk();
                                hs_sat26D15t.evaluateOnce = function () {
                                    var hs_sat26D15v = new $hs.Thunk();
                                    hs_sat26D15v.evaluateOnce = function () {
                                        var hs_sat26D15w = new $hs.Thunk();
                                        hs_sat26D15w.evaluateOnce = function () {
                                            return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_ow26D119, hs_oscale26D11u);
                                        };
                                        return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_poraw26D11t, hs_sat26D15w);
                                    };
                                    return $hs.modules.ForeignziMarshalziUtils.hs_with.hscall($hs.modules.ForeignziStorable.hs_zdfStorablePtr, hs_sat26D15v);
                                };
                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D15t, hs_sat26D15u);
                            };
                            var hs_sat26D15p = new $hs.Thunk();
                            hs_sat26D15p.evaluateOnce = function () {
                                var hs_sat26D15r = new $hs.Thunk();
                                hs_sat26D15r.evaluateOnce = function () {
                                    var hs_sat26D15s = new $hs.Thunk();
                                    hs_sat26D15s.evaluateOnce = function () {
                                        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_ir26D10R, hs_iscale26D11o);
                                    };
                                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_piraw26D11n, hs_sat26D15s);
                                };
                                return $hs.modules.ForeignziMarshalziUtils.hs_with.hscall($hs.modules.ForeignziStorable.hs_zdfStorablePtr, hs_sat26D15r);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D15p, hs_sat26D15q);
                        };
                        var hs_sat26D15n = new $hs.Thunk();
                        hs_sat26D15n.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_withRawBuffer.hscall(hs_oraw26D116);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D15n, hs_sat26D15o);
                    };
                    var hs_sat26D15k = new $hs.Thunk();
                    hs_sat26D15k.evaluateOnce = function () {
                        var hs_sat26D15m = new $hs.Data(1);
                        hs_sat26D15m.data = [hs_rb26D11g, hs_rb126D11h];
                        return $hs.modules.GHCziIOziBuffer.hs_withRawBuffer.hscall(hs_sat26D15m);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D15k, hs_sat26D15l);
                };
                var hs_sat26D15i = new $hs.Thunk();
                hs_sat26D15i.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D15i, hs_sat26D15j);
            };
            var hs_sat26D15g = new $hs.Thunk();
            hs_sat26D15g.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D15g, hs_sat26D15h);
        };
        var hs_sat26D15a = new $hs.Thunk();
        hs_sat26D15a.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D15a, hs_sat26D15f);
    };
    hs_sat26D16y.data = [2];
    hs_charzushift25tUyt.evaluateOnce = function () {
        var hs_wild26D16z = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, $hs.modules.GHCziIOziBuffer.hs_charSizze, hs_sat26D16y);
        switch (hs_wild26D16z.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [2];
            return $res;
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [1];
            return $res;
        }
    };
    hs_iconvDecode25tUyx.evaluate = function (hs_iconvzut26D13X, hs_ibuf26D13Y, hs_obuf26D140) {
        var hs_sat26D16A = new $hs.Data(1);
        hs_sat26D16A.data = [0];
        return hs_iconvRecode25tUyz.hscall(hs_iconvzut26D13X, hs_ibuf26D13Y, hs_sat26D16A, hs_obuf26D140, hs_charzushift25tUyt);
    };
    hs_iconvEncode25tUyy.evaluate = function (hs_iconvzut26D144, hs_ibuf26D145, hs_obuf26D146) {
        var hs_sat26D16B = new $hs.Data(1);
        hs_sat26D16B.data = [0];
        return hs_iconvRecode25tUyz.hscall(hs_iconvzut26D144, hs_ibuf26D145, hs_charzushift25tUyt, hs_obuf26D146, hs_sat26D16B);
    };
    this.hs_mkIconvEncoding.evaluate = function (hs_cfm26D14t, hs_charset26D14g) {
        var hs_ds26D14h = new $hs.Thunk();
        hs_ds26D14h.evaluateOnce = function () {
            var hs_ds126D14c = new $hs.Data(1);
            hs_ds126D14c.data = ["/"];
            var hs_sat26D16O = new $hs.Func(1);
            hs_sat26D16O.evaluate = function (hs_ds226D14e) {
                return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_ds226D14e, hs_ds126D14c);
            };
            return $hs.modules.GHCziList.hs_span.hscall(hs_sat26D16O, hs_charset26D14g);
        };
        var hs_sat26D16D = new $hs.Thunk();
        hs_sat26D16D.evaluateOnce = function () {
            var hs_sat26D16N = new $hs.Thunk();
            hs_sat26D16N.evaluateOnce = function () {
                return $hs.modules.GHCziIOziEncodingziFailure.hs_recoverEncode.hscall(hs_cfm26D14t);
            };
            return hs_newIConv25tUyw.hscall(hs_haskellChar25tUys, hs_charset26D14g, hs_sat26D16N, hs_iconvEncode25tUyy);
        };
        var hs_sat26D16E = new $hs.Thunk();
        hs_sat26D16E.evaluateOnce = function () {
            var hs_sat26D16G = new $hs.Thunk();
            hs_sat26D16G.evaluateOnce = function () {
                return $hs.modules.GHCziIOziEncodingziFailure.hs_recoverDecode.hscall(hs_cfm26D14t);
            };
            var hs_sat26D16H = new $hs.Thunk();
            hs_sat26D16H.evaluateOnce = function () {
                var hs_sat26D16K = new $hs.Thunk();
                hs_sat26D16K.evaluateOnce = function () {
                    var hs_wild26D16M = hs_ds26D14h;
                    if (hs_ds26D14h.notEvaluated) {
                        hs_wild26D16M = hs_ds26D14h.hscall();
                    }
                    var hs_suffix26D14q = hs_wild26D16M.data[1];
                    if (hs_suffix26D14q.notEvaluated) {
                        return hs_suffix26D14q.hscall();
                    } else {
                        return hs_suffix26D14q;
                    }
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_haskellChar25tUys, hs_sat26D16K);
            };
            var hs_sat26D16F = new $hs.Thunk();
            hs_sat26D16F.evaluateOnce = function () {
                var hs_wild26D16J = hs_ds26D14h;
                if (hs_ds26D14h.notEvaluated) {
                    hs_wild26D16J = hs_ds26D14h.hscall();
                }
                var hs_rawzucharset26D14l = hs_wild26D16J.data[0];
                if (hs_rawzucharset26D14l.notEvaluated) {
                    return hs_rawzucharset26D14l.hscall();
                } else {
                    return hs_rawzucharset26D14l;
                }
            };
            return hs_newIConv25tUyw.hscall(hs_sat26D16F, hs_sat26D16H, hs_sat26D16G, hs_iconvDecode25tUyx);
        };
        var hs_sat26D16C = new $hs.Data(1);
        hs_sat26D16C.data = [hs_charset26D14g, hs_sat26D16E, hs_sat26D16D];
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D16C);
    };
    this.hs_mkLocaleEncoding.evaluate = function (hs_cfm26D14A) {
        var hs_sat26D16P = new $hs.Thunk();
        hs_sat26D16P.evaluateOnce = function () {
            return $hs.modules.GHCziIOziEncodingziIconv.hs_mkIconvEncoding.hscall(hs_cfm26D14A, hs_localeEncodingName25tUyp);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafePerformIO, hs_sat26D16P);
    };
    hs_sat26D16Q.evaluateOnce = function () {
        return $hs.modules.GHCziIOziEncodingziIconv.hs_mkIconvEncoding.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_ErrorOnCodingFailure, hs_localeEncodingName25tUyp);
    };
    this.hs_localeEncoding.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafePerformIO, hs_sat26D16Q);
    };
    this.hs_iconvEncoding.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.GHCziIOziEncodingziIconv.hs_mkIconvEncoding.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_ErrorOnCodingFailure, hs_eta1cW6l3);
    };
};
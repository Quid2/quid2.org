
$hs.modules.GHCziIOziEncodingziIconv = new $hs.Module();
$hs.modules.GHCziIOziEncodingziIconv.dependencies = ["GHC.Unit", "GHC.Integer", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Classes", "GHC.IO", "GHC.IO.Buffer", "GHC.Ptr", "Data.Bits", "Foreign.C.Error", "Foreign.C.String", "Foreign.C.Types", "Foreign.Marshal.Utils", "Foreign.Storable"];
$hs.modules.GHCziIOziEncodingziIconv.initBeforeDependencies = function () {
    this.hs_mkTextEncoding = new $hs.Func(1);
    this.hs_latin1 = new $hs.Thunk();
    this.hs_utf8 = new $hs.Thunk();
    this.hs_utf16 = new $hs.Thunk();
    this.hs_utf16le = new $hs.Thunk();
    this.hs_utf16be = new $hs.Thunk();
    this.hs_utf32 = new $hs.Thunk();
    this.hs_utf32le = new $hs.Thunk();
    this.hs_utf32be = new $hs.Thunk();
    this.hs_localeEncoding = new $hs.Thunk();
    this.hs_mkTextEncoding.notEvaluated = true;
    this.hs_mkTextEncoding.evaluate = function (hs_charset26DsbM) {
        $hs.modules.GHCziIOziEncodingziIconv.loadDependencies();
        return this.evaluate(hs_charset26DsbM);
    };
    this.hs_latin1.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncodingziIconv.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_utf8.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncodingziIconv.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_utf16.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncodingziIconv.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_utf16le.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncodingziIconv.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_utf16be.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncodingziIconv.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_utf32.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncodingziIconv.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_utf32le.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncodingziIconv.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_utf32be.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncodingziIconv.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_localeEncoding.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncodingziIconv.loadDependencies();
        return this.evaluateOnce();
    };
};
$hs.modules.GHCziIOziEncodingziIconv.initAfterDependencies = function () {
    this.hs_mkTextEncoding.notEvaluated = false;
    var hs_newIConv25ueuB = new $hs.Func(3);
    var hs_a25v3BK = new $hs.Func(1);
    var hs_czulocaleEncoding25uetY = new $hs.Func(1);
    var hs_sat26DscH = new $hs.Data(1);
    var hs_haskellChar25ueuv = new $hs.Thunk();
    var hs_iconvRecode25ueuH = new $hs.Func(5);
    var hs_sat26Dse9 = new $hs.Data(1);
    var hs_charzushift25ueux = new $hs.Thunk();
    var hs_iconvDecode25ueuD = new $hs.Func(3);
    var hs_iconvEncode25ueuF = new $hs.Func(3);
    var hs_sat26Dseh = new $hs.Thunk();
    var hs_sat26Dsej = new $hs.Thunk();
    var hs_sat26Dsel = new $hs.Thunk();
    var hs_sat26Dsen = new $hs.Thunk();
    var hs_sat26Dsep = new $hs.Thunk();
    var hs_sat26Dser = new $hs.Thunk();
    var hs_sat26Dset = new $hs.Thunk();
    var hs_sat26Dsev = new $hs.Thunk();
    var hs_sat26Dsez = new $hs.Thunk();
    hs_newIConv25ueuB.evaluate = function (hs_from26Ds73, hs_to26Ds76, hs_fn26Ds7y) {
        var hs_sat26DscD = new $hs.Func(1);
        hs_sat26DscD.evaluate = function (hs_fromzustr26Ds7e) {
            var hs_sat26DscB = new $hs.Func(1);
            hs_sat26DscB.evaluate = function (hs_tozustr26Ds7b) {
                var hs_sat26Dscu = new $hs.Func(1);
                hs_sat26Dscu.evaluate = function (hs_iconvt26Ds7x) {
                    var hs_sat26Dscf = new $hs.Thunk();
                    hs_sat26Dscf.evaluateOnce = function () {
                        var hs_sat26Dsce = new $hs.Thunk();
                        hs_sat26Dsce.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziBase.hs_const, hs_sat26Dsce);
                    };
                    var hs_sat26Dsci = new $hs.Thunk();
                    hs_sat26Dsci.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                    };
                    var hs_sat26Dsco = new $hs.Thunk();
                    hs_sat26Dsco.evaluateOnce = function () {
                        var hs_sat26Dscl = new $hs.Thunk();
                        hs_sat26Dscl.evaluateOnce = function () {
                            var hs_ds26Dsch = hs_iconvt26Ds7x;
                            if (hs_iconvt26Ds7x.notEvaluated) {
                                hs_ds26Dsch = hs_iconvt26Ds7x.hscall();
                            }
                            var hs_ds126Ds7G = hs_ds26Dsch.data[0];
                            var hs_sat26Dsck = new $hs.Func(1);
                            hs_sat26Dsck.evaluate = function (hs_ds226Ds7H) {
                                var hs_wild26Dscg = [hs_ds226Ds7H, hs_iconv_close(hs_ds126Ds7G)];
                                var hs_ds326Ds7M = hs_wild26Dscg[0];
                                var hs_ds426Ds7N = hs_wild26Dscg[1];
                                var hs_sat26Dscj = new $hs.Data(1);
                                hs_sat26Dscj.data = [hs_ds426Ds7N];
                                return [hs_ds326Ds7M, hs_sat26Dscj];
                            };
                            if (hs_sat26Dsck.notEvaluated) {
                                return hs_sat26Dsck.hscall();
                            } else {
                                return hs_sat26Dsck;
                            }
                        };
                        var hs_sat26Dscn = new $hs.Thunk();
                        hs_sat26Dscn.evaluateOnce = function () {
                            var hs_sat26Dscm = new $hs.Thunk();
                            hs_sat26Dscm.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Iconv.close\x00");
                            };
                            return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dscm);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dscn, hs_sat26Dscl);
                    };
                    var hs_sat26Dscp = new $hs.Thunk();
                    hs_sat26Dscp.evaluateOnce = function () {
                        return hs_fn26Ds7y.hscall(hs_iconvt26Ds7x);
                    };
                    var hs_sat26Dscq = new $hs.Data(1);
                    hs_sat26Dscq.data = [hs_sat26Dscp, hs_sat26Dsco, hs_sat26Dsci, hs_sat26Dscf];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dscq);
                };
                var hs_sat26DscA = new $hs.Thunk();
                hs_sat26DscA.evaluateOnce = function () {
                    var hs_sat26Dscx = new $hs.Thunk();
                    hs_sat26Dscx.evaluateOnce = function () {
                        var hs_ds26Dsct = hs_tozustr26Ds7b;
                        if (hs_tozustr26Ds7b.notEvaluated) {
                            hs_ds26Dsct = hs_tozustr26Ds7b.hscall();
                        }
                        var hs_ds126Ds7j = hs_ds26Dsct.data[0];
                        var hs_ds226Dscs = hs_fromzustr26Ds7e;
                        if (hs_fromzustr26Ds7e.notEvaluated) {
                            hs_ds226Dscs = hs_fromzustr26Ds7e.hscall();
                        }
                        var hs_ds326Ds7k = hs_ds226Dscs.data[0];
                        var hs_sat26Dscw = new $hs.Func(1);
                        hs_sat26Dscw.evaluate = function (hs_ds426Ds7l) {
                            var hs_wild26Dscr = [hs_ds426Ds7l, hs_iconv_open(hs_ds126Ds7j, hs_ds326Ds7k)];
                            var hs_ds526Ds7q = hs_wild26Dscr[0];
                            var hs_ds626Ds7r = hs_wild26Dscr[1];
                            var hs_sat26Dscv = new $hs.Data(1);
                            hs_sat26Dscv.data = [hs_ds626Ds7r];
                            return [hs_ds526Ds7q, hs_sat26Dscv];
                        };
                        if (hs_sat26Dscw.notEvaluated) {
                            return hs_sat26Dscw.hscall();
                        } else {
                            return hs_sat26Dscw;
                        }
                    };
                    var hs_sat26Dscz = new $hs.Thunk();
                    hs_sat26Dscz.evaluateOnce = function () {
                        var hs_sat26Dscy = new $hs.Thunk();
                        hs_sat26Dscy.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("mkTextEncoding\x00");
                        };
                        return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCLong, hs_sat26Dscy);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dscz, hs_sat26Dscx);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DscA, hs_sat26Dscu);
            };
            var hs_sat26DscC = new $hs.Thunk();
            hs_sat26DscC.evaluateOnce = function () {
                return $hs.modules.ForeignziCziString.hs_withCString.hscall(hs_to26Ds76);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DscC, hs_sat26DscB);
        };
        var hs_sat26DscE = new $hs.Thunk();
        hs_sat26DscE.evaluateOnce = function () {
            return $hs.modules.ForeignziCziString.hs_withCString.hscall(hs_from26Ds73);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DscE, hs_sat26DscD);
    };
    hs_a25v3BK.evaluate = function (hs_ds26Ds83) {
        var hs_wild26DscF = [hs_ds26Ds83, localeEncoding()];
        var hs_ds126Ds88 = hs_wild26DscF[0];
        var hs_ds226Ds89 = hs_wild26DscF[1];
        var hs_sat26DscG = new $hs.Data(1);
        hs_sat26DscG.data = [hs_ds226Ds89];
        return [hs_ds126Ds88, hs_sat26DscG];
    };
    hs_czulocaleEncoding25uetY.evaluate = function (hs_eta1cW6l3) {
        return hs_a25v3BK.hscall(hs_eta1cW6l3);
    };
    hs_sat26DscH.data = [2];
    hs_haskellChar25ueuv.evaluateOnce = function () {
        var hs_wild26DscI = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, $hs.modules.GHCziIOziBuffer.hs_charSizze, hs_sat26DscH);
        switch (hs_wild26DscI.tag) {
        case 1:
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("UTF-32LE\x00");
        case 2:
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("UTF-16LE\x00");
        }
    };
    hs_iconvRecode25ueuH.evaluate = function (hs_iconvzut26Ds9k, hs_input26Ds8i, hs_iscale26Ds8Z, hs_output26Ds8w, hs_oscale26Ds95) {
        var hs_wild26Dsao = hs_input26Ds8i;
        if (hs_input26Ds8i.notEvaluated) {
            hs_wild26Dsao = hs_input26Ds8i.hscall();
        }
        var hs_rb26Ds8R = hs_wild26Dsao.data[0];
        var hs_rb126Ds8S = hs_wild26Dsao.data[1];
        var hs_rb326Ds8r = hs_wild26Dsao.data[4];
        var hs_rb426Ds8u = hs_wild26Dsao.data[5];
        var hs_ir26Ds8s = new $hs.Data(1);
        hs_ir26Ds8s.data = [hs_rb326Ds8r];
        var hs_iw26Ds8v = new $hs.Data(1);
        hs_iw26Ds8v.data = [hs_rb426Ds8u];
        var hs_wild126Ds9W = hs_output26Ds8w;
        if (hs_output26Ds8w.notEvaluated) {
            hs_wild126Ds9W = hs_output26Ds8w.hscall();
        }
        var hs_rb526Ds8F = hs_wild126Ds9W.data[0];
        var hs_rb626Ds8G = hs_wild126Ds9W.data[1];
        var hs_rb726Ds8M = hs_wild126Ds9W.data[3];
        var hs_rb926Ds8J = hs_wild126Ds9W.data[5];
        var hs_oraw26Ds8H = new $hs.Data(1);
        hs_oraw26Ds8H.data = [hs_rb526Ds8F, hs_rb626Ds8G];
        var hs_ow26Ds8K = new $hs.Data(1);
        hs_ow26Ds8K.data = [hs_rb926Ds8J];
        var hs_os26Ds8N = new $hs.Data(1);
        hs_os26Ds8N.data = [hs_rb726Ds8M];
        var hs_sat26Dse7 = new $hs.Thunk();
        hs_sat26Dse7.evaluateOnce = function () {
            var hs_sat26Dse5 = new $hs.Thunk();
            hs_sat26Dse5.evaluateOnce = function () {
                var hs_sat26Dse3 = new $hs.Thunk();
                hs_sat26Dse3.evaluateOnce = function () {
                    var hs_sat26Dse0 = new $hs.Func(1);
                    hs_sat26Dse0.evaluate = function (hs_piraw26Ds8Y) {
                        var hs_sat26DsdY = new $hs.Func(1);
                        hs_sat26DsdY.evaluate = function (hs_poraw26Ds94) {
                            var hs_sat26DsdU = new $hs.Func(1);
                            hs_sat26DsdU.evaluate = function (hs_pzuinbuf26Ds9n) {
                                var hs_sat26DsdQ = new $hs.Func(1);
                                hs_sat26DsdQ.evaluate = function (hs_pzuoutbuf26Ds9t) {
                                    var hs_sat26DsdL = new $hs.Func(1);
                                    hs_sat26DsdL.evaluate = function (hs_pzuinleft26Ds9q) {
                                        var hs_sat26DsdG = new $hs.Func(1);
                                        hs_sat26DsdG.evaluate = function (hs_pzuoutleft26Ds9w) {
                                            var hs_sat26DsdC = new $hs.Func(1);
                                            hs_sat26DsdC.evaluate = function (hs_res26DsaT) {
                                                var hs_sat26Dsdu = new $hs.Func(1);
                                                hs_sat26Dsdu.evaluate = function (hs_newzuinleft26Dsah) {
                                                    var hs_sat26Dsds = new $hs.Func(1);
                                                    hs_sat26Dsds.evaluate = function (hs_newzuoutleft26Dsa4) {
                                                        var hs_newzuoutput26Dsaf = new $hs.Thunk();
                                                        hs_newzuoutput26Dsaf.evaluateOnce = function () {
                                                            var hs_wild226DscN = hs_wild126Ds9W;
                                                            if (hs_wild126Ds9W.notEvaluated) {
                                                                hs_wild226DscN = hs_wild126Ds9W.hscall();
                                                            }
                                                            var hs_rb1026Dsa9 = hs_wild226DscN.data[0];
                                                            var hs_rb1126Dsaa = hs_wild226DscN.data[1];
                                                            var hs_ds226Dsab = hs_wild226DscN.data[2];
                                                            var hs_rb1226Dsac = hs_wild226DscN.data[3];
                                                            var hs_rb1326Dsad = hs_wild226DscN.data[4];
                                                            var hs_sat26DscR = new $hs.Thunk();
                                                            hs_sat26DscR.evaluateOnce = function () {
                                                                var hs_sat26DscP = new $hs.Thunk();
                                                                hs_sat26DscP.evaluateOnce = function () {
                                                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCSizze, $hs.modules.GHCziNum.hs_zdfNumInt, hs_newzuoutleft26Dsa4);
                                                                };
                                                                return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26DscP, hs_oscale26Ds95);
                                                            };
                                                            var hs_tpl26DscQ = $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_os26Ds8N, hs_sat26DscR);
                                                            var hs_tpl126Dsae = hs_tpl26DscQ.data[0];
                                                            var $res = new $hs.Data(1);
                                                            $res.data = [hs_rb1026Dsa9, hs_rb1126Dsaa, hs_ds226Dsab, hs_rb1226Dsac, hs_rb1326Dsad, hs_tpl126Dsae];
                                                            return $res;
                                                        };
                                                        var hs_newzuinleftzq26Dsaj = new $hs.Thunk();
                                                        hs_newzuinleftzq26Dsaj.evaluateOnce = function () {
                                                            var hs_sat26DscS = new $hs.Thunk();
                                                            hs_sat26DscS.evaluateOnce = function () {
                                                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCSizze, $hs.modules.GHCziNum.hs_zdfNumInt, hs_newzuinleft26Dsah);
                                                            };
                                                            return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26DscS, hs_iscale26Ds8Z);
                                                        };
                                                        var hs_newzuinput26DsaP = new $hs.Thunk();
                                                        hs_newzuinput26DsaP.evaluateOnce = function () {
                                                            var hs_sat26DscX = new $hs.Thunk();
                                                            hs_sat26DscX.evaluateOnce = function () {
                                                                var hs_sat26DscT = new $hs.Thunk();
                                                                hs_sat26DscT.evaluateOnce = function () {
                                                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                                                };
                                                                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_sat26DscT);
                                                            };
                                                            var hs_wild226DscW = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCSizze, hs_newzuinleft26Dsah, hs_sat26DscX);
                                                            switch (hs_wild226DscW.tag) {
                                                            case 1:
                                                                var hs_wild326DscV = hs_wild26Dsao;
                                                                if (hs_wild26Dsao.notEvaluated) {
                                                                    hs_wild326DscV = hs_wild26Dsao.hscall();
                                                                }
                                                                var hs_rb1026Dsay = hs_wild326DscV.data[0];
                                                                var hs_rb1126Dsaz = hs_wild326DscV.data[1];
                                                                var hs_ds226DsaA = hs_wild326DscV.data[2];
                                                                var hs_rb1226DsaB = hs_wild326DscV.data[3];
                                                                var hs_rb1426DsaD = hs_wild326DscV.data[5];
                                                                var hs_tpl26DscU = $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_iw26Ds8v, hs_newzuinleftzq26Dsaj);
                                                                var hs_tpl126DsaC = hs_tpl26DscU.data[0];
                                                                var $res = new $hs.Data(1);
                                                                $res.data = [hs_rb1026Dsay, hs_rb1126Dsaz, hs_ds226DsaA, hs_rb1226DsaB, hs_tpl126DsaC, hs_rb1426DsaD];
                                                                return $res;
                                                            case 2:
                                                                var hs_wild326DscZ = hs_wild26Dsao;
                                                                if (hs_wild26Dsao.notEvaluated) {
                                                                    hs_wild326DscZ = hs_wild26Dsao.hscall();
                                                                }
                                                                var hs_rb1026DsaL = hs_wild326DscZ.data[0];
                                                                var hs_rb1126DsaM = hs_wild326DscZ.data[1];
                                                                var hs_ds226DsaN = hs_wild326DscZ.data[2];
                                                                var hs_rb1226DsaO = hs_wild326DscZ.data[3];
                                                                var $res = new $hs.Data(1);
                                                                $res.data = [hs_rb1026DsaL, hs_rb1126DsaM, hs_ds226DsaN, hs_rb1226DsaO, 0, 0];
                                                                return $res;
                                                            }
                                                        };
                                                        var hs_sat26Dsdq = new $hs.Thunk();
                                                        hs_sat26Dsdq.evaluateOnce = function () {
                                                            var hs_sat26Dsdo = new $hs.Thunk();
                                                            hs_sat26Dsdo.evaluateOnce = function () {
                                                                var hs_sat26Dsdm = new $hs.Thunk();
                                                                hs_sat26Dsdm.evaluateOnce = function () {
                                                                    var hs_sat26Dsd5 = new $hs.Thunk();
                                                                    hs_sat26Dsd5.evaluateOnce = function () {
                                                                        var hs_sat26Dsd3 = new $hs.Thunk();
                                                                        hs_sat26Dsd3.evaluateOnce = function () {
                                                                            var hs_sat26Dsd2 = new $hs.Thunk();
                                                                            hs_sat26Dsd2.evaluateOnce = function () {
                                                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                                                            };
                                                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_sat26Dsd2);
                                                                        };
                                                                        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_sat26Dsd3);
                                                                    };
                                                                    var hs_wild226Dsd4 = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCSizze, hs_res26DsaT, hs_sat26Dsd5);
                                                                    switch (hs_wild226Dsd4.tag) {
                                                                    case 1:
                                                                        var hs_sat26Dsdk = new $hs.Func(1);
                                                                        hs_sat26Dsdk.evaluate = function (hs_errno26DsaZ) {
                                                                            var hs_sat26Dsdb = new $hs.Thunk();
                                                                            hs_sat26Dsdb.evaluateOnce = function () {
                                                                                var hs_sat26Dsd9 = new $hs.Thunk();
                                                                                hs_sat26Dsd9.evaluateOnce = function () {
                                                                                    var hs_sat26Dsd7 = new $hs.Thunk();
                                                                                    hs_sat26Dsd7.evaluateOnce = function () {
                                                                                        var hs_sat26Dsd6 = new $hs.Thunk();
                                                                                        hs_sat26Dsd6.evaluateOnce = function () {
                                                                                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_iw26Ds8v, hs_ir26Ds8s);
                                                                                        };
                                                                                        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_newzuinleftzq26Dsaj, hs_sat26Dsd6);
                                                                                    };
                                                                                    var hs_sat26Dsd8 = new $hs.Thunk();
                                                                                    hs_sat26Dsd8.evaluateOnce = function () {
                                                                                        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DsaZ, $hs.modules.ForeignziCziError.hs_eILSEQ);
                                                                                    };
                                                                                    return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dsd8, hs_sat26Dsd7);
                                                                                };
                                                                                var hs_sat26Dsda = new $hs.Thunk();
                                                                                hs_sat26Dsda.evaluateOnce = function () {
                                                                                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DsaZ, $hs.modules.ForeignziCziError.hs_e2BIG);
                                                                                };
                                                                                return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26Dsda, hs_sat26Dsd9);
                                                                            };
                                                                            var hs_sat26Dsdd = new $hs.Thunk();
                                                                            hs_sat26Dsdd.evaluateOnce = function () {
                                                                                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DsaZ, $hs.modules.ForeignziCziError.hs_eINVAL);
                                                                            };
                                                                            var hs_wild326Dsdc = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26Dsdd, hs_sat26Dsdb);
                                                                            switch (hs_wild326Dsdc.tag) {
                                                                            case 1:
                                                                                var hs_sat26Dsdf = new $hs.Thunk();
                                                                                hs_sat26Dsdf.evaluateOnce = function () {
                                                                                    var hs_sat26Dsde = new $hs.Thunk();
                                                                                    hs_sat26Dsde.evaluateOnce = function () {
                                                                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("iconvRecoder\x00");
                                                                                    };
                                                                                    return $hs.modules.ForeignziCziError.hs_throwErrno.hscall(hs_sat26Dsde);
                                                                                };
                                                                                var hs_sat26Dsdg = new $hs.Thunk();
                                                                                hs_sat26Dsdg.evaluateOnce = function () {
                                                                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                                                                };
                                                                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dsdg, hs_sat26Dsdf);
                                                                            case 2:
                                                                                var hs_sat26Dsdi = new $hs.Thunk();
                                                                                hs_sat26Dsdi.evaluateOnce = function () {
                                                                                    var hs_sat26Dsdh = new $hs.Data(1);
                                                                                    hs_sat26Dsdh.data = [hs_newzuinput26DsaP, hs_newzuoutput26Dsaf];
                                                                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dsdh);
                                                                                };
                                                                                var hs_sat26Dsdj = new $hs.Thunk();
                                                                                hs_sat26Dsdj.evaluateOnce = function () {
                                                                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                                                                };
                                                                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dsdj, hs_sat26Dsdi);
                                                                            }
                                                                        };
                                                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.ForeignziCziError.hs_getErrno, hs_sat26Dsdk);
                                                                    case 2:
                                                                        var hs_sat26Dsdl = new $hs.Data(1);
                                                                        hs_sat26Dsdl.data = [hs_newzuinput26DsaP, hs_newzuoutput26Dsaf];
                                                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dsdl);
                                                                    }
                                                                };
                                                                var hs_sat26Dsdn = new $hs.Thunk();
                                                                hs_sat26Dsdn.evaluateOnce = function () {
                                                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                                                };
                                                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dsdn, hs_sat26Dsdm);
                                                            };
                                                            var hs_sat26Dsdp = new $hs.Thunk();
                                                            hs_sat26Dsdp.evaluateOnce = function () {
                                                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                                            };
                                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dsdp, hs_sat26Dsdo);
                                                        };
                                                        var hs_sat26Dsdr = new $hs.Thunk();
                                                        hs_sat26Dsdr.evaluateOnce = function () {
                                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                                        };
                                                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dsdr, hs_sat26Dsdq);
                                                    };
                                                    var hs_sat26Dsdt = new $hs.Thunk();
                                                    hs_sat26Dsdt.evaluateOnce = function () {
                                                        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCSizze, hs_pzuoutleft26Ds9w);
                                                    };
                                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dsdt, hs_sat26Dsds);
                                                };
                                                var hs_sat26Dsdv = new $hs.Thunk();
                                                hs_sat26Dsdv.evaluateOnce = function () {
                                                    return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCSizze, hs_pzuinleft26Ds9q);
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dsdv, hs_sat26Dsdu);
                                            };
                                            var hs_sat26DsdF = new $hs.Thunk();
                                            hs_sat26DsdF.evaluateOnce = function () {
                                                var hs_ds226DsdB = hs_iconvzut26Ds9k;
                                                if (hs_iconvzut26Ds9k.notEvaluated) {
                                                    hs_ds226DsdB = hs_iconvzut26Ds9k.hscall();
                                                }
                                                var hs_ds326Ds9B = hs_ds226DsdB.data[0];
                                                var hs_ds426DsdA = hs_pzuinbuf26Ds9n;
                                                if (hs_pzuinbuf26Ds9n.notEvaluated) {
                                                    hs_ds426DsdA = hs_pzuinbuf26Ds9n.hscall();
                                                }
                                                var hs_ds526Ds9C = hs_ds426DsdA.data[0];
                                                var hs_ds626Dsdz = hs_pzuinleft26Ds9q;
                                                if (hs_pzuinleft26Ds9q.notEvaluated) {
                                                    hs_ds626Dsdz = hs_pzuinleft26Ds9q.hscall();
                                                }
                                                var hs_ds726Ds9D = hs_ds626Dsdz.data[0];
                                                var hs_ds826Dsdy = hs_pzuoutbuf26Ds9t;
                                                if (hs_pzuoutbuf26Ds9t.notEvaluated) {
                                                    hs_ds826Dsdy = hs_pzuoutbuf26Ds9t.hscall();
                                                }
                                                var hs_ds926Ds9E = hs_ds826Dsdy.data[0];
                                                var hs_ds1026Dsdx = hs_pzuoutleft26Ds9w;
                                                if (hs_pzuoutleft26Ds9w.notEvaluated) {
                                                    hs_ds1026Dsdx = hs_pzuoutleft26Ds9w.hscall();
                                                }
                                                var hs_ds1126Ds9F = hs_ds1026Dsdx.data[0];
                                                var hs_sat26DsdE = new $hs.Func(1);
                                                hs_sat26DsdE.evaluate = function (hs_ds1226Ds9G) {
                                                    var hs_wild226Dsdw = [hs_ds1226Ds9G, hs_iconv(hs_ds326Ds9B, hs_ds526Ds9C, hs_ds726Ds9D, hs_ds926Ds9E, hs_ds1126Ds9F)];
                                                    var hs_ds1326Ds9L = hs_wild226Dsdw[0];
                                                    var hs_ds1426Ds9M = hs_wild226Dsdw[1];
                                                    var hs_sat26DsdD = new $hs.Data(1);
                                                    hs_sat26DsdD.data = [hs_ds1426Ds9M];
                                                    return [hs_ds1326Ds9L, hs_sat26DsdD];
                                                };
                                                if (hs_sat26DsdE.notEvaluated) {
                                                    return hs_sat26DsdE.hscall();
                                                } else {
                                                    return hs_sat26DsdE;
                                                }
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsdF, hs_sat26DsdC);
                                        };
                                        var hs_sat26DsdK = new $hs.Thunk();
                                        hs_sat26DsdK.evaluateOnce = function () {
                                            var hs_sat26DsdJ = new $hs.Thunk();
                                            hs_sat26DsdJ.evaluateOnce = function () {
                                                var hs_sat26DsdI = new $hs.Thunk();
                                                hs_sat26DsdI.evaluateOnce = function () {
                                                    var hs_sat26DsdH = new $hs.Thunk();
                                                    hs_sat26DsdH.evaluateOnce = function () {
                                                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_os26Ds8N, hs_ow26Ds8K);
                                                    };
                                                    return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26DsdH, hs_oscale26Ds95);
                                                };
                                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_sat26DsdI);
                                            };
                                            return $hs.modules.ForeignziMarshalziUtils.hs_with.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCSizze, hs_sat26DsdJ);
                                        };
                                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsdK, hs_sat26DsdG);
                                    };
                                    var hs_sat26DsdP = new $hs.Thunk();
                                    hs_sat26DsdP.evaluateOnce = function () {
                                        var hs_sat26DsdO = new $hs.Thunk();
                                        hs_sat26DsdO.evaluateOnce = function () {
                                            var hs_sat26DsdN = new $hs.Thunk();
                                            hs_sat26DsdN.evaluateOnce = function () {
                                                var hs_sat26DsdM = new $hs.Thunk();
                                                hs_sat26DsdM.evaluateOnce = function () {
                                                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_iw26Ds8v, hs_ir26Ds8s);
                                                };
                                                return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26DsdM, hs_iscale26Ds8Z);
                                            };
                                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_sat26DsdN);
                                        };
                                        return $hs.modules.ForeignziMarshalziUtils.hs_with.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCSizze, hs_sat26DsdO);
                                    };
                                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsdP, hs_sat26DsdL);
                                };
                                var hs_sat26DsdT = new $hs.Thunk();
                                hs_sat26DsdT.evaluateOnce = function () {
                                    var hs_sat26DsdS = new $hs.Thunk();
                                    hs_sat26DsdS.evaluateOnce = function () {
                                        var hs_sat26DsdR = new $hs.Thunk();
                                        hs_sat26DsdR.evaluateOnce = function () {
                                            return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_ow26Ds8K, hs_oscale26Ds95);
                                        };
                                        return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_poraw26Ds94, hs_sat26DsdR);
                                    };
                                    return $hs.modules.ForeignziMarshalziUtils.hs_with.hscall($hs.modules.ForeignziStorable.hs_zdfStorablePtr, hs_sat26DsdS);
                                };
                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsdT, hs_sat26DsdQ);
                            };
                            var hs_sat26DsdX = new $hs.Thunk();
                            hs_sat26DsdX.evaluateOnce = function () {
                                var hs_sat26DsdW = new $hs.Thunk();
                                hs_sat26DsdW.evaluateOnce = function () {
                                    var hs_sat26DsdV = new $hs.Thunk();
                                    hs_sat26DsdV.evaluateOnce = function () {
                                        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_ir26Ds8s, hs_iscale26Ds8Z);
                                    };
                                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_piraw26Ds8Y, hs_sat26DsdV);
                                };
                                return $hs.modules.ForeignziMarshalziUtils.hs_with.hscall($hs.modules.ForeignziStorable.hs_zdfStorablePtr, hs_sat26DsdW);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsdX, hs_sat26DsdU);
                        };
                        var hs_sat26DsdZ = new $hs.Thunk();
                        hs_sat26DsdZ.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_withRawBuffer.hscall(hs_oraw26Ds8H);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsdZ, hs_sat26DsdY);
                    };
                    var hs_sat26Dse2 = new $hs.Thunk();
                    hs_sat26Dse2.evaluateOnce = function () {
                        var hs_sat26Dse1 = new $hs.Data(1);
                        hs_sat26Dse1.data = [hs_rb26Ds8R, hs_rb126Ds8S];
                        return $hs.modules.GHCziIOziBuffer.hs_withRawBuffer.hscall(hs_sat26Dse1);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dse2, hs_sat26Dse0);
                };
                var hs_sat26Dse4 = new $hs.Thunk();
                hs_sat26Dse4.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dse4, hs_sat26Dse3);
            };
            var hs_sat26Dse6 = new $hs.Thunk();
            hs_sat26Dse6.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dse6, hs_sat26Dse5);
        };
        var hs_sat26Dse8 = new $hs.Thunk();
        hs_sat26Dse8.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dse8, hs_sat26Dse7);
    };
    hs_sat26Dse9.data = [2];
    hs_charzushift25ueux.evaluateOnce = function () {
        var hs_wild26Dsea = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, $hs.modules.GHCziIOziBuffer.hs_charSizze, hs_sat26Dse9);
        switch (hs_wild26Dsea.tag) {
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
    hs_iconvDecode25ueuD.evaluate = function (hs_iconvzut26DsbA, hs_ibuf26DsbB, hs_obuf26DsbD) {
        var hs_sat26Dseb = new $hs.Data(1);
        hs_sat26Dseb.data = [0];
        return hs_iconvRecode25ueuH.hscall(hs_iconvzut26DsbA, hs_ibuf26DsbB, hs_sat26Dseb, hs_obuf26DsbD, hs_charzushift25ueux);
    };
    hs_iconvEncode25ueuF.evaluate = function (hs_iconvzut26DsbH, hs_ibuf26DsbI, hs_obuf26DsbJ) {
        var hs_sat26Dsec = new $hs.Data(1);
        hs_sat26Dsec.data = [0];
        return hs_iconvRecode25ueuH.hscall(hs_iconvzut26DsbH, hs_ibuf26DsbI, hs_charzushift25ueux, hs_obuf26DsbJ, hs_sat26Dsec);
    };
    this.hs_mkTextEncoding.evaluate = function (hs_charset26DsbM) {
        var hs_sat26Dsed = new $hs.Thunk();
        hs_sat26Dsed.evaluateOnce = function () {
            return hs_newIConv25ueuB.hscall(hs_haskellChar25ueuv, hs_charset26DsbM, hs_iconvEncode25ueuF);
        };
        var hs_sat26Dsee = new $hs.Thunk();
        hs_sat26Dsee.evaluateOnce = function () {
            return hs_newIConv25ueuB.hscall(hs_charset26DsbM, hs_haskellChar25ueuv, hs_iconvDecode25ueuD);
        };
        var hs_sat26Dsef = new $hs.Data(1);
        hs_sat26Dsef.data = [hs_charset26DsbM, hs_sat26Dsee, hs_sat26Dsed];
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dsef);
    };
    hs_sat26Dseh.evaluateOnce = function () {
        var hs_sat26Dseg = new $hs.Thunk();
        hs_sat26Dseg.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Latin1\x00");
        };
        return $hs.modules.GHCziIOziEncodingziIconv.hs_mkTextEncoding.hscall(hs_sat26Dseg);
    };
    this.hs_latin1.evaluateOnce = function () {
        return $hs.modules.GHCziIO.hs_unsafePerformIO.hscall(hs_sat26Dseh);
    };
    hs_sat26Dsej.evaluateOnce = function () {
        var hs_sat26Dsei = new $hs.Thunk();
        hs_sat26Dsei.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("UTF8\x00");
        };
        return $hs.modules.GHCziIOziEncodingziIconv.hs_mkTextEncoding.hscall(hs_sat26Dsei);
    };
    this.hs_utf8.evaluateOnce = function () {
        return $hs.modules.GHCziIO.hs_unsafePerformIO.hscall(hs_sat26Dsej);
    };
    hs_sat26Dsel.evaluateOnce = function () {
        var hs_sat26Dsek = new $hs.Thunk();
        hs_sat26Dsek.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("UTF16\x00");
        };
        return $hs.modules.GHCziIOziEncodingziIconv.hs_mkTextEncoding.hscall(hs_sat26Dsek);
    };
    this.hs_utf16.evaluateOnce = function () {
        return $hs.modules.GHCziIO.hs_unsafePerformIO.hscall(hs_sat26Dsel);
    };
    hs_sat26Dsen.evaluateOnce = function () {
        var hs_sat26Dsem = new $hs.Thunk();
        hs_sat26Dsem.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("UTF16LE\x00");
        };
        return $hs.modules.GHCziIOziEncodingziIconv.hs_mkTextEncoding.hscall(hs_sat26Dsem);
    };
    this.hs_utf16le.evaluateOnce = function () {
        return $hs.modules.GHCziIO.hs_unsafePerformIO.hscall(hs_sat26Dsen);
    };
    hs_sat26Dsep.evaluateOnce = function () {
        var hs_sat26Dseo = new $hs.Thunk();
        hs_sat26Dseo.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("UTF16BE\x00");
        };
        return $hs.modules.GHCziIOziEncodingziIconv.hs_mkTextEncoding.hscall(hs_sat26Dseo);
    };
    this.hs_utf16be.evaluateOnce = function () {
        return $hs.modules.GHCziIO.hs_unsafePerformIO.hscall(hs_sat26Dsep);
    };
    hs_sat26Dser.evaluateOnce = function () {
        var hs_sat26Dseq = new $hs.Thunk();
        hs_sat26Dseq.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("UTF32\x00");
        };
        return $hs.modules.GHCziIOziEncodingziIconv.hs_mkTextEncoding.hscall(hs_sat26Dseq);
    };
    this.hs_utf32.evaluateOnce = function () {
        return $hs.modules.GHCziIO.hs_unsafePerformIO.hscall(hs_sat26Dser);
    };
    hs_sat26Dset.evaluateOnce = function () {
        var hs_sat26Dses = new $hs.Thunk();
        hs_sat26Dses.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("UTF32LE\x00");
        };
        return $hs.modules.GHCziIOziEncodingziIconv.hs_mkTextEncoding.hscall(hs_sat26Dses);
    };
    this.hs_utf32le.evaluateOnce = function () {
        return $hs.modules.GHCziIO.hs_unsafePerformIO.hscall(hs_sat26Dset);
    };
    hs_sat26Dsev.evaluateOnce = function () {
        var hs_sat26Dseu = new $hs.Thunk();
        hs_sat26Dseu.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("UTF32BE\x00");
        };
        return $hs.modules.GHCziIOziEncodingziIconv.hs_mkTextEncoding.hscall(hs_sat26Dseu);
    };
    this.hs_utf32be.evaluateOnce = function () {
        return $hs.modules.GHCziIO.hs_unsafePerformIO.hscall(hs_sat26Dsev);
    };
    hs_sat26Dsez.evaluateOnce = function () {
        var hs_sat26Dsey = new $hs.Func(1);
        hs_sat26Dsey.evaluate = function (hs_cstr26Dsc7) {
            var hs_sat26Dsew = new $hs.Func(1);
            hs_sat26Dsew.evaluate = function (hs_r26Dsca) {
                return $hs.modules.GHCziIOziEncodingziIconv.hs_mkTextEncoding.hscall(hs_r26Dsca);
            };
            var hs_sat26Dsex = new $hs.Thunk();
            hs_sat26Dsex.evaluateOnce = function () {
                return $hs.modules.ForeignziCziString.hs_peekCString.hscall(hs_cstr26Dsc7);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dsex, hs_sat26Dsew);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_czulocaleEncoding25uetY, hs_sat26Dsey);
    };
    this.hs_localeEncoding.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafePerformIO, hs_sat26Dsez);
    };
};
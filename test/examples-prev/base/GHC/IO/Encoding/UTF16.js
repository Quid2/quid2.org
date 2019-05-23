
$hs.modules.GHCziIOziEncodingziUTF16 = new $hs.Module();
$hs.modules.GHCziIOziEncodingziUTF16.dependencies = ["GHC.Bool", "GHC.Unit", "GHC.Integer", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Classes", "GHC.IO.Buffer", "GHC.IO.Exception", "GHC.IORef", "GHC.Word", "Data.Bits"];
$hs.modules.GHCziIOziEncodingziUTF16.initBeforeDependencies = function () {
    this.hs_utf16bezuencode = new $hs.Func(2);
    this.hs_utf16zuencode = new $hs.Func(3);
    this.hs_utf16lezuencode = new $hs.Func(2);
    this.hs_utf16bezudecode = new $hs.Func(2);
    this.hs_utf16be = new $hs.Data(1);
    this.hs_utf16lezudecode = new $hs.Func(2);
    this.hs_utf16zudecode = new $hs.Func(3);
    this.hs_utf16 = new $hs.Data(1);
    this.hs_utf16le = new $hs.Data(1);
    this.hs_utf16bezuencode.notEvaluated = true;
    this.hs_utf16bezuencode.evaluate = function (hs_input26Dr1Q, hs_output26Dr25) {
        $hs.modules.GHCziIOziEncodingziUTF16.loadDependencies();
        return this.evaluate(hs_input26Dr1Q, hs_output26Dr25);
    };
    this.hs_utf16zuencode.notEvaluated = true;
    this.hs_utf16zuencode.evaluate = function (hs_donezubom26Dr50, hs_input26Dr5d, hs_output26Dr4I) {
        $hs.modules.GHCziIOziEncodingziUTF16.loadDependencies();
        return this.evaluate(hs_donezubom26Dr50, hs_input26Dr5d, hs_output26Dr4I);
    };
    this.hs_utf16lezuencode.notEvaluated = true;
    this.hs_utf16lezuencode.evaluate = function (hs_input26Dr5R, hs_output26Dr66) {
        $hs.modules.GHCziIOziEncodingziUTF16.loadDependencies();
        return this.evaluate(hs_input26Dr5R, hs_output26Dr66);
    };
    this.hs_utf16bezudecode.notEvaluated = true;
    this.hs_utf16bezudecode.evaluate = function (hs_input26Dr95, hs_output26Dr9n) {
        $hs.modules.GHCziIOziEncodingziUTF16.loadDependencies();
        return this.evaluate(hs_input26Dr95, hs_output26Dr9n);
    };
    this.hs_utf16be.notEvaluated = true;
    this.hs_utf16be.evaluate = function () {
        $hs.modules.GHCziIOziEncodingziUTF16.loadDependencies();
        return this;
    };
    this.hs_utf16lezudecode.notEvaluated = true;
    this.hs_utf16lezudecode.evaluate = function (hs_input26Drco, hs_output26DrcG) {
        $hs.modules.GHCziIOziEncodingziUTF16.loadDependencies();
        return this.evaluate(hs_input26Drco, hs_output26DrcG);
    };
    this.hs_utf16zudecode.notEvaluated = true;
    this.hs_utf16zudecode.evaluate = function (hs_seenzubom26DrfT, hs_input26DrfB, hs_output26Drgi) {
        $hs.modules.GHCziIOziEncodingziUTF16.loadDependencies();
        return this.evaluate(hs_seenzubom26DrfT, hs_input26DrfB, hs_output26Drgi);
    };
    this.hs_utf16.notEvaluated = true;
    this.hs_utf16.evaluate = function () {
        $hs.modules.GHCziIOziEncodingziUTF16.loadDependencies();
        return this;
    };
    this.hs_utf16le.notEvaluated = true;
    this.hs_utf16le.evaluate = function () {
        $hs.modules.GHCziIOziEncodingziUTF16.loadDependencies();
        return this;
    };
};
$hs.modules.GHCziIOziEncodingziUTF16.initAfterDependencies = function () {
    this.hs_utf16bezuencode.notEvaluated = false;
    this.hs_utf16zuencode.notEvaluated = false;
    this.hs_utf16lezuencode.notEvaluated = false;
    this.hs_utf16bezudecode.notEvaluated = false;
    this.hs_utf16be.notEvaluated = false;
    this.hs_utf16be.evaluate = function () {
        return this;
    };
    this.hs_utf16lezudecode.notEvaluated = false;
    this.hs_utf16zudecode.notEvaluated = false;
    this.hs_utf16.notEvaluated = false;
    this.hs_utf16.evaluate = function () {
        return this;
    };
    this.hs_utf16le.notEvaluated = false;
    this.hs_utf16le.evaluate = function () {
        return this;
    };
    var hs_ioezudecodingError25tyv6 = new $hs.Thunk();
    var hs_sat26Drhp = new $hs.Thunk();
    var hs_bomB25tyuE = new $hs.Thunk();
    var hs_sat26Drhq = new $hs.Thunk();
    var hs_bomL25tyuG = new $hs.Thunk();
    var hs_sat26Drj9 = new $hs.Func(1);
    var hs_sat26Drja = new $hs.Thunk();
    var hs_utf16zuEF25tyuy = new $hs.Thunk();
    var hs_sat26Drjc = new $hs.Thunk();
    var hs_sat26Drjd = new $hs.Thunk();
    var hs_sat26Drje = new $hs.Thunk();
    var hs_sat26Drjf = new $hs.Data(1);
    var hs_utf16bezuEF25tyuU = new $hs.Thunk();
    var hs_sat26Drky = new $hs.Thunk();
    var hs_sat26Drkz = new $hs.Thunk();
    var hs_sat26DrkA = new $hs.Thunk();
    var hs_sat26DrkB = new $hs.Data(1);
    var hs_utf16lezuEF25tyv0 = new $hs.Thunk();
    var hs_validate225tyvg = new $hs.Func(2);
    var hs_sat26Drmh = new $hs.Thunk();
    var hs_sat26Drmi = new $hs.Thunk();
    var hs_sat26Drmj = new $hs.Thunk();
    var hs_sat26Drmk = new $hs.Data(1);
    var hs_utf16bezuDF25tyuS = new $hs.Thunk();
    var hs_a25v2G5 = new $hs.Thunk();
    var hs_sat26Drou = new $hs.Func(1);
    var hs_sat26Drov = new $hs.Thunk();
    var hs_utf16zuDF25tyuw = new $hs.Thunk();
    var hs_a125v2KY = new $hs.Thunk();
    var hs_sat26Drox = new $hs.Thunk();
    var hs_sat26Droy = new $hs.Thunk();
    var hs_sat26Droz = new $hs.Thunk();
    var hs_sat26DroA = new $hs.Data(1);
    var hs_utf16lezuDF25tyuY = new $hs.Thunk();
    var hs_a225v2L5 = new $hs.Thunk();
    hs_ioezudecodingError25tyv6.evaluateOnce = function () {
        var hs_sat26Drhm = new $hs.Thunk();
        hs_sat26Drhm.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("invalid UTF-16 byte sequence\x00");
        };
        var hs_sat26Drhn = new $hs.Thunk();
        hs_sat26Drhn.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("utf16_decode\x00");
        };
        var hs_sat26Drho = new $hs.Data(1);
        hs_sat26Drho.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_InvalidArgument, hs_sat26Drhn, hs_sat26Drhm, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26Drho);
    };
    hs_sat26Drhp.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(254);
    };
    hs_bomB25tyuE.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26Drhp);
    };
    hs_sat26Drhq.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(255);
    };
    hs_bomL25tyuG.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26Drhq);
    };
    this.hs_utf16bezuencode.evaluate = function (hs_input26Dr1Q, hs_output26Dr25) {
        var hs_wild26Dr2x = hs_input26Dr1Q;
        if (hs_input26Dr1Q.notEvaluated) {
            hs_wild26Dr2x = hs_input26Dr1Q.hscall();
        }
        var hs_rb26Dr1Z = hs_wild26Dr2x.data[0];
        var hs_rb126Dr20 = hs_wild26Dr2x.data[1];
        var hs_rb326Dr4B = hs_wild26Dr2x.data[4];
        var hs_rb426Dr23 = hs_wild26Dr2x.data[5];
        var hs_iraw26Dr21 = new $hs.Data(1);
        hs_iraw26Dr21.data = [hs_rb26Dr1Z, hs_rb126Dr20];
        var hs_iw26Dr24 = new $hs.Data(1);
        hs_iw26Dr24.data = [hs_rb426Dr23];
        var hs_wild126Dr2Z = hs_output26Dr25;
        if (hs_output26Dr25.notEvaluated) {
            hs_wild126Dr2Z = hs_output26Dr25.hscall();
        }
        var hs_rb526Dr2e = hs_wild126Dr2Z.data[0];
        var hs_rb626Dr2f = hs_wild126Dr2Z.data[1];
        var hs_rb726Dr2i = hs_wild126Dr2Z.data[3];
        var hs_rb926Dr4D = hs_wild126Dr2Z.data[5];
        var hs_oraw26Dr2g = new $hs.Data(1);
        hs_oraw26Dr2g.data = [hs_rb526Dr2e, hs_rb626Dr2f];
        var hs_os26Dr2j = new $hs.Data(1);
        hs_os26Dr2j.data = [hs_rb726Dr2i];
        var hs_done26Dr3i = new $hs.Func(3);
        hs_done26Dr3i.evaluate = function (hs_zddMonad26Dr2u, hs_ir26Dr2o, hs_ow26Dr2r) {
            var hs_ir126Dr2v = hs_ir26Dr2o;
            if (hs_ir26Dr2o.notEvaluated) {
                hs_ir126Dr2v = hs_ir26Dr2o.hscall();
            }
            var hs_ow126Dr37 = hs_ow26Dr2r;
            if (hs_ow26Dr2r.notEvaluated) {
                hs_ow126Dr37 = hs_ow26Dr2r.hscall();
            }
            var hs_sat26DrhD = new $hs.Thunk();
            hs_sat26DrhD.evaluateOnce = function () {
                var hs_wild226Drhw = hs_wild126Dr2Z;
                if (hs_wild126Dr2Z.notEvaluated) {
                    hs_wild226Drhw = hs_wild126Dr2Z.hscall();
                }
                var hs_rb1026Dr3a = hs_wild226Drhw.data[0];
                var hs_rb1126Dr3b = hs_wild226Drhw.data[1];
                var hs_ds226Dr3c = hs_wild226Drhw.data[2];
                var hs_rb1226Dr3d = hs_wild226Drhw.data[3];
                var hs_rb1326Dr3e = hs_wild226Drhw.data[4];
                var hs_tpl26Drhv = hs_ow126Dr37;
                if (hs_ow126Dr37.notEvaluated) {
                    hs_tpl26Drhv = hs_ow126Dr37.hscall();
                }
                var hs_tpl126Dr3f = hs_tpl26Drhv.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb1026Dr3a, hs_rb1126Dr3b, hs_ds226Dr3c, hs_rb1226Dr3d, hs_rb1326Dr3e, hs_tpl126Dr3f];
                return $res;
            };
            var hs_sat26DrhI = new $hs.Thunk();
            hs_sat26DrhI.evaluateOnce = function () {
                var hs_wild226DrhC = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_ir126Dr2v, hs_iw26Dr24);
                switch (hs_wild226DrhC.tag) {
                case 1:
                    var hs_wild326DrhB = hs_wild26Dr2x;
                    if (hs_wild26Dr2x.notEvaluated) {
                        hs_wild326DrhB = hs_wild26Dr2x.hscall();
                    }
                    var hs_rb1026Dr2H = hs_wild326DrhB.data[0];
                    var hs_rb1126Dr2I = hs_wild326DrhB.data[1];
                    var hs_ds226Dr2J = hs_wild326DrhB.data[2];
                    var hs_rb1226Dr2K = hs_wild326DrhB.data[3];
                    var hs_rb1426Dr2M = hs_wild326DrhB.data[5];
                    var hs_tpl26DrhA = hs_ir126Dr2v;
                    if (hs_ir126Dr2v.notEvaluated) {
                        hs_tpl26DrhA = hs_ir126Dr2v.hscall();
                    }
                    var hs_tpl126Dr2L = hs_tpl26DrhA.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026Dr2H, hs_rb1126Dr2I, hs_ds226Dr2J, hs_rb1226Dr2K, hs_tpl126Dr2L, hs_rb1426Dr2M];
                    return $res;
                case 2:
                    var hs_wild326DrhF = hs_wild26Dr2x;
                    if (hs_wild26Dr2x.notEvaluated) {
                        hs_wild326DrhF = hs_wild26Dr2x.hscall();
                    }
                    var hs_rb1026Dr2U = hs_wild326DrhF.data[0];
                    var hs_rb1126Dr2V = hs_wild326DrhF.data[1];
                    var hs_ds226Dr2W = hs_wild326DrhF.data[2];
                    var hs_rb1226Dr2X = hs_wild326DrhF.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026Dr2U, hs_rb1126Dr2V, hs_ds226Dr2W, hs_rb1226Dr2X, 0, 0];
                    return $res;
                }
            };
            var hs_sat26DrhJ = new $hs.Data(1);
            hs_sat26DrhJ.data = [hs_sat26DrhI, hs_sat26DrhD];
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26Dr2u, hs_sat26DrhJ);
        };
        var hs_loop26Dr4i = new $hs.Func(2);
        hs_loop26Dr4i.evaluate = function (hs_ir26Dr3m, hs_ow26Dr3p) {
            var hs_ir126Dr3s = hs_ir26Dr3m;
            if (hs_ir26Dr3m.notEvaluated) {
                hs_ir126Dr3s = hs_ir26Dr3m.hscall();
            }
            var hs_ow126Dr3u = hs_ow26Dr3p;
            if (hs_ow26Dr3p.notEvaluated) {
                hs_ow126Dr3u = hs_ow26Dr3p.hscall();
            }
            var hs_wild226DrhK = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ir126Dr3s, hs_iw26Dr24);
            switch (hs_wild226DrhK.tag) {
            case 1:
                var hs_sat26DrhN = new $hs.Data(1);
                hs_sat26DrhN.data = [2];
                var hs_sat26DrhQ = new $hs.Thunk();
                hs_sat26DrhQ.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_os26Dr2j, hs_ow126Dr3u);
                };
                var hs_wild326DrhP = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DrhQ, hs_sat26DrhN);
                switch (hs_wild326DrhP.tag) {
                case 1:
                    var hs_sat26DriE = new $hs.Func(1);
                    hs_sat26DriE.evaluate = function (hs_ds226Dr3A) {
                        var hs_wild426DrhO = hs_ds226Dr3A;
                        if (hs_ds226Dr3A.notEvaluated) {
                            hs_wild426DrhO = hs_ds226Dr3A.hscall();
                        }
                        var hs_c26Dr3F = hs_wild426DrhO.data[0];
                        var hs_irzq26Dr4g = hs_wild426DrhO.data[1];
                        var hs_x26Dr3G = new $hs.Thunk();
                        hs_x26Dr3G.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26Dr3F);
                        };
                        var hs_sat26DrhS = new $hs.Data(1);
                        hs_sat26DrhS.data = [65536];
                        var hs_wild526DrhR = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_x26Dr3G, hs_sat26DrhS);
                        switch (hs_wild526DrhR.tag) {
                        case 1:
                            var hs_sat26DrhT = new $hs.Data(1);
                            hs_sat26DrhT.data = [4];
                            var hs_sat26DrhV = new $hs.Thunk();
                            hs_sat26DrhV.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_os26Dr2j, hs_ow126Dr3u);
                            };
                            var hs_wild626DrhU = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DrhV, hs_sat26DrhT);
                            switch (hs_wild626DrhU.tag) {
                            case 1:
                                var hs_n126Dr3O = new $hs.Thunk();
                                hs_n126Dr3O.evaluateOnce = function () {
                                    var hs_sat26DrhW = new $hs.Data(1);
                                    hs_sat26DrhW.data = [65536];
                                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_x26Dr3G, hs_sat26DrhW);
                                };
                                var hs_n226Dr3R = new $hs.Thunk();
                                hs_n226Dr3R.evaluateOnce = function () {
                                    var hs_sat26DrhX = new $hs.Data(1);
                                    hs_sat26DrhX.data = [1023];
                                    return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_n126Dr3O, hs_sat26DrhX);
                                };
                                var hs_sat26Dril = new $hs.Thunk();
                                hs_sat26Dril.evaluateOnce = function () {
                                    var hs_sat26Drie = new $hs.Thunk();
                                    hs_sat26Drie.evaluateOnce = function () {
                                        var hs_sat26Dri5 = new $hs.Thunk();
                                        hs_sat26Dri5.evaluateOnce = function () {
                                            var hs_sat26Dri0 = new $hs.Thunk();
                                            hs_sat26Dri0.evaluateOnce = function () {
                                                var hs_sat26DrhZ = new $hs.Thunk();
                                                hs_sat26DrhZ.evaluateOnce = function () {
                                                    var hs_sat26DrhY = new $hs.Data(1);
                                                    hs_sat26DrhY.data = [4];
                                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126Dr3u, hs_sat26DrhY);
                                                };
                                                return hs_loop26Dr4i.hscall(hs_irzq26Dr4g, hs_sat26DrhZ);
                                            };
                                            var hs_sat26Dri4 = new $hs.Thunk();
                                            hs_sat26Dri4.evaluateOnce = function () {
                                                var hs_sat26Dri1 = new $hs.Thunk();
                                                hs_sat26Dri1.evaluateOnce = function () {
                                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_n226Dr3R);
                                                };
                                                var hs_sat26Dri3 = new $hs.Thunk();
                                                hs_sat26Dri3.evaluateOnce = function () {
                                                    var hs_sat26Dri2 = new $hs.Data(1);
                                                    hs_sat26Dri2.data = [3];
                                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126Dr3u, hs_sat26Dri2);
                                                };
                                                return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26Dr2g, hs_sat26Dri3, hs_sat26Dri1);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dri4, hs_sat26Dri0);
                                        };
                                        var hs_sat26Drid = new $hs.Thunk();
                                        hs_sat26Drid.evaluateOnce = function () {
                                            var hs_sat26Dria = new $hs.Thunk();
                                            hs_sat26Dria.evaluateOnce = function () {
                                                var hs_sat26Dri9 = new $hs.Thunk();
                                                hs_sat26Dri9.evaluateOnce = function () {
                                                    var hs_sat26Dri6 = new $hs.Data(1);
                                                    hs_sat26Dri6.data = [220];
                                                    var hs_sat26Dri8 = new $hs.Thunk();
                                                    hs_sat26Dri8.evaluateOnce = function () {
                                                        var hs_sat26Dri7 = new $hs.Data(1);
                                                        hs_sat26Dri7.data = [8];
                                                        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_n226Dr3R, hs_sat26Dri7);
                                                    };
                                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dri8, hs_sat26Dri6);
                                                };
                                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26Dri9);
                                            };
                                            var hs_sat26Dric = new $hs.Thunk();
                                            hs_sat26Dric.evaluateOnce = function () {
                                                var hs_sat26Drib = new $hs.Data(1);
                                                hs_sat26Drib.data = [2];
                                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126Dr3u, hs_sat26Drib);
                                            };
                                            return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26Dr2g, hs_sat26Dric, hs_sat26Dria);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drid, hs_sat26Dri5);
                                    };
                                    var hs_sat26Drik = new $hs.Thunk();
                                    hs_sat26Drik.evaluateOnce = function () {
                                        var hs_sat26Drih = new $hs.Thunk();
                                        hs_sat26Drih.evaluateOnce = function () {
                                            var hs_sat26Drig = new $hs.Thunk();
                                            hs_sat26Drig.evaluateOnce = function () {
                                                var hs_sat26Drif = new $hs.Data(1);
                                                hs_sat26Drif.data = [10];
                                                return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_n126Dr3O, hs_sat26Drif);
                                            };
                                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26Drig);
                                        };
                                        var hs_sat26Drij = new $hs.Thunk();
                                        hs_sat26Drij.evaluateOnce = function () {
                                            var hs_sat26Drii = new $hs.Data(1);
                                            hs_sat26Drii.data = [1];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126Dr3u, hs_sat26Drii);
                                        };
                                        return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26Dr2g, hs_sat26Drij, hs_sat26Drih);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drik, hs_sat26Drie);
                                };
                                var hs_sat26Drir = new $hs.Thunk();
                                hs_sat26Drir.evaluateOnce = function () {
                                    var hs_sat26Driq = new $hs.Thunk();
                                    hs_sat26Driq.evaluateOnce = function () {
                                        var hs_sat26Drip = new $hs.Thunk();
                                        hs_sat26Drip.evaluateOnce = function () {
                                            var hs_sat26Drim = new $hs.Data(1);
                                            hs_sat26Drim.data = [216];
                                            var hs_sat26Drio = new $hs.Thunk();
                                            hs_sat26Drio.evaluateOnce = function () {
                                                var hs_sat26Drin = new $hs.Data(1);
                                                hs_sat26Drin.data = [18];
                                                return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_n126Dr3O, hs_sat26Drin);
                                            };
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Drio, hs_sat26Drim);
                                        };
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26Drip);
                                    };
                                    return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26Dr2g, hs_ow126Dr3u, hs_sat26Driq);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drir, hs_sat26Dril);
                            case 2:
                                return hs_done26Dr3i.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ir126Dr3s, hs_ow126Dr3u);
                            }
                        case 2:
                            var hs_sat26Driz = new $hs.Thunk();
                            hs_sat26Driz.evaluateOnce = function () {
                                var hs_sat26Driu = new $hs.Thunk();
                                hs_sat26Driu.evaluateOnce = function () {
                                    var hs_sat26Drit = new $hs.Thunk();
                                    hs_sat26Drit.evaluateOnce = function () {
                                        var hs_sat26Dris = new $hs.Data(1);
                                        hs_sat26Dris.data = [2];
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126Dr3u, hs_sat26Dris);
                                    };
                                    return hs_loop26Dr4i.hscall(hs_irzq26Dr4g, hs_sat26Drit);
                                };
                                var hs_sat26Driy = new $hs.Thunk();
                                hs_sat26Driy.evaluateOnce = function () {
                                    var hs_sat26Driv = new $hs.Thunk();
                                    hs_sat26Driv.evaluateOnce = function () {
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_x26Dr3G);
                                    };
                                    var hs_sat26Drix = new $hs.Thunk();
                                    hs_sat26Drix.evaluateOnce = function () {
                                        var hs_sat26Driw = new $hs.Data(1);
                                        hs_sat26Driw.data = [1];
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126Dr3u, hs_sat26Driw);
                                    };
                                    return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26Dr2g, hs_sat26Drix, hs_sat26Driv);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Driy, hs_sat26Driu);
                            };
                            var hs_sat26DriD = new $hs.Thunk();
                            hs_sat26DriD.evaluateOnce = function () {
                                var hs_sat26DriC = new $hs.Thunk();
                                hs_sat26DriC.evaluateOnce = function () {
                                    var hs_sat26DriB = new $hs.Thunk();
                                    hs_sat26DriB.evaluateOnce = function () {
                                        var hs_sat26DriA = new $hs.Data(1);
                                        hs_sat26DriA.data = [8];
                                        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_x26Dr3G, hs_sat26DriA);
                                    };
                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DriB);
                                };
                                return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26Dr2g, hs_ow126Dr3u, hs_sat26DriC);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DriD, hs_sat26Driz);
                        }
                    };
                    var hs_sat26DriF = new $hs.Thunk();
                    hs_sat26DriF.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_readCharBuf.hscall(hs_iraw26Dr21, hs_ir126Dr3s);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DriF, hs_sat26DriE);
                case 2:
                    return hs_done26Dr3i.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ir126Dr3s, hs_ow126Dr3u);
                }
            case 2:
                return hs_done26Dr3i.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ir126Dr3s, hs_ow126Dr3u);
            }
        };
        var hs_sat26DriG = new $hs.Data(1);
        hs_sat26DriG.data = [hs_rb926Dr4D];
        var hs_sat26DriH = new $hs.Data(1);
        hs_sat26DriH.data = [hs_rb326Dr4B];
        return hs_loop26Dr4i.hscall(hs_sat26DriH, hs_sat26DriG);
    };
    this.hs_utf16zuencode.evaluate = function (hs_donezubom26Dr50, hs_input26Dr5d, hs_output26Dr4I) {
        var hs_wild26Dr5e = hs_output26Dr4I;
        if (hs_output26Dr4I.notEvaluated) {
            hs_wild26Dr5e = hs_output26Dr4I.hscall();
        }
        var hs_rb26Dr4R = hs_wild26Dr5e.data[0];
        var hs_rb126Dr4S = hs_wild26Dr5e.data[1];
        var hs_rb226Dr4Y = hs_wild26Dr5e.data[3];
        var hs_rb426Dr4V = hs_wild26Dr5e.data[5];
        var hs_oraw26Dr4T = new $hs.Data(1);
        hs_oraw26Dr4T.data = [hs_rb26Dr4R, hs_rb126Dr4S];
        var hs_ow26Dr4W = new $hs.Data(1);
        hs_ow26Dr4W.data = [hs_rb426Dr4V];
        var hs_os26Dr4Z = new $hs.Data(1);
        hs_os26Dr4Z.data = [hs_rb226Dr4Y];
        var hs_sat26Drj2 = new $hs.Func(1);
        hs_sat26Drj2.evaluate = function (hs_b26Dr53) {
            var hs_wild126DriK = hs_b26Dr53;
            if (hs_b26Dr53.notEvaluated) {
                hs_wild126DriK = hs_b26Dr53.hscall();
            }
            switch (hs_wild126DriK.tag) {
            case 1:
                var hs_sat26DriL = new $hs.Data(1);
                hs_sat26DriL.data = [2];
                var hs_sat26DriO = new $hs.Thunk();
                hs_sat26DriO.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_os26Dr4Z, hs_ow26Dr4W);
                };
                var hs_wild226DriN = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DriO, hs_sat26DriL);
                switch (hs_wild226DriN.tag) {
                case 1:
                    var hs_sat26DriZ = new $hs.Thunk();
                    hs_sat26DriZ.evaluateOnce = function () {
                        var hs_sat26DriX = new $hs.Thunk();
                        hs_sat26DriX.evaluateOnce = function () {
                            var hs_sat26DriT = new $hs.Thunk();
                            hs_sat26DriT.evaluateOnce = function () {
                                var hs_sat26DriS = new $hs.Thunk();
                                hs_sat26DriS.evaluateOnce = function () {
                                    var hs_wild326DriM = hs_wild26Dr5e;
                                    if (hs_wild26Dr5e.notEvaluated) {
                                        hs_wild326DriM = hs_wild26Dr5e.hscall();
                                    }
                                    var hs_rb526Dr5p = hs_wild326DriM.data[0];
                                    var hs_rb626Dr5q = hs_wild326DriM.data[1];
                                    var hs_ds126Dr5r = hs_wild326DriM.data[2];
                                    var hs_rb726Dr5s = hs_wild326DriM.data[3];
                                    var hs_rb826Dr5t = hs_wild326DriM.data[4];
                                    var hs_sat26DriR = new $hs.Data(1);
                                    hs_sat26DriR.data = [2];
                                    var hs_tpl26DriQ = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow26Dr4W, hs_sat26DriR);
                                    var hs_tpl126Dr5u = hs_tpl26DriQ.data[0];
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_rb526Dr5p, hs_rb626Dr5q, hs_ds126Dr5r, hs_rb726Dr5s, hs_rb826Dr5t, hs_tpl126Dr5u];
                                    return $res;
                                };
                                return $hs.modules.GHCziIOziEncodingziUTF16.hs_utf16bezuencode.hscall(hs_input26Dr5d, hs_sat26DriS);
                            };
                            var hs_sat26DriW = new $hs.Thunk();
                            hs_sat26DriW.evaluateOnce = function () {
                                var hs_sat26DriV = new $hs.Thunk();
                                hs_sat26DriV.evaluateOnce = function () {
                                    var hs_sat26DriU = new $hs.Data(1);
                                    hs_sat26DriU.data = [1];
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow26Dr4W, hs_sat26DriU);
                                };
                                return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26Dr4T, hs_sat26DriV, hs_bomL25tyuG);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DriW, hs_sat26DriT);
                        };
                        var hs_sat26DriY = new $hs.Thunk();
                        hs_sat26DriY.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26Dr4T, hs_ow26Dr4W, hs_bomB25tyuE);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DriY, hs_sat26DriX);
                    };
                    var hs_sat26Drj0 = new $hs.Thunk();
                    hs_sat26Drj0.evaluateOnce = function () {
                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_donezubom26Dr50, $hs.modules.GHCziBool.hs_True);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drj0, hs_sat26DriZ);
                case 2:
                    var hs_sat26Drj1 = new $hs.Data(1);
                    hs_sat26Drj1.data = [hs_input26Dr5d, hs_wild26Dr5e];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drj1);
                }
            case 2:
                return $hs.modules.GHCziIOziEncodingziUTF16.hs_utf16bezuencode.hscall(hs_input26Dr5d, hs_wild26Dr5e);
            }
        };
        var hs_sat26Drj3 = new $hs.Thunk();
        hs_sat26Drj3.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_donezubom26Dr50);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drj3, hs_sat26Drj2);
    };
    hs_sat26Drj9.evaluate = function (hs_donezubom26Dr5D) {
        var hs_sat26Drj4 = new $hs.Thunk();
        hs_sat26Drj4.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_donezubom26Dr5D);
        };
        var hs_sat26Drj5 = new $hs.Thunk();
        hs_sat26Drj5.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_donezubom26Dr5D);
        };
        var hs_sat26Drj6 = new $hs.Thunk();
        hs_sat26Drj6.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26Drj7 = new $hs.Func(2);
        hs_sat26Drj7.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return $hs.modules.GHCziIOziEncodingziUTF16.hs_utf16zuencode.hscall(hs_donezubom26Dr5D, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Drj8 = new $hs.Data(1);
        hs_sat26Drj8.data = [hs_sat26Drj7, hs_sat26Drj6, hs_sat26Drj5, hs_sat26Drj4];
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drj8);
    };
    hs_sat26Drja.evaluateOnce = function () {
        return $hs.modules.GHCziIORef.hs_newIORef.hscall($hs.modules.GHCziBool.hs_False);
    };
    hs_utf16zuEF25tyuy.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drja, hs_sat26Drj9);
    };
    hs_sat26Drjc.evaluateOnce = function () {
        var hs_sat26Drjb = new $hs.Thunk();
        hs_sat26Drjb.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziBase.hs_const, hs_sat26Drjb);
    };
    hs_sat26Drjd.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_sat26Drje.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_sat26Drjf.data = [$hs.modules.GHCziIOziEncodingziUTF16.hs_utf16bezuencode, hs_sat26Drje, hs_sat26Drjd, hs_sat26Drjc];
    hs_utf16bezuEF25tyuU.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drjf);
    };
    this.hs_utf16lezuencode.evaluate = function (hs_input26Dr5R, hs_output26Dr66) {
        var hs_wild26Dr6y = hs_input26Dr5R;
        if (hs_input26Dr5R.notEvaluated) {
            hs_wild26Dr6y = hs_input26Dr5R.hscall();
        }
        var hs_rb26Dr60 = hs_wild26Dr6y.data[0];
        var hs_rb126Dr61 = hs_wild26Dr6y.data[1];
        var hs_rb326Dr8C = hs_wild26Dr6y.data[4];
        var hs_rb426Dr64 = hs_wild26Dr6y.data[5];
        var hs_iraw26Dr62 = new $hs.Data(1);
        hs_iraw26Dr62.data = [hs_rb26Dr60, hs_rb126Dr61];
        var hs_iw26Dr65 = new $hs.Data(1);
        hs_iw26Dr65.data = [hs_rb426Dr64];
        var hs_wild126Dr70 = hs_output26Dr66;
        if (hs_output26Dr66.notEvaluated) {
            hs_wild126Dr70 = hs_output26Dr66.hscall();
        }
        var hs_rb526Dr6f = hs_wild126Dr70.data[0];
        var hs_rb626Dr6g = hs_wild126Dr70.data[1];
        var hs_rb726Dr6j = hs_wild126Dr70.data[3];
        var hs_rb926Dr8E = hs_wild126Dr70.data[5];
        var hs_oraw26Dr6h = new $hs.Data(1);
        hs_oraw26Dr6h.data = [hs_rb526Dr6f, hs_rb626Dr6g];
        var hs_os26Dr6k = new $hs.Data(1);
        hs_os26Dr6k.data = [hs_rb726Dr6j];
        var hs_done26Dr7j = new $hs.Func(3);
        hs_done26Dr7j.evaluate = function (hs_zddMonad26Dr6v, hs_ir26Dr6p, hs_ow26Dr6s) {
            var hs_ir126Dr6w = hs_ir26Dr6p;
            if (hs_ir26Dr6p.notEvaluated) {
                hs_ir126Dr6w = hs_ir26Dr6p.hscall();
            }
            var hs_ow126Dr78 = hs_ow26Dr6s;
            if (hs_ow26Dr6s.notEvaluated) {
                hs_ow126Dr78 = hs_ow26Dr6s.hscall();
            }
            var hs_sat26Drjs = new $hs.Thunk();
            hs_sat26Drjs.evaluateOnce = function () {
                var hs_wild226Drjl = hs_wild126Dr70;
                if (hs_wild126Dr70.notEvaluated) {
                    hs_wild226Drjl = hs_wild126Dr70.hscall();
                }
                var hs_rb1026Dr7b = hs_wild226Drjl.data[0];
                var hs_rb1126Dr7c = hs_wild226Drjl.data[1];
                var hs_ds226Dr7d = hs_wild226Drjl.data[2];
                var hs_rb1226Dr7e = hs_wild226Drjl.data[3];
                var hs_rb1326Dr7f = hs_wild226Drjl.data[4];
                var hs_tpl26Drjk = hs_ow126Dr78;
                if (hs_ow126Dr78.notEvaluated) {
                    hs_tpl26Drjk = hs_ow126Dr78.hscall();
                }
                var hs_tpl126Dr7g = hs_tpl26Drjk.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb1026Dr7b, hs_rb1126Dr7c, hs_ds226Dr7d, hs_rb1226Dr7e, hs_rb1326Dr7f, hs_tpl126Dr7g];
                return $res;
            };
            var hs_sat26Drjx = new $hs.Thunk();
            hs_sat26Drjx.evaluateOnce = function () {
                var hs_wild226Drjr = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_ir126Dr6w, hs_iw26Dr65);
                switch (hs_wild226Drjr.tag) {
                case 1:
                    var hs_wild326Drjq = hs_wild26Dr6y;
                    if (hs_wild26Dr6y.notEvaluated) {
                        hs_wild326Drjq = hs_wild26Dr6y.hscall();
                    }
                    var hs_rb1026Dr6I = hs_wild326Drjq.data[0];
                    var hs_rb1126Dr6J = hs_wild326Drjq.data[1];
                    var hs_ds226Dr6K = hs_wild326Drjq.data[2];
                    var hs_rb1226Dr6L = hs_wild326Drjq.data[3];
                    var hs_rb1426Dr6N = hs_wild326Drjq.data[5];
                    var hs_tpl26Drjp = hs_ir126Dr6w;
                    if (hs_ir126Dr6w.notEvaluated) {
                        hs_tpl26Drjp = hs_ir126Dr6w.hscall();
                    }
                    var hs_tpl126Dr6M = hs_tpl26Drjp.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026Dr6I, hs_rb1126Dr6J, hs_ds226Dr6K, hs_rb1226Dr6L, hs_tpl126Dr6M, hs_rb1426Dr6N];
                    return $res;
                case 2:
                    var hs_wild326Drju = hs_wild26Dr6y;
                    if (hs_wild26Dr6y.notEvaluated) {
                        hs_wild326Drju = hs_wild26Dr6y.hscall();
                    }
                    var hs_rb1026Dr6V = hs_wild326Drju.data[0];
                    var hs_rb1126Dr6W = hs_wild326Drju.data[1];
                    var hs_ds226Dr6X = hs_wild326Drju.data[2];
                    var hs_rb1226Dr6Y = hs_wild326Drju.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026Dr6V, hs_rb1126Dr6W, hs_ds226Dr6X, hs_rb1226Dr6Y, 0, 0];
                    return $res;
                }
            };
            var hs_sat26Drjy = new $hs.Data(1);
            hs_sat26Drjy.data = [hs_sat26Drjx, hs_sat26Drjs];
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26Dr6v, hs_sat26Drjy);
        };
        var hs_loop26Dr8j = new $hs.Func(2);
        hs_loop26Dr8j.evaluate = function (hs_ir26Dr7n, hs_ow26Dr7q) {
            var hs_ir126Dr7t = hs_ir26Dr7n;
            if (hs_ir26Dr7n.notEvaluated) {
                hs_ir126Dr7t = hs_ir26Dr7n.hscall();
            }
            var hs_ow126Dr7v = hs_ow26Dr7q;
            if (hs_ow26Dr7q.notEvaluated) {
                hs_ow126Dr7v = hs_ow26Dr7q.hscall();
            }
            var hs_wild226Drjz = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ir126Dr7t, hs_iw26Dr65);
            switch (hs_wild226Drjz.tag) {
            case 1:
                var hs_sat26DrjC = new $hs.Data(1);
                hs_sat26DrjC.data = [2];
                var hs_sat26DrjF = new $hs.Thunk();
                hs_sat26DrjF.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_os26Dr6k, hs_ow126Dr7v);
                };
                var hs_wild326DrjE = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DrjF, hs_sat26DrjC);
                switch (hs_wild326DrjE.tag) {
                case 1:
                    var hs_sat26Drkt = new $hs.Func(1);
                    hs_sat26Drkt.evaluate = function (hs_ds226Dr7B) {
                        var hs_wild426DrjD = hs_ds226Dr7B;
                        if (hs_ds226Dr7B.notEvaluated) {
                            hs_wild426DrjD = hs_ds226Dr7B.hscall();
                        }
                        var hs_c26Dr7G = hs_wild426DrjD.data[0];
                        var hs_irzq26Dr8h = hs_wild426DrjD.data[1];
                        var hs_x26Dr7H = new $hs.Thunk();
                        hs_x26Dr7H.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26Dr7G);
                        };
                        var hs_sat26DrjH = new $hs.Data(1);
                        hs_sat26DrjH.data = [65536];
                        var hs_wild526DrjG = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_x26Dr7H, hs_sat26DrjH);
                        switch (hs_wild526DrjG.tag) {
                        case 1:
                            var hs_sat26DrjI = new $hs.Data(1);
                            hs_sat26DrjI.data = [4];
                            var hs_sat26DrjK = new $hs.Thunk();
                            hs_sat26DrjK.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_os26Dr6k, hs_ow126Dr7v);
                            };
                            var hs_wild626DrjJ = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DrjK, hs_sat26DrjI);
                            switch (hs_wild626DrjJ.tag) {
                            case 1:
                                var hs_n126Dr7P = new $hs.Thunk();
                                hs_n126Dr7P.evaluateOnce = function () {
                                    var hs_sat26DrjL = new $hs.Data(1);
                                    hs_sat26DrjL.data = [65536];
                                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_x26Dr7H, hs_sat26DrjL);
                                };
                                var hs_n226Dr7S = new $hs.Thunk();
                                hs_n226Dr7S.evaluateOnce = function () {
                                    var hs_sat26DrjM = new $hs.Data(1);
                                    hs_sat26DrjM.data = [1023];
                                    return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_n126Dr7P, hs_sat26DrjM);
                                };
                                var hs_sat26Drkc = new $hs.Thunk();
                                hs_sat26Drkc.evaluateOnce = function () {
                                    var hs_sat26Drk3 = new $hs.Thunk();
                                    hs_sat26Drk3.evaluateOnce = function () {
                                        var hs_sat26DrjY = new $hs.Thunk();
                                        hs_sat26DrjY.evaluateOnce = function () {
                                            var hs_sat26DrjP = new $hs.Thunk();
                                            hs_sat26DrjP.evaluateOnce = function () {
                                                var hs_sat26DrjO = new $hs.Thunk();
                                                hs_sat26DrjO.evaluateOnce = function () {
                                                    var hs_sat26DrjN = new $hs.Data(1);
                                                    hs_sat26DrjN.data = [4];
                                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126Dr7v, hs_sat26DrjN);
                                                };
                                                return hs_loop26Dr8j.hscall(hs_irzq26Dr8h, hs_sat26DrjO);
                                            };
                                            var hs_sat26DrjX = new $hs.Thunk();
                                            hs_sat26DrjX.evaluateOnce = function () {
                                                var hs_sat26DrjU = new $hs.Thunk();
                                                hs_sat26DrjU.evaluateOnce = function () {
                                                    var hs_sat26DrjT = new $hs.Thunk();
                                                    hs_sat26DrjT.evaluateOnce = function () {
                                                        var hs_sat26DrjQ = new $hs.Data(1);
                                                        hs_sat26DrjQ.data = [220];
                                                        var hs_sat26DrjS = new $hs.Thunk();
                                                        hs_sat26DrjS.evaluateOnce = function () {
                                                            var hs_sat26DrjR = new $hs.Data(1);
                                                            hs_sat26DrjR.data = [8];
                                                            return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_n226Dr7S, hs_sat26DrjR);
                                                        };
                                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DrjS, hs_sat26DrjQ);
                                                    };
                                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DrjT);
                                                };
                                                var hs_sat26DrjW = new $hs.Thunk();
                                                hs_sat26DrjW.evaluateOnce = function () {
                                                    var hs_sat26DrjV = new $hs.Data(1);
                                                    hs_sat26DrjV.data = [3];
                                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126Dr7v, hs_sat26DrjV);
                                                };
                                                return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26Dr6h, hs_sat26DrjW, hs_sat26DrjU);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrjX, hs_sat26DrjP);
                                        };
                                        var hs_sat26Drk2 = new $hs.Thunk();
                                        hs_sat26Drk2.evaluateOnce = function () {
                                            var hs_sat26DrjZ = new $hs.Thunk();
                                            hs_sat26DrjZ.evaluateOnce = function () {
                                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_n226Dr7S);
                                            };
                                            var hs_sat26Drk1 = new $hs.Thunk();
                                            hs_sat26Drk1.evaluateOnce = function () {
                                                var hs_sat26Drk0 = new $hs.Data(1);
                                                hs_sat26Drk0.data = [2];
                                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126Dr7v, hs_sat26Drk0);
                                            };
                                            return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26Dr6h, hs_sat26Drk1, hs_sat26DrjZ);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drk2, hs_sat26DrjY);
                                    };
                                    var hs_sat26Drkb = new $hs.Thunk();
                                    hs_sat26Drkb.evaluateOnce = function () {
                                        var hs_sat26Drk8 = new $hs.Thunk();
                                        hs_sat26Drk8.evaluateOnce = function () {
                                            var hs_sat26Drk7 = new $hs.Thunk();
                                            hs_sat26Drk7.evaluateOnce = function () {
                                                var hs_sat26Drk4 = new $hs.Data(1);
                                                hs_sat26Drk4.data = [216];
                                                var hs_sat26Drk6 = new $hs.Thunk();
                                                hs_sat26Drk6.evaluateOnce = function () {
                                                    var hs_sat26Drk5 = new $hs.Data(1);
                                                    hs_sat26Drk5.data = [18];
                                                    return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_n126Dr7P, hs_sat26Drk5);
                                                };
                                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Drk6, hs_sat26Drk4);
                                            };
                                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26Drk7);
                                        };
                                        var hs_sat26Drka = new $hs.Thunk();
                                        hs_sat26Drka.evaluateOnce = function () {
                                            var hs_sat26Drk9 = new $hs.Data(1);
                                            hs_sat26Drk9.data = [1];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126Dr7v, hs_sat26Drk9);
                                        };
                                        return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26Dr6h, hs_sat26Drka, hs_sat26Drk8);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drkb, hs_sat26Drk3);
                                };
                                var hs_sat26Drkg = new $hs.Thunk();
                                hs_sat26Drkg.evaluateOnce = function () {
                                    var hs_sat26Drkf = new $hs.Thunk();
                                    hs_sat26Drkf.evaluateOnce = function () {
                                        var hs_sat26Drke = new $hs.Thunk();
                                        hs_sat26Drke.evaluateOnce = function () {
                                            var hs_sat26Drkd = new $hs.Data(1);
                                            hs_sat26Drkd.data = [10];
                                            return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_n126Dr7P, hs_sat26Drkd);
                                        };
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26Drke);
                                    };
                                    return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26Dr6h, hs_ow126Dr7v, hs_sat26Drkf);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drkg, hs_sat26Drkc);
                            case 2:
                                return hs_done26Dr7j.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ir126Dr7t, hs_ow126Dr7v);
                            }
                        case 2:
                            var hs_sat26Drkq = new $hs.Thunk();
                            hs_sat26Drkq.evaluateOnce = function () {
                                var hs_sat26Drkj = new $hs.Thunk();
                                hs_sat26Drkj.evaluateOnce = function () {
                                    var hs_sat26Drki = new $hs.Thunk();
                                    hs_sat26Drki.evaluateOnce = function () {
                                        var hs_sat26Drkh = new $hs.Data(1);
                                        hs_sat26Drkh.data = [2];
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126Dr7v, hs_sat26Drkh);
                                    };
                                    return hs_loop26Dr8j.hscall(hs_irzq26Dr8h, hs_sat26Drki);
                                };
                                var hs_sat26Drkp = new $hs.Thunk();
                                hs_sat26Drkp.evaluateOnce = function () {
                                    var hs_sat26Drkm = new $hs.Thunk();
                                    hs_sat26Drkm.evaluateOnce = function () {
                                        var hs_sat26Drkl = new $hs.Thunk();
                                        hs_sat26Drkl.evaluateOnce = function () {
                                            var hs_sat26Drkk = new $hs.Data(1);
                                            hs_sat26Drkk.data = [8];
                                            return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_x26Dr7H, hs_sat26Drkk);
                                        };
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26Drkl);
                                    };
                                    var hs_sat26Drko = new $hs.Thunk();
                                    hs_sat26Drko.evaluateOnce = function () {
                                        var hs_sat26Drkn = new $hs.Data(1);
                                        hs_sat26Drkn.data = [1];
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126Dr7v, hs_sat26Drkn);
                                    };
                                    return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26Dr6h, hs_sat26Drko, hs_sat26Drkm);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drkp, hs_sat26Drkj);
                            };
                            var hs_sat26Drks = new $hs.Thunk();
                            hs_sat26Drks.evaluateOnce = function () {
                                var hs_sat26Drkr = new $hs.Thunk();
                                hs_sat26Drkr.evaluateOnce = function () {
                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_x26Dr7H);
                                };
                                return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26Dr6h, hs_ow126Dr7v, hs_sat26Drkr);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drks, hs_sat26Drkq);
                        }
                    };
                    var hs_sat26Drku = new $hs.Thunk();
                    hs_sat26Drku.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_readCharBuf.hscall(hs_iraw26Dr62, hs_ir126Dr7t);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drku, hs_sat26Drkt);
                case 2:
                    return hs_done26Dr7j.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ir126Dr7t, hs_ow126Dr7v);
                }
            case 2:
                return hs_done26Dr7j.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ir126Dr7t, hs_ow126Dr7v);
            }
        };
        var hs_sat26Drkv = new $hs.Data(1);
        hs_sat26Drkv.data = [hs_rb926Dr8E];
        var hs_sat26Drkw = new $hs.Data(1);
        hs_sat26Drkw.data = [hs_rb326Dr8C];
        return hs_loop26Dr8j.hscall(hs_sat26Drkw, hs_sat26Drkv);
    };
    hs_sat26Drky.evaluateOnce = function () {
        var hs_sat26Drkx = new $hs.Thunk();
        hs_sat26Drkx.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziBase.hs_const, hs_sat26Drkx);
    };
    hs_sat26Drkz.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_sat26DrkA.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_sat26DrkB.data = [$hs.modules.GHCziIOziEncodingziUTF16.hs_utf16lezuencode, hs_sat26DrkA, hs_sat26Drkz, hs_sat26Drky];
    hs_utf16lezuEF25tyv0.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrkB);
    };
    hs_validate225tyvg.evaluate = function (hs_x126Dr8N, hs_x226Dr8U) {
        var hs_sat26DrkM = new $hs.Thunk();
        hs_sat26DrkM.evaluateOnce = function () {
            var hs_sat26DrkI = new $hs.Thunk();
            hs_sat26DrkI.evaluateOnce = function () {
                var hs_sat26DrkE = new $hs.Thunk();
                hs_sat26DrkE.evaluateOnce = function () {
                    var hs_sat26DrkD = new $hs.Thunk();
                    hs_sat26DrkD.evaluateOnce = function () {
                        var hs_sat26DrkC = new $hs.Thunk();
                        hs_sat26DrkC.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(57343);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26DrkC);
                    };
                    return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16, hs_x226Dr8U, hs_sat26DrkD);
                };
                var hs_sat26DrkH = new $hs.Thunk();
                hs_sat26DrkH.evaluateOnce = function () {
                    var hs_sat26DrkG = new $hs.Thunk();
                    hs_sat26DrkG.evaluateOnce = function () {
                        var hs_sat26DrkF = new $hs.Thunk();
                        hs_sat26DrkF.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(56320);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26DrkF);
                    };
                    return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16, hs_x226Dr8U, hs_sat26DrkG);
                };
                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DrkH, hs_sat26DrkE);
            };
            var hs_sat26DrkL = new $hs.Thunk();
            hs_sat26DrkL.evaluateOnce = function () {
                var hs_sat26DrkK = new $hs.Thunk();
                hs_sat26DrkK.evaluateOnce = function () {
                    var hs_sat26DrkJ = new $hs.Thunk();
                    hs_sat26DrkJ.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(56319);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26DrkJ);
                };
                return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16, hs_x126Dr8N, hs_sat26DrkK);
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DrkL, hs_sat26DrkI);
        };
        var hs_sat26DrkP = new $hs.Thunk();
        hs_sat26DrkP.evaluateOnce = function () {
            var hs_sat26DrkO = new $hs.Thunk();
            hs_sat26DrkO.evaluateOnce = function () {
                var hs_sat26DrkN = new $hs.Thunk();
                hs_sat26DrkN.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(55296);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26DrkN);
            };
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16, hs_x126Dr8N, hs_sat26DrkO);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DrkP, hs_sat26DrkM);
    };
    this.hs_utf16bezudecode.evaluate = function (hs_input26Dr95, hs_output26Dr9n) {
        var hs_wild26Dr9P = hs_input26Dr95;
        if (hs_input26Dr95.notEvaluated) {
            hs_wild26Dr9P = hs_input26Dr95.hscall();
        }
        var hs_rb26Dr9e = hs_wild26Dr9P.data[0];
        var hs_rb126Dr9f = hs_wild26Dr9P.data[1];
        var hs_rb326Dr9i = hs_wild26Dr9P.data[4];
        var hs_rb426Dr9l = hs_wild26Dr9P.data[5];
        var hs_iraw26Dr9g = new $hs.Data(1);
        hs_iraw26Dr9g.data = [hs_rb26Dr9e, hs_rb126Dr9f];
        var hs_ir026Dr9j = new $hs.Data(1);
        hs_ir026Dr9j.data = [hs_rb326Dr9i];
        var hs_iw26Dr9m = new $hs.Data(1);
        hs_iw26Dr9m.data = [hs_rb426Dr9l];
        var hs_wild126Drah = hs_output26Dr9n;
        if (hs_output26Dr9n.notEvaluated) {
            hs_wild126Drah = hs_output26Dr9n.hscall();
        }
        var hs_rb526Dr9w = hs_wild126Drah.data[0];
        var hs_rb626Dr9x = hs_wild126Drah.data[1];
        var hs_rb726Dr9A = hs_wild126Drah.data[3];
        var hs_rb926Drcd = hs_wild126Drah.data[5];
        var hs_oraw26Dr9y = new $hs.Data(1);
        hs_oraw26Dr9y.data = [hs_rb526Dr9w, hs_rb626Dr9x];
        var hs_os26Dr9B = new $hs.Data(1);
        hs_os26Dr9B.data = [hs_rb726Dr9A];
        var hs_done26DraA = new $hs.Func(3);
        hs_done26DraA.evaluate = function (hs_zddMonad26Dr9M, hs_ir26Dr9G, hs_ow26Dr9J) {
            var hs_ir126Dr9N = hs_ir26Dr9G;
            if (hs_ir26Dr9G.notEvaluated) {
                hs_ir126Dr9N = hs_ir26Dr9G.hscall();
            }
            var hs_ow126Drap = hs_ow26Dr9J;
            if (hs_ow26Dr9J.notEvaluated) {
                hs_ow126Drap = hs_ow26Dr9J.hscall();
            }
            var hs_sat26Drl2 = new $hs.Thunk();
            hs_sat26Drl2.evaluateOnce = function () {
                var hs_wild226DrkV = hs_wild126Drah;
                if (hs_wild126Drah.notEvaluated) {
                    hs_wild226DrkV = hs_wild126Drah.hscall();
                }
                var hs_rb1026Dras = hs_wild226DrkV.data[0];
                var hs_rb1126Drat = hs_wild226DrkV.data[1];
                var hs_ds226Drau = hs_wild226DrkV.data[2];
                var hs_rb1226Drav = hs_wild226DrkV.data[3];
                var hs_rb1326Draw = hs_wild226DrkV.data[4];
                var hs_tpl26DrkU = hs_ow126Drap;
                if (hs_ow126Drap.notEvaluated) {
                    hs_tpl26DrkU = hs_ow126Drap.hscall();
                }
                var hs_tpl126Drax = hs_tpl26DrkU.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb1026Dras, hs_rb1126Drat, hs_ds226Drau, hs_rb1226Drav, hs_rb1326Draw, hs_tpl126Drax];
                return $res;
            };
            var hs_sat26Drl7 = new $hs.Thunk();
            hs_sat26Drl7.evaluateOnce = function () {
                var hs_wild226Drl1 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_ir126Dr9N, hs_iw26Dr9m);
                switch (hs_wild226Drl1.tag) {
                case 1:
                    var hs_wild326Drl0 = hs_wild26Dr9P;
                    if (hs_wild26Dr9P.notEvaluated) {
                        hs_wild326Drl0 = hs_wild26Dr9P.hscall();
                    }
                    var hs_rb1026Dr9Z = hs_wild326Drl0.data[0];
                    var hs_rb1126Dra0 = hs_wild326Drl0.data[1];
                    var hs_ds226Dra1 = hs_wild326Drl0.data[2];
                    var hs_rb1226Dra2 = hs_wild326Drl0.data[3];
                    var hs_rb1426Dra4 = hs_wild326Drl0.data[5];
                    var hs_tpl26DrkZ = hs_ir126Dr9N;
                    if (hs_ir126Dr9N.notEvaluated) {
                        hs_tpl26DrkZ = hs_ir126Dr9N.hscall();
                    }
                    var hs_tpl126Dra3 = hs_tpl26DrkZ.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026Dr9Z, hs_rb1126Dra0, hs_ds226Dra1, hs_rb1226Dra2, hs_tpl126Dra3, hs_rb1426Dra4];
                    return $res;
                case 2:
                    var hs_wild326Drl4 = hs_wild26Dr9P;
                    if (hs_wild26Dr9P.notEvaluated) {
                        hs_wild326Drl4 = hs_wild26Dr9P.hscall();
                    }
                    var hs_rb1026Drac = hs_wild326Drl4.data[0];
                    var hs_rb1126Drad = hs_wild326Drl4.data[1];
                    var hs_ds226Drae = hs_wild326Drl4.data[2];
                    var hs_rb1226Draf = hs_wild326Drl4.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026Drac, hs_rb1126Drad, hs_ds226Drae, hs_rb1226Draf, 0, 0];
                    return $res;
                }
            };
            var hs_sat26Drl8 = new $hs.Data(1);
            hs_sat26Drl8.data = [hs_sat26Drl7, hs_sat26Drl2];
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26Dr9M, hs_sat26Drl8);
        };
        var hs_loop26DrbX = new $hs.Func(2);
        hs_loop26DrbX.evaluate = function (hs_ir26DraE, hs_ow26DraH) {
            var hs_ir126DraL = hs_ir26DraE;
            if (hs_ir26DraE.notEvaluated) {
                hs_ir126DraL = hs_ir26DraE.hscall();
            }
            var hs_ow126DraN = hs_ow26DraH;
            if (hs_ow26DraH.notEvaluated) {
                hs_ow126DraN = hs_ow26DraH.hscall();
            }
            var hs_invalid26DraO = new $hs.Thunk();
            hs_invalid26DraO.evaluateOnce = function () {
                var hs_wild226Drl9 = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ir126DraL, hs_ir026Dr9j);
                switch (hs_wild226Drl9.tag) {
                case 1:
                    if (hs_ioezudecodingError25tyv6.notEvaluated) {
                        return hs_ioezudecodingError25tyv6.hscall();
                    } else {
                        return hs_ioezudecodingError25tyv6;
                    }
                case 2:
                    return hs_done26DraA.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ir126DraL, hs_ow126DraN);
                }
            };
            var hs_sat26Drlc = new $hs.Thunk();
            hs_sat26Drlc.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ir126DraL, hs_iw26Dr9m);
            };
            var hs_sat26Drle = new $hs.Thunk();
            hs_sat26Drle.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ow126DraN, hs_os26Dr9B);
            };
            var hs_wild226Drld = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26Drle, hs_sat26Drlc);
            switch (hs_wild226Drld.tag) {
            case 1:
                var hs_sat26Drlh = new $hs.Thunk();
                hs_sat26Drlh.evaluateOnce = function () {
                    var hs_sat26Drlf = new $hs.Data(1);
                    hs_sat26Drlf.data = [1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126DraL, hs_sat26Drlf);
                };
                var hs_wild326Drlg = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26Drlh, hs_iw26Dr9m);
                switch (hs_wild326Drlg.tag) {
                case 1:
                    var hs_sat26Drmd = new $hs.Func(1);
                    hs_sat26Drmd.evaluate = function (hs_c026Drb2) {
                        var hs_sat26Drm9 = new $hs.Func(1);
                        hs_sat26Drm9.evaluate = function (hs_c126Drb6) {
                            var hs_x126Drb8 = new $hs.Thunk();
                            hs_x126Drb8.evaluateOnce = function () {
                                var hs_sat26Drli = new $hs.Thunk();
                                hs_sat26Drli.evaluateOnce = function () {
                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord16, hs_c126Drb6);
                                };
                                var hs_sat26Drll = new $hs.Thunk();
                                hs_sat26Drll.evaluateOnce = function () {
                                    var hs_sat26Drlj = new $hs.Data(1);
                                    hs_sat26Drlj.data = [8];
                                    var hs_sat26Drlk = new $hs.Thunk();
                                    hs_sat26Drlk.evaluateOnce = function () {
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord16, hs_c026Drb2);
                                    };
                                    return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16, hs_sat26Drlk, hs_sat26Drlj);
                                };
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26Drll, hs_sat26Drli);
                            };
                            var hs_sat26Drlo = new $hs.Thunk();
                            hs_sat26Drlo.evaluateOnce = function () {
                                var hs_sat26Drln = new $hs.Thunk();
                                hs_sat26Drln.evaluateOnce = function () {
                                    var hs_sat26Drlm = new $hs.Thunk();
                                    hs_sat26Drlm.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(57343);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26Drlm);
                                };
                                return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16, hs_x126Drb8, hs_sat26Drln);
                            };
                            var hs_sat26Drlw = new $hs.Thunk();
                            hs_sat26Drlw.evaluateOnce = function () {
                                var hs_sat26Drlr = new $hs.Thunk();
                                hs_sat26Drlr.evaluateOnce = function () {
                                    var hs_sat26Drlq = new $hs.Thunk();
                                    hs_sat26Drlq.evaluateOnce = function () {
                                        var hs_sat26Drlp = new $hs.Thunk();
                                        hs_sat26Drlp.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(55296);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26Drlp);
                                    };
                                    return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16, hs_x126Drb8, hs_sat26Drlq);
                                };
                                var hs_sat26Drlu = new $hs.Thunk();
                                hs_sat26Drlu.evaluateOnce = function () {
                                    var hs_sat26Drlt = new $hs.Thunk();
                                    hs_sat26Drlt.evaluateOnce = function () {
                                        var hs_sat26Drls = new $hs.Thunk();
                                        hs_sat26Drls.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26Drls);
                                    };
                                    return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16, hs_x126Drb8, hs_sat26Drlt);
                                };
                                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Drlu, hs_sat26Drlr);
                            };
                            var hs_wild426Drlv = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26Drlw, hs_sat26Drlo);
                            switch (hs_wild426Drlv.tag) {
                            case 1:
                                var hs_sat26Drlx = new $hs.Data(1);
                                hs_sat26Drlx.data = [4];
                                var hs_sat26Drlz = new $hs.Thunk();
                                hs_sat26Drlz.evaluateOnce = function () {
                                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_iw26Dr9m, hs_ir126DraL);
                                };
                                var hs_wild526Drly = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26Drlz, hs_sat26Drlx);
                                switch (hs_wild526Drly.tag) {
                                case 1:
                                    var hs_sat26DrlZ = new $hs.Func(1);
                                    hs_sat26DrlZ.evaluate = function (hs_c226Drbw) {
                                        var hs_sat26DrlV = new $hs.Func(1);
                                        hs_sat26DrlV.evaluate = function (hs_c326DrbA) {
                                            var hs_x226DrbC = new $hs.Thunk();
                                            hs_x226DrbC.evaluateOnce = function () {
                                                var hs_sat26DrlA = new $hs.Thunk();
                                                hs_sat26DrlA.evaluateOnce = function () {
                                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord16, hs_c326DrbA);
                                                };
                                                var hs_sat26DrlD = new $hs.Thunk();
                                                hs_sat26DrlD.evaluateOnce = function () {
                                                    var hs_sat26DrlB = new $hs.Data(1);
                                                    hs_sat26DrlB.data = [8];
                                                    var hs_sat26DrlC = new $hs.Thunk();
                                                    hs_sat26DrlC.evaluateOnce = function () {
                                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord16, hs_c226Drbw);
                                                    };
                                                    return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16, hs_sat26DrlC, hs_sat26DrlB);
                                                };
                                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26DrlD, hs_sat26DrlA);
                                            };
                                            var hs_sat26DrlF = new $hs.Thunk();
                                            hs_sat26DrlF.evaluateOnce = function () {
                                                return hs_validate225tyvg.hscall(hs_x126Drb8, hs_x226DrbC);
                                            };
                                            var hs_wild626DrlE = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DrlF);
                                            switch (hs_wild626DrlE.tag) {
                                            case 1:
                                                var hs_sat26DrlS = new $hs.Func(1);
                                                hs_sat26DrlS.evaluate = function (hs_owzq26DrbZ) {
                                                    var hs_sat26DrlH = new $hs.Thunk();
                                                    hs_sat26DrlH.evaluateOnce = function () {
                                                        var hs_sat26DrlG = new $hs.Data(1);
                                                        hs_sat26DrlG.data = [4];
                                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126DraL, hs_sat26DrlG);
                                                    };
                                                    return hs_loop26DrbX.hscall(hs_sat26DrlH, hs_owzq26DrbZ);
                                                };
                                                var hs_sat26DrlU = new $hs.Thunk();
                                                hs_sat26DrlU.evaluateOnce = function () {
                                                    var hs_sat26DrlT = new $hs.Thunk();
                                                    hs_sat26DrlT.evaluateOnce = function () {
                                                        var hs_wild726DrlR = hs_x126Drb8;
                                                        if (hs_x126Drb8.notEvaluated) {
                                                            hs_wild726DrlR = hs_x126Drb8.hscall();
                                                        }
                                                        var hs_azh26DrbJ = hs_wild726DrlR.data[0];
                                                        var hs_wild826DrlQ = hs_x226DrbC;
                                                        if (hs_x226DrbC.notEvaluated) {
                                                            hs_wild826DrlQ = hs_x226DrbC.hscall();
                                                        }
                                                        var hs_bzh26DrbN = hs_wild826DrlQ.data[0];
                                                        var hs_sat26DrlP = hs_bzh26DrbN;
                                                        var hs_sat26DrlO = ($hs.Int.addCarry(hs_sat26DrlP, ~56320, 1))[0];
                                                        var hs_sat26DrlN = hs_azh26DrbJ;
                                                        var hs_sat26DrlM = ($hs.Int.addCarry(hs_sat26DrlN, ~55296, 1))[0];
                                                        var hs_sat26DrlL = hs_sat26DrlM << 10;
                                                        var hs_sat26DrlK = ($hs.Int.addCarry(hs_sat26DrlL, hs_sat26DrlO, 0))[0];
                                                        var hs_sat26DrlJ = ($hs.Int.addCarry(hs_sat26DrlK, 65536, 0))[0];
                                                        var hs_sat26DrlI = String.fromCharCode(hs_sat26DrlJ);
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [hs_sat26DrlI];
                                                        return $res;
                                                    };
                                                    return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_oraw26Dr9y, hs_ow126DraN, hs_sat26DrlT);
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrlU, hs_sat26DrlS);
                                            case 2:
                                                if (hs_invalid26DraO.notEvaluated) {
                                                    return hs_invalid26DraO.hscall();
                                                } else {
                                                    return hs_invalid26DraO;
                                                }
                                            }
                                        };
                                        var hs_sat26DrlY = new $hs.Thunk();
                                        hs_sat26DrlY.evaluateOnce = function () {
                                            var hs_sat26DrlX = new $hs.Thunk();
                                            hs_sat26DrlX.evaluateOnce = function () {
                                                var hs_sat26DrlW = new $hs.Data(1);
                                                hs_sat26DrlW.data = [3];
                                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126DraL, hs_sat26DrlW);
                                            };
                                            return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26Dr9g, hs_sat26DrlX);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrlY, hs_sat26DrlV);
                                    };
                                    var hs_sat26Drm2 = new $hs.Thunk();
                                    hs_sat26Drm2.evaluateOnce = function () {
                                        var hs_sat26Drm1 = new $hs.Thunk();
                                        hs_sat26Drm1.evaluateOnce = function () {
                                            var hs_sat26Drm0 = new $hs.Data(1);
                                            hs_sat26Drm0.data = [2];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126DraL, hs_sat26Drm0);
                                        };
                                        return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26Dr9g, hs_sat26Drm1);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drm2, hs_sat26DrlZ);
                                case 2:
                                    return hs_done26DraA.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ir126DraL, hs_ow126DraN);
                                }
                            case 2:
                                var hs_sat26Drm5 = new $hs.Func(1);
                                hs_sat26Drm5.evaluate = function (hs_owzq26Drc9) {
                                    var hs_sat26Drm4 = new $hs.Thunk();
                                    hs_sat26Drm4.evaluateOnce = function () {
                                        var hs_sat26Drm3 = new $hs.Data(1);
                                        hs_sat26Drm3.data = [2];
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126DraL, hs_sat26Drm3);
                                    };
                                    return hs_loop26DrbX.hscall(hs_sat26Drm4, hs_owzq26Drc9);
                                };
                                var hs_sat26Drm8 = new $hs.Thunk();
                                hs_sat26Drm8.evaluateOnce = function () {
                                    var hs_sat26Drm7 = new $hs.Thunk();
                                    hs_sat26Drm7.evaluateOnce = function () {
                                        var hs_sat26Drm6 = new $hs.Thunk();
                                        hs_sat26Drm6.evaluateOnce = function () {
                                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16, $hs.modules.GHCziNum.hs_zdfNumInt, hs_x126Drb8);
                                        };
                                        return $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26Drm6);
                                    };
                                    return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_oraw26Dr9y, hs_ow126DraN, hs_sat26Drm7);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drm8, hs_sat26Drm5);
                            }
                        };
                        var hs_sat26Drmc = new $hs.Thunk();
                        hs_sat26Drmc.evaluateOnce = function () {
                            var hs_sat26Drmb = new $hs.Thunk();
                            hs_sat26Drmb.evaluateOnce = function () {
                                var hs_sat26Drma = new $hs.Data(1);
                                hs_sat26Drma.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126DraL, hs_sat26Drma);
                            };
                            return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26Dr9g, hs_sat26Drmb);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drmc, hs_sat26Drm9);
                    };
                    var hs_sat26Drme = new $hs.Thunk();
                    hs_sat26Drme.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26Dr9g, hs_ir126DraL);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drme, hs_sat26Drmd);
                case 2:
                    return hs_done26DraA.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ir126DraL, hs_ow126DraN);
                }
            case 2:
                return hs_done26DraA.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ir126DraL, hs_ow126DraN);
            }
        };
        var hs_sat26Drmf = new $hs.Data(1);
        hs_sat26Drmf.data = [hs_rb926Drcd];
        return hs_loop26DrbX.hscall(hs_ir026Dr9j, hs_sat26Drmf);
    };
    hs_sat26Drmh.evaluateOnce = function () {
        var hs_sat26Drmg = new $hs.Thunk();
        hs_sat26Drmg.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziBase.hs_const, hs_sat26Drmg);
    };
    hs_sat26Drmi.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_sat26Drmj.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_sat26Drmk.data = [$hs.modules.GHCziIOziEncodingziUTF16.hs_utf16bezudecode, hs_sat26Drmj, hs_sat26Drmi, hs_sat26Drmh];
    hs_utf16bezuDF25tyuS.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drmk);
    };
    hs_a25v2G5.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("UTF-16BE\x00");
    };
    this.hs_utf16be.data = [hs_a25v2G5, hs_utf16bezuDF25tyuS, hs_utf16bezuEF25tyuU];
    this.hs_utf16lezudecode.evaluate = function (hs_input26Drco, hs_output26DrcG) {
        var hs_wild26Drd8 = hs_input26Drco;
        if (hs_input26Drco.notEvaluated) {
            hs_wild26Drd8 = hs_input26Drco.hscall();
        }
        var hs_rb26Drcx = hs_wild26Drd8.data[0];
        var hs_rb126Drcy = hs_wild26Drd8.data[1];
        var hs_rb326DrcB = hs_wild26Drd8.data[4];
        var hs_rb426DrcE = hs_wild26Drd8.data[5];
        var hs_iraw26Drcz = new $hs.Data(1);
        hs_iraw26Drcz.data = [hs_rb26Drcx, hs_rb126Drcy];
        var hs_ir026DrcC = new $hs.Data(1);
        hs_ir026DrcC.data = [hs_rb326DrcB];
        var hs_iw26DrcF = new $hs.Data(1);
        hs_iw26DrcF.data = [hs_rb426DrcE];
        var hs_wild126DrdA = hs_output26DrcG;
        if (hs_output26DrcG.notEvaluated) {
            hs_wild126DrdA = hs_output26DrcG.hscall();
        }
        var hs_rb526DrcP = hs_wild126DrdA.data[0];
        var hs_rb626DrcQ = hs_wild126DrdA.data[1];
        var hs_rb726DrcT = hs_wild126DrdA.data[3];
        var hs_rb926Drfw = hs_wild126DrdA.data[5];
        var hs_oraw26DrcR = new $hs.Data(1);
        hs_oraw26DrcR.data = [hs_rb526DrcP, hs_rb626DrcQ];
        var hs_os26DrcU = new $hs.Data(1);
        hs_os26DrcU.data = [hs_rb726DrcT];
        var hs_done26DrdT = new $hs.Func(3);
        hs_done26DrdT.evaluate = function (hs_zddMonad26Drd5, hs_ir26DrcZ, hs_ow26Drd2) {
            var hs_ir126Drd6 = hs_ir26DrcZ;
            if (hs_ir26DrcZ.notEvaluated) {
                hs_ir126Drd6 = hs_ir26DrcZ.hscall();
            }
            var hs_ow126DrdI = hs_ow26Drd2;
            if (hs_ow26Drd2.notEvaluated) {
                hs_ow126DrdI = hs_ow26Drd2.hscall();
            }
            var hs_sat26Drmx = new $hs.Thunk();
            hs_sat26Drmx.evaluateOnce = function () {
                var hs_wild226Drmq = hs_wild126DrdA;
                if (hs_wild126DrdA.notEvaluated) {
                    hs_wild226Drmq = hs_wild126DrdA.hscall();
                }
                var hs_rb1026DrdL = hs_wild226Drmq.data[0];
                var hs_rb1126DrdM = hs_wild226Drmq.data[1];
                var hs_ds226DrdN = hs_wild226Drmq.data[2];
                var hs_rb1226DrdO = hs_wild226Drmq.data[3];
                var hs_rb1326DrdP = hs_wild226Drmq.data[4];
                var hs_tpl26Drmp = hs_ow126DrdI;
                if (hs_ow126DrdI.notEvaluated) {
                    hs_tpl26Drmp = hs_ow126DrdI.hscall();
                }
                var hs_tpl126DrdQ = hs_tpl26Drmp.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb1026DrdL, hs_rb1126DrdM, hs_ds226DrdN, hs_rb1226DrdO, hs_rb1326DrdP, hs_tpl126DrdQ];
                return $res;
            };
            var hs_sat26DrmC = new $hs.Thunk();
            hs_sat26DrmC.evaluateOnce = function () {
                var hs_wild226Drmw = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_ir126Drd6, hs_iw26DrcF);
                switch (hs_wild226Drmw.tag) {
                case 1:
                    var hs_wild326Drmv = hs_wild26Drd8;
                    if (hs_wild26Drd8.notEvaluated) {
                        hs_wild326Drmv = hs_wild26Drd8.hscall();
                    }
                    var hs_rb1026Drdi = hs_wild326Drmv.data[0];
                    var hs_rb1126Drdj = hs_wild326Drmv.data[1];
                    var hs_ds226Drdk = hs_wild326Drmv.data[2];
                    var hs_rb1226Drdl = hs_wild326Drmv.data[3];
                    var hs_rb1426Drdn = hs_wild326Drmv.data[5];
                    var hs_tpl26Drmu = hs_ir126Drd6;
                    if (hs_ir126Drd6.notEvaluated) {
                        hs_tpl26Drmu = hs_ir126Drd6.hscall();
                    }
                    var hs_tpl126Drdm = hs_tpl26Drmu.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026Drdi, hs_rb1126Drdj, hs_ds226Drdk, hs_rb1226Drdl, hs_tpl126Drdm, hs_rb1426Drdn];
                    return $res;
                case 2:
                    var hs_wild326Drmz = hs_wild26Drd8;
                    if (hs_wild26Drd8.notEvaluated) {
                        hs_wild326Drmz = hs_wild26Drd8.hscall();
                    }
                    var hs_rb1026Drdv = hs_wild326Drmz.data[0];
                    var hs_rb1126Drdw = hs_wild326Drmz.data[1];
                    var hs_ds226Drdx = hs_wild326Drmz.data[2];
                    var hs_rb1226Drdy = hs_wild326Drmz.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026Drdv, hs_rb1126Drdw, hs_ds226Drdx, hs_rb1226Drdy, 0, 0];
                    return $res;
                }
            };
            var hs_sat26DrmD = new $hs.Data(1);
            hs_sat26DrmD.data = [hs_sat26DrmC, hs_sat26Drmx];
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26Drd5, hs_sat26DrmD);
        };
        var hs_loop26Drfg = new $hs.Func(2);
        hs_loop26Drfg.evaluate = function (hs_ir26DrdX, hs_ow26Dre0) {
            var hs_ir126Dre4 = hs_ir26DrdX;
            if (hs_ir26DrdX.notEvaluated) {
                hs_ir126Dre4 = hs_ir26DrdX.hscall();
            }
            var hs_ow126Dre6 = hs_ow26Dre0;
            if (hs_ow26Dre0.notEvaluated) {
                hs_ow126Dre6 = hs_ow26Dre0.hscall();
            }
            var hs_invalid26Dre7 = new $hs.Thunk();
            hs_invalid26Dre7.evaluateOnce = function () {
                var hs_wild226DrmE = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ir126Dre4, hs_ir026DrcC);
                switch (hs_wild226DrmE.tag) {
                case 1:
                    if (hs_ioezudecodingError25tyv6.notEvaluated) {
                        return hs_ioezudecodingError25tyv6.hscall();
                    } else {
                        return hs_ioezudecodingError25tyv6;
                    }
                case 2:
                    return hs_done26DrdT.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ir126Dre4, hs_ow126Dre6);
                }
            };
            var hs_sat26DrmH = new $hs.Thunk();
            hs_sat26DrmH.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ir126Dre4, hs_iw26DrcF);
            };
            var hs_sat26DrmJ = new $hs.Thunk();
            hs_sat26DrmJ.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ow126Dre6, hs_os26DrcU);
            };
            var hs_wild226DrmI = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DrmJ, hs_sat26DrmH);
            switch (hs_wild226DrmI.tag) {
            case 1:
                var hs_sat26DrmM = new $hs.Thunk();
                hs_sat26DrmM.evaluateOnce = function () {
                    var hs_sat26DrmK = new $hs.Data(1);
                    hs_sat26DrmK.data = [1];
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126Dre4, hs_sat26DrmK);
                };
                var hs_wild326DrmL = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DrmM, hs_iw26DrcF);
                switch (hs_wild326DrmL.tag) {
                case 1:
                    var hs_sat26DrnI = new $hs.Func(1);
                    hs_sat26DrnI.evaluate = function (hs_c026Drep) {
                        var hs_sat26DrnE = new $hs.Func(1);
                        hs_sat26DrnE.evaluate = function (hs_c126Drel) {
                            var hs_x126Drer = new $hs.Thunk();
                            hs_x126Drer.evaluateOnce = function () {
                                var hs_sat26DrmN = new $hs.Thunk();
                                hs_sat26DrmN.evaluateOnce = function () {
                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord16, hs_c026Drep);
                                };
                                var hs_sat26DrmQ = new $hs.Thunk();
                                hs_sat26DrmQ.evaluateOnce = function () {
                                    var hs_sat26DrmO = new $hs.Data(1);
                                    hs_sat26DrmO.data = [8];
                                    var hs_sat26DrmP = new $hs.Thunk();
                                    hs_sat26DrmP.evaluateOnce = function () {
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord16, hs_c126Drel);
                                    };
                                    return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16, hs_sat26DrmP, hs_sat26DrmO);
                                };
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26DrmQ, hs_sat26DrmN);
                            };
                            var hs_sat26DrmT = new $hs.Thunk();
                            hs_sat26DrmT.evaluateOnce = function () {
                                var hs_sat26DrmS = new $hs.Thunk();
                                hs_sat26DrmS.evaluateOnce = function () {
                                    var hs_sat26DrmR = new $hs.Thunk();
                                    hs_sat26DrmR.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(57343);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26DrmR);
                                };
                                return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16, hs_x126Drer, hs_sat26DrmS);
                            };
                            var hs_sat26Drn1 = new $hs.Thunk();
                            hs_sat26Drn1.evaluateOnce = function () {
                                var hs_sat26DrmW = new $hs.Thunk();
                                hs_sat26DrmW.evaluateOnce = function () {
                                    var hs_sat26DrmV = new $hs.Thunk();
                                    hs_sat26DrmV.evaluateOnce = function () {
                                        var hs_sat26DrmU = new $hs.Thunk();
                                        hs_sat26DrmU.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(55296);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26DrmU);
                                    };
                                    return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16, hs_x126Drer, hs_sat26DrmV);
                                };
                                var hs_sat26DrmZ = new $hs.Thunk();
                                hs_sat26DrmZ.evaluateOnce = function () {
                                    var hs_sat26DrmY = new $hs.Thunk();
                                    hs_sat26DrmY.evaluateOnce = function () {
                                        var hs_sat26DrmX = new $hs.Thunk();
                                        hs_sat26DrmX.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26DrmX);
                                    };
                                    return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16, hs_x126Drer, hs_sat26DrmY);
                                };
                                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DrmZ, hs_sat26DrmW);
                            };
                            var hs_wild426Drn0 = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26Drn1, hs_sat26DrmT);
                            switch (hs_wild426Drn0.tag) {
                            case 1:
                                var hs_sat26Drn2 = new $hs.Data(1);
                                hs_sat26Drn2.data = [4];
                                var hs_sat26Drn4 = new $hs.Thunk();
                                hs_sat26Drn4.evaluateOnce = function () {
                                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_iw26DrcF, hs_ir126Dre4);
                                };
                                var hs_wild526Drn3 = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26Drn4, hs_sat26Drn2);
                                switch (hs_wild526Drn3.tag) {
                                case 1:
                                    var hs_sat26Drnu = new $hs.Func(1);
                                    hs_sat26Drnu.evaluate = function (hs_c226DreT) {
                                        var hs_sat26Drnq = new $hs.Func(1);
                                        hs_sat26Drnq.evaluate = function (hs_c326DreP) {
                                            var hs_x226DreV = new $hs.Thunk();
                                            hs_x226DreV.evaluateOnce = function () {
                                                var hs_sat26Drn5 = new $hs.Thunk();
                                                hs_sat26Drn5.evaluateOnce = function () {
                                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord16, hs_c226DreT);
                                                };
                                                var hs_sat26Drn8 = new $hs.Thunk();
                                                hs_sat26Drn8.evaluateOnce = function () {
                                                    var hs_sat26Drn6 = new $hs.Data(1);
                                                    hs_sat26Drn6.data = [8];
                                                    var hs_sat26Drn7 = new $hs.Thunk();
                                                    hs_sat26Drn7.evaluateOnce = function () {
                                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord16, hs_c326DreP);
                                                    };
                                                    return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16, hs_sat26Drn7, hs_sat26Drn6);
                                                };
                                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26Drn8, hs_sat26Drn5);
                                            };
                                            var hs_sat26Drna = new $hs.Thunk();
                                            hs_sat26Drna.evaluateOnce = function () {
                                                return hs_validate225tyvg.hscall(hs_x126Drer, hs_x226DreV);
                                            };
                                            var hs_wild626Drn9 = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26Drna);
                                            switch (hs_wild626Drn9.tag) {
                                            case 1:
                                                var hs_sat26Drnn = new $hs.Func(1);
                                                hs_sat26Drnn.evaluate = function (hs_owzq26Drfi) {
                                                    var hs_sat26Drnc = new $hs.Thunk();
                                                    hs_sat26Drnc.evaluateOnce = function () {
                                                        var hs_sat26Drnb = new $hs.Data(1);
                                                        hs_sat26Drnb.data = [4];
                                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126Dre4, hs_sat26Drnb);
                                                    };
                                                    return hs_loop26Drfg.hscall(hs_sat26Drnc, hs_owzq26Drfi);
                                                };
                                                var hs_sat26Drnp = new $hs.Thunk();
                                                hs_sat26Drnp.evaluateOnce = function () {
                                                    var hs_sat26Drno = new $hs.Thunk();
                                                    hs_sat26Drno.evaluateOnce = function () {
                                                        var hs_wild726Drnm = hs_x126Drer;
                                                        if (hs_x126Drer.notEvaluated) {
                                                            hs_wild726Drnm = hs_x126Drer.hscall();
                                                        }
                                                        var hs_azh26Drf2 = hs_wild726Drnm.data[0];
                                                        var hs_wild826Drnl = hs_x226DreV;
                                                        if (hs_x226DreV.notEvaluated) {
                                                            hs_wild826Drnl = hs_x226DreV.hscall();
                                                        }
                                                        var hs_bzh26Drf6 = hs_wild826Drnl.data[0];
                                                        var hs_sat26Drnk = hs_bzh26Drf6;
                                                        var hs_sat26Drnj = ($hs.Int.addCarry(hs_sat26Drnk, ~56320, 1))[0];
                                                        var hs_sat26Drni = hs_azh26Drf2;
                                                        var hs_sat26Drnh = ($hs.Int.addCarry(hs_sat26Drni, ~55296, 1))[0];
                                                        var hs_sat26Drng = hs_sat26Drnh << 10;
                                                        var hs_sat26Drnf = ($hs.Int.addCarry(hs_sat26Drng, hs_sat26Drnj, 0))[0];
                                                        var hs_sat26Drne = ($hs.Int.addCarry(hs_sat26Drnf, 65536, 0))[0];
                                                        var hs_sat26Drnd = String.fromCharCode(hs_sat26Drne);
                                                        var $res = new $hs.Data(1);
                                                        $res.data = [hs_sat26Drnd];
                                                        return $res;
                                                    };
                                                    return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_oraw26DrcR, hs_ow126Dre6, hs_sat26Drno);
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drnp, hs_sat26Drnn);
                                            case 2:
                                                if (hs_invalid26Dre7.notEvaluated) {
                                                    return hs_invalid26Dre7.hscall();
                                                } else {
                                                    return hs_invalid26Dre7;
                                                }
                                            }
                                        };
                                        var hs_sat26Drnt = new $hs.Thunk();
                                        hs_sat26Drnt.evaluateOnce = function () {
                                            var hs_sat26Drns = new $hs.Thunk();
                                            hs_sat26Drns.evaluateOnce = function () {
                                                var hs_sat26Drnr = new $hs.Data(1);
                                                hs_sat26Drnr.data = [3];
                                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126Dre4, hs_sat26Drnr);
                                            };
                                            return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26Drcz, hs_sat26Drns);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drnt, hs_sat26Drnq);
                                    };
                                    var hs_sat26Drnx = new $hs.Thunk();
                                    hs_sat26Drnx.evaluateOnce = function () {
                                        var hs_sat26Drnw = new $hs.Thunk();
                                        hs_sat26Drnw.evaluateOnce = function () {
                                            var hs_sat26Drnv = new $hs.Data(1);
                                            hs_sat26Drnv.data = [2];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126Dre4, hs_sat26Drnv);
                                        };
                                        return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26Drcz, hs_sat26Drnw);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drnx, hs_sat26Drnu);
                                case 2:
                                    return hs_done26DrdT.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ir126Dre4, hs_ow126Dre6);
                                }
                            case 2:
                                var hs_sat26DrnA = new $hs.Func(1);
                                hs_sat26DrnA.evaluate = function (hs_owzq26Drfs) {
                                    var hs_sat26Drnz = new $hs.Thunk();
                                    hs_sat26Drnz.evaluateOnce = function () {
                                        var hs_sat26Drny = new $hs.Data(1);
                                        hs_sat26Drny.data = [2];
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126Dre4, hs_sat26Drny);
                                    };
                                    return hs_loop26Drfg.hscall(hs_sat26Drnz, hs_owzq26Drfs);
                                };
                                var hs_sat26DrnD = new $hs.Thunk();
                                hs_sat26DrnD.evaluateOnce = function () {
                                    var hs_sat26DrnC = new $hs.Thunk();
                                    hs_sat26DrnC.evaluateOnce = function () {
                                        var hs_sat26DrnB = new $hs.Thunk();
                                        hs_sat26DrnB.evaluateOnce = function () {
                                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16, $hs.modules.GHCziNum.hs_zdfNumInt, hs_x126Drer);
                                        };
                                        return $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26DrnB);
                                    };
                                    return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_oraw26DrcR, hs_ow126Dre6, hs_sat26DrnC);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrnD, hs_sat26DrnA);
                            }
                        };
                        var hs_sat26DrnH = new $hs.Thunk();
                        hs_sat26DrnH.evaluateOnce = function () {
                            var hs_sat26DrnG = new $hs.Thunk();
                            hs_sat26DrnG.evaluateOnce = function () {
                                var hs_sat26DrnF = new $hs.Data(1);
                                hs_sat26DrnF.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126Dre4, hs_sat26DrnF);
                            };
                            return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26Drcz, hs_sat26DrnG);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrnH, hs_sat26DrnE);
                    };
                    var hs_sat26DrnJ = new $hs.Thunk();
                    hs_sat26DrnJ.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26Drcz, hs_ir126Dre4);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrnJ, hs_sat26DrnI);
                case 2:
                    return hs_done26DrdT.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ir126Dre4, hs_ow126Dre6);
                }
            case 2:
                return hs_done26DrdT.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ir126Dre4, hs_ow126Dre6);
            }
        };
        var hs_sat26DrnK = new $hs.Data(1);
        hs_sat26DrnK.data = [hs_rb926Drfw];
        return hs_loop26Drfg.hscall(hs_ir026DrcC, hs_sat26DrnK);
    };
    this.hs_utf16zudecode.evaluate = function (hs_seenzubom26DrfT, hs_input26DrfB, hs_output26Drgi) {
        var hs_wild26Drgh = hs_input26DrfB;
        if (hs_input26DrfB.notEvaluated) {
            hs_wild26Drgh = hs_input26DrfB.hscall();
        }
        var hs_rb26DrfK = hs_wild26Drgh.data[0];
        var hs_rb126DrfL = hs_wild26Drgh.data[1];
        var hs_rb326DrfO = hs_wild26Drgh.data[4];
        var hs_rb426DrfR = hs_wild26Drgh.data[5];
        var hs_iraw26DrfM = new $hs.Data(1);
        hs_iraw26DrfM.data = [hs_rb26DrfK, hs_rb126DrfL];
        var hs_ir26DrfP = new $hs.Data(1);
        hs_ir26DrfP.data = [hs_rb326DrfO];
        var hs_iw26DrfS = new $hs.Data(1);
        hs_iw26DrfS.data = [hs_rb426DrfR];
        var hs_sat26Dron = new $hs.Func(1);
        hs_sat26Dron.evaluate = function (hs_mb26DrfW) {
            var hs_wild126DrnN = hs_mb26DrfW;
            if (hs_mb26DrfW.notEvaluated) {
                hs_wild126DrnN = hs_mb26DrfW.hscall();
            }
            switch (hs_wild126DrnN.tag) {
            case 1:
                var hs_sat26DrnO = new $hs.Data(1);
                hs_sat26DrnO.data = [2];
                var hs_sat26DrnQ = new $hs.Thunk();
                hs_sat26DrnQ.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_iw26DrfS, hs_ir26DrfP);
                };
                var hs_wild226DrnP = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DrnQ, hs_sat26DrnO);
                switch (hs_wild226DrnP.tag) {
                case 1:
                    var hs_sat26Drok = new $hs.Func(1);
                    hs_sat26Drok.evaluate = function (hs_c026Drg7) {
                        var hs_sat26Drog = new $hs.Func(1);
                        hs_sat26Drog.evaluate = function (hs_c126Drg9) {
                            var hs_sat26DrnR = new $hs.Thunk();
                            hs_sat26DrnR.evaluateOnce = function () {
                                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_c126Drg9, hs_bomL25tyuG);
                            };
                            var hs_sat26DrnT = new $hs.Thunk();
                            hs_sat26DrnT.evaluateOnce = function () {
                                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_c026Drg7, hs_bomB25tyuE);
                            };
                            var hs_wild326DrnS = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DrnT, hs_sat26DrnR);
                            switch (hs_wild326DrnS.tag) {
                            case 1:
                                var hs_sat26DrnU = new $hs.Thunk();
                                hs_sat26DrnU.evaluateOnce = function () {
                                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_c126Drg9, hs_bomB25tyuE);
                                };
                                var hs_sat26DrnW = new $hs.Thunk();
                                hs_sat26DrnW.evaluateOnce = function () {
                                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_c026Drg7, hs_bomL25tyuG);
                                };
                                var hs_wild426DrnV = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DrnW, hs_sat26DrnU);
                                switch (hs_wild426DrnV.tag) {
                                case 1:
                                    var hs_sat26DrnX = new $hs.Thunk();
                                    hs_sat26DrnX.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziEncodingziUTF16.hs_utf16bezudecode.hscall(hs_wild26Drgh, hs_output26Drgi);
                                    };
                                    var hs_sat26DrnZ = new $hs.Thunk();
                                    hs_sat26DrnZ.evaluateOnce = function () {
                                        var hs_sat26DrnY = new $hs.Data(2);
                                        hs_sat26DrnY.data = [$hs.modules.GHCziIOziEncodingziUTF16.hs_utf16bezudecode];
                                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_seenzubom26DrfT, hs_sat26DrnY);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrnZ, hs_sat26DrnX);
                                case 2:
                                    var hs_sat26Dro5 = new $hs.Thunk();
                                    hs_sat26Dro5.evaluateOnce = function () {
                                        var hs_sat26Dro4 = new $hs.Thunk();
                                        hs_sat26Dro4.evaluateOnce = function () {
                                            var hs_wild526Dro0 = hs_wild26Drgh;
                                            if (hs_wild26Drgh.notEvaluated) {
                                                hs_wild526Dro0 = hs_wild26Drgh.hscall();
                                            }
                                            var hs_rb526Drgw = hs_wild526Dro0.data[0];
                                            var hs_rb626Drgx = hs_wild526Dro0.data[1];
                                            var hs_ds126Drgy = hs_wild526Dro0.data[2];
                                            var hs_rb726Drgz = hs_wild526Dro0.data[3];
                                            var hs_rb926DrgB = hs_wild526Dro0.data[5];
                                            var hs_sat26Dro3 = new $hs.Data(1);
                                            hs_sat26Dro3.data = [2];
                                            var hs_tpl26Dro2 = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir26DrfP, hs_sat26Dro3);
                                            var hs_tpl126DrgA = hs_tpl26Dro2.data[0];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_rb526Drgw, hs_rb626Drgx, hs_ds126Drgy, hs_rb726Drgz, hs_tpl126DrgA, hs_rb926DrgB];
                                            return $res;
                                        };
                                        return $hs.modules.GHCziIOziEncodingziUTF16.hs_utf16lezudecode.hscall(hs_sat26Dro4, hs_output26Drgi);
                                    };
                                    var hs_sat26Dro7 = new $hs.Thunk();
                                    hs_sat26Dro7.evaluateOnce = function () {
                                        var hs_sat26Dro6 = new $hs.Data(2);
                                        hs_sat26Dro6.data = [$hs.modules.GHCziIOziEncodingziUTF16.hs_utf16lezudecode];
                                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_seenzubom26DrfT, hs_sat26Dro6);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dro7, hs_sat26Dro5);
                                }
                            case 2:
                                var hs_sat26Drod = new $hs.Thunk();
                                hs_sat26Drod.evaluateOnce = function () {
                                    var hs_sat26Droc = new $hs.Thunk();
                                    hs_sat26Droc.evaluateOnce = function () {
                                        var hs_wild426Dro8 = hs_wild26Drgh;
                                        if (hs_wild26Drgh.notEvaluated) {
                                            hs_wild426Dro8 = hs_wild26Drgh.hscall();
                                        }
                                        var hs_rb526DrgQ = hs_wild426Dro8.data[0];
                                        var hs_rb626DrgR = hs_wild426Dro8.data[1];
                                        var hs_ds126DrgS = hs_wild426Dro8.data[2];
                                        var hs_rb726DrgT = hs_wild426Dro8.data[3];
                                        var hs_rb926DrgV = hs_wild426Dro8.data[5];
                                        var hs_sat26Drob = new $hs.Data(1);
                                        hs_sat26Drob.data = [2];
                                        var hs_tpl26Droa = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir26DrfP, hs_sat26Drob);
                                        var hs_tpl126DrgU = hs_tpl26Droa.data[0];
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_rb526DrgQ, hs_rb626DrgR, hs_ds126DrgS, hs_rb726DrgT, hs_tpl126DrgU, hs_rb926DrgV];
                                        return $res;
                                    };
                                    return $hs.modules.GHCziIOziEncodingziUTF16.hs_utf16bezudecode.hscall(hs_sat26Droc, hs_output26Drgi);
                                };
                                var hs_sat26Drof = new $hs.Thunk();
                                hs_sat26Drof.evaluateOnce = function () {
                                    var hs_sat26Droe = new $hs.Data(2);
                                    hs_sat26Droe.data = [$hs.modules.GHCziIOziEncodingziUTF16.hs_utf16bezudecode];
                                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_seenzubom26DrfT, hs_sat26Droe);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drof, hs_sat26Drod);
                            }
                        };
                        var hs_sat26Droj = new $hs.Thunk();
                        hs_sat26Droj.evaluateOnce = function () {
                            var hs_sat26Droi = new $hs.Thunk();
                            hs_sat26Droi.evaluateOnce = function () {
                                var hs_sat26Droh = new $hs.Data(1);
                                hs_sat26Droh.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir26DrfP, hs_sat26Droh);
                            };
                            return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26DrfM, hs_sat26Droi);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Droj, hs_sat26Drog);
                    };
                    var hs_sat26Drol = new $hs.Thunk();
                    hs_sat26Drol.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26DrfM, hs_ir26DrfP);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drol, hs_sat26Drok);
                case 2:
                    var hs_sat26Drom = new $hs.Data(1);
                    hs_sat26Drom.data = [hs_wild26Drgh, hs_output26Drgi];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drom);
                }
            case 2:
                var hs_decode26Drh2 = hs_wild126DrnN.data[0];
                return hs_decode26Drh2.hscall(hs_wild26Drgh, hs_output26Drgi);
            }
        };
        var hs_sat26Droo = new $hs.Thunk();
        hs_sat26Droo.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_seenzubom26DrfT);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Droo, hs_sat26Dron);
    };
    hs_sat26Drou.evaluate = function (hs_seenzubom26Drh6) {
        var hs_sat26Drop = new $hs.Thunk();
        hs_sat26Drop.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_seenzubom26Drh6);
        };
        var hs_sat26Droq = new $hs.Thunk();
        hs_sat26Droq.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_seenzubom26Drh6);
        };
        var hs_sat26Dror = new $hs.Thunk();
        hs_sat26Dror.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26Dros = new $hs.Func(2);
        hs_sat26Dros.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return $hs.modules.GHCziIOziEncodingziUTF16.hs_utf16zudecode.hscall(hs_seenzubom26Drh6, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26Drot = new $hs.Data(1);
        hs_sat26Drot.data = [hs_sat26Dros, hs_sat26Dror, hs_sat26Droq, hs_sat26Drop];
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drot);
    };
    hs_sat26Drov.evaluateOnce = function () {
        return $hs.modules.GHCziIORef.hs_newIORef.hscall($hs.modules.DataziMaybe.hs_Nothing);
    };
    hs_utf16zuDF25tyuw.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Drov, hs_sat26Drou);
    };
    hs_a125v2KY.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("UTF-16\x00");
    };
    this.hs_utf16.data = [hs_a125v2KY, hs_utf16zuDF25tyuw, hs_utf16zuEF25tyuy];
    hs_sat26Drox.evaluateOnce = function () {
        var hs_sat26Drow = new $hs.Thunk();
        hs_sat26Drow.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziBase.hs_const, hs_sat26Drow);
    };
    hs_sat26Droy.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_sat26Droz.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_sat26DroA.data = [$hs.modules.GHCziIOziEncodingziUTF16.hs_utf16lezudecode, hs_sat26Droz, hs_sat26Droy, hs_sat26Drox];
    hs_utf16lezuDF25tyuY.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DroA);
    };
    hs_a225v2L5.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("UTF16-LE\x00");
    };
    this.hs_utf16le.data = [hs_a225v2L5, hs_utf16lezuDF25tyuY, hs_utf16lezuEF25tyv0];
};
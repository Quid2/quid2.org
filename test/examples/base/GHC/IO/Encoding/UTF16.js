
$hs.modules.GHCziIOziEncodingziUTF16 = new $hs.Module();
$hs.modules.GHCziIOziEncodingziUTF16.dependencies = ["GHC.Types", "GHC.CString", "GHC.Unit", "GHC.Integer", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Classes", "GHC.IO.Buffer", "GHC.IO.Encoding.Failure", "GHC.IO.Encoding.Types", "GHC.IORef", "GHC.Word", "Data.Bits"];
$hs.modules.GHCziIOziEncodingziUTF16.initBeforeDependencies = function () {
    this.hs_utf16bezuencode = new $hs.Func(2);
    this.hs_utf16zuencode = new $hs.Func(3);
    this.hs_utf16lezuencode = new $hs.Func(2);
    this.hs_utf16bezudecode = new $hs.Func(2);
    this.hs_mkUTF16be = new $hs.Func(1);
    this.hs_utf16be = new $hs.Thunk();
    this.hs_utf16lezudecode = new $hs.Func(2);
    this.hs_utf16zudecode = new $hs.Func(3);
    this.hs_mkUTF16 = new $hs.Func(1);
    this.hs_utf16 = new $hs.Thunk();
    this.hs_mkUTF16le = new $hs.Func(1);
    this.hs_utf16le = new $hs.Thunk();
    this.hs_utf16bezuencode.notEvaluated = true;
    this.hs_utf16bezuencode.evaluate = function (hs_input26D1Ho, hs_output26D1HD) {
        $hs.modules.GHCziIOziEncodingziUTF16.loadDependencies();
        return this.evaluate(hs_input26D1Ho, hs_output26D1HD);
    };
    this.hs_utf16zuencode.notEvaluated = true;
    this.hs_utf16zuencode.evaluate = function (hs_donezubom26D1KB, hs_input26D1KO, hs_output26D1Kj) {
        $hs.modules.GHCziIOziEncodingziUTF16.loadDependencies();
        return this.evaluate(hs_donezubom26D1KB, hs_input26D1KO, hs_output26D1Kj);
    };
    this.hs_utf16lezuencode.notEvaluated = true;
    this.hs_utf16lezuencode.evaluate = function (hs_input26D1Le, hs_output26D1Lt) {
        $hs.modules.GHCziIOziEncodingziUTF16.loadDependencies();
        return this.evaluate(hs_input26D1Le, hs_output26D1Lt);
    };
    this.hs_utf16bezudecode.notEvaluated = true;
    this.hs_utf16bezudecode.evaluate = function (hs_input26D1Oq, hs_output26D1OF) {
        $hs.modules.GHCziIOziEncodingziUTF16.loadDependencies();
        return this.evaluate(hs_input26D1Oq, hs_output26D1OF);
    };
    this.hs_mkUTF16be.notEvaluated = true;
    this.hs_mkUTF16be.evaluate = function (hs_cfm26D1RB) {
        $hs.modules.GHCziIOziEncodingziUTF16.loadDependencies();
        return this.evaluate(hs_cfm26D1RB);
    };
    this.hs_utf16be.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncodingziUTF16.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_utf16lezudecode.notEvaluated = true;
    this.hs_utf16lezudecode.evaluate = function (hs_input26D1RS, hs_output26D1S7) {
        $hs.modules.GHCziIOziEncodingziUTF16.loadDependencies();
        return this.evaluate(hs_input26D1RS, hs_output26D1S7);
    };
    this.hs_utf16zudecode.notEvaluated = true;
    this.hs_utf16zudecode.evaluate = function (hs_seenzubom26D1Vm, hs_input26D1V4, hs_output26D1VL) {
        $hs.modules.GHCziIOziEncodingziUTF16.loadDependencies();
        return this.evaluate(hs_seenzubom26D1Vm, hs_input26D1V4, hs_output26D1VL);
    };
    this.hs_mkUTF16.notEvaluated = true;
    this.hs_mkUTF16.evaluate = function (hs_cfm26D1WD) {
        $hs.modules.GHCziIOziEncodingziUTF16.loadDependencies();
        return this.evaluate(hs_cfm26D1WD);
    };
    this.hs_utf16.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncodingziUTF16.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_mkUTF16le.notEvaluated = true;
    this.hs_mkUTF16le.evaluate = function (hs_cfm26D1WY) {
        $hs.modules.GHCziIOziEncodingziUTF16.loadDependencies();
        return this.evaluate(hs_cfm26D1WY);
    };
    this.hs_utf16le.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncodingziUTF16.loadDependencies();
        return this.evaluateOnce();
    };
};
$hs.modules.GHCziIOziEncodingziUTF16.initAfterDependencies = function () {
    this.hs_utf16bezuencode.notEvaluated = false;
    this.hs_utf16zuencode.notEvaluated = false;
    this.hs_utf16lezuencode.notEvaluated = false;
    this.hs_utf16bezudecode.notEvaluated = false;
    this.hs_mkUTF16be.notEvaluated = false;
    this.hs_utf16lezudecode.notEvaluated = false;
    this.hs_utf16zudecode.notEvaluated = false;
    this.hs_mkUTF16.notEvaluated = false;
    this.hs_mkUTF16le.notEvaluated = false;
    var hs_sat26D1Xd = new $hs.Thunk();
    var hs_bomB25tdKN = new $hs.Thunk();
    var hs_sat26D1Xe = new $hs.Thunk();
    var hs_bomL25tdKO = new $hs.Thunk();
    var hs_validate225tdL7 = new $hs.Func(2);
    hs_sat26D1Xd.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(254);
    };
    hs_bomB25tdKN.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26D1Xd);
    };
    hs_sat26D1Xe.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(255);
    };
    hs_bomL25tdKO.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26D1Xe);
    };
    this.hs_utf16bezuencode.evaluate = function (hs_input26D1Ho, hs_output26D1HD) {
        var hs_wild26D1I7 = hs_input26D1Ho;
        if (hs_input26D1Ho.notEvaluated) {
            hs_wild26D1I7 = hs_input26D1Ho.hscall();
        }
        var hs_rb26D1Hx = hs_wild26D1I7.data[0];
        var hs_rb126D1Hy = hs_wild26D1I7.data[1];
        var hs_rb326D1Kc = hs_wild26D1I7.data[4];
        var hs_rb426D1HB = hs_wild26D1I7.data[5];
        var hs_iraw26D1Hz = new $hs.Data(1);
        hs_iraw26D1Hz.data = [hs_rb26D1Hx, hs_rb126D1Hy];
        var hs_iw26D1HC = new $hs.Data(1);
        hs_iw26D1HC.data = [hs_rb426D1HB];
        var hs_wild126D1Iz = hs_output26D1HD;
        if (hs_output26D1HD.notEvaluated) {
            hs_wild126D1Iz = hs_output26D1HD.hscall();
        }
        var hs_rb526D1HM = hs_wild126D1Iz.data[0];
        var hs_rb626D1HN = hs_wild126D1Iz.data[1];
        var hs_rb726D1HQ = hs_wild126D1Iz.data[3];
        var hs_rb926D1Ke = hs_wild126D1Iz.data[5];
        var hs_oraw26D1HO = new $hs.Data(1);
        hs_oraw26D1HO.data = [hs_rb526D1HM, hs_rb626D1HN];
        var hs_os26D1HR = new $hs.Data(1);
        hs_os26D1HR.data = [hs_rb726D1HQ];
        var hs_done26D1IS = new $hs.Func(4);
        hs_done26D1IS.evaluate = function (hs_zddMonad26D1I3, hs_why26D1I4, hs_ir26D1HX, hs_ow26D1I0) {
            var hs_ir126D1I5 = hs_ir26D1HX;
            if (hs_ir26D1HX.notEvaluated) {
                hs_ir126D1I5 = hs_ir26D1HX.hscall();
            }
            var hs_ow126D1IH = hs_ow26D1I0;
            if (hs_ow26D1I0.notEvaluated) {
                hs_ow126D1IH = hs_ow26D1I0.hscall();
            }
            var hs_sat26D1Yl = new $hs.Thunk();
            hs_sat26D1Yl.evaluateOnce = function () {
                var hs_wild226D1Yv = hs_wild126D1Iz;
                if (hs_wild126D1Iz.notEvaluated) {
                    hs_wild226D1Yv = hs_wild126D1Iz.hscall();
                }
                var hs_rb1026D1IK = hs_wild226D1Yv.data[0];
                var hs_rb1126D1IL = hs_wild226D1Yv.data[1];
                var hs_ds226D1IM = hs_wild226D1Yv.data[2];
                var hs_rb1226D1IN = hs_wild226D1Yv.data[3];
                var hs_rb1326D1IO = hs_wild226D1Yv.data[4];
                var hs_tpl26D1Yu = hs_ow126D1IH;
                if (hs_ow126D1IH.notEvaluated) {
                    hs_tpl26D1Yu = hs_ow126D1IH.hscall();
                }
                var hs_tpl126D1IP = hs_tpl26D1Yu.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb1026D1IK, hs_rb1126D1IL, hs_ds226D1IM, hs_rb1226D1IN, hs_rb1326D1IO, hs_tpl126D1IP];
                return $res;
            };
            var hs_sat26D1Ym = new $hs.Thunk();
            hs_sat26D1Ym.evaluateOnce = function () {
                var hs_wild226D1Yq = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_ir126D1I5, hs_iw26D1HC);
                switch (hs_wild226D1Yq.tag) {
                case 1:
                    var hs_wild326D1Ys = hs_wild26D1I7;
                    if (hs_wild26D1I7.notEvaluated) {
                        hs_wild326D1Ys = hs_wild26D1I7.hscall();
                    }
                    var hs_rb1026D1Ih = hs_wild326D1Ys.data[0];
                    var hs_rb1126D1Ii = hs_wild326D1Ys.data[1];
                    var hs_ds226D1Ij = hs_wild326D1Ys.data[2];
                    var hs_rb1226D1Ik = hs_wild326D1Ys.data[3];
                    var hs_rb1426D1Im = hs_wild326D1Ys.data[5];
                    var hs_tpl26D1Yr = hs_ir126D1I5;
                    if (hs_ir126D1I5.notEvaluated) {
                        hs_tpl26D1Yr = hs_ir126D1I5.hscall();
                    }
                    var hs_tpl126D1Il = hs_tpl26D1Yr.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D1Ih, hs_rb1126D1Ii, hs_ds226D1Ij, hs_rb1226D1Ik, hs_tpl126D1Il, hs_rb1426D1Im];
                    return $res;
                case 2:
                    var hs_wild326D1Yp = hs_wild26D1I7;
                    if (hs_wild26D1I7.notEvaluated) {
                        hs_wild326D1Yp = hs_wild26D1I7.hscall();
                    }
                    var hs_rb1026D1Iu = hs_wild326D1Yp.data[0];
                    var hs_rb1126D1Iv = hs_wild326D1Yp.data[1];
                    var hs_ds226D1Iw = hs_wild326D1Yp.data[2];
                    var hs_rb1226D1Ix = hs_wild326D1Yp.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D1Iu, hs_rb1126D1Iv, hs_ds226D1Iw, hs_rb1226D1Ix, 0, 0];
                    return $res;
                }
            };
            var hs_sat26D1Yi = new $hs.Data(1);
            hs_sat26D1Yi.data = [hs_why26D1I4, hs_sat26D1Ym, hs_sat26D1Yl];
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D1I3, hs_sat26D1Yi);
        };
        var hs_loop26D1JS = new $hs.Func(2);
        hs_loop26D1JS.evaluate = function (hs_ir26D1IW, hs_ow26D1IZ) {
            var hs_ir126D1J2 = hs_ir26D1IW;
            if (hs_ir26D1IW.notEvaluated) {
                hs_ir126D1J2 = hs_ir26D1IW.hscall();
            }
            var hs_ow126D1J4 = hs_ow26D1IZ;
            if (hs_ow26D1IZ.notEvaluated) {
                hs_ow126D1J4 = hs_ow26D1IZ.hscall();
            }
            var hs_wild226D1Xn = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_ir126D1J2, hs_iw26D1HC);
            switch (hs_wild226D1Xn.tag) {
            case 1:
                var hs_sat26D1Xo = new $hs.Data(1);
                hs_sat26D1Xo.data = [2];
                var hs_sat26D1Xp = new $hs.Thunk();
                hs_sat26D1Xp.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_os26D1HR, hs_ow126D1J4);
                };
                var hs_wild326D1Xq = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D1Xp, hs_sat26D1Xo);
                switch (hs_wild326D1Xq.tag) {
                case 1:
                    var hs_sat26D1Xs = new $hs.Func(1);
                    hs_sat26D1Xs.evaluate = function (hs_ds226D1Ja) {
                        var hs_wild426D1Xt = hs_ds226D1Ja;
                        if (hs_ds226D1Ja.notEvaluated) {
                            hs_wild426D1Xt = hs_ds226D1Ja.hscall();
                        }
                        var hs_c26D1Jf = hs_wild426D1Xt.data[0];
                        var hs_irzq26D1JQ = hs_wild426D1Xt.data[1];
                        var hs_x26D1Jg = new $hs.Thunk();
                        hs_x26D1Jg.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26D1Jf);
                        };
                        var hs_sat26D1Xu = new $hs.Data(1);
                        hs_sat26D1Xu.data = [65536];
                        var hs_wild526D1Xv = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_x26D1Jg, hs_sat26D1Xu);
                        switch (hs_wild526D1Xv.tag) {
                        case 1:
                            var hs_sat26D1XJ = new $hs.Data(1);
                            hs_sat26D1XJ.data = [4];
                            var hs_sat26D1XK = new $hs.Thunk();
                            hs_sat26D1XK.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_os26D1HR, hs_ow126D1J4);
                            };
                            var hs_wild626D1XL = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D1XK, hs_sat26D1XJ);
                            switch (hs_wild626D1XL.tag) {
                            case 1:
                                var hs_n126D1Jo = new $hs.Thunk();
                                hs_n126D1Jo.evaluateOnce = function () {
                                    var hs_sat26D1Yh = new $hs.Data(1);
                                    hs_sat26D1Yh.data = [65536];
                                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_x26D1Jg, hs_sat26D1Yh);
                                };
                                var hs_n226D1Jr = new $hs.Thunk();
                                hs_n226D1Jr.evaluateOnce = function () {
                                    var hs_sat26D1Yg = new $hs.Data(1);
                                    hs_sat26D1Yg.data = [1023];
                                    return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_n126D1Jo, hs_sat26D1Yg);
                                };
                                var hs_sat26D1XN = new $hs.Thunk();
                                hs_sat26D1XN.evaluateOnce = function () {
                                    var hs_sat26D1XU = new $hs.Thunk();
                                    hs_sat26D1XU.evaluateOnce = function () {
                                        var hs_sat26D1Y1 = new $hs.Thunk();
                                        hs_sat26D1Y1.evaluateOnce = function () {
                                            var hs_sat26D1Ya = new $hs.Thunk();
                                            hs_sat26D1Ya.evaluateOnce = function () {
                                                var hs_sat26D1Ye = new $hs.Thunk();
                                                hs_sat26D1Ye.evaluateOnce = function () {
                                                    var hs_sat26D1Yf = new $hs.Data(1);
                                                    hs_sat26D1Yf.data = [4];
                                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126D1J4, hs_sat26D1Yf);
                                                };
                                                return hs_loop26D1JS.hscall(hs_irzq26D1JQ, hs_sat26D1Ye);
                                            };
                                            var hs_sat26D1Y9 = new $hs.Thunk();
                                            hs_sat26D1Y9.evaluateOnce = function () {
                                                var hs_sat26D1Yc = new $hs.Thunk();
                                                hs_sat26D1Yc.evaluateOnce = function () {
                                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_n226D1Jr);
                                                };
                                                var hs_sat26D1Yb = new $hs.Thunk();
                                                hs_sat26D1Yb.evaluateOnce = function () {
                                                    var hs_sat26D1Yd = new $hs.Data(1);
                                                    hs_sat26D1Yd.data = [3];
                                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126D1J4, hs_sat26D1Yd);
                                                };
                                                return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D1HO, hs_sat26D1Yb, hs_sat26D1Yc);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1Y9, hs_sat26D1Ya);
                                        };
                                        var hs_sat26D1Y0 = new $hs.Thunk();
                                        hs_sat26D1Y0.evaluateOnce = function () {
                                            var hs_sat26D1Y3 = new $hs.Thunk();
                                            hs_sat26D1Y3.evaluateOnce = function () {
                                                var hs_sat26D1Y5 = new $hs.Thunk();
                                                hs_sat26D1Y5.evaluateOnce = function () {
                                                    var hs_sat26D1Y7 = new $hs.Data(1);
                                                    hs_sat26D1Y7.data = [220];
                                                    var hs_sat26D1Y6 = new $hs.Thunk();
                                                    hs_sat26D1Y6.evaluateOnce = function () {
                                                        var hs_sat26D1Y8 = new $hs.Data(1);
                                                        hs_sat26D1Y8.data = [8];
                                                        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_n226D1Jr, hs_sat26D1Y8);
                                                    };
                                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D1Y6, hs_sat26D1Y7);
                                                };
                                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26D1Y5);
                                            };
                                            var hs_sat26D1Y2 = new $hs.Thunk();
                                            hs_sat26D1Y2.evaluateOnce = function () {
                                                var hs_sat26D1Y4 = new $hs.Data(1);
                                                hs_sat26D1Y4.data = [2];
                                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126D1J4, hs_sat26D1Y4);
                                            };
                                            return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D1HO, hs_sat26D1Y2, hs_sat26D1Y3);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1Y0, hs_sat26D1Y1);
                                    };
                                    var hs_sat26D1XT = new $hs.Thunk();
                                    hs_sat26D1XT.evaluateOnce = function () {
                                        var hs_sat26D1XW = new $hs.Thunk();
                                        hs_sat26D1XW.evaluateOnce = function () {
                                            var hs_sat26D1XY = new $hs.Thunk();
                                            hs_sat26D1XY.evaluateOnce = function () {
                                                var hs_sat26D1XZ = new $hs.Data(1);
                                                hs_sat26D1XZ.data = [10];
                                                return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_n126D1Jo, hs_sat26D1XZ);
                                            };
                                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26D1XY);
                                        };
                                        var hs_sat26D1XV = new $hs.Thunk();
                                        hs_sat26D1XV.evaluateOnce = function () {
                                            var hs_sat26D1XX = new $hs.Data(1);
                                            hs_sat26D1XX.data = [1];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126D1J4, hs_sat26D1XX);
                                        };
                                        return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D1HO, hs_sat26D1XV, hs_sat26D1XW);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1XT, hs_sat26D1XU);
                                };
                                var hs_sat26D1XM = new $hs.Thunk();
                                hs_sat26D1XM.evaluateOnce = function () {
                                    var hs_sat26D1XO = new $hs.Thunk();
                                    hs_sat26D1XO.evaluateOnce = function () {
                                        var hs_sat26D1XP = new $hs.Thunk();
                                        hs_sat26D1XP.evaluateOnce = function () {
                                            var hs_sat26D1XR = new $hs.Data(1);
                                            hs_sat26D1XR.data = [216];
                                            var hs_sat26D1XQ = new $hs.Thunk();
                                            hs_sat26D1XQ.evaluateOnce = function () {
                                                var hs_sat26D1XS = new $hs.Data(1);
                                                hs_sat26D1XS.data = [18];
                                                return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_n126D1Jo, hs_sat26D1XS);
                                            };
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D1XQ, hs_sat26D1XR);
                                        };
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26D1XP);
                                    };
                                    return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D1HO, hs_ow126D1J4, hs_sat26D1XO);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1XM, hs_sat26D1XN);
                            case 2:
                                return hs_done26D1IS.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_OutputUnderflow, hs_ir126D1J2, hs_ow126D1J4);
                            }
                        case 2:
                            var hs_wild626D1Xw = $hs.modules.GHCziIOziEncodingziFailure.hs_isSurrogate.hscall(hs_c26D1Jf);
                            switch (hs_wild626D1Xw.tag) {
                            case 1:
                                var hs_sat26D1Xy = new $hs.Thunk();
                                hs_sat26D1Xy.evaluateOnce = function () {
                                    var hs_sat26D1XD = new $hs.Thunk();
                                    hs_sat26D1XD.evaluateOnce = function () {
                                        var hs_sat26D1XH = new $hs.Thunk();
                                        hs_sat26D1XH.evaluateOnce = function () {
                                            var hs_sat26D1XI = new $hs.Data(1);
                                            hs_sat26D1XI.data = [2];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126D1J4, hs_sat26D1XI);
                                        };
                                        return hs_loop26D1JS.hscall(hs_irzq26D1JQ, hs_sat26D1XH);
                                    };
                                    var hs_sat26D1XC = new $hs.Thunk();
                                    hs_sat26D1XC.evaluateOnce = function () {
                                        var hs_sat26D1XF = new $hs.Thunk();
                                        hs_sat26D1XF.evaluateOnce = function () {
                                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_x26D1Jg);
                                        };
                                        var hs_sat26D1XE = new $hs.Thunk();
                                        hs_sat26D1XE.evaluateOnce = function () {
                                            var hs_sat26D1XG = new $hs.Data(1);
                                            hs_sat26D1XG.data = [1];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126D1J4, hs_sat26D1XG);
                                        };
                                        return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D1HO, hs_sat26D1XE, hs_sat26D1XF);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1XC, hs_sat26D1XD);
                                };
                                var hs_sat26D1Xx = new $hs.Thunk();
                                hs_sat26D1Xx.evaluateOnce = function () {
                                    var hs_sat26D1Xz = new $hs.Thunk();
                                    hs_sat26D1Xz.evaluateOnce = function () {
                                        var hs_sat26D1XA = new $hs.Thunk();
                                        hs_sat26D1XA.evaluateOnce = function () {
                                            var hs_sat26D1XB = new $hs.Data(1);
                                            hs_sat26D1XB.data = [8];
                                            return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_x26D1Jg, hs_sat26D1XB);
                                        };
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26D1XA);
                                    };
                                    return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D1HO, hs_ow126D1J4, hs_sat26D1Xz);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1Xx, hs_sat26D1Xy);
                            case 2:
                                return hs_done26D1IS.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_InvalidSequence, hs_ir126D1J2, hs_ow126D1J4);
                            }
                        }
                    };
                    var hs_sat26D1Xr = new $hs.Thunk();
                    hs_sat26D1Xr.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_readCharBuf.hscall(hs_iraw26D1Hz, hs_ir126D1J2);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1Xr, hs_sat26D1Xs);
                case 2:
                    return hs_done26D1IS.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_OutputUnderflow, hs_ir126D1J2, hs_ow126D1J4);
                }
            case 2:
                return hs_done26D1IS.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_InputUnderflow, hs_ir126D1J2, hs_ow126D1J4);
            }
        };
        var hs_sat26D1Xg = new $hs.Data(1);
        hs_sat26D1Xg.data = [hs_rb926D1Ke];
        var hs_sat26D1Xf = new $hs.Data(1);
        hs_sat26D1Xf.data = [hs_rb326D1Kc];
        return hs_loop26D1JS.hscall(hs_sat26D1Xf, hs_sat26D1Xg);
    };
    this.hs_utf16zuencode.evaluate = function (hs_donezubom26D1KB, hs_input26D1KO, hs_output26D1Kj) {
        var hs_wild26D1KP = hs_output26D1Kj;
        if (hs_output26D1Kj.notEvaluated) {
            hs_wild26D1KP = hs_output26D1Kj.hscall();
        }
        var hs_rb26D1Ks = hs_wild26D1KP.data[0];
        var hs_rb126D1Kt = hs_wild26D1KP.data[1];
        var hs_rb226D1Kz = hs_wild26D1KP.data[3];
        var hs_rb426D1Kw = hs_wild26D1KP.data[5];
        var hs_oraw26D1Ku = new $hs.Data(1);
        hs_oraw26D1Ku.data = [hs_rb26D1Ks, hs_rb126D1Kt];
        var hs_ow26D1Kx = new $hs.Data(1);
        hs_ow26D1Kx.data = [hs_rb426D1Kw];
        var hs_os26D1KA = new $hs.Data(1);
        hs_os26D1KA.data = [hs_rb226D1Kz];
        var hs_sat26D1YA = new $hs.Func(1);
        hs_sat26D1YA.evaluate = function (hs_b26D1KE) {
            var hs_wild126D1YB = hs_b26D1KE;
            if (hs_b26D1KE.notEvaluated) {
                hs_wild126D1YB = hs_b26D1KE.hscall();
            }
            switch (hs_wild126D1YB.tag) {
            case 1:
                var hs_sat26D1YD = new $hs.Data(1);
                hs_sat26D1YD.data = [2];
                var hs_sat26D1YE = new $hs.Thunk();
                hs_sat26D1YE.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_os26D1KA, hs_ow26D1Kx);
                };
                var hs_wild226D1YF = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D1YE, hs_sat26D1YD);
                switch (hs_wild226D1YF.tag) {
                case 1:
                    var hs_sat26D1YH = new $hs.Thunk();
                    hs_sat26D1YH.evaluateOnce = function () {
                        var hs_sat26D1YJ = new $hs.Thunk();
                        hs_sat26D1YJ.evaluateOnce = function () {
                            var hs_sat26D1YL = new $hs.Thunk();
                            hs_sat26D1YL.evaluateOnce = function () {
                                var hs_sat26D1YO = new $hs.Thunk();
                                hs_sat26D1YO.evaluateOnce = function () {
                                    var hs_wild326D1YP = hs_wild26D1KP;
                                    if (hs_wild26D1KP.notEvaluated) {
                                        hs_wild326D1YP = hs_wild26D1KP.hscall();
                                    }
                                    var hs_rb526D1L0 = hs_wild326D1YP.data[0];
                                    var hs_rb626D1L1 = hs_wild326D1YP.data[1];
                                    var hs_ds126D1L2 = hs_wild326D1YP.data[2];
                                    var hs_rb726D1L3 = hs_wild326D1YP.data[3];
                                    var hs_rb826D1L4 = hs_wild326D1YP.data[4];
                                    var hs_sat26D1YR = new $hs.Data(1);
                                    hs_sat26D1YR.data = [2];
                                    var hs_tpl26D1YS = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow26D1Kx, hs_sat26D1YR);
                                    var hs_tpl126D1L5 = hs_tpl26D1YS.data[0];
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_rb526D1L0, hs_rb626D1L1, hs_ds126D1L2, hs_rb726D1L3, hs_rb826D1L4, hs_tpl126D1L5];
                                    return $res;
                                };
                                return $hs.modules.GHCziIOziEncodingziUTF16.hs_utf16bezuencode.hscall(hs_input26D1KO, hs_sat26D1YO);
                            };
                            var hs_sat26D1YK = new $hs.Thunk();
                            hs_sat26D1YK.evaluateOnce = function () {
                                var hs_sat26D1YM = new $hs.Thunk();
                                hs_sat26D1YM.evaluateOnce = function () {
                                    var hs_sat26D1YN = new $hs.Data(1);
                                    hs_sat26D1YN.data = [1];
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow26D1Kx, hs_sat26D1YN);
                                };
                                return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D1Ku, hs_sat26D1YM, hs_bomL25tdKO);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1YK, hs_sat26D1YL);
                        };
                        var hs_sat26D1YI = new $hs.Thunk();
                        hs_sat26D1YI.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D1Ku, hs_ow26D1Kx, hs_bomB25tdKN);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1YI, hs_sat26D1YJ);
                    };
                    var hs_sat26D1YG = new $hs.Thunk();
                    hs_sat26D1YG.evaluateOnce = function () {
                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_donezubom26D1KB, $hs.modules.GHCziTypes.hs_True);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1YG, hs_sat26D1YH);
                case 2:
                    var hs_sat26D1YC = new $hs.Data(1);
                    hs_sat26D1YC.data = [$hs.modules.GHCziIOziEncodingziTypes.hs_OutputUnderflow, hs_input26D1KO, hs_wild26D1KP];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1YC);
                }
            case 2:
                return $hs.modules.GHCziIOziEncodingziUTF16.hs_utf16bezuencode.hscall(hs_input26D1KO, hs_wild26D1KP);
            }
        };
        var hs_sat26D1Yx = new $hs.Thunk();
        hs_sat26D1Yx.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_donezubom26D1KB);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1Yx, hs_sat26D1YA);
    };
    this.hs_utf16lezuencode.evaluate = function (hs_input26D1Le, hs_output26D1Lt) {
        var hs_wild26D1LX = hs_input26D1Le;
        if (hs_input26D1Le.notEvaluated) {
            hs_wild26D1LX = hs_input26D1Le.hscall();
        }
        var hs_rb26D1Ln = hs_wild26D1LX.data[0];
        var hs_rb126D1Lo = hs_wild26D1LX.data[1];
        var hs_rb326D1O2 = hs_wild26D1LX.data[4];
        var hs_rb426D1Lr = hs_wild26D1LX.data[5];
        var hs_iraw26D1Lp = new $hs.Data(1);
        hs_iraw26D1Lp.data = [hs_rb26D1Ln, hs_rb126D1Lo];
        var hs_iw26D1Ls = new $hs.Data(1);
        hs_iw26D1Ls.data = [hs_rb426D1Lr];
        var hs_wild126D1Mp = hs_output26D1Lt;
        if (hs_output26D1Lt.notEvaluated) {
            hs_wild126D1Mp = hs_output26D1Lt.hscall();
        }
        var hs_rb526D1LC = hs_wild126D1Mp.data[0];
        var hs_rb626D1LD = hs_wild126D1Mp.data[1];
        var hs_rb726D1LG = hs_wild126D1Mp.data[3];
        var hs_rb926D1O4 = hs_wild126D1Mp.data[5];
        var hs_oraw26D1LE = new $hs.Data(1);
        hs_oraw26D1LE.data = [hs_rb526D1LC, hs_rb626D1LD];
        var hs_os26D1LH = new $hs.Data(1);
        hs_os26D1LH.data = [hs_rb726D1LG];
        var hs_done26D1MI = new $hs.Func(4);
        hs_done26D1MI.evaluate = function (hs_zddMonad26D1LT, hs_why26D1LU, hs_ir26D1LN, hs_ow26D1LQ) {
            var hs_ir126D1LV = hs_ir26D1LN;
            if (hs_ir26D1LN.notEvaluated) {
                hs_ir126D1LV = hs_ir26D1LN.hscall();
            }
            var hs_ow126D1Mx = hs_ow26D1LQ;
            if (hs_ow26D1LQ.notEvaluated) {
                hs_ow126D1Mx = hs_ow26D1LQ.hscall();
            }
            var hs_sat26D1ZZ = new $hs.Thunk();
            hs_sat26D1ZZ.evaluateOnce = function () {
                var hs_wild226D209 = hs_wild126D1Mp;
                if (hs_wild126D1Mp.notEvaluated) {
                    hs_wild226D209 = hs_wild126D1Mp.hscall();
                }
                var hs_rb1026D1MA = hs_wild226D209.data[0];
                var hs_rb1126D1MB = hs_wild226D209.data[1];
                var hs_ds226D1MC = hs_wild226D209.data[2];
                var hs_rb1226D1MD = hs_wild226D209.data[3];
                var hs_rb1326D1ME = hs_wild226D209.data[4];
                var hs_tpl26D208 = hs_ow126D1Mx;
                if (hs_ow126D1Mx.notEvaluated) {
                    hs_tpl26D208 = hs_ow126D1Mx.hscall();
                }
                var hs_tpl126D1MF = hs_tpl26D208.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb1026D1MA, hs_rb1126D1MB, hs_ds226D1MC, hs_rb1226D1MD, hs_rb1326D1ME, hs_tpl126D1MF];
                return $res;
            };
            var hs_sat26D200 = new $hs.Thunk();
            hs_sat26D200.evaluateOnce = function () {
                var hs_wild226D204 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_ir126D1LV, hs_iw26D1Ls);
                switch (hs_wild226D204.tag) {
                case 1:
                    var hs_wild326D206 = hs_wild26D1LX;
                    if (hs_wild26D1LX.notEvaluated) {
                        hs_wild326D206 = hs_wild26D1LX.hscall();
                    }
                    var hs_rb1026D1M7 = hs_wild326D206.data[0];
                    var hs_rb1126D1M8 = hs_wild326D206.data[1];
                    var hs_ds226D1M9 = hs_wild326D206.data[2];
                    var hs_rb1226D1Ma = hs_wild326D206.data[3];
                    var hs_rb1426D1Mc = hs_wild326D206.data[5];
                    var hs_tpl26D205 = hs_ir126D1LV;
                    if (hs_ir126D1LV.notEvaluated) {
                        hs_tpl26D205 = hs_ir126D1LV.hscall();
                    }
                    var hs_tpl126D1Mb = hs_tpl26D205.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D1M7, hs_rb1126D1M8, hs_ds226D1M9, hs_rb1226D1Ma, hs_tpl126D1Mb, hs_rb1426D1Mc];
                    return $res;
                case 2:
                    var hs_wild326D203 = hs_wild26D1LX;
                    if (hs_wild26D1LX.notEvaluated) {
                        hs_wild326D203 = hs_wild26D1LX.hscall();
                    }
                    var hs_rb1026D1Mk = hs_wild326D203.data[0];
                    var hs_rb1126D1Ml = hs_wild326D203.data[1];
                    var hs_ds226D1Mm = hs_wild326D203.data[2];
                    var hs_rb1226D1Mn = hs_wild326D203.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D1Mk, hs_rb1126D1Ml, hs_ds226D1Mm, hs_rb1226D1Mn, 0, 0];
                    return $res;
                }
            };
            var hs_sat26D1ZW = new $hs.Data(1);
            hs_sat26D1ZW.data = [hs_why26D1LU, hs_sat26D200, hs_sat26D1ZZ];
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D1LT, hs_sat26D1ZW);
        };
        var hs_loop26D1NI = new $hs.Func(2);
        hs_loop26D1NI.evaluate = function (hs_ir26D1MM, hs_ow26D1MP) {
            var hs_ir126D1MS = hs_ir26D1MM;
            if (hs_ir26D1MM.notEvaluated) {
                hs_ir126D1MS = hs_ir26D1MM.hscall();
            }
            var hs_ow126D1MU = hs_ow26D1MP;
            if (hs_ow26D1MP.notEvaluated) {
                hs_ow126D1MU = hs_ow26D1MP.hscall();
            }
            var hs_wild226D1Z1 = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_ir126D1MS, hs_iw26D1Ls);
            switch (hs_wild226D1Z1.tag) {
            case 1:
                var hs_sat26D1Z2 = new $hs.Data(1);
                hs_sat26D1Z2.data = [2];
                var hs_sat26D1Z3 = new $hs.Thunk();
                hs_sat26D1Z3.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_os26D1LH, hs_ow126D1MU);
                };
                var hs_wild326D1Z4 = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D1Z3, hs_sat26D1Z2);
                switch (hs_wild326D1Z4.tag) {
                case 1:
                    var hs_sat26D1Z6 = new $hs.Func(1);
                    hs_sat26D1Z6.evaluate = function (hs_ds226D1N0) {
                        var hs_wild426D1Z7 = hs_ds226D1N0;
                        if (hs_ds226D1N0.notEvaluated) {
                            hs_wild426D1Z7 = hs_ds226D1N0.hscall();
                        }
                        var hs_c26D1N5 = hs_wild426D1Z7.data[0];
                        var hs_irzq26D1NG = hs_wild426D1Z7.data[1];
                        var hs_x26D1N6 = new $hs.Thunk();
                        hs_x26D1N6.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26D1N5);
                        };
                        var hs_sat26D1Z8 = new $hs.Data(1);
                        hs_sat26D1Z8.data = [65536];
                        var hs_wild526D1Z9 = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_x26D1N6, hs_sat26D1Z8);
                        switch (hs_wild526D1Z9.tag) {
                        case 1:
                            var hs_sat26D1Zn = new $hs.Data(1);
                            hs_sat26D1Zn.data = [4];
                            var hs_sat26D1Zo = new $hs.Thunk();
                            hs_sat26D1Zo.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_os26D1LH, hs_ow126D1MU);
                            };
                            var hs_wild626D1Zp = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D1Zo, hs_sat26D1Zn);
                            switch (hs_wild626D1Zp.tag) {
                            case 1:
                                var hs_n126D1Ne = new $hs.Thunk();
                                hs_n126D1Ne.evaluateOnce = function () {
                                    var hs_sat26D1ZV = new $hs.Data(1);
                                    hs_sat26D1ZV.data = [65536];
                                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_x26D1N6, hs_sat26D1ZV);
                                };
                                var hs_n226D1Nh = new $hs.Thunk();
                                hs_n226D1Nh.evaluateOnce = function () {
                                    var hs_sat26D1ZU = new $hs.Data(1);
                                    hs_sat26D1ZU.data = [1023];
                                    return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_n126D1Ne, hs_sat26D1ZU);
                                };
                                var hs_sat26D1Zr = new $hs.Thunk();
                                hs_sat26D1Zr.evaluateOnce = function () {
                                    var hs_sat26D1Zw = new $hs.Thunk();
                                    hs_sat26D1Zw.evaluateOnce = function () {
                                        var hs_sat26D1ZF = new $hs.Thunk();
                                        hs_sat26D1ZF.evaluateOnce = function () {
                                            var hs_sat26D1ZK = new $hs.Thunk();
                                            hs_sat26D1ZK.evaluateOnce = function () {
                                                var hs_sat26D1ZS = new $hs.Thunk();
                                                hs_sat26D1ZS.evaluateOnce = function () {
                                                    var hs_sat26D1ZT = new $hs.Data(1);
                                                    hs_sat26D1ZT.data = [4];
                                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126D1MU, hs_sat26D1ZT);
                                                };
                                                return hs_loop26D1NI.hscall(hs_irzq26D1NG, hs_sat26D1ZS);
                                            };
                                            var hs_sat26D1ZJ = new $hs.Thunk();
                                            hs_sat26D1ZJ.evaluateOnce = function () {
                                                var hs_sat26D1ZM = new $hs.Thunk();
                                                hs_sat26D1ZM.evaluateOnce = function () {
                                                    var hs_sat26D1ZO = new $hs.Thunk();
                                                    hs_sat26D1ZO.evaluateOnce = function () {
                                                        var hs_sat26D1ZQ = new $hs.Data(1);
                                                        hs_sat26D1ZQ.data = [220];
                                                        var hs_sat26D1ZP = new $hs.Thunk();
                                                        hs_sat26D1ZP.evaluateOnce = function () {
                                                            var hs_sat26D1ZR = new $hs.Data(1);
                                                            hs_sat26D1ZR.data = [8];
                                                            return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_n226D1Nh, hs_sat26D1ZR);
                                                        };
                                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D1ZP, hs_sat26D1ZQ);
                                                    };
                                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26D1ZO);
                                                };
                                                var hs_sat26D1ZL = new $hs.Thunk();
                                                hs_sat26D1ZL.evaluateOnce = function () {
                                                    var hs_sat26D1ZN = new $hs.Data(1);
                                                    hs_sat26D1ZN.data = [3];
                                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126D1MU, hs_sat26D1ZN);
                                                };
                                                return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D1LE, hs_sat26D1ZL, hs_sat26D1ZM);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1ZJ, hs_sat26D1ZK);
                                        };
                                        var hs_sat26D1ZE = new $hs.Thunk();
                                        hs_sat26D1ZE.evaluateOnce = function () {
                                            var hs_sat26D1ZH = new $hs.Thunk();
                                            hs_sat26D1ZH.evaluateOnce = function () {
                                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_n226D1Nh);
                                            };
                                            var hs_sat26D1ZG = new $hs.Thunk();
                                            hs_sat26D1ZG.evaluateOnce = function () {
                                                var hs_sat26D1ZI = new $hs.Data(1);
                                                hs_sat26D1ZI.data = [2];
                                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126D1MU, hs_sat26D1ZI);
                                            };
                                            return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D1LE, hs_sat26D1ZG, hs_sat26D1ZH);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1ZE, hs_sat26D1ZF);
                                    };
                                    var hs_sat26D1Zv = new $hs.Thunk();
                                    hs_sat26D1Zv.evaluateOnce = function () {
                                        var hs_sat26D1Zy = new $hs.Thunk();
                                        hs_sat26D1Zy.evaluateOnce = function () {
                                            var hs_sat26D1ZA = new $hs.Thunk();
                                            hs_sat26D1ZA.evaluateOnce = function () {
                                                var hs_sat26D1ZC = new $hs.Data(1);
                                                hs_sat26D1ZC.data = [216];
                                                var hs_sat26D1ZB = new $hs.Thunk();
                                                hs_sat26D1ZB.evaluateOnce = function () {
                                                    var hs_sat26D1ZD = new $hs.Data(1);
                                                    hs_sat26D1ZD.data = [18];
                                                    return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_n126D1Ne, hs_sat26D1ZD);
                                                };
                                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D1ZB, hs_sat26D1ZC);
                                            };
                                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26D1ZA);
                                        };
                                        var hs_sat26D1Zx = new $hs.Thunk();
                                        hs_sat26D1Zx.evaluateOnce = function () {
                                            var hs_sat26D1Zz = new $hs.Data(1);
                                            hs_sat26D1Zz.data = [1];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126D1MU, hs_sat26D1Zz);
                                        };
                                        return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D1LE, hs_sat26D1Zx, hs_sat26D1Zy);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1Zv, hs_sat26D1Zw);
                                };
                                var hs_sat26D1Zq = new $hs.Thunk();
                                hs_sat26D1Zq.evaluateOnce = function () {
                                    var hs_sat26D1Zs = new $hs.Thunk();
                                    hs_sat26D1Zs.evaluateOnce = function () {
                                        var hs_sat26D1Zt = new $hs.Thunk();
                                        hs_sat26D1Zt.evaluateOnce = function () {
                                            var hs_sat26D1Zu = new $hs.Data(1);
                                            hs_sat26D1Zu.data = [10];
                                            return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_n126D1Ne, hs_sat26D1Zu);
                                        };
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26D1Zt);
                                    };
                                    return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D1LE, hs_ow126D1MU, hs_sat26D1Zs);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1Zq, hs_sat26D1Zr);
                            case 2:
                                return hs_done26D1MI.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_OutputUnderflow, hs_ir126D1MS, hs_ow126D1MU);
                            }
                        case 2:
                            var hs_wild626D1Za = $hs.modules.GHCziIOziEncodingziFailure.hs_isSurrogate.hscall(hs_c26D1N5);
                            switch (hs_wild626D1Za.tag) {
                            case 1:
                                var hs_sat26D1Zc = new $hs.Thunk();
                                hs_sat26D1Zc.evaluateOnce = function () {
                                    var hs_sat26D1Zf = new $hs.Thunk();
                                    hs_sat26D1Zf.evaluateOnce = function () {
                                        var hs_sat26D1Zl = new $hs.Thunk();
                                        hs_sat26D1Zl.evaluateOnce = function () {
                                            var hs_sat26D1Zm = new $hs.Data(1);
                                            hs_sat26D1Zm.data = [2];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126D1MU, hs_sat26D1Zm);
                                        };
                                        return hs_loop26D1NI.hscall(hs_irzq26D1NG, hs_sat26D1Zl);
                                    };
                                    var hs_sat26D1Ze = new $hs.Thunk();
                                    hs_sat26D1Ze.evaluateOnce = function () {
                                        var hs_sat26D1Zh = new $hs.Thunk();
                                        hs_sat26D1Zh.evaluateOnce = function () {
                                            var hs_sat26D1Zj = new $hs.Thunk();
                                            hs_sat26D1Zj.evaluateOnce = function () {
                                                var hs_sat26D1Zk = new $hs.Data(1);
                                                hs_sat26D1Zk.data = [8];
                                                return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_x26D1N6, hs_sat26D1Zk);
                                            };
                                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26D1Zj);
                                        };
                                        var hs_sat26D1Zg = new $hs.Thunk();
                                        hs_sat26D1Zg.evaluateOnce = function () {
                                            var hs_sat26D1Zi = new $hs.Data(1);
                                            hs_sat26D1Zi.data = [1];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126D1MU, hs_sat26D1Zi);
                                        };
                                        return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D1LE, hs_sat26D1Zg, hs_sat26D1Zh);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1Ze, hs_sat26D1Zf);
                                };
                                var hs_sat26D1Zb = new $hs.Thunk();
                                hs_sat26D1Zb.evaluateOnce = function () {
                                    var hs_sat26D1Zd = new $hs.Thunk();
                                    hs_sat26D1Zd.evaluateOnce = function () {
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_x26D1N6);
                                    };
                                    return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D1LE, hs_ow126D1MU, hs_sat26D1Zd);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1Zb, hs_sat26D1Zc);
                            case 2:
                                return hs_done26D1MI.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_InvalidSequence, hs_ir126D1MS, hs_ow126D1MU);
                            }
                        }
                    };
                    var hs_sat26D1Z5 = new $hs.Thunk();
                    hs_sat26D1Z5.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_readCharBuf.hscall(hs_iraw26D1Lp, hs_ir126D1MS);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1Z5, hs_sat26D1Z6);
                case 2:
                    return hs_done26D1MI.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_OutputUnderflow, hs_ir126D1MS, hs_ow126D1MU);
                }
            case 2:
                return hs_done26D1MI.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_InputUnderflow, hs_ir126D1MS, hs_ow126D1MU);
            }
        };
        var hs_sat26D1YU = new $hs.Data(1);
        hs_sat26D1YU.data = [hs_rb926D1O4];
        var hs_sat26D1YT = new $hs.Data(1);
        hs_sat26D1YT.data = [hs_rb326D1O2];
        return hs_loop26D1NI.hscall(hs_sat26D1YT, hs_sat26D1YU);
    };
    hs_validate225tdL7.evaluate = function (hs_x126D1O8, hs_x226D1Of) {
        var hs_sat26D20c = new $hs.Thunk();
        hs_sat26D20c.evaluateOnce = function () {
            var hs_sat26D20g = new $hs.Thunk();
            hs_sat26D20g.evaluateOnce = function () {
                var hs_sat26D20k = new $hs.Thunk();
                hs_sat26D20k.evaluateOnce = function () {
                    var hs_sat26D20n = new $hs.Thunk();
                    hs_sat26D20n.evaluateOnce = function () {
                        var hs_sat26D20o = new $hs.Thunk();
                        hs_sat26D20o.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(57343);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26D20o);
                    };
                    return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16, hs_x226D1Of, hs_sat26D20n);
                };
                var hs_sat26D20j = new $hs.Thunk();
                hs_sat26D20j.evaluateOnce = function () {
                    var hs_sat26D20l = new $hs.Thunk();
                    hs_sat26D20l.evaluateOnce = function () {
                        var hs_sat26D20m = new $hs.Thunk();
                        hs_sat26D20m.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(56320);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26D20m);
                    };
                    return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16, hs_x226D1Of, hs_sat26D20l);
                };
                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D20j, hs_sat26D20k);
            };
            var hs_sat26D20f = new $hs.Thunk();
            hs_sat26D20f.evaluateOnce = function () {
                var hs_sat26D20h = new $hs.Thunk();
                hs_sat26D20h.evaluateOnce = function () {
                    var hs_sat26D20i = new $hs.Thunk();
                    hs_sat26D20i.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(56319);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26D20i);
                };
                return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16, hs_x126D1O8, hs_sat26D20h);
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D20f, hs_sat26D20g);
        };
        var hs_sat26D20b = new $hs.Thunk();
        hs_sat26D20b.evaluateOnce = function () {
            var hs_sat26D20d = new $hs.Thunk();
            hs_sat26D20d.evaluateOnce = function () {
                var hs_sat26D20e = new $hs.Thunk();
                hs_sat26D20e.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(55296);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26D20e);
            };
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16, hs_x126D1O8, hs_sat26D20d);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D20b, hs_sat26D20c);
    };
    this.hs_utf16bezudecode.evaluate = function (hs_input26D1Oq, hs_output26D1OF) {
        var hs_wild26D1P9 = hs_input26D1Oq;
        if (hs_input26D1Oq.notEvaluated) {
            hs_wild26D1P9 = hs_input26D1Oq.hscall();
        }
        var hs_rb26D1Oz = hs_wild26D1P9.data[0];
        var hs_rb126D1OA = hs_wild26D1P9.data[1];
        var hs_rb326D1Rv = hs_wild26D1P9.data[4];
        var hs_rb426D1OD = hs_wild26D1P9.data[5];
        var hs_iraw26D1OB = new $hs.Data(1);
        hs_iraw26D1OB.data = [hs_rb26D1Oz, hs_rb126D1OA];
        var hs_iw26D1OE = new $hs.Data(1);
        hs_iw26D1OE.data = [hs_rb426D1OD];
        var hs_wild126D1PB = hs_output26D1OF;
        if (hs_output26D1OF.notEvaluated) {
            hs_wild126D1PB = hs_output26D1OF.hscall();
        }
        var hs_rb526D1OO = hs_wild126D1PB.data[0];
        var hs_rb626D1OP = hs_wild126D1PB.data[1];
        var hs_rb726D1OS = hs_wild126D1PB.data[3];
        var hs_rb926D1Rx = hs_wild126D1PB.data[5];
        var hs_oraw26D1OQ = new $hs.Data(1);
        hs_oraw26D1OQ.data = [hs_rb526D1OO, hs_rb626D1OP];
        var hs_os26D1OT = new $hs.Data(1);
        hs_os26D1OT.data = [hs_rb726D1OS];
        var hs_done26D1PU = new $hs.Func(4);
        hs_done26D1PU.evaluate = function (hs_zddMonad26D1P5, hs_why26D1P6, hs_ir26D1OZ, hs_ow26D1P2) {
            var hs_ir126D1P7 = hs_ir26D1OZ;
            if (hs_ir26D1OZ.notEvaluated) {
                hs_ir126D1P7 = hs_ir26D1OZ.hscall();
            }
            var hs_ow126D1PJ = hs_ow26D1P2;
            if (hs_ow26D1P2.notEvaluated) {
                hs_ow126D1PJ = hs_ow26D1P2.hscall();
            }
            var hs_sat26D21C = new $hs.Thunk();
            hs_sat26D21C.evaluateOnce = function () {
                var hs_wild226D21M = hs_wild126D1PB;
                if (hs_wild126D1PB.notEvaluated) {
                    hs_wild226D21M = hs_wild126D1PB.hscall();
                }
                var hs_rb1026D1PM = hs_wild226D21M.data[0];
                var hs_rb1126D1PN = hs_wild226D21M.data[1];
                var hs_ds226D1PO = hs_wild226D21M.data[2];
                var hs_rb1226D1PP = hs_wild226D21M.data[3];
                var hs_rb1326D1PQ = hs_wild226D21M.data[4];
                var hs_tpl26D21L = hs_ow126D1PJ;
                if (hs_ow126D1PJ.notEvaluated) {
                    hs_tpl26D21L = hs_ow126D1PJ.hscall();
                }
                var hs_tpl126D1PR = hs_tpl26D21L.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb1026D1PM, hs_rb1126D1PN, hs_ds226D1PO, hs_rb1226D1PP, hs_rb1326D1PQ, hs_tpl126D1PR];
                return $res;
            };
            var hs_sat26D21D = new $hs.Thunk();
            hs_sat26D21D.evaluateOnce = function () {
                var hs_wild226D21H = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_ir126D1P7, hs_iw26D1OE);
                switch (hs_wild226D21H.tag) {
                case 1:
                    var hs_wild326D21J = hs_wild26D1P9;
                    if (hs_wild26D1P9.notEvaluated) {
                        hs_wild326D21J = hs_wild26D1P9.hscall();
                    }
                    var hs_rb1026D1Pj = hs_wild326D21J.data[0];
                    var hs_rb1126D1Pk = hs_wild326D21J.data[1];
                    var hs_ds226D1Pl = hs_wild326D21J.data[2];
                    var hs_rb1226D1Pm = hs_wild326D21J.data[3];
                    var hs_rb1426D1Po = hs_wild326D21J.data[5];
                    var hs_tpl26D21I = hs_ir126D1P7;
                    if (hs_ir126D1P7.notEvaluated) {
                        hs_tpl26D21I = hs_ir126D1P7.hscall();
                    }
                    var hs_tpl126D1Pn = hs_tpl26D21I.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D1Pj, hs_rb1126D1Pk, hs_ds226D1Pl, hs_rb1226D1Pm, hs_tpl126D1Pn, hs_rb1426D1Po];
                    return $res;
                case 2:
                    var hs_wild326D21G = hs_wild26D1P9;
                    if (hs_wild26D1P9.notEvaluated) {
                        hs_wild326D21G = hs_wild26D1P9.hscall();
                    }
                    var hs_rb1026D1Pw = hs_wild326D21G.data[0];
                    var hs_rb1126D1Px = hs_wild326D21G.data[1];
                    var hs_ds226D1Py = hs_wild326D21G.data[2];
                    var hs_rb1226D1Pz = hs_wild326D21G.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D1Pw, hs_rb1126D1Px, hs_ds226D1Py, hs_rb1226D1Pz, 0, 0];
                    return $res;
                }
            };
            var hs_sat26D21z = new $hs.Data(1);
            hs_sat26D21z.data = [hs_why26D1P6, hs_sat26D21D, hs_sat26D21C];
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D1P5, hs_sat26D21z);
        };
        var hs_loop26D1Rf = new $hs.Func(2);
        hs_loop26D1Rf.evaluate = function (hs_ir26D1PY, hs_ow26D1Q1) {
            var hs_ir126D1Q5 = hs_ir26D1PY;
            if (hs_ir26D1PY.notEvaluated) {
                hs_ir126D1Q5 = hs_ir26D1PY.hscall();
            }
            var hs_ow126D1Q6 = hs_ow26D1Q1;
            if (hs_ow26D1Q1.notEvaluated) {
                hs_ow126D1Q6 = hs_ow26D1Q1.hscall();
            }
            var hs_invalid26D1Q7 = new $hs.Thunk();
            hs_invalid26D1Q7.evaluateOnce = function () {
                return hs_done26D1PU.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_InvalidSequence, hs_ir126D1Q5, hs_ow126D1Q6);
            };
            var hs_wild226D20x = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_ow126D1Q6, hs_os26D1OT);
            switch (hs_wild226D20x.tag) {
            case 1:
                var hs_wild326D20y = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_ir126D1Q5, hs_iw26D1OE);
                switch (hs_wild326D20y.tag) {
                case 1:
                    var hs_sat26D20z = new $hs.Thunk();
                    hs_sat26D20z.evaluateOnce = function () {
                        var hs_sat26D21y = new $hs.Data(1);
                        hs_sat26D21y.data = [1];
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126D1Q5, hs_sat26D21y);
                    };
                    var hs_wild426D20A = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26D20z, hs_iw26D1OE);
                    switch (hs_wild426D20A.tag) {
                    case 1:
                        var hs_sat26D20C = new $hs.Func(1);
                        hs_sat26D20C.evaluate = function (hs_c026D1Qk) {
                            var hs_sat26D20E = new $hs.Func(1);
                            hs_sat26D20E.evaluate = function (hs_c126D1Qo) {
                                var hs_x126D1Qq = new $hs.Thunk();
                                hs_x126D1Qq.evaluateOnce = function () {
                                    var hs_sat26D21v = new $hs.Thunk();
                                    hs_sat26D21v.evaluateOnce = function () {
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord16, hs_c126D1Qo);
                                    };
                                    var hs_sat26D21u = new $hs.Thunk();
                                    hs_sat26D21u.evaluateOnce = function () {
                                        var hs_sat26D21x = new $hs.Data(1);
                                        hs_sat26D21x.data = [8];
                                        var hs_sat26D21w = new $hs.Thunk();
                                        hs_sat26D21w.evaluateOnce = function () {
                                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord16, hs_c026D1Qk);
                                        };
                                        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16, hs_sat26D21w, hs_sat26D21x);
                                    };
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26D21u, hs_sat26D21v);
                                };
                                var hs_sat26D20I = new $hs.Thunk();
                                hs_sat26D20I.evaluateOnce = function () {
                                    var hs_sat26D21s = new $hs.Thunk();
                                    hs_sat26D21s.evaluateOnce = function () {
                                        var hs_sat26D21t = new $hs.Thunk();
                                        hs_sat26D21t.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(57343);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26D21t);
                                    };
                                    return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16, hs_x126D1Qq, hs_sat26D21s);
                                };
                                var hs_sat26D20J = new $hs.Thunk();
                                hs_sat26D20J.evaluateOnce = function () {
                                    var hs_sat26D21n = new $hs.Thunk();
                                    hs_sat26D21n.evaluateOnce = function () {
                                        var hs_sat26D21q = new $hs.Thunk();
                                        hs_sat26D21q.evaluateOnce = function () {
                                            var hs_sat26D21r = new $hs.Thunk();
                                            hs_sat26D21r.evaluateOnce = function () {
                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(55296);
                                            };
                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26D21r);
                                        };
                                        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16, hs_x126D1Qq, hs_sat26D21q);
                                    };
                                    var hs_sat26D21m = new $hs.Thunk();
                                    hs_sat26D21m.evaluateOnce = function () {
                                        var hs_sat26D21o = new $hs.Thunk();
                                        hs_sat26D21o.evaluateOnce = function () {
                                            var hs_sat26D21p = new $hs.Thunk();
                                            hs_sat26D21p.evaluateOnce = function () {
                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                            };
                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26D21p);
                                        };
                                        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16, hs_x126D1Qq, hs_sat26D21o);
                                    };
                                    return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D21m, hs_sat26D21n);
                                };
                                var hs_wild526D20K = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26D20J, hs_sat26D20I);
                                switch (hs_wild526D20K.tag) {
                                case 1:
                                    var hs_sat26D20Q = new $hs.Data(1);
                                    hs_sat26D20Q.data = [4];
                                    var hs_sat26D20R = new $hs.Thunk();
                                    hs_sat26D20R.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_iw26D1OE, hs_ir126D1Q5);
                                    };
                                    var hs_wild626D20S = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D20R, hs_sat26D20Q);
                                    switch (hs_wild626D20S.tag) {
                                    case 1:
                                        var hs_sat26D20U = new $hs.Func(1);
                                        hs_sat26D20U.evaluate = function (hs_c226D1QO) {
                                            var hs_sat26D20Y = new $hs.Func(1);
                                            hs_sat26D20Y.evaluate = function (hs_c326D1QS) {
                                                var hs_x226D1QU = new $hs.Thunk();
                                                hs_x226D1QU.evaluateOnce = function () {
                                                    var hs_sat26D21j = new $hs.Thunk();
                                                    hs_sat26D21j.evaluateOnce = function () {
                                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord16, hs_c326D1QS);
                                                    };
                                                    var hs_sat26D21i = new $hs.Thunk();
                                                    hs_sat26D21i.evaluateOnce = function () {
                                                        var hs_sat26D21l = new $hs.Data(1);
                                                        hs_sat26D21l.data = [8];
                                                        var hs_sat26D21k = new $hs.Thunk();
                                                        hs_sat26D21k.evaluateOnce = function () {
                                                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord16, hs_c226D1QO);
                                                        };
                                                        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16, hs_sat26D21k, hs_sat26D21l);
                                                    };
                                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26D21i, hs_sat26D21j);
                                                };
                                                var hs_sat26D211 = new $hs.Thunk();
                                                hs_sat26D211.evaluateOnce = function () {
                                                    return hs_validate225tdL7.hscall(hs_x126D1Qq, hs_x226D1QU);
                                                };
                                                var hs_wild726D212 = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D211);
                                                switch (hs_wild726D212.tag) {
                                                case 1:
                                                    var hs_sat26D214 = new $hs.Func(1);
                                                    hs_sat26D214.evaluate = function (hs_owzq26D1Rh) {
                                                        var hs_sat26D21g = new $hs.Thunk();
                                                        hs_sat26D21g.evaluateOnce = function () {
                                                            var hs_sat26D21h = new $hs.Data(1);
                                                            hs_sat26D21h.data = [4];
                                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126D1Q5, hs_sat26D21h);
                                                        };
                                                        return hs_loop26D1Rf.hscall(hs_sat26D21g, hs_owzq26D1Rh);
                                                    };
                                                    var hs_sat26D213 = new $hs.Thunk();
                                                    hs_sat26D213.evaluateOnce = function () {
                                                        var hs_sat26D215 = new $hs.Thunk();
                                                        hs_sat26D215.evaluateOnce = function () {
                                                            var hs_wild826D217 = hs_x126D1Qq;
                                                            if (hs_x126D1Qq.notEvaluated) {
                                                                hs_wild826D217 = hs_x126D1Qq.hscall();
                                                            }
                                                            var hs_azh26D1R1 = hs_wild826D217.data[0];
                                                            var hs_wild926D216 = hs_x226D1QU;
                                                            if (hs_x226D1QU.notEvaluated) {
                                                                hs_wild926D216 = hs_x226D1QU.hscall();
                                                            }
                                                            var hs_bzh26D1R5 = hs_wild926D216.data[0];
                                                            var hs_sat26D218 = hs_bzh26D1R5;
                                                            var hs_sat26D219 = ($hs.Int.addCarry(hs_sat26D218, ~56320, 1))[0];
                                                            var hs_sat26D21a = hs_azh26D1R1;
                                                            var hs_sat26D21b = ($hs.Int.addCarry(hs_sat26D21a, ~55296, 1))[0];
                                                            var hs_sat26D21c = hs_sat26D21b << 10;
                                                            var hs_sat26D21d = ($hs.Int.addCarry(hs_sat26D21c, hs_sat26D219, 0))[0];
                                                            var hs_sat26D21e = ($hs.Int.addCarry(hs_sat26D21d, 65536, 0))[0];
                                                            var hs_sat26D21f = String.fromCharCode(hs_sat26D21e);
                                                            var $res = new $hs.Data(1);
                                                            $res.data = [hs_sat26D21f];
                                                            return $res;
                                                        };
                                                        return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_oraw26D1OQ, hs_ow126D1Q6, hs_sat26D215);
                                                    };
                                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D213, hs_sat26D214);
                                                case 2:
                                                    if (hs_invalid26D1Q7.notEvaluated) {
                                                        return hs_invalid26D1Q7.hscall();
                                                    } else {
                                                        return hs_invalid26D1Q7;
                                                    }
                                                }
                                            };
                                            var hs_sat26D20X = new $hs.Thunk();
                                            hs_sat26D20X.evaluateOnce = function () {
                                                var hs_sat26D20Z = new $hs.Thunk();
                                                hs_sat26D20Z.evaluateOnce = function () {
                                                    var hs_sat26D210 = new $hs.Data(1);
                                                    hs_sat26D210.data = [3];
                                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126D1Q5, hs_sat26D210);
                                                };
                                                return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26D1OB, hs_sat26D20Z);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D20X, hs_sat26D20Y);
                                        };
                                        var hs_sat26D20T = new $hs.Thunk();
                                        hs_sat26D20T.evaluateOnce = function () {
                                            var hs_sat26D20V = new $hs.Thunk();
                                            hs_sat26D20V.evaluateOnce = function () {
                                                var hs_sat26D20W = new $hs.Data(1);
                                                hs_sat26D20W.data = [2];
                                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126D1Q5, hs_sat26D20W);
                                            };
                                            return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26D1OB, hs_sat26D20V);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D20T, hs_sat26D20U);
                                    case 2:
                                        return hs_done26D1PU.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_InputUnderflow, hs_ir126D1Q5, hs_ow126D1Q6);
                                    }
                                case 2:
                                    var hs_sat26D20L = new $hs.Func(1);
                                    hs_sat26D20L.evaluate = function (hs_owzq26D1Rr) {
                                        var hs_sat26D20O = new $hs.Thunk();
                                        hs_sat26D20O.evaluateOnce = function () {
                                            var hs_sat26D20P = new $hs.Data(1);
                                            hs_sat26D20P.data = [2];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126D1Q5, hs_sat26D20P);
                                        };
                                        return hs_loop26D1Rf.hscall(hs_sat26D20O, hs_owzq26D1Rr);
                                    };
                                    var hs_sat26D20H = new $hs.Thunk();
                                    hs_sat26D20H.evaluateOnce = function () {
                                        var hs_sat26D20M = new $hs.Thunk();
                                        hs_sat26D20M.evaluateOnce = function () {
                                            var hs_sat26D20N = new $hs.Thunk();
                                            hs_sat26D20N.evaluateOnce = function () {
                                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16, $hs.modules.GHCziNum.hs_zdfNumInt, hs_x126D1Qq);
                                            };
                                            return $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26D20N);
                                        };
                                        return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_oraw26D1OQ, hs_ow126D1Q6, hs_sat26D20M);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D20H, hs_sat26D20L);
                                }
                            };
                            var hs_sat26D20D = new $hs.Thunk();
                            hs_sat26D20D.evaluateOnce = function () {
                                var hs_sat26D20F = new $hs.Thunk();
                                hs_sat26D20F.evaluateOnce = function () {
                                    var hs_sat26D20G = new $hs.Data(1);
                                    hs_sat26D20G.data = [1];
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126D1Q5, hs_sat26D20G);
                                };
                                return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26D1OB, hs_sat26D20F);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D20D, hs_sat26D20E);
                        };
                        var hs_sat26D20B = new $hs.Thunk();
                        hs_sat26D20B.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26D1OB, hs_ir126D1Q5);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D20B, hs_sat26D20C);
                    case 2:
                        return hs_done26D1PU.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_InputUnderflow, hs_ir126D1Q5, hs_ow126D1Q6);
                    }
                case 2:
                    return hs_done26D1PU.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_InputUnderflow, hs_ir126D1Q5, hs_ow126D1Q6);
                }
            case 2:
                return hs_done26D1PU.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_OutputUnderflow, hs_ir126D1Q5, hs_ow126D1Q6);
            }
        };
        var hs_sat26D20q = new $hs.Data(1);
        hs_sat26D20q.data = [hs_rb926D1Rx];
        var hs_sat26D20p = new $hs.Data(1);
        hs_sat26D20p.data = [hs_rb326D1Rv];
        return hs_loop26D1Rf.hscall(hs_sat26D20p, hs_sat26D20q);
    };
    this.hs_mkUTF16be.evaluate = function (hs_cfm26D1RB) {
        var hs_sat26D21P = new $hs.Thunk();
        hs_sat26D21P.evaluateOnce = function () {
            var hs_sat26D21Y = new $hs.Thunk();
            hs_sat26D21Y.evaluateOnce = function () {
                var hs_sat26D222 = new $hs.Thunk();
                hs_sat26D222.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziBase.hs_const, hs_sat26D222);
            };
            var hs_sat26D21Z = new $hs.Thunk();
            hs_sat26D21Z.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26D220 = new $hs.Thunk();
            hs_sat26D220.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26D221 = new $hs.Thunk();
            hs_sat26D221.evaluateOnce = function () {
                return $hs.modules.GHCziIOziEncodingziFailure.hs_recoverEncode.hscall(hs_cfm26D1RB);
            };
            var hs_sat26D21X = new $hs.Data(1);
            hs_sat26D21X.data = [$hs.modules.GHCziIOziEncodingziUTF16.hs_utf16bezuencode, hs_sat26D221, hs_sat26D220, hs_sat26D21Z, hs_sat26D21Y];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D21X);
        };
        var hs_sat26D21Q = new $hs.Thunk();
        hs_sat26D21Q.evaluateOnce = function () {
            var hs_sat26D21S = new $hs.Thunk();
            hs_sat26D21S.evaluateOnce = function () {
                var hs_sat26D21W = new $hs.Thunk();
                hs_sat26D21W.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziBase.hs_const, hs_sat26D21W);
            };
            var hs_sat26D21T = new $hs.Thunk();
            hs_sat26D21T.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26D21U = new $hs.Thunk();
            hs_sat26D21U.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26D21V = new $hs.Thunk();
            hs_sat26D21V.evaluateOnce = function () {
                return $hs.modules.GHCziIOziEncodingziFailure.hs_recoverDecode.hscall(hs_cfm26D1RB);
            };
            var hs_sat26D21R = new $hs.Data(1);
            hs_sat26D21R.data = [$hs.modules.GHCziIOziEncodingziUTF16.hs_utf16bezudecode, hs_sat26D21V, hs_sat26D21U, hs_sat26D21T, hs_sat26D21S];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D21R);
        };
        var hs_sat26D21O = new $hs.Thunk();
        hs_sat26D21O.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("UTF-16BE\x00");
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26D21O, hs_sat26D21Q, hs_sat26D21P];
        return $res;
    };
    this.hs_utf16be.evaluateOnce = function () {
        return $hs.modules.GHCziIOziEncodingziUTF16.hs_mkUTF16be.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_ErrorOnCodingFailure);
    };
    this.hs_utf16lezudecode.evaluate = function (hs_input26D1RS, hs_output26D1S7) {
        var hs_wild26D1SB = hs_input26D1RS;
        if (hs_input26D1RS.notEvaluated) {
            hs_wild26D1SB = hs_input26D1RS.hscall();
        }
        var hs_rb26D1S1 = hs_wild26D1SB.data[0];
        var hs_rb126D1S2 = hs_wild26D1SB.data[1];
        var hs_rb326D1UX = hs_wild26D1SB.data[4];
        var hs_rb426D1S5 = hs_wild26D1SB.data[5];
        var hs_iraw26D1S3 = new $hs.Data(1);
        hs_iraw26D1S3.data = [hs_rb26D1S1, hs_rb126D1S2];
        var hs_iw26D1S6 = new $hs.Data(1);
        hs_iw26D1S6.data = [hs_rb426D1S5];
        var hs_wild126D1T3 = hs_output26D1S7;
        if (hs_output26D1S7.notEvaluated) {
            hs_wild126D1T3 = hs_output26D1S7.hscall();
        }
        var hs_rb526D1Sg = hs_wild126D1T3.data[0];
        var hs_rb626D1Sh = hs_wild126D1T3.data[1];
        var hs_rb726D1Sk = hs_wild126D1T3.data[3];
        var hs_rb926D1UZ = hs_wild126D1T3.data[5];
        var hs_oraw26D1Si = new $hs.Data(1);
        hs_oraw26D1Si.data = [hs_rb526D1Sg, hs_rb626D1Sh];
        var hs_os26D1Sl = new $hs.Data(1);
        hs_os26D1Sl.data = [hs_rb726D1Sk];
        var hs_done26D1Tm = new $hs.Func(4);
        hs_done26D1Tm.evaluate = function (hs_zddMonad26D1Sx, hs_why26D1Sy, hs_ir26D1Sr, hs_ow26D1Su) {
            var hs_ir126D1Sz = hs_ir26D1Sr;
            if (hs_ir26D1Sr.notEvaluated) {
                hs_ir126D1Sz = hs_ir26D1Sr.hscall();
            }
            var hs_ow126D1Tb = hs_ow26D1Su;
            if (hs_ow26D1Su.notEvaluated) {
                hs_ow126D1Tb = hs_ow26D1Su.hscall();
            }
            var hs_sat26D23g = new $hs.Thunk();
            hs_sat26D23g.evaluateOnce = function () {
                var hs_wild226D23q = hs_wild126D1T3;
                if (hs_wild126D1T3.notEvaluated) {
                    hs_wild226D23q = hs_wild126D1T3.hscall();
                }
                var hs_rb1026D1Te = hs_wild226D23q.data[0];
                var hs_rb1126D1Tf = hs_wild226D23q.data[1];
                var hs_ds226D1Tg = hs_wild226D23q.data[2];
                var hs_rb1226D1Th = hs_wild226D23q.data[3];
                var hs_rb1326D1Ti = hs_wild226D23q.data[4];
                var hs_tpl26D23p = hs_ow126D1Tb;
                if (hs_ow126D1Tb.notEvaluated) {
                    hs_tpl26D23p = hs_ow126D1Tb.hscall();
                }
                var hs_tpl126D1Tj = hs_tpl26D23p.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb1026D1Te, hs_rb1126D1Tf, hs_ds226D1Tg, hs_rb1226D1Th, hs_rb1326D1Ti, hs_tpl126D1Tj];
                return $res;
            };
            var hs_sat26D23h = new $hs.Thunk();
            hs_sat26D23h.evaluateOnce = function () {
                var hs_wild226D23l = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_ir126D1Sz, hs_iw26D1S6);
                switch (hs_wild226D23l.tag) {
                case 1:
                    var hs_wild326D23n = hs_wild26D1SB;
                    if (hs_wild26D1SB.notEvaluated) {
                        hs_wild326D23n = hs_wild26D1SB.hscall();
                    }
                    var hs_rb1026D1SL = hs_wild326D23n.data[0];
                    var hs_rb1126D1SM = hs_wild326D23n.data[1];
                    var hs_ds226D1SN = hs_wild326D23n.data[2];
                    var hs_rb1226D1SO = hs_wild326D23n.data[3];
                    var hs_rb1426D1SQ = hs_wild326D23n.data[5];
                    var hs_tpl26D23m = hs_ir126D1Sz;
                    if (hs_ir126D1Sz.notEvaluated) {
                        hs_tpl26D23m = hs_ir126D1Sz.hscall();
                    }
                    var hs_tpl126D1SP = hs_tpl26D23m.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D1SL, hs_rb1126D1SM, hs_ds226D1SN, hs_rb1226D1SO, hs_tpl126D1SP, hs_rb1426D1SQ];
                    return $res;
                case 2:
                    var hs_wild326D23k = hs_wild26D1SB;
                    if (hs_wild26D1SB.notEvaluated) {
                        hs_wild326D23k = hs_wild26D1SB.hscall();
                    }
                    var hs_rb1026D1SY = hs_wild326D23k.data[0];
                    var hs_rb1126D1SZ = hs_wild326D23k.data[1];
                    var hs_ds226D1T0 = hs_wild326D23k.data[2];
                    var hs_rb1226D1T1 = hs_wild326D23k.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D1SY, hs_rb1126D1SZ, hs_ds226D1T0, hs_rb1226D1T1, 0, 0];
                    return $res;
                }
            };
            var hs_sat26D23d = new $hs.Data(1);
            hs_sat26D23d.data = [hs_why26D1Sy, hs_sat26D23h, hs_sat26D23g];
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D1Sx, hs_sat26D23d);
        };
        var hs_loop26D1UH = new $hs.Func(2);
        hs_loop26D1UH.evaluate = function (hs_ir26D1Tq, hs_ow26D1Tt) {
            var hs_ir126D1Tx = hs_ir26D1Tq;
            if (hs_ir26D1Tq.notEvaluated) {
                hs_ir126D1Tx = hs_ir26D1Tq.hscall();
            }
            var hs_ow126D1Ty = hs_ow26D1Tt;
            if (hs_ow26D1Tt.notEvaluated) {
                hs_ow126D1Ty = hs_ow26D1Tt.hscall();
            }
            var hs_invalid26D1Tz = new $hs.Thunk();
            hs_invalid26D1Tz.evaluateOnce = function () {
                return hs_done26D1Tm.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_InvalidSequence, hs_ir126D1Tx, hs_ow126D1Ty);
            };
            var hs_wild226D22b = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_ow126D1Ty, hs_os26D1Sl);
            switch (hs_wild226D22b.tag) {
            case 1:
                var hs_wild326D22c = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_ir126D1Tx, hs_iw26D1S6);
                switch (hs_wild326D22c.tag) {
                case 1:
                    var hs_sat26D22d = new $hs.Thunk();
                    hs_sat26D22d.evaluateOnce = function () {
                        var hs_sat26D23c = new $hs.Data(1);
                        hs_sat26D23c.data = [1];
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126D1Tx, hs_sat26D23c);
                    };
                    var hs_wild426D22e = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26D22d, hs_iw26D1S6);
                    switch (hs_wild426D22e.tag) {
                    case 1:
                        var hs_sat26D22g = new $hs.Func(1);
                        hs_sat26D22g.evaluate = function (hs_c026D1TQ) {
                            var hs_sat26D22i = new $hs.Func(1);
                            hs_sat26D22i.evaluate = function (hs_c126D1TM) {
                                var hs_x126D1TS = new $hs.Thunk();
                                hs_x126D1TS.evaluateOnce = function () {
                                    var hs_sat26D239 = new $hs.Thunk();
                                    hs_sat26D239.evaluateOnce = function () {
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord16, hs_c026D1TQ);
                                    };
                                    var hs_sat26D238 = new $hs.Thunk();
                                    hs_sat26D238.evaluateOnce = function () {
                                        var hs_sat26D23b = new $hs.Data(1);
                                        hs_sat26D23b.data = [8];
                                        var hs_sat26D23a = new $hs.Thunk();
                                        hs_sat26D23a.evaluateOnce = function () {
                                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord16, hs_c126D1TM);
                                        };
                                        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16, hs_sat26D23a, hs_sat26D23b);
                                    };
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26D238, hs_sat26D239);
                                };
                                var hs_sat26D22m = new $hs.Thunk();
                                hs_sat26D22m.evaluateOnce = function () {
                                    var hs_sat26D236 = new $hs.Thunk();
                                    hs_sat26D236.evaluateOnce = function () {
                                        var hs_sat26D237 = new $hs.Thunk();
                                        hs_sat26D237.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(57343);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26D237);
                                    };
                                    return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16, hs_x126D1TS, hs_sat26D236);
                                };
                                var hs_sat26D22n = new $hs.Thunk();
                                hs_sat26D22n.evaluateOnce = function () {
                                    var hs_sat26D231 = new $hs.Thunk();
                                    hs_sat26D231.evaluateOnce = function () {
                                        var hs_sat26D234 = new $hs.Thunk();
                                        hs_sat26D234.evaluateOnce = function () {
                                            var hs_sat26D235 = new $hs.Thunk();
                                            hs_sat26D235.evaluateOnce = function () {
                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(55296);
                                            };
                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26D235);
                                        };
                                        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16, hs_x126D1TS, hs_sat26D234);
                                    };
                                    var hs_sat26D230 = new $hs.Thunk();
                                    hs_sat26D230.evaluateOnce = function () {
                                        var hs_sat26D232 = new $hs.Thunk();
                                        hs_sat26D232.evaluateOnce = function () {
                                            var hs_sat26D233 = new $hs.Thunk();
                                            hs_sat26D233.evaluateOnce = function () {
                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                            };
                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26D233);
                                        };
                                        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord16, hs_x126D1TS, hs_sat26D232);
                                    };
                                    return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D230, hs_sat26D231);
                                };
                                var hs_wild526D22o = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26D22n, hs_sat26D22m);
                                switch (hs_wild526D22o.tag) {
                                case 1:
                                    var hs_sat26D22u = new $hs.Data(1);
                                    hs_sat26D22u.data = [4];
                                    var hs_sat26D22v = new $hs.Thunk();
                                    hs_sat26D22v.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_iw26D1S6, hs_ir126D1Tx);
                                    };
                                    var hs_wild626D22w = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D22v, hs_sat26D22u);
                                    switch (hs_wild626D22w.tag) {
                                    case 1:
                                        var hs_sat26D22y = new $hs.Func(1);
                                        hs_sat26D22y.evaluate = function (hs_c226D1Uk) {
                                            var hs_sat26D22C = new $hs.Func(1);
                                            hs_sat26D22C.evaluate = function (hs_c326D1Ug) {
                                                var hs_x226D1Um = new $hs.Thunk();
                                                hs_x226D1Um.evaluateOnce = function () {
                                                    var hs_sat26D22X = new $hs.Thunk();
                                                    hs_sat26D22X.evaluateOnce = function () {
                                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord16, hs_c226D1Uk);
                                                    };
                                                    var hs_sat26D22W = new $hs.Thunk();
                                                    hs_sat26D22W.evaluateOnce = function () {
                                                        var hs_sat26D22Z = new $hs.Data(1);
                                                        hs_sat26D22Z.data = [8];
                                                        var hs_sat26D22Y = new $hs.Thunk();
                                                        hs_sat26D22Y.evaluateOnce = function () {
                                                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord16, hs_c326D1Ug);
                                                        };
                                                        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16, hs_sat26D22Y, hs_sat26D22Z);
                                                    };
                                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26D22W, hs_sat26D22X);
                                                };
                                                var hs_sat26D22F = new $hs.Thunk();
                                                hs_sat26D22F.evaluateOnce = function () {
                                                    return hs_validate225tdL7.hscall(hs_x126D1TS, hs_x226D1Um);
                                                };
                                                var hs_wild726D22G = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D22F);
                                                switch (hs_wild726D22G.tag) {
                                                case 1:
                                                    var hs_sat26D22I = new $hs.Func(1);
                                                    hs_sat26D22I.evaluate = function (hs_owzq26D1UJ) {
                                                        var hs_sat26D22U = new $hs.Thunk();
                                                        hs_sat26D22U.evaluateOnce = function () {
                                                            var hs_sat26D22V = new $hs.Data(1);
                                                            hs_sat26D22V.data = [4];
                                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126D1Tx, hs_sat26D22V);
                                                        };
                                                        return hs_loop26D1UH.hscall(hs_sat26D22U, hs_owzq26D1UJ);
                                                    };
                                                    var hs_sat26D22H = new $hs.Thunk();
                                                    hs_sat26D22H.evaluateOnce = function () {
                                                        var hs_sat26D22J = new $hs.Thunk();
                                                        hs_sat26D22J.evaluateOnce = function () {
                                                            var hs_wild826D22L = hs_x126D1TS;
                                                            if (hs_x126D1TS.notEvaluated) {
                                                                hs_wild826D22L = hs_x126D1TS.hscall();
                                                            }
                                                            var hs_azh26D1Ut = hs_wild826D22L.data[0];
                                                            var hs_wild926D22K = hs_x226D1Um;
                                                            if (hs_x226D1Um.notEvaluated) {
                                                                hs_wild926D22K = hs_x226D1Um.hscall();
                                                            }
                                                            var hs_bzh26D1Ux = hs_wild926D22K.data[0];
                                                            var hs_sat26D22M = hs_bzh26D1Ux;
                                                            var hs_sat26D22N = ($hs.Int.addCarry(hs_sat26D22M, ~56320, 1))[0];
                                                            var hs_sat26D22O = hs_azh26D1Ut;
                                                            var hs_sat26D22P = ($hs.Int.addCarry(hs_sat26D22O, ~55296, 1))[0];
                                                            var hs_sat26D22Q = hs_sat26D22P << 10;
                                                            var hs_sat26D22R = ($hs.Int.addCarry(hs_sat26D22Q, hs_sat26D22N, 0))[0];
                                                            var hs_sat26D22S = ($hs.Int.addCarry(hs_sat26D22R, 65536, 0))[0];
                                                            var hs_sat26D22T = String.fromCharCode(hs_sat26D22S);
                                                            var $res = new $hs.Data(1);
                                                            $res.data = [hs_sat26D22T];
                                                            return $res;
                                                        };
                                                        return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_oraw26D1Si, hs_ow126D1Ty, hs_sat26D22J);
                                                    };
                                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D22H, hs_sat26D22I);
                                                case 2:
                                                    if (hs_invalid26D1Tz.notEvaluated) {
                                                        return hs_invalid26D1Tz.hscall();
                                                    } else {
                                                        return hs_invalid26D1Tz;
                                                    }
                                                }
                                            };
                                            var hs_sat26D22B = new $hs.Thunk();
                                            hs_sat26D22B.evaluateOnce = function () {
                                                var hs_sat26D22D = new $hs.Thunk();
                                                hs_sat26D22D.evaluateOnce = function () {
                                                    var hs_sat26D22E = new $hs.Data(1);
                                                    hs_sat26D22E.data = [3];
                                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126D1Tx, hs_sat26D22E);
                                                };
                                                return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26D1S3, hs_sat26D22D);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D22B, hs_sat26D22C);
                                        };
                                        var hs_sat26D22x = new $hs.Thunk();
                                        hs_sat26D22x.evaluateOnce = function () {
                                            var hs_sat26D22z = new $hs.Thunk();
                                            hs_sat26D22z.evaluateOnce = function () {
                                                var hs_sat26D22A = new $hs.Data(1);
                                                hs_sat26D22A.data = [2];
                                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126D1Tx, hs_sat26D22A);
                                            };
                                            return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26D1S3, hs_sat26D22z);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D22x, hs_sat26D22y);
                                    case 2:
                                        return hs_done26D1Tm.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_InputUnderflow, hs_ir126D1Tx, hs_ow126D1Ty);
                                    }
                                case 2:
                                    var hs_sat26D22p = new $hs.Func(1);
                                    hs_sat26D22p.evaluate = function (hs_owzq26D1UT) {
                                        var hs_sat26D22s = new $hs.Thunk();
                                        hs_sat26D22s.evaluateOnce = function () {
                                            var hs_sat26D22t = new $hs.Data(1);
                                            hs_sat26D22t.data = [2];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126D1Tx, hs_sat26D22t);
                                        };
                                        return hs_loop26D1UH.hscall(hs_sat26D22s, hs_owzq26D1UT);
                                    };
                                    var hs_sat26D22l = new $hs.Thunk();
                                    hs_sat26D22l.evaluateOnce = function () {
                                        var hs_sat26D22q = new $hs.Thunk();
                                        hs_sat26D22q.evaluateOnce = function () {
                                            var hs_sat26D22r = new $hs.Thunk();
                                            hs_sat26D22r.evaluateOnce = function () {
                                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16, $hs.modules.GHCziNum.hs_zdfNumInt, hs_x126D1TS);
                                            };
                                            return $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26D22r);
                                        };
                                        return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_oraw26D1Si, hs_ow126D1Ty, hs_sat26D22q);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D22l, hs_sat26D22p);
                                }
                            };
                            var hs_sat26D22h = new $hs.Thunk();
                            hs_sat26D22h.evaluateOnce = function () {
                                var hs_sat26D22j = new $hs.Thunk();
                                hs_sat26D22j.evaluateOnce = function () {
                                    var hs_sat26D22k = new $hs.Data(1);
                                    hs_sat26D22k.data = [1];
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126D1Tx, hs_sat26D22k);
                                };
                                return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26D1S3, hs_sat26D22j);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D22h, hs_sat26D22i);
                        };
                        var hs_sat26D22f = new $hs.Thunk();
                        hs_sat26D22f.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26D1S3, hs_ir126D1Tx);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D22f, hs_sat26D22g);
                    case 2:
                        return hs_done26D1Tm.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_InputUnderflow, hs_ir126D1Tx, hs_ow126D1Ty);
                    }
                case 2:
                    return hs_done26D1Tm.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_InputUnderflow, hs_ir126D1Tx, hs_ow126D1Ty);
                }
            case 2:
                return hs_done26D1Tm.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_OutputUnderflow, hs_ir126D1Tx, hs_ow126D1Ty);
            }
        };
        var hs_sat26D224 = new $hs.Data(1);
        hs_sat26D224.data = [hs_rb926D1UZ];
        var hs_sat26D223 = new $hs.Data(1);
        hs_sat26D223.data = [hs_rb326D1UX];
        return hs_loop26D1UH.hscall(hs_sat26D223, hs_sat26D224);
    };
    this.hs_utf16zudecode.evaluate = function (hs_seenzubom26D1Vm, hs_input26D1V4, hs_output26D1VL) {
        var hs_wild26D1VK = hs_input26D1V4;
        if (hs_input26D1V4.notEvaluated) {
            hs_wild26D1VK = hs_input26D1V4.hscall();
        }
        var hs_rb26D1Vd = hs_wild26D1VK.data[0];
        var hs_rb126D1Ve = hs_wild26D1VK.data[1];
        var hs_rb326D1Vh = hs_wild26D1VK.data[4];
        var hs_rb426D1Vk = hs_wild26D1VK.data[5];
        var hs_iraw26D1Vf = new $hs.Data(1);
        hs_iraw26D1Vf.data = [hs_rb26D1Vd, hs_rb126D1Ve];
        var hs_ir26D1Vi = new $hs.Data(1);
        hs_ir26D1Vi.data = [hs_rb326D1Vh];
        var hs_iw26D1Vl = new $hs.Data(1);
        hs_iw26D1Vl.data = [hs_rb426D1Vk];
        var hs_sat26D23v = new $hs.Func(1);
        hs_sat26D23v.evaluate = function (hs_mb26D1Vp) {
            var hs_wild126D23w = hs_mb26D1Vp;
            if (hs_mb26D1Vp.notEvaluated) {
                hs_wild126D23w = hs_mb26D1Vp.hscall();
            }
            switch (hs_wild126D23w.tag) {
            case 1:
                var hs_sat26D23y = new $hs.Data(1);
                hs_sat26D23y.data = [2];
                var hs_sat26D23z = new $hs.Thunk();
                hs_sat26D23z.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_iw26D1Vl, hs_ir26D1Vi);
                };
                var hs_wild226D23A = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D23z, hs_sat26D23y);
                switch (hs_wild226D23A.tag) {
                case 1:
                    var hs_sat26D23C = new $hs.Func(1);
                    hs_sat26D23C.evaluate = function (hs_c026D1VA) {
                        var hs_sat26D23E = new $hs.Func(1);
                        hs_sat26D23E.evaluate = function (hs_c126D1VC) {
                            var hs_sat26D23I = new $hs.Thunk();
                            hs_sat26D23I.evaluateOnce = function () {
                                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_c126D1VC, hs_bomL25tdKO);
                            };
                            var hs_sat26D23J = new $hs.Thunk();
                            hs_sat26D23J.evaluateOnce = function () {
                                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_c026D1VA, hs_bomB25tdKN);
                            };
                            var hs_wild326D23K = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D23J, hs_sat26D23I);
                            switch (hs_wild326D23K.tag) {
                            case 1:
                                var hs_sat26D23T = new $hs.Thunk();
                                hs_sat26D23T.evaluateOnce = function () {
                                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_c126D1VC, hs_bomB25tdKN);
                                };
                                var hs_sat26D23U = new $hs.Thunk();
                                hs_sat26D23U.evaluateOnce = function () {
                                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_c026D1VA, hs_bomL25tdKO);
                                };
                                var hs_wild426D23V = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D23U, hs_sat26D23T);
                                switch (hs_wild426D23V.tag) {
                                case 1:
                                    var hs_sat26D244 = new $hs.Thunk();
                                    hs_sat26D244.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziEncodingziUTF16.hs_utf16bezudecode.hscall(hs_wild26D1VK, hs_output26D1VL);
                                    };
                                    var hs_sat26D243 = new $hs.Thunk();
                                    hs_sat26D243.evaluateOnce = function () {
                                        var hs_sat26D245 = new $hs.Data(2);
                                        hs_sat26D245.data = [$hs.modules.GHCziIOziEncodingziUTF16.hs_utf16bezudecode];
                                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_seenzubom26D1Vm, hs_sat26D245);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D243, hs_sat26D244);
                                case 2:
                                    var hs_sat26D23W = new $hs.Thunk();
                                    hs_sat26D23W.evaluateOnce = function () {
                                        var hs_sat26D23Y = new $hs.Thunk();
                                        hs_sat26D23Y.evaluateOnce = function () {
                                            var hs_wild526D23Z = hs_wild26D1VK;
                                            if (hs_wild26D1VK.notEvaluated) {
                                                hs_wild526D23Z = hs_wild26D1VK.hscall();
                                            }
                                            var hs_rb526D1VZ = hs_wild526D23Z.data[0];
                                            var hs_rb626D1W0 = hs_wild526D23Z.data[1];
                                            var hs_ds126D1W1 = hs_wild526D23Z.data[2];
                                            var hs_rb726D1W2 = hs_wild526D23Z.data[3];
                                            var hs_rb926D1W4 = hs_wild526D23Z.data[5];
                                            var hs_sat26D241 = new $hs.Data(1);
                                            hs_sat26D241.data = [2];
                                            var hs_tpl26D242 = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir26D1Vi, hs_sat26D241);
                                            var hs_tpl126D1W3 = hs_tpl26D242.data[0];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_rb526D1VZ, hs_rb626D1W0, hs_ds126D1W1, hs_rb726D1W2, hs_tpl126D1W3, hs_rb926D1W4];
                                            return $res;
                                        };
                                        return $hs.modules.GHCziIOziEncodingziUTF16.hs_utf16lezudecode.hscall(hs_sat26D23Y, hs_output26D1VL);
                                    };
                                    var hs_sat26D23S = new $hs.Thunk();
                                    hs_sat26D23S.evaluateOnce = function () {
                                        var hs_sat26D23X = new $hs.Data(2);
                                        hs_sat26D23X.data = [$hs.modules.GHCziIOziEncodingziUTF16.hs_utf16lezudecode];
                                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_seenzubom26D1Vm, hs_sat26D23X);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D23S, hs_sat26D23W);
                                }
                            case 2:
                                var hs_sat26D23L = new $hs.Thunk();
                                hs_sat26D23L.evaluateOnce = function () {
                                    var hs_sat26D23N = new $hs.Thunk();
                                    hs_sat26D23N.evaluateOnce = function () {
                                        var hs_wild426D23O = hs_wild26D1VK;
                                        if (hs_wild26D1VK.notEvaluated) {
                                            hs_wild426D23O = hs_wild26D1VK.hscall();
                                        }
                                        var hs_rb526D1Wj = hs_wild426D23O.data[0];
                                        var hs_rb626D1Wk = hs_wild426D23O.data[1];
                                        var hs_ds126D1Wl = hs_wild426D23O.data[2];
                                        var hs_rb726D1Wm = hs_wild426D23O.data[3];
                                        var hs_rb926D1Wo = hs_wild426D23O.data[5];
                                        var hs_sat26D23Q = new $hs.Data(1);
                                        hs_sat26D23Q.data = [2];
                                        var hs_tpl26D23R = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir26D1Vi, hs_sat26D23Q);
                                        var hs_tpl126D1Wn = hs_tpl26D23R.data[0];
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_rb526D1Wj, hs_rb626D1Wk, hs_ds126D1Wl, hs_rb726D1Wm, hs_tpl126D1Wn, hs_rb926D1Wo];
                                        return $res;
                                    };
                                    return $hs.modules.GHCziIOziEncodingziUTF16.hs_utf16bezudecode.hscall(hs_sat26D23N, hs_output26D1VL);
                                };
                                var hs_sat26D23H = new $hs.Thunk();
                                hs_sat26D23H.evaluateOnce = function () {
                                    var hs_sat26D23M = new $hs.Data(2);
                                    hs_sat26D23M.data = [$hs.modules.GHCziIOziEncodingziUTF16.hs_utf16bezudecode];
                                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_seenzubom26D1Vm, hs_sat26D23M);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D23H, hs_sat26D23L);
                            }
                        };
                        var hs_sat26D23D = new $hs.Thunk();
                        hs_sat26D23D.evaluateOnce = function () {
                            var hs_sat26D23F = new $hs.Thunk();
                            hs_sat26D23F.evaluateOnce = function () {
                                var hs_sat26D23G = new $hs.Data(1);
                                hs_sat26D23G.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir26D1Vi, hs_sat26D23G);
                            };
                            return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26D1Vf, hs_sat26D23F);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D23D, hs_sat26D23E);
                    };
                    var hs_sat26D23B = new $hs.Thunk();
                    hs_sat26D23B.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26D1Vf, hs_ir26D1Vi);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D23B, hs_sat26D23C);
                case 2:
                    var hs_sat26D23x = new $hs.Data(1);
                    hs_sat26D23x.data = [$hs.modules.GHCziIOziEncodingziTypes.hs_InputUnderflow, hs_wild26D1VK, hs_output26D1VL];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D23x);
                }
            case 2:
                var hs_decode26D1Wv = hs_wild126D23w.data[0];
                return hs_decode26D1Wv.hscall(hs_wild26D1VK, hs_output26D1VL);
            }
        };
        var hs_sat26D23s = new $hs.Thunk();
        hs_sat26D23s.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_seenzubom26D1Vm);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D23s, hs_sat26D23v);
    };
    this.hs_mkUTF16.evaluate = function (hs_cfm26D1WD) {
        var hs_sat26D247 = new $hs.Thunk();
        hs_sat26D247.evaluateOnce = function () {
            var hs_sat26D24i = new $hs.Func(1);
            hs_sat26D24i.evaluate = function (hs_donezubom26D1WN) {
                var hs_sat26D24k = new $hs.Thunk();
                hs_sat26D24k.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_donezubom26D1WN);
                };
                var hs_sat26D24l = new $hs.Thunk();
                hs_sat26D24l.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_donezubom26D1WN);
                };
                var hs_sat26D24m = new $hs.Thunk();
                hs_sat26D24m.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                var hs_sat26D24n = new $hs.Thunk();
                hs_sat26D24n.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziEncodingziFailure.hs_recoverEncode.hscall(hs_cfm26D1WD);
                };
                var hs_sat26D24o = new $hs.Func(2);
                hs_sat26D24o.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
                    return $hs.modules.GHCziIOziEncodingziUTF16.hs_utf16zuencode.hscall(hs_donezubom26D1WN, hs_eta1cW6l4, hs_eta1cW6l3);
                };
                var hs_sat26D24j = new $hs.Data(1);
                hs_sat26D24j.data = [hs_sat26D24o, hs_sat26D24n, hs_sat26D24m, hs_sat26D24l, hs_sat26D24k];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D24j);
            };
            var hs_sat26D24h = new $hs.Thunk();
            hs_sat26D24h.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_newIORef.hscall($hs.modules.GHCziTypes.hs_False);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D24h, hs_sat26D24i);
        };
        var hs_sat26D248 = new $hs.Thunk();
        hs_sat26D248.evaluateOnce = function () {
            var hs_sat26D24a = new $hs.Func(1);
            hs_sat26D24a.evaluate = function (hs_seenzubom26D1WB) {
                var hs_sat26D24c = new $hs.Thunk();
                hs_sat26D24c.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_seenzubom26D1WB);
                };
                var hs_sat26D24d = new $hs.Thunk();
                hs_sat26D24d.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_seenzubom26D1WB);
                };
                var hs_sat26D24e = new $hs.Thunk();
                hs_sat26D24e.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                var hs_sat26D24f = new $hs.Thunk();
                hs_sat26D24f.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziEncodingziFailure.hs_recoverDecode.hscall(hs_cfm26D1WD);
                };
                var hs_sat26D24g = new $hs.Func(2);
                hs_sat26D24g.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
                    return $hs.modules.GHCziIOziEncodingziUTF16.hs_utf16zudecode.hscall(hs_seenzubom26D1WB, hs_eta1cW6l4, hs_eta1cW6l3);
                };
                var hs_sat26D24b = new $hs.Data(1);
                hs_sat26D24b.data = [hs_sat26D24g, hs_sat26D24f, hs_sat26D24e, hs_sat26D24d, hs_sat26D24c];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D24b);
            };
            var hs_sat26D249 = new $hs.Thunk();
            hs_sat26D249.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_newIORef.hscall($hs.modules.DataziMaybe.hs_Nothing);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D249, hs_sat26D24a);
        };
        var hs_sat26D246 = new $hs.Thunk();
        hs_sat26D246.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("UTF-16\x00");
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26D246, hs_sat26D248, hs_sat26D247];
        return $res;
    };
    this.hs_utf16.evaluateOnce = function () {
        return $hs.modules.GHCziIOziEncodingziUTF16.hs_mkUTF16.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_ErrorOnCodingFailure);
    };
    this.hs_mkUTF16le.evaluate = function (hs_cfm26D1WY) {
        var hs_sat26D24q = new $hs.Thunk();
        hs_sat26D24q.evaluateOnce = function () {
            var hs_sat26D24z = new $hs.Thunk();
            hs_sat26D24z.evaluateOnce = function () {
                var hs_sat26D24D = new $hs.Thunk();
                hs_sat26D24D.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziBase.hs_const, hs_sat26D24D);
            };
            var hs_sat26D24A = new $hs.Thunk();
            hs_sat26D24A.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26D24B = new $hs.Thunk();
            hs_sat26D24B.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26D24C = new $hs.Thunk();
            hs_sat26D24C.evaluateOnce = function () {
                return $hs.modules.GHCziIOziEncodingziFailure.hs_recoverEncode.hscall(hs_cfm26D1WY);
            };
            var hs_sat26D24y = new $hs.Data(1);
            hs_sat26D24y.data = [$hs.modules.GHCziIOziEncodingziUTF16.hs_utf16lezuencode, hs_sat26D24C, hs_sat26D24B, hs_sat26D24A, hs_sat26D24z];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D24y);
        };
        var hs_sat26D24r = new $hs.Thunk();
        hs_sat26D24r.evaluateOnce = function () {
            var hs_sat26D24t = new $hs.Thunk();
            hs_sat26D24t.evaluateOnce = function () {
                var hs_sat26D24x = new $hs.Thunk();
                hs_sat26D24x.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziBase.hs_const, hs_sat26D24x);
            };
            var hs_sat26D24u = new $hs.Thunk();
            hs_sat26D24u.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26D24v = new $hs.Thunk();
            hs_sat26D24v.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26D24w = new $hs.Thunk();
            hs_sat26D24w.evaluateOnce = function () {
                return $hs.modules.GHCziIOziEncodingziFailure.hs_recoverDecode.hscall(hs_cfm26D1WY);
            };
            var hs_sat26D24s = new $hs.Data(1);
            hs_sat26D24s.data = [$hs.modules.GHCziIOziEncodingziUTF16.hs_utf16lezudecode, hs_sat26D24w, hs_sat26D24v, hs_sat26D24u, hs_sat26D24t];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D24s);
        };
        var hs_sat26D24p = new $hs.Thunk();
        hs_sat26D24p.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("UTF16-LE\x00");
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26D24p, hs_sat26D24r, hs_sat26D24q];
        return $res;
    };
    this.hs_utf16le.evaluateOnce = function () {
        return $hs.modules.GHCziIOziEncodingziUTF16.hs_mkUTF16le.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_ErrorOnCodingFailure);
    };
};
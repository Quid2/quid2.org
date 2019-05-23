
$hs.modules.GHCziIOziEncodingziUTF32 = new $hs.Module();
$hs.modules.GHCziIOziEncodingziUTF32.dependencies = ["GHC.Types", "GHC.CString", "GHC.Unit", "GHC.Integer", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Classes", "GHC.IO.Buffer", "GHC.IO.Encoding.Failure", "GHC.IO.Encoding.Types", "GHC.IORef", "GHC.Word", "Data.Bits"];
$hs.modules.GHCziIOziEncodingziUTF32.initBeforeDependencies = function () {
    this.hs_utf32bezuencode = new $hs.Func(2);
    this.hs_utf32zuencode = new $hs.Func(3);
    this.hs_utf32lezuencode = new $hs.Func(2);
    this.hs_utf32bezudecode = new $hs.Func(2);
    this.hs_mkUTF32be = new $hs.Func(1);
    this.hs_utf32be = new $hs.Thunk();
    this.hs_utf32lezudecode = new $hs.Func(2);
    this.hs_utf32zudecode = new $hs.Func(3);
    this.hs_mkUTF32 = new $hs.Func(1);
    this.hs_utf32 = new $hs.Thunk();
    this.hs_mkUTF32le = new $hs.Func(1);
    this.hs_utf32le = new $hs.Thunk();
    this.hs_utf32bezuencode.notEvaluated = true;
    this.hs_utf32bezuencode.evaluate = function (hs_input26D2jG, hs_output26D2jV) {
        $hs.modules.GHCziIOziEncodingziUTF32.loadDependencies();
        return this.evaluate(hs_input26D2jG, hs_output26D2jV);
    };
    this.hs_utf32zuencode.notEvaluated = true;
    this.hs_utf32zuencode.evaluate = function (hs_donezubom26D2n0, hs_input26D2nj, hs_output26D2mI) {
        $hs.modules.GHCziIOziEncodingziUTF32.loadDependencies();
        return this.evaluate(hs_donezubom26D2n0, hs_input26D2nj, hs_output26D2mI);
    };
    this.hs_utf32lezuencode.notEvaluated = true;
    this.hs_utf32lezuencode.evaluate = function (hs_input26D2nL, hs_output26D2o0) {
        $hs.modules.GHCziIOziEncodingziUTF32.loadDependencies();
        return this.evaluate(hs_input26D2nL, hs_output26D2o0);
    };
    this.hs_utf32bezudecode.notEvaluated = true;
    this.hs_utf32bezudecode.evaluate = function (hs_input26D2r0, hs_output26D2rf) {
        $hs.modules.GHCziIOziEncodingziUTF32.loadDependencies();
        return this.evaluate(hs_input26D2r0, hs_output26D2rf);
    };
    this.hs_mkUTF32be.notEvaluated = true;
    this.hs_mkUTF32be.evaluate = function (hs_cfm26D2tM) {
        $hs.modules.GHCziIOziEncodingziUTF32.loadDependencies();
        return this.evaluate(hs_cfm26D2tM);
    };
    this.hs_utf32be.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncodingziUTF32.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_utf32lezudecode.notEvaluated = true;
    this.hs_utf32lezudecode.evaluate = function (hs_input26D2u3, hs_output26D2ui) {
        $hs.modules.GHCziIOziEncodingziUTF32.loadDependencies();
        return this.evaluate(hs_input26D2u3, hs_output26D2ui);
    };
    this.hs_utf32zudecode.notEvaluated = true;
    this.hs_utf32zudecode.evaluate = function (hs_seenzubom26D2x8, hs_input26D2wQ, hs_output26D2xP) {
        $hs.modules.GHCziIOziEncodingziUTF32.loadDependencies();
        return this.evaluate(hs_seenzubom26D2x8, hs_input26D2wQ, hs_output26D2xP);
    };
    this.hs_mkUTF32.notEvaluated = true;
    this.hs_mkUTF32.evaluate = function (hs_cfm26D2yJ) {
        $hs.modules.GHCziIOziEncodingziUTF32.loadDependencies();
        return this.evaluate(hs_cfm26D2yJ);
    };
    this.hs_utf32.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncodingziUTF32.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_mkUTF32le.notEvaluated = true;
    this.hs_mkUTF32le.evaluate = function (hs_cfm26D2z4) {
        $hs.modules.GHCziIOziEncodingziUTF32.loadDependencies();
        return this.evaluate(hs_cfm26D2z4);
    };
    this.hs_utf32le.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncodingziUTF32.loadDependencies();
        return this.evaluateOnce();
    };
};
$hs.modules.GHCziIOziEncodingziUTF32.initAfterDependencies = function () {
    this.hs_utf32bezuencode.notEvaluated = false;
    this.hs_utf32zuencode.notEvaluated = false;
    this.hs_utf32lezuencode.notEvaluated = false;
    this.hs_utf32bezudecode.notEvaluated = false;
    this.hs_mkUTF32be.notEvaluated = false;
    this.hs_utf32lezudecode.notEvaluated = false;
    this.hs_utf32zudecode.notEvaluated = false;
    this.hs_mkUTF32.notEvaluated = false;
    this.hs_mkUTF32le.notEvaluated = false;
    var hs_sat26D2zj = new $hs.Thunk();
    var hs_bom025tg5y = new $hs.Thunk();
    var hs_sat26D2zk = new $hs.Thunk();
    var hs_bom125tg5z = new $hs.Thunk();
    var hs_sat26D2zl = new $hs.Thunk();
    var hs_bom225tg5A = new $hs.Thunk();
    var hs_sat26D2zm = new $hs.Thunk();
    var hs_bom325tg5B = new $hs.Thunk();
    var hs_validate25tg5S = new $hs.Func(1);
    hs_sat26D2zj.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
    };
    hs_bom025tg5y.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26D2zj);
    };
    hs_sat26D2zk.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
    };
    hs_bom125tg5z.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26D2zk);
    };
    hs_sat26D2zl.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(254);
    };
    hs_bom225tg5A.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26D2zl);
    };
    hs_sat26D2zm.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(255);
    };
    hs_bom325tg5B.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26D2zm);
    };
    this.hs_utf32bezuencode.evaluate = function (hs_input26D2jG, hs_output26D2jV) {
        var hs_wild26D2kp = hs_input26D2jG;
        if (hs_input26D2jG.notEvaluated) {
            hs_wild26D2kp = hs_input26D2jG.hscall();
        }
        var hs_rb26D2jP = hs_wild26D2kp.data[0];
        var hs_rb126D2jQ = hs_wild26D2kp.data[1];
        var hs_rb326D2mB = hs_wild26D2kp.data[4];
        var hs_rb426D2jT = hs_wild26D2kp.data[5];
        var hs_iraw26D2jR = new $hs.Data(1);
        hs_iraw26D2jR.data = [hs_rb26D2jP, hs_rb126D2jQ];
        var hs_iw26D2jU = new $hs.Data(1);
        hs_iw26D2jU.data = [hs_rb426D2jT];
        var hs_wild126D2kR = hs_output26D2jV;
        if (hs_output26D2jV.notEvaluated) {
            hs_wild126D2kR = hs_output26D2jV.hscall();
        }
        var hs_rb526D2k4 = hs_wild126D2kR.data[0];
        var hs_rb626D2k5 = hs_wild126D2kR.data[1];
        var hs_rb726D2k8 = hs_wild126D2kR.data[3];
        var hs_rb926D2mD = hs_wild126D2kR.data[5];
        var hs_oraw26D2k6 = new $hs.Data(1);
        hs_oraw26D2k6.data = [hs_rb526D2k4, hs_rb626D2k5];
        var hs_os26D2k9 = new $hs.Data(1);
        hs_os26D2k9.data = [hs_rb726D2k8];
        var hs_done26D2la = new $hs.Func(4);
        hs_done26D2la.evaluate = function (hs_zddMonad26D2kl, hs_why26D2km, hs_ir26D2kf, hs_ow26D2ki) {
            var hs_ir126D2kn = hs_ir26D2kf;
            if (hs_ir26D2kf.notEvaluated) {
                hs_ir126D2kn = hs_ir26D2kf.hscall();
            }
            var hs_ow126D2kZ = hs_ow26D2ki;
            if (hs_ow26D2ki.notEvaluated) {
                hs_ow126D2kZ = hs_ow26D2ki.hscall();
            }
            var hs_sat26D2Am = new $hs.Thunk();
            hs_sat26D2Am.evaluateOnce = function () {
                var hs_wild226D2Aw = hs_wild126D2kR;
                if (hs_wild126D2kR.notEvaluated) {
                    hs_wild226D2Aw = hs_wild126D2kR.hscall();
                }
                var hs_rb1026D2l2 = hs_wild226D2Aw.data[0];
                var hs_rb1126D2l3 = hs_wild226D2Aw.data[1];
                var hs_ds226D2l4 = hs_wild226D2Aw.data[2];
                var hs_rb1226D2l5 = hs_wild226D2Aw.data[3];
                var hs_rb1326D2l6 = hs_wild226D2Aw.data[4];
                var hs_tpl26D2Av = hs_ow126D2kZ;
                if (hs_ow126D2kZ.notEvaluated) {
                    hs_tpl26D2Av = hs_ow126D2kZ.hscall();
                }
                var hs_tpl126D2l7 = hs_tpl26D2Av.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb1026D2l2, hs_rb1126D2l3, hs_ds226D2l4, hs_rb1226D2l5, hs_rb1326D2l6, hs_tpl126D2l7];
                return $res;
            };
            var hs_sat26D2An = new $hs.Thunk();
            hs_sat26D2An.evaluateOnce = function () {
                var hs_wild226D2Ar = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_ir126D2kn, hs_iw26D2jU);
                switch (hs_wild226D2Ar.tag) {
                case 1:
                    var hs_wild326D2At = hs_wild26D2kp;
                    if (hs_wild26D2kp.notEvaluated) {
                        hs_wild326D2At = hs_wild26D2kp.hscall();
                    }
                    var hs_rb1026D2kz = hs_wild326D2At.data[0];
                    var hs_rb1126D2kA = hs_wild326D2At.data[1];
                    var hs_ds226D2kB = hs_wild326D2At.data[2];
                    var hs_rb1226D2kC = hs_wild326D2At.data[3];
                    var hs_rb1426D2kE = hs_wild326D2At.data[5];
                    var hs_tpl26D2As = hs_ir126D2kn;
                    if (hs_ir126D2kn.notEvaluated) {
                        hs_tpl26D2As = hs_ir126D2kn.hscall();
                    }
                    var hs_tpl126D2kD = hs_tpl26D2As.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D2kz, hs_rb1126D2kA, hs_ds226D2kB, hs_rb1226D2kC, hs_tpl126D2kD, hs_rb1426D2kE];
                    return $res;
                case 2:
                    var hs_wild326D2Aq = hs_wild26D2kp;
                    if (hs_wild26D2kp.notEvaluated) {
                        hs_wild326D2Aq = hs_wild26D2kp.hscall();
                    }
                    var hs_rb1026D2kM = hs_wild326D2Aq.data[0];
                    var hs_rb1126D2kN = hs_wild326D2Aq.data[1];
                    var hs_ds226D2kO = hs_wild326D2Aq.data[2];
                    var hs_rb1226D2kP = hs_wild326D2Aq.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D2kM, hs_rb1126D2kN, hs_ds226D2kO, hs_rb1226D2kP, 0, 0];
                    return $res;
                }
            };
            var hs_sat26D2Aj = new $hs.Data(1);
            hs_sat26D2Aj.data = [hs_why26D2km, hs_sat26D2An, hs_sat26D2Am];
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D2kl, hs_sat26D2Aj);
        };
        var hs_loop26D2mu = new $hs.Func(2);
        hs_loop26D2mu.evaluate = function (hs_ir26D2le, hs_ow26D2lh) {
            var hs_ir126D2lk = hs_ir26D2le;
            if (hs_ir26D2le.notEvaluated) {
                hs_ir126D2lk = hs_ir26D2le.hscall();
            }
            var hs_ow126D2lm = hs_ow26D2lh;
            if (hs_ow26D2lh.notEvaluated) {
                hs_ow126D2lm = hs_ow26D2lh.hscall();
            }
            var hs_wild226D2zv = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_ir126D2lk, hs_iw26D2jU);
            switch (hs_wild226D2zv.tag) {
            case 1:
                var hs_sat26D2zw = new $hs.Data(1);
                hs_sat26D2zw.data = [4];
                var hs_sat26D2zx = new $hs.Thunk();
                hs_sat26D2zx.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_os26D2k9, hs_ow126D2lm);
                };
                var hs_wild326D2zy = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D2zx, hs_sat26D2zw);
                switch (hs_wild326D2zy.tag) {
                case 1:
                    var hs_sat26D2zA = new $hs.Func(1);
                    hs_sat26D2zA.evaluate = function (hs_ds226D2ls) {
                        var hs_wild426D2zB = hs_ds226D2ls;
                        if (hs_ds226D2ls.notEvaluated) {
                            hs_wild426D2zB = hs_ds226D2ls.hscall();
                        }
                        var hs_c26D2lw = hs_wild426D2zB.data[0];
                        var hs_irzq26D2ms = hs_wild426D2zB.data[1];
                        var hs_wild526D2zC = $hs.modules.GHCziIOziEncodingziFailure.hs_isSurrogate.hscall(hs_c26D2lw);
                        switch (hs_wild526D2zC.tag) {
                        case 1:
                            var hs_x26D2lz = new $hs.Thunk();
                            hs_x26D2lz.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26D2lw);
                            };
                            var hs_a26D2lD = new $hs.Thunk();
                            hs_a26D2lD.evaluateOnce = function () {
                                var hs_sat26D2Ah = new $hs.Thunk();
                                hs_sat26D2Ah.evaluateOnce = function () {
                                    var hs_sat26D2Ai = new $hs.Data(1);
                                    hs_sat26D2Ai.data = [24];
                                    return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_x26D2lz, hs_sat26D2Ai);
                                };
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26D2Ah);
                            };
                            var hs_a126D2lH = new $hs.Thunk();
                            hs_a126D2lH.evaluateOnce = function () {
                                var hs_sat26D2Af = new $hs.Thunk();
                                hs_sat26D2Af.evaluateOnce = function () {
                                    var hs_sat26D2Ag = new $hs.Data(1);
                                    hs_sat26D2Ag.data = [16];
                                    return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_x26D2lz, hs_sat26D2Ag);
                                };
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26D2Af);
                            };
                            var hs_a226D2lL = new $hs.Thunk();
                            hs_a226D2lL.evaluateOnce = function () {
                                var hs_sat26D2Ad = new $hs.Thunk();
                                hs_sat26D2Ad.evaluateOnce = function () {
                                    var hs_sat26D2Ae = new $hs.Data(1);
                                    hs_sat26D2Ae.data = [8];
                                    return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_x26D2lz, hs_sat26D2Ae);
                                };
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26D2Ad);
                            };
                            var hs_a326D2lN = new $hs.Thunk();
                            hs_a326D2lN.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_x26D2lz);
                            };
                            var hs_ds326D2lP = new $hs.Data(1);
                            hs_ds326D2lP.data = [hs_a26D2lD, hs_a126D2lH, hs_a226D2lL, hs_a326D2lN];
                            var hs_sat26D2zE = new $hs.Thunk();
                            hs_sat26D2zE.evaluateOnce = function () {
                                var hs_sat26D2zL = new $hs.Thunk();
                                hs_sat26D2zL.evaluateOnce = function () {
                                    var hs_sat26D2zU = new $hs.Thunk();
                                    hs_sat26D2zU.evaluateOnce = function () {
                                        var hs_sat26D2A3 = new $hs.Thunk();
                                        hs_sat26D2A3.evaluateOnce = function () {
                                            var hs_sat26D2Ab = new $hs.Thunk();
                                            hs_sat26D2Ab.evaluateOnce = function () {
                                                var hs_sat26D2Ac = new $hs.Data(1);
                                                hs_sat26D2Ac.data = [4];
                                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126D2lm, hs_sat26D2Ac);
                                            };
                                            return hs_loop26D2mu.hscall(hs_irzq26D2ms, hs_sat26D2Ab);
                                        };
                                        var hs_sat26D2A2 = new $hs.Thunk();
                                        hs_sat26D2A2.evaluateOnce = function () {
                                            var hs_sat26D2A5 = new $hs.Thunk();
                                            hs_sat26D2A5.evaluateOnce = function () {
                                                var hs_wild626D2Aa = hs_ds326D2lP;
                                                if (hs_ds326D2lP.notEvaluated) {
                                                    hs_wild626D2Aa = hs_ds326D2lP.hscall();
                                                }
                                                var hs_c326D2mp = hs_wild626D2Aa.data[3];
                                                if (hs_c326D2mp.notEvaluated) {
                                                    return hs_c326D2mp.hscall();
                                                } else {
                                                    return hs_c326D2mp;
                                                }
                                            };
                                            var hs_sat26D2A4 = new $hs.Thunk();
                                            hs_sat26D2A4.evaluateOnce = function () {
                                                var hs_sat26D2A6 = new $hs.Data(1);
                                                hs_sat26D2A6.data = [3];
                                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126D2lm, hs_sat26D2A6);
                                            };
                                            return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D2k6, hs_sat26D2A4, hs_sat26D2A5);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2A2, hs_sat26D2A3);
                                    };
                                    var hs_sat26D2zT = new $hs.Thunk();
                                    hs_sat26D2zT.evaluateOnce = function () {
                                        var hs_sat26D2zW = new $hs.Thunk();
                                        hs_sat26D2zW.evaluateOnce = function () {
                                            var hs_wild626D2A1 = hs_ds326D2lP;
                                            if (hs_ds326D2lP.notEvaluated) {
                                                hs_wild626D2A1 = hs_ds326D2lP.hscall();
                                            }
                                            var hs_c226D2mf = hs_wild626D2A1.data[2];
                                            if (hs_c226D2mf.notEvaluated) {
                                                return hs_c226D2mf.hscall();
                                            } else {
                                                return hs_c226D2mf;
                                            }
                                        };
                                        var hs_sat26D2zV = new $hs.Thunk();
                                        hs_sat26D2zV.evaluateOnce = function () {
                                            var hs_sat26D2zX = new $hs.Data(1);
                                            hs_sat26D2zX.data = [2];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126D2lm, hs_sat26D2zX);
                                        };
                                        return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D2k6, hs_sat26D2zV, hs_sat26D2zW);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2zT, hs_sat26D2zU);
                                };
                                var hs_sat26D2zK = new $hs.Thunk();
                                hs_sat26D2zK.evaluateOnce = function () {
                                    var hs_sat26D2zN = new $hs.Thunk();
                                    hs_sat26D2zN.evaluateOnce = function () {
                                        var hs_wild626D2zS = hs_ds326D2lP;
                                        if (hs_ds326D2lP.notEvaluated) {
                                            hs_wild626D2zS = hs_ds326D2lP.hscall();
                                        }
                                        var hs_c126D2m5 = hs_wild626D2zS.data[1];
                                        if (hs_c126D2m5.notEvaluated) {
                                            return hs_c126D2m5.hscall();
                                        } else {
                                            return hs_c126D2m5;
                                        }
                                    };
                                    var hs_sat26D2zM = new $hs.Thunk();
                                    hs_sat26D2zM.evaluateOnce = function () {
                                        var hs_sat26D2zO = new $hs.Data(1);
                                        hs_sat26D2zO.data = [1];
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126D2lm, hs_sat26D2zO);
                                    };
                                    return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D2k6, hs_sat26D2zM, hs_sat26D2zN);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2zK, hs_sat26D2zL);
                            };
                            var hs_sat26D2zD = new $hs.Thunk();
                            hs_sat26D2zD.evaluateOnce = function () {
                                var hs_sat26D2zF = new $hs.Thunk();
                                hs_sat26D2zF.evaluateOnce = function () {
                                    var hs_wild626D2zJ = hs_ds326D2lP;
                                    if (hs_ds326D2lP.notEvaluated) {
                                        hs_wild626D2zJ = hs_ds326D2lP.hscall();
                                    }
                                    var hs_c026D2lV = hs_wild626D2zJ.data[0];
                                    if (hs_c026D2lV.notEvaluated) {
                                        return hs_c026D2lV.hscall();
                                    } else {
                                        return hs_c026D2lV;
                                    }
                                };
                                return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D2k6, hs_ow126D2lm, hs_sat26D2zF);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2zD, hs_sat26D2zE);
                        case 2:
                            return hs_done26D2la.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_InvalidSequence, hs_ir126D2lk, hs_ow126D2lm);
                        }
                    };
                    var hs_sat26D2zz = new $hs.Thunk();
                    hs_sat26D2zz.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_readCharBuf.hscall(hs_iraw26D2jR, hs_ir126D2lk);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2zz, hs_sat26D2zA);
                case 2:
                    return hs_done26D2la.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_OutputUnderflow, hs_ir126D2lk, hs_ow126D2lm);
                }
            case 2:
                return hs_done26D2la.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_InputUnderflow, hs_ir126D2lk, hs_ow126D2lm);
            }
        };
        var hs_sat26D2zo = new $hs.Data(1);
        hs_sat26D2zo.data = [hs_rb926D2mD];
        var hs_sat26D2zn = new $hs.Data(1);
        hs_sat26D2zn.data = [hs_rb326D2mB];
        return hs_loop26D2mu.hscall(hs_sat26D2zn, hs_sat26D2zo);
    };
    this.hs_utf32zuencode.evaluate = function (hs_donezubom26D2n0, hs_input26D2nj, hs_output26D2mI) {
        var hs_wild26D2nk = hs_output26D2mI;
        if (hs_output26D2mI.notEvaluated) {
            hs_wild26D2nk = hs_output26D2mI.hscall();
        }
        var hs_rb26D2mR = hs_wild26D2nk.data[0];
        var hs_rb126D2mS = hs_wild26D2nk.data[1];
        var hs_rb226D2mY = hs_wild26D2nk.data[3];
        var hs_rb426D2mV = hs_wild26D2nk.data[5];
        var hs_oraw26D2mT = new $hs.Data(1);
        hs_oraw26D2mT.data = [hs_rb26D2mR, hs_rb126D2mS];
        var hs_ow26D2mW = new $hs.Data(1);
        hs_ow26D2mW.data = [hs_rb426D2mV];
        var hs_os26D2mZ = new $hs.Data(1);
        hs_os26D2mZ.data = [hs_rb226D2mY];
        var hs_sat26D2AB = new $hs.Func(1);
        hs_sat26D2AB.evaluate = function (hs_b26D2n3) {
            var hs_wild126D2AC = hs_b26D2n3;
            if (hs_b26D2n3.notEvaluated) {
                hs_wild126D2AC = hs_b26D2n3.hscall();
            }
            switch (hs_wild126D2AC.tag) {
            case 1:
                var hs_sat26D2AE = new $hs.Data(1);
                hs_sat26D2AE.data = [4];
                var hs_sat26D2AF = new $hs.Thunk();
                hs_sat26D2AF.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_os26D2mZ, hs_ow26D2mW);
                };
                var hs_wild226D2AG = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D2AF, hs_sat26D2AE);
                switch (hs_wild226D2AG.tag) {
                case 1:
                    var hs_sat26D2AI = new $hs.Thunk();
                    hs_sat26D2AI.evaluateOnce = function () {
                        var hs_sat26D2AK = new $hs.Thunk();
                        hs_sat26D2AK.evaluateOnce = function () {
                            var hs_sat26D2AM = new $hs.Thunk();
                            hs_sat26D2AM.evaluateOnce = function () {
                                var hs_sat26D2AQ = new $hs.Thunk();
                                hs_sat26D2AQ.evaluateOnce = function () {
                                    var hs_sat26D2AU = new $hs.Thunk();
                                    hs_sat26D2AU.evaluateOnce = function () {
                                        var hs_sat26D2AX = new $hs.Thunk();
                                        hs_sat26D2AX.evaluateOnce = function () {
                                            var hs_wild326D2AY = hs_wild26D2nk;
                                            if (hs_wild26D2nk.notEvaluated) {
                                                hs_wild326D2AY = hs_wild26D2nk.hscall();
                                            }
                                            var hs_rb526D2nv = hs_wild326D2AY.data[0];
                                            var hs_rb626D2nw = hs_wild326D2AY.data[1];
                                            var hs_ds126D2nx = hs_wild326D2AY.data[2];
                                            var hs_rb726D2ny = hs_wild326D2AY.data[3];
                                            var hs_rb826D2nz = hs_wild326D2AY.data[4];
                                            var hs_sat26D2B0 = new $hs.Data(1);
                                            hs_sat26D2B0.data = [4];
                                            var hs_tpl26D2B1 = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow26D2mW, hs_sat26D2B0);
                                            var hs_tpl126D2nA = hs_tpl26D2B1.data[0];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_rb526D2nv, hs_rb626D2nw, hs_ds126D2nx, hs_rb726D2ny, hs_rb826D2nz, hs_tpl126D2nA];
                                            return $res;
                                        };
                                        return $hs.modules.GHCziIOziEncodingziUTF32.hs_utf32bezuencode.hscall(hs_input26D2nj, hs_sat26D2AX);
                                    };
                                    var hs_sat26D2AT = new $hs.Thunk();
                                    hs_sat26D2AT.evaluateOnce = function () {
                                        var hs_sat26D2AV = new $hs.Thunk();
                                        hs_sat26D2AV.evaluateOnce = function () {
                                            var hs_sat26D2AW = new $hs.Data(1);
                                            hs_sat26D2AW.data = [3];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow26D2mW, hs_sat26D2AW);
                                        };
                                        return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D2mT, hs_sat26D2AV, hs_bom325tg5B);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2AT, hs_sat26D2AU);
                                };
                                var hs_sat26D2AP = new $hs.Thunk();
                                hs_sat26D2AP.evaluateOnce = function () {
                                    var hs_sat26D2AR = new $hs.Thunk();
                                    hs_sat26D2AR.evaluateOnce = function () {
                                        var hs_sat26D2AS = new $hs.Data(1);
                                        hs_sat26D2AS.data = [2];
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow26D2mW, hs_sat26D2AS);
                                    };
                                    return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D2mT, hs_sat26D2AR, hs_bom225tg5A);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2AP, hs_sat26D2AQ);
                            };
                            var hs_sat26D2AL = new $hs.Thunk();
                            hs_sat26D2AL.evaluateOnce = function () {
                                var hs_sat26D2AN = new $hs.Thunk();
                                hs_sat26D2AN.evaluateOnce = function () {
                                    var hs_sat26D2AO = new $hs.Data(1);
                                    hs_sat26D2AO.data = [1];
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow26D2mW, hs_sat26D2AO);
                                };
                                return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D2mT, hs_sat26D2AN, hs_bom125tg5z);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2AL, hs_sat26D2AM);
                        };
                        var hs_sat26D2AJ = new $hs.Thunk();
                        hs_sat26D2AJ.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D2mT, hs_ow26D2mW, hs_bom025tg5y);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2AJ, hs_sat26D2AK);
                    };
                    var hs_sat26D2AH = new $hs.Thunk();
                    hs_sat26D2AH.evaluateOnce = function () {
                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_donezubom26D2n0, $hs.modules.GHCziTypes.hs_True);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2AH, hs_sat26D2AI);
                case 2:
                    var hs_sat26D2AD = new $hs.Data(1);
                    hs_sat26D2AD.data = [$hs.modules.GHCziIOziEncodingziTypes.hs_OutputUnderflow, hs_input26D2nj, hs_wild26D2nk];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2AD);
                }
            case 2:
                return $hs.modules.GHCziIOziEncodingziUTF32.hs_utf32bezuencode.hscall(hs_input26D2nj, hs_wild26D2nk);
            }
        };
        var hs_sat26D2Ay = new $hs.Thunk();
        hs_sat26D2Ay.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_donezubom26D2n0);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2Ay, hs_sat26D2AB);
    };
    this.hs_utf32lezuencode.evaluate = function (hs_input26D2nL, hs_output26D2o0) {
        var hs_wild26D2ou = hs_input26D2nL;
        if (hs_input26D2nL.notEvaluated) {
            hs_wild26D2ou = hs_input26D2nL.hscall();
        }
        var hs_rb26D2nU = hs_wild26D2ou.data[0];
        var hs_rb126D2nV = hs_wild26D2ou.data[1];
        var hs_rb326D2qG = hs_wild26D2ou.data[4];
        var hs_rb426D2nY = hs_wild26D2ou.data[5];
        var hs_iraw26D2nW = new $hs.Data(1);
        hs_iraw26D2nW.data = [hs_rb26D2nU, hs_rb126D2nV];
        var hs_iw26D2nZ = new $hs.Data(1);
        hs_iw26D2nZ.data = [hs_rb426D2nY];
        var hs_wild126D2oW = hs_output26D2o0;
        if (hs_output26D2o0.notEvaluated) {
            hs_wild126D2oW = hs_output26D2o0.hscall();
        }
        var hs_rb526D2o9 = hs_wild126D2oW.data[0];
        var hs_rb626D2oa = hs_wild126D2oW.data[1];
        var hs_rb726D2od = hs_wild126D2oW.data[3];
        var hs_rb926D2qI = hs_wild126D2oW.data[5];
        var hs_oraw26D2ob = new $hs.Data(1);
        hs_oraw26D2ob.data = [hs_rb526D2o9, hs_rb626D2oa];
        var hs_os26D2oe = new $hs.Data(1);
        hs_os26D2oe.data = [hs_rb726D2od];
        var hs_done26D2pf = new $hs.Func(4);
        hs_done26D2pf.evaluate = function (hs_zddMonad26D2oq, hs_why26D2or, hs_ir26D2ok, hs_ow26D2on) {
            var hs_ir126D2os = hs_ir26D2ok;
            if (hs_ir26D2ok.notEvaluated) {
                hs_ir126D2os = hs_ir26D2ok.hscall();
            }
            var hs_ow126D2p4 = hs_ow26D2on;
            if (hs_ow26D2on.notEvaluated) {
                hs_ow126D2p4 = hs_ow26D2on.hscall();
            }
            var hs_sat26D2C1 = new $hs.Thunk();
            hs_sat26D2C1.evaluateOnce = function () {
                var hs_wild226D2Cb = hs_wild126D2oW;
                if (hs_wild126D2oW.notEvaluated) {
                    hs_wild226D2Cb = hs_wild126D2oW.hscall();
                }
                var hs_rb1026D2p7 = hs_wild226D2Cb.data[0];
                var hs_rb1126D2p8 = hs_wild226D2Cb.data[1];
                var hs_ds226D2p9 = hs_wild226D2Cb.data[2];
                var hs_rb1226D2pa = hs_wild226D2Cb.data[3];
                var hs_rb1326D2pb = hs_wild226D2Cb.data[4];
                var hs_tpl26D2Ca = hs_ow126D2p4;
                if (hs_ow126D2p4.notEvaluated) {
                    hs_tpl26D2Ca = hs_ow126D2p4.hscall();
                }
                var hs_tpl126D2pc = hs_tpl26D2Ca.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb1026D2p7, hs_rb1126D2p8, hs_ds226D2p9, hs_rb1226D2pa, hs_rb1326D2pb, hs_tpl126D2pc];
                return $res;
            };
            var hs_sat26D2C2 = new $hs.Thunk();
            hs_sat26D2C2.evaluateOnce = function () {
                var hs_wild226D2C6 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_ir126D2os, hs_iw26D2nZ);
                switch (hs_wild226D2C6.tag) {
                case 1:
                    var hs_wild326D2C8 = hs_wild26D2ou;
                    if (hs_wild26D2ou.notEvaluated) {
                        hs_wild326D2C8 = hs_wild26D2ou.hscall();
                    }
                    var hs_rb1026D2oE = hs_wild326D2C8.data[0];
                    var hs_rb1126D2oF = hs_wild326D2C8.data[1];
                    var hs_ds226D2oG = hs_wild326D2C8.data[2];
                    var hs_rb1226D2oH = hs_wild326D2C8.data[3];
                    var hs_rb1426D2oJ = hs_wild326D2C8.data[5];
                    var hs_tpl26D2C7 = hs_ir126D2os;
                    if (hs_ir126D2os.notEvaluated) {
                        hs_tpl26D2C7 = hs_ir126D2os.hscall();
                    }
                    var hs_tpl126D2oI = hs_tpl26D2C7.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D2oE, hs_rb1126D2oF, hs_ds226D2oG, hs_rb1226D2oH, hs_tpl126D2oI, hs_rb1426D2oJ];
                    return $res;
                case 2:
                    var hs_wild326D2C5 = hs_wild26D2ou;
                    if (hs_wild26D2ou.notEvaluated) {
                        hs_wild326D2C5 = hs_wild26D2ou.hscall();
                    }
                    var hs_rb1026D2oR = hs_wild326D2C5.data[0];
                    var hs_rb1126D2oS = hs_wild326D2C5.data[1];
                    var hs_ds226D2oT = hs_wild326D2C5.data[2];
                    var hs_rb1226D2oU = hs_wild326D2C5.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D2oR, hs_rb1126D2oS, hs_ds226D2oT, hs_rb1226D2oU, 0, 0];
                    return $res;
                }
            };
            var hs_sat26D2BY = new $hs.Data(1);
            hs_sat26D2BY.data = [hs_why26D2or, hs_sat26D2C2, hs_sat26D2C1];
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D2oq, hs_sat26D2BY);
        };
        var hs_loop26D2qz = new $hs.Func(2);
        hs_loop26D2qz.evaluate = function (hs_ir26D2pj, hs_ow26D2pm) {
            var hs_ir126D2pp = hs_ir26D2pj;
            if (hs_ir26D2pj.notEvaluated) {
                hs_ir126D2pp = hs_ir26D2pj.hscall();
            }
            var hs_ow126D2pr = hs_ow26D2pm;
            if (hs_ow26D2pm.notEvaluated) {
                hs_ow126D2pr = hs_ow26D2pm.hscall();
            }
            var hs_wild226D2Ba = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_ir126D2pp, hs_iw26D2nZ);
            switch (hs_wild226D2Ba.tag) {
            case 1:
                var hs_sat26D2Bb = new $hs.Data(1);
                hs_sat26D2Bb.data = [4];
                var hs_sat26D2Bc = new $hs.Thunk();
                hs_sat26D2Bc.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_os26D2oe, hs_ow126D2pr);
                };
                var hs_wild326D2Bd = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D2Bc, hs_sat26D2Bb);
                switch (hs_wild326D2Bd.tag) {
                case 1:
                    var hs_sat26D2Bf = new $hs.Func(1);
                    hs_sat26D2Bf.evaluate = function (hs_ds226D2px) {
                        var hs_wild426D2Bg = hs_ds226D2px;
                        if (hs_ds226D2px.notEvaluated) {
                            hs_wild426D2Bg = hs_ds226D2px.hscall();
                        }
                        var hs_c26D2pB = hs_wild426D2Bg.data[0];
                        var hs_irzq26D2qx = hs_wild426D2Bg.data[1];
                        var hs_wild526D2Bh = $hs.modules.GHCziIOziEncodingziFailure.hs_isSurrogate.hscall(hs_c26D2pB);
                        switch (hs_wild526D2Bh.tag) {
                        case 1:
                            var hs_x26D2pE = new $hs.Thunk();
                            hs_x26D2pE.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26D2pB);
                            };
                            var hs_a26D2pI = new $hs.Thunk();
                            hs_a26D2pI.evaluateOnce = function () {
                                var hs_sat26D2BW = new $hs.Thunk();
                                hs_sat26D2BW.evaluateOnce = function () {
                                    var hs_sat26D2BX = new $hs.Data(1);
                                    hs_sat26D2BX.data = [24];
                                    return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_x26D2pE, hs_sat26D2BX);
                                };
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26D2BW);
                            };
                            var hs_a126D2pM = new $hs.Thunk();
                            hs_a126D2pM.evaluateOnce = function () {
                                var hs_sat26D2BU = new $hs.Thunk();
                                hs_sat26D2BU.evaluateOnce = function () {
                                    var hs_sat26D2BV = new $hs.Data(1);
                                    hs_sat26D2BV.data = [16];
                                    return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_x26D2pE, hs_sat26D2BV);
                                };
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26D2BU);
                            };
                            var hs_a226D2pQ = new $hs.Thunk();
                            hs_a226D2pQ.evaluateOnce = function () {
                                var hs_sat26D2BS = new $hs.Thunk();
                                hs_sat26D2BS.evaluateOnce = function () {
                                    var hs_sat26D2BT = new $hs.Data(1);
                                    hs_sat26D2BT.data = [8];
                                    return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_x26D2pE, hs_sat26D2BT);
                                };
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26D2BS);
                            };
                            var hs_a326D2pS = new $hs.Thunk();
                            hs_a326D2pS.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_x26D2pE);
                            };
                            var hs_ds326D2pU = new $hs.Data(1);
                            hs_ds326D2pU.data = [hs_a26D2pI, hs_a126D2pM, hs_a226D2pQ, hs_a326D2pS];
                            var hs_sat26D2Bj = new $hs.Thunk();
                            hs_sat26D2Bj.evaluateOnce = function () {
                                var hs_sat26D2Bq = new $hs.Thunk();
                                hs_sat26D2Bq.evaluateOnce = function () {
                                    var hs_sat26D2Bz = new $hs.Thunk();
                                    hs_sat26D2Bz.evaluateOnce = function () {
                                        var hs_sat26D2BI = new $hs.Thunk();
                                        hs_sat26D2BI.evaluateOnce = function () {
                                            var hs_sat26D2BQ = new $hs.Thunk();
                                            hs_sat26D2BQ.evaluateOnce = function () {
                                                var hs_sat26D2BR = new $hs.Data(1);
                                                hs_sat26D2BR.data = [4];
                                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126D2pr, hs_sat26D2BR);
                                            };
                                            return hs_loop26D2qz.hscall(hs_irzq26D2qx, hs_sat26D2BQ);
                                        };
                                        var hs_sat26D2BH = new $hs.Thunk();
                                        hs_sat26D2BH.evaluateOnce = function () {
                                            var hs_sat26D2BK = new $hs.Thunk();
                                            hs_sat26D2BK.evaluateOnce = function () {
                                                var hs_wild626D2BP = hs_ds326D2pU;
                                                if (hs_ds326D2pU.notEvaluated) {
                                                    hs_wild626D2BP = hs_ds326D2pU.hscall();
                                                }
                                                var hs_c026D2qu = hs_wild626D2BP.data[0];
                                                if (hs_c026D2qu.notEvaluated) {
                                                    return hs_c026D2qu.hscall();
                                                } else {
                                                    return hs_c026D2qu;
                                                }
                                            };
                                            var hs_sat26D2BJ = new $hs.Thunk();
                                            hs_sat26D2BJ.evaluateOnce = function () {
                                                var hs_sat26D2BL = new $hs.Data(1);
                                                hs_sat26D2BL.data = [3];
                                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126D2pr, hs_sat26D2BL);
                                            };
                                            return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D2ob, hs_sat26D2BJ, hs_sat26D2BK);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2BH, hs_sat26D2BI);
                                    };
                                    var hs_sat26D2By = new $hs.Thunk();
                                    hs_sat26D2By.evaluateOnce = function () {
                                        var hs_sat26D2BB = new $hs.Thunk();
                                        hs_sat26D2BB.evaluateOnce = function () {
                                            var hs_wild626D2BG = hs_ds326D2pU;
                                            if (hs_ds326D2pU.notEvaluated) {
                                                hs_wild626D2BG = hs_ds326D2pU.hscall();
                                            }
                                            var hs_c126D2qk = hs_wild626D2BG.data[1];
                                            if (hs_c126D2qk.notEvaluated) {
                                                return hs_c126D2qk.hscall();
                                            } else {
                                                return hs_c126D2qk;
                                            }
                                        };
                                        var hs_sat26D2BA = new $hs.Thunk();
                                        hs_sat26D2BA.evaluateOnce = function () {
                                            var hs_sat26D2BC = new $hs.Data(1);
                                            hs_sat26D2BC.data = [2];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126D2pr, hs_sat26D2BC);
                                        };
                                        return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D2ob, hs_sat26D2BA, hs_sat26D2BB);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2By, hs_sat26D2Bz);
                                };
                                var hs_sat26D2Bp = new $hs.Thunk();
                                hs_sat26D2Bp.evaluateOnce = function () {
                                    var hs_sat26D2Bs = new $hs.Thunk();
                                    hs_sat26D2Bs.evaluateOnce = function () {
                                        var hs_wild626D2Bx = hs_ds326D2pU;
                                        if (hs_ds326D2pU.notEvaluated) {
                                            hs_wild626D2Bx = hs_ds326D2pU.hscall();
                                        }
                                        var hs_c226D2qa = hs_wild626D2Bx.data[2];
                                        if (hs_c226D2qa.notEvaluated) {
                                            return hs_c226D2qa.hscall();
                                        } else {
                                            return hs_c226D2qa;
                                        }
                                    };
                                    var hs_sat26D2Br = new $hs.Thunk();
                                    hs_sat26D2Br.evaluateOnce = function () {
                                        var hs_sat26D2Bt = new $hs.Data(1);
                                        hs_sat26D2Bt.data = [1];
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126D2pr, hs_sat26D2Bt);
                                    };
                                    return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D2ob, hs_sat26D2Br, hs_sat26D2Bs);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2Bp, hs_sat26D2Bq);
                            };
                            var hs_sat26D2Bi = new $hs.Thunk();
                            hs_sat26D2Bi.evaluateOnce = function () {
                                var hs_sat26D2Bk = new $hs.Thunk();
                                hs_sat26D2Bk.evaluateOnce = function () {
                                    var hs_wild626D2Bo = hs_ds326D2pU;
                                    if (hs_ds326D2pU.notEvaluated) {
                                        hs_wild626D2Bo = hs_ds326D2pU.hscall();
                                    }
                                    var hs_c326D2q0 = hs_wild626D2Bo.data[3];
                                    if (hs_c326D2q0.notEvaluated) {
                                        return hs_c326D2q0.hscall();
                                    } else {
                                        return hs_c326D2q0;
                                    }
                                };
                                return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D2ob, hs_ow126D2pr, hs_sat26D2Bk);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2Bi, hs_sat26D2Bj);
                        case 2:
                            return hs_done26D2pf.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_InvalidSequence, hs_ir126D2pp, hs_ow126D2pr);
                        }
                    };
                    var hs_sat26D2Be = new $hs.Thunk();
                    hs_sat26D2Be.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_readCharBuf.hscall(hs_iraw26D2nW, hs_ir126D2pp);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2Be, hs_sat26D2Bf);
                case 2:
                    return hs_done26D2pf.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_OutputUnderflow, hs_ir126D2pp, hs_ow126D2pr);
                }
            case 2:
                return hs_done26D2pf.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_InputUnderflow, hs_ir126D2pp, hs_ow126D2pr);
            }
        };
        var hs_sat26D2B3 = new $hs.Data(1);
        hs_sat26D2B3.data = [hs_rb926D2qI];
        var hs_sat26D2B2 = new $hs.Data(1);
        hs_sat26D2B2.data = [hs_rb326D2qG];
        return hs_loop26D2qz.hscall(hs_sat26D2B2, hs_sat26D2B3);
    };
    hs_validate25tg5S.evaluate = function (hs_c26D2qM) {
        var hs_x126D2qN = new $hs.Thunk();
        hs_x126D2qN.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26D2qM);
        };
        var hs_sat26D2Ce = new $hs.Thunk();
        hs_sat26D2Ce.evaluateOnce = function () {
            var hs_sat26D2Ck = new $hs.Thunk();
            hs_sat26D2Ck.evaluateOnce = function () {
                var hs_sat26D2Cm = new $hs.Data(1);
                hs_sat26D2Cm.data = [1114111];
                return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_x126D2qN, hs_sat26D2Cm);
            };
            var hs_sat26D2Cj = new $hs.Thunk();
            hs_sat26D2Cj.evaluateOnce = function () {
                var hs_sat26D2Cl = new $hs.Data(1);
                hs_sat26D2Cl.data = [57343];
                return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_x126D2qN, hs_sat26D2Cl);
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D2Cj, hs_sat26D2Ck);
        };
        var hs_sat26D2Cd = new $hs.Thunk();
        hs_sat26D2Cd.evaluateOnce = function () {
            var hs_sat26D2Cg = new $hs.Thunk();
            hs_sat26D2Cg.evaluateOnce = function () {
                var hs_sat26D2Ci = new $hs.Data(1);
                hs_sat26D2Ci.data = [55296];
                return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_x126D2qN, hs_sat26D2Ci);
            };
            var hs_sat26D2Cf = new $hs.Thunk();
            hs_sat26D2Cf.evaluateOnce = function () {
                var hs_sat26D2Ch = new $hs.Data(1);
                hs_sat26D2Ch.data = [0];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_x126D2qN, hs_sat26D2Ch);
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D2Cf, hs_sat26D2Cg);
        };
        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26D2Cd, hs_sat26D2Ce);
    };
    this.hs_utf32bezudecode.evaluate = function (hs_input26D2r0, hs_output26D2rf) {
        var hs_wild26D2rJ = hs_input26D2r0;
        if (hs_input26D2r0.notEvaluated) {
            hs_wild26D2rJ = hs_input26D2r0.hscall();
        }
        var hs_rb26D2r9 = hs_wild26D2rJ.data[0];
        var hs_rb126D2ra = hs_wild26D2rJ.data[1];
        var hs_rb326D2tG = hs_wild26D2rJ.data[4];
        var hs_rb426D2rd = hs_wild26D2rJ.data[5];
        var hs_iraw26D2rb = new $hs.Data(1);
        hs_iraw26D2rb.data = [hs_rb26D2r9, hs_rb126D2ra];
        var hs_iw26D2re = new $hs.Data(1);
        hs_iw26D2re.data = [hs_rb426D2rd];
        var hs_wild126D2sb = hs_output26D2rf;
        if (hs_output26D2rf.notEvaluated) {
            hs_wild126D2sb = hs_output26D2rf.hscall();
        }
        var hs_rb526D2ro = hs_wild126D2sb.data[0];
        var hs_rb626D2rp = hs_wild126D2sb.data[1];
        var hs_rb726D2rs = hs_wild126D2sb.data[3];
        var hs_rb926D2tI = hs_wild126D2sb.data[5];
        var hs_oraw26D2rq = new $hs.Data(1);
        hs_oraw26D2rq.data = [hs_rb526D2ro, hs_rb626D2rp];
        var hs_os26D2rt = new $hs.Data(1);
        hs_os26D2rt.data = [hs_rb726D2rs];
        var hs_done26D2su = new $hs.Func(4);
        hs_done26D2su.evaluate = function (hs_zddMonad26D2rF, hs_why26D2rG, hs_ir26D2rz, hs_ow26D2rC) {
            var hs_ir126D2rH = hs_ir26D2rz;
            if (hs_ir26D2rz.notEvaluated) {
                hs_ir126D2rH = hs_ir26D2rz.hscall();
            }
            var hs_ow126D2sj = hs_ow26D2rC;
            if (hs_ow26D2rC.notEvaluated) {
                hs_ow126D2sj = hs_ow26D2rC.hscall();
            }
            var hs_sat26D2Db = new $hs.Thunk();
            hs_sat26D2Db.evaluateOnce = function () {
                var hs_wild226D2Dl = hs_wild126D2sb;
                if (hs_wild126D2sb.notEvaluated) {
                    hs_wild226D2Dl = hs_wild126D2sb.hscall();
                }
                var hs_rb1026D2sm = hs_wild226D2Dl.data[0];
                var hs_rb1126D2sn = hs_wild226D2Dl.data[1];
                var hs_ds226D2so = hs_wild226D2Dl.data[2];
                var hs_rb1226D2sp = hs_wild226D2Dl.data[3];
                var hs_rb1326D2sq = hs_wild226D2Dl.data[4];
                var hs_tpl26D2Dk = hs_ow126D2sj;
                if (hs_ow126D2sj.notEvaluated) {
                    hs_tpl26D2Dk = hs_ow126D2sj.hscall();
                }
                var hs_tpl126D2sr = hs_tpl26D2Dk.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb1026D2sm, hs_rb1126D2sn, hs_ds226D2so, hs_rb1226D2sp, hs_rb1326D2sq, hs_tpl126D2sr];
                return $res;
            };
            var hs_sat26D2Dc = new $hs.Thunk();
            hs_sat26D2Dc.evaluateOnce = function () {
                var hs_wild226D2Dg = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_ir126D2rH, hs_iw26D2re);
                switch (hs_wild226D2Dg.tag) {
                case 1:
                    var hs_wild326D2Di = hs_wild26D2rJ;
                    if (hs_wild26D2rJ.notEvaluated) {
                        hs_wild326D2Di = hs_wild26D2rJ.hscall();
                    }
                    var hs_rb1026D2rT = hs_wild326D2Di.data[0];
                    var hs_rb1126D2rU = hs_wild326D2Di.data[1];
                    var hs_ds226D2rV = hs_wild326D2Di.data[2];
                    var hs_rb1226D2rW = hs_wild326D2Di.data[3];
                    var hs_rb1426D2rY = hs_wild326D2Di.data[5];
                    var hs_tpl26D2Dh = hs_ir126D2rH;
                    if (hs_ir126D2rH.notEvaluated) {
                        hs_tpl26D2Dh = hs_ir126D2rH.hscall();
                    }
                    var hs_tpl126D2rX = hs_tpl26D2Dh.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D2rT, hs_rb1126D2rU, hs_ds226D2rV, hs_rb1226D2rW, hs_tpl126D2rX, hs_rb1426D2rY];
                    return $res;
                case 2:
                    var hs_wild326D2Df = hs_wild26D2rJ;
                    if (hs_wild26D2rJ.notEvaluated) {
                        hs_wild326D2Df = hs_wild26D2rJ.hscall();
                    }
                    var hs_rb1026D2s6 = hs_wild326D2Df.data[0];
                    var hs_rb1126D2s7 = hs_wild326D2Df.data[1];
                    var hs_ds226D2s8 = hs_wild326D2Df.data[2];
                    var hs_rb1226D2s9 = hs_wild326D2Df.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D2s6, hs_rb1126D2s7, hs_ds226D2s8, hs_rb1226D2s9, 0, 0];
                    return $res;
                }
            };
            var hs_sat26D2D8 = new $hs.Data(1);
            hs_sat26D2D8.data = [hs_why26D2rG, hs_sat26D2Dc, hs_sat26D2Db];
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D2rF, hs_sat26D2D8);
        };
        var hs_loop26D2ty = new $hs.Func(2);
        hs_loop26D2ty.evaluate = function (hs_ir26D2sy, hs_ow26D2sB) {
            var hs_ir126D2sF = hs_ir26D2sy;
            if (hs_ir26D2sy.notEvaluated) {
                hs_ir126D2sF = hs_ir26D2sy.hscall();
            }
            var hs_ow126D2sG = hs_ow26D2sB;
            if (hs_ow26D2sB.notEvaluated) {
                hs_ow126D2sG = hs_ow26D2sB.hscall();
            }
            var hs_invalid26D2sH = new $hs.Thunk();
            hs_invalid26D2sH.evaluateOnce = function () {
                return hs_done26D2su.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_InvalidSequence, hs_ir126D2sF, hs_ow126D2sG);
            };
            var hs_wild226D2Cv = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_ow126D2sG, hs_os26D2rt);
            switch (hs_wild226D2Cv.tag) {
            case 1:
                var hs_sat26D2Cw = new $hs.Data(1);
                hs_sat26D2Cw.data = [4];
                var hs_sat26D2Cx = new $hs.Thunk();
                hs_sat26D2Cx.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_iw26D2re, hs_ir126D2sF);
                };
                var hs_wild326D2Cy = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D2Cx, hs_sat26D2Cw);
                switch (hs_wild326D2Cy.tag) {
                case 1:
                    var hs_sat26D2CA = new $hs.Func(1);
                    hs_sat26D2CA.evaluate = function (hs_c026D2t1) {
                        var hs_sat26D2CC = new $hs.Func(1);
                        hs_sat26D2CC.evaluate = function (hs_c126D2t4) {
                            var hs_sat26D2CG = new $hs.Func(1);
                            hs_sat26D2CG.evaluate = function (hs_c226D2t7) {
                                var hs_sat26D2CK = new $hs.Func(1);
                                hs_sat26D2CK.evaluate = function (hs_c326D2ta) {
                                    var hs_x126D2ts = new $hs.Thunk();
                                    hs_x126D2ts.evaluateOnce = function () {
                                        var hs_wild426D2CW = hs_c026D2t1;
                                        if (hs_c026D2t1.notEvaluated) {
                                            hs_wild426D2CW = hs_c026D2t1.hscall();
                                        }
                                        var hs_x1zh26D2td = hs_wild426D2CW.data[0];
                                        var hs_wild526D2CV = hs_c126D2t4;
                                        if (hs_c126D2t4.notEvaluated) {
                                            hs_wild526D2CV = hs_c126D2t4.hscall();
                                        }
                                        var hs_x2zh26D2tg = hs_wild526D2CV.data[0];
                                        var hs_wild626D2CU = hs_c226D2t7;
                                        if (hs_c226D2t7.notEvaluated) {
                                            hs_wild626D2CU = hs_c226D2t7.hscall();
                                        }
                                        var hs_x3zh26D2tk = hs_wild626D2CU.data[0];
                                        var hs_wild726D2CT = hs_c326D2ta;
                                        if (hs_c326D2ta.notEvaluated) {
                                            hs_wild726D2CT = hs_c326D2ta.hscall();
                                        }
                                        var hs_x4zh26D2to = hs_wild726D2CT.data[0];
                                        var hs_sat26D2CX = hs_x4zh26D2to;
                                        var hs_sat26D2CY = hs_x3zh26D2tk;
                                        var hs_sat26D2CZ = hs_sat26D2CY << 8;
                                        var hs_sat26D2D0 = hs_x2zh26D2tg;
                                        var hs_sat26D2D1 = hs_sat26D2D0 << 16;
                                        var hs_sat26D2D2 = hs_x1zh26D2td;
                                        var hs_sat26D2D3 = hs_sat26D2D2 << 24;
                                        var hs_sat26D2D4 = ($hs.Int.addCarry(hs_sat26D2D3, hs_sat26D2D1, 0))[0];
                                        var hs_sat26D2D5 = ($hs.Int.addCarry(hs_sat26D2D4, hs_sat26D2CZ, 0))[0];
                                        var hs_sat26D2D6 = ($hs.Int.addCarry(hs_sat26D2D5, hs_sat26D2CX, 0))[0];
                                        var hs_sat26D2D7 = String.fromCharCode(hs_sat26D2D6);
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_sat26D2D7];
                                        return $res;
                                    };
                                    var hs_sat26D2CN = new $hs.Thunk();
                                    hs_sat26D2CN.evaluateOnce = function () {
                                        return hs_validate25tg5S.hscall(hs_x126D2ts);
                                    };
                                    var hs_wild426D2CO = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D2CN);
                                    switch (hs_wild426D2CO.tag) {
                                    case 1:
                                        var hs_sat26D2CQ = new $hs.Func(1);
                                        hs_sat26D2CQ.evaluate = function (hs_owzq26D2tA) {
                                            var hs_sat26D2CR = new $hs.Thunk();
                                            hs_sat26D2CR.evaluateOnce = function () {
                                                var hs_sat26D2CS = new $hs.Data(1);
                                                hs_sat26D2CS.data = [4];
                                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126D2sF, hs_sat26D2CS);
                                            };
                                            return hs_loop26D2ty.hscall(hs_sat26D2CR, hs_owzq26D2tA);
                                        };
                                        var hs_sat26D2CP = new $hs.Thunk();
                                        hs_sat26D2CP.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_oraw26D2rq, hs_ow126D2sG, hs_x126D2ts);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2CP, hs_sat26D2CQ);
                                    case 2:
                                        if (hs_invalid26D2sH.notEvaluated) {
                                            return hs_invalid26D2sH.hscall();
                                        } else {
                                            return hs_invalid26D2sH;
                                        }
                                    }
                                };
                                var hs_sat26D2CJ = new $hs.Thunk();
                                hs_sat26D2CJ.evaluateOnce = function () {
                                    var hs_sat26D2CL = new $hs.Thunk();
                                    hs_sat26D2CL.evaluateOnce = function () {
                                        var hs_sat26D2CM = new $hs.Data(1);
                                        hs_sat26D2CM.data = [3];
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126D2sF, hs_sat26D2CM);
                                    };
                                    return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26D2rb, hs_sat26D2CL);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2CJ, hs_sat26D2CK);
                            };
                            var hs_sat26D2CF = new $hs.Thunk();
                            hs_sat26D2CF.evaluateOnce = function () {
                                var hs_sat26D2CH = new $hs.Thunk();
                                hs_sat26D2CH.evaluateOnce = function () {
                                    var hs_sat26D2CI = new $hs.Data(1);
                                    hs_sat26D2CI.data = [2];
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126D2sF, hs_sat26D2CI);
                                };
                                return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26D2rb, hs_sat26D2CH);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2CF, hs_sat26D2CG);
                        };
                        var hs_sat26D2CB = new $hs.Thunk();
                        hs_sat26D2CB.evaluateOnce = function () {
                            var hs_sat26D2CD = new $hs.Thunk();
                            hs_sat26D2CD.evaluateOnce = function () {
                                var hs_sat26D2CE = new $hs.Data(1);
                                hs_sat26D2CE.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126D2sF, hs_sat26D2CE);
                            };
                            return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26D2rb, hs_sat26D2CD);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2CB, hs_sat26D2CC);
                    };
                    var hs_sat26D2Cz = new $hs.Thunk();
                    hs_sat26D2Cz.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26D2rb, hs_ir126D2sF);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2Cz, hs_sat26D2CA);
                case 2:
                    return hs_done26D2su.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_InputUnderflow, hs_ir126D2sF, hs_ow126D2sG);
                }
            case 2:
                return hs_done26D2su.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_OutputUnderflow, hs_ir126D2sF, hs_ow126D2sG);
            }
        };
        var hs_sat26D2Co = new $hs.Data(1);
        hs_sat26D2Co.data = [hs_rb926D2tI];
        var hs_sat26D2Cn = new $hs.Data(1);
        hs_sat26D2Cn.data = [hs_rb326D2tG];
        return hs_loop26D2ty.hscall(hs_sat26D2Cn, hs_sat26D2Co);
    };
    this.hs_mkUTF32be.evaluate = function (hs_cfm26D2tM) {
        var hs_sat26D2Do = new $hs.Thunk();
        hs_sat26D2Do.evaluateOnce = function () {
            var hs_sat26D2Dx = new $hs.Thunk();
            hs_sat26D2Dx.evaluateOnce = function () {
                var hs_sat26D2DB = new $hs.Thunk();
                hs_sat26D2DB.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziBase.hs_const, hs_sat26D2DB);
            };
            var hs_sat26D2Dy = new $hs.Thunk();
            hs_sat26D2Dy.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26D2Dz = new $hs.Thunk();
            hs_sat26D2Dz.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26D2DA = new $hs.Thunk();
            hs_sat26D2DA.evaluateOnce = function () {
                return $hs.modules.GHCziIOziEncodingziFailure.hs_recoverEncode.hscall(hs_cfm26D2tM);
            };
            var hs_sat26D2Dw = new $hs.Data(1);
            hs_sat26D2Dw.data = [$hs.modules.GHCziIOziEncodingziUTF32.hs_utf32bezuencode, hs_sat26D2DA, hs_sat26D2Dz, hs_sat26D2Dy, hs_sat26D2Dx];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2Dw);
        };
        var hs_sat26D2Dp = new $hs.Thunk();
        hs_sat26D2Dp.evaluateOnce = function () {
            var hs_sat26D2Dr = new $hs.Thunk();
            hs_sat26D2Dr.evaluateOnce = function () {
                var hs_sat26D2Dv = new $hs.Thunk();
                hs_sat26D2Dv.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziBase.hs_const, hs_sat26D2Dv);
            };
            var hs_sat26D2Ds = new $hs.Thunk();
            hs_sat26D2Ds.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26D2Dt = new $hs.Thunk();
            hs_sat26D2Dt.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26D2Du = new $hs.Thunk();
            hs_sat26D2Du.evaluateOnce = function () {
                return $hs.modules.GHCziIOziEncodingziFailure.hs_recoverDecode.hscall(hs_cfm26D2tM);
            };
            var hs_sat26D2Dq = new $hs.Data(1);
            hs_sat26D2Dq.data = [$hs.modules.GHCziIOziEncodingziUTF32.hs_utf32bezudecode, hs_sat26D2Du, hs_sat26D2Dt, hs_sat26D2Ds, hs_sat26D2Dr];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2Dq);
        };
        var hs_sat26D2Dn = new $hs.Thunk();
        hs_sat26D2Dn.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("UTF-32BE\x00");
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26D2Dn, hs_sat26D2Dp, hs_sat26D2Do];
        return $res;
    };
    this.hs_utf32be.evaluateOnce = function () {
        return $hs.modules.GHCziIOziEncodingziUTF32.hs_mkUTF32be.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_ErrorOnCodingFailure);
    };
    this.hs_utf32lezudecode.evaluate = function (hs_input26D2u3, hs_output26D2ui) {
        var hs_wild26D2uM = hs_input26D2u3;
        if (hs_input26D2u3.notEvaluated) {
            hs_wild26D2uM = hs_input26D2u3.hscall();
        }
        var hs_rb26D2uc = hs_wild26D2uM.data[0];
        var hs_rb126D2ud = hs_wild26D2uM.data[1];
        var hs_rb326D2wJ = hs_wild26D2uM.data[4];
        var hs_rb426D2ug = hs_wild26D2uM.data[5];
        var hs_iraw26D2ue = new $hs.Data(1);
        hs_iraw26D2ue.data = [hs_rb26D2uc, hs_rb126D2ud];
        var hs_iw26D2uh = new $hs.Data(1);
        hs_iw26D2uh.data = [hs_rb426D2ug];
        var hs_wild126D2ve = hs_output26D2ui;
        if (hs_output26D2ui.notEvaluated) {
            hs_wild126D2ve = hs_output26D2ui.hscall();
        }
        var hs_rb526D2ur = hs_wild126D2ve.data[0];
        var hs_rb626D2us = hs_wild126D2ve.data[1];
        var hs_rb726D2uv = hs_wild126D2ve.data[3];
        var hs_rb926D2wL = hs_wild126D2ve.data[5];
        var hs_oraw26D2ut = new $hs.Data(1);
        hs_oraw26D2ut.data = [hs_rb526D2ur, hs_rb626D2us];
        var hs_os26D2uw = new $hs.Data(1);
        hs_os26D2uw.data = [hs_rb726D2uv];
        var hs_done26D2vx = new $hs.Func(4);
        hs_done26D2vx.evaluate = function (hs_zddMonad26D2uI, hs_why26D2uJ, hs_ir26D2uC, hs_ow26D2uF) {
            var hs_ir126D2uK = hs_ir26D2uC;
            if (hs_ir26D2uC.notEvaluated) {
                hs_ir126D2uK = hs_ir26D2uC.hscall();
            }
            var hs_ow126D2vm = hs_ow26D2uF;
            if (hs_ow26D2uF.notEvaluated) {
                hs_ow126D2vm = hs_ow26D2uF.hscall();
            }
            var hs_sat26D2Eq = new $hs.Thunk();
            hs_sat26D2Eq.evaluateOnce = function () {
                var hs_wild226D2EA = hs_wild126D2ve;
                if (hs_wild126D2ve.notEvaluated) {
                    hs_wild226D2EA = hs_wild126D2ve.hscall();
                }
                var hs_rb1026D2vp = hs_wild226D2EA.data[0];
                var hs_rb1126D2vq = hs_wild226D2EA.data[1];
                var hs_ds226D2vr = hs_wild226D2EA.data[2];
                var hs_rb1226D2vs = hs_wild226D2EA.data[3];
                var hs_rb1326D2vt = hs_wild226D2EA.data[4];
                var hs_tpl26D2Ez = hs_ow126D2vm;
                if (hs_ow126D2vm.notEvaluated) {
                    hs_tpl26D2Ez = hs_ow126D2vm.hscall();
                }
                var hs_tpl126D2vu = hs_tpl26D2Ez.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb1026D2vp, hs_rb1126D2vq, hs_ds226D2vr, hs_rb1226D2vs, hs_rb1326D2vt, hs_tpl126D2vu];
                return $res;
            };
            var hs_sat26D2Er = new $hs.Thunk();
            hs_sat26D2Er.evaluateOnce = function () {
                var hs_wild226D2Ev = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_ir126D2uK, hs_iw26D2uh);
                switch (hs_wild226D2Ev.tag) {
                case 1:
                    var hs_wild326D2Ex = hs_wild26D2uM;
                    if (hs_wild26D2uM.notEvaluated) {
                        hs_wild326D2Ex = hs_wild26D2uM.hscall();
                    }
                    var hs_rb1026D2uW = hs_wild326D2Ex.data[0];
                    var hs_rb1126D2uX = hs_wild326D2Ex.data[1];
                    var hs_ds226D2uY = hs_wild326D2Ex.data[2];
                    var hs_rb1226D2uZ = hs_wild326D2Ex.data[3];
                    var hs_rb1426D2v1 = hs_wild326D2Ex.data[5];
                    var hs_tpl26D2Ew = hs_ir126D2uK;
                    if (hs_ir126D2uK.notEvaluated) {
                        hs_tpl26D2Ew = hs_ir126D2uK.hscall();
                    }
                    var hs_tpl126D2v0 = hs_tpl26D2Ew.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D2uW, hs_rb1126D2uX, hs_ds226D2uY, hs_rb1226D2uZ, hs_tpl126D2v0, hs_rb1426D2v1];
                    return $res;
                case 2:
                    var hs_wild326D2Eu = hs_wild26D2uM;
                    if (hs_wild26D2uM.notEvaluated) {
                        hs_wild326D2Eu = hs_wild26D2uM.hscall();
                    }
                    var hs_rb1026D2v9 = hs_wild326D2Eu.data[0];
                    var hs_rb1126D2va = hs_wild326D2Eu.data[1];
                    var hs_ds226D2vb = hs_wild326D2Eu.data[2];
                    var hs_rb1226D2vc = hs_wild326D2Eu.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D2v9, hs_rb1126D2va, hs_ds226D2vb, hs_rb1226D2vc, 0, 0];
                    return $res;
                }
            };
            var hs_sat26D2En = new $hs.Data(1);
            hs_sat26D2En.data = [hs_why26D2uJ, hs_sat26D2Er, hs_sat26D2Eq];
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D2uI, hs_sat26D2En);
        };
        var hs_loop26D2wB = new $hs.Func(2);
        hs_loop26D2wB.evaluate = function (hs_ir26D2vB, hs_ow26D2vE) {
            var hs_ir126D2vI = hs_ir26D2vB;
            if (hs_ir26D2vB.notEvaluated) {
                hs_ir126D2vI = hs_ir26D2vB.hscall();
            }
            var hs_ow126D2vJ = hs_ow26D2vE;
            if (hs_ow26D2vE.notEvaluated) {
                hs_ow126D2vJ = hs_ow26D2vE.hscall();
            }
            var hs_invalid26D2vK = new $hs.Thunk();
            hs_invalid26D2vK.evaluateOnce = function () {
                return hs_done26D2vx.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_InvalidSequence, hs_ir126D2vI, hs_ow126D2vJ);
            };
            var hs_wild226D2DK = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_ow126D2vJ, hs_os26D2uw);
            switch (hs_wild226D2DK.tag) {
            case 1:
                var hs_sat26D2DL = new $hs.Data(1);
                hs_sat26D2DL.data = [4];
                var hs_sat26D2DM = new $hs.Thunk();
                hs_sat26D2DM.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_iw26D2uh, hs_ir126D2vI);
                };
                var hs_wild326D2DN = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D2DM, hs_sat26D2DL);
                switch (hs_wild326D2DN.tag) {
                case 1:
                    var hs_sat26D2DP = new $hs.Func(1);
                    hs_sat26D2DP.evaluate = function (hs_c026D2wd) {
                        var hs_sat26D2DR = new $hs.Func(1);
                        hs_sat26D2DR.evaluate = function (hs_c126D2wa) {
                            var hs_sat26D2DV = new $hs.Func(1);
                            hs_sat26D2DV.evaluate = function (hs_c226D2w7) {
                                var hs_sat26D2DZ = new $hs.Func(1);
                                hs_sat26D2DZ.evaluate = function (hs_c326D2w4) {
                                    var hs_x126D2wv = new $hs.Thunk();
                                    hs_x126D2wv.evaluateOnce = function () {
                                        var hs_wild426D2Eb = hs_c326D2w4;
                                        if (hs_c326D2w4.notEvaluated) {
                                            hs_wild426D2Eb = hs_c326D2w4.hscall();
                                        }
                                        var hs_x1zh26D2wg = hs_wild426D2Eb.data[0];
                                        var hs_wild526D2Ea = hs_c226D2w7;
                                        if (hs_c226D2w7.notEvaluated) {
                                            hs_wild526D2Ea = hs_c226D2w7.hscall();
                                        }
                                        var hs_x2zh26D2wj = hs_wild526D2Ea.data[0];
                                        var hs_wild626D2E9 = hs_c126D2wa;
                                        if (hs_c126D2wa.notEvaluated) {
                                            hs_wild626D2E9 = hs_c126D2wa.hscall();
                                        }
                                        var hs_x3zh26D2wn = hs_wild626D2E9.data[0];
                                        var hs_wild726D2E8 = hs_c026D2wd;
                                        if (hs_c026D2wd.notEvaluated) {
                                            hs_wild726D2E8 = hs_c026D2wd.hscall();
                                        }
                                        var hs_x4zh26D2wr = hs_wild726D2E8.data[0];
                                        var hs_sat26D2Ec = hs_x4zh26D2wr;
                                        var hs_sat26D2Ed = hs_x3zh26D2wn;
                                        var hs_sat26D2Ee = hs_sat26D2Ed << 8;
                                        var hs_sat26D2Ef = hs_x2zh26D2wj;
                                        var hs_sat26D2Eg = hs_sat26D2Ef << 16;
                                        var hs_sat26D2Eh = hs_x1zh26D2wg;
                                        var hs_sat26D2Ei = hs_sat26D2Eh << 24;
                                        var hs_sat26D2Ej = ($hs.Int.addCarry(hs_sat26D2Ei, hs_sat26D2Eg, 0))[0];
                                        var hs_sat26D2Ek = ($hs.Int.addCarry(hs_sat26D2Ej, hs_sat26D2Ee, 0))[0];
                                        var hs_sat26D2El = ($hs.Int.addCarry(hs_sat26D2Ek, hs_sat26D2Ec, 0))[0];
                                        var hs_sat26D2Em = String.fromCharCode(hs_sat26D2El);
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_sat26D2Em];
                                        return $res;
                                    };
                                    var hs_sat26D2E2 = new $hs.Thunk();
                                    hs_sat26D2E2.evaluateOnce = function () {
                                        return hs_validate25tg5S.hscall(hs_x126D2wv);
                                    };
                                    var hs_wild426D2E3 = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D2E2);
                                    switch (hs_wild426D2E3.tag) {
                                    case 1:
                                        var hs_sat26D2E5 = new $hs.Func(1);
                                        hs_sat26D2E5.evaluate = function (hs_owzq26D2wD) {
                                            var hs_sat26D2E6 = new $hs.Thunk();
                                            hs_sat26D2E6.evaluateOnce = function () {
                                                var hs_sat26D2E7 = new $hs.Data(1);
                                                hs_sat26D2E7.data = [4];
                                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126D2vI, hs_sat26D2E7);
                                            };
                                            return hs_loop26D2wB.hscall(hs_sat26D2E6, hs_owzq26D2wD);
                                        };
                                        var hs_sat26D2E4 = new $hs.Thunk();
                                        hs_sat26D2E4.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_oraw26D2ut, hs_ow126D2vJ, hs_x126D2wv);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2E4, hs_sat26D2E5);
                                    case 2:
                                        if (hs_invalid26D2vK.notEvaluated) {
                                            return hs_invalid26D2vK.hscall();
                                        } else {
                                            return hs_invalid26D2vK;
                                        }
                                    }
                                };
                                var hs_sat26D2DY = new $hs.Thunk();
                                hs_sat26D2DY.evaluateOnce = function () {
                                    var hs_sat26D2E0 = new $hs.Thunk();
                                    hs_sat26D2E0.evaluateOnce = function () {
                                        var hs_sat26D2E1 = new $hs.Data(1);
                                        hs_sat26D2E1.data = [3];
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126D2vI, hs_sat26D2E1);
                                    };
                                    return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26D2ue, hs_sat26D2E0);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2DY, hs_sat26D2DZ);
                            };
                            var hs_sat26D2DU = new $hs.Thunk();
                            hs_sat26D2DU.evaluateOnce = function () {
                                var hs_sat26D2DW = new $hs.Thunk();
                                hs_sat26D2DW.evaluateOnce = function () {
                                    var hs_sat26D2DX = new $hs.Data(1);
                                    hs_sat26D2DX.data = [2];
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126D2vI, hs_sat26D2DX);
                                };
                                return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26D2ue, hs_sat26D2DW);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2DU, hs_sat26D2DV);
                        };
                        var hs_sat26D2DQ = new $hs.Thunk();
                        hs_sat26D2DQ.evaluateOnce = function () {
                            var hs_sat26D2DS = new $hs.Thunk();
                            hs_sat26D2DS.evaluateOnce = function () {
                                var hs_sat26D2DT = new $hs.Data(1);
                                hs_sat26D2DT.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126D2vI, hs_sat26D2DT);
                            };
                            return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26D2ue, hs_sat26D2DS);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2DQ, hs_sat26D2DR);
                    };
                    var hs_sat26D2DO = new $hs.Thunk();
                    hs_sat26D2DO.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26D2ue, hs_ir126D2vI);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2DO, hs_sat26D2DP);
                case 2:
                    return hs_done26D2vx.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_InputUnderflow, hs_ir126D2vI, hs_ow126D2vJ);
                }
            case 2:
                return hs_done26D2vx.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_OutputUnderflow, hs_ir126D2vI, hs_ow126D2vJ);
            }
        };
        var hs_sat26D2DD = new $hs.Data(1);
        hs_sat26D2DD.data = [hs_rb926D2wL];
        var hs_sat26D2DC = new $hs.Data(1);
        hs_sat26D2DC.data = [hs_rb326D2wJ];
        return hs_loop26D2wB.hscall(hs_sat26D2DC, hs_sat26D2DD);
    };
    this.hs_utf32zudecode.evaluate = function (hs_seenzubom26D2x8, hs_input26D2wQ, hs_output26D2xP) {
        var hs_wild26D2xO = hs_input26D2wQ;
        if (hs_input26D2wQ.notEvaluated) {
            hs_wild26D2xO = hs_input26D2wQ.hscall();
        }
        var hs_rb26D2wZ = hs_wild26D2xO.data[0];
        var hs_rb126D2x0 = hs_wild26D2xO.data[1];
        var hs_rb326D2x3 = hs_wild26D2xO.data[4];
        var hs_rb426D2x6 = hs_wild26D2xO.data[5];
        var hs_iraw26D2x1 = new $hs.Data(1);
        hs_iraw26D2x1.data = [hs_rb26D2wZ, hs_rb126D2x0];
        var hs_ir26D2x4 = new $hs.Data(1);
        hs_ir26D2x4.data = [hs_rb326D2x3];
        var hs_iw26D2x7 = new $hs.Data(1);
        hs_iw26D2x7.data = [hs_rb426D2x6];
        var hs_sat26D2EF = new $hs.Func(1);
        hs_sat26D2EF.evaluate = function (hs_mb26D2xb) {
            var hs_wild126D2EG = hs_mb26D2xb;
            if (hs_mb26D2xb.notEvaluated) {
                hs_wild126D2EG = hs_mb26D2xb.hscall();
            }
            switch (hs_wild126D2EG.tag) {
            case 1:
                var hs_sat26D2EI = new $hs.Data(1);
                hs_sat26D2EI.data = [4];
                var hs_sat26D2EJ = new $hs.Thunk();
                hs_sat26D2EJ.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_iw26D2x7, hs_ir26D2x4);
                };
                var hs_wild226D2EK = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D2EJ, hs_sat26D2EI);
                switch (hs_wild226D2EK.tag) {
                case 1:
                    var hs_sat26D2EM = new $hs.Func(1);
                    hs_sat26D2EM.evaluate = function (hs_c026D2xu) {
                        var hs_sat26D2EO = new $hs.Func(1);
                        hs_sat26D2EO.evaluate = function (hs_c126D2xw) {
                            var hs_sat26D2ES = new $hs.Func(1);
                            hs_sat26D2ES.evaluate = function (hs_c226D2xy) {
                                var hs_sat26D2EW = new $hs.Func(1);
                                hs_sat26D2EW.evaluate = function (hs_c326D2xA) {
                                    var hs_sat26D2F0 = new $hs.Thunk();
                                    hs_sat26D2F0.evaluateOnce = function () {
                                        var hs_sat26D2Ft = new $hs.Thunk();
                                        hs_sat26D2Ft.evaluateOnce = function () {
                                            var hs_sat26D2Fv = new $hs.Thunk();
                                            hs_sat26D2Fv.evaluateOnce = function () {
                                                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_c326D2xA, hs_bom325tg5B);
                                            };
                                            var hs_sat26D2Fu = new $hs.Thunk();
                                            hs_sat26D2Fu.evaluateOnce = function () {
                                                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_c226D2xy, hs_bom225tg5A);
                                            };
                                            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D2Fu, hs_sat26D2Fv);
                                        };
                                        var hs_sat26D2Fs = new $hs.Thunk();
                                        hs_sat26D2Fs.evaluateOnce = function () {
                                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_c126D2xw, hs_bom125tg5z);
                                        };
                                        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D2Fs, hs_sat26D2Ft);
                                    };
                                    var hs_sat26D2F1 = new $hs.Thunk();
                                    hs_sat26D2F1.evaluateOnce = function () {
                                        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_c026D2xu, hs_bom025tg5y);
                                    };
                                    var hs_wild326D2F2 = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D2F1, hs_sat26D2F0);
                                    switch (hs_wild326D2F2.tag) {
                                    case 1:
                                        var hs_sat26D2Fb = new $hs.Thunk();
                                        hs_sat26D2Fb.evaluateOnce = function () {
                                            var hs_sat26D2Fp = new $hs.Thunk();
                                            hs_sat26D2Fp.evaluateOnce = function () {
                                                var hs_sat26D2Fr = new $hs.Thunk();
                                                hs_sat26D2Fr.evaluateOnce = function () {
                                                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_c326D2xA, hs_bom025tg5y);
                                                };
                                                var hs_sat26D2Fq = new $hs.Thunk();
                                                hs_sat26D2Fq.evaluateOnce = function () {
                                                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_c226D2xy, hs_bom125tg5z);
                                                };
                                                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D2Fq, hs_sat26D2Fr);
                                            };
                                            var hs_sat26D2Fo = new $hs.Thunk();
                                            hs_sat26D2Fo.evaluateOnce = function () {
                                                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_c126D2xw, hs_bom225tg5A);
                                            };
                                            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D2Fo, hs_sat26D2Fp);
                                        };
                                        var hs_sat26D2Fc = new $hs.Thunk();
                                        hs_sat26D2Fc.evaluateOnce = function () {
                                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_c026D2xu, hs_bom325tg5B);
                                        };
                                        var hs_wild426D2Fd = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D2Fc, hs_sat26D2Fb);
                                        switch (hs_wild426D2Fd.tag) {
                                        case 1:
                                            var hs_sat26D2Fm = new $hs.Thunk();
                                            hs_sat26D2Fm.evaluateOnce = function () {
                                                return $hs.modules.GHCziIOziEncodingziUTF32.hs_utf32bezudecode.hscall(hs_wild26D2xO, hs_output26D2xP);
                                            };
                                            var hs_sat26D2Fl = new $hs.Thunk();
                                            hs_sat26D2Fl.evaluateOnce = function () {
                                                var hs_sat26D2Fn = new $hs.Data(2);
                                                hs_sat26D2Fn.data = [$hs.modules.GHCziIOziEncodingziUTF32.hs_utf32bezudecode];
                                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_seenzubom26D2x8, hs_sat26D2Fn);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2Fl, hs_sat26D2Fm);
                                        case 2:
                                            var hs_sat26D2Fe = new $hs.Thunk();
                                            hs_sat26D2Fe.evaluateOnce = function () {
                                                var hs_sat26D2Fg = new $hs.Thunk();
                                                hs_sat26D2Fg.evaluateOnce = function () {
                                                    var hs_wild526D2Fh = hs_wild26D2xO;
                                                    if (hs_wild26D2xO.notEvaluated) {
                                                        hs_wild526D2Fh = hs_wild26D2xO.hscall();
                                                    }
                                                    var hs_rb526D2y3 = hs_wild526D2Fh.data[0];
                                                    var hs_rb626D2y4 = hs_wild526D2Fh.data[1];
                                                    var hs_ds126D2y5 = hs_wild526D2Fh.data[2];
                                                    var hs_rb726D2y6 = hs_wild526D2Fh.data[3];
                                                    var hs_rb926D2y8 = hs_wild526D2Fh.data[5];
                                                    var hs_sat26D2Fj = new $hs.Data(1);
                                                    hs_sat26D2Fj.data = [4];
                                                    var hs_tpl26D2Fk = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir26D2x4, hs_sat26D2Fj);
                                                    var hs_tpl126D2y7 = hs_tpl26D2Fk.data[0];
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [hs_rb526D2y3, hs_rb626D2y4, hs_ds126D2y5, hs_rb726D2y6, hs_tpl126D2y7, hs_rb926D2y8];
                                                    return $res;
                                                };
                                                return $hs.modules.GHCziIOziEncodingziUTF32.hs_utf32lezudecode.hscall(hs_sat26D2Fg, hs_output26D2xP);
                                            };
                                            var hs_sat26D2Fa = new $hs.Thunk();
                                            hs_sat26D2Fa.evaluateOnce = function () {
                                                var hs_sat26D2Ff = new $hs.Data(2);
                                                hs_sat26D2Ff.data = [$hs.modules.GHCziIOziEncodingziUTF32.hs_utf32lezudecode];
                                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_seenzubom26D2x8, hs_sat26D2Ff);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2Fa, hs_sat26D2Fe);
                                        }
                                    case 2:
                                        var hs_sat26D2F3 = new $hs.Thunk();
                                        hs_sat26D2F3.evaluateOnce = function () {
                                            var hs_sat26D2F5 = new $hs.Thunk();
                                            hs_sat26D2F5.evaluateOnce = function () {
                                                var hs_wild426D2F6 = hs_wild26D2xO;
                                                if (hs_wild26D2xO.notEvaluated) {
                                                    hs_wild426D2F6 = hs_wild26D2xO.hscall();
                                                }
                                                var hs_rb526D2yn = hs_wild426D2F6.data[0];
                                                var hs_rb626D2yo = hs_wild426D2F6.data[1];
                                                var hs_ds126D2yp = hs_wild426D2F6.data[2];
                                                var hs_rb726D2yq = hs_wild426D2F6.data[3];
                                                var hs_rb926D2ys = hs_wild426D2F6.data[5];
                                                var hs_sat26D2F8 = new $hs.Data(1);
                                                hs_sat26D2F8.data = [4];
                                                var hs_tpl26D2F9 = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir26D2x4, hs_sat26D2F8);
                                                var hs_tpl126D2yr = hs_tpl26D2F9.data[0];
                                                var $res = new $hs.Data(1);
                                                $res.data = [hs_rb526D2yn, hs_rb626D2yo, hs_ds126D2yp, hs_rb726D2yq, hs_tpl126D2yr, hs_rb926D2ys];
                                                return $res;
                                            };
                                            return $hs.modules.GHCziIOziEncodingziUTF32.hs_utf32bezudecode.hscall(hs_sat26D2F5, hs_output26D2xP);
                                        };
                                        var hs_sat26D2EZ = new $hs.Thunk();
                                        hs_sat26D2EZ.evaluateOnce = function () {
                                            var hs_sat26D2F4 = new $hs.Data(2);
                                            hs_sat26D2F4.data = [$hs.modules.GHCziIOziEncodingziUTF32.hs_utf32bezudecode];
                                            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_seenzubom26D2x8, hs_sat26D2F4);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2EZ, hs_sat26D2F3);
                                    }
                                };
                                var hs_sat26D2EV = new $hs.Thunk();
                                hs_sat26D2EV.evaluateOnce = function () {
                                    var hs_sat26D2EX = new $hs.Thunk();
                                    hs_sat26D2EX.evaluateOnce = function () {
                                        var hs_sat26D2EY = new $hs.Data(1);
                                        hs_sat26D2EY.data = [3];
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir26D2x4, hs_sat26D2EY);
                                    };
                                    return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26D2x1, hs_sat26D2EX);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2EV, hs_sat26D2EW);
                            };
                            var hs_sat26D2ER = new $hs.Thunk();
                            hs_sat26D2ER.evaluateOnce = function () {
                                var hs_sat26D2ET = new $hs.Thunk();
                                hs_sat26D2ET.evaluateOnce = function () {
                                    var hs_sat26D2EU = new $hs.Data(1);
                                    hs_sat26D2EU.data = [2];
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir26D2x4, hs_sat26D2EU);
                                };
                                return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26D2x1, hs_sat26D2ET);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2ER, hs_sat26D2ES);
                        };
                        var hs_sat26D2EN = new $hs.Thunk();
                        hs_sat26D2EN.evaluateOnce = function () {
                            var hs_sat26D2EP = new $hs.Thunk();
                            hs_sat26D2EP.evaluateOnce = function () {
                                var hs_sat26D2EQ = new $hs.Data(1);
                                hs_sat26D2EQ.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir26D2x4, hs_sat26D2EQ);
                            };
                            return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26D2x1, hs_sat26D2EP);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2EN, hs_sat26D2EO);
                    };
                    var hs_sat26D2EL = new $hs.Thunk();
                    hs_sat26D2EL.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26D2x1, hs_ir26D2x4);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2EL, hs_sat26D2EM);
                case 2:
                    var hs_sat26D2EH = new $hs.Data(1);
                    hs_sat26D2EH.data = [$hs.modules.GHCziIOziEncodingziTypes.hs_InputUnderflow, hs_wild26D2xO, hs_output26D2xP];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2EH);
                }
            case 2:
                var hs_decode26D2yB = hs_wild126D2EG.data[0];
                return hs_decode26D2yB.hscall(hs_wild26D2xO, hs_output26D2xP);
            }
        };
        var hs_sat26D2EC = new $hs.Thunk();
        hs_sat26D2EC.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_seenzubom26D2x8);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2EC, hs_sat26D2EF);
    };
    this.hs_mkUTF32.evaluate = function (hs_cfm26D2yJ) {
        var hs_sat26D2Fx = new $hs.Thunk();
        hs_sat26D2Fx.evaluateOnce = function () {
            var hs_sat26D2FI = new $hs.Func(1);
            hs_sat26D2FI.evaluate = function (hs_donezubom26D2yT) {
                var hs_sat26D2FK = new $hs.Thunk();
                hs_sat26D2FK.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_donezubom26D2yT);
                };
                var hs_sat26D2FL = new $hs.Thunk();
                hs_sat26D2FL.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_donezubom26D2yT);
                };
                var hs_sat26D2FM = new $hs.Thunk();
                hs_sat26D2FM.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                var hs_sat26D2FN = new $hs.Thunk();
                hs_sat26D2FN.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziEncodingziFailure.hs_recoverEncode.hscall(hs_cfm26D2yJ);
                };
                var hs_sat26D2FO = new $hs.Func(2);
                hs_sat26D2FO.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
                    return $hs.modules.GHCziIOziEncodingziUTF32.hs_utf32zuencode.hscall(hs_donezubom26D2yT, hs_eta1cW6l4, hs_eta1cW6l3);
                };
                var hs_sat26D2FJ = new $hs.Data(1);
                hs_sat26D2FJ.data = [hs_sat26D2FO, hs_sat26D2FN, hs_sat26D2FM, hs_sat26D2FL, hs_sat26D2FK];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2FJ);
            };
            var hs_sat26D2FH = new $hs.Thunk();
            hs_sat26D2FH.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_newIORef.hscall($hs.modules.GHCziTypes.hs_False);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2FH, hs_sat26D2FI);
        };
        var hs_sat26D2Fy = new $hs.Thunk();
        hs_sat26D2Fy.evaluateOnce = function () {
            var hs_sat26D2FA = new $hs.Func(1);
            hs_sat26D2FA.evaluate = function (hs_seenzubom26D2yH) {
                var hs_sat26D2FC = new $hs.Thunk();
                hs_sat26D2FC.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_seenzubom26D2yH);
                };
                var hs_sat26D2FD = new $hs.Thunk();
                hs_sat26D2FD.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_seenzubom26D2yH);
                };
                var hs_sat26D2FE = new $hs.Thunk();
                hs_sat26D2FE.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                var hs_sat26D2FF = new $hs.Thunk();
                hs_sat26D2FF.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziEncodingziFailure.hs_recoverDecode.hscall(hs_cfm26D2yJ);
                };
                var hs_sat26D2FG = new $hs.Func(2);
                hs_sat26D2FG.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
                    return $hs.modules.GHCziIOziEncodingziUTF32.hs_utf32zudecode.hscall(hs_seenzubom26D2yH, hs_eta1cW6l4, hs_eta1cW6l3);
                };
                var hs_sat26D2FB = new $hs.Data(1);
                hs_sat26D2FB.data = [hs_sat26D2FG, hs_sat26D2FF, hs_sat26D2FE, hs_sat26D2FD, hs_sat26D2FC];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2FB);
            };
            var hs_sat26D2Fz = new $hs.Thunk();
            hs_sat26D2Fz.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_newIORef.hscall($hs.modules.DataziMaybe.hs_Nothing);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2Fz, hs_sat26D2FA);
        };
        var hs_sat26D2Fw = new $hs.Thunk();
        hs_sat26D2Fw.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("UTF-32\x00");
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26D2Fw, hs_sat26D2Fy, hs_sat26D2Fx];
        return $res;
    };
    this.hs_utf32.evaluateOnce = function () {
        return $hs.modules.GHCziIOziEncodingziUTF32.hs_mkUTF32.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_ErrorOnCodingFailure);
    };
    this.hs_mkUTF32le.evaluate = function (hs_cfm26D2z4) {
        var hs_sat26D2FQ = new $hs.Thunk();
        hs_sat26D2FQ.evaluateOnce = function () {
            var hs_sat26D2FZ = new $hs.Thunk();
            hs_sat26D2FZ.evaluateOnce = function () {
                var hs_sat26D2G3 = new $hs.Thunk();
                hs_sat26D2G3.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziBase.hs_const, hs_sat26D2G3);
            };
            var hs_sat26D2G0 = new $hs.Thunk();
            hs_sat26D2G0.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26D2G1 = new $hs.Thunk();
            hs_sat26D2G1.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26D2G2 = new $hs.Thunk();
            hs_sat26D2G2.evaluateOnce = function () {
                return $hs.modules.GHCziIOziEncodingziFailure.hs_recoverEncode.hscall(hs_cfm26D2z4);
            };
            var hs_sat26D2FY = new $hs.Data(1);
            hs_sat26D2FY.data = [$hs.modules.GHCziIOziEncodingziUTF32.hs_utf32lezuencode, hs_sat26D2G2, hs_sat26D2G1, hs_sat26D2G0, hs_sat26D2FZ];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2FY);
        };
        var hs_sat26D2FR = new $hs.Thunk();
        hs_sat26D2FR.evaluateOnce = function () {
            var hs_sat26D2FT = new $hs.Thunk();
            hs_sat26D2FT.evaluateOnce = function () {
                var hs_sat26D2FX = new $hs.Thunk();
                hs_sat26D2FX.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziBase.hs_const, hs_sat26D2FX);
            };
            var hs_sat26D2FU = new $hs.Thunk();
            hs_sat26D2FU.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26D2FV = new $hs.Thunk();
            hs_sat26D2FV.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26D2FW = new $hs.Thunk();
            hs_sat26D2FW.evaluateOnce = function () {
                return $hs.modules.GHCziIOziEncodingziFailure.hs_recoverDecode.hscall(hs_cfm26D2z4);
            };
            var hs_sat26D2FS = new $hs.Data(1);
            hs_sat26D2FS.data = [$hs.modules.GHCziIOziEncodingziUTF32.hs_utf32lezudecode, hs_sat26D2FW, hs_sat26D2FV, hs_sat26D2FU, hs_sat26D2FT];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D2FS);
        };
        var hs_sat26D2FP = new $hs.Thunk();
        hs_sat26D2FP.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("UTF-32LE\x00");
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26D2FP, hs_sat26D2FR, hs_sat26D2FQ];
        return $res;
    };
    this.hs_utf32le.evaluateOnce = function () {
        return $hs.modules.GHCziIOziEncodingziUTF32.hs_mkUTF32le.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_ErrorOnCodingFailure);
    };
};
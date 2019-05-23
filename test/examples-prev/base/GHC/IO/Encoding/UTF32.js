
$hs.modules.GHCziIOziEncodingziUTF32 = new $hs.Module();
$hs.modules.GHCziIOziEncodingziUTF32.dependencies = ["GHC.Bool", "GHC.Unit", "GHC.Integer", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Classes", "GHC.IO.Buffer", "GHC.IO.Exception", "GHC.IORef", "GHC.Word", "Data.Bits"];
$hs.modules.GHCziIOziEncodingziUTF32.initBeforeDependencies = function () {
    this.hs_utf32bezuencode = new $hs.Func(2);
    this.hs_utf32zuencode = new $hs.Func(3);
    this.hs_utf32lezuencode = new $hs.Func(2);
    this.hs_utf32bezudecode = new $hs.Func(2);
    this.hs_utf32be = new $hs.Data(1);
    this.hs_utf32lezudecode = new $hs.Func(2);
    this.hs_utf32zudecode = new $hs.Func(3);
    this.hs_utf32 = new $hs.Data(1);
    this.hs_utf32le = new $hs.Data(1);
    this.hs_utf32bezuencode.notEvaluated = true;
    this.hs_utf32bezuencode.evaluate = function (hs_input26DrDt, hs_output26DrDI) {
        $hs.modules.GHCziIOziEncodingziUTF32.loadDependencies();
        return this.evaluate(hs_input26DrDt, hs_output26DrDI);
    };
    this.hs_utf32zuencode.notEvaluated = true;
    this.hs_utf32zuencode.evaluate = function (hs_donezubom26DrGK, hs_input26DrH3, hs_output26DrGs) {
        $hs.modules.GHCziIOziEncodingziUTF32.loadDependencies();
        return this.evaluate(hs_donezubom26DrGK, hs_input26DrH3, hs_output26DrGs);
    };
    this.hs_utf32lezuencode.notEvaluated = true;
    this.hs_utf32lezuencode.evaluate = function (hs_input26DrHJ, hs_output26DrHY) {
        $hs.modules.GHCziIOziEncodingziUTF32.loadDependencies();
        return this.evaluate(hs_input26DrHJ, hs_output26DrHY);
    };
    this.hs_utf32bezudecode.notEvaluated = true;
    this.hs_utf32bezudecode.evaluate = function (hs_input26DrL0, hs_output26DrLi) {
        $hs.modules.GHCziIOziEncodingziUTF32.loadDependencies();
        return this.evaluate(hs_input26DrL0, hs_output26DrLi);
    };
    this.hs_utf32be.notEvaluated = true;
    this.hs_utf32be.evaluate = function () {
        $hs.modules.GHCziIOziEncodingziUTF32.loadDependencies();
        return this;
    };
    this.hs_utf32lezudecode.notEvaluated = true;
    this.hs_utf32lezudecode.evaluate = function (hs_input26DrNU, hs_output26DrOc) {
        $hs.modules.GHCziIOziEncodingziUTF32.loadDependencies();
        return this.evaluate(hs_input26DrNU, hs_output26DrOc);
    };
    this.hs_utf32zudecode.notEvaluated = true;
    this.hs_utf32zudecode.evaluate = function (hs_seenzubom26DrR0, hs_input26DrQI, hs_output26DrRH) {
        $hs.modules.GHCziIOziEncodingziUTF32.loadDependencies();
        return this.evaluate(hs_seenzubom26DrR0, hs_input26DrQI, hs_output26DrRH);
    };
    this.hs_utf32.notEvaluated = true;
    this.hs_utf32.evaluate = function () {
        $hs.modules.GHCziIOziEncodingziUTF32.loadDependencies();
        return this;
    };
    this.hs_utf32le.notEvaluated = true;
    this.hs_utf32le.evaluate = function () {
        $hs.modules.GHCziIOziEncodingziUTF32.loadDependencies();
        return this;
    };
};
$hs.modules.GHCziIOziEncodingziUTF32.initAfterDependencies = function () {
    this.hs_utf32bezuencode.notEvaluated = false;
    this.hs_utf32zuencode.notEvaluated = false;
    this.hs_utf32lezuencode.notEvaluated = false;
    this.hs_utf32bezudecode.notEvaluated = false;
    this.hs_utf32be.notEvaluated = false;
    this.hs_utf32be.evaluate = function () {
        return this;
    };
    this.hs_utf32lezudecode.notEvaluated = false;
    this.hs_utf32zudecode.notEvaluated = false;
    this.hs_utf32.notEvaluated = false;
    this.hs_utf32.evaluate = function () {
        return this;
    };
    this.hs_utf32le.notEvaluated = false;
    this.hs_utf32le.evaluate = function () {
        return this;
    };
    var hs_ioezudecodingError25tBgy = new $hs.Thunk();
    var hs_sat26DrSQ = new $hs.Thunk();
    var hs_bom025tBg6 = new $hs.Thunk();
    var hs_sat26DrSR = new $hs.Thunk();
    var hs_bom125tBg8 = new $hs.Thunk();
    var hs_sat26DrSS = new $hs.Thunk();
    var hs_bom225tBga = new $hs.Thunk();
    var hs_sat26DrST = new $hs.Thunk();
    var hs_bom325tBgc = new $hs.Thunk();
    var hs_sat26DrUD = new $hs.Func(1);
    var hs_sat26DrUE = new $hs.Thunk();
    var hs_utf32zuEF25tBg0 = new $hs.Thunk();
    var hs_sat26DrUG = new $hs.Thunk();
    var hs_sat26DrUH = new $hs.Thunk();
    var hs_sat26DrUI = new $hs.Thunk();
    var hs_sat26DrUJ = new $hs.Data(1);
    var hs_utf32bezuEF25tBgm = new $hs.Thunk();
    var hs_sat26DrVV = new $hs.Thunk();
    var hs_sat26DrVW = new $hs.Thunk();
    var hs_sat26DrVX = new $hs.Thunk();
    var hs_sat26DrVY = new $hs.Data(1);
    var hs_utf32lezuEF25tBgs = new $hs.Thunk();
    var hs_validate25tBgI = new $hs.Func(1);
    var hs_sat26DrXb = new $hs.Thunk();
    var hs_sat26DrXc = new $hs.Thunk();
    var hs_sat26DrXd = new $hs.Thunk();
    var hs_sat26DrXe = new $hs.Data(1);
    var hs_utf32bezuDF25tBgk = new $hs.Thunk();
    var hs_a25v3hB = new $hs.Thunk();
    var hs_sat26DrZf = new $hs.Func(1);
    var hs_sat26DrZg = new $hs.Thunk();
    var hs_utf32zuDF25tBfY = new $hs.Thunk();
    var hs_a125v3mp = new $hs.Thunk();
    var hs_sat26DrZi = new $hs.Thunk();
    var hs_sat26DrZj = new $hs.Thunk();
    var hs_sat26DrZk = new $hs.Thunk();
    var hs_sat26DrZl = new $hs.Data(1);
    var hs_utf32lezuDF25tBgq = new $hs.Thunk();
    var hs_a225v3mw = new $hs.Thunk();
    hs_ioezudecodingError25tBgy.evaluateOnce = function () {
        var hs_sat26DrSN = new $hs.Thunk();
        hs_sat26DrSN.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("invalid UTF-32 byte sequence\x00");
        };
        var hs_sat26DrSO = new $hs.Thunk();
        hs_sat26DrSO.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("utf32_decode\x00");
        };
        var hs_sat26DrSP = new $hs.Data(1);
        hs_sat26DrSP.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_InvalidArgument, hs_sat26DrSO, hs_sat26DrSN, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26DrSP);
    };
    hs_sat26DrSQ.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
    };
    hs_bom025tBg6.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DrSQ);
    };
    hs_sat26DrSR.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
    };
    hs_bom125tBg8.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DrSR);
    };
    hs_sat26DrSS.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(254);
    };
    hs_bom225tBga.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DrSS);
    };
    hs_sat26DrST.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(255);
    };
    hs_bom325tBgc.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DrST);
    };
    this.hs_utf32bezuencode.evaluate = function (hs_input26DrDt, hs_output26DrDI) {
        var hs_wild26DrEa = hs_input26DrDt;
        if (hs_input26DrDt.notEvaluated) {
            hs_wild26DrEa = hs_input26DrDt.hscall();
        }
        var hs_rb26DrDC = hs_wild26DrEa.data[0];
        var hs_rb126DrDD = hs_wild26DrEa.data[1];
        var hs_rb326DrGl = hs_wild26DrEa.data[4];
        var hs_rb426DrDG = hs_wild26DrEa.data[5];
        var hs_iraw26DrDE = new $hs.Data(1);
        hs_iraw26DrDE.data = [hs_rb26DrDC, hs_rb126DrDD];
        var hs_iw26DrDH = new $hs.Data(1);
        hs_iw26DrDH.data = [hs_rb426DrDG];
        var hs_wild126DrEC = hs_output26DrDI;
        if (hs_output26DrDI.notEvaluated) {
            hs_wild126DrEC = hs_output26DrDI.hscall();
        }
        var hs_rb526DrDR = hs_wild126DrEC.data[0];
        var hs_rb626DrDS = hs_wild126DrEC.data[1];
        var hs_rb726DrDV = hs_wild126DrEC.data[3];
        var hs_rb926DrGn = hs_wild126DrEC.data[5];
        var hs_oraw26DrDT = new $hs.Data(1);
        hs_oraw26DrDT.data = [hs_rb526DrDR, hs_rb626DrDS];
        var hs_os26DrDW = new $hs.Data(1);
        hs_os26DrDW.data = [hs_rb726DrDV];
        var hs_done26DrEV = new $hs.Func(3);
        hs_done26DrEV.evaluate = function (hs_zddMonad26DrE7, hs_ir26DrE1, hs_ow26DrE4) {
            var hs_ir126DrE8 = hs_ir26DrE1;
            if (hs_ir26DrE1.notEvaluated) {
                hs_ir126DrE8 = hs_ir26DrE1.hscall();
            }
            var hs_ow126DrEK = hs_ow26DrE4;
            if (hs_ow26DrE4.notEvaluated) {
                hs_ow126DrEK = hs_ow26DrE4.hscall();
            }
            var hs_sat26DrT6 = new $hs.Thunk();
            hs_sat26DrT6.evaluateOnce = function () {
                var hs_wild226DrSZ = hs_wild126DrEC;
                if (hs_wild126DrEC.notEvaluated) {
                    hs_wild226DrSZ = hs_wild126DrEC.hscall();
                }
                var hs_rb1026DrEN = hs_wild226DrSZ.data[0];
                var hs_rb1126DrEO = hs_wild226DrSZ.data[1];
                var hs_ds226DrEP = hs_wild226DrSZ.data[2];
                var hs_rb1226DrEQ = hs_wild226DrSZ.data[3];
                var hs_rb1326DrER = hs_wild226DrSZ.data[4];
                var hs_tpl26DrSY = hs_ow126DrEK;
                if (hs_ow126DrEK.notEvaluated) {
                    hs_tpl26DrSY = hs_ow126DrEK.hscall();
                }
                var hs_tpl126DrES = hs_tpl26DrSY.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb1026DrEN, hs_rb1126DrEO, hs_ds226DrEP, hs_rb1226DrEQ, hs_rb1326DrER, hs_tpl126DrES];
                return $res;
            };
            var hs_sat26DrTb = new $hs.Thunk();
            hs_sat26DrTb.evaluateOnce = function () {
                var hs_wild226DrT5 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_ir126DrE8, hs_iw26DrDH);
                switch (hs_wild226DrT5.tag) {
                case 1:
                    var hs_wild326DrT4 = hs_wild26DrEa;
                    if (hs_wild26DrEa.notEvaluated) {
                        hs_wild326DrT4 = hs_wild26DrEa.hscall();
                    }
                    var hs_rb1026DrEk = hs_wild326DrT4.data[0];
                    var hs_rb1126DrEl = hs_wild326DrT4.data[1];
                    var hs_ds226DrEm = hs_wild326DrT4.data[2];
                    var hs_rb1226DrEn = hs_wild326DrT4.data[3];
                    var hs_rb1426DrEp = hs_wild326DrT4.data[5];
                    var hs_tpl26DrT3 = hs_ir126DrE8;
                    if (hs_ir126DrE8.notEvaluated) {
                        hs_tpl26DrT3 = hs_ir126DrE8.hscall();
                    }
                    var hs_tpl126DrEo = hs_tpl26DrT3.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026DrEk, hs_rb1126DrEl, hs_ds226DrEm, hs_rb1226DrEn, hs_tpl126DrEo, hs_rb1426DrEp];
                    return $res;
                case 2:
                    var hs_wild326DrT8 = hs_wild26DrEa;
                    if (hs_wild26DrEa.notEvaluated) {
                        hs_wild326DrT8 = hs_wild26DrEa.hscall();
                    }
                    var hs_rb1026DrEx = hs_wild326DrT8.data[0];
                    var hs_rb1126DrEy = hs_wild326DrT8.data[1];
                    var hs_ds226DrEz = hs_wild326DrT8.data[2];
                    var hs_rb1226DrEA = hs_wild326DrT8.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026DrEx, hs_rb1126DrEy, hs_ds226DrEz, hs_rb1226DrEA, 0, 0];
                    return $res;
                }
            };
            var hs_sat26DrTc = new $hs.Data(1);
            hs_sat26DrTc.data = [hs_sat26DrTb, hs_sat26DrT6];
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26DrE7, hs_sat26DrTc);
        };
        var hs_loop26DrGe = new $hs.Func(2);
        hs_loop26DrGe.evaluate = function (hs_ir26DrEZ, hs_ow26DrF2) {
            var hs_ir126DrF5 = hs_ir26DrEZ;
            if (hs_ir26DrEZ.notEvaluated) {
                hs_ir126DrF5 = hs_ir26DrEZ.hscall();
            }
            var hs_ow126DrF7 = hs_ow26DrF2;
            if (hs_ow26DrF2.notEvaluated) {
                hs_ow126DrF7 = hs_ow26DrF2.hscall();
            }
            var hs_wild226DrTd = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ir126DrF5, hs_iw26DrDH);
            switch (hs_wild226DrTd.tag) {
            case 1:
                var hs_sat26DrTg = new $hs.Data(1);
                hs_sat26DrTg.data = [4];
                var hs_sat26DrTj = new $hs.Thunk();
                hs_sat26DrTj.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_os26DrDW, hs_ow126DrF7);
                };
                var hs_wild326DrTi = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DrTj, hs_sat26DrTg);
                switch (hs_wild326DrTi.tag) {
                case 1:
                    var hs_sat26DrU0 = new $hs.Func(1);
                    hs_sat26DrU0.evaluate = function (hs_ds226DrFd) {
                        var hs_wild426DrTh = hs_ds226DrFd;
                        if (hs_ds226DrFd.notEvaluated) {
                            hs_wild426DrTh = hs_ds226DrFd.hscall();
                        }
                        var hs_c26DrFi = hs_wild426DrTh.data[0];
                        var hs_irzq26DrGc = hs_wild426DrTh.data[1];
                        var hs_x26DrFj = new $hs.Thunk();
                        hs_x26DrFj.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DrFi);
                        };
                        var hs_a326DrFn = new $hs.Thunk();
                        hs_a326DrFn.evaluateOnce = function () {
                            var hs_sat26DrTl = new $hs.Thunk();
                            hs_sat26DrTl.evaluateOnce = function () {
                                var hs_sat26DrTk = new $hs.Data(1);
                                hs_sat26DrTk.data = [24];
                                return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_x26DrFj, hs_sat26DrTk);
                            };
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DrTl);
                        };
                        var hs_a426DrFr = new $hs.Thunk();
                        hs_a426DrFr.evaluateOnce = function () {
                            var hs_sat26DrTn = new $hs.Thunk();
                            hs_sat26DrTn.evaluateOnce = function () {
                                var hs_sat26DrTm = new $hs.Data(1);
                                hs_sat26DrTm.data = [16];
                                return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_x26DrFj, hs_sat26DrTm);
                            };
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DrTn);
                        };
                        var hs_a526DrFv = new $hs.Thunk();
                        hs_a526DrFv.evaluateOnce = function () {
                            var hs_sat26DrTp = new $hs.Thunk();
                            hs_sat26DrTp.evaluateOnce = function () {
                                var hs_sat26DrTo = new $hs.Data(1);
                                hs_sat26DrTo.data = [8];
                                return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_x26DrFj, hs_sat26DrTo);
                            };
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DrTp);
                        };
                        var hs_a626DrFx = new $hs.Thunk();
                        hs_a626DrFx.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_x26DrFj);
                        };
                        var hs_ds326DrFz = new $hs.Data(1);
                        hs_ds326DrFz.data = [hs_a326DrFn, hs_a426DrFr, hs_a526DrFv, hs_a626DrFx];
                        var hs_sat26DrTU = new $hs.Thunk();
                        hs_sat26DrTU.evaluateOnce = function () {
                            var hs_sat26DrTM = new $hs.Thunk();
                            hs_sat26DrTM.evaluateOnce = function () {
                                var hs_sat26DrTD = new $hs.Thunk();
                                hs_sat26DrTD.evaluateOnce = function () {
                                    var hs_sat26DrTu = new $hs.Thunk();
                                    hs_sat26DrTu.evaluateOnce = function () {
                                        var hs_sat26DrTr = new $hs.Thunk();
                                        hs_sat26DrTr.evaluateOnce = function () {
                                            var hs_sat26DrTq = new $hs.Data(1);
                                            hs_sat26DrTq.data = [4];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126DrF7, hs_sat26DrTq);
                                        };
                                        return hs_loop26DrGe.hscall(hs_irzq26DrGc, hs_sat26DrTr);
                                    };
                                    var hs_sat26DrTA = new $hs.Thunk();
                                    hs_sat26DrTA.evaluateOnce = function () {
                                        var hs_sat26DrTx = new $hs.Thunk();
                                        hs_sat26DrTx.evaluateOnce = function () {
                                            var hs_wild526DrTt = hs_ds326DrFz;
                                            if (hs_ds326DrFz.notEvaluated) {
                                                hs_wild526DrTt = hs_ds326DrFz.hscall();
                                            }
                                            var hs_c326DrG9 = hs_wild526DrTt.data[3];
                                            if (hs_c326DrG9.notEvaluated) {
                                                return hs_c326DrG9.hscall();
                                            } else {
                                                return hs_c326DrG9;
                                            }
                                        };
                                        var hs_sat26DrTz = new $hs.Thunk();
                                        hs_sat26DrTz.evaluateOnce = function () {
                                            var hs_sat26DrTy = new $hs.Data(1);
                                            hs_sat26DrTy.data = [3];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126DrF7, hs_sat26DrTy);
                                        };
                                        return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26DrDT, hs_sat26DrTz, hs_sat26DrTx);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrTA, hs_sat26DrTu);
                                };
                                var hs_sat26DrTJ = new $hs.Thunk();
                                hs_sat26DrTJ.evaluateOnce = function () {
                                    var hs_sat26DrTG = new $hs.Thunk();
                                    hs_sat26DrTG.evaluateOnce = function () {
                                        var hs_wild526DrTC = hs_ds326DrFz;
                                        if (hs_ds326DrFz.notEvaluated) {
                                            hs_wild526DrTC = hs_ds326DrFz.hscall();
                                        }
                                        var hs_c226DrFZ = hs_wild526DrTC.data[2];
                                        if (hs_c226DrFZ.notEvaluated) {
                                            return hs_c226DrFZ.hscall();
                                        } else {
                                            return hs_c226DrFZ;
                                        }
                                    };
                                    var hs_sat26DrTI = new $hs.Thunk();
                                    hs_sat26DrTI.evaluateOnce = function () {
                                        var hs_sat26DrTH = new $hs.Data(1);
                                        hs_sat26DrTH.data = [2];
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126DrF7, hs_sat26DrTH);
                                    };
                                    return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26DrDT, hs_sat26DrTI, hs_sat26DrTG);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrTJ, hs_sat26DrTD);
                            };
                            var hs_sat26DrTS = new $hs.Thunk();
                            hs_sat26DrTS.evaluateOnce = function () {
                                var hs_sat26DrTP = new $hs.Thunk();
                                hs_sat26DrTP.evaluateOnce = function () {
                                    var hs_wild526DrTL = hs_ds326DrFz;
                                    if (hs_ds326DrFz.notEvaluated) {
                                        hs_wild526DrTL = hs_ds326DrFz.hscall();
                                    }
                                    var hs_c126DrFP = hs_wild526DrTL.data[1];
                                    if (hs_c126DrFP.notEvaluated) {
                                        return hs_c126DrFP.hscall();
                                    } else {
                                        return hs_c126DrFP;
                                    }
                                };
                                var hs_sat26DrTR = new $hs.Thunk();
                                hs_sat26DrTR.evaluateOnce = function () {
                                    var hs_sat26DrTQ = new $hs.Data(1);
                                    hs_sat26DrTQ.data = [1];
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126DrF7, hs_sat26DrTQ);
                                };
                                return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26DrDT, hs_sat26DrTR, hs_sat26DrTP);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrTS, hs_sat26DrTM);
                        };
                        var hs_sat26DrTZ = new $hs.Thunk();
                        hs_sat26DrTZ.evaluateOnce = function () {
                            var hs_sat26DrTY = new $hs.Thunk();
                            hs_sat26DrTY.evaluateOnce = function () {
                                var hs_wild526DrTT = hs_ds326DrFz;
                                if (hs_ds326DrFz.notEvaluated) {
                                    hs_wild526DrTT = hs_ds326DrFz.hscall();
                                }
                                var hs_c026DrFF = hs_wild526DrTT.data[0];
                                if (hs_c026DrFF.notEvaluated) {
                                    return hs_c026DrFF.hscall();
                                } else {
                                    return hs_c026DrFF;
                                }
                            };
                            return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26DrDT, hs_ow126DrF7, hs_sat26DrTY);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrTZ, hs_sat26DrTU);
                    };
                    var hs_sat26DrU1 = new $hs.Thunk();
                    hs_sat26DrU1.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_readCharBuf.hscall(hs_iraw26DrDE, hs_ir126DrF5);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrU1, hs_sat26DrU0);
                case 2:
                    return hs_done26DrEV.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ir126DrF5, hs_ow126DrF7);
                }
            case 2:
                return hs_done26DrEV.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ir126DrF5, hs_ow126DrF7);
            }
        };
        var hs_sat26DrU2 = new $hs.Data(1);
        hs_sat26DrU2.data = [hs_rb926DrGn];
        var hs_sat26DrU3 = new $hs.Data(1);
        hs_sat26DrU3.data = [hs_rb326DrGl];
        return hs_loop26DrGe.hscall(hs_sat26DrU3, hs_sat26DrU2);
    };
    this.hs_utf32zuencode.evaluate = function (hs_donezubom26DrGK, hs_input26DrH3, hs_output26DrGs) {
        var hs_wild26DrH4 = hs_output26DrGs;
        if (hs_output26DrGs.notEvaluated) {
            hs_wild26DrH4 = hs_output26DrGs.hscall();
        }
        var hs_rb26DrGB = hs_wild26DrH4.data[0];
        var hs_rb126DrGC = hs_wild26DrH4.data[1];
        var hs_rb226DrGI = hs_wild26DrH4.data[3];
        var hs_rb426DrGF = hs_wild26DrH4.data[5];
        var hs_oraw26DrGD = new $hs.Data(1);
        hs_oraw26DrGD.data = [hs_rb26DrGB, hs_rb126DrGC];
        var hs_ow26DrGG = new $hs.Data(1);
        hs_ow26DrGG.data = [hs_rb426DrGF];
        var hs_os26DrGJ = new $hs.Data(1);
        hs_os26DrGJ.data = [hs_rb226DrGI];
        var hs_sat26DrUw = new $hs.Func(1);
        hs_sat26DrUw.evaluate = function (hs_b26DrGN) {
            var hs_wild126DrU6 = hs_b26DrGN;
            if (hs_b26DrGN.notEvaluated) {
                hs_wild126DrU6 = hs_b26DrGN.hscall();
            }
            switch (hs_wild126DrU6.tag) {
            case 1:
                var hs_sat26DrU7 = new $hs.Data(1);
                hs_sat26DrU7.data = [4];
                var hs_sat26DrUa = new $hs.Thunk();
                hs_sat26DrUa.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_os26DrGJ, hs_ow26DrGG);
                };
                var hs_wild226DrU9 = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DrUa, hs_sat26DrU7);
                switch (hs_wild226DrU9.tag) {
                case 1:
                    var hs_sat26DrUt = new $hs.Thunk();
                    hs_sat26DrUt.evaluateOnce = function () {
                        var hs_sat26DrUr = new $hs.Thunk();
                        hs_sat26DrUr.evaluateOnce = function () {
                            var hs_sat26DrUn = new $hs.Thunk();
                            hs_sat26DrUn.evaluateOnce = function () {
                                var hs_sat26DrUj = new $hs.Thunk();
                                hs_sat26DrUj.evaluateOnce = function () {
                                    var hs_sat26DrUf = new $hs.Thunk();
                                    hs_sat26DrUf.evaluateOnce = function () {
                                        var hs_sat26DrUe = new $hs.Thunk();
                                        hs_sat26DrUe.evaluateOnce = function () {
                                            var hs_wild326DrU8 = hs_wild26DrH4;
                                            if (hs_wild26DrH4.notEvaluated) {
                                                hs_wild326DrU8 = hs_wild26DrH4.hscall();
                                            }
                                            var hs_rb526DrHf = hs_wild326DrU8.data[0];
                                            var hs_rb626DrHg = hs_wild326DrU8.data[1];
                                            var hs_ds126DrHh = hs_wild326DrU8.data[2];
                                            var hs_rb726DrHi = hs_wild326DrU8.data[3];
                                            var hs_rb826DrHj = hs_wild326DrU8.data[4];
                                            var hs_sat26DrUd = new $hs.Data(1);
                                            hs_sat26DrUd.data = [4];
                                            var hs_tpl26DrUc = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow26DrGG, hs_sat26DrUd);
                                            var hs_tpl126DrHk = hs_tpl26DrUc.data[0];
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_rb526DrHf, hs_rb626DrHg, hs_ds126DrHh, hs_rb726DrHi, hs_rb826DrHj, hs_tpl126DrHk];
                                            return $res;
                                        };
                                        return $hs.modules.GHCziIOziEncodingziUTF32.hs_utf32bezuencode.hscall(hs_input26DrH3, hs_sat26DrUe);
                                    };
                                    var hs_sat26DrUi = new $hs.Thunk();
                                    hs_sat26DrUi.evaluateOnce = function () {
                                        var hs_sat26DrUh = new $hs.Thunk();
                                        hs_sat26DrUh.evaluateOnce = function () {
                                            var hs_sat26DrUg = new $hs.Data(1);
                                            hs_sat26DrUg.data = [3];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow26DrGG, hs_sat26DrUg);
                                        };
                                        return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26DrGD, hs_sat26DrUh, hs_bom325tBgc);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrUi, hs_sat26DrUf);
                                };
                                var hs_sat26DrUm = new $hs.Thunk();
                                hs_sat26DrUm.evaluateOnce = function () {
                                    var hs_sat26DrUl = new $hs.Thunk();
                                    hs_sat26DrUl.evaluateOnce = function () {
                                        var hs_sat26DrUk = new $hs.Data(1);
                                        hs_sat26DrUk.data = [2];
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow26DrGG, hs_sat26DrUk);
                                    };
                                    return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26DrGD, hs_sat26DrUl, hs_bom225tBga);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrUm, hs_sat26DrUj);
                            };
                            var hs_sat26DrUq = new $hs.Thunk();
                            hs_sat26DrUq.evaluateOnce = function () {
                                var hs_sat26DrUp = new $hs.Thunk();
                                hs_sat26DrUp.evaluateOnce = function () {
                                    var hs_sat26DrUo = new $hs.Data(1);
                                    hs_sat26DrUo.data = [1];
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow26DrGG, hs_sat26DrUo);
                                };
                                return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26DrGD, hs_sat26DrUp, hs_bom125tBg8);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrUq, hs_sat26DrUn);
                        };
                        var hs_sat26DrUs = new $hs.Thunk();
                        hs_sat26DrUs.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26DrGD, hs_ow26DrGG, hs_bom025tBg6);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrUs, hs_sat26DrUr);
                    };
                    var hs_sat26DrUu = new $hs.Thunk();
                    hs_sat26DrUu.evaluateOnce = function () {
                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_donezubom26DrGK, $hs.modules.GHCziBool.hs_True);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrUu, hs_sat26DrUt);
                case 2:
                    var hs_sat26DrUv = new $hs.Data(1);
                    hs_sat26DrUv.data = [hs_input26DrH3, hs_wild26DrH4];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrUv);
                }
            case 2:
                return $hs.modules.GHCziIOziEncodingziUTF32.hs_utf32bezuencode.hscall(hs_input26DrH3, hs_wild26DrH4);
            }
        };
        var hs_sat26DrUx = new $hs.Thunk();
        hs_sat26DrUx.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_donezubom26DrGK);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrUx, hs_sat26DrUw);
    };
    hs_sat26DrUD.evaluate = function (hs_donezubom26DrHv) {
        var hs_sat26DrUy = new $hs.Thunk();
        hs_sat26DrUy.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_donezubom26DrHv);
        };
        var hs_sat26DrUz = new $hs.Thunk();
        hs_sat26DrUz.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_donezubom26DrHv);
        };
        var hs_sat26DrUA = new $hs.Thunk();
        hs_sat26DrUA.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26DrUB = new $hs.Func(2);
        hs_sat26DrUB.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return $hs.modules.GHCziIOziEncodingziUTF32.hs_utf32zuencode.hscall(hs_donezubom26DrHv, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DrUC = new $hs.Data(1);
        hs_sat26DrUC.data = [hs_sat26DrUB, hs_sat26DrUA, hs_sat26DrUz, hs_sat26DrUy];
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrUC);
    };
    hs_sat26DrUE.evaluateOnce = function () {
        return $hs.modules.GHCziIORef.hs_newIORef.hscall($hs.modules.GHCziBool.hs_False);
    };
    hs_utf32zuEF25tBg0.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrUE, hs_sat26DrUD);
    };
    hs_sat26DrUG.evaluateOnce = function () {
        var hs_sat26DrUF = new $hs.Thunk();
        hs_sat26DrUF.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziBase.hs_const, hs_sat26DrUF);
    };
    hs_sat26DrUH.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_sat26DrUI.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_sat26DrUJ.data = [$hs.modules.GHCziIOziEncodingziUTF32.hs_utf32bezuencode, hs_sat26DrUI, hs_sat26DrUH, hs_sat26DrUG];
    hs_utf32bezuEF25tBgm.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrUJ);
    };
    this.hs_utf32lezuencode.evaluate = function (hs_input26DrHJ, hs_output26DrHY) {
        var hs_wild26DrIq = hs_input26DrHJ;
        if (hs_input26DrHJ.notEvaluated) {
            hs_wild26DrIq = hs_input26DrHJ.hscall();
        }
        var hs_rb26DrHS = hs_wild26DrIq.data[0];
        var hs_rb126DrHT = hs_wild26DrIq.data[1];
        var hs_rb326DrKB = hs_wild26DrIq.data[4];
        var hs_rb426DrHW = hs_wild26DrIq.data[5];
        var hs_iraw26DrHU = new $hs.Data(1);
        hs_iraw26DrHU.data = [hs_rb26DrHS, hs_rb126DrHT];
        var hs_iw26DrHX = new $hs.Data(1);
        hs_iw26DrHX.data = [hs_rb426DrHW];
        var hs_wild126DrIS = hs_output26DrHY;
        if (hs_output26DrHY.notEvaluated) {
            hs_wild126DrIS = hs_output26DrHY.hscall();
        }
        var hs_rb526DrI7 = hs_wild126DrIS.data[0];
        var hs_rb626DrI8 = hs_wild126DrIS.data[1];
        var hs_rb726DrIb = hs_wild126DrIS.data[3];
        var hs_rb926DrKD = hs_wild126DrIS.data[5];
        var hs_oraw26DrI9 = new $hs.Data(1);
        hs_oraw26DrI9.data = [hs_rb526DrI7, hs_rb626DrI8];
        var hs_os26DrIc = new $hs.Data(1);
        hs_os26DrIc.data = [hs_rb726DrIb];
        var hs_done26DrJb = new $hs.Func(3);
        hs_done26DrJb.evaluate = function (hs_zddMonad26DrIn, hs_ir26DrIh, hs_ow26DrIk) {
            var hs_ir126DrIo = hs_ir26DrIh;
            if (hs_ir26DrIh.notEvaluated) {
                hs_ir126DrIo = hs_ir26DrIh.hscall();
            }
            var hs_ow126DrJ0 = hs_ow26DrIk;
            if (hs_ow26DrIk.notEvaluated) {
                hs_ow126DrJ0 = hs_ow26DrIk.hscall();
            }
            var hs_sat26DrUW = new $hs.Thunk();
            hs_sat26DrUW.evaluateOnce = function () {
                var hs_wild226DrUP = hs_wild126DrIS;
                if (hs_wild126DrIS.notEvaluated) {
                    hs_wild226DrUP = hs_wild126DrIS.hscall();
                }
                var hs_rb1026DrJ3 = hs_wild226DrUP.data[0];
                var hs_rb1126DrJ4 = hs_wild226DrUP.data[1];
                var hs_ds226DrJ5 = hs_wild226DrUP.data[2];
                var hs_rb1226DrJ6 = hs_wild226DrUP.data[3];
                var hs_rb1326DrJ7 = hs_wild226DrUP.data[4];
                var hs_tpl26DrUO = hs_ow126DrJ0;
                if (hs_ow126DrJ0.notEvaluated) {
                    hs_tpl26DrUO = hs_ow126DrJ0.hscall();
                }
                var hs_tpl126DrJ8 = hs_tpl26DrUO.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb1026DrJ3, hs_rb1126DrJ4, hs_ds226DrJ5, hs_rb1226DrJ6, hs_rb1326DrJ7, hs_tpl126DrJ8];
                return $res;
            };
            var hs_sat26DrV1 = new $hs.Thunk();
            hs_sat26DrV1.evaluateOnce = function () {
                var hs_wild226DrUV = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_ir126DrIo, hs_iw26DrHX);
                switch (hs_wild226DrUV.tag) {
                case 1:
                    var hs_wild326DrUU = hs_wild26DrIq;
                    if (hs_wild26DrIq.notEvaluated) {
                        hs_wild326DrUU = hs_wild26DrIq.hscall();
                    }
                    var hs_rb1026DrIA = hs_wild326DrUU.data[0];
                    var hs_rb1126DrIB = hs_wild326DrUU.data[1];
                    var hs_ds226DrIC = hs_wild326DrUU.data[2];
                    var hs_rb1226DrID = hs_wild326DrUU.data[3];
                    var hs_rb1426DrIF = hs_wild326DrUU.data[5];
                    var hs_tpl26DrUT = hs_ir126DrIo;
                    if (hs_ir126DrIo.notEvaluated) {
                        hs_tpl26DrUT = hs_ir126DrIo.hscall();
                    }
                    var hs_tpl126DrIE = hs_tpl26DrUT.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026DrIA, hs_rb1126DrIB, hs_ds226DrIC, hs_rb1226DrID, hs_tpl126DrIE, hs_rb1426DrIF];
                    return $res;
                case 2:
                    var hs_wild326DrUY = hs_wild26DrIq;
                    if (hs_wild26DrIq.notEvaluated) {
                        hs_wild326DrUY = hs_wild26DrIq.hscall();
                    }
                    var hs_rb1026DrIN = hs_wild326DrUY.data[0];
                    var hs_rb1126DrIO = hs_wild326DrUY.data[1];
                    var hs_ds226DrIP = hs_wild326DrUY.data[2];
                    var hs_rb1226DrIQ = hs_wild326DrUY.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026DrIN, hs_rb1126DrIO, hs_ds226DrIP, hs_rb1226DrIQ, 0, 0];
                    return $res;
                }
            };
            var hs_sat26DrV2 = new $hs.Data(1);
            hs_sat26DrV2.data = [hs_sat26DrV1, hs_sat26DrUW];
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26DrIn, hs_sat26DrV2);
        };
        var hs_loop26DrKu = new $hs.Func(2);
        hs_loop26DrKu.evaluate = function (hs_ir26DrJf, hs_ow26DrJi) {
            var hs_ir126DrJl = hs_ir26DrJf;
            if (hs_ir26DrJf.notEvaluated) {
                hs_ir126DrJl = hs_ir26DrJf.hscall();
            }
            var hs_ow126DrJn = hs_ow26DrJi;
            if (hs_ow26DrJi.notEvaluated) {
                hs_ow126DrJn = hs_ow26DrJi.hscall();
            }
            var hs_wild226DrV3 = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ir126DrJl, hs_iw26DrHX);
            switch (hs_wild226DrV3.tag) {
            case 1:
                var hs_sat26DrV6 = new $hs.Data(1);
                hs_sat26DrV6.data = [4];
                var hs_sat26DrV9 = new $hs.Thunk();
                hs_sat26DrV9.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_os26DrIc, hs_ow126DrJn);
                };
                var hs_wild326DrV8 = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DrV9, hs_sat26DrV6);
                switch (hs_wild326DrV8.tag) {
                case 1:
                    var hs_sat26DrVQ = new $hs.Func(1);
                    hs_sat26DrVQ.evaluate = function (hs_ds226DrJt) {
                        var hs_wild426DrV7 = hs_ds226DrJt;
                        if (hs_ds226DrJt.notEvaluated) {
                            hs_wild426DrV7 = hs_ds226DrJt.hscall();
                        }
                        var hs_c26DrJy = hs_wild426DrV7.data[0];
                        var hs_irzq26DrKs = hs_wild426DrV7.data[1];
                        var hs_x26DrJz = new $hs.Thunk();
                        hs_x26DrJz.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DrJy);
                        };
                        var hs_a326DrJD = new $hs.Thunk();
                        hs_a326DrJD.evaluateOnce = function () {
                            var hs_sat26DrVb = new $hs.Thunk();
                            hs_sat26DrVb.evaluateOnce = function () {
                                var hs_sat26DrVa = new $hs.Data(1);
                                hs_sat26DrVa.data = [24];
                                return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_x26DrJz, hs_sat26DrVa);
                            };
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DrVb);
                        };
                        var hs_a426DrJH = new $hs.Thunk();
                        hs_a426DrJH.evaluateOnce = function () {
                            var hs_sat26DrVd = new $hs.Thunk();
                            hs_sat26DrVd.evaluateOnce = function () {
                                var hs_sat26DrVc = new $hs.Data(1);
                                hs_sat26DrVc.data = [16];
                                return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_x26DrJz, hs_sat26DrVc);
                            };
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DrVd);
                        };
                        var hs_a526DrJL = new $hs.Thunk();
                        hs_a526DrJL.evaluateOnce = function () {
                            var hs_sat26DrVf = new $hs.Thunk();
                            hs_sat26DrVf.evaluateOnce = function () {
                                var hs_sat26DrVe = new $hs.Data(1);
                                hs_sat26DrVe.data = [8];
                                return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_x26DrJz, hs_sat26DrVe);
                            };
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DrVf);
                        };
                        var hs_a626DrJN = new $hs.Thunk();
                        hs_a626DrJN.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_x26DrJz);
                        };
                        var hs_ds326DrJP = new $hs.Data(1);
                        hs_ds326DrJP.data = [hs_a326DrJD, hs_a426DrJH, hs_a526DrJL, hs_a626DrJN];
                        var hs_sat26DrVL = new $hs.Thunk();
                        hs_sat26DrVL.evaluateOnce = function () {
                            var hs_sat26DrVC = new $hs.Thunk();
                            hs_sat26DrVC.evaluateOnce = function () {
                                var hs_sat26DrVt = new $hs.Thunk();
                                hs_sat26DrVt.evaluateOnce = function () {
                                    var hs_sat26DrVj = new $hs.Thunk();
                                    hs_sat26DrVj.evaluateOnce = function () {
                                        var hs_sat26DrVh = new $hs.Thunk();
                                        hs_sat26DrVh.evaluateOnce = function () {
                                            var hs_sat26DrVg = new $hs.Data(1);
                                            hs_sat26DrVg.data = [4];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126DrJn, hs_sat26DrVg);
                                        };
                                        return hs_loop26DrKu.hscall(hs_irzq26DrKs, hs_sat26DrVh);
                                    };
                                    var hs_sat26DrVq = new $hs.Thunk();
                                    hs_sat26DrVq.evaluateOnce = function () {
                                        var hs_sat26DrVn = new $hs.Thunk();
                                        hs_sat26DrVn.evaluateOnce = function () {
                                            var hs_wild526DrVi = hs_ds326DrJP;
                                            if (hs_ds326DrJP.notEvaluated) {
                                                hs_wild526DrVi = hs_ds326DrJP.hscall();
                                            }
                                            var hs_c026DrKp = hs_wild526DrVi.data[0];
                                            if (hs_c026DrKp.notEvaluated) {
                                                return hs_c026DrKp.hscall();
                                            } else {
                                                return hs_c026DrKp;
                                            }
                                        };
                                        var hs_sat26DrVp = new $hs.Thunk();
                                        hs_sat26DrVp.evaluateOnce = function () {
                                            var hs_sat26DrVo = new $hs.Data(1);
                                            hs_sat26DrVo.data = [3];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126DrJn, hs_sat26DrVo);
                                        };
                                        return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26DrI9, hs_sat26DrVp, hs_sat26DrVn);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrVq, hs_sat26DrVj);
                                };
                                var hs_sat26DrVz = new $hs.Thunk();
                                hs_sat26DrVz.evaluateOnce = function () {
                                    var hs_sat26DrVw = new $hs.Thunk();
                                    hs_sat26DrVw.evaluateOnce = function () {
                                        var hs_wild526DrVs = hs_ds326DrJP;
                                        if (hs_ds326DrJP.notEvaluated) {
                                            hs_wild526DrVs = hs_ds326DrJP.hscall();
                                        }
                                        var hs_c126DrKf = hs_wild526DrVs.data[1];
                                        if (hs_c126DrKf.notEvaluated) {
                                            return hs_c126DrKf.hscall();
                                        } else {
                                            return hs_c126DrKf;
                                        }
                                    };
                                    var hs_sat26DrVy = new $hs.Thunk();
                                    hs_sat26DrVy.evaluateOnce = function () {
                                        var hs_sat26DrVx = new $hs.Data(1);
                                        hs_sat26DrVx.data = [2];
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126DrJn, hs_sat26DrVx);
                                    };
                                    return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26DrI9, hs_sat26DrVy, hs_sat26DrVw);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrVz, hs_sat26DrVt);
                            };
                            var hs_sat26DrVI = new $hs.Thunk();
                            hs_sat26DrVI.evaluateOnce = function () {
                                var hs_sat26DrVF = new $hs.Thunk();
                                hs_sat26DrVF.evaluateOnce = function () {
                                    var hs_wild526DrVB = hs_ds326DrJP;
                                    if (hs_ds326DrJP.notEvaluated) {
                                        hs_wild526DrVB = hs_ds326DrJP.hscall();
                                    }
                                    var hs_c226DrK5 = hs_wild526DrVB.data[2];
                                    if (hs_c226DrK5.notEvaluated) {
                                        return hs_c226DrK5.hscall();
                                    } else {
                                        return hs_c226DrK5;
                                    }
                                };
                                var hs_sat26DrVH = new $hs.Thunk();
                                hs_sat26DrVH.evaluateOnce = function () {
                                    var hs_sat26DrVG = new $hs.Data(1);
                                    hs_sat26DrVG.data = [1];
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126DrJn, hs_sat26DrVG);
                                };
                                return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26DrI9, hs_sat26DrVH, hs_sat26DrVF);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrVI, hs_sat26DrVC);
                        };
                        var hs_sat26DrVP = new $hs.Thunk();
                        hs_sat26DrVP.evaluateOnce = function () {
                            var hs_sat26DrVO = new $hs.Thunk();
                            hs_sat26DrVO.evaluateOnce = function () {
                                var hs_wild526DrVK = hs_ds326DrJP;
                                if (hs_ds326DrJP.notEvaluated) {
                                    hs_wild526DrVK = hs_ds326DrJP.hscall();
                                }
                                var hs_c326DrJV = hs_wild526DrVK.data[3];
                                if (hs_c326DrJV.notEvaluated) {
                                    return hs_c326DrJV.hscall();
                                } else {
                                    return hs_c326DrJV;
                                }
                            };
                            return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26DrI9, hs_ow126DrJn, hs_sat26DrVO);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrVP, hs_sat26DrVL);
                    };
                    var hs_sat26DrVR = new $hs.Thunk();
                    hs_sat26DrVR.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_readCharBuf.hscall(hs_iraw26DrHU, hs_ir126DrJl);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrVR, hs_sat26DrVQ);
                case 2:
                    return hs_done26DrJb.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ir126DrJl, hs_ow126DrJn);
                }
            case 2:
                return hs_done26DrJb.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ir126DrJl, hs_ow126DrJn);
            }
        };
        var hs_sat26DrVS = new $hs.Data(1);
        hs_sat26DrVS.data = [hs_rb926DrKD];
        var hs_sat26DrVT = new $hs.Data(1);
        hs_sat26DrVT.data = [hs_rb326DrKB];
        return hs_loop26DrKu.hscall(hs_sat26DrVT, hs_sat26DrVS);
    };
    hs_sat26DrVV.evaluateOnce = function () {
        var hs_sat26DrVU = new $hs.Thunk();
        hs_sat26DrVU.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziBase.hs_const, hs_sat26DrVU);
    };
    hs_sat26DrVW.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_sat26DrVX.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_sat26DrVY.data = [$hs.modules.GHCziIOziEncodingziUTF32.hs_utf32lezuencode, hs_sat26DrVX, hs_sat26DrVW, hs_sat26DrVV];
    hs_utf32lezuEF25tBgs.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrVY);
    };
    hs_validate25tBgI.evaluate = function (hs_c26DrKM) {
        var hs_x126DrKN = new $hs.Thunk();
        hs_x126DrKN.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DrKM);
        };
        var hs_sat26DrW3 = new $hs.Thunk();
        hs_sat26DrW3.evaluateOnce = function () {
            var hs_sat26DrW0 = new $hs.Thunk();
            hs_sat26DrW0.evaluateOnce = function () {
                var hs_sat26DrVZ = new $hs.Data(1);
                hs_sat26DrVZ.data = [1114111];
                return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_x126DrKN, hs_sat26DrVZ);
            };
            var hs_sat26DrW2 = new $hs.Thunk();
            hs_sat26DrW2.evaluateOnce = function () {
                var hs_sat26DrW1 = new $hs.Data(1);
                hs_sat26DrW1.data = [57343];
                return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_x126DrKN, hs_sat26DrW1);
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DrW2, hs_sat26DrW0);
        };
        var hs_sat26DrW8 = new $hs.Thunk();
        hs_sat26DrW8.evaluateOnce = function () {
            var hs_sat26DrW5 = new $hs.Thunk();
            hs_sat26DrW5.evaluateOnce = function () {
                var hs_sat26DrW4 = new $hs.Data(1);
                hs_sat26DrW4.data = [55296];
                return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_x126DrKN, hs_sat26DrW4);
            };
            var hs_sat26DrW7 = new $hs.Thunk();
            hs_sat26DrW7.evaluateOnce = function () {
                var hs_sat26DrW6 = new $hs.Data(1);
                hs_sat26DrW6.data = [0];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_x126DrKN, hs_sat26DrW6);
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DrW7, hs_sat26DrW5);
        };
        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DrW8, hs_sat26DrW3);
    };
    this.hs_utf32bezudecode.evaluate = function (hs_input26DrL0, hs_output26DrLi) {
        var hs_wild26DrLK = hs_input26DrL0;
        if (hs_input26DrL0.notEvaluated) {
            hs_wild26DrLK = hs_input26DrL0.hscall();
        }
        var hs_rb26DrL9 = hs_wild26DrLK.data[0];
        var hs_rb126DrLa = hs_wild26DrLK.data[1];
        var hs_rb326DrLd = hs_wild26DrLK.data[4];
        var hs_rb426DrLg = hs_wild26DrLK.data[5];
        var hs_iraw26DrLb = new $hs.Data(1);
        hs_iraw26DrLb.data = [hs_rb26DrL9, hs_rb126DrLa];
        var hs_ir026DrLe = new $hs.Data(1);
        hs_ir026DrLe.data = [hs_rb326DrLd];
        var hs_iw26DrLh = new $hs.Data(1);
        hs_iw26DrLh.data = [hs_rb426DrLg];
        var hs_wild126DrMc = hs_output26DrLi;
        if (hs_output26DrLi.notEvaluated) {
            hs_wild126DrMc = hs_output26DrLi.hscall();
        }
        var hs_rb526DrLr = hs_wild126DrMc.data[0];
        var hs_rb626DrLs = hs_wild126DrMc.data[1];
        var hs_rb726DrLv = hs_wild126DrMc.data[3];
        var hs_rb926DrNJ = hs_wild126DrMc.data[5];
        var hs_oraw26DrLt = new $hs.Data(1);
        hs_oraw26DrLt.data = [hs_rb526DrLr, hs_rb626DrLs];
        var hs_os26DrLw = new $hs.Data(1);
        hs_os26DrLw.data = [hs_rb726DrLv];
        var hs_done26DrMv = new $hs.Func(3);
        hs_done26DrMv.evaluate = function (hs_zddMonad26DrLH, hs_ir26DrLB, hs_ow26DrLE) {
            var hs_ir126DrLI = hs_ir26DrLB;
            if (hs_ir26DrLB.notEvaluated) {
                hs_ir126DrLI = hs_ir26DrLB.hscall();
            }
            var hs_ow126DrMk = hs_ow26DrLE;
            if (hs_ow26DrLE.notEvaluated) {
                hs_ow126DrMk = hs_ow26DrLE.hscall();
            }
            var hs_sat26DrWl = new $hs.Thunk();
            hs_sat26DrWl.evaluateOnce = function () {
                var hs_wild226DrWe = hs_wild126DrMc;
                if (hs_wild126DrMc.notEvaluated) {
                    hs_wild226DrWe = hs_wild126DrMc.hscall();
                }
                var hs_rb1026DrMn = hs_wild226DrWe.data[0];
                var hs_rb1126DrMo = hs_wild226DrWe.data[1];
                var hs_ds226DrMp = hs_wild226DrWe.data[2];
                var hs_rb1226DrMq = hs_wild226DrWe.data[3];
                var hs_rb1326DrMr = hs_wild226DrWe.data[4];
                var hs_tpl26DrWd = hs_ow126DrMk;
                if (hs_ow126DrMk.notEvaluated) {
                    hs_tpl26DrWd = hs_ow126DrMk.hscall();
                }
                var hs_tpl126DrMs = hs_tpl26DrWd.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb1026DrMn, hs_rb1126DrMo, hs_ds226DrMp, hs_rb1226DrMq, hs_rb1326DrMr, hs_tpl126DrMs];
                return $res;
            };
            var hs_sat26DrWq = new $hs.Thunk();
            hs_sat26DrWq.evaluateOnce = function () {
                var hs_wild226DrWk = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_ir126DrLI, hs_iw26DrLh);
                switch (hs_wild226DrWk.tag) {
                case 1:
                    var hs_wild326DrWj = hs_wild26DrLK;
                    if (hs_wild26DrLK.notEvaluated) {
                        hs_wild326DrWj = hs_wild26DrLK.hscall();
                    }
                    var hs_rb1026DrLU = hs_wild326DrWj.data[0];
                    var hs_rb1126DrLV = hs_wild326DrWj.data[1];
                    var hs_ds226DrLW = hs_wild326DrWj.data[2];
                    var hs_rb1226DrLX = hs_wild326DrWj.data[3];
                    var hs_rb1426DrLZ = hs_wild326DrWj.data[5];
                    var hs_tpl26DrWi = hs_ir126DrLI;
                    if (hs_ir126DrLI.notEvaluated) {
                        hs_tpl26DrWi = hs_ir126DrLI.hscall();
                    }
                    var hs_tpl126DrLY = hs_tpl26DrWi.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026DrLU, hs_rb1126DrLV, hs_ds226DrLW, hs_rb1226DrLX, hs_tpl126DrLY, hs_rb1426DrLZ];
                    return $res;
                case 2:
                    var hs_wild326DrWn = hs_wild26DrLK;
                    if (hs_wild26DrLK.notEvaluated) {
                        hs_wild326DrWn = hs_wild26DrLK.hscall();
                    }
                    var hs_rb1026DrM7 = hs_wild326DrWn.data[0];
                    var hs_rb1126DrM8 = hs_wild326DrWn.data[1];
                    var hs_ds226DrM9 = hs_wild326DrWn.data[2];
                    var hs_rb1226DrMa = hs_wild326DrWn.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026DrM7, hs_rb1126DrM8, hs_ds226DrM9, hs_rb1226DrMa, 0, 0];
                    return $res;
                }
            };
            var hs_sat26DrWr = new $hs.Data(1);
            hs_sat26DrWr.data = [hs_sat26DrWq, hs_sat26DrWl];
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26DrLH, hs_sat26DrWr);
        };
        var hs_loop26DrNB = new $hs.Func(2);
        hs_loop26DrNB.evaluate = function (hs_ir26DrMz, hs_ow26DrMC) {
            var hs_ir126DrMG = hs_ir26DrMz;
            if (hs_ir26DrMz.notEvaluated) {
                hs_ir126DrMG = hs_ir26DrMz.hscall();
            }
            var hs_ow126DrMI = hs_ow26DrMC;
            if (hs_ow26DrMC.notEvaluated) {
                hs_ow126DrMI = hs_ow26DrMC.hscall();
            }
            var hs_invalid26DrMJ = new $hs.Thunk();
            hs_invalid26DrMJ.evaluateOnce = function () {
                var hs_wild226DrWs = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ir126DrMG, hs_ir026DrLe);
                switch (hs_wild226DrWs.tag) {
                case 1:
                    if (hs_ioezudecodingError25tBgy.notEvaluated) {
                        return hs_ioezudecodingError25tBgy.hscall();
                    } else {
                        return hs_ioezudecodingError25tBgy;
                    }
                case 2:
                    return hs_done26DrMv.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ir126DrMG, hs_ow126DrMI);
                }
            };
            var hs_sat26DrWx = new $hs.Thunk();
            hs_sat26DrWx.evaluateOnce = function () {
                var hs_sat26DrWv = new $hs.Data(1);
                hs_sat26DrWv.data = [4];
                var hs_sat26DrWw = new $hs.Thunk();
                hs_sat26DrWw.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_iw26DrLh, hs_ir126DrMG);
                };
                return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DrWw, hs_sat26DrWv);
            };
            var hs_sat26DrWO = new $hs.Thunk();
            hs_sat26DrWO.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ow126DrMI, hs_os26DrLw);
            };
            var hs_wild226DrWN = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DrWO, hs_sat26DrWx);
            switch (hs_wild226DrWN.tag) {
            case 1:
                var hs_sat26DrX7 = new $hs.Func(1);
                hs_sat26DrX7.evaluate = function (hs_c026DrN4) {
                    var hs_sat26DrX3 = new $hs.Func(1);
                    hs_sat26DrX3.evaluate = function (hs_c126DrN7) {
                        var hs_sat26DrWZ = new $hs.Func(1);
                        hs_sat26DrWZ.evaluate = function (hs_c226DrNa) {
                            var hs_sat26DrWV = new $hs.Func(1);
                            hs_sat26DrWV.evaluate = function (hs_c326DrNd) {
                                var hs_x126DrNv = new $hs.Thunk();
                                hs_x126DrNv.evaluateOnce = function () {
                                    var hs_wild326DrWM = hs_c026DrN4;
                                    if (hs_c026DrN4.notEvaluated) {
                                        hs_wild326DrWM = hs_c026DrN4.hscall();
                                    }
                                    var hs_x1zh26DrNg = hs_wild326DrWM.data[0];
                                    var hs_wild426DrWL = hs_c126DrN7;
                                    if (hs_c126DrN7.notEvaluated) {
                                        hs_wild426DrWL = hs_c126DrN7.hscall();
                                    }
                                    var hs_x2zh26DrNj = hs_wild426DrWL.data[0];
                                    var hs_wild526DrWK = hs_c226DrNa;
                                    if (hs_c226DrNa.notEvaluated) {
                                        hs_wild526DrWK = hs_c226DrNa.hscall();
                                    }
                                    var hs_x3zh26DrNn = hs_wild526DrWK.data[0];
                                    var hs_wild626DrWJ = hs_c326DrNd;
                                    if (hs_c326DrNd.notEvaluated) {
                                        hs_wild626DrWJ = hs_c326DrNd.hscall();
                                    }
                                    var hs_x4zh26DrNr = hs_wild626DrWJ.data[0];
                                    var hs_sat26DrWI = hs_x4zh26DrNr;
                                    var hs_sat26DrWH = hs_x3zh26DrNn;
                                    var hs_sat26DrWG = hs_sat26DrWH << 8;
                                    var hs_sat26DrWF = hs_x2zh26DrNj;
                                    var hs_sat26DrWE = hs_sat26DrWF << 16;
                                    var hs_sat26DrWD = hs_x1zh26DrNg;
                                    var hs_sat26DrWC = hs_sat26DrWD << 24;
                                    var hs_sat26DrWB = ($hs.Int.addCarry(hs_sat26DrWC, hs_sat26DrWE, 0))[0];
                                    var hs_sat26DrWA = ($hs.Int.addCarry(hs_sat26DrWB, hs_sat26DrWG, 0))[0];
                                    var hs_sat26DrWz = ($hs.Int.addCarry(hs_sat26DrWA, hs_sat26DrWI, 0))[0];
                                    var hs_sat26DrWy = String.fromCharCode(hs_sat26DrWz);
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_sat26DrWy];
                                    return $res;
                                };
                                var hs_sat26DrWQ = new $hs.Thunk();
                                hs_sat26DrWQ.evaluateOnce = function () {
                                    return hs_validate25tBgI.hscall(hs_x126DrNv);
                                };
                                var hs_wild326DrWP = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DrWQ);
                                switch (hs_wild326DrWP.tag) {
                                case 1:
                                    var hs_sat26DrWT = new $hs.Func(1);
                                    hs_sat26DrWT.evaluate = function (hs_owzq26DrND) {
                                        var hs_sat26DrWS = new $hs.Thunk();
                                        hs_sat26DrWS.evaluateOnce = function () {
                                            var hs_sat26DrWR = new $hs.Data(1);
                                            hs_sat26DrWR.data = [4];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126DrMG, hs_sat26DrWR);
                                        };
                                        return hs_loop26DrNB.hscall(hs_sat26DrWS, hs_owzq26DrND);
                                    };
                                    var hs_sat26DrWU = new $hs.Thunk();
                                    hs_sat26DrWU.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_oraw26DrLt, hs_ow126DrMI, hs_x126DrNv);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrWU, hs_sat26DrWT);
                                case 2:
                                    if (hs_invalid26DrMJ.notEvaluated) {
                                        return hs_invalid26DrMJ.hscall();
                                    } else {
                                        return hs_invalid26DrMJ;
                                    }
                                }
                            };
                            var hs_sat26DrWY = new $hs.Thunk();
                            hs_sat26DrWY.evaluateOnce = function () {
                                var hs_sat26DrWX = new $hs.Thunk();
                                hs_sat26DrWX.evaluateOnce = function () {
                                    var hs_sat26DrWW = new $hs.Data(1);
                                    hs_sat26DrWW.data = [3];
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126DrMG, hs_sat26DrWW);
                                };
                                return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26DrLb, hs_sat26DrWX);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrWY, hs_sat26DrWV);
                        };
                        var hs_sat26DrX2 = new $hs.Thunk();
                        hs_sat26DrX2.evaluateOnce = function () {
                            var hs_sat26DrX1 = new $hs.Thunk();
                            hs_sat26DrX1.evaluateOnce = function () {
                                var hs_sat26DrX0 = new $hs.Data(1);
                                hs_sat26DrX0.data = [2];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126DrMG, hs_sat26DrX0);
                            };
                            return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26DrLb, hs_sat26DrX1);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrX2, hs_sat26DrWZ);
                    };
                    var hs_sat26DrX6 = new $hs.Thunk();
                    hs_sat26DrX6.evaluateOnce = function () {
                        var hs_sat26DrX5 = new $hs.Thunk();
                        hs_sat26DrX5.evaluateOnce = function () {
                            var hs_sat26DrX4 = new $hs.Data(1);
                            hs_sat26DrX4.data = [1];
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126DrMG, hs_sat26DrX4);
                        };
                        return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26DrLb, hs_sat26DrX5);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrX6, hs_sat26DrX3);
                };
                var hs_sat26DrX8 = new $hs.Thunk();
                hs_sat26DrX8.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26DrLb, hs_ir126DrMG);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrX8, hs_sat26DrX7);
            case 2:
                return hs_done26DrMv.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ir126DrMG, hs_ow126DrMI);
            }
        };
        var hs_sat26DrX9 = new $hs.Data(1);
        hs_sat26DrX9.data = [hs_rb926DrNJ];
        return hs_loop26DrNB.hscall(hs_ir026DrLe, hs_sat26DrX9);
    };
    hs_sat26DrXb.evaluateOnce = function () {
        var hs_sat26DrXa = new $hs.Thunk();
        hs_sat26DrXa.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziBase.hs_const, hs_sat26DrXa);
    };
    hs_sat26DrXc.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_sat26DrXd.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_sat26DrXe.data = [$hs.modules.GHCziIOziEncodingziUTF32.hs_utf32bezudecode, hs_sat26DrXd, hs_sat26DrXc, hs_sat26DrXb];
    hs_utf32bezuDF25tBgk.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrXe);
    };
    hs_a25v3hB.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("UTF-32BE\x00");
    };
    this.hs_utf32be.data = [hs_a25v3hB, hs_utf32bezuDF25tBgk, hs_utf32bezuEF25tBgm];
    this.hs_utf32lezudecode.evaluate = function (hs_input26DrNU, hs_output26DrOc) {
        var hs_wild26DrOE = hs_input26DrNU;
        if (hs_input26DrNU.notEvaluated) {
            hs_wild26DrOE = hs_input26DrNU.hscall();
        }
        var hs_rb26DrO3 = hs_wild26DrOE.data[0];
        var hs_rb126DrO4 = hs_wild26DrOE.data[1];
        var hs_rb326DrO7 = hs_wild26DrOE.data[4];
        var hs_rb426DrOa = hs_wild26DrOE.data[5];
        var hs_iraw26DrO5 = new $hs.Data(1);
        hs_iraw26DrO5.data = [hs_rb26DrO3, hs_rb126DrO4];
        var hs_ir026DrO8 = new $hs.Data(1);
        hs_ir026DrO8.data = [hs_rb326DrO7];
        var hs_iw26DrOb = new $hs.Data(1);
        hs_iw26DrOb.data = [hs_rb426DrOa];
        var hs_wild126DrP6 = hs_output26DrOc;
        if (hs_output26DrOc.notEvaluated) {
            hs_wild126DrP6 = hs_output26DrOc.hscall();
        }
        var hs_rb526DrOl = hs_wild126DrP6.data[0];
        var hs_rb626DrOm = hs_wild126DrP6.data[1];
        var hs_rb726DrOp = hs_wild126DrP6.data[3];
        var hs_rb926DrQD = hs_wild126DrP6.data[5];
        var hs_oraw26DrOn = new $hs.Data(1);
        hs_oraw26DrOn.data = [hs_rb526DrOl, hs_rb626DrOm];
        var hs_os26DrOq = new $hs.Data(1);
        hs_os26DrOq.data = [hs_rb726DrOp];
        var hs_done26DrPp = new $hs.Func(3);
        hs_done26DrPp.evaluate = function (hs_zddMonad26DrOB, hs_ir26DrOv, hs_ow26DrOy) {
            var hs_ir126DrOC = hs_ir26DrOv;
            if (hs_ir26DrOv.notEvaluated) {
                hs_ir126DrOC = hs_ir26DrOv.hscall();
            }
            var hs_ow126DrPe = hs_ow26DrOy;
            if (hs_ow26DrOy.notEvaluated) {
                hs_ow126DrPe = hs_ow26DrOy.hscall();
            }
            var hs_sat26DrXr = new $hs.Thunk();
            hs_sat26DrXr.evaluateOnce = function () {
                var hs_wild226DrXk = hs_wild126DrP6;
                if (hs_wild126DrP6.notEvaluated) {
                    hs_wild226DrXk = hs_wild126DrP6.hscall();
                }
                var hs_rb1026DrPh = hs_wild226DrXk.data[0];
                var hs_rb1126DrPi = hs_wild226DrXk.data[1];
                var hs_ds226DrPj = hs_wild226DrXk.data[2];
                var hs_rb1226DrPk = hs_wild226DrXk.data[3];
                var hs_rb1326DrPl = hs_wild226DrXk.data[4];
                var hs_tpl26DrXj = hs_ow126DrPe;
                if (hs_ow126DrPe.notEvaluated) {
                    hs_tpl26DrXj = hs_ow126DrPe.hscall();
                }
                var hs_tpl126DrPm = hs_tpl26DrXj.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb1026DrPh, hs_rb1126DrPi, hs_ds226DrPj, hs_rb1226DrPk, hs_rb1326DrPl, hs_tpl126DrPm];
                return $res;
            };
            var hs_sat26DrXw = new $hs.Thunk();
            hs_sat26DrXw.evaluateOnce = function () {
                var hs_wild226DrXq = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_ir126DrOC, hs_iw26DrOb);
                switch (hs_wild226DrXq.tag) {
                case 1:
                    var hs_wild326DrXp = hs_wild26DrOE;
                    if (hs_wild26DrOE.notEvaluated) {
                        hs_wild326DrXp = hs_wild26DrOE.hscall();
                    }
                    var hs_rb1026DrOO = hs_wild326DrXp.data[0];
                    var hs_rb1126DrOP = hs_wild326DrXp.data[1];
                    var hs_ds226DrOQ = hs_wild326DrXp.data[2];
                    var hs_rb1226DrOR = hs_wild326DrXp.data[3];
                    var hs_rb1426DrOT = hs_wild326DrXp.data[5];
                    var hs_tpl26DrXo = hs_ir126DrOC;
                    if (hs_ir126DrOC.notEvaluated) {
                        hs_tpl26DrXo = hs_ir126DrOC.hscall();
                    }
                    var hs_tpl126DrOS = hs_tpl26DrXo.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026DrOO, hs_rb1126DrOP, hs_ds226DrOQ, hs_rb1226DrOR, hs_tpl126DrOS, hs_rb1426DrOT];
                    return $res;
                case 2:
                    var hs_wild326DrXt = hs_wild26DrOE;
                    if (hs_wild26DrOE.notEvaluated) {
                        hs_wild326DrXt = hs_wild26DrOE.hscall();
                    }
                    var hs_rb1026DrP1 = hs_wild326DrXt.data[0];
                    var hs_rb1126DrP2 = hs_wild326DrXt.data[1];
                    var hs_ds226DrP3 = hs_wild326DrXt.data[2];
                    var hs_rb1226DrP4 = hs_wild326DrXt.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026DrP1, hs_rb1126DrP2, hs_ds226DrP3, hs_rb1226DrP4, 0, 0];
                    return $res;
                }
            };
            var hs_sat26DrXx = new $hs.Data(1);
            hs_sat26DrXx.data = [hs_sat26DrXw, hs_sat26DrXr];
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26DrOB, hs_sat26DrXx);
        };
        var hs_loop26DrQv = new $hs.Func(2);
        hs_loop26DrQv.evaluate = function (hs_ir26DrPt, hs_ow26DrPw) {
            var hs_ir126DrPA = hs_ir26DrPt;
            if (hs_ir26DrPt.notEvaluated) {
                hs_ir126DrPA = hs_ir26DrPt.hscall();
            }
            var hs_ow126DrPC = hs_ow26DrPw;
            if (hs_ow26DrPw.notEvaluated) {
                hs_ow126DrPC = hs_ow26DrPw.hscall();
            }
            var hs_invalid26DrPD = new $hs.Thunk();
            hs_invalid26DrPD.evaluateOnce = function () {
                var hs_wild226DrXy = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ir126DrPA, hs_ir026DrO8);
                switch (hs_wild226DrXy.tag) {
                case 1:
                    if (hs_ioezudecodingError25tBgy.notEvaluated) {
                        return hs_ioezudecodingError25tBgy.hscall();
                    } else {
                        return hs_ioezudecodingError25tBgy;
                    }
                case 2:
                    return hs_done26DrPp.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ir126DrPA, hs_ow126DrPC);
                }
            };
            var hs_sat26DrXD = new $hs.Thunk();
            hs_sat26DrXD.evaluateOnce = function () {
                var hs_sat26DrXB = new $hs.Data(1);
                hs_sat26DrXB.data = [4];
                var hs_sat26DrXC = new $hs.Thunk();
                hs_sat26DrXC.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_iw26DrOb, hs_ir126DrPA);
                };
                return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DrXC, hs_sat26DrXB);
            };
            var hs_sat26DrXU = new $hs.Thunk();
            hs_sat26DrXU.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ow126DrPC, hs_os26DrOq);
            };
            var hs_wild226DrXT = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DrXU, hs_sat26DrXD);
            switch (hs_wild226DrXT.tag) {
            case 1:
                var hs_sat26DrYd = new $hs.Func(1);
                hs_sat26DrYd.evaluate = function (hs_c026DrQ7) {
                    var hs_sat26DrY9 = new $hs.Func(1);
                    hs_sat26DrY9.evaluate = function (hs_c126DrQ4) {
                        var hs_sat26DrY5 = new $hs.Func(1);
                        hs_sat26DrY5.evaluate = function (hs_c226DrQ1) {
                            var hs_sat26DrY1 = new $hs.Func(1);
                            hs_sat26DrY1.evaluate = function (hs_c326DrPY) {
                                var hs_x126DrQp = new $hs.Thunk();
                                hs_x126DrQp.evaluateOnce = function () {
                                    var hs_wild326DrXS = hs_c326DrPY;
                                    if (hs_c326DrPY.notEvaluated) {
                                        hs_wild326DrXS = hs_c326DrPY.hscall();
                                    }
                                    var hs_x1zh26DrQa = hs_wild326DrXS.data[0];
                                    var hs_wild426DrXR = hs_c226DrQ1;
                                    if (hs_c226DrQ1.notEvaluated) {
                                        hs_wild426DrXR = hs_c226DrQ1.hscall();
                                    }
                                    var hs_x2zh26DrQd = hs_wild426DrXR.data[0];
                                    var hs_wild526DrXQ = hs_c126DrQ4;
                                    if (hs_c126DrQ4.notEvaluated) {
                                        hs_wild526DrXQ = hs_c126DrQ4.hscall();
                                    }
                                    var hs_x3zh26DrQh = hs_wild526DrXQ.data[0];
                                    var hs_wild626DrXP = hs_c026DrQ7;
                                    if (hs_c026DrQ7.notEvaluated) {
                                        hs_wild626DrXP = hs_c026DrQ7.hscall();
                                    }
                                    var hs_x4zh26DrQl = hs_wild626DrXP.data[0];
                                    var hs_sat26DrXO = hs_x4zh26DrQl;
                                    var hs_sat26DrXN = hs_x3zh26DrQh;
                                    var hs_sat26DrXM = hs_sat26DrXN << 8;
                                    var hs_sat26DrXL = hs_x2zh26DrQd;
                                    var hs_sat26DrXK = hs_sat26DrXL << 16;
                                    var hs_sat26DrXJ = hs_x1zh26DrQa;
                                    var hs_sat26DrXI = hs_sat26DrXJ << 24;
                                    var hs_sat26DrXH = ($hs.Int.addCarry(hs_sat26DrXI, hs_sat26DrXK, 0))[0];
                                    var hs_sat26DrXG = ($hs.Int.addCarry(hs_sat26DrXH, hs_sat26DrXM, 0))[0];
                                    var hs_sat26DrXF = ($hs.Int.addCarry(hs_sat26DrXG, hs_sat26DrXO, 0))[0];
                                    var hs_sat26DrXE = String.fromCharCode(hs_sat26DrXF);
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_sat26DrXE];
                                    return $res;
                                };
                                var hs_sat26DrXW = new $hs.Thunk();
                                hs_sat26DrXW.evaluateOnce = function () {
                                    return hs_validate25tBgI.hscall(hs_x126DrQp);
                                };
                                var hs_wild326DrXV = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DrXW);
                                switch (hs_wild326DrXV.tag) {
                                case 1:
                                    var hs_sat26DrXZ = new $hs.Func(1);
                                    hs_sat26DrXZ.evaluate = function (hs_owzq26DrQx) {
                                        var hs_sat26DrXY = new $hs.Thunk();
                                        hs_sat26DrXY.evaluateOnce = function () {
                                            var hs_sat26DrXX = new $hs.Data(1);
                                            hs_sat26DrXX.data = [4];
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126DrPA, hs_sat26DrXX);
                                        };
                                        return hs_loop26DrQv.hscall(hs_sat26DrXY, hs_owzq26DrQx);
                                    };
                                    var hs_sat26DrY0 = new $hs.Thunk();
                                    hs_sat26DrY0.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_oraw26DrOn, hs_ow126DrPC, hs_x126DrQp);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrY0, hs_sat26DrXZ);
                                case 2:
                                    if (hs_invalid26DrPD.notEvaluated) {
                                        return hs_invalid26DrPD.hscall();
                                    } else {
                                        return hs_invalid26DrPD;
                                    }
                                }
                            };
                            var hs_sat26DrY4 = new $hs.Thunk();
                            hs_sat26DrY4.evaluateOnce = function () {
                                var hs_sat26DrY3 = new $hs.Thunk();
                                hs_sat26DrY3.evaluateOnce = function () {
                                    var hs_sat26DrY2 = new $hs.Data(1);
                                    hs_sat26DrY2.data = [3];
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126DrPA, hs_sat26DrY2);
                                };
                                return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26DrO5, hs_sat26DrY3);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrY4, hs_sat26DrY1);
                        };
                        var hs_sat26DrY8 = new $hs.Thunk();
                        hs_sat26DrY8.evaluateOnce = function () {
                            var hs_sat26DrY7 = new $hs.Thunk();
                            hs_sat26DrY7.evaluateOnce = function () {
                                var hs_sat26DrY6 = new $hs.Data(1);
                                hs_sat26DrY6.data = [2];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126DrPA, hs_sat26DrY6);
                            };
                            return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26DrO5, hs_sat26DrY7);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrY8, hs_sat26DrY5);
                    };
                    var hs_sat26DrYc = new $hs.Thunk();
                    hs_sat26DrYc.evaluateOnce = function () {
                        var hs_sat26DrYb = new $hs.Thunk();
                        hs_sat26DrYb.evaluateOnce = function () {
                            var hs_sat26DrYa = new $hs.Data(1);
                            hs_sat26DrYa.data = [1];
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126DrPA, hs_sat26DrYa);
                        };
                        return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26DrO5, hs_sat26DrYb);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrYc, hs_sat26DrY9);
                };
                var hs_sat26DrYe = new $hs.Thunk();
                hs_sat26DrYe.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26DrO5, hs_ir126DrPA);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrYe, hs_sat26DrYd);
            case 2:
                return hs_done26DrPp.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ir126DrPA, hs_ow126DrPC);
            }
        };
        var hs_sat26DrYf = new $hs.Data(1);
        hs_sat26DrYf.data = [hs_rb926DrQD];
        return hs_loop26DrQv.hscall(hs_ir026DrO8, hs_sat26DrYf);
    };
    this.hs_utf32zudecode.evaluate = function (hs_seenzubom26DrR0, hs_input26DrQI, hs_output26DrRH) {
        var hs_wild26DrRG = hs_input26DrQI;
        if (hs_input26DrQI.notEvaluated) {
            hs_wild26DrRG = hs_input26DrQI.hscall();
        }
        var hs_rb26DrQR = hs_wild26DrRG.data[0];
        var hs_rb126DrQS = hs_wild26DrRG.data[1];
        var hs_rb326DrQV = hs_wild26DrRG.data[4];
        var hs_rb426DrQY = hs_wild26DrRG.data[5];
        var hs_iraw26DrQT = new $hs.Data(1);
        hs_iraw26DrQT.data = [hs_rb26DrQR, hs_rb126DrQS];
        var hs_ir26DrQW = new $hs.Data(1);
        hs_ir26DrQW.data = [hs_rb326DrQV];
        var hs_iw26DrQZ = new $hs.Data(1);
        hs_iw26DrQZ.data = [hs_rb426DrQY];
        var hs_sat26DrZ8 = new $hs.Func(1);
        hs_sat26DrZ8.evaluate = function (hs_mb26DrR3) {
            var hs_wild126DrYi = hs_mb26DrR3;
            if (hs_mb26DrR3.notEvaluated) {
                hs_wild126DrYi = hs_mb26DrR3.hscall();
            }
            switch (hs_wild126DrYi.tag) {
            case 1:
                var hs_sat26DrYj = new $hs.Data(1);
                hs_sat26DrYj.data = [4];
                var hs_sat26DrYl = new $hs.Thunk();
                hs_sat26DrYl.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_iw26DrQZ, hs_ir26DrQW);
                };
                var hs_wild226DrYk = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DrYl, hs_sat26DrYj);
                switch (hs_wild226DrYk.tag) {
                case 1:
                    var hs_sat26DrZ5 = new $hs.Func(1);
                    hs_sat26DrZ5.evaluate = function (hs_c026DrRm) {
                        var hs_sat26DrZ1 = new $hs.Func(1);
                        hs_sat26DrZ1.evaluate = function (hs_c126DrRo) {
                            var hs_sat26DrYX = new $hs.Func(1);
                            hs_sat26DrYX.evaluate = function (hs_c226DrRq) {
                                var hs_sat26DrYT = new $hs.Func(1);
                                hs_sat26DrYT.evaluate = function (hs_c326DrRs) {
                                    var hs_sat26DrYq = new $hs.Thunk();
                                    hs_sat26DrYq.evaluateOnce = function () {
                                        var hs_sat26DrYo = new $hs.Thunk();
                                        hs_sat26DrYo.evaluateOnce = function () {
                                            var hs_sat26DrYm = new $hs.Thunk();
                                            hs_sat26DrYm.evaluateOnce = function () {
                                                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_c326DrRs, hs_bom325tBgc);
                                            };
                                            var hs_sat26DrYn = new $hs.Thunk();
                                            hs_sat26DrYn.evaluateOnce = function () {
                                                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_c226DrRq, hs_bom225tBga);
                                            };
                                            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DrYn, hs_sat26DrYm);
                                        };
                                        var hs_sat26DrYp = new $hs.Thunk();
                                        hs_sat26DrYp.evaluateOnce = function () {
                                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_c126DrRo, hs_bom125tBg8);
                                        };
                                        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DrYp, hs_sat26DrYo);
                                    };
                                    var hs_sat26DrYs = new $hs.Thunk();
                                    hs_sat26DrYs.evaluateOnce = function () {
                                        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_c026DrRm, hs_bom025tBg6);
                                    };
                                    var hs_wild326DrYr = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DrYs, hs_sat26DrYq);
                                    switch (hs_wild326DrYr.tag) {
                                    case 1:
                                        var hs_sat26DrYx = new $hs.Thunk();
                                        hs_sat26DrYx.evaluateOnce = function () {
                                            var hs_sat26DrYv = new $hs.Thunk();
                                            hs_sat26DrYv.evaluateOnce = function () {
                                                var hs_sat26DrYt = new $hs.Thunk();
                                                hs_sat26DrYt.evaluateOnce = function () {
                                                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_c326DrRs, hs_bom025tBg6);
                                                };
                                                var hs_sat26DrYu = new $hs.Thunk();
                                                hs_sat26DrYu.evaluateOnce = function () {
                                                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_c226DrRq, hs_bom125tBg8);
                                                };
                                                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DrYu, hs_sat26DrYt);
                                            };
                                            var hs_sat26DrYw = new $hs.Thunk();
                                            hs_sat26DrYw.evaluateOnce = function () {
                                                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_c126DrRo, hs_bom225tBga);
                                            };
                                            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DrYw, hs_sat26DrYv);
                                        };
                                        var hs_sat26DrYz = new $hs.Thunk();
                                        hs_sat26DrYz.evaluateOnce = function () {
                                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_c026DrRm, hs_bom325tBgc);
                                        };
                                        var hs_wild426DrYy = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DrYz, hs_sat26DrYx);
                                        switch (hs_wild426DrYy.tag) {
                                        case 1:
                                            var hs_sat26DrYA = new $hs.Thunk();
                                            hs_sat26DrYA.evaluateOnce = function () {
                                                return $hs.modules.GHCziIOziEncodingziUTF32.hs_utf32bezudecode.hscall(hs_wild26DrRG, hs_output26DrRH);
                                            };
                                            var hs_sat26DrYC = new $hs.Thunk();
                                            hs_sat26DrYC.evaluateOnce = function () {
                                                var hs_sat26DrYB = new $hs.Data(2);
                                                hs_sat26DrYB.data = [$hs.modules.GHCziIOziEncodingziUTF32.hs_utf32bezudecode];
                                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_seenzubom26DrR0, hs_sat26DrYB);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrYC, hs_sat26DrYA);
                                        case 2:
                                            var hs_sat26DrYI = new $hs.Thunk();
                                            hs_sat26DrYI.evaluateOnce = function () {
                                                var hs_sat26DrYH = new $hs.Thunk();
                                                hs_sat26DrYH.evaluateOnce = function () {
                                                    var hs_wild526DrYD = hs_wild26DrRG;
                                                    if (hs_wild26DrRG.notEvaluated) {
                                                        hs_wild526DrYD = hs_wild26DrRG.hscall();
                                                    }
                                                    var hs_rb526DrRV = hs_wild526DrYD.data[0];
                                                    var hs_rb626DrRW = hs_wild526DrYD.data[1];
                                                    var hs_ds126DrRX = hs_wild526DrYD.data[2];
                                                    var hs_rb726DrRY = hs_wild526DrYD.data[3];
                                                    var hs_rb926DrS0 = hs_wild526DrYD.data[5];
                                                    var hs_sat26DrYG = new $hs.Data(1);
                                                    hs_sat26DrYG.data = [4];
                                                    var hs_tpl26DrYF = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir26DrQW, hs_sat26DrYG);
                                                    var hs_tpl126DrRZ = hs_tpl26DrYF.data[0];
                                                    var $res = new $hs.Data(1);
                                                    $res.data = [hs_rb526DrRV, hs_rb626DrRW, hs_ds126DrRX, hs_rb726DrRY, hs_tpl126DrRZ, hs_rb926DrS0];
                                                    return $res;
                                                };
                                                return $hs.modules.GHCziIOziEncodingziUTF32.hs_utf32lezudecode.hscall(hs_sat26DrYH, hs_output26DrRH);
                                            };
                                            var hs_sat26DrYK = new $hs.Thunk();
                                            hs_sat26DrYK.evaluateOnce = function () {
                                                var hs_sat26DrYJ = new $hs.Data(2);
                                                hs_sat26DrYJ.data = [$hs.modules.GHCziIOziEncodingziUTF32.hs_utf32lezudecode];
                                                return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_seenzubom26DrR0, hs_sat26DrYJ);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrYK, hs_sat26DrYI);
                                        }
                                    case 2:
                                        var hs_sat26DrYQ = new $hs.Thunk();
                                        hs_sat26DrYQ.evaluateOnce = function () {
                                            var hs_sat26DrYP = new $hs.Thunk();
                                            hs_sat26DrYP.evaluateOnce = function () {
                                                var hs_wild426DrYL = hs_wild26DrRG;
                                                if (hs_wild26DrRG.notEvaluated) {
                                                    hs_wild426DrYL = hs_wild26DrRG.hscall();
                                                }
                                                var hs_rb526DrSf = hs_wild426DrYL.data[0];
                                                var hs_rb626DrSg = hs_wild426DrYL.data[1];
                                                var hs_ds126DrSh = hs_wild426DrYL.data[2];
                                                var hs_rb726DrSi = hs_wild426DrYL.data[3];
                                                var hs_rb926DrSk = hs_wild426DrYL.data[5];
                                                var hs_sat26DrYO = new $hs.Data(1);
                                                hs_sat26DrYO.data = [4];
                                                var hs_tpl26DrYN = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir26DrQW, hs_sat26DrYO);
                                                var hs_tpl126DrSj = hs_tpl26DrYN.data[0];
                                                var $res = new $hs.Data(1);
                                                $res.data = [hs_rb526DrSf, hs_rb626DrSg, hs_ds126DrSh, hs_rb726DrSi, hs_tpl126DrSj, hs_rb926DrSk];
                                                return $res;
                                            };
                                            return $hs.modules.GHCziIOziEncodingziUTF32.hs_utf32bezudecode.hscall(hs_sat26DrYP, hs_output26DrRH);
                                        };
                                        var hs_sat26DrYS = new $hs.Thunk();
                                        hs_sat26DrYS.evaluateOnce = function () {
                                            var hs_sat26DrYR = new $hs.Data(2);
                                            hs_sat26DrYR.data = [$hs.modules.GHCziIOziEncodingziUTF32.hs_utf32bezudecode];
                                            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_seenzubom26DrR0, hs_sat26DrYR);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrYS, hs_sat26DrYQ);
                                    }
                                };
                                var hs_sat26DrYW = new $hs.Thunk();
                                hs_sat26DrYW.evaluateOnce = function () {
                                    var hs_sat26DrYV = new $hs.Thunk();
                                    hs_sat26DrYV.evaluateOnce = function () {
                                        var hs_sat26DrYU = new $hs.Data(1);
                                        hs_sat26DrYU.data = [3];
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir26DrQW, hs_sat26DrYU);
                                    };
                                    return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26DrQT, hs_sat26DrYV);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrYW, hs_sat26DrYT);
                            };
                            var hs_sat26DrZ0 = new $hs.Thunk();
                            hs_sat26DrZ0.evaluateOnce = function () {
                                var hs_sat26DrYZ = new $hs.Thunk();
                                hs_sat26DrYZ.evaluateOnce = function () {
                                    var hs_sat26DrYY = new $hs.Data(1);
                                    hs_sat26DrYY.data = [2];
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir26DrQW, hs_sat26DrYY);
                                };
                                return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26DrQT, hs_sat26DrYZ);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrZ0, hs_sat26DrYX);
                        };
                        var hs_sat26DrZ4 = new $hs.Thunk();
                        hs_sat26DrZ4.evaluateOnce = function () {
                            var hs_sat26DrZ3 = new $hs.Thunk();
                            hs_sat26DrZ3.evaluateOnce = function () {
                                var hs_sat26DrZ2 = new $hs.Data(1);
                                hs_sat26DrZ2.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir26DrQW, hs_sat26DrZ2);
                            };
                            return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26DrQT, hs_sat26DrZ3);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrZ4, hs_sat26DrZ1);
                    };
                    var hs_sat26DrZ6 = new $hs.Thunk();
                    hs_sat26DrZ6.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26DrQT, hs_ir26DrQW);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrZ6, hs_sat26DrZ5);
                case 2:
                    var hs_sat26DrZ7 = new $hs.Data(1);
                    hs_sat26DrZ7.data = [hs_wild26DrRG, hs_output26DrRH];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrZ7);
                }
            case 2:
                var hs_decode26DrSt = hs_wild126DrYi.data[0];
                return hs_decode26DrSt.hscall(hs_wild26DrRG, hs_output26DrRH);
            }
        };
        var hs_sat26DrZ9 = new $hs.Thunk();
        hs_sat26DrZ9.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_seenzubom26DrR0);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrZ9, hs_sat26DrZ8);
    };
    hs_sat26DrZf.evaluate = function (hs_seenzubom26DrSx) {
        var hs_sat26DrZa = new $hs.Thunk();
        hs_sat26DrZa.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_seenzubom26DrSx);
        };
        var hs_sat26DrZb = new $hs.Thunk();
        hs_sat26DrZb.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_seenzubom26DrSx);
        };
        var hs_sat26DrZc = new $hs.Thunk();
        hs_sat26DrZc.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26DrZd = new $hs.Func(2);
        hs_sat26DrZd.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return $hs.modules.GHCziIOziEncodingziUTF32.hs_utf32zudecode.hscall(hs_seenzubom26DrSx, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26DrZe = new $hs.Data(1);
        hs_sat26DrZe.data = [hs_sat26DrZd, hs_sat26DrZc, hs_sat26DrZb, hs_sat26DrZa];
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrZe);
    };
    hs_sat26DrZg.evaluateOnce = function () {
        return $hs.modules.GHCziIORef.hs_newIORef.hscall($hs.modules.DataziMaybe.hs_Nothing);
    };
    hs_utf32zuDF25tBfY.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrZg, hs_sat26DrZf);
    };
    hs_a125v3mp.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("UTF-32\x00");
    };
    this.hs_utf32.data = [hs_a125v3mp, hs_utf32zuDF25tBfY, hs_utf32zuEF25tBg0];
    hs_sat26DrZi.evaluateOnce = function () {
        var hs_sat26DrZh = new $hs.Thunk();
        hs_sat26DrZh.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziBase.hs_const, hs_sat26DrZh);
    };
    hs_sat26DrZj.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_sat26DrZk.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_sat26DrZl.data = [$hs.modules.GHCziIOziEncodingziUTF32.hs_utf32lezudecode, hs_sat26DrZk, hs_sat26DrZj, hs_sat26DrZi];
    hs_utf32lezuDF25tBgq.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DrZl);
    };
    hs_a225v3mw.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("UTF-32LE\x00");
    };
    this.hs_utf32le.data = [hs_a225v3mw, hs_utf32lezuDF25tBgq, hs_utf32lezuEF25tBgs];
};
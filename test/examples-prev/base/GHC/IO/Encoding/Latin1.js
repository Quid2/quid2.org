
$hs.modules.GHCziIOziEncodingziLatin1 = new $hs.Module();
$hs.modules.GHCziIOziEncodingziLatin1.dependencies = ["GHC.Unit", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Classes", "GHC.IO.Buffer", "GHC.IO.Exception", "GHC.Word"];
$hs.modules.GHCziIOziEncodingziLatin1.initBeforeDependencies = function () {
    this.hs_latin1zudecode = new $hs.Func(2);
    this.hs_latin1zuencode = new $hs.Func(2);
    this.hs_latin1 = new $hs.Data(1);
    this.hs_latin1zucheckedzuencode = new $hs.Func(2);
    this.hs_latin1zuchecked = new $hs.Data(1);
    this.hs_latin1zudecode.notEvaluated = true;
    this.hs_latin1zudecode.evaluate = function (hs_input26DpPA, hs_output26DpPP) {
        $hs.modules.GHCziIOziEncodingziLatin1.loadDependencies();
        return this.evaluate(hs_input26DpPA, hs_output26DpPP);
    };
    this.hs_latin1zuencode.notEvaluated = true;
    this.hs_latin1zuencode.evaluate = function (hs_input26DpRr, hs_output26DpRG) {
        $hs.modules.GHCziIOziEncodingziLatin1.loadDependencies();
        return this.evaluate(hs_input26DpRr, hs_output26DpRG);
    };
    this.hs_latin1.notEvaluated = true;
    this.hs_latin1.evaluate = function () {
        $hs.modules.GHCziIOziEncodingziLatin1.loadDependencies();
        return this;
    };
    this.hs_latin1zucheckedzuencode.notEvaluated = true;
    this.hs_latin1zucheckedzuencode.evaluate = function (hs_input26DpTn, hs_output26DpTF) {
        $hs.modules.GHCziIOziEncodingziLatin1.loadDependencies();
        return this.evaluate(hs_input26DpTn, hs_output26DpTF);
    };
    this.hs_latin1zuchecked.notEvaluated = true;
    this.hs_latin1zuchecked.evaluate = function () {
        $hs.modules.GHCziIOziEncodingziLatin1.loadDependencies();
        return this;
    };
};
$hs.modules.GHCziIOziEncodingziLatin1.initAfterDependencies = function () {
    this.hs_latin1zudecode.notEvaluated = false;
    this.hs_latin1zuencode.notEvaluated = false;
    this.hs_latin1.notEvaluated = false;
    this.hs_latin1.evaluate = function () {
        return this;
    };
    this.hs_latin1zucheckedzuencode.notEvaluated = false;
    this.hs_latin1zuchecked.notEvaluated = false;
    this.hs_latin1zuchecked.evaluate = function () {
        return this;
    };
    var hs_ioezuencodingError25tsV3 = new $hs.Thunk();
    var hs_sat26DpWc = new $hs.Thunk();
    var hs_sat26DpWd = new $hs.Thunk();
    var hs_sat26DpWe = new $hs.Thunk();
    var hs_sat26DpWf = new $hs.Data(1);
    var hs_latin1zuDF25tsUP = new $hs.Thunk();
    var hs_sat26DpWO = new $hs.Thunk();
    var hs_sat26DpWP = new $hs.Thunk();
    var hs_sat26DpWQ = new $hs.Thunk();
    var hs_sat26DpWR = new $hs.Data(1);
    var hs_latin1zuEF25tsUR = new $hs.Thunk();
    var hs_a25v1n4 = new $hs.Thunk();
    var hs_sat26DpXv = new $hs.Thunk();
    var hs_sat26DpXw = new $hs.Thunk();
    var hs_sat26DpXx = new $hs.Thunk();
    var hs_sat26DpXy = new $hs.Data(1);
    var hs_latin1zucheckedzuEF25tsUV = new $hs.Thunk();
    var hs_a125v1pl = new $hs.Thunk();
    hs_ioezuencodingError25tsV3.evaluateOnce = function () {
        var hs_sat26DpVC = new $hs.Thunk();
        hs_sat26DpVC.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("character is out of range for this encoding\x00");
        };
        var hs_sat26DpVD = new $hs.Thunk();
        hs_sat26DpVD.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("latin1_checked_encode\x00");
        };
        var hs_sat26DpVE = new $hs.Data(1);
        hs_sat26DpVE.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_InvalidArgument, hs_sat26DpVD, hs_sat26DpVC, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26DpVE);
    };
    this.hs_latin1zudecode.evaluate = function (hs_input26DpPA, hs_output26DpPP) {
        var hs_wild26DpQw = hs_input26DpPA;
        if (hs_input26DpPA.notEvaluated) {
            hs_wild26DpQw = hs_input26DpPA.hscall();
        }
        var hs_rb26DpPJ = hs_wild26DpQw.data[0];
        var hs_rb126DpPK = hs_wild26DpQw.data[1];
        var hs_rb326DpRg = hs_wild26DpQw.data[4];
        var hs_rb426DpPN = hs_wild26DpQw.data[5];
        var hs_iraw26DpPL = new $hs.Data(1);
        hs_iraw26DpPL.data = [hs_rb26DpPJ, hs_rb126DpPK];
        var hs_iw26DpPO = new $hs.Data(1);
        hs_iw26DpPO.data = [hs_rb426DpPN];
        var hs_wild126DpQY = hs_output26DpPP;
        if (hs_output26DpPP.notEvaluated) {
            hs_wild126DpQY = hs_output26DpPP.hscall();
        }
        var hs_rb526DpPY = hs_wild126DpQY.data[0];
        var hs_rb626DpPZ = hs_wild126DpQY.data[1];
        var hs_rb726DpQ2 = hs_wild126DpQY.data[3];
        var hs_rb926DpRi = hs_wild126DpQY.data[5];
        var hs_oraw26DpQ0 = new $hs.Data(1);
        hs_oraw26DpQ0.data = [hs_rb526DpPY, hs_rb626DpPZ];
        var hs_os26DpQ3 = new $hs.Data(1);
        hs_os26DpQ3.data = [hs_rb726DpQ2];
        var hs_loop26DpQq = new $hs.Func(2);
        hs_loop26DpQq.evaluate = function (hs_ir26DpQ7, hs_ow26DpQa) {
            var hs_ir126DpQf = hs_ir26DpQ7;
            if (hs_ir26DpQ7.notEvaluated) {
                hs_ir126DpQf = hs_ir26DpQ7.hscall();
            }
            var hs_ow126DpQd = hs_ow26DpQa;
            if (hs_ow26DpQa.notEvaluated) {
                hs_ow126DpQd = hs_ow26DpQa.hscall();
            }
            var hs_sat26DpVL = new $hs.Thunk();
            hs_sat26DpVL.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ir126DpQf, hs_iw26DpPO);
            };
            var hs_sat26DpVN = new $hs.Thunk();
            hs_sat26DpVN.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ow126DpQd, hs_os26DpQ3);
            };
            var hs_wild226DpVM = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DpVN, hs_sat26DpVL);
            switch (hs_wild226DpVM.tag) {
            case 1:
                var hs_sat26DpVU = new $hs.Func(1);
                hs_sat26DpVU.evaluate = function (hs_c026DpQk) {
                    var hs_sat26DpVQ = new $hs.Func(1);
                    hs_sat26DpVQ.evaluate = function (hs_owzq26DpQs) {
                        var hs_sat26DpVP = new $hs.Thunk();
                        hs_sat26DpVP.evaluateOnce = function () {
                            var hs_sat26DpVO = new $hs.Data(1);
                            hs_sat26DpVO.data = [1];
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126DpQf, hs_sat26DpVO);
                        };
                        return hs_loop26DpQq.hscall(hs_sat26DpVP, hs_owzq26DpQs);
                    };
                    var hs_sat26DpVT = new $hs.Thunk();
                    hs_sat26DpVT.evaluateOnce = function () {
                        var hs_sat26DpVS = new $hs.Thunk();
                        hs_sat26DpVS.evaluateOnce = function () {
                            var hs_sat26DpVR = new $hs.Thunk();
                            hs_sat26DpVR.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziNum.hs_zdfNumInt, hs_c026DpQk);
                            };
                            return $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26DpVR);
                        };
                        return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_oraw26DpQ0, hs_ow126DpQd, hs_sat26DpVS);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DpVT, hs_sat26DpVQ);
                };
                var hs_sat26DpVV = new $hs.Thunk();
                hs_sat26DpVV.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26DpPL, hs_ir126DpQf);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DpVV, hs_sat26DpVU);
            case 2:
                var hs_sat26DpW2 = new $hs.Thunk();
                hs_sat26DpW2.evaluateOnce = function () {
                    var hs_wild326DpVX = hs_wild126DpQY;
                    if (hs_wild126DpQY.notEvaluated) {
                        hs_wild326DpVX = hs_wild126DpQY.hscall();
                    }
                    var hs_rb1026DpR8 = hs_wild326DpVX.data[0];
                    var hs_rb1126DpR9 = hs_wild326DpVX.data[1];
                    var hs_ds226DpRa = hs_wild326DpVX.data[2];
                    var hs_rb1226DpRb = hs_wild326DpVX.data[3];
                    var hs_rb1326DpRc = hs_wild326DpVX.data[4];
                    var hs_tpl26DpVW = hs_ow126DpQd;
                    if (hs_ow126DpQd.notEvaluated) {
                        hs_tpl26DpVW = hs_ow126DpQd.hscall();
                    }
                    var hs_tpl126DpRd = hs_tpl26DpVW.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026DpR8, hs_rb1126DpR9, hs_ds226DpRa, hs_rb1226DpRb, hs_rb1326DpRc, hs_tpl126DpRd];
                    return $res;
                };
                var hs_sat26DpW7 = new $hs.Thunk();
                hs_sat26DpW7.evaluateOnce = function () {
                    var hs_wild326DpW1 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_ir126DpQf, hs_iw26DpPO);
                    switch (hs_wild326DpW1.tag) {
                    case 1:
                        var hs_wild426DpW0 = hs_wild26DpQw;
                        if (hs_wild26DpQw.notEvaluated) {
                            hs_wild426DpW0 = hs_wild26DpQw.hscall();
                        }
                        var hs_rb1026DpQG = hs_wild426DpW0.data[0];
                        var hs_rb1126DpQH = hs_wild426DpW0.data[1];
                        var hs_ds226DpQI = hs_wild426DpW0.data[2];
                        var hs_rb1226DpQJ = hs_wild426DpW0.data[3];
                        var hs_rb1426DpQL = hs_wild426DpW0.data[5];
                        var hs_tpl26DpVZ = hs_ir126DpQf;
                        if (hs_ir126DpQf.notEvaluated) {
                            hs_tpl26DpVZ = hs_ir126DpQf.hscall();
                        }
                        var hs_tpl126DpQK = hs_tpl26DpVZ.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb1026DpQG, hs_rb1126DpQH, hs_ds226DpQI, hs_rb1226DpQJ, hs_tpl126DpQK, hs_rb1426DpQL];
                        return $res;
                    case 2:
                        var hs_wild426DpW4 = hs_wild26DpQw;
                        if (hs_wild26DpQw.notEvaluated) {
                            hs_wild426DpW4 = hs_wild26DpQw.hscall();
                        }
                        var hs_rb1026DpQT = hs_wild426DpW4.data[0];
                        var hs_rb1126DpQU = hs_wild426DpW4.data[1];
                        var hs_ds226DpQV = hs_wild426DpW4.data[2];
                        var hs_rb1226DpQW = hs_wild426DpW4.data[3];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb1026DpQT, hs_rb1126DpQU, hs_ds226DpQV, hs_rb1226DpQW, 0, 0];
                        return $res;
                    }
                };
                var hs_sat26DpW8 = new $hs.Data(1);
                hs_sat26DpW8.data = [hs_sat26DpW7, hs_sat26DpW2];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DpW8);
            }
        };
        var hs_sat26DpW9 = new $hs.Data(1);
        hs_sat26DpW9.data = [hs_rb926DpRi];
        var hs_sat26DpWa = new $hs.Data(1);
        hs_sat26DpWa.data = [hs_rb326DpRg];
        return hs_loop26DpQq.hscall(hs_sat26DpWa, hs_sat26DpW9);
    };
    hs_sat26DpWc.evaluateOnce = function () {
        var hs_sat26DpWb = new $hs.Thunk();
        hs_sat26DpWb.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziBase.hs_const, hs_sat26DpWb);
    };
    hs_sat26DpWd.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_sat26DpWe.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_sat26DpWf.data = [$hs.modules.GHCziIOziEncodingziLatin1.hs_latin1zudecode, hs_sat26DpWe, hs_sat26DpWd, hs_sat26DpWc];
    hs_latin1zuDF25tsUP.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DpWf);
    };
    this.hs_latin1zuencode.evaluate = function (hs_input26DpRr, hs_output26DpRG) {
        var hs_wild26DpSq = hs_input26DpRr;
        if (hs_input26DpRr.notEvaluated) {
            hs_wild26DpSq = hs_input26DpRr.hscall();
        }
        var hs_rb26DpRA = hs_wild26DpSq.data[0];
        var hs_rb126DpRB = hs_wild26DpSq.data[1];
        var hs_rb326DpTa = hs_wild26DpSq.data[4];
        var hs_rb426DpRE = hs_wild26DpSq.data[5];
        var hs_iraw26DpRC = new $hs.Data(1);
        hs_iraw26DpRC.data = [hs_rb26DpRA, hs_rb126DpRB];
        var hs_iw26DpRF = new $hs.Data(1);
        hs_iw26DpRF.data = [hs_rb426DpRE];
        var hs_wild126DpSS = hs_output26DpRG;
        if (hs_output26DpRG.notEvaluated) {
            hs_wild126DpSS = hs_output26DpRG.hscall();
        }
        var hs_rb526DpRP = hs_wild126DpSS.data[0];
        var hs_rb626DpRQ = hs_wild126DpSS.data[1];
        var hs_rb726DpRT = hs_wild126DpSS.data[3];
        var hs_rb926DpTc = hs_wild126DpSS.data[5];
        var hs_oraw26DpRR = new $hs.Data(1);
        hs_oraw26DpRR.data = [hs_rb526DpRP, hs_rb626DpRQ];
        var hs_os26DpRU = new $hs.Data(1);
        hs_os26DpRU.data = [hs_rb726DpRT];
        var hs_loop26DpSl = new $hs.Func(2);
        hs_loop26DpSl.evaluate = function (hs_ir26DpRY, hs_ow26DpS1) {
            var hs_ir126DpS6 = hs_ir26DpRY;
            if (hs_ir26DpRY.notEvaluated) {
                hs_ir126DpS6 = hs_ir26DpRY.hscall();
            }
            var hs_ow126DpS4 = hs_ow26DpS1;
            if (hs_ow26DpS1.notEvaluated) {
                hs_ow126DpS4 = hs_ow26DpS1.hscall();
            }
            var hs_sat26DpWm = new $hs.Thunk();
            hs_sat26DpWm.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ir126DpS6, hs_iw26DpRF);
            };
            var hs_sat26DpWp = new $hs.Thunk();
            hs_sat26DpWp.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ow126DpS4, hs_os26DpRU);
            };
            var hs_wild226DpWo = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DpWp, hs_sat26DpWm);
            switch (hs_wild226DpWo.tag) {
            case 1:
                var hs_sat26DpWw = new $hs.Func(1);
                hs_sat26DpWw.evaluate = function (hs_ds226DpSb) {
                    var hs_wild326DpWn = hs_ds226DpSb;
                    if (hs_ds226DpSb.notEvaluated) {
                        hs_wild326DpWn = hs_ds226DpSb.hscall();
                    }
                    var hs_c26DpSf = hs_wild326DpWn.data[0];
                    var hs_irzq26DpSj = hs_wild326DpWn.data[1];
                    var hs_sat26DpWs = new $hs.Thunk();
                    hs_sat26DpWs.evaluateOnce = function () {
                        var hs_sat26DpWr = new $hs.Thunk();
                        hs_sat26DpWr.evaluateOnce = function () {
                            var hs_sat26DpWq = new $hs.Data(1);
                            hs_sat26DpWq.data = [1];
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126DpS4, hs_sat26DpWq);
                        };
                        return hs_loop26DpSl.hscall(hs_irzq26DpSj, hs_sat26DpWr);
                    };
                    var hs_sat26DpWv = new $hs.Thunk();
                    hs_sat26DpWv.evaluateOnce = function () {
                        var hs_sat26DpWu = new $hs.Thunk();
                        hs_sat26DpWu.evaluateOnce = function () {
                            var hs_sat26DpWt = new $hs.Thunk();
                            hs_sat26DpWt.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DpSf);
                            };
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DpWt);
                        };
                        return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26DpRR, hs_ow126DpS4, hs_sat26DpWu);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DpWv, hs_sat26DpWs);
                };
                var hs_sat26DpWx = new $hs.Thunk();
                hs_sat26DpWx.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziBuffer.hs_readCharBuf.hscall(hs_iraw26DpRC, hs_ir126DpS6);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DpWx, hs_sat26DpWw);
            case 2:
                var hs_sat26DpWE = new $hs.Thunk();
                hs_sat26DpWE.evaluateOnce = function () {
                    var hs_wild326DpWz = hs_wild126DpSS;
                    if (hs_wild126DpSS.notEvaluated) {
                        hs_wild326DpWz = hs_wild126DpSS.hscall();
                    }
                    var hs_rb1026DpT2 = hs_wild326DpWz.data[0];
                    var hs_rb1126DpT3 = hs_wild326DpWz.data[1];
                    var hs_ds226DpT4 = hs_wild326DpWz.data[2];
                    var hs_rb1226DpT5 = hs_wild326DpWz.data[3];
                    var hs_rb1326DpT6 = hs_wild326DpWz.data[4];
                    var hs_tpl26DpWy = hs_ow126DpS4;
                    if (hs_ow126DpS4.notEvaluated) {
                        hs_tpl26DpWy = hs_ow126DpS4.hscall();
                    }
                    var hs_tpl126DpT7 = hs_tpl26DpWy.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026DpT2, hs_rb1126DpT3, hs_ds226DpT4, hs_rb1226DpT5, hs_rb1326DpT6, hs_tpl126DpT7];
                    return $res;
                };
                var hs_sat26DpWJ = new $hs.Thunk();
                hs_sat26DpWJ.evaluateOnce = function () {
                    var hs_wild326DpWD = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_ir126DpS6, hs_iw26DpRF);
                    switch (hs_wild326DpWD.tag) {
                    case 1:
                        var hs_wild426DpWC = hs_wild26DpSq;
                        if (hs_wild26DpSq.notEvaluated) {
                            hs_wild426DpWC = hs_wild26DpSq.hscall();
                        }
                        var hs_rb1026DpSA = hs_wild426DpWC.data[0];
                        var hs_rb1126DpSB = hs_wild426DpWC.data[1];
                        var hs_ds226DpSC = hs_wild426DpWC.data[2];
                        var hs_rb1226DpSD = hs_wild426DpWC.data[3];
                        var hs_rb1426DpSF = hs_wild426DpWC.data[5];
                        var hs_tpl26DpWB = hs_ir126DpS6;
                        if (hs_ir126DpS6.notEvaluated) {
                            hs_tpl26DpWB = hs_ir126DpS6.hscall();
                        }
                        var hs_tpl126DpSE = hs_tpl26DpWB.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb1026DpSA, hs_rb1126DpSB, hs_ds226DpSC, hs_rb1226DpSD, hs_tpl126DpSE, hs_rb1426DpSF];
                        return $res;
                    case 2:
                        var hs_wild426DpWG = hs_wild26DpSq;
                        if (hs_wild26DpSq.notEvaluated) {
                            hs_wild426DpWG = hs_wild26DpSq.hscall();
                        }
                        var hs_rb1026DpSN = hs_wild426DpWG.data[0];
                        var hs_rb1126DpSO = hs_wild426DpWG.data[1];
                        var hs_ds226DpSP = hs_wild426DpWG.data[2];
                        var hs_rb1226DpSQ = hs_wild426DpWG.data[3];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_rb1026DpSN, hs_rb1126DpSO, hs_ds226DpSP, hs_rb1226DpSQ, 0, 0];
                        return $res;
                    }
                };
                var hs_sat26DpWK = new $hs.Data(1);
                hs_sat26DpWK.data = [hs_sat26DpWJ, hs_sat26DpWE];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DpWK);
            }
        };
        var hs_sat26DpWL = new $hs.Data(1);
        hs_sat26DpWL.data = [hs_rb926DpTc];
        var hs_sat26DpWM = new $hs.Data(1);
        hs_sat26DpWM.data = [hs_rb326DpTa];
        return hs_loop26DpSl.hscall(hs_sat26DpWM, hs_sat26DpWL);
    };
    hs_sat26DpWO.evaluateOnce = function () {
        var hs_sat26DpWN = new $hs.Thunk();
        hs_sat26DpWN.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziBase.hs_const, hs_sat26DpWN);
    };
    hs_sat26DpWP.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_sat26DpWQ.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_sat26DpWR.data = [$hs.modules.GHCziIOziEncodingziLatin1.hs_latin1zuencode, hs_sat26DpWQ, hs_sat26DpWP, hs_sat26DpWO];
    hs_latin1zuEF25tsUR.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DpWR);
    };
    hs_a25v1n4.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ISO8859-1\x00");
    };
    this.hs_latin1.data = [hs_a25v1n4, hs_latin1zuDF25tsUP, hs_latin1zuEF25tsUR];
    this.hs_latin1zucheckedzuencode.evaluate = function (hs_input26DpTn, hs_output26DpTF) {
        var hs_wild26DpU7 = hs_input26DpTn;
        if (hs_input26DpTn.notEvaluated) {
            hs_wild26DpU7 = hs_input26DpTn.hscall();
        }
        var hs_rb26DpTw = hs_wild26DpU7.data[0];
        var hs_rb126DpTx = hs_wild26DpU7.data[1];
        var hs_rb326DpTA = hs_wild26DpU7.data[4];
        var hs_rb426DpTD = hs_wild26DpU7.data[5];
        var hs_iraw26DpTy = new $hs.Data(1);
        hs_iraw26DpTy.data = [hs_rb26DpTw, hs_rb126DpTx];
        var hs_ir026DpTB = new $hs.Data(1);
        hs_ir026DpTB.data = [hs_rb326DpTA];
        var hs_iw26DpTE = new $hs.Data(1);
        hs_iw26DpTE.data = [hs_rb426DpTD];
        var hs_wild126DpUz = hs_output26DpTF;
        if (hs_output26DpTF.notEvaluated) {
            hs_wild126DpUz = hs_output26DpTF.hscall();
        }
        var hs_rb526DpTO = hs_wild126DpUz.data[0];
        var hs_rb626DpTP = hs_wild126DpUz.data[1];
        var hs_rb726DpTS = hs_wild126DpUz.data[3];
        var hs_rb926DpVt = hs_wild126DpUz.data[5];
        var hs_oraw26DpTQ = new $hs.Data(1);
        hs_oraw26DpTQ.data = [hs_rb526DpTO, hs_rb626DpTP];
        var hs_os26DpTT = new $hs.Data(1);
        hs_os26DpTT.data = [hs_rb726DpTS];
        var hs_done26DpUS = new $hs.Func(3);
        hs_done26DpUS.evaluate = function (hs_zddMonad26DpU4, hs_ir26DpTY, hs_ow26DpU1) {
            var hs_ir126DpU5 = hs_ir26DpTY;
            if (hs_ir26DpTY.notEvaluated) {
                hs_ir126DpU5 = hs_ir26DpTY.hscall();
            }
            var hs_ow126DpUH = hs_ow26DpU1;
            if (hs_ow26DpU1.notEvaluated) {
                hs_ow126DpUH = hs_ow26DpU1.hscall();
            }
            var hs_sat26DpX4 = new $hs.Thunk();
            hs_sat26DpX4.evaluateOnce = function () {
                var hs_wild226DpWX = hs_wild126DpUz;
                if (hs_wild126DpUz.notEvaluated) {
                    hs_wild226DpWX = hs_wild126DpUz.hscall();
                }
                var hs_rb1026DpUK = hs_wild226DpWX.data[0];
                var hs_rb1126DpUL = hs_wild226DpWX.data[1];
                var hs_ds226DpUM = hs_wild226DpWX.data[2];
                var hs_rb1226DpUN = hs_wild226DpWX.data[3];
                var hs_rb1326DpUO = hs_wild226DpWX.data[4];
                var hs_tpl26DpWW = hs_ow126DpUH;
                if (hs_ow126DpUH.notEvaluated) {
                    hs_tpl26DpWW = hs_ow126DpUH.hscall();
                }
                var hs_tpl126DpUP = hs_tpl26DpWW.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb1026DpUK, hs_rb1126DpUL, hs_ds226DpUM, hs_rb1226DpUN, hs_rb1326DpUO, hs_tpl126DpUP];
                return $res;
            };
            var hs_sat26DpX9 = new $hs.Thunk();
            hs_sat26DpX9.evaluateOnce = function () {
                var hs_wild226DpX3 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_ir126DpU5, hs_iw26DpTE);
                switch (hs_wild226DpX3.tag) {
                case 1:
                    var hs_wild326DpX2 = hs_wild26DpU7;
                    if (hs_wild26DpU7.notEvaluated) {
                        hs_wild326DpX2 = hs_wild26DpU7.hscall();
                    }
                    var hs_rb1026DpUh = hs_wild326DpX2.data[0];
                    var hs_rb1126DpUi = hs_wild326DpX2.data[1];
                    var hs_ds226DpUj = hs_wild326DpX2.data[2];
                    var hs_rb1226DpUk = hs_wild326DpX2.data[3];
                    var hs_rb1426DpUm = hs_wild326DpX2.data[5];
                    var hs_tpl26DpX1 = hs_ir126DpU5;
                    if (hs_ir126DpU5.notEvaluated) {
                        hs_tpl26DpX1 = hs_ir126DpU5.hscall();
                    }
                    var hs_tpl126DpUl = hs_tpl26DpX1.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026DpUh, hs_rb1126DpUi, hs_ds226DpUj, hs_rb1226DpUk, hs_tpl126DpUl, hs_rb1426DpUm];
                    return $res;
                case 2:
                    var hs_wild326DpX6 = hs_wild26DpU7;
                    if (hs_wild26DpU7.notEvaluated) {
                        hs_wild326DpX6 = hs_wild26DpU7.hscall();
                    }
                    var hs_rb1026DpUu = hs_wild326DpX6.data[0];
                    var hs_rb1126DpUv = hs_wild326DpX6.data[1];
                    var hs_ds226DpUw = hs_wild326DpX6.data[2];
                    var hs_rb1226DpUx = hs_wild326DpX6.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026DpUu, hs_rb1126DpUv, hs_ds226DpUw, hs_rb1226DpUx, 0, 0];
                    return $res;
                }
            };
            var hs_sat26DpXa = new $hs.Data(1);
            hs_sat26DpXa.data = [hs_sat26DpX9, hs_sat26DpX4];
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26DpU4, hs_sat26DpXa);
        };
        var hs_loop26DpVp = new $hs.Func(2);
        hs_loop26DpVp.evaluate = function (hs_ir26DpUW, hs_ow26DpUZ) {
            var hs_ir126DpV3 = hs_ir26DpUW;
            if (hs_ir26DpUW.notEvaluated) {
                hs_ir126DpV3 = hs_ir26DpUW.hscall();
            }
            var hs_ow126DpV5 = hs_ow26DpUZ;
            if (hs_ow26DpUZ.notEvaluated) {
                hs_ow126DpV5 = hs_ow26DpUZ.hscall();
            }
            var hs_invalid26DpV6 = new $hs.Thunk();
            hs_invalid26DpV6.evaluateOnce = function () {
                var hs_wild226DpXb = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ir126DpV3, hs_ir026DpTB);
                switch (hs_wild226DpXb.tag) {
                case 1:
                    if (hs_ioezuencodingError25tsV3.notEvaluated) {
                        return hs_ioezuencodingError25tsV3.hscall();
                    } else {
                        return hs_ioezuencodingError25tsV3;
                    }
                case 2:
                    return hs_done26DpUS.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ir126DpV3, hs_ow126DpV5);
                }
            };
            var hs_sat26DpXe = new $hs.Thunk();
            hs_sat26DpXe.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ir126DpV3, hs_iw26DpTE);
            };
            var hs_sat26DpXh = new $hs.Thunk();
            hs_sat26DpXh.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_ow126DpV5, hs_os26DpTT);
            };
            var hs_wild226DpXg = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DpXh, hs_sat26DpXe);
            switch (hs_wild226DpXg.tag) {
            case 1:
                var hs_sat26DpXr = new $hs.Func(1);
                hs_sat26DpXr.evaluate = function (hs_ds226DpVc) {
                    var hs_wild326DpXf = hs_ds226DpVc;
                    if (hs_ds226DpVc.notEvaluated) {
                        hs_wild326DpXf = hs_ds226DpVc.hscall();
                    }
                    var hs_c26DpVg = hs_wild326DpXf.data[0];
                    var hs_irzq26DpVn = hs_wild326DpXf.data[1];
                    var hs_sat26DpXi = new $hs.Data(1);
                    hs_sat26DpXi.data = [255];
                    var hs_sat26DpXk = new $hs.Thunk();
                    hs_sat26DpXk.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DpVg);
                    };
                    var hs_wild426DpXj = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DpXk, hs_sat26DpXi);
                    switch (hs_wild426DpXj.tag) {
                    case 1:
                        var hs_sat26DpXn = new $hs.Thunk();
                        hs_sat26DpXn.evaluateOnce = function () {
                            var hs_sat26DpXm = new $hs.Thunk();
                            hs_sat26DpXm.evaluateOnce = function () {
                                var hs_sat26DpXl = new $hs.Data(1);
                                hs_sat26DpXl.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126DpV5, hs_sat26DpXl);
                            };
                            return hs_loop26DpVp.hscall(hs_irzq26DpVn, hs_sat26DpXm);
                        };
                        var hs_sat26DpXq = new $hs.Thunk();
                        hs_sat26DpXq.evaluateOnce = function () {
                            var hs_sat26DpXp = new $hs.Thunk();
                            hs_sat26DpXp.evaluateOnce = function () {
                                var hs_sat26DpXo = new $hs.Thunk();
                                hs_sat26DpXo.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DpVg);
                                };
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DpXo);
                            };
                            return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26DpTQ, hs_ow126DpV5, hs_sat26DpXp);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DpXq, hs_sat26DpXn);
                    case 2:
                        if (hs_invalid26DpV6.notEvaluated) {
                            return hs_invalid26DpV6.hscall();
                        } else {
                            return hs_invalid26DpV6;
                        }
                    }
                };
                var hs_sat26DpXs = new $hs.Thunk();
                hs_sat26DpXs.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziBuffer.hs_readCharBuf.hscall(hs_iraw26DpTy, hs_ir126DpV3);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DpXs, hs_sat26DpXr);
            case 2:
                return hs_done26DpUS.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ir126DpV3, hs_ow126DpV5);
            }
        };
        var hs_sat26DpXt = new $hs.Data(1);
        hs_sat26DpXt.data = [hs_rb926DpVt];
        return hs_loop26DpVp.hscall(hs_ir026DpTB, hs_sat26DpXt);
    };
    hs_sat26DpXv.evaluateOnce = function () {
        var hs_sat26DpXu = new $hs.Thunk();
        hs_sat26DpXu.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziBase.hs_const, hs_sat26DpXu);
    };
    hs_sat26DpXw.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_sat26DpXx.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_sat26DpXy.data = [$hs.modules.GHCziIOziEncodingziLatin1.hs_latin1zucheckedzuencode, hs_sat26DpXx, hs_sat26DpXw, hs_sat26DpXv];
    hs_latin1zucheckedzuEF25tsUV.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DpXy);
    };
    hs_a125v1pl.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ISO8859-1(checked)\x00");
    };
    this.hs_latin1zuchecked.data = [hs_a125v1pl, hs_latin1zuDF25tsUP, hs_latin1zucheckedzuEF25tsUV];
};
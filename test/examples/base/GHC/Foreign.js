
$hs.modules.GHCziForeign = new $hs.Module();
$hs.modules.GHCziForeign.dependencies = ["GHC.Types", "GHC.CString", "GHC.Unit", "GHC.Integer", "Control.Monad", "Data.Maybe", "Data.Tuple", "GHC.Base", "GHC.Num", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.IO", "GHC.ForeignPtr", "GHC.IO.Buffer", "GHC.IO.Encoding.Failure", "GHC.IO.Encoding.Types", "GHC.IO.Exception", "GHC.Ptr", "GHC.Word", "Foreign.C.Types", "Foreign.Marshal.Alloc", "Foreign.Marshal.Array", "Foreign.Storable"];
$hs.modules.GHCziForeign.initBeforeDependencies = function () {
    this.hs_peekCStringLen = new $hs.Func(2);
    this.hs_peekCString = new $hs.Func(2);
    this.hs_withCString = new $hs.Func(3);
    this.hs_charIsRepresentable = new $hs.Func(2);
    this.hs_withCStringLen = new $hs.Func(3);
    this.hs_newCString = new $hs.Func(1);
    this.hs_newCStringLen = new $hs.Func(2);
    this.hs_peekCStringLen.notEvaluated = true;
    this.hs_peekCStringLen.evaluate = function (hs_ds26CZgF, hs_ds126CZgK) {
        $hs.modules.GHCziForeign.loadDependencies();
        return this.evaluate(hs_ds26CZgF, hs_ds126CZgK);
    };
    this.hs_peekCString.notEvaluated = true;
    this.hs_peekCString.evaluate = function (hs_enc26CZkg, hs_cp26CZkd) {
        $hs.modules.GHCziForeign.loadDependencies();
        return this.evaluate(hs_enc26CZkg, hs_cp26CZkd);
    };
    this.hs_withCString.notEvaluated = true;
    this.hs_withCString.evaluate = function (hs_enc26CZno, hs_s26CZnp, hs_act26CZnx) {
        $hs.modules.GHCziForeign.loadDependencies();
        return this.evaluate(hs_enc26CZno, hs_s26CZnp, hs_act26CZnx);
    };
    this.hs_charIsRepresentable.notEvaluated = true;
    this.hs_charIsRepresentable.evaluate = function (hs_enc26CZnJ, hs_c26CZnD) {
        $hs.modules.GHCziForeign.loadDependencies();
        return this.evaluate(hs_enc26CZnJ, hs_c26CZnD);
    };
    this.hs_withCStringLen.notEvaluated = true;
    this.hs_withCStringLen.evaluate = function (hs_enc26CZo2, hs_eta26CZoa, hs_eta126CZoF) {
        $hs.modules.GHCziForeign.loadDependencies();
        return this.evaluate(hs_enc26CZo2, hs_eta26CZoa, hs_eta126CZoF);
    };
    this.hs_newCString.notEvaluated = true;
    this.hs_newCString.evaluate = function (hs_enc26CZqg) {
        $hs.modules.GHCziForeign.loadDependencies();
        return this.evaluate(hs_enc26CZqg);
    };
    this.hs_newCStringLen.notEvaluated = true;
    this.hs_newCStringLen.evaluate = function (hs_enc26CZqk, hs_eta26CZqs) {
        $hs.modules.GHCziForeign.loadDependencies();
        return this.evaluate(hs_enc26CZqk, hs_eta26CZqs);
    };
};
$hs.modules.GHCziForeign.initAfterDependencies = function () {
    this.hs_peekCStringLen.notEvaluated = false;
    this.hs_peekCString.notEvaluated = false;
    this.hs_withCString.notEvaluated = false;
    this.hs_charIsRepresentable.notEvaluated = false;
    this.hs_withCStringLen.notEvaluated = false;
    this.hs_newCString.notEvaluated = false;
    this.hs_newCStringLen.notEvaluated = false;
    var hs_zddEq25uAKl = new $hs.Thunk();
    var hs_sat26CZrs = new $hs.Thunk();
    var hs_putDebugMsg25tnnC = new $hs.Thunk();
    var hs_tryFillBufferAndCall25tnnP = new $hs.Func(6);
    var hs_sat26CZtG = new $hs.Thunk();
    var hs_nUL25tnnK = new $hs.Thunk();
    var hs_cCharSizze25tnnL = new $hs.Thunk();
    var hs_withEncodedCString25tnnN = new $hs.Func(4);
    var hs_newEncodedCString25tnnO = new $hs.Func(3);
    hs_zddEq25uAKl.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdfEqZMZN.hscall($hs.modules.GHCziClasses.hs_zdfEqChar);
    };
    hs_sat26CZrs.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_putDebugMsg25tnnC.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_const.hscall(hs_sat26CZrs);
    };
    this.hs_peekCStringLen.evaluate = function (hs_ds26CZgF, hs_ds126CZgK) {
        var hs_wild26CZrv = hs_ds26CZgF;
        if (hs_ds26CZgF.notEvaluated) {
            hs_wild26CZrv = hs_ds26CZgF.hscall();
        }
        var hs_ds326CZgO = hs_wild26CZrv.data[1];
        var hs_wild126CZru = hs_ds126CZgK;
        if (hs_ds126CZgK.notEvaluated) {
            hs_wild126CZru = hs_ds126CZgK.hscall();
        }
        var hs_p26CZh0 = hs_wild126CZru.data[0];
        var hs_szzzubytes26CZgS = hs_wild126CZru.data[1];
        var hs_sat26CZry = new $hs.Func(1);
        hs_sat26CZry.evaluate = function (hs_decoder26CZhc) {
            var hs_chunkzusizze26CZgU = new $hs.Thunk();
            hs_chunkzusizze26CZgU.evaluateOnce = function () {
                var hs_sat26CZsO = new $hs.Data(1);
                hs_sat26CZsO.data = [1];
                return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_szzzubytes26CZgS, hs_sat26CZsO);
            };
            var hs_sat26CZrA = new $hs.Func(1);
            hs_sat26CZrA.evaluate = function (hs_from026CZiD) {
                var hs_sat26CZrH = new $hs.Func(1);
                hs_sat26CZrH.evaluate = function (hs_to26CZhe) {
                    var hs_zddShow26CZh8 = new $hs.Thunk();
                    hs_zddShow26CZh8.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zdp2Num.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
                    };
                    var hs_go26CZin = new $hs.Func(2);
                    hs_go26CZin.evaluate = function (hs_iteration26CZhp, hs_from26CZhd) {
                        var hs_sat26CZrK = new $hs.Func(1);
                        hs_sat26CZrK.evaluate = function (hs_ds526CZhh) {
                            var hs_wild226CZrM = hs_ds526CZhh;
                            if (hs_ds526CZhh.notEvaluated) {
                                hs_wild226CZrM = hs_ds526CZhh.hscall();
                            }
                            var hs_why26CZht = hs_wild226CZrM.data[0];
                            var hs_fromzq26CZhm = hs_wild226CZrM.data[1];
                            var hs_tozq26CZhA = hs_wild226CZrM.data[2];
                            var hs_wild326CZrN = $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_fromzq26CZhm);
                            switch (hs_wild326CZrN.tag) {
                            case 1:
                                var hs_sat26CZrU = new $hs.Thunk();
                                hs_sat26CZrU.evaluateOnce = function () {
                                    var hs_sat26CZs4 = new $hs.Func(1);
                                    hs_sat26CZs4.evaluate = function (hs_ds626CZhE) {
                                        var hs_wild426CZs8 = hs_ds626CZhE;
                                        if (hs_ds626CZhE.notEvaluated) {
                                            hs_wild426CZs8 = hs_ds626CZhE.hscall();
                                        }
                                        var hs_fromzqzq26CZhP = hs_wild426CZs8.data[0];
                                        var hs_tozqzq26CZi4 = hs_wild426CZs8.data[1];
                                        var hs_sat26CZs9 = new $hs.Thunk();
                                        hs_sat26CZs9.evaluateOnce = function () {
                                            var hs_sat26CZso = new $hs.Thunk();
                                            hs_sat26CZso.evaluateOnce = function () {
                                                var hs_sat26CZsD = new $hs.Func(1);
                                                hs_sat26CZsD.evaluate = function (hs_tozuchars26CZih) {
                                                    var hs_sat26CZsI = new $hs.Thunk();
                                                    hs_sat26CZsI.evaluateOnce = function () {
                                                        var hs_sat26CZsL = new $hs.Thunk();
                                                        hs_sat26CZsL.evaluateOnce = function () {
                                                            var hs_sat26CZsM = new $hs.Thunk();
                                                            hs_sat26CZsM.evaluateOnce = function () {
                                                                var hs_sat26CZsN = new $hs.Thunk();
                                                                hs_sat26CZsN.evaluateOnce = function () {
                                                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                                                };
                                                                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26CZsN);
                                                            };
                                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_iteration26CZhp, hs_sat26CZsM);
                                                        };
                                                        return hs_go26CZin.hscall(hs_sat26CZsL, hs_fromzqzq26CZhP);
                                                    };
                                                    var hs_sat26CZsH = new $hs.Thunk();
                                                    hs_sat26CZsH.evaluateOnce = function () {
                                                        var hs_sat26CZsJ = new $hs.Thunk();
                                                        hs_sat26CZsJ.evaluateOnce = function () {
                                                            var hs_sat26CZsK = new $hs.Thunk();
                                                            hs_sat26CZsK.evaluateOnce = function () {
                                                                return $hs.modules.GHCziBase.hs_map.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_desurrogatifyRoundtripCharacter, hs_tozuchars26CZih);
                                                            };
                                                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZsK);
                                                        };
                                                        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26CZsJ);
                                                    };
                                                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZsH, hs_sat26CZsI);
                                                };
                                                var hs_sat26CZsC = new $hs.Thunk();
                                                hs_sat26CZsC.evaluateOnce = function () {
                                                    var hs_sat26CZsF = new $hs.Thunk();
                                                    hs_sat26CZsF.evaluateOnce = function () {
                                                        var hs_sat26CZsG = new $hs.Thunk();
                                                        hs_sat26CZsG.evaluateOnce = function () {
                                                            return $hs.modules.GHCziIOziBuffer.hs_bufferElems.hscall(hs_tozqzq26CZi4);
                                                        };
                                                        return $hs.modules.ForeignziMarshalziArray.hs_peekArray.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_sat26CZsG);
                                                    };
                                                    var hs_sat26CZsE = new $hs.Thunk();
                                                    hs_sat26CZsE.evaluateOnce = function () {
                                                        return $hs.modules.GHCziIOziBuffer.hs_withBuffer.hscall(hs_tozqzq26CZi4);
                                                    };
                                                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZsE, hs_sat26CZsF);
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZsC, hs_sat26CZsD);
                                            };
                                            var hs_sat26CZsn = new $hs.Thunk();
                                            hs_sat26CZsn.evaluateOnce = function () {
                                                var hs_sat26CZsp = new $hs.Thunk();
                                                hs_sat26CZsp.evaluateOnce = function () {
                                                    var hs_sat26CZsr = new $hs.Thunk();
                                                    hs_sat26CZsr.evaluateOnce = function () {
                                                        var hs_sat26CZst = new $hs.Thunk();
                                                        hs_sat26CZst.evaluateOnce = function () {
                                                            var hs_sat26CZsv = new $hs.Thunk();
                                                            hs_sat26CZsv.evaluateOnce = function () {
                                                                var hs_sat26CZsy = new $hs.Thunk();
                                                                hs_sat26CZsy.evaluateOnce = function () {
                                                                    var hs_sat26CZsA = new $hs.Thunk();
                                                                    hs_sat26CZsA.evaluateOnce = function () {
                                                                        return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_tozqzq26CZi4);
                                                                    };
                                                                    var hs_sat26CZsB = new $hs.Data(1);
                                                                    hs_sat26CZsB.data = [" "];
                                                                    var hs_sat26CZsz = new $hs.Data(2);
                                                                    hs_sat26CZsz.data = [hs_sat26CZsB, $hs.modules.GHCziTypes.hs_ZMZN];
                                                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZsz, hs_sat26CZsA);
                                                                };
                                                                var hs_sat26CZsx = new $hs.Thunk();
                                                                hs_sat26CZsx.evaluateOnce = function () {
                                                                    return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_tozq26CZhA);
                                                                };
                                                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZsx, hs_sat26CZsy);
                                                            };
                                                            var hs_sat26CZsw = new $hs.Data(1);
                                                            hs_sat26CZsw.data = [" "];
                                                            var hs_sat26CZsu = new $hs.Data(2);
                                                            hs_sat26CZsu.data = [hs_sat26CZsw, $hs.modules.GHCziTypes.hs_ZMZN];
                                                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZsu, hs_sat26CZsv);
                                                        };
                                                        var hs_sat26CZss = new $hs.Thunk();
                                                        hs_sat26CZss.evaluateOnce = function () {
                                                            return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_to26CZhe);
                                                        };
                                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZss, hs_sat26CZst);
                                                    };
                                                    var hs_sat26CZsq = new $hs.Thunk();
                                                    hs_sat26CZsq.evaluateOnce = function () {
                                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("peekEncodedCString: to \x00");
                                                    };
                                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZsq, hs_sat26CZsr);
                                                };
                                                return hs_putDebugMsg25tnnC.hscall(hs_sat26CZsp);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZsn, hs_sat26CZso);
                                        };
                                        var hs_sat26CZs7 = new $hs.Thunk();
                                        hs_sat26CZs7.evaluateOnce = function () {
                                            var hs_sat26CZsa = new $hs.Thunk();
                                            hs_sat26CZsa.evaluateOnce = function () {
                                                var hs_sat26CZsc = new $hs.Thunk();
                                                hs_sat26CZsc.evaluateOnce = function () {
                                                    var hs_sat26CZse = new $hs.Thunk();
                                                    hs_sat26CZse.evaluateOnce = function () {
                                                        var hs_sat26CZsg = new $hs.Thunk();
                                                        hs_sat26CZsg.evaluateOnce = function () {
                                                            var hs_sat26CZsj = new $hs.Thunk();
                                                            hs_sat26CZsj.evaluateOnce = function () {
                                                                var hs_sat26CZsl = new $hs.Thunk();
                                                                hs_sat26CZsl.evaluateOnce = function () {
                                                                    return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_fromzqzq26CZhP);
                                                                };
                                                                var hs_sat26CZsm = new $hs.Data(1);
                                                                hs_sat26CZsm.data = [" "];
                                                                var hs_sat26CZsk = new $hs.Data(2);
                                                                hs_sat26CZsk.data = [hs_sat26CZsm, $hs.modules.GHCziTypes.hs_ZMZN];
                                                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZsk, hs_sat26CZsl);
                                                            };
                                                            var hs_sat26CZsi = new $hs.Thunk();
                                                            hs_sat26CZsi.evaluateOnce = function () {
                                                                return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_fromzq26CZhm);
                                                            };
                                                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZsi, hs_sat26CZsj);
                                                        };
                                                        var hs_sat26CZsh = new $hs.Data(1);
                                                        hs_sat26CZsh.data = [" "];
                                                        var hs_sat26CZsf = new $hs.Data(2);
                                                        hs_sat26CZsf.data = [hs_sat26CZsh, $hs.modules.GHCziTypes.hs_ZMZN];
                                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZsf, hs_sat26CZsg);
                                                    };
                                                    var hs_sat26CZsd = new $hs.Thunk();
                                                    hs_sat26CZsd.evaluateOnce = function () {
                                                        return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_from26CZhd);
                                                    };
                                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZsd, hs_sat26CZse);
                                                };
                                                var hs_sat26CZsb = new $hs.Thunk();
                                                hs_sat26CZsb.evaluateOnce = function () {
                                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("peekEncodedCString: from \x00");
                                                };
                                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZsb, hs_sat26CZsc);
                                            };
                                            return hs_putDebugMsg25tnnC.hscall(hs_sat26CZsa);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZs7, hs_sat26CZs9);
                                    };
                                    var hs_sat26CZs3 = new $hs.Thunk();
                                    hs_sat26CZs3.evaluateOnce = function () {
                                        var hs_wild426CZs6 = hs_why26CZht;
                                        if (hs_why26CZht.notEvaluated) {
                                            hs_wild426CZs6 = hs_why26CZht.hscall();
                                        }
                                        switch (hs_wild426CZs6.tag) {
                                        case 2:
                                            var hs_sat26CZs5 = new $hs.Data(1);
                                            hs_sat26CZs5.data = [hs_fromzq26CZhm, hs_tozq26CZhA];
                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZs5);
                                        default:
                                            return $hs.modules.GHCziIOziEncodingziTypes.hs_recover.hscall(hs_decoder26CZhc, hs_fromzq26CZhm, hs_tozq26CZhA);
                                        }
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZs3, hs_sat26CZs4);
                                };
                                var hs_sat26CZrT = new $hs.Thunk();
                                hs_sat26CZrT.evaluateOnce = function () {
                                    var hs_sat26CZrV = new $hs.Thunk();
                                    hs_sat26CZrV.evaluateOnce = function () {
                                        var hs_sat26CZrX = new $hs.Thunk();
                                        hs_sat26CZrX.evaluateOnce = function () {
                                            var hs_sat26CZrZ = new $hs.Thunk();
                                            hs_sat26CZrZ.evaluateOnce = function () {
                                                var hs_sat26CZs1 = new $hs.Thunk();
                                                hs_sat26CZs1.evaluateOnce = function () {
                                                    return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziIOziEncodingziTypes.hs_zdfShowCodingProgress, hs_why26CZht);
                                                };
                                                var hs_sat26CZs2 = new $hs.Data(1);
                                                hs_sat26CZs2.data = [" "];
                                                var hs_sat26CZs0 = new $hs.Data(2);
                                                hs_sat26CZs0.data = [hs_sat26CZs2, $hs.modules.GHCziTypes.hs_ZMZN];
                                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZs0, hs_sat26CZs1);
                                            };
                                            var hs_sat26CZrY = new $hs.Thunk();
                                            hs_sat26CZrY.evaluateOnce = function () {
                                                return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow26CZh8, hs_iteration26CZhp);
                                            };
                                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZrY, hs_sat26CZrZ);
                                        };
                                        var hs_sat26CZrW = new $hs.Thunk();
                                        hs_sat26CZrW.evaluateOnce = function () {
                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("peekEncodedCString: \x00");
                                        };
                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZrW, hs_sat26CZrX);
                                    };
                                    return hs_putDebugMsg25tnnC.hscall(hs_sat26CZrV);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZrT, hs_sat26CZrU);
                            case 2:
                                var hs_sat26CZrO = new $hs.Thunk();
                                hs_sat26CZrO.evaluateOnce = function () {
                                    var hs_sat26CZrR = new $hs.Thunk();
                                    hs_sat26CZrR.evaluateOnce = function () {
                                        var hs_sat26CZrS = new $hs.Thunk();
                                        hs_sat26CZrS.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziBuffer.hs_bufferElems.hscall(hs_tozq26CZhA);
                                        };
                                        return $hs.modules.ForeignziMarshalziArray.hs_peekArray.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_sat26CZrS);
                                    };
                                    var hs_sat26CZrQ = new $hs.Thunk();
                                    hs_sat26CZrQ.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziBuffer.hs_withBuffer.hscall(hs_tozq26CZhA);
                                    };
                                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZrQ, hs_sat26CZrR);
                                };
                                var hs_sat26CZrL = new $hs.Thunk();
                                hs_sat26CZrL.evaluateOnce = function () {
                                    var hs_sat26CZrP = new $hs.Thunk();
                                    hs_sat26CZrP.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_map.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_desurrogatifyRoundtripCharacter);
                                    };
                                    return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26CZrP);
                                };
                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZrL, hs_sat26CZrO);
                            }
                        };
                        var hs_sat26CZrJ = new $hs.Thunk();
                        hs_sat26CZrJ.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziEncodingziTypes.hs_encode.hscall(hs_decoder26CZhc, hs_from26CZhd, hs_to26CZhe);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZrJ, hs_sat26CZrK);
                    };
                    var hs_sat26CZrI = new $hs.Data(1);
                    hs_sat26CZrI.data = [0];
                    return hs_go26CZin.hscall(hs_sat26CZrI, hs_from026CZiD);
                };
                var hs_sat26CZrG = new $hs.Thunk();
                hs_sat26CZrG.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziBuffer.hs_newCharBuffer.hscall(hs_chunkzusizze26CZgU, $hs.modules.GHCziIOziBuffer.hs_WriteBuffer);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZrG, hs_sat26CZrH);
            };
            var hs_sat26CZrz = new $hs.Thunk();
            hs_sat26CZrz.evaluateOnce = function () {
                var hs_sat26CZrC = new $hs.Thunk();
                hs_sat26CZrC.evaluateOnce = function () {
                    var hs_sat26CZrF = new $hs.Thunk();
                    hs_sat26CZrF.evaluateOnce = function () {
                        return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_p26CZh0);
                    };
                    return $hs.modules.GHCziForeignPtr.hs_newForeignPtrzu.hscall(hs_sat26CZrF);
                };
                var hs_sat26CZrB = new $hs.Thunk();
                hs_sat26CZrB.evaluateOnce = function () {
                    var hs_sat26CZrD = new $hs.Func(1);
                    hs_sat26CZrD.evaluate = function (hs_fp26CZgW) {
                        var hs_sat26CZrE = new $hs.Thunk();
                        hs_sat26CZrE.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_emptyBuffer.hscall(hs_fp26CZgW, hs_szzzubytes26CZgS, $hs.modules.GHCziIOziBuffer.hs_ReadBuffer);
                        };
                        return $hs.modules.GHCziIOziBuffer.hs_bufferAdd.hscall(hs_szzzubytes26CZgS, hs_sat26CZrE);
                    };
                    return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26CZrD);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZrB, hs_sat26CZrC);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZrz, hs_sat26CZrA);
        };
        var hs_sat26CZrt = new $hs.Thunk();
        hs_sat26CZrt.evaluateOnce = function () {
            return $hs.modules.GHCziIO.hs_bracket.hscall(hs_ds326CZgO, $hs.modules.GHCziIOziEncodingziTypes.hs_close);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZrt, hs_sat26CZry);
    };
    hs_tryFillBufferAndCall25tnnP.evaluate = function (hs_encoder26CZiZ, hs_nullzuterminate26CZjE, hs_from026CZk4, hs_tozup26CZiN, hs_tozuszzzubytes26CZk6, hs_act26CZjW) {
        var hs_sat26CZsQ = new $hs.Func(1);
        hs_sat26CZsQ.evaluate = function (hs_tozufp26CZk5) {
            var hs_zddShow26CZiR = new $hs.Thunk();
            hs_zddShow26CZiR.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zdp2Num.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
            };
            var hs_go26CZjB = new $hs.Func(2);
            hs_go26CZjB.evaluate = function (hs_iteration26CZja, hs_ds26CZiV) {
                var hs_wild26CZsV = hs_ds26CZiV;
                if (hs_ds26CZiV.notEvaluated) {
                    hs_wild26CZsV = hs_ds26CZiV.hscall();
                }
                var hs_from26CZj0 = hs_wild26CZsV.data[0];
                var hs_to26CZj1 = hs_wild26CZsV.data[1];
                var hs_sat26CZsW = new $hs.Func(1);
                hs_sat26CZsW.evaluate = function (hs_ds126CZj4) {
                    var hs_wild126CZsY = hs_ds126CZj4;
                    if (hs_ds126CZj4.notEvaluated) {
                        hs_wild126CZsY = hs_ds126CZj4.hscall();
                    }
                    var hs_why26CZje = hs_wild126CZsY.data[0];
                    var hs_fromzq26CZjl = hs_wild126CZsY.data[1];
                    var hs_tozq26CZjx = hs_wild126CZsY.data[2];
                    var hs_sat26CZsZ = new $hs.Thunk();
                    hs_sat26CZsZ.evaluateOnce = function () {
                        var hs_wild226CZti = $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_fromzq26CZjl);
                        switch (hs_wild226CZti.tag) {
                        case 1:
                            var hs_wild326CZtA = hs_why26CZje;
                            if (hs_why26CZje.notEvaluated) {
                                hs_wild326CZtA = hs_why26CZje.hscall();
                            }
                            switch (hs_wild326CZtA.tag) {
                            case 2:
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.DataziMaybe.hs_Nothing);
                            default:
                                var hs_sat26CZtC = new $hs.Thunk();
                                hs_sat26CZtC.evaluateOnce = function () {
                                    var hs_sat26CZtE = new $hs.Thunk();
                                    hs_sat26CZtE.evaluateOnce = function () {
                                        var hs_sat26CZtF = new $hs.Thunk();
                                        hs_sat26CZtF.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26CZtF);
                                    };
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_iteration26CZja, hs_sat26CZtE);
                                };
                                var hs_sat26CZtD = new $hs.Func(1);
                                hs_sat26CZtD.evaluate = function (hs_eta1cW6l3) {
                                    return hs_go26CZjB.hscall(hs_sat26CZtC, hs_eta1cW6l3);
                                };
                                var hs_sat26CZtB = new $hs.Thunk();
                                hs_sat26CZtB.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziEncodingziTypes.hs_recover.hscall(hs_encoder26CZiZ, hs_fromzq26CZjl, hs_tozq26CZjx);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZtB, hs_sat26CZtD);
                            }
                        case 2:
                            var hs_sat26CZtj = new $hs.Thunk();
                            hs_sat26CZtj.evaluateOnce = function () {
                                var hs_sat26CZtz = new $hs.Data(1);
                                hs_sat26CZtz.data = [0];
                                var hs_sat26CZty = new $hs.Thunk();
                                hs_sat26CZty.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziBuffer.hs_bufferAvailable.hscall(hs_tozq26CZjx);
                                };
                                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26CZty, hs_sat26CZtz);
                            };
                            var hs_wild326CZtk = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_nullzuterminate26CZjE, hs_sat26CZtj);
                            switch (hs_wild326CZtk.tag) {
                            case 1:
                                var hs_bytes26CZjK = new $hs.Thunk();
                                hs_bytes26CZjK.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziBuffer.hs_bufferElems.hscall(hs_tozq26CZjx);
                                };
                                var hs_sat26CZtm = new $hs.Func(1);
                                hs_sat26CZtm.evaluate = function (hs_tozuptr26CZjO) {
                                    var hs_sat26CZto = new $hs.Thunk();
                                    hs_sat26CZto.evaluateOnce = function () {
                                        var hs_sat26CZtv = new $hs.Thunk();
                                        hs_sat26CZtv.evaluateOnce = function () {
                                            var hs_sat26CZtx = new $hs.Thunk();
                                            hs_sat26CZtx.evaluateOnce = function () {
                                                return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_tozuptr26CZjO);
                                            };
                                            var hs_sat26CZtw = new $hs.Data(1);
                                            hs_sat26CZtw.data = [hs_sat26CZtx, hs_bytes26CZjK];
                                            return hs_act26CZjW.hscall(hs_sat26CZtw);
                                        };
                                        var hs_sat26CZtu = new $hs.Thunk();
                                        hs_sat26CZtu.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, $hs.modules.DataziMaybe.hs_Just);
                                        };
                                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZtu, hs_sat26CZtv);
                                    };
                                    var hs_sat26CZtn = new $hs.Thunk();
                                    hs_sat26CZtn.evaluateOnce = function () {
                                        var hs_sat26CZtq = new $hs.Thunk();
                                        hs_sat26CZtq.evaluateOnce = function () {
                                            var hs_sat26CZts = new $hs.Thunk();
                                            hs_sat26CZts.evaluateOnce = function () {
                                                var hs_sat26CZtt = new $hs.Thunk();
                                                hs_sat26CZtt.evaluateOnce = function () {
                                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                                };
                                                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26CZtt);
                                            };
                                            var hs_sat26CZtr = new $hs.Thunk();
                                            hs_sat26CZtr.evaluateOnce = function () {
                                                return $hs.modules.GHCziIOziBuffer.hs_bufR.hscall(hs_tozq26CZjx);
                                            };
                                            return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_tozuptr26CZjO, hs_sat26CZtr, hs_sat26CZts);
                                        };
                                        var hs_sat26CZtp = new $hs.Thunk();
                                        hs_sat26CZtp.evaluateOnce = function () {
                                            return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_nullzuterminate26CZjE);
                                        };
                                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZtp, hs_sat26CZtq);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZtn, hs_sat26CZto);
                                };
                                var hs_sat26CZtl = new $hs.Thunk();
                                hs_sat26CZtl.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziBuffer.hs_withBuffer.hscall(hs_tozq26CZjx);
                                };
                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZtl, hs_sat26CZtm);
                            case 2:
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.DataziMaybe.hs_Nothing);
                            }
                        }
                    };
                    var hs_sat26CZsX = new $hs.Thunk();
                    hs_sat26CZsX.evaluateOnce = function () {
                        var hs_sat26CZt0 = new $hs.Thunk();
                        hs_sat26CZt0.evaluateOnce = function () {
                            var hs_sat26CZt2 = new $hs.Thunk();
                            hs_sat26CZt2.evaluateOnce = function () {
                                var hs_sat26CZt4 = new $hs.Thunk();
                                hs_sat26CZt4.evaluateOnce = function () {
                                    var hs_sat26CZt6 = new $hs.Thunk();
                                    hs_sat26CZt6.evaluateOnce = function () {
                                        var hs_sat26CZt9 = new $hs.Thunk();
                                        hs_sat26CZt9.evaluateOnce = function () {
                                            var hs_sat26CZtb = new $hs.Thunk();
                                            hs_sat26CZtb.evaluateOnce = function () {
                                                var hs_sat26CZte = new $hs.Thunk();
                                                hs_sat26CZte.evaluateOnce = function () {
                                                    var hs_sat26CZtg = new $hs.Thunk();
                                                    hs_sat26CZtg.evaluateOnce = function () {
                                                        return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_fromzq26CZjl);
                                                    };
                                                    var hs_sat26CZth = new $hs.Data(1);
                                                    hs_sat26CZth.data = [" "];
                                                    var hs_sat26CZtf = new $hs.Data(2);
                                                    hs_sat26CZtf.data = [hs_sat26CZth, $hs.modules.GHCziTypes.hs_ZMZN];
                                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZtf, hs_sat26CZtg);
                                                };
                                                var hs_sat26CZtd = new $hs.Thunk();
                                                hs_sat26CZtd.evaluateOnce = function () {
                                                    return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_from26CZj0);
                                                };
                                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZtd, hs_sat26CZte);
                                            };
                                            var hs_sat26CZtc = new $hs.Data(1);
                                            hs_sat26CZtc.data = [" "];
                                            var hs_sat26CZta = new $hs.Data(2);
                                            hs_sat26CZta.data = [hs_sat26CZtc, $hs.modules.GHCziTypes.hs_ZMZN];
                                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZta, hs_sat26CZtb);
                                        };
                                        var hs_sat26CZt8 = new $hs.Thunk();
                                        hs_sat26CZt8.evaluateOnce = function () {
                                            return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziIOziEncodingziTypes.hs_zdfShowCodingProgress, hs_why26CZje);
                                        };
                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZt8, hs_sat26CZt9);
                                    };
                                    var hs_sat26CZt7 = new $hs.Data(1);
                                    hs_sat26CZt7.data = [" "];
                                    var hs_sat26CZt5 = new $hs.Data(2);
                                    hs_sat26CZt5.data = [hs_sat26CZt7, $hs.modules.GHCziTypes.hs_ZMZN];
                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZt5, hs_sat26CZt6);
                                };
                                var hs_sat26CZt3 = new $hs.Thunk();
                                hs_sat26CZt3.evaluateOnce = function () {
                                    return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow26CZiR, hs_iteration26CZja);
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZt3, hs_sat26CZt4);
                            };
                            var hs_sat26CZt1 = new $hs.Thunk();
                            hs_sat26CZt1.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("tryFillBufferAndCall: \x00");
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZt1, hs_sat26CZt2);
                        };
                        return hs_putDebugMsg25tnnC.hscall(hs_sat26CZt0);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZsX, hs_sat26CZsZ);
                };
                var hs_sat26CZsU = new $hs.Thunk();
                hs_sat26CZsU.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziEncodingziTypes.hs_encode.hscall(hs_encoder26CZiZ, hs_from26CZj0, hs_to26CZj1);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZsU, hs_sat26CZsW);
            };
            var hs_sat26CZsT = new $hs.Thunk();
            hs_sat26CZsT.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBuffer.hs_emptyBuffer.hscall(hs_tozufp26CZk5, hs_tozuszzzubytes26CZk6, $hs.modules.GHCziIOziBuffer.hs_WriteBuffer);
            };
            var hs_sat26CZsS = new $hs.Data(1);
            hs_sat26CZsS.data = [hs_from026CZk4, hs_sat26CZsT];
            var hs_sat26CZsR = new $hs.Data(1);
            hs_sat26CZsR.data = [0];
            return hs_go26CZjB.hscall(hs_sat26CZsR, hs_sat26CZsS);
        };
        var hs_sat26CZsP = new $hs.Thunk();
        hs_sat26CZsP.evaluateOnce = function () {
            return $hs.modules.GHCziForeignPtr.hs_newForeignPtrzu.hscall(hs_tozup26CZiN);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZsP, hs_sat26CZsQ);
    };
    hs_sat26CZtG.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
    };
    hs_nUL25tnnK.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCChar, hs_sat26CZtG);
    };
    hs_cCharSizze25tnnL.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, $hs.modules.GHCziErr.hs_undefined);
    };
    this.hs_peekCString.evaluate = function (hs_enc26CZkg, hs_cp26CZkd) {
        var hs_sat26CZtI = new $hs.Func(1);
        hs_sat26CZtI.evaluate = function (hs_szz26CZkm) {
            var hs_wild26CZtK = hs_enc26CZkg;
            if (hs_enc26CZkg.notEvaluated) {
                hs_wild26CZtK = hs_enc26CZkg.hscall();
            }
            var hs_ds126CZko = hs_wild26CZtK.data[1];
            var hs_szzzubytes26CZkn = new $hs.Thunk();
            hs_szzzubytes26CZkn.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_szz26CZkm, hs_cCharSizze25tnnL);
            };
            var hs_sat26CZtN = new $hs.Func(1);
            hs_sat26CZtN.evaluate = function (hs_decoder26CZkK) {
                var hs_chunkzusizze26CZkt = new $hs.Thunk();
                hs_chunkzusizze26CZkt.evaluateOnce = function () {
                    var hs_sat26CZv3 = new $hs.Data(1);
                    hs_sat26CZv3.data = [1];
                    return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_szzzubytes26CZkn, hs_sat26CZv3);
                };
                var hs_sat26CZtP = new $hs.Func(1);
                hs_sat26CZtP.evaluate = function (hs_from026CZmb) {
                    var hs_sat26CZtW = new $hs.Func(1);
                    hs_sat26CZtW.evaluate = function (hs_to26CZkM) {
                        var hs_zddShow26CZkG = new $hs.Thunk();
                        hs_zddShow26CZkG.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zdp2Num.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
                        };
                        var hs_go26CZlV = new $hs.Func(2);
                        hs_go26CZlV.evaluate = function (hs_iteration26CZkX, hs_from26CZkL) {
                            var hs_sat26CZtZ = new $hs.Func(1);
                            hs_sat26CZtZ.evaluate = function (hs_ds326CZkP) {
                                var hs_wild126CZu1 = hs_ds326CZkP;
                                if (hs_ds326CZkP.notEvaluated) {
                                    hs_wild126CZu1 = hs_ds326CZkP.hscall();
                                }
                                var hs_why26CZl1 = hs_wild126CZu1.data[0];
                                var hs_fromzq26CZkU = hs_wild126CZu1.data[1];
                                var hs_tozq26CZl8 = hs_wild126CZu1.data[2];
                                var hs_wild226CZu2 = $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_fromzq26CZkU);
                                switch (hs_wild226CZu2.tag) {
                                case 1:
                                    var hs_sat26CZu9 = new $hs.Thunk();
                                    hs_sat26CZu9.evaluateOnce = function () {
                                        var hs_sat26CZuj = new $hs.Func(1);
                                        hs_sat26CZuj.evaluate = function (hs_ds426CZlc) {
                                            var hs_wild326CZun = hs_ds426CZlc;
                                            if (hs_ds426CZlc.notEvaluated) {
                                                hs_wild326CZun = hs_ds426CZlc.hscall();
                                            }
                                            var hs_fromzqzq26CZln = hs_wild326CZun.data[0];
                                            var hs_tozqzq26CZlC = hs_wild326CZun.data[1];
                                            var hs_sat26CZuo = new $hs.Thunk();
                                            hs_sat26CZuo.evaluateOnce = function () {
                                                var hs_sat26CZuD = new $hs.Thunk();
                                                hs_sat26CZuD.evaluateOnce = function () {
                                                    var hs_sat26CZuS = new $hs.Func(1);
                                                    hs_sat26CZuS.evaluate = function (hs_tozuchars26CZlP) {
                                                        var hs_sat26CZuX = new $hs.Thunk();
                                                        hs_sat26CZuX.evaluateOnce = function () {
                                                            var hs_sat26CZv0 = new $hs.Thunk();
                                                            hs_sat26CZv0.evaluateOnce = function () {
                                                                var hs_sat26CZv1 = new $hs.Thunk();
                                                                hs_sat26CZv1.evaluateOnce = function () {
                                                                    var hs_sat26CZv2 = new $hs.Thunk();
                                                                    hs_sat26CZv2.evaluateOnce = function () {
                                                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                                                    };
                                                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26CZv2);
                                                                };
                                                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_iteration26CZkX, hs_sat26CZv1);
                                                            };
                                                            return hs_go26CZlV.hscall(hs_sat26CZv0, hs_fromzqzq26CZln);
                                                        };
                                                        var hs_sat26CZuW = new $hs.Thunk();
                                                        hs_sat26CZuW.evaluateOnce = function () {
                                                            var hs_sat26CZuY = new $hs.Thunk();
                                                            hs_sat26CZuY.evaluateOnce = function () {
                                                                var hs_sat26CZuZ = new $hs.Thunk();
                                                                hs_sat26CZuZ.evaluateOnce = function () {
                                                                    return $hs.modules.GHCziBase.hs_map.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_desurrogatifyRoundtripCharacter, hs_tozuchars26CZlP);
                                                                };
                                                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZuZ);
                                                            };
                                                            return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26CZuY);
                                                        };
                                                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZuW, hs_sat26CZuX);
                                                    };
                                                    var hs_sat26CZuR = new $hs.Thunk();
                                                    hs_sat26CZuR.evaluateOnce = function () {
                                                        var hs_sat26CZuU = new $hs.Thunk();
                                                        hs_sat26CZuU.evaluateOnce = function () {
                                                            var hs_sat26CZuV = new $hs.Thunk();
                                                            hs_sat26CZuV.evaluateOnce = function () {
                                                                return $hs.modules.GHCziIOziBuffer.hs_bufferElems.hscall(hs_tozqzq26CZlC);
                                                            };
                                                            return $hs.modules.ForeignziMarshalziArray.hs_peekArray.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_sat26CZuV);
                                                        };
                                                        var hs_sat26CZuT = new $hs.Thunk();
                                                        hs_sat26CZuT.evaluateOnce = function () {
                                                            return $hs.modules.GHCziIOziBuffer.hs_withBuffer.hscall(hs_tozqzq26CZlC);
                                                        };
                                                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZuT, hs_sat26CZuU);
                                                    };
                                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZuR, hs_sat26CZuS);
                                                };
                                                var hs_sat26CZuC = new $hs.Thunk();
                                                hs_sat26CZuC.evaluateOnce = function () {
                                                    var hs_sat26CZuE = new $hs.Thunk();
                                                    hs_sat26CZuE.evaluateOnce = function () {
                                                        var hs_sat26CZuG = new $hs.Thunk();
                                                        hs_sat26CZuG.evaluateOnce = function () {
                                                            var hs_sat26CZuI = new $hs.Thunk();
                                                            hs_sat26CZuI.evaluateOnce = function () {
                                                                var hs_sat26CZuK = new $hs.Thunk();
                                                                hs_sat26CZuK.evaluateOnce = function () {
                                                                    var hs_sat26CZuN = new $hs.Thunk();
                                                                    hs_sat26CZuN.evaluateOnce = function () {
                                                                        var hs_sat26CZuP = new $hs.Thunk();
                                                                        hs_sat26CZuP.evaluateOnce = function () {
                                                                            return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_tozqzq26CZlC);
                                                                        };
                                                                        var hs_sat26CZuQ = new $hs.Data(1);
                                                                        hs_sat26CZuQ.data = [" "];
                                                                        var hs_sat26CZuO = new $hs.Data(2);
                                                                        hs_sat26CZuO.data = [hs_sat26CZuQ, $hs.modules.GHCziTypes.hs_ZMZN];
                                                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZuO, hs_sat26CZuP);
                                                                    };
                                                                    var hs_sat26CZuM = new $hs.Thunk();
                                                                    hs_sat26CZuM.evaluateOnce = function () {
                                                                        return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_tozq26CZl8);
                                                                    };
                                                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZuM, hs_sat26CZuN);
                                                                };
                                                                var hs_sat26CZuL = new $hs.Data(1);
                                                                hs_sat26CZuL.data = [" "];
                                                                var hs_sat26CZuJ = new $hs.Data(2);
                                                                hs_sat26CZuJ.data = [hs_sat26CZuL, $hs.modules.GHCziTypes.hs_ZMZN];
                                                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZuJ, hs_sat26CZuK);
                                                            };
                                                            var hs_sat26CZuH = new $hs.Thunk();
                                                            hs_sat26CZuH.evaluateOnce = function () {
                                                                return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_to26CZkM);
                                                            };
                                                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZuH, hs_sat26CZuI);
                                                        };
                                                        var hs_sat26CZuF = new $hs.Thunk();
                                                        hs_sat26CZuF.evaluateOnce = function () {
                                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("peekEncodedCString: to \x00");
                                                        };
                                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZuF, hs_sat26CZuG);
                                                    };
                                                    return hs_putDebugMsg25tnnC.hscall(hs_sat26CZuE);
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZuC, hs_sat26CZuD);
                                            };
                                            var hs_sat26CZum = new $hs.Thunk();
                                            hs_sat26CZum.evaluateOnce = function () {
                                                var hs_sat26CZup = new $hs.Thunk();
                                                hs_sat26CZup.evaluateOnce = function () {
                                                    var hs_sat26CZur = new $hs.Thunk();
                                                    hs_sat26CZur.evaluateOnce = function () {
                                                        var hs_sat26CZut = new $hs.Thunk();
                                                        hs_sat26CZut.evaluateOnce = function () {
                                                            var hs_sat26CZuv = new $hs.Thunk();
                                                            hs_sat26CZuv.evaluateOnce = function () {
                                                                var hs_sat26CZuy = new $hs.Thunk();
                                                                hs_sat26CZuy.evaluateOnce = function () {
                                                                    var hs_sat26CZuA = new $hs.Thunk();
                                                                    hs_sat26CZuA.evaluateOnce = function () {
                                                                        return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_fromzqzq26CZln);
                                                                    };
                                                                    var hs_sat26CZuB = new $hs.Data(1);
                                                                    hs_sat26CZuB.data = [" "];
                                                                    var hs_sat26CZuz = new $hs.Data(2);
                                                                    hs_sat26CZuz.data = [hs_sat26CZuB, $hs.modules.GHCziTypes.hs_ZMZN];
                                                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZuz, hs_sat26CZuA);
                                                                };
                                                                var hs_sat26CZux = new $hs.Thunk();
                                                                hs_sat26CZux.evaluateOnce = function () {
                                                                    return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_fromzq26CZkU);
                                                                };
                                                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZux, hs_sat26CZuy);
                                                            };
                                                            var hs_sat26CZuw = new $hs.Data(1);
                                                            hs_sat26CZuw.data = [" "];
                                                            var hs_sat26CZuu = new $hs.Data(2);
                                                            hs_sat26CZuu.data = [hs_sat26CZuw, $hs.modules.GHCziTypes.hs_ZMZN];
                                                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZuu, hs_sat26CZuv);
                                                        };
                                                        var hs_sat26CZus = new $hs.Thunk();
                                                        hs_sat26CZus.evaluateOnce = function () {
                                                            return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_from26CZkL);
                                                        };
                                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZus, hs_sat26CZut);
                                                    };
                                                    var hs_sat26CZuq = new $hs.Thunk();
                                                    hs_sat26CZuq.evaluateOnce = function () {
                                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("peekEncodedCString: from \x00");
                                                    };
                                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZuq, hs_sat26CZur);
                                                };
                                                return hs_putDebugMsg25tnnC.hscall(hs_sat26CZup);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZum, hs_sat26CZuo);
                                        };
                                        var hs_sat26CZui = new $hs.Thunk();
                                        hs_sat26CZui.evaluateOnce = function () {
                                            var hs_wild326CZul = hs_why26CZl1;
                                            if (hs_why26CZl1.notEvaluated) {
                                                hs_wild326CZul = hs_why26CZl1.hscall();
                                            }
                                            switch (hs_wild326CZul.tag) {
                                            case 2:
                                                var hs_sat26CZuk = new $hs.Data(1);
                                                hs_sat26CZuk.data = [hs_fromzq26CZkU, hs_tozq26CZl8];
                                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZuk);
                                            default:
                                                return $hs.modules.GHCziIOziEncodingziTypes.hs_recover.hscall(hs_decoder26CZkK, hs_fromzq26CZkU, hs_tozq26CZl8);
                                            }
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZui, hs_sat26CZuj);
                                    };
                                    var hs_sat26CZu8 = new $hs.Thunk();
                                    hs_sat26CZu8.evaluateOnce = function () {
                                        var hs_sat26CZua = new $hs.Thunk();
                                        hs_sat26CZua.evaluateOnce = function () {
                                            var hs_sat26CZuc = new $hs.Thunk();
                                            hs_sat26CZuc.evaluateOnce = function () {
                                                var hs_sat26CZue = new $hs.Thunk();
                                                hs_sat26CZue.evaluateOnce = function () {
                                                    var hs_sat26CZug = new $hs.Thunk();
                                                    hs_sat26CZug.evaluateOnce = function () {
                                                        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziIOziEncodingziTypes.hs_zdfShowCodingProgress, hs_why26CZl1);
                                                    };
                                                    var hs_sat26CZuh = new $hs.Data(1);
                                                    hs_sat26CZuh.data = [" "];
                                                    var hs_sat26CZuf = new $hs.Data(2);
                                                    hs_sat26CZuf.data = [hs_sat26CZuh, $hs.modules.GHCziTypes.hs_ZMZN];
                                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZuf, hs_sat26CZug);
                                                };
                                                var hs_sat26CZud = new $hs.Thunk();
                                                hs_sat26CZud.evaluateOnce = function () {
                                                    return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow26CZkG, hs_iteration26CZkX);
                                                };
                                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZud, hs_sat26CZue);
                                            };
                                            var hs_sat26CZub = new $hs.Thunk();
                                            hs_sat26CZub.evaluateOnce = function () {
                                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("peekEncodedCString: \x00");
                                            };
                                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZub, hs_sat26CZuc);
                                        };
                                        return hs_putDebugMsg25tnnC.hscall(hs_sat26CZua);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZu8, hs_sat26CZu9);
                                case 2:
                                    var hs_sat26CZu3 = new $hs.Thunk();
                                    hs_sat26CZu3.evaluateOnce = function () {
                                        var hs_sat26CZu6 = new $hs.Thunk();
                                        hs_sat26CZu6.evaluateOnce = function () {
                                            var hs_sat26CZu7 = new $hs.Thunk();
                                            hs_sat26CZu7.evaluateOnce = function () {
                                                return $hs.modules.GHCziIOziBuffer.hs_bufferElems.hscall(hs_tozq26CZl8);
                                            };
                                            return $hs.modules.ForeignziMarshalziArray.hs_peekArray.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_sat26CZu7);
                                        };
                                        var hs_sat26CZu5 = new $hs.Thunk();
                                        hs_sat26CZu5.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziBuffer.hs_withBuffer.hscall(hs_tozq26CZl8);
                                        };
                                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZu5, hs_sat26CZu6);
                                    };
                                    var hs_sat26CZu0 = new $hs.Thunk();
                                    hs_sat26CZu0.evaluateOnce = function () {
                                        var hs_sat26CZu4 = new $hs.Thunk();
                                        hs_sat26CZu4.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_map.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_desurrogatifyRoundtripCharacter);
                                        };
                                        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26CZu4);
                                    };
                                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZu0, hs_sat26CZu3);
                                }
                            };
                            var hs_sat26CZtY = new $hs.Thunk();
                            hs_sat26CZtY.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziEncodingziTypes.hs_encode.hscall(hs_decoder26CZkK, hs_from26CZkL, hs_to26CZkM);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZtY, hs_sat26CZtZ);
                        };
                        var hs_sat26CZtX = new $hs.Data(1);
                        hs_sat26CZtX.data = [0];
                        return hs_go26CZlV.hscall(hs_sat26CZtX, hs_from026CZmb);
                    };
                    var hs_sat26CZtV = new $hs.Thunk();
                    hs_sat26CZtV.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_newCharBuffer.hscall(hs_chunkzusizze26CZkt, $hs.modules.GHCziIOziBuffer.hs_WriteBuffer);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZtV, hs_sat26CZtW);
                };
                var hs_sat26CZtO = new $hs.Thunk();
                hs_sat26CZtO.evaluateOnce = function () {
                    var hs_sat26CZtR = new $hs.Thunk();
                    hs_sat26CZtR.evaluateOnce = function () {
                        var hs_sat26CZtU = new $hs.Thunk();
                        hs_sat26CZtU.evaluateOnce = function () {
                            return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_cp26CZkd);
                        };
                        return $hs.modules.GHCziForeignPtr.hs_newForeignPtrzu.hscall(hs_sat26CZtU);
                    };
                    var hs_sat26CZtQ = new $hs.Thunk();
                    hs_sat26CZtQ.evaluateOnce = function () {
                        var hs_sat26CZtS = new $hs.Func(1);
                        hs_sat26CZtS.evaluate = function (hs_fp26CZkv) {
                            var hs_sat26CZtT = new $hs.Thunk();
                            hs_sat26CZtT.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziBuffer.hs_emptyBuffer.hscall(hs_fp26CZkv, hs_szzzubytes26CZkn, $hs.modules.GHCziIOziBuffer.hs_ReadBuffer);
                            };
                            return $hs.modules.GHCziIOziBuffer.hs_bufferAdd.hscall(hs_szzzubytes26CZkn, hs_sat26CZtT);
                        };
                        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26CZtS);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZtQ, hs_sat26CZtR);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZtO, hs_sat26CZtP);
            };
            var hs_sat26CZtJ = new $hs.Thunk();
            hs_sat26CZtJ.evaluateOnce = function () {
                return $hs.modules.GHCziIO.hs_bracket.hscall(hs_ds126CZko, $hs.modules.GHCziIOziEncodingziTypes.hs_close);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZtJ, hs_sat26CZtN);
        };
        var hs_sat26CZtH = new $hs.Thunk();
        hs_sat26CZtH.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziArray.hs_lengthArray0.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, $hs.modules.ForeignziCziTypes.hs_zdfEqCChar, hs_nUL25tnnK, hs_cp26CZkd);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZtH, hs_sat26CZtI);
    };
    hs_withEncodedCString25tnnN.evaluate = function (hs_eta26CZmk, hs_eta126CZmV, hs_eta226CZms, hs_eta326CZmY) {
        var hs_wild26CZv5 = hs_eta26CZmk;
        if (hs_eta26CZmk.notEvaluated) {
            hs_wild26CZv5 = hs_eta26CZmk.hscall();
        }
        var hs_ds226CZmp = hs_wild26CZv5.data[2];
        var hs_sat26CZv8 = new $hs.Func(1);
        hs_sat26CZv8.evaluate = function (hs_encoder26CZmU) {
            var hs_sat26CZva = new $hs.Func(2);
            hs_sat26CZva.evaluate = function (hs_szz26CZmy, hs_p26CZmD) {
                var hs_sat26CZvd = new $hs.Func(1);
                hs_sat26CZvd.evaluate = function (hs_from26CZmW) {
                    var hs_zddShow26CZmI = new $hs.Thunk();
                    hs_zddShow26CZmI.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zdp2Num.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
                    };
                    var hs_go26CZn5 = new $hs.Func(2);
                    hs_go26CZn5.evaluate = function (hs_iteration26CZmN, hs_tozuszzzubytes26CZmR) {
                        var hs_sat26CZvl = new $hs.Thunk();
                        hs_sat26CZvl.evaluateOnce = function () {
                            var hs_sat26CZvq = new $hs.Func(1);
                            hs_sat26CZvq.evaluate = function (hs_tozup26CZmX) {
                                var hs_sat26CZvs = new $hs.Func(1);
                                hs_sat26CZvs.evaluate = function (hs_mbzures26CZn1) {
                                    var hs_wild126CZvt = hs_mbzures26CZn1;
                                    if (hs_mbzures26CZn1.notEvaluated) {
                                        hs_wild126CZvt = hs_mbzures26CZn1.hscall();
                                    }
                                    switch (hs_wild126CZvt.tag) {
                                    case 1:
                                        var hs_sat26CZvv = new $hs.Thunk();
                                        hs_sat26CZvv.evaluateOnce = function () {
                                            var hs_sat26CZvy = new $hs.Data(1);
                                            hs_sat26CZvy.data = [2];
                                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_tozuszzzubytes26CZmR, hs_sat26CZvy);
                                        };
                                        var hs_sat26CZvu = new $hs.Thunk();
                                        hs_sat26CZvu.evaluateOnce = function () {
                                            var hs_sat26CZvw = new $hs.Thunk();
                                            hs_sat26CZvw.evaluateOnce = function () {
                                                var hs_sat26CZvx = new $hs.Thunk();
                                                hs_sat26CZvx.evaluateOnce = function () {
                                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                                };
                                                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26CZvx);
                                            };
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_iteration26CZmN, hs_sat26CZvw);
                                        };
                                        return hs_go26CZn5.hscall(hs_sat26CZvu, hs_sat26CZvv);
                                    case 2:
                                        var hs_res26CZna = hs_wild126CZvt.data[0];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26CZna);
                                    }
                                };
                                var hs_sat26CZvr = new $hs.Thunk();
                                hs_sat26CZvr.evaluateOnce = function () {
                                    return hs_tryFillBufferAndCall25tnnP.hscall(hs_encoder26CZmU, hs_eta126CZmV, hs_from26CZmW, hs_tozup26CZmX, hs_tozuszzzubytes26CZmR, hs_eta326CZmY);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZvr, hs_sat26CZvs);
                            };
                            var hs_sat26CZvp = new $hs.Thunk();
                            hs_sat26CZvp.evaluateOnce = function () {
                                return $hs.modules.ForeignziMarshalziAlloc.hs_allocaBytes.hscall(hs_tozuszzzubytes26CZmR);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZvp, hs_sat26CZvq);
                        };
                        var hs_sat26CZvk = new $hs.Thunk();
                        hs_sat26CZvk.evaluateOnce = function () {
                            var hs_sat26CZvm = new $hs.Thunk();
                            hs_sat26CZvm.evaluateOnce = function () {
                                var hs_sat26CZvo = new $hs.Thunk();
                                hs_sat26CZvo.evaluateOnce = function () {
                                    return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow26CZmI, hs_iteration26CZmN);
                                };
                                var hs_sat26CZvn = new $hs.Thunk();
                                hs_sat26CZvn.evaluateOnce = function () {
                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("withEncodedCString: \x00");
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZvn, hs_sat26CZvo);
                            };
                            return hs_putDebugMsg25tnnC.hscall(hs_sat26CZvm);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZvk, hs_sat26CZvl);
                    };
                    var hs_sat26CZvj = new $hs.Thunk();
                    hs_sat26CZvj.evaluateOnce = function () {
                        var hs_sat26CZvz = new $hs.Thunk();
                        hs_sat26CZvz.evaluateOnce = function () {
                            var hs_sat26CZvA = new $hs.Data(1);
                            hs_sat26CZvA.data = [1];
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_szz26CZmy, hs_sat26CZvA);
                        };
                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_cCharSizze25tnnL, hs_sat26CZvz);
                    };
                    var hs_sat26CZvi = new $hs.Data(1);
                    hs_sat26CZvi.data = [0];
                    return hs_go26CZn5.hscall(hs_sat26CZvi, hs_sat26CZvj);
                };
                var hs_sat26CZvc = new $hs.Thunk();
                hs_sat26CZvc.evaluateOnce = function () {
                    var hs_sat26CZvf = new $hs.Thunk();
                    hs_sat26CZvf.evaluateOnce = function () {
                        return $hs.modules.GHCziForeignPtr.hs_newForeignPtrzu.hscall(hs_p26CZmD);
                    };
                    var hs_sat26CZve = new $hs.Thunk();
                    hs_sat26CZve.evaluateOnce = function () {
                        var hs_sat26CZvg = new $hs.Func(1);
                        hs_sat26CZvg.evaluate = function (hs_fp26CZmz) {
                            var hs_sat26CZvh = new $hs.Thunk();
                            hs_sat26CZvh.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziBuffer.hs_emptyBuffer.hscall(hs_fp26CZmz, hs_szz26CZmy, $hs.modules.GHCziIOziBuffer.hs_ReadBuffer);
                            };
                            return $hs.modules.GHCziIOziBuffer.hs_bufferAdd.hscall(hs_szz26CZmy, hs_sat26CZvh);
                        };
                        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26CZvg);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZve, hs_sat26CZvf);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZvc, hs_sat26CZvd);
            };
            var hs_sat26CZv9 = new $hs.Thunk();
            hs_sat26CZv9.evaluateOnce = function () {
                var hs_sat26CZvb = new $hs.Thunk();
                hs_sat26CZvb.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_map.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_surrogatifyRoundtripCharacter, hs_eta226CZms);
                };
                return $hs.modules.ForeignziMarshalziArray.hs_withArrayLen.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_sat26CZvb);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZv9, hs_sat26CZva);
        };
        var hs_sat26CZv4 = new $hs.Thunk();
        hs_sat26CZv4.evaluateOnce = function () {
            return $hs.modules.GHCziIO.hs_bracket.hscall(hs_ds226CZmp, $hs.modules.GHCziIOziEncodingziTypes.hs_close);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZv4, hs_sat26CZv8);
    };
    this.hs_withCString.evaluate = function (hs_enc26CZno, hs_s26CZnp, hs_act26CZnx) {
        var hs_sat26CZvC = new $hs.Func(1);
        hs_sat26CZvC.evaluate = function (hs_ds26CZns) {
            var hs_wild26CZvE = hs_ds26CZns;
            if (hs_ds26CZns.notEvaluated) {
                hs_wild26CZvE = hs_ds26CZns.hscall();
            }
            var hs_cp26CZnw = hs_wild26CZvE.data[0];
            return hs_act26CZnx.hscall(hs_cp26CZnw);
        };
        var hs_sat26CZvB = new $hs.Func(1);
        hs_sat26CZvB.evaluate = function (hs_eta1cW6l3) {
            return hs_withEncodedCString25tnnN.hscall(hs_enc26CZno, $hs.modules.GHCziTypes.hs_True, hs_s26CZnp, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZvB, hs_sat26CZvC);
    };
    this.hs_charIsRepresentable.evaluate = function (hs_enc26CZnJ, hs_c26CZnD) {
        var hs_sat26CZvG = new $hs.Func(1);
        hs_sat26CZvG.evaluate = function (hs_e26CZnX) {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_False);
        };
        var hs_sat26CZvF = new $hs.Thunk();
        hs_sat26CZvF.evaluateOnce = function () {
            var hs_act26CZnL = new $hs.Thunk();
            hs_act26CZnL.evaluateOnce = function () {
                var hs_sat26CZvN = new $hs.Func(1);
                hs_sat26CZvN.evaluate = function (hs_eta1cW6l3) {
                    return $hs.modules.GHCziForeign.hs_peekCString.hscall(hs_enc26CZnJ, hs_eta1cW6l3);
                };
                var hs_sat26CZvM = new $hs.Thunk();
                hs_sat26CZvM.evaluateOnce = function () {
                    var hs_ds26CZnE = new $hs.Data(2);
                    hs_ds26CZnE.data = [hs_c26CZnD, $hs.modules.GHCziTypes.hs_ZMZN];
                    var hs_sat26CZvO = new $hs.Func(1);
                    hs_sat26CZvO.evaluate = function (hs_ds126CZnG) {
                        return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq25uAKl, hs_ds126CZnG, hs_ds26CZnE);
                    };
                    return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26CZvO);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CZvM, hs_sat26CZvN);
            };
            var hs_sat26CZvI = new $hs.Func(1);
            hs_sat26CZvI.evaluate = function (hs_ds26CZnP) {
                var hs_wild26CZvL = hs_ds26CZnP;
                if (hs_ds26CZnP.notEvaluated) {
                    hs_wild26CZvL = hs_ds26CZnP.hscall();
                }
                var hs_cp26CZnT = hs_wild26CZvL.data[0];
                return hs_act26CZnL.hscall(hs_cp26CZnT);
            };
            var hs_sat26CZvJ = new $hs.Data(2);
            hs_sat26CZvJ.data = [hs_c26CZnD, $hs.modules.GHCziTypes.hs_ZMZN];
            var hs_sat26CZvH = new $hs.Func(1);
            hs_sat26CZvH.evaluate = function (hs_eta1cW6l3) {
                return hs_withEncodedCString25tnnN.hscall(hs_enc26CZnJ, $hs.modules.GHCziTypes.hs_True, hs_sat26CZvJ, hs_eta1cW6l3);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZvH, hs_sat26CZvI);
        };
        return $hs.modules.GHCziIO.hs_catchException.hscall($hs.modules.GHCziIOziException.hs_zdfExceptionIOException, hs_sat26CZvF, hs_sat26CZvG);
    };
    this.hs_withCStringLen.evaluate = function (hs_enc26CZo2, hs_eta26CZoa, hs_eta126CZoF) {
        var hs_wild26CZvQ = hs_enc26CZo2;
        if (hs_enc26CZo2.notEvaluated) {
            hs_wild26CZvQ = hs_enc26CZo2.hscall();
        }
        var hs_ds226CZo7 = hs_wild26CZvQ.data[2];
        var hs_sat26CZvT = new $hs.Func(1);
        hs_sat26CZvT.evaluate = function (hs_encoder26CZoC) {
            var hs_sat26CZvV = new $hs.Func(2);
            hs_sat26CZvV.evaluate = function (hs_szz26CZog, hs_p26CZol) {
                var hs_sat26CZvY = new $hs.Func(1);
                hs_sat26CZvY.evaluate = function (hs_from26CZoD) {
                    var hs_zddShow26CZoq = new $hs.Thunk();
                    hs_zddShow26CZoq.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zdp2Num.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
                    };
                    var hs_go26CZoM = new $hs.Func(2);
                    hs_go26CZoM.evaluate = function (hs_iteration26CZov, hs_tozuszzzubytes26CZoz) {
                        var hs_sat26CZw6 = new $hs.Thunk();
                        hs_sat26CZw6.evaluateOnce = function () {
                            var hs_sat26CZwb = new $hs.Func(1);
                            hs_sat26CZwb.evaluate = function (hs_tozup26CZoE) {
                                var hs_sat26CZwd = new $hs.Func(1);
                                hs_sat26CZwd.evaluate = function (hs_mbzures26CZoI) {
                                    var hs_wild126CZwe = hs_mbzures26CZoI;
                                    if (hs_mbzures26CZoI.notEvaluated) {
                                        hs_wild126CZwe = hs_mbzures26CZoI.hscall();
                                    }
                                    switch (hs_wild126CZwe.tag) {
                                    case 1:
                                        var hs_sat26CZwg = new $hs.Thunk();
                                        hs_sat26CZwg.evaluateOnce = function () {
                                            var hs_sat26CZwj = new $hs.Data(1);
                                            hs_sat26CZwj.data = [2];
                                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_tozuszzzubytes26CZoz, hs_sat26CZwj);
                                        };
                                        var hs_sat26CZwf = new $hs.Thunk();
                                        hs_sat26CZwf.evaluateOnce = function () {
                                            var hs_sat26CZwh = new $hs.Thunk();
                                            hs_sat26CZwh.evaluateOnce = function () {
                                                var hs_sat26CZwi = new $hs.Thunk();
                                                hs_sat26CZwi.evaluateOnce = function () {
                                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                                };
                                                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26CZwi);
                                            };
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_iteration26CZov, hs_sat26CZwh);
                                        };
                                        return hs_go26CZoM.hscall(hs_sat26CZwf, hs_sat26CZwg);
                                    case 2:
                                        var hs_res26CZoR = hs_wild126CZwe.data[0];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26CZoR);
                                    }
                                };
                                var hs_sat26CZwc = new $hs.Thunk();
                                hs_sat26CZwc.evaluateOnce = function () {
                                    return hs_tryFillBufferAndCall25tnnP.hscall(hs_encoder26CZoC, $hs.modules.GHCziTypes.hs_False, hs_from26CZoD, hs_tozup26CZoE, hs_tozuszzzubytes26CZoz, hs_eta126CZoF);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZwc, hs_sat26CZwd);
                            };
                            var hs_sat26CZwa = new $hs.Thunk();
                            hs_sat26CZwa.evaluateOnce = function () {
                                return $hs.modules.ForeignziMarshalziAlloc.hs_allocaBytes.hscall(hs_tozuszzzubytes26CZoz);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZwa, hs_sat26CZwb);
                        };
                        var hs_sat26CZw5 = new $hs.Thunk();
                        hs_sat26CZw5.evaluateOnce = function () {
                            var hs_sat26CZw7 = new $hs.Thunk();
                            hs_sat26CZw7.evaluateOnce = function () {
                                var hs_sat26CZw9 = new $hs.Thunk();
                                hs_sat26CZw9.evaluateOnce = function () {
                                    return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow26CZoq, hs_iteration26CZov);
                                };
                                var hs_sat26CZw8 = new $hs.Thunk();
                                hs_sat26CZw8.evaluateOnce = function () {
                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("withEncodedCString: \x00");
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZw8, hs_sat26CZw9);
                            };
                            return hs_putDebugMsg25tnnC.hscall(hs_sat26CZw7);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZw5, hs_sat26CZw6);
                    };
                    var hs_sat26CZw4 = new $hs.Thunk();
                    hs_sat26CZw4.evaluateOnce = function () {
                        var hs_sat26CZwk = new $hs.Thunk();
                        hs_sat26CZwk.evaluateOnce = function () {
                            var hs_sat26CZwl = new $hs.Data(1);
                            hs_sat26CZwl.data = [1];
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_szz26CZog, hs_sat26CZwl);
                        };
                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_cCharSizze25tnnL, hs_sat26CZwk);
                    };
                    var hs_sat26CZw3 = new $hs.Data(1);
                    hs_sat26CZw3.data = [0];
                    return hs_go26CZoM.hscall(hs_sat26CZw3, hs_sat26CZw4);
                };
                var hs_sat26CZvX = new $hs.Thunk();
                hs_sat26CZvX.evaluateOnce = function () {
                    var hs_sat26CZw0 = new $hs.Thunk();
                    hs_sat26CZw0.evaluateOnce = function () {
                        return $hs.modules.GHCziForeignPtr.hs_newForeignPtrzu.hscall(hs_p26CZol);
                    };
                    var hs_sat26CZvZ = new $hs.Thunk();
                    hs_sat26CZvZ.evaluateOnce = function () {
                        var hs_sat26CZw1 = new $hs.Func(1);
                        hs_sat26CZw1.evaluate = function (hs_fp26CZoh) {
                            var hs_sat26CZw2 = new $hs.Thunk();
                            hs_sat26CZw2.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziBuffer.hs_emptyBuffer.hscall(hs_fp26CZoh, hs_szz26CZog, $hs.modules.GHCziIOziBuffer.hs_ReadBuffer);
                            };
                            return $hs.modules.GHCziIOziBuffer.hs_bufferAdd.hscall(hs_szz26CZog, hs_sat26CZw2);
                        };
                        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26CZw1);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZvZ, hs_sat26CZw0);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZvX, hs_sat26CZvY);
            };
            var hs_sat26CZvU = new $hs.Thunk();
            hs_sat26CZvU.evaluateOnce = function () {
                var hs_sat26CZvW = new $hs.Thunk();
                hs_sat26CZvW.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_map.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_surrogatifyRoundtripCharacter, hs_eta26CZoa);
                };
                return $hs.modules.ForeignziMarshalziArray.hs_withArrayLen.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_sat26CZvW);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZvU, hs_sat26CZvV);
        };
        var hs_sat26CZvP = new $hs.Thunk();
        hs_sat26CZvP.evaluateOnce = function () {
            return $hs.modules.GHCziIO.hs_bracket.hscall(hs_ds226CZo7, $hs.modules.GHCziIOziEncodingziTypes.hs_close);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZvP, hs_sat26CZvT);
    };
    hs_newEncodedCString25tnnO.evaluate = function (hs_ds26CZp5, hs_nullzuterminate26CZpK, hs_s26CZpd) {
        var hs_wild26CZwn = hs_ds26CZp5;
        if (hs_ds26CZp5.notEvaluated) {
            hs_wild26CZwn = hs_ds26CZp5.hscall();
        }
        var hs_ds326CZpa = hs_wild26CZwn.data[2];
        var hs_sat26CZwq = new $hs.Func(1);
        hs_sat26CZwq.evaluate = function (hs_encoder26CZpJ) {
            var hs_sat26CZws = new $hs.Func(2);
            hs_sat26CZws.evaluate = function (hs_szz26CZpj, hs_p26CZpo) {
                var hs_sat26CZwv = new $hs.Func(1);
                hs_sat26CZwv.evaluate = function (hs_from26CZpL) {
                    var hs_tozuszzzubytes26CZpv = new $hs.Thunk();
                    hs_tozuszzzubytes26CZpv.evaluateOnce = function () {
                        var hs_sat26CZwS = new $hs.Thunk();
                        hs_sat26CZwS.evaluateOnce = function () {
                            var hs_sat26CZwT = new $hs.Data(1);
                            hs_sat26CZwT.data = [1];
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_szz26CZpj, hs_sat26CZwT);
                        };
                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_cCharSizze25tnnL, hs_sat26CZwS);
                    };
                    var hs_sat26CZwB = new $hs.Func(1);
                    hs_sat26CZwB.evaluate = function (hs_tozup26CZq9) {
                        var hs_zddShow26CZpz = new $hs.Thunk();
                        hs_zddShow26CZpz.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zdp2Num.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
                        };
                        var hs_go26CZq0 = new $hs.Func(3);
                        hs_go26CZq0.evaluate = function (hs_iteration26CZpF, hs_tozup126CZpM, hs_tozuszzzubytes126CZpN) {
                            var hs_sat26CZwE = new $hs.Thunk();
                            hs_sat26CZwE.evaluateOnce = function () {
                                var hs_sat26CZwJ = new $hs.Func(1);
                                hs_sat26CZwJ.evaluate = function (hs_mbzures26CZpR) {
                                    var hs_wild126CZwL = hs_mbzures26CZpR;
                                    if (hs_mbzures26CZpR.notEvaluated) {
                                        hs_wild126CZwL = hs_mbzures26CZpR.hscall();
                                    }
                                    switch (hs_wild126CZwL.tag) {
                                    case 1:
                                        var hs_tozuszzzubyteszq26CZpV = new $hs.Thunk();
                                        hs_tozuszzzubyteszq26CZpV.evaluateOnce = function () {
                                            var hs_sat26CZwR = new $hs.Data(1);
                                            hs_sat26CZwR.data = [2];
                                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_tozuszzzubytes126CZpN, hs_sat26CZwR);
                                        };
                                        var hs_sat26CZwN = new $hs.Func(1);
                                        hs_sat26CZwN.evaluate = function (hs_tozupzq26CZq2) {
                                            var hs_sat26CZwO = new $hs.Thunk();
                                            hs_sat26CZwO.evaluateOnce = function () {
                                                var hs_sat26CZwP = new $hs.Thunk();
                                                hs_sat26CZwP.evaluateOnce = function () {
                                                    var hs_sat26CZwQ = new $hs.Thunk();
                                                    hs_sat26CZwQ.evaluateOnce = function () {
                                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                                    };
                                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26CZwQ);
                                                };
                                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_iteration26CZpF, hs_sat26CZwP);
                                            };
                                            return hs_go26CZq0.hscall(hs_sat26CZwO, hs_tozupzq26CZq2, hs_tozuszzzubyteszq26CZpV);
                                        };
                                        var hs_sat26CZwM = new $hs.Thunk();
                                        hs_sat26CZwM.evaluateOnce = function () {
                                            return $hs.modules.ForeignziMarshalziAlloc.hs_reallocBytes.hscall(hs_tozup126CZpM, hs_tozuszzzubyteszq26CZpV);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZwM, hs_sat26CZwN);
                                    case 2:
                                        var hs_res26CZq5 = hs_wild126CZwL.data[0];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26CZq5);
                                    }
                                };
                                var hs_sat26CZwI = new $hs.Thunk();
                                hs_sat26CZwI.evaluateOnce = function () {
                                    var hs_sat26CZwK = new $hs.Thunk();
                                    hs_sat26CZwK.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                                    };
                                    return hs_tryFillBufferAndCall25tnnP.hscall(hs_encoder26CZpJ, hs_nullzuterminate26CZpK, hs_from26CZpL, hs_tozup126CZpM, hs_tozuszzzubytes126CZpN, hs_sat26CZwK);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZwI, hs_sat26CZwJ);
                            };
                            var hs_sat26CZwD = new $hs.Thunk();
                            hs_sat26CZwD.evaluateOnce = function () {
                                var hs_sat26CZwF = new $hs.Thunk();
                                hs_sat26CZwF.evaluateOnce = function () {
                                    var hs_sat26CZwH = new $hs.Thunk();
                                    hs_sat26CZwH.evaluateOnce = function () {
                                        return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow26CZpz, hs_iteration26CZpF);
                                    };
                                    var hs_sat26CZwG = new $hs.Thunk();
                                    hs_sat26CZwG.evaluateOnce = function () {
                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("newEncodedCString: \x00");
                                    };
                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZwG, hs_sat26CZwH);
                                };
                                return hs_putDebugMsg25tnnC.hscall(hs_sat26CZwF);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZwD, hs_sat26CZwE);
                        };
                        var hs_sat26CZwC = new $hs.Data(1);
                        hs_sat26CZwC.data = [0];
                        return hs_go26CZq0.hscall(hs_sat26CZwC, hs_tozup26CZq9, hs_tozuszzzubytes26CZpv);
                    };
                    var hs_sat26CZwA = new $hs.Thunk();
                    hs_sat26CZwA.evaluateOnce = function () {
                        return $hs.modules.ForeignziMarshalziAlloc.hs_mallocBytes.hscall(hs_tozuszzzubytes26CZpv);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZwA, hs_sat26CZwB);
                };
                var hs_sat26CZwu = new $hs.Thunk();
                hs_sat26CZwu.evaluateOnce = function () {
                    var hs_sat26CZwx = new $hs.Thunk();
                    hs_sat26CZwx.evaluateOnce = function () {
                        return $hs.modules.GHCziForeignPtr.hs_newForeignPtrzu.hscall(hs_p26CZpo);
                    };
                    var hs_sat26CZww = new $hs.Thunk();
                    hs_sat26CZww.evaluateOnce = function () {
                        var hs_sat26CZwy = new $hs.Func(1);
                        hs_sat26CZwy.evaluate = function (hs_fp26CZpk) {
                            var hs_sat26CZwz = new $hs.Thunk();
                            hs_sat26CZwz.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziBuffer.hs_emptyBuffer.hscall(hs_fp26CZpk, hs_szz26CZpj, $hs.modules.GHCziIOziBuffer.hs_ReadBuffer);
                            };
                            return $hs.modules.GHCziIOziBuffer.hs_bufferAdd.hscall(hs_szz26CZpj, hs_sat26CZwz);
                        };
                        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26CZwy);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZww, hs_sat26CZwx);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZwu, hs_sat26CZwv);
            };
            var hs_sat26CZwr = new $hs.Thunk();
            hs_sat26CZwr.evaluateOnce = function () {
                var hs_sat26CZwt = new $hs.Thunk();
                hs_sat26CZwt.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_map.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_surrogatifyRoundtripCharacter, hs_s26CZpd);
                };
                return $hs.modules.ForeignziMarshalziArray.hs_withArrayLen.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_sat26CZwt);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZwr, hs_sat26CZws);
        };
        var hs_sat26CZwm = new $hs.Thunk();
        hs_sat26CZwm.evaluateOnce = function () {
            return $hs.modules.GHCziIO.hs_bracket.hscall(hs_ds326CZpa, $hs.modules.GHCziIOziEncodingziTypes.hs_close);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZwm, hs_sat26CZwq);
    };
    this.hs_newCString.evaluate = function (hs_enc26CZqg) {
        var hs_sat26CZwV = new $hs.Func(1);
        hs_sat26CZwV.evaluate = function (hs_eta1cW6l3) {
            return hs_newEncodedCString25tnnO.hscall(hs_enc26CZqg, $hs.modules.GHCziTypes.hs_True, hs_eta1cW6l3);
        };
        var hs_sat26CZwU = new $hs.Thunk();
        hs_sat26CZwU.evaluateOnce = function () {
            return $hs.modules.ControlziMonad.hs_liftM.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.DataziTuple.hs_fst);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CZwU, hs_sat26CZwV);
    };
    this.hs_newCStringLen.evaluate = function (hs_enc26CZqk, hs_eta26CZqs) {
        var hs_wild26CZwX = hs_enc26CZqk;
        if (hs_enc26CZqk.notEvaluated) {
            hs_wild26CZwX = hs_enc26CZqk.hscall();
        }
        var hs_ds226CZqp = hs_wild26CZwX.data[2];
        var hs_sat26CZx0 = new $hs.Func(1);
        hs_sat26CZx0.evaluate = function (hs_encoder26CZqY) {
            var hs_sat26CZx2 = new $hs.Func(2);
            hs_sat26CZx2.evaluate = function (hs_szz26CZqy, hs_p26CZqD) {
                var hs_sat26CZx5 = new $hs.Func(1);
                hs_sat26CZx5.evaluate = function (hs_from26CZqZ) {
                    var hs_tozuszzzubytes26CZqK = new $hs.Thunk();
                    hs_tozuszzzubytes26CZqK.evaluateOnce = function () {
                        var hs_sat26CZxs = new $hs.Thunk();
                        hs_sat26CZxs.evaluateOnce = function () {
                            var hs_sat26CZxt = new $hs.Data(1);
                            hs_sat26CZxt.data = [1];
                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_szz26CZqy, hs_sat26CZxt);
                        };
                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_cCharSizze25tnnL, hs_sat26CZxs);
                    };
                    var hs_sat26CZxb = new $hs.Func(1);
                    hs_sat26CZxb.evaluate = function (hs_tozup26CZrn) {
                        var hs_zddShow26CZqO = new $hs.Thunk();
                        hs_zddShow26CZqO.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_zdp2Num.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
                        };
                        var hs_go26CZre = new $hs.Func(3);
                        hs_go26CZre.evaluate = function (hs_iteration26CZqU, hs_tozup126CZr0, hs_tozuszzzubytes126CZr1) {
                            var hs_sat26CZxe = new $hs.Thunk();
                            hs_sat26CZxe.evaluateOnce = function () {
                                var hs_sat26CZxj = new $hs.Func(1);
                                hs_sat26CZxj.evaluate = function (hs_mbzures26CZr5) {
                                    var hs_wild126CZxl = hs_mbzures26CZr5;
                                    if (hs_mbzures26CZr5.notEvaluated) {
                                        hs_wild126CZxl = hs_mbzures26CZr5.hscall();
                                    }
                                    switch (hs_wild126CZxl.tag) {
                                    case 1:
                                        var hs_tozuszzzubyteszq26CZr9 = new $hs.Thunk();
                                        hs_tozuszzzubyteszq26CZr9.evaluateOnce = function () {
                                            var hs_sat26CZxr = new $hs.Data(1);
                                            hs_sat26CZxr.data = [2];
                                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_tozuszzzubytes126CZr1, hs_sat26CZxr);
                                        };
                                        var hs_sat26CZxn = new $hs.Func(1);
                                        hs_sat26CZxn.evaluate = function (hs_tozupzq26CZrg) {
                                            var hs_sat26CZxo = new $hs.Thunk();
                                            hs_sat26CZxo.evaluateOnce = function () {
                                                var hs_sat26CZxp = new $hs.Thunk();
                                                hs_sat26CZxp.evaluateOnce = function () {
                                                    var hs_sat26CZxq = new $hs.Thunk();
                                                    hs_sat26CZxq.evaluateOnce = function () {
                                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                                    };
                                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26CZxq);
                                                };
                                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_iteration26CZqU, hs_sat26CZxp);
                                            };
                                            return hs_go26CZre.hscall(hs_sat26CZxo, hs_tozupzq26CZrg, hs_tozuszzzubyteszq26CZr9);
                                        };
                                        var hs_sat26CZxm = new $hs.Thunk();
                                        hs_sat26CZxm.evaluateOnce = function () {
                                            return $hs.modules.ForeignziMarshalziAlloc.hs_reallocBytes.hscall(hs_tozup126CZr0, hs_tozuszzzubyteszq26CZr9);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZxm, hs_sat26CZxn);
                                    case 2:
                                        var hs_res26CZrj = hs_wild126CZxl.data[0];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26CZrj);
                                    }
                                };
                                var hs_sat26CZxi = new $hs.Thunk();
                                hs_sat26CZxi.evaluateOnce = function () {
                                    var hs_sat26CZxk = new $hs.Thunk();
                                    hs_sat26CZxk.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                                    };
                                    return hs_tryFillBufferAndCall25tnnP.hscall(hs_encoder26CZqY, $hs.modules.GHCziTypes.hs_False, hs_from26CZqZ, hs_tozup126CZr0, hs_tozuszzzubytes126CZr1, hs_sat26CZxk);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZxi, hs_sat26CZxj);
                            };
                            var hs_sat26CZxd = new $hs.Thunk();
                            hs_sat26CZxd.evaluateOnce = function () {
                                var hs_sat26CZxf = new $hs.Thunk();
                                hs_sat26CZxf.evaluateOnce = function () {
                                    var hs_sat26CZxh = new $hs.Thunk();
                                    hs_sat26CZxh.evaluateOnce = function () {
                                        return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow26CZqO, hs_iteration26CZqU);
                                    };
                                    var hs_sat26CZxg = new $hs.Thunk();
                                    hs_sat26CZxg.evaluateOnce = function () {
                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("newEncodedCString: \x00");
                                    };
                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZxg, hs_sat26CZxh);
                                };
                                return hs_putDebugMsg25tnnC.hscall(hs_sat26CZxf);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZxd, hs_sat26CZxe);
                        };
                        var hs_sat26CZxc = new $hs.Data(1);
                        hs_sat26CZxc.data = [0];
                        return hs_go26CZre.hscall(hs_sat26CZxc, hs_tozup26CZrn, hs_tozuszzzubytes26CZqK);
                    };
                    var hs_sat26CZxa = new $hs.Thunk();
                    hs_sat26CZxa.evaluateOnce = function () {
                        return $hs.modules.ForeignziMarshalziAlloc.hs_mallocBytes.hscall(hs_tozuszzzubytes26CZqK);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZxa, hs_sat26CZxb);
                };
                var hs_sat26CZx4 = new $hs.Thunk();
                hs_sat26CZx4.evaluateOnce = function () {
                    var hs_sat26CZx7 = new $hs.Thunk();
                    hs_sat26CZx7.evaluateOnce = function () {
                        return $hs.modules.GHCziForeignPtr.hs_newForeignPtrzu.hscall(hs_p26CZqD);
                    };
                    var hs_sat26CZx6 = new $hs.Thunk();
                    hs_sat26CZx6.evaluateOnce = function () {
                        var hs_sat26CZx8 = new $hs.Func(1);
                        hs_sat26CZx8.evaluate = function (hs_fp26CZqz) {
                            var hs_sat26CZx9 = new $hs.Thunk();
                            hs_sat26CZx9.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziBuffer.hs_emptyBuffer.hscall(hs_fp26CZqz, hs_szz26CZqy, $hs.modules.GHCziIOziBuffer.hs_ReadBuffer);
                            };
                            return $hs.modules.GHCziIOziBuffer.hs_bufferAdd.hscall(hs_szz26CZqy, hs_sat26CZx9);
                        };
                        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26CZx8);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZx6, hs_sat26CZx7);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZx4, hs_sat26CZx5);
            };
            var hs_sat26CZx1 = new $hs.Thunk();
            hs_sat26CZx1.evaluateOnce = function () {
                var hs_sat26CZx3 = new $hs.Thunk();
                hs_sat26CZx3.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_map.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_surrogatifyRoundtripCharacter, hs_eta26CZqs);
                };
                return $hs.modules.ForeignziMarshalziArray.hs_withArrayLen.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_sat26CZx3);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZx1, hs_sat26CZx2);
        };
        var hs_sat26CZwW = new $hs.Thunk();
        hs_sat26CZwW.evaluateOnce = function () {
            return $hs.modules.GHCziIO.hs_bracket.hscall(hs_ds226CZqp, $hs.modules.GHCziIOziEncodingziTypes.hs_close);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZwW, hs_sat26CZx0);
    };
};
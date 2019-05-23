
$hs.modules.GHCziFingerprint = new $hs.Module();
$hs.modules.GHCziFingerprint.dependencies = ["GHC.Types", "GHC.Unit", "GHC.Integer", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.IO", "GHC.List", "GHC.Ptr", "GHC.Word", "Data.Bits", "Foreign.C.Types", "Foreign.Marshal.Alloc", "Foreign.Marshal.Array", "Foreign.Storable"];
$hs.modules.GHCziFingerprint.initBeforeDependencies = function () {
    this.hs_fingerprint0 = new $hs.Thunk();
    this.hs_fingerprintData = new $hs.Func(2);
    this.hs_fingerprintString = new $hs.Func(1);
    this.hs_fingerprintFingerprints = new $hs.Func(1);
    this.hs_fingerprint0.evaluateOnce = function () {
        $hs.modules.GHCziFingerprint.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_fingerprintData.notEvaluated = true;
    this.hs_fingerprintData.evaluate = function (hs_buf26CYOj, hs_len26CYOm) {
        $hs.modules.GHCziFingerprint.loadDependencies();
        return this.evaluate(hs_buf26CYOj, hs_len26CYOm);
    };
    this.hs_fingerprintString.notEvaluated = true;
    this.hs_fingerprintString.evaluate = function (hs_str26CYPk) {
        $hs.modules.GHCziFingerprint.loadDependencies();
        return this.evaluate(hs_str26CYPk);
    };
    this.hs_fingerprintFingerprints.notEvaluated = true;
    this.hs_fingerprintFingerprints.evaluate = function (hs_fs26CYPu) {
        $hs.modules.GHCziFingerprint.loadDependencies();
        return this.evaluate(hs_fs26CYPu);
    };
};
$hs.modules.GHCziFingerprint.initAfterDependencies = function () {
    this.hs_fingerprintData.notEvaluated = false;
    this.hs_fingerprintString.notEvaluated = false;
    this.hs_fingerprintFingerprints.notEvaluated = false;
    var hs_sat26CYPG = new $hs.Thunk();
    hs_sat26CYPG.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
    };
    this.hs_fingerprint0.evaluateOnce = function () {
        var hs_tpl26CYNX = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26CYPG);
        var hs_sat26CYPJ = new $hs.Thunk();
        hs_sat26CYPJ.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_tpl126CYNY = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26CYPJ);
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CYNX, hs_tpl126CYNY];
        return $res;
    };
    this.hs_fingerprintData.evaluate = function (hs_buf26CYOj, hs_len26CYOm) {
        var hs_sat26CYPL = new $hs.Func(1);
        hs_sat26CYPL.evaluate = function (hs_pctxt26CYO4) {
            var hs_sat26CYPO = new $hs.Thunk();
            hs_sat26CYPO.evaluateOnce = function () {
                var hs_sat26CYPT = new $hs.Thunk();
                hs_sat26CYPT.evaluateOnce = function () {
                    var hs_sat26CYQ0 = new $hs.Func(1);
                    hs_sat26CYQ0.evaluate = function (hs_pdigest26CYOE) {
                        var hs_sat26CYQ3 = new $hs.Thunk();
                        hs_sat26CYQ3.evaluateOnce = function () {
                            var hs_sat26CYQ8 = new $hs.Thunk();
                            hs_sat26CYQ8.evaluateOnce = function () {
                                return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_pdigest26CYOE);
                            };
                            return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFingerprint, hs_sat26CYQ8);
                        };
                        var hs_sat26CYQ2 = new $hs.Thunk();
                        hs_sat26CYQ2.evaluateOnce = function () {
                            var hs_ds26CYQ6 = hs_pdigest26CYOE;
                            if (hs_pdigest26CYOE.notEvaluated) {
                                hs_ds26CYQ6 = hs_pdigest26CYOE.hscall();
                            }
                            var hs_ds126CYOL = hs_ds26CYQ6.data[0];
                            var hs_ds226CYQ5 = hs_pctxt26CYO4;
                            if (hs_pctxt26CYO4.notEvaluated) {
                                hs_ds226CYQ5 = hs_pctxt26CYO4.hscall();
                            }
                            var hs_ds326CYOM = hs_ds226CYQ5.data[0];
                            var hs_sat26CYQ4 = new $hs.Func(1);
                            hs_sat26CYQ4.evaluate = function (hs_ds426CYON) {
                                var hs_wild26CYQ7 = [hs_ds426CYON, MD5Final(hs_ds126CYOL, hs_ds326CYOM)];
                                var hs_ds526CYOR = hs_wild26CYQ7[0];
                                return [hs_ds526CYOR, $hs.modules.GHCziUnit.hs_Z0T];
                            };
                            if (hs_sat26CYQ4.notEvaluated) {
                                return hs_sat26CYQ4.hscall();
                            } else {
                                return hs_sat26CYQ4;
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CYQ2, hs_sat26CYQ3);
                    };
                    var hs_sat26CYPZ = new $hs.Thunk();
                    hs_sat26CYPZ.evaluateOnce = function () {
                        var hs_sat26CYQ1 = new $hs.Data(1);
                        hs_sat26CYQ1.data = [16];
                        return $hs.modules.ForeignziMarshalziAlloc.hs_allocaBytes.hscall(hs_sat26CYQ1);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CYPZ, hs_sat26CYQ0);
                };
                var hs_sat26CYPS = new $hs.Thunk();
                hs_sat26CYPS.evaluateOnce = function () {
                    var hs_ds26CYPW = hs_pctxt26CYO4;
                    if (hs_pctxt26CYO4.notEvaluated) {
                        hs_ds26CYPW = hs_pctxt26CYO4.hscall();
                    }
                    var hs_ds126CYOr = hs_ds26CYPW.data[0];
                    var hs_ds226CYPV = hs_buf26CYOj;
                    if (hs_buf26CYOj.notEvaluated) {
                        hs_ds226CYPV = hs_buf26CYOj.hscall();
                    }
                    var hs_ds326CYOs = hs_ds226CYPV.data[0];
                    var hs_ds426CYPX = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_len26CYOm);
                    var hs_ds526CYOt = hs_ds426CYPX.data[0];
                    var hs_sat26CYPU = new $hs.Func(1);
                    hs_sat26CYPU.evaluate = function (hs_ds626CYOu) {
                        var hs_wild26CYPY = [hs_ds626CYOu, MD5Update(hs_ds126CYOr, hs_ds326CYOs, hs_ds526CYOt)];
                        var hs_ds726CYOy = hs_wild26CYPY[0];
                        return [hs_ds726CYOy, $hs.modules.GHCziUnit.hs_Z0T];
                    };
                    if (hs_sat26CYPU.notEvaluated) {
                        return hs_sat26CYPU.hscall();
                    } else {
                        return hs_sat26CYPU;
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CYPS, hs_sat26CYPT);
            };
            var hs_sat26CYPN = new $hs.Thunk();
            hs_sat26CYPN.evaluateOnce = function () {
                var hs_ds26CYPQ = hs_pctxt26CYO4;
                if (hs_pctxt26CYO4.notEvaluated) {
                    hs_ds26CYPQ = hs_pctxt26CYO4.hscall();
                }
                var hs_ds126CYO9 = hs_ds26CYPQ.data[0];
                var hs_sat26CYPP = new $hs.Func(1);
                hs_sat26CYPP.evaluate = function (hs_ds226CYOa) {
                    var hs_wild26CYPR = [hs_ds226CYOa, MD5Init(hs_ds126CYO9)];
                    var hs_ds326CYOe = hs_wild26CYPR[0];
                    return [hs_ds326CYOe, $hs.modules.GHCziUnit.hs_Z0T];
                };
                if (hs_sat26CYPP.notEvaluated) {
                    return hs_sat26CYPP.hscall();
                } else {
                    return hs_sat26CYPP;
                }
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CYPN, hs_sat26CYPO);
        };
        var hs_sat26CYPK = new $hs.Thunk();
        hs_sat26CYPK.evaluateOnce = function () {
            var hs_sat26CYPM = new $hs.Data(1);
            hs_sat26CYPM.data = [88];
            return $hs.modules.ForeignziMarshalziAlloc.hs_allocaBytes.hscall(hs_sat26CYPM);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CYPK, hs_sat26CYPL);
    };
    this.hs_fingerprintString.evaluate = function (hs_str26CYPk) {
        var hs_sat26CYQ9 = new $hs.Thunk();
        hs_sat26CYQ9.evaluateOnce = function () {
            var hs_sat26CYQb = new $hs.Func(2);
            hs_sat26CYQb.evaluate = function (hs_len26CYPq, hs_p26CYPp) {
                return $hs.modules.GHCziFingerprint.hs_fingerprintData.hscall(hs_p26CYPp, hs_len26CYPq);
            };
            var hs_sat26CYQa = new $hs.Thunk();
            hs_sat26CYQa.evaluateOnce = function () {
                var hs_sat26CYQc = new $hs.Thunk();
                hs_sat26CYQc.evaluateOnce = function () {
                    var hs_sat26CYQd = new $hs.Func(1);
                    hs_sat26CYQd.evaluate = function (hs_c26CYP3) {
                        var hs_w3226CYP5 = new $hs.Thunk();
                        hs_w3226CYP5.evaluateOnce = function () {
                            var hs_sat26CYQr = new $hs.Thunk();
                            hs_sat26CYQr.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26CYP3);
                            };
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26CYQr);
                        };
                        var hs_sat26CYQf = new $hs.Thunk();
                        hs_sat26CYQf.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_w3226CYP5);
                        };
                        var hs_sat26CYQg = new $hs.Data(2);
                        hs_sat26CYQg.data = [hs_sat26CYQf, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_sat26CYQh = new $hs.Thunk();
                        hs_sat26CYQh.evaluateOnce = function () {
                            var hs_sat26CYQp = new $hs.Thunk();
                            hs_sat26CYQp.evaluateOnce = function () {
                                var hs_sat26CYQq = new $hs.Data(1);
                                hs_sat26CYQq.data = [8];
                                return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32, hs_w3226CYP5, hs_sat26CYQq);
                            };
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26CYQp);
                        };
                        var hs_sat26CYQi = new $hs.Data(2);
                        hs_sat26CYQi.data = [hs_sat26CYQh, hs_sat26CYQg];
                        var hs_sat26CYQj = new $hs.Thunk();
                        hs_sat26CYQj.evaluateOnce = function () {
                            var hs_sat26CYQn = new $hs.Thunk();
                            hs_sat26CYQn.evaluateOnce = function () {
                                var hs_sat26CYQo = new $hs.Data(1);
                                hs_sat26CYQo.data = [16];
                                return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32, hs_w3226CYP5, hs_sat26CYQo);
                            };
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26CYQn);
                        };
                        var hs_sat26CYQk = new $hs.Data(2);
                        hs_sat26CYQk.data = [hs_sat26CYQj, hs_sat26CYQi];
                        var hs_sat26CYQe = new $hs.Thunk();
                        hs_sat26CYQe.evaluateOnce = function () {
                            var hs_sat26CYQl = new $hs.Thunk();
                            hs_sat26CYQl.evaluateOnce = function () {
                                var hs_sat26CYQm = new $hs.Data(1);
                                hs_sat26CYQm.data = [24];
                                return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32, hs_w3226CYP5, hs_sat26CYQm);
                            };
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26CYQl);
                        };
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26CYQe, hs_sat26CYQk];
                        return $res;
                    };
                    return $hs.modules.GHCziList.hs_concatMap.hscall(hs_sat26CYQd, hs_str26CYPk);
                };
                return $hs.modules.ForeignziMarshalziArray.hs_withArrayLen.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26CYQc);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CYQa, hs_sat26CYQb);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafeDupablePerformIO, hs_sat26CYQ9);
    };
    this.hs_fingerprintFingerprints.evaluate = function (hs_fs26CYPu) {
        var hs_sat26CYQs = new $hs.Thunk();
        hs_sat26CYQs.evaluateOnce = function () {
            var hs_sat26CYQu = new $hs.Func(2);
            hs_sat26CYQu.evaluate = function (hs_len26CYPA, hs_p26CYPy) {
                var hs_sat26CYQw = new $hs.Thunk();
                hs_sat26CYQw.evaluateOnce = function () {
                    var hs_sat26CYQx = new $hs.Thunk();
                    hs_sat26CYQx.evaluateOnce = function () {
                        var hs_sat26CYQy = new $hs.Thunk();
                        hs_sat26CYQy.evaluateOnce = function () {
                            return $hs.modules.GHCziList.hs_head.hscall(hs_fs26CYPu);
                        };
                        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFingerprint, hs_sat26CYQy);
                    };
                    return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_len26CYPA, hs_sat26CYQx);
                };
                var hs_sat26CYQv = new $hs.Thunk();
                hs_sat26CYQv.evaluateOnce = function () {
                    return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_p26CYPy);
                };
                return $hs.modules.GHCziFingerprint.hs_fingerprintData.hscall(hs_sat26CYQv, hs_sat26CYQw);
            };
            var hs_sat26CYQt = new $hs.Thunk();
            hs_sat26CYQt.evaluateOnce = function () {
                return $hs.modules.ForeignziMarshalziArray.hs_withArrayLen.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFingerprint, hs_fs26CYPu);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CYQt, hs_sat26CYQu);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafeDupablePerformIO, hs_sat26CYQs);
    };
};
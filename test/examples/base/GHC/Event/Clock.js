
$hs.modules.GHCziEventziClock = new $hs.Module();
$hs.modules.GHCziEventziClock.dependencies = ["GHC.CString", "GHC.Integer", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Float", "GHC.Err", "GHC.Ptr", "Foreign.C.Error", "Foreign.C.Types", "Foreign.Marshal.Utils", "Foreign.Storable"];
$hs.modules.GHCziEventziClock.initBeforeDependencies = function () {
    this.hs_zdWCTimeval = new $hs.Func(2);
    this.hs_zdfStorableCTimeval = new $hs.Data(1);
    this.hs_getCurrentTime = new $hs.Thunk();
    this.hs_CTimeval = new $hs.Func(2);
    this.hs_zdWCTimeval.notEvaluated = true;
    this.hs_zdWCTimeval.evaluate = function (hs_tpl26DskH, hs_tpl26DskJ) {
        $hs.modules.GHCziEventziClock.loadDependencies();
        return this.evaluate(hs_tpl26DskH, hs_tpl26DskJ);
    };
    this.hs_zdfStorableCTimeval.notEvaluated = true;
    this.hs_zdfStorableCTimeval.evaluate = function () {
        $hs.modules.GHCziEventziClock.loadDependencies();
        return this;
    };
    this.hs_getCurrentTime.evaluateOnce = function () {
        $hs.modules.GHCziEventziClock.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_CTimeval.notEvaluated = true;
    this.hs_CTimeval.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziEventziClock.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziEventziClock.initAfterDependencies = function () {
    this.hs_zdWCTimeval.notEvaluated = false;
    this.hs_zdfStorableCTimeval.notEvaluated = false;
    this.hs_zdfStorableCTimeval.evaluate = function () {
        return this;
    };
    this.hs_CTimeval.notEvaluated = false;
    var hs_zdcpoke25v3Ox = new $hs.Func(2);
    var hs_zdcpeek25v3OQ = new $hs.Func(1);
    var hs_zdcalignment25v3P5 = new $hs.Func(1);
    var hs_zdcsizzeOf25v3P8 = new $hs.Func(1);
    var hs_zdcpokeByteOff25v3Pb = new $hs.Thunk();
    var hs_zdcpeekByteOff25v3Pc = new $hs.Thunk();
    var hs_zdcpokeElemOff25v3Pd = new $hs.Thunk();
    var hs_zdcpeekElemOff25v3Pe = new $hs.Thunk();
    var hs_sat26DsmR = new $hs.Func(1);
    var hs_sat26Dsn8 = new $hs.Thunk();
    this.hs_zdWCTimeval.evaluate = function (hs_tpl26DskH, hs_tpl26DskJ) {
        var hs_tpl26DskL = hs_tpl26DskH;
        if (hs_tpl26DskH.notEvaluated) {
            hs_tpl26DskL = hs_tpl26DskH.hscall();
        }
        var hs_tpl26DskM = hs_tpl26DskJ;
        if (hs_tpl26DskJ.notEvaluated) {
            hs_tpl26DskM = hs_tpl26DskJ.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DskL, hs_tpl26DskM];
        return $res;
    };
    hs_zdcpoke25v3Ox.evaluate = function (hs_ptr26DskQ, hs_tv26DskS) {
        var hs_sat26Dsmp = new $hs.Thunk();
        hs_sat26Dsmp.evaluateOnce = function () {
            var hs_sat26Dsmv = new $hs.Thunk();
            hs_sat26Dsmv.evaluateOnce = function () {
                var hs_wild26Dsmx = hs_tv26DskS;
                if (hs_tv26DskS.notEvaluated) {
                    hs_wild26Dsmx = hs_tv26DskS.hscall();
                }
                var hs_ds126Dsl3 = hs_wild26Dsmx.data[1];
                if (hs_ds126Dsl3.notEvaluated) {
                    return hs_ds126Dsl3.hscall();
                } else {
                    return hs_ds126Dsl3;
                }
            };
            var hs_sat26Dsmu = new $hs.Data(1);
            hs_sat26Dsmu.data = [4];
            return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCSUSeconds, hs_ptr26DskQ, hs_sat26Dsmu, hs_sat26Dsmv);
        };
        var hs_sat26Dsmo = new $hs.Thunk();
        hs_sat26Dsmo.evaluateOnce = function () {
            var hs_sat26Dsmr = new $hs.Thunk();
            hs_sat26Dsmr.evaluateOnce = function () {
                var hs_wild26Dsmt = hs_tv26DskS;
                if (hs_tv26DskS.notEvaluated) {
                    hs_wild26Dsmt = hs_tv26DskS.hscall();
                }
                var hs_ds26DskW = hs_wild26Dsmt.data[0];
                if (hs_ds26DskW.notEvaluated) {
                    return hs_ds26DskW.hscall();
                } else {
                    return hs_ds26DskW;
                }
            };
            var hs_sat26Dsmq = new $hs.Data(1);
            hs_sat26Dsmq.data = [0];
            return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCTime, hs_ptr26DskQ, hs_sat26Dsmq, hs_sat26Dsmr);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dsmo, hs_sat26Dsmp);
    };
    hs_zdcpeek25v3OQ.evaluate = function (hs_ptr26Dsl8) {
        var hs_sat26Dsmz = new $hs.Func(1);
        hs_sat26Dsmz.evaluate = function (hs_seczq26Dslg) {
            var hs_sat26DsmC = new $hs.Func(1);
            hs_sat26DsmC.evaluate = function (hs_useczq26Dslh) {
                var hs_sat26DsmF = new $hs.Thunk();
                hs_sat26DsmF.evaluateOnce = function () {
                    return $hs.modules.GHCziEventziClock.hs_zdWCTimeval.hscall(hs_seczq26Dslg, hs_useczq26Dslh);
                };
                var hs_sat26DsmE = new $hs.Thunk();
                hs_sat26DsmE.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsmE, hs_sat26DsmF);
            };
            var hs_sat26DsmB = new $hs.Thunk();
            hs_sat26DsmB.evaluateOnce = function () {
                var hs_sat26DsmD = new $hs.Data(1);
                hs_sat26DsmD.data = [4];
                return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCSUSeconds, hs_ptr26Dsl8, hs_sat26DsmD);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsmB, hs_sat26DsmC);
        };
        var hs_sat26Dsmy = new $hs.Thunk();
        hs_sat26Dsmy.evaluateOnce = function () {
            var hs_sat26DsmA = new $hs.Data(1);
            hs_sat26DsmA.data = [0];
            return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCTime, hs_ptr26Dsl8, hs_sat26DsmA);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dsmy, hs_sat26Dsmz);
    };
    hs_zdcalignment25v3P5.evaluate = function (hs_ds26Dsln) {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCLong, $hs.modules.GHCziErr.hs_undefined);
    };
    hs_zdcsizzeOf25v3P8.evaluate = function (hs_ds26Dslq) {
        var $res = new $hs.Data(1);
        $res.data = [8];
        return $res;
    };
    this.hs_zdfStorableCTimeval.data = [hs_zdcsizzeOf25v3P8, hs_zdcalignment25v3P5, hs_zdcpeekElemOff25v3Pe, hs_zdcpokeElemOff25v3Pd, hs_zdcpeekByteOff25v3Pc, hs_zdcpokeByteOff25v3Pb, hs_zdcpeek25v3OQ, hs_zdcpoke25v3Ox];
    hs_zdcpokeByteOff25v3Pb.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_zddmpokeByteOff.hscall($hs.modules.GHCziEventziClock.hs_zdfStorableCTimeval);
    };
    hs_zdcpeekByteOff25v3Pc.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_zddmpeekByteOff.hscall($hs.modules.GHCziEventziClock.hs_zdfStorableCTimeval);
    };
    hs_zdcpokeElemOff25v3Pd.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_zddmpokeElemOff.hscall($hs.modules.GHCziEventziClock.hs_zdfStorableCTimeval);
    };
    hs_zdcpeekElemOff25v3Pe.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_zddmpeekElemOff.hscall($hs.modules.GHCziEventziClock.hs_zdfStorableCTimeval);
    };
    hs_sat26DsmR.evaluate = function (hs_tv26Dsm5) {
        var hs_sat26DsmH = new $hs.Thunk();
        hs_sat26DsmH.evaluateOnce = function () {
            var hs_sat26DsmN = new $hs.Data(1);
            hs_sat26DsmN.data = [1000000 % 1];
            var hs_sat26DsmM = new $hs.Thunk();
            hs_sat26DsmM.evaluateOnce = function () {
                var hs_sat26DsmO = new $hs.Thunk();
                hs_sat26DsmO.evaluateOnce = function () {
                    var hs_wild26DsmQ = hs_tv26Dsm5;
                    if (hs_tv26Dsm5.notEvaluated) {
                        hs_wild26DsmQ = hs_tv26Dsm5.hscall();
                    }
                    var hs_ds126Dsmf = hs_wild26DsmQ.data[1];
                    if (hs_ds126Dsmf.notEvaluated) {
                        return hs_ds126Dsmf.hscall();
                    } else {
                        return hs_ds126Dsmf;
                    }
                };
                return $hs.modules.GHCziReal.hs_realToFrac.hscall($hs.modules.ForeignziCziTypes.hs_zdfRealCSUSeconds, $hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_sat26DsmO);
            };
            return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_sat26DsmM, hs_sat26DsmN);
        };
        var hs_sat26DsmI = new $hs.Thunk();
        hs_sat26DsmI.evaluateOnce = function () {
            var hs_sat26DsmJ = new $hs.Thunk();
            hs_sat26DsmJ.evaluateOnce = function () {
                var hs_wild26DsmL = hs_tv26Dsm5;
                if (hs_tv26Dsm5.notEvaluated) {
                    hs_wild26DsmL = hs_tv26Dsm5.hscall();
                }
                var hs_ds26Dsm9 = hs_wild26DsmL.data[0];
                if (hs_ds26Dsm9.notEvaluated) {
                    return hs_ds26Dsm9.hscall();
                } else {
                    return hs_ds26Dsm9;
                }
            };
            return $hs.modules.GHCziReal.hs_realToFrac.hscall($hs.modules.ForeignziCziTypes.hs_zdfRealCTime, $hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_sat26DsmJ);
        };
        var hs_t26Dsmm = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26DsmI, hs_sat26DsmH);
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_t26Dsmm);
    };
    hs_sat26Dsn8.evaluateOnce = function () {
        var hs_sat26DsmT = new $hs.Func(1);
        hs_sat26DsmT.evaluate = function (hs_tvptr26DslH) {
            var hs_sat26Dsn0 = new $hs.Thunk();
            hs_sat26Dsn0.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.GHCziEventziClock.hs_zdfStorableCTimeval, hs_tvptr26DslH);
            };
            var hs_sat26DsmZ = new $hs.Thunk();
            hs_sat26DsmZ.evaluateOnce = function () {
                var hs_sat26Dsn2 = new $hs.Thunk();
                hs_sat26Dsn2.evaluateOnce = function () {
                    var hs_ds26Dsn4 = hs_tvptr26DslH;
                    if (hs_tvptr26DslH.notEvaluated) {
                        hs_ds26Dsn4 = hs_tvptr26DslH.hscall();
                    }
                    var hs_ds126DslO = hs_ds26Dsn4.data[0];
                    var hs_ds226Dsn5 = $hs.modules.GHCziPtr.hs_nullPtr;
                    if ($hs.modules.GHCziPtr.hs_nullPtr.notEvaluated) {
                        hs_ds226Dsn5 = $hs.modules.GHCziPtr.hs_nullPtr.hscall();
                    }
                    var hs_ds326DslP = hs_ds226Dsn5.data[0];
                    var hs_sat26Dsn3 = new $hs.Func(1);
                    hs_sat26Dsn3.evaluate = function (hs_ds426DslQ) {
                        var hs_wild26Dsn7 = [hs_ds426DslQ, gettimeofday(hs_ds126DslO, hs_ds326DslP)];
                        var hs_ds526DslV = hs_wild26Dsn7[0];
                        var hs_ds626DslW = hs_wild26Dsn7[1];
                        var hs_sat26Dsn6 = new $hs.Data(1);
                        hs_sat26Dsn6.data = [hs_ds626DslW];
                        return [hs_ds526DslV, hs_sat26Dsn6];
                    };
                    if (hs_sat26Dsn3.notEvaluated) {
                        return hs_sat26Dsn3.hscall();
                    } else {
                        return hs_sat26Dsn3;
                    }
                };
                var hs_sat26Dsn1 = new $hs.Thunk();
                hs_sat26Dsn1.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("gettimeofday\x00");
                };
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26Dsn1, hs_sat26Dsn2);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsmZ, hs_sat26Dsn0);
        };
        var hs_sat26DsmS = new $hs.Thunk();
        hs_sat26DsmS.evaluateOnce = function () {
            var hs_sat26DsmU = new $hs.Thunk();
            hs_sat26DsmU.evaluateOnce = function () {
                var hs_sat26DsmW = new $hs.Thunk();
                hs_sat26DsmW.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_nt26DslB = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCTime, hs_sat26DsmW);
                var hs_sat26DsmY = new $hs.Thunk();
                hs_sat26DsmY.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_nt126DslC = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCSUSeconds, hs_sat26DsmY);
                var $res = new $hs.Data(1);
                $res.data = [hs_nt26DslB, hs_nt126DslC];
                return $res;
            };
            return $hs.modules.ForeignziMarshalziUtils.hs_with.hscall($hs.modules.GHCziEventziClock.hs_zdfStorableCTimeval, hs_sat26DsmU);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsmS, hs_sat26DsmT);
    };
    this.hs_getCurrentTime.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dsn8, hs_sat26DsmR);
    };
    this.hs_CTimeval.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
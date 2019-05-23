
$hs.modules.SystemziEventziClock = new $hs.Module();
$hs.modules.SystemziEventziClock.dependencies = ["GHC.Integer", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Float", "GHC.Err", "GHC.Ptr", "Foreign.C.Error", "Foreign.C.Types", "Foreign.Marshal.Utils", "Foreign.Storable"];
$hs.modules.SystemziEventziClock.initBeforeDependencies = function () {
    this.hs_zdWCTimeval = new $hs.Func(2);
    this.hs_zdfStorableCTimeval = new $hs.Data(1);
    this.hs_getCurrentTime = new $hs.Thunk();
    this.hs_CTimeval = new $hs.Func(2);
    this.hs_zdWCTimeval.notEvaluated = true;
    this.hs_zdWCTimeval.evaluate = function (hs_tpl26DRmU, hs_tpl26DRmX) {
        $hs.modules.SystemziEventziClock.loadDependencies();
        return this.evaluate(hs_tpl26DRmU, hs_tpl26DRmX);
    };
    this.hs_zdfStorableCTimeval.notEvaluated = true;
    this.hs_zdfStorableCTimeval.evaluate = function () {
        $hs.modules.SystemziEventziClock.loadDependencies();
        return this;
    };
    this.hs_getCurrentTime.evaluateOnce = function () {
        $hs.modules.SystemziEventziClock.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_CTimeval.notEvaluated = true;
    this.hs_CTimeval.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziEventziClock.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.SystemziEventziClock.initAfterDependencies = function () {
    this.hs_zdWCTimeval.notEvaluated = false;
    this.hs_zdfStorableCTimeval.notEvaluated = false;
    this.hs_zdfStorableCTimeval.evaluate = function () {
        return this;
    };
    this.hs_CTimeval.notEvaluated = false;
    var hs_zdcpoke25vsQN = new $hs.Func(2);
    var hs_zdcpeek25vsR7 = new $hs.Func(1);
    var hs_zdcalignment25vsRt = new $hs.Func(1);
    var hs_zdcsizzeOf25vsRx = new $hs.Func(1);
    var hs_zdcpokeByteOff25vsRB = new $hs.Thunk();
    var hs_zdcpeekByteOff25vsRD = new $hs.Thunk();
    var hs_zdcpokeElemOff25vsRF = new $hs.Thunk();
    var hs_zdcpeekElemOff25vsRH = new $hs.Thunk();
    var hs_sat26DRpo = new $hs.Func(1);
    var hs_sat26DRpF = new $hs.Thunk();
    this.hs_zdWCTimeval.evaluate = function (hs_tpl26DRmU, hs_tpl26DRmX) {
        var hs_tpl26DRoS = hs_tpl26DRmU;
        if (hs_tpl26DRmU.notEvaluated) {
            hs_tpl26DRoS = hs_tpl26DRmU.hscall();
        }
        var hs_tpl26DRn0 = hs_tpl26DRoS.data[0];
        var hs_tpl26DRoR = hs_tpl26DRmX;
        if (hs_tpl26DRmX.notEvaluated) {
            hs_tpl26DRoR = hs_tpl26DRmX.hscall();
        }
        var hs_tpl26DRn1 = hs_tpl26DRoR.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DRn0, hs_tpl26DRn1];
        return $res;
    };
    hs_zdcpoke25vsQN.evaluate = function (hs_ptr26DRn6, hs_tv26DRn8) {
        var hs_sat26DRoY = new $hs.Thunk();
        hs_sat26DRoY.evaluateOnce = function () {
            var hs_sat26DRoV = new $hs.Thunk();
            hs_sat26DRoV.evaluateOnce = function () {
                var hs_wild26DRoU = hs_tv26DRn8;
                if (hs_tv26DRn8.notEvaluated) {
                    hs_wild26DRoU = hs_tv26DRn8.hscall();
                }
                var hs_rb126DRnj = hs_wild26DRoU.data[1];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb126DRnj];
                return $res;
            };
            var hs_sat26DRoW = new $hs.Data(1);
            hs_sat26DRoW.data = [4];
            return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCLong, hs_ptr26DRn6, hs_sat26DRoW, hs_sat26DRoV);
        };
        var hs_sat26DRp2 = new $hs.Thunk();
        hs_sat26DRp2.evaluateOnce = function () {
            var hs_sat26DRp0 = new $hs.Thunk();
            hs_sat26DRp0.evaluateOnce = function () {
                var hs_wild26DRoX = hs_tv26DRn8;
                if (hs_tv26DRn8.notEvaluated) {
                    hs_wild26DRoX = hs_tv26DRn8.hscall();
                }
                var hs_rb26DRnc = hs_wild26DRoX.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb26DRnc];
                return $res;
            };
            var hs_sat26DRp1 = new $hs.Data(1);
            hs_sat26DRp1.data = [0];
            return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCLong, hs_ptr26DRn6, hs_sat26DRp1, hs_sat26DRp0);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRp2, hs_sat26DRoY);
    };
    hs_zdcpeek25vsR7.evaluate = function (hs_ptr26DRnp) {
        var hs_sat26DRpa = new $hs.Func(1);
        hs_sat26DRpa.evaluate = function (hs_seczq26DRnx) {
            var hs_sat26DRp7 = new $hs.Func(1);
            hs_sat26DRp7.evaluate = function (hs_useczq26DRnA) {
                var hs_sat26DRp5 = new $hs.Thunk();
                hs_sat26DRp5.evaluateOnce = function () {
                    var hs_tpl26DRp4 = hs_seczq26DRnx;
                    if (hs_seczq26DRnx.notEvaluated) {
                        hs_tpl26DRp4 = hs_seczq26DRnx.hscall();
                    }
                    var hs_tpl126DRnD = hs_tpl26DRp4.data[0];
                    var hs_tpl226DRp3 = hs_useczq26DRnA;
                    if (hs_useczq26DRnA.notEvaluated) {
                        hs_tpl226DRp3 = hs_useczq26DRnA.hscall();
                    }
                    var hs_tpl326DRnE = hs_tpl226DRp3.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_tpl126DRnD, hs_tpl326DRnE];
                    return $res;
                };
                var hs_sat26DRp6 = new $hs.Thunk();
                hs_sat26DRp6.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DRp6, hs_sat26DRp5);
            };
            var hs_sat26DRp9 = new $hs.Thunk();
            hs_sat26DRp9.evaluateOnce = function () {
                var hs_sat26DRp8 = new $hs.Data(1);
                hs_sat26DRp8.data = [4];
                return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCLong, hs_ptr26DRnp, hs_sat26DRp8);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRp9, hs_sat26DRp7);
        };
        var hs_sat26DRpc = new $hs.Thunk();
        hs_sat26DRpc.evaluateOnce = function () {
            var hs_sat26DRpb = new $hs.Data(1);
            hs_sat26DRpb.data = [0];
            return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCLong, hs_ptr26DRnp, hs_sat26DRpb);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRpc, hs_sat26DRpa);
    };
    hs_zdcalignment25vsRt.evaluate = function (hs_ds26DRnL) {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCLong, $hs.modules.GHCziErr.hs_undefined);
    };
    hs_zdcsizzeOf25vsRx.evaluate = function (hs_ds26DRnP) {
        var $res = new $hs.Data(1);
        $res.data = [8];
        return $res;
    };
    this.hs_zdfStorableCTimeval.data = [hs_zdcsizzeOf25vsRx, hs_zdcalignment25vsRt, hs_zdcpeekElemOff25vsRH, hs_zdcpokeElemOff25vsRF, hs_zdcpeekByteOff25vsRD, hs_zdcpokeByteOff25vsRB, hs_zdcpeek25vsR7, hs_zdcpoke25vsQN];
    hs_zdcpokeByteOff25vsRB.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_zddmpokeByteOff.hscall($hs.modules.SystemziEventziClock.hs_zdfStorableCTimeval);
    };
    hs_zdcpeekByteOff25vsRD.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_zddmpeekByteOff.hscall($hs.modules.SystemziEventziClock.hs_zdfStorableCTimeval);
    };
    hs_zdcpokeElemOff25vsRF.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_zddmpokeElemOff.hscall($hs.modules.SystemziEventziClock.hs_zdfStorableCTimeval);
    };
    hs_zdcpeekElemOff25vsRH.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_zddmpeekElemOff.hscall($hs.modules.SystemziEventziClock.hs_zdfStorableCTimeval);
    };
    hs_sat26DRpo.evaluate = function (hs_tv26DRoy) {
        var hs_sat26DRpj = new $hs.Thunk();
        hs_sat26DRpj.evaluateOnce = function () {
            var hs_sat26DRpf = new $hs.Data(1);
            hs_sat26DRpf.data = [1000000 % 1];
            var hs_sat26DRph = new $hs.Thunk();
            hs_sat26DRph.evaluateOnce = function () {
                var hs_sat26DRpg = new $hs.Thunk();
                hs_sat26DRpg.evaluateOnce = function () {
                    var hs_wild26DRpe = hs_tv26DRoy;
                    if (hs_tv26DRoy.notEvaluated) {
                        hs_wild26DRpe = hs_tv26DRoy.hscall();
                    }
                    var hs_rb126DRoI = hs_wild26DRpe.data[1];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb126DRoI];
                    return $res;
                };
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCLong, $hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26DRpg);
            };
            return $hs.modules.GHCziReal.hs_zs.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_sat26DRph, hs_sat26DRpf);
        };
        var hs_sat26DRpn = new $hs.Thunk();
        hs_sat26DRpn.evaluateOnce = function () {
            var hs_sat26DRpl = new $hs.Thunk();
            hs_sat26DRpl.evaluateOnce = function () {
                var hs_wild26DRpi = hs_tv26DRoy;
                if (hs_tv26DRoy.notEvaluated) {
                    hs_wild26DRpi = hs_tv26DRoy.hscall();
                }
                var hs_rb26DRoC = hs_wild26DRpi.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb26DRoC];
                return $res;
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCLong, $hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26DRpl);
        };
        var hs_t26DRoP = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26DRpn, hs_sat26DRpj);
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_t26DRoP);
    };
    hs_sat26DRpF.evaluateOnce = function () {
        var hs_sat26DRpy = new $hs.Func(1);
        hs_sat26DRpy.evaluate = function (hs_tvptr26DRoa) {
            var hs_sat26DRps = new $hs.Thunk();
            hs_sat26DRps.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.SystemziEventziClock.hs_zdfStorableCTimeval, hs_tvptr26DRoa);
            };
            var hs_sat26DRpx = new $hs.Thunk();
            hs_sat26DRpx.evaluateOnce = function () {
                var hs_sat26DRpv = new $hs.Thunk();
                hs_sat26DRpv.evaluateOnce = function () {
                    var hs_ds26DRpr = hs_tvptr26DRoa;
                    if (hs_tvptr26DRoa.notEvaluated) {
                        hs_ds26DRpr = hs_tvptr26DRoa.hscall();
                    }
                    var hs_ds126DRoh = hs_ds26DRpr.data[0];
                    var hs_ds226DRpq = $hs.modules.GHCziPtr.hs_nullPtr;
                    if ($hs.modules.GHCziPtr.hs_nullPtr.notEvaluated) {
                        hs_ds226DRpq = $hs.modules.GHCziPtr.hs_nullPtr.hscall();
                    }
                    var hs_ds326DRoi = hs_ds226DRpq.data[0];
                    var hs_sat26DRpu = new $hs.Func(1);
                    hs_sat26DRpu.evaluate = function (hs_ds426DRoj) {
                        var hs_wild26DRpp = [hs_ds426DRoj, gettimeofday(hs_ds126DRoh, hs_ds326DRoi)];
                        var hs_ds526DRoo = hs_wild26DRpp[0];
                        var hs_ds626DRop = hs_wild26DRpp[1];
                        var hs_sat26DRpt = new $hs.Data(1);
                        hs_sat26DRpt.data = [hs_ds626DRop];
                        return [hs_ds526DRoo, hs_sat26DRpt];
                    };
                    if (hs_sat26DRpu.notEvaluated) {
                        return hs_sat26DRpu.hscall();
                    } else {
                        return hs_sat26DRpu;
                    }
                };
                var hs_sat26DRpw = new $hs.Thunk();
                hs_sat26DRpw.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("gettimeofday\x00");
                };
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DRpw, hs_sat26DRpv);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRpx, hs_sat26DRps);
        };
        var hs_sat26DRpE = new $hs.Thunk();
        hs_sat26DRpE.evaluateOnce = function () {
            var hs_sat26DRpD = new $hs.Thunk();
            hs_sat26DRpD.evaluateOnce = function () {
                var hs_sat26DRpA = new $hs.Thunk();
                hs_sat26DRpA.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_tpl26DRpz = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCLong, hs_sat26DRpA);
                var hs_tpl126DRo4 = hs_tpl26DRpz.data[0];
                var hs_sat26DRpC = new $hs.Thunk();
                hs_sat26DRpC.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_tpl226DRpB = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCLong, hs_sat26DRpC);
                var hs_tpl326DRo5 = hs_tpl226DRpB.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl126DRo4, hs_tpl326DRo5];
                return $res;
            };
            return $hs.modules.ForeignziMarshalziUtils.hs_with.hscall($hs.modules.SystemziEventziClock.hs_zdfStorableCTimeval, hs_sat26DRpD);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DRpE, hs_sat26DRpy);
    };
    this.hs_getCurrentTime.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRpF, hs_sat26DRpo);
    };
    this.hs_CTimeval.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
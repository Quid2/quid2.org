
$hs.modules.GHCziWeak = new $hs.Module();
$hs.modules.GHCziWeak.dependencies = ["GHC.Types", "GHC.CString", "GHC.Unit", "Data.Maybe", "GHC.Base", "Data.Typeable.Internal"];
$hs.modules.GHCziWeak.initBeforeDependencies = function () {
    this.hs_runFinalizzerBatch = new $hs.Func(2);
    this.hs_finalizze = new $hs.Func(1);
    this.hs_deRefWeak = new $hs.Func(1);
    this.hs_mkWeak = new $hs.Func(3);
    this.hs_zdfTypeable1Weak = new $hs.Thunk();
    this.hs_Weak = new $hs.Func(1);
    this.hs_runFinalizzerBatch.notEvaluated = true;
    this.hs_runFinalizzerBatch.evaluate = function (hs_ds26DecS, hs_arr26Ded6) {
        $hs.modules.GHCziWeak.loadDependencies();
        return this.evaluate(hs_ds26DecS, hs_arr26Ded6);
    };
    this.hs_finalizze.notEvaluated = true;
    this.hs_finalizze.evaluate = function (hs_ds26Dedk) {
        $hs.modules.GHCziWeak.loadDependencies();
        return this.evaluate(hs_ds26Dedk);
    };
    this.hs_deRefWeak.notEvaluated = true;
    this.hs_deRefWeak.evaluate = function (hs_ds26DedD) {
        $hs.modules.GHCziWeak.loadDependencies();
        return this.evaluate(hs_ds26DedD);
    };
    this.hs_mkWeak.notEvaluated = true;
    this.hs_mkWeak.evaluate = function (hs_key26Dee5, hs_val26Dee6, hs_ds26DedZ) {
        $hs.modules.GHCziWeak.loadDependencies();
        return this.evaluate(hs_key26Dee5, hs_val26Dee6, hs_ds26DedZ);
    };
    this.hs_zdfTypeable1Weak.evaluateOnce = function () {
        $hs.modules.GHCziWeak.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_Weak.notEvaluated = true;
    this.hs_Weak.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziWeak.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.GHCziWeak.initAfterDependencies = function () {
    this.hs_runFinalizzerBatch.notEvaluated = false;
    this.hs_finalizze.notEvaluated = false;
    this.hs_deRefWeak.notEvaluated = false;
    this.hs_mkWeak.notEvaluated = false;
    this.hs_Weak.notEvaluated = false;
    var hs_zdctypeOf125uPId = new $hs.Func(1);
    this.hs_runFinalizzerBatch.evaluate = function (hs_ds26DecS, hs_arr26Ded6) {
        var hs_wild26DeeB = hs_ds26DecS;
        if (hs_ds26DecS.notEvaluated) {
            hs_wild26DeeB = hs_ds26DecS.hscall();
        }
        var hs_n26Dedi = hs_wild26DeeB.data[0];
        var hs_go26Dede = new $hs.Func(1);
        hs_go26Dede.evaluate = function (hs_m26Ded1) {
            var hs_sat26DeeC = new $hs.Func(1);
            hs_sat26DeeC.evaluate = function (hs_s26Deda) {
                var hs_ds126Ded4 = hs_m26Ded1;
                if (hs_m26Ded1.notEvaluated) {
                    hs_ds126Ded4 = hs_m26Ded1.hscall();
                }
                switch (hs_ds126Ded4) {
                case 0:
                    return [hs_s26Deda, $hs.modules.GHCziUnit.hs_Z0T];
                default:
                    var hs_mzq26Ded5 = ($hs.Int.addCarry(hs_ds126Ded4, ~1, 1))[0];
                    throw "primitive operation indexArray#. Not implemeted yet.";
                    var hs_io26Ded9 = hs_wild126DeeE[0];
                    var hs_wild226DeeF = $hs.modules.GHCziBase.hs_unIO.hscall(hs_io26Ded9, hs_s26Deda);
                    var hs_szq26Dedg = hs_wild226DeeF[0];
                    var hs_sat26DeeD = new $hs.Thunk();
                    hs_sat26DeeD.evaluateOnce = function () {
                        return hs_go26Dede.hscall(hs_mzq26Ded5);
                    };
                    return $hs.modules.GHCziBase.hs_unIO.hscall(hs_sat26DeeD, hs_szq26Dedg);
                }
            };
            var hs_sat26DeeA = new $hs.Func(1);
            hs_sat26DeeA.evaluate = function (hs_tpl26DecY) {
                if (hs_tpl26DecY.notEvaluated) {
                    return hs_tpl26DecY.hscall();
                } else {
                    return hs_tpl26DecY;
                }
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DeeA, hs_sat26DeeC);
        };
        return hs_go26Dede.hscall(hs_n26Dedi);
    };
    this.hs_finalizze.evaluate = function (hs_ds26Dedk) {
        var hs_wild26DeeI = hs_ds26Dedk;
        if (hs_ds26Dedk.notEvaluated) {
            hs_wild26DeeI = hs_ds26Dedk.hscall();
        }
        var hs_w26Dedr = hs_wild26DeeI.data[0];
        var hs_sat26DeeJ = new $hs.Func(1);
        hs_sat26DeeJ.evaluate = function (hs_s26Deds) {
            throw "primitive operation finalizeWeak#. Not implemeted yet.";
            var hs_s126Dedz = hs_wild126DeeL[0];
            var hs_ds126Dedx = hs_wild126DeeL[1];
            var hs_ds226DedA = hs_wild126DeeL[2];
            var hs_ds326DeeK = hs_ds126Dedx;
            if (hs_ds126Dedx.notEvaluated) {
                hs_ds326DeeK = hs_ds126Dedx.hscall();
            }
            switch (hs_ds326DeeK) {
            case 0:
                return [hs_s126Dedz, $hs.modules.GHCziUnit.hs_Z0T];
            default:
                return hs_ds226DedA.hscall(hs_s126Dedz);
            }
        };
        var hs_sat26DeeH = new $hs.Func(1);
        hs_sat26DeeH.evaluate = function (hs_tpl26Dedo) {
            if (hs_tpl26Dedo.notEvaluated) {
                return hs_tpl26Dedo.hscall();
            } else {
                return hs_tpl26Dedo;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DeeH, hs_sat26DeeJ);
    };
    this.hs_deRefWeak.evaluate = function (hs_ds26DedD) {
        var hs_wild26DeeN = hs_ds26DedD;
        if (hs_ds26DedD.notEvaluated) {
            hs_wild26DeeN = hs_ds26DedD.hscall();
        }
        var hs_w26DedK = hs_wild26DeeN.data[0];
        var hs_sat26DeeO = new $hs.Func(1);
        hs_sat26DeeO.evaluate = function (hs_s26DedL) {
            throw "primitive operation deRefWeak#. Not implemeted yet.";
            var hs_s126DedS = hs_wild126DeeQ[0];
            var hs_flag26DedQ = hs_wild126DeeQ[1];
            var hs_p26DedT = hs_wild126DeeQ[2];
            var hs_ds126DeeP = hs_flag26DedQ;
            if (hs_flag26DedQ.notEvaluated) {
                hs_ds126DeeP = hs_flag26DedQ.hscall();
            }
            switch (hs_ds126DeeP) {
            case 0:
                return [hs_s126DedS, $hs.modules.DataziMaybe.hs_Nothing];
            default:
                var hs_sat26DeeR = new $hs.Data(2);
                hs_sat26DeeR.data = [hs_p26DedT];
                return [hs_s126DedS, hs_sat26DeeR];
            }
        };
        var hs_sat26DeeM = new $hs.Func(1);
        hs_sat26DeeM.evaluate = function (hs_tpl26DedH) {
            if (hs_tpl26DedH.notEvaluated) {
                return hs_tpl26DedH.hscall();
            } else {
                return hs_tpl26DedH;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DeeM, hs_sat26DeeO);
    };
    this.hs_mkWeak.evaluate = function (hs_key26Dee5, hs_val26Dee6, hs_ds26DedZ) {
        var hs_wild26DeeT = hs_ds26DedZ;
        if (hs_ds26DedZ.notEvaluated) {
            hs_wild26DeeT = hs_ds26DedZ.hscall();
        }
        switch (hs_wild26DeeT.tag) {
        case 1:
            var hs_sat26DeeY = new $hs.Func(1);
            hs_sat26DeeY.evaluate = function (hs_s26Dee7) {
                throw "primitive operation mkWeak#. Not implemeted yet.";
                var hs_s126Deeb = hs_wild126Def0[0];
                var hs_w26Deec = hs_wild126Def0[1];
                var hs_sat26DeeZ = new $hs.Data(1);
                hs_sat26DeeZ.data = [hs_w26Deec];
                return [hs_s126Deeb, hs_sat26DeeZ];
            };
            var hs_sat26DeeX = new $hs.Func(1);
            hs_sat26DeeX.evaluate = function (hs_tpl26Dee2) {
                if (hs_tpl26Dee2.notEvaluated) {
                    return hs_tpl26Dee2.hscall();
                } else {
                    return hs_tpl26Dee2;
                }
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DeeX, hs_sat26DeeY);
        case 2:
            var hs_finalizzer26Deek = hs_wild26DeeT.data[0];
            var hs_sat26DeeU = new $hs.Func(1);
            hs_sat26DeeU.evaluate = function (hs_s26Deel) {
                throw "primitive operation mkWeak#. Not implemeted yet.";
                var hs_s126Deep = hs_wild126DeeW[0];
                var hs_w26Deeq = hs_wild126DeeW[1];
                var hs_sat26DeeV = new $hs.Data(1);
                hs_sat26DeeV.data = [hs_w26Deeq];
                return [hs_s126Deep, hs_sat26DeeV];
            };
            var hs_sat26DeeS = new $hs.Func(1);
            hs_sat26DeeS.evaluate = function (hs_tpl26Deeh) {
                if (hs_tpl26Deeh.notEvaluated) {
                    return hs_tpl26Deeh.hscall();
                } else {
                    return hs_tpl26Deeh;
                }
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DeeS, hs_sat26DeeU);
        }
    };
    hs_zdctypeOf125uPId.evaluate = function (hs_ds26Deez) {
        var hs_sat26Def1 = new $hs.Thunk();
        hs_sat26Def1.evaluateOnce = function () {
            var hs_sat26Def3 = new $hs.Thunk();
            hs_sat26Def3.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Weak\x00");
            };
            var hs_sat26Def4 = new $hs.Thunk();
            hs_sat26Def4.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GHC.Weak\x00");
            };
            var hs_sat26Def2 = new $hs.Thunk();
            hs_sat26Def2.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26Def2, hs_sat26Def4, hs_sat26Def3);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26Def1, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeable1Weak.evaluateOnce = function () {
        if (hs_zdctypeOf125uPId.notEvaluated) {
            return hs_zdctypeOf125uPId.hscall();
        } else {
            return hs_zdctypeOf125uPId;
        }
    };
    this.hs_Weak.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
};
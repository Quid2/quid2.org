
$hs.modules.GHCziWeak = new $hs.Module();
$hs.modules.GHCziWeak.dependencies = ["GHC.Types", "GHC.Unit", "Data.Maybe", "GHC.Base", "Data.Typeable"];
$hs.modules.GHCziWeak.initBeforeDependencies = function () {
    this.hs_runFinalizzerBatch = new $hs.Func(2);
    this.hs_finalizze = new $hs.Func(1);
    this.hs_deRefWeak = new $hs.Func(1);
    this.hs_mkWeak = new $hs.Func(3);
    this.hs_weakTc = new $hs.Thunk();
    this.hs_zdfTypeable1Weak = new $hs.Thunk();
    this.hs_Weak = new $hs.Func(1);
    this.hs_runFinalizzerBatch.notEvaluated = true;
    this.hs_runFinalizzerBatch.evaluate = function (hs_ds26DBwX, hs_arr26DBxb) {
        $hs.modules.GHCziWeak.loadDependencies();
        return this.evaluate(hs_ds26DBwX, hs_arr26DBxb);
    };
    this.hs_finalizze.notEvaluated = true;
    this.hs_finalizze.evaluate = function (hs_ds26DBxp) {
        $hs.modules.GHCziWeak.loadDependencies();
        return this.evaluate(hs_ds26DBxp);
    };
    this.hs_deRefWeak.notEvaluated = true;
    this.hs_deRefWeak.evaluate = function (hs_ds26DBxI) {
        $hs.modules.GHCziWeak.loadDependencies();
        return this.evaluate(hs_ds26DBxI);
    };
    this.hs_mkWeak.notEvaluated = true;
    this.hs_mkWeak.evaluate = function (hs_key26DBya, hs_val26DByb, hs_ds26DBy4) {
        $hs.modules.GHCziWeak.loadDependencies();
        return this.evaluate(hs_key26DBya, hs_val26DByb, hs_ds26DBy4);
    };
    this.hs_weakTc.evaluateOnce = function () {
        $hs.modules.GHCziWeak.loadDependencies();
        return this.evaluateOnce();
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
    var hs_sat26DBz4 = new $hs.Thunk();
    var hs_zdctypeOf125vd2k = new $hs.Func(1);
    this.hs_runFinalizzerBatch.evaluate = function (hs_ds26DBwX, hs_arr26DBxb) {
        var hs_wild26DByF = hs_ds26DBwX;
        if (hs_ds26DBwX.notEvaluated) {
            hs_wild26DByF = hs_ds26DBwX.hscall();
        }
        var hs_n26DBxn = hs_wild26DByF.data[0];
        var hs_go26DBxj = new $hs.Func(1);
        hs_go26DBxj.evaluate = function (hs_m26DBx6) {
            var hs_sat26DByI = new $hs.Func(1);
            hs_sat26DByI.evaluate = function (hs_s26DBxf) {
                var hs_ds126DBx9 = hs_m26DBx6;
                if (hs_m26DBx6.notEvaluated) {
                    hs_ds126DBx9 = hs_m26DBx6.hscall();
                }
                switch (hs_ds126DBx9) {
                case 0:
                    return [hs_s26DBxf, $hs.modules.GHCziUnit.hs_Z0T];
                default:
                    var hs_mzq26DBxa = ($hs.Int.addCarry(hs_ds126DBx9, ~1, 1))[0];
                    throw "primitive operation indexArray#. Not implemeted yet.";
                    var hs_io26DBxe = hs_wild126DByE[0];
                    var hs_wild226DByD = $hs.modules.GHCziBase.hs_unIO.hscall(hs_io26DBxe, hs_s26DBxf);
                    var hs_szq26DBxl = hs_wild226DByD[0];
                    var hs_sat26DByH = new $hs.Thunk();
                    hs_sat26DByH.evaluateOnce = function () {
                        return hs_go26DBxj.hscall(hs_mzq26DBxa);
                    };
                    return $hs.modules.GHCziBase.hs_unIO.hscall(hs_sat26DByH, hs_szq26DBxl);
                }
            };
            var hs_sat26DByJ = new $hs.Func(1);
            hs_sat26DByJ.evaluate = function (hs_tpl26DBx3) {
                if (hs_tpl26DBx3.notEvaluated) {
                    return hs_tpl26DBx3.hscall();
                } else {
                    return hs_tpl26DBx3;
                }
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DByJ, hs_sat26DByI);
        };
        return hs_go26DBxj.hscall(hs_n26DBxn);
    };
    this.hs_finalizze.evaluate = function (hs_ds26DBxp) {
        var hs_wild26DByM = hs_ds26DBxp;
        if (hs_ds26DBxp.notEvaluated) {
            hs_wild26DByM = hs_ds26DBxp.hscall();
        }
        var hs_w26DBxw = hs_wild26DByM.data[0];
        var hs_sat26DByN = new $hs.Func(1);
        hs_sat26DByN.evaluate = function (hs_s26DBxx) {
            throw "primitive operation finalizeWeak#. Not implemeted yet.";
            var hs_s126DBxE = hs_wild126DByL[0];
            var hs_ds126DBxC = hs_wild126DByL[1];
            var hs_ds226DBxF = hs_wild126DByL[2];
            var hs_ds326DByK = hs_ds126DBxC;
            if (hs_ds126DBxC.notEvaluated) {
                hs_ds326DByK = hs_ds126DBxC.hscall();
            }
            switch (hs_ds326DByK) {
            case 0:
                return [hs_s126DBxE, $hs.modules.GHCziUnit.hs_Z0T];
            default:
                return hs_ds226DBxF.hscall(hs_s126DBxE);
            }
        };
        var hs_sat26DByO = new $hs.Func(1);
        hs_sat26DByO.evaluate = function (hs_tpl26DBxt) {
            if (hs_tpl26DBxt.notEvaluated) {
                return hs_tpl26DBxt.hscall();
            } else {
                return hs_tpl26DBxt;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DByO, hs_sat26DByN);
    };
    this.hs_deRefWeak.evaluate = function (hs_ds26DBxI) {
        var hs_wild26DByR = hs_ds26DBxI;
        if (hs_ds26DBxI.notEvaluated) {
            hs_wild26DByR = hs_ds26DBxI.hscall();
        }
        var hs_w26DBxP = hs_wild26DByR.data[0];
        var hs_sat26DByT = new $hs.Func(1);
        hs_sat26DByT.evaluate = function (hs_s26DBxQ) {
            throw "primitive operation deRefWeak#. Not implemeted yet.";
            var hs_s126DBxX = hs_wild126DByQ[0];
            var hs_flag26DBxV = hs_wild126DByQ[1];
            var hs_p26DBxY = hs_wild126DByQ[2];
            var hs_ds126DByP = hs_flag26DBxV;
            if (hs_flag26DBxV.notEvaluated) {
                hs_ds126DByP = hs_flag26DBxV.hscall();
            }
            switch (hs_ds126DByP) {
            case 0:
                return [hs_s126DBxX, $hs.modules.DataziMaybe.hs_Nothing];
            default:
                var hs_sat26DByS = new $hs.Data(2);
                hs_sat26DByS.data = [hs_p26DBxY];
                return [hs_s126DBxX, hs_sat26DByS];
            }
        };
        var hs_sat26DByU = new $hs.Func(1);
        hs_sat26DByU.evaluate = function (hs_tpl26DBxM) {
            if (hs_tpl26DBxM.notEvaluated) {
                return hs_tpl26DBxM.hscall();
            } else {
                return hs_tpl26DBxM;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DByU, hs_sat26DByT);
    };
    this.hs_mkWeak.evaluate = function (hs_key26DBya, hs_val26DByb, hs_ds26DBy4) {
        var hs_wild26DByW = hs_ds26DBy4;
        if (hs_ds26DBy4.notEvaluated) {
            hs_wild26DByW = hs_ds26DBy4.hscall();
        }
        switch (hs_wild26DByW.tag) {
        case 1:
            var hs_sat26DByY = new $hs.Func(1);
            hs_sat26DByY.evaluate = function (hs_s26DByc) {
                throw "primitive operation mkWeak#. Not implemeted yet.";
                var hs_s126DByg = hs_wild126DByV[0];
                var hs_w26DByh = hs_wild126DByV[1];
                var hs_sat26DByX = new $hs.Data(1);
                hs_sat26DByX.data = [hs_w26DByh];
                return [hs_s126DByg, hs_sat26DByX];
            };
            var hs_sat26DByZ = new $hs.Func(1);
            hs_sat26DByZ.evaluate = function (hs_tpl26DBy7) {
                if (hs_tpl26DBy7.notEvaluated) {
                    return hs_tpl26DBy7.hscall();
                } else {
                    return hs_tpl26DBy7;
                }
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DByZ, hs_sat26DByY);
        case 2:
            var hs_finalizzer26DByp = hs_wild26DByW.data[0];
            var hs_sat26DBz2 = new $hs.Func(1);
            hs_sat26DBz2.evaluate = function (hs_s26DByq) {
                throw "primitive operation mkWeak#. Not implemeted yet.";
                var hs_s126DByu = hs_wild126DBz0[0];
                var hs_w26DByv = hs_wild126DBz0[1];
                var hs_sat26DBz1 = new $hs.Data(1);
                hs_sat26DBz1.data = [hs_w26DByv];
                return [hs_s126DByu, hs_sat26DBz1];
            };
            var hs_sat26DBz3 = new $hs.Func(1);
            hs_sat26DBz3.evaluate = function (hs_tpl26DBym) {
                if (hs_tpl26DBym.notEvaluated) {
                    return hs_tpl26DBym.hscall();
                } else {
                    return hs_tpl26DBym;
                }
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBz3, hs_sat26DBz2);
        }
    };
    hs_sat26DBz4.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Weak\x00");
    };
    this.hs_weakTc.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DBz4);
    };
    hs_zdctypeOf125vd2k.evaluate = function (hs_ds26DByC) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall($hs.modules.GHCziWeak.hs_weakTc, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeable1Weak.evaluateOnce = function () {
        if (hs_zdctypeOf125vd2k.notEvaluated) {
            return hs_zdctypeOf125vd2k.hscall();
        } else {
            return hs_zdctypeOf125vd2k;
        }
    };
    this.hs_Weak.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
};
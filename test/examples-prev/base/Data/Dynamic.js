
$hs.modules.DataziDynamic = new $hs.Module();
$hs.modules.DataziDynamic.dependencies = ["GHC.Types", "GHC.Base", "GHC.Show", "GHC.Err", "GHC.Exception", "Data.Typeable", "GHC.Classes", "Unsafe.Coerce"];
$hs.modules.DataziDynamic.initBeforeDependencies = function () {
    this.hs_dynTypeRep = new $hs.Func(1);
    this.hs_dynApply = new $hs.Func(2);
    this.hs_fromDynamic = new $hs.Func(2);
    this.hs_fromDyn = new $hs.Func(3);
    this.hs_toDyn = new $hs.Func(2);
    this.hs_zdfTypeableDynamic = new $hs.Thunk();
    this.hs_zdfShowDynamic = new $hs.Data(1);
    this.hs_zdfExceptionDynamic = new $hs.Data(1);
    this.hs_dynApp = new $hs.Func(2);
    this.hs_Dynamic = new $hs.Func(2);
    this.hs_dynTypeRep.notEvaluated = true;
    this.hs_dynTypeRep.evaluate = function (hs_ds26DEtu) {
        $hs.modules.DataziDynamic.loadDependencies();
        return this.evaluate(hs_ds26DEtu);
    };
    this.hs_dynApply.notEvaluated = true;
    this.hs_dynApply.evaluate = function (hs_ds26DEtB, hs_ds126DEtF) {
        $hs.modules.DataziDynamic.loadDependencies();
        return this.evaluate(hs_ds26DEtB, hs_ds126DEtF);
    };
    this.hs_fromDynamic.notEvaluated = true;
    this.hs_fromDynamic.evaluate = function (hs_zddTypeable26DEu2, hs_ds26DEtU) {
        $hs.modules.DataziDynamic.loadDependencies();
        return this.evaluate(hs_zddTypeable26DEu2, hs_ds26DEtU);
    };
    this.hs_fromDyn.notEvaluated = true;
    this.hs_fromDyn.evaluate = function (hs_zddTypeable26DEuc, hs_ds26DEu8, hs_def26DEud) {
        $hs.modules.DataziDynamic.loadDependencies();
        return this.evaluate(hs_zddTypeable26DEuc, hs_ds26DEu8, hs_def26DEud);
    };
    this.hs_toDyn.notEvaluated = true;
    this.hs_toDyn.evaluate = function (hs_zddTypeable26DEuk, hs_v26DEul) {
        $hs.modules.DataziDynamic.loadDependencies();
        return this.evaluate(hs_zddTypeable26DEuk, hs_v26DEul);
    };
    this.hs_zdfTypeableDynamic.evaluateOnce = function () {
        $hs.modules.DataziDynamic.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfShowDynamic.notEvaluated = true;
    this.hs_zdfShowDynamic.evaluate = function () {
        $hs.modules.DataziDynamic.loadDependencies();
        return this;
    };
    this.hs_zdfExceptionDynamic.notEvaluated = true;
    this.hs_zdfExceptionDynamic.evaluate = function () {
        $hs.modules.DataziDynamic.loadDependencies();
        return this;
    };
    this.hs_dynApp.notEvaluated = true;
    this.hs_dynApp.evaluate = function (hs_f26DEuU, hs_x26DEuY) {
        $hs.modules.DataziDynamic.loadDependencies();
        return this.evaluate(hs_f26DEuU, hs_x26DEuY);
    };
    this.hs_Dynamic.notEvaluated = true;
    this.hs_Dynamic.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.DataziDynamic.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.DataziDynamic.initAfterDependencies = function () {
    this.hs_dynTypeRep.notEvaluated = false;
    this.hs_dynApply.notEvaluated = false;
    this.hs_fromDynamic.notEvaluated = false;
    this.hs_fromDyn.notEvaluated = false;
    this.hs_toDyn.notEvaluated = false;
    this.hs_zdfShowDynamic.notEvaluated = false;
    this.hs_zdfShowDynamic.evaluate = function () {
        return this;
    };
    this.hs_zdfExceptionDynamic.notEvaluated = false;
    this.hs_zdfExceptionDynamic.evaluate = function () {
        return this;
    };
    this.hs_dynApp.notEvaluated = false;
    this.hs_Dynamic.notEvaluated = false;
    var hs_sat26DEvA = new $hs.Thunk();
    var hs_dynamicTc25tjl8 = new $hs.Thunk();
    var hs_zdctypeOf25vfYa = new $hs.Func(1);
    var hs_zdcshowsPrec25vfYe = new $hs.Func(2);
    var hs_zdcshowList25vfYv = new $hs.Thunk();
    var hs_zdcshow25vfYx = new $hs.Thunk();
    var hs_zdcfromException25vfYz = new $hs.Thunk();
    var hs_zdctoException25vfYB = new $hs.Thunk();
    this.hs_dynTypeRep.evaluate = function (hs_ds26DEtu) {
        var hs_wild26DEvl = hs_ds26DEtu;
        if (hs_ds26DEtu.notEvaluated) {
            hs_wild26DEvl = hs_ds26DEtu.hscall();
        }
        var hs_tr26DEty = hs_wild26DEvl.data[0];
        if (hs_tr26DEty.notEvaluated) {
            return hs_tr26DEty.hscall();
        } else {
            return hs_tr26DEty;
        }
    };
    this.hs_dynApply.evaluate = function (hs_ds26DEtB, hs_ds126DEtF) {
        var hs_wild26DEvp = hs_ds26DEtB;
        if (hs_ds26DEtB.notEvaluated) {
            hs_wild26DEvp = hs_ds26DEtB.hscall();
        }
        var hs_t126DEtJ = hs_wild26DEvp.data[0];
        var hs_f26DEtO = hs_wild26DEvp.data[1];
        var hs_wild126DEvo = hs_ds126DEtF;
        if (hs_ds126DEtF.notEvaluated) {
            hs_wild126DEvo = hs_ds126DEtF.hscall();
        }
        var hs_t226DEtK = hs_wild126DEvo.data[0];
        var hs_x26DEtP = hs_wild126DEvo.data[1];
        var hs_wild226DEvn = $hs.modules.DataziTypeable.hs_funResultTy.hscall(hs_t126DEtJ, hs_t226DEtK);
        switch (hs_wild226DEvn.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_t326DEtN = hs_wild226DEvn.data[0];
            var hs_sat26DEvq = new $hs.Thunk();
            hs_sat26DEvq.evaluateOnce = function () {
                return $hs.modules.UnsafeziCoerce.hs_unsafeCoerce.hscall(hs_f26DEtO, hs_x26DEtP);
            };
            var hs_sat26DEvr = new $hs.Data(1);
            hs_sat26DEvr.data = [hs_t326DEtN, hs_sat26DEvq];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26DEvr];
            return $res;
        }
    };
    this.hs_fromDynamic.evaluate = function (hs_zddTypeable26DEu2, hs_ds26DEtU) {
        var hs_wild26DEvs = hs_ds26DEtU;
        if (hs_ds26DEtU.notEvaluated) {
            hs_wild26DEvs = hs_ds26DEtU.hscall();
        }
        var hs_t26DEu1 = hs_wild26DEvs.data[0];
        var hs_v26DEtZ = hs_wild26DEvs.data[1];
        var hs_r26DEu0 = new $hs.Thunk();
        hs_r26DEu0.evaluateOnce = function () {
            return $hs.modules.UnsafeziCoerce.hs_unsafeCoerce.hscall(hs_v26DEtZ);
        };
        var hs_sat26DEvu = new $hs.Thunk();
        hs_sat26DEvu.evaluateOnce = function () {
            return $hs.modules.DataziTypeable.hs_typeOf.hscall(hs_zddTypeable26DEu2, hs_r26DEu0);
        };
        var hs_wild126DEvt = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.DataziTypeable.hs_zdfEqTypeRep, hs_t26DEu1, hs_sat26DEvu);
        switch (hs_wild126DEvt.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var $res = new $hs.Data(2);
            $res.data = [hs_r26DEu0];
            return $res;
        }
    };
    this.hs_fromDyn.evaluate = function (hs_zddTypeable26DEuc, hs_ds26DEu8, hs_def26DEud) {
        var hs_wild26DEvv = hs_ds26DEu8;
        if (hs_ds26DEu8.notEvaluated) {
            hs_wild26DEvv = hs_ds26DEu8.hscall();
        }
        var hs_t26DEuf = hs_wild26DEvv.data[0];
        var hs_v26DEuh = hs_wild26DEvv.data[1];
        var hs_sat26DEvx = new $hs.Thunk();
        hs_sat26DEvx.evaluateOnce = function () {
            return $hs.modules.DataziTypeable.hs_typeOf.hscall(hs_zddTypeable26DEuc, hs_def26DEud);
        };
        var hs_wild126DEvw = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.DataziTypeable.hs_zdfEqTypeRep, hs_sat26DEvx, hs_t26DEuf);
        switch (hs_wild126DEvw.tag) {
        case 1:
            if (hs_def26DEud.notEvaluated) {
                return hs_def26DEud.hscall();
            } else {
                return hs_def26DEud;
            }
        case 2:
            return $hs.modules.UnsafeziCoerce.hs_unsafeCoerce.hscall(hs_v26DEuh);
        }
    };
    this.hs_toDyn.evaluate = function (hs_zddTypeable26DEuk, hs_v26DEul) {
        var hs_sat26DEvy = new $hs.Thunk();
        hs_sat26DEvy.evaluateOnce = function () {
            return $hs.modules.UnsafeziCoerce.hs_unsafeCoerce.hscall(hs_v26DEul);
        };
        var hs_sat26DEvz = new $hs.Thunk();
        hs_sat26DEvz.evaluateOnce = function () {
            return $hs.modules.DataziTypeable.hs_typeOf.hscall(hs_zddTypeable26DEuk, hs_v26DEul);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DEvz, hs_sat26DEvy];
        return $res;
    };
    hs_sat26DEvA.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Dynamic\x00");
    };
    hs_dynamicTc25tjl8.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DEvA);
    };
    hs_zdctypeOf25vfYa.evaluate = function (hs_ds26DEus) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_dynamicTc25tjl8, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableDynamic.evaluateOnce = function () {
        if (hs_zdctypeOf25vfYa.notEvaluated) {
            return hs_zdctypeOf25vfYa.hscall();
        } else {
            return hs_zdctypeOf25vfYa;
        }
    };
    hs_zdcshowsPrec25vfYe.evaluate = function (hs_ds26DEuJ, hs_ds126DEux) {
        var hs_wild26DEvB = hs_ds126DEux;
        if (hs_ds126DEux.notEvaluated) {
            hs_wild26DEvB = hs_ds126DEux.hscall();
        }
        var hs_t26DEuE = hs_wild26DEvB.data[0];
        var hs_sat26DEvH = new $hs.Thunk();
        hs_sat26DEvH.evaluateOnce = function () {
            var hs_sat26DEvE = new $hs.Thunk();
            hs_sat26DEvE.evaluateOnce = function () {
                var hs_sat26DEvD = new $hs.Thunk();
                hs_sat26DEvD.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(">>\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEvD);
            };
            var hs_sat26DEvG = new $hs.Thunk();
            hs_sat26DEvG.evaluateOnce = function () {
                var hs_sat26DEvF = new $hs.Data(1);
                hs_sat26DEvF.data = [0];
                return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.DataziTypeable.hs_zdfShowTypeRep, hs_sat26DEvF, hs_t26DEuE);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DEvG, hs_sat26DEvE);
        };
        var hs_sat26DEvJ = new $hs.Thunk();
        hs_sat26DEvJ.evaluateOnce = function () {
            var hs_sat26DEvI = new $hs.Thunk();
            hs_sat26DEvI.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("<<\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEvI);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DEvJ, hs_sat26DEvH);
    };
    this.hs_zdfShowDynamic.data = [hs_zdcshowsPrec25vfYe, hs_zdcshow25vfYx, hs_zdcshowList25vfYv];
    hs_zdcshowList25vfYv.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.DataziDynamic.hs_zdfShowDynamic);
    };
    hs_zdcshow25vfYx.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.DataziDynamic.hs_zdfShowDynamic);
    };
    this.hs_zdfExceptionDynamic.data = [$hs.modules.DataziDynamic.hs_zdfTypeableDynamic, $hs.modules.DataziDynamic.hs_zdfShowDynamic, hs_zdctoException25vfYB, hs_zdcfromException25vfYz];
    hs_zdcfromException25vfYz.evaluateOnce = function () {
        return $hs.modules.GHCziException.hs_zddmfromException.hscall($hs.modules.DataziDynamic.hs_zdfExceptionDynamic);
    };
    hs_zdctoException25vfYB.evaluateOnce = function () {
        return $hs.modules.GHCziException.hs_zddmtoException.hscall($hs.modules.DataziDynamic.hs_zdfExceptionDynamic);
    };
    this.hs_dynApp.evaluate = function (hs_f26DEuU, hs_x26DEuY) {
        var hs_wild26DEv7 = hs_f26DEuU;
        if (hs_f26DEuU.notEvaluated) {
            hs_wild26DEv7 = hs_f26DEuU.hscall();
        }
        var hs_t126DEv2 = hs_wild26DEv7.data[0];
        var hs_f126DEvi = hs_wild26DEv7.data[1];
        var hs_wild126DEva = hs_x26DEuY;
        if (hs_x26DEuY.notEvaluated) {
            hs_wild126DEva = hs_x26DEuY.hscall();
        }
        var hs_t226DEv3 = hs_wild126DEva.data[0];
        var hs_x126DEvj = hs_wild126DEva.data[1];
        var hs_wild226DEvK = $hs.modules.DataziTypeable.hs_funResultTy.hscall(hs_t126DEv2, hs_t226DEv3);
        switch (hs_wild226DEvK.tag) {
        case 1:
            var hs_sat26DEvR = new $hs.Thunk();
            hs_sat26DEvR.evaluateOnce = function () {
                var hs_sat26DEvP = new $hs.Thunk();
                hs_sat26DEvP.evaluateOnce = function () {
                    var hs_sat26DEvN = new $hs.Thunk();
                    hs_sat26DEvN.evaluateOnce = function () {
                        var hs_sat26DEvL = new $hs.Thunk();
                        hs_sat26DEvL.evaluateOnce = function () {
                            return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.DataziDynamic.hs_zdfShowDynamic, hs_wild126DEva);
                        };
                        var hs_sat26DEvM = new $hs.Thunk();
                        hs_sat26DEvM.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(" to argument \x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DEvM, hs_sat26DEvL);
                    };
                    var hs_sat26DEvO = new $hs.Thunk();
                    hs_sat26DEvO.evaluateOnce = function () {
                        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.DataziDynamic.hs_zdfShowDynamic, hs_wild26DEv7);
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DEvO, hs_sat26DEvN);
                };
                var hs_sat26DEvQ = new $hs.Thunk();
                hs_sat26DEvQ.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Can't apply function \x00");
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DEvQ, hs_sat26DEvP);
            };
            var hs_sat26DEvT = new $hs.Thunk();
            hs_sat26DEvT.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Type error in dynamic application.\n\x00");
            };
            var hs_sat26DEvS = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DEvT, hs_sat26DEvR);
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DEvS);
        case 2:
            var hs_t326DEvh = hs_wild226DEvK.data[0];
            var hs_sat26DEvU = new $hs.Thunk();
            hs_sat26DEvU.evaluateOnce = function () {
                return $hs.modules.UnsafeziCoerce.hs_unsafeCoerce.hscall(hs_f126DEvi, hs_x126DEvj);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_t326DEvh, hs_sat26DEvU];
            return $res;
        }
    };
    this.hs_Dynamic.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
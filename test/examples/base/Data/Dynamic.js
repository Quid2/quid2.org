
$hs.modules.DataziDynamic = new $hs.Module();
$hs.modules.DataziDynamic.dependencies = ["GHC.Types", "GHC.CString", "GHC.Base", "GHC.Show", "GHC.Err", "GHC.Exception", "Data.Typeable.Internal", "GHC.Classes", "Unsafe.Coerce"];
$hs.modules.DataziDynamic.initBeforeDependencies = function () {
    this.hs_dynTypeRep = new $hs.Func(1);
    this.hs_dynApply = new $hs.Func(2);
    this.hs_fromDynamic = new $hs.Func(2);
    this.hs_fromDyn = new $hs.Func(3);
    this.hs_toDyn = new $hs.Func(2);
    this.hs_zdfShowDynamic = new $hs.Data(1);
    this.hs_zdfTypeableDynamic = new $hs.Thunk();
    this.hs_zdfExceptionDynamic = new $hs.Data(1);
    this.hs_dynApp = new $hs.Func(2);
    this.hs_Dynamic = new $hs.Func(2);
    this.hs_dynTypeRep.notEvaluated = true;
    this.hs_dynTypeRep.evaluate = function (hs_ds26Dh8R) {
        $hs.modules.DataziDynamic.loadDependencies();
        return this.evaluate(hs_ds26Dh8R);
    };
    this.hs_dynApply.notEvaluated = true;
    this.hs_dynApply.evaluate = function (hs_ds26Dh8Y, hs_ds126Dh92) {
        $hs.modules.DataziDynamic.loadDependencies();
        return this.evaluate(hs_ds26Dh8Y, hs_ds126Dh92);
    };
    this.hs_fromDynamic.notEvaluated = true;
    this.hs_fromDynamic.evaluate = function (hs_zddTypeable26Dh9p, hs_ds26Dh9h) {
        $hs.modules.DataziDynamic.loadDependencies();
        return this.evaluate(hs_zddTypeable26Dh9p, hs_ds26Dh9h);
    };
    this.hs_fromDyn.notEvaluated = true;
    this.hs_fromDyn.evaluate = function (hs_zddTypeable26Dh9z, hs_ds26Dh9v, hs_def26Dh9A) {
        $hs.modules.DataziDynamic.loadDependencies();
        return this.evaluate(hs_zddTypeable26Dh9z, hs_ds26Dh9v, hs_def26Dh9A);
    };
    this.hs_toDyn.notEvaluated = true;
    this.hs_toDyn.evaluate = function (hs_zddTypeable26Dh9H, hs_v26Dh9I) {
        $hs.modules.DataziDynamic.loadDependencies();
        return this.evaluate(hs_zddTypeable26Dh9H, hs_v26Dh9I);
    };
    this.hs_zdfShowDynamic.notEvaluated = true;
    this.hs_zdfShowDynamic.evaluate = function () {
        $hs.modules.DataziDynamic.loadDependencies();
        return this;
    };
    this.hs_zdfTypeableDynamic.evaluateOnce = function () {
        $hs.modules.DataziDynamic.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfExceptionDynamic.notEvaluated = true;
    this.hs_zdfExceptionDynamic.evaluate = function () {
        $hs.modules.DataziDynamic.loadDependencies();
        return this;
    };
    this.hs_dynApp.notEvaluated = true;
    this.hs_dynApp.evaluate = function (hs_f26Dhae, hs_x26Dhai) {
        $hs.modules.DataziDynamic.loadDependencies();
        return this.evaluate(hs_f26Dhae, hs_x26Dhai);
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
    var hs_zdcshowsPrec25uSDv = new $hs.Func(2);
    var hs_zdcshowList25uSDL = new $hs.Thunk();
    var hs_zdcshow25uSDM = new $hs.Thunk();
    var hs_zdctypeOf25uSDN = new $hs.Func(1);
    var hs_zdcfromException25uSDU = new $hs.Thunk();
    var hs_zdctoException25uSDV = new $hs.Thunk();
    this.hs_dynTypeRep.evaluate = function (hs_ds26Dh8R) {
        var hs_wild26DhaG = hs_ds26Dh8R;
        if (hs_ds26Dh8R.notEvaluated) {
            hs_wild26DhaG = hs_ds26Dh8R.hscall();
        }
        var hs_tr26Dh8V = hs_wild26DhaG.data[0];
        if (hs_tr26Dh8V.notEvaluated) {
            return hs_tr26Dh8V.hscall();
        } else {
            return hs_tr26Dh8V;
        }
    };
    this.hs_dynApply.evaluate = function (hs_ds26Dh8Y, hs_ds126Dh92) {
        var hs_wild26DhaJ = hs_ds26Dh8Y;
        if (hs_ds26Dh8Y.notEvaluated) {
            hs_wild26DhaJ = hs_ds26Dh8Y.hscall();
        }
        var hs_t126Dh96 = hs_wild26DhaJ.data[0];
        var hs_f26Dh9b = hs_wild26DhaJ.data[1];
        var hs_wild126DhaI = hs_ds126Dh92;
        if (hs_ds126Dh92.notEvaluated) {
            hs_wild126DhaI = hs_ds126Dh92.hscall();
        }
        var hs_t226Dh97 = hs_wild126DhaI.data[0];
        var hs_x26Dh9c = hs_wild126DhaI.data[1];
        var hs_wild226DhaK = $hs.modules.DataziTypeableziInternal.hs_funResultTy.hscall(hs_t126Dh96, hs_t226Dh97);
        switch (hs_wild226DhaK.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_t326Dh9a = hs_wild226DhaK.data[0];
            var hs_sat26DhaL = new $hs.Thunk();
            hs_sat26DhaL.evaluateOnce = function () {
                return $hs.modules.UnsafeziCoerce.hs_unsafeCoerce.hscall(hs_f26Dh9b, hs_x26Dh9c);
            };
            var hs_sat26DhaH = new $hs.Data(1);
            hs_sat26DhaH.data = [hs_t326Dh9a, hs_sat26DhaL];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26DhaH];
            return $res;
        }
    };
    this.hs_fromDynamic.evaluate = function (hs_zddTypeable26Dh9p, hs_ds26Dh9h) {
        var hs_wild26DhaM = hs_ds26Dh9h;
        if (hs_ds26Dh9h.notEvaluated) {
            hs_wild26DhaM = hs_ds26Dh9h.hscall();
        }
        var hs_t26Dh9o = hs_wild26DhaM.data[0];
        var hs_v26Dh9m = hs_wild26DhaM.data[1];
        var hs_r26Dh9n = new $hs.Thunk();
        hs_r26Dh9n.evaluateOnce = function () {
            return $hs.modules.UnsafeziCoerce.hs_unsafeCoerce.hscall(hs_v26Dh9m);
        };
        var hs_sat26DhaN = new $hs.Thunk();
        hs_sat26DhaN.evaluateOnce = function () {
            return $hs.modules.DataziTypeableziInternal.hs_typeOf.hscall(hs_zddTypeable26Dh9p, hs_r26Dh9n);
        };
        var hs_wild126DhaO = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.DataziTypeableziInternal.hs_zdfEqTypeRep, hs_t26Dh9o, hs_sat26DhaN);
        switch (hs_wild126DhaO.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var $res = new $hs.Data(2);
            $res.data = [hs_r26Dh9n];
            return $res;
        }
    };
    this.hs_fromDyn.evaluate = function (hs_zddTypeable26Dh9z, hs_ds26Dh9v, hs_def26Dh9A) {
        var hs_wild26DhaP = hs_ds26Dh9v;
        if (hs_ds26Dh9v.notEvaluated) {
            hs_wild26DhaP = hs_ds26Dh9v.hscall();
        }
        var hs_t26Dh9C = hs_wild26DhaP.data[0];
        var hs_v26Dh9E = hs_wild26DhaP.data[1];
        var hs_sat26DhaQ = new $hs.Thunk();
        hs_sat26DhaQ.evaluateOnce = function () {
            return $hs.modules.DataziTypeableziInternal.hs_typeOf.hscall(hs_zddTypeable26Dh9z, hs_def26Dh9A);
        };
        var hs_wild126DhaR = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.DataziTypeableziInternal.hs_zdfEqTypeRep, hs_sat26DhaQ, hs_t26Dh9C);
        switch (hs_wild126DhaR.tag) {
        case 1:
            if (hs_def26Dh9A.notEvaluated) {
                return hs_def26Dh9A.hscall();
            } else {
                return hs_def26Dh9A;
            }
        case 2:
            return $hs.modules.UnsafeziCoerce.hs_unsafeCoerce.hscall(hs_v26Dh9E);
        }
    };
    this.hs_toDyn.evaluate = function (hs_zddTypeable26Dh9H, hs_v26Dh9I) {
        var hs_sat26DhaT = new $hs.Thunk();
        hs_sat26DhaT.evaluateOnce = function () {
            return $hs.modules.UnsafeziCoerce.hs_unsafeCoerce.hscall(hs_v26Dh9I);
        };
        var hs_sat26DhaS = new $hs.Thunk();
        hs_sat26DhaS.evaluateOnce = function () {
            return $hs.modules.DataziTypeableziInternal.hs_typeOf.hscall(hs_zddTypeable26Dh9H, hs_v26Dh9I);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DhaS, hs_sat26DhaT];
        return $res;
    };
    hs_zdcshowsPrec25uSDv.evaluate = function (hs_ds26Dha0, hs_ds126Dh9O) {
        var hs_wild26DhaV = hs_ds126Dh9O;
        if (hs_ds126Dh9O.notEvaluated) {
            hs_wild26DhaV = hs_ds126Dh9O.hscall();
        }
        var hs_t26Dh9V = hs_wild26DhaV.data[0];
        var hs_sat26DhaX = new $hs.Thunk();
        hs_sat26DhaX.evaluateOnce = function () {
            var hs_sat26Dhb0 = new $hs.Thunk();
            hs_sat26Dhb0.evaluateOnce = function () {
                var hs_sat26Dhb2 = new $hs.Thunk();
                hs_sat26Dhb2.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(">>\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dhb2);
            };
            var hs_sat26DhaZ = new $hs.Thunk();
            hs_sat26DhaZ.evaluateOnce = function () {
                var hs_sat26Dhb1 = new $hs.Data(1);
                hs_sat26Dhb1.data = [0];
                return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.DataziTypeableziInternal.hs_zdfShowTypeRep, hs_sat26Dhb1, hs_t26Dh9V);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DhaZ, hs_sat26Dhb0);
        };
        var hs_sat26DhaU = new $hs.Thunk();
        hs_sat26DhaU.evaluateOnce = function () {
            var hs_sat26DhaY = new $hs.Thunk();
            hs_sat26DhaY.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("<<\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DhaY);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DhaU, hs_sat26DhaX);
    };
    this.hs_zdfShowDynamic.data = [hs_zdcshowsPrec25uSDv, hs_zdcshow25uSDM, hs_zdcshowList25uSDL];
    hs_zdcshowList25uSDL.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.DataziDynamic.hs_zdfShowDynamic);
    };
    hs_zdcshow25uSDM.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.DataziDynamic.hs_zdfShowDynamic);
    };
    hs_zdctypeOf25uSDN.evaluate = function (hs_ds26Dha9) {
        var hs_sat26Dhb3 = new $hs.Thunk();
        hs_sat26Dhb3.evaluateOnce = function () {
            var hs_sat26Dhb5 = new $hs.Thunk();
            hs_sat26Dhb5.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Dynamic\x00");
            };
            var hs_sat26Dhb6 = new $hs.Thunk();
            hs_sat26Dhb6.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Data.Dynamic\x00");
            };
            var hs_sat26Dhb4 = new $hs.Thunk();
            hs_sat26Dhb4.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26Dhb4, hs_sat26Dhb6, hs_sat26Dhb5);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26Dhb3, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableDynamic.evaluateOnce = function () {
        if (hs_zdctypeOf25uSDN.notEvaluated) {
            return hs_zdctypeOf25uSDN.hscall();
        } else {
            return hs_zdctypeOf25uSDN;
        }
    };
    this.hs_zdfExceptionDynamic.data = [hs_zdctypeOf25uSDN, $hs.modules.DataziDynamic.hs_zdfShowDynamic, hs_zdctoException25uSDV, hs_zdcfromException25uSDU];
    hs_zdcfromException25uSDU.evaluateOnce = function () {
        return $hs.modules.GHCziException.hs_zddmfromException.hscall($hs.modules.DataziDynamic.hs_zdfExceptionDynamic);
    };
    hs_zdctoException25uSDV.evaluateOnce = function () {
        return $hs.modules.GHCziException.hs_zddmtoException.hscall($hs.modules.DataziDynamic.hs_zdfExceptionDynamic);
    };
    this.hs_dynApp.evaluate = function (hs_f26Dhae, hs_x26Dhai) {
        var hs_wild26Dhar = hs_f26Dhae;
        if (hs_f26Dhae.notEvaluated) {
            hs_wild26Dhar = hs_f26Dhae.hscall();
        }
        var hs_t126Dham = hs_wild26Dhar.data[0];
        var hs_f126DhaC = hs_wild26Dhar.data[1];
        var hs_wild126Dhau = hs_x26Dhai;
        if (hs_x26Dhai.notEvaluated) {
            hs_wild126Dhau = hs_x26Dhai.hscall();
        }
        var hs_t226Dhan = hs_wild126Dhau.data[0];
        var hs_x126DhaD = hs_wild126Dhau.data[1];
        var hs_wild226Dhb8 = $hs.modules.DataziTypeableziInternal.hs_funResultTy.hscall(hs_t126Dham, hs_t226Dhan);
        switch (hs_wild226Dhb8.tag) {
        case 1:
            var hs_sat26Dhb9 = new $hs.Thunk();
            hs_sat26Dhb9.evaluateOnce = function () {
                var hs_sat26Dhbd = new $hs.Thunk();
                hs_sat26Dhbd.evaluateOnce = function () {
                    var hs_sat26Dhbf = new $hs.Thunk();
                    hs_sat26Dhbf.evaluateOnce = function () {
                        var hs_sat26Dhbh = new $hs.Thunk();
                        hs_sat26Dhbh.evaluateOnce = function () {
                            return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.DataziDynamic.hs_zdfShowDynamic, hs_wild126Dhau);
                        };
                        var hs_sat26Dhbg = new $hs.Thunk();
                        hs_sat26Dhbg.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(" to argument \x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dhbg, hs_sat26Dhbh);
                    };
                    var hs_sat26Dhbe = new $hs.Thunk();
                    hs_sat26Dhbe.evaluateOnce = function () {
                        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.DataziDynamic.hs_zdfShowDynamic, hs_wild26Dhar);
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dhbe, hs_sat26Dhbf);
                };
                var hs_sat26Dhbc = new $hs.Thunk();
                hs_sat26Dhbc.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Can't apply function \x00");
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dhbc, hs_sat26Dhbd);
            };
            var hs_sat26Dhba = new $hs.Thunk();
            hs_sat26Dhba.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Type error in dynamic application.\n\x00");
            };
            var hs_sat26Dhbb = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dhba, hs_sat26Dhb9);
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dhbb);
        case 2:
            var hs_t326DhaB = hs_wild226Dhb8.data[0];
            var hs_sat26Dhb7 = new $hs.Thunk();
            hs_sat26Dhb7.evaluateOnce = function () {
                return $hs.modules.UnsafeziCoerce.hs_unsafeCoerce.hscall(hs_f126DhaC, hs_x126DhaD);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_t326DhaB, hs_sat26Dhb7];
            return $res;
        }
    };
    this.hs_Dynamic.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};

$hs.modules.GHCziEventziIntMap = new $hs.Module();
$hs.modules.GHCziEventziIntMap.dependencies = ["GHC.Types", "GHC.CString", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Show", "GHC.Classes", "GHC.Word", "Data.Bits"];
$hs.modules.GHCziEventziIntMap.initBeforeDependencies = function () {
    this.hs_zdWTip = new $hs.Func(2);
    this.hs_zdWBin = new $hs.Func(4);
    this.hs_foldWithKey = new $hs.Func(3);
    this.hs_keys = new $hs.Func(1);
    this.hs_empty = new $hs.Data(1);
    this.hs_zdfEqIntMap = new $hs.Func(1);
    this.hs_zdfShowIntMap = new $hs.Func(1);
    this.hs_delete = new $hs.Func(2);
    this.hs_updateWith = new $hs.Func(3);
    this.hs_insertWith = new $hs.Func(4);
    this.hs_lookup = new $hs.Func(2);
    this.hs_member = new $hs.Func(2);
    this.hs_Nil = new $hs.Data(1);
    this.hs_Tip = new $hs.Func(2);
    this.hs_Bin = new $hs.Func(4);
    this.hs_zdWTip.notEvaluated = true;
    this.hs_zdWTip.evaluate = function (hs_tpl26Dt2S, hs_tpl26Dt2U) {
        $hs.modules.GHCziEventziIntMap.loadDependencies();
        return this.evaluate(hs_tpl26Dt2S, hs_tpl26Dt2U);
    };
    this.hs_zdWBin.notEvaluated = true;
    this.hs_zdWBin.evaluate = function (hs_tpl26Dt32, hs_tpl26Dt34, hs_tpl26Dt36, hs_tpl26Dt38) {
        $hs.modules.GHCziEventziIntMap.loadDependencies();
        return this.evaluate(hs_tpl26Dt32, hs_tpl26Dt34, hs_tpl26Dt36, hs_tpl26Dt38);
    };
    this.hs_foldWithKey.notEvaluated = true;
    this.hs_foldWithKey.evaluate = function (hs_f26Dt52, hs_zz26Dt4X, hs_t26Dt4V) {
        $hs.modules.GHCziEventziIntMap.loadDependencies();
        return this.evaluate(hs_f26Dt52, hs_zz26Dt4X, hs_t26Dt4V);
    };
    this.hs_keys.notEvaluated = true;
    this.hs_keys.evaluate = function (hs_m26Dt5q) {
        $hs.modules.GHCziEventziIntMap.loadDependencies();
        return this.evaluate(hs_m26Dt5q);
    };
    this.hs_empty.notEvaluated = true;
    this.hs_empty.evaluate = function () {
        $hs.modules.GHCziEventziIntMap.loadDependencies();
        return this;
    };
    this.hs_zdfEqIntMap.notEvaluated = true;
    this.hs_zdfEqIntMap.evaluate = function (hs_zddEq26Dt5I) {
        $hs.modules.GHCziEventziIntMap.loadDependencies();
        return this.evaluate(hs_zddEq26Dt5I);
    };
    this.hs_zdfShowIntMap.notEvaluated = true;
    this.hs_zdfShowIntMap.evaluate = function (hs_zddShow26Dt6s) {
        $hs.modules.GHCziEventziIntMap.loadDependencies();
        return this.evaluate(hs_zddShow26Dt6s);
    };
    this.hs_delete.notEvaluated = true;
    this.hs_delete.evaluate = function (hs_k26Dt72, hs_t26Dt6Y) {
        $hs.modules.GHCziEventziIntMap.loadDependencies();
        return this.evaluate(hs_k26Dt72, hs_t26Dt6Y);
    };
    this.hs_updateWith.notEvaluated = true;
    this.hs_updateWith.evaluate = function (hs_f26Dt85, hs_k26Dt80, hs_t26Dt7W) {
        $hs.modules.GHCziEventziIntMap.loadDependencies();
        return this.evaluate(hs_f26Dt85, hs_k26Dt80, hs_t26Dt7W);
    };
    this.hs_insertWith.notEvaluated = true;
    this.hs_insertWith.evaluate = function (hs_f26DtaL, hs_k26Dtax, hs_x26Dtay, hs_t26Dtav) {
        $hs.modules.GHCziEventziIntMap.loadDependencies();
        return this.evaluate(hs_f26DtaL, hs_k26Dtax, hs_x26Dtay, hs_t26Dtav);
    };
    this.hs_lookup.notEvaluated = true;
    this.hs_lookup.evaluate = function (hs_k26DtbT, hs_t26DtbX) {
        $hs.modules.GHCziEventziIntMap.loadDependencies();
        return this.evaluate(hs_k26DtbT, hs_t26DtbX);
    };
    this.hs_member.notEvaluated = true;
    this.hs_member.evaluate = function (hs_k26Dtc0, hs_m26Dtc4) {
        $hs.modules.GHCziEventziIntMap.loadDependencies();
        return this.evaluate(hs_k26Dtc0, hs_m26Dtc4);
    };
    this.hs_Nil.notEvaluated = true;
    this.hs_Nil.evaluate = function () {
        $hs.modules.GHCziEventziIntMap.loadDependencies();
        return this;
    };
    this.hs_Tip.notEvaluated = true;
    this.hs_Tip.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziEventziIntMap.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_Bin.notEvaluated = true;
    this.hs_Bin.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziEventziIntMap.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziEventziIntMap.initAfterDependencies = function () {
    this.hs_zdWTip.notEvaluated = false;
    this.hs_zdWBin.notEvaluated = false;
    this.hs_foldWithKey.notEvaluated = false;
    this.hs_keys.notEvaluated = false;
    this.hs_empty.notEvaluated = false;
    this.hs_empty.evaluate = function () {
        return this;
    };
    this.hs_zdfEqIntMap.notEvaluated = false;
    this.hs_zdfShowIntMap.notEvaluated = false;
    this.hs_delete.notEvaluated = false;
    this.hs_updateWith.notEvaluated = false;
    this.hs_insertWith.notEvaluated = false;
    this.hs_lookup.notEvaluated = false;
    this.hs_member.notEvaluated = false;
    this.hs_Nil.notEvaluated = false;
    this.hs_Nil.evaluate = function () {
        return this;
    };
    this.hs_Tip.notEvaluated = false;
    this.hs_Bin.notEvaluated = false;
    var hs_nequal25skCb = new $hs.Func(3);
    var hs_equal25skCa = new $hs.Func(3);
    var hs_foldrzq25skC8 = new $hs.Func(3);
    var hs_zdczsze25v4zb = new $hs.Func(3);
    var hs_zdczeze25v4zi = new $hs.Func(3);
    var hs_zdcshowsPrec25v4zB = new $hs.Func(1);
    var hs_zdcshowList25v4A9 = new $hs.Func(1);
    var hs_zdcshow25v4Aa = new $hs.Func(1);
    var hs_zzero25skCe = new $hs.Func(2);
    var hs_mask25skCg = new $hs.Func(2);
    var hs_join25skCc = new $hs.Func(4);
    var hs_lookupN25skBZ = new $hs.Func(2);
    this.hs_zdWTip.evaluate = function (hs_tpl26Dt2S, hs_tpl26Dt2U) {
        var hs_tpl26Dt2W = hs_tpl26Dt2S;
        if (hs_tpl26Dt2S.notEvaluated) {
            hs_tpl26Dt2W = hs_tpl26Dt2S.hscall();
        }
        var hs_tpl26Dt2X = hs_tpl26Dt2U;
        if (hs_tpl26Dt2U.notEvaluated) {
            hs_tpl26Dt2X = hs_tpl26Dt2U.hscall();
        }
        var $res = new $hs.Data(2);
        $res.data = [hs_tpl26Dt2W, hs_tpl26Dt2X];
        return $res;
    };
    this.hs_zdWBin.evaluate = function (hs_tpl26Dt32, hs_tpl26Dt34, hs_tpl26Dt36, hs_tpl26Dt38) {
        var hs_tpl26Dt3a = hs_tpl26Dt32;
        if (hs_tpl26Dt32.notEvaluated) {
            hs_tpl26Dt3a = hs_tpl26Dt32.hscall();
        }
        var hs_tpl26Dt3b = hs_tpl26Dt34;
        if (hs_tpl26Dt34.notEvaluated) {
            hs_tpl26Dt3b = hs_tpl26Dt34.hscall();
        }
        var hs_tpl26Dt3c = hs_tpl26Dt36;
        if (hs_tpl26Dt36.notEvaluated) {
            hs_tpl26Dt3c = hs_tpl26Dt36.hscall();
        }
        var hs_tpl26Dt3d = hs_tpl26Dt38;
        if (hs_tpl26Dt38.notEvaluated) {
            hs_tpl26Dt3d = hs_tpl26Dt38.hscall();
        }
        var $res = new $hs.Data(3);
        $res.data = [hs_tpl26Dt3a, hs_tpl26Dt3b, hs_tpl26Dt3c, hs_tpl26Dt3d];
        return $res;
    };
    hs_nequal25skCb.evaluate = function (hs_zddEq26Dt3t, hs_ds26Dt3h, hs_ds126Dt3j) {
        var hs_wild26Dtc9 = hs_ds26Dt3h;
        if (hs_ds26Dt3h.notEvaluated) {
            hs_wild26Dtc9 = hs_ds26Dt3h.hscall();
        }
        switch (hs_wild26Dtc9.tag) {
        case 1:
            var hs_wild126Dtci = hs_ds126Dt3j;
            if (hs_ds126Dt3j.notEvaluated) {
                hs_wild126Dtci = hs_ds126Dt3j.hscall();
            }
            switch (hs_wild126Dtci.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_kx26Dt3q = hs_wild26Dtc9.data[0];
            var hs_x26Dt3u = hs_wild26Dtc9.data[1];
            var hs_wild126Dtc8 = hs_ds126Dt3j;
            if (hs_ds126Dt3j.notEvaluated) {
                hs_wild126Dtc8 = hs_ds126Dt3j.hscall();
            }
            switch (hs_wild126Dtc8.tag) {
            case 2:
                var hs_ky26Dt3r = hs_wild126Dtc8.data[0];
                var hs_y26Dt3v = hs_wild126Dtc8.data[1];
                var hs_sat26Dtca = new $hs.Thunk();
                hs_sat26Dtca.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_zddEq26Dt3t, hs_x26Dt3u, hs_y26Dt3v);
                };
                var hs_sat26Dtc7 = new $hs.Thunk();
                hs_sat26Dtc7.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_kx26Dt3q, hs_ky26Dt3r);
                };
                return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26Dtc7, hs_sat26Dtca);
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_p126Dt3J = hs_wild26Dtc9.data[0];
            var hs_m126Dt3G = hs_wild26Dtc9.data[1];
            var hs_l126Dt3M = hs_wild26Dtc9.data[2];
            var hs_r126Dt3P = hs_wild26Dtc9.data[3];
            var hs_wild126Dtcc = hs_ds126Dt3j;
            if (hs_ds126Dt3j.notEvaluated) {
                hs_wild126Dtcc = hs_ds126Dt3j.hscall();
            }
            switch (hs_wild126Dtcc.tag) {
            case 3:
                var hs_p226Dt3K = hs_wild126Dtcc.data[0];
                var hs_m226Dt3H = hs_wild126Dtcc.data[1];
                var hs_l226Dt3N = hs_wild126Dtcc.data[2];
                var hs_r226Dt3Q = hs_wild126Dtcc.data[3];
                var hs_sat26Dtcd = new $hs.Thunk();
                hs_sat26Dtcd.evaluateOnce = function () {
                    var hs_sat26Dtcf = new $hs.Thunk();
                    hs_sat26Dtcf.evaluateOnce = function () {
                        var hs_sat26Dtch = new $hs.Thunk();
                        hs_sat26Dtch.evaluateOnce = function () {
                            return hs_nequal25skCb.hscall(hs_zddEq26Dt3t, hs_r126Dt3P, hs_r226Dt3Q);
                        };
                        var hs_sat26Dtcg = new $hs.Thunk();
                        hs_sat26Dtcg.evaluateOnce = function () {
                            return hs_nequal25skCb.hscall(hs_zddEq26Dt3t, hs_l126Dt3M, hs_l226Dt3N);
                        };
                        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26Dtcg, hs_sat26Dtch);
                    };
                    var hs_sat26Dtce = new $hs.Thunk();
                    hs_sat26Dtce.evaluateOnce = function () {
                        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_p126Dt3J, hs_p226Dt3K);
                    };
                    return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26Dtce, hs_sat26Dtcf);
                };
                var hs_sat26Dtcb = new $hs.Thunk();
                hs_sat26Dtcb.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_m126Dt3G, hs_m226Dt3H);
                };
                return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26Dtcb, hs_sat26Dtcd);
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_equal25skCa.evaluate = function (hs_zddEq26Dt49, hs_ds26Dt3X, hs_ds126Dt3Z) {
        var hs_wild26Dtcl = hs_ds26Dt3X;
        if (hs_ds26Dt3X.notEvaluated) {
            hs_wild26Dtcl = hs_ds26Dt3X.hscall();
        }
        switch (hs_wild26Dtcl.tag) {
        case 1:
            var hs_wild126Dtcu = hs_ds126Dt3Z;
            if (hs_ds126Dt3Z.notEvaluated) {
                hs_wild126Dtcu = hs_ds126Dt3Z.hscall();
            }
            switch (hs_wild126Dtcu.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_kx26Dt46 = hs_wild26Dtcl.data[0];
            var hs_x26Dt4a = hs_wild26Dtcl.data[1];
            var hs_wild126Dtck = hs_ds126Dt3Z;
            if (hs_ds126Dt3Z.notEvaluated) {
                hs_wild126Dtck = hs_ds126Dt3Z.hscall();
            }
            switch (hs_wild126Dtck.tag) {
            case 2:
                var hs_ky26Dt47 = hs_wild126Dtck.data[0];
                var hs_y26Dt4b = hs_wild126Dtck.data[1];
                var hs_sat26Dtcm = new $hs.Thunk();
                hs_sat26Dtcm.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26Dt49, hs_x26Dt4a, hs_y26Dt4b);
                };
                var hs_sat26Dtcj = new $hs.Thunk();
                hs_sat26Dtcj.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_kx26Dt46, hs_ky26Dt47);
                };
                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dtcj, hs_sat26Dtcm);
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_p126Dt4p = hs_wild26Dtcl.data[0];
            var hs_m126Dt4m = hs_wild26Dtcl.data[1];
            var hs_l126Dt4s = hs_wild26Dtcl.data[2];
            var hs_r126Dt4v = hs_wild26Dtcl.data[3];
            var hs_wild126Dtco = hs_ds126Dt3Z;
            if (hs_ds126Dt3Z.notEvaluated) {
                hs_wild126Dtco = hs_ds126Dt3Z.hscall();
            }
            switch (hs_wild126Dtco.tag) {
            case 3:
                var hs_p226Dt4q = hs_wild126Dtco.data[0];
                var hs_m226Dt4n = hs_wild126Dtco.data[1];
                var hs_l226Dt4t = hs_wild126Dtco.data[2];
                var hs_r226Dt4w = hs_wild126Dtco.data[3];
                var hs_sat26Dtcp = new $hs.Thunk();
                hs_sat26Dtcp.evaluateOnce = function () {
                    var hs_sat26Dtcr = new $hs.Thunk();
                    hs_sat26Dtcr.evaluateOnce = function () {
                        var hs_sat26Dtct = new $hs.Thunk();
                        hs_sat26Dtct.evaluateOnce = function () {
                            return hs_equal25skCa.hscall(hs_zddEq26Dt49, hs_r126Dt4v, hs_r226Dt4w);
                        };
                        var hs_sat26Dtcs = new $hs.Thunk();
                        hs_sat26Dtcs.evaluateOnce = function () {
                            return hs_equal25skCa.hscall(hs_zddEq26Dt49, hs_l126Dt4s, hs_l226Dt4t);
                        };
                        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dtcs, hs_sat26Dtct);
                    };
                    var hs_sat26Dtcq = new $hs.Thunk();
                    hs_sat26Dtcq.evaluateOnce = function () {
                        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_p126Dt4p, hs_p226Dt4q);
                    };
                    return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dtcq, hs_sat26Dtcr);
                };
                var hs_sat26Dtcn = new $hs.Thunk();
                hs_sat26Dtcn.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_m126Dt4m, hs_m226Dt4n);
                };
                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dtcn, hs_sat26Dtcp);
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_foldrzq25skC8.evaluate = function (hs_f26Dt4K, hs_zz26Dt4F, hs_t26Dt4D) {
        var hs_wild26Dtcv = hs_t26Dt4D;
        if (hs_t26Dt4D.notEvaluated) {
            hs_wild26Dtcv = hs_t26Dt4D.hscall();
        }
        switch (hs_wild26Dtcv.tag) {
        case 1:
            if (hs_zz26Dt4F.notEvaluated) {
                return hs_zz26Dt4F.hscall();
            } else {
                return hs_zz26Dt4F;
            }
        case 2:
            var hs_k26Dt4I = hs_wild26Dtcv.data[0];
            var hs_x26Dt4J = hs_wild26Dtcv.data[1];
            return hs_f26Dt4K.hscall(hs_k26Dt4I, hs_x26Dt4J, hs_zz26Dt4F);
        case 3:
            var hs_l26Dt4R = hs_wild26Dtcv.data[2];
            var hs_r26Dt4P = hs_wild26Dtcv.data[3];
            var hs_sat26Dtcw = new $hs.Thunk();
            hs_sat26Dtcw.evaluateOnce = function () {
                return hs_foldrzq25skC8.hscall(hs_f26Dt4K, hs_zz26Dt4F, hs_r26Dt4P);
            };
            return hs_foldrzq25skC8.hscall(hs_f26Dt4K, hs_sat26Dtcw, hs_l26Dt4R);
        }
    };
    this.hs_foldWithKey.evaluate = function (hs_f26Dt52, hs_zz26Dt4X, hs_t26Dt4V) {
        var hs_wild26Dt5c = hs_t26Dt4V;
        if (hs_t26Dt4V.notEvaluated) {
            hs_wild26Dt5c = hs_t26Dt4V.hscall();
        }
        switch (hs_wild26Dt5c.tag) {
        case 1:
            if (hs_zz26Dt4X.notEvaluated) {
                return hs_zz26Dt4X.hscall();
            } else {
                return hs_zz26Dt4X;
            }
        case 2:
            var hs_k26Dt50 = hs_wild26Dt5c.data[0];
            var hs_x26Dt51 = hs_wild26Dt5c.data[1];
            return hs_f26Dt52.hscall(hs_k26Dt50, hs_x26Dt51, hs_zz26Dt4X);
        case 3:
            var hs_ds26Dt57 = hs_wild26Dt5c.data[0];
            var hs_m26Dt5d = hs_wild26Dt5c.data[1];
            var hs_l26Dt5g = hs_wild26Dt5c.data[2];
            var hs_r26Dt5i = hs_wild26Dt5c.data[3];
            var hs_wild126DtcB = hs_ds26Dt57;
            if (hs_ds26Dt57.notEvaluated) {
                hs_wild126DtcB = hs_ds26Dt57.hscall();
            }
            var hs_ds126Dt5a = hs_wild126DtcB.data[0];
            var hs_ds226DtcA = hs_ds126Dt5a;
            if (hs_ds126Dt5a.notEvaluated) {
                hs_ds226DtcA = hs_ds126Dt5a.hscall();
            }
            switch (hs_ds226DtcA) {
            case 0:
                var hs_sat26DtcC = new $hs.Data(1);
                hs_sat26DtcC.data = [0];
                var hs_wild226DtcD = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_m26Dt5d, hs_sat26DtcC);
                switch (hs_wild226DtcD.tag) {
                case 1:
                    return hs_foldrzq25skC8.hscall(hs_f26Dt52, hs_zz26Dt4X, hs_wild26Dt5c);
                case 2:
                    var hs_sat26Dtcz = new $hs.Thunk();
                    hs_sat26Dtcz.evaluateOnce = function () {
                        return hs_foldrzq25skC8.hscall(hs_f26Dt52, hs_zz26Dt4X, hs_l26Dt5g);
                    };
                    return hs_foldrzq25skC8.hscall(hs_f26Dt52, hs_sat26Dtcz, hs_r26Dt5i);
                }
            default:
                return hs_foldrzq25skC8.hscall(hs_f26Dt52, hs_zz26Dt4X, hs_wild26Dt5c);
            }
        }
    };
    this.hs_keys.evaluate = function (hs_m26Dt5q) {
        var hs_sat26DtcE = new $hs.Func(3);
        hs_sat26DtcE.evaluate = function (hs_k26Dt5n, hs_ds26DtcF, hs_ks26Dt5o) {
            var $res = new $hs.Data(2);
            $res.data = [hs_k26Dt5n, hs_ks26Dt5o];
            return $res;
        };
        return $hs.modules.GHCziEventziIntMap.hs_foldWithKey.hscall(hs_sat26DtcE, $hs.modules.GHCziTypes.hs_ZMZN, hs_m26Dt5q);
    };
    this.hs_empty.data = [];
    hs_zdczsze25v4zb.evaluate = function (hs_zddEq26Dt5v, hs_t126Dt5w, hs_t226Dt5x) {
        return hs_nequal25skCb.hscall(hs_zddEq26Dt5v, hs_t126Dt5w, hs_t226Dt5x);
    };
    hs_zdczeze25v4zi.evaluate = function (hs_zddEq26Dt5C, hs_t126Dt5D, hs_t226Dt5E) {
        return hs_equal25skCa.hscall(hs_zddEq26Dt5C, hs_t126Dt5D, hs_t226Dt5E);
    };
    this.hs_zdfEqIntMap.evaluate = function (hs_zddEq26Dt5I) {
        var hs_sat26DtcH = new $hs.Func(2);
        hs_sat26DtcH.evaluate = function (hs_t126Dt5O, hs_t226Dt5P) {
            return hs_nequal25skCb.hscall(hs_zddEq26Dt5I, hs_t126Dt5O, hs_t226Dt5P);
        };
        var hs_sat26DtcG = new $hs.Func(2);
        hs_sat26DtcG.evaluate = function (hs_t126Dt5J, hs_t226Dt5K) {
            return hs_equal25skCa.hscall(hs_zddEq26Dt5I, hs_t126Dt5J, hs_t226Dt5K);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DtcG, hs_sat26DtcH];
        return $res;
    };
    hs_zdcshowsPrec25v4zB.evaluate = function (hs_zddShow26Dt5U) {
        var hs_zddShow126Dt5V = new $hs.Thunk();
        hs_zddShow126Dt5V.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUZR.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_zddShow26Dt5U);
        };
        var hs_zddShow226Dt5X = new $hs.Thunk();
        hs_zddShow226Dt5X.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZMZN.hscall(hs_zddShow126Dt5V);
        };
        var hs_sat26DtcI = new $hs.Func(2);
        hs_sat26DtcI.evaluate = function (hs_d26Dt60, hs_m26Dt6e) {
            var hs_sat26DtcK = new $hs.Thunk();
            hs_sat26DtcK.evaluateOnce = function () {
                var hs_sat26Dt6l = new $hs.Thunk();
                hs_sat26Dt6l.evaluateOnce = function () {
                    var hs_sat26Dt6k = new $hs.Thunk();
                    hs_sat26Dt6k.evaluateOnce = function () {
                        var hs_sat26Dt6j = new $hs.Func(3);
                        hs_sat26Dt6j.evaluate = function (hs_k26Dt69, hs_x26Dt6a, hs_xs26Dt6c) {
                            var hs_sat26Dt6i = new $hs.Data(1);
                            hs_sat26Dt6i.data = [hs_k26Dt69, hs_x26Dt6a];
                            var $res = new $hs.Data(2);
                            $res.data = [hs_sat26Dt6i, hs_xs26Dt6c];
                            return $res;
                        };
                        return $hs.modules.GHCziEventziIntMap.hs_foldWithKey.hscall(hs_sat26Dt6j, $hs.modules.GHCziTypes.hs_ZMZN, hs_m26Dt6e);
                    };
                    return $hs.modules.GHCziShow.hs_shows.hscall(hs_zddShow226Dt5X, hs_sat26Dt6k);
                };
                var hs_sat26Dt6n = new $hs.Thunk();
                hs_sat26Dt6n.evaluateOnce = function () {
                    var hs_sat26Dt6m = new $hs.Thunk();
                    hs_sat26Dt6m.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("fromList \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dt6m);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dt6n, hs_sat26Dt6l);
            };
            var hs_sat26DtcJ = new $hs.Thunk();
            hs_sat26DtcJ.evaluateOnce = function () {
                var hs_sat26DtcL = new $hs.Thunk();
                hs_sat26DtcL.evaluateOnce = function () {
                    var hs_sat26DtcM = new $hs.Data(1);
                    hs_sat26DtcM.data = [10];
                    return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_d26Dt60, hs_sat26DtcM);
                };
                return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DtcL);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DtcJ, hs_sat26DtcK);
        };
        if (hs_sat26DtcI.notEvaluated) {
            return hs_sat26DtcI.hscall();
        } else {
            return hs_sat26DtcI;
        }
    };
    this.hs_zdfShowIntMap.evaluate = function (hs_zddShow26Dt6s) {
        var hs_sat26DtcO = new $hs.Thunk();
        hs_sat26DtcO.evaluateOnce = function () {
            return hs_zdcshowList25v4A9.hscall(hs_zddShow26Dt6s);
        };
        var hs_sat26DtcP = new $hs.Thunk();
        hs_sat26DtcP.evaluateOnce = function () {
            return hs_zdcshow25v4Aa.hscall(hs_zddShow26Dt6s);
        };
        var hs_sat26DtcN = new $hs.Thunk();
        hs_sat26DtcN.evaluateOnce = function () {
            return hs_zdcshowsPrec25v4zB.hscall(hs_zddShow26Dt6s);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DtcN, hs_sat26DtcP, hs_sat26DtcO];
        return $res;
    };
    hs_zdcshowList25v4A9.evaluate = function (hs_zddShow26Dt6x) {
        var hs_sat26DtcQ = new $hs.Thunk();
        hs_sat26DtcQ.evaluateOnce = function () {
            return $hs.modules.GHCziEventziIntMap.hs_zdfShowIntMap.hscall(hs_zddShow26Dt6x);
        };
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall(hs_sat26DtcQ);
    };
    hs_zdcshow25v4Aa.evaluate = function (hs_zddShow26Dt6A) {
        var hs_sat26DtcR = new $hs.Thunk();
        hs_sat26DtcR.evaluateOnce = function () {
            return $hs.modules.GHCziEventziIntMap.hs_zdfShowIntMap.hscall(hs_zddShow26Dt6A);
        };
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_sat26DtcR);
    };
    hs_zzero25skCe.evaluate = function (hs_i26Dt6E, hs_m26Dt6G) {
        var hs_sat26DtcT = new $hs.Data(1);
        hs_sat26DtcT.data = [0];
        var hs_sat26DtcS = new $hs.Thunk();
        hs_sat26DtcS.evaluateOnce = function () {
            var hs_sat26DtcV = new $hs.Thunk();
            hs_sat26DtcV.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord, hs_m26Dt6G);
            };
            var hs_sat26DtcU = new $hs.Thunk();
            hs_sat26DtcU.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord, hs_i26Dt6E);
            };
            return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_sat26DtcU, hs_sat26DtcV);
        };
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord, hs_sat26DtcS, hs_sat26DtcT);
    };
    hs_mask25skCg.evaluate = function (hs_i26Dt6P, hs_m26Dt6N) {
        var hs_m126Dt6O = new $hs.Thunk();
        hs_m126Dt6O.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord, hs_m26Dt6N);
        };
        var hs_sat26DtcW = new $hs.Thunk();
        hs_sat26DtcW.evaluateOnce = function () {
            var hs_sat26DtcY = new $hs.Thunk();
            hs_sat26DtcY.evaluateOnce = function () {
                var hs_sat26DtcZ = new $hs.Thunk();
                hs_sat26DtcZ.evaluateOnce = function () {
                    var hs_sat26Dtd0 = new $hs.Thunk();
                    hs_sat26Dtd0.evaluateOnce = function () {
                        var hs_sat26Dtd1 = new $hs.Data(1);
                        hs_sat26Dtd1.data = [1];
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord, hs_m126Dt6O, hs_sat26Dtd1);
                    };
                    return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_sat26Dtd0);
                };
                return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_sat26DtcZ, hs_m126Dt6O);
            };
            var hs_sat26DtcX = new $hs.Thunk();
            hs_sat26DtcX.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord, hs_i26Dt6P);
            };
            return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_sat26DtcX, hs_sat26DtcY);
        };
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DtcW);
    };
    this.hs_delete.evaluate = function (hs_k26Dt72, hs_t26Dt6Y) {
        var hs_wild26Dt75 = hs_t26Dt6Y;
        if (hs_t26Dt6Y.notEvaluated) {
            hs_wild26Dt75 = hs_t26Dt6Y.hscall();
        }
        switch (hs_wild26Dt75.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziEventziIntMap.hs_Nil];
            return $res;
        case 2:
            var hs_ky26Dt73 = hs_wild26Dt75.data[0];
            var hs_y26Dt76 = hs_wild26Dt75.data[1];
            var hs_wild126Dtd3 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_k26Dt72, hs_ky26Dt73);
            switch (hs_wild126Dtd3.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [$hs.modules.DataziMaybe.hs_Nothing, hs_wild26Dt75];
                return $res;
            case 2:
                var hs_sat26Dtd2 = new $hs.Data(2);
                hs_sat26Dtd2.data = [hs_y26Dt76];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26Dtd2, $hs.modules.GHCziEventziIntMap.hs_Nil];
                return $res;
            }
        case 3:
            var hs_p26Dt7e = hs_wild26Dt75.data[0];
            var hs_m26Dt7c = hs_wild26Dt75.data[1];
            var hs_l26Dt7u = hs_wild26Dt75.data[2];
            var hs_r26Dt7i = hs_wild26Dt75.data[3];
            var hs_sat26Dtd4 = new $hs.Thunk();
            hs_sat26Dtd4.evaluateOnce = function () {
                return hs_mask25skCg.hscall(hs_k26Dt72, hs_m26Dt7c);
            };
            var hs_wild126Dtd5 = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26Dtd4, hs_p26Dt7e);
            switch (hs_wild126Dtd5.tag) {
            case 1:
                var hs_wild226Dtd7 = hs_zzero25skCe.hscall(hs_k26Dt72, hs_m26Dt7c);
                switch (hs_wild226Dtd7.tag) {
                case 1:
                    var hs_ds26Dt7j = new $hs.Thunk();
                    hs_ds26Dt7j.evaluateOnce = function () {
                        return $hs.modules.GHCziEventziIntMap.hs_delete.hscall(hs_k26Dt72, hs_r26Dt7i);
                    };
                    var hs_sat26Dtdg = new $hs.Thunk();
                    hs_sat26Dtdg.evaluateOnce = function () {
                        var hs_wild326Dtdj = hs_ds26Dt7j;
                        if (hs_ds26Dt7j.notEvaluated) {
                            hs_wild326Dtdj = hs_ds26Dt7j.hscall();
                        }
                        var hs_rzq26Dt7s = hs_wild326Dtdj.data[1];
                        var hs_wild426Dt7x = hs_rzq26Dt7s;
                        if (hs_rzq26Dt7s.notEvaluated) {
                            hs_wild426Dt7x = hs_rzq26Dt7s.hscall();
                        }
                        switch (hs_wild426Dt7x.tag) {
                        case 1:
                            if (hs_l26Dt7u.notEvaluated) {
                                return hs_l26Dt7u.hscall();
                            } else {
                                return hs_l26Dt7u;
                            }
                        default:
                            var hs_wild526Dt7w = hs_l26Dt7u;
                            if (hs_l26Dt7u.notEvaluated) {
                                hs_wild526Dt7w = hs_l26Dt7u.hscall();
                            }
                            switch (hs_wild526Dt7w.tag) {
                            case 1:
                                if (hs_wild426Dt7x.notEvaluated) {
                                    return hs_wild426Dt7x.hscall();
                                } else {
                                    return hs_wild426Dt7x;
                                }
                            default:
                                var $res = new $hs.Data(3);
                                $res.data = [hs_p26Dt7e, hs_m26Dt7c, hs_wild526Dt7w, hs_wild426Dt7x];
                                return $res;
                            }
                        }
                    };
                    var hs_sat26Dtdf = new $hs.Thunk();
                    hs_sat26Dtdf.evaluateOnce = function () {
                        var hs_wild326Dtdi = hs_ds26Dt7j;
                        if (hs_ds26Dt7j.notEvaluated) {
                            hs_wild326Dtdi = hs_ds26Dt7j.hscall();
                        }
                        var hs_found26Dt7n = hs_wild326Dtdi.data[0];
                        if (hs_found26Dt7n.notEvaluated) {
                            return hs_found26Dt7n.hscall();
                        } else {
                            return hs_found26Dt7n;
                        }
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26Dtdf, hs_sat26Dtdg];
                    return $res;
                case 2:
                    var hs_ds26Dt7A = new $hs.Thunk();
                    hs_ds26Dt7A.evaluateOnce = function () {
                        return $hs.modules.GHCziEventziIntMap.hs_delete.hscall(hs_k26Dt72, hs_l26Dt7u);
                    };
                    var hs_sat26Dtd8 = new $hs.Thunk();
                    hs_sat26Dtd8.evaluateOnce = function () {
                        var hs_wild326Dt7N = hs_r26Dt7i;
                        if (hs_r26Dt7i.notEvaluated) {
                            hs_wild326Dt7N = hs_r26Dt7i.hscall();
                        }
                        switch (hs_wild326Dt7N.tag) {
                        case 1:
                            var hs_wild426Dtdc = hs_ds26Dt7A;
                            if (hs_ds26Dt7A.notEvaluated) {
                                hs_wild426Dtdc = hs_ds26Dt7A.hscall();
                            }
                            var hs_lzq26Dt7R = hs_wild426Dtdc.data[1];
                            if (hs_lzq26Dt7R.notEvaluated) {
                                return hs_lzq26Dt7R.hscall();
                            } else {
                                return hs_lzq26Dt7R;
                            }
                        default:
                            var hs_wild426Dtdd = hs_ds26Dt7A;
                            if (hs_ds26Dt7A.notEvaluated) {
                                hs_wild426Dtdd = hs_ds26Dt7A.hscall();
                            }
                            var hs_lzq26Dt7K = hs_wild426Dtdd.data[1];
                            var hs_wild526Dt7M = hs_lzq26Dt7K;
                            if (hs_lzq26Dt7K.notEvaluated) {
                                hs_wild526Dt7M = hs_lzq26Dt7K.hscall();
                            }
                            switch (hs_wild526Dt7M.tag) {
                            case 1:
                                if (hs_wild326Dt7N.notEvaluated) {
                                    return hs_wild326Dt7N.hscall();
                                } else {
                                    return hs_wild326Dt7N;
                                }
                            default:
                                var $res = new $hs.Data(3);
                                $res.data = [hs_p26Dt7e, hs_m26Dt7c, hs_wild526Dt7M, hs_wild326Dt7N];
                                return $res;
                            }
                        }
                    };
                    var hs_sat26Dtd6 = new $hs.Thunk();
                    hs_sat26Dtd6.evaluateOnce = function () {
                        var hs_wild326Dtda = hs_ds26Dt7A;
                        if (hs_ds26Dt7A.notEvaluated) {
                            hs_wild326Dtda = hs_ds26Dt7A.hscall();
                        }
                        var hs_found26Dt7E = hs_wild326Dtda.data[0];
                        if (hs_found26Dt7E.notEvaluated) {
                            return hs_found26Dt7E.hscall();
                        } else {
                            return hs_found26Dt7E;
                        }
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26Dtd6, hs_sat26Dtd8];
                    return $res;
                }
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [$hs.modules.DataziMaybe.hs_Nothing, hs_wild26Dt75];
                return $res;
            }
        }
    };
    this.hs_updateWith.evaluate = function (hs_f26Dt85, hs_k26Dt80, hs_t26Dt7W) {
        var hs_wild26Dt83 = hs_t26Dt7W;
        if (hs_t26Dt7W.notEvaluated) {
            hs_wild26Dt83 = hs_t26Dt7W.hscall();
        }
        switch (hs_wild26Dt83.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziEventziIntMap.hs_Nil];
            return $res;
        case 2:
            var hs_ky26Dt81 = hs_wild26Dt83.data[0];
            var hs_y26Dt84 = hs_wild26Dt83.data[1];
            var hs_wild126Dtdm = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_k26Dt80, hs_ky26Dt81);
            switch (hs_wild126Dtdm.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [$hs.modules.DataziMaybe.hs_Nothing, hs_wild26Dt83];
                return $res;
            case 2:
                var hs_wild226Dtdn = hs_f26Dt85.hscall(hs_y26Dt84);
                switch (hs_wild226Dtdn.tag) {
                case 1:
                    var hs_sat26Dtdp = new $hs.Data(2);
                    hs_sat26Dtdp.data = [hs_y26Dt84];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26Dtdp, $hs.modules.GHCziEventziIntMap.hs_Nil];
                    return $res;
                case 2:
                    var hs_yzq26Dt8a = hs_wild226Dtdn.data[0];
                    var hs_sat26Dtdo = new $hs.Thunk();
                    hs_sat26Dtdo.evaluateOnce = function () {
                        var hs_tpl26Dt8c = hs_yzq26Dt8a;
                        if (hs_yzq26Dt8a.notEvaluated) {
                            hs_tpl26Dt8c = hs_yzq26Dt8a.hscall();
                        }
                        var $res = new $hs.Data(2);
                        $res.data = [hs_ky26Dt81, hs_tpl26Dt8c];
                        return $res;
                    };
                    var hs_sat26Dtdl = new $hs.Data(2);
                    hs_sat26Dtdl.data = [hs_y26Dt84];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26Dtdl, hs_sat26Dtdo];
                    return $res;
                }
            }
        case 3:
            var hs_p26Dt8k = hs_wild26Dt83.data[0];
            var hs_m26Dt8i = hs_wild26Dt83.data[1];
            var hs_l26Dt8A = hs_wild26Dt83.data[2];
            var hs_r26Dt8o = hs_wild26Dt83.data[3];
            var hs_sat26Dtdq = new $hs.Thunk();
            hs_sat26Dtdq.evaluateOnce = function () {
                return hs_mask25skCg.hscall(hs_k26Dt80, hs_m26Dt8i);
            };
            var hs_wild126Dtdr = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26Dtdq, hs_p26Dt8k);
            switch (hs_wild126Dtdr.tag) {
            case 1:
                var hs_wild226Dtdt = hs_zzero25skCe.hscall(hs_k26Dt80, hs_m26Dt8i);
                switch (hs_wild226Dtdt.tag) {
                case 1:
                    var hs_ds26Dt8p = new $hs.Thunk();
                    hs_ds26Dt8p.evaluateOnce = function () {
                        return $hs.modules.GHCziEventziIntMap.hs_updateWith.hscall(hs_f26Dt85, hs_k26Dt80, hs_r26Dt8o);
                    };
                    var hs_sat26DtdC = new $hs.Thunk();
                    hs_sat26DtdC.evaluateOnce = function () {
                        var hs_wild326DtdF = hs_ds26Dt8p;
                        if (hs_ds26Dt8p.notEvaluated) {
                            hs_wild326DtdF = hs_ds26Dt8p.hscall();
                        }
                        var hs_rzq26Dt8y = hs_wild326DtdF.data[1];
                        var hs_wild426Dt8D = hs_rzq26Dt8y;
                        if (hs_rzq26Dt8y.notEvaluated) {
                            hs_wild426Dt8D = hs_rzq26Dt8y.hscall();
                        }
                        switch (hs_wild426Dt8D.tag) {
                        case 1:
                            if (hs_l26Dt8A.notEvaluated) {
                                return hs_l26Dt8A.hscall();
                            } else {
                                return hs_l26Dt8A;
                            }
                        default:
                            var hs_wild526Dt8C = hs_l26Dt8A;
                            if (hs_l26Dt8A.notEvaluated) {
                                hs_wild526Dt8C = hs_l26Dt8A.hscall();
                            }
                            switch (hs_wild526Dt8C.tag) {
                            case 1:
                                if (hs_wild426Dt8D.notEvaluated) {
                                    return hs_wild426Dt8D.hscall();
                                } else {
                                    return hs_wild426Dt8D;
                                }
                            default:
                                var $res = new $hs.Data(3);
                                $res.data = [hs_p26Dt8k, hs_m26Dt8i, hs_wild526Dt8C, hs_wild426Dt8D];
                                return $res;
                            }
                        }
                    };
                    var hs_sat26DtdB = new $hs.Thunk();
                    hs_sat26DtdB.evaluateOnce = function () {
                        var hs_wild326DtdE = hs_ds26Dt8p;
                        if (hs_ds26Dt8p.notEvaluated) {
                            hs_wild326DtdE = hs_ds26Dt8p.hscall();
                        }
                        var hs_found26Dt8t = hs_wild326DtdE.data[0];
                        if (hs_found26Dt8t.notEvaluated) {
                            return hs_found26Dt8t.hscall();
                        } else {
                            return hs_found26Dt8t;
                        }
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26DtdB, hs_sat26DtdC];
                    return $res;
                case 2:
                    var hs_ds26Dt8G = new $hs.Thunk();
                    hs_ds26Dt8G.evaluateOnce = function () {
                        return $hs.modules.GHCziEventziIntMap.hs_updateWith.hscall(hs_f26Dt85, hs_k26Dt80, hs_l26Dt8A);
                    };
                    var hs_sat26Dtdu = new $hs.Thunk();
                    hs_sat26Dtdu.evaluateOnce = function () {
                        var hs_wild326Dt8T = hs_r26Dt8o;
                        if (hs_r26Dt8o.notEvaluated) {
                            hs_wild326Dt8T = hs_r26Dt8o.hscall();
                        }
                        switch (hs_wild326Dt8T.tag) {
                        case 1:
                            var hs_wild426Dtdy = hs_ds26Dt8G;
                            if (hs_ds26Dt8G.notEvaluated) {
                                hs_wild426Dtdy = hs_ds26Dt8G.hscall();
                            }
                            var hs_lzq26Dt8X = hs_wild426Dtdy.data[1];
                            if (hs_lzq26Dt8X.notEvaluated) {
                                return hs_lzq26Dt8X.hscall();
                            } else {
                                return hs_lzq26Dt8X;
                            }
                        default:
                            var hs_wild426Dtdz = hs_ds26Dt8G;
                            if (hs_ds26Dt8G.notEvaluated) {
                                hs_wild426Dtdz = hs_ds26Dt8G.hscall();
                            }
                            var hs_lzq26Dt8Q = hs_wild426Dtdz.data[1];
                            var hs_wild526Dt8S = hs_lzq26Dt8Q;
                            if (hs_lzq26Dt8Q.notEvaluated) {
                                hs_wild526Dt8S = hs_lzq26Dt8Q.hscall();
                            }
                            switch (hs_wild526Dt8S.tag) {
                            case 1:
                                if (hs_wild326Dt8T.notEvaluated) {
                                    return hs_wild326Dt8T.hscall();
                                } else {
                                    return hs_wild326Dt8T;
                                }
                            default:
                                var $res = new $hs.Data(3);
                                $res.data = [hs_p26Dt8k, hs_m26Dt8i, hs_wild526Dt8S, hs_wild326Dt8T];
                                return $res;
                            }
                        }
                    };
                    var hs_sat26Dtds = new $hs.Thunk();
                    hs_sat26Dtds.evaluateOnce = function () {
                        var hs_wild326Dtdw = hs_ds26Dt8G;
                        if (hs_ds26Dt8G.notEvaluated) {
                            hs_wild326Dtdw = hs_ds26Dt8G.hscall();
                        }
                        var hs_found26Dt8K = hs_wild326Dtdw.data[0];
                        if (hs_found26Dt8K.notEvaluated) {
                            return hs_found26Dt8K.hscall();
                        } else {
                            return hs_found26Dt8K;
                        }
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26Dtds, hs_sat26Dtdu];
                    return $res;
                }
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [$hs.modules.DataziMaybe.hs_Nothing, hs_wild26Dt83];
                return $res;
            }
        }
    };
    hs_join25skCc.evaluate = function (hs_p126Dt95, hs_t126Dtab, hs_p226Dt97, hs_t226Dta9) {
        var hs_m26Dta3 = new $hs.Thunk();
        hs_m26Dta3.evaluateOnce = function () {
            var hs_sat26DtdM = new $hs.Thunk();
            hs_sat26DtdM.evaluateOnce = function () {
                var hs_x026Dt99 = new $hs.Thunk();
                hs_x026Dt99.evaluateOnce = function () {
                    var hs_sat26Dte2 = new $hs.Thunk();
                    hs_sat26Dte2.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord, hs_p226Dt97);
                    };
                    var hs_sat26Dte1 = new $hs.Thunk();
                    hs_sat26Dte1.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord, hs_p126Dt95);
                    };
                    return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_sat26Dte1, hs_sat26Dte2);
                };
                var hs_x126Dt9h = new $hs.Thunk();
                hs_x126Dt9h.evaluateOnce = function () {
                    var hs_sat26DtdZ = new $hs.Thunk();
                    hs_sat26DtdZ.evaluateOnce = function () {
                        var hs_wild26Dte0 = hs_x026Dt99;
                        if (hs_x026Dt99.notEvaluated) {
                            hs_wild26Dte0 = hs_x026Dt99.hscall();
                        }
                        var hs_x26Dt9d = hs_wild26Dte0.data[0];
                        var hs_wild126Dt9f = $hs.modules.GHCziBase.hs_shiftRLzh.hscall(hs_x26Dt9d, 1);
                        var $res = new $hs.Data(1);
                        $res.data = [hs_wild126Dt9f];
                        return $res;
                    };
                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_x026Dt99, hs_sat26DtdZ);
                };
                var hs_x226Dt9p = new $hs.Thunk();
                hs_x226Dt9p.evaluateOnce = function () {
                    var hs_sat26DtdX = new $hs.Thunk();
                    hs_sat26DtdX.evaluateOnce = function () {
                        var hs_wild26DtdY = hs_x126Dt9h;
                        if (hs_x126Dt9h.notEvaluated) {
                            hs_wild26DtdY = hs_x126Dt9h.hscall();
                        }
                        var hs_x26Dt9l = hs_wild26DtdY.data[0];
                        var hs_wild126Dt9n = $hs.modules.GHCziBase.hs_shiftRLzh.hscall(hs_x26Dt9l, 2);
                        var $res = new $hs.Data(1);
                        $res.data = [hs_wild126Dt9n];
                        return $res;
                    };
                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_x126Dt9h, hs_sat26DtdX);
                };
                var hs_x326Dt9x = new $hs.Thunk();
                hs_x326Dt9x.evaluateOnce = function () {
                    var hs_sat26DtdV = new $hs.Thunk();
                    hs_sat26DtdV.evaluateOnce = function () {
                        var hs_wild26DtdW = hs_x226Dt9p;
                        if (hs_x226Dt9p.notEvaluated) {
                            hs_wild26DtdW = hs_x226Dt9p.hscall();
                        }
                        var hs_x26Dt9t = hs_wild26DtdW.data[0];
                        var hs_wild126Dt9v = $hs.modules.GHCziBase.hs_shiftRLzh.hscall(hs_x26Dt9t, 4);
                        var $res = new $hs.Data(1);
                        $res.data = [hs_wild126Dt9v];
                        return $res;
                    };
                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_x226Dt9p, hs_sat26DtdV);
                };
                var hs_x426Dt9F = new $hs.Thunk();
                hs_x426Dt9F.evaluateOnce = function () {
                    var hs_sat26DtdT = new $hs.Thunk();
                    hs_sat26DtdT.evaluateOnce = function () {
                        var hs_wild26DtdU = hs_x326Dt9x;
                        if (hs_x326Dt9x.notEvaluated) {
                            hs_wild26DtdU = hs_x326Dt9x.hscall();
                        }
                        var hs_x26Dt9B = hs_wild26DtdU.data[0];
                        var hs_wild126Dt9D = $hs.modules.GHCziBase.hs_shiftRLzh.hscall(hs_x26Dt9B, 8);
                        var $res = new $hs.Data(1);
                        $res.data = [hs_wild126Dt9D];
                        return $res;
                    };
                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_x326Dt9x, hs_sat26DtdT);
                };
                var hs_x526Dt9N = new $hs.Thunk();
                hs_x526Dt9N.evaluateOnce = function () {
                    var hs_sat26DtdR = new $hs.Thunk();
                    hs_sat26DtdR.evaluateOnce = function () {
                        var hs_wild26DtdS = hs_x426Dt9F;
                        if (hs_x426Dt9F.notEvaluated) {
                            hs_wild26DtdS = hs_x426Dt9F.hscall();
                        }
                        var hs_x26Dt9J = hs_wild26DtdS.data[0];
                        var hs_wild126Dt9L = $hs.modules.GHCziBase.hs_shiftRLzh.hscall(hs_x26Dt9J, 16);
                        var $res = new $hs.Data(1);
                        $res.data = [hs_wild126Dt9L];
                        return $res;
                    };
                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_x426Dt9F, hs_sat26DtdR);
                };
                var hs_x626Dt9V = new $hs.Thunk();
                hs_x626Dt9V.evaluateOnce = function () {
                    var hs_sat26DtdP = new $hs.Thunk();
                    hs_sat26DtdP.evaluateOnce = function () {
                        var hs_wild26DtdQ = hs_x526Dt9N;
                        if (hs_x526Dt9N.notEvaluated) {
                            hs_wild26DtdQ = hs_x526Dt9N.hscall();
                        }
                        var hs_x26Dt9R = hs_wild26DtdQ.data[0];
                        var hs_wild126Dt9T = $hs.modules.GHCziBase.hs_shiftRLzh.hscall(hs_x26Dt9R, 32);
                        var $res = new $hs.Data(1);
                        $res.data = [hs_wild126Dt9T];
                        return $res;
                    };
                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_x526Dt9N, hs_sat26DtdP);
                };
                var hs_sat26DtdN = new $hs.Thunk();
                hs_sat26DtdN.evaluateOnce = function () {
                    var hs_wild26DtdO = hs_x626Dt9V;
                    if (hs_x626Dt9V.notEvaluated) {
                        hs_wild26DtdO = hs_x626Dt9V.hscall();
                    }
                    var hs_x26Dt9Y = hs_wild26DtdO.data[0];
                    var hs_wild126Dta0 = $hs.modules.GHCziBase.hs_shiftRLzh.hscall(hs_x26Dt9Y, 1);
                    var $res = new $hs.Data(1);
                    $res.data = [hs_wild126Dta0];
                    return $res;
                };
                return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_x626Dt9V, hs_sat26DtdN);
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DtdM);
        };
        var hs_wild26DtdI = hs_zzero25skCe.hscall(hs_p126Dt95, hs_m26Dta3);
        switch (hs_wild26DtdI.tag) {
        case 1:
            var hs_tpl26Dtad = hs_mask25skCg.hscall(hs_p126Dt95, hs_m26Dta3);
            var hs_tpl126Dtae = hs_m26Dta3;
            if (hs_m26Dta3.notEvaluated) {
                hs_tpl126Dtae = hs_m26Dta3.hscall();
            }
            var hs_tpl226Dtaf = hs_t226Dta9;
            if (hs_t226Dta9.notEvaluated) {
                hs_tpl226Dtaf = hs_t226Dta9.hscall();
            }
            var hs_tpl326Dtag = hs_t126Dtab;
            if (hs_t126Dtab.notEvaluated) {
                hs_tpl326Dtag = hs_t126Dtab.hscall();
            }
            var $res = new $hs.Data(3);
            $res.data = [hs_tpl26Dtad, hs_tpl126Dtae, hs_tpl226Dtaf, hs_tpl326Dtag];
            return $res;
        case 2:
            var hs_tpl26Dtan = hs_mask25skCg.hscall(hs_p126Dt95, hs_m26Dta3);
            var hs_tpl126Dtao = hs_m26Dta3;
            if (hs_m26Dta3.notEvaluated) {
                hs_tpl126Dtao = hs_m26Dta3.hscall();
            }
            var hs_tpl226Dtap = hs_t126Dtab;
            if (hs_t126Dtab.notEvaluated) {
                hs_tpl226Dtap = hs_t126Dtab.hscall();
            }
            var hs_tpl326Dtaq = hs_t226Dta9;
            if (hs_t226Dta9.notEvaluated) {
                hs_tpl326Dtaq = hs_t226Dta9.hscall();
            }
            var $res = new $hs.Data(3);
            $res.data = [hs_tpl26Dtan, hs_tpl126Dtao, hs_tpl226Dtap, hs_tpl326Dtaq];
            return $res;
        }
    };
    this.hs_insertWith.evaluate = function (hs_f26DtaL, hs_k26Dtax, hs_x26Dtay, hs_t26Dtav) {
        var hs_wild26DtaF = hs_t26Dtav;
        if (hs_t26Dtav.notEvaluated) {
            hs_wild26DtaF = hs_t26Dtav.hscall();
        }
        switch (hs_wild26DtaF.tag) {
        case 1:
            var hs_sat26Dteq = new $hs.Thunk();
            hs_sat26Dteq.evaluateOnce = function () {
                return $hs.modules.GHCziEventziIntMap.hs_zdWTip.hscall(hs_k26Dtax, hs_x26Dtay);
            };
            var $res = new $hs.Data(1);
            $res.data = [$hs.modules.DataziMaybe.hs_Nothing, hs_sat26Dteq];
            return $res;
        case 2:
            var hs_ky26DtaC = hs_wild26DtaF.data[0];
            var hs_y26DtaH = hs_wild26DtaF.data[1];
            var hs_wild126Dte4 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_k26Dtax, hs_ky26DtaC);
            switch (hs_wild126Dte4.tag) {
            case 1:
                var hs_sat26Dte7 = new $hs.Thunk();
                hs_sat26Dte7.evaluateOnce = function () {
                    var hs_sat26Dte8 = new $hs.Thunk();
                    hs_sat26Dte8.evaluateOnce = function () {
                        return $hs.modules.GHCziEventziIntMap.hs_zdWTip.hscall(hs_k26Dtax, hs_x26Dtay);
                    };
                    return hs_join25skCc.hscall(hs_k26Dtax, hs_sat26Dte8, hs_ky26DtaC, hs_wild26DtaF);
                };
                var $res = new $hs.Data(1);
                $res.data = [$hs.modules.DataziMaybe.hs_Nothing, hs_sat26Dte7];
                return $res;
            case 2:
                var hs_sat26Dte5 = new $hs.Thunk();
                hs_sat26Dte5.evaluateOnce = function () {
                    var hs_tpl26DtaN = hs_k26Dtax;
                    if (hs_k26Dtax.notEvaluated) {
                        hs_tpl26DtaN = hs_k26Dtax.hscall();
                    }
                    var hs_tpl126DtaO = hs_f26DtaL.hscall(hs_x26Dtay, hs_y26DtaH);
                    var $res = new $hs.Data(2);
                    $res.data = [hs_tpl26DtaN, hs_tpl126DtaO];
                    return $res;
                };
                var hs_sat26Dte3 = new $hs.Data(2);
                hs_sat26Dte3.data = [hs_y26DtaH];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26Dte3, hs_sat26Dte5];
                return $res;
            }
        case 3:
            var hs_p26DtaW = hs_wild26DtaF.data[0];
            var hs_m26DtaU = hs_wild26DtaF.data[1];
            var hs_l26Dtbc = hs_wild26DtaF.data[2];
            var hs_r26Dtb0 = hs_wild26DtaF.data[3];
            var hs_sat26Dtea = new $hs.Thunk();
            hs_sat26Dtea.evaluateOnce = function () {
                return hs_mask25skCg.hscall(hs_k26Dtax, hs_m26DtaU);
            };
            var hs_wild126Dteb = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26Dtea, hs_p26DtaW);
            switch (hs_wild126Dteb.tag) {
            case 1:
                var hs_wild226Dtee = hs_zzero25skCe.hscall(hs_k26Dtax, hs_m26DtaU);
                switch (hs_wild226Dtee.tag) {
                case 1:
                    var hs_ds26Dtb1 = new $hs.Thunk();
                    hs_ds26Dtb1.evaluateOnce = function () {
                        return $hs.modules.GHCziEventziIntMap.hs_insertWith.hscall(hs_f26DtaL, hs_k26Dtax, hs_x26Dtay, hs_r26Dtb0);
                    };
                    var hs_sat26Dtel = new $hs.Thunk();
                    hs_sat26Dtel.evaluateOnce = function () {
                        var hs_wild326Dteo = hs_ds26Dtb1;
                        if (hs_ds26Dtb1.notEvaluated) {
                            hs_wild326Dteo = hs_ds26Dtb1.hscall();
                        }
                        var hs_rzq26Dtba = hs_wild326Dteo.data[1];
                        var hs_tpl26Dtbd = hs_rzq26Dtba;
                        if (hs_rzq26Dtba.notEvaluated) {
                            hs_tpl26Dtbd = hs_rzq26Dtba.hscall();
                        }
                        var $res = new $hs.Data(3);
                        $res.data = [hs_p26DtaW, hs_m26DtaU, hs_l26Dtbc, hs_tpl26Dtbd];
                        return $res;
                    };
                    var hs_sat26Dtek = new $hs.Thunk();
                    hs_sat26Dtek.evaluateOnce = function () {
                        var hs_wild326Dten = hs_ds26Dtb1;
                        if (hs_ds26Dtb1.notEvaluated) {
                            hs_wild326Dten = hs_ds26Dtb1.hscall();
                        }
                        var hs_found26Dtb5 = hs_wild326Dten.data[0];
                        if (hs_found26Dtb5.notEvaluated) {
                            return hs_found26Dtb5.hscall();
                        } else {
                            return hs_found26Dtb5;
                        }
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26Dtek, hs_sat26Dtel];
                    return $res;
                case 2:
                    var hs_ds26Dtbg = new $hs.Thunk();
                    hs_ds26Dtbg.evaluateOnce = function () {
                        return $hs.modules.GHCziEventziIntMap.hs_insertWith.hscall(hs_f26DtaL, hs_k26Dtax, hs_x26Dtay, hs_l26Dtbc);
                    };
                    var hs_sat26Dtef = new $hs.Thunk();
                    hs_sat26Dtef.evaluateOnce = function () {
                        var hs_wild326Dtei = hs_ds26Dtbg;
                        if (hs_ds26Dtbg.notEvaluated) {
                            hs_wild326Dtei = hs_ds26Dtbg.hscall();
                        }
                        var hs_lzq26Dtbp = hs_wild326Dtei.data[1];
                        var hs_tpl26Dtbr = hs_lzq26Dtbp;
                        if (hs_lzq26Dtbp.notEvaluated) {
                            hs_tpl26Dtbr = hs_lzq26Dtbp.hscall();
                        }
                        var $res = new $hs.Data(3);
                        $res.data = [hs_p26DtaW, hs_m26DtaU, hs_tpl26Dtbr, hs_r26Dtb0];
                        return $res;
                    };
                    var hs_sat26Dted = new $hs.Thunk();
                    hs_sat26Dted.evaluateOnce = function () {
                        var hs_wild326Dteh = hs_ds26Dtbg;
                        if (hs_ds26Dtbg.notEvaluated) {
                            hs_wild326Dteh = hs_ds26Dtbg.hscall();
                        }
                        var hs_found26Dtbk = hs_wild326Dteh.data[0];
                        if (hs_found26Dtbk.notEvaluated) {
                            return hs_found26Dtbk.hscall();
                        } else {
                            return hs_found26Dtbk;
                        }
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26Dted, hs_sat26Dtef];
                    return $res;
                }
            case 2:
                var hs_sat26Dte9 = new $hs.Thunk();
                hs_sat26Dte9.evaluateOnce = function () {
                    var hs_sat26Dtec = new $hs.Thunk();
                    hs_sat26Dtec.evaluateOnce = function () {
                        return $hs.modules.GHCziEventziIntMap.hs_zdWTip.hscall(hs_k26Dtax, hs_x26Dtay);
                    };
                    return hs_join25skCc.hscall(hs_k26Dtax, hs_sat26Dtec, hs_p26DtaW, hs_wild26DtaF);
                };
                var $res = new $hs.Data(1);
                $res.data = [$hs.modules.DataziMaybe.hs_Nothing, hs_sat26Dte9];
                return $res;
            }
        }
    };
    hs_lookupN25skBZ.evaluate = function (hs_k26DtbB, hs_t26Dtbx) {
        var hs_wild26Dter = hs_t26Dtbx;
        if (hs_t26Dtbx.notEvaluated) {
            hs_wild26Dter = hs_t26Dtbx.hscall();
        }
        switch (hs_wild26Dter.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_kx26DtbC = hs_wild26Dter.data[0];
            var hs_x26DtbF = hs_wild26Dter.data[1];
            var hs_sat26Dtes = new $hs.Thunk();
            hs_sat26Dtes.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord, hs_kx26DtbC);
            };
            var hs_wild126Dtet = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord, hs_k26DtbB, hs_sat26Dtes);
            switch (hs_wild126Dtet.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [hs_x26DtbF];
                return $res;
            }
        case 3:
            var hs_m26DtbK = hs_wild26Dter.data[1];
            var hs_l26DtbQ = hs_wild26Dter.data[2];
            var hs_r26DtbP = hs_wild26Dter.data[3];
            var hs_sat26Dtev = new $hs.Data(1);
            hs_sat26Dtev.data = [0];
            var hs_sat26Dtew = new $hs.Thunk();
            hs_sat26Dtew.evaluateOnce = function () {
                var hs_sat26Dtey = new $hs.Thunk();
                hs_sat26Dtey.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord, hs_m26DtbK);
                };
                return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_k26DtbB, hs_sat26Dtey);
            };
            var hs_wild126Dtex = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord, hs_sat26Dtew, hs_sat26Dtev);
            switch (hs_wild126Dtex.tag) {
            case 1:
                return hs_lookupN25skBZ.hscall(hs_k26DtbB, hs_r26DtbP);
            case 2:
                return hs_lookupN25skBZ.hscall(hs_k26DtbB, hs_l26DtbQ);
            }
        }
    };
    this.hs_lookup.evaluate = function (hs_k26DtbT, hs_t26DtbX) {
        var hs_nk26DtbW = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord, hs_k26DtbT);
        return hs_lookupN25skBZ.hscall(hs_nk26DtbW, hs_t26DtbX);
    };
    this.hs_member.evaluate = function (hs_k26Dtc0, hs_m26Dtc4) {
        var hs_nk26Dtc3 = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord, hs_k26Dtc0);
        var hs_wild26DteC = hs_lookupN25skBZ.hscall(hs_nk26Dtc3, hs_m26Dtc4);
        switch (hs_wild26DteC.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    this.hs_Nil.data = [];
    this.hs_Tip.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(2);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_Bin.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(3);
        $res.data = [hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
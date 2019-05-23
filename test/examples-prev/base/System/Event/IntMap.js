
$hs.modules.SystemziEventziIntMap = new $hs.Module();
$hs.modules.SystemziEventziIntMap.dependencies = ["GHC.Types", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Show", "GHC.Classes", "GHC.Word", "Data.Bits"];
$hs.modules.SystemziEventziIntMap.initBeforeDependencies = function () {
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
    this.hs_zdWTip.evaluate = function (hs_tpl26DS8N, hs_tpl26DS8Q) {
        $hs.modules.SystemziEventziIntMap.loadDependencies();
        return this.evaluate(hs_tpl26DS8N, hs_tpl26DS8Q);
    };
    this.hs_zdWBin.notEvaluated = true;
    this.hs_zdWBin.evaluate = function (hs_tpl26DS8Y, hs_tpl26DS91, hs_tpl26DS94, hs_tpl26DS96) {
        $hs.modules.SystemziEventziIntMap.loadDependencies();
        return this.evaluate(hs_tpl26DS8Y, hs_tpl26DS91, hs_tpl26DS94, hs_tpl26DS96);
    };
    this.hs_foldWithKey.notEvaluated = true;
    this.hs_foldWithKey.evaluate = function (hs_f26DSbc, hs_zz26DSb8, hs_t26DSb6) {
        $hs.modules.SystemziEventziIntMap.loadDependencies();
        return this.evaluate(hs_f26DSbc, hs_zz26DSb8, hs_t26DSb6);
    };
    this.hs_keys.notEvaluated = true;
    this.hs_keys.evaluate = function (hs_m26DSbA) {
        $hs.modules.SystemziEventziIntMap.loadDependencies();
        return this.evaluate(hs_m26DSbA);
    };
    this.hs_empty.notEvaluated = true;
    this.hs_empty.evaluate = function () {
        $hs.modules.SystemziEventziIntMap.loadDependencies();
        return this;
    };
    this.hs_zdfEqIntMap.notEvaluated = true;
    this.hs_zdfEqIntMap.evaluate = function (hs_zddEq26DSbU) {
        $hs.modules.SystemziEventziIntMap.loadDependencies();
        return this.evaluate(hs_zddEq26DSbU);
    };
    this.hs_zdfShowIntMap.notEvaluated = true;
    this.hs_zdfShowIntMap.evaluate = function (hs_zddShow26DScH) {
        $hs.modules.SystemziEventziIntMap.loadDependencies();
        return this.evaluate(hs_zddShow26DScH);
    };
    this.hs_delete.notEvaluated = true;
    this.hs_delete.evaluate = function (hs_k26DSdh, hs_t26DSdd) {
        $hs.modules.SystemziEventziIntMap.loadDependencies();
        return this.evaluate(hs_k26DSdh, hs_t26DSdd);
    };
    this.hs_updateWith.notEvaluated = true;
    this.hs_updateWith.evaluate = function (hs_f26DSeD, hs_k26DSez, hs_t26DSes) {
        $hs.modules.SystemziEventziIntMap.loadDependencies();
        return this.evaluate(hs_f26DSeD, hs_k26DSez, hs_t26DSes);
    };
    this.hs_insertWith.notEvaluated = true;
    this.hs_insertWith.evaluate = function (hs_f26DShO, hs_k26DSho, hs_x26DShr, hs_t26DShm) {
        $hs.modules.SystemziEventziIntMap.loadDependencies();
        return this.evaluate(hs_f26DShO, hs_k26DSho, hs_x26DShr, hs_t26DShm);
    };
    this.hs_lookup.notEvaluated = true;
    this.hs_lookup.evaluate = function (hs_k26DSjj, hs_t26DSjn) {
        $hs.modules.SystemziEventziIntMap.loadDependencies();
        return this.evaluate(hs_k26DSjj, hs_t26DSjn);
    };
    this.hs_member.notEvaluated = true;
    this.hs_member.evaluate = function (hs_k26DSjq, hs_m26DSju) {
        $hs.modules.SystemziEventziIntMap.loadDependencies();
        return this.evaluate(hs_k26DSjq, hs_m26DSju);
    };
    this.hs_Nil.notEvaluated = true;
    this.hs_Nil.evaluate = function () {
        $hs.modules.SystemziEventziIntMap.loadDependencies();
        return this;
    };
    this.hs_Tip.notEvaluated = true;
    this.hs_Tip.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziEventziIntMap.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_Bin.notEvaluated = true;
    this.hs_Bin.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziEventziIntMap.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.SystemziEventziIntMap.initAfterDependencies = function () {
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
    var hs_nequal25srJs = new $hs.Func(3);
    var hs_equal25srJq = new $hs.Func(3);
    var hs_foldrzq25srJm = new $hs.Func(3);
    var hs_zdczsze25vtFm = new $hs.Func(3);
    var hs_zdczeze25vtFu = new $hs.Func(3);
    var hs_zdcshowsPrec25vtFO = new $hs.Func(1);
    var hs_zdcshowList25vtGn = new $hs.Func(1);
    var hs_zdcshow25vtGp = new $hs.Func(1);
    var hs_zzero25srJy = new $hs.Func(2);
    var hs_mask25srJC = new $hs.Func(2);
    var hs_join25srJu = new $hs.Func(4);
    var hs_lookupN25srJ4 = new $hs.Func(2);
    this.hs_zdWTip.evaluate = function (hs_tpl26DS8N, hs_tpl26DS8Q) {
        var hs_tpl26DSjx = hs_tpl26DS8N;
        if (hs_tpl26DS8N.notEvaluated) {
            hs_tpl26DSjx = hs_tpl26DS8N.hscall();
        }
        var hs_tpl26DS8S = hs_tpl26DSjx.data[0];
        var hs_tpl26DS8T = hs_tpl26DS8Q;
        if (hs_tpl26DS8Q.notEvaluated) {
            hs_tpl26DS8T = hs_tpl26DS8Q.hscall();
        }
        var $res = new $hs.Data(2);
        $res.data = [hs_tpl26DS8S, hs_tpl26DS8T];
        return $res;
    };
    this.hs_zdWBin.evaluate = function (hs_tpl26DS8Y, hs_tpl26DS91, hs_tpl26DS94, hs_tpl26DS96) {
        var hs_tpl26DSjz = hs_tpl26DS8Y;
        if (hs_tpl26DS8Y.notEvaluated) {
            hs_tpl26DSjz = hs_tpl26DS8Y.hscall();
        }
        var hs_tpl26DS98 = hs_tpl26DSjz.data[0];
        var hs_tpl26DSjy = hs_tpl26DS91;
        if (hs_tpl26DS91.notEvaluated) {
            hs_tpl26DSjy = hs_tpl26DS91.hscall();
        }
        var hs_tpl26DS99 = hs_tpl26DSjy.data[0];
        var hs_tpl26DS9a = hs_tpl26DS94;
        if (hs_tpl26DS94.notEvaluated) {
            hs_tpl26DS9a = hs_tpl26DS94.hscall();
        }
        var hs_tpl26DS9b = hs_tpl26DS96;
        if (hs_tpl26DS96.notEvaluated) {
            hs_tpl26DS9b = hs_tpl26DS96.hscall();
        }
        var $res = new $hs.Data(3);
        $res.data = [hs_tpl26DS98, hs_tpl26DS99, hs_tpl26DS9a, hs_tpl26DS9b];
        return $res;
    };
    hs_nequal25srJs.evaluate = function (hs_zddEq26DS9t, hs_ds26DS9f, hs_ds126DS9h) {
        var hs_wild26DSjB = hs_ds26DS9f;
        if (hs_ds26DS9f.notEvaluated) {
            hs_wild26DSjB = hs_ds26DS9f.hscall();
        }
        switch (hs_wild26DSjB.tag) {
        case 1:
            var hs_wild126DSjA = hs_ds126DS9h;
            if (hs_ds126DS9h.notEvaluated) {
                hs_wild126DSjA = hs_ds126DS9h.hscall();
            }
            switch (hs_wild126DSjA.tag) {
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
            var hs_rb26DS9o = hs_wild26DSjB.data[0];
            var hs_x26DS9u = hs_wild26DSjB.data[1];
            var hs_wild126DSjC = hs_ds126DS9h;
            if (hs_ds126DS9h.notEvaluated) {
                hs_wild126DSjC = hs_ds126DS9h.hscall();
            }
            switch (hs_wild126DSjC.tag) {
            case 2:
                var hs_rb126DS9q = hs_wild126DSjC.data[0];
                var hs_y26DS9v = hs_wild126DSjC.data[1];
                var hs_sat26DSjD = new $hs.Thunk();
                hs_sat26DSjD.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_zddEq26DS9t, hs_x26DS9u, hs_y26DS9v);
                };
                var hs_sat26DSjG = new $hs.Thunk();
                hs_sat26DSjG.evaluateOnce = function () {
                    var hs_sat26DSjE = new $hs.Data(1);
                    hs_sat26DSjE.data = [hs_rb126DS9q];
                    var hs_sat26DSjF = new $hs.Data(1);
                    hs_sat26DSjF.data = [hs_rb26DS9o];
                    return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DSjF, hs_sat26DSjE);
                };
                return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DSjG, hs_sat26DSjD);
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_rb26DS9L = hs_wild26DSjB.data[0];
            var hs_rb126DS9G = hs_wild26DSjB.data[1];
            var hs_l126DS9Q = hs_wild26DSjB.data[2];
            var hs_r126DS9T = hs_wild26DSjB.data[3];
            var hs_wild126DSjH = hs_ds126DS9h;
            if (hs_ds126DS9h.notEvaluated) {
                hs_wild126DSjH = hs_ds126DS9h.hscall();
            }
            switch (hs_wild126DSjH.tag) {
            case 3:
                var hs_rb226DS9N = hs_wild126DSjH.data[0];
                var hs_rb326DS9I = hs_wild126DSjH.data[1];
                var hs_l226DS9R = hs_wild126DSjH.data[2];
                var hs_r226DS9U = hs_wild126DSjH.data[3];
                var hs_sat26DSjO = new $hs.Thunk();
                hs_sat26DSjO.evaluateOnce = function () {
                    var hs_sat26DSjK = new $hs.Thunk();
                    hs_sat26DSjK.evaluateOnce = function () {
                        var hs_sat26DSjI = new $hs.Thunk();
                        hs_sat26DSjI.evaluateOnce = function () {
                            return hs_nequal25srJs.hscall(hs_zddEq26DS9t, hs_r126DS9T, hs_r226DS9U);
                        };
                        var hs_sat26DSjJ = new $hs.Thunk();
                        hs_sat26DSjJ.evaluateOnce = function () {
                            return hs_nequal25srJs.hscall(hs_zddEq26DS9t, hs_l126DS9Q, hs_l226DS9R);
                        };
                        return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DSjJ, hs_sat26DSjI);
                    };
                    var hs_sat26DSjN = new $hs.Thunk();
                    hs_sat26DSjN.evaluateOnce = function () {
                        var hs_sat26DSjL = new $hs.Data(1);
                        hs_sat26DSjL.data = [hs_rb226DS9N];
                        var hs_sat26DSjM = new $hs.Data(1);
                        hs_sat26DSjM.data = [hs_rb26DS9L];
                        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DSjM, hs_sat26DSjL);
                    };
                    return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DSjN, hs_sat26DSjK);
                };
                var hs_sat26DSjR = new $hs.Thunk();
                hs_sat26DSjR.evaluateOnce = function () {
                    var hs_sat26DSjP = new $hs.Data(1);
                    hs_sat26DSjP.data = [hs_rb326DS9I];
                    var hs_sat26DSjQ = new $hs.Data(1);
                    hs_sat26DSjQ.data = [hs_rb126DS9G];
                    return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DSjQ, hs_sat26DSjP);
                };
                return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DSjR, hs_sat26DSjO);
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_equal25srJq.evaluate = function (hs_zddEq26DSaf, hs_ds26DSa1, hs_ds126DSa3) {
        var hs_wild26DSjT = hs_ds26DSa1;
        if (hs_ds26DSa1.notEvaluated) {
            hs_wild26DSjT = hs_ds26DSa1.hscall();
        }
        switch (hs_wild26DSjT.tag) {
        case 1:
            var hs_wild126DSjS = hs_ds126DSa3;
            if (hs_ds126DSa3.notEvaluated) {
                hs_wild126DSjS = hs_ds126DSa3.hscall();
            }
            switch (hs_wild126DSjS.tag) {
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
            var hs_rb26DSaa = hs_wild26DSjT.data[0];
            var hs_x26DSag = hs_wild26DSjT.data[1];
            var hs_wild126DSjU = hs_ds126DSa3;
            if (hs_ds126DSa3.notEvaluated) {
                hs_wild126DSjU = hs_ds126DSa3.hscall();
            }
            switch (hs_wild126DSjU.tag) {
            case 2:
                var hs_rb126DSac = hs_wild126DSjU.data[0];
                var hs_y26DSah = hs_wild126DSjU.data[1];
                var hs_sat26DSjV = new $hs.Thunk();
                hs_sat26DSjV.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DSaf, hs_x26DSag, hs_y26DSah);
                };
                var hs_sat26DSjY = new $hs.Thunk();
                hs_sat26DSjY.evaluateOnce = function () {
                    var hs_sat26DSjW = new $hs.Data(1);
                    hs_sat26DSjW.data = [hs_rb126DSac];
                    var hs_sat26DSjX = new $hs.Data(1);
                    hs_sat26DSjX.data = [hs_rb26DSaa];
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DSjX, hs_sat26DSjW);
                };
                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DSjY, hs_sat26DSjV);
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_rb26DSax = hs_wild26DSjT.data[0];
            var hs_rb126DSas = hs_wild26DSjT.data[1];
            var hs_l126DSaC = hs_wild26DSjT.data[2];
            var hs_r126DSaF = hs_wild26DSjT.data[3];
            var hs_wild126DSjZ = hs_ds126DSa3;
            if (hs_ds126DSa3.notEvaluated) {
                hs_wild126DSjZ = hs_ds126DSa3.hscall();
            }
            switch (hs_wild126DSjZ.tag) {
            case 3:
                var hs_rb226DSaz = hs_wild126DSjZ.data[0];
                var hs_rb326DSau = hs_wild126DSjZ.data[1];
                var hs_l226DSaD = hs_wild126DSjZ.data[2];
                var hs_r226DSaG = hs_wild126DSjZ.data[3];
                var hs_sat26DSk6 = new $hs.Thunk();
                hs_sat26DSk6.evaluateOnce = function () {
                    var hs_sat26DSk2 = new $hs.Thunk();
                    hs_sat26DSk2.evaluateOnce = function () {
                        var hs_sat26DSk0 = new $hs.Thunk();
                        hs_sat26DSk0.evaluateOnce = function () {
                            return hs_equal25srJq.hscall(hs_zddEq26DSaf, hs_r126DSaF, hs_r226DSaG);
                        };
                        var hs_sat26DSk1 = new $hs.Thunk();
                        hs_sat26DSk1.evaluateOnce = function () {
                            return hs_equal25srJq.hscall(hs_zddEq26DSaf, hs_l126DSaC, hs_l226DSaD);
                        };
                        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DSk1, hs_sat26DSk0);
                    };
                    var hs_sat26DSk5 = new $hs.Thunk();
                    hs_sat26DSk5.evaluateOnce = function () {
                        var hs_sat26DSk3 = new $hs.Data(1);
                        hs_sat26DSk3.data = [hs_rb226DSaz];
                        var hs_sat26DSk4 = new $hs.Data(1);
                        hs_sat26DSk4.data = [hs_rb26DSax];
                        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DSk4, hs_sat26DSk3);
                    };
                    return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DSk5, hs_sat26DSk2);
                };
                var hs_sat26DSk9 = new $hs.Thunk();
                hs_sat26DSk9.evaluateOnce = function () {
                    var hs_sat26DSk7 = new $hs.Data(1);
                    hs_sat26DSk7.data = [hs_rb326DSau];
                    var hs_sat26DSk8 = new $hs.Data(1);
                    hs_sat26DSk8.data = [hs_rb126DSas];
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DSk8, hs_sat26DSk7);
                };
                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DSk9, hs_sat26DSk6);
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_foldrzq25srJm.evaluate = function (hs_f26DSaT, hs_zz26DSaP, hs_t26DSaN) {
        var hs_wild26DSka = hs_t26DSaN;
        if (hs_t26DSaN.notEvaluated) {
            hs_wild26DSka = hs_t26DSaN.hscall();
        }
        switch (hs_wild26DSka.tag) {
        case 1:
            if (hs_zz26DSaP.notEvaluated) {
                return hs_zz26DSaP.hscall();
            } else {
                return hs_zz26DSaP;
            }
        case 2:
            var hs_rb26DSaS = hs_wild26DSka.data[0];
            var hs_x26DSaV = hs_wild26DSka.data[1];
            var hs_sat26DSkb = new $hs.Data(1);
            hs_sat26DSkb.data = [hs_rb26DSaS];
            return hs_f26DSaT.hscall(hs_sat26DSkb, hs_x26DSaV, hs_zz26DSaP);
        case 3:
            var hs_l26DSb2 = hs_wild26DSka.data[2];
            var hs_r26DSb0 = hs_wild26DSka.data[3];
            var hs_sat26DSke = new $hs.Thunk();
            hs_sat26DSke.evaluateOnce = function () {
                return hs_foldrzq25srJm.hscall(hs_f26DSaT, hs_zz26DSaP, hs_r26DSb0);
            };
            return hs_foldrzq25srJm.hscall(hs_f26DSaT, hs_sat26DSke, hs_l26DSb2);
        }
    };
    this.hs_foldWithKey.evaluate = function (hs_f26DSbc, hs_zz26DSb8, hs_t26DSb6) {
        var hs_wild26DSbl = hs_t26DSb6;
        if (hs_t26DSb6.notEvaluated) {
            hs_wild26DSbl = hs_t26DSb6.hscall();
        }
        switch (hs_wild26DSbl.tag) {
        case 1:
            if (hs_zz26DSb8.notEvaluated) {
                return hs_zz26DSb8.hscall();
            } else {
                return hs_zz26DSb8;
            }
        case 2:
            var hs_rb26DSbb = hs_wild26DSbl.data[0];
            var hs_x26DSbe = hs_wild26DSbl.data[1];
            var hs_sat26DSkf = new $hs.Data(1);
            hs_sat26DSkf.data = [hs_rb26DSbb];
            return hs_f26DSbc.hscall(hs_sat26DSkf, hs_x26DSbe, hs_zz26DSb8);
        case 3:
            var hs_rb26DSbj = hs_wild26DSbl.data[0];
            var hs_rb126DSbm = hs_wild26DSbl.data[1];
            var hs_l26DSbq = hs_wild26DSbl.data[2];
            var hs_r26DSbs = hs_wild26DSbl.data[3];
            var hs_ds26DSkg = hs_rb26DSbj;
            if (hs_rb26DSbj.notEvaluated) {
                hs_ds26DSkg = hs_rb26DSbj.hscall();
            }
            switch (hs_ds26DSkg) {
            case 0:
                var hs_sat26DSkh = new $hs.Data(1);
                hs_sat26DSkh.data = [0];
                var hs_sat26DSkj = new $hs.Data(1);
                hs_sat26DSkj.data = [hs_rb126DSbm];
                var hs_wild126DSki = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DSkj, hs_sat26DSkh);
                switch (hs_wild126DSki.tag) {
                case 1:
                    return hs_foldrzq25srJm.hscall(hs_f26DSbc, hs_zz26DSb8, hs_wild26DSbl);
                case 2:
                    var hs_sat26DSkk = new $hs.Thunk();
                    hs_sat26DSkk.evaluateOnce = function () {
                        return hs_foldrzq25srJm.hscall(hs_f26DSbc, hs_zz26DSb8, hs_l26DSbq);
                    };
                    return hs_foldrzq25srJm.hscall(hs_f26DSbc, hs_sat26DSkk, hs_r26DSbs);
                }
            default:
                return hs_foldrzq25srJm.hscall(hs_f26DSbc, hs_zz26DSb8, hs_wild26DSbl);
            }
        }
    };
    this.hs_keys.evaluate = function (hs_m26DSbA) {
        var hs_sat26DSkm = new $hs.Func(3);
        hs_sat26DSkm.evaluate = function (hs_k26DSbx, hs_ds26DSkl, hs_ks26DSby) {
            var $res = new $hs.Data(2);
            $res.data = [hs_k26DSbx, hs_ks26DSby];
            return $res;
        };
        return $hs.modules.SystemziEventziIntMap.hs_foldWithKey.hscall(hs_sat26DSkm, $hs.modules.GHCziTypes.hs_ZMZN, hs_m26DSbA);
    };
    this.hs_empty.data = [];
    hs_zdczsze25vtFm.evaluate = function (hs_zddEq26DSbG, hs_t126DSbH, hs_t226DSbI) {
        return hs_nequal25srJs.hscall(hs_zddEq26DSbG, hs_t126DSbH, hs_t226DSbI);
    };
    hs_zdczeze25vtFu.evaluate = function (hs_zddEq26DSbO, hs_t126DSbP, hs_t226DSbQ) {
        return hs_equal25srJq.hscall(hs_zddEq26DSbO, hs_t126DSbP, hs_t226DSbQ);
    };
    this.hs_zdfEqIntMap.evaluate = function (hs_zddEq26DSbU) {
        var hs_sat26DSkn = new $hs.Func(2);
        hs_sat26DSkn.evaluate = function (hs_t126DSc0, hs_t226DSc1) {
            return hs_nequal25srJs.hscall(hs_zddEq26DSbU, hs_t126DSc0, hs_t226DSc1);
        };
        var hs_sat26DSko = new $hs.Func(2);
        hs_sat26DSko.evaluate = function (hs_t126DSbV, hs_t226DSbW) {
            return hs_equal25srJq.hscall(hs_zddEq26DSbU, hs_t126DSbV, hs_t226DSbW);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DSko, hs_sat26DSkn];
        return $res;
    };
    hs_zdcshowsPrec25vtFO.evaluate = function (hs_zddShow26DSc7) {
        var hs_zddShow126DSc8 = new $hs.Thunk();
        hs_zddShow126DSc8.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUZR.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_zddShow26DSc7);
        };
        var hs_zddShow226DSca = new $hs.Thunk();
        hs_zddShow226DSca.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZMZN.hscall(hs_zddShow126DSc8);
        };
        var hs_sat26DSkt = new $hs.Func(2);
        hs_sat26DSkt.evaluate = function (hs_d26DScd, hs_m26DScr) {
            var hs_sat26DSkp = new $hs.Thunk();
            hs_sat26DSkp.evaluateOnce = function () {
                var hs_sat26DScy = new $hs.Thunk();
                hs_sat26DScy.evaluateOnce = function () {
                    var hs_sat26DScx = new $hs.Thunk();
                    hs_sat26DScx.evaluateOnce = function () {
                        var hs_sat26DScw = new $hs.Func(3);
                        hs_sat26DScw.evaluate = function (hs_k26DScm, hs_x26DScn, hs_xs26DScp) {
                            var hs_sat26DScv = new $hs.Data(1);
                            hs_sat26DScv.data = [hs_k26DScm, hs_x26DScn];
                            var $res = new $hs.Data(2);
                            $res.data = [hs_sat26DScv, hs_xs26DScp];
                            return $res;
                        };
                        return $hs.modules.SystemziEventziIntMap.hs_foldWithKey.hscall(hs_sat26DScw, $hs.modules.GHCziTypes.hs_ZMZN, hs_m26DScr);
                    };
                    return $hs.modules.GHCziShow.hs_shows.hscall(hs_zddShow226DSca, hs_sat26DScx);
                };
                var hs_sat26DScA = new $hs.Thunk();
                hs_sat26DScA.evaluateOnce = function () {
                    var hs_sat26DScz = new $hs.Thunk();
                    hs_sat26DScz.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("fromList \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DScz);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DScA, hs_sat26DScy);
            };
            var hs_sat26DSks = new $hs.Thunk();
            hs_sat26DSks.evaluateOnce = function () {
                var hs_sat26DSkr = new $hs.Thunk();
                hs_sat26DSkr.evaluateOnce = function () {
                    var hs_sat26DSkq = new $hs.Data(1);
                    hs_sat26DSkq.data = [10];
                    return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_d26DScd, hs_sat26DSkq);
                };
                return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DSkr);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DSks, hs_sat26DSkp);
        };
        if (hs_sat26DSkt.notEvaluated) {
            return hs_sat26DSkt.hscall();
        } else {
            return hs_sat26DSkt;
        }
    };
    this.hs_zdfShowIntMap.evaluate = function (hs_zddShow26DScH) {
        var hs_sat26DSku = new $hs.Thunk();
        hs_sat26DSku.evaluateOnce = function () {
            return hs_zdcshowList25vtGn.hscall(hs_zddShow26DScH);
        };
        var hs_sat26DSkv = new $hs.Thunk();
        hs_sat26DSkv.evaluateOnce = function () {
            return hs_zdcshow25vtGp.hscall(hs_zddShow26DScH);
        };
        var hs_sat26DSkw = new $hs.Thunk();
        hs_sat26DSkw.evaluateOnce = function () {
            return hs_zdcshowsPrec25vtFO.hscall(hs_zddShow26DScH);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DSkw, hs_sat26DSkv, hs_sat26DSku];
        return $res;
    };
    hs_zdcshowList25vtGn.evaluate = function (hs_zddShow26DScM) {
        var hs_sat26DSkx = new $hs.Thunk();
        hs_sat26DSkx.evaluateOnce = function () {
            return $hs.modules.SystemziEventziIntMap.hs_zdfShowIntMap.hscall(hs_zddShow26DScM);
        };
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall(hs_sat26DSkx);
    };
    hs_zdcshow25vtGp.evaluate = function (hs_zddShow26DScP) {
        var hs_sat26DSky = new $hs.Thunk();
        hs_sat26DSky.evaluateOnce = function () {
            return $hs.modules.SystemziEventziIntMap.hs_zdfShowIntMap.hscall(hs_zddShow26DScP);
        };
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_sat26DSky);
    };
    hs_zzero25srJy.evaluate = function (hs_i26DScT, hs_m26DScV) {
        var hs_sat26DSkz = new $hs.Data(1);
        hs_sat26DSkz.data = [0];
        var hs_sat26DSkC = new $hs.Thunk();
        hs_sat26DSkC.evaluateOnce = function () {
            var hs_sat26DSkA = new $hs.Thunk();
            hs_sat26DSkA.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord, hs_m26DScV);
            };
            var hs_sat26DSkB = new $hs.Thunk();
            hs_sat26DSkB.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord, hs_i26DScT);
            };
            return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_sat26DSkB, hs_sat26DSkA);
        };
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord, hs_sat26DSkC, hs_sat26DSkz);
    };
    hs_mask25srJC.evaluate = function (hs_i26DSd4, hs_m26DSd2) {
        var hs_m126DSd3 = new $hs.Thunk();
        hs_m126DSd3.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord, hs_m26DSd2);
        };
        var hs_sat26DSkI = new $hs.Thunk();
        hs_sat26DSkI.evaluateOnce = function () {
            var hs_sat26DSkG = new $hs.Thunk();
            hs_sat26DSkG.evaluateOnce = function () {
                var hs_sat26DSkF = new $hs.Thunk();
                hs_sat26DSkF.evaluateOnce = function () {
                    var hs_sat26DSkE = new $hs.Thunk();
                    hs_sat26DSkE.evaluateOnce = function () {
                        var hs_sat26DSkD = new $hs.Data(1);
                        hs_sat26DSkD.data = [1];
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord, hs_m126DSd3, hs_sat26DSkD);
                    };
                    return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_sat26DSkE);
                };
                return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_sat26DSkF, hs_m126DSd3);
            };
            var hs_sat26DSkH = new $hs.Thunk();
            hs_sat26DSkH.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord, hs_i26DSd4);
            };
            return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_sat26DSkH, hs_sat26DSkG);
        };
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DSkI);
    };
    this.hs_delete.evaluate = function (hs_k26DSdh, hs_t26DSdd) {
        var hs_wild26DSdl = hs_t26DSdd;
        if (hs_t26DSdd.notEvaluated) {
            hs_wild26DSdl = hs_t26DSdd.hscall();
        }
        switch (hs_wild26DSdl.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.SystemziEventziIntMap.hs_Nil];
            return $res;
        case 2:
            var hs_rb26DSdi = hs_wild26DSdl.data[0];
            var hs_y26DSdm = hs_wild26DSdl.data[1];
            var hs_sat26DSkK = new $hs.Data(1);
            hs_sat26DSkK.data = [hs_rb26DSdi];
            var hs_wild126DSkJ = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_k26DSdh, hs_sat26DSkK);
            switch (hs_wild126DSkJ.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [$hs.modules.DataziMaybe.hs_Nothing, hs_wild26DSdl];
                return $res;
            case 2:
                var hs_sat26DSkL = new $hs.Data(2);
                hs_sat26DSkL.data = [hs_y26DSdm];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26DSkL, $hs.modules.SystemziEventziIntMap.hs_Nil];
                return $res;
            }
        case 3:
            var hs_rb26DSdt = hs_wild26DSdl.data[0];
            var hs_rb126DSdw = hs_wild26DSdl.data[1];
            var hs_l26DSdO = hs_wild26DSdl.data[2];
            var hs_r26DSdC = hs_wild26DSdl.data[3];
            var hs_p26DSdu = new $hs.Data(1);
            hs_p26DSdu.data = [hs_rb26DSdt];
            var hs_m26DSdx = new $hs.Data(1);
            hs_m26DSdx.data = [hs_rb126DSdw];
            var hs_sat26DSkO = new $hs.Thunk();
            hs_sat26DSkO.evaluateOnce = function () {
                return hs_mask25srJC.hscall(hs_k26DSdh, hs_m26DSdx);
            };
            var hs_wild126DSkN = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DSkO, hs_p26DSdu);
            switch (hs_wild126DSkN.tag) {
            case 1:
                var hs_wild226DSkM = hs_zzero25srJy.hscall(hs_k26DSdh, hs_m26DSdx);
                switch (hs_wild226DSkM.tag) {
                case 1:
                    var hs_ds26DSdD = new $hs.Thunk();
                    hs_ds26DSdD.evaluateOnce = function () {
                        return $hs.modules.SystemziEventziIntMap.hs_delete.hscall(hs_k26DSdh, hs_r26DSdC);
                    };
                    var hs_sat26DSkU = new $hs.Thunk();
                    hs_sat26DSkU.evaluateOnce = function () {
                        var hs_wild326DSkS = hs_ds26DSdD;
                        if (hs_ds26DSdD.notEvaluated) {
                            hs_wild326DSkS = hs_ds26DSdD.hscall();
                        }
                        var hs_rzq26DSdM = hs_wild326DSkS.data[1];
                        var hs_wild426DSdX = hs_rzq26DSdM;
                        if (hs_rzq26DSdM.notEvaluated) {
                            hs_wild426DSdX = hs_rzq26DSdM.hscall();
                        }
                        switch (hs_wild426DSdX.tag) {
                        case 1:
                            if (hs_l26DSdO.notEvaluated) {
                                return hs_l26DSdO.hscall();
                            } else {
                                return hs_l26DSdO;
                            }
                        default:
                            var hs_wild526DSdW = hs_l26DSdO;
                            if (hs_l26DSdO.notEvaluated) {
                                hs_wild526DSdW = hs_l26DSdO.hscall();
                            }
                            switch (hs_wild526DSdW.tag) {
                            case 1:
                                if (hs_wild426DSdX.notEvaluated) {
                                    return hs_wild426DSdX.hscall();
                                } else {
                                    return hs_wild426DSdX;
                                }
                            default:
                                var hs_tpl26DSkQ = hs_p26DSdu;
                                if (hs_p26DSdu.notEvaluated) {
                                    hs_tpl26DSkQ = hs_p26DSdu.hscall();
                                }
                                var hs_tpl126DSdU = hs_tpl26DSkQ.data[0];
                                var hs_tpl226DSkP = hs_m26DSdx;
                                if (hs_m26DSdx.notEvaluated) {
                                    hs_tpl226DSkP = hs_m26DSdx.hscall();
                                }
                                var hs_tpl326DSdV = hs_tpl226DSkP.data[0];
                                var $res = new $hs.Data(3);
                                $res.data = [hs_tpl126DSdU, hs_tpl326DSdV, hs_wild526DSdW, hs_wild426DSdX];
                                return $res;
                            }
                        }
                    };
                    var hs_sat26DSkW = new $hs.Thunk();
                    hs_sat26DSkW.evaluateOnce = function () {
                        var hs_wild326DSkT = hs_ds26DSdD;
                        if (hs_ds26DSdD.notEvaluated) {
                            hs_wild326DSkT = hs_ds26DSdD.hscall();
                        }
                        var hs_found26DSdH = hs_wild326DSkT.data[0];
                        if (hs_found26DSdH.notEvaluated) {
                            return hs_found26DSdH.hscall();
                        } else {
                            return hs_found26DSdH;
                        }
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26DSkW, hs_sat26DSkU];
                    return $res;
                case 2:
                    var hs_ds26DSe0 = new $hs.Thunk();
                    hs_ds26DSe0.evaluateOnce = function () {
                        return $hs.modules.SystemziEventziIntMap.hs_delete.hscall(hs_k26DSdh, hs_l26DSdO);
                    };
                    var hs_sat26DSl4 = new $hs.Thunk();
                    hs_sat26DSl4.evaluateOnce = function () {
                        var hs_wild326DSej = hs_r26DSdC;
                        if (hs_r26DSdC.notEvaluated) {
                            hs_wild326DSej = hs_r26DSdC.hscall();
                        }
                        switch (hs_wild326DSej.tag) {
                        case 1:
                            var hs_wild426DSl2 = hs_ds26DSe0;
                            if (hs_ds26DSe0.notEvaluated) {
                                hs_wild426DSl2 = hs_ds26DSe0.hscall();
                            }
                            var hs_lzq26DSen = hs_wild426DSl2.data[1];
                            if (hs_lzq26DSen.notEvaluated) {
                                return hs_lzq26DSen.hscall();
                            } else {
                                return hs_lzq26DSen;
                            }
                        default:
                            var hs_wild426DSl0 = hs_ds26DSe0;
                            if (hs_ds26DSe0.notEvaluated) {
                                hs_wild426DSl0 = hs_ds26DSe0.hscall();
                            }
                            var hs_lzq26DSea = hs_wild426DSl0.data[1];
                            var hs_wild526DSei = hs_lzq26DSea;
                            if (hs_lzq26DSea.notEvaluated) {
                                hs_wild526DSei = hs_lzq26DSea.hscall();
                            }
                            switch (hs_wild526DSei.tag) {
                            case 1:
                                if (hs_wild326DSej.notEvaluated) {
                                    return hs_wild326DSej.hscall();
                                } else {
                                    return hs_wild326DSej;
                                }
                            default:
                                var hs_tpl26DSkY = hs_p26DSdu;
                                if (hs_p26DSdu.notEvaluated) {
                                    hs_tpl26DSkY = hs_p26DSdu.hscall();
                                }
                                var hs_tpl126DSeg = hs_tpl26DSkY.data[0];
                                var hs_tpl226DSkX = hs_m26DSdx;
                                if (hs_m26DSdx.notEvaluated) {
                                    hs_tpl226DSkX = hs_m26DSdx.hscall();
                                }
                                var hs_tpl326DSeh = hs_tpl226DSkX.data[0];
                                var $res = new $hs.Data(3);
                                $res.data = [hs_tpl126DSeg, hs_tpl326DSeh, hs_wild526DSei, hs_wild326DSej];
                                return $res;
                            }
                        }
                    };
                    var hs_sat26DSl6 = new $hs.Thunk();
                    hs_sat26DSl6.evaluateOnce = function () {
                        var hs_wild326DSl3 = hs_ds26DSe0;
                        if (hs_ds26DSe0.notEvaluated) {
                            hs_wild326DSl3 = hs_ds26DSe0.hscall();
                        }
                        var hs_found26DSe4 = hs_wild326DSl3.data[0];
                        if (hs_found26DSe4.notEvaluated) {
                            return hs_found26DSe4.hscall();
                        } else {
                            return hs_found26DSe4;
                        }
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26DSl6, hs_sat26DSl4];
                    return $res;
                }
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [$hs.modules.DataziMaybe.hs_Nothing, hs_wild26DSdl];
                return $res;
            }
        }
    };
    this.hs_updateWith.evaluate = function (hs_f26DSeD, hs_k26DSez, hs_t26DSes) {
        var hs_wild26DSeB = hs_t26DSes;
        if (hs_t26DSes.notEvaluated) {
            hs_wild26DSeB = hs_t26DSes.hscall();
        }
        switch (hs_wild26DSeB.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.SystemziEventziIntMap.hs_Nil];
            return $res;
        case 2:
            var hs_rb26DSex = hs_wild26DSeB.data[0];
            var hs_y26DSeC = hs_wild26DSeB.data[1];
            var hs_ky26DSey = new $hs.Data(1);
            hs_ky26DSey.data = [hs_rb26DSex];
            var hs_wild126DSl7 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_k26DSez, hs_ky26DSey);
            switch (hs_wild126DSl7.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [$hs.modules.DataziMaybe.hs_Nothing, hs_wild26DSeB];
                return $res;
            case 2:
                var hs_wild226DSl8 = hs_f26DSeD.hscall(hs_y26DSeC);
                switch (hs_wild226DSl8.tag) {
                case 1:
                    var hs_sat26DSl9 = new $hs.Data(2);
                    hs_sat26DSl9.data = [hs_y26DSeC];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26DSl9, $hs.modules.SystemziEventziIntMap.hs_Nil];
                    return $res;
                case 2:
                    var hs_yzq26DSeK = hs_wild226DSl8.data[0];
                    var hs_sat26DSlb = new $hs.Thunk();
                    hs_sat26DSlb.evaluateOnce = function () {
                        var hs_tpl26DSla = hs_ky26DSey;
                        if (hs_ky26DSey.notEvaluated) {
                            hs_tpl26DSla = hs_ky26DSey.hscall();
                        }
                        var hs_tpl126DSeM = hs_tpl26DSla.data[0];
                        var hs_tpl226DSeN = hs_yzq26DSeK;
                        if (hs_yzq26DSeK.notEvaluated) {
                            hs_tpl226DSeN = hs_yzq26DSeK.hscall();
                        }
                        var $res = new $hs.Data(2);
                        $res.data = [hs_tpl126DSeM, hs_tpl226DSeN];
                        return $res;
                    };
                    var hs_sat26DSlc = new $hs.Data(2);
                    hs_sat26DSlc.data = [hs_y26DSeC];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26DSlc, hs_sat26DSlb];
                    return $res;
                }
            }
        case 3:
            var hs_rb26DSeU = hs_wild26DSeB.data[0];
            var hs_rb126DSeX = hs_wild26DSeB.data[1];
            var hs_l26DSff = hs_wild26DSeB.data[2];
            var hs_r26DSf3 = hs_wild26DSeB.data[3];
            var hs_p26DSeV = new $hs.Data(1);
            hs_p26DSeV.data = [hs_rb26DSeU];
            var hs_m26DSeY = new $hs.Data(1);
            hs_m26DSeY.data = [hs_rb126DSeX];
            var hs_sat26DSlf = new $hs.Thunk();
            hs_sat26DSlf.evaluateOnce = function () {
                return hs_mask25srJC.hscall(hs_k26DSez, hs_m26DSeY);
            };
            var hs_wild126DSle = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DSlf, hs_p26DSeV);
            switch (hs_wild126DSle.tag) {
            case 1:
                var hs_wild226DSld = hs_zzero25srJy.hscall(hs_k26DSez, hs_m26DSeY);
                switch (hs_wild226DSld.tag) {
                case 1:
                    var hs_ds26DSf4 = new $hs.Thunk();
                    hs_ds26DSf4.evaluateOnce = function () {
                        return $hs.modules.SystemziEventziIntMap.hs_updateWith.hscall(hs_f26DSeD, hs_k26DSez, hs_r26DSf3);
                    };
                    var hs_sat26DSll = new $hs.Thunk();
                    hs_sat26DSll.evaluateOnce = function () {
                        var hs_wild326DSlj = hs_ds26DSf4;
                        if (hs_ds26DSf4.notEvaluated) {
                            hs_wild326DSlj = hs_ds26DSf4.hscall();
                        }
                        var hs_rzq26DSfd = hs_wild326DSlj.data[1];
                        var hs_wild426DSfo = hs_rzq26DSfd;
                        if (hs_rzq26DSfd.notEvaluated) {
                            hs_wild426DSfo = hs_rzq26DSfd.hscall();
                        }
                        switch (hs_wild426DSfo.tag) {
                        case 1:
                            if (hs_l26DSff.notEvaluated) {
                                return hs_l26DSff.hscall();
                            } else {
                                return hs_l26DSff;
                            }
                        default:
                            var hs_wild526DSfn = hs_l26DSff;
                            if (hs_l26DSff.notEvaluated) {
                                hs_wild526DSfn = hs_l26DSff.hscall();
                            }
                            switch (hs_wild526DSfn.tag) {
                            case 1:
                                if (hs_wild426DSfo.notEvaluated) {
                                    return hs_wild426DSfo.hscall();
                                } else {
                                    return hs_wild426DSfo;
                                }
                            default:
                                var hs_tpl26DSlh = hs_p26DSeV;
                                if (hs_p26DSeV.notEvaluated) {
                                    hs_tpl26DSlh = hs_p26DSeV.hscall();
                                }
                                var hs_tpl126DSfl = hs_tpl26DSlh.data[0];
                                var hs_tpl226DSlg = hs_m26DSeY;
                                if (hs_m26DSeY.notEvaluated) {
                                    hs_tpl226DSlg = hs_m26DSeY.hscall();
                                }
                                var hs_tpl326DSfm = hs_tpl226DSlg.data[0];
                                var $res = new $hs.Data(3);
                                $res.data = [hs_tpl126DSfl, hs_tpl326DSfm, hs_wild526DSfn, hs_wild426DSfo];
                                return $res;
                            }
                        }
                    };
                    var hs_sat26DSln = new $hs.Thunk();
                    hs_sat26DSln.evaluateOnce = function () {
                        var hs_wild326DSlk = hs_ds26DSf4;
                        if (hs_ds26DSf4.notEvaluated) {
                            hs_wild326DSlk = hs_ds26DSf4.hscall();
                        }
                        var hs_found26DSf8 = hs_wild326DSlk.data[0];
                        if (hs_found26DSf8.notEvaluated) {
                            return hs_found26DSf8.hscall();
                        } else {
                            return hs_found26DSf8;
                        }
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26DSln, hs_sat26DSll];
                    return $res;
                case 2:
                    var hs_ds26DSfr = new $hs.Thunk();
                    hs_ds26DSfr.evaluateOnce = function () {
                        return $hs.modules.SystemziEventziIntMap.hs_updateWith.hscall(hs_f26DSeD, hs_k26DSez, hs_l26DSff);
                    };
                    var hs_sat26DSlv = new $hs.Thunk();
                    hs_sat26DSlv.evaluateOnce = function () {
                        var hs_wild326DSfK = hs_r26DSf3;
                        if (hs_r26DSf3.notEvaluated) {
                            hs_wild326DSfK = hs_r26DSf3.hscall();
                        }
                        switch (hs_wild326DSfK.tag) {
                        case 1:
                            var hs_wild426DSlt = hs_ds26DSfr;
                            if (hs_ds26DSfr.notEvaluated) {
                                hs_wild426DSlt = hs_ds26DSfr.hscall();
                            }
                            var hs_lzq26DSfO = hs_wild426DSlt.data[1];
                            if (hs_lzq26DSfO.notEvaluated) {
                                return hs_lzq26DSfO.hscall();
                            } else {
                                return hs_lzq26DSfO;
                            }
                        default:
                            var hs_wild426DSlr = hs_ds26DSfr;
                            if (hs_ds26DSfr.notEvaluated) {
                                hs_wild426DSlr = hs_ds26DSfr.hscall();
                            }
                            var hs_lzq26DSfB = hs_wild426DSlr.data[1];
                            var hs_wild526DSfJ = hs_lzq26DSfB;
                            if (hs_lzq26DSfB.notEvaluated) {
                                hs_wild526DSfJ = hs_lzq26DSfB.hscall();
                            }
                            switch (hs_wild526DSfJ.tag) {
                            case 1:
                                if (hs_wild326DSfK.notEvaluated) {
                                    return hs_wild326DSfK.hscall();
                                } else {
                                    return hs_wild326DSfK;
                                }
                            default:
                                var hs_tpl26DSlp = hs_p26DSeV;
                                if (hs_p26DSeV.notEvaluated) {
                                    hs_tpl26DSlp = hs_p26DSeV.hscall();
                                }
                                var hs_tpl126DSfH = hs_tpl26DSlp.data[0];
                                var hs_tpl226DSlo = hs_m26DSeY;
                                if (hs_m26DSeY.notEvaluated) {
                                    hs_tpl226DSlo = hs_m26DSeY.hscall();
                                }
                                var hs_tpl326DSfI = hs_tpl226DSlo.data[0];
                                var $res = new $hs.Data(3);
                                $res.data = [hs_tpl126DSfH, hs_tpl326DSfI, hs_wild526DSfJ, hs_wild326DSfK];
                                return $res;
                            }
                        }
                    };
                    var hs_sat26DSlx = new $hs.Thunk();
                    hs_sat26DSlx.evaluateOnce = function () {
                        var hs_wild326DSlu = hs_ds26DSfr;
                        if (hs_ds26DSfr.notEvaluated) {
                            hs_wild326DSlu = hs_ds26DSfr.hscall();
                        }
                        var hs_found26DSfv = hs_wild326DSlu.data[0];
                        if (hs_found26DSfv.notEvaluated) {
                            return hs_found26DSfv.hscall();
                        } else {
                            return hs_found26DSfv;
                        }
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26DSlx, hs_sat26DSlv];
                    return $res;
                }
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [$hs.modules.DataziMaybe.hs_Nothing, hs_wild26DSeB];
                return $res;
            }
        }
    };
    hs_join25srJu.evaluate = function (hs_p126DSfW, hs_t126DSh2, hs_p226DSfY, hs_t226DSh0) {
        var hs_m26DSgU = new $hs.Thunk();
        hs_m26DSgU.evaluateOnce = function () {
            var hs_sat26DSlO = new $hs.Thunk();
            hs_sat26DSlO.evaluateOnce = function () {
                var hs_x026DSg0 = new $hs.Thunk();
                hs_x026DSg0.evaluateOnce = function () {
                    var hs_sat26DSly = new $hs.Thunk();
                    hs_sat26DSly.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord, hs_p226DSfY);
                    };
                    var hs_sat26DSlz = new $hs.Thunk();
                    hs_sat26DSlz.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord, hs_p126DSfW);
                    };
                    return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_sat26DSlz, hs_sat26DSly);
                };
                var hs_x126DSg8 = new $hs.Thunk();
                hs_x126DSg8.evaluateOnce = function () {
                    var hs_sat26DSlB = new $hs.Thunk();
                    hs_sat26DSlB.evaluateOnce = function () {
                        var hs_wild26DSlA = hs_x026DSg0;
                        if (hs_x026DSg0.notEvaluated) {
                            hs_wild26DSlA = hs_x026DSg0.hscall();
                        }
                        var hs_x26DSg4 = hs_wild26DSlA.data[0];
                        var hs_wild126DSg6 = $hs.modules.GHCziBase.hs_shiftRLzh.hscall(hs_x26DSg4, 1);
                        var $res = new $hs.Data(1);
                        $res.data = [hs_wild126DSg6];
                        return $res;
                    };
                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_x026DSg0, hs_sat26DSlB);
                };
                var hs_x226DSgg = new $hs.Thunk();
                hs_x226DSgg.evaluateOnce = function () {
                    var hs_sat26DSlD = new $hs.Thunk();
                    hs_sat26DSlD.evaluateOnce = function () {
                        var hs_wild26DSlC = hs_x126DSg8;
                        if (hs_x126DSg8.notEvaluated) {
                            hs_wild26DSlC = hs_x126DSg8.hscall();
                        }
                        var hs_x26DSgc = hs_wild26DSlC.data[0];
                        var hs_wild126DSge = $hs.modules.GHCziBase.hs_shiftRLzh.hscall(hs_x26DSgc, 2);
                        var $res = new $hs.Data(1);
                        $res.data = [hs_wild126DSge];
                        return $res;
                    };
                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_x126DSg8, hs_sat26DSlD);
                };
                var hs_x326DSgo = new $hs.Thunk();
                hs_x326DSgo.evaluateOnce = function () {
                    var hs_sat26DSlF = new $hs.Thunk();
                    hs_sat26DSlF.evaluateOnce = function () {
                        var hs_wild26DSlE = hs_x226DSgg;
                        if (hs_x226DSgg.notEvaluated) {
                            hs_wild26DSlE = hs_x226DSgg.hscall();
                        }
                        var hs_x26DSgk = hs_wild26DSlE.data[0];
                        var hs_wild126DSgm = $hs.modules.GHCziBase.hs_shiftRLzh.hscall(hs_x26DSgk, 4);
                        var $res = new $hs.Data(1);
                        $res.data = [hs_wild126DSgm];
                        return $res;
                    };
                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_x226DSgg, hs_sat26DSlF);
                };
                var hs_x426DSgw = new $hs.Thunk();
                hs_x426DSgw.evaluateOnce = function () {
                    var hs_sat26DSlH = new $hs.Thunk();
                    hs_sat26DSlH.evaluateOnce = function () {
                        var hs_wild26DSlG = hs_x326DSgo;
                        if (hs_x326DSgo.notEvaluated) {
                            hs_wild26DSlG = hs_x326DSgo.hscall();
                        }
                        var hs_x26DSgs = hs_wild26DSlG.data[0];
                        var hs_wild126DSgu = $hs.modules.GHCziBase.hs_shiftRLzh.hscall(hs_x26DSgs, 8);
                        var $res = new $hs.Data(1);
                        $res.data = [hs_wild126DSgu];
                        return $res;
                    };
                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_x326DSgo, hs_sat26DSlH);
                };
                var hs_x526DSgE = new $hs.Thunk();
                hs_x526DSgE.evaluateOnce = function () {
                    var hs_sat26DSlJ = new $hs.Thunk();
                    hs_sat26DSlJ.evaluateOnce = function () {
                        var hs_wild26DSlI = hs_x426DSgw;
                        if (hs_x426DSgw.notEvaluated) {
                            hs_wild26DSlI = hs_x426DSgw.hscall();
                        }
                        var hs_x26DSgA = hs_wild26DSlI.data[0];
                        var hs_wild126DSgC = $hs.modules.GHCziBase.hs_shiftRLzh.hscall(hs_x26DSgA, 16);
                        var $res = new $hs.Data(1);
                        $res.data = [hs_wild126DSgC];
                        return $res;
                    };
                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_x426DSgw, hs_sat26DSlJ);
                };
                var hs_x626DSgM = new $hs.Thunk();
                hs_x626DSgM.evaluateOnce = function () {
                    var hs_sat26DSlL = new $hs.Thunk();
                    hs_sat26DSlL.evaluateOnce = function () {
                        var hs_wild26DSlK = hs_x526DSgE;
                        if (hs_x526DSgE.notEvaluated) {
                            hs_wild26DSlK = hs_x526DSgE.hscall();
                        }
                        var hs_x26DSgI = hs_wild26DSlK.data[0];
                        var hs_wild126DSgK = $hs.modules.GHCziBase.hs_shiftRLzh.hscall(hs_x26DSgI, 32);
                        var $res = new $hs.Data(1);
                        $res.data = [hs_wild126DSgK];
                        return $res;
                    };
                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_x526DSgE, hs_sat26DSlL);
                };
                var hs_sat26DSlN = new $hs.Thunk();
                hs_sat26DSlN.evaluateOnce = function () {
                    var hs_wild26DSlM = hs_x626DSgM;
                    if (hs_x626DSgM.notEvaluated) {
                        hs_wild26DSlM = hs_x626DSgM.hscall();
                    }
                    var hs_x26DSgP = hs_wild26DSlM.data[0];
                    var hs_wild126DSgR = $hs.modules.GHCziBase.hs_shiftRLzh.hscall(hs_x26DSgP, 1);
                    var $res = new $hs.Data(1);
                    $res.data = [hs_wild126DSgR];
                    return $res;
                };
                return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_x626DSgM, hs_sat26DSlN);
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DSlO);
        };
        var hs_wild26DSlR = hs_zzero25srJy.hscall(hs_p126DSfW, hs_m26DSgU);
        switch (hs_wild26DSlR.tag) {
        case 1:
            var hs_tpl26DSlQ = hs_mask25srJC.hscall(hs_p126DSfW, hs_m26DSgU);
            var hs_tpl126DSh4 = hs_tpl26DSlQ.data[0];
            var hs_tpl226DSlP = hs_m26DSgU;
            if (hs_m26DSgU.notEvaluated) {
                hs_tpl226DSlP = hs_m26DSgU.hscall();
            }
            var hs_tpl326DSh5 = hs_tpl226DSlP.data[0];
            var hs_tpl426DSh6 = hs_t226DSh0;
            if (hs_t226DSh0.notEvaluated) {
                hs_tpl426DSh6 = hs_t226DSh0.hscall();
            }
            var hs_tpl526DSh7 = hs_t126DSh2;
            if (hs_t126DSh2.notEvaluated) {
                hs_tpl526DSh7 = hs_t126DSh2.hscall();
            }
            var $res = new $hs.Data(3);
            $res.data = [hs_tpl126DSh4, hs_tpl326DSh5, hs_tpl426DSh6, hs_tpl526DSh7];
            return $res;
        case 2:
            var hs_tpl26DSlT = hs_mask25srJC.hscall(hs_p126DSfW, hs_m26DSgU);
            var hs_tpl126DShe = hs_tpl26DSlT.data[0];
            var hs_tpl226DSlS = hs_m26DSgU;
            if (hs_m26DSgU.notEvaluated) {
                hs_tpl226DSlS = hs_m26DSgU.hscall();
            }
            var hs_tpl326DShf = hs_tpl226DSlS.data[0];
            var hs_tpl426DShg = hs_t126DSh2;
            if (hs_t126DSh2.notEvaluated) {
                hs_tpl426DShg = hs_t126DSh2.hscall();
            }
            var hs_tpl526DShh = hs_t226DSh0;
            if (hs_t226DSh0.notEvaluated) {
                hs_tpl526DShh = hs_t226DSh0.hscall();
            }
            var $res = new $hs.Data(3);
            $res.data = [hs_tpl126DShe, hs_tpl326DShf, hs_tpl426DShg, hs_tpl526DShh];
            return $res;
        }
    };
    this.hs_insertWith.evaluate = function (hs_f26DShO, hs_k26DSho, hs_x26DShr, hs_t26DShm) {
        var hs_wild26DShI = hs_t26DShm;
        if (hs_t26DShm.notEvaluated) {
            hs_wild26DShI = hs_t26DShm.hscall();
        }
        switch (hs_wild26DShI.tag) {
        case 1:
            var hs_sat26DSlV = new $hs.Thunk();
            hs_sat26DSlV.evaluateOnce = function () {
                var hs_tpl26DSlU = hs_k26DSho;
                if (hs_k26DSho.notEvaluated) {
                    hs_tpl26DSlU = hs_k26DSho.hscall();
                }
                var hs_tpl126DSht = hs_tpl26DSlU.data[0];
                var hs_tpl226DShu = hs_x26DShr;
                if (hs_x26DShr.notEvaluated) {
                    hs_tpl226DShu = hs_x26DShr.hscall();
                }
                var $res = new $hs.Data(2);
                $res.data = [hs_tpl126DSht, hs_tpl226DShu];
                return $res;
            };
            var $res = new $hs.Data(1);
            $res.data = [$hs.modules.DataziMaybe.hs_Nothing, hs_sat26DSlV];
            return $res;
        case 2:
            var hs_rb26DShz = hs_wild26DShI.data[0];
            var hs_y26DShK = hs_wild26DShI.data[1];
            var hs_ky26DShA = new $hs.Data(1);
            hs_ky26DShA.data = [hs_rb26DShz];
            var hs_wild126DSlX = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_k26DSho, hs_ky26DShA);
            switch (hs_wild126DSlX.tag) {
            case 1:
                var hs_sat26DSlZ = new $hs.Thunk();
                hs_sat26DSlZ.evaluateOnce = function () {
                    var hs_sat26DSlY = new $hs.Thunk();
                    hs_sat26DSlY.evaluateOnce = function () {
                        var hs_tpl26DSlW = hs_k26DSho;
                        if (hs_k26DSho.notEvaluated) {
                            hs_tpl26DSlW = hs_k26DSho.hscall();
                        }
                        var hs_tpl126DShF = hs_tpl26DSlW.data[0];
                        var hs_tpl226DShG = hs_x26DShr;
                        if (hs_x26DShr.notEvaluated) {
                            hs_tpl226DShG = hs_x26DShr.hscall();
                        }
                        var $res = new $hs.Data(2);
                        $res.data = [hs_tpl126DShF, hs_tpl226DShG];
                        return $res;
                    };
                    return hs_join25srJu.hscall(hs_k26DSho, hs_sat26DSlY, hs_ky26DShA, hs_wild26DShI);
                };
                var $res = new $hs.Data(1);
                $res.data = [$hs.modules.DataziMaybe.hs_Nothing, hs_sat26DSlZ];
                return $res;
            case 2:
                var hs_sat26DSm1 = new $hs.Thunk();
                hs_sat26DSm1.evaluateOnce = function () {
                    var hs_tpl26DSm0 = hs_k26DSho;
                    if (hs_k26DSho.notEvaluated) {
                        hs_tpl26DSm0 = hs_k26DSho.hscall();
                    }
                    var hs_tpl126DShQ = hs_tpl26DSm0.data[0];
                    var hs_tpl226DShR = hs_f26DShO.hscall(hs_x26DShr, hs_y26DShK);
                    var $res = new $hs.Data(2);
                    $res.data = [hs_tpl126DShQ, hs_tpl226DShR];
                    return $res;
                };
                var hs_sat26DSm2 = new $hs.Data(2);
                hs_sat26DSm2.data = [hs_y26DShK];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26DSm2, hs_sat26DSm1];
                return $res;
            }
        case 3:
            var hs_rb26DShY = hs_wild26DShI.data[0];
            var hs_rb126DSi1 = hs_wild26DShI.data[1];
            var hs_l26DSip = hs_wild26DShI.data[2];
            var hs_r26DSi7 = hs_wild26DShI.data[3];
            var hs_p26DShZ = new $hs.Data(1);
            hs_p26DShZ.data = [hs_rb26DShY];
            var hs_m26DSi2 = new $hs.Data(1);
            hs_m26DSi2.data = [hs_rb126DSi1];
            var hs_sat26DSm5 = new $hs.Thunk();
            hs_sat26DSm5.evaluateOnce = function () {
                return hs_mask25srJC.hscall(hs_k26DSho, hs_m26DSi2);
            };
            var hs_wild126DSm4 = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DSm5, hs_p26DShZ);
            switch (hs_wild126DSm4.tag) {
            case 1:
                var hs_wild226DSm3 = hs_zzero25srJy.hscall(hs_k26DSho, hs_m26DSi2);
                switch (hs_wild226DSm3.tag) {
                case 1:
                    var hs_ds26DSi8 = new $hs.Thunk();
                    hs_ds26DSi8.evaluateOnce = function () {
                        return $hs.modules.SystemziEventziIntMap.hs_insertWith.hscall(hs_f26DShO, hs_k26DSho, hs_x26DShr, hs_r26DSi7);
                    };
                    var hs_sat26DSmb = new $hs.Thunk();
                    hs_sat26DSmb.evaluateOnce = function () {
                        var hs_tpl26DSm9 = hs_p26DShZ;
                        if (hs_p26DShZ.notEvaluated) {
                            hs_tpl26DSm9 = hs_p26DShZ.hscall();
                        }
                        var hs_tpl126DSin = hs_tpl26DSm9.data[0];
                        var hs_tpl226DSm8 = hs_m26DSi2;
                        if (hs_m26DSi2.notEvaluated) {
                            hs_tpl226DSm8 = hs_m26DSi2.hscall();
                        }
                        var hs_tpl326DSio = hs_tpl226DSm8.data[0];
                        var hs_wild326DSm7 = hs_ds26DSi8;
                        if (hs_ds26DSi8.notEvaluated) {
                            hs_wild326DSm7 = hs_ds26DSi8.hscall();
                        }
                        var hs_rzq26DSil = hs_wild326DSm7.data[1];
                        var hs_tpl426DSiq = hs_rzq26DSil;
                        if (hs_rzq26DSil.notEvaluated) {
                            hs_tpl426DSiq = hs_rzq26DSil.hscall();
                        }
                        var $res = new $hs.Data(3);
                        $res.data = [hs_tpl126DSin, hs_tpl326DSio, hs_l26DSip, hs_tpl426DSiq];
                        return $res;
                    };
                    var hs_sat26DSmd = new $hs.Thunk();
                    hs_sat26DSmd.evaluateOnce = function () {
                        var hs_wild326DSma = hs_ds26DSi8;
                        if (hs_ds26DSi8.notEvaluated) {
                            hs_wild326DSma = hs_ds26DSi8.hscall();
                        }
                        var hs_found26DSic = hs_wild326DSma.data[0];
                        if (hs_found26DSic.notEvaluated) {
                            return hs_found26DSic.hscall();
                        } else {
                            return hs_found26DSic;
                        }
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26DSmd, hs_sat26DSmb];
                    return $res;
                case 2:
                    var hs_ds26DSit = new $hs.Thunk();
                    hs_ds26DSit.evaluateOnce = function () {
                        return $hs.modules.SystemziEventziIntMap.hs_insertWith.hscall(hs_f26DShO, hs_k26DSho, hs_x26DShr, hs_l26DSip);
                    };
                    var hs_sat26DSmj = new $hs.Thunk();
                    hs_sat26DSmj.evaluateOnce = function () {
                        var hs_tpl26DSmh = hs_p26DShZ;
                        if (hs_p26DShZ.notEvaluated) {
                            hs_tpl26DSmh = hs_p26DShZ.hscall();
                        }
                        var hs_tpl126DSiI = hs_tpl26DSmh.data[0];
                        var hs_tpl226DSmg = hs_m26DSi2;
                        if (hs_m26DSi2.notEvaluated) {
                            hs_tpl226DSmg = hs_m26DSi2.hscall();
                        }
                        var hs_tpl326DSiJ = hs_tpl226DSmg.data[0];
                        var hs_wild326DSmf = hs_ds26DSit;
                        if (hs_ds26DSit.notEvaluated) {
                            hs_wild326DSmf = hs_ds26DSit.hscall();
                        }
                        var hs_lzq26DSiG = hs_wild326DSmf.data[1];
                        var hs_tpl426DSiK = hs_lzq26DSiG;
                        if (hs_lzq26DSiG.notEvaluated) {
                            hs_tpl426DSiK = hs_lzq26DSiG.hscall();
                        }
                        var $res = new $hs.Data(3);
                        $res.data = [hs_tpl126DSiI, hs_tpl326DSiJ, hs_tpl426DSiK, hs_r26DSi7];
                        return $res;
                    };
                    var hs_sat26DSml = new $hs.Thunk();
                    hs_sat26DSml.evaluateOnce = function () {
                        var hs_wild326DSmi = hs_ds26DSit;
                        if (hs_ds26DSit.notEvaluated) {
                            hs_wild326DSmi = hs_ds26DSit.hscall();
                        }
                        var hs_found26DSix = hs_wild326DSmi.data[0];
                        if (hs_found26DSix.notEvaluated) {
                            return hs_found26DSix.hscall();
                        } else {
                            return hs_found26DSix;
                        }
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26DSml, hs_sat26DSmj];
                    return $res;
                }
            case 2:
                var hs_sat26DSmo = new $hs.Thunk();
                hs_sat26DSmo.evaluateOnce = function () {
                    var hs_sat26DSmn = new $hs.Thunk();
                    hs_sat26DSmn.evaluateOnce = function () {
                        var hs_tpl26DSmm = hs_k26DSho;
                        if (hs_k26DSho.notEvaluated) {
                            hs_tpl26DSmm = hs_k26DSho.hscall();
                        }
                        var hs_tpl126DSiP = hs_tpl26DSmm.data[0];
                        var hs_tpl226DSiQ = hs_x26DShr;
                        if (hs_x26DShr.notEvaluated) {
                            hs_tpl226DSiQ = hs_x26DShr.hscall();
                        }
                        var $res = new $hs.Data(2);
                        $res.data = [hs_tpl126DSiP, hs_tpl226DSiQ];
                        return $res;
                    };
                    return hs_join25srJu.hscall(hs_k26DSho, hs_sat26DSmn, hs_p26DShZ, hs_wild26DShI);
                };
                var $res = new $hs.Data(1);
                $res.data = [$hs.modules.DataziMaybe.hs_Nothing, hs_sat26DSmo];
                return $res;
            }
        }
    };
    hs_lookupN25srJ4.evaluate = function (hs_k26DSiZ, hs_t26DSiV) {
        var hs_wild26DSmp = hs_t26DSiV;
        if (hs_t26DSiV.notEvaluated) {
            hs_wild26DSmp = hs_t26DSiV.hscall();
        }
        switch (hs_wild26DSmp.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_rb26DSj0 = hs_wild26DSmp.data[0];
            var hs_x26DSj4 = hs_wild26DSmp.data[1];
            var hs_sat26DSms = new $hs.Thunk();
            hs_sat26DSms.evaluateOnce = function () {
                var hs_sat26DSmq = new $hs.Data(1);
                hs_sat26DSmq.data = [hs_rb26DSj0];
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord, hs_sat26DSmq);
            };
            var hs_wild126DSmr = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord, hs_k26DSiZ, hs_sat26DSms);
            switch (hs_wild126DSmr.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [hs_x26DSj4];
                return $res;
            }
        case 3:
            var hs_rb126DSj9 = hs_wild26DSmp.data[1];
            var hs_l26DSjg = hs_wild26DSmp.data[2];
            var hs_r26DSjf = hs_wild26DSmp.data[3];
            var hs_sat26DSmu = new $hs.Data(1);
            hs_sat26DSmu.data = [0];
            var hs_sat26DSmy = new $hs.Thunk();
            hs_sat26DSmy.evaluateOnce = function () {
                var hs_sat26DSmw = new $hs.Thunk();
                hs_sat26DSmw.evaluateOnce = function () {
                    var hs_sat26DSmv = new $hs.Data(1);
                    hs_sat26DSmv.data = [hs_rb126DSj9];
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord, hs_sat26DSmv);
                };
                return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord, hs_k26DSiZ, hs_sat26DSmw);
            };
            var hs_wild126DSmx = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord, hs_sat26DSmy, hs_sat26DSmu);
            switch (hs_wild126DSmx.tag) {
            case 1:
                return hs_lookupN25srJ4.hscall(hs_k26DSiZ, hs_r26DSjf);
            case 2:
                return hs_lookupN25srJ4.hscall(hs_k26DSiZ, hs_l26DSjg);
            }
        }
    };
    this.hs_lookup.evaluate = function (hs_k26DSjj, hs_t26DSjn) {
        var hs_nk26DSjm = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord, hs_k26DSjj);
        return hs_lookupN25srJ4.hscall(hs_nk26DSjm, hs_t26DSjn);
    };
    this.hs_member.evaluate = function (hs_k26DSjq, hs_m26DSju) {
        var hs_nk26DSjt = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord, hs_k26DSjq);
        var hs_wild26DSmA = hs_lookupN25srJ4.hscall(hs_nk26DSjt, hs_m26DSju);
        switch (hs_wild26DSmA.tag) {
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

$hs.modules.GHCziNum = new $hs.Module();
$hs.modules.GHCziNum.dependencies = ["GHC.Types", "GHC.Integer", "GHC.Base", "GHC.Show", "GHC.Err", "GHC.Classes"];
$hs.modules.GHCziNum.initBeforeDependencies = function () {
    this.hs_zdp1Num = new $hs.Func(1);
    this.hs_zdp2Num = new $hs.Func(1);
    this.hs_zp = new $hs.Func(1);
    this.hs_zt = new $hs.Func(1);
    this.hs_zm = new $hs.Func(1);
    this.hs_negate = new $hs.Func(1);
    this.hs_abs = new $hs.Func(1);
    this.hs_signum = new $hs.Func(1);
    this.hs_fromInteger = new $hs.Func(1);
    this.hs_zddmnegate = new $hs.Func(2);
    this.hs_zddmzm = new $hs.Func(3);
    this.hs_divModInt = new $hs.Func(2);
    this.hs_quotRemInt = new $hs.Func(2);
    this.hs_subtract = new $hs.Func(3);
    this.hs_zdfNumInt = new $hs.Data(1);
    this.hs_zdfShowInteger = new $hs.Data(1);
    this.hs_zdfNumInteger = new $hs.Data(1);
    this.hs_integerToString = new $hs.Func(2);
    this.hs_upzufb = new $hs.Func(5);
    this.hs_dnzufb = new $hs.Func(5);
    this.hs_enumDeltaInteger = new $hs.Func(2);
    this.hs_enumDeltaIntegerFB = new $hs.Func(3);
    this.hs_upzulist = new $hs.Func(3);
    this.hs_dnzulist = new $hs.Func(3);
    this.hs_enumDeltaToInteger = new $hs.Func(3);
    this.hs_enumDeltaToIntegerFB = new $hs.Func(5);
    this.hs_zdfEnumInteger = new $hs.Data(1);
    this.hs_DZCNum = new $hs.Func(9);
    this.hs_zdp1Num.notEvaluated = true;
    this.hs_zdp1Num.evaluate = function (hs_tpl26D9M6) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_tpl26D9M6);
    };
    this.hs_zdp2Num.notEvaluated = true;
    this.hs_zdp2Num.evaluate = function (hs_tpl26D9Mj) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_tpl26D9Mj);
    };
    this.hs_zp.notEvaluated = true;
    this.hs_zp.evaluate = function (hs_tpl26D9Mw) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_tpl26D9Mw);
    };
    this.hs_zt.notEvaluated = true;
    this.hs_zt.evaluate = function (hs_tpl26D9MJ) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_tpl26D9MJ);
    };
    this.hs_zm.notEvaluated = true;
    this.hs_zm.evaluate = function (hs_tpl26D9MW) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_tpl26D9MW);
    };
    this.hs_negate.notEvaluated = true;
    this.hs_negate.evaluate = function (hs_tpl26D9N9) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_tpl26D9N9);
    };
    this.hs_abs.notEvaluated = true;
    this.hs_abs.evaluate = function (hs_tpl26D9Nm) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_tpl26D9Nm);
    };
    this.hs_signum.notEvaluated = true;
    this.hs_signum.evaluate = function (hs_tpl26D9Nz) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_tpl26D9Nz);
    };
    this.hs_fromInteger.notEvaluated = true;
    this.hs_fromInteger.evaluate = function (hs_tpl26D9NM) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_tpl26D9NM);
    };
    this.hs_zddmnegate.notEvaluated = true;
    this.hs_zddmnegate.evaluate = function (hs_zddNum26D9O0, hs_x26D9O3) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_zddNum26D9O0, hs_x26D9O3);
    };
    this.hs_zddmzm.notEvaluated = true;
    this.hs_zddmzm.evaluate = function (hs_zddNum26D9O7, hs_x26D9O8, hs_y26D9O9) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_zddNum26D9O7, hs_x26D9O8, hs_y26D9O9);
    };
    this.hs_divModInt.notEvaluated = true;
    this.hs_divModInt.evaluate = function (hs_x26D9Od, hs_y26D9Og) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_x26D9Od, hs_y26D9Og);
    };
    this.hs_quotRemInt.notEvaluated = true;
    this.hs_quotRemInt.evaluate = function (hs_a26D9Op, hs_b26D9Os) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_a26D9Op, hs_b26D9Os);
    };
    this.hs_subtract.notEvaluated = true;
    this.hs_subtract.evaluate = function (hs_zddNum26D9OC, hs_eta26D9OE, hs_eta126D9OD) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_zddNum26D9OC, hs_eta26D9OE, hs_eta126D9OD);
    };
    this.hs_zdfNumInt.notEvaluated = true;
    this.hs_zdfNumInt.evaluate = function () {
        $hs.modules.GHCziNum.loadDependencies();
        return this;
    };
    this.hs_zdfShowInteger.notEvaluated = true;
    this.hs_zdfShowInteger.evaluate = function () {
        $hs.modules.GHCziNum.loadDependencies();
        return this;
    };
    this.hs_zdfNumInteger.notEvaluated = true;
    this.hs_zdfNumInteger.evaluate = function () {
        $hs.modules.GHCziNum.loadDependencies();
        return this;
    };
    this.hs_integerToString.notEvaluated = true;
    this.hs_integerToString.evaluate = function (hs_n026D9SH, hs_cs026D9SK) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_n026D9SH, hs_cs026D9SK);
    };
    this.hs_upzufb.notEvaluated = true;
    this.hs_upzufb.evaluate = function (hs_c26D9Tb, hs_n26D9Td, hs_x026D9Te, hs_delta26D9T8, hs_lim26D9T6) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_c26D9Tb, hs_n26D9Td, hs_x026D9Te, hs_delta26D9T8, hs_lim26D9T6);
    };
    this.hs_dnzufb.notEvaluated = true;
    this.hs_dnzufb.evaluate = function (hs_c26D9Ts, hs_n26D9Tu, hs_x026D9Tv, hs_delta26D9Tp, hs_lim26D9Tn) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_c26D9Ts, hs_n26D9Tu, hs_x026D9Tv, hs_delta26D9Tp, hs_lim26D9Tn);
    };
    this.hs_enumDeltaInteger.notEvaluated = true;
    this.hs_enumDeltaInteger.evaluate = function (hs_x26D9Ty, hs_d26D9TB) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_x26D9Ty, hs_d26D9TB);
    };
    this.hs_enumDeltaIntegerFB.notEvaluated = true;
    this.hs_enumDeltaIntegerFB.evaluate = function (hs_c26D9TK, hs_x26D9TH, hs_d26D9TL) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_c26D9TK, hs_x26D9TH, hs_d26D9TL);
    };
    this.hs_upzulist.notEvaluated = true;
    this.hs_upzulist.evaluate = function (hs_x026D9Uc, hs_delta26D9U8, hs_lim26D9U6) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_x026D9Uc, hs_delta26D9U8, hs_lim26D9U6);
    };
    this.hs_dnzulist.notEvaluated = true;
    this.hs_dnzulist.evaluate = function (hs_x026D9Up, hs_delta26D9Ul, hs_lim26D9Uj) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_x026D9Up, hs_delta26D9Ul, hs_lim26D9Uj);
    };
    this.hs_enumDeltaToInteger.notEvaluated = true;
    this.hs_enumDeltaToInteger.evaluate = function (hs_x26D9Uw, hs_delta26D9Ut, hs_lim26D9Ux) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_x26D9Uw, hs_delta26D9Ut, hs_lim26D9Ux);
    };
    this.hs_enumDeltaToIntegerFB.notEvaluated = true;
    this.hs_enumDeltaToIntegerFB.evaluate = function (hs_c26D9UG, hs_n26D9UH, hs_x26D9UI, hs_delta26D9UD, hs_lim26D9UJ) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_c26D9UG, hs_n26D9UH, hs_x26D9UI, hs_delta26D9UD, hs_lim26D9UJ);
    };
    this.hs_zdfEnumInteger.notEvaluated = true;
    this.hs_zdfEnumInteger.evaluate = function () {
        $hs.modules.GHCziNum.loadDependencies();
        return this;
    };
    this.hs_DZCNum.notEvaluated = true;
    this.hs_DZCNum.evaluate = function (hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziNum.initAfterDependencies = function () {
    this.hs_zdp1Num.notEvaluated = false;
    this.hs_zdp2Num.notEvaluated = false;
    this.hs_zp.notEvaluated = false;
    this.hs_zt.notEvaluated = false;
    this.hs_zm.notEvaluated = false;
    this.hs_negate.notEvaluated = false;
    this.hs_abs.notEvaluated = false;
    this.hs_signum.notEvaluated = false;
    this.hs_fromInteger.notEvaluated = false;
    this.hs_zddmnegate.notEvaluated = false;
    this.hs_zddmzm.notEvaluated = false;
    this.hs_divModInt.notEvaluated = false;
    this.hs_quotRemInt.notEvaluated = false;
    this.hs_subtract.notEvaluated = false;
    this.hs_zdfNumInt.notEvaluated = false;
    this.hs_zdfNumInt.evaluate = function () {
        return this;
    };
    this.hs_zdfShowInteger.notEvaluated = false;
    this.hs_zdfShowInteger.evaluate = function () {
        return this;
    };
    this.hs_zdfNumInteger.notEvaluated = false;
    this.hs_zdfNumInteger.evaluate = function () {
        return this;
    };
    this.hs_integerToString.notEvaluated = false;
    this.hs_upzufb.notEvaluated = false;
    this.hs_dnzufb.notEvaluated = false;
    this.hs_enumDeltaInteger.notEvaluated = false;
    this.hs_enumDeltaIntegerFB.notEvaluated = false;
    this.hs_upzulist.notEvaluated = false;
    this.hs_dnzulist.notEvaluated = false;
    this.hs_enumDeltaToInteger.notEvaluated = false;
    this.hs_enumDeltaToIntegerFB.notEvaluated = false;
    this.hs_zdfEnumInteger.notEvaluated = false;
    this.hs_zdfEnumInteger.evaluate = function () {
        return this;
    };
    this.hs_DZCNum.notEvaluated = false;
    var hs_zdcfromInteger25uLiq = new $hs.Func(1);
    var hs_zdcsignum25uLiw = new $hs.Func(1);
    var hs_zdcabs25uLiF = new $hs.Func(1);
    var hs_zdcfromInteger125uLiL = new $hs.Func(1);
    var hs_zdcfromEnum25uLiP = new $hs.Func(1);
    var hs_zdctoEnum25uLiV = new $hs.Func(1);
    var hs_sat26D9WC = new $hs.Thunk();
    var hs_zdcshowsPrec25uLj2 = new $hs.Func(3);
    var hs_zdcshowList25uLj4 = new $hs.Thunk();
    var hs_zdcshow25uLj6 = new $hs.Thunk();
    var hs_zdcsucc25uLmz = new $hs.Func(1);
    var hs_zdcpred25uLmE = new $hs.Func(1);
    var hs_zdcenumFrom25uLnz = new $hs.Func(1);
    var hs_zdcenumFromThen25uLnE = new $hs.Func(2);
    var hs_zdcenumFromTo25uLov = new $hs.Func(2);
    var hs_zdcenumFromThenTo25uLoC = new $hs.Func(3);
    this.hs_zdp1Num.evaluate = function (hs_tpl26D9M6) {
        var hs_tpl26D9V0 = hs_tpl26D9M6;
        if (hs_tpl26D9M6.notEvaluated) {
            hs_tpl26D9V0 = hs_tpl26D9M6.hscall();
        }
        var hs_tpl26D9Mh = hs_tpl26D9V0.data[0];
        if (hs_tpl26D9Mh.notEvaluated) {
            return hs_tpl26D9Mh.hscall();
        } else {
            return hs_tpl26D9Mh;
        }
    };
    this.hs_zdp2Num.evaluate = function (hs_tpl26D9Mj) {
        var hs_tpl26D9Va = hs_tpl26D9Mj;
        if (hs_tpl26D9Mj.notEvaluated) {
            hs_tpl26D9Va = hs_tpl26D9Mj.hscall();
        }
        var hs_tpl26D9Mu = hs_tpl26D9Va.data[1];
        if (hs_tpl26D9Mu.notEvaluated) {
            return hs_tpl26D9Mu.hscall();
        } else {
            return hs_tpl26D9Mu;
        }
    };
    this.hs_zp.evaluate = function (hs_tpl26D9Mw) {
        var hs_tpl26D9Vj = hs_tpl26D9Mw;
        if (hs_tpl26D9Mw.notEvaluated) {
            hs_tpl26D9Vj = hs_tpl26D9Mw.hscall();
        }
        var hs_tpl26D9MH = hs_tpl26D9Vj.data[2];
        if (hs_tpl26D9MH.notEvaluated) {
            return hs_tpl26D9MH.hscall();
        } else {
            return hs_tpl26D9MH;
        }
    };
    this.hs_zt.evaluate = function (hs_tpl26D9MJ) {
        var hs_tpl26D9Vs = hs_tpl26D9MJ;
        if (hs_tpl26D9MJ.notEvaluated) {
            hs_tpl26D9Vs = hs_tpl26D9MJ.hscall();
        }
        var hs_tpl26D9MU = hs_tpl26D9Vs.data[3];
        if (hs_tpl26D9MU.notEvaluated) {
            return hs_tpl26D9MU.hscall();
        } else {
            return hs_tpl26D9MU;
        }
    };
    this.hs_zm.evaluate = function (hs_tpl26D9MW) {
        var hs_tpl26D9VB = hs_tpl26D9MW;
        if (hs_tpl26D9MW.notEvaluated) {
            hs_tpl26D9VB = hs_tpl26D9MW.hscall();
        }
        var hs_tpl26D9N7 = hs_tpl26D9VB.data[4];
        if (hs_tpl26D9N7.notEvaluated) {
            return hs_tpl26D9N7.hscall();
        } else {
            return hs_tpl26D9N7;
        }
    };
    this.hs_negate.evaluate = function (hs_tpl26D9N9) {
        var hs_tpl26D9VK = hs_tpl26D9N9;
        if (hs_tpl26D9N9.notEvaluated) {
            hs_tpl26D9VK = hs_tpl26D9N9.hscall();
        }
        var hs_tpl26D9Nk = hs_tpl26D9VK.data[5];
        if (hs_tpl26D9Nk.notEvaluated) {
            return hs_tpl26D9Nk.hscall();
        } else {
            return hs_tpl26D9Nk;
        }
    };
    this.hs_abs.evaluate = function (hs_tpl26D9Nm) {
        var hs_tpl26D9VT = hs_tpl26D9Nm;
        if (hs_tpl26D9Nm.notEvaluated) {
            hs_tpl26D9VT = hs_tpl26D9Nm.hscall();
        }
        var hs_tpl26D9Nx = hs_tpl26D9VT.data[6];
        if (hs_tpl26D9Nx.notEvaluated) {
            return hs_tpl26D9Nx.hscall();
        } else {
            return hs_tpl26D9Nx;
        }
    };
    this.hs_signum.evaluate = function (hs_tpl26D9Nz) {
        var hs_tpl26D9W2 = hs_tpl26D9Nz;
        if (hs_tpl26D9Nz.notEvaluated) {
            hs_tpl26D9W2 = hs_tpl26D9Nz.hscall();
        }
        var hs_tpl26D9NK = hs_tpl26D9W2.data[7];
        if (hs_tpl26D9NK.notEvaluated) {
            return hs_tpl26D9NK.hscall();
        } else {
            return hs_tpl26D9NK;
        }
    };
    this.hs_fromInteger.evaluate = function (hs_tpl26D9NM) {
        var hs_tpl26D9Wb = hs_tpl26D9NM;
        if (hs_tpl26D9NM.notEvaluated) {
            hs_tpl26D9Wb = hs_tpl26D9NM.hscall();
        }
        var hs_tpl26D9NX = hs_tpl26D9Wb.data[8];
        if (hs_tpl26D9NX.notEvaluated) {
            return hs_tpl26D9NX.hscall();
        } else {
            return hs_tpl26D9NX;
        }
    };
    this.hs_zddmnegate.evaluate = function (hs_zddNum26D9O0, hs_x26D9O3) {
        var hs_sat26D9Wk = new $hs.Thunk();
        hs_sat26D9Wk.evaluateOnce = function () {
            var hs_sat26D9Wj = new $hs.Thunk();
            hs_sat26D9Wj.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26D9O0, hs_sat26D9Wj);
        };
        return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum26D9O0, hs_sat26D9Wk, hs_x26D9O3);
    };
    this.hs_zddmzm.evaluate = function (hs_zddNum26D9O7, hs_x26D9O8, hs_y26D9O9) {
        var hs_sat26D9Wl = new $hs.Thunk();
        hs_sat26D9Wl.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26D9O7, hs_y26D9O9);
        };
        return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum26D9O7, hs_x26D9O8, hs_sat26D9Wl);
    };
    this.hs_divModInt.evaluate = function (hs_x26D9Od, hs_y26D9Og) {
        var hs_wild26D9Oj = hs_x26D9Od;
        if (hs_x26D9Od.notEvaluated) {
            hs_wild26D9Oj = hs_x26D9Od.hscall();
        }
        var hs_wild126D9Ok = hs_y26D9Og;
        if (hs_y26D9Og.notEvaluated) {
            hs_wild126D9Ok = hs_y26D9Og.hscall();
        }
        var hs_sat26D9Wo = new $hs.Thunk();
        hs_sat26D9Wo.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_modInt.hscall(hs_wild26D9Oj, hs_wild126D9Ok);
        };
        var hs_sat26D9Wp = new $hs.Thunk();
        hs_sat26D9Wp.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_divInt.hscall(hs_wild26D9Oj, hs_wild126D9Ok);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26D9Wp, hs_sat26D9Wo];
        return $res;
    };
    this.hs_quotRemInt.evaluate = function (hs_a26D9Op, hs_b26D9Os) {
        var hs_wild26D9Ov = hs_a26D9Op;
        if (hs_a26D9Op.notEvaluated) {
            hs_wild26D9Ov = hs_a26D9Op.hscall();
        }
        var hs_wild126D9Ow = hs_b26D9Os;
        if (hs_b26D9Os.notEvaluated) {
            hs_wild126D9Ow = hs_b26D9Os.hscall();
        }
        var hs_sat26D9Ws = new $hs.Thunk();
        hs_sat26D9Ws.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_remInt.hscall(hs_wild26D9Ov, hs_wild126D9Ow);
        };
        var hs_sat26D9Wt = new $hs.Thunk();
        hs_sat26D9Wt.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_quotInt.hscall(hs_wild26D9Ov, hs_wild126D9Ow);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26D9Wt, hs_sat26D9Ws];
        return $res;
    };
    this.hs_subtract.evaluate = function (hs_zddNum26D9OC, hs_eta26D9OE, hs_eta126D9OD) {
        return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum26D9OC, hs_eta126D9OD, hs_eta26D9OE);
    };
    hs_zdcfromInteger25uLiq.evaluate = function (hs_eta26D9OI) {
        var hs_wild26D9OK = $hs.modules.GHCziInteger.hs_toIntzh.hscall(hs_eta26D9OI);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild26D9OK];
        return $res;
    };
    hs_zdcsignum25uLiw.evaluate = function (hs_n26D9OO) {
        var hs_sat26D9Wv = new $hs.Data(1);
        hs_sat26D9Wv.data = [0];
        var hs_wild26D9Wu = $hs.modules.GHCziBase.hs_ltInt.hscall(hs_n26D9OO, hs_sat26D9Wv);
        switch (hs_wild26D9Wu.tag) {
        case 1:
            var hs_sat26D9Wx = new $hs.Data(1);
            hs_sat26D9Wx.data = [0];
            var hs_wild126D9Ww = $hs.modules.GHCziBase.hs_eqInt.hscall(hs_n26D9OO, hs_sat26D9Wx);
            switch (hs_wild126D9Ww.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [1];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [0];
                return $res;
            }
        case 2:
            var hs_sat26D9Wy = new $hs.Data(1);
            hs_sat26D9Wy.data = [1];
            return $hs.modules.GHCziBase.hs_negateInt.hscall(hs_sat26D9Wy);
        }
    };
    hs_zdcabs25uLiF.evaluate = function (hs_n26D9OX) {
        var hs_sat26D9WA = new $hs.Data(1);
        hs_sat26D9WA.data = [0];
        var hs_wild26D9Wz = $hs.modules.GHCziBase.hs_geInt.hscall(hs_n26D9OX, hs_sat26D9WA);
        switch (hs_wild26D9Wz.tag) {
        case 1:
            return $hs.modules.GHCziBase.hs_negateInt.hscall(hs_n26D9OX);
        case 2:
            if (hs_n26D9OX.notEvaluated) {
                return hs_n26D9OX.hscall();
            } else {
                return hs_n26D9OX;
            }
        }
    };
    this.hs_zdfNumInt.data = [$hs.modules.GHCziBase.hs_zdfEqInt, $hs.modules.GHCziShow.hs_zdfShowInt, $hs.modules.GHCziBase.hs_plusInt, $hs.modules.GHCziBase.hs_timesInt, $hs.modules.GHCziBase.hs_minusInt, $hs.modules.GHCziBase.hs_negateInt, hs_zdcabs25uLiF, hs_zdcsignum25uLiw, hs_zdcfromInteger25uLiq];
    hs_zdcfromInteger125uLiL.evaluate = function (hs_x26D9P3) {
        if (hs_x26D9P3.notEvaluated) {
            return hs_x26D9P3.hscall();
        } else {
            return hs_x26D9P3;
        }
    };
    hs_zdcfromEnum25uLiP.evaluate = function (hs_n26D9P7) {
        var hs_wild26D9P9 = $hs.modules.GHCziInteger.hs_toIntzh.hscall(hs_n26D9P7);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild26D9P9];
        return $res;
    };
    hs_zdctoEnum25uLiV.evaluate = function (hs_ds26D9Pd) {
        var hs_wild26D9WB = hs_ds26D9Pd;
        if (hs_ds26D9Pd.notEvaluated) {
            hs_wild26D9WB = hs_ds26D9Pd.hscall();
        }
        var hs_n26D9Pg = hs_wild26D9WB.data[0];
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_n26D9Pg);
    };
    hs_sat26D9WC.evaluateOnce = function () {
        var hs_sat26D9WD = new $hs.Data(1);
        hs_sat26D9WD.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziNum.hs_zdfShowInteger, hs_sat26D9WD);
    };
    hs_zdcshowsPrec25uLj2.evaluate = function (hs_p26D9Pq, hs_n26D9Pt, hs_r26D9Px) {
        var hs_sat26D9WF = new $hs.Thunk();
        hs_sat26D9WF.evaluateOnce = function () {
            var hs_sat26D9WE = new $hs.Thunk();
            hs_sat26D9WE.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26D9Pt, hs_sat26D9WE);
        };
        var hs_sat26D9WI = new $hs.Thunk();
        hs_sat26D9WI.evaluateOnce = function () {
            var hs_sat26D9WG = new $hs.Data(1);
            hs_sat26D9WG.data = [6];
            return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_p26D9Pq, hs_sat26D9WG);
        };
        var hs_wild26D9WH = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D9WI, hs_sat26D9WF);
        switch (hs_wild26D9WH.tag) {
        case 1:
            return $hs.modules.GHCziNum.hs_integerToString.hscall(hs_n26D9Pt, hs_r26D9Px);
        case 2:
            var hs_sat26D9WL = new $hs.Thunk();
            hs_sat26D9WL.evaluateOnce = function () {
                var hs_sat26D9WJ = new $hs.Data(1);
                hs_sat26D9WJ.data = [")"];
                var hs_sat26D9WK = new $hs.Data(2);
                hs_sat26D9WK.data = [hs_sat26D9WJ, hs_r26D9Px];
                return $hs.modules.GHCziNum.hs_integerToString.hscall(hs_n26D9Pt, hs_sat26D9WK);
            };
            var hs_sat26D9WM = new $hs.Data(1);
            hs_sat26D9WM.data = ["("];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26D9WM, hs_sat26D9WL];
            return $res;
        }
    };
    this.hs_zdfShowInteger.data = [hs_zdcshowsPrec25uLj2, hs_zdcshow25uLj6, hs_zdcshowList25uLj4];
    hs_zdcshowList25uLj4.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26D9WC);
    };
    hs_zdcshow25uLj6.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziNum.hs_zdfShowInteger);
    };
    this.hs_zdfNumInteger.data = [$hs.modules.GHCziClasses.hs_zdfEqInteger, $hs.modules.GHCziNum.hs_zdfShowInteger, $hs.modules.GHCziInteger.hs_plusInteger, $hs.modules.GHCziInteger.hs_timesInteger, $hs.modules.GHCziInteger.hs_minusInteger, $hs.modules.GHCziInteger.hs_negateInteger, $hs.modules.GHCziInteger.hs_absInteger, $hs.modules.GHCziInteger.hs_signumInteger, hs_zdcfromInteger125uLiL];
    this.hs_integerToString.evaluate = function (hs_n026D9SH, hs_cs026D9SK) {
        var hs_jblockzq26D9Q8 = new $hs.Func(3);
        hs_jblockzq26D9Q8.evaluate = function (hs_d26D9PU, hs_n26D9PL, hs_cs26D9Qg) {
            var hs_ds26D9PT = new $hs.Thunk();
            hs_ds26D9PT.evaluateOnce = function () {
                var hs_wild26D9PQ = hs_n26D9PL;
                if (hs_n26D9PL.notEvaluated) {
                    hs_wild26D9PQ = hs_n26D9PL.hscall();
                }
                var hs_wild126D9PP = new $hs.Data(1);
                hs_wild126D9PP.data = [10];
                var hs_sat26D9WO = new $hs.Thunk();
                hs_sat26D9WO.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_remInt.hscall(hs_wild26D9PQ, hs_wild126D9PP);
                };
                var hs_sat26D9WP = new $hs.Thunk();
                hs_sat26D9WP.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_quotInt.hscall(hs_wild26D9PQ, hs_wild126D9PP);
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26D9WP, hs_sat26D9WO];
                return $res;
            };
            var hs_sat26D9WT = new $hs.Data(1);
            hs_sat26D9WT.data = [1];
            var hs_wild26D9WS = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_d26D9PU, hs_sat26D9WT);
            switch (hs_wild26D9WS.tag) {
            case 1:
                var hs_sat26D9WY = new $hs.Thunk();
                hs_sat26D9WY.evaluateOnce = function () {
                    var hs_sat26D9WU = new $hs.Thunk();
                    hs_sat26D9WU.evaluateOnce = function () {
                        var hs_wild126D9WR = hs_ds26D9PT;
                        if (hs_ds26D9PT.notEvaluated) {
                            hs_wild126D9WR = hs_ds26D9PT.hscall();
                        }
                        var hs_r26D9Q2 = hs_wild126D9WR.data[1];
                        if (hs_r26D9Q2.notEvaluated) {
                            return hs_r26D9Q2.hscall();
                        } else {
                            return hs_r26D9Q2;
                        }
                    };
                    var hs_sat26D9WW = new $hs.Thunk();
                    hs_sat26D9WW.evaluateOnce = function () {
                        var hs_sat26D9WV = new $hs.Data(1);
                        hs_sat26D9WV.data = ["0"];
                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26D9WV);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D9WW, hs_sat26D9WU);
                };
                var hs_wild126D9Qf = $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26D9WY);
                var hs_sat26D9X0 = new $hs.Data(2);
                hs_sat26D9X0.data = [hs_wild126D9Qf, hs_cs26D9Qg];
                var hs_sat26D9X2 = new $hs.Thunk();
                hs_sat26D9X2.evaluateOnce = function () {
                    var hs_wild226D9WZ = hs_ds26D9PT;
                    if (hs_ds26D9PT.notEvaluated) {
                        hs_wild226D9WZ = hs_ds26D9PT.hscall();
                    }
                    var hs_q26D9Qd = hs_wild226D9WZ.data[0];
                    if (hs_q26D9Qd.notEvaluated) {
                        return hs_q26D9Qd.hscall();
                    } else {
                        return hs_q26D9Qd;
                    }
                };
                var hs_sat26D9X4 = new $hs.Thunk();
                hs_sat26D9X4.evaluateOnce = function () {
                    var hs_sat26D9X3 = new $hs.Data(1);
                    hs_sat26D9X3.data = [1];
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_d26D9PU, hs_sat26D9X3);
                };
                return hs_jblockzq26D9Q8.hscall(hs_sat26D9X4, hs_sat26D9X2, hs_sat26D9X0);
            case 2:
                var hs_sat26D9X8 = new $hs.Thunk();
                hs_sat26D9X8.evaluateOnce = function () {
                    var hs_sat26D9X6 = new $hs.Thunk();
                    hs_sat26D9X6.evaluateOnce = function () {
                        var hs_sat26D9X5 = new $hs.Data(1);
                        hs_sat26D9X5.data = ["0"];
                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26D9X5);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D9X6, hs_n26D9PL);
                };
                var hs_wild126D9Qn = $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26D9X8);
                var $res = new $hs.Data(2);
                $res.data = [hs_wild126D9Qn, hs_cs26D9Qg];
                return $res;
            }
        };
        var hs_a26D9Qp = new $hs.Data(1);
        hs_a26D9Qp.data = [9];
        var hs_jhead26D9QT = new $hs.Func(2);
        hs_jhead26D9QT.evaluate = function (hs_n26D9Qu, hs_cs26D9QW) {
            var hs_ds26D9QC = new $hs.Thunk();
            hs_ds26D9QC.evaluateOnce = function () {
                var hs_wild26D9Qz = hs_n26D9Qu;
                if (hs_n26D9Qu.notEvaluated) {
                    hs_wild26D9Qz = hs_n26D9Qu.hscall();
                }
                var hs_wild126D9Qy = new $hs.Data(1);
                hs_wild126D9Qy.data = [10];
                var hs_sat26D9Xa = new $hs.Thunk();
                hs_sat26D9Xa.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_remInt.hscall(hs_wild26D9Qz, hs_wild126D9Qy);
                };
                var hs_sat26D9Xb = new $hs.Thunk();
                hs_sat26D9Xb.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_quotInt.hscall(hs_wild26D9Qz, hs_wild126D9Qy);
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26D9Xb, hs_sat26D9Xa];
                return $res;
            };
            var hs_sat26D9Xf = new $hs.Data(1);
            hs_sat26D9Xf.data = [10];
            var hs_wild26D9Xe = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_n26D9Qu, hs_sat26D9Xf);
            switch (hs_wild26D9Xe.tag) {
            case 1:
                var hs_sat26D9Xk = new $hs.Thunk();
                hs_sat26D9Xk.evaluateOnce = function () {
                    var hs_sat26D9Xg = new $hs.Thunk();
                    hs_sat26D9Xg.evaluateOnce = function () {
                        var hs_wild126D9Xd = hs_ds26D9QC;
                        if (hs_ds26D9QC.notEvaluated) {
                            hs_wild126D9Xd = hs_ds26D9QC.hscall();
                        }
                        var hs_r26D9QK = hs_wild126D9Xd.data[1];
                        if (hs_r26D9QK.notEvaluated) {
                            return hs_r26D9QK.hscall();
                        } else {
                            return hs_r26D9QK;
                        }
                    };
                    var hs_sat26D9Xi = new $hs.Thunk();
                    hs_sat26D9Xi.evaluateOnce = function () {
                        var hs_sat26D9Xh = new $hs.Data(1);
                        hs_sat26D9Xh.data = ["0"];
                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26D9Xh);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D9Xi, hs_sat26D9Xg);
                };
                var hs_wild126D9QV = $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26D9Xk);
                var hs_sat26D9Xm = new $hs.Data(2);
                hs_sat26D9Xm.data = [hs_wild126D9QV, hs_cs26D9QW];
                var hs_sat26D9Xo = new $hs.Thunk();
                hs_sat26D9Xo.evaluateOnce = function () {
                    var hs_wild226D9Xl = hs_ds26D9QC;
                    if (hs_ds26D9QC.notEvaluated) {
                        hs_wild226D9Xl = hs_ds26D9QC.hscall();
                    }
                    var hs_q26D9QS = hs_wild226D9Xl.data[0];
                    if (hs_q26D9QS.notEvaluated) {
                        return hs_q26D9QS.hscall();
                    } else {
                        return hs_q26D9QS;
                    }
                };
                return hs_jhead26D9QT.hscall(hs_sat26D9Xo, hs_sat26D9Xm);
            case 2:
                var hs_sat26D9Xs = new $hs.Thunk();
                hs_sat26D9Xs.evaluateOnce = function () {
                    var hs_sat26D9Xq = new $hs.Thunk();
                    hs_sat26D9Xq.evaluateOnce = function () {
                        var hs_sat26D9Xp = new $hs.Data(1);
                        hs_sat26D9Xp.data = ["0"];
                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26D9Xp);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D9Xq, hs_n26D9Qu);
                };
                var hs_wild126D9R3 = $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26D9Xs);
                var $res = new $hs.Data(2);
                $res.data = [hs_wild126D9R3, hs_cs26D9QW];
                return $res;
            }
        };
        var hs_jprintb26D9Ro = new $hs.Func(2);
        hs_jprintb26D9Ro.evaluate = function (hs_ds26D9R7, hs_cs26D9R9) {
            var hs_wild26D9Xt = hs_ds26D9R7;
            if (hs_ds26D9R7.notEvaluated) {
                hs_wild26D9Xt = hs_ds26D9R7.hscall();
            }
            switch (hs_wild26D9Xt.tag) {
            case 1:
                if (hs_cs26D9R9.notEvaluated) {
                    return hs_cs26D9R9.hscall();
                } else {
                    return hs_cs26D9R9;
                }
            case 2:
                var hs_n26D9Rc = hs_wild26D9Xt.data[0];
                var hs_ns26D9Rn = hs_wild26D9Xt.data[1];
                var hs_sat26D9Xv = new $hs.Thunk();
                hs_sat26D9Xv.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1000000000);
                };
                var hs_wild126D9Xu = $hs.modules.GHCziInteger.hs_quotRemInteger.hscall(hs_n26D9Rc, hs_sat26D9Xv);
                var hs_qzq26D9Rh = hs_wild126D9Xu[0];
                var hs_rzq26D9Rk = hs_wild126D9Xu[1];
                var hs_sat26D9Xz = new $hs.Thunk();
                hs_sat26D9Xz.evaluateOnce = function () {
                    var hs_sat26D9Xw = new $hs.Thunk();
                    hs_sat26D9Xw.evaluateOnce = function () {
                        return hs_jprintb26D9Ro.hscall(hs_ns26D9Rn, hs_cs26D9R9);
                    };
                    var hs_sat26D9Xx = new $hs.Thunk();
                    hs_sat26D9Xx.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_rzq26D9Rk);
                    };
                    var hs_sat26D9Xy = new $hs.Func(1);
                    hs_sat26D9Xy.evaluate = function (hs_eta1cW6l3) {
                        return hs_jblockzq26D9Q8.hscall(hs_a26D9Qp, hs_sat26D9Xx, hs_eta1cW6l3);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D9Xy, hs_sat26D9Xw);
                };
                var hs_sat26D9XA = new $hs.Thunk();
                hs_sat26D9XA.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_qzq26D9Rh);
                };
                var hs_sat26D9XB = new $hs.Func(1);
                hs_sat26D9XB.evaluate = function (hs_eta1cW6l3) {
                    return hs_jblockzq26D9Q8.hscall(hs_a26D9Qp, hs_sat26D9XA, hs_eta1cW6l3);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D9XB, hs_sat26D9Xz);
            }
        };
        var hs_jsplitb26D9RG = new $hs.Func(2);
        hs_jsplitb26D9RG.evaluate = function (hs_ds26D9Rz, hs_ds126D9Ru) {
            var hs_wild26D9XC = hs_ds126D9Ru;
            if (hs_ds126D9Ru.notEvaluated) {
                hs_wild26D9XC = hs_ds126D9Ru.hscall();
            }
            switch (hs_wild26D9XC.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_n26D9Ry = hs_wild26D9XC.data[0];
                var hs_ns26D9RF = hs_wild26D9XC.data[1];
                var hs_wild126D9XD = $hs.modules.GHCziInteger.hs_quotRemInteger.hscall(hs_n26D9Ry, hs_ds26D9Rz);
                var hs_q26D9RD = hs_wild126D9XD[0];
                var hs_r26D9RE = hs_wild126D9XD[1];
                var hs_sat26D9XE = new $hs.Thunk();
                hs_sat26D9XE.evaluateOnce = function () {
                    return hs_jsplitb26D9RG.hscall(hs_ds26D9Rz, hs_ns26D9RF);
                };
                var hs_sat26D9XF = new $hs.Data(2);
                hs_sat26D9XF.data = [hs_r26D9RE, hs_sat26D9XE];
                var $res = new $hs.Data(2);
                $res.data = [hs_q26D9RD, hs_sat26D9XF];
                return $res;
            }
        };
        var hs_jsplitf26D9RP = new $hs.Func(2);
        hs_jsplitf26D9RP.evaluate = function (hs_p26D9RM, hs_n26D9RN) {
            var hs_wild26D9XG = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_p26D9RM, hs_n26D9RN);
            switch (hs_wild26D9XG.tag) {
            case 1:
                var hs_sat26D9XJ = new $hs.Thunk();
                hs_sat26D9XJ.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_p26D9RM, hs_p26D9RM);
                };
                var hs_wild126D9XI = hs_jsplitf26D9RP.hscall(hs_sat26D9XJ, hs_n26D9RN);
                switch (hs_wild126D9XI.tag) {
                case 1:
                    var hs_sat26D9XH = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("jsplith: []\x00");
                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D9XH);
                case 2:
                    var hs_n126D9RV = hs_wild126D9XI.data[0];
                    var hs_ns26D9S3 = hs_wild126D9XI.data[1];
                    var hs_wild226D9XK = $hs.modules.GHCziInteger.hs_quotRemInteger.hscall(hs_n126D9RV, hs_p26D9RM);
                    var hs_q26D9RZ = hs_wild226D9XK[0];
                    var hs_r26D9S2 = hs_wild226D9XK[1];
                    var hs_sat26D9XM = new $hs.Thunk();
                    hs_sat26D9XM.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    var hs_wild326D9XL = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_q26D9RZ, hs_sat26D9XM);
                    switch (hs_wild326D9XL.tag) {
                    case 1:
                        var hs_sat26D9XN = new $hs.Thunk();
                        hs_sat26D9XN.evaluateOnce = function () {
                            return hs_jsplitb26D9RG.hscall(hs_p26D9RM, hs_ns26D9S3);
                        };
                        var $res = new $hs.Data(2);
                        $res.data = [hs_r26D9S2, hs_sat26D9XN];
                        return $res;
                    case 2:
                        var hs_sat26D9XO = new $hs.Thunk();
                        hs_sat26D9XO.evaluateOnce = function () {
                            return hs_jsplitb26D9RG.hscall(hs_p26D9RM, hs_ns26D9S3);
                        };
                        var hs_sat26D9XP = new $hs.Data(2);
                        hs_sat26D9XP.data = [hs_r26D9S2, hs_sat26D9XO];
                        var $res = new $hs.Data(2);
                        $res.data = [hs_q26D9RZ, hs_sat26D9XP];
                        return $res;
                    }
                }
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [hs_n26D9RN, $hs.modules.GHCziTypes.hs_ZMZN];
                return $res;
            }
        };
        var hs_integerToStringzq26D9SG = new $hs.Func(2);
        hs_integerToStringzq26D9SG.evaluate = function (hs_n26D9Sa, hs_cs26D9Sy) {
            var hs_sat26D9XR = new $hs.Thunk();
            hs_sat26D9XR.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1000000000);
            };
            var hs_wild26D9XQ = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26D9Sa, hs_sat26D9XR);
            switch (hs_wild26D9XQ.tag) {
            case 1:
                var hs_sat26D9XW = new $hs.Thunk();
                hs_sat26D9XW.evaluateOnce = function () {
                    var hs_sat26D9XS = new $hs.Thunk();
                    hs_sat26D9XS.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1000000000);
                    };
                    var hs_sat26D9XT = new $hs.Thunk();
                    hs_sat26D9XT.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1000000000);
                    };
                    return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26D9XT, hs_sat26D9XS);
                };
                var hs_wild126D9XV = hs_jsplitf26D9RP.hscall(hs_sat26D9XW, hs_n26D9Sa);
                switch (hs_wild126D9XV.tag) {
                case 1:
                    var hs_sat26D9XU = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("jprinth []\x00");
                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D9XU);
                case 2:
                    var hs_n126D9Sk = hs_wild126D9XV.data[0];
                    var hs_ns26D9Sx = hs_wild126D9XV.data[1];
                    var hs_sat26D9XY = new $hs.Thunk();
                    hs_sat26D9XY.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1000000000);
                    };
                    var hs_wild226D9XX = $hs.modules.GHCziInteger.hs_quotRemInteger.hscall(hs_n126D9Sk, hs_sat26D9XY);
                    var hs_qzq26D9Sq = hs_wild226D9XX[0];
                    var hs_rzq26D9Su = hs_wild226D9XX[1];
                    var hs_q26D9Sr = new $hs.Thunk();
                    hs_q26D9Sr.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_qzq26D9Sq);
                    };
                    var hs_sat26D9Y0 = new $hs.Data(1);
                    hs_sat26D9Y0.data = [0];
                    var hs_wild326D9XZ = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_q26D9Sr, hs_sat26D9Y0);
                    switch (hs_wild326D9XZ.tag) {
                    case 1:
                        var hs_sat26D9Y1 = new $hs.Thunk();
                        hs_sat26D9Y1.evaluateOnce = function () {
                            return hs_jprintb26D9Ro.hscall(hs_ns26D9Sx, hs_cs26D9Sy);
                        };
                        var hs_sat26D9Y2 = new $hs.Thunk();
                        hs_sat26D9Y2.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_rzq26D9Su);
                        };
                        var hs_sat26D9Y3 = new $hs.Func(1);
                        hs_sat26D9Y3.evaluate = function (hs_eta1cW6l3) {
                            return hs_jhead26D9QT.hscall(hs_sat26D9Y2, hs_eta1cW6l3);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D9Y3, hs_sat26D9Y1);
                    case 2:
                        var hs_sat26D9Y7 = new $hs.Thunk();
                        hs_sat26D9Y7.evaluateOnce = function () {
                            var hs_sat26D9Y4 = new $hs.Thunk();
                            hs_sat26D9Y4.evaluateOnce = function () {
                                return hs_jprintb26D9Ro.hscall(hs_ns26D9Sx, hs_cs26D9Sy);
                            };
                            var hs_sat26D9Y5 = new $hs.Thunk();
                            hs_sat26D9Y5.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_rzq26D9Su);
                            };
                            var hs_sat26D9Y6 = new $hs.Func(1);
                            hs_sat26D9Y6.evaluate = function (hs_eta1cW6l3) {
                                return hs_jblockzq26D9Q8.hscall(hs_a26D9Qp, hs_sat26D9Y5, hs_eta1cW6l3);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D9Y6, hs_sat26D9Y4);
                        };
                        var hs_sat26D9Y8 = new $hs.Func(1);
                        hs_sat26D9Y8.evaluate = function (hs_eta1cW6l3) {
                            return hs_jhead26D9QT.hscall(hs_q26D9Sr, hs_eta1cW6l3);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D9Y8, hs_sat26D9Y7);
                    }
                }
            case 2:
                var hs_sat26D9Y9 = new $hs.Thunk();
                hs_sat26D9Y9.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26D9Sa);
                };
                return hs_jhead26D9QT.hscall(hs_sat26D9Y9, hs_cs26D9Sy);
            }
        };
        var hs_sat26D9Yb = new $hs.Thunk();
        hs_sat26D9Yb.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_wild26D9Ya = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n026D9SH, hs_sat26D9Yb);
        switch (hs_wild26D9Ya.tag) {
        case 1:
            return hs_integerToStringzq26D9SG.hscall(hs_n026D9SH, hs_cs026D9SK);
        case 2:
            var hs_sat26D9Yd = new $hs.Thunk();
            hs_sat26D9Yd.evaluateOnce = function () {
                var hs_sat26D9Yc = new $hs.Thunk();
                hs_sat26D9Yc.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_n026D9SH);
                };
                return hs_integerToStringzq26D9SG.hscall(hs_sat26D9Yc, hs_cs026D9SK);
            };
            var hs_sat26D9Ye = new $hs.Data(1);
            hs_sat26D9Ye.data = ["-"];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26D9Ye, hs_sat26D9Yd];
            return $res;
        }
    };
    hs_zdcsucc25uLmz.evaluate = function (hs_x26D9SR) {
        var hs_sat26D9Yf = new $hs.Thunk();
        hs_sat26D9Yf.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x26D9SR, hs_sat26D9Yf);
    };
    hs_zdcpred25uLmE.evaluate = function (hs_x26D9SW) {
        var hs_sat26D9Yg = new $hs.Thunk();
        hs_sat26D9Yg.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x26D9SW, hs_sat26D9Yg);
    };
    this.hs_upzufb.evaluate = function (hs_c26D9Tb, hs_n26D9Td, hs_x026D9Te, hs_delta26D9T8, hs_lim26D9T6) {
        var hs_go26D9T9 = new $hs.Func(1);
        hs_go26D9T9.evaluate = function (hs_x26D9T5) {
            var hs_wild26D9Yh = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_x26D9T5, hs_lim26D9T6);
            switch (hs_wild26D9Yh.tag) {
            case 1:
                var hs_sat26D9Yj = new $hs.Thunk();
                hs_sat26D9Yj.evaluateOnce = function () {
                    var hs_sat26D9Yi = new $hs.Thunk();
                    hs_sat26D9Yi.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x26D9T5, hs_delta26D9T8);
                    };
                    return hs_go26D9T9.hscall(hs_sat26D9Yi);
                };
                return hs_c26D9Tb.hscall(hs_x26D9T5, hs_sat26D9Yj);
            case 2:
                if (hs_n26D9Td.notEvaluated) {
                    return hs_n26D9Td.hscall();
                } else {
                    return hs_n26D9Td;
                }
            }
        };
        return hs_go26D9T9.hscall(hs_x026D9Te);
    };
    this.hs_dnzufb.evaluate = function (hs_c26D9Ts, hs_n26D9Tu, hs_x026D9Tv, hs_delta26D9Tp, hs_lim26D9Tn) {
        var hs_go26D9Tq = new $hs.Func(1);
        hs_go26D9Tq.evaluate = function (hs_x26D9Tm) {
            var hs_wild26D9Yk = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_x26D9Tm, hs_lim26D9Tn);
            switch (hs_wild26D9Yk.tag) {
            case 1:
                var hs_sat26D9Ym = new $hs.Thunk();
                hs_sat26D9Ym.evaluateOnce = function () {
                    var hs_sat26D9Yl = new $hs.Thunk();
                    hs_sat26D9Yl.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x26D9Tm, hs_delta26D9Tp);
                    };
                    return hs_go26D9Tq.hscall(hs_sat26D9Yl);
                };
                return hs_c26D9Ts.hscall(hs_x26D9Tm, hs_sat26D9Ym);
            case 2:
                if (hs_n26D9Tu.notEvaluated) {
                    return hs_n26D9Tu.hscall();
                } else {
                    return hs_n26D9Tu;
                }
            }
        };
        return hs_go26D9Tq.hscall(hs_x026D9Tv);
    };
    this.hs_enumDeltaInteger.evaluate = function (hs_x26D9Ty, hs_d26D9TB) {
        var hs_x126D9TA = hs_x26D9Ty;
        if (hs_x26D9Ty.notEvaluated) {
            hs_x126D9TA = hs_x26D9Ty.hscall();
        }
        var hs_sat26D9Yo = new $hs.Thunk();
        hs_sat26D9Yo.evaluateOnce = function () {
            var hs_sat26D9Yn = new $hs.Thunk();
            hs_sat26D9Yn.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x126D9TA, hs_d26D9TB);
            };
            return $hs.modules.GHCziNum.hs_enumDeltaInteger.hscall(hs_sat26D9Yn, hs_d26D9TB);
        };
        var $res = new $hs.Data(2);
        $res.data = [hs_x126D9TA, hs_sat26D9Yo];
        return $res;
    };
    this.hs_enumDeltaIntegerFB.evaluate = function (hs_c26D9TK, hs_x26D9TH, hs_d26D9TL) {
        var hs_x126D9TJ = hs_x26D9TH;
        if (hs_x26D9TH.notEvaluated) {
            hs_x126D9TJ = hs_x26D9TH.hscall();
        }
        var hs_sat26D9Yq = new $hs.Thunk();
        hs_sat26D9Yq.evaluateOnce = function () {
            var hs_sat26D9Yp = new $hs.Thunk();
            hs_sat26D9Yp.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x126D9TJ, hs_d26D9TL);
            };
            return $hs.modules.GHCziNum.hs_enumDeltaIntegerFB.hscall(hs_c26D9TK, hs_sat26D9Yp, hs_d26D9TL);
        };
        return hs_c26D9TK.hscall(hs_x126D9TJ, hs_sat26D9Yq);
    };
    hs_zdcenumFrom25uLnz.evaluate = function (hs_eta26D9TR) {
        var hs_sat26D9Yr = new $hs.Thunk();
        hs_sat26D9Yr.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_enumDeltaInteger.hscall(hs_eta26D9TR, hs_sat26D9Yr);
    };
    hs_zdcenumFromThen25uLnE.evaluate = function (hs_eta26D9TX, hs_eta126D9TY) {
        var hs_sat26D9Ys = new $hs.Thunk();
        hs_sat26D9Ys.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_eta126D9TY, hs_eta26D9TX);
        };
        return $hs.modules.GHCziNum.hs_enumDeltaInteger.hscall(hs_eta26D9TX, hs_sat26D9Ys);
    };
    this.hs_upzulist.evaluate = function (hs_x026D9Uc, hs_delta26D9U8, hs_lim26D9U6) {
        var hs_go26D9U9 = new $hs.Func(1);
        hs_go26D9U9.evaluate = function (hs_x26D9U5) {
            var hs_wild26D9Yt = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_x26D9U5, hs_lim26D9U6);
            switch (hs_wild26D9Yt.tag) {
            case 1:
                var hs_sat26D9Yv = new $hs.Thunk();
                hs_sat26D9Yv.evaluateOnce = function () {
                    var hs_sat26D9Yu = new $hs.Thunk();
                    hs_sat26D9Yu.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x26D9U5, hs_delta26D9U8);
                    };
                    return hs_go26D9U9.hscall(hs_sat26D9Yu);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_x26D9U5, hs_sat26D9Yv];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        };
        return hs_go26D9U9.hscall(hs_x026D9Uc);
    };
    this.hs_dnzulist.evaluate = function (hs_x026D9Up, hs_delta26D9Ul, hs_lim26D9Uj) {
        var hs_go26D9Um = new $hs.Func(1);
        hs_go26D9Um.evaluate = function (hs_x26D9Ui) {
            var hs_wild26D9Yw = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_x26D9Ui, hs_lim26D9Uj);
            switch (hs_wild26D9Yw.tag) {
            case 1:
                var hs_sat26D9Yy = new $hs.Thunk();
                hs_sat26D9Yy.evaluateOnce = function () {
                    var hs_sat26D9Yx = new $hs.Thunk();
                    hs_sat26D9Yx.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x26D9Ui, hs_delta26D9Ul);
                    };
                    return hs_go26D9Um.hscall(hs_sat26D9Yx);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_x26D9Ui, hs_sat26D9Yy];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        };
        return hs_go26D9Um.hscall(hs_x026D9Up);
    };
    this.hs_enumDeltaToInteger.evaluate = function (hs_x26D9Uw, hs_delta26D9Ut, hs_lim26D9Ux) {
        var hs_sat26D9YA = new $hs.Thunk();
        hs_sat26D9YA.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_wild26D9Yz = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_delta26D9Ut, hs_sat26D9YA);
        switch (hs_wild26D9Yz.tag) {
        case 1:
            return $hs.modules.GHCziNum.hs_dnzulist.hscall(hs_x26D9Uw, hs_delta26D9Ut, hs_lim26D9Ux);
        case 2:
            return $hs.modules.GHCziNum.hs_upzulist.hscall(hs_x26D9Uw, hs_delta26D9Ut, hs_lim26D9Ux);
        }
    };
    this.hs_enumDeltaToIntegerFB.evaluate = function (hs_c26D9UG, hs_n26D9UH, hs_x26D9UI, hs_delta26D9UD, hs_lim26D9UJ) {
        var hs_sat26D9YC = new $hs.Thunk();
        hs_sat26D9YC.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_wild26D9YB = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_delta26D9UD, hs_sat26D9YC);
        switch (hs_wild26D9YB.tag) {
        case 1:
            return $hs.modules.GHCziNum.hs_dnzufb.hscall(hs_c26D9UG, hs_n26D9UH, hs_x26D9UI, hs_delta26D9UD, hs_lim26D9UJ);
        case 2:
            return $hs.modules.GHCziNum.hs_upzufb.hscall(hs_c26D9UG, hs_n26D9UH, hs_x26D9UI, hs_delta26D9UD, hs_lim26D9UJ);
        }
    };
    hs_zdcenumFromTo25uLov.evaluate = function (hs_eta26D9UO, hs_eta126D9UQ) {
        var hs_sat26D9YD = new $hs.Thunk();
        hs_sat26D9YD.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_enumDeltaToInteger.hscall(hs_eta26D9UO, hs_sat26D9YD, hs_eta126D9UQ);
    };
    hs_zdcenumFromThenTo25uLoC.evaluate = function (hs_eta26D9UW, hs_eta126D9UX, hs_eta226D9UZ) {
        var hs_sat26D9YE = new $hs.Thunk();
        hs_sat26D9YE.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_eta126D9UX, hs_eta26D9UW);
        };
        return $hs.modules.GHCziNum.hs_enumDeltaToInteger.hscall(hs_eta26D9UW, hs_sat26D9YE, hs_eta226D9UZ);
    };
    this.hs_zdfEnumInteger.data = [hs_zdcsucc25uLmz, hs_zdcpred25uLmE, hs_zdctoEnum25uLiV, hs_zdcfromEnum25uLiP, hs_zdcenumFrom25uLnz, hs_zdcenumFromThen25uLnE, hs_zdcenumFromTo25uLov, hs_zdcenumFromThenTo25uLoC];
    this.hs_DZCNum.evaluate = function (hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
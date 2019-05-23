
$hs.modules.GHCziNum = new $hs.Module();
$hs.modules.GHCziNum.dependencies = ["GHC.Types", "GHC.CString", "GHC.Integer", "GHC.Base", "GHC.Show", "GHC.Err", "GHC.Classes"];
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
    this.hs_zdp1Num.evaluate = function (hs_tpl26CKHd) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_tpl26CKHd);
    };
    this.hs_zdp2Num.notEvaluated = true;
    this.hs_zdp2Num.evaluate = function (hs_tpl26CKHq) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_tpl26CKHq);
    };
    this.hs_zp.notEvaluated = true;
    this.hs_zp.evaluate = function (hs_tpl26CKHD) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_tpl26CKHD);
    };
    this.hs_zt.notEvaluated = true;
    this.hs_zt.evaluate = function (hs_tpl26CKHQ) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_tpl26CKHQ);
    };
    this.hs_zm.notEvaluated = true;
    this.hs_zm.evaluate = function (hs_tpl26CKI3) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_tpl26CKI3);
    };
    this.hs_negate.notEvaluated = true;
    this.hs_negate.evaluate = function (hs_tpl26CKIg) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_tpl26CKIg);
    };
    this.hs_abs.notEvaluated = true;
    this.hs_abs.evaluate = function (hs_tpl26CKIt) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_tpl26CKIt);
    };
    this.hs_signum.notEvaluated = true;
    this.hs_signum.evaluate = function (hs_tpl26CKIG) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_tpl26CKIG);
    };
    this.hs_fromInteger.notEvaluated = true;
    this.hs_fromInteger.evaluate = function (hs_tpl26CKIT) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_tpl26CKIT);
    };
    this.hs_zddmnegate.notEvaluated = true;
    this.hs_zddmnegate.evaluate = function (hs_zddNum26CKJ7, hs_x26CKJa) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_zddNum26CKJ7, hs_x26CKJa);
    };
    this.hs_zddmzm.notEvaluated = true;
    this.hs_zddmzm.evaluate = function (hs_zddNum26CKJe, hs_x26CKJf, hs_y26CKJg) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_zddNum26CKJe, hs_x26CKJf, hs_y26CKJg);
    };
    this.hs_divModInt.notEvaluated = true;
    this.hs_divModInt.evaluate = function (hs_x26CKJk, hs_y26CKJn) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_x26CKJk, hs_y26CKJn);
    };
    this.hs_quotRemInt.notEvaluated = true;
    this.hs_quotRemInt.evaluate = function (hs_a26CKJw, hs_b26CKJz) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_a26CKJw, hs_b26CKJz);
    };
    this.hs_subtract.notEvaluated = true;
    this.hs_subtract.evaluate = function (hs_zddNum26CKJJ, hs_eta26CKJL, hs_eta126CKJK) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_zddNum26CKJJ, hs_eta26CKJL, hs_eta126CKJK);
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
    this.hs_integerToString.evaluate = function (hs_n026CKNF, hs_cs026CKNI) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_n026CKNF, hs_cs026CKNI);
    };
    this.hs_upzufb.notEvaluated = true;
    this.hs_upzufb.evaluate = function (hs_c26CKO7, hs_n26CKO9, hs_x026CKOa, hs_delta26CKO4, hs_lim26CKO2) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_c26CKO7, hs_n26CKO9, hs_x026CKOa, hs_delta26CKO4, hs_lim26CKO2);
    };
    this.hs_dnzufb.notEvaluated = true;
    this.hs_dnzufb.evaluate = function (hs_c26CKOo, hs_n26CKOq, hs_x026CKOr, hs_delta26CKOl, hs_lim26CKOj) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_c26CKOo, hs_n26CKOq, hs_x026CKOr, hs_delta26CKOl, hs_lim26CKOj);
    };
    this.hs_enumDeltaInteger.notEvaluated = true;
    this.hs_enumDeltaInteger.evaluate = function (hs_x26CKOu, hs_d26CKOx) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_x26CKOu, hs_d26CKOx);
    };
    this.hs_enumDeltaIntegerFB.notEvaluated = true;
    this.hs_enumDeltaIntegerFB.evaluate = function (hs_c26CKOG, hs_x26CKOD, hs_d26CKOH) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_c26CKOG, hs_x26CKOD, hs_d26CKOH);
    };
    this.hs_upzulist.notEvaluated = true;
    this.hs_upzulist.evaluate = function (hs_x026CKP6, hs_delta26CKP2, hs_lim26CKP0) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_x026CKP6, hs_delta26CKP2, hs_lim26CKP0);
    };
    this.hs_dnzulist.notEvaluated = true;
    this.hs_dnzulist.evaluate = function (hs_x026CKPj, hs_delta26CKPf, hs_lim26CKPd) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_x026CKPj, hs_delta26CKPf, hs_lim26CKPd);
    };
    this.hs_enumDeltaToInteger.notEvaluated = true;
    this.hs_enumDeltaToInteger.evaluate = function (hs_x26CKPq, hs_delta26CKPn, hs_lim26CKPr) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_x26CKPq, hs_delta26CKPn, hs_lim26CKPr);
    };
    this.hs_enumDeltaToIntegerFB.notEvaluated = true;
    this.hs_enumDeltaToIntegerFB.evaluate = function (hs_c26CKPA, hs_n26CKPB, hs_x26CKPC, hs_delta26CKPx, hs_lim26CKPD) {
        $hs.modules.GHCziNum.loadDependencies();
        return this.evaluate(hs_c26CKPA, hs_n26CKPB, hs_x26CKPC, hs_delta26CKPx, hs_lim26CKPD);
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
    var hs_zdcfromInteger25umdw = new $hs.Func(1);
    var hs_zdcsignum25umdB = new $hs.Func(1);
    var hs_zdcabs25umdJ = new $hs.Func(1);
    var hs_zdcfromInteger125umdO = new $hs.Func(1);
    var hs_zdcfromEnum25umdR = new $hs.Func(1);
    var hs_zdctoEnum25umdW = new $hs.Func(1);
    var hs_sat26CKRv = new $hs.Thunk();
    var hs_zdcshowsPrec25ume2 = new $hs.Func(3);
    var hs_zdcshowList25ume3 = new $hs.Thunk();
    var hs_zdcshow25ume4 = new $hs.Thunk();
    var hs_zdcsucc25umhw = new $hs.Func(1);
    var hs_zdcpred25umhA = new $hs.Func(1);
    var hs_zdcenumFrom25umiu = new $hs.Func(1);
    var hs_zdcenumFromThen25umiy = new $hs.Func(2);
    var hs_zdcenumFromTo25umjo = new $hs.Func(2);
    var hs_zdcenumFromThenTo25umju = new $hs.Func(3);
    this.hs_zdp1Num.evaluate = function (hs_tpl26CKHd) {
        var hs_tpl26CKQ0 = hs_tpl26CKHd;
        if (hs_tpl26CKHd.notEvaluated) {
            hs_tpl26CKQ0 = hs_tpl26CKHd.hscall();
        }
        var hs_tpl26CKHo = hs_tpl26CKQ0.data[0];
        if (hs_tpl26CKHo.notEvaluated) {
            return hs_tpl26CKHo.hscall();
        } else {
            return hs_tpl26CKHo;
        }
    };
    this.hs_zdp2Num.evaluate = function (hs_tpl26CKHq) {
        var hs_tpl26CKQ9 = hs_tpl26CKHq;
        if (hs_tpl26CKHq.notEvaluated) {
            hs_tpl26CKQ9 = hs_tpl26CKHq.hscall();
        }
        var hs_tpl26CKHB = hs_tpl26CKQ9.data[1];
        if (hs_tpl26CKHB.notEvaluated) {
            return hs_tpl26CKHB.hscall();
        } else {
            return hs_tpl26CKHB;
        }
    };
    this.hs_zp.evaluate = function (hs_tpl26CKHD) {
        var hs_tpl26CKQi = hs_tpl26CKHD;
        if (hs_tpl26CKHD.notEvaluated) {
            hs_tpl26CKQi = hs_tpl26CKHD.hscall();
        }
        var hs_tpl26CKHO = hs_tpl26CKQi.data[2];
        if (hs_tpl26CKHO.notEvaluated) {
            return hs_tpl26CKHO.hscall();
        } else {
            return hs_tpl26CKHO;
        }
    };
    this.hs_zt.evaluate = function (hs_tpl26CKHQ) {
        var hs_tpl26CKQr = hs_tpl26CKHQ;
        if (hs_tpl26CKHQ.notEvaluated) {
            hs_tpl26CKQr = hs_tpl26CKHQ.hscall();
        }
        var hs_tpl26CKI1 = hs_tpl26CKQr.data[3];
        if (hs_tpl26CKI1.notEvaluated) {
            return hs_tpl26CKI1.hscall();
        } else {
            return hs_tpl26CKI1;
        }
    };
    this.hs_zm.evaluate = function (hs_tpl26CKI3) {
        var hs_tpl26CKQA = hs_tpl26CKI3;
        if (hs_tpl26CKI3.notEvaluated) {
            hs_tpl26CKQA = hs_tpl26CKI3.hscall();
        }
        var hs_tpl26CKIe = hs_tpl26CKQA.data[4];
        if (hs_tpl26CKIe.notEvaluated) {
            return hs_tpl26CKIe.hscall();
        } else {
            return hs_tpl26CKIe;
        }
    };
    this.hs_negate.evaluate = function (hs_tpl26CKIg) {
        var hs_tpl26CKQJ = hs_tpl26CKIg;
        if (hs_tpl26CKIg.notEvaluated) {
            hs_tpl26CKQJ = hs_tpl26CKIg.hscall();
        }
        var hs_tpl26CKIr = hs_tpl26CKQJ.data[5];
        if (hs_tpl26CKIr.notEvaluated) {
            return hs_tpl26CKIr.hscall();
        } else {
            return hs_tpl26CKIr;
        }
    };
    this.hs_abs.evaluate = function (hs_tpl26CKIt) {
        var hs_tpl26CKQS = hs_tpl26CKIt;
        if (hs_tpl26CKIt.notEvaluated) {
            hs_tpl26CKQS = hs_tpl26CKIt.hscall();
        }
        var hs_tpl26CKIE = hs_tpl26CKQS.data[6];
        if (hs_tpl26CKIE.notEvaluated) {
            return hs_tpl26CKIE.hscall();
        } else {
            return hs_tpl26CKIE;
        }
    };
    this.hs_signum.evaluate = function (hs_tpl26CKIG) {
        var hs_tpl26CKR1 = hs_tpl26CKIG;
        if (hs_tpl26CKIG.notEvaluated) {
            hs_tpl26CKR1 = hs_tpl26CKIG.hscall();
        }
        var hs_tpl26CKIR = hs_tpl26CKR1.data[7];
        if (hs_tpl26CKIR.notEvaluated) {
            return hs_tpl26CKIR.hscall();
        } else {
            return hs_tpl26CKIR;
        }
    };
    this.hs_fromInteger.evaluate = function (hs_tpl26CKIT) {
        var hs_tpl26CKRa = hs_tpl26CKIT;
        if (hs_tpl26CKIT.notEvaluated) {
            hs_tpl26CKRa = hs_tpl26CKIT.hscall();
        }
        var hs_tpl26CKJ4 = hs_tpl26CKRa.data[8];
        if (hs_tpl26CKJ4.notEvaluated) {
            return hs_tpl26CKJ4.hscall();
        } else {
            return hs_tpl26CKJ4;
        }
    };
    this.hs_zddmnegate.evaluate = function (hs_zddNum26CKJ7, hs_x26CKJa) {
        var hs_sat26CKRb = new $hs.Thunk();
        hs_sat26CKRb.evaluateOnce = function () {
            var hs_sat26CKRc = new $hs.Thunk();
            hs_sat26CKRc.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26CKJ7, hs_sat26CKRc);
        };
        return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum26CKJ7, hs_sat26CKRb, hs_x26CKJa);
    };
    this.hs_zddmzm.evaluate = function (hs_zddNum26CKJe, hs_x26CKJf, hs_y26CKJg) {
        var hs_sat26CKRd = new $hs.Thunk();
        hs_sat26CKRd.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26CKJe, hs_y26CKJg);
        };
        return $hs.modules.GHCziNum.hs_zp.hscall(hs_zddNum26CKJe, hs_x26CKJf, hs_sat26CKRd);
    };
    this.hs_divModInt.evaluate = function (hs_x26CKJk, hs_y26CKJn) {
        var hs_wild26CKJq = hs_x26CKJk;
        if (hs_x26CKJk.notEvaluated) {
            hs_wild26CKJq = hs_x26CKJk.hscall();
        }
        var hs_wild126CKJr = hs_y26CKJn;
        if (hs_y26CKJn.notEvaluated) {
            hs_wild126CKJr = hs_y26CKJn.hscall();
        }
        var hs_sat26CKRh = new $hs.Thunk();
        hs_sat26CKRh.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_modInt.hscall(hs_wild26CKJq, hs_wild126CKJr);
        };
        var hs_sat26CKRe = new $hs.Thunk();
        hs_sat26CKRe.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_divInt.hscall(hs_wild26CKJq, hs_wild126CKJr);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKRe, hs_sat26CKRh];
        return $res;
    };
    this.hs_quotRemInt.evaluate = function (hs_a26CKJw, hs_b26CKJz) {
        var hs_wild26CKJC = hs_a26CKJw;
        if (hs_a26CKJw.notEvaluated) {
            hs_wild26CKJC = hs_a26CKJw.hscall();
        }
        var hs_wild126CKJD = hs_b26CKJz;
        if (hs_b26CKJz.notEvaluated) {
            hs_wild126CKJD = hs_b26CKJz.hscall();
        }
        var hs_sat26CKRl = new $hs.Thunk();
        hs_sat26CKRl.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_remInt.hscall(hs_wild26CKJC, hs_wild126CKJD);
        };
        var hs_sat26CKRi = new $hs.Thunk();
        hs_sat26CKRi.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_quotInt.hscall(hs_wild26CKJC, hs_wild126CKJD);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CKRi, hs_sat26CKRl];
        return $res;
    };
    this.hs_subtract.evaluate = function (hs_zddNum26CKJJ, hs_eta26CKJL, hs_eta126CKJK) {
        return $hs.modules.GHCziNum.hs_zm.hscall(hs_zddNum26CKJJ, hs_eta126CKJK, hs_eta26CKJL);
    };
    hs_zdcfromInteger25umdw.evaluate = function (hs_eta26CKJO) {
        var hs_wild26CKJQ = $hs.modules.GHCziInteger.hs_integerToInt.hscall(hs_eta26CKJO);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild26CKJQ];
        return $res;
    };
    hs_zdcsignum25umdB.evaluate = function (hs_n26CKJT) {
        var hs_sat26CKRn = new $hs.Data(1);
        hs_sat26CKRn.data = [0];
        var hs_wild26CKRo = $hs.modules.GHCziClasses.hs_ltInt.hscall(hs_n26CKJT, hs_sat26CKRn);
        switch (hs_wild26CKRo.tag) {
        case 1:
            var hs_sat26CKRp = new $hs.Data(1);
            hs_sat26CKRp.data = [0];
            var hs_wild126CKRq = $hs.modules.GHCziClasses.hs_eqInt.hscall(hs_n26CKJT, hs_sat26CKRp);
            switch (hs_wild126CKRq.tag) {
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
            var hs_sat26CKRm = new $hs.Data(1);
            hs_sat26CKRm.data = [1];
            return $hs.modules.GHCziBase.hs_negateInt.hscall(hs_sat26CKRm);
        }
    };
    hs_zdcabs25umdJ.evaluate = function (hs_n26CKK1) {
        var hs_sat26CKRr = new $hs.Data(1);
        hs_sat26CKRr.data = [0];
        var hs_wild26CKRs = $hs.modules.GHCziClasses.hs_geInt.hscall(hs_n26CKK1, hs_sat26CKRr);
        switch (hs_wild26CKRs.tag) {
        case 1:
            return $hs.modules.GHCziBase.hs_negateInt.hscall(hs_n26CKK1);
        case 2:
            if (hs_n26CKK1.notEvaluated) {
                return hs_n26CKK1.hscall();
            } else {
                return hs_n26CKK1;
            }
        }
    };
    this.hs_zdfNumInt.data = [$hs.modules.GHCziClasses.hs_zdfEqInt, $hs.modules.GHCziShow.hs_zdfShowInt, $hs.modules.GHCziBase.hs_plusInt, $hs.modules.GHCziBase.hs_timesInt, $hs.modules.GHCziBase.hs_minusInt, $hs.modules.GHCziBase.hs_negateInt, hs_zdcabs25umdJ, hs_zdcsignum25umdB, hs_zdcfromInteger25umdw];
    hs_zdcfromInteger125umdO.evaluate = function (hs_x26CKK6) {
        if (hs_x26CKK6.notEvaluated) {
            return hs_x26CKK6.hscall();
        } else {
            return hs_x26CKK6;
        }
    };
    hs_zdcfromEnum25umdR.evaluate = function (hs_n26CKK9) {
        var hs_wild26CKKb = $hs.modules.GHCziInteger.hs_integerToInt.hscall(hs_n26CKK9);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild26CKKb];
        return $res;
    };
    hs_zdctoEnum25umdW.evaluate = function (hs_ds26CKKe) {
        var hs_wild26CKRt = hs_ds26CKKe;
        if (hs_ds26CKKe.notEvaluated) {
            hs_wild26CKRt = hs_ds26CKKe.hscall();
        }
        var hs_n26CKKh = hs_wild26CKRt.data[0];
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_n26CKKh);
    };
    hs_sat26CKRv.evaluateOnce = function () {
        var hs_sat26CKRu = new $hs.Data(1);
        hs_sat26CKRu.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziNum.hs_zdfShowInteger, hs_sat26CKRu);
    };
    hs_zdcshowsPrec25ume2.evaluate = function (hs_p26CKKo, hs_n26CKKr, hs_r26CKKv) {
        var hs_sat26CKRx = new $hs.Thunk();
        hs_sat26CKRx.evaluateOnce = function () {
            var hs_sat26CKRE = new $hs.Thunk();
            hs_sat26CKRE.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26CKKr, hs_sat26CKRE);
        };
        var hs_sat26CKRy = new $hs.Thunk();
        hs_sat26CKRy.evaluateOnce = function () {
            var hs_sat26CKRD = new $hs.Data(1);
            hs_sat26CKRD.data = [6];
            return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_p26CKKo, hs_sat26CKRD);
        };
        var hs_wild26CKRz = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26CKRy, hs_sat26CKRx);
        switch (hs_wild26CKRz.tag) {
        case 1:
            return $hs.modules.GHCziNum.hs_integerToString.hscall(hs_n26CKKr, hs_r26CKKv);
        case 2:
            var hs_sat26CKRA = new $hs.Thunk();
            hs_sat26CKRA.evaluateOnce = function () {
                var hs_sat26CKRC = new $hs.Data(1);
                hs_sat26CKRC.data = [")"];
                var hs_sat26CKRB = new $hs.Data(2);
                hs_sat26CKRB.data = [hs_sat26CKRC, hs_r26CKKv];
                return $hs.modules.GHCziNum.hs_integerToString.hscall(hs_n26CKKr, hs_sat26CKRB);
            };
            var hs_sat26CKRw = new $hs.Data(1);
            hs_sat26CKRw.data = ["("];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26CKRw, hs_sat26CKRA];
            return $res;
        }
    };
    this.hs_zdfShowInteger.data = [hs_zdcshowsPrec25ume2, hs_zdcshow25ume4, hs_zdcshowList25ume3];
    hs_zdcshowList25ume3.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26CKRv);
    };
    hs_zdcshow25ume4.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziNum.hs_zdfShowInteger);
    };
    this.hs_zdfNumInteger.data = [$hs.modules.GHCziClasses.hs_zdfEqInteger, $hs.modules.GHCziNum.hs_zdfShowInteger, $hs.modules.GHCziInteger.hs_plusInteger, $hs.modules.GHCziInteger.hs_timesInteger, $hs.modules.GHCziInteger.hs_minusInteger, $hs.modules.GHCziInteger.hs_negateInteger, $hs.modules.GHCziInteger.hs_absInteger, $hs.modules.GHCziInteger.hs_signumInteger, hs_zdcfromInteger125umdO];
    this.hs_integerToString.evaluate = function (hs_n026CKNF, hs_cs026CKNI) {
        var hs_jblockzq26CKL6 = new $hs.Func(3);
        hs_jblockzq26CKL6.evaluate = function (hs_d26CKKS, hs_n26CKKJ, hs_cs26CKLe) {
            var hs_ds26CKKR = new $hs.Thunk();
            hs_ds26CKKR.evaluateOnce = function () {
                var hs_wild26CKKO = hs_n26CKKJ;
                if (hs_n26CKKJ.notEvaluated) {
                    hs_wild26CKKO = hs_n26CKKJ.hscall();
                }
                var hs_wild126CKKN = new $hs.Data(1);
                hs_wild126CKKN.data = [10];
                var hs_sat26CKT6 = new $hs.Thunk();
                hs_sat26CKT6.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_remInt.hscall(hs_wild26CKKO, hs_wild126CKKN);
                };
                var hs_sat26CKT4 = new $hs.Thunk();
                hs_sat26CKT4.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_quotInt.hscall(hs_wild26CKKO, hs_wild126CKKN);
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26CKT4, hs_sat26CKT6];
                return $res;
            };
            var hs_sat26CKSM = new $hs.Data(1);
            hs_sat26CKSM.data = [1];
            var hs_wild26CKSN = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_d26CKKS, hs_sat26CKSM);
            switch (hs_wild26CKSN.tag) {
            case 1:
                var hs_sat26CKSV = new $hs.Thunk();
                hs_sat26CKSV.evaluateOnce = function () {
                    var hs_sat26CKT0 = new $hs.Thunk();
                    hs_sat26CKT0.evaluateOnce = function () {
                        var hs_wild126CKT3 = hs_ds26CKKR;
                        if (hs_ds26CKKR.notEvaluated) {
                            hs_wild126CKT3 = hs_ds26CKKR.hscall();
                        }
                        var hs_r26CKL0 = hs_wild126CKT3.data[1];
                        if (hs_r26CKL0.notEvaluated) {
                            return hs_r26CKL0.hscall();
                        } else {
                            return hs_r26CKL0;
                        }
                    };
                    var hs_sat26CKSZ = new $hs.Thunk();
                    hs_sat26CKSZ.evaluateOnce = function () {
                        var hs_sat26CKT1 = new $hs.Data(1);
                        hs_sat26CKT1.data = ["0"];
                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26CKT1);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26CKSZ, hs_sat26CKT0);
                };
                var hs_wild126CKLd = $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26CKSV);
                var hs_sat26CKSS = new $hs.Data(2);
                hs_sat26CKSS.data = [hs_wild126CKLd, hs_cs26CKLe];
                var hs_sat26CKST = new $hs.Thunk();
                hs_sat26CKST.evaluateOnce = function () {
                    var hs_wild226CKSY = hs_ds26CKKR;
                    if (hs_ds26CKKR.notEvaluated) {
                        hs_wild226CKSY = hs_ds26CKKR.hscall();
                    }
                    var hs_q26CKLb = hs_wild226CKSY.data[0];
                    if (hs_q26CKLb.notEvaluated) {
                        return hs_q26CKLb.hscall();
                    } else {
                        return hs_q26CKLb;
                    }
                };
                var hs_sat26CKSR = new $hs.Thunk();
                hs_sat26CKSR.evaluateOnce = function () {
                    var hs_sat26CKSU = new $hs.Data(1);
                    hs_sat26CKSU.data = [1];
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_d26CKKS, hs_sat26CKSU);
                };
                return hs_jblockzq26CKL6.hscall(hs_sat26CKSR, hs_sat26CKST, hs_sat26CKSS);
            case 2:
                var hs_sat26CKSO = new $hs.Thunk();
                hs_sat26CKSO.evaluateOnce = function () {
                    var hs_sat26CKSP = new $hs.Thunk();
                    hs_sat26CKSP.evaluateOnce = function () {
                        var hs_sat26CKSQ = new $hs.Data(1);
                        hs_sat26CKSQ.data = ["0"];
                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26CKSQ);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26CKSP, hs_n26CKKJ);
                };
                var hs_wild126CKLl = $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26CKSO);
                var $res = new $hs.Data(2);
                $res.data = [hs_wild126CKLl, hs_cs26CKLe];
                return $res;
            }
        };
        var hs_a26CKLn = new $hs.Data(1);
        hs_a26CKLn.data = [9];
        var hs_jhead26CKLR = new $hs.Func(2);
        hs_jhead26CKLR.evaluate = function (hs_n26CKLs, hs_cs26CKLU) {
            var hs_ds26CKLA = new $hs.Thunk();
            hs_ds26CKLA.evaluateOnce = function () {
                var hs_wild26CKLx = hs_n26CKLs;
                if (hs_n26CKLs.notEvaluated) {
                    hs_wild26CKLx = hs_n26CKLs.hscall();
                }
                var hs_wild126CKLw = new $hs.Data(1);
                hs_wild126CKLw.data = [10];
                var hs_sat26CKSK = new $hs.Thunk();
                hs_sat26CKSK.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_remInt.hscall(hs_wild26CKLx, hs_wild126CKLw);
                };
                var hs_sat26CKSI = new $hs.Thunk();
                hs_sat26CKSI.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_quotInt.hscall(hs_wild26CKLx, hs_wild126CKLw);
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26CKSI, hs_sat26CKSK];
                return $res;
            };
            var hs_sat26CKSs = new $hs.Data(1);
            hs_sat26CKSs.data = [10];
            var hs_wild26CKSt = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_n26CKLs, hs_sat26CKSs);
            switch (hs_wild26CKSt.tag) {
            case 1:
                var hs_sat26CKSB = new $hs.Thunk();
                hs_sat26CKSB.evaluateOnce = function () {
                    var hs_sat26CKSE = new $hs.Thunk();
                    hs_sat26CKSE.evaluateOnce = function () {
                        var hs_wild126CKSH = hs_ds26CKLA;
                        if (hs_ds26CKLA.notEvaluated) {
                            hs_wild126CKSH = hs_ds26CKLA.hscall();
                        }
                        var hs_r26CKLI = hs_wild126CKSH.data[1];
                        if (hs_r26CKLI.notEvaluated) {
                            return hs_r26CKLI.hscall();
                        } else {
                            return hs_r26CKLI;
                        }
                    };
                    var hs_sat26CKSD = new $hs.Thunk();
                    hs_sat26CKSD.evaluateOnce = function () {
                        var hs_sat26CKSF = new $hs.Data(1);
                        hs_sat26CKSF.data = ["0"];
                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26CKSF);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26CKSD, hs_sat26CKSE);
                };
                var hs_wild126CKLT = $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26CKSB);
                var hs_sat26CKSy = new $hs.Data(2);
                hs_sat26CKSy.data = [hs_wild126CKLT, hs_cs26CKLU];
                var hs_sat26CKSx = new $hs.Thunk();
                hs_sat26CKSx.evaluateOnce = function () {
                    var hs_wild226CKSA = hs_ds26CKLA;
                    if (hs_ds26CKLA.notEvaluated) {
                        hs_wild226CKSA = hs_ds26CKLA.hscall();
                    }
                    var hs_q26CKLQ = hs_wild226CKSA.data[0];
                    if (hs_q26CKLQ.notEvaluated) {
                        return hs_q26CKLQ.hscall();
                    } else {
                        return hs_q26CKLQ;
                    }
                };
                return hs_jhead26CKLR.hscall(hs_sat26CKSx, hs_sat26CKSy);
            case 2:
                var hs_sat26CKSu = new $hs.Thunk();
                hs_sat26CKSu.evaluateOnce = function () {
                    var hs_sat26CKSv = new $hs.Thunk();
                    hs_sat26CKSv.evaluateOnce = function () {
                        var hs_sat26CKSw = new $hs.Data(1);
                        hs_sat26CKSw.data = ["0"];
                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26CKSw);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26CKSv, hs_n26CKLs);
                };
                var hs_wild126CKM1 = $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26CKSu);
                var $res = new $hs.Data(2);
                $res.data = [hs_wild126CKM1, hs_cs26CKLU];
                return $res;
            }
        };
        var hs_jprintb26CKMm = new $hs.Func(2);
        hs_jprintb26CKMm.evaluate = function (hs_ds26CKM5, hs_cs26CKM7) {
            var hs_wild26CKSj = hs_ds26CKM5;
            if (hs_ds26CKM5.notEvaluated) {
                hs_wild26CKSj = hs_ds26CKM5.hscall();
            }
            switch (hs_wild26CKSj.tag) {
            case 1:
                if (hs_cs26CKM7.notEvaluated) {
                    return hs_cs26CKM7.hscall();
                } else {
                    return hs_cs26CKM7;
                }
            case 2:
                var hs_n26CKMa = hs_wild26CKSj.data[0];
                var hs_ns26CKMl = hs_wild26CKSj.data[1];
                var hs_sat26CKSk = new $hs.Thunk();
                hs_sat26CKSk.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1000000000);
                };
                var hs_wild126CKSl = $hs.modules.GHCziInteger.hs_quotRemInteger.hscall(hs_n26CKMa, hs_sat26CKSk);
                var hs_qzq26CKMf = hs_wild126CKSl[0];
                var hs_rzq26CKMi = hs_wild126CKSl[1];
                var hs_sat26CKSm = new $hs.Thunk();
                hs_sat26CKSm.evaluateOnce = function () {
                    var hs_sat26CKSp = new $hs.Thunk();
                    hs_sat26CKSp.evaluateOnce = function () {
                        return hs_jprintb26CKMm.hscall(hs_ns26CKMl, hs_cs26CKM7);
                    };
                    var hs_sat26CKSq = new $hs.Thunk();
                    hs_sat26CKSq.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_rzq26CKMi);
                    };
                    var hs_sat26CKSo = new $hs.Func(1);
                    hs_sat26CKSo.evaluate = function (hs_eta1cW6l3) {
                        return hs_jblockzq26CKL6.hscall(hs_a26CKLn, hs_sat26CKSq, hs_eta1cW6l3);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CKSo, hs_sat26CKSp);
                };
                var hs_sat26CKSn = new $hs.Thunk();
                hs_sat26CKSn.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_qzq26CKMf);
                };
                var hs_sat26CKSi = new $hs.Func(1);
                hs_sat26CKSi.evaluate = function (hs_eta1cW6l3) {
                    return hs_jblockzq26CKL6.hscall(hs_a26CKLn, hs_sat26CKSn, hs_eta1cW6l3);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CKSi, hs_sat26CKSm);
            }
        };
        var hs_jsplitb26CKME = new $hs.Func(2);
        hs_jsplitb26CKME.evaluate = function (hs_ds26CKMx, hs_ds126CKMs) {
            var hs_wild26CKSf = hs_ds126CKMs;
            if (hs_ds126CKMs.notEvaluated) {
                hs_wild26CKSf = hs_ds126CKMs.hscall();
            }
            switch (hs_wild26CKSf.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_n26CKMw = hs_wild26CKSf.data[0];
                var hs_ns26CKMD = hs_wild26CKSf.data[1];
                var hs_wild126CKSg = $hs.modules.GHCziInteger.hs_quotRemInteger.hscall(hs_n26CKMw, hs_ds26CKMx);
                var hs_q26CKMB = hs_wild126CKSg[0];
                var hs_r26CKMC = hs_wild126CKSg[1];
                var hs_sat26CKSh = new $hs.Thunk();
                hs_sat26CKSh.evaluateOnce = function () {
                    return hs_jsplitb26CKME.hscall(hs_ds26CKMx, hs_ns26CKMD);
                };
                var hs_sat26CKSe = new $hs.Data(2);
                hs_sat26CKSe.data = [hs_r26CKMC, hs_sat26CKSh];
                var $res = new $hs.Data(2);
                $res.data = [hs_q26CKMB, hs_sat26CKSe];
                return $res;
            }
        };
        var hs_jsplitf26CKMN = new $hs.Func(2);
        hs_jsplitf26CKMN.evaluate = function (hs_p26CKMK, hs_n26CKML) {
            var hs_wild26CKRK = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_p26CKMK, hs_n26CKML);
            switch (hs_wild26CKRK.tag) {
            case 1:
                var hs_sat26CKRM = new $hs.Thunk();
                hs_sat26CKRM.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_p26CKMK, hs_p26CKMK);
                };
                var hs_wild126CKRN = hs_jsplitf26CKMN.hscall(hs_sat26CKRM, hs_n26CKML);
                switch (hs_wild126CKRN.tag) {
                case 1:
                    var hs_sat26CKRT = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("jsplith: []\x00");
                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CKRT);
                case 2:
                    var hs_n126CKMT = hs_wild126CKRN.data[0];
                    var hs_ns26CKN1 = hs_wild126CKRN.data[1];
                    var hs_wild226CKRO = $hs.modules.GHCziInteger.hs_quotRemInteger.hscall(hs_n126CKMT, hs_p26CKMK);
                    var hs_q26CKMX = hs_wild226CKRO[0];
                    var hs_r26CKN0 = hs_wild226CKRO[1];
                    var hs_sat26CKRP = new $hs.Thunk();
                    hs_sat26CKRP.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    var hs_wild326CKRQ = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_q26CKMX, hs_sat26CKRP);
                    switch (hs_wild326CKRQ.tag) {
                    case 1:
                        var hs_sat26CKRS = new $hs.Thunk();
                        hs_sat26CKRS.evaluateOnce = function () {
                            return hs_jsplitb26CKME.hscall(hs_p26CKMK, hs_ns26CKN1);
                        };
                        var $res = new $hs.Data(2);
                        $res.data = [hs_r26CKN0, hs_sat26CKRS];
                        return $res;
                    case 2:
                        var hs_sat26CKRR = new $hs.Thunk();
                        hs_sat26CKRR.evaluateOnce = function () {
                            return hs_jsplitb26CKME.hscall(hs_p26CKMK, hs_ns26CKN1);
                        };
                        var hs_sat26CKRL = new $hs.Data(2);
                        hs_sat26CKRL.data = [hs_r26CKN0, hs_sat26CKRR];
                        var $res = new $hs.Data(2);
                        $res.data = [hs_q26CKMX, hs_sat26CKRL];
                        return $res;
                    }
                }
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [hs_n26CKML, $hs.modules.GHCziTypes.hs_ZMZN];
                return $res;
            }
        };
        var hs_integerToStringzq26CKNE = new $hs.Func(2);
        hs_integerToStringzq26CKNE.evaluate = function (hs_n26CKN8, hs_cs26CKNw) {
            var hs_sat26CKRV = new $hs.Thunk();
            hs_sat26CKRV.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1000000000);
            };
            var hs_wild26CKRW = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26CKN8, hs_sat26CKRV);
            switch (hs_wild26CKRW.tag) {
            case 1:
                var hs_sat26CKRY = new $hs.Thunk();
                hs_sat26CKRY.evaluateOnce = function () {
                    var hs_sat26CKSd = new $hs.Thunk();
                    hs_sat26CKSd.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1000000000);
                    };
                    var hs_sat26CKSc = new $hs.Thunk();
                    hs_sat26CKSc.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1000000000);
                    };
                    return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26CKSc, hs_sat26CKSd);
                };
                var hs_wild126CKRZ = hs_jsplitf26CKMN.hscall(hs_sat26CKRY, hs_n26CKN8);
                switch (hs_wild126CKRZ.tag) {
                case 1:
                    var hs_sat26CKSb = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("jprinth []\x00");
                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CKSb);
                case 2:
                    var hs_n126CKNi = hs_wild126CKRZ.data[0];
                    var hs_ns26CKNv = hs_wild126CKRZ.data[1];
                    var hs_sat26CKS0 = new $hs.Thunk();
                    hs_sat26CKS0.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1000000000);
                    };
                    var hs_wild226CKS1 = $hs.modules.GHCziInteger.hs_quotRemInteger.hscall(hs_n126CKNi, hs_sat26CKS0);
                    var hs_qzq26CKNo = hs_wild226CKS1[0];
                    var hs_rzq26CKNs = hs_wild226CKS1[1];
                    var hs_q26CKNp = new $hs.Thunk();
                    hs_q26CKNp.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_qzq26CKNo);
                    };
                    var hs_sat26CKS2 = new $hs.Data(1);
                    hs_sat26CKS2.data = [0];
                    var hs_wild326CKS3 = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_q26CKNp, hs_sat26CKS2);
                    switch (hs_wild326CKS3.tag) {
                    case 1:
                        var hs_sat26CKS9 = new $hs.Thunk();
                        hs_sat26CKS9.evaluateOnce = function () {
                            return hs_jprintb26CKMm.hscall(hs_ns26CKNv, hs_cs26CKNw);
                        };
                        var hs_sat26CKSa = new $hs.Thunk();
                        hs_sat26CKSa.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_rzq26CKNs);
                        };
                        var hs_sat26CKS8 = new $hs.Func(1);
                        hs_sat26CKS8.evaluate = function (hs_eta1cW6l3) {
                            return hs_jhead26CKLR.hscall(hs_sat26CKSa, hs_eta1cW6l3);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CKS8, hs_sat26CKS9);
                    case 2:
                        var hs_sat26CKS4 = new $hs.Thunk();
                        hs_sat26CKS4.evaluateOnce = function () {
                            var hs_sat26CKS6 = new $hs.Thunk();
                            hs_sat26CKS6.evaluateOnce = function () {
                                return hs_jprintb26CKMm.hscall(hs_ns26CKNv, hs_cs26CKNw);
                            };
                            var hs_sat26CKS7 = new $hs.Thunk();
                            hs_sat26CKS7.evaluateOnce = function () {
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_rzq26CKNs);
                            };
                            var hs_sat26CKS5 = new $hs.Func(1);
                            hs_sat26CKS5.evaluate = function (hs_eta1cW6l3) {
                                return hs_jblockzq26CKL6.hscall(hs_a26CKLn, hs_sat26CKS7, hs_eta1cW6l3);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CKS5, hs_sat26CKS6);
                        };
                        var hs_sat26CKRX = new $hs.Func(1);
                        hs_sat26CKRX.evaluate = function (hs_eta1cW6l3) {
                            return hs_jhead26CKLR.hscall(hs_q26CKNp, hs_eta1cW6l3);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CKRX, hs_sat26CKS4);
                    }
                }
            case 2:
                var hs_sat26CKRU = new $hs.Thunk();
                hs_sat26CKRU.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26CKN8);
                };
                return hs_jhead26CKLR.hscall(hs_sat26CKRU, hs_cs26CKNw);
            }
        };
        var hs_sat26CKRG = new $hs.Thunk();
        hs_sat26CKRG.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_wild26CKRH = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n026CKNF, hs_sat26CKRG);
        switch (hs_wild26CKRH.tag) {
        case 1:
            return hs_integerToStringzq26CKNE.hscall(hs_n026CKNF, hs_cs026CKNI);
        case 2:
            var hs_sat26CKRI = new $hs.Thunk();
            hs_sat26CKRI.evaluateOnce = function () {
                var hs_sat26CKRJ = new $hs.Thunk();
                hs_sat26CKRJ.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_n026CKNF);
                };
                return hs_integerToStringzq26CKNE.hscall(hs_sat26CKRJ, hs_cs026CKNI);
            };
            var hs_sat26CKRF = new $hs.Data(1);
            hs_sat26CKRF.data = ["-"];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26CKRF, hs_sat26CKRI];
            return $res;
        }
    };
    hs_zdcsucc25umhw.evaluate = function (hs_x26CKNO) {
        var hs_sat26CKT7 = new $hs.Thunk();
        hs_sat26CKT7.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x26CKNO, hs_sat26CKT7);
    };
    hs_zdcpred25umhA.evaluate = function (hs_x26CKNS) {
        var hs_sat26CKT8 = new $hs.Thunk();
        hs_sat26CKT8.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x26CKNS, hs_sat26CKT8);
    };
    this.hs_upzufb.evaluate = function (hs_c26CKO7, hs_n26CKO9, hs_x026CKOa, hs_delta26CKO4, hs_lim26CKO2) {
        var hs_go26CKO5 = new $hs.Func(1);
        hs_go26CKO5.evaluate = function (hs_x26CKO1) {
            var hs_wild26CKT9 = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_x26CKO1, hs_lim26CKO2);
            switch (hs_wild26CKT9.tag) {
            case 1:
                var hs_sat26CKTa = new $hs.Thunk();
                hs_sat26CKTa.evaluateOnce = function () {
                    var hs_sat26CKTb = new $hs.Thunk();
                    hs_sat26CKTb.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x26CKO1, hs_delta26CKO4);
                    };
                    return hs_go26CKO5.hscall(hs_sat26CKTb);
                };
                return hs_c26CKO7.hscall(hs_x26CKO1, hs_sat26CKTa);
            case 2:
                if (hs_n26CKO9.notEvaluated) {
                    return hs_n26CKO9.hscall();
                } else {
                    return hs_n26CKO9;
                }
            }
        };
        return hs_go26CKO5.hscall(hs_x026CKOa);
    };
    this.hs_dnzufb.evaluate = function (hs_c26CKOo, hs_n26CKOq, hs_x026CKOr, hs_delta26CKOl, hs_lim26CKOj) {
        var hs_go26CKOm = new $hs.Func(1);
        hs_go26CKOm.evaluate = function (hs_x26CKOi) {
            var hs_wild26CKTc = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_x26CKOi, hs_lim26CKOj);
            switch (hs_wild26CKTc.tag) {
            case 1:
                var hs_sat26CKTd = new $hs.Thunk();
                hs_sat26CKTd.evaluateOnce = function () {
                    var hs_sat26CKTe = new $hs.Thunk();
                    hs_sat26CKTe.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x26CKOi, hs_delta26CKOl);
                    };
                    return hs_go26CKOm.hscall(hs_sat26CKTe);
                };
                return hs_c26CKOo.hscall(hs_x26CKOi, hs_sat26CKTd);
            case 2:
                if (hs_n26CKOq.notEvaluated) {
                    return hs_n26CKOq.hscall();
                } else {
                    return hs_n26CKOq;
                }
            }
        };
        return hs_go26CKOm.hscall(hs_x026CKOr);
    };
    this.hs_enumDeltaInteger.evaluate = function (hs_x26CKOu, hs_d26CKOx) {
        var hs_x126CKOw = hs_x26CKOu;
        if (hs_x26CKOu.notEvaluated) {
            hs_x126CKOw = hs_x26CKOu.hscall();
        }
        var hs_sat26CKTf = new $hs.Thunk();
        hs_sat26CKTf.evaluateOnce = function () {
            var hs_sat26CKTg = new $hs.Thunk();
            hs_sat26CKTg.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x126CKOw, hs_d26CKOx);
            };
            return $hs.modules.GHCziNum.hs_enumDeltaInteger.hscall(hs_sat26CKTg, hs_d26CKOx);
        };
        var $res = new $hs.Data(2);
        $res.data = [hs_x126CKOw, hs_sat26CKTf];
        return $res;
    };
    this.hs_enumDeltaIntegerFB.evaluate = function (hs_c26CKOG, hs_x26CKOD, hs_d26CKOH) {
        var hs_x126CKOF = hs_x26CKOD;
        if (hs_x26CKOD.notEvaluated) {
            hs_x126CKOF = hs_x26CKOD.hscall();
        }
        var hs_sat26CKTh = new $hs.Thunk();
        hs_sat26CKTh.evaluateOnce = function () {
            var hs_sat26CKTi = new $hs.Thunk();
            hs_sat26CKTi.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x126CKOF, hs_d26CKOH);
            };
            return $hs.modules.GHCziNum.hs_enumDeltaIntegerFB.hscall(hs_c26CKOG, hs_sat26CKTi, hs_d26CKOH);
        };
        return hs_c26CKOG.hscall(hs_x126CKOF, hs_sat26CKTh);
    };
    hs_zdcenumFrom25umiu.evaluate = function (hs_eta26CKOM) {
        var hs_sat26CKTj = new $hs.Thunk();
        hs_sat26CKTj.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_enumDeltaInteger.hscall(hs_eta26CKOM, hs_sat26CKTj);
    };
    hs_zdcenumFromThen25umiy.evaluate = function (hs_eta26CKOR, hs_eta126CKOS) {
        var hs_sat26CKTk = new $hs.Thunk();
        hs_sat26CKTk.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_eta126CKOS, hs_eta26CKOR);
        };
        return $hs.modules.GHCziNum.hs_enumDeltaInteger.hscall(hs_eta26CKOR, hs_sat26CKTk);
    };
    this.hs_upzulist.evaluate = function (hs_x026CKP6, hs_delta26CKP2, hs_lim26CKP0) {
        var hs_go26CKP3 = new $hs.Func(1);
        hs_go26CKP3.evaluate = function (hs_x26CKOZ) {
            var hs_wild26CKTl = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_x26CKOZ, hs_lim26CKP0);
            switch (hs_wild26CKTl.tag) {
            case 1:
                var hs_sat26CKTm = new $hs.Thunk();
                hs_sat26CKTm.evaluateOnce = function () {
                    var hs_sat26CKTn = new $hs.Thunk();
                    hs_sat26CKTn.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x26CKOZ, hs_delta26CKP2);
                    };
                    return hs_go26CKP3.hscall(hs_sat26CKTn);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_x26CKOZ, hs_sat26CKTm];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        };
        return hs_go26CKP3.hscall(hs_x026CKP6);
    };
    this.hs_dnzulist.evaluate = function (hs_x026CKPj, hs_delta26CKPf, hs_lim26CKPd) {
        var hs_go26CKPg = new $hs.Func(1);
        hs_go26CKPg.evaluate = function (hs_x26CKPc) {
            var hs_wild26CKTo = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_x26CKPc, hs_lim26CKPd);
            switch (hs_wild26CKTo.tag) {
            case 1:
                var hs_sat26CKTp = new $hs.Thunk();
                hs_sat26CKTp.evaluateOnce = function () {
                    var hs_sat26CKTq = new $hs.Thunk();
                    hs_sat26CKTq.evaluateOnce = function () {
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_x26CKPc, hs_delta26CKPf);
                    };
                    return hs_go26CKPg.hscall(hs_sat26CKTq);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_x26CKPc, hs_sat26CKTp];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        };
        return hs_go26CKPg.hscall(hs_x026CKPj);
    };
    this.hs_enumDeltaToInteger.evaluate = function (hs_x26CKPq, hs_delta26CKPn, hs_lim26CKPr) {
        var hs_sat26CKTr = new $hs.Thunk();
        hs_sat26CKTr.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_wild26CKTs = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_delta26CKPn, hs_sat26CKTr);
        switch (hs_wild26CKTs.tag) {
        case 1:
            return $hs.modules.GHCziNum.hs_dnzulist.hscall(hs_x26CKPq, hs_delta26CKPn, hs_lim26CKPr);
        case 2:
            return $hs.modules.GHCziNum.hs_upzulist.hscall(hs_x26CKPq, hs_delta26CKPn, hs_lim26CKPr);
        }
    };
    this.hs_enumDeltaToIntegerFB.evaluate = function (hs_c26CKPA, hs_n26CKPB, hs_x26CKPC, hs_delta26CKPx, hs_lim26CKPD) {
        var hs_sat26CKTt = new $hs.Thunk();
        hs_sat26CKTt.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_wild26CKTu = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_delta26CKPx, hs_sat26CKTt);
        switch (hs_wild26CKTu.tag) {
        case 1:
            return $hs.modules.GHCziNum.hs_dnzufb.hscall(hs_c26CKPA, hs_n26CKPB, hs_x26CKPC, hs_delta26CKPx, hs_lim26CKPD);
        case 2:
            return $hs.modules.GHCziNum.hs_upzufb.hscall(hs_c26CKPA, hs_n26CKPB, hs_x26CKPC, hs_delta26CKPx, hs_lim26CKPD);
        }
    };
    hs_zdcenumFromTo25umjo.evaluate = function (hs_eta26CKPH, hs_eta126CKPJ) {
        var hs_sat26CKTv = new $hs.Thunk();
        hs_sat26CKTv.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_enumDeltaToInteger.hscall(hs_eta26CKPH, hs_sat26CKTv, hs_eta126CKPJ);
    };
    hs_zdcenumFromThenTo25umju.evaluate = function (hs_eta26CKPO, hs_eta126CKPP, hs_eta226CKPR) {
        var hs_sat26CKTw = new $hs.Thunk();
        hs_sat26CKTw.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_eta126CKPP, hs_eta26CKPO);
        };
        return $hs.modules.GHCziNum.hs_enumDeltaToInteger.hscall(hs_eta26CKPO, hs_sat26CKTw, hs_eta226CKPR);
    };
    this.hs_zdfEnumInteger.data = [hs_zdcsucc25umhw, hs_zdcpred25umhA, hs_zdctoEnum25umdW, hs_zdcfromEnum25umdR, hs_zdcenumFrom25umiu, hs_zdcenumFromThen25umiy, hs_zdcenumFromTo25umjo, hs_zdcenumFromThenTo25umju];
    this.hs_DZCNum.evaluate = function (hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
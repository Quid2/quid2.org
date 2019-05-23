
$hs.modules.GHCziIntWord64 = new $hs.Module();
$hs.modules.GHCziIntWord64.dependencies = ["GHC.Prim"];
$hs.modules.GHCziIntWord64.initBeforeDependencies = function () {
    this.hs_eqWord64zh = new $hs.Func(2);
    this.hs_neWord64zh = new $hs.Func(2);
    this.hs_ltWord64zh = new $hs.Func(2);
    this.hs_leWord64zh = new $hs.Func(2);
    this.hs_gtWord64zh = new $hs.Func(2);
    this.hs_geWord64zh = new $hs.Func(2);
    this.hs_eqInt64zh = new $hs.Func(2);
    this.hs_neInt64zh = new $hs.Func(2);
    this.hs_ltInt64zh = new $hs.Func(2);
    this.hs_leInt64zh = new $hs.Func(2);
    this.hs_gtInt64zh = new $hs.Func(2);
    this.hs_geInt64zh = new $hs.Func(2);
    this.hs_quotInt64zh = new $hs.Func(2);
    this.hs_remInt64zh = new $hs.Func(2);
    this.hs_plusInt64zh = new $hs.Func(2);
    this.hs_minusInt64zh = new $hs.Func(2);
    this.hs_timesInt64zh = new $hs.Func(2);
    this.hs_negateInt64zh = new $hs.Func(1);
    this.hs_quotWord64zh = new $hs.Func(2);
    this.hs_remWord64zh = new $hs.Func(2);
    this.hs_and64zh = new $hs.Func(2);
    this.hs_or64zh = new $hs.Func(2);
    this.hs_xor64zh = new $hs.Func(2);
    this.hs_not64zh = new $hs.Func(1);
    this.hs_uncheckedShiftL64zh = new $hs.Func(2);
    this.hs_uncheckedShiftRL64zh = new $hs.Func(2);
    this.hs_uncheckedIShiftL64zh = new $hs.Func(2);
    this.hs_uncheckedIShiftRA64zh = new $hs.Func(2);
    this.hs_uncheckedIShiftRL64zh = new $hs.Func(2);
    this.hs_int64ToWord64zh = new $hs.Func(1);
    this.hs_word64ToInt64zh = new $hs.Func(1);
    this.hs_intToInt64zh = new $hs.Func(1);
    this.hs_int64ToIntzh = new $hs.Func(1);
    this.hs_wordToWord64zh = new $hs.Func(1);
    this.hs_word64ToWordzh = new $hs.Func(1);
    this.hs_eqWord64zh.notEvaluated = true;
    this.hs_eqWord64zh.evaluate = function (hs_ds26ztX6, hs_ds126ztX7) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26ztX6, hs_ds126ztX7);
    };
    this.hs_neWord64zh.notEvaluated = true;
    this.hs_neWord64zh.evaluate = function (hs_ds26ztXh, hs_ds126ztXi) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26ztXh, hs_ds126ztXi);
    };
    this.hs_ltWord64zh.notEvaluated = true;
    this.hs_ltWord64zh.evaluate = function (hs_ds26ztXs, hs_ds126ztXt) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26ztXs, hs_ds126ztXt);
    };
    this.hs_leWord64zh.notEvaluated = true;
    this.hs_leWord64zh.evaluate = function (hs_ds26ztXD, hs_ds126ztXE) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26ztXD, hs_ds126ztXE);
    };
    this.hs_gtWord64zh.notEvaluated = true;
    this.hs_gtWord64zh.evaluate = function (hs_ds26ztXO, hs_ds126ztXP) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26ztXO, hs_ds126ztXP);
    };
    this.hs_geWord64zh.notEvaluated = true;
    this.hs_geWord64zh.evaluate = function (hs_ds26ztXZ, hs_ds126ztY0) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26ztXZ, hs_ds126ztY0);
    };
    this.hs_eqInt64zh.notEvaluated = true;
    this.hs_eqInt64zh.evaluate = function (hs_ds26ztYa, hs_ds126ztYb) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26ztYa, hs_ds126ztYb);
    };
    this.hs_neInt64zh.notEvaluated = true;
    this.hs_neInt64zh.evaluate = function (hs_ds26ztYl, hs_ds126ztYm) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26ztYl, hs_ds126ztYm);
    };
    this.hs_ltInt64zh.notEvaluated = true;
    this.hs_ltInt64zh.evaluate = function (hs_ds26ztYw, hs_ds126ztYx) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26ztYw, hs_ds126ztYx);
    };
    this.hs_leInt64zh.notEvaluated = true;
    this.hs_leInt64zh.evaluate = function (hs_ds26ztYH, hs_ds126ztYI) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26ztYH, hs_ds126ztYI);
    };
    this.hs_gtInt64zh.notEvaluated = true;
    this.hs_gtInt64zh.evaluate = function (hs_ds26ztYS, hs_ds126ztYT) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26ztYS, hs_ds126ztYT);
    };
    this.hs_geInt64zh.notEvaluated = true;
    this.hs_geInt64zh.evaluate = function (hs_ds26ztZ3, hs_ds126ztZ4) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26ztZ3, hs_ds126ztZ4);
    };
    this.hs_quotInt64zh.notEvaluated = true;
    this.hs_quotInt64zh.evaluate = function (hs_ds26ztZe, hs_ds126ztZf) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26ztZe, hs_ds126ztZf);
    };
    this.hs_remInt64zh.notEvaluated = true;
    this.hs_remInt64zh.evaluate = function (hs_ds26ztZo, hs_ds126ztZp) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26ztZo, hs_ds126ztZp);
    };
    this.hs_plusInt64zh.notEvaluated = true;
    this.hs_plusInt64zh.evaluate = function (hs_ds26ztZy, hs_ds126ztZz) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26ztZy, hs_ds126ztZz);
    };
    this.hs_minusInt64zh.notEvaluated = true;
    this.hs_minusInt64zh.evaluate = function (hs_ds26ztZI, hs_ds126ztZJ) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26ztZI, hs_ds126ztZJ);
    };
    this.hs_timesInt64zh.notEvaluated = true;
    this.hs_timesInt64zh.evaluate = function (hs_ds26ztZS, hs_ds126ztZT) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26ztZS, hs_ds126ztZT);
    };
    this.hs_negateInt64zh.notEvaluated = true;
    this.hs_negateInt64zh.evaluate = function (hs_ds26zu01) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26zu01);
    };
    this.hs_quotWord64zh.notEvaluated = true;
    this.hs_quotWord64zh.evaluate = function (hs_ds26zu0a, hs_ds126zu0b) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26zu0a, hs_ds126zu0b);
    };
    this.hs_remWord64zh.notEvaluated = true;
    this.hs_remWord64zh.evaluate = function (hs_ds26zu0k, hs_ds126zu0l) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26zu0k, hs_ds126zu0l);
    };
    this.hs_and64zh.notEvaluated = true;
    this.hs_and64zh.evaluate = function (hs_ds26zu0u, hs_ds126zu0v) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26zu0u, hs_ds126zu0v);
    };
    this.hs_or64zh.notEvaluated = true;
    this.hs_or64zh.evaluate = function (hs_ds26zu0E, hs_ds126zu0F) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26zu0E, hs_ds126zu0F);
    };
    this.hs_xor64zh.notEvaluated = true;
    this.hs_xor64zh.evaluate = function (hs_ds26zu0O, hs_ds126zu0P) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26zu0O, hs_ds126zu0P);
    };
    this.hs_not64zh.notEvaluated = true;
    this.hs_not64zh.evaluate = function (hs_ds26zu0X) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26zu0X);
    };
    this.hs_uncheckedShiftL64zh.notEvaluated = true;
    this.hs_uncheckedShiftL64zh.evaluate = function (hs_ds26zu16, hs_ds126zu17) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26zu16, hs_ds126zu17);
    };
    this.hs_uncheckedShiftRL64zh.notEvaluated = true;
    this.hs_uncheckedShiftRL64zh.evaluate = function (hs_ds26zu1g, hs_ds126zu1h) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26zu1g, hs_ds126zu1h);
    };
    this.hs_uncheckedIShiftL64zh.notEvaluated = true;
    this.hs_uncheckedIShiftL64zh.evaluate = function (hs_ds26zu1q, hs_ds126zu1r) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26zu1q, hs_ds126zu1r);
    };
    this.hs_uncheckedIShiftRA64zh.notEvaluated = true;
    this.hs_uncheckedIShiftRA64zh.evaluate = function (hs_ds26zu1A, hs_ds126zu1B) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26zu1A, hs_ds126zu1B);
    };
    this.hs_uncheckedIShiftRL64zh.notEvaluated = true;
    this.hs_uncheckedIShiftRL64zh.evaluate = function (hs_ds26zu1K, hs_ds126zu1L) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26zu1K, hs_ds126zu1L);
    };
    this.hs_int64ToWord64zh.notEvaluated = true;
    this.hs_int64ToWord64zh.evaluate = function (hs_ds26zu1T) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26zu1T);
    };
    this.hs_word64ToInt64zh.notEvaluated = true;
    this.hs_word64ToInt64zh.evaluate = function (hs_ds26zu21) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26zu21);
    };
    this.hs_intToInt64zh.notEvaluated = true;
    this.hs_intToInt64zh.evaluate = function (hs_ds26zu29) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26zu29);
    };
    this.hs_int64ToIntzh.notEvaluated = true;
    this.hs_int64ToIntzh.evaluate = function (hs_ds26zu2h) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26zu2h);
    };
    this.hs_wordToWord64zh.notEvaluated = true;
    this.hs_wordToWord64zh.evaluate = function (hs_ds26zu2p) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26zu2p);
    };
    this.hs_word64ToWordzh.notEvaluated = true;
    this.hs_word64ToWordzh.evaluate = function (hs_ds26zu2x) {
        $hs.modules.GHCziIntWord64.loadDependencies();
        return this.evaluate(hs_ds26zu2x);
    };
};
$hs.modules.GHCziIntWord64.initAfterDependencies = function () {
    this.hs_eqWord64zh.notEvaluated = false;
    this.hs_neWord64zh.notEvaluated = false;
    this.hs_ltWord64zh.notEvaluated = false;
    this.hs_leWord64zh.notEvaluated = false;
    this.hs_gtWord64zh.notEvaluated = false;
    this.hs_geWord64zh.notEvaluated = false;
    this.hs_eqInt64zh.notEvaluated = false;
    this.hs_neInt64zh.notEvaluated = false;
    this.hs_ltInt64zh.notEvaluated = false;
    this.hs_leInt64zh.notEvaluated = false;
    this.hs_gtInt64zh.notEvaluated = false;
    this.hs_geInt64zh.notEvaluated = false;
    this.hs_quotInt64zh.notEvaluated = false;
    this.hs_remInt64zh.notEvaluated = false;
    this.hs_plusInt64zh.notEvaluated = false;
    this.hs_minusInt64zh.notEvaluated = false;
    this.hs_timesInt64zh.notEvaluated = false;
    this.hs_negateInt64zh.notEvaluated = false;
    this.hs_quotWord64zh.notEvaluated = false;
    this.hs_remWord64zh.notEvaluated = false;
    this.hs_and64zh.notEvaluated = false;
    this.hs_or64zh.notEvaluated = false;
    this.hs_xor64zh.notEvaluated = false;
    this.hs_not64zh.notEvaluated = false;
    this.hs_uncheckedShiftL64zh.notEvaluated = false;
    this.hs_uncheckedShiftRL64zh.notEvaluated = false;
    this.hs_uncheckedIShiftL64zh.notEvaluated = false;
    this.hs_uncheckedIShiftRA64zh.notEvaluated = false;
    this.hs_uncheckedIShiftRL64zh.notEvaluated = false;
    this.hs_int64ToWord64zh.notEvaluated = false;
    this.hs_word64ToInt64zh.notEvaluated = false;
    this.hs_intToInt64zh.notEvaluated = false;
    this.hs_int64ToIntzh.notEvaluated = false;
    this.hs_wordToWord64zh.notEvaluated = false;
    this.hs_word64ToWordzh.notEvaluated = false;
    this.hs_eqWord64zh.evaluate = function (hs_ds26ztX6, hs_ds126ztX7) {
        var hs_wild26zu2F = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_eqWord64(hs_ds26ztX6, hs_ds126ztX7)];
        var hs_ds326ztXc = hs_wild26zu2F[1];
        var hs_wild126zu2D = hs_ds326ztXc;
        if (hs_ds326ztXc.notEvaluated) {
            hs_wild126zu2D = hs_ds326ztXc.hscall();
        }
        switch (hs_wild126zu2D) {
        case 0:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    this.hs_neWord64zh.evaluate = function (hs_ds26ztXh, hs_ds126ztXi) {
        var hs_wild26zu2I = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_neWord64(hs_ds26ztXh, hs_ds126ztXi)];
        var hs_ds326ztXn = hs_wild26zu2I[1];
        var hs_wild126zu2G = hs_ds326ztXn;
        if (hs_ds326ztXn.notEvaluated) {
            hs_wild126zu2G = hs_ds326ztXn.hscall();
        }
        switch (hs_wild126zu2G) {
        case 0:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    this.hs_ltWord64zh.evaluate = function (hs_ds26ztXs, hs_ds126ztXt) {
        var hs_wild26zu2L = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_ltWord64(hs_ds26ztXs, hs_ds126ztXt)];
        var hs_ds326ztXy = hs_wild26zu2L[1];
        var hs_wild126zu2J = hs_ds326ztXy;
        if (hs_ds326ztXy.notEvaluated) {
            hs_wild126zu2J = hs_ds326ztXy.hscall();
        }
        switch (hs_wild126zu2J) {
        case 0:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    this.hs_leWord64zh.evaluate = function (hs_ds26ztXD, hs_ds126ztXE) {
        var hs_wild26zu2O = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_leWord64(hs_ds26ztXD, hs_ds126ztXE)];
        var hs_ds326ztXJ = hs_wild26zu2O[1];
        var hs_wild126zu2M = hs_ds326ztXJ;
        if (hs_ds326ztXJ.notEvaluated) {
            hs_wild126zu2M = hs_ds326ztXJ.hscall();
        }
        switch (hs_wild126zu2M) {
        case 0:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    this.hs_gtWord64zh.evaluate = function (hs_ds26ztXO, hs_ds126ztXP) {
        var hs_wild26zu2R = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_gtWord64(hs_ds26ztXO, hs_ds126ztXP)];
        var hs_ds326ztXU = hs_wild26zu2R[1];
        var hs_wild126zu2P = hs_ds326ztXU;
        if (hs_ds326ztXU.notEvaluated) {
            hs_wild126zu2P = hs_ds326ztXU.hscall();
        }
        switch (hs_wild126zu2P) {
        case 0:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    this.hs_geWord64zh.evaluate = function (hs_ds26ztXZ, hs_ds126ztY0) {
        var hs_wild26zu2U = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_geWord64(hs_ds26ztXZ, hs_ds126ztY0)];
        var hs_ds326ztY5 = hs_wild26zu2U[1];
        var hs_wild126zu2S = hs_ds326ztY5;
        if (hs_ds326ztY5.notEvaluated) {
            hs_wild126zu2S = hs_ds326ztY5.hscall();
        }
        switch (hs_wild126zu2S) {
        case 0:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    this.hs_eqInt64zh.evaluate = function (hs_ds26ztYa, hs_ds126ztYb) {
        var hs_wild26zu2X = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_eqInt64(hs_ds26ztYa, hs_ds126ztYb)];
        var hs_ds326ztYg = hs_wild26zu2X[1];
        var hs_wild126zu2V = hs_ds326ztYg;
        if (hs_ds326ztYg.notEvaluated) {
            hs_wild126zu2V = hs_ds326ztYg.hscall();
        }
        switch (hs_wild126zu2V) {
        case 0:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    this.hs_neInt64zh.evaluate = function (hs_ds26ztYl, hs_ds126ztYm) {
        var hs_wild26zu30 = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_neInt64(hs_ds26ztYl, hs_ds126ztYm)];
        var hs_ds326ztYr = hs_wild26zu30[1];
        var hs_wild126zu2Y = hs_ds326ztYr;
        if (hs_ds326ztYr.notEvaluated) {
            hs_wild126zu2Y = hs_ds326ztYr.hscall();
        }
        switch (hs_wild126zu2Y) {
        case 0:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    this.hs_ltInt64zh.evaluate = function (hs_ds26ztYw, hs_ds126ztYx) {
        var hs_wild26zu33 = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_ltInt64(hs_ds26ztYw, hs_ds126ztYx)];
        var hs_ds326ztYC = hs_wild26zu33[1];
        var hs_wild126zu31 = hs_ds326ztYC;
        if (hs_ds326ztYC.notEvaluated) {
            hs_wild126zu31 = hs_ds326ztYC.hscall();
        }
        switch (hs_wild126zu31) {
        case 0:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    this.hs_leInt64zh.evaluate = function (hs_ds26ztYH, hs_ds126ztYI) {
        var hs_wild26zu36 = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_leInt64(hs_ds26ztYH, hs_ds126ztYI)];
        var hs_ds326ztYN = hs_wild26zu36[1];
        var hs_wild126zu34 = hs_ds326ztYN;
        if (hs_ds326ztYN.notEvaluated) {
            hs_wild126zu34 = hs_ds326ztYN.hscall();
        }
        switch (hs_wild126zu34) {
        case 0:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    this.hs_gtInt64zh.evaluate = function (hs_ds26ztYS, hs_ds126ztYT) {
        var hs_wild26zu39 = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_gtInt64(hs_ds26ztYS, hs_ds126ztYT)];
        var hs_ds326ztYY = hs_wild26zu39[1];
        var hs_wild126zu37 = hs_ds326ztYY;
        if (hs_ds326ztYY.notEvaluated) {
            hs_wild126zu37 = hs_ds326ztYY.hscall();
        }
        switch (hs_wild126zu37) {
        case 0:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    this.hs_geInt64zh.evaluate = function (hs_ds26ztZ3, hs_ds126ztZ4) {
        var hs_wild26zu3c = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_geInt64(hs_ds26ztZ3, hs_ds126ztZ4)];
        var hs_ds326ztZ9 = hs_wild26zu3c[1];
        var hs_wild126zu3a = hs_ds326ztZ9;
        if (hs_ds326ztZ9.notEvaluated) {
            hs_wild126zu3a = hs_ds326ztZ9.hscall();
        }
        switch (hs_wild126zu3a) {
        case 0:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    this.hs_quotInt64zh.evaluate = function (hs_ds26ztZe, hs_ds126ztZf) {
        var hs_wild26zu3e = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_quotInt64(hs_ds26ztZe, hs_ds126ztZf)];
        var hs_ds326ztZk = hs_wild26zu3e[1];
        if (hs_ds326ztZk.notEvaluated) {
            return hs_ds326ztZk.hscall();
        } else {
            return hs_ds326ztZk;
        }
    };
    this.hs_remInt64zh.evaluate = function (hs_ds26ztZo, hs_ds126ztZp) {
        var hs_wild26zu3g = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_remInt64(hs_ds26ztZo, hs_ds126ztZp)];
        var hs_ds326ztZu = hs_wild26zu3g[1];
        if (hs_ds326ztZu.notEvaluated) {
            return hs_ds326ztZu.hscall();
        } else {
            return hs_ds326ztZu;
        }
    };
    this.hs_plusInt64zh.evaluate = function (hs_ds26ztZy, hs_ds126ztZz) {
        var hs_wild26zu3i = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_plusInt64(hs_ds26ztZy, hs_ds126ztZz)];
        var hs_ds326ztZE = hs_wild26zu3i[1];
        if (hs_ds326ztZE.notEvaluated) {
            return hs_ds326ztZE.hscall();
        } else {
            return hs_ds326ztZE;
        }
    };
    this.hs_minusInt64zh.evaluate = function (hs_ds26ztZI, hs_ds126ztZJ) {
        var hs_wild26zu3k = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_minusInt64(hs_ds26ztZI, hs_ds126ztZJ)];
        var hs_ds326ztZO = hs_wild26zu3k[1];
        if (hs_ds326ztZO.notEvaluated) {
            return hs_ds326ztZO.hscall();
        } else {
            return hs_ds326ztZO;
        }
    };
    this.hs_timesInt64zh.evaluate = function (hs_ds26ztZS, hs_ds126ztZT) {
        var hs_wild26zu3m = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_timesInt64(hs_ds26ztZS, hs_ds126ztZT)];
        var hs_ds326ztZY = hs_wild26zu3m[1];
        if (hs_ds326ztZY.notEvaluated) {
            return hs_ds326ztZY.hscall();
        } else {
            return hs_ds326ztZY;
        }
    };
    this.hs_negateInt64zh.evaluate = function (hs_ds26zu01) {
        var hs_wild26zu3o = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_negateInt64(hs_ds26zu01)];
        var hs_ds226zu06 = hs_wild26zu3o[1];
        if (hs_ds226zu06.notEvaluated) {
            return hs_ds226zu06.hscall();
        } else {
            return hs_ds226zu06;
        }
    };
    this.hs_quotWord64zh.evaluate = function (hs_ds26zu0a, hs_ds126zu0b) {
        var hs_wild26zu3q = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_quotWord64(hs_ds26zu0a, hs_ds126zu0b)];
        var hs_ds326zu0g = hs_wild26zu3q[1];
        if (hs_ds326zu0g.notEvaluated) {
            return hs_ds326zu0g.hscall();
        } else {
            return hs_ds326zu0g;
        }
    };
    this.hs_remWord64zh.evaluate = function (hs_ds26zu0k, hs_ds126zu0l) {
        var hs_wild26zu3s = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_remWord64(hs_ds26zu0k, hs_ds126zu0l)];
        var hs_ds326zu0q = hs_wild26zu3s[1];
        if (hs_ds326zu0q.notEvaluated) {
            return hs_ds326zu0q.hscall();
        } else {
            return hs_ds326zu0q;
        }
    };
    this.hs_and64zh.evaluate = function (hs_ds26zu0u, hs_ds126zu0v) {
        var hs_wild26zu3u = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_and64(hs_ds26zu0u, hs_ds126zu0v)];
        var hs_ds326zu0A = hs_wild26zu3u[1];
        if (hs_ds326zu0A.notEvaluated) {
            return hs_ds326zu0A.hscall();
        } else {
            return hs_ds326zu0A;
        }
    };
    this.hs_or64zh.evaluate = function (hs_ds26zu0E, hs_ds126zu0F) {
        var hs_wild26zu3w = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_or64(hs_ds26zu0E, hs_ds126zu0F)];
        var hs_ds326zu0K = hs_wild26zu3w[1];
        if (hs_ds326zu0K.notEvaluated) {
            return hs_ds326zu0K.hscall();
        } else {
            return hs_ds326zu0K;
        }
    };
    this.hs_xor64zh.evaluate = function (hs_ds26zu0O, hs_ds126zu0P) {
        var hs_wild26zu3y = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_xor64(hs_ds26zu0O, hs_ds126zu0P)];
        var hs_ds326zu0U = hs_wild26zu3y[1];
        if (hs_ds326zu0U.notEvaluated) {
            return hs_ds326zu0U.hscall();
        } else {
            return hs_ds326zu0U;
        }
    };
    this.hs_not64zh.evaluate = function (hs_ds26zu0X) {
        var hs_wild26zu3A = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_not64(hs_ds26zu0X)];
        var hs_ds226zu12 = hs_wild26zu3A[1];
        if (hs_ds226zu12.notEvaluated) {
            return hs_ds226zu12.hscall();
        } else {
            return hs_ds226zu12;
        }
    };
    this.hs_uncheckedShiftL64zh.evaluate = function (hs_ds26zu16, hs_ds126zu17) {
        var hs_wild26zu3C = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_uncheckedShiftL64(hs_ds26zu16, hs_ds126zu17)];
        var hs_ds326zu1c = hs_wild26zu3C[1];
        if (hs_ds326zu1c.notEvaluated) {
            return hs_ds326zu1c.hscall();
        } else {
            return hs_ds326zu1c;
        }
    };
    this.hs_uncheckedShiftRL64zh.evaluate = function (hs_ds26zu1g, hs_ds126zu1h) {
        var hs_wild26zu3E = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_uncheckedShiftRL64(hs_ds26zu1g, hs_ds126zu1h)];
        var hs_ds326zu1m = hs_wild26zu3E[1];
        if (hs_ds326zu1m.notEvaluated) {
            return hs_ds326zu1m.hscall();
        } else {
            return hs_ds326zu1m;
        }
    };
    this.hs_uncheckedIShiftL64zh.evaluate = function (hs_ds26zu1q, hs_ds126zu1r) {
        var hs_wild26zu3G = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_uncheckedIShiftL64(hs_ds26zu1q, hs_ds126zu1r)];
        var hs_ds326zu1w = hs_wild26zu3G[1];
        if (hs_ds326zu1w.notEvaluated) {
            return hs_ds326zu1w.hscall();
        } else {
            return hs_ds326zu1w;
        }
    };
    this.hs_uncheckedIShiftRA64zh.evaluate = function (hs_ds26zu1A, hs_ds126zu1B) {
        var hs_wild26zu3I = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_uncheckedIShiftRA64(hs_ds26zu1A, hs_ds126zu1B)];
        var hs_ds326zu1G = hs_wild26zu3I[1];
        if (hs_ds326zu1G.notEvaluated) {
            return hs_ds326zu1G.hscall();
        } else {
            return hs_ds326zu1G;
        }
    };
    this.hs_uncheckedIShiftRL64zh.evaluate = function (hs_ds26zu1K, hs_ds126zu1L) {
        var hs_wild26zu3K = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_uncheckedIShiftRL64(hs_ds26zu1K, hs_ds126zu1L)];
        var hs_ds326zu1Q = hs_wild26zu3K[1];
        if (hs_ds326zu1Q.notEvaluated) {
            return hs_ds326zu1Q.hscall();
        } else {
            return hs_ds326zu1Q;
        }
    };
    this.hs_int64ToWord64zh.evaluate = function (hs_ds26zu1T) {
        var hs_wild26zu3M = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_int64ToWord64(hs_ds26zu1T)];
        var hs_ds226zu1Y = hs_wild26zu3M[1];
        if (hs_ds226zu1Y.notEvaluated) {
            return hs_ds226zu1Y.hscall();
        } else {
            return hs_ds226zu1Y;
        }
    };
    this.hs_word64ToInt64zh.evaluate = function (hs_ds26zu21) {
        var hs_wild26zu3O = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_word64ToInt64(hs_ds26zu21)];
        var hs_ds226zu26 = hs_wild26zu3O[1];
        if (hs_ds226zu26.notEvaluated) {
            return hs_ds226zu26.hscall();
        } else {
            return hs_ds226zu26;
        }
    };
    this.hs_intToInt64zh.evaluate = function (hs_ds26zu29) {
        var hs_wild26zu3Q = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_intToInt64(hs_ds26zu29)];
        var hs_ds226zu2e = hs_wild26zu3Q[1];
        if (hs_ds226zu2e.notEvaluated) {
            return hs_ds226zu2e.hscall();
        } else {
            return hs_ds226zu2e;
        }
    };
    this.hs_int64ToIntzh.evaluate = function (hs_ds26zu2h) {
        var hs_wild26zu3S = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_int64ToInt(hs_ds26zu2h)];
        var hs_ds226zu2m = hs_wild26zu3S[1];
        if (hs_ds226zu2m.notEvaluated) {
            return hs_ds226zu2m.hscall();
        } else {
            return hs_ds226zu2m;
        }
    };
    this.hs_wordToWord64zh.evaluate = function (hs_ds26zu2p) {
        var hs_wild26zu3U = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_wordToWord64(hs_ds26zu2p)];
        var hs_ds226zu2u = hs_wild26zu3U[1];
        if (hs_ds226zu2u.notEvaluated) {
            return hs_ds226zu2u.hscall();
        } else {
            return hs_ds226zu2u;
        }
    };
    this.hs_word64ToWordzh.evaluate = function (hs_ds26zu2x) {
        var hs_wild26zu3W = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_word64ToWord(hs_ds26zu2x)];
        var hs_ds226zu2C = hs_wild26zu3W[1];
        if (hs_ds226zu2C.notEvaluated) {
            return hs_ds226zu2C.hscall();
        } else {
            return hs_ds226zu2C;
        }
    };
};
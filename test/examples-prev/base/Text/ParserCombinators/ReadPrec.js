
$hs.modules.TextziParserCombinatorsziReadPrec = new $hs.Module();
$hs.modules.TextziParserCombinatorsziReadPrec.dependencies = ["GHC.Base", "GHC.Num", "GHC.Classes", "Text.ParserCombinators.ReadP"];
$hs.modules.TextziParserCombinatorsziReadPrec.initBeforeDependencies = function () {
    this.hs_readSzutozuPrec = new $hs.Func(2);
    this.hs_readPreczutozuS = new $hs.Func(2);
    this.hs_readPzutozuPrec = new $hs.Func(1);
    this.hs_readPreczutozuP = new $hs.Func(1);
    this.hs_zlzpzp = new $hs.Func(3);
    this.hs_zpzpzp = new $hs.Func(3);
    this.hs_prec = new $hs.Func(3);
    this.hs_step = new $hs.Func(2);
    this.hs_lift = new $hs.Func(2);
    this.hs_get = new $hs.Func(1);
    this.hs_look = new $hs.Func(1);
    this.hs_pfail = new $hs.Func(1);
    this.hs_choice = new $hs.Func(1);
    this.hs_minPrec = new $hs.Data(1);
    this.hs_reset = new $hs.Func(2);
    this.hs_zdfFunctorReadPrec = new $hs.Data(1);
    this.hs_zdfMonadReadPrec = new $hs.Data(1);
    this.hs_zdfMonadPlusReadPrec = new $hs.Data(1);
    this.hs_P = new $hs.Func(1);
    this.hs_readSzutozuPrec.notEvaluated = true;
    this.hs_readSzutozuPrec.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadPrec.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_readPreczutozuS.notEvaluated = true;
    this.hs_readPreczutozuS.evaluate = function (hs_ds26DQ0o, hs_n26DQ0n) {
        $hs.modules.TextziParserCombinatorsziReadPrec.loadDependencies();
        return this.evaluate(hs_ds26DQ0o, hs_n26DQ0n);
    };
    this.hs_readPzutozuPrec.notEvaluated = true;
    this.hs_readPzutozuPrec.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadPrec.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_readPreczutozuP.notEvaluated = true;
    this.hs_readPreczutozuP.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadPrec.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_zlzpzp.notEvaluated = true;
    this.hs_zlzpzp.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadPrec.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zpzpzp.notEvaluated = true;
    this.hs_zpzpzp.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadPrec.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_prec.notEvaluated = true;
    this.hs_prec.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadPrec.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_step.notEvaluated = true;
    this.hs_step.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadPrec.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_lift.notEvaluated = true;
    this.hs_lift.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadPrec.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_get.notEvaluated = true;
    this.hs_get.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadPrec.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_look.notEvaluated = true;
    this.hs_look.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadPrec.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_pfail.notEvaluated = true;
    this.hs_pfail.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadPrec.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_choice.notEvaluated = true;
    this.hs_choice.evaluate = function (hs_ps26DQ1s) {
        $hs.modules.TextziParserCombinatorsziReadPrec.loadDependencies();
        return this.evaluate(hs_ps26DQ1s);
    };
    this.hs_minPrec.notEvaluated = true;
    this.hs_minPrec.evaluate = function () {
        $hs.modules.TextziParserCombinatorsziReadPrec.loadDependencies();
        return this;
    };
    this.hs_reset.notEvaluated = true;
    this.hs_reset.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadPrec.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfFunctorReadPrec.notEvaluated = true;
    this.hs_zdfFunctorReadPrec.evaluate = function () {
        $hs.modules.TextziParserCombinatorsziReadPrec.loadDependencies();
        return this;
    };
    this.hs_zdfMonadReadPrec.notEvaluated = true;
    this.hs_zdfMonadReadPrec.evaluate = function () {
        $hs.modules.TextziParserCombinatorsziReadPrec.loadDependencies();
        return this;
    };
    this.hs_zdfMonadPlusReadPrec.notEvaluated = true;
    this.hs_zdfMonadPlusReadPrec.evaluate = function () {
        $hs.modules.TextziParserCombinatorsziReadPrec.loadDependencies();
        return this;
    };
    this.hs_P.notEvaluated = true;
    this.hs_P.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadPrec.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.TextziParserCombinatorsziReadPrec.initAfterDependencies = function () {
    this.hs_readSzutozuPrec.notEvaluated = false;
    this.hs_readPreczutozuS.notEvaluated = false;
    this.hs_readPzutozuPrec.notEvaluated = false;
    this.hs_readPreczutozuP.notEvaluated = false;
    this.hs_zlzpzp.notEvaluated = false;
    this.hs_zpzpzp.notEvaluated = false;
    this.hs_prec.notEvaluated = false;
    this.hs_step.notEvaluated = false;
    this.hs_lift.notEvaluated = false;
    this.hs_get.notEvaluated = false;
    this.hs_look.notEvaluated = false;
    this.hs_pfail.notEvaluated = false;
    this.hs_choice.notEvaluated = false;
    this.hs_minPrec.notEvaluated = false;
    this.hs_minPrec.evaluate = function () {
        return this;
    };
    this.hs_reset.notEvaluated = false;
    this.hs_zdfFunctorReadPrec.notEvaluated = false;
    this.hs_zdfFunctorReadPrec.evaluate = function () {
        return this;
    };
    this.hs_zdfMonadReadPrec.notEvaluated = false;
    this.hs_zdfMonadReadPrec.evaluate = function () {
        return this;
    };
    this.hs_zdfMonadPlusReadPrec.notEvaluated = false;
    this.hs_zdfMonadPlusReadPrec.evaluate = function () {
        return this;
    };
    this.hs_P.notEvaluated = false;
    var hs_a25vrtZ = new $hs.Func(2);
    var hs_a125vrub = new $hs.Func(1);
    var hs_a225vruf = new $hs.Func(1);
    var hs_a325vruj = new $hs.Func(3);
    var hs_a425vrut = new $hs.Func(3);
    var hs_a525vruD = new $hs.Func(3);
    var hs_a625vruM = new $hs.Func(2);
    var hs_a725vruU = new $hs.Func(2);
    var hs_a825vrv0 = new $hs.Func(1);
    var hs_a925vrv4 = new $hs.Func(1);
    var hs_a1025vrv8 = new $hs.Func(1);
    var hs_a1125vrve = new $hs.Func(2);
    var hs_a1225vrvk = new $hs.Func(3);
    var hs_zdcfmap25vrvt = new $hs.Func(3);
    var hs_zdczlzd25vrvv = new $hs.Thunk();
    var hs_a1325vrvx = new $hs.Func(2);
    var hs_zdcfail25vrvD = new $hs.Func(2);
    var hs_a1425vrvF = new $hs.Func(2);
    var hs_zdcreturn25vrvL = new $hs.Func(2);
    var hs_a1525vrvN = new $hs.Func(3);
    var hs_zdczgzgze25vrvZ = new $hs.Func(3);
    var hs_zdczgzg25vrw1 = new $hs.Thunk();
    hs_a25vrtZ.evaluate = function (hs_f26DQ0j, hs_n26DQ0i) {
        var hs_sat26DQ2i = new $hs.Thunk();
        hs_sat26DQ2i.evaluateOnce = function () {
            return hs_f26DQ0j.hscall(hs_n26DQ0i);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_readSzutozuP.hscall(hs_sat26DQ2i);
    };
    this.hs_readSzutozuPrec.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a25vrtZ.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_readPreczutozuS.evaluate = function (hs_ds26DQ0o, hs_n26DQ0n) {
        var hs_sat26DQ2j = new $hs.Thunk();
        hs_sat26DQ2j.evaluateOnce = function () {
            return hs_ds26DQ0o.hscall(hs_n26DQ0n);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_readPzutozuS.hscall(hs_sat26DQ2j);
    };
    hs_a125vrub.evaluate = function (hs_tpl26DQ0t) {
        if (hs_tpl26DQ0t.notEvaluated) {
            return hs_tpl26DQ0t.hscall();
        } else {
            return hs_tpl26DQ0t;
        }
    };
    this.hs_readPzutozuPrec.evaluate = function (hs_eta1cW6l3) {
        return hs_a125vrub.hscall(hs_eta1cW6l3);
    };
    hs_a225vruf.evaluate = function (hs_ds26DQ0x) {
        if (hs_ds26DQ0x.notEvaluated) {
            return hs_ds26DQ0x.hscall();
        } else {
            return hs_ds26DQ0x;
        }
    };
    this.hs_readPreczutozuP.evaluate = function (hs_eta1cW6l3) {
        return hs_a225vruf.hscall(hs_eta1cW6l3);
    };
    hs_a325vruj.evaluate = function (hs_ds26DQ0E, hs_ds126DQ0G, hs_n26DQ0D) {
        var hs_sat26DQ2k = new $hs.Thunk();
        hs_sat26DQ2k.evaluateOnce = function () {
            return hs_ds126DQ0G.hscall(hs_n26DQ0D);
        };
        var hs_sat26DQ2l = new $hs.Thunk();
        hs_sat26DQ2l.evaluateOnce = function () {
            return hs_ds26DQ0E.hscall(hs_n26DQ0D);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_zlzpzp.hscall(hs_sat26DQ2l, hs_sat26DQ2k);
    };
    this.hs_zlzpzp.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a325vruj.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a425vrut.evaluate = function (hs_ds26DQ0O, hs_ds126DQ0Q, hs_n26DQ0N) {
        var hs_sat26DQ2m = new $hs.Thunk();
        hs_sat26DQ2m.evaluateOnce = function () {
            return hs_ds126DQ0Q.hscall(hs_n26DQ0N);
        };
        var hs_sat26DQ2n = new $hs.Thunk();
        hs_sat26DQ2n.evaluateOnce = function () {
            return hs_ds26DQ0O.hscall(hs_n26DQ0N);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DQ2n, hs_sat26DQ2m);
    };
    this.hs_zpzpzp.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a425vrut.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a525vruD.evaluate = function (hs_n26DQ0Y, hs_ds26DQ10, hs_c26DQ0X) {
        var hs_wild26DQ2o = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_c26DQ0X, hs_n26DQ0Y);
        switch (hs_wild26DQ2o.tag) {
        case 1:
            if ($hs.modules.TextziParserCombinatorsziReadP.hs_pfail.notEvaluated) {
                return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail.hscall();
            } else {
                return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail;
            }
        case 2:
            return hs_ds26DQ10.hscall(hs_n26DQ0Y);
        }
    };
    this.hs_prec.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a525vruD.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a625vruM.evaluate = function (hs_ds26DQ18, hs_n26DQ15) {
        var hs_sat26DQ2q = new $hs.Thunk();
        hs_sat26DQ2q.evaluateOnce = function () {
            var hs_sat26DQ2p = new $hs.Data(1);
            hs_sat26DQ2p.data = [1];
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26DQ15, hs_sat26DQ2p);
        };
        return hs_ds26DQ18.hscall(hs_sat26DQ2q);
    };
    this.hs_step.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a625vruM.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a725vruU.evaluate = function (hs_m26DQ1d, hs_ds26DQ1e) {
        if (hs_m26DQ1d.notEvaluated) {
            return hs_m26DQ1d.hscall();
        } else {
            return hs_m26DQ1d;
        }
    };
    this.hs_lift.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a725vruU.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a825vrv0.evaluate = function (hs_ds26DQ1i) {
        if ($hs.modules.TextziParserCombinatorsziReadP.hs_get.notEvaluated) {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_get.hscall();
        } else {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_get;
        }
    };
    this.hs_get.evaluate = function (hs_eta1cW6l3) {
        return hs_a825vrv0.hscall(hs_eta1cW6l3);
    };
    hs_a925vrv4.evaluate = function (hs_ds26DQ1m) {
        if ($hs.modules.TextziParserCombinatorsziReadP.hs_look.notEvaluated) {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_look.hscall();
        } else {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_look;
        }
    };
    this.hs_look.evaluate = function (hs_eta1cW6l3) {
        return hs_a925vrv4.hscall(hs_eta1cW6l3);
    };
    hs_a1025vrv8.evaluate = function (hs_ds26DQ1q) {
        if ($hs.modules.TextziParserCombinatorsziReadP.hs_pfail.notEvaluated) {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail.hscall();
        } else {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail;
        }
    };
    this.hs_pfail.evaluate = function (hs_eta1cW6l3) {
        return hs_a1025vrv8.hscall(hs_eta1cW6l3);
    };
    this.hs_choice.evaluate = function (hs_ps26DQ1s) {
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_a425vrut, hs_a1025vrv8, hs_ps26DQ1s);
    };
    this.hs_minPrec.data = [0];
    hs_a1125vrve.evaluate = function (hs_ds26DQ1x, hs_ds126DQ1y) {
        return hs_ds26DQ1x.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_minPrec);
    };
    this.hs_reset.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1125vrve.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1225vrvk.evaluate = function (hs_h26DQ1E, hs_ds26DQ1G, hs_n26DQ1F) {
        var hs_sat26DQ2r = new $hs.Thunk();
        hs_sat26DQ2r.evaluateOnce = function () {
            return hs_ds26DQ1G.hscall(hs_n26DQ1F);
        };
        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfFunctorReadP, hs_h26DQ1E, hs_sat26DQ2r);
    };
    hs_zdcfmap25vrvt.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1225vrvk.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfFunctorReadPrec.data = [hs_a1225vrvk, hs_zdczlzd25vrvv];
    hs_zdczlzd25vrvv.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zddmzlzd.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfFunctorReadPrec);
    };
    hs_a1325vrvx.evaluate = function (hs_s26DQ1Q, hs_ds26DQ1R) {
        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_s26DQ1Q);
    };
    hs_zdcfail25vrvD.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1325vrvx.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1425vrvF.evaluate = function (hs_x26DQ1Y, hs_ds26DQ1Z) {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_x26DQ1Y);
    };
    hs_zdcreturn25vrvL.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1425vrvF.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1525vrvN.evaluate = function (hs_ds26DQ28, hs_k26DQ2c, hs_n26DQ27) {
        var hs_sat26DQ2s = new $hs.Func(1);
        hs_sat26DQ2s.evaluate = function (hs_a1626DQ2b) {
            return hs_k26DQ2c.hscall(hs_a1626DQ2b, hs_n26DQ27);
        };
        var hs_sat26DQ2t = new $hs.Thunk();
        hs_sat26DQ2t.evaluateOnce = function () {
            return hs_ds26DQ28.hscall(hs_n26DQ27);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DQ2t, hs_sat26DQ2s);
    };
    hs_zdczgzgze25vrvZ.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1525vrvN.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfMonadReadPrec.data = [hs_a1525vrvN, hs_zdczgzg25vrw1, hs_a1425vrvF, hs_a1325vrvx];
    hs_zdczgzg25vrw1.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zddmzgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec);
    };
    this.hs_zdfMonadPlusReadPrec.data = [$hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_a1025vrv8, hs_a425vrut];
    this.hs_P.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_P.hscall(hs_eta1cW6l3);
    };
};
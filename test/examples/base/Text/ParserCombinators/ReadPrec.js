
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
    this.hs_readPreczutozuS.evaluate = function (hs_ds26DqX0, hs_n26DqWZ) {
        $hs.modules.TextziParserCombinatorsziReadPrec.loadDependencies();
        return this.evaluate(hs_ds26DqX0, hs_n26DqWZ);
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
    this.hs_choice.evaluate = function (hs_ps26DqXU) {
        $hs.modules.TextziParserCombinatorsziReadPrec.loadDependencies();
        return this.evaluate(hs_ps26DqXU);
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
    var hs_a25v2qB = new $hs.Func(2);
    var hs_a125v2qM = new $hs.Func(1);
    var hs_a225v2qP = new $hs.Func(1);
    var hs_a325v2qS = new $hs.Func(3);
    var hs_a425v2r1 = new $hs.Func(3);
    var hs_a525v2ra = new $hs.Func(3);
    var hs_a625v2ri = new $hs.Func(2);
    var hs_a725v2rp = new $hs.Func(2);
    var hs_a825v2ru = new $hs.Func(1);
    var hs_a925v2rx = new $hs.Func(1);
    var hs_a1025v2rA = new $hs.Func(1);
    var hs_a1125v2rF = new $hs.Func(2);
    var hs_a1225v2rK = new $hs.Func(3);
    var hs_zdcfmap25v2rS = new $hs.Func(3);
    var hs_zdczlzd25v2rT = new $hs.Thunk();
    var hs_a1325v2rU = new $hs.Func(2);
    var hs_zdcfail25v2rZ = new $hs.Func(2);
    var hs_a1425v2s0 = new $hs.Func(2);
    var hs_zdcreturn25v2s5 = new $hs.Func(2);
    var hs_a1525v2s6 = new $hs.Func(3);
    var hs_zdczgzgze25v2sh = new $hs.Func(3);
    var hs_zdczgzg25v2si = new $hs.Thunk();
    hs_a25v2qB.evaluate = function (hs_f26DqWV, hs_n26DqWU) {
        var hs_sat26DqYz = new $hs.Thunk();
        hs_sat26DqYz.evaluateOnce = function () {
            return hs_f26DqWV.hscall(hs_n26DqWU);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_readSzutozuP.hscall(hs_sat26DqYz);
    };
    this.hs_readSzutozuPrec.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a25v2qB.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_readPreczutozuS.evaluate = function (hs_ds26DqX0, hs_n26DqWZ) {
        var hs_sat26DqYA = new $hs.Thunk();
        hs_sat26DqYA.evaluateOnce = function () {
            return hs_ds26DqX0.hscall(hs_n26DqWZ);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_readPzutozuS.hscall(hs_sat26DqYA);
    };
    hs_a125v2qM.evaluate = function (hs_tpl26DqX4) {
        if (hs_tpl26DqX4.notEvaluated) {
            return hs_tpl26DqX4.hscall();
        } else {
            return hs_tpl26DqX4;
        }
    };
    this.hs_readPzutozuPrec.evaluate = function (hs_eta1cW6l3) {
        return hs_a125v2qM.hscall(hs_eta1cW6l3);
    };
    hs_a225v2qP.evaluate = function (hs_ds26DqX7) {
        if (hs_ds26DqX7.notEvaluated) {
            return hs_ds26DqX7.hscall();
        } else {
            return hs_ds26DqX7;
        }
    };
    this.hs_readPreczutozuP.evaluate = function (hs_eta1cW6l3) {
        return hs_a225v2qP.hscall(hs_eta1cW6l3);
    };
    hs_a325v2qS.evaluate = function (hs_ds26DqXd, hs_ds126DqXf, hs_n26DqXc) {
        var hs_sat26DqYC = new $hs.Thunk();
        hs_sat26DqYC.evaluateOnce = function () {
            return hs_ds126DqXf.hscall(hs_n26DqXc);
        };
        var hs_sat26DqYB = new $hs.Thunk();
        hs_sat26DqYB.evaluateOnce = function () {
            return hs_ds26DqXd.hscall(hs_n26DqXc);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_zlzpzp.hscall(hs_sat26DqYB, hs_sat26DqYC);
    };
    this.hs_zlzpzp.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a325v2qS.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a425v2r1.evaluate = function (hs_ds26DqXm, hs_ds126DqXo, hs_n26DqXl) {
        var hs_sat26DqYE = new $hs.Thunk();
        hs_sat26DqYE.evaluateOnce = function () {
            return hs_ds126DqXo.hscall(hs_n26DqXl);
        };
        var hs_sat26DqYD = new $hs.Thunk();
        hs_sat26DqYD.evaluateOnce = function () {
            return hs_ds26DqXm.hscall(hs_n26DqXl);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_zpzpzp.hscall(hs_sat26DqYD, hs_sat26DqYE);
    };
    this.hs_zpzpzp.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a425v2r1.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a525v2ra.evaluate = function (hs_n26DqXv, hs_ds26DqXx, hs_c26DqXu) {
        var hs_wild26DqYF = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_c26DqXu, hs_n26DqXv);
        switch (hs_wild26DqYF.tag) {
        case 1:
            if ($hs.modules.TextziParserCombinatorsziReadP.hs_pfail.notEvaluated) {
                return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail.hscall();
            } else {
                return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail;
            }
        case 2:
            return hs_ds26DqXx.hscall(hs_n26DqXv);
        }
    };
    this.hs_prec.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a525v2ra.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a625v2ri.evaluate = function (hs_ds26DqXE, hs_n26DqXB) {
        var hs_sat26DqYG = new $hs.Thunk();
        hs_sat26DqYG.evaluateOnce = function () {
            var hs_sat26DqYH = new $hs.Data(1);
            hs_sat26DqYH.data = [1];
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26DqXB, hs_sat26DqYH);
        };
        return hs_ds26DqXE.hscall(hs_sat26DqYG);
    };
    this.hs_step.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a625v2ri.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a725v2rp.evaluate = function (hs_m26DqXI, hs_ds26DqXJ) {
        if (hs_m26DqXI.notEvaluated) {
            return hs_m26DqXI.hscall();
        } else {
            return hs_m26DqXI;
        }
    };
    this.hs_lift.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a725v2rp.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a825v2ru.evaluate = function (hs_ds26DqXM) {
        if ($hs.modules.TextziParserCombinatorsziReadP.hs_get.notEvaluated) {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_get.hscall();
        } else {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_get;
        }
    };
    this.hs_get.evaluate = function (hs_eta1cW6l3) {
        return hs_a825v2ru.hscall(hs_eta1cW6l3);
    };
    hs_a925v2rx.evaluate = function (hs_ds26DqXP) {
        if ($hs.modules.TextziParserCombinatorsziReadP.hs_look.notEvaluated) {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_look.hscall();
        } else {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_look;
        }
    };
    this.hs_look.evaluate = function (hs_eta1cW6l3) {
        return hs_a925v2rx.hscall(hs_eta1cW6l3);
    };
    hs_a1025v2rA.evaluate = function (hs_ds26DqXS) {
        if ($hs.modules.TextziParserCombinatorsziReadP.hs_pfail.notEvaluated) {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail.hscall();
        } else {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_pfail;
        }
    };
    this.hs_pfail.evaluate = function (hs_eta1cW6l3) {
        return hs_a1025v2rA.hscall(hs_eta1cW6l3);
    };
    this.hs_choice.evaluate = function (hs_ps26DqXU) {
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_a425v2r1, hs_a1025v2rA, hs_ps26DqXU);
    };
    this.hs_minPrec.data = [0];
    hs_a1125v2rF.evaluate = function (hs_ds26DqXY, hs_ds126DqXZ) {
        return hs_ds26DqXY.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_minPrec);
    };
    this.hs_reset.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1125v2rF.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1225v2rK.evaluate = function (hs_h26DqY4, hs_ds26DqY6, hs_n26DqY5) {
        var hs_sat26DqYI = new $hs.Thunk();
        hs_sat26DqYI.evaluateOnce = function () {
            return hs_ds26DqY6.hscall(hs_n26DqY5);
        };
        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfFunctorReadP, hs_h26DqY4, hs_sat26DqYI);
    };
    hs_zdcfmap25v2rS.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1225v2rK.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfFunctorReadPrec.data = [hs_a1225v2rK, hs_zdczlzd25v2rT];
    hs_zdczlzd25v2rT.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zddmzlzd.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfFunctorReadPrec);
    };
    hs_a1325v2rU.evaluate = function (hs_s26DqYd, hs_ds26DqYe) {
        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_s26DqYd);
    };
    hs_zdcfail25v2rZ.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1325v2rU.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1425v2s0.evaluate = function (hs_x26DqYj, hs_ds26DqYk) {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_x26DqYj);
    };
    hs_zdcreturn25v2s5.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1425v2s0.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1525v2s6.evaluate = function (hs_ds26DqYr, hs_k26DqYv, hs_n26DqYq) {
        var hs_sat26DqYK = new $hs.Func(1);
        hs_sat26DqYK.evaluate = function (hs_a1626DqYu) {
            return hs_k26DqYv.hscall(hs_a1626DqYu, hs_n26DqYq);
        };
        var hs_sat26DqYJ = new $hs.Thunk();
        hs_sat26DqYJ.evaluateOnce = function () {
            return hs_ds26DqYr.hscall(hs_n26DqYq);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DqYJ, hs_sat26DqYK);
    };
    hs_zdczgzgze25v2sh.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1525v2s6.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfMonadReadPrec.data = [hs_a1525v2s6, hs_zdczgzg25v2si, hs_a1425v2s0, hs_a1325v2rU];
    hs_zdczgzg25v2si.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zddmzgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec);
    };
    this.hs_zdfMonadPlusReadPrec.data = [$hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_a1025v2rA, hs_a425v2r1];
    this.hs_P.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_P.hscall(hs_eta1cW6l3);
    };
};
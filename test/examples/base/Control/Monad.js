
$hs.modules.ControlziMonad = new $hs.Module();
$hs.modules.ControlziMonad.dependencies = ["GHC.Types", "GHC.Unit", "Data.Maybe", "GHC.Base", "GHC.List"];
$hs.modules.ControlziMonad.initBeforeDependencies = function () {
    this.hs_zdp1MonadPlus = new $hs.Func(1);
    this.hs_mzzero = new $hs.Func(1);
    this.hs_mplus = new $hs.Func(1);
    this.hs_mfilter = new $hs.Func(3);
    this.hs_liftM5 = new $hs.Func(7);
    this.hs_liftM4 = new $hs.Func(6);
    this.hs_liftM3 = new $hs.Func(5);
    this.hs_liftM2 = new $hs.Func(4);
    this.hs_ap = new $hs.Func(3);
    this.hs_unless = new $hs.Func(3);
    this.hs_when = new $hs.Func(3);
    this.hs_foldM = new $hs.Func(4);
    this.hs_foldMzu = new $hs.Func(4);
    this.hs_join = new $hs.Func(2);
    this.hs_void = new $hs.Func(1);
    this.hs_forever = new $hs.Func(2);
    this.hs_zgzezg = new $hs.Func(4);
    this.hs_zlzezl = new $hs.Func(1);
    this.hs_msum = new $hs.Func(1);
    this.hs_filterM = new $hs.Func(3);
    this.hs_sequencezu = new $hs.Func(2);
    this.hs_mapMzu = new $hs.Func(3);
    this.hs_forMzu = new $hs.Func(1);
    this.hs_zzipWithMzu = new $hs.Func(4);
    this.hs_replicateMzu = new $hs.Func(3);
    this.hs_sequence = new $hs.Func(2);
    this.hs_mapM = new $hs.Func(3);
    this.hs_forM = new $hs.Func(1);
    this.hs_mapAndUnzzipM = new $hs.Func(3);
    this.hs_zzipWithM = new $hs.Func(4);
    this.hs_replicateM = new $hs.Func(3);
    this.hs_zezlzl = new $hs.Func(3);
    this.hs_zdfMonadPlusZMZN = new $hs.Data(1);
    this.hs_zdfMonadPlusMaybe = new $hs.Data(1);
    this.hs_liftM = new $hs.Func(3);
    this.hs_guard = new $hs.Func(2);
    this.hs_DZCMonadPlus = new $hs.Func(3);
    this.hs_zdp1MonadPlus.notEvaluated = true;
    this.hs_zdp1MonadPlus.evaluate = function (hs_tpl26CHae) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_tpl26CHae);
    };
    this.hs_mzzero.notEvaluated = true;
    this.hs_mzzero.evaluate = function (hs_tpl26CHal) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_tpl26CHal);
    };
    this.hs_mplus.notEvaluated = true;
    this.hs_mplus.evaluate = function (hs_tpl26CHas) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_tpl26CHas);
    };
    this.hs_mfilter.notEvaluated = true;
    this.hs_mfilter.evaluate = function (hs_zddMonadPlus26CHaC, hs_eta26CHaH, hs_eta126CHaE) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonadPlus26CHaC, hs_eta26CHaH, hs_eta126CHaE);
    };
    this.hs_liftM5.notEvaluated = true;
    this.hs_liftM5.evaluate = function (hs_zddMonad26CHaR, hs_f26CHb7, hs_m126CHaS, hs_m226CHaU, hs_m326CHaW, hs_m426CHaY, hs_m526CHb0) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHaR, hs_f26CHb7, hs_m126CHaS, hs_m226CHaU, hs_m326CHaW, hs_m426CHaY, hs_m526CHb0);
    };
    this.hs_liftM4.notEvaluated = true;
    this.hs_liftM4.evaluate = function (hs_zddMonad26CHbk, hs_f26CHbx, hs_m126CHbl, hs_m226CHbn, hs_m326CHbp, hs_m426CHbr) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHbk, hs_f26CHbx, hs_m126CHbl, hs_m226CHbn, hs_m326CHbp, hs_m426CHbr);
    };
    this.hs_liftM3.notEvaluated = true;
    this.hs_liftM3.evaluate = function (hs_zddMonad26CHbI, hs_f26CHbS, hs_m126CHbJ, hs_m226CHbL, hs_m326CHbN) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHbI, hs_f26CHbS, hs_m126CHbJ, hs_m226CHbL, hs_m326CHbN);
    };
    this.hs_liftM2.notEvaluated = true;
    this.hs_liftM2.evaluate = function (hs_zddMonad26CHc1, hs_f26CHc8, hs_m126CHc2, hs_m226CHc4) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHc1, hs_f26CHc8, hs_m126CHc2, hs_m226CHc4);
    };
    this.hs_ap.notEvaluated = true;
    this.hs_ap.evaluate = function (hs_zddMonad26CHcf, hs_eta26CHcg, hs_eta126CHch) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHcf, hs_eta26CHcg, hs_eta126CHch);
    };
    this.hs_unless.notEvaluated = true;
    this.hs_unless.evaluate = function (hs_zddMonad26CHco, hs_p26CHcl, hs_s26CHcn) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHco, hs_p26CHcl, hs_s26CHcn);
    };
    this.hs_when.notEvaluated = true;
    this.hs_when.evaluate = function (hs_zddMonad26CHcu, hs_p26CHcs, hs_s26CHcv) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHcu, hs_p26CHcs, hs_s26CHcv);
    };
    this.hs_foldM.notEvaluated = true;
    this.hs_foldM.evaluate = function (hs_zddMonad26CHcC, hs_ds26CHcH, hs_a26CHcD, hs_ds126CHcA) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHcC, hs_ds26CHcH, hs_a26CHcD, hs_ds126CHcA);
    };
    this.hs_foldMzu.notEvaluated = true;
    this.hs_foldMzu.evaluate = function (hs_zddMonad26CHcR, hs_f26CHcS, hs_a26CHcT, hs_xs26CHcU) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHcR, hs_f26CHcS, hs_a26CHcT, hs_xs26CHcU);
    };
    this.hs_join.notEvaluated = true;
    this.hs_join.evaluate = function (hs_zddMonad26CHcZ, hs_x26CHd0) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHcZ, hs_x26CHd0);
    };
    this.hs_void.notEvaluated = true;
    this.hs_void.evaluate = function (hs_zddFunctor26CHd2) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddFunctor26CHd2);
    };
    this.hs_forever.notEvaluated = true;
    this.hs_forever.evaluate = function (hs_zddMonad26CHd6, hs_a26CHd7) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHd6, hs_a26CHd7);
    };
    this.hs_zgzezg.notEvaluated = true;
    this.hs_zgzezg.evaluate = function (hs_zddMonad26CHdd, hs_f26CHdf, hs_g26CHdh, hs_x26CHde) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHdd, hs_f26CHdf, hs_g26CHdh, hs_x26CHde);
    };
    this.hs_zlzezl.notEvaluated = true;
    this.hs_zlzezl.evaluate = function (hs_zddMonad26CHdj) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHdj);
    };
    this.hs_msum.notEvaluated = true;
    this.hs_msum.evaluate = function (hs_zddMonadPlus26CHdm) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonadPlus26CHdm);
    };
    this.hs_filterM.notEvaluated = true;
    this.hs_filterM.evaluate = function (hs_zddMonad26CHdu, hs_ds26CHdy, hs_ds126CHds) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHdu, hs_ds26CHdy, hs_ds126CHds);
    };
    this.hs_sequencezu.notEvaluated = true;
    this.hs_sequencezu.evaluate = function (hs_zddMonad26CHdM, hs_eta26CHdP) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHdM, hs_eta26CHdP);
    };
    this.hs_mapMzu.notEvaluated = true;
    this.hs_mapMzu.evaluate = function (hs_zddMonad26CHdT, hs_eta26CHdW, hs_eta126CHdX) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHdT, hs_eta26CHdW, hs_eta126CHdX);
    };
    this.hs_forMzu.notEvaluated = true;
    this.hs_forMzu.evaluate = function (hs_zddMonad26CHe0) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHe0);
    };
    this.hs_zzipWithMzu.notEvaluated = true;
    this.hs_zzipWithMzu.evaluate = function (hs_zddMonad26CHe6, hs_f26CHe9, hs_xs26CHea, hs_ys26CHeb) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHe6, hs_f26CHe9, hs_xs26CHea, hs_ys26CHeb);
    };
    this.hs_replicateMzu.notEvaluated = true;
    this.hs_replicateMzu.evaluate = function (hs_zddMonad26CHeg, hs_n26CHej, hs_x26CHek) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHeg, hs_n26CHej, hs_x26CHek);
    };
    this.hs_sequence.notEvaluated = true;
    this.hs_sequence.evaluate = function (hs_zddMonad26CHeq, hs_eta26CHeC) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHeq, hs_eta26CHeC);
    };
    this.hs_mapM.notEvaluated = true;
    this.hs_mapM.evaluate = function (hs_zddMonad26CHeI, hs_eta26CHeU, hs_eta126CHeV) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHeI, hs_eta26CHeU, hs_eta126CHeV);
    };
    this.hs_forM.notEvaluated = true;
    this.hs_forM.evaluate = function (hs_zddMonad26CHeY) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHeY);
    };
    this.hs_mapAndUnzzipM.notEvaluated = true;
    this.hs_mapAndUnzzipM.evaluate = function (hs_zddMonad26CHf3, hs_f26CHfh, hs_xs26CHfi) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHf3, hs_f26CHfh, hs_xs26CHfi);
    };
    this.hs_zzipWithM.notEvaluated = true;
    this.hs_zzipWithM.evaluate = function (hs_zddMonad26CHft, hs_f26CHfF, hs_xs26CHfG, hs_ys26CHfH) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHft, hs_f26CHfF, hs_xs26CHfG, hs_ys26CHfH);
    };
    this.hs_replicateM.notEvaluated = true;
    this.hs_replicateM.evaluate = function (hs_zddMonad26CHfO, hs_n26CHg0, hs_x26CHg1) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHfO, hs_n26CHg0, hs_x26CHg1);
    };
    this.hs_zezlzl.notEvaluated = true;
    this.hs_zezlzl.evaluate = function (hs_zddMonad26CHgb, hs_f26CHgd, hs_x26CHgc) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHgb, hs_f26CHgd, hs_x26CHgc);
    };
    this.hs_zdfMonadPlusZMZN.notEvaluated = true;
    this.hs_zdfMonadPlusZMZN.evaluate = function () {
        $hs.modules.ControlziMonad.loadDependencies();
        return this;
    };
    this.hs_zdfMonadPlusMaybe.notEvaluated = true;
    this.hs_zdfMonadPlusMaybe.evaluate = function () {
        $hs.modules.ControlziMonad.loadDependencies();
        return this;
    };
    this.hs_liftM.notEvaluated = true;
    this.hs_liftM.evaluate = function (hs_zddMonad26CHgp, hs_f26CHgt, hs_m126CHgq) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26CHgp, hs_f26CHgt, hs_m126CHgq);
    };
    this.hs_guard.notEvaluated = true;
    this.hs_guard.evaluate = function (hs_zddMonadPlus26CHgA, hs_eta26CHgy) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonadPlus26CHgA, hs_eta26CHgy);
    };
    this.hs_DZCMonadPlus.notEvaluated = true;
    this.hs_DZCMonadPlus.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.ControlziMonad.initAfterDependencies = function () {
    this.hs_zdp1MonadPlus.notEvaluated = false;
    this.hs_mzzero.notEvaluated = false;
    this.hs_mplus.notEvaluated = false;
    this.hs_mfilter.notEvaluated = false;
    this.hs_liftM5.notEvaluated = false;
    this.hs_liftM4.notEvaluated = false;
    this.hs_liftM3.notEvaluated = false;
    this.hs_liftM2.notEvaluated = false;
    this.hs_ap.notEvaluated = false;
    this.hs_unless.notEvaluated = false;
    this.hs_when.notEvaluated = false;
    this.hs_foldM.notEvaluated = false;
    this.hs_foldMzu.notEvaluated = false;
    this.hs_join.notEvaluated = false;
    this.hs_void.notEvaluated = false;
    this.hs_forever.notEvaluated = false;
    this.hs_zgzezg.notEvaluated = false;
    this.hs_zlzezl.notEvaluated = false;
    this.hs_msum.notEvaluated = false;
    this.hs_filterM.notEvaluated = false;
    this.hs_sequencezu.notEvaluated = false;
    this.hs_mapMzu.notEvaluated = false;
    this.hs_forMzu.notEvaluated = false;
    this.hs_zzipWithMzu.notEvaluated = false;
    this.hs_replicateMzu.notEvaluated = false;
    this.hs_sequence.notEvaluated = false;
    this.hs_mapM.notEvaluated = false;
    this.hs_forM.notEvaluated = false;
    this.hs_mapAndUnzzipM.notEvaluated = false;
    this.hs_zzipWithM.notEvaluated = false;
    this.hs_replicateM.notEvaluated = false;
    this.hs_zezlzl.notEvaluated = false;
    this.hs_zdfMonadPlusZMZN.notEvaluated = false;
    this.hs_zdfMonadPlusZMZN.evaluate = function () {
        return this;
    };
    this.hs_zdfMonadPlusMaybe.notEvaluated = false;
    this.hs_zdfMonadPlusMaybe.evaluate = function () {
        return this;
    };
    this.hs_liftM.notEvaluated = false;
    this.hs_guard.notEvaluated = false;
    this.hs_DZCMonadPlus.notEvaluated = false;
    var hs_zezlzl125uiJN = new $hs.Func(2);
    var hs_zdcmplus25uiJY = new $hs.Func(2);
    this.hs_zdp1MonadPlus.evaluate = function (hs_tpl26CHae) {
        var hs_tpl26CHgE = hs_tpl26CHae;
        if (hs_tpl26CHae.notEvaluated) {
            hs_tpl26CHgE = hs_tpl26CHae.hscall();
        }
        var hs_tpl26CHaj = hs_tpl26CHgE.data[0];
        if (hs_tpl26CHaj.notEvaluated) {
            return hs_tpl26CHaj.hscall();
        } else {
            return hs_tpl26CHaj;
        }
    };
    this.hs_mzzero.evaluate = function (hs_tpl26CHal) {
        var hs_tpl26CHgH = hs_tpl26CHal;
        if (hs_tpl26CHal.notEvaluated) {
            hs_tpl26CHgH = hs_tpl26CHal.hscall();
        }
        var hs_tpl26CHaq = hs_tpl26CHgH.data[1];
        if (hs_tpl26CHaq.notEvaluated) {
            return hs_tpl26CHaq.hscall();
        } else {
            return hs_tpl26CHaq;
        }
    };
    this.hs_mplus.evaluate = function (hs_tpl26CHas) {
        var hs_tpl26CHgK = hs_tpl26CHas;
        if (hs_tpl26CHas.notEvaluated) {
            hs_tpl26CHgK = hs_tpl26CHas.hscall();
        }
        var hs_tpl26CHax = hs_tpl26CHgK.data[2];
        if (hs_tpl26CHax.notEvaluated) {
            return hs_tpl26CHax.hscall();
        } else {
            return hs_tpl26CHax;
        }
    };
    this.hs_mfilter.evaluate = function (hs_zddMonadPlus26CHaC, hs_eta26CHaH, hs_eta126CHaE) {
        var hs_zddMonad26CHaD = new $hs.Thunk();
        hs_zddMonad26CHaD.evaluateOnce = function () {
            return $hs.modules.ControlziMonad.hs_zdp1MonadPlus.hscall(hs_zddMonadPlus26CHaC);
        };
        var hs_sat26CHgL = new $hs.Func(1);
        hs_sat26CHgL.evaluate = function (hs_a26CHaG) {
            var hs_wild26CHgM = hs_eta26CHaH.hscall(hs_a26CHaG);
            switch (hs_wild26CHgM.tag) {
            case 1:
                return $hs.modules.ControlziMonad.hs_mzzero.hscall(hs_zddMonadPlus26CHaC);
            case 2:
                return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHaD, hs_a26CHaG);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHaD, hs_eta126CHaE, hs_sat26CHgL);
    };
    this.hs_liftM5.evaluate = function (hs_zddMonad26CHaR, hs_f26CHb7, hs_m126CHaS, hs_m226CHaU, hs_m326CHaW, hs_m426CHaY, hs_m526CHb0) {
        var hs_sat26CHgN = new $hs.Func(1);
        hs_sat26CHgN.evaluate = function (hs_x126CHb2) {
            var hs_sat26CHgO = new $hs.Func(1);
            hs_sat26CHgO.evaluate = function (hs_x226CHb3) {
                var hs_sat26CHgP = new $hs.Func(1);
                hs_sat26CHgP.evaluate = function (hs_x326CHb4) {
                    var hs_sat26CHgQ = new $hs.Func(1);
                    hs_sat26CHgQ.evaluate = function (hs_x426CHb5) {
                        var hs_sat26CHgR = new $hs.Func(1);
                        hs_sat26CHgR.evaluate = function (hs_x526CHb6) {
                            var hs_sat26CHgS = new $hs.Thunk();
                            hs_sat26CHgS.evaluateOnce = function () {
                                return hs_f26CHb7.hscall(hs_x126CHb2, hs_x226CHb3, hs_x326CHb4, hs_x426CHb5, hs_x526CHb6);
                            };
                            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHaR, hs_sat26CHgS);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHaR, hs_m526CHb0, hs_sat26CHgR);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHaR, hs_m426CHaY, hs_sat26CHgQ);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHaR, hs_m326CHaW, hs_sat26CHgP);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHaR, hs_m226CHaU, hs_sat26CHgO);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHaR, hs_m126CHaS, hs_sat26CHgN);
    };
    this.hs_liftM4.evaluate = function (hs_zddMonad26CHbk, hs_f26CHbx, hs_m126CHbl, hs_m226CHbn, hs_m326CHbp, hs_m426CHbr) {
        var hs_sat26CHgT = new $hs.Func(1);
        hs_sat26CHgT.evaluate = function (hs_x126CHbt) {
            var hs_sat26CHgU = new $hs.Func(1);
            hs_sat26CHgU.evaluate = function (hs_x226CHbu) {
                var hs_sat26CHgV = new $hs.Func(1);
                hs_sat26CHgV.evaluate = function (hs_x326CHbv) {
                    var hs_sat26CHgW = new $hs.Func(1);
                    hs_sat26CHgW.evaluate = function (hs_x426CHbw) {
                        var hs_sat26CHgX = new $hs.Thunk();
                        hs_sat26CHgX.evaluateOnce = function () {
                            return hs_f26CHbx.hscall(hs_x126CHbt, hs_x226CHbu, hs_x326CHbv, hs_x426CHbw);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHbk, hs_sat26CHgX);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHbk, hs_m426CHbr, hs_sat26CHgW);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHbk, hs_m326CHbp, hs_sat26CHgV);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHbk, hs_m226CHbn, hs_sat26CHgU);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHbk, hs_m126CHbl, hs_sat26CHgT);
    };
    this.hs_liftM3.evaluate = function (hs_zddMonad26CHbI, hs_f26CHbS, hs_m126CHbJ, hs_m226CHbL, hs_m326CHbN) {
        var hs_sat26CHgY = new $hs.Func(1);
        hs_sat26CHgY.evaluate = function (hs_x126CHbP) {
            var hs_sat26CHgZ = new $hs.Func(1);
            hs_sat26CHgZ.evaluate = function (hs_x226CHbQ) {
                var hs_sat26CHh0 = new $hs.Func(1);
                hs_sat26CHh0.evaluate = function (hs_x326CHbR) {
                    var hs_sat26CHh1 = new $hs.Thunk();
                    hs_sat26CHh1.evaluateOnce = function () {
                        return hs_f26CHbS.hscall(hs_x126CHbP, hs_x226CHbQ, hs_x326CHbR);
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHbI, hs_sat26CHh1);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHbI, hs_m326CHbN, hs_sat26CHh0);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHbI, hs_m226CHbL, hs_sat26CHgZ);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHbI, hs_m126CHbJ, hs_sat26CHgY);
    };
    this.hs_liftM2.evaluate = function (hs_zddMonad26CHc1, hs_f26CHc8, hs_m126CHc2, hs_m226CHc4) {
        var hs_sat26CHh2 = new $hs.Func(1);
        hs_sat26CHh2.evaluate = function (hs_x126CHc6) {
            var hs_sat26CHh3 = new $hs.Func(1);
            hs_sat26CHh3.evaluate = function (hs_x226CHc7) {
                var hs_sat26CHh4 = new $hs.Thunk();
                hs_sat26CHh4.evaluateOnce = function () {
                    return hs_f26CHc8.hscall(hs_x126CHc6, hs_x226CHc7);
                };
                return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHc1, hs_sat26CHh4);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHc1, hs_m226CHc4, hs_sat26CHh3);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHc1, hs_m126CHc2, hs_sat26CHh2);
    };
    this.hs_ap.evaluate = function (hs_zddMonad26CHcf, hs_eta26CHcg, hs_eta126CHch) {
        return $hs.modules.ControlziMonad.hs_liftM2.hscall(hs_zddMonad26CHcf, $hs.modules.GHCziBase.hs_id, hs_eta26CHcg, hs_eta126CHch);
    };
    this.hs_unless.evaluate = function (hs_zddMonad26CHco, hs_p26CHcl, hs_s26CHcn) {
        var hs_wild26CHh5 = hs_p26CHcl;
        if (hs_p26CHcl.notEvaluated) {
            hs_wild26CHh5 = hs_p26CHcl.hscall();
        }
        switch (hs_wild26CHh5.tag) {
        case 1:
            if (hs_s26CHcn.notEvaluated) {
                return hs_s26CHcn.hscall();
            } else {
                return hs_s26CHcn;
            }
        case 2:
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHco, $hs.modules.GHCziUnit.hs_Z0T);
        }
    };
    this.hs_when.evaluate = function (hs_zddMonad26CHcu, hs_p26CHcs, hs_s26CHcv) {
        var hs_wild26CHh6 = hs_p26CHcs;
        if (hs_p26CHcs.notEvaluated) {
            hs_wild26CHh6 = hs_p26CHcs.hscall();
        }
        switch (hs_wild26CHh6.tag) {
        case 1:
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHcu, $hs.modules.GHCziUnit.hs_Z0T);
        case 2:
            if (hs_s26CHcv.notEvaluated) {
                return hs_s26CHcv.hscall();
            } else {
                return hs_s26CHcv;
            }
        }
    };
    this.hs_foldM.evaluate = function (hs_zddMonad26CHcC, hs_ds26CHcH, hs_a26CHcD, hs_ds126CHcA) {
        var hs_wild26CHh8 = hs_ds126CHcA;
        if (hs_ds126CHcA.notEvaluated) {
            hs_wild26CHh8 = hs_ds126CHcA.hscall();
        }
        switch (hs_wild26CHh8.tag) {
        case 1:
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHcC, hs_a26CHcD);
        case 2:
            var hs_x26CHcG = hs_wild26CHh8.data[0];
            var hs_xs26CHcL = hs_wild26CHh8.data[1];
            var hs_sat26CHh9 = new $hs.Func(1);
            hs_sat26CHh9.evaluate = function (hs_fax26CHcK) {
                return $hs.modules.ControlziMonad.hs_foldM.hscall(hs_zddMonad26CHcC, hs_ds26CHcH, hs_fax26CHcK, hs_xs26CHcL);
            };
            var hs_sat26CHh7 = new $hs.Thunk();
            hs_sat26CHh7.evaluateOnce = function () {
                return hs_ds26CHcH.hscall(hs_a26CHcD, hs_x26CHcG);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHcC, hs_sat26CHh7, hs_sat26CHh9);
        }
    };
    this.hs_foldMzu.evaluate = function (hs_zddMonad26CHcR, hs_f26CHcS, hs_a26CHcT, hs_xs26CHcU) {
        var hs_sat26CHhb = new $hs.Thunk();
        hs_sat26CHhb.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHcR, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26CHha = new $hs.Thunk();
        hs_sat26CHha.evaluateOnce = function () {
            return $hs.modules.ControlziMonad.hs_foldM.hscall(hs_zddMonad26CHcR, hs_f26CHcS, hs_a26CHcT, hs_xs26CHcU);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall(hs_zddMonad26CHcR, hs_sat26CHha, hs_sat26CHhb);
    };
    this.hs_join.evaluate = function (hs_zddMonad26CHcZ, hs_x26CHd0) {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHcZ, hs_x26CHd0, $hs.modules.GHCziBase.hs_id);
    };
    this.hs_void.evaluate = function (hs_zddFunctor26CHd2) {
        var hs_sat26CHhc = new $hs.Thunk();
        hs_sat26CHhc.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_const.hscall($hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_fmap.hscall(hs_zddFunctor26CHd2, hs_sat26CHhc);
    };
    this.hs_forever.evaluate = function (hs_zddMonad26CHd6, hs_a26CHd7) {
        var hs_sat26CHhd = new $hs.Thunk();
        hs_sat26CHhd.evaluateOnce = function () {
            return $hs.modules.ControlziMonad.hs_forever.hscall(hs_zddMonad26CHd6, hs_a26CHd7);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall(hs_zddMonad26CHd6, hs_a26CHd7, hs_sat26CHhd);
    };
    this.hs_zgzezg.evaluate = function (hs_zddMonad26CHdd, hs_f26CHdf, hs_g26CHdh, hs_x26CHde) {
        var hs_sat26CHhe = new $hs.Thunk();
        hs_sat26CHhe.evaluateOnce = function () {
            return hs_f26CHdf.hscall(hs_x26CHde);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHdd, hs_sat26CHhe, hs_g26CHdh);
    };
    this.hs_zlzezl.evaluate = function (hs_zddMonad26CHdj) {
        var hs_sat26CHhf = new $hs.Func(3);
        hs_sat26CHhf.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return $hs.modules.ControlziMonad.hs_zgzezg.hscall(hs_zddMonad26CHdj, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_flip.hscall(hs_sat26CHhf);
    };
    this.hs_msum.evaluate = function (hs_zddMonadPlus26CHdm) {
        var hs_sat26CHhh = new $hs.Thunk();
        hs_sat26CHhh.evaluateOnce = function () {
            return $hs.modules.ControlziMonad.hs_mzzero.hscall(hs_zddMonadPlus26CHdm);
        };
        var hs_sat26CHhg = new $hs.Thunk();
        hs_sat26CHhg.evaluateOnce = function () {
            return $hs.modules.ControlziMonad.hs_mplus.hscall(hs_zddMonadPlus26CHdm);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26CHhg, hs_sat26CHhh);
    };
    this.hs_filterM.evaluate = function (hs_zddMonad26CHdu, hs_ds26CHdy, hs_ds126CHds) {
        var hs_wild26CHhj = hs_ds126CHds;
        if (hs_ds126CHds.notEvaluated) {
            hs_wild26CHhj = hs_ds126CHds.hscall();
        }
        switch (hs_wild26CHhj.tag) {
        case 1:
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHdu, $hs.modules.GHCziTypes.hs_ZMZN);
        case 2:
            var hs_x26CHdx = hs_wild26CHhj.data[0];
            var hs_xs26CHdB = hs_wild26CHhj.data[1];
            var hs_sat26CHhk = new $hs.Func(1);
            hs_sat26CHhk.evaluate = function (hs_flg26CHdE) {
                var hs_sat26CHhm = new $hs.Func(1);
                hs_sat26CHhm.evaluate = function (hs_ys26CHdG) {
                    var hs_sat26CHhn = new $hs.Thunk();
                    hs_sat26CHhn.evaluateOnce = function () {
                        var hs_wild126CHho = hs_flg26CHdE;
                        if (hs_flg26CHdE.notEvaluated) {
                            hs_wild126CHho = hs_flg26CHdE.hscall();
                        }
                        switch (hs_wild126CHho.tag) {
                        case 1:
                            if (hs_ys26CHdG.notEvaluated) {
                                return hs_ys26CHdG.hscall();
                            } else {
                                return hs_ys26CHdG;
                            }
                        case 2:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_x26CHdx, hs_ys26CHdG];
                            return $res;
                        }
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHdu, hs_sat26CHhn);
                };
                var hs_sat26CHhl = new $hs.Thunk();
                hs_sat26CHhl.evaluateOnce = function () {
                    return $hs.modules.ControlziMonad.hs_filterM.hscall(hs_zddMonad26CHdu, hs_ds26CHdy, hs_xs26CHdB);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHdu, hs_sat26CHhl, hs_sat26CHhm);
            };
            var hs_sat26CHhi = new $hs.Thunk();
            hs_sat26CHhi.evaluateOnce = function () {
                return hs_ds26CHdy.hscall(hs_x26CHdx);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHdu, hs_sat26CHhi, hs_sat26CHhk);
        }
    };
    this.hs_sequencezu.evaluate = function (hs_zddMonad26CHdM, hs_eta26CHdP) {
        var hs_sat26CHhq = new $hs.Thunk();
        hs_sat26CHhq.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHdM, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26CHhp = new $hs.Thunk();
        hs_sat26CHhp.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_zgzg.hscall(hs_zddMonad26CHdM);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26CHhp, hs_sat26CHhq, hs_eta26CHdP);
    };
    this.hs_mapMzu.evaluate = function (hs_zddMonad26CHdT, hs_eta26CHdW, hs_eta126CHdX) {
        var hs_sat26CHhs = new $hs.Thunk();
        hs_sat26CHhs.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_map.hscall(hs_eta26CHdW, hs_eta126CHdX);
        };
        var hs_sat26CHht = new $hs.Thunk();
        hs_sat26CHht.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHdT, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26CHhr = new $hs.Thunk();
        hs_sat26CHhr.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_zgzg.hscall(hs_zddMonad26CHdT);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26CHhr, hs_sat26CHht, hs_sat26CHhs);
    };
    this.hs_forMzu.evaluate = function (hs_zddMonad26CHe0) {
        var hs_sat26CHhu = new $hs.Func(2);
        hs_sat26CHhu.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return $hs.modules.ControlziMonad.hs_mapMzu.hscall(hs_zddMonad26CHe0, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_flip.hscall(hs_sat26CHhu);
    };
    this.hs_zzipWithMzu.evaluate = function (hs_zddMonad26CHe6, hs_f26CHe9, hs_xs26CHea, hs_ys26CHeb) {
        var hs_sat26CHhw = new $hs.Thunk();
        hs_sat26CHhw.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_zzipWith.hscall(hs_f26CHe9, hs_xs26CHea, hs_ys26CHeb);
        };
        var hs_sat26CHhx = new $hs.Thunk();
        hs_sat26CHhx.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHe6, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26CHhv = new $hs.Thunk();
        hs_sat26CHhv.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_zgzg.hscall(hs_zddMonad26CHe6);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26CHhv, hs_sat26CHhx, hs_sat26CHhw);
    };
    this.hs_replicateMzu.evaluate = function (hs_zddMonad26CHeg, hs_n26CHej, hs_x26CHek) {
        var hs_sat26CHhz = new $hs.Thunk();
        hs_sat26CHhz.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_replicate.hscall(hs_n26CHej, hs_x26CHek);
        };
        var hs_sat26CHhA = new $hs.Thunk();
        hs_sat26CHhA.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHeg, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26CHhy = new $hs.Thunk();
        hs_sat26CHhy.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_zgzg.hscall(hs_zddMonad26CHeg);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26CHhy, hs_sat26CHhA, hs_sat26CHhz);
    };
    this.hs_sequence.evaluate = function (hs_zddMonad26CHeq, hs_eta26CHeC) {
        var hs_sat26CHhC = new $hs.Thunk();
        hs_sat26CHhC.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHeq, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        var hs_sat26CHhB = new $hs.Func(2);
        hs_sat26CHhB.evaluate = function (hs_m26CHer, hs_mzq26CHet) {
            var hs_sat26CHhD = new $hs.Func(1);
            hs_sat26CHhD.evaluate = function (hs_x26CHev) {
                var hs_sat26CHhE = new $hs.Func(1);
                hs_sat26CHhE.evaluate = function (hs_xs26CHew) {
                    var hs_sat26CHhF = new $hs.Data(2);
                    hs_sat26CHhF.data = [hs_x26CHev, hs_xs26CHew];
                    return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHeq, hs_sat26CHhF);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHeq, hs_mzq26CHet, hs_sat26CHhE);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHeq, hs_m26CHer, hs_sat26CHhD);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26CHhB, hs_sat26CHhC, hs_eta26CHeC);
    };
    this.hs_mapM.evaluate = function (hs_zddMonad26CHeI, hs_eta26CHeU, hs_eta126CHeV) {
        var hs_sat26CHhH = new $hs.Thunk();
        hs_sat26CHhH.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_map.hscall(hs_eta26CHeU, hs_eta126CHeV);
        };
        var hs_sat26CHhI = new $hs.Thunk();
        hs_sat26CHhI.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHeI, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        var hs_sat26CHhG = new $hs.Func(2);
        hs_sat26CHhG.evaluate = function (hs_m26CHeJ, hs_mzq26CHeL) {
            var hs_sat26CHhJ = new $hs.Func(1);
            hs_sat26CHhJ.evaluate = function (hs_x26CHeN) {
                var hs_sat26CHhK = new $hs.Func(1);
                hs_sat26CHhK.evaluate = function (hs_xs26CHeO) {
                    var hs_sat26CHhL = new $hs.Data(2);
                    hs_sat26CHhL.data = [hs_x26CHeN, hs_xs26CHeO];
                    return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHeI, hs_sat26CHhL);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHeI, hs_mzq26CHeL, hs_sat26CHhK);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHeI, hs_m26CHeJ, hs_sat26CHhJ);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26CHhG, hs_sat26CHhI, hs_sat26CHhH);
    };
    this.hs_forM.evaluate = function (hs_zddMonad26CHeY) {
        var hs_sat26CHhM = new $hs.Func(2);
        hs_sat26CHhM.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return $hs.modules.ControlziMonad.hs_mapM.hscall(hs_zddMonad26CHeY, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_flip.hscall(hs_sat26CHhM);
    };
    this.hs_mapAndUnzzipM.evaluate = function (hs_zddMonad26CHf3, hs_f26CHfh, hs_xs26CHfi) {
        var hs_sat26CHhO = new $hs.Thunk();
        hs_sat26CHhO.evaluateOnce = function () {
            var hs_sat26CHhV = new $hs.Thunk();
            hs_sat26CHhV.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHf3);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CHhV, $hs.modules.GHCziList.hs_unzzip);
        };
        var hs_sat26CHhN = new $hs.Thunk();
        hs_sat26CHhN.evaluateOnce = function () {
            var hs_sat26CHhQ = new $hs.Thunk();
            hs_sat26CHhQ.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_map.hscall(hs_f26CHfh, hs_xs26CHfi);
            };
            var hs_sat26CHhR = new $hs.Thunk();
            hs_sat26CHhR.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHf3, $hs.modules.GHCziTypes.hs_ZMZN);
            };
            var hs_sat26CHhP = new $hs.Func(2);
            hs_sat26CHhP.evaluate = function (hs_m26CHf6, hs_mzq26CHf8) {
                var hs_sat26CHhS = new $hs.Func(1);
                hs_sat26CHhS.evaluate = function (hs_x26CHfa) {
                    var hs_sat26CHhT = new $hs.Func(1);
                    hs_sat26CHhT.evaluate = function (hs_xs126CHfb) {
                        var hs_sat26CHhU = new $hs.Data(2);
                        hs_sat26CHhU.data = [hs_x26CHfa, hs_xs126CHfb];
                        return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHf3, hs_sat26CHhU);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHf3, hs_mzq26CHf8, hs_sat26CHhT);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHf3, hs_m26CHf6, hs_sat26CHhS);
            };
            return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26CHhP, hs_sat26CHhR, hs_sat26CHhQ);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHf3, hs_sat26CHhN, hs_sat26CHhO);
    };
    this.hs_zzipWithM.evaluate = function (hs_zddMonad26CHft, hs_f26CHfF, hs_xs26CHfG, hs_ys26CHfH) {
        var hs_sat26CHhX = new $hs.Thunk();
        hs_sat26CHhX.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_zzipWith.hscall(hs_f26CHfF, hs_xs26CHfG, hs_ys26CHfH);
        };
        var hs_sat26CHhY = new $hs.Thunk();
        hs_sat26CHhY.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHft, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        var hs_sat26CHhW = new $hs.Func(2);
        hs_sat26CHhW.evaluate = function (hs_m26CHfu, hs_mzq26CHfw) {
            var hs_sat26CHhZ = new $hs.Func(1);
            hs_sat26CHhZ.evaluate = function (hs_x26CHfy) {
                var hs_sat26CHi0 = new $hs.Func(1);
                hs_sat26CHi0.evaluate = function (hs_xs126CHfz) {
                    var hs_sat26CHi1 = new $hs.Data(2);
                    hs_sat26CHi1.data = [hs_x26CHfy, hs_xs126CHfz];
                    return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHft, hs_sat26CHi1);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHft, hs_mzq26CHfw, hs_sat26CHi0);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHft, hs_m26CHfu, hs_sat26CHhZ);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26CHhW, hs_sat26CHhY, hs_sat26CHhX);
    };
    this.hs_replicateM.evaluate = function (hs_zddMonad26CHfO, hs_n26CHg0, hs_x26CHg1) {
        var hs_sat26CHi3 = new $hs.Thunk();
        hs_sat26CHi3.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_replicate.hscall(hs_n26CHg0, hs_x26CHg1);
        };
        var hs_sat26CHi4 = new $hs.Thunk();
        hs_sat26CHi4.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHfO, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        var hs_sat26CHi2 = new $hs.Func(2);
        hs_sat26CHi2.evaluate = function (hs_m26CHfP, hs_mzq26CHfR) {
            var hs_sat26CHi5 = new $hs.Func(1);
            hs_sat26CHi5.evaluate = function (hs_x126CHfT) {
                var hs_sat26CHi6 = new $hs.Func(1);
                hs_sat26CHi6.evaluate = function (hs_xs26CHfU) {
                    var hs_sat26CHi7 = new $hs.Data(2);
                    hs_sat26CHi7.data = [hs_x126CHfT, hs_xs26CHfU];
                    return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHfO, hs_sat26CHi7);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHfO, hs_mzq26CHfR, hs_sat26CHi6);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHfO, hs_m26CHfP, hs_sat26CHi5);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26CHi2, hs_sat26CHi4, hs_sat26CHi3);
    };
    hs_zezlzl125uiJN.evaluate = function (hs_f26CHg7, hs_x26CHg6) {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_x26CHg6, hs_f26CHg7);
    };
    this.hs_zezlzl.evaluate = function (hs_zddMonad26CHgb, hs_f26CHgd, hs_x26CHgc) {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHgb, hs_x26CHgc, hs_f26CHgd);
    };
    this.hs_zdfMonadPlusZMZN.data = [$hs.modules.GHCziBase.hs_zdfMonadZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziBase.hs_zpzp];
    hs_zdcmplus25uiJY.evaluate = function (hs_ds26CHgh, hs_ys26CHgj) {
        var hs_wild26CHgl = hs_ds26CHgh;
        if (hs_ds26CHgh.notEvaluated) {
            hs_wild26CHgl = hs_ds26CHgh.hscall();
        }
        switch (hs_wild26CHgl.tag) {
        case 1:
            if (hs_ys26CHgj.notEvaluated) {
                return hs_ys26CHgj.hscall();
            } else {
                return hs_ys26CHgj;
            }
        case 2:
            if (hs_wild26CHgl.notEvaluated) {
                return hs_wild26CHgl.hscall();
            } else {
                return hs_wild26CHgl;
            }
        }
    };
    this.hs_zdfMonadPlusMaybe.data = [$hs.modules.DataziMaybe.hs_zdfMonadMaybe, $hs.modules.DataziMaybe.hs_Nothing, hs_zdcmplus25uiJY];
    this.hs_liftM.evaluate = function (hs_zddMonad26CHgp, hs_f26CHgt, hs_m126CHgq) {
        var hs_sat26CHi9 = new $hs.Func(1);
        hs_sat26CHi9.evaluate = function (hs_x126CHgs) {
            var hs_sat26CHia = new $hs.Thunk();
            hs_sat26CHia.evaluateOnce = function () {
                return hs_f26CHgt.hscall(hs_x126CHgs);
            };
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26CHgp, hs_sat26CHia);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26CHgp, hs_m126CHgq, hs_sat26CHi9);
    };
    this.hs_guard.evaluate = function (hs_zddMonadPlus26CHgA, hs_eta26CHgy) {
        var hs_wild26CHib = hs_eta26CHgy;
        if (hs_eta26CHgy.notEvaluated) {
            hs_wild26CHib = hs_eta26CHgy.hscall();
        }
        switch (hs_wild26CHib.tag) {
        case 1:
            return $hs.modules.ControlziMonad.hs_mzzero.hscall(hs_zddMonadPlus26CHgA);
        case 2:
            var hs_sat26CHic = $hs.modules.ControlziMonad.hs_zdp1MonadPlus.hscall(hs_zddMonadPlus26CHgA);
            return $hs.modules.GHCziBase.hs_return.hscall(hs_sat26CHic, $hs.modules.GHCziUnit.hs_Z0T);
        }
    };
    this.hs_DZCMonadPlus.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
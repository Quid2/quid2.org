
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
    this.hs_liftM = new $hs.Func(3);
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
    this.hs_guard = new $hs.Func(2);
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
    this.hs_DZCMonadPlus = new $hs.Func(3);
    this.hs_zdp1MonadPlus.notEvaluated = true;
    this.hs_zdp1MonadPlus.evaluate = function (hs_tpl26D6gM) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_tpl26D6gM);
    };
    this.hs_mzzero.notEvaluated = true;
    this.hs_mzzero.evaluate = function (hs_tpl26D6gT) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_tpl26D6gT);
    };
    this.hs_mplus.notEvaluated = true;
    this.hs_mplus.evaluate = function (hs_tpl26D6h0) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_tpl26D6h0);
    };
    this.hs_mfilter.notEvaluated = true;
    this.hs_mfilter.evaluate = function (hs_zddMonadPlus26D6ha, hs_eta26D6hf, hs_eta126D6hc) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonadPlus26D6ha, hs_eta26D6hf, hs_eta126D6hc);
    };
    this.hs_liftM5.notEvaluated = true;
    this.hs_liftM5.evaluate = function (hs_zddMonad26D6hp, hs_f26D6hF, hs_m126D6hq, hs_m226D6hs, hs_m326D6hu, hs_m426D6hw, hs_m526D6hy) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6hp, hs_f26D6hF, hs_m126D6hq, hs_m226D6hs, hs_m326D6hu, hs_m426D6hw, hs_m526D6hy);
    };
    this.hs_liftM4.notEvaluated = true;
    this.hs_liftM4.evaluate = function (hs_zddMonad26D6hS, hs_f26D6i5, hs_m126D6hT, hs_m226D6hV, hs_m326D6hX, hs_m426D6hZ) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6hS, hs_f26D6i5, hs_m126D6hT, hs_m226D6hV, hs_m326D6hX, hs_m426D6hZ);
    };
    this.hs_liftM3.notEvaluated = true;
    this.hs_liftM3.evaluate = function (hs_zddMonad26D6ig, hs_f26D6iq, hs_m126D6ih, hs_m226D6ij, hs_m326D6il) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6ig, hs_f26D6iq, hs_m126D6ih, hs_m226D6ij, hs_m326D6il);
    };
    this.hs_liftM2.notEvaluated = true;
    this.hs_liftM2.evaluate = function (hs_zddMonad26D6iz, hs_f26D6iG, hs_m126D6iA, hs_m226D6iC) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6iz, hs_f26D6iG, hs_m126D6iA, hs_m226D6iC);
    };
    this.hs_ap.notEvaluated = true;
    this.hs_ap.evaluate = function (hs_zddMonad26D6iL, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6iL, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_liftM.notEvaluated = true;
    this.hs_liftM.evaluate = function (hs_zddMonad26D6iP, hs_f26D6iT, hs_m126D6iQ) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6iP, hs_f26D6iT, hs_m126D6iQ);
    };
    this.hs_unless.notEvaluated = true;
    this.hs_unless.evaluate = function (hs_zddMonad26D6j2, hs_p26D6iZ, hs_s26D6j1) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6j2, hs_p26D6iZ, hs_s26D6j1);
    };
    this.hs_when.notEvaluated = true;
    this.hs_when.evaluate = function (hs_zddMonad26D6j8, hs_p26D6j6, hs_s26D6j9) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6j8, hs_p26D6j6, hs_s26D6j9);
    };
    this.hs_foldM.notEvaluated = true;
    this.hs_foldM.evaluate = function (hs_zddMonad26D6jg, hs_ds26D6jl, hs_a26D6jh, hs_ds126D6je) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6jg, hs_ds26D6jl, hs_a26D6jh, hs_ds126D6je);
    };
    this.hs_foldMzu.notEvaluated = true;
    this.hs_foldMzu.evaluate = function (hs_zddMonad26D6jv, hs_f26D6jw, hs_a26D6jx, hs_xs26D6jy) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6jv, hs_f26D6jw, hs_a26D6jx, hs_xs26D6jy);
    };
    this.hs_join.notEvaluated = true;
    this.hs_join.evaluate = function (hs_zddMonad26D6jD, hs_x26D6jE) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6jD, hs_x26D6jE);
    };
    this.hs_void.notEvaluated = true;
    this.hs_void.evaluate = function (hs_zddFunctor26D6jG) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddFunctor26D6jG);
    };
    this.hs_forever.notEvaluated = true;
    this.hs_forever.evaluate = function (hs_zddMonad26D6jK, hs_a26D6jL) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6jK, hs_a26D6jL);
    };
    this.hs_zgzezg.notEvaluated = true;
    this.hs_zgzezg.evaluate = function (hs_zddMonad26D6jR, hs_f26D6jT, hs_g26D6jV, hs_x26D6jS) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6jR, hs_f26D6jT, hs_g26D6jV, hs_x26D6jS);
    };
    this.hs_zlzezl.notEvaluated = true;
    this.hs_zlzezl.evaluate = function (hs_zddMonad26D6jX) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6jX);
    };
    this.hs_msum.notEvaluated = true;
    this.hs_msum.evaluate = function (hs_zddMonadPlus26D6k0) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonadPlus26D6k0);
    };
    this.hs_filterM.notEvaluated = true;
    this.hs_filterM.evaluate = function (hs_zddMonad26D6k8, hs_ds26D6kc, hs_ds126D6k6) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6k8, hs_ds26D6kc, hs_ds126D6k6);
    };
    this.hs_guard.notEvaluated = true;
    this.hs_guard.evaluate = function (hs_zddMonadPlus26D6ks, hs_eta26D6kq) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonadPlus26D6ks, hs_eta26D6kq);
    };
    this.hs_sequencezu.notEvaluated = true;
    this.hs_sequencezu.evaluate = function (hs_zddMonad26D6kw, hs_eta26D6kz) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6kw, hs_eta26D6kz);
    };
    this.hs_mapMzu.notEvaluated = true;
    this.hs_mapMzu.evaluate = function (hs_zddMonad26D6kD, hs_eta26D6kG, hs_eta126D6kH) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6kD, hs_eta26D6kG, hs_eta126D6kH);
    };
    this.hs_forMzu.notEvaluated = true;
    this.hs_forMzu.evaluate = function (hs_zddMonad26D6kK) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6kK);
    };
    this.hs_zzipWithMzu.notEvaluated = true;
    this.hs_zzipWithMzu.evaluate = function (hs_zddMonad26D6kQ, hs_f26D6kT, hs_xs26D6kU, hs_ys26D6kV) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6kQ, hs_f26D6kT, hs_xs26D6kU, hs_ys26D6kV);
    };
    this.hs_replicateMzu.notEvaluated = true;
    this.hs_replicateMzu.evaluate = function (hs_zddMonad26D6l0, hs_n26D6l3, hs_x26D6l4) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6l0, hs_n26D6l3, hs_x26D6l4);
    };
    this.hs_sequence.notEvaluated = true;
    this.hs_sequence.evaluate = function (hs_zddMonad26D6la, hs_eta26D6lm) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6la, hs_eta26D6lm);
    };
    this.hs_mapM.notEvaluated = true;
    this.hs_mapM.evaluate = function (hs_zddMonad26D6ls, hs_eta26D6lE, hs_eta126D6lF) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6ls, hs_eta26D6lE, hs_eta126D6lF);
    };
    this.hs_forM.notEvaluated = true;
    this.hs_forM.evaluate = function (hs_zddMonad26D6lI) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6lI);
    };
    this.hs_mapAndUnzzipM.notEvaluated = true;
    this.hs_mapAndUnzzipM.evaluate = function (hs_zddMonad26D6lN, hs_f26D6m1, hs_xs26D6m2) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6lN, hs_f26D6m1, hs_xs26D6m2);
    };
    this.hs_zzipWithM.notEvaluated = true;
    this.hs_zzipWithM.evaluate = function (hs_zddMonad26D6md, hs_f26D6mp, hs_xs26D6mq, hs_ys26D6mr) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6md, hs_f26D6mp, hs_xs26D6mq, hs_ys26D6mr);
    };
    this.hs_replicateM.notEvaluated = true;
    this.hs_replicateM.evaluate = function (hs_zddMonad26D6my, hs_n26D6mK, hs_x26D6mL) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6my, hs_n26D6mK, hs_x26D6mL);
    };
    this.hs_zezlzl.notEvaluated = true;
    this.hs_zezlzl.evaluate = function (hs_zddMonad26D6mW, hs_f26D6mY, hs_x26D6mX) {
        $hs.modules.ControlziMonad.loadDependencies();
        return this.evaluate(hs_zddMonad26D6mW, hs_f26D6mY, hs_x26D6mX);
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
    this.hs_liftM.notEvaluated = false;
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
    this.hs_guard.notEvaluated = false;
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
    this.hs_DZCMonadPlus.notEvaluated = false;
    var hs_zezlzl125uHQy = new $hs.Func(2);
    var hs_zdcmplus25uHQK = new $hs.Func(2);
    this.hs_zdp1MonadPlus.evaluate = function (hs_tpl26D6gM) {
        var hs_tpl26D6n8 = hs_tpl26D6gM;
        if (hs_tpl26D6gM.notEvaluated) {
            hs_tpl26D6n8 = hs_tpl26D6gM.hscall();
        }
        var hs_tpl26D6gR = hs_tpl26D6n8.data[0];
        if (hs_tpl26D6gR.notEvaluated) {
            return hs_tpl26D6gR.hscall();
        } else {
            return hs_tpl26D6gR;
        }
    };
    this.hs_mzzero.evaluate = function (hs_tpl26D6gT) {
        var hs_tpl26D6nc = hs_tpl26D6gT;
        if (hs_tpl26D6gT.notEvaluated) {
            hs_tpl26D6nc = hs_tpl26D6gT.hscall();
        }
        var hs_tpl26D6gY = hs_tpl26D6nc.data[1];
        if (hs_tpl26D6gY.notEvaluated) {
            return hs_tpl26D6gY.hscall();
        } else {
            return hs_tpl26D6gY;
        }
    };
    this.hs_mplus.evaluate = function (hs_tpl26D6h0) {
        var hs_tpl26D6nf = hs_tpl26D6h0;
        if (hs_tpl26D6h0.notEvaluated) {
            hs_tpl26D6nf = hs_tpl26D6h0.hscall();
        }
        var hs_tpl26D6h5 = hs_tpl26D6nf.data[2];
        if (hs_tpl26D6h5.notEvaluated) {
            return hs_tpl26D6h5.hscall();
        } else {
            return hs_tpl26D6h5;
        }
    };
    this.hs_mfilter.evaluate = function (hs_zddMonadPlus26D6ha, hs_eta26D6hf, hs_eta126D6hc) {
        var hs_zddMonad26D6hb = new $hs.Thunk();
        hs_zddMonad26D6hb.evaluateOnce = function () {
            return $hs.modules.ControlziMonad.hs_zdp1MonadPlus.hscall(hs_zddMonadPlus26D6ha);
        };
        var hs_sat26D6ni = new $hs.Func(1);
        hs_sat26D6ni.evaluate = function (hs_a26D6he) {
            var hs_wild26D6nh = hs_eta26D6hf.hscall(hs_a26D6he);
            switch (hs_wild26D6nh.tag) {
            case 1:
                return $hs.modules.ControlziMonad.hs_mzzero.hscall(hs_zddMonadPlus26D6ha);
            case 2:
                return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6hb, hs_a26D6he);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6hb, hs_eta126D6hc, hs_sat26D6ni);
    };
    this.hs_liftM5.evaluate = function (hs_zddMonad26D6hp, hs_f26D6hF, hs_m126D6hq, hs_m226D6hs, hs_m326D6hu, hs_m426D6hw, hs_m526D6hy) {
        var hs_sat26D6no = new $hs.Func(1);
        hs_sat26D6no.evaluate = function (hs_x126D6hA) {
            var hs_sat26D6nn = new $hs.Func(1);
            hs_sat26D6nn.evaluate = function (hs_x226D6hB) {
                var hs_sat26D6nm = new $hs.Func(1);
                hs_sat26D6nm.evaluate = function (hs_x326D6hC) {
                    var hs_sat26D6nl = new $hs.Func(1);
                    hs_sat26D6nl.evaluate = function (hs_x426D6hD) {
                        var hs_sat26D6nk = new $hs.Func(1);
                        hs_sat26D6nk.evaluate = function (hs_x526D6hE) {
                            var hs_sat26D6nj = new $hs.Thunk();
                            hs_sat26D6nj.evaluateOnce = function () {
                                return hs_f26D6hF.hscall(hs_x126D6hA, hs_x226D6hB, hs_x326D6hC, hs_x426D6hD, hs_x526D6hE);
                            };
                            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6hp, hs_sat26D6nj);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6hp, hs_m526D6hy, hs_sat26D6nk);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6hp, hs_m426D6hw, hs_sat26D6nl);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6hp, hs_m326D6hu, hs_sat26D6nm);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6hp, hs_m226D6hs, hs_sat26D6nn);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6hp, hs_m126D6hq, hs_sat26D6no);
    };
    this.hs_liftM4.evaluate = function (hs_zddMonad26D6hS, hs_f26D6i5, hs_m126D6hT, hs_m226D6hV, hs_m326D6hX, hs_m426D6hZ) {
        var hs_sat26D6nt = new $hs.Func(1);
        hs_sat26D6nt.evaluate = function (hs_x126D6i1) {
            var hs_sat26D6ns = new $hs.Func(1);
            hs_sat26D6ns.evaluate = function (hs_x226D6i2) {
                var hs_sat26D6nr = new $hs.Func(1);
                hs_sat26D6nr.evaluate = function (hs_x326D6i3) {
                    var hs_sat26D6nq = new $hs.Func(1);
                    hs_sat26D6nq.evaluate = function (hs_x426D6i4) {
                        var hs_sat26D6np = new $hs.Thunk();
                        hs_sat26D6np.evaluateOnce = function () {
                            return hs_f26D6i5.hscall(hs_x126D6i1, hs_x226D6i2, hs_x326D6i3, hs_x426D6i4);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6hS, hs_sat26D6np);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6hS, hs_m426D6hZ, hs_sat26D6nq);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6hS, hs_m326D6hX, hs_sat26D6nr);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6hS, hs_m226D6hV, hs_sat26D6ns);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6hS, hs_m126D6hT, hs_sat26D6nt);
    };
    this.hs_liftM3.evaluate = function (hs_zddMonad26D6ig, hs_f26D6iq, hs_m126D6ih, hs_m226D6ij, hs_m326D6il) {
        var hs_sat26D6nx = new $hs.Func(1);
        hs_sat26D6nx.evaluate = function (hs_x126D6in) {
            var hs_sat26D6nw = new $hs.Func(1);
            hs_sat26D6nw.evaluate = function (hs_x226D6io) {
                var hs_sat26D6nv = new $hs.Func(1);
                hs_sat26D6nv.evaluate = function (hs_x326D6ip) {
                    var hs_sat26D6nu = new $hs.Thunk();
                    hs_sat26D6nu.evaluateOnce = function () {
                        return hs_f26D6iq.hscall(hs_x126D6in, hs_x226D6io, hs_x326D6ip);
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6ig, hs_sat26D6nu);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6ig, hs_m326D6il, hs_sat26D6nv);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6ig, hs_m226D6ij, hs_sat26D6nw);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6ig, hs_m126D6ih, hs_sat26D6nx);
    };
    this.hs_liftM2.evaluate = function (hs_zddMonad26D6iz, hs_f26D6iG, hs_m126D6iA, hs_m226D6iC) {
        var hs_sat26D6nA = new $hs.Func(1);
        hs_sat26D6nA.evaluate = function (hs_x126D6iE) {
            var hs_sat26D6nz = new $hs.Func(1);
            hs_sat26D6nz.evaluate = function (hs_x226D6iF) {
                var hs_sat26D6ny = new $hs.Thunk();
                hs_sat26D6ny.evaluateOnce = function () {
                    return hs_f26D6iG.hscall(hs_x126D6iE, hs_x226D6iF);
                };
                return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6iz, hs_sat26D6ny);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6iz, hs_m226D6iC, hs_sat26D6nz);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6iz, hs_m126D6iA, hs_sat26D6nA);
    };
    this.hs_ap.evaluate = function (hs_zddMonad26D6iL, hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.ControlziMonad.hs_liftM2.hscall(hs_zddMonad26D6iL, $hs.modules.GHCziBase.hs_id, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_liftM.evaluate = function (hs_zddMonad26D6iP, hs_f26D6iT, hs_m126D6iQ) {
        var hs_sat26D6nC = new $hs.Func(1);
        hs_sat26D6nC.evaluate = function (hs_x126D6iS) {
            var hs_sat26D6nB = new $hs.Thunk();
            hs_sat26D6nB.evaluateOnce = function () {
                return hs_f26D6iT.hscall(hs_x126D6iS);
            };
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6iP, hs_sat26D6nB);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6iP, hs_m126D6iQ, hs_sat26D6nC);
    };
    this.hs_unless.evaluate = function (hs_zddMonad26D6j2, hs_p26D6iZ, hs_s26D6j1) {
        var hs_wild26D6nD = hs_p26D6iZ;
        if (hs_p26D6iZ.notEvaluated) {
            hs_wild26D6nD = hs_p26D6iZ.hscall();
        }
        switch (hs_wild26D6nD.tag) {
        case 1:
            if (hs_s26D6j1.notEvaluated) {
                return hs_s26D6j1.hscall();
            } else {
                return hs_s26D6j1;
            }
        case 2:
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6j2, $hs.modules.GHCziUnit.hs_Z0T);
        }
    };
    this.hs_when.evaluate = function (hs_zddMonad26D6j8, hs_p26D6j6, hs_s26D6j9) {
        var hs_wild26D6nE = hs_p26D6j6;
        if (hs_p26D6j6.notEvaluated) {
            hs_wild26D6nE = hs_p26D6j6.hscall();
        }
        switch (hs_wild26D6nE.tag) {
        case 1:
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6j8, $hs.modules.GHCziUnit.hs_Z0T);
        case 2:
            if (hs_s26D6j9.notEvaluated) {
                return hs_s26D6j9.hscall();
            } else {
                return hs_s26D6j9;
            }
        }
    };
    this.hs_foldM.evaluate = function (hs_zddMonad26D6jg, hs_ds26D6jl, hs_a26D6jh, hs_ds126D6je) {
        var hs_wild26D6nF = hs_ds126D6je;
        if (hs_ds126D6je.notEvaluated) {
            hs_wild26D6nF = hs_ds126D6je.hscall();
        }
        switch (hs_wild26D6nF.tag) {
        case 1:
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6jg, hs_a26D6jh);
        case 2:
            var hs_x26D6jk = hs_wild26D6nF.data[0];
            var hs_xs26D6jp = hs_wild26D6nF.data[1];
            var hs_sat26D6nG = new $hs.Func(1);
            hs_sat26D6nG.evaluate = function (hs_fax26D6jo) {
                return $hs.modules.ControlziMonad.hs_foldM.hscall(hs_zddMonad26D6jg, hs_ds26D6jl, hs_fax26D6jo, hs_xs26D6jp);
            };
            var hs_sat26D6nH = new $hs.Thunk();
            hs_sat26D6nH.evaluateOnce = function () {
                return hs_ds26D6jl.hscall(hs_a26D6jh, hs_x26D6jk);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6jg, hs_sat26D6nH, hs_sat26D6nG);
        }
    };
    this.hs_foldMzu.evaluate = function (hs_zddMonad26D6jv, hs_f26D6jw, hs_a26D6jx, hs_xs26D6jy) {
        var hs_sat26D6nI = new $hs.Thunk();
        hs_sat26D6nI.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6jv, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26D6nJ = new $hs.Thunk();
        hs_sat26D6nJ.evaluateOnce = function () {
            return $hs.modules.ControlziMonad.hs_foldM.hscall(hs_zddMonad26D6jv, hs_f26D6jw, hs_a26D6jx, hs_xs26D6jy);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall(hs_zddMonad26D6jv, hs_sat26D6nJ, hs_sat26D6nI);
    };
    this.hs_join.evaluate = function (hs_zddMonad26D6jD, hs_x26D6jE) {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6jD, hs_x26D6jE, $hs.modules.GHCziBase.hs_id);
    };
    this.hs_void.evaluate = function (hs_zddFunctor26D6jG) {
        var hs_sat26D6nK = new $hs.Thunk();
        hs_sat26D6nK.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_const.hscall($hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_fmap.hscall(hs_zddFunctor26D6jG, hs_sat26D6nK);
    };
    this.hs_forever.evaluate = function (hs_zddMonad26D6jK, hs_a26D6jL) {
        var hs_sat26D6nL = new $hs.Thunk();
        hs_sat26D6nL.evaluateOnce = function () {
            return $hs.modules.ControlziMonad.hs_forever.hscall(hs_zddMonad26D6jK, hs_a26D6jL);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall(hs_zddMonad26D6jK, hs_a26D6jL, hs_sat26D6nL);
    };
    this.hs_zgzezg.evaluate = function (hs_zddMonad26D6jR, hs_f26D6jT, hs_g26D6jV, hs_x26D6jS) {
        var hs_sat26D6nM = new $hs.Thunk();
        hs_sat26D6nM.evaluateOnce = function () {
            return hs_f26D6jT.hscall(hs_x26D6jS);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6jR, hs_sat26D6nM, hs_g26D6jV);
    };
    this.hs_zlzezl.evaluate = function (hs_zddMonad26D6jX) {
        var hs_sat26D6nN = new $hs.Func(3);
        hs_sat26D6nN.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return $hs.modules.ControlziMonad.hs_zgzezg.hscall(hs_zddMonad26D6jX, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_flip.hscall(hs_sat26D6nN);
    };
    this.hs_msum.evaluate = function (hs_zddMonadPlus26D6k0) {
        var hs_sat26D6nO = new $hs.Thunk();
        hs_sat26D6nO.evaluateOnce = function () {
            return $hs.modules.ControlziMonad.hs_mzzero.hscall(hs_zddMonadPlus26D6k0);
        };
        var hs_sat26D6nP = new $hs.Thunk();
        hs_sat26D6nP.evaluateOnce = function () {
            return $hs.modules.ControlziMonad.hs_mplus.hscall(hs_zddMonadPlus26D6k0);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26D6nP, hs_sat26D6nO);
    };
    this.hs_filterM.evaluate = function (hs_zddMonad26D6k8, hs_ds26D6kc, hs_ds126D6k6) {
        var hs_wild26D6nQ = hs_ds126D6k6;
        if (hs_ds126D6k6.notEvaluated) {
            hs_wild26D6nQ = hs_ds126D6k6.hscall();
        }
        switch (hs_wild26D6nQ.tag) {
        case 1:
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6k8, $hs.modules.GHCziTypes.hs_ZMZN);
        case 2:
            var hs_x26D6kb = hs_wild26D6nQ.data[0];
            var hs_xs26D6kf = hs_wild26D6nQ.data[1];
            var hs_sat26D6nV = new $hs.Func(1);
            hs_sat26D6nV.evaluate = function (hs_flg26D6ki) {
                var hs_sat26D6nT = new $hs.Func(1);
                hs_sat26D6nT.evaluate = function (hs_ys26D6kk) {
                    var hs_sat26D6nS = new $hs.Thunk();
                    hs_sat26D6nS.evaluateOnce = function () {
                        var hs_wild126D6nR = hs_flg26D6ki;
                        if (hs_flg26D6ki.notEvaluated) {
                            hs_wild126D6nR = hs_flg26D6ki.hscall();
                        }
                        switch (hs_wild126D6nR.tag) {
                        case 1:
                            if (hs_ys26D6kk.notEvaluated) {
                                return hs_ys26D6kk.hscall();
                            } else {
                                return hs_ys26D6kk;
                            }
                        case 2:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_x26D6kb, hs_ys26D6kk];
                            return $res;
                        }
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6k8, hs_sat26D6nS);
                };
                var hs_sat26D6nU = new $hs.Thunk();
                hs_sat26D6nU.evaluateOnce = function () {
                    return $hs.modules.ControlziMonad.hs_filterM.hscall(hs_zddMonad26D6k8, hs_ds26D6kc, hs_xs26D6kf);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6k8, hs_sat26D6nU, hs_sat26D6nT);
            };
            var hs_sat26D6nW = new $hs.Thunk();
            hs_sat26D6nW.evaluateOnce = function () {
                return hs_ds26D6kc.hscall(hs_x26D6kb);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6k8, hs_sat26D6nW, hs_sat26D6nV);
        }
    };
    this.hs_guard.evaluate = function (hs_zddMonadPlus26D6ks, hs_eta26D6kq) {
        var hs_wild26D6nX = hs_eta26D6kq;
        if (hs_eta26D6kq.notEvaluated) {
            hs_wild26D6nX = hs_eta26D6kq.hscall();
        }
        switch (hs_wild26D6nX.tag) {
        case 1:
            return $hs.modules.ControlziMonad.hs_mzzero.hscall(hs_zddMonadPlus26D6ks);
        case 2:
            var hs_sat26D6nY = $hs.modules.ControlziMonad.hs_zdp1MonadPlus.hscall(hs_zddMonadPlus26D6ks);
            return $hs.modules.GHCziBase.hs_return.hscall(hs_sat26D6nY, $hs.modules.GHCziUnit.hs_Z0T);
        }
    };
    this.hs_sequencezu.evaluate = function (hs_zddMonad26D6kw, hs_eta26D6kz) {
        var hs_sat26D6nZ = new $hs.Thunk();
        hs_sat26D6nZ.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6kw, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26D6o0 = new $hs.Thunk();
        hs_sat26D6o0.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_zgzg.hscall(hs_zddMonad26D6kw);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26D6o0, hs_sat26D6nZ, hs_eta26D6kz);
    };
    this.hs_mapMzu.evaluate = function (hs_zddMonad26D6kD, hs_eta26D6kG, hs_eta126D6kH) {
        var hs_sat26D6o1 = new $hs.Thunk();
        hs_sat26D6o1.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_map.hscall(hs_eta26D6kG, hs_eta126D6kH);
        };
        var hs_sat26D6o2 = new $hs.Thunk();
        hs_sat26D6o2.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6kD, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26D6o3 = new $hs.Thunk();
        hs_sat26D6o3.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_zgzg.hscall(hs_zddMonad26D6kD);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26D6o3, hs_sat26D6o2, hs_sat26D6o1);
    };
    this.hs_forMzu.evaluate = function (hs_zddMonad26D6kK) {
        var hs_sat26D6o4 = new $hs.Func(2);
        hs_sat26D6o4.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return $hs.modules.ControlziMonad.hs_mapMzu.hscall(hs_zddMonad26D6kK, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_flip.hscall(hs_sat26D6o4);
    };
    this.hs_zzipWithMzu.evaluate = function (hs_zddMonad26D6kQ, hs_f26D6kT, hs_xs26D6kU, hs_ys26D6kV) {
        var hs_sat26D6o5 = new $hs.Thunk();
        hs_sat26D6o5.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_zzipWith.hscall(hs_f26D6kT, hs_xs26D6kU, hs_ys26D6kV);
        };
        var hs_sat26D6o6 = new $hs.Thunk();
        hs_sat26D6o6.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6kQ, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26D6o7 = new $hs.Thunk();
        hs_sat26D6o7.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_zgzg.hscall(hs_zddMonad26D6kQ);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26D6o7, hs_sat26D6o6, hs_sat26D6o5);
    };
    this.hs_replicateMzu.evaluate = function (hs_zddMonad26D6l0, hs_n26D6l3, hs_x26D6l4) {
        var hs_sat26D6o8 = new $hs.Thunk();
        hs_sat26D6o8.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_replicate.hscall(hs_n26D6l3, hs_x26D6l4);
        };
        var hs_sat26D6o9 = new $hs.Thunk();
        hs_sat26D6o9.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6l0, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26D6oa = new $hs.Thunk();
        hs_sat26D6oa.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_zgzg.hscall(hs_zddMonad26D6l0);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26D6oa, hs_sat26D6o9, hs_sat26D6o8);
    };
    this.hs_sequence.evaluate = function (hs_zddMonad26D6la, hs_eta26D6lm) {
        var hs_sat26D6ob = new $hs.Thunk();
        hs_sat26D6ob.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6la, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        var hs_sat26D6of = new $hs.Func(2);
        hs_sat26D6of.evaluate = function (hs_m26D6lb, hs_mzq26D6ld) {
            var hs_sat26D6oe = new $hs.Func(1);
            hs_sat26D6oe.evaluate = function (hs_x26D6lf) {
                var hs_sat26D6od = new $hs.Func(1);
                hs_sat26D6od.evaluate = function (hs_xs26D6lg) {
                    var hs_sat26D6oc = new $hs.Data(2);
                    hs_sat26D6oc.data = [hs_x26D6lf, hs_xs26D6lg];
                    return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6la, hs_sat26D6oc);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6la, hs_mzq26D6ld, hs_sat26D6od);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6la, hs_m26D6lb, hs_sat26D6oe);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26D6of, hs_sat26D6ob, hs_eta26D6lm);
    };
    this.hs_mapM.evaluate = function (hs_zddMonad26D6ls, hs_eta26D6lE, hs_eta126D6lF) {
        var hs_sat26D6og = new $hs.Thunk();
        hs_sat26D6og.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_map.hscall(hs_eta26D6lE, hs_eta126D6lF);
        };
        var hs_sat26D6oh = new $hs.Thunk();
        hs_sat26D6oh.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6ls, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        var hs_sat26D6ol = new $hs.Func(2);
        hs_sat26D6ol.evaluate = function (hs_m26D6lt, hs_mzq26D6lv) {
            var hs_sat26D6ok = new $hs.Func(1);
            hs_sat26D6ok.evaluate = function (hs_x26D6lx) {
                var hs_sat26D6oj = new $hs.Func(1);
                hs_sat26D6oj.evaluate = function (hs_xs26D6ly) {
                    var hs_sat26D6oi = new $hs.Data(2);
                    hs_sat26D6oi.data = [hs_x26D6lx, hs_xs26D6ly];
                    return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6ls, hs_sat26D6oi);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6ls, hs_mzq26D6lv, hs_sat26D6oj);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6ls, hs_m26D6lt, hs_sat26D6ok);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26D6ol, hs_sat26D6oh, hs_sat26D6og);
    };
    this.hs_forM.evaluate = function (hs_zddMonad26D6lI) {
        var hs_sat26D6om = new $hs.Func(2);
        hs_sat26D6om.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return $hs.modules.ControlziMonad.hs_mapM.hscall(hs_zddMonad26D6lI, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_flip.hscall(hs_sat26D6om);
    };
    this.hs_mapAndUnzzipM.evaluate = function (hs_zddMonad26D6lN, hs_f26D6m1, hs_xs26D6m2) {
        var hs_sat26D6oo = new $hs.Thunk();
        hs_sat26D6oo.evaluateOnce = function () {
            var hs_sat26D6on = new $hs.Thunk();
            hs_sat26D6on.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6lN);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D6on, $hs.modules.GHCziList.hs_unzzip);
        };
        var hs_sat26D6ov = new $hs.Thunk();
        hs_sat26D6ov.evaluateOnce = function () {
            var hs_sat26D6op = new $hs.Thunk();
            hs_sat26D6op.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_map.hscall(hs_f26D6m1, hs_xs26D6m2);
            };
            var hs_sat26D6oq = new $hs.Thunk();
            hs_sat26D6oq.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6lN, $hs.modules.GHCziTypes.hs_ZMZN);
            };
            var hs_sat26D6ou = new $hs.Func(2);
            hs_sat26D6ou.evaluate = function (hs_m26D6lQ, hs_mzq26D6lS) {
                var hs_sat26D6ot = new $hs.Func(1);
                hs_sat26D6ot.evaluate = function (hs_x26D6lU) {
                    var hs_sat26D6os = new $hs.Func(1);
                    hs_sat26D6os.evaluate = function (hs_xs126D6lV) {
                        var hs_sat26D6or = new $hs.Data(2);
                        hs_sat26D6or.data = [hs_x26D6lU, hs_xs126D6lV];
                        return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6lN, hs_sat26D6or);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6lN, hs_mzq26D6lS, hs_sat26D6os);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6lN, hs_m26D6lQ, hs_sat26D6ot);
            };
            return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26D6ou, hs_sat26D6oq, hs_sat26D6op);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6lN, hs_sat26D6ov, hs_sat26D6oo);
    };
    this.hs_zzipWithM.evaluate = function (hs_zddMonad26D6md, hs_f26D6mp, hs_xs26D6mq, hs_ys26D6mr) {
        var hs_sat26D6ow = new $hs.Thunk();
        hs_sat26D6ow.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_zzipWith.hscall(hs_f26D6mp, hs_xs26D6mq, hs_ys26D6mr);
        };
        var hs_sat26D6ox = new $hs.Thunk();
        hs_sat26D6ox.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6md, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        var hs_sat26D6oB = new $hs.Func(2);
        hs_sat26D6oB.evaluate = function (hs_m26D6me, hs_mzq26D6mg) {
            var hs_sat26D6oA = new $hs.Func(1);
            hs_sat26D6oA.evaluate = function (hs_x26D6mi) {
                var hs_sat26D6oz = new $hs.Func(1);
                hs_sat26D6oz.evaluate = function (hs_xs126D6mj) {
                    var hs_sat26D6oy = new $hs.Data(2);
                    hs_sat26D6oy.data = [hs_x26D6mi, hs_xs126D6mj];
                    return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6md, hs_sat26D6oy);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6md, hs_mzq26D6mg, hs_sat26D6oz);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6md, hs_m26D6me, hs_sat26D6oA);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26D6oB, hs_sat26D6ox, hs_sat26D6ow);
    };
    this.hs_replicateM.evaluate = function (hs_zddMonad26D6my, hs_n26D6mK, hs_x26D6mL) {
        var hs_sat26D6oC = new $hs.Thunk();
        hs_sat26D6oC.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_replicate.hscall(hs_n26D6mK, hs_x26D6mL);
        };
        var hs_sat26D6oD = new $hs.Thunk();
        hs_sat26D6oD.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6my, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        var hs_sat26D6oH = new $hs.Func(2);
        hs_sat26D6oH.evaluate = function (hs_m26D6mz, hs_mzq26D6mB) {
            var hs_sat26D6oG = new $hs.Func(1);
            hs_sat26D6oG.evaluate = function (hs_x126D6mD) {
                var hs_sat26D6oF = new $hs.Func(1);
                hs_sat26D6oF.evaluate = function (hs_xs26D6mE) {
                    var hs_sat26D6oE = new $hs.Data(2);
                    hs_sat26D6oE.data = [hs_x126D6mD, hs_xs26D6mE];
                    return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D6my, hs_sat26D6oE);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6my, hs_mzq26D6mB, hs_sat26D6oF);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6my, hs_m26D6mz, hs_sat26D6oG);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26D6oH, hs_sat26D6oD, hs_sat26D6oC);
    };
    hs_zezlzl125uHQy.evaluate = function (hs_f26D6mS, hs_x26D6mR) {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_x26D6mR, hs_f26D6mS);
    };
    this.hs_zezlzl.evaluate = function (hs_zddMonad26D6mW, hs_f26D6mY, hs_x26D6mX) {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall(hs_zddMonad26D6mW, hs_x26D6mX, hs_f26D6mY);
    };
    this.hs_zdfMonadPlusZMZN.data = [$hs.modules.GHCziBase.hs_zdfMonadZMZN, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziBase.hs_zpzp];
    hs_zdcmplus25uHQK.evaluate = function (hs_ds26D6n3, hs_ys26D6n5) {
        var hs_wild26D6n7 = hs_ds26D6n3;
        if (hs_ds26D6n3.notEvaluated) {
            hs_wild26D6n7 = hs_ds26D6n3.hscall();
        }
        switch (hs_wild26D6n7.tag) {
        case 1:
            if (hs_ys26D6n5.notEvaluated) {
                return hs_ys26D6n5.hscall();
            } else {
                return hs_ys26D6n5;
            }
        case 2:
            if (hs_wild26D6n7.notEvaluated) {
                return hs_wild26D6n7.hscall();
            } else {
                return hs_wild26D6n7;
            }
        }
    };
    this.hs_zdfMonadPlusMaybe.data = [$hs.modules.DataziMaybe.hs_zdfMonadMaybe, $hs.modules.DataziMaybe.hs_Nothing, hs_zdcmplus25uHQK];
    this.hs_DZCMonadPlus.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
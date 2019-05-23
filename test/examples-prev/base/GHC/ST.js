
$hs.modules.GHCziST = new $hs.Module();
$hs.modules.GHCziST.dependencies = ["GHC.Prim", "GHC.Base", "GHC.Show"];
$hs.modules.GHCziST.initBeforeDependencies = function () {
    this.hs_unsafeInterleaveST = new $hs.Func(2);
    this.hs_liftST = new $hs.Func(2);
    this.hs_fixST = new $hs.Func(1);
    this.hs_zdfFunctorST = new $hs.Data(1);
    this.hs_zdfMonadST = new $hs.Data(1);
    this.hs_zdfShowST = new $hs.Data(1);
    this.hs_runSTRep = new $hs.Func(1);
    this.hs_runST = new $hs.Func(1);
    this.hs_STret = new $hs.Func(2);
    this.hs_ST = new $hs.Func(1);
    this.hs_unsafeInterleaveST.notEvaluated = true;
    this.hs_unsafeInterleaveST.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziST.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_liftST.notEvaluated = true;
    this.hs_liftST.evaluate = function (hs_ds26DAWs, hs_s26DAWr) {
        $hs.modules.GHCziST.loadDependencies();
        return this.evaluate(hs_ds26DAWs, hs_s26DAWr);
    };
    this.hs_fixST.notEvaluated = true;
    this.hs_fixST.evaluate = function (hs_k26DAWJ) {
        $hs.modules.GHCziST.loadDependencies();
        return this.evaluate(hs_k26DAWJ);
    };
    this.hs_zdfFunctorST.notEvaluated = true;
    this.hs_zdfFunctorST.evaluate = function () {
        $hs.modules.GHCziST.loadDependencies();
        return this;
    };
    this.hs_zdfMonadST.notEvaluated = true;
    this.hs_zdfMonadST.evaluate = function () {
        $hs.modules.GHCziST.loadDependencies();
        return this;
    };
    this.hs_zdfShowST.notEvaluated = true;
    this.hs_zdfShowST.evaluate = function () {
        $hs.modules.GHCziST.loadDependencies();
        return this;
    };
    this.hs_runSTRep.notEvaluated = true;
    this.hs_runSTRep.evaluate = function (hs_stzurep26DAY2) {
        $hs.modules.GHCziST.loadDependencies();
        return this.evaluate(hs_stzurep26DAY2);
    };
    this.hs_runST.notEvaluated = true;
    this.hs_runST.evaluate = function (hs_eta26DAY8) {
        $hs.modules.GHCziST.loadDependencies();
        return this.evaluate(hs_eta26DAY8);
    };
    this.hs_STret.notEvaluated = true;
    this.hs_STret.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziST.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_ST.notEvaluated = true;
    this.hs_ST.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziST.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.GHCziST.initAfterDependencies = function () {
    this.hs_unsafeInterleaveST.notEvaluated = false;
    this.hs_liftST.notEvaluated = false;
    this.hs_fixST.notEvaluated = false;
    this.hs_zdfFunctorST.notEvaluated = false;
    this.hs_zdfFunctorST.evaluate = function () {
        return this;
    };
    this.hs_zdfMonadST.notEvaluated = false;
    this.hs_zdfMonadST.evaluate = function () {
        return this;
    };
    this.hs_zdfShowST.notEvaluated = false;
    this.hs_zdfShowST.evaluate = function () {
        return this;
    };
    this.hs_runSTRep.notEvaluated = false;
    this.hs_runST.notEvaluated = false;
    this.hs_STret.notEvaluated = false;
    this.hs_ST.notEvaluated = false;
    var hs_a25vcpZ = new $hs.Func(2);
    var hs_zdcfmap25vcqI = new $hs.Func(2);
    var hs_zdczlzd25vcr0 = new $hs.Thunk();
    var hs_a125vcr2 = new $hs.Func(2);
    var hs_zdcreturn25vcr8 = new $hs.Func(2);
    var hs_a225vcra = new $hs.Func(3);
    var hs_zdczgzgze25vcrn = new $hs.Func(3);
    var hs_zdczgzg25vcrp = new $hs.Func(2);
    var hs_zdcfail25vcrr = new $hs.Thunk();
    var hs_zdcshowsPrec25vcrz = new $hs.Func(2);
    var hs_zdcshowList25vcrG = new $hs.Thunk();
    var hs_zdcshow25vcrI = new $hs.Thunk();
    hs_a25vcpZ.evaluate = function (hs_ds26DAWj, hs_s26DAWi) {
        var hs_sat26DAYb = new $hs.Thunk();
        hs_sat26DAYb.evaluateOnce = function () {
            var hs_wild26DAYa = hs_ds26DAWj.hscall(hs_s26DAWi);
            var hs_res26DAWn = hs_wild26DAYa[1];
            if (hs_res26DAWn.notEvaluated) {
                return hs_res26DAWn.hscall();
            } else {
                return hs_res26DAWn;
            }
        };
        return [hs_s26DAWi, hs_sat26DAYb];
    };
    this.hs_unsafeInterleaveST.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a25vcpZ.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_liftST.evaluate = function (hs_ds26DAWs, hs_s26DAWr) {
        var hs_wild26DAYc = hs_ds26DAWs.hscall(hs_s26DAWr);
        var hs_szq26DAWw = hs_wild26DAYc[0];
        var hs_r26DAWx = hs_wild26DAYc[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_szq26DAWw, hs_r26DAWx];
        return $res;
    };
    this.hs_fixST.evaluate = function (hs_k26DAWJ) {
        var hs_sat26DAYi = new $hs.Func(1);
        hs_sat26DAYi.evaluate = function (hs_s26DAWL) {
            var hs_ans26DAWE = new $hs.Thunk();
            hs_ans26DAWE.evaluateOnce = function () {
                var hs_sat26DAYg = new $hs.Thunk();
                hs_sat26DAYg.evaluateOnce = function () {
                    var hs_wild26DAYe = hs_ans26DAWE;
                    if (hs_ans26DAWE.notEvaluated) {
                        hs_wild26DAYe = hs_ans26DAWE.hscall();
                    }
                    var hs_r26DAWI = hs_wild26DAYe.data[1];
                    if (hs_r26DAWI.notEvaluated) {
                        return hs_r26DAWI.hscall();
                    } else {
                        return hs_r26DAWI;
                    }
                };
                var hs_wild26DAYf = hs_k26DAWJ.hscall(hs_sat26DAYg, hs_s26DAWL);
                var hs_szq26DAWP = hs_wild26DAYf[0];
                var hs_r26DAWQ = hs_wild26DAYf[1];
                var $res = new $hs.Data(1);
                $res.data = [hs_szq26DAWP, hs_r26DAWQ];
                return $res;
            };
            var hs_wild26DAYh = hs_ans26DAWE;
            if (hs_ans26DAWE.notEvaluated) {
                hs_wild26DAYh = hs_ans26DAWE.hscall();
            }
            var hs_szq26DAWU = hs_wild26DAYh.data[0];
            var hs_x26DAWV = hs_wild26DAYh.data[1];
            return [hs_szq26DAWU, hs_x26DAWV];
        };
        var hs_sat26DAYj = new $hs.Func(1);
        hs_sat26DAYj.evaluate = function (hs_tpl26DAWA) {
            if (hs_tpl26DAWA.notEvaluated) {
                return hs_tpl26DAWA.hscall();
            } else {
                return hs_tpl26DAWA;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DAYj, hs_sat26DAYi);
    };
    hs_zdcfmap25vcqI.evaluate = function (hs_f26DAXc, hs_ds26DAX6) {
        var hs_sat26DAYm = new $hs.Func(1);
        hs_sat26DAYm.evaluate = function (hs_s26DAX5) {
            var hs_wild26DAYk = hs_ds26DAX6.hscall(hs_s26DAX5);
            var hs_newzus26DAXa = hs_wild26DAYk[0];
            var hs_r26DAXb = hs_wild26DAYk[1];
            var hs_sat26DAYl = new $hs.Thunk();
            hs_sat26DAYl.evaluateOnce = function () {
                return hs_f26DAXc.hscall(hs_r26DAXb);
            };
            return [hs_newzus26DAXa, hs_sat26DAYl];
        };
        var hs_sat26DAYn = new $hs.Func(1);
        hs_sat26DAYn.evaluate = function (hs_tpl26DAX2) {
            if (hs_tpl26DAX2.notEvaluated) {
                return hs_tpl26DAX2.hscall();
            } else {
                return hs_tpl26DAX2;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DAYn, hs_sat26DAYm);
    };
    this.hs_zdfFunctorST.data = [hs_zdcfmap25vcqI, hs_zdczlzd25vcr0];
    hs_zdczlzd25vcr0.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zddmzlzd.hscall($hs.modules.GHCziST.hs_zdfFunctorST);
    };
    hs_a125vcr2.evaluate = function (hs_eta26DAXm, hs_s26DAXl) {
        return [hs_s26DAXl, hs_eta26DAXm];
    };
    hs_zdcreturn25vcr8.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a125vcr2.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a225vcra.evaluate = function (hs_eta26DAXv, hs_eta126DAXB, hs_s26DAXu) {
        var hs_wild26DAYo = hs_eta26DAXv.hscall(hs_s26DAXu);
        var hs_newzus26DAXA = hs_wild26DAYo[0];
        var hs_r26DAXz = hs_wild26DAYo[1];
        return hs_eta126DAXB.hscall(hs_r26DAXz, hs_newzus26DAXA);
    };
    hs_zdczgzgze25vcrn.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a225vcra.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfMonadST.data = [hs_zdczgzgze25vcrn, hs_zdczgzg25vcrp, hs_zdcreturn25vcr8, hs_zdcfail25vcrr];
    hs_zdczgzg25vcrp.evaluate = function (hs_eta26DAXK, hs_eta126DAXM) {
        var hs_sat26DAYq = new $hs.Func(1);
        hs_sat26DAYq.evaluate = function (hs_ds26DAYp) {
            if (hs_eta126DAXM.notEvaluated) {
                return hs_eta126DAXM.hscall();
            } else {
                return hs_eta126DAXM;
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziST.hs_zdfMonadST, hs_eta26DAXK, hs_sat26DAYq);
    };
    hs_zdcfail25vcrr.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zddmfail.hscall($hs.modules.GHCziST.hs_zdfMonadST);
    };
    hs_zdcshowsPrec25vcrz.evaluate = function (hs_ds26DAXT, hs_ds126DAXU) {
        var hs_sat26DAYr = new $hs.Thunk();
        hs_sat26DAYr.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("<<ST action>>\x00");
        };
        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DAYr);
    };
    this.hs_zdfShowST.data = [hs_zdcshowsPrec25vcrz, hs_zdcshow25vcrI, hs_zdcshowList25vcrG];
    hs_zdcshowList25vcrG.evaluateOnce = function () {
        var hs_sat26DAYt = new $hs.Thunk();
        hs_sat26DAYt.evaluateOnce = function () {
            var hs_sat26DAYs = new $hs.Data(1);
            hs_sat26DAYs.data = [0];
            return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziST.hs_zdfShowST, hs_sat26DAYs);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DAYt);
    };
    hs_zdcshow25vcrI.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziST.hs_zdfShowST);
    };
    this.hs_runSTRep.evaluate = function (hs_stzurep26DAY2) {
        var hs_wild26DAYv = hs_stzurep26DAY2.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
        var hs_r26DAY6 = hs_wild26DAYv[1];
        if (hs_r26DAY6.notEvaluated) {
            return hs_r26DAY6.hscall();
        } else {
            return hs_r26DAY6;
        }
    };
    this.hs_runST.evaluate = function (hs_eta26DAY8) {
        return $hs.modules.GHCziST.hs_runSTRep.hscall(hs_eta26DAY8);
    };
    this.hs_STret.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_ST.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.GHCziST.hs_ST.hscall(hs_eta1cW6l3);
    };
};

$hs.modules.GHCziST = new $hs.Module();
$hs.modules.GHCziST.dependencies = ["GHC.Prim", "GHC.CString", "GHC.Base", "GHC.Show"];
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
    this.hs_liftST.evaluate = function (hs_ds26DdCE, hs_s26DdCD) {
        $hs.modules.GHCziST.loadDependencies();
        return this.evaluate(hs_ds26DdCE, hs_s26DdCD);
    };
    this.hs_fixST.notEvaluated = true;
    this.hs_fixST.evaluate = function (hs_k26DdCV) {
        $hs.modules.GHCziST.loadDependencies();
        return this.evaluate(hs_k26DdCV);
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
    this.hs_runSTRep.evaluate = function (hs_stzurep26DdE4) {
        $hs.modules.GHCziST.loadDependencies();
        return this.evaluate(hs_stzurep26DdE4);
    };
    this.hs_runST.notEvaluated = true;
    this.hs_runST.evaluate = function (hs_eta26DdEa) {
        $hs.modules.GHCziST.loadDependencies();
        return this.evaluate(hs_eta26DdEa);
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
    var hs_a25uP6b = new $hs.Func(2);
    var hs_zdcfmap25uP6T = new $hs.Func(2);
    var hs_zdczlzd25uP7a = new $hs.Thunk();
    var hs_a125uP7b = new $hs.Func(2);
    var hs_zdcreturn25uP7g = new $hs.Func(2);
    var hs_a225uP7h = new $hs.Func(3);
    var hs_zdczgzgze25uP7t = new $hs.Func(3);
    var hs_zdczgzg25uP7u = new $hs.Func(2);
    var hs_zdcfail25uP7v = new $hs.Thunk();
    var hs_zdcshowsPrec25uP7D = new $hs.Func(2);
    var hs_zdcshowList25uP7J = new $hs.Thunk();
    var hs_zdcshow25uP7K = new $hs.Thunk();
    hs_a25uP6b.evaluate = function (hs_ds26DdCv, hs_s26DdCu) {
        var hs_sat26DdEb = new $hs.Thunk();
        hs_sat26DdEb.evaluateOnce = function () {
            var hs_wild26DdEd = hs_ds26DdCv.hscall(hs_s26DdCu);
            var hs_res26DdCz = hs_wild26DdEd[1];
            if (hs_res26DdCz.notEvaluated) {
                return hs_res26DdCz.hscall();
            } else {
                return hs_res26DdCz;
            }
        };
        return [hs_s26DdCu, hs_sat26DdEb];
    };
    this.hs_unsafeInterleaveST.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a25uP6b.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_liftST.evaluate = function (hs_ds26DdCE, hs_s26DdCD) {
        var hs_wild26DdEe = hs_ds26DdCE.hscall(hs_s26DdCD);
        var hs_szq26DdCI = hs_wild26DdEe[0];
        var hs_r26DdCJ = hs_wild26DdEe[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_szq26DdCI, hs_r26DdCJ];
        return $res;
    };
    this.hs_fixST.evaluate = function (hs_k26DdCV) {
        var hs_sat26DdEg = new $hs.Func(1);
        hs_sat26DdEg.evaluate = function (hs_s26DdCX) {
            var hs_ans26DdCQ = new $hs.Thunk();
            hs_ans26DdCQ.evaluateOnce = function () {
                var hs_sat26DdEi = new $hs.Thunk();
                hs_sat26DdEi.evaluateOnce = function () {
                    var hs_wild26DdEl = hs_ans26DdCQ;
                    if (hs_ans26DdCQ.notEvaluated) {
                        hs_wild26DdEl = hs_ans26DdCQ.hscall();
                    }
                    var hs_r26DdCU = hs_wild26DdEl.data[1];
                    if (hs_r26DdCU.notEvaluated) {
                        return hs_r26DdCU.hscall();
                    } else {
                        return hs_r26DdCU;
                    }
                };
                var hs_wild26DdEj = hs_k26DdCV.hscall(hs_sat26DdEi, hs_s26DdCX);
                var hs_szq26DdD1 = hs_wild26DdEj[0];
                var hs_r26DdD2 = hs_wild26DdEj[1];
                var $res = new $hs.Data(1);
                $res.data = [hs_szq26DdD1, hs_r26DdD2];
                return $res;
            };
            var hs_wild26DdEh = hs_ans26DdCQ;
            if (hs_ans26DdCQ.notEvaluated) {
                hs_wild26DdEh = hs_ans26DdCQ.hscall();
            }
            var hs_szq26DdD6 = hs_wild26DdEh.data[0];
            var hs_x26DdD7 = hs_wild26DdEh.data[1];
            return [hs_szq26DdD6, hs_x26DdD7];
        };
        var hs_sat26DdEf = new $hs.Func(1);
        hs_sat26DdEf.evaluate = function (hs_tpl26DdCM) {
            if (hs_tpl26DdCM.notEvaluated) {
                return hs_tpl26DdCM.hscall();
            } else {
                return hs_tpl26DdCM;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DdEf, hs_sat26DdEg);
    };
    hs_zdcfmap25uP6T.evaluate = function (hs_f26DdDn, hs_ds26DdDh) {
        var hs_sat26DdEn = new $hs.Func(1);
        hs_sat26DdEn.evaluate = function (hs_s26DdDg) {
            var hs_wild26DdEp = hs_ds26DdDh.hscall(hs_s26DdDg);
            var hs_newzus26DdDl = hs_wild26DdEp[0];
            var hs_r26DdDm = hs_wild26DdEp[1];
            var hs_sat26DdEo = new $hs.Thunk();
            hs_sat26DdEo.evaluateOnce = function () {
                return hs_f26DdDn.hscall(hs_r26DdDm);
            };
            return [hs_newzus26DdDl, hs_sat26DdEo];
        };
        var hs_sat26DdEm = new $hs.Func(1);
        hs_sat26DdEm.evaluate = function (hs_tpl26DdDd) {
            if (hs_tpl26DdDd.notEvaluated) {
                return hs_tpl26DdDd.hscall();
            } else {
                return hs_tpl26DdDd;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DdEm, hs_sat26DdEn);
    };
    this.hs_zdfFunctorST.data = [hs_zdcfmap25uP6T, hs_zdczlzd25uP7a];
    hs_zdczlzd25uP7a.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zddmzlzd.hscall($hs.modules.GHCziST.hs_zdfFunctorST);
    };
    hs_a125uP7b.evaluate = function (hs_eta26DdDv, hs_s26DdDu) {
        return [hs_s26DdDu, hs_eta26DdDv];
    };
    hs_zdcreturn25uP7g.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a125uP7b.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a225uP7h.evaluate = function (hs_eta26DdDC, hs_eta126DdDI, hs_s26DdDB) {
        var hs_wild26DdEq = hs_eta26DdDC.hscall(hs_s26DdDB);
        var hs_newzus26DdDH = hs_wild26DdEq[0];
        var hs_r26DdDG = hs_wild26DdEq[1];
        return hs_eta126DdDI.hscall(hs_r26DdDG, hs_newzus26DdDH);
    };
    hs_zdczgzgze25uP7t.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a225uP7h.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfMonadST.data = [hs_zdczgzgze25uP7t, hs_zdczgzg25uP7u, hs_zdcreturn25uP7g, hs_zdcfail25uP7v];
    hs_zdczgzg25uP7u.evaluate = function (hs_eta26DdDO, hs_eta126DdDQ) {
        var hs_sat26DdEr = new $hs.Func(1);
        hs_sat26DdEr.evaluate = function (hs_ds26DdDR) {
            if (hs_eta126DdDQ.notEvaluated) {
                return hs_eta126DdDQ.hscall();
            } else {
                return hs_eta126DdDQ;
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziST.hs_zdfMonadST, hs_eta26DdDO, hs_sat26DdEr);
    };
    hs_zdcfail25uP7v.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zddmfail.hscall($hs.modules.GHCziST.hs_zdfMonadST);
    };
    hs_zdcshowsPrec25uP7D.evaluate = function (hs_ds26DdDX, hs_ds126DdDY) {
        var hs_sat26DdEs = new $hs.Thunk();
        hs_sat26DdEs.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("<<ST action>>\x00");
        };
        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DdEs);
    };
    this.hs_zdfShowST.data = [hs_zdcshowsPrec25uP7D, hs_zdcshow25uP7K, hs_zdcshowList25uP7J];
    hs_zdcshowList25uP7J.evaluateOnce = function () {
        var hs_sat26DdEt = new $hs.Thunk();
        hs_sat26DdEt.evaluateOnce = function () {
            var hs_sat26DdEu = new $hs.Data(1);
            hs_sat26DdEu.data = [0];
            return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziST.hs_zdfShowST, hs_sat26DdEu);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DdEt);
    };
    hs_zdcshow25uP7K.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziST.hs_zdfShowST);
    };
    this.hs_runSTRep.evaluate = function (hs_stzurep26DdE4) {
        var hs_wild26DdEw = hs_stzurep26DdE4.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
        var hs_r26DdE8 = hs_wild26DdEw[1];
        if (hs_r26DdE8.notEvaluated) {
            return hs_r26DdE8.hscall();
        } else {
            return hs_r26DdE8;
        }
    };
    this.hs_runST.evaluate = function (hs_eta26DdEa) {
        return $hs.modules.GHCziST.hs_runSTRep.hscall(hs_eta26DdEa);
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

$hs.modules.ControlziConcurrentziMVar = new $hs.Module();
$hs.modules.ControlziConcurrentziMVar.dependencies = ["GHC.Base", "GHC.IO", "GHC.MVar", "Control.Exception.Base"];
$hs.modules.ControlziConcurrentziMVar.initBeforeDependencies = function () {
    this.hs_modifyMVar = new $hs.Func(2);
    this.hs_modifyMVarzu = new $hs.Func(2);
    this.hs_withMVar = new $hs.Func(2);
    this.hs_swapMVar = new $hs.Func(2);
    this.hs_readMVar = new $hs.Func(1);
    this.hs_modifyMVar.notEvaluated = true;
    this.hs_modifyMVar.evaluate = function (hs_eta26DDvm, hs_eta126DDvq) {
        $hs.modules.ControlziConcurrentziMVar.loadDependencies();
        return this.evaluate(hs_eta26DDvm, hs_eta126DDvq);
    };
    this.hs_modifyMVarzu.notEvaluated = true;
    this.hs_modifyMVarzu.evaluate = function (hs_eta26DDvL, hs_eta126DDvP) {
        $hs.modules.ControlziConcurrentziMVar.loadDependencies();
        return this.evaluate(hs_eta26DDvL, hs_eta126DDvP);
    };
    this.hs_withMVar.notEvaluated = true;
    this.hs_withMVar.evaluate = function (hs_eta26DDw3, hs_eta126DDw7) {
        $hs.modules.ControlziConcurrentziMVar.loadDependencies();
        return this.evaluate(hs_eta26DDw3, hs_eta126DDw7);
    };
    this.hs_swapMVar.notEvaluated = true;
    this.hs_swapMVar.evaluate = function (hs_mvar26DDwm, hs_new26DDwp) {
        $hs.modules.ControlziConcurrentziMVar.loadDependencies();
        return this.evaluate(hs_mvar26DDwm, hs_new26DDwp);
    };
    this.hs_readMVar.notEvaluated = true;
    this.hs_readMVar.evaluate = function (hs_m26DDww) {
        $hs.modules.ControlziConcurrentziMVar.loadDependencies();
        return this.evaluate(hs_m26DDww);
    };
};
$hs.modules.ControlziConcurrentziMVar.initAfterDependencies = function () {
    this.hs_modifyMVar.notEvaluated = false;
    this.hs_modifyMVarzu.notEvaluated = false;
    this.hs_withMVar.notEvaluated = false;
    this.hs_swapMVar.notEvaluated = false;
    this.hs_readMVar.notEvaluated = false;
    this.hs_modifyMVar.evaluate = function (hs_eta26DDvm, hs_eta126DDvq) {
        var hs_sat26DDwO = new $hs.Func(1);
        hs_sat26DDwO.evaluate = function (hs_restore26DDvr) {
            var hs_sat26DDwM = new $hs.Func(1);
            hs_sat26DDwM.evaluate = function (hs_a26DDvp) {
                var hs_sat26DDwH = new $hs.Func(1);
                hs_sat26DDwH.evaluate = function (hs_ds26DDvx) {
                    var hs_wild26DDwE = hs_ds26DDvx;
                    if (hs_ds26DDvx.notEvaluated) {
                        hs_wild26DDwE = hs_ds26DDvx.hscall();
                    }
                    var hs_azq26DDvB = hs_wild26DDwE.data[0];
                    var hs_b26DDvD = hs_wild26DDwE.data[1];
                    var hs_sat26DDwF = new $hs.Thunk();
                    hs_sat26DDwF.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_b26DDvD);
                    };
                    var hs_sat26DDwG = new $hs.Thunk();
                    hs_sat26DDwG.evaluateOnce = function () {
                        return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_eta26DDvm, hs_azq26DDvB);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DDwG, hs_sat26DDwF);
                };
                var hs_sat26DDwL = new $hs.Thunk();
                hs_sat26DDwL.evaluateOnce = function () {
                    var hs_sat26DDwI = new $hs.Thunk();
                    hs_sat26DDwI.evaluateOnce = function () {
                        return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_eta26DDvm, hs_a26DDvp);
                    };
                    var hs_sat26DDwK = new $hs.Thunk();
                    hs_sat26DDwK.evaluateOnce = function () {
                        var hs_sat26DDwJ = new $hs.Thunk();
                        hs_sat26DDwJ.evaluateOnce = function () {
                            return hs_eta126DDvq.hscall(hs_a26DDvp);
                        };
                        return hs_restore26DDvr.hscall(hs_sat26DDwJ);
                    };
                    return $hs.modules.ControlziExceptionziBase.hs_onException.hscall(hs_sat26DDwK, hs_sat26DDwI);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DDwL, hs_sat26DDwH);
            };
            var hs_sat26DDwN = new $hs.Thunk();
            hs_sat26DDwN.evaluateOnce = function () {
                return $hs.modules.GHCziMVar.hs_takeMVar.hscall(hs_eta26DDvm);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DDwN, hs_sat26DDwM);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_mask, hs_sat26DDwO);
    };
    this.hs_modifyMVarzu.evaluate = function (hs_eta26DDvL, hs_eta126DDvP) {
        var hs_sat26DDwW = new $hs.Func(1);
        hs_sat26DDwW.evaluate = function (hs_restore26DDvQ) {
            var hs_sat26DDwU = new $hs.Func(1);
            hs_sat26DDwU.evaluate = function (hs_a26DDvO) {
                var hs_sat26DDwP = new $hs.Func(1);
                hs_sat26DDwP.evaluate = function (hs_azq26DDvW) {
                    return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_eta26DDvL, hs_azq26DDvW);
                };
                var hs_sat26DDwT = new $hs.Thunk();
                hs_sat26DDwT.evaluateOnce = function () {
                    var hs_sat26DDwQ = new $hs.Thunk();
                    hs_sat26DDwQ.evaluateOnce = function () {
                        return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_eta26DDvL, hs_a26DDvO);
                    };
                    var hs_sat26DDwS = new $hs.Thunk();
                    hs_sat26DDwS.evaluateOnce = function () {
                        var hs_sat26DDwR = new $hs.Thunk();
                        hs_sat26DDwR.evaluateOnce = function () {
                            return hs_eta126DDvP.hscall(hs_a26DDvO);
                        };
                        return hs_restore26DDvQ.hscall(hs_sat26DDwR);
                    };
                    return $hs.modules.ControlziExceptionziBase.hs_onException.hscall(hs_sat26DDwS, hs_sat26DDwQ);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DDwT, hs_sat26DDwP);
            };
            var hs_sat26DDwV = new $hs.Thunk();
            hs_sat26DDwV.evaluateOnce = function () {
                return $hs.modules.GHCziMVar.hs_takeMVar.hscall(hs_eta26DDvL);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DDwV, hs_sat26DDwU);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_mask, hs_sat26DDwW);
    };
    this.hs_withMVar.evaluate = function (hs_eta26DDw3, hs_eta126DDw7) {
        var hs_sat26DDx6 = new $hs.Func(1);
        hs_sat26DDx6.evaluate = function (hs_restore26DDw8) {
            var hs_sat26DDx4 = new $hs.Func(1);
            hs_sat26DDx4.evaluate = function (hs_a26DDw6) {
                var hs_sat26DDwZ = new $hs.Func(1);
                hs_sat26DDwZ.evaluate = function (hs_b26DDwf) {
                    var hs_sat26DDwX = new $hs.Thunk();
                    hs_sat26DDwX.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_b26DDwf);
                    };
                    var hs_sat26DDwY = new $hs.Thunk();
                    hs_sat26DDwY.evaluateOnce = function () {
                        return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_eta26DDw3, hs_a26DDw6);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DDwY, hs_sat26DDwX);
                };
                var hs_sat26DDx3 = new $hs.Thunk();
                hs_sat26DDx3.evaluateOnce = function () {
                    var hs_sat26DDx0 = new $hs.Thunk();
                    hs_sat26DDx0.evaluateOnce = function () {
                        return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_eta26DDw3, hs_a26DDw6);
                    };
                    var hs_sat26DDx2 = new $hs.Thunk();
                    hs_sat26DDx2.evaluateOnce = function () {
                        var hs_sat26DDx1 = new $hs.Thunk();
                        hs_sat26DDx1.evaluateOnce = function () {
                            return hs_eta126DDw7.hscall(hs_a26DDw6);
                        };
                        return hs_restore26DDw8.hscall(hs_sat26DDx1);
                    };
                    return $hs.modules.ControlziExceptionziBase.hs_onException.hscall(hs_sat26DDx2, hs_sat26DDx0);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DDx3, hs_sat26DDwZ);
            };
            var hs_sat26DDx5 = new $hs.Thunk();
            hs_sat26DDx5.evaluateOnce = function () {
                return $hs.modules.GHCziMVar.hs_takeMVar.hscall(hs_eta26DDw3);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DDx5, hs_sat26DDx4);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_mask, hs_sat26DDx6);
    };
    this.hs_swapMVar.evaluate = function (hs_mvar26DDwm, hs_new26DDwp) {
        var hs_sat26DDxb = new $hs.Thunk();
        hs_sat26DDxb.evaluateOnce = function () {
            var hs_sat26DDx9 = new $hs.Func(1);
            hs_sat26DDx9.evaluate = function (hs_old26DDwr) {
                var hs_sat26DDx7 = new $hs.Thunk();
                hs_sat26DDx7.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_old26DDwr);
                };
                var hs_sat26DDx8 = new $hs.Thunk();
                hs_sat26DDx8.evaluateOnce = function () {
                    return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_mvar26DDwm, hs_new26DDwp);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DDx8, hs_sat26DDx7);
            };
            var hs_sat26DDxa = new $hs.Thunk();
            hs_sat26DDxa.evaluateOnce = function () {
                return $hs.modules.GHCziMVar.hs_takeMVar.hscall(hs_mvar26DDwm);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DDxa, hs_sat26DDx9);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_maskzu, hs_sat26DDxb);
    };
    this.hs_readMVar.evaluate = function (hs_m26DDww) {
        var hs_sat26DDxg = new $hs.Thunk();
        hs_sat26DDxg.evaluateOnce = function () {
            var hs_sat26DDxe = new $hs.Func(1);
            hs_sat26DDxe.evaluate = function (hs_a26DDwz) {
                var hs_sat26DDxc = new $hs.Thunk();
                hs_sat26DDxc.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_a26DDwz);
                };
                var hs_sat26DDxd = new $hs.Thunk();
                hs_sat26DDxd.evaluateOnce = function () {
                    return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_m26DDww, hs_a26DDwz);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DDxd, hs_sat26DDxc);
            };
            var hs_sat26DDxf = new $hs.Thunk();
            hs_sat26DDxf.evaluateOnce = function () {
                return $hs.modules.GHCziMVar.hs_takeMVar.hscall(hs_m26DDww);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DDxf, hs_sat26DDxe);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_maskzu, hs_sat26DDxg);
    };
};
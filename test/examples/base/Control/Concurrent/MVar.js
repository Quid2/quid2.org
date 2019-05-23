
$hs.modules.ControlziConcurrentziMVar = new $hs.Module();
$hs.modules.ControlziConcurrentziMVar.dependencies = ["GHC.Base", "GHC.IO", "GHC.MVar", "Control.Exception.Base"];
$hs.modules.ControlziConcurrentziMVar.initBeforeDependencies = function () {
    this.hs_modifyMVar = new $hs.Func(2);
    this.hs_modifyMVarzu = new $hs.Func(2);
    this.hs_withMVar = new $hs.Func(2);
    this.hs_swapMVar = new $hs.Func(2);
    this.hs_readMVar = new $hs.Func(1);
    this.hs_modifyMVar.notEvaluated = true;
    this.hs_modifyMVar.evaluate = function (hs_eta26DgbB, hs_eta126DgbF) {
        $hs.modules.ControlziConcurrentziMVar.loadDependencies();
        return this.evaluate(hs_eta26DgbB, hs_eta126DgbF);
    };
    this.hs_modifyMVarzu.notEvaluated = true;
    this.hs_modifyMVarzu.evaluate = function (hs_eta26Dgc0, hs_eta126Dgc4) {
        $hs.modules.ControlziConcurrentziMVar.loadDependencies();
        return this.evaluate(hs_eta26Dgc0, hs_eta126Dgc4);
    };
    this.hs_withMVar.notEvaluated = true;
    this.hs_withMVar.evaluate = function (hs_eta26Dgci, hs_eta126Dgcm) {
        $hs.modules.ControlziConcurrentziMVar.loadDependencies();
        return this.evaluate(hs_eta26Dgci, hs_eta126Dgcm);
    };
    this.hs_swapMVar.notEvaluated = true;
    this.hs_swapMVar.evaluate = function (hs_mvar26DgcB, hs_new26DgcE) {
        $hs.modules.ControlziConcurrentziMVar.loadDependencies();
        return this.evaluate(hs_mvar26DgcB, hs_new26DgcE);
    };
    this.hs_readMVar.notEvaluated = true;
    this.hs_readMVar.evaluate = function (hs_m26DgcL) {
        $hs.modules.ControlziConcurrentziMVar.loadDependencies();
        return this.evaluate(hs_m26DgcL);
    };
};
$hs.modules.ControlziConcurrentziMVar.initAfterDependencies = function () {
    this.hs_modifyMVar.notEvaluated = false;
    this.hs_modifyMVarzu.notEvaluated = false;
    this.hs_withMVar.notEvaluated = false;
    this.hs_swapMVar.notEvaluated = false;
    this.hs_readMVar.notEvaluated = false;
    this.hs_modifyMVar.evaluate = function (hs_eta26DgbB, hs_eta126DgbF) {
        var hs_sat26DgcT = new $hs.Func(1);
        hs_sat26DgcT.evaluate = function (hs_restore26DgbG) {
            var hs_sat26DgcV = new $hs.Func(1);
            hs_sat26DgcV.evaluate = function (hs_a26DgbE) {
                var hs_sat26DgcX = new $hs.Func(1);
                hs_sat26DgcX.evaluate = function (hs_ds26DgbM) {
                    var hs_wild26Dgd2 = hs_ds26DgbM;
                    if (hs_ds26DgbM.notEvaluated) {
                        hs_wild26Dgd2 = hs_ds26DgbM.hscall();
                    }
                    var hs_azq26DgbQ = hs_wild26Dgd2.data[0];
                    var hs_b26DgbS = hs_wild26Dgd2.data[1];
                    var hs_sat26Dgd3 = new $hs.Thunk();
                    hs_sat26Dgd3.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_b26DgbS);
                    };
                    var hs_sat26Dgd1 = new $hs.Thunk();
                    hs_sat26Dgd1.evaluateOnce = function () {
                        return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_eta26DgbB, hs_azq26DgbQ);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dgd1, hs_sat26Dgd3);
                };
                var hs_sat26DgcW = new $hs.Thunk();
                hs_sat26DgcW.evaluateOnce = function () {
                    var hs_sat26DgcZ = new $hs.Thunk();
                    hs_sat26DgcZ.evaluateOnce = function () {
                        return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_eta26DgbB, hs_a26DgbE);
                    };
                    var hs_sat26DgcY = new $hs.Thunk();
                    hs_sat26DgcY.evaluateOnce = function () {
                        var hs_sat26Dgd0 = new $hs.Thunk();
                        hs_sat26Dgd0.evaluateOnce = function () {
                            return hs_eta126DgbF.hscall(hs_a26DgbE);
                        };
                        return hs_restore26DgbG.hscall(hs_sat26Dgd0);
                    };
                    return $hs.modules.ControlziExceptionziBase.hs_onException.hscall(hs_sat26DgcY, hs_sat26DgcZ);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DgcW, hs_sat26DgcX);
            };
            var hs_sat26DgcU = new $hs.Thunk();
            hs_sat26DgcU.evaluateOnce = function () {
                return $hs.modules.GHCziMVar.hs_takeMVar.hscall(hs_eta26DgbB);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DgcU, hs_sat26DgcV);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_mask, hs_sat26DgcT);
    };
    this.hs_modifyMVarzu.evaluate = function (hs_eta26Dgc0, hs_eta126Dgc4) {
        var hs_sat26Dgd4 = new $hs.Func(1);
        hs_sat26Dgd4.evaluate = function (hs_restore26Dgc5) {
            var hs_sat26Dgd6 = new $hs.Func(1);
            hs_sat26Dgd6.evaluate = function (hs_a26Dgc3) {
                var hs_sat26Dgd8 = new $hs.Func(1);
                hs_sat26Dgd8.evaluate = function (hs_azq26Dgcb) {
                    return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_eta26Dgc0, hs_azq26Dgcb);
                };
                var hs_sat26Dgd7 = new $hs.Thunk();
                hs_sat26Dgd7.evaluateOnce = function () {
                    var hs_sat26Dgda = new $hs.Thunk();
                    hs_sat26Dgda.evaluateOnce = function () {
                        return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_eta26Dgc0, hs_a26Dgc3);
                    };
                    var hs_sat26Dgd9 = new $hs.Thunk();
                    hs_sat26Dgd9.evaluateOnce = function () {
                        var hs_sat26Dgdb = new $hs.Thunk();
                        hs_sat26Dgdb.evaluateOnce = function () {
                            return hs_eta126Dgc4.hscall(hs_a26Dgc3);
                        };
                        return hs_restore26Dgc5.hscall(hs_sat26Dgdb);
                    };
                    return $hs.modules.ControlziExceptionziBase.hs_onException.hscall(hs_sat26Dgd9, hs_sat26Dgda);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dgd7, hs_sat26Dgd8);
            };
            var hs_sat26Dgd5 = new $hs.Thunk();
            hs_sat26Dgd5.evaluateOnce = function () {
                return $hs.modules.GHCziMVar.hs_takeMVar.hscall(hs_eta26Dgc0);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dgd5, hs_sat26Dgd6);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_mask, hs_sat26Dgd4);
    };
    this.hs_withMVar.evaluate = function (hs_eta26Dgci, hs_eta126Dgcm) {
        var hs_sat26Dgdc = new $hs.Func(1);
        hs_sat26Dgdc.evaluate = function (hs_restore26Dgcn) {
            var hs_sat26Dgde = new $hs.Func(1);
            hs_sat26Dgde.evaluate = function (hs_a26Dgcl) {
                var hs_sat26Dgdg = new $hs.Func(1);
                hs_sat26Dgdg.evaluate = function (hs_b26Dgcu) {
                    var hs_sat26Dgdl = new $hs.Thunk();
                    hs_sat26Dgdl.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_b26Dgcu);
                    };
                    var hs_sat26Dgdk = new $hs.Thunk();
                    hs_sat26Dgdk.evaluateOnce = function () {
                        return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_eta26Dgci, hs_a26Dgcl);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dgdk, hs_sat26Dgdl);
                };
                var hs_sat26Dgdf = new $hs.Thunk();
                hs_sat26Dgdf.evaluateOnce = function () {
                    var hs_sat26Dgdi = new $hs.Thunk();
                    hs_sat26Dgdi.evaluateOnce = function () {
                        return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_eta26Dgci, hs_a26Dgcl);
                    };
                    var hs_sat26Dgdh = new $hs.Thunk();
                    hs_sat26Dgdh.evaluateOnce = function () {
                        var hs_sat26Dgdj = new $hs.Thunk();
                        hs_sat26Dgdj.evaluateOnce = function () {
                            return hs_eta126Dgcm.hscall(hs_a26Dgcl);
                        };
                        return hs_restore26Dgcn.hscall(hs_sat26Dgdj);
                    };
                    return $hs.modules.ControlziExceptionziBase.hs_onException.hscall(hs_sat26Dgdh, hs_sat26Dgdi);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dgdf, hs_sat26Dgdg);
            };
            var hs_sat26Dgdd = new $hs.Thunk();
            hs_sat26Dgdd.evaluateOnce = function () {
                return $hs.modules.GHCziMVar.hs_takeMVar.hscall(hs_eta26Dgci);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dgdd, hs_sat26Dgde);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_mask, hs_sat26Dgdc);
    };
    this.hs_swapMVar.evaluate = function (hs_mvar26DgcB, hs_new26DgcE) {
        var hs_sat26Dgdm = new $hs.Thunk();
        hs_sat26Dgdm.evaluateOnce = function () {
            var hs_sat26Dgdo = new $hs.Func(1);
            hs_sat26Dgdo.evaluate = function (hs_old26DgcG) {
                var hs_sat26Dgdq = new $hs.Thunk();
                hs_sat26Dgdq.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_old26DgcG);
                };
                var hs_sat26Dgdp = new $hs.Thunk();
                hs_sat26Dgdp.evaluateOnce = function () {
                    return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_mvar26DgcB, hs_new26DgcE);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dgdp, hs_sat26Dgdq);
            };
            var hs_sat26Dgdn = new $hs.Thunk();
            hs_sat26Dgdn.evaluateOnce = function () {
                return $hs.modules.GHCziMVar.hs_takeMVar.hscall(hs_mvar26DgcB);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dgdn, hs_sat26Dgdo);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_maskzu, hs_sat26Dgdm);
    };
    this.hs_readMVar.evaluate = function (hs_m26DgcL) {
        var hs_sat26Dgdr = new $hs.Thunk();
        hs_sat26Dgdr.evaluateOnce = function () {
            var hs_sat26Dgdt = new $hs.Func(1);
            hs_sat26Dgdt.evaluate = function (hs_a26DgcO) {
                var hs_sat26Dgdv = new $hs.Thunk();
                hs_sat26Dgdv.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_a26DgcO);
                };
                var hs_sat26Dgdu = new $hs.Thunk();
                hs_sat26Dgdu.evaluateOnce = function () {
                    return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_m26DgcL, hs_a26DgcO);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dgdu, hs_sat26Dgdv);
            };
            var hs_sat26Dgds = new $hs.Thunk();
            hs_sat26Dgds.evaluateOnce = function () {
                return $hs.modules.GHCziMVar.hs_takeMVar.hscall(hs_m26DgcL);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dgds, hs_sat26Dgdt);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_maskzu, hs_sat26Dgdr);
    };
};
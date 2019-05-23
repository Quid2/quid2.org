
$hs.modules.GHCziMVar = new $hs.Module();
$hs.modules.GHCziMVar.dependencies = ["GHC.Bool", "GHC.Unit", "Data.Maybe", "GHC.Base", "GHC.Classes"];
$hs.modules.GHCziMVar.initBeforeDependencies = function () {
    this.hs_addMVarFinalizzer = new $hs.Func(2);
    this.hs_isEmptyMVar = new $hs.Func(1);
    this.hs_tryPutMVar = new $hs.Func(2);
    this.hs_tryTakeMVar = new $hs.Func(1);
    this.hs_putMVar = new $hs.Func(2);
    this.hs_takeMVar = new $hs.Func(1);
    this.hs_newEmptyMVar = new $hs.Thunk();
    this.hs_newMVar = new $hs.Func(1);
    this.hs_zdfEqMVar = new $hs.Data(1);
    this.hs_MVar = new $hs.Func(1);
    this.hs_addMVarFinalizzer.notEvaluated = true;
    this.hs_addMVarFinalizzer.evaluate = function (hs_ds26DnyQ, hs_finalizzer26DnyY) {
        $hs.modules.GHCziMVar.loadDependencies();
        return this.evaluate(hs_ds26DnyQ, hs_finalizzer26DnyY);
    };
    this.hs_isEmptyMVar.notEvaluated = true;
    this.hs_isEmptyMVar.evaluate = function (hs_ds26Dnz6) {
        $hs.modules.GHCziMVar.loadDependencies();
        return this.evaluate(hs_ds26Dnz6);
    };
    this.hs_tryPutMVar.notEvaluated = true;
    this.hs_tryPutMVar.evaluate = function (hs_ds26Dnzp, hs_x26Dnzx) {
        $hs.modules.GHCziMVar.loadDependencies();
        return this.evaluate(hs_ds26Dnzp, hs_x26Dnzx);
    };
    this.hs_tryTakeMVar.notEvaluated = true;
    this.hs_tryTakeMVar.evaluate = function (hs_ds26DnzH) {
        $hs.modules.GHCziMVar.loadDependencies();
        return this.evaluate(hs_ds26DnzH);
    };
    this.hs_putMVar.notEvaluated = true;
    this.hs_putMVar.evaluate = function (hs_ds26DnA2, hs_x26DnAa) {
        $hs.modules.GHCziMVar.loadDependencies();
        return this.evaluate(hs_ds26DnA2, hs_x26DnAa);
    };
    this.hs_takeMVar.notEvaluated = true;
    this.hs_takeMVar.evaluate = function (hs_ds26DnAg) {
        $hs.modules.GHCziMVar.loadDependencies();
        return this.evaluate(hs_ds26DnAg);
    };
    this.hs_newEmptyMVar.evaluateOnce = function () {
        $hs.modules.GHCziMVar.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_newMVar.notEvaluated = true;
    this.hs_newMVar.evaluate = function (hs_value26DnAF) {
        $hs.modules.GHCziMVar.loadDependencies();
        return this.evaluate(hs_value26DnAF);
    };
    this.hs_zdfEqMVar.notEvaluated = true;
    this.hs_zdfEqMVar.evaluate = function () {
        $hs.modules.GHCziMVar.loadDependencies();
        return this;
    };
    this.hs_MVar.notEvaluated = true;
    this.hs_MVar.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziMVar.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.GHCziMVar.initAfterDependencies = function () {
    this.hs_addMVarFinalizzer.notEvaluated = false;
    this.hs_isEmptyMVar.notEvaluated = false;
    this.hs_tryPutMVar.notEvaluated = false;
    this.hs_tryTakeMVar.notEvaluated = false;
    this.hs_putMVar.notEvaluated = false;
    this.hs_takeMVar.notEvaluated = false;
    this.hs_newMVar.notEvaluated = false;
    this.hs_zdfEqMVar.notEvaluated = false;
    this.hs_zdfEqMVar.evaluate = function () {
        return this;
    };
    this.hs_MVar.notEvaluated = false;
    var hs_zdczeze25uZ4u = new $hs.Func(2);
    var hs_zdczsze25uZ4G = new $hs.Thunk();
    this.hs_addMVarFinalizzer.evaluate = function (hs_ds26DnyQ, hs_finalizzer26DnyY) {
        var hs_wild26DnAY = hs_ds26DnyQ;
        if (hs_ds26DnyQ.notEvaluated) {
            hs_wild26DnAY = hs_ds26DnyQ.hscall();
        }
        var hs_m26DnyX = hs_wild26DnAY.data[0];
        var hs_sat26DnB0 = new $hs.Func(1);
        hs_sat26DnB0.evaluate = function (hs_s26DnyZ) {
            throw "primitive operation mkWeak#. Not implemeted yet.";
            var hs_s126Dnz3 = hs_wild126DnAX[0];
            return [hs_s126Dnz3, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DnB1 = new $hs.Func(1);
        hs_sat26DnB1.evaluate = function (hs_tpl26DnyU) {
            if (hs_tpl26DnyU.notEvaluated) {
                return hs_tpl26DnyU.hscall();
            } else {
                return hs_tpl26DnyU;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DnB1, hs_sat26DnB0);
    };
    this.hs_isEmptyMVar.evaluate = function (hs_ds26Dnz6) {
        var hs_wild26DnB3 = hs_ds26Dnz6;
        if (hs_ds26Dnz6.notEvaluated) {
            hs_wild26DnB3 = hs_ds26Dnz6.hscall();
        }
        var hs_mvzh26Dnzd = hs_wild26DnB3.data[0];
        var hs_sat26DnB6 = new $hs.Func(1);
        hs_sat26DnB6.evaluate = function (hs_szh26Dnze) {
            throw "primitive operation isEmptyMVar#. Not implemeted yet.";
            var hs_s2zh26Dnzi = hs_wild126DnB2[0];
            var hs_flg26Dnzj = hs_wild126DnB2[1];
            var hs_sat26DnB5 = new $hs.Thunk();
            hs_sat26DnB5.evaluateOnce = function () {
                var hs_sat26DnB4 = new $hs.Thunk();
                hs_sat26DnB4.evaluateOnce = function () {
                    return hs_flg26Dnzj == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                };
                return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DnB4);
            };
            return [hs_s2zh26Dnzi, hs_sat26DnB5];
        };
        var hs_sat26DnB7 = new $hs.Func(1);
        hs_sat26DnB7.evaluate = function (hs_tpl26Dnza) {
            if (hs_tpl26Dnza.notEvaluated) {
                return hs_tpl26Dnza.hscall();
            } else {
                return hs_tpl26Dnza;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DnB7, hs_sat26DnB6);
    };
    this.hs_tryPutMVar.evaluate = function (hs_ds26Dnzp, hs_x26Dnzx) {
        var hs_wild26DnBa = hs_ds26Dnzp;
        if (hs_ds26Dnzp.notEvaluated) {
            hs_wild26DnBa = hs_ds26Dnzp.hscall();
        }
        var hs_mvarzh26Dnzw = hs_wild26DnBa.data[0];
        var hs_sat26DnBb = new $hs.Func(1);
        hs_sat26DnBb.evaluate = function (hs_szh26Dnzy) {
            throw "primitive operation tryPutMVar#. Not implemeted yet.";
            var hs_s26DnzE = hs_wild126DnB9[0];
            var hs_ds126DnzC = hs_wild126DnB9[1];
            var hs_ds226DnB8 = hs_ds126DnzC;
            if (hs_ds126DnzC.notEvaluated) {
                hs_ds226DnB8 = hs_ds126DnzC.hscall();
            }
            switch (hs_ds226DnB8) {
            case 0:
                return [hs_s26DnzE, $hs.modules.GHCziBool.hs_False];
            default:
                return [hs_s26DnzE, $hs.modules.GHCziBool.hs_True];
            }
        };
        var hs_sat26DnBc = new $hs.Func(1);
        hs_sat26DnBc.evaluate = function (hs_tpl26Dnzt) {
            if (hs_tpl26Dnzt.notEvaluated) {
                return hs_tpl26Dnzt.hscall();
            } else {
                return hs_tpl26Dnzt;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DnBc, hs_sat26DnBb);
    };
    this.hs_tryTakeMVar.evaluate = function (hs_ds26DnzH) {
        var hs_wild26DnBf = hs_ds26DnzH;
        if (hs_ds26DnzH.notEvaluated) {
            hs_wild26DnBf = hs_ds26DnzH.hscall();
        }
        var hs_m26DnzO = hs_wild26DnBf.data[0];
        var hs_sat26DnBh = new $hs.Func(1);
        hs_sat26DnBh.evaluate = function (hs_s26DnzP) {
            throw "primitive operation tryTakeMVar#. Not implemeted yet.";
            var hs_szq26DnzW = hs_wild126DnBe[0];
            var hs_ds126DnzU = hs_wild126DnBe[1];
            var hs_ds226DnzX = hs_wild126DnBe[2];
            var hs_ds326DnBd = hs_ds126DnzU;
            if (hs_ds126DnzU.notEvaluated) {
                hs_ds326DnBd = hs_ds126DnzU.hscall();
            }
            switch (hs_ds326DnBd) {
            case 0:
                return [hs_szq26DnzW, $hs.modules.DataziMaybe.hs_Nothing];
            default:
                var hs_sat26DnBg = new $hs.Data(2);
                hs_sat26DnBg.data = [hs_ds226DnzX];
                return [hs_szq26DnzW, hs_sat26DnBg];
            }
        };
        var hs_sat26DnBi = new $hs.Func(1);
        hs_sat26DnBi.evaluate = function (hs_tpl26DnzL) {
            if (hs_tpl26DnzL.notEvaluated) {
                return hs_tpl26DnzL.hscall();
            } else {
                return hs_tpl26DnzL;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DnBi, hs_sat26DnBh);
    };
    this.hs_putMVar.evaluate = function (hs_ds26DnA2, hs_x26DnAa) {
        var hs_wild26DnBj = hs_ds26DnA2;
        if (hs_ds26DnA2.notEvaluated) {
            hs_wild26DnBj = hs_ds26DnA2.hscall();
        }
        var hs_mvarzh26DnA9 = hs_wild26DnBj.data[0];
        var hs_sat26DnBk = new $hs.Func(1);
        hs_sat26DnBk.evaluate = function (hs_szh26DnAb) {
            throw "primitive operation putMVar#. Not implemeted yet.";
            return [hs_s2zh26DnAd, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DnBl = new $hs.Func(1);
        hs_sat26DnBl.evaluate = function (hs_tpl26DnA6) {
            if (hs_tpl26DnA6.notEvaluated) {
                return hs_tpl26DnA6.hscall();
            } else {
                return hs_tpl26DnA6;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DnBl, hs_sat26DnBk);
    };
    this.hs_takeMVar.evaluate = function (hs_ds26DnAg) {
        var hs_wild26DnBm = hs_ds26DnAg;
        if (hs_ds26DnAg.notEvaluated) {
            hs_wild26DnBm = hs_ds26DnAg.hscall();
        }
        var hs_mvarzh26DnAn = hs_wild26DnBm.data[0];
        var hs_sat26DnBn = new $hs.Func(1);
        hs_sat26DnBn.evaluate = function (hs_szh26DnAo) {
            throw "primitive operation takeMVar#. Not implemeted yet.";
        };
        var hs_sat26DnBo = new $hs.Func(1);
        hs_sat26DnBo.evaluate = function (hs_tpl26DnAk) {
            if (hs_tpl26DnAk.notEvaluated) {
                return hs_tpl26DnAk.hscall();
            } else {
                return hs_tpl26DnAk;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DnBo, hs_sat26DnBn);
    };
    this.hs_newEmptyMVar.evaluateOnce = function () {
        var hs_sat26DnBr = new $hs.Func(1);
        hs_sat26DnBr.evaluate = function (hs_szh26DnAu) {
            throw "primitive operation newMVar#. Not implemeted yet.";
            var hs_s2zh26DnAy = hs_wild26DnBp[0];
            var hs_svarzh26DnAz = hs_wild26DnBp[1];
            var hs_sat26DnBq = new $hs.Data(1);
            hs_sat26DnBq.data = [hs_svarzh26DnAz];
            return [hs_s2zh26DnAy, hs_sat26DnBq];
        };
        var hs_sat26DnBs = new $hs.Func(1);
        hs_sat26DnBs.evaluate = function (hs_tpl26DnAr) {
            if (hs_tpl26DnAr.notEvaluated) {
                return hs_tpl26DnAr.hscall();
            } else {
                return hs_tpl26DnAr;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DnBs, hs_sat26DnBr);
    };
    this.hs_newMVar.evaluate = function (hs_value26DnAF) {
        var hs_sat26DnBv = new $hs.Func(1);
        hs_sat26DnBv.evaluate = function (hs_mvar26DnAE) {
            var hs_sat26DnBt = new $hs.Thunk();
            hs_sat26DnBt.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_mvar26DnAE);
            };
            var hs_sat26DnBu = new $hs.Thunk();
            hs_sat26DnBu.evaluateOnce = function () {
                return $hs.modules.GHCziMVar.hs_putMVar.hscall(hs_mvar26DnAE, hs_value26DnAF);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DnBu, hs_sat26DnBt);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziMVar.hs_newEmptyMVar, hs_sat26DnBv);
    };
    hs_zdczeze25uZ4u.evaluate = function (hs_ds26DnAN, hs_ds126DnAQ) {
        var hs_wild26DnBx = hs_ds26DnAN;
        if (hs_ds26DnAN.notEvaluated) {
            hs_wild26DnBx = hs_ds26DnAN.hscall();
        }
        var hs_mvar1zh26DnAT = hs_wild26DnBx.data[0];
        var hs_wild126DnBw = hs_ds126DnAQ;
        if (hs_ds126DnAQ.notEvaluated) {
            hs_wild126DnBw = hs_ds126DnAQ.hscall();
        }
        var hs_mvar2zh26DnAU = hs_wild126DnBw.data[0];
        throw "primitive operation sameMVar#. Not implemeted yet.";
    };
    this.hs_zdfEqMVar.data = [hs_zdczeze25uZ4u, hs_zdczsze25uZ4G];
    hs_zdczsze25uZ4G.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzsze.hscall($hs.modules.GHCziMVar.hs_zdfEqMVar);
    };
    this.hs_MVar.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
};
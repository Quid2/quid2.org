
$hs.modules.GHCziMVar = new $hs.Module();
$hs.modules.GHCziMVar.dependencies = ["GHC.Types", "GHC.Unit", "Data.Maybe", "GHC.Base", "GHC.Classes"];
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
    this.hs_addMVarFinalizzer.evaluate = function (hs_ds26DbKe, hs_finalizzer26DbKm) {
        $hs.modules.GHCziMVar.loadDependencies();
        return this.evaluate(hs_ds26DbKe, hs_finalizzer26DbKm);
    };
    this.hs_isEmptyMVar.notEvaluated = true;
    this.hs_isEmptyMVar.evaluate = function (hs_ds26DbKu) {
        $hs.modules.GHCziMVar.loadDependencies();
        return this.evaluate(hs_ds26DbKu);
    };
    this.hs_tryPutMVar.notEvaluated = true;
    this.hs_tryPutMVar.evaluate = function (hs_ds26DbKO, hs_x26DbKW) {
        $hs.modules.GHCziMVar.loadDependencies();
        return this.evaluate(hs_ds26DbKO, hs_x26DbKW);
    };
    this.hs_tryTakeMVar.notEvaluated = true;
    this.hs_tryTakeMVar.evaluate = function (hs_ds26DbL6) {
        $hs.modules.GHCziMVar.loadDependencies();
        return this.evaluate(hs_ds26DbL6);
    };
    this.hs_putMVar.notEvaluated = true;
    this.hs_putMVar.evaluate = function (hs_ds26DbLr, hs_x26DbLz) {
        $hs.modules.GHCziMVar.loadDependencies();
        return this.evaluate(hs_ds26DbLr, hs_x26DbLz);
    };
    this.hs_takeMVar.notEvaluated = true;
    this.hs_takeMVar.evaluate = function (hs_ds26DbLF) {
        $hs.modules.GHCziMVar.loadDependencies();
        return this.evaluate(hs_ds26DbLF);
    };
    this.hs_newEmptyMVar.evaluateOnce = function () {
        $hs.modules.GHCziMVar.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_newMVar.notEvaluated = true;
    this.hs_newMVar.evaluate = function (hs_value26DbMb) {
        $hs.modules.GHCziMVar.loadDependencies();
        return this.evaluate(hs_value26DbMb);
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
    var hs_zdczeze25uNg3 = new $hs.Func(2);
    var hs_zdczsze25uNge = new $hs.Thunk();
    this.hs_addMVarFinalizzer.evaluate = function (hs_ds26DbKe, hs_finalizzer26DbKm) {
        var hs_wild26DbMw = hs_ds26DbKe;
        if (hs_ds26DbKe.notEvaluated) {
            hs_wild26DbMw = hs_ds26DbKe.hscall();
        }
        var hs_m26DbKl = hs_wild26DbMw.data[0];
        var hs_sat26DbMx = new $hs.Func(1);
        hs_sat26DbMx.evaluate = function (hs_s26DbKn) {
            throw "primitive operation mkWeak#. Not implemeted yet.";
            var hs_s126DbKr = hs_wild126DbMz[0];
            return [hs_s126DbKr, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DbMv = new $hs.Func(1);
        hs_sat26DbMv.evaluate = function (hs_tpl26DbKi) {
            if (hs_tpl26DbKi.notEvaluated) {
                return hs_tpl26DbKi.hscall();
            } else {
                return hs_tpl26DbKi;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DbMv, hs_sat26DbMx);
    };
    this.hs_isEmptyMVar.evaluate = function (hs_ds26DbKu) {
        var hs_wild26DbMB = hs_ds26DbKu;
        if (hs_ds26DbKu.notEvaluated) {
            hs_wild26DbMB = hs_ds26DbKu.hscall();
        }
        var hs_mvzh26DbKB = hs_wild26DbMB.data[0];
        var hs_sat26DbMC = new $hs.Func(1);
        hs_sat26DbMC.evaluate = function (hs_szh26DbKC) {
            throw "primitive operation isEmptyMVar#. Not implemeted yet.";
            var hs_s2zh26DbKG = hs_wild126DbME[0];
            var hs_flg26DbKH = hs_wild126DbME[1];
            var hs_sat26DbMD = new $hs.Thunk();
            hs_sat26DbMD.evaluateOnce = function () {
                var hs_sat26DbMF = new $hs.Thunk();
                hs_sat26DbMF.evaluateOnce = function () {
                    var hs_wild226DbMG = hs_flg26DbKH;
                    if (hs_flg26DbKH.notEvaluated) {
                        hs_wild226DbMG = hs_flg26DbKH.hscall();
                    }
                    switch (hs_wild226DbMG) {
                    case 0:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    default:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    }
                };
                return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DbMF);
            };
            return [hs_s2zh26DbKG, hs_sat26DbMD];
        };
        var hs_sat26DbMA = new $hs.Func(1);
        hs_sat26DbMA.evaluate = function (hs_tpl26DbKy) {
            if (hs_tpl26DbKy.notEvaluated) {
                return hs_tpl26DbKy.hscall();
            } else {
                return hs_tpl26DbKy;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DbMA, hs_sat26DbMC);
    };
    this.hs_tryPutMVar.evaluate = function (hs_ds26DbKO, hs_x26DbKW) {
        var hs_wild26DbMI = hs_ds26DbKO;
        if (hs_ds26DbKO.notEvaluated) {
            hs_wild26DbMI = hs_ds26DbKO.hscall();
        }
        var hs_mvarzh26DbKV = hs_wild26DbMI.data[0];
        var hs_sat26DbMJ = new $hs.Func(1);
        hs_sat26DbMJ.evaluate = function (hs_szh26DbKX) {
            throw "primitive operation tryPutMVar#. Not implemeted yet.";
            var hs_s26DbL3 = hs_wild126DbML[0];
            var hs_ds126DbL1 = hs_wild126DbML[1];
            var hs_ds226DbMK = hs_ds126DbL1;
            if (hs_ds126DbL1.notEvaluated) {
                hs_ds226DbMK = hs_ds126DbL1.hscall();
            }
            switch (hs_ds226DbMK) {
            case 0:
                return [hs_s26DbL3, $hs.modules.GHCziTypes.hs_False];
            default:
                return [hs_s26DbL3, $hs.modules.GHCziTypes.hs_True];
            }
        };
        var hs_sat26DbMH = new $hs.Func(1);
        hs_sat26DbMH.evaluate = function (hs_tpl26DbKS) {
            if (hs_tpl26DbKS.notEvaluated) {
                return hs_tpl26DbKS.hscall();
            } else {
                return hs_tpl26DbKS;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DbMH, hs_sat26DbMJ);
    };
    this.hs_tryTakeMVar.evaluate = function (hs_ds26DbL6) {
        var hs_wild26DbMN = hs_ds26DbL6;
        if (hs_ds26DbL6.notEvaluated) {
            hs_wild26DbMN = hs_ds26DbL6.hscall();
        }
        var hs_m26DbLd = hs_wild26DbMN.data[0];
        var hs_sat26DbMO = new $hs.Func(1);
        hs_sat26DbMO.evaluate = function (hs_s26DbLe) {
            throw "primitive operation tryTakeMVar#. Not implemeted yet.";
            var hs_szq26DbLl = hs_wild126DbMQ[0];
            var hs_ds126DbLj = hs_wild126DbMQ[1];
            var hs_ds226DbLm = hs_wild126DbMQ[2];
            var hs_ds326DbMP = hs_ds126DbLj;
            if (hs_ds126DbLj.notEvaluated) {
                hs_ds326DbMP = hs_ds126DbLj.hscall();
            }
            switch (hs_ds326DbMP) {
            case 0:
                return [hs_szq26DbLl, $hs.modules.DataziMaybe.hs_Nothing];
            default:
                var hs_sat26DbMR = new $hs.Data(2);
                hs_sat26DbMR.data = [hs_ds226DbLm];
                return [hs_szq26DbLl, hs_sat26DbMR];
            }
        };
        var hs_sat26DbMM = new $hs.Func(1);
        hs_sat26DbMM.evaluate = function (hs_tpl26DbLa) {
            if (hs_tpl26DbLa.notEvaluated) {
                return hs_tpl26DbLa.hscall();
            } else {
                return hs_tpl26DbLa;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DbMM, hs_sat26DbMO);
    };
    this.hs_putMVar.evaluate = function (hs_ds26DbLr, hs_x26DbLz) {
        var hs_wild26DbMT = hs_ds26DbLr;
        if (hs_ds26DbLr.notEvaluated) {
            hs_wild26DbMT = hs_ds26DbLr.hscall();
        }
        var hs_mvarzh26DbLy = hs_wild26DbMT.data[0];
        var hs_sat26DbMU = new $hs.Func(1);
        hs_sat26DbMU.evaluate = function (hs_szh26DbLA) {
            throw "primitive operation putMVar#. Not implemeted yet.";
            return [hs_s2zh26DbLC, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DbMS = new $hs.Func(1);
        hs_sat26DbMS.evaluate = function (hs_tpl26DbLv) {
            if (hs_tpl26DbLv.notEvaluated) {
                return hs_tpl26DbLv.hscall();
            } else {
                return hs_tpl26DbLv;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DbMS, hs_sat26DbMU);
    };
    this.hs_takeMVar.evaluate = function (hs_ds26DbLF) {
        var hs_wild26DbMW = hs_ds26DbLF;
        if (hs_ds26DbLF.notEvaluated) {
            hs_wild26DbMW = hs_ds26DbLF.hscall();
        }
        var hs_mvarzh26DbLM = hs_wild26DbMW.data[0];
        var hs_sat26DbMX = new $hs.Func(1);
        hs_sat26DbMX.evaluate = function (hs_szh26DbLN) {
            throw "primitive operation takeMVar#. Not implemeted yet.";
        };
        var hs_sat26DbMV = new $hs.Func(1);
        hs_sat26DbMV.evaluate = function (hs_tpl26DbLJ) {
            if (hs_tpl26DbLJ.notEvaluated) {
                return hs_tpl26DbLJ.hscall();
            } else {
                return hs_tpl26DbLJ;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DbMV, hs_sat26DbMX);
    };
    this.hs_newEmptyMVar.evaluateOnce = function () {
        var hs_sat26DbMZ = new $hs.Func(1);
        hs_sat26DbMZ.evaluate = function (hs_szh26DbLT) {
            throw "primitive operation newMVar#. Not implemeted yet.";
            var hs_s2zh26DbLX = hs_wild26DbN1[0];
            var hs_svarzh26DbLY = hs_wild26DbN1[1];
            var hs_sat26DbN0 = new $hs.Data(1);
            hs_sat26DbN0.data = [hs_svarzh26DbLY];
            return [hs_s2zh26DbLX, hs_sat26DbN0];
        };
        var hs_sat26DbMY = new $hs.Func(1);
        hs_sat26DbMY.evaluate = function (hs_tpl26DbLQ) {
            if (hs_tpl26DbLQ.notEvaluated) {
                return hs_tpl26DbLQ.hscall();
            } else {
                return hs_tpl26DbLQ;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DbMY, hs_sat26DbMZ);
    };
    this.hs_newMVar.evaluate = function (hs_value26DbMb) {
        var hs_sat26DbN2 = new $hs.Func(1);
        hs_sat26DbN2.evaluate = function (hs_mvar26DbM3) {
            var hs_sat26DbN4 = new $hs.Thunk();
            hs_sat26DbN4.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_mvar26DbM3);
            };
            var hs_sat26DbN3 = new $hs.Thunk();
            hs_sat26DbN3.evaluateOnce = function () {
                var hs_wild26DbN6 = hs_mvar26DbM3;
                if (hs_mvar26DbM3.notEvaluated) {
                    hs_wild26DbN6 = hs_mvar26DbM3.hscall();
                }
                var hs_mvarzh26DbMa = hs_wild26DbN6.data[0];
                var hs_sat26DbN7 = new $hs.Func(1);
                hs_sat26DbN7.evaluate = function (hs_szh26DbMc) {
                    throw "primitive operation putMVar#. Not implemeted yet.";
                    return [hs_s2zh26DbMe, $hs.modules.GHCziUnit.hs_Z0T];
                };
                var hs_sat26DbN5 = new $hs.Func(1);
                hs_sat26DbN5.evaluate = function (hs_tpl26DbM7) {
                    if (hs_tpl26DbM7.notEvaluated) {
                        return hs_tpl26DbM7.hscall();
                    } else {
                        return hs_tpl26DbM7;
                    }
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DbN5, hs_sat26DbN7);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DbN3, hs_sat26DbN4);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziMVar.hs_newEmptyMVar, hs_sat26DbN2);
    };
    hs_zdczeze25uNg3.evaluate = function (hs_ds26DbMm, hs_ds126DbMp) {
        var hs_wild26DbN9 = hs_ds26DbMm;
        if (hs_ds26DbMm.notEvaluated) {
            hs_wild26DbN9 = hs_ds26DbMm.hscall();
        }
        var hs_mvar1zh26DbMs = hs_wild26DbN9.data[0];
        var hs_wild126DbN8 = hs_ds126DbMp;
        if (hs_ds126DbMp.notEvaluated) {
            hs_wild126DbN8 = hs_ds126DbMp.hscall();
        }
        var hs_mvar2zh26DbMt = hs_wild126DbN8.data[0];
        throw "primitive operation sameMVar#. Not implemeted yet.";
    };
    this.hs_zdfEqMVar.data = [hs_zdczeze25uNg3, hs_zdczsze25uNge];
    hs_zdczsze25uNge.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzsze.hscall($hs.modules.GHCziMVar.hs_zdfEqMVar);
    };
    this.hs_MVar.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
};
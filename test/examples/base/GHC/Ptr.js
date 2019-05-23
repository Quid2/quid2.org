
$hs.modules.GHCziPtr = new $hs.Module();
$hs.modules.GHCziPtr.dependencies = ["GHC.Types", "GHC.Integer", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Show", "GHC.Classes", "GHC.List", "Numeric"];
$hs.modules.GHCziPtr.initBeforeDependencies = function () {
    this.hs_castPtrToFunPtr = new $hs.Func(1);
    this.hs_castFunPtrToPtr = new $hs.Func(1);
    this.hs_castFunPtr = new $hs.Func(1);
    this.hs_nullFunPtr = new $hs.Data(1);
    this.hs_minusPtr = new $hs.Func(2);
    this.hs_alignPtr = new $hs.Func(2);
    this.hs_plusPtr = new $hs.Func(2);
    this.hs_castPtr = new $hs.Func(1);
    this.hs_nullPtr = new $hs.Data(1);
    this.hs_zdfShowPtr = new $hs.Data(1);
    this.hs_zdfShowFunPtr = new $hs.Data(1);
    this.hs_zdfEqPtr = new $hs.Data(1);
    this.hs_zdfOrdPtr = new $hs.Data(1);
    this.hs_zdfEqFunPtr = new $hs.Data(1);
    this.hs_zdfOrdFunPtr = new $hs.Data(1);
    this.hs_Ptr = new $hs.Func(1);
    this.hs_FunPtr = new $hs.Func(1);
    this.hs_castPtrToFunPtr.notEvaluated = true;
    this.hs_castPtrToFunPtr.evaluate = function (hs_ds26DbWn) {
        $hs.modules.GHCziPtr.loadDependencies();
        return this.evaluate(hs_ds26DbWn);
    };
    this.hs_castFunPtrToPtr.notEvaluated = true;
    this.hs_castFunPtrToPtr.evaluate = function (hs_ds26DbWs) {
        $hs.modules.GHCziPtr.loadDependencies();
        return this.evaluate(hs_ds26DbWs);
    };
    this.hs_castFunPtr.notEvaluated = true;
    this.hs_castFunPtr.evaluate = function (hs_ds26DbWx) {
        $hs.modules.GHCziPtr.loadDependencies();
        return this.evaluate(hs_ds26DbWx);
    };
    this.hs_nullFunPtr.notEvaluated = true;
    this.hs_nullFunPtr.evaluate = function () {
        $hs.modules.GHCziPtr.loadDependencies();
        return this;
    };
    this.hs_minusPtr.notEvaluated = true;
    this.hs_minusPtr.evaluate = function (hs_ds26DbWD, hs_ds126DbWG) {
        $hs.modules.GHCziPtr.loadDependencies();
        return this.evaluate(hs_ds26DbWD, hs_ds126DbWG);
    };
    this.hs_alignPtr.notEvaluated = true;
    this.hs_alignPtr.evaluate = function (hs_addr26DbWO, hs_ds26DbWR) {
        $hs.modules.GHCziPtr.loadDependencies();
        return this.evaluate(hs_addr26DbWO, hs_ds26DbWR);
    };
    this.hs_plusPtr.notEvaluated = true;
    this.hs_plusPtr.evaluate = function (hs_ds26DbX3, hs_ds126DbX6) {
        $hs.modules.GHCziPtr.loadDependencies();
        return this.evaluate(hs_ds26DbX3, hs_ds126DbX6);
    };
    this.hs_castPtr.notEvaluated = true;
    this.hs_castPtr.evaluate = function (hs_ds26DbXd) {
        $hs.modules.GHCziPtr.loadDependencies();
        return this.evaluate(hs_ds26DbXd);
    };
    this.hs_nullPtr.notEvaluated = true;
    this.hs_nullPtr.evaluate = function () {
        $hs.modules.GHCziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfShowPtr.notEvaluated = true;
    this.hs_zdfShowPtr.evaluate = function () {
        $hs.modules.GHCziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfShowFunPtr.notEvaluated = true;
    this.hs_zdfShowFunPtr.evaluate = function () {
        $hs.modules.GHCziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfEqPtr.notEvaluated = true;
    this.hs_zdfEqPtr.evaluate = function () {
        $hs.modules.GHCziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfOrdPtr.notEvaluated = true;
    this.hs_zdfOrdPtr.evaluate = function () {
        $hs.modules.GHCziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfEqFunPtr.notEvaluated = true;
    this.hs_zdfEqFunPtr.evaluate = function () {
        $hs.modules.GHCziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfOrdFunPtr.notEvaluated = true;
    this.hs_zdfOrdFunPtr.evaluate = function () {
        $hs.modules.GHCziPtr.loadDependencies();
        return this;
    };
    this.hs_Ptr.notEvaluated = true;
    this.hs_Ptr.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziPtr.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_FunPtr.notEvaluated = true;
    this.hs_FunPtr.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziPtr.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.GHCziPtr.initAfterDependencies = function () {
    this.hs_castPtrToFunPtr.notEvaluated = false;
    this.hs_castFunPtrToPtr.notEvaluated = false;
    this.hs_castFunPtr.notEvaluated = false;
    this.hs_nullFunPtr.notEvaluated = false;
    this.hs_nullFunPtr.evaluate = function () {
        return this;
    };
    this.hs_minusPtr.notEvaluated = false;
    this.hs_alignPtr.notEvaluated = false;
    this.hs_plusPtr.notEvaluated = false;
    this.hs_castPtr.notEvaluated = false;
    this.hs_nullPtr.notEvaluated = false;
    this.hs_nullPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfShowPtr.notEvaluated = false;
    this.hs_zdfShowPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfShowFunPtr.notEvaluated = false;
    this.hs_zdfShowFunPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfEqPtr.notEvaluated = false;
    this.hs_zdfEqPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdPtr.notEvaluated = false;
    this.hs_zdfOrdPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfEqFunPtr.notEvaluated = false;
    this.hs_zdfEqFunPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdFunPtr.notEvaluated = false;
    this.hs_zdfOrdFunPtr.evaluate = function () {
        return this;
    };
    this.hs_Ptr.notEvaluated = false;
    this.hs_FunPtr.notEvaluated = false;
    var hs_zdcshowsPrec25uNr1 = new $hs.Func(3);
    var hs_zdcshowList25uNrt = new $hs.Thunk();
    var hs_zdcshow25uNru = new $hs.Thunk();
    var hs_zdcshowsPrec125uNrv = new $hs.Func(1);
    var hs_zdcshowList125uNrz = new $hs.Thunk();
    var hs_zdcshow125uNrA = new $hs.Thunk();
    var hs_zdczlze25uNrB = new $hs.Func(2);
    var hs_zdczg25uNrM = new $hs.Func(2);
    var hs_zdczgze25uNrX = new $hs.Func(2);
    var hs_zdczl25uNs8 = new $hs.Func(2);
    var hs_zdccompare25uNsj = new $hs.Func(2);
    var hs_zdczeze25uNsw = new $hs.Func(2);
    var hs_zdczsze25uNsH = new $hs.Func(2);
    var hs_zdcmin25uNsN = new $hs.Thunk();
    var hs_zdcmax25uNsO = new $hs.Thunk();
    var hs_zdczlze125uNsP = new $hs.Func(2);
    var hs_zdczg125uNt0 = new $hs.Func(2);
    var hs_zdczgze125uNtb = new $hs.Func(2);
    var hs_zdczl125uNtm = new $hs.Func(2);
    var hs_zdccompare125uNtx = new $hs.Func(2);
    var hs_zdczeze125uNtK = new $hs.Func(2);
    var hs_zdczsze125uNtV = new $hs.Func(2);
    var hs_zdcmin125uNu1 = new $hs.Thunk();
    var hs_zdcmax125uNu2 = new $hs.Thunk();
    this.hs_castPtrToFunPtr.evaluate = function (hs_ds26DbWn) {
        var hs_wild26Dc0j = hs_ds26DbWn;
        if (hs_ds26DbWn.notEvaluated) {
            hs_wild26Dc0j = hs_ds26DbWn.hscall();
        }
        var hs_addr26DbWq = hs_wild26Dc0j.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_addr26DbWq];
        return $res;
    };
    this.hs_castFunPtrToPtr.evaluate = function (hs_ds26DbWs) {
        var hs_wild26Dc0k = hs_ds26DbWs;
        if (hs_ds26DbWs.notEvaluated) {
            hs_wild26Dc0k = hs_ds26DbWs.hscall();
        }
        var hs_addr26DbWv = hs_wild26Dc0k.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_addr26DbWv];
        return $res;
    };
    this.hs_castFunPtr.evaluate = function (hs_ds26DbWx) {
        var hs_wild26Dc0l = hs_ds26DbWx;
        if (hs_ds26DbWx.notEvaluated) {
            hs_wild26Dc0l = hs_ds26DbWx.hscall();
        }
        var hs_addr26DbWA = hs_wild26Dc0l.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_addr26DbWA];
        return $res;
    };
    this.hs_nullFunPtr.data = [null];
    this.hs_minusPtr.evaluate = function (hs_ds26DbWD, hs_ds126DbWG) {
        var hs_wild26Dc0n = hs_ds26DbWD;
        if (hs_ds26DbWD.notEvaluated) {
            hs_wild26Dc0n = hs_ds26DbWD.hscall();
        }
        var hs_a126DbWJ = hs_wild26Dc0n.data[0];
        var hs_wild126Dc0m = hs_ds126DbWG;
        if (hs_ds126DbWG.notEvaluated) {
            hs_wild126Dc0m = hs_ds126DbWG.hscall();
        }
        var hs_a226DbWK = hs_wild126Dc0m.data[0];
        throw "primitive operation minusAddr#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dc0o];
        return $res;
    };
    this.hs_alignPtr.evaluate = function (hs_addr26DbWO, hs_ds26DbWR) {
        var hs_wild26DbX0 = hs_addr26DbWO;
        if (hs_addr26DbWO.notEvaluated) {
            hs_wild26DbX0 = hs_addr26DbWO.hscall();
        }
        var hs_a26DbWU = hs_wild26DbX0.data[0];
        var hs_wild126Dc0p = hs_ds26DbWR;
        if (hs_ds26DbWR.notEvaluated) {
            hs_wild126Dc0p = hs_ds26DbWR.hscall();
        }
        var hs_i26DbWV = hs_wild126Dc0p.data[0];
        throw "primitive operation remAddr#. Not implemeted yet.";
        switch (hs_ds126DbWX) {
        case 0:
            if (hs_wild26DbX0.notEvaluated) {
                return hs_wild26DbX0.hscall();
            } else {
                return hs_wild26DbX0;
            }
        default:
            var hs_sat26Dc0q = ($hs.Int.addCarry(hs_i26DbWV, ~hs_ds126DbWX, 1))[0];
            throw "primitive operation plusAddr#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26Dc0r];
            return $res;
        }
    };
    this.hs_plusPtr.evaluate = function (hs_ds26DbX3, hs_ds126DbX6) {
        var hs_wild26Dc0t = hs_ds26DbX3;
        if (hs_ds26DbX3.notEvaluated) {
            hs_wild26Dc0t = hs_ds26DbX3.hscall();
        }
        var hs_addr26DbX9 = hs_wild26Dc0t.data[0];
        var hs_wild126Dc0s = hs_ds126DbX6;
        if (hs_ds126DbX6.notEvaluated) {
            hs_wild126Dc0s = hs_ds126DbX6.hscall();
        }
        var hs_d26DbXa = hs_wild126Dc0s.data[0];
        throw "primitive operation plusAddr#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dc0u];
        return $res;
    };
    this.hs_castPtr.evaluate = function (hs_ds26DbXd) {
        var hs_wild26Dc0v = hs_ds26DbXd;
        if (hs_ds26DbXd.notEvaluated) {
            hs_wild26Dc0v = hs_ds26DbXd.hscall();
        }
        var hs_addr26DbXg = hs_wild26Dc0v.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_addr26DbXg];
        return $res;
    };
    this.hs_nullPtr.data = [null];
    hs_zdcshowsPrec25uNr1.evaluate = function (hs_ds26DbXI, hs_ds126DbXl, hs_rs26DbXE) {
        var hs_wild26Dc0x = hs_ds126DbXl;
        if (hs_ds126DbXl.notEvaluated) {
            hs_wild26Dc0x = hs_ds126DbXl.hscall();
        }
        var hs_a26DbXp = hs_wild26Dc0x.data[0];
        var hs_ls26DbXu = new $hs.Thunk();
        hs_ls26DbXu.evaluateOnce = function () {
            var hs_sat26Dc0J = new $hs.Thunk();
            hs_sat26Dc0J.evaluateOnce = function () {
                throw "primitive operation addr2Int#. Not implemeted yet.";
                var hs_sat26Dc0K = hs_sat26DbXs;
                return $hs.modules.GHCziInteger.hs_wordToInteger.hscall(hs_sat26Dc0K);
            };
            return $hs.modules.Numeric.hs_showHex.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26Dc0J, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        var hs_sat26Dc0y = new $hs.Thunk();
        hs_sat26Dc0y.evaluateOnce = function () {
            var hs_sat26Dc0C = new $hs.Thunk();
            hs_sat26Dc0C.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_ls26DbXu, hs_rs26DbXE);
            };
            var hs_sat26Dc0B = new $hs.Thunk();
            hs_sat26Dc0B.evaluateOnce = function () {
                var hs_sat26Dc0E = new $hs.Data(1);
                hs_sat26Dc0E.data = ["0"];
                var hs_sat26Dc0D = new $hs.Thunk();
                hs_sat26Dc0D.evaluateOnce = function () {
                    var hs_sat26Dc0G = new $hs.Thunk();
                    hs_sat26Dc0G.evaluateOnce = function () {
                        return $hs.modules.GHCziList.hs_length.hscall(hs_ls26DbXu);
                    };
                    var hs_sat26Dc0F = new $hs.Thunk();
                    hs_sat26Dc0F.evaluateOnce = function () {
                        var hs_sat26Dc0I = new $hs.Data(1);
                        hs_sat26Dc0I.data = [4];
                        var hs_sat26Dc0H = new $hs.Data(1);
                        hs_sat26Dc0H.data = [2];
                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dc0H, hs_sat26Dc0I);
                    };
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dc0F, hs_sat26Dc0G);
                };
                return $hs.modules.GHCziList.hs_replicate.hscall(hs_sat26Dc0D, hs_sat26Dc0E);
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dc0B, hs_sat26Dc0C);
        };
        var hs_sat26Dc0z = new $hs.Data(1);
        hs_sat26Dc0z.data = ["x"];
        var hs_sat26Dc0A = new $hs.Data(2);
        hs_sat26Dc0A.data = [hs_sat26Dc0z, hs_sat26Dc0y];
        var hs_sat26Dc0w = new $hs.Data(1);
        hs_sat26Dc0w.data = ["0"];
        var $res = new $hs.Data(2);
        $res.data = [hs_sat26Dc0w, hs_sat26Dc0A];
        return $res;
    };
    this.hs_zdfShowPtr.data = [hs_zdcshowsPrec25uNr1, hs_zdcshow25uNru, hs_zdcshowList25uNrt];
    hs_zdcshowList25uNrt.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziPtr.hs_zdfShowPtr);
    };
    hs_zdcshow25uNru.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziPtr.hs_zdfShowPtr);
    };
    hs_zdcshowsPrec125uNrv.evaluate = function (hs_p26DbXN) {
        var hs_sat26Dc0L = new $hs.Thunk();
        hs_sat26Dc0L.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziPtr.hs_zdfShowPtr, hs_p26DbXN);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dc0L, $hs.modules.GHCziPtr.hs_castFunPtrToPtr);
    };
    this.hs_zdfShowFunPtr.data = [hs_zdcshowsPrec125uNrv, hs_zdcshow125uNrA, hs_zdcshowList125uNrz];
    hs_zdcshowList125uNrz.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziPtr.hs_zdfShowFunPtr);
    };
    hs_zdcshow125uNrA.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziPtr.hs_zdfShowFunPtr);
    };
    hs_zdczlze25uNrB.evaluate = function (hs_a26DbXU, hs_b26DbXX) {
        var hs_wild26Dc0N = hs_a26DbXU;
        if (hs_a26DbXU.notEvaluated) {
            hs_wild26Dc0N = hs_a26DbXU.hscall();
        }
        var hs_a126DbY0 = hs_wild26Dc0N.data[0];
        var hs_wild126Dc0M = hs_b26DbXX;
        if (hs_b26DbXX.notEvaluated) {
            hs_wild126Dc0M = hs_b26DbXX.hscall();
        }
        var hs_b126DbY1 = hs_wild126Dc0M.data[0];
        throw "primitive operation leAddr#. Not implemeted yet.";
    };
    hs_zdczg25uNrM.evaluate = function (hs_a26DbY5, hs_b26DbY8) {
        var hs_wild26Dc0P = hs_a26DbY5;
        if (hs_a26DbY5.notEvaluated) {
            hs_wild26Dc0P = hs_a26DbY5.hscall();
        }
        var hs_a126DbYb = hs_wild26Dc0P.data[0];
        var hs_wild126Dc0O = hs_b26DbY8;
        if (hs_b26DbY8.notEvaluated) {
            hs_wild126Dc0O = hs_b26DbY8.hscall();
        }
        var hs_b126DbYc = hs_wild126Dc0O.data[0];
        throw "primitive operation gtAddr#. Not implemeted yet.";
    };
    hs_zdczgze25uNrX.evaluate = function (hs_a26DbYg, hs_b26DbYj) {
        var hs_wild26Dc0R = hs_a26DbYg;
        if (hs_a26DbYg.notEvaluated) {
            hs_wild26Dc0R = hs_a26DbYg.hscall();
        }
        var hs_a126DbYm = hs_wild26Dc0R.data[0];
        var hs_wild126Dc0Q = hs_b26DbYj;
        if (hs_b26DbYj.notEvaluated) {
            hs_wild126Dc0Q = hs_b26DbYj.hscall();
        }
        var hs_b126DbYn = hs_wild126Dc0Q.data[0];
        throw "primitive operation geAddr#. Not implemeted yet.";
    };
    hs_zdczl25uNs8.evaluate = function (hs_a26DbYr, hs_b26DbYu) {
        var hs_wild26Dc0T = hs_a26DbYr;
        if (hs_a26DbYr.notEvaluated) {
            hs_wild26Dc0T = hs_a26DbYr.hscall();
        }
        var hs_a126DbYx = hs_wild26Dc0T.data[0];
        var hs_wild126Dc0S = hs_b26DbYu;
        if (hs_b26DbYu.notEvaluated) {
            hs_wild126Dc0S = hs_b26DbYu.hscall();
        }
        var hs_b126DbYy = hs_wild126Dc0S.data[0];
        throw "primitive operation ltAddr#. Not implemeted yet.";
    };
    hs_zdccompare25uNsj.evaluate = function (hs_a26DbYC, hs_b26DbYF) {
        var hs_wild26Dc0V = hs_a26DbYC;
        if (hs_a26DbYC.notEvaluated) {
            hs_wild26Dc0V = hs_a26DbYC.hscall();
        }
        var hs_a126DbYI = hs_wild26Dc0V.data[0];
        var hs_wild126Dc0U = hs_b26DbYF;
        if (hs_b26DbYF.notEvaluated) {
            hs_wild126Dc0U = hs_b26DbYF.hscall();
        }
        var hs_b126DbYJ = hs_wild126Dc0U.data[0];
        throw "primitive operation ltAddr#. Not implemeted yet.";
        switch (hs_wild226Dc0W.tag) {
        case 1:
            throw "primitive operation eqAddr#. Not implemeted yet.";
            switch (hs_wild326Dc0X.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczeze25uNsw.evaluate = function (hs_ds26DbYP, hs_ds126DbYS) {
        var hs_wild26Dc0Z = hs_ds26DbYP;
        if (hs_ds26DbYP.notEvaluated) {
            hs_wild26Dc0Z = hs_ds26DbYP.hscall();
        }
        var hs_a126DbYV = hs_wild26Dc0Z.data[0];
        var hs_wild126Dc0Y = hs_ds126DbYS;
        if (hs_ds126DbYS.notEvaluated) {
            hs_wild126Dc0Y = hs_ds126DbYS.hscall();
        }
        var hs_b126DbYW = hs_wild126Dc0Y.data[0];
        throw "primitive operation eqAddr#. Not implemeted yet.";
    };
    this.hs_zdfEqPtr.data = [hs_zdczeze25uNsw, hs_zdczsze25uNsH];
    hs_zdczsze25uNsH.evaluate = function (hs_a26DbZ0, hs_b26DbZ1) {
        var hs_sat26Dc10 = new $hs.Thunk();
        hs_sat26Dc10.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_a26DbZ0, hs_b26DbZ1);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26Dc10);
    };
    this.hs_zdfOrdPtr.data = [$hs.modules.GHCziPtr.hs_zdfEqPtr, hs_zdccompare25uNsj, hs_zdczl25uNs8, hs_zdczgze25uNrX, hs_zdczg25uNrM, hs_zdczlze25uNrB, hs_zdcmax25uNsO, hs_zdcmin25uNsN];
    hs_zdcmin25uNsN.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziPtr.hs_zdfOrdPtr);
    };
    hs_zdcmax25uNsO.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziPtr.hs_zdfOrdPtr);
    };
    hs_zdczlze125uNsP.evaluate = function (hs_a26DbZ8, hs_b26DbZb) {
        var hs_wild26Dc12 = hs_a26DbZ8;
        if (hs_a26DbZ8.notEvaluated) {
            hs_wild26Dc12 = hs_a26DbZ8.hscall();
        }
        var hs_a126DbZe = hs_wild26Dc12.data[0];
        var hs_wild126Dc11 = hs_b26DbZb;
        if (hs_b26DbZb.notEvaluated) {
            hs_wild126Dc11 = hs_b26DbZb.hscall();
        }
        var hs_b126DbZf = hs_wild126Dc11.data[0];
        throw "primitive operation leAddr#. Not implemeted yet.";
    };
    hs_zdczg125uNt0.evaluate = function (hs_a26DbZj, hs_b26DbZm) {
        var hs_wild26Dc14 = hs_a26DbZj;
        if (hs_a26DbZj.notEvaluated) {
            hs_wild26Dc14 = hs_a26DbZj.hscall();
        }
        var hs_a126DbZp = hs_wild26Dc14.data[0];
        var hs_wild126Dc13 = hs_b26DbZm;
        if (hs_b26DbZm.notEvaluated) {
            hs_wild126Dc13 = hs_b26DbZm.hscall();
        }
        var hs_b126DbZq = hs_wild126Dc13.data[0];
        throw "primitive operation gtAddr#. Not implemeted yet.";
    };
    hs_zdczgze125uNtb.evaluate = function (hs_a26DbZu, hs_b26DbZx) {
        var hs_wild26Dc16 = hs_a26DbZu;
        if (hs_a26DbZu.notEvaluated) {
            hs_wild26Dc16 = hs_a26DbZu.hscall();
        }
        var hs_a126DbZA = hs_wild26Dc16.data[0];
        var hs_wild126Dc15 = hs_b26DbZx;
        if (hs_b26DbZx.notEvaluated) {
            hs_wild126Dc15 = hs_b26DbZx.hscall();
        }
        var hs_b126DbZB = hs_wild126Dc15.data[0];
        throw "primitive operation geAddr#. Not implemeted yet.";
    };
    hs_zdczl125uNtm.evaluate = function (hs_a26DbZF, hs_b26DbZI) {
        var hs_wild26Dc18 = hs_a26DbZF;
        if (hs_a26DbZF.notEvaluated) {
            hs_wild26Dc18 = hs_a26DbZF.hscall();
        }
        var hs_a126DbZL = hs_wild26Dc18.data[0];
        var hs_wild126Dc17 = hs_b26DbZI;
        if (hs_b26DbZI.notEvaluated) {
            hs_wild126Dc17 = hs_b26DbZI.hscall();
        }
        var hs_b126DbZM = hs_wild126Dc17.data[0];
        throw "primitive operation ltAddr#. Not implemeted yet.";
    };
    hs_zdccompare125uNtx.evaluate = function (hs_a26DbZQ, hs_b26DbZT) {
        var hs_wild26Dc1a = hs_a26DbZQ;
        if (hs_a26DbZQ.notEvaluated) {
            hs_wild26Dc1a = hs_a26DbZQ.hscall();
        }
        var hs_a126DbZW = hs_wild26Dc1a.data[0];
        var hs_wild126Dc19 = hs_b26DbZT;
        if (hs_b26DbZT.notEvaluated) {
            hs_wild126Dc19 = hs_b26DbZT.hscall();
        }
        var hs_b126DbZX = hs_wild126Dc19.data[0];
        throw "primitive operation ltAddr#. Not implemeted yet.";
        switch (hs_wild226Dc1b.tag) {
        case 1:
            throw "primitive operation eqAddr#. Not implemeted yet.";
            switch (hs_wild326Dc1c.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczeze125uNtK.evaluate = function (hs_ds26Dc03, hs_ds126Dc06) {
        var hs_wild26Dc1e = hs_ds26Dc03;
        if (hs_ds26Dc03.notEvaluated) {
            hs_wild26Dc1e = hs_ds26Dc03.hscall();
        }
        var hs_a126Dc09 = hs_wild26Dc1e.data[0];
        var hs_wild126Dc1d = hs_ds126Dc06;
        if (hs_ds126Dc06.notEvaluated) {
            hs_wild126Dc1d = hs_ds126Dc06.hscall();
        }
        var hs_b126Dc0a = hs_wild126Dc1d.data[0];
        throw "primitive operation eqAddr#. Not implemeted yet.";
    };
    this.hs_zdfEqFunPtr.data = [hs_zdczeze125uNtK, hs_zdczsze125uNtV];
    hs_zdczsze125uNtV.evaluate = function (hs_a26Dc0e, hs_b26Dc0f) {
        var hs_sat26Dc1f = new $hs.Thunk();
        hs_sat26Dc1f.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqFunPtr, hs_a26Dc0e, hs_b26Dc0f);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26Dc1f);
    };
    this.hs_zdfOrdFunPtr.data = [$hs.modules.GHCziPtr.hs_zdfEqFunPtr, hs_zdccompare125uNtx, hs_zdczl125uNtm, hs_zdczgze125uNtb, hs_zdczg125uNt0, hs_zdczlze125uNsP, hs_zdcmax125uNu2, hs_zdcmin125uNu1];
    hs_zdcmin125uNu1.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziPtr.hs_zdfOrdFunPtr);
    };
    hs_zdcmax125uNu2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziPtr.hs_zdfOrdFunPtr);
    };
    this.hs_Ptr.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_FunPtr.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
};
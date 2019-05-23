
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
    this.hs_zdfOrdPtr = new $hs.Func(1);
    this.hs_zdfEqPtr = new $hs.Data(1);
    this.hs_zdfOrdFunPtr = new $hs.Func(1);
    this.hs_zdfEqFunPtr = new $hs.Data(1);
    this.hs_Ptr = new $hs.Func(1);
    this.hs_FunPtr = new $hs.Func(1);
    this.hs_castPtrToFunPtr.notEvaluated = true;
    this.hs_castPtrToFunPtr.evaluate = function (hs_ds26Dzgk) {
        $hs.modules.GHCziPtr.loadDependencies();
        return this.evaluate(hs_ds26Dzgk);
    };
    this.hs_castFunPtrToPtr.notEvaluated = true;
    this.hs_castFunPtrToPtr.evaluate = function (hs_ds26Dzgp) {
        $hs.modules.GHCziPtr.loadDependencies();
        return this.evaluate(hs_ds26Dzgp);
    };
    this.hs_castFunPtr.notEvaluated = true;
    this.hs_castFunPtr.evaluate = function (hs_ds26Dzgu) {
        $hs.modules.GHCziPtr.loadDependencies();
        return this.evaluate(hs_ds26Dzgu);
    };
    this.hs_nullFunPtr.notEvaluated = true;
    this.hs_nullFunPtr.evaluate = function () {
        $hs.modules.GHCziPtr.loadDependencies();
        return this;
    };
    this.hs_minusPtr.notEvaluated = true;
    this.hs_minusPtr.evaluate = function (hs_ds26DzgA, hs_ds126DzgD) {
        $hs.modules.GHCziPtr.loadDependencies();
        return this.evaluate(hs_ds26DzgA, hs_ds126DzgD);
    };
    this.hs_alignPtr.notEvaluated = true;
    this.hs_alignPtr.evaluate = function (hs_addr26DzgL, hs_ds26DzgO) {
        $hs.modules.GHCziPtr.loadDependencies();
        return this.evaluate(hs_addr26DzgL, hs_ds26DzgO);
    };
    this.hs_plusPtr.notEvaluated = true;
    this.hs_plusPtr.evaluate = function (hs_ds26Dzh0, hs_ds126Dzh3) {
        $hs.modules.GHCziPtr.loadDependencies();
        return this.evaluate(hs_ds26Dzh0, hs_ds126Dzh3);
    };
    this.hs_castPtr.notEvaluated = true;
    this.hs_castPtr.evaluate = function (hs_ds26Dzha) {
        $hs.modules.GHCziPtr.loadDependencies();
        return this.evaluate(hs_ds26Dzha);
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
    this.hs_zdfOrdPtr.notEvaluated = true;
    this.hs_zdfOrdPtr.evaluate = function (hs_zddEq26Dzj9) {
        $hs.modules.GHCziPtr.loadDependencies();
        return this.evaluate(hs_zddEq26Dzj9);
    };
    this.hs_zdfEqPtr.notEvaluated = true;
    this.hs_zdfEqPtr.evaluate = function () {
        $hs.modules.GHCziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfOrdFunPtr.notEvaluated = true;
    this.hs_zdfOrdFunPtr.evaluate = function (hs_zddEq26Dzlz) {
        $hs.modules.GHCziPtr.loadDependencies();
        return this.evaluate(hs_zddEq26Dzlz);
    };
    this.hs_zdfEqFunPtr.notEvaluated = true;
    this.hs_zdfEqFunPtr.evaluate = function () {
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
    this.hs_zdfOrdPtr.notEvaluated = false;
    this.hs_zdfEqPtr.notEvaluated = false;
    this.hs_zdfEqPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdFunPtr.notEvaluated = false;
    this.hs_zdfEqFunPtr.notEvaluated = false;
    this.hs_zdfEqFunPtr.evaluate = function () {
        return this;
    };
    this.hs_Ptr.notEvaluated = false;
    this.hs_FunPtr.notEvaluated = false;
    var hs_zdcshowsPrec25vaKZ = new $hs.Func(3);
    var hs_zdcshowList25vaLs = new $hs.Thunk();
    var hs_zdcshow25vaLu = new $hs.Thunk();
    var hs_zdcshowsPrec125vaLw = new $hs.Func(1);
    var hs_zdcshowList125vaLB = new $hs.Thunk();
    var hs_zdcshow125vaLD = new $hs.Thunk();
    var hs_zdczlze25vaLF = new $hs.Func(3);
    var hs_zdczg25vaLT = new $hs.Func(3);
    var hs_zdczgze25vaM7 = new $hs.Func(3);
    var hs_zdczl25vaMl = new $hs.Func(3);
    var hs_zdccompare25vaMz = new $hs.Func(3);
    var hs_zdcmin25vaMP = new $hs.Func(1);
    var hs_zdcmax25vaMR = new $hs.Func(1);
    var hs_zdczeze25vaNM = new $hs.Func(2);
    var hs_zdczsze25vaNY = new $hs.Func(2);
    var hs_zdczlze125vaO5 = new $hs.Func(3);
    var hs_zdczg125vaOj = new $hs.Func(3);
    var hs_zdczgze125vaOx = new $hs.Func(3);
    var hs_zdczl125vaOL = new $hs.Func(3);
    var hs_zdccompare125vaOZ = new $hs.Func(3);
    var hs_zdcmin125vaPf = new $hs.Func(1);
    var hs_zdcmax125vaPh = new $hs.Func(1);
    var hs_zdczeze125vaQc = new $hs.Func(2);
    var hs_zdczsze125vaQo = new $hs.Func(2);
    this.hs_castPtrToFunPtr.evaluate = function (hs_ds26Dzgk) {
        var hs_wild26DzmK = hs_ds26Dzgk;
        if (hs_ds26Dzgk.notEvaluated) {
            hs_wild26DzmK = hs_ds26Dzgk.hscall();
        }
        var hs_addr26Dzgn = hs_wild26DzmK.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_addr26Dzgn];
        return $res;
    };
    this.hs_castFunPtrToPtr.evaluate = function (hs_ds26Dzgp) {
        var hs_wild26DzmL = hs_ds26Dzgp;
        if (hs_ds26Dzgp.notEvaluated) {
            hs_wild26DzmL = hs_ds26Dzgp.hscall();
        }
        var hs_addr26Dzgs = hs_wild26DzmL.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_addr26Dzgs];
        return $res;
    };
    this.hs_castFunPtr.evaluate = function (hs_ds26Dzgu) {
        var hs_wild26DzmM = hs_ds26Dzgu;
        if (hs_ds26Dzgu.notEvaluated) {
            hs_wild26DzmM = hs_ds26Dzgu.hscall();
        }
        var hs_addr26Dzgx = hs_wild26DzmM.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_addr26Dzgx];
        return $res;
    };
    this.hs_nullFunPtr.data = [null];
    this.hs_minusPtr.evaluate = function (hs_ds26DzgA, hs_ds126DzgD) {
        var hs_wild26DzmP = hs_ds26DzgA;
        if (hs_ds26DzgA.notEvaluated) {
            hs_wild26DzmP = hs_ds26DzgA.hscall();
        }
        var hs_a126DzgG = hs_wild26DzmP.data[0];
        var hs_wild126DzmO = hs_ds126DzgD;
        if (hs_ds126DzgD.notEvaluated) {
            hs_wild126DzmO = hs_ds126DzgD.hscall();
        }
        var hs_a226DzgH = hs_wild126DzmO.data[0];
        throw "primitive operation minusAddr#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DzmN];
        return $res;
    };
    this.hs_alignPtr.evaluate = function (hs_addr26DzgL, hs_ds26DzgO) {
        var hs_wild26DzgX = hs_addr26DzgL;
        if (hs_addr26DzgL.notEvaluated) {
            hs_wild26DzgX = hs_addr26DzgL.hscall();
        }
        var hs_a26DzgR = hs_wild26DzgX.data[0];
        var hs_wild126DzmS = hs_ds26DzgO;
        if (hs_ds26DzgO.notEvaluated) {
            hs_wild126DzmS = hs_ds26DzgO.hscall();
        }
        var hs_i26DzgS = hs_wild126DzmS.data[0];
        throw "primitive operation remAddr#. Not implemeted yet.";
        switch (hs_ds126DzgU) {
        case 0:
            if (hs_wild26DzgX.notEvaluated) {
                return hs_wild26DzgX.hscall();
            } else {
                return hs_wild26DzgX;
            }
        default:
            var hs_sat26DzmR = ($hs.Int.addCarry(hs_i26DzgS, ~hs_ds126DzgU, 1))[0];
            throw "primitive operation plusAddr#. Not implemeted yet.";
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DzmQ];
            return $res;
        }
    };
    this.hs_plusPtr.evaluate = function (hs_ds26Dzh0, hs_ds126Dzh3) {
        var hs_wild26DzmV = hs_ds26Dzh0;
        if (hs_ds26Dzh0.notEvaluated) {
            hs_wild26DzmV = hs_ds26Dzh0.hscall();
        }
        var hs_addr26Dzh6 = hs_wild26DzmV.data[0];
        var hs_wild126DzmU = hs_ds126Dzh3;
        if (hs_ds126Dzh3.notEvaluated) {
            hs_wild126DzmU = hs_ds126Dzh3.hscall();
        }
        var hs_d26Dzh7 = hs_wild126DzmU.data[0];
        throw "primitive operation plusAddr#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DzmT];
        return $res;
    };
    this.hs_castPtr.evaluate = function (hs_ds26Dzha) {
        var hs_wild26DzmW = hs_ds26Dzha;
        if (hs_ds26Dzha.notEvaluated) {
            hs_wild26DzmW = hs_ds26Dzha.hscall();
        }
        var hs_addr26Dzhd = hs_wild26DzmW.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_addr26Dzhd];
        return $res;
    };
    this.hs_nullPtr.data = [null];
    hs_zdcshowsPrec25vaKZ.evaluate = function (hs_ds26DzhG, hs_ds126Dzhj, hs_rs26DzhC) {
        var hs_wild26DzmY = hs_ds126Dzhj;
        if (hs_ds126Dzhj.notEvaluated) {
            hs_wild26DzmY = hs_ds126Dzhj.hscall();
        }
        var hs_a26Dzhn = hs_wild26DzmY.data[0];
        var hs_ls26Dzhs = new $hs.Thunk();
        hs_ls26Dzhs.evaluateOnce = function () {
            var hs_sat26DzmZ = new $hs.Thunk();
            hs_sat26DzmZ.evaluateOnce = function () {
                throw "primitive operation addr2Int#. Not implemeted yet.";
                var hs_sat26DzmX = hs_sat26Dzhq;
                return $hs.modules.GHCziInteger.hs_wordToInteger.hscall(hs_sat26DzmX);
            };
            return $hs.modules.Numeric.hs_showHex.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DzmZ, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        var hs_sat26Dzn8 = new $hs.Thunk();
        hs_sat26Dzn8.evaluateOnce = function () {
            var hs_sat26Dzn0 = new $hs.Thunk();
            hs_sat26Dzn0.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_ls26Dzhs, hs_rs26DzhC);
            };
            var hs_sat26Dzn7 = new $hs.Thunk();
            hs_sat26Dzn7.evaluateOnce = function () {
                var hs_sat26Dzn1 = new $hs.Data(1);
                hs_sat26Dzn1.data = ["0"];
                var hs_sat26Dzn6 = new $hs.Thunk();
                hs_sat26Dzn6.evaluateOnce = function () {
                    var hs_sat26Dzn2 = new $hs.Thunk();
                    hs_sat26Dzn2.evaluateOnce = function () {
                        return $hs.modules.GHCziList.hs_length.hscall(hs_ls26Dzhs);
                    };
                    var hs_sat26Dzn5 = new $hs.Thunk();
                    hs_sat26Dzn5.evaluateOnce = function () {
                        var hs_sat26Dzn3 = new $hs.Data(1);
                        hs_sat26Dzn3.data = [4];
                        var hs_sat26Dzn4 = new $hs.Data(1);
                        hs_sat26Dzn4.data = [2];
                        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dzn4, hs_sat26Dzn3);
                    };
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dzn5, hs_sat26Dzn2);
                };
                return $hs.modules.GHCziList.hs_replicate.hscall(hs_sat26Dzn6, hs_sat26Dzn1);
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dzn7, hs_sat26Dzn0);
        };
        var hs_sat26Dzn9 = new $hs.Data(1);
        hs_sat26Dzn9.data = ["x"];
        var hs_sat26Dzna = new $hs.Data(2);
        hs_sat26Dzna.data = [hs_sat26Dzn9, hs_sat26Dzn8];
        var hs_sat26Dznb = new $hs.Data(1);
        hs_sat26Dznb.data = ["0"];
        var $res = new $hs.Data(2);
        $res.data = [hs_sat26Dznb, hs_sat26Dzna];
        return $res;
    };
    this.hs_zdfShowPtr.data = [hs_zdcshowsPrec25vaKZ, hs_zdcshow25vaLu, hs_zdcshowList25vaLs];
    hs_zdcshowList25vaLs.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziPtr.hs_zdfShowPtr);
    };
    hs_zdcshow25vaLu.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziPtr.hs_zdfShowPtr);
    };
    hs_zdcshowsPrec125vaLw.evaluate = function (hs_p26DzhO) {
        var hs_sat26Dznc = new $hs.Thunk();
        hs_sat26Dznc.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziPtr.hs_zdfShowPtr, hs_p26DzhO);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dznc, $hs.modules.GHCziPtr.hs_castFunPtrToPtr);
    };
    this.hs_zdfShowFunPtr.data = [hs_zdcshowsPrec125vaLw, hs_zdcshow125vaLD, hs_zdcshowList125vaLB];
    hs_zdcshowList125vaLB.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziPtr.hs_zdfShowFunPtr);
    };
    hs_zdcshow125vaLD.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziPtr.hs_zdfShowFunPtr);
    };
    hs_zdczlze25vaLF.evaluate = function (hs_zddEq26Dzi7, hs_a26DzhZ, hs_b26Dzi2) {
        var hs_wild26Dzne = hs_a26DzhZ;
        if (hs_a26DzhZ.notEvaluated) {
            hs_wild26Dzne = hs_a26DzhZ.hscall();
        }
        var hs_a126Dzi5 = hs_wild26Dzne.data[0];
        var hs_wild126Dznd = hs_b26Dzi2;
        if (hs_b26Dzi2.notEvaluated) {
            hs_wild126Dznd = hs_b26Dzi2.hscall();
        }
        var hs_b126Dzi6 = hs_wild126Dznd.data[0];
        throw "primitive operation leAddr#. Not implemeted yet.";
    };
    hs_zdczg25vaLT.evaluate = function (hs_zddEq26Dzil, hs_a26Dzid, hs_b26Dzig) {
        var hs_wild26Dzng = hs_a26Dzid;
        if (hs_a26Dzid.notEvaluated) {
            hs_wild26Dzng = hs_a26Dzid.hscall();
        }
        var hs_a126Dzij = hs_wild26Dzng.data[0];
        var hs_wild126Dznf = hs_b26Dzig;
        if (hs_b26Dzig.notEvaluated) {
            hs_wild126Dznf = hs_b26Dzig.hscall();
        }
        var hs_b126Dzik = hs_wild126Dznf.data[0];
        throw "primitive operation gtAddr#. Not implemeted yet.";
    };
    hs_zdczgze25vaM7.evaluate = function (hs_zddEq26Dziz, hs_a26Dzir, hs_b26Dziu) {
        var hs_wild26Dzni = hs_a26Dzir;
        if (hs_a26Dzir.notEvaluated) {
            hs_wild26Dzni = hs_a26Dzir.hscall();
        }
        var hs_a126Dzix = hs_wild26Dzni.data[0];
        var hs_wild126Dznh = hs_b26Dziu;
        if (hs_b26Dziu.notEvaluated) {
            hs_wild126Dznh = hs_b26Dziu.hscall();
        }
        var hs_b126Dziy = hs_wild126Dznh.data[0];
        throw "primitive operation geAddr#. Not implemeted yet.";
    };
    hs_zdczl25vaMl.evaluate = function (hs_zddEq26DziN, hs_a26DziF, hs_b26DziI) {
        var hs_wild26Dznk = hs_a26DziF;
        if (hs_a26DziF.notEvaluated) {
            hs_wild26Dznk = hs_a26DziF.hscall();
        }
        var hs_a126DziL = hs_wild26Dznk.data[0];
        var hs_wild126Dznj = hs_b26DziI;
        if (hs_b26DziI.notEvaluated) {
            hs_wild126Dznj = hs_b26DziI.hscall();
        }
        var hs_b126DziM = hs_wild126Dznj.data[0];
        throw "primitive operation ltAddr#. Not implemeted yet.";
    };
    hs_zdccompare25vaMz.evaluate = function (hs_zddEq26Dzj3, hs_a26DziT, hs_b26DziW) {
        var hs_wild26Dzno = hs_a26DziT;
        if (hs_a26DziT.notEvaluated) {
            hs_wild26Dzno = hs_a26DziT.hscall();
        }
        var hs_a126DziZ = hs_wild26Dzno.data[0];
        var hs_wild126Dznn = hs_b26DziW;
        if (hs_b26DziW.notEvaluated) {
            hs_wild126Dznn = hs_b26DziW.hscall();
        }
        var hs_b126Dzj0 = hs_wild126Dznn.data[0];
        throw "primitive operation ltAddr#. Not implemeted yet.";
        switch (hs_wild226Dznm.tag) {
        case 1:
            throw "primitive operation eqAddr#. Not implemeted yet.";
            switch (hs_wild326Dznl.tag) {
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
    this.hs_zdfOrdPtr.evaluate = function (hs_zddEq26Dzj9) {
        var hs_sat26Dznp = new $hs.Thunk();
        hs_sat26Dznp.evaluateOnce = function () {
            return hs_zdcmin25vaMP.hscall(hs_zddEq26Dzj9);
        };
        var hs_sat26Dzns = new $hs.Thunk();
        hs_sat26Dzns.evaluateOnce = function () {
            return hs_zdcmax25vaMR.hscall(hs_zddEq26Dzj9);
        };
        var hs_sat26Dznv = new $hs.Func(2);
        hs_sat26Dznv.evaluate = function (hs_a26DzjK, hs_b26DzjN) {
            var hs_wild26Dznr = hs_a26DzjK;
            if (hs_a26DzjK.notEvaluated) {
                hs_wild26Dznr = hs_a26DzjK.hscall();
            }
            var hs_a126DzjQ = hs_wild26Dznr.data[0];
            var hs_wild126Dznq = hs_b26DzjN;
            if (hs_b26DzjN.notEvaluated) {
                hs_wild126Dznq = hs_b26DzjN.hscall();
            }
            var hs_b126DzjR = hs_wild126Dznq.data[0];
            throw "primitive operation leAddr#. Not implemeted yet.";
        };
        var hs_sat26Dzny = new $hs.Func(2);
        hs_sat26Dzny.evaluate = function (hs_a26Dzjz, hs_b26DzjC) {
            var hs_wild26Dznu = hs_a26Dzjz;
            if (hs_a26Dzjz.notEvaluated) {
                hs_wild26Dznu = hs_a26Dzjz.hscall();
            }
            var hs_a126DzjF = hs_wild26Dznu.data[0];
            var hs_wild126Dznt = hs_b26DzjC;
            if (hs_b26DzjC.notEvaluated) {
                hs_wild126Dznt = hs_b26DzjC.hscall();
            }
            var hs_b126DzjG = hs_wild126Dznt.data[0];
            throw "primitive operation gtAddr#. Not implemeted yet.";
        };
        var hs_sat26DznB = new $hs.Func(2);
        hs_sat26DznB.evaluate = function (hs_a26Dzjo, hs_b26Dzjr) {
            var hs_wild26Dznx = hs_a26Dzjo;
            if (hs_a26Dzjo.notEvaluated) {
                hs_wild26Dznx = hs_a26Dzjo.hscall();
            }
            var hs_a126Dzju = hs_wild26Dznx.data[0];
            var hs_wild126Dznw = hs_b26Dzjr;
            if (hs_b26Dzjr.notEvaluated) {
                hs_wild126Dznw = hs_b26Dzjr.hscall();
            }
            var hs_b126Dzjv = hs_wild126Dznw.data[0];
            throw "primitive operation geAddr#. Not implemeted yet.";
        };
        var hs_sat26DznC = new $hs.Func(2);
        hs_sat26DznC.evaluate = function (hs_a26Dzjd, hs_b26Dzjg) {
            var hs_wild26DznA = hs_a26Dzjd;
            if (hs_a26Dzjd.notEvaluated) {
                hs_wild26DznA = hs_a26Dzjd.hscall();
            }
            var hs_a126Dzjj = hs_wild26DznA.data[0];
            var hs_wild126Dznz = hs_b26Dzjg;
            if (hs_b26Dzjg.notEvaluated) {
                hs_wild126Dznz = hs_b26Dzjg.hscall();
            }
            var hs_b126Dzjk = hs_wild126Dznz.data[0];
            throw "primitive operation ltAddr#. Not implemeted yet.";
        };
        var hs_sat26DznD = new $hs.Func(2);
        hs_sat26DznD.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare25vaMz.hscall(hs_zddEq26Dzj9, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq26Dzj9, hs_sat26DznD, hs_sat26DznC, hs_sat26DznB, hs_sat26Dzny, hs_sat26Dznv, hs_sat26Dzns, hs_sat26Dznp];
        return $res;
    };
    hs_zdcmin25vaMP.evaluate = function (hs_zddEq26DzjW) {
        var hs_sat26DznE = new $hs.Thunk();
        hs_sat26DznE.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_zdfOrdPtr.hscall(hs_zddEq26DzjW);
        };
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall(hs_sat26DznE);
    };
    hs_zdcmax25vaMR.evaluate = function (hs_zddEq26DzjZ) {
        var hs_sat26DznF = new $hs.Thunk();
        hs_sat26DznF.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_zdfOrdPtr.hscall(hs_zddEq26DzjZ);
        };
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall(hs_sat26DznF);
    };
    hs_zdczeze25vaNM.evaluate = function (hs_ds26Dzk5, hs_ds126Dzk8) {
        var hs_wild26DznH = hs_ds26Dzk5;
        if (hs_ds26Dzk5.notEvaluated) {
            hs_wild26DznH = hs_ds26Dzk5.hscall();
        }
        var hs_a126Dzkb = hs_wild26DznH.data[0];
        var hs_wild126DznG = hs_ds126Dzk8;
        if (hs_ds126Dzk8.notEvaluated) {
            hs_wild126DznG = hs_ds126Dzk8.hscall();
        }
        var hs_b126Dzkc = hs_wild126DznG.data[0];
        throw "primitive operation eqAddr#. Not implemeted yet.";
    };
    this.hs_zdfEqPtr.data = [hs_zdczeze25vaNM, hs_zdczsze25vaNY];
    hs_zdczsze25vaNY.evaluate = function (hs_a26Dzkh, hs_b26Dzki) {
        var hs_sat26DznI = new $hs.Thunk();
        hs_sat26DznI.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_a26Dzkh, hs_b26Dzki);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DznI);
    };
    hs_zdczlze125vaO5.evaluate = function (hs_zddEq26Dzkx, hs_a26Dzkp, hs_b26Dzks) {
        var hs_wild26DznK = hs_a26Dzkp;
        if (hs_a26Dzkp.notEvaluated) {
            hs_wild26DznK = hs_a26Dzkp.hscall();
        }
        var hs_a126Dzkv = hs_wild26DznK.data[0];
        var hs_wild126DznJ = hs_b26Dzks;
        if (hs_b26Dzks.notEvaluated) {
            hs_wild126DznJ = hs_b26Dzks.hscall();
        }
        var hs_b126Dzkw = hs_wild126DznJ.data[0];
        throw "primitive operation leAddr#. Not implemeted yet.";
    };
    hs_zdczg125vaOj.evaluate = function (hs_zddEq26DzkL, hs_a26DzkD, hs_b26DzkG) {
        var hs_wild26DznM = hs_a26DzkD;
        if (hs_a26DzkD.notEvaluated) {
            hs_wild26DznM = hs_a26DzkD.hscall();
        }
        var hs_a126DzkJ = hs_wild26DznM.data[0];
        var hs_wild126DznL = hs_b26DzkG;
        if (hs_b26DzkG.notEvaluated) {
            hs_wild126DznL = hs_b26DzkG.hscall();
        }
        var hs_b126DzkK = hs_wild126DznL.data[0];
        throw "primitive operation gtAddr#. Not implemeted yet.";
    };
    hs_zdczgze125vaOx.evaluate = function (hs_zddEq26DzkZ, hs_a26DzkR, hs_b26DzkU) {
        var hs_wild26DznO = hs_a26DzkR;
        if (hs_a26DzkR.notEvaluated) {
            hs_wild26DznO = hs_a26DzkR.hscall();
        }
        var hs_a126DzkX = hs_wild26DznO.data[0];
        var hs_wild126DznN = hs_b26DzkU;
        if (hs_b26DzkU.notEvaluated) {
            hs_wild126DznN = hs_b26DzkU.hscall();
        }
        var hs_b126DzkY = hs_wild126DznN.data[0];
        throw "primitive operation geAddr#. Not implemeted yet.";
    };
    hs_zdczl125vaOL.evaluate = function (hs_zddEq26Dzld, hs_a26Dzl5, hs_b26Dzl8) {
        var hs_wild26DznQ = hs_a26Dzl5;
        if (hs_a26Dzl5.notEvaluated) {
            hs_wild26DznQ = hs_a26Dzl5.hscall();
        }
        var hs_a126Dzlb = hs_wild26DznQ.data[0];
        var hs_wild126DznP = hs_b26Dzl8;
        if (hs_b26Dzl8.notEvaluated) {
            hs_wild126DznP = hs_b26Dzl8.hscall();
        }
        var hs_b126Dzlc = hs_wild126DznP.data[0];
        throw "primitive operation ltAddr#. Not implemeted yet.";
    };
    hs_zdccompare125vaOZ.evaluate = function (hs_zddEq26Dzlt, hs_a26Dzlj, hs_b26Dzlm) {
        var hs_wild26DznU = hs_a26Dzlj;
        if (hs_a26Dzlj.notEvaluated) {
            hs_wild26DznU = hs_a26Dzlj.hscall();
        }
        var hs_a126Dzlp = hs_wild26DznU.data[0];
        var hs_wild126DznT = hs_b26Dzlm;
        if (hs_b26Dzlm.notEvaluated) {
            hs_wild126DznT = hs_b26Dzlm.hscall();
        }
        var hs_b126Dzlq = hs_wild126DznT.data[0];
        throw "primitive operation ltAddr#. Not implemeted yet.";
        switch (hs_wild226DznS.tag) {
        case 1:
            throw "primitive operation eqAddr#. Not implemeted yet.";
            switch (hs_wild326DznR.tag) {
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
    this.hs_zdfOrdFunPtr.evaluate = function (hs_zddEq26Dzlz) {
        var hs_sat26DznV = new $hs.Thunk();
        hs_sat26DznV.evaluateOnce = function () {
            return hs_zdcmin125vaPf.hscall(hs_zddEq26Dzlz);
        };
        var hs_sat26DznY = new $hs.Thunk();
        hs_sat26DznY.evaluateOnce = function () {
            return hs_zdcmax125vaPh.hscall(hs_zddEq26Dzlz);
        };
        var hs_sat26Dzo1 = new $hs.Func(2);
        hs_sat26Dzo1.evaluate = function (hs_a26Dzma, hs_b26Dzmd) {
            var hs_wild26DznX = hs_a26Dzma;
            if (hs_a26Dzma.notEvaluated) {
                hs_wild26DznX = hs_a26Dzma.hscall();
            }
            var hs_a126Dzmg = hs_wild26DznX.data[0];
            var hs_wild126DznW = hs_b26Dzmd;
            if (hs_b26Dzmd.notEvaluated) {
                hs_wild126DznW = hs_b26Dzmd.hscall();
            }
            var hs_b126Dzmh = hs_wild126DznW.data[0];
            throw "primitive operation leAddr#. Not implemeted yet.";
        };
        var hs_sat26Dzo4 = new $hs.Func(2);
        hs_sat26Dzo4.evaluate = function (hs_a26DzlZ, hs_b26Dzm2) {
            var hs_wild26Dzo0 = hs_a26DzlZ;
            if (hs_a26DzlZ.notEvaluated) {
                hs_wild26Dzo0 = hs_a26DzlZ.hscall();
            }
            var hs_a126Dzm5 = hs_wild26Dzo0.data[0];
            var hs_wild126DznZ = hs_b26Dzm2;
            if (hs_b26Dzm2.notEvaluated) {
                hs_wild126DznZ = hs_b26Dzm2.hscall();
            }
            var hs_b126Dzm6 = hs_wild126DznZ.data[0];
            throw "primitive operation gtAddr#. Not implemeted yet.";
        };
        var hs_sat26Dzo7 = new $hs.Func(2);
        hs_sat26Dzo7.evaluate = function (hs_a26DzlO, hs_b26DzlR) {
            var hs_wild26Dzo3 = hs_a26DzlO;
            if (hs_a26DzlO.notEvaluated) {
                hs_wild26Dzo3 = hs_a26DzlO.hscall();
            }
            var hs_a126DzlU = hs_wild26Dzo3.data[0];
            var hs_wild126Dzo2 = hs_b26DzlR;
            if (hs_b26DzlR.notEvaluated) {
                hs_wild126Dzo2 = hs_b26DzlR.hscall();
            }
            var hs_b126DzlV = hs_wild126Dzo2.data[0];
            throw "primitive operation geAddr#. Not implemeted yet.";
        };
        var hs_sat26Dzo8 = new $hs.Func(2);
        hs_sat26Dzo8.evaluate = function (hs_a26DzlD, hs_b26DzlG) {
            var hs_wild26Dzo6 = hs_a26DzlD;
            if (hs_a26DzlD.notEvaluated) {
                hs_wild26Dzo6 = hs_a26DzlD.hscall();
            }
            var hs_a126DzlJ = hs_wild26Dzo6.data[0];
            var hs_wild126Dzo5 = hs_b26DzlG;
            if (hs_b26DzlG.notEvaluated) {
                hs_wild126Dzo5 = hs_b26DzlG.hscall();
            }
            var hs_b126DzlK = hs_wild126Dzo5.data[0];
            throw "primitive operation ltAddr#. Not implemeted yet.";
        };
        var hs_sat26Dzo9 = new $hs.Func(2);
        hs_sat26Dzo9.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare125vaOZ.hscall(hs_zddEq26Dzlz, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq26Dzlz, hs_sat26Dzo9, hs_sat26Dzo8, hs_sat26Dzo7, hs_sat26Dzo4, hs_sat26Dzo1, hs_sat26DznY, hs_sat26DznV];
        return $res;
    };
    hs_zdcmin125vaPf.evaluate = function (hs_zddEq26Dzmm) {
        var hs_sat26Dzoa = new $hs.Thunk();
        hs_sat26Dzoa.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_zdfOrdFunPtr.hscall(hs_zddEq26Dzmm);
        };
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall(hs_sat26Dzoa);
    };
    hs_zdcmax125vaPh.evaluate = function (hs_zddEq26Dzmp) {
        var hs_sat26Dzob = new $hs.Thunk();
        hs_sat26Dzob.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_zdfOrdFunPtr.hscall(hs_zddEq26Dzmp);
        };
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall(hs_sat26Dzob);
    };
    hs_zdczeze125vaQc.evaluate = function (hs_ds26Dzmv, hs_ds126Dzmy) {
        var hs_wild26Dzod = hs_ds26Dzmv;
        if (hs_ds26Dzmv.notEvaluated) {
            hs_wild26Dzod = hs_ds26Dzmv.hscall();
        }
        var hs_a126DzmB = hs_wild26Dzod.data[0];
        var hs_wild126Dzoc = hs_ds126Dzmy;
        if (hs_ds126Dzmy.notEvaluated) {
            hs_wild126Dzoc = hs_ds126Dzmy.hscall();
        }
        var hs_b126DzmC = hs_wild126Dzoc.data[0];
        throw "primitive operation eqAddr#. Not implemeted yet.";
    };
    this.hs_zdfEqFunPtr.data = [hs_zdczeze125vaQc, hs_zdczsze125vaQo];
    hs_zdczsze125vaQo.evaluate = function (hs_a26DzmH, hs_b26DzmI) {
        var hs_sat26Dzoe = new $hs.Thunk();
        hs_sat26Dzoe.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqFunPtr, hs_a26DzmH, hs_b26DzmI);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26Dzoe);
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
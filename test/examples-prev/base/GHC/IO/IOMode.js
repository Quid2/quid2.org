
$hs.modules.GHCziIOziIOMode = new $hs.Module();
$hs.modules.GHCziIOziIOMode.dependencies = ["GHC.Types", "GHC.Base", "GHC.Enum", "GHC.Num", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.Arr", "GHC.Read", "Text.ParserCombinators.ReadPrec"];
$hs.modules.GHCziIOziIOMode.initBeforeDependencies = function () {
    this.hs_zdfShowIOMode = new $hs.Data(1);
    this.hs_zdfReadIOMode = new $hs.Data(1);
    this.hs_zdfEnumIOMode = new $hs.Data(1);
    this.hs_zdfEqIOMode = new $hs.Data(1);
    this.hs_zdfOrdIOMode = new $hs.Data(1);
    this.hs_zdfIxIOMode = new $hs.Data(1);
    this.hs_ReadMode = new $hs.Data(1);
    this.hs_WriteMode = new $hs.Data(2);
    this.hs_AppendMode = new $hs.Data(3);
    this.hs_ReadWriteMode = new $hs.Data(4);
    this.hs_zdfShowIOMode.notEvaluated = true;
    this.hs_zdfShowIOMode.evaluate = function () {
        $hs.modules.GHCziIOziIOMode.loadDependencies();
        return this;
    };
    this.hs_zdfReadIOMode.notEvaluated = true;
    this.hs_zdfReadIOMode.evaluate = function () {
        $hs.modules.GHCziIOziIOMode.loadDependencies();
        return this;
    };
    this.hs_zdfEnumIOMode.notEvaluated = true;
    this.hs_zdfEnumIOMode.evaluate = function () {
        $hs.modules.GHCziIOziIOMode.loadDependencies();
        return this;
    };
    this.hs_zdfEqIOMode.notEvaluated = true;
    this.hs_zdfEqIOMode.evaluate = function () {
        $hs.modules.GHCziIOziIOMode.loadDependencies();
        return this;
    };
    this.hs_zdfOrdIOMode.notEvaluated = true;
    this.hs_zdfOrdIOMode.evaluate = function () {
        $hs.modules.GHCziIOziIOMode.loadDependencies();
        return this;
    };
    this.hs_zdfIxIOMode.notEvaluated = true;
    this.hs_zdfIxIOMode.evaluate = function () {
        $hs.modules.GHCziIOziIOMode.loadDependencies();
        return this;
    };
    this.hs_ReadMode.notEvaluated = true;
    this.hs_ReadMode.evaluate = function () {
        $hs.modules.GHCziIOziIOMode.loadDependencies();
        return this;
    };
    this.hs_WriteMode.notEvaluated = true;
    this.hs_WriteMode.evaluate = function () {
        $hs.modules.GHCziIOziIOMode.loadDependencies();
        return this;
    };
    this.hs_AppendMode.notEvaluated = true;
    this.hs_AppendMode.evaluate = function () {
        $hs.modules.GHCziIOziIOMode.loadDependencies();
        return this;
    };
    this.hs_ReadWriteMode.notEvaluated = true;
    this.hs_ReadWriteMode.evaluate = function () {
        $hs.modules.GHCziIOziIOMode.loadDependencies();
        return this;
    };
};
$hs.modules.GHCziIOziIOMode.initAfterDependencies = function () {
    this.hs_zdfShowIOMode.notEvaluated = false;
    this.hs_zdfShowIOMode.evaluate = function () {
        return this;
    };
    this.hs_zdfReadIOMode.notEvaluated = false;
    this.hs_zdfReadIOMode.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumIOMode.notEvaluated = false;
    this.hs_zdfEnumIOMode.evaluate = function () {
        return this;
    };
    this.hs_zdfEqIOMode.notEvaluated = false;
    this.hs_zdfEqIOMode.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdIOMode.notEvaluated = false;
    this.hs_zdfOrdIOMode.evaluate = function () {
        return this;
    };
    this.hs_zdfIxIOMode.notEvaluated = false;
    this.hs_zdfIxIOMode.evaluate = function () {
        return this;
    };
    this.hs_ReadMode.notEvaluated = false;
    this.hs_ReadMode.evaluate = function () {
        return this;
    };
    this.hs_WriteMode.notEvaluated = false;
    this.hs_WriteMode.evaluate = function () {
        return this;
    };
    this.hs_AppendMode.notEvaluated = false;
    this.hs_AppendMode.evaluate = function () {
        return this;
    };
    this.hs_ReadWriteMode.notEvaluated = false;
    this.hs_ReadWriteMode.evaluate = function () {
        return this;
    };
    var hs_zdtag2conzuIOMode25sdq8 = new $hs.Func(1);
    var hs_zdmaxtagzuIOMode25sdq6 = new $hs.Data(1);
    var hs_zdcshowsPrec25uZ8Z = new $hs.Func(2);
    var hs_sat26DnKi = new $hs.Thunk();
    var hs_zdcshowList25uZ9a = new $hs.Thunk();
    var hs_zdcshow25uZ9c = new $hs.Thunk();
    var hs_sat26DnKA = new $hs.Thunk();
    var hs_zdcreadPrec25uZ9g = new $hs.Thunk();
    var hs_zdcreadListPrec25uZ9z = new $hs.Thunk();
    var hs_zdcreadList25uZ9B = new $hs.Thunk();
    var hs_zdcreadsPrec25uZ9D = new $hs.Thunk();
    var hs_zdcenumFromThen25uZ9F = new $hs.Func(2);
    var hs_zdcenumFrom25uZa2 = new $hs.Func(1);
    var hs_zdcfromEnum25uZaf = new $hs.Func(1);
    var hs_zdctoEnum25uZak = new $hs.Func(1);
    var hs_zdcpred25uZaF = new $hs.Func(1);
    var hs_zdcsucc25uZaX = new $hs.Func(1);
    var hs_zdcenumFromThenTo25uZbe = new $hs.Thunk();
    var hs_zdcenumFromTo25uZbg = new $hs.Thunk();
    var hs_zdcinRange25uZbi = new $hs.Func(2);
    var hs_zdcunsafeIndex25uZbI = new $hs.Func(2);
    var hs_zdcrange25uZc2 = new $hs.Func(1);
    var hs_zdczlze25uZct = new $hs.Func(2);
    var hs_zdczg25uZcE = new $hs.Func(2);
    var hs_zdczgze25uZcP = new $hs.Func(2);
    var hs_zdczl25uZd0 = new $hs.Func(2);
    var hs_zdccompare25uZdb = new $hs.Func(2);
    var hs_zdczeze25uZdv = new $hs.Func(2);
    var hs_zdczsze25uZdG = new $hs.Func(2);
    var hs_zdcmin25uZdN = new $hs.Thunk();
    var hs_zdcmax25uZdP = new $hs.Thunk();
    var hs_zdcunsafeRangeSizze25uZdR = new $hs.Thunk();
    var hs_zdcrangeSizze25uZdT = new $hs.Thunk();
    var hs_zdcindex25uZdV = new $hs.Thunk();
    hs_zdtag2conzuIOMode25sdq8.evaluate = function (hs_ds26DnFa) {
        var hs_wild26DnKc = hs_ds26DnFa;
        if (hs_ds26DnFa.notEvaluated) {
            hs_wild26DnKc = hs_ds26DnFa.hscall();
        }
        var hs_a26DnFd = hs_wild26DnKc.data[0];
        throw "primitive operation tagToEnum#. Not implemeted yet.";
    };
    hs_zdmaxtagzuIOMode25sdq6.data = [3];
    hs_zdcshowsPrec25uZ8Z.evaluate = function (hs_ds26DnFo, hs_ds126DnFi) {
        var hs_wild26DnKd = hs_ds126DnFi;
        if (hs_ds126DnFi.notEvaluated) {
            hs_wild26DnKd = hs_ds126DnFi.hscall();
        }
        switch (hs_wild26DnKd.tag) {
        case 1:
            var hs_sat26DnKe = new $hs.Thunk();
            hs_sat26DnKe.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ReadMode\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DnKe);
        case 2:
            var hs_sat26DnKf = new $hs.Thunk();
            hs_sat26DnKf.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("WriteMode\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DnKf);
        case 3:
            var hs_sat26DnKg = new $hs.Thunk();
            hs_sat26DnKg.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("AppendMode\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DnKg);
        case 4:
            var hs_sat26DnKh = new $hs.Thunk();
            hs_sat26DnKh.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ReadWriteMode\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DnKh);
        }
    };
    hs_sat26DnKi.evaluateOnce = function () {
        var hs_sat26DnKj = new $hs.Data(1);
        hs_sat26DnKj.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziIOziIOMode.hs_zdfShowIOMode, hs_sat26DnKj);
    };
    this.hs_zdfShowIOMode.data = [hs_zdcshowsPrec25uZ8Z, hs_zdcshow25uZ9c, hs_zdcshowList25uZ9a];
    hs_zdcshowList25uZ9a.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DnKi);
    };
    hs_zdcshow25uZ9c.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziIOziIOMode.hs_zdfShowIOMode);
    };
    hs_sat26DnKA.evaluateOnce = function () {
        var hs_sat26DnKk = new $hs.Thunk();
        hs_sat26DnKk.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziIOziIOMode.hs_ReadWriteMode);
        };
        var hs_sat26DnKl = new $hs.Thunk();
        hs_sat26DnKl.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ReadWriteMode\x00");
        };
        var hs_sat26DnKm = new $hs.Data(1);
        hs_sat26DnKm.data = [hs_sat26DnKl, hs_sat26DnKk];
        var hs_sat26DnKn = new $hs.Data(2);
        hs_sat26DnKn.data = [hs_sat26DnKm, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26DnKo = new $hs.Thunk();
        hs_sat26DnKo.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziIOziIOMode.hs_AppendMode);
        };
        var hs_sat26DnKp = new $hs.Thunk();
        hs_sat26DnKp.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("AppendMode\x00");
        };
        var hs_sat26DnKq = new $hs.Data(1);
        hs_sat26DnKq.data = [hs_sat26DnKp, hs_sat26DnKo];
        var hs_sat26DnKr = new $hs.Data(2);
        hs_sat26DnKr.data = [hs_sat26DnKq, hs_sat26DnKn];
        var hs_sat26DnKs = new $hs.Thunk();
        hs_sat26DnKs.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziIOziIOMode.hs_WriteMode);
        };
        var hs_sat26DnKt = new $hs.Thunk();
        hs_sat26DnKt.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("WriteMode\x00");
        };
        var hs_sat26DnKu = new $hs.Data(1);
        hs_sat26DnKu.data = [hs_sat26DnKt, hs_sat26DnKs];
        var hs_sat26DnKv = new $hs.Data(2);
        hs_sat26DnKv.data = [hs_sat26DnKu, hs_sat26DnKr];
        var hs_sat26DnKw = new $hs.Thunk();
        hs_sat26DnKw.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziIOziIOMode.hs_ReadMode);
        };
        var hs_sat26DnKx = new $hs.Thunk();
        hs_sat26DnKx.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ReadMode\x00");
        };
        var hs_sat26DnKy = new $hs.Data(1);
        hs_sat26DnKy.data = [hs_sat26DnKx, hs_sat26DnKw];
        var hs_sat26DnKz = new $hs.Data(2);
        hs_sat26DnKz.data = [hs_sat26DnKy, hs_sat26DnKv];
        return $hs.modules.GHCziRead.hs_choose.hscall(hs_sat26DnKz);
    };
    hs_zdcreadPrec25uZ9g.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26DnKA);
    };
    this.hs_zdfReadIOMode.data = [hs_zdcreadsPrec25uZ9D, hs_zdcreadList25uZ9B, hs_zdcreadPrec25uZ9g, hs_zdcreadListPrec25uZ9z];
    hs_zdcreadListPrec25uZ9z.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall($hs.modules.GHCziIOziIOMode.hs_zdfReadIOMode);
    };
    hs_zdcreadList25uZ9B.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListDefault.hscall($hs.modules.GHCziIOziIOMode.hs_zdfReadIOMode);
    };
    hs_zdcreadsPrec25uZ9D.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall($hs.modules.GHCziIOziIOMode.hs_zdfReadIOMode);
    };
    hs_zdcenumFromThen25uZ9F.evaluate = function (hs_a26DnGf, hs_b26DnGc) {
        var hs_zdj26DnGe = new $hs.Func(1);
        hs_zdj26DnGe.evaluate = function (hs_azh26DnG2) {
            var hs_zdj126DnGb = new $hs.Func(1);
            hs_zdj126DnGb.evaluate = function (hs_bzh26DnG4) {
                var hs_sat26DnKH = new $hs.Thunk();
                hs_sat26DnKH.evaluateOnce = function () {
                    var hs_sat26DnKE = new $hs.Thunk();
                    hs_sat26DnKE.evaluateOnce = function () {
                        var hs_sat26DnKB = new $hs.Data(1);
                        hs_sat26DnKB.data = [hs_bzh26DnG4];
                        var hs_sat26DnKD = new $hs.Data(1);
                        hs_sat26DnKD.data = [hs_azh26DnG2];
                        var hs_wild26DnKC = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DnKD, hs_sat26DnKB);
                        switch (hs_wild26DnKC.tag) {
                        case 1:
                            if (hs_zdmaxtagzuIOMode25sdq6.notEvaluated) {
                                return hs_zdmaxtagzuIOMode25sdq6.hscall();
                            } else {
                                return hs_zdmaxtagzuIOMode25sdq6;
                            }
                        case 2:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        }
                    };
                    var hs_sat26DnKF = new $hs.Data(1);
                    hs_sat26DnKF.data = [hs_bzh26DnG4];
                    var hs_sat26DnKG = new $hs.Data(1);
                    hs_sat26DnKG.data = [hs_azh26DnG2];
                    return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26DnKG, hs_sat26DnKF, hs_sat26DnKE);
                };
                return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuIOMode25sdq8, hs_sat26DnKH);
            };
            var hs_wild26DnKI = hs_b26DnGc;
            if (hs_b26DnGc.notEvaluated) {
                hs_wild26DnKI = hs_b26DnGc.hscall();
            }
            switch (hs_wild26DnKI.tag) {
            case 1:
                return hs_zdj126DnGb.hscall(0);
            case 2:
                return hs_zdj126DnGb.hscall(1);
            case 3:
                return hs_zdj126DnGb.hscall(2);
            case 4:
                return hs_zdj126DnGb.hscall(3);
            }
        };
        var hs_wild26DnKJ = hs_a26DnGf;
        if (hs_a26DnGf.notEvaluated) {
            hs_wild26DnKJ = hs_a26DnGf.hscall();
        }
        switch (hs_wild26DnKJ.tag) {
        case 1:
            return hs_zdj26DnGe.hscall(0);
        case 2:
            return hs_zdj26DnGe.hscall(1);
        case 3:
            return hs_zdj26DnGe.hscall(2);
        case 4:
            return hs_zdj26DnGe.hscall(3);
        }
    };
    hs_zdcenumFrom25uZa2.evaluate = function (hs_a26DnGk) {
        var hs_wild26DnKK = hs_a26DnGk;
        if (hs_a26DnGk.notEvaluated) {
            hs_wild26DnKK = hs_a26DnGk.hscall();
        }
        switch (hs_wild26DnKK.tag) {
        case 1:
            var hs_sat26DnKM = new $hs.Thunk();
            hs_sat26DnKM.evaluateOnce = function () {
                var hs_sat26DnKL = new $hs.Data(1);
                hs_sat26DnKL.data = [0];
                return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26DnKL, hs_zdmaxtagzuIOMode25sdq6);
            };
            return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuIOMode25sdq8, hs_sat26DnKM);
        case 2:
            var hs_sat26DnKO = new $hs.Thunk();
            hs_sat26DnKO.evaluateOnce = function () {
                var hs_sat26DnKN = new $hs.Data(1);
                hs_sat26DnKN.data = [1];
                return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26DnKN, hs_zdmaxtagzuIOMode25sdq6);
            };
            return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuIOMode25sdq8, hs_sat26DnKO);
        case 3:
            var hs_sat26DnKQ = new $hs.Thunk();
            hs_sat26DnKQ.evaluateOnce = function () {
                var hs_sat26DnKP = new $hs.Data(1);
                hs_sat26DnKP.data = [2];
                return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26DnKP, hs_zdmaxtagzuIOMode25sdq6);
            };
            return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuIOMode25sdq8, hs_sat26DnKQ);
        case 4:
            var hs_sat26DnKS = new $hs.Thunk();
            hs_sat26DnKS.evaluateOnce = function () {
                var hs_sat26DnKR = new $hs.Data(1);
                hs_sat26DnKR.data = [3];
                return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26DnKR, hs_zdmaxtagzuIOMode25sdq6);
            };
            return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuIOMode25sdq8, hs_sat26DnKS);
        }
    };
    hs_zdcfromEnum25uZaf.evaluate = function (hs_a26DnGx) {
        var hs_wild26DnKT = hs_a26DnGx;
        if (hs_a26DnGx.notEvaluated) {
            hs_wild26DnKT = hs_a26DnGx.hscall();
        }
        switch (hs_wild26DnKT.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [0];
            return $res;
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [1];
            return $res;
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [2];
            return $res;
        case 4:
            var $res = new $hs.Data(1);
            $res.data = [3];
            return $res;
        }
    };
    hs_zdctoEnum25uZak.evaluate = function (hs_a26DnGC) {
        var hs_sat26DnKU = new $hs.Thunk();
        hs_sat26DnKU.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a26DnGC, hs_zdmaxtagzuIOMode25sdq6);
        };
        var hs_sat26DnKX = new $hs.Thunk();
        hs_sat26DnKX.evaluateOnce = function () {
            var hs_sat26DnKV = new $hs.Data(1);
            hs_sat26DnKV.data = [0];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a26DnGC, hs_sat26DnKV);
        };
        var hs_wild26DnKW = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DnKX, hs_sat26DnKU);
        switch (hs_wild26DnKW.tag) {
        case 1:
            var hs_sat26DnL5 = new $hs.Thunk();
            hs_sat26DnL5.evaluateOnce = function () {
                var hs_sat26DnL3 = new $hs.Thunk();
                hs_sat26DnL3.evaluateOnce = function () {
                    var hs_sat26DnL1 = new $hs.Thunk();
                    hs_sat26DnL1.evaluateOnce = function () {
                        var hs_sat26DnKY = new $hs.Data(1);
                        hs_sat26DnKY.data = [")"];
                        var hs_sat26DnKZ = new $hs.Data(2);
                        hs_sat26DnKZ.data = [hs_sat26DnKY, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_sat26DnL0 = new $hs.Data(1);
                        hs_sat26DnL0.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26DnL0, hs_zdmaxtagzuIOMode25sdq6, hs_sat26DnKZ);
                    };
                    var hs_sat26DnL2 = new $hs.Thunk();
                    hs_sat26DnL2.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(") is outside of enumeration's range (0,\x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DnL2, hs_sat26DnL1);
                };
                var hs_sat26DnL4 = new $hs.Data(1);
                hs_sat26DnL4.data = [0];
                return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26DnL4, hs_a26DnGC, hs_sat26DnL3);
            };
            var hs_sat26DnL7 = new $hs.Thunk();
            hs_sat26DnL7.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("toEnum{IOMode}: tag (\x00");
            };
            var hs_sat26DnL6 = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DnL7, hs_sat26DnL5);
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DnL6);
        case 2:
            var hs_wild126DnL8 = hs_a26DnGC;
            if (hs_a26DnGC.notEvaluated) {
                hs_wild126DnL8 = hs_a26DnGC.hscall();
            }
            var hs_a126DnGT = hs_wild126DnL8.data[0];
            throw "primitive operation tagToEnum#. Not implemeted yet.";
        }
    };
    hs_zdcpred25uZaF.evaluate = function (hs_a26DnHa) {
        var hs_zdj26DnH9 = new $hs.Func(1);
        hs_zdj26DnH9.evaluate = function (hs_azh26DnH0) {
            var hs_sat26DnL9 = new $hs.Data(1);
            hs_sat26DnL9.data = [hs_azh26DnH0];
            var hs_sat26DnLb = new $hs.Data(1);
            hs_sat26DnLb.data = [0];
            var hs_wild26DnLa = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DnLb, hs_sat26DnL9);
            switch (hs_wild26DnLa.tag) {
            case 1:
                var hs_sat26DnLc = new $hs.Data(1);
                hs_sat26DnLc.data = [-1];
                var hs_sat26DnLe = new $hs.Data(1);
                hs_sat26DnLe.data = [hs_azh26DnH0];
                var hs_wild126DnLd = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DnLe, hs_sat26DnLc);
                var hs_a126DnH7 = hs_wild126DnLd.data[0];
                throw "primitive operation tagToEnum#. Not implemeted yet.";
            case 2:
                var hs_sat26DnLf = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("pred{IOMode}: tried to take `pred' of first tag in enumeration\x00");
                return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DnLf);
            }
        };
        var hs_wild26DnLg = hs_a26DnHa;
        if (hs_a26DnHa.notEvaluated) {
            hs_wild26DnLg = hs_a26DnHa.hscall();
        }
        switch (hs_wild26DnLg.tag) {
        case 1:
            return hs_zdj26DnH9.hscall(0);
        case 2:
            return hs_zdj26DnH9.hscall(1);
        case 3:
            return hs_zdj26DnH9.hscall(2);
        case 4:
            return hs_zdj26DnH9.hscall(3);
        }
    };
    hs_zdcsucc25uZaX.evaluate = function (hs_a26DnHr) {
        var hs_zdj26DnHq = new $hs.Func(1);
        hs_zdj26DnHq.evaluate = function (hs_azh26DnHh) {
            var hs_sat26DnLi = new $hs.Data(1);
            hs_sat26DnLi.data = [hs_azh26DnHh];
            var hs_wild26DnLh = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_zdmaxtagzuIOMode25sdq6, hs_sat26DnLi);
            switch (hs_wild26DnLh.tag) {
            case 1:
                var hs_sat26DnLj = new $hs.Data(1);
                hs_sat26DnLj.data = [1];
                var hs_sat26DnLl = new $hs.Data(1);
                hs_sat26DnLl.data = [hs_azh26DnHh];
                var hs_wild126DnLk = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DnLl, hs_sat26DnLj);
                var hs_a126DnHo = hs_wild126DnLk.data[0];
                throw "primitive operation tagToEnum#. Not implemeted yet.";
            case 2:
                var hs_sat26DnLm = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("succ{IOMode}: tried to take `succ' of last tag in enumeration\x00");
                return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DnLm);
            }
        };
        var hs_wild26DnLn = hs_a26DnHr;
        if (hs_a26DnHr.notEvaluated) {
            hs_wild26DnLn = hs_a26DnHr.hscall();
        }
        switch (hs_wild26DnLn.tag) {
        case 1:
            return hs_zdj26DnHq.hscall(0);
        case 2:
            return hs_zdj26DnHq.hscall(1);
        case 3:
            return hs_zdj26DnHq.hscall(2);
        case 4:
            return hs_zdj26DnHq.hscall(3);
        }
    };
    this.hs_zdfEnumIOMode.data = [hs_zdcsucc25uZaX, hs_zdcpred25uZaF, hs_zdctoEnum25uZak, hs_zdcfromEnum25uZaf, hs_zdcenumFrom25uZa2, hs_zdcenumFromThen25uZ9F, hs_zdcenumFromTo25uZbg, hs_zdcenumFromThenTo25uZbe];
    hs_zdcenumFromThenTo25uZbe.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromThenTo.hscall($hs.modules.GHCziIOziIOMode.hs_zdfEnumIOMode);
    };
    hs_zdcenumFromTo25uZbg.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromTo.hscall($hs.modules.GHCziIOziIOMode.hs_zdfEnumIOMode);
    };
    hs_zdcinRange25uZbi.evaluate = function (hs_ds26DnHB, hs_c26DnHJ) {
        var hs_wild26DnLq = hs_ds26DnHB;
        if (hs_ds26DnHB.notEvaluated) {
            hs_wild26DnLq = hs_ds26DnHB.hscall();
        }
        var hs_a26DnHV = hs_wild26DnLq.data[0];
        var hs_b26DnHS = hs_wild26DnLq.data[1];
        var hs_zdj26DnHU = new $hs.Func(1);
        hs_zdj26DnHU.evaluate = function (hs_azh26DnHL) {
            var hs_zdj126DnHR = new $hs.Func(1);
            hs_zdj126DnHR.evaluate = function (hs_bzh26DnHN) {
                var hs_wild126DnLp = hs_c26DnHJ;
                if (hs_c26DnHJ.notEvaluated) {
                    hs_wild126DnLp = hs_c26DnHJ.hscall();
                }
                switch (hs_wild126DnLp.tag) {
                case 1:
                    var hs_wild226DnLo = 0 >= hs_azh26DnHL ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226DnLo.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return 0 <= hs_bzh26DnHN ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    }
                case 2:
                    var hs_wild226DnLr = 1 >= hs_azh26DnHL ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226DnLr.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return 1 <= hs_bzh26DnHN ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    }
                case 3:
                    var hs_wild226DnLs = 2 >= hs_azh26DnHL ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226DnLs.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return 2 <= hs_bzh26DnHN ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    }
                case 4:
                    var hs_wild226DnLt = 3 >= hs_azh26DnHL ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226DnLt.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return 3 <= hs_bzh26DnHN ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    }
                }
            };
            var hs_wild126DnLu = hs_b26DnHS;
            if (hs_b26DnHS.notEvaluated) {
                hs_wild126DnLu = hs_b26DnHS.hscall();
            }
            switch (hs_wild126DnLu.tag) {
            case 1:
                return hs_zdj126DnHR.hscall(0);
            case 2:
                return hs_zdj126DnHR.hscall(1);
            case 3:
                return hs_zdj126DnHR.hscall(2);
            case 4:
                return hs_zdj126DnHR.hscall(3);
            }
        };
        var hs_wild126DnLv = hs_a26DnHV;
        if (hs_a26DnHV.notEvaluated) {
            hs_wild126DnLv = hs_a26DnHV.hscall();
        }
        switch (hs_wild126DnLv.tag) {
        case 1:
            return hs_zdj26DnHU.hscall(0);
        case 2:
            return hs_zdj26DnHU.hscall(1);
        case 3:
            return hs_zdj26DnHU.hscall(2);
        case 4:
            return hs_zdj26DnHU.hscall(3);
        }
    };
    hs_zdcunsafeIndex25uZbI.evaluate = function (hs_c26DnI1, hs_d26DnI7) {
        var hs_wild26DnLy = hs_c26DnI1;
        if (hs_c26DnI1.notEvaluated) {
            hs_wild26DnLy = hs_c26DnI1.hscall();
        }
        var hs_a26DnIf = hs_wild26DnLy.data[0];
        var hs_zdj26DnIe = new $hs.Func(1);
        hs_zdj26DnIe.evaluate = function (hs_azh26DnI9) {
            var hs_wild126DnLx = hs_d26DnI7;
            if (hs_d26DnI7.notEvaluated) {
                hs_wild126DnLx = hs_d26DnI7.hscall();
            }
            switch (hs_wild126DnLx.tag) {
            case 1:
                var hs_sat26DnLw = ($hs.Int.addCarry(0, ~hs_azh26DnI9, 1))[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26DnLw];
                return $res;
            case 2:
                var hs_sat26DnLA = ($hs.Int.addCarry(1, ~hs_azh26DnI9, 1))[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26DnLA];
                return $res;
            case 3:
                var hs_sat26DnLB = ($hs.Int.addCarry(2, ~hs_azh26DnI9, 1))[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26DnLB];
                return $res;
            case 4:
                var hs_sat26DnLC = ($hs.Int.addCarry(3, ~hs_azh26DnI9, 1))[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26DnLC];
                return $res;
            }
        };
        var hs_wild126DnLD = hs_a26DnIf;
        if (hs_a26DnIf.notEvaluated) {
            hs_wild126DnLD = hs_a26DnIf.hscall();
        }
        switch (hs_wild126DnLD.tag) {
        case 1:
            return hs_zdj26DnIe.hscall(0);
        case 2:
            return hs_zdj26DnIe.hscall(1);
        case 3:
            return hs_zdj26DnIe.hscall(2);
        case 4:
            return hs_zdj26DnIe.hscall(3);
        }
    };
    hs_zdcrange25uZc2.evaluate = function (hs_ds26DnIk) {
        var hs_wild26DnLF = hs_ds26DnIk;
        if (hs_ds26DnIk.notEvaluated) {
            hs_wild26DnLF = hs_ds26DnIk.hscall();
        }
        var hs_a26DnIG = hs_wild26DnLF.data[0];
        var hs_b26DnIq = hs_wild26DnLF.data[1];
        var hs_zdj26DnIF = new $hs.Func(1);
        hs_zdj26DnIF.evaluate = function (hs_azh26DnIs) {
            var hs_wild126DnLE = hs_b26DnIq;
            if (hs_b26DnIq.notEvaluated) {
                hs_wild126DnLE = hs_b26DnIq.hscall();
            }
            switch (hs_wild126DnLE.tag) {
            case 1:
                var hs_sat26DnLI = new $hs.Thunk();
                hs_sat26DnLI.evaluateOnce = function () {
                    var hs_sat26DnLG = new $hs.Data(1);
                    hs_sat26DnLG.data = [0];
                    var hs_sat26DnLH = new $hs.Data(1);
                    hs_sat26DnLH.data = [hs_azh26DnIs];
                    return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26DnLH, hs_sat26DnLG);
                };
                return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuIOMode25sdq8, hs_sat26DnLI);
            case 2:
                var hs_sat26DnLL = new $hs.Thunk();
                hs_sat26DnLL.evaluateOnce = function () {
                    var hs_sat26DnLJ = new $hs.Data(1);
                    hs_sat26DnLJ.data = [1];
                    var hs_sat26DnLK = new $hs.Data(1);
                    hs_sat26DnLK.data = [hs_azh26DnIs];
                    return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26DnLK, hs_sat26DnLJ);
                };
                return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuIOMode25sdq8, hs_sat26DnLL);
            case 3:
                var hs_sat26DnLO = new $hs.Thunk();
                hs_sat26DnLO.evaluateOnce = function () {
                    var hs_sat26DnLM = new $hs.Data(1);
                    hs_sat26DnLM.data = [2];
                    var hs_sat26DnLN = new $hs.Data(1);
                    hs_sat26DnLN.data = [hs_azh26DnIs];
                    return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26DnLN, hs_sat26DnLM);
                };
                return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuIOMode25sdq8, hs_sat26DnLO);
            case 4:
                var hs_sat26DnLR = new $hs.Thunk();
                hs_sat26DnLR.evaluateOnce = function () {
                    var hs_sat26DnLP = new $hs.Data(1);
                    hs_sat26DnLP.data = [3];
                    var hs_sat26DnLQ = new $hs.Data(1);
                    hs_sat26DnLQ.data = [hs_azh26DnIs];
                    return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26DnLQ, hs_sat26DnLP);
                };
                return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuIOMode25sdq8, hs_sat26DnLR);
            }
        };
        var hs_wild126DnLS = hs_a26DnIG;
        if (hs_a26DnIG.notEvaluated) {
            hs_wild126DnLS = hs_a26DnIG.hscall();
        }
        switch (hs_wild126DnLS.tag) {
        case 1:
            return hs_zdj26DnIF.hscall(0);
        case 2:
            return hs_zdj26DnIF.hscall(1);
        case 3:
            return hs_zdj26DnIF.hscall(2);
        case 4:
            return hs_zdj26DnIF.hscall(3);
        }
    };
    hs_zdczlze25uZct.evaluate = function (hs_a26DnIM, hs_b26DnIO) {
        var hs_wild26DnLU = hs_a26DnIM;
        if (hs_a26DnIM.notEvaluated) {
            hs_wild26DnLU = hs_a26DnIM.hscall();
        }
        switch (hs_wild26DnLU.tag) {
        case 1:
            var hs_wild126DnLT = hs_b26DnIO;
            if (hs_b26DnIO.notEvaluated) {
                hs_wild126DnLT = hs_b26DnIO.hscall();
            }
            switch (hs_wild126DnLT.tag) {
            case 1:
                return 0 <= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 0 <= 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 0 <= 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 0 <= 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 2:
            var hs_wild126DnLV = hs_b26DnIO;
            if (hs_b26DnIO.notEvaluated) {
                hs_wild126DnLV = hs_b26DnIO.hscall();
            }
            switch (hs_wild126DnLV.tag) {
            case 1:
                return 1 <= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 1 <= 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 1 <= 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 1 <= 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 3:
            var hs_wild126DnLW = hs_b26DnIO;
            if (hs_b26DnIO.notEvaluated) {
                hs_wild126DnLW = hs_b26DnIO.hscall();
            }
            switch (hs_wild126DnLW.tag) {
            case 1:
                return 2 <= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 2 <= 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 2 <= 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 2 <= 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 4:
            var hs_wild126DnLX = hs_b26DnIO;
            if (hs_b26DnIO.notEvaluated) {
                hs_wild126DnLX = hs_b26DnIO.hscall();
            }
            switch (hs_wild126DnLX.tag) {
            case 1:
                return 3 <= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 3 <= 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 3 <= 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 3 <= 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        }
    };
    hs_zdczg25uZcE.evaluate = function (hs_a26DnIX, hs_b26DnIZ) {
        var hs_wild26DnLZ = hs_a26DnIX;
        if (hs_a26DnIX.notEvaluated) {
            hs_wild26DnLZ = hs_a26DnIX.hscall();
        }
        switch (hs_wild26DnLZ.tag) {
        case 1:
            var hs_wild126DnLY = hs_b26DnIZ;
            if (hs_b26DnIZ.notEvaluated) {
                hs_wild126DnLY = hs_b26DnIZ.hscall();
            }
            switch (hs_wild126DnLY.tag) {
            case 1:
                return 0 > 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 0 > 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 0 > 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 0 > 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 2:
            var hs_wild126DnM0 = hs_b26DnIZ;
            if (hs_b26DnIZ.notEvaluated) {
                hs_wild126DnM0 = hs_b26DnIZ.hscall();
            }
            switch (hs_wild126DnM0.tag) {
            case 1:
                return 1 > 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 1 > 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 1 > 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 1 > 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 3:
            var hs_wild126DnM1 = hs_b26DnIZ;
            if (hs_b26DnIZ.notEvaluated) {
                hs_wild126DnM1 = hs_b26DnIZ.hscall();
            }
            switch (hs_wild126DnM1.tag) {
            case 1:
                return 2 > 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 2 > 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 2 > 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 2 > 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 4:
            var hs_wild126DnM2 = hs_b26DnIZ;
            if (hs_b26DnIZ.notEvaluated) {
                hs_wild126DnM2 = hs_b26DnIZ.hscall();
            }
            switch (hs_wild126DnM2.tag) {
            case 1:
                return 3 > 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 3 > 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 3 > 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 3 > 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        }
    };
    hs_zdczgze25uZcP.evaluate = function (hs_a26DnJ8, hs_b26DnJa) {
        var hs_wild26DnM4 = hs_a26DnJ8;
        if (hs_a26DnJ8.notEvaluated) {
            hs_wild26DnM4 = hs_a26DnJ8.hscall();
        }
        switch (hs_wild26DnM4.tag) {
        case 1:
            var hs_wild126DnM3 = hs_b26DnJa;
            if (hs_b26DnJa.notEvaluated) {
                hs_wild126DnM3 = hs_b26DnJa.hscall();
            }
            switch (hs_wild126DnM3.tag) {
            case 1:
                return 0 >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 0 >= 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 0 >= 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 0 >= 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 2:
            var hs_wild126DnM5 = hs_b26DnJa;
            if (hs_b26DnJa.notEvaluated) {
                hs_wild126DnM5 = hs_b26DnJa.hscall();
            }
            switch (hs_wild126DnM5.tag) {
            case 1:
                return 1 >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 1 >= 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 1 >= 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 1 >= 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 3:
            var hs_wild126DnM6 = hs_b26DnJa;
            if (hs_b26DnJa.notEvaluated) {
                hs_wild126DnM6 = hs_b26DnJa.hscall();
            }
            switch (hs_wild126DnM6.tag) {
            case 1:
                return 2 >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 2 >= 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 2 >= 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 2 >= 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 4:
            var hs_wild126DnM7 = hs_b26DnJa;
            if (hs_b26DnJa.notEvaluated) {
                hs_wild126DnM7 = hs_b26DnJa.hscall();
            }
            switch (hs_wild126DnM7.tag) {
            case 1:
                return 3 >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 3 >= 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 3 >= 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 3 >= 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        }
    };
    hs_zdczl25uZd0.evaluate = function (hs_a26DnJj, hs_b26DnJl) {
        var hs_wild26DnM9 = hs_a26DnJj;
        if (hs_a26DnJj.notEvaluated) {
            hs_wild26DnM9 = hs_a26DnJj.hscall();
        }
        switch (hs_wild26DnM9.tag) {
        case 1:
            var hs_wild126DnM8 = hs_b26DnJl;
            if (hs_b26DnJl.notEvaluated) {
                hs_wild126DnM8 = hs_b26DnJl.hscall();
            }
            switch (hs_wild126DnM8.tag) {
            case 1:
                return 0 < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 0 < 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 0 < 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 0 < 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 2:
            var hs_wild126DnMa = hs_b26DnJl;
            if (hs_b26DnJl.notEvaluated) {
                hs_wild126DnMa = hs_b26DnJl.hscall();
            }
            switch (hs_wild126DnMa.tag) {
            case 1:
                return 1 < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 1 < 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 1 < 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 1 < 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 3:
            var hs_wild126DnMb = hs_b26DnJl;
            if (hs_b26DnJl.notEvaluated) {
                hs_wild126DnMb = hs_b26DnJl.hscall();
            }
            switch (hs_wild126DnMb.tag) {
            case 1:
                return 2 < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 2 < 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 2 < 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 2 < 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 4:
            var hs_wild126DnMc = hs_b26DnJl;
            if (hs_b26DnJl.notEvaluated) {
                hs_wild126DnMc = hs_b26DnJl.hscall();
            }
            switch (hs_wild126DnMc.tag) {
            case 1:
                return 3 < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 3 < 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 3 < 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 3 < 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        }
    };
    hs_zdccompare25uZdb.evaluate = function (hs_a26DnJI, hs_b26DnJw) {
        var hs_zdj26DnJH = new $hs.Func(1);
        hs_zdj26DnJH.evaluate = function (hs_azh26DnJy) {
            var hs_wild26DnMf = hs_b26DnJw;
            if (hs_b26DnJw.notEvaluated) {
                hs_wild26DnMf = hs_b26DnJw.hscall();
            }
            switch (hs_wild26DnMf.tag) {
            case 1:
                var hs_wild126DnMe = hs_azh26DnJy < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild126DnMe.tag) {
                case 1:
                    var hs_wild226DnMd = hs_azh26DnJy == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226DnMd.tag) {
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
            case 2:
                var hs_wild126DnMh = hs_azh26DnJy < 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild126DnMh.tag) {
                case 1:
                    var hs_wild226DnMg = hs_azh26DnJy == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226DnMg.tag) {
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
            case 3:
                var hs_wild126DnMj = hs_azh26DnJy < 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild126DnMj.tag) {
                case 1:
                    var hs_wild226DnMi = hs_azh26DnJy == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226DnMi.tag) {
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
            case 4:
                var hs_wild126DnMl = hs_azh26DnJy < 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild126DnMl.tag) {
                case 1:
                    var hs_wild226DnMk = hs_azh26DnJy == 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226DnMk.tag) {
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
            }
        };
        var hs_wild26DnMm = hs_a26DnJI;
        if (hs_a26DnJI.notEvaluated) {
            hs_wild26DnMm = hs_a26DnJI.hscall();
        }
        switch (hs_wild26DnMm.tag) {
        case 1:
            return hs_zdj26DnJH.hscall(0);
        case 2:
            return hs_zdj26DnJH.hscall(1);
        case 3:
            return hs_zdj26DnJH.hscall(2);
        case 4:
            return hs_zdj26DnJH.hscall(3);
        }
    };
    hs_zdczeze25uZdv.evaluate = function (hs_a26DnJO, hs_b26DnJQ) {
        var hs_wild26DnMo = hs_a26DnJO;
        if (hs_a26DnJO.notEvaluated) {
            hs_wild26DnMo = hs_a26DnJO.hscall();
        }
        switch (hs_wild26DnMo.tag) {
        case 1:
            var hs_wild126DnMn = hs_b26DnJQ;
            if (hs_b26DnJQ.notEvaluated) {
                hs_wild126DnMn = hs_b26DnJQ.hscall();
            }
            switch (hs_wild126DnMn.tag) {
            case 1:
                return 0 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 0 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 0 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 0 == 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 2:
            var hs_wild126DnMp = hs_b26DnJQ;
            if (hs_b26DnJQ.notEvaluated) {
                hs_wild126DnMp = hs_b26DnJQ.hscall();
            }
            switch (hs_wild126DnMp.tag) {
            case 1:
                return 1 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 1 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 1 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 1 == 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 3:
            var hs_wild126DnMq = hs_b26DnJQ;
            if (hs_b26DnJQ.notEvaluated) {
                hs_wild126DnMq = hs_b26DnJQ.hscall();
            }
            switch (hs_wild126DnMq.tag) {
            case 1:
                return 2 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 2 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 2 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 2 == 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 4:
            var hs_wild126DnMr = hs_b26DnJQ;
            if (hs_b26DnJQ.notEvaluated) {
                hs_wild126DnMr = hs_b26DnJQ.hscall();
            }
            switch (hs_wild126DnMr.tag) {
            case 1:
                return 3 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 3 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 3 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 3 == 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        }
    };
    this.hs_zdfEqIOMode.data = [hs_zdczeze25uZdv, hs_zdczsze25uZdG];
    hs_zdczsze25uZdG.evaluate = function (hs_a26DnJZ, hs_b26DnK0) {
        var hs_sat26DnMs = new $hs.Thunk();
        hs_sat26DnMs.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziIOMode.hs_zdfEqIOMode, hs_a26DnJZ, hs_b26DnK0);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DnMs);
    };
    this.hs_zdfOrdIOMode.data = [$hs.modules.GHCziIOziIOMode.hs_zdfEqIOMode, hs_zdccompare25uZdb, hs_zdczl25uZd0, hs_zdczgze25uZcP, hs_zdczg25uZcE, hs_zdczlze25uZct, hs_zdcmax25uZdP, hs_zdcmin25uZdN];
    hs_zdcmin25uZdN.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziIOziIOMode.hs_zdfOrdIOMode);
    };
    hs_zdcmax25uZdP.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziIOziIOMode.hs_zdfOrdIOMode);
    };
    this.hs_zdfIxIOMode.data = [$hs.modules.GHCziIOziIOMode.hs_zdfOrdIOMode, hs_zdcrange25uZc2, hs_zdcindex25uZdV, hs_zdcunsafeIndex25uZbI, hs_zdcinRange25uZbi, hs_zdcrangeSizze25uZdT, hs_zdcunsafeRangeSizze25uZdR];
    hs_zdcunsafeRangeSizze25uZdR.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmunsafeRangeSizze.hscall($hs.modules.GHCziIOziIOMode.hs_zdfIxIOMode);
    };
    hs_zdcrangeSizze25uZdT.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmrangeSizze.hscall($hs.modules.GHCziIOziIOMode.hs_zdfIxIOMode);
    };
    hs_zdcindex25uZdV.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmindex.hscall($hs.modules.GHCziIOziIOMode.hs_zdfIxIOMode);
    };
    this.hs_ReadMode.data = [];
    this.hs_WriteMode.data = [];
    this.hs_AppendMode.data = [];
    this.hs_ReadWriteMode.data = [];
};
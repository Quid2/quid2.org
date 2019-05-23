
$hs.modules.GHCziIOziIOMode = new $hs.Module();
$hs.modules.GHCziIOziIOMode.dependencies = ["GHC.Types", "GHC.CString", "GHC.Base", "GHC.Enum", "GHC.Num", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.Arr", "GHC.Read", "Text.ParserCombinators.ReadPrec"];
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
    var hs_zdtag2conzuIOMode25s7oK = new $hs.Func(1);
    var hs_zdmaxtagzuIOMode25s7oJ = new $hs.Data(1);
    var hs_zdcshowsPrec25uKur = new $hs.Func(2);
    var hs_sat26D959 = new $hs.Thunk();
    var hs_zdcshowList25uKuB = new $hs.Thunk();
    var hs_zdcshow25uKuC = new $hs.Thunk();
    var hs_sat26D95q = new $hs.Thunk();
    var hs_zdcreadPrec25uKuF = new $hs.Thunk();
    var hs_zdcreadListPrec25uKuX = new $hs.Thunk();
    var hs_zdcreadList25uKuY = new $hs.Thunk();
    var hs_zdcreadsPrec25uKuZ = new $hs.Thunk();
    var hs_zdcenumFromThen25uKv0 = new $hs.Func(2);
    var hs_zdcenumFrom25uKvm = new $hs.Func(1);
    var hs_zdcfromEnum25uKvy = new $hs.Func(1);
    var hs_zdctoEnum25uKvC = new $hs.Func(1);
    var hs_zdcpred25uKvW = new $hs.Func(1);
    var hs_zdcsucc25uKwd = new $hs.Func(1);
    var hs_zdcenumFromThenTo25uKwt = new $hs.Thunk();
    var hs_zdcenumFromTo25uKwu = new $hs.Thunk();
    var hs_zdcinRange25uKwv = new $hs.Func(2);
    var hs_zdcunsafeIndex25uKwU = new $hs.Func(2);
    var hs_zdcrange25uKxd = new $hs.Func(1);
    var hs_zdczlze25uKxD = new $hs.Func(2);
    var hs_zdczg25uKxN = new $hs.Func(2);
    var hs_zdczgze25uKxX = new $hs.Func(2);
    var hs_zdczl25uKy7 = new $hs.Func(2);
    var hs_zdccompare25uKyh = new $hs.Func(2);
    var hs_zdczeze25uKyr = new $hs.Func(2);
    var hs_zdczsze25uKyB = new $hs.Func(2);
    var hs_zdcmin25uKyH = new $hs.Thunk();
    var hs_zdcmax25uKyI = new $hs.Thunk();
    var hs_zdcunsafeRangeSizze25uKyJ = new $hs.Thunk();
    var hs_zdcrangeSizze25uKyK = new $hs.Thunk();
    var hs_zdcindex25uKyL = new $hs.Thunk();
    hs_zdtag2conzuIOMode25s7oK.evaluate = function (hs_ds26D90D) {
        var hs_wild26D952 = hs_ds26D90D;
        if (hs_ds26D90D.notEvaluated) {
            hs_wild26D952 = hs_ds26D90D.hscall();
        }
        var hs_a26D90G = hs_wild26D952.data[0];
        throw "primitive operation tagToEnum#. Not implemeted yet.";
    };
    hs_zdmaxtagzuIOMode25s7oJ.data = [3];
    hs_zdcshowsPrec25uKur.evaluate = function (hs_ds26D90Q, hs_ds126D90K) {
        var hs_wild26D954 = hs_ds126D90K;
        if (hs_ds126D90K.notEvaluated) {
            hs_wild26D954 = hs_ds126D90K.hscall();
        }
        switch (hs_wild26D954.tag) {
        case 1:
            var hs_sat26D957 = new $hs.Thunk();
            hs_sat26D957.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ReadMode\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D957);
        case 2:
            var hs_sat26D953 = new $hs.Thunk();
            hs_sat26D953.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("WriteMode\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D953);
        case 3:
            var hs_sat26D955 = new $hs.Thunk();
            hs_sat26D955.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("AppendMode\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D955);
        case 4:
            var hs_sat26D956 = new $hs.Thunk();
            hs_sat26D956.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ReadWriteMode\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D956);
        }
    };
    hs_sat26D959.evaluateOnce = function () {
        var hs_sat26D958 = new $hs.Data(1);
        hs_sat26D958.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziIOziIOMode.hs_zdfShowIOMode, hs_sat26D958);
    };
    this.hs_zdfShowIOMode.data = [hs_zdcshowsPrec25uKur, hs_zdcshow25uKuC, hs_zdcshowList25uKuB];
    hs_zdcshowList25uKuB.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26D959);
    };
    hs_zdcshow25uKuC.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziIOziIOMode.hs_zdfShowIOMode);
    };
    hs_sat26D95q.evaluateOnce = function () {
        var hs_sat26D95b = new $hs.Thunk();
        hs_sat26D95b.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziIOziIOMode.hs_ReadWriteMode);
        };
        var hs_sat26D95c = new $hs.Thunk();
        hs_sat26D95c.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ReadWriteMode\x00");
        };
        var hs_sat26D95d = new $hs.Data(1);
        hs_sat26D95d.data = [hs_sat26D95c, hs_sat26D95b];
        var hs_sat26D95e = new $hs.Data(2);
        hs_sat26D95e.data = [hs_sat26D95d, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26D95f = new $hs.Thunk();
        hs_sat26D95f.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziIOziIOMode.hs_AppendMode);
        };
        var hs_sat26D95g = new $hs.Thunk();
        hs_sat26D95g.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("AppendMode\x00");
        };
        var hs_sat26D95h = new $hs.Data(1);
        hs_sat26D95h.data = [hs_sat26D95g, hs_sat26D95f];
        var hs_sat26D95i = new $hs.Data(2);
        hs_sat26D95i.data = [hs_sat26D95h, hs_sat26D95e];
        var hs_sat26D95j = new $hs.Thunk();
        hs_sat26D95j.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziIOziIOMode.hs_WriteMode);
        };
        var hs_sat26D95k = new $hs.Thunk();
        hs_sat26D95k.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("WriteMode\x00");
        };
        var hs_sat26D95l = new $hs.Data(1);
        hs_sat26D95l.data = [hs_sat26D95k, hs_sat26D95j];
        var hs_sat26D95m = new $hs.Data(2);
        hs_sat26D95m.data = [hs_sat26D95l, hs_sat26D95i];
        var hs_sat26D95n = new $hs.Thunk();
        hs_sat26D95n.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziIOziIOMode.hs_ReadMode);
        };
        var hs_sat26D95o = new $hs.Thunk();
        hs_sat26D95o.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ReadMode\x00");
        };
        var hs_sat26D95p = new $hs.Data(1);
        hs_sat26D95p.data = [hs_sat26D95o, hs_sat26D95n];
        var hs_sat26D95a = new $hs.Data(2);
        hs_sat26D95a.data = [hs_sat26D95p, hs_sat26D95m];
        return $hs.modules.GHCziRead.hs_choose.hscall(hs_sat26D95a);
    };
    hs_zdcreadPrec25uKuF.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26D95q);
    };
    this.hs_zdfReadIOMode.data = [hs_zdcreadsPrec25uKuZ, hs_zdcreadList25uKuY, hs_zdcreadPrec25uKuF, hs_zdcreadListPrec25uKuX];
    hs_zdcreadListPrec25uKuX.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall($hs.modules.GHCziIOziIOMode.hs_zdfReadIOMode);
    };
    hs_zdcreadList25uKuY.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListDefault.hscall($hs.modules.GHCziIOziIOMode.hs_zdfReadIOMode);
    };
    hs_zdcreadsPrec25uKuZ.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall($hs.modules.GHCziIOziIOMode.hs_zdfReadIOMode);
    };
    hs_zdcenumFromThen25uKv0.evaluate = function (hs_a26D91A, hs_b26D91x) {
        var hs_zdj26D91z = new $hs.Func(1);
        hs_zdj26D91z.evaluate = function (hs_azh26D91n) {
            var hs_zdj126D91w = new $hs.Func(1);
            hs_zdj126D91w.evaluate = function (hs_bzh26D91p) {
                var hs_sat26D95t = new $hs.Thunk();
                hs_sat26D95t.evaluateOnce = function () {
                    var hs_sat26D95v = new $hs.Thunk();
                    hs_sat26D95v.evaluateOnce = function () {
                        var hs_sat26D95x = new $hs.Data(1);
                        hs_sat26D95x.data = [hs_bzh26D91p];
                        var hs_sat26D95y = new $hs.Data(1);
                        hs_sat26D95y.data = [hs_azh26D91n];
                        var hs_wild26D95z = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D95y, hs_sat26D95x);
                        switch (hs_wild26D95z.tag) {
                        case 1:
                            if (hs_zdmaxtagzuIOMode25s7oJ.notEvaluated) {
                                return hs_zdmaxtagzuIOMode25s7oJ.hscall();
                            } else {
                                return hs_zdmaxtagzuIOMode25s7oJ;
                            }
                        case 2:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        }
                    };
                    var hs_sat26D95w = new $hs.Data(1);
                    hs_sat26D95w.data = [hs_bzh26D91p];
                    var hs_sat26D95u = new $hs.Data(1);
                    hs_sat26D95u.data = [hs_azh26D91n];
                    return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26D95u, hs_sat26D95w, hs_sat26D95v);
                };
                return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuIOMode25s7oK, hs_sat26D95t);
            };
            var hs_wild26D95s = hs_b26D91x;
            if (hs_b26D91x.notEvaluated) {
                hs_wild26D95s = hs_b26D91x.hscall();
            }
            switch (hs_wild26D95s.tag) {
            case 1:
                return hs_zdj126D91w.hscall(0);
            case 2:
                return hs_zdj126D91w.hscall(1);
            case 3:
                return hs_zdj126D91w.hscall(2);
            case 4:
                return hs_zdj126D91w.hscall(3);
            }
        };
        var hs_wild26D95r = hs_a26D91A;
        if (hs_a26D91A.notEvaluated) {
            hs_wild26D95r = hs_a26D91A.hscall();
        }
        switch (hs_wild26D95r.tag) {
        case 1:
            return hs_zdj26D91z.hscall(0);
        case 2:
            return hs_zdj26D91z.hscall(1);
        case 3:
            return hs_zdj26D91z.hscall(2);
        case 4:
            return hs_zdj26D91z.hscall(3);
        }
    };
    hs_zdcenumFrom25uKvm.evaluate = function (hs_a26D91E) {
        var hs_wild26D95B = hs_a26D91E;
        if (hs_a26D91E.notEvaluated) {
            hs_wild26D95B = hs_a26D91E.hscall();
        }
        switch (hs_wild26D95B.tag) {
        case 1:
            var hs_sat26D95H = new $hs.Thunk();
            hs_sat26D95H.evaluateOnce = function () {
                var hs_sat26D95I = new $hs.Data(1);
                hs_sat26D95I.data = [0];
                return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26D95I, hs_zdmaxtagzuIOMode25s7oJ);
            };
            return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuIOMode25s7oK, hs_sat26D95H);
        case 2:
            var hs_sat26D95A = new $hs.Thunk();
            hs_sat26D95A.evaluateOnce = function () {
                var hs_sat26D95C = new $hs.Data(1);
                hs_sat26D95C.data = [1];
                return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26D95C, hs_zdmaxtagzuIOMode25s7oJ);
            };
            return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuIOMode25s7oK, hs_sat26D95A);
        case 3:
            var hs_sat26D95D = new $hs.Thunk();
            hs_sat26D95D.evaluateOnce = function () {
                var hs_sat26D95E = new $hs.Data(1);
                hs_sat26D95E.data = [2];
                return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26D95E, hs_zdmaxtagzuIOMode25s7oJ);
            };
            return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuIOMode25s7oK, hs_sat26D95D);
        case 4:
            var hs_sat26D95F = new $hs.Thunk();
            hs_sat26D95F.evaluateOnce = function () {
                var hs_sat26D95G = new $hs.Data(1);
                hs_sat26D95G.data = [3];
                return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26D95G, hs_zdmaxtagzuIOMode25s7oJ);
            };
            return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuIOMode25s7oK, hs_sat26D95F);
        }
    };
    hs_zdcfromEnum25uKvy.evaluate = function (hs_a26D91Q) {
        var hs_wild26D95J = hs_a26D91Q;
        if (hs_a26D91Q.notEvaluated) {
            hs_wild26D95J = hs_a26D91Q.hscall();
        }
        switch (hs_wild26D95J.tag) {
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
    hs_zdctoEnum25uKvC.evaluate = function (hs_a26D91U) {
        var hs_sat26D95L = new $hs.Thunk();
        hs_sat26D95L.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a26D91U, hs_zdmaxtagzuIOMode25s7oJ);
        };
        var hs_sat26D95M = new $hs.Thunk();
        hs_sat26D95M.evaluateOnce = function () {
            var hs_sat26D95Y = new $hs.Data(1);
            hs_sat26D95Y.data = [0];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a26D91U, hs_sat26D95Y);
        };
        var hs_wild26D95N = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D95M, hs_sat26D95L);
        switch (hs_wild26D95N.tag) {
        case 1:
            var hs_sat26D95O = new $hs.Thunk();
            hs_sat26D95O.evaluateOnce = function () {
                var hs_sat26D95S = new $hs.Thunk();
                hs_sat26D95S.evaluateOnce = function () {
                    var hs_sat26D95U = new $hs.Thunk();
                    hs_sat26D95U.evaluateOnce = function () {
                        var hs_sat26D95W = new $hs.Data(1);
                        hs_sat26D95W.data = [")"];
                        var hs_sat26D95X = new $hs.Data(2);
                        hs_sat26D95X.data = [hs_sat26D95W, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_sat26D95V = new $hs.Data(1);
                        hs_sat26D95V.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26D95V, hs_zdmaxtagzuIOMode25s7oJ, hs_sat26D95X);
                    };
                    var hs_sat26D95T = new $hs.Thunk();
                    hs_sat26D95T.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(") is outside of enumeration's range (0,\x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D95T, hs_sat26D95U);
                };
                var hs_sat26D95R = new $hs.Data(1);
                hs_sat26D95R.data = [0];
                return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26D95R, hs_a26D91U, hs_sat26D95S);
            };
            var hs_sat26D95P = new $hs.Thunk();
            hs_sat26D95P.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("toEnum{IOMode}: tag (\x00");
            };
            var hs_sat26D95Q = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D95P, hs_sat26D95O);
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D95Q);
        case 2:
            var hs_wild126D95K = hs_a26D91U;
            if (hs_a26D91U.notEvaluated) {
                hs_wild126D95K = hs_a26D91U.hscall();
            }
            var hs_a126D92b = hs_wild126D95K.data[0];
            throw "primitive operation tagToEnum#. Not implemeted yet.";
        }
    };
    hs_zdcpred25uKvW.evaluate = function (hs_a26D92r) {
        var hs_zdj26D92q = new $hs.Func(1);
        hs_zdj26D92q.evaluate = function (hs_azh26D92h) {
            var hs_sat26D960 = new $hs.Data(1);
            hs_sat26D960.data = [hs_azh26D92h];
            var hs_sat26D961 = new $hs.Data(1);
            hs_sat26D961.data = [0];
            var hs_wild26D962 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26D961, hs_sat26D960);
            switch (hs_wild26D962.tag) {
            case 1:
                var hs_sat26D964 = new $hs.Data(1);
                hs_sat26D964.data = [-1];
                var hs_sat26D965 = new $hs.Data(1);
                hs_sat26D965.data = [hs_azh26D92h];
                var hs_wild126D966 = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D965, hs_sat26D964);
                var hs_a126D92o = hs_wild126D966.data[0];
                throw "primitive operation tagToEnum#. Not implemeted yet.";
            case 2:
                var hs_sat26D963 = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("pred{IOMode}: tried to take `pred' of first tag in enumeration\x00");
                return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D963);
            }
        };
        var hs_wild26D95Z = hs_a26D92r;
        if (hs_a26D92r.notEvaluated) {
            hs_wild26D95Z = hs_a26D92r.hscall();
        }
        switch (hs_wild26D95Z.tag) {
        case 1:
            return hs_zdj26D92q.hscall(0);
        case 2:
            return hs_zdj26D92q.hscall(1);
        case 3:
            return hs_zdj26D92q.hscall(2);
        case 4:
            return hs_zdj26D92q.hscall(3);
        }
    };
    hs_zdcsucc25uKwd.evaluate = function (hs_a26D92H) {
        var hs_zdj26D92G = new $hs.Func(1);
        hs_zdj26D92G.evaluate = function (hs_azh26D92x) {
            var hs_sat26D968 = new $hs.Data(1);
            hs_sat26D968.data = [hs_azh26D92x];
            var hs_wild26D969 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_zdmaxtagzuIOMode25s7oJ, hs_sat26D968);
            switch (hs_wild26D969.tag) {
            case 1:
                var hs_sat26D96b = new $hs.Data(1);
                hs_sat26D96b.data = [1];
                var hs_sat26D96c = new $hs.Data(1);
                hs_sat26D96c.data = [hs_azh26D92x];
                var hs_wild126D96d = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D96c, hs_sat26D96b);
                var hs_a126D92E = hs_wild126D96d.data[0];
                throw "primitive operation tagToEnum#. Not implemeted yet.";
            case 2:
                var hs_sat26D96a = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("succ{IOMode}: tried to take `succ' of last tag in enumeration\x00");
                return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D96a);
            }
        };
        var hs_wild26D967 = hs_a26D92H;
        if (hs_a26D92H.notEvaluated) {
            hs_wild26D967 = hs_a26D92H.hscall();
        }
        switch (hs_wild26D967.tag) {
        case 1:
            return hs_zdj26D92G.hscall(0);
        case 2:
            return hs_zdj26D92G.hscall(1);
        case 3:
            return hs_zdj26D92G.hscall(2);
        case 4:
            return hs_zdj26D92G.hscall(3);
        }
    };
    this.hs_zdfEnumIOMode.data = [hs_zdcsucc25uKwd, hs_zdcpred25uKvW, hs_zdctoEnum25uKvC, hs_zdcfromEnum25uKvy, hs_zdcenumFrom25uKvm, hs_zdcenumFromThen25uKv0, hs_zdcenumFromTo25uKwu, hs_zdcenumFromThenTo25uKwt];
    hs_zdcenumFromThenTo25uKwt.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromThenTo.hscall($hs.modules.GHCziIOziIOMode.hs_zdfEnumIOMode);
    };
    hs_zdcenumFromTo25uKwu.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromTo.hscall($hs.modules.GHCziIOziIOMode.hs_zdfEnumIOMode);
    };
    hs_zdcinRange25uKwv.evaluate = function (hs_ds26D92O, hs_c26D92W) {
        var hs_wild26D96f = hs_ds26D92O;
        if (hs_ds26D92O.notEvaluated) {
            hs_wild26D96f = hs_ds26D92O.hscall();
        }
        var hs_a26D938 = hs_wild26D96f.data[0];
        var hs_b26D935 = hs_wild26D96f.data[1];
        var hs_zdj26D937 = new $hs.Func(1);
        hs_zdj26D937.evaluate = function (hs_azh26D92Y) {
            var hs_zdj126D934 = new $hs.Func(1);
            hs_zdj126D934.evaluate = function (hs_bzh26D930) {
                var hs_wild126D96h = hs_c26D92W;
                if (hs_c26D92W.notEvaluated) {
                    hs_wild126D96h = hs_c26D92W.hscall();
                }
                switch (hs_wild126D96h.tag) {
                case 1:
                    var hs_wild226D96l = 0 >= hs_azh26D92Y ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226D96l.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return 0 <= hs_bzh26D930 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    }
                case 2:
                    var hs_wild226D96i = 1 >= hs_azh26D92Y ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226D96i.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return 1 <= hs_bzh26D930 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    }
                case 3:
                    var hs_wild226D96j = 2 >= hs_azh26D92Y ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226D96j.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return 2 <= hs_bzh26D930 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    }
                case 4:
                    var hs_wild226D96k = 3 >= hs_azh26D92Y ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226D96k.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return 3 <= hs_bzh26D930 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    }
                }
            };
            var hs_wild126D96g = hs_b26D935;
            if (hs_b26D935.notEvaluated) {
                hs_wild126D96g = hs_b26D935.hscall();
            }
            switch (hs_wild126D96g.tag) {
            case 1:
                return hs_zdj126D934.hscall(0);
            case 2:
                return hs_zdj126D934.hscall(1);
            case 3:
                return hs_zdj126D934.hscall(2);
            case 4:
                return hs_zdj126D934.hscall(3);
            }
        };
        var hs_wild126D96e = hs_a26D938;
        if (hs_a26D938.notEvaluated) {
            hs_wild126D96e = hs_a26D938.hscall();
        }
        switch (hs_wild126D96e.tag) {
        case 1:
            return hs_zdj26D937.hscall(0);
        case 2:
            return hs_zdj26D937.hscall(1);
        case 3:
            return hs_zdj26D937.hscall(2);
        case 4:
            return hs_zdj26D937.hscall(3);
        }
    };
    hs_zdcunsafeIndex25uKwU.evaluate = function (hs_c26D93d, hs_d26D93j) {
        var hs_wild26D96n = hs_c26D93d;
        if (hs_c26D93d.notEvaluated) {
            hs_wild26D96n = hs_c26D93d.hscall();
        }
        var hs_a26D93r = hs_wild26D96n.data[0];
        var hs_zdj26D93q = new $hs.Func(1);
        hs_zdj26D93q.evaluate = function (hs_azh26D93l) {
            var hs_wild126D96p = hs_d26D93j;
            if (hs_d26D93j.notEvaluated) {
                hs_wild126D96p = hs_d26D93j.hscall();
            }
            switch (hs_wild126D96p.tag) {
            case 1:
                var hs_sat26D96t = ($hs.Int.addCarry(0, ~hs_azh26D93l, 1))[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26D96t];
                return $res;
            case 2:
                var hs_sat26D96q = ($hs.Int.addCarry(1, ~hs_azh26D93l, 1))[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26D96q];
                return $res;
            case 3:
                var hs_sat26D96r = ($hs.Int.addCarry(2, ~hs_azh26D93l, 1))[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26D96r];
                return $res;
            case 4:
                var hs_sat26D96s = ($hs.Int.addCarry(3, ~hs_azh26D93l, 1))[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26D96s];
                return $res;
            }
        };
        var hs_wild126D96m = hs_a26D93r;
        if (hs_a26D93r.notEvaluated) {
            hs_wild126D96m = hs_a26D93r.hscall();
        }
        switch (hs_wild126D96m.tag) {
        case 1:
            return hs_zdj26D93q.hscall(0);
        case 2:
            return hs_zdj26D93q.hscall(1);
        case 3:
            return hs_zdj26D93q.hscall(2);
        case 4:
            return hs_zdj26D93q.hscall(3);
        }
    };
    hs_zdcrange25uKxd.evaluate = function (hs_ds26D93v) {
        var hs_wild26D96v = hs_ds26D93v;
        if (hs_ds26D93v.notEvaluated) {
            hs_wild26D96v = hs_ds26D93v.hscall();
        }
        var hs_a26D93R = hs_wild26D96v.data[0];
        var hs_b26D93B = hs_wild26D96v.data[1];
        var hs_zdj26D93Q = new $hs.Func(1);
        hs_zdj26D93Q.evaluate = function (hs_azh26D93D) {
            var hs_wild126D96x = hs_b26D93B;
            if (hs_b26D93B.notEvaluated) {
                hs_wild126D96x = hs_b26D93B.hscall();
            }
            switch (hs_wild126D96x.tag) {
            case 1:
                var hs_sat26D96G = new $hs.Thunk();
                hs_sat26D96G.evaluateOnce = function () {
                    var hs_sat26D96I = new $hs.Data(1);
                    hs_sat26D96I.data = [0];
                    var hs_sat26D96H = new $hs.Data(1);
                    hs_sat26D96H.data = [hs_azh26D93D];
                    return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26D96H, hs_sat26D96I);
                };
                return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuIOMode25s7oK, hs_sat26D96G);
            case 2:
                var hs_sat26D96w = new $hs.Thunk();
                hs_sat26D96w.evaluateOnce = function () {
                    var hs_sat26D96z = new $hs.Data(1);
                    hs_sat26D96z.data = [1];
                    var hs_sat26D96y = new $hs.Data(1);
                    hs_sat26D96y.data = [hs_azh26D93D];
                    return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26D96y, hs_sat26D96z);
                };
                return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuIOMode25s7oK, hs_sat26D96w);
            case 3:
                var hs_sat26D96A = new $hs.Thunk();
                hs_sat26D96A.evaluateOnce = function () {
                    var hs_sat26D96C = new $hs.Data(1);
                    hs_sat26D96C.data = [2];
                    var hs_sat26D96B = new $hs.Data(1);
                    hs_sat26D96B.data = [hs_azh26D93D];
                    return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26D96B, hs_sat26D96C);
                };
                return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuIOMode25s7oK, hs_sat26D96A);
            case 4:
                var hs_sat26D96D = new $hs.Thunk();
                hs_sat26D96D.evaluateOnce = function () {
                    var hs_sat26D96F = new $hs.Data(1);
                    hs_sat26D96F.data = [3];
                    var hs_sat26D96E = new $hs.Data(1);
                    hs_sat26D96E.data = [hs_azh26D93D];
                    return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26D96E, hs_sat26D96F);
                };
                return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuIOMode25s7oK, hs_sat26D96D);
            }
        };
        var hs_wild126D96u = hs_a26D93R;
        if (hs_a26D93R.notEvaluated) {
            hs_wild126D96u = hs_a26D93R.hscall();
        }
        switch (hs_wild126D96u.tag) {
        case 1:
            return hs_zdj26D93Q.hscall(0);
        case 2:
            return hs_zdj26D93Q.hscall(1);
        case 3:
            return hs_zdj26D93Q.hscall(2);
        case 4:
            return hs_zdj26D93Q.hscall(3);
        }
    };
    hs_zdczlze25uKxD.evaluate = function (hs_a26D93W, hs_b26D93Y) {
        var hs_wild26D96K = hs_a26D93W;
        if (hs_a26D93W.notEvaluated) {
            hs_wild26D96K = hs_a26D93W.hscall();
        }
        switch (hs_wild26D96K.tag) {
        case 1:
            var hs_wild126D96N = hs_b26D93Y;
            if (hs_b26D93Y.notEvaluated) {
                hs_wild126D96N = hs_b26D93Y.hscall();
            }
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild126D96J = hs_b26D93Y;
            if (hs_b26D93Y.notEvaluated) {
                hs_wild126D96J = hs_b26D93Y.hscall();
            }
            switch (hs_wild126D96J.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126D96L = hs_b26D93Y;
            if (hs_b26D93Y.notEvaluated) {
                hs_wild126D96L = hs_b26D93Y.hscall();
            }
            switch (hs_wild126D96L.tag) {
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 4:
            var hs_wild126D96M = hs_b26D93Y;
            if (hs_b26D93Y.notEvaluated) {
                hs_wild126D96M = hs_b26D93Y.hscall();
            }
            switch (hs_wild126D96M.tag) {
            case 4:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_zdczg25uKxN.evaluate = function (hs_a26D946, hs_b26D948) {
        var hs_wild26D96P = hs_a26D946;
        if (hs_a26D946.notEvaluated) {
            hs_wild26D96P = hs_a26D946.hscall();
        }
        switch (hs_wild26D96P.tag) {
        case 1:
            var hs_wild126D96S = hs_b26D948;
            if (hs_b26D948.notEvaluated) {
                hs_wild126D96S = hs_b26D948.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild126D96O = hs_b26D948;
            if (hs_b26D948.notEvaluated) {
                hs_wild126D96O = hs_b26D948.hscall();
            }
            switch (hs_wild126D96O.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126D96Q = hs_b26D948;
            if (hs_b26D948.notEvaluated) {
                hs_wild126D96Q = hs_b26D948.hscall();
            }
            switch (hs_wild126D96Q.tag) {
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 4:
            var hs_wild126D96R = hs_b26D948;
            if (hs_b26D948.notEvaluated) {
                hs_wild126D96R = hs_b26D948.hscall();
            }
            switch (hs_wild126D96R.tag) {
            case 4:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_zdczgze25uKxX.evaluate = function (hs_a26D94g, hs_b26D94i) {
        var hs_wild26D96U = hs_a26D94g;
        if (hs_a26D94g.notEvaluated) {
            hs_wild26D96U = hs_a26D94g.hscall();
        }
        switch (hs_wild26D96U.tag) {
        case 1:
            var hs_wild126D96X = hs_b26D94i;
            if (hs_b26D94i.notEvaluated) {
                hs_wild126D96X = hs_b26D94i.hscall();
            }
            switch (hs_wild126D96X.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_wild126D96T = hs_b26D94i;
            if (hs_b26D94i.notEvaluated) {
                hs_wild126D96T = hs_b26D94i.hscall();
            }
            switch (hs_wild126D96T.tag) {
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126D96V = hs_b26D94i;
            if (hs_b26D94i.notEvaluated) {
                hs_wild126D96V = hs_b26D94i.hscall();
            }
            switch (hs_wild126D96V.tag) {
            case 4:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 4:
            var hs_wild126D96W = hs_b26D94i;
            if (hs_b26D94i.notEvaluated) {
                hs_wild126D96W = hs_b26D94i.hscall();
            }
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl25uKy7.evaluate = function (hs_a26D94q, hs_b26D94s) {
        var hs_wild26D96Z = hs_a26D94q;
        if (hs_a26D94q.notEvaluated) {
            hs_wild26D96Z = hs_a26D94q.hscall();
        }
        switch (hs_wild26D96Z.tag) {
        case 1:
            var hs_wild126D972 = hs_b26D94s;
            if (hs_b26D94s.notEvaluated) {
                hs_wild126D972 = hs_b26D94s.hscall();
            }
            switch (hs_wild126D972.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_wild126D96Y = hs_b26D94s;
            if (hs_b26D94s.notEvaluated) {
                hs_wild126D96Y = hs_b26D94s.hscall();
            }
            switch (hs_wild126D96Y.tag) {
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126D970 = hs_b26D94s;
            if (hs_b26D94s.notEvaluated) {
                hs_wild126D970 = hs_b26D94s.hscall();
            }
            switch (hs_wild126D970.tag) {
            case 4:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 4:
            var hs_wild126D971 = hs_b26D94s;
            if (hs_b26D94s.notEvaluated) {
                hs_wild126D971 = hs_b26D94s.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare25uKyh.evaluate = function (hs_a26D94A, hs_b26D94C) {
        var hs_wild26D974 = hs_a26D94A;
        if (hs_a26D94A.notEvaluated) {
            hs_wild26D974 = hs_a26D94A.hscall();
        }
        switch (hs_wild26D974.tag) {
        case 1:
            var hs_wild126D977 = hs_b26D94C;
            if (hs_b26D94C.notEvaluated) {
                hs_wild126D977 = hs_b26D94C.hscall();
            }
            switch (hs_wild126D977.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_wild126D973 = hs_b26D94C;
            if (hs_b26D94C.notEvaluated) {
                hs_wild126D973 = hs_b26D94C.hscall();
            }
            switch (hs_wild126D973.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126D975 = hs_b26D94C;
            if (hs_b26D94C.notEvaluated) {
                hs_wild126D975 = hs_b26D94C.hscall();
            }
            switch (hs_wild126D975.tag) {
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        case 4:
            var hs_wild126D976 = hs_b26D94C;
            if (hs_b26D94C.notEvaluated) {
                hs_wild126D976 = hs_b26D94C.hscall();
            }
            switch (hs_wild126D976.tag) {
            case 4:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_zdczeze25uKyr.evaluate = function (hs_a26D94K, hs_b26D94M) {
        var hs_wild26D979 = hs_a26D94K;
        if (hs_a26D94K.notEvaluated) {
            hs_wild26D979 = hs_a26D94K.hscall();
        }
        switch (hs_wild26D979.tag) {
        case 1:
            var hs_wild126D97c = hs_b26D94M;
            if (hs_b26D94M.notEvaluated) {
                hs_wild126D97c = hs_b26D94M.hscall();
            }
            switch (hs_wild126D97c.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_wild126D978 = hs_b26D94M;
            if (hs_b26D94M.notEvaluated) {
                hs_wild126D978 = hs_b26D94M.hscall();
            }
            switch (hs_wild126D978.tag) {
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126D97a = hs_b26D94M;
            if (hs_b26D94M.notEvaluated) {
                hs_wild126D97a = hs_b26D94M.hscall();
            }
            switch (hs_wild126D97a.tag) {
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 4:
            var hs_wild126D97b = hs_b26D94M;
            if (hs_b26D94M.notEvaluated) {
                hs_wild126D97b = hs_b26D94M.hscall();
            }
            switch (hs_wild126D97b.tag) {
            case 4:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        }
    };
    this.hs_zdfEqIOMode.data = [hs_zdczeze25uKyr, hs_zdczsze25uKyB];
    hs_zdczsze25uKyB.evaluate = function (hs_a26D94U, hs_b26D94V) {
        var hs_sat26D97d = new $hs.Thunk();
        hs_sat26D97d.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziIOMode.hs_zdfEqIOMode, hs_a26D94U, hs_b26D94V);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D97d);
    };
    this.hs_zdfOrdIOMode.data = [$hs.modules.GHCziIOziIOMode.hs_zdfEqIOMode, hs_zdccompare25uKyh, hs_zdczl25uKy7, hs_zdczgze25uKxX, hs_zdczg25uKxN, hs_zdczlze25uKxD, hs_zdcmax25uKyI, hs_zdcmin25uKyH];
    hs_zdcmin25uKyH.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziIOziIOMode.hs_zdfOrdIOMode);
    };
    hs_zdcmax25uKyI.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziIOziIOMode.hs_zdfOrdIOMode);
    };
    this.hs_zdfIxIOMode.data = [$hs.modules.GHCziIOziIOMode.hs_zdfOrdIOMode, hs_zdcrange25uKxd, hs_zdcindex25uKyL, hs_zdcunsafeIndex25uKwU, hs_zdcinRange25uKwv, hs_zdcrangeSizze25uKyK, hs_zdcunsafeRangeSizze25uKyJ];
    hs_zdcunsafeRangeSizze25uKyJ.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmunsafeRangeSizze.hscall($hs.modules.GHCziIOziIOMode.hs_zdfIxIOMode);
    };
    hs_zdcrangeSizze25uKyK.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmrangeSizze.hscall($hs.modules.GHCziIOziIOMode.hs_zdfIxIOMode);
    };
    hs_zdcindex25uKyL.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmindex.hscall($hs.modules.GHCziIOziIOMode.hs_zdfIxIOMode);
    };
    this.hs_ReadMode.data = [];
    this.hs_WriteMode.data = [];
    this.hs_AppendMode.data = [];
    this.hs_ReadWriteMode.data = [];
};
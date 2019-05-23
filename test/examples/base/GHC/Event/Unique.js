
$hs.modules.GHCziEventziUnique = new $hs.Module();
$hs.modules.GHCziEventziUnique.dependencies = ["GHC.Integer", "GHC.Base", "GHC.Num", "GHC.Show", "GHC.Classes", "GHC.Conc.Sync", "GHC.Int"];
$hs.modules.GHCziEventziUnique.initBeforeDependencies = function () {
    this.hs_asInt64 = new $hs.Func(1);
    this.hs_zdfShowUnique = new $hs.Data(1);
    this.hs_zdfEqUnique = new $hs.Data(1);
    this.hs_zdfOrdUnique = new $hs.Data(1);
    this.hs_zdfNumUnique = new $hs.Data(1);
    this.hs_newSource = new $hs.Thunk();
    this.hs_newUnique = new $hs.Func(1);
    this.hs_Unique = new $hs.Func(1);
    this.hs_US = new $hs.Func(1);
    this.hs_asInt64.notEvaluated = true;
    this.hs_asInt64.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziEventziUnique.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_zdfShowUnique.notEvaluated = true;
    this.hs_zdfShowUnique.evaluate = function () {
        $hs.modules.GHCziEventziUnique.loadDependencies();
        return this;
    };
    this.hs_zdfEqUnique.notEvaluated = true;
    this.hs_zdfEqUnique.evaluate = function () {
        $hs.modules.GHCziEventziUnique.loadDependencies();
        return this;
    };
    this.hs_zdfOrdUnique.notEvaluated = true;
    this.hs_zdfOrdUnique.evaluate = function () {
        $hs.modules.GHCziEventziUnique.loadDependencies();
        return this;
    };
    this.hs_zdfNumUnique.notEvaluated = true;
    this.hs_zdfNumUnique.evaluate = function () {
        $hs.modules.GHCziEventziUnique.loadDependencies();
        return this;
    };
    this.hs_newSource.evaluateOnce = function () {
        $hs.modules.GHCziEventziUnique.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_newUnique.notEvaluated = true;
    this.hs_newUnique.evaluate = function (hs_ds26DvPZ) {
        $hs.modules.GHCziEventziUnique.loadDependencies();
        return this.evaluate(hs_ds26DvPZ);
    };
    this.hs_Unique.notEvaluated = true;
    this.hs_Unique.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziEventziUnique.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_US.notEvaluated = true;
    this.hs_US.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziEventziUnique.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.GHCziEventziUnique.initAfterDependencies = function () {
    this.hs_asInt64.notEvaluated = false;
    this.hs_zdfShowUnique.notEvaluated = false;
    this.hs_zdfShowUnique.evaluate = function () {
        return this;
    };
    this.hs_zdfEqUnique.notEvaluated = false;
    this.hs_zdfEqUnique.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdUnique.notEvaluated = false;
    this.hs_zdfOrdUnique.evaluate = function () {
        return this;
    };
    this.hs_zdfNumUnique.notEvaluated = false;
    this.hs_zdfNumUnique.evaluate = function () {
        return this;
    };
    this.hs_newUnique.notEvaluated = false;
    this.hs_Unique.notEvaluated = false;
    this.hs_US.notEvaluated = false;
    var hs_a25v7iZ = new $hs.Func(1);
    var hs_sat26DvQd = new $hs.Thunk();
    var hs_zdcshow25v7j2 = new $hs.Thunk();
    var hs_zdcshowList25v7j4 = new $hs.Thunk();
    var hs_zdcshowsPrec25v7j5 = new $hs.Thunk();
    var hs_a125v7j6 = new $hs.Thunk();
    var hs_zdczp25v7j7 = new $hs.Thunk();
    var hs_a225v7j8 = new $hs.Thunk();
    var hs_zdczt25v7j9 = new $hs.Thunk();
    var hs_a325v7ja = new $hs.Thunk();
    var hs_zdczm25v7jb = new $hs.Thunk();
    var hs_a425v7jc = new $hs.Thunk();
    var hs_zdcnegate25v7jd = new $hs.Thunk();
    var hs_a525v7je = new $hs.Thunk();
    var hs_zdcabs25v7jf = new $hs.Thunk();
    var hs_a625v7jg = new $hs.Thunk();
    var hs_zdcsignum25v7jh = new $hs.Thunk();
    var hs_a725v7ji = new $hs.Thunk();
    var hs_zdcfromInteger25v7jj = new $hs.Thunk();
    var hs_a825v7jk = new $hs.Thunk();
    var hs_zdccompare25v7jl = new $hs.Thunk();
    var hs_a925v7jm = new $hs.Thunk();
    var hs_zdczl25v7jn = new $hs.Thunk();
    var hs_a1025v7jo = new $hs.Thunk();
    var hs_zdczgze25v7jp = new $hs.Thunk();
    var hs_a1125v7jq = new $hs.Thunk();
    var hs_zdczg25v7jr = new $hs.Thunk();
    var hs_a1225v7js = new $hs.Thunk();
    var hs_zdczlze25v7jt = new $hs.Thunk();
    var hs_a1325v7ju = new $hs.Thunk();
    var hs_zdcmax25v7jv = new $hs.Thunk();
    var hs_a1425v7jw = new $hs.Thunk();
    var hs_zdcmin25v7jx = new $hs.Thunk();
    var hs_a1525v7jy = new $hs.Thunk();
    var hs_zdczeze25v7jz = new $hs.Thunk();
    var hs_a1625v7jA = new $hs.Thunk();
    var hs_zdczsze25v7jB = new $hs.Thunk();
    var hs_sat26DvQg = new $hs.Thunk();
    var hs_sat26DvQh = new $hs.Func(1);
    hs_a25v7iZ.evaluate = function (hs_ds26DvPh) {
        if (hs_ds26DvPh.notEvaluated) {
            return hs_ds26DvPh.hscall();
        } else {
            return hs_ds26DvPh;
        }
    };
    this.hs_asInt64.evaluate = function (hs_eta1cW6l3) {
        return hs_a25v7iZ.hscall(hs_eta1cW6l3);
    };
    hs_sat26DvQd.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt64);
    };
    hs_zdcshow25v7j2.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DvQd, hs_a25v7iZ);
    };
    this.hs_zdfShowUnique.data = [hs_zdcshowsPrec25v7j5, hs_zdcshow25v7j2, hs_zdcshowList25v7j4];
    hs_zdcshowList25v7j4.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziEventziUnique.hs_zdfShowUnique);
    };
    hs_zdcshowsPrec25v7j5.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowsPrec.hscall($hs.modules.GHCziEventziUnique.hs_zdfShowUnique);
    };
    hs_a125v7j6.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdczp25v7j7.evaluateOnce = function () {
        if (hs_a125v7j6.notEvaluated) {
            return hs_a125v7j6.hscall();
        } else {
            return hs_a125v7j6;
        }
    };
    hs_a225v7j8.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdczt25v7j9.evaluateOnce = function () {
        if (hs_a225v7j8.notEvaluated) {
            return hs_a225v7j8.hscall();
        } else {
            return hs_a225v7j8;
        }
    };
    hs_a325v7ja.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdczm25v7jb.evaluateOnce = function () {
        if (hs_a325v7ja.notEvaluated) {
            return hs_a325v7ja.hscall();
        } else {
            return hs_a325v7ja;
        }
    };
    hs_a425v7jc.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcnegate25v7jd.evaluateOnce = function () {
        if (hs_a425v7jc.notEvaluated) {
            return hs_a425v7jc.hscall();
        } else {
            return hs_a425v7jc;
        }
    };
    hs_a525v7je.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcabs25v7jf.evaluateOnce = function () {
        if (hs_a525v7je.notEvaluated) {
            return hs_a525v7je.hscall();
        } else {
            return hs_a525v7je;
        }
    };
    hs_a625v7jg.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcsignum25v7jh.evaluateOnce = function () {
        if (hs_a625v7jg.notEvaluated) {
            return hs_a625v7jg.hscall();
        } else {
            return hs_a625v7jg;
        }
    };
    hs_a725v7ji.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcfromInteger25v7jj.evaluateOnce = function () {
        if (hs_a725v7ji.notEvaluated) {
            return hs_a725v7ji.hscall();
        } else {
            return hs_a725v7ji;
        }
    };
    hs_a825v7jk.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdccompare25v7jl.evaluateOnce = function () {
        if (hs_a825v7jk.notEvaluated) {
            return hs_a825v7jk.hscall();
        } else {
            return hs_a825v7jk;
        }
    };
    hs_a925v7jm.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczl25v7jn.evaluateOnce = function () {
        if (hs_a925v7jm.notEvaluated) {
            return hs_a925v7jm.hscall();
        } else {
            return hs_a925v7jm;
        }
    };
    hs_a1025v7jo.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczgze25v7jp.evaluateOnce = function () {
        if (hs_a1025v7jo.notEvaluated) {
            return hs_a1025v7jo.hscall();
        } else {
            return hs_a1025v7jo;
        }
    };
    hs_a1125v7jq.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczg25v7jr.evaluateOnce = function () {
        if (hs_a1125v7jq.notEvaluated) {
            return hs_a1125v7jq.hscall();
        } else {
            return hs_a1125v7jq;
        }
    };
    hs_a1225v7js.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczlze25v7jt.evaluateOnce = function () {
        if (hs_a1225v7js.notEvaluated) {
            return hs_a1225v7js.hscall();
        } else {
            return hs_a1225v7js;
        }
    };
    hs_a1325v7ju.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdcmax25v7jv.evaluateOnce = function () {
        if (hs_a1325v7ju.notEvaluated) {
            return hs_a1325v7ju.hscall();
        } else {
            return hs_a1325v7ju;
        }
    };
    hs_a1425v7jw.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdcmin25v7jx.evaluateOnce = function () {
        if (hs_a1425v7jw.notEvaluated) {
            return hs_a1425v7jw.hscall();
        } else {
            return hs_a1425v7jw;
        }
    };
    hs_a1525v7jy.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64);
    };
    hs_zdczeze25v7jz.evaluateOnce = function () {
        if (hs_a1525v7jy.notEvaluated) {
            return hs_a1525v7jy.hscall();
        } else {
            return hs_a1525v7jy;
        }
    };
    hs_a1625v7jA.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64);
    };
    hs_zdczsze25v7jB.evaluateOnce = function () {
        if (hs_a1625v7jA.notEvaluated) {
            return hs_a1625v7jA.hscall();
        } else {
            return hs_a1625v7jA;
        }
    };
    this.hs_zdfEqUnique.data = [hs_a1525v7jy, hs_a1625v7jA];
    this.hs_zdfOrdUnique.data = [$hs.modules.GHCziEventziUnique.hs_zdfEqUnique, hs_a825v7jk, hs_a925v7jm, hs_a1025v7jo, hs_a1125v7jq, hs_a1225v7js, hs_a1325v7ju, hs_a1425v7jw];
    this.hs_zdfNumUnique.data = [$hs.modules.GHCziEventziUnique.hs_zdfEqUnique, $hs.modules.GHCziEventziUnique.hs_zdfShowUnique, hs_a125v7j6, hs_a225v7j8, hs_a325v7ja, hs_a425v7jc, hs_a525v7je, hs_a625v7jg, hs_a725v7ji];
    hs_sat26DvQg.evaluateOnce = function () {
        var hs_sat26DvQe = new $hs.Thunk();
        hs_sat26DvQe.evaluateOnce = function () {
            var hs_sat26DvQf = new $hs.Thunk();
            hs_sat26DvQf.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26DvQf);
        };
        return $hs.modules.GHCziConcziSync.hs_newTVarIO.hscall(hs_sat26DvQe);
    };
    hs_sat26DvQh.evaluate = function (hs_tpl26DvPT) {
        if (hs_tpl26DvPT.notEvaluated) {
            return hs_tpl26DvPT.hscall();
        } else {
            return hs_tpl26DvPT;
        }
    };
    this.hs_newSource.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26DvQh, hs_sat26DvQg);
    };
    this.hs_newUnique.evaluate = function (hs_ds26DvPZ) {
        var hs_sat26DvQi = new $hs.Thunk();
        hs_sat26DvQi.evaluateOnce = function () {
            var hs_sat26DvQk = new $hs.Func(1);
            hs_sat26DvQk.evaluate = function (hs_u26DvQ2) {
                var hs_sat26DvQm = new $hs.Thunk();
                hs_sat26DvQm.evaluateOnce = function () {
                    var hs_sat26DvQq = new $hs.Thunk();
                    hs_sat26DvQq.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26DvQq);
                };
                var hs_uzq26DvQ7 = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_u26DvQ2, hs_sat26DvQm);
                var hs_sat26DvQo = new $hs.Thunk();
                hs_sat26DvQo.evaluateOnce = function () {
                    var hs_sat26DvQp = new $hs.Thunk();
                    hs_sat26DvQp.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziConcziSync.hs_zdfMonadSTM);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DvQp, hs_uzq26DvQ7);
                };
                var hs_sat26DvQl = new $hs.Thunk();
                hs_sat26DvQl.evaluateOnce = function () {
                    return $hs.modules.GHCziConcziSync.hs_writeTVar.hscall(hs_ds26DvPZ, hs_uzq26DvQ7);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziConcziSync.hs_zdfMonadSTM, hs_sat26DvQl, hs_sat26DvQo);
            };
            var hs_sat26DvQj = new $hs.Thunk();
            hs_sat26DvQj.evaluateOnce = function () {
                return $hs.modules.GHCziConcziSync.hs_readTVar.hscall(hs_ds26DvPZ);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziConcziSync.hs_zdfMonadSTM, hs_sat26DvQj, hs_sat26DvQk);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziConcziSync.hs_atomically, hs_sat26DvQi);
    };
    this.hs_Unique.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.GHCziEventziUnique.hs_Unique.hscall(hs_eta1cW6l3);
    };
    this.hs_US.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.GHCziEventziUnique.hs_US.hscall(hs_eta1cW6l3);
    };
};
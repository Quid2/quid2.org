
$hs.modules.SystemziEventziUnique = new $hs.Module();
$hs.modules.SystemziEventziUnique.dependencies = ["GHC.Integer", "GHC.Base", "GHC.Num", "GHC.Show", "GHC.Classes", "GHC.Conc.Sync", "GHC.Int"];
$hs.modules.SystemziEventziUnique.initBeforeDependencies = function () {
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
        $hs.modules.SystemziEventziUnique.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_zdfShowUnique.notEvaluated = true;
    this.hs_zdfShowUnique.evaluate = function () {
        $hs.modules.SystemziEventziUnique.loadDependencies();
        return this;
    };
    this.hs_zdfEqUnique.notEvaluated = true;
    this.hs_zdfEqUnique.evaluate = function () {
        $hs.modules.SystemziEventziUnique.loadDependencies();
        return this;
    };
    this.hs_zdfOrdUnique.notEvaluated = true;
    this.hs_zdfOrdUnique.evaluate = function () {
        $hs.modules.SystemziEventziUnique.loadDependencies();
        return this;
    };
    this.hs_zdfNumUnique.notEvaluated = true;
    this.hs_zdfNumUnique.evaluate = function () {
        $hs.modules.SystemziEventziUnique.loadDependencies();
        return this;
    };
    this.hs_newSource.evaluateOnce = function () {
        $hs.modules.SystemziEventziUnique.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_newUnique.notEvaluated = true;
    this.hs_newUnique.evaluate = function (hs_ds26DVrP) {
        $hs.modules.SystemziEventziUnique.loadDependencies();
        return this.evaluate(hs_ds26DVrP);
    };
    this.hs_Unique.notEvaluated = true;
    this.hs_Unique.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziEventziUnique.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_US.notEvaluated = true;
    this.hs_US.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziEventziUnique.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.SystemziEventziUnique.initAfterDependencies = function () {
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
    var hs_a25vwUg = new $hs.Func(1);
    var hs_sat26DVs3 = new $hs.Thunk();
    var hs_zdcshow25vwUk = new $hs.Thunk();
    var hs_zdcshowList25vwUn = new $hs.Thunk();
    var hs_zdcshowsPrec25vwUp = new $hs.Thunk();
    var hs_a125vwUr = new $hs.Thunk();
    var hs_zdczp25vwUt = new $hs.Thunk();
    var hs_a225vwUv = new $hs.Thunk();
    var hs_zdczt25vwUx = new $hs.Thunk();
    var hs_a325vwUz = new $hs.Thunk();
    var hs_zdczm25vwUB = new $hs.Thunk();
    var hs_a425vwUD = new $hs.Thunk();
    var hs_zdcnegate25vwUF = new $hs.Thunk();
    var hs_a525vwUH = new $hs.Thunk();
    var hs_zdcabs25vwUJ = new $hs.Thunk();
    var hs_a625vwUL = new $hs.Thunk();
    var hs_zdcsignum25vwUN = new $hs.Thunk();
    var hs_a725vwUP = new $hs.Thunk();
    var hs_zdcfromInteger25vwUR = new $hs.Thunk();
    var hs_a825vwUT = new $hs.Thunk();
    var hs_zdccompare25vwUV = new $hs.Thunk();
    var hs_a925vwUX = new $hs.Thunk();
    var hs_zdczl25vwUZ = new $hs.Thunk();
    var hs_a1025vwV1 = new $hs.Thunk();
    var hs_zdczgze25vwV3 = new $hs.Thunk();
    var hs_a1125vwV5 = new $hs.Thunk();
    var hs_zdczg25vwV7 = new $hs.Thunk();
    var hs_a1225vwV9 = new $hs.Thunk();
    var hs_zdczlze25vwVb = new $hs.Thunk();
    var hs_a1325vwVd = new $hs.Thunk();
    var hs_zdcmax25vwVf = new $hs.Thunk();
    var hs_a1425vwVh = new $hs.Thunk();
    var hs_zdcmin25vwVj = new $hs.Thunk();
    var hs_a1525vwVl = new $hs.Thunk();
    var hs_zdczeze25vwVn = new $hs.Thunk();
    var hs_a1625vwVp = new $hs.Thunk();
    var hs_zdczsze25vwVr = new $hs.Thunk();
    var hs_sat26DVs6 = new $hs.Thunk();
    var hs_sat26DVs7 = new $hs.Func(1);
    hs_a25vwUg.evaluate = function (hs_ds26DVqy) {
        if (hs_ds26DVqy.notEvaluated) {
            return hs_ds26DVqy.hscall();
        } else {
            return hs_ds26DVqy;
        }
    };
    this.hs_asInt64.evaluate = function (hs_eta1cW6l3) {
        return hs_a25vwUg.hscall(hs_eta1cW6l3);
    };
    hs_sat26DVs3.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt64);
    };
    hs_zdcshow25vwUk.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DVs3, hs_a25vwUg);
    };
    this.hs_zdfShowUnique.data = [hs_zdcshowsPrec25vwUp, hs_zdcshow25vwUk, hs_zdcshowList25vwUn];
    hs_zdcshowList25vwUn.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.SystemziEventziUnique.hs_zdfShowUnique);
    };
    hs_zdcshowsPrec25vwUp.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowsPrec.hscall($hs.modules.SystemziEventziUnique.hs_zdfShowUnique);
    };
    hs_a125vwUr.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdczp25vwUt.evaluateOnce = function () {
        if (hs_a125vwUr.notEvaluated) {
            return hs_a125vwUr.hscall();
        } else {
            return hs_a125vwUr;
        }
    };
    hs_a225vwUv.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdczt25vwUx.evaluateOnce = function () {
        if (hs_a225vwUv.notEvaluated) {
            return hs_a225vwUv.hscall();
        } else {
            return hs_a225vwUv;
        }
    };
    hs_a325vwUz.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdczm25vwUB.evaluateOnce = function () {
        if (hs_a325vwUz.notEvaluated) {
            return hs_a325vwUz.hscall();
        } else {
            return hs_a325vwUz;
        }
    };
    hs_a425vwUD.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcnegate25vwUF.evaluateOnce = function () {
        if (hs_a425vwUD.notEvaluated) {
            return hs_a425vwUD.hscall();
        } else {
            return hs_a425vwUD;
        }
    };
    hs_a525vwUH.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcabs25vwUJ.evaluateOnce = function () {
        if (hs_a525vwUH.notEvaluated) {
            return hs_a525vwUH.hscall();
        } else {
            return hs_a525vwUH;
        }
    };
    hs_a625vwUL.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcsignum25vwUN.evaluateOnce = function () {
        if (hs_a625vwUL.notEvaluated) {
            return hs_a625vwUL.hscall();
        } else {
            return hs_a625vwUL;
        }
    };
    hs_a725vwUP.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcfromInteger25vwUR.evaluateOnce = function () {
        if (hs_a725vwUP.notEvaluated) {
            return hs_a725vwUP.hscall();
        } else {
            return hs_a725vwUP;
        }
    };
    hs_a825vwUT.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdccompare25vwUV.evaluateOnce = function () {
        if (hs_a825vwUT.notEvaluated) {
            return hs_a825vwUT.hscall();
        } else {
            return hs_a825vwUT;
        }
    };
    hs_a925vwUX.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczl25vwUZ.evaluateOnce = function () {
        if (hs_a925vwUX.notEvaluated) {
            return hs_a925vwUX.hscall();
        } else {
            return hs_a925vwUX;
        }
    };
    hs_a1025vwV1.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczgze25vwV3.evaluateOnce = function () {
        if (hs_a1025vwV1.notEvaluated) {
            return hs_a1025vwV1.hscall();
        } else {
            return hs_a1025vwV1;
        }
    };
    hs_a1125vwV5.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczg25vwV7.evaluateOnce = function () {
        if (hs_a1125vwV5.notEvaluated) {
            return hs_a1125vwV5.hscall();
        } else {
            return hs_a1125vwV5;
        }
    };
    hs_a1225vwV9.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczlze25vwVb.evaluateOnce = function () {
        if (hs_a1225vwV9.notEvaluated) {
            return hs_a1225vwV9.hscall();
        } else {
            return hs_a1225vwV9;
        }
    };
    hs_a1325vwVd.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdcmax25vwVf.evaluateOnce = function () {
        if (hs_a1325vwVd.notEvaluated) {
            return hs_a1325vwVd.hscall();
        } else {
            return hs_a1325vwVd;
        }
    };
    hs_a1425vwVh.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdcmin25vwVj.evaluateOnce = function () {
        if (hs_a1425vwVh.notEvaluated) {
            return hs_a1425vwVh.hscall();
        } else {
            return hs_a1425vwVh;
        }
    };
    hs_a1525vwVl.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64);
    };
    hs_zdczeze25vwVn.evaluateOnce = function () {
        if (hs_a1525vwVl.notEvaluated) {
            return hs_a1525vwVl.hscall();
        } else {
            return hs_a1525vwVl;
        }
    };
    hs_a1625vwVp.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64);
    };
    hs_zdczsze25vwVr.evaluateOnce = function () {
        if (hs_a1625vwVp.notEvaluated) {
            return hs_a1625vwVp.hscall();
        } else {
            return hs_a1625vwVp;
        }
    };
    this.hs_zdfEqUnique.data = [hs_a1525vwVl, hs_a1625vwVp];
    this.hs_zdfOrdUnique.data = [$hs.modules.SystemziEventziUnique.hs_zdfEqUnique, hs_a825vwUT, hs_a925vwUX, hs_a1025vwV1, hs_a1125vwV5, hs_a1225vwV9, hs_a1325vwVd, hs_a1425vwVh];
    this.hs_zdfNumUnique.data = [$hs.modules.SystemziEventziUnique.hs_zdfEqUnique, $hs.modules.SystemziEventziUnique.hs_zdfShowUnique, hs_a125vwUr, hs_a225vwUv, hs_a325vwUz, hs_a425vwUD, hs_a525vwUH, hs_a625vwUL, hs_a725vwUP];
    hs_sat26DVs6.evaluateOnce = function () {
        var hs_sat26DVs5 = new $hs.Thunk();
        hs_sat26DVs5.evaluateOnce = function () {
            var hs_sat26DVs4 = new $hs.Thunk();
            hs_sat26DVs4.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26DVs4);
        };
        return $hs.modules.GHCziConcziSync.hs_newTVarIO.hscall(hs_sat26DVs5);
    };
    hs_sat26DVs7.evaluate = function (hs_tpl26DVrJ) {
        if (hs_tpl26DVrJ.notEvaluated) {
            return hs_tpl26DVrJ.hscall();
        } else {
            return hs_tpl26DVrJ;
        }
    };
    this.hs_newSource.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26DVs7, hs_sat26DVs6);
    };
    this.hs_newUnique.evaluate = function (hs_ds26DVrP) {
        var hs_sat26DVsg = new $hs.Thunk();
        hs_sat26DVsg.evaluateOnce = function () {
            var hs_sat26DVse = new $hs.Func(1);
            hs_sat26DVse.evaluate = function (hs_u26DVrS) {
                var hs_sat26DVsa = new $hs.Thunk();
                hs_sat26DVsa.evaluateOnce = function () {
                    var hs_sat26DVs8 = new $hs.Thunk();
                    hs_sat26DVs8.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26DVs8);
                };
                var hs_uzq26DVrX = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_u26DVrS, hs_sat26DVsa);
                var hs_sat26DVsc = new $hs.Thunk();
                hs_sat26DVsc.evaluateOnce = function () {
                    var hs_sat26DVsb = new $hs.Thunk();
                    hs_sat26DVsb.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziConcziSync.hs_zdfMonadSTM);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DVsb, hs_uzq26DVrX);
                };
                var hs_sat26DVsd = new $hs.Thunk();
                hs_sat26DVsd.evaluateOnce = function () {
                    return $hs.modules.GHCziConcziSync.hs_writeTVar.hscall(hs_ds26DVrP, hs_uzq26DVrX);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziConcziSync.hs_zdfMonadSTM, hs_sat26DVsd, hs_sat26DVsc);
            };
            var hs_sat26DVsf = new $hs.Thunk();
            hs_sat26DVsf.evaluateOnce = function () {
                return $hs.modules.GHCziConcziSync.hs_readTVar.hscall(hs_ds26DVrP);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziConcziSync.hs_zdfMonadSTM, hs_sat26DVsf, hs_sat26DVse);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziConcziSync.hs_atomically, hs_sat26DVsg);
    };
    this.hs_Unique.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.SystemziEventziUnique.hs_Unique.hscall(hs_eta1cW6l3);
    };
    this.hs_US.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.SystemziEventziUnique.hs_US.hscall(hs_eta1cW6l3);
    };
};
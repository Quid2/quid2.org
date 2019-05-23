
$hs.modules.DataziHashTable = new $hs.Module();
$hs.modules.DataziHashTable.dependencies = ["GHC.Types", "GHC.Unit", "GHC.Integer", "Control.Monad", "Data.List", "Data.Maybe", "Data.Tuple", "GHC.Base", "GHC.Enum", "GHC.Num", "GHC.Real", "GHC.Show", "GHC.Classes", "GHC.IORef", "GHC.IOArray", "GHC.Int", "GHC.List", "Data.Bits"];
$hs.modules.DataziHashTable.initBeforeDependencies = function () {
    this.hs_zdWHD = new $hs.Func(7);
    this.hs_zdWHT = new $hs.Func(3);
    this.hs_zdWHashTable = new $hs.Func(3);
    this.hs_toList = new $hs.Func(1);
    this.hs_longestChain = new $hs.Func(1);
    this.hs_zdfEqInserts = new $hs.Data(1);
    this.hs_zdfShowHashData = new $hs.Data(1);
    this.hs_zdfEqHashData = new $hs.Data(1);
    this.hs_hashInt = new $hs.Func(1);
    this.hs_hashString = new $hs.Thunk();
    this.hs_prime = new $hs.Thunk();
    this.hs_new = new $hs.Func(2);
    this.hs_newHint = new $hs.Func(3);
    this.hs_lookup = new $hs.Func(2);
    this.hs_insert = new $hs.Func(3);
    this.hs_fromList = new $hs.Func(3);
    this.hs_delete = new $hs.Func(2);
    this.hs_update = new $hs.Func(3);
    this.hs_CanInsert = new $hs.Data(1);
    this.hs_CanzqtInsert = new $hs.Data(2);
    this.hs_HD = new $hs.Func(7);
    this.hs_HT = new $hs.Func(6);
    this.hs_HashTable = new $hs.Func(3);
    this.hs_zdWHD.notEvaluated = true;
    this.hs_zdWHD.evaluate = function (hs_tpl26DEOT, hs_tpl26DEOV, hs_tpl26DEOX, hs_tpl26DEOZ, hs_tpl26DEP1, hs_tpl26DEP4, hs_tpl26DEP7) {
        $hs.modules.DataziHashTable.loadDependencies();
        return this.evaluate(hs_tpl26DEOT, hs_tpl26DEOV, hs_tpl26DEOX, hs_tpl26DEOZ, hs_tpl26DEP1, hs_tpl26DEP4, hs_tpl26DEP7);
    };
    this.hs_zdWHT.notEvaluated = true;
    this.hs_zdWHT.evaluate = function (hs_tpl26DEPk, hs_tpl26DEPn, hs_tpl26DEPq) {
        $hs.modules.DataziHashTable.loadDependencies();
        return this.evaluate(hs_tpl26DEPk, hs_tpl26DEPn, hs_tpl26DEPq);
    };
    this.hs_zdWHashTable.notEvaluated = true;
    this.hs_zdWHashTable.evaluate = function (hs_tpl26DEPF, hs_tpl26DEPH, hs_tpl26DEPJ) {
        $hs.modules.DataziHashTable.loadDependencies();
        return this.evaluate(hs_tpl26DEPF, hs_tpl26DEPH, hs_tpl26DEPJ);
    };
    this.hs_toList.notEvaluated = true;
    this.hs_toList.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziHashTable.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_longestChain.notEvaluated = true;
    this.hs_longestChain.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziHashTable.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_zdfEqInserts.notEvaluated = true;
    this.hs_zdfEqInserts.evaluate = function () {
        $hs.modules.DataziHashTable.loadDependencies();
        return this;
    };
    this.hs_zdfShowHashData.notEvaluated = true;
    this.hs_zdfShowHashData.evaluate = function () {
        $hs.modules.DataziHashTable.loadDependencies();
        return this;
    };
    this.hs_zdfEqHashData.notEvaluated = true;
    this.hs_zdfEqHashData.evaluate = function () {
        $hs.modules.DataziHashTable.loadDependencies();
        return this;
    };
    this.hs_hashInt.notEvaluated = true;
    this.hs_hashInt.evaluate = function (hs_x26DEUl) {
        $hs.modules.DataziHashTable.loadDependencies();
        return this.evaluate(hs_x26DEUl);
    };
    this.hs_hashString.evaluateOnce = function () {
        $hs.modules.DataziHashTable.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_prime.evaluateOnce = function () {
        $hs.modules.DataziHashTable.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_new.notEvaluated = true;
    this.hs_new.evaluate = function (hs_cmpr26DEVf, hs_hash26DEVh) {
        $hs.modules.DataziHashTable.loadDependencies();
        return this.evaluate(hs_cmpr26DEVf, hs_hash26DEVh);
    };
    this.hs_newHint.notEvaluated = true;
    this.hs_newHint.evaluate = function (hs_cmpr26DEWA, hs_hash26DEWC, hs_minSizze26DEW8) {
        $hs.modules.DataziHashTable.loadDependencies();
        return this.evaluate(hs_cmpr26DEWA, hs_hash26DEWC, hs_minSizze26DEW8);
    };
    this.hs_lookup.notEvaluated = true;
    this.hs_lookup.evaluate = function (hs_ht26DEWQ, hs_key26DEXd) {
        $hs.modules.DataziHashTable.loadDependencies();
        return this.evaluate(hs_ht26DEWQ, hs_key26DEXd);
    };
    this.hs_insert.notEvaluated = true;
    this.hs_insert.evaluate = function (hs_ht26DEZz, hs_key26DEZT, hs_val26DF0E) {
        $hs.modules.DataziHashTable.loadDependencies();
        return this.evaluate(hs_ht26DEZz, hs_key26DEZT, hs_val26DF0E);
    };
    this.hs_fromList.notEvaluated = true;
    this.hs_fromList.evaluate = function (hs_zddEq26DF1w, hs_hash26DF1y, hs_list26DF1S) {
        $hs.modules.DataziHashTable.loadDependencies();
        return this.evaluate(hs_zddEq26DF1w, hs_hash26DF1y, hs_list26DF1S);
    };
    this.hs_delete.notEvaluated = true;
    this.hs_delete.evaluate = function (hs_ht26DF1Z, hs_key26DF25) {
        $hs.modules.DataziHashTable.loadDependencies();
        return this.evaluate(hs_ht26DF1Z, hs_key26DF25);
    };
    this.hs_update.notEvaluated = true;
    this.hs_update.evaluate = function (hs_ht26DF3Z, hs_key26DF4o, hs_val26DF5l) {
        $hs.modules.DataziHashTable.loadDependencies();
        return this.evaluate(hs_ht26DF3Z, hs_key26DF4o, hs_val26DF5l);
    };
    this.hs_CanInsert.notEvaluated = true;
    this.hs_CanInsert.evaluate = function () {
        $hs.modules.DataziHashTable.loadDependencies();
        return this;
    };
    this.hs_CanzqtInsert.notEvaluated = true;
    this.hs_CanzqtInsert.evaluate = function () {
        $hs.modules.DataziHashTable.loadDependencies();
        return this;
    };
    this.hs_HD.notEvaluated = true;
    this.hs_HD.evaluate = function (hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.DataziHashTable.loadDependencies();
        return this.evaluate(hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_HT.notEvaluated = true;
    this.hs_HT.evaluate = function (hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.DataziHashTable.loadDependencies();
        return this.evaluate(hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_HashTable.notEvaluated = true;
    this.hs_HashTable.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.DataziHashTable.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.DataziHashTable.initAfterDependencies = function () {
    this.hs_zdWHD.notEvaluated = false;
    this.hs_zdWHT.notEvaluated = false;
    this.hs_zdWHashTable.notEvaluated = false;
    this.hs_toList.notEvaluated = false;
    this.hs_longestChain.notEvaluated = false;
    this.hs_zdfEqInserts.notEvaluated = false;
    this.hs_zdfEqInserts.evaluate = function () {
        return this;
    };
    this.hs_zdfShowHashData.notEvaluated = false;
    this.hs_zdfShowHashData.evaluate = function () {
        return this;
    };
    this.hs_zdfEqHashData.notEvaluated = false;
    this.hs_zdfEqHashData.evaluate = function () {
        return this;
    };
    this.hs_hashInt.notEvaluated = false;
    this.hs_new.notEvaluated = false;
    this.hs_newHint.notEvaluated = false;
    this.hs_lookup.notEvaluated = false;
    this.hs_insert.notEvaluated = false;
    this.hs_fromList.notEvaluated = false;
    this.hs_delete.notEvaluated = false;
    this.hs_update.notEvaluated = false;
    this.hs_CanInsert.notEvaluated = false;
    this.hs_CanInsert.evaluate = function () {
        return this;
    };
    this.hs_CanzqtInsert.notEvaluated = false;
    this.hs_CanzqtInsert.evaluate = function () {
        return this;
    };
    this.hs_HD.notEvaluated = false;
    this.hs_HT.notEvaluated = false;
    this.hs_HashTable.notEvaluated = false;
    var hs_deleteBucket25t9TX = new $hs.Func(2);
    var hs_readHTArray25t9T1 = new $hs.Func(2);
    var hs_mapReduce25t9U9 = new $hs.Func(3);
    var hs_a25vgkN = new $hs.Thunk();
    var hs_newMutArray25t9SZ = new $hs.Thunk();
    var hs_zdczeze25vgl7 = new $hs.Func(2);
    var hs_zdczsze25vglg = new $hs.Func(2);
    var hs_zdcshowsPrec25vgln = new $hs.Func(2);
    var hs_sat26DF8f = new $hs.Thunk();
    var hs_zdcshowList25vgmR = new $hs.Thunk();
    var hs_zdcshow25vgmT = new $hs.Thunk();
    var hs_zdczeze125vgmX = new $hs.Func(2);
    var hs_zdczsze125vgnP = new $hs.Func(2);
    var hs_sat26DF8C = new $hs.Thunk();
    var hs_golden25t9Tj = new $hs.Thunk();
    var hs_hashInt3225t9Tl = new $hs.Func(1);
    var hs_sat26DF8M = new $hs.Thunk();
    var hs_magic25vgo8 = new $hs.Thunk();
    var hs_sat26DF8R = new $hs.Func(2);
    var hs_sat26DF8S = new $hs.Thunk();
    var hs_sat26DF8U = new $hs.Thunk();
    var hs_sat26DF8Z = new $hs.Thunk();
    var hs_tABLEzuMAX25t9Tv = new $hs.Thunk();
    var hs_sat26DF90 = new $hs.Thunk();
    var hs_tABLEzuMIN25t9Tx = new $hs.Thunk();
    var hs_recordLookup25t9Th = new $hs.Thunk();
    var hs_recordNew25t9Tb = new $hs.Thunk();
    var hs_sat26DF9i = new $hs.Thunk();
    var hs_hLOAD25t9Tz = new $hs.Thunk();
    var hs_sat26DF9j = new $hs.Thunk();
    var hs_hYSTERESIS25t9TB = new $hs.Thunk();
    var hs_tooBig25t9TN = new $hs.Func(2);
    var hs_powerOver25t9TH = new $hs.Func(1);
    var hs_expandHashTable25t9TV = new $hs.Func(2);
    this.hs_zdWHD.evaluate = function (hs_tpl26DEOT, hs_tpl26DEOV, hs_tpl26DEOX, hs_tpl26DEOZ, hs_tpl26DEP1, hs_tpl26DEP4, hs_tpl26DEP7) {
        var hs_tpl26DEPa = hs_tpl26DEOT;
        if (hs_tpl26DEOT.notEvaluated) {
            hs_tpl26DEPa = hs_tpl26DEOT.hscall();
        }
        var hs_tpl26DEPb = hs_tpl26DEOV;
        if (hs_tpl26DEOV.notEvaluated) {
            hs_tpl26DEPb = hs_tpl26DEOV.hscall();
        }
        var hs_tpl26DEPc = hs_tpl26DEOX;
        if (hs_tpl26DEOX.notEvaluated) {
            hs_tpl26DEPc = hs_tpl26DEOX.hscall();
        }
        var hs_tpl26DEPd = hs_tpl26DEOZ;
        if (hs_tpl26DEOZ.notEvaluated) {
            hs_tpl26DEPd = hs_tpl26DEOZ.hscall();
        }
        var hs_tpl26DF6l = hs_tpl26DEP1;
        if (hs_tpl26DEP1.notEvaluated) {
            hs_tpl26DF6l = hs_tpl26DEP1.hscall();
        }
        var hs_tpl26DEPe = hs_tpl26DF6l.data[0];
        var hs_tpl26DF6k = hs_tpl26DEP4;
        if (hs_tpl26DEP4.notEvaluated) {
            hs_tpl26DF6k = hs_tpl26DEP4.hscall();
        }
        var hs_tpl26DEPf = hs_tpl26DF6k.data[0];
        var hs_tpl26DF6j = hs_tpl26DEP7;
        if (hs_tpl26DEP7.notEvaluated) {
            hs_tpl26DF6j = hs_tpl26DEP7.hscall();
        }
        var hs_tpl26DEPg = hs_tpl26DF6j.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DEPa, hs_tpl26DEPb, hs_tpl26DEPc, hs_tpl26DEPd, hs_tpl26DEPe, hs_tpl26DEPf, hs_tpl26DEPg];
        return $res;
    };
    this.hs_zdWHT.evaluate = function (hs_tpl26DEPk, hs_tpl26DEPn, hs_tpl26DEPq) {
        var hs_tpl26DF6o = hs_tpl26DEPk;
        if (hs_tpl26DEPk.notEvaluated) {
            hs_tpl26DF6o = hs_tpl26DEPk.hscall();
        }
        var hs_tpl26DEPw = hs_tpl26DF6o.data[0];
        var hs_tpl26DF6n = hs_tpl26DEPn;
        if (hs_tpl26DEPn.notEvaluated) {
            hs_tpl26DF6n = hs_tpl26DEPn.hscall();
        }
        var hs_tpl26DEPx = hs_tpl26DF6n.data[0];
        var hs_tpl26DF6m = hs_tpl26DEPq;
        if (hs_tpl26DEPq.notEvaluated) {
            hs_tpl26DF6m = hs_tpl26DEPq.hscall();
        }
        var hs_tpl26DEPy = hs_tpl26DF6m.data[0];
        var hs_tpl26DEPz = hs_tpl26DF6m.data[1];
        var hs_tpl26DEPA = hs_tpl26DF6m.data[2];
        var hs_tpl26DEPB = hs_tpl26DF6m.data[3];
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DEPw, hs_tpl26DEPx, hs_tpl26DEPy, hs_tpl26DEPz, hs_tpl26DEPA, hs_tpl26DEPB];
        return $res;
    };
    this.hs_zdWHashTable.evaluate = function (hs_tpl26DEPF, hs_tpl26DEPH, hs_tpl26DEPJ) {
        var hs_tpl26DEPM = hs_tpl26DEPF;
        if (hs_tpl26DEPF.notEvaluated) {
            hs_tpl26DEPM = hs_tpl26DEPF.hscall();
        }
        var hs_tpl26DEPN = hs_tpl26DEPH;
        if (hs_tpl26DEPH.notEvaluated) {
            hs_tpl26DEPN = hs_tpl26DEPH.hscall();
        }
        var hs_tpl26DF6p = hs_tpl26DEPJ;
        if (hs_tpl26DEPJ.notEvaluated) {
            hs_tpl26DF6p = hs_tpl26DEPJ.hscall();
        }
        var hs_tpl26DEPO = hs_tpl26DF6p.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DEPM, hs_tpl26DEPN, hs_tpl26DEPO];
        return $res;
    };
    hs_deleteBucket25t9TX.evaluate = function (hs_ds26DEQ1, hs_ds126DEPR) {
        var hs_wild26DF6q = hs_ds126DEPR;
        if (hs_ds126DEPR.notEvaluated) {
            hs_wild26DF6q = hs_ds126DEPR.hscall();
        }
        switch (hs_wild26DF6q.tag) {
        case 1:
            var hs_sat26DF6s = new $hs.Thunk();
            hs_sat26DF6s.evaluateOnce = function () {
                var hs_sat26DF6r = new $hs.Thunk();
                hs_sat26DF6r.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF6r);
            };
            var $res = new $hs.Data(1);
            $res.data = [$hs.modules.GHCziTypes.hs_ZMZN, hs_sat26DF6s, $hs.modules.GHCziUnit.hs_Z0T];
            return $res;
        case 2:
            var hs_pair26DEPX = hs_wild26DF6q.data[0];
            var hs_bucket26DEQ2 = hs_wild26DF6q.data[1];
            var hs_wild126DEQ9 = hs_pair26DEPX;
            if (hs_pair26DEPX.notEvaluated) {
                hs_wild126DEQ9 = hs_pair26DEPX.hscall();
            }
            var hs_k26DEQ7 = hs_wild126DEQ9.data[0];
            var hs_wild226DF6u = hs_deleteBucket25t9TX.hscall(hs_ds26DEQ1, hs_bucket26DEQ2);
            var hs_bucketzq26DEQa = hs_wild226DF6u.data[0];
            var hs_dels26DEQc = hs_wild226DF6u.data[1];
            var hs_wild326DF6t = hs_ds26DEQ1.hscall(hs_k26DEQ7);
            switch (hs_wild326DF6t.tag) {
            case 1:
                var hs_sat26DF6x = new $hs.Data(2);
                hs_sat26DF6x.data = [hs_wild126DEQ9, hs_bucketzq26DEQa];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26DF6x, hs_dels26DEQc, $hs.modules.GHCziUnit.hs_Z0T];
                return $res;
            case 2:
                var hs_sat26DF6A = new $hs.Thunk();
                hs_sat26DF6A.evaluateOnce = function () {
                    var hs_sat26DF6y = new $hs.Thunk();
                    hs_sat26DF6y.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF6y);
                };
                var hs_delszq26DEQh = $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_dels26DEQc, hs_sat26DF6A);
                var $res = new $hs.Data(1);
                $res.data = [hs_bucketzq26DEQa, hs_delszq26DEQh, $hs.modules.GHCziUnit.hs_Z0T];
                return $res;
            }
        }
    };
    hs_readHTArray25t9T1.evaluate = function (hs_arr26DEQk, hs_i26DEQl) {
        var hs_sat26DF6B = new $hs.Thunk();
        hs_sat26DF6B.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32, $hs.modules.GHCziNum.hs_zdfNumInt, hs_i26DEQl);
        };
        return $hs.modules.GHCziIOArray.hs_unsafeReadIOArray.hscall($hs.modules.GHCziInt.hs_zdfIxInt32, hs_arr26DEQk, hs_sat26DF6B);
    };
    hs_mapReduce25t9U9.evaluate = function (hs_eta26DEQI, hs_eta126DEQH, hs_eta226DEQq) {
        var hs_wild26DF6F = hs_eta226DEQq;
        if (hs_eta226DEQq.notEvaluated) {
            hs_wild26DF6F = hs_eta226DEQq.hscall();
        }
        var hs_rb26DEQv = hs_wild26DF6F.data[2];
        var hs_sat26DF6Q = new $hs.Func(1);
        hs_sat26DF6Q.evaluate = function (hs_ds226DEQz) {
            var hs_wild126DF6D = hs_ds226DEQz;
            if (hs_ds226DEQz.notEvaluated) {
                hs_wild126DF6D = hs_ds226DEQz.hscall();
            }
            var hs_rb226DEQX = hs_wild126DF6D.data[1];
            var hs_rb326DEQL = hs_wild126DF6D.data[2];
            var hs_rb426DEQM = hs_wild126DF6D.data[3];
            var hs_rb526DEQN = hs_wild126DF6D.data[4];
            var hs_rb626DEQO = hs_wild126DF6D.data[5];
            var hs_sat26DF6P = new $hs.Thunk();
            hs_sat26DF6P.evaluateOnce = function () {
                var hs_sat26DF6K = new $hs.Thunk();
                hs_sat26DF6K.evaluateOnce = function () {
                    var hs_sat26DF6H = new $hs.Data(1);
                    hs_sat26DF6H.data = [hs_rb226DEQX];
                    var hs_sat26DF6J = new $hs.Thunk();
                    hs_sat26DF6J.evaluateOnce = function () {
                        var hs_sat26DF6I = new $hs.Thunk();
                        hs_sat26DF6I.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF6I);
                    };
                    return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32, hs_sat26DF6J, hs_sat26DF6H);
                };
                var hs_sat26DF6O = new $hs.Thunk();
                hs_sat26DF6O.evaluateOnce = function () {
                    var hs_a126DEQP = new $hs.Data(1);
                    hs_a126DEQP.data = [hs_rb326DEQL, hs_rb426DEQM, hs_rb526DEQN, hs_rb626DEQO];
                    var hs_sat26DF6M = new $hs.Func(1);
                    hs_sat26DF6M.evaluate = function (hs_i26DEQR) {
                        var hs_sat26DF6L = new $hs.Thunk();
                        hs_sat26DF6L.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32, $hs.modules.GHCziNum.hs_zdfNumInt, hs_i26DEQR);
                        };
                        return $hs.modules.GHCziIOArray.hs_unsafeReadIOArray.hscall($hs.modules.GHCziInt.hs_zdfIxInt32, hs_a126DEQP, hs_sat26DF6L);
                    };
                    var hs_sat26DF6N = new $hs.Thunk();
                    hs_sat26DF6N.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_eta26DEQI);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DF6N, hs_sat26DF6M);
                };
                return $hs.modules.ControlziMonad.hs_mapM.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DF6O, hs_sat26DF6K);
            };
            return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_eta126DEQH, hs_sat26DF6P);
        };
        var hs_sat26DF6S = new $hs.Thunk();
        hs_sat26DF6S.evaluateOnce = function () {
            var hs_sat26DF6R = new $hs.Data(1);
            hs_sat26DF6R.data = [hs_rb26DEQv];
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26DF6R);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DF6S, hs_sat26DF6Q);
    };
    this.hs_toList.evaluate = function (hs_eta1cW6l3) {
        return hs_mapReduce25t9U9.hscall($hs.modules.GHCziBase.hs_id, $hs.modules.GHCziList.hs_concat, hs_eta1cW6l3);
    };
    hs_a25vgkN.evaluateOnce = function () {
        var hs_lengthCmp26DERk = new $hs.Func(2);
        hs_lengthCmp26DERk.evaluate = function (hs_ds26DER7, hs_ds126DER9) {
            var hs_wild26DF6U = hs_ds26DER7;
            if (hs_ds26DER7.notEvaluated) {
                hs_wild26DF6U = hs_ds26DER7.hscall();
            }
            switch (hs_wild26DF6U.tag) {
            case 1:
                var hs_wild126DF6T = hs_ds126DER9;
                if (hs_ds126DER9.notEvaluated) {
                    hs_wild126DF6T = hs_ds126DER9.hscall();
                }
                switch (hs_wild126DF6T.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [];
                    return $res;
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                }
            case 2:
                var hs_x26DERi = hs_wild26DF6U.data[1];
                var hs_wild126DF6X = hs_ds126DER9;
                if (hs_ds126DER9.notEvaluated) {
                    hs_wild126DF6X = hs_ds126DER9.hscall();
                }
                switch (hs_wild126DF6X.tag) {
                case 1:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_y26DERj = hs_wild126DF6X.data[1];
                    return hs_lengthCmp26DERk.hscall(hs_x26DERi, hs_y26DERj);
                }
            }
        };
        var hs_sat26DF70 = new $hs.Func(2);
        hs_sat26DF70.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_lengthCmp26DERk.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
        };
        return $hs.modules.DataziList.hs_maximumBy.hscall(hs_sat26DF70);
    };
    this.hs_longestChain.evaluate = function (hs_eta1cW6l3) {
        return hs_mapReduce25t9U9.hscall($hs.modules.GHCziBase.hs_id, hs_a25vgkN, hs_eta1cW6l3);
    };
    hs_newMutArray25t9SZ.evaluateOnce = function () {
        return $hs.modules.GHCziIOArray.hs_newIOArray.hscall($hs.modules.GHCziInt.hs_zdfIxInt32);
    };
    hs_zdczeze25vgl7.evaluate = function (hs_a126DERq, hs_b26DERs) {
        var hs_wild26DF72 = hs_a126DERq;
        if (hs_a126DERq.notEvaluated) {
            hs_wild26DF72 = hs_a126DERq.hscall();
        }
        switch (hs_wild26DF72.tag) {
        case 1:
            var hs_wild126DF71 = hs_b26DERs;
            if (hs_b26DERs.notEvaluated) {
                hs_wild126DF71 = hs_b26DERs.hscall();
            }
            switch (hs_wild126DF71.tag) {
            case 1:
                return 0 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 0 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 2:
            var hs_wild126DF73 = hs_b26DERs;
            if (hs_b26DERs.notEvaluated) {
                hs_wild126DF73 = hs_b26DERs.hscall();
            }
            switch (hs_wild126DF73.tag) {
            case 1:
                return 1 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 1 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        }
    };
    this.hs_zdfEqInserts.data = [hs_zdczeze25vgl7, hs_zdczsze25vglg];
    hs_zdczsze25vglg.evaluate = function (hs_a126DERz, hs_b26DERA) {
        var hs_sat26DF74 = new $hs.Thunk();
        hs_sat26DF74.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.DataziHashTable.hs_zdfEqInserts, hs_a126DERz, hs_b26DERA);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DF74);
    };
    hs_zdcshowsPrec25vgln.evaluate = function (hs_a126DERP, hs_ds26DERG) {
        var hs_wild26DF75 = hs_ds26DERG;
        if (hs_ds26DERG.notEvaluated) {
            hs_wild26DF75 = hs_ds26DERG.hscall();
        }
        var hs_b126DERX = hs_wild26DF75.data[0];
        var hs_b226DES4 = hs_wild26DF75.data[1];
        var hs_b326DESb = hs_wild26DF75.data[2];
        var hs_b426DESi = hs_wild26DF75.data[3];
        var hs_rb26DESp = hs_wild26DF75.data[4];
        var hs_rb126DESx = hs_wild26DF75.data[5];
        var hs_rb226DESF = hs_wild26DF75.data[6];
        var hs_sat26DF8c = new $hs.Thunk();
        hs_sat26DF8c.evaluateOnce = function () {
            var hs_sat26DF89 = new $hs.Thunk();
            hs_sat26DF89.evaluateOnce = function () {
                var hs_sat26DF86 = new $hs.Thunk();
                hs_sat26DF86.evaluateOnce = function () {
                    var hs_sat26DF83 = new $hs.Thunk();
                    hs_sat26DF83.evaluateOnce = function () {
                        var hs_sat26DF80 = new $hs.Thunk();
                        hs_sat26DF80.evaluateOnce = function () {
                            var hs_sat26DF7X = new $hs.Thunk();
                            hs_sat26DF7X.evaluateOnce = function () {
                                var hs_sat26DF7U = new $hs.Thunk();
                                hs_sat26DF7U.evaluateOnce = function () {
                                    var hs_sat26DF7R = new $hs.Thunk();
                                    hs_sat26DF7R.evaluateOnce = function () {
                                        var hs_sat26DF7O = new $hs.Thunk();
                                        hs_sat26DF7O.evaluateOnce = function () {
                                            var hs_sat26DF7L = new $hs.Thunk();
                                            hs_sat26DF7L.evaluateOnce = function () {
                                                var hs_sat26DF7I = new $hs.Thunk();
                                                hs_sat26DF7I.evaluateOnce = function () {
                                                    var hs_sat26DF7F = new $hs.Thunk();
                                                    hs_sat26DF7F.evaluateOnce = function () {
                                                        var hs_sat26DF7C = new $hs.Thunk();
                                                        hs_sat26DF7C.evaluateOnce = function () {
                                                            var hs_sat26DF7z = new $hs.Thunk();
                                                            hs_sat26DF7z.evaluateOnce = function () {
                                                                var hs_sat26DF7w = new $hs.Thunk();
                                                                hs_sat26DF7w.evaluateOnce = function () {
                                                                    var hs_sat26DF7s = new $hs.Thunk();
                                                                    hs_sat26DF7s.evaluateOnce = function () {
                                                                        var hs_sat26DF7p = new $hs.Thunk();
                                                                        hs_sat26DF7p.evaluateOnce = function () {
                                                                            var hs_sat26DF7m = new $hs.Thunk();
                                                                            hs_sat26DF7m.evaluateOnce = function () {
                                                                                var hs_sat26DF7i = new $hs.Thunk();
                                                                                hs_sat26DF7i.evaluateOnce = function () {
                                                                                    var hs_sat26DF7f = new $hs.Thunk();
                                                                                    hs_sat26DF7f.evaluateOnce = function () {
                                                                                        var hs_sat26DF7c = new $hs.Thunk();
                                                                                        hs_sat26DF7c.evaluateOnce = function () {
                                                                                            var hs_sat26DF78 = new $hs.Thunk();
                                                                                            hs_sat26DF78.evaluateOnce = function () {
                                                                                                var hs_sat26DF76 = new $hs.Data(1);
                                                                                                hs_sat26DF76.data = ["}"];
                                                                                                var hs_sat26DF77 = new $hs.Data(2);
                                                                                                hs_sat26DF77.data = [hs_sat26DF76, $hs.modules.GHCziTypes.hs_ZMZN];
                                                                                                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DF77);
                                                                                            };
                                                                                            var hs_sat26DF7b = new $hs.Thunk();
                                                                                            hs_sat26DF7b.evaluateOnce = function () {
                                                                                                var hs_sat26DF79 = new $hs.Data(1);
                                                                                                hs_sat26DF79.data = [hs_rb226DESF];
                                                                                                var hs_sat26DF7a = new $hs.Data(1);
                                                                                                hs_sat26DF7a.data = [0];
                                                                                                return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt32, hs_sat26DF7a, hs_sat26DF79);
                                                                                            };
                                                                                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DF7b, hs_sat26DF78);
                                                                                        };
                                                                                        var hs_sat26DF7e = new $hs.Thunk();
                                                                                        hs_sat26DF7e.evaluateOnce = function () {
                                                                                            var hs_sat26DF7d = new $hs.Thunk();
                                                                                            hs_sat26DF7d.evaluateOnce = function () {
                                                                                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("maxBuckets = \x00");
                                                                                            };
                                                                                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DF7d);
                                                                                        };
                                                                                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DF7e, hs_sat26DF7c);
                                                                                    };
                                                                                    var hs_sat26DF7h = new $hs.Thunk();
                                                                                    hs_sat26DF7h.evaluateOnce = function () {
                                                                                        var hs_sat26DF7g = new $hs.Thunk();
                                                                                        hs_sat26DF7g.evaluateOnce = function () {
                                                                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(", \x00");
                                                                                        };
                                                                                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DF7g);
                                                                                    };
                                                                                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DF7h, hs_sat26DF7f);
                                                                                };
                                                                                var hs_sat26DF7l = new $hs.Thunk();
                                                                                hs_sat26DF7l.evaluateOnce = function () {
                                                                                    var hs_sat26DF7j = new $hs.Data(1);
                                                                                    hs_sat26DF7j.data = [hs_rb126DESx];
                                                                                    var hs_sat26DF7k = new $hs.Data(1);
                                                                                    hs_sat26DF7k.data = [0];
                                                                                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26DF7k, hs_sat26DF7j);
                                                                                };
                                                                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DF7l, hs_sat26DF7i);
                                                                            };
                                                                            var hs_sat26DF7o = new $hs.Thunk();
                                                                            hs_sat26DF7o.evaluateOnce = function () {
                                                                                var hs_sat26DF7n = new $hs.Thunk();
                                                                                hs_sat26DF7n.evaluateOnce = function () {
                                                                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("maxChain = \x00");
                                                                                };
                                                                                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DF7n);
                                                                            };
                                                                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DF7o, hs_sat26DF7m);
                                                                        };
                                                                        var hs_sat26DF7r = new $hs.Thunk();
                                                                        hs_sat26DF7r.evaluateOnce = function () {
                                                                            var hs_sat26DF7q = new $hs.Thunk();
                                                                            hs_sat26DF7q.evaluateOnce = function () {
                                                                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(", \x00");
                                                                            };
                                                                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DF7q);
                                                                        };
                                                                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DF7r, hs_sat26DF7p);
                                                                    };
                                                                    var hs_sat26DF7v = new $hs.Thunk();
                                                                    hs_sat26DF7v.evaluateOnce = function () {
                                                                        var hs_sat26DF7t = new $hs.Data(1);
                                                                        hs_sat26DF7t.data = [hs_rb26DESp];
                                                                        var hs_sat26DF7u = new $hs.Data(1);
                                                                        hs_sat26DF7u.data = [0];
                                                                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt32, hs_sat26DF7u, hs_sat26DF7t);
                                                                    };
                                                                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DF7v, hs_sat26DF7s);
                                                                };
                                                                var hs_sat26DF7y = new $hs.Thunk();
                                                                hs_sat26DF7y.evaluateOnce = function () {
                                                                    var hs_sat26DF7x = new $hs.Thunk();
                                                                    hs_sat26DF7x.evaluateOnce = function () {
                                                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("maxEntries = \x00");
                                                                    };
                                                                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DF7x);
                                                                };
                                                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DF7y, hs_sat26DF7w);
                                                            };
                                                            var hs_sat26DF7B = new $hs.Thunk();
                                                            hs_sat26DF7B.evaluateOnce = function () {
                                                                var hs_sat26DF7A = new $hs.Thunk();
                                                                hs_sat26DF7A.evaluateOnce = function () {
                                                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(", \x00");
                                                                };
                                                                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DF7A);
                                                            };
                                                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DF7B, hs_sat26DF7z);
                                                        };
                                                        var hs_sat26DF7E = new $hs.Thunk();
                                                        hs_sat26DF7E.evaluateOnce = function () {
                                                            var hs_sat26DF7D = new $hs.Data(1);
                                                            hs_sat26DF7D.data = [0];
                                                            return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziNum.hs_zdfShowInteger, hs_sat26DF7D, hs_b426DESi);
                                                        };
                                                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DF7E, hs_sat26DF7C);
                                                    };
                                                    var hs_sat26DF7H = new $hs.Thunk();
                                                    hs_sat26DF7H.evaluateOnce = function () {
                                                        var hs_sat26DF7G = new $hs.Thunk();
                                                        hs_sat26DF7G.evaluateOnce = function () {
                                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("totBuckets = \x00");
                                                        };
                                                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DF7G);
                                                    };
                                                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DF7H, hs_sat26DF7F);
                                                };
                                                var hs_sat26DF7K = new $hs.Thunk();
                                                hs_sat26DF7K.evaluateOnce = function () {
                                                    var hs_sat26DF7J = new $hs.Thunk();
                                                    hs_sat26DF7J.evaluateOnce = function () {
                                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(", \x00");
                                                    };
                                                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DF7J);
                                                };
                                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DF7K, hs_sat26DF7I);
                                            };
                                            var hs_sat26DF7N = new $hs.Thunk();
                                            hs_sat26DF7N.evaluateOnce = function () {
                                                var hs_sat26DF7M = new $hs.Data(1);
                                                hs_sat26DF7M.data = [0];
                                                return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziNum.hs_zdfShowInteger, hs_sat26DF7M, hs_b326DESb);
                                            };
                                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DF7N, hs_sat26DF7L);
                                        };
                                        var hs_sat26DF7Q = new $hs.Thunk();
                                        hs_sat26DF7Q.evaluateOnce = function () {
                                            var hs_sat26DF7P = new $hs.Thunk();
                                            hs_sat26DF7P.evaluateOnce = function () {
                                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("lookups = \x00");
                                            };
                                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DF7P);
                                        };
                                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DF7Q, hs_sat26DF7O);
                                    };
                                    var hs_sat26DF7T = new $hs.Thunk();
                                    hs_sat26DF7T.evaluateOnce = function () {
                                        var hs_sat26DF7S = new $hs.Thunk();
                                        hs_sat26DF7S.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(", \x00");
                                        };
                                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DF7S);
                                    };
                                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DF7T, hs_sat26DF7R);
                                };
                                var hs_sat26DF7W = new $hs.Thunk();
                                hs_sat26DF7W.evaluateOnce = function () {
                                    var hs_sat26DF7V = new $hs.Data(1);
                                    hs_sat26DF7V.data = [0];
                                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziNum.hs_zdfShowInteger, hs_sat26DF7V, hs_b226DES4);
                                };
                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DF7W, hs_sat26DF7U);
                            };
                            var hs_sat26DF7Z = new $hs.Thunk();
                            hs_sat26DF7Z.evaluateOnce = function () {
                                var hs_sat26DF7Y = new $hs.Thunk();
                                hs_sat26DF7Y.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("insertions = \x00");
                                };
                                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DF7Y);
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DF7Z, hs_sat26DF7X);
                        };
                        var hs_sat26DF82 = new $hs.Thunk();
                        hs_sat26DF82.evaluateOnce = function () {
                            var hs_sat26DF81 = new $hs.Thunk();
                            hs_sat26DF81.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(", \x00");
                            };
                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DF81);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DF82, hs_sat26DF80);
                    };
                    var hs_sat26DF85 = new $hs.Thunk();
                    hs_sat26DF85.evaluateOnce = function () {
                        var hs_sat26DF84 = new $hs.Data(1);
                        hs_sat26DF84.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziNum.hs_zdfShowInteger, hs_sat26DF84, hs_b126DERX);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DF85, hs_sat26DF83);
                };
                var hs_sat26DF88 = new $hs.Thunk();
                hs_sat26DF88.evaluateOnce = function () {
                    var hs_sat26DF87 = new $hs.Thunk();
                    hs_sat26DF87.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("tables = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DF87);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DF88, hs_sat26DF86);
            };
            var hs_sat26DF8b = new $hs.Thunk();
            hs_sat26DF8b.evaluateOnce = function () {
                var hs_sat26DF8a = new $hs.Thunk();
                hs_sat26DF8a.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("HD {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DF8a);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DF8b, hs_sat26DF89);
        };
        var hs_sat26DF8e = new $hs.Thunk();
        hs_sat26DF8e.evaluateOnce = function () {
            var hs_sat26DF8d = new $hs.Data(1);
            hs_sat26DF8d.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a126DERP, hs_sat26DF8d);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DF8e, hs_sat26DF8c);
    };
    hs_sat26DF8f.evaluateOnce = function () {
        var hs_sat26DF8g = new $hs.Data(1);
        hs_sat26DF8g.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.DataziHashTable.hs_zdfShowHashData, hs_sat26DF8g);
    };
    this.hs_zdfShowHashData.data = [hs_zdcshowsPrec25vgln, hs_zdcshow25vgmT, hs_zdcshowList25vgmR];
    hs_zdcshowList25vgmR.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DF8f);
    };
    hs_zdcshow25vgmT.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.DataziHashTable.hs_zdfShowHashData);
    };
    hs_zdczeze125vgmX.evaluate = function (hs_ds26DETg, hs_ds126DETp) {
        var hs_wild26DF8i = hs_ds26DETg;
        if (hs_ds26DETg.notEvaluated) {
            hs_wild26DF8i = hs_ds26DETg.hscall();
        }
        var hs_a126DETy = hs_wild26DF8i.data[0];
        var hs_a226DETB = hs_wild26DF8i.data[1];
        var hs_a326DETF = hs_wild26DF8i.data[2];
        var hs_a426DETJ = hs_wild26DF8i.data[3];
        var hs_rb26DETN = hs_wild26DF8i.data[4];
        var hs_rb126DETT = hs_wild26DF8i.data[5];
        var hs_rb226DETZ = hs_wild26DF8i.data[6];
        var hs_wild126DF8h = hs_ds126DETp;
        if (hs_ds126DETp.notEvaluated) {
            hs_wild126DF8h = hs_ds126DETp.hscall();
        }
        var hs_b126DETz = hs_wild126DF8h.data[0];
        var hs_b226DETC = hs_wild126DF8h.data[1];
        var hs_b326DETG = hs_wild126DF8h.data[2];
        var hs_b426DETK = hs_wild126DF8h.data[3];
        var hs_rb326DETP = hs_wild126DF8h.data[4];
        var hs_rb426DETV = hs_wild126DF8h.data[5];
        var hs_rb526DEU1 = hs_wild126DF8h.data[6];
        var hs_sat26DF8l = new $hs.Thunk();
        hs_sat26DF8l.evaluateOnce = function () {
            var hs_sat26DF8j = new $hs.Data(1);
            hs_sat26DF8j.data = [hs_rb526DEU1];
            var hs_sat26DF8k = new $hs.Data(1);
            hs_sat26DF8k.data = [hs_rb226DETZ];
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_sat26DF8k, hs_sat26DF8j);
        };
        var hs_sat26DF8A = new $hs.Thunk();
        hs_sat26DF8A.evaluateOnce = function () {
            var hs_sat26DF8o = new $hs.Thunk();
            hs_sat26DF8o.evaluateOnce = function () {
                var hs_sat26DF8m = new $hs.Data(1);
                hs_sat26DF8m.data = [hs_rb426DETV];
                var hs_sat26DF8n = new $hs.Data(1);
                hs_sat26DF8n.data = [hs_rb126DETT];
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DF8n, hs_sat26DF8m);
            };
            var hs_sat26DF8z = new $hs.Thunk();
            hs_sat26DF8z.evaluateOnce = function () {
                var hs_sat26DF8r = new $hs.Thunk();
                hs_sat26DF8r.evaluateOnce = function () {
                    var hs_sat26DF8p = new $hs.Data(1);
                    hs_sat26DF8p.data = [hs_rb326DETP];
                    var hs_sat26DF8q = new $hs.Data(1);
                    hs_sat26DF8q.data = [hs_rb26DETN];
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_sat26DF8q, hs_sat26DF8p);
                };
                var hs_sat26DF8y = new $hs.Thunk();
                hs_sat26DF8y.evaluateOnce = function () {
                    var hs_sat26DF8s = new $hs.Thunk();
                    hs_sat26DF8s.evaluateOnce = function () {
                        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_a426DETJ, hs_b426DETK);
                    };
                    var hs_sat26DF8x = new $hs.Thunk();
                    hs_sat26DF8x.evaluateOnce = function () {
                        var hs_sat26DF8t = new $hs.Thunk();
                        hs_sat26DF8t.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_a326DETF, hs_b326DETG);
                        };
                        var hs_sat26DF8w = new $hs.Thunk();
                        hs_sat26DF8w.evaluateOnce = function () {
                            var hs_sat26DF8u = new $hs.Thunk();
                            hs_sat26DF8u.evaluateOnce = function () {
                                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_a226DETB, hs_b226DETC);
                            };
                            var hs_sat26DF8v = new $hs.Thunk();
                            hs_sat26DF8v.evaluateOnce = function () {
                                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_a126DETy, hs_b126DETz);
                            };
                            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DF8v, hs_sat26DF8u);
                        };
                        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DF8w, hs_sat26DF8t);
                    };
                    return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DF8x, hs_sat26DF8s);
                };
                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DF8y, hs_sat26DF8r);
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DF8z, hs_sat26DF8o);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DF8A, hs_sat26DF8l);
    };
    this.hs_zdfEqHashData.data = [hs_zdczeze125vgmX, hs_zdczsze125vgnP];
    hs_zdczsze125vgnP.evaluate = function (hs_a126DEU8, hs_b26DEU9) {
        var hs_sat26DF8B = new $hs.Thunk();
        hs_sat26DF8B.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.DataziHashTable.hs_zdfEqHashData, hs_a126DEU8, hs_b26DEU9);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DF8B);
    };
    hs_sat26DF8C.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1013904242);
    };
    hs_golden25t9Tj.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF8C);
    };
    hs_hashInt3225t9Tl.evaluate = function (hs_x26DEUd) {
        var hs_sat26DF8I = new $hs.Thunk();
        hs_sat26DF8I.evaluateOnce = function () {
            var hs_sat26DF8H = new $hs.Thunk();
            hs_sat26DF8H.evaluateOnce = function () {
                var hs_sat26DF8D = new $hs.Data(1);
                hs_sat26DF8D.data = [32];
                var hs_sat26DF8G = new $hs.Thunk();
                hs_sat26DF8G.evaluateOnce = function () {
                    var hs_sat26DF8E = new $hs.Thunk();
                    hs_sat26DF8E.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32, $hs.modules.GHCziInt.hs_zdfNumInt64, hs_golden25t9Tj);
                    };
                    var hs_sat26DF8F = new $hs.Thunk();
                    hs_sat26DF8F.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32, $hs.modules.GHCziInt.hs_zdfNumInt64, hs_x26DEUd);
                    };
                    return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26DF8F, hs_sat26DF8E);
                };
                return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64, hs_sat26DF8G, hs_sat26DF8D);
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64, $hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF8H);
        };
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF8I, hs_x26DEUd);
    };
    this.hs_hashInt.evaluate = function (hs_x26DEUl) {
        var hs_sat26DF8J = new $hs.Thunk();
        hs_sat26DF8J.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziInt.hs_zdfNumInt32, hs_x26DEUl);
        };
        return hs_hashInt3225t9Tl.hscall(hs_sat26DF8J);
    };
    hs_sat26DF8M.evaluateOnce = function () {
        var hs_sat26DF8K = new $hs.Thunk();
        hs_sat26DF8K.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2147483647);
        };
        var hs_sat26DF8L = new $hs.Thunk();
        hs_sat26DF8L.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1588444912);
        };
        return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_sat26DF8L, hs_sat26DF8K);
    };
    hs_magic25vgo8.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF8M);
    };
    hs_sat26DF8R.evaluate = function (hs_m26DEUy, hs_c26DEUu) {
        var hs_sat26DF8N = new $hs.Thunk();
        hs_sat26DF8N.evaluateOnce = function () {
            return hs_hashInt3225t9Tl.hscall(hs_m26DEUy);
        };
        var hs_sat26DF8Q = new $hs.Thunk();
        hs_sat26DF8Q.evaluateOnce = function () {
            var hs_sat26DF8P = new $hs.Thunk();
            hs_sat26DF8P.evaluateOnce = function () {
                var hs_sat26DF8O = new $hs.Thunk();
                hs_sat26DF8O.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DEUu);
                };
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF8O);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF8P, hs_magic25vgo8);
        };
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF8Q, hs_sat26DF8N);
    };
    this.hs_hashString.evaluateOnce = function () {
        return $hs.modules.DataziList.hs_foldlzq.hscall(hs_sat26DF8R, hs_golden25t9Tj);
    };
    hs_sat26DF8S.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(33554467);
    };
    this.hs_prime.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF8S);
    };
    hs_sat26DF8U.evaluateOnce = function () {
        var hs_sat26DF8T = new $hs.Thunk();
        hs_sat26DF8T.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1024);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF8T);
    };
    hs_sat26DF8Z.evaluateOnce = function () {
        var hs_sat26DF8W = new $hs.Thunk();
        hs_sat26DF8W.evaluateOnce = function () {
            var hs_sat26DF8V = new $hs.Thunk();
            hs_sat26DF8V.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1024);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF8V);
        };
        var hs_sat26DF8Y = new $hs.Thunk();
        hs_sat26DF8Y.evaluateOnce = function () {
            var hs_sat26DF8X = new $hs.Thunk();
            hs_sat26DF8X.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(32);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF8X);
        };
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF8Y, hs_sat26DF8W);
    };
    hs_tABLEzuMAX25t9Tv.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF8Z, hs_sat26DF8U);
    };
    hs_sat26DF90.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(8);
    };
    hs_tABLEzuMIN25t9Tx.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF90);
    };
    hs_recordLookup25t9Th.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_recordNew25t9Tb.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
    };
    this.hs_new.evaluate = function (hs_cmpr26DEVf, hs_hash26DEVh) {
        var hs_sat26DF9h = new $hs.Thunk();
        hs_sat26DF9h.evaluateOnce = function () {
            var hs_mask26DEUP = new $hs.Thunk();
            hs_mask26DEUP.evaluateOnce = function () {
                var hs_sat26DF92 = new $hs.Thunk();
                hs_sat26DF92.evaluateOnce = function () {
                    var hs_sat26DF91 = new $hs.Thunk();
                    hs_sat26DF91.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF91);
                };
                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_tABLEzuMIN25t9Tx, hs_sat26DF92);
            };
            var hs_sat26DF9c = new $hs.Func(1);
            hs_sat26DF9c.evaluate = function (hs_bkts26DEV0) {
                var hs_sat26DF95 = new $hs.Func(1);
                hs_sat26DF95.evaluate = function (hs_table26DEVj) {
                    var hs_sat26DF94 = new $hs.Thunk();
                    hs_sat26DF94.evaluateOnce = function () {
                        var hs_tpl26DEVm = hs_cmpr26DEVf;
                        if (hs_cmpr26DEVf.notEvaluated) {
                            hs_tpl26DEVm = hs_cmpr26DEVf.hscall();
                        }
                        var hs_tpl126DEVn = hs_hash26DEVh;
                        if (hs_hash26DEVh.notEvaluated) {
                            hs_tpl126DEVn = hs_hash26DEVh.hscall();
                        }
                        var hs_tpl226DF93 = hs_table26DEVj;
                        if (hs_table26DEVj.notEvaluated) {
                            hs_tpl226DF93 = hs_table26DEVj.hscall();
                        }
                        var hs_tpl326DEVo = hs_tpl226DF93.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_tpl26DEVm, hs_tpl126DEVn, hs_tpl326DEVo];
                        return $res;
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DF94);
                };
                var hs_sat26DF9b = new $hs.Thunk();
                hs_sat26DF9b.evaluateOnce = function () {
                    var hs_sat26DF9a = new $hs.Thunk();
                    hs_sat26DF9a.evaluateOnce = function () {
                        var hs_sat26DF99 = new $hs.Thunk();
                        hs_sat26DF99.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        var hs_tpl26DF98 = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF99);
                        var hs_tpl126DEV6 = hs_tpl26DF98.data[0];
                        var hs_tpl226DF97 = hs_mask26DEUP;
                        if (hs_mask26DEUP.notEvaluated) {
                            hs_tpl226DF97 = hs_mask26DEUP.hscall();
                        }
                        var hs_tpl326DEV7 = hs_tpl226DF97.data[0];
                        var hs_tpl426DF96 = hs_bkts26DEV0;
                        if (hs_bkts26DEV0.notEvaluated) {
                            hs_tpl426DF96 = hs_bkts26DEV0.hscall();
                        }
                        var hs_tpl526DEV8 = hs_tpl426DF96.data[0];
                        var hs_tpl626DEV9 = hs_tpl426DF96.data[1];
                        var hs_tpl726DEVa = hs_tpl426DF96.data[2];
                        var hs_tpl826DEVb = hs_tpl426DF96.data[3];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_tpl126DEV6, hs_tpl326DEV7, hs_tpl526DEV8, hs_tpl626DEV9, hs_tpl726DEVa, hs_tpl826DEVb];
                        return $res;
                    };
                    return $hs.modules.GHCziIORef.hs_newIORef.hscall(hs_sat26DF9a);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DF9b, hs_sat26DF95);
            };
            var hs_sat26DF9g = new $hs.Thunk();
            hs_sat26DF9g.evaluateOnce = function () {
                var hs_sat26DF9e = new $hs.Thunk();
                hs_sat26DF9e.evaluateOnce = function () {
                    var hs_sat26DF9d = new $hs.Thunk();
                    hs_sat26DF9d.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF9d);
                };
                var hs_sat26DF9f = new $hs.Data(1);
                hs_sat26DF9f.data = [hs_sat26DF9e, hs_mask26DEUP];
                return hs_newMutArray25t9SZ.hscall(hs_sat26DF9f, $hs.modules.GHCziTypes.hs_ZMZN);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DF9g, hs_sat26DF9c);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_recordNew25t9Tb, hs_sat26DF9h);
    };
    hs_sat26DF9i.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(7);
    };
    hs_hLOAD25t9Tz.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF9i);
    };
    hs_sat26DF9j.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(64);
    };
    hs_hYSTERESIS25t9TB.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF9j);
    };
    hs_tooBig25t9TN.evaluate = function (hs_k26DEVx, hs_b26DEVz) {
        var hs_sat26DF9k = new $hs.Thunk();
        hs_sat26DF9k.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_hLOAD25t9Tz, hs_b26DEVz);
        };
        var hs_sat26DF9l = new $hs.Thunk();
        hs_sat26DF9l.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_k26DEVx, hs_hYSTERESIS25t9TB);
        };
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32, hs_sat26DF9l, hs_sat26DF9k);
    };
    hs_powerOver25t9TH.evaluate = function (hs_n26DEVC) {
        var hs_wild26DF9n = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32, hs_n26DEVC, hs_tABLEzuMIN25t9Tx);
        switch (hs_wild26DF9n.tag) {
        case 1:
            var hs_wild126DF9m = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32, hs_n26DEVC, hs_tABLEzuMAX25t9Tv);
            switch (hs_wild126DF9m.tag) {
            case 1:
                var hs_v126DEVI = new $hs.Thunk();
                hs_v126DEVI.evaluateOnce = function () {
                    var hs_sat26DF9p = new $hs.Thunk();
                    hs_sat26DF9p.evaluateOnce = function () {
                        var hs_sat26DF9o = new $hs.Thunk();
                        hs_sat26DF9o.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF9o);
                    };
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_n26DEVC, hs_sat26DF9p);
                };
                var hs_v226DEVM = new $hs.Thunk();
                hs_v226DEVM.evaluateOnce = function () {
                    var hs_sat26DF9r = new $hs.Thunk();
                    hs_sat26DF9r.evaluateOnce = function () {
                        var hs_sat26DF9q = new $hs.Data(1);
                        hs_sat26DF9q.data = [1];
                        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32, hs_v126DEVI, hs_sat26DF9q);
                    };
                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32, hs_v126DEVI, hs_sat26DF9r);
                };
                var hs_v326DEVQ = new $hs.Thunk();
                hs_v326DEVQ.evaluateOnce = function () {
                    var hs_sat26DF9t = new $hs.Thunk();
                    hs_sat26DF9t.evaluateOnce = function () {
                        var hs_sat26DF9s = new $hs.Data(1);
                        hs_sat26DF9s.data = [2];
                        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32, hs_v226DEVM, hs_sat26DF9s);
                    };
                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32, hs_v226DEVM, hs_sat26DF9t);
                };
                var hs_v426DEVU = new $hs.Thunk();
                hs_v426DEVU.evaluateOnce = function () {
                    var hs_sat26DF9v = new $hs.Thunk();
                    hs_sat26DF9v.evaluateOnce = function () {
                        var hs_sat26DF9u = new $hs.Data(1);
                        hs_sat26DF9u.data = [4];
                        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32, hs_v326DEVQ, hs_sat26DF9u);
                    };
                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32, hs_v326DEVQ, hs_sat26DF9v);
                };
                var hs_v526DEVY = new $hs.Thunk();
                hs_v526DEVY.evaluateOnce = function () {
                    var hs_sat26DF9x = new $hs.Thunk();
                    hs_sat26DF9x.evaluateOnce = function () {
                        var hs_sat26DF9w = new $hs.Data(1);
                        hs_sat26DF9w.data = [8];
                        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32, hs_v426DEVU, hs_sat26DF9w);
                    };
                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32, hs_v426DEVU, hs_sat26DF9x);
                };
                var hs_sat26DF9z = new $hs.Thunk();
                hs_sat26DF9z.evaluateOnce = function () {
                    var hs_sat26DF9y = new $hs.Thunk();
                    hs_sat26DF9y.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF9y);
                };
                var hs_sat26DF9C = new $hs.Thunk();
                hs_sat26DF9C.evaluateOnce = function () {
                    var hs_sat26DF9B = new $hs.Thunk();
                    hs_sat26DF9B.evaluateOnce = function () {
                        var hs_sat26DF9A = new $hs.Data(1);
                        hs_sat26DF9A.data = [16];
                        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32, hs_v526DEVY, hs_sat26DF9A);
                    };
                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32, hs_v526DEVY, hs_sat26DF9B);
                };
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF9C, hs_sat26DF9z);
            case 2:
                if (hs_tABLEzuMAX25t9Tv.notEvaluated) {
                    return hs_tABLEzuMAX25t9Tv.hscall();
                } else {
                    return hs_tABLEzuMAX25t9Tv;
                }
            }
        case 2:
            if (hs_tABLEzuMIN25t9Tx.notEvaluated) {
                return hs_tABLEzuMIN25t9Tx.hscall();
            } else {
                return hs_tABLEzuMIN25t9Tx;
            }
        }
    };
    this.hs_newHint.evaluate = function (hs_cmpr26DEWA, hs_hash26DEWC, hs_minSizze26DEW8) {
        var hs_sat26DF9S = new $hs.Thunk();
        hs_sat26DF9S.evaluateOnce = function () {
            var hs_mask26DEWa = new $hs.Thunk();
            hs_mask26DEWa.evaluateOnce = function () {
                var hs_sat26DF9D = new $hs.Thunk();
                hs_sat26DF9D.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziInt.hs_zdfNumInt32, hs_minSizze26DEW8);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_powerOver25t9TH, hs_sat26DF9D);
            };
            var hs_sat26DF9N = new $hs.Func(1);
            hs_sat26DF9N.evaluate = function (hs_bkts26DEWl) {
                var hs_sat26DF9G = new $hs.Func(1);
                hs_sat26DF9G.evaluate = function (hs_table26DEWE) {
                    var hs_sat26DF9F = new $hs.Thunk();
                    hs_sat26DF9F.evaluateOnce = function () {
                        var hs_tpl26DEWH = hs_cmpr26DEWA;
                        if (hs_cmpr26DEWA.notEvaluated) {
                            hs_tpl26DEWH = hs_cmpr26DEWA.hscall();
                        }
                        var hs_tpl126DEWI = hs_hash26DEWC;
                        if (hs_hash26DEWC.notEvaluated) {
                            hs_tpl126DEWI = hs_hash26DEWC.hscall();
                        }
                        var hs_tpl226DF9E = hs_table26DEWE;
                        if (hs_table26DEWE.notEvaluated) {
                            hs_tpl226DF9E = hs_table26DEWE.hscall();
                        }
                        var hs_tpl326DEWJ = hs_tpl226DF9E.data[0];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_tpl26DEWH, hs_tpl126DEWI, hs_tpl326DEWJ];
                        return $res;
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DF9F);
                };
                var hs_sat26DF9M = new $hs.Thunk();
                hs_sat26DF9M.evaluateOnce = function () {
                    var hs_sat26DF9L = new $hs.Thunk();
                    hs_sat26DF9L.evaluateOnce = function () {
                        var hs_sat26DF9K = new $hs.Thunk();
                        hs_sat26DF9K.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        var hs_tpl26DF9J = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF9K);
                        var hs_tpl126DEWr = hs_tpl26DF9J.data[0];
                        var hs_tpl226DF9I = hs_mask26DEWa;
                        if (hs_mask26DEWa.notEvaluated) {
                            hs_tpl226DF9I = hs_mask26DEWa.hscall();
                        }
                        var hs_tpl326DEWs = hs_tpl226DF9I.data[0];
                        var hs_tpl426DF9H = hs_bkts26DEWl;
                        if (hs_bkts26DEWl.notEvaluated) {
                            hs_tpl426DF9H = hs_bkts26DEWl.hscall();
                        }
                        var hs_tpl526DEWt = hs_tpl426DF9H.data[0];
                        var hs_tpl626DEWu = hs_tpl426DF9H.data[1];
                        var hs_tpl726DEWv = hs_tpl426DF9H.data[2];
                        var hs_tpl826DEWw = hs_tpl426DF9H.data[3];
                        var $res = new $hs.Data(1);
                        $res.data = [hs_tpl126DEWr, hs_tpl326DEWs, hs_tpl526DEWt, hs_tpl626DEWu, hs_tpl726DEWv, hs_tpl826DEWw];
                        return $res;
                    };
                    return $hs.modules.GHCziIORef.hs_newIORef.hscall(hs_sat26DF9L);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DF9M, hs_sat26DF9G);
            };
            var hs_sat26DF9R = new $hs.Thunk();
            hs_sat26DF9R.evaluateOnce = function () {
                var hs_sat26DF9P = new $hs.Thunk();
                hs_sat26DF9P.evaluateOnce = function () {
                    var hs_sat26DF9O = new $hs.Thunk();
                    hs_sat26DF9O.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DF9O);
                };
                var hs_sat26DF9Q = new $hs.Data(1);
                hs_sat26DF9Q.data = [hs_sat26DF9P, hs_mask26DEWa];
                return hs_newMutArray25t9SZ.hscall(hs_sat26DF9Q, $hs.modules.GHCziTypes.hs_ZMZN);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DF9R, hs_sat26DF9N);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_recordNew25t9Tb, hs_sat26DF9S);
    };
    this.hs_lookup.evaluate = function (hs_ht26DEWQ, hs_key26DEXd) {
        var hs_wild26DEWV = hs_ht26DEWQ;
        if (hs_ht26DEWQ.notEvaluated) {
            hs_wild26DEWV = hs_ht26DEWQ.hscall();
        }
        var hs_ds26DEXK = hs_wild26DEWV.data[0];
        var hs_sat26DFah = new $hs.Thunk();
        hs_sat26DFah.evaluateOnce = function () {
            var hs_sat26DFa5 = new $hs.Func(1);
            hs_sat26DFa5.evaluate = function (hs_ds226DEXy) {
                var hs_wild126DF9W = hs_ds226DEXy;
                if (hs_ds226DEXy.notEvaluated) {
                    hs_wild126DF9W = hs_ds226DEXy.hscall();
                }
                var hs_bucket26DEXP = hs_wild126DF9W.data[2];
                var hs_sat26DFa1 = new $hs.Thunk();
                hs_sat26DFa1.evaluateOnce = function () {
                    var hs_sat26DFa0 = new $hs.Func(2);
                    hs_sat26DFa0.evaluate = function (hs_ds526DEXF, hs_r26DEXM) {
                        var hs_wild226DF9U = hs_ds526DEXF;
                        if (hs_ds526DEXF.notEvaluated) {
                            hs_wild226DF9U = hs_ds526DEXF.hscall();
                        }
                        var hs_k26DEXJ = hs_wild226DF9U.data[0];
                        var hs_v26DEXN = hs_wild226DF9U.data[1];
                        var hs_wild326DF9T = hs_ds26DEXK.hscall(hs_key26DEXd, hs_k26DEXJ);
                        switch (hs_wild326DF9T.tag) {
                        case 1:
                            if (hs_r26DEXM.notEvaluated) {
                                return hs_r26DEXM.hscall();
                            } else {
                                return hs_r26DEXM;
                            }
                        case 2:
                            var $res = new $hs.Data(2);
                            $res.data = [hs_v26DEXN];
                            return $res;
                        }
                    };
                    return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DFa0, $hs.modules.DataziMaybe.hs_Nothing, hs_bucket26DEXP);
                };
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFa1);
            };
            var hs_sat26DFag = new $hs.Thunk();
            hs_sat26DFag.evaluateOnce = function () {
                var hs_wild126DFa4 = hs_wild26DEWV;
                if (hs_wild26DEWV.notEvaluated) {
                    hs_wild126DFa4 = hs_wild26DEWV.hscall();
                }
                var hs_ds326DEXe = hs_wild126DFa4.data[1];
                var hs_rb126DEX0 = hs_wild126DFa4.data[2];
                var hs_sat26DFad = new $hs.Func(1);
                hs_sat26DFad.evaluate = function (hs_table26DEX4) {
                    var hs_wild226DEXr = hs_table26DEX4;
                    if (hs_table26DEX4.notEvaluated) {
                        hs_wild226DEXr = hs_table26DEX4.hscall();
                    }
                    var hs_rb326DEXg = hs_wild226DEXr.data[1];
                    var hs_rb426DEXj = hs_wild226DEXr.data[2];
                    var hs_rb526DEXk = hs_wild226DEXr.data[3];
                    var hs_rb626DEXl = hs_wild226DEXr.data[4];
                    var hs_rb726DEXm = hs_wild226DEXr.data[5];
                    var hs_indx26DEXi = new $hs.Thunk();
                    hs_indx26DEXi.evaluateOnce = function () {
                        var hs_sat26DFa6 = new $hs.Data(1);
                        hs_sat26DFa6.data = [hs_rb326DEXg];
                        var hs_sat26DFa7 = new $hs.Thunk();
                        hs_sat26DFa7.evaluateOnce = function () {
                            return hs_ds326DEXe.hscall(hs_key26DEXd);
                        };
                        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32, hs_sat26DFa7, hs_sat26DFa6);
                    };
                    var hs_sat26DFa9 = new $hs.Func(1);
                    hs_sat26DFa9.evaluate = function (hs_bucket26DEXs) {
                        var hs_sat26DFa8 = new $hs.Data(1);
                        hs_sat26DFa8.data = [hs_wild226DEXr, hs_indx26DEXi, hs_bucket26DEXs];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFa8);
                    };
                    var hs_sat26DFac = new $hs.Thunk();
                    hs_sat26DFac.evaluateOnce = function () {
                        var hs_sat26DFaa = new $hs.Thunk();
                        hs_sat26DFaa.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32, $hs.modules.GHCziNum.hs_zdfNumInt, hs_indx26DEXi);
                        };
                        var hs_sat26DFab = new $hs.Data(1);
                        hs_sat26DFab.data = [hs_rb426DEXj, hs_rb526DEXk, hs_rb626DEXl, hs_rb726DEXm];
                        return $hs.modules.GHCziIOArray.hs_unsafeReadIOArray.hscall($hs.modules.GHCziInt.hs_zdfIxInt32, hs_sat26DFab, hs_sat26DFaa);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFac, hs_sat26DFa9);
                };
                var hs_sat26DFaf = new $hs.Thunk();
                hs_sat26DFaf.evaluateOnce = function () {
                    var hs_sat26DFae = new $hs.Data(1);
                    hs_sat26DFae.data = [hs_rb126DEX0];
                    return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26DFae);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFaf, hs_sat26DFad);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFag, hs_sat26DFa5);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_recordLookup25t9Th, hs_sat26DFah);
    };
    hs_expandHashTable25t9TV.evaluate = function (hs_hash26DEYF, hs_table26DEXV) {
        var hs_wild26DEZ7 = hs_table26DEXV;
        if (hs_table26DEXV.notEvaluated) {
            hs_wild26DEZ7 = hs_table26DEXV.hscall();
        }
        var hs_rb126DEYa = hs_wild26DEZ7.data[1];
        var hs_rb226DEY4 = hs_wild26DEZ7.data[2];
        var hs_rb326DEY5 = hs_wild26DEZ7.data[3];
        var hs_rb426DEY6 = hs_wild26DEZ7.data[4];
        var hs_rb526DEY7 = hs_wild26DEZ7.data[5];
        var hs_a126DEY8 = new $hs.Data(1);
        hs_a126DEY8.data = [hs_rb226DEY4, hs_rb326DEY5, hs_rb426DEY6, hs_rb526DEY7];
        var hs_mask26DEYb = new $hs.Data(1);
        hs_mask26DEYb.data = [hs_rb126DEYa];
        var hs_newmask26DEYg = new $hs.Thunk();
        hs_newmask26DEYg.evaluateOnce = function () {
            var hs_sat26DFak = new $hs.Thunk();
            hs_sat26DFak.evaluateOnce = function () {
                var hs_sat26DFaj = new $hs.Thunk();
                hs_sat26DFaj.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DFaj);
            };
            var hs_sat26DFal = new $hs.Thunk();
            hs_sat26DFal.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_mask26DEYb, hs_mask26DEYb);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DFal, hs_sat26DFak);
        };
        var hs_oldsizze26DEYk = new $hs.Thunk();
        hs_oldsizze26DEYk.evaluateOnce = function () {
            var hs_sat26DFan = new $hs.Thunk();
            hs_sat26DFan.evaluateOnce = function () {
                var hs_sat26DFam = new $hs.Thunk();
                hs_sat26DFam.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DFam);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_mask26DEYb, hs_sat26DFan);
        };
        var hs_sat26DFb5 = new $hs.Thunk();
        hs_sat26DFb5.evaluateOnce = function () {
            var hs_sat26DFau = new $hs.Thunk();
            hs_sat26DFau.evaluateOnce = function () {
                var hs_sat26DFap = new $hs.Thunk();
                hs_sat26DFap.evaluateOnce = function () {
                    var hs_sat26DFao = new $hs.Thunk();
                    hs_sat26DFao.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DFao);
                };
                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_tABLEzuMAX25t9Tv, hs_sat26DFap);
            };
            var hs_wild126DFat = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32, hs_newmask26DEYg, hs_sat26DFau);
            switch (hs_wild126DFat.tag) {
            case 1:
                var hs_sat26DFb0 = new $hs.Func(1);
                hs_sat26DFb0.evaluate = function (hs_newbkts26DEYL) {
                    var hs_sat26DFaB = new $hs.Thunk();
                    hs_sat26DFaB.evaluateOnce = function () {
                        var hs_sat26DFaA = new $hs.Thunk();
                        hs_sat26DFaA.evaluateOnce = function () {
                            var hs_wild226DFas = hs_wild26DEZ7;
                            if (hs_wild26DEZ7.notEvaluated) {
                                hs_wild226DFas = hs_wild26DEZ7.hscall();
                            }
                            var hs_rb626DEZm = hs_wild226DFas.data[0];
                            var hs_tpl26DFar = hs_newmask26DEYg;
                            if (hs_newmask26DEYg.notEvaluated) {
                                hs_tpl26DFar = hs_newmask26DEYg.hscall();
                            }
                            var hs_tpl126DEZn = hs_tpl26DFar.data[0];
                            var hs_tpl226DFaq = hs_newbkts26DEYL;
                            if (hs_newbkts26DEYL.notEvaluated) {
                                hs_tpl226DFaq = hs_newbkts26DEYL.hscall();
                            }
                            var hs_tpl326DEZo = hs_tpl226DFaq.data[0];
                            var hs_tpl426DEZp = hs_tpl226DFaq.data[1];
                            var hs_tpl526DEZq = hs_tpl226DFaq.data[2];
                            var hs_tpl626DEZr = hs_tpl226DFaq.data[3];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_rb626DEZm, hs_tpl126DEZn, hs_tpl326DEZo, hs_tpl426DEZp, hs_tpl526DEZq, hs_tpl626DEZr];
                            return $res;
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFaA);
                    };
                    var hs_sat26DFaZ = new $hs.Thunk();
                    hs_sat26DFaZ.evaluateOnce = function () {
                        var hs_sat26DFaE = new $hs.Thunk();
                        hs_sat26DFaE.evaluateOnce = function () {
                            var hs_sat26DFaD = new $hs.Thunk();
                            hs_sat26DFaD.evaluateOnce = function () {
                                var hs_sat26DFaC = new $hs.Thunk();
                                hs_sat26DFaC.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DFaC);
                            };
                            return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32, hs_sat26DFaD, hs_mask26DEYb);
                        };
                        var hs_sat26DFaY = new $hs.Func(1);
                        hs_sat26DFaY.evaluate = function (hs_oldindex26DEYw) {
                            var hs_sat26DFaV = new $hs.Func(1);
                            hs_sat26DFaV.evaluate = function (hs_bucket26DEYJ) {
                                var hs_ds26DEYK = new $hs.Thunk();
                                hs_ds26DEYK.evaluateOnce = function () {
                                    var hs_sat26DFaJ = new $hs.Thunk();
                                    hs_sat26DFaJ.evaluateOnce = function () {
                                        var hs_sat26DFaH = new $hs.Thunk();
                                        hs_sat26DFaH.evaluateOnce = function () {
                                            var hs_sat26DFaF = new $hs.Thunk();
                                            hs_sat26DFaF.evaluateOnce = function () {
                                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_hash26DEYF, $hs.modules.DataziTuple.hs_fst);
                                            };
                                            var hs_sat26DFaG = new $hs.Func(1);
                                            hs_sat26DFaG.evaluate = function (hs_h26DEYD) {
                                                return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32, hs_h26DEYD, hs_newmask26DEYg);
                                            };
                                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DFaG, hs_sat26DFaF);
                                        };
                                        var hs_sat26DFaI = new $hs.Thunk();
                                        hs_sat26DFaI.evaluateOnce = function () {
                                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_oldindex26DEYw);
                                        };
                                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DFaI, hs_sat26DFaH);
                                    };
                                    return $hs.modules.DataziList.hs_partition.hscall(hs_sat26DFaJ, hs_bucket26DEYJ);
                                };
                                var hs_sat26DFaQ = new $hs.Thunk();
                                hs_sat26DFaQ.evaluateOnce = function () {
                                    var hs_sat26DFaM = new $hs.Thunk();
                                    hs_sat26DFaM.evaluateOnce = function () {
                                        var hs_wild226DFaL = hs_ds26DEYK;
                                        if (hs_ds26DEYK.notEvaluated) {
                                            hs_wild226DFaL = hs_ds26DEYK.hscall();
                                        }
                                        var hs_newb26DEYY = hs_wild226DFaL.data[1];
                                        if (hs_newb26DEYY.notEvaluated) {
                                            return hs_newb26DEYY.hscall();
                                        } else {
                                            return hs_newb26DEYY;
                                        }
                                    };
                                    var hs_sat26DFaO = new $hs.Thunk();
                                    hs_sat26DFaO.evaluateOnce = function () {
                                        var hs_sat26DFaN = new $hs.Thunk();
                                        hs_sat26DFaN.evaluateOnce = function () {
                                            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_oldindex26DEYw, hs_oldsizze26DEYk);
                                        };
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DFaN);
                                    };
                                    return $hs.modules.GHCziIOArray.hs_unsafeWriteIOArray.hscall($hs.modules.GHCziInt.hs_zdfIxInt32, hs_newbkts26DEYL, hs_sat26DFaO, hs_sat26DFaM);
                                };
                                var hs_sat26DFaU = new $hs.Thunk();
                                hs_sat26DFaU.evaluateOnce = function () {
                                    var hs_sat26DFaS = new $hs.Thunk();
                                    hs_sat26DFaS.evaluateOnce = function () {
                                        var hs_wild226DFaP = hs_ds26DEYK;
                                        if (hs_ds26DEYK.notEvaluated) {
                                            hs_wild226DFaP = hs_ds26DEYK.hscall();
                                        }
                                        var hs_oldb26DEYQ = hs_wild226DFaP.data[0];
                                        if (hs_oldb26DEYQ.notEvaluated) {
                                            return hs_oldb26DEYQ.hscall();
                                        } else {
                                            return hs_oldb26DEYQ;
                                        }
                                    };
                                    var hs_sat26DFaT = new $hs.Thunk();
                                    hs_sat26DFaT.evaluateOnce = function () {
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32, $hs.modules.GHCziNum.hs_zdfNumInt, hs_oldindex26DEYw);
                                    };
                                    return $hs.modules.GHCziIOArray.hs_unsafeWriteIOArray.hscall($hs.modules.GHCziInt.hs_zdfIxInt32, hs_newbkts26DEYL, hs_sat26DFaT, hs_sat26DFaS);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFaU, hs_sat26DFaQ);
                            };
                            var hs_sat26DFaX = new $hs.Thunk();
                            hs_sat26DFaX.evaluateOnce = function () {
                                var hs_sat26DFaW = new $hs.Thunk();
                                hs_sat26DFaW.evaluateOnce = function () {
                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32, $hs.modules.GHCziNum.hs_zdfNumInt, hs_oldindex26DEYw);
                                };
                                return $hs.modules.GHCziIOArray.hs_unsafeReadIOArray.hscall($hs.modules.GHCziInt.hs_zdfIxInt32, hs_a126DEY8, hs_sat26DFaW);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFaX, hs_sat26DFaV);
                        };
                        return $hs.modules.ControlziMonad.hs_mapMzu.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFaY, hs_sat26DFaE);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFaZ, hs_sat26DFaB);
                };
                var hs_sat26DFb4 = new $hs.Thunk();
                hs_sat26DFb4.evaluateOnce = function () {
                    var hs_sat26DFb2 = new $hs.Thunk();
                    hs_sat26DFb2.evaluateOnce = function () {
                        var hs_sat26DFb1 = new $hs.Thunk();
                        hs_sat26DFb1.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DFb1);
                    };
                    var hs_sat26DFb3 = new $hs.Data(1);
                    hs_sat26DFb3.data = [hs_sat26DFb2, hs_newmask26DEYg];
                    return hs_newMutArray25t9SZ.hscall(hs_sat26DFb3, $hs.modules.GHCziTypes.hs_ZMZN);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFb4, hs_sat26DFb0);
            case 2:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_wild26DEZ7);
            }
        };
        var hs_sat26DFb6 = new $hs.Thunk();
        hs_sat26DFb6.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFb6, hs_sat26DFb5);
    };
    this.hs_insert.evaluate = function (hs_ht26DEZz, hs_key26DEZT, hs_val26DF0E) {
        var hs_wild26DFb8 = hs_ht26DEZz;
        if (hs_ht26DEZz.notEvaluated) {
            hs_wild26DFb8 = hs_ht26DEZz.hscall();
        }
        var hs_ds126DEZU = hs_wild26DFb8.data[1];
        var hs_rb26DEZF = hs_wild26DFb8.data[2];
        var hs_a126DEZG = new $hs.Data(1);
        hs_a126DEZG.data = [hs_rb26DEZF];
        var hs_sat26DFbG = new $hs.Func(1);
        hs_sat26DFbG.evaluate = function (hs_ds226DF0e) {
            var hs_wild126DFba = hs_ds226DF0e;
            if (hs_ds226DF0e.notEvaluated) {
                hs_wild126DFba = hs_ds226DF0e.hscall();
            }
            var hs_table26DF0j = hs_wild126DFba.data[0];
            var hs_indx26DF0V = hs_wild126DFba.data[1];
            var hs_bckt26DF0G = hs_wild126DFba.data[2];
            var hs_wild226DFb9 = hs_table26DF0j;
            if (hs_table26DF0j.notEvaluated) {
                hs_wild226DFb9 = hs_table26DF0j.hscall();
            }
            var hs_rb126DF0s = hs_wild226DFb9.data[0];
            var hs_rb226DF0B = hs_wild226DFb9.data[1];
            var hs_rb326DF0v = hs_wild226DFb9.data[2];
            var hs_rb426DF0w = hs_wild226DFb9.data[3];
            var hs_rb526DF0x = hs_wild226DFb9.data[4];
            var hs_rb626DF0y = hs_wild226DFb9.data[5];
            var hs_k26DF0t = new $hs.Data(1);
            hs_k26DF0t.data = [hs_rb126DF0s];
            var hs_a226DF0z = new $hs.Data(1);
            hs_a226DF0z.data = [hs_rb326DF0v, hs_rb426DF0w, hs_rb526DF0x, hs_rb626DF0y];
            var hs_b26DF0C = new $hs.Data(1);
            hs_b26DF0C.data = [hs_rb226DF0B];
            var hs_sat26DFbx = new $hs.Func(1);
            hs_sat26DFbx.evaluate = function (hs_ds326DF0N) {
                var hs_wild326DFbb = hs_ds326DF0N;
                if (hs_ds326DF0N.notEvaluated) {
                    hs_wild326DFbb = hs_ds326DF0N.hscall();
                }
                var hs_bcktzq26DF0X = hs_wild326DFbb.data[0];
                var hs_inserts26DF0T = hs_wild326DFbb.data[1];
                var hs_result26DF1n = hs_wild326DFbb.data[2];
                var hs_kzq26DF0U = new $hs.Thunk();
                hs_kzq26DF0U.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_k26DF0t, hs_inserts26DF0T);
                };
                var hs_sat26DFbu = new $hs.Thunk();
                hs_sat26DFbu.evaluateOnce = function () {
                    var hs_sat26DFbe = new $hs.Func(1);
                    hs_sat26DFbe.evaluate = function (hs_table226DF1l) {
                        var hs_sat26DFbc = new $hs.Thunk();
                        hs_sat26DFbc.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_result26DF1n);
                        };
                        var hs_sat26DFbd = new $hs.Thunk();
                        hs_sat26DFbd.evaluateOnce = function () {
                            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126DEZG, hs_table226DF1l);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFbd, hs_sat26DFbc);
                    };
                    var hs_sat26DFbt = new $hs.Thunk();
                    hs_sat26DFbt.evaluateOnce = function () {
                        var hs_sat26DFbh = new $hs.Thunk();
                        hs_sat26DFbh.evaluateOnce = function () {
                            var hs_sat26DFbg = new $hs.Thunk();
                            hs_sat26DFbg.evaluateOnce = function () {
                                var hs_sat26DFbf = new $hs.Thunk();
                                hs_sat26DFbf.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DFbf);
                            };
                            return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32, hs_inserts26DF0T, hs_sat26DFbg);
                        };
                        var hs_sat26DFbk = new $hs.Thunk();
                        hs_sat26DFbk.evaluateOnce = function () {
                            return 0 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                        };
                        var hs_wild426DFbj = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DFbk, hs_sat26DFbh);
                        switch (hs_wild426DFbj.tag) {
                        case 1:
                            var hs_sat26DFbl = new $hs.Thunk();
                            hs_sat26DFbl.evaluateOnce = function () {
                                var hs_tpl26DFbi = hs_kzq26DF0U;
                                if (hs_kzq26DF0U.notEvaluated) {
                                    hs_tpl26DFbi = hs_kzq26DF0U.hscall();
                                }
                                var hs_tpl126DF16 = hs_tpl26DFbi.data[0];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_tpl126DF16, hs_rb226DF0B, hs_rb326DF0v, hs_rb426DF0w, hs_rb526DF0x, hs_rb626DF0y];
                                return $res;
                            };
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFbl);
                        case 2:
                            var hs_sat26DFbr = new $hs.Thunk();
                            hs_sat26DFbr.evaluateOnce = function () {
                                var hs_wild526DFbn = hs_tooBig25t9TN.hscall(hs_kzq26DF0U, hs_b26DF0C);
                                switch (hs_wild526DFbn.tag) {
                                case 1:
                                    var hs_sat26DFbo = new $hs.Thunk();
                                    hs_sat26DFbo.evaluateOnce = function () {
                                        var hs_tpl26DFbm = hs_kzq26DF0U;
                                        if (hs_kzq26DF0U.notEvaluated) {
                                            hs_tpl26DFbm = hs_kzq26DF0U.hscall();
                                        }
                                        var hs_tpl126DF1c = hs_tpl26DFbm.data[0];
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_tpl126DF1c, hs_rb226DF0B, hs_rb326DF0v, hs_rb426DF0w, hs_rb526DF0x, hs_rb626DF0y];
                                        return $res;
                                    };
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFbo);
                                case 2:
                                    var hs_sat26DFbq = new $hs.Thunk();
                                    hs_sat26DFbq.evaluateOnce = function () {
                                        var hs_tpl26DFbp = hs_kzq26DF0U;
                                        if (hs_kzq26DF0U.notEvaluated) {
                                            hs_tpl26DFbp = hs_kzq26DF0U.hscall();
                                        }
                                        var hs_tpl126DF1g = hs_tpl26DFbp.data[0];
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_tpl126DF1g, hs_rb226DF0B, hs_rb326DF0v, hs_rb426DF0w, hs_rb526DF0x, hs_rb626DF0y];
                                        return $res;
                                    };
                                    return hs_expandHashTable25t9TV.hscall(hs_ds126DEZU, hs_sat26DFbq);
                                }
                            };
                            var hs_sat26DFbs = new $hs.Thunk();
                            hs_sat26DFbs.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFbs, hs_sat26DFbr);
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFbt, hs_sat26DFbe);
                };
                var hs_sat26DFbw = new $hs.Thunk();
                hs_sat26DFbw.evaluateOnce = function () {
                    var hs_sat26DFbv = new $hs.Thunk();
                    hs_sat26DFbv.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32, $hs.modules.GHCziNum.hs_zdfNumInt, hs_indx26DF0V);
                    };
                    return $hs.modules.GHCziIOArray.hs_unsafeWriteIOArray.hscall($hs.modules.GHCziInt.hs_zdfIxInt32, hs_a226DF0z, hs_sat26DFbv, hs_bcktzq26DF0X);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFbw, hs_sat26DFbu);
            };
            var hs_sat26DFbE = new $hs.Thunk();
            hs_sat26DFbE.evaluateOnce = function () {
                var hs_sat26DFbz = new $hs.Thunk();
                hs_sat26DFbz.evaluateOnce = function () {
                    var hs_sat26DFby = new $hs.Thunk();
                    hs_sat26DFby.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DFby);
                };
                var hs_sat26DFbA = new $hs.Data(1);
                hs_sat26DFbA.data = [hs_key26DEZT, hs_val26DF0E];
                var hs_sat26DFbB = new $hs.Data(2);
                hs_sat26DFbB.data = [hs_sat26DFbA, hs_bckt26DF0G];
                var hs_sat26DFbC = new $hs.Data(1);
                hs_sat26DFbC.data = [hs_sat26DFbB, hs_sat26DFbz, $hs.modules.GHCziUnit.hs_Z0T];
                var hs_sat26DFbD = new $hs.Thunk();
                hs_sat26DFbD.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DFbD, hs_sat26DFbC);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFbE, hs_sat26DFbx);
        };
        var hs_sat26DFbR = new $hs.Thunk();
        hs_sat26DFbR.evaluateOnce = function () {
            var hs_sat26DFbO = new $hs.Func(1);
            hs_sat26DFbO.evaluate = function (hs_table26DEZK) {
                var hs_wild126DF07 = hs_table26DEZK;
                if (hs_table26DEZK.notEvaluated) {
                    hs_wild126DF07 = hs_table26DEZK.hscall();
                }
                var hs_rb226DEZW = hs_wild126DF07.data[1];
                var hs_rb326DEZZ = hs_wild126DF07.data[2];
                var hs_rb426DF00 = hs_wild126DF07.data[3];
                var hs_rb526DF01 = hs_wild126DF07.data[4];
                var hs_rb626DF02 = hs_wild126DF07.data[5];
                var hs_indx26DEZY = new $hs.Thunk();
                hs_indx26DEZY.evaluateOnce = function () {
                    var hs_sat26DFbH = new $hs.Data(1);
                    hs_sat26DFbH.data = [hs_rb226DEZW];
                    var hs_sat26DFbI = new $hs.Thunk();
                    hs_sat26DFbI.evaluateOnce = function () {
                        return hs_ds126DEZU.hscall(hs_key26DEZT);
                    };
                    return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32, hs_sat26DFbI, hs_sat26DFbH);
                };
                var hs_sat26DFbK = new $hs.Func(1);
                hs_sat26DFbK.evaluate = function (hs_bucket26DF08) {
                    var hs_sat26DFbJ = new $hs.Data(1);
                    hs_sat26DFbJ.data = [hs_wild126DF07, hs_indx26DEZY, hs_bucket26DF08];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFbJ);
                };
                var hs_sat26DFbN = new $hs.Thunk();
                hs_sat26DFbN.evaluateOnce = function () {
                    var hs_sat26DFbL = new $hs.Thunk();
                    hs_sat26DFbL.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32, $hs.modules.GHCziNum.hs_zdfNumInt, hs_indx26DEZY);
                    };
                    var hs_sat26DFbM = new $hs.Data(1);
                    hs_sat26DFbM.data = [hs_rb326DEZZ, hs_rb426DF00, hs_rb526DF01, hs_rb626DF02];
                    return $hs.modules.GHCziIOArray.hs_unsafeReadIOArray.hscall($hs.modules.GHCziInt.hs_zdfIxInt32, hs_sat26DFbM, hs_sat26DFbL);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFbN, hs_sat26DFbK);
            };
            var hs_sat26DFbQ = new $hs.Thunk();
            hs_sat26DFbQ.evaluateOnce = function () {
                var hs_sat26DFbP = new $hs.Data(1);
                hs_sat26DFbP.data = [hs_rb26DEZF];
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26DFbP);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFbQ, hs_sat26DFbO);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFbR, hs_sat26DFbG);
    };
    this.hs_fromList.evaluate = function (hs_zddEq26DF1w, hs_hash26DF1y, hs_list26DF1S) {
        var hs_sat26DFbZ = new $hs.Func(1);
        hs_sat26DFbZ.evaluate = function (hs_table26DF1L) {
            var hs_sat26DFbT = new $hs.Thunk();
            hs_sat26DFbT.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_table26DF1L);
            };
            var hs_sat26DFbY = new $hs.Thunk();
            hs_sat26DFbY.evaluateOnce = function () {
                var hs_sat26DFbX = new $hs.Thunk();
                hs_sat26DFbX.evaluateOnce = function () {
                    var hs_ds26DF1Q = new $hs.Func(1);
                    hs_ds26DF1Q.evaluate = function (hs_ds126DF1D) {
                        var hs_ds226DFbS = hs_ds126DF1D;
                        if (hs_ds126DF1D.notEvaluated) {
                            hs_ds226DFbS = hs_ds126DF1D.hscall();
                        }
                        switch (hs_ds226DFbS.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_ds326DF1H = hs_ds226DFbS.data[0];
                            var hs_ds426DF1P = hs_ds226DFbS.data[1];
                            var hs_wild26DFbU = hs_ds326DF1H;
                            if (hs_ds326DF1H.notEvaluated) {
                                hs_wild26DFbU = hs_ds326DF1H.hscall();
                            }
                            var hs_k26DF1M = hs_wild26DFbU.data[0];
                            var hs_v26DF1N = hs_wild26DFbU.data[1];
                            var hs_sat26DFbV = new $hs.Thunk();
                            hs_sat26DFbV.evaluateOnce = function () {
                                return hs_ds26DF1Q.hscall(hs_ds426DF1P);
                            };
                            var hs_sat26DFbW = new $hs.Thunk();
                            hs_sat26DFbW.evaluateOnce = function () {
                                return $hs.modules.DataziHashTable.hs_insert.hscall(hs_table26DF1L, hs_k26DF1M, hs_v26DF1N);
                            };
                            var $res = new $hs.Data(2);
                            $res.data = [hs_sat26DFbW, hs_sat26DFbV];
                            return $res;
                        }
                    };
                    return hs_ds26DF1Q.hscall(hs_list26DF1S);
                };
                return $hs.modules.ControlziMonad.hs_sequencezu.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFbX);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFbY, hs_sat26DFbT);
        };
        var hs_sat26DFc1 = new $hs.Thunk();
        hs_sat26DFc1.evaluateOnce = function () {
            var hs_sat26DFc0 = new $hs.Thunk();
            hs_sat26DFc0.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DF1w);
            };
            return $hs.modules.DataziHashTable.hs_new.hscall(hs_sat26DFc0, hs_hash26DF1y);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFc1, hs_sat26DFbZ);
    };
    this.hs_delete.evaluate = function (hs_ht26DF1Z, hs_key26DF25) {
        var hs_wild26DF28 = hs_ht26DF1Z;
        if (hs_ht26DF1Z.notEvaluated) {
            hs_wild26DF28 = hs_ht26DF1Z.hscall();
        }
        var hs_ds26DF26 = hs_wild26DF28.data[0];
        var hs_a126DF27 = new $hs.Thunk();
        hs_a126DF27.evaluateOnce = function () {
            return hs_ds26DF26.hscall(hs_key26DF25);
        };
        var hs_wild126DFc5 = hs_wild26DF28;
        if (hs_wild26DF28.notEvaluated) {
            hs_wild126DFc5 = hs_wild26DF28.hscall();
        }
        var hs_ds326DF2s = hs_wild126DFc5.data[1];
        var hs_rb126DF2e = hs_wild126DFc5.data[2];
        var hs_a226DF2f = new $hs.Data(1);
        hs_a226DF2f.data = [hs_rb126DF2e];
        var hs_sat26DFcz = new $hs.Func(1);
        hs_sat26DFcz.evaluate = function (hs_ds426DF2M) {
            var hs_wild226DFc7 = hs_ds426DF2M;
            if (hs_ds426DF2M.notEvaluated) {
                hs_wild226DFc7 = hs_ds426DF2M.hscall();
            }
            var hs_table26DF2R = hs_wild226DFc7.data[0];
            var hs_indx26DF3o = hs_wild226DFc7.data[1];
            var hs_bckt26DF3c = hs_wild226DFc7.data[2];
            var hs_wild326DFc6 = hs_table26DF2R;
            if (hs_table26DF2R.notEvaluated) {
                hs_wild326DFc6 = hs_table26DF2R.hscall();
            }
            var hs_rb226DF30 = hs_wild326DFc6.data[0];
            var hs_rb326DF39 = hs_wild326DFc6.data[1];
            var hs_rb426DF33 = hs_wild326DFc6.data[2];
            var hs_rb526DF34 = hs_wild326DFc6.data[3];
            var hs_rb626DF35 = hs_wild326DFc6.data[4];
            var hs_rb726DF36 = hs_wild326DFc6.data[5];
            var hs_k26DF31 = new $hs.Data(1);
            hs_k26DF31.data = [hs_rb226DF30];
            var hs_a326DF37 = new $hs.Data(1);
            hs_a326DF37.data = [hs_rb426DF33, hs_rb526DF34, hs_rb626DF35, hs_rb726DF36];
            var hs_b26DF3a = new $hs.Data(1);
            hs_b26DF3a.data = [hs_rb326DF39];
            var hs_sat26DFcu = new $hs.Func(1);
            hs_sat26DFcu.evaluate = function (hs_ds526DF3g) {
                var hs_wild426DFc8 = hs_ds526DF3g;
                if (hs_ds526DF3g.notEvaluated) {
                    hs_wild426DFc8 = hs_ds526DF3g.hscall();
                }
                var hs_bcktzq26DF3q = hs_wild426DFc8.data[0];
                var hs_inserts26DF3m = hs_wild426DFc8.data[1];
                var hs_result26DF3Q = hs_wild426DFc8.data[2];
                var hs_kzq26DF3n = new $hs.Thunk();
                hs_kzq26DF3n.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_k26DF31, hs_inserts26DF3m);
                };
                var hs_sat26DFcr = new $hs.Thunk();
                hs_sat26DFcr.evaluateOnce = function () {
                    var hs_sat26DFcb = new $hs.Func(1);
                    hs_sat26DFcb.evaluate = function (hs_table226DF3O) {
                        var hs_sat26DFc9 = new $hs.Thunk();
                        hs_sat26DFc9.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_result26DF3Q);
                        };
                        var hs_sat26DFca = new $hs.Thunk();
                        hs_sat26DFca.evaluateOnce = function () {
                            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a226DF2f, hs_table226DF3O);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFca, hs_sat26DFc9);
                    };
                    var hs_sat26DFcq = new $hs.Thunk();
                    hs_sat26DFcq.evaluateOnce = function () {
                        var hs_sat26DFce = new $hs.Thunk();
                        hs_sat26DFce.evaluateOnce = function () {
                            var hs_sat26DFcd = new $hs.Thunk();
                            hs_sat26DFcd.evaluateOnce = function () {
                                var hs_sat26DFcc = new $hs.Thunk();
                                hs_sat26DFcc.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DFcc);
                            };
                            return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32, hs_inserts26DF3m, hs_sat26DFcd);
                        };
                        var hs_sat26DFch = new $hs.Thunk();
                        hs_sat26DFch.evaluateOnce = function () {
                            return 1 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                        };
                        var hs_wild526DFcg = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DFch, hs_sat26DFce);
                        switch (hs_wild526DFcg.tag) {
                        case 1:
                            var hs_sat26DFci = new $hs.Thunk();
                            hs_sat26DFci.evaluateOnce = function () {
                                var hs_tpl26DFcf = hs_kzq26DF3n;
                                if (hs_kzq26DF3n.notEvaluated) {
                                    hs_tpl26DFcf = hs_kzq26DF3n.hscall();
                                }
                                var hs_tpl126DF3z = hs_tpl26DFcf.data[0];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_tpl126DF3z, hs_rb326DF39, hs_rb426DF33, hs_rb526DF34, hs_rb626DF35, hs_rb726DF36];
                                return $res;
                            };
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFci);
                        case 2:
                            var hs_sat26DFco = new $hs.Thunk();
                            hs_sat26DFco.evaluateOnce = function () {
                                var hs_wild626DFck = hs_tooBig25t9TN.hscall(hs_kzq26DF3n, hs_b26DF3a);
                                switch (hs_wild626DFck.tag) {
                                case 1:
                                    var hs_sat26DFcl = new $hs.Thunk();
                                    hs_sat26DFcl.evaluateOnce = function () {
                                        var hs_tpl26DFcj = hs_kzq26DF3n;
                                        if (hs_kzq26DF3n.notEvaluated) {
                                            hs_tpl26DFcj = hs_kzq26DF3n.hscall();
                                        }
                                        var hs_tpl126DF3F = hs_tpl26DFcj.data[0];
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_tpl126DF3F, hs_rb326DF39, hs_rb426DF33, hs_rb526DF34, hs_rb626DF35, hs_rb726DF36];
                                        return $res;
                                    };
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFcl);
                                case 2:
                                    var hs_sat26DFcn = new $hs.Thunk();
                                    hs_sat26DFcn.evaluateOnce = function () {
                                        var hs_tpl26DFcm = hs_kzq26DF3n;
                                        if (hs_kzq26DF3n.notEvaluated) {
                                            hs_tpl26DFcm = hs_kzq26DF3n.hscall();
                                        }
                                        var hs_tpl126DF3J = hs_tpl26DFcm.data[0];
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_tpl126DF3J, hs_rb326DF39, hs_rb426DF33, hs_rb526DF34, hs_rb626DF35, hs_rb726DF36];
                                        return $res;
                                    };
                                    return hs_expandHashTable25t9TV.hscall(hs_ds326DF2s, hs_sat26DFcn);
                                }
                            };
                            var hs_sat26DFcp = new $hs.Thunk();
                            hs_sat26DFcp.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFcp, hs_sat26DFco);
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFcq, hs_sat26DFcb);
                };
                var hs_sat26DFct = new $hs.Thunk();
                hs_sat26DFct.evaluateOnce = function () {
                    var hs_sat26DFcs = new $hs.Thunk();
                    hs_sat26DFcs.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32, $hs.modules.GHCziNum.hs_zdfNumInt, hs_indx26DF3o);
                    };
                    return $hs.modules.GHCziIOArray.hs_unsafeWriteIOArray.hscall($hs.modules.GHCziInt.hs_zdfIxInt32, hs_a326DF37, hs_sat26DFcs, hs_bcktzq26DF3q);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFct, hs_sat26DFcr);
            };
            var hs_sat26DFcx = new $hs.Thunk();
            hs_sat26DFcx.evaluateOnce = function () {
                var hs_sat26DFcv = new $hs.Thunk();
                hs_sat26DFcv.evaluateOnce = function () {
                    return hs_deleteBucket25t9TX.hscall(hs_a126DF27, hs_bckt26DF3c);
                };
                var hs_sat26DFcw = new $hs.Thunk();
                hs_sat26DFcw.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DFcw, hs_sat26DFcv);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFcx, hs_sat26DFcu);
        };
        var hs_sat26DFcK = new $hs.Thunk();
        hs_sat26DFcK.evaluateOnce = function () {
            var hs_sat26DFcH = new $hs.Func(1);
            hs_sat26DFcH.evaluate = function (hs_table26DF2j) {
                var hs_wild226DF2F = hs_table26DF2j;
                if (hs_table26DF2j.notEvaluated) {
                    hs_wild226DF2F = hs_table26DF2j.hscall();
                }
                var hs_rb326DF2u = hs_wild226DF2F.data[1];
                var hs_rb426DF2x = hs_wild226DF2F.data[2];
                var hs_rb526DF2y = hs_wild226DF2F.data[3];
                var hs_rb626DF2z = hs_wild226DF2F.data[4];
                var hs_rb726DF2A = hs_wild226DF2F.data[5];
                var hs_indx26DF2w = new $hs.Thunk();
                hs_indx26DF2w.evaluateOnce = function () {
                    var hs_sat26DFcA = new $hs.Data(1);
                    hs_sat26DFcA.data = [hs_rb326DF2u];
                    var hs_sat26DFcB = new $hs.Thunk();
                    hs_sat26DFcB.evaluateOnce = function () {
                        return hs_ds326DF2s.hscall(hs_key26DF25);
                    };
                    return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32, hs_sat26DFcB, hs_sat26DFcA);
                };
                var hs_sat26DFcD = new $hs.Func(1);
                hs_sat26DFcD.evaluate = function (hs_bucket26DF2G) {
                    var hs_sat26DFcC = new $hs.Data(1);
                    hs_sat26DFcC.data = [hs_wild226DF2F, hs_indx26DF2w, hs_bucket26DF2G];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFcC);
                };
                var hs_sat26DFcG = new $hs.Thunk();
                hs_sat26DFcG.evaluateOnce = function () {
                    var hs_sat26DFcE = new $hs.Thunk();
                    hs_sat26DFcE.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32, $hs.modules.GHCziNum.hs_zdfNumInt, hs_indx26DF2w);
                    };
                    var hs_sat26DFcF = new $hs.Data(1);
                    hs_sat26DFcF.data = [hs_rb426DF2x, hs_rb526DF2y, hs_rb626DF2z, hs_rb726DF2A];
                    return $hs.modules.GHCziIOArray.hs_unsafeReadIOArray.hscall($hs.modules.GHCziInt.hs_zdfIxInt32, hs_sat26DFcF, hs_sat26DFcE);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFcG, hs_sat26DFcD);
            };
            var hs_sat26DFcJ = new $hs.Thunk();
            hs_sat26DFcJ.evaluateOnce = function () {
                var hs_sat26DFcI = new $hs.Data(1);
                hs_sat26DFcI.data = [hs_rb126DF2e];
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26DFcI);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFcJ, hs_sat26DFcH);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFcK, hs_sat26DFcz);
    };
    this.hs_update.evaluate = function (hs_ht26DF3Z, hs_key26DF4o, hs_val26DF5l) {
        var hs_wild26DF44 = hs_ht26DF3Z;
        if (hs_ht26DF3Z.notEvaluated) {
            hs_wild26DF44 = hs_ht26DF3Z.hscall();
        }
        var hs_ds26DF5a = hs_wild26DF44.data[0];
        var hs_wild126DFcM = hs_wild26DF44;
        if (hs_wild26DF44.notEvaluated) {
            hs_wild126DFcM = hs_wild26DF44.hscall();
        }
        var hs_ds326DF4p = hs_wild126DFcM.data[1];
        var hs_rb126DF4a = hs_wild126DFcM.data[2];
        var hs_a126DF4b = new $hs.Data(1);
        hs_a126DF4b.data = [hs_rb126DF4a];
        var hs_sat26DFdy = new $hs.Func(1);
        hs_sat26DFdy.evaluate = function (hs_ds426DF4J) {
            var hs_wild226DFcQ = hs_ds426DF4J;
            if (hs_ds426DF4J.notEvaluated) {
                hs_wild226DFcQ = hs_ds426DF4J.hscall();
            }
            var hs_table26DF4O = hs_wild226DFcQ.data[0];
            var hs_indx26DF5L = hs_wild226DFcQ.data[1];
            var hs_bckt26DF5c = hs_wild226DFcQ.data[2];
            var hs_wild326DFcP = hs_table26DF4O;
            if (hs_table26DF4O.notEvaluated) {
                hs_wild326DFcP = hs_table26DF4O.hscall();
            }
            var hs_rb226DF4X = hs_wild326DFcP.data[0];
            var hs_rb326DF56 = hs_wild326DFcP.data[1];
            var hs_rb426DF50 = hs_wild326DFcP.data[2];
            var hs_rb526DF51 = hs_wild326DFcP.data[3];
            var hs_rb626DF52 = hs_wild326DFcP.data[4];
            var hs_rb726DF53 = hs_wild326DFcP.data[5];
            var hs_k26DF4Y = new $hs.Data(1);
            hs_k26DF4Y.data = [hs_rb226DF4X];
            var hs_a226DF54 = new $hs.Data(1);
            hs_a226DF54.data = [hs_rb426DF50, hs_rb526DF51, hs_rb626DF52, hs_rb726DF53];
            var hs_b26DF57 = new $hs.Data(1);
            hs_b26DF57.data = [hs_rb326DF56];
            var hs_sat26DFdd = new $hs.Func(1);
            hs_sat26DFdd.evaluate = function (hs_ds526DF5D) {
                var hs_wild426DFcR = hs_ds526DF5D;
                if (hs_ds526DF5D.notEvaluated) {
                    hs_wild426DFcR = hs_ds526DF5D.hscall();
                }
                var hs_bcktzq26DF5N = hs_wild426DFcR.data[0];
                var hs_inserts26DF5J = hs_wild426DFcR.data[1];
                var hs_result26DF6d = hs_wild426DFcR.data[2];
                var hs_kzq26DF5K = new $hs.Thunk();
                hs_kzq26DF5K.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_k26DF4Y, hs_inserts26DF5J);
                };
                var hs_sat26DFda = new $hs.Thunk();
                hs_sat26DFda.evaluateOnce = function () {
                    var hs_sat26DFcU = new $hs.Func(1);
                    hs_sat26DFcU.evaluate = function (hs_table226DF6b) {
                        var hs_sat26DFcS = new $hs.Thunk();
                        hs_sat26DFcS.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_result26DF6d);
                        };
                        var hs_sat26DFcT = new $hs.Thunk();
                        hs_sat26DFcT.evaluateOnce = function () {
                            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a126DF4b, hs_table226DF6b);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFcT, hs_sat26DFcS);
                    };
                    var hs_sat26DFd9 = new $hs.Thunk();
                    hs_sat26DFd9.evaluateOnce = function () {
                        var hs_sat26DFcX = new $hs.Thunk();
                        hs_sat26DFcX.evaluateOnce = function () {
                            var hs_sat26DFcW = new $hs.Thunk();
                            hs_sat26DFcW.evaluateOnce = function () {
                                var hs_sat26DFcV = new $hs.Thunk();
                                hs_sat26DFcV.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DFcV);
                            };
                            return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32, hs_inserts26DF5J, hs_sat26DFcW);
                        };
                        var hs_sat26DFd0 = new $hs.Thunk();
                        hs_sat26DFd0.evaluateOnce = function () {
                            return 0 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                        };
                        var hs_wild526DFcZ = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DFd0, hs_sat26DFcX);
                        switch (hs_wild526DFcZ.tag) {
                        case 1:
                            var hs_sat26DFd1 = new $hs.Thunk();
                            hs_sat26DFd1.evaluateOnce = function () {
                                var hs_tpl26DFcY = hs_kzq26DF5K;
                                if (hs_kzq26DF5K.notEvaluated) {
                                    hs_tpl26DFcY = hs_kzq26DF5K.hscall();
                                }
                                var hs_tpl126DF5W = hs_tpl26DFcY.data[0];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_tpl126DF5W, hs_rb326DF56, hs_rb426DF50, hs_rb526DF51, hs_rb626DF52, hs_rb726DF53];
                                return $res;
                            };
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFd1);
                        case 2:
                            var hs_sat26DFd7 = new $hs.Thunk();
                            hs_sat26DFd7.evaluateOnce = function () {
                                var hs_wild626DFd3 = hs_tooBig25t9TN.hscall(hs_kzq26DF5K, hs_b26DF57);
                                switch (hs_wild626DFd3.tag) {
                                case 1:
                                    var hs_sat26DFd4 = new $hs.Thunk();
                                    hs_sat26DFd4.evaluateOnce = function () {
                                        var hs_tpl26DFd2 = hs_kzq26DF5K;
                                        if (hs_kzq26DF5K.notEvaluated) {
                                            hs_tpl26DFd2 = hs_kzq26DF5K.hscall();
                                        }
                                        var hs_tpl126DF62 = hs_tpl26DFd2.data[0];
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_tpl126DF62, hs_rb326DF56, hs_rb426DF50, hs_rb526DF51, hs_rb626DF52, hs_rb726DF53];
                                        return $res;
                                    };
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFd4);
                                case 2:
                                    var hs_sat26DFd6 = new $hs.Thunk();
                                    hs_sat26DFd6.evaluateOnce = function () {
                                        var hs_tpl26DFd5 = hs_kzq26DF5K;
                                        if (hs_kzq26DF5K.notEvaluated) {
                                            hs_tpl26DFd5 = hs_kzq26DF5K.hscall();
                                        }
                                        var hs_tpl126DF66 = hs_tpl26DFd5.data[0];
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_tpl126DF66, hs_rb326DF56, hs_rb426DF50, hs_rb526DF51, hs_rb626DF52, hs_rb726DF53];
                                        return $res;
                                    };
                                    return hs_expandHashTable25t9TV.hscall(hs_ds326DF4p, hs_sat26DFd6);
                                }
                            };
                            var hs_sat26DFd8 = new $hs.Thunk();
                            hs_sat26DFd8.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFd8, hs_sat26DFd7);
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFd9, hs_sat26DFcU);
                };
                var hs_sat26DFdc = new $hs.Thunk();
                hs_sat26DFdc.evaluateOnce = function () {
                    var hs_sat26DFdb = new $hs.Thunk();
                    hs_sat26DFdb.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32, $hs.modules.GHCziNum.hs_zdfNumInt, hs_indx26DF5L);
                    };
                    return $hs.modules.GHCziIOArray.hs_unsafeWriteIOArray.hscall($hs.modules.GHCziInt.hs_zdfIxInt32, hs_a226DF54, hs_sat26DFdb, hs_bcktzq26DF5N);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFdc, hs_sat26DFda);
            };
            var hs_sat26DFdw = new $hs.Thunk();
            hs_sat26DFdw.evaluateOnce = function () {
                var hs_ds526DF5d = new $hs.Thunk();
                hs_ds526DF5d.evaluateOnce = function () {
                    var hs_sat26DFde = new $hs.Thunk();
                    hs_sat26DFde.evaluateOnce = function () {
                        return hs_ds26DF5a.hscall(hs_key26DF4o);
                    };
                    return hs_deleteBucket25t9TX.hscall(hs_sat26DFde, hs_bckt26DF5c);
                };
                var hs_dels26DF5k = new $hs.Thunk();
                hs_dels26DF5k.evaluateOnce = function () {
                    var hs_wild426DFdg = hs_ds526DF5d;
                    if (hs_ds526DF5d.notEvaluated) {
                        hs_wild426DFdg = hs_ds526DF5d.hscall();
                    }
                    var hs_dels126DF5j = hs_wild426DFdg.data[1];
                    if (hs_dels126DF5j.notEvaluated) {
                        return hs_dels126DF5j.hscall();
                    } else {
                        return hs_dels126DF5j;
                    }
                };
                var hs_sat26DFdk = new $hs.Thunk();
                hs_sat26DFdk.evaluateOnce = function () {
                    var hs_sat26DFdj = new $hs.Thunk();
                    hs_sat26DFdj.evaluateOnce = function () {
                        var hs_sat26DFdi = new $hs.Thunk();
                        hs_sat26DFdi.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DFdi);
                    };
                    return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_dels26DF5k, hs_sat26DFdj);
                };
                var hs_sat26DFdo = new $hs.Thunk();
                hs_sat26DFdo.evaluateOnce = function () {
                    var hs_sat26DFdm = new $hs.Thunk();
                    hs_sat26DFdm.evaluateOnce = function () {
                        var hs_sat26DFdl = new $hs.Thunk();
                        hs_sat26DFdl.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DFdl);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DFdm, hs_dels26DF5k);
                };
                var hs_sat26DFdr = new $hs.Thunk();
                hs_sat26DFdr.evaluateOnce = function () {
                    var hs_wild426DFdn = hs_ds526DF5d;
                    if (hs_ds526DF5d.notEvaluated) {
                        hs_wild426DFdn = hs_ds526DF5d.hscall();
                    }
                    var hs_bucketzq26DF5r = hs_wild426DFdn.data[0];
                    if (hs_bucketzq26DF5r.notEvaluated) {
                        return hs_bucketzq26DF5r.hscall();
                    } else {
                        return hs_bucketzq26DF5r;
                    }
                };
                var hs_sat26DFds = new $hs.Data(1);
                hs_sat26DFds.data = [hs_key26DF4o, hs_val26DF5l];
                var hs_sat26DFdt = new $hs.Data(2);
                hs_sat26DFdt.data = [hs_sat26DFds, hs_sat26DFdr];
                var hs_sat26DFdu = new $hs.Data(1);
                hs_sat26DFdu.data = [hs_sat26DFdt, hs_sat26DFdo, hs_sat26DFdk];
                var hs_sat26DFdv = new $hs.Thunk();
                hs_sat26DFdv.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DFdv, hs_sat26DFdu);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFdw, hs_sat26DFdd);
        };
        var hs_sat26DFdJ = new $hs.Thunk();
        hs_sat26DFdJ.evaluateOnce = function () {
            var hs_sat26DFdG = new $hs.Func(1);
            hs_sat26DFdG.evaluate = function (hs_table26DF4f) {
                var hs_wild226DF4C = hs_table26DF4f;
                if (hs_table26DF4f.notEvaluated) {
                    hs_wild226DF4C = hs_table26DF4f.hscall();
                }
                var hs_rb326DF4r = hs_wild226DF4C.data[1];
                var hs_rb426DF4u = hs_wild226DF4C.data[2];
                var hs_rb526DF4v = hs_wild226DF4C.data[3];
                var hs_rb626DF4w = hs_wild226DF4C.data[4];
                var hs_rb726DF4x = hs_wild226DF4C.data[5];
                var hs_indx26DF4t = new $hs.Thunk();
                hs_indx26DF4t.evaluateOnce = function () {
                    var hs_sat26DFdz = new $hs.Data(1);
                    hs_sat26DFdz.data = [hs_rb326DF4r];
                    var hs_sat26DFdA = new $hs.Thunk();
                    hs_sat26DFdA.evaluateOnce = function () {
                        return hs_ds326DF4p.hscall(hs_key26DF4o);
                    };
                    return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32, hs_sat26DFdA, hs_sat26DFdz);
                };
                var hs_sat26DFdC = new $hs.Func(1);
                hs_sat26DFdC.evaluate = function (hs_bucket26DF4D) {
                    var hs_sat26DFdB = new $hs.Data(1);
                    hs_sat26DFdB.data = [hs_wild226DF4C, hs_indx26DF4t, hs_bucket26DF4D];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFdB);
                };
                var hs_sat26DFdF = new $hs.Thunk();
                hs_sat26DFdF.evaluateOnce = function () {
                    var hs_sat26DFdD = new $hs.Thunk();
                    hs_sat26DFdD.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32, $hs.modules.GHCziNum.hs_zdfNumInt, hs_indx26DF4t);
                    };
                    var hs_sat26DFdE = new $hs.Data(1);
                    hs_sat26DFdE.data = [hs_rb426DF4u, hs_rb526DF4v, hs_rb626DF4w, hs_rb726DF4x];
                    return $hs.modules.GHCziIOArray.hs_unsafeReadIOArray.hscall($hs.modules.GHCziInt.hs_zdfIxInt32, hs_sat26DFdE, hs_sat26DFdD);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFdF, hs_sat26DFdC);
            };
            var hs_sat26DFdI = new $hs.Thunk();
            hs_sat26DFdI.evaluateOnce = function () {
                var hs_sat26DFdH = new $hs.Data(1);
                hs_sat26DFdH.data = [hs_rb126DF4a];
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26DFdH);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFdI, hs_sat26DFdG);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DFdJ, hs_sat26DFdy);
    };
    this.hs_CanInsert.data = [];
    this.hs_CanzqtInsert.data = [];
    this.hs_HD.evaluate = function (hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_HT.evaluate = function (hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_HashTable.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
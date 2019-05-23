
$hs.modules.GHCziForeignPtr = new $hs.Module();
$hs.modules.GHCziForeignPtr.dependencies = ["GHC.Types", "GHC.CString", "GHC.Unit", "Control.Monad", "GHC.Base", "GHC.Show", "GHC.Err", "Data.Typeable.Internal", "GHC.Classes", "GHC.IORef", "GHC.List", "GHC.Ptr", "Foreign.Storable"];
$hs.modules.GHCziForeignPtr.initBeforeDependencies = function () {
    this.hs_zdWPlainForeignPtr = new $hs.Func(1);
    this.hs_zdWMallocPtr = new $hs.Func(2);
    this.hs_finalizzeForeignPtr = new $hs.Func(1);
    this.hs_castForeignPtr = new $hs.Func(1);
    this.hs_unsafeForeignPtrToPtr = new $hs.Func(1);
    this.hs_touchForeignPtr = new $hs.Func(1);
    this.hs_newForeignPtrzu = new $hs.Func(1);
    this.hs_mallocPlainForeignPtrBytes = new $hs.Func(1);
    this.hs_mallocPlainForeignPtr = new $hs.Func(1);
    this.hs_mallocForeignPtrBytes = new $hs.Func(1);
    this.hs_mallocForeignPtr = new $hs.Func(1);
    this.hs_zdfEqForeignPtr = new $hs.Data(1);
    this.hs_zdfOrdForeignPtr = new $hs.Data(1);
    this.hs_zdfShowForeignPtr = new $hs.Data(1);
    this.hs_zdfEqFinalizzers = new $hs.Data(1);
    this.hs_zdfTypeable1ForeignPtr = new $hs.Thunk();
    this.hs_addForeignPtrFinalizzer = new $hs.Func(2);
    this.hs_addForeignPtrFinalizzerEnv = new $hs.Func(3);
    this.hs_addForeignPtrConcFinalizzer = new $hs.Func(2);
    this.hs_newConcForeignPtr = new $hs.Func(2);
    this.hs_PlainForeignPtr = new $hs.Func(1);
    this.hs_MallocPtr = new $hs.Func(2);
    this.hs_PlainPtr = new $hs.Func(1);
    this.hs_NoFinalizzers = new $hs.Data(1);
    this.hs_CFinalizzers = new $hs.Data(2);
    this.hs_HaskellFinalizzers = new $hs.Data(3);
    this.hs_ForeignPtr = new $hs.Func(2);
    this.hs_zdWPlainForeignPtr.notEvaluated = true;
    this.hs_zdWPlainForeignPtr.evaluate = function (hs_tpl26CZFH) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_tpl26CZFH);
    };
    this.hs_zdWMallocPtr.notEvaluated = true;
    this.hs_zdWMallocPtr.evaluate = function (hs_tpl26CZFO, hs_tpl26CZFM) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_tpl26CZFO, hs_tpl26CZFM);
    };
    this.hs_finalizzeForeignPtr.notEvaluated = true;
    this.hs_finalizzeForeignPtr.evaluate = function (hs_ds26CZFR) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_ds26CZFR);
    };
    this.hs_castForeignPtr.notEvaluated = true;
    this.hs_castForeignPtr.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_unsafeForeignPtrToPtr.notEvaluated = true;
    this.hs_unsafeForeignPtrToPtr.evaluate = function (hs_ds26CZGn) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_ds26CZGn);
    };
    this.hs_touchForeignPtr.notEvaluated = true;
    this.hs_touchForeignPtr.evaluate = function (hs_ds26CZGt) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_ds26CZGt);
    };
    this.hs_newForeignPtrzu.notEvaluated = true;
    this.hs_newForeignPtrzu.evaluate = function (hs_ds26CZGH) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_ds26CZGH);
    };
    this.hs_mallocPlainForeignPtrBytes.notEvaluated = true;
    this.hs_mallocPlainForeignPtrBytes.evaluate = function (hs_sizze26CZHc) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_sizze26CZHc);
    };
    this.hs_mallocPlainForeignPtr.notEvaluated = true;
    this.hs_mallocPlainForeignPtr.evaluate = function (hs_zddStorable26CZHy) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_zddStorable26CZHy);
    };
    this.hs_mallocForeignPtrBytes.notEvaluated = true;
    this.hs_mallocForeignPtrBytes.evaluate = function (hs_sizze26CZHY) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_sizze26CZHY);
    };
    this.hs_mallocForeignPtr.notEvaluated = true;
    this.hs_mallocForeignPtr.evaluate = function (hs_zddStorable26CZIp) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_zddStorable26CZIp);
    };
    this.hs_zdfEqForeignPtr.notEvaluated = true;
    this.hs_zdfEqForeignPtr.evaluate = function () {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this;
    };
    this.hs_zdfOrdForeignPtr.notEvaluated = true;
    this.hs_zdfOrdForeignPtr.evaluate = function () {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this;
    };
    this.hs_zdfShowForeignPtr.notEvaluated = true;
    this.hs_zdfShowForeignPtr.evaluate = function () {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this;
    };
    this.hs_zdfEqFinalizzers.notEvaluated = true;
    this.hs_zdfEqFinalizzers.evaluate = function () {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this;
    };
    this.hs_zdfTypeable1ForeignPtr.evaluateOnce = function () {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_addForeignPtrFinalizzer.notEvaluated = true;
    this.hs_addForeignPtrFinalizzer.evaluate = function (hs_ds26CZKx, hs_ds126CZKA) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_ds26CZKx, hs_ds126CZKA);
    };
    this.hs_addForeignPtrFinalizzerEnv.notEvaluated = true;
    this.hs_addForeignPtrFinalizzerEnv.evaluate = function (hs_ds26CZLh, hs_ds126CZLk, hs_ds226CZLn) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_ds26CZLh, hs_ds126CZLk, hs_ds226CZLn);
    };
    this.hs_addForeignPtrConcFinalizzer.notEvaluated = true;
    this.hs_addForeignPtrConcFinalizzer.evaluate = function (hs_ds26CZMe, hs_finalizzer26CZMm) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_ds26CZMe, hs_finalizzer26CZMm);
    };
    this.hs_newConcForeignPtr.notEvaluated = true;
    this.hs_newConcForeignPtr.evaluate = function (hs_p26CZNi, hs_finalizzer26CZNm) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_p26CZNi, hs_finalizzer26CZNm);
    };
    this.hs_PlainForeignPtr.notEvaluated = true;
    this.hs_PlainForeignPtr.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_MallocPtr.notEvaluated = true;
    this.hs_MallocPtr.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_PlainPtr.notEvaluated = true;
    this.hs_PlainPtr.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_NoFinalizzers.notEvaluated = true;
    this.hs_NoFinalizzers.evaluate = function () {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this;
    };
    this.hs_CFinalizzers.notEvaluated = true;
    this.hs_CFinalizzers.evaluate = function () {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this;
    };
    this.hs_HaskellFinalizzers.notEvaluated = true;
    this.hs_HaskellFinalizzers.evaluate = function () {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this;
    };
    this.hs_ForeignPtr.notEvaluated = true;
    this.hs_ForeignPtr.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziForeignPtr.initAfterDependencies = function () {
    this.hs_zdWPlainForeignPtr.notEvaluated = false;
    this.hs_zdWMallocPtr.notEvaluated = false;
    this.hs_finalizzeForeignPtr.notEvaluated = false;
    this.hs_castForeignPtr.notEvaluated = false;
    this.hs_unsafeForeignPtrToPtr.notEvaluated = false;
    this.hs_touchForeignPtr.notEvaluated = false;
    this.hs_newForeignPtrzu.notEvaluated = false;
    this.hs_mallocPlainForeignPtrBytes.notEvaluated = false;
    this.hs_mallocPlainForeignPtr.notEvaluated = false;
    this.hs_mallocForeignPtrBytes.notEvaluated = false;
    this.hs_mallocForeignPtr.notEvaluated = false;
    this.hs_zdfEqForeignPtr.notEvaluated = false;
    this.hs_zdfEqForeignPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdForeignPtr.notEvaluated = false;
    this.hs_zdfOrdForeignPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfShowForeignPtr.notEvaluated = false;
    this.hs_zdfShowForeignPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfEqFinalizzers.notEvaluated = false;
    this.hs_zdfEqFinalizzers.evaluate = function () {
        return this;
    };
    this.hs_addForeignPtrFinalizzer.notEvaluated = false;
    this.hs_addForeignPtrFinalizzerEnv.notEvaluated = false;
    this.hs_addForeignPtrConcFinalizzer.notEvaluated = false;
    this.hs_newConcForeignPtr.notEvaluated = false;
    this.hs_PlainForeignPtr.notEvaluated = false;
    this.hs_MallocPtr.notEvaluated = false;
    this.hs_PlainPtr.notEvaluated = false;
    this.hs_NoFinalizzers.notEvaluated = false;
    this.hs_NoFinalizzers.evaluate = function () {
        return this;
    };
    this.hs_CFinalizzers.notEvaluated = false;
    this.hs_CFinalizzers.evaluate = function () {
        return this;
    };
    this.hs_HaskellFinalizzers.notEvaluated = false;
    this.hs_HaskellFinalizzers.evaluate = function () {
        return this;
    };
    this.hs_ForeignPtr.notEvaluated = false;
    var hs_a25uBa3 = new $hs.Func(1);
    var hs_finalizzeForeign25t2hY = new $hs.Func(1);
    var hs_zdczeze25uBcD = new $hs.Func(2);
    var hs_zdczsze25uBcS = new $hs.Thunk();
    var hs_zdccompare25uBcT = new $hs.Func(2);
    var hs_zdcmin25uBd8 = new $hs.Thunk();
    var hs_zdcmax25uBd9 = new $hs.Thunk();
    var hs_zdczlze25uBda = new $hs.Thunk();
    var hs_zdczg25uBdb = new $hs.Thunk();
    var hs_zdczgze25uBdc = new $hs.Thunk();
    var hs_zdczl25uBdd = new $hs.Thunk();
    var hs_zdcshowsPrec25uBde = new $hs.Func(2);
    var hs_zdcshowList25uBdo = new $hs.Thunk();
    var hs_zdcshow25uBdp = new $hs.Thunk();
    var hs_zdczeze125uBdq = new $hs.Func(2);
    var hs_zdczsze125uBdz = new $hs.Func(2);
    var hs_zdctypeOf125uBdF = new $hs.Func(1);
    var hs_noMixing25t2i1 = new $hs.Func(3);
    var hs_foreignPtrFinalizzer25t2i2 = new $hs.Func(1);
    this.hs_zdWPlainForeignPtr.evaluate = function (hs_tpl26CZFH) {
        var hs_tpl26CZFJ = hs_tpl26CZFH;
        if (hs_tpl26CZFH.notEvaluated) {
            hs_tpl26CZFJ = hs_tpl26CZFH.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CZFJ];
        return $res;
    };
    this.hs_zdWMallocPtr.evaluate = function (hs_tpl26CZFO, hs_tpl26CZFM) {
        var hs_tpl26CZFP = hs_tpl26CZFM;
        if (hs_tpl26CZFM.notEvaluated) {
            hs_tpl26CZFP = hs_tpl26CZFM.hscall();
        }
        var $res = new $hs.Data(2);
        $res.data = [hs_tpl26CZFO, hs_tpl26CZFP];
        return $res;
    };
    this.hs_finalizzeForeignPtr.evaluate = function (hs_ds26CZFR) {
        var hs_wild26CZNr = hs_ds26CZFR;
        if (hs_ds26CZFR.notEvaluated) {
            hs_wild26CZNr = hs_ds26CZFR.hscall();
        }
        var hs_ds226CZFV = hs_wild26CZNr.data[1];
        var hs_wild126CZFY = hs_ds226CZFV;
        if (hs_ds226CZFV.notEvaluated) {
            hs_wild126CZFY = hs_ds226CZFV.hscall();
        }
        switch (hs_wild126CZFY.tag) {
        case 3:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        default:
            var hs_refFinalizzers26CZG5 = new $hs.Thunk();
            hs_refFinalizzers26CZG5.evaluateOnce = function () {
                var hs_wild226CZNA = hs_wild126CZFY;
                if (hs_wild126CZFY.notEvaluated) {
                    hs_wild226CZNA = hs_wild126CZFY.hscall();
                }
                switch (hs_wild226CZNA.tag) {
                case 1:
                    var hs_ref26CZG1 = hs_wild226CZNA.data[0];
                    if (hs_ref26CZG1.notEvaluated) {
                        return hs_ref26CZG1.hscall();
                    } else {
                        return hs_ref26CZG1;
                    }
                case 2:
                    var hs_ref26CZG4 = hs_wild226CZNA.data[1];
                    if (hs_ref26CZG4.notEvaluated) {
                        return hs_ref26CZG4.hscall();
                    } else {
                        return hs_ref26CZG4;
                    }
                }
            };
            var hs_sat26CZNu = new $hs.Func(1);
            hs_sat26CZNu.evaluate = function (hs_ds326CZG8) {
                var hs_wild226CZNw = hs_ds326CZG8;
                if (hs_ds326CZG8.notEvaluated) {
                    hs_wild226CZNw = hs_ds326CZG8.hscall();
                }
                var hs_ftype26CZGe = hs_wild226CZNw.data[0];
                var hs_finalizzers26CZGc = hs_wild226CZNw.data[1];
                var hs_sat26CZNx = new $hs.Thunk();
                hs_sat26CZNx.evaluateOnce = function () {
                    var hs_sat26CZNy = new $hs.Data(1);
                    hs_sat26CZNy.data = [hs_ftype26CZGe, $hs.modules.GHCziTypes.hs_ZMZN];
                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_refFinalizzers26CZG5, hs_sat26CZNy);
                };
                var hs_sat26CZNv = new $hs.Thunk();
                hs_sat26CZNv.evaluateOnce = function () {
                    return $hs.modules.ControlziMonad.hs_sequencezu.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_finalizzers26CZGc);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZNv, hs_sat26CZNx);
            };
            var hs_sat26CZNt = new $hs.Thunk();
            hs_sat26CZNt.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_refFinalizzers26CZG5);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZNt, hs_sat26CZNu);
        }
    };
    hs_a25uBa3.evaluate = function (hs_f26CZGl) {
        if (hs_f26CZGl.notEvaluated) {
            return hs_f26CZGl.hscall();
        } else {
            return hs_f26CZGl;
        }
    };
    this.hs_castForeignPtr.evaluate = function (hs_eta1cW6l3) {
        return hs_a25uBa3.hscall(hs_eta1cW6l3);
    };
    this.hs_unsafeForeignPtrToPtr.evaluate = function (hs_ds26CZGn) {
        var hs_wild26CZNC = hs_ds26CZGn;
        if (hs_ds26CZGn.notEvaluated) {
            hs_wild26CZNC = hs_ds26CZGn.hscall();
        }
        var hs_fo26CZGr = hs_wild26CZNC.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_fo26CZGr];
        return $res;
    };
    this.hs_touchForeignPtr.evaluate = function (hs_ds26CZGt) {
        var hs_wild26CZNE = hs_ds26CZGt;
        if (hs_ds26CZGt.notEvaluated) {
            hs_wild26CZNE = hs_ds26CZGt.hscall();
        }
        var hs_r26CZGB = hs_wild26CZNE.data[1];
        var hs_sat26CZNG = new $hs.Func(1);
        hs_sat26CZNG.evaluate = function (hs_s26CZGC) {
            throw "primitive operation touch#. Not implemeted yet.";
            return [hs_szq26CZGE, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26CZND = new $hs.Func(1);
        hs_sat26CZND.evaluate = function (hs_tpl26CZGy) {
            if (hs_tpl26CZGy.notEvaluated) {
                return hs_tpl26CZGy.hscall();
            } else {
                return hs_tpl26CZGy;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZND, hs_sat26CZNG);
    };
    this.hs_newForeignPtrzu.evaluate = function (hs_ds26CZGH) {
        var hs_wild26CZNI = hs_ds26CZGH;
        if (hs_ds26CZGH.notEvaluated) {
            hs_wild26CZNI = hs_ds26CZGH.hscall();
        }
        var hs_obj26CZGN = hs_wild26CZNI.data[0];
        var hs_sat26CZNJ = new $hs.Func(1);
        hs_sat26CZNJ.evaluate = function (hs_r26CZGO) {
            var hs_sat26CZNM = new $hs.Thunk();
            hs_sat26CZNM.evaluateOnce = function () {
                var hs_nt26CZGR = hs_r26CZGO;
                if (hs_r26CZGO.notEvaluated) {
                    hs_nt26CZGR = hs_r26CZGO.hscall();
                }
                var $res = new $hs.Data(1);
                $res.data = [hs_nt26CZGR];
                return $res;
            };
            var hs_sat26CZNL = new $hs.Data(1);
            hs_sat26CZNL.data = [hs_obj26CZGN, hs_sat26CZNM];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZNL);
        };
        var hs_sat26CZNH = new $hs.Thunk();
        hs_sat26CZNH.evaluateOnce = function () {
            var hs_sat26CZNK = new $hs.Data(1);
            hs_sat26CZNK.data = [$hs.modules.GHCziForeignPtr.hs_NoFinalizzers, $hs.modules.GHCziTypes.hs_ZMZN];
            return $hs.modules.GHCziIORef.hs_newIORef.hscall(hs_sat26CZNK);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZNH, hs_sat26CZNJ);
    };
    hs_finalizzeForeign25t2hY.evaluate = function (hs_w26CZH0) {
        var hs_sat26CZNP = new $hs.Func(1);
        hs_sat26CZNP.evaluate = function (hs_s26CZH1) {
            throw "primitive operation finalizeWeak#. Not implemeted yet.";
            var hs_s126CZH8 = hs_wild26CZNR[0];
            var hs_ds26CZH6 = hs_wild26CZNR[1];
            var hs_ds126CZH9 = hs_wild26CZNR[2];
            var hs_ds226CZNQ = hs_ds26CZH6;
            if (hs_ds26CZH6.notEvaluated) {
                hs_ds226CZNQ = hs_ds26CZH6.hscall();
            }
            switch (hs_ds226CZNQ) {
            case 0:
                return [hs_s126CZH8, $hs.modules.GHCziUnit.hs_Z0T];
            default:
                return hs_ds126CZH9.hscall(hs_s126CZH8);
            }
        };
        var hs_sat26CZNO = new $hs.Func(1);
        hs_sat26CZNO.evaluate = function (hs_tpl26CZGX) {
            if (hs_tpl26CZGX.notEvaluated) {
                return hs_tpl26CZGX.hscall();
            } else {
                return hs_tpl26CZGX;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZNO, hs_sat26CZNP);
    };
    this.hs_mallocPlainForeignPtrBytes.evaluate = function (hs_sizze26CZHc) {
        var hs_sat26CZNS = new $hs.Data(1);
        hs_sat26CZNS.data = [0];
        var hs_wild26CZNT = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sizze26CZHc, hs_sat26CZNS);
        switch (hs_wild26CZNT.tag) {
        case 1:
            var hs_wild126CZNW = hs_sizze26CZHc;
            if (hs_sizze26CZHc.notEvaluated) {
                hs_wild126CZNW = hs_sizze26CZHc.hscall();
            }
            var hs_sizze126CZHl = hs_wild126CZNW.data[0];
            var hs_sat26CZNX = new $hs.Func(1);
            hs_sat26CZNX.evaluate = function (hs_s26CZHm) {
                throw "primitive operation newPinnedByteArray#. Not implemeted yet.";
                var hs_szq26CZHq = hs_wild226CZNZ[0];
                var hs_mbarrzh26CZHr = hs_wild226CZNZ[1];
                var hs_sat26CZO0 = new $hs.Data(3);
                hs_sat26CZO0.data = [hs_mbarrzh26CZHr];
                throw "primitive operation byteArrayContents#. Not implemeted yet.";
                var hs_sat26CZNY = new $hs.Data(1);
                hs_sat26CZNY.data = [hs_sat26CZO1, hs_sat26CZO0];
                return [hs_szq26CZHq, hs_sat26CZNY];
            };
            var hs_sat26CZNV = new $hs.Func(1);
            hs_sat26CZNV.evaluate = function (hs_tpl26CZHi) {
                if (hs_tpl26CZHi.notEvaluated) {
                    return hs_tpl26CZHi.hscall();
                } else {
                    return hs_tpl26CZHi;
                }
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZNV, hs_sat26CZNX);
        case 2:
            var hs_sat26CZNU = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("mallocPlainForeignPtrBytes: size must be >= 0\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CZNU);
        }
    };
    this.hs_mallocPlainForeignPtr.evaluate = function (hs_zddStorable26CZHy) {
        var hs_wild26CZO2 = $hs.modules.ForeignziStorable.hs_alignment.hscall(hs_zddStorable26CZHy, $hs.modules.GHCziErr.hs_undefined);
        var hs_align26CZHL = hs_wild26CZO2.data[0];
        var hs_wild126CZO3 = $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26CZHy, $hs.modules.GHCziErr.hs_undefined);
        var hs_sizze26CZHD = hs_wild126CZO3.data[0];
        var hs_sat26CZO4 = new $hs.Data(1);
        hs_sat26CZO4.data = [0];
        var hs_sat26CZO5 = new $hs.Data(1);
        hs_sat26CZO5.data = [hs_sizze26CZHD];
        var hs_wild226CZO6 = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26CZO5, hs_sat26CZO4);
        switch (hs_wild226CZO6.tag) {
        case 1:
            var hs_sat26CZO9 = new $hs.Func(1);
            hs_sat26CZO9.evaluate = function (hs_s26CZHM) {
                throw "primitive operation newAlignedPinnedByteArray#. Not implemeted yet.";
                var hs_szq26CZHQ = hs_wild326CZOb[0];
                var hs_mbarrzh26CZHR = hs_wild326CZOb[1];
                var hs_sat26CZOc = new $hs.Data(3);
                hs_sat26CZOc.data = [hs_mbarrzh26CZHR];
                throw "primitive operation byteArrayContents#. Not implemeted yet.";
                var hs_sat26CZOa = new $hs.Data(1);
                hs_sat26CZOa.data = [hs_sat26CZOd, hs_sat26CZOc];
                return [hs_szq26CZHQ, hs_sat26CZOa];
            };
            var hs_sat26CZO8 = new $hs.Func(1);
            hs_sat26CZO8.evaluate = function (hs_tpl26CZHI) {
                if (hs_tpl26CZHI.notEvaluated) {
                    return hs_tpl26CZHI.hscall();
                } else {
                    return hs_tpl26CZHI;
                }
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZO8, hs_sat26CZO9);
        case 2:
            var hs_sat26CZO7 = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("mallocForeignPtr: size must be >= 0\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CZO7);
        }
    };
    this.hs_mallocForeignPtrBytes.evaluate = function (hs_sizze26CZHY) {
        var hs_sat26CZOe = new $hs.Data(1);
        hs_sat26CZOe.data = [0];
        var hs_wild26CZOf = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sizze26CZHY, hs_sat26CZOe);
        switch (hs_wild26CZOf.tag) {
        case 1:
            var hs_wild126CZOi = hs_sizze26CZHY;
            if (hs_sizze26CZHY.notEvaluated) {
                hs_wild126CZOi = hs_sizze26CZHY.hscall();
            }
            var hs_sizze126CZIa = hs_wild126CZOi.data[0];
            var hs_sat26CZOj = new $hs.Func(1);
            hs_sat26CZOj.evaluate = function (hs_r26CZIi) {
                var hs_sat26CZOm = new $hs.Func(1);
                hs_sat26CZOm.evaluate = function (hs_s26CZIb) {
                    throw "primitive operation newPinnedByteArray#. Not implemeted yet.";
                    var hs_szq26CZIf = hs_wild226CZOo[0];
                    var hs_mbarrzh26CZIg = hs_wild226CZOo[1];
                    var hs_sat26CZOp = new $hs.Thunk();
                    hs_sat26CZOp.evaluateOnce = function () {
                        return $hs.modules.GHCziForeignPtr.hs_zdWMallocPtr.hscall(hs_mbarrzh26CZIg, hs_r26CZIi);
                    };
                    throw "primitive operation byteArrayContents#. Not implemeted yet.";
                    var hs_sat26CZOn = new $hs.Data(1);
                    hs_sat26CZOn.data = [hs_sat26CZOq, hs_sat26CZOp];
                    return [hs_szq26CZIf, hs_sat26CZOn];
                };
                var hs_sat26CZOl = new $hs.Func(1);
                hs_sat26CZOl.evaluate = function (hs_tpl26CZI7) {
                    if (hs_tpl26CZI7.notEvaluated) {
                        return hs_tpl26CZI7.hscall();
                    } else {
                        return hs_tpl26CZI7;
                    }
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZOl, hs_sat26CZOm);
            };
            var hs_sat26CZOh = new $hs.Thunk();
            hs_sat26CZOh.evaluateOnce = function () {
                var hs_sat26CZOk = new $hs.Data(1);
                hs_sat26CZOk.data = [$hs.modules.GHCziForeignPtr.hs_NoFinalizzers, $hs.modules.GHCziTypes.hs_ZMZN];
                return $hs.modules.GHCziIORef.hs_newIORef.hscall(hs_sat26CZOk);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZOh, hs_sat26CZOj);
        case 2:
            var hs_sat26CZOg = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("mallocForeignPtrBytes: size must be >= 0\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CZOg);
        }
    };
    this.hs_mallocForeignPtr.evaluate = function (hs_zddStorable26CZIp) {
        var hs_wild26CZOr = $hs.modules.ForeignziStorable.hs_alignment.hscall(hs_zddStorable26CZIp, $hs.modules.GHCziErr.hs_undefined);
        var hs_align26CZIF = hs_wild26CZOr.data[0];
        var hs_wild126CZOs = $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26CZIp, $hs.modules.GHCziErr.hs_undefined);
        var hs_sizze26CZIu = hs_wild126CZOs.data[0];
        var hs_sat26CZOt = new $hs.Data(1);
        hs_sat26CZOt.data = [0];
        var hs_sat26CZOu = new $hs.Data(1);
        hs_sat26CZOu.data = [hs_sizze26CZIu];
        var hs_wild226CZOv = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26CZOu, hs_sat26CZOt);
        switch (hs_wild226CZOv.tag) {
        case 1:
            var hs_sat26CZOy = new $hs.Func(1);
            hs_sat26CZOy.evaluate = function (hs_r26CZIN) {
                var hs_sat26CZOB = new $hs.Func(1);
                hs_sat26CZOB.evaluate = function (hs_s26CZIG) {
                    throw "primitive operation newAlignedPinnedByteArray#. Not implemeted yet.";
                    var hs_szq26CZIK = hs_wild326CZOD[0];
                    var hs_mbarrzh26CZIL = hs_wild326CZOD[1];
                    var hs_sat26CZOE = new $hs.Thunk();
                    hs_sat26CZOE.evaluateOnce = function () {
                        return $hs.modules.GHCziForeignPtr.hs_zdWMallocPtr.hscall(hs_mbarrzh26CZIL, hs_r26CZIN);
                    };
                    throw "primitive operation byteArrayContents#. Not implemeted yet.";
                    var hs_sat26CZOC = new $hs.Data(1);
                    hs_sat26CZOC.data = [hs_sat26CZOF, hs_sat26CZOE];
                    return [hs_szq26CZIK, hs_sat26CZOC];
                };
                var hs_sat26CZOA = new $hs.Func(1);
                hs_sat26CZOA.evaluate = function (hs_tpl26CZIC) {
                    if (hs_tpl26CZIC.notEvaluated) {
                        return hs_tpl26CZIC.hscall();
                    } else {
                        return hs_tpl26CZIC;
                    }
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZOA, hs_sat26CZOB);
            };
            var hs_sat26CZOx = new $hs.Thunk();
            hs_sat26CZOx.evaluateOnce = function () {
                var hs_sat26CZOz = new $hs.Data(1);
                hs_sat26CZOz.data = [$hs.modules.GHCziForeignPtr.hs_NoFinalizzers, $hs.modules.GHCziTypes.hs_ZMZN];
                return $hs.modules.GHCziIORef.hs_newIORef.hscall(hs_sat26CZOz);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZOx, hs_sat26CZOy);
        case 2:
            var hs_sat26CZOw = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("mallocForeignPtr: size must be >= 0\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CZOw);
        }
    };
    hs_zdczeze25uBcD.evaluate = function (hs_p26CZIW, hs_q26CZJ2) {
        var hs_sat26CZOH = new $hs.Thunk();
        hs_sat26CZOH.evaluateOnce = function () {
            var hs_wild26CZOL = hs_q26CZJ2;
            if (hs_q26CZJ2.notEvaluated) {
                hs_wild26CZOL = hs_q26CZJ2.hscall();
            }
            var hs_fo26CZJ6 = hs_wild26CZOL.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_fo26CZJ6];
            return $res;
        };
        var hs_sat26CZOG = new $hs.Thunk();
        hs_sat26CZOG.evaluateOnce = function () {
            var hs_wild26CZOJ = hs_p26CZIW;
            if (hs_p26CZIW.notEvaluated) {
                hs_wild26CZOJ = hs_p26CZIW.hscall();
            }
            var hs_fo26CZJ0 = hs_wild26CZOJ.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_fo26CZJ0];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_sat26CZOG, hs_sat26CZOH);
    };
    this.hs_zdfEqForeignPtr.data = [hs_zdczeze25uBcD, hs_zdczsze25uBcS];
    hs_zdczsze25uBcS.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzsze.hscall($hs.modules.GHCziForeignPtr.hs_zdfEqForeignPtr);
    };
    hs_zdccompare25uBcT.evaluate = function (hs_p26CZJc, hs_q26CZJi) {
        var hs_sat26CZON = new $hs.Thunk();
        hs_sat26CZON.evaluateOnce = function () {
            var hs_wild26CZOR = hs_q26CZJi;
            if (hs_q26CZJi.notEvaluated) {
                hs_wild26CZOR = hs_q26CZJi.hscall();
            }
            var hs_fo26CZJm = hs_wild26CZOR.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_fo26CZJm];
            return $res;
        };
        var hs_sat26CZOM = new $hs.Thunk();
        hs_sat26CZOM.evaluateOnce = function () {
            var hs_wild26CZOP = hs_p26CZJc;
            if (hs_p26CZJc.notEvaluated) {
                hs_wild26CZOP = hs_p26CZJc.hscall();
            }
            var hs_fo26CZJg = hs_wild26CZOP.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_fo26CZJg];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziPtr.hs_zdfOrdPtr, hs_sat26CZOM, hs_sat26CZON);
    };
    this.hs_zdfOrdForeignPtr.data = [$hs.modules.GHCziForeignPtr.hs_zdfEqForeignPtr, hs_zdccompare25uBcT, hs_zdczl25uBdd, hs_zdczgze25uBdc, hs_zdczg25uBdb, hs_zdczlze25uBda, hs_zdcmax25uBd9, hs_zdcmin25uBd8];
    hs_zdcmin25uBd8.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziForeignPtr.hs_zdfOrdForeignPtr);
    };
    hs_zdcmax25uBd9.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziForeignPtr.hs_zdfOrdForeignPtr);
    };
    hs_zdczlze25uBda.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzlze.hscall($hs.modules.GHCziForeignPtr.hs_zdfOrdForeignPtr);
    };
    hs_zdczg25uBdb.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzg.hscall($hs.modules.GHCziForeignPtr.hs_zdfOrdForeignPtr);
    };
    hs_zdczgze25uBdc.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzgze.hscall($hs.modules.GHCziForeignPtr.hs_zdfOrdForeignPtr);
    };
    hs_zdczl25uBdd.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzl.hscall($hs.modules.GHCziForeignPtr.hs_zdfOrdForeignPtr);
    };
    hs_zdcshowsPrec25uBde.evaluate = function (hs_p26CZJx, hs_f26CZJy) {
        var hs_sat26CZOS = new $hs.Thunk();
        hs_sat26CZOS.evaluateOnce = function () {
            var hs_wild26CZOU = hs_f26CZJy;
            if (hs_f26CZJy.notEvaluated) {
                hs_wild26CZOU = hs_f26CZJy.hscall();
            }
            var hs_fo26CZJC = hs_wild26CZOU.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_fo26CZJC];
            return $res;
        };
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziPtr.hs_zdfShowPtr, hs_p26CZJx, hs_sat26CZOS);
    };
    this.hs_zdfShowForeignPtr.data = [hs_zdcshowsPrec25uBde, hs_zdcshow25uBdp, hs_zdcshowList25uBdo];
    hs_zdcshowList25uBdo.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziForeignPtr.hs_zdfShowForeignPtr);
    };
    hs_zdcshow25uBdp.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziForeignPtr.hs_zdfShowForeignPtr);
    };
    hs_zdczeze125uBdq.evaluate = function (hs_a126CZJJ, hs_b26CZJL) {
        var hs_wild26CZOW = hs_a126CZJJ;
        if (hs_a126CZJJ.notEvaluated) {
            hs_wild26CZOW = hs_a126CZJJ.hscall();
        }
        switch (hs_wild26CZOW.tag) {
        case 1:
            var hs_wild126CZOY = hs_b26CZJL;
            if (hs_b26CZJL.notEvaluated) {
                hs_wild126CZOY = hs_b26CZJL.hscall();
            }
            switch (hs_wild126CZOY.tag) {
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
            }
        case 2:
            var hs_wild126CZOV = hs_b26CZJL;
            if (hs_b26CZJL.notEvaluated) {
                hs_wild126CZOV = hs_b26CZJL.hscall();
            }
            switch (hs_wild126CZOV.tag) {
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
            var hs_wild126CZOX = hs_b26CZJL;
            if (hs_b26CZJL.notEvaluated) {
                hs_wild126CZOX = hs_b26CZJL.hscall();
            }
            switch (hs_wild126CZOX.tag) {
            case 3:
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
    this.hs_zdfEqFinalizzers.data = [hs_zdczeze125uBdq, hs_zdczsze125uBdz];
    hs_zdczsze125uBdz.evaluate = function (hs_a126CZJS, hs_b26CZJT) {
        var hs_sat26CZOZ = new $hs.Thunk();
        hs_sat26CZOZ.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziForeignPtr.hs_zdfEqFinalizzers, hs_a126CZJS, hs_b26CZJT);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26CZOZ);
    };
    hs_zdctypeOf125uBdF.evaluate = function (hs_ds26CZK1) {
        var hs_sat26CZP0 = new $hs.Thunk();
        hs_sat26CZP0.evaluateOnce = function () {
            var hs_sat26CZP2 = new $hs.Thunk();
            hs_sat26CZP2.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ForeignPtr\x00");
            };
            var hs_sat26CZP3 = new $hs.Thunk();
            hs_sat26CZP3.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GHC.ForeignPtr\x00");
            };
            var hs_sat26CZP1 = new $hs.Thunk();
            hs_sat26CZP1.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26CZP1, hs_sat26CZP3, hs_sat26CZP2);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26CZP0, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeable1ForeignPtr.evaluateOnce = function () {
        if (hs_zdctypeOf125uBdF.notEvaluated) {
            return hs_zdctypeOf125uBdF.hscall();
        } else {
            return hs_zdctypeOf125uBdF;
        }
    };
    hs_noMixing25t2i1.evaluate = function (hs_ftype026CZKe, hs_r26CZK5, hs_mkF26CZKh) {
        var hs_sat26CZP5 = new $hs.Func(1);
        hs_sat26CZP5.evaluate = function (hs_ds26CZK8) {
            var hs_wild26CZP6 = hs_ds26CZK8;
            if (hs_ds26CZK8.notEvaluated) {
                hs_wild26CZP6 = hs_ds26CZK8.hscall();
            }
            var hs_ftype26CZKc = hs_wild26CZP6.data[0];
            var hs_fs26CZKk = hs_wild26CZP6.data[1];
            var hs_sat26CZP7 = new $hs.Thunk();
            hs_sat26CZP7.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziForeignPtr.hs_zdfEqFinalizzers, hs_ftype26CZKc, hs_ftype026CZKe);
            };
            var hs_sat26CZP8 = new $hs.Thunk();
            hs_sat26CZP8.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziForeignPtr.hs_zdfEqFinalizzers, hs_ftype26CZKc, $hs.modules.GHCziForeignPtr.hs_NoFinalizzers);
            };
            var hs_wild126CZP9 = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26CZP8, hs_sat26CZP7);
            switch (hs_wild126CZP9.tag) {
            case 1:
                var hs_sat26CZPd = new $hs.Func(1);
                hs_sat26CZPd.evaluate = function (hs_f26CZKj) {
                    var hs_sat26CZPf = new $hs.Thunk();
                    hs_sat26CZPf.evaluateOnce = function () {
                        var hs_sat26CZPi = new $hs.Thunk();
                        hs_sat26CZPi.evaluateOnce = function () {
                            return $hs.modules.GHCziList.hs_null.hscall(hs_fs26CZKk);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZPi);
                    };
                    var hs_sat26CZPe = new $hs.Thunk();
                    hs_sat26CZPe.evaluateOnce = function () {
                        var hs_sat26CZPh = new $hs.Data(2);
                        hs_sat26CZPh.data = [hs_f26CZKj, hs_fs26CZKk];
                        var hs_sat26CZPg = new $hs.Data(1);
                        hs_sat26CZPg.data = [hs_ftype026CZKe, hs_sat26CZPh];
                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_r26CZK5, hs_sat26CZPg);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZPe, hs_sat26CZPf);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_mkF26CZKh, hs_sat26CZPd);
            case 2:
                var hs_sat26CZPa = new $hs.Thunk();
                hs_sat26CZPa.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("in the same ForeignPtr\x00");
                };
                var hs_sat26CZPb = new $hs.Thunk();
                hs_sat26CZPb.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GHC.ForeignPtr: attempt to mix Haskell and C finalizers \x00");
                };
                var hs_sat26CZPc = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CZPb, hs_sat26CZPa);
                return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CZPc);
            }
        };
        var hs_sat26CZP4 = new $hs.Thunk();
        hs_sat26CZP4.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_r26CZK5);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZP4, hs_sat26CZP5);
    };
    this.hs_addForeignPtrFinalizzer.evaluate = function (hs_ds26CZKx, hs_ds126CZKA) {
        var hs_wild26CZPn = hs_ds26CZKx;
        if (hs_ds26CZKx.notEvaluated) {
            hs_wild26CZPn = hs_ds26CZKx.hscall();
        }
        var hs_fp26CZKP = hs_wild26CZPn.data[0];
        var hs_wild126CZPm = hs_ds126CZKA;
        if (hs_ds126CZKA.notEvaluated) {
            hs_wild126CZPm = hs_ds126CZKA.hscall();
        }
        var hs_p26CZKQ = hs_wild126CZPm.data[0];
        var hs_c26CZL1 = hs_wild126CZPm.data[1];
        var hs_f26CZL0 = new $hs.Func(1);
        hs_f26CZL0.evaluate = function (hs_r26CZKG) {
            var hs_sat26CZPu = new $hs.Thunk();
            hs_sat26CZPu.evaluateOnce = function () {
                var hs_sat26CZPw = new $hs.Func(1);
                hs_sat26CZPw.evaluate = function (hs_s26CZKR) {
                    var hs_wild226CZPy = hs_r26CZKG;
                    if (hs_r26CZKG.notEvaluated) {
                        hs_wild226CZPy = hs_r26CZKG.hscall();
                    }
                    var hs_rzh26CZKO = hs_wild226CZPy.data[0];
                    throw "primitive operation mkWeakForeignEnv#. Not implemeted yet.";
                    var hs_s126CZKV = hs_wild326CZPz[0];
                    var hs_w26CZKW = hs_wild326CZPz[1];
                    var hs_sat26CZPx = new $hs.Thunk();
                    hs_sat26CZPx.evaluateOnce = function () {
                        return hs_finalizzeForeign25t2hY.hscall(hs_w26CZKW);
                    };
                    return [hs_s126CZKV, hs_sat26CZPx];
                };
                var hs_sat26CZPv = new $hs.Func(1);
                hs_sat26CZPv.evaluate = function (hs_tpl26CZKJ) {
                    if (hs_tpl26CZKJ.notEvaluated) {
                        return hs_tpl26CZKJ.hscall();
                    } else {
                        return hs_tpl26CZKJ;
                    }
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZPv, hs_sat26CZPw);
            };
            var hs_sat26CZPt = new $hs.Func(1);
            hs_sat26CZPt.evaluate = function (hs_eta1cW6l3) {
                return hs_noMixing25t2i1.hscall($hs.modules.GHCziForeignPtr.hs_CFinalizzers, hs_r26CZKG, hs_eta1cW6l3);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZPt, hs_sat26CZPu);
        };
        var hs_wild226CZPk = hs_c26CZL1;
        if (hs_c26CZL1.notEvaluated) {
            hs_wild226CZPk = hs_c26CZL1.hscall();
        }
        switch (hs_wild226CZPk.tag) {
        case 1:
            var hs_r26CZL4 = hs_wild226CZPk.data[0];
            var hs_sat26CZPs = new $hs.Thunk();
            hs_sat26CZPs.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26CZPr = new $hs.Thunk();
            hs_sat26CZPr.evaluateOnce = function () {
                return hs_f26CZL0.hscall(hs_r26CZL4);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZPr, hs_sat26CZPs);
        case 2:
            var hs_r26CZL9 = hs_wild226CZPk.data[1];
            var hs_sat26CZPo = new $hs.Thunk();
            hs_sat26CZPo.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26CZPj = new $hs.Thunk();
            hs_sat26CZPj.evaluateOnce = function () {
                return hs_f26CZL0.hscall(hs_r26CZL9);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZPj, hs_sat26CZPo);
        case 3:
            var hs_sat26CZPq = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GHC.ForeignPtr: attempt to add a finalizer to a plain pointer\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CZPq);
        }
    };
    this.hs_addForeignPtrFinalizzerEnv.evaluate = function (hs_ds26CZLh, hs_ds126CZLk, hs_ds226CZLn) {
        var hs_wild26CZPF = hs_ds26CZLh;
        if (hs_ds26CZLh.notEvaluated) {
            hs_wild26CZPF = hs_ds26CZLh.hscall();
        }
        var hs_fp26CZLC = hs_wild26CZPF.data[0];
        var hs_wild126CZPE = hs_ds126CZLk;
        if (hs_ds126CZLk.notEvaluated) {
            hs_wild126CZPE = hs_ds126CZLk.hscall();
        }
        var hs_ep26CZLE = hs_wild126CZPE.data[0];
        var hs_wild226CZPD = hs_ds226CZLn;
        if (hs_ds226CZLn.notEvaluated) {
            hs_wild226CZPD = hs_ds226CZLn.hscall();
        }
        var hs_p26CZLD = hs_wild226CZPD.data[0];
        var hs_c26CZLP = hs_wild226CZPD.data[1];
        var hs_f26CZLO = new $hs.Func(1);
        hs_f26CZLO.evaluate = function (hs_r26CZLt) {
            var hs_sat26CZPM = new $hs.Thunk();
            hs_sat26CZPM.evaluateOnce = function () {
                var hs_sat26CZPO = new $hs.Func(1);
                hs_sat26CZPO.evaluate = function (hs_s26CZLF) {
                    var hs_wild326CZPQ = hs_r26CZLt;
                    if (hs_r26CZLt.notEvaluated) {
                        hs_wild326CZPQ = hs_r26CZLt.hscall();
                    }
                    var hs_rzh26CZLB = hs_wild326CZPQ.data[0];
                    throw "primitive operation mkWeakForeignEnv#. Not implemeted yet.";
                    var hs_s126CZLJ = hs_wild426CZPR[0];
                    var hs_w26CZLK = hs_wild426CZPR[1];
                    var hs_sat26CZPP = new $hs.Thunk();
                    hs_sat26CZPP.evaluateOnce = function () {
                        return hs_finalizzeForeign25t2hY.hscall(hs_w26CZLK);
                    };
                    return [hs_s126CZLJ, hs_sat26CZPP];
                };
                var hs_sat26CZPN = new $hs.Func(1);
                hs_sat26CZPN.evaluate = function (hs_tpl26CZLw) {
                    if (hs_tpl26CZLw.notEvaluated) {
                        return hs_tpl26CZLw.hscall();
                    } else {
                        return hs_tpl26CZLw;
                    }
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZPN, hs_sat26CZPO);
            };
            var hs_sat26CZPL = new $hs.Func(1);
            hs_sat26CZPL.evaluate = function (hs_eta1cW6l3) {
                return hs_noMixing25t2i1.hscall($hs.modules.GHCziForeignPtr.hs_CFinalizzers, hs_r26CZLt, hs_eta1cW6l3);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZPL, hs_sat26CZPM);
        };
        var hs_wild326CZPB = hs_c26CZLP;
        if (hs_c26CZLP.notEvaluated) {
            hs_wild326CZPB = hs_c26CZLP.hscall();
        }
        switch (hs_wild326CZPB.tag) {
        case 1:
            var hs_r26CZLS = hs_wild326CZPB.data[0];
            var hs_sat26CZPK = new $hs.Thunk();
            hs_sat26CZPK.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26CZPJ = new $hs.Thunk();
            hs_sat26CZPJ.evaluateOnce = function () {
                return hs_f26CZLO.hscall(hs_r26CZLS);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZPJ, hs_sat26CZPK);
        case 2:
            var hs_r26CZLX = hs_wild326CZPB.data[1];
            var hs_sat26CZPG = new $hs.Thunk();
            hs_sat26CZPG.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26CZPA = new $hs.Thunk();
            hs_sat26CZPA.evaluateOnce = function () {
                return hs_f26CZLO.hscall(hs_r26CZLX);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZPA, hs_sat26CZPG);
        case 3:
            var hs_sat26CZPI = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GHC.ForeignPtr: attempt to add a finalizer to a plain pointer\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CZPI);
        }
    };
    hs_foreignPtrFinalizzer25t2i2.evaluate = function (hs_r26CZM3) {
        var hs_sat26CZPT = new $hs.Func(1);
        hs_sat26CZPT.evaluate = function (hs_ds26CZM6) {
            var hs_wild26CZPV = hs_ds26CZM6;
            if (hs_ds26CZM6.notEvaluated) {
                hs_wild26CZPV = hs_ds26CZM6.hscall();
            }
            var hs_fs26CZMa = hs_wild26CZPV.data[1];
            return $hs.modules.ControlziMonad.hs_sequencezu.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_fs26CZMa);
        };
        var hs_sat26CZPS = new $hs.Thunk();
        hs_sat26CZPS.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_r26CZM3);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZPS, hs_sat26CZPT);
    };
    this.hs_addForeignPtrConcFinalizzer.evaluate = function (hs_ds26CZMe, hs_finalizzer26CZMm) {
        var hs_wild26CZPX = hs_ds26CZMe;
        if (hs_ds26CZMe.notEvaluated) {
            hs_wild26CZPX = hs_ds26CZMe.hscall();
        }
        var hs_c26CZMi = hs_wild26CZPX.data[1];
        var hs_wild126CZN0 = hs_c26CZMi;
        if (hs_c26CZMi.notEvaluated) {
            hs_wild126CZN0 = hs_c26CZMi.hscall();
        }
        switch (hs_wild126CZN0.tag) {
        case 1:
            var hs_r26CZMl = hs_wild126CZN0.data[0];
            var hs_sat26CZQe = new $hs.Func(1);
            hs_sat26CZQe.evaluate = function (hs_noFinalizzers26CZMq) {
                var hs_wild226CZQh = hs_noFinalizzers26CZMq;
                if (hs_noFinalizzers26CZMq.notEvaluated) {
                    hs_wild226CZQh = hs_noFinalizzers26CZMq.hscall();
                }
                switch (hs_wild226CZQh.tag) {
                case 1:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                case 2:
                    var hs_sat26CZQi = new $hs.Func(1);
                    hs_sat26CZQi.evaluate = function (hs_s26CZMB) {
                        var hs_wild326CZMz = hs_r26CZMl;
                        if (hs_r26CZMl.notEvaluated) {
                            hs_wild326CZMz = hs_r26CZMl.hscall();
                        }
                        var hs_rzh26CZMy = hs_wild326CZMz.data[0];
                        var hs_sat26CZQk = new $hs.Thunk();
                        hs_sat26CZQk.evaluateOnce = function () {
                            return hs_foreignPtrFinalizzer25t2i2.hscall(hs_wild326CZMz);
                        };
                        throw "primitive operation mkWeak#. Not implemeted yet.";
                        var hs_s126CZMF = hs_wild426CZQl[0];
                        return [hs_s126CZMF, $hs.modules.GHCziUnit.hs_Z0T];
                    };
                    var hs_sat26CZQg = new $hs.Func(1);
                    hs_sat26CZQg.evaluate = function (hs_tpl26CZMt) {
                        if (hs_tpl26CZMt.notEvaluated) {
                            return hs_tpl26CZMt.hscall();
                        } else {
                            return hs_tpl26CZMt;
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZQg, hs_sat26CZQi);
                }
            };
            var hs_sat26CZQd = new $hs.Thunk();
            hs_sat26CZQd.evaluateOnce = function () {
                var hs_sat26CZQf = new $hs.Thunk();
                hs_sat26CZQf.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_finalizzer26CZMm);
                };
                return hs_noMixing25t2i1.hscall($hs.modules.GHCziForeignPtr.hs_HaskellFinalizzers, hs_r26CZMl, hs_sat26CZQf);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZQd, hs_sat26CZQe);
        case 2:
            var hs_fo26CZMU = hs_wild126CZN0.data[0];
            var hs_r26CZMK = hs_wild126CZN0.data[1];
            var hs_sat26CZPZ = new $hs.Func(1);
            hs_sat26CZPZ.evaluate = function (hs_noFinalizzers26CZMO) {
                var hs_wild226CZQ2 = hs_noFinalizzers26CZMO;
                if (hs_noFinalizzers26CZMO.notEvaluated) {
                    hs_wild226CZQ2 = hs_noFinalizzers26CZMO.hscall();
                }
                switch (hs_wild226CZQ2.tag) {
                case 1:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                case 2:
                    var hs_sat26CZQ3 = new $hs.Func(1);
                    hs_sat26CZQ3.evaluate = function (hs_s26CZN7) {
                        var hs_sat26CZQ5 = new $hs.Thunk();
                        hs_sat26CZQ5.evaluateOnce = function () {
                            var hs_sat26CZQ8 = new $hs.Thunk();
                            hs_sat26CZQ8.evaluateOnce = function () {
                                var hs_sat26CZQa = new $hs.Func(1);
                                hs_sat26CZQa.evaluate = function (hs_s126CZN1) {
                                    throw "primitive operation touch#. Not implemeted yet.";
                                    return [hs_szq26CZN3, $hs.modules.GHCziUnit.hs_Z0T];
                                };
                                var hs_sat26CZQ9 = new $hs.Func(1);
                                hs_sat26CZQ9.evaluate = function (hs_tpl26CZMX) {
                                    if (hs_tpl26CZMX.notEvaluated) {
                                        return hs_tpl26CZMX.hscall();
                                    } else {
                                        return hs_tpl26CZMX;
                                    }
                                };
                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZQ9, hs_sat26CZQa);
                            };
                            var hs_sat26CZQ7 = new $hs.Thunk();
                            hs_sat26CZQ7.evaluateOnce = function () {
                                return hs_foreignPtrFinalizzer25t2i2.hscall(hs_r26CZMK);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZQ7, hs_sat26CZQ8);
                        };
                        throw "primitive operation mkWeak#. Not implemeted yet.";
                        var hs_s126CZNb = hs_wild326CZQ6[0];
                        return [hs_s126CZNb, $hs.modules.GHCziUnit.hs_Z0T];
                    };
                    var hs_sat26CZQ1 = new $hs.Func(1);
                    hs_sat26CZQ1.evaluate = function (hs_tpl26CZMR) {
                        if (hs_tpl26CZMR.notEvaluated) {
                            return hs_tpl26CZMR.hscall();
                        } else {
                            return hs_tpl26CZMR;
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CZQ1, hs_sat26CZQ3);
                }
            };
            var hs_sat26CZPW = new $hs.Thunk();
            hs_sat26CZPW.evaluateOnce = function () {
                var hs_sat26CZQ0 = new $hs.Thunk();
                hs_sat26CZQ0.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_finalizzer26CZMm);
                };
                return hs_noMixing25t2i1.hscall($hs.modules.GHCziForeignPtr.hs_HaskellFinalizzers, hs_r26CZMK, hs_sat26CZQ0);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZPW, hs_sat26CZPZ);
        case 3:
            var hs_sat26CZQc = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GHC.ForeignPtr: attempt to add a finalizer to plain pointer\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CZQc);
        }
    };
    this.hs_newConcForeignPtr.evaluate = function (hs_p26CZNi, hs_finalizzer26CZNm) {
        var hs_sat26CZQn = new $hs.Func(1);
        hs_sat26CZQn.evaluate = function (hs_fObj26CZNl) {
            var hs_sat26CZQp = new $hs.Thunk();
            hs_sat26CZQp.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_fObj26CZNl);
            };
            var hs_sat26CZQo = new $hs.Thunk();
            hs_sat26CZQo.evaluateOnce = function () {
                return $hs.modules.GHCziForeignPtr.hs_addForeignPtrConcFinalizzer.hscall(hs_fObj26CZNl, hs_finalizzer26CZNm);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZQo, hs_sat26CZQp);
        };
        var hs_sat26CZQm = new $hs.Thunk();
        hs_sat26CZQm.evaluateOnce = function () {
            return $hs.modules.GHCziForeignPtr.hs_newForeignPtrzu.hscall(hs_p26CZNi);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CZQm, hs_sat26CZQn);
    };
    this.hs_PlainForeignPtr.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_MallocPtr.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(2);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_PlainPtr.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(3);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_NoFinalizzers.data = [];
    this.hs_CFinalizzers.data = [];
    this.hs_HaskellFinalizzers.data = [];
    this.hs_ForeignPtr.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
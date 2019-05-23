
$hs.modules.GHCziForeignPtr = new $hs.Module();
$hs.modules.GHCziForeignPtr.dependencies = ["GHC.Types", "GHC.Unit", "Control.Monad", "GHC.Base", "GHC.Show", "GHC.Err", "Data.Typeable", "GHC.Classes", "GHC.IORef", "GHC.List", "GHC.Ptr", "Foreign.Storable"];
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
    this.hs_zdfTypeable1ForeignPtr = new $hs.Thunk();
    this.hs_zdfEqForeignPtr = new $hs.Data(1);
    this.hs_zdfOrdForeignPtr = new $hs.Func(1);
    this.hs_zdfShowForeignPtr = new $hs.Data(1);
    this.hs_zdfEqFinalizzers = new $hs.Data(1);
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
    this.hs_zdWPlainForeignPtr.evaluate = function (hs_tpl26Dnl8) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_tpl26Dnl8);
    };
    this.hs_zdWMallocPtr.notEvaluated = true;
    this.hs_zdWMallocPtr.evaluate = function (hs_tpl26Dnlf, hs_tpl26Dnld) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_tpl26Dnlf, hs_tpl26Dnld);
    };
    this.hs_finalizzeForeignPtr.notEvaluated = true;
    this.hs_finalizzeForeignPtr.evaluate = function (hs_ds26Dnli) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_ds26Dnli);
    };
    this.hs_castForeignPtr.notEvaluated = true;
    this.hs_castForeignPtr.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_unsafeForeignPtrToPtr.notEvaluated = true;
    this.hs_unsafeForeignPtrToPtr.evaluate = function (hs_ds26DnlP) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_ds26DnlP);
    };
    this.hs_touchForeignPtr.notEvaluated = true;
    this.hs_touchForeignPtr.evaluate = function (hs_ds26DnlV) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_ds26DnlV);
    };
    this.hs_newForeignPtrzu.notEvaluated = true;
    this.hs_newForeignPtrzu.evaluate = function (hs_ds26Dnm9) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_ds26Dnm9);
    };
    this.hs_mallocPlainForeignPtrBytes.notEvaluated = true;
    this.hs_mallocPlainForeignPtrBytes.evaluate = function (hs_sizze26DnmE) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_sizze26DnmE);
    };
    this.hs_mallocPlainForeignPtr.notEvaluated = true;
    this.hs_mallocPlainForeignPtr.evaluate = function (hs_zddStorable26Dnn0) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_zddStorable26Dnn0);
    };
    this.hs_mallocForeignPtrBytes.notEvaluated = true;
    this.hs_mallocForeignPtrBytes.evaluate = function (hs_sizze26Dnnq) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_sizze26Dnnq);
    };
    this.hs_mallocForeignPtr.notEvaluated = true;
    this.hs_mallocForeignPtr.evaluate = function (hs_zddStorable26DnnU) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_zddStorable26DnnU);
    };
    this.hs_zdfTypeable1ForeignPtr.evaluateOnce = function () {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfEqForeignPtr.notEvaluated = true;
    this.hs_zdfEqForeignPtr.evaluate = function () {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this;
    };
    this.hs_zdfOrdForeignPtr.notEvaluated = true;
    this.hs_zdfOrdForeignPtr.evaluate = function (hs_zddEq26Dnpo) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_zddEq26Dnpo);
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
    this.hs_addForeignPtrFinalizzer.notEvaluated = true;
    this.hs_addForeignPtrFinalizzer.evaluate = function (hs_ds26DnqP, hs_ds126DnqS) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_ds26DnqP, hs_ds126DnqS);
    };
    this.hs_addForeignPtrFinalizzerEnv.notEvaluated = true;
    this.hs_addForeignPtrFinalizzerEnv.evaluate = function (hs_ds26Dnrz, hs_ds126DnrC, hs_ds226DnrF) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_ds26Dnrz, hs_ds126DnrC, hs_ds226DnrF);
    };
    this.hs_addForeignPtrConcFinalizzer.notEvaluated = true;
    this.hs_addForeignPtrConcFinalizzer.evaluate = function (hs_ds26Dnsw, hs_finalizzer26DnsE) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_ds26Dnsw, hs_finalizzer26DnsE);
    };
    this.hs_newConcForeignPtr.notEvaluated = true;
    this.hs_newConcForeignPtr.evaluate = function (hs_p26DntA, hs_finalizzer26DntE) {
        $hs.modules.GHCziForeignPtr.loadDependencies();
        return this.evaluate(hs_p26DntA, hs_finalizzer26DntE);
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
    var hs_a25uYPv = new $hs.Func(1);
    var hs_finalizzeForeign25thJk = new $hs.Func(1);
    var hs_sat26Dnv0 = new $hs.Thunk();
    var hs_foreignPtrTc25thJ4 = new $hs.Thunk();
    var hs_zdctypeOf125uYSd = new $hs.Func(1);
    var hs_zdczeze25uYSh = new $hs.Func(2);
    var hs_zdczsze25uYSx = new $hs.Thunk();
    var hs_zdccompare25uYSz = new $hs.Func(1);
    var hs_zdcmin25uYSW = new $hs.Func(1);
    var hs_zdcmax25uYSY = new $hs.Func(1);
    var hs_zdczlze25uYT0 = new $hs.Func(1);
    var hs_zdczg25uYT2 = new $hs.Func(1);
    var hs_zdczgze25uYT4 = new $hs.Func(1);
    var hs_zdczl25uYT6 = new $hs.Func(1);
    var hs_zdcshowsPrec25uYTz = new $hs.Func(2);
    var hs_zdcshowList25uYTK = new $hs.Thunk();
    var hs_zdcshow25uYTM = new $hs.Thunk();
    var hs_zdczeze125uYTO = new $hs.Func(2);
    var hs_zdczsze125uYTY = new $hs.Func(2);
    var hs_noMixing25thJq = new $hs.Func(3);
    var hs_foreignPtrFinalizzer25thJs = new $hs.Func(1);
    this.hs_zdWPlainForeignPtr.evaluate = function (hs_tpl26Dnl8) {
        var hs_tpl26Dnla = hs_tpl26Dnl8;
        if (hs_tpl26Dnl8.notEvaluated) {
            hs_tpl26Dnla = hs_tpl26Dnl8.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26Dnla];
        return $res;
    };
    this.hs_zdWMallocPtr.evaluate = function (hs_tpl26Dnlf, hs_tpl26Dnld) {
        var hs_tpl26Dnlg = hs_tpl26Dnld;
        if (hs_tpl26Dnld.notEvaluated) {
            hs_tpl26Dnlg = hs_tpl26Dnld.hscall();
        }
        var $res = new $hs.Data(2);
        $res.data = [hs_tpl26Dnlf, hs_tpl26Dnlg];
        return $res;
    };
    this.hs_finalizzeForeignPtr.evaluate = function (hs_ds26Dnli) {
        var hs_wild26DntK = hs_ds26Dnli;
        if (hs_ds26Dnli.notEvaluated) {
            hs_wild26DntK = hs_ds26Dnli.hscall();
        }
        var hs_ds226Dnlm = hs_wild26DntK.data[1];
        var hs_wild126Dnlp = hs_ds226Dnlm;
        if (hs_ds226Dnlm.notEvaluated) {
            hs_wild126Dnlp = hs_ds226Dnlm.hscall();
        }
        switch (hs_wild126Dnlp.tag) {
        case 3:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        default:
            var hs_refFinalizzers26Dnlw = new $hs.Thunk();
            hs_refFinalizzers26Dnlw.evaluateOnce = function () {
                var hs_wild226DntI = hs_wild126Dnlp;
                if (hs_wild126Dnlp.notEvaluated) {
                    hs_wild226DntI = hs_wild126Dnlp.hscall();
                }
                switch (hs_wild226DntI.tag) {
                case 1:
                    var hs_ref26Dnls = hs_wild226DntI.data[0];
                    if (hs_ref26Dnls.notEvaluated) {
                        return hs_ref26Dnls.hscall();
                    } else {
                        return hs_ref26Dnls;
                    }
                case 2:
                    var hs_ref26Dnlv = hs_wild226DntI.data[1];
                    if (hs_ref26Dnlv.notEvaluated) {
                        return hs_ref26Dnlv.hscall();
                    } else {
                        return hs_ref26Dnlv;
                    }
                }
            };
            var hs_sat26DntQ = new $hs.Func(1);
            hs_sat26DntQ.evaluate = function (hs_ds326Dnlz) {
                var hs_wild226DntM = hs_ds326Dnlz;
                if (hs_ds326Dnlz.notEvaluated) {
                    hs_wild226DntM = hs_ds326Dnlz.hscall();
                }
                var hs_ftype26DnlF = hs_wild226DntM.data[0];
                var hs_finalizzers26DnlD = hs_wild226DntM.data[1];
                var hs_sat26DntO = new $hs.Thunk();
                hs_sat26DntO.evaluateOnce = function () {
                    var hs_sat26DntN = new $hs.Data(1);
                    hs_sat26DntN.data = [hs_ftype26DnlF, $hs.modules.GHCziTypes.hs_ZMZN];
                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_refFinalizzers26Dnlw, hs_sat26DntN);
                };
                var hs_sat26DntP = new $hs.Thunk();
                hs_sat26DntP.evaluateOnce = function () {
                    return $hs.modules.ControlziMonad.hs_sequencezu.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_finalizzers26DnlD);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DntP, hs_sat26DntO);
            };
            var hs_sat26DntR = new $hs.Thunk();
            hs_sat26DntR.evaluateOnce = function () {
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_refFinalizzers26Dnlw);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DntR, hs_sat26DntQ);
        }
    };
    hs_a25uYPv.evaluate = function (hs_f26DnlN) {
        if (hs_f26DnlN.notEvaluated) {
            return hs_f26DnlN.hscall();
        } else {
            return hs_f26DnlN;
        }
    };
    this.hs_castForeignPtr.evaluate = function (hs_eta1cW6l3) {
        return hs_a25uYPv.hscall(hs_eta1cW6l3);
    };
    this.hs_unsafeForeignPtrToPtr.evaluate = function (hs_ds26DnlP) {
        var hs_wild26DntT = hs_ds26DnlP;
        if (hs_ds26DnlP.notEvaluated) {
            hs_wild26DntT = hs_ds26DnlP.hscall();
        }
        var hs_fo26DnlT = hs_wild26DntT.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_fo26DnlT];
        return $res;
    };
    this.hs_touchForeignPtr.evaluate = function (hs_ds26DnlV) {
        var hs_wild26DntW = hs_ds26DnlV;
        if (hs_ds26DnlV.notEvaluated) {
            hs_wild26DntW = hs_ds26DnlV.hscall();
        }
        var hs_r26Dnm3 = hs_wild26DntW.data[1];
        var hs_sat26DntX = new $hs.Func(1);
        hs_sat26DntX.evaluate = function (hs_s26Dnm4) {
            throw "primitive operation touch#. Not implemeted yet.";
            return [hs_szq26Dnm6, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DntY = new $hs.Func(1);
        hs_sat26DntY.evaluate = function (hs_tpl26Dnm0) {
            if (hs_tpl26Dnm0.notEvaluated) {
                return hs_tpl26Dnm0.hscall();
            } else {
                return hs_tpl26Dnm0;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DntY, hs_sat26DntX);
    };
    this.hs_newForeignPtrzu.evaluate = function (hs_ds26Dnm9) {
        var hs_wild26Dnu0 = hs_ds26Dnm9;
        if (hs_ds26Dnm9.notEvaluated) {
            hs_wild26Dnu0 = hs_ds26Dnm9.hscall();
        }
        var hs_obj26Dnmf = hs_wild26Dnu0.data[0];
        var hs_sat26Dnu3 = new $hs.Func(1);
        hs_sat26Dnu3.evaluate = function (hs_r26Dnmg) {
            var hs_sat26Dnu1 = new $hs.Thunk();
            hs_sat26Dnu1.evaluateOnce = function () {
                var hs_nt26Dnmj = hs_r26Dnmg;
                if (hs_r26Dnmg.notEvaluated) {
                    hs_nt26Dnmj = hs_r26Dnmg.hscall();
                }
                var $res = new $hs.Data(1);
                $res.data = [hs_nt26Dnmj];
                return $res;
            };
            var hs_sat26Dnu2 = new $hs.Data(1);
            hs_sat26Dnu2.data = [hs_obj26Dnmf, hs_sat26Dnu1];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dnu2);
        };
        var hs_sat26Dnu5 = new $hs.Thunk();
        hs_sat26Dnu5.evaluateOnce = function () {
            var hs_sat26Dnu4 = new $hs.Data(1);
            hs_sat26Dnu4.data = [$hs.modules.GHCziForeignPtr.hs_NoFinalizzers, $hs.modules.GHCziTypes.hs_ZMZN];
            return $hs.modules.GHCziIORef.hs_newIORef.hscall(hs_sat26Dnu4);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dnu5, hs_sat26Dnu3);
    };
    hs_finalizzeForeign25thJk.evaluate = function (hs_w26Dnms) {
        var hs_sat26Dnu8 = new $hs.Func(1);
        hs_sat26Dnu8.evaluate = function (hs_s26Dnmt) {
            throw "primitive operation finalizeWeak#. Not implemeted yet.";
            var hs_s126DnmA = hs_wild26Dnu7[0];
            var hs_ds26Dnmy = hs_wild26Dnu7[1];
            var hs_ds126DnmB = hs_wild26Dnu7[2];
            var hs_ds226Dnu6 = hs_ds26Dnmy;
            if (hs_ds26Dnmy.notEvaluated) {
                hs_ds226Dnu6 = hs_ds26Dnmy.hscall();
            }
            switch (hs_ds226Dnu6) {
            case 0:
                return [hs_s126DnmA, $hs.modules.GHCziUnit.hs_Z0T];
            default:
                return hs_ds126DnmB.hscall(hs_s126DnmA);
            }
        };
        var hs_sat26Dnu9 = new $hs.Func(1);
        hs_sat26Dnu9.evaluate = function (hs_tpl26Dnmp) {
            if (hs_tpl26Dnmp.notEvaluated) {
                return hs_tpl26Dnmp.hscall();
            } else {
                return hs_tpl26Dnmp;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dnu9, hs_sat26Dnu8);
    };
    this.hs_mallocPlainForeignPtrBytes.evaluate = function (hs_sizze26DnmE) {
        var hs_sat26Dnud = new $hs.Data(1);
        hs_sat26Dnud.data = [0];
        var hs_wild26Dnuc = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sizze26DnmE, hs_sat26Dnud);
        switch (hs_wild26Dnuc.tag) {
        case 1:
            var hs_wild126Dnub = hs_sizze26DnmE;
            if (hs_sizze26DnmE.notEvaluated) {
                hs_wild126Dnub = hs_sizze26DnmE.hscall();
            }
            var hs_sizze126DnmN = hs_wild126Dnub.data[0];
            var hs_sat26Dnuh = new $hs.Func(1);
            hs_sat26Dnuh.evaluate = function (hs_s26DnmO) {
                throw "primitive operation newPinnedByteArray#. Not implemeted yet.";
                var hs_szq26DnmS = hs_wild226Dnua[0];
                var hs_mbarrzh26DnmT = hs_wild226Dnua[1];
                var hs_sat26Dnue = new $hs.Data(3);
                hs_sat26Dnue.data = [hs_mbarrzh26DnmT];
                throw "primitive operation byteArrayContents#. Not implemeted yet.";
                var hs_sat26Dnug = new $hs.Data(1);
                hs_sat26Dnug.data = [hs_sat26Dnuf, hs_sat26Dnue];
                return [hs_szq26DnmS, hs_sat26Dnug];
            };
            var hs_sat26Dnui = new $hs.Func(1);
            hs_sat26Dnui.evaluate = function (hs_tpl26DnmK) {
                if (hs_tpl26DnmK.notEvaluated) {
                    return hs_tpl26DnmK.hscall();
                } else {
                    return hs_tpl26DnmK;
                }
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dnui, hs_sat26Dnuh);
        case 2:
            var hs_sat26Dnuj = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("mallocPlainForeignPtrBytes: size must be >= 0\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dnuj);
        }
    };
    this.hs_mallocPlainForeignPtr.evaluate = function (hs_zddStorable26Dnn0) {
        var hs_wild26Dnul = $hs.modules.ForeignziStorable.hs_alignment.hscall(hs_zddStorable26Dnn0, $hs.modules.GHCziErr.hs_undefined);
        var hs_align26Dnnd = hs_wild26Dnul.data[0];
        var hs_wild126Dnuk = $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26Dnn0, $hs.modules.GHCziErr.hs_undefined);
        var hs_sizze26Dnn5 = hs_wild126Dnuk.data[0];
        var hs_sat26Dnum = new $hs.Data(1);
        hs_sat26Dnum.data = [0];
        var hs_sat26Dnup = new $hs.Data(1);
        hs_sat26Dnup.data = [hs_sizze26Dnn5];
        var hs_wild226Dnuo = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26Dnup, hs_sat26Dnum);
        switch (hs_wild226Dnuo.tag) {
        case 1:
            var hs_sat26Dnut = new $hs.Func(1);
            hs_sat26Dnut.evaluate = function (hs_s26Dnne) {
                throw "primitive operation newAlignedPinnedByteArray#. Not implemeted yet.";
                var hs_szq26Dnni = hs_wild326Dnun[0];
                var hs_mbarrzh26Dnnj = hs_wild326Dnun[1];
                var hs_sat26Dnuq = new $hs.Data(3);
                hs_sat26Dnuq.data = [hs_mbarrzh26Dnnj];
                throw "primitive operation byteArrayContents#. Not implemeted yet.";
                var hs_sat26Dnus = new $hs.Data(1);
                hs_sat26Dnus.data = [hs_sat26Dnur, hs_sat26Dnuq];
                return [hs_szq26Dnni, hs_sat26Dnus];
            };
            var hs_sat26Dnuu = new $hs.Func(1);
            hs_sat26Dnuu.evaluate = function (hs_tpl26Dnna) {
                if (hs_tpl26Dnna.notEvaluated) {
                    return hs_tpl26Dnna.hscall();
                } else {
                    return hs_tpl26Dnna;
                }
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dnuu, hs_sat26Dnut);
        case 2:
            var hs_sat26Dnuv = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("mallocForeignPtr: size must be >= 0\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dnuv);
        }
    };
    this.hs_mallocForeignPtrBytes.evaluate = function (hs_sizze26Dnnq) {
        var hs_sat26DnuA = new $hs.Data(1);
        hs_sat26DnuA.data = [0];
        var hs_wild26Dnuz = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sizze26Dnnq, hs_sat26DnuA);
        switch (hs_wild26Dnuz.tag) {
        case 1:
            var hs_wild126Dnuy = hs_sizze26Dnnq;
            if (hs_sizze26Dnnq.notEvaluated) {
                hs_wild126Dnuy = hs_sizze26Dnnq.hscall();
            }
            var hs_sizze126DnnC = hs_wild126Dnuy.data[0];
            var hs_sat26DnuG = new $hs.Func(1);
            hs_sat26DnuG.evaluate = function (hs_r26DnnK) {
                var hs_sat26DnuE = new $hs.Func(1);
                hs_sat26DnuE.evaluate = function (hs_s26DnnD) {
                    throw "primitive operation newPinnedByteArray#. Not implemeted yet.";
                    var hs_szq26DnnH = hs_wild226Dnux[0];
                    var hs_mbarrzh26DnnI = hs_wild226Dnux[1];
                    var hs_sat26DnuB = new $hs.Thunk();
                    hs_sat26DnuB.evaluateOnce = function () {
                        var hs_nt26DnnN = hs_r26DnnK;
                        if (hs_r26DnnK.notEvaluated) {
                            hs_nt26DnnN = hs_r26DnnK.hscall();
                        }
                        var $res = new $hs.Data(2);
                        $res.data = [hs_mbarrzh26DnnI, hs_nt26DnnN];
                        return $res;
                    };
                    throw "primitive operation byteArrayContents#. Not implemeted yet.";
                    var hs_sat26DnuD = new $hs.Data(1);
                    hs_sat26DnuD.data = [hs_sat26DnuC, hs_sat26DnuB];
                    return [hs_szq26DnnH, hs_sat26DnuD];
                };
                var hs_sat26DnuF = new $hs.Func(1);
                hs_sat26DnuF.evaluate = function (hs_tpl26Dnnz) {
                    if (hs_tpl26Dnnz.notEvaluated) {
                        return hs_tpl26Dnnz.hscall();
                    } else {
                        return hs_tpl26Dnnz;
                    }
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DnuF, hs_sat26DnuE);
            };
            var hs_sat26DnuI = new $hs.Thunk();
            hs_sat26DnuI.evaluateOnce = function () {
                var hs_sat26DnuH = new $hs.Data(1);
                hs_sat26DnuH.data = [$hs.modules.GHCziForeignPtr.hs_NoFinalizzers, $hs.modules.GHCziTypes.hs_ZMZN];
                return $hs.modules.GHCziIORef.hs_newIORef.hscall(hs_sat26DnuH);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DnuI, hs_sat26DnuG);
        case 2:
            var hs_sat26DnuJ = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("mallocForeignPtrBytes: size must be >= 0\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DnuJ);
        }
    };
    this.hs_mallocForeignPtr.evaluate = function (hs_zddStorable26DnnU) {
        var hs_wild26DnuL = $hs.modules.ForeignziStorable.hs_alignment.hscall(hs_zddStorable26DnnU, $hs.modules.GHCziErr.hs_undefined);
        var hs_align26Dnoa = hs_wild26DnuL.data[0];
        var hs_wild126DnuK = $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DnnU, $hs.modules.GHCziErr.hs_undefined);
        var hs_sizze26DnnZ = hs_wild126DnuK.data[0];
        var hs_sat26DnuM = new $hs.Data(1);
        hs_sat26DnuM.data = [0];
        var hs_sat26DnuQ = new $hs.Data(1);
        hs_sat26DnuQ.data = [hs_sizze26DnnZ];
        var hs_wild226DnuP = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DnuQ, hs_sat26DnuM);
        switch (hs_wild226DnuP.tag) {
        case 1:
            var hs_sat26DnuW = new $hs.Func(1);
            hs_sat26DnuW.evaluate = function (hs_r26Dnoi) {
                var hs_sat26DnuU = new $hs.Func(1);
                hs_sat26DnuU.evaluate = function (hs_s26Dnob) {
                    throw "primitive operation newAlignedPinnedByteArray#. Not implemeted yet.";
                    var hs_szq26Dnof = hs_wild326DnuO[0];
                    var hs_mbarrzh26Dnog = hs_wild326DnuO[1];
                    var hs_sat26DnuR = new $hs.Thunk();
                    hs_sat26DnuR.evaluateOnce = function () {
                        var hs_nt26Dnol = hs_r26Dnoi;
                        if (hs_r26Dnoi.notEvaluated) {
                            hs_nt26Dnol = hs_r26Dnoi.hscall();
                        }
                        var $res = new $hs.Data(2);
                        $res.data = [hs_mbarrzh26Dnog, hs_nt26Dnol];
                        return $res;
                    };
                    throw "primitive operation byteArrayContents#. Not implemeted yet.";
                    var hs_sat26DnuT = new $hs.Data(1);
                    hs_sat26DnuT.data = [hs_sat26DnuS, hs_sat26DnuR];
                    return [hs_szq26Dnof, hs_sat26DnuT];
                };
                var hs_sat26DnuV = new $hs.Func(1);
                hs_sat26DnuV.evaluate = function (hs_tpl26Dno7) {
                    if (hs_tpl26Dno7.notEvaluated) {
                        return hs_tpl26Dno7.hscall();
                    } else {
                        return hs_tpl26Dno7;
                    }
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DnuV, hs_sat26DnuU);
            };
            var hs_sat26DnuY = new $hs.Thunk();
            hs_sat26DnuY.evaluateOnce = function () {
                var hs_sat26DnuX = new $hs.Data(1);
                hs_sat26DnuX.data = [$hs.modules.GHCziForeignPtr.hs_NoFinalizzers, $hs.modules.GHCziTypes.hs_ZMZN];
                return $hs.modules.GHCziIORef.hs_newIORef.hscall(hs_sat26DnuX);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DnuY, hs_sat26DnuW);
        case 2:
            var hs_sat26DnuZ = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("mallocForeignPtr: size must be >= 0\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DnuZ);
        }
    };
    hs_sat26Dnv0.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ForeignPtr\x00");
    };
    hs_foreignPtrTc25thJ4.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26Dnv0);
    };
    hs_zdctypeOf125uYSd.evaluate = function (hs_ds26Dnov) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_foreignPtrTc25thJ4, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeable1ForeignPtr.evaluateOnce = function () {
        if (hs_zdctypeOf125uYSd.notEvaluated) {
            return hs_zdctypeOf125uYSd.hscall();
        } else {
            return hs_zdctypeOf125uYSd;
        }
    };
    hs_zdczeze25uYSh.evaluate = function (hs_p26DnoA, hs_q26DnoG) {
        var hs_sat26Dnv4 = new $hs.Thunk();
        hs_sat26Dnv4.evaluateOnce = function () {
            var hs_wild26Dnv1 = hs_q26DnoG;
            if (hs_q26DnoG.notEvaluated) {
                hs_wild26Dnv1 = hs_q26DnoG.hscall();
            }
            var hs_fo26DnoK = hs_wild26Dnv1.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_fo26DnoK];
            return $res;
        };
        var hs_sat26Dnv6 = new $hs.Thunk();
        hs_sat26Dnv6.evaluateOnce = function () {
            var hs_wild26Dnv3 = hs_p26DnoA;
            if (hs_p26DnoA.notEvaluated) {
                hs_wild26Dnv3 = hs_p26DnoA.hscall();
            }
            var hs_fo26DnoE = hs_wild26Dnv3.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_fo26DnoE];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_sat26Dnv6, hs_sat26Dnv4);
    };
    this.hs_zdfEqForeignPtr.data = [hs_zdczeze25uYSh, hs_zdczsze25uYSx];
    hs_zdczsze25uYSx.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzsze.hscall($hs.modules.GHCziForeignPtr.hs_zdfEqForeignPtr);
    };
    hs_zdccompare25uYSz.evaluate = function (hs_zddEq26Dnpa) {
        var hs_zddOrd26DnoS = new $hs.Thunk();
        hs_zddOrd26DnoS.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_zdfOrdPtr.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr);
        };
        var hs_sat26Dnvb = new $hs.Func(2);
        hs_sat26Dnvb.evaluate = function (hs_p26DnoV, hs_q26Dnp1) {
            var hs_sat26Dnv8 = new $hs.Thunk();
            hs_sat26Dnv8.evaluateOnce = function () {
                var hs_wild26Dnp7 = hs_q26Dnp1;
                if (hs_q26Dnp1.notEvaluated) {
                    hs_wild26Dnp7 = hs_q26Dnp1.hscall();
                }
                var hs_fo26Dnp5 = hs_wild26Dnp7.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_fo26Dnp5];
                return $res;
            };
            var hs_sat26Dnva = new $hs.Thunk();
            hs_sat26Dnva.evaluateOnce = function () {
                var hs_wild26Dnv7 = hs_p26DnoV;
                if (hs_p26DnoV.notEvaluated) {
                    hs_wild26Dnv7 = hs_p26DnoV.hscall();
                }
                var hs_fo26DnoZ = hs_wild26Dnv7.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_fo26DnoZ];
                return $res;
            };
            return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd26DnoS, hs_sat26Dnva, hs_sat26Dnv8);
        };
        if (hs_sat26Dnvb.notEvaluated) {
            return hs_sat26Dnvb.hscall();
        } else {
            return hs_sat26Dnvb;
        }
    };
    this.hs_zdfOrdForeignPtr.evaluate = function (hs_zddEq26Dnpo) {
        var hs_sat26Dnvc = new $hs.Thunk();
        hs_sat26Dnvc.evaluateOnce = function () {
            return hs_zdcmin25uYSW.hscall(hs_zddEq26Dnpo);
        };
        var hs_sat26Dnvd = new $hs.Thunk();
        hs_sat26Dnvd.evaluateOnce = function () {
            return hs_zdcmax25uYSY.hscall(hs_zddEq26Dnpo);
        };
        var hs_sat26Dnve = new $hs.Thunk();
        hs_sat26Dnve.evaluateOnce = function () {
            return hs_zdczlze25uYT0.hscall(hs_zddEq26Dnpo);
        };
        var hs_sat26Dnvf = new $hs.Thunk();
        hs_sat26Dnvf.evaluateOnce = function () {
            return hs_zdczg25uYT2.hscall(hs_zddEq26Dnpo);
        };
        var hs_sat26Dnvg = new $hs.Thunk();
        hs_sat26Dnvg.evaluateOnce = function () {
            return hs_zdczgze25uYT4.hscall(hs_zddEq26Dnpo);
        };
        var hs_sat26Dnvh = new $hs.Thunk();
        hs_sat26Dnvh.evaluateOnce = function () {
            return hs_zdczl25uYT6.hscall(hs_zddEq26Dnpo);
        };
        var hs_sat26Dnvi = new $hs.Thunk();
        hs_sat26Dnvi.evaluateOnce = function () {
            return hs_zdccompare25uYSz.hscall(hs_zddEq26Dnpo);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq26Dnpo, hs_sat26Dnvi, hs_sat26Dnvh, hs_sat26Dnvg, hs_sat26Dnvf, hs_sat26Dnve, hs_sat26Dnvd, hs_sat26Dnvc];
        return $res;
    };
    hs_zdcmin25uYSW.evaluate = function (hs_zddEq26Dnpx) {
        var hs_sat26Dnvj = new $hs.Thunk();
        hs_sat26Dnvj.evaluateOnce = function () {
            return $hs.modules.GHCziForeignPtr.hs_zdfOrdForeignPtr.hscall(hs_zddEq26Dnpx);
        };
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall(hs_sat26Dnvj);
    };
    hs_zdcmax25uYSY.evaluate = function (hs_zddEq26DnpA) {
        var hs_sat26Dnvk = new $hs.Thunk();
        hs_sat26Dnvk.evaluateOnce = function () {
            return $hs.modules.GHCziForeignPtr.hs_zdfOrdForeignPtr.hscall(hs_zddEq26DnpA);
        };
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall(hs_sat26Dnvk);
    };
    hs_zdczlze25uYT0.evaluate = function (hs_zddEq26DnpD) {
        var hs_sat26Dnvl = new $hs.Thunk();
        hs_sat26Dnvl.evaluateOnce = function () {
            return $hs.modules.GHCziForeignPtr.hs_zdfOrdForeignPtr.hscall(hs_zddEq26DnpD);
        };
        return $hs.modules.GHCziClasses.hs_zddmzlze.hscall(hs_sat26Dnvl);
    };
    hs_zdczg25uYT2.evaluate = function (hs_zddEq26DnpG) {
        var hs_sat26Dnvm = new $hs.Thunk();
        hs_sat26Dnvm.evaluateOnce = function () {
            return $hs.modules.GHCziForeignPtr.hs_zdfOrdForeignPtr.hscall(hs_zddEq26DnpG);
        };
        return $hs.modules.GHCziClasses.hs_zddmzg.hscall(hs_sat26Dnvm);
    };
    hs_zdczgze25uYT4.evaluate = function (hs_zddEq26DnpJ) {
        var hs_sat26Dnvn = new $hs.Thunk();
        hs_sat26Dnvn.evaluateOnce = function () {
            return $hs.modules.GHCziForeignPtr.hs_zdfOrdForeignPtr.hscall(hs_zddEq26DnpJ);
        };
        return $hs.modules.GHCziClasses.hs_zddmzgze.hscall(hs_sat26Dnvn);
    };
    hs_zdczl25uYT6.evaluate = function (hs_zddEq26DnpM) {
        var hs_sat26Dnvo = new $hs.Thunk();
        hs_sat26Dnvo.evaluateOnce = function () {
            return $hs.modules.GHCziForeignPtr.hs_zdfOrdForeignPtr.hscall(hs_zddEq26DnpM);
        };
        return $hs.modules.GHCziClasses.hs_zddmzl.hscall(hs_sat26Dnvo);
    };
    hs_zdcshowsPrec25uYTz.evaluate = function (hs_p26DnpS, hs_f26DnpT) {
        var hs_sat26Dnvr = new $hs.Thunk();
        hs_sat26Dnvr.evaluateOnce = function () {
            var hs_wild26Dnvp = hs_f26DnpT;
            if (hs_f26DnpT.notEvaluated) {
                hs_wild26Dnvp = hs_f26DnpT.hscall();
            }
            var hs_fo26DnpX = hs_wild26Dnvp.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_fo26DnpX];
            return $res;
        };
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziPtr.hs_zdfShowPtr, hs_p26DnpS, hs_sat26Dnvr);
    };
    this.hs_zdfShowForeignPtr.data = [hs_zdcshowsPrec25uYTz, hs_zdcshow25uYTM, hs_zdcshowList25uYTK];
    hs_zdcshowList25uYTK.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziForeignPtr.hs_zdfShowForeignPtr);
    };
    hs_zdcshow25uYTM.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziForeignPtr.hs_zdfShowForeignPtr);
    };
    hs_zdczeze125uYTO.evaluate = function (hs_a126Dnq7, hs_b26Dnq9) {
        var hs_wild26Dnvt = hs_a126Dnq7;
        if (hs_a126Dnq7.notEvaluated) {
            hs_wild26Dnvt = hs_a126Dnq7.hscall();
        }
        switch (hs_wild26Dnvt.tag) {
        case 1:
            var hs_wild126Dnvs = hs_b26Dnq9;
            if (hs_b26Dnq9.notEvaluated) {
                hs_wild126Dnvs = hs_b26Dnq9.hscall();
            }
            switch (hs_wild126Dnvs.tag) {
            case 1:
                return 0 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 0 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 0 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 2:
            var hs_wild126Dnvu = hs_b26Dnq9;
            if (hs_b26Dnq9.notEvaluated) {
                hs_wild126Dnvu = hs_b26Dnq9.hscall();
            }
            switch (hs_wild126Dnvu.tag) {
            case 1:
                return 1 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 1 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 1 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 3:
            var hs_wild126Dnvv = hs_b26Dnq9;
            if (hs_b26Dnq9.notEvaluated) {
                hs_wild126Dnvv = hs_b26Dnq9.hscall();
            }
            switch (hs_wild126Dnvv.tag) {
            case 1:
                return 2 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 2 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 2 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        }
    };
    this.hs_zdfEqFinalizzers.data = [hs_zdczeze125uYTO, hs_zdczsze125uYTY];
    hs_zdczsze125uYTY.evaluate = function (hs_a126Dnqh, hs_b26Dnqi) {
        var hs_sat26Dnvw = new $hs.Thunk();
        hs_sat26Dnvw.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziForeignPtr.hs_zdfEqFinalizzers, hs_a126Dnqh, hs_b26Dnqi);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26Dnvw);
    };
    hs_noMixing25thJq.evaluate = function (hs_ftype026Dnqw, hs_r26Dnqn, hs_mkF26Dnqz) {
        var hs_sat26DnvK = new $hs.Func(1);
        hs_sat26DnvK.evaluate = function (hs_ds26Dnqq) {
            var hs_wild26Dnvx = hs_ds26Dnqq;
            if (hs_ds26Dnqq.notEvaluated) {
                hs_wild26Dnvx = hs_ds26Dnqq.hscall();
            }
            var hs_ftype26Dnqu = hs_wild26Dnvx.data[0];
            var hs_fs26DnqC = hs_wild26Dnvx.data[1];
            var hs_sat26Dnvy = new $hs.Thunk();
            hs_sat26Dnvy.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziForeignPtr.hs_zdfEqFinalizzers, hs_ftype26Dnqu, hs_ftype026Dnqw);
            };
            var hs_sat26DnvA = new $hs.Thunk();
            hs_sat26DnvA.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziForeignPtr.hs_zdfEqFinalizzers, hs_ftype26Dnqu, $hs.modules.GHCziForeignPtr.hs_NoFinalizzers);
            };
            var hs_wild126Dnvz = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DnvA, hs_sat26Dnvy);
            switch (hs_wild126Dnvz.tag) {
            case 1:
                var hs_sat26DnvG = new $hs.Func(1);
                hs_sat26DnvG.evaluate = function (hs_f26DnqB) {
                    var hs_sat26DnvC = new $hs.Thunk();
                    hs_sat26DnvC.evaluateOnce = function () {
                        var hs_sat26DnvB = new $hs.Thunk();
                        hs_sat26DnvB.evaluateOnce = function () {
                            return $hs.modules.GHCziList.hs_null.hscall(hs_fs26DnqC);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DnvB);
                    };
                    var hs_sat26DnvF = new $hs.Thunk();
                    hs_sat26DnvF.evaluateOnce = function () {
                        var hs_sat26DnvD = new $hs.Data(2);
                        hs_sat26DnvD.data = [hs_f26DnqB, hs_fs26DnqC];
                        var hs_sat26DnvE = new $hs.Data(1);
                        hs_sat26DnvE.data = [hs_ftype026Dnqw, hs_sat26DnvD];
                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_r26Dnqn, hs_sat26DnvE);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DnvF, hs_sat26DnvC);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_mkF26Dnqz, hs_sat26DnvG);
            case 2:
                var hs_sat26DnvH = new $hs.Thunk();
                hs_sat26DnvH.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("in the same ForeignPtr\x00");
                };
                var hs_sat26DnvJ = new $hs.Thunk();
                hs_sat26DnvJ.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("GHC.ForeignPtr: attempt to mix Haskell and C finalizers \x00");
                };
                var hs_sat26DnvI = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DnvJ, hs_sat26DnvH);
                return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DnvI);
            }
        };
        var hs_sat26DnvL = new $hs.Thunk();
        hs_sat26DnvL.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_r26Dnqn);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DnvL, hs_sat26DnvK);
    };
    this.hs_addForeignPtrFinalizzer.evaluate = function (hs_ds26DnqP, hs_ds126DnqS) {
        var hs_wild26DnvP = hs_ds26DnqP;
        if (hs_ds26DnqP.notEvaluated) {
            hs_wild26DnvP = hs_ds26DnqP.hscall();
        }
        var hs_fp26Dnr7 = hs_wild26DnvP.data[0];
        var hs_wild126DnvO = hs_ds126DnqS;
        if (hs_ds126DnqS.notEvaluated) {
            hs_wild126DnvO = hs_ds126DnqS.hscall();
        }
        var hs_p26Dnr8 = hs_wild126DnvO.data[0];
        var hs_c26Dnrj = hs_wild126DnvO.data[1];
        var hs_f26Dnri = new $hs.Func(1);
        hs_f26Dnri.evaluate = function (hs_r26DnqY) {
            var hs_sat26DnvT = new $hs.Thunk();
            hs_sat26DnvT.evaluateOnce = function () {
                var hs_sat26DnvR = new $hs.Func(1);
                hs_sat26DnvR.evaluate = function (hs_s26Dnr9) {
                    var hs_wild226DnvN = hs_r26DnqY;
                    if (hs_r26DnqY.notEvaluated) {
                        hs_wild226DnvN = hs_r26DnqY.hscall();
                    }
                    var hs_rzh26Dnr6 = hs_wild226DnvN.data[0];
                    throw "primitive operation mkWeakForeignEnv#. Not implemeted yet.";
                    var hs_s126Dnrd = hs_wild326DnvM[0];
                    var hs_w26Dnre = hs_wild326DnvM[1];
                    var hs_sat26DnvQ = new $hs.Thunk();
                    hs_sat26DnvQ.evaluateOnce = function () {
                        return hs_finalizzeForeign25thJk.hscall(hs_w26Dnre);
                    };
                    return [hs_s126Dnrd, hs_sat26DnvQ];
                };
                var hs_sat26DnvS = new $hs.Func(1);
                hs_sat26DnvS.evaluate = function (hs_tpl26Dnr1) {
                    if (hs_tpl26Dnr1.notEvaluated) {
                        return hs_tpl26Dnr1.hscall();
                    } else {
                        return hs_tpl26Dnr1;
                    }
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DnvS, hs_sat26DnvR);
            };
            var hs_sat26DnvU = new $hs.Func(1);
            hs_sat26DnvU.evaluate = function (hs_eta1cW6l3) {
                return hs_noMixing25thJq.hscall($hs.modules.GHCziForeignPtr.hs_CFinalizzers, hs_r26DnqY, hs_eta1cW6l3);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DnvU, hs_sat26DnvT);
        };
        var hs_wild226DnvV = hs_c26Dnrj;
        if (hs_c26Dnrj.notEvaluated) {
            hs_wild226DnvV = hs_c26Dnrj.hscall();
        }
        switch (hs_wild226DnvV.tag) {
        case 1:
            var hs_r26Dnrm = hs_wild226DnvV.data[0];
            var hs_sat26DnvW = new $hs.Thunk();
            hs_sat26DnvW.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26DnvX = new $hs.Thunk();
            hs_sat26DnvX.evaluateOnce = function () {
                return hs_f26Dnri.hscall(hs_r26Dnrm);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DnvX, hs_sat26DnvW);
        case 2:
            var hs_r26Dnrr = hs_wild226DnvV.data[1];
            var hs_sat26DnvZ = new $hs.Thunk();
            hs_sat26DnvZ.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26Dnw0 = new $hs.Thunk();
            hs_sat26Dnw0.evaluateOnce = function () {
                return hs_f26Dnri.hscall(hs_r26Dnrr);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dnw0, hs_sat26DnvZ);
        case 3:
            var hs_sat26Dnw1 = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("GHC.ForeignPtr: attempt to add a finalizer to a plain pointer\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dnw1);
        }
    };
    this.hs_addForeignPtrFinalizzerEnv.evaluate = function (hs_ds26Dnrz, hs_ds126DnrC, hs_ds226DnrF) {
        var hs_wild26Dnw7 = hs_ds26Dnrz;
        if (hs_ds26Dnrz.notEvaluated) {
            hs_wild26Dnw7 = hs_ds26Dnrz.hscall();
        }
        var hs_fp26DnrU = hs_wild26Dnw7.data[0];
        var hs_wild126Dnw6 = hs_ds126DnrC;
        if (hs_ds126DnrC.notEvaluated) {
            hs_wild126Dnw6 = hs_ds126DnrC.hscall();
        }
        var hs_ep26DnrW = hs_wild126Dnw6.data[0];
        var hs_wild226Dnw5 = hs_ds226DnrF;
        if (hs_ds226DnrF.notEvaluated) {
            hs_wild226Dnw5 = hs_ds226DnrF.hscall();
        }
        var hs_p26DnrV = hs_wild226Dnw5.data[0];
        var hs_c26Dns7 = hs_wild226Dnw5.data[1];
        var hs_f26Dns6 = new $hs.Func(1);
        hs_f26Dns6.evaluate = function (hs_r26DnrL) {
            var hs_sat26Dnwb = new $hs.Thunk();
            hs_sat26Dnwb.evaluateOnce = function () {
                var hs_sat26Dnw9 = new $hs.Func(1);
                hs_sat26Dnw9.evaluate = function (hs_s26DnrX) {
                    var hs_wild326Dnw4 = hs_r26DnrL;
                    if (hs_r26DnrL.notEvaluated) {
                        hs_wild326Dnw4 = hs_r26DnrL.hscall();
                    }
                    var hs_rzh26DnrT = hs_wild326Dnw4.data[0];
                    throw "primitive operation mkWeakForeignEnv#. Not implemeted yet.";
                    var hs_s126Dns1 = hs_wild426Dnw3[0];
                    var hs_w26Dns2 = hs_wild426Dnw3[1];
                    var hs_sat26Dnw8 = new $hs.Thunk();
                    hs_sat26Dnw8.evaluateOnce = function () {
                        return hs_finalizzeForeign25thJk.hscall(hs_w26Dns2);
                    };
                    return [hs_s126Dns1, hs_sat26Dnw8];
                };
                var hs_sat26Dnwa = new $hs.Func(1);
                hs_sat26Dnwa.evaluate = function (hs_tpl26DnrO) {
                    if (hs_tpl26DnrO.notEvaluated) {
                        return hs_tpl26DnrO.hscall();
                    } else {
                        return hs_tpl26DnrO;
                    }
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dnwa, hs_sat26Dnw9);
            };
            var hs_sat26Dnwc = new $hs.Func(1);
            hs_sat26Dnwc.evaluate = function (hs_eta1cW6l3) {
                return hs_noMixing25thJq.hscall($hs.modules.GHCziForeignPtr.hs_CFinalizzers, hs_r26DnrL, hs_eta1cW6l3);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dnwc, hs_sat26Dnwb);
        };
        var hs_wild326Dnwd = hs_c26Dns7;
        if (hs_c26Dns7.notEvaluated) {
            hs_wild326Dnwd = hs_c26Dns7.hscall();
        }
        switch (hs_wild326Dnwd.tag) {
        case 1:
            var hs_r26Dnsa = hs_wild326Dnwd.data[0];
            var hs_sat26Dnwe = new $hs.Thunk();
            hs_sat26Dnwe.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26Dnwf = new $hs.Thunk();
            hs_sat26Dnwf.evaluateOnce = function () {
                return hs_f26Dns6.hscall(hs_r26Dnsa);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dnwf, hs_sat26Dnwe);
        case 2:
            var hs_r26Dnsf = hs_wild326Dnwd.data[1];
            var hs_sat26Dnwh = new $hs.Thunk();
            hs_sat26Dnwh.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26Dnwi = new $hs.Thunk();
            hs_sat26Dnwi.evaluateOnce = function () {
                return hs_f26Dns6.hscall(hs_r26Dnsf);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dnwi, hs_sat26Dnwh);
        case 3:
            var hs_sat26Dnwj = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("GHC.ForeignPtr: attempt to add a finalizer to a plain pointer\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dnwj);
        }
    };
    hs_foreignPtrFinalizzer25thJs.evaluate = function (hs_r26Dnsl) {
        var hs_sat26Dnwn = new $hs.Func(1);
        hs_sat26Dnwn.evaluate = function (hs_ds26Dnso) {
            var hs_wild26Dnwm = hs_ds26Dnso;
            if (hs_ds26Dnso.notEvaluated) {
                hs_wild26Dnwm = hs_ds26Dnso.hscall();
            }
            var hs_fs26Dnss = hs_wild26Dnwm.data[1];
            return $hs.modules.ControlziMonad.hs_sequencezu.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_fs26Dnss);
        };
        var hs_sat26Dnwo = new $hs.Thunk();
        hs_sat26Dnwo.evaluateOnce = function () {
            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_r26Dnsl);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dnwo, hs_sat26Dnwn);
    };
    this.hs_addForeignPtrConcFinalizzer.evaluate = function (hs_ds26Dnsw, hs_finalizzer26DnsE) {
        var hs_wild26Dnwr = hs_ds26Dnsw;
        if (hs_ds26Dnsw.notEvaluated) {
            hs_wild26Dnwr = hs_ds26Dnsw.hscall();
        }
        var hs_c26DnsA = hs_wild26Dnwr.data[1];
        var hs_wild126Dnti = hs_c26DnsA;
        if (hs_c26DnsA.notEvaluated) {
            hs_wild126Dnti = hs_c26DnsA.hscall();
        }
        switch (hs_wild126Dnti.tag) {
        case 1:
            var hs_r26DnsD = hs_wild126Dnti.data[0];
            var hs_sat26Dnwx = new $hs.Func(1);
            hs_sat26Dnwx.evaluate = function (hs_noFinalizzers26DnsI) {
                var hs_wild226Dnwp = hs_noFinalizzers26DnsI;
                if (hs_noFinalizzers26DnsI.notEvaluated) {
                    hs_wild226Dnwp = hs_noFinalizzers26DnsI.hscall();
                }
                switch (hs_wild226Dnwp.tag) {
                case 1:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                case 2:
                    var hs_sat26Dnwv = new $hs.Func(1);
                    hs_sat26Dnwv.evaluate = function (hs_s26DnsT) {
                        var hs_wild326DnsR = hs_r26DnsD;
                        if (hs_r26DnsD.notEvaluated) {
                            hs_wild326DnsR = hs_r26DnsD.hscall();
                        }
                        var hs_rzh26DnsQ = hs_wild326DnsR.data[0];
                        var hs_sat26Dnwt = new $hs.Thunk();
                        hs_sat26Dnwt.evaluateOnce = function () {
                            return hs_foreignPtrFinalizzer25thJs.hscall(hs_wild326DnsR);
                        };
                        throw "primitive operation mkWeak#. Not implemeted yet.";
                        var hs_s126DnsX = hs_wild426Dnws[0];
                        return [hs_s126DnsX, $hs.modules.GHCziUnit.hs_Z0T];
                    };
                    var hs_sat26Dnww = new $hs.Func(1);
                    hs_sat26Dnww.evaluate = function (hs_tpl26DnsL) {
                        if (hs_tpl26DnsL.notEvaluated) {
                            return hs_tpl26DnsL.hscall();
                        } else {
                            return hs_tpl26DnsL;
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dnww, hs_sat26Dnwv);
                }
            };
            var hs_sat26Dnwz = new $hs.Thunk();
            hs_sat26Dnwz.evaluateOnce = function () {
                var hs_sat26Dnwy = new $hs.Thunk();
                hs_sat26Dnwy.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_finalizzer26DnsE);
                };
                return hs_noMixing25thJq.hscall($hs.modules.GHCziForeignPtr.hs_HaskellFinalizzers, hs_r26DnsD, hs_sat26Dnwy);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dnwz, hs_sat26Dnwx);
        case 2:
            var hs_fo26Dntc = hs_wild126Dnti.data[0];
            var hs_r26Dnt2 = hs_wild126Dnti.data[1];
            var hs_sat26DnwK = new $hs.Func(1);
            hs_sat26DnwK.evaluate = function (hs_noFinalizzers26Dnt6) {
                var hs_wild226DnwA = hs_noFinalizzers26Dnt6;
                if (hs_noFinalizzers26Dnt6.notEvaluated) {
                    hs_wild226DnwA = hs_noFinalizzers26Dnt6.hscall();
                }
                switch (hs_wild226DnwA.tag) {
                case 1:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                case 2:
                    var hs_sat26DnwI = new $hs.Func(1);
                    hs_sat26DnwI.evaluate = function (hs_s26Dntp) {
                        var hs_sat26DnwG = new $hs.Thunk();
                        hs_sat26DnwG.evaluateOnce = function () {
                            var hs_sat26DnwD = new $hs.Thunk();
                            hs_sat26DnwD.evaluateOnce = function () {
                                var hs_sat26DnwB = new $hs.Func(1);
                                hs_sat26DnwB.evaluate = function (hs_s126Dntj) {
                                    throw "primitive operation touch#. Not implemeted yet.";
                                    return [hs_szq26Dntl, $hs.modules.GHCziUnit.hs_Z0T];
                                };
                                var hs_sat26DnwC = new $hs.Func(1);
                                hs_sat26DnwC.evaluate = function (hs_tpl26Dntf) {
                                    if (hs_tpl26Dntf.notEvaluated) {
                                        return hs_tpl26Dntf.hscall();
                                    } else {
                                        return hs_tpl26Dntf;
                                    }
                                };
                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DnwC, hs_sat26DnwB);
                            };
                            var hs_sat26DnwE = new $hs.Thunk();
                            hs_sat26DnwE.evaluateOnce = function () {
                                return hs_foreignPtrFinalizzer25thJs.hscall(hs_r26Dnt2);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DnwE, hs_sat26DnwD);
                        };
                        throw "primitive operation mkWeak#. Not implemeted yet.";
                        var hs_s126Dntt = hs_wild326DnwF[0];
                        return [hs_s126Dntt, $hs.modules.GHCziUnit.hs_Z0T];
                    };
                    var hs_sat26DnwJ = new $hs.Func(1);
                    hs_sat26DnwJ.evaluate = function (hs_tpl26Dnt9) {
                        if (hs_tpl26Dnt9.notEvaluated) {
                            return hs_tpl26Dnt9.hscall();
                        } else {
                            return hs_tpl26Dnt9;
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DnwJ, hs_sat26DnwI);
                }
            };
            var hs_sat26DnwM = new $hs.Thunk();
            hs_sat26DnwM.evaluateOnce = function () {
                var hs_sat26DnwL = new $hs.Thunk();
                hs_sat26DnwL.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_finalizzer26DnsE);
                };
                return hs_noMixing25thJq.hscall($hs.modules.GHCziForeignPtr.hs_HaskellFinalizzers, hs_r26Dnt2, hs_sat26DnwL);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DnwM, hs_sat26DnwK);
        case 3:
            var hs_sat26DnwN = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("GHC.ForeignPtr: attempt to add a finalizer to plain pointer\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DnwN);
        }
    };
    this.hs_newConcForeignPtr.evaluate = function (hs_p26DntA, hs_finalizzer26DntE) {
        var hs_sat26DnwR = new $hs.Func(1);
        hs_sat26DnwR.evaluate = function (hs_fObj26DntD) {
            var hs_sat26DnwP = new $hs.Thunk();
            hs_sat26DnwP.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_fObj26DntD);
            };
            var hs_sat26DnwQ = new $hs.Thunk();
            hs_sat26DnwQ.evaluateOnce = function () {
                return $hs.modules.GHCziForeignPtr.hs_addForeignPtrConcFinalizzer.hscall(hs_fObj26DntD, hs_finalizzer26DntE);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DnwQ, hs_sat26DnwP);
        };
        var hs_sat26DnwS = new $hs.Thunk();
        hs_sat26DnwS.evaluateOnce = function () {
            return $hs.modules.GHCziForeignPtr.hs_newForeignPtrzu.hscall(hs_p26DntA);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DnwS, hs_sat26DnwR);
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

$hs.modules.DataziEither = new $hs.Module();
$hs.modules.DataziEither.dependencies = ["GHC.Prim", "GHC.Types", "GHC.CString", "GHC.Generics", "GHC.Base", "GHC.Show", "Data.Typeable.Internal", "GHC.Classes", "GHC.Read", "Text.ParserCombinators.ReadPrec"];
$hs.modules.DataziEither.initBeforeDependencies = function () {
    this.hs_rights = new $hs.Func(1);
    this.hs_lefts = new $hs.Func(1);
    this.hs_either = new $hs.Func(3);
    this.hs_partitionEithers = new $hs.Thunk();
    this.hs_zdfConstructorEither0 = new $hs.Data(1);
    this.hs_zdfConstructorEither = new $hs.Data(1);
    this.hs_zdfDatatypeEither = new $hs.Data(1);
    this.hs_zdfGenericEither = new $hs.Data(1);
    this.hs_zdfShowEither = new $hs.Func(2);
    this.hs_zdfReadEither = new $hs.Func(2);
    this.hs_zdfEqEither = new $hs.Func(2);
    this.hs_zdfOrdEither = new $hs.Func(2);
    this.hs_zdfTypeable2Either = new $hs.Thunk();
    this.hs_Left = new $hs.Func(1);
    this.hs_Right = new $hs.Func(1);
    this.hs_rights.notEvaluated = true;
    this.hs_rights.evaluate = function (hs_x26CIM5) {
        $hs.modules.DataziEither.loadDependencies();
        return this.evaluate(hs_x26CIM5);
    };
    this.hs_lefts.notEvaluated = true;
    this.hs_lefts.evaluate = function (hs_x26CIMl) {
        $hs.modules.DataziEither.loadDependencies();
        return this.evaluate(hs_x26CIMl);
    };
    this.hs_either.notEvaluated = true;
    this.hs_either.evaluate = function (hs_f26CIMt, hs_ds26CIMw, hs_ds126CIMp) {
        $hs.modules.DataziEither.loadDependencies();
        return this.evaluate(hs_f26CIMt, hs_ds26CIMw, hs_ds126CIMp);
    };
    this.hs_partitionEithers.evaluateOnce = function () {
        $hs.modules.DataziEither.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfConstructorEither0.notEvaluated = true;
    this.hs_zdfConstructorEither0.evaluate = function () {
        $hs.modules.DataziEither.loadDependencies();
        return this;
    };
    this.hs_zdfConstructorEither.notEvaluated = true;
    this.hs_zdfConstructorEither.evaluate = function () {
        $hs.modules.DataziEither.loadDependencies();
        return this;
    };
    this.hs_zdfDatatypeEither.notEvaluated = true;
    this.hs_zdfDatatypeEither.evaluate = function () {
        $hs.modules.DataziEither.loadDependencies();
        return this;
    };
    this.hs_zdfGenericEither.notEvaluated = true;
    this.hs_zdfGenericEither.evaluate = function () {
        $hs.modules.DataziEither.loadDependencies();
        return this;
    };
    this.hs_zdfShowEither.notEvaluated = true;
    this.hs_zdfShowEither.evaluate = function (hs_zddShow26CIOe, hs_zddShow126CIOf) {
        $hs.modules.DataziEither.loadDependencies();
        return this.evaluate(hs_zddShow26CIOe, hs_zddShow126CIOf);
    };
    this.hs_zdfReadEither.notEvaluated = true;
    this.hs_zdfReadEither.evaluate = function (hs_zddRead26CIPo, hs_zddRead126CIPp) {
        $hs.modules.DataziEither.loadDependencies();
        return this.evaluate(hs_zddRead26CIPo, hs_zddRead126CIPp);
    };
    this.hs_zdfEqEither.notEvaluated = true;
    this.hs_zdfEqEither.evaluate = function (hs_zddEq26CIRU, hs_zddEq126CIRV) {
        $hs.modules.DataziEither.loadDependencies();
        return this.evaluate(hs_zddEq26CIRU, hs_zddEq126CIRV);
    };
    this.hs_zdfOrdEither.notEvaluated = true;
    this.hs_zdfOrdEither.evaluate = function (hs_zddOrd26CISl, hs_zddOrd126CISm) {
        $hs.modules.DataziEither.loadDependencies();
        return this.evaluate(hs_zddOrd26CISl, hs_zddOrd126CISm);
    };
    this.hs_zdfTypeable2Either.evaluateOnce = function () {
        $hs.modules.DataziEither.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_Left.notEvaluated = true;
    this.hs_Left.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziEither.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Right.notEvaluated = true;
    this.hs_Right.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziEither.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.DataziEither.initAfterDependencies = function () {
    this.hs_rights.notEvaluated = false;
    this.hs_lefts.notEvaluated = false;
    this.hs_either.notEvaluated = false;
    this.hs_zdfConstructorEither0.notEvaluated = false;
    this.hs_zdfConstructorEither0.evaluate = function () {
        return this;
    };
    this.hs_zdfConstructorEither.notEvaluated = false;
    this.hs_zdfConstructorEither.evaluate = function () {
        return this;
    };
    this.hs_zdfDatatypeEither.notEvaluated = false;
    this.hs_zdfDatatypeEither.evaluate = function () {
        return this;
    };
    this.hs_zdfGenericEither.notEvaluated = false;
    this.hs_zdfGenericEither.evaluate = function () {
        return this;
    };
    this.hs_zdfShowEither.notEvaluated = false;
    this.hs_zdfReadEither.notEvaluated = false;
    this.hs_zdfEqEither.notEvaluated = false;
    this.hs_zdfOrdEither.notEvaluated = false;
    this.hs_Left.notEvaluated = false;
    this.hs_Right.notEvaluated = false;
    var hs_zdcconName25ukgW = new $hs.Func(1);
    var hs_zdcconIsRecord25ukgZ = new $hs.Thunk();
    var hs_zdcconFixity25ukh0 = new $hs.Thunk();
    var hs_zdcconName125ukh1 = new $hs.Func(1);
    var hs_zdcconIsRecord125ukh4 = new $hs.Thunk();
    var hs_zdcconFixity125ukh5 = new $hs.Thunk();
    var hs_zdcmoduleName25ukh6 = new $hs.Func(1);
    var hs_zdcdatatypeName25ukh9 = new $hs.Func(1);
    var hs_zdcto25ukhc = new $hs.Func(1);
    var hs_zdcfrom25ukhk = new $hs.Func(1);
    var hs_zdcshowsPrec25ukhs = new $hs.Func(4);
    var hs_zdcshowList25ukhU = new $hs.Func(2);
    var hs_zdcshow25ukhV = new $hs.Func(2);
    var hs_zdcreadPrec25ukif = new $hs.Func(2);
    var hs_zdcreadListPrec25ukj3 = new $hs.Func(2);
    var hs_zdcreadList25ukj4 = new $hs.Func(2);
    var hs_zdcreadsPrec25ukj5 = new $hs.Func(2);
    var hs_zdczlze25ukjt = new $hs.Func(4);
    var hs_zdczg25ukjP = new $hs.Func(4);
    var hs_zdczgze25ukkb = new $hs.Func(4);
    var hs_zdczl25ukkx = new $hs.Func(4);
    var hs_zdccompare25ukkT = new $hs.Func(4);
    var hs_zdczeze25uklf = new $hs.Func(4);
    var hs_zdczsze25uklB = new $hs.Func(2);
    var hs_zdczdp1Ord25uklU = new $hs.Func(2);
    var hs_zdcmin25ukm1 = new $hs.Func(2);
    var hs_zdcmax25ukm2 = new $hs.Func(2);
    var hs_zdctypeOf225ukmp = new $hs.Func(1);
    this.hs_rights.evaluate = function (hs_x26CIM5) {
        var hs_ds26CIM1 = new $hs.Func(1);
        hs_ds26CIM1.evaluate = function (hs_ds126CILT) {
            var hs_ds226CISO = hs_ds126CILT;
            if (hs_ds126CILT.notEvaluated) {
                hs_ds226CISO = hs_ds126CILT.hscall();
            }
            switch (hs_ds226CISO.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326CILX = hs_ds226CISO.data[0];
                var hs_ds426CIM0 = hs_ds226CISO.data[1];
                var hs_wild26CISN = hs_ds326CILX;
                if (hs_ds326CILX.notEvaluated) {
                    hs_wild26CISN = hs_ds326CILX.hscall();
                }
                switch (hs_wild26CISN.tag) {
                case 1:
                    return hs_ds26CIM1.hscall(hs_ds426CIM0);
                case 2:
                    var hs_a26CIM3 = hs_wild26CISN.data[0];
                    var hs_sat26CISM = new $hs.Thunk();
                    hs_sat26CISM.evaluateOnce = function () {
                        return hs_ds26CIM1.hscall(hs_ds426CIM0);
                    };
                    var $res = new $hs.Data(2);
                    $res.data = [hs_a26CIM3, hs_sat26CISM];
                    return $res;
                }
            }
        };
        return hs_ds26CIM1.hscall(hs_x26CIM5);
    };
    this.hs_lefts.evaluate = function (hs_x26CIMl) {
        var hs_ds26CIMi = new $hs.Func(1);
        hs_ds26CIMi.evaluate = function (hs_ds126CIM9) {
            var hs_ds226CISS = hs_ds126CIM9;
            if (hs_ds126CIM9.notEvaluated) {
                hs_ds226CISS = hs_ds126CIM9.hscall();
            }
            switch (hs_ds226CISS.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326CIMd = hs_ds226CISS.data[0];
                var hs_ds426CIMh = hs_ds226CISS.data[1];
                var hs_wild26CISR = hs_ds326CIMd;
                if (hs_ds326CIMd.notEvaluated) {
                    hs_wild26CISR = hs_ds326CIMd.hscall();
                }
                switch (hs_wild26CISR.tag) {
                case 1:
                    var hs_a26CIMg = hs_wild26CISR.data[0];
                    var hs_sat26CIST = new $hs.Thunk();
                    hs_sat26CIST.evaluateOnce = function () {
                        return hs_ds26CIMi.hscall(hs_ds426CIMh);
                    };
                    var $res = new $hs.Data(2);
                    $res.data = [hs_a26CIMg, hs_sat26CIST];
                    return $res;
                case 2:
                    return hs_ds26CIMi.hscall(hs_ds426CIMh);
                }
            }
        };
        return hs_ds26CIMi.hscall(hs_x26CIMl);
    };
    this.hs_either.evaluate = function (hs_f26CIMt, hs_ds26CIMw, hs_ds126CIMp) {
        var hs_wild26CISU = hs_ds126CIMp;
        if (hs_ds126CIMp.notEvaluated) {
            hs_wild26CISU = hs_ds126CIMp.hscall();
        }
        switch (hs_wild26CISU.tag) {
        case 1:
            var hs_x26CIMs = hs_wild26CISU.data[0];
            return hs_f26CIMt.hscall(hs_x26CIMs);
        case 2:
            var hs_y26CIMv = hs_wild26CISU.data[0];
            return hs_ds26CIMw.hscall(hs_y26CIMv);
        }
    };
    this.hs_partitionEithers.evaluateOnce = function () {
        var hs_sat26CISW = new $hs.Data(1);
        hs_sat26CISW.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26CISV = new $hs.Func(1);
        hs_sat26CISV.evaluate = function (hs_ds26CIMy) {
            var hs_wild26CISY = hs_ds26CIMy;
            if (hs_ds26CIMy.notEvaluated) {
                hs_wild26CISY = hs_ds26CIMy.hscall();
            }
            switch (hs_wild26CISY.tag) {
            case 1:
                var hs_x26CIMC = hs_wild26CISY.data[0];
                var hs_sat26CIT4 = new $hs.Func(1);
                hs_sat26CIT4.evaluate = function (hs_ds126CIMD) {
                    var hs_sat26CIT6 = new $hs.Thunk();
                    hs_sat26CIT6.evaluateOnce = function () {
                        var hs_wild126CIMP = hs_ds126CIMD;
                        if (hs_ds126CIMD.notEvaluated) {
                            hs_wild126CIMP = hs_ds126CIMD.hscall();
                        }
                        var hs_r26CIMN = hs_wild126CIMP.data[1];
                        if (hs_r26CIMN.notEvaluated) {
                            return hs_r26CIMN.hscall();
                        } else {
                            return hs_r26CIMN;
                        }
                    };
                    var hs_sat26CIT7 = new $hs.Thunk();
                    hs_sat26CIT7.evaluateOnce = function () {
                        var hs_wild126CIT9 = hs_ds126CIMD;
                        if (hs_ds126CIMD.notEvaluated) {
                            hs_wild126CIT9 = hs_ds126CIMD.hscall();
                        }
                        var hs_l26CIMH = hs_wild126CIT9.data[0];
                        if (hs_l26CIMH.notEvaluated) {
                            return hs_l26CIMH.hscall();
                        } else {
                            return hs_l26CIMH;
                        }
                    };
                    var hs_sat26CIT5 = new $hs.Data(2);
                    hs_sat26CIT5.data = [hs_x26CIMC, hs_sat26CIT7];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26CIT5, hs_sat26CIT6];
                    return $res;
                };
                if (hs_sat26CIT4.notEvaluated) {
                    return hs_sat26CIT4.hscall();
                } else {
                    return hs_sat26CIT4;
                }
            case 2:
                var hs_y26CIN0 = hs_wild26CISY.data[0];
                var hs_sat26CISX = new $hs.Func(1);
                hs_sat26CISX.evaluate = function (hs_ds126CIMU) {
                    var hs_sat26CIT0 = new $hs.Thunk();
                    hs_sat26CIT0.evaluateOnce = function () {
                        var hs_wild126CIN7 = hs_ds126CIMU;
                        if (hs_ds126CIMU.notEvaluated) {
                            hs_wild126CIN7 = hs_ds126CIMU.hscall();
                        }
                        var hs_r26CIN4 = hs_wild126CIN7.data[1];
                        if (hs_r26CIN4.notEvaluated) {
                            return hs_r26CIN4.hscall();
                        } else {
                            return hs_r26CIN4;
                        }
                    };
                    var hs_sat26CIT1 = new $hs.Data(2);
                    hs_sat26CIT1.data = [hs_y26CIN0, hs_sat26CIT0];
                    var hs_sat26CISZ = new $hs.Thunk();
                    hs_sat26CISZ.evaluateOnce = function () {
                        var hs_wild126CIT3 = hs_ds126CIMU;
                        if (hs_ds126CIMU.notEvaluated) {
                            hs_wild126CIT3 = hs_ds126CIMU.hscall();
                        }
                        var hs_l26CIMY = hs_wild126CIT3.data[0];
                        if (hs_l26CIMY.notEvaluated) {
                            return hs_l26CIMY.hscall();
                        } else {
                            return hs_l26CIMY;
                        }
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26CISZ, hs_sat26CIT1];
                    return $res;
                };
                if (hs_sat26CISX.notEvaluated) {
                    return hs_sat26CISX.hscall();
                } else {
                    return hs_sat26CISX;
                }
            }
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26CISV, hs_sat26CISW);
    };
    hs_zdcconName25ukgW.evaluate = function (hs_ds26CINe) {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Right\x00");
    };
    this.hs_zdfConstructorEither0.data = [hs_zdcconName25ukgW, hs_zdcconFixity25ukh0, hs_zdcconIsRecord25ukgZ];
    hs_zdcconIsRecord25ukgZ.evaluateOnce = function () {
        return $hs.modules.GHCziGenerics.hs_zddmconIsRecord.hscall($hs.modules.DataziEither.hs_zdfConstructorEither0);
    };
    hs_zdcconFixity25ukh0.evaluateOnce = function () {
        return $hs.modules.GHCziGenerics.hs_zddmconFixity.hscall($hs.modules.DataziEither.hs_zdfConstructorEither0);
    };
    hs_zdcconName125ukh1.evaluate = function (hs_ds26CINj) {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Left\x00");
    };
    this.hs_zdfConstructorEither.data = [hs_zdcconName125ukh1, hs_zdcconFixity125ukh5, hs_zdcconIsRecord125ukh4];
    hs_zdcconIsRecord125ukh4.evaluateOnce = function () {
        return $hs.modules.GHCziGenerics.hs_zddmconIsRecord.hscall($hs.modules.DataziEither.hs_zdfConstructorEither);
    };
    hs_zdcconFixity125ukh5.evaluateOnce = function () {
        return $hs.modules.GHCziGenerics.hs_zddmconFixity.hscall($hs.modules.DataziEither.hs_zdfConstructorEither);
    };
    hs_zdcmoduleName25ukh6.evaluate = function (hs_ds26CINo) {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Data.Either\x00");
    };
    hs_zdcdatatypeName25ukh9.evaluate = function (hs_ds26CINr) {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Either\x00");
    };
    this.hs_zdfDatatypeEither.data = [hs_zdcdatatypeName25ukh9, hs_zdcmoduleName25ukh6];
    hs_zdcto25ukhc.evaluate = function (hs_ds26CINu) {
        var hs_wild26CITa = hs_ds26CINu;
        if (hs_ds26CINu.notEvaluated) {
            hs_wild26CITa = hs_ds26CINu.hscall();
        }
        switch (hs_wild26CITa.tag) {
        case 1:
            var hs_ds126CINx = hs_wild26CITa.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds126CINx];
            return $res;
        case 2:
            var hs_ds126CINz = hs_wild26CITa.data[0];
            var $res = new $hs.Data(2);
            $res.data = [hs_ds126CINz];
            return $res;
        }
    };
    hs_zdcfrom25ukhk.evaluate = function (hs_ds26CINC) {
        var hs_wild26CITb = hs_ds26CINC;
        if (hs_ds26CINC.notEvaluated) {
            hs_wild26CITb = hs_ds26CINC.hscall();
        }
        switch (hs_wild26CITb.tag) {
        case 1:
            var hs_g126CINF = hs_wild26CITb.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_g126CINF];
            return $res;
        case 2:
            var hs_g126CINH = hs_wild26CITb.data[0];
            var $res = new $hs.Data(2);
            $res.data = [hs_g126CINH];
            return $res;
        }
    };
    this.hs_zdfGenericEither.data = [hs_zdcfrom25ukhk, hs_zdcto25ukhc];
    hs_zdcshowsPrec25ukhs.evaluate = function (hs_zddShow26CINV, hs_zddShow126CIO5, hs_a26CINQ, hs_ds26CINN) {
        var hs_wild26CITd = hs_ds26CINN;
        if (hs_ds26CINN.notEvaluated) {
            hs_wild26CITd = hs_ds26CINN.hscall();
        }
        switch (hs_wild26CITd.tag) {
        case 1:
            var hs_b126CINX = hs_wild26CITd.data[0];
            var hs_sat26CITl = new $hs.Thunk();
            hs_sat26CITl.evaluateOnce = function () {
                var hs_sat26CITo = new $hs.Thunk();
                hs_sat26CITo.evaluateOnce = function () {
                    var hs_sat26CITq = new $hs.Data(1);
                    hs_sat26CITq.data = [11];
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26CINV, hs_sat26CITq, hs_b126CINX);
                };
                var hs_sat26CITn = new $hs.Thunk();
                hs_sat26CITn.evaluateOnce = function () {
                    var hs_sat26CITp = new $hs.Thunk();
                    hs_sat26CITp.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Left \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26CITp);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CITn, hs_sat26CITo);
            };
            var hs_sat26CITk = new $hs.Thunk();
            hs_sat26CITk.evaluateOnce = function () {
                var hs_sat26CITm = new $hs.Data(1);
                hs_sat26CITm.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a26CINQ, hs_sat26CITm);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26CITk, hs_sat26CITl);
        case 2:
            var hs_b126CIO7 = hs_wild26CITd.data[0];
            var hs_sat26CITe = new $hs.Thunk();
            hs_sat26CITe.evaluateOnce = function () {
                var hs_sat26CITh = new $hs.Thunk();
                hs_sat26CITh.evaluateOnce = function () {
                    var hs_sat26CITj = new $hs.Data(1);
                    hs_sat26CITj.data = [11];
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126CIO5, hs_sat26CITj, hs_b126CIO7);
                };
                var hs_sat26CITg = new $hs.Thunk();
                hs_sat26CITg.evaluateOnce = function () {
                    var hs_sat26CITi = new $hs.Thunk();
                    hs_sat26CITi.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Right \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26CITi);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CITg, hs_sat26CITh);
            };
            var hs_sat26CITc = new $hs.Thunk();
            hs_sat26CITc.evaluateOnce = function () {
                var hs_sat26CITf = new $hs.Data(1);
                hs_sat26CITf.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a26CINQ, hs_sat26CITf);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26CITc, hs_sat26CITe);
        }
    };
    this.hs_zdfShowEither.evaluate = function (hs_zddShow26CIOe, hs_zddShow126CIOf) {
        var hs_sat26CITs = new $hs.Thunk();
        hs_sat26CITs.evaluateOnce = function () {
            return hs_zdcshowList25ukhU.hscall(hs_zddShow26CIOe, hs_zddShow126CIOf);
        };
        var hs_sat26CITt = new $hs.Thunk();
        hs_sat26CITt.evaluateOnce = function () {
            return hs_zdcshow25ukhV.hscall(hs_zddShow26CIOe, hs_zddShow126CIOf);
        };
        var hs_sat26CITr = new $hs.Func(2);
        hs_sat26CITr.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec25ukhs.hscall(hs_zddShow26CIOe, hs_zddShow126CIOf, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CITr, hs_sat26CITt, hs_sat26CITs];
        return $res;
    };
    hs_zdcshowList25ukhU.evaluate = function (hs_zddShow26CIOl, hs_zddShow126CIOm) {
        var hs_sat26CITu = new $hs.Thunk();
        hs_sat26CITu.evaluateOnce = function () {
            var hs_sat26CITv = new $hs.Data(1);
            hs_sat26CITv.data = [0];
            var hs_sat26CITw = $hs.modules.DataziEither.hs_zdfShowEither.hscall(hs_zddShow26CIOl, hs_zddShow126CIOm);
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_sat26CITw, hs_sat26CITv);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26CITu);
    };
    hs_zdcshow25ukhV.evaluate = function (hs_zddShow26CIOs, hs_zddShow126CIOt) {
        var hs_sat26CITx = new $hs.Thunk();
        hs_sat26CITx.evaluateOnce = function () {
            return $hs.modules.DataziEither.hs_zdfShowEither.hscall(hs_zddShow26CIOs, hs_zddShow126CIOt);
        };
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_sat26CITx);
    };
    hs_zdcreadPrec25ukif.evaluate = function (hs_zddRead26CIOL, hs_zddRead126CIP8) {
        var hs_sat26CITy = new $hs.Thunk();
        hs_sat26CITy.evaluateOnce = function () {
            var hs_sat26CITA = new $hs.Thunk();
            hs_sat26CITA.evaluateOnce = function () {
                var hs_sat26CITN = new $hs.Thunk();
                hs_sat26CITN.evaluateOnce = function () {
                    var hs_sat26CITO = new $hs.Func(1);
                    hs_sat26CITO.evaluate = function (hs_ds26CIP2) {
                        var hs_fail26CIP1 = new $hs.Func(1);
                        hs_fail26CIP1.evaluate = function (hs_ds126CIP0) {
                            var hs_sat26CITW = new $hs.Thunk();
                            hs_sat26CITW.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                            };
                            return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26CITW);
                        };
                        var hs_wild26CITQ = hs_ds26CIP2;
                        if (hs_ds26CIP2.notEvaluated) {
                            hs_wild26CITQ = hs_ds26CIP2.hscall();
                        }
                        switch (hs_wild26CITQ.tag) {
                        case 4:
                            var hs_ds126CIP5 = hs_wild26CITQ.data[0];
                            var hs_sat26CITR = new $hs.Thunk();
                            hs_sat26CITR.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Right\x00");
                            };
                            var hs_wild126CITS = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126CIP5, hs_sat26CITR);
                            switch (hs_wild126CITS.tag) {
                            case 1:
                                return hs_fail26CIP1.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            case 2:
                                var hs_sat26CITT = new $hs.Func(1);
                                hs_sat26CITT.evaluate = function (hs_a126CIPc) {
                                    var hs_sat26CITV = new $hs.Data(2);
                                    hs_sat26CITV.data = [hs_a126CIPc];
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26CITV);
                                };
                                var hs_sat26CITP = new $hs.Thunk();
                                hs_sat26CITP.evaluateOnce = function () {
                                    var hs_sat26CITU = new $hs.Thunk();
                                    hs_sat26CITU.evaluateOnce = function () {
                                        return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead126CIP8);
                                    };
                                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_step.hscall(hs_sat26CITU);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26CITP, hs_sat26CITT);
                            }
                        default:
                            return hs_fail26CIP1.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26CITO);
                };
                var hs_sat26CITM = new $hs.Data(1);
                hs_sat26CITM.data = [10];
                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall(hs_sat26CITM, hs_sat26CITN);
            };
            var hs_sat26CITz = new $hs.Thunk();
            hs_sat26CITz.evaluateOnce = function () {
                var hs_sat26CITC = new $hs.Thunk();
                hs_sat26CITC.evaluateOnce = function () {
                    var hs_sat26CITD = new $hs.Func(1);
                    hs_sat26CITD.evaluate = function (hs_ds26CIOF) {
                        var hs_fail26CIOE = new $hs.Func(1);
                        hs_fail26CIOE.evaluate = function (hs_ds126CIOD) {
                            var hs_sat26CITL = new $hs.Thunk();
                            hs_sat26CITL.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                            };
                            return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26CITL);
                        };
                        var hs_wild26CITF = hs_ds26CIOF;
                        if (hs_ds26CIOF.notEvaluated) {
                            hs_wild26CITF = hs_ds26CIOF.hscall();
                        }
                        switch (hs_wild26CITF.tag) {
                        case 4:
                            var hs_ds126CIOI = hs_wild26CITF.data[0];
                            var hs_sat26CITG = new $hs.Thunk();
                            hs_sat26CITG.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Left\x00");
                            };
                            var hs_wild126CITH = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126CIOI, hs_sat26CITG);
                            switch (hs_wild126CITH.tag) {
                            case 1:
                                return hs_fail26CIOE.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            case 2:
                                var hs_sat26CITI = new $hs.Func(1);
                                hs_sat26CITI.evaluate = function (hs_a126CIOP) {
                                    var hs_sat26CITK = new $hs.Data(1);
                                    hs_sat26CITK.data = [hs_a126CIOP];
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26CITK);
                                };
                                var hs_sat26CITE = new $hs.Thunk();
                                hs_sat26CITE.evaluateOnce = function () {
                                    var hs_sat26CITJ = new $hs.Thunk();
                                    hs_sat26CITJ.evaluateOnce = function () {
                                        return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26CIOL);
                                    };
                                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_step.hscall(hs_sat26CITJ);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26CITE, hs_sat26CITI);
                            }
                        default:
                            return hs_fail26CIOE.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26CITD);
                };
                var hs_sat26CITB = new $hs.Data(1);
                hs_sat26CITB.data = [10];
                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall(hs_sat26CITB, hs_sat26CITC);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26CITz, hs_sat26CITA);
        };
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26CITy);
    };
    this.hs_zdfReadEither.evaluate = function (hs_zddRead26CIPo, hs_zddRead126CIPp) {
        var hs_sat26CITY = new $hs.Thunk();
        hs_sat26CITY.evaluateOnce = function () {
            return hs_zdcreadListPrec25ukj3.hscall(hs_zddRead26CIPo, hs_zddRead126CIPp);
        };
        var hs_sat26CITZ = new $hs.Thunk();
        hs_sat26CITZ.evaluateOnce = function () {
            return hs_zdcreadPrec25ukif.hscall(hs_zddRead26CIPo, hs_zddRead126CIPp);
        };
        var hs_sat26CIU0 = new $hs.Thunk();
        hs_sat26CIU0.evaluateOnce = function () {
            return hs_zdcreadList25ukj4.hscall(hs_zddRead26CIPo, hs_zddRead126CIPp);
        };
        var hs_sat26CITX = new $hs.Thunk();
        hs_sat26CITX.evaluateOnce = function () {
            return hs_zdcreadsPrec25ukj5.hscall(hs_zddRead26CIPo, hs_zddRead126CIPp);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CITX, hs_sat26CIU0, hs_sat26CITZ, hs_sat26CITY];
        return $res;
    };
    hs_zdcreadListPrec25ukj3.evaluate = function (hs_zddRead26CIPw, hs_zddRead126CIPx) {
        var hs_sat26CIU1 = new $hs.Thunk();
        hs_sat26CIU1.evaluateOnce = function () {
            return $hs.modules.DataziEither.hs_zdfReadEither.hscall(hs_zddRead26CIPw, hs_zddRead126CIPx);
        };
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall(hs_sat26CIU1);
    };
    hs_zdcreadList25ukj4.evaluate = function (hs_zddRead26CIPB, hs_zddRead126CIPC) {
        var hs_sat26CIU2 = new $hs.Thunk();
        hs_sat26CIU2.evaluateOnce = function () {
            return $hs.modules.DataziEither.hs_zdfReadEither.hscall(hs_zddRead26CIPB, hs_zddRead126CIPC);
        };
        return $hs.modules.GHCziRead.hs_readListDefault.hscall(hs_sat26CIU2);
    };
    hs_zdcreadsPrec25ukj5.evaluate = function (hs_zddRead26CIPG, hs_zddRead126CIPH) {
        var hs_sat26CIU3 = new $hs.Thunk();
        hs_sat26CIU3.evaluateOnce = function () {
            return $hs.modules.DataziEither.hs_zdfReadEither.hscall(hs_zddRead26CIPG, hs_zddRead126CIPH);
        };
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall(hs_sat26CIU3);
    };
    hs_zdczlze25ukjt.evaluate = function (hs_zddOrd26CIPU, hs_zddOrd126CIQ2, hs_a26CIPO, hs_b26CIPR) {
        var hs_wild26CIU5 = hs_a26CIPO;
        if (hs_a26CIPO.notEvaluated) {
            hs_wild26CIU5 = hs_a26CIPO.hscall();
        }
        switch (hs_wild26CIU5.tag) {
        case 1:
            var hs_a126CIPV = hs_wild26CIU5.data[0];
            var hs_wild126CIU8 = hs_b26CIPR;
            if (hs_b26CIPR.notEvaluated) {
                hs_wild126CIU8 = hs_b26CIPR.hscall();
            }
            switch (hs_wild126CIU8.tag) {
            case 1:
                var hs_b126CIPW = hs_wild126CIU8.data[0];
                return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd26CIPU, hs_a126CIPV, hs_b126CIPW);
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_a126CIQ3 = hs_wild26CIU5.data[0];
            var hs_wild126CIU4 = hs_b26CIPR;
            if (hs_b26CIPR.notEvaluated) {
                hs_wild126CIU4 = hs_b26CIPR.hscall();
            }
            switch (hs_wild126CIU4.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126CIQ4 = hs_wild126CIU4.data[0];
                return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd126CIQ2, hs_a126CIQ3, hs_b126CIQ4);
            }
        }
    };
    hs_zdczg25ukjP.evaluate = function (hs_zddOrd26CIQg, hs_zddOrd126CIQo, hs_a26CIQa, hs_b26CIQd) {
        var hs_wild26CIUa = hs_a26CIQa;
        if (hs_a26CIQa.notEvaluated) {
            hs_wild26CIUa = hs_a26CIQa.hscall();
        }
        switch (hs_wild26CIUa.tag) {
        case 1:
            var hs_a126CIQh = hs_wild26CIUa.data[0];
            var hs_wild126CIUd = hs_b26CIQd;
            if (hs_b26CIQd.notEvaluated) {
                hs_wild126CIUd = hs_b26CIQd.hscall();
            }
            switch (hs_wild126CIUd.tag) {
            case 1:
                var hs_b126CIQi = hs_wild126CIUd.data[0];
                return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd26CIQg, hs_a126CIQh, hs_b126CIQi);
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_a126CIQp = hs_wild26CIUa.data[0];
            var hs_wild126CIU9 = hs_b26CIQd;
            if (hs_b26CIQd.notEvaluated) {
                hs_wild126CIU9 = hs_b26CIQd.hscall();
            }
            switch (hs_wild126CIU9.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126CIQq = hs_wild126CIU9.data[0];
                return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd126CIQo, hs_a126CIQp, hs_b126CIQq);
            }
        }
    };
    hs_zdczgze25ukkb.evaluate = function (hs_zddOrd26CIQC, hs_zddOrd126CIQK, hs_a26CIQw, hs_b26CIQz) {
        var hs_wild26CIUf = hs_a26CIQw;
        if (hs_a26CIQw.notEvaluated) {
            hs_wild26CIUf = hs_a26CIQw.hscall();
        }
        switch (hs_wild26CIUf.tag) {
        case 1:
            var hs_a126CIQD = hs_wild26CIUf.data[0];
            var hs_wild126CIUi = hs_b26CIQz;
            if (hs_b26CIQz.notEvaluated) {
                hs_wild126CIUi = hs_b26CIQz.hscall();
            }
            switch (hs_wild126CIUi.tag) {
            case 1:
                var hs_b126CIQE = hs_wild126CIUi.data[0];
                return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd26CIQC, hs_a126CIQD, hs_b126CIQE);
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_a126CIQL = hs_wild26CIUf.data[0];
            var hs_wild126CIUe = hs_b26CIQz;
            if (hs_b26CIQz.notEvaluated) {
                hs_wild126CIUe = hs_b26CIQz.hscall();
            }
            switch (hs_wild126CIUe.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126CIQM = hs_wild126CIUe.data[0];
                return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd126CIQK, hs_a126CIQL, hs_b126CIQM);
            }
        }
    };
    hs_zdczl25ukkx.evaluate = function (hs_zddOrd26CIQY, hs_zddOrd126CIR6, hs_a26CIQS, hs_b26CIQV) {
        var hs_wild26CIUk = hs_a26CIQS;
        if (hs_a26CIQS.notEvaluated) {
            hs_wild26CIUk = hs_a26CIQS.hscall();
        }
        switch (hs_wild26CIUk.tag) {
        case 1:
            var hs_a126CIQZ = hs_wild26CIUk.data[0];
            var hs_wild126CIUn = hs_b26CIQV;
            if (hs_b26CIQV.notEvaluated) {
                hs_wild126CIUn = hs_b26CIQV.hscall();
            }
            switch (hs_wild126CIUn.tag) {
            case 1:
                var hs_b126CIR0 = hs_wild126CIUn.data[0];
                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd26CIQY, hs_a126CIQZ, hs_b126CIR0);
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_a126CIR7 = hs_wild26CIUk.data[0];
            var hs_wild126CIUj = hs_b26CIQV;
            if (hs_b26CIQV.notEvaluated) {
                hs_wild126CIUj = hs_b26CIQV.hscall();
            }
            switch (hs_wild126CIUj.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126CIR8 = hs_wild126CIUj.data[0];
                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd126CIR6, hs_a126CIR7, hs_b126CIR8);
            }
        }
    };
    hs_zdccompare25ukkT.evaluate = function (hs_zddOrd26CIRk, hs_zddOrd126CIRs, hs_a26CIRe, hs_b26CIRh) {
        var hs_wild26CIUp = hs_a26CIRe;
        if (hs_a26CIRe.notEvaluated) {
            hs_wild26CIUp = hs_a26CIRe.hscall();
        }
        switch (hs_wild26CIUp.tag) {
        case 1:
            var hs_a126CIRl = hs_wild26CIUp.data[0];
            var hs_wild126CIUs = hs_b26CIRh;
            if (hs_b26CIRh.notEvaluated) {
                hs_wild126CIUs = hs_b26CIRh.hscall();
            }
            switch (hs_wild126CIUs.tag) {
            case 1:
                var hs_b126CIRm = hs_wild126CIUs.data[0];
                return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd26CIRk, hs_a126CIRl, hs_b126CIRm);
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_a126CIRt = hs_wild26CIUp.data[0];
            var hs_wild126CIUo = hs_b26CIRh;
            if (hs_b26CIRh.notEvaluated) {
                hs_wild126CIUo = hs_b26CIRh.hscall();
            }
            switch (hs_wild126CIUo.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126CIRu = hs_wild126CIUo.data[0];
                return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd126CIRs, hs_a126CIRt, hs_b126CIRu);
            }
        }
    };
    hs_zdczeze25uklf.evaluate = function (hs_zddEq26CIRG, hs_zddEq126CIRO, hs_ds26CIRA, hs_ds126CIRD) {
        var hs_wild26CIUu = hs_ds26CIRA;
        if (hs_ds26CIRA.notEvaluated) {
            hs_wild26CIUu = hs_ds26CIRA.hscall();
        }
        switch (hs_wild26CIUu.tag) {
        case 1:
            var hs_a126CIRH = hs_wild26CIUu.data[0];
            var hs_wild126CIUx = hs_ds126CIRD;
            if (hs_ds126CIRD.notEvaluated) {
                hs_wild126CIUx = hs_ds126CIRD.hscall();
            }
            switch (hs_wild126CIUx.tag) {
            case 1:
                var hs_b126CIRI = hs_wild126CIUx.data[0];
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26CIRG, hs_a126CIRH, hs_b126CIRI);
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_a126CIRP = hs_wild26CIUu.data[0];
            var hs_wild126CIUt = hs_ds126CIRD;
            if (hs_ds126CIRD.notEvaluated) {
                hs_wild126CIUt = hs_ds126CIRD.hscall();
            }
            switch (hs_wild126CIUt.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126CIRQ = hs_wild126CIUt.data[0];
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq126CIRO, hs_a126CIRP, hs_b126CIRQ);
            }
        }
    };
    this.hs_zdfEqEither.evaluate = function (hs_zddEq26CIRU, hs_zddEq126CIRV) {
        var hs_sat26CIUz = new $hs.Thunk();
        hs_sat26CIUz.evaluateOnce = function () {
            return hs_zdczsze25uklB.hscall(hs_zddEq26CIRU, hs_zddEq126CIRV);
        };
        var hs_sat26CIUy = new $hs.Func(2);
        hs_sat26CIUy.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze25uklf.hscall(hs_zddEq26CIRU, hs_zddEq126CIRV, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CIUy, hs_sat26CIUz];
        return $res;
    };
    hs_zdczsze25uklB.evaluate = function (hs_zddEq26CIS1, hs_zddEq126CIS2) {
        var hs_zddEq226CIS3 = new $hs.Thunk();
        hs_zddEq226CIS3.evaluateOnce = function () {
            return $hs.modules.DataziEither.hs_zdfEqEither.hscall(hs_zddEq26CIS1, hs_zddEq126CIS2);
        };
        var hs_sat26CIUA = new $hs.Func(2);
        hs_sat26CIUA.evaluate = function (hs_a26CIS6, hs_b26CIS7) {
            var hs_sat26CIUB = new $hs.Thunk();
            hs_sat26CIUB.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226CIS3, hs_a26CIS6, hs_b26CIS7);
            };
            return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26CIUB);
        };
        if (hs_sat26CIUA.notEvaluated) {
            return hs_sat26CIUA.hscall();
        } else {
            return hs_sat26CIUA;
        }
    };
    hs_zdczdp1Ord25uklU.evaluate = function (hs_zddOrd26CISd, hs_zddOrd126CISf) {
        var hs_sat26CIUD = new $hs.Thunk();
        hs_sat26CIUD.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd126CISf);
        };
        var hs_sat26CIUC = new $hs.Thunk();
        hs_sat26CIUC.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26CISd);
        };
        return $hs.modules.DataziEither.hs_zdfEqEither.hscall(hs_sat26CIUC, hs_sat26CIUD);
    };
    this.hs_zdfOrdEither.evaluate = function (hs_zddOrd26CISl, hs_zddOrd126CISm) {
        var hs_sat26CIUF = new $hs.Thunk();
        hs_sat26CIUF.evaluateOnce = function () {
            return hs_zdcmin25ukm1.hscall(hs_zddOrd26CISl, hs_zddOrd126CISm);
        };
        var hs_sat26CIUG = new $hs.Thunk();
        hs_sat26CIUG.evaluateOnce = function () {
            return hs_zdcmax25ukm2.hscall(hs_zddOrd26CISl, hs_zddOrd126CISm);
        };
        var hs_sat26CIUH = new $hs.Func(2);
        hs_sat26CIUH.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze25ukjt.hscall(hs_zddOrd26CISl, hs_zddOrd126CISm, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CIUI = new $hs.Func(2);
        hs_sat26CIUI.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg25ukjP.hscall(hs_zddOrd26CISl, hs_zddOrd126CISm, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CIUJ = new $hs.Func(2);
        hs_sat26CIUJ.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze25ukkb.hscall(hs_zddOrd26CISl, hs_zddOrd126CISm, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CIUK = new $hs.Func(2);
        hs_sat26CIUK.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl25ukkx.hscall(hs_zddOrd26CISl, hs_zddOrd126CISm, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CIUL = new $hs.Func(2);
        hs_sat26CIUL.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare25ukkT.hscall(hs_zddOrd26CISl, hs_zddOrd126CISm, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CIUE = new $hs.Thunk();
        hs_sat26CIUE.evaluateOnce = function () {
            return hs_zdczdp1Ord25uklU.hscall(hs_zddOrd26CISl, hs_zddOrd126CISm);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CIUE, hs_sat26CIUL, hs_sat26CIUK, hs_sat26CIUJ, hs_sat26CIUI, hs_sat26CIUH, hs_sat26CIUG, hs_sat26CIUF];
        return $res;
    };
    hs_zdcmin25ukm1.evaluate = function (hs_zddOrd26CISx, hs_zddOrd126CISy) {
        var hs_sat26CIUM = new $hs.Thunk();
        hs_sat26CIUM.evaluateOnce = function () {
            return $hs.modules.DataziEither.hs_zdfOrdEither.hscall(hs_zddOrd26CISx, hs_zddOrd126CISy);
        };
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall(hs_sat26CIUM);
    };
    hs_zdcmax25ukm2.evaluate = function (hs_zddOrd26CISC, hs_zddOrd126CISD) {
        var hs_sat26CIUN = new $hs.Thunk();
        hs_sat26CIUN.evaluateOnce = function () {
            return $hs.modules.DataziEither.hs_zdfOrdEither.hscall(hs_zddOrd26CISC, hs_zddOrd126CISD);
        };
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall(hs_sat26CIUN);
    };
    hs_zdctypeOf225ukmp.evaluate = function (hs_ds26CISL) {
        var hs_sat26CIUO = new $hs.Thunk();
        hs_sat26CIUO.evaluateOnce = function () {
            var hs_sat26CIUQ = new $hs.Thunk();
            hs_sat26CIUQ.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Either\x00");
            };
            var hs_sat26CIUR = new $hs.Thunk();
            hs_sat26CIUR.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Data.Either\x00");
            };
            var hs_sat26CIUP = new $hs.Thunk();
            hs_sat26CIUP.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26CIUP, hs_sat26CIUR, hs_sat26CIUQ);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26CIUO, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeable2Either.evaluateOnce = function () {
        if (hs_zdctypeOf225ukmp.notEvaluated) {
            return hs_zdctypeOf225ukmp.hscall();
        } else {
            return hs_zdctypeOf225ukmp;
        }
    };
    this.hs_Left.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_Right.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(2);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
};
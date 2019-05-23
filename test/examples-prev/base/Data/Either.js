
$hs.modules.DataziEither = new $hs.Module();
$hs.modules.DataziEither.dependencies = ["GHC.Prim", "GHC.Types", "GHC.Base", "GHC.Show", "Data.Typeable", "GHC.Classes", "GHC.Read", "Text.ParserCombinators.ReadPrec"];
$hs.modules.DataziEither.initBeforeDependencies = function () {
    this.hs_rights = new $hs.Func(1);
    this.hs_lefts = new $hs.Func(1);
    this.hs_either = new $hs.Func(3);
    this.hs_partitionEithers = new $hs.Thunk();
    this.hs_zdfTypeable2Either = new $hs.Thunk();
    this.hs_zdfShowEither = new $hs.Func(2);
    this.hs_zdfReadEither = new $hs.Func(2);
    this.hs_zdfOrdEither = new $hs.Func(3);
    this.hs_zdfEqEither = new $hs.Func(2);
    this.hs_Left = new $hs.Func(1);
    this.hs_Right = new $hs.Func(1);
    this.hs_rights.notEvaluated = true;
    this.hs_rights.evaluate = function (hs_x26D7Ne) {
        $hs.modules.DataziEither.loadDependencies();
        return this.evaluate(hs_x26D7Ne);
    };
    this.hs_lefts.notEvaluated = true;
    this.hs_lefts.evaluate = function (hs_x26D7Nu) {
        $hs.modules.DataziEither.loadDependencies();
        return this.evaluate(hs_x26D7Nu);
    };
    this.hs_either.notEvaluated = true;
    this.hs_either.evaluate = function (hs_f26D7ND, hs_ds26D7NG, hs_ds126D7Nz) {
        $hs.modules.DataziEither.loadDependencies();
        return this.evaluate(hs_f26D7ND, hs_ds26D7NG, hs_ds126D7Nz);
    };
    this.hs_partitionEithers.evaluateOnce = function () {
        $hs.modules.DataziEither.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeable2Either.evaluateOnce = function () {
        $hs.modules.DataziEither.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfShowEither.notEvaluated = true;
    this.hs_zdfShowEither.evaluate = function (hs_zddShow26D7OZ, hs_zddShow126D7P0) {
        $hs.modules.DataziEither.loadDependencies();
        return this.evaluate(hs_zddShow26D7OZ, hs_zddShow126D7P0);
    };
    this.hs_zdfReadEither.notEvaluated = true;
    this.hs_zdfReadEither.evaluate = function (hs_zddRead26D7Qd, hs_zddRead126D7Qe) {
        $hs.modules.DataziEither.loadDependencies();
        return this.evaluate(hs_zddRead26D7Qd, hs_zddRead126D7Qe);
    };
    this.hs_zdfOrdEither.notEvaluated = true;
    this.hs_zdfOrdEither.evaluate = function (hs_zddEq26D7SG, hs_zddOrd26D7SH, hs_zddOrd126D7SI) {
        $hs.modules.DataziEither.loadDependencies();
        return this.evaluate(hs_zddEq26D7SG, hs_zddOrd26D7SH, hs_zddOrd126D7SI);
    };
    this.hs_zdfEqEither.notEvaluated = true;
    this.hs_zdfEqEither.evaluate = function (hs_zddEq26D7Tv, hs_zddEq126D7Tw) {
        $hs.modules.DataziEither.loadDependencies();
        return this.evaluate(hs_zddEq26D7Tv, hs_zddEq126D7Tw);
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
    this.hs_zdfShowEither.notEvaluated = false;
    this.hs_zdfReadEither.notEvaluated = false;
    this.hs_zdfOrdEither.notEvaluated = false;
    this.hs_zdfEqEither.notEvaluated = false;
    this.hs_Left.notEvaluated = false;
    this.hs_Right.notEvaluated = false;
    var hs_sat26D7TT = new $hs.Thunk();
    var hs_eitherTc25tgEm = new $hs.Thunk();
    var hs_zdctypeOf225uJi7 = new $hs.Func(1);
    var hs_zdcshowsPrec25uJib = new $hs.Func(4);
    var hs_zdcshowList25uJiE = new $hs.Func(2);
    var hs_zdcshow25uJiG = new $hs.Func(2);
    var hs_zdcreadPrec25uJj1 = new $hs.Func(2);
    var hs_zdcreadListPrec25uJjQ = new $hs.Func(2);
    var hs_zdcreadList25uJjS = new $hs.Func(2);
    var hs_zdcreadsPrec25uJjU = new $hs.Func(2);
    var hs_zdczlze25uJkj = new $hs.Func(5);
    var hs_zdczg25uJkI = new $hs.Func(5);
    var hs_zdczgze25uJl7 = new $hs.Func(5);
    var hs_zdczl25uJlw = new $hs.Func(5);
    var hs_zdccompare25uJlV = new $hs.Func(5);
    var hs_zdcmin25uJmk = new $hs.Func(3);
    var hs_zdcmax25uJmm = new $hs.Func(3);
    var hs_zdczeze25uJmP = new $hs.Func(4);
    var hs_zdczsze25uJnc = new $hs.Func(2);
    this.hs_rights.evaluate = function (hs_x26D7Ne) {
        var hs_ds26D7Na = new $hs.Func(1);
        hs_ds26D7Na.evaluate = function (hs_ds126D7N2) {
            var hs_ds226D7TL = hs_ds126D7N2;
            if (hs_ds126D7N2.notEvaluated) {
                hs_ds226D7TL = hs_ds126D7N2.hscall();
            }
            switch (hs_ds226D7TL.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326D7N6 = hs_ds226D7TL.data[0];
                var hs_ds426D7N9 = hs_ds226D7TL.data[1];
                var hs_wild26D7TN = hs_ds326D7N6;
                if (hs_ds326D7N6.notEvaluated) {
                    hs_wild26D7TN = hs_ds326D7N6.hscall();
                }
                switch (hs_wild26D7TN.tag) {
                case 1:
                    return hs_ds26D7Na.hscall(hs_ds426D7N9);
                case 2:
                    var hs_a26D7Nc = hs_wild26D7TN.data[0];
                    var hs_sat26D7TO = new $hs.Thunk();
                    hs_sat26D7TO.evaluateOnce = function () {
                        return hs_ds26D7Na.hscall(hs_ds426D7N9);
                    };
                    var $res = new $hs.Data(2);
                    $res.data = [hs_a26D7Nc, hs_sat26D7TO];
                    return $res;
                }
            }
        };
        return hs_ds26D7Na.hscall(hs_x26D7Ne);
    };
    this.hs_lefts.evaluate = function (hs_x26D7Nu) {
        var hs_ds26D7Nr = new $hs.Func(1);
        hs_ds26D7Nr.evaluate = function (hs_ds126D7Ni) {
            var hs_ds226D7TP = hs_ds126D7Ni;
            if (hs_ds126D7Ni.notEvaluated) {
                hs_ds226D7TP = hs_ds126D7Ni.hscall();
            }
            switch (hs_ds226D7TP.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326D7Nm = hs_ds226D7TP.data[0];
                var hs_ds426D7Nq = hs_ds226D7TP.data[1];
                var hs_wild26D7TQ = hs_ds326D7Nm;
                if (hs_ds326D7Nm.notEvaluated) {
                    hs_wild26D7TQ = hs_ds326D7Nm.hscall();
                }
                switch (hs_wild26D7TQ.tag) {
                case 1:
                    var hs_a26D7Np = hs_wild26D7TQ.data[0];
                    var hs_sat26D7TR = new $hs.Thunk();
                    hs_sat26D7TR.evaluateOnce = function () {
                        return hs_ds26D7Nr.hscall(hs_ds426D7Nq);
                    };
                    var $res = new $hs.Data(2);
                    $res.data = [hs_a26D7Np, hs_sat26D7TR];
                    return $res;
                case 2:
                    return hs_ds26D7Nr.hscall(hs_ds426D7Nq);
                }
            }
        };
        return hs_ds26D7Nr.hscall(hs_x26D7Nu);
    };
    hs_sat26D7TT.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Either\x00");
    };
    hs_eitherTc25tgEm.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26D7TT);
    };
    this.hs_either.evaluate = function (hs_f26D7ND, hs_ds26D7NG, hs_ds126D7Nz) {
        var hs_wild26D7TU = hs_ds126D7Nz;
        if (hs_ds126D7Nz.notEvaluated) {
            hs_wild26D7TU = hs_ds126D7Nz.hscall();
        }
        switch (hs_wild26D7TU.tag) {
        case 1:
            var hs_x26D7NC = hs_wild26D7TU.data[0];
            return hs_f26D7ND.hscall(hs_x26D7NC);
        case 2:
            var hs_y26D7NF = hs_wild26D7TU.data[0];
            return hs_ds26D7NG.hscall(hs_y26D7NF);
        }
    };
    this.hs_partitionEithers.evaluateOnce = function () {
        var hs_sat26D7TW = new $hs.Data(1);
        hs_sat26D7TW.data = [$hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26D7U9 = new $hs.Func(1);
        hs_sat26D7U9.evaluate = function (hs_ds26D7NI) {
            var hs_wild26D7TV = hs_ds26D7NI;
            if (hs_ds26D7NI.notEvaluated) {
                hs_wild26D7TV = hs_ds26D7NI.hscall();
            }
            switch (hs_wild26D7TV.tag) {
            case 1:
                var hs_x26D7NM = hs_wild26D7TV.data[0];
                var hs_sat26D7U2 = new $hs.Func(1);
                hs_sat26D7U2.evaluate = function (hs_ds126D7NN) {
                    var hs_sat26D7TY = new $hs.Thunk();
                    hs_sat26D7TY.evaluateOnce = function () {
                        var hs_wild126D7NZ = hs_ds126D7NN;
                        if (hs_ds126D7NN.notEvaluated) {
                            hs_wild126D7NZ = hs_ds126D7NN.hscall();
                        }
                        var hs_r26D7NX = hs_wild126D7NZ.data[1];
                        if (hs_r26D7NX.notEvaluated) {
                            return hs_r26D7NX.hscall();
                        } else {
                            return hs_r26D7NX;
                        }
                    };
                    var hs_sat26D7U0 = new $hs.Thunk();
                    hs_sat26D7U0.evaluateOnce = function () {
                        var hs_wild126D7TX = hs_ds126D7NN;
                        if (hs_ds126D7NN.notEvaluated) {
                            hs_wild126D7TX = hs_ds126D7NN.hscall();
                        }
                        var hs_l26D7NR = hs_wild126D7TX.data[0];
                        if (hs_l26D7NR.notEvaluated) {
                            return hs_l26D7NR.hscall();
                        } else {
                            return hs_l26D7NR;
                        }
                    };
                    var hs_sat26D7U1 = new $hs.Data(2);
                    hs_sat26D7U1.data = [hs_x26D7NM, hs_sat26D7U0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26D7U1, hs_sat26D7TY];
                    return $res;
                };
                if (hs_sat26D7U2.notEvaluated) {
                    return hs_sat26D7U2.hscall();
                } else {
                    return hs_sat26D7U2;
                }
            case 2:
                var hs_y26D7Oa = hs_wild26D7TV.data[0];
                var hs_sat26D7U8 = new $hs.Func(1);
                hs_sat26D7U8.evaluate = function (hs_ds126D7O4) {
                    var hs_sat26D7U3 = new $hs.Thunk();
                    hs_sat26D7U3.evaluateOnce = function () {
                        var hs_wild126D7Oh = hs_ds126D7O4;
                        if (hs_ds126D7O4.notEvaluated) {
                            hs_wild126D7Oh = hs_ds126D7O4.hscall();
                        }
                        var hs_r26D7Oe = hs_wild126D7Oh.data[1];
                        if (hs_r26D7Oe.notEvaluated) {
                            return hs_r26D7Oe.hscall();
                        } else {
                            return hs_r26D7Oe;
                        }
                    };
                    var hs_sat26D7U5 = new $hs.Data(2);
                    hs_sat26D7U5.data = [hs_y26D7Oa, hs_sat26D7U3];
                    var hs_sat26D7U7 = new $hs.Thunk();
                    hs_sat26D7U7.evaluateOnce = function () {
                        var hs_wild126D7U4 = hs_ds126D7O4;
                        if (hs_ds126D7O4.notEvaluated) {
                            hs_wild126D7U4 = hs_ds126D7O4.hscall();
                        }
                        var hs_l26D7O8 = hs_wild126D7U4.data[0];
                        if (hs_l26D7O8.notEvaluated) {
                            return hs_l26D7O8.hscall();
                        } else {
                            return hs_l26D7O8;
                        }
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26D7U7, hs_sat26D7U5];
                    return $res;
                };
                if (hs_sat26D7U8.notEvaluated) {
                    return hs_sat26D7U8.hscall();
                } else {
                    return hs_sat26D7U8;
                }
            }
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26D7U9, hs_sat26D7TW);
    };
    hs_zdctypeOf225uJi7.evaluate = function (hs_ds26D7Op) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_eitherTc25tgEm, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeable2Either.evaluateOnce = function () {
        if (hs_zdctypeOf225uJi7.notEvaluated) {
            return hs_zdctypeOf225uJi7.hscall();
        } else {
            return hs_zdctypeOf225uJi7;
        }
    };
    hs_zdcshowsPrec25uJib.evaluate = function (hs_zddShow26D7OE, hs_zddShow126D7OO, hs_a26D7Oz, hs_ds26D7Ow) {
        var hs_wild26D7Ua = hs_ds26D7Ow;
        if (hs_ds26D7Ow.notEvaluated) {
            hs_wild26D7Ua = hs_ds26D7Ow.hscall();
        }
        switch (hs_wild26D7Ua.tag) {
        case 1:
            var hs_b126D7OG = hs_wild26D7Ua.data[0];
            var hs_sat26D7Uf = new $hs.Thunk();
            hs_sat26D7Uf.evaluateOnce = function () {
                var hs_sat26D7Uc = new $hs.Thunk();
                hs_sat26D7Uc.evaluateOnce = function () {
                    var hs_sat26D7Ub = new $hs.Data(1);
                    hs_sat26D7Ub.data = [11];
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26D7OE, hs_sat26D7Ub, hs_b126D7OG);
                };
                var hs_sat26D7Ue = new $hs.Thunk();
                hs_sat26D7Ue.evaluateOnce = function () {
                    var hs_sat26D7Ud = new $hs.Thunk();
                    hs_sat26D7Ud.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Left \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D7Ud);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D7Ue, hs_sat26D7Uc);
            };
            var hs_sat26D7Uh = new $hs.Thunk();
            hs_sat26D7Uh.evaluateOnce = function () {
                var hs_sat26D7Ug = new $hs.Data(1);
                hs_sat26D7Ug.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a26D7Oz, hs_sat26D7Ug);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26D7Uh, hs_sat26D7Uf);
        case 2:
            var hs_b126D7OQ = hs_wild26D7Ua.data[0];
            var hs_sat26D7Um = new $hs.Thunk();
            hs_sat26D7Um.evaluateOnce = function () {
                var hs_sat26D7Uj = new $hs.Thunk();
                hs_sat26D7Uj.evaluateOnce = function () {
                    var hs_sat26D7Ui = new $hs.Data(1);
                    hs_sat26D7Ui.data = [11];
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126D7OO, hs_sat26D7Ui, hs_b126D7OQ);
                };
                var hs_sat26D7Ul = new $hs.Thunk();
                hs_sat26D7Ul.evaluateOnce = function () {
                    var hs_sat26D7Uk = new $hs.Thunk();
                    hs_sat26D7Uk.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Right \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D7Uk);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D7Ul, hs_sat26D7Uj);
            };
            var hs_sat26D7Uo = new $hs.Thunk();
            hs_sat26D7Uo.evaluateOnce = function () {
                var hs_sat26D7Un = new $hs.Data(1);
                hs_sat26D7Un.data = [11];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a26D7Oz, hs_sat26D7Un);
            };
            return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26D7Uo, hs_sat26D7Um);
        }
    };
    this.hs_zdfShowEither.evaluate = function (hs_zddShow26D7OZ, hs_zddShow126D7P0) {
        var hs_sat26D7Up = new $hs.Thunk();
        hs_sat26D7Up.evaluateOnce = function () {
            return hs_zdcshowList25uJiE.hscall(hs_zddShow26D7OZ, hs_zddShow126D7P0);
        };
        var hs_sat26D7Uq = new $hs.Thunk();
        hs_sat26D7Uq.evaluateOnce = function () {
            return hs_zdcshow25uJiG.hscall(hs_zddShow26D7OZ, hs_zddShow126D7P0);
        };
        var hs_sat26D7Ur = new $hs.Func(2);
        hs_sat26D7Ur.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec25uJib.hscall(hs_zddShow26D7OZ, hs_zddShow126D7P0, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26D7Ur, hs_sat26D7Uq, hs_sat26D7Up];
        return $res;
    };
    hs_zdcshowList25uJiE.evaluate = function (hs_zddShow26D7P6, hs_zddShow126D7P7) {
        var hs_sat26D7Uu = new $hs.Thunk();
        hs_sat26D7Uu.evaluateOnce = function () {
            var hs_sat26D7Us = new $hs.Data(1);
            hs_sat26D7Us.data = [0];
            var hs_sat26D7Ut = $hs.modules.DataziEither.hs_zdfShowEither.hscall(hs_zddShow26D7P6, hs_zddShow126D7P7);
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_sat26D7Ut, hs_sat26D7Us);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26D7Uu);
    };
    hs_zdcshow25uJiG.evaluate = function (hs_zddShow26D7Pd, hs_zddShow126D7Pe) {
        var hs_sat26D7Uv = new $hs.Thunk();
        hs_sat26D7Uv.evaluateOnce = function () {
            return $hs.modules.DataziEither.hs_zdfShowEither.hscall(hs_zddShow26D7Pd, hs_zddShow126D7Pe);
        };
        return $hs.modules.GHCziShow.hs_zddmshow.hscall(hs_sat26D7Uv);
    };
    hs_zdcreadPrec25uJj1.evaluate = function (hs_zddRead26D7Px, hs_zddRead126D7PU) {
        var hs_sat26D7UU = new $hs.Thunk();
        hs_sat26D7UU.evaluateOnce = function () {
            var hs_sat26D7UH = new $hs.Thunk();
            hs_sat26D7UH.evaluateOnce = function () {
                var hs_sat26D7UF = new $hs.Thunk();
                hs_sat26D7UF.evaluateOnce = function () {
                    var hs_sat26D7UE = new $hs.Func(1);
                    hs_sat26D7UE.evaluate = function (hs_ds26D7PO) {
                        var hs_fail26D7PN = new $hs.Func(1);
                        hs_fail26D7PN.evaluate = function (hs_ds126D7PM) {
                            var hs_sat26D7Uw = new $hs.Thunk();
                            hs_sat26D7Uw.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                            };
                            return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26D7Uw);
                        };
                        var hs_wild26D7Ux = hs_ds26D7PO;
                        if (hs_ds26D7PO.notEvaluated) {
                            hs_wild26D7Ux = hs_ds26D7PO.hscall();
                        }
                        switch (hs_wild26D7Ux.tag) {
                        case 4:
                            var hs_ds126D7PR = hs_wild26D7Ux.data[0];
                            var hs_sat26D7Uz = new $hs.Thunk();
                            hs_sat26D7Uz.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Right\x00");
                            };
                            var hs_wild126D7Uy = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126D7PR, hs_sat26D7Uz);
                            switch (hs_wild126D7Uy.tag) {
                            case 1:
                                return hs_fail26D7PN.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            case 2:
                                var hs_sat26D7UB = new $hs.Func(1);
                                hs_sat26D7UB.evaluate = function (hs_a126D7PY) {
                                    var hs_sat26D7UA = new $hs.Data(2);
                                    hs_sat26D7UA.data = [hs_a126D7PY];
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26D7UA);
                                };
                                var hs_sat26D7UD = new $hs.Thunk();
                                hs_sat26D7UD.evaluateOnce = function () {
                                    var hs_sat26D7UC = new $hs.Thunk();
                                    hs_sat26D7UC.evaluateOnce = function () {
                                        return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead126D7PU);
                                    };
                                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_step.hscall(hs_sat26D7UC);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26D7UD, hs_sat26D7UB);
                            }
                        default:
                            return hs_fail26D7PN.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26D7UE);
                };
                var hs_sat26D7UG = new $hs.Data(1);
                hs_sat26D7UG.data = [10];
                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall(hs_sat26D7UG, hs_sat26D7UF);
            };
            var hs_sat26D7UT = new $hs.Thunk();
            hs_sat26D7UT.evaluateOnce = function () {
                var hs_sat26D7UR = new $hs.Thunk();
                hs_sat26D7UR.evaluateOnce = function () {
                    var hs_sat26D7UQ = new $hs.Func(1);
                    hs_sat26D7UQ.evaluate = function (hs_ds26D7Pr) {
                        var hs_fail26D7Pq = new $hs.Func(1);
                        hs_fail26D7Pq.evaluate = function (hs_ds126D7Pp) {
                            var hs_sat26D7UI = new $hs.Thunk();
                            hs_sat26D7UI.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                            };
                            return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26D7UI);
                        };
                        var hs_wild26D7UJ = hs_ds26D7Pr;
                        if (hs_ds26D7Pr.notEvaluated) {
                            hs_wild26D7UJ = hs_ds26D7Pr.hscall();
                        }
                        switch (hs_wild26D7UJ.tag) {
                        case 4:
                            var hs_ds126D7Pu = hs_wild26D7UJ.data[0];
                            var hs_sat26D7UL = new $hs.Thunk();
                            hs_sat26D7UL.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Left\x00");
                            };
                            var hs_wild126D7UK = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126D7Pu, hs_sat26D7UL);
                            switch (hs_wild126D7UK.tag) {
                            case 1:
                                return hs_fail26D7Pq.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            case 2:
                                var hs_sat26D7UN = new $hs.Func(1);
                                hs_sat26D7UN.evaluate = function (hs_a126D7PB) {
                                    var hs_sat26D7UM = new $hs.Data(1);
                                    hs_sat26D7UM.data = [hs_a126D7PB];
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26D7UM);
                                };
                                var hs_sat26D7UP = new $hs.Thunk();
                                hs_sat26D7UP.evaluateOnce = function () {
                                    var hs_sat26D7UO = new $hs.Thunk();
                                    hs_sat26D7UO.evaluateOnce = function () {
                                        return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26D7Px);
                                    };
                                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_step.hscall(hs_sat26D7UO);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26D7UP, hs_sat26D7UN);
                            }
                        default:
                            return hs_fail26D7Pq.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26D7UQ);
                };
                var hs_sat26D7US = new $hs.Data(1);
                hs_sat26D7US.data = [10];
                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall(hs_sat26D7US, hs_sat26D7UR);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26D7UT, hs_sat26D7UH);
        };
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26D7UU);
    };
    this.hs_zdfReadEither.evaluate = function (hs_zddRead26D7Qd, hs_zddRead126D7Qe) {
        var hs_sat26D7UV = new $hs.Thunk();
        hs_sat26D7UV.evaluateOnce = function () {
            return hs_zdcreadListPrec25uJjQ.hscall(hs_zddRead26D7Qd, hs_zddRead126D7Qe);
        };
        var hs_sat26D7UW = new $hs.Thunk();
        hs_sat26D7UW.evaluateOnce = function () {
            return hs_zdcreadPrec25uJj1.hscall(hs_zddRead26D7Qd, hs_zddRead126D7Qe);
        };
        var hs_sat26D7UX = new $hs.Thunk();
        hs_sat26D7UX.evaluateOnce = function () {
            return hs_zdcreadList25uJjS.hscall(hs_zddRead26D7Qd, hs_zddRead126D7Qe);
        };
        var hs_sat26D7UY = new $hs.Thunk();
        hs_sat26D7UY.evaluateOnce = function () {
            return hs_zdcreadsPrec25uJjU.hscall(hs_zddRead26D7Qd, hs_zddRead126D7Qe);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26D7UY, hs_sat26D7UX, hs_sat26D7UW, hs_sat26D7UV];
        return $res;
    };
    hs_zdcreadListPrec25uJjQ.evaluate = function (hs_zddRead26D7Ql, hs_zddRead126D7Qm) {
        var hs_sat26D7UZ = new $hs.Thunk();
        hs_sat26D7UZ.evaluateOnce = function () {
            return $hs.modules.DataziEither.hs_zdfReadEither.hscall(hs_zddRead26D7Ql, hs_zddRead126D7Qm);
        };
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall(hs_sat26D7UZ);
    };
    hs_zdcreadList25uJjS.evaluate = function (hs_zddRead26D7Qq, hs_zddRead126D7Qr) {
        var hs_sat26D7V0 = new $hs.Thunk();
        hs_sat26D7V0.evaluateOnce = function () {
            return $hs.modules.DataziEither.hs_zdfReadEither.hscall(hs_zddRead26D7Qq, hs_zddRead126D7Qr);
        };
        return $hs.modules.GHCziRead.hs_readListDefault.hscall(hs_sat26D7V0);
    };
    hs_zdcreadsPrec25uJjU.evaluate = function (hs_zddRead26D7Qv, hs_zddRead126D7Qw) {
        var hs_sat26D7V1 = new $hs.Thunk();
        hs_sat26D7V1.evaluateOnce = function () {
            return $hs.modules.DataziEither.hs_zdfReadEither.hscall(hs_zddRead26D7Qv, hs_zddRead126D7Qw);
        };
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall(hs_sat26D7V1);
    };
    hs_zdczlze25uJkj.evaluate = function (hs_zddEq26D7QW, hs_zddOrd26D7QL, hs_zddOrd126D7QT, hs_a26D7QF, hs_b26D7QI) {
        var hs_wild26D7V3 = hs_a26D7QF;
        if (hs_a26D7QF.notEvaluated) {
            hs_wild26D7V3 = hs_a26D7QF.hscall();
        }
        switch (hs_wild26D7V3.tag) {
        case 1:
            var hs_a126D7QM = hs_wild26D7V3.data[0];
            var hs_wild126D7V2 = hs_b26D7QI;
            if (hs_b26D7QI.notEvaluated) {
                hs_wild126D7V2 = hs_b26D7QI.hscall();
            }
            switch (hs_wild126D7V2.tag) {
            case 1:
                var hs_b126D7QN = hs_wild126D7V2.data[0];
                return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd26D7QL, hs_a126D7QM, hs_b126D7QN);
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_a126D7QU = hs_wild26D7V3.data[0];
            var hs_wild126D7V6 = hs_b26D7QI;
            if (hs_b26D7QI.notEvaluated) {
                hs_wild126D7V6 = hs_b26D7QI.hscall();
            }
            switch (hs_wild126D7V6.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126D7QV = hs_wild126D7V6.data[0];
                return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd126D7QT, hs_a126D7QU, hs_b126D7QV);
            }
        }
    };
    hs_zdczg25uJkI.evaluate = function (hs_zddEq26D7Rl, hs_zddOrd26D7Ra, hs_zddOrd126D7Ri, hs_a26D7R4, hs_b26D7R7) {
        var hs_wild26D7V8 = hs_a26D7R4;
        if (hs_a26D7R4.notEvaluated) {
            hs_wild26D7V8 = hs_a26D7R4.hscall();
        }
        switch (hs_wild26D7V8.tag) {
        case 1:
            var hs_a126D7Rb = hs_wild26D7V8.data[0];
            var hs_wild126D7V7 = hs_b26D7R7;
            if (hs_b26D7R7.notEvaluated) {
                hs_wild126D7V7 = hs_b26D7R7.hscall();
            }
            switch (hs_wild126D7V7.tag) {
            case 1:
                var hs_b126D7Rc = hs_wild126D7V7.data[0];
                return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd26D7Ra, hs_a126D7Rb, hs_b126D7Rc);
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_a126D7Rj = hs_wild26D7V8.data[0];
            var hs_wild126D7Vb = hs_b26D7R7;
            if (hs_b26D7R7.notEvaluated) {
                hs_wild126D7Vb = hs_b26D7R7.hscall();
            }
            switch (hs_wild126D7Vb.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126D7Rk = hs_wild126D7Vb.data[0];
                return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd126D7Ri, hs_a126D7Rj, hs_b126D7Rk);
            }
        }
    };
    hs_zdczgze25uJl7.evaluate = function (hs_zddEq26D7RK, hs_zddOrd26D7Rz, hs_zddOrd126D7RH, hs_a26D7Rt, hs_b26D7Rw) {
        var hs_wild26D7Vd = hs_a26D7Rt;
        if (hs_a26D7Rt.notEvaluated) {
            hs_wild26D7Vd = hs_a26D7Rt.hscall();
        }
        switch (hs_wild26D7Vd.tag) {
        case 1:
            var hs_a126D7RA = hs_wild26D7Vd.data[0];
            var hs_wild126D7Vc = hs_b26D7Rw;
            if (hs_b26D7Rw.notEvaluated) {
                hs_wild126D7Vc = hs_b26D7Rw.hscall();
            }
            switch (hs_wild126D7Vc.tag) {
            case 1:
                var hs_b126D7RB = hs_wild126D7Vc.data[0];
                return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd26D7Rz, hs_a126D7RA, hs_b126D7RB);
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_a126D7RI = hs_wild26D7Vd.data[0];
            var hs_wild126D7Vg = hs_b26D7Rw;
            if (hs_b26D7Rw.notEvaluated) {
                hs_wild126D7Vg = hs_b26D7Rw.hscall();
            }
            switch (hs_wild126D7Vg.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126D7RJ = hs_wild126D7Vg.data[0];
                return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd126D7RH, hs_a126D7RI, hs_b126D7RJ);
            }
        }
    };
    hs_zdczl25uJlw.evaluate = function (hs_zddEq26D7S9, hs_zddOrd26D7RY, hs_zddOrd126D7S6, hs_a26D7RS, hs_b26D7RV) {
        var hs_wild26D7Vi = hs_a26D7RS;
        if (hs_a26D7RS.notEvaluated) {
            hs_wild26D7Vi = hs_a26D7RS.hscall();
        }
        switch (hs_wild26D7Vi.tag) {
        case 1:
            var hs_a126D7RZ = hs_wild26D7Vi.data[0];
            var hs_wild126D7Vh = hs_b26D7RV;
            if (hs_b26D7RV.notEvaluated) {
                hs_wild126D7Vh = hs_b26D7RV.hscall();
            }
            switch (hs_wild126D7Vh.tag) {
            case 1:
                var hs_b126D7S0 = hs_wild126D7Vh.data[0];
                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd26D7RY, hs_a126D7RZ, hs_b126D7S0);
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_a126D7S7 = hs_wild26D7Vi.data[0];
            var hs_wild126D7Vl = hs_b26D7RV;
            if (hs_b26D7RV.notEvaluated) {
                hs_wild126D7Vl = hs_b26D7RV.hscall();
            }
            switch (hs_wild126D7Vl.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126D7S8 = hs_wild126D7Vl.data[0];
                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd126D7S6, hs_a126D7S7, hs_b126D7S8);
            }
        }
    };
    hs_zdccompare25uJlV.evaluate = function (hs_zddEq26D7Sy, hs_zddOrd26D7Sn, hs_zddOrd126D7Sv, hs_a26D7Sh, hs_b26D7Sk) {
        var hs_wild26D7Vn = hs_a26D7Sh;
        if (hs_a26D7Sh.notEvaluated) {
            hs_wild26D7Vn = hs_a26D7Sh.hscall();
        }
        switch (hs_wild26D7Vn.tag) {
        case 1:
            var hs_a126D7So = hs_wild26D7Vn.data[0];
            var hs_wild126D7Vm = hs_b26D7Sk;
            if (hs_b26D7Sk.notEvaluated) {
                hs_wild126D7Vm = hs_b26D7Sk.hscall();
            }
            switch (hs_wild126D7Vm.tag) {
            case 1:
                var hs_b126D7Sp = hs_wild126D7Vm.data[0];
                return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd26D7Sn, hs_a126D7So, hs_b126D7Sp);
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_a126D7Sw = hs_wild26D7Vn.data[0];
            var hs_wild126D7Vq = hs_b26D7Sk;
            if (hs_b26D7Sk.notEvaluated) {
                hs_wild126D7Vq = hs_b26D7Sk.hscall();
            }
            switch (hs_wild126D7Vq.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126D7Sx = hs_wild126D7Vq.data[0];
                return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd126D7Sv, hs_a126D7Sw, hs_b126D7Sx);
            }
        }
    };
    this.hs_zdfOrdEither.evaluate = function (hs_zddEq26D7SG, hs_zddOrd26D7SH, hs_zddOrd126D7SI) {
        var hs_sat26D7Vr = new $hs.Thunk();
        hs_sat26D7Vr.evaluateOnce = function () {
            return hs_zdcmin25uJmk.hscall(hs_zddEq26D7SG, hs_zddOrd26D7SH, hs_zddOrd126D7SI);
        };
        var hs_sat26D7Vs = new $hs.Thunk();
        hs_sat26D7Vs.evaluateOnce = function () {
            return hs_zdcmax25uJmm.hscall(hs_zddEq26D7SG, hs_zddOrd26D7SH, hs_zddOrd126D7SI);
        };
        var hs_sat26D7Vt = new $hs.Func(2);
        hs_sat26D7Vt.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze25uJkj.hscall(hs_zddEq26D7SG, hs_zddOrd26D7SH, hs_zddOrd126D7SI, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26D7Vu = new $hs.Func(2);
        hs_sat26D7Vu.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg25uJkI.hscall(hs_zddEq26D7SG, hs_zddOrd26D7SH, hs_zddOrd126D7SI, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26D7Vv = new $hs.Func(2);
        hs_sat26D7Vv.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze25uJl7.hscall(hs_zddEq26D7SG, hs_zddOrd26D7SH, hs_zddOrd126D7SI, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26D7Vw = new $hs.Func(2);
        hs_sat26D7Vw.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl25uJlw.hscall(hs_zddEq26D7SG, hs_zddOrd26D7SH, hs_zddOrd126D7SI, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26D7Vx = new $hs.Func(2);
        hs_sat26D7Vx.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare25uJlV.hscall(hs_zddEq26D7SG, hs_zddOrd26D7SH, hs_zddOrd126D7SI, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq26D7SG, hs_sat26D7Vx, hs_sat26D7Vw, hs_sat26D7Vv, hs_sat26D7Vu, hs_sat26D7Vt, hs_sat26D7Vs, hs_sat26D7Vr];
        return $res;
    };
    hs_zdcmin25uJmk.evaluate = function (hs_zddEq26D7ST, hs_zddOrd26D7SU, hs_zddOrd126D7SV) {
        var hs_sat26D7Vy = new $hs.Thunk();
        hs_sat26D7Vy.evaluateOnce = function () {
            return $hs.modules.DataziEither.hs_zdfOrdEither.hscall(hs_zddEq26D7ST, hs_zddOrd26D7SU, hs_zddOrd126D7SV);
        };
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall(hs_sat26D7Vy);
    };
    hs_zdcmax25uJmm.evaluate = function (hs_zddEq26D7T0, hs_zddOrd26D7T1, hs_zddOrd126D7T2) {
        var hs_sat26D7Vz = new $hs.Thunk();
        hs_sat26D7Vz.evaluateOnce = function () {
            return $hs.modules.DataziEither.hs_zdfOrdEither.hscall(hs_zddEq26D7T0, hs_zddOrd26D7T1, hs_zddOrd126D7T2);
        };
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall(hs_sat26D7Vz);
    };
    hs_zdczeze25uJmP.evaluate = function (hs_zddEq26D7Tg, hs_zddEq126D7To, hs_ds26D7Ta, hs_ds126D7Td) {
        var hs_wild26D7VB = hs_ds26D7Ta;
        if (hs_ds26D7Ta.notEvaluated) {
            hs_wild26D7VB = hs_ds26D7Ta.hscall();
        }
        switch (hs_wild26D7VB.tag) {
        case 1:
            var hs_a126D7Th = hs_wild26D7VB.data[0];
            var hs_wild126D7VA = hs_ds126D7Td;
            if (hs_ds126D7Td.notEvaluated) {
                hs_wild126D7VA = hs_ds126D7Td.hscall();
            }
            switch (hs_wild126D7VA.tag) {
            case 1:
                var hs_b126D7Ti = hs_wild126D7VA.data[0];
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26D7Tg, hs_a126D7Th, hs_b126D7Ti);
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_a126D7Tp = hs_wild26D7VB.data[0];
            var hs_wild126D7VE = hs_ds126D7Td;
            if (hs_ds126D7Td.notEvaluated) {
                hs_wild126D7VE = hs_ds126D7Td.hscall();
            }
            switch (hs_wild126D7VE.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126D7Tq = hs_wild126D7VE.data[0];
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq126D7To, hs_a126D7Tp, hs_b126D7Tq);
            }
        }
    };
    this.hs_zdfEqEither.evaluate = function (hs_zddEq26D7Tv, hs_zddEq126D7Tw) {
        var hs_sat26D7VF = new $hs.Thunk();
        hs_sat26D7VF.evaluateOnce = function () {
            return hs_zdczsze25uJnc.hscall(hs_zddEq26D7Tv, hs_zddEq126D7Tw);
        };
        var hs_sat26D7VG = new $hs.Func(2);
        hs_sat26D7VG.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze25uJmP.hscall(hs_zddEq26D7Tv, hs_zddEq126D7Tw, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26D7VG, hs_sat26D7VF];
        return $res;
    };
    hs_zdczsze25uJnc.evaluate = function (hs_zddEq26D7TC, hs_zddEq126D7TD) {
        var hs_zddEq226D7TE = new $hs.Thunk();
        hs_zddEq226D7TE.evaluateOnce = function () {
            return $hs.modules.DataziEither.hs_zdfEqEither.hscall(hs_zddEq26D7TC, hs_zddEq126D7TD);
        };
        var hs_sat26D7VI = new $hs.Func(2);
        hs_sat26D7VI.evaluate = function (hs_a26D7TH, hs_b26D7TI) {
            var hs_sat26D7VH = new $hs.Thunk();
            hs_sat26D7VH.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq226D7TE, hs_a26D7TH, hs_b26D7TI);
            };
            return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D7VH);
        };
        if (hs_sat26D7VI.notEvaluated) {
            return hs_sat26D7VI.hscall();
        } else {
            return hs_sat26D7VI;
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
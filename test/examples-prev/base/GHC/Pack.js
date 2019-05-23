
$hs.modules.GHCziPack = new $hs.Module();
$hs.modules.GHCziPack.dependencies = ["GHC.Unit", "GHC.Base", "GHC.Err", "GHC.Classes", "GHC.List", "GHC.Ptr", "GHC.ST"];
$hs.modules.GHCziPack.initBeforeDependencies = function () {
    this.hs_packCStringzh = new $hs.Func(1);
    this.hs_unpackCString = new $hs.Func(1);
    this.hs_MutableByteArray = new $hs.Func(3);
    this.hs_ByteArray = new $hs.Func(3);
    this.hs_packCStringzh.notEvaluated = true;
    this.hs_packCStringzh.evaluate = function (hs_str26Dz96) {
        $hs.modules.GHCziPack.loadDependencies();
        return this.evaluate(hs_str26Dz96);
    };
    this.hs_unpackCString.notEvaluated = true;
    this.hs_unpackCString.evaluate = function (hs_a26DzaI) {
        $hs.modules.GHCziPack.loadDependencies();
        return this.evaluate(hs_a26DzaI);
    };
    this.hs_MutableByteArray.notEvaluated = true;
    this.hs_MutableByteArray.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziPack.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_ByteArray.notEvaluated = true;
    this.hs_ByteArray.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziPack.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziPack.initAfterDependencies = function () {
    this.hs_packCStringzh.notEvaluated = false;
    this.hs_unpackCString.notEvaluated = false;
    this.hs_MutableByteArray.notEvaluated = false;
    this.hs_ByteArray.notEvaluated = false;
    this.hs_packCStringzh.evaluate = function (hs_str26Dz96) {
        var hs_sat26Dzbs = new $hs.Thunk();
        hs_sat26Dzbs.evaluateOnce = function () {
            var hs_wild26DzaP = $hs.modules.GHCziList.hs_length.hscall(hs_str26Dz96);
            var hs_lengthzh26Dza2 = hs_wild26DzaP.data[0];
            var hs_fillzuin26Dz9R = new $hs.Func(3);
            hs_fillzuin26Dz9R.evaluate = function (hs_arrzuinzh26Dz9f, hs_idx26Dz9p, hs_ds26Dz9d) {
                var hs_wild126DzaO = hs_ds26Dz9d;
                if (hs_ds26Dz9d.notEvaluated) {
                    hs_wild126DzaO = hs_ds26Dz9d.hscall();
                }
                switch (hs_wild126DzaO.tag) {
                case 1:
                    var hs_sat26DzaT = new $hs.Thunk();
                    hs_sat26DzaT.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziST.hs_zdfMonadST, $hs.modules.GHCziUnit.hs_Z0T);
                    };
                    var hs_sat26DzaX = new $hs.Thunk();
                    hs_sat26DzaX.evaluateOnce = function () {
                        var hs_wild226DzaS = hs_arrzuinzh26Dz9f;
                        if (hs_arrzuinzh26Dz9f.notEvaluated) {
                            hs_wild226DzaS = hs_arrzuinzh26Dz9f.hscall();
                        }
                        var hs_barrzh26Dz9o = hs_wild226DzaS.data[2];
                        var hs_sat26DzaV = new $hs.Func(1);
                        hs_sat26DzaV.evaluate = function (hs_szh26Dz9r) {
                            var hs_sat26DzaQ = String.fromCharCode(0);
                            throw "primitive operation writeCharArray#. Not implemeted yet.";
                            return [hs_s2zh26Dz9t, $hs.modules.GHCziUnit.hs_Z0T];
                        };
                        var hs_sat26DzaW = new $hs.Func(1);
                        hs_sat26DzaW.evaluate = function (hs_tpl26Dz9l) {
                            if (hs_tpl26Dz9l.notEvaluated) {
                                return hs_tpl26Dz9l.hscall();
                            } else {
                                return hs_tpl26Dz9l;
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DzaW, hs_sat26DzaV);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziST.hs_zdfMonadST, hs_sat26DzaX, hs_sat26DzaT);
                case 2:
                    var hs_ds126Dz9z = hs_wild126DzaO.data[0];
                    var hs_cs26Dz9T = hs_wild126DzaO.data[1];
                    var hs_wild226DzaZ = hs_ds126Dz9z;
                    if (hs_ds126Dz9z.notEvaluated) {
                        hs_wild226DzaZ = hs_ds126Dz9z.hscall();
                    }
                    var hs_c26Dz9L = hs_wild226DzaZ.data[0];
                    var hs_sat26Dzb2 = new $hs.Thunk();
                    hs_sat26Dzb2.evaluateOnce = function () {
                        var hs_sat26DzaY = ($hs.Int.addCarry(hs_idx26Dz9p, 1, 0))[0];
                        return hs_fillzuin26Dz9R.hscall(hs_arrzuinzh26Dz9f, hs_sat26DzaY, hs_cs26Dz9T);
                    };
                    var hs_sat26Dzb6 = new $hs.Thunk();
                    hs_sat26Dzb6.evaluateOnce = function () {
                        var hs_wild326Dzb1 = hs_arrzuinzh26Dz9f;
                        if (hs_arrzuinzh26Dz9f.notEvaluated) {
                            hs_wild326Dzb1 = hs_arrzuinzh26Dz9f.hscall();
                        }
                        var hs_barrzh26Dz9K = hs_wild326Dzb1.data[2];
                        var hs_sat26Dzb4 = new $hs.Func(1);
                        hs_sat26Dzb4.evaluate = function (hs_szh26Dz9M) {
                            throw "primitive operation writeCharArray#. Not implemeted yet.";
                            return [hs_s2zh26Dz9O, $hs.modules.GHCziUnit.hs_Z0T];
                        };
                        var hs_sat26Dzb5 = new $hs.Func(1);
                        hs_sat26Dzb5.evaluate = function (hs_tpl26Dz9H) {
                            if (hs_tpl26Dz9H.notEvaluated) {
                                return hs_tpl26Dz9H.hscall();
                            } else {
                                return hs_tpl26Dz9H;
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dzb5, hs_sat26Dzb4);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziST.hs_zdfMonadST, hs_sat26Dzb6, hs_sat26Dzb2);
                }
            };
            var hs_sat26Dzbj = new $hs.Func(1);
            hs_sat26Dzbj.evaluate = function (hs_chzuarray26Dzae) {
                var hs_sat26Dzbg = new $hs.Thunk();
                hs_sat26Dzbg.evaluateOnce = function () {
                    var hs_wild126Dzb9 = hs_chzuarray26Dzae;
                    if (hs_chzuarray26Dzae.notEvaluated) {
                        hs_wild126Dzb9 = hs_chzuarray26Dzae.hscall();
                    }
                    var hs_arrzh26Dzao = hs_wild126Dzb9.data[2];
                    var hs_sat26Dzbe = new $hs.Func(1);
                    hs_sat26Dzbe.evaluate = function (hs_szh26Dzap) {
                        throw "primitive operation unsafeFreezeByteArray#. Not implemeted yet.";
                        var hs_s2zh26Dzat = hs_wild226Dzb7[0];
                        var hs_frozzenzh26Dzaw = hs_wild226Dzb7[1];
                        var hs_sat26Dzbb = new $hs.Data(1);
                        hs_sat26Dzbb.data = [hs_lengthzh26Dza2];
                        var hs_sat26Dzbc = new $hs.Data(1);
                        hs_sat26Dzbc.data = [0];
                        var hs_sat26Dzbd = new $hs.Data(1);
                        hs_sat26Dzbd.data = [hs_sat26Dzbc, hs_sat26Dzbb, hs_frozzenzh26Dzaw];
                        return [hs_s2zh26Dzat, hs_sat26Dzbd];
                    };
                    var hs_sat26Dzbf = new $hs.Func(1);
                    hs_sat26Dzbf.evaluate = function (hs_tpl26Dzal) {
                        if (hs_tpl26Dzal.notEvaluated) {
                            return hs_tpl26Dzal.hscall();
                        } else {
                            return hs_tpl26Dzal;
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dzbf, hs_sat26Dzbe);
                };
                var hs_sat26Dzbh = new $hs.Thunk();
                hs_sat26Dzbh.evaluateOnce = function () {
                    return hs_fillzuin26Dz9R.hscall(hs_chzuarray26Dzae, 0, hs_str26Dz96);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziST.hs_zdfMonadST, hs_sat26Dzbh, hs_sat26Dzbg);
            };
            var hs_sat26Dzbp = new $hs.Thunk();
            hs_sat26Dzbp.evaluateOnce = function () {
                var hs_bot26Dz9X = new $hs.Thunk();
                hs_bot26Dz9X.evaluateOnce = function () {
                    var hs_sat26Dzbi = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("new_ps_array\x00");
                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dzbi);
                };
                var hs_sat26Dzbn = new $hs.Func(1);
                hs_sat26Dzbn.evaluate = function (hs_s26Dza4) {
                    var hs_sat26Dzbl = ($hs.Int.addCarry(hs_lengthzh26Dza2, 1, 0))[0];
                    throw "primitive operation newByteArray#. Not implemeted yet.";
                    var hs_s2zh26Dza8 = hs_wild126Dzbk[0];
                    var hs_barrzh26Dza9 = hs_wild126Dzbk[1];
                    var hs_sat26Dzbm = new $hs.Data(1);
                    hs_sat26Dzbm.data = [hs_bot26Dz9X, hs_bot26Dz9X, hs_barrzh26Dza9];
                    return [hs_s2zh26Dza8, hs_sat26Dzbm];
                };
                var hs_sat26Dzbo = new $hs.Func(1);
                hs_sat26Dzbo.evaluate = function (hs_tpl26Dz9Z) {
                    if (hs_tpl26Dz9Z.notEvaluated) {
                        return hs_tpl26Dz9Z.hscall();
                    } else {
                        return hs_tpl26Dz9Z;
                    }
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dzbo, hs_sat26Dzbn);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziST.hs_zdfMonadST, hs_sat26Dzbp, hs_sat26Dzbj);
        };
        var hs_wild26Dzbr = $hs.modules.GHCziST.hs_runST.hscall(hs_sat26Dzbs);
        var hs_bytes26DzaG = hs_wild26Dzbr.data[2];
        if (hs_bytes26DzaG.notEvaluated) {
            return hs_bytes26DzaG.hscall();
        } else {
            return hs_bytes26DzaG;
        }
    };
    this.hs_unpackCString.evaluate = function (hs_a26DzaI) {
        var hs_wild26DzaL = hs_a26DzaI;
        if (hs_a26DzaI.notEvaluated) {
            hs_wild26DzaL = hs_a26DzaI.hscall();
        }
        var hs_addr26DzaN = hs_wild26DzaL.data[0];
        var hs_wild126Dzbu = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_wild26DzaL, $hs.modules.GHCziPtr.hs_nullPtr);
        switch (hs_wild126Dzbu.tag) {
        case 1:
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(hs_addr26DzaN);
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_MutableByteArray.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_ByteArray.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
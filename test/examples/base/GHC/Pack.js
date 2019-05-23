
$hs.modules.GHCziPack = new $hs.Module();
$hs.modules.GHCziPack.dependencies = ["GHC.CString", "GHC.Unit", "GHC.Base", "GHC.Err", "GHC.Classes", "GHC.List", "GHC.Ptr", "GHC.ST"];
$hs.modules.GHCziPack.initBeforeDependencies = function () {
    this.hs_packCStringzh = new $hs.Func(1);
    this.hs_unpackCString = new $hs.Func(1);
    this.hs_MutableByteArray = new $hs.Func(3);
    this.hs_ByteArray = new $hs.Func(3);
    this.hs_packCStringzh.notEvaluated = true;
    this.hs_packCStringzh.evaluate = function (hs_str26DbP7) {
        $hs.modules.GHCziPack.loadDependencies();
        return this.evaluate(hs_str26DbP7);
    };
    this.hs_unpackCString.notEvaluated = true;
    this.hs_unpackCString.evaluate = function (hs_a26DbQJ) {
        $hs.modules.GHCziPack.loadDependencies();
        return this.evaluate(hs_a26DbQJ);
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
    this.hs_packCStringzh.evaluate = function (hs_str26DbP7) {
        var hs_sat26DbQR = new $hs.Thunk();
        hs_sat26DbQR.evaluateOnce = function () {
            var hs_wild26DbQU = $hs.modules.GHCziList.hs_length.hscall(hs_str26DbP7);
            var hs_lengthzh26DbQ3 = hs_wild26DbQU.data[0];
            var hs_fillzuin26DbPS = new $hs.Func(3);
            hs_fillzuin26DbPS.evaluate = function (hs_arrzuinzh26DbPg, hs_idx26DbPq, hs_ds26DbPe) {
                var hs_wild126DbR4 = hs_ds26DbPe;
                if (hs_ds26DbPe.notEvaluated) {
                    hs_wild126DbR4 = hs_ds26DbPe.hscall();
                }
                switch (hs_wild126DbR4.tag) {
                case 1:
                    var hs_sat26DbRd = new $hs.Thunk();
                    hs_sat26DbRd.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziST.hs_zdfMonadST, $hs.modules.GHCziUnit.hs_Z0T);
                    };
                    var hs_sat26DbRc = new $hs.Thunk();
                    hs_sat26DbRc.evaluateOnce = function () {
                        var hs_wild226DbRf = hs_arrzuinzh26DbPg;
                        if (hs_arrzuinzh26DbPg.notEvaluated) {
                            hs_wild226DbRf = hs_arrzuinzh26DbPg.hscall();
                        }
                        var hs_barrzh26DbPp = hs_wild226DbRf.data[2];
                        var hs_sat26DbRi = new $hs.Func(1);
                        hs_sat26DbRi.evaluate = function (hs_szh26DbPs) {
                            var hs_sat26DbRj = String.fromCharCode(0);
                            throw "primitive operation writeCharArray#. Not implemeted yet.";
                            return [hs_s2zh26DbPu, $hs.modules.GHCziUnit.hs_Z0T];
                        };
                        var hs_sat26DbRe = new $hs.Func(1);
                        hs_sat26DbRe.evaluate = function (hs_tpl26DbPm) {
                            if (hs_tpl26DbPm.notEvaluated) {
                                return hs_tpl26DbPm.hscall();
                            } else {
                                return hs_tpl26DbPm;
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DbRe, hs_sat26DbRi);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziST.hs_zdfMonadST, hs_sat26DbRc, hs_sat26DbRd);
                case 2:
                    var hs_ds126DbPA = hs_wild126DbR4.data[0];
                    var hs_cs26DbPU = hs_wild126DbR4.data[1];
                    var hs_wild226DbR3 = hs_ds126DbPA;
                    if (hs_ds126DbPA.notEvaluated) {
                        hs_wild226DbR3 = hs_ds126DbPA.hscall();
                    }
                    var hs_c26DbPM = hs_wild226DbR3.data[0];
                    var hs_sat26DbR5 = new $hs.Thunk();
                    hs_sat26DbR5.evaluateOnce = function () {
                        var hs_sat26DbRb = ($hs.Int.addCarry(hs_idx26DbPq, 1, 0))[0];
                        return hs_fillzuin26DbPS.hscall(hs_arrzuinzh26DbPg, hs_sat26DbRb, hs_cs26DbPU);
                    };
                    var hs_sat26DbR2 = new $hs.Thunk();
                    hs_sat26DbR2.evaluateOnce = function () {
                        var hs_wild326DbR7 = hs_arrzuinzh26DbPg;
                        if (hs_arrzuinzh26DbPg.notEvaluated) {
                            hs_wild326DbR7 = hs_arrzuinzh26DbPg.hscall();
                        }
                        var hs_barrzh26DbPL = hs_wild326DbR7.data[2];
                        var hs_sat26DbRa = new $hs.Func(1);
                        hs_sat26DbRa.evaluate = function (hs_szh26DbPN) {
                            throw "primitive operation writeCharArray#. Not implemeted yet.";
                            return [hs_s2zh26DbPP, $hs.modules.GHCziUnit.hs_Z0T];
                        };
                        var hs_sat26DbR6 = new $hs.Func(1);
                        hs_sat26DbR6.evaluate = function (hs_tpl26DbPI) {
                            if (hs_tpl26DbPI.notEvaluated) {
                                return hs_tpl26DbPI.hscall();
                            } else {
                                return hs_tpl26DbPI;
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DbR6, hs_sat26DbRa);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziST.hs_zdfMonadST, hs_sat26DbR2, hs_sat26DbR5);
                }
            };
            var hs_sat26DbQV = new $hs.Func(1);
            hs_sat26DbQV.evaluate = function (hs_chzuarray26DbQf) {
                var hs_sat26DbRl = new $hs.Thunk();
                hs_sat26DbRl.evaluateOnce = function () {
                    var hs_wild126DbRn = hs_chzuarray26DbQf;
                    if (hs_chzuarray26DbQf.notEvaluated) {
                        hs_wild126DbRn = hs_chzuarray26DbQf.hscall();
                    }
                    var hs_arrzh26DbQp = hs_wild126DbRn.data[2];
                    var hs_sat26DbRq = new $hs.Func(1);
                    hs_sat26DbRq.evaluate = function (hs_szh26DbQq) {
                        throw "primitive operation unsafeFreezeByteArray#. Not implemeted yet.";
                        var hs_s2zh26DbQu = hs_wild226DbRs[0];
                        var hs_frozzenzh26DbQx = hs_wild226DbRs[1];
                        var hs_sat26DbRt = new $hs.Data(1);
                        hs_sat26DbRt.data = [hs_lengthzh26DbQ3];
                        var hs_sat26DbRu = new $hs.Data(1);
                        hs_sat26DbRu.data = [0];
                        var hs_sat26DbRr = new $hs.Data(1);
                        hs_sat26DbRr.data = [hs_sat26DbRu, hs_sat26DbRt, hs_frozzenzh26DbQx];
                        return [hs_s2zh26DbQu, hs_sat26DbRr];
                    };
                    var hs_sat26DbRm = new $hs.Func(1);
                    hs_sat26DbRm.evaluate = function (hs_tpl26DbQm) {
                        if (hs_tpl26DbQm.notEvaluated) {
                            return hs_tpl26DbQm.hscall();
                        } else {
                            return hs_tpl26DbQm;
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DbRm, hs_sat26DbRq);
                };
                var hs_sat26DbRk = new $hs.Thunk();
                hs_sat26DbRk.evaluateOnce = function () {
                    return hs_fillzuin26DbPS.hscall(hs_chzuarray26DbQf, 0, hs_str26DbP7);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziST.hs_zdfMonadST, hs_sat26DbRk, hs_sat26DbRl);
            };
            var hs_sat26DbQT = new $hs.Thunk();
            hs_sat26DbQT.evaluateOnce = function () {
                var hs_bot26DbPY = new $hs.Thunk();
                hs_bot26DbPY.evaluateOnce = function () {
                    var hs_sat26DbR1 = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("new_ps_array\x00");
                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DbR1);
                };
                var hs_sat26DbQX = new $hs.Func(1);
                hs_sat26DbQX.evaluate = function (hs_s26DbQ5) {
                    var hs_sat26DbQZ = ($hs.Int.addCarry(hs_lengthzh26DbQ3, 1, 0))[0];
                    throw "primitive operation newByteArray#. Not implemeted yet.";
                    var hs_s2zh26DbQ9 = hs_wild126DbR0[0];
                    var hs_barrzh26DbQa = hs_wild126DbR0[1];
                    var hs_sat26DbQY = new $hs.Data(1);
                    hs_sat26DbQY.data = [hs_bot26DbPY, hs_bot26DbPY, hs_barrzh26DbQa];
                    return [hs_s2zh26DbQ9, hs_sat26DbQY];
                };
                var hs_sat26DbQW = new $hs.Func(1);
                hs_sat26DbQW.evaluate = function (hs_tpl26DbQ0) {
                    if (hs_tpl26DbQ0.notEvaluated) {
                        return hs_tpl26DbQ0.hscall();
                    } else {
                        return hs_tpl26DbQ0;
                    }
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DbQW, hs_sat26DbQX);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziST.hs_zdfMonadST, hs_sat26DbQT, hs_sat26DbQV);
        };
        var hs_wild26DbQS = $hs.modules.GHCziST.hs_runST.hscall(hs_sat26DbQR);
        var hs_bytes26DbQH = hs_wild26DbQS.data[2];
        if (hs_bytes26DbQH.notEvaluated) {
            return hs_bytes26DbQH.hscall();
        } else {
            return hs_bytes26DbQH;
        }
    };
    this.hs_unpackCString.evaluate = function (hs_a26DbQJ) {
        var hs_wild26DbQM = hs_a26DbQJ;
        if (hs_a26DbQJ.notEvaluated) {
            hs_wild26DbQM = hs_a26DbQJ.hscall();
        }
        var hs_addr26DbQO = hs_wild26DbQM.data[0];
        var hs_wild126DbRv = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_wild26DbQM, $hs.modules.GHCziPtr.hs_nullPtr);
        switch (hs_wild126DbRv.tag) {
        case 1:
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(hs_addr26DbQO);
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
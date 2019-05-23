
$hs.modules.ForeignziCziString = new $hs.Module();
$hs.modules.ForeignziCziString.dependencies = ["GHC.Types", "GHC.Unit", "GHC.Integer", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Classes", "GHC.List", "GHC.Word", "Foreign.C.Types", "Foreign.Marshal.Array", "Foreign.Storable"];
$hs.modules.ForeignziCziString.initBeforeDependencies = function () {
    this.hs_charIsRepresentable = new $hs.Func(1);
    this.hs_castCCharToChar = new $hs.Func(1);
    this.hs_peekCAStringLen = new $hs.Func(1);
    this.hs_peekCStringLen = new $hs.Func(1);
    this.hs_castCharToCChar = new $hs.Func(1);
    this.hs_newCAStringLen = new $hs.Func(1);
    this.hs_newCStringLen = new $hs.Func(1);
    this.hs_withCAStringLen = new $hs.Func(2);
    this.hs_withCStringLen = new $hs.Func(2);
    this.hs_castCUCharToChar = new $hs.Func(1);
    this.hs_castCharToCUChar = new $hs.Func(1);
    this.hs_castCSCharToChar = new $hs.Func(1);
    this.hs_castCharToCSChar = new $hs.Func(1);
    this.hs_peekCAString = new $hs.Func(1);
    this.hs_peekCString = new $hs.Func(1);
    this.hs_newCAString = new $hs.Func(1);
    this.hs_newCString = new $hs.Func(1);
    this.hs_withCAString = new $hs.Func(2);
    this.hs_withCString = new $hs.Func(2);
    this.hs_peekCWString = new $hs.Func(1);
    this.hs_peekCWStringLen = new $hs.Func(1);
    this.hs_newCWString = new $hs.Thunk();
    this.hs_newCWStringLen = new $hs.Func(1);
    this.hs_withCWString = new $hs.Thunk();
    this.hs_withCWStringLen = new $hs.Func(2);
    this.hs_charIsRepresentable.notEvaluated = true;
    this.hs_charIsRepresentable.evaluate = function (hs_c26DHbz) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_c26DHbz);
    };
    this.hs_castCCharToChar.notEvaluated = true;
    this.hs_castCCharToChar.evaluate = function (hs_ch26DHbE) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_ch26DHbE);
    };
    this.hs_peekCAStringLen.notEvaluated = true;
    this.hs_peekCAStringLen.evaluate = function (hs_ds26DHbI) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_ds26DHbI);
    };
    this.hs_peekCStringLen.notEvaluated = true;
    this.hs_peekCStringLen.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_castCharToCChar.notEvaluated = true;
    this.hs_castCharToCChar.evaluate = function (hs_ch26DHcc) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_ch26DHcc);
    };
    this.hs_newCAStringLen.notEvaluated = true;
    this.hs_newCAStringLen.evaluate = function (hs_str26DHcg) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_str26DHcg);
    };
    this.hs_newCStringLen.notEvaluated = true;
    this.hs_newCStringLen.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_withCAStringLen.notEvaluated = true;
    this.hs_withCAStringLen.evaluate = function (hs_str26DHcM, hs_f26DHdc) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_str26DHcM, hs_f26DHdc);
    };
    this.hs_withCStringLen.notEvaluated = true;
    this.hs_withCStringLen.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_castCUCharToChar.notEvaluated = true;
    this.hs_castCUCharToChar.evaluate = function (hs_ch26DHdh) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_ch26DHdh);
    };
    this.hs_castCharToCUChar.notEvaluated = true;
    this.hs_castCharToCUChar.evaluate = function (hs_ch26DHdl) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_ch26DHdl);
    };
    this.hs_castCSCharToChar.notEvaluated = true;
    this.hs_castCSCharToChar.evaluate = function (hs_ch26DHdo) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_ch26DHdo);
    };
    this.hs_castCharToCSChar.notEvaluated = true;
    this.hs_castCharToCSChar.evaluate = function (hs_ch26DHds) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_ch26DHds);
    };
    this.hs_peekCAString.notEvaluated = true;
    this.hs_peekCAString.evaluate = function (hs_cp26DHdz) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_cp26DHdz);
    };
    this.hs_peekCString.notEvaluated = true;
    this.hs_peekCString.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_newCAString.notEvaluated = true;
    this.hs_newCAString.evaluate = function (hs_str26DHdZ) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_str26DHdZ);
    };
    this.hs_newCString.notEvaluated = true;
    this.hs_newCString.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_withCAString.notEvaluated = true;
    this.hs_withCAString.evaluate = function (hs_str26DHer, hs_f26DHeP) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_str26DHer, hs_f26DHeP);
    };
    this.hs_withCString.notEvaluated = true;
    this.hs_withCString.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_peekCWString.notEvaluated = true;
    this.hs_peekCWString.evaluate = function (hs_cp26DHeX) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_cp26DHeX);
    };
    this.hs_peekCWStringLen.notEvaluated = true;
    this.hs_peekCWStringLen.evaluate = function (hs_ds26DHf4) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_ds26DHf4);
    };
    this.hs_newCWString.evaluateOnce = function () {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_newCWStringLen.notEvaluated = true;
    this.hs_newCWStringLen.evaluate = function (hs_str26DHfn) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_str26DHfn);
    };
    this.hs_withCWString.evaluateOnce = function () {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_withCWStringLen.notEvaluated = true;
    this.hs_withCWStringLen.evaluate = function (hs_str26DHfy, hs_f26DHfF) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_str26DHfy, hs_f26DHfF);
    };
};
$hs.modules.ForeignziCziString.initAfterDependencies = function () {
    this.hs_charIsRepresentable.notEvaluated = false;
    this.hs_castCCharToChar.notEvaluated = false;
    this.hs_peekCAStringLen.notEvaluated = false;
    this.hs_peekCStringLen.notEvaluated = false;
    this.hs_castCharToCChar.notEvaluated = false;
    this.hs_newCAStringLen.notEvaluated = false;
    this.hs_newCStringLen.notEvaluated = false;
    this.hs_withCAStringLen.notEvaluated = false;
    this.hs_withCStringLen.notEvaluated = false;
    this.hs_castCUCharToChar.notEvaluated = false;
    this.hs_castCharToCUChar.notEvaluated = false;
    this.hs_castCSCharToChar.notEvaluated = false;
    this.hs_castCharToCSChar.notEvaluated = false;
    this.hs_peekCAString.notEvaluated = false;
    this.hs_peekCString.notEvaluated = false;
    this.hs_newCAString.notEvaluated = false;
    this.hs_newCString.notEvaluated = false;
    this.hs_withCAString.notEvaluated = false;
    this.hs_withCString.notEvaluated = false;
    this.hs_peekCWString.notEvaluated = false;
    this.hs_peekCWStringLen.notEvaluated = false;
    this.hs_newCWStringLen.notEvaluated = false;
    this.hs_withCWStringLen.notEvaluated = false;
    var hs_sat26DHgC = new $hs.Thunk();
    var hs_nUL25tFdt = new $hs.Thunk();
    var hs_sat26DHhi = new $hs.Thunk();
    var hs_wNUL25tFdJ = new $hs.Thunk();
    var hs_castCWcharToChar25tFdP = new $hs.Func(1);
    var hs_castCharToCWchar25tFdR = new $hs.Func(1);
    var hs_charsToCWchars25tFdN = new $hs.Func(1);
    var hs_sat26DHhs = new $hs.Thunk();
    this.hs_charIsRepresentable.evaluate = function (hs_c26DHbz) {
        var hs_sat26DHfK = new $hs.Thunk();
        hs_sat26DHfK.evaluateOnce = function () {
            var hs_sat26DHfI = new $hs.Data(1);
            hs_sat26DHfI.data = [256];
            var hs_sat26DHfJ = new $hs.Thunk();
            hs_sat26DHfJ.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DHbz);
            };
            return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DHfJ, hs_sat26DHfI);
        };
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DHfK);
    };
    this.hs_castCCharToChar.evaluate = function (hs_ch26DHbE) {
        var hs_sat26DHfM = new $hs.Thunk();
        hs_sat26DHfM.evaluateOnce = function () {
            var hs_sat26DHfL = new $hs.Thunk();
            hs_sat26DHfL.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCChar, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_ch26DHbE);
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DHfL);
        };
        return $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26DHfM);
    };
    this.hs_peekCAStringLen.evaluate = function (hs_ds26DHbI) {
        var hs_wild26DHfN = hs_ds26DHbI;
        if (hs_ds26DHbI.notEvaluated) {
            hs_wild26DHfN = hs_ds26DHbI.hscall();
        }
        var hs_cp26DHbS = hs_wild26DHfN.data[0];
        var hs_len26DHbM = hs_wild26DHfN.data[1];
        var hs_sat26DHfQ = new $hs.Data(1);
        hs_sat26DHfQ.data = [0];
        var hs_wild126DHfP = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_len26DHbM, hs_sat26DHfQ);
        switch (hs_wild126DHfP.tag) {
        case 1:
            var hs_loop26DHc3 = new $hs.Func(2);
            hs_loop26DHc3.evaluate = function (hs_acc26DHc2, hs_i26DHbT) {
                var hs_sat26DHfX = new $hs.Func(1);
                hs_sat26DHfX.evaluate = function (hs_xval26DHbW) {
                    var hs_val26DHc1 = $hs.modules.ForeignziCziString.hs_castCCharToChar.hscall(hs_xval26DHbW);
                    var hs_sat26DHfS = new $hs.Data(1);
                    hs_sat26DHfS.data = [0];
                    var hs_wild226DHfR = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_i26DHbT, hs_sat26DHfS);
                    switch (hs_wild226DHfR.tag) {
                    case 1:
                        var hs_sat26DHfU = new $hs.Thunk();
                        hs_sat26DHfU.evaluateOnce = function () {
                            var hs_sat26DHfT = new $hs.Data(1);
                            hs_sat26DHfT.data = [1];
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i26DHbT, hs_sat26DHfT);
                        };
                        var hs_sat26DHfV = new $hs.Data(2);
                        hs_sat26DHfV.data = [hs_val26DHc1, hs_acc26DHc2];
                        return hs_loop26DHc3.hscall(hs_sat26DHfV, hs_sat26DHfU);
                    case 2:
                        var hs_sat26DHfW = new $hs.Data(2);
                        hs_sat26DHfW.data = [hs_val26DHc1, hs_acc26DHc2];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DHfW);
                    }
                };
                var hs_sat26DHfY = new $hs.Thunk();
                hs_sat26DHfY.evaluateOnce = function () {
                    return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, hs_cp26DHbS, hs_i26DHbT);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DHfY, hs_sat26DHfX);
            };
            var hs_sat26DHg0 = new $hs.Thunk();
            hs_sat26DHg0.evaluateOnce = function () {
                var hs_sat26DHfZ = new $hs.Data(1);
                hs_sat26DHfZ.data = [1];
                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_len26DHbM, hs_sat26DHfZ);
            };
            return hs_loop26DHc3.hscall($hs.modules.GHCziTypes.hs_ZMZN, hs_sat26DHg0);
        case 2:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_ZMZN);
        }
    };
    this.hs_peekCStringLen.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziString.hs_peekCAStringLen.hscall(hs_eta1cW6l3);
    };
    this.hs_castCharToCChar.evaluate = function (hs_ch26DHcc) {
        var hs_sat26DHg1 = new $hs.Thunk();
        hs_sat26DHg1.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_ord.hscall(hs_ch26DHcc);
        };
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCChar, hs_sat26DHg1);
    };
    this.hs_newCAStringLen.evaluate = function (hs_str26DHcg) {
        var hs_len26DHch = new $hs.Thunk();
        hs_len26DHch.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_length.hscall(hs_str26DHcg);
        };
        var hs_sat26DHgf = new $hs.Func(1);
        hs_sat26DHgf.evaluate = function (hs_ptr26DHcu) {
            var hs_sat26DHg6 = new $hs.Thunk();
            hs_sat26DHg6.evaluateOnce = function () {
                var hs_sat26DHg2 = new $hs.Data(1);
                hs_sat26DHg2.data = [hs_ptr26DHcu, hs_len26DHch];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DHg2);
            };
            var hs_sat26DHge = new $hs.Thunk();
            hs_sat26DHge.evaluateOnce = function () {
                var hs_go26DHcB = new $hs.Func(2);
                hs_go26DHcB.evaluate = function (hs_ds26DHcn, hs_n26DHcp) {
                    var hs_wild26DHg5 = hs_ds26DHcn;
                    if (hs_ds26DHcn.notEvaluated) {
                        hs_wild26DHg5 = hs_ds26DHcn.hscall();
                    }
                    switch (hs_wild26DHg5.tag) {
                    case 1:
                        var hs_n126DHg4 = hs_n26DHcp;
                        if (hs_n26DHcp.notEvaluated) {
                            hs_n126DHg4 = hs_n26DHcp.hscall();
                        }
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                    case 2:
                        var hs_c26DHcv = hs_wild26DHg5.data[0];
                        var hs_cs26DHcz = hs_wild26DHg5.data[1];
                        var hs_sat26DHg9 = new $hs.Thunk();
                        hs_sat26DHg9.evaluateOnce = function () {
                            var hs_sat26DHg8 = new $hs.Thunk();
                            hs_sat26DHg8.evaluateOnce = function () {
                                var hs_sat26DHg7 = new $hs.Data(1);
                                hs_sat26DHg7.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26DHcp, hs_sat26DHg7);
                            };
                            return hs_go26DHcB.hscall(hs_cs26DHcz, hs_sat26DHg8);
                        };
                        var hs_sat26DHgc = new $hs.Thunk();
                        hs_sat26DHgc.evaluateOnce = function () {
                            var hs_sat26DHgb = new $hs.Thunk();
                            hs_sat26DHgb.evaluateOnce = function () {
                                var hs_sat26DHga = new $hs.Thunk();
                                hs_sat26DHga.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DHcv);
                                };
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCChar, hs_sat26DHga);
                            };
                            return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, hs_ptr26DHcu, hs_n26DHcp, hs_sat26DHgb);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DHgc, hs_sat26DHg9);
                    }
                };
                var hs_sat26DHgd = new $hs.Data(1);
                hs_sat26DHgd.data = [0];
                return hs_go26DHcB.hscall(hs_str26DHcg, hs_sat26DHgd);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DHge, hs_sat26DHg6);
        };
        var hs_sat26DHgg = new $hs.Thunk();
        hs_sat26DHgg.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziArray.hs_mallocArray0.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, hs_len26DHch);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DHgg, hs_sat26DHgf);
    };
    this.hs_newCStringLen.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziString.hs_newCAStringLen.hscall(hs_eta1cW6l3);
    };
    this.hs_withCAStringLen.evaluate = function (hs_str26DHcM, hs_f26DHdc) {
        var hs_len26DHcN = new $hs.Thunk();
        hs_len26DHcN.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_length.hscall(hs_str26DHcM);
        };
        var hs_sat26DHgu = new $hs.Func(1);
        hs_sat26DHgu.evaluate = function (hs_ptr26DHd0) {
            var hs_sat26DHgl = new $hs.Thunk();
            hs_sat26DHgl.evaluateOnce = function () {
                var hs_sat26DHgh = new $hs.Data(1);
                hs_sat26DHgh.data = [hs_ptr26DHd0, hs_len26DHcN];
                return hs_f26DHdc.hscall(hs_sat26DHgh);
            };
            var hs_sat26DHgt = new $hs.Thunk();
            hs_sat26DHgt.evaluateOnce = function () {
                var hs_go26DHd7 = new $hs.Func(2);
                hs_go26DHd7.evaluate = function (hs_ds26DHcT, hs_n26DHcV) {
                    var hs_wild26DHgk = hs_ds26DHcT;
                    if (hs_ds26DHcT.notEvaluated) {
                        hs_wild26DHgk = hs_ds26DHcT.hscall();
                    }
                    switch (hs_wild26DHgk.tag) {
                    case 1:
                        var hs_n126DHgj = hs_n26DHcV;
                        if (hs_n26DHcV.notEvaluated) {
                            hs_n126DHgj = hs_n26DHcV.hscall();
                        }
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                    case 2:
                        var hs_c26DHd1 = hs_wild26DHgk.data[0];
                        var hs_cs26DHd5 = hs_wild26DHgk.data[1];
                        var hs_sat26DHgo = new $hs.Thunk();
                        hs_sat26DHgo.evaluateOnce = function () {
                            var hs_sat26DHgn = new $hs.Thunk();
                            hs_sat26DHgn.evaluateOnce = function () {
                                var hs_sat26DHgm = new $hs.Data(1);
                                hs_sat26DHgm.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26DHcV, hs_sat26DHgm);
                            };
                            return hs_go26DHd7.hscall(hs_cs26DHd5, hs_sat26DHgn);
                        };
                        var hs_sat26DHgr = new $hs.Thunk();
                        hs_sat26DHgr.evaluateOnce = function () {
                            var hs_sat26DHgq = new $hs.Thunk();
                            hs_sat26DHgq.evaluateOnce = function () {
                                var hs_sat26DHgp = new $hs.Thunk();
                                hs_sat26DHgp.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DHd1);
                                };
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCChar, hs_sat26DHgp);
                            };
                            return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, hs_ptr26DHd0, hs_n26DHcV, hs_sat26DHgq);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DHgr, hs_sat26DHgo);
                    }
                };
                var hs_sat26DHgs = new $hs.Data(1);
                hs_sat26DHgs.data = [0];
                return hs_go26DHd7.hscall(hs_str26DHcM, hs_sat26DHgs);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DHgt, hs_sat26DHgl);
        };
        var hs_sat26DHgv = new $hs.Thunk();
        hs_sat26DHgv.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziArray.hs_allocaArray.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, hs_len26DHcN);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DHgv, hs_sat26DHgu);
    };
    this.hs_withCStringLen.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziString.hs_withCAStringLen.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_castCUCharToChar.evaluate = function (hs_ch26DHdh) {
        var hs_sat26DHgx = new $hs.Thunk();
        hs_sat26DHgx.evaluateOnce = function () {
            var hs_sat26DHgw = new $hs.Thunk();
            hs_sat26DHgw.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCUChar, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_ch26DHdh);
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DHgw);
        };
        return $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26DHgx);
    };
    this.hs_castCharToCUChar.evaluate = function (hs_ch26DHdl) {
        var hs_sat26DHgy = new $hs.Thunk();
        hs_sat26DHgy.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_ord.hscall(hs_ch26DHdl);
        };
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCUChar, hs_sat26DHgy);
    };
    this.hs_castCSCharToChar.evaluate = function (hs_ch26DHdo) {
        var hs_sat26DHgA = new $hs.Thunk();
        hs_sat26DHgA.evaluateOnce = function () {
            var hs_sat26DHgz = new $hs.Thunk();
            hs_sat26DHgz.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCSChar, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_ch26DHdo);
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DHgz);
        };
        return $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26DHgA);
    };
    this.hs_castCharToCSChar.evaluate = function (hs_ch26DHds) {
        var hs_sat26DHgB = new $hs.Thunk();
        hs_sat26DHgB.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_ord.hscall(hs_ch26DHds);
        };
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSChar, hs_sat26DHgB);
    };
    hs_sat26DHgC.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
    };
    hs_nUL25tFdt.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCChar, hs_sat26DHgC);
    };
    this.hs_peekCAString.evaluate = function (hs_cp26DHdz) {
        var hs_loop26DHdK = new $hs.Func(2);
        hs_loop26DHdK.evaluate = function (hs_s26DHdJ, hs_i26DHdA) {
            var hs_sat26DHgK = new $hs.Func(1);
            hs_sat26DHgK.evaluate = function (hs_xval26DHdD) {
                var hs_val26DHdI = $hs.modules.ForeignziCziString.hs_castCCharToChar.hscall(hs_xval26DHdD);
                var hs_sat26DHgF = new $hs.Data(1);
                hs_sat26DHgF.data = [0];
                var hs_wild26DHgE = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_i26DHdA, hs_sat26DHgF);
                switch (hs_wild26DHgE.tag) {
                case 1:
                    var hs_sat26DHgH = new $hs.Thunk();
                    hs_sat26DHgH.evaluateOnce = function () {
                        var hs_sat26DHgG = new $hs.Data(1);
                        hs_sat26DHgG.data = [1];
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i26DHdA, hs_sat26DHgG);
                    };
                    var hs_sat26DHgI = new $hs.Data(2);
                    hs_sat26DHgI.data = [hs_val26DHdI, hs_s26DHdJ];
                    return hs_loop26DHdK.hscall(hs_sat26DHgI, hs_sat26DHgH);
                case 2:
                    var hs_sat26DHgJ = new $hs.Data(2);
                    hs_sat26DHgJ.data = [hs_val26DHdI, hs_s26DHdJ];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DHgJ);
                }
            };
            var hs_sat26DHgL = new $hs.Thunk();
            hs_sat26DHgL.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, hs_cp26DHdz, hs_i26DHdA);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DHgL, hs_sat26DHgK);
        };
        var hs_sat26DHgQ = new $hs.Func(1);
        hs_sat26DHgQ.evaluate = function (hs_l26DHdS) {
            var hs_sat26DHgN = new $hs.Data(1);
            hs_sat26DHgN.data = [0];
            var hs_wild26DHgM = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_l26DHdS, hs_sat26DHgN);
            switch (hs_wild26DHgM.tag) {
            case 1:
                var hs_sat26DHgP = new $hs.Thunk();
                hs_sat26DHgP.evaluateOnce = function () {
                    var hs_sat26DHgO = new $hs.Data(1);
                    hs_sat26DHgO.data = [1];
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_l26DHdS, hs_sat26DHgO);
                };
                return hs_loop26DHdK.hscall($hs.modules.GHCziTypes.hs_ZMZN, hs_sat26DHgP);
            case 2:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_ZMZN);
            }
        };
        var hs_sat26DHgR = new $hs.Thunk();
        hs_sat26DHgR.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziArray.hs_lengthArray0.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, $hs.modules.ForeignziCziTypes.hs_zdfEqCChar, hs_nUL25tFdt, hs_cp26DHdz);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DHgR, hs_sat26DHgQ);
    };
    this.hs_peekCString.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziString.hs_peekCAString.hscall(hs_eta1cW6l3);
    };
    this.hs_newCAString.evaluate = function (hs_str26DHdZ) {
        var hs_sat26DHh2 = new $hs.Func(1);
        hs_sat26DHh2.evaluate = function (hs_ptr26DHe8) {
            var hs_sat26DHgT = new $hs.Thunk();
            hs_sat26DHgT.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ptr26DHe8);
            };
            var hs_sat26DHh1 = new $hs.Thunk();
            hs_sat26DHh1.evaluateOnce = function () {
                var hs_go26DHei = new $hs.Func(2);
                hs_go26DHei.evaluate = function (hs_ds26DHe6, hs_n26DHe9) {
                    var hs_wild26DHgS = hs_ds26DHe6;
                    if (hs_ds26DHe6.notEvaluated) {
                        hs_wild26DHgS = hs_ds26DHe6.hscall();
                    }
                    switch (hs_wild26DHgS.tag) {
                    case 1:
                        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, hs_ptr26DHe8, hs_n26DHe9, hs_nUL25tFdt);
                    case 2:
                        var hs_c26DHec = hs_wild26DHgS.data[0];
                        var hs_cs26DHeg = hs_wild26DHgS.data[1];
                        var hs_sat26DHgW = new $hs.Thunk();
                        hs_sat26DHgW.evaluateOnce = function () {
                            var hs_sat26DHgV = new $hs.Thunk();
                            hs_sat26DHgV.evaluateOnce = function () {
                                var hs_sat26DHgU = new $hs.Data(1);
                                hs_sat26DHgU.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26DHe9, hs_sat26DHgU);
                            };
                            return hs_go26DHei.hscall(hs_cs26DHeg, hs_sat26DHgV);
                        };
                        var hs_sat26DHgZ = new $hs.Thunk();
                        hs_sat26DHgZ.evaluateOnce = function () {
                            var hs_sat26DHgY = new $hs.Thunk();
                            hs_sat26DHgY.evaluateOnce = function () {
                                var hs_sat26DHgX = new $hs.Thunk();
                                hs_sat26DHgX.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DHec);
                                };
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCChar, hs_sat26DHgX);
                            };
                            return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, hs_ptr26DHe8, hs_n26DHe9, hs_sat26DHgY);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DHgZ, hs_sat26DHgW);
                    }
                };
                var hs_sat26DHh0 = new $hs.Data(1);
                hs_sat26DHh0.data = [0];
                return hs_go26DHei.hscall(hs_str26DHdZ, hs_sat26DHh0);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DHh1, hs_sat26DHgT);
        };
        var hs_sat26DHh4 = new $hs.Thunk();
        hs_sat26DHh4.evaluateOnce = function () {
            var hs_sat26DHh3 = new $hs.Thunk();
            hs_sat26DHh3.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_length.hscall(hs_str26DHdZ);
            };
            return $hs.modules.ForeignziMarshalziArray.hs_mallocArray0.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, hs_sat26DHh3);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DHh4, hs_sat26DHh2);
    };
    this.hs_newCString.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziString.hs_newCAString.hscall(hs_eta1cW6l3);
    };
    this.hs_withCAString.evaluate = function (hs_str26DHer, hs_f26DHeP) {
        var hs_sat26DHhf = new $hs.Func(1);
        hs_sat26DHhf.evaluate = function (hs_ptr26DHeA) {
            var hs_sat26DHh6 = new $hs.Thunk();
            hs_sat26DHh6.evaluateOnce = function () {
                return hs_f26DHeP.hscall(hs_ptr26DHeA);
            };
            var hs_sat26DHhe = new $hs.Thunk();
            hs_sat26DHhe.evaluateOnce = function () {
                var hs_go26DHeK = new $hs.Func(2);
                hs_go26DHeK.evaluate = function (hs_ds26DHey, hs_n26DHeB) {
                    var hs_wild26DHh5 = hs_ds26DHey;
                    if (hs_ds26DHey.notEvaluated) {
                        hs_wild26DHh5 = hs_ds26DHey.hscall();
                    }
                    switch (hs_wild26DHh5.tag) {
                    case 1:
                        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, hs_ptr26DHeA, hs_n26DHeB, hs_nUL25tFdt);
                    case 2:
                        var hs_c26DHeE = hs_wild26DHh5.data[0];
                        var hs_cs26DHeI = hs_wild26DHh5.data[1];
                        var hs_sat26DHh9 = new $hs.Thunk();
                        hs_sat26DHh9.evaluateOnce = function () {
                            var hs_sat26DHh8 = new $hs.Thunk();
                            hs_sat26DHh8.evaluateOnce = function () {
                                var hs_sat26DHh7 = new $hs.Data(1);
                                hs_sat26DHh7.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26DHeB, hs_sat26DHh7);
                            };
                            return hs_go26DHeK.hscall(hs_cs26DHeI, hs_sat26DHh8);
                        };
                        var hs_sat26DHhc = new $hs.Thunk();
                        hs_sat26DHhc.evaluateOnce = function () {
                            var hs_sat26DHhb = new $hs.Thunk();
                            hs_sat26DHhb.evaluateOnce = function () {
                                var hs_sat26DHha = new $hs.Thunk();
                                hs_sat26DHha.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DHeE);
                                };
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCChar, hs_sat26DHha);
                            };
                            return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, hs_ptr26DHeA, hs_n26DHeB, hs_sat26DHhb);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DHhc, hs_sat26DHh9);
                    }
                };
                var hs_sat26DHhd = new $hs.Data(1);
                hs_sat26DHhd.data = [0];
                return hs_go26DHeK.hscall(hs_str26DHer, hs_sat26DHhd);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DHhe, hs_sat26DHh6);
        };
        var hs_sat26DHhh = new $hs.Thunk();
        hs_sat26DHhh.evaluateOnce = function () {
            var hs_sat26DHhg = new $hs.Thunk();
            hs_sat26DHhg.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_length.hscall(hs_str26DHer);
            };
            return $hs.modules.ForeignziMarshalziArray.hs_allocaArray0.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, hs_sat26DHhg);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DHhh, hs_sat26DHhf);
    };
    this.hs_withCString.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziString.hs_withCAString.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_sat26DHhi.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
    };
    hs_wNUL25tFdJ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCWchar, hs_sat26DHhi);
    };
    hs_castCWcharToChar25tFdP.evaluate = function (hs_ch26DHeU) {
        var hs_sat26DHhj = new $hs.Thunk();
        hs_sat26DHhj.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCWchar, $hs.modules.GHCziNum.hs_zdfNumInt, hs_ch26DHeU);
        };
        return $hs.modules.GHCziBase.hs_chr.hscall(hs_sat26DHhj);
    };
    this.hs_peekCWString.evaluate = function (hs_cp26DHeX) {
        var hs_sat26DHhl = new $hs.Func(1);
        hs_sat26DHhl.evaluate = function (hs_cs26DHf0) {
            var hs_sat26DHhk = new $hs.Thunk();
            hs_sat26DHhk.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_map.hscall(hs_castCWcharToChar25tFdP, hs_cs26DHf0);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DHhk);
        };
        var hs_sat26DHhm = new $hs.Thunk();
        hs_sat26DHhm.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziArray.hs_peekArray0.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCWchar, $hs.modules.ForeignziCziTypes.hs_zdfEqCWchar, hs_wNUL25tFdJ, hs_cp26DHeX);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DHhm, hs_sat26DHhl);
    };
    this.hs_peekCWStringLen.evaluate = function (hs_ds26DHf4) {
        var hs_wild26DHhn = hs_ds26DHf4;
        if (hs_ds26DHf4.notEvaluated) {
            hs_wild26DHhn = hs_ds26DHf4.hscall();
        }
        var hs_cp26DHf9 = hs_wild26DHhn.data[0];
        var hs_len26DHf8 = hs_wild26DHhn.data[1];
        var hs_sat26DHhp = new $hs.Func(1);
        hs_sat26DHhp.evaluate = function (hs_cs26DHfc) {
            var hs_sat26DHho = new $hs.Thunk();
            hs_sat26DHho.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_map.hscall(hs_castCWcharToChar25tFdP, hs_cs26DHfc);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DHho);
        };
        var hs_sat26DHhq = new $hs.Thunk();
        hs_sat26DHhq.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziArray.hs_peekArray.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCWchar, hs_len26DHf8, hs_cp26DHf9);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DHhq, hs_sat26DHhp);
    };
    hs_castCharToCWchar25tFdR.evaluate = function (hs_ch26DHfg) {
        var hs_sat26DHhr = new $hs.Thunk();
        hs_sat26DHhr.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_ord.hscall(hs_ch26DHfg);
        };
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCWchar, hs_sat26DHhr);
    };
    hs_charsToCWchars25tFdN.evaluate = function (hs_xs26DHfj) {
        return $hs.modules.GHCziBase.hs_map.hscall(hs_castCharToCWchar25tFdR, hs_xs26DHfj);
    };
    hs_sat26DHhs.evaluateOnce = function () {
        return $hs.modules.ForeignziMarshalziArray.hs_newArray0.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCWchar, hs_wNUL25tFdJ);
    };
    this.hs_newCWString.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DHhs, hs_charsToCWchars25tFdN);
    };
    this.hs_newCWStringLen.evaluate = function (hs_str26DHfn) {
        var hs_xs26DHfo = new $hs.Thunk();
        hs_xs26DHfo.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_map.hscall(hs_castCharToCWchar25tFdR, hs_str26DHfn);
        };
        var hs_sat26DHhv = new $hs.Func(1);
        hs_sat26DHhv.evaluate = function (hs_a26DHfr) {
            var hs_sat26DHht = new $hs.Thunk();
            hs_sat26DHht.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_length.hscall(hs_xs26DHfo);
            };
            var hs_sat26DHhu = new $hs.Data(1);
            hs_sat26DHhu.data = [hs_a26DHfr, hs_sat26DHht];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DHhu);
        };
        var hs_sat26DHhw = new $hs.Thunk();
        hs_sat26DHhw.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziArray.hs_newArray.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCWchar, hs_xs26DHfo);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DHhw, hs_sat26DHhv);
    };
    this.hs_withCWString.evaluateOnce = function () {
        var hs_sat26DHhx = new $hs.Thunk();
        hs_sat26DHhx.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziArray.hs_withArray0.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCWchar, hs_wNUL25tFdJ);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DHhx, hs_charsToCWchars25tFdN);
    };
    this.hs_withCWStringLen.evaluate = function (hs_str26DHfy, hs_f26DHfF) {
        var hs_sat26DHhz = new $hs.Func(2);
        hs_sat26DHhz.evaluate = function (hs_len26DHfE, hs_ptr26DHfD) {
            var hs_sat26DHhy = new $hs.Data(1);
            hs_sat26DHhy.data = [hs_ptr26DHfD, hs_len26DHfE];
            return hs_f26DHfF.hscall(hs_sat26DHhy);
        };
        var hs_sat26DHhB = new $hs.Thunk();
        hs_sat26DHhB.evaluateOnce = function () {
            var hs_sat26DHhA = new $hs.Thunk();
            hs_sat26DHhA.evaluateOnce = function () {
                return hs_charsToCWchars25tFdN.hscall(hs_str26DHfy);
            };
            return $hs.modules.ForeignziMarshalziArray.hs_withArrayLen.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCWchar, hs_sat26DHhA);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DHhB, hs_sat26DHhz);
    };
};
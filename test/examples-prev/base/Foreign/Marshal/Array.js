
$hs.modules.ForeignziMarshalziArray = new $hs.Module();
$hs.modules.ForeignziMarshalziArray.dependencies = ["GHC.Types", "GHC.Unit", "GHC.Base", "GHC.Num", "GHC.Err", "GHC.Classes", "GHC.List", "GHC.Ptr", "Foreign.Marshal.Alloc", "Foreign.Marshal.Utils", "Foreign.Storable"];
$hs.modules.ForeignziMarshalziArray.initBeforeDependencies = function () {
    this.hs_advancePtr = new $hs.Func(3);
    this.hs_lengthArray0 = new $hs.Func(4);
    this.hs_moveArray = new $hs.Func(4);
    this.hs_copyArray = new $hs.Func(4);
    this.hs_pokeArray0 = new $hs.Func(4);
    this.hs_pokeArray = new $hs.Func(3);
    this.hs_peekArray = new $hs.Func(3);
    this.hs_peekArray0 = new $hs.Func(4);
    this.hs_reallocArray = new $hs.Func(3);
    this.hs_reallocArray0 = new $hs.Func(3);
    this.hs_allocaArray = new $hs.Func(2);
    this.hs_allocaArray0 = new $hs.Func(2);
    this.hs_withArrayLen0 = new $hs.Func(4);
    this.hs_withArray0 = new $hs.Func(3);
    this.hs_withArrayLen = new $hs.Func(3);
    this.hs_withArray = new $hs.Func(2);
    this.hs_mallocArray = new $hs.Func(2);
    this.hs_mallocArray0 = new $hs.Func(2);
    this.hs_newArray0 = new $hs.Func(3);
    this.hs_newArray = new $hs.Func(2);
    this.hs_advancePtr.notEvaluated = true;
    this.hs_advancePtr.evaluate = function (hs_zddStorable26DLjK, hs_ptr26DLjI, hs_i26DLjJ) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DLjK, hs_ptr26DLjI, hs_i26DLjJ);
    };
    this.hs_lengthArray0.notEvaluated = true;
    this.hs_lengthArray0.evaluate = function (hs_zddStorable26DLjT, hs_zddEq26DLjY, hs_marker26DLk0, hs_ptr26DLjU) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DLjT, hs_zddEq26DLjY, hs_marker26DLk0, hs_ptr26DLjU);
    };
    this.hs_moveArray.notEvaluated = true;
    this.hs_moveArray.evaluate = function (hs_zddStorable26DLke, hs_dest26DLkb, hs_src26DLkc, hs_sizze26DLkd) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DLke, hs_dest26DLkb, hs_src26DLkc, hs_sizze26DLkd);
    };
    this.hs_copyArray.notEvaluated = true;
    this.hs_copyArray.evaluate = function (hs_zddStorable26DLko, hs_dest26DLkl, hs_src26DLkm, hs_sizze26DLkn) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DLko, hs_dest26DLkl, hs_src26DLkm, hs_sizze26DLkn);
    };
    this.hs_pokeArray0.notEvaluated = true;
    this.hs_pokeArray0.evaluate = function (hs_zddStorable26DLkA, hs_marker26DLkE, hs_ptr26DLkB, hs_vals026DLkO) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DLkA, hs_marker26DLkE, hs_ptr26DLkB, hs_vals026DLkO);
    };
    this.hs_pokeArray.notEvaluated = true;
    this.hs_pokeArray.evaluate = function (hs_zddStorable26DLkZ, hs_ptr26DLl0, hs_vals026DLl9) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DLkZ, hs_ptr26DLl0, hs_vals026DLl9);
    };
    this.hs_peekArray.notEvaluated = true;
    this.hs_peekArray.evaluate = function (hs_zddStorable26DLlo, hs_sizze26DLld, hs_ptr26DLlp) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DLlo, hs_sizze26DLld, hs_ptr26DLlp);
    };
    this.hs_peekArray0.notEvaluated = true;
    this.hs_peekArray0.evaluate = function (hs_zddStorable26DLlM, hs_zddEq26DLlN, hs_marker26DLlO, hs_ptr26DLlP) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DLlM, hs_zddEq26DLlN, hs_marker26DLlO, hs_ptr26DLlP);
    };
    this.hs_reallocArray.notEvaluated = true;
    this.hs_reallocArray.evaluate = function (hs_zddStorable26DLlZ, hs_ptr26DLlX, hs_sizze26DLlY) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DLlZ, hs_ptr26DLlX, hs_sizze26DLlY);
    };
    this.hs_reallocArray0.notEvaluated = true;
    this.hs_reallocArray0.evaluate = function (hs_zddStorable26DLm9, hs_ptr26DLm5, hs_sizze26DLm6) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DLm9, hs_ptr26DLm5, hs_sizze26DLm6);
    };
    this.hs_allocaArray.notEvaluated = true;
    this.hs_allocaArray.evaluate = function (hs_zddStorable26DLmf, hs_sizze26DLme) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DLmf, hs_sizze26DLme);
    };
    this.hs_allocaArray0.notEvaluated = true;
    this.hs_allocaArray0.evaluate = function (hs_zddStorable26DLml, hs_eta26DLmm) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DLml, hs_eta26DLmm);
    };
    this.hs_withArrayLen0.notEvaluated = true;
    this.hs_withArrayLen0.evaluate = function (hs_zddStorable26DLmw, hs_marker26DLmz, hs_vals26DLmu, hs_f26DLmC) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DLmw, hs_marker26DLmz, hs_vals26DLmu, hs_f26DLmC);
    };
    this.hs_withArray0.notEvaluated = true;
    this.hs_withArray0.evaluate = function (hs_zddStorable26DLmM, hs_marker26DLmN, hs_vals26DLmO) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DLmM, hs_marker26DLmN, hs_vals26DLmO);
    };
    this.hs_withArrayLen.notEvaluated = true;
    this.hs_withArrayLen.evaluate = function (hs_zddStorable26DLmW, hs_vals26DLmU, hs_f26DLn1) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DLmW, hs_vals26DLmU, hs_f26DLn1);
    };
    this.hs_withArray.notEvaluated = true;
    this.hs_withArray.evaluate = function (hs_zddStorable26DLna, hs_vals26DLnb) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DLna, hs_vals26DLnb);
    };
    this.hs_mallocArray.notEvaluated = true;
    this.hs_mallocArray.evaluate = function (hs_zddStorable26DLng, hs_sizze26DLnf) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DLng, hs_sizze26DLnf);
    };
    this.hs_mallocArray0.notEvaluated = true;
    this.hs_mallocArray0.evaluate = function (hs_zddStorable26DLno, hs_sizze26DLnl) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DLno, hs_sizze26DLnl);
    };
    this.hs_newArray0.notEvaluated = true;
    this.hs_newArray0.evaluate = function (hs_zddStorable26DLnu, hs_marker26DLnz, hs_vals26DLnv) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DLnu, hs_marker26DLnz, hs_vals26DLnv);
    };
    this.hs_newArray.notEvaluated = true;
    this.hs_newArray.evaluate = function (hs_zddStorable26DLnI, hs_vals26DLnG) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DLnI, hs_vals26DLnG);
    };
};
$hs.modules.ForeignziMarshalziArray.initAfterDependencies = function () {
    this.hs_advancePtr.notEvaluated = false;
    this.hs_lengthArray0.notEvaluated = false;
    this.hs_moveArray.notEvaluated = false;
    this.hs_copyArray.notEvaluated = false;
    this.hs_pokeArray0.notEvaluated = false;
    this.hs_pokeArray.notEvaluated = false;
    this.hs_peekArray.notEvaluated = false;
    this.hs_peekArray0.notEvaluated = false;
    this.hs_reallocArray.notEvaluated = false;
    this.hs_reallocArray0.notEvaluated = false;
    this.hs_allocaArray.notEvaluated = false;
    this.hs_allocaArray0.notEvaluated = false;
    this.hs_withArrayLen0.notEvaluated = false;
    this.hs_withArray0.notEvaluated = false;
    this.hs_withArrayLen.notEvaluated = false;
    this.hs_withArray.notEvaluated = false;
    this.hs_mallocArray.notEvaluated = false;
    this.hs_mallocArray0.notEvaluated = false;
    this.hs_newArray0.notEvaluated = false;
    this.hs_newArray.notEvaluated = false;
    this.hs_advancePtr.evaluate = function (hs_zddStorable26DLjK, hs_ptr26DLjI, hs_i26DLjJ) {
        var hs_sat26DLnS = new $hs.Thunk();
        hs_sat26DLnS.evaluateOnce = function () {
            var hs_sat26DLnR = new $hs.Thunk();
            hs_sat26DLnR.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DLjK, $hs.modules.GHCziErr.hs_undefined);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i26DLjJ, hs_sat26DLnR);
        };
        return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DLjI, hs_sat26DLnS);
    };
    this.hs_lengthArray0.evaluate = function (hs_zddStorable26DLjT, hs_zddEq26DLjY, hs_marker26DLk0, hs_ptr26DLjU) {
        var hs_loop26DLk3 = new $hs.Func(1);
        hs_loop26DLk3.evaluate = function (hs_i26DLjV) {
            var hs_sat26DLnW = new $hs.Func(1);
            hs_sat26DLnW.evaluate = function (hs_val26DLjZ) {
                var hs_wild26DLnT = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DLjY, hs_val26DLjZ, hs_marker26DLk0);
                switch (hs_wild26DLnT.tag) {
                case 1:
                    var hs_sat26DLnV = new $hs.Thunk();
                    hs_sat26DLnV.evaluateOnce = function () {
                        var hs_sat26DLnU = new $hs.Data(1);
                        hs_sat26DLnU.data = [1];
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i26DLjV, hs_sat26DLnU);
                    };
                    return hs_loop26DLk3.hscall(hs_sat26DLnV);
                case 2:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_i26DLjV);
                }
            };
            var hs_sat26DLnX = new $hs.Thunk();
            hs_sat26DLnX.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall(hs_zddStorable26DLjT, hs_ptr26DLjU, hs_i26DLjV);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLnX, hs_sat26DLnW);
        };
        var hs_sat26DLnY = new $hs.Data(1);
        hs_sat26DLnY.data = [0];
        return hs_loop26DLk3.hscall(hs_sat26DLnY);
    };
    this.hs_moveArray.evaluate = function (hs_zddStorable26DLke, hs_dest26DLkb, hs_src26DLkc, hs_sizze26DLkd) {
        var hs_sat26DLo0 = new $hs.Thunk();
        hs_sat26DLo0.evaluateOnce = function () {
            var hs_sat26DLnZ = new $hs.Thunk();
            hs_sat26DLnZ.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DLke, $hs.modules.GHCziErr.hs_undefined);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DLkd, hs_sat26DLnZ);
        };
        return $hs.modules.ForeignziMarshalziUtils.hs_moveBytes.hscall(hs_dest26DLkb, hs_src26DLkc, hs_sat26DLo0);
    };
    this.hs_copyArray.evaluate = function (hs_zddStorable26DLko, hs_dest26DLkl, hs_src26DLkm, hs_sizze26DLkn) {
        var hs_sat26DLo2 = new $hs.Thunk();
        hs_sat26DLo2.evaluateOnce = function () {
            var hs_sat26DLo1 = new $hs.Thunk();
            hs_sat26DLo1.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DLko, $hs.modules.GHCziErr.hs_undefined);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DLkn, hs_sat26DLo1);
        };
        return $hs.modules.ForeignziMarshalziUtils.hs_copyBytes.hscall(hs_dest26DLkl, hs_src26DLkm, hs_sat26DLo2);
    };
    this.hs_pokeArray0.evaluate = function (hs_zddStorable26DLkA, hs_marker26DLkE, hs_ptr26DLkB, hs_vals026DLkO) {
        var hs_go26DLkL = new $hs.Func(2);
        hs_go26DLkL.evaluate = function (hs_ds26DLky, hs_nzh26DLkC) {
            var hs_wild26DLo3 = hs_ds26DLky;
            if (hs_ds26DLky.notEvaluated) {
                hs_wild26DLo3 = hs_ds26DLky.hscall();
            }
            switch (hs_wild26DLo3.tag) {
            case 1:
                var hs_sat26DLo4 = new $hs.Data(1);
                hs_sat26DLo4.data = [hs_nzh26DLkC];
                return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall(hs_zddStorable26DLkA, hs_ptr26DLkB, hs_sat26DLo4, hs_marker26DLkE);
            case 2:
                var hs_val26DLkI = hs_wild26DLo3.data[0];
                var hs_vals26DLkK = hs_wild26DLo3.data[1];
                var hs_sat26DLo6 = new $hs.Thunk();
                hs_sat26DLo6.evaluateOnce = function () {
                    var hs_sat26DLo5 = ($hs.Int.addCarry(hs_nzh26DLkC, 1, 0))[0];
                    return hs_go26DLkL.hscall(hs_vals26DLkK, hs_sat26DLo5);
                };
                var hs_sat26DLo8 = new $hs.Thunk();
                hs_sat26DLo8.evaluateOnce = function () {
                    var hs_sat26DLo7 = new $hs.Data(1);
                    hs_sat26DLo7.data = [hs_nzh26DLkC];
                    return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall(hs_zddStorable26DLkA, hs_ptr26DLkB, hs_sat26DLo7, hs_val26DLkI);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLo8, hs_sat26DLo6);
            }
        };
        return hs_go26DLkL.hscall(hs_vals026DLkO, 0);
    };
    this.hs_pokeArray.evaluate = function (hs_zddStorable26DLkZ, hs_ptr26DLl0, hs_vals026DLl9) {
        var hs_go26DLl6 = new $hs.Func(2);
        hs_go26DLl6.evaluate = function (hs_ds26DLkV, hs_ds126DLl1) {
            var hs_wild26DLo9 = hs_ds26DLkV;
            if (hs_ds26DLkV.notEvaluated) {
                hs_wild26DLo9 = hs_ds26DLkV.hscall();
            }
            switch (hs_wild26DLo9.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            case 2:
                var hs_val26DLl3 = hs_wild26DLo9.data[0];
                var hs_vals26DLl5 = hs_wild26DLo9.data[1];
                var hs_sat26DLob = new $hs.Thunk();
                hs_sat26DLob.evaluateOnce = function () {
                    var hs_sat26DLoa = ($hs.Int.addCarry(hs_ds126DLl1, 1, 0))[0];
                    return hs_go26DLl6.hscall(hs_vals26DLl5, hs_sat26DLoa);
                };
                var hs_sat26DLod = new $hs.Thunk();
                hs_sat26DLod.evaluateOnce = function () {
                    var hs_sat26DLoc = new $hs.Data(1);
                    hs_sat26DLoc.data = [hs_ds126DLl1];
                    return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall(hs_zddStorable26DLkZ, hs_ptr26DLl0, hs_sat26DLoc, hs_val26DLl3);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLod, hs_sat26DLob);
            }
        };
        return hs_go26DLl6.hscall(hs_vals026DLl9, 0);
    };
    this.hs_peekArray.evaluate = function (hs_zddStorable26DLlo, hs_sizze26DLld, hs_ptr26DLlp) {
        var hs_sat26DLog = new $hs.Data(1);
        hs_sat26DLog.data = [0];
        var hs_wild26DLof = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sizze26DLld, hs_sat26DLog);
        switch (hs_wild26DLof.tag) {
        case 1:
            var hs_f26DLlu = new $hs.Func(2);
            hs_f26DLlu.evaluate = function (hs_ds26DLlj, hs_acc26DLlx) {
                var hs_wild126DLlq = hs_ds26DLlj;
                if (hs_ds26DLlj.notEvaluated) {
                    hs_wild126DLlq = hs_ds26DLlj.hscall();
                }
                var hs_ds126DLlm = hs_wild126DLlq.data[0];
                var hs_ds226DLoe = hs_ds126DLlm;
                if (hs_ds126DLlm.notEvaluated) {
                    hs_ds226DLoe = hs_ds126DLlm.hscall();
                }
                switch (hs_ds226DLoe) {
                case 0:
                    var hs_sat26DLon = new $hs.Func(1);
                    hs_sat26DLon.evaluate = function (hs_e26DLlD) {
                        var hs_sat26DLom = new $hs.Data(2);
                        hs_sat26DLom.data = [hs_e26DLlD, hs_acc26DLlx];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLom);
                    };
                    var hs_sat26DLop = new $hs.Thunk();
                    hs_sat26DLop.evaluateOnce = function () {
                        var hs_sat26DLoo = new $hs.Data(1);
                        hs_sat26DLoo.data = [0];
                        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall(hs_zddStorable26DLlo, hs_ptr26DLlp, hs_sat26DLoo);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLop, hs_sat26DLon);
                default:
                    var hs_sat26DLok = new $hs.Func(1);
                    hs_sat26DLok.evaluate = function (hs_e26DLlw) {
                        var hs_sat26DLoh = new $hs.Data(2);
                        hs_sat26DLoh.data = [hs_e26DLlw, hs_acc26DLlx];
                        var hs_sat26DLoj = new $hs.Thunk();
                        hs_sat26DLoj.evaluateOnce = function () {
                            var hs_sat26DLoi = new $hs.Data(1);
                            hs_sat26DLoi.data = [1];
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild126DLlq, hs_sat26DLoi);
                        };
                        return hs_f26DLlu.hscall(hs_sat26DLoj, hs_sat26DLoh);
                    };
                    var hs_sat26DLol = new $hs.Thunk();
                    hs_sat26DLol.evaluateOnce = function () {
                        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall(hs_zddStorable26DLlo, hs_ptr26DLlp, hs_wild126DLlq);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLol, hs_sat26DLok);
                }
            };
            var hs_sat26DLor = new $hs.Thunk();
            hs_sat26DLor.evaluateOnce = function () {
                var hs_sat26DLoq = new $hs.Data(1);
                hs_sat26DLoq.data = [1];
                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DLld, hs_sat26DLoq);
            };
            return hs_f26DLlu.hscall(hs_sat26DLor, $hs.modules.GHCziTypes.hs_ZMZN);
        case 2:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_ZMZN);
        }
    };
    this.hs_peekArray0.evaluate = function (hs_zddStorable26DLlM, hs_zddEq26DLlN, hs_marker26DLlO, hs_ptr26DLlP) {
        var hs_sat26DLos = new $hs.Func(1);
        hs_sat26DLos.evaluate = function (hs_sizze26DLlS) {
            return $hs.modules.ForeignziMarshalziArray.hs_peekArray.hscall(hs_zddStorable26DLlM, hs_sizze26DLlS, hs_ptr26DLlP);
        };
        var hs_sat26DLot = new $hs.Thunk();
        hs_sat26DLot.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziArray.hs_lengthArray0.hscall(hs_zddStorable26DLlM, hs_zddEq26DLlN, hs_marker26DLlO, hs_ptr26DLlP);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLot, hs_sat26DLos);
    };
    this.hs_reallocArray.evaluate = function (hs_zddStorable26DLlZ, hs_ptr26DLlX, hs_sizze26DLlY) {
        var hs_sat26DLov = new $hs.Thunk();
        hs_sat26DLov.evaluateOnce = function () {
            var hs_sat26DLou = new $hs.Thunk();
            hs_sat26DLou.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DLlZ, $hs.modules.GHCziErr.hs_undefined);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DLlY, hs_sat26DLou);
        };
        return $hs.modules.ForeignziMarshalziAlloc.hs_reallocBytes.hscall(hs_ptr26DLlX, hs_sat26DLov);
    };
    this.hs_reallocArray0.evaluate = function (hs_zddStorable26DLm9, hs_ptr26DLm5, hs_sizze26DLm6) {
        var hs_sat26DLoz = new $hs.Thunk();
        hs_sat26DLoz.evaluateOnce = function () {
            var hs_sat26DLow = new $hs.Thunk();
            hs_sat26DLow.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DLm9, $hs.modules.GHCziErr.hs_undefined);
            };
            var hs_sat26DLoy = new $hs.Thunk();
            hs_sat26DLoy.evaluateOnce = function () {
                var hs_sat26DLox = new $hs.Data(1);
                hs_sat26DLox.data = [1];
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DLm6, hs_sat26DLox);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DLoy, hs_sat26DLow);
        };
        return $hs.modules.ForeignziMarshalziAlloc.hs_reallocBytes.hscall(hs_ptr26DLm5, hs_sat26DLoz);
    };
    this.hs_allocaArray.evaluate = function (hs_zddStorable26DLmf, hs_sizze26DLme) {
        var hs_sat26DLoA = new $hs.Thunk();
        hs_sat26DLoA.evaluateOnce = function () {
            return $hs.modules.ForeignziStorable.hs_alignment.hscall(hs_zddStorable26DLmf, $hs.modules.GHCziErr.hs_undefined);
        };
        var hs_sat26DLoC = new $hs.Thunk();
        hs_sat26DLoC.evaluateOnce = function () {
            var hs_sat26DLoB = new $hs.Thunk();
            hs_sat26DLoB.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DLmf, $hs.modules.GHCziErr.hs_undefined);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DLme, hs_sat26DLoB);
        };
        return $hs.modules.ForeignziMarshalziAlloc.hs_allocaBytesAligned.hscall(hs_sat26DLoC, hs_sat26DLoA);
    };
    this.hs_allocaArray0.evaluate = function (hs_zddStorable26DLml, hs_eta26DLmm) {
        var hs_sat26DLoE = new $hs.Thunk();
        hs_sat26DLoE.evaluateOnce = function () {
            var hs_sat26DLoD = new $hs.Data(1);
            hs_sat26DLoD.data = [1];
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_eta26DLmm, hs_sat26DLoD);
        };
        return $hs.modules.ForeignziMarshalziArray.hs_allocaArray.hscall(hs_zddStorable26DLml, hs_sat26DLoE);
    };
    this.hs_withArrayLen0.evaluate = function (hs_zddStorable26DLmw, hs_marker26DLmz, hs_vals26DLmu, hs_f26DLmC) {
        var hs_len26DLmv = new $hs.Thunk();
        hs_len26DLmv.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_length.hscall(hs_vals26DLmu);
        };
        var hs_sat26DLoJ = new $hs.Func(1);
        hs_sat26DLoJ.evaluate = function (hs_ptr26DLmA) {
            var hs_sat26DLoH = new $hs.Thunk();
            hs_sat26DLoH.evaluateOnce = function () {
                var hs_sat26DLoF = new $hs.Func(1);
                hs_sat26DLoF.evaluate = function (hs_res26DLmF) {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DLmF);
                };
                var hs_sat26DLoG = new $hs.Thunk();
                hs_sat26DLoG.evaluateOnce = function () {
                    return hs_f26DLmC.hscall(hs_len26DLmv, hs_ptr26DLmA);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLoG, hs_sat26DLoF);
            };
            var hs_sat26DLoI = new $hs.Thunk();
            hs_sat26DLoI.evaluateOnce = function () {
                return $hs.modules.ForeignziMarshalziArray.hs_pokeArray0.hscall(hs_zddStorable26DLmw, hs_marker26DLmz, hs_ptr26DLmA, hs_vals26DLmu);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLoI, hs_sat26DLoH);
        };
        var hs_sat26DLoK = new $hs.Thunk();
        hs_sat26DLoK.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziArray.hs_allocaArray0.hscall(hs_zddStorable26DLmw, hs_len26DLmv);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DLoK, hs_sat26DLoJ);
    };
    this.hs_withArray0.evaluate = function (hs_zddStorable26DLmM, hs_marker26DLmN, hs_vals26DLmO) {
        var hs_sat26DLoL = new $hs.Func(1);
        hs_sat26DLoL.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.ForeignziMarshalziArray.hs_withArrayLen0.hscall(hs_zddStorable26DLmM, hs_marker26DLmN, hs_vals26DLmO, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DLoL, $hs.modules.GHCziBase.hs_const);
    };
    this.hs_withArrayLen.evaluate = function (hs_zddStorable26DLmW, hs_vals26DLmU, hs_f26DLn1) {
        var hs_len26DLmV = new $hs.Thunk();
        hs_len26DLmV.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_length.hscall(hs_vals26DLmU);
        };
        var hs_sat26DLoQ = new $hs.Func(1);
        hs_sat26DLoQ.evaluate = function (hs_ptr26DLmZ) {
            var hs_sat26DLoO = new $hs.Thunk();
            hs_sat26DLoO.evaluateOnce = function () {
                var hs_sat26DLoM = new $hs.Func(1);
                hs_sat26DLoM.evaluate = function (hs_res26DLn4) {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DLn4);
                };
                var hs_sat26DLoN = new $hs.Thunk();
                hs_sat26DLoN.evaluateOnce = function () {
                    return hs_f26DLn1.hscall(hs_len26DLmV, hs_ptr26DLmZ);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLoN, hs_sat26DLoM);
            };
            var hs_sat26DLoP = new $hs.Thunk();
            hs_sat26DLoP.evaluateOnce = function () {
                return $hs.modules.ForeignziMarshalziArray.hs_pokeArray.hscall(hs_zddStorable26DLmW, hs_ptr26DLmZ, hs_vals26DLmU);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLoP, hs_sat26DLoO);
        };
        var hs_sat26DLoR = new $hs.Thunk();
        hs_sat26DLoR.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziArray.hs_allocaArray.hscall(hs_zddStorable26DLmW, hs_len26DLmV);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DLoR, hs_sat26DLoQ);
    };
    this.hs_withArray.evaluate = function (hs_zddStorable26DLna, hs_vals26DLnb) {
        var hs_sat26DLoS = new $hs.Func(1);
        hs_sat26DLoS.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.ForeignziMarshalziArray.hs_withArrayLen.hscall(hs_zddStorable26DLna, hs_vals26DLnb, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DLoS, $hs.modules.GHCziBase.hs_const);
    };
    this.hs_mallocArray.evaluate = function (hs_zddStorable26DLng, hs_sizze26DLnf) {
        var hs_sat26DLoU = new $hs.Thunk();
        hs_sat26DLoU.evaluateOnce = function () {
            var hs_sat26DLoT = new $hs.Thunk();
            hs_sat26DLoT.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DLng, $hs.modules.GHCziErr.hs_undefined);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DLnf, hs_sat26DLoT);
        };
        return $hs.modules.ForeignziMarshalziAlloc.hs_mallocBytes.hscall(hs_sat26DLoU);
    };
    this.hs_mallocArray0.evaluate = function (hs_zddStorable26DLno, hs_sizze26DLnl) {
        var hs_sat26DLoY = new $hs.Thunk();
        hs_sat26DLoY.evaluateOnce = function () {
            var hs_sat26DLoV = new $hs.Thunk();
            hs_sat26DLoV.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DLno, $hs.modules.GHCziErr.hs_undefined);
            };
            var hs_sat26DLoX = new $hs.Thunk();
            hs_sat26DLoX.evaluateOnce = function () {
                var hs_sat26DLoW = new $hs.Data(1);
                hs_sat26DLoW.data = [1];
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DLnl, hs_sat26DLoW);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DLoX, hs_sat26DLoV);
        };
        return $hs.modules.ForeignziMarshalziAlloc.hs_mallocBytes.hscall(hs_sat26DLoY);
    };
    this.hs_newArray0.evaluate = function (hs_zddStorable26DLnu, hs_marker26DLnz, hs_vals26DLnv) {
        var hs_sat26DLp1 = new $hs.Func(1);
        hs_sat26DLp1.evaluate = function (hs_ptr26DLnA) {
            var hs_sat26DLoZ = new $hs.Thunk();
            hs_sat26DLoZ.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ptr26DLnA);
            };
            var hs_sat26DLp0 = new $hs.Thunk();
            hs_sat26DLp0.evaluateOnce = function () {
                return $hs.modules.ForeignziMarshalziArray.hs_pokeArray0.hscall(hs_zddStorable26DLnu, hs_marker26DLnz, hs_ptr26DLnA, hs_vals26DLnv);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLp0, hs_sat26DLoZ);
        };
        var hs_sat26DLp3 = new $hs.Thunk();
        hs_sat26DLp3.evaluateOnce = function () {
            var hs_sat26DLp2 = new $hs.Thunk();
            hs_sat26DLp2.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_length.hscall(hs_vals26DLnv);
            };
            return $hs.modules.ForeignziMarshalziArray.hs_mallocArray0.hscall(hs_zddStorable26DLnu, hs_sat26DLp2);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLp3, hs_sat26DLp1);
    };
    this.hs_newArray.evaluate = function (hs_zddStorable26DLnI, hs_vals26DLnG) {
        var hs_sat26DLp6 = new $hs.Func(1);
        hs_sat26DLp6.evaluate = function (hs_ptr26DLnN) {
            var hs_sat26DLp4 = new $hs.Thunk();
            hs_sat26DLp4.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ptr26DLnN);
            };
            var hs_sat26DLp5 = new $hs.Thunk();
            hs_sat26DLp5.evaluateOnce = function () {
                return $hs.modules.ForeignziMarshalziArray.hs_pokeArray.hscall(hs_zddStorable26DLnI, hs_ptr26DLnN, hs_vals26DLnG);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLp5, hs_sat26DLp4);
        };
        var hs_sat26DLpa = new $hs.Thunk();
        hs_sat26DLpa.evaluateOnce = function () {
            var hs_sat26DLp9 = new $hs.Thunk();
            hs_sat26DLp9.evaluateOnce = function () {
                var hs_sat26DLp7 = new $hs.Thunk();
                hs_sat26DLp7.evaluateOnce = function () {
                    return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DLnI, $hs.modules.GHCziErr.hs_undefined);
                };
                var hs_sat26DLp8 = new $hs.Thunk();
                hs_sat26DLp8.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_length.hscall(hs_vals26DLnG);
                };
                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DLp8, hs_sat26DLp7);
            };
            return $hs.modules.ForeignziMarshalziAlloc.hs_mallocBytes.hscall(hs_sat26DLp9);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DLpa, hs_sat26DLp6);
    };
};
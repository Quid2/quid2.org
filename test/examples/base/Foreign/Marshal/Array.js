
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
    this.hs_advancePtr.evaluate = function (hs_zddStorable26DmCk, hs_ptr26DmCi, hs_i26DmCj) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DmCk, hs_ptr26DmCi, hs_i26DmCj);
    };
    this.hs_lengthArray0.notEvaluated = true;
    this.hs_lengthArray0.evaluate = function (hs_zddStorable26DmCt, hs_zddEq26DmCy, hs_marker26DmCA, hs_ptr26DmCu) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DmCt, hs_zddEq26DmCy, hs_marker26DmCA, hs_ptr26DmCu);
    };
    this.hs_moveArray.notEvaluated = true;
    this.hs_moveArray.evaluate = function (hs_zddStorable26DmCO, hs_dest26DmCL, hs_src26DmCM, hs_sizze26DmCN) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DmCO, hs_dest26DmCL, hs_src26DmCM, hs_sizze26DmCN);
    };
    this.hs_copyArray.notEvaluated = true;
    this.hs_copyArray.evaluate = function (hs_zddStorable26DmCY, hs_dest26DmCV, hs_src26DmCW, hs_sizze26DmCX) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DmCY, hs_dest26DmCV, hs_src26DmCW, hs_sizze26DmCX);
    };
    this.hs_pokeArray0.notEvaluated = true;
    this.hs_pokeArray0.evaluate = function (hs_zddStorable26DmDa, hs_marker26DmDe, hs_ptr26DmDb, hs_vals026DmDo) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DmDa, hs_marker26DmDe, hs_ptr26DmDb, hs_vals026DmDo);
    };
    this.hs_pokeArray.notEvaluated = true;
    this.hs_pokeArray.evaluate = function (hs_zddStorable26DmDz, hs_ptr26DmDA, hs_vals026DmDJ) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DmDz, hs_ptr26DmDA, hs_vals026DmDJ);
    };
    this.hs_peekArray.notEvaluated = true;
    this.hs_peekArray.evaluate = function (hs_zddStorable26DmDY, hs_sizze26DmDN, hs_ptr26DmDZ) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DmDY, hs_sizze26DmDN, hs_ptr26DmDZ);
    };
    this.hs_peekArray0.notEvaluated = true;
    this.hs_peekArray0.evaluate = function (hs_zddStorable26DmEm, hs_zddEq26DmEn, hs_marker26DmEo, hs_ptr26DmEp) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DmEm, hs_zddEq26DmEn, hs_marker26DmEo, hs_ptr26DmEp);
    };
    this.hs_reallocArray.notEvaluated = true;
    this.hs_reallocArray.evaluate = function (hs_zddStorable26DmEz, hs_ptr26DmEx, hs_sizze26DmEy) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DmEz, hs_ptr26DmEx, hs_sizze26DmEy);
    };
    this.hs_reallocArray0.notEvaluated = true;
    this.hs_reallocArray0.evaluate = function (hs_zddStorable26DmEJ, hs_ptr26DmEF, hs_sizze26DmEG) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DmEJ, hs_ptr26DmEF, hs_sizze26DmEG);
    };
    this.hs_allocaArray.notEvaluated = true;
    this.hs_allocaArray.evaluate = function (hs_zddStorable26DmEP, hs_sizze26DmEO) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DmEP, hs_sizze26DmEO);
    };
    this.hs_allocaArray0.notEvaluated = true;
    this.hs_allocaArray0.evaluate = function (hs_zddStorable26DmEV, hs_eta26DmEW) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DmEV, hs_eta26DmEW);
    };
    this.hs_withArrayLen0.notEvaluated = true;
    this.hs_withArrayLen0.evaluate = function (hs_zddStorable26DmF6, hs_marker26DmF9, hs_vals26DmF4, hs_f26DmFc) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DmF6, hs_marker26DmF9, hs_vals26DmF4, hs_f26DmFc);
    };
    this.hs_withArray0.notEvaluated = true;
    this.hs_withArray0.evaluate = function (hs_zddStorable26DmFm, hs_marker26DmFn, hs_vals26DmFo) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DmFm, hs_marker26DmFn, hs_vals26DmFo);
    };
    this.hs_withArrayLen.notEvaluated = true;
    this.hs_withArrayLen.evaluate = function (hs_zddStorable26DmFw, hs_vals26DmFu, hs_f26DmFB) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DmFw, hs_vals26DmFu, hs_f26DmFB);
    };
    this.hs_withArray.notEvaluated = true;
    this.hs_withArray.evaluate = function (hs_zddStorable26DmFK, hs_vals26DmFL) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DmFK, hs_vals26DmFL);
    };
    this.hs_mallocArray.notEvaluated = true;
    this.hs_mallocArray.evaluate = function (hs_zddStorable26DmFQ, hs_sizze26DmFP) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DmFQ, hs_sizze26DmFP);
    };
    this.hs_mallocArray0.notEvaluated = true;
    this.hs_mallocArray0.evaluate = function (hs_zddStorable26DmFY, hs_sizze26DmFV) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DmFY, hs_sizze26DmFV);
    };
    this.hs_newArray0.notEvaluated = true;
    this.hs_newArray0.evaluate = function (hs_zddStorable26DmG4, hs_marker26DmG9, hs_vals26DmG5) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DmG4, hs_marker26DmG9, hs_vals26DmG5);
    };
    this.hs_newArray.notEvaluated = true;
    this.hs_newArray.evaluate = function (hs_zddStorable26DmGi, hs_vals26DmGg) {
        $hs.modules.ForeignziMarshalziArray.loadDependencies();
        return this.evaluate(hs_zddStorable26DmGi, hs_vals26DmGg);
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
    this.hs_advancePtr.evaluate = function (hs_zddStorable26DmCk, hs_ptr26DmCi, hs_i26DmCj) {
        var hs_sat26DmGr = new $hs.Thunk();
        hs_sat26DmGr.evaluateOnce = function () {
            var hs_sat26DmGs = new $hs.Thunk();
            hs_sat26DmGs.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DmCk, $hs.modules.GHCziErr.hs_undefined);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i26DmCj, hs_sat26DmGs);
        };
        return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DmCi, hs_sat26DmGr);
    };
    this.hs_lengthArray0.evaluate = function (hs_zddStorable26DmCt, hs_zddEq26DmCy, hs_marker26DmCA, hs_ptr26DmCu) {
        var hs_loop26DmCD = new $hs.Func(1);
        hs_loop26DmCD.evaluate = function (hs_i26DmCv) {
            var hs_sat26DmGv = new $hs.Func(1);
            hs_sat26DmGv.evaluate = function (hs_val26DmCz) {
                var hs_wild26DmGw = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DmCy, hs_val26DmCz, hs_marker26DmCA);
                switch (hs_wild26DmGw.tag) {
                case 1:
                    var hs_sat26DmGx = new $hs.Thunk();
                    hs_sat26DmGx.evaluateOnce = function () {
                        var hs_sat26DmGy = new $hs.Data(1);
                        hs_sat26DmGy.data = [1];
                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i26DmCv, hs_sat26DmGy);
                    };
                    return hs_loop26DmCD.hscall(hs_sat26DmGx);
                case 2:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_i26DmCv);
                }
            };
            var hs_sat26DmGu = new $hs.Thunk();
            hs_sat26DmGu.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall(hs_zddStorable26DmCt, hs_ptr26DmCu, hs_i26DmCv);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmGu, hs_sat26DmGv);
        };
        var hs_sat26DmGt = new $hs.Data(1);
        hs_sat26DmGt.data = [0];
        return hs_loop26DmCD.hscall(hs_sat26DmGt);
    };
    this.hs_moveArray.evaluate = function (hs_zddStorable26DmCO, hs_dest26DmCL, hs_src26DmCM, hs_sizze26DmCN) {
        var hs_sat26DmGz = new $hs.Thunk();
        hs_sat26DmGz.evaluateOnce = function () {
            var hs_sat26DmGA = new $hs.Thunk();
            hs_sat26DmGA.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DmCO, $hs.modules.GHCziErr.hs_undefined);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DmCN, hs_sat26DmGA);
        };
        return $hs.modules.ForeignziMarshalziUtils.hs_moveBytes.hscall(hs_dest26DmCL, hs_src26DmCM, hs_sat26DmGz);
    };
    this.hs_copyArray.evaluate = function (hs_zddStorable26DmCY, hs_dest26DmCV, hs_src26DmCW, hs_sizze26DmCX) {
        var hs_sat26DmGB = new $hs.Thunk();
        hs_sat26DmGB.evaluateOnce = function () {
            var hs_sat26DmGC = new $hs.Thunk();
            hs_sat26DmGC.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DmCY, $hs.modules.GHCziErr.hs_undefined);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DmCX, hs_sat26DmGC);
        };
        return $hs.modules.ForeignziMarshalziUtils.hs_copyBytes.hscall(hs_dest26DmCV, hs_src26DmCW, hs_sat26DmGB);
    };
    this.hs_pokeArray0.evaluate = function (hs_zddStorable26DmDa, hs_marker26DmDe, hs_ptr26DmDb, hs_vals026DmDo) {
        var hs_go26DmDl = new $hs.Func(2);
        hs_go26DmDl.evaluate = function (hs_ds26DmD8, hs_nzh26DmDc) {
            var hs_wild26DmGE = hs_ds26DmD8;
            if (hs_ds26DmD8.notEvaluated) {
                hs_wild26DmGE = hs_ds26DmD8.hscall();
            }
            switch (hs_wild26DmGE.tag) {
            case 1:
                var hs_sat26DmGI = new $hs.Data(1);
                hs_sat26DmGI.data = [hs_nzh26DmDc];
                return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall(hs_zddStorable26DmDa, hs_ptr26DmDb, hs_sat26DmGI, hs_marker26DmDe);
            case 2:
                var hs_val26DmDi = hs_wild26DmGE.data[0];
                var hs_vals26DmDk = hs_wild26DmGE.data[1];
                var hs_sat26DmGF = new $hs.Thunk();
                hs_sat26DmGF.evaluateOnce = function () {
                    var hs_sat26DmGH = ($hs.Int.addCarry(hs_nzh26DmDc, 1, 0))[0];
                    return hs_go26DmDl.hscall(hs_vals26DmDk, hs_sat26DmGH);
                };
                var hs_sat26DmGD = new $hs.Thunk();
                hs_sat26DmGD.evaluateOnce = function () {
                    var hs_sat26DmGG = new $hs.Data(1);
                    hs_sat26DmGG.data = [hs_nzh26DmDc];
                    return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall(hs_zddStorable26DmDa, hs_ptr26DmDb, hs_sat26DmGG, hs_val26DmDi);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmGD, hs_sat26DmGF);
            }
        };
        return hs_go26DmDl.hscall(hs_vals026DmDo, 0);
    };
    this.hs_pokeArray.evaluate = function (hs_zddStorable26DmDz, hs_ptr26DmDA, hs_vals026DmDJ) {
        var hs_go26DmDG = new $hs.Func(2);
        hs_go26DmDG.evaluate = function (hs_ds26DmDv, hs_ds126DmDB) {
            var hs_wild26DmGK = hs_ds26DmDv;
            if (hs_ds26DmDv.notEvaluated) {
                hs_wild26DmGK = hs_ds26DmDv.hscall();
            }
            switch (hs_wild26DmGK.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            case 2:
                var hs_val26DmDD = hs_wild26DmGK.data[0];
                var hs_vals26DmDF = hs_wild26DmGK.data[1];
                var hs_sat26DmGL = new $hs.Thunk();
                hs_sat26DmGL.evaluateOnce = function () {
                    var hs_sat26DmGN = ($hs.Int.addCarry(hs_ds126DmDB, 1, 0))[0];
                    return hs_go26DmDG.hscall(hs_vals26DmDF, hs_sat26DmGN);
                };
                var hs_sat26DmGJ = new $hs.Thunk();
                hs_sat26DmGJ.evaluateOnce = function () {
                    var hs_sat26DmGM = new $hs.Data(1);
                    hs_sat26DmGM.data = [hs_ds126DmDB];
                    return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall(hs_zddStorable26DmDz, hs_ptr26DmDA, hs_sat26DmGM, hs_val26DmDD);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmGJ, hs_sat26DmGL);
            }
        };
        return hs_go26DmDG.hscall(hs_vals026DmDJ, 0);
    };
    this.hs_peekArray.evaluate = function (hs_zddStorable26DmDY, hs_sizze26DmDN, hs_ptr26DmDZ) {
        var hs_sat26DmGO = new $hs.Data(1);
        hs_sat26DmGO.data = [0];
        var hs_wild26DmGP = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sizze26DmDN, hs_sat26DmGO);
        switch (hs_wild26DmGP.tag) {
        case 1:
            var hs_f26DmE4 = new $hs.Func(2);
            hs_f26DmE4.evaluate = function (hs_ds26DmDT, hs_acc26DmE7) {
                var hs_wild126DmE0 = hs_ds26DmDT;
                if (hs_ds26DmDT.notEvaluated) {
                    hs_wild126DmE0 = hs_ds26DmDT.hscall();
                }
                var hs_ds126DmDW = hs_wild126DmE0.data[0];
                var hs_ds226DmGS = hs_ds126DmDW;
                if (hs_ds126DmDW.notEvaluated) {
                    hs_ds226DmGS = hs_ds126DmDW.hscall();
                }
                switch (hs_ds226DmGS) {
                case 0:
                    var hs_sat26DmGT = new $hs.Func(1);
                    hs_sat26DmGT.evaluate = function (hs_e26DmEd) {
                        var hs_sat26DmGV = new $hs.Data(2);
                        hs_sat26DmGV.data = [hs_e26DmEd, hs_acc26DmE7];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmGV);
                    };
                    var hs_sat26DmGR = new $hs.Thunk();
                    hs_sat26DmGR.evaluateOnce = function () {
                        var hs_sat26DmGU = new $hs.Data(1);
                        hs_sat26DmGU.data = [0];
                        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall(hs_zddStorable26DmDY, hs_ptr26DmDZ, hs_sat26DmGU);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmGR, hs_sat26DmGT);
                default:
                    var hs_sat26DmGX = new $hs.Func(1);
                    hs_sat26DmGX.evaluate = function (hs_e26DmE6) {
                        var hs_sat26DmGZ = new $hs.Data(2);
                        hs_sat26DmGZ.data = [hs_e26DmE6, hs_acc26DmE7];
                        var hs_sat26DmGY = new $hs.Thunk();
                        hs_sat26DmGY.evaluateOnce = function () {
                            var hs_sat26DmH0 = new $hs.Data(1);
                            hs_sat26DmH0.data = [1];
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild126DmE0, hs_sat26DmH0);
                        };
                        return hs_f26DmE4.hscall(hs_sat26DmGY, hs_sat26DmGZ);
                    };
                    var hs_sat26DmGW = new $hs.Thunk();
                    hs_sat26DmGW.evaluateOnce = function () {
                        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall(hs_zddStorable26DmDY, hs_ptr26DmDZ, hs_wild126DmE0);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmGW, hs_sat26DmGX);
                }
            };
            var hs_sat26DmGQ = new $hs.Thunk();
            hs_sat26DmGQ.evaluateOnce = function () {
                var hs_sat26DmH1 = new $hs.Data(1);
                hs_sat26DmH1.data = [1];
                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DmDN, hs_sat26DmH1);
            };
            return hs_f26DmE4.hscall(hs_sat26DmGQ, $hs.modules.GHCziTypes.hs_ZMZN);
        case 2:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_ZMZN);
        }
    };
    this.hs_peekArray0.evaluate = function (hs_zddStorable26DmEm, hs_zddEq26DmEn, hs_marker26DmEo, hs_ptr26DmEp) {
        var hs_sat26DmH3 = new $hs.Func(1);
        hs_sat26DmH3.evaluate = function (hs_sizze26DmEs) {
            return $hs.modules.ForeignziMarshalziArray.hs_peekArray.hscall(hs_zddStorable26DmEm, hs_sizze26DmEs, hs_ptr26DmEp);
        };
        var hs_sat26DmH2 = new $hs.Thunk();
        hs_sat26DmH2.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziArray.hs_lengthArray0.hscall(hs_zddStorable26DmEm, hs_zddEq26DmEn, hs_marker26DmEo, hs_ptr26DmEp);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmH2, hs_sat26DmH3);
    };
    this.hs_reallocArray.evaluate = function (hs_zddStorable26DmEz, hs_ptr26DmEx, hs_sizze26DmEy) {
        var hs_sat26DmH4 = new $hs.Thunk();
        hs_sat26DmH4.evaluateOnce = function () {
            var hs_sat26DmH5 = new $hs.Thunk();
            hs_sat26DmH5.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DmEz, $hs.modules.GHCziErr.hs_undefined);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DmEy, hs_sat26DmH5);
        };
        return $hs.modules.ForeignziMarshalziAlloc.hs_reallocBytes.hscall(hs_ptr26DmEx, hs_sat26DmH4);
    };
    this.hs_reallocArray0.evaluate = function (hs_zddStorable26DmEJ, hs_ptr26DmEF, hs_sizze26DmEG) {
        var hs_sat26DmH6 = new $hs.Thunk();
        hs_sat26DmH6.evaluateOnce = function () {
            var hs_sat26DmH8 = new $hs.Thunk();
            hs_sat26DmH8.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DmEJ, $hs.modules.GHCziErr.hs_undefined);
            };
            var hs_sat26DmH7 = new $hs.Thunk();
            hs_sat26DmH7.evaluateOnce = function () {
                var hs_sat26DmH9 = new $hs.Data(1);
                hs_sat26DmH9.data = [1];
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DmEG, hs_sat26DmH9);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DmH7, hs_sat26DmH8);
        };
        return $hs.modules.ForeignziMarshalziAlloc.hs_reallocBytes.hscall(hs_ptr26DmEF, hs_sat26DmH6);
    };
    this.hs_allocaArray.evaluate = function (hs_zddStorable26DmEP, hs_sizze26DmEO) {
        var hs_sat26DmHb = new $hs.Thunk();
        hs_sat26DmHb.evaluateOnce = function () {
            return $hs.modules.ForeignziStorable.hs_alignment.hscall(hs_zddStorable26DmEP, $hs.modules.GHCziErr.hs_undefined);
        };
        var hs_sat26DmHa = new $hs.Thunk();
        hs_sat26DmHa.evaluateOnce = function () {
            var hs_sat26DmHc = new $hs.Thunk();
            hs_sat26DmHc.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DmEP, $hs.modules.GHCziErr.hs_undefined);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DmEO, hs_sat26DmHc);
        };
        return $hs.modules.ForeignziMarshalziAlloc.hs_allocaBytesAligned.hscall(hs_sat26DmHa, hs_sat26DmHb);
    };
    this.hs_allocaArray0.evaluate = function (hs_zddStorable26DmEV, hs_eta26DmEW) {
        var hs_sat26DmHd = new $hs.Thunk();
        hs_sat26DmHd.evaluateOnce = function () {
            var hs_sat26DmHe = new $hs.Data(1);
            hs_sat26DmHe.data = [1];
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_eta26DmEW, hs_sat26DmHe);
        };
        return $hs.modules.ForeignziMarshalziArray.hs_allocaArray.hscall(hs_zddStorable26DmEV, hs_sat26DmHd);
    };
    this.hs_withArrayLen0.evaluate = function (hs_zddStorable26DmF6, hs_marker26DmF9, hs_vals26DmF4, hs_f26DmFc) {
        var hs_len26DmF5 = new $hs.Thunk();
        hs_len26DmF5.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_length.hscall(hs_vals26DmF4);
        };
        var hs_sat26DmHg = new $hs.Func(1);
        hs_sat26DmHg.evaluate = function (hs_ptr26DmFa) {
            var hs_sat26DmHi = new $hs.Thunk();
            hs_sat26DmHi.evaluateOnce = function () {
                var hs_sat26DmHk = new $hs.Func(1);
                hs_sat26DmHk.evaluate = function (hs_res26DmFf) {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DmFf);
                };
                var hs_sat26DmHj = new $hs.Thunk();
                hs_sat26DmHj.evaluateOnce = function () {
                    return hs_f26DmFc.hscall(hs_len26DmF5, hs_ptr26DmFa);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmHj, hs_sat26DmHk);
            };
            var hs_sat26DmHh = new $hs.Thunk();
            hs_sat26DmHh.evaluateOnce = function () {
                return $hs.modules.ForeignziMarshalziArray.hs_pokeArray0.hscall(hs_zddStorable26DmF6, hs_marker26DmF9, hs_ptr26DmFa, hs_vals26DmF4);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmHh, hs_sat26DmHi);
        };
        var hs_sat26DmHf = new $hs.Thunk();
        hs_sat26DmHf.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziArray.hs_allocaArray0.hscall(hs_zddStorable26DmF6, hs_len26DmF5);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DmHf, hs_sat26DmHg);
    };
    this.hs_withArray0.evaluate = function (hs_zddStorable26DmFm, hs_marker26DmFn, hs_vals26DmFo) {
        var hs_sat26DmHl = new $hs.Func(1);
        hs_sat26DmHl.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.ForeignziMarshalziArray.hs_withArrayLen0.hscall(hs_zddStorable26DmFm, hs_marker26DmFn, hs_vals26DmFo, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DmHl, $hs.modules.GHCziBase.hs_const);
    };
    this.hs_withArrayLen.evaluate = function (hs_zddStorable26DmFw, hs_vals26DmFu, hs_f26DmFB) {
        var hs_len26DmFv = new $hs.Thunk();
        hs_len26DmFv.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_length.hscall(hs_vals26DmFu);
        };
        var hs_sat26DmHn = new $hs.Func(1);
        hs_sat26DmHn.evaluate = function (hs_ptr26DmFz) {
            var hs_sat26DmHp = new $hs.Thunk();
            hs_sat26DmHp.evaluateOnce = function () {
                var hs_sat26DmHr = new $hs.Func(1);
                hs_sat26DmHr.evaluate = function (hs_res26DmFE) {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DmFE);
                };
                var hs_sat26DmHq = new $hs.Thunk();
                hs_sat26DmHq.evaluateOnce = function () {
                    return hs_f26DmFB.hscall(hs_len26DmFv, hs_ptr26DmFz);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmHq, hs_sat26DmHr);
            };
            var hs_sat26DmHo = new $hs.Thunk();
            hs_sat26DmHo.evaluateOnce = function () {
                return $hs.modules.ForeignziMarshalziArray.hs_pokeArray.hscall(hs_zddStorable26DmFw, hs_ptr26DmFz, hs_vals26DmFu);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmHo, hs_sat26DmHp);
        };
        var hs_sat26DmHm = new $hs.Thunk();
        hs_sat26DmHm.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziArray.hs_allocaArray.hscall(hs_zddStorable26DmFw, hs_len26DmFv);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DmHm, hs_sat26DmHn);
    };
    this.hs_withArray.evaluate = function (hs_zddStorable26DmFK, hs_vals26DmFL) {
        var hs_sat26DmHs = new $hs.Func(1);
        hs_sat26DmHs.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.ForeignziMarshalziArray.hs_withArrayLen.hscall(hs_zddStorable26DmFK, hs_vals26DmFL, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DmHs, $hs.modules.GHCziBase.hs_const);
    };
    this.hs_mallocArray.evaluate = function (hs_zddStorable26DmFQ, hs_sizze26DmFP) {
        var hs_sat26DmHt = new $hs.Thunk();
        hs_sat26DmHt.evaluateOnce = function () {
            var hs_sat26DmHu = new $hs.Thunk();
            hs_sat26DmHu.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DmFQ, $hs.modules.GHCziErr.hs_undefined);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DmFP, hs_sat26DmHu);
        };
        return $hs.modules.ForeignziMarshalziAlloc.hs_mallocBytes.hscall(hs_sat26DmHt);
    };
    this.hs_mallocArray0.evaluate = function (hs_zddStorable26DmFY, hs_sizze26DmFV) {
        var hs_sat26DmHv = new $hs.Thunk();
        hs_sat26DmHv.evaluateOnce = function () {
            var hs_sat26DmHx = new $hs.Thunk();
            hs_sat26DmHx.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DmFY, $hs.modules.GHCziErr.hs_undefined);
            };
            var hs_sat26DmHw = new $hs.Thunk();
            hs_sat26DmHw.evaluateOnce = function () {
                var hs_sat26DmHy = new $hs.Data(1);
                hs_sat26DmHy.data = [1];
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sizze26DmFV, hs_sat26DmHy);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DmHw, hs_sat26DmHx);
        };
        return $hs.modules.ForeignziMarshalziAlloc.hs_mallocBytes.hscall(hs_sat26DmHv);
    };
    this.hs_newArray0.evaluate = function (hs_zddStorable26DmG4, hs_marker26DmG9, hs_vals26DmG5) {
        var hs_sat26DmHA = new $hs.Func(1);
        hs_sat26DmHA.evaluate = function (hs_ptr26DmGa) {
            var hs_sat26DmHD = new $hs.Thunk();
            hs_sat26DmHD.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ptr26DmGa);
            };
            var hs_sat26DmHC = new $hs.Thunk();
            hs_sat26DmHC.evaluateOnce = function () {
                return $hs.modules.ForeignziMarshalziArray.hs_pokeArray0.hscall(hs_zddStorable26DmG4, hs_marker26DmG9, hs_ptr26DmGa, hs_vals26DmG5);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmHC, hs_sat26DmHD);
        };
        var hs_sat26DmHz = new $hs.Thunk();
        hs_sat26DmHz.evaluateOnce = function () {
            var hs_sat26DmHB = new $hs.Thunk();
            hs_sat26DmHB.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_length.hscall(hs_vals26DmG5);
            };
            return $hs.modules.ForeignziMarshalziArray.hs_mallocArray0.hscall(hs_zddStorable26DmG4, hs_sat26DmHB);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmHz, hs_sat26DmHA);
    };
    this.hs_newArray.evaluate = function (hs_zddStorable26DmGi, hs_vals26DmGg) {
        var hs_sat26DmHF = new $hs.Func(1);
        hs_sat26DmHF.evaluate = function (hs_ptr26DmGn) {
            var hs_sat26DmHK = new $hs.Thunk();
            hs_sat26DmHK.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ptr26DmGn);
            };
            var hs_sat26DmHJ = new $hs.Thunk();
            hs_sat26DmHJ.evaluateOnce = function () {
                return $hs.modules.ForeignziMarshalziArray.hs_pokeArray.hscall(hs_zddStorable26DmGi, hs_ptr26DmGn, hs_vals26DmGg);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmHJ, hs_sat26DmHK);
        };
        var hs_sat26DmHE = new $hs.Thunk();
        hs_sat26DmHE.evaluateOnce = function () {
            var hs_sat26DmHG = new $hs.Thunk();
            hs_sat26DmHG.evaluateOnce = function () {
                var hs_sat26DmHI = new $hs.Thunk();
                hs_sat26DmHI.evaluateOnce = function () {
                    return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DmGi, $hs.modules.GHCziErr.hs_undefined);
                };
                var hs_sat26DmHH = new $hs.Thunk();
                hs_sat26DmHH.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_length.hscall(hs_vals26DmGg);
                };
                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DmHH, hs_sat26DmHI);
            };
            return $hs.modules.ForeignziMarshalziAlloc.hs_mallocBytes.hscall(hs_sat26DmHG);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DmHE, hs_sat26DmHF);
    };
};
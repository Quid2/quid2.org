
$hs.modules.Test = new $hs.Module();
$hs.modules.Test.dependencies = ["GHC.Unit", "GHC.CString", "GHC.Integer", "Data.List", "Foreign.C.Types", "GHC.Base", "GHC.Classes", "GHC.Enum", "GHC.List", "GHC.Num", "GHC.Real", "GHC.Show", "Control.Exception.Base"];
$hs.modules.Test.initBeforeDependencies = function () {
    this.hs_mkList = new $hs.Data(1);
    this.hs_test5 = new $hs.Thunk();
    this.hs_jscons = new $hs.Func(3);
    this.hs_jsnil = new $hs.Func(1);
    this.hs_jsalert = new $hs.Func(2);
    this.hs_zdfShowList = new $hs.Data(1);
    this.hs_string2JSString = new $hs.Func(2);
    this.hs_test9 = new $hs.Thunk();
    this.hs_test1 = new $hs.Thunk();
    this.hs_test2 = new $hs.Thunk();
    this.hs_test3 = new $hs.Thunk();
    this.hs_test4 = new $hs.Thunk();
    this.hs_test6 = new $hs.Thunk();
    this.hs_primes = new $hs.Thunk();
    this.hs_test7 = new $hs.Thunk();
    this.hs_test8 = new $hs.Thunk();
    this.hs_Cons = new $hs.Func(2);
    this.hs_Nil = new $hs.Data(2);
    this.hs_mkList.notEvaluated = true;
    this.hs_mkList.evaluate = function () {
        $hs.modules.Test.loadDependencies();
        return this;
    };
    this.hs_test5.evaluateOnce = function () {
        $hs.modules.Test.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_jscons.notEvaluated = true;
    this.hs_jscons.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.Test.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_jsnil.notEvaluated = true;
    this.hs_jsnil.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.Test.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_jsalert.notEvaluated = true;
    this.hs_jsalert.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.Test.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfShowList.notEvaluated = true;
    this.hs_zdfShowList.evaluate = function () {
        $hs.modules.Test.loadDependencies();
        return this;
    };
    this.hs_string2JSString.notEvaluated = true;
    this.hs_string2JSString.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.Test.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_test9.evaluateOnce = function () {
        $hs.modules.Test.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_test1.evaluateOnce = function () {
        $hs.modules.Test.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_test2.evaluateOnce = function () {
        $hs.modules.Test.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_test3.evaluateOnce = function () {
        $hs.modules.Test.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_test4.evaluateOnce = function () {
        $hs.modules.Test.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_test6.evaluateOnce = function () {
        $hs.modules.Test.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_primes.evaluateOnce = function () {
        $hs.modules.Test.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_test7.evaluateOnce = function () {
        $hs.modules.Test.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_test8.evaluateOnce = function () {
        $hs.modules.Test.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_Cons.notEvaluated = true;
    this.hs_Cons.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.Test.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_Nil.notEvaluated = true;
    this.hs_Nil.evaluate = function () {
        $hs.modules.Test.loadDependencies();
        return this;
    };
};
$hs.modules.Test.initAfterDependencies = function () {
    this.hs_mkList.notEvaluated = false;
    this.hs_mkList.evaluate = function () {
        return this;
    };
    this.hs_jscons.notEvaluated = false;
    this.hs_jsnil.notEvaluated = false;
    this.hs_jsalert.notEvaluated = false;
    this.hs_zdfShowList.notEvaluated = false;
    this.hs_zdfShowList.evaluate = function () {
        return this;
    };
    this.hs_string2JSString.notEvaluated = false;
    this.hs_Cons.notEvaluated = false;
    this.hs_Nil.notEvaluated = false;
    this.hs_Nil.evaluate = function () {
        return this;
    };
    var hs_a25r7p8 = new $hs.Thunk();
    var hs_a125r7p9 = new $hs.Thunk();
    var hs_a225r7pa = new $hs.Data(1);
    var hs_a325r7pb = new $hs.Func(3);
    var hs_a425r7pw = new $hs.Func(1);
    var hs_a525r7pH = new $hs.Func(2);
    var hs_zdcshow25r7pU = new $hs.Func(1);
    var hs_zdcshowList25r7q0 = new $hs.Thunk();
    var hs_zdcshowsPrec25r7q1 = new $hs.Thunk();
    var hs_a625r7q2 = new $hs.Func(2);
    var hs_sat26zvYB = new $hs.Func(1);
    var hs_sat26zvYC = new $hs.Thunk();
    var hs_sat26zvYD = new $hs.Func(1);
    var hs_sat26zvYH = new $hs.Thunk();
    var hs_sat26zvYK = new $hs.Thunk();
    var hs_sat26zvYN = new $hs.Thunk();
    var hs_sat26zvYR = new $hs.Thunk();
    var hs_zddReal25r7rf = new $hs.Thunk();
    var hs_zddNum25r7rg = new $hs.Thunk();
    var hs_a725r7rh = new $hs.Thunk();
    var hs_zddEq25r7ri = new $hs.Thunk();
    var hs_sieve25r7rj = new $hs.Func(1);
    var hs_sat26zvZ2 = new $hs.Thunk();
    var hs_sat26zvZ4 = new $hs.Thunk();
    var hs_sat26zvZ6 = new $hs.Thunk();
    var hs_sat26zvZa = new $hs.Thunk();
    hs_a25r7p8.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
    };
    hs_a125r7p9.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(3);
    };
    hs_a225r7pa.data = [hs_a125r7p9, $hs.modules.Test.hs_Nil];
    this.hs_mkList.data = [hs_a25r7p8, hs_a225r7pa];
    this.hs_test5.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Hello World\x00");
    };
    hs_a325r7pb.evaluate = function (hs_ds26zvVv, hs_ds126zvVy, hs_eta26zvVE) {
        var hs_ds226zvY9 = hs_ds26zvVv;
        if (hs_ds26zvVv.notEvaluated) {
            hs_ds226zvY9 = hs_ds26zvVv.hscall();
        }
        var hs_ds326zvVC = hs_ds226zvY9.data[0];
        var hs_ds426zvY8 = hs_ds126zvVy;
        if (hs_ds126zvVy.notEvaluated) {
            hs_ds426zvY8 = hs_ds126zvVy.hscall();
        }
        var hs_ds526zvVD = hs_ds426zvY8.data[0];
        var hs_wild26zvYa = [hs_eta26zvVE, $hs.cons(hs_ds326zvVC, hs_ds526zvVD)];
        var hs_ds626zvVJ = hs_wild26zvYa[0];
        var hs_ds726zvVK = hs_wild26zvYa[1];
        var hs_sat26zvY7 = new $hs.Data(1);
        hs_sat26zvY7.data = [hs_ds726zvVK];
        return [hs_ds626zvVJ, hs_sat26zvY7];
    };
    this.hs_jscons.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a325r7pb.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a425r7pw.evaluate = function (hs_ds26zvVP) {
        var hs_wild26zvYc = [hs_ds26zvVP, $hs.nil()];
        var hs_ds126zvVU = hs_wild26zvYc[0];
        var hs_ds226zvVV = hs_wild26zvYc[1];
        var hs_sat26zvYb = new $hs.Data(1);
        hs_sat26zvYb.data = [hs_ds226zvVV];
        return [hs_ds126zvVU, hs_sat26zvYb];
    };
    this.hs_jsnil.evaluate = function (hs_eta1cW6l3) {
        return hs_a425r7pw.hscall(hs_eta1cW6l3);
    };
    hs_a525r7pH.evaluate = function (hs_ds26zvW0, hs_eta26zvW5) {
        var hs_ds126zvYd = hs_ds26zvW0;
        if (hs_ds26zvW0.notEvaluated) {
            hs_ds126zvYd = hs_ds26zvW0.hscall();
        }
        var hs_ds226zvW4 = hs_ds126zvYd.data[0];
        var hs_wild26zvYe = [hs_eta26zvW5, alert(hs_ds226zvW4)];
        var hs_ds326zvW9 = hs_wild26zvYe[0];
        return [hs_ds326zvW9, $hs.modules.GHCziUnit.hs_Z0T];
    };
    this.hs_jsalert.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a525r7pH.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcshow25r7pU.evaluate = function (hs_ds26zvWc) {
        var hs_wild26zvYf = hs_ds26zvWc;
        if (hs_ds26zvWc.notEvaluated) {
            hs_wild26zvYf = hs_ds26zvWc.hscall();
        }
        switch (hs_wild26zvYf.tag) {
        case 1:
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Cons\x00");
        case 2:
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Nil\x00");
        }
    };
    this.hs_zdfShowList.data = [hs_zdcshowsPrec25r7q1, hs_zdcshow25r7pU, hs_zdcshowList25r7q0];
    hs_zdcshowList25r7q0.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.Test.hs_zdfShowList);
    };
    hs_zdcshowsPrec25r7q1.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowsPrec.hscall($hs.modules.Test.hs_zdfShowList);
    };
    hs_a625r7q2.evaluate = function (hs_ds26zvWl, hs_eta26zvWo) {
        var hs_wild26zvYj = hs_ds26zvWl;
        if (hs_ds26zvWl.notEvaluated) {
            hs_wild26zvYj = hs_ds26zvWl.hscall();
        }
        switch (hs_wild26zvYj.tag) {
        case 1:
            var hs_wild126zvYu = [hs_eta26zvWo, $hs.nil()];
            var hs_ds126zvWt = hs_wild126zvYu[0];
            var hs_ds226zvWu = hs_wild126zvYu[1];
            var hs_sat26zvYt = new $hs.Data(1);
            hs_sat26zvYt.data = [hs_ds226zvWu];
            return [hs_ds126zvWt, hs_sat26zvYt];
        case 2:
            var hs_x26zvWE = hs_wild26zvYj.data[0];
            var hs_xs26zvWy = hs_wild26zvYj.data[1];
            var hs_sat26zvYk = new $hs.Func(1);
            hs_sat26zvYk.evaluate = function (hs_t26zvWH) {
                var hs_sat26zvYn = new $hs.Thunk();
                hs_sat26zvYn.evaluateOnce = function () {
                    var hs_sat26zvYs = new $hs.Thunk();
                    hs_sat26zvYs.evaluateOnce = function () {
                        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumChar);
                    };
                    var hs_sat26zvYr = new $hs.Thunk();
                    hs_sat26zvYr.evaluateOnce = function () {
                        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.ForeignziCziTypes.hs_zdfEnumCChar);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26zvYr, hs_sat26zvYs);
                };
                var hs_ds126zvYo = $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zvYn, hs_x26zvWE);
                var hs_ds226zvWM = hs_ds126zvYo.data[0];
                var hs_ds326zvYm = hs_t26zvWH;
                if (hs_t26zvWH.notEvaluated) {
                    hs_ds326zvYm = hs_t26zvWH.hscall();
                }
                var hs_ds426zvWN = hs_ds326zvYm.data[0];
                var hs_sat26zvYl = new $hs.Func(1);
                hs_sat26zvYl.evaluate = function (hs_ds526zvWO) {
                    var hs_wild126zvYq = [hs_ds526zvWO, $hs.cons(hs_ds226zvWM, hs_ds426zvWN)];
                    var hs_ds626zvWT = hs_wild126zvYq[0];
                    var hs_ds726zvWU = hs_wild126zvYq[1];
                    var hs_sat26zvYp = new $hs.Data(1);
                    hs_sat26zvYp.data = [hs_ds726zvWU];
                    return [hs_ds626zvWT, hs_sat26zvYp];
                };
                if (hs_sat26zvYl.notEvaluated) {
                    return hs_sat26zvYl.hscall();
                } else {
                    return hs_sat26zvYl;
                }
            };
            var hs_sat26zvYi = new $hs.Func(1);
            hs_sat26zvYi.evaluate = function (hs_eta1cW6l3) {
                return hs_a625r7q2.hscall(hs_xs26zvWy, hs_eta1cW6l3);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zvYi, hs_sat26zvYk, hs_eta26zvWo);
        }
    };
    this.hs_string2JSString.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a625r7q2.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_sat26zvYB.evaluate = function (hs_s26zvX1) {
        var hs_sat26zvYw = new $hs.Thunk();
        hs_sat26zvYw.evaluateOnce = function () {
            var hs_sat26zvYA = new $hs.Data(1);
            hs_sat26zvYA.data = [9];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zvYA);
        };
        var hs_sat26zvYv = new $hs.Thunk();
        hs_sat26zvYv.evaluateOnce = function () {
            var hs_ds26zvYy = hs_s26zvX1;
            if (hs_s26zvX1.notEvaluated) {
                hs_ds26zvYy = hs_s26zvX1.hscall();
            }
            var hs_ds126zvX6 = hs_ds26zvYy.data[0];
            var hs_sat26zvYx = new $hs.Func(1);
            hs_sat26zvYx.evaluate = function (hs_ds226zvX7) {
                var hs_wild26zvYz = [hs_ds226zvX7, alert(hs_ds126zvX6)];
                var hs_ds326zvXb = hs_wild26zvYz[0];
                return [hs_ds326zvXb, $hs.modules.GHCziUnit.hs_Z0T];
            };
            if (hs_sat26zvYx.notEvaluated) {
                return hs_sat26zvYx.hscall();
            } else {
                return hs_sat26zvYx;
            }
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zvYv, hs_sat26zvYw);
    };
    hs_sat26zvYC.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Haskell says hello\x00");
    };
    hs_sat26zvYD.evaluate = function (hs_eta1cW6l3) {
        return hs_a625r7q2.hscall(hs_sat26zvYC, hs_eta1cW6l3);
    };
    this.hs_test9.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zvYD, hs_sat26zvYB);
    };
    hs_sat26zvYH.evaluateOnce = function () {
        var hs_sat26zvYE = new $hs.Thunk();
        hs_sat26zvYE.evaluateOnce = function () {
            var hs_sat26zvYG = new $hs.Data(1);
            hs_sat26zvYG.data = [5];
            var hs_sat26zvYF = new $hs.Data(1);
            hs_sat26zvYF.data = [1];
            return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26zvYF, hs_sat26zvYG);
        };
        return $hs.modules.DataziList.hs_sum.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26zvYE);
    };
    this.hs_test1.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zvYH);
    };
    hs_sat26zvYK.evaluateOnce = function () {
        var hs_sat26zvYJ = new $hs.Data(1);
        hs_sat26zvYJ.data = [5];
        var hs_sat26zvYI = new $hs.Data(1);
        hs_sat26zvYI.data = [1];
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26zvYI, hs_sat26zvYJ);
    };
    this.hs_test2.evaluateOnce = function () {
        return $hs.modules.DataziList.hs_product.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26zvYK);
    };
    hs_sat26zvYN.evaluateOnce = function () {
        var hs_sat26zvYM = new $hs.Data(1);
        hs_sat26zvYM.data = [10];
        var hs_sat26zvYL = new $hs.Data(1);
        hs_sat26zvYL.data = [2];
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26zvYL, hs_sat26zvYM);
    };
    this.hs_test3.evaluateOnce = function () {
        return $hs.modules.DataziList.hs_product.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26zvYN);
    };
    this.hs_test4.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, $hs.modules.Test.hs_test3);
    };
    hs_sat26zvYR.evaluateOnce = function () {
        var hs_sat26zvYO = new $hs.Thunk();
        hs_sat26zvYO.evaluateOnce = function () {
            var hs_sat26zvYQ = new $hs.Thunk();
            hs_sat26zvYQ.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(5);
            };
            var hs_sat26zvYP = new $hs.Thunk();
            hs_sat26zvYP.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziNum.hs_zdfEnumInteger, hs_sat26zvYP, hs_sat26zvYQ);
        };
        return $hs.modules.DataziList.hs_sum.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26zvYO);
    };
    this.hs_test6.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziNum.hs_zdfShowInteger, hs_sat26zvYR);
    };
    hs_zddReal25r7rf.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Integral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zddNum25r7rg.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp1Real.hscall(hs_zddReal25r7rf);
    };
    hs_a725r7rh.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_zdp2Real.hscall(hs_zddReal25r7rf);
    };
    hs_zddEq25r7ri.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_a725r7rh);
    };
    hs_sieve25r7rj.evaluate = function (hs_ds26zvXB) {
        var hs_wild26zvYT = hs_ds26zvXB;
        if (hs_ds26zvXB.notEvaluated) {
            hs_wild26zvYT = hs_ds26zvXB.hscall();
        }
        switch (hs_wild26zvYT.tag) {
        case 1:
            return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("Test.hs:54:9-62|function sieve\x00");
        case 2:
            var hs_x26zvXF = hs_wild26zvYT.data[0];
            var hs_xs26zvXU = hs_wild26zvYT.data[1];
            var hs_sat26zvYS = new $hs.Thunk();
            hs_sat26zvYS.evaluateOnce = function () {
                var hs_sat26zvYU = new $hs.Thunk();
                hs_sat26zvYU.evaluateOnce = function () {
                    var hs_ds126zvXS = new $hs.Func(1);
                    hs_ds126zvXS.evaluate = function (hs_ds226zvXI) {
                        var hs_ds326zvYW = hs_ds226zvXI;
                        if (hs_ds226zvXI.notEvaluated) {
                            hs_ds326zvYW = hs_ds226zvXI.hscall();
                        }
                        switch (hs_ds326zvYW.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var hs_ds426zvXM = hs_ds326zvYW.data[0];
                            var hs_ds526zvXR = hs_ds326zvYW.data[1];
                            var hs_sat26zvYX = new $hs.Thunk();
                            hs_sat26zvYX.evaluateOnce = function () {
                                var hs_sat26zvZ0 = new $hs.Thunk();
                                hs_sat26zvZ0.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum25r7rg, hs_sat26zvZ0);
                            };
                            var hs_sat26zvYY = new $hs.Thunk();
                            hs_sat26zvYY.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, hs_ds426zvXM, hs_x26zvXF);
                            };
                            var hs_wild126zvYZ = $hs.modules.GHCziClasses.hs_zsze.hscall(hs_zddEq25r7ri, hs_sat26zvYY, hs_sat26zvYX);
                            switch (hs_wild126zvYZ.tag) {
                            case 1:
                                return hs_ds126zvXS.hscall(hs_ds526zvXR);
                            case 2:
                                var hs_sat26zvYV = new $hs.Thunk();
                                hs_sat26zvYV.evaluateOnce = function () {
                                    return hs_ds126zvXS.hscall(hs_ds526zvXR);
                                };
                                var $res = new $hs.Data(2);
                                $res.data = [hs_ds426zvXM, hs_sat26zvYV];
                                return $res;
                            }
                        }
                    };
                    return hs_ds126zvXS.hscall(hs_xs26zvXU);
                };
                return hs_sieve25r7rj.hscall(hs_sat26zvYU);
            };
            var $res = new $hs.Data(2);
            $res.data = [hs_x26zvXF, hs_sat26zvYS];
            return $res;
        }
    };
    hs_sat26zvZ2.evaluateOnce = function () {
        var hs_sat26zvZ1 = new $hs.Data(1);
        hs_sat26zvZ1.data = [2];
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26zvZ1);
    };
    this.hs_primes.evaluateOnce = function () {
        return hs_sieve25r7rj.hscall(hs_sat26zvZ2);
    };
    hs_sat26zvZ4.evaluateOnce = function () {
        var hs_sat26zvZ3 = new $hs.Data(1);
        hs_sat26zvZ3.data = [7];
        return $hs.modules.GHCziList.hs_take.hscall(hs_sat26zvZ3, $hs.modules.Test.hs_primes);
    };
    hs_sat26zvZ6.evaluateOnce = function () {
        var hs_sat26zvZ5 = $hs.modules.GHCziShow.hs_zdfShowZMZN.hscall($hs.modules.GHCziShow.hs_zdfShowInt);
        return $hs.modules.GHCziShow.hs_show.hscall(hs_sat26zvZ5);
    };
    this.hs_test7.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zvZ6, hs_sat26zvZ4);
    };
    hs_sat26zvZa.evaluateOnce = function () {
        var hs_sat26zvZ7 = new $hs.Thunk();
        hs_sat26zvZ7.evaluateOnce = function () {
            var hs_sat26zvZ9 = new $hs.Thunk();
            hs_sat26zvZ9.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(5);
            };
            var hs_sat26zvZ8 = new $hs.Thunk();
            hs_sat26zvZ8.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziNum.hs_zdfEnumInteger, hs_sat26zvZ8, hs_sat26zvZ9);
        };
        return $hs.modules.DataziList.hs_product.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26zvZ7);
    };
    this.hs_test8.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziNum.hs_zdfShowInteger, hs_sat26zvZa);
    };
    this.hs_Cons.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_Nil.data = [];
};
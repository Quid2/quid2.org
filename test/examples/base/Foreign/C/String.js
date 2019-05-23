
$hs.modules.ForeignziCziString = new $hs.Module();
$hs.modules.ForeignziCziString.dependencies = ["GHC.Types", "GHC.Unit", "GHC.Integer", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Classes", "GHC.Foreign", "GHC.IO.Encoding", "GHC.List", "GHC.Word", "Foreign.C.Types", "Foreign.Marshal.Array", "Foreign.Storable"];
$hs.modules.ForeignziCziString.initBeforeDependencies = function () {
    this.hs_charIsRepresentable = new $hs.Thunk();
    this.hs_withCStringLen = new $hs.Thunk();
    this.hs_withCString = new $hs.Thunk();
    this.hs_newCStringLen = new $hs.Thunk();
    this.hs_newCString = new $hs.Thunk();
    this.hs_peekCStringLen = new $hs.Thunk();
    this.hs_peekCString = new $hs.Thunk();
    this.hs_castCCharToChar = new $hs.Func(1);
    this.hs_peekCAStringLen = new $hs.Func(1);
    this.hs_castCharToCChar = new $hs.Func(1);
    this.hs_newCAStringLen = new $hs.Func(1);
    this.hs_withCAStringLen = new $hs.Func(2);
    this.hs_castCUCharToChar = new $hs.Func(1);
    this.hs_castCharToCUChar = new $hs.Func(1);
    this.hs_castCSCharToChar = new $hs.Func(1);
    this.hs_castCharToCSChar = new $hs.Func(1);
    this.hs_peekCAString = new $hs.Func(1);
    this.hs_newCAString = new $hs.Func(1);
    this.hs_withCAString = new $hs.Func(2);
    this.hs_peekCWString = new $hs.Func(1);
    this.hs_peekCWStringLen = new $hs.Func(1);
    this.hs_newCWString = new $hs.Thunk();
    this.hs_newCWStringLen = new $hs.Func(1);
    this.hs_withCWString = new $hs.Thunk();
    this.hs_withCWStringLen = new $hs.Func(2);
    this.hs_charIsRepresentable.evaluateOnce = function () {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_withCStringLen.evaluateOnce = function () {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_withCString.evaluateOnce = function () {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_newCStringLen.evaluateOnce = function () {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_newCString.evaluateOnce = function () {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_peekCStringLen.evaluateOnce = function () {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_peekCString.evaluateOnce = function () {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_castCCharToChar.notEvaluated = true;
    this.hs_castCCharToChar.evaluate = function (hs_ch26Dj0F) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_ch26Dj0F);
    };
    this.hs_peekCAStringLen.notEvaluated = true;
    this.hs_peekCAStringLen.evaluate = function (hs_ds26Dj0J) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_ds26Dj0J);
    };
    this.hs_castCharToCChar.notEvaluated = true;
    this.hs_castCharToCChar.evaluate = function (hs_ch26Dj1d) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_ch26Dj1d);
    };
    this.hs_newCAStringLen.notEvaluated = true;
    this.hs_newCAStringLen.evaluate = function (hs_str26Dj1h) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_str26Dj1h);
    };
    this.hs_withCAStringLen.notEvaluated = true;
    this.hs_withCAStringLen.evaluate = function (hs_str26Dj1N, hs_f26Dj2d) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_str26Dj1N, hs_f26Dj2d);
    };
    this.hs_castCUCharToChar.notEvaluated = true;
    this.hs_castCUCharToChar.evaluate = function (hs_ch26Dj2i) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_ch26Dj2i);
    };
    this.hs_castCharToCUChar.notEvaluated = true;
    this.hs_castCharToCUChar.evaluate = function (hs_ch26Dj2m) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_ch26Dj2m);
    };
    this.hs_castCSCharToChar.notEvaluated = true;
    this.hs_castCSCharToChar.evaluate = function (hs_ch26Dj2p) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_ch26Dj2p);
    };
    this.hs_castCharToCSChar.notEvaluated = true;
    this.hs_castCharToCSChar.evaluate = function (hs_ch26Dj2t) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_ch26Dj2t);
    };
    this.hs_peekCAString.notEvaluated = true;
    this.hs_peekCAString.evaluate = function (hs_cp26Dj2A) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_cp26Dj2A);
    };
    this.hs_newCAString.notEvaluated = true;
    this.hs_newCAString.evaluate = function (hs_str26Dj30) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_str26Dj30);
    };
    this.hs_withCAString.notEvaluated = true;
    this.hs_withCAString.evaluate = function (hs_str26Dj3s, hs_f26Dj3Q) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_str26Dj3s, hs_f26Dj3Q);
    };
    this.hs_peekCWString.notEvaluated = true;
    this.hs_peekCWString.evaluate = function (hs_cp26Dj3Y) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_cp26Dj3Y);
    };
    this.hs_peekCWStringLen.notEvaluated = true;
    this.hs_peekCWStringLen.evaluate = function (hs_ds26Dj45) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_ds26Dj45);
    };
    this.hs_newCWString.evaluateOnce = function () {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_newCWStringLen.notEvaluated = true;
    this.hs_newCWStringLen.evaluate = function (hs_str26Dj4o) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_str26Dj4o);
    };
    this.hs_withCWString.evaluateOnce = function () {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_withCWStringLen.notEvaluated = true;
    this.hs_withCWStringLen.evaluate = function (hs_str26Dj4z, hs_f26Dj4G) {
        $hs.modules.ForeignziCziString.loadDependencies();
        return this.evaluate(hs_str26Dj4z, hs_f26Dj4G);
    };
};
$hs.modules.ForeignziCziString.initAfterDependencies = function () {
    this.hs_castCCharToChar.notEvaluated = false;
    this.hs_peekCAStringLen.notEvaluated = false;
    this.hs_castCharToCChar.notEvaluated = false;
    this.hs_newCAStringLen.notEvaluated = false;
    this.hs_withCAStringLen.notEvaluated = false;
    this.hs_castCUCharToChar.notEvaluated = false;
    this.hs_castCharToCUChar.notEvaluated = false;
    this.hs_castCSCharToChar.notEvaluated = false;
    this.hs_castCharToCSChar.notEvaluated = false;
    this.hs_peekCAString.notEvaluated = false;
    this.hs_newCAString.notEvaluated = false;
    this.hs_withCAString.notEvaluated = false;
    this.hs_peekCWString.notEvaluated = false;
    this.hs_peekCWStringLen.notEvaluated = false;
    this.hs_newCWStringLen.notEvaluated = false;
    this.hs_withCWStringLen.notEvaluated = false;
    var hs_sat26Dj5A = new $hs.Thunk();
    var hs_nUL25tppv = new $hs.Thunk();
    var hs_sat26Dj6g = new $hs.Thunk();
    var hs_wNUL25tppD = new $hs.Thunk();
    var hs_castCWcharToChar25tppG = new $hs.Func(1);
    var hs_castCharToCWchar25tppH = new $hs.Func(1);
    var hs_charsToCWchars25tppF = new $hs.Func(1);
    var hs_sat26Dj6q = new $hs.Thunk();
    this.hs_charIsRepresentable.evaluateOnce = function () {
        return $hs.modules.GHCziForeign.hs_charIsRepresentable.hscall($hs.modules.GHCziIOziEncoding.hs_foreignEncoding);
    };
    this.hs_withCStringLen.evaluateOnce = function () {
        return $hs.modules.GHCziForeign.hs_withCStringLen.hscall($hs.modules.GHCziIOziEncoding.hs_foreignEncoding);
    };
    this.hs_withCString.evaluateOnce = function () {
        return $hs.modules.GHCziForeign.hs_withCString.hscall($hs.modules.GHCziIOziEncoding.hs_foreignEncoding);
    };
    this.hs_newCStringLen.evaluateOnce = function () {
        return $hs.modules.GHCziForeign.hs_newCStringLen.hscall($hs.modules.GHCziIOziEncoding.hs_foreignEncoding);
    };
    this.hs_newCString.evaluateOnce = function () {
        return $hs.modules.GHCziForeign.hs_newCString.hscall($hs.modules.GHCziIOziEncoding.hs_foreignEncoding);
    };
    this.hs_peekCStringLen.evaluateOnce = function () {
        return $hs.modules.GHCziForeign.hs_peekCStringLen.hscall($hs.modules.GHCziIOziEncoding.hs_foreignEncoding);
    };
    this.hs_peekCString.evaluateOnce = function () {
        return $hs.modules.GHCziForeign.hs_peekCString.hscall($hs.modules.GHCziIOziEncoding.hs_foreignEncoding);
    };
    this.hs_castCCharToChar.evaluate = function (hs_ch26Dj0F) {
        var hs_sat26Dj4J = new $hs.Thunk();
        hs_sat26Dj4J.evaluateOnce = function () {
            var hs_sat26Dj4K = new $hs.Thunk();
            hs_sat26Dj4K.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCChar, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_ch26Dj0F);
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dj4K);
        };
        return $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26Dj4J);
    };
    this.hs_peekCAStringLen.evaluate = function (hs_ds26Dj0J) {
        var hs_wild26Dj4L = hs_ds26Dj0J;
        if (hs_ds26Dj0J.notEvaluated) {
            hs_wild26Dj4L = hs_ds26Dj0J.hscall();
        }
        var hs_cp26Dj0T = hs_wild26Dj4L.data[0];
        var hs_len26Dj0N = hs_wild26Dj4L.data[1];
        var hs_sat26Dj4M = new $hs.Data(1);
        hs_sat26Dj4M.data = [0];
        var hs_wild126Dj4N = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_len26Dj0N, hs_sat26Dj4M);
        switch (hs_wild126Dj4N.tag) {
        case 1:
            var hs_loop26Dj14 = new $hs.Func(2);
            hs_loop26Dj14.evaluate = function (hs_acc26Dj13, hs_i26Dj0U) {
                var hs_sat26Dj4Q = new $hs.Func(1);
                hs_sat26Dj4Q.evaluate = function (hs_xval26Dj0X) {
                    var hs_val26Dj12 = $hs.modules.ForeignziCziString.hs_castCCharToChar.hscall(hs_xval26Dj0X);
                    var hs_sat26Dj4T = new $hs.Data(1);
                    hs_sat26Dj4T.data = [0];
                    var hs_wild226Dj4U = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_i26Dj0U, hs_sat26Dj4T);
                    switch (hs_wild226Dj4U.tag) {
                    case 1:
                        var hs_sat26Dj4W = new $hs.Thunk();
                        hs_sat26Dj4W.evaluateOnce = function () {
                            var hs_sat26Dj4X = new $hs.Data(1);
                            hs_sat26Dj4X.data = [1];
                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i26Dj0U, hs_sat26Dj4X);
                        };
                        var hs_sat26Dj4V = new $hs.Data(2);
                        hs_sat26Dj4V.data = [hs_val26Dj12, hs_acc26Dj13];
                        return hs_loop26Dj14.hscall(hs_sat26Dj4V, hs_sat26Dj4W);
                    case 2:
                        var hs_sat26Dj4R = new $hs.Data(2);
                        hs_sat26Dj4R.data = [hs_val26Dj12, hs_acc26Dj13];
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dj4R);
                    }
                };
                var hs_sat26Dj4P = new $hs.Thunk();
                hs_sat26Dj4P.evaluateOnce = function () {
                    return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, hs_cp26Dj0T, hs_i26Dj0U);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dj4P, hs_sat26Dj4Q);
            };
            var hs_sat26Dj4O = new $hs.Thunk();
            hs_sat26Dj4O.evaluateOnce = function () {
                var hs_sat26Dj4Y = new $hs.Data(1);
                hs_sat26Dj4Y.data = [1];
                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_len26Dj0N, hs_sat26Dj4Y);
            };
            return hs_loop26Dj14.hscall($hs.modules.GHCziTypes.hs_ZMZN, hs_sat26Dj4O);
        case 2:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_ZMZN);
        }
    };
    this.hs_castCharToCChar.evaluate = function (hs_ch26Dj1d) {
        var hs_sat26Dj4Z = new $hs.Thunk();
        hs_sat26Dj4Z.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_ord.hscall(hs_ch26Dj1d);
        };
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCChar, hs_sat26Dj4Z);
    };
    this.hs_newCAStringLen.evaluate = function (hs_str26Dj1h) {
        var hs_len26Dj1i = new $hs.Thunk();
        hs_len26Dj1i.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_length.hscall(hs_str26Dj1h);
        };
        var hs_sat26Dj51 = new $hs.Func(1);
        hs_sat26Dj51.evaluate = function (hs_ptr26Dj1v) {
            var hs_sat26Dj53 = new $hs.Thunk();
            hs_sat26Dj53.evaluateOnce = function () {
                var hs_sat26Dj5e = new $hs.Data(1);
                hs_sat26Dj5e.data = [hs_ptr26Dj1v, hs_len26Dj1i];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dj5e);
            };
            var hs_sat26Dj52 = new $hs.Thunk();
            hs_sat26Dj52.evaluateOnce = function () {
                var hs_go26Dj1C = new $hs.Func(2);
                hs_go26Dj1C.evaluate = function (hs_ds26Dj1o, hs_n26Dj1q) {
                    var hs_wild26Dj56 = hs_ds26Dj1o;
                    if (hs_ds26Dj1o.notEvaluated) {
                        hs_wild26Dj56 = hs_ds26Dj1o.hscall();
                    }
                    switch (hs_wild26Dj56.tag) {
                    case 1:
                        var hs_n126Dj5d = hs_n26Dj1q;
                        if (hs_n26Dj1q.notEvaluated) {
                            hs_n126Dj5d = hs_n26Dj1q.hscall();
                        }
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                    case 2:
                        var hs_c26Dj1w = hs_wild26Dj56.data[0];
                        var hs_cs26Dj1A = hs_wild26Dj56.data[1];
                        var hs_sat26Dj57 = new $hs.Thunk();
                        hs_sat26Dj57.evaluateOnce = function () {
                            var hs_sat26Dj5a = new $hs.Thunk();
                            hs_sat26Dj5a.evaluateOnce = function () {
                                var hs_sat26Dj5b = new $hs.Data(1);
                                hs_sat26Dj5b.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26Dj1q, hs_sat26Dj5b);
                            };
                            return hs_go26Dj1C.hscall(hs_cs26Dj1A, hs_sat26Dj5a);
                        };
                        var hs_sat26Dj55 = new $hs.Thunk();
                        hs_sat26Dj55.evaluateOnce = function () {
                            var hs_sat26Dj58 = new $hs.Thunk();
                            hs_sat26Dj58.evaluateOnce = function () {
                                var hs_sat26Dj59 = new $hs.Thunk();
                                hs_sat26Dj59.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26Dj1w);
                                };
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCChar, hs_sat26Dj59);
                            };
                            return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, hs_ptr26Dj1v, hs_n26Dj1q, hs_sat26Dj58);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dj55, hs_sat26Dj57);
                    }
                };
                var hs_sat26Dj54 = new $hs.Data(1);
                hs_sat26Dj54.data = [0];
                return hs_go26Dj1C.hscall(hs_str26Dj1h, hs_sat26Dj54);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dj52, hs_sat26Dj53);
        };
        var hs_sat26Dj50 = new $hs.Thunk();
        hs_sat26Dj50.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziArray.hs_mallocArray0.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, hs_len26Dj1i);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dj50, hs_sat26Dj51);
    };
    this.hs_withCAStringLen.evaluate = function (hs_str26Dj1N, hs_f26Dj2d) {
        var hs_len26Dj1O = new $hs.Thunk();
        hs_len26Dj1O.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_length.hscall(hs_str26Dj1N);
        };
        var hs_sat26Dj5g = new $hs.Func(1);
        hs_sat26Dj5g.evaluate = function (hs_ptr26Dj21) {
            var hs_sat26Dj5i = new $hs.Thunk();
            hs_sat26Dj5i.evaluateOnce = function () {
                var hs_sat26Dj5t = new $hs.Data(1);
                hs_sat26Dj5t.data = [hs_ptr26Dj21, hs_len26Dj1O];
                return hs_f26Dj2d.hscall(hs_sat26Dj5t);
            };
            var hs_sat26Dj5h = new $hs.Thunk();
            hs_sat26Dj5h.evaluateOnce = function () {
                var hs_go26Dj28 = new $hs.Func(2);
                hs_go26Dj28.evaluate = function (hs_ds26Dj1U, hs_n26Dj1W) {
                    var hs_wild26Dj5l = hs_ds26Dj1U;
                    if (hs_ds26Dj1U.notEvaluated) {
                        hs_wild26Dj5l = hs_ds26Dj1U.hscall();
                    }
                    switch (hs_wild26Dj5l.tag) {
                    case 1:
                        var hs_n126Dj5s = hs_n26Dj1W;
                        if (hs_n26Dj1W.notEvaluated) {
                            hs_n126Dj5s = hs_n26Dj1W.hscall();
                        }
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                    case 2:
                        var hs_c26Dj22 = hs_wild26Dj5l.data[0];
                        var hs_cs26Dj26 = hs_wild26Dj5l.data[1];
                        var hs_sat26Dj5m = new $hs.Thunk();
                        hs_sat26Dj5m.evaluateOnce = function () {
                            var hs_sat26Dj5p = new $hs.Thunk();
                            hs_sat26Dj5p.evaluateOnce = function () {
                                var hs_sat26Dj5q = new $hs.Data(1);
                                hs_sat26Dj5q.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26Dj1W, hs_sat26Dj5q);
                            };
                            return hs_go26Dj28.hscall(hs_cs26Dj26, hs_sat26Dj5p);
                        };
                        var hs_sat26Dj5k = new $hs.Thunk();
                        hs_sat26Dj5k.evaluateOnce = function () {
                            var hs_sat26Dj5n = new $hs.Thunk();
                            hs_sat26Dj5n.evaluateOnce = function () {
                                var hs_sat26Dj5o = new $hs.Thunk();
                                hs_sat26Dj5o.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26Dj22);
                                };
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCChar, hs_sat26Dj5o);
                            };
                            return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, hs_ptr26Dj21, hs_n26Dj1W, hs_sat26Dj5n);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dj5k, hs_sat26Dj5m);
                    }
                };
                var hs_sat26Dj5j = new $hs.Data(1);
                hs_sat26Dj5j.data = [0];
                return hs_go26Dj28.hscall(hs_str26Dj1N, hs_sat26Dj5j);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dj5h, hs_sat26Dj5i);
        };
        var hs_sat26Dj5f = new $hs.Thunk();
        hs_sat26Dj5f.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziArray.hs_allocaArray.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, hs_len26Dj1O);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dj5f, hs_sat26Dj5g);
    };
    this.hs_castCUCharToChar.evaluate = function (hs_ch26Dj2i) {
        var hs_sat26Dj5u = new $hs.Thunk();
        hs_sat26Dj5u.evaluateOnce = function () {
            var hs_sat26Dj5v = new $hs.Thunk();
            hs_sat26Dj5v.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCUChar, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_ch26Dj2i);
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dj5v);
        };
        return $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26Dj5u);
    };
    this.hs_castCharToCUChar.evaluate = function (hs_ch26Dj2m) {
        var hs_sat26Dj5w = new $hs.Thunk();
        hs_sat26Dj5w.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_ord.hscall(hs_ch26Dj2m);
        };
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCUChar, hs_sat26Dj5w);
    };
    this.hs_castCSCharToChar.evaluate = function (hs_ch26Dj2p) {
        var hs_sat26Dj5x = new $hs.Thunk();
        hs_sat26Dj5x.evaluateOnce = function () {
            var hs_sat26Dj5y = new $hs.Thunk();
            hs_sat26Dj5y.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCSChar, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_ch26Dj2p);
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dj5y);
        };
        return $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26Dj5x);
    };
    this.hs_castCharToCSChar.evaluate = function (hs_ch26Dj2t) {
        var hs_sat26Dj5z = new $hs.Thunk();
        hs_sat26Dj5z.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_ord.hscall(hs_ch26Dj2t);
        };
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSChar, hs_sat26Dj5z);
    };
    hs_sat26Dj5A.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
    };
    hs_nUL25tppv.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCChar, hs_sat26Dj5A);
    };
    this.hs_peekCAString.evaluate = function (hs_cp26Dj2A) {
        var hs_loop26Dj2L = new $hs.Func(2);
        hs_loop26Dj2L.evaluate = function (hs_s26Dj2K, hs_i26Dj2B) {
            var hs_sat26Dj5E = new $hs.Func(1);
            hs_sat26Dj5E.evaluate = function (hs_xval26Dj2E) {
                var hs_val26Dj2J = $hs.modules.ForeignziCziString.hs_castCCharToChar.hscall(hs_xval26Dj2E);
                var hs_sat26Dj5H = new $hs.Data(1);
                hs_sat26Dj5H.data = [0];
                var hs_wild26Dj5I = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_i26Dj2B, hs_sat26Dj5H);
                switch (hs_wild26Dj5I.tag) {
                case 1:
                    var hs_sat26Dj5K = new $hs.Thunk();
                    hs_sat26Dj5K.evaluateOnce = function () {
                        var hs_sat26Dj5L = new $hs.Data(1);
                        hs_sat26Dj5L.data = [1];
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i26Dj2B, hs_sat26Dj5L);
                    };
                    var hs_sat26Dj5J = new $hs.Data(2);
                    hs_sat26Dj5J.data = [hs_val26Dj2J, hs_s26Dj2K];
                    return hs_loop26Dj2L.hscall(hs_sat26Dj5J, hs_sat26Dj5K);
                case 2:
                    var hs_sat26Dj5F = new $hs.Data(2);
                    hs_sat26Dj5F.data = [hs_val26Dj2J, hs_s26Dj2K];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dj5F);
                }
            };
            var hs_sat26Dj5D = new $hs.Thunk();
            hs_sat26Dj5D.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, hs_cp26Dj2A, hs_i26Dj2B);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dj5D, hs_sat26Dj5E);
        };
        var hs_sat26Dj5C = new $hs.Func(1);
        hs_sat26Dj5C.evaluate = function (hs_l26Dj2T) {
            var hs_sat26Dj5M = new $hs.Data(1);
            hs_sat26Dj5M.data = [0];
            var hs_wild26Dj5N = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_l26Dj2T, hs_sat26Dj5M);
            switch (hs_wild26Dj5N.tag) {
            case 1:
                var hs_sat26Dj5O = new $hs.Thunk();
                hs_sat26Dj5O.evaluateOnce = function () {
                    var hs_sat26Dj5P = new $hs.Data(1);
                    hs_sat26Dj5P.data = [1];
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_l26Dj2T, hs_sat26Dj5P);
                };
                return hs_loop26Dj2L.hscall($hs.modules.GHCziTypes.hs_ZMZN, hs_sat26Dj5O);
            case 2:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_ZMZN);
            }
        };
        var hs_sat26Dj5B = new $hs.Thunk();
        hs_sat26Dj5B.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziArray.hs_lengthArray0.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, $hs.modules.ForeignziCziTypes.hs_zdfEqCChar, hs_nUL25tppv, hs_cp26Dj2A);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dj5B, hs_sat26Dj5C);
    };
    this.hs_newCAString.evaluate = function (hs_str26Dj30) {
        var hs_sat26Dj5R = new $hs.Func(1);
        hs_sat26Dj5R.evaluate = function (hs_ptr26Dj39) {
            var hs_sat26Dj5U = new $hs.Thunk();
            hs_sat26Dj5U.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ptr26Dj39);
            };
            var hs_sat26Dj5T = new $hs.Thunk();
            hs_sat26Dj5T.evaluateOnce = function () {
                var hs_go26Dj3j = new $hs.Func(2);
                hs_go26Dj3j.evaluate = function (hs_ds26Dj37, hs_n26Dj3a) {
                    var hs_wild26Dj5X = hs_ds26Dj37;
                    if (hs_ds26Dj37.notEvaluated) {
                        hs_wild26Dj5X = hs_ds26Dj37.hscall();
                    }
                    switch (hs_wild26Dj5X.tag) {
                    case 1:
                        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, hs_ptr26Dj39, hs_n26Dj3a, hs_nUL25tppv);
                    case 2:
                        var hs_c26Dj3d = hs_wild26Dj5X.data[0];
                        var hs_cs26Dj3h = hs_wild26Dj5X.data[1];
                        var hs_sat26Dj5Y = new $hs.Thunk();
                        hs_sat26Dj5Y.evaluateOnce = function () {
                            var hs_sat26Dj61 = new $hs.Thunk();
                            hs_sat26Dj61.evaluateOnce = function () {
                                var hs_sat26Dj62 = new $hs.Data(1);
                                hs_sat26Dj62.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26Dj3a, hs_sat26Dj62);
                            };
                            return hs_go26Dj3j.hscall(hs_cs26Dj3h, hs_sat26Dj61);
                        };
                        var hs_sat26Dj5W = new $hs.Thunk();
                        hs_sat26Dj5W.evaluateOnce = function () {
                            var hs_sat26Dj5Z = new $hs.Thunk();
                            hs_sat26Dj5Z.evaluateOnce = function () {
                                var hs_sat26Dj60 = new $hs.Thunk();
                                hs_sat26Dj60.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26Dj3d);
                                };
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCChar, hs_sat26Dj60);
                            };
                            return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, hs_ptr26Dj39, hs_n26Dj3a, hs_sat26Dj5Z);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dj5W, hs_sat26Dj5Y);
                    }
                };
                var hs_sat26Dj5V = new $hs.Data(1);
                hs_sat26Dj5V.data = [0];
                return hs_go26Dj3j.hscall(hs_str26Dj30, hs_sat26Dj5V);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dj5T, hs_sat26Dj5U);
        };
        var hs_sat26Dj5Q = new $hs.Thunk();
        hs_sat26Dj5Q.evaluateOnce = function () {
            var hs_sat26Dj5S = new $hs.Thunk();
            hs_sat26Dj5S.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_length.hscall(hs_str26Dj30);
            };
            return $hs.modules.ForeignziMarshalziArray.hs_mallocArray0.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, hs_sat26Dj5S);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dj5Q, hs_sat26Dj5R);
    };
    this.hs_withCAString.evaluate = function (hs_str26Dj3s, hs_f26Dj3Q) {
        var hs_sat26Dj64 = new $hs.Func(1);
        hs_sat26Dj64.evaluate = function (hs_ptr26Dj3B) {
            var hs_sat26Dj67 = new $hs.Thunk();
            hs_sat26Dj67.evaluateOnce = function () {
                return hs_f26Dj3Q.hscall(hs_ptr26Dj3B);
            };
            var hs_sat26Dj66 = new $hs.Thunk();
            hs_sat26Dj66.evaluateOnce = function () {
                var hs_go26Dj3L = new $hs.Func(2);
                hs_go26Dj3L.evaluate = function (hs_ds26Dj3z, hs_n26Dj3C) {
                    var hs_wild26Dj6a = hs_ds26Dj3z;
                    if (hs_ds26Dj3z.notEvaluated) {
                        hs_wild26Dj6a = hs_ds26Dj3z.hscall();
                    }
                    switch (hs_wild26Dj6a.tag) {
                    case 1:
                        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, hs_ptr26Dj3B, hs_n26Dj3C, hs_nUL25tppv);
                    case 2:
                        var hs_c26Dj3F = hs_wild26Dj6a.data[0];
                        var hs_cs26Dj3J = hs_wild26Dj6a.data[1];
                        var hs_sat26Dj6b = new $hs.Thunk();
                        hs_sat26Dj6b.evaluateOnce = function () {
                            var hs_sat26Dj6e = new $hs.Thunk();
                            hs_sat26Dj6e.evaluateOnce = function () {
                                var hs_sat26Dj6f = new $hs.Data(1);
                                hs_sat26Dj6f.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_n26Dj3C, hs_sat26Dj6f);
                            };
                            return hs_go26Dj3L.hscall(hs_cs26Dj3J, hs_sat26Dj6e);
                        };
                        var hs_sat26Dj69 = new $hs.Thunk();
                        hs_sat26Dj69.evaluateOnce = function () {
                            var hs_sat26Dj6c = new $hs.Thunk();
                            hs_sat26Dj6c.evaluateOnce = function () {
                                var hs_sat26Dj6d = new $hs.Thunk();
                                hs_sat26Dj6d.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26Dj3F);
                                };
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCChar, hs_sat26Dj6d);
                            };
                            return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, hs_ptr26Dj3B, hs_n26Dj3C, hs_sat26Dj6c);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dj69, hs_sat26Dj6b);
                    }
                };
                var hs_sat26Dj68 = new $hs.Data(1);
                hs_sat26Dj68.data = [0];
                return hs_go26Dj3L.hscall(hs_str26Dj3s, hs_sat26Dj68);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dj66, hs_sat26Dj67);
        };
        var hs_sat26Dj63 = new $hs.Thunk();
        hs_sat26Dj63.evaluateOnce = function () {
            var hs_sat26Dj65 = new $hs.Thunk();
            hs_sat26Dj65.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_length.hscall(hs_str26Dj3s);
            };
            return $hs.modules.ForeignziMarshalziArray.hs_allocaArray0.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCChar, hs_sat26Dj65);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dj63, hs_sat26Dj64);
    };
    hs_sat26Dj6g.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
    };
    hs_wNUL25tppD.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCWchar, hs_sat26Dj6g);
    };
    hs_castCWcharToChar25tppG.evaluate = function (hs_ch26Dj3V) {
        var hs_sat26Dj6h = new $hs.Thunk();
        hs_sat26Dj6h.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCWchar, $hs.modules.GHCziNum.hs_zdfNumInt, hs_ch26Dj3V);
        };
        return $hs.modules.GHCziBase.hs_chr.hscall(hs_sat26Dj6h);
    };
    this.hs_peekCWString.evaluate = function (hs_cp26Dj3Y) {
        var hs_sat26Dj6j = new $hs.Func(1);
        hs_sat26Dj6j.evaluate = function (hs_cs26Dj41) {
            var hs_sat26Dj6k = new $hs.Thunk();
            hs_sat26Dj6k.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_map.hscall(hs_castCWcharToChar25tppG, hs_cs26Dj41);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dj6k);
        };
        var hs_sat26Dj6i = new $hs.Thunk();
        hs_sat26Dj6i.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziArray.hs_peekArray0.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCWchar, $hs.modules.ForeignziCziTypes.hs_zdfEqCWchar, hs_wNUL25tppD, hs_cp26Dj3Y);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dj6i, hs_sat26Dj6j);
    };
    this.hs_peekCWStringLen.evaluate = function (hs_ds26Dj45) {
        var hs_wild26Dj6m = hs_ds26Dj45;
        if (hs_ds26Dj45.notEvaluated) {
            hs_wild26Dj6m = hs_ds26Dj45.hscall();
        }
        var hs_cp26Dj4a = hs_wild26Dj6m.data[0];
        var hs_len26Dj49 = hs_wild26Dj6m.data[1];
        var hs_sat26Dj6n = new $hs.Func(1);
        hs_sat26Dj6n.evaluate = function (hs_cs26Dj4d) {
            var hs_sat26Dj6o = new $hs.Thunk();
            hs_sat26Dj6o.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_map.hscall(hs_castCWcharToChar25tppG, hs_cs26Dj4d);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dj6o);
        };
        var hs_sat26Dj6l = new $hs.Thunk();
        hs_sat26Dj6l.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziArray.hs_peekArray.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCWchar, hs_len26Dj49, hs_cp26Dj4a);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dj6l, hs_sat26Dj6n);
    };
    hs_castCharToCWchar25tppH.evaluate = function (hs_ch26Dj4h) {
        var hs_sat26Dj6p = new $hs.Thunk();
        hs_sat26Dj6p.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_ord.hscall(hs_ch26Dj4h);
        };
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCWchar, hs_sat26Dj6p);
    };
    hs_charsToCWchars25tppF.evaluate = function (hs_xs26Dj4k) {
        return $hs.modules.GHCziBase.hs_map.hscall(hs_castCharToCWchar25tppH, hs_xs26Dj4k);
    };
    hs_sat26Dj6q.evaluateOnce = function () {
        return $hs.modules.ForeignziMarshalziArray.hs_newArray0.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCWchar, hs_wNUL25tppD);
    };
    this.hs_newCWString.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dj6q, hs_charsToCWchars25tppF);
    };
    this.hs_newCWStringLen.evaluate = function (hs_str26Dj4o) {
        var hs_xs26Dj4p = new $hs.Thunk();
        hs_xs26Dj4p.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_map.hscall(hs_castCharToCWchar25tppH, hs_str26Dj4o);
        };
        var hs_sat26Dj6s = new $hs.Func(1);
        hs_sat26Dj6s.evaluate = function (hs_a26Dj4s) {
            var hs_sat26Dj6u = new $hs.Thunk();
            hs_sat26Dj6u.evaluateOnce = function () {
                return $hs.modules.GHCziList.hs_length.hscall(hs_xs26Dj4p);
            };
            var hs_sat26Dj6t = new $hs.Data(1);
            hs_sat26Dj6t.data = [hs_a26Dj4s, hs_sat26Dj6u];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dj6t);
        };
        var hs_sat26Dj6r = new $hs.Thunk();
        hs_sat26Dj6r.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziArray.hs_newArray.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCWchar, hs_xs26Dj4p);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dj6r, hs_sat26Dj6s);
    };
    this.hs_withCWString.evaluateOnce = function () {
        var hs_sat26Dj6v = new $hs.Thunk();
        hs_sat26Dj6v.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziArray.hs_withArray0.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCWchar, hs_wNUL25tppD);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dj6v, hs_charsToCWchars25tppF);
    };
    this.hs_withCWStringLen.evaluate = function (hs_str26Dj4z, hs_f26Dj4G) {
        var hs_sat26Dj6x = new $hs.Func(2);
        hs_sat26Dj6x.evaluate = function (hs_len26Dj4F, hs_ptr26Dj4E) {
            var hs_sat26Dj6z = new $hs.Data(1);
            hs_sat26Dj6z.data = [hs_ptr26Dj4E, hs_len26Dj4F];
            return hs_f26Dj4G.hscall(hs_sat26Dj6z);
        };
        var hs_sat26Dj6w = new $hs.Thunk();
        hs_sat26Dj6w.evaluateOnce = function () {
            var hs_sat26Dj6y = new $hs.Thunk();
            hs_sat26Dj6y.evaluateOnce = function () {
                return hs_charsToCWchars25tppF.hscall(hs_str26Dj4z);
            };
            return $hs.modules.ForeignziMarshalziArray.hs_withArrayLen.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCWchar, hs_sat26Dj6y);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dj6w, hs_sat26Dj6x);
    };
};

$hs.modules.GHCziIOziEncodingziLatin1 = new $hs.Module();
$hs.modules.GHCziIOziEncodingziLatin1.dependencies = ["GHC.CString", "GHC.Unit", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Classes", "GHC.IO.Buffer", "GHC.IO.Encoding.Failure", "GHC.IO.Encoding.Types", "GHC.Word"];
$hs.modules.GHCziIOziEncodingziLatin1.initBeforeDependencies = function () {
    this.hs_latin1zudecode = new $hs.Func(2);
    this.hs_latin1zuencode = new $hs.Func(2);
    this.hs_mkLatin1 = new $hs.Func(1);
    this.hs_latin1 = new $hs.Thunk();
    this.hs_latin1zucheckedzuencode = new $hs.Func(2);
    this.hs_mkLatin1zuchecked = new $hs.Func(1);
    this.hs_latin1zuchecked = new $hs.Thunk();
    this.hs_latin1zudecode.notEvaluated = true;
    this.hs_latin1zudecode.evaluate = function (hs_input26D1dR, hs_output26D1e6) {
        $hs.modules.GHCziIOziEncodingziLatin1.loadDependencies();
        return this.evaluate(hs_input26D1dR, hs_output26D1e6);
    };
    this.hs_latin1zuencode.notEvaluated = true;
    this.hs_latin1zuencode.evaluate = function (hs_input26D1g0, hs_output26D1gf) {
        $hs.modules.GHCziIOziEncodingziLatin1.loadDependencies();
        return this.evaluate(hs_input26D1g0, hs_output26D1gf);
    };
    this.hs_mkLatin1.notEvaluated = true;
    this.hs_mkLatin1.evaluate = function (hs_cfm26D1i4) {
        $hs.modules.GHCziIOziEncodingziLatin1.loadDependencies();
        return this.evaluate(hs_cfm26D1i4);
    };
    this.hs_latin1.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncodingziLatin1.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_latin1zucheckedzuencode.notEvaluated = true;
    this.hs_latin1zucheckedzuencode.evaluate = function (hs_input26D1if, hs_output26D1iu) {
        $hs.modules.GHCziIOziEncodingziLatin1.loadDependencies();
        return this.evaluate(hs_input26D1if, hs_output26D1iu);
    };
    this.hs_mkLatin1zuchecked.notEvaluated = true;
    this.hs_mkLatin1zuchecked.evaluate = function (hs_cfm26D1ko) {
        $hs.modules.GHCziIOziEncodingziLatin1.loadDependencies();
        return this.evaluate(hs_cfm26D1ko);
    };
    this.hs_latin1zuchecked.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncodingziLatin1.loadDependencies();
        return this.evaluateOnce();
    };
};
$hs.modules.GHCziIOziEncodingziLatin1.initAfterDependencies = function () {
    this.hs_latin1zudecode.notEvaluated = false;
    this.hs_latin1zuencode.notEvaluated = false;
    this.hs_mkLatin1.notEvaluated = false;
    this.hs_latin1zucheckedzuencode.notEvaluated = false;
    this.hs_mkLatin1zuchecked.notEvaluated = false;
    var hs_latin1zuDF25tcZW = new $hs.Func(1);
    this.hs_latin1zudecode.evaluate = function (hs_input26D1dR, hs_output26D1e6) {
        var hs_wild26D1eA = hs_input26D1dR;
        if (hs_input26D1dR.notEvaluated) {
            hs_wild26D1eA = hs_input26D1dR.hscall();
        }
        var hs_rb26D1e0 = hs_wild26D1eA.data[0];
        var hs_rb126D1e1 = hs_wild26D1eA.data[1];
        var hs_rb326D1fM = hs_wild26D1eA.data[4];
        var hs_rb426D1e4 = hs_wild26D1eA.data[5];
        var hs_iraw26D1e2 = new $hs.Data(1);
        hs_iraw26D1e2.data = [hs_rb26D1e0, hs_rb126D1e1];
        var hs_iw26D1e5 = new $hs.Data(1);
        hs_iw26D1e5.data = [hs_rb426D1e4];
        var hs_wild126D1f2 = hs_output26D1e6;
        if (hs_output26D1e6.notEvaluated) {
            hs_wild126D1f2 = hs_output26D1e6.hscall();
        }
        var hs_rb526D1ef = hs_wild126D1f2.data[0];
        var hs_rb626D1eg = hs_wild126D1f2.data[1];
        var hs_rb726D1ej = hs_wild126D1f2.data[3];
        var hs_rb926D1fO = hs_wild126D1f2.data[5];
        var hs_oraw26D1eh = new $hs.Data(1);
        hs_oraw26D1eh.data = [hs_rb526D1ef, hs_rb626D1eg];
        var hs_os26D1ek = new $hs.Data(1);
        hs_os26D1ek.data = [hs_rb726D1ej];
        var hs_done26D1fl = new $hs.Func(4);
        hs_done26D1fl.evaluate = function (hs_zddMonad26D1ew, hs_why26D1ex, hs_ir26D1eq, hs_ow26D1et) {
            var hs_ir126D1ey = hs_ir26D1eq;
            if (hs_ir26D1eq.notEvaluated) {
                hs_ir126D1ey = hs_ir26D1eq.hscall();
            }
            var hs_ow126D1fa = hs_ow26D1et;
            if (hs_ow26D1et.notEvaluated) {
                hs_ow126D1fa = hs_ow26D1et.hscall();
            }
            var hs_sat26D1kS = new $hs.Thunk();
            hs_sat26D1kS.evaluateOnce = function () {
                var hs_wild226D1l2 = hs_wild126D1f2;
                if (hs_wild126D1f2.notEvaluated) {
                    hs_wild226D1l2 = hs_wild126D1f2.hscall();
                }
                var hs_rb1026D1fd = hs_wild226D1l2.data[0];
                var hs_rb1126D1fe = hs_wild226D1l2.data[1];
                var hs_ds226D1ff = hs_wild226D1l2.data[2];
                var hs_rb1226D1fg = hs_wild226D1l2.data[3];
                var hs_rb1326D1fh = hs_wild226D1l2.data[4];
                var hs_tpl26D1l1 = hs_ow126D1fa;
                if (hs_ow126D1fa.notEvaluated) {
                    hs_tpl26D1l1 = hs_ow126D1fa.hscall();
                }
                var hs_tpl126D1fi = hs_tpl26D1l1.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb1026D1fd, hs_rb1126D1fe, hs_ds226D1ff, hs_rb1226D1fg, hs_rb1326D1fh, hs_tpl126D1fi];
                return $res;
            };
            var hs_sat26D1kT = new $hs.Thunk();
            hs_sat26D1kT.evaluateOnce = function () {
                var hs_wild226D1kX = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_ir126D1ey, hs_iw26D1e5);
                switch (hs_wild226D1kX.tag) {
                case 1:
                    var hs_wild326D1kZ = hs_wild26D1eA;
                    if (hs_wild26D1eA.notEvaluated) {
                        hs_wild326D1kZ = hs_wild26D1eA.hscall();
                    }
                    var hs_rb1026D1eK = hs_wild326D1kZ.data[0];
                    var hs_rb1126D1eL = hs_wild326D1kZ.data[1];
                    var hs_ds226D1eM = hs_wild326D1kZ.data[2];
                    var hs_rb1226D1eN = hs_wild326D1kZ.data[3];
                    var hs_rb1426D1eP = hs_wild326D1kZ.data[5];
                    var hs_tpl26D1kY = hs_ir126D1ey;
                    if (hs_ir126D1ey.notEvaluated) {
                        hs_tpl26D1kY = hs_ir126D1ey.hscall();
                    }
                    var hs_tpl126D1eO = hs_tpl26D1kY.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D1eK, hs_rb1126D1eL, hs_ds226D1eM, hs_rb1226D1eN, hs_tpl126D1eO, hs_rb1426D1eP];
                    return $res;
                case 2:
                    var hs_wild326D1kW = hs_wild26D1eA;
                    if (hs_wild26D1eA.notEvaluated) {
                        hs_wild326D1kW = hs_wild26D1eA.hscall();
                    }
                    var hs_rb1026D1eX = hs_wild326D1kW.data[0];
                    var hs_rb1126D1eY = hs_wild326D1kW.data[1];
                    var hs_ds226D1eZ = hs_wild326D1kW.data[2];
                    var hs_rb1226D1f0 = hs_wild326D1kW.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D1eX, hs_rb1126D1eY, hs_ds226D1eZ, hs_rb1226D1f0, 0, 0];
                    return $res;
                }
            };
            var hs_sat26D1kP = new $hs.Data(1);
            hs_sat26D1kP.data = [hs_why26D1ex, hs_sat26D1kT, hs_sat26D1kS];
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D1ew, hs_sat26D1kP);
        };
        var hs_loop26D1fH = new $hs.Func(2);
        hs_loop26D1fH.evaluate = function (hs_ir26D1fp, hs_ow26D1fs) {
            var hs_ir126D1fx = hs_ir26D1fp;
            if (hs_ir26D1fp.notEvaluated) {
                hs_ir126D1fx = hs_ir26D1fp.hscall();
            }
            var hs_ow126D1fv = hs_ow26D1fs;
            if (hs_ow26D1fs.notEvaluated) {
                hs_ow126D1fv = hs_ow26D1fs.hscall();
            }
            var hs_wild226D1kF = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_ow126D1fv, hs_os26D1ek);
            switch (hs_wild226D1kF.tag) {
            case 1:
                var hs_wild326D1kG = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_ir126D1fx, hs_iw26D1e5);
                switch (hs_wild326D1kG.tag) {
                case 1:
                    var hs_sat26D1kI = new $hs.Func(1);
                    hs_sat26D1kI.evaluate = function (hs_c026D1fB) {
                        var hs_sat26D1kK = new $hs.Func(1);
                        hs_sat26D1kK.evaluate = function (hs_owzq26D1fJ) {
                            var hs_sat26D1kN = new $hs.Thunk();
                            hs_sat26D1kN.evaluateOnce = function () {
                                var hs_sat26D1kO = new $hs.Data(1);
                                hs_sat26D1kO.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ir126D1fx, hs_sat26D1kO);
                            };
                            return hs_loop26D1fH.hscall(hs_sat26D1kN, hs_owzq26D1fJ);
                        };
                        var hs_sat26D1kJ = new $hs.Thunk();
                        hs_sat26D1kJ.evaluateOnce = function () {
                            var hs_sat26D1kL = new $hs.Thunk();
                            hs_sat26D1kL.evaluateOnce = function () {
                                var hs_sat26D1kM = new $hs.Thunk();
                                hs_sat26D1kM.evaluateOnce = function () {
                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziNum.hs_zdfNumInt, hs_c026D1fB);
                                };
                                return $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26D1kM);
                            };
                            return $hs.modules.GHCziIOziBuffer.hs_writeCharBuf.hscall(hs_oraw26D1eh, hs_ow126D1fv, hs_sat26D1kL);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1kJ, hs_sat26D1kK);
                    };
                    var hs_sat26D1kH = new $hs.Thunk();
                    hs_sat26D1kH.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_readWord8Buf.hscall(hs_iraw26D1e2, hs_ir126D1fx);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1kH, hs_sat26D1kI);
                case 2:
                    return hs_done26D1fl.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_InputUnderflow, hs_ir126D1fx, hs_ow126D1fv);
                }
            case 2:
                return hs_done26D1fl.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_OutputUnderflow, hs_ir126D1fx, hs_ow126D1fv);
            }
        };
        var hs_sat26D1ky = new $hs.Data(1);
        hs_sat26D1ky.data = [hs_rb926D1fO];
        var hs_sat26D1kx = new $hs.Data(1);
        hs_sat26D1kx.data = [hs_rb326D1fM];
        return hs_loop26D1fH.hscall(hs_sat26D1kx, hs_sat26D1ky);
    };
    hs_latin1zuDF25tcZW.evaluate = function (hs_cfm26D1fR) {
        var hs_sat26D1l5 = new $hs.Thunk();
        hs_sat26D1l5.evaluateOnce = function () {
            var hs_sat26D1l9 = new $hs.Thunk();
            hs_sat26D1l9.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziBase.hs_const, hs_sat26D1l9);
        };
        var hs_sat26D1l6 = new $hs.Thunk();
        hs_sat26D1l6.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26D1l7 = new $hs.Thunk();
        hs_sat26D1l7.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26D1l8 = new $hs.Thunk();
        hs_sat26D1l8.evaluateOnce = function () {
            return $hs.modules.GHCziIOziEncodingziFailure.hs_recoverDecode.hscall(hs_cfm26D1fR);
        };
        var hs_sat26D1l4 = new $hs.Data(1);
        hs_sat26D1l4.data = [$hs.modules.GHCziIOziEncodingziLatin1.hs_latin1zudecode, hs_sat26D1l8, hs_sat26D1l7, hs_sat26D1l6, hs_sat26D1l5];
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1l4);
    };
    this.hs_latin1zuencode.evaluate = function (hs_input26D1g0, hs_output26D1gf) {
        var hs_wild26D1gJ = hs_input26D1g0;
        if (hs_input26D1g0.notEvaluated) {
            hs_wild26D1gJ = hs_input26D1g0.hscall();
        }
        var hs_rb26D1g9 = hs_wild26D1gJ.data[0];
        var hs_rb126D1ga = hs_wild26D1gJ.data[1];
        var hs_rb326D1hY = hs_wild26D1gJ.data[4];
        var hs_rb426D1gd = hs_wild26D1gJ.data[5];
        var hs_iraw26D1gb = new $hs.Data(1);
        hs_iraw26D1gb.data = [hs_rb26D1g9, hs_rb126D1ga];
        var hs_iw26D1ge = new $hs.Data(1);
        hs_iw26D1ge.data = [hs_rb426D1gd];
        var hs_wild126D1hb = hs_output26D1gf;
        if (hs_output26D1gf.notEvaluated) {
            hs_wild126D1hb = hs_output26D1gf.hscall();
        }
        var hs_rb526D1go = hs_wild126D1hb.data[0];
        var hs_rb626D1gp = hs_wild126D1hb.data[1];
        var hs_rb726D1gs = hs_wild126D1hb.data[3];
        var hs_rb926D1i0 = hs_wild126D1hb.data[5];
        var hs_oraw26D1gq = new $hs.Data(1);
        hs_oraw26D1gq.data = [hs_rb526D1go, hs_rb626D1gp];
        var hs_os26D1gt = new $hs.Data(1);
        hs_os26D1gt.data = [hs_rb726D1gs];
        var hs_done26D1hu = new $hs.Func(4);
        hs_done26D1hu.evaluate = function (hs_zddMonad26D1gF, hs_why26D1gG, hs_ir26D1gz, hs_ow26D1gC) {
            var hs_ir126D1gH = hs_ir26D1gz;
            if (hs_ir26D1gz.notEvaluated) {
                hs_ir126D1gH = hs_ir26D1gz.hscall();
            }
            var hs_ow126D1hj = hs_ow26D1gC;
            if (hs_ow26D1gC.notEvaluated) {
                hs_ow126D1hj = hs_ow26D1gC.hscall();
            }
            var hs_sat26D1lw = new $hs.Thunk();
            hs_sat26D1lw.evaluateOnce = function () {
                var hs_wild226D1lG = hs_wild126D1hb;
                if (hs_wild126D1hb.notEvaluated) {
                    hs_wild226D1lG = hs_wild126D1hb.hscall();
                }
                var hs_rb1026D1hm = hs_wild226D1lG.data[0];
                var hs_rb1126D1hn = hs_wild226D1lG.data[1];
                var hs_ds226D1ho = hs_wild226D1lG.data[2];
                var hs_rb1226D1hp = hs_wild226D1lG.data[3];
                var hs_rb1326D1hq = hs_wild226D1lG.data[4];
                var hs_tpl26D1lF = hs_ow126D1hj;
                if (hs_ow126D1hj.notEvaluated) {
                    hs_tpl26D1lF = hs_ow126D1hj.hscall();
                }
                var hs_tpl126D1hr = hs_tpl26D1lF.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb1026D1hm, hs_rb1126D1hn, hs_ds226D1ho, hs_rb1226D1hp, hs_rb1326D1hq, hs_tpl126D1hr];
                return $res;
            };
            var hs_sat26D1lx = new $hs.Thunk();
            hs_sat26D1lx.evaluateOnce = function () {
                var hs_wild226D1lB = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_ir126D1gH, hs_iw26D1ge);
                switch (hs_wild226D1lB.tag) {
                case 1:
                    var hs_wild326D1lD = hs_wild26D1gJ;
                    if (hs_wild26D1gJ.notEvaluated) {
                        hs_wild326D1lD = hs_wild26D1gJ.hscall();
                    }
                    var hs_rb1026D1gT = hs_wild326D1lD.data[0];
                    var hs_rb1126D1gU = hs_wild326D1lD.data[1];
                    var hs_ds226D1gV = hs_wild326D1lD.data[2];
                    var hs_rb1226D1gW = hs_wild326D1lD.data[3];
                    var hs_rb1426D1gY = hs_wild326D1lD.data[5];
                    var hs_tpl26D1lC = hs_ir126D1gH;
                    if (hs_ir126D1gH.notEvaluated) {
                        hs_tpl26D1lC = hs_ir126D1gH.hscall();
                    }
                    var hs_tpl126D1gX = hs_tpl26D1lC.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D1gT, hs_rb1126D1gU, hs_ds226D1gV, hs_rb1226D1gW, hs_tpl126D1gX, hs_rb1426D1gY];
                    return $res;
                case 2:
                    var hs_wild326D1lA = hs_wild26D1gJ;
                    if (hs_wild26D1gJ.notEvaluated) {
                        hs_wild326D1lA = hs_wild26D1gJ.hscall();
                    }
                    var hs_rb1026D1h6 = hs_wild326D1lA.data[0];
                    var hs_rb1126D1h7 = hs_wild326D1lA.data[1];
                    var hs_ds226D1h8 = hs_wild326D1lA.data[2];
                    var hs_rb1226D1h9 = hs_wild326D1lA.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D1h6, hs_rb1126D1h7, hs_ds226D1h8, hs_rb1226D1h9, 0, 0];
                    return $res;
                }
            };
            var hs_sat26D1lt = new $hs.Data(1);
            hs_sat26D1lt.data = [hs_why26D1gG, hs_sat26D1lx, hs_sat26D1lw];
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D1gF, hs_sat26D1lt);
        };
        var hs_loop26D1hU = new $hs.Func(2);
        hs_loop26D1hU.evaluate = function (hs_ir26D1hy, hs_ow26D1hB) {
            var hs_ir126D1hG = hs_ir26D1hy;
            if (hs_ir26D1hy.notEvaluated) {
                hs_ir126D1hG = hs_ir26D1hy.hscall();
            }
            var hs_ow126D1hE = hs_ow26D1hB;
            if (hs_ow26D1hB.notEvaluated) {
                hs_ow126D1hE = hs_ow26D1hB.hscall();
            }
            var hs_wild226D1li = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_ow126D1hE, hs_os26D1gt);
            switch (hs_wild226D1li.tag) {
            case 1:
                var hs_wild326D1lj = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_ir126D1hG, hs_iw26D1ge);
                switch (hs_wild326D1lj.tag) {
                case 1:
                    var hs_sat26D1ll = new $hs.Func(1);
                    hs_sat26D1ll.evaluate = function (hs_ds226D1hK) {
                        var hs_wild426D1ln = hs_ds226D1hK;
                        if (hs_ds226D1hK.notEvaluated) {
                            hs_wild426D1ln = hs_ds226D1hK.hscall();
                        }
                        var hs_c26D1hO = hs_wild426D1ln.data[0];
                        var hs_irzq26D1hS = hs_wild426D1ln.data[1];
                        var hs_sat26D1lo = new $hs.Thunk();
                        hs_sat26D1lo.evaluateOnce = function () {
                            var hs_sat26D1lr = new $hs.Thunk();
                            hs_sat26D1lr.evaluateOnce = function () {
                                var hs_sat26D1ls = new $hs.Data(1);
                                hs_sat26D1ls.data = [1];
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126D1hE, hs_sat26D1ls);
                            };
                            return hs_loop26D1hU.hscall(hs_irzq26D1hS, hs_sat26D1lr);
                        };
                        var hs_sat26D1lm = new $hs.Thunk();
                        hs_sat26D1lm.evaluateOnce = function () {
                            var hs_sat26D1lp = new $hs.Thunk();
                            hs_sat26D1lp.evaluateOnce = function () {
                                var hs_sat26D1lq = new $hs.Thunk();
                                hs_sat26D1lq.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26D1hO);
                                };
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26D1lq);
                            };
                            return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D1gq, hs_ow126D1hE, hs_sat26D1lp);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1lm, hs_sat26D1lo);
                    };
                    var hs_sat26D1lk = new $hs.Thunk();
                    hs_sat26D1lk.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_readCharBuf.hscall(hs_iraw26D1gb, hs_ir126D1hG);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1lk, hs_sat26D1ll);
                case 2:
                    return hs_done26D1hu.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_InputUnderflow, hs_ir126D1hG, hs_ow126D1hE);
                }
            case 2:
                return hs_done26D1hu.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_OutputUnderflow, hs_ir126D1hG, hs_ow126D1hE);
            }
        };
        var hs_sat26D1lb = new $hs.Data(1);
        hs_sat26D1lb.data = [hs_rb926D1i0];
        var hs_sat26D1la = new $hs.Data(1);
        hs_sat26D1la.data = [hs_rb326D1hY];
        return hs_loop26D1hU.hscall(hs_sat26D1la, hs_sat26D1lb);
    };
    this.hs_mkLatin1.evaluate = function (hs_cfm26D1i4) {
        var hs_sat26D1lJ = new $hs.Thunk();
        hs_sat26D1lJ.evaluateOnce = function () {
            var hs_sat26D1lM = new $hs.Thunk();
            hs_sat26D1lM.evaluateOnce = function () {
                var hs_sat26D1lQ = new $hs.Thunk();
                hs_sat26D1lQ.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziBase.hs_const, hs_sat26D1lQ);
            };
            var hs_sat26D1lN = new $hs.Thunk();
            hs_sat26D1lN.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26D1lO = new $hs.Thunk();
            hs_sat26D1lO.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26D1lP = new $hs.Thunk();
            hs_sat26D1lP.evaluateOnce = function () {
                return $hs.modules.GHCziIOziEncodingziFailure.hs_recoverEncode.hscall(hs_cfm26D1i4);
            };
            var hs_sat26D1lL = new $hs.Data(1);
            hs_sat26D1lL.data = [$hs.modules.GHCziIOziEncodingziLatin1.hs_latin1zuencode, hs_sat26D1lP, hs_sat26D1lO, hs_sat26D1lN, hs_sat26D1lM];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1lL);
        };
        var hs_sat26D1lK = new $hs.Thunk();
        hs_sat26D1lK.evaluateOnce = function () {
            return hs_latin1zuDF25tcZW.hscall(hs_cfm26D1i4);
        };
        var hs_sat26D1lI = new $hs.Thunk();
        hs_sat26D1lI.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ISO8859-1\x00");
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26D1lI, hs_sat26D1lK, hs_sat26D1lJ];
        return $res;
    };
    this.hs_latin1.evaluateOnce = function () {
        return $hs.modules.GHCziIOziEncodingziLatin1.hs_mkLatin1.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_ErrorOnCodingFailure);
    };
    this.hs_latin1zucheckedzuencode.evaluate = function (hs_input26D1if, hs_output26D1iu) {
        var hs_wild26D1iY = hs_input26D1if;
        if (hs_input26D1if.notEvaluated) {
            hs_wild26D1iY = hs_input26D1if.hscall();
        }
        var hs_rb26D1io = hs_wild26D1iY.data[0];
        var hs_rb126D1ip = hs_wild26D1iY.data[1];
        var hs_rb326D1ki = hs_wild26D1iY.data[4];
        var hs_rb426D1is = hs_wild26D1iY.data[5];
        var hs_iraw26D1iq = new $hs.Data(1);
        hs_iraw26D1iq.data = [hs_rb26D1io, hs_rb126D1ip];
        var hs_iw26D1it = new $hs.Data(1);
        hs_iw26D1it.data = [hs_rb426D1is];
        var hs_wild126D1jq = hs_output26D1iu;
        if (hs_output26D1iu.notEvaluated) {
            hs_wild126D1jq = hs_output26D1iu.hscall();
        }
        var hs_rb526D1iD = hs_wild126D1jq.data[0];
        var hs_rb626D1iE = hs_wild126D1jq.data[1];
        var hs_rb726D1iH = hs_wild126D1jq.data[3];
        var hs_rb926D1kk = hs_wild126D1jq.data[5];
        var hs_oraw26D1iF = new $hs.Data(1);
        hs_oraw26D1iF.data = [hs_rb526D1iD, hs_rb626D1iE];
        var hs_os26D1iI = new $hs.Data(1);
        hs_os26D1iI.data = [hs_rb726D1iH];
        var hs_done26D1jJ = new $hs.Func(4);
        hs_done26D1jJ.evaluate = function (hs_zddMonad26D1iU, hs_why26D1iV, hs_ir26D1iO, hs_ow26D1iR) {
            var hs_ir126D1iW = hs_ir26D1iO;
            if (hs_ir26D1iO.notEvaluated) {
                hs_ir126D1iW = hs_ir26D1iO.hscall();
            }
            var hs_ow126D1jy = hs_ow26D1iR;
            if (hs_ow26D1iR.notEvaluated) {
                hs_ow126D1jy = hs_ow26D1iR.hscall();
            }
            var hs_sat26D1mg = new $hs.Thunk();
            hs_sat26D1mg.evaluateOnce = function () {
                var hs_wild226D1mq = hs_wild126D1jq;
                if (hs_wild126D1jq.notEvaluated) {
                    hs_wild226D1mq = hs_wild126D1jq.hscall();
                }
                var hs_rb1026D1jB = hs_wild226D1mq.data[0];
                var hs_rb1126D1jC = hs_wild226D1mq.data[1];
                var hs_ds226D1jD = hs_wild226D1mq.data[2];
                var hs_rb1226D1jE = hs_wild226D1mq.data[3];
                var hs_rb1326D1jF = hs_wild226D1mq.data[4];
                var hs_tpl26D1mp = hs_ow126D1jy;
                if (hs_ow126D1jy.notEvaluated) {
                    hs_tpl26D1mp = hs_ow126D1jy.hscall();
                }
                var hs_tpl126D1jG = hs_tpl26D1mp.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb1026D1jB, hs_rb1126D1jC, hs_ds226D1jD, hs_rb1226D1jE, hs_rb1326D1jF, hs_tpl126D1jG];
                return $res;
            };
            var hs_sat26D1mh = new $hs.Thunk();
            hs_sat26D1mh.evaluateOnce = function () {
                var hs_wild226D1ml = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_ir126D1iW, hs_iw26D1it);
                switch (hs_wild226D1ml.tag) {
                case 1:
                    var hs_wild326D1mn = hs_wild26D1iY;
                    if (hs_wild26D1iY.notEvaluated) {
                        hs_wild326D1mn = hs_wild26D1iY.hscall();
                    }
                    var hs_rb1026D1j8 = hs_wild326D1mn.data[0];
                    var hs_rb1126D1j9 = hs_wild326D1mn.data[1];
                    var hs_ds226D1ja = hs_wild326D1mn.data[2];
                    var hs_rb1226D1jb = hs_wild326D1mn.data[3];
                    var hs_rb1426D1jd = hs_wild326D1mn.data[5];
                    var hs_tpl26D1mm = hs_ir126D1iW;
                    if (hs_ir126D1iW.notEvaluated) {
                        hs_tpl26D1mm = hs_ir126D1iW.hscall();
                    }
                    var hs_tpl126D1jc = hs_tpl26D1mm.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D1j8, hs_rb1126D1j9, hs_ds226D1ja, hs_rb1226D1jb, hs_tpl126D1jc, hs_rb1426D1jd];
                    return $res;
                case 2:
                    var hs_wild326D1mk = hs_wild26D1iY;
                    if (hs_wild26D1iY.notEvaluated) {
                        hs_wild326D1mk = hs_wild26D1iY.hscall();
                    }
                    var hs_rb1026D1jl = hs_wild326D1mk.data[0];
                    var hs_rb1126D1jm = hs_wild326D1mk.data[1];
                    var hs_ds226D1jn = hs_wild326D1mk.data[2];
                    var hs_rb1226D1jo = hs_wild326D1mk.data[3];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb1026D1jl, hs_rb1126D1jm, hs_ds226D1jn, hs_rb1226D1jo, 0, 0];
                    return $res;
                }
            };
            var hs_sat26D1md = new $hs.Data(1);
            hs_sat26D1md.data = [hs_why26D1iV, hs_sat26D1mh, hs_sat26D1mg];
            return $hs.modules.GHCziBase.hs_return.hscall(hs_zddMonad26D1iU, hs_sat26D1md);
        };
        var hs_loop26D1ke = new $hs.Func(2);
        hs_loop26D1ke.evaluate = function (hs_ir26D1jN, hs_ow26D1jQ) {
            var hs_ir126D1jU = hs_ir26D1jN;
            if (hs_ir26D1jN.notEvaluated) {
                hs_ir126D1jU = hs_ir26D1jN.hscall();
            }
            var hs_ow126D1jV = hs_ow26D1jQ;
            if (hs_ow26D1jQ.notEvaluated) {
                hs_ow126D1jV = hs_ow26D1jQ.hscall();
            }
            var hs_invalid26D1jW = new $hs.Thunk();
            hs_invalid26D1jW.evaluateOnce = function () {
                return hs_done26D1jJ.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_InvalidSequence, hs_ir126D1jU, hs_ow126D1jV);
            };
            var hs_wild226D1lZ = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_ow126D1jV, hs_os26D1iI);
            switch (hs_wild226D1lZ.tag) {
            case 1:
                var hs_wild326D1m0 = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_ir126D1jU, hs_iw26D1it);
                switch (hs_wild326D1m0.tag) {
                case 1:
                    var hs_sat26D1m2 = new $hs.Func(1);
                    hs_sat26D1m2.evaluate = function (hs_ds226D1k1) {
                        var hs_wild426D1m3 = hs_ds226D1k1;
                        if (hs_ds226D1k1.notEvaluated) {
                            hs_wild426D1m3 = hs_ds226D1k1.hscall();
                        }
                        var hs_c26D1k5 = hs_wild426D1m3.data[0];
                        var hs_irzq26D1kc = hs_wild426D1m3.data[1];
                        var hs_sat26D1m4 = new $hs.Data(1);
                        hs_sat26D1m4.data = [255];
                        var hs_sat26D1m5 = new $hs.Thunk();
                        hs_sat26D1m5.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26D1k5);
                        };
                        var hs_wild526D1m6 = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D1m5, hs_sat26D1m4);
                        switch (hs_wild526D1m6.tag) {
                        case 1:
                            var hs_sat26D1m8 = new $hs.Thunk();
                            hs_sat26D1m8.evaluateOnce = function () {
                                var hs_sat26D1mb = new $hs.Thunk();
                                hs_sat26D1mb.evaluateOnce = function () {
                                    var hs_sat26D1mc = new $hs.Data(1);
                                    hs_sat26D1mc.data = [1];
                                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_ow126D1jV, hs_sat26D1mc);
                                };
                                return hs_loop26D1ke.hscall(hs_irzq26D1kc, hs_sat26D1mb);
                            };
                            var hs_sat26D1m7 = new $hs.Thunk();
                            hs_sat26D1m7.evaluateOnce = function () {
                                var hs_sat26D1m9 = new $hs.Thunk();
                                hs_sat26D1m9.evaluateOnce = function () {
                                    var hs_sat26D1ma = new $hs.Thunk();
                                    hs_sat26D1ma.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26D1k5);
                                    };
                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26D1ma);
                                };
                                return $hs.modules.GHCziIOziBuffer.hs_writeWord8Buf.hscall(hs_oraw26D1iF, hs_ow126D1jV, hs_sat26D1m9);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1m7, hs_sat26D1m8);
                        case 2:
                            if (hs_invalid26D1jW.notEvaluated) {
                                return hs_invalid26D1jW.hscall();
                            } else {
                                return hs_invalid26D1jW;
                            }
                        }
                    };
                    var hs_sat26D1m1 = new $hs.Thunk();
                    hs_sat26D1m1.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_readCharBuf.hscall(hs_iraw26D1iq, hs_ir126D1jU);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1m1, hs_sat26D1m2);
                case 2:
                    return hs_done26D1jJ.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_InputUnderflow, hs_ir126D1jU, hs_ow126D1jV);
                }
            case 2:
                return hs_done26D1jJ.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziEncodingziTypes.hs_OutputUnderflow, hs_ir126D1jU, hs_ow126D1jV);
            }
        };
        var hs_sat26D1lS = new $hs.Data(1);
        hs_sat26D1lS.data = [hs_rb926D1kk];
        var hs_sat26D1lR = new $hs.Data(1);
        hs_sat26D1lR.data = [hs_rb326D1ki];
        return hs_loop26D1ke.hscall(hs_sat26D1lR, hs_sat26D1lS);
    };
    this.hs_mkLatin1zuchecked.evaluate = function (hs_cfm26D1ko) {
        var hs_sat26D1mt = new $hs.Thunk();
        hs_sat26D1mt.evaluateOnce = function () {
            var hs_sat26D1mw = new $hs.Thunk();
            hs_sat26D1mw.evaluateOnce = function () {
                var hs_sat26D1mA = new $hs.Thunk();
                hs_sat26D1mA.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziBase.hs_const, hs_sat26D1mA);
            };
            var hs_sat26D1mx = new $hs.Thunk();
            hs_sat26D1mx.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26D1my = new $hs.Thunk();
            hs_sat26D1my.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26D1mz = new $hs.Thunk();
            hs_sat26D1mz.evaluateOnce = function () {
                return $hs.modules.GHCziIOziEncodingziFailure.hs_recoverEncode.hscall(hs_cfm26D1ko);
            };
            var hs_sat26D1mv = new $hs.Data(1);
            hs_sat26D1mv.data = [$hs.modules.GHCziIOziEncodingziLatin1.hs_latin1zucheckedzuencode, hs_sat26D1mz, hs_sat26D1my, hs_sat26D1mx, hs_sat26D1mw];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D1mv);
        };
        var hs_sat26D1mu = new $hs.Thunk();
        hs_sat26D1mu.evaluateOnce = function () {
            return hs_latin1zuDF25tcZW.hscall(hs_cfm26D1ko);
        };
        var hs_sat26D1ms = new $hs.Thunk();
        hs_sat26D1ms.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ISO8859-1(checked)\x00");
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26D1ms, hs_sat26D1mu, hs_sat26D1mt];
        return $res;
    };
    this.hs_latin1zuchecked.evaluateOnce = function () {
        return $hs.modules.GHCziIOziEncodingziLatin1.hs_mkLatin1zuchecked.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_ErrorOnCodingFailure);
    };
};
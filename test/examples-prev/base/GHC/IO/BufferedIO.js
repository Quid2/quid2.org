
$hs.modules.GHCziIOziBufferedIO = new $hs.Module();
$hs.modules.GHCziIOziBufferedIO.dependencies = ["Data.Maybe", "GHC.Base", "GHC.Num", "GHC.IO.Buffer", "GHC.IO.Device", "GHC.Ptr"];
$hs.modules.GHCziIOziBufferedIO.initBeforeDependencies = function () {
    this.hs_newBuffer = new $hs.Func(1);
    this.hs_fillReadBuffer = new $hs.Func(1);
    this.hs_fillReadBuffer0 = new $hs.Func(1);
    this.hs_emptyWriteBuffer = new $hs.Func(1);
    this.hs_flushWriteBuffer = new $hs.Func(1);
    this.hs_flushWriteBuffer0 = new $hs.Func(1);
    this.hs_zddmemptyWriteBuffer = new $hs.Func(3);
    this.hs_writeBufNonBlocking = new $hs.Func(3);
    this.hs_writeBuf = new $hs.Func(3);
    this.hs_readBufNonBlocking = new $hs.Func(3);
    this.hs_readBuf = new $hs.Func(3);
    this.hs_DZCBufferedIO = new $hs.Func(6);
    this.hs_newBuffer.notEvaluated = true;
    this.hs_newBuffer.evaluate = function (hs_tpl26DouU) {
        $hs.modules.GHCziIOziBufferedIO.loadDependencies();
        return this.evaluate(hs_tpl26DouU);
    };
    this.hs_fillReadBuffer.notEvaluated = true;
    this.hs_fillReadBuffer.evaluate = function (hs_tpl26Dov4) {
        $hs.modules.GHCziIOziBufferedIO.loadDependencies();
        return this.evaluate(hs_tpl26Dov4);
    };
    this.hs_fillReadBuffer0.notEvaluated = true;
    this.hs_fillReadBuffer0.evaluate = function (hs_tpl26Dove) {
        $hs.modules.GHCziIOziBufferedIO.loadDependencies();
        return this.evaluate(hs_tpl26Dove);
    };
    this.hs_emptyWriteBuffer.notEvaluated = true;
    this.hs_emptyWriteBuffer.evaluate = function (hs_tpl26Dovo) {
        $hs.modules.GHCziIOziBufferedIO.loadDependencies();
        return this.evaluate(hs_tpl26Dovo);
    };
    this.hs_flushWriteBuffer.notEvaluated = true;
    this.hs_flushWriteBuffer.evaluate = function (hs_tpl26Dovy) {
        $hs.modules.GHCziIOziBufferedIO.loadDependencies();
        return this.evaluate(hs_tpl26Dovy);
    };
    this.hs_flushWriteBuffer0.notEvaluated = true;
    this.hs_flushWriteBuffer0.evaluate = function (hs_tpl26DovI) {
        $hs.modules.GHCziIOziBufferedIO.loadDependencies();
        return this.evaluate(hs_tpl26DovI);
    };
    this.hs_zddmemptyWriteBuffer.notEvaluated = true;
    this.hs_zddmemptyWriteBuffer.evaluate = function (hs_zddBufferedIO26Dow6, hs_zudev26Dow7, hs_buf26DovU) {
        $hs.modules.GHCziIOziBufferedIO.loadDependencies();
        return this.evaluate(hs_zddBufferedIO26Dow6, hs_zudev26Dow7, hs_buf26DovU);
    };
    this.hs_writeBufNonBlocking.notEvaluated = true;
    this.hs_writeBufNonBlocking.evaluate = function (hs_zddRawIO26Dowg, hs_dev26Dowh, hs_bbuf26Dowc) {
        $hs.modules.GHCziIOziBufferedIO.loadDependencies();
        return this.evaluate(hs_zddRawIO26Dowg, hs_dev26Dowh, hs_bbuf26Dowc);
    };
    this.hs_writeBuf.notEvaluated = true;
    this.hs_writeBuf.evaluate = function (hs_zddRawIO26DowA, hs_dev26DowB, hs_bbuf26Doww) {
        $hs.modules.GHCziIOziBufferedIO.loadDependencies();
        return this.evaluate(hs_zddRawIO26DowA, hs_dev26DowB, hs_bbuf26Doww);
    };
    this.hs_readBufNonBlocking.notEvaluated = true;
    this.hs_readBufNonBlocking.evaluate = function (hs_zddRawIO26Dox2, hs_dev26Dox3, hs_bbuf26DowY) {
        $hs.modules.GHCziIOziBufferedIO.loadDependencies();
        return this.evaluate(hs_zddRawIO26Dox2, hs_dev26Dox3, hs_bbuf26DowY);
    };
    this.hs_readBuf.notEvaluated = true;
    this.hs_readBuf.evaluate = function (hs_zddRawIO26DoxI, hs_dev26DoxJ, hs_bbuf26DoxE) {
        $hs.modules.GHCziIOziBufferedIO.loadDependencies();
        return this.evaluate(hs_zddRawIO26DoxI, hs_dev26DoxJ, hs_bbuf26DoxE);
    };
    this.hs_DZCBufferedIO.notEvaluated = true;
    this.hs_DZCBufferedIO.evaluate = function (hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziIOziBufferedIO.loadDependencies();
        return this.evaluate(hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziIOziBufferedIO.initAfterDependencies = function () {
    this.hs_newBuffer.notEvaluated = false;
    this.hs_fillReadBuffer.notEvaluated = false;
    this.hs_fillReadBuffer0.notEvaluated = false;
    this.hs_emptyWriteBuffer.notEvaluated = false;
    this.hs_flushWriteBuffer.notEvaluated = false;
    this.hs_flushWriteBuffer0.notEvaluated = false;
    this.hs_zddmemptyWriteBuffer.notEvaluated = false;
    this.hs_writeBufNonBlocking.notEvaluated = false;
    this.hs_writeBuf.notEvaluated = false;
    this.hs_readBufNonBlocking.notEvaluated = false;
    this.hs_readBuf.notEvaluated = false;
    this.hs_DZCBufferedIO.notEvaluated = false;
    this.hs_newBuffer.evaluate = function (hs_tpl26DouU) {
        var hs_tpl26Doyb = hs_tpl26DouU;
        if (hs_tpl26DouU.notEvaluated) {
            hs_tpl26Doyb = hs_tpl26DouU.hscall();
        }
        var hs_tpl26Dov2 = hs_tpl26Doyb.data[0];
        if (hs_tpl26Dov2.notEvaluated) {
            return hs_tpl26Dov2.hscall();
        } else {
            return hs_tpl26Dov2;
        }
    };
    this.hs_fillReadBuffer.evaluate = function (hs_tpl26Dov4) {
        var hs_tpl26Doyi = hs_tpl26Dov4;
        if (hs_tpl26Dov4.notEvaluated) {
            hs_tpl26Doyi = hs_tpl26Dov4.hscall();
        }
        var hs_tpl26Dovc = hs_tpl26Doyi.data[1];
        if (hs_tpl26Dovc.notEvaluated) {
            return hs_tpl26Dovc.hscall();
        } else {
            return hs_tpl26Dovc;
        }
    };
    this.hs_fillReadBuffer0.evaluate = function (hs_tpl26Dove) {
        var hs_tpl26Doyo = hs_tpl26Dove;
        if (hs_tpl26Dove.notEvaluated) {
            hs_tpl26Doyo = hs_tpl26Dove.hscall();
        }
        var hs_tpl26Dovm = hs_tpl26Doyo.data[2];
        if (hs_tpl26Dovm.notEvaluated) {
            return hs_tpl26Dovm.hscall();
        } else {
            return hs_tpl26Dovm;
        }
    };
    this.hs_emptyWriteBuffer.evaluate = function (hs_tpl26Dovo) {
        var hs_tpl26Doyu = hs_tpl26Dovo;
        if (hs_tpl26Dovo.notEvaluated) {
            hs_tpl26Doyu = hs_tpl26Dovo.hscall();
        }
        var hs_tpl26Dovw = hs_tpl26Doyu.data[3];
        if (hs_tpl26Dovw.notEvaluated) {
            return hs_tpl26Dovw.hscall();
        } else {
            return hs_tpl26Dovw;
        }
    };
    this.hs_flushWriteBuffer.evaluate = function (hs_tpl26Dovy) {
        var hs_tpl26DoyA = hs_tpl26Dovy;
        if (hs_tpl26Dovy.notEvaluated) {
            hs_tpl26DoyA = hs_tpl26Dovy.hscall();
        }
        var hs_tpl26DovG = hs_tpl26DoyA.data[4];
        if (hs_tpl26DovG.notEvaluated) {
            return hs_tpl26DovG.hscall();
        } else {
            return hs_tpl26DovG;
        }
    };
    this.hs_flushWriteBuffer0.evaluate = function (hs_tpl26DovI) {
        var hs_tpl26DoyG = hs_tpl26DovI;
        if (hs_tpl26DovI.notEvaluated) {
            hs_tpl26DoyG = hs_tpl26DovI.hscall();
        }
        var hs_tpl26DovQ = hs_tpl26DoyG.data[5];
        if (hs_tpl26DovQ.notEvaluated) {
            return hs_tpl26DovQ.hscall();
        } else {
            return hs_tpl26DovQ;
        }
    };
    this.hs_zddmemptyWriteBuffer.evaluate = function (hs_zddBufferedIO26Dow6, hs_zudev26Dow7, hs_buf26DovU) {
        var hs_sat26DoyP = new $hs.Thunk();
        hs_sat26DoyP.evaluateOnce = function () {
            var hs_wild26DoyL = hs_buf26DovU;
            if (hs_buf26DovU.notEvaluated) {
                hs_wild26DoyL = hs_buf26DovU.hscall();
            }
            var hs_rb26Dow2 = hs_wild26DoyL.data[0];
            var hs_rb126Dow3 = hs_wild26DoyL.data[1];
            var hs_rb226Dow4 = hs_wild26DoyL.data[3];
            var $res = new $hs.Data(1);
            $res.data = [hs_rb26Dow2, hs_rb126Dow3, $hs.modules.GHCziIOziBuffer.hs_WriteBuffer, hs_rb226Dow4, 0, 0];
            return $res;
        };
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoyP);
    };
    this.hs_writeBufNonBlocking.evaluate = function (hs_zddRawIO26Dowg, hs_dev26Dowh, hs_bbuf26Dowc) {
        var hs_bytes26Dowd = new $hs.Thunk();
        hs_bytes26Dowd.evaluateOnce = function () {
            return $hs.modules.GHCziIOziBuffer.hs_bufferElems.hscall(hs_bbuf26Dowc);
        };
        var hs_sat26DoyS = new $hs.Func(1);
        hs_sat26DoyS.evaluate = function (hs_res26Dowo) {
            var hs_sat26DoyQ = new $hs.Thunk();
            hs_sat26DoyQ.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBuffer.hs_bufferAdjustL.hscall(hs_res26Dowo, hs_bbuf26Dowc);
            };
            var hs_sat26DoyR = new $hs.Data(1);
            hs_sat26DoyR.data = [hs_res26Dowo, hs_sat26DoyQ];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoyR);
        };
        var hs_sat26DoyX = new $hs.Thunk();
        hs_sat26DoyX.evaluateOnce = function () {
            var hs_sat26DoyV = new $hs.Func(1);
            hs_sat26DoyV.evaluate = function (hs_ptr26Dowi) {
                var hs_sat26DoyU = new $hs.Thunk();
                hs_sat26DoyU.evaluateOnce = function () {
                    var hs_sat26DoyT = new $hs.Thunk();
                    hs_sat26DoyT.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_bbuf26Dowc);
                    };
                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dowi, hs_sat26DoyT);
                };
                return $hs.modules.GHCziIOziDevice.hs_writeNonBlocking.hscall(hs_zddRawIO26Dowg, hs_dev26Dowh, hs_sat26DoyU, hs_bytes26Dowd);
            };
            var hs_sat26DoyW = new $hs.Thunk();
            hs_sat26DoyW.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBuffer.hs_withBuffer.hscall(hs_bbuf26Dowc);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoyW, hs_sat26DoyV);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoyX, hs_sat26DoyS);
    };
    this.hs_writeBuf.evaluate = function (hs_zddRawIO26DowA, hs_dev26DowB, hs_bbuf26Doww) {
        var hs_bytes26Dowx = new $hs.Thunk();
        hs_bytes26Dowx.evaluateOnce = function () {
            return $hs.modules.GHCziIOziBuffer.hs_bufferElems.hscall(hs_bbuf26Doww);
        };
        var hs_sat26Doz2 = new $hs.Thunk();
        hs_sat26Doz2.evaluateOnce = function () {
            var hs_sat26Doz1 = new $hs.Thunk();
            hs_sat26Doz1.evaluateOnce = function () {
                var hs_wild26DoyY = hs_bbuf26Doww;
                if (hs_bbuf26Doww.notEvaluated) {
                    hs_wild26DoyY = hs_bbuf26Doww.hscall();
                }
                var hs_rb26DowO = hs_wild26DoyY.data[0];
                var hs_rb126DowP = hs_wild26DoyY.data[1];
                var hs_ds26DowQ = hs_wild26DoyY.data[2];
                var hs_rb226DowR = hs_wild26DoyY.data[3];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb26DowO, hs_rb126DowP, hs_ds26DowQ, hs_rb226DowR, 0, 0];
                return $res;
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Doz1);
        };
        var hs_sat26Doz7 = new $hs.Thunk();
        hs_sat26Doz7.evaluateOnce = function () {
            var hs_sat26Doz5 = new $hs.Func(1);
            hs_sat26Doz5.evaluate = function (hs_ptr26DowC) {
                var hs_sat26Doz4 = new $hs.Thunk();
                hs_sat26Doz4.evaluateOnce = function () {
                    var hs_sat26Doz3 = new $hs.Thunk();
                    hs_sat26Doz3.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_bbuf26Doww);
                    };
                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DowC, hs_sat26Doz3);
                };
                return $hs.modules.GHCziIOziDevice.hs_write.hscall(hs_zddRawIO26DowA, hs_dev26DowB, hs_sat26Doz4, hs_bytes26Dowx);
            };
            var hs_sat26Doz6 = new $hs.Thunk();
            hs_sat26Doz6.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBuffer.hs_withBuffer.hscall(hs_bbuf26Doww);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Doz6, hs_sat26Doz5);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Doz7, hs_sat26Doz2);
    };
    this.hs_readBufNonBlocking.evaluate = function (hs_zddRawIO26Dox2, hs_dev26Dox3, hs_bbuf26DowY) {
        var hs_bytes26DowZ = new $hs.Thunk();
        hs_bytes26DowZ.evaluateOnce = function () {
            return $hs.modules.GHCziIOziBuffer.hs_bufferAvailable.hscall(hs_bbuf26DowY);
        };
        var hs_sat26Dozg = new $hs.Func(1);
        hs_sat26Dozg.evaluate = function (hs_res26Doxa) {
            var hs_wild26Doz8 = hs_res26Doxa;
            if (hs_res26Doxa.notEvaluated) {
                hs_wild26Doz8 = hs_res26Doxa.hscall();
            }
            switch (hs_wild26Doz8.tag) {
            case 1:
                var hs_sat26Doz9 = new $hs.Data(1);
                hs_sat26Doz9.data = [$hs.modules.DataziMaybe.hs_Nothing, hs_bbuf26DowY];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Doz9);
            case 2:
                var hs_n26Doxe = hs_wild26Doz8.data[0];
                var hs_sat26Dozd = new $hs.Thunk();
                hs_sat26Dozd.evaluateOnce = function () {
                    var hs_wild126Doxn = hs_bbuf26DowY;
                    if (hs_bbuf26DowY.notEvaluated) {
                        hs_wild126Doxn = hs_bbuf26DowY.hscall();
                    }
                    var hs_rb26Doxr = hs_wild126Doxn.data[0];
                    var hs_rb126Doxs = hs_wild126Doxn.data[1];
                    var hs_ds26Doxt = hs_wild126Doxn.data[2];
                    var hs_rb226Doxu = hs_wild126Doxn.data[3];
                    var hs_rb326Doxv = hs_wild126Doxn.data[4];
                    var hs_sat26Dozc = new $hs.Thunk();
                    hs_sat26Dozc.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_bufR.hscall(hs_wild126Doxn);
                    };
                    var hs_tpl26Dozb = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dozc, hs_n26Doxe);
                    var hs_tpl126Doxw = hs_tpl26Dozb.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26Doxr, hs_rb126Doxs, hs_ds26Doxt, hs_rb226Doxu, hs_rb326Doxv, hs_tpl126Doxw];
                    return $res;
                };
                var hs_sat26Doze = new $hs.Data(2);
                hs_sat26Doze.data = [hs_n26Doxe];
                var hs_sat26Dozf = new $hs.Data(1);
                hs_sat26Dozf.data = [hs_sat26Doze, hs_sat26Dozd];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dozf);
            }
        };
        var hs_sat26Dozl = new $hs.Thunk();
        hs_sat26Dozl.evaluateOnce = function () {
            var hs_sat26Dozj = new $hs.Func(1);
            hs_sat26Dozj.evaluate = function (hs_ptr26Dox4) {
                var hs_sat26Dozi = new $hs.Thunk();
                hs_sat26Dozi.evaluateOnce = function () {
                    var hs_sat26Dozh = new $hs.Thunk();
                    hs_sat26Dozh.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_bufR.hscall(hs_bbuf26DowY);
                    };
                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dox4, hs_sat26Dozh);
                };
                return $hs.modules.GHCziIOziDevice.hs_readNonBlocking.hscall(hs_zddRawIO26Dox2, hs_dev26Dox3, hs_sat26Dozi, hs_bytes26DowZ);
            };
            var hs_sat26Dozk = new $hs.Thunk();
            hs_sat26Dozk.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBuffer.hs_withBuffer.hscall(hs_bbuf26DowY);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dozk, hs_sat26Dozj);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dozl, hs_sat26Dozg);
    };
    this.hs_readBuf.evaluate = function (hs_zddRawIO26DoxI, hs_dev26DoxJ, hs_bbuf26DoxE) {
        var hs_bytes26DoxF = new $hs.Thunk();
        hs_bytes26DoxF.evaluateOnce = function () {
            return $hs.modules.GHCziIOziBuffer.hs_bufferAvailable.hscall(hs_bbuf26DoxE);
        };
        var hs_sat26Dozr = new $hs.Func(1);
        hs_sat26Dozr.evaluate = function (hs_res26DoxQ) {
            var hs_sat26Dozp = new $hs.Thunk();
            hs_sat26Dozp.evaluateOnce = function () {
                var hs_wild26DoxY = hs_bbuf26DoxE;
                if (hs_bbuf26DoxE.notEvaluated) {
                    hs_wild26DoxY = hs_bbuf26DoxE.hscall();
                }
                var hs_rb26Doy2 = hs_wild26DoxY.data[0];
                var hs_rb126Doy3 = hs_wild26DoxY.data[1];
                var hs_ds26Doy4 = hs_wild26DoxY.data[2];
                var hs_rb226Doy5 = hs_wild26DoxY.data[3];
                var hs_rb326Doy6 = hs_wild26DoxY.data[4];
                var hs_sat26Dozo = new $hs.Thunk();
                hs_sat26Dozo.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziBuffer.hs_bufR.hscall(hs_wild26DoxY);
                };
                var hs_tpl26Dozn = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dozo, hs_res26DoxQ);
                var hs_tpl126Doy7 = hs_tpl26Dozn.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb26Doy2, hs_rb126Doy3, hs_ds26Doy4, hs_rb226Doy5, hs_rb326Doy6, hs_tpl126Doy7];
                return $res;
            };
            var hs_sat26Dozq = new $hs.Data(1);
            hs_sat26Dozq.data = [hs_res26DoxQ, hs_sat26Dozp];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dozq);
        };
        var hs_sat26Dozw = new $hs.Thunk();
        hs_sat26Dozw.evaluateOnce = function () {
            var hs_sat26Dozu = new $hs.Func(1);
            hs_sat26Dozu.evaluate = function (hs_ptr26DoxK) {
                var hs_sat26Dozt = new $hs.Thunk();
                hs_sat26Dozt.evaluateOnce = function () {
                    var hs_sat26Dozs = new $hs.Thunk();
                    hs_sat26Dozs.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_bufR.hscall(hs_bbuf26DoxE);
                    };
                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DoxK, hs_sat26Dozs);
                };
                return $hs.modules.GHCziIOziDevice.hs_read.hscall(hs_zddRawIO26DoxI, hs_dev26DoxJ, hs_sat26Dozt, hs_bytes26DoxF);
            };
            var hs_sat26Dozv = new $hs.Thunk();
            hs_sat26Dozv.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBuffer.hs_withBuffer.hscall(hs_bbuf26DoxE);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dozv, hs_sat26Dozu);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dozw, hs_sat26Dozr);
    };
    this.hs_DZCBufferedIO.evaluate = function (hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
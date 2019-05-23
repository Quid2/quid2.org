
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
    this.hs_newBuffer.evaluate = function (hs_tpl26D0ea) {
        $hs.modules.GHCziIOziBufferedIO.loadDependencies();
        return this.evaluate(hs_tpl26D0ea);
    };
    this.hs_fillReadBuffer.notEvaluated = true;
    this.hs_fillReadBuffer.evaluate = function (hs_tpl26D0ek) {
        $hs.modules.GHCziIOziBufferedIO.loadDependencies();
        return this.evaluate(hs_tpl26D0ek);
    };
    this.hs_fillReadBuffer0.notEvaluated = true;
    this.hs_fillReadBuffer0.evaluate = function (hs_tpl26D0eu) {
        $hs.modules.GHCziIOziBufferedIO.loadDependencies();
        return this.evaluate(hs_tpl26D0eu);
    };
    this.hs_emptyWriteBuffer.notEvaluated = true;
    this.hs_emptyWriteBuffer.evaluate = function (hs_tpl26D0eE) {
        $hs.modules.GHCziIOziBufferedIO.loadDependencies();
        return this.evaluate(hs_tpl26D0eE);
    };
    this.hs_flushWriteBuffer.notEvaluated = true;
    this.hs_flushWriteBuffer.evaluate = function (hs_tpl26D0eO) {
        $hs.modules.GHCziIOziBufferedIO.loadDependencies();
        return this.evaluate(hs_tpl26D0eO);
    };
    this.hs_flushWriteBuffer0.notEvaluated = true;
    this.hs_flushWriteBuffer0.evaluate = function (hs_tpl26D0eY) {
        $hs.modules.GHCziIOziBufferedIO.loadDependencies();
        return this.evaluate(hs_tpl26D0eY);
    };
    this.hs_zddmemptyWriteBuffer.notEvaluated = true;
    this.hs_zddmemptyWriteBuffer.evaluate = function (hs_zddBufferedIO26D0fm, hs_zudev26D0fn, hs_buf26D0fa) {
        $hs.modules.GHCziIOziBufferedIO.loadDependencies();
        return this.evaluate(hs_zddBufferedIO26D0fm, hs_zudev26D0fn, hs_buf26D0fa);
    };
    this.hs_writeBufNonBlocking.notEvaluated = true;
    this.hs_writeBufNonBlocking.evaluate = function (hs_zddRawIO26D0fw, hs_dev26D0fx, hs_bbuf26D0fs) {
        $hs.modules.GHCziIOziBufferedIO.loadDependencies();
        return this.evaluate(hs_zddRawIO26D0fw, hs_dev26D0fx, hs_bbuf26D0fs);
    };
    this.hs_writeBuf.notEvaluated = true;
    this.hs_writeBuf.evaluate = function (hs_zddRawIO26D0fQ, hs_dev26D0fR, hs_bbuf26D0fM) {
        $hs.modules.GHCziIOziBufferedIO.loadDependencies();
        return this.evaluate(hs_zddRawIO26D0fQ, hs_dev26D0fR, hs_bbuf26D0fM);
    };
    this.hs_readBufNonBlocking.notEvaluated = true;
    this.hs_readBufNonBlocking.evaluate = function (hs_zddRawIO26D0gi, hs_dev26D0gj, hs_bbuf26D0ge) {
        $hs.modules.GHCziIOziBufferedIO.loadDependencies();
        return this.evaluate(hs_zddRawIO26D0gi, hs_dev26D0gj, hs_bbuf26D0ge);
    };
    this.hs_readBuf.notEvaluated = true;
    this.hs_readBuf.evaluate = function (hs_zddRawIO26D0gY, hs_dev26D0gZ, hs_bbuf26D0gU) {
        $hs.modules.GHCziIOziBufferedIO.loadDependencies();
        return this.evaluate(hs_zddRawIO26D0gY, hs_dev26D0gZ, hs_bbuf26D0gU);
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
    this.hs_newBuffer.evaluate = function (hs_tpl26D0ea) {
        var hs_tpl26D0hw = hs_tpl26D0ea;
        if (hs_tpl26D0ea.notEvaluated) {
            hs_tpl26D0hw = hs_tpl26D0ea.hscall();
        }
        var hs_tpl26D0ei = hs_tpl26D0hw.data[0];
        if (hs_tpl26D0ei.notEvaluated) {
            return hs_tpl26D0ei.hscall();
        } else {
            return hs_tpl26D0ei;
        }
    };
    this.hs_fillReadBuffer.evaluate = function (hs_tpl26D0ek) {
        var hs_tpl26D0hC = hs_tpl26D0ek;
        if (hs_tpl26D0ek.notEvaluated) {
            hs_tpl26D0hC = hs_tpl26D0ek.hscall();
        }
        var hs_tpl26D0es = hs_tpl26D0hC.data[1];
        if (hs_tpl26D0es.notEvaluated) {
            return hs_tpl26D0es.hscall();
        } else {
            return hs_tpl26D0es;
        }
    };
    this.hs_fillReadBuffer0.evaluate = function (hs_tpl26D0eu) {
        var hs_tpl26D0hI = hs_tpl26D0eu;
        if (hs_tpl26D0eu.notEvaluated) {
            hs_tpl26D0hI = hs_tpl26D0eu.hscall();
        }
        var hs_tpl26D0eC = hs_tpl26D0hI.data[2];
        if (hs_tpl26D0eC.notEvaluated) {
            return hs_tpl26D0eC.hscall();
        } else {
            return hs_tpl26D0eC;
        }
    };
    this.hs_emptyWriteBuffer.evaluate = function (hs_tpl26D0eE) {
        var hs_tpl26D0hO = hs_tpl26D0eE;
        if (hs_tpl26D0eE.notEvaluated) {
            hs_tpl26D0hO = hs_tpl26D0eE.hscall();
        }
        var hs_tpl26D0eM = hs_tpl26D0hO.data[3];
        if (hs_tpl26D0eM.notEvaluated) {
            return hs_tpl26D0eM.hscall();
        } else {
            return hs_tpl26D0eM;
        }
    };
    this.hs_flushWriteBuffer.evaluate = function (hs_tpl26D0eO) {
        var hs_tpl26D0hU = hs_tpl26D0eO;
        if (hs_tpl26D0eO.notEvaluated) {
            hs_tpl26D0hU = hs_tpl26D0eO.hscall();
        }
        var hs_tpl26D0eW = hs_tpl26D0hU.data[4];
        if (hs_tpl26D0eW.notEvaluated) {
            return hs_tpl26D0eW.hscall();
        } else {
            return hs_tpl26D0eW;
        }
    };
    this.hs_flushWriteBuffer0.evaluate = function (hs_tpl26D0eY) {
        var hs_tpl26D0i0 = hs_tpl26D0eY;
        if (hs_tpl26D0eY.notEvaluated) {
            hs_tpl26D0i0 = hs_tpl26D0eY.hscall();
        }
        var hs_tpl26D0f6 = hs_tpl26D0i0.data[5];
        if (hs_tpl26D0f6.notEvaluated) {
            return hs_tpl26D0f6.hscall();
        } else {
            return hs_tpl26D0f6;
        }
    };
    this.hs_zddmemptyWriteBuffer.evaluate = function (hs_zddBufferedIO26D0fm, hs_zudev26D0fn, hs_buf26D0fa) {
        var hs_sat26D0i1 = new $hs.Thunk();
        hs_sat26D0i1.evaluateOnce = function () {
            var hs_wild26D0i5 = hs_buf26D0fa;
            if (hs_buf26D0fa.notEvaluated) {
                hs_wild26D0i5 = hs_buf26D0fa.hscall();
            }
            var hs_rb26D0fi = hs_wild26D0i5.data[0];
            var hs_rb126D0fj = hs_wild26D0i5.data[1];
            var hs_rb226D0fk = hs_wild26D0i5.data[3];
            var $res = new $hs.Data(1);
            $res.data = [hs_rb26D0fi, hs_rb126D0fj, $hs.modules.GHCziIOziBuffer.hs_WriteBuffer, hs_rb226D0fk, 0, 0];
            return $res;
        };
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0i1);
    };
    this.hs_writeBufNonBlocking.evaluate = function (hs_zddRawIO26D0fw, hs_dev26D0fx, hs_bbuf26D0fs) {
        var hs_bytes26D0ft = new $hs.Thunk();
        hs_bytes26D0ft.evaluateOnce = function () {
            return $hs.modules.GHCziIOziBuffer.hs_bufferElems.hscall(hs_bbuf26D0fs);
        };
        var hs_sat26D0i7 = new $hs.Func(1);
        hs_sat26D0i7.evaluate = function (hs_res26D0fE) {
            var hs_sat26D0id = new $hs.Thunk();
            hs_sat26D0id.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBuffer.hs_bufferAdjustL.hscall(hs_res26D0fE, hs_bbuf26D0fs);
            };
            var hs_sat26D0ic = new $hs.Data(1);
            hs_sat26D0ic.data = [hs_res26D0fE, hs_sat26D0id];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0ic);
        };
        var hs_sat26D0i6 = new $hs.Thunk();
        hs_sat26D0i6.evaluateOnce = function () {
            var hs_sat26D0i9 = new $hs.Func(1);
            hs_sat26D0i9.evaluate = function (hs_ptr26D0fy) {
                var hs_sat26D0ia = new $hs.Thunk();
                hs_sat26D0ia.evaluateOnce = function () {
                    var hs_sat26D0ib = new $hs.Thunk();
                    hs_sat26D0ib.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_bbuf26D0fs);
                    };
                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26D0fy, hs_sat26D0ib);
                };
                return $hs.modules.GHCziIOziDevice.hs_writeNonBlocking.hscall(hs_zddRawIO26D0fw, hs_dev26D0fx, hs_sat26D0ia, hs_bytes26D0ft);
            };
            var hs_sat26D0i8 = new $hs.Thunk();
            hs_sat26D0i8.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBuffer.hs_withBuffer.hscall(hs_bbuf26D0fs);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D0i8, hs_sat26D0i9);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0i6, hs_sat26D0i7);
    };
    this.hs_writeBuf.evaluate = function (hs_zddRawIO26D0fQ, hs_dev26D0fR, hs_bbuf26D0fM) {
        var hs_bytes26D0fN = new $hs.Thunk();
        hs_bytes26D0fN.evaluateOnce = function () {
            return $hs.modules.GHCziIOziBuffer.hs_bufferElems.hscall(hs_bbuf26D0fM);
        };
        var hs_sat26D0if = new $hs.Thunk();
        hs_sat26D0if.evaluateOnce = function () {
            var hs_sat26D0ik = new $hs.Thunk();
            hs_sat26D0ik.evaluateOnce = function () {
                var hs_wild26D0in = hs_bbuf26D0fM;
                if (hs_bbuf26D0fM.notEvaluated) {
                    hs_wild26D0in = hs_bbuf26D0fM.hscall();
                }
                var hs_rb26D0g4 = hs_wild26D0in.data[0];
                var hs_rb126D0g5 = hs_wild26D0in.data[1];
                var hs_ds26D0g6 = hs_wild26D0in.data[2];
                var hs_rb226D0g7 = hs_wild26D0in.data[3];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb26D0g4, hs_rb126D0g5, hs_ds26D0g6, hs_rb226D0g7, 0, 0];
                return $res;
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0ik);
        };
        var hs_sat26D0ie = new $hs.Thunk();
        hs_sat26D0ie.evaluateOnce = function () {
            var hs_sat26D0ih = new $hs.Func(1);
            hs_sat26D0ih.evaluate = function (hs_ptr26D0fS) {
                var hs_sat26D0ii = new $hs.Thunk();
                hs_sat26D0ii.evaluateOnce = function () {
                    var hs_sat26D0ij = new $hs.Thunk();
                    hs_sat26D0ij.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_bbuf26D0fM);
                    };
                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26D0fS, hs_sat26D0ij);
                };
                return $hs.modules.GHCziIOziDevice.hs_write.hscall(hs_zddRawIO26D0fQ, hs_dev26D0fR, hs_sat26D0ii, hs_bytes26D0fN);
            };
            var hs_sat26D0ig = new $hs.Thunk();
            hs_sat26D0ig.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBuffer.hs_withBuffer.hscall(hs_bbuf26D0fM);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D0ig, hs_sat26D0ih);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0ie, hs_sat26D0if);
    };
    this.hs_readBufNonBlocking.evaluate = function (hs_zddRawIO26D0gi, hs_dev26D0gj, hs_bbuf26D0ge) {
        var hs_bytes26D0gf = new $hs.Thunk();
        hs_bytes26D0gf.evaluateOnce = function () {
            return $hs.modules.GHCziIOziBuffer.hs_bufferAvailable.hscall(hs_bbuf26D0ge);
        };
        var hs_sat26D0ip = new $hs.Func(1);
        hs_sat26D0ip.evaluate = function (hs_res26D0gq) {
            var hs_wild26D0iv = hs_res26D0gq;
            if (hs_res26D0gq.notEvaluated) {
                hs_wild26D0iv = hs_res26D0gq.hscall();
            }
            switch (hs_wild26D0iv.tag) {
            case 1:
                var hs_sat26D0iB = new $hs.Data(1);
                hs_sat26D0iB.data = [$hs.modules.DataziMaybe.hs_Nothing, hs_bbuf26D0ge];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0iB);
            case 2:
                var hs_n26D0gu = hs_wild26D0iv.data[0];
                var hs_sat26D0iw = new $hs.Thunk();
                hs_sat26D0iw.evaluateOnce = function () {
                    var hs_wild126D0gD = hs_bbuf26D0ge;
                    if (hs_bbuf26D0ge.notEvaluated) {
                        hs_wild126D0gD = hs_bbuf26D0ge.hscall();
                    }
                    var hs_rb26D0gH = hs_wild126D0gD.data[0];
                    var hs_rb126D0gI = hs_wild126D0gD.data[1];
                    var hs_ds26D0gJ = hs_wild126D0gD.data[2];
                    var hs_rb226D0gK = hs_wild126D0gD.data[3];
                    var hs_rb326D0gL = hs_wild126D0gD.data[4];
                    var hs_sat26D0iz = new $hs.Thunk();
                    hs_sat26D0iz.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_bufR.hscall(hs_wild126D0gD);
                    };
                    var hs_tpl26D0iA = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D0iz, hs_n26D0gu);
                    var hs_tpl126D0gM = hs_tpl26D0iA.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26D0gH, hs_rb126D0gI, hs_ds26D0gJ, hs_rb226D0gK, hs_rb326D0gL, hs_tpl126D0gM];
                    return $res;
                };
                var hs_sat26D0ix = new $hs.Data(2);
                hs_sat26D0ix.data = [hs_n26D0gu];
                var hs_sat26D0iu = new $hs.Data(1);
                hs_sat26D0iu.data = [hs_sat26D0ix, hs_sat26D0iw];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0iu);
            }
        };
        var hs_sat26D0io = new $hs.Thunk();
        hs_sat26D0io.evaluateOnce = function () {
            var hs_sat26D0ir = new $hs.Func(1);
            hs_sat26D0ir.evaluate = function (hs_ptr26D0gk) {
                var hs_sat26D0is = new $hs.Thunk();
                hs_sat26D0is.evaluateOnce = function () {
                    var hs_sat26D0it = new $hs.Thunk();
                    hs_sat26D0it.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_bufR.hscall(hs_bbuf26D0ge);
                    };
                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26D0gk, hs_sat26D0it);
                };
                return $hs.modules.GHCziIOziDevice.hs_readNonBlocking.hscall(hs_zddRawIO26D0gi, hs_dev26D0gj, hs_sat26D0is, hs_bytes26D0gf);
            };
            var hs_sat26D0iq = new $hs.Thunk();
            hs_sat26D0iq.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBuffer.hs_withBuffer.hscall(hs_bbuf26D0ge);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D0iq, hs_sat26D0ir);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0io, hs_sat26D0ip);
    };
    this.hs_readBuf.evaluate = function (hs_zddRawIO26D0gY, hs_dev26D0gZ, hs_bbuf26D0gU) {
        var hs_bytes26D0gV = new $hs.Thunk();
        hs_bytes26D0gV.evaluateOnce = function () {
            return $hs.modules.GHCziIOziBuffer.hs_bufferAvailable.hscall(hs_bbuf26D0gU);
        };
        var hs_sat26D0iD = new $hs.Func(1);
        hs_sat26D0iD.evaluate = function (hs_res26D0h6) {
            var hs_sat26D0iJ = new $hs.Thunk();
            hs_sat26D0iJ.evaluateOnce = function () {
                var hs_wild26D0he = hs_bbuf26D0gU;
                if (hs_bbuf26D0gU.notEvaluated) {
                    hs_wild26D0he = hs_bbuf26D0gU.hscall();
                }
                var hs_rb26D0hi = hs_wild26D0he.data[0];
                var hs_rb126D0hj = hs_wild26D0he.data[1];
                var hs_ds26D0hk = hs_wild26D0he.data[2];
                var hs_rb226D0hl = hs_wild26D0he.data[3];
                var hs_rb326D0hm = hs_wild26D0he.data[4];
                var hs_sat26D0iL = new $hs.Thunk();
                hs_sat26D0iL.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziBuffer.hs_bufR.hscall(hs_wild26D0he);
                };
                var hs_tpl26D0iM = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D0iL, hs_res26D0h6);
                var hs_tpl126D0hn = hs_tpl26D0iM.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_rb26D0hi, hs_rb126D0hj, hs_ds26D0hk, hs_rb226D0hl, hs_rb326D0hm, hs_tpl126D0hn];
                return $res;
            };
            var hs_sat26D0iI = new $hs.Data(1);
            hs_sat26D0iI.data = [hs_res26D0h6, hs_sat26D0iJ];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0iI);
        };
        var hs_sat26D0iC = new $hs.Thunk();
        hs_sat26D0iC.evaluateOnce = function () {
            var hs_sat26D0iF = new $hs.Func(1);
            hs_sat26D0iF.evaluate = function (hs_ptr26D0h0) {
                var hs_sat26D0iG = new $hs.Thunk();
                hs_sat26D0iG.evaluateOnce = function () {
                    var hs_sat26D0iH = new $hs.Thunk();
                    hs_sat26D0iH.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziBuffer.hs_bufR.hscall(hs_bbuf26D0gU);
                    };
                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26D0h0, hs_sat26D0iH);
                };
                return $hs.modules.GHCziIOziDevice.hs_read.hscall(hs_zddRawIO26D0gY, hs_dev26D0gZ, hs_sat26D0iG, hs_bytes26D0gV);
            };
            var hs_sat26D0iE = new $hs.Thunk();
            hs_sat26D0iE.evaluateOnce = function () {
                return $hs.modules.GHCziIOziBuffer.hs_withBuffer.hscall(hs_bbuf26D0gU);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D0iE, hs_sat26D0iF);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D0iC, hs_sat26D0iD);
    };
    this.hs_DZCBufferedIO.evaluate = function (hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
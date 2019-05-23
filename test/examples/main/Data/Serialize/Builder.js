
$hs.modules.DataziSerializzeziBuilder = new $hs.Module();
$hs.modules.DataziSerializzeziBuilder.dependencies = ["Data.ByteString", "Data.ByteString.Internal", "Data.ByteString.Lazy", "GHC.IntWord64", "GHC.Types", "Foreign", "Prelude", "GHC.Base", "GHC.Classes", "GHC.Err", "GHC.Num", "GHC.Ptr", "GHC.Real", "GHC.Word", "Data.Monoid", "Foreign.Storable", "Foreign.ForeignPtr.Imp"];
$hs.modules.DataziSerializzeziBuilder.initBeforeDependencies = function () {
    this.hs_zdWBuffer = new $hs.Func(4);
    this.hs_append = new $hs.Func(2);
    this.hs_empty = new $hs.Thunk();
    this.hs_zdfMonoidBuilder = new $hs.Data(1);
    this.hs_flush = new $hs.Thunk();
    this.hs_fromLazzyByteString = new $hs.Func(1);
    this.hs_fromByteString = new $hs.Func(1);
    this.hs_toLazzyByteString = new $hs.Func(1);
    this.hs_toByteString = new $hs.Func(1);
    this.hs_singleton = new $hs.Thunk();
    this.hs_putWord64le = new $hs.Func(1);
    this.hs_putWord64be = new $hs.Func(1);
    this.hs_putWord32le = new $hs.Func(1);
    this.hs_putWord32be = new $hs.Func(1);
    this.hs_putWord16le = new $hs.Func(1);
    this.hs_putWord16be = new $hs.Func(1);
    this.hs_putWordhost = new $hs.Func(1);
    this.hs_putWord64host = new $hs.Func(1);
    this.hs_putWord32host = new $hs.Func(1);
    this.hs_putWord16host = new $hs.Func(1);
    this.hs_Builder = new $hs.Func(1);
    this.hs_Buffer = new $hs.Func(4);
    this.hs_zdWBuffer.notEvaluated = true;
    this.hs_zdWBuffer.evaluate = function (hs_tpl26zz40, hs_tpl26zz42, hs_tpl26zz44, hs_tpl26zz46) {
        $hs.modules.DataziSerializzeziBuilder.loadDependencies();
        return this.evaluate(hs_tpl26zz40, hs_tpl26zz42, hs_tpl26zz44, hs_tpl26zz46);
    };
    this.hs_append.notEvaluated = true;
    this.hs_append.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.DataziSerializzeziBuilder.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_empty.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziBuilder.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfMonoidBuilder.notEvaluated = true;
    this.hs_zdfMonoidBuilder.evaluate = function () {
        $hs.modules.DataziSerializzeziBuilder.loadDependencies();
        return this;
    };
    this.hs_flush.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziBuilder.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_fromLazzyByteString.notEvaluated = true;
    this.hs_fromLazzyByteString.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziSerializzeziBuilder.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_fromByteString.notEvaluated = true;
    this.hs_fromByteString.evaluate = function (hs_bs26zz5o) {
        $hs.modules.DataziSerializzeziBuilder.loadDependencies();
        return this.evaluate(hs_bs26zz5o);
    };
    this.hs_toLazzyByteString.notEvaluated = true;
    this.hs_toLazzyByteString.evaluate = function (hs_m26zz5Q) {
        $hs.modules.DataziSerializzeziBuilder.loadDependencies();
        return this.evaluate(hs_m26zz5Q);
    };
    this.hs_toByteString.notEvaluated = true;
    this.hs_toByteString.evaluate = function (hs_m26zz6f) {
        $hs.modules.DataziSerializzeziBuilder.loadDependencies();
        return this.evaluate(hs_m26zz6f);
    };
    this.hs_singleton.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziBuilder.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_putWord64le.notEvaluated = true;
    this.hs_putWord64le.evaluate = function (hs_w26zz7S) {
        $hs.modules.DataziSerializzeziBuilder.loadDependencies();
        return this.evaluate(hs_w26zz7S);
    };
    this.hs_putWord64be.notEvaluated = true;
    this.hs_putWord64be.evaluate = function (hs_w26zz9d) {
        $hs.modules.DataziSerializzeziBuilder.loadDependencies();
        return this.evaluate(hs_w26zz9d);
    };
    this.hs_putWord32le.notEvaluated = true;
    this.hs_putWord32le.evaluate = function (hs_w26zzaB) {
        $hs.modules.DataziSerializzeziBuilder.loadDependencies();
        return this.evaluate(hs_w26zzaB);
    };
    this.hs_putWord32be.notEvaluated = true;
    this.hs_putWord32be.evaluate = function (hs_w26zzbd) {
        $hs.modules.DataziSerializzeziBuilder.loadDependencies();
        return this.evaluate(hs_w26zzbd);
    };
    this.hs_putWord16le.notEvaluated = true;
    this.hs_putWord16le.evaluate = function (hs_w26zzbP) {
        $hs.modules.DataziSerializzeziBuilder.loadDependencies();
        return this.evaluate(hs_w26zzbP);
    };
    this.hs_putWord16be.notEvaluated = true;
    this.hs_putWord16be.evaluate = function (hs_w26zzc7) {
        $hs.modules.DataziSerializzeziBuilder.loadDependencies();
        return this.evaluate(hs_w26zzc7);
    };
    this.hs_putWordhost.notEvaluated = true;
    this.hs_putWordhost.evaluate = function (hs_w26zzcG) {
        $hs.modules.DataziSerializzeziBuilder.loadDependencies();
        return this.evaluate(hs_w26zzcG);
    };
    this.hs_putWord64host.notEvaluated = true;
    this.hs_putWord64host.evaluate = function (hs_w26zzdn) {
        $hs.modules.DataziSerializzeziBuilder.loadDependencies();
        return this.evaluate(hs_w26zzdn);
    };
    this.hs_putWord32host.notEvaluated = true;
    this.hs_putWord32host.evaluate = function (hs_w3226zze4) {
        $hs.modules.DataziSerializzeziBuilder.loadDependencies();
        return this.evaluate(hs_w3226zze4);
    };
    this.hs_putWord16host.notEvaluated = true;
    this.hs_putWord16host.evaluate = function (hs_w1626zzeL) {
        $hs.modules.DataziSerializzeziBuilder.loadDependencies();
        return this.evaluate(hs_w1626zzeL);
    };
    this.hs_Builder.notEvaluated = true;
    this.hs_Builder.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziSerializzeziBuilder.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Buffer.notEvaluated = true;
    this.hs_Buffer.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.DataziSerializzeziBuilder.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.DataziSerializzeziBuilder.initAfterDependencies = function () {
    this.hs_zdWBuffer.notEvaluated = false;
    this.hs_append.notEvaluated = false;
    this.hs_zdfMonoidBuilder.notEvaluated = false;
    this.hs_zdfMonoidBuilder.evaluate = function () {
        return this;
    };
    this.hs_fromLazzyByteString.notEvaluated = false;
    this.hs_fromByteString.notEvaluated = false;
    this.hs_toLazzyByteString.notEvaluated = false;
    this.hs_toByteString.notEvaluated = false;
    this.hs_putWord64le.notEvaluated = false;
    this.hs_putWord64be.notEvaluated = false;
    this.hs_putWord32le.notEvaluated = false;
    this.hs_putWord32be.notEvaluated = false;
    this.hs_putWord16le.notEvaluated = false;
    this.hs_putWord16be.notEvaluated = false;
    this.hs_putWordhost.notEvaluated = false;
    this.hs_putWord64host.notEvaluated = false;
    this.hs_putWord32host.notEvaluated = false;
    this.hs_putWord16host.notEvaluated = false;
    this.hs_Builder.notEvaluated = false;
    this.hs_Buffer.notEvaluated = false;
    var hs_a25raxX = new $hs.Func(1);
    var hs_mapBuilder25raqp = new $hs.Func(1);
    var hs_withSizze25raqo = new $hs.Func(1);
    var hs_a125rayh = new $hs.Func(2);
    var hs_zdcmappend25raym = new $hs.Func(2);
    var hs_zdcmempty25rayn = new $hs.Thunk();
    var hs_zdcmconcat25rayo = new $hs.Thunk();
    var hs_sat26zzfl = new $hs.Func(2);
    var hs_sat26zzfm = new $hs.Func(1);
    var hs_a225raz1 = new $hs.Func(1);
    var hs_sat26zzfv = new $hs.Thunk();
    var hs_sat26zzfy = new $hs.Thunk();
    var hs_defaultSizze25raqm = new $hs.Thunk();
    var hs_ensureFree25raqq = new $hs.Func(1);
    var hs_a325raAO = new $hs.Func(2);
    var hs_writeN25raqr = new $hs.Func(2);
    var hs_sat26zzgF = new $hs.Thunk();
    var hs_sat26zzgG = new $hs.Data(1);
    var hs_sat26zzgH = new $hs.Func(1);
    this.hs_zdWBuffer.evaluate = function (hs_tpl26zz40, hs_tpl26zz42, hs_tpl26zz44, hs_tpl26zz46) {
        var hs_tpl26zz48 = hs_tpl26zz40;
        if (hs_tpl26zz40.notEvaluated) {
            hs_tpl26zz48 = hs_tpl26zz40.hscall();
        }
        var hs_tpl26zz49 = hs_tpl26zz42;
        if (hs_tpl26zz42.notEvaluated) {
            hs_tpl26zz49 = hs_tpl26zz42.hscall();
        }
        var hs_tpl26zz4a = hs_tpl26zz44;
        if (hs_tpl26zz44.notEvaluated) {
            hs_tpl26zz4a = hs_tpl26zz44.hscall();
        }
        var hs_tpl26zz4b = hs_tpl26zz46;
        if (hs_tpl26zz46.notEvaluated) {
            hs_tpl26zz4b = hs_tpl26zz46.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26zz48, hs_tpl26zz49, hs_tpl26zz4a, hs_tpl26zz4b];
        return $res;
    };
    hs_a25raxX.evaluate = function (hs_f26zz4f) {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_f26zz4f);
    };
    hs_mapBuilder25raqp.evaluate = function (hs_eta1cW6l3) {
        return hs_a25raxX.hscall(hs_eta1cW6l3);
    };
    hs_withSizze25raqo.evaluate = function (hs_f26zz4v) {
        var hs_sat26zzf7 = new $hs.Func(2);
        hs_sat26zzf7.evaluate = function (hs_k26zz4t, hs_buf26zz4m) {
            var hs_wild26zz4u = hs_buf26zz4m;
            if (hs_buf26zz4m.notEvaluated) {
                hs_wild26zz4u = hs_buf26zz4m.hscall();
            }
            var hs_l26zz4s = hs_wild26zz4u.data[3];
            return hs_f26zz4v.hscall(hs_l26zz4s, hs_k26zz4t, hs_wild26zz4u);
        };
        var hs_sat26zzf6 = new $hs.Func(1);
        hs_sat26zzf6.evaluate = function (hs_tpl26zz4i) {
            if (hs_tpl26zz4i.notEvaluated) {
                return hs_tpl26zz4i.hscall();
            } else {
                return hs_tpl26zz4i;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zzf6, hs_sat26zzf7);
    };
    hs_a125rayh.evaluate = function (hs_ds26zz4A, hs_ds126zz4B) {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_ds26zz4A, hs_ds126zz4B);
    };
    this.hs_append.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a125rayh.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_empty.evaluateOnce = function () {
        if ($hs.modules.GHCziBase.hs_id.notEvaluated) {
            return $hs.modules.GHCziBase.hs_id.hscall();
        } else {
            return $hs.modules.GHCziBase.hs_id;
        }
    };
    hs_zdcmappend25raym.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.DataziSerializzeziBuilder.hs_append.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcmempty25rayn.evaluateOnce = function () {
        if ($hs.modules.GHCziBase.hs_id.notEvaluated) {
            return $hs.modules.GHCziBase.hs_id.hscall();
        } else {
            return $hs.modules.GHCziBase.hs_id;
        }
    };
    this.hs_zdfMonoidBuilder.data = [$hs.modules.GHCziBase.hs_id, $hs.modules.DataziSerializzeziBuilder.hs_append, hs_zdcmconcat25rayo];
    hs_zdcmconcat25rayo.evaluateOnce = function () {
        return $hs.modules.DataziMonoid.hs_zddmmconcat.hscall($hs.modules.DataziSerializzeziBuilder.hs_zdfMonoidBuilder);
    };
    hs_sat26zzfl.evaluate = function (hs_k26zz5c, hs_buf26zz4K) {
        var hs_wild26zz5f = hs_buf26zz4K;
        if (hs_buf26zz4K.notEvaluated) {
            hs_wild26zz5f = hs_buf26zz4K.hscall();
        }
        var hs_p26zz4T = hs_wild26zz5f.data[0];
        var hs_o26zz4X = hs_wild26zz5f.data[1];
        var hs_u26zz4Q = hs_wild26zz5f.data[2];
        var hs_l26zz5b = hs_wild26zz5f.data[3];
        var hs_sat26zzfb = new $hs.Data(1);
        hs_sat26zzfb.data = [0];
        var hs_wild126zzfc = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_u26zz4Q, hs_sat26zzfb);
        switch (hs_wild126zzfc.tag) {
        case 1:
            var hs_sat26zzfe = new $hs.Thunk();
            hs_sat26zzfe.evaluateOnce = function () {
                var hs_sat26zzfi = new $hs.Thunk();
                hs_sat26zzfi.evaluateOnce = function () {
                    var hs_tpl26zz59 = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_o26zz4X, hs_u26zz4Q);
                    var hs_sat26zzfj = new $hs.Data(1);
                    hs_sat26zzfj.data = [0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_p26zz4T, hs_tpl26zz59, hs_sat26zzfj, hs_l26zz5b];
                    return $res;
                };
                return hs_k26zz5c.hscall(hs_sat26zzfi);
            };
            var hs_sat26zzfd = new $hs.Thunk();
            hs_sat26zzfd.evaluateOnce = function () {
                var hs_tpl26zzfh = hs_p26zz4T;
                if (hs_p26zz4T.notEvaluated) {
                    hs_tpl26zzfh = hs_p26zz4T.hscall();
                }
                var hs_tpl126zz52 = hs_tpl26zzfh.data[0];
                var hs_tpl226zz53 = hs_tpl26zzfh.data[1];
                var hs_tpl326zzfg = hs_o26zz4X;
                if (hs_o26zz4X.notEvaluated) {
                    hs_tpl326zzfg = hs_o26zz4X.hscall();
                }
                var hs_tpl426zz54 = hs_tpl326zzfg.data[0];
                var hs_tpl526zzff = hs_u26zz4Q;
                if (hs_u26zz4Q.notEvaluated) {
                    hs_tpl526zzff = hs_u26zz4Q.hscall();
                }
                var hs_tpl626zz55 = hs_tpl526zzff.data[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl126zz52, hs_tpl226zz53, hs_tpl426zz54, hs_tpl626zz55];
                return $res;
            };
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26zzfd, hs_sat26zzfe];
            return $res;
        case 2:
            return hs_k26zz5c.hscall(hs_wild26zz5f);
        }
    };
    hs_sat26zzfm.evaluate = function (hs_tpl26zz4G) {
        if (hs_tpl26zz4G.notEvaluated) {
            return hs_tpl26zz4G.hscall();
        } else {
            return hs_tpl26zz4G;
        }
    };
    this.hs_flush.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zzfm, hs_sat26zzfl);
    };
    hs_a225raz1.evaluate = function (hs_bss26zz5j) {
        var hs_sat26zzfn = new $hs.Thunk();
        hs_sat26zzfn.evaluateOnce = function () {
            var hs_sat26zzfo = new $hs.Thunk();
            hs_sat26zzfo.evaluateOnce = function () {
                var hs_sat26zzfp = new $hs.Thunk();
                hs_sat26zzfp.evaluateOnce = function () {
                    return $hs.modules.DataziByteStringziLazzy.hs_toChunks.hscall(hs_bss26zz5j);
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26zzfp);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26zzfo);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.DataziSerializzeziBuilder.hs_flush, hs_sat26zzfn);
    };
    this.hs_fromLazzyByteString.evaluate = function (hs_eta1cW6l3) {
        return hs_a225raz1.hscall(hs_eta1cW6l3);
    };
    this.hs_fromByteString.evaluate = function (hs_bs26zz5o) {
        var hs_wild26zzfq = $hs.modules.DataziByteString.hs_null.hscall(hs_bs26zz5o);
        switch (hs_wild26zzfq.tag) {
        case 1:
            var hs_sat26zzfr = new $hs.Thunk();
            hs_sat26zzfr.evaluateOnce = function () {
                var hs_sat26zzfs = new $hs.Func(1);
                hs_sat26zzfs.evaluate = function (hs_eta1cW6l3) {
                    var $res = new $hs.Data(2);
                    $res.data = [hs_bs26zz5o, hs_eta1cW6l3];
                    return $res;
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26zzfs);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.DataziSerializzeziBuilder.hs_flush, hs_sat26zzfr);
        case 2:
            if ($hs.modules.GHCziBase.hs_id.notEvaluated) {
                return $hs.modules.GHCziBase.hs_id.hscall();
            } else {
                return $hs.modules.GHCziBase.hs_id;
            }
        }
    };
    hs_sat26zzfv.evaluateOnce = function () {
        var hs_sat26zzfu = new $hs.Thunk();
        hs_sat26zzfu.evaluateOnce = function () {
            return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt, $hs.modules.GHCziErr.hs_undefined);
        };
        var hs_sat26zzft = new $hs.Data(1);
        hs_sat26zzft.data = [2];
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26zzft, hs_sat26zzfu);
    };
    hs_sat26zzfy.evaluateOnce = function () {
        var hs_sat26zzfx = new $hs.Data(1);
        hs_sat26zzfx.data = [1024];
        var hs_sat26zzfw = new $hs.Data(1);
        hs_sat26zzfw.data = [32];
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26zzfw, hs_sat26zzfx);
    };
    hs_defaultSizze25raqm.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26zzfy, hs_sat26zzfv);
    };
    this.hs_toLazzyByteString.evaluate = function (hs_m26zz5Q) {
        var hs_sat26zzfz = new $hs.Thunk();
        hs_sat26zzfz.evaluateOnce = function () {
            var hs_sat26zzfA = new $hs.Thunk();
            hs_sat26zzfA.evaluateOnce = function () {
                var hs_sat26zzfC = new $hs.Func(1);
                hs_sat26zzfC.evaluate = function (hs_buf26zz5S) {
                    var hs_sat26zzfM = new $hs.Thunk();
                    hs_sat26zzfM.evaluateOnce = function () {
                        var hs_sat26zzfN = new $hs.Thunk();
                        hs_sat26zzfN.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_const.hscall($hs.modules.GHCziTypes.hs_ZMZN);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_m26zz5Q, $hs.modules.DataziSerializzeziBuilder.hs_flush, hs_sat26zzfN, hs_buf26zz5S);
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzfM);
                };
                var hs_sat26zzfB = new $hs.Thunk();
                hs_sat26zzfB.evaluateOnce = function () {
                    var hs_sat26zzfE = new $hs.Func(1);
                    hs_sat26zzfE.evaluate = function (hs_fp26zz5C) {
                        var hs_sat26zzfG = new $hs.Thunk();
                        hs_sat26zzfG.evaluateOnce = function () {
                            var hs_tpl26zz5I = hs_fp26zz5C;
                            if (hs_fp26zz5C.notEvaluated) {
                                hs_tpl26zz5I = hs_fp26zz5C.hscall();
                            }
                            var hs_tpl126zz5L = hs_defaultSizze25raqm;
                            if (hs_defaultSizze25raqm.notEvaluated) {
                                hs_tpl126zz5L = hs_defaultSizze25raqm.hscall();
                            }
                            var hs_sat26zzfL = new $hs.Data(1);
                            hs_sat26zzfL.data = [0];
                            var hs_sat26zzfJ = new $hs.Data(1);
                            hs_sat26zzfJ.data = [0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_tpl26zz5I, hs_sat26zzfJ, hs_sat26zzfL, hs_tpl126zz5L];
                            return $res;
                        };
                        var hs_sat26zzfF = new $hs.Thunk();
                        hs_sat26zzfF.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                        };
                        return $hs.modules.Prelude.hs_zdzn.hscall(hs_sat26zzfF, hs_sat26zzfG);
                    };
                    var hs_sat26zzfD = new $hs.Thunk();
                    hs_sat26zzfD.evaluateOnce = function () {
                        return $hs.modules.DataziByteStringziInternal.hs_mallocByteString.hscall(hs_defaultSizze25raqm);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzfD, hs_sat26zzfE);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzfB, hs_sat26zzfC);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.Foreign.hs_unsafePerformIO, hs_sat26zzfA);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.DataziByteStringziLazzy.hs_fromChunks, hs_sat26zzfz);
    };
    this.hs_toByteString.evaluate = function (hs_m26zz6f) {
        var hs_sat26zzfO = new $hs.Thunk();
        hs_sat26zzfO.evaluateOnce = function () {
            var hs_sat26zzfP = new $hs.Thunk();
            hs_sat26zzfP.evaluateOnce = function () {
                var hs_sat26zzfR = new $hs.Func(1);
                hs_sat26zzfR.evaluate = function (hs_buf26zz6h) {
                    var hs_sat26zzg1 = new $hs.Thunk();
                    hs_sat26zzg1.evaluateOnce = function () {
                        var hs_sat26zzg2 = new $hs.Thunk();
                        hs_sat26zzg2.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_const.hscall($hs.modules.GHCziTypes.hs_ZMZN);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_m26zz6f, $hs.modules.DataziSerializzeziBuilder.hs_flush, hs_sat26zzg2, hs_buf26zz6h);
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzg1);
                };
                var hs_sat26zzfQ = new $hs.Thunk();
                hs_sat26zzfQ.evaluateOnce = function () {
                    var hs_sat26zzfT = new $hs.Func(1);
                    hs_sat26zzfT.evaluate = function (hs_fp26zz61) {
                        var hs_sat26zzfV = new $hs.Thunk();
                        hs_sat26zzfV.evaluateOnce = function () {
                            var hs_tpl26zz67 = hs_fp26zz61;
                            if (hs_fp26zz61.notEvaluated) {
                                hs_tpl26zz67 = hs_fp26zz61.hscall();
                            }
                            var hs_tpl126zz6a = hs_defaultSizze25raqm;
                            if (hs_defaultSizze25raqm.notEvaluated) {
                                hs_tpl126zz6a = hs_defaultSizze25raqm.hscall();
                            }
                            var hs_sat26zzg0 = new $hs.Data(1);
                            hs_sat26zzg0.data = [0];
                            var hs_sat26zzfY = new $hs.Data(1);
                            hs_sat26zzfY.data = [0];
                            var $res = new $hs.Data(1);
                            $res.data = [hs_tpl26zz67, hs_sat26zzfY, hs_sat26zzg0, hs_tpl126zz6a];
                            return $res;
                        };
                        var hs_sat26zzfU = new $hs.Thunk();
                        hs_sat26zzfU.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                        };
                        return $hs.modules.Prelude.hs_zdzn.hscall(hs_sat26zzfU, hs_sat26zzfV);
                    };
                    var hs_sat26zzfS = new $hs.Thunk();
                    hs_sat26zzfS.evaluateOnce = function () {
                        return $hs.modules.DataziByteStringziInternal.hs_mallocByteString.hscall(hs_defaultSizze25raqm);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzfS, hs_sat26zzfT);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzfQ, hs_sat26zzfR);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.Foreign.hs_unsafePerformIO, hs_sat26zzfP);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.DataziByteString.hs_concat, hs_sat26zzfO);
    };
    hs_ensureFree25raqq.evaluate = function (hs_n26zz6n) {
        var hs_n126zz6r = hs_n26zz6n;
        if (hs_n26zz6n.notEvaluated) {
            hs_n126zz6r = hs_n26zz6n.hscall();
        }
        var hs_sat26zzg3 = new $hs.Func(1);
        hs_sat26zzg3.evaluate = function (hs_l26zz6s) {
            var hs_wild26zzg5 = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_n126zz6r, hs_l26zz6s);
            switch (hs_wild26zzg5.tag) {
            case 1:
                var hs_sat26zzg6 = new $hs.Thunk();
                hs_sat26zzg6.evaluateOnce = function () {
                    var hs_f26zz6N = new $hs.Thunk();
                    hs_f26zz6N.evaluateOnce = function () {
                        var hs_sat26zzgd = new $hs.Thunk();
                        hs_sat26zzgd.evaluateOnce = function () {
                            var hs_sizze26zz6w = new $hs.Thunk();
                            hs_sizze26zz6w.evaluateOnce = function () {
                                return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_n126zz6r, hs_defaultSizze25raqm);
                            };
                            var hs_sat26zzgf = new $hs.Func(1);
                            hs_sat26zzgf.evaluate = function (hs_fp26zz6A) {
                                var hs_sat26zzgh = new $hs.Thunk();
                                hs_sat26zzgh.evaluateOnce = function () {
                                    var hs_tpl26zz6G = hs_fp26zz6A;
                                    if (hs_fp26zz6A.notEvaluated) {
                                        hs_tpl26zz6G = hs_fp26zz6A.hscall();
                                    }
                                    var hs_tpl126zz6J = hs_sizze26zz6w;
                                    if (hs_sizze26zz6w.notEvaluated) {
                                        hs_tpl126zz6J = hs_sizze26zz6w.hscall();
                                    }
                                    var hs_sat26zzgm = new $hs.Data(1);
                                    hs_sat26zzgm.data = [0];
                                    var hs_sat26zzgi = new $hs.Data(1);
                                    hs_sat26zzgi.data = [0];
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_tpl26zz6G, hs_sat26zzgi, hs_sat26zzgm, hs_tpl126zz6J];
                                    return $res;
                                };
                                var hs_sat26zzgg = new $hs.Thunk();
                                hs_sat26zzgg.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                                };
                                return $hs.modules.Prelude.hs_zdzn.hscall(hs_sat26zzgg, hs_sat26zzgh);
                            };
                            var hs_sat26zzge = new $hs.Thunk();
                            hs_sat26zzge.evaluateOnce = function () {
                                return $hs.modules.DataziByteStringziInternal.hs_mallocByteString.hscall(hs_sizze26zz6w);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzge, hs_sat26zzgf);
                        };
                        return $hs.modules.GHCziBase.hs_const.hscall(hs_sat26zzgd);
                    };
                    var hs_sat26zzg8 = new $hs.Func(2);
                    hs_sat26zzg8.evaluate = function (hs_k26zz6X, hs_buf26zz6T) {
                        var hs_sat26zzg9 = new $hs.Thunk();
                        hs_sat26zzg9.evaluateOnce = function () {
                            var hs_sat26zzgb = new $hs.Func(1);
                            hs_sat26zzgb.evaluate = function (hs_bufzq26zz6W) {
                                var hs_sat26zzgc = new $hs.Thunk();
                                hs_sat26zzgc.evaluateOnce = function () {
                                    return hs_k26zz6X.hscall(hs_bufzq26zz6W);
                                };
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzgc);
                            };
                            var hs_sat26zzga = new $hs.Thunk();
                            hs_sat26zzga.evaluateOnce = function () {
                                return hs_f26zz6N.hscall(hs_buf26zz6T);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzga, hs_sat26zzgb);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.DataziByteStringziInternal.hs_inlinePerformIO, hs_sat26zzg9);
                    };
                    var hs_sat26zzg7 = new $hs.Func(1);
                    hs_sat26zzg7.evaluate = function (hs_tpl26zz6P) {
                        if (hs_tpl26zz6P.notEvaluated) {
                            return hs_tpl26zz6P.hscall();
                        } else {
                            return hs_tpl26zz6P;
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zzg7, hs_sat26zzg8);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.DataziSerializzeziBuilder.hs_flush, hs_sat26zzg6);
            case 2:
                if ($hs.modules.GHCziBase.hs_id.notEvaluated) {
                    return $hs.modules.GHCziBase.hs_id.hscall();
                } else {
                    return $hs.modules.GHCziBase.hs_id;
                }
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_withSizze25raqo, hs_sat26zzg3);
    };
    hs_a325raAO.evaluate = function (hs_n26zz77, hs_f26zz7q) {
        var hs_sat26zzgo = new $hs.Thunk();
        hs_sat26zzgo.evaluateOnce = function () {
            var hs_sat26zzgq = new $hs.Func(2);
            hs_sat26zzgq.evaluate = function (hs_k26zz7G, hs_buf26zz7e) {
                var hs_sat26zzgr = new $hs.Thunk();
                hs_sat26zzgr.evaluateOnce = function () {
                    var hs_sat26zzgt = new $hs.Func(1);
                    hs_sat26zzgt.evaluate = function (hs_bufzq26zz7F) {
                        var hs_sat26zzgD = new $hs.Thunk();
                        hs_sat26zzgD.evaluateOnce = function () {
                            return hs_k26zz7G.hscall(hs_bufzq26zz7F);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzgD);
                    };
                    var hs_sat26zzgs = new $hs.Thunk();
                    hs_sat26zzgs.evaluateOnce = function () {
                        var hs_wild26zzgv = hs_buf26zz7e;
                        if (hs_buf26zz7e.notEvaluated) {
                            hs_wild26zzgv = hs_buf26zz7e.hscall();
                        }
                        var hs_fp26zz7k = hs_wild26zzgv.data[0];
                        var hs_o26zz7n = hs_wild26zzgv.data[1];
                        var hs_u26zz7o = hs_wild26zzgv.data[2];
                        var hs_l26zz7w = hs_wild26zzgv.data[3];
                        var hs_sat26zzgw = new $hs.Thunk();
                        hs_sat26zzgw.evaluateOnce = function () {
                            var hs_sat26zzgA = new $hs.Thunk();
                            hs_sat26zzgA.evaluateOnce = function () {
                                var hs_tpl26zz7z = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_u26zz7o, hs_n26zz77);
                                var hs_tpl126zz7A = $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_l26zz7w, hs_n26zz77);
                                var $res = new $hs.Data(1);
                                $res.data = [hs_fp26zz7k, hs_o26zz7n, hs_tpl26zz7z, hs_tpl126zz7A];
                                return $res;
                            };
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzgA);
                        };
                        var hs_sat26zzgu = new $hs.Thunk();
                        hs_sat26zzgu.evaluateOnce = function () {
                            var hs_sat26zzgx = new $hs.Func(1);
                            hs_sat26zzgx.evaluate = function (hs_p26zz7m) {
                                var hs_sat26zzgy = new $hs.Thunk();
                                hs_sat26zzgy.evaluateOnce = function () {
                                    var hs_sat26zzgz = new $hs.Thunk();
                                    hs_sat26zzgz.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_o26zz7n, hs_u26zz7o);
                                    };
                                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zz7m, hs_sat26zzgz);
                                };
                                return hs_f26zz7q.hscall(hs_sat26zzgy);
                            };
                            return $hs.modules.ForeignziForeignPtrziImp.hs_withForeignPtr.hscall(hs_fp26zz7k, hs_sat26zzgx);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzgu, hs_sat26zzgw);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzgs, hs_sat26zzgt);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.DataziByteStringziInternal.hs_inlinePerformIO, hs_sat26zzgr);
            };
            var hs_sat26zzgp = new $hs.Func(1);
            hs_sat26zzgp.evaluate = function (hs_tpl26zz7a) {
                if (hs_tpl26zz7a.notEvaluated) {
                    return hs_tpl26zz7a.hscall();
                } else {
                    return hs_tpl26zz7a;
                }
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zzgp, hs_sat26zzgq);
        };
        var hs_sat26zzgn = new $hs.Thunk();
        hs_sat26zzgn.evaluateOnce = function () {
            return hs_ensureFree25raqq.hscall(hs_n26zz77);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26zzgn, hs_sat26zzgo);
    };
    hs_writeN25raqr.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a325raAO.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_sat26zzgF.evaluateOnce = function () {
        var hs_sat26zzgE = new $hs.Thunk();
        hs_sat26zzgE.evaluateOnce = function () {
            return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
        };
        return $hs.modules.GHCziBase.hs_flip.hscall(hs_sat26zzgE);
    };
    hs_sat26zzgG.data = [1];
    hs_sat26zzgH.evaluate = function (hs_eta1cW6l3) {
        return hs_writeN25raqr.hscall(hs_sat26zzgG, hs_eta1cW6l3);
    };
    this.hs_singleton.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26zzgH, hs_sat26zzgF);
    };
    this.hs_putWord64le.evaluate = function (hs_w26zz7S) {
        var hs_a426zz7T = new $hs.Thunk();
        hs_a426zz7T.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64, $hs.modules.GHCziWord.hs_zdfNumWord32, hs_w26zz7S);
        };
        var hs_b26zz81 = new $hs.Thunk();
        hs_b26zz81.evaluateOnce = function () {
            var hs_sat26zzhD = new $hs.Thunk();
            hs_sat26zzhD.evaluateOnce = function () {
                var hs_wild26zzhE = hs_w26zz7S;
                if (hs_w26zz7S.notEvaluated) {
                    hs_wild26zzhE = hs_w26zz7S.hscall();
                }
                var hs_w126zz7X = hs_wild26zzhE.data[0];
                var hs_wild126zz7Z = $hs.modules.GHCziIntWord64.hs_uncheckedShiftRL64zh.hscall(hs_w126zz7X, 32);
                var $res = new $hs.Data(1);
                $res.data = [hs_wild126zz7Z];
                return $res;
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64, $hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26zzhD);
        };
        var hs_sat26zzgJ = new $hs.Func(1);
        hs_sat26zzgJ.evaluate = function (hs_p26zz85) {
            var hs_sat26zzgM = new $hs.Thunk();
            hs_sat26zzgM.evaluateOnce = function () {
                var hs_sat26zzgP = new $hs.Thunk();
                hs_sat26zzgP.evaluateOnce = function () {
                    var hs_sat26zzgX = new $hs.Thunk();
                    hs_sat26zzgX.evaluateOnce = function () {
                        var hs_sat26zzh5 = new $hs.Thunk();
                        hs_sat26zzh5.evaluateOnce = function () {
                            var hs_sat26zzhd = new $hs.Thunk();
                            hs_sat26zzhd.evaluateOnce = function () {
                                var hs_sat26zzhi = new $hs.Thunk();
                                hs_sat26zzhi.evaluateOnce = function () {
                                    var hs_sat26zzhq = new $hs.Thunk();
                                    hs_sat26zzhq.evaluateOnce = function () {
                                        var hs_sat26zzhy = new $hs.Thunk();
                                        hs_sat26zzhy.evaluateOnce = function () {
                                            var hs_sat26zzhA = new $hs.Thunk();
                                            hs_sat26zzhA.evaluateOnce = function () {
                                                var hs_wild26zzhB = hs_b26zz81;
                                                if (hs_b26zz81.notEvaluated) {
                                                    hs_wild26zzhB = hs_b26zz81.hscall();
                                                }
                                                var hs_w126zz8Z = hs_wild26zzhB.data[0];
                                                var hs_sat26zzhC = hs_w126zz8Z >> 24;
                                                var $res = new $hs.Data(1);
                                                $res.data = [hs_sat26zzhC];
                                                return $res;
                                            };
                                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zzhA);
                                        };
                                        var hs_sat26zzhx = new $hs.Thunk();
                                        hs_sat26zzhx.evaluateOnce = function () {
                                            var hs_sat26zzhz = new $hs.Data(1);
                                            hs_sat26zzhz.data = [7];
                                            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zz85, hs_sat26zzhz);
                                        };
                                        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26zzhx, hs_sat26zzhy);
                                    };
                                    var hs_sat26zzhp = new $hs.Thunk();
                                    hs_sat26zzhp.evaluateOnce = function () {
                                        var hs_sat26zzhs = new $hs.Thunk();
                                        hs_sat26zzhs.evaluateOnce = function () {
                                            var hs_sat26zzhu = new $hs.Thunk();
                                            hs_sat26zzhu.evaluateOnce = function () {
                                                var hs_wild26zzhv = hs_b26zz81;
                                                if (hs_b26zz81.notEvaluated) {
                                                    hs_wild26zzhv = hs_b26zz81.hscall();
                                                }
                                                var hs_w126zz8Q = hs_wild26zzhv.data[0];
                                                var hs_sat26zzhw = hs_w126zz8Q >> 16;
                                                var $res = new $hs.Data(1);
                                                $res.data = [hs_sat26zzhw];
                                                return $res;
                                            };
                                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zzhu);
                                        };
                                        var hs_sat26zzhr = new $hs.Thunk();
                                        hs_sat26zzhr.evaluateOnce = function () {
                                            var hs_sat26zzht = new $hs.Data(1);
                                            hs_sat26zzht.data = [6];
                                            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zz85, hs_sat26zzht);
                                        };
                                        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26zzhr, hs_sat26zzhs);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzhp, hs_sat26zzhq);
                                };
                                var hs_sat26zzhh = new $hs.Thunk();
                                hs_sat26zzhh.evaluateOnce = function () {
                                    var hs_sat26zzhk = new $hs.Thunk();
                                    hs_sat26zzhk.evaluateOnce = function () {
                                        var hs_sat26zzhm = new $hs.Thunk();
                                        hs_sat26zzhm.evaluateOnce = function () {
                                            var hs_wild26zzhn = hs_b26zz81;
                                            if (hs_b26zz81.notEvaluated) {
                                                hs_wild26zzhn = hs_b26zz81.hscall();
                                            }
                                            var hs_w126zz8H = hs_wild26zzhn.data[0];
                                            var hs_sat26zzho = hs_w126zz8H >> 8;
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_sat26zzho];
                                            return $res;
                                        };
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zzhm);
                                    };
                                    var hs_sat26zzhj = new $hs.Thunk();
                                    hs_sat26zzhj.evaluateOnce = function () {
                                        var hs_sat26zzhl = new $hs.Data(1);
                                        hs_sat26zzhl.data = [5];
                                        return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zz85, hs_sat26zzhl);
                                    };
                                    return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26zzhj, hs_sat26zzhk);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzhh, hs_sat26zzhi);
                            };
                            var hs_sat26zzhc = new $hs.Thunk();
                            hs_sat26zzhc.evaluateOnce = function () {
                                var hs_sat26zzhf = new $hs.Thunk();
                                hs_sat26zzhf.evaluateOnce = function () {
                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_b26zz81);
                                };
                                var hs_sat26zzhe = new $hs.Thunk();
                                hs_sat26zzhe.evaluateOnce = function () {
                                    var hs_sat26zzhg = new $hs.Data(1);
                                    hs_sat26zzhg.data = [4];
                                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zz85, hs_sat26zzhg);
                                };
                                return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26zzhe, hs_sat26zzhf);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzhc, hs_sat26zzhd);
                        };
                        var hs_sat26zzh4 = new $hs.Thunk();
                        hs_sat26zzh4.evaluateOnce = function () {
                            var hs_sat26zzh7 = new $hs.Thunk();
                            hs_sat26zzh7.evaluateOnce = function () {
                                var hs_sat26zzh9 = new $hs.Thunk();
                                hs_sat26zzh9.evaluateOnce = function () {
                                    var hs_wild26zzha = hs_a426zz7T;
                                    if (hs_a426zz7T.notEvaluated) {
                                        hs_wild26zzha = hs_a426zz7T.hscall();
                                    }
                                    var hs_w126zz8u = hs_wild26zzha.data[0];
                                    var hs_sat26zzhb = hs_w126zz8u >> 24;
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_sat26zzhb];
                                    return $res;
                                };
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zzh9);
                            };
                            var hs_sat26zzh6 = new $hs.Thunk();
                            hs_sat26zzh6.evaluateOnce = function () {
                                var hs_sat26zzh8 = new $hs.Data(1);
                                hs_sat26zzh8.data = [3];
                                return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zz85, hs_sat26zzh8);
                            };
                            return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26zzh6, hs_sat26zzh7);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzh4, hs_sat26zzh5);
                    };
                    var hs_sat26zzgW = new $hs.Thunk();
                    hs_sat26zzgW.evaluateOnce = function () {
                        var hs_sat26zzgZ = new $hs.Thunk();
                        hs_sat26zzgZ.evaluateOnce = function () {
                            var hs_sat26zzh1 = new $hs.Thunk();
                            hs_sat26zzh1.evaluateOnce = function () {
                                var hs_wild26zzh2 = hs_a426zz7T;
                                if (hs_a426zz7T.notEvaluated) {
                                    hs_wild26zzh2 = hs_a426zz7T.hscall();
                                }
                                var hs_w126zz8l = hs_wild26zzh2.data[0];
                                var hs_sat26zzh3 = hs_w126zz8l >> 16;
                                var $res = new $hs.Data(1);
                                $res.data = [hs_sat26zzh3];
                                return $res;
                            };
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zzh1);
                        };
                        var hs_sat26zzgY = new $hs.Thunk();
                        hs_sat26zzgY.evaluateOnce = function () {
                            var hs_sat26zzh0 = new $hs.Data(1);
                            hs_sat26zzh0.data = [2];
                            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zz85, hs_sat26zzh0);
                        };
                        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26zzgY, hs_sat26zzgZ);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzgW, hs_sat26zzgX);
                };
                var hs_sat26zzgO = new $hs.Thunk();
                hs_sat26zzgO.evaluateOnce = function () {
                    var hs_sat26zzgR = new $hs.Thunk();
                    hs_sat26zzgR.evaluateOnce = function () {
                        var hs_sat26zzgT = new $hs.Thunk();
                        hs_sat26zzgT.evaluateOnce = function () {
                            var hs_wild26zzgU = hs_a426zz7T;
                            if (hs_a426zz7T.notEvaluated) {
                                hs_wild26zzgU = hs_a426zz7T.hscall();
                            }
                            var hs_w126zz8c = hs_wild26zzgU.data[0];
                            var hs_sat26zzgV = hs_w126zz8c >> 8;
                            var $res = new $hs.Data(1);
                            $res.data = [hs_sat26zzgV];
                            return $res;
                        };
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zzgT);
                    };
                    var hs_sat26zzgQ = new $hs.Thunk();
                    hs_sat26zzgQ.evaluateOnce = function () {
                        var hs_sat26zzgS = new $hs.Data(1);
                        hs_sat26zzgS.data = [1];
                        return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zz85, hs_sat26zzgS);
                    };
                    return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26zzgQ, hs_sat26zzgR);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzgO, hs_sat26zzgP);
            };
            var hs_sat26zzgL = new $hs.Thunk();
            hs_sat26zzgL.evaluateOnce = function () {
                var hs_sat26zzgN = new $hs.Thunk();
                hs_sat26zzgN.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_a426zz7T);
                };
                return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_p26zz85, hs_sat26zzgN);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzgL, hs_sat26zzgM);
        };
        var hs_sat26zzgK = new $hs.Data(1);
        hs_sat26zzgK.data = [8];
        var hs_sat26zzgI = new $hs.Func(1);
        hs_sat26zzgI.evaluate = function (hs_eta1cW6l3) {
            return hs_writeN25raqr.hscall(hs_sat26zzgK, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zzgI, hs_sat26zzgJ);
    };
    this.hs_putWord64be.evaluate = function (hs_w26zz9d) {
        var hs_b26zz9e = new $hs.Thunk();
        hs_b26zz9e.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64, $hs.modules.GHCziWord.hs_zdfNumWord32, hs_w26zz9d);
        };
        var hs_a426zz9m = new $hs.Thunk();
        hs_a426zz9m.evaluateOnce = function () {
            var hs_sat26zziA = new $hs.Thunk();
            hs_sat26zziA.evaluateOnce = function () {
                var hs_wild26zziB = hs_w26zz9d;
                if (hs_w26zz9d.notEvaluated) {
                    hs_wild26zziB = hs_w26zz9d.hscall();
                }
                var hs_w126zz9i = hs_wild26zziB.data[0];
                var hs_wild126zz9k = $hs.modules.GHCziIntWord64.hs_uncheckedShiftRL64zh.hscall(hs_w126zz9i, 32);
                var $res = new $hs.Data(1);
                $res.data = [hs_wild126zz9k];
                return $res;
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64, $hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26zziA);
        };
        var hs_sat26zzhG = new $hs.Func(1);
        hs_sat26zzhG.evaluate = function (hs_p26zz9q) {
            var hs_sat26zzhJ = new $hs.Thunk();
            hs_sat26zzhJ.evaluateOnce = function () {
                var hs_sat26zzhP = new $hs.Thunk();
                hs_sat26zzhP.evaluateOnce = function () {
                    var hs_sat26zzhX = new $hs.Thunk();
                    hs_sat26zzhX.evaluateOnce = function () {
                        var hs_sat26zzi5 = new $hs.Thunk();
                        hs_sat26zzi5.evaluateOnce = function () {
                            var hs_sat26zzia = new $hs.Thunk();
                            hs_sat26zzia.evaluateOnce = function () {
                                var hs_sat26zzii = new $hs.Thunk();
                                hs_sat26zzii.evaluateOnce = function () {
                                    var hs_sat26zziq = new $hs.Thunk();
                                    hs_sat26zziq.evaluateOnce = function () {
                                        var hs_sat26zziy = new $hs.Thunk();
                                        hs_sat26zziy.evaluateOnce = function () {
                                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_b26zz9e);
                                        };
                                        var hs_sat26zzix = new $hs.Thunk();
                                        hs_sat26zzix.evaluateOnce = function () {
                                            var hs_sat26zziz = new $hs.Data(1);
                                            hs_sat26zziz.data = [7];
                                            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zz9q, hs_sat26zziz);
                                        };
                                        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26zzix, hs_sat26zziy);
                                    };
                                    var hs_sat26zzip = new $hs.Thunk();
                                    hs_sat26zzip.evaluateOnce = function () {
                                        var hs_sat26zzis = new $hs.Thunk();
                                        hs_sat26zzis.evaluateOnce = function () {
                                            var hs_sat26zziu = new $hs.Thunk();
                                            hs_sat26zziu.evaluateOnce = function () {
                                                var hs_wild26zziv = hs_b26zz9e;
                                                if (hs_b26zz9e.notEvaluated) {
                                                    hs_wild26zziv = hs_b26zz9e.hscall();
                                                }
                                                var hs_w126zzag = hs_wild26zziv.data[0];
                                                var hs_sat26zziw = hs_w126zzag >> 8;
                                                var $res = new $hs.Data(1);
                                                $res.data = [hs_sat26zziw];
                                                return $res;
                                            };
                                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zziu);
                                        };
                                        var hs_sat26zzir = new $hs.Thunk();
                                        hs_sat26zzir.evaluateOnce = function () {
                                            var hs_sat26zzit = new $hs.Data(1);
                                            hs_sat26zzit.data = [6];
                                            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zz9q, hs_sat26zzit);
                                        };
                                        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26zzir, hs_sat26zzis);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzip, hs_sat26zziq);
                                };
                                var hs_sat26zzih = new $hs.Thunk();
                                hs_sat26zzih.evaluateOnce = function () {
                                    var hs_sat26zzik = new $hs.Thunk();
                                    hs_sat26zzik.evaluateOnce = function () {
                                        var hs_sat26zzim = new $hs.Thunk();
                                        hs_sat26zzim.evaluateOnce = function () {
                                            var hs_wild26zzin = hs_b26zz9e;
                                            if (hs_b26zz9e.notEvaluated) {
                                                hs_wild26zzin = hs_b26zz9e.hscall();
                                            }
                                            var hs_w126zza7 = hs_wild26zzin.data[0];
                                            var hs_sat26zzio = hs_w126zza7 >> 16;
                                            var $res = new $hs.Data(1);
                                            $res.data = [hs_sat26zzio];
                                            return $res;
                                        };
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zzim);
                                    };
                                    var hs_sat26zzij = new $hs.Thunk();
                                    hs_sat26zzij.evaluateOnce = function () {
                                        var hs_sat26zzil = new $hs.Data(1);
                                        hs_sat26zzil.data = [5];
                                        return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zz9q, hs_sat26zzil);
                                    };
                                    return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26zzij, hs_sat26zzik);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzih, hs_sat26zzii);
                            };
                            var hs_sat26zzi9 = new $hs.Thunk();
                            hs_sat26zzi9.evaluateOnce = function () {
                                var hs_sat26zzic = new $hs.Thunk();
                                hs_sat26zzic.evaluateOnce = function () {
                                    var hs_sat26zzie = new $hs.Thunk();
                                    hs_sat26zzie.evaluateOnce = function () {
                                        var hs_wild26zzif = hs_b26zz9e;
                                        if (hs_b26zz9e.notEvaluated) {
                                            hs_wild26zzif = hs_b26zz9e.hscall();
                                        }
                                        var hs_w126zz9Y = hs_wild26zzif.data[0];
                                        var hs_sat26zzig = hs_w126zz9Y >> 24;
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_sat26zzig];
                                        return $res;
                                    };
                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zzie);
                                };
                                var hs_sat26zzib = new $hs.Thunk();
                                hs_sat26zzib.evaluateOnce = function () {
                                    var hs_sat26zzid = new $hs.Data(1);
                                    hs_sat26zzid.data = [4];
                                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zz9q, hs_sat26zzid);
                                };
                                return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26zzib, hs_sat26zzic);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzi9, hs_sat26zzia);
                        };
                        var hs_sat26zzi4 = new $hs.Thunk();
                        hs_sat26zzi4.evaluateOnce = function () {
                            var hs_sat26zzi7 = new $hs.Thunk();
                            hs_sat26zzi7.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_a426zz9m);
                            };
                            var hs_sat26zzi6 = new $hs.Thunk();
                            hs_sat26zzi6.evaluateOnce = function () {
                                var hs_sat26zzi8 = new $hs.Data(1);
                                hs_sat26zzi8.data = [3];
                                return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zz9q, hs_sat26zzi8);
                            };
                            return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26zzi6, hs_sat26zzi7);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzi4, hs_sat26zzi5);
                    };
                    var hs_sat26zzhW = new $hs.Thunk();
                    hs_sat26zzhW.evaluateOnce = function () {
                        var hs_sat26zzhZ = new $hs.Thunk();
                        hs_sat26zzhZ.evaluateOnce = function () {
                            var hs_sat26zzi1 = new $hs.Thunk();
                            hs_sat26zzi1.evaluateOnce = function () {
                                var hs_wild26zzi2 = hs_a426zz9m;
                                if (hs_a426zz9m.notEvaluated) {
                                    hs_wild26zzi2 = hs_a426zz9m.hscall();
                                }
                                var hs_w126zz9L = hs_wild26zzi2.data[0];
                                var hs_sat26zzi3 = hs_w126zz9L >> 8;
                                var $res = new $hs.Data(1);
                                $res.data = [hs_sat26zzi3];
                                return $res;
                            };
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zzi1);
                        };
                        var hs_sat26zzhY = new $hs.Thunk();
                        hs_sat26zzhY.evaluateOnce = function () {
                            var hs_sat26zzi0 = new $hs.Data(1);
                            hs_sat26zzi0.data = [2];
                            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zz9q, hs_sat26zzi0);
                        };
                        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26zzhY, hs_sat26zzhZ);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzhW, hs_sat26zzhX);
                };
                var hs_sat26zzhO = new $hs.Thunk();
                hs_sat26zzhO.evaluateOnce = function () {
                    var hs_sat26zzhR = new $hs.Thunk();
                    hs_sat26zzhR.evaluateOnce = function () {
                        var hs_sat26zzhT = new $hs.Thunk();
                        hs_sat26zzhT.evaluateOnce = function () {
                            var hs_wild26zzhU = hs_a426zz9m;
                            if (hs_a426zz9m.notEvaluated) {
                                hs_wild26zzhU = hs_a426zz9m.hscall();
                            }
                            var hs_w126zz9C = hs_wild26zzhU.data[0];
                            var hs_sat26zzhV = hs_w126zz9C >> 16;
                            var $res = new $hs.Data(1);
                            $res.data = [hs_sat26zzhV];
                            return $res;
                        };
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zzhT);
                    };
                    var hs_sat26zzhQ = new $hs.Thunk();
                    hs_sat26zzhQ.evaluateOnce = function () {
                        var hs_sat26zzhS = new $hs.Data(1);
                        hs_sat26zzhS.data = [1];
                        return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zz9q, hs_sat26zzhS);
                    };
                    return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26zzhQ, hs_sat26zzhR);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzhO, hs_sat26zzhP);
            };
            var hs_sat26zzhI = new $hs.Thunk();
            hs_sat26zzhI.evaluateOnce = function () {
                var hs_sat26zzhK = new $hs.Thunk();
                hs_sat26zzhK.evaluateOnce = function () {
                    var hs_sat26zzhL = new $hs.Thunk();
                    hs_sat26zzhL.evaluateOnce = function () {
                        var hs_wild26zzhM = hs_a426zz9m;
                        if (hs_a426zz9m.notEvaluated) {
                            hs_wild26zzhM = hs_a426zz9m.hscall();
                        }
                        var hs_w126zz9t = hs_wild26zzhM.data[0];
                        var hs_sat26zzhN = hs_w126zz9t >> 24;
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26zzhN];
                        return $res;
                    };
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zzhL);
                };
                return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_p26zz9q, hs_sat26zzhK);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzhI, hs_sat26zzhJ);
        };
        var hs_sat26zzhH = new $hs.Data(1);
        hs_sat26zzhH.data = [8];
        var hs_sat26zzhF = new $hs.Func(1);
        hs_sat26zzhF.evaluate = function (hs_eta1cW6l3) {
            return hs_writeN25raqr.hscall(hs_sat26zzhH, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zzhF, hs_sat26zzhG);
    };
    this.hs_putWord32le.evaluate = function (hs_w26zzaB) {
        var hs_sat26zziD = new $hs.Func(1);
        hs_sat26zziD.evaluate = function (hs_p26zzaA) {
            var hs_sat26zziG = new $hs.Thunk();
            hs_sat26zziG.evaluateOnce = function () {
                var hs_sat26zziJ = new $hs.Thunk();
                hs_sat26zziJ.evaluateOnce = function () {
                    var hs_sat26zziR = new $hs.Thunk();
                    hs_sat26zziR.evaluateOnce = function () {
                        var hs_sat26zziZ = new $hs.Thunk();
                        hs_sat26zziZ.evaluateOnce = function () {
                            var hs_sat26zzj1 = new $hs.Thunk();
                            hs_sat26zzj1.evaluateOnce = function () {
                                var hs_wild26zzj2 = hs_w26zzaB;
                                if (hs_w26zzaB.notEvaluated) {
                                    hs_wild26zzj2 = hs_w26zzaB.hscall();
                                }
                                var hs_w126zzb0 = hs_wild26zzj2.data[0];
                                var hs_sat26zzj3 = hs_w126zzb0 >> 24;
                                var $res = new $hs.Data(1);
                                $res.data = [hs_sat26zzj3];
                                return $res;
                            };
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zzj1);
                        };
                        var hs_sat26zziY = new $hs.Thunk();
                        hs_sat26zziY.evaluateOnce = function () {
                            var hs_sat26zzj0 = new $hs.Data(1);
                            hs_sat26zzj0.data = [3];
                            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zzaA, hs_sat26zzj0);
                        };
                        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26zziY, hs_sat26zziZ);
                    };
                    var hs_sat26zziQ = new $hs.Thunk();
                    hs_sat26zziQ.evaluateOnce = function () {
                        var hs_sat26zziT = new $hs.Thunk();
                        hs_sat26zziT.evaluateOnce = function () {
                            var hs_sat26zziV = new $hs.Thunk();
                            hs_sat26zziV.evaluateOnce = function () {
                                var hs_wild26zziW = hs_w26zzaB;
                                if (hs_w26zzaB.notEvaluated) {
                                    hs_wild26zziW = hs_w26zzaB.hscall();
                                }
                                var hs_w126zzaR = hs_wild26zziW.data[0];
                                var hs_sat26zziX = hs_w126zzaR >> 16;
                                var $res = new $hs.Data(1);
                                $res.data = [hs_sat26zziX];
                                return $res;
                            };
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zziV);
                        };
                        var hs_sat26zziS = new $hs.Thunk();
                        hs_sat26zziS.evaluateOnce = function () {
                            var hs_sat26zziU = new $hs.Data(1);
                            hs_sat26zziU.data = [2];
                            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zzaA, hs_sat26zziU);
                        };
                        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26zziS, hs_sat26zziT);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zziQ, hs_sat26zziR);
                };
                var hs_sat26zziI = new $hs.Thunk();
                hs_sat26zziI.evaluateOnce = function () {
                    var hs_sat26zziL = new $hs.Thunk();
                    hs_sat26zziL.evaluateOnce = function () {
                        var hs_sat26zziN = new $hs.Thunk();
                        hs_sat26zziN.evaluateOnce = function () {
                            var hs_wild26zziO = hs_w26zzaB;
                            if (hs_w26zzaB.notEvaluated) {
                                hs_wild26zziO = hs_w26zzaB.hscall();
                            }
                            var hs_w126zzaI = hs_wild26zziO.data[0];
                            var hs_sat26zziP = hs_w126zzaI >> 8;
                            var $res = new $hs.Data(1);
                            $res.data = [hs_sat26zziP];
                            return $res;
                        };
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zziN);
                    };
                    var hs_sat26zziK = new $hs.Thunk();
                    hs_sat26zziK.evaluateOnce = function () {
                        var hs_sat26zziM = new $hs.Data(1);
                        hs_sat26zziM.data = [1];
                        return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zzaA, hs_sat26zziM);
                    };
                    return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26zziK, hs_sat26zziL);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zziI, hs_sat26zziJ);
            };
            var hs_sat26zziF = new $hs.Thunk();
            hs_sat26zziF.evaluateOnce = function () {
                var hs_sat26zziH = new $hs.Thunk();
                hs_sat26zziH.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_w26zzaB);
                };
                return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_p26zzaA, hs_sat26zziH);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zziF, hs_sat26zziG);
        };
        var hs_sat26zziE = new $hs.Data(1);
        hs_sat26zziE.data = [4];
        var hs_sat26zziC = new $hs.Func(1);
        hs_sat26zziC.evaluate = function (hs_eta1cW6l3) {
            return hs_writeN25raqr.hscall(hs_sat26zziE, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zziC, hs_sat26zziD);
    };
    this.hs_putWord32be.evaluate = function (hs_w26zzbd) {
        var hs_sat26zzj5 = new $hs.Func(1);
        hs_sat26zzj5.evaluate = function (hs_p26zzbc) {
            var hs_sat26zzj8 = new $hs.Thunk();
            hs_sat26zzj8.evaluateOnce = function () {
                var hs_sat26zzje = new $hs.Thunk();
                hs_sat26zzje.evaluateOnce = function () {
                    var hs_sat26zzjm = new $hs.Thunk();
                    hs_sat26zzjm.evaluateOnce = function () {
                        var hs_sat26zzju = new $hs.Thunk();
                        hs_sat26zzju.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_w26zzbd);
                        };
                        var hs_sat26zzjt = new $hs.Thunk();
                        hs_sat26zzjt.evaluateOnce = function () {
                            var hs_sat26zzjv = new $hs.Data(1);
                            hs_sat26zzjv.data = [3];
                            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zzbc, hs_sat26zzjv);
                        };
                        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26zzjt, hs_sat26zzju);
                    };
                    var hs_sat26zzjl = new $hs.Thunk();
                    hs_sat26zzjl.evaluateOnce = function () {
                        var hs_sat26zzjo = new $hs.Thunk();
                        hs_sat26zzjo.evaluateOnce = function () {
                            var hs_sat26zzjq = new $hs.Thunk();
                            hs_sat26zzjq.evaluateOnce = function () {
                                var hs_wild26zzjr = hs_w26zzbd;
                                if (hs_w26zzbd.notEvaluated) {
                                    hs_wild26zzjr = hs_w26zzbd.hscall();
                                }
                                var hs_w126zzby = hs_wild26zzjr.data[0];
                                var hs_sat26zzjs = hs_w126zzby >> 8;
                                var $res = new $hs.Data(1);
                                $res.data = [hs_sat26zzjs];
                                return $res;
                            };
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zzjq);
                        };
                        var hs_sat26zzjn = new $hs.Thunk();
                        hs_sat26zzjn.evaluateOnce = function () {
                            var hs_sat26zzjp = new $hs.Data(1);
                            hs_sat26zzjp.data = [2];
                            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zzbc, hs_sat26zzjp);
                        };
                        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26zzjn, hs_sat26zzjo);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzjl, hs_sat26zzjm);
                };
                var hs_sat26zzjd = new $hs.Thunk();
                hs_sat26zzjd.evaluateOnce = function () {
                    var hs_sat26zzjg = new $hs.Thunk();
                    hs_sat26zzjg.evaluateOnce = function () {
                        var hs_sat26zzji = new $hs.Thunk();
                        hs_sat26zzji.evaluateOnce = function () {
                            var hs_wild26zzjj = hs_w26zzbd;
                            if (hs_w26zzbd.notEvaluated) {
                                hs_wild26zzjj = hs_w26zzbd.hscall();
                            }
                            var hs_w126zzbp = hs_wild26zzjj.data[0];
                            var hs_sat26zzjk = hs_w126zzbp >> 16;
                            var $res = new $hs.Data(1);
                            $res.data = [hs_sat26zzjk];
                            return $res;
                        };
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zzji);
                    };
                    var hs_sat26zzjf = new $hs.Thunk();
                    hs_sat26zzjf.evaluateOnce = function () {
                        var hs_sat26zzjh = new $hs.Data(1);
                        hs_sat26zzjh.data = [1];
                        return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zzbc, hs_sat26zzjh);
                    };
                    return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26zzjf, hs_sat26zzjg);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzjd, hs_sat26zzje);
            };
            var hs_sat26zzj7 = new $hs.Thunk();
            hs_sat26zzj7.evaluateOnce = function () {
                var hs_sat26zzj9 = new $hs.Thunk();
                hs_sat26zzj9.evaluateOnce = function () {
                    var hs_sat26zzja = new $hs.Thunk();
                    hs_sat26zzja.evaluateOnce = function () {
                        var hs_wild26zzjb = hs_w26zzbd;
                        if (hs_w26zzbd.notEvaluated) {
                            hs_wild26zzjb = hs_w26zzbd.hscall();
                        }
                        var hs_w126zzbg = hs_wild26zzjb.data[0];
                        var hs_sat26zzjc = hs_w126zzbg >> 24;
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26zzjc];
                        return $res;
                    };
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zzja);
                };
                return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_p26zzbc, hs_sat26zzj9);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzj7, hs_sat26zzj8);
        };
        var hs_sat26zzj6 = new $hs.Data(1);
        hs_sat26zzj6.data = [4];
        var hs_sat26zzj4 = new $hs.Func(1);
        hs_sat26zzj4.evaluate = function (hs_eta1cW6l3) {
            return hs_writeN25raqr.hscall(hs_sat26zzj6, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zzj4, hs_sat26zzj5);
    };
    this.hs_putWord16le.evaluate = function (hs_w26zzbP) {
        var hs_sat26zzjx = new $hs.Func(1);
        hs_sat26zzjx.evaluate = function (hs_p26zzbO) {
            var hs_sat26zzjA = new $hs.Thunk();
            hs_sat26zzjA.evaluateOnce = function () {
                var hs_sat26zzjD = new $hs.Thunk();
                hs_sat26zzjD.evaluateOnce = function () {
                    var hs_sat26zzjF = new $hs.Thunk();
                    hs_sat26zzjF.evaluateOnce = function () {
                        var hs_wild26zzjG = hs_w26zzbP;
                        if (hs_w26zzbP.notEvaluated) {
                            hs_wild26zzjG = hs_w26zzbP.hscall();
                        }
                        var hs_w126zzbW = hs_wild26zzjG.data[0];
                        var hs_sat26zzjH = hs_w126zzbW >> 8;
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26zzjH];
                        return $res;
                    };
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zzjF);
                };
                var hs_sat26zzjC = new $hs.Thunk();
                hs_sat26zzjC.evaluateOnce = function () {
                    var hs_sat26zzjE = new $hs.Data(1);
                    hs_sat26zzjE.data = [1];
                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zzbO, hs_sat26zzjE);
                };
                return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26zzjC, hs_sat26zzjD);
            };
            var hs_sat26zzjz = new $hs.Thunk();
            hs_sat26zzjz.evaluateOnce = function () {
                var hs_sat26zzjB = new $hs.Thunk();
                hs_sat26zzjB.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_w26zzbP);
                };
                return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_p26zzbO, hs_sat26zzjB);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzjz, hs_sat26zzjA);
        };
        var hs_sat26zzjy = new $hs.Data(1);
        hs_sat26zzjy.data = [2];
        var hs_sat26zzjw = new $hs.Func(1);
        hs_sat26zzjw.evaluate = function (hs_eta1cW6l3) {
            return hs_writeN25raqr.hscall(hs_sat26zzjy, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zzjw, hs_sat26zzjx);
    };
    this.hs_putWord16be.evaluate = function (hs_w26zzc7) {
        var hs_sat26zzjJ = new $hs.Func(1);
        hs_sat26zzjJ.evaluate = function (hs_p26zzc6) {
            var hs_sat26zzjM = new $hs.Thunk();
            hs_sat26zzjM.evaluateOnce = function () {
                var hs_sat26zzjS = new $hs.Thunk();
                hs_sat26zzjS.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_w26zzc7);
                };
                var hs_sat26zzjR = new $hs.Thunk();
                hs_sat26zzjR.evaluateOnce = function () {
                    var hs_sat26zzjT = new $hs.Data(1);
                    hs_sat26zzjT.data = [1];
                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zzc6, hs_sat26zzjT);
                };
                return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26zzjR, hs_sat26zzjS);
            };
            var hs_sat26zzjL = new $hs.Thunk();
            hs_sat26zzjL.evaluateOnce = function () {
                var hs_sat26zzjN = new $hs.Thunk();
                hs_sat26zzjN.evaluateOnce = function () {
                    var hs_sat26zzjO = new $hs.Thunk();
                    hs_sat26zzjO.evaluateOnce = function () {
                        var hs_wild26zzjP = hs_w26zzc7;
                        if (hs_w26zzc7.notEvaluated) {
                            hs_wild26zzjP = hs_w26zzc7.hscall();
                        }
                        var hs_w126zzca = hs_wild26zzjP.data[0];
                        var hs_sat26zzjQ = hs_w126zzca >> 8;
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26zzjQ];
                        return $res;
                    };
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zzjO);
                };
                return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_p26zzc6, hs_sat26zzjN);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzjL, hs_sat26zzjM);
        };
        var hs_sat26zzjK = new $hs.Data(1);
        hs_sat26zzjK.data = [2];
        var hs_sat26zzjI = new $hs.Func(1);
        hs_sat26zzjI.evaluate = function (hs_eta1cW6l3) {
            return hs_writeN25raqr.hscall(hs_sat26zzjK, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zzjI, hs_sat26zzjJ);
    };
    this.hs_putWordhost.evaluate = function (hs_w26zzcG) {
        var hs_n26zzcm = new $hs.Thunk();
        hs_n26zzcm.evaluateOnce = function () {
            return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord, $hs.modules.GHCziErr.hs_undefined);
        };
        var hs_sat26zzjV = new $hs.Thunk();
        hs_sat26zzjV.evaluateOnce = function () {
            var hs_sat26zzjX = new $hs.Func(2);
            hs_sat26zzjX.evaluate = function (hs_k26zzcV, hs_buf26zzct) {
                var hs_sat26zzjY = new $hs.Thunk();
                hs_sat26zzjY.evaluateOnce = function () {
                    var hs_sat26zzk0 = new $hs.Func(1);
                    hs_sat26zzk0.evaluate = function (hs_bufzq26zzcU) {
                        var hs_sat26zzka = new $hs.Thunk();
                        hs_sat26zzka.evaluateOnce = function () {
                            return hs_k26zzcV.hscall(hs_bufzq26zzcU);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzka);
                    };
                    var hs_sat26zzjZ = new $hs.Thunk();
                    hs_sat26zzjZ.evaluateOnce = function () {
                        var hs_wild26zzk2 = hs_buf26zzct;
                        if (hs_buf26zzct.notEvaluated) {
                            hs_wild26zzk2 = hs_buf26zzct.hscall();
                        }
                        var hs_fp26zzcz = hs_wild26zzk2.data[0];
                        var hs_o26zzcC = hs_wild26zzk2.data[1];
                        var hs_u26zzcD = hs_wild26zzk2.data[2];
                        var hs_l26zzcL = hs_wild26zzk2.data[3];
                        var hs_sat26zzk3 = new $hs.Thunk();
                        hs_sat26zzk3.evaluateOnce = function () {
                            var hs_sat26zzk7 = new $hs.Thunk();
                            hs_sat26zzk7.evaluateOnce = function () {
                                var hs_tpl26zzcO = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_u26zzcD, hs_n26zzcm);
                                var hs_tpl126zzcP = $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_l26zzcL, hs_n26zzcm);
                                var $res = new $hs.Data(1);
                                $res.data = [hs_fp26zzcz, hs_o26zzcC, hs_tpl26zzcO, hs_tpl126zzcP];
                                return $res;
                            };
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzk7);
                        };
                        var hs_sat26zzk1 = new $hs.Thunk();
                        hs_sat26zzk1.evaluateOnce = function () {
                            var hs_sat26zzk4 = new $hs.Func(1);
                            hs_sat26zzk4.evaluate = function (hs_p26zzcB) {
                                var hs_sat26zzk5 = new $hs.Thunk();
                                hs_sat26zzk5.evaluateOnce = function () {
                                    var hs_sat26zzk6 = new $hs.Thunk();
                                    hs_sat26zzk6.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_o26zzcC, hs_u26zzcD);
                                    };
                                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zzcB, hs_sat26zzk6);
                                };
                                return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord, hs_sat26zzk5, hs_w26zzcG);
                            };
                            return $hs.modules.ForeignziForeignPtrziImp.hs_withForeignPtr.hscall(hs_fp26zzcz, hs_sat26zzk4);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzk1, hs_sat26zzk3);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzjZ, hs_sat26zzk0);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.DataziByteStringziInternal.hs_inlinePerformIO, hs_sat26zzjY);
            };
            var hs_sat26zzjW = new $hs.Func(1);
            hs_sat26zzjW.evaluate = function (hs_tpl26zzcp) {
                if (hs_tpl26zzcp.notEvaluated) {
                    return hs_tpl26zzcp.hscall();
                } else {
                    return hs_tpl26zzcp;
                }
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zzjW, hs_sat26zzjX);
        };
        var hs_sat26zzjU = new $hs.Thunk();
        hs_sat26zzjU.evaluateOnce = function () {
            return hs_ensureFree25raqq.hscall(hs_n26zzcm);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26zzjU, hs_sat26zzjV);
    };
    this.hs_putWord64host.evaluate = function (hs_w26zzdn) {
        var hs_n26zzd3 = new $hs.Thunk();
        hs_n26zzd3.evaluateOnce = function () {
            return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64, $hs.modules.GHCziErr.hs_undefined);
        };
        var hs_sat26zzkc = new $hs.Thunk();
        hs_sat26zzkc.evaluateOnce = function () {
            var hs_sat26zzke = new $hs.Func(2);
            hs_sat26zzke.evaluate = function (hs_k26zzdC, hs_buf26zzda) {
                var hs_sat26zzkf = new $hs.Thunk();
                hs_sat26zzkf.evaluateOnce = function () {
                    var hs_sat26zzkh = new $hs.Func(1);
                    hs_sat26zzkh.evaluate = function (hs_bufzq26zzdB) {
                        var hs_sat26zzkr = new $hs.Thunk();
                        hs_sat26zzkr.evaluateOnce = function () {
                            return hs_k26zzdC.hscall(hs_bufzq26zzdB);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzkr);
                    };
                    var hs_sat26zzkg = new $hs.Thunk();
                    hs_sat26zzkg.evaluateOnce = function () {
                        var hs_wild26zzkj = hs_buf26zzda;
                        if (hs_buf26zzda.notEvaluated) {
                            hs_wild26zzkj = hs_buf26zzda.hscall();
                        }
                        var hs_fp26zzdg = hs_wild26zzkj.data[0];
                        var hs_o26zzdj = hs_wild26zzkj.data[1];
                        var hs_u26zzdk = hs_wild26zzkj.data[2];
                        var hs_l26zzds = hs_wild26zzkj.data[3];
                        var hs_sat26zzkk = new $hs.Thunk();
                        hs_sat26zzkk.evaluateOnce = function () {
                            var hs_sat26zzko = new $hs.Thunk();
                            hs_sat26zzko.evaluateOnce = function () {
                                var hs_tpl26zzdv = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_u26zzdk, hs_n26zzd3);
                                var hs_tpl126zzdw = $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_l26zzds, hs_n26zzd3);
                                var $res = new $hs.Data(1);
                                $res.data = [hs_fp26zzdg, hs_o26zzdj, hs_tpl26zzdv, hs_tpl126zzdw];
                                return $res;
                            };
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzko);
                        };
                        var hs_sat26zzki = new $hs.Thunk();
                        hs_sat26zzki.evaluateOnce = function () {
                            var hs_sat26zzkl = new $hs.Func(1);
                            hs_sat26zzkl.evaluate = function (hs_p26zzdi) {
                                var hs_sat26zzkm = new $hs.Thunk();
                                hs_sat26zzkm.evaluateOnce = function () {
                                    var hs_sat26zzkn = new $hs.Thunk();
                                    hs_sat26zzkn.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_o26zzdj, hs_u26zzdk);
                                    };
                                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zzdi, hs_sat26zzkn);
                                };
                                return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64, hs_sat26zzkm, hs_w26zzdn);
                            };
                            return $hs.modules.ForeignziForeignPtrziImp.hs_withForeignPtr.hscall(hs_fp26zzdg, hs_sat26zzkl);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzki, hs_sat26zzkk);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzkg, hs_sat26zzkh);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.DataziByteStringziInternal.hs_inlinePerformIO, hs_sat26zzkf);
            };
            var hs_sat26zzkd = new $hs.Func(1);
            hs_sat26zzkd.evaluate = function (hs_tpl26zzd6) {
                if (hs_tpl26zzd6.notEvaluated) {
                    return hs_tpl26zzd6.hscall();
                } else {
                    return hs_tpl26zzd6;
                }
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zzkd, hs_sat26zzke);
        };
        var hs_sat26zzkb = new $hs.Thunk();
        hs_sat26zzkb.evaluateOnce = function () {
            return hs_ensureFree25raqq.hscall(hs_n26zzd3);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26zzkb, hs_sat26zzkc);
    };
    this.hs_putWord32host.evaluate = function (hs_w3226zze4) {
        var hs_n26zzdK = new $hs.Thunk();
        hs_n26zzdK.evaluateOnce = function () {
            return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32, $hs.modules.GHCziErr.hs_undefined);
        };
        var hs_sat26zzkt = new $hs.Thunk();
        hs_sat26zzkt.evaluateOnce = function () {
            var hs_sat26zzkv = new $hs.Func(2);
            hs_sat26zzkv.evaluate = function (hs_k26zzej, hs_buf26zzdR) {
                var hs_sat26zzkw = new $hs.Thunk();
                hs_sat26zzkw.evaluateOnce = function () {
                    var hs_sat26zzky = new $hs.Func(1);
                    hs_sat26zzky.evaluate = function (hs_bufzq26zzei) {
                        var hs_sat26zzkI = new $hs.Thunk();
                        hs_sat26zzkI.evaluateOnce = function () {
                            return hs_k26zzej.hscall(hs_bufzq26zzei);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzkI);
                    };
                    var hs_sat26zzkx = new $hs.Thunk();
                    hs_sat26zzkx.evaluateOnce = function () {
                        var hs_wild26zzkA = hs_buf26zzdR;
                        if (hs_buf26zzdR.notEvaluated) {
                            hs_wild26zzkA = hs_buf26zzdR.hscall();
                        }
                        var hs_fp26zzdX = hs_wild26zzkA.data[0];
                        var hs_o26zze0 = hs_wild26zzkA.data[1];
                        var hs_u26zze1 = hs_wild26zzkA.data[2];
                        var hs_l26zze9 = hs_wild26zzkA.data[3];
                        var hs_sat26zzkB = new $hs.Thunk();
                        hs_sat26zzkB.evaluateOnce = function () {
                            var hs_sat26zzkF = new $hs.Thunk();
                            hs_sat26zzkF.evaluateOnce = function () {
                                var hs_tpl26zzec = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_u26zze1, hs_n26zzdK);
                                var hs_tpl126zzed = $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_l26zze9, hs_n26zzdK);
                                var $res = new $hs.Data(1);
                                $res.data = [hs_fp26zzdX, hs_o26zze0, hs_tpl26zzec, hs_tpl126zzed];
                                return $res;
                            };
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzkF);
                        };
                        var hs_sat26zzkz = new $hs.Thunk();
                        hs_sat26zzkz.evaluateOnce = function () {
                            var hs_sat26zzkC = new $hs.Func(1);
                            hs_sat26zzkC.evaluate = function (hs_p26zzdZ) {
                                var hs_sat26zzkD = new $hs.Thunk();
                                hs_sat26zzkD.evaluateOnce = function () {
                                    var hs_sat26zzkE = new $hs.Thunk();
                                    hs_sat26zzkE.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_o26zze0, hs_u26zze1);
                                    };
                                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zzdZ, hs_sat26zzkE);
                                };
                                return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32, hs_sat26zzkD, hs_w3226zze4);
                            };
                            return $hs.modules.ForeignziForeignPtrziImp.hs_withForeignPtr.hscall(hs_fp26zzdX, hs_sat26zzkC);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzkz, hs_sat26zzkB);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzkx, hs_sat26zzky);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.DataziByteStringziInternal.hs_inlinePerformIO, hs_sat26zzkw);
            };
            var hs_sat26zzku = new $hs.Func(1);
            hs_sat26zzku.evaluate = function (hs_tpl26zzdN) {
                if (hs_tpl26zzdN.notEvaluated) {
                    return hs_tpl26zzdN.hscall();
                } else {
                    return hs_tpl26zzdN;
                }
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zzku, hs_sat26zzkv);
        };
        var hs_sat26zzks = new $hs.Thunk();
        hs_sat26zzks.evaluateOnce = function () {
            return hs_ensureFree25raqq.hscall(hs_n26zzdK);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26zzks, hs_sat26zzkt);
    };
    this.hs_putWord16host.evaluate = function (hs_w1626zzeL) {
        var hs_n26zzer = new $hs.Thunk();
        hs_n26zzer.evaluateOnce = function () {
            return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16, $hs.modules.GHCziErr.hs_undefined);
        };
        var hs_sat26zzkK = new $hs.Thunk();
        hs_sat26zzkK.evaluateOnce = function () {
            var hs_sat26zzkM = new $hs.Func(2);
            hs_sat26zzkM.evaluate = function (hs_k26zzf0, hs_buf26zzey) {
                var hs_sat26zzkN = new $hs.Thunk();
                hs_sat26zzkN.evaluateOnce = function () {
                    var hs_sat26zzkP = new $hs.Func(1);
                    hs_sat26zzkP.evaluate = function (hs_bufzq26zzeZ) {
                        var hs_sat26zzkZ = new $hs.Thunk();
                        hs_sat26zzkZ.evaluateOnce = function () {
                            return hs_k26zzf0.hscall(hs_bufzq26zzeZ);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzkZ);
                    };
                    var hs_sat26zzkO = new $hs.Thunk();
                    hs_sat26zzkO.evaluateOnce = function () {
                        var hs_wild26zzkR = hs_buf26zzey;
                        if (hs_buf26zzey.notEvaluated) {
                            hs_wild26zzkR = hs_buf26zzey.hscall();
                        }
                        var hs_fp26zzeE = hs_wild26zzkR.data[0];
                        var hs_o26zzeH = hs_wild26zzkR.data[1];
                        var hs_u26zzeI = hs_wild26zzkR.data[2];
                        var hs_l26zzeQ = hs_wild26zzkR.data[3];
                        var hs_sat26zzkS = new $hs.Thunk();
                        hs_sat26zzkS.evaluateOnce = function () {
                            var hs_sat26zzkW = new $hs.Thunk();
                            hs_sat26zzkW.evaluateOnce = function () {
                                var hs_tpl26zzeT = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_u26zzeI, hs_n26zzer);
                                var hs_tpl126zzeU = $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_l26zzeQ, hs_n26zzer);
                                var $res = new $hs.Data(1);
                                $res.data = [hs_fp26zzeE, hs_o26zzeH, hs_tpl26zzeT, hs_tpl126zzeU];
                                return $res;
                            };
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzkW);
                        };
                        var hs_sat26zzkQ = new $hs.Thunk();
                        hs_sat26zzkQ.evaluateOnce = function () {
                            var hs_sat26zzkT = new $hs.Func(1);
                            hs_sat26zzkT.evaluate = function (hs_p26zzeG) {
                                var hs_sat26zzkU = new $hs.Thunk();
                                hs_sat26zzkU.evaluateOnce = function () {
                                    var hs_sat26zzkV = new $hs.Thunk();
                                    hs_sat26zzkV.evaluateOnce = function () {
                                        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_o26zzeH, hs_u26zzeI);
                                    };
                                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zzeG, hs_sat26zzkV);
                                };
                                return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16, hs_sat26zzkU, hs_w1626zzeL);
                            };
                            return $hs.modules.ForeignziForeignPtrziImp.hs_withForeignPtr.hscall(hs_fp26zzeE, hs_sat26zzkT);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzkQ, hs_sat26zzkS);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26zzkO, hs_sat26zzkP);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.DataziByteStringziInternal.hs_inlinePerformIO, hs_sat26zzkN);
            };
            var hs_sat26zzkL = new $hs.Func(1);
            hs_sat26zzkL.evaluate = function (hs_tpl26zzeu) {
                if (hs_tpl26zzeu.notEvaluated) {
                    return hs_tpl26zzeu.hscall();
                } else {
                    return hs_tpl26zzeu;
                }
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zzkL, hs_sat26zzkM);
        };
        var hs_sat26zzkJ = new $hs.Thunk();
        hs_sat26zzkJ.evaluateOnce = function () {
            return hs_ensureFree25raqq.hscall(hs_n26zzer);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26zzkJ, hs_sat26zzkK);
    };
    this.hs_Builder.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.DataziSerializzeziBuilder.hs_Builder.hscall(hs_eta1cW6l3);
    };
    this.hs_Buffer.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
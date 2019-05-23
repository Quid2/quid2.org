
$hs.modules.GHCziIOziEncoding = new $hs.Module();
$hs.modules.GHCziIOziEncoding.dependencies = ["GHC.CString", "Data.Maybe", "GHC.Base", "GHC.Classes", "GHC.IO.Encoding.Failure", "GHC.IO.Encoding.Iconv", "GHC.IO.Encoding.Latin1", "GHC.IO.Encoding.UTF16", "GHC.IO.Encoding.UTF32", "GHC.IO.Encoding.UTF8", "GHC.IO.Exception", "GHC.List"];
$hs.modules.GHCziIOziEncoding.initBeforeDependencies = function () {
    this.hs_char8 = new $hs.Thunk();
    this.hs_utf32be = new $hs.Thunk();
    this.hs_utf32le = new $hs.Thunk();
    this.hs_utf32 = new $hs.Thunk();
    this.hs_utf16be = new $hs.Thunk();
    this.hs_utf16le = new $hs.Thunk();
    this.hs_utf16 = new $hs.Thunk();
    this.hs_utf8zubom = new $hs.Thunk();
    this.hs_utf8 = new $hs.Thunk();
    this.hs_latin1 = new $hs.Thunk();
    this.hs_fileSystemEncoding = new $hs.Thunk();
    this.hs_foreignEncoding = new $hs.Thunk();
    this.hs_localeEncoding = new $hs.Thunk();
    this.hs_mkTextEncoding = new $hs.Func(1);
    this.hs_latin1zuencode = new $hs.Func(2);
    this.hs_latin1zudecode = new $hs.Func(2);
    this.hs_char8.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncoding.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_utf32be.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncoding.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_utf32le.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncoding.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_utf32.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncoding.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_utf16be.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncoding.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_utf16le.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncoding.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_utf16.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncoding.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_utf8zubom.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncoding.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_utf8.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncoding.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_latin1.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncoding.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_fileSystemEncoding.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncoding.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_foreignEncoding.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncoding.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_localeEncoding.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncoding.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_mkTextEncoding.notEvaluated = true;
    this.hs_mkTextEncoding.evaluate = function (hs_e26D0Em) {
        $hs.modules.GHCziIOziEncoding.loadDependencies();
        return this.evaluate(hs_e26D0Em);
    };
    this.hs_latin1zuencode.notEvaluated = true;
    this.hs_latin1zuencode.evaluate = function (hs_input26D0Fu, hs_output26D0Fv) {
        $hs.modules.GHCziIOziEncoding.loadDependencies();
        return this.evaluate(hs_input26D0Fu, hs_output26D0Fv);
    };
    this.hs_latin1zudecode.notEvaluated = true;
    this.hs_latin1zudecode.evaluate = function (hs_input26D0FJ, hs_output26D0FK) {
        $hs.modules.GHCziIOziEncoding.loadDependencies();
        return this.evaluate(hs_input26D0FJ, hs_output26D0FK);
    };
};
$hs.modules.GHCziIOziEncoding.initAfterDependencies = function () {
    this.hs_mkTextEncoding.notEvaluated = false;
    this.hs_latin1zuencode.notEvaluated = false;
    this.hs_latin1zudecode.notEvaluated = false;
    this.hs_char8.evaluateOnce = function () {
        if ($hs.modules.GHCziIOziEncodingziLatin1.hs_latin1.notEvaluated) {
            return $hs.modules.GHCziIOziEncodingziLatin1.hs_latin1.hscall();
        } else {
            return $hs.modules.GHCziIOziEncodingziLatin1.hs_latin1;
        }
    };
    this.hs_utf32be.evaluateOnce = function () {
        if ($hs.modules.GHCziIOziEncodingziUTF32.hs_utf32be.notEvaluated) {
            return $hs.modules.GHCziIOziEncodingziUTF32.hs_utf32be.hscall();
        } else {
            return $hs.modules.GHCziIOziEncodingziUTF32.hs_utf32be;
        }
    };
    this.hs_utf32le.evaluateOnce = function () {
        if ($hs.modules.GHCziIOziEncodingziUTF32.hs_utf32le.notEvaluated) {
            return $hs.modules.GHCziIOziEncodingziUTF32.hs_utf32le.hscall();
        } else {
            return $hs.modules.GHCziIOziEncodingziUTF32.hs_utf32le;
        }
    };
    this.hs_utf32.evaluateOnce = function () {
        if ($hs.modules.GHCziIOziEncodingziUTF32.hs_utf32.notEvaluated) {
            return $hs.modules.GHCziIOziEncodingziUTF32.hs_utf32.hscall();
        } else {
            return $hs.modules.GHCziIOziEncodingziUTF32.hs_utf32;
        }
    };
    this.hs_utf16be.evaluateOnce = function () {
        if ($hs.modules.GHCziIOziEncodingziUTF16.hs_utf16be.notEvaluated) {
            return $hs.modules.GHCziIOziEncodingziUTF16.hs_utf16be.hscall();
        } else {
            return $hs.modules.GHCziIOziEncodingziUTF16.hs_utf16be;
        }
    };
    this.hs_utf16le.evaluateOnce = function () {
        if ($hs.modules.GHCziIOziEncodingziUTF16.hs_utf16le.notEvaluated) {
            return $hs.modules.GHCziIOziEncodingziUTF16.hs_utf16le.hscall();
        } else {
            return $hs.modules.GHCziIOziEncodingziUTF16.hs_utf16le;
        }
    };
    this.hs_utf16.evaluateOnce = function () {
        if ($hs.modules.GHCziIOziEncodingziUTF16.hs_utf16.notEvaluated) {
            return $hs.modules.GHCziIOziEncodingziUTF16.hs_utf16.hscall();
        } else {
            return $hs.modules.GHCziIOziEncodingziUTF16.hs_utf16;
        }
    };
    this.hs_utf8zubom.evaluateOnce = function () {
        if ($hs.modules.GHCziIOziEncodingziUTF8.hs_utf8zubom.notEvaluated) {
            return $hs.modules.GHCziIOziEncodingziUTF8.hs_utf8zubom.hscall();
        } else {
            return $hs.modules.GHCziIOziEncodingziUTF8.hs_utf8zubom;
        }
    };
    this.hs_utf8.evaluateOnce = function () {
        if ($hs.modules.GHCziIOziEncodingziUTF8.hs_utf8.notEvaluated) {
            return $hs.modules.GHCziIOziEncodingziUTF8.hs_utf8.hscall();
        } else {
            return $hs.modules.GHCziIOziEncodingziUTF8.hs_utf8;
        }
    };
    this.hs_latin1.evaluateOnce = function () {
        if ($hs.modules.GHCziIOziEncodingziLatin1.hs_latin1zuchecked.notEvaluated) {
            return $hs.modules.GHCziIOziEncodingziLatin1.hs_latin1zuchecked.hscall();
        } else {
            return $hs.modules.GHCziIOziEncodingziLatin1.hs_latin1zuchecked;
        }
    };
    this.hs_fileSystemEncoding.evaluateOnce = function () {
        return $hs.modules.GHCziIOziEncodingziIconv.hs_mkLocaleEncoding.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_RoundtripFailure);
    };
    this.hs_foreignEncoding.evaluateOnce = function () {
        return $hs.modules.GHCziIOziEncodingziIconv.hs_mkLocaleEncoding.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_IgnoreCodingFailure);
    };
    this.hs_localeEncoding.evaluateOnce = function () {
        if ($hs.modules.GHCziIOziEncodingziIconv.hs_localeEncoding.notEvaluated) {
            return $hs.modules.GHCziIOziEncodingziIconv.hs_localeEncoding.hscall();
        } else {
            return $hs.modules.GHCziIOziEncodingziIconv.hs_localeEncoding;
        }
    };
    this.hs_mkTextEncoding.evaluate = function (hs_e26D0Em) {
        var hs_ds26D0En = new $hs.Thunk();
        hs_ds26D0En.evaluateOnce = function () {
            var hs_ds126D0Ei = new $hs.Data(1);
            hs_ds126D0Ei.data = ["/"];
            var hs_sat26D0Gu = new $hs.Func(1);
            hs_sat26D0Gu.evaluate = function (hs_ds226D0Ek) {
                return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_ds226D0Ek, hs_ds126D0Ei);
            };
            return $hs.modules.GHCziList.hs_span.hscall(hs_sat26D0Gu, hs_e26D0Em);
        };
        var hs_enc26D0Et = new $hs.Thunk();
        hs_enc26D0Et.evaluateOnce = function () {
            var hs_wild26D0Gt = hs_ds26D0En;
            if (hs_ds26D0En.notEvaluated) {
                hs_wild26D0Gt = hs_ds26D0En.hscall();
            }
            var hs_enc126D0Es = hs_wild26D0Gt.data[0];
            if (hs_enc126D0Es.notEvaluated) {
                return hs_enc126D0Es.hscall();
            } else {
                return hs_enc126D0Es;
            }
        };
        var hs_wild26D0FO = hs_ds26D0En;
        if (hs_ds26D0En.notEvaluated) {
            hs_wild26D0FO = hs_ds26D0En.hscall();
        }
        var hs_suffix26D0F3 = hs_wild26D0FO.data[1];
        var hs_zdj26D0F2 = new $hs.Func(1);
        hs_zdj26D0F2.evaluate = function (hs_cfm26D0EN) {
            var hs_sat26D0G1 = new $hs.Thunk();
            hs_sat26D0G1.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("UTF-16\x00");
            };
            var hs_wild126D0G2 = $hs.modules.GHCziBase.hs_eqString.hscall(hs_enc26D0Et, hs_sat26D0G1);
            switch (hs_wild126D0G2.tag) {
            case 1:
                var hs_sat26D0G5 = new $hs.Thunk();
                hs_sat26D0G5.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("UTF-16BE\x00");
                };
                var hs_wild226D0G6 = $hs.modules.GHCziBase.hs_eqString.hscall(hs_enc26D0Et, hs_sat26D0G5);
                switch (hs_wild226D0G6.tag) {
                case 1:
                    var hs_sat26D0G9 = new $hs.Thunk();
                    hs_sat26D0G9.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("UTF-16LE\x00");
                    };
                    var hs_wild326D0Ga = $hs.modules.GHCziBase.hs_eqString.hscall(hs_enc26D0Et, hs_sat26D0G9);
                    switch (hs_wild326D0Ga.tag) {
                    case 1:
                        var hs_sat26D0Gd = new $hs.Thunk();
                        hs_sat26D0Gd.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("UTF-32\x00");
                        };
                        var hs_wild426D0Ge = $hs.modules.GHCziBase.hs_eqString.hscall(hs_enc26D0Et, hs_sat26D0Gd);
                        switch (hs_wild426D0Ge.tag) {
                        case 1:
                            var hs_sat26D0Gh = new $hs.Thunk();
                            hs_sat26D0Gh.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("UTF-32BE\x00");
                            };
                            var hs_wild526D0Gi = $hs.modules.GHCziBase.hs_eqString.hscall(hs_enc26D0Et, hs_sat26D0Gh);
                            switch (hs_wild526D0Gi.tag) {
                            case 1:
                                var hs_sat26D0Gl = new $hs.Thunk();
                                hs_sat26D0Gl.evaluateOnce = function () {
                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("UTF-32LE\x00");
                                };
                                var hs_wild626D0Gm = $hs.modules.GHCziBase.hs_eqString.hscall(hs_enc26D0Et, hs_sat26D0Gl);
                                switch (hs_wild626D0Gm.tag) {
                                case 1:
                                    var hs_sat26D0Gp = new $hs.Thunk();
                                    hs_sat26D0Gp.evaluateOnce = function () {
                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("UTF-8\x00");
                                    };
                                    var hs_wild726D0Gq = $hs.modules.GHCziBase.hs_eqString.hscall(hs_enc26D0Et, hs_sat26D0Gp);
                                    switch (hs_wild726D0Gq.tag) {
                                    case 1:
                                        return $hs.modules.GHCziIOziEncodingziIconv.hs_mkIconvEncoding.hscall(hs_cfm26D0EN, hs_enc26D0Et);
                                    case 2:
                                        var hs_sat26D0Gr = new $hs.Thunk();
                                        hs_sat26D0Gr.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziEncodingziUTF8.hs_mkUTF8.hscall(hs_cfm26D0EN);
                                        };
                                        var hs_sat26D0Go = new $hs.Thunk();
                                        hs_sat26D0Go.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                                        };
                                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D0Go, hs_sat26D0Gr);
                                    }
                                case 2:
                                    var hs_sat26D0Gn = new $hs.Thunk();
                                    hs_sat26D0Gn.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziEncodingziUTF32.hs_mkUTF32le.hscall(hs_cfm26D0EN);
                                    };
                                    var hs_sat26D0Gk = new $hs.Thunk();
                                    hs_sat26D0Gk.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                                    };
                                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D0Gk, hs_sat26D0Gn);
                                }
                            case 2:
                                var hs_sat26D0Gj = new $hs.Thunk();
                                hs_sat26D0Gj.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziEncodingziUTF32.hs_mkUTF32be.hscall(hs_cfm26D0EN);
                                };
                                var hs_sat26D0Gg = new $hs.Thunk();
                                hs_sat26D0Gg.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                                };
                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D0Gg, hs_sat26D0Gj);
                            }
                        case 2:
                            var hs_sat26D0Gf = new $hs.Thunk();
                            hs_sat26D0Gf.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziEncodingziUTF32.hs_mkUTF32.hscall(hs_cfm26D0EN);
                            };
                            var hs_sat26D0Gc = new $hs.Thunk();
                            hs_sat26D0Gc.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D0Gc, hs_sat26D0Gf);
                        }
                    case 2:
                        var hs_sat26D0Gb = new $hs.Thunk();
                        hs_sat26D0Gb.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziEncodingziUTF16.hs_mkUTF16le.hscall(hs_cfm26D0EN);
                        };
                        var hs_sat26D0G8 = new $hs.Thunk();
                        hs_sat26D0G8.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D0G8, hs_sat26D0Gb);
                    }
                case 2:
                    var hs_sat26D0G7 = new $hs.Thunk();
                    hs_sat26D0G7.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziEncodingziUTF16.hs_mkUTF16be.hscall(hs_cfm26D0EN);
                    };
                    var hs_sat26D0G4 = new $hs.Thunk();
                    hs_sat26D0G4.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D0G4, hs_sat26D0G7);
                }
            case 2:
                var hs_sat26D0G3 = new $hs.Thunk();
                hs_sat26D0G3.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziEncodingziUTF16.hs_mkUTF16.hscall(hs_cfm26D0EN);
                };
                var hs_sat26D0G0 = new $hs.Thunk();
                hs_sat26D0G0.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D0G0, hs_sat26D0G3);
            }
        };
        var hs_wild126D0F7 = hs_suffix26D0F3;
        if (hs_suffix26D0F3.notEvaluated) {
            hs_wild126D0F7 = hs_suffix26D0F3.hscall();
        }
        switch (hs_wild126D0F7.tag) {
        case 1:
            return hs_zdj26D0F2.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_ErrorOnCodingFailure);
        case 2:
            var hs_sat26D0FQ = new $hs.Thunk();
            hs_sat26D0FQ.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("//IGNORE\x00");
            };
            var hs_wild226D0FR = $hs.modules.GHCziBase.hs_eqString.hscall(hs_wild126D0F7, hs_sat26D0FQ);
            switch (hs_wild226D0FR.tag) {
            case 1:
                var hs_sat26D0FS = new $hs.Thunk();
                hs_sat26D0FS.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("//ROUNDTRIP\x00");
                };
                var hs_wild326D0FT = $hs.modules.GHCziBase.hs_eqString.hscall(hs_wild126D0F7, hs_sat26D0FS);
                switch (hs_wild326D0FT.tag) {
                case 1:
                    var hs_sat26D0FU = new $hs.Thunk();
                    hs_sat26D0FU.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("//TRANSLIT\x00");
                    };
                    var hs_wild426D0FV = $hs.modules.GHCziBase.hs_eqString.hscall(hs_wild126D0F7, hs_sat26D0FU);
                    switch (hs_wild426D0FV.tag) {
                    case 1:
                        var hs_sat26D0FX = new $hs.Thunk();
                        hs_sat26D0FX.evaluateOnce = function () {
                            var hs_sat26D0FZ = new $hs.Thunk();
                            hs_sat26D0FZ.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("unknown encoding:\x00");
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D0FZ, hs_e26D0Em);
                        };
                        var hs_sat26D0FY = new $hs.Thunk();
                        hs_sat26D0FY.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("mkTextEncoding\x00");
                        };
                        var hs_sat26D0FW = new $hs.Data(1);
                        hs_sat26D0FW.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_NoSuchThing, hs_sat26D0FY, hs_sat26D0FX, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
                        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26D0FW);
                    case 2:
                        return hs_zdj26D0F2.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_TransliterateCodingFailure);
                    }
                case 2:
                    return hs_zdj26D0F2.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_RoundtripFailure);
                }
            case 2:
                return hs_zdj26D0F2.hscall($hs.modules.GHCziIOziEncodingziFailure.hs_IgnoreCodingFailure);
            }
        }
    };
    this.hs_latin1zuencode.evaluate = function (hs_input26D0Fu, hs_output26D0Fv) {
        var hs_sat26D0Gw = new $hs.Thunk();
        hs_sat26D0Gw.evaluateOnce = function () {
            return $hs.modules.GHCziIOziEncodingziLatin1.hs_latin1zuencode.hscall(hs_input26D0Fu, hs_output26D0Fv);
        };
        var hs_sat26D0Gv = new $hs.Thunk();
        hs_sat26D0Gv.evaluateOnce = function () {
            var hs_sat26D0Gx = new $hs.Func(1);
            hs_sat26D0Gx.evaluate = function (hs_ds26D0Fl) {
                var hs_wild26D0Gz = hs_ds26D0Fl;
                if (hs_ds26D0Fl.notEvaluated) {
                    hs_wild26D0Gz = hs_ds26D0Fl.hscall();
                }
                var hs_inputzq26D0Fq = hs_wild26D0Gz.data[1];
                var hs_outputzq26D0Fr = hs_wild26D0Gz.data[2];
                var $res = new $hs.Data(1);
                $res.data = [hs_inputzq26D0Fq, hs_outputzq26D0Fr];
                return $res;
            };
            return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26D0Gx);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D0Gv, hs_sat26D0Gw);
    };
    this.hs_latin1zudecode.evaluate = function (hs_input26D0FJ, hs_output26D0FK) {
        var hs_sat26D0GB = new $hs.Thunk();
        hs_sat26D0GB.evaluateOnce = function () {
            return $hs.modules.GHCziIOziEncodingziLatin1.hs_latin1zudecode.hscall(hs_input26D0FJ, hs_output26D0FK);
        };
        var hs_sat26D0GA = new $hs.Thunk();
        hs_sat26D0GA.evaluateOnce = function () {
            var hs_sat26D0GC = new $hs.Func(1);
            hs_sat26D0GC.evaluate = function (hs_ds26D0FA) {
                var hs_wild26D0GE = hs_ds26D0FA;
                if (hs_ds26D0FA.notEvaluated) {
                    hs_wild26D0GE = hs_ds26D0FA.hscall();
                }
                var hs_inputzq26D0FF = hs_wild26D0GE.data[1];
                var hs_outputzq26D0FG = hs_wild26D0GE.data[2];
                var $res = new $hs.Data(1);
                $res.data = [hs_inputzq26D0FF, hs_outputzq26D0FG];
                return $res;
            };
            return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26D0GC);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D0GA, hs_sat26D0GB);
    };
};
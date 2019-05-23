
$hs.modules.GHCziIOziEncoding = new $hs.Module();
$hs.modules.GHCziIOziEncoding.dependencies = ["GHC.IO.Encoding.Latin1", "GHC.IO.Encoding.UTF8", "GHC.IO.Encoding.UTF16", "GHC.IO.Encoding.UTF32", "GHC.IO.Encoding.Iconv"];
$hs.modules.GHCziIOziEncoding.initBeforeDependencies = function () {
    this.hs_latin1zudecode = new $hs.Thunk();
    this.hs_latin1zuencode = new $hs.Thunk();
    this.hs_mkTextEncoding = new $hs.Thunk();
    this.hs_localeEncoding = new $hs.Thunk();
    this.hs_utf32be = new $hs.Thunk();
    this.hs_utf32le = new $hs.Thunk();
    this.hs_utf32 = new $hs.Thunk();
    this.hs_utf16be = new $hs.Thunk();
    this.hs_utf16le = new $hs.Thunk();
    this.hs_utf16 = new $hs.Thunk();
    this.hs_utf8zubom = new $hs.Thunk();
    this.hs_utf8 = new $hs.Thunk();
    this.hs_latin1 = new $hs.Thunk();
    this.hs_latin1zudecode.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncoding.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_latin1zuencode.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncoding.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_mkTextEncoding.evaluateOnce = function () {
        $hs.modules.GHCziIOziEncoding.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_localeEncoding.evaluateOnce = function () {
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
};
$hs.modules.GHCziIOziEncoding.initAfterDependencies = function () {
    this.hs_latin1zudecode.evaluateOnce = function () {
        if ($hs.modules.GHCziIOziEncodingziLatin1.hs_latin1zudecode.notEvaluated) {
            return $hs.modules.GHCziIOziEncodingziLatin1.hs_latin1zudecode.hscall();
        } else {
            return $hs.modules.GHCziIOziEncodingziLatin1.hs_latin1zudecode;
        }
    };
    this.hs_latin1zuencode.evaluateOnce = function () {
        if ($hs.modules.GHCziIOziEncodingziLatin1.hs_latin1zuencode.notEvaluated) {
            return $hs.modules.GHCziIOziEncodingziLatin1.hs_latin1zuencode.hscall();
        } else {
            return $hs.modules.GHCziIOziEncodingziLatin1.hs_latin1zuencode;
        }
    };
    this.hs_mkTextEncoding.evaluateOnce = function () {
        if ($hs.modules.GHCziIOziEncodingziIconv.hs_mkTextEncoding.notEvaluated) {
            return $hs.modules.GHCziIOziEncodingziIconv.hs_mkTextEncoding.hscall();
        } else {
            return $hs.modules.GHCziIOziEncodingziIconv.hs_mkTextEncoding;
        }
    };
    this.hs_localeEncoding.evaluateOnce = function () {
        if ($hs.modules.GHCziIOziEncodingziIconv.hs_localeEncoding.notEvaluated) {
            return $hs.modules.GHCziIOziEncodingziIconv.hs_localeEncoding.hscall();
        } else {
            return $hs.modules.GHCziIOziEncodingziIconv.hs_localeEncoding;
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
};
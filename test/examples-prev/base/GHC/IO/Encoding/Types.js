
$hs.modules.GHCziIOziEncodingziTypes = new $hs.Module();
$hs.modules.GHCziIOziEncodingziTypes.dependencies = ["GHC.Show"];
$hs.modules.GHCziIOziEncodingziTypes.initBeforeDependencies = function () {
    this.hs_setState = new $hs.Func(1);
    this.hs_getState = new $hs.Func(1);
    this.hs_close = new $hs.Func(1);
    this.hs_encode = new $hs.Func(1);
    this.hs_mkTextEncoder = new $hs.Data(1);
    this.hs_mkTextDecoder = new $hs.Data(1);
    this.hs_textEncodingName = new $hs.Func(1);
    this.hs_zdfShowTextEncoding = new $hs.Data(1);
    this.hs_TextEncoding = new $hs.Func(3);
    this.hs_BufferCodec = new $hs.Func(4);
    this.hs_setState.notEvaluated = true;
    this.hs_setState.evaluate = function (hs_ds26Ds0x) {
        $hs.modules.GHCziIOziEncodingziTypes.loadDependencies();
        return this.evaluate(hs_ds26Ds0x);
    };
    this.hs_getState.notEvaluated = true;
    this.hs_getState.evaluate = function (hs_ds26Ds0F) {
        $hs.modules.GHCziIOziEncodingziTypes.loadDependencies();
        return this.evaluate(hs_ds26Ds0F);
    };
    this.hs_close.notEvaluated = true;
    this.hs_close.evaluate = function (hs_ds26Ds0N) {
        $hs.modules.GHCziIOziEncodingziTypes.loadDependencies();
        return this.evaluate(hs_ds26Ds0N);
    };
    this.hs_encode.notEvaluated = true;
    this.hs_encode.evaluate = function (hs_ds26Ds0V) {
        $hs.modules.GHCziIOziEncodingziTypes.loadDependencies();
        return this.evaluate(hs_ds26Ds0V);
    };
    this.hs_mkTextEncoder.notEvaluated = true;
    this.hs_mkTextEncoder.evaluate = function () {
        $hs.modules.GHCziIOziEncodingziTypes.loadDependencies();
        return this;
    };
    this.hs_mkTextDecoder.notEvaluated = true;
    this.hs_mkTextDecoder.evaluate = function () {
        $hs.modules.GHCziIOziEncodingziTypes.loadDependencies();
        return this;
    };
    this.hs_textEncodingName.notEvaluated = true;
    this.hs_textEncodingName.evaluate = function (hs_ds26Ds13) {
        $hs.modules.GHCziIOziEncodingziTypes.loadDependencies();
        return this.evaluate(hs_ds26Ds13);
    };
    this.hs_zdfShowTextEncoding.notEvaluated = true;
    this.hs_zdfShowTextEncoding.evaluate = function () {
        $hs.modules.GHCziIOziEncodingziTypes.loadDependencies();
        return this;
    };
    this.hs_TextEncoding.notEvaluated = true;
    this.hs_TextEncoding.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziIOziEncodingziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_BufferCodec.notEvaluated = true;
    this.hs_BufferCodec.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziIOziEncodingziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziIOziEncodingziTypes.initAfterDependencies = function () {
    this.hs_setState.notEvaluated = false;
    this.hs_getState.notEvaluated = false;
    this.hs_close.notEvaluated = false;
    this.hs_encode.notEvaluated = false;
    this.hs_mkTextEncoder.notEvaluated = false;
    this.hs_mkTextEncoder.evaluate = function () {
        return this;
    };
    this.hs_mkTextDecoder.notEvaluated = false;
    this.hs_mkTextDecoder.evaluate = function () {
        return this;
    };
    this.hs_textEncodingName.notEvaluated = false;
    this.hs_zdfShowTextEncoding.notEvaluated = false;
    this.hs_zdfShowTextEncoding.evaluate = function () {
        return this;
    };
    this.hs_TextEncoding.notEvaluated = false;
    this.hs_BufferCodec.notEvaluated = false;
    var hs_zdcshow25v3uU = new $hs.Func(1);
    var hs_zdcshowList25v3v3 = new $hs.Thunk();
    var hs_zdcshowsPrec25v3v5 = new $hs.Thunk();
    this.hs_setState.evaluate = function (hs_ds26Ds0x) {
        var hs_wild26Ds1n = hs_ds26Ds0x;
        if (hs_ds26Ds0x.notEvaluated) {
            hs_wild26Ds1n = hs_ds26Ds0x.hscall();
        }
        var hs_ds426Ds0D = hs_wild26Ds1n.data[3];
        if (hs_ds426Ds0D.notEvaluated) {
            return hs_ds426Ds0D.hscall();
        } else {
            return hs_ds426Ds0D;
        }
    };
    this.hs_getState.evaluate = function (hs_ds26Ds0F) {
        var hs_wild26Ds1r = hs_ds26Ds0F;
        if (hs_ds26Ds0F.notEvaluated) {
            hs_wild26Ds1r = hs_ds26Ds0F.hscall();
        }
        var hs_ds326Ds0L = hs_wild26Ds1r.data[2];
        if (hs_ds326Ds0L.notEvaluated) {
            return hs_ds326Ds0L.hscall();
        } else {
            return hs_ds326Ds0L;
        }
    };
    this.hs_close.evaluate = function (hs_ds26Ds0N) {
        var hs_wild26Ds1v = hs_ds26Ds0N;
        if (hs_ds26Ds0N.notEvaluated) {
            hs_wild26Ds1v = hs_ds26Ds0N.hscall();
        }
        var hs_ds226Ds0T = hs_wild26Ds1v.data[1];
        if (hs_ds226Ds0T.notEvaluated) {
            return hs_ds226Ds0T.hscall();
        } else {
            return hs_ds226Ds0T;
        }
    };
    this.hs_encode.evaluate = function (hs_ds26Ds0V) {
        var hs_wild26Ds1y = hs_ds26Ds0V;
        if (hs_ds26Ds0V.notEvaluated) {
            hs_wild26Ds1y = hs_ds26Ds0V.hscall();
        }
        var hs_ds126Ds11 = hs_wild26Ds1y.data[0];
        if (hs_ds126Ds11.notEvaluated) {
            return hs_ds126Ds11.hscall();
        } else {
            return hs_ds126Ds11;
        }
    };
    this.hs_mkTextEncoder.data = [];
    this.hs_mkTextDecoder.data = [];
    this.hs_textEncodingName.evaluate = function (hs_ds26Ds13) {
        var hs_wild26Ds1C = hs_ds26Ds13;
        if (hs_ds26Ds13.notEvaluated) {
            hs_wild26Ds1C = hs_ds26Ds13.hscall();
        }
        var hs_ds126Ds18 = hs_wild26Ds1C.data[0];
        if (hs_ds126Ds18.notEvaluated) {
            return hs_ds126Ds18.hscall();
        } else {
            return hs_ds126Ds18;
        }
    };
    hs_zdcshow25v3uU.evaluate = function (hs_te26Ds1c) {
        var hs_wild26Ds1F = hs_te26Ds1c;
        if (hs_te26Ds1c.notEvaluated) {
            hs_wild26Ds1F = hs_te26Ds1c.hscall();
        }
        var hs_ds26Ds1h = hs_wild26Ds1F.data[0];
        if (hs_ds26Ds1h.notEvaluated) {
            return hs_ds26Ds1h.hscall();
        } else {
            return hs_ds26Ds1h;
        }
    };
    this.hs_zdfShowTextEncoding.data = [hs_zdcshowsPrec25v3v5, hs_zdcshow25v3uU, hs_zdcshowList25v3v3];
    hs_zdcshowList25v3v3.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziIOziEncodingziTypes.hs_zdfShowTextEncoding);
    };
    hs_zdcshowsPrec25v3v5.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowsPrec.hscall($hs.modules.GHCziIOziEncodingziTypes.hs_zdfShowTextEncoding);
    };
    this.hs_TextEncoding.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_BufferCodec.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
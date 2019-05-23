
$hs.modules.GHCziIOziEncodingziTypes = new $hs.Module();
$hs.modules.GHCziIOziEncodingziTypes.dependencies = ["GHC.CString", "GHC.Show", "GHC.Classes"];
$hs.modules.GHCziIOziEncodingziTypes.initBeforeDependencies = function () {
    this.hs_setState = new $hs.Func(1);
    this.hs_getState = new $hs.Func(1);
    this.hs_close = new $hs.Func(1);
    this.hs_recover = new $hs.Func(1);
    this.hs_encode = new $hs.Func(1);
    this.hs_mkTextEncoder = new $hs.Data(1);
    this.hs_mkTextDecoder = new $hs.Data(1);
    this.hs_textEncodingName = new $hs.Func(1);
    this.hs_zdfShowTextEncoding = new $hs.Data(1);
    this.hs_zdfShowCodingProgress = new $hs.Data(1);
    this.hs_zdfEqCodingProgress = new $hs.Data(1);
    this.hs_InputUnderflow = new $hs.Data(1);
    this.hs_OutputUnderflow = new $hs.Data(2);
    this.hs_InvalidSequence = new $hs.Data(3);
    this.hs_TextEncoding = new $hs.Func(3);
    this.hs_BufferCodec = new $hs.Func(5);
    this.hs_setState.notEvaluated = true;
    this.hs_setState.evaluate = function (hs_ds26D1oB) {
        $hs.modules.GHCziIOziEncodingziTypes.loadDependencies();
        return this.evaluate(hs_ds26D1oB);
    };
    this.hs_getState.notEvaluated = true;
    this.hs_getState.evaluate = function (hs_ds26D1oK) {
        $hs.modules.GHCziIOziEncodingziTypes.loadDependencies();
        return this.evaluate(hs_ds26D1oK);
    };
    this.hs_close.notEvaluated = true;
    this.hs_close.evaluate = function (hs_ds26D1oT) {
        $hs.modules.GHCziIOziEncodingziTypes.loadDependencies();
        return this.evaluate(hs_ds26D1oT);
    };
    this.hs_recover.notEvaluated = true;
    this.hs_recover.evaluate = function (hs_ds26D1p2) {
        $hs.modules.GHCziIOziEncodingziTypes.loadDependencies();
        return this.evaluate(hs_ds26D1p2);
    };
    this.hs_encode.notEvaluated = true;
    this.hs_encode.evaluate = function (hs_ds26D1pb) {
        $hs.modules.GHCziIOziEncodingziTypes.loadDependencies();
        return this.evaluate(hs_ds26D1pb);
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
    this.hs_textEncodingName.evaluate = function (hs_ds26D1pk) {
        $hs.modules.GHCziIOziEncodingziTypes.loadDependencies();
        return this.evaluate(hs_ds26D1pk);
    };
    this.hs_zdfShowTextEncoding.notEvaluated = true;
    this.hs_zdfShowTextEncoding.evaluate = function () {
        $hs.modules.GHCziIOziEncodingziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCodingProgress.notEvaluated = true;
    this.hs_zdfShowCodingProgress.evaluate = function () {
        $hs.modules.GHCziIOziEncodingziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCodingProgress.notEvaluated = true;
    this.hs_zdfEqCodingProgress.evaluate = function () {
        $hs.modules.GHCziIOziEncodingziTypes.loadDependencies();
        return this;
    };
    this.hs_InputUnderflow.notEvaluated = true;
    this.hs_InputUnderflow.evaluate = function () {
        $hs.modules.GHCziIOziEncodingziTypes.loadDependencies();
        return this;
    };
    this.hs_OutputUnderflow.notEvaluated = true;
    this.hs_OutputUnderflow.evaluate = function () {
        $hs.modules.GHCziIOziEncodingziTypes.loadDependencies();
        return this;
    };
    this.hs_InvalidSequence.notEvaluated = true;
    this.hs_InvalidSequence.evaluate = function () {
        $hs.modules.GHCziIOziEncodingziTypes.loadDependencies();
        return this;
    };
    this.hs_TextEncoding.notEvaluated = true;
    this.hs_TextEncoding.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziIOziEncodingziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_BufferCodec.notEvaluated = true;
    this.hs_BufferCodec.evaluate = function (hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziIOziEncodingziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziIOziEncodingziTypes.initAfterDependencies = function () {
    this.hs_setState.notEvaluated = false;
    this.hs_getState.notEvaluated = false;
    this.hs_close.notEvaluated = false;
    this.hs_recover.notEvaluated = false;
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
    this.hs_zdfShowCodingProgress.notEvaluated = false;
    this.hs_zdfShowCodingProgress.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCodingProgress.notEvaluated = false;
    this.hs_zdfEqCodingProgress.evaluate = function () {
        return this;
    };
    this.hs_InputUnderflow.notEvaluated = false;
    this.hs_InputUnderflow.evaluate = function () {
        return this;
    };
    this.hs_OutputUnderflow.notEvaluated = false;
    this.hs_OutputUnderflow.evaluate = function () {
        return this;
    };
    this.hs_InvalidSequence.notEvaluated = false;
    this.hs_InvalidSequence.evaluate = function () {
        return this;
    };
    this.hs_TextEncoding.notEvaluated = false;
    this.hs_BufferCodec.notEvaluated = false;
    var hs_zdcshow25uCTa = new $hs.Func(1);
    var hs_zdcshowList25uCTi = new $hs.Thunk();
    var hs_zdcshowsPrec25uCTj = new $hs.Thunk();
    var hs_zdcshowsPrec125uCTk = new $hs.Func(2);
    var hs_sat26D1qC = new $hs.Thunk();
    var hs_zdcshowList125uCTt = new $hs.Thunk();
    var hs_zdcshow125uCTu = new $hs.Thunk();
    var hs_zdczeze25uCTx = new $hs.Func(2);
    var hs_zdczsze25uCTG = new $hs.Func(2);
    this.hs_setState.evaluate = function (hs_ds26D1oB) {
        var hs_wild26D1q6 = hs_ds26D1oB;
        if (hs_ds26D1oB.notEvaluated) {
            hs_wild26D1q6 = hs_ds26D1oB.hscall();
        }
        var hs_ds526D1oI = hs_wild26D1q6.data[4];
        if (hs_ds526D1oI.notEvaluated) {
            return hs_ds526D1oI.hscall();
        } else {
            return hs_ds526D1oI;
        }
    };
    this.hs_getState.evaluate = function (hs_ds26D1oK) {
        var hs_wild26D1qb = hs_ds26D1oK;
        if (hs_ds26D1oK.notEvaluated) {
            hs_wild26D1qb = hs_ds26D1oK.hscall();
        }
        var hs_ds426D1oR = hs_wild26D1qb.data[3];
        if (hs_ds426D1oR.notEvaluated) {
            return hs_ds426D1oR.hscall();
        } else {
            return hs_ds426D1oR;
        }
    };
    this.hs_close.evaluate = function (hs_ds26D1oT) {
        var hs_wild26D1qg = hs_ds26D1oT;
        if (hs_ds26D1oT.notEvaluated) {
            hs_wild26D1qg = hs_ds26D1oT.hscall();
        }
        var hs_ds326D1p0 = hs_wild26D1qg.data[2];
        if (hs_ds326D1p0.notEvaluated) {
            return hs_ds326D1p0.hscall();
        } else {
            return hs_ds326D1p0;
        }
    };
    this.hs_recover.evaluate = function (hs_ds26D1p2) {
        var hs_wild26D1ql = hs_ds26D1p2;
        if (hs_ds26D1p2.notEvaluated) {
            hs_wild26D1ql = hs_ds26D1p2.hscall();
        }
        var hs_ds226D1p9 = hs_wild26D1ql.data[1];
        if (hs_ds226D1p9.notEvaluated) {
            return hs_ds226D1p9.hscall();
        } else {
            return hs_ds226D1p9;
        }
    };
    this.hs_encode.evaluate = function (hs_ds26D1pb) {
        var hs_wild26D1qq = hs_ds26D1pb;
        if (hs_ds26D1pb.notEvaluated) {
            hs_wild26D1qq = hs_ds26D1pb.hscall();
        }
        var hs_ds126D1pi = hs_wild26D1qq.data[0];
        if (hs_ds126D1pi.notEvaluated) {
            return hs_ds126D1pi.hscall();
        } else {
            return hs_ds126D1pi;
        }
    };
    this.hs_mkTextEncoder.data = [];
    this.hs_mkTextDecoder.data = [];
    this.hs_textEncodingName.evaluate = function (hs_ds26D1pk) {
        var hs_wild26D1qt = hs_ds26D1pk;
        if (hs_ds26D1pk.notEvaluated) {
            hs_wild26D1qt = hs_ds26D1pk.hscall();
        }
        var hs_ds126D1pp = hs_wild26D1qt.data[0];
        if (hs_ds126D1pp.notEvaluated) {
            return hs_ds126D1pp.hscall();
        } else {
            return hs_ds126D1pp;
        }
    };
    hs_zdcshow25uCTa.evaluate = function (hs_te26D1ps) {
        var hs_wild26D1qw = hs_te26D1ps;
        if (hs_te26D1ps.notEvaluated) {
            hs_wild26D1qw = hs_te26D1ps.hscall();
        }
        var hs_ds26D1px = hs_wild26D1qw.data[0];
        if (hs_ds26D1px.notEvaluated) {
            return hs_ds26D1px.hscall();
        } else {
            return hs_ds26D1px;
        }
    };
    this.hs_zdfShowTextEncoding.data = [hs_zdcshowsPrec25uCTj, hs_zdcshow25uCTa, hs_zdcshowList25uCTi];
    hs_zdcshowList25uCTi.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziIOziEncodingziTypes.hs_zdfShowTextEncoding);
    };
    hs_zdcshowsPrec25uCTj.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowsPrec.hscall($hs.modules.GHCziIOziEncodingziTypes.hs_zdfShowTextEncoding);
    };
    hs_zdcshowsPrec125uCTk.evaluate = function (hs_ds26D1pI, hs_ds126D1pD) {
        var hs_wild26D1qy = hs_ds126D1pD;
        if (hs_ds126D1pD.notEvaluated) {
            hs_wild26D1qy = hs_ds126D1pD.hscall();
        }
        switch (hs_wild26D1qy.tag) {
        case 1:
            var hs_sat26D1qA = new $hs.Thunk();
            hs_sat26D1qA.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("InputUnderflow\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D1qA);
        case 2:
            var hs_sat26D1qx = new $hs.Thunk();
            hs_sat26D1qx.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("OutputUnderflow\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D1qx);
        case 3:
            var hs_sat26D1qz = new $hs.Thunk();
            hs_sat26D1qz.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("InvalidSequence\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D1qz);
        }
    };
    hs_sat26D1qC.evaluateOnce = function () {
        var hs_sat26D1qB = new $hs.Data(1);
        hs_sat26D1qB.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziIOziEncodingziTypes.hs_zdfShowCodingProgress, hs_sat26D1qB);
    };
    this.hs_zdfShowCodingProgress.data = [hs_zdcshowsPrec125uCTk, hs_zdcshow125uCTu, hs_zdcshowList125uCTt];
    hs_zdcshowList125uCTt.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26D1qC);
    };
    hs_zdcshow125uCTu.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziIOziEncodingziTypes.hs_zdfShowCodingProgress);
    };
    hs_zdczeze25uCTx.evaluate = function (hs_a26D1pQ, hs_b26D1pS) {
        var hs_wild26D1qE = hs_a26D1pQ;
        if (hs_a26D1pQ.notEvaluated) {
            hs_wild26D1qE = hs_a26D1pQ.hscall();
        }
        switch (hs_wild26D1qE.tag) {
        case 1:
            var hs_wild126D1qG = hs_b26D1pS;
            if (hs_b26D1pS.notEvaluated) {
                hs_wild126D1qG = hs_b26D1pS.hscall();
            }
            switch (hs_wild126D1qG.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_wild126D1qD = hs_b26D1pS;
            if (hs_b26D1pS.notEvaluated) {
                hs_wild126D1qD = hs_b26D1pS.hscall();
            }
            switch (hs_wild126D1qD.tag) {
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126D1qF = hs_b26D1pS;
            if (hs_b26D1pS.notEvaluated) {
                hs_wild126D1qF = hs_b26D1pS.hscall();
            }
            switch (hs_wild126D1qF.tag) {
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        }
    };
    this.hs_zdfEqCodingProgress.data = [hs_zdczeze25uCTx, hs_zdczsze25uCTG];
    hs_zdczsze25uCTG.evaluate = function (hs_a26D1pZ, hs_b26D1q0) {
        var hs_sat26D1qH = new $hs.Thunk();
        hs_sat26D1qH.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziEncodingziTypes.hs_zdfEqCodingProgress, hs_a26D1pZ, hs_b26D1q0);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D1qH);
    };
    this.hs_InputUnderflow.data = [];
    this.hs_OutputUnderflow.data = [];
    this.hs_InvalidSequence.data = [];
    this.hs_TextEncoding.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_BufferCodec.evaluate = function (hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
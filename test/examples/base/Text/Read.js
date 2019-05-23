
$hs.modules.TextziRead = new $hs.Module();
$hs.modules.TextziRead.dependencies = ["GHC.CString", "Data.Either", "GHC.Base", "GHC.Err", "GHC.Read", "Text.ParserCombinators.ReadP", "Text.ParserCombinators.ReadPrec"];
$hs.modules.TextziRead.initBeforeDependencies = function () {
    this.hs_read = new $hs.Func(2);
    this.hs_reads = new $hs.Func(1);
    this.hs_read.notEvaluated = true;
    this.hs_read.evaluate = function (hs_zddRead26CJz7, hs_s26CJzf) {
        $hs.modules.TextziRead.loadDependencies();
        return this.evaluate(hs_zddRead26CJz7, hs_s26CJzf);
    };
    this.hs_reads.notEvaluated = true;
    this.hs_reads.evaluate = function (hs_zddRead26CJzt) {
        $hs.modules.TextziRead.loadDependencies();
        return this.evaluate(hs_zddRead26CJzt);
    };
};
$hs.modules.TextziRead.initAfterDependencies = function () {
    this.hs_read.notEvaluated = false;
    this.hs_reads.notEvaluated = false;
    this.hs_read.evaluate = function (hs_zddRead26CJz7, hs_s26CJzf) {
        var hs_sat26CJzu = new $hs.Thunk();
        hs_sat26CJzu.evaluateOnce = function () {
            var hs_ds26CJz3 = new $hs.Func(1);
            hs_ds26CJz3.evaluate = function (hs_ds126CJyR) {
                var hs_ds226CJzG = hs_ds126CJyR;
                if (hs_ds126CJyR.notEvaluated) {
                    hs_ds226CJzG = hs_ds126CJyR.hscall();
                }
                switch (hs_ds226CJzG.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_ds326CJyV = hs_ds226CJzG.data[0];
                    var hs_ds426CJz2 = hs_ds226CJzG.data[1];
                    var hs_wild26CJzF = hs_ds326CJyV;
                    if (hs_ds326CJyV.notEvaluated) {
                        hs_wild26CJzF = hs_ds326CJyV.hscall();
                    }
                    var hs_x26CJz1 = hs_wild26CJzF.data[0];
                    var hs_ds526CJyZ = hs_wild26CJzF.data[1];
                    var hs_wild126CJzE = hs_ds526CJyZ;
                    if (hs_ds526CJyZ.notEvaluated) {
                        hs_wild126CJzE = hs_ds526CJyZ.hscall();
                    }
                    switch (hs_wild126CJzE.tag) {
                    case 1:
                        var hs_sat26CJzH = new $hs.Thunk();
                        hs_sat26CJzH.evaluateOnce = function () {
                            return hs_ds26CJz3.hscall(hs_ds426CJz2);
                        };
                        var $res = new $hs.Data(2);
                        $res.data = [hs_x26CJz1, hs_sat26CJzH];
                        return $res;
                    case 2:
                        return hs_ds26CJz3.hscall(hs_ds426CJz2);
                    }
                }
            };
            var hs_sat26CJzz = new $hs.Thunk();
            hs_sat26CJzz.evaluateOnce = function () {
                var hs_sat26CJzI = new $hs.Thunk();
                hs_sat26CJzI.evaluateOnce = function () {
                    var hs_sat26CJzK = new $hs.Func(1);
                    hs_sat26CJzK.evaluate = function (hs_x26CJzb) {
                        var hs_sat26CJzM = new $hs.Thunk();
                        hs_sat26CJzM.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_x26CJzb);
                        };
                        var hs_sat26CJzL = new $hs.Thunk();
                        hs_sat26CJzL.evaluateOnce = function () {
                            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_lift.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_skipSpaces);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26CJzL, hs_sat26CJzM);
                    };
                    var hs_sat26CJzJ = new $hs.Thunk();
                    hs_sat26CJzJ.evaluateOnce = function () {
                        return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26CJz7);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26CJzJ, hs_sat26CJzK);
                };
                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26CJzI, $hs.modules.TextziParserCombinatorsziReadPrec.hs_minPrec, hs_s26CJzf);
            };
            var hs_wild26CJzA = hs_ds26CJz3.hscall(hs_sat26CJzz);
            switch (hs_wild26CJzA.tag) {
            case 1:
                var hs_sat26CJzB = new $hs.Thunk();
                hs_sat26CJzB.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prelude.read: no parse\x00");
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26CJzB];
                return $res;
            case 2:
                var hs_x26CJzn = hs_wild26CJzA.data[0];
                var hs_ds126CJzl = hs_wild26CJzA.data[1];
                var hs_wild126CJzw = hs_ds126CJzl;
                if (hs_ds126CJzl.notEvaluated) {
                    hs_wild126CJzw = hs_ds126CJzl.hscall();
                }
                switch (hs_wild126CJzw.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [hs_x26CJzn];
                    return $res;
                case 2:
                    var hs_sat26CJzv = new $hs.Thunk();
                    hs_sat26CJzv.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prelude.read: ambiguous parse\x00");
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26CJzv];
                    return $res;
                }
            }
        };
        return $hs.modules.DataziEither.hs_either.hscall($hs.modules.GHCziErr.hs_error, $hs.modules.GHCziBase.hs_id, hs_sat26CJzu);
    };
    this.hs_reads.evaluate = function (hs_zddRead26CJzt) {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall(hs_zddRead26CJzt, $hs.modules.TextziParserCombinatorsziReadPrec.hs_minPrec);
    };
};
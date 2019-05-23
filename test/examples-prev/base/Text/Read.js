
$hs.modules.TextziRead = new $hs.Module();
$hs.modules.TextziRead.dependencies = ["Data.Either", "GHC.Base", "GHC.Err", "GHC.Read", "Text.ParserCombinators.ReadP", "Text.ParserCombinators.ReadPrec"];
$hs.modules.TextziRead.initBeforeDependencies = function () {
    this.hs_read = new $hs.Func(2);
    this.hs_reads = new $hs.Func(1);
    this.hs_read.notEvaluated = true;
    this.hs_read.evaluate = function (hs_zddRead26D8Dm, hs_s26D8Du) {
        $hs.modules.TextziRead.loadDependencies();
        return this.evaluate(hs_zddRead26D8Dm, hs_s26D8Du);
    };
    this.hs_reads.notEvaluated = true;
    this.hs_reads.evaluate = function (hs_zddRead26D8DI) {
        $hs.modules.TextziRead.loadDependencies();
        return this.evaluate(hs_zddRead26D8DI);
    };
};
$hs.modules.TextziRead.initAfterDependencies = function () {
    this.hs_read.notEvaluated = false;
    this.hs_reads.notEvaluated = false;
    this.hs_read.evaluate = function (hs_zddRead26D8Dm, hs_s26D8Du) {
        var hs_sat26D8E1 = new $hs.Thunk();
        hs_sat26D8E1.evaluateOnce = function () {
            var hs_ds26D8Di = new $hs.Func(1);
            hs_ds26D8Di.evaluate = function (hs_ds126D8D6) {
                var hs_ds226D8DJ = hs_ds126D8D6;
                if (hs_ds126D8D6.notEvaluated) {
                    hs_ds226D8DJ = hs_ds126D8D6.hscall();
                }
                switch (hs_ds226D8DJ.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_ds326D8Da = hs_ds226D8DJ.data[0];
                    var hs_ds426D8Dh = hs_ds226D8DJ.data[1];
                    var hs_wild26D8DL = hs_ds326D8Da;
                    if (hs_ds326D8Da.notEvaluated) {
                        hs_wild26D8DL = hs_ds326D8Da.hscall();
                    }
                    var hs_x26D8Dg = hs_wild26D8DL.data[0];
                    var hs_ds526D8De = hs_wild26D8DL.data[1];
                    var hs_wild126D8DK = hs_ds526D8De;
                    if (hs_ds526D8De.notEvaluated) {
                        hs_wild126D8DK = hs_ds526D8De.hscall();
                    }
                    switch (hs_wild126D8DK.tag) {
                    case 1:
                        var hs_sat26D8DM = new $hs.Thunk();
                        hs_sat26D8DM.evaluateOnce = function () {
                            return hs_ds26D8Di.hscall(hs_ds426D8Dh);
                        };
                        var $res = new $hs.Data(2);
                        $res.data = [hs_x26D8Dg, hs_sat26D8DM];
                        return $res;
                    case 2:
                        return hs_ds26D8Di.hscall(hs_ds426D8Dh);
                    }
                }
            };
            var hs_sat26D8DV = new $hs.Thunk();
            hs_sat26D8DV.evaluateOnce = function () {
                var hs_sat26D8DT = new $hs.Thunk();
                hs_sat26D8DT.evaluateOnce = function () {
                    var hs_sat26D8DR = new $hs.Func(1);
                    hs_sat26D8DR.evaluate = function (hs_x26D8Dq) {
                        var hs_sat26D8DP = new $hs.Thunk();
                        hs_sat26D8DP.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_x26D8Dq);
                        };
                        var hs_sat26D8DQ = new $hs.Thunk();
                        hs_sat26D8DQ.evaluateOnce = function () {
                            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_lift.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_skipSpaces);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26D8DQ, hs_sat26D8DP);
                    };
                    var hs_sat26D8DS = new $hs.Thunk();
                    hs_sat26D8DS.evaluateOnce = function () {
                        return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26D8Dm);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26D8DS, hs_sat26D8DR);
                };
                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26D8DT, $hs.modules.TextziParserCombinatorsziReadPrec.hs_minPrec, hs_s26D8Du);
            };
            var hs_wild26D8DU = hs_ds26D8Di.hscall(hs_sat26D8DV);
            switch (hs_wild26D8DU.tag) {
            case 1:
                var hs_sat26D8DW = new $hs.Thunk();
                hs_sat26D8DW.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Prelude.read: no parse\x00");
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26D8DW];
                return $res;
            case 2:
                var hs_x26D8DC = hs_wild26D8DU.data[0];
                var hs_ds126D8DA = hs_wild26D8DU.data[1];
                var hs_wild126D8DX = hs_ds126D8DA;
                if (hs_ds126D8DA.notEvaluated) {
                    hs_wild126D8DX = hs_ds126D8DA.hscall();
                }
                switch (hs_wild126D8DX.tag) {
                case 1:
                    var $res = new $hs.Data(2);
                    $res.data = [hs_x26D8DC];
                    return $res;
                case 2:
                    var hs_sat26D8E0 = new $hs.Thunk();
                    hs_sat26D8E0.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Prelude.read: ambiguous parse\x00");
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26D8E0];
                    return $res;
                }
            }
        };
        return $hs.modules.DataziEither.hs_either.hscall($hs.modules.GHCziErr.hs_error, $hs.modules.GHCziBase.hs_id, hs_sat26D8E1);
    };
    this.hs_reads.evaluate = function (hs_zddRead26D8DI) {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall(hs_zddRead26D8DI, $hs.modules.TextziParserCombinatorsziReadPrec.hs_minPrec);
    };
};
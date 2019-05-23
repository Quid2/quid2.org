
$hs.modules.TextziParserCombinatorsziReadP = new $hs.Module();
$hs.modules.TextziParserCombinatorsziReadP.dependencies = ["GHC.Prim", "GHC.Types", "GHC.CString", "GHC.Unit", "Control.Monad", "GHC.Base", "GHC.Err", "GHC.Classes", "GHC.List", "GHC.Unicode", "Control.Exception.Base"];
$hs.modules.TextziParserCombinatorsziReadP.initBeforeDependencies = function () {
    this.hs_pfail = new $hs.Func(1);
    this.hs_look = new $hs.Func(1);
    this.hs_get = new $hs.Func(1);
    this.hs_readSzutozuP = new $hs.Func(2);
    this.hs_zdfMonadP = new $hs.Data(1);
    this.hs_zdfMonadPlusP = new $hs.Data(1);
    this.hs_readPzutozuS = new $hs.Func(1);
    this.hs_zpzpzp = new $hs.Func(3);
    this.hs_choice = new $hs.Func(1);
    this.hs_gather = new $hs.Func(2);
    this.hs_zdfFunctorReadP = new $hs.Data(1);
    this.hs_zdfMonadReadP = new $hs.Data(1);
    this.hs_zlzpzp = new $hs.Func(2);
    this.hs_count = new $hs.Func(2);
    this.hs_between = new $hs.Func(3);
    this.hs_option = new $hs.Func(2);
    this.hs_optional = new $hs.Func(1);
    this.hs_many = new $hs.Func(1);
    this.hs_many1 = new $hs.Func(1);
    this.hs_skipMany = new $hs.Func(1);
    this.hs_skipMany1 = new $hs.Func(1);
    this.hs_sepBy1 = new $hs.Func(2);
    this.hs_sepBy = new $hs.Func(2);
    this.hs_endBy = new $hs.Func(2);
    this.hs_endBy1 = new $hs.Func(2);
    this.hs_chainr1 = new $hs.Func(2);
    this.hs_chainr = new $hs.Func(3);
    this.hs_chainl1 = new $hs.Func(2);
    this.hs_chainl = new $hs.Func(3);
    this.hs_manyTill = new $hs.Func(2);
    this.hs_zdfMonadPlusReadP = new $hs.Data(1);
    this.hs_skipSpaces = new $hs.Thunk();
    this.hs_munch = new $hs.Func(1);
    this.hs_munch1 = new $hs.Func(1);
    this.hs_string = new $hs.Func(1);
    this.hs_satisfy = new $hs.Func(1);
    this.hs_char = new $hs.Func(1);
    this.hs_eof = new $hs.Thunk();
    this.hs_R = new $hs.Func(1);
    this.hs_Get = new $hs.Func(1);
    this.hs_Look = new $hs.Func(1);
    this.hs_Fail = new $hs.Data(3);
    this.hs_Result = new $hs.Func(2);
    this.hs_Final = new $hs.Func(1);
    this.hs_pfail.notEvaluated = true;
    this.hs_pfail.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_look.notEvaluated = true;
    this.hs_look.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_get.notEvaluated = true;
    this.hs_get.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_readSzutozuP.notEvaluated = true;
    this.hs_readSzutozuP.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfMonadP.notEvaluated = true;
    this.hs_zdfMonadP.evaluate = function () {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this;
    };
    this.hs_zdfMonadPlusP.notEvaluated = true;
    this.hs_zdfMonadPlusP.evaluate = function () {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this;
    };
    this.hs_readPzutozuS.notEvaluated = true;
    this.hs_readPzutozuS.evaluate = function (hs_ds26DqJy) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_ds26DqJy);
    };
    this.hs_zpzpzp.notEvaluated = true;
    this.hs_zpzpzp.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_choice.notEvaluated = true;
    this.hs_choice.evaluate = function (hs_ds26DqJK) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_ds26DqJK);
    };
    this.hs_gather.notEvaluated = true;
    this.hs_gather.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfFunctorReadP.notEvaluated = true;
    this.hs_zdfFunctorReadP.evaluate = function () {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this;
    };
    this.hs_zdfMonadReadP.notEvaluated = true;
    this.hs_zdfMonadReadP.evaluate = function () {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this;
    };
    this.hs_zlzpzp.notEvaluated = true;
    this.hs_zlzpzp.evaluate = function (hs_ds26DqLX, hs_q26DqLz) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_ds26DqLX, hs_q26DqLz);
    };
    this.hs_count.notEvaluated = true;
    this.hs_count.evaluate = function (hs_n26DqM3, hs_p26DqM4) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_n26DqM3, hs_p26DqM4);
    };
    this.hs_between.notEvaluated = true;
    this.hs_between.evaluate = function (hs_open26DqM9, hs_close26DqMd, hs_p26DqMb) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_open26DqM9, hs_close26DqMd, hs_p26DqMb);
    };
    this.hs_option.notEvaluated = true;
    this.hs_option.evaluate = function (hs_x26DqMo, hs_p26DqMs) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_x26DqMo, hs_p26DqMs);
    };
    this.hs_optional.notEvaluated = true;
    this.hs_optional.evaluate = function (hs_p26DqMy) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DqMy);
    };
    this.hs_many.notEvaluated = true;
    this.hs_many.evaluate = function (hs_p26DqMM) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DqMM);
    };
    this.hs_many1.notEvaluated = true;
    this.hs_many1.evaluate = function (hs_p26DqMV) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DqMV);
    };
    this.hs_skipMany.notEvaluated = true;
    this.hs_skipMany.evaluate = function (hs_p26DqMY) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DqMY);
    };
    this.hs_skipMany1.notEvaluated = true;
    this.hs_skipMany1.evaluate = function (hs_p26DqN2) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DqN2);
    };
    this.hs_sepBy1.notEvaluated = true;
    this.hs_sepBy1.evaluate = function (hs_p26DqN6, hs_sep26DqN7) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DqN6, hs_sep26DqN7);
    };
    this.hs_sepBy.notEvaluated = true;
    this.hs_sepBy.evaluate = function (hs_p26DqNd, hs_sep26DqNe) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DqNd, hs_sep26DqNe);
    };
    this.hs_endBy.notEvaluated = true;
    this.hs_endBy.evaluate = function (hs_p26DqNp, hs_sep26DqNr) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DqNp, hs_sep26DqNr);
    };
    this.hs_endBy1.notEvaluated = true;
    this.hs_endBy1.evaluate = function (hs_p26DqNB, hs_sep26DqND) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DqNB, hs_sep26DqND);
    };
    this.hs_chainr1.notEvaluated = true;
    this.hs_chainr1.evaluate = function (hs_p26DqNO, hs_op26DqNR) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DqNO, hs_op26DqNR);
    };
    this.hs_chainr.notEvaluated = true;
    this.hs_chainr.evaluate = function (hs_p26DqOe, hs_op26DqOf, hs_x26DqOi) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DqOe, hs_op26DqOf, hs_x26DqOi);
    };
    this.hs_chainl1.notEvaluated = true;
    this.hs_chainl1.evaluate = function (hs_p26DqOr, hs_op26DqOv) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DqOr, hs_op26DqOv);
    };
    this.hs_chainl.notEvaluated = true;
    this.hs_chainl.evaluate = function (hs_p26DqOR, hs_op26DqOS, hs_x26DqOV) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DqOR, hs_op26DqOS, hs_x26DqOV);
    };
    this.hs_manyTill.notEvaluated = true;
    this.hs_manyTill.evaluate = function (hs_p26DqP8, hs_end26DqP5) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DqP8, hs_end26DqP5);
    };
    this.hs_zdfMonadPlusReadP.notEvaluated = true;
    this.hs_zdfMonadPlusReadP.evaluate = function () {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this;
    };
    this.hs_skipSpaces.evaluateOnce = function () {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_munch.notEvaluated = true;
    this.hs_munch.evaluate = function (hs_p26DqPy) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DqPy);
    };
    this.hs_munch1.notEvaluated = true;
    this.hs_munch1.evaluate = function (hs_p26DqPQ) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DqPQ);
    };
    this.hs_string.notEvaluated = true;
    this.hs_string.evaluate = function (hs_this26DqQ5) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_this26DqQ5);
    };
    this.hs_satisfy.notEvaluated = true;
    this.hs_satisfy.evaluate = function (hs_p26DqQw) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DqQw);
    };
    this.hs_char.notEvaluated = true;
    this.hs_char.evaluate = function (hs_c26DqQA) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_c26DqQA);
    };
    this.hs_eof.evaluateOnce = function () {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_R.notEvaluated = true;
    this.hs_R.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Get.notEvaluated = true;
    this.hs_Get.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Look.notEvaluated = true;
    this.hs_Look.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Fail.notEvaluated = true;
    this.hs_Fail.evaluate = function () {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this;
    };
    this.hs_Result.notEvaluated = true;
    this.hs_Result.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_Final.notEvaluated = true;
    this.hs_Final.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.TextziParserCombinatorsziReadP.initAfterDependencies = function () {
    this.hs_pfail.notEvaluated = false;
    this.hs_look.notEvaluated = false;
    this.hs_get.notEvaluated = false;
    this.hs_readSzutozuP.notEvaluated = false;
    this.hs_zdfMonadP.notEvaluated = false;
    this.hs_zdfMonadP.evaluate = function () {
        return this;
    };
    this.hs_zdfMonadPlusP.notEvaluated = false;
    this.hs_zdfMonadPlusP.evaluate = function () {
        return this;
    };
    this.hs_readPzutozuS.notEvaluated = false;
    this.hs_zpzpzp.notEvaluated = false;
    this.hs_choice.notEvaluated = false;
    this.hs_gather.notEvaluated = false;
    this.hs_zdfFunctorReadP.notEvaluated = false;
    this.hs_zdfFunctorReadP.evaluate = function () {
        return this;
    };
    this.hs_zdfMonadReadP.notEvaluated = false;
    this.hs_zdfMonadReadP.evaluate = function () {
        return this;
    };
    this.hs_zlzpzp.notEvaluated = false;
    this.hs_count.notEvaluated = false;
    this.hs_between.notEvaluated = false;
    this.hs_option.notEvaluated = false;
    this.hs_optional.notEvaluated = false;
    this.hs_many.notEvaluated = false;
    this.hs_many1.notEvaluated = false;
    this.hs_skipMany.notEvaluated = false;
    this.hs_skipMany1.notEvaluated = false;
    this.hs_sepBy1.notEvaluated = false;
    this.hs_sepBy.notEvaluated = false;
    this.hs_endBy.notEvaluated = false;
    this.hs_endBy1.notEvaluated = false;
    this.hs_chainr1.notEvaluated = false;
    this.hs_chainr.notEvaluated = false;
    this.hs_chainl1.notEvaluated = false;
    this.hs_chainl.notEvaluated = false;
    this.hs_manyTill.notEvaluated = false;
    this.hs_zdfMonadPlusReadP.notEvaluated = false;
    this.hs_zdfMonadPlusReadP.evaluate = function () {
        return this;
    };
    this.hs_munch.notEvaluated = false;
    this.hs_munch1.notEvaluated = false;
    this.hs_string.notEvaluated = false;
    this.hs_satisfy.notEvaluated = false;
    this.hs_char.notEvaluated = false;
    this.hs_R.notEvaluated = false;
    this.hs_Get.notEvaluated = false;
    this.hs_Look.notEvaluated = false;
    this.hs_Fail.notEvaluated = false;
    this.hs_Fail.evaluate = function () {
        return this;
    };
    this.hs_Result.notEvaluated = false;
    this.hs_Final.notEvaluated = false;
    var hs_a25v29q = new $hs.Func(1);
    var hs_run25rWPJ = new $hs.Func(2);
    var hs_a125v29R = new $hs.Func(2);
    var hs_zdcfail25v2au = new $hs.Func(1);
    var hs_zdcreturn25v2ax = new $hs.Func(1);
    var hs_zdczgzg25v2aA = new $hs.Thunk();
    var hs_zdczdp1MonadPlus25v2aB = new $hs.Thunk();
    var hs_zdczgzgze25v2aC = new $hs.Func(2);
    var hs_zdcmplus25v2aD = new $hs.Func(2);
    var hs_a225v2dk = new $hs.Func(3);
    var hs_a325v2dL = new $hs.Func(2);
    var hs_a425v2es = new $hs.Func(3);
    var hs_zdcfmap25v2eA = new $hs.Func(3);
    var hs_zdczlzd25v2eB = new $hs.Thunk();
    var hs_a525v2eC = new $hs.Func(2);
    var hs_zdcfail125v2eH = new $hs.Func(2);
    var hs_a625v2eI = new $hs.Func(2);
    var hs_zdcreturn125v2eN = new $hs.Func(2);
    var hs_a725v2eO = new $hs.Func(3);
    var hs_zdczgzgze125v2eY = new $hs.Func(3);
    var hs_zdczgzg125v2eZ = new $hs.Thunk();
    var hs_skip25v2iV = new $hs.Func(1);
    var hs_sat26DqTi = new $hs.Func(1);
    var hs_sat26DqTG = new $hs.Func(1);
    hs_a25v29q.evaluate = function (hs_ds26DqFI) {
        var $res = new $hs.Data(3);
        $res.data = [];
        return $res;
    };
    this.hs_pfail.evaluate = function (hs_eta1cW6l3) {
        return hs_a25v29q.hscall(hs_eta1cW6l3);
    };
    this.hs_look.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(2);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_get.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    hs_run25rWPJ.evaluate = function (hs_ds26DqFL, hs_ds126DqFO) {
        var hs_wild26DqQH = hs_ds26DqFL;
        if (hs_ds26DqFL.notEvaluated) {
            hs_wild26DqQH = hs_ds26DqFL.hscall();
        }
        switch (hs_wild26DqQH.tag) {
        case 1:
            var hs_f26DqFT = hs_wild26DqQH.data[0];
            var hs_wild126DqQL = hs_ds126DqFO;
            if (hs_ds126DqFO.notEvaluated) {
                hs_wild126DqQL = hs_ds126DqFO.hscall();
            }
            switch (hs_wild126DqQL.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_c26DqFS = hs_wild126DqQL.data[0];
                var hs_s26DqFV = hs_wild126DqQL.data[1];
                var hs_sat26DqQK = new $hs.Thunk();
                hs_sat26DqQK.evaluateOnce = function () {
                    return hs_f26DqFT.hscall(hs_c26DqFS);
                };
                return hs_run25rWPJ.hscall(hs_sat26DqQK, hs_s26DqFV);
            }
        case 2:
            var hs_f26DqFX = hs_wild26DqQH.data[0];
            var hs_sat26DqQG = new $hs.Thunk();
            hs_sat26DqQG.evaluateOnce = function () {
                return hs_f26DqFX.hscall(hs_ds126DqFO);
            };
            return hs_run25rWPJ.hscall(hs_sat26DqQG, hs_ds126DqFO);
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 4:
            var hs_x26DqG1 = hs_wild26DqQH.data[0];
            var hs_p26DqG3 = hs_wild26DqQH.data[1];
            var hs_sat26DqQJ = new $hs.Thunk();
            hs_sat26DqQJ.evaluateOnce = function () {
                return hs_run25rWPJ.hscall(hs_p26DqG3, hs_ds126DqFO);
            };
            var hs_sat26DqQI = new $hs.Data(1);
            hs_sat26DqQI.data = [hs_x26DqG1, hs_ds126DqFO];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26DqQI, hs_sat26DqQJ];
            return $res;
        case 5:
            var hs_r26DqG6 = hs_wild26DqQH.data[0];
            if (hs_r26DqG6.notEvaluated) {
                return hs_r26DqG6.hscall();
            } else {
                return hs_r26DqG6;
            }
        }
    };
    hs_a125v29R.evaluate = function (hs_r26DqGD, hs_k26DqGy) {
        var hs_sat26DqQM = new $hs.Func(1);
        hs_sat26DqQM.evaluate = function (hs_s26DqGC) {
            var hs_ds26DqGq = new $hs.Func(1);
            hs_ds26DqGq.evaluate = function (hs_ds126DqGd) {
                var hs_ds226DqQU = hs_ds126DqGd;
                if (hs_ds126DqGd.notEvaluated) {
                    hs_ds226DqQU = hs_ds126DqGd.hscall();
                }
                switch (hs_ds226DqQU.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_ds326DqGh = hs_ds226DqQU.data[0];
                    var hs_ds426DqGp = hs_ds226DqQU.data[1];
                    var hs_wild26DqQT = hs_ds326DqGh;
                    if (hs_ds326DqGh.notEvaluated) {
                        hs_wild26DqQT = hs_ds326DqGh.hscall();
                    }
                    var hs_a826DqGx = hs_wild26DqQT.data[0];
                    var hs_szq26DqGA = hs_wild26DqQT.data[1];
                    var hs_ds526DqGv = new $hs.Func(1);
                    hs_ds526DqGv.evaluate = function (hs_ds626DqGn) {
                        var hs_ds726DqQS = hs_ds626DqGn;
                        if (hs_ds626DqGn.notEvaluated) {
                            hs_ds726DqQS = hs_ds626DqGn.hscall();
                        }
                        switch (hs_ds726DqQS.tag) {
                        case 1:
                            return hs_ds26DqGq.hscall(hs_ds426DqGp);
                        case 2:
                            var hs_ds826DqGt = hs_ds726DqQS.data[0];
                            var hs_ds926DqGu = hs_ds726DqQS.data[1];
                            var hs_sat26DqQR = new $hs.Thunk();
                            hs_sat26DqQR.evaluateOnce = function () {
                                return hs_ds526DqGv.hscall(hs_ds926DqGu);
                            };
                            var $res = new $hs.Data(2);
                            $res.data = [hs_ds826DqGt, hs_sat26DqQR];
                            return $res;
                        }
                    };
                    var hs_sat26DqQQ = new $hs.Thunk();
                    hs_sat26DqQQ.evaluateOnce = function () {
                        var hs_sat26DqQV = new $hs.Thunk();
                        hs_sat26DqQV.evaluateOnce = function () {
                            return hs_k26DqGy.hscall(hs_a826DqGx);
                        };
                        return hs_run25rWPJ.hscall(hs_sat26DqQV, hs_szq26DqGA);
                    };
                    return hs_ds526DqGv.hscall(hs_sat26DqQQ);
                }
            };
            var hs_sat26DqQP = new $hs.Thunk();
            hs_sat26DqQP.evaluateOnce = function () {
                return hs_r26DqGD.hscall(hs_s26DqGC);
            };
            var hs_wild26DqGI = hs_ds26DqGq.hscall(hs_sat26DqQP);
            switch (hs_wild26DqGI.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(5);
                $res.data = [hs_wild26DqGI];
                return $res;
            }
        };
        var $res = new $hs.Data(2);
        $res.data = [hs_sat26DqQM];
        return $res;
    };
    this.hs_readSzutozuP.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a125v29R.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcfail25v2au.evaluate = function (hs_ds26DqGM) {
        var $res = new $hs.Data(3);
        $res.data = [];
        return $res;
    };
    hs_zdcreturn25v2ax.evaluate = function (hs_x26DqGP) {
        var $res = new $hs.Data(4);
        $res.data = [hs_x26DqGP, $hs.modules.TextziParserCombinatorsziReadP.hs_Fail];
        return $res;
    };
    this.hs_zdfMonadP.data = [hs_zdczgzgze25v2aC, hs_zdczgzg25v2aA, hs_zdcreturn25v2ax, hs_zdcfail25v2au];
    hs_zdczgzg25v2aA.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zddmzgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadP);
    };
    hs_zdczdp1MonadPlus25v2aB.evaluateOnce = function () {
        if ($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadP.notEvaluated) {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadP.hscall();
        } else {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadP;
        }
    };
    this.hs_zdfMonadPlusP.data = [$hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadP, $hs.modules.TextziParserCombinatorsziReadP.hs_Fail, hs_zdcmplus25v2aD];
    hs_zdczgzgze25v2aC.evaluate = function (hs_ds26DqGW, hs_k26DqH3) {
        var hs_wild26DqQX = hs_ds26DqGW;
        if (hs_ds26DqGW.notEvaluated) {
            hs_wild26DqQX = hs_ds26DqGW.hscall();
        }
        switch (hs_wild26DqQX.tag) {
        case 1:
            var hs_f26DqH1 = hs_wild26DqQX.data[0];
            var hs_sat26DqR9 = new $hs.Func(1);
            hs_sat26DqR9.evaluate = function (hs_c26DqH0) {
                var hs_sat26DqRa = new $hs.Thunk();
                hs_sat26DqRa.evaluateOnce = function () {
                    return hs_f26DqH1.hscall(hs_c26DqH0);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadP, hs_sat26DqRa, hs_k26DqH3);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DqR9];
            return $res;
        case 2:
            var hs_f26DqH8 = hs_wild26DqQX.data[0];
            var hs_sat26DqQW = new $hs.Func(1);
            hs_sat26DqQW.evaluate = function (hs_s26DqH7) {
                var hs_sat26DqQY = new $hs.Thunk();
                hs_sat26DqQY.evaluateOnce = function () {
                    return hs_f26DqH8.hscall(hs_s26DqH7);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadP, hs_sat26DqQY, hs_k26DqH3);
            };
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26DqQW];
            return $res;
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        case 4:
            var hs_x26DqHd = hs_wild26DqQX.data[0];
            var hs_p26DqHf = hs_wild26DqQX.data[1];
            var hs_sat26DqR0 = new $hs.Thunk();
            hs_sat26DqR0.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadP, hs_p26DqHf, hs_k26DqH3);
            };
            var hs_sat26DqQZ = new $hs.Thunk();
            hs_sat26DqQZ.evaluateOnce = function () {
                return hs_k26DqH3.hscall(hs_x26DqHd);
            };
            return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DqQZ, hs_sat26DqR0);
        case 5:
            var hs_r26DqHI = hs_wild26DqQX.data[0];
            var hs_ds126DqHx = new $hs.Func(1);
            hs_ds126DqHx.evaluate = function (hs_ds226DqHk) {
                var hs_ds326DqR7 = hs_ds226DqHk;
                if (hs_ds226DqHk.notEvaluated) {
                    hs_ds326DqR7 = hs_ds226DqHk.hscall();
                }
                switch (hs_ds326DqR7.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_ds426DqHo = hs_ds326DqR7.data[0];
                    var hs_ds526DqHw = hs_ds326DqR7.data[1];
                    var hs_wild126DqR6 = hs_ds426DqHo;
                    if (hs_ds426DqHo.notEvaluated) {
                        hs_wild126DqR6 = hs_ds426DqHo.hscall();
                    }
                    var hs_x26DqHE = hs_wild126DqR6.data[0];
                    var hs_s26DqHG = hs_wild126DqR6.data[1];
                    var hs_ds626DqHC = new $hs.Func(1);
                    hs_ds626DqHC.evaluate = function (hs_ds726DqHu) {
                        var hs_ds826DqR5 = hs_ds726DqHu;
                        if (hs_ds726DqHu.notEvaluated) {
                            hs_ds826DqR5 = hs_ds726DqHu.hscall();
                        }
                        switch (hs_ds826DqR5.tag) {
                        case 1:
                            return hs_ds126DqHx.hscall(hs_ds526DqHw);
                        case 2:
                            var hs_ds926DqHA = hs_ds826DqR5.data[0];
                            var hs_ds1026DqHB = hs_ds826DqR5.data[1];
                            var hs_sat26DqR4 = new $hs.Thunk();
                            hs_sat26DqR4.evaluateOnce = function () {
                                return hs_ds626DqHC.hscall(hs_ds1026DqHB);
                            };
                            var $res = new $hs.Data(2);
                            $res.data = [hs_ds926DqHA, hs_sat26DqR4];
                            return $res;
                        }
                    };
                    var hs_sat26DqR3 = new $hs.Thunk();
                    hs_sat26DqR3.evaluateOnce = function () {
                        var hs_sat26DqR8 = new $hs.Thunk();
                        hs_sat26DqR8.evaluateOnce = function () {
                            return hs_k26DqH3.hscall(hs_x26DqHE);
                        };
                        return hs_run25rWPJ.hscall(hs_sat26DqR8, hs_s26DqHG);
                    };
                    return hs_ds626DqHC.hscall(hs_sat26DqR3);
                }
            };
            var hs_wild126DqHM = hs_ds126DqHx.hscall(hs_r26DqHI);
            switch (hs_wild126DqHM.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(5);
                $res.data = [hs_wild126DqHM];
                return $res;
            }
        }
    };
    hs_zdcmplus25v2aD.evaluate = function (hs_ds26DqHT, hs_ds126DqHR) {
        var hs_fail26DqJf = new $hs.Func(1);
        hs_fail26DqJf.evaluate = function (hs_ds226DqJe) {
            var hs_wild26DqHV = hs_ds126DqHR;
            if (hs_ds126DqHR.notEvaluated) {
                hs_wild26DqHV = hs_ds126DqHR.hscall();
            }
            switch (hs_wild26DqHV.tag) {
            case 4:
                var hs_x26DqJb = hs_wild26DqHV.data[0];
                var hs_q26DqJc = hs_wild26DqHV.data[1];
                var hs_sat26DqRh = new $hs.Thunk();
                hs_sat26DqRh.evaluateOnce = function () {
                    return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_ds26DqHT, hs_q26DqJc);
                };
                var $res = new $hs.Data(4);
                $res.data = [hs_x26DqJb, hs_sat26DqRh];
                return $res;
            default:
                var hs_wild126DqI1 = hs_ds26DqHT;
                if (hs_ds26DqHT.notEvaluated) {
                    hs_wild126DqI1 = hs_ds26DqHT.hscall();
                }
                switch (hs_wild126DqI1.tag) {
                case 3:
                    if (hs_wild26DqHV.notEvaluated) {
                        return hs_wild26DqHV.hscall();
                    } else {
                        return hs_wild26DqHV;
                    }
                default:
                    var hs_wild226DqHZ = hs_wild26DqHV;
                    if (hs_wild26DqHV.notEvaluated) {
                        hs_wild226DqHZ = hs_wild26DqHV.hscall();
                    }
                    switch (hs_wild226DqHZ.tag) {
                    case 3:
                        if (hs_wild126DqI1.notEvaluated) {
                            return hs_wild126DqI1.hscall();
                        } else {
                            return hs_wild126DqI1;
                        }
                    default:
                        var hs_fail126DqIB = new $hs.Func(1);
                        hs_fail126DqIB.evaluate = function (hs_ds326DqIA) {
                            var hs_wild326DqI3 = hs_wild226DqHZ;
                            if (hs_wild226DqHZ.notEvaluated) {
                                hs_wild326DqI3 = hs_wild226DqHZ.hscall();
                            }
                            switch (hs_wild326DqI3.tag) {
                            case 5:
                                var hs_r26DqIx = hs_wild326DqI3.data[0];
                                var hs_sat26DqRx = new $hs.Func(1);
                                hs_sat26DqRx.evaluate = function (hs_s26DqIv) {
                                    var hs_sat26DqRy = new $hs.Thunk();
                                    hs_sat26DqRy.evaluateOnce = function () {
                                        var hs_sat26DqRz = new $hs.Thunk();
                                        hs_sat26DqRz.evaluateOnce = function () {
                                            return hs_run25rWPJ.hscall(hs_wild126DqI1, hs_s26DqIv);
                                        };
                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DqRz, hs_r26DqIx);
                                    };
                                    var $res = new $hs.Data(5);
                                    $res.data = [hs_sat26DqRy];
                                    return $res;
                                };
                                var $res = new $hs.Data(2);
                                $res.data = [hs_sat26DqRx];
                                return $res;
                            default:
                                var hs_wild426DqI8 = hs_wild126DqI1;
                                if (hs_wild126DqI1.notEvaluated) {
                                    hs_wild426DqI8 = hs_wild126DqI1.hscall();
                                }
                                switch (hs_wild426DqI8.tag) {
                                case 2:
                                    var hs_f26DqIi = hs_wild426DqI8.data[0];
                                    var hs_wild526DqIk = hs_wild326DqI3;
                                    if (hs_wild326DqI3.notEvaluated) {
                                        hs_wild526DqIk = hs_wild326DqI3.hscall();
                                    }
                                    switch (hs_wild526DqIk.tag) {
                                    case 1:
                                        var hs_sat26DqRD = new $hs.Func(1);
                                        hs_sat26DqRD.evaluate = function (hs_s26DqIh) {
                                            var hs_sat26DqRF = new $hs.Thunk();
                                            hs_sat26DqRF.evaluateOnce = function () {
                                                return hs_f26DqIi.hscall(hs_s26DqIh);
                                            };
                                            return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DqRF, hs_wild526DqIk);
                                        };
                                        var $res = new $hs.Data(2);
                                        $res.data = [hs_sat26DqRD];
                                        return $res;
                                    case 2:
                                        var hs_g26DqIq = hs_wild526DqIk.data[0];
                                        var hs_sat26DqRA = new $hs.Func(1);
                                        hs_sat26DqRA.evaluate = function (hs_s26DqIo) {
                                            var hs_sat26DqRC = new $hs.Thunk();
                                            hs_sat26DqRC.evaluateOnce = function () {
                                                return hs_g26DqIq.hscall(hs_s26DqIo);
                                            };
                                            var hs_sat26DqRB = new $hs.Thunk();
                                            hs_sat26DqRB.evaluateOnce = function () {
                                                return hs_f26DqIi.hscall(hs_s26DqIo);
                                            };
                                            return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DqRB, hs_sat26DqRC);
                                        };
                                        var $res = new $hs.Data(2);
                                        $res.data = [hs_sat26DqRA];
                                        return $res;
                                    }
                                default:
                                    var hs_wild526DqRH = hs_wild326DqI3;
                                    if (hs_wild326DqI3.notEvaluated) {
                                        hs_wild526DqRH = hs_wild326DqI3.hscall();
                                    }
                                    switch (hs_wild526DqRH.tag) {
                                    case 1:
                                        return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("/home/titto/cache/haskell/ghc-7.2.1/libraries/base/Text/ParserCombinators/ReadP.hs:(136,3)-(159,60)|function mplus\x00");
                                    case 2:
                                        var hs_f26DqIa = hs_wild526DqRH.data[0];
                                        var hs_sat26DqRG = new $hs.Func(1);
                                        hs_sat26DqRG.evaluate = function (hs_s26DqI9) {
                                            var hs_sat26DqRI = new $hs.Thunk();
                                            hs_sat26DqRI.evaluateOnce = function () {
                                                return hs_f26DqIa.hscall(hs_s26DqI9);
                                            };
                                            return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_wild426DqI8, hs_sat26DqRI);
                                        };
                                        var $res = new $hs.Data(2);
                                        $res.data = [hs_sat26DqRG];
                                        return $res;
                                    }
                                }
                            }
                        };
                        var hs_wild326DqRk = hs_wild126DqI1;
                        if (hs_wild126DqI1.notEvaluated) {
                            hs_wild326DqRk = hs_wild126DqI1.hscall();
                        }
                        switch (hs_wild326DqRk.tag) {
                        case 2:
                            var hs_f26DqII = hs_wild326DqRk.data[0];
                            var hs_wild426DqRj = hs_wild226DqHZ;
                            if (hs_wild226DqHZ.notEvaluated) {
                                hs_wild426DqRj = hs_wild226DqHZ.hscall();
                            }
                            switch (hs_wild426DqRj.tag) {
                            case 5:
                                var hs_r26DqIL = hs_wild426DqRj.data[0];
                                var hs_sat26DqRi = new $hs.Func(1);
                                hs_sat26DqRi.evaluate = function (hs_s26DqIH) {
                                    var hs_sat26DqRl = new $hs.Thunk();
                                    hs_sat26DqRl.evaluateOnce = function () {
                                        var hs_sat26DqRm = new $hs.Thunk();
                                        hs_sat26DqRm.evaluateOnce = function () {
                                            var hs_sat26DqRn = new $hs.Thunk();
                                            hs_sat26DqRn.evaluateOnce = function () {
                                                return hs_f26DqII.hscall(hs_s26DqIH);
                                            };
                                            return hs_run25rWPJ.hscall(hs_sat26DqRn, hs_s26DqIH);
                                        };
                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DqRm, hs_r26DqIL);
                                    };
                                    var $res = new $hs.Data(5);
                                    $res.data = [hs_sat26DqRl];
                                    return $res;
                                };
                                var $res = new $hs.Data(2);
                                $res.data = [hs_sat26DqRi];
                                return $res;
                            default:
                                return hs_fail126DqIB.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            }
                        case 5:
                            var hs_r26DqIS = hs_wild326DqRk.data[0];
                            var hs_wild426DqIT = hs_wild226DqHZ;
                            if (hs_wild226DqHZ.notEvaluated) {
                                hs_wild426DqIT = hs_wild226DqHZ.hscall();
                            }
                            switch (hs_wild426DqIT.tag) {
                            case 1:
                                var hs_sat26DqRt = new $hs.Func(1);
                                hs_sat26DqRt.evaluate = function (hs_s26DqIU) {
                                    var hs_sat26DqRv = new $hs.Thunk();
                                    hs_sat26DqRv.evaluateOnce = function () {
                                        var hs_sat26DqRw = new $hs.Thunk();
                                        hs_sat26DqRw.evaluateOnce = function () {
                                            return hs_run25rWPJ.hscall(hs_wild426DqIT, hs_s26DqIU);
                                        };
                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_r26DqIS, hs_sat26DqRw);
                                    };
                                    var $res = new $hs.Data(5);
                                    $res.data = [hs_sat26DqRv];
                                    return $res;
                                };
                                var $res = new $hs.Data(2);
                                $res.data = [hs_sat26DqRt];
                                return $res;
                            case 2:
                                var hs_f26DqJ1 = hs_wild426DqIT.data[0];
                                var hs_sat26DqRo = new $hs.Func(1);
                                hs_sat26DqRo.evaluate = function (hs_s26DqJ0) {
                                    var hs_sat26DqRp = new $hs.Thunk();
                                    hs_sat26DqRp.evaluateOnce = function () {
                                        var hs_sat26DqRq = new $hs.Thunk();
                                        hs_sat26DqRq.evaluateOnce = function () {
                                            var hs_sat26DqRr = new $hs.Thunk();
                                            hs_sat26DqRr.evaluateOnce = function () {
                                                return hs_f26DqJ1.hscall(hs_s26DqJ0);
                                            };
                                            return hs_run25rWPJ.hscall(hs_sat26DqRr, hs_s26DqJ0);
                                        };
                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_r26DqIS, hs_sat26DqRq);
                                    };
                                    var $res = new $hs.Data(5);
                                    $res.data = [hs_sat26DqRp];
                                    return $res;
                                };
                                var $res = new $hs.Data(2);
                                $res.data = [hs_sat26DqRo];
                                return $res;
                            case 5:
                                var hs_t26DqJ7 = hs_wild426DqIT.data[0];
                                var hs_sat26DqRs = new $hs.Thunk();
                                hs_sat26DqRs.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_r26DqIS, hs_t26DqJ7);
                                };
                                var $res = new $hs.Data(5);
                                $res.data = [hs_sat26DqRs];
                                return $res;
                            }
                        default:
                            return hs_fail126DqIB.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        }
                    }
                }
            }
        };
        var hs_wild26DqRd = hs_ds26DqHT;
        if (hs_ds26DqHT.notEvaluated) {
            hs_wild26DqRd = hs_ds26DqHT.hscall();
        }
        switch (hs_wild26DqRd.tag) {
        case 1:
            var hs_f126DqJm = hs_wild26DqRd.data[0];
            var hs_wild126DqRc = hs_ds126DqHR;
            if (hs_ds126DqHR.notEvaluated) {
                hs_wild126DqRc = hs_ds126DqHR.hscall();
            }
            switch (hs_wild126DqRc.tag) {
            case 1:
                var hs_f226DqJo = hs_wild126DqRc.data[0];
                var hs_sat26DqRb = new $hs.Func(1);
                hs_sat26DqRb.evaluate = function (hs_c26DqJl) {
                    var hs_sat26DqRf = new $hs.Thunk();
                    hs_sat26DqRf.evaluateOnce = function () {
                        return hs_f226DqJo.hscall(hs_c26DqJl);
                    };
                    var hs_sat26DqRe = new $hs.Thunk();
                    hs_sat26DqRe.evaluateOnce = function () {
                        return hs_f126DqJm.hscall(hs_c26DqJl);
                    };
                    return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DqRe, hs_sat26DqRf);
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26DqRb];
                return $res;
            default:
                return hs_fail26DqJf.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        case 4:
            var hs_x26DqJt = hs_wild26DqRd.data[0];
            var hs_p26DqJu = hs_wild26DqRd.data[1];
            var hs_sat26DqRg = new $hs.Thunk();
            hs_sat26DqRg.evaluateOnce = function () {
                return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_p26DqJu, hs_ds126DqHR);
            };
            var $res = new $hs.Data(4);
            $res.data = [hs_x26DqJt, hs_sat26DqRg];
            return $res;
        default:
            return hs_fail26DqJf.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
        }
    };
    this.hs_readPzutozuS.evaluate = function (hs_ds26DqJy) {
        var hs_sat26DqRK = new $hs.Thunk();
        hs_sat26DqRK.evaluateOnce = function () {
            var hs_sat26DqRL = new $hs.Thunk();
            hs_sat26DqRL.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadP);
            };
            return hs_ds26DqJy.hscall(hs_sat26DqRL);
        };
        return hs_run25rWPJ.hscall(hs_sat26DqRK);
    };
    hs_a225v2dk.evaluate = function (hs_ds26DqJF, hs_ds126DqJH, hs_k26DqJE) {
        var hs_sat26DqRN = new $hs.Thunk();
        hs_sat26DqRN.evaluateOnce = function () {
            return hs_ds126DqJH.hscall(hs_k26DqJE);
        };
        var hs_sat26DqRM = new $hs.Thunk();
        hs_sat26DqRM.evaluateOnce = function () {
            return hs_ds26DqJF.hscall(hs_k26DqJE);
        };
        return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DqRM, hs_sat26DqRN);
    };
    this.hs_zpzpzp.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a225v2dk.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_choice.evaluate = function (hs_ds26DqJK) {
        var hs_wild26DqRS = hs_ds26DqJK;
        if (hs_ds26DqJK.notEvaluated) {
            hs_wild26DqRS = hs_ds26DqJK.hscall();
        }
        switch (hs_wild26DqRS.tag) {
        case 1:
            if (hs_a25v29q.notEvaluated) {
                return hs_a25v29q.hscall();
            } else {
                return hs_a25v29q;
            }
        case 2:
            var hs_p26DqJQ = hs_wild26DqRS.data[0];
            var hs_ds126DqJO = hs_wild26DqRS.data[1];
            var hs_wild126DqJU = hs_ds126DqJO;
            if (hs_ds126DqJO.notEvaluated) {
                hs_wild126DqJU = hs_ds126DqJO.hscall();
            }
            switch (hs_wild126DqJU.tag) {
            case 1:
                if (hs_p26DqJQ.notEvaluated) {
                    return hs_p26DqJQ.hscall();
                } else {
                    return hs_p26DqJQ;
                }
            case 2:
                var hs_ds226DqJV = new $hs.Thunk();
                hs_ds226DqJV.evaluateOnce = function () {
                    return $hs.modules.TextziParserCombinatorsziReadP.hs_choice.hscall(hs_wild126DqJU);
                };
                var hs_sat26DqRO = new $hs.Func(1);
                hs_sat26DqRO.evaluate = function (hs_k26DqJX) {
                    var hs_sat26DqRT = new $hs.Thunk();
                    hs_sat26DqRT.evaluateOnce = function () {
                        return hs_ds226DqJV.hscall(hs_k26DqJX);
                    };
                    var hs_sat26DqRP = new $hs.Thunk();
                    hs_sat26DqRP.evaluateOnce = function () {
                        return hs_p26DqJQ.hscall(hs_k26DqJX);
                    };
                    return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DqRP, hs_sat26DqRT);
                };
                if (hs_sat26DqRO.notEvaluated) {
                    return hs_sat26DqRO.hscall();
                } else {
                    return hs_sat26DqRO;
                }
            }
        }
    };
    hs_a325v2dL.evaluate = function (hs_ds26DqKG, hs_eta26DqKC) {
        var hs_gath26DqKe = new $hs.Func(2);
        hs_gath26DqKe.evaluate = function (hs_l26DqKb, hs_ds126DqK7) {
            var hs_wild26DqRW = hs_ds126DqK7;
            if (hs_ds126DqK7.notEvaluated) {
                hs_wild26DqRW = hs_ds126DqK7.hscall();
            }
            switch (hs_wild26DqRW.tag) {
            case 1:
                var hs_f26DqKg = hs_wild26DqRW.data[0];
                var hs_sat26DqS3 = new $hs.Func(1);
                hs_sat26DqS3.evaluate = function (hs_c26DqKc) {
                    var hs_sat26DqS5 = new $hs.Thunk();
                    hs_sat26DqS5.evaluateOnce = function () {
                        return hs_f26DqKg.hscall(hs_c26DqKc);
                    };
                    var hs_sat26DqS4 = new $hs.Thunk();
                    hs_sat26DqS4.evaluateOnce = function () {
                        var hs_sat26DqS6 = new $hs.Func(1);
                        hs_sat26DqS6.evaluate = function (hs_eta1cW6l3) {
                            var $res = new $hs.Data(2);
                            $res.data = [hs_c26DqKc, hs_eta1cW6l3];
                            return $res;
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_l26DqKb, hs_sat26DqS6);
                    };
                    return hs_gath26DqKe.hscall(hs_sat26DqS4, hs_sat26DqS5);
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26DqS3];
                return $res;
            case 2:
                var hs_f26DqKm = hs_wild26DqRW.data[0];
                var hs_sat26DqRV = new $hs.Func(1);
                hs_sat26DqRV.evaluate = function (hs_s26DqKl) {
                    var hs_sat26DqRX = new $hs.Thunk();
                    hs_sat26DqRX.evaluateOnce = function () {
                        return hs_f26DqKm.hscall(hs_s26DqKl);
                    };
                    return hs_gath26DqKe.hscall(hs_l26DqKb, hs_sat26DqRX);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26DqRV];
                return $res;
            case 3:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 4:
                var hs_k26DqKr = hs_wild26DqRW.data[0];
                var hs_p26DqKu = hs_wild26DqRW.data[1];
                var hs_sat26DqRZ = new $hs.Thunk();
                hs_sat26DqRZ.evaluateOnce = function () {
                    return hs_gath26DqKe.hscall(hs_l26DqKb, hs_p26DqKu);
                };
                var hs_sat26DqRY = new $hs.Thunk();
                hs_sat26DqRY.evaluateOnce = function () {
                    var hs_sat26DqS0 = new $hs.Thunk();
                    hs_sat26DqS0.evaluateOnce = function () {
                        return hs_l26DqKb.hscall($hs.modules.GHCziTypes.hs_ZMZN);
                    };
                    return hs_k26DqKr.hscall(hs_sat26DqS0);
                };
                return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DqRY, hs_sat26DqRZ);
            case 5:
                var hs_sat26DqS2 = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("do not use readS_to_P in gather!\x00");
                return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DqS2);
            }
        };
        var hs_sat26DqRU = new $hs.Thunk();
        hs_sat26DqRU.evaluateOnce = function () {
            var hs_sat26DqS7 = new $hs.Func(1);
            hs_sat26DqS7.evaluate = function (hs_a826DqKB) {
                var hs_sat26DqS8 = new $hs.Func(1);
                hs_sat26DqS8.evaluate = function (hs_s26DqKA) {
                    var hs_sat26DqS9 = new $hs.Data(1);
                    hs_sat26DqS9.data = [hs_s26DqKA, hs_a826DqKB];
                    return hs_eta26DqKC.hscall(hs_sat26DqS9);
                };
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadP, hs_sat26DqS8);
            };
            return hs_ds26DqKG.hscall(hs_sat26DqS7);
        };
        return hs_gath26DqKe.hscall($hs.modules.GHCziBase.hs_id, hs_sat26DqRU);
    };
    this.hs_gather.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a325v2dL.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a425v2es.evaluate = function (hs_h26DqKN, hs_ds26DqKP, hs_k26DqKM) {
        var hs_sat26DqSa = new $hs.Thunk();
        hs_sat26DqSa.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_k26DqKM, hs_h26DqKN);
        };
        return hs_ds26DqKP.hscall(hs_sat26DqSa);
    };
    hs_zdcfmap25v2eA.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a425v2es.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfFunctorReadP.data = [hs_a425v2es, hs_zdczlzd25v2eB];
    hs_zdczlzd25v2eB.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zddmzlzd.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfFunctorReadP);
    };
    hs_a525v2eC.evaluate = function (hs_ds26DqKV, hs_ds126DqKW) {
        var $res = new $hs.Data(3);
        $res.data = [];
        return $res;
    };
    hs_zdcfail125v2eH.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a525v2eC.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a625v2eI.evaluate = function (hs_x26DqL1, hs_k26DqL2) {
        return hs_k26DqL2.hscall(hs_x26DqL1);
    };
    hs_zdcreturn125v2eN.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a625v2eI.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a725v2eO.evaluate = function (hs_ds26DqLd, hs_f26DqLb, hs_k26DqLa) {
        var hs_sat26DqSb = new $hs.Func(1);
        hs_sat26DqSb.evaluate = function (hs_a826DqL9) {
            return hs_f26DqLb.hscall(hs_a826DqL9, hs_k26DqLa);
        };
        return hs_ds26DqLd.hscall(hs_sat26DqSb);
    };
    hs_zdczgzgze125v2eY.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a725v2eO.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfMonadReadP.data = [hs_a725v2eO, hs_zdczgzg125v2eZ, hs_a625v2eI, hs_a525v2eC];
    hs_zdczgzg125v2eZ.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zddmzgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP);
    };
    this.hs_zlzpzp.evaluate = function (hs_ds26DqLX, hs_q26DqLz) {
        var hs_discard26DqLn = new $hs.Func(1);
        hs_discard26DqLn.evaluate = function (hs_ds126DqLk) {
            var hs_ds226DqLm = hs_ds126DqLk;
            if (hs_ds126DqLk.notEvaluated) {
                hs_ds226DqLm = hs_ds126DqLk.hscall();
            }
            switch (hs_ds226DqLm) {
            case 0:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziUnit.hs_Z0T);
            default:
                var hs_sat26DqSn = new $hs.Thunk();
                hs_sat26DqSn.evaluateOnce = function () {
                    var hs_sat26DqSo = ($hs.Int.addCarry(hs_ds226DqLm, ~1, 1))[0];
                    return hs_discard26DqLn.hscall(hs_sat26DqSo);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_Get, hs_sat26DqSn);
            }
        };
        var hs_probe26DqLE = new $hs.Func(3);
        hs_probe26DqLE.evaluate = function (hs_ds126DqLu, hs_ds226DqLx, hs_n26DqLH) {
            var hs_wild26DqLP = hs_ds126DqLu;
            if (hs_ds126DqLu.notEvaluated) {
                hs_wild26DqLP = hs_ds126DqLu.hscall();
            }
            switch (hs_wild26DqLP.tag) {
            case 1:
                var hs_f26DqLD = hs_wild26DqLP.data[0];
                var hs_wild126DqSk = hs_ds226DqLx;
                if (hs_ds226DqLx.notEvaluated) {
                    hs_wild126DqSk = hs_ds226DqLx.hscall();
                }
                switch (hs_wild126DqSk.tag) {
                case 1:
                    if (hs_q26DqLz.notEvaluated) {
                        return hs_q26DqLz.hscall();
                    } else {
                        return hs_q26DqLz;
                    }
                case 2:
                    var hs_c26DqLC = hs_wild126DqSk.data[0];
                    var hs_s26DqLG = hs_wild126DqSk.data[1];
                    var hs_sat26DqSj = ($hs.Int.addCarry(hs_n26DqLH, 1, 0))[0];
                    var hs_sat26DqSi = new $hs.Thunk();
                    hs_sat26DqSi.evaluateOnce = function () {
                        return hs_f26DqLD.hscall(hs_c26DqLC);
                    };
                    return hs_probe26DqLE.hscall(hs_sat26DqSi, hs_s26DqLG, hs_sat26DqSj);
                }
            case 2:
                var hs_f26DqLK = hs_wild26DqLP.data[0];
                var hs_sat26DqSd = new $hs.Thunk();
                hs_sat26DqSd.evaluateOnce = function () {
                    return hs_f26DqLK.hscall(hs_ds226DqLx);
                };
                return hs_probe26DqLE.hscall(hs_sat26DqSd, hs_ds226DqLx, hs_n26DqLH);
            case 3:
                if (hs_q26DqLz.notEvaluated) {
                    return hs_q26DqLz.hscall();
                } else {
                    return hs_q26DqLz;
                }
            case 4:
                var hs_sat26DqSh = new $hs.Thunk();
                hs_sat26DqSh.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadP, hs_wild26DqLP);
                };
                var hs_sat26DqSe = new $hs.Thunk();
                hs_sat26DqSe.evaluateOnce = function () {
                    return hs_discard26DqLn.hscall(hs_n26DqLH);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DqSe, hs_sat26DqSh);
            case 5:
                var hs_r26DqLS = hs_wild26DqLP.data[0];
                var hs_sat26DqLU = new $hs.Data(5);
                hs_sat26DqLU.data = [hs_r26DqLS];
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadP, hs_sat26DqLU);
            }
        };
        var hs_sat26DqSc = new $hs.Func(1);
        hs_sat26DqSc.evaluate = function (hs_s26DqLZ) {
            var hs_sat26DqSl = new $hs.Thunk();
            hs_sat26DqSl.evaluateOnce = function () {
                var hs_sat26DqSm = new $hs.Thunk();
                hs_sat26DqSm.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadP);
                };
                return hs_ds26DqLX.hscall(hs_sat26DqSm);
            };
            return hs_probe26DqLE.hscall(hs_sat26DqSl, hs_s26DqLZ, 0);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_Look, hs_sat26DqSc);
    };
    this.hs_count.evaluate = function (hs_n26DqM3, hs_p26DqM4) {
        var hs_sat26DqSp = new $hs.Thunk();
        hs_sat26DqSp.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_replicate.hscall(hs_n26DqM3, hs_p26DqM4);
        };
        return $hs.modules.ControlziMonad.hs_sequence.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DqSp);
    };
    this.hs_between.evaluate = function (hs_open26DqM9, hs_close26DqMd, hs_p26DqMb) {
        var hs_sat26DqSq = new $hs.Func(1);
        hs_sat26DqSq.evaluate = function (hs_ds26DqMj) {
            var hs_sat26DqSr = new $hs.Func(1);
            hs_sat26DqSr.evaluate = function (hs_x26DqMf) {
                var hs_sat26DqSs = new $hs.Func(1);
                hs_sat26DqSs.evaluate = function (hs_ds126DqMg) {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_x26DqMf);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_close26DqMd, hs_sat26DqSs);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_p26DqMb, hs_sat26DqSr);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_open26DqM9, hs_sat26DqSq);
    };
    this.hs_option.evaluate = function (hs_x26DqMo, hs_p26DqMs) {
        var hs_ds26DqMp = new $hs.Thunk();
        hs_ds26DqMp.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_x26DqMo);
        };
        var hs_sat26DqSt = new $hs.Func(1);
        hs_sat26DqSt.evaluate = function (hs_k26DqMr) {
            var hs_sat26DqSv = new $hs.Thunk();
            hs_sat26DqSv.evaluateOnce = function () {
                return hs_ds26DqMp.hscall(hs_k26DqMr);
            };
            var hs_sat26DqSu = new $hs.Thunk();
            hs_sat26DqSu.evaluateOnce = function () {
                return hs_p26DqMs.hscall(hs_k26DqMr);
            };
            return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DqSu, hs_sat26DqSv);
        };
        if (hs_sat26DqSt.notEvaluated) {
            return hs_sat26DqSt.hscall();
        } else {
            return hs_sat26DqSt;
        }
    };
    this.hs_optional.evaluate = function (hs_p26DqMy) {
        var hs_ds26DqMA = new $hs.Thunk();
        hs_ds26DqMA.evaluateOnce = function () {
            var hs_sat26DqSz = new $hs.Thunk();
            hs_sat26DqSz.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziUnit.hs_Z0T);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_p26DqMy, hs_sat26DqSz);
        };
        var hs_ds126DqMC = new $hs.Thunk();
        hs_ds126DqMC.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26DqSw = new $hs.Func(1);
        hs_sat26DqSw.evaluate = function (hs_k26DqME) {
            var hs_sat26DqSy = new $hs.Thunk();
            hs_sat26DqSy.evaluateOnce = function () {
                return hs_ds126DqMC.hscall(hs_k26DqME);
            };
            var hs_sat26DqSx = new $hs.Thunk();
            hs_sat26DqSx.evaluateOnce = function () {
                return hs_ds26DqMA.hscall(hs_k26DqME);
            };
            return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DqSx, hs_sat26DqSy);
        };
        if (hs_sat26DqSw.notEvaluated) {
            return hs_sat26DqSw.hscall();
        } else {
            return hs_sat26DqSw;
        }
    };
    this.hs_many.evaluate = function (hs_p26DqMM) {
        var hs_ds26DqMK = new $hs.Thunk();
        hs_ds26DqMK.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        var hs_ds126DqMO = new $hs.Thunk();
        hs_ds126DqMO.evaluateOnce = function () {
            var hs_sat26DqSD = new $hs.Thunk();
            hs_sat26DqSD.evaluateOnce = function () {
                return $hs.modules.TextziParserCombinatorsziReadP.hs_many.hscall(hs_p26DqMM);
            };
            return $hs.modules.ControlziMonad.hs_liftM2.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziTypes.hs_ZC, hs_p26DqMM, hs_sat26DqSD);
        };
        var hs_sat26DqSA = new $hs.Func(1);
        hs_sat26DqSA.evaluate = function (hs_k26DqMQ) {
            var hs_sat26DqSC = new $hs.Thunk();
            hs_sat26DqSC.evaluateOnce = function () {
                return hs_ds126DqMO.hscall(hs_k26DqMQ);
            };
            var hs_sat26DqSB = new $hs.Thunk();
            hs_sat26DqSB.evaluateOnce = function () {
                return hs_ds26DqMK.hscall(hs_k26DqMQ);
            };
            return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DqSB, hs_sat26DqSC);
        };
        if (hs_sat26DqSA.notEvaluated) {
            return hs_sat26DqSA.hscall();
        } else {
            return hs_sat26DqSA;
        }
    };
    this.hs_many1.evaluate = function (hs_p26DqMV) {
        var hs_sat26DqSE = new $hs.Thunk();
        hs_sat26DqSE.evaluateOnce = function () {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_many.hscall(hs_p26DqMV);
        };
        return $hs.modules.ControlziMonad.hs_liftM2.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziTypes.hs_ZC, hs_p26DqMV, hs_sat26DqSE);
    };
    this.hs_skipMany.evaluate = function (hs_p26DqMY) {
        var hs_sat26DqSG = new $hs.Thunk();
        hs_sat26DqSG.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26DqSF = new $hs.Thunk();
        hs_sat26DqSF.evaluateOnce = function () {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_many.hscall(hs_p26DqMY);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DqSF, hs_sat26DqSG);
    };
    this.hs_skipMany1.evaluate = function (hs_p26DqN2) {
        var hs_sat26DqSH = new $hs.Thunk();
        hs_sat26DqSH.evaluateOnce = function () {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_skipMany.hscall(hs_p26DqN2);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_p26DqN2, hs_sat26DqSH);
    };
    this.hs_sepBy1.evaluate = function (hs_p26DqN6, hs_sep26DqN7) {
        var hs_sat26DqSI = new $hs.Thunk();
        hs_sat26DqSI.evaluateOnce = function () {
            var hs_sat26DqSJ = new $hs.Thunk();
            hs_sat26DqSJ.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sep26DqN7, hs_p26DqN6);
            };
            return $hs.modules.TextziParserCombinatorsziReadP.hs_many.hscall(hs_sat26DqSJ);
        };
        return $hs.modules.ControlziMonad.hs_liftM2.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziTypes.hs_ZC, hs_p26DqN6, hs_sat26DqSI);
    };
    this.hs_sepBy.evaluate = function (hs_p26DqNd, hs_sep26DqNe) {
        var hs_ds26DqNf = new $hs.Thunk();
        hs_ds26DqNf.evaluateOnce = function () {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_sepBy1.hscall(hs_p26DqNd, hs_sep26DqNe);
        };
        var hs_ds126DqNh = new $hs.Thunk();
        hs_ds126DqNh.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        var hs_sat26DqSK = new $hs.Func(1);
        hs_sat26DqSK.evaluate = function (hs_k26DqNj) {
            var hs_sat26DqSM = new $hs.Thunk();
            hs_sat26DqSM.evaluateOnce = function () {
                return hs_ds126DqNh.hscall(hs_k26DqNj);
            };
            var hs_sat26DqSL = new $hs.Thunk();
            hs_sat26DqSL.evaluateOnce = function () {
                return hs_ds26DqNf.hscall(hs_k26DqNj);
            };
            return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DqSL, hs_sat26DqSM);
        };
        if (hs_sat26DqSK.notEvaluated) {
            return hs_sat26DqSK.hscall();
        } else {
            return hs_sat26DqSK;
        }
    };
    this.hs_endBy.evaluate = function (hs_p26DqNp, hs_sep26DqNr) {
        var hs_sat26DqSN = new $hs.Thunk();
        hs_sat26DqSN.evaluateOnce = function () {
            var hs_sat26DqSO = new $hs.Func(1);
            hs_sat26DqSO.evaluate = function (hs_x26DqNt) {
                var hs_sat26DqSP = new $hs.Func(1);
                hs_sat26DqSP.evaluate = function (hs_ds26DqNu) {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_x26DqNt);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sep26DqNr, hs_sat26DqSP);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_p26DqNp, hs_sat26DqSO);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_many.hscall(hs_sat26DqSN);
    };
    this.hs_endBy1.evaluate = function (hs_p26DqNB, hs_sep26DqND) {
        var hs_p126DqNJ = new $hs.Thunk();
        hs_p126DqNJ.evaluateOnce = function () {
            var hs_sat26DqSR = new $hs.Func(1);
            hs_sat26DqSR.evaluate = function (hs_x26DqNF) {
                var hs_sat26DqSS = new $hs.Func(1);
                hs_sat26DqSS.evaluate = function (hs_ds26DqNG) {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_x26DqNF);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sep26DqND, hs_sat26DqSS);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_p26DqNB, hs_sat26DqSR);
        };
        var hs_sat26DqSQ = new $hs.Thunk();
        hs_sat26DqSQ.evaluateOnce = function () {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_many.hscall(hs_p126DqNJ);
        };
        return $hs.modules.ControlziMonad.hs_liftM2.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziTypes.hs_ZC, hs_p126DqNJ, hs_sat26DqSQ);
    };
    this.hs_chainr1.evaluate = function (hs_p26DqNO, hs_op26DqNR) {
        var hs_scan26DqNT = new $hs.Thunk();
        hs_scan26DqNT.evaluateOnce = function () {
            var hs_sat26DqST = new $hs.Func(1);
            hs_sat26DqST.evaluate = function (hs_x26DqNV) {
                var hs_ds26DqO1 = new $hs.Thunk();
                hs_ds26DqO1.evaluateOnce = function () {
                    var hs_sat26DqSX = new $hs.Func(1);
                    hs_sat26DqSX.evaluate = function (hs_f26DqNX) {
                        var hs_sat26DqSY = new $hs.Func(1);
                        hs_sat26DqSY.evaluate = function (hs_y26DqNW) {
                            var hs_sat26DqSZ = new $hs.Thunk();
                            hs_sat26DqSZ.evaluateOnce = function () {
                                return hs_f26DqNX.hscall(hs_x26DqNV, hs_y26DqNW);
                            };
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DqSZ);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_scan26DqNT, hs_sat26DqSY);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_op26DqNR, hs_sat26DqSX);
                };
                var hs_ds126DqO3 = new $hs.Thunk();
                hs_ds126DqO3.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_x26DqNV);
                };
                var hs_sat26DqSU = new $hs.Func(1);
                hs_sat26DqSU.evaluate = function (hs_k26DqO5) {
                    var hs_sat26DqSW = new $hs.Thunk();
                    hs_sat26DqSW.evaluateOnce = function () {
                        return hs_ds126DqO3.hscall(hs_k26DqO5);
                    };
                    var hs_sat26DqSV = new $hs.Thunk();
                    hs_sat26DqSV.evaluateOnce = function () {
                        return hs_ds26DqO1.hscall(hs_k26DqO5);
                    };
                    return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DqSV, hs_sat26DqSW);
                };
                if (hs_sat26DqSU.notEvaluated) {
                    return hs_sat26DqSU.hscall();
                } else {
                    return hs_sat26DqSU;
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_p26DqNO, hs_sat26DqST);
        };
        if (hs_scan26DqNT.notEvaluated) {
            return hs_scan26DqNT.hscall();
        } else {
            return hs_scan26DqNT;
        }
    };
    this.hs_chainr.evaluate = function (hs_p26DqOe, hs_op26DqOf, hs_x26DqOi) {
        var hs_ds26DqOg = new $hs.Thunk();
        hs_ds26DqOg.evaluateOnce = function () {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_chainr1.hscall(hs_p26DqOe, hs_op26DqOf);
        };
        var hs_ds126DqOj = new $hs.Thunk();
        hs_ds126DqOj.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_x26DqOi);
        };
        var hs_sat26DqT0 = new $hs.Func(1);
        hs_sat26DqT0.evaluate = function (hs_k26DqOl) {
            var hs_sat26DqT2 = new $hs.Thunk();
            hs_sat26DqT2.evaluateOnce = function () {
                return hs_ds126DqOj.hscall(hs_k26DqOl);
            };
            var hs_sat26DqT1 = new $hs.Thunk();
            hs_sat26DqT1.evaluateOnce = function () {
                return hs_ds26DqOg.hscall(hs_k26DqOl);
            };
            return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DqT1, hs_sat26DqT2);
        };
        if (hs_sat26DqT0.notEvaluated) {
            return hs_sat26DqT0.hscall();
        } else {
            return hs_sat26DqT0;
        }
    };
    this.hs_chainl1.evaluate = function (hs_p26DqOr, hs_op26DqOv) {
        var hs_rest26DqOB = new $hs.Func(1);
        hs_rest26DqOB.evaluate = function (hs_x26DqOy) {
            var hs_ds26DqOF = new $hs.Thunk();
            hs_ds26DqOF.evaluateOnce = function () {
                var hs_sat26DqT6 = new $hs.Func(1);
                hs_sat26DqT6.evaluate = function (hs_f26DqOA) {
                    var hs_sat26DqT7 = new $hs.Func(1);
                    hs_sat26DqT7.evaluate = function (hs_y26DqOz) {
                        var hs_sat26DqT8 = new $hs.Thunk();
                        hs_sat26DqT8.evaluateOnce = function () {
                            return hs_f26DqOA.hscall(hs_x26DqOy, hs_y26DqOz);
                        };
                        return hs_rest26DqOB.hscall(hs_sat26DqT8);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_p26DqOr, hs_sat26DqT7);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_op26DqOv, hs_sat26DqT6);
            };
            var hs_ds126DqOH = new $hs.Thunk();
            hs_ds126DqOH.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_x26DqOy);
            };
            var hs_sat26DqT3 = new $hs.Func(1);
            hs_sat26DqT3.evaluate = function (hs_k26DqOJ) {
                var hs_sat26DqT5 = new $hs.Thunk();
                hs_sat26DqT5.evaluateOnce = function () {
                    return hs_ds126DqOH.hscall(hs_k26DqOJ);
                };
                var hs_sat26DqT4 = new $hs.Thunk();
                hs_sat26DqT4.evaluateOnce = function () {
                    return hs_ds26DqOF.hscall(hs_k26DqOJ);
                };
                return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DqT4, hs_sat26DqT5);
            };
            if (hs_sat26DqT3.notEvaluated) {
                return hs_sat26DqT3.hscall();
            } else {
                return hs_sat26DqT3;
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_p26DqOr, hs_rest26DqOB);
    };
    this.hs_chainl.evaluate = function (hs_p26DqOR, hs_op26DqOS, hs_x26DqOV) {
        var hs_ds26DqOT = new $hs.Thunk();
        hs_ds26DqOT.evaluateOnce = function () {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_chainl1.hscall(hs_p26DqOR, hs_op26DqOS);
        };
        var hs_ds126DqOW = new $hs.Thunk();
        hs_ds126DqOW.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_x26DqOV);
        };
        var hs_sat26DqT9 = new $hs.Func(1);
        hs_sat26DqT9.evaluate = function (hs_k26DqOY) {
            var hs_sat26DqTb = new $hs.Thunk();
            hs_sat26DqTb.evaluateOnce = function () {
                return hs_ds126DqOW.hscall(hs_k26DqOY);
            };
            var hs_sat26DqTa = new $hs.Thunk();
            hs_sat26DqTa.evaluateOnce = function () {
                return hs_ds26DqOT.hscall(hs_k26DqOY);
            };
            return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DqTa, hs_sat26DqTb);
        };
        if (hs_sat26DqT9.notEvaluated) {
            return hs_sat26DqT9.hscall();
        } else {
            return hs_sat26DqT9;
        }
    };
    this.hs_manyTill.evaluate = function (hs_p26DqP8, hs_end26DqP5) {
        var hs_scan26DqP9 = new $hs.Thunk();
        hs_scan26DqP9.evaluateOnce = function () {
            var hs_sat26DqTd = new $hs.Thunk();
            hs_sat26DqTd.evaluateOnce = function () {
                return $hs.modules.ControlziMonad.hs_liftM2.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziTypes.hs_ZC, hs_p26DqP8, hs_scan26DqP9);
            };
            var hs_sat26DqTc = new $hs.Thunk();
            hs_sat26DqTc.evaluateOnce = function () {
                var hs_sat26DqTe = new $hs.Thunk();
                hs_sat26DqTe.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziTypes.hs_ZMZN);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_end26DqP5, hs_sat26DqTe);
            };
            return $hs.modules.TextziParserCombinatorsziReadP.hs_zlzpzp.hscall(hs_sat26DqTc, hs_sat26DqTd);
        };
        if (hs_scan26DqP9.notEvaluated) {
            return hs_scan26DqP9.hscall();
        } else {
            return hs_scan26DqP9;
        }
    };
    this.hs_zdfMonadPlusReadP.data = [$hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_a25v29q, hs_a225v2dk];
    hs_skip25v2iV.evaluate = function (hs_ds26DqPd) {
        var hs_wild26DqTg = hs_ds26DqPd;
        if (hs_ds26DqPd.notEvaluated) {
            hs_wild26DqTg = hs_ds26DqPd.hscall();
        }
        switch (hs_wild26DqTg.tag) {
        case 1:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziUnit.hs_Z0T);
        case 2:
            var hs_c26DqPh = hs_wild26DqTg.data[0];
            var hs_s26DqPk = hs_wild26DqTg.data[1];
            var hs_wild126DqTh = $hs.modules.GHCziUnicode.hs_isSpace.hscall(hs_c26DqPh);
            switch (hs_wild126DqTh.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziUnit.hs_Z0T);
            case 2:
                var hs_sat26DqTf = new $hs.Func(1);
                hs_sat26DqTf.evaluate = function (hs_ds126DqPl) {
                    return hs_skip25v2iV.hscall(hs_s26DqPk);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_Get, hs_sat26DqTf);
            }
        }
    };
    hs_sat26DqTi.evaluate = function (hs_s26DqPo) {
        return hs_skip25v2iV.hscall(hs_s26DqPo);
    };
    this.hs_skipSpaces.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_Look, hs_sat26DqTi);
    };
    this.hs_munch.evaluate = function (hs_p26DqPy) {
        var hs_scan26DqPC = new $hs.Func(1);
        hs_scan26DqPC.evaluate = function (hs_ds26DqPt) {
            var hs_wild26DqTl = hs_ds26DqPt;
            if (hs_ds26DqPt.notEvaluated) {
                hs_wild26DqTl = hs_ds26DqPt.hscall();
            }
            switch (hs_wild26DqTl.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziTypes.hs_ZMZN);
            case 2:
                var hs_c26DqPx = hs_wild26DqTl.data[0];
                var hs_cs26DqPB = hs_wild26DqTl.data[1];
                var hs_wild126DqTm = hs_p26DqPy.hscall(hs_c26DqPx);
                switch (hs_wild126DqTm.tag) {
                case 1:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziTypes.hs_ZMZN);
                case 2:
                    var hs_sat26DqTk = new $hs.Func(1);
                    hs_sat26DqTk.evaluate = function (hs_ds126DqPI) {
                        var hs_sat26DqTo = new $hs.Func(1);
                        hs_sat26DqTo.evaluate = function (hs_s26DqPF) {
                            var hs_sat26DqTp = new $hs.Data(2);
                            hs_sat26DqTp.data = [hs_c26DqPx, hs_s26DqPF];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DqTp);
                        };
                        var hs_sat26DqTn = new $hs.Thunk();
                        hs_sat26DqTn.evaluateOnce = function () {
                            return hs_scan26DqPC.hscall(hs_cs26DqPB);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DqTn, hs_sat26DqTo);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_Get, hs_sat26DqTk);
                }
            }
        };
        var hs_sat26DqTj = new $hs.Func(1);
        hs_sat26DqTj.evaluate = function (hs_s26DqPL) {
            return hs_scan26DqPC.hscall(hs_s26DqPL);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_Look, hs_sat26DqTj);
    };
    this.hs_munch1.evaluate = function (hs_p26DqPQ) {
        var hs_sat26DqTq = new $hs.Func(1);
        hs_sat26DqTq.evaluate = function (hs_c26DqPP) {
            var hs_wild26DqTs = hs_p26DqPQ.hscall(hs_c26DqPP);
            switch (hs_wild26DqTs.tag) {
            case 1:
                if (hs_a25v29q.notEvaluated) {
                    return hs_a25v29q.hscall();
                } else {
                    return hs_a25v29q;
                }
            case 2:
                var hs_sat26DqTt = new $hs.Func(1);
                hs_sat26DqTt.evaluate = function (hs_s26DqPU) {
                    var hs_sat26DqTu = new $hs.Data(2);
                    hs_sat26DqTu.data = [hs_c26DqPP, hs_s26DqPU];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DqTu);
                };
                var hs_sat26DqTr = new $hs.Thunk();
                hs_sat26DqTr.evaluateOnce = function () {
                    return $hs.modules.TextziParserCombinatorsziReadP.hs_munch.hscall(hs_p26DqPQ);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DqTr, hs_sat26DqTt);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_Get, hs_sat26DqTq);
    };
    this.hs_string.evaluate = function (hs_this26DqQ5) {
        var hs_sat26DqTv = new $hs.Func(1);
        hs_sat26DqTv.evaluate = function (hs_s26DqQr) {
            var hs_scan26DqQo = new $hs.Func(2);
            hs_scan26DqQo.evaluate = function (hs_ds26DqQ3, hs_ds126DqQ8) {
                var hs_wild26DqTy = hs_ds26DqQ3;
                if (hs_ds26DqQ3.notEvaluated) {
                    hs_wild26DqTy = hs_ds26DqQ3.hscall();
                }
                switch (hs_wild26DqTy.tag) {
                case 1:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_this26DqQ5);
                case 2:
                    var hs_x26DqQf = hs_wild26DqTy.data[0];
                    var hs_xs26DqQm = hs_wild26DqTy.data[1];
                    var hs_wild126DqTx = hs_ds126DqQ8;
                    if (hs_ds126DqQ8.notEvaluated) {
                        hs_wild126DqTx = hs_ds126DqQ8.hscall();
                    }
                    switch (hs_wild126DqTx.tag) {
                    case 1:
                        var hs_sat26DqTB = new $hs.Func(1);
                        hs_sat26DqTB.evaluate = function (hs_eta26DqQb) {
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        };
                        if (hs_sat26DqTB.notEvaluated) {
                            return hs_sat26DqTB.hscall();
                        } else {
                            return hs_sat26DqTB;
                        }
                    case 2:
                        var hs_y26DqQg = hs_wild126DqTx.data[0];
                        var hs_ys26DqQn = hs_wild126DqTx.data[1];
                        var hs_wild226DqTz = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_x26DqQf, hs_y26DqQg);
                        switch (hs_wild226DqTz.tag) {
                        case 1:
                            var hs_sat26DqTA = new $hs.Func(1);
                            hs_sat26DqTA.evaluate = function (hs_eta26DqQj) {
                                var $res = new $hs.Data(3);
                                $res.data = [];
                                return $res;
                            };
                            if (hs_sat26DqTA.notEvaluated) {
                                return hs_sat26DqTA.hscall();
                            } else {
                                return hs_sat26DqTA;
                            }
                        case 2:
                            var hs_sat26DqTw = new $hs.Func(1);
                            hs_sat26DqTw.evaluate = function (hs_ds226DqQp) {
                                return hs_scan26DqQo.hscall(hs_xs26DqQm, hs_ys26DqQn);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_Get, hs_sat26DqTw);
                        }
                    }
                }
            };
            return hs_scan26DqQo.hscall(hs_this26DqQ5, hs_s26DqQr);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_Look, hs_sat26DqTv);
    };
    this.hs_satisfy.evaluate = function (hs_p26DqQw) {
        var hs_sat26DqTC = new $hs.Func(1);
        hs_sat26DqTC.evaluate = function (hs_c26DqQv) {
            var hs_wild26DqTD = hs_p26DqQw.hscall(hs_c26DqQv);
            switch (hs_wild26DqTD.tag) {
            case 1:
                if (hs_a25v29q.notEvaluated) {
                    return hs_a25v29q.hscall();
                } else {
                    return hs_a25v29q;
                }
            case 2:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_c26DqQv);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_Get, hs_sat26DqTC);
    };
    this.hs_char.evaluate = function (hs_c26DqQA) {
        var hs_sat26DqTE = new $hs.Thunk();
        hs_sat26DqTE.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26DqQA);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_satisfy.hscall(hs_sat26DqTE);
    };
    hs_sat26DqTG.evaluate = function (hs_s26DqQD) {
        var hs_wild26DqTF = $hs.modules.GHCziList.hs_null.hscall(hs_s26DqQD);
        switch (hs_wild26DqTF.tag) {
        case 1:
            if (hs_a25v29q.notEvaluated) {
                return hs_a25v29q.hscall();
            } else {
                return hs_a25v29q;
            }
        case 2:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziUnit.hs_Z0T);
        }
    };
    this.hs_eof.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_Look, hs_sat26DqTG);
    };
    this.hs_R.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.TextziParserCombinatorsziReadP.hs_R.hscall(hs_eta1cW6l3);
    };
    this.hs_Get.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_Look.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(2);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_Fail.data = [];
    this.hs_Result.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(4);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_Final.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(5);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
};
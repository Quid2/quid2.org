
$hs.modules.TextziParserCombinatorsziReadP = new $hs.Module();
$hs.modules.TextziParserCombinatorsziReadP.dependencies = ["GHC.Prim", "GHC.Types", "GHC.Unit", "Control.Monad", "GHC.Base", "GHC.Err", "GHC.Classes", "GHC.List", "GHC.Unicode", "Control.Exception.Base"];
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
    this.hs_readPzutozuS.evaluate = function (hs_ds26DPMP) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_ds26DPMP);
    };
    this.hs_zpzpzp.notEvaluated = true;
    this.hs_zpzpzp.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_choice.notEvaluated = true;
    this.hs_choice.evaluate = function (hs_ds26DPN2) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_ds26DPN2);
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
    this.hs_zlzpzp.evaluate = function (hs_ds26DPPq, hs_q26DPP2) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_ds26DPPq, hs_q26DPP2);
    };
    this.hs_count.notEvaluated = true;
    this.hs_count.evaluate = function (hs_n26DPPw, hs_p26DPPx) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_n26DPPw, hs_p26DPPx);
    };
    this.hs_between.notEvaluated = true;
    this.hs_between.evaluate = function (hs_open26DPPC, hs_close26DPPG, hs_p26DPPE) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_open26DPPC, hs_close26DPPG, hs_p26DPPE);
    };
    this.hs_option.notEvaluated = true;
    this.hs_option.evaluate = function (hs_x26DPPP, hs_p26DPPT) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_x26DPPP, hs_p26DPPT);
    };
    this.hs_optional.notEvaluated = true;
    this.hs_optional.evaluate = function (hs_p26DPPZ) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DPPZ);
    };
    this.hs_many.notEvaluated = true;
    this.hs_many.evaluate = function (hs_p26DPQd) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DPQd);
    };
    this.hs_many1.notEvaluated = true;
    this.hs_many1.evaluate = function (hs_p26DPQm) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DPQm);
    };
    this.hs_skipMany.notEvaluated = true;
    this.hs_skipMany.evaluate = function (hs_p26DPQp) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DPQp);
    };
    this.hs_skipMany1.notEvaluated = true;
    this.hs_skipMany1.evaluate = function (hs_p26DPQt) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DPQt);
    };
    this.hs_sepBy1.notEvaluated = true;
    this.hs_sepBy1.evaluate = function (hs_p26DPQx, hs_sep26DPQy) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DPQx, hs_sep26DPQy);
    };
    this.hs_sepBy.notEvaluated = true;
    this.hs_sepBy.evaluate = function (hs_p26DPQE, hs_sep26DPQF) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DPQE, hs_sep26DPQF);
    };
    this.hs_endBy.notEvaluated = true;
    this.hs_endBy.evaluate = function (hs_p26DPQQ, hs_sep26DPQS) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DPQQ, hs_sep26DPQS);
    };
    this.hs_endBy1.notEvaluated = true;
    this.hs_endBy1.evaluate = function (hs_p26DPR1, hs_sep26DPR3) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DPR1, hs_sep26DPR3);
    };
    this.hs_chainr1.notEvaluated = true;
    this.hs_chainr1.evaluate = function (hs_p26DPRd, hs_op26DPRg) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DPRd, hs_op26DPRg);
    };
    this.hs_chainr.notEvaluated = true;
    this.hs_chainr.evaluate = function (hs_p26DPRD, hs_op26DPRE, hs_x26DPRH) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DPRD, hs_op26DPRE, hs_x26DPRH);
    };
    this.hs_chainl1.notEvaluated = true;
    this.hs_chainl1.evaluate = function (hs_p26DPRQ, hs_op26DPRU) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DPRQ, hs_op26DPRU);
    };
    this.hs_chainl.notEvaluated = true;
    this.hs_chainl.evaluate = function (hs_p26DPSh, hs_op26DPSi, hs_x26DPSl) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DPSh, hs_op26DPSi, hs_x26DPSl);
    };
    this.hs_manyTill.notEvaluated = true;
    this.hs_manyTill.evaluate = function (hs_p26DPSy, hs_end26DPSv) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DPSy, hs_end26DPSv);
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
    this.hs_munch.evaluate = function (hs_p26DPSY) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DPSY);
    };
    this.hs_munch1.notEvaluated = true;
    this.hs_munch1.evaluate = function (hs_p26DPTf) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DPTf);
    };
    this.hs_string.notEvaluated = true;
    this.hs_string.evaluate = function (hs_this26DPTu) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_this26DPTu);
    };
    this.hs_satisfy.notEvaluated = true;
    this.hs_satisfy.evaluate = function (hs_p26DPTO) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_p26DPTO);
    };
    this.hs_char.notEvaluated = true;
    this.hs_char.evaluate = function (hs_c26DPTS) {
        $hs.modules.TextziParserCombinatorsziReadP.loadDependencies();
        return this.evaluate(hs_c26DPTS);
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
    var hs_a25vrcC = new $hs.Func(1);
    var hs_run25s1xf = new $hs.Func(2);
    var hs_a125vrd4 = new $hs.Func(2);
    var hs_zdcfail25vrdI = new $hs.Func(1);
    var hs_zdcreturn25vrdM = new $hs.Func(1);
    var hs_zdczgzg25vrdQ = new $hs.Thunk();
    var hs_zdczgzgze25vrdS = new $hs.Func(2);
    var hs_zdcmplus25vrdU = new $hs.Func(2);
    var hs_a225vrgC = new $hs.Func(3);
    var hs_a325vrh4 = new $hs.Func(2);
    var hs_a425vrhM = new $hs.Func(3);
    var hs_zdcfmap25vrhV = new $hs.Func(3);
    var hs_zdczlzd25vrhX = new $hs.Thunk();
    var hs_a525vrhZ = new $hs.Func(2);
    var hs_zdcfail125vri5 = new $hs.Func(2);
    var hs_a625vri7 = new $hs.Func(2);
    var hs_zdcreturn125vrid = new $hs.Func(2);
    var hs_a725vrif = new $hs.Func(3);
    var hs_zdczgzgze125vriq = new $hs.Func(3);
    var hs_zdczgzg125vris = new $hs.Thunk();
    var hs_skip25vrmm = new $hs.Func(1);
    var hs_sat26DPWG = new $hs.Func(1);
    var hs_sat26DPX4 = new $hs.Func(1);
    hs_a25vrcC.evaluate = function (hs_ds26DPIU) {
        var $res = new $hs.Data(3);
        $res.data = [];
        return $res;
    };
    this.hs_pfail.evaluate = function (hs_eta1cW6l3) {
        return hs_a25vrcC.hscall(hs_eta1cW6l3);
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
    hs_run25s1xf.evaluate = function (hs_ds26DPIX, hs_ds126DPJ0) {
        var hs_wild26DPTZ = hs_ds26DPIX;
        if (hs_ds26DPIX.notEvaluated) {
            hs_wild26DPTZ = hs_ds26DPIX.hscall();
        }
        switch (hs_wild26DPTZ.tag) {
        case 1:
            var hs_f26DPJ5 = hs_wild26DPTZ.data[0];
            var hs_wild126DPTY = hs_ds126DPJ0;
            if (hs_ds126DPJ0.notEvaluated) {
                hs_wild126DPTY = hs_ds126DPJ0.hscall();
            }
            switch (hs_wild126DPTY.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_c26DPJ4 = hs_wild126DPTY.data[0];
                var hs_s26DPJ7 = hs_wild126DPTY.data[1];
                var hs_sat26DPU0 = new $hs.Thunk();
                hs_sat26DPU0.evaluateOnce = function () {
                    return hs_f26DPJ5.hscall(hs_c26DPJ4);
                };
                return hs_run25s1xf.hscall(hs_sat26DPU0, hs_s26DPJ7);
            }
        case 2:
            var hs_f26DPJ9 = hs_wild26DPTZ.data[0];
            var hs_sat26DPU1 = new $hs.Thunk();
            hs_sat26DPU1.evaluateOnce = function () {
                return hs_f26DPJ9.hscall(hs_ds126DPJ0);
            };
            return hs_run25s1xf.hscall(hs_sat26DPU1, hs_ds126DPJ0);
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 4:
            var hs_x26DPJd = hs_wild26DPTZ.data[0];
            var hs_p26DPJf = hs_wild26DPTZ.data[1];
            var hs_sat26DPU2 = new $hs.Thunk();
            hs_sat26DPU2.evaluateOnce = function () {
                return hs_run25s1xf.hscall(hs_p26DPJf, hs_ds126DPJ0);
            };
            var hs_sat26DPU3 = new $hs.Data(1);
            hs_sat26DPU3.data = [hs_x26DPJd, hs_ds126DPJ0];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26DPU3, hs_sat26DPU2];
            return $res;
        case 5:
            var hs_r26DPJi = hs_wild26DPTZ.data[0];
            if (hs_r26DPJi.notEvaluated) {
                return hs_r26DPJi.hscall();
            } else {
                return hs_r26DPJi;
            }
        }
    };
    hs_a125vrd4.evaluate = function (hs_r26DPJQ, hs_k26DPJL) {
        var hs_sat26DPUd = new $hs.Func(1);
        hs_sat26DPUd.evaluate = function (hs_s26DPJP) {
            var hs_ds26DPJD = new $hs.Func(1);
            hs_ds26DPJD.evaluate = function (hs_ds126DPJq) {
                var hs_ds226DPU4 = hs_ds126DPJq;
                if (hs_ds126DPJq.notEvaluated) {
                    hs_ds226DPU4 = hs_ds126DPJq.hscall();
                }
                switch (hs_ds226DPU4.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_ds326DPJu = hs_ds226DPU4.data[0];
                    var hs_ds426DPJC = hs_ds226DPU4.data[1];
                    var hs_wild26DPU6 = hs_ds326DPJu;
                    if (hs_ds326DPJu.notEvaluated) {
                        hs_wild26DPU6 = hs_ds326DPJu.hscall();
                    }
                    var hs_a826DPJK = hs_wild26DPU6.data[0];
                    var hs_szq26DPJN = hs_wild26DPU6.data[1];
                    var hs_ds526DPJI = new $hs.Func(1);
                    hs_ds526DPJI.evaluate = function (hs_ds626DPJA) {
                        var hs_ds726DPU5 = hs_ds626DPJA;
                        if (hs_ds626DPJA.notEvaluated) {
                            hs_ds726DPU5 = hs_ds626DPJA.hscall();
                        }
                        switch (hs_ds726DPU5.tag) {
                        case 1:
                            return hs_ds26DPJD.hscall(hs_ds426DPJC);
                        case 2:
                            var hs_ds826DPJG = hs_ds726DPU5.data[0];
                            var hs_ds926DPJH = hs_ds726DPU5.data[1];
                            var hs_sat26DPU7 = new $hs.Thunk();
                            hs_sat26DPU7.evaluateOnce = function () {
                                return hs_ds526DPJI.hscall(hs_ds926DPJH);
                            };
                            var $res = new $hs.Data(2);
                            $res.data = [hs_ds826DPJG, hs_sat26DPU7];
                            return $res;
                        }
                    };
                    var hs_sat26DPU9 = new $hs.Thunk();
                    hs_sat26DPU9.evaluateOnce = function () {
                        var hs_sat26DPU8 = new $hs.Thunk();
                        hs_sat26DPU8.evaluateOnce = function () {
                            return hs_k26DPJL.hscall(hs_a826DPJK);
                        };
                        return hs_run25s1xf.hscall(hs_sat26DPU8, hs_szq26DPJN);
                    };
                    return hs_ds526DPJI.hscall(hs_sat26DPU9);
                }
            };
            var hs_sat26DPUa = new $hs.Thunk();
            hs_sat26DPUa.evaluateOnce = function () {
                return hs_r26DPJQ.hscall(hs_s26DPJP);
            };
            var hs_wild26DPJV = hs_ds26DPJD.hscall(hs_sat26DPUa);
            switch (hs_wild26DPJV.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(5);
                $res.data = [hs_wild26DPJV];
                return $res;
            }
        };
        var $res = new $hs.Data(2);
        $res.data = [hs_sat26DPUd];
        return $res;
    };
    this.hs_readSzutozuP.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a125vrd4.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcfail25vrdI.evaluate = function (hs_ds26DPK0) {
        var $res = new $hs.Data(3);
        $res.data = [];
        return $res;
    };
    hs_zdcreturn25vrdM.evaluate = function (hs_x26DPK4) {
        var $res = new $hs.Data(4);
        $res.data = [hs_x26DPK4, $hs.modules.TextziParserCombinatorsziReadP.hs_Fail];
        return $res;
    };
    this.hs_zdfMonadP.data = [hs_zdczgzgze25vrdS, hs_zdczgzg25vrdQ, hs_zdcreturn25vrdM, hs_zdcfail25vrdI];
    hs_zdczgzg25vrdQ.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zddmzgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadP);
    };
    this.hs_zdfMonadPlusP.data = [$hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadP, $hs.modules.TextziParserCombinatorsziReadP.hs_Fail, hs_zdcmplus25vrdU];
    hs_zdczgzgze25vrdS.evaluate = function (hs_ds26DPKd, hs_k26DPKk) {
        var hs_wild26DPUe = hs_ds26DPKd;
        if (hs_ds26DPKd.notEvaluated) {
            hs_wild26DPUe = hs_ds26DPKd.hscall();
        }
        switch (hs_wild26DPUe.tag) {
        case 1:
            var hs_f26DPKi = hs_wild26DPUe.data[0];
            var hs_sat26DPUg = new $hs.Func(1);
            hs_sat26DPUg.evaluate = function (hs_c26DPKh) {
                var hs_sat26DPUf = new $hs.Thunk();
                hs_sat26DPUf.evaluateOnce = function () {
                    return hs_f26DPKi.hscall(hs_c26DPKh);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadP, hs_sat26DPUf, hs_k26DPKk);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DPUg];
            return $res;
        case 2:
            var hs_f26DPKp = hs_wild26DPUe.data[0];
            var hs_sat26DPUi = new $hs.Func(1);
            hs_sat26DPUi.evaluate = function (hs_s26DPKo) {
                var hs_sat26DPUh = new $hs.Thunk();
                hs_sat26DPUh.evaluateOnce = function () {
                    return hs_f26DPKp.hscall(hs_s26DPKo);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadP, hs_sat26DPUh, hs_k26DPKk);
            };
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26DPUi];
            return $res;
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        case 4:
            var hs_x26DPKu = hs_wild26DPUe.data[0];
            var hs_p26DPKw = hs_wild26DPUe.data[1];
            var hs_sat26DPUj = new $hs.Thunk();
            hs_sat26DPUj.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadP, hs_p26DPKw, hs_k26DPKk);
            };
            var hs_sat26DPUk = new $hs.Thunk();
            hs_sat26DPUk.evaluateOnce = function () {
                return hs_k26DPKk.hscall(hs_x26DPKu);
            };
            return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DPUk, hs_sat26DPUj);
        case 5:
            var hs_r26DPKZ = hs_wild26DPUe.data[0];
            var hs_ds126DPKO = new $hs.Func(1);
            hs_ds126DPKO.evaluate = function (hs_ds226DPKB) {
                var hs_ds326DPUl = hs_ds226DPKB;
                if (hs_ds226DPKB.notEvaluated) {
                    hs_ds326DPUl = hs_ds226DPKB.hscall();
                }
                switch (hs_ds326DPUl.tag) {
                case 1:
                    var $res = new $hs.Data(1);
                    $res.data = [];
                    return $res;
                case 2:
                    var hs_ds426DPKF = hs_ds326DPUl.data[0];
                    var hs_ds526DPKN = hs_ds326DPUl.data[1];
                    var hs_wild126DPUn = hs_ds426DPKF;
                    if (hs_ds426DPKF.notEvaluated) {
                        hs_wild126DPUn = hs_ds426DPKF.hscall();
                    }
                    var hs_x26DPKV = hs_wild126DPUn.data[0];
                    var hs_s26DPKX = hs_wild126DPUn.data[1];
                    var hs_ds626DPKT = new $hs.Func(1);
                    hs_ds626DPKT.evaluate = function (hs_ds726DPKL) {
                        var hs_ds826DPUm = hs_ds726DPKL;
                        if (hs_ds726DPKL.notEvaluated) {
                            hs_ds826DPUm = hs_ds726DPKL.hscall();
                        }
                        switch (hs_ds826DPUm.tag) {
                        case 1:
                            return hs_ds126DPKO.hscall(hs_ds526DPKN);
                        case 2:
                            var hs_ds926DPKR = hs_ds826DPUm.data[0];
                            var hs_ds1026DPKS = hs_ds826DPUm.data[1];
                            var hs_sat26DPUo = new $hs.Thunk();
                            hs_sat26DPUo.evaluateOnce = function () {
                                return hs_ds626DPKT.hscall(hs_ds1026DPKS);
                            };
                            var $res = new $hs.Data(2);
                            $res.data = [hs_ds926DPKR, hs_sat26DPUo];
                            return $res;
                        }
                    };
                    var hs_sat26DPUq = new $hs.Thunk();
                    hs_sat26DPUq.evaluateOnce = function () {
                        var hs_sat26DPUp = new $hs.Thunk();
                        hs_sat26DPUp.evaluateOnce = function () {
                            return hs_k26DPKk.hscall(hs_x26DPKV);
                        };
                        return hs_run25s1xf.hscall(hs_sat26DPUp, hs_s26DPKX);
                    };
                    return hs_ds626DPKT.hscall(hs_sat26DPUq);
                }
            };
            var hs_wild126DPL3 = hs_ds126DPKO.hscall(hs_r26DPKZ);
            switch (hs_wild126DPL3.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(5);
                $res.data = [hs_wild126DPL3];
                return $res;
            }
        }
    };
    hs_zdcmplus25vrdU.evaluate = function (hs_ds26DPLa, hs_ds126DPL8) {
        var hs_fail26DPMw = new $hs.Func(1);
        hs_fail26DPMw.evaluate = function (hs_ds226DPMv) {
            var hs_wild26DPLc = hs_ds126DPL8;
            if (hs_ds126DPL8.notEvaluated) {
                hs_wild26DPLc = hs_ds126DPL8.hscall();
            }
            switch (hs_wild26DPLc.tag) {
            case 4:
                var hs_x26DPMs = hs_wild26DPLc.data[0];
                var hs_q26DPMt = hs_wild26DPLc.data[1];
                var hs_sat26DPUV = new $hs.Thunk();
                hs_sat26DPUV.evaluateOnce = function () {
                    return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_ds26DPLa, hs_q26DPMt);
                };
                var $res = new $hs.Data(4);
                $res.data = [hs_x26DPMs, hs_sat26DPUV];
                return $res;
            default:
                var hs_wild126DPLi = hs_ds26DPLa;
                if (hs_ds26DPLa.notEvaluated) {
                    hs_wild126DPLi = hs_ds26DPLa.hscall();
                }
                switch (hs_wild126DPLi.tag) {
                case 3:
                    if (hs_wild26DPLc.notEvaluated) {
                        return hs_wild26DPLc.hscall();
                    } else {
                        return hs_wild26DPLc;
                    }
                default:
                    var hs_wild226DPLg = hs_wild26DPLc;
                    if (hs_wild26DPLc.notEvaluated) {
                        hs_wild226DPLg = hs_wild26DPLc.hscall();
                    }
                    switch (hs_wild226DPLg.tag) {
                    case 3:
                        if (hs_wild126DPLi.notEvaluated) {
                            return hs_wild126DPLi.hscall();
                        } else {
                            return hs_wild126DPLi;
                        }
                    default:
                        var hs_fail126DPLS = new $hs.Func(1);
                        hs_fail126DPLS.evaluate = function (hs_ds326DPLR) {
                            var hs_wild326DPLk = hs_wild226DPLg;
                            if (hs_wild226DPLg.notEvaluated) {
                                hs_wild326DPLk = hs_wild226DPLg.hscall();
                            }
                            switch (hs_wild326DPLk.tag) {
                            case 5:
                                var hs_r26DPLO = hs_wild326DPLk.data[0];
                                var hs_sat26DPUF = new $hs.Func(1);
                                hs_sat26DPUF.evaluate = function (hs_s26DPLM) {
                                    var hs_sat26DPUE = new $hs.Thunk();
                                    hs_sat26DPUE.evaluateOnce = function () {
                                        var hs_sat26DPUD = new $hs.Thunk();
                                        hs_sat26DPUD.evaluateOnce = function () {
                                            return hs_run25s1xf.hscall(hs_wild126DPLi, hs_s26DPLM);
                                        };
                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DPUD, hs_r26DPLO);
                                    };
                                    var $res = new $hs.Data(5);
                                    $res.data = [hs_sat26DPUE];
                                    return $res;
                                };
                                var $res = new $hs.Data(2);
                                $res.data = [hs_sat26DPUF];
                                return $res;
                            default:
                                var hs_wild426DPLp = hs_wild126DPLi;
                                if (hs_wild126DPLi.notEvaluated) {
                                    hs_wild426DPLp = hs_wild126DPLi.hscall();
                                }
                                switch (hs_wild426DPLp.tag) {
                                case 2:
                                    var hs_f26DPLz = hs_wild426DPLp.data[0];
                                    var hs_wild526DPLB = hs_wild326DPLk;
                                    if (hs_wild326DPLk.notEvaluated) {
                                        hs_wild526DPLB = hs_wild326DPLk.hscall();
                                    }
                                    switch (hs_wild526DPLB.tag) {
                                    case 1:
                                        var hs_sat26DPUz = new $hs.Func(1);
                                        hs_sat26DPUz.evaluate = function (hs_s26DPLy) {
                                            var hs_sat26DPUy = new $hs.Thunk();
                                            hs_sat26DPUy.evaluateOnce = function () {
                                                return hs_f26DPLz.hscall(hs_s26DPLy);
                                            };
                                            return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DPUy, hs_wild526DPLB);
                                        };
                                        var $res = new $hs.Data(2);
                                        $res.data = [hs_sat26DPUz];
                                        return $res;
                                    case 2:
                                        var hs_g26DPLH = hs_wild526DPLB.data[0];
                                        var hs_sat26DPUC = new $hs.Func(1);
                                        hs_sat26DPUC.evaluate = function (hs_s26DPLF) {
                                            var hs_sat26DPUA = new $hs.Thunk();
                                            hs_sat26DPUA.evaluateOnce = function () {
                                                return hs_g26DPLH.hscall(hs_s26DPLF);
                                            };
                                            var hs_sat26DPUB = new $hs.Thunk();
                                            hs_sat26DPUB.evaluateOnce = function () {
                                                return hs_f26DPLz.hscall(hs_s26DPLF);
                                            };
                                            return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DPUB, hs_sat26DPUA);
                                        };
                                        var $res = new $hs.Data(2);
                                        $res.data = [hs_sat26DPUC];
                                        return $res;
                                    }
                                default:
                                    var hs_wild526DPUu = hs_wild326DPLk;
                                    if (hs_wild326DPLk.notEvaluated) {
                                        hs_wild526DPUu = hs_wild326DPLk.hscall();
                                    }
                                    switch (hs_wild526DPUu.tag) {
                                    case 1:
                                        return $hs.modules.ControlziExceptionziBase.hs_patError.hscall("../../ghc-7.0.2/libraries/base/Text/ParserCombinators/ReadP.hs:(128,3)-(151,60)|function mplus\x00");
                                    case 2:
                                        var hs_f26DPLr = hs_wild526DPUu.data[0];
                                        var hs_sat26DPUw = new $hs.Func(1);
                                        hs_sat26DPUw.evaluate = function (hs_s26DPLq) {
                                            var hs_sat26DPUv = new $hs.Thunk();
                                            hs_sat26DPUv.evaluateOnce = function () {
                                                return hs_f26DPLr.hscall(hs_s26DPLq);
                                            };
                                            return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_wild426DPLp, hs_sat26DPUv);
                                        };
                                        var $res = new $hs.Data(2);
                                        $res.data = [hs_sat26DPUw];
                                        return $res;
                                    }
                                }
                            }
                        };
                        var hs_wild326DPUG = hs_wild126DPLi;
                        if (hs_wild126DPLi.notEvaluated) {
                            hs_wild326DPUG = hs_wild126DPLi.hscall();
                        }
                        switch (hs_wild326DPUG.tag) {
                        case 2:
                            var hs_f26DPLZ = hs_wild326DPUG.data[0];
                            var hs_wild426DPUH = hs_wild226DPLg;
                            if (hs_wild226DPLg.notEvaluated) {
                                hs_wild426DPUH = hs_wild226DPLg.hscall();
                            }
                            switch (hs_wild426DPUH.tag) {
                            case 5:
                                var hs_r26DPM2 = hs_wild426DPUH.data[0];
                                var hs_sat26DPUL = new $hs.Func(1);
                                hs_sat26DPUL.evaluate = function (hs_s26DPLY) {
                                    var hs_sat26DPUK = new $hs.Thunk();
                                    hs_sat26DPUK.evaluateOnce = function () {
                                        var hs_sat26DPUJ = new $hs.Thunk();
                                        hs_sat26DPUJ.evaluateOnce = function () {
                                            var hs_sat26DPUI = new $hs.Thunk();
                                            hs_sat26DPUI.evaluateOnce = function () {
                                                return hs_f26DPLZ.hscall(hs_s26DPLY);
                                            };
                                            return hs_run25s1xf.hscall(hs_sat26DPUI, hs_s26DPLY);
                                        };
                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DPUJ, hs_r26DPM2);
                                    };
                                    var $res = new $hs.Data(5);
                                    $res.data = [hs_sat26DPUK];
                                    return $res;
                                };
                                var $res = new $hs.Data(2);
                                $res.data = [hs_sat26DPUL];
                                return $res;
                            default:
                                return hs_fail126DPLS.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            }
                        case 5:
                            var hs_r26DPM9 = hs_wild326DPUG.data[0];
                            var hs_wild426DPMa = hs_wild226DPLg;
                            if (hs_wild226DPLg.notEvaluated) {
                                hs_wild426DPMa = hs_wild226DPLg.hscall();
                            }
                            switch (hs_wild426DPMa.tag) {
                            case 1:
                                var hs_sat26DPUP = new $hs.Func(1);
                                hs_sat26DPUP.evaluate = function (hs_s26DPMb) {
                                    var hs_sat26DPUO = new $hs.Thunk();
                                    hs_sat26DPUO.evaluateOnce = function () {
                                        var hs_sat26DPUN = new $hs.Thunk();
                                        hs_sat26DPUN.evaluateOnce = function () {
                                            return hs_run25s1xf.hscall(hs_wild426DPMa, hs_s26DPMb);
                                        };
                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_r26DPM9, hs_sat26DPUN);
                                    };
                                    var $res = new $hs.Data(5);
                                    $res.data = [hs_sat26DPUO];
                                    return $res;
                                };
                                var $res = new $hs.Data(2);
                                $res.data = [hs_sat26DPUP];
                                return $res;
                            case 2:
                                var hs_f26DPMi = hs_wild426DPMa.data[0];
                                var hs_sat26DPUT = new $hs.Func(1);
                                hs_sat26DPUT.evaluate = function (hs_s26DPMh) {
                                    var hs_sat26DPUS = new $hs.Thunk();
                                    hs_sat26DPUS.evaluateOnce = function () {
                                        var hs_sat26DPUR = new $hs.Thunk();
                                        hs_sat26DPUR.evaluateOnce = function () {
                                            var hs_sat26DPUQ = new $hs.Thunk();
                                            hs_sat26DPUQ.evaluateOnce = function () {
                                                return hs_f26DPMi.hscall(hs_s26DPMh);
                                            };
                                            return hs_run25s1xf.hscall(hs_sat26DPUQ, hs_s26DPMh);
                                        };
                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_r26DPM9, hs_sat26DPUR);
                                    };
                                    var $res = new $hs.Data(5);
                                    $res.data = [hs_sat26DPUS];
                                    return $res;
                                };
                                var $res = new $hs.Data(2);
                                $res.data = [hs_sat26DPUT];
                                return $res;
                            case 5:
                                var hs_t26DPMo = hs_wild426DPMa.data[0];
                                var hs_sat26DPUU = new $hs.Thunk();
                                hs_sat26DPUU.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_r26DPM9, hs_t26DPMo);
                                };
                                var $res = new $hs.Data(5);
                                $res.data = [hs_sat26DPUU];
                                return $res;
                            }
                        default:
                            return hs_fail126DPLS.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        }
                    }
                }
            }
        };
        var hs_wild26DPUW = hs_ds26DPLa;
        if (hs_ds26DPLa.notEvaluated) {
            hs_wild26DPUW = hs_ds26DPLa.hscall();
        }
        switch (hs_wild26DPUW.tag) {
        case 1:
            var hs_f126DPMD = hs_wild26DPUW.data[0];
            var hs_wild126DPUX = hs_ds126DPL8;
            if (hs_ds126DPL8.notEvaluated) {
                hs_wild126DPUX = hs_ds126DPL8.hscall();
            }
            switch (hs_wild126DPUX.tag) {
            case 1:
                var hs_f226DPMF = hs_wild126DPUX.data[0];
                var hs_sat26DPV0 = new $hs.Func(1);
                hs_sat26DPV0.evaluate = function (hs_c26DPMC) {
                    var hs_sat26DPUY = new $hs.Thunk();
                    hs_sat26DPUY.evaluateOnce = function () {
                        return hs_f226DPMF.hscall(hs_c26DPMC);
                    };
                    var hs_sat26DPUZ = new $hs.Thunk();
                    hs_sat26DPUZ.evaluateOnce = function () {
                        return hs_f126DPMD.hscall(hs_c26DPMC);
                    };
                    return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DPUZ, hs_sat26DPUY);
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26DPV0];
                return $res;
            default:
                return hs_fail26DPMw.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        case 4:
            var hs_x26DPMK = hs_wild26DPUW.data[0];
            var hs_p26DPML = hs_wild26DPUW.data[1];
            var hs_sat26DPV1 = new $hs.Thunk();
            hs_sat26DPV1.evaluateOnce = function () {
                return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_p26DPML, hs_ds126DPL8);
            };
            var $res = new $hs.Data(4);
            $res.data = [hs_x26DPMK, hs_sat26DPV1];
            return $res;
        default:
            return hs_fail26DPMw.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
        }
    };
    this.hs_readPzutozuS.evaluate = function (hs_ds26DPMP) {
        var hs_sat26DPV3 = new $hs.Thunk();
        hs_sat26DPV3.evaluateOnce = function () {
            var hs_sat26DPV2 = new $hs.Thunk();
            hs_sat26DPV2.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadP);
            };
            return hs_ds26DPMP.hscall(hs_sat26DPV2);
        };
        return hs_run25s1xf.hscall(hs_sat26DPV3);
    };
    hs_a225vrgC.evaluate = function (hs_ds26DPMX, hs_ds126DPMZ, hs_k26DPMW) {
        var hs_sat26DPV4 = new $hs.Thunk();
        hs_sat26DPV4.evaluateOnce = function () {
            return hs_ds126DPMZ.hscall(hs_k26DPMW);
        };
        var hs_sat26DPV5 = new $hs.Thunk();
        hs_sat26DPV5.evaluateOnce = function () {
            return hs_ds26DPMX.hscall(hs_k26DPMW);
        };
        return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DPV5, hs_sat26DPV4);
    };
    this.hs_zpzpzp.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a225vrgC.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_choice.evaluate = function (hs_ds26DPN2) {
        var hs_wild26DPV6 = hs_ds26DPN2;
        if (hs_ds26DPN2.notEvaluated) {
            hs_wild26DPV6 = hs_ds26DPN2.hscall();
        }
        switch (hs_wild26DPV6.tag) {
        case 1:
            if (hs_a25vrcC.notEvaluated) {
                return hs_a25vrcC.hscall();
            } else {
                return hs_a25vrcC;
            }
        case 2:
            var hs_p26DPN8 = hs_wild26DPV6.data[0];
            var hs_ds126DPN6 = hs_wild26DPV6.data[1];
            var hs_wild126DPNc = hs_ds126DPN6;
            if (hs_ds126DPN6.notEvaluated) {
                hs_wild126DPNc = hs_ds126DPN6.hscall();
            }
            switch (hs_wild126DPNc.tag) {
            case 1:
                if (hs_p26DPN8.notEvaluated) {
                    return hs_p26DPN8.hscall();
                } else {
                    return hs_p26DPN8;
                }
            case 2:
                var hs_ds226DPNd = new $hs.Thunk();
                hs_ds226DPNd.evaluateOnce = function () {
                    return $hs.modules.TextziParserCombinatorsziReadP.hs_choice.hscall(hs_wild126DPNc);
                };
                var hs_sat26DPVb = new $hs.Func(1);
                hs_sat26DPVb.evaluate = function (hs_k26DPNf) {
                    var hs_sat26DPV9 = new $hs.Thunk();
                    hs_sat26DPV9.evaluateOnce = function () {
                        return hs_ds226DPNd.hscall(hs_k26DPNf);
                    };
                    var hs_sat26DPVa = new $hs.Thunk();
                    hs_sat26DPVa.evaluateOnce = function () {
                        return hs_p26DPN8.hscall(hs_k26DPNf);
                    };
                    return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DPVa, hs_sat26DPV9);
                };
                if (hs_sat26DPVb.notEvaluated) {
                    return hs_sat26DPVb.hscall();
                } else {
                    return hs_sat26DPVb;
                }
            }
        }
    };
    hs_a325vrh4.evaluate = function (hs_ds26DPNZ, hs_eta26DPNV) {
        var hs_gath26DPNx = new $hs.Func(2);
        hs_gath26DPNx.evaluate = function (hs_l26DPNu, hs_ds126DPNq) {
            var hs_wild26DPVc = hs_ds126DPNq;
            if (hs_ds126DPNq.notEvaluated) {
                hs_wild26DPVc = hs_ds126DPNq.hscall();
            }
            switch (hs_wild26DPVc.tag) {
            case 1:
                var hs_f26DPNz = hs_wild26DPVc.data[0];
                var hs_sat26DPVg = new $hs.Func(1);
                hs_sat26DPVg.evaluate = function (hs_c26DPNv) {
                    var hs_sat26DPVd = new $hs.Thunk();
                    hs_sat26DPVd.evaluateOnce = function () {
                        return hs_f26DPNz.hscall(hs_c26DPNv);
                    };
                    var hs_sat26DPVf = new $hs.Thunk();
                    hs_sat26DPVf.evaluateOnce = function () {
                        var hs_sat26DPVe = new $hs.Func(1);
                        hs_sat26DPVe.evaluate = function (hs_eta1cW6l3) {
                            var $res = new $hs.Data(2);
                            $res.data = [hs_c26DPNv, hs_eta1cW6l3];
                            return $res;
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_l26DPNu, hs_sat26DPVe);
                    };
                    return hs_gath26DPNx.hscall(hs_sat26DPVf, hs_sat26DPVd);
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26DPVg];
                return $res;
            case 2:
                var hs_f26DPNF = hs_wild26DPVc.data[0];
                var hs_sat26DPVi = new $hs.Func(1);
                hs_sat26DPVi.evaluate = function (hs_s26DPNE) {
                    var hs_sat26DPVh = new $hs.Thunk();
                    hs_sat26DPVh.evaluateOnce = function () {
                        return hs_f26DPNF.hscall(hs_s26DPNE);
                    };
                    return hs_gath26DPNx.hscall(hs_l26DPNu, hs_sat26DPVh);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26DPVi];
                return $res;
            case 3:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 4:
                var hs_k26DPNK = hs_wild26DPVc.data[0];
                var hs_p26DPNN = hs_wild26DPVc.data[1];
                var hs_sat26DPVj = new $hs.Thunk();
                hs_sat26DPVj.evaluateOnce = function () {
                    return hs_gath26DPNx.hscall(hs_l26DPNu, hs_p26DPNN);
                };
                var hs_sat26DPVl = new $hs.Thunk();
                hs_sat26DPVl.evaluateOnce = function () {
                    var hs_sat26DPVk = new $hs.Thunk();
                    hs_sat26DPVk.evaluateOnce = function () {
                        return hs_l26DPNu.hscall($hs.modules.GHCziTypes.hs_ZMZN);
                    };
                    return hs_k26DPNK.hscall(hs_sat26DPVk);
                };
                return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DPVl, hs_sat26DPVj);
            case 5:
                var hs_sat26DPVm = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("do not use readS_to_P in gather!\x00");
                return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DPVm);
            }
        };
        var hs_sat26DPVr = new $hs.Thunk();
        hs_sat26DPVr.evaluateOnce = function () {
            var hs_sat26DPVq = new $hs.Func(1);
            hs_sat26DPVq.evaluate = function (hs_a826DPNU) {
                var hs_sat26DPVp = new $hs.Func(1);
                hs_sat26DPVp.evaluate = function (hs_s26DPNT) {
                    var hs_sat26DPVo = new $hs.Data(1);
                    hs_sat26DPVo.data = [hs_s26DPNT, hs_a826DPNU];
                    return hs_eta26DPNV.hscall(hs_sat26DPVo);
                };
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadP, hs_sat26DPVp);
            };
            return hs_ds26DPNZ.hscall(hs_sat26DPVq);
        };
        return hs_gath26DPNx.hscall($hs.modules.GHCziBase.hs_id, hs_sat26DPVr);
    };
    this.hs_gather.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a325vrh4.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a425vrhM.evaluate = function (hs_h26DPO7, hs_ds26DPO9, hs_k26DPO6) {
        var hs_sat26DPVs = new $hs.Thunk();
        hs_sat26DPVs.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_k26DPO6, hs_h26DPO7);
        };
        return hs_ds26DPO9.hscall(hs_sat26DPVs);
    };
    hs_zdcfmap25vrhV.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a425vrhM.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfFunctorReadP.data = [hs_a425vrhM, hs_zdczlzd25vrhX];
    hs_zdczlzd25vrhX.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zddmzlzd.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfFunctorReadP);
    };
    hs_a525vrhZ.evaluate = function (hs_ds26DPOi, hs_ds126DPOj) {
        var $res = new $hs.Data(3);
        $res.data = [];
        return $res;
    };
    hs_zdcfail125vri5.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a525vrhZ.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a625vri7.evaluate = function (hs_x26DPOq, hs_k26DPOr) {
        return hs_k26DPOr.hscall(hs_x26DPOq);
    };
    hs_zdcreturn125vrid.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a625vri7.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a725vrif.evaluate = function (hs_ds26DPOE, hs_f26DPOC, hs_k26DPOB) {
        var hs_sat26DPVt = new $hs.Func(1);
        hs_sat26DPVt.evaluate = function (hs_a826DPOA) {
            return hs_f26DPOC.hscall(hs_a826DPOA, hs_k26DPOB);
        };
        return hs_ds26DPOE.hscall(hs_sat26DPVt);
    };
    hs_zdczgzgze125vriq.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a725vrif.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfMonadReadP.data = [hs_a725vrif, hs_zdczgzg125vris, hs_a625vri7, hs_a525vrhZ];
    hs_zdczgzg125vris.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zddmzgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP);
    };
    this.hs_zlzpzp.evaluate = function (hs_ds26DPPq, hs_q26DPP2) {
        var hs_discard26DPOQ = new $hs.Func(1);
        hs_discard26DPOQ.evaluate = function (hs_ds126DPON) {
            var hs_ds226DPOP = hs_ds126DPON;
            if (hs_ds126DPON.notEvaluated) {
                hs_ds226DPOP = hs_ds126DPON.hscall();
            }
            switch (hs_ds226DPOP) {
            case 0:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziUnit.hs_Z0T);
            default:
                var hs_sat26DPVv = new $hs.Thunk();
                hs_sat26DPVv.evaluateOnce = function () {
                    var hs_sat26DPVu = ($hs.Int.addCarry(hs_ds226DPOP, ~1, 1))[0];
                    return hs_discard26DPOQ.hscall(hs_sat26DPVu);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_Get, hs_sat26DPVv);
            }
        };
        var hs_probe26DPP7 = new $hs.Func(3);
        hs_probe26DPP7.evaluate = function (hs_ds126DPOX, hs_ds226DPP0, hs_n26DPPa) {
            var hs_wild26DPPi = hs_ds126DPOX;
            if (hs_ds126DPOX.notEvaluated) {
                hs_wild26DPPi = hs_ds126DPOX.hscall();
            }
            switch (hs_wild26DPPi.tag) {
            case 1:
                var hs_f26DPP6 = hs_wild26DPPi.data[0];
                var hs_wild126DPVw = hs_ds226DPP0;
                if (hs_ds226DPP0.notEvaluated) {
                    hs_wild126DPVw = hs_ds226DPP0.hscall();
                }
                switch (hs_wild126DPVw.tag) {
                case 1:
                    if (hs_q26DPP2.notEvaluated) {
                        return hs_q26DPP2.hscall();
                    } else {
                        return hs_q26DPP2;
                    }
                case 2:
                    var hs_c26DPP5 = hs_wild126DPVw.data[0];
                    var hs_s26DPP9 = hs_wild126DPVw.data[1];
                    var hs_sat26DPVx = ($hs.Int.addCarry(hs_n26DPPa, 1, 0))[0];
                    var hs_sat26DPVy = new $hs.Thunk();
                    hs_sat26DPVy.evaluateOnce = function () {
                        return hs_f26DPP6.hscall(hs_c26DPP5);
                    };
                    return hs_probe26DPP7.hscall(hs_sat26DPVy, hs_s26DPP9, hs_sat26DPVx);
                }
            case 2:
                var hs_f26DPPd = hs_wild26DPPi.data[0];
                var hs_sat26DPVz = new $hs.Thunk();
                hs_sat26DPVz.evaluateOnce = function () {
                    return hs_f26DPPd.hscall(hs_ds226DPP0);
                };
                return hs_probe26DPP7.hscall(hs_sat26DPVz, hs_ds226DPP0, hs_n26DPPa);
            case 3:
                if (hs_q26DPP2.notEvaluated) {
                    return hs_q26DPP2.hscall();
                } else {
                    return hs_q26DPP2;
                }
            case 4:
                var hs_sat26DPVC = new $hs.Thunk();
                hs_sat26DPVC.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadP, hs_wild26DPPi);
                };
                var hs_sat26DPVD = new $hs.Thunk();
                hs_sat26DPVD.evaluateOnce = function () {
                    return hs_discard26DPOQ.hscall(hs_n26DPPa);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DPVD, hs_sat26DPVC);
            case 5:
                var hs_r26DPPl = hs_wild26DPPi.data[0];
                var hs_sat26DPPn = new $hs.Data(5);
                hs_sat26DPPn.data = [hs_r26DPPl];
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadP, hs_sat26DPPn);
            }
        };
        var hs_sat26DPVG = new $hs.Func(1);
        hs_sat26DPVG.evaluate = function (hs_s26DPPs) {
            var hs_sat26DPVF = new $hs.Thunk();
            hs_sat26DPVF.evaluateOnce = function () {
                var hs_sat26DPVE = new $hs.Thunk();
                hs_sat26DPVE.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadP);
                };
                return hs_ds26DPPq.hscall(hs_sat26DPVE);
            };
            return hs_probe26DPP7.hscall(hs_sat26DPVF, hs_s26DPPs, 0);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_Look, hs_sat26DPVG);
    };
    this.hs_count.evaluate = function (hs_n26DPPw, hs_p26DPPx) {
        var hs_sat26DPVH = new $hs.Thunk();
        hs_sat26DPVH.evaluateOnce = function () {
            return $hs.modules.GHCziList.hs_replicate.hscall(hs_n26DPPw, hs_p26DPPx);
        };
        return $hs.modules.ControlziMonad.hs_sequence.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DPVH);
    };
    this.hs_between.evaluate = function (hs_open26DPPC, hs_close26DPPG, hs_p26DPPE) {
        var hs_sat26DPVM = new $hs.Func(1);
        hs_sat26DPVM.evaluate = function (hs_ds26DPVI) {
            var hs_sat26DPVL = new $hs.Func(1);
            hs_sat26DPVL.evaluate = function (hs_x26DPPI) {
                var hs_sat26DPVK = new $hs.Func(1);
                hs_sat26DPVK.evaluate = function (hs_ds126DPVJ) {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_x26DPPI);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_close26DPPG, hs_sat26DPVK);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_p26DPPE, hs_sat26DPVL);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_open26DPPC, hs_sat26DPVM);
    };
    this.hs_option.evaluate = function (hs_x26DPPP, hs_p26DPPT) {
        var hs_ds26DPPQ = new $hs.Thunk();
        hs_ds26DPPQ.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_x26DPPP);
        };
        var hs_sat26DPVP = new $hs.Func(1);
        hs_sat26DPVP.evaluate = function (hs_k26DPPS) {
            var hs_sat26DPVN = new $hs.Thunk();
            hs_sat26DPVN.evaluateOnce = function () {
                return hs_ds26DPPQ.hscall(hs_k26DPPS);
            };
            var hs_sat26DPVO = new $hs.Thunk();
            hs_sat26DPVO.evaluateOnce = function () {
                return hs_p26DPPT.hscall(hs_k26DPPS);
            };
            return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DPVO, hs_sat26DPVN);
        };
        if (hs_sat26DPVP.notEvaluated) {
            return hs_sat26DPVP.hscall();
        } else {
            return hs_sat26DPVP;
        }
    };
    this.hs_optional.evaluate = function (hs_p26DPPZ) {
        var hs_ds26DPQ1 = new $hs.Thunk();
        hs_ds26DPQ1.evaluateOnce = function () {
            var hs_sat26DPVQ = new $hs.Thunk();
            hs_sat26DPVQ.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziUnit.hs_Z0T);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_p26DPPZ, hs_sat26DPVQ);
        };
        var hs_ds126DPQ3 = new $hs.Thunk();
        hs_ds126DPQ3.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26DPVT = new $hs.Func(1);
        hs_sat26DPVT.evaluate = function (hs_k26DPQ5) {
            var hs_sat26DPVR = new $hs.Thunk();
            hs_sat26DPVR.evaluateOnce = function () {
                return hs_ds126DPQ3.hscall(hs_k26DPQ5);
            };
            var hs_sat26DPVS = new $hs.Thunk();
            hs_sat26DPVS.evaluateOnce = function () {
                return hs_ds26DPQ1.hscall(hs_k26DPQ5);
            };
            return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DPVS, hs_sat26DPVR);
        };
        if (hs_sat26DPVT.notEvaluated) {
            return hs_sat26DPVT.hscall();
        } else {
            return hs_sat26DPVT;
        }
    };
    this.hs_many.evaluate = function (hs_p26DPQd) {
        var hs_ds26DPQb = new $hs.Thunk();
        hs_ds26DPQb.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        var hs_ds126DPQf = new $hs.Thunk();
        hs_ds126DPQf.evaluateOnce = function () {
            var hs_sat26DPVU = new $hs.Thunk();
            hs_sat26DPVU.evaluateOnce = function () {
                return $hs.modules.TextziParserCombinatorsziReadP.hs_many.hscall(hs_p26DPQd);
            };
            return $hs.modules.ControlziMonad.hs_liftM2.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziTypes.hs_ZC, hs_p26DPQd, hs_sat26DPVU);
        };
        var hs_sat26DPVX = new $hs.Func(1);
        hs_sat26DPVX.evaluate = function (hs_k26DPQh) {
            var hs_sat26DPVV = new $hs.Thunk();
            hs_sat26DPVV.evaluateOnce = function () {
                return hs_ds126DPQf.hscall(hs_k26DPQh);
            };
            var hs_sat26DPVW = new $hs.Thunk();
            hs_sat26DPVW.evaluateOnce = function () {
                return hs_ds26DPQb.hscall(hs_k26DPQh);
            };
            return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DPVW, hs_sat26DPVV);
        };
        if (hs_sat26DPVX.notEvaluated) {
            return hs_sat26DPVX.hscall();
        } else {
            return hs_sat26DPVX;
        }
    };
    this.hs_many1.evaluate = function (hs_p26DPQm) {
        var hs_sat26DPVY = new $hs.Thunk();
        hs_sat26DPVY.evaluateOnce = function () {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_many.hscall(hs_p26DPQm);
        };
        return $hs.modules.ControlziMonad.hs_liftM2.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziTypes.hs_ZC, hs_p26DPQm, hs_sat26DPVY);
    };
    this.hs_skipMany.evaluate = function (hs_p26DPQp) {
        var hs_sat26DPVZ = new $hs.Thunk();
        hs_sat26DPVZ.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26DPW0 = new $hs.Thunk();
        hs_sat26DPW0.evaluateOnce = function () {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_many.hscall(hs_p26DPQp);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DPW0, hs_sat26DPVZ);
    };
    this.hs_skipMany1.evaluate = function (hs_p26DPQt) {
        var hs_sat26DPW1 = new $hs.Thunk();
        hs_sat26DPW1.evaluateOnce = function () {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_skipMany.hscall(hs_p26DPQt);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_p26DPQt, hs_sat26DPW1);
    };
    this.hs_sepBy1.evaluate = function (hs_p26DPQx, hs_sep26DPQy) {
        var hs_sat26DPW3 = new $hs.Thunk();
        hs_sat26DPW3.evaluateOnce = function () {
            var hs_sat26DPW2 = new $hs.Thunk();
            hs_sat26DPW2.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sep26DPQy, hs_p26DPQx);
            };
            return $hs.modules.TextziParserCombinatorsziReadP.hs_many.hscall(hs_sat26DPW2);
        };
        return $hs.modules.ControlziMonad.hs_liftM2.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziTypes.hs_ZC, hs_p26DPQx, hs_sat26DPW3);
    };
    this.hs_sepBy.evaluate = function (hs_p26DPQE, hs_sep26DPQF) {
        var hs_ds26DPQG = new $hs.Thunk();
        hs_ds26DPQG.evaluateOnce = function () {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_sepBy1.hscall(hs_p26DPQE, hs_sep26DPQF);
        };
        var hs_ds126DPQI = new $hs.Thunk();
        hs_ds126DPQI.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        var hs_sat26DPW6 = new $hs.Func(1);
        hs_sat26DPW6.evaluate = function (hs_k26DPQK) {
            var hs_sat26DPW4 = new $hs.Thunk();
            hs_sat26DPW4.evaluateOnce = function () {
                return hs_ds126DPQI.hscall(hs_k26DPQK);
            };
            var hs_sat26DPW5 = new $hs.Thunk();
            hs_sat26DPW5.evaluateOnce = function () {
                return hs_ds26DPQG.hscall(hs_k26DPQK);
            };
            return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DPW5, hs_sat26DPW4);
        };
        if (hs_sat26DPW6.notEvaluated) {
            return hs_sat26DPW6.hscall();
        } else {
            return hs_sat26DPW6;
        }
    };
    this.hs_endBy.evaluate = function (hs_p26DPQQ, hs_sep26DPQS) {
        var hs_sat26DPWa = new $hs.Thunk();
        hs_sat26DPWa.evaluateOnce = function () {
            var hs_sat26DPW9 = new $hs.Func(1);
            hs_sat26DPW9.evaluate = function (hs_x26DPQU) {
                var hs_sat26DPW8 = new $hs.Func(1);
                hs_sat26DPW8.evaluate = function (hs_ds26DPW7) {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_x26DPQU);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sep26DPQS, hs_sat26DPW8);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_p26DPQQ, hs_sat26DPW9);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_many.hscall(hs_sat26DPWa);
    };
    this.hs_endBy1.evaluate = function (hs_p26DPR1, hs_sep26DPR3) {
        var hs_p126DPR8 = new $hs.Thunk();
        hs_p126DPR8.evaluateOnce = function () {
            var hs_sat26DPWd = new $hs.Func(1);
            hs_sat26DPWd.evaluate = function (hs_x26DPR5) {
                var hs_sat26DPWc = new $hs.Func(1);
                hs_sat26DPWc.evaluate = function (hs_ds26DPWb) {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_x26DPR5);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sep26DPR3, hs_sat26DPWc);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_p26DPR1, hs_sat26DPWd);
        };
        var hs_sat26DPWe = new $hs.Thunk();
        hs_sat26DPWe.evaluateOnce = function () {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_many.hscall(hs_p126DPR8);
        };
        return $hs.modules.ControlziMonad.hs_liftM2.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziTypes.hs_ZC, hs_p126DPR8, hs_sat26DPWe);
    };
    this.hs_chainr1.evaluate = function (hs_p26DPRd, hs_op26DPRg) {
        var hs_scan26DPRi = new $hs.Thunk();
        hs_scan26DPRi.evaluateOnce = function () {
            var hs_sat26DPWl = new $hs.Func(1);
            hs_sat26DPWl.evaluate = function (hs_x26DPRk) {
                var hs_ds26DPRq = new $hs.Thunk();
                hs_ds26DPRq.evaluateOnce = function () {
                    var hs_sat26DPWh = new $hs.Func(1);
                    hs_sat26DPWh.evaluate = function (hs_f26DPRm) {
                        var hs_sat26DPWg = new $hs.Func(1);
                        hs_sat26DPWg.evaluate = function (hs_y26DPRl) {
                            var hs_sat26DPWf = new $hs.Thunk();
                            hs_sat26DPWf.evaluateOnce = function () {
                                return hs_f26DPRm.hscall(hs_x26DPRk, hs_y26DPRl);
                            };
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DPWf);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_scan26DPRi, hs_sat26DPWg);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_op26DPRg, hs_sat26DPWh);
                };
                var hs_ds126DPRs = new $hs.Thunk();
                hs_ds126DPRs.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_x26DPRk);
                };
                var hs_sat26DPWk = new $hs.Func(1);
                hs_sat26DPWk.evaluate = function (hs_k26DPRu) {
                    var hs_sat26DPWi = new $hs.Thunk();
                    hs_sat26DPWi.evaluateOnce = function () {
                        return hs_ds126DPRs.hscall(hs_k26DPRu);
                    };
                    var hs_sat26DPWj = new $hs.Thunk();
                    hs_sat26DPWj.evaluateOnce = function () {
                        return hs_ds26DPRq.hscall(hs_k26DPRu);
                    };
                    return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DPWj, hs_sat26DPWi);
                };
                if (hs_sat26DPWk.notEvaluated) {
                    return hs_sat26DPWk.hscall();
                } else {
                    return hs_sat26DPWk;
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_p26DPRd, hs_sat26DPWl);
        };
        if (hs_scan26DPRi.notEvaluated) {
            return hs_scan26DPRi.hscall();
        } else {
            return hs_scan26DPRi;
        }
    };
    this.hs_chainr.evaluate = function (hs_p26DPRD, hs_op26DPRE, hs_x26DPRH) {
        var hs_ds26DPRF = new $hs.Thunk();
        hs_ds26DPRF.evaluateOnce = function () {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_chainr1.hscall(hs_p26DPRD, hs_op26DPRE);
        };
        var hs_ds126DPRI = new $hs.Thunk();
        hs_ds126DPRI.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_x26DPRH);
        };
        var hs_sat26DPWo = new $hs.Func(1);
        hs_sat26DPWo.evaluate = function (hs_k26DPRK) {
            var hs_sat26DPWm = new $hs.Thunk();
            hs_sat26DPWm.evaluateOnce = function () {
                return hs_ds126DPRI.hscall(hs_k26DPRK);
            };
            var hs_sat26DPWn = new $hs.Thunk();
            hs_sat26DPWn.evaluateOnce = function () {
                return hs_ds26DPRF.hscall(hs_k26DPRK);
            };
            return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DPWn, hs_sat26DPWm);
        };
        if (hs_sat26DPWo.notEvaluated) {
            return hs_sat26DPWo.hscall();
        } else {
            return hs_sat26DPWo;
        }
    };
    this.hs_chainl1.evaluate = function (hs_p26DPRQ, hs_op26DPRU) {
        var hs_rest26DPS0 = new $hs.Func(1);
        hs_rest26DPS0.evaluate = function (hs_x26DPRX) {
            var hs_ds26DPS4 = new $hs.Thunk();
            hs_ds26DPS4.evaluateOnce = function () {
                var hs_sat26DPWr = new $hs.Func(1);
                hs_sat26DPWr.evaluate = function (hs_f26DPRZ) {
                    var hs_sat26DPWq = new $hs.Func(1);
                    hs_sat26DPWq.evaluate = function (hs_y26DPRY) {
                        var hs_sat26DPWp = new $hs.Thunk();
                        hs_sat26DPWp.evaluateOnce = function () {
                            return hs_f26DPRZ.hscall(hs_x26DPRX, hs_y26DPRY);
                        };
                        return hs_rest26DPS0.hscall(hs_sat26DPWp);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_p26DPRQ, hs_sat26DPWq);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_op26DPRU, hs_sat26DPWr);
            };
            var hs_ds126DPS6 = new $hs.Thunk();
            hs_ds126DPS6.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_x26DPRX);
            };
            var hs_sat26DPWu = new $hs.Func(1);
            hs_sat26DPWu.evaluate = function (hs_k26DPS8) {
                var hs_sat26DPWs = new $hs.Thunk();
                hs_sat26DPWs.evaluateOnce = function () {
                    return hs_ds126DPS6.hscall(hs_k26DPS8);
                };
                var hs_sat26DPWt = new $hs.Thunk();
                hs_sat26DPWt.evaluateOnce = function () {
                    return hs_ds26DPS4.hscall(hs_k26DPS8);
                };
                return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DPWt, hs_sat26DPWs);
            };
            if (hs_sat26DPWu.notEvaluated) {
                return hs_sat26DPWu.hscall();
            } else {
                return hs_sat26DPWu;
            }
        };
        var hs_sat26DPWv = new $hs.Func(1);
        hs_sat26DPWv.evaluate = function (hs_eta1cW6l3) {
            return hs_rest26DPS0.hscall(hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_p26DPRQ, hs_sat26DPWv);
    };
    this.hs_chainl.evaluate = function (hs_p26DPSh, hs_op26DPSi, hs_x26DPSl) {
        var hs_ds26DPSj = new $hs.Thunk();
        hs_ds26DPSj.evaluateOnce = function () {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_chainl1.hscall(hs_p26DPSh, hs_op26DPSi);
        };
        var hs_ds126DPSm = new $hs.Thunk();
        hs_ds126DPSm.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_x26DPSl);
        };
        var hs_sat26DPWy = new $hs.Func(1);
        hs_sat26DPWy.evaluate = function (hs_k26DPSo) {
            var hs_sat26DPWw = new $hs.Thunk();
            hs_sat26DPWw.evaluateOnce = function () {
                return hs_ds126DPSm.hscall(hs_k26DPSo);
            };
            var hs_sat26DPWx = new $hs.Thunk();
            hs_sat26DPWx.evaluateOnce = function () {
                return hs_ds26DPSj.hscall(hs_k26DPSo);
            };
            return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadPlusP, hs_sat26DPWx, hs_sat26DPWw);
        };
        if (hs_sat26DPWy.notEvaluated) {
            return hs_sat26DPWy.hscall();
        } else {
            return hs_sat26DPWy;
        }
    };
    this.hs_manyTill.evaluate = function (hs_p26DPSy, hs_end26DPSv) {
        var hs_scan26DPSz = new $hs.Thunk();
        hs_scan26DPSz.evaluateOnce = function () {
            var hs_sat26DPWz = new $hs.Thunk();
            hs_sat26DPWz.evaluateOnce = function () {
                return $hs.modules.ControlziMonad.hs_liftM2.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziTypes.hs_ZC, hs_p26DPSy, hs_scan26DPSz);
            };
            var hs_sat26DPWB = new $hs.Thunk();
            hs_sat26DPWB.evaluateOnce = function () {
                var hs_sat26DPWA = new $hs.Thunk();
                hs_sat26DPWA.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziTypes.hs_ZMZN);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_end26DPSv, hs_sat26DPWA);
            };
            return $hs.modules.TextziParserCombinatorsziReadP.hs_zlzpzp.hscall(hs_sat26DPWB, hs_sat26DPWz);
        };
        if (hs_scan26DPSz.notEvaluated) {
            return hs_scan26DPSz.hscall();
        } else {
            return hs_scan26DPSz;
        }
    };
    this.hs_zdfMonadPlusReadP.data = [$hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_a25vrcC, hs_a225vrgC];
    hs_skip25vrmm.evaluate = function (hs_ds26DPSE) {
        var hs_wild26DPWC = hs_ds26DPSE;
        if (hs_ds26DPSE.notEvaluated) {
            hs_wild26DPWC = hs_ds26DPSE.hscall();
        }
        switch (hs_wild26DPWC.tag) {
        case 1:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziUnit.hs_Z0T);
        case 2:
            var hs_c26DPSI = hs_wild26DPWC.data[0];
            var hs_s26DPSL = hs_wild26DPWC.data[1];
            var hs_wild126DPWD = $hs.modules.GHCziUnicode.hs_isSpace.hscall(hs_c26DPSI);
            switch (hs_wild126DPWD.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziUnit.hs_Z0T);
            case 2:
                var hs_sat26DPWF = new $hs.Func(1);
                hs_sat26DPWF.evaluate = function (hs_ds126DPWE) {
                    return hs_skip25vrmm.hscall(hs_s26DPSL);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_Get, hs_sat26DPWF);
            }
        }
    };
    hs_sat26DPWG.evaluate = function (hs_s26DPSO) {
        return hs_skip25vrmm.hscall(hs_s26DPSO);
    };
    this.hs_skipSpaces.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_Look, hs_sat26DPWG);
    };
    this.hs_munch.evaluate = function (hs_p26DPSY) {
        var hs_scan26DPT2 = new $hs.Func(1);
        hs_scan26DPT2.evaluate = function (hs_ds26DPST) {
            var hs_wild26DPWH = hs_ds26DPST;
            if (hs_ds26DPST.notEvaluated) {
                hs_wild26DPWH = hs_ds26DPST.hscall();
            }
            switch (hs_wild26DPWH.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziTypes.hs_ZMZN);
            case 2:
                var hs_c26DPSX = hs_wild26DPWH.data[0];
                var hs_cs26DPT1 = hs_wild26DPWH.data[1];
                var hs_wild126DPWI = hs_p26DPSY.hscall(hs_c26DPSX);
                switch (hs_wild126DPWI.tag) {
                case 1:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziTypes.hs_ZMZN);
                case 2:
                    var hs_sat26DPWN = new $hs.Func(1);
                    hs_sat26DPWN.evaluate = function (hs_ds126DPWJ) {
                        var hs_sat26DPWL = new $hs.Func(1);
                        hs_sat26DPWL.evaluate = function (hs_s26DPT5) {
                            var hs_sat26DPWK = new $hs.Data(2);
                            hs_sat26DPWK.data = [hs_c26DPSX, hs_s26DPT5];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DPWK);
                        };
                        var hs_sat26DPWM = new $hs.Thunk();
                        hs_sat26DPWM.evaluateOnce = function () {
                            return hs_scan26DPT2.hscall(hs_cs26DPT1);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DPWM, hs_sat26DPWL);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_Get, hs_sat26DPWN);
                }
            }
        };
        var hs_sat26DPWO = new $hs.Func(1);
        hs_sat26DPWO.evaluate = function (hs_s26DPTa) {
            return hs_scan26DPT2.hscall(hs_s26DPTa);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_Look, hs_sat26DPWO);
    };
    this.hs_munch1.evaluate = function (hs_p26DPTf) {
        var hs_sat26DPWT = new $hs.Func(1);
        hs_sat26DPWT.evaluate = function (hs_c26DPTe) {
            var hs_wild26DPWP = hs_p26DPTf.hscall(hs_c26DPTe);
            switch (hs_wild26DPWP.tag) {
            case 1:
                if (hs_a25vrcC.notEvaluated) {
                    return hs_a25vrcC.hscall();
                } else {
                    return hs_a25vrcC;
                }
            case 2:
                var hs_sat26DPWR = new $hs.Func(1);
                hs_sat26DPWR.evaluate = function (hs_s26DPTj) {
                    var hs_sat26DPWQ = new $hs.Data(2);
                    hs_sat26DPWQ.data = [hs_c26DPTe, hs_s26DPTj];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DPWQ);
                };
                var hs_sat26DPWS = new $hs.Thunk();
                hs_sat26DPWS.evaluateOnce = function () {
                    return $hs.modules.TextziParserCombinatorsziReadP.hs_munch.hscall(hs_p26DPTf);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DPWS, hs_sat26DPWR);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_Get, hs_sat26DPWT);
    };
    this.hs_string.evaluate = function (hs_this26DPTu) {
        var hs_sat26DPWZ = new $hs.Func(1);
        hs_sat26DPWZ.evaluate = function (hs_s26DPTJ) {
            var hs_scan26DPTH = new $hs.Func(2);
            hs_scan26DPTH.evaluate = function (hs_ds26DPTs, hs_ds126DPTx) {
                var hs_wild26DPWU = hs_ds26DPTs;
                if (hs_ds26DPTs.notEvaluated) {
                    hs_wild26DPWU = hs_ds26DPTs.hscall();
                }
                switch (hs_wild26DPWU.tag) {
                case 1:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_this26DPTu);
                case 2:
                    var hs_x26DPTB = hs_wild26DPWU.data[0];
                    var hs_xs26DPTF = hs_wild26DPWU.data[1];
                    var hs_wild126DPWV = hs_ds126DPTx;
                    if (hs_ds126DPTx.notEvaluated) {
                        hs_wild126DPWV = hs_ds126DPTx.hscall();
                    }
                    switch (hs_wild126DPWV.tag) {
                    case 1:
                        if (hs_a25vrcC.notEvaluated) {
                            return hs_a25vrcC.hscall();
                        } else {
                            return hs_a25vrcC;
                        }
                    case 2:
                        var hs_y26DPTC = hs_wild126DPWV.data[0];
                        var hs_ys26DPTG = hs_wild126DPWV.data[1];
                        var hs_wild226DPWW = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_x26DPTB, hs_y26DPTC);
                        switch (hs_wild226DPWW.tag) {
                        case 1:
                            if (hs_a25vrcC.notEvaluated) {
                                return hs_a25vrcC.hscall();
                            } else {
                                return hs_a25vrcC;
                            }
                        case 2:
                            var hs_sat26DPWY = new $hs.Func(1);
                            hs_sat26DPWY.evaluate = function (hs_ds226DPWX) {
                                return hs_scan26DPTH.hscall(hs_xs26DPTF, hs_ys26DPTG);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_Get, hs_sat26DPWY);
                        }
                    }
                }
            };
            return hs_scan26DPTH.hscall(hs_this26DPTu, hs_s26DPTJ);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_Look, hs_sat26DPWZ);
    };
    this.hs_satisfy.evaluate = function (hs_p26DPTO) {
        var hs_sat26DPX1 = new $hs.Func(1);
        hs_sat26DPX1.evaluate = function (hs_c26DPTN) {
            var hs_wild26DPX0 = hs_p26DPTO.hscall(hs_c26DPTN);
            switch (hs_wild26DPX0.tag) {
            case 1:
                if (hs_a25vrcC.notEvaluated) {
                    return hs_a25vrcC.hscall();
                } else {
                    return hs_a25vrcC;
                }
            case 2:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_c26DPTN);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_Get, hs_sat26DPX1);
    };
    this.hs_char.evaluate = function (hs_c26DPTS) {
        var hs_sat26DPX2 = new $hs.Thunk();
        hs_sat26DPX2.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c26DPTS);
        };
        return $hs.modules.TextziParserCombinatorsziReadP.hs_satisfy.hscall(hs_sat26DPX2);
    };
    hs_sat26DPX4.evaluate = function (hs_s26DPTV) {
        var hs_wild26DPX3 = $hs.modules.GHCziList.hs_null.hscall(hs_s26DPTV);
        switch (hs_wild26DPX3.tag) {
        case 1:
            if (hs_a25vrcC.notEvaluated) {
                return hs_a25vrcC.hscall();
            } else {
                return hs_a25vrcC;
            }
        case 2:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.GHCziUnit.hs_Z0T);
        }
    };
    this.hs_eof.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, $hs.modules.TextziParserCombinatorsziReadP.hs_Look, hs_sat26DPX4);
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
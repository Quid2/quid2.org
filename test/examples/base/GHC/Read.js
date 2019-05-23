
$hs.modules.GHCziRead = new $hs.Module();
$hs.modules.GHCziRead.dependencies = ["GHC.Prim", "GHC.Types", "GHC.CString", "GHC.Ordering", "GHC.Unit", "GHC.Generics", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Float", "GHC.Show", "GHC.Classes", "GHC.Arr", "GHC.Unicode", "Text.ParserCombinators.ReadP", "Text.ParserCombinators.ReadPrec", "Text.Read.Lex"];
$hs.modules.GHCziRead.initBeforeDependencies = function () {
    this.hs_readsPrec = new $hs.Func(1);
    this.hs_readList = new $hs.Func(1);
    this.hs_readPrec = new $hs.Func(1);
    this.hs_readListPrec = new $hs.Func(1);
    this.hs_zddmreadListPrec = new $hs.Func(1);
    this.hs_zddmreadPrec = new $hs.Func(1);
    this.hs_zddmreadsPrec = new $hs.Func(1);
    this.hs_readp = new $hs.Func(1);
    this.hs_lexP = new $hs.Thunk();
    this.hs_paren = new $hs.Func(1);
    this.hs_parens = new $hs.Func(1);
    this.hs_list = new $hs.Func(1);
    this.hs_zddmreadList = new $hs.Func(1);
    this.hs_choose = new $hs.Func(1);
    this.hs_lexDigits = new $hs.Thunk();
    this.hs_readLitChar = new $hs.Thunk();
    this.hs_lex = new $hs.Func(1);
    this.hs_readListPrecDefault = new $hs.Func(1);
    this.hs_readListDefault = new $hs.Func(1);
    this.hs_readParen = new $hs.Func(3);
    this.hs_zdfReadChar = new $hs.Data(1);
    this.hs_zdfReadBool = new $hs.Data(1);
    this.hs_zdfReadOrdering = new $hs.Data(1);
    this.hs_zdfReadMaybe = new $hs.Func(1);
    this.hs_zdfReadZMZN = new $hs.Func(1);
    this.hs_zdfReadLexeme = new $hs.Data(1);
    this.hs_zdfReadInt = new $hs.Data(1);
    this.hs_zdfReadInteger = new $hs.Data(1);
    this.hs_zdfReadFloat = new $hs.Data(1);
    this.hs_zdfReadDouble = new $hs.Data(1);
    this.hs_zdfReadRatio = new $hs.Func(2);
    this.hs_zdfReadZLZR = new $hs.Data(1);
    this.hs_zdfReadArity = new $hs.Data(1);
    this.hs_zdfReadAssociativity = new $hs.Data(1);
    this.hs_zdfReadFixity = new $hs.Data(1);
    this.hs_lexLitChar = new $hs.Thunk();
    this.hs_zdfReadZLz2cUz2cUZR = new $hs.Func(3);
    this.hs_zdfReadZLz2cUZR = new $hs.Func(2);
    this.hs_zdfReadArray = new $hs.Func(3);
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(7);
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(6);
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUZR = new $hs.Func(5);
    this.hs_zdfReadZLz2cUz2cUz2cUZR = new $hs.Func(4);
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(15);
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(14);
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(13);
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(12);
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(11);
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(10);
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(9);
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(8);
    this.hs_DZCRead = new $hs.Func(4);
    this.hs_readsPrec.notEvaluated = true;
    this.hs_readsPrec.evaluate = function (hs_tpl26DcF8) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_tpl26DcF8);
    };
    this.hs_readList.notEvaluated = true;
    this.hs_readList.evaluate = function (hs_tpl26DcFg) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_tpl26DcFg);
    };
    this.hs_readPrec.notEvaluated = true;
    this.hs_readPrec.evaluate = function (hs_tpl26DcFo) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_tpl26DcFo);
    };
    this.hs_readListPrec.notEvaluated = true;
    this.hs_readListPrec.evaluate = function (hs_tpl26DcFw) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_tpl26DcFw);
    };
    this.hs_zddmreadListPrec.notEvaluated = true;
    this.hs_zddmreadListPrec.evaluate = function (hs_zddRead26DcFF) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DcFF);
    };
    this.hs_zddmreadPrec.notEvaluated = true;
    this.hs_zddmreadPrec.evaluate = function (hs_zddRead26DcFJ) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DcFJ);
    };
    this.hs_zddmreadsPrec.notEvaluated = true;
    this.hs_zddmreadsPrec.evaluate = function (hs_zddRead26DcFM) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DcFM);
    };
    this.hs_readp.notEvaluated = true;
    this.hs_readp.evaluate = function (hs_zddRead26DcFP) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DcFP);
    };
    this.hs_lexP.evaluateOnce = function () {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_paren.notEvaluated = true;
    this.hs_paren.evaluate = function (hs_p26DcGw) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_p26DcGw);
    };
    this.hs_parens.notEvaluated = true;
    this.hs_parens.evaluate = function (hs_p26DcH3) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_p26DcH3);
    };
    this.hs_list.notEvaluated = true;
    this.hs_list.evaluate = function (hs_readx26DcH9) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_readx26DcH9);
    };
    this.hs_zddmreadList.notEvaluated = true;
    this.hs_zddmreadList.evaluate = function (hs_zddRead26DcIp) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DcIp);
    };
    this.hs_choose.notEvaluated = true;
    this.hs_choose.evaluate = function (hs_sps26DcIO) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_sps26DcIO);
    };
    this.hs_lexDigits.evaluateOnce = function () {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_readLitChar.evaluateOnce = function () {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_lex.notEvaluated = true;
    this.hs_lex.evaluate = function (hs_s26DcJq) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_s26DcJq);
    };
    this.hs_readListPrecDefault.notEvaluated = true;
    this.hs_readListPrecDefault.evaluate = function (hs_zddRead26DcJs) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DcJs);
    };
    this.hs_readListDefault.notEvaluated = true;
    this.hs_readListDefault.evaluate = function (hs_zddRead26DcJv) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DcJv);
    };
    this.hs_readParen.notEvaluated = true;
    this.hs_readParen.evaluate = function (hs_b26DcKI, hs_g26DcK1, hs_eta26DcKK) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_b26DcKI, hs_g26DcK1, hs_eta26DcKK);
    };
    this.hs_zdfReadChar.notEvaluated = true;
    this.hs_zdfReadChar.evaluate = function () {
        $hs.modules.GHCziRead.loadDependencies();
        return this;
    };
    this.hs_zdfReadBool.notEvaluated = true;
    this.hs_zdfReadBool.evaluate = function () {
        $hs.modules.GHCziRead.loadDependencies();
        return this;
    };
    this.hs_zdfReadOrdering.notEvaluated = true;
    this.hs_zdfReadOrdering.evaluate = function () {
        $hs.modules.GHCziRead.loadDependencies();
        return this;
    };
    this.hs_zdfReadMaybe.notEvaluated = true;
    this.hs_zdfReadMaybe.evaluate = function (hs_zddRead26DcML) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DcML);
    };
    this.hs_zdfReadZMZN.notEvaluated = true;
    this.hs_zdfReadZMZN.evaluate = function (hs_zddRead26DcN7) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DcN7);
    };
    this.hs_zdfReadLexeme.notEvaluated = true;
    this.hs_zdfReadLexeme.evaluate = function () {
        $hs.modules.GHCziRead.loadDependencies();
        return this;
    };
    this.hs_zdfReadInt.notEvaluated = true;
    this.hs_zdfReadInt.evaluate = function () {
        $hs.modules.GHCziRead.loadDependencies();
        return this;
    };
    this.hs_zdfReadInteger.notEvaluated = true;
    this.hs_zdfReadInteger.evaluate = function () {
        $hs.modules.GHCziRead.loadDependencies();
        return this;
    };
    this.hs_zdfReadFloat.notEvaluated = true;
    this.hs_zdfReadFloat.evaluate = function () {
        $hs.modules.GHCziRead.loadDependencies();
        return this;
    };
    this.hs_zdfReadDouble.notEvaluated = true;
    this.hs_zdfReadDouble.evaluate = function () {
        $hs.modules.GHCziRead.loadDependencies();
        return this;
    };
    this.hs_zdfReadRatio.notEvaluated = true;
    this.hs_zdfReadRatio.evaluate = function (hs_zddIntegral26DcOT, hs_zddRead26DcOU) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddIntegral26DcOT, hs_zddRead26DcOU);
    };
    this.hs_zdfReadZLZR.notEvaluated = true;
    this.hs_zdfReadZLZR.evaluate = function () {
        $hs.modules.GHCziRead.loadDependencies();
        return this;
    };
    this.hs_zdfReadArity.notEvaluated = true;
    this.hs_zdfReadArity.evaluate = function () {
        $hs.modules.GHCziRead.loadDependencies();
        return this;
    };
    this.hs_zdfReadAssociativity.notEvaluated = true;
    this.hs_zdfReadAssociativity.evaluate = function () {
        $hs.modules.GHCziRead.loadDependencies();
        return this;
    };
    this.hs_zdfReadFixity.notEvaluated = true;
    this.hs_zdfReadFixity.evaluate = function () {
        $hs.modules.GHCziRead.loadDependencies();
        return this;
    };
    this.hs_lexLitChar.evaluateOnce = function () {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfReadZLz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUZR.evaluate = function (hs_zddRead26DcSJ, hs_zddRead126DcSK, hs_zddRead226DcSL) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DcSJ, hs_zddRead126DcSK, hs_zddRead226DcSL);
    };
    this.hs_zdfReadZLz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUZR.evaluate = function (hs_zddRead26DcTu, hs_zddRead126DcTv) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DcTu, hs_zddRead126DcTv);
    };
    this.hs_zdfReadArray.notEvaluated = true;
    this.hs_zdfReadArray.evaluate = function (hs_zddIx26DcUD, hs_zddRead26DcUE, hs_zddRead126DcUF) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddIx26DcUD, hs_zddRead26DcUE, hs_zddRead126DcUF);
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DcWy, hs_zddRead126DcWz, hs_zddRead226DcWA, hs_zddRead326DcWB, hs_zddRead426DcWC, hs_zddRead526DcWD, hs_zddRead626DcWE) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DcWy, hs_zddRead126DcWz, hs_zddRead226DcWA, hs_zddRead326DcWB, hs_zddRead426DcWC, hs_zddRead526DcWD, hs_zddRead626DcWE);
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DcYl, hs_zddRead126DcYm, hs_zddRead226DcYn, hs_zddRead326DcYo, hs_zddRead426DcYp, hs_zddRead526DcYq) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DcYl, hs_zddRead126DcYm, hs_zddRead226DcYn, hs_zddRead326DcYo, hs_zddRead426DcYp, hs_zddRead526DcYq);
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DcZT, hs_zddRead126DcZU, hs_zddRead226DcZV, hs_zddRead326DcZW, hs_zddRead426DcZX) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DcZT, hs_zddRead126DcZU, hs_zddRead226DcZV, hs_zddRead326DcZW, hs_zddRead426DcZX);
    };
    this.hs_zdfReadZLz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26Dd0Y, hs_zddRead126Dd0Z, hs_zddRead226Dd10, hs_zddRead326Dd11) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26Dd0Y, hs_zddRead126Dd0Z, hs_zddRead226Dd10, hs_zddRead326Dd11);
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26Dd40, hs_zddRead126Dd41, hs_zddRead226Dd42, hs_zddRead326Dd43, hs_zddRead426Dd44, hs_zddRead526Dd45, hs_zddRead626Dd46, hs_zddRead726Dd47, hs_zddRead826Dd48, hs_zddRead926Dd49, hs_zddRead1026Dd4a, hs_zddRead1126Dd4b, hs_zddRead1226Dd4c, hs_zddRead1326Dd4d, hs_zddRead1426Dd4e) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26Dd40, hs_zddRead126Dd41, hs_zddRead226Dd42, hs_zddRead326Dd43, hs_zddRead426Dd44, hs_zddRead526Dd45, hs_zddRead626Dd46, hs_zddRead726Dd47, hs_zddRead826Dd48, hs_zddRead926Dd49, hs_zddRead1026Dd4a, hs_zddRead1126Dd4b, hs_zddRead1226Dd4c, hs_zddRead1326Dd4d, hs_zddRead1426Dd4e);
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26Dd7r, hs_zddRead126Dd7s, hs_zddRead226Dd7t, hs_zddRead326Dd7u, hs_zddRead426Dd7v, hs_zddRead526Dd7w, hs_zddRead626Dd7x, hs_zddRead726Dd7y, hs_zddRead826Dd7z, hs_zddRead926Dd7A, hs_zddRead1026Dd7B, hs_zddRead1126Dd7C, hs_zddRead1226Dd7D, hs_zddRead1326Dd7E) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26Dd7r, hs_zddRead126Dd7s, hs_zddRead226Dd7t, hs_zddRead326Dd7u, hs_zddRead426Dd7v, hs_zddRead526Dd7w, hs_zddRead626Dd7x, hs_zddRead726Dd7y, hs_zddRead826Dd7z, hs_zddRead926Dd7A, hs_zddRead1026Dd7B, hs_zddRead1126Dd7C, hs_zddRead1226Dd7D, hs_zddRead1326Dd7E);
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DdaD, hs_zddRead126DdaE, hs_zddRead226DdaF, hs_zddRead326DdaG, hs_zddRead426DdaH, hs_zddRead526DdaI, hs_zddRead626DdaJ, hs_zddRead726DdaK, hs_zddRead826DdaL, hs_zddRead926DdaM, hs_zddRead1026DdaN, hs_zddRead1126DdaO, hs_zddRead1226DdaP) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DdaD, hs_zddRead126DdaE, hs_zddRead226DdaF, hs_zddRead326DdaG, hs_zddRead426DdaH, hs_zddRead526DdaI, hs_zddRead626DdaJ, hs_zddRead726DdaK, hs_zddRead826DdaL, hs_zddRead926DdaM, hs_zddRead1026DdaN, hs_zddRead1126DdaO, hs_zddRead1226DdaP);
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DddA, hs_zddRead126DddB, hs_zddRead226DddC, hs_zddRead326DddD, hs_zddRead426DddE, hs_zddRead526DddF, hs_zddRead626DddG, hs_zddRead726DddH, hs_zddRead826DddI, hs_zddRead926DddJ, hs_zddRead1026DddK, hs_zddRead1126DddL) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DddA, hs_zddRead126DddB, hs_zddRead226DddC, hs_zddRead326DddD, hs_zddRead426DddE, hs_zddRead526DddF, hs_zddRead626DddG, hs_zddRead726DddH, hs_zddRead826DddI, hs_zddRead926DddJ, hs_zddRead1026DddK, hs_zddRead1126DddL);
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26Ddgo, hs_zddRead126Ddgp, hs_zddRead226Ddgq, hs_zddRead326Ddgr, hs_zddRead426Ddgs, hs_zddRead526Ddgt, hs_zddRead626Ddgu, hs_zddRead726Ddgv, hs_zddRead826Ddgw, hs_zddRead926Ddgx, hs_zddRead1026Ddgy) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26Ddgo, hs_zddRead126Ddgp, hs_zddRead226Ddgq, hs_zddRead326Ddgr, hs_zddRead426Ddgs, hs_zddRead526Ddgt, hs_zddRead626Ddgu, hs_zddRead726Ddgv, hs_zddRead826Ddgw, hs_zddRead926Ddgx, hs_zddRead1026Ddgy);
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DdiX, hs_zddRead126DdiY, hs_zddRead226DdiZ, hs_zddRead326Ddj0, hs_zddRead426Ddj1, hs_zddRead526Ddj2, hs_zddRead626Ddj3, hs_zddRead726Ddj4, hs_zddRead826Ddj5, hs_zddRead926Ddj6) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DdiX, hs_zddRead126DdiY, hs_zddRead226DdiZ, hs_zddRead326Ddj0, hs_zddRead426Ddj1, hs_zddRead526Ddj2, hs_zddRead626Ddj3, hs_zddRead726Ddj4, hs_zddRead826Ddj5, hs_zddRead926Ddj6);
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26Ddlh, hs_zddRead126Ddli, hs_zddRead226Ddlj, hs_zddRead326Ddlk, hs_zddRead426Ddll, hs_zddRead526Ddlm, hs_zddRead626Ddln, hs_zddRead726Ddlo, hs_zddRead826Ddlp) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26Ddlh, hs_zddRead126Ddli, hs_zddRead226Ddlj, hs_zddRead326Ddlk, hs_zddRead426Ddll, hs_zddRead526Ddlm, hs_zddRead626Ddln, hs_zddRead726Ddlo, hs_zddRead826Ddlp);
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26Ddn0, hs_zddRead126Ddn1, hs_zddRead226Ddn2, hs_zddRead326Ddn3, hs_zddRead426Ddn4, hs_zddRead526Ddn5, hs_zddRead626Ddn6, hs_zddRead726Ddn7) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26Ddn0, hs_zddRead126Ddn1, hs_zddRead226Ddn2, hs_zddRead326Ddn3, hs_zddRead426Ddn4, hs_zddRead526Ddn5, hs_zddRead626Ddn6, hs_zddRead726Ddn7);
    };
    this.hs_DZCRead.notEvaluated = true;
    this.hs_DZCRead.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziRead.initAfterDependencies = function () {
    this.hs_readsPrec.notEvaluated = false;
    this.hs_readList.notEvaluated = false;
    this.hs_readPrec.notEvaluated = false;
    this.hs_readListPrec.notEvaluated = false;
    this.hs_zddmreadListPrec.notEvaluated = false;
    this.hs_zddmreadPrec.notEvaluated = false;
    this.hs_zddmreadsPrec.notEvaluated = false;
    this.hs_readp.notEvaluated = false;
    this.hs_paren.notEvaluated = false;
    this.hs_parens.notEvaluated = false;
    this.hs_list.notEvaluated = false;
    this.hs_zddmreadList.notEvaluated = false;
    this.hs_choose.notEvaluated = false;
    this.hs_lex.notEvaluated = false;
    this.hs_readListPrecDefault.notEvaluated = false;
    this.hs_readListDefault.notEvaluated = false;
    this.hs_readParen.notEvaluated = false;
    this.hs_zdfReadChar.notEvaluated = false;
    this.hs_zdfReadChar.evaluate = function () {
        return this;
    };
    this.hs_zdfReadBool.notEvaluated = false;
    this.hs_zdfReadBool.evaluate = function () {
        return this;
    };
    this.hs_zdfReadOrdering.notEvaluated = false;
    this.hs_zdfReadOrdering.evaluate = function () {
        return this;
    };
    this.hs_zdfReadMaybe.notEvaluated = false;
    this.hs_zdfReadZMZN.notEvaluated = false;
    this.hs_zdfReadLexeme.notEvaluated = false;
    this.hs_zdfReadLexeme.evaluate = function () {
        return this;
    };
    this.hs_zdfReadInt.notEvaluated = false;
    this.hs_zdfReadInt.evaluate = function () {
        return this;
    };
    this.hs_zdfReadInteger.notEvaluated = false;
    this.hs_zdfReadInteger.evaluate = function () {
        return this;
    };
    this.hs_zdfReadFloat.notEvaluated = false;
    this.hs_zdfReadFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfReadDouble.notEvaluated = false;
    this.hs_zdfReadDouble.evaluate = function () {
        return this;
    };
    this.hs_zdfReadRatio.notEvaluated = false;
    this.hs_zdfReadZLZR.notEvaluated = false;
    this.hs_zdfReadZLZR.evaluate = function () {
        return this;
    };
    this.hs_zdfReadArity.notEvaluated = false;
    this.hs_zdfReadArity.evaluate = function () {
        return this;
    };
    this.hs_zdfReadAssociativity.notEvaluated = false;
    this.hs_zdfReadAssociativity.evaluate = function () {
        return this;
    };
    this.hs_zdfReadFixity.notEvaluated = false;
    this.hs_zdfReadFixity.evaluate = function () {
        return this;
    };
    this.hs_zdfReadZLz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfReadZLz2cUZR.notEvaluated = false;
    this.hs_zdfReadArray.notEvaluated = false;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfReadZLz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_DZCRead.notEvaluated = false;
    var hs_convertFrac25s1Gg = new $hs.Func(2);
    var hs_convertInt25s1Gf = new $hs.Func(2);
    var hs_zddEq25uOcd = new $hs.Thunk();
    var hs_readNumber25s1Ge = new $hs.Func(2);
    var hs_sat26DdpL = new $hs.Thunk();
    var hs_sat26Ddqi = new $hs.Thunk();
    var hs_sat26Ddqj = new $hs.Thunk();
    var hs_optional25uOex = new $hs.Thunk();
    var hs_zdcreadPrec25uOeH = new $hs.Thunk();
    var hs_sat26Ddqn = new $hs.Data(1);
    var hs_sat26Ddqo = new $hs.Thunk();
    var hs_sat26Ddqp = new $hs.Thunk();
    var hs_sat26Ddqq = new $hs.Thunk();
    var hs_sat26Ddqr = new $hs.Thunk();
    var hs_zdcreadListPrec25uOeI = new $hs.Thunk();
    var hs_zdcreadList25uOeJ = new $hs.Thunk();
    var hs_zdcreadsPrec25uOeK = new $hs.Thunk();
    var hs_optional125uOeL = new $hs.Thunk();
    var hs_sat26Ddqy = new $hs.Thunk();
    var hs_sat26Ddqz = new $hs.Thunk();
    var hs_optional225uOf1 = new $hs.Thunk();
    var hs_zdcreadPrec125uOff = new $hs.Thunk();
    var hs_sat26DdqH = new $hs.Thunk();
    var hs_sat26DdqI = new $hs.Data(1);
    var hs_sat26DdqJ = new $hs.Thunk();
    var hs_sat26DdqK = new $hs.Thunk();
    var hs_zdcreadListPrec125uOfg = new $hs.Thunk();
    var hs_zdcreadList125uOfh = new $hs.Thunk();
    var hs_zdcreadsPrec125uOfi = new $hs.Thunk();
    var hs_sat26DdqL = new $hs.Thunk();
    var hs_sat26DdqM = new $hs.Thunk();
    var hs_optional325uOfn = new $hs.Thunk();
    var hs_zdcreadPrec225uOfD = new $hs.Thunk();
    var hs_sat26DdqW = new $hs.Thunk();
    var hs_sat26DdqX = new $hs.Data(1);
    var hs_sat26DdqY = new $hs.Thunk();
    var hs_sat26DdqZ = new $hs.Thunk();
    var hs_zdcreadListPrec225uOfE = new $hs.Thunk();
    var hs_zdcreadList225uOfF = new $hs.Thunk();
    var hs_zdcreadsPrec225uOfG = new $hs.Thunk();
    var hs_zdcreadPrec325uOfL = new $hs.Func(1);
    var hs_zdcreadListPrec325uOgr = new $hs.Func(1);
    var hs_zdcreadList325uOgs = new $hs.Func(1);
    var hs_zdcreadsPrec325uOgt = new $hs.Func(1);
    var hs_zdcreadListPrec425uOgN = new $hs.Func(1);
    var hs_zdcreadList425uOgO = new $hs.Func(1);
    var hs_zdcreadsPrec425uOgP = new $hs.Func(1);
    var hs_sat26DdrF = new $hs.Thunk();
    var hs_sat26DdrG = new $hs.Data(1);
    var hs_sat26DdrH = new $hs.Thunk();
    var hs_sat26DdrI = new $hs.Thunk();
    var hs_zdcreadListPrec525uOh9 = new $hs.Thunk();
    var hs_zdcreadList525uOha = new $hs.Thunk();
    var hs_zdcreadsPrec525uOhb = new $hs.Thunk();
    var hs_sat26DdrJ = new $hs.Func(1);
    var hs_zdcreadPrec425uOhg = new $hs.Thunk();
    var hs_sat26DdrK = new $hs.Thunk();
    var hs_sat26DdrL = new $hs.Data(1);
    var hs_sat26DdrM = new $hs.Thunk();
    var hs_sat26DdrN = new $hs.Thunk();
    var hs_zdcreadListPrec625uOhi = new $hs.Thunk();
    var hs_zdcreadList625uOhj = new $hs.Thunk();
    var hs_zdcreadsPrec625uOhk = new $hs.Thunk();
    var hs_sat26DdrO = new $hs.Func(1);
    var hs_zdcreadPrec525uOhp = new $hs.Thunk();
    var hs_sat26DdrP = new $hs.Thunk();
    var hs_sat26DdrQ = new $hs.Data(1);
    var hs_sat26DdrR = new $hs.Thunk();
    var hs_sat26DdrS = new $hs.Thunk();
    var hs_zdcreadListPrec725uOhr = new $hs.Thunk();
    var hs_zdcreadList725uOhs = new $hs.Thunk();
    var hs_zdcreadsPrec725uOht = new $hs.Thunk();
    var hs_sat26DdrT = new $hs.Func(1);
    var hs_zdcreadPrec625uOhy = new $hs.Thunk();
    var hs_sat26DdrU = new $hs.Thunk();
    var hs_sat26DdrV = new $hs.Data(1);
    var hs_sat26DdrW = new $hs.Thunk();
    var hs_sat26DdrX = new $hs.Thunk();
    var hs_zdcreadListPrec825uOhA = new $hs.Thunk();
    var hs_zdcreadList825uOhB = new $hs.Thunk();
    var hs_zdcreadsPrec825uOhC = new $hs.Thunk();
    var hs_sat26DdrY = new $hs.Func(1);
    var hs_zdcreadPrec725uOhH = new $hs.Thunk();
    var hs_sat26DdrZ = new $hs.Thunk();
    var hs_sat26Dds0 = new $hs.Data(1);
    var hs_sat26Dds1 = new $hs.Thunk();
    var hs_sat26Dds2 = new $hs.Thunk();
    var hs_zdcreadListPrec925uOhJ = new $hs.Thunk();
    var hs_zdcreadList925uOhK = new $hs.Thunk();
    var hs_zdcreadsPrec925uOhL = new $hs.Thunk();
    var hs_zdcreadPrec825uOhQ = new $hs.Func(2);
    var hs_zdcreadListPrec1025uOiy = new $hs.Func(2);
    var hs_zdcreadList1025uOiz = new $hs.Func(2);
    var hs_zdcreadsPrec1025uOiA = new $hs.Func(2);
    var hs_sat26Ddsx = new $hs.Thunk();
    var hs_sat26Ddsy = new $hs.Thunk();
    var hs_optional425uOj2 = new $hs.Thunk();
    var hs_zdcreadPrec925uOj6 = new $hs.Thunk();
    var hs_sat26DdsA = new $hs.Thunk();
    var hs_sat26DdsB = new $hs.Data(1);
    var hs_sat26DdsC = new $hs.Thunk();
    var hs_sat26DdsD = new $hs.Thunk();
    var hs_zdcreadListPrec1125uOj7 = new $hs.Thunk();
    var hs_zdcreadList1125uOj8 = new $hs.Thunk();
    var hs_zdcreadsPrec1125uOj9 = new $hs.Thunk();
    var hs_sat26DdsE = new $hs.Thunk();
    var hs_sat26DdsF = new $hs.Thunk();
    var hs_optional525uOje = new $hs.Thunk();
    var hs_zdcreadPrec1025uOjR = new $hs.Thunk();
    var hs_sat26DdsY = new $hs.Thunk();
    var hs_sat26DdsZ = new $hs.Data(1);
    var hs_sat26Ddt0 = new $hs.Thunk();
    var hs_sat26Ddt1 = new $hs.Thunk();
    var hs_zdcreadListPrec1225uOjS = new $hs.Thunk();
    var hs_zdcreadList1225uOjT = new $hs.Thunk();
    var hs_zdcreadsPrec1225uOjU = new $hs.Thunk();
    var hs_sat26Ddt2 = new $hs.Thunk();
    var hs_sat26Ddt3 = new $hs.Thunk();
    var hs_optional625uOjZ = new $hs.Thunk();
    var hs_zdcreadPrec1125uOke = new $hs.Thunk();
    var hs_sat26Ddtg = new $hs.Thunk();
    var hs_sat26Ddth = new $hs.Data(1);
    var hs_sat26Ddti = new $hs.Thunk();
    var hs_sat26Ddtj = new $hs.Thunk();
    var hs_zdcreadListPrec1325uOkf = new $hs.Thunk();
    var hs_zdcreadList1325uOkg = new $hs.Thunk();
    var hs_zdcreadsPrec1325uOkh = new $hs.Thunk();
    var hs_sat26Ddtk = new $hs.Thunk();
    var hs_sat26Ddtl = new $hs.Thunk();
    var hs_optional725uOkm = new $hs.Thunk();
    var hs_zdcreadPrec1225uOl4 = new $hs.Thunk();
    var hs_sat26DdtH = new $hs.Thunk();
    var hs_sat26DdtI = new $hs.Data(1);
    var hs_sat26DdtJ = new $hs.Thunk();
    var hs_sat26DdtK = new $hs.Thunk();
    var hs_zdcreadListPrec1425uOl5 = new $hs.Thunk();
    var hs_zdcreadList1425uOl6 = new $hs.Thunk();
    var hs_zdcreadsPrec1425uOl7 = new $hs.Thunk();
    var hs_sat26DdtP = new $hs.Thunk();
    var hs_sat26DdtY = new $hs.Func(1);
    var hs_readzucomma25s1Gi = new $hs.Thunk();
    var hs_readzutup225s1Gj = new $hs.Func(2);
    var hs_zdcreadPrec1325uOlW = new $hs.Func(3);
    var hs_zdcreadListPrec1525uOmn = new $hs.Func(3);
    var hs_zdcreadList1525uOmo = new $hs.Func(3);
    var hs_zdcreadsPrec1525uOmp = new $hs.Func(3);
    var hs_zdcreadPrec1425uOmZ = new $hs.Func(2);
    var hs_zdcreadListPrec1625uOn9 = new $hs.Func(2);
    var hs_zdcreadList1625uOna = new $hs.Func(2);
    var hs_zdcreadsPrec1625uOnb = new $hs.Func(2);
    var hs_zdcreadPrec1525uOnD = new $hs.Func(3);
    var hs_zdcreadListPrec1725uOoh = new $hs.Func(3);
    var hs_zdcreadList1725uOoi = new $hs.Func(3);
    var hs_zdcreadsPrec1725uOoj = new $hs.Func(3);
    var hs_readzutup425s1Gk = new $hs.Func(4);
    var hs_zdcreadPrec1625uOpl = new $hs.Func(7);
    var hs_zdcreadListPrec1825uOq8 = new $hs.Func(7);
    var hs_zdcreadList1825uOq9 = new $hs.Func(7);
    var hs_zdcreadsPrec1825uOqa = new $hs.Func(7);
    var hs_zdcreadPrec1725uOrg = new $hs.Func(6);
    var hs_zdcreadListPrec1925uOrW = new $hs.Func(6);
    var hs_zdcreadList1925uOrX = new $hs.Func(6);
    var hs_zdcreadsPrec1925uOrY = new $hs.Func(6);
    var hs_zdcreadPrec1825uOsW = new $hs.Func(5);
    var hs_zdcreadListPrec2025uOtv = new $hs.Func(5);
    var hs_zdcreadList2025uOtw = new $hs.Func(5);
    var hs_zdcreadsPrec2025uOtx = new $hs.Func(5);
    var hs_zdcreadPrec1925uOun = new $hs.Func(4);
    var hs_zdcreadListPrec2125uOuB = new $hs.Func(4);
    var hs_zdcreadList2125uOuC = new $hs.Func(4);
    var hs_zdcreadsPrec2125uOuD = new $hs.Func(4);
    var hs_readzutup825s1Gl = new $hs.Func(8);
    var hs_zdcreadPrec2025uOw3 = new $hs.Func(15);
    var hs_zdcreadListPrec2225uOxs = new $hs.Func(15);
    var hs_zdcreadList2225uOxt = new $hs.Func(15);
    var hs_zdcreadsPrec2225uOxu = new $hs.Func(15);
    var hs_zdcreadPrec2125uOzC = new $hs.Func(14);
    var hs_zdcreadListPrec2325uOAU = new $hs.Func(14);
    var hs_zdcreadList2325uOAV = new $hs.Func(14);
    var hs_zdcreadsPrec2325uOAW = new $hs.Func(14);
    var hs_zdcreadPrec2225uOCW = new $hs.Func(13);
    var hs_zdcreadListPrec2425uOE7 = new $hs.Func(13);
    var hs_zdcreadList2425uOE8 = new $hs.Func(13);
    var hs_zdcreadsPrec2425uOE9 = new $hs.Func(13);
    var hs_zdcreadPrec2325uOG1 = new $hs.Func(12);
    var hs_zdcreadListPrec2525uOH5 = new $hs.Func(12);
    var hs_zdcreadList2525uOH6 = new $hs.Func(12);
    var hs_zdcreadsPrec2525uOH7 = new $hs.Func(12);
    var hs_zdcreadPrec2425uOIR = new $hs.Func(11);
    var hs_zdcreadListPrec2625uOJU = new $hs.Func(11);
    var hs_zdcreadList2625uOJV = new $hs.Func(11);
    var hs_zdcreadsPrec2625uOJW = new $hs.Func(11);
    var hs_zdcreadPrec2525uOLy = new $hs.Func(10);
    var hs_zdcreadListPrec2725uOMu = new $hs.Func(10);
    var hs_zdcreadList2725uOMv = new $hs.Func(10);
    var hs_zdcreadsPrec2725uOMw = new $hs.Func(10);
    var hs_zdcreadPrec2625uOO0 = new $hs.Func(9);
    var hs_zdcreadListPrec2825uOOP = new $hs.Func(9);
    var hs_zdcreadList2825uOOQ = new $hs.Func(9);
    var hs_zdcreadsPrec2825uOOR = new $hs.Func(9);
    var hs_zdcreadPrec2725uOQd = new $hs.Func(8);
    var hs_zdcreadListPrec2925uOQz = new $hs.Func(8);
    var hs_zdcreadList2925uOQA = new $hs.Func(8);
    var hs_zdcreadsPrec2925uOQB = new $hs.Func(8);
    this.hs_readsPrec.evaluate = function (hs_tpl26DcF8) {
        var hs_tpl26Ddo8 = hs_tpl26DcF8;
        if (hs_tpl26DcF8.notEvaluated) {
            hs_tpl26Ddo8 = hs_tpl26DcF8.hscall();
        }
        var hs_tpl26DcFe = hs_tpl26Ddo8.data[0];
        if (hs_tpl26DcFe.notEvaluated) {
            return hs_tpl26DcFe.hscall();
        } else {
            return hs_tpl26DcFe;
        }
    };
    this.hs_readList.evaluate = function (hs_tpl26DcFg) {
        var hs_tpl26Ddoc = hs_tpl26DcFg;
        if (hs_tpl26DcFg.notEvaluated) {
            hs_tpl26Ddoc = hs_tpl26DcFg.hscall();
        }
        var hs_tpl26DcFm = hs_tpl26Ddoc.data[1];
        if (hs_tpl26DcFm.notEvaluated) {
            return hs_tpl26DcFm.hscall();
        } else {
            return hs_tpl26DcFm;
        }
    };
    this.hs_readPrec.evaluate = function (hs_tpl26DcFo) {
        var hs_tpl26Ddog = hs_tpl26DcFo;
        if (hs_tpl26DcFo.notEvaluated) {
            hs_tpl26Ddog = hs_tpl26DcFo.hscall();
        }
        var hs_tpl26DcFu = hs_tpl26Ddog.data[2];
        if (hs_tpl26DcFu.notEvaluated) {
            return hs_tpl26DcFu.hscall();
        } else {
            return hs_tpl26DcFu;
        }
    };
    this.hs_readListPrec.evaluate = function (hs_tpl26DcFw) {
        var hs_tpl26Ddok = hs_tpl26DcFw;
        if (hs_tpl26DcFw.notEvaluated) {
            hs_tpl26Ddok = hs_tpl26DcFw.hscall();
        }
        var hs_tpl26DcFC = hs_tpl26Ddok.data[3];
        if (hs_tpl26DcFC.notEvaluated) {
            return hs_tpl26DcFC.hscall();
        } else {
            return hs_tpl26DcFC;
        }
    };
    this.hs_zddmreadListPrec.evaluate = function (hs_zddRead26DcFF) {
        var hs_sat26Ddol = new $hs.Func(1);
        hs_sat26Ddol.evaluate = function (hs_ds26DcFG) {
            return $hs.modules.GHCziRead.hs_readList.hscall(hs_zddRead26DcFF);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readSzutozuPrec.hscall(hs_sat26Ddol);
    };
    this.hs_zddmreadPrec.evaluate = function (hs_zddRead26DcFJ) {
        var hs_sat26Ddom = new $hs.Thunk();
        hs_sat26Ddom.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readsPrec.hscall(hs_zddRead26DcFJ);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readSzutozuPrec.hscall(hs_sat26Ddom);
    };
    this.hs_zddmreadsPrec.evaluate = function (hs_zddRead26DcFM) {
        var hs_sat26Ddon = new $hs.Thunk();
        hs_sat26Ddon.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26DcFM);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddon);
    };
    this.hs_readp.evaluate = function (hs_zddRead26DcFP) {
        var hs_sat26Ddoo = new $hs.Thunk();
        hs_sat26Ddoo.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26DcFP);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuP.hscall(hs_sat26Ddoo, $hs.modules.TextziParserCombinatorsziReadPrec.hs_minPrec);
    };
    hs_convertFrac25s1Gg.evaluate = function (hs_zddFractional26DcFW, hs_eta26DcFT) {
        var hs_wild26Ddoq = hs_eta26DcFT;
        if (hs_eta26DcFT.notEvaluated) {
            hs_wild26Ddoq = hs_eta26DcFT.hscall();
        }
        switch (hs_wild26Ddoq.tag) {
        case 6:
            var hs_i26DcFY = hs_wild26Ddoq.data[0];
            var hs_sat26Ddop = new $hs.Thunk();
            hs_sat26Ddop.evaluateOnce = function () {
                var hs_sat26Ddor = $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional26DcFW);
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26Ddor, hs_i26DcFY);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddop);
        case 7:
            var hs_r26DcG1 = hs_wild26Ddoq.data[0];
            var hs_sat26Ddos = new $hs.Thunk();
            hs_sat26Ddos.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromRational.hscall(hs_zddFractional26DcFW, hs_r26DcG1);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddos);
        default:
            if ($hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.notEvaluated) {
                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.hscall();
            } else {
                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail;
            }
        }
    };
    hs_convertInt25s1Gf.evaluate = function (hs_zddNum26DcG8, hs_ds26DcG5) {
        var hs_wild26Ddou = hs_ds26DcG5;
        if (hs_ds26DcG5.notEvaluated) {
            hs_wild26Ddou = hs_ds26DcG5.hscall();
        }
        switch (hs_wild26Ddou.tag) {
        case 6:
            var hs_i26DcG9 = hs_wild26Ddou.data[0];
            var hs_sat26Ddot = new $hs.Thunk();
            hs_sat26Ddot.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DcG8, hs_i26DcG9);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddot);
        default:
            if ($hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.notEvaluated) {
                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.hscall();
            } else {
                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail;
            }
        }
    };
    this.hs_lexP.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_lift.hscall($hs.modules.TextziReadziLex.hs_lex);
    };
    this.hs_paren.evaluate = function (hs_p26DcGw) {
        var hs_sat26Ddov = new $hs.Func(1);
        hs_sat26Ddov.evaluate = function (hs_ds26DcGi) {
            var hs_fail26DcGh = new $hs.Func(1);
            hs_fail26DcGh.evaluate = function (hs_ds126DcGg) {
                var hs_sat26DdoO = new $hs.Thunk();
                hs_sat26DdoO.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Read.lhs:282:14-23\x00");
                };
                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdoO);
            };
            var hs_wild26DdoC = hs_ds26DcGi;
            if (hs_ds26DcGi.notEvaluated) {
                hs_wild26DdoC = hs_ds26DcGi.hscall();
            }
            switch (hs_wild26DdoC.tag) {
            case 3:
                var hs_ds126DcGl = hs_wild26DdoC.data[0];
                var hs_wild126DdoB = hs_ds126DcGl;
                if (hs_ds126DcGl.notEvaluated) {
                    hs_wild126DdoB = hs_ds126DcGl.hscall();
                }
                switch (hs_wild126DdoB.tag) {
                case 1:
                    return hs_fail26DcGh.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                case 2:
                    var hs_ds226DcGp = hs_wild126DdoB.data[0];
                    var hs_ds326DcGu = hs_wild126DdoB.data[1];
                    var hs_wild226DdoA = hs_ds226DcGp;
                    if (hs_ds226DcGp.notEvaluated) {
                        hs_wild226DdoA = hs_ds226DcGp.hscall();
                    }
                    var hs_ds426DcGs = hs_wild226DdoA.data[0];
                    var hs_ds526Ddoz = hs_ds426DcGs;
                    if (hs_ds426DcGs.notEvaluated) {
                        hs_ds526Ddoz = hs_ds426DcGs.hscall();
                    }
                    switch (hs_ds526Ddoz) {
                    case "(":
                        var hs_wild326Ddoy = hs_ds326DcGu;
                        if (hs_ds326DcGu.notEvaluated) {
                            hs_wild326Ddoy = hs_ds326DcGu.hscall();
                        }
                        switch (hs_wild326Ddoy.tag) {
                        case 1:
                            var hs_sat26DdoE = new $hs.Func(1);
                            hs_sat26DdoE.evaluate = function (hs_x26DcGT) {
                                var hs_sat26DdoF = new $hs.Func(1);
                                hs_sat26DdoF.evaluate = function (hs_ds626DcGF) {
                                    var hs_fail126DcGE = new $hs.Func(1);
                                    hs_fail126DcGE.evaluate = function (hs_ds726DcGD) {
                                        var hs_sat26DdoN = new $hs.Thunk();
                                        hs_sat26DdoN.evaluateOnce = function () {
                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Read.lhs:284:14-23\x00");
                                        };
                                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdoN);
                                    };
                                    var hs_wild426DdoM = hs_ds626DcGF;
                                    if (hs_ds626DcGF.notEvaluated) {
                                        hs_wild426DdoM = hs_ds626DcGF.hscall();
                                    }
                                    switch (hs_wild426DdoM.tag) {
                                    case 3:
                                        var hs_ds726DcGI = hs_wild426DdoM.data[0];
                                        var hs_wild526DdoL = hs_ds726DcGI;
                                        if (hs_ds726DcGI.notEvaluated) {
                                            hs_wild526DdoL = hs_ds726DcGI.hscall();
                                        }
                                        switch (hs_wild526DdoL.tag) {
                                        case 1:
                                            return hs_fail126DcGE.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                        case 2:
                                            var hs_ds826DcGM = hs_wild526DdoL.data[0];
                                            var hs_ds926DcGR = hs_wild526DdoL.data[1];
                                            var hs_wild626DdoK = hs_ds826DcGM;
                                            if (hs_ds826DcGM.notEvaluated) {
                                                hs_wild626DdoK = hs_ds826DcGM.hscall();
                                            }
                                            var hs_ds1026DcGP = hs_wild626DdoK.data[0];
                                            var hs_ds1126DdoJ = hs_ds1026DcGP;
                                            if (hs_ds1026DcGP.notEvaluated) {
                                                hs_ds1126DdoJ = hs_ds1026DcGP.hscall();
                                            }
                                            switch (hs_ds1126DdoJ) {
                                            case ")":
                                                var hs_wild726DdoI = hs_ds926DcGR;
                                                if (hs_ds926DcGR.notEvaluated) {
                                                    hs_wild726DdoI = hs_ds926DcGR.hscall();
                                                }
                                                switch (hs_wild726DdoI.tag) {
                                                case 1:
                                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_x26DcGT);
                                                case 2:
                                                    return hs_fail126DcGE.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                }
                                            default:
                                                return hs_fail126DcGE.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                            }
                                        }
                                    default:
                                        return hs_fail126DcGE.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                    }
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DdoF);
                            };
                            var hs_sat26DdoD = new $hs.Thunk();
                            hs_sat26DdoD.evaluateOnce = function () {
                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_reset.hscall(hs_p26DcGw);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdoD, hs_sat26DdoE);
                        case 2:
                            return hs_fail26DcGh.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        }
                    default:
                        return hs_fail26DcGh.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                }
            default:
                return hs_fail26DcGh.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Ddov);
    };
    this.hs_parens.evaluate = function (hs_p26DcH3) {
        var hs_optional826DcH4 = new $hs.Thunk();
        hs_optional826DcH4.evaluateOnce = function () {
            var hs_sat26DdoP = new $hs.Thunk();
            hs_sat26DdoP.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional826DcH4);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_p26DcH3, hs_sat26DdoP);
        };
        if (hs_optional826DcH4.notEvaluated) {
            return hs_optional826DcH4.hscall();
        } else {
            return hs_optional826DcH4;
        }
    };
    this.hs_list.evaluate = function (hs_readx26DcH9) {
        var hs_listNext26DcHk = new $hs.Thunk();
        var hs_listRest26DcHc = new $hs.Func(1);
        hs_listNext26DcHk.evaluateOnce = function () {
            var hs_sat26Ddpk = new $hs.Func(1);
            hs_sat26Ddpk.evaluate = function (hs_x26DcHf) {
                var hs_sat26Ddpm = new $hs.Func(1);
                hs_sat26Ddpm.evaluate = function (hs_xs26DcHg) {
                    var hs_sat26Ddpn = new $hs.Data(2);
                    hs_sat26Ddpn.data = [hs_x26DcHf, hs_xs26DcHg];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddpn);
                };
                var hs_sat26Ddpl = new $hs.Thunk();
                hs_sat26Ddpl.evaluateOnce = function () {
                    return hs_listRest26DcHc.hscall($hs.modules.GHCziTypes.hs_True);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddpl, hs_sat26Ddpm);
            };
            var hs_sat26Ddpj = new $hs.Thunk();
            hs_sat26Ddpj.evaluateOnce = function () {
                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_reset.hscall(hs_readx26DcH9);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddpj, hs_sat26Ddpk);
        };
        hs_listRest26DcHc.evaluate = function (hs_started26DcHC) {
            var hs_sat26Ddp6 = new $hs.Func(1);
            hs_sat26Ddp6.evaluate = function (hs_ds26DcHn) {
                var hs_wild26Ddpd = hs_ds26DcHn;
                if (hs_ds26DcHn.notEvaluated) {
                    hs_wild26Ddpd = hs_ds26DcHn.hscall();
                }
                switch (hs_wild26Ddpd.tag) {
                case 3:
                    var hs_c26DcHr = hs_wild26Ddpd.data[0];
                    var hs_wild126Ddpc = hs_c26DcHr;
                    if (hs_c26DcHr.notEvaluated) {
                        hs_wild126Ddpc = hs_c26DcHr.hscall();
                    }
                    switch (hs_wild126Ddpc.tag) {
                    case 1:
                        if ($hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.notEvaluated) {
                            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.hscall();
                        } else {
                            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail;
                        }
                    case 2:
                        var hs_ds126DcHv = hs_wild126Ddpc.data[0];
                        var hs_ds226DcHA = hs_wild126Ddpc.data[1];
                        var hs_wild226Ddpb = hs_ds126DcHv;
                        if (hs_ds126DcHv.notEvaluated) {
                            hs_wild226Ddpb = hs_ds126DcHv.hscall();
                        }
                        var hs_ds326DcHy = hs_wild226Ddpb.data[0];
                        var hs_ds426Ddpa = hs_ds326DcHy;
                        if (hs_ds326DcHy.notEvaluated) {
                            hs_ds426Ddpa = hs_ds326DcHy.hscall();
                        }
                        switch (hs_ds426Ddpa) {
                        case ",":
                            var hs_wild326Ddp9 = hs_ds226DcHA;
                            if (hs_ds226DcHA.notEvaluated) {
                                hs_wild326Ddp9 = hs_ds226DcHA.hscall();
                            }
                            switch (hs_wild326Ddp9.tag) {
                            case 1:
                                var hs_wild426Ddpe = hs_started26DcHC;
                                if (hs_started26DcHC.notEvaluated) {
                                    hs_wild426Ddpe = hs_started26DcHC.hscall();
                                }
                                switch (hs_wild426Ddpe.tag) {
                                case 1:
                                    if ($hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.notEvaluated) {
                                        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.hscall();
                                    } else {
                                        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail;
                                    }
                                case 2:
                                    if (hs_listNext26DcHk.notEvaluated) {
                                        return hs_listNext26DcHk.hscall();
                                    } else {
                                        return hs_listNext26DcHk;
                                    }
                                }
                            case 2:
                                if ($hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.notEvaluated) {
                                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.hscall();
                                } else {
                                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail;
                                }
                            }
                        case "]":
                            var hs_wild326Ddph = hs_ds226DcHA;
                            if (hs_ds226DcHA.notEvaluated) {
                                hs_wild326Ddph = hs_ds226DcHA.hscall();
                            }
                            switch (hs_wild326Ddph.tag) {
                            case 1:
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziTypes.hs_ZMZN);
                            case 2:
                                if ($hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.notEvaluated) {
                                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.hscall();
                                } else {
                                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail;
                                }
                            }
                        default:
                            if ($hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.notEvaluated) {
                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.hscall();
                            } else {
                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail;
                            }
                        }
                    }
                default:
                    var hs_sat26Ddpi = new $hs.Thunk();
                    hs_sat26Ddpi.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Read.lhs:306:8-15\x00");
                    };
                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddpi);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Ddp6);
        };
        var hs_ds26DcHL = new $hs.Data(1);
        hs_ds26DcHL.data = [hs_listRest26DcHc, hs_listNext26DcHk];
        var hs_listNext126DcHR = new $hs.Thunk();
        hs_listNext126DcHR.evaluateOnce = function () {
            var hs_ds126Ddp5 = hs_ds26DcHL;
            if (hs_ds26DcHL.notEvaluated) {
                hs_ds126Ddp5 = hs_ds26DcHL.hscall();
            }
            var hs_ds326DcHQ = hs_ds126Ddp5.data[1];
            if (hs_ds326DcHQ.notEvaluated) {
                return hs_ds326DcHQ.hscall();
            } else {
                return hs_ds326DcHQ;
            }
        };
        var hs_optional826DcIm = new $hs.Thunk();
        hs_optional826DcIm.evaluateOnce = function () {
            var hs_sat26DdoR = new $hs.Thunk();
            hs_sat26DdoR.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional826DcIm);
            };
            var hs_sat26DdoQ = new $hs.Thunk();
            hs_sat26DdoQ.evaluateOnce = function () {
                var hs_sat26DdoS = new $hs.Func(1);
                hs_sat26DdoS.evaluate = function (hs_ds126DcHZ) {
                    var hs_fail26DcHY = new $hs.Func(1);
                    hs_fail26DcHY.evaluate = function (hs_ds226DcHX) {
                        var hs_sat26Ddp3 = new $hs.Thunk();
                        hs_sat26Ddp3.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Read.lhs:301:8-17\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddp3);
                    };
                    var hs_wild26DdoZ = hs_ds126DcHZ;
                    if (hs_ds126DcHZ.notEvaluated) {
                        hs_wild26DdoZ = hs_ds126DcHZ.hscall();
                    }
                    switch (hs_wild26DdoZ.tag) {
                    case 3:
                        var hs_ds226DcI2 = hs_wild26DdoZ.data[0];
                        var hs_wild126DdoY = hs_ds226DcI2;
                        if (hs_ds226DcI2.notEvaluated) {
                            hs_wild126DdoY = hs_ds226DcI2.hscall();
                        }
                        switch (hs_wild126DdoY.tag) {
                        case 1:
                            return hs_fail26DcHY.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        case 2:
                            var hs_ds326DcI6 = hs_wild126DdoY.data[0];
                            var hs_ds426DcIb = hs_wild126DdoY.data[1];
                            var hs_wild226DdoX = hs_ds326DcI6;
                            if (hs_ds326DcI6.notEvaluated) {
                                hs_wild226DdoX = hs_ds326DcI6.hscall();
                            }
                            var hs_ds526DcI9 = hs_wild226DdoX.data[0];
                            var hs_ds626DdoW = hs_ds526DcI9;
                            if (hs_ds526DcI9.notEvaluated) {
                                hs_ds626DdoW = hs_ds526DcI9.hscall();
                            }
                            switch (hs_ds626DdoW) {
                            case "[":
                                var hs_wild326DdoV = hs_ds426DcIb;
                                if (hs_ds426DcIb.notEvaluated) {
                                    hs_wild326DdoV = hs_ds426DcIb.hscall();
                                }
                                switch (hs_wild326DdoV.tag) {
                                case 1:
                                    var hs_sat26Ddp0 = new $hs.Thunk();
                                    hs_sat26Ddp0.evaluateOnce = function () {
                                        var hs_ds726Ddp2 = hs_ds26DcHL;
                                        if (hs_ds26DcHL.notEvaluated) {
                                            hs_ds726Ddp2 = hs_ds26DcHL.hscall();
                                        }
                                        var hs_ds826DcIg = hs_ds726Ddp2.data[0];
                                        return hs_ds826DcIg.hscall($hs.modules.GHCziTypes.hs_False);
                                    };
                                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26Ddp0, hs_listNext126DcHR);
                                case 2:
                                    return hs_fail26DcHY.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                }
                            default:
                                return hs_fail26DcHY.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            }
                        }
                    default:
                        return hs_fail26DcHY.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DdoS);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DdoQ, hs_sat26DdoR);
        };
        if (hs_optional826DcIm.notEvaluated) {
            return hs_optional826DcIm.hscall();
        } else {
            return hs_optional826DcIm;
        }
    };
    this.hs_zddmreadList.evaluate = function (hs_zddRead26DcIp) {
        var hs_sat26Ddpp = new $hs.Data(1);
        hs_sat26Ddpp.data = [0];
        var hs_sat26Ddpo = new $hs.Thunk();
        hs_sat26Ddpo.evaluateOnce = function () {
            var hs_sat26Ddpq = new $hs.Thunk();
            hs_sat26Ddpq.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26DcIp);
            };
            return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26Ddpq);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddpo, hs_sat26Ddpp);
    };
    hs_zddEq25uOcd.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdfEqZMZN.hscall($hs.modules.GHCziClasses.hs_zdfEqChar);
    };
    this.hs_choose.evaluate = function (hs_sps26DcIO) {
        var hs_sat26Ddpr = new $hs.Thunk();
        hs_sat26Ddpr.evaluateOnce = function () {
            var hs_sat26Ddps = new $hs.Func(1);
            hs_sat26Ddps.evaluate = function (hs_ds26DcIw) {
                var hs_wild26Ddpu = hs_ds26DcIw;
                if (hs_ds26DcIw.notEvaluated) {
                    hs_wild26Ddpu = hs_ds26DcIw.hscall();
                }
                var hs_s26DcIE = hs_wild26Ddpu.data[0];
                var hs_p26DcIH = hs_wild26Ddpu.data[1];
                var hs_sat26Ddpt = new $hs.Func(1);
                hs_sat26Ddpt.evaluate = function (hs_token26DcIB) {
                    var hs_wild126Ddpv = hs_token26DcIB;
                    if (hs_token26DcIB.notEvaluated) {
                        hs_wild126Ddpv = hs_token26DcIB.hscall();
                    }
                    switch (hs_wild126Ddpv.tag) {
                    case 4:
                        var hs_szq26DcIF = hs_wild126Ddpv.data[0];
                        var hs_wild226Ddpw = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq25uOcd, hs_s26DcIE, hs_szq26DcIF);
                        switch (hs_wild226Ddpw.tag) {
                        case 1:
                            if ($hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.notEvaluated) {
                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.hscall();
                            } else {
                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail;
                            }
                        case 2:
                            if (hs_p26DcIH.notEvaluated) {
                                return hs_p26DcIH.hscall();
                            } else {
                                return hs_p26DcIH;
                            }
                        }
                    case 5:
                        var hs_szq26DcIJ = hs_wild126Ddpv.data[0];
                        var hs_wild226Ddpx = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq25uOcd, hs_s26DcIE, hs_szq26DcIJ);
                        switch (hs_wild226Ddpx.tag) {
                        case 1:
                            if ($hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.notEvaluated) {
                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.hscall();
                            } else {
                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail;
                            }
                        case 2:
                            if (hs_p26DcIH.notEvaluated) {
                                return hs_p26DcIH.hscall();
                            } else {
                                return hs_p26DcIH;
                            }
                        }
                    default:
                        if ($hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.notEvaluated) {
                            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.hscall();
                        } else {
                            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail;
                        }
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Ddpt);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp, hs_sat26Ddps);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26Ddpr, $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail, hs_sps26DcIO);
    };
    hs_readNumber25s1Ge.evaluate = function (hs_zddNum26DcJd, hs_convert26DcIW) {
        var hs_optional826DcJm = new $hs.Thunk();
        hs_optional826DcJm.evaluateOnce = function () {
            var hs_sat26Ddpz = new $hs.Thunk();
            hs_sat26Ddpz.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional826DcJm);
            };
            var hs_sat26Ddpy = new $hs.Thunk();
            hs_sat26Ddpy.evaluateOnce = function () {
                var hs_sat26DdpA = new $hs.Func(1);
                hs_sat26DdpA.evaluate = function (hs_x26DcIT) {
                    var hs_wild26DcIV = hs_x26DcIT;
                    if (hs_x26DcIT.notEvaluated) {
                        hs_wild26DcIV = hs_x26DcIT.hscall();
                    }
                    switch (hs_wild26DcIV.tag) {
                    case 5:
                        var hs_ds26DcIY = hs_wild26DcIV.data[0];
                        var hs_wild126DdpG = hs_ds26DcIY;
                        if (hs_ds26DcIY.notEvaluated) {
                            hs_wild126DdpG = hs_ds26DcIY.hscall();
                        }
                        switch (hs_wild126DdpG.tag) {
                        case 1:
                            return hs_convert26DcIW.hscall(hs_wild26DcIV);
                        case 2:
                            var hs_ds126DcJ2 = hs_wild126DdpG.data[0];
                            var hs_ds226DcJ7 = hs_wild126DdpG.data[1];
                            var hs_wild226DdpF = hs_ds126DcJ2;
                            if (hs_ds126DcJ2.notEvaluated) {
                                hs_wild226DdpF = hs_ds126DcJ2.hscall();
                            }
                            var hs_ds326DcJ5 = hs_wild226DdpF.data[0];
                            var hs_ds426DdpE = hs_ds326DcJ5;
                            if (hs_ds326DcJ5.notEvaluated) {
                                hs_ds426DdpE = hs_ds326DcJ5.hscall();
                            }
                            switch (hs_ds426DdpE) {
                            case "-":
                                var hs_wild326DdpD = hs_ds226DcJ7;
                                if (hs_ds226DcJ7.notEvaluated) {
                                    hs_wild326DdpD = hs_ds226DcJ7.hscall();
                                }
                                switch (hs_wild326DdpD.tag) {
                                case 1:
                                    var hs_sat26DdpH = new $hs.Func(1);
                                    hs_sat26DdpH.evaluate = function (hs_y26DcJa) {
                                        var hs_sat26DdpJ = new $hs.Func(1);
                                        hs_sat26DdpJ.evaluate = function (hs_n26DcJe) {
                                            var hs_sat26DdpK = new $hs.Thunk();
                                            hs_sat26DdpK.evaluateOnce = function () {
                                                return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26DcJd, hs_n26DcJe);
                                            };
                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdpK);
                                        };
                                        var hs_sat26DdpI = new $hs.Thunk();
                                        hs_sat26DdpI.evaluateOnce = function () {
                                            return hs_convert26DcIW.hscall(hs_y26DcJa);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdpI, hs_sat26DdpJ);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DdpH);
                                case 2:
                                    return hs_convert26DcIW.hscall(hs_wild26DcIV);
                                }
                            default:
                                return hs_convert26DcIW.hscall(hs_wild26DcIV);
                            }
                        }
                    default:
                        return hs_convert26DcIW.hscall(hs_wild26DcIV);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DdpA);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26Ddpy, hs_sat26Ddpz);
        };
        if (hs_optional826DcJm.notEvaluated) {
            return hs_optional826DcJm.hscall();
        } else {
            return hs_optional826DcJm;
        }
    };
    hs_sat26DdpL.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadP.hs_munch1.hscall($hs.modules.GHCziUnicode.hs_isDigit);
    };
    this.hs_lexDigits.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadP.hs_readPzutozuS.hscall(hs_sat26DdpL);
    };
    this.hs_readLitChar.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadP.hs_readPzutozuS.hscall($hs.modules.TextziReadziLex.hs_lexChar);
    };
    this.hs_lex.evaluate = function (hs_s26DcJq) {
        return $hs.modules.TextziParserCombinatorsziReadP.hs_readPzutozuS.hscall($hs.modules.TextziReadziLex.hs_hsLex, hs_s26DcJq);
    };
    this.hs_readListPrecDefault.evaluate = function (hs_zddRead26DcJs) {
        var hs_sat26DdpM = new $hs.Thunk();
        hs_sat26DdpM.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26DcJs);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DdpM);
    };
    this.hs_readListDefault.evaluate = function (hs_zddRead26DcJv) {
        var hs_sat26DdpO = new $hs.Data(1);
        hs_sat26DdpO.data = [0];
        var hs_sat26DdpN = new $hs.Thunk();
        hs_sat26DdpN.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_zddRead26DcJv);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdpN, hs_sat26DdpO);
    };
    this.hs_readParen.evaluate = function (hs_b26DcKI, hs_g26DcK1, hs_eta26DcKK) {
        var hs_mandatory26DcK3 = new $hs.Func(1);
        hs_mandatory26DcK3.evaluate = function (hs_r26DcJD) {
            var hs_sat26DdpT = new $hs.Func(1);
            hs_sat26DdpT.evaluate = function (hs_ds26DcJL) {
                var hs_fail26DcJK = new $hs.Func(1);
                hs_fail26DcJK.evaluate = function (hs_ds126DcJJ) {
                    var hs_sat26Ddqh = new $hs.Thunk();
                    hs_sat26Ddqh.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Read.lhs:92:33-39\x00");
                    };
                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26Ddqh);
                };
                var hs_wild26Ddq0 = hs_ds26DcJL;
                if (hs_ds26DcJL.notEvaluated) {
                    hs_wild26Ddq0 = hs_ds26DcJL.hscall();
                }
                var hs_ds126DcJP = hs_wild26Ddq0.data[0];
                var hs_s26DcK0 = hs_wild26Ddq0.data[1];
                var hs_wild126DdpZ = hs_ds126DcJP;
                if (hs_ds126DcJP.notEvaluated) {
                    hs_wild126DdpZ = hs_ds126DcJP.hscall();
                }
                switch (hs_wild126DdpZ.tag) {
                case 1:
                    return hs_fail26DcJK.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                case 2:
                    var hs_ds226DcJT = hs_wild126DdpZ.data[0];
                    var hs_ds326DcJY = hs_wild126DdpZ.data[1];
                    var hs_wild226DdpY = hs_ds226DcJT;
                    if (hs_ds226DcJT.notEvaluated) {
                        hs_wild226DdpY = hs_ds226DcJT.hscall();
                    }
                    var hs_ds426DcJW = hs_wild226DdpY.data[0];
                    var hs_ds526DdpX = hs_ds426DcJW;
                    if (hs_ds426DcJW.notEvaluated) {
                        hs_ds526DdpX = hs_ds426DcJW.hscall();
                    }
                    switch (hs_ds526DdpX) {
                    case "(":
                        var hs_wild326DdpW = hs_ds326DcJY;
                        if (hs_ds326DcJY.notEvaluated) {
                            hs_wild326DdpW = hs_ds326DcJY.hscall();
                        }
                        switch (hs_wild326DdpW.tag) {
                        case 1:
                            var hs_sat26Ddq2 = new $hs.Func(1);
                            hs_sat26Ddq2.evaluate = function (hs_ds626DcK7) {
                                var hs_wild426Ddq6 = hs_ds626DcK7;
                                if (hs_ds626DcK7.notEvaluated) {
                                    hs_wild426Ddq6 = hs_ds626DcK7.hscall();
                                }
                                var hs_x26DcKy = hs_wild426Ddq6.data[0];
                                var hs_t26DcKb = hs_wild426Ddq6.data[1];
                                var hs_sat26Ddq7 = new $hs.Func(1);
                                hs_sat26Ddq7.evaluate = function (hs_ds726DcKj) {
                                    var hs_fail126DcKi = new $hs.Func(1);
                                    hs_fail126DcKi.evaluate = function (hs_ds826DcKh) {
                                        var hs_sat26Ddqg = new $hs.Thunk();
                                        hs_sat26Ddqg.evaluateOnce = function () {
                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Read.lhs:94:33-39\x00");
                                        };
                                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26Ddqg);
                                    };
                                    var hs_wild526Ddqe = hs_ds726DcKj;
                                    if (hs_ds726DcKj.notEvaluated) {
                                        hs_wild526Ddqe = hs_ds726DcKj.hscall();
                                    }
                                    var hs_ds826DcKn = hs_wild526Ddqe.data[0];
                                    var hs_u26DcKz = hs_wild526Ddqe.data[1];
                                    var hs_wild626Ddqd = hs_ds826DcKn;
                                    if (hs_ds826DcKn.notEvaluated) {
                                        hs_wild626Ddqd = hs_ds826DcKn.hscall();
                                    }
                                    switch (hs_wild626Ddqd.tag) {
                                    case 1:
                                        return hs_fail126DcKi.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                    case 2:
                                        var hs_ds926DcKr = hs_wild626Ddqd.data[0];
                                        var hs_ds1026DcKw = hs_wild626Ddqd.data[1];
                                        var hs_wild726Ddqc = hs_ds926DcKr;
                                        if (hs_ds926DcKr.notEvaluated) {
                                            hs_wild726Ddqc = hs_ds926DcKr.hscall();
                                        }
                                        var hs_ds1126DcKu = hs_wild726Ddqc.data[0];
                                        var hs_ds1226Ddqb = hs_ds1126DcKu;
                                        if (hs_ds1126DcKu.notEvaluated) {
                                            hs_ds1226Ddqb = hs_ds1126DcKu.hscall();
                                        }
                                        switch (hs_ds1226Ddqb) {
                                        case ")":
                                            var hs_wild826Ddqa = hs_ds1026DcKw;
                                            if (hs_ds1026DcKw.notEvaluated) {
                                                hs_wild826Ddqa = hs_ds1026DcKw.hscall();
                                            }
                                            switch (hs_wild826Ddqa.tag) {
                                            case 1:
                                                var hs_sat26Ddqf = new $hs.Data(1);
                                                hs_sat26Ddqf.data = [hs_x26DcKy, hs_u26DcKz];
                                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26Ddqf);
                                            case 2:
                                                return hs_fail126DcKi.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                            }
                                        default:
                                            return hs_fail126DcKi.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                        }
                                    }
                                };
                                var hs_sat26Ddq5 = new $hs.Thunk();
                                hs_sat26Ddq5.evaluateOnce = function () {
                                    return $hs.modules.TextziParserCombinatorsziReadP.hs_readPzutozuS.hscall($hs.modules.TextziReadziLex.hs_hsLex, hs_t26DcKb);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26Ddq5, hs_sat26Ddq7);
                            };
                            var hs_sat26Ddq1 = new $hs.Thunk();
                            hs_sat26Ddq1.evaluateOnce = function () {
                                var hs_sat26Ddq4 = new $hs.Thunk();
                                hs_sat26Ddq4.evaluateOnce = function () {
                                    return hs_mandatory26DcK3.hscall(hs_s26DcK0);
                                };
                                var hs_sat26Ddq3 = new $hs.Thunk();
                                hs_sat26Ddq3.evaluateOnce = function () {
                                    return hs_g26DcK1.hscall(hs_s26DcK0);
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Ddq3, hs_sat26Ddq4);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26Ddq1, hs_sat26Ddq2);
                        case 2:
                            return hs_fail26DcJK.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        }
                    default:
                        return hs_fail26DcJK.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                }
            };
            var hs_sat26DdpS = new $hs.Thunk();
            hs_sat26DdpS.evaluateOnce = function () {
                return $hs.modules.TextziParserCombinatorsziReadP.hs_readPzutozuS.hscall($hs.modules.TextziReadziLex.hs_hsLex, hs_r26DcJD);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26DdpS, hs_sat26DdpT);
        };
        var hs_wild26DdpP = hs_b26DcKI;
        if (hs_b26DcKI.notEvaluated) {
            hs_wild26DdpP = hs_b26DcKI.hscall();
        }
        switch (hs_wild26DdpP.tag) {
        case 1:
            var hs_sat26DdpR = new $hs.Thunk();
            hs_sat26DdpR.evaluateOnce = function () {
                return hs_mandatory26DcK3.hscall(hs_eta26DcKK);
            };
            var hs_sat26DdpQ = new $hs.Thunk();
            hs_sat26DdpQ.evaluateOnce = function () {
                return hs_g26DcK1.hscall(hs_eta26DcKK);
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DdpQ, hs_sat26DdpR);
        case 2:
            return hs_mandatory26DcK3.hscall(hs_eta26DcKK);
        }
    };
    hs_sat26Ddqi.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional25uOex);
    };
    hs_sat26Ddqj.evaluateOnce = function () {
        var hs_sat26Ddqk = new $hs.Func(1);
        hs_sat26Ddqk.evaluate = function (hs_ds26DcKP) {
            var hs_wild26Ddql = hs_ds26DcKP;
            if (hs_ds26DcKP.notEvaluated) {
                hs_wild26Ddql = hs_ds26DcKP.hscall();
            }
            switch (hs_wild26Ddql.tag) {
            case 1:
                var hs_c26DcKT = hs_wild26Ddql.data[0];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_c26DcKT);
            default:
                var hs_sat26Ddqm = new $hs.Thunk();
                hs_sat26Ddqm.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Read.lhs:343:10-17\x00");
                };
                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddqm);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Ddqk);
    };
    hs_optional25uOex.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26Ddqj, hs_sat26Ddqi);
    };
    hs_zdcreadPrec25uOeH.evaluateOnce = function () {
        if (hs_optional25uOex.notEvaluated) {
            return hs_optional25uOex.hscall();
        } else {
            return hs_optional25uOex;
        }
    };
    hs_sat26Ddqn.data = [0];
    hs_sat26Ddqo.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrec.hscall($hs.modules.GHCziRead.hs_zdfReadChar);
    };
    hs_sat26Ddqp.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadChar);
    };
    hs_sat26Ddqq.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional125uOeL);
    };
    hs_sat26Ddqr.evaluateOnce = function () {
        var hs_sat26Ddqt = new $hs.Thunk();
        hs_sat26Ddqt.evaluateOnce = function () {
            var hs_sat26Ddqx = new $hs.Thunk();
            hs_sat26Ddqx.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadChar);
            };
            return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26Ddqx);
        };
        var hs_sat26Ddqs = new $hs.Thunk();
        hs_sat26Ddqs.evaluateOnce = function () {
            var hs_sat26Ddqu = new $hs.Func(1);
            hs_sat26Ddqu.evaluate = function (hs_ds26DcL6) {
                var hs_wild26Ddqv = hs_ds26DcL6;
                if (hs_ds26DcL6.notEvaluated) {
                    hs_wild26Ddqv = hs_ds26DcL6.hscall();
                }
                switch (hs_wild26Ddqv.tag) {
                case 2:
                    var hs_s26DcLa = hs_wild26Ddqv.data[0];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_s26DcLa);
                default:
                    var hs_sat26Ddqw = new $hs.Thunk();
                    hs_sat26Ddqw.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Read.lhs:349:10-19\x00");
                    };
                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddqw);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Ddqu);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26Ddqs, hs_sat26Ddqt);
    };
    hs_zdcreadListPrec25uOeI.evaluateOnce = function () {
        if (hs_optional125uOeL.notEvaluated) {
            return hs_optional125uOeL.hscall();
        } else {
            return hs_optional125uOeL;
        }
    };
    this.hs_zdfReadChar.data = [hs_zdcreadsPrec25uOeK, hs_zdcreadList25uOeJ, hs_optional25uOex, hs_optional125uOeL];
    hs_zdcreadList25uOeJ.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddqo, hs_sat26Ddqn);
    };
    hs_zdcreadsPrec25uOeK.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddqp);
    };
    hs_optional125uOeL.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26Ddqr, hs_sat26Ddqq);
    };
    hs_sat26Ddqy.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional225uOf1);
    };
    hs_sat26Ddqz.evaluateOnce = function () {
        var hs_sat26DdqA = new $hs.Func(1);
        hs_sat26DdqA.evaluate = function (hs_ds26DcLj) {
            var hs_wild26DdqB = hs_ds26DcLj;
            if (hs_ds26DcLj.notEvaluated) {
                hs_wild26DdqB = hs_ds26DcLj.hscall();
            }
            switch (hs_wild26DdqB.tag) {
            case 4:
                var hs_s26DcLn = hs_wild26DdqB.data[0];
                var hs_sat26DdqC = new $hs.Thunk();
                hs_sat26DdqC.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("False\x00");
                };
                var hs_wild126DdqD = $hs.modules.GHCziBase.hs_eqString.hscall(hs_s26DcLn, hs_sat26DdqC);
                switch (hs_wild126DdqD.tag) {
                case 1:
                    var hs_sat26DdqE = new $hs.Thunk();
                    hs_sat26DdqE.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("True\x00");
                    };
                    var hs_wild226DdqF = $hs.modules.GHCziBase.hs_eqString.hscall(hs_s26DcLn, hs_sat26DdqE);
                    switch (hs_wild226DdqF.tag) {
                    case 1:
                        if ($hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.notEvaluated) {
                            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.hscall();
                        } else {
                            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail;
                        }
                    case 2:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziTypes.hs_True);
                    }
                case 2:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziTypes.hs_False);
                }
            default:
                var hs_sat26DdqG = new $hs.Thunk();
                hs_sat26DdqG.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Read.lhs:360:10-18\x00");
                };
                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdqG);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DdqA);
    };
    hs_optional225uOf1.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26Ddqz, hs_sat26Ddqy);
    };
    hs_zdcreadPrec125uOff.evaluateOnce = function () {
        if (hs_optional225uOf1.notEvaluated) {
            return hs_optional225uOf1.hscall();
        } else {
            return hs_optional225uOf1;
        }
    };
    hs_sat26DdqH.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadBool);
    };
    hs_sat26DdqI.data = [0];
    hs_sat26DdqJ.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrec.hscall($hs.modules.GHCziRead.hs_zdfReadBool);
    };
    hs_sat26DdqK.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadBool);
    };
    this.hs_zdfReadBool.data = [hs_zdcreadsPrec125uOfi, hs_zdcreadList125uOfh, hs_optional225uOf1, hs_zdcreadListPrec125uOfg];
    hs_zdcreadListPrec125uOfg.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DdqH);
    };
    hs_zdcreadList125uOfh.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdqJ, hs_sat26DdqI);
    };
    hs_zdcreadsPrec125uOfi.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdqK);
    };
    hs_sat26DdqL.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional325uOfn);
    };
    hs_sat26DdqM.evaluateOnce = function () {
        var hs_sat26DdqN = new $hs.Func(1);
        hs_sat26DdqN.evaluate = function (hs_ds26DcLF) {
            var hs_wild26DdqO = hs_ds26DcLF;
            if (hs_ds26DcLF.notEvaluated) {
                hs_wild26DdqO = hs_ds26DcLF.hscall();
            }
            switch (hs_wild26DdqO.tag) {
            case 4:
                var hs_s26DcLJ = hs_wild26DdqO.data[0];
                var hs_sat26DdqP = new $hs.Thunk();
                hs_sat26DdqP.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("EQ\x00");
                };
                var hs_wild126DdqQ = $hs.modules.GHCziBase.hs_eqString.hscall(hs_s26DcLJ, hs_sat26DdqP);
                switch (hs_wild126DdqQ.tag) {
                case 1:
                    var hs_sat26DdqR = new $hs.Thunk();
                    hs_sat26DdqR.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GT\x00");
                    };
                    var hs_wild226DdqS = $hs.modules.GHCziBase.hs_eqString.hscall(hs_s26DcLJ, hs_sat26DdqR);
                    switch (hs_wild226DdqS.tag) {
                    case 1:
                        var hs_sat26DdqT = new $hs.Thunk();
                        hs_sat26DdqT.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("LT\x00");
                        };
                        var hs_wild326DdqU = $hs.modules.GHCziBase.hs_eqString.hscall(hs_s26DcLJ, hs_sat26DdqT);
                        switch (hs_wild326DdqU.tag) {
                        case 1:
                            if ($hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.notEvaluated) {
                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.hscall();
                            } else {
                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail;
                            }
                        case 2:
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziOrdering.hs_LT);
                        }
                    case 2:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziOrdering.hs_GT);
                    }
                case 2:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziOrdering.hs_EQ);
                }
            default:
                var hs_sat26DdqV = new $hs.Thunk();
                hs_sat26DdqV.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Read.lhs:373:10-18\x00");
                };
                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdqV);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DdqN);
    };
    hs_optional325uOfn.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DdqM, hs_sat26DdqL);
    };
    hs_zdcreadPrec225uOfD.evaluateOnce = function () {
        if (hs_optional325uOfn.notEvaluated) {
            return hs_optional325uOfn.hscall();
        } else {
            return hs_optional325uOfn;
        }
    };
    hs_sat26DdqW.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadOrdering);
    };
    hs_sat26DdqX.data = [0];
    hs_sat26DdqY.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrec.hscall($hs.modules.GHCziRead.hs_zdfReadOrdering);
    };
    hs_sat26DdqZ.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadOrdering);
    };
    this.hs_zdfReadOrdering.data = [hs_zdcreadsPrec225uOfG, hs_zdcreadList225uOfF, hs_optional325uOfn, hs_zdcreadListPrec225uOfE];
    hs_zdcreadListPrec225uOfE.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DdqW);
    };
    hs_zdcreadList225uOfF.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdqY, hs_sat26DdqX);
    };
    hs_zdcreadsPrec225uOfG.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdqZ);
    };
    hs_zdcreadPrec325uOfL.evaluate = function (hs_zddRead26DcMu) {
        var hs_optional826DcMF = new $hs.Thunk();
        hs_optional826DcMF.evaluateOnce = function () {
            var hs_sat26Ddr1 = new $hs.Thunk();
            hs_sat26Ddr1.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional826DcMF);
            };
            var hs_sat26Ddr0 = new $hs.Thunk();
            hs_sat26Ddr0.evaluateOnce = function () {
                var hs_sat26Ddr3 = new $hs.Thunk();
                hs_sat26Ddr3.evaluateOnce = function () {
                    var hs_sat26Ddr9 = new $hs.Thunk();
                    hs_sat26Ddr9.evaluateOnce = function () {
                        var hs_sat26Ddra = new $hs.Func(1);
                        hs_sat26Ddra.evaluate = function (hs_ds26DcMo) {
                            var hs_fail26DcMn = new $hs.Func(1);
                            hs_fail26DcMn.evaluate = function (hs_ds126DcMm) {
                                var hs_sat26Ddri = new $hs.Thunk();
                                hs_sat26Ddri.evaluateOnce = function () {
                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Read.lhs:421:12-25\x00");
                                };
                                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddri);
                            };
                            var hs_wild26Ddrc = hs_ds26DcMo;
                            if (hs_ds26DcMo.notEvaluated) {
                                hs_wild26Ddrc = hs_ds26DcMo.hscall();
                            }
                            switch (hs_wild26Ddrc.tag) {
                            case 4:
                                var hs_ds126DcMr = hs_wild26Ddrc.data[0];
                                var hs_sat26Ddrd = new $hs.Thunk();
                                hs_sat26Ddrd.evaluateOnce = function () {
                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Just\x00");
                                };
                                var hs_wild126Ddre = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126DcMr, hs_sat26Ddrd);
                                switch (hs_wild126Ddre.tag) {
                                case 1:
                                    return hs_fail26DcMn.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                case 2:
                                    var hs_sat26Ddrf = new $hs.Func(1);
                                    hs_sat26Ddrf.evaluate = function (hs_x26DcMy) {
                                        var hs_sat26Ddrh = new $hs.Data(2);
                                        hs_sat26Ddrh.data = [hs_x26DcMy];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddrh);
                                    };
                                    var hs_sat26Ddrb = new $hs.Thunk();
                                    hs_sat26Ddrb.evaluateOnce = function () {
                                        var hs_sat26Ddrg = new $hs.Thunk();
                                        hs_sat26Ddrg.evaluateOnce = function () {
                                            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26DcMu);
                                        };
                                        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_step.hscall(hs_sat26Ddrg);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddrb, hs_sat26Ddrf);
                                }
                            default:
                                return hs_fail26DcMn.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Ddra);
                    };
                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall($hs.modules.GHCziShow.hs_appPrec, hs_sat26Ddr9);
                };
                var hs_sat26Ddr2 = new $hs.Thunk();
                hs_sat26Ddr2.evaluateOnce = function () {
                    var hs_sat26Ddr4 = new $hs.Func(1);
                    hs_sat26Ddr4.evaluate = function (hs_ds26DcMa) {
                        var hs_fail26DcM9 = new $hs.Func(1);
                        hs_fail26DcM9.evaluate = function (hs_ds126DcM8) {
                            var hs_sat26Ddr8 = new $hs.Thunk();
                            hs_sat26Ddr8.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Read.lhs:417:9-25\x00");
                            };
                            return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddr8);
                        };
                        var hs_wild26Ddr5 = hs_ds26DcMa;
                        if (hs_ds26DcMa.notEvaluated) {
                            hs_wild26Ddr5 = hs_ds26DcMa.hscall();
                        }
                        switch (hs_wild26Ddr5.tag) {
                        case 4:
                            var hs_ds126DcMd = hs_wild26Ddr5.data[0];
                            var hs_sat26Ddr6 = new $hs.Thunk();
                            hs_sat26Ddr6.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Nothing\x00");
                            };
                            var hs_wild126Ddr7 = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126DcMd, hs_sat26Ddr6);
                            switch (hs_wild126Ddr7.tag) {
                            case 1:
                                return hs_fail26DcM9.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            case 2:
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziMaybe.hs_Nothing);
                            }
                        default:
                            return hs_fail26DcM9.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Ddr4);
                };
                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26Ddr2, hs_sat26Ddr3);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26Ddr0, hs_sat26Ddr1);
        };
        if (hs_optional826DcMF.notEvaluated) {
            return hs_optional826DcMF.hscall();
        } else {
            return hs_optional826DcMF;
        }
    };
    this.hs_zdfReadMaybe.evaluate = function (hs_zddRead26DcML) {
        var hs_sat26Ddrk = new $hs.Thunk();
        hs_sat26Ddrk.evaluateOnce = function () {
            return hs_zdcreadListPrec325uOgr.hscall(hs_zddRead26DcML);
        };
        var hs_sat26Ddrl = new $hs.Thunk();
        hs_sat26Ddrl.evaluateOnce = function () {
            return hs_zdcreadPrec325uOfL.hscall(hs_zddRead26DcML);
        };
        var hs_sat26Ddrm = new $hs.Thunk();
        hs_sat26Ddrm.evaluateOnce = function () {
            return hs_zdcreadList325uOgs.hscall(hs_zddRead26DcML);
        };
        var hs_sat26Ddrj = new $hs.Thunk();
        hs_sat26Ddrj.evaluateOnce = function () {
            return hs_zdcreadsPrec325uOgt.hscall(hs_zddRead26DcML);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddrj, hs_sat26Ddrm, hs_sat26Ddrl, hs_sat26Ddrk];
        return $res;
    };
    hs_zdcreadListPrec325uOgr.evaluate = function (hs_zddRead26DcMR) {
        var hs_sat26Ddrn = new $hs.Thunk();
        hs_sat26Ddrn.evaluateOnce = function () {
            var hs_sat26Ddro = $hs.modules.GHCziRead.hs_zdfReadMaybe.hscall(hs_zddRead26DcMR);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26Ddro);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26Ddrn);
    };
    hs_zdcreadList325uOgs.evaluate = function (hs_zddRead26DcMV) {
        var hs_sat26Ddrq = new $hs.Data(1);
        hs_sat26Ddrq.data = [0];
        var hs_sat26Ddrp = new $hs.Thunk();
        hs_sat26Ddrp.evaluateOnce = function () {
            var hs_sat26Ddrr = $hs.modules.GHCziRead.hs_zdfReadMaybe.hscall(hs_zddRead26DcMV);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26Ddrr);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddrp, hs_sat26Ddrq);
    };
    hs_zdcreadsPrec325uOgt.evaluate = function (hs_zddRead26DcN0) {
        var hs_sat26Ddrs = new $hs.Thunk();
        hs_sat26Ddrs.evaluateOnce = function () {
            var hs_sat26Ddrt = $hs.modules.GHCziRead.hs_zdfReadMaybe.hscall(hs_zddRead26DcN0);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26Ddrt);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddrs);
    };
    this.hs_zdfReadZMZN.evaluate = function (hs_zddRead26DcN7) {
        var hs_sat26Ddrv = new $hs.Thunk();
        hs_sat26Ddrv.evaluateOnce = function () {
            return hs_zdcreadListPrec425uOgN.hscall(hs_zddRead26DcN7);
        };
        var hs_sat26Ddrw = new $hs.Thunk();
        hs_sat26Ddrw.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_zddRead26DcN7);
        };
        var hs_sat26Ddrx = new $hs.Thunk();
        hs_sat26Ddrx.evaluateOnce = function () {
            return hs_zdcreadList425uOgO.hscall(hs_zddRead26DcN7);
        };
        var hs_sat26Ddru = new $hs.Thunk();
        hs_sat26Ddru.evaluateOnce = function () {
            return hs_zdcreadsPrec425uOgP.hscall(hs_zddRead26DcN7);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddru, hs_sat26Ddrx, hs_sat26Ddrw, hs_sat26Ddrv];
        return $res;
    };
    hs_zdcreadListPrec425uOgN.evaluate = function (hs_zddRead26DcNd) {
        var hs_sat26Ddry = new $hs.Thunk();
        hs_sat26Ddry.evaluateOnce = function () {
            var hs_sat26Ddrz = $hs.modules.GHCziRead.hs_zdfReadZMZN.hscall(hs_zddRead26DcNd);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26Ddrz);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26Ddry);
    };
    hs_zdcreadList425uOgO.evaluate = function (hs_zddRead26DcNh) {
        var hs_sat26DdrB = new $hs.Data(1);
        hs_sat26DdrB.data = [0];
        var hs_sat26DdrA = new $hs.Thunk();
        hs_sat26DdrA.evaluateOnce = function () {
            var hs_sat26DdrC = $hs.modules.GHCziRead.hs_zdfReadZMZN.hscall(hs_zddRead26DcNh);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26DdrC);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdrA, hs_sat26DdrB);
    };
    hs_zdcreadsPrec425uOgP.evaluate = function (hs_zddRead26DcNm) {
        var hs_sat26DdrD = new $hs.Thunk();
        hs_sat26DdrD.evaluateOnce = function () {
            var hs_sat26DdrE = $hs.modules.GHCziRead.hs_zdfReadZMZN.hscall(hs_zddRead26DcNm);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DdrE);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdrD);
    };
    hs_sat26DdrF.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadLexeme);
    };
    hs_sat26DdrG.data = [0];
    hs_sat26DdrH.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrec.hscall($hs.modules.GHCziRead.hs_zdfReadLexeme);
    };
    hs_sat26DdrI.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadLexeme);
    };
    this.hs_zdfReadLexeme.data = [hs_zdcreadsPrec525uOhb, hs_zdcreadList525uOha, $hs.modules.GHCziRead.hs_lexP, hs_zdcreadListPrec525uOh9];
    hs_zdcreadListPrec525uOh9.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DdrF);
    };
    hs_zdcreadList525uOha.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdrH, hs_sat26DdrG);
    };
    hs_zdcreadsPrec525uOhb.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdrI);
    };
    hs_sat26DdrJ.evaluate = function (hs_eta1cW6l3) {
        return hs_convertInt25s1Gf.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_eta1cW6l3);
    };
    hs_zdcreadPrec425uOhg.evaluateOnce = function () {
        return hs_readNumber25s1Ge.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DdrJ);
    };
    hs_sat26DdrK.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInt);
    };
    hs_sat26DdrL.data = [0];
    hs_sat26DdrM.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInt);
    };
    hs_sat26DdrN.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInt);
    };
    this.hs_zdfReadInt.data = [hs_zdcreadsPrec625uOhk, hs_zdcreadList625uOhj, hs_zdcreadPrec425uOhg, hs_zdcreadListPrec625uOhi];
    hs_zdcreadListPrec625uOhi.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DdrK);
    };
    hs_zdcreadList625uOhj.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdrM, hs_sat26DdrL);
    };
    hs_zdcreadsPrec625uOhk.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdrN);
    };
    hs_sat26DdrO.evaluate = function (hs_eta1cW6l3) {
        return hs_convertInt25s1Gf.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_eta1cW6l3);
    };
    hs_zdcreadPrec525uOhp.evaluateOnce = function () {
        return hs_readNumber25s1Ge.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DdrO);
    };
    hs_sat26DdrP.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInteger);
    };
    hs_sat26DdrQ.data = [0];
    hs_sat26DdrR.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInteger);
    };
    hs_sat26DdrS.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInteger);
    };
    this.hs_zdfReadInteger.data = [hs_zdcreadsPrec725uOht, hs_zdcreadList725uOhs, hs_zdcreadPrec525uOhp, hs_zdcreadListPrec725uOhr];
    hs_zdcreadListPrec725uOhr.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DdrP);
    };
    hs_zdcreadList725uOhs.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdrR, hs_sat26DdrQ);
    };
    hs_zdcreadsPrec725uOht.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdrS);
    };
    hs_sat26DdrT.evaluate = function (hs_eta1cW6l3) {
        return hs_convertFrac25s1Gg.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat, hs_eta1cW6l3);
    };
    hs_zdcreadPrec625uOhy.evaluateOnce = function () {
        return hs_readNumber25s1Ge.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26DdrT);
    };
    hs_sat26DdrU.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadFloat);
    };
    hs_sat26DdrV.data = [0];
    hs_sat26DdrW.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrec.hscall($hs.modules.GHCziRead.hs_zdfReadFloat);
    };
    hs_sat26DdrX.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadFloat);
    };
    this.hs_zdfReadFloat.data = [hs_zdcreadsPrec825uOhC, hs_zdcreadList825uOhB, hs_zdcreadPrec625uOhy, hs_zdcreadListPrec825uOhA];
    hs_zdcreadListPrec825uOhA.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DdrU);
    };
    hs_zdcreadList825uOhB.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdrW, hs_sat26DdrV);
    };
    hs_zdcreadsPrec825uOhC.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdrX);
    };
    hs_sat26DdrY.evaluate = function (hs_eta1cW6l3) {
        return hs_convertFrac25s1Gg.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_eta1cW6l3);
    };
    hs_zdcreadPrec725uOhH.evaluateOnce = function () {
        return hs_readNumber25s1Ge.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26DdrY);
    };
    hs_sat26DdrZ.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadDouble);
    };
    hs_sat26Dds0.data = [0];
    hs_sat26Dds1.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrec.hscall($hs.modules.GHCziRead.hs_zdfReadDouble);
    };
    hs_sat26Dds2.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadDouble);
    };
    this.hs_zdfReadDouble.data = [hs_zdcreadsPrec925uOhL, hs_zdcreadList925uOhK, hs_zdcreadPrec725uOhH, hs_zdcreadListPrec925uOhJ];
    hs_zdcreadListPrec925uOhJ.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DdrZ);
    };
    hs_zdcreadList925uOhK.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Dds1, hs_sat26Dds0);
    };
    hs_zdcreadsPrec925uOhL.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Dds2);
    };
    hs_zdcreadPrec825uOhQ.evaluate = function (hs_zddIntegral26DcOB, hs_zddRead26DcOa) {
        var hs_optional826DcOM = new $hs.Thunk();
        hs_optional826DcOM.evaluateOnce = function () {
            var hs_sat26Dds4 = new $hs.Thunk();
            hs_sat26Dds4.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional826DcOM);
            };
            var hs_sat26Dds3 = new $hs.Thunk();
            hs_sat26Dds3.evaluateOnce = function () {
                var hs_sat26Dds5 = new $hs.Thunk();
                hs_sat26Dds5.evaluateOnce = function () {
                    var hs_sat26Dds7 = new $hs.Func(1);
                    hs_sat26Dds7.evaluate = function (hs_x26DcOC) {
                        var hs_sat26Dds9 = new $hs.Func(1);
                        hs_sat26Dds9.evaluate = function (hs_ds26DcOk) {
                            var hs_fail26DcOj = new $hs.Func(1);
                            hs_fail26DcOj.evaluate = function (hs_ds126DcOi) {
                                var hs_sat26Ddsl = new $hs.Thunk();
                                hs_sat26Ddsl.evaluateOnce = function () {
                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Read.lhs:506:12-23\x00");
                                };
                                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddsl);
                            };
                            var hs_wild26Ddsg = hs_ds26DcOk;
                            if (hs_ds26DcOk.notEvaluated) {
                                hs_wild26Ddsg = hs_ds26DcOk.hscall();
                            }
                            switch (hs_wild26Ddsg.tag) {
                            case 5:
                                var hs_ds126DcOn = hs_wild26Ddsg.data[0];
                                var hs_wild126Ddsf = hs_ds126DcOn;
                                if (hs_ds126DcOn.notEvaluated) {
                                    hs_wild126Ddsf = hs_ds126DcOn.hscall();
                                }
                                switch (hs_wild126Ddsf.tag) {
                                case 1:
                                    return hs_fail26DcOj.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                case 2:
                                    var hs_ds226DcOr = hs_wild126Ddsf.data[0];
                                    var hs_ds326DcOw = hs_wild126Ddsf.data[1];
                                    var hs_wild226Ddse = hs_ds226DcOr;
                                    if (hs_ds226DcOr.notEvaluated) {
                                        hs_wild226Ddse = hs_ds226DcOr.hscall();
                                    }
                                    var hs_ds426DcOu = hs_wild226Ddse.data[0];
                                    var hs_ds526Ddsd = hs_ds426DcOu;
                                    if (hs_ds426DcOu.notEvaluated) {
                                        hs_ds526Ddsd = hs_ds426DcOu.hscall();
                                    }
                                    switch (hs_ds526Ddsd) {
                                    case "%":
                                        var hs_wild326Ddsc = hs_ds326DcOw;
                                        if (hs_ds326DcOw.notEvaluated) {
                                            hs_wild326Ddsc = hs_ds326DcOw.hscall();
                                        }
                                        switch (hs_wild326Ddsc.tag) {
                                        case 1:
                                            var hs_sat26Ddsi = new $hs.Func(1);
                                            hs_sat26Ddsi.evaluate = function (hs_y26DcOD) {
                                                var hs_sat26Ddsk = new $hs.Thunk();
                                                hs_sat26Ddsk.evaluateOnce = function () {
                                                    return $hs.modules.GHCziReal.hs_zv.hscall(hs_zddIntegral26DcOB, hs_x26DcOC, hs_y26DcOD);
                                                };
                                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddsk);
                                            };
                                            var hs_sat26Ddsh = new $hs.Thunk();
                                            hs_sat26Ddsh.evaluateOnce = function () {
                                                var hs_sat26Ddsj = new $hs.Thunk();
                                                hs_sat26Ddsj.evaluateOnce = function () {
                                                    return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26DcOa);
                                                };
                                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_step.hscall(hs_sat26Ddsj);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddsh, hs_sat26Ddsi);
                                        case 2:
                                            return hs_fail26DcOj.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                        }
                                    default:
                                        return hs_fail26DcOj.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                    }
                                }
                            default:
                                return hs_fail26DcOj.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Dds9);
                    };
                    var hs_sat26Dds6 = new $hs.Thunk();
                    hs_sat26Dds6.evaluateOnce = function () {
                        var hs_sat26Dds8 = new $hs.Thunk();
                        hs_sat26Dds8.evaluateOnce = function () {
                            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26DcOa);
                        };
                        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_step.hscall(hs_sat26Dds8);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Dds6, hs_sat26Dds7);
                };
                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall($hs.modules.GHCziReal.hs_ratioPrec, hs_sat26Dds5);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26Dds3, hs_sat26Dds4);
        };
        if (hs_optional826DcOM.notEvaluated) {
            return hs_optional826DcOM.hscall();
        } else {
            return hs_optional826DcOM;
        }
    };
    this.hs_zdfReadRatio.evaluate = function (hs_zddIntegral26DcOT, hs_zddRead26DcOU) {
        var hs_sat26Ddsn = new $hs.Thunk();
        hs_sat26Ddsn.evaluateOnce = function () {
            return hs_zdcreadListPrec1025uOiy.hscall(hs_zddIntegral26DcOT, hs_zddRead26DcOU);
        };
        var hs_sat26Ddso = new $hs.Thunk();
        hs_sat26Ddso.evaluateOnce = function () {
            return hs_zdcreadPrec825uOhQ.hscall(hs_zddIntegral26DcOT, hs_zddRead26DcOU);
        };
        var hs_sat26Ddsp = new $hs.Thunk();
        hs_sat26Ddsp.evaluateOnce = function () {
            return hs_zdcreadList1025uOiz.hscall(hs_zddIntegral26DcOT, hs_zddRead26DcOU);
        };
        var hs_sat26Ddsm = new $hs.Thunk();
        hs_sat26Ddsm.evaluateOnce = function () {
            return hs_zdcreadsPrec1025uOiA.hscall(hs_zddIntegral26DcOT, hs_zddRead26DcOU);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddsm, hs_sat26Ddsp, hs_sat26Ddso, hs_sat26Ddsn];
        return $res;
    };
    hs_zdcreadListPrec1025uOiy.evaluate = function (hs_zddIntegral26DcP1, hs_zddRead26DcP2) {
        var hs_sat26Ddsq = new $hs.Thunk();
        hs_sat26Ddsq.evaluateOnce = function () {
            var hs_sat26Ddsr = $hs.modules.GHCziRead.hs_zdfReadRatio.hscall(hs_zddIntegral26DcP1, hs_zddRead26DcP2);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26Ddsr);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26Ddsq);
    };
    hs_zdcreadList1025uOiz.evaluate = function (hs_zddIntegral26DcP7, hs_zddRead26DcP8) {
        var hs_sat26Ddst = new $hs.Data(1);
        hs_sat26Ddst.data = [0];
        var hs_sat26Ddss = new $hs.Thunk();
        hs_sat26Ddss.evaluateOnce = function () {
            var hs_sat26Ddsu = $hs.modules.GHCziRead.hs_zdfReadRatio.hscall(hs_zddIntegral26DcP7, hs_zddRead26DcP8);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26Ddsu);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddss, hs_sat26Ddst);
    };
    hs_zdcreadsPrec1025uOiA.evaluate = function (hs_zddIntegral26DcPe, hs_zddRead26DcPf) {
        var hs_sat26Ddsv = new $hs.Thunk();
        hs_sat26Ddsv.evaluateOnce = function () {
            var hs_sat26Ddsw = $hs.modules.GHCziRead.hs_zdfReadRatio.hscall(hs_zddIntegral26DcPe, hs_zddRead26DcPf);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26Ddsw);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddsv);
    };
    hs_sat26Ddsx.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional425uOj2);
    };
    hs_sat26Ddsy.evaluateOnce = function () {
        var hs_sat26Ddsz = new $hs.Thunk();
        hs_sat26Ddsz.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26Ddsz);
    };
    hs_optional425uOj2.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26Ddsy, hs_sat26Ddsx);
    };
    hs_zdcreadPrec925uOj6.evaluateOnce = function () {
        if (hs_optional425uOj2.notEvaluated) {
            return hs_optional425uOj2.hscall();
        } else {
            return hs_optional425uOj2;
        }
    };
    hs_sat26DdsA.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadZLZR);
    };
    hs_sat26DdsB.data = [0];
    hs_sat26DdsC.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrec.hscall($hs.modules.GHCziRead.hs_zdfReadZLZR);
    };
    hs_sat26DdsD.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadZLZR);
    };
    this.hs_zdfReadZLZR.data = [hs_zdcreadsPrec1125uOj9, hs_zdcreadList1125uOj8, hs_optional425uOj2, hs_zdcreadListPrec1125uOj7];
    hs_zdcreadListPrec1125uOj7.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DdsA);
    };
    hs_zdcreadList1125uOj8.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdsC, hs_sat26DdsB);
    };
    hs_zdcreadsPrec1125uOj9.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdsD);
    };
    hs_sat26DdsE.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional525uOje);
    };
    hs_sat26DdsF.evaluateOnce = function () {
        var hs_sat26DdsH = new $hs.Thunk();
        hs_sat26DdsH.evaluateOnce = function () {
            var hs_sat26DdsO = new $hs.Thunk();
            hs_sat26DdsO.evaluateOnce = function () {
                var hs_sat26DdsP = new $hs.Func(1);
                hs_sat26DdsP.evaluate = function (hs_ds26DcPQ) {
                    var hs_fail26DcPP = new $hs.Func(1);
                    hs_fail26DcPP.evaluate = function (hs_ds126DcPO) {
                        var hs_sat26DdsX = new $hs.Thunk();
                        hs_sat26DdsX.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdsX);
                    };
                    var hs_wild26DdsR = hs_ds26DcPQ;
                    if (hs_ds26DcPQ.notEvaluated) {
                        hs_wild26DdsR = hs_ds26DcPQ.hscall();
                    }
                    switch (hs_wild26DdsR.tag) {
                    case 4:
                        var hs_ds126DcPT = hs_wild26DdsR.data[0];
                        var hs_sat26DdsS = new $hs.Thunk();
                        hs_sat26DdsS.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Arity\x00");
                        };
                        var hs_wild126DdsT = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126DcPT, hs_sat26DdsS);
                        switch (hs_wild126DdsT.tag) {
                        case 1:
                            return hs_fail26DcPP.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        case 2:
                            var hs_sat26DdsU = new $hs.Func(1);
                            hs_sat26DdsU.evaluate = function (hs_a126DcPZ) {
                                var hs_sat26DdsW = new $hs.Data(2);
                                hs_sat26DdsW.data = [hs_a126DcPZ];
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdsW);
                            };
                            var hs_sat26DdsQ = new $hs.Thunk();
                            hs_sat26DdsQ.evaluateOnce = function () {
                                var hs_sat26DdsV = new $hs.Thunk();
                                hs_sat26DdsV.evaluateOnce = function () {
                                    return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInt);
                                };
                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_step.hscall(hs_sat26DdsV);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdsQ, hs_sat26DdsU);
                        }
                    default:
                        return hs_fail26DcPP.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DdsP);
            };
            var hs_sat26DdsN = new $hs.Data(1);
            hs_sat26DdsN.data = [10];
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall(hs_sat26DdsN, hs_sat26DdsO);
        };
        var hs_sat26DdsG = new $hs.Thunk();
        hs_sat26DdsG.evaluateOnce = function () {
            var hs_sat26DdsI = new $hs.Func(1);
            hs_sat26DdsI.evaluate = function (hs_ds26DcPB) {
                var hs_fail26DcPA = new $hs.Func(1);
                hs_fail26DcPA.evaluate = function (hs_ds126DcPz) {
                    var hs_sat26DdsM = new $hs.Thunk();
                    hs_sat26DdsM.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                    };
                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdsM);
                };
                var hs_wild26DdsJ = hs_ds26DcPB;
                if (hs_ds26DcPB.notEvaluated) {
                    hs_wild26DdsJ = hs_ds26DcPB.hscall();
                }
                switch (hs_wild26DdsJ.tag) {
                case 4:
                    var hs_ds126DcPE = hs_wild26DdsJ.data[0];
                    var hs_sat26DdsK = new $hs.Thunk();
                    hs_sat26DdsK.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("NoArity\x00");
                    };
                    var hs_wild126DdsL = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126DcPE, hs_sat26DdsK);
                    switch (hs_wild126DdsL.tag) {
                    case 1:
                        return hs_fail26DcPA.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    case 2:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziGenerics.hs_NoArity);
                    }
                default:
                    return hs_fail26DcPA.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DdsI);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DdsG, hs_sat26DdsH);
    };
    hs_optional525uOje.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DdsF, hs_sat26DdsE);
    };
    hs_zdcreadPrec1025uOjR.evaluateOnce = function () {
        if (hs_optional525uOje.notEvaluated) {
            return hs_optional525uOje.hscall();
        } else {
            return hs_optional525uOje;
        }
    };
    hs_sat26DdsY.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadArity);
    };
    hs_sat26DdsZ.data = [0];
    hs_sat26Ddt0.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrec.hscall($hs.modules.GHCziRead.hs_zdfReadArity);
    };
    hs_sat26Ddt1.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadArity);
    };
    this.hs_zdfReadArity.data = [hs_zdcreadsPrec1225uOjU, hs_zdcreadList1225uOjT, hs_optional525uOje, hs_zdcreadListPrec1225uOjS];
    hs_zdcreadListPrec1225uOjS.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DdsY);
    };
    hs_zdcreadList1225uOjT.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddt0, hs_sat26DdsZ);
    };
    hs_zdcreadsPrec1225uOjU.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddt1);
    };
    hs_sat26Ddt2.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional625uOjZ);
    };
    hs_sat26Ddt3.evaluateOnce = function () {
        var hs_sat26Ddt5 = new $hs.Thunk();
        hs_sat26Ddt5.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziGenerics.hs_NotAssociative);
        };
        var hs_sat26Ddt6 = new $hs.Thunk();
        hs_sat26Ddt6.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("NotAssociative\x00");
        };
        var hs_sat26Ddt7 = new $hs.Data(1);
        hs_sat26Ddt7.data = [hs_sat26Ddt6, hs_sat26Ddt5];
        var hs_sat26Ddt8 = new $hs.Data(2);
        hs_sat26Ddt8.data = [hs_sat26Ddt7, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26Ddt9 = new $hs.Thunk();
        hs_sat26Ddt9.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziGenerics.hs_RightAssociative);
        };
        var hs_sat26Ddta = new $hs.Thunk();
        hs_sat26Ddta.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("RightAssociative\x00");
        };
        var hs_sat26Ddtb = new $hs.Data(1);
        hs_sat26Ddtb.data = [hs_sat26Ddta, hs_sat26Ddt9];
        var hs_sat26Ddtc = new $hs.Data(2);
        hs_sat26Ddtc.data = [hs_sat26Ddtb, hs_sat26Ddt8];
        var hs_sat26Ddtd = new $hs.Thunk();
        hs_sat26Ddtd.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziGenerics.hs_LeftAssociative);
        };
        var hs_sat26Ddte = new $hs.Thunk();
        hs_sat26Ddte.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("LeftAssociative\x00");
        };
        var hs_sat26Ddtf = new $hs.Data(1);
        hs_sat26Ddtf.data = [hs_sat26Ddte, hs_sat26Ddtd];
        var hs_sat26Ddt4 = new $hs.Data(2);
        hs_sat26Ddt4.data = [hs_sat26Ddtf, hs_sat26Ddtc];
        return $hs.modules.GHCziRead.hs_choose.hscall(hs_sat26Ddt4);
    };
    hs_optional625uOjZ.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26Ddt3, hs_sat26Ddt2);
    };
    hs_zdcreadPrec1125uOke.evaluateOnce = function () {
        if (hs_optional625uOjZ.notEvaluated) {
            return hs_optional625uOjZ.hscall();
        } else {
            return hs_optional625uOjZ;
        }
    };
    hs_sat26Ddtg.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadAssociativity);
    };
    hs_sat26Ddth.data = [0];
    hs_sat26Ddti.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrec.hscall($hs.modules.GHCziRead.hs_zdfReadAssociativity);
    };
    hs_sat26Ddtj.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadAssociativity);
    };
    this.hs_zdfReadAssociativity.data = [hs_zdcreadsPrec1325uOkh, hs_zdcreadList1325uOkg, hs_optional625uOjZ, hs_zdcreadListPrec1325uOkf];
    hs_zdcreadListPrec1325uOkf.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26Ddtg);
    };
    hs_zdcreadList1325uOkg.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddti, hs_sat26Ddth);
    };
    hs_zdcreadsPrec1325uOkh.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddtj);
    };
    hs_sat26Ddtk.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional725uOkm);
    };
    hs_sat26Ddtl.evaluateOnce = function () {
        var hs_sat26Ddtn = new $hs.Thunk();
        hs_sat26Ddtn.evaluateOnce = function () {
            var hs_sat26Ddtu = new $hs.Thunk();
            hs_sat26Ddtu.evaluateOnce = function () {
                var hs_sat26Ddtv = new $hs.Func(1);
                hs_sat26Ddtv.evaluate = function (hs_ds26DcQY) {
                    var hs_fail26DcQX = new $hs.Func(1);
                    hs_fail26DcQX.evaluate = function (hs_ds126DcQW) {
                        var hs_sat26DdtG = new $hs.Thunk();
                        hs_sat26DdtG.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdtG);
                    };
                    var hs_wild26Ddtx = hs_ds26DcQY;
                    if (hs_ds26DcQY.notEvaluated) {
                        hs_wild26Ddtx = hs_ds26DcQY.hscall();
                    }
                    switch (hs_wild26Ddtx.tag) {
                    case 4:
                        var hs_ds126DcR1 = hs_wild26Ddtx.data[0];
                        var hs_sat26Ddty = new $hs.Thunk();
                        hs_sat26Ddty.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Infix\x00");
                        };
                        var hs_wild126Ddtz = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126DcR1, hs_sat26Ddty);
                        switch (hs_wild126Ddtz.tag) {
                        case 1:
                            return hs_fail26DcQX.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        case 2:
                            var hs_sat26DdtA = new $hs.Func(1);
                            hs_sat26DdtA.evaluate = function (hs_a126DcRa) {
                                var hs_sat26DdtD = new $hs.Func(1);
                                hs_sat26DdtD.evaluate = function (hs_a226DcRb) {
                                    var hs_sat26DdtF = new $hs.Data(2);
                                    hs_sat26DdtF.data = [hs_a126DcRa, hs_a226DcRb];
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdtF);
                                };
                                var hs_sat26DdtC = new $hs.Thunk();
                                hs_sat26DdtC.evaluateOnce = function () {
                                    var hs_sat26DdtE = new $hs.Thunk();
                                    hs_sat26DdtE.evaluateOnce = function () {
                                        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInt);
                                    };
                                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_step.hscall(hs_sat26DdtE);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdtC, hs_sat26DdtD);
                            };
                            var hs_sat26Ddtw = new $hs.Thunk();
                            hs_sat26Ddtw.evaluateOnce = function () {
                                var hs_sat26DdtB = new $hs.Thunk();
                                hs_sat26DdtB.evaluateOnce = function () {
                                    return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadAssociativity);
                                };
                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_step.hscall(hs_sat26DdtB);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddtw, hs_sat26DdtA);
                        }
                    default:
                        return hs_fail26DcQX.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Ddtv);
            };
            var hs_sat26Ddtt = new $hs.Data(1);
            hs_sat26Ddtt.data = [10];
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall(hs_sat26Ddtt, hs_sat26Ddtu);
        };
        var hs_sat26Ddtm = new $hs.Thunk();
        hs_sat26Ddtm.evaluateOnce = function () {
            var hs_sat26Ddto = new $hs.Func(1);
            hs_sat26Ddto.evaluate = function (hs_ds26DcQJ) {
                var hs_fail26DcQI = new $hs.Func(1);
                hs_fail26DcQI.evaluate = function (hs_ds126DcQH) {
                    var hs_sat26Ddts = new $hs.Thunk();
                    hs_sat26Ddts.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at <no location info>\x00");
                    };
                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddts);
                };
                var hs_wild26Ddtp = hs_ds26DcQJ;
                if (hs_ds26DcQJ.notEvaluated) {
                    hs_wild26Ddtp = hs_ds26DcQJ.hscall();
                }
                switch (hs_wild26Ddtp.tag) {
                case 4:
                    var hs_ds126DcQM = hs_wild26Ddtp.data[0];
                    var hs_sat26Ddtq = new $hs.Thunk();
                    hs_sat26Ddtq.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prefix\x00");
                    };
                    var hs_wild126Ddtr = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126DcQM, hs_sat26Ddtq);
                    switch (hs_wild126Ddtr.tag) {
                    case 1:
                        return hs_fail26DcQI.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    case 2:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziGenerics.hs_Prefix);
                    }
                default:
                    return hs_fail26DcQI.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26Ddto);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26Ddtm, hs_sat26Ddtn);
    };
    hs_optional725uOkm.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26Ddtl, hs_sat26Ddtk);
    };
    hs_zdcreadPrec1225uOl4.evaluateOnce = function () {
        if (hs_optional725uOkm.notEvaluated) {
            return hs_optional725uOkm.hscall();
        } else {
            return hs_optional725uOkm;
        }
    };
    hs_sat26DdtH.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadFixity);
    };
    hs_sat26DdtI.data = [0];
    hs_sat26DdtJ.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrec.hscall($hs.modules.GHCziRead.hs_zdfReadFixity);
    };
    hs_sat26DdtK.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadFixity);
    };
    this.hs_zdfReadFixity.data = [hs_zdcreadsPrec1425uOl7, hs_zdcreadList1425uOl6, hs_optional725uOkm, hs_zdcreadListPrec1425uOl5];
    hs_zdcreadListPrec1425uOl5.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DdtH);
    };
    hs_zdcreadList1425uOl6.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdtJ, hs_sat26DdtI);
    };
    hs_zdcreadsPrec1425uOl7.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdtK);
    };
    hs_sat26DdtP.evaluateOnce = function () {
        var hs_sat26DdtM = new $hs.Func(1);
        hs_sat26DdtM.evaluate = function (hs_ds26DcRu) {
            var hs_wild26DdtO = hs_ds26DcRu;
            if (hs_ds26DcRu.notEvaluated) {
                hs_wild26DdtO = hs_ds26DcRu.hscall();
            }
            var hs_s26DcRy = hs_wild26DdtO.data[0];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_s26DcRy);
        };
        var hs_sat26DdtL = new $hs.Thunk();
        hs_sat26DdtL.evaluateOnce = function () {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_gather.hscall($hs.modules.TextziReadziLex.hs_lexChar);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DdtL, hs_sat26DdtM);
    };
    this.hs_lexLitChar.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadP.hs_readPzutozuS.hscall(hs_sat26DdtP);
    };
    hs_sat26DdtY.evaluate = function (hs_ds26DcRH) {
        var hs_fail26DcRG = new $hs.Func(1);
        hs_fail26DcRG.evaluate = function (hs_ds126DcRF) {
            var hs_sat26DdtX = new $hs.Thunk();
            hs_sat26DdtX.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Read.lhs:544:19-28\x00");
            };
            return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdtX);
        };
        var hs_wild26DdtW = hs_ds26DcRH;
        if (hs_ds26DcRH.notEvaluated) {
            hs_wild26DdtW = hs_ds26DcRH.hscall();
        }
        switch (hs_wild26DdtW.tag) {
        case 3:
            var hs_ds126DcRK = hs_wild26DdtW.data[0];
            var hs_wild126DdtV = hs_ds126DcRK;
            if (hs_ds126DcRK.notEvaluated) {
                hs_wild126DdtV = hs_ds126DcRK.hscall();
            }
            switch (hs_wild126DdtV.tag) {
            case 1:
                return hs_fail26DcRG.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            case 2:
                var hs_ds226DcRO = hs_wild126DdtV.data[0];
                var hs_ds326DcRT = hs_wild126DdtV.data[1];
                var hs_wild226DdtU = hs_ds226DcRO;
                if (hs_ds226DcRO.notEvaluated) {
                    hs_wild226DdtU = hs_ds226DcRO.hscall();
                }
                var hs_ds426DcRR = hs_wild226DdtU.data[0];
                var hs_ds526DdtT = hs_ds426DcRR;
                if (hs_ds426DcRR.notEvaluated) {
                    hs_ds526DdtT = hs_ds426DcRR.hscall();
                }
                switch (hs_ds526DdtT) {
                case ",":
                    var hs_wild326DdtS = hs_ds326DcRT;
                    if (hs_ds326DcRT.notEvaluated) {
                        hs_wild326DdtS = hs_ds326DcRT.hscall();
                    }
                    switch (hs_wild326DdtS.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziUnit.hs_Z0T);
                    case 2:
                        return hs_fail26DcRG.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                default:
                    return hs_fail26DcRG.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            }
        default:
            return hs_fail26DcRG.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
        }
    };
    hs_readzucomma25s1Gi.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DdtY);
    };
    hs_readzutup225s1Gj.evaluate = function (hs_zddRead26DcS0, hs_zddRead126DcS3) {
        var hs_sat26Ddu0 = new $hs.Func(1);
        hs_sat26Ddu0.evaluate = function (hs_x26DcS6) {
            var hs_sat26Ddu1 = new $hs.Thunk();
            hs_sat26Ddu1.evaluateOnce = function () {
                var hs_sat26Ddu3 = new $hs.Func(1);
                hs_sat26Ddu3.evaluate = function (hs_y26DcS7) {
                    var hs_sat26Ddu4 = new $hs.Data(1);
                    hs_sat26Ddu4.data = [hs_x26DcS6, hs_y26DcS7];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddu4);
                };
                var hs_sat26Ddu2 = new $hs.Thunk();
                hs_sat26Ddu2.evaluateOnce = function () {
                    return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead126DcS3);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddu2, hs_sat26Ddu3);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s1Gi, hs_sat26Ddu1);
        };
        var hs_sat26DdtZ = new $hs.Thunk();
        hs_sat26DdtZ.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26DcS0);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdtZ, hs_sat26Ddu0);
    };
    hs_zdcreadPrec1325uOlW.evaluate = function (hs_zddRead26DcSh, hs_zddRead126DcSi, hs_zddRead226DcSp) {
        var hs_optional826DcSB = new $hs.Thunk();
        hs_optional826DcSB.evaluateOnce = function () {
            var hs_sat26Ddu6 = new $hs.Thunk();
            hs_sat26Ddu6.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional826DcSB);
            };
            var hs_sat26Ddu5 = new $hs.Thunk();
            hs_sat26Ddu5.evaluateOnce = function () {
                var hs_sat26Ddu7 = new $hs.Thunk();
                hs_sat26Ddu7.evaluateOnce = function () {
                    var hs_sat26Ddu9 = new $hs.Func(1);
                    hs_sat26Ddu9.evaluate = function (hs_ds26DcSl) {
                        var hs_wild26Ddub = hs_ds26DcSl;
                        if (hs_ds26DcSl.notEvaluated) {
                            hs_wild26Ddub = hs_ds26DcSl.hscall();
                        }
                        var hs_a26DcSs = hs_wild26Ddub.data[0];
                        var hs_b26DcSt = hs_wild26Ddub.data[1];
                        var hs_sat26Ddua = new $hs.Thunk();
                        hs_sat26Ddua.evaluateOnce = function () {
                            var hs_sat26Ddud = new $hs.Func(1);
                            hs_sat26Ddud.evaluate = function (hs_c26DcSu) {
                                var hs_sat26Ddue = new $hs.Data(1);
                                hs_sat26Ddue.data = [hs_a26DcSs, hs_b26DcSt, hs_c26DcSu];
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddue);
                            };
                            var hs_sat26Dduc = new $hs.Thunk();
                            hs_sat26Dduc.evaluateOnce = function () {
                                return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead226DcSp);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Dduc, hs_sat26Ddud);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s1Gi, hs_sat26Ddua);
                    };
                    var hs_sat26Ddu8 = new $hs.Thunk();
                    hs_sat26Ddu8.evaluateOnce = function () {
                        return hs_readzutup225s1Gj.hscall(hs_zddRead26DcSh, hs_zddRead126DcSi);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddu8, hs_sat26Ddu9);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26Ddu7);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26Ddu5, hs_sat26Ddu6);
        };
        if (hs_optional826DcSB.notEvaluated) {
            return hs_optional826DcSB.hscall();
        } else {
            return hs_optional826DcSB;
        }
    };
    this.hs_zdfReadZLz2cUz2cUZR.evaluate = function (hs_zddRead26DcSJ, hs_zddRead126DcSK, hs_zddRead226DcSL) {
        var hs_sat26Ddug = new $hs.Thunk();
        hs_sat26Ddug.evaluateOnce = function () {
            return hs_zdcreadListPrec1525uOmn.hscall(hs_zddRead26DcSJ, hs_zddRead126DcSK, hs_zddRead226DcSL);
        };
        var hs_sat26Dduh = new $hs.Thunk();
        hs_sat26Dduh.evaluateOnce = function () {
            return hs_zdcreadPrec1325uOlW.hscall(hs_zddRead26DcSJ, hs_zddRead126DcSK, hs_zddRead226DcSL);
        };
        var hs_sat26Ddui = new $hs.Thunk();
        hs_sat26Ddui.evaluateOnce = function () {
            return hs_zdcreadList1525uOmo.hscall(hs_zddRead26DcSJ, hs_zddRead126DcSK, hs_zddRead226DcSL);
        };
        var hs_sat26Dduf = new $hs.Thunk();
        hs_sat26Dduf.evaluateOnce = function () {
            return hs_zdcreadsPrec1525uOmp.hscall(hs_zddRead26DcSJ, hs_zddRead126DcSK, hs_zddRead226DcSL);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dduf, hs_sat26Ddui, hs_sat26Dduh, hs_sat26Ddug];
        return $res;
    };
    hs_zdcreadListPrec1525uOmn.evaluate = function (hs_zddRead26DcST, hs_zddRead126DcSU, hs_zddRead226DcSV) {
        var hs_sat26Dduj = new $hs.Thunk();
        hs_sat26Dduj.evaluateOnce = function () {
            var hs_sat26Dduk = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUZR.hscall(hs_zddRead26DcST, hs_zddRead126DcSU, hs_zddRead226DcSV);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26Dduk);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26Dduj);
    };
    hs_zdcreadList1525uOmo.evaluate = function (hs_zddRead26DcT1, hs_zddRead126DcT2, hs_zddRead226DcT3) {
        var hs_sat26Ddum = new $hs.Data(1);
        hs_sat26Ddum.data = [0];
        var hs_sat26Ddul = new $hs.Thunk();
        hs_sat26Ddul.evaluateOnce = function () {
            var hs_sat26Ddun = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUZR.hscall(hs_zddRead26DcT1, hs_zddRead126DcT2, hs_zddRead226DcT3);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26Ddun);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddul, hs_sat26Ddum);
    };
    hs_zdcreadsPrec1525uOmp.evaluate = function (hs_zddRead26DcTa, hs_zddRead126DcTb, hs_zddRead226DcTc) {
        var hs_sat26Dduo = new $hs.Thunk();
        hs_sat26Dduo.evaluateOnce = function () {
            var hs_sat26Ddup = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUZR.hscall(hs_zddRead26DcTa, hs_zddRead126DcTb, hs_zddRead226DcTc);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26Ddup);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Dduo);
    };
    hs_zdcreadPrec1425uOmZ.evaluate = function (hs_zddRead26DcTj, hs_zddRead126DcTk) {
        var hs_optional826DcTn = new $hs.Thunk();
        hs_optional826DcTn.evaluateOnce = function () {
            var hs_sat26Ddur = new $hs.Thunk();
            hs_sat26Ddur.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional826DcTn);
            };
            var hs_sat26Dduq = new $hs.Thunk();
            hs_sat26Dduq.evaluateOnce = function () {
                var hs_sat26Ddus = new $hs.Thunk();
                hs_sat26Ddus.evaluateOnce = function () {
                    return hs_readzutup225s1Gj.hscall(hs_zddRead26DcTj, hs_zddRead126DcTk);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26Ddus);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26Dduq, hs_sat26Ddur);
        };
        if (hs_optional826DcTn.notEvaluated) {
            return hs_optional826DcTn.hscall();
        } else {
            return hs_optional826DcTn;
        }
    };
    this.hs_zdfReadZLz2cUZR.evaluate = function (hs_zddRead26DcTu, hs_zddRead126DcTv) {
        var hs_sat26Dduu = new $hs.Thunk();
        hs_sat26Dduu.evaluateOnce = function () {
            return hs_zdcreadListPrec1625uOn9.hscall(hs_zddRead26DcTu, hs_zddRead126DcTv);
        };
        var hs_sat26Dduv = new $hs.Thunk();
        hs_sat26Dduv.evaluateOnce = function () {
            return hs_zdcreadPrec1425uOmZ.hscall(hs_zddRead26DcTu, hs_zddRead126DcTv);
        };
        var hs_sat26Dduw = new $hs.Thunk();
        hs_sat26Dduw.evaluateOnce = function () {
            return hs_zdcreadList1625uOna.hscall(hs_zddRead26DcTu, hs_zddRead126DcTv);
        };
        var hs_sat26Ddut = new $hs.Thunk();
        hs_sat26Ddut.evaluateOnce = function () {
            return hs_zdcreadsPrec1625uOnb.hscall(hs_zddRead26DcTu, hs_zddRead126DcTv);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddut, hs_sat26Dduw, hs_sat26Dduv, hs_sat26Dduu];
        return $res;
    };
    hs_zdcreadListPrec1625uOn9.evaluate = function (hs_zddRead26DcTC, hs_zddRead126DcTD) {
        var hs_sat26Ddux = new $hs.Thunk();
        hs_sat26Ddux.evaluateOnce = function () {
            var hs_sat26Dduy = $hs.modules.GHCziRead.hs_zdfReadZLz2cUZR.hscall(hs_zddRead26DcTC, hs_zddRead126DcTD);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26Dduy);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26Ddux);
    };
    hs_zdcreadList1625uOna.evaluate = function (hs_zddRead26DcTI, hs_zddRead126DcTJ) {
        var hs_sat26DduA = new $hs.Data(1);
        hs_sat26DduA.data = [0];
        var hs_sat26Dduz = new $hs.Thunk();
        hs_sat26Dduz.evaluateOnce = function () {
            var hs_sat26DduB = $hs.modules.GHCziRead.hs_zdfReadZLz2cUZR.hscall(hs_zddRead26DcTI, hs_zddRead126DcTJ);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26DduB);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Dduz, hs_sat26DduA);
    };
    hs_zdcreadsPrec1625uOnb.evaluate = function (hs_zddRead26DcTP, hs_zddRead126DcTQ) {
        var hs_sat26DduC = new $hs.Thunk();
        hs_sat26DduC.evaluateOnce = function () {
            var hs_sat26DduD = $hs.modules.GHCziRead.hs_zdfReadZLz2cUZR.hscall(hs_zddRead26DcTP, hs_zddRead126DcTQ);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DduD);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DduC);
    };
    hs_zdcreadPrec1525uOnD.evaluate = function (hs_zddIx26DcUo, hs_zddRead26DcTY, hs_zddRead126DcTZ) {
        var hs_zddRead226DcU0 = new $hs.Thunk();
        hs_zddRead226DcU0.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_zdfReadZLz2cUZR.hscall(hs_zddRead26DcTY, hs_zddRead126DcTZ);
        };
        var hs_zddRead326DcU2 = new $hs.Thunk();
        hs_zddRead326DcU2.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_zdfReadZMZN.hscall(hs_zddRead226DcU0);
        };
        var hs_zddRead426DcU4 = new $hs.Thunk();
        hs_zddRead426DcU4.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_zdfReadZLz2cUZR.hscall(hs_zddRead26DcTY, hs_zddRead26DcTY);
        };
        var hs_sat26DduE = new $hs.Thunk();
        hs_sat26DduE.evaluateOnce = function () {
            var hs_sat26DduG = new $hs.Thunk();
            hs_sat26DduG.evaluateOnce = function () {
                var hs_sat26DduH = new $hs.Func(1);
                hs_sat26DduH.evaluate = function (hs_ds26DcUc) {
                    var hs_fail26DcUb = new $hs.Func(1);
                    hs_fail26DcUb.evaluate = function (hs_ds126DcUa) {
                        var hs_sat26DduS = new $hs.Thunk();
                        hs_sat26DduS.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/Read.lhs:436:19-33\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DduS);
                    };
                    var hs_wild26DduJ = hs_ds26DcUc;
                    if (hs_ds26DcUc.notEvaluated) {
                        hs_wild26DduJ = hs_ds26DcUc.hscall();
                    }
                    switch (hs_wild26DduJ.tag) {
                    case 4:
                        var hs_ds126DcUf = hs_wild26DduJ.data[0];
                        var hs_sat26DduK = new $hs.Thunk();
                        hs_sat26DduK.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("array\x00");
                        };
                        var hs_wild126DduL = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126DcUf, hs_sat26DduK);
                        switch (hs_wild126DduL.tag) {
                        case 1:
                            return hs_fail26DcUb.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        case 2:
                            var hs_sat26DduM = new $hs.Func(1);
                            hs_sat26DduM.evaluate = function (hs_theBounds26DcUp) {
                                var hs_sat26DduP = new $hs.Func(1);
                                hs_sat26DduP.evaluate = function (hs_vals26DcUq) {
                                    var hs_sat26DduR = new $hs.Thunk();
                                    hs_sat26DduR.evaluateOnce = function () {
                                        return $hs.modules.GHCziArr.hs_array.hscall(hs_zddIx26DcUo, hs_theBounds26DcUp, hs_vals26DcUq);
                                    };
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DduR);
                                };
                                var hs_sat26DduO = new $hs.Thunk();
                                hs_sat26DduO.evaluateOnce = function () {
                                    var hs_sat26DduQ = new $hs.Thunk();
                                    hs_sat26DduQ.evaluateOnce = function () {
                                        return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead326DcU2);
                                    };
                                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_step.hscall(hs_sat26DduQ);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DduO, hs_sat26DduP);
                            };
                            var hs_sat26DduI = new $hs.Thunk();
                            hs_sat26DduI.evaluateOnce = function () {
                                var hs_sat26DduN = new $hs.Thunk();
                                hs_sat26DduN.evaluateOnce = function () {
                                    return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead426DcU4);
                                };
                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_step.hscall(hs_sat26DduN);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DduI, hs_sat26DduM);
                        }
                    default:
                        return hs_fail26DcUb.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DduH);
            };
            var hs_sat26DduF = new $hs.Thunk();
            hs_sat26DduF.evaluateOnce = function () {
                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall($hs.modules.GHCziShow.hs_appPrec);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DduF, hs_sat26DduG);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziRead.hs_parens, hs_sat26DduE);
    };
    this.hs_zdfReadArray.evaluate = function (hs_zddIx26DcUD, hs_zddRead26DcUE, hs_zddRead126DcUF) {
        var hs_sat26DduU = new $hs.Thunk();
        hs_sat26DduU.evaluateOnce = function () {
            return hs_zdcreadListPrec1725uOoh.hscall(hs_zddIx26DcUD, hs_zddRead26DcUE, hs_zddRead126DcUF);
        };
        var hs_sat26DduV = new $hs.Thunk();
        hs_sat26DduV.evaluateOnce = function () {
            return hs_zdcreadPrec1525uOnD.hscall(hs_zddIx26DcUD, hs_zddRead26DcUE, hs_zddRead126DcUF);
        };
        var hs_sat26DduW = new $hs.Thunk();
        hs_sat26DduW.evaluateOnce = function () {
            return hs_zdcreadList1725uOoi.hscall(hs_zddIx26DcUD, hs_zddRead26DcUE, hs_zddRead126DcUF);
        };
        var hs_sat26DduT = new $hs.Thunk();
        hs_sat26DduT.evaluateOnce = function () {
            return hs_zdcreadsPrec1725uOoj.hscall(hs_zddIx26DcUD, hs_zddRead26DcUE, hs_zddRead126DcUF);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DduT, hs_sat26DduW, hs_sat26DduV, hs_sat26DduU];
        return $res;
    };
    hs_zdcreadListPrec1725uOoh.evaluate = function (hs_zddIx26DcUN, hs_zddRead26DcUO, hs_zddRead126DcUP) {
        var hs_sat26DduX = new $hs.Thunk();
        hs_sat26DduX.evaluateOnce = function () {
            var hs_sat26DduY = $hs.modules.GHCziRead.hs_zdfReadArray.hscall(hs_zddIx26DcUN, hs_zddRead26DcUO, hs_zddRead126DcUP);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DduY);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DduX);
    };
    hs_zdcreadList1725uOoi.evaluate = function (hs_zddIx26DcUV, hs_zddRead26DcUW, hs_zddRead126DcUX) {
        var hs_sat26Ddv0 = new $hs.Data(1);
        hs_sat26Ddv0.data = [0];
        var hs_sat26DduZ = new $hs.Thunk();
        hs_sat26DduZ.evaluateOnce = function () {
            var hs_sat26Ddv1 = $hs.modules.GHCziRead.hs_zdfReadArray.hscall(hs_zddIx26DcUV, hs_zddRead26DcUW, hs_zddRead126DcUX);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26Ddv1);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DduZ, hs_sat26Ddv0);
    };
    hs_zdcreadsPrec1725uOoj.evaluate = function (hs_zddIx26DcV4, hs_zddRead26DcV5, hs_zddRead126DcV6) {
        var hs_sat26Ddv2 = new $hs.Thunk();
        hs_sat26Ddv2.evaluateOnce = function () {
            var hs_sat26Ddv3 = $hs.modules.GHCziRead.hs_zdfReadArray.hscall(hs_zddIx26DcV4, hs_zddRead26DcV5, hs_zddRead126DcV6);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26Ddv3);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddv2);
    };
    hs_readzutup425s1Gk.evaluate = function (hs_zddRead26DcVd, hs_zddRead126DcVe, hs_zddRead226DcVl, hs_zddRead326DcVm) {
        var hs_sat26Ddv5 = new $hs.Func(1);
        hs_sat26Ddv5.evaluate = function (hs_ds26DcVh) {
            var hs_wild26Ddv7 = hs_ds26DcVh;
            if (hs_ds26DcVh.notEvaluated) {
                hs_wild26Ddv7 = hs_ds26DcVh.hscall();
            }
            var hs_a26DcVt = hs_wild26Ddv7.data[0];
            var hs_b26DcVu = hs_wild26Ddv7.data[1];
            var hs_sat26Ddv6 = new $hs.Thunk();
            hs_sat26Ddv6.evaluateOnce = function () {
                var hs_sat26Ddv9 = new $hs.Func(1);
                hs_sat26Ddv9.evaluate = function (hs_ds126DcVp) {
                    var hs_wild126Ddvb = hs_ds126DcVp;
                    if (hs_ds126DcVp.notEvaluated) {
                        hs_wild126Ddvb = hs_ds126DcVp.hscall();
                    }
                    var hs_c26DcVv = hs_wild126Ddvb.data[0];
                    var hs_d26DcVw = hs_wild126Ddvb.data[1];
                    var hs_sat26Ddva = new $hs.Data(1);
                    hs_sat26Ddva.data = [hs_a26DcVt, hs_b26DcVu, hs_c26DcVv, hs_d26DcVw];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddva);
                };
                var hs_sat26Ddv8 = new $hs.Thunk();
                hs_sat26Ddv8.evaluateOnce = function () {
                    return hs_readzutup225s1Gj.hscall(hs_zddRead226DcVl, hs_zddRead326DcVm);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddv8, hs_sat26Ddv9);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s1Gi, hs_sat26Ddv6);
        };
        var hs_sat26Ddv4 = new $hs.Thunk();
        hs_sat26Ddv4.evaluateOnce = function () {
            return hs_readzutup225s1Gj.hscall(hs_zddRead26DcVd, hs_zddRead126DcVe);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddv4, hs_sat26Ddv5);
    };
    hs_zdcreadPrec1625uOpl.evaluate = function (hs_zddRead26DcVK, hs_zddRead126DcVL, hs_zddRead226DcVM, hs_zddRead326DcVN, hs_zddRead426DcVW, hs_zddRead526DcVX, hs_zddRead626DcW4) {
        var hs_optional826DcWm = new $hs.Thunk();
        hs_optional826DcWm.evaluateOnce = function () {
            var hs_sat26Ddvd = new $hs.Thunk();
            hs_sat26Ddvd.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional826DcWm);
            };
            var hs_sat26Ddvc = new $hs.Thunk();
            hs_sat26Ddvc.evaluateOnce = function () {
                var hs_sat26Ddve = new $hs.Thunk();
                hs_sat26Ddve.evaluateOnce = function () {
                    var hs_sat26Ddvg = new $hs.Func(1);
                    hs_sat26Ddvg.evaluate = function (hs_ds26DcVQ) {
                        var hs_wild26Ddvi = hs_ds26DcVQ;
                        if (hs_ds26DcVQ.notEvaluated) {
                            hs_wild26Ddvi = hs_ds26DcVQ.hscall();
                        }
                        var hs_a26DcW7 = hs_wild26Ddvi.data[0];
                        var hs_b26DcW8 = hs_wild26Ddvi.data[1];
                        var hs_c26DcW9 = hs_wild26Ddvi.data[2];
                        var hs_d26DcWa = hs_wild26Ddvi.data[3];
                        var hs_sat26Ddvh = new $hs.Thunk();
                        hs_sat26Ddvh.evaluateOnce = function () {
                            var hs_sat26Ddvk = new $hs.Func(1);
                            hs_sat26Ddvk.evaluate = function (hs_ds126DcW0) {
                                var hs_wild126Ddvm = hs_ds126DcW0;
                                if (hs_ds126DcW0.notEvaluated) {
                                    hs_wild126Ddvm = hs_ds126DcW0.hscall();
                                }
                                var hs_e26DcWb = hs_wild126Ddvm.data[0];
                                var hs_f26DcWc = hs_wild126Ddvm.data[1];
                                var hs_sat26Ddvl = new $hs.Thunk();
                                hs_sat26Ddvl.evaluateOnce = function () {
                                    var hs_sat26Ddvo = new $hs.Func(1);
                                    hs_sat26Ddvo.evaluate = function (hs_g26DcWd) {
                                        var hs_sat26Ddvp = new $hs.Data(1);
                                        hs_sat26Ddvp.data = [hs_a26DcW7, hs_b26DcW8, hs_c26DcW9, hs_d26DcWa, hs_e26DcWb, hs_f26DcWc, hs_g26DcWd];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddvp);
                                    };
                                    var hs_sat26Ddvn = new $hs.Thunk();
                                    hs_sat26Ddvn.evaluateOnce = function () {
                                        return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead626DcW4);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddvn, hs_sat26Ddvo);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s1Gi, hs_sat26Ddvl);
                            };
                            var hs_sat26Ddvj = new $hs.Thunk();
                            hs_sat26Ddvj.evaluateOnce = function () {
                                return hs_readzutup225s1Gj.hscall(hs_zddRead426DcVW, hs_zddRead526DcVX);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddvj, hs_sat26Ddvk);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s1Gi, hs_sat26Ddvh);
                    };
                    var hs_sat26Ddvf = new $hs.Thunk();
                    hs_sat26Ddvf.evaluateOnce = function () {
                        return hs_readzutup425s1Gk.hscall(hs_zddRead26DcVK, hs_zddRead126DcVL, hs_zddRead226DcVM, hs_zddRead326DcVN);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddvf, hs_sat26Ddvg);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26Ddve);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26Ddvc, hs_sat26Ddvd);
        };
        if (hs_optional826DcWm.notEvaluated) {
            return hs_optional826DcWm.hscall();
        } else {
            return hs_optional826DcWm;
        }
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DcWy, hs_zddRead126DcWz, hs_zddRead226DcWA, hs_zddRead326DcWB, hs_zddRead426DcWC, hs_zddRead526DcWD, hs_zddRead626DcWE) {
        var hs_sat26Ddvr = new $hs.Thunk();
        hs_sat26Ddvr.evaluateOnce = function () {
            return hs_zdcreadListPrec1825uOq8.hscall(hs_zddRead26DcWy, hs_zddRead126DcWz, hs_zddRead226DcWA, hs_zddRead326DcWB, hs_zddRead426DcWC, hs_zddRead526DcWD, hs_zddRead626DcWE);
        };
        var hs_sat26Ddvs = new $hs.Thunk();
        hs_sat26Ddvs.evaluateOnce = function () {
            return hs_zdcreadPrec1625uOpl.hscall(hs_zddRead26DcWy, hs_zddRead126DcWz, hs_zddRead226DcWA, hs_zddRead326DcWB, hs_zddRead426DcWC, hs_zddRead526DcWD, hs_zddRead626DcWE);
        };
        var hs_sat26Ddvt = new $hs.Thunk();
        hs_sat26Ddvt.evaluateOnce = function () {
            return hs_zdcreadList1825uOq9.hscall(hs_zddRead26DcWy, hs_zddRead126DcWz, hs_zddRead226DcWA, hs_zddRead326DcWB, hs_zddRead426DcWC, hs_zddRead526DcWD, hs_zddRead626DcWE);
        };
        var hs_sat26Ddvq = new $hs.Thunk();
        hs_sat26Ddvq.evaluateOnce = function () {
            return hs_zdcreadsPrec1825uOqa.hscall(hs_zddRead26DcWy, hs_zddRead126DcWz, hs_zddRead226DcWA, hs_zddRead326DcWB, hs_zddRead426DcWC, hs_zddRead526DcWD, hs_zddRead626DcWE);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddvq, hs_sat26Ddvt, hs_sat26Ddvs, hs_sat26Ddvr];
        return $res;
    };
    hs_zdcreadListPrec1825uOq8.evaluate = function (hs_zddRead26DcWQ, hs_zddRead126DcWR, hs_zddRead226DcWS, hs_zddRead326DcWT, hs_zddRead426DcWU, hs_zddRead526DcWV, hs_zddRead626DcWW) {
        var hs_sat26Ddvu = new $hs.Thunk();
        hs_sat26Ddvu.evaluateOnce = function () {
            var hs_sat26Ddvv = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DcWQ, hs_zddRead126DcWR, hs_zddRead226DcWS, hs_zddRead326DcWT, hs_zddRead426DcWU, hs_zddRead526DcWV, hs_zddRead626DcWW);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26Ddvv);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26Ddvu);
    };
    hs_zdcreadList1825uOq9.evaluate = function (hs_zddRead26DcX6, hs_zddRead126DcX7, hs_zddRead226DcX8, hs_zddRead326DcX9, hs_zddRead426DcXa, hs_zddRead526DcXb, hs_zddRead626DcXc) {
        var hs_sat26Ddvx = new $hs.Data(1);
        hs_sat26Ddvx.data = [0];
        var hs_sat26Ddvw = new $hs.Thunk();
        hs_sat26Ddvw.evaluateOnce = function () {
            var hs_sat26Ddvy = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DcX6, hs_zddRead126DcX7, hs_zddRead226DcX8, hs_zddRead326DcX9, hs_zddRead426DcXa, hs_zddRead526DcXb, hs_zddRead626DcXc);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26Ddvy);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddvw, hs_sat26Ddvx);
    };
    hs_zdcreadsPrec1825uOqa.evaluate = function (hs_zddRead26DcXn, hs_zddRead126DcXo, hs_zddRead226DcXp, hs_zddRead326DcXq, hs_zddRead426DcXr, hs_zddRead526DcXs, hs_zddRead626DcXt) {
        var hs_sat26Ddvz = new $hs.Thunk();
        hs_sat26Ddvz.evaluateOnce = function () {
            var hs_sat26DdvA = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DcXn, hs_zddRead126DcXo, hs_zddRead226DcXp, hs_zddRead326DcXq, hs_zddRead426DcXr, hs_zddRead526DcXs, hs_zddRead626DcXt);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DdvA);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddvz);
    };
    hs_zdcreadPrec1725uOrg.evaluate = function (hs_zddRead26DcXE, hs_zddRead126DcXF, hs_zddRead226DcXG, hs_zddRead326DcXH, hs_zddRead426DcXQ, hs_zddRead526DcXR) {
        var hs_optional826DcYa = new $hs.Thunk();
        hs_optional826DcYa.evaluateOnce = function () {
            var hs_sat26DdvC = new $hs.Thunk();
            hs_sat26DdvC.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional826DcYa);
            };
            var hs_sat26DdvB = new $hs.Thunk();
            hs_sat26DdvB.evaluateOnce = function () {
                var hs_sat26DdvD = new $hs.Thunk();
                hs_sat26DdvD.evaluateOnce = function () {
                    var hs_sat26DdvF = new $hs.Func(1);
                    hs_sat26DdvF.evaluate = function (hs_ds26DcXK) {
                        var hs_wild26DdvH = hs_ds26DcXK;
                        if (hs_ds26DcXK.notEvaluated) {
                            hs_wild26DdvH = hs_ds26DcXK.hscall();
                        }
                        var hs_a26DcXY = hs_wild26DdvH.data[0];
                        var hs_b26DcXZ = hs_wild26DdvH.data[1];
                        var hs_c26DcY0 = hs_wild26DdvH.data[2];
                        var hs_d26DcY1 = hs_wild26DdvH.data[3];
                        var hs_sat26DdvG = new $hs.Thunk();
                        hs_sat26DdvG.evaluateOnce = function () {
                            var hs_sat26DdvJ = new $hs.Func(1);
                            hs_sat26DdvJ.evaluate = function (hs_ds126DcXU) {
                                var hs_wild126DdvL = hs_ds126DcXU;
                                if (hs_ds126DcXU.notEvaluated) {
                                    hs_wild126DdvL = hs_ds126DcXU.hscall();
                                }
                                var hs_e26DcY2 = hs_wild126DdvL.data[0];
                                var hs_f26DcY3 = hs_wild126DdvL.data[1];
                                var hs_sat26DdvK = new $hs.Data(1);
                                hs_sat26DdvK.data = [hs_a26DcXY, hs_b26DcXZ, hs_c26DcY0, hs_d26DcY1, hs_e26DcY2, hs_f26DcY3];
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdvK);
                            };
                            var hs_sat26DdvI = new $hs.Thunk();
                            hs_sat26DdvI.evaluateOnce = function () {
                                return hs_readzutup225s1Gj.hscall(hs_zddRead426DcXQ, hs_zddRead526DcXR);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdvI, hs_sat26DdvJ);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s1Gi, hs_sat26DdvG);
                    };
                    var hs_sat26DdvE = new $hs.Thunk();
                    hs_sat26DdvE.evaluateOnce = function () {
                        return hs_readzutup425s1Gk.hscall(hs_zddRead26DcXE, hs_zddRead126DcXF, hs_zddRead226DcXG, hs_zddRead326DcXH);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdvE, hs_sat26DdvF);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26DdvD);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DdvB, hs_sat26DdvC);
        };
        if (hs_optional826DcYa.notEvaluated) {
            return hs_optional826DcYa.hscall();
        } else {
            return hs_optional826DcYa;
        }
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DcYl, hs_zddRead126DcYm, hs_zddRead226DcYn, hs_zddRead326DcYo, hs_zddRead426DcYp, hs_zddRead526DcYq) {
        var hs_sat26DdvN = new $hs.Thunk();
        hs_sat26DdvN.evaluateOnce = function () {
            return hs_zdcreadListPrec1925uOrW.hscall(hs_zddRead26DcYl, hs_zddRead126DcYm, hs_zddRead226DcYn, hs_zddRead326DcYo, hs_zddRead426DcYp, hs_zddRead526DcYq);
        };
        var hs_sat26DdvO = new $hs.Thunk();
        hs_sat26DdvO.evaluateOnce = function () {
            return hs_zdcreadPrec1725uOrg.hscall(hs_zddRead26DcYl, hs_zddRead126DcYm, hs_zddRead226DcYn, hs_zddRead326DcYo, hs_zddRead426DcYp, hs_zddRead526DcYq);
        };
        var hs_sat26DdvP = new $hs.Thunk();
        hs_sat26DdvP.evaluateOnce = function () {
            return hs_zdcreadList1925uOrX.hscall(hs_zddRead26DcYl, hs_zddRead126DcYm, hs_zddRead226DcYn, hs_zddRead326DcYo, hs_zddRead426DcYp, hs_zddRead526DcYq);
        };
        var hs_sat26DdvM = new $hs.Thunk();
        hs_sat26DdvM.evaluateOnce = function () {
            return hs_zdcreadsPrec1925uOrY.hscall(hs_zddRead26DcYl, hs_zddRead126DcYm, hs_zddRead226DcYn, hs_zddRead326DcYo, hs_zddRead426DcYp, hs_zddRead526DcYq);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DdvM, hs_sat26DdvP, hs_sat26DdvO, hs_sat26DdvN];
        return $res;
    };
    hs_zdcreadListPrec1925uOrW.evaluate = function (hs_zddRead26DcYB, hs_zddRead126DcYC, hs_zddRead226DcYD, hs_zddRead326DcYE, hs_zddRead426DcYF, hs_zddRead526DcYG) {
        var hs_sat26DdvQ = new $hs.Thunk();
        hs_sat26DdvQ.evaluateOnce = function () {
            var hs_sat26DdvR = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DcYB, hs_zddRead126DcYC, hs_zddRead226DcYD, hs_zddRead326DcYE, hs_zddRead426DcYF, hs_zddRead526DcYG);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DdvR);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DdvQ);
    };
    hs_zdcreadList1925uOrX.evaluate = function (hs_zddRead26DcYP, hs_zddRead126DcYQ, hs_zddRead226DcYR, hs_zddRead326DcYS, hs_zddRead426DcYT, hs_zddRead526DcYU) {
        var hs_sat26DdvT = new $hs.Data(1);
        hs_sat26DdvT.data = [0];
        var hs_sat26DdvS = new $hs.Thunk();
        hs_sat26DdvS.evaluateOnce = function () {
            var hs_sat26DdvU = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DcYP, hs_zddRead126DcYQ, hs_zddRead226DcYR, hs_zddRead326DcYS, hs_zddRead426DcYT, hs_zddRead526DcYU);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26DdvU);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdvS, hs_sat26DdvT);
    };
    hs_zdcreadsPrec1925uOrY.evaluate = function (hs_zddRead26DcZ4, hs_zddRead126DcZ5, hs_zddRead226DcZ6, hs_zddRead326DcZ7, hs_zddRead426DcZ8, hs_zddRead526DcZ9) {
        var hs_sat26DdvV = new $hs.Thunk();
        hs_sat26DdvV.evaluateOnce = function () {
            var hs_sat26DdvW = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DcZ4, hs_zddRead126DcZ5, hs_zddRead226DcZ6, hs_zddRead326DcZ7, hs_zddRead426DcZ8, hs_zddRead526DcZ9);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DdvW);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdvV);
    };
    hs_zdcreadPrec1825uOsW.evaluate = function (hs_zddRead26DcZj, hs_zddRead126DcZk, hs_zddRead226DcZl, hs_zddRead326DcZm, hs_zddRead426DcZv) {
        var hs_optional826DcZJ = new $hs.Thunk();
        hs_optional826DcZJ.evaluateOnce = function () {
            var hs_sat26DdvY = new $hs.Thunk();
            hs_sat26DdvY.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional826DcZJ);
            };
            var hs_sat26DdvX = new $hs.Thunk();
            hs_sat26DdvX.evaluateOnce = function () {
                var hs_sat26DdvZ = new $hs.Thunk();
                hs_sat26DdvZ.evaluateOnce = function () {
                    var hs_sat26Ddw1 = new $hs.Func(1);
                    hs_sat26Ddw1.evaluate = function (hs_ds26DcZp) {
                        var hs_wild26Ddw3 = hs_ds26DcZp;
                        if (hs_ds26DcZp.notEvaluated) {
                            hs_wild26Ddw3 = hs_ds26DcZp.hscall();
                        }
                        var hs_a26DcZy = hs_wild26Ddw3.data[0];
                        var hs_b26DcZz = hs_wild26Ddw3.data[1];
                        var hs_c26DcZA = hs_wild26Ddw3.data[2];
                        var hs_d26DcZB = hs_wild26Ddw3.data[3];
                        var hs_sat26Ddw2 = new $hs.Thunk();
                        hs_sat26Ddw2.evaluateOnce = function () {
                            var hs_sat26Ddw5 = new $hs.Func(1);
                            hs_sat26Ddw5.evaluate = function (hs_e26DcZC) {
                                var hs_sat26Ddw6 = new $hs.Data(1);
                                hs_sat26Ddw6.data = [hs_a26DcZy, hs_b26DcZz, hs_c26DcZA, hs_d26DcZB, hs_e26DcZC];
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddw6);
                            };
                            var hs_sat26Ddw4 = new $hs.Thunk();
                            hs_sat26Ddw4.evaluateOnce = function () {
                                return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead426DcZv);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddw4, hs_sat26Ddw5);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s1Gi, hs_sat26Ddw2);
                    };
                    var hs_sat26Ddw0 = new $hs.Thunk();
                    hs_sat26Ddw0.evaluateOnce = function () {
                        return hs_readzutup425s1Gk.hscall(hs_zddRead26DcZj, hs_zddRead126DcZk, hs_zddRead226DcZl, hs_zddRead326DcZm);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddw0, hs_sat26Ddw1);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26DdvZ);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DdvX, hs_sat26DdvY);
        };
        if (hs_optional826DcZJ.notEvaluated) {
            return hs_optional826DcZJ.hscall();
        } else {
            return hs_optional826DcZJ;
        }
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DcZT, hs_zddRead126DcZU, hs_zddRead226DcZV, hs_zddRead326DcZW, hs_zddRead426DcZX) {
        var hs_sat26Ddw8 = new $hs.Thunk();
        hs_sat26Ddw8.evaluateOnce = function () {
            return hs_zdcreadListPrec2025uOtv.hscall(hs_zddRead26DcZT, hs_zddRead126DcZU, hs_zddRead226DcZV, hs_zddRead326DcZW, hs_zddRead426DcZX);
        };
        var hs_sat26Ddw9 = new $hs.Thunk();
        hs_sat26Ddw9.evaluateOnce = function () {
            return hs_zdcreadPrec1825uOsW.hscall(hs_zddRead26DcZT, hs_zddRead126DcZU, hs_zddRead226DcZV, hs_zddRead326DcZW, hs_zddRead426DcZX);
        };
        var hs_sat26Ddwa = new $hs.Thunk();
        hs_sat26Ddwa.evaluateOnce = function () {
            return hs_zdcreadList2025uOtw.hscall(hs_zddRead26DcZT, hs_zddRead126DcZU, hs_zddRead226DcZV, hs_zddRead326DcZW, hs_zddRead426DcZX);
        };
        var hs_sat26Ddw7 = new $hs.Thunk();
        hs_sat26Ddw7.evaluateOnce = function () {
            return hs_zdcreadsPrec2025uOtx.hscall(hs_zddRead26DcZT, hs_zddRead126DcZU, hs_zddRead226DcZV, hs_zddRead326DcZW, hs_zddRead426DcZX);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddw7, hs_sat26Ddwa, hs_sat26Ddw9, hs_sat26Ddw8];
        return $res;
    };
    hs_zdcreadListPrec2025uOtv.evaluate = function (hs_zddRead26Dd07, hs_zddRead126Dd08, hs_zddRead226Dd09, hs_zddRead326Dd0a, hs_zddRead426Dd0b) {
        var hs_sat26Ddwb = new $hs.Thunk();
        hs_sat26Ddwb.evaluateOnce = function () {
            var hs_sat26Ddwc = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26Dd07, hs_zddRead126Dd08, hs_zddRead226Dd09, hs_zddRead326Dd0a, hs_zddRead426Dd0b);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26Ddwc);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26Ddwb);
    };
    hs_zdcreadList2025uOtw.evaluate = function (hs_zddRead26Dd0j, hs_zddRead126Dd0k, hs_zddRead226Dd0l, hs_zddRead326Dd0m, hs_zddRead426Dd0n) {
        var hs_sat26Ddwe = new $hs.Data(1);
        hs_sat26Ddwe.data = [0];
        var hs_sat26Ddwd = new $hs.Thunk();
        hs_sat26Ddwd.evaluateOnce = function () {
            var hs_sat26Ddwf = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26Dd0j, hs_zddRead126Dd0k, hs_zddRead226Dd0l, hs_zddRead326Dd0m, hs_zddRead426Dd0n);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26Ddwf);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddwd, hs_sat26Ddwe);
    };
    hs_zdcreadsPrec2025uOtx.evaluate = function (hs_zddRead26Dd0w, hs_zddRead126Dd0x, hs_zddRead226Dd0y, hs_zddRead326Dd0z, hs_zddRead426Dd0A) {
        var hs_sat26Ddwg = new $hs.Thunk();
        hs_sat26Ddwg.evaluateOnce = function () {
            var hs_sat26Ddwh = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26Dd0w, hs_zddRead126Dd0x, hs_zddRead226Dd0y, hs_zddRead326Dd0z, hs_zddRead426Dd0A);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26Ddwh);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddwg);
    };
    hs_zdcreadPrec1925uOun.evaluate = function (hs_zddRead26Dd0J, hs_zddRead126Dd0K, hs_zddRead226Dd0L, hs_zddRead326Dd0M) {
        var hs_optional826Dd0P = new $hs.Thunk();
        hs_optional826Dd0P.evaluateOnce = function () {
            var hs_sat26Ddwj = new $hs.Thunk();
            hs_sat26Ddwj.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional826Dd0P);
            };
            var hs_sat26Ddwi = new $hs.Thunk();
            hs_sat26Ddwi.evaluateOnce = function () {
                var hs_sat26Ddwk = new $hs.Thunk();
                hs_sat26Ddwk.evaluateOnce = function () {
                    return hs_readzutup425s1Gk.hscall(hs_zddRead26Dd0J, hs_zddRead126Dd0K, hs_zddRead226Dd0L, hs_zddRead326Dd0M);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26Ddwk);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26Ddwi, hs_sat26Ddwj);
        };
        if (hs_optional826Dd0P.notEvaluated) {
            return hs_optional826Dd0P.hscall();
        } else {
            return hs_optional826Dd0P;
        }
    };
    this.hs_zdfReadZLz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26Dd0Y, hs_zddRead126Dd0Z, hs_zddRead226Dd10, hs_zddRead326Dd11) {
        var hs_sat26Ddwm = new $hs.Thunk();
        hs_sat26Ddwm.evaluateOnce = function () {
            return hs_zdcreadListPrec2125uOuB.hscall(hs_zddRead26Dd0Y, hs_zddRead126Dd0Z, hs_zddRead226Dd10, hs_zddRead326Dd11);
        };
        var hs_sat26Ddwn = new $hs.Thunk();
        hs_sat26Ddwn.evaluateOnce = function () {
            return hs_zdcreadPrec1925uOun.hscall(hs_zddRead26Dd0Y, hs_zddRead126Dd0Z, hs_zddRead226Dd10, hs_zddRead326Dd11);
        };
        var hs_sat26Ddwo = new $hs.Thunk();
        hs_sat26Ddwo.evaluateOnce = function () {
            return hs_zdcreadList2125uOuC.hscall(hs_zddRead26Dd0Y, hs_zddRead126Dd0Z, hs_zddRead226Dd10, hs_zddRead326Dd11);
        };
        var hs_sat26Ddwl = new $hs.Thunk();
        hs_sat26Ddwl.evaluateOnce = function () {
            return hs_zdcreadsPrec2125uOuD.hscall(hs_zddRead26Dd0Y, hs_zddRead126Dd0Z, hs_zddRead226Dd10, hs_zddRead326Dd11);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddwl, hs_sat26Ddwo, hs_sat26Ddwn, hs_sat26Ddwm];
        return $res;
    };
    hs_zdcreadListPrec2125uOuB.evaluate = function (hs_zddRead26Dd1a, hs_zddRead126Dd1b, hs_zddRead226Dd1c, hs_zddRead326Dd1d) {
        var hs_sat26Ddwp = new $hs.Thunk();
        hs_sat26Ddwp.evaluateOnce = function () {
            var hs_sat26Ddwq = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUZR.hscall(hs_zddRead26Dd1a, hs_zddRead126Dd1b, hs_zddRead226Dd1c, hs_zddRead326Dd1d);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26Ddwq);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26Ddwp);
    };
    hs_zdcreadList2125uOuC.evaluate = function (hs_zddRead26Dd1k, hs_zddRead126Dd1l, hs_zddRead226Dd1m, hs_zddRead326Dd1n) {
        var hs_sat26Ddws = new $hs.Data(1);
        hs_sat26Ddws.data = [0];
        var hs_sat26Ddwr = new $hs.Thunk();
        hs_sat26Ddwr.evaluateOnce = function () {
            var hs_sat26Ddwt = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUZR.hscall(hs_zddRead26Dd1k, hs_zddRead126Dd1l, hs_zddRead226Dd1m, hs_zddRead326Dd1n);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26Ddwt);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddwr, hs_sat26Ddws);
    };
    hs_zdcreadsPrec2125uOuD.evaluate = function (hs_zddRead26Dd1v, hs_zddRead126Dd1w, hs_zddRead226Dd1x, hs_zddRead326Dd1y) {
        var hs_sat26Ddwu = new $hs.Thunk();
        hs_sat26Ddwu.evaluateOnce = function () {
            var hs_sat26Ddwv = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUZR.hscall(hs_zddRead26Dd1v, hs_zddRead126Dd1w, hs_zddRead226Dd1x, hs_zddRead326Dd1y);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26Ddwv);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddwu);
    };
    hs_readzutup825s1Gl.evaluate = function (hs_zddRead26Dd1J, hs_zddRead126Dd1K, hs_zddRead226Dd1L, hs_zddRead326Dd1M, hs_zddRead426Dd1V, hs_zddRead526Dd1W, hs_zddRead626Dd1X, hs_zddRead726Dd1Y) {
        var hs_sat26Ddwx = new $hs.Func(1);
        hs_sat26Ddwx.evaluate = function (hs_ds26Dd1P) {
            var hs_wild26Ddwz = hs_ds26Dd1P;
            if (hs_ds26Dd1P.notEvaluated) {
                hs_wild26Ddwz = hs_ds26Dd1P.hscall();
            }
            var hs_a26Dd27 = hs_wild26Ddwz.data[0];
            var hs_b26Dd28 = hs_wild26Ddwz.data[1];
            var hs_c26Dd29 = hs_wild26Ddwz.data[2];
            var hs_d26Dd2a = hs_wild26Ddwz.data[3];
            var hs_sat26Ddwy = new $hs.Thunk();
            hs_sat26Ddwy.evaluateOnce = function () {
                var hs_sat26DdwB = new $hs.Func(1);
                hs_sat26DdwB.evaluate = function (hs_ds126Dd21) {
                    var hs_wild126DdwD = hs_ds126Dd21;
                    if (hs_ds126Dd21.notEvaluated) {
                        hs_wild126DdwD = hs_ds126Dd21.hscall();
                    }
                    var hs_e26Dd2b = hs_wild126DdwD.data[0];
                    var hs_f26Dd2c = hs_wild126DdwD.data[1];
                    var hs_g26Dd2d = hs_wild126DdwD.data[2];
                    var hs_h26Dd2e = hs_wild126DdwD.data[3];
                    var hs_sat26DdwC = new $hs.Data(1);
                    hs_sat26DdwC.data = [hs_a26Dd27, hs_b26Dd28, hs_c26Dd29, hs_d26Dd2a, hs_e26Dd2b, hs_f26Dd2c, hs_g26Dd2d, hs_h26Dd2e];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdwC);
                };
                var hs_sat26DdwA = new $hs.Thunk();
                hs_sat26DdwA.evaluateOnce = function () {
                    return hs_readzutup425s1Gk.hscall(hs_zddRead426Dd1V, hs_zddRead526Dd1W, hs_zddRead626Dd1X, hs_zddRead726Dd1Y);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdwA, hs_sat26DdwB);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s1Gi, hs_sat26Ddwy);
        };
        var hs_sat26Ddww = new $hs.Thunk();
        hs_sat26Ddww.evaluateOnce = function () {
            return hs_readzutup425s1Gk.hscall(hs_zddRead26Dd1J, hs_zddRead126Dd1K, hs_zddRead226Dd1L, hs_zddRead326Dd1M);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddww, hs_sat26Ddwx);
    };
    hs_zdcreadPrec2025uOw3.evaluate = function (hs_zddRead26Dd2A, hs_zddRead126Dd2B, hs_zddRead226Dd2C, hs_zddRead326Dd2D, hs_zddRead426Dd2E, hs_zddRead526Dd2F, hs_zddRead626Dd2G, hs_zddRead726Dd2H, hs_zddRead826Dd2U, hs_zddRead926Dd2V, hs_zddRead1026Dd2W, hs_zddRead1126Dd2X, hs_zddRead1226Dd36, hs_zddRead1326Dd37, hs_zddRead1426Dd3e) {
        var hs_optional826Dd3G = new $hs.Thunk();
        hs_optional826Dd3G.evaluateOnce = function () {
            var hs_sat26DdwF = new $hs.Thunk();
            hs_sat26DdwF.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional826Dd3G);
            };
            var hs_sat26DdwE = new $hs.Thunk();
            hs_sat26DdwE.evaluateOnce = function () {
                var hs_sat26DdwG = new $hs.Thunk();
                hs_sat26DdwG.evaluateOnce = function () {
                    var hs_sat26DdwI = new $hs.Func(1);
                    hs_sat26DdwI.evaluate = function (hs_ds26Dd2K) {
                        var hs_wild26DdwK = hs_ds26Dd2K;
                        if (hs_ds26Dd2K.notEvaluated) {
                            hs_wild26DdwK = hs_ds26Dd2K.hscall();
                        }
                        var hs_a26Dd3h = hs_wild26DdwK.data[0];
                        var hs_b26Dd3i = hs_wild26DdwK.data[1];
                        var hs_c26Dd3j = hs_wild26DdwK.data[2];
                        var hs_d26Dd3k = hs_wild26DdwK.data[3];
                        var hs_e26Dd3l = hs_wild26DdwK.data[4];
                        var hs_f26Dd3m = hs_wild26DdwK.data[5];
                        var hs_g26Dd3n = hs_wild26DdwK.data[6];
                        var hs_h26Dd3o = hs_wild26DdwK.data[7];
                        var hs_sat26DdwJ = new $hs.Thunk();
                        hs_sat26DdwJ.evaluateOnce = function () {
                            var hs_sat26DdwM = new $hs.Func(1);
                            hs_sat26DdwM.evaluate = function (hs_ds126Dd30) {
                                var hs_wild126DdwO = hs_ds126Dd30;
                                if (hs_ds126Dd30.notEvaluated) {
                                    hs_wild126DdwO = hs_ds126Dd30.hscall();
                                }
                                var hs_i26Dd3p = hs_wild126DdwO.data[0];
                                var hs_j26Dd3q = hs_wild126DdwO.data[1];
                                var hs_k26Dd3r = hs_wild126DdwO.data[2];
                                var hs_l26Dd3s = hs_wild126DdwO.data[3];
                                var hs_sat26DdwN = new $hs.Thunk();
                                hs_sat26DdwN.evaluateOnce = function () {
                                    var hs_sat26DdwQ = new $hs.Func(1);
                                    hs_sat26DdwQ.evaluate = function (hs_ds226Dd3a) {
                                        var hs_wild226DdwS = hs_ds226Dd3a;
                                        if (hs_ds226Dd3a.notEvaluated) {
                                            hs_wild226DdwS = hs_ds226Dd3a.hscall();
                                        }
                                        var hs_m26Dd3t = hs_wild226DdwS.data[0];
                                        var hs_n26Dd3u = hs_wild226DdwS.data[1];
                                        var hs_sat26DdwR = new $hs.Thunk();
                                        hs_sat26DdwR.evaluateOnce = function () {
                                            var hs_sat26DdwU = new $hs.Func(1);
                                            hs_sat26DdwU.evaluate = function (hs_o26Dd3v) {
                                                var hs_sat26DdwV = new $hs.Data(1);
                                                hs_sat26DdwV.data = [hs_a26Dd3h, hs_b26Dd3i, hs_c26Dd3j, hs_d26Dd3k, hs_e26Dd3l, hs_f26Dd3m, hs_g26Dd3n, hs_h26Dd3o, hs_i26Dd3p, hs_j26Dd3q, hs_k26Dd3r, hs_l26Dd3s, hs_m26Dd3t, hs_n26Dd3u, hs_o26Dd3v];
                                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdwV);
                                            };
                                            var hs_sat26DdwT = new $hs.Thunk();
                                            hs_sat26DdwT.evaluateOnce = function () {
                                                return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead1426Dd3e);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdwT, hs_sat26DdwU);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s1Gi, hs_sat26DdwR);
                                    };
                                    var hs_sat26DdwP = new $hs.Thunk();
                                    hs_sat26DdwP.evaluateOnce = function () {
                                        return hs_readzutup225s1Gj.hscall(hs_zddRead1226Dd36, hs_zddRead1326Dd37);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdwP, hs_sat26DdwQ);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s1Gi, hs_sat26DdwN);
                            };
                            var hs_sat26DdwL = new $hs.Thunk();
                            hs_sat26DdwL.evaluateOnce = function () {
                                return hs_readzutup425s1Gk.hscall(hs_zddRead826Dd2U, hs_zddRead926Dd2V, hs_zddRead1026Dd2W, hs_zddRead1126Dd2X);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdwL, hs_sat26DdwM);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s1Gi, hs_sat26DdwJ);
                    };
                    var hs_sat26DdwH = new $hs.Thunk();
                    hs_sat26DdwH.evaluateOnce = function () {
                        return hs_readzutup825s1Gl.hscall(hs_zddRead26Dd2A, hs_zddRead126Dd2B, hs_zddRead226Dd2C, hs_zddRead326Dd2D, hs_zddRead426Dd2E, hs_zddRead526Dd2F, hs_zddRead626Dd2G, hs_zddRead726Dd2H);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdwH, hs_sat26DdwI);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26DdwG);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DdwE, hs_sat26DdwF);
        };
        if (hs_optional826Dd3G.notEvaluated) {
            return hs_optional826Dd3G.hscall();
        } else {
            return hs_optional826Dd3G;
        }
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26Dd40, hs_zddRead126Dd41, hs_zddRead226Dd42, hs_zddRead326Dd43, hs_zddRead426Dd44, hs_zddRead526Dd45, hs_zddRead626Dd46, hs_zddRead726Dd47, hs_zddRead826Dd48, hs_zddRead926Dd49, hs_zddRead1026Dd4a, hs_zddRead1126Dd4b, hs_zddRead1226Dd4c, hs_zddRead1326Dd4d, hs_zddRead1426Dd4e) {
        var hs_sat26DdwX = new $hs.Thunk();
        hs_sat26DdwX.evaluateOnce = function () {
            return hs_zdcreadListPrec2225uOxs.hscall(hs_zddRead26Dd40, hs_zddRead126Dd41, hs_zddRead226Dd42, hs_zddRead326Dd43, hs_zddRead426Dd44, hs_zddRead526Dd45, hs_zddRead626Dd46, hs_zddRead726Dd47, hs_zddRead826Dd48, hs_zddRead926Dd49, hs_zddRead1026Dd4a, hs_zddRead1126Dd4b, hs_zddRead1226Dd4c, hs_zddRead1326Dd4d, hs_zddRead1426Dd4e);
        };
        var hs_sat26DdwY = new $hs.Thunk();
        hs_sat26DdwY.evaluateOnce = function () {
            return hs_zdcreadPrec2025uOw3.hscall(hs_zddRead26Dd40, hs_zddRead126Dd41, hs_zddRead226Dd42, hs_zddRead326Dd43, hs_zddRead426Dd44, hs_zddRead526Dd45, hs_zddRead626Dd46, hs_zddRead726Dd47, hs_zddRead826Dd48, hs_zddRead926Dd49, hs_zddRead1026Dd4a, hs_zddRead1126Dd4b, hs_zddRead1226Dd4c, hs_zddRead1326Dd4d, hs_zddRead1426Dd4e);
        };
        var hs_sat26DdwZ = new $hs.Thunk();
        hs_sat26DdwZ.evaluateOnce = function () {
            return hs_zdcreadList2225uOxt.hscall(hs_zddRead26Dd40, hs_zddRead126Dd41, hs_zddRead226Dd42, hs_zddRead326Dd43, hs_zddRead426Dd44, hs_zddRead526Dd45, hs_zddRead626Dd46, hs_zddRead726Dd47, hs_zddRead826Dd48, hs_zddRead926Dd49, hs_zddRead1026Dd4a, hs_zddRead1126Dd4b, hs_zddRead1226Dd4c, hs_zddRead1326Dd4d, hs_zddRead1426Dd4e);
        };
        var hs_sat26DdwW = new $hs.Thunk();
        hs_sat26DdwW.evaluateOnce = function () {
            return hs_zdcreadsPrec2225uOxu.hscall(hs_zddRead26Dd40, hs_zddRead126Dd41, hs_zddRead226Dd42, hs_zddRead326Dd43, hs_zddRead426Dd44, hs_zddRead526Dd45, hs_zddRead626Dd46, hs_zddRead726Dd47, hs_zddRead826Dd48, hs_zddRead926Dd49, hs_zddRead1026Dd4a, hs_zddRead1126Dd4b, hs_zddRead1226Dd4c, hs_zddRead1326Dd4d, hs_zddRead1426Dd4e);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DdwW, hs_sat26DdwZ, hs_sat26DdwY, hs_sat26DdwX];
        return $res;
    };
    hs_zdcreadListPrec2225uOxs.evaluate = function (hs_zddRead26Dd4y, hs_zddRead126Dd4z, hs_zddRead226Dd4A, hs_zddRead326Dd4B, hs_zddRead426Dd4C, hs_zddRead526Dd4D, hs_zddRead626Dd4E, hs_zddRead726Dd4F, hs_zddRead826Dd4G, hs_zddRead926Dd4H, hs_zddRead1026Dd4I, hs_zddRead1126Dd4J, hs_zddRead1226Dd4K, hs_zddRead1326Dd4L, hs_zddRead1426Dd4M) {
        var hs_sat26Ddx0 = new $hs.Thunk();
        hs_sat26Ddx0.evaluateOnce = function () {
            var hs_sat26Ddx1 = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26Dd4y, hs_zddRead126Dd4z, hs_zddRead226Dd4A, hs_zddRead326Dd4B, hs_zddRead426Dd4C, hs_zddRead526Dd4D, hs_zddRead626Dd4E, hs_zddRead726Dd4F, hs_zddRead826Dd4G, hs_zddRead926Dd4H, hs_zddRead1026Dd4I, hs_zddRead1126Dd4J, hs_zddRead1226Dd4K, hs_zddRead1326Dd4L, hs_zddRead1426Dd4M);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26Ddx1);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26Ddx0);
    };
    hs_zdcreadList2225uOxt.evaluate = function (hs_zddRead26Dd54, hs_zddRead126Dd55, hs_zddRead226Dd56, hs_zddRead326Dd57, hs_zddRead426Dd58, hs_zddRead526Dd59, hs_zddRead626Dd5a, hs_zddRead726Dd5b, hs_zddRead826Dd5c, hs_zddRead926Dd5d, hs_zddRead1026Dd5e, hs_zddRead1126Dd5f, hs_zddRead1226Dd5g, hs_zddRead1326Dd5h, hs_zddRead1426Dd5i) {
        var hs_sat26Ddx3 = new $hs.Data(1);
        hs_sat26Ddx3.data = [0];
        var hs_sat26Ddx2 = new $hs.Thunk();
        hs_sat26Ddx2.evaluateOnce = function () {
            var hs_sat26Ddx4 = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26Dd54, hs_zddRead126Dd55, hs_zddRead226Dd56, hs_zddRead326Dd57, hs_zddRead426Dd58, hs_zddRead526Dd59, hs_zddRead626Dd5a, hs_zddRead726Dd5b, hs_zddRead826Dd5c, hs_zddRead926Dd5d, hs_zddRead1026Dd5e, hs_zddRead1126Dd5f, hs_zddRead1226Dd5g, hs_zddRead1326Dd5h, hs_zddRead1426Dd5i);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26Ddx4);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddx2, hs_sat26Ddx3);
    };
    hs_zdcreadsPrec2225uOxu.evaluate = function (hs_zddRead26Dd5B, hs_zddRead126Dd5C, hs_zddRead226Dd5D, hs_zddRead326Dd5E, hs_zddRead426Dd5F, hs_zddRead526Dd5G, hs_zddRead626Dd5H, hs_zddRead726Dd5I, hs_zddRead826Dd5J, hs_zddRead926Dd5K, hs_zddRead1026Dd5L, hs_zddRead1126Dd5M, hs_zddRead1226Dd5N, hs_zddRead1326Dd5O, hs_zddRead1426Dd5P) {
        var hs_sat26Ddx5 = new $hs.Thunk();
        hs_sat26Ddx5.evaluateOnce = function () {
            var hs_sat26Ddx6 = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26Dd5B, hs_zddRead126Dd5C, hs_zddRead226Dd5D, hs_zddRead326Dd5E, hs_zddRead426Dd5F, hs_zddRead526Dd5G, hs_zddRead626Dd5H, hs_zddRead726Dd5I, hs_zddRead826Dd5J, hs_zddRead926Dd5K, hs_zddRead1026Dd5L, hs_zddRead1126Dd5M, hs_zddRead1226Dd5N, hs_zddRead1326Dd5O, hs_zddRead1426Dd5P);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26Ddx6);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddx5);
    };
    hs_zdcreadPrec2125uOzC.evaluate = function (hs_zddRead26Dd68, hs_zddRead126Dd69, hs_zddRead226Dd6a, hs_zddRead326Dd6b, hs_zddRead426Dd6c, hs_zddRead526Dd6d, hs_zddRead626Dd6e, hs_zddRead726Dd6f, hs_zddRead826Dd6s, hs_zddRead926Dd6t, hs_zddRead1026Dd6u, hs_zddRead1126Dd6v, hs_zddRead1226Dd6E, hs_zddRead1326Dd6F) {
        var hs_optional826Dd78 = new $hs.Thunk();
        hs_optional826Dd78.evaluateOnce = function () {
            var hs_sat26Ddx8 = new $hs.Thunk();
            hs_sat26Ddx8.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional826Dd78);
            };
            var hs_sat26Ddx7 = new $hs.Thunk();
            hs_sat26Ddx7.evaluateOnce = function () {
                var hs_sat26Ddx9 = new $hs.Thunk();
                hs_sat26Ddx9.evaluateOnce = function () {
                    var hs_sat26Ddxb = new $hs.Func(1);
                    hs_sat26Ddxb.evaluate = function (hs_ds26Dd6i) {
                        var hs_wild26Ddxd = hs_ds26Dd6i;
                        if (hs_ds26Dd6i.notEvaluated) {
                            hs_wild26Ddxd = hs_ds26Dd6i.hscall();
                        }
                        var hs_a26Dd6M = hs_wild26Ddxd.data[0];
                        var hs_b26Dd6N = hs_wild26Ddxd.data[1];
                        var hs_c26Dd6O = hs_wild26Ddxd.data[2];
                        var hs_d26Dd6P = hs_wild26Ddxd.data[3];
                        var hs_e26Dd6Q = hs_wild26Ddxd.data[4];
                        var hs_f26Dd6R = hs_wild26Ddxd.data[5];
                        var hs_g26Dd6S = hs_wild26Ddxd.data[6];
                        var hs_h26Dd6T = hs_wild26Ddxd.data[7];
                        var hs_sat26Ddxc = new $hs.Thunk();
                        hs_sat26Ddxc.evaluateOnce = function () {
                            var hs_sat26Ddxf = new $hs.Func(1);
                            hs_sat26Ddxf.evaluate = function (hs_ds126Dd6y) {
                                var hs_wild126Ddxh = hs_ds126Dd6y;
                                if (hs_ds126Dd6y.notEvaluated) {
                                    hs_wild126Ddxh = hs_ds126Dd6y.hscall();
                                }
                                var hs_i26Dd6U = hs_wild126Ddxh.data[0];
                                var hs_j26Dd6V = hs_wild126Ddxh.data[1];
                                var hs_k26Dd6W = hs_wild126Ddxh.data[2];
                                var hs_l26Dd6X = hs_wild126Ddxh.data[3];
                                var hs_sat26Ddxg = new $hs.Thunk();
                                hs_sat26Ddxg.evaluateOnce = function () {
                                    var hs_sat26Ddxj = new $hs.Func(1);
                                    hs_sat26Ddxj.evaluate = function (hs_ds226Dd6I) {
                                        var hs_wild226Ddxl = hs_ds226Dd6I;
                                        if (hs_ds226Dd6I.notEvaluated) {
                                            hs_wild226Ddxl = hs_ds226Dd6I.hscall();
                                        }
                                        var hs_m26Dd6Y = hs_wild226Ddxl.data[0];
                                        var hs_n26Dd6Z = hs_wild226Ddxl.data[1];
                                        var hs_sat26Ddxk = new $hs.Data(1);
                                        hs_sat26Ddxk.data = [hs_a26Dd6M, hs_b26Dd6N, hs_c26Dd6O, hs_d26Dd6P, hs_e26Dd6Q, hs_f26Dd6R, hs_g26Dd6S, hs_h26Dd6T, hs_i26Dd6U, hs_j26Dd6V, hs_k26Dd6W, hs_l26Dd6X, hs_m26Dd6Y, hs_n26Dd6Z];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddxk);
                                    };
                                    var hs_sat26Ddxi = new $hs.Thunk();
                                    hs_sat26Ddxi.evaluateOnce = function () {
                                        return hs_readzutup225s1Gj.hscall(hs_zddRead1226Dd6E, hs_zddRead1326Dd6F);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddxi, hs_sat26Ddxj);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s1Gi, hs_sat26Ddxg);
                            };
                            var hs_sat26Ddxe = new $hs.Thunk();
                            hs_sat26Ddxe.evaluateOnce = function () {
                                return hs_readzutup425s1Gk.hscall(hs_zddRead826Dd6s, hs_zddRead926Dd6t, hs_zddRead1026Dd6u, hs_zddRead1126Dd6v);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddxe, hs_sat26Ddxf);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s1Gi, hs_sat26Ddxc);
                    };
                    var hs_sat26Ddxa = new $hs.Thunk();
                    hs_sat26Ddxa.evaluateOnce = function () {
                        return hs_readzutup825s1Gl.hscall(hs_zddRead26Dd68, hs_zddRead126Dd69, hs_zddRead226Dd6a, hs_zddRead326Dd6b, hs_zddRead426Dd6c, hs_zddRead526Dd6d, hs_zddRead626Dd6e, hs_zddRead726Dd6f);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddxa, hs_sat26Ddxb);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26Ddx9);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26Ddx7, hs_sat26Ddx8);
        };
        if (hs_optional826Dd78.notEvaluated) {
            return hs_optional826Dd78.hscall();
        } else {
            return hs_optional826Dd78;
        }
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26Dd7r, hs_zddRead126Dd7s, hs_zddRead226Dd7t, hs_zddRead326Dd7u, hs_zddRead426Dd7v, hs_zddRead526Dd7w, hs_zddRead626Dd7x, hs_zddRead726Dd7y, hs_zddRead826Dd7z, hs_zddRead926Dd7A, hs_zddRead1026Dd7B, hs_zddRead1126Dd7C, hs_zddRead1226Dd7D, hs_zddRead1326Dd7E) {
        var hs_sat26Ddxn = new $hs.Thunk();
        hs_sat26Ddxn.evaluateOnce = function () {
            return hs_zdcreadListPrec2325uOAU.hscall(hs_zddRead26Dd7r, hs_zddRead126Dd7s, hs_zddRead226Dd7t, hs_zddRead326Dd7u, hs_zddRead426Dd7v, hs_zddRead526Dd7w, hs_zddRead626Dd7x, hs_zddRead726Dd7y, hs_zddRead826Dd7z, hs_zddRead926Dd7A, hs_zddRead1026Dd7B, hs_zddRead1126Dd7C, hs_zddRead1226Dd7D, hs_zddRead1326Dd7E);
        };
        var hs_sat26Ddxo = new $hs.Thunk();
        hs_sat26Ddxo.evaluateOnce = function () {
            return hs_zdcreadPrec2125uOzC.hscall(hs_zddRead26Dd7r, hs_zddRead126Dd7s, hs_zddRead226Dd7t, hs_zddRead326Dd7u, hs_zddRead426Dd7v, hs_zddRead526Dd7w, hs_zddRead626Dd7x, hs_zddRead726Dd7y, hs_zddRead826Dd7z, hs_zddRead926Dd7A, hs_zddRead1026Dd7B, hs_zddRead1126Dd7C, hs_zddRead1226Dd7D, hs_zddRead1326Dd7E);
        };
        var hs_sat26Ddxp = new $hs.Thunk();
        hs_sat26Ddxp.evaluateOnce = function () {
            return hs_zdcreadList2325uOAV.hscall(hs_zddRead26Dd7r, hs_zddRead126Dd7s, hs_zddRead226Dd7t, hs_zddRead326Dd7u, hs_zddRead426Dd7v, hs_zddRead526Dd7w, hs_zddRead626Dd7x, hs_zddRead726Dd7y, hs_zddRead826Dd7z, hs_zddRead926Dd7A, hs_zddRead1026Dd7B, hs_zddRead1126Dd7C, hs_zddRead1226Dd7D, hs_zddRead1326Dd7E);
        };
        var hs_sat26Ddxm = new $hs.Thunk();
        hs_sat26Ddxm.evaluateOnce = function () {
            return hs_zdcreadsPrec2325uOAW.hscall(hs_zddRead26Dd7r, hs_zddRead126Dd7s, hs_zddRead226Dd7t, hs_zddRead326Dd7u, hs_zddRead426Dd7v, hs_zddRead526Dd7w, hs_zddRead626Dd7x, hs_zddRead726Dd7y, hs_zddRead826Dd7z, hs_zddRead926Dd7A, hs_zddRead1026Dd7B, hs_zddRead1126Dd7C, hs_zddRead1226Dd7D, hs_zddRead1326Dd7E);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddxm, hs_sat26Ddxp, hs_sat26Ddxo, hs_sat26Ddxn];
        return $res;
    };
    hs_zdcreadListPrec2325uOAU.evaluate = function (hs_zddRead26Dd7X, hs_zddRead126Dd7Y, hs_zddRead226Dd7Z, hs_zddRead326Dd80, hs_zddRead426Dd81, hs_zddRead526Dd82, hs_zddRead626Dd83, hs_zddRead726Dd84, hs_zddRead826Dd85, hs_zddRead926Dd86, hs_zddRead1026Dd87, hs_zddRead1126Dd88, hs_zddRead1226Dd89, hs_zddRead1326Dd8a) {
        var hs_sat26Ddxq = new $hs.Thunk();
        hs_sat26Ddxq.evaluateOnce = function () {
            var hs_sat26Ddxr = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26Dd7X, hs_zddRead126Dd7Y, hs_zddRead226Dd7Z, hs_zddRead326Dd80, hs_zddRead426Dd81, hs_zddRead526Dd82, hs_zddRead626Dd83, hs_zddRead726Dd84, hs_zddRead826Dd85, hs_zddRead926Dd86, hs_zddRead1026Dd87, hs_zddRead1126Dd88, hs_zddRead1226Dd89, hs_zddRead1326Dd8a);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26Ddxr);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26Ddxq);
    };
    hs_zdcreadList2325uOAV.evaluate = function (hs_zddRead26Dd8r, hs_zddRead126Dd8s, hs_zddRead226Dd8t, hs_zddRead326Dd8u, hs_zddRead426Dd8v, hs_zddRead526Dd8w, hs_zddRead626Dd8x, hs_zddRead726Dd8y, hs_zddRead826Dd8z, hs_zddRead926Dd8A, hs_zddRead1026Dd8B, hs_zddRead1126Dd8C, hs_zddRead1226Dd8D, hs_zddRead1326Dd8E) {
        var hs_sat26Ddxt = new $hs.Data(1);
        hs_sat26Ddxt.data = [0];
        var hs_sat26Ddxs = new $hs.Thunk();
        hs_sat26Ddxs.evaluateOnce = function () {
            var hs_sat26Ddxu = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26Dd8r, hs_zddRead126Dd8s, hs_zddRead226Dd8t, hs_zddRead326Dd8u, hs_zddRead426Dd8v, hs_zddRead526Dd8w, hs_zddRead626Dd8x, hs_zddRead726Dd8y, hs_zddRead826Dd8z, hs_zddRead926Dd8A, hs_zddRead1026Dd8B, hs_zddRead1126Dd8C, hs_zddRead1226Dd8D, hs_zddRead1326Dd8E);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26Ddxu);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddxs, hs_sat26Ddxt);
    };
    hs_zdcreadsPrec2325uOAW.evaluate = function (hs_zddRead26Dd8W, hs_zddRead126Dd8X, hs_zddRead226Dd8Y, hs_zddRead326Dd8Z, hs_zddRead426Dd90, hs_zddRead526Dd91, hs_zddRead626Dd92, hs_zddRead726Dd93, hs_zddRead826Dd94, hs_zddRead926Dd95, hs_zddRead1026Dd96, hs_zddRead1126Dd97, hs_zddRead1226Dd98, hs_zddRead1326Dd99) {
        var hs_sat26Ddxv = new $hs.Thunk();
        hs_sat26Ddxv.evaluateOnce = function () {
            var hs_sat26Ddxw = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26Dd8W, hs_zddRead126Dd8X, hs_zddRead226Dd8Y, hs_zddRead326Dd8Z, hs_zddRead426Dd90, hs_zddRead526Dd91, hs_zddRead626Dd92, hs_zddRead726Dd93, hs_zddRead826Dd94, hs_zddRead926Dd95, hs_zddRead1026Dd96, hs_zddRead1126Dd97, hs_zddRead1226Dd98, hs_zddRead1326Dd99);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26Ddxw);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddxv);
    };
    hs_zdcreadPrec2225uOCW.evaluate = function (hs_zddRead26Dd9r, hs_zddRead126Dd9s, hs_zddRead226Dd9t, hs_zddRead326Dd9u, hs_zddRead426Dd9v, hs_zddRead526Dd9w, hs_zddRead626Dd9x, hs_zddRead726Dd9y, hs_zddRead826Dd9L, hs_zddRead926Dd9M, hs_zddRead1026Dd9N, hs_zddRead1126Dd9O, hs_zddRead1226Dd9X) {
        var hs_optional826Ddal = new $hs.Thunk();
        hs_optional826Ddal.evaluateOnce = function () {
            var hs_sat26Ddxy = new $hs.Thunk();
            hs_sat26Ddxy.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional826Ddal);
            };
            var hs_sat26Ddxx = new $hs.Thunk();
            hs_sat26Ddxx.evaluateOnce = function () {
                var hs_sat26Ddxz = new $hs.Thunk();
                hs_sat26Ddxz.evaluateOnce = function () {
                    var hs_sat26DdxB = new $hs.Func(1);
                    hs_sat26DdxB.evaluate = function (hs_ds26Dd9B) {
                        var hs_wild26DdxD = hs_ds26Dd9B;
                        if (hs_ds26Dd9B.notEvaluated) {
                            hs_wild26DdxD = hs_ds26Dd9B.hscall();
                        }
                        var hs_a26Dda0 = hs_wild26DdxD.data[0];
                        var hs_b26Dda1 = hs_wild26DdxD.data[1];
                        var hs_c26Dda2 = hs_wild26DdxD.data[2];
                        var hs_d26Dda3 = hs_wild26DdxD.data[3];
                        var hs_e26Dda4 = hs_wild26DdxD.data[4];
                        var hs_f26Dda5 = hs_wild26DdxD.data[5];
                        var hs_g26Dda6 = hs_wild26DdxD.data[6];
                        var hs_h26Dda7 = hs_wild26DdxD.data[7];
                        var hs_sat26DdxC = new $hs.Thunk();
                        hs_sat26DdxC.evaluateOnce = function () {
                            var hs_sat26DdxF = new $hs.Func(1);
                            hs_sat26DdxF.evaluate = function (hs_ds126Dd9R) {
                                var hs_wild126DdxH = hs_ds126Dd9R;
                                if (hs_ds126Dd9R.notEvaluated) {
                                    hs_wild126DdxH = hs_ds126Dd9R.hscall();
                                }
                                var hs_i26Dda8 = hs_wild126DdxH.data[0];
                                var hs_j26Dda9 = hs_wild126DdxH.data[1];
                                var hs_k26Ddaa = hs_wild126DdxH.data[2];
                                var hs_l26Ddab = hs_wild126DdxH.data[3];
                                var hs_sat26DdxG = new $hs.Thunk();
                                hs_sat26DdxG.evaluateOnce = function () {
                                    var hs_sat26DdxJ = new $hs.Func(1);
                                    hs_sat26DdxJ.evaluate = function (hs_m26Ddac) {
                                        var hs_sat26DdxK = new $hs.Data(1);
                                        hs_sat26DdxK.data = [hs_a26Dda0, hs_b26Dda1, hs_c26Dda2, hs_d26Dda3, hs_e26Dda4, hs_f26Dda5, hs_g26Dda6, hs_h26Dda7, hs_i26Dda8, hs_j26Dda9, hs_k26Ddaa, hs_l26Ddab, hs_m26Ddac];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdxK);
                                    };
                                    var hs_sat26DdxI = new $hs.Thunk();
                                    hs_sat26DdxI.evaluateOnce = function () {
                                        return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead1226Dd9X);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdxI, hs_sat26DdxJ);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s1Gi, hs_sat26DdxG);
                            };
                            var hs_sat26DdxE = new $hs.Thunk();
                            hs_sat26DdxE.evaluateOnce = function () {
                                return hs_readzutup425s1Gk.hscall(hs_zddRead826Dd9L, hs_zddRead926Dd9M, hs_zddRead1026Dd9N, hs_zddRead1126Dd9O);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdxE, hs_sat26DdxF);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s1Gi, hs_sat26DdxC);
                    };
                    var hs_sat26DdxA = new $hs.Thunk();
                    hs_sat26DdxA.evaluateOnce = function () {
                        return hs_readzutup825s1Gl.hscall(hs_zddRead26Dd9r, hs_zddRead126Dd9s, hs_zddRead226Dd9t, hs_zddRead326Dd9u, hs_zddRead426Dd9v, hs_zddRead526Dd9w, hs_zddRead626Dd9x, hs_zddRead726Dd9y);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdxA, hs_sat26DdxB);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26Ddxz);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26Ddxx, hs_sat26Ddxy);
        };
        if (hs_optional826Ddal.notEvaluated) {
            return hs_optional826Ddal.hscall();
        } else {
            return hs_optional826Ddal;
        }
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DdaD, hs_zddRead126DdaE, hs_zddRead226DdaF, hs_zddRead326DdaG, hs_zddRead426DdaH, hs_zddRead526DdaI, hs_zddRead626DdaJ, hs_zddRead726DdaK, hs_zddRead826DdaL, hs_zddRead926DdaM, hs_zddRead1026DdaN, hs_zddRead1126DdaO, hs_zddRead1226DdaP) {
        var hs_sat26DdxM = new $hs.Thunk();
        hs_sat26DdxM.evaluateOnce = function () {
            return hs_zdcreadListPrec2425uOE7.hscall(hs_zddRead26DdaD, hs_zddRead126DdaE, hs_zddRead226DdaF, hs_zddRead326DdaG, hs_zddRead426DdaH, hs_zddRead526DdaI, hs_zddRead626DdaJ, hs_zddRead726DdaK, hs_zddRead826DdaL, hs_zddRead926DdaM, hs_zddRead1026DdaN, hs_zddRead1126DdaO, hs_zddRead1226DdaP);
        };
        var hs_sat26DdxN = new $hs.Thunk();
        hs_sat26DdxN.evaluateOnce = function () {
            return hs_zdcreadPrec2225uOCW.hscall(hs_zddRead26DdaD, hs_zddRead126DdaE, hs_zddRead226DdaF, hs_zddRead326DdaG, hs_zddRead426DdaH, hs_zddRead526DdaI, hs_zddRead626DdaJ, hs_zddRead726DdaK, hs_zddRead826DdaL, hs_zddRead926DdaM, hs_zddRead1026DdaN, hs_zddRead1126DdaO, hs_zddRead1226DdaP);
        };
        var hs_sat26DdxO = new $hs.Thunk();
        hs_sat26DdxO.evaluateOnce = function () {
            return hs_zdcreadList2425uOE8.hscall(hs_zddRead26DdaD, hs_zddRead126DdaE, hs_zddRead226DdaF, hs_zddRead326DdaG, hs_zddRead426DdaH, hs_zddRead526DdaI, hs_zddRead626DdaJ, hs_zddRead726DdaK, hs_zddRead826DdaL, hs_zddRead926DdaM, hs_zddRead1026DdaN, hs_zddRead1126DdaO, hs_zddRead1226DdaP);
        };
        var hs_sat26DdxL = new $hs.Thunk();
        hs_sat26DdxL.evaluateOnce = function () {
            return hs_zdcreadsPrec2425uOE9.hscall(hs_zddRead26DdaD, hs_zddRead126DdaE, hs_zddRead226DdaF, hs_zddRead326DdaG, hs_zddRead426DdaH, hs_zddRead526DdaI, hs_zddRead626DdaJ, hs_zddRead726DdaK, hs_zddRead826DdaL, hs_zddRead926DdaM, hs_zddRead1026DdaN, hs_zddRead1126DdaO, hs_zddRead1226DdaP);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DdxL, hs_sat26DdxO, hs_sat26DdxN, hs_sat26DdxM];
        return $res;
    };
    hs_zdcreadListPrec2425uOE7.evaluate = function (hs_zddRead26Ddb7, hs_zddRead126Ddb8, hs_zddRead226Ddb9, hs_zddRead326Ddba, hs_zddRead426Ddbb, hs_zddRead526Ddbc, hs_zddRead626Ddbd, hs_zddRead726Ddbe, hs_zddRead826Ddbf, hs_zddRead926Ddbg, hs_zddRead1026Ddbh, hs_zddRead1126Ddbi, hs_zddRead1226Ddbj) {
        var hs_sat26DdxP = new $hs.Thunk();
        hs_sat26DdxP.evaluateOnce = function () {
            var hs_sat26DdxQ = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26Ddb7, hs_zddRead126Ddb8, hs_zddRead226Ddb9, hs_zddRead326Ddba, hs_zddRead426Ddbb, hs_zddRead526Ddbc, hs_zddRead626Ddbd, hs_zddRead726Ddbe, hs_zddRead826Ddbf, hs_zddRead926Ddbg, hs_zddRead1026Ddbh, hs_zddRead1126Ddbi, hs_zddRead1226Ddbj);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DdxQ);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DdxP);
    };
    hs_zdcreadList2425uOE8.evaluate = function (hs_zddRead26Ddbz, hs_zddRead126DdbA, hs_zddRead226DdbB, hs_zddRead326DdbC, hs_zddRead426DdbD, hs_zddRead526DdbE, hs_zddRead626DdbF, hs_zddRead726DdbG, hs_zddRead826DdbH, hs_zddRead926DdbI, hs_zddRead1026DdbJ, hs_zddRead1126DdbK, hs_zddRead1226DdbL) {
        var hs_sat26DdxS = new $hs.Data(1);
        hs_sat26DdxS.data = [0];
        var hs_sat26DdxR = new $hs.Thunk();
        hs_sat26DdxR.evaluateOnce = function () {
            var hs_sat26DdxT = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26Ddbz, hs_zddRead126DdbA, hs_zddRead226DdbB, hs_zddRead326DdbC, hs_zddRead426DdbD, hs_zddRead526DdbE, hs_zddRead626DdbF, hs_zddRead726DdbG, hs_zddRead826DdbH, hs_zddRead926DdbI, hs_zddRead1026DdbJ, hs_zddRead1126DdbK, hs_zddRead1226DdbL);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26DdxT);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdxR, hs_sat26DdxS);
    };
    hs_zdcreadsPrec2425uOE9.evaluate = function (hs_zddRead26Ddc2, hs_zddRead126Ddc3, hs_zddRead226Ddc4, hs_zddRead326Ddc5, hs_zddRead426Ddc6, hs_zddRead526Ddc7, hs_zddRead626Ddc8, hs_zddRead726Ddc9, hs_zddRead826Ddca, hs_zddRead926Ddcb, hs_zddRead1026Ddcc, hs_zddRead1126Ddcd, hs_zddRead1226Ddce) {
        var hs_sat26DdxU = new $hs.Thunk();
        hs_sat26DdxU.evaluateOnce = function () {
            var hs_sat26DdxV = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26Ddc2, hs_zddRead126Ddc3, hs_zddRead226Ddc4, hs_zddRead326Ddc5, hs_zddRead426Ddc6, hs_zddRead526Ddc7, hs_zddRead626Ddc8, hs_zddRead726Ddc9, hs_zddRead826Ddca, hs_zddRead926Ddcb, hs_zddRead1026Ddcc, hs_zddRead1126Ddcd, hs_zddRead1226Ddce);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DdxV);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdxU);
    };
    hs_zdcreadPrec2325uOG1.evaluate = function (hs_zddRead26Ddcv, hs_zddRead126Ddcw, hs_zddRead226Ddcx, hs_zddRead326Ddcy, hs_zddRead426Ddcz, hs_zddRead526DdcA, hs_zddRead626DdcB, hs_zddRead726DdcC, hs_zddRead826DdcP, hs_zddRead926DdcQ, hs_zddRead1026DdcR, hs_zddRead1126DdcS) {
        var hs_optional826Dddj = new $hs.Thunk();
        hs_optional826Dddj.evaluateOnce = function () {
            var hs_sat26DdxX = new $hs.Thunk();
            hs_sat26DdxX.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional826Dddj);
            };
            var hs_sat26DdxW = new $hs.Thunk();
            hs_sat26DdxW.evaluateOnce = function () {
                var hs_sat26DdxY = new $hs.Thunk();
                hs_sat26DdxY.evaluateOnce = function () {
                    var hs_sat26Ddy0 = new $hs.Func(1);
                    hs_sat26Ddy0.evaluate = function (hs_ds26DdcF) {
                        var hs_wild26Ddy2 = hs_ds26DdcF;
                        if (hs_ds26DdcF.notEvaluated) {
                            hs_wild26Ddy2 = hs_ds26DdcF.hscall();
                        }
                        var hs_a26Ddd1 = hs_wild26Ddy2.data[0];
                        var hs_b26Ddd2 = hs_wild26Ddy2.data[1];
                        var hs_c26Ddd3 = hs_wild26Ddy2.data[2];
                        var hs_d26Ddd4 = hs_wild26Ddy2.data[3];
                        var hs_e26Ddd5 = hs_wild26Ddy2.data[4];
                        var hs_f26Ddd6 = hs_wild26Ddy2.data[5];
                        var hs_g26Ddd7 = hs_wild26Ddy2.data[6];
                        var hs_h26Ddd8 = hs_wild26Ddy2.data[7];
                        var hs_sat26Ddy1 = new $hs.Thunk();
                        hs_sat26Ddy1.evaluateOnce = function () {
                            var hs_sat26Ddy4 = new $hs.Func(1);
                            hs_sat26Ddy4.evaluate = function (hs_ds126DdcV) {
                                var hs_wild126Ddy6 = hs_ds126DdcV;
                                if (hs_ds126DdcV.notEvaluated) {
                                    hs_wild126Ddy6 = hs_ds126DdcV.hscall();
                                }
                                var hs_i26Ddd9 = hs_wild126Ddy6.data[0];
                                var hs_j26Ddda = hs_wild126Ddy6.data[1];
                                var hs_k26Dddb = hs_wild126Ddy6.data[2];
                                var hs_l26Dddc = hs_wild126Ddy6.data[3];
                                var hs_sat26Ddy5 = new $hs.Data(1);
                                hs_sat26Ddy5.data = [hs_a26Ddd1, hs_b26Ddd2, hs_c26Ddd3, hs_d26Ddd4, hs_e26Ddd5, hs_f26Ddd6, hs_g26Ddd7, hs_h26Ddd8, hs_i26Ddd9, hs_j26Ddda, hs_k26Dddb, hs_l26Dddc];
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddy5);
                            };
                            var hs_sat26Ddy3 = new $hs.Thunk();
                            hs_sat26Ddy3.evaluateOnce = function () {
                                return hs_readzutup425s1Gk.hscall(hs_zddRead826DdcP, hs_zddRead926DdcQ, hs_zddRead1026DdcR, hs_zddRead1126DdcS);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddy3, hs_sat26Ddy4);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s1Gi, hs_sat26Ddy1);
                    };
                    var hs_sat26DdxZ = new $hs.Thunk();
                    hs_sat26DdxZ.evaluateOnce = function () {
                        return hs_readzutup825s1Gl.hscall(hs_zddRead26Ddcv, hs_zddRead126Ddcw, hs_zddRead226Ddcx, hs_zddRead326Ddcy, hs_zddRead426Ddcz, hs_zddRead526DdcA, hs_zddRead626DdcB, hs_zddRead726DdcC);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdxZ, hs_sat26Ddy0);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26DdxY);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DdxW, hs_sat26DdxX);
        };
        if (hs_optional826Dddj.notEvaluated) {
            return hs_optional826Dddj.hscall();
        } else {
            return hs_optional826Dddj;
        }
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DddA, hs_zddRead126DddB, hs_zddRead226DddC, hs_zddRead326DddD, hs_zddRead426DddE, hs_zddRead526DddF, hs_zddRead626DddG, hs_zddRead726DddH, hs_zddRead826DddI, hs_zddRead926DddJ, hs_zddRead1026DddK, hs_zddRead1126DddL) {
        var hs_sat26Ddy8 = new $hs.Thunk();
        hs_sat26Ddy8.evaluateOnce = function () {
            return hs_zdcreadListPrec2525uOH5.hscall(hs_zddRead26DddA, hs_zddRead126DddB, hs_zddRead226DddC, hs_zddRead326DddD, hs_zddRead426DddE, hs_zddRead526DddF, hs_zddRead626DddG, hs_zddRead726DddH, hs_zddRead826DddI, hs_zddRead926DddJ, hs_zddRead1026DddK, hs_zddRead1126DddL);
        };
        var hs_sat26Ddy9 = new $hs.Thunk();
        hs_sat26Ddy9.evaluateOnce = function () {
            return hs_zdcreadPrec2325uOG1.hscall(hs_zddRead26DddA, hs_zddRead126DddB, hs_zddRead226DddC, hs_zddRead326DddD, hs_zddRead426DddE, hs_zddRead526DddF, hs_zddRead626DddG, hs_zddRead726DddH, hs_zddRead826DddI, hs_zddRead926DddJ, hs_zddRead1026DddK, hs_zddRead1126DddL);
        };
        var hs_sat26Ddya = new $hs.Thunk();
        hs_sat26Ddya.evaluateOnce = function () {
            return hs_zdcreadList2525uOH6.hscall(hs_zddRead26DddA, hs_zddRead126DddB, hs_zddRead226DddC, hs_zddRead326DddD, hs_zddRead426DddE, hs_zddRead526DddF, hs_zddRead626DddG, hs_zddRead726DddH, hs_zddRead826DddI, hs_zddRead926DddJ, hs_zddRead1026DddK, hs_zddRead1126DddL);
        };
        var hs_sat26Ddy7 = new $hs.Thunk();
        hs_sat26Ddy7.evaluateOnce = function () {
            return hs_zdcreadsPrec2525uOH7.hscall(hs_zddRead26DddA, hs_zddRead126DddB, hs_zddRead226DddC, hs_zddRead326DddD, hs_zddRead426DddE, hs_zddRead526DddF, hs_zddRead626DddG, hs_zddRead726DddH, hs_zddRead826DddI, hs_zddRead926DddJ, hs_zddRead1026DddK, hs_zddRead1126DddL);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddy7, hs_sat26Ddya, hs_sat26Ddy9, hs_sat26Ddy8];
        return $res;
    };
    hs_zdcreadListPrec2525uOH5.evaluate = function (hs_zddRead26Dde2, hs_zddRead126Dde3, hs_zddRead226Dde4, hs_zddRead326Dde5, hs_zddRead426Dde6, hs_zddRead526Dde7, hs_zddRead626Dde8, hs_zddRead726Dde9, hs_zddRead826Ddea, hs_zddRead926Ddeb, hs_zddRead1026Ddec, hs_zddRead1126Dded) {
        var hs_sat26Ddyb = new $hs.Thunk();
        hs_sat26Ddyb.evaluateOnce = function () {
            var hs_sat26Ddyc = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26Dde2, hs_zddRead126Dde3, hs_zddRead226Dde4, hs_zddRead326Dde5, hs_zddRead426Dde6, hs_zddRead526Dde7, hs_zddRead626Dde8, hs_zddRead726Dde9, hs_zddRead826Ddea, hs_zddRead926Ddeb, hs_zddRead1026Ddec, hs_zddRead1126Dded);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26Ddyc);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26Ddyb);
    };
    hs_zdcreadList2525uOH6.evaluate = function (hs_zddRead26Ddes, hs_zddRead126Ddet, hs_zddRead226Ddeu, hs_zddRead326Ddev, hs_zddRead426Ddew, hs_zddRead526Ddex, hs_zddRead626Ddey, hs_zddRead726Ddez, hs_zddRead826DdeA, hs_zddRead926DdeB, hs_zddRead1026DdeC, hs_zddRead1126DdeD) {
        var hs_sat26Ddye = new $hs.Data(1);
        hs_sat26Ddye.data = [0];
        var hs_sat26Ddyd = new $hs.Thunk();
        hs_sat26Ddyd.evaluateOnce = function () {
            var hs_sat26Ddyf = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26Ddes, hs_zddRead126Ddet, hs_zddRead226Ddeu, hs_zddRead326Ddev, hs_zddRead426Ddew, hs_zddRead526Ddex, hs_zddRead626Ddey, hs_zddRead726Ddez, hs_zddRead826DdeA, hs_zddRead926DdeB, hs_zddRead1026DdeC, hs_zddRead1126DdeD);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26Ddyf);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddyd, hs_sat26Ddye);
    };
    hs_zdcreadsPrec2525uOH7.evaluate = function (hs_zddRead26DdeT, hs_zddRead126DdeU, hs_zddRead226DdeV, hs_zddRead326DdeW, hs_zddRead426DdeX, hs_zddRead526DdeY, hs_zddRead626DdeZ, hs_zddRead726Ddf0, hs_zddRead826Ddf1, hs_zddRead926Ddf2, hs_zddRead1026Ddf3, hs_zddRead1126Ddf4) {
        var hs_sat26Ddyg = new $hs.Thunk();
        hs_sat26Ddyg.evaluateOnce = function () {
            var hs_sat26Ddyh = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DdeT, hs_zddRead126DdeU, hs_zddRead226DdeV, hs_zddRead326DdeW, hs_zddRead426DdeX, hs_zddRead526DdeY, hs_zddRead626DdeZ, hs_zddRead726Ddf0, hs_zddRead826Ddf1, hs_zddRead926Ddf2, hs_zddRead1026Ddf3, hs_zddRead1126Ddf4);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26Ddyh);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddyg);
    };
    hs_zdcreadPrec2425uOIR.evaluate = function (hs_zddRead26Ddfk, hs_zddRead126Ddfl, hs_zddRead226Ddfm, hs_zddRead326Ddfn, hs_zddRead426Ddfo, hs_zddRead526Ddfp, hs_zddRead626Ddfq, hs_zddRead726Ddfr, hs_zddRead826DdfE, hs_zddRead926DdfF, hs_zddRead1026DdfM) {
        var hs_optional826Ddg8 = new $hs.Thunk();
        hs_optional826Ddg8.evaluateOnce = function () {
            var hs_sat26Ddyj = new $hs.Thunk();
            hs_sat26Ddyj.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional826Ddg8);
            };
            var hs_sat26Ddyi = new $hs.Thunk();
            hs_sat26Ddyi.evaluateOnce = function () {
                var hs_sat26Ddyk = new $hs.Thunk();
                hs_sat26Ddyk.evaluateOnce = function () {
                    var hs_sat26Ddym = new $hs.Func(1);
                    hs_sat26Ddym.evaluate = function (hs_ds26Ddfu) {
                        var hs_wild26Ddyo = hs_ds26Ddfu;
                        if (hs_ds26Ddfu.notEvaluated) {
                            hs_wild26Ddyo = hs_ds26Ddfu.hscall();
                        }
                        var hs_a26DdfP = hs_wild26Ddyo.data[0];
                        var hs_b26DdfQ = hs_wild26Ddyo.data[1];
                        var hs_c26DdfR = hs_wild26Ddyo.data[2];
                        var hs_d26DdfS = hs_wild26Ddyo.data[3];
                        var hs_e26DdfT = hs_wild26Ddyo.data[4];
                        var hs_f26DdfU = hs_wild26Ddyo.data[5];
                        var hs_g26DdfV = hs_wild26Ddyo.data[6];
                        var hs_h26DdfW = hs_wild26Ddyo.data[7];
                        var hs_sat26Ddyn = new $hs.Thunk();
                        hs_sat26Ddyn.evaluateOnce = function () {
                            var hs_sat26Ddyq = new $hs.Func(1);
                            hs_sat26Ddyq.evaluate = function (hs_ds126DdfI) {
                                var hs_wild126Ddys = hs_ds126DdfI;
                                if (hs_ds126DdfI.notEvaluated) {
                                    hs_wild126Ddys = hs_ds126DdfI.hscall();
                                }
                                var hs_i26DdfX = hs_wild126Ddys.data[0];
                                var hs_j26DdfY = hs_wild126Ddys.data[1];
                                var hs_sat26Ddyr = new $hs.Thunk();
                                hs_sat26Ddyr.evaluateOnce = function () {
                                    var hs_sat26Ddyu = new $hs.Func(1);
                                    hs_sat26Ddyu.evaluate = function (hs_k26DdfZ) {
                                        var hs_sat26Ddyv = new $hs.Data(1);
                                        hs_sat26Ddyv.data = [hs_a26DdfP, hs_b26DdfQ, hs_c26DdfR, hs_d26DdfS, hs_e26DdfT, hs_f26DdfU, hs_g26DdfV, hs_h26DdfW, hs_i26DdfX, hs_j26DdfY, hs_k26DdfZ];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddyv);
                                    };
                                    var hs_sat26Ddyt = new $hs.Thunk();
                                    hs_sat26Ddyt.evaluateOnce = function () {
                                        return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead1026DdfM);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddyt, hs_sat26Ddyu);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s1Gi, hs_sat26Ddyr);
                            };
                            var hs_sat26Ddyp = new $hs.Thunk();
                            hs_sat26Ddyp.evaluateOnce = function () {
                                return hs_readzutup225s1Gj.hscall(hs_zddRead826DdfE, hs_zddRead926DdfF);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddyp, hs_sat26Ddyq);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s1Gi, hs_sat26Ddyn);
                    };
                    var hs_sat26Ddyl = new $hs.Thunk();
                    hs_sat26Ddyl.evaluateOnce = function () {
                        return hs_readzutup825s1Gl.hscall(hs_zddRead26Ddfk, hs_zddRead126Ddfl, hs_zddRead226Ddfm, hs_zddRead326Ddfn, hs_zddRead426Ddfo, hs_zddRead526Ddfp, hs_zddRead626Ddfq, hs_zddRead726Ddfr);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddyl, hs_sat26Ddym);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26Ddyk);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26Ddyi, hs_sat26Ddyj);
        };
        if (hs_optional826Ddg8.notEvaluated) {
            return hs_optional826Ddg8.hscall();
        } else {
            return hs_optional826Ddg8;
        }
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26Ddgo, hs_zddRead126Ddgp, hs_zddRead226Ddgq, hs_zddRead326Ddgr, hs_zddRead426Ddgs, hs_zddRead526Ddgt, hs_zddRead626Ddgu, hs_zddRead726Ddgv, hs_zddRead826Ddgw, hs_zddRead926Ddgx, hs_zddRead1026Ddgy) {
        var hs_sat26Ddyx = new $hs.Thunk();
        hs_sat26Ddyx.evaluateOnce = function () {
            return hs_zdcreadListPrec2625uOJU.hscall(hs_zddRead26Ddgo, hs_zddRead126Ddgp, hs_zddRead226Ddgq, hs_zddRead326Ddgr, hs_zddRead426Ddgs, hs_zddRead526Ddgt, hs_zddRead626Ddgu, hs_zddRead726Ddgv, hs_zddRead826Ddgw, hs_zddRead926Ddgx, hs_zddRead1026Ddgy);
        };
        var hs_sat26Ddyy = new $hs.Thunk();
        hs_sat26Ddyy.evaluateOnce = function () {
            return hs_zdcreadPrec2425uOIR.hscall(hs_zddRead26Ddgo, hs_zddRead126Ddgp, hs_zddRead226Ddgq, hs_zddRead326Ddgr, hs_zddRead426Ddgs, hs_zddRead526Ddgt, hs_zddRead626Ddgu, hs_zddRead726Ddgv, hs_zddRead826Ddgw, hs_zddRead926Ddgx, hs_zddRead1026Ddgy);
        };
        var hs_sat26Ddyz = new $hs.Thunk();
        hs_sat26Ddyz.evaluateOnce = function () {
            return hs_zdcreadList2625uOJV.hscall(hs_zddRead26Ddgo, hs_zddRead126Ddgp, hs_zddRead226Ddgq, hs_zddRead326Ddgr, hs_zddRead426Ddgs, hs_zddRead526Ddgt, hs_zddRead626Ddgu, hs_zddRead726Ddgv, hs_zddRead826Ddgw, hs_zddRead926Ddgx, hs_zddRead1026Ddgy);
        };
        var hs_sat26Ddyw = new $hs.Thunk();
        hs_sat26Ddyw.evaluateOnce = function () {
            return hs_zdcreadsPrec2625uOJW.hscall(hs_zddRead26Ddgo, hs_zddRead126Ddgp, hs_zddRead226Ddgq, hs_zddRead326Ddgr, hs_zddRead426Ddgs, hs_zddRead526Ddgt, hs_zddRead626Ddgu, hs_zddRead726Ddgv, hs_zddRead826Ddgw, hs_zddRead926Ddgx, hs_zddRead1026Ddgy);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddyw, hs_sat26Ddyz, hs_sat26Ddyy, hs_sat26Ddyx];
        return $res;
    };
    hs_zdcreadListPrec2625uOJU.evaluate = function (hs_zddRead26DdgO, hs_zddRead126DdgP, hs_zddRead226DdgQ, hs_zddRead326DdgR, hs_zddRead426DdgS, hs_zddRead526DdgT, hs_zddRead626DdgU, hs_zddRead726DdgV, hs_zddRead826DdgW, hs_zddRead926DdgX, hs_zddRead1026DdgY) {
        var hs_sat26DdyA = new $hs.Thunk();
        hs_sat26DdyA.evaluateOnce = function () {
            var hs_sat26DdyB = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DdgO, hs_zddRead126DdgP, hs_zddRead226DdgQ, hs_zddRead326DdgR, hs_zddRead426DdgS, hs_zddRead526DdgT, hs_zddRead626DdgU, hs_zddRead726DdgV, hs_zddRead826DdgW, hs_zddRead926DdgX, hs_zddRead1026DdgY);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DdyB);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DdyA);
    };
    hs_zdcreadList2625uOJV.evaluate = function (hs_zddRead26Ddhc, hs_zddRead126Ddhd, hs_zddRead226Ddhe, hs_zddRead326Ddhf, hs_zddRead426Ddhg, hs_zddRead526Ddhh, hs_zddRead626Ddhi, hs_zddRead726Ddhj, hs_zddRead826Ddhk, hs_zddRead926Ddhl, hs_zddRead1026Ddhm) {
        var hs_sat26DdyD = new $hs.Data(1);
        hs_sat26DdyD.data = [0];
        var hs_sat26DdyC = new $hs.Thunk();
        hs_sat26DdyC.evaluateOnce = function () {
            var hs_sat26DdyE = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26Ddhc, hs_zddRead126Ddhd, hs_zddRead226Ddhe, hs_zddRead326Ddhf, hs_zddRead426Ddhg, hs_zddRead526Ddhh, hs_zddRead626Ddhi, hs_zddRead726Ddhj, hs_zddRead826Ddhk, hs_zddRead926Ddhl, hs_zddRead1026Ddhm);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26DdyE);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdyC, hs_sat26DdyD);
    };
    hs_zdcreadsPrec2625uOJW.evaluate = function (hs_zddRead26DdhB, hs_zddRead126DdhC, hs_zddRead226DdhD, hs_zddRead326DdhE, hs_zddRead426DdhF, hs_zddRead526DdhG, hs_zddRead626DdhH, hs_zddRead726DdhI, hs_zddRead826DdhJ, hs_zddRead926DdhK, hs_zddRead1026DdhL) {
        var hs_sat26DdyF = new $hs.Thunk();
        hs_sat26DdyF.evaluateOnce = function () {
            var hs_sat26DdyG = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DdhB, hs_zddRead126DdhC, hs_zddRead226DdhD, hs_zddRead326DdhE, hs_zddRead426DdhF, hs_zddRead526DdhG, hs_zddRead626DdhH, hs_zddRead726DdhI, hs_zddRead826DdhJ, hs_zddRead926DdhK, hs_zddRead1026DdhL);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DdyG);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdyF);
    };
    hs_zdcreadPrec2525uOLy.evaluate = function (hs_zddRead26Ddi0, hs_zddRead126Ddi1, hs_zddRead226Ddi2, hs_zddRead326Ddi3, hs_zddRead426Ddi4, hs_zddRead526Ddi5, hs_zddRead626Ddi6, hs_zddRead726Ddi7, hs_zddRead826Ddik, hs_zddRead926Ddil) {
        var hs_optional826DdiI = new $hs.Thunk();
        hs_optional826DdiI.evaluateOnce = function () {
            var hs_sat26DdyI = new $hs.Thunk();
            hs_sat26DdyI.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional826DdiI);
            };
            var hs_sat26DdyH = new $hs.Thunk();
            hs_sat26DdyH.evaluateOnce = function () {
                var hs_sat26DdyJ = new $hs.Thunk();
                hs_sat26DdyJ.evaluateOnce = function () {
                    var hs_sat26DdyL = new $hs.Func(1);
                    hs_sat26DdyL.evaluate = function (hs_ds26Ddia) {
                        var hs_wild26DdyN = hs_ds26Ddia;
                        if (hs_ds26Ddia.notEvaluated) {
                            hs_wild26DdyN = hs_ds26Ddia.hscall();
                        }
                        var hs_a26Ddis = hs_wild26DdyN.data[0];
                        var hs_b26Ddit = hs_wild26DdyN.data[1];
                        var hs_c26Ddiu = hs_wild26DdyN.data[2];
                        var hs_d26Ddiv = hs_wild26DdyN.data[3];
                        var hs_e26Ddiw = hs_wild26DdyN.data[4];
                        var hs_f26Ddix = hs_wild26DdyN.data[5];
                        var hs_g26Ddiy = hs_wild26DdyN.data[6];
                        var hs_h26Ddiz = hs_wild26DdyN.data[7];
                        var hs_sat26DdyM = new $hs.Thunk();
                        hs_sat26DdyM.evaluateOnce = function () {
                            var hs_sat26DdyP = new $hs.Func(1);
                            hs_sat26DdyP.evaluate = function (hs_ds126Ddio) {
                                var hs_wild126DdyR = hs_ds126Ddio;
                                if (hs_ds126Ddio.notEvaluated) {
                                    hs_wild126DdyR = hs_ds126Ddio.hscall();
                                }
                                var hs_i26DdiA = hs_wild126DdyR.data[0];
                                var hs_j26DdiB = hs_wild126DdyR.data[1];
                                var hs_sat26DdyQ = new $hs.Data(1);
                                hs_sat26DdyQ.data = [hs_a26Ddis, hs_b26Ddit, hs_c26Ddiu, hs_d26Ddiv, hs_e26Ddiw, hs_f26Ddix, hs_g26Ddiy, hs_h26Ddiz, hs_i26DdiA, hs_j26DdiB];
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdyQ);
                            };
                            var hs_sat26DdyO = new $hs.Thunk();
                            hs_sat26DdyO.evaluateOnce = function () {
                                return hs_readzutup225s1Gj.hscall(hs_zddRead826Ddik, hs_zddRead926Ddil);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdyO, hs_sat26DdyP);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s1Gi, hs_sat26DdyM);
                    };
                    var hs_sat26DdyK = new $hs.Thunk();
                    hs_sat26DdyK.evaluateOnce = function () {
                        return hs_readzutup825s1Gl.hscall(hs_zddRead26Ddi0, hs_zddRead126Ddi1, hs_zddRead226Ddi2, hs_zddRead326Ddi3, hs_zddRead426Ddi4, hs_zddRead526Ddi5, hs_zddRead626Ddi6, hs_zddRead726Ddi7);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DdyK, hs_sat26DdyL);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26DdyJ);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DdyH, hs_sat26DdyI);
        };
        if (hs_optional826DdiI.notEvaluated) {
            return hs_optional826DdiI.hscall();
        } else {
            return hs_optional826DdiI;
        }
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DdiX, hs_zddRead126DdiY, hs_zddRead226DdiZ, hs_zddRead326Ddj0, hs_zddRead426Ddj1, hs_zddRead526Ddj2, hs_zddRead626Ddj3, hs_zddRead726Ddj4, hs_zddRead826Ddj5, hs_zddRead926Ddj6) {
        var hs_sat26DdyT = new $hs.Thunk();
        hs_sat26DdyT.evaluateOnce = function () {
            return hs_zdcreadListPrec2725uOMu.hscall(hs_zddRead26DdiX, hs_zddRead126DdiY, hs_zddRead226DdiZ, hs_zddRead326Ddj0, hs_zddRead426Ddj1, hs_zddRead526Ddj2, hs_zddRead626Ddj3, hs_zddRead726Ddj4, hs_zddRead826Ddj5, hs_zddRead926Ddj6);
        };
        var hs_sat26DdyU = new $hs.Thunk();
        hs_sat26DdyU.evaluateOnce = function () {
            return hs_zdcreadPrec2525uOLy.hscall(hs_zddRead26DdiX, hs_zddRead126DdiY, hs_zddRead226DdiZ, hs_zddRead326Ddj0, hs_zddRead426Ddj1, hs_zddRead526Ddj2, hs_zddRead626Ddj3, hs_zddRead726Ddj4, hs_zddRead826Ddj5, hs_zddRead926Ddj6);
        };
        var hs_sat26DdyV = new $hs.Thunk();
        hs_sat26DdyV.evaluateOnce = function () {
            return hs_zdcreadList2725uOMv.hscall(hs_zddRead26DdiX, hs_zddRead126DdiY, hs_zddRead226DdiZ, hs_zddRead326Ddj0, hs_zddRead426Ddj1, hs_zddRead526Ddj2, hs_zddRead626Ddj3, hs_zddRead726Ddj4, hs_zddRead826Ddj5, hs_zddRead926Ddj6);
        };
        var hs_sat26DdyS = new $hs.Thunk();
        hs_sat26DdyS.evaluateOnce = function () {
            return hs_zdcreadsPrec2725uOMw.hscall(hs_zddRead26DdiX, hs_zddRead126DdiY, hs_zddRead226DdiZ, hs_zddRead326Ddj0, hs_zddRead426Ddj1, hs_zddRead526Ddj2, hs_zddRead626Ddj3, hs_zddRead726Ddj4, hs_zddRead826Ddj5, hs_zddRead926Ddj6);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DdyS, hs_sat26DdyV, hs_sat26DdyU, hs_sat26DdyT];
        return $res;
    };
    hs_zdcreadListPrec2725uOMu.evaluate = function (hs_zddRead26Ddjl, hs_zddRead126Ddjm, hs_zddRead226Ddjn, hs_zddRead326Ddjo, hs_zddRead426Ddjp, hs_zddRead526Ddjq, hs_zddRead626Ddjr, hs_zddRead726Ddjs, hs_zddRead826Ddjt, hs_zddRead926Ddju) {
        var hs_sat26DdyW = new $hs.Thunk();
        hs_sat26DdyW.evaluateOnce = function () {
            var hs_sat26DdyX = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26Ddjl, hs_zddRead126Ddjm, hs_zddRead226Ddjn, hs_zddRead326Ddjo, hs_zddRead426Ddjp, hs_zddRead526Ddjq, hs_zddRead626Ddjr, hs_zddRead726Ddjs, hs_zddRead826Ddjt, hs_zddRead926Ddju);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DdyX);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DdyW);
    };
    hs_zdcreadList2725uOMv.evaluate = function (hs_zddRead26DdjH, hs_zddRead126DdjI, hs_zddRead226DdjJ, hs_zddRead326DdjK, hs_zddRead426DdjL, hs_zddRead526DdjM, hs_zddRead626DdjN, hs_zddRead726DdjO, hs_zddRead826DdjP, hs_zddRead926DdjQ) {
        var hs_sat26DdyZ = new $hs.Data(1);
        hs_sat26DdyZ.data = [0];
        var hs_sat26DdyY = new $hs.Thunk();
        hs_sat26DdyY.evaluateOnce = function () {
            var hs_sat26Ddz0 = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DdjH, hs_zddRead126DdjI, hs_zddRead226DdjJ, hs_zddRead326DdjK, hs_zddRead426DdjL, hs_zddRead526DdjM, hs_zddRead626DdjN, hs_zddRead726DdjO, hs_zddRead826DdjP, hs_zddRead926DdjQ);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26Ddz0);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdyY, hs_sat26DdyZ);
    };
    hs_zdcreadsPrec2725uOMw.evaluate = function (hs_zddRead26Ddk4, hs_zddRead126Ddk5, hs_zddRead226Ddk6, hs_zddRead326Ddk7, hs_zddRead426Ddk8, hs_zddRead526Ddk9, hs_zddRead626Ddka, hs_zddRead726Ddkb, hs_zddRead826Ddkc, hs_zddRead926Ddkd) {
        var hs_sat26Ddz1 = new $hs.Thunk();
        hs_sat26Ddz1.evaluateOnce = function () {
            var hs_sat26Ddz2 = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26Ddk4, hs_zddRead126Ddk5, hs_zddRead226Ddk6, hs_zddRead326Ddk7, hs_zddRead426Ddk8, hs_zddRead526Ddk9, hs_zddRead626Ddka, hs_zddRead726Ddkb, hs_zddRead826Ddkc, hs_zddRead926Ddkd);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26Ddz2);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddz1);
    };
    hs_zdcreadPrec2625uOO0.evaluate = function (hs_zddRead26Ddkr, hs_zddRead126Ddks, hs_zddRead226Ddkt, hs_zddRead326Ddku, hs_zddRead426Ddkv, hs_zddRead526Ddkw, hs_zddRead626Ddkx, hs_zddRead726Ddky, hs_zddRead826DdkL) {
        var hs_optional826Ddl3 = new $hs.Thunk();
        hs_optional826Ddl3.evaluateOnce = function () {
            var hs_sat26Ddz4 = new $hs.Thunk();
            hs_sat26Ddz4.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional826Ddl3);
            };
            var hs_sat26Ddz3 = new $hs.Thunk();
            hs_sat26Ddz3.evaluateOnce = function () {
                var hs_sat26Ddz5 = new $hs.Thunk();
                hs_sat26Ddz5.evaluateOnce = function () {
                    var hs_sat26Ddz7 = new $hs.Func(1);
                    hs_sat26Ddz7.evaluate = function (hs_ds26DdkB) {
                        var hs_wild26Ddz9 = hs_ds26DdkB;
                        if (hs_ds26DdkB.notEvaluated) {
                            hs_wild26Ddz9 = hs_ds26DdkB.hscall();
                        }
                        var hs_a26DdkO = hs_wild26Ddz9.data[0];
                        var hs_b26DdkP = hs_wild26Ddz9.data[1];
                        var hs_c26DdkQ = hs_wild26Ddz9.data[2];
                        var hs_d26DdkR = hs_wild26Ddz9.data[3];
                        var hs_e26DdkS = hs_wild26Ddz9.data[4];
                        var hs_f26DdkT = hs_wild26Ddz9.data[5];
                        var hs_g26DdkU = hs_wild26Ddz9.data[6];
                        var hs_h26DdkV = hs_wild26Ddz9.data[7];
                        var hs_sat26Ddz8 = new $hs.Thunk();
                        hs_sat26Ddz8.evaluateOnce = function () {
                            var hs_sat26Ddzb = new $hs.Func(1);
                            hs_sat26Ddzb.evaluate = function (hs_i26DdkW) {
                                var hs_sat26Ddzc = new $hs.Data(1);
                                hs_sat26Ddzc.data = [hs_a26DdkO, hs_b26DdkP, hs_c26DdkQ, hs_d26DdkR, hs_e26DdkS, hs_f26DdkT, hs_g26DdkU, hs_h26DdkV, hs_i26DdkW];
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddzc);
                            };
                            var hs_sat26Ddza = new $hs.Thunk();
                            hs_sat26Ddza.evaluateOnce = function () {
                                return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead826DdkL);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddza, hs_sat26Ddzb);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s1Gi, hs_sat26Ddz8);
                    };
                    var hs_sat26Ddz6 = new $hs.Thunk();
                    hs_sat26Ddz6.evaluateOnce = function () {
                        return hs_readzutup825s1Gl.hscall(hs_zddRead26Ddkr, hs_zddRead126Ddks, hs_zddRead226Ddkt, hs_zddRead326Ddku, hs_zddRead426Ddkv, hs_zddRead526Ddkw, hs_zddRead626Ddkx, hs_zddRead726Ddky);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26Ddz6, hs_sat26Ddz7);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26Ddz5);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26Ddz3, hs_sat26Ddz4);
        };
        if (hs_optional826Ddl3.notEvaluated) {
            return hs_optional826Ddl3.hscall();
        } else {
            return hs_optional826Ddl3;
        }
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26Ddlh, hs_zddRead126Ddli, hs_zddRead226Ddlj, hs_zddRead326Ddlk, hs_zddRead426Ddll, hs_zddRead526Ddlm, hs_zddRead626Ddln, hs_zddRead726Ddlo, hs_zddRead826Ddlp) {
        var hs_sat26Ddze = new $hs.Thunk();
        hs_sat26Ddze.evaluateOnce = function () {
            return hs_zdcreadListPrec2825uOOP.hscall(hs_zddRead26Ddlh, hs_zddRead126Ddli, hs_zddRead226Ddlj, hs_zddRead326Ddlk, hs_zddRead426Ddll, hs_zddRead526Ddlm, hs_zddRead626Ddln, hs_zddRead726Ddlo, hs_zddRead826Ddlp);
        };
        var hs_sat26Ddzf = new $hs.Thunk();
        hs_sat26Ddzf.evaluateOnce = function () {
            return hs_zdcreadPrec2625uOO0.hscall(hs_zddRead26Ddlh, hs_zddRead126Ddli, hs_zddRead226Ddlj, hs_zddRead326Ddlk, hs_zddRead426Ddll, hs_zddRead526Ddlm, hs_zddRead626Ddln, hs_zddRead726Ddlo, hs_zddRead826Ddlp);
        };
        var hs_sat26Ddzg = new $hs.Thunk();
        hs_sat26Ddzg.evaluateOnce = function () {
            return hs_zdcreadList2825uOOQ.hscall(hs_zddRead26Ddlh, hs_zddRead126Ddli, hs_zddRead226Ddlj, hs_zddRead326Ddlk, hs_zddRead426Ddll, hs_zddRead526Ddlm, hs_zddRead626Ddln, hs_zddRead726Ddlo, hs_zddRead826Ddlp);
        };
        var hs_sat26Ddzd = new $hs.Thunk();
        hs_sat26Ddzd.evaluateOnce = function () {
            return hs_zdcreadsPrec2825uOOR.hscall(hs_zddRead26Ddlh, hs_zddRead126Ddli, hs_zddRead226Ddlj, hs_zddRead326Ddlk, hs_zddRead426Ddll, hs_zddRead526Ddlm, hs_zddRead626Ddln, hs_zddRead726Ddlo, hs_zddRead826Ddlp);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddzd, hs_sat26Ddzg, hs_sat26Ddzf, hs_sat26Ddze];
        return $res;
    };
    hs_zdcreadListPrec2825uOOP.evaluate = function (hs_zddRead26DdlD, hs_zddRead126DdlE, hs_zddRead226DdlF, hs_zddRead326DdlG, hs_zddRead426DdlH, hs_zddRead526DdlI, hs_zddRead626DdlJ, hs_zddRead726DdlK, hs_zddRead826DdlL) {
        var hs_sat26Ddzh = new $hs.Thunk();
        hs_sat26Ddzh.evaluateOnce = function () {
            var hs_sat26Ddzi = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DdlD, hs_zddRead126DdlE, hs_zddRead226DdlF, hs_zddRead326DdlG, hs_zddRead426DdlH, hs_zddRead526DdlI, hs_zddRead626DdlJ, hs_zddRead726DdlK, hs_zddRead826DdlL);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26Ddzi);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26Ddzh);
    };
    hs_zdcreadList2825uOOQ.evaluate = function (hs_zddRead26DdlX, hs_zddRead126DdlY, hs_zddRead226DdlZ, hs_zddRead326Ddm0, hs_zddRead426Ddm1, hs_zddRead526Ddm2, hs_zddRead626Ddm3, hs_zddRead726Ddm4, hs_zddRead826Ddm5) {
        var hs_sat26Ddzk = new $hs.Data(1);
        hs_sat26Ddzk.data = [0];
        var hs_sat26Ddzj = new $hs.Thunk();
        hs_sat26Ddzj.evaluateOnce = function () {
            var hs_sat26Ddzl = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DdlX, hs_zddRead126DdlY, hs_zddRead226DdlZ, hs_zddRead326Ddm0, hs_zddRead426Ddm1, hs_zddRead526Ddm2, hs_zddRead626Ddm3, hs_zddRead726Ddm4, hs_zddRead826Ddm5);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26Ddzl);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddzj, hs_sat26Ddzk);
    };
    hs_zdcreadsPrec2825uOOR.evaluate = function (hs_zddRead26Ddmi, hs_zddRead126Ddmj, hs_zddRead226Ddmk, hs_zddRead326Ddml, hs_zddRead426Ddmm, hs_zddRead526Ddmn, hs_zddRead626Ddmo, hs_zddRead726Ddmp, hs_zddRead826Ddmq) {
        var hs_sat26Ddzm = new $hs.Thunk();
        hs_sat26Ddzm.evaluateOnce = function () {
            var hs_sat26Ddzn = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26Ddmi, hs_zddRead126Ddmj, hs_zddRead226Ddmk, hs_zddRead326Ddml, hs_zddRead426Ddmm, hs_zddRead526Ddmn, hs_zddRead626Ddmo, hs_zddRead726Ddmp, hs_zddRead826Ddmq);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26Ddzn);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddzm);
    };
    hs_zdcreadPrec2725uOQd.evaluate = function (hs_zddRead26DdmD, hs_zddRead126DdmE, hs_zddRead226DdmF, hs_zddRead326DdmG, hs_zddRead426DdmH, hs_zddRead526DdmI, hs_zddRead626DdmJ, hs_zddRead726DdmK) {
        var hs_optional826DdmN = new $hs.Thunk();
        hs_optional826DdmN.evaluateOnce = function () {
            var hs_sat26Ddzp = new $hs.Thunk();
            hs_sat26Ddzp.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional826DdmN);
            };
            var hs_sat26Ddzo = new $hs.Thunk();
            hs_sat26Ddzo.evaluateOnce = function () {
                var hs_sat26Ddzq = new $hs.Thunk();
                hs_sat26Ddzq.evaluateOnce = function () {
                    return hs_readzutup825s1Gl.hscall(hs_zddRead26DdmD, hs_zddRead126DdmE, hs_zddRead226DdmF, hs_zddRead326DdmG, hs_zddRead426DdmH, hs_zddRead526DdmI, hs_zddRead626DdmJ, hs_zddRead726DdmK);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26Ddzq);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26Ddzo, hs_sat26Ddzp);
        };
        if (hs_optional826DdmN.notEvaluated) {
            return hs_optional826DdmN.hscall();
        } else {
            return hs_optional826DdmN;
        }
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26Ddn0, hs_zddRead126Ddn1, hs_zddRead226Ddn2, hs_zddRead326Ddn3, hs_zddRead426Ddn4, hs_zddRead526Ddn5, hs_zddRead626Ddn6, hs_zddRead726Ddn7) {
        var hs_sat26Ddzs = new $hs.Thunk();
        hs_sat26Ddzs.evaluateOnce = function () {
            return hs_zdcreadListPrec2925uOQz.hscall(hs_zddRead26Ddn0, hs_zddRead126Ddn1, hs_zddRead226Ddn2, hs_zddRead326Ddn3, hs_zddRead426Ddn4, hs_zddRead526Ddn5, hs_zddRead626Ddn6, hs_zddRead726Ddn7);
        };
        var hs_sat26Ddzt = new $hs.Thunk();
        hs_sat26Ddzt.evaluateOnce = function () {
            return hs_zdcreadPrec2725uOQd.hscall(hs_zddRead26Ddn0, hs_zddRead126Ddn1, hs_zddRead226Ddn2, hs_zddRead326Ddn3, hs_zddRead426Ddn4, hs_zddRead526Ddn5, hs_zddRead626Ddn6, hs_zddRead726Ddn7);
        };
        var hs_sat26Ddzu = new $hs.Thunk();
        hs_sat26Ddzu.evaluateOnce = function () {
            return hs_zdcreadList2925uOQA.hscall(hs_zddRead26Ddn0, hs_zddRead126Ddn1, hs_zddRead226Ddn2, hs_zddRead326Ddn3, hs_zddRead426Ddn4, hs_zddRead526Ddn5, hs_zddRead626Ddn6, hs_zddRead726Ddn7);
        };
        var hs_sat26Ddzr = new $hs.Thunk();
        hs_sat26Ddzr.evaluateOnce = function () {
            return hs_zdcreadsPrec2925uOQB.hscall(hs_zddRead26Ddn0, hs_zddRead126Ddn1, hs_zddRead226Ddn2, hs_zddRead326Ddn3, hs_zddRead426Ddn4, hs_zddRead526Ddn5, hs_zddRead626Ddn6, hs_zddRead726Ddn7);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Ddzr, hs_sat26Ddzu, hs_sat26Ddzt, hs_sat26Ddzs];
        return $res;
    };
    hs_zdcreadListPrec2925uOQz.evaluate = function (hs_zddRead26Ddnk, hs_zddRead126Ddnl, hs_zddRead226Ddnm, hs_zddRead326Ddnn, hs_zddRead426Ddno, hs_zddRead526Ddnp, hs_zddRead626Ddnq, hs_zddRead726Ddnr) {
        var hs_sat26Ddzv = new $hs.Thunk();
        hs_sat26Ddzv.evaluateOnce = function () {
            var hs_sat26Ddzw = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26Ddnk, hs_zddRead126Ddnl, hs_zddRead226Ddnm, hs_zddRead326Ddnn, hs_zddRead426Ddno, hs_zddRead526Ddnp, hs_zddRead626Ddnq, hs_zddRead726Ddnr);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26Ddzw);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26Ddzv);
    };
    hs_zdcreadList2925uOQA.evaluate = function (hs_zddRead26DdnC, hs_zddRead126DdnD, hs_zddRead226DdnE, hs_zddRead326DdnF, hs_zddRead426DdnG, hs_zddRead526DdnH, hs_zddRead626DdnI, hs_zddRead726DdnJ) {
        var hs_sat26Ddzy = new $hs.Data(1);
        hs_sat26Ddzy.data = [0];
        var hs_sat26Ddzx = new $hs.Thunk();
        hs_sat26Ddzx.evaluateOnce = function () {
            var hs_sat26Ddzz = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DdnC, hs_zddRead126DdnD, hs_zddRead226DdnE, hs_zddRead326DdnF, hs_zddRead426DdnG, hs_zddRead526DdnH, hs_zddRead626DdnI, hs_zddRead726DdnJ);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26Ddzz);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26Ddzx, hs_sat26Ddzy);
    };
    hs_zdcreadsPrec2925uOQB.evaluate = function (hs_zddRead26DdnV, hs_zddRead126DdnW, hs_zddRead226DdnX, hs_zddRead326DdnY, hs_zddRead426DdnZ, hs_zddRead526Ddo0, hs_zddRead626Ddo1, hs_zddRead726Ddo2) {
        var hs_sat26DdzA = new $hs.Thunk();
        hs_sat26DdzA.evaluateOnce = function () {
            var hs_sat26DdzB = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DdnV, hs_zddRead126DdnW, hs_zddRead226DdnX, hs_zddRead326DdnY, hs_zddRead426DdnZ, hs_zddRead526Ddo0, hs_zddRead626Ddo1, hs_zddRead726Ddo2);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DdzB);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DdzA);
    };
    this.hs_DZCRead.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
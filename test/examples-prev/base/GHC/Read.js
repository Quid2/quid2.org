
$hs.modules.GHCziRead = new $hs.Module();
$hs.modules.GHCziRead.dependencies = ["GHC.Prim", "GHC.Types", "GHC.Bool", "GHC.Ordering", "GHC.Unit", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Float", "GHC.Show", "GHC.Classes", "GHC.Arr", "GHC.Unicode", "Text.ParserCombinators.ReadP", "Text.ParserCombinators.ReadPrec", "Text.Read.Lex"];
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
    this.hs_readsPrec.evaluate = function (hs_tpl26DA0f) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_tpl26DA0f);
    };
    this.hs_readList.notEvaluated = true;
    this.hs_readList.evaluate = function (hs_tpl26DA0n) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_tpl26DA0n);
    };
    this.hs_readPrec.notEvaluated = true;
    this.hs_readPrec.evaluate = function (hs_tpl26DA0v) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_tpl26DA0v);
    };
    this.hs_readListPrec.notEvaluated = true;
    this.hs_readListPrec.evaluate = function (hs_tpl26DA0D) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_tpl26DA0D);
    };
    this.hs_zddmreadListPrec.notEvaluated = true;
    this.hs_zddmreadListPrec.evaluate = function (hs_zddRead26DA0M) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DA0M);
    };
    this.hs_zddmreadPrec.notEvaluated = true;
    this.hs_zddmreadPrec.evaluate = function (hs_zddRead26DA0P) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DA0P);
    };
    this.hs_zddmreadsPrec.notEvaluated = true;
    this.hs_zddmreadsPrec.evaluate = function (hs_zddRead26DA0S) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DA0S);
    };
    this.hs_readp.notEvaluated = true;
    this.hs_readp.evaluate = function (hs_zddRead26DA0V) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DA0V);
    };
    this.hs_lexP.evaluateOnce = function () {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_paren.notEvaluated = true;
    this.hs_paren.evaluate = function (hs_p26DA1C) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_p26DA1C);
    };
    this.hs_parens.notEvaluated = true;
    this.hs_parens.evaluate = function (hs_p26DA29) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_p26DA29);
    };
    this.hs_list.notEvaluated = true;
    this.hs_list.evaluate = function (hs_readx26DA2f) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_readx26DA2f);
    };
    this.hs_zddmreadList.notEvaluated = true;
    this.hs_zddmreadList.evaluate = function (hs_zddRead26DA3v) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DA3v);
    };
    this.hs_choose.notEvaluated = true;
    this.hs_choose.evaluate = function (hs_sps26DA3V) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_sps26DA3V);
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
    this.hs_lex.evaluate = function (hs_s26DA4x) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_s26DA4x);
    };
    this.hs_readListPrecDefault.notEvaluated = true;
    this.hs_readListPrecDefault.evaluate = function (hs_zddRead26DA4z) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DA4z);
    };
    this.hs_readListDefault.notEvaluated = true;
    this.hs_readListDefault.evaluate = function (hs_zddRead26DA4C) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DA4C);
    };
    this.hs_readParen.notEvaluated = true;
    this.hs_readParen.evaluate = function (hs_b26DA5P, hs_g26DA58, hs_eta26DA5R) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_b26DA5P, hs_g26DA58, hs_eta26DA5R);
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
    this.hs_zdfReadMaybe.evaluate = function (hs_zddRead26DA8c) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DA8c);
    };
    this.hs_zdfReadZMZN.notEvaluated = true;
    this.hs_zdfReadZMZN.evaluate = function (hs_zddRead26DA8B) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DA8B);
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
    this.hs_zdfReadRatio.evaluate = function (hs_zddIntegral26DAaK, hs_zddRead26DAaL) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddIntegral26DAaK, hs_zddRead26DAaL);
    };
    this.hs_zdfReadZLZR.notEvaluated = true;
    this.hs_zdfReadZLZR.evaluate = function () {
        $hs.modules.GHCziRead.loadDependencies();
        return this;
    };
    this.hs_lexLitChar.evaluateOnce = function () {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfReadZLz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUZR.evaluate = function (hs_zddRead26DAcL, hs_zddRead126DAcM, hs_zddRead226DAcN) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DAcL, hs_zddRead126DAcM, hs_zddRead226DAcN);
    };
    this.hs_zdfReadZLz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUZR.evaluate = function (hs_zddRead26DAdA, hs_zddRead126DAdB) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DAdA, hs_zddRead126DAdB);
    };
    this.hs_zdfReadArray.notEvaluated = true;
    this.hs_zdfReadArray.evaluate = function (hs_zddIx26DAeN, hs_zddRead26DAeO, hs_zddRead126DAeP) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddIx26DAeN, hs_zddRead26DAeO, hs_zddRead126DAeP);
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DAgM, hs_zddRead126DAgN, hs_zddRead226DAgO, hs_zddRead326DAgP, hs_zddRead426DAgQ, hs_zddRead526DAgR, hs_zddRead626DAgS) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DAgM, hs_zddRead126DAgN, hs_zddRead226DAgO, hs_zddRead326DAgP, hs_zddRead426DAgQ, hs_zddRead526DAgR, hs_zddRead626DAgS);
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DAiD, hs_zddRead126DAiE, hs_zddRead226DAiF, hs_zddRead326DAiG, hs_zddRead426DAiH, hs_zddRead526DAiI) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DAiD, hs_zddRead126DAiE, hs_zddRead226DAiF, hs_zddRead326DAiG, hs_zddRead426DAiH, hs_zddRead526DAiI);
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DAkf, hs_zddRead126DAkg, hs_zddRead226DAkh, hs_zddRead326DAki, hs_zddRead426DAkj) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DAkf, hs_zddRead126DAkg, hs_zddRead226DAkh, hs_zddRead326DAki, hs_zddRead426DAkj);
    };
    this.hs_zdfReadZLz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DAlo, hs_zddRead126DAlp, hs_zddRead226DAlq, hs_zddRead326DAlr) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DAlo, hs_zddRead126DAlp, hs_zddRead226DAlq, hs_zddRead326DAlr);
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DAou, hs_zddRead126DAov, hs_zddRead226DAow, hs_zddRead326DAox, hs_zddRead426DAoy, hs_zddRead526DAoz, hs_zddRead626DAoA, hs_zddRead726DAoB, hs_zddRead826DAoC, hs_zddRead926DAoD, hs_zddRead1026DAoE, hs_zddRead1126DAoF, hs_zddRead1226DAoG, hs_zddRead1326DAoH, hs_zddRead1426DAoI) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DAou, hs_zddRead126DAov, hs_zddRead226DAow, hs_zddRead326DAox, hs_zddRead426DAoy, hs_zddRead526DAoz, hs_zddRead626DAoA, hs_zddRead726DAoB, hs_zddRead826DAoC, hs_zddRead926DAoD, hs_zddRead1026DAoE, hs_zddRead1126DAoF, hs_zddRead1226DAoG, hs_zddRead1326DAoH, hs_zddRead1426DAoI);
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DArZ, hs_zddRead126DAs0, hs_zddRead226DAs1, hs_zddRead326DAs2, hs_zddRead426DAs3, hs_zddRead526DAs4, hs_zddRead626DAs5, hs_zddRead726DAs6, hs_zddRead826DAs7, hs_zddRead926DAs8, hs_zddRead1026DAs9, hs_zddRead1126DAsa, hs_zddRead1226DAsb, hs_zddRead1326DAsc) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DArZ, hs_zddRead126DAs0, hs_zddRead226DAs1, hs_zddRead326DAs2, hs_zddRead426DAs3, hs_zddRead526DAs4, hs_zddRead626DAs5, hs_zddRead726DAs6, hs_zddRead826DAs7, hs_zddRead926DAs8, hs_zddRead1026DAs9, hs_zddRead1126DAsa, hs_zddRead1226DAsb, hs_zddRead1326DAsc);
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DAvf, hs_zddRead126DAvg, hs_zddRead226DAvh, hs_zddRead326DAvi, hs_zddRead426DAvj, hs_zddRead526DAvk, hs_zddRead626DAvl, hs_zddRead726DAvm, hs_zddRead826DAvn, hs_zddRead926DAvo, hs_zddRead1026DAvp, hs_zddRead1126DAvq, hs_zddRead1226DAvr) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DAvf, hs_zddRead126DAvg, hs_zddRead226DAvh, hs_zddRead326DAvi, hs_zddRead426DAvj, hs_zddRead526DAvk, hs_zddRead626DAvl, hs_zddRead726DAvm, hs_zddRead826DAvn, hs_zddRead926DAvo, hs_zddRead1026DAvp, hs_zddRead1126DAvq, hs_zddRead1226DAvr);
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DAyg, hs_zddRead126DAyh, hs_zddRead226DAyi, hs_zddRead326DAyj, hs_zddRead426DAyk, hs_zddRead526DAyl, hs_zddRead626DAym, hs_zddRead726DAyn, hs_zddRead826DAyo, hs_zddRead926DAyp, hs_zddRead1026DAyq, hs_zddRead1126DAyr) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DAyg, hs_zddRead126DAyh, hs_zddRead226DAyi, hs_zddRead326DAyj, hs_zddRead426DAyk, hs_zddRead526DAyl, hs_zddRead626DAym, hs_zddRead726DAyn, hs_zddRead826DAyo, hs_zddRead926DAyp, hs_zddRead1026DAyq, hs_zddRead1126DAyr);
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DAB8, hs_zddRead126DAB9, hs_zddRead226DABa, hs_zddRead326DABb, hs_zddRead426DABc, hs_zddRead526DABd, hs_zddRead626DABe, hs_zddRead726DABf, hs_zddRead826DABg, hs_zddRead926DABh, hs_zddRead1026DABi) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DAB8, hs_zddRead126DAB9, hs_zddRead226DABa, hs_zddRead326DABb, hs_zddRead426DABc, hs_zddRead526DABd, hs_zddRead626DABe, hs_zddRead726DABf, hs_zddRead826DABg, hs_zddRead926DABh, hs_zddRead1026DABi);
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DADL, hs_zddRead126DADM, hs_zddRead226DADN, hs_zddRead326DADO, hs_zddRead426DADP, hs_zddRead526DADQ, hs_zddRead626DADR, hs_zddRead726DADS, hs_zddRead826DADT, hs_zddRead926DADU) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DADL, hs_zddRead126DADM, hs_zddRead226DADN, hs_zddRead326DADO, hs_zddRead426DADP, hs_zddRead526DADQ, hs_zddRead626DADR, hs_zddRead726DADS, hs_zddRead826DADT, hs_zddRead926DADU);
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DAG9, hs_zddRead126DAGa, hs_zddRead226DAGb, hs_zddRead326DAGc, hs_zddRead426DAGd, hs_zddRead526DAGe, hs_zddRead626DAGf, hs_zddRead726DAGg, hs_zddRead826DAGh) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DAG9, hs_zddRead126DAGa, hs_zddRead226DAGb, hs_zddRead326DAGc, hs_zddRead426DAGd, hs_zddRead526DAGe, hs_zddRead626DAGf, hs_zddRead726DAGg, hs_zddRead826DAGh);
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DAHW, hs_zddRead126DAHX, hs_zddRead226DAHY, hs_zddRead326DAHZ, hs_zddRead426DAI0, hs_zddRead526DAI1, hs_zddRead626DAI2, hs_zddRead726DAI3) {
        $hs.modules.GHCziRead.loadDependencies();
        return this.evaluate(hs_zddRead26DAHW, hs_zddRead126DAHX, hs_zddRead226DAHY, hs_zddRead326DAHZ, hs_zddRead426DAI0, hs_zddRead526DAI1, hs_zddRead626DAI2, hs_zddRead726DAI3);
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
    var hs_convertFrac25s6VP = new $hs.Func(2);
    var hs_convertInt25s6VN = new $hs.Func(2);
    var hs_zddEq25vbxk = new $hs.Thunk();
    var hs_readNumber25s6VL = new $hs.Func(2);
    var hs_sat26DAKI = new $hs.Thunk();
    var hs_sat26DALf = new $hs.Thunk();
    var hs_sat26DALg = new $hs.Thunk();
    var hs_optional25vbzF = new $hs.Thunk();
    var hs_zdcreadPrec25vbzQ = new $hs.Thunk();
    var hs_sat26DALk = new $hs.Data(1);
    var hs_sat26DALl = new $hs.Thunk();
    var hs_sat26DALm = new $hs.Thunk();
    var hs_sat26DALn = new $hs.Thunk();
    var hs_sat26DALo = new $hs.Thunk();
    var hs_zdcreadListPrec25vbzS = new $hs.Thunk();
    var hs_zdcreadList25vbzU = new $hs.Thunk();
    var hs_zdcreadsPrec25vbzW = new $hs.Thunk();
    var hs_optional125vbzY = new $hs.Thunk();
    var hs_sat26DALv = new $hs.Thunk();
    var hs_sat26DALw = new $hs.Thunk();
    var hs_optional225vbAf = new $hs.Thunk();
    var hs_zdcreadPrec125vbAu = new $hs.Thunk();
    var hs_sat26DALE = new $hs.Thunk();
    var hs_sat26DALF = new $hs.Data(1);
    var hs_sat26DALG = new $hs.Thunk();
    var hs_sat26DALH = new $hs.Thunk();
    var hs_zdcreadListPrec125vbAw = new $hs.Thunk();
    var hs_zdcreadList125vbAy = new $hs.Thunk();
    var hs_zdcreadsPrec125vbAA = new $hs.Thunk();
    var hs_sat26DALI = new $hs.Thunk();
    var hs_sat26DALJ = new $hs.Thunk();
    var hs_optional325vbAG = new $hs.Thunk();
    var hs_zdcreadPrec225vbAX = new $hs.Thunk();
    var hs_sat26DALT = new $hs.Thunk();
    var hs_sat26DALU = new $hs.Data(1);
    var hs_sat26DALV = new $hs.Thunk();
    var hs_sat26DALW = new $hs.Thunk();
    var hs_zdcreadListPrec225vbAZ = new $hs.Thunk();
    var hs_zdcreadList225vbB1 = new $hs.Thunk();
    var hs_zdcreadsPrec225vbB3 = new $hs.Thunk();
    var hs_zdcreadPrec325vbB9 = new $hs.Func(1);
    var hs_zdcreadListPrec325vbBQ = new $hs.Func(1);
    var hs_zdcreadList325vbBS = new $hs.Func(1);
    var hs_zdcreadsPrec325vbBU = new $hs.Func(1);
    var hs_zdcreadListPrec425vbCf = new $hs.Func(1);
    var hs_zdcreadList425vbCh = new $hs.Func(1);
    var hs_zdcreadsPrec425vbCj = new $hs.Func(1);
    var hs_sat26DAMC = new $hs.Thunk();
    var hs_sat26DAMD = new $hs.Data(1);
    var hs_sat26DAME = new $hs.Thunk();
    var hs_sat26DAMF = new $hs.Thunk();
    var hs_zdcreadListPrec525vbCE = new $hs.Thunk();
    var hs_zdcreadList525vbCG = new $hs.Thunk();
    var hs_zdcreadsPrec525vbCI = new $hs.Thunk();
    var hs_sat26DAMG = new $hs.Func(1);
    var hs_zdcreadPrec425vbCO = new $hs.Thunk();
    var hs_sat26DAMH = new $hs.Thunk();
    var hs_sat26DAMI = new $hs.Data(1);
    var hs_sat26DAMJ = new $hs.Thunk();
    var hs_sat26DAMK = new $hs.Thunk();
    var hs_zdcreadListPrec625vbCR = new $hs.Thunk();
    var hs_zdcreadList625vbCT = new $hs.Thunk();
    var hs_zdcreadsPrec625vbCV = new $hs.Thunk();
    var hs_sat26DAML = new $hs.Func(1);
    var hs_zdcreadPrec525vbD1 = new $hs.Thunk();
    var hs_sat26DAMM = new $hs.Thunk();
    var hs_sat26DAMN = new $hs.Data(1);
    var hs_sat26DAMO = new $hs.Thunk();
    var hs_sat26DAMP = new $hs.Thunk();
    var hs_zdcreadListPrec725vbD4 = new $hs.Thunk();
    var hs_zdcreadList725vbD6 = new $hs.Thunk();
    var hs_zdcreadsPrec725vbD8 = new $hs.Thunk();
    var hs_sat26DAMQ = new $hs.Func(1);
    var hs_zdcreadPrec625vbDe = new $hs.Thunk();
    var hs_sat26DAMR = new $hs.Thunk();
    var hs_sat26DAMS = new $hs.Data(1);
    var hs_sat26DAMT = new $hs.Thunk();
    var hs_sat26DAMU = new $hs.Thunk();
    var hs_zdcreadListPrec825vbDh = new $hs.Thunk();
    var hs_zdcreadList825vbDj = new $hs.Thunk();
    var hs_zdcreadsPrec825vbDl = new $hs.Thunk();
    var hs_sat26DAMV = new $hs.Func(1);
    var hs_zdcreadPrec725vbDr = new $hs.Thunk();
    var hs_sat26DAMW = new $hs.Thunk();
    var hs_sat26DAMX = new $hs.Data(1);
    var hs_sat26DAMY = new $hs.Thunk();
    var hs_sat26DAMZ = new $hs.Thunk();
    var hs_zdcreadListPrec925vbDu = new $hs.Thunk();
    var hs_zdcreadList925vbDw = new $hs.Thunk();
    var hs_zdcreadsPrec925vbDy = new $hs.Thunk();
    var hs_zdcreadPrec825vbDE = new $hs.Func(2);
    var hs_zdcreadListPrec1025vbEn = new $hs.Func(2);
    var hs_zdcreadList1025vbEp = new $hs.Func(2);
    var hs_zdcreadsPrec1025vbEr = new $hs.Func(2);
    var hs_sat26DANu = new $hs.Thunk();
    var hs_sat26DANv = new $hs.Thunk();
    var hs_optional425vbEU = new $hs.Thunk();
    var hs_zdcreadPrec925vbEZ = new $hs.Thunk();
    var hs_sat26DANx = new $hs.Thunk();
    var hs_sat26DANy = new $hs.Data(1);
    var hs_sat26DANz = new $hs.Thunk();
    var hs_sat26DANA = new $hs.Thunk();
    var hs_zdcreadListPrec1125vbF1 = new $hs.Thunk();
    var hs_zdcreadList1125vbF3 = new $hs.Thunk();
    var hs_zdcreadsPrec1125vbF5 = new $hs.Thunk();
    var hs_sat26DANF = new $hs.Thunk();
    var hs_sat26DANO = new $hs.Func(1);
    var hs_readzucomma25s6VT = new $hs.Thunk();
    var hs_readzutup225s6VV = new $hs.Func(2);
    var hs_zdcreadPrec1025vbFV = new $hs.Func(3);
    var hs_zdcreadListPrec1225vbGn = new $hs.Func(3);
    var hs_zdcreadList1225vbGp = new $hs.Func(3);
    var hs_zdcreadsPrec1225vbGr = new $hs.Func(3);
    var hs_zdcreadPrec1125vbH2 = new $hs.Func(2);
    var hs_zdcreadListPrec1325vbHd = new $hs.Func(2);
    var hs_zdcreadList1325vbHf = new $hs.Func(2);
    var hs_zdcreadsPrec1325vbHh = new $hs.Func(2);
    var hs_zdcreadPrec1225vbHK = new $hs.Func(3);
    var hs_zdcreadListPrec1425vbIp = new $hs.Func(3);
    var hs_zdcreadList1425vbIr = new $hs.Func(3);
    var hs_zdcreadsPrec1425vbIt = new $hs.Func(3);
    var hs_readzutup425s6VX = new $hs.Func(4);
    var hs_zdcreadPrec1325vbJw = new $hs.Func(7);
    var hs_zdcreadListPrec1525vbKk = new $hs.Func(7);
    var hs_zdcreadList1525vbKm = new $hs.Func(7);
    var hs_zdcreadsPrec1525vbKo = new $hs.Func(7);
    var hs_zdcreadPrec1425vbLv = new $hs.Func(6);
    var hs_zdcreadListPrec1625vbMc = new $hs.Func(6);
    var hs_zdcreadList1625vbMe = new $hs.Func(6);
    var hs_zdcreadsPrec1625vbMg = new $hs.Func(6);
    var hs_zdcreadPrec1525vbNf = new $hs.Func(5);
    var hs_zdcreadListPrec1725vbNP = new $hs.Func(5);
    var hs_zdcreadList1725vbNR = new $hs.Func(5);
    var hs_zdcreadsPrec1725vbNT = new $hs.Func(5);
    var hs_zdcreadPrec1625vbOK = new $hs.Func(4);
    var hs_zdcreadListPrec1825vbOZ = new $hs.Func(4);
    var hs_zdcreadList1825vbP1 = new $hs.Func(4);
    var hs_zdcreadsPrec1825vbP3 = new $hs.Func(4);
    var hs_readzutup825s6VZ = new $hs.Func(8);
    var hs_zdcreadPrec1725vbQu = new $hs.Func(15);
    var hs_zdcreadListPrec1925vbRU = new $hs.Func(15);
    var hs_zdcreadList1925vbRW = new $hs.Func(15);
    var hs_zdcreadsPrec1925vbRY = new $hs.Func(15);
    var hs_zdcreadPrec1825vbU7 = new $hs.Func(14);
    var hs_zdcreadListPrec2025vbVq = new $hs.Func(14);
    var hs_zdcreadList2025vbVs = new $hs.Func(14);
    var hs_zdcreadsPrec2025vbVu = new $hs.Func(14);
    var hs_zdcreadPrec1925vbXv = new $hs.Func(13);
    var hs_zdcreadListPrec2125vbYH = new $hs.Func(13);
    var hs_zdcreadList2125vbYJ = new $hs.Func(13);
    var hs_zdcreadsPrec2125vbYL = new $hs.Func(13);
    var hs_zdcreadPrec2025vc0E = new $hs.Func(12);
    var hs_zdcreadListPrec2225vc1J = new $hs.Func(12);
    var hs_zdcreadList2225vc1L = new $hs.Func(12);
    var hs_zdcreadsPrec2225vc1N = new $hs.Func(12);
    var hs_zdcreadPrec2125vc3y = new $hs.Func(11);
    var hs_zdcreadListPrec2325vc4C = new $hs.Func(11);
    var hs_zdcreadList2325vc4E = new $hs.Func(11);
    var hs_zdcreadsPrec2325vc4G = new $hs.Func(11);
    var hs_zdcreadPrec2225vc6j = new $hs.Func(10);
    var hs_zdcreadListPrec2425vc7g = new $hs.Func(10);
    var hs_zdcreadList2425vc7i = new $hs.Func(10);
    var hs_zdcreadsPrec2425vc7k = new $hs.Func(10);
    var hs_zdcreadPrec2325vc8P = new $hs.Func(9);
    var hs_zdcreadListPrec2525vc9F = new $hs.Func(9);
    var hs_zdcreadList2525vc9H = new $hs.Func(9);
    var hs_zdcreadsPrec2525vc9J = new $hs.Func(9);
    var hs_zdcreadPrec2425vcb6 = new $hs.Func(8);
    var hs_zdcreadListPrec2625vcbt = new $hs.Func(8);
    var hs_zdcreadList2625vcbv = new $hs.Func(8);
    var hs_zdcreadsPrec2625vcbx = new $hs.Func(8);
    this.hs_readsPrec.evaluate = function (hs_tpl26DA0f) {
        var hs_tpl26DAJ1 = hs_tpl26DA0f;
        if (hs_tpl26DA0f.notEvaluated) {
            hs_tpl26DAJ1 = hs_tpl26DA0f.hscall();
        }
        var hs_tpl26DA0l = hs_tpl26DAJ1.data[0];
        if (hs_tpl26DA0l.notEvaluated) {
            return hs_tpl26DA0l.hscall();
        } else {
            return hs_tpl26DA0l;
        }
    };
    this.hs_readList.evaluate = function (hs_tpl26DA0n) {
        var hs_tpl26DAJ6 = hs_tpl26DA0n;
        if (hs_tpl26DA0n.notEvaluated) {
            hs_tpl26DAJ6 = hs_tpl26DA0n.hscall();
        }
        var hs_tpl26DA0t = hs_tpl26DAJ6.data[1];
        if (hs_tpl26DA0t.notEvaluated) {
            return hs_tpl26DA0t.hscall();
        } else {
            return hs_tpl26DA0t;
        }
    };
    this.hs_readPrec.evaluate = function (hs_tpl26DA0v) {
        var hs_tpl26DAJa = hs_tpl26DA0v;
        if (hs_tpl26DA0v.notEvaluated) {
            hs_tpl26DAJa = hs_tpl26DA0v.hscall();
        }
        var hs_tpl26DA0B = hs_tpl26DAJa.data[2];
        if (hs_tpl26DA0B.notEvaluated) {
            return hs_tpl26DA0B.hscall();
        } else {
            return hs_tpl26DA0B;
        }
    };
    this.hs_readListPrec.evaluate = function (hs_tpl26DA0D) {
        var hs_tpl26DAJe = hs_tpl26DA0D;
        if (hs_tpl26DA0D.notEvaluated) {
            hs_tpl26DAJe = hs_tpl26DA0D.hscall();
        }
        var hs_tpl26DA0J = hs_tpl26DAJe.data[3];
        if (hs_tpl26DA0J.notEvaluated) {
            return hs_tpl26DA0J.hscall();
        } else {
            return hs_tpl26DA0J;
        }
    };
    this.hs_zddmreadListPrec.evaluate = function (hs_zddRead26DA0M) {
        var hs_sat26DAJi = new $hs.Func(1);
        hs_sat26DAJi.evaluate = function (hs_ds26DAJh) {
            return $hs.modules.GHCziRead.hs_readList.hscall(hs_zddRead26DA0M);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readSzutozuPrec.hscall(hs_sat26DAJi);
    };
    this.hs_zddmreadPrec.evaluate = function (hs_zddRead26DA0P) {
        var hs_sat26DAJj = new $hs.Thunk();
        hs_sat26DAJj.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readsPrec.hscall(hs_zddRead26DA0P);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readSzutozuPrec.hscall(hs_sat26DAJj);
    };
    this.hs_zddmreadsPrec.evaluate = function (hs_zddRead26DA0S) {
        var hs_sat26DAJk = new $hs.Thunk();
        hs_sat26DAJk.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26DA0S);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAJk);
    };
    this.hs_readp.evaluate = function (hs_zddRead26DA0V) {
        var hs_sat26DAJl = new $hs.Thunk();
        hs_sat26DAJl.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26DA0V);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuP.hscall(hs_sat26DAJl, $hs.modules.TextziParserCombinatorsziReadPrec.hs_minPrec);
    };
    hs_convertFrac25s6VP.evaluate = function (hs_zddFractional26DA12, hs_eta26DA0Z) {
        var hs_wild26DAJm = hs_eta26DA0Z;
        if (hs_eta26DA0Z.notEvaluated) {
            hs_wild26DAJm = hs_eta26DA0Z.hscall();
        }
        switch (hs_wild26DAJm.tag) {
        case 6:
            var hs_i26DA14 = hs_wild26DAJm.data[0];
            var hs_sat26DAJo = new $hs.Thunk();
            hs_sat26DAJo.evaluateOnce = function () {
                var hs_sat26DAJn = $hs.modules.GHCziReal.hs_zdp1Fractional.hscall(hs_zddFractional26DA12);
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26DAJn, hs_i26DA14);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAJo);
        case 7:
            var hs_r26DA17 = hs_wild26DAJm.data[0];
            var hs_sat26DAJp = new $hs.Thunk();
            hs_sat26DAJp.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromRational.hscall(hs_zddFractional26DA12, hs_r26DA17);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAJp);
        default:
            if ($hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.notEvaluated) {
                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.hscall();
            } else {
                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail;
            }
        }
    };
    hs_convertInt25s6VN.evaluate = function (hs_zddNum26DA1e, hs_ds26DA1b) {
        var hs_wild26DAJq = hs_ds26DA1b;
        if (hs_ds26DA1b.notEvaluated) {
            hs_wild26DAJq = hs_ds26DA1b.hscall();
        }
        switch (hs_wild26DAJq.tag) {
        case 6:
            var hs_i26DA1f = hs_wild26DAJq.data[0];
            var hs_sat26DAJr = new $hs.Thunk();
            hs_sat26DAJr.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DA1e, hs_i26DA1f);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAJr);
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
    this.hs_paren.evaluate = function (hs_p26DA1C) {
        var hs_sat26DAJL = new $hs.Func(1);
        hs_sat26DAJL.evaluate = function (hs_ds26DA1o) {
            var hs_fail26DA1n = new $hs.Func(1);
            hs_fail26DA1n.evaluate = function (hs_ds126DA1m) {
                var hs_sat26DAJs = new $hs.Thunk();
                hs_sat26DAJs.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/GHC/Read.lhs:278:14-23\x00");
                };
                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAJs);
            };
            var hs_wild26DAJt = hs_ds26DA1o;
            if (hs_ds26DA1o.notEvaluated) {
                hs_wild26DAJt = hs_ds26DA1o.hscall();
            }
            switch (hs_wild26DAJt.tag) {
            case 3:
                var hs_ds126DA1r = hs_wild26DAJt.data[0];
                var hs_wild126DAJu = hs_ds126DA1r;
                if (hs_ds126DA1r.notEvaluated) {
                    hs_wild126DAJu = hs_ds126DA1r.hscall();
                }
                switch (hs_wild126DAJu.tag) {
                case 1:
                    return hs_fail26DA1n.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                case 2:
                    var hs_ds226DA1v = hs_wild126DAJu.data[0];
                    var hs_ds326DA1A = hs_wild126DAJu.data[1];
                    var hs_wild226DAJw = hs_ds226DA1v;
                    if (hs_ds226DA1v.notEvaluated) {
                        hs_wild226DAJw = hs_ds226DA1v.hscall();
                    }
                    var hs_ds426DA1y = hs_wild226DAJw.data[0];
                    var hs_ds526DAJv = hs_ds426DA1y;
                    if (hs_ds426DA1y.notEvaluated) {
                        hs_ds526DAJv = hs_ds426DA1y.hscall();
                    }
                    switch (hs_ds526DAJv) {
                    case "(":
                        var hs_wild326DAJx = hs_ds326DA1A;
                        if (hs_ds326DA1A.notEvaluated) {
                            hs_wild326DAJx = hs_ds326DA1A.hscall();
                        }
                        switch (hs_wild326DAJx.tag) {
                        case 1:
                            var hs_sat26DAJH = new $hs.Func(1);
                            hs_sat26DAJH.evaluate = function (hs_x26DA1Z) {
                                var hs_sat26DAJG = new $hs.Func(1);
                                hs_sat26DAJG.evaluate = function (hs_ds626DA1L) {
                                    var hs_fail126DA1K = new $hs.Func(1);
                                    hs_fail126DA1K.evaluate = function (hs_ds726DA1J) {
                                        var hs_sat26DAJy = new $hs.Thunk();
                                        hs_sat26DAJy.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/GHC/Read.lhs:280:14-23\x00");
                                        };
                                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAJy);
                                    };
                                    var hs_wild426DAJz = hs_ds626DA1L;
                                    if (hs_ds626DA1L.notEvaluated) {
                                        hs_wild426DAJz = hs_ds626DA1L.hscall();
                                    }
                                    switch (hs_wild426DAJz.tag) {
                                    case 3:
                                        var hs_ds726DA1O = hs_wild426DAJz.data[0];
                                        var hs_wild526DAJA = hs_ds726DA1O;
                                        if (hs_ds726DA1O.notEvaluated) {
                                            hs_wild526DAJA = hs_ds726DA1O.hscall();
                                        }
                                        switch (hs_wild526DAJA.tag) {
                                        case 1:
                                            return hs_fail126DA1K.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                        case 2:
                                            var hs_ds826DA1S = hs_wild526DAJA.data[0];
                                            var hs_ds926DA1X = hs_wild526DAJA.data[1];
                                            var hs_wild626DAJC = hs_ds826DA1S;
                                            if (hs_ds826DA1S.notEvaluated) {
                                                hs_wild626DAJC = hs_ds826DA1S.hscall();
                                            }
                                            var hs_ds1026DA1V = hs_wild626DAJC.data[0];
                                            var hs_ds1126DAJB = hs_ds1026DA1V;
                                            if (hs_ds1026DA1V.notEvaluated) {
                                                hs_ds1126DAJB = hs_ds1026DA1V.hscall();
                                            }
                                            switch (hs_ds1126DAJB) {
                                            case ")":
                                                var hs_wild726DAJD = hs_ds926DA1X;
                                                if (hs_ds926DA1X.notEvaluated) {
                                                    hs_wild726DAJD = hs_ds926DA1X.hscall();
                                                }
                                                switch (hs_wild726DAJD.tag) {
                                                case 1:
                                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_x26DA1Z);
                                                case 2:
                                                    return hs_fail126DA1K.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                                }
                                            default:
                                                return hs_fail126DA1K.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                            }
                                        }
                                    default:
                                        return hs_fail126DA1K.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                    }
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DAJG);
                            };
                            var hs_sat26DAJI = new $hs.Thunk();
                            hs_sat26DAJI.evaluateOnce = function () {
                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_reset.hscall(hs_p26DA1C);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAJI, hs_sat26DAJH);
                        case 2:
                            return hs_fail26DA1n.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        }
                    default:
                        return hs_fail26DA1n.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                }
            default:
                return hs_fail26DA1n.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DAJL);
    };
    this.hs_parens.evaluate = function (hs_p26DA29) {
        var hs_optional526DA2a = new $hs.Thunk();
        hs_optional526DA2a.evaluateOnce = function () {
            var hs_sat26DAJM = new $hs.Thunk();
            hs_sat26DAJM.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional526DA2a);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_p26DA29, hs_sat26DAJM);
        };
        if (hs_optional526DA2a.notEvaluated) {
            return hs_optional526DA2a.hscall();
        } else {
            return hs_optional526DA2a;
        }
    };
    this.hs_list.evaluate = function (hs_readx26DA2f) {
        var hs_listNext26DA2q = new $hs.Thunk();
        var hs_listRest26DA2i = new $hs.Func(1);
        hs_listNext26DA2q.evaluateOnce = function () {
            var hs_sat26DAJQ = new $hs.Func(1);
            hs_sat26DAJQ.evaluate = function (hs_x26DA2l) {
                var hs_sat26DAJO = new $hs.Func(1);
                hs_sat26DAJO.evaluate = function (hs_xs26DA2m) {
                    var hs_sat26DAJN = new $hs.Data(2);
                    hs_sat26DAJN.data = [hs_x26DA2l, hs_xs26DA2m];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAJN);
                };
                var hs_sat26DAJP = new $hs.Thunk();
                hs_sat26DAJP.evaluateOnce = function () {
                    return hs_listRest26DA2i.hscall($hs.modules.GHCziBool.hs_True);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAJP, hs_sat26DAJO);
            };
            var hs_sat26DAJR = new $hs.Thunk();
            hs_sat26DAJR.evaluateOnce = function () {
                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_reset.hscall(hs_readx26DA2f);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAJR, hs_sat26DAJQ);
        };
        hs_listRest26DA2i.evaluate = function (hs_started26DA2I) {
            var hs_sat26DAK4 = new $hs.Func(1);
            hs_sat26DAK4.evaluate = function (hs_ds26DA2t) {
                var hs_wild26DAJS = hs_ds26DA2t;
                if (hs_ds26DA2t.notEvaluated) {
                    hs_wild26DAJS = hs_ds26DA2t.hscall();
                }
                switch (hs_wild26DAJS.tag) {
                case 3:
                    var hs_c26DA2x = hs_wild26DAJS.data[0];
                    var hs_wild126DAJU = hs_c26DA2x;
                    if (hs_c26DA2x.notEvaluated) {
                        hs_wild126DAJU = hs_c26DA2x.hscall();
                    }
                    switch (hs_wild126DAJU.tag) {
                    case 1:
                        if ($hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.notEvaluated) {
                            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.hscall();
                        } else {
                            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail;
                        }
                    case 2:
                        var hs_ds126DA2B = hs_wild126DAJU.data[0];
                        var hs_ds226DA2G = hs_wild126DAJU.data[1];
                        var hs_wild226DAJW = hs_ds126DA2B;
                        if (hs_ds126DA2B.notEvaluated) {
                            hs_wild226DAJW = hs_ds126DA2B.hscall();
                        }
                        var hs_ds326DA2E = hs_wild226DAJW.data[0];
                        var hs_ds426DAJV = hs_ds326DA2E;
                        if (hs_ds326DA2E.notEvaluated) {
                            hs_ds426DAJV = hs_ds326DA2E.hscall();
                        }
                        switch (hs_ds426DAJV) {
                        case ",":
                            var hs_wild326DAJY = hs_ds226DA2G;
                            if (hs_ds226DA2G.notEvaluated) {
                                hs_wild326DAJY = hs_ds226DA2G.hscall();
                            }
                            switch (hs_wild326DAJY.tag) {
                            case 1:
                                var hs_wild426DAJX = hs_started26DA2I;
                                if (hs_started26DA2I.notEvaluated) {
                                    hs_wild426DAJX = hs_started26DA2I.hscall();
                                }
                                switch (hs_wild426DAJX.tag) {
                                case 1:
                                    if ($hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.notEvaluated) {
                                        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.hscall();
                                    } else {
                                        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail;
                                    }
                                case 2:
                                    if (hs_listNext26DA2q.notEvaluated) {
                                        return hs_listNext26DA2q.hscall();
                                    } else {
                                        return hs_listNext26DA2q;
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
                            var hs_wild326DAK1 = hs_ds226DA2G;
                            if (hs_ds226DA2G.notEvaluated) {
                                hs_wild326DAK1 = hs_ds226DA2G.hscall();
                            }
                            switch (hs_wild326DAK1.tag) {
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
                    var hs_sat26DAJT = new $hs.Thunk();
                    hs_sat26DAJT.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/GHC/Read.lhs:302:8-15\x00");
                    };
                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAJT);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DAK4);
        };
        var hs_ds26DA2R = new $hs.Data(1);
        hs_ds26DA2R.data = [hs_listRest26DA2i, hs_listNext26DA2q];
        var hs_listNext126DA2X = new $hs.Thunk();
        hs_listNext126DA2X.evaluateOnce = function () {
            var hs_ds126DAK6 = hs_ds26DA2R;
            if (hs_ds26DA2R.notEvaluated) {
                hs_ds126DAK6 = hs_ds26DA2R.hscall();
            }
            var hs_ds326DA2W = hs_ds126DAK6.data[1];
            if (hs_ds326DA2W.notEvaluated) {
                return hs_ds326DA2W.hscall();
            } else {
                return hs_ds326DA2W;
            }
        };
        var hs_optional526DA3s = new $hs.Thunk();
        hs_optional526DA3s.evaluateOnce = function () {
            var hs_sat26DAK7 = new $hs.Thunk();
            hs_sat26DAK7.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional526DA3s);
            };
            var hs_sat26DAKk = new $hs.Thunk();
            hs_sat26DAKk.evaluateOnce = function () {
                var hs_sat26DAKj = new $hs.Func(1);
                hs_sat26DAKj.evaluate = function (hs_ds126DA35) {
                    var hs_fail26DA34 = new $hs.Func(1);
                    hs_fail26DA34.evaluate = function (hs_ds226DA33) {
                        var hs_sat26DAK8 = new $hs.Thunk();
                        hs_sat26DAK8.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/GHC/Read.lhs:297:8-17\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAK8);
                    };
                    var hs_wild26DAK9 = hs_ds126DA35;
                    if (hs_ds126DA35.notEvaluated) {
                        hs_wild26DAK9 = hs_ds126DA35.hscall();
                    }
                    switch (hs_wild26DAK9.tag) {
                    case 3:
                        var hs_ds226DA38 = hs_wild26DAK9.data[0];
                        var hs_wild126DAKa = hs_ds226DA38;
                        if (hs_ds226DA38.notEvaluated) {
                            hs_wild126DAKa = hs_ds226DA38.hscall();
                        }
                        switch (hs_wild126DAKa.tag) {
                        case 1:
                            return hs_fail26DA34.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        case 2:
                            var hs_ds326DA3c = hs_wild126DAKa.data[0];
                            var hs_ds426DA3h = hs_wild126DAKa.data[1];
                            var hs_wild226DAKc = hs_ds326DA3c;
                            if (hs_ds326DA3c.notEvaluated) {
                                hs_wild226DAKc = hs_ds326DA3c.hscall();
                            }
                            var hs_ds526DA3f = hs_wild226DAKc.data[0];
                            var hs_ds626DAKb = hs_ds526DA3f;
                            if (hs_ds526DA3f.notEvaluated) {
                                hs_ds626DAKb = hs_ds526DA3f.hscall();
                            }
                            switch (hs_ds626DAKb) {
                            case "[":
                                var hs_wild326DAKe = hs_ds426DA3h;
                                if (hs_ds426DA3h.notEvaluated) {
                                    hs_wild326DAKe = hs_ds426DA3h.hscall();
                                }
                                switch (hs_wild326DAKe.tag) {
                                case 1:
                                    var hs_sat26DAKg = new $hs.Thunk();
                                    hs_sat26DAKg.evaluateOnce = function () {
                                        var hs_ds726DAKd = hs_ds26DA2R;
                                        if (hs_ds26DA2R.notEvaluated) {
                                            hs_ds726DAKd = hs_ds26DA2R.hscall();
                                        }
                                        var hs_ds826DA3m = hs_ds726DAKd.data[0];
                                        return hs_ds826DA3m.hscall($hs.modules.GHCziBool.hs_False);
                                    };
                                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DAKg, hs_listNext126DA2X);
                                case 2:
                                    return hs_fail26DA34.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                }
                            default:
                                return hs_fail26DA34.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            }
                        }
                    default:
                        return hs_fail26DA34.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DAKj);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DAKk, hs_sat26DAK7);
        };
        if (hs_optional526DA3s.notEvaluated) {
            return hs_optional526DA3s.hscall();
        } else {
            return hs_optional526DA3s;
        }
    };
    this.hs_zddmreadList.evaluate = function (hs_zddRead26DA3v) {
        var hs_sat26DAKl = new $hs.Data(1);
        hs_sat26DAKl.data = [0];
        var hs_sat26DAKn = new $hs.Thunk();
        hs_sat26DAKn.evaluateOnce = function () {
            var hs_sat26DAKm = new $hs.Thunk();
            hs_sat26DAKm.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26DA3v);
            };
            return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DAKm);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAKn, hs_sat26DAKl);
    };
    hs_zddEq25vbxk.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zdfEqZMZN.hscall($hs.modules.GHCziClasses.hs_zdfEqChar);
    };
    this.hs_choose.evaluate = function (hs_sps26DA3V) {
        var hs_sat26DAKu = new $hs.Thunk();
        hs_sat26DAKu.evaluateOnce = function () {
            var hs_sat26DAKt = new $hs.Func(1);
            hs_sat26DAKt.evaluate = function (hs_ds26DA3D) {
                var hs_wild26DAKp = hs_ds26DA3D;
                if (hs_ds26DA3D.notEvaluated) {
                    hs_wild26DAKp = hs_ds26DA3D.hscall();
                }
                var hs_s26DA3L = hs_wild26DAKp.data[0];
                var hs_p26DA3O = hs_wild26DAKp.data[1];
                var hs_sat26DAKs = new $hs.Func(1);
                hs_sat26DAKs.evaluate = function (hs_token26DA3I) {
                    var hs_wild126DAKo = hs_token26DA3I;
                    if (hs_token26DA3I.notEvaluated) {
                        hs_wild126DAKo = hs_token26DA3I.hscall();
                    }
                    switch (hs_wild126DAKo.tag) {
                    case 4:
                        var hs_szq26DA3M = hs_wild126DAKo.data[0];
                        var hs_wild226DAKq = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq25vbxk, hs_s26DA3L, hs_szq26DA3M);
                        switch (hs_wild226DAKq.tag) {
                        case 1:
                            if ($hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.notEvaluated) {
                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.hscall();
                            } else {
                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail;
                            }
                        case 2:
                            if (hs_p26DA3O.notEvaluated) {
                                return hs_p26DA3O.hscall();
                            } else {
                                return hs_p26DA3O;
                            }
                        }
                    case 5:
                        var hs_szq26DA3Q = hs_wild126DAKo.data[0];
                        var hs_wild226DAKr = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq25vbxk, hs_s26DA3L, hs_szq26DA3Q);
                        switch (hs_wild226DAKr.tag) {
                        case 1:
                            if ($hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.notEvaluated) {
                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.hscall();
                            } else {
                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail;
                            }
                        case 2:
                            if (hs_p26DA3O.notEvaluated) {
                                return hs_p26DA3O.hscall();
                            } else {
                                return hs_p26DA3O;
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
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DAKs);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp, hs_sat26DAKt);
        };
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26DAKu, $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail, hs_sps26DA3V);
    };
    hs_readNumber25s6VL.evaluate = function (hs_zddNum26DA4k, hs_convert26DA43) {
        var hs_optional526DA4t = new $hs.Thunk();
        hs_optional526DA4t.evaluateOnce = function () {
            var hs_sat26DAKv = new $hs.Thunk();
            hs_sat26DAKv.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional526DA4t);
            };
            var hs_sat26DAKH = new $hs.Thunk();
            hs_sat26DAKH.evaluateOnce = function () {
                var hs_sat26DAKG = new $hs.Func(1);
                hs_sat26DAKG.evaluate = function (hs_x26DA40) {
                    var hs_wild26DA42 = hs_x26DA40;
                    if (hs_x26DA40.notEvaluated) {
                        hs_wild26DA42 = hs_x26DA40.hscall();
                    }
                    switch (hs_wild26DA42.tag) {
                    case 5:
                        var hs_ds26DA45 = hs_wild26DA42.data[0];
                        var hs_wild126DAKw = hs_ds26DA45;
                        if (hs_ds26DA45.notEvaluated) {
                            hs_wild126DAKw = hs_ds26DA45.hscall();
                        }
                        switch (hs_wild126DAKw.tag) {
                        case 1:
                            return hs_convert26DA43.hscall(hs_wild26DA42);
                        case 2:
                            var hs_ds126DA49 = hs_wild126DAKw.data[0];
                            var hs_ds226DA4e = hs_wild126DAKw.data[1];
                            var hs_wild226DAKy = hs_ds126DA49;
                            if (hs_ds126DA49.notEvaluated) {
                                hs_wild226DAKy = hs_ds126DA49.hscall();
                            }
                            var hs_ds326DA4c = hs_wild226DAKy.data[0];
                            var hs_ds426DAKx = hs_ds326DA4c;
                            if (hs_ds326DA4c.notEvaluated) {
                                hs_ds426DAKx = hs_ds326DA4c.hscall();
                            }
                            switch (hs_ds426DAKx) {
                            case "-":
                                var hs_wild326DAKz = hs_ds226DA4e;
                                if (hs_ds226DA4e.notEvaluated) {
                                    hs_wild326DAKz = hs_ds226DA4e.hscall();
                                }
                                switch (hs_wild326DAKz.tag) {
                                case 1:
                                    var hs_sat26DAKD = new $hs.Func(1);
                                    hs_sat26DAKD.evaluate = function (hs_y26DA4h) {
                                        var hs_sat26DAKB = new $hs.Func(1);
                                        hs_sat26DAKB.evaluate = function (hs_n26DA4l) {
                                            var hs_sat26DAKA = new $hs.Thunk();
                                            hs_sat26DAKA.evaluateOnce = function () {
                                                return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26DA4k, hs_n26DA4l);
                                            };
                                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAKA);
                                        };
                                        var hs_sat26DAKC = new $hs.Thunk();
                                        hs_sat26DAKC.evaluateOnce = function () {
                                            return hs_convert26DA43.hscall(hs_y26DA4h);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAKC, hs_sat26DAKB);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DAKD);
                                case 2:
                                    return hs_convert26DA43.hscall(hs_wild26DA42);
                                }
                            default:
                                return hs_convert26DA43.hscall(hs_wild26DA42);
                            }
                        }
                    default:
                        return hs_convert26DA43.hscall(hs_wild26DA42);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DAKG);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DAKH, hs_sat26DAKv);
        };
        if (hs_optional526DA4t.notEvaluated) {
            return hs_optional526DA4t.hscall();
        } else {
            return hs_optional526DA4t;
        }
    };
    hs_sat26DAKI.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadP.hs_munch1.hscall($hs.modules.GHCziUnicode.hs_isDigit);
    };
    this.hs_lexDigits.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadP.hs_readPzutozuS.hscall(hs_sat26DAKI);
    };
    this.hs_readLitChar.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadP.hs_readPzutozuS.hscall($hs.modules.TextziReadziLex.hs_lexChar);
    };
    this.hs_lex.evaluate = function (hs_s26DA4x) {
        return $hs.modules.TextziParserCombinatorsziReadP.hs_readPzutozuS.hscall($hs.modules.TextziReadziLex.hs_hsLex, hs_s26DA4x);
    };
    this.hs_readListPrecDefault.evaluate = function (hs_zddRead26DA4z) {
        var hs_sat26DAKJ = new $hs.Thunk();
        hs_sat26DAKJ.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26DA4z);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DAKJ);
    };
    this.hs_readListDefault.evaluate = function (hs_zddRead26DA4C) {
        var hs_sat26DAKK = new $hs.Data(1);
        hs_sat26DAKK.data = [0];
        var hs_sat26DAKL = new $hs.Thunk();
        hs_sat26DAKL.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_zddRead26DA4C);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAKL, hs_sat26DAKK);
    };
    this.hs_readParen.evaluate = function (hs_b26DA5P, hs_g26DA58, hs_eta26DA5R) {
        var hs_mandatory26DA5a = new $hs.Func(1);
        hs_mandatory26DA5a.evaluate = function (hs_r26DA4K) {
            var hs_sat26DALa = new $hs.Func(1);
            hs_sat26DALa.evaluate = function (hs_ds26DA4S) {
                var hs_fail26DA4R = new $hs.Func(1);
                hs_fail26DA4R.evaluate = function (hs_ds126DA4Q) {
                    var hs_sat26DAKM = new $hs.Thunk();
                    hs_sat26DAKM.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/GHC/Read.lhs:88:33-39\x00");
                    };
                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26DAKM);
                };
                var hs_wild26DAKO = hs_ds26DA4S;
                if (hs_ds26DA4S.notEvaluated) {
                    hs_wild26DAKO = hs_ds26DA4S.hscall();
                }
                var hs_ds126DA4W = hs_wild26DAKO.data[0];
                var hs_s26DA57 = hs_wild26DAKO.data[1];
                var hs_wild126DAKN = hs_ds126DA4W;
                if (hs_ds126DA4W.notEvaluated) {
                    hs_wild126DAKN = hs_ds126DA4W.hscall();
                }
                switch (hs_wild126DAKN.tag) {
                case 1:
                    return hs_fail26DA4R.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                case 2:
                    var hs_ds226DA50 = hs_wild126DAKN.data[0];
                    var hs_ds326DA55 = hs_wild126DAKN.data[1];
                    var hs_wild226DAKQ = hs_ds226DA50;
                    if (hs_ds226DA50.notEvaluated) {
                        hs_wild226DAKQ = hs_ds226DA50.hscall();
                    }
                    var hs_ds426DA53 = hs_wild226DAKQ.data[0];
                    var hs_ds526DAKP = hs_ds426DA53;
                    if (hs_ds426DA53.notEvaluated) {
                        hs_ds526DAKP = hs_ds426DA53.hscall();
                    }
                    switch (hs_ds526DAKP) {
                    case "(":
                        var hs_wild326DAKS = hs_ds326DA55;
                        if (hs_ds326DA55.notEvaluated) {
                            hs_wild326DAKS = hs_ds326DA55.hscall();
                        }
                        switch (hs_wild326DAKS.tag) {
                        case 1:
                            var hs_sat26DAL4 = new $hs.Func(1);
                            hs_sat26DAL4.evaluate = function (hs_ds626DA5e) {
                                var hs_wild426DAKR = hs_ds626DA5e;
                                if (hs_ds626DA5e.notEvaluated) {
                                    hs_wild426DAKR = hs_ds626DA5e.hscall();
                                }
                                var hs_x26DA5F = hs_wild426DAKR.data[0];
                                var hs_t26DA5i = hs_wild426DAKR.data[1];
                                var hs_sat26DAL2 = new $hs.Func(1);
                                hs_sat26DAL2.evaluate = function (hs_ds726DA5q) {
                                    var hs_fail126DA5p = new $hs.Func(1);
                                    hs_fail126DA5p.evaluate = function (hs_ds826DA5o) {
                                        var hs_sat26DAKT = new $hs.Thunk();
                                        hs_sat26DAKT.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/GHC/Read.lhs:90:33-39\x00");
                                        };
                                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26DAKT);
                                    };
                                    var hs_wild526DAKV = hs_ds726DA5q;
                                    if (hs_ds726DA5q.notEvaluated) {
                                        hs_wild526DAKV = hs_ds726DA5q.hscall();
                                    }
                                    var hs_ds826DA5u = hs_wild526DAKV.data[0];
                                    var hs_u26DA5G = hs_wild526DAKV.data[1];
                                    var hs_wild626DAKU = hs_ds826DA5u;
                                    if (hs_ds826DA5u.notEvaluated) {
                                        hs_wild626DAKU = hs_ds826DA5u.hscall();
                                    }
                                    switch (hs_wild626DAKU.tag) {
                                    case 1:
                                        return hs_fail126DA5p.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                    case 2:
                                        var hs_ds926DA5y = hs_wild626DAKU.data[0];
                                        var hs_ds1026DA5D = hs_wild626DAKU.data[1];
                                        var hs_wild726DAKX = hs_ds926DA5y;
                                        if (hs_ds926DA5y.notEvaluated) {
                                            hs_wild726DAKX = hs_ds926DA5y.hscall();
                                        }
                                        var hs_ds1126DA5B = hs_wild726DAKX.data[0];
                                        var hs_ds1226DAKW = hs_ds1126DA5B;
                                        if (hs_ds1126DA5B.notEvaluated) {
                                            hs_ds1226DAKW = hs_ds1126DA5B.hscall();
                                        }
                                        switch (hs_ds1226DAKW) {
                                        case ")":
                                            var hs_wild826DAKY = hs_ds1026DA5D;
                                            if (hs_ds1026DA5D.notEvaluated) {
                                                hs_wild826DAKY = hs_ds1026DA5D.hscall();
                                            }
                                            switch (hs_wild826DAKY.tag) {
                                            case 1:
                                                var hs_sat26DAKZ = new $hs.Data(1);
                                                hs_sat26DAKZ.data = [hs_x26DA5F, hs_u26DA5G];
                                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26DAKZ);
                                            case 2:
                                                return hs_fail126DA5p.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                            }
                                        default:
                                            return hs_fail126DA5p.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                        }
                                    }
                                };
                                var hs_sat26DAL3 = new $hs.Thunk();
                                hs_sat26DAL3.evaluateOnce = function () {
                                    return $hs.modules.TextziParserCombinatorsziReadP.hs_readPzutozuS.hscall($hs.modules.TextziReadziLex.hs_hsLex, hs_t26DA5i);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26DAL3, hs_sat26DAL2);
                            };
                            var hs_sat26DAL7 = new $hs.Thunk();
                            hs_sat26DAL7.evaluateOnce = function () {
                                var hs_sat26DAL5 = new $hs.Thunk();
                                hs_sat26DAL5.evaluateOnce = function () {
                                    return hs_mandatory26DA5a.hscall(hs_s26DA57);
                                };
                                var hs_sat26DAL6 = new $hs.Thunk();
                                hs_sat26DAL6.evaluateOnce = function () {
                                    return hs_g26DA58.hscall(hs_s26DA57);
                                };
                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DAL6, hs_sat26DAL5);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26DAL7, hs_sat26DAL4);
                        case 2:
                            return hs_fail26DA4R.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        }
                    default:
                        return hs_fail26DA4R.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                }
            };
            var hs_sat26DALb = new $hs.Thunk();
            hs_sat26DALb.evaluateOnce = function () {
                return $hs.modules.TextziParserCombinatorsziReadP.hs_readPzutozuS.hscall($hs.modules.TextziReadziLex.hs_hsLex, hs_r26DA4K);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadZMZN, hs_sat26DALb, hs_sat26DALa);
        };
        var hs_wild26DALc = hs_b26DA5P;
        if (hs_b26DA5P.notEvaluated) {
            hs_wild26DALc = hs_b26DA5P.hscall();
        }
        switch (hs_wild26DALc.tag) {
        case 1:
            var hs_sat26DALd = new $hs.Thunk();
            hs_sat26DALd.evaluateOnce = function () {
                return hs_mandatory26DA5a.hscall(hs_eta26DA5R);
            };
            var hs_sat26DALe = new $hs.Thunk();
            hs_sat26DALe.evaluateOnce = function () {
                return hs_g26DA58.hscall(hs_eta26DA5R);
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DALe, hs_sat26DALd);
        case 2:
            return hs_mandatory26DA5a.hscall(hs_eta26DA5R);
        }
    };
    hs_sat26DALf.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional25vbzF);
    };
    hs_sat26DALg.evaluateOnce = function () {
        var hs_sat26DALj = new $hs.Func(1);
        hs_sat26DALj.evaluate = function (hs_ds26DA5X) {
            var hs_wild26DALh = hs_ds26DA5X;
            if (hs_ds26DA5X.notEvaluated) {
                hs_wild26DALh = hs_ds26DA5X.hscall();
            }
            switch (hs_wild26DALh.tag) {
            case 1:
                var hs_c26DA61 = hs_wild26DALh.data[0];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_c26DA61);
            default:
                var hs_sat26DALi = new $hs.Thunk();
                hs_sat26DALi.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/GHC/Read.lhs:339:10-17\x00");
                };
                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DALi);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DALj);
    };
    hs_optional25vbzF.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DALg, hs_sat26DALf);
    };
    hs_zdcreadPrec25vbzQ.evaluateOnce = function () {
        if (hs_optional25vbzF.notEvaluated) {
            return hs_optional25vbzF.hscall();
        } else {
            return hs_optional25vbzF;
        }
    };
    hs_sat26DALk.data = [0];
    hs_sat26DALl.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrec.hscall($hs.modules.GHCziRead.hs_zdfReadChar);
    };
    hs_sat26DALm.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadChar);
    };
    hs_sat26DALn.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional125vbzY);
    };
    hs_sat26DALo.evaluateOnce = function () {
        var hs_sat26DALr = new $hs.Thunk();
        hs_sat26DALr.evaluateOnce = function () {
            var hs_sat26DALp = new $hs.Thunk();
            hs_sat26DALp.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadChar);
            };
            return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DALp);
        };
        var hs_sat26DALu = new $hs.Thunk();
        hs_sat26DALu.evaluateOnce = function () {
            var hs_sat26DALt = new $hs.Func(1);
            hs_sat26DALt.evaluate = function (hs_ds26DA6j) {
                var hs_wild26DALq = hs_ds26DA6j;
                if (hs_ds26DA6j.notEvaluated) {
                    hs_wild26DALq = hs_ds26DA6j.hscall();
                }
                switch (hs_wild26DALq.tag) {
                case 2:
                    var hs_s26DA6n = hs_wild26DALq.data[0];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_s26DA6n);
                default:
                    var hs_sat26DALs = new $hs.Thunk();
                    hs_sat26DALs.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/GHC/Read.lhs:345:10-19\x00");
                    };
                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DALs);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DALt);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DALu, hs_sat26DALr);
    };
    hs_zdcreadListPrec25vbzS.evaluateOnce = function () {
        if (hs_optional125vbzY.notEvaluated) {
            return hs_optional125vbzY.hscall();
        } else {
            return hs_optional125vbzY;
        }
    };
    this.hs_zdfReadChar.data = [hs_zdcreadsPrec25vbzW, hs_zdcreadList25vbzU, hs_optional25vbzF, hs_optional125vbzY];
    hs_zdcreadList25vbzU.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DALl, hs_sat26DALk);
    };
    hs_zdcreadsPrec25vbzW.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DALm);
    };
    hs_optional125vbzY.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DALo, hs_sat26DALn);
    };
    hs_sat26DALv.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional225vbAf);
    };
    hs_sat26DALw.evaluateOnce = function () {
        var hs_sat26DALD = new $hs.Func(1);
        hs_sat26DALD.evaluate = function (hs_ds26DA6x) {
            var hs_wild26DALx = hs_ds26DA6x;
            if (hs_ds26DA6x.notEvaluated) {
                hs_wild26DALx = hs_ds26DA6x.hscall();
            }
            switch (hs_wild26DALx.tag) {
            case 4:
                var hs_s26DA6B = hs_wild26DALx.data[0];
                var hs_sat26DALA = new $hs.Thunk();
                hs_sat26DALA.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("False\x00");
                };
                var hs_wild126DALz = $hs.modules.GHCziBase.hs_eqString.hscall(hs_s26DA6B, hs_sat26DALA);
                switch (hs_wild126DALz.tag) {
                case 1:
                    var hs_sat26DALC = new $hs.Thunk();
                    hs_sat26DALC.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("True\x00");
                    };
                    var hs_wild226DALB = $hs.modules.GHCziBase.hs_eqString.hscall(hs_s26DA6B, hs_sat26DALC);
                    switch (hs_wild226DALB.tag) {
                    case 1:
                        if ($hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.notEvaluated) {
                            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail.hscall();
                        } else {
                            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_pfail;
                        }
                    case 2:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziBool.hs_True);
                    }
                case 2:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziBool.hs_False);
                }
            default:
                var hs_sat26DALy = new $hs.Thunk();
                hs_sat26DALy.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/GHC/Read.lhs:356:10-18\x00");
                };
                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DALy);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DALD);
    };
    hs_optional225vbAf.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DALw, hs_sat26DALv);
    };
    hs_zdcreadPrec125vbAu.evaluateOnce = function () {
        if (hs_optional225vbAf.notEvaluated) {
            return hs_optional225vbAf.hscall();
        } else {
            return hs_optional225vbAf;
        }
    };
    hs_sat26DALE.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadBool);
    };
    hs_sat26DALF.data = [0];
    hs_sat26DALG.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrec.hscall($hs.modules.GHCziRead.hs_zdfReadBool);
    };
    hs_sat26DALH.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadBool);
    };
    this.hs_zdfReadBool.data = [hs_zdcreadsPrec125vbAA, hs_zdcreadList125vbAy, hs_optional225vbAf, hs_zdcreadListPrec125vbAw];
    hs_zdcreadListPrec125vbAw.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DALE);
    };
    hs_zdcreadList125vbAy.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DALG, hs_sat26DALF);
    };
    hs_zdcreadsPrec125vbAA.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DALH);
    };
    hs_sat26DALI.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional325vbAG);
    };
    hs_sat26DALJ.evaluateOnce = function () {
        var hs_sat26DALS = new $hs.Func(1);
        hs_sat26DALS.evaluate = function (hs_ds26DA6Y) {
            var hs_wild26DALK = hs_ds26DA6Y;
            if (hs_ds26DA6Y.notEvaluated) {
                hs_wild26DALK = hs_ds26DA6Y.hscall();
            }
            switch (hs_wild26DALK.tag) {
            case 4:
                var hs_s26DA72 = hs_wild26DALK.data[0];
                var hs_sat26DALN = new $hs.Thunk();
                hs_sat26DALN.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("EQ\x00");
                };
                var hs_wild126DALM = $hs.modules.GHCziBase.hs_eqString.hscall(hs_s26DA72, hs_sat26DALN);
                switch (hs_wild126DALM.tag) {
                case 1:
                    var hs_sat26DALP = new $hs.Thunk();
                    hs_sat26DALP.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("GT\x00");
                    };
                    var hs_wild226DALO = $hs.modules.GHCziBase.hs_eqString.hscall(hs_s26DA72, hs_sat26DALP);
                    switch (hs_wild226DALO.tag) {
                    case 1:
                        var hs_sat26DALR = new $hs.Thunk();
                        hs_sat26DALR.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("LT\x00");
                        };
                        var hs_wild326DALQ = $hs.modules.GHCziBase.hs_eqString.hscall(hs_s26DA72, hs_sat26DALR);
                        switch (hs_wild326DALQ.tag) {
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
                var hs_sat26DALL = new $hs.Thunk();
                hs_sat26DALL.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/GHC/Read.lhs:369:10-18\x00");
                };
                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DALL);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DALS);
    };
    hs_optional325vbAG.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DALJ, hs_sat26DALI);
    };
    hs_zdcreadPrec225vbAX.evaluateOnce = function () {
        if (hs_optional325vbAG.notEvaluated) {
            return hs_optional325vbAG.hscall();
        } else {
            return hs_optional325vbAG;
        }
    };
    hs_sat26DALT.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadOrdering);
    };
    hs_sat26DALU.data = [0];
    hs_sat26DALV.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrec.hscall($hs.modules.GHCziRead.hs_zdfReadOrdering);
    };
    hs_sat26DALW.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadOrdering);
    };
    this.hs_zdfReadOrdering.data = [hs_zdcreadsPrec225vbB3, hs_zdcreadList225vbB1, hs_optional325vbAG, hs_zdcreadListPrec225vbAZ];
    hs_zdcreadListPrec225vbAZ.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DALT);
    };
    hs_zdcreadList225vbB1.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DALV, hs_sat26DALU);
    };
    hs_zdcreadsPrec225vbB3.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DALW);
    };
    hs_zdcreadPrec325vbB9.evaluate = function (hs_zddRead26DA7S) {
        var hs_optional526DA83 = new $hs.Thunk();
        hs_optional526DA83.evaluateOnce = function () {
            var hs_sat26DALX = new $hs.Thunk();
            hs_sat26DALX.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional526DA83);
            };
            var hs_sat26DAMf = new $hs.Thunk();
            hs_sat26DAMf.evaluateOnce = function () {
                var hs_sat26DAM8 = new $hs.Thunk();
                hs_sat26DAM8.evaluateOnce = function () {
                    var hs_sat26DAM7 = new $hs.Thunk();
                    hs_sat26DAM7.evaluateOnce = function () {
                        var hs_sat26DAM6 = new $hs.Func(1);
                        hs_sat26DAM6.evaluate = function (hs_ds26DA7M) {
                            var hs_fail26DA7L = new $hs.Func(1);
                            hs_fail26DA7L.evaluate = function (hs_ds126DA7K) {
                                var hs_sat26DALY = new $hs.Thunk();
                                hs_sat26DALY.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/GHC/Read.lhs:417:12-25\x00");
                                };
                                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DALY);
                            };
                            var hs_wild26DALZ = hs_ds26DA7M;
                            if (hs_ds26DA7M.notEvaluated) {
                                hs_wild26DALZ = hs_ds26DA7M.hscall();
                            }
                            switch (hs_wild26DALZ.tag) {
                            case 4:
                                var hs_ds126DA7P = hs_wild26DALZ.data[0];
                                var hs_sat26DAM1 = new $hs.Thunk();
                                hs_sat26DAM1.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Just\x00");
                                };
                                var hs_wild126DAM0 = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126DA7P, hs_sat26DAM1);
                                switch (hs_wild126DAM0.tag) {
                                case 1:
                                    return hs_fail26DA7L.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                case 2:
                                    var hs_sat26DAM3 = new $hs.Func(1);
                                    hs_sat26DAM3.evaluate = function (hs_x26DA7W) {
                                        var hs_sat26DAM2 = new $hs.Data(2);
                                        hs_sat26DAM2.data = [hs_x26DA7W];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAM2);
                                    };
                                    var hs_sat26DAM5 = new $hs.Thunk();
                                    hs_sat26DAM5.evaluateOnce = function () {
                                        var hs_sat26DAM4 = new $hs.Thunk();
                                        hs_sat26DAM4.evaluateOnce = function () {
                                            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26DA7S);
                                        };
                                        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_step.hscall(hs_sat26DAM4);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAM5, hs_sat26DAM3);
                                }
                            default:
                                return hs_fail26DA7L.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DAM6);
                    };
                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall($hs.modules.GHCziShow.hs_appPrec, hs_sat26DAM7);
                };
                var hs_sat26DAMe = new $hs.Thunk();
                hs_sat26DAMe.evaluateOnce = function () {
                    var hs_sat26DAMd = new $hs.Func(1);
                    hs_sat26DAMd.evaluate = function (hs_ds26DA7y) {
                        var hs_fail26DA7x = new $hs.Func(1);
                        hs_fail26DA7x.evaluate = function (hs_ds126DA7w) {
                            var hs_sat26DAM9 = new $hs.Thunk();
                            hs_sat26DAM9.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/GHC/Read.lhs:413:9-25\x00");
                            };
                            return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAM9);
                        };
                        var hs_wild26DAMa = hs_ds26DA7y;
                        if (hs_ds26DA7y.notEvaluated) {
                            hs_wild26DAMa = hs_ds26DA7y.hscall();
                        }
                        switch (hs_wild26DAMa.tag) {
                        case 4:
                            var hs_ds126DA7B = hs_wild26DAMa.data[0];
                            var hs_sat26DAMc = new $hs.Thunk();
                            hs_sat26DAMc.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Nothing\x00");
                            };
                            var hs_wild126DAMb = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126DA7B, hs_sat26DAMc);
                            switch (hs_wild126DAMb.tag) {
                            case 1:
                                return hs_fail26DA7x.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            case 2:
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziMaybe.hs_Nothing);
                            }
                        default:
                            return hs_fail26DA7x.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DAMd);
                };
                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DAMe, hs_sat26DAM8);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DAMf, hs_sat26DALX);
        };
        if (hs_optional526DA83.notEvaluated) {
            return hs_optional526DA83.hscall();
        } else {
            return hs_optional526DA83;
        }
    };
    this.hs_zdfReadMaybe.evaluate = function (hs_zddRead26DA8c) {
        var hs_sat26DAMg = new $hs.Thunk();
        hs_sat26DAMg.evaluateOnce = function () {
            return hs_zdcreadListPrec325vbBQ.hscall(hs_zddRead26DA8c);
        };
        var hs_sat26DAMh = new $hs.Thunk();
        hs_sat26DAMh.evaluateOnce = function () {
            return hs_zdcreadPrec325vbB9.hscall(hs_zddRead26DA8c);
        };
        var hs_sat26DAMi = new $hs.Thunk();
        hs_sat26DAMi.evaluateOnce = function () {
            return hs_zdcreadList325vbBS.hscall(hs_zddRead26DA8c);
        };
        var hs_sat26DAMj = new $hs.Thunk();
        hs_sat26DAMj.evaluateOnce = function () {
            return hs_zdcreadsPrec325vbBU.hscall(hs_zddRead26DA8c);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DAMj, hs_sat26DAMi, hs_sat26DAMh, hs_sat26DAMg];
        return $res;
    };
    hs_zdcreadListPrec325vbBQ.evaluate = function (hs_zddRead26DA8i) {
        var hs_sat26DAMl = new $hs.Thunk();
        hs_sat26DAMl.evaluateOnce = function () {
            var hs_sat26DAMk = $hs.modules.GHCziRead.hs_zdfReadMaybe.hscall(hs_zddRead26DA8i);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DAMk);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DAMl);
    };
    hs_zdcreadList325vbBS.evaluate = function (hs_zddRead26DA8m) {
        var hs_sat26DAMn = new $hs.Data(1);
        hs_sat26DAMn.data = [0];
        var hs_sat26DAMo = new $hs.Thunk();
        hs_sat26DAMo.evaluateOnce = function () {
            var hs_sat26DAMm = $hs.modules.GHCziRead.hs_zdfReadMaybe.hscall(hs_zddRead26DA8m);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26DAMm);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAMo, hs_sat26DAMn);
    };
    hs_zdcreadsPrec325vbBU.evaluate = function (hs_zddRead26DA8r) {
        var hs_sat26DAMq = new $hs.Thunk();
        hs_sat26DAMq.evaluateOnce = function () {
            var hs_sat26DAMp = $hs.modules.GHCziRead.hs_zdfReadMaybe.hscall(hs_zddRead26DA8r);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DAMp);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAMq);
    };
    this.hs_zdfReadZMZN.evaluate = function (hs_zddRead26DA8B) {
        var hs_sat26DAMr = new $hs.Thunk();
        hs_sat26DAMr.evaluateOnce = function () {
            return hs_zdcreadListPrec425vbCf.hscall(hs_zddRead26DA8B);
        };
        var hs_sat26DAMs = new $hs.Thunk();
        hs_sat26DAMs.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_zddRead26DA8B);
        };
        var hs_sat26DAMt = new $hs.Thunk();
        hs_sat26DAMt.evaluateOnce = function () {
            return hs_zdcreadList425vbCh.hscall(hs_zddRead26DA8B);
        };
        var hs_sat26DAMu = new $hs.Thunk();
        hs_sat26DAMu.evaluateOnce = function () {
            return hs_zdcreadsPrec425vbCj.hscall(hs_zddRead26DA8B);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DAMu, hs_sat26DAMt, hs_sat26DAMs, hs_sat26DAMr];
        return $res;
    };
    hs_zdcreadListPrec425vbCf.evaluate = function (hs_zddRead26DA8H) {
        var hs_sat26DAMw = new $hs.Thunk();
        hs_sat26DAMw.evaluateOnce = function () {
            var hs_sat26DAMv = $hs.modules.GHCziRead.hs_zdfReadZMZN.hscall(hs_zddRead26DA8H);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DAMv);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DAMw);
    };
    hs_zdcreadList425vbCh.evaluate = function (hs_zddRead26DA8L) {
        var hs_sat26DAMy = new $hs.Data(1);
        hs_sat26DAMy.data = [0];
        var hs_sat26DAMz = new $hs.Thunk();
        hs_sat26DAMz.evaluateOnce = function () {
            var hs_sat26DAMx = $hs.modules.GHCziRead.hs_zdfReadZMZN.hscall(hs_zddRead26DA8L);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26DAMx);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAMz, hs_sat26DAMy);
    };
    hs_zdcreadsPrec425vbCj.evaluate = function (hs_zddRead26DA8Q) {
        var hs_sat26DAMB = new $hs.Thunk();
        hs_sat26DAMB.evaluateOnce = function () {
            var hs_sat26DAMA = $hs.modules.GHCziRead.hs_zdfReadZMZN.hscall(hs_zddRead26DA8Q);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DAMA);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAMB);
    };
    hs_sat26DAMC.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadLexeme);
    };
    hs_sat26DAMD.data = [0];
    hs_sat26DAME.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrec.hscall($hs.modules.GHCziRead.hs_zdfReadLexeme);
    };
    hs_sat26DAMF.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadLexeme);
    };
    this.hs_zdfReadLexeme.data = [hs_zdcreadsPrec525vbCI, hs_zdcreadList525vbCG, $hs.modules.GHCziRead.hs_lexP, hs_zdcreadListPrec525vbCE];
    hs_zdcreadListPrec525vbCE.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DAMC);
    };
    hs_zdcreadList525vbCG.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAME, hs_sat26DAMD);
    };
    hs_zdcreadsPrec525vbCI.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAMF);
    };
    hs_sat26DAMG.evaluate = function (hs_eta1cW6l3) {
        return hs_convertInt25s6VN.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_eta1cW6l3);
    };
    hs_zdcreadPrec425vbCO.evaluateOnce = function () {
        return hs_readNumber25s6VL.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DAMG);
    };
    hs_sat26DAMH.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInt);
    };
    hs_sat26DAMI.data = [0];
    hs_sat26DAMJ.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInt);
    };
    hs_sat26DAMK.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInt);
    };
    this.hs_zdfReadInt.data = [hs_zdcreadsPrec625vbCV, hs_zdcreadList625vbCT, hs_zdcreadPrec425vbCO, hs_zdcreadListPrec625vbCR];
    hs_zdcreadListPrec625vbCR.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DAMH);
    };
    hs_zdcreadList625vbCT.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAMJ, hs_sat26DAMI);
    };
    hs_zdcreadsPrec625vbCV.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAMK);
    };
    hs_sat26DAML.evaluate = function (hs_eta1cW6l3) {
        return hs_convertInt25s6VN.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_eta1cW6l3);
    };
    hs_zdcreadPrec525vbD1.evaluateOnce = function () {
        return hs_readNumber25s6VL.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DAML);
    };
    hs_sat26DAMM.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInteger);
    };
    hs_sat26DAMN.data = [0];
    hs_sat26DAMO.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInteger);
    };
    hs_sat26DAMP.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInteger);
    };
    this.hs_zdfReadInteger.data = [hs_zdcreadsPrec725vbD8, hs_zdcreadList725vbD6, hs_zdcreadPrec525vbD1, hs_zdcreadListPrec725vbD4];
    hs_zdcreadListPrec725vbD4.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DAMM);
    };
    hs_zdcreadList725vbD6.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAMO, hs_sat26DAMN);
    };
    hs_zdcreadsPrec725vbD8.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAMP);
    };
    hs_sat26DAMQ.evaluate = function (hs_eta1cW6l3) {
        return hs_convertFrac25s6VP.hscall($hs.modules.GHCziFloat.hs_zdfFractionalFloat, hs_eta1cW6l3);
    };
    hs_zdcreadPrec625vbDe.evaluateOnce = function () {
        return hs_readNumber25s6VL.hscall($hs.modules.GHCziFloat.hs_zdfNumFloat, hs_sat26DAMQ);
    };
    hs_sat26DAMR.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadFloat);
    };
    hs_sat26DAMS.data = [0];
    hs_sat26DAMT.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrec.hscall($hs.modules.GHCziRead.hs_zdfReadFloat);
    };
    hs_sat26DAMU.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadFloat);
    };
    this.hs_zdfReadFloat.data = [hs_zdcreadsPrec825vbDl, hs_zdcreadList825vbDj, hs_zdcreadPrec625vbDe, hs_zdcreadListPrec825vbDh];
    hs_zdcreadListPrec825vbDh.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DAMR);
    };
    hs_zdcreadList825vbDj.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAMT, hs_sat26DAMS);
    };
    hs_zdcreadsPrec825vbDl.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAMU);
    };
    hs_sat26DAMV.evaluate = function (hs_eta1cW6l3) {
        return hs_convertFrac25s6VP.hscall($hs.modules.GHCziFloat.hs_zdfFractionalDouble, hs_eta1cW6l3);
    };
    hs_zdcreadPrec725vbDr.evaluateOnce = function () {
        return hs_readNumber25s6VL.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26DAMV);
    };
    hs_sat26DAMW.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadDouble);
    };
    hs_sat26DAMX.data = [0];
    hs_sat26DAMY.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrec.hscall($hs.modules.GHCziRead.hs_zdfReadDouble);
    };
    hs_sat26DAMZ.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadDouble);
    };
    this.hs_zdfReadDouble.data = [hs_zdcreadsPrec925vbDy, hs_zdcreadList925vbDw, hs_zdcreadPrec725vbDr, hs_zdcreadListPrec925vbDu];
    hs_zdcreadListPrec925vbDu.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DAMW);
    };
    hs_zdcreadList925vbDw.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAMY, hs_sat26DAMX);
    };
    hs_zdcreadsPrec925vbDy.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAMZ);
    };
    hs_zdcreadPrec825vbDE.evaluate = function (hs_zddIntegral26DAap, hs_zddRead26DA9Y) {
        var hs_optional526DAaA = new $hs.Thunk();
        hs_optional526DAaA.evaluateOnce = function () {
            var hs_sat26DAN0 = new $hs.Thunk();
            hs_sat26DAN0.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional526DAaA);
            };
            var hs_sat26DANi = new $hs.Thunk();
            hs_sat26DANi.evaluateOnce = function () {
                var hs_sat26DANh = new $hs.Thunk();
                hs_sat26DANh.evaluateOnce = function () {
                    var hs_sat26DANe = new $hs.Func(1);
                    hs_sat26DANe.evaluate = function (hs_x26DAaq) {
                        var hs_sat26DANd = new $hs.Func(1);
                        hs_sat26DANd.evaluate = function (hs_ds26DAa8) {
                            var hs_fail26DAa7 = new $hs.Func(1);
                            hs_fail26DAa7.evaluate = function (hs_ds126DAa6) {
                                var hs_sat26DAN1 = new $hs.Thunk();
                                hs_sat26DAN1.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/GHC/Read.lhs:502:12-23\x00");
                                };
                                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAN1);
                            };
                            var hs_wild26DAN2 = hs_ds26DAa8;
                            if (hs_ds26DAa8.notEvaluated) {
                                hs_wild26DAN2 = hs_ds26DAa8.hscall();
                            }
                            switch (hs_wild26DAN2.tag) {
                            case 5:
                                var hs_ds126DAab = hs_wild26DAN2.data[0];
                                var hs_wild126DAN3 = hs_ds126DAab;
                                if (hs_ds126DAab.notEvaluated) {
                                    hs_wild126DAN3 = hs_ds126DAab.hscall();
                                }
                                switch (hs_wild126DAN3.tag) {
                                case 1:
                                    return hs_fail26DAa7.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                case 2:
                                    var hs_ds226DAaf = hs_wild126DAN3.data[0];
                                    var hs_ds326DAak = hs_wild126DAN3.data[1];
                                    var hs_wild226DAN5 = hs_ds226DAaf;
                                    if (hs_ds226DAaf.notEvaluated) {
                                        hs_wild226DAN5 = hs_ds226DAaf.hscall();
                                    }
                                    var hs_ds426DAai = hs_wild226DAN5.data[0];
                                    var hs_ds526DAN4 = hs_ds426DAai;
                                    if (hs_ds426DAai.notEvaluated) {
                                        hs_ds526DAN4 = hs_ds426DAai.hscall();
                                    }
                                    switch (hs_ds526DAN4) {
                                    case "%":
                                        var hs_wild326DAN6 = hs_ds326DAak;
                                        if (hs_ds326DAak.notEvaluated) {
                                            hs_wild326DAN6 = hs_ds326DAak.hscall();
                                        }
                                        switch (hs_wild326DAN6.tag) {
                                        case 1:
                                            var hs_sat26DAN8 = new $hs.Func(1);
                                            hs_sat26DAN8.evaluate = function (hs_y26DAar) {
                                                var hs_sat26DAN7 = new $hs.Thunk();
                                                hs_sat26DAN7.evaluateOnce = function () {
                                                    return $hs.modules.GHCziReal.hs_zv.hscall(hs_zddIntegral26DAap, hs_x26DAaq, hs_y26DAar);
                                                };
                                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAN7);
                                            };
                                            var hs_sat26DANa = new $hs.Thunk();
                                            hs_sat26DANa.evaluateOnce = function () {
                                                var hs_sat26DAN9 = new $hs.Thunk();
                                                hs_sat26DAN9.evaluateOnce = function () {
                                                    return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26DA9Y);
                                                };
                                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_step.hscall(hs_sat26DAN9);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DANa, hs_sat26DAN8);
                                        case 2:
                                            return hs_fail26DAa7.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                        }
                                    default:
                                        return hs_fail26DAa7.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                                    }
                                }
                            default:
                                return hs_fail26DAa7.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DANd);
                    };
                    var hs_sat26DANg = new $hs.Thunk();
                    hs_sat26DANg.evaluateOnce = function () {
                        var hs_sat26DANf = new $hs.Thunk();
                        hs_sat26DANf.evaluateOnce = function () {
                            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26DA9Y);
                        };
                        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_step.hscall(hs_sat26DANf);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DANg, hs_sat26DANe);
                };
                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall($hs.modules.GHCziReal.hs_ratioPrec, hs_sat26DANh);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DANi, hs_sat26DAN0);
        };
        if (hs_optional526DAaA.notEvaluated) {
            return hs_optional526DAaA.hscall();
        } else {
            return hs_optional526DAaA;
        }
    };
    this.hs_zdfReadRatio.evaluate = function (hs_zddIntegral26DAaK, hs_zddRead26DAaL) {
        var hs_sat26DANj = new $hs.Thunk();
        hs_sat26DANj.evaluateOnce = function () {
            return hs_zdcreadListPrec1025vbEn.hscall(hs_zddIntegral26DAaK, hs_zddRead26DAaL);
        };
        var hs_sat26DANk = new $hs.Thunk();
        hs_sat26DANk.evaluateOnce = function () {
            return hs_zdcreadPrec825vbDE.hscall(hs_zddIntegral26DAaK, hs_zddRead26DAaL);
        };
        var hs_sat26DANl = new $hs.Thunk();
        hs_sat26DANl.evaluateOnce = function () {
            return hs_zdcreadList1025vbEp.hscall(hs_zddIntegral26DAaK, hs_zddRead26DAaL);
        };
        var hs_sat26DANm = new $hs.Thunk();
        hs_sat26DANm.evaluateOnce = function () {
            return hs_zdcreadsPrec1025vbEr.hscall(hs_zddIntegral26DAaK, hs_zddRead26DAaL);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DANm, hs_sat26DANl, hs_sat26DANk, hs_sat26DANj];
        return $res;
    };
    hs_zdcreadListPrec1025vbEn.evaluate = function (hs_zddIntegral26DAaS, hs_zddRead26DAaT) {
        var hs_sat26DANo = new $hs.Thunk();
        hs_sat26DANo.evaluateOnce = function () {
            var hs_sat26DANn = $hs.modules.GHCziRead.hs_zdfReadRatio.hscall(hs_zddIntegral26DAaS, hs_zddRead26DAaT);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DANn);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DANo);
    };
    hs_zdcreadList1025vbEp.evaluate = function (hs_zddIntegral26DAaY, hs_zddRead26DAaZ) {
        var hs_sat26DANq = new $hs.Data(1);
        hs_sat26DANq.data = [0];
        var hs_sat26DANr = new $hs.Thunk();
        hs_sat26DANr.evaluateOnce = function () {
            var hs_sat26DANp = $hs.modules.GHCziRead.hs_zdfReadRatio.hscall(hs_zddIntegral26DAaY, hs_zddRead26DAaZ);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26DANp);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DANr, hs_sat26DANq);
    };
    hs_zdcreadsPrec1025vbEr.evaluate = function (hs_zddIntegral26DAb5, hs_zddRead26DAb6) {
        var hs_sat26DANt = new $hs.Thunk();
        hs_sat26DANt.evaluateOnce = function () {
            var hs_sat26DANs = $hs.modules.GHCziRead.hs_zdfReadRatio.hscall(hs_zddIntegral26DAb5, hs_zddRead26DAb6);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DANs);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DANt);
    };
    hs_sat26DANu.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional425vbEU);
    };
    hs_sat26DANv.evaluateOnce = function () {
        var hs_sat26DANw = new $hs.Thunk();
        hs_sat26DANw.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziUnit.hs_Z0T);
        };
        return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26DANw);
    };
    hs_optional425vbEU.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DANv, hs_sat26DANu);
    };
    hs_zdcreadPrec925vbEZ.evaluateOnce = function () {
        if (hs_optional425vbEU.notEvaluated) {
            return hs_optional425vbEU.hscall();
        } else {
            return hs_optional425vbEU;
        }
    };
    hs_sat26DANx.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadZLZR);
    };
    hs_sat26DANy.data = [0];
    hs_sat26DANz.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrec.hscall($hs.modules.GHCziRead.hs_zdfReadZLZR);
    };
    hs_sat26DANA.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readPrec.hscall($hs.modules.GHCziRead.hs_zdfReadZLZR);
    };
    this.hs_zdfReadZLZR.data = [hs_zdcreadsPrec1125vbF5, hs_zdcreadList1125vbF3, hs_optional425vbEU, hs_zdcreadListPrec1125vbF1];
    hs_zdcreadListPrec1125vbF1.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DANx);
    };
    hs_zdcreadList1125vbF3.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DANz, hs_sat26DANy);
    };
    hs_zdcreadsPrec1125vbF5.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DANA);
    };
    hs_sat26DANF.evaluateOnce = function () {
        var hs_sat26DAND = new $hs.Func(1);
        hs_sat26DAND.evaluate = function (hs_ds26DAbs) {
            var hs_wild26DANB = hs_ds26DAbs;
            if (hs_ds26DAbs.notEvaluated) {
                hs_wild26DANB = hs_ds26DAbs.hscall();
            }
            var hs_s26DAbw = hs_wild26DANB.data[0];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_s26DAbw);
        };
        var hs_sat26DANE = new $hs.Thunk();
        hs_sat26DANE.evaluateOnce = function () {
            return $hs.modules.TextziParserCombinatorsziReadP.hs_gather.hscall($hs.modules.TextziReadziLex.hs_lexChar);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadP.hs_zdfMonadReadP, hs_sat26DANE, hs_sat26DAND);
    };
    this.hs_lexLitChar.evaluateOnce = function () {
        return $hs.modules.TextziParserCombinatorsziReadP.hs_readPzutozuS.hscall(hs_sat26DANF);
    };
    hs_sat26DANO.evaluate = function (hs_ds26DAbF) {
        var hs_fail26DAbE = new $hs.Func(1);
        hs_fail26DAbE.evaluate = function (hs_ds126DAbD) {
            var hs_sat26DANG = new $hs.Thunk();
            hs_sat26DANG.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/GHC/Read.lhs:540:19-28\x00");
            };
            return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DANG);
        };
        var hs_wild26DANH = hs_ds26DAbF;
        if (hs_ds26DAbF.notEvaluated) {
            hs_wild26DANH = hs_ds26DAbF.hscall();
        }
        switch (hs_wild26DANH.tag) {
        case 3:
            var hs_ds126DAbI = hs_wild26DANH.data[0];
            var hs_wild126DANI = hs_ds126DAbI;
            if (hs_ds126DAbI.notEvaluated) {
                hs_wild126DANI = hs_ds126DAbI.hscall();
            }
            switch (hs_wild126DANI.tag) {
            case 1:
                return hs_fail26DAbE.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            case 2:
                var hs_ds226DAbM = hs_wild126DANI.data[0];
                var hs_ds326DAbR = hs_wild126DANI.data[1];
                var hs_wild226DANK = hs_ds226DAbM;
                if (hs_ds226DAbM.notEvaluated) {
                    hs_wild226DANK = hs_ds226DAbM.hscall();
                }
                var hs_ds426DAbP = hs_wild226DANK.data[0];
                var hs_ds526DANJ = hs_ds426DAbP;
                if (hs_ds426DAbP.notEvaluated) {
                    hs_ds526DANJ = hs_ds426DAbP.hscall();
                }
                switch (hs_ds526DANJ) {
                case ",":
                    var hs_wild326DANL = hs_ds326DAbR;
                    if (hs_ds326DAbR.notEvaluated) {
                        hs_wild326DANL = hs_ds326DAbR.hscall();
                    }
                    switch (hs_wild326DANL.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziUnit.hs_Z0T);
                    case 2:
                        return hs_fail26DAbE.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                default:
                    return hs_fail26DAbE.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                }
            }
        default:
            return hs_fail26DAbE.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
        }
    };
    hs_readzucomma25s6VT.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DANO);
    };
    hs_readzutup225s6VV.evaluate = function (hs_zddRead26DAbY, hs_zddRead126DAc1) {
        var hs_sat26DANT = new $hs.Func(1);
        hs_sat26DANT.evaluate = function (hs_x26DAc4) {
            var hs_sat26DANS = new $hs.Thunk();
            hs_sat26DANS.evaluateOnce = function () {
                var hs_sat26DANQ = new $hs.Func(1);
                hs_sat26DANQ.evaluate = function (hs_y26DAc5) {
                    var hs_sat26DANP = new $hs.Data(1);
                    hs_sat26DANP.data = [hs_x26DAc4, hs_y26DAc5];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DANP);
                };
                var hs_sat26DANR = new $hs.Thunk();
                hs_sat26DANR.evaluateOnce = function () {
                    return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead126DAc1);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DANR, hs_sat26DANQ);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s6VT, hs_sat26DANS);
        };
        var hs_sat26DANU = new $hs.Thunk();
        hs_sat26DANU.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead26DAbY);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DANU, hs_sat26DANT);
    };
    hs_zdcreadPrec1025vbFV.evaluate = function (hs_zddRead26DAcg, hs_zddRead126DAch, hs_zddRead226DAco) {
        var hs_optional526DAcA = new $hs.Thunk();
        hs_optional526DAcA.evaluateOnce = function () {
            var hs_sat26DANW = new $hs.Thunk();
            hs_sat26DANW.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional526DAcA);
            };
            var hs_sat26DAO4 = new $hs.Thunk();
            hs_sat26DAO4.evaluateOnce = function () {
                var hs_sat26DAO3 = new $hs.Thunk();
                hs_sat26DAO3.evaluateOnce = function () {
                    var hs_sat26DAO1 = new $hs.Func(1);
                    hs_sat26DAO1.evaluate = function (hs_ds26DAck) {
                        var hs_wild26DANV = hs_ds26DAck;
                        if (hs_ds26DAck.notEvaluated) {
                            hs_wild26DANV = hs_ds26DAck.hscall();
                        }
                        var hs_a26DAcr = hs_wild26DANV.data[0];
                        var hs_b26DAcs = hs_wild26DANV.data[1];
                        var hs_sat26DAO0 = new $hs.Thunk();
                        hs_sat26DAO0.evaluateOnce = function () {
                            var hs_sat26DANY = new $hs.Func(1);
                            hs_sat26DANY.evaluate = function (hs_c26DAct) {
                                var hs_sat26DANX = new $hs.Data(1);
                                hs_sat26DANX.data = [hs_a26DAcr, hs_b26DAcs, hs_c26DAct];
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DANX);
                            };
                            var hs_sat26DANZ = new $hs.Thunk();
                            hs_sat26DANZ.evaluateOnce = function () {
                                return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead226DAco);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DANZ, hs_sat26DANY);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s6VT, hs_sat26DAO0);
                    };
                    var hs_sat26DAO2 = new $hs.Thunk();
                    hs_sat26DAO2.evaluateOnce = function () {
                        return hs_readzutup225s6VV.hscall(hs_zddRead26DAcg, hs_zddRead126DAch);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAO2, hs_sat26DAO1);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26DAO3);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DAO4, hs_sat26DANW);
        };
        if (hs_optional526DAcA.notEvaluated) {
            return hs_optional526DAcA.hscall();
        } else {
            return hs_optional526DAcA;
        }
    };
    this.hs_zdfReadZLz2cUz2cUZR.evaluate = function (hs_zddRead26DAcL, hs_zddRead126DAcM, hs_zddRead226DAcN) {
        var hs_sat26DAO5 = new $hs.Thunk();
        hs_sat26DAO5.evaluateOnce = function () {
            return hs_zdcreadListPrec1225vbGn.hscall(hs_zddRead26DAcL, hs_zddRead126DAcM, hs_zddRead226DAcN);
        };
        var hs_sat26DAO6 = new $hs.Thunk();
        hs_sat26DAO6.evaluateOnce = function () {
            return hs_zdcreadPrec1025vbFV.hscall(hs_zddRead26DAcL, hs_zddRead126DAcM, hs_zddRead226DAcN);
        };
        var hs_sat26DAO7 = new $hs.Thunk();
        hs_sat26DAO7.evaluateOnce = function () {
            return hs_zdcreadList1225vbGp.hscall(hs_zddRead26DAcL, hs_zddRead126DAcM, hs_zddRead226DAcN);
        };
        var hs_sat26DAO8 = new $hs.Thunk();
        hs_sat26DAO8.evaluateOnce = function () {
            return hs_zdcreadsPrec1225vbGr.hscall(hs_zddRead26DAcL, hs_zddRead126DAcM, hs_zddRead226DAcN);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DAO8, hs_sat26DAO7, hs_sat26DAO6, hs_sat26DAO5];
        return $res;
    };
    hs_zdcreadListPrec1225vbGn.evaluate = function (hs_zddRead26DAcV, hs_zddRead126DAcW, hs_zddRead226DAcX) {
        var hs_sat26DAOa = new $hs.Thunk();
        hs_sat26DAOa.evaluateOnce = function () {
            var hs_sat26DAO9 = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUZR.hscall(hs_zddRead26DAcV, hs_zddRead126DAcW, hs_zddRead226DAcX);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DAO9);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DAOa);
    };
    hs_zdcreadList1225vbGp.evaluate = function (hs_zddRead26DAd3, hs_zddRead126DAd4, hs_zddRead226DAd5) {
        var hs_sat26DAOc = new $hs.Data(1);
        hs_sat26DAOc.data = [0];
        var hs_sat26DAOd = new $hs.Thunk();
        hs_sat26DAOd.evaluateOnce = function () {
            var hs_sat26DAOb = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUZR.hscall(hs_zddRead26DAd3, hs_zddRead126DAd4, hs_zddRead226DAd5);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26DAOb);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAOd, hs_sat26DAOc);
    };
    hs_zdcreadsPrec1225vbGr.evaluate = function (hs_zddRead26DAdc, hs_zddRead126DAdd, hs_zddRead226DAde) {
        var hs_sat26DAOf = new $hs.Thunk();
        hs_sat26DAOf.evaluateOnce = function () {
            var hs_sat26DAOe = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUZR.hscall(hs_zddRead26DAdc, hs_zddRead126DAdd, hs_zddRead226DAde);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DAOe);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAOf);
    };
    hs_zdcreadPrec1125vbH2.evaluate = function (hs_zddRead26DAdm, hs_zddRead126DAdn) {
        var hs_optional526DAdq = new $hs.Thunk();
        hs_optional526DAdq.evaluateOnce = function () {
            var hs_sat26DAOg = new $hs.Thunk();
            hs_sat26DAOg.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional526DAdq);
            };
            var hs_sat26DAOi = new $hs.Thunk();
            hs_sat26DAOi.evaluateOnce = function () {
                var hs_sat26DAOh = new $hs.Thunk();
                hs_sat26DAOh.evaluateOnce = function () {
                    return hs_readzutup225s6VV.hscall(hs_zddRead26DAdm, hs_zddRead126DAdn);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26DAOh);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DAOi, hs_sat26DAOg);
        };
        if (hs_optional526DAdq.notEvaluated) {
            return hs_optional526DAdq.hscall();
        } else {
            return hs_optional526DAdq;
        }
    };
    this.hs_zdfReadZLz2cUZR.evaluate = function (hs_zddRead26DAdA, hs_zddRead126DAdB) {
        var hs_sat26DAOj = new $hs.Thunk();
        hs_sat26DAOj.evaluateOnce = function () {
            return hs_zdcreadListPrec1325vbHd.hscall(hs_zddRead26DAdA, hs_zddRead126DAdB);
        };
        var hs_sat26DAOk = new $hs.Thunk();
        hs_sat26DAOk.evaluateOnce = function () {
            return hs_zdcreadPrec1125vbH2.hscall(hs_zddRead26DAdA, hs_zddRead126DAdB);
        };
        var hs_sat26DAOl = new $hs.Thunk();
        hs_sat26DAOl.evaluateOnce = function () {
            return hs_zdcreadList1325vbHf.hscall(hs_zddRead26DAdA, hs_zddRead126DAdB);
        };
        var hs_sat26DAOm = new $hs.Thunk();
        hs_sat26DAOm.evaluateOnce = function () {
            return hs_zdcreadsPrec1325vbHh.hscall(hs_zddRead26DAdA, hs_zddRead126DAdB);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DAOm, hs_sat26DAOl, hs_sat26DAOk, hs_sat26DAOj];
        return $res;
    };
    hs_zdcreadListPrec1325vbHd.evaluate = function (hs_zddRead26DAdI, hs_zddRead126DAdJ) {
        var hs_sat26DAOo = new $hs.Thunk();
        hs_sat26DAOo.evaluateOnce = function () {
            var hs_sat26DAOn = $hs.modules.GHCziRead.hs_zdfReadZLz2cUZR.hscall(hs_zddRead26DAdI, hs_zddRead126DAdJ);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DAOn);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DAOo);
    };
    hs_zdcreadList1325vbHf.evaluate = function (hs_zddRead26DAdO, hs_zddRead126DAdP) {
        var hs_sat26DAOq = new $hs.Data(1);
        hs_sat26DAOq.data = [0];
        var hs_sat26DAOr = new $hs.Thunk();
        hs_sat26DAOr.evaluateOnce = function () {
            var hs_sat26DAOp = $hs.modules.GHCziRead.hs_zdfReadZLz2cUZR.hscall(hs_zddRead26DAdO, hs_zddRead126DAdP);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26DAOp);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAOr, hs_sat26DAOq);
    };
    hs_zdcreadsPrec1325vbHh.evaluate = function (hs_zddRead26DAdV, hs_zddRead126DAdW) {
        var hs_sat26DAOt = new $hs.Thunk();
        hs_sat26DAOt.evaluateOnce = function () {
            var hs_sat26DAOs = $hs.modules.GHCziRead.hs_zdfReadZLz2cUZR.hscall(hs_zddRead26DAdV, hs_zddRead126DAdW);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DAOs);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAOt);
    };
    hs_zdcreadPrec1225vbHK.evaluate = function (hs_zddIx26DAev, hs_zddRead26DAe5, hs_zddRead126DAe6) {
        var hs_zddRead226DAe7 = new $hs.Thunk();
        hs_zddRead226DAe7.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_zdfReadZLz2cUZR.hscall(hs_zddRead26DAe5, hs_zddRead126DAe6);
        };
        var hs_zddRead326DAe9 = new $hs.Thunk();
        hs_zddRead326DAe9.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_zdfReadZMZN.hscall(hs_zddRead226DAe7);
        };
        var hs_zddRead426DAeb = new $hs.Thunk();
        hs_zddRead426DAeb.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_zdfReadZLz2cUZR.hscall(hs_zddRead26DAe5, hs_zddRead26DAe5);
        };
        var hs_sat26DAOI = new $hs.Thunk();
        hs_sat26DAOI.evaluateOnce = function () {
            var hs_sat26DAOG = new $hs.Thunk();
            hs_sat26DAOG.evaluateOnce = function () {
                var hs_sat26DAOF = new $hs.Func(1);
                hs_sat26DAOF.evaluate = function (hs_ds26DAej) {
                    var hs_fail26DAei = new $hs.Func(1);
                    hs_fail26DAei.evaluate = function (hs_ds126DAeh) {
                        var hs_sat26DAOu = new $hs.Thunk();
                        hs_sat26DAOu.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/GHC/Read.lhs:432:19-33\x00");
                        };
                        return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAOu);
                    };
                    var hs_wild26DAOv = hs_ds26DAej;
                    if (hs_ds26DAej.notEvaluated) {
                        hs_wild26DAOv = hs_ds26DAej.hscall();
                    }
                    switch (hs_wild26DAOv.tag) {
                    case 4:
                        var hs_ds126DAem = hs_wild26DAOv.data[0];
                        var hs_sat26DAOx = new $hs.Thunk();
                        hs_sat26DAOx.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("array\x00");
                        };
                        var hs_wild126DAOw = $hs.modules.GHCziBase.hs_eqString.hscall(hs_ds126DAem, hs_sat26DAOx);
                        switch (hs_wild126DAOw.tag) {
                        case 1:
                            return hs_fail26DAei.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                        case 2:
                            var hs_sat26DAOC = new $hs.Func(1);
                            hs_sat26DAOC.evaluate = function (hs_theBounds26DAew) {
                                var hs_sat26DAOz = new $hs.Func(1);
                                hs_sat26DAOz.evaluate = function (hs_vals26DAex) {
                                    var hs_sat26DAOy = new $hs.Thunk();
                                    hs_sat26DAOy.evaluateOnce = function () {
                                        return $hs.modules.GHCziArr.hs_array.hscall(hs_zddIx26DAev, hs_theBounds26DAew, hs_vals26DAex);
                                    };
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAOy);
                                };
                                var hs_sat26DAOB = new $hs.Thunk();
                                hs_sat26DAOB.evaluateOnce = function () {
                                    var hs_sat26DAOA = new $hs.Thunk();
                                    hs_sat26DAOA.evaluateOnce = function () {
                                        return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead326DAe9);
                                    };
                                    return $hs.modules.TextziParserCombinatorsziReadPrec.hs_step.hscall(hs_sat26DAOA);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAOB, hs_sat26DAOz);
                            };
                            var hs_sat26DAOE = new $hs.Thunk();
                            hs_sat26DAOE.evaluateOnce = function () {
                                var hs_sat26DAOD = new $hs.Thunk();
                                hs_sat26DAOD.evaluateOnce = function () {
                                    return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead426DAeb);
                                };
                                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_step.hscall(hs_sat26DAOD);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAOE, hs_sat26DAOC);
                        }
                    default:
                        return hs_fail26DAei.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziRead.hs_lexP, hs_sat26DAOF);
            };
            var hs_sat26DAOH = new $hs.Thunk();
            hs_sat26DAOH.evaluateOnce = function () {
                return $hs.modules.TextziParserCombinatorsziReadPrec.hs_prec.hscall($hs.modules.GHCziShow.hs_appPrec);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DAOH, hs_sat26DAOG);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziRead.hs_parens, hs_sat26DAOI);
    };
    this.hs_zdfReadArray.evaluate = function (hs_zddIx26DAeN, hs_zddRead26DAeO, hs_zddRead126DAeP) {
        var hs_sat26DAOJ = new $hs.Thunk();
        hs_sat26DAOJ.evaluateOnce = function () {
            return hs_zdcreadListPrec1425vbIp.hscall(hs_zddIx26DAeN, hs_zddRead26DAeO, hs_zddRead126DAeP);
        };
        var hs_sat26DAOK = new $hs.Thunk();
        hs_sat26DAOK.evaluateOnce = function () {
            return hs_zdcreadPrec1225vbHK.hscall(hs_zddIx26DAeN, hs_zddRead26DAeO, hs_zddRead126DAeP);
        };
        var hs_sat26DAOL = new $hs.Thunk();
        hs_sat26DAOL.evaluateOnce = function () {
            return hs_zdcreadList1425vbIr.hscall(hs_zddIx26DAeN, hs_zddRead26DAeO, hs_zddRead126DAeP);
        };
        var hs_sat26DAOM = new $hs.Thunk();
        hs_sat26DAOM.evaluateOnce = function () {
            return hs_zdcreadsPrec1425vbIt.hscall(hs_zddIx26DAeN, hs_zddRead26DAeO, hs_zddRead126DAeP);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DAOM, hs_sat26DAOL, hs_sat26DAOK, hs_sat26DAOJ];
        return $res;
    };
    hs_zdcreadListPrec1425vbIp.evaluate = function (hs_zddIx26DAeX, hs_zddRead26DAeY, hs_zddRead126DAeZ) {
        var hs_sat26DAOO = new $hs.Thunk();
        hs_sat26DAOO.evaluateOnce = function () {
            var hs_sat26DAON = $hs.modules.GHCziRead.hs_zdfReadArray.hscall(hs_zddIx26DAeX, hs_zddRead26DAeY, hs_zddRead126DAeZ);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DAON);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DAOO);
    };
    hs_zdcreadList1425vbIr.evaluate = function (hs_zddIx26DAf5, hs_zddRead26DAf6, hs_zddRead126DAf7) {
        var hs_sat26DAOQ = new $hs.Data(1);
        hs_sat26DAOQ.data = [0];
        var hs_sat26DAOR = new $hs.Thunk();
        hs_sat26DAOR.evaluateOnce = function () {
            var hs_sat26DAOP = $hs.modules.GHCziRead.hs_zdfReadArray.hscall(hs_zddIx26DAf5, hs_zddRead26DAf6, hs_zddRead126DAf7);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26DAOP);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAOR, hs_sat26DAOQ);
    };
    hs_zdcreadsPrec1425vbIt.evaluate = function (hs_zddIx26DAfe, hs_zddRead26DAff, hs_zddRead126DAfg) {
        var hs_sat26DAOT = new $hs.Thunk();
        hs_sat26DAOT.evaluateOnce = function () {
            var hs_sat26DAOS = $hs.modules.GHCziRead.hs_zdfReadArray.hscall(hs_zddIx26DAfe, hs_zddRead26DAff, hs_zddRead126DAfg);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DAOS);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAOT);
    };
    hs_readzutup425s6VX.evaluate = function (hs_zddRead26DAfn, hs_zddRead126DAfo, hs_zddRead226DAfv, hs_zddRead326DAfw) {
        var hs_sat26DAP0 = new $hs.Func(1);
        hs_sat26DAP0.evaluate = function (hs_ds26DAfr) {
            var hs_wild26DAOV = hs_ds26DAfr;
            if (hs_ds26DAfr.notEvaluated) {
                hs_wild26DAOV = hs_ds26DAfr.hscall();
            }
            var hs_a26DAfD = hs_wild26DAOV.data[0];
            var hs_b26DAfE = hs_wild26DAOV.data[1];
            var hs_sat26DAOZ = new $hs.Thunk();
            hs_sat26DAOZ.evaluateOnce = function () {
                var hs_sat26DAOX = new $hs.Func(1);
                hs_sat26DAOX.evaluate = function (hs_ds126DAfz) {
                    var hs_wild126DAOU = hs_ds126DAfz;
                    if (hs_ds126DAfz.notEvaluated) {
                        hs_wild126DAOU = hs_ds126DAfz.hscall();
                    }
                    var hs_c26DAfF = hs_wild126DAOU.data[0];
                    var hs_d26DAfG = hs_wild126DAOU.data[1];
                    var hs_sat26DAOW = new $hs.Data(1);
                    hs_sat26DAOW.data = [hs_a26DAfD, hs_b26DAfE, hs_c26DAfF, hs_d26DAfG];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAOW);
                };
                var hs_sat26DAOY = new $hs.Thunk();
                hs_sat26DAOY.evaluateOnce = function () {
                    return hs_readzutup225s6VV.hscall(hs_zddRead226DAfv, hs_zddRead326DAfw);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAOY, hs_sat26DAOX);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s6VT, hs_sat26DAOZ);
        };
        var hs_sat26DAP1 = new $hs.Thunk();
        hs_sat26DAP1.evaluateOnce = function () {
            return hs_readzutup225s6VV.hscall(hs_zddRead26DAfn, hs_zddRead126DAfo);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAP1, hs_sat26DAP0);
    };
    hs_zdcreadPrec1325vbJw.evaluate = function (hs_zddRead26DAfV, hs_zddRead126DAfW, hs_zddRead226DAfX, hs_zddRead326DAfY, hs_zddRead426DAg7, hs_zddRead526DAg8, hs_zddRead626DAgf) {
        var hs_optional526DAgx = new $hs.Thunk();
        hs_optional526DAgx.evaluateOnce = function () {
            var hs_sat26DAP4 = new $hs.Thunk();
            hs_sat26DAP4.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional526DAgx);
            };
            var hs_sat26DAPf = new $hs.Thunk();
            hs_sat26DAPf.evaluateOnce = function () {
                var hs_sat26DAPe = new $hs.Thunk();
                hs_sat26DAPe.evaluateOnce = function () {
                    var hs_sat26DAPc = new $hs.Func(1);
                    hs_sat26DAPc.evaluate = function (hs_ds26DAg1) {
                        var hs_wild26DAP3 = hs_ds26DAg1;
                        if (hs_ds26DAg1.notEvaluated) {
                            hs_wild26DAP3 = hs_ds26DAg1.hscall();
                        }
                        var hs_a26DAgi = hs_wild26DAP3.data[0];
                        var hs_b26DAgj = hs_wild26DAP3.data[1];
                        var hs_c26DAgk = hs_wild26DAP3.data[2];
                        var hs_d26DAgl = hs_wild26DAP3.data[3];
                        var hs_sat26DAPb = new $hs.Thunk();
                        hs_sat26DAPb.evaluateOnce = function () {
                            var hs_sat26DAP9 = new $hs.Func(1);
                            hs_sat26DAP9.evaluate = function (hs_ds126DAgb) {
                                var hs_wild126DAP2 = hs_ds126DAgb;
                                if (hs_ds126DAgb.notEvaluated) {
                                    hs_wild126DAP2 = hs_ds126DAgb.hscall();
                                }
                                var hs_e26DAgm = hs_wild126DAP2.data[0];
                                var hs_f26DAgn = hs_wild126DAP2.data[1];
                                var hs_sat26DAP8 = new $hs.Thunk();
                                hs_sat26DAP8.evaluateOnce = function () {
                                    var hs_sat26DAP6 = new $hs.Func(1);
                                    hs_sat26DAP6.evaluate = function (hs_g26DAgo) {
                                        var hs_sat26DAP5 = new $hs.Data(1);
                                        hs_sat26DAP5.data = [hs_a26DAgi, hs_b26DAgj, hs_c26DAgk, hs_d26DAgl, hs_e26DAgm, hs_f26DAgn, hs_g26DAgo];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAP5);
                                    };
                                    var hs_sat26DAP7 = new $hs.Thunk();
                                    hs_sat26DAP7.evaluateOnce = function () {
                                        return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead626DAgf);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAP7, hs_sat26DAP6);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s6VT, hs_sat26DAP8);
                            };
                            var hs_sat26DAPa = new $hs.Thunk();
                            hs_sat26DAPa.evaluateOnce = function () {
                                return hs_readzutup225s6VV.hscall(hs_zddRead426DAg7, hs_zddRead526DAg8);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAPa, hs_sat26DAP9);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s6VT, hs_sat26DAPb);
                    };
                    var hs_sat26DAPd = new $hs.Thunk();
                    hs_sat26DAPd.evaluateOnce = function () {
                        return hs_readzutup425s6VX.hscall(hs_zddRead26DAfV, hs_zddRead126DAfW, hs_zddRead226DAfX, hs_zddRead326DAfY);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAPd, hs_sat26DAPc);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26DAPe);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DAPf, hs_sat26DAP4);
        };
        if (hs_optional526DAgx.notEvaluated) {
            return hs_optional526DAgx.hscall();
        } else {
            return hs_optional526DAgx;
        }
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DAgM, hs_zddRead126DAgN, hs_zddRead226DAgO, hs_zddRead326DAgP, hs_zddRead426DAgQ, hs_zddRead526DAgR, hs_zddRead626DAgS) {
        var hs_sat26DAPg = new $hs.Thunk();
        hs_sat26DAPg.evaluateOnce = function () {
            return hs_zdcreadListPrec1525vbKk.hscall(hs_zddRead26DAgM, hs_zddRead126DAgN, hs_zddRead226DAgO, hs_zddRead326DAgP, hs_zddRead426DAgQ, hs_zddRead526DAgR, hs_zddRead626DAgS);
        };
        var hs_sat26DAPh = new $hs.Thunk();
        hs_sat26DAPh.evaluateOnce = function () {
            return hs_zdcreadPrec1325vbJw.hscall(hs_zddRead26DAgM, hs_zddRead126DAgN, hs_zddRead226DAgO, hs_zddRead326DAgP, hs_zddRead426DAgQ, hs_zddRead526DAgR, hs_zddRead626DAgS);
        };
        var hs_sat26DAPi = new $hs.Thunk();
        hs_sat26DAPi.evaluateOnce = function () {
            return hs_zdcreadList1525vbKm.hscall(hs_zddRead26DAgM, hs_zddRead126DAgN, hs_zddRead226DAgO, hs_zddRead326DAgP, hs_zddRead426DAgQ, hs_zddRead526DAgR, hs_zddRead626DAgS);
        };
        var hs_sat26DAPj = new $hs.Thunk();
        hs_sat26DAPj.evaluateOnce = function () {
            return hs_zdcreadsPrec1525vbKo.hscall(hs_zddRead26DAgM, hs_zddRead126DAgN, hs_zddRead226DAgO, hs_zddRead326DAgP, hs_zddRead426DAgQ, hs_zddRead526DAgR, hs_zddRead626DAgS);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DAPj, hs_sat26DAPi, hs_sat26DAPh, hs_sat26DAPg];
        return $res;
    };
    hs_zdcreadListPrec1525vbKk.evaluate = function (hs_zddRead26DAh4, hs_zddRead126DAh5, hs_zddRead226DAh6, hs_zddRead326DAh7, hs_zddRead426DAh8, hs_zddRead526DAh9, hs_zddRead626DAha) {
        var hs_sat26DAPl = new $hs.Thunk();
        hs_sat26DAPl.evaluateOnce = function () {
            var hs_sat26DAPk = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAh4, hs_zddRead126DAh5, hs_zddRead226DAh6, hs_zddRead326DAh7, hs_zddRead426DAh8, hs_zddRead526DAh9, hs_zddRead626DAha);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DAPk);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DAPl);
    };
    hs_zdcreadList1525vbKm.evaluate = function (hs_zddRead26DAhk, hs_zddRead126DAhl, hs_zddRead226DAhm, hs_zddRead326DAhn, hs_zddRead426DAho, hs_zddRead526DAhp, hs_zddRead626DAhq) {
        var hs_sat26DAPn = new $hs.Data(1);
        hs_sat26DAPn.data = [0];
        var hs_sat26DAPo = new $hs.Thunk();
        hs_sat26DAPo.evaluateOnce = function () {
            var hs_sat26DAPm = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAhk, hs_zddRead126DAhl, hs_zddRead226DAhm, hs_zddRead326DAhn, hs_zddRead426DAho, hs_zddRead526DAhp, hs_zddRead626DAhq);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26DAPm);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAPo, hs_sat26DAPn);
    };
    hs_zdcreadsPrec1525vbKo.evaluate = function (hs_zddRead26DAhB, hs_zddRead126DAhC, hs_zddRead226DAhD, hs_zddRead326DAhE, hs_zddRead426DAhF, hs_zddRead526DAhG, hs_zddRead626DAhH) {
        var hs_sat26DAPq = new $hs.Thunk();
        hs_sat26DAPq.evaluateOnce = function () {
            var hs_sat26DAPp = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAhB, hs_zddRead126DAhC, hs_zddRead226DAhD, hs_zddRead326DAhE, hs_zddRead426DAhF, hs_zddRead526DAhG, hs_zddRead626DAhH);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DAPp);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAPq);
    };
    hs_zdcreadPrec1425vbLv.evaluate = function (hs_zddRead26DAhT, hs_zddRead126DAhU, hs_zddRead226DAhV, hs_zddRead326DAhW, hs_zddRead426DAi5, hs_zddRead526DAi6) {
        var hs_optional526DAip = new $hs.Thunk();
        hs_optional526DAip.evaluateOnce = function () {
            var hs_sat26DAPt = new $hs.Thunk();
            hs_sat26DAPt.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional526DAip);
            };
            var hs_sat26DAPB = new $hs.Thunk();
            hs_sat26DAPB.evaluateOnce = function () {
                var hs_sat26DAPA = new $hs.Thunk();
                hs_sat26DAPA.evaluateOnce = function () {
                    var hs_sat26DAPy = new $hs.Func(1);
                    hs_sat26DAPy.evaluate = function (hs_ds26DAhZ) {
                        var hs_wild26DAPs = hs_ds26DAhZ;
                        if (hs_ds26DAhZ.notEvaluated) {
                            hs_wild26DAPs = hs_ds26DAhZ.hscall();
                        }
                        var hs_a26DAid = hs_wild26DAPs.data[0];
                        var hs_b26DAie = hs_wild26DAPs.data[1];
                        var hs_c26DAif = hs_wild26DAPs.data[2];
                        var hs_d26DAig = hs_wild26DAPs.data[3];
                        var hs_sat26DAPx = new $hs.Thunk();
                        hs_sat26DAPx.evaluateOnce = function () {
                            var hs_sat26DAPv = new $hs.Func(1);
                            hs_sat26DAPv.evaluate = function (hs_ds126DAi9) {
                                var hs_wild126DAPr = hs_ds126DAi9;
                                if (hs_ds126DAi9.notEvaluated) {
                                    hs_wild126DAPr = hs_ds126DAi9.hscall();
                                }
                                var hs_e26DAih = hs_wild126DAPr.data[0];
                                var hs_f26DAii = hs_wild126DAPr.data[1];
                                var hs_sat26DAPu = new $hs.Data(1);
                                hs_sat26DAPu.data = [hs_a26DAid, hs_b26DAie, hs_c26DAif, hs_d26DAig, hs_e26DAih, hs_f26DAii];
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAPu);
                            };
                            var hs_sat26DAPw = new $hs.Thunk();
                            hs_sat26DAPw.evaluateOnce = function () {
                                return hs_readzutup225s6VV.hscall(hs_zddRead426DAi5, hs_zddRead526DAi6);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAPw, hs_sat26DAPv);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s6VT, hs_sat26DAPx);
                    };
                    var hs_sat26DAPz = new $hs.Thunk();
                    hs_sat26DAPz.evaluateOnce = function () {
                        return hs_readzutup425s6VX.hscall(hs_zddRead26DAhT, hs_zddRead126DAhU, hs_zddRead226DAhV, hs_zddRead326DAhW);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAPz, hs_sat26DAPy);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26DAPA);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DAPB, hs_sat26DAPt);
        };
        if (hs_optional526DAip.notEvaluated) {
            return hs_optional526DAip.hscall();
        } else {
            return hs_optional526DAip;
        }
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DAiD, hs_zddRead126DAiE, hs_zddRead226DAiF, hs_zddRead326DAiG, hs_zddRead426DAiH, hs_zddRead526DAiI) {
        var hs_sat26DAPC = new $hs.Thunk();
        hs_sat26DAPC.evaluateOnce = function () {
            return hs_zdcreadListPrec1625vbMc.hscall(hs_zddRead26DAiD, hs_zddRead126DAiE, hs_zddRead226DAiF, hs_zddRead326DAiG, hs_zddRead426DAiH, hs_zddRead526DAiI);
        };
        var hs_sat26DAPD = new $hs.Thunk();
        hs_sat26DAPD.evaluateOnce = function () {
            return hs_zdcreadPrec1425vbLv.hscall(hs_zddRead26DAiD, hs_zddRead126DAiE, hs_zddRead226DAiF, hs_zddRead326DAiG, hs_zddRead426DAiH, hs_zddRead526DAiI);
        };
        var hs_sat26DAPE = new $hs.Thunk();
        hs_sat26DAPE.evaluateOnce = function () {
            return hs_zdcreadList1625vbMe.hscall(hs_zddRead26DAiD, hs_zddRead126DAiE, hs_zddRead226DAiF, hs_zddRead326DAiG, hs_zddRead426DAiH, hs_zddRead526DAiI);
        };
        var hs_sat26DAPF = new $hs.Thunk();
        hs_sat26DAPF.evaluateOnce = function () {
            return hs_zdcreadsPrec1625vbMg.hscall(hs_zddRead26DAiD, hs_zddRead126DAiE, hs_zddRead226DAiF, hs_zddRead326DAiG, hs_zddRead426DAiH, hs_zddRead526DAiI);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DAPF, hs_sat26DAPE, hs_sat26DAPD, hs_sat26DAPC];
        return $res;
    };
    hs_zdcreadListPrec1625vbMc.evaluate = function (hs_zddRead26DAiT, hs_zddRead126DAiU, hs_zddRead226DAiV, hs_zddRead326DAiW, hs_zddRead426DAiX, hs_zddRead526DAiY) {
        var hs_sat26DAPH = new $hs.Thunk();
        hs_sat26DAPH.evaluateOnce = function () {
            var hs_sat26DAPG = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAiT, hs_zddRead126DAiU, hs_zddRead226DAiV, hs_zddRead326DAiW, hs_zddRead426DAiX, hs_zddRead526DAiY);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DAPG);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DAPH);
    };
    hs_zdcreadList1625vbMe.evaluate = function (hs_zddRead26DAj7, hs_zddRead126DAj8, hs_zddRead226DAj9, hs_zddRead326DAja, hs_zddRead426DAjb, hs_zddRead526DAjc) {
        var hs_sat26DAPJ = new $hs.Data(1);
        hs_sat26DAPJ.data = [0];
        var hs_sat26DAPK = new $hs.Thunk();
        hs_sat26DAPK.evaluateOnce = function () {
            var hs_sat26DAPI = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAj7, hs_zddRead126DAj8, hs_zddRead226DAj9, hs_zddRead326DAja, hs_zddRead426DAjb, hs_zddRead526DAjc);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26DAPI);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAPK, hs_sat26DAPJ);
    };
    hs_zdcreadsPrec1625vbMg.evaluate = function (hs_zddRead26DAjm, hs_zddRead126DAjn, hs_zddRead226DAjo, hs_zddRead326DAjp, hs_zddRead426DAjq, hs_zddRead526DAjr) {
        var hs_sat26DAPM = new $hs.Thunk();
        hs_sat26DAPM.evaluateOnce = function () {
            var hs_sat26DAPL = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAjm, hs_zddRead126DAjn, hs_zddRead226DAjo, hs_zddRead326DAjp, hs_zddRead426DAjq, hs_zddRead526DAjr);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DAPL);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAPM);
    };
    hs_zdcreadPrec1525vbNf.evaluate = function (hs_zddRead26DAjC, hs_zddRead126DAjD, hs_zddRead226DAjE, hs_zddRead326DAjF, hs_zddRead426DAjO) {
        var hs_optional526DAk2 = new $hs.Thunk();
        hs_optional526DAk2.evaluateOnce = function () {
            var hs_sat26DAPO = new $hs.Thunk();
            hs_sat26DAPO.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional526DAk2);
            };
            var hs_sat26DAPW = new $hs.Thunk();
            hs_sat26DAPW.evaluateOnce = function () {
                var hs_sat26DAPV = new $hs.Thunk();
                hs_sat26DAPV.evaluateOnce = function () {
                    var hs_sat26DAPT = new $hs.Func(1);
                    hs_sat26DAPT.evaluate = function (hs_ds26DAjI) {
                        var hs_wild26DAPN = hs_ds26DAjI;
                        if (hs_ds26DAjI.notEvaluated) {
                            hs_wild26DAPN = hs_ds26DAjI.hscall();
                        }
                        var hs_a26DAjR = hs_wild26DAPN.data[0];
                        var hs_b26DAjS = hs_wild26DAPN.data[1];
                        var hs_c26DAjT = hs_wild26DAPN.data[2];
                        var hs_d26DAjU = hs_wild26DAPN.data[3];
                        var hs_sat26DAPS = new $hs.Thunk();
                        hs_sat26DAPS.evaluateOnce = function () {
                            var hs_sat26DAPQ = new $hs.Func(1);
                            hs_sat26DAPQ.evaluate = function (hs_e26DAjV) {
                                var hs_sat26DAPP = new $hs.Data(1);
                                hs_sat26DAPP.data = [hs_a26DAjR, hs_b26DAjS, hs_c26DAjT, hs_d26DAjU, hs_e26DAjV];
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAPP);
                            };
                            var hs_sat26DAPR = new $hs.Thunk();
                            hs_sat26DAPR.evaluateOnce = function () {
                                return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead426DAjO);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAPR, hs_sat26DAPQ);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s6VT, hs_sat26DAPS);
                    };
                    var hs_sat26DAPU = new $hs.Thunk();
                    hs_sat26DAPU.evaluateOnce = function () {
                        return hs_readzutup425s6VX.hscall(hs_zddRead26DAjC, hs_zddRead126DAjD, hs_zddRead226DAjE, hs_zddRead326DAjF);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAPU, hs_sat26DAPT);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26DAPV);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DAPW, hs_sat26DAPO);
        };
        if (hs_optional526DAk2.notEvaluated) {
            return hs_optional526DAk2.hscall();
        } else {
            return hs_optional526DAk2;
        }
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DAkf, hs_zddRead126DAkg, hs_zddRead226DAkh, hs_zddRead326DAki, hs_zddRead426DAkj) {
        var hs_sat26DAPX = new $hs.Thunk();
        hs_sat26DAPX.evaluateOnce = function () {
            return hs_zdcreadListPrec1725vbNP.hscall(hs_zddRead26DAkf, hs_zddRead126DAkg, hs_zddRead226DAkh, hs_zddRead326DAki, hs_zddRead426DAkj);
        };
        var hs_sat26DAPY = new $hs.Thunk();
        hs_sat26DAPY.evaluateOnce = function () {
            return hs_zdcreadPrec1525vbNf.hscall(hs_zddRead26DAkf, hs_zddRead126DAkg, hs_zddRead226DAkh, hs_zddRead326DAki, hs_zddRead426DAkj);
        };
        var hs_sat26DAPZ = new $hs.Thunk();
        hs_sat26DAPZ.evaluateOnce = function () {
            return hs_zdcreadList1725vbNR.hscall(hs_zddRead26DAkf, hs_zddRead126DAkg, hs_zddRead226DAkh, hs_zddRead326DAki, hs_zddRead426DAkj);
        };
        var hs_sat26DAQ0 = new $hs.Thunk();
        hs_sat26DAQ0.evaluateOnce = function () {
            return hs_zdcreadsPrec1725vbNT.hscall(hs_zddRead26DAkf, hs_zddRead126DAkg, hs_zddRead226DAkh, hs_zddRead326DAki, hs_zddRead426DAkj);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DAQ0, hs_sat26DAPZ, hs_sat26DAPY, hs_sat26DAPX];
        return $res;
    };
    hs_zdcreadListPrec1725vbNP.evaluate = function (hs_zddRead26DAkt, hs_zddRead126DAku, hs_zddRead226DAkv, hs_zddRead326DAkw, hs_zddRead426DAkx) {
        var hs_sat26DAQ2 = new $hs.Thunk();
        hs_sat26DAQ2.evaluateOnce = function () {
            var hs_sat26DAQ1 = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAkt, hs_zddRead126DAku, hs_zddRead226DAkv, hs_zddRead326DAkw, hs_zddRead426DAkx);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DAQ1);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DAQ2);
    };
    hs_zdcreadList1725vbNR.evaluate = function (hs_zddRead26DAkF, hs_zddRead126DAkG, hs_zddRead226DAkH, hs_zddRead326DAkI, hs_zddRead426DAkJ) {
        var hs_sat26DAQ4 = new $hs.Data(1);
        hs_sat26DAQ4.data = [0];
        var hs_sat26DAQ5 = new $hs.Thunk();
        hs_sat26DAQ5.evaluateOnce = function () {
            var hs_sat26DAQ3 = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAkF, hs_zddRead126DAkG, hs_zddRead226DAkH, hs_zddRead326DAkI, hs_zddRead426DAkJ);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26DAQ3);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAQ5, hs_sat26DAQ4);
    };
    hs_zdcreadsPrec1725vbNT.evaluate = function (hs_zddRead26DAkS, hs_zddRead126DAkT, hs_zddRead226DAkU, hs_zddRead326DAkV, hs_zddRead426DAkW) {
        var hs_sat26DAQ7 = new $hs.Thunk();
        hs_sat26DAQ7.evaluateOnce = function () {
            var hs_sat26DAQ6 = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAkS, hs_zddRead126DAkT, hs_zddRead226DAkU, hs_zddRead326DAkV, hs_zddRead426DAkW);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DAQ6);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAQ7);
    };
    hs_zdcreadPrec1625vbOK.evaluate = function (hs_zddRead26DAl6, hs_zddRead126DAl7, hs_zddRead226DAl8, hs_zddRead326DAl9) {
        var hs_optional526DAlc = new $hs.Thunk();
        hs_optional526DAlc.evaluateOnce = function () {
            var hs_sat26DAQ8 = new $hs.Thunk();
            hs_sat26DAQ8.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional526DAlc);
            };
            var hs_sat26DAQa = new $hs.Thunk();
            hs_sat26DAQa.evaluateOnce = function () {
                var hs_sat26DAQ9 = new $hs.Thunk();
                hs_sat26DAQ9.evaluateOnce = function () {
                    return hs_readzutup425s6VX.hscall(hs_zddRead26DAl6, hs_zddRead126DAl7, hs_zddRead226DAl8, hs_zddRead326DAl9);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26DAQ9);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DAQa, hs_sat26DAQ8);
        };
        if (hs_optional526DAlc.notEvaluated) {
            return hs_optional526DAlc.hscall();
        } else {
            return hs_optional526DAlc;
        }
    };
    this.hs_zdfReadZLz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DAlo, hs_zddRead126DAlp, hs_zddRead226DAlq, hs_zddRead326DAlr) {
        var hs_sat26DAQb = new $hs.Thunk();
        hs_sat26DAQb.evaluateOnce = function () {
            return hs_zdcreadListPrec1825vbOZ.hscall(hs_zddRead26DAlo, hs_zddRead126DAlp, hs_zddRead226DAlq, hs_zddRead326DAlr);
        };
        var hs_sat26DAQc = new $hs.Thunk();
        hs_sat26DAQc.evaluateOnce = function () {
            return hs_zdcreadPrec1625vbOK.hscall(hs_zddRead26DAlo, hs_zddRead126DAlp, hs_zddRead226DAlq, hs_zddRead326DAlr);
        };
        var hs_sat26DAQd = new $hs.Thunk();
        hs_sat26DAQd.evaluateOnce = function () {
            return hs_zdcreadList1825vbP1.hscall(hs_zddRead26DAlo, hs_zddRead126DAlp, hs_zddRead226DAlq, hs_zddRead326DAlr);
        };
        var hs_sat26DAQe = new $hs.Thunk();
        hs_sat26DAQe.evaluateOnce = function () {
            return hs_zdcreadsPrec1825vbP3.hscall(hs_zddRead26DAlo, hs_zddRead126DAlp, hs_zddRead226DAlq, hs_zddRead326DAlr);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DAQe, hs_sat26DAQd, hs_sat26DAQc, hs_sat26DAQb];
        return $res;
    };
    hs_zdcreadListPrec1825vbOZ.evaluate = function (hs_zddRead26DAlA, hs_zddRead126DAlB, hs_zddRead226DAlC, hs_zddRead326DAlD) {
        var hs_sat26DAQg = new $hs.Thunk();
        hs_sat26DAQg.evaluateOnce = function () {
            var hs_sat26DAQf = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUZR.hscall(hs_zddRead26DAlA, hs_zddRead126DAlB, hs_zddRead226DAlC, hs_zddRead326DAlD);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DAQf);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DAQg);
    };
    hs_zdcreadList1825vbP1.evaluate = function (hs_zddRead26DAlK, hs_zddRead126DAlL, hs_zddRead226DAlM, hs_zddRead326DAlN) {
        var hs_sat26DAQi = new $hs.Data(1);
        hs_sat26DAQi.data = [0];
        var hs_sat26DAQj = new $hs.Thunk();
        hs_sat26DAQj.evaluateOnce = function () {
            var hs_sat26DAQh = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUZR.hscall(hs_zddRead26DAlK, hs_zddRead126DAlL, hs_zddRead226DAlM, hs_zddRead326DAlN);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26DAQh);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAQj, hs_sat26DAQi);
    };
    hs_zdcreadsPrec1825vbP3.evaluate = function (hs_zddRead26DAlV, hs_zddRead126DAlW, hs_zddRead226DAlX, hs_zddRead326DAlY) {
        var hs_sat26DAQl = new $hs.Thunk();
        hs_sat26DAQl.evaluateOnce = function () {
            var hs_sat26DAQk = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUZR.hscall(hs_zddRead26DAlV, hs_zddRead126DAlW, hs_zddRead226DAlX, hs_zddRead326DAlY);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DAQk);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAQl);
    };
    hs_readzutup825s6VZ.evaluate = function (hs_zddRead26DAm9, hs_zddRead126DAma, hs_zddRead226DAmb, hs_zddRead326DAmc, hs_zddRead426DAml, hs_zddRead526DAmm, hs_zddRead626DAmn, hs_zddRead726DAmo) {
        var hs_sat26DAQs = new $hs.Func(1);
        hs_sat26DAQs.evaluate = function (hs_ds26DAmf) {
            var hs_wild26DAQn = hs_ds26DAmf;
            if (hs_ds26DAmf.notEvaluated) {
                hs_wild26DAQn = hs_ds26DAmf.hscall();
            }
            var hs_a26DAmx = hs_wild26DAQn.data[0];
            var hs_b26DAmy = hs_wild26DAQn.data[1];
            var hs_c26DAmz = hs_wild26DAQn.data[2];
            var hs_d26DAmA = hs_wild26DAQn.data[3];
            var hs_sat26DAQr = new $hs.Thunk();
            hs_sat26DAQr.evaluateOnce = function () {
                var hs_sat26DAQp = new $hs.Func(1);
                hs_sat26DAQp.evaluate = function (hs_ds126DAmr) {
                    var hs_wild126DAQm = hs_ds126DAmr;
                    if (hs_ds126DAmr.notEvaluated) {
                        hs_wild126DAQm = hs_ds126DAmr.hscall();
                    }
                    var hs_e26DAmB = hs_wild126DAQm.data[0];
                    var hs_f26DAmC = hs_wild126DAQm.data[1];
                    var hs_g26DAmD = hs_wild126DAQm.data[2];
                    var hs_h26DAmE = hs_wild126DAQm.data[3];
                    var hs_sat26DAQo = new $hs.Data(1);
                    hs_sat26DAQo.data = [hs_a26DAmx, hs_b26DAmy, hs_c26DAmz, hs_d26DAmA, hs_e26DAmB, hs_f26DAmC, hs_g26DAmD, hs_h26DAmE];
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAQo);
                };
                var hs_sat26DAQq = new $hs.Thunk();
                hs_sat26DAQq.evaluateOnce = function () {
                    return hs_readzutup425s6VX.hscall(hs_zddRead426DAml, hs_zddRead526DAmm, hs_zddRead626DAmn, hs_zddRead726DAmo);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAQq, hs_sat26DAQp);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s6VT, hs_sat26DAQr);
        };
        var hs_sat26DAQt = new $hs.Thunk();
        hs_sat26DAQt.evaluateOnce = function () {
            return hs_readzutup425s6VX.hscall(hs_zddRead26DAm9, hs_zddRead126DAma, hs_zddRead226DAmb, hs_zddRead326DAmc);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAQt, hs_sat26DAQs);
    };
    hs_zdcreadPrec1725vbQu.evaluate = function (hs_zddRead26DAn1, hs_zddRead126DAn2, hs_zddRead226DAn3, hs_zddRead326DAn4, hs_zddRead426DAn5, hs_zddRead526DAn6, hs_zddRead626DAn7, hs_zddRead726DAn8, hs_zddRead826DAnl, hs_zddRead926DAnm, hs_zddRead1026DAnn, hs_zddRead1126DAno, hs_zddRead1226DAnx, hs_zddRead1326DAny, hs_zddRead1426DAnF) {
        var hs_optional526DAo7 = new $hs.Thunk();
        hs_optional526DAo7.evaluateOnce = function () {
            var hs_sat26DAQx = new $hs.Thunk();
            hs_sat26DAQx.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional526DAo7);
            };
            var hs_sat26DAQL = new $hs.Thunk();
            hs_sat26DAQL.evaluateOnce = function () {
                var hs_sat26DAQK = new $hs.Thunk();
                hs_sat26DAQK.evaluateOnce = function () {
                    var hs_sat26DAQI = new $hs.Func(1);
                    hs_sat26DAQI.evaluate = function (hs_ds26DAnb) {
                        var hs_wild26DAQw = hs_ds26DAnb;
                        if (hs_ds26DAnb.notEvaluated) {
                            hs_wild26DAQw = hs_ds26DAnb.hscall();
                        }
                        var hs_a26DAnI = hs_wild26DAQw.data[0];
                        var hs_b26DAnJ = hs_wild26DAQw.data[1];
                        var hs_c26DAnK = hs_wild26DAQw.data[2];
                        var hs_d26DAnL = hs_wild26DAQw.data[3];
                        var hs_e26DAnM = hs_wild26DAQw.data[4];
                        var hs_f26DAnN = hs_wild26DAQw.data[5];
                        var hs_g26DAnO = hs_wild26DAQw.data[6];
                        var hs_h26DAnP = hs_wild26DAQw.data[7];
                        var hs_sat26DAQH = new $hs.Thunk();
                        hs_sat26DAQH.evaluateOnce = function () {
                            var hs_sat26DAQF = new $hs.Func(1);
                            hs_sat26DAQF.evaluate = function (hs_ds126DAnr) {
                                var hs_wild126DAQv = hs_ds126DAnr;
                                if (hs_ds126DAnr.notEvaluated) {
                                    hs_wild126DAQv = hs_ds126DAnr.hscall();
                                }
                                var hs_i26DAnQ = hs_wild126DAQv.data[0];
                                var hs_j26DAnR = hs_wild126DAQv.data[1];
                                var hs_k26DAnS = hs_wild126DAQv.data[2];
                                var hs_l26DAnT = hs_wild126DAQv.data[3];
                                var hs_sat26DAQE = new $hs.Thunk();
                                hs_sat26DAQE.evaluateOnce = function () {
                                    var hs_sat26DAQC = new $hs.Func(1);
                                    hs_sat26DAQC.evaluate = function (hs_ds226DAnB) {
                                        var hs_wild226DAQu = hs_ds226DAnB;
                                        if (hs_ds226DAnB.notEvaluated) {
                                            hs_wild226DAQu = hs_ds226DAnB.hscall();
                                        }
                                        var hs_m26DAnU = hs_wild226DAQu.data[0];
                                        var hs_n26DAnV = hs_wild226DAQu.data[1];
                                        var hs_sat26DAQB = new $hs.Thunk();
                                        hs_sat26DAQB.evaluateOnce = function () {
                                            var hs_sat26DAQz = new $hs.Func(1);
                                            hs_sat26DAQz.evaluate = function (hs_o26DAnW) {
                                                var hs_sat26DAQy = new $hs.Data(1);
                                                hs_sat26DAQy.data = [hs_a26DAnI, hs_b26DAnJ, hs_c26DAnK, hs_d26DAnL, hs_e26DAnM, hs_f26DAnN, hs_g26DAnO, hs_h26DAnP, hs_i26DAnQ, hs_j26DAnR, hs_k26DAnS, hs_l26DAnT, hs_m26DAnU, hs_n26DAnV, hs_o26DAnW];
                                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAQy);
                                            };
                                            var hs_sat26DAQA = new $hs.Thunk();
                                            hs_sat26DAQA.evaluateOnce = function () {
                                                return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead1426DAnF);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAQA, hs_sat26DAQz);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s6VT, hs_sat26DAQB);
                                    };
                                    var hs_sat26DAQD = new $hs.Thunk();
                                    hs_sat26DAQD.evaluateOnce = function () {
                                        return hs_readzutup225s6VV.hscall(hs_zddRead1226DAnx, hs_zddRead1326DAny);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAQD, hs_sat26DAQC);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s6VT, hs_sat26DAQE);
                            };
                            var hs_sat26DAQG = new $hs.Thunk();
                            hs_sat26DAQG.evaluateOnce = function () {
                                return hs_readzutup425s6VX.hscall(hs_zddRead826DAnl, hs_zddRead926DAnm, hs_zddRead1026DAnn, hs_zddRead1126DAno);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAQG, hs_sat26DAQF);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s6VT, hs_sat26DAQH);
                    };
                    var hs_sat26DAQJ = new $hs.Thunk();
                    hs_sat26DAQJ.evaluateOnce = function () {
                        return hs_readzutup825s6VZ.hscall(hs_zddRead26DAn1, hs_zddRead126DAn2, hs_zddRead226DAn3, hs_zddRead326DAn4, hs_zddRead426DAn5, hs_zddRead526DAn6, hs_zddRead626DAn7, hs_zddRead726DAn8);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAQJ, hs_sat26DAQI);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26DAQK);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DAQL, hs_sat26DAQx);
        };
        if (hs_optional526DAo7.notEvaluated) {
            return hs_optional526DAo7.hscall();
        } else {
            return hs_optional526DAo7;
        }
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DAou, hs_zddRead126DAov, hs_zddRead226DAow, hs_zddRead326DAox, hs_zddRead426DAoy, hs_zddRead526DAoz, hs_zddRead626DAoA, hs_zddRead726DAoB, hs_zddRead826DAoC, hs_zddRead926DAoD, hs_zddRead1026DAoE, hs_zddRead1126DAoF, hs_zddRead1226DAoG, hs_zddRead1326DAoH, hs_zddRead1426DAoI) {
        var hs_sat26DAQM = new $hs.Thunk();
        hs_sat26DAQM.evaluateOnce = function () {
            return hs_zdcreadListPrec1925vbRU.hscall(hs_zddRead26DAou, hs_zddRead126DAov, hs_zddRead226DAow, hs_zddRead326DAox, hs_zddRead426DAoy, hs_zddRead526DAoz, hs_zddRead626DAoA, hs_zddRead726DAoB, hs_zddRead826DAoC, hs_zddRead926DAoD, hs_zddRead1026DAoE, hs_zddRead1126DAoF, hs_zddRead1226DAoG, hs_zddRead1326DAoH, hs_zddRead1426DAoI);
        };
        var hs_sat26DAQN = new $hs.Thunk();
        hs_sat26DAQN.evaluateOnce = function () {
            return hs_zdcreadPrec1725vbQu.hscall(hs_zddRead26DAou, hs_zddRead126DAov, hs_zddRead226DAow, hs_zddRead326DAox, hs_zddRead426DAoy, hs_zddRead526DAoz, hs_zddRead626DAoA, hs_zddRead726DAoB, hs_zddRead826DAoC, hs_zddRead926DAoD, hs_zddRead1026DAoE, hs_zddRead1126DAoF, hs_zddRead1226DAoG, hs_zddRead1326DAoH, hs_zddRead1426DAoI);
        };
        var hs_sat26DAQO = new $hs.Thunk();
        hs_sat26DAQO.evaluateOnce = function () {
            return hs_zdcreadList1925vbRW.hscall(hs_zddRead26DAou, hs_zddRead126DAov, hs_zddRead226DAow, hs_zddRead326DAox, hs_zddRead426DAoy, hs_zddRead526DAoz, hs_zddRead626DAoA, hs_zddRead726DAoB, hs_zddRead826DAoC, hs_zddRead926DAoD, hs_zddRead1026DAoE, hs_zddRead1126DAoF, hs_zddRead1226DAoG, hs_zddRead1326DAoH, hs_zddRead1426DAoI);
        };
        var hs_sat26DAQP = new $hs.Thunk();
        hs_sat26DAQP.evaluateOnce = function () {
            return hs_zdcreadsPrec1925vbRY.hscall(hs_zddRead26DAou, hs_zddRead126DAov, hs_zddRead226DAow, hs_zddRead326DAox, hs_zddRead426DAoy, hs_zddRead526DAoz, hs_zddRead626DAoA, hs_zddRead726DAoB, hs_zddRead826DAoC, hs_zddRead926DAoD, hs_zddRead1026DAoE, hs_zddRead1126DAoF, hs_zddRead1226DAoG, hs_zddRead1326DAoH, hs_zddRead1426DAoI);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DAQP, hs_sat26DAQO, hs_sat26DAQN, hs_sat26DAQM];
        return $res;
    };
    hs_zdcreadListPrec1925vbRU.evaluate = function (hs_zddRead26DAp2, hs_zddRead126DAp3, hs_zddRead226DAp4, hs_zddRead326DAp5, hs_zddRead426DAp6, hs_zddRead526DAp7, hs_zddRead626DAp8, hs_zddRead726DAp9, hs_zddRead826DApa, hs_zddRead926DApb, hs_zddRead1026DApc, hs_zddRead1126DApd, hs_zddRead1226DApe, hs_zddRead1326DApf, hs_zddRead1426DApg) {
        var hs_sat26DAQR = new $hs.Thunk();
        hs_sat26DAQR.evaluateOnce = function () {
            var hs_sat26DAQQ = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAp2, hs_zddRead126DAp3, hs_zddRead226DAp4, hs_zddRead326DAp5, hs_zddRead426DAp6, hs_zddRead526DAp7, hs_zddRead626DAp8, hs_zddRead726DAp9, hs_zddRead826DApa, hs_zddRead926DApb, hs_zddRead1026DApc, hs_zddRead1126DApd, hs_zddRead1226DApe, hs_zddRead1326DApf, hs_zddRead1426DApg);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DAQQ);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DAQR);
    };
    hs_zdcreadList1925vbRW.evaluate = function (hs_zddRead26DApy, hs_zddRead126DApz, hs_zddRead226DApA, hs_zddRead326DApB, hs_zddRead426DApC, hs_zddRead526DApD, hs_zddRead626DApE, hs_zddRead726DApF, hs_zddRead826DApG, hs_zddRead926DApH, hs_zddRead1026DApI, hs_zddRead1126DApJ, hs_zddRead1226DApK, hs_zddRead1326DApL, hs_zddRead1426DApM) {
        var hs_sat26DAQT = new $hs.Data(1);
        hs_sat26DAQT.data = [0];
        var hs_sat26DAQU = new $hs.Thunk();
        hs_sat26DAQU.evaluateOnce = function () {
            var hs_sat26DAQS = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DApy, hs_zddRead126DApz, hs_zddRead226DApA, hs_zddRead326DApB, hs_zddRead426DApC, hs_zddRead526DApD, hs_zddRead626DApE, hs_zddRead726DApF, hs_zddRead826DApG, hs_zddRead926DApH, hs_zddRead1026DApI, hs_zddRead1126DApJ, hs_zddRead1226DApK, hs_zddRead1326DApL, hs_zddRead1426DApM);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26DAQS);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAQU, hs_sat26DAQT);
    };
    hs_zdcreadsPrec1925vbRY.evaluate = function (hs_zddRead26DAq5, hs_zddRead126DAq6, hs_zddRead226DAq7, hs_zddRead326DAq8, hs_zddRead426DAq9, hs_zddRead526DAqa, hs_zddRead626DAqb, hs_zddRead726DAqc, hs_zddRead826DAqd, hs_zddRead926DAqe, hs_zddRead1026DAqf, hs_zddRead1126DAqg, hs_zddRead1226DAqh, hs_zddRead1326DAqi, hs_zddRead1426DAqj) {
        var hs_sat26DAQW = new $hs.Thunk();
        hs_sat26DAQW.evaluateOnce = function () {
            var hs_sat26DAQV = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAq5, hs_zddRead126DAq6, hs_zddRead226DAq7, hs_zddRead326DAq8, hs_zddRead426DAq9, hs_zddRead526DAqa, hs_zddRead626DAqb, hs_zddRead726DAqc, hs_zddRead826DAqd, hs_zddRead926DAqe, hs_zddRead1026DAqf, hs_zddRead1126DAqg, hs_zddRead1226DAqh, hs_zddRead1326DAqi, hs_zddRead1426DAqj);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DAQV);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAQW);
    };
    hs_zdcreadPrec1825vbU7.evaluate = function (hs_zddRead26DAqD, hs_zddRead126DAqE, hs_zddRead226DAqF, hs_zddRead326DAqG, hs_zddRead426DAqH, hs_zddRead526DAqI, hs_zddRead626DAqJ, hs_zddRead726DAqK, hs_zddRead826DAqX, hs_zddRead926DAqY, hs_zddRead1026DAqZ, hs_zddRead1126DAr0, hs_zddRead1226DAr9, hs_zddRead1326DAra) {
        var hs_optional526DArD = new $hs.Thunk();
        hs_optional526DArD.evaluateOnce = function () {
            var hs_sat26DAR0 = new $hs.Thunk();
            hs_sat26DAR0.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional526DArD);
            };
            var hs_sat26DARb = new $hs.Thunk();
            hs_sat26DARb.evaluateOnce = function () {
                var hs_sat26DARa = new $hs.Thunk();
                hs_sat26DARa.evaluateOnce = function () {
                    var hs_sat26DAR8 = new $hs.Func(1);
                    hs_sat26DAR8.evaluate = function (hs_ds26DAqN) {
                        var hs_wild26DAQZ = hs_ds26DAqN;
                        if (hs_ds26DAqN.notEvaluated) {
                            hs_wild26DAQZ = hs_ds26DAqN.hscall();
                        }
                        var hs_a26DArh = hs_wild26DAQZ.data[0];
                        var hs_b26DAri = hs_wild26DAQZ.data[1];
                        var hs_c26DArj = hs_wild26DAQZ.data[2];
                        var hs_d26DArk = hs_wild26DAQZ.data[3];
                        var hs_e26DArl = hs_wild26DAQZ.data[4];
                        var hs_f26DArm = hs_wild26DAQZ.data[5];
                        var hs_g26DArn = hs_wild26DAQZ.data[6];
                        var hs_h26DAro = hs_wild26DAQZ.data[7];
                        var hs_sat26DAR7 = new $hs.Thunk();
                        hs_sat26DAR7.evaluateOnce = function () {
                            var hs_sat26DAR5 = new $hs.Func(1);
                            hs_sat26DAR5.evaluate = function (hs_ds126DAr3) {
                                var hs_wild126DAQY = hs_ds126DAr3;
                                if (hs_ds126DAr3.notEvaluated) {
                                    hs_wild126DAQY = hs_ds126DAr3.hscall();
                                }
                                var hs_i26DArp = hs_wild126DAQY.data[0];
                                var hs_j26DArq = hs_wild126DAQY.data[1];
                                var hs_k26DArr = hs_wild126DAQY.data[2];
                                var hs_l26DArs = hs_wild126DAQY.data[3];
                                var hs_sat26DAR4 = new $hs.Thunk();
                                hs_sat26DAR4.evaluateOnce = function () {
                                    var hs_sat26DAR2 = new $hs.Func(1);
                                    hs_sat26DAR2.evaluate = function (hs_ds226DArd) {
                                        var hs_wild226DAQX = hs_ds226DArd;
                                        if (hs_ds226DArd.notEvaluated) {
                                            hs_wild226DAQX = hs_ds226DArd.hscall();
                                        }
                                        var hs_m26DArt = hs_wild226DAQX.data[0];
                                        var hs_n26DAru = hs_wild226DAQX.data[1];
                                        var hs_sat26DAR1 = new $hs.Data(1);
                                        hs_sat26DAR1.data = [hs_a26DArh, hs_b26DAri, hs_c26DArj, hs_d26DArk, hs_e26DArl, hs_f26DArm, hs_g26DArn, hs_h26DAro, hs_i26DArp, hs_j26DArq, hs_k26DArr, hs_l26DArs, hs_m26DArt, hs_n26DAru];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAR1);
                                    };
                                    var hs_sat26DAR3 = new $hs.Thunk();
                                    hs_sat26DAR3.evaluateOnce = function () {
                                        return hs_readzutup225s6VV.hscall(hs_zddRead1226DAr9, hs_zddRead1326DAra);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAR3, hs_sat26DAR2);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s6VT, hs_sat26DAR4);
                            };
                            var hs_sat26DAR6 = new $hs.Thunk();
                            hs_sat26DAR6.evaluateOnce = function () {
                                return hs_readzutup425s6VX.hscall(hs_zddRead826DAqX, hs_zddRead926DAqY, hs_zddRead1026DAqZ, hs_zddRead1126DAr0);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAR6, hs_sat26DAR5);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s6VT, hs_sat26DAR7);
                    };
                    var hs_sat26DAR9 = new $hs.Thunk();
                    hs_sat26DAR9.evaluateOnce = function () {
                        return hs_readzutup825s6VZ.hscall(hs_zddRead26DAqD, hs_zddRead126DAqE, hs_zddRead226DAqF, hs_zddRead326DAqG, hs_zddRead426DAqH, hs_zddRead526DAqI, hs_zddRead626DAqJ, hs_zddRead726DAqK);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAR9, hs_sat26DAR8);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26DARa);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DARb, hs_sat26DAR0);
        };
        if (hs_optional526DArD.notEvaluated) {
            return hs_optional526DArD.hscall();
        } else {
            return hs_optional526DArD;
        }
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DArZ, hs_zddRead126DAs0, hs_zddRead226DAs1, hs_zddRead326DAs2, hs_zddRead426DAs3, hs_zddRead526DAs4, hs_zddRead626DAs5, hs_zddRead726DAs6, hs_zddRead826DAs7, hs_zddRead926DAs8, hs_zddRead1026DAs9, hs_zddRead1126DAsa, hs_zddRead1226DAsb, hs_zddRead1326DAsc) {
        var hs_sat26DARc = new $hs.Thunk();
        hs_sat26DARc.evaluateOnce = function () {
            return hs_zdcreadListPrec2025vbVq.hscall(hs_zddRead26DArZ, hs_zddRead126DAs0, hs_zddRead226DAs1, hs_zddRead326DAs2, hs_zddRead426DAs3, hs_zddRead526DAs4, hs_zddRead626DAs5, hs_zddRead726DAs6, hs_zddRead826DAs7, hs_zddRead926DAs8, hs_zddRead1026DAs9, hs_zddRead1126DAsa, hs_zddRead1226DAsb, hs_zddRead1326DAsc);
        };
        var hs_sat26DARd = new $hs.Thunk();
        hs_sat26DARd.evaluateOnce = function () {
            return hs_zdcreadPrec1825vbU7.hscall(hs_zddRead26DArZ, hs_zddRead126DAs0, hs_zddRead226DAs1, hs_zddRead326DAs2, hs_zddRead426DAs3, hs_zddRead526DAs4, hs_zddRead626DAs5, hs_zddRead726DAs6, hs_zddRead826DAs7, hs_zddRead926DAs8, hs_zddRead1026DAs9, hs_zddRead1126DAsa, hs_zddRead1226DAsb, hs_zddRead1326DAsc);
        };
        var hs_sat26DARe = new $hs.Thunk();
        hs_sat26DARe.evaluateOnce = function () {
            return hs_zdcreadList2025vbVs.hscall(hs_zddRead26DArZ, hs_zddRead126DAs0, hs_zddRead226DAs1, hs_zddRead326DAs2, hs_zddRead426DAs3, hs_zddRead526DAs4, hs_zddRead626DAs5, hs_zddRead726DAs6, hs_zddRead826DAs7, hs_zddRead926DAs8, hs_zddRead1026DAs9, hs_zddRead1126DAsa, hs_zddRead1226DAsb, hs_zddRead1326DAsc);
        };
        var hs_sat26DARf = new $hs.Thunk();
        hs_sat26DARf.evaluateOnce = function () {
            return hs_zdcreadsPrec2025vbVu.hscall(hs_zddRead26DArZ, hs_zddRead126DAs0, hs_zddRead226DAs1, hs_zddRead326DAs2, hs_zddRead426DAs3, hs_zddRead526DAs4, hs_zddRead626DAs5, hs_zddRead726DAs6, hs_zddRead826DAs7, hs_zddRead926DAs8, hs_zddRead1026DAs9, hs_zddRead1126DAsa, hs_zddRead1226DAsb, hs_zddRead1326DAsc);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DARf, hs_sat26DARe, hs_sat26DARd, hs_sat26DARc];
        return $res;
    };
    hs_zdcreadListPrec2025vbVq.evaluate = function (hs_zddRead26DAsv, hs_zddRead126DAsw, hs_zddRead226DAsx, hs_zddRead326DAsy, hs_zddRead426DAsz, hs_zddRead526DAsA, hs_zddRead626DAsB, hs_zddRead726DAsC, hs_zddRead826DAsD, hs_zddRead926DAsE, hs_zddRead1026DAsF, hs_zddRead1126DAsG, hs_zddRead1226DAsH, hs_zddRead1326DAsI) {
        var hs_sat26DARh = new $hs.Thunk();
        hs_sat26DARh.evaluateOnce = function () {
            var hs_sat26DARg = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAsv, hs_zddRead126DAsw, hs_zddRead226DAsx, hs_zddRead326DAsy, hs_zddRead426DAsz, hs_zddRead526DAsA, hs_zddRead626DAsB, hs_zddRead726DAsC, hs_zddRead826DAsD, hs_zddRead926DAsE, hs_zddRead1026DAsF, hs_zddRead1126DAsG, hs_zddRead1226DAsH, hs_zddRead1326DAsI);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DARg);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DARh);
    };
    hs_zdcreadList2025vbVs.evaluate = function (hs_zddRead26DAsZ, hs_zddRead126DAt0, hs_zddRead226DAt1, hs_zddRead326DAt2, hs_zddRead426DAt3, hs_zddRead526DAt4, hs_zddRead626DAt5, hs_zddRead726DAt6, hs_zddRead826DAt7, hs_zddRead926DAt8, hs_zddRead1026DAt9, hs_zddRead1126DAta, hs_zddRead1226DAtb, hs_zddRead1326DAtc) {
        var hs_sat26DARj = new $hs.Data(1);
        hs_sat26DARj.data = [0];
        var hs_sat26DARk = new $hs.Thunk();
        hs_sat26DARk.evaluateOnce = function () {
            var hs_sat26DARi = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAsZ, hs_zddRead126DAt0, hs_zddRead226DAt1, hs_zddRead326DAt2, hs_zddRead426DAt3, hs_zddRead526DAt4, hs_zddRead626DAt5, hs_zddRead726DAt6, hs_zddRead826DAt7, hs_zddRead926DAt8, hs_zddRead1026DAt9, hs_zddRead1126DAta, hs_zddRead1226DAtb, hs_zddRead1326DAtc);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26DARi);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DARk, hs_sat26DARj);
    };
    hs_zdcreadsPrec2025vbVu.evaluate = function (hs_zddRead26DAtu, hs_zddRead126DAtv, hs_zddRead226DAtw, hs_zddRead326DAtx, hs_zddRead426DAty, hs_zddRead526DAtz, hs_zddRead626DAtA, hs_zddRead726DAtB, hs_zddRead826DAtC, hs_zddRead926DAtD, hs_zddRead1026DAtE, hs_zddRead1126DAtF, hs_zddRead1226DAtG, hs_zddRead1326DAtH) {
        var hs_sat26DARm = new $hs.Thunk();
        hs_sat26DARm.evaluateOnce = function () {
            var hs_sat26DARl = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAtu, hs_zddRead126DAtv, hs_zddRead226DAtw, hs_zddRead326DAtx, hs_zddRead426DAty, hs_zddRead526DAtz, hs_zddRead626DAtA, hs_zddRead726DAtB, hs_zddRead826DAtC, hs_zddRead926DAtD, hs_zddRead1026DAtE, hs_zddRead1126DAtF, hs_zddRead1226DAtG, hs_zddRead1326DAtH);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DARl);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DARm);
    };
    hs_zdcreadPrec1925vbXv.evaluate = function (hs_zddRead26DAu0, hs_zddRead126DAu1, hs_zddRead226DAu2, hs_zddRead326DAu3, hs_zddRead426DAu4, hs_zddRead526DAu5, hs_zddRead626DAu6, hs_zddRead726DAu7, hs_zddRead826DAuk, hs_zddRead926DAul, hs_zddRead1026DAum, hs_zddRead1126DAun, hs_zddRead1226DAuw) {
        var hs_optional526DAuU = new $hs.Thunk();
        hs_optional526DAuU.evaluateOnce = function () {
            var hs_sat26DARp = new $hs.Thunk();
            hs_sat26DARp.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional526DAuU);
            };
            var hs_sat26DARA = new $hs.Thunk();
            hs_sat26DARA.evaluateOnce = function () {
                var hs_sat26DARz = new $hs.Thunk();
                hs_sat26DARz.evaluateOnce = function () {
                    var hs_sat26DARx = new $hs.Func(1);
                    hs_sat26DARx.evaluate = function (hs_ds26DAua) {
                        var hs_wild26DARo = hs_ds26DAua;
                        if (hs_ds26DAua.notEvaluated) {
                            hs_wild26DARo = hs_ds26DAua.hscall();
                        }
                        var hs_a26DAuz = hs_wild26DARo.data[0];
                        var hs_b26DAuA = hs_wild26DARo.data[1];
                        var hs_c26DAuB = hs_wild26DARo.data[2];
                        var hs_d26DAuC = hs_wild26DARo.data[3];
                        var hs_e26DAuD = hs_wild26DARo.data[4];
                        var hs_f26DAuE = hs_wild26DARo.data[5];
                        var hs_g26DAuF = hs_wild26DARo.data[6];
                        var hs_h26DAuG = hs_wild26DARo.data[7];
                        var hs_sat26DARw = new $hs.Thunk();
                        hs_sat26DARw.evaluateOnce = function () {
                            var hs_sat26DARu = new $hs.Func(1);
                            hs_sat26DARu.evaluate = function (hs_ds126DAuq) {
                                var hs_wild126DARn = hs_ds126DAuq;
                                if (hs_ds126DAuq.notEvaluated) {
                                    hs_wild126DARn = hs_ds126DAuq.hscall();
                                }
                                var hs_i26DAuH = hs_wild126DARn.data[0];
                                var hs_j26DAuI = hs_wild126DARn.data[1];
                                var hs_k26DAuJ = hs_wild126DARn.data[2];
                                var hs_l26DAuK = hs_wild126DARn.data[3];
                                var hs_sat26DARt = new $hs.Thunk();
                                hs_sat26DARt.evaluateOnce = function () {
                                    var hs_sat26DARr = new $hs.Func(1);
                                    hs_sat26DARr.evaluate = function (hs_m26DAuL) {
                                        var hs_sat26DARq = new $hs.Data(1);
                                        hs_sat26DARq.data = [hs_a26DAuz, hs_b26DAuA, hs_c26DAuB, hs_d26DAuC, hs_e26DAuD, hs_f26DAuE, hs_g26DAuF, hs_h26DAuG, hs_i26DAuH, hs_j26DAuI, hs_k26DAuJ, hs_l26DAuK, hs_m26DAuL];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DARq);
                                    };
                                    var hs_sat26DARs = new $hs.Thunk();
                                    hs_sat26DARs.evaluateOnce = function () {
                                        return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead1226DAuw);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DARs, hs_sat26DARr);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s6VT, hs_sat26DARt);
                            };
                            var hs_sat26DARv = new $hs.Thunk();
                            hs_sat26DARv.evaluateOnce = function () {
                                return hs_readzutup425s6VX.hscall(hs_zddRead826DAuk, hs_zddRead926DAul, hs_zddRead1026DAum, hs_zddRead1126DAun);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DARv, hs_sat26DARu);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s6VT, hs_sat26DARw);
                    };
                    var hs_sat26DARy = new $hs.Thunk();
                    hs_sat26DARy.evaluateOnce = function () {
                        return hs_readzutup825s6VZ.hscall(hs_zddRead26DAu0, hs_zddRead126DAu1, hs_zddRead226DAu2, hs_zddRead326DAu3, hs_zddRead426DAu4, hs_zddRead526DAu5, hs_zddRead626DAu6, hs_zddRead726DAu7);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DARy, hs_sat26DARx);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26DARz);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DARA, hs_sat26DARp);
        };
        if (hs_optional526DAuU.notEvaluated) {
            return hs_optional526DAuU.hscall();
        } else {
            return hs_optional526DAuU;
        }
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DAvf, hs_zddRead126DAvg, hs_zddRead226DAvh, hs_zddRead326DAvi, hs_zddRead426DAvj, hs_zddRead526DAvk, hs_zddRead626DAvl, hs_zddRead726DAvm, hs_zddRead826DAvn, hs_zddRead926DAvo, hs_zddRead1026DAvp, hs_zddRead1126DAvq, hs_zddRead1226DAvr) {
        var hs_sat26DARB = new $hs.Thunk();
        hs_sat26DARB.evaluateOnce = function () {
            return hs_zdcreadListPrec2125vbYH.hscall(hs_zddRead26DAvf, hs_zddRead126DAvg, hs_zddRead226DAvh, hs_zddRead326DAvi, hs_zddRead426DAvj, hs_zddRead526DAvk, hs_zddRead626DAvl, hs_zddRead726DAvm, hs_zddRead826DAvn, hs_zddRead926DAvo, hs_zddRead1026DAvp, hs_zddRead1126DAvq, hs_zddRead1226DAvr);
        };
        var hs_sat26DARC = new $hs.Thunk();
        hs_sat26DARC.evaluateOnce = function () {
            return hs_zdcreadPrec1925vbXv.hscall(hs_zddRead26DAvf, hs_zddRead126DAvg, hs_zddRead226DAvh, hs_zddRead326DAvi, hs_zddRead426DAvj, hs_zddRead526DAvk, hs_zddRead626DAvl, hs_zddRead726DAvm, hs_zddRead826DAvn, hs_zddRead926DAvo, hs_zddRead1026DAvp, hs_zddRead1126DAvq, hs_zddRead1226DAvr);
        };
        var hs_sat26DARD = new $hs.Thunk();
        hs_sat26DARD.evaluateOnce = function () {
            return hs_zdcreadList2125vbYJ.hscall(hs_zddRead26DAvf, hs_zddRead126DAvg, hs_zddRead226DAvh, hs_zddRead326DAvi, hs_zddRead426DAvj, hs_zddRead526DAvk, hs_zddRead626DAvl, hs_zddRead726DAvm, hs_zddRead826DAvn, hs_zddRead926DAvo, hs_zddRead1026DAvp, hs_zddRead1126DAvq, hs_zddRead1226DAvr);
        };
        var hs_sat26DARE = new $hs.Thunk();
        hs_sat26DARE.evaluateOnce = function () {
            return hs_zdcreadsPrec2125vbYL.hscall(hs_zddRead26DAvf, hs_zddRead126DAvg, hs_zddRead226DAvh, hs_zddRead326DAvi, hs_zddRead426DAvj, hs_zddRead526DAvk, hs_zddRead626DAvl, hs_zddRead726DAvm, hs_zddRead826DAvn, hs_zddRead926DAvo, hs_zddRead1026DAvp, hs_zddRead1126DAvq, hs_zddRead1226DAvr);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DARE, hs_sat26DARD, hs_sat26DARC, hs_sat26DARB];
        return $res;
    };
    hs_zdcreadListPrec2125vbYH.evaluate = function (hs_zddRead26DAvJ, hs_zddRead126DAvK, hs_zddRead226DAvL, hs_zddRead326DAvM, hs_zddRead426DAvN, hs_zddRead526DAvO, hs_zddRead626DAvP, hs_zddRead726DAvQ, hs_zddRead826DAvR, hs_zddRead926DAvS, hs_zddRead1026DAvT, hs_zddRead1126DAvU, hs_zddRead1226DAvV) {
        var hs_sat26DARG = new $hs.Thunk();
        hs_sat26DARG.evaluateOnce = function () {
            var hs_sat26DARF = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAvJ, hs_zddRead126DAvK, hs_zddRead226DAvL, hs_zddRead326DAvM, hs_zddRead426DAvN, hs_zddRead526DAvO, hs_zddRead626DAvP, hs_zddRead726DAvQ, hs_zddRead826DAvR, hs_zddRead926DAvS, hs_zddRead1026DAvT, hs_zddRead1126DAvU, hs_zddRead1226DAvV);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DARF);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DARG);
    };
    hs_zdcreadList2125vbYJ.evaluate = function (hs_zddRead26DAwb, hs_zddRead126DAwc, hs_zddRead226DAwd, hs_zddRead326DAwe, hs_zddRead426DAwf, hs_zddRead526DAwg, hs_zddRead626DAwh, hs_zddRead726DAwi, hs_zddRead826DAwj, hs_zddRead926DAwk, hs_zddRead1026DAwl, hs_zddRead1126DAwm, hs_zddRead1226DAwn) {
        var hs_sat26DARI = new $hs.Data(1);
        hs_sat26DARI.data = [0];
        var hs_sat26DARJ = new $hs.Thunk();
        hs_sat26DARJ.evaluateOnce = function () {
            var hs_sat26DARH = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAwb, hs_zddRead126DAwc, hs_zddRead226DAwd, hs_zddRead326DAwe, hs_zddRead426DAwf, hs_zddRead526DAwg, hs_zddRead626DAwh, hs_zddRead726DAwi, hs_zddRead826DAwj, hs_zddRead926DAwk, hs_zddRead1026DAwl, hs_zddRead1126DAwm, hs_zddRead1226DAwn);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26DARH);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DARJ, hs_sat26DARI);
    };
    hs_zdcreadsPrec2125vbYL.evaluate = function (hs_zddRead26DAwE, hs_zddRead126DAwF, hs_zddRead226DAwG, hs_zddRead326DAwH, hs_zddRead426DAwI, hs_zddRead526DAwJ, hs_zddRead626DAwK, hs_zddRead726DAwL, hs_zddRead826DAwM, hs_zddRead926DAwN, hs_zddRead1026DAwO, hs_zddRead1126DAwP, hs_zddRead1226DAwQ) {
        var hs_sat26DARL = new $hs.Thunk();
        hs_sat26DARL.evaluateOnce = function () {
            var hs_sat26DARK = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAwE, hs_zddRead126DAwF, hs_zddRead226DAwG, hs_zddRead326DAwH, hs_zddRead426DAwI, hs_zddRead526DAwJ, hs_zddRead626DAwK, hs_zddRead726DAwL, hs_zddRead826DAwM, hs_zddRead926DAwN, hs_zddRead1026DAwO, hs_zddRead1126DAwP, hs_zddRead1226DAwQ);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DARK);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DARL);
    };
    hs_zdcreadPrec2025vc0E.evaluate = function (hs_zddRead26DAx8, hs_zddRead126DAx9, hs_zddRead226DAxa, hs_zddRead326DAxb, hs_zddRead426DAxc, hs_zddRead526DAxd, hs_zddRead626DAxe, hs_zddRead726DAxf, hs_zddRead826DAxs, hs_zddRead926DAxt, hs_zddRead1026DAxu, hs_zddRead1126DAxv) {
        var hs_optional526DAxW = new $hs.Thunk();
        hs_optional526DAxW.evaluateOnce = function () {
            var hs_sat26DARO = new $hs.Thunk();
            hs_sat26DARO.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional526DAxW);
            };
            var hs_sat26DARW = new $hs.Thunk();
            hs_sat26DARW.evaluateOnce = function () {
                var hs_sat26DARV = new $hs.Thunk();
                hs_sat26DARV.evaluateOnce = function () {
                    var hs_sat26DART = new $hs.Func(1);
                    hs_sat26DART.evaluate = function (hs_ds26DAxi) {
                        var hs_wild26DARN = hs_ds26DAxi;
                        if (hs_ds26DAxi.notEvaluated) {
                            hs_wild26DARN = hs_ds26DAxi.hscall();
                        }
                        var hs_a26DAxE = hs_wild26DARN.data[0];
                        var hs_b26DAxF = hs_wild26DARN.data[1];
                        var hs_c26DAxG = hs_wild26DARN.data[2];
                        var hs_d26DAxH = hs_wild26DARN.data[3];
                        var hs_e26DAxI = hs_wild26DARN.data[4];
                        var hs_f26DAxJ = hs_wild26DARN.data[5];
                        var hs_g26DAxK = hs_wild26DARN.data[6];
                        var hs_h26DAxL = hs_wild26DARN.data[7];
                        var hs_sat26DARS = new $hs.Thunk();
                        hs_sat26DARS.evaluateOnce = function () {
                            var hs_sat26DARQ = new $hs.Func(1);
                            hs_sat26DARQ.evaluate = function (hs_ds126DAxy) {
                                var hs_wild126DARM = hs_ds126DAxy;
                                if (hs_ds126DAxy.notEvaluated) {
                                    hs_wild126DARM = hs_ds126DAxy.hscall();
                                }
                                var hs_i26DAxM = hs_wild126DARM.data[0];
                                var hs_j26DAxN = hs_wild126DARM.data[1];
                                var hs_k26DAxO = hs_wild126DARM.data[2];
                                var hs_l26DAxP = hs_wild126DARM.data[3];
                                var hs_sat26DARP = new $hs.Data(1);
                                hs_sat26DARP.data = [hs_a26DAxE, hs_b26DAxF, hs_c26DAxG, hs_d26DAxH, hs_e26DAxI, hs_f26DAxJ, hs_g26DAxK, hs_h26DAxL, hs_i26DAxM, hs_j26DAxN, hs_k26DAxO, hs_l26DAxP];
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DARP);
                            };
                            var hs_sat26DARR = new $hs.Thunk();
                            hs_sat26DARR.evaluateOnce = function () {
                                return hs_readzutup425s6VX.hscall(hs_zddRead826DAxs, hs_zddRead926DAxt, hs_zddRead1026DAxu, hs_zddRead1126DAxv);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DARR, hs_sat26DARQ);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s6VT, hs_sat26DARS);
                    };
                    var hs_sat26DARU = new $hs.Thunk();
                    hs_sat26DARU.evaluateOnce = function () {
                        return hs_readzutup825s6VZ.hscall(hs_zddRead26DAx8, hs_zddRead126DAx9, hs_zddRead226DAxa, hs_zddRead326DAxb, hs_zddRead426DAxc, hs_zddRead526DAxd, hs_zddRead626DAxe, hs_zddRead726DAxf);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DARU, hs_sat26DART);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26DARV);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DARW, hs_sat26DARO);
        };
        if (hs_optional526DAxW.notEvaluated) {
            return hs_optional526DAxW.hscall();
        } else {
            return hs_optional526DAxW;
        }
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DAyg, hs_zddRead126DAyh, hs_zddRead226DAyi, hs_zddRead326DAyj, hs_zddRead426DAyk, hs_zddRead526DAyl, hs_zddRead626DAym, hs_zddRead726DAyn, hs_zddRead826DAyo, hs_zddRead926DAyp, hs_zddRead1026DAyq, hs_zddRead1126DAyr) {
        var hs_sat26DARX = new $hs.Thunk();
        hs_sat26DARX.evaluateOnce = function () {
            return hs_zdcreadListPrec2225vc1J.hscall(hs_zddRead26DAyg, hs_zddRead126DAyh, hs_zddRead226DAyi, hs_zddRead326DAyj, hs_zddRead426DAyk, hs_zddRead526DAyl, hs_zddRead626DAym, hs_zddRead726DAyn, hs_zddRead826DAyo, hs_zddRead926DAyp, hs_zddRead1026DAyq, hs_zddRead1126DAyr);
        };
        var hs_sat26DARY = new $hs.Thunk();
        hs_sat26DARY.evaluateOnce = function () {
            return hs_zdcreadPrec2025vc0E.hscall(hs_zddRead26DAyg, hs_zddRead126DAyh, hs_zddRead226DAyi, hs_zddRead326DAyj, hs_zddRead426DAyk, hs_zddRead526DAyl, hs_zddRead626DAym, hs_zddRead726DAyn, hs_zddRead826DAyo, hs_zddRead926DAyp, hs_zddRead1026DAyq, hs_zddRead1126DAyr);
        };
        var hs_sat26DARZ = new $hs.Thunk();
        hs_sat26DARZ.evaluateOnce = function () {
            return hs_zdcreadList2225vc1L.hscall(hs_zddRead26DAyg, hs_zddRead126DAyh, hs_zddRead226DAyi, hs_zddRead326DAyj, hs_zddRead426DAyk, hs_zddRead526DAyl, hs_zddRead626DAym, hs_zddRead726DAyn, hs_zddRead826DAyo, hs_zddRead926DAyp, hs_zddRead1026DAyq, hs_zddRead1126DAyr);
        };
        var hs_sat26DAS0 = new $hs.Thunk();
        hs_sat26DAS0.evaluateOnce = function () {
            return hs_zdcreadsPrec2225vc1N.hscall(hs_zddRead26DAyg, hs_zddRead126DAyh, hs_zddRead226DAyi, hs_zddRead326DAyj, hs_zddRead426DAyk, hs_zddRead526DAyl, hs_zddRead626DAym, hs_zddRead726DAyn, hs_zddRead826DAyo, hs_zddRead926DAyp, hs_zddRead1026DAyq, hs_zddRead1126DAyr);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DAS0, hs_sat26DARZ, hs_sat26DARY, hs_sat26DARX];
        return $res;
    };
    hs_zdcreadListPrec2225vc1J.evaluate = function (hs_zddRead26DAyI, hs_zddRead126DAyJ, hs_zddRead226DAyK, hs_zddRead326DAyL, hs_zddRead426DAyM, hs_zddRead526DAyN, hs_zddRead626DAyO, hs_zddRead726DAyP, hs_zddRead826DAyQ, hs_zddRead926DAyR, hs_zddRead1026DAyS, hs_zddRead1126DAyT) {
        var hs_sat26DAS2 = new $hs.Thunk();
        hs_sat26DAS2.evaluateOnce = function () {
            var hs_sat26DAS1 = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAyI, hs_zddRead126DAyJ, hs_zddRead226DAyK, hs_zddRead326DAyL, hs_zddRead426DAyM, hs_zddRead526DAyN, hs_zddRead626DAyO, hs_zddRead726DAyP, hs_zddRead826DAyQ, hs_zddRead926DAyR, hs_zddRead1026DAyS, hs_zddRead1126DAyT);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DAS1);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DAS2);
    };
    hs_zdcreadList2225vc1L.evaluate = function (hs_zddRead26DAz8, hs_zddRead126DAz9, hs_zddRead226DAza, hs_zddRead326DAzb, hs_zddRead426DAzc, hs_zddRead526DAzd, hs_zddRead626DAze, hs_zddRead726DAzf, hs_zddRead826DAzg, hs_zddRead926DAzh, hs_zddRead1026DAzi, hs_zddRead1126DAzj) {
        var hs_sat26DAS4 = new $hs.Data(1);
        hs_sat26DAS4.data = [0];
        var hs_sat26DAS5 = new $hs.Thunk();
        hs_sat26DAS5.evaluateOnce = function () {
            var hs_sat26DAS3 = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAz8, hs_zddRead126DAz9, hs_zddRead226DAza, hs_zddRead326DAzb, hs_zddRead426DAzc, hs_zddRead526DAzd, hs_zddRead626DAze, hs_zddRead726DAzf, hs_zddRead826DAzg, hs_zddRead926DAzh, hs_zddRead1026DAzi, hs_zddRead1126DAzj);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26DAS3);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAS5, hs_sat26DAS4);
    };
    hs_zdcreadsPrec2225vc1N.evaluate = function (hs_zddRead26DAzz, hs_zddRead126DAzA, hs_zddRead226DAzB, hs_zddRead326DAzC, hs_zddRead426DAzD, hs_zddRead526DAzE, hs_zddRead626DAzF, hs_zddRead726DAzG, hs_zddRead826DAzH, hs_zddRead926DAzI, hs_zddRead1026DAzJ, hs_zddRead1126DAzK) {
        var hs_sat26DAS7 = new $hs.Thunk();
        hs_sat26DAS7.evaluateOnce = function () {
            var hs_sat26DAS6 = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAzz, hs_zddRead126DAzA, hs_zddRead226DAzB, hs_zddRead326DAzC, hs_zddRead426DAzD, hs_zddRead526DAzE, hs_zddRead626DAzF, hs_zddRead726DAzG, hs_zddRead826DAzH, hs_zddRead926DAzI, hs_zddRead1026DAzJ, hs_zddRead1126DAzK);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DAS6);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DAS7);
    };
    hs_zdcreadPrec2125vc3y.evaluate = function (hs_zddRead26DAA1, hs_zddRead126DAA2, hs_zddRead226DAA3, hs_zddRead326DAA4, hs_zddRead426DAA5, hs_zddRead526DAA6, hs_zddRead626DAA7, hs_zddRead726DAA8, hs_zddRead826DAAl, hs_zddRead926DAAm, hs_zddRead1026DAAt) {
        var hs_optional526DAAP = new $hs.Thunk();
        hs_optional526DAAP.evaluateOnce = function () {
            var hs_sat26DASa = new $hs.Thunk();
            hs_sat26DASa.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional526DAAP);
            };
            var hs_sat26DASl = new $hs.Thunk();
            hs_sat26DASl.evaluateOnce = function () {
                var hs_sat26DASk = new $hs.Thunk();
                hs_sat26DASk.evaluateOnce = function () {
                    var hs_sat26DASi = new $hs.Func(1);
                    hs_sat26DASi.evaluate = function (hs_ds26DAAb) {
                        var hs_wild26DAS9 = hs_ds26DAAb;
                        if (hs_ds26DAAb.notEvaluated) {
                            hs_wild26DAS9 = hs_ds26DAAb.hscall();
                        }
                        var hs_a26DAAw = hs_wild26DAS9.data[0];
                        var hs_b26DAAx = hs_wild26DAS9.data[1];
                        var hs_c26DAAy = hs_wild26DAS9.data[2];
                        var hs_d26DAAz = hs_wild26DAS9.data[3];
                        var hs_e26DAAA = hs_wild26DAS9.data[4];
                        var hs_f26DAAB = hs_wild26DAS9.data[5];
                        var hs_g26DAAC = hs_wild26DAS9.data[6];
                        var hs_h26DAAD = hs_wild26DAS9.data[7];
                        var hs_sat26DASh = new $hs.Thunk();
                        hs_sat26DASh.evaluateOnce = function () {
                            var hs_sat26DASf = new $hs.Func(1);
                            hs_sat26DASf.evaluate = function (hs_ds126DAAp) {
                                var hs_wild126DAS8 = hs_ds126DAAp;
                                if (hs_ds126DAAp.notEvaluated) {
                                    hs_wild126DAS8 = hs_ds126DAAp.hscall();
                                }
                                var hs_i26DAAE = hs_wild126DAS8.data[0];
                                var hs_j26DAAF = hs_wild126DAS8.data[1];
                                var hs_sat26DASe = new $hs.Thunk();
                                hs_sat26DASe.evaluateOnce = function () {
                                    var hs_sat26DASc = new $hs.Func(1);
                                    hs_sat26DASc.evaluate = function (hs_k26DAAG) {
                                        var hs_sat26DASb = new $hs.Data(1);
                                        hs_sat26DASb.data = [hs_a26DAAw, hs_b26DAAx, hs_c26DAAy, hs_d26DAAz, hs_e26DAAA, hs_f26DAAB, hs_g26DAAC, hs_h26DAAD, hs_i26DAAE, hs_j26DAAF, hs_k26DAAG];
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DASb);
                                    };
                                    var hs_sat26DASd = new $hs.Thunk();
                                    hs_sat26DASd.evaluateOnce = function () {
                                        return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead1026DAAt);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DASd, hs_sat26DASc);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s6VT, hs_sat26DASe);
                            };
                            var hs_sat26DASg = new $hs.Thunk();
                            hs_sat26DASg.evaluateOnce = function () {
                                return hs_readzutup225s6VV.hscall(hs_zddRead826DAAl, hs_zddRead926DAAm);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DASg, hs_sat26DASf);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s6VT, hs_sat26DASh);
                    };
                    var hs_sat26DASj = new $hs.Thunk();
                    hs_sat26DASj.evaluateOnce = function () {
                        return hs_readzutup825s6VZ.hscall(hs_zddRead26DAA1, hs_zddRead126DAA2, hs_zddRead226DAA3, hs_zddRead326DAA4, hs_zddRead426DAA5, hs_zddRead526DAA6, hs_zddRead626DAA7, hs_zddRead726DAA8);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DASj, hs_sat26DASi);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26DASk);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DASl, hs_sat26DASa);
        };
        if (hs_optional526DAAP.notEvaluated) {
            return hs_optional526DAAP.hscall();
        } else {
            return hs_optional526DAAP;
        }
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DAB8, hs_zddRead126DAB9, hs_zddRead226DABa, hs_zddRead326DABb, hs_zddRead426DABc, hs_zddRead526DABd, hs_zddRead626DABe, hs_zddRead726DABf, hs_zddRead826DABg, hs_zddRead926DABh, hs_zddRead1026DABi) {
        var hs_sat26DASm = new $hs.Thunk();
        hs_sat26DASm.evaluateOnce = function () {
            return hs_zdcreadListPrec2325vc4C.hscall(hs_zddRead26DAB8, hs_zddRead126DAB9, hs_zddRead226DABa, hs_zddRead326DABb, hs_zddRead426DABc, hs_zddRead526DABd, hs_zddRead626DABe, hs_zddRead726DABf, hs_zddRead826DABg, hs_zddRead926DABh, hs_zddRead1026DABi);
        };
        var hs_sat26DASn = new $hs.Thunk();
        hs_sat26DASn.evaluateOnce = function () {
            return hs_zdcreadPrec2125vc3y.hscall(hs_zddRead26DAB8, hs_zddRead126DAB9, hs_zddRead226DABa, hs_zddRead326DABb, hs_zddRead426DABc, hs_zddRead526DABd, hs_zddRead626DABe, hs_zddRead726DABf, hs_zddRead826DABg, hs_zddRead926DABh, hs_zddRead1026DABi);
        };
        var hs_sat26DASo = new $hs.Thunk();
        hs_sat26DASo.evaluateOnce = function () {
            return hs_zdcreadList2325vc4E.hscall(hs_zddRead26DAB8, hs_zddRead126DAB9, hs_zddRead226DABa, hs_zddRead326DABb, hs_zddRead426DABc, hs_zddRead526DABd, hs_zddRead626DABe, hs_zddRead726DABf, hs_zddRead826DABg, hs_zddRead926DABh, hs_zddRead1026DABi);
        };
        var hs_sat26DASp = new $hs.Thunk();
        hs_sat26DASp.evaluateOnce = function () {
            return hs_zdcreadsPrec2325vc4G.hscall(hs_zddRead26DAB8, hs_zddRead126DAB9, hs_zddRead226DABa, hs_zddRead326DABb, hs_zddRead426DABc, hs_zddRead526DABd, hs_zddRead626DABe, hs_zddRead726DABf, hs_zddRead826DABg, hs_zddRead926DABh, hs_zddRead1026DABi);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DASp, hs_sat26DASo, hs_sat26DASn, hs_sat26DASm];
        return $res;
    };
    hs_zdcreadListPrec2325vc4C.evaluate = function (hs_zddRead26DABy, hs_zddRead126DABz, hs_zddRead226DABA, hs_zddRead326DABB, hs_zddRead426DABC, hs_zddRead526DABD, hs_zddRead626DABE, hs_zddRead726DABF, hs_zddRead826DABG, hs_zddRead926DABH, hs_zddRead1026DABI) {
        var hs_sat26DASr = new $hs.Thunk();
        hs_sat26DASr.evaluateOnce = function () {
            var hs_sat26DASq = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DABy, hs_zddRead126DABz, hs_zddRead226DABA, hs_zddRead326DABB, hs_zddRead426DABC, hs_zddRead526DABD, hs_zddRead626DABE, hs_zddRead726DABF, hs_zddRead826DABG, hs_zddRead926DABH, hs_zddRead1026DABI);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DASq);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DASr);
    };
    hs_zdcreadList2325vc4E.evaluate = function (hs_zddRead26DABW, hs_zddRead126DABX, hs_zddRead226DABY, hs_zddRead326DABZ, hs_zddRead426DAC0, hs_zddRead526DAC1, hs_zddRead626DAC2, hs_zddRead726DAC3, hs_zddRead826DAC4, hs_zddRead926DAC5, hs_zddRead1026DAC6) {
        var hs_sat26DASt = new $hs.Data(1);
        hs_sat26DASt.data = [0];
        var hs_sat26DASu = new $hs.Thunk();
        hs_sat26DASu.evaluateOnce = function () {
            var hs_sat26DASs = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DABW, hs_zddRead126DABX, hs_zddRead226DABY, hs_zddRead326DABZ, hs_zddRead426DAC0, hs_zddRead526DAC1, hs_zddRead626DAC2, hs_zddRead726DAC3, hs_zddRead826DAC4, hs_zddRead926DAC5, hs_zddRead1026DAC6);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26DASs);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DASu, hs_sat26DASt);
    };
    hs_zdcreadsPrec2325vc4G.evaluate = function (hs_zddRead26DACl, hs_zddRead126DACm, hs_zddRead226DACn, hs_zddRead326DACo, hs_zddRead426DACp, hs_zddRead526DACq, hs_zddRead626DACr, hs_zddRead726DACs, hs_zddRead826DACt, hs_zddRead926DACu, hs_zddRead1026DACv) {
        var hs_sat26DASw = new $hs.Thunk();
        hs_sat26DASw.evaluateOnce = function () {
            var hs_sat26DASv = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DACl, hs_zddRead126DACm, hs_zddRead226DACn, hs_zddRead326DACo, hs_zddRead426DACp, hs_zddRead526DACq, hs_zddRead626DACr, hs_zddRead726DACs, hs_zddRead826DACt, hs_zddRead926DACu, hs_zddRead1026DACv);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DASv);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DASw);
    };
    hs_zdcreadPrec2225vc6j.evaluate = function (hs_zddRead26DACL, hs_zddRead126DACM, hs_zddRead226DACN, hs_zddRead326DACO, hs_zddRead426DACP, hs_zddRead526DACQ, hs_zddRead626DACR, hs_zddRead726DACS, hs_zddRead826DAD5, hs_zddRead926DAD6) {
        var hs_optional526DADt = new $hs.Thunk();
        hs_optional526DADt.evaluateOnce = function () {
            var hs_sat26DASz = new $hs.Thunk();
            hs_sat26DASz.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional526DADt);
            };
            var hs_sat26DASH = new $hs.Thunk();
            hs_sat26DASH.evaluateOnce = function () {
                var hs_sat26DASG = new $hs.Thunk();
                hs_sat26DASG.evaluateOnce = function () {
                    var hs_sat26DASE = new $hs.Func(1);
                    hs_sat26DASE.evaluate = function (hs_ds26DACV) {
                        var hs_wild26DASy = hs_ds26DACV;
                        if (hs_ds26DACV.notEvaluated) {
                            hs_wild26DASy = hs_ds26DACV.hscall();
                        }
                        var hs_a26DADd = hs_wild26DASy.data[0];
                        var hs_b26DADe = hs_wild26DASy.data[1];
                        var hs_c26DADf = hs_wild26DASy.data[2];
                        var hs_d26DADg = hs_wild26DASy.data[3];
                        var hs_e26DADh = hs_wild26DASy.data[4];
                        var hs_f26DADi = hs_wild26DASy.data[5];
                        var hs_g26DADj = hs_wild26DASy.data[6];
                        var hs_h26DADk = hs_wild26DASy.data[7];
                        var hs_sat26DASD = new $hs.Thunk();
                        hs_sat26DASD.evaluateOnce = function () {
                            var hs_sat26DASB = new $hs.Func(1);
                            hs_sat26DASB.evaluate = function (hs_ds126DAD9) {
                                var hs_wild126DASx = hs_ds126DAD9;
                                if (hs_ds126DAD9.notEvaluated) {
                                    hs_wild126DASx = hs_ds126DAD9.hscall();
                                }
                                var hs_i26DADl = hs_wild126DASx.data[0];
                                var hs_j26DADm = hs_wild126DASx.data[1];
                                var hs_sat26DASA = new $hs.Data(1);
                                hs_sat26DASA.data = [hs_a26DADd, hs_b26DADe, hs_c26DADf, hs_d26DADg, hs_e26DADh, hs_f26DADi, hs_g26DADj, hs_h26DADk, hs_i26DADl, hs_j26DADm];
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DASA);
                            };
                            var hs_sat26DASC = new $hs.Thunk();
                            hs_sat26DASC.evaluateOnce = function () {
                                return hs_readzutup225s6VV.hscall(hs_zddRead826DAD5, hs_zddRead926DAD6);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DASC, hs_sat26DASB);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s6VT, hs_sat26DASD);
                    };
                    var hs_sat26DASF = new $hs.Thunk();
                    hs_sat26DASF.evaluateOnce = function () {
                        return hs_readzutup825s6VZ.hscall(hs_zddRead26DACL, hs_zddRead126DACM, hs_zddRead226DACN, hs_zddRead326DACO, hs_zddRead426DACP, hs_zddRead526DACQ, hs_zddRead626DACR, hs_zddRead726DACS);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DASF, hs_sat26DASE);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26DASG);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DASH, hs_sat26DASz);
        };
        if (hs_optional526DADt.notEvaluated) {
            return hs_optional526DADt.hscall();
        } else {
            return hs_optional526DADt;
        }
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DADL, hs_zddRead126DADM, hs_zddRead226DADN, hs_zddRead326DADO, hs_zddRead426DADP, hs_zddRead526DADQ, hs_zddRead626DADR, hs_zddRead726DADS, hs_zddRead826DADT, hs_zddRead926DADU) {
        var hs_sat26DASI = new $hs.Thunk();
        hs_sat26DASI.evaluateOnce = function () {
            return hs_zdcreadListPrec2425vc7g.hscall(hs_zddRead26DADL, hs_zddRead126DADM, hs_zddRead226DADN, hs_zddRead326DADO, hs_zddRead426DADP, hs_zddRead526DADQ, hs_zddRead626DADR, hs_zddRead726DADS, hs_zddRead826DADT, hs_zddRead926DADU);
        };
        var hs_sat26DASJ = new $hs.Thunk();
        hs_sat26DASJ.evaluateOnce = function () {
            return hs_zdcreadPrec2225vc6j.hscall(hs_zddRead26DADL, hs_zddRead126DADM, hs_zddRead226DADN, hs_zddRead326DADO, hs_zddRead426DADP, hs_zddRead526DADQ, hs_zddRead626DADR, hs_zddRead726DADS, hs_zddRead826DADT, hs_zddRead926DADU);
        };
        var hs_sat26DASK = new $hs.Thunk();
        hs_sat26DASK.evaluateOnce = function () {
            return hs_zdcreadList2425vc7i.hscall(hs_zddRead26DADL, hs_zddRead126DADM, hs_zddRead226DADN, hs_zddRead326DADO, hs_zddRead426DADP, hs_zddRead526DADQ, hs_zddRead626DADR, hs_zddRead726DADS, hs_zddRead826DADT, hs_zddRead926DADU);
        };
        var hs_sat26DASL = new $hs.Thunk();
        hs_sat26DASL.evaluateOnce = function () {
            return hs_zdcreadsPrec2425vc7k.hscall(hs_zddRead26DADL, hs_zddRead126DADM, hs_zddRead226DADN, hs_zddRead326DADO, hs_zddRead426DADP, hs_zddRead526DADQ, hs_zddRead626DADR, hs_zddRead726DADS, hs_zddRead826DADT, hs_zddRead926DADU);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DASL, hs_sat26DASK, hs_sat26DASJ, hs_sat26DASI];
        return $res;
    };
    hs_zdcreadListPrec2425vc7g.evaluate = function (hs_zddRead26DAE9, hs_zddRead126DAEa, hs_zddRead226DAEb, hs_zddRead326DAEc, hs_zddRead426DAEd, hs_zddRead526DAEe, hs_zddRead626DAEf, hs_zddRead726DAEg, hs_zddRead826DAEh, hs_zddRead926DAEi) {
        var hs_sat26DASN = new $hs.Thunk();
        hs_sat26DASN.evaluateOnce = function () {
            var hs_sat26DASM = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAE9, hs_zddRead126DAEa, hs_zddRead226DAEb, hs_zddRead326DAEc, hs_zddRead426DAEd, hs_zddRead526DAEe, hs_zddRead626DAEf, hs_zddRead726DAEg, hs_zddRead826DAEh, hs_zddRead926DAEi);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DASM);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DASN);
    };
    hs_zdcreadList2425vc7i.evaluate = function (hs_zddRead26DAEv, hs_zddRead126DAEw, hs_zddRead226DAEx, hs_zddRead326DAEy, hs_zddRead426DAEz, hs_zddRead526DAEA, hs_zddRead626DAEB, hs_zddRead726DAEC, hs_zddRead826DAED, hs_zddRead926DAEE) {
        var hs_sat26DASP = new $hs.Data(1);
        hs_sat26DASP.data = [0];
        var hs_sat26DASQ = new $hs.Thunk();
        hs_sat26DASQ.evaluateOnce = function () {
            var hs_sat26DASO = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAEv, hs_zddRead126DAEw, hs_zddRead226DAEx, hs_zddRead326DAEy, hs_zddRead426DAEz, hs_zddRead526DAEA, hs_zddRead626DAEB, hs_zddRead726DAEC, hs_zddRead826DAED, hs_zddRead926DAEE);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26DASO);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DASQ, hs_sat26DASP);
    };
    hs_zdcreadsPrec2425vc7k.evaluate = function (hs_zddRead26DAES, hs_zddRead126DAET, hs_zddRead226DAEU, hs_zddRead326DAEV, hs_zddRead426DAEW, hs_zddRead526DAEX, hs_zddRead626DAEY, hs_zddRead726DAEZ, hs_zddRead826DAF0, hs_zddRead926DAF1) {
        var hs_sat26DASS = new $hs.Thunk();
        hs_sat26DASS.evaluateOnce = function () {
            var hs_sat26DASR = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAES, hs_zddRead126DAET, hs_zddRead226DAEU, hs_zddRead326DAEV, hs_zddRead426DAEW, hs_zddRead526DAEX, hs_zddRead626DAEY, hs_zddRead726DAEZ, hs_zddRead826DAF0, hs_zddRead926DAF1);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DASR);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DASS);
    };
    hs_zdcreadPrec2325vc8P.evaluate = function (hs_zddRead26DAFg, hs_zddRead126DAFh, hs_zddRead226DAFi, hs_zddRead326DAFj, hs_zddRead426DAFk, hs_zddRead526DAFl, hs_zddRead626DAFm, hs_zddRead726DAFn, hs_zddRead826DAFA) {
        var hs_optional526DAFS = new $hs.Thunk();
        hs_optional526DAFS.evaluateOnce = function () {
            var hs_sat26DASU = new $hs.Thunk();
            hs_sat26DASU.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional526DAFS);
            };
            var hs_sat26DAT2 = new $hs.Thunk();
            hs_sat26DAT2.evaluateOnce = function () {
                var hs_sat26DAT1 = new $hs.Thunk();
                hs_sat26DAT1.evaluateOnce = function () {
                    var hs_sat26DASZ = new $hs.Func(1);
                    hs_sat26DASZ.evaluate = function (hs_ds26DAFq) {
                        var hs_wild26DAST = hs_ds26DAFq;
                        if (hs_ds26DAFq.notEvaluated) {
                            hs_wild26DAST = hs_ds26DAFq.hscall();
                        }
                        var hs_a26DAFD = hs_wild26DAST.data[0];
                        var hs_b26DAFE = hs_wild26DAST.data[1];
                        var hs_c26DAFF = hs_wild26DAST.data[2];
                        var hs_d26DAFG = hs_wild26DAST.data[3];
                        var hs_e26DAFH = hs_wild26DAST.data[4];
                        var hs_f26DAFI = hs_wild26DAST.data[5];
                        var hs_g26DAFJ = hs_wild26DAST.data[6];
                        var hs_h26DAFK = hs_wild26DAST.data[7];
                        var hs_sat26DASY = new $hs.Thunk();
                        hs_sat26DASY.evaluateOnce = function () {
                            var hs_sat26DASW = new $hs.Func(1);
                            hs_sat26DASW.evaluate = function (hs_i26DAFL) {
                                var hs_sat26DASV = new $hs.Data(1);
                                hs_sat26DASV.data = [hs_a26DAFD, hs_b26DAFE, hs_c26DAFF, hs_d26DAFG, hs_e26DAFH, hs_f26DAFI, hs_g26DAFJ, hs_h26DAFK, hs_i26DAFL];
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DASV);
                            };
                            var hs_sat26DASX = new $hs.Thunk();
                            hs_sat26DASX.evaluateOnce = function () {
                                return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_zddRead826DAFA);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DASX, hs_sat26DASW);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_readzucomma25s6VT, hs_sat26DASY);
                    };
                    var hs_sat26DAT0 = new $hs.Thunk();
                    hs_sat26DAT0.evaluateOnce = function () {
                        return hs_readzutup825s6VZ.hscall(hs_zddRead26DAFg, hs_zddRead126DAFh, hs_zddRead226DAFi, hs_zddRead326DAFj, hs_zddRead426DAFk, hs_zddRead526DAFl, hs_zddRead626DAFm, hs_zddRead726DAFn);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, hs_sat26DAT0, hs_sat26DASZ);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26DAT1);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DAT2, hs_sat26DASU);
        };
        if (hs_optional526DAFS.notEvaluated) {
            return hs_optional526DAFS.hscall();
        } else {
            return hs_optional526DAFS;
        }
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DAG9, hs_zddRead126DAGa, hs_zddRead226DAGb, hs_zddRead326DAGc, hs_zddRead426DAGd, hs_zddRead526DAGe, hs_zddRead626DAGf, hs_zddRead726DAGg, hs_zddRead826DAGh) {
        var hs_sat26DAT3 = new $hs.Thunk();
        hs_sat26DAT3.evaluateOnce = function () {
            return hs_zdcreadListPrec2525vc9F.hscall(hs_zddRead26DAG9, hs_zddRead126DAGa, hs_zddRead226DAGb, hs_zddRead326DAGc, hs_zddRead426DAGd, hs_zddRead526DAGe, hs_zddRead626DAGf, hs_zddRead726DAGg, hs_zddRead826DAGh);
        };
        var hs_sat26DAT4 = new $hs.Thunk();
        hs_sat26DAT4.evaluateOnce = function () {
            return hs_zdcreadPrec2325vc8P.hscall(hs_zddRead26DAG9, hs_zddRead126DAGa, hs_zddRead226DAGb, hs_zddRead326DAGc, hs_zddRead426DAGd, hs_zddRead526DAGe, hs_zddRead626DAGf, hs_zddRead726DAGg, hs_zddRead826DAGh);
        };
        var hs_sat26DAT5 = new $hs.Thunk();
        hs_sat26DAT5.evaluateOnce = function () {
            return hs_zdcreadList2525vc9H.hscall(hs_zddRead26DAG9, hs_zddRead126DAGa, hs_zddRead226DAGb, hs_zddRead326DAGc, hs_zddRead426DAGd, hs_zddRead526DAGe, hs_zddRead626DAGf, hs_zddRead726DAGg, hs_zddRead826DAGh);
        };
        var hs_sat26DAT6 = new $hs.Thunk();
        hs_sat26DAT6.evaluateOnce = function () {
            return hs_zdcreadsPrec2525vc9J.hscall(hs_zddRead26DAG9, hs_zddRead126DAGa, hs_zddRead226DAGb, hs_zddRead326DAGc, hs_zddRead426DAGd, hs_zddRead526DAGe, hs_zddRead626DAGf, hs_zddRead726DAGg, hs_zddRead826DAGh);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DAT6, hs_sat26DAT5, hs_sat26DAT4, hs_sat26DAT3];
        return $res;
    };
    hs_zdcreadListPrec2525vc9F.evaluate = function (hs_zddRead26DAGv, hs_zddRead126DAGw, hs_zddRead226DAGx, hs_zddRead326DAGy, hs_zddRead426DAGz, hs_zddRead526DAGA, hs_zddRead626DAGB, hs_zddRead726DAGC, hs_zddRead826DAGD) {
        var hs_sat26DAT8 = new $hs.Thunk();
        hs_sat26DAT8.evaluateOnce = function () {
            var hs_sat26DAT7 = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAGv, hs_zddRead126DAGw, hs_zddRead226DAGx, hs_zddRead326DAGy, hs_zddRead426DAGz, hs_zddRead526DAGA, hs_zddRead626DAGB, hs_zddRead726DAGC, hs_zddRead826DAGD);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DAT7);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DAT8);
    };
    hs_zdcreadList2525vc9H.evaluate = function (hs_zddRead26DAGP, hs_zddRead126DAGQ, hs_zddRead226DAGR, hs_zddRead326DAGS, hs_zddRead426DAGT, hs_zddRead526DAGU, hs_zddRead626DAGV, hs_zddRead726DAGW, hs_zddRead826DAGX) {
        var hs_sat26DATa = new $hs.Data(1);
        hs_sat26DATa.data = [0];
        var hs_sat26DATb = new $hs.Thunk();
        hs_sat26DATb.evaluateOnce = function () {
            var hs_sat26DAT9 = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAGP, hs_zddRead126DAGQ, hs_zddRead226DAGR, hs_zddRead326DAGS, hs_zddRead426DAGT, hs_zddRead526DAGU, hs_zddRead626DAGV, hs_zddRead726DAGW, hs_zddRead826DAGX);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26DAT9);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DATb, hs_sat26DATa);
    };
    hs_zdcreadsPrec2525vc9J.evaluate = function (hs_zddRead26DAHa, hs_zddRead126DAHb, hs_zddRead226DAHc, hs_zddRead326DAHd, hs_zddRead426DAHe, hs_zddRead526DAHf, hs_zddRead626DAHg, hs_zddRead726DAHh, hs_zddRead826DAHi) {
        var hs_sat26DATd = new $hs.Thunk();
        hs_sat26DATd.evaluateOnce = function () {
            var hs_sat26DATc = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAHa, hs_zddRead126DAHb, hs_zddRead226DAHc, hs_zddRead326DAHd, hs_zddRead426DAHe, hs_zddRead526DAHf, hs_zddRead626DAHg, hs_zddRead726DAHh, hs_zddRead826DAHi);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DATc);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DATd);
    };
    hs_zdcreadPrec2425vcb6.evaluate = function (hs_zddRead26DAHw, hs_zddRead126DAHx, hs_zddRead226DAHy, hs_zddRead326DAHz, hs_zddRead426DAHA, hs_zddRead526DAHB, hs_zddRead626DAHC, hs_zddRead726DAHD) {
        var hs_optional526DAHG = new $hs.Thunk();
        hs_optional526DAHG.evaluateOnce = function () {
            var hs_sat26DATe = new $hs.Thunk();
            hs_sat26DATe.evaluateOnce = function () {
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_optional526DAHG);
            };
            var hs_sat26DATg = new $hs.Thunk();
            hs_sat26DATg.evaluateOnce = function () {
                var hs_sat26DATf = new $hs.Thunk();
                hs_sat26DATf.evaluateOnce = function () {
                    return hs_readzutup825s6VZ.hscall(hs_zddRead26DAHw, hs_zddRead126DAHx, hs_zddRead226DAHy, hs_zddRead326DAHz, hs_zddRead426DAHA, hs_zddRead526DAHB, hs_zddRead626DAHC, hs_zddRead726DAHD);
                };
                return $hs.modules.GHCziRead.hs_paren.hscall(hs_sat26DATf);
            };
            return $hs.modules.TextziParserCombinatorsziReadPrec.hs_zpzpzp.hscall(hs_sat26DATg, hs_sat26DATe);
        };
        if (hs_optional526DAHG.notEvaluated) {
            return hs_optional526DAHG.hscall();
        } else {
            return hs_optional526DAHG;
        }
    };
    this.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddRead26DAHW, hs_zddRead126DAHX, hs_zddRead226DAHY, hs_zddRead326DAHZ, hs_zddRead426DAI0, hs_zddRead526DAI1, hs_zddRead626DAI2, hs_zddRead726DAI3) {
        var hs_sat26DATh = new $hs.Thunk();
        hs_sat26DATh.evaluateOnce = function () {
            return hs_zdcreadListPrec2625vcbt.hscall(hs_zddRead26DAHW, hs_zddRead126DAHX, hs_zddRead226DAHY, hs_zddRead326DAHZ, hs_zddRead426DAI0, hs_zddRead526DAI1, hs_zddRead626DAI2, hs_zddRead726DAI3);
        };
        var hs_sat26DATi = new $hs.Thunk();
        hs_sat26DATi.evaluateOnce = function () {
            return hs_zdcreadPrec2425vcb6.hscall(hs_zddRead26DAHW, hs_zddRead126DAHX, hs_zddRead226DAHY, hs_zddRead326DAHZ, hs_zddRead426DAI0, hs_zddRead526DAI1, hs_zddRead626DAI2, hs_zddRead726DAI3);
        };
        var hs_sat26DATj = new $hs.Thunk();
        hs_sat26DATj.evaluateOnce = function () {
            return hs_zdcreadList2625vcbv.hscall(hs_zddRead26DAHW, hs_zddRead126DAHX, hs_zddRead226DAHY, hs_zddRead326DAHZ, hs_zddRead426DAI0, hs_zddRead526DAI1, hs_zddRead626DAI2, hs_zddRead726DAI3);
        };
        var hs_sat26DATk = new $hs.Thunk();
        hs_sat26DATk.evaluateOnce = function () {
            return hs_zdcreadsPrec2625vcbx.hscall(hs_zddRead26DAHW, hs_zddRead126DAHX, hs_zddRead226DAHY, hs_zddRead326DAHZ, hs_zddRead426DAI0, hs_zddRead526DAI1, hs_zddRead626DAI2, hs_zddRead726DAI3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DATk, hs_sat26DATj, hs_sat26DATi, hs_sat26DATh];
        return $res;
    };
    hs_zdcreadListPrec2625vcbt.evaluate = function (hs_zddRead26DAIg, hs_zddRead126DAIh, hs_zddRead226DAIi, hs_zddRead326DAIj, hs_zddRead426DAIk, hs_zddRead526DAIl, hs_zddRead626DAIm, hs_zddRead726DAIn) {
        var hs_sat26DATm = new $hs.Thunk();
        hs_sat26DATm.evaluateOnce = function () {
            var hs_sat26DATl = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAIg, hs_zddRead126DAIh, hs_zddRead226DAIi, hs_zddRead326DAIj, hs_zddRead426DAIk, hs_zddRead526DAIl, hs_zddRead626DAIm, hs_zddRead726DAIn);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DATl);
        };
        return $hs.modules.GHCziRead.hs_list.hscall(hs_sat26DATm);
    };
    hs_zdcreadList2625vcbv.evaluate = function (hs_zddRead26DAIy, hs_zddRead126DAIz, hs_zddRead226DAIA, hs_zddRead326DAIB, hs_zddRead426DAIC, hs_zddRead526DAID, hs_zddRead626DAIE, hs_zddRead726DAIF) {
        var hs_sat26DATo = new $hs.Data(1);
        hs_sat26DATo.data = [0];
        var hs_sat26DATp = new $hs.Thunk();
        hs_sat26DATp.evaluateOnce = function () {
            var hs_sat26DATn = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAIy, hs_zddRead126DAIz, hs_zddRead226DAIA, hs_zddRead326DAIB, hs_zddRead426DAIC, hs_zddRead526DAID, hs_zddRead626DAIE, hs_zddRead726DAIF);
            return $hs.modules.GHCziRead.hs_readListPrec.hscall(hs_sat26DATn);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DATp, hs_sat26DATo);
    };
    hs_zdcreadsPrec2625vcbx.evaluate = function (hs_zddRead26DAIR, hs_zddRead126DAIS, hs_zddRead226DAIT, hs_zddRead326DAIU, hs_zddRead426DAIV, hs_zddRead526DAIW, hs_zddRead626DAIX, hs_zddRead726DAIY) {
        var hs_sat26DATr = new $hs.Thunk();
        hs_sat26DATr.evaluateOnce = function () {
            var hs_sat26DATq = $hs.modules.GHCziRead.hs_zdfReadZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddRead26DAIR, hs_zddRead126DAIS, hs_zddRead226DAIT, hs_zddRead326DAIU, hs_zddRead426DAIV, hs_zddRead526DAIW, hs_zddRead626DAIX, hs_zddRead726DAIY);
            return $hs.modules.GHCziRead.hs_readPrec.hscall(hs_sat26DATq);
        };
        return $hs.modules.TextziParserCombinatorsziReadPrec.hs_readPreczutozuS.hscall(hs_sat26DATr);
    };
    this.hs_DZCRead.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
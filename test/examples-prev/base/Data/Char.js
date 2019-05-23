
$hs.modules.DataziChar = new $hs.Module();
$hs.modules.DataziChar.dependencies = ["GHC.Types", "GHC.Base", "GHC.Enum", "GHC.Num", "GHC.Real", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.Arr", "GHC.Read", "GHC.Unicode", "Foreign.C.Types", "Text.ParserCombinators.ReadPrec"];
$hs.modules.DataziChar.initBeforeDependencies = function () {
    this.hs_zdfBoundedGeneralCategory = new $hs.Data(1);
    this.hs_zdfShowGeneralCategory = new $hs.Data(1);
    this.hs_zdfReadGeneralCategory = new $hs.Data(1);
    this.hs_zdfEnumGeneralCategory = new $hs.Data(1);
    this.hs_zdfEqGeneralCategory = new $hs.Data(1);
    this.hs_zdfOrdGeneralCategory = new $hs.Data(1);
    this.hs_zdfIxGeneralCategory = new $hs.Data(1);
    this.hs_digitToInt = new $hs.Func(1);
    this.hs_generalCategory = new $hs.Func(1);
    this.hs_isLetter = new $hs.Func(1);
    this.hs_isMark = new $hs.Func(1);
    this.hs_isNumber = new $hs.Func(1);
    this.hs_isPunctuation = new $hs.Func(1);
    this.hs_isSymbol = new $hs.Func(1);
    this.hs_isSeparator = new $hs.Func(1);
    this.hs_UppercaseLetter = new $hs.Data(1);
    this.hs_LowercaseLetter = new $hs.Data(2);
    this.hs_TitlecaseLetter = new $hs.Data(3);
    this.hs_ModifierLetter = new $hs.Data(4);
    this.hs_OtherLetter = new $hs.Data(5);
    this.hs_NonSpacingMark = new $hs.Data(6);
    this.hs_SpacingCombiningMark = new $hs.Data(7);
    this.hs_EnclosingMark = new $hs.Data(8);
    this.hs_DecimalNumber = new $hs.Data(9);
    this.hs_LetterNumber = new $hs.Data(10);
    this.hs_OtherNumber = new $hs.Data(11);
    this.hs_ConnectorPunctuation = new $hs.Data(12);
    this.hs_DashPunctuation = new $hs.Data(13);
    this.hs_OpenPunctuation = new $hs.Data(14);
    this.hs_ClosePunctuation = new $hs.Data(15);
    this.hs_InitialQuote = new $hs.Data(16);
    this.hs_FinalQuote = new $hs.Data(17);
    this.hs_OtherPunctuation = new $hs.Data(18);
    this.hs_MathSymbol = new $hs.Data(19);
    this.hs_CurrencySymbol = new $hs.Data(20);
    this.hs_ModifierSymbol = new $hs.Data(21);
    this.hs_OtherSymbol = new $hs.Data(22);
    this.hs_Space = new $hs.Data(23);
    this.hs_LineSeparator = new $hs.Data(24);
    this.hs_ParagraphSeparator = new $hs.Data(25);
    this.hs_Control = new $hs.Data(26);
    this.hs_Format = new $hs.Data(27);
    this.hs_Surrogate = new $hs.Data(28);
    this.hs_PrivateUse = new $hs.Data(29);
    this.hs_NotAssigned = new $hs.Data(30);
    this.hs_zdfBoundedGeneralCategory.notEvaluated = true;
    this.hs_zdfBoundedGeneralCategory.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_zdfShowGeneralCategory.notEvaluated = true;
    this.hs_zdfShowGeneralCategory.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_zdfReadGeneralCategory.notEvaluated = true;
    this.hs_zdfReadGeneralCategory.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_zdfEnumGeneralCategory.notEvaluated = true;
    this.hs_zdfEnumGeneralCategory.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_zdfEqGeneralCategory.notEvaluated = true;
    this.hs_zdfEqGeneralCategory.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_zdfOrdGeneralCategory.notEvaluated = true;
    this.hs_zdfOrdGeneralCategory.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_zdfIxGeneralCategory.notEvaluated = true;
    this.hs_zdfIxGeneralCategory.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_digitToInt.notEvaluated = true;
    this.hs_digitToInt.evaluate = function (hs_c26DEn2) {
        $hs.modules.DataziChar.loadDependencies();
        return this.evaluate(hs_c26DEn2);
    };
    this.hs_generalCategory.notEvaluated = true;
    this.hs_generalCategory.evaluate = function (hs_c26DEny) {
        $hs.modules.DataziChar.loadDependencies();
        return this.evaluate(hs_c26DEny);
    };
    this.hs_isLetter.notEvaluated = true;
    this.hs_isLetter.evaluate = function (hs_c26DEnE) {
        $hs.modules.DataziChar.loadDependencies();
        return this.evaluate(hs_c26DEnE);
    };
    this.hs_isMark.notEvaluated = true;
    this.hs_isMark.evaluate = function (hs_c26DEnH) {
        $hs.modules.DataziChar.loadDependencies();
        return this.evaluate(hs_c26DEnH);
    };
    this.hs_isNumber.notEvaluated = true;
    this.hs_isNumber.evaluate = function (hs_c26DEnK) {
        $hs.modules.DataziChar.loadDependencies();
        return this.evaluate(hs_c26DEnK);
    };
    this.hs_isPunctuation.notEvaluated = true;
    this.hs_isPunctuation.evaluate = function (hs_c26DEnN) {
        $hs.modules.DataziChar.loadDependencies();
        return this.evaluate(hs_c26DEnN);
    };
    this.hs_isSymbol.notEvaluated = true;
    this.hs_isSymbol.evaluate = function (hs_c26DEnQ) {
        $hs.modules.DataziChar.loadDependencies();
        return this.evaluate(hs_c26DEnQ);
    };
    this.hs_isSeparator.notEvaluated = true;
    this.hs_isSeparator.evaluate = function (hs_c26DEnT) {
        $hs.modules.DataziChar.loadDependencies();
        return this.evaluate(hs_c26DEnT);
    };
    this.hs_UppercaseLetter.notEvaluated = true;
    this.hs_UppercaseLetter.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_LowercaseLetter.notEvaluated = true;
    this.hs_LowercaseLetter.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_TitlecaseLetter.notEvaluated = true;
    this.hs_TitlecaseLetter.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_ModifierLetter.notEvaluated = true;
    this.hs_ModifierLetter.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_OtherLetter.notEvaluated = true;
    this.hs_OtherLetter.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_NonSpacingMark.notEvaluated = true;
    this.hs_NonSpacingMark.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_SpacingCombiningMark.notEvaluated = true;
    this.hs_SpacingCombiningMark.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_EnclosingMark.notEvaluated = true;
    this.hs_EnclosingMark.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_DecimalNumber.notEvaluated = true;
    this.hs_DecimalNumber.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_LetterNumber.notEvaluated = true;
    this.hs_LetterNumber.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_OtherNumber.notEvaluated = true;
    this.hs_OtherNumber.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_ConnectorPunctuation.notEvaluated = true;
    this.hs_ConnectorPunctuation.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_DashPunctuation.notEvaluated = true;
    this.hs_DashPunctuation.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_OpenPunctuation.notEvaluated = true;
    this.hs_OpenPunctuation.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_ClosePunctuation.notEvaluated = true;
    this.hs_ClosePunctuation.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_InitialQuote.notEvaluated = true;
    this.hs_InitialQuote.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_FinalQuote.notEvaluated = true;
    this.hs_FinalQuote.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_OtherPunctuation.notEvaluated = true;
    this.hs_OtherPunctuation.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_MathSymbol.notEvaluated = true;
    this.hs_MathSymbol.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_CurrencySymbol.notEvaluated = true;
    this.hs_CurrencySymbol.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_ModifierSymbol.notEvaluated = true;
    this.hs_ModifierSymbol.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_OtherSymbol.notEvaluated = true;
    this.hs_OtherSymbol.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_Space.notEvaluated = true;
    this.hs_Space.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_LineSeparator.notEvaluated = true;
    this.hs_LineSeparator.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_ParagraphSeparator.notEvaluated = true;
    this.hs_ParagraphSeparator.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_Control.notEvaluated = true;
    this.hs_Control.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_Format.notEvaluated = true;
    this.hs_Format.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_Surrogate.notEvaluated = true;
    this.hs_Surrogate.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_PrivateUse.notEvaluated = true;
    this.hs_PrivateUse.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
    this.hs_NotAssigned.notEvaluated = true;
    this.hs_NotAssigned.evaluate = function () {
        $hs.modules.DataziChar.loadDependencies();
        return this;
    };
};
$hs.modules.DataziChar.initAfterDependencies = function () {
    this.hs_zdfBoundedGeneralCategory.notEvaluated = false;
    this.hs_zdfBoundedGeneralCategory.evaluate = function () {
        return this;
    };
    this.hs_zdfShowGeneralCategory.notEvaluated = false;
    this.hs_zdfShowGeneralCategory.evaluate = function () {
        return this;
    };
    this.hs_zdfReadGeneralCategory.notEvaluated = false;
    this.hs_zdfReadGeneralCategory.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumGeneralCategory.notEvaluated = false;
    this.hs_zdfEnumGeneralCategory.evaluate = function () {
        return this;
    };
    this.hs_zdfEqGeneralCategory.notEvaluated = false;
    this.hs_zdfEqGeneralCategory.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdGeneralCategory.notEvaluated = false;
    this.hs_zdfOrdGeneralCategory.evaluate = function () {
        return this;
    };
    this.hs_zdfIxGeneralCategory.notEvaluated = false;
    this.hs_zdfIxGeneralCategory.evaluate = function () {
        return this;
    };
    this.hs_digitToInt.notEvaluated = false;
    this.hs_generalCategory.notEvaluated = false;
    this.hs_isLetter.notEvaluated = false;
    this.hs_isMark.notEvaluated = false;
    this.hs_isNumber.notEvaluated = false;
    this.hs_isPunctuation.notEvaluated = false;
    this.hs_isSymbol.notEvaluated = false;
    this.hs_isSeparator.notEvaluated = false;
    this.hs_UppercaseLetter.notEvaluated = false;
    this.hs_UppercaseLetter.evaluate = function () {
        return this;
    };
    this.hs_LowercaseLetter.notEvaluated = false;
    this.hs_LowercaseLetter.evaluate = function () {
        return this;
    };
    this.hs_TitlecaseLetter.notEvaluated = false;
    this.hs_TitlecaseLetter.evaluate = function () {
        return this;
    };
    this.hs_ModifierLetter.notEvaluated = false;
    this.hs_ModifierLetter.evaluate = function () {
        return this;
    };
    this.hs_OtherLetter.notEvaluated = false;
    this.hs_OtherLetter.evaluate = function () {
        return this;
    };
    this.hs_NonSpacingMark.notEvaluated = false;
    this.hs_NonSpacingMark.evaluate = function () {
        return this;
    };
    this.hs_SpacingCombiningMark.notEvaluated = false;
    this.hs_SpacingCombiningMark.evaluate = function () {
        return this;
    };
    this.hs_EnclosingMark.notEvaluated = false;
    this.hs_EnclosingMark.evaluate = function () {
        return this;
    };
    this.hs_DecimalNumber.notEvaluated = false;
    this.hs_DecimalNumber.evaluate = function () {
        return this;
    };
    this.hs_LetterNumber.notEvaluated = false;
    this.hs_LetterNumber.evaluate = function () {
        return this;
    };
    this.hs_OtherNumber.notEvaluated = false;
    this.hs_OtherNumber.evaluate = function () {
        return this;
    };
    this.hs_ConnectorPunctuation.notEvaluated = false;
    this.hs_ConnectorPunctuation.evaluate = function () {
        return this;
    };
    this.hs_DashPunctuation.notEvaluated = false;
    this.hs_DashPunctuation.evaluate = function () {
        return this;
    };
    this.hs_OpenPunctuation.notEvaluated = false;
    this.hs_OpenPunctuation.evaluate = function () {
        return this;
    };
    this.hs_ClosePunctuation.notEvaluated = false;
    this.hs_ClosePunctuation.evaluate = function () {
        return this;
    };
    this.hs_InitialQuote.notEvaluated = false;
    this.hs_InitialQuote.evaluate = function () {
        return this;
    };
    this.hs_FinalQuote.notEvaluated = false;
    this.hs_FinalQuote.evaluate = function () {
        return this;
    };
    this.hs_OtherPunctuation.notEvaluated = false;
    this.hs_OtherPunctuation.evaluate = function () {
        return this;
    };
    this.hs_MathSymbol.notEvaluated = false;
    this.hs_MathSymbol.evaluate = function () {
        return this;
    };
    this.hs_CurrencySymbol.notEvaluated = false;
    this.hs_CurrencySymbol.evaluate = function () {
        return this;
    };
    this.hs_ModifierSymbol.notEvaluated = false;
    this.hs_ModifierSymbol.evaluate = function () {
        return this;
    };
    this.hs_OtherSymbol.notEvaluated = false;
    this.hs_OtherSymbol.evaluate = function () {
        return this;
    };
    this.hs_Space.notEvaluated = false;
    this.hs_Space.evaluate = function () {
        return this;
    };
    this.hs_LineSeparator.notEvaluated = false;
    this.hs_LineSeparator.evaluate = function () {
        return this;
    };
    this.hs_ParagraphSeparator.notEvaluated = false;
    this.hs_ParagraphSeparator.evaluate = function () {
        return this;
    };
    this.hs_Control.notEvaluated = false;
    this.hs_Control.evaluate = function () {
        return this;
    };
    this.hs_Format.notEvaluated = false;
    this.hs_Format.evaluate = function () {
        return this;
    };
    this.hs_Surrogate.notEvaluated = false;
    this.hs_Surrogate.evaluate = function () {
        return this;
    };
    this.hs_PrivateUse.notEvaluated = false;
    this.hs_PrivateUse.evaluate = function () {
        return this;
    };
    this.hs_NotAssigned.notEvaluated = false;
    this.hs_NotAssigned.evaluate = function () {
        return this;
    };
    var hs_zdtag2conzuGeneralCategory25t52u = new $hs.Func(1);
    var hs_zdmaxtagzuGeneralCategory25t52s = new $hs.Data(1);
    var hs_zdcinRange25vfKz = new $hs.Func(2);
    var hs_zdcunsafeIndex25vfKR = new $hs.Func(2);
    var hs_zdcrange25vfL6 = new $hs.Func(1);
    var hs_zdcshowsPrec25vfLm = new $hs.Func(2);
    var hs_sat26DEoA = new $hs.Thunk();
    var hs_zdcshowList25vfLX = new $hs.Thunk();
    var hs_zdcshow25vfLZ = new $hs.Thunk();
    var hs_sat26DEqy = new $hs.Thunk();
    var hs_zdcreadPrec25vfM3 = new $hs.Thunk();
    var hs_zdcreadListPrec25vfO2 = new $hs.Thunk();
    var hs_zdcreadList25vfO4 = new $hs.Thunk();
    var hs_zdcreadsPrec25vfO6 = new $hs.Thunk();
    var hs_zdcenumFromThen25vfO8 = new $hs.Func(2);
    var hs_zdcenumFrom25vfOp = new $hs.Func(1);
    var hs_zdcfromEnum25vfOx = new $hs.Func(1);
    var hs_zdctoEnum25vfOD = new $hs.Func(1);
    var hs_zdcpred25vfOY = new $hs.Func(1);
    var hs_zdcsucc25vfPd = new $hs.Func(1);
    var hs_zdcenumFromThenTo25vfPr = new $hs.Thunk();
    var hs_zdcenumFromTo25vfPt = new $hs.Thunk();
    var hs_zdczlze25vfPv = new $hs.Func(2);
    var hs_zdczg25vfPF = new $hs.Func(2);
    var hs_zdczgze25vfPP = new $hs.Func(2);
    var hs_zdczl25vfPZ = new $hs.Func(2);
    var hs_zdccompare25vfQ9 = new $hs.Func(2);
    var hs_zdczeze25vfQl = new $hs.Func(2);
    var hs_zdczsze25vfQv = new $hs.Func(2);
    var hs_zdcmin25vfQC = new $hs.Thunk();
    var hs_zdcmax25vfQE = new $hs.Thunk();
    var hs_zdcunsafeRangeSizze25vfQG = new $hs.Thunk();
    var hs_zdcrangeSizze25vfQI = new $hs.Thunk();
    var hs_zdcindex25vfQK = new $hs.Thunk();
    hs_zdtag2conzuGeneralCategory25t52u.evaluate = function (hs_ds26DEgK) {
        var hs_wild26DEnV = hs_ds26DEgK;
        if (hs_ds26DEgK.notEvaluated) {
            hs_wild26DEnV = hs_ds26DEgK.hscall();
        }
        var hs_a26DEgN = hs_wild26DEnV.data[0];
        throw "primitive operation tagToEnum#. Not implemeted yet.";
    };
    hs_zdmaxtagzuGeneralCategory25t52s.data = [29];
    hs_zdcinRange25vfKz.evaluate = function (hs_ds26DEgS, hs_c26DEh0) {
        var hs_wild26DEnX = hs_ds26DEgS;
        if (hs_ds26DEgS.notEvaluated) {
            hs_wild26DEnX = hs_ds26DEgS.hscall();
        }
        var hs_a26DEgW = hs_wild26DEnX.data[0];
        var hs_b26DEgY = hs_wild26DEnX.data[1];
        var hs_azh26DEh3 = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26DEgW);
        var hs_bzh26DEh5 = $hs.modules.GHCziBase.hs_getTag.hscall(hs_b26DEgY);
        var hs_czh26DEh2 = $hs.modules.GHCziBase.hs_getTag.hscall(hs_c26DEh0);
        var hs_wild126DEnW = hs_czh26DEh2 >= hs_azh26DEh3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild126DEnW.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return hs_czh26DEh2 <= hs_bzh26DEh5 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        }
    };
    hs_zdcunsafeIndex25vfKR.evaluate = function (hs_c26DEha, hs_d26DEhg) {
        var hs_wild26DEnZ = hs_c26DEha;
        if (hs_c26DEha.notEvaluated) {
            hs_wild26DEnZ = hs_c26DEha.hscall();
        }
        var hs_a26DEhe = hs_wild26DEnZ.data[0];
        var hs_azh26DEhj = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26DEhe);
        var hs_dzh26DEhi = $hs.modules.GHCziBase.hs_getTag.hscall(hs_d26DEhg);
        var hs_sat26DEnY = ($hs.Int.addCarry(hs_dzh26DEhi, ~hs_azh26DEhj, 1))[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DEnY];
        return $res;
    };
    hs_zdcrange25vfL6.evaluate = function (hs_ds26DEho) {
        var hs_wild26DEo1 = hs_ds26DEho;
        if (hs_ds26DEho.notEvaluated) {
            hs_wild26DEo1 = hs_ds26DEho.hscall();
        }
        var hs_a26DEhs = hs_wild26DEo1.data[0];
        var hs_b26DEhu = hs_wild26DEo1.data[1];
        var hs_azh26DEhw = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26DEhs);
        var hs_bzh26DEhy = $hs.modules.GHCziBase.hs_getTag.hscall(hs_b26DEhu);
        var hs_sat26DEo4 = new $hs.Thunk();
        hs_sat26DEo4.evaluateOnce = function () {
            var hs_sat26DEo2 = new $hs.Data(1);
            hs_sat26DEo2.data = [hs_bzh26DEhy];
            var hs_sat26DEo3 = new $hs.Data(1);
            hs_sat26DEo3.data = [hs_azh26DEhw];
            return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26DEo3, hs_sat26DEo2);
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuGeneralCategory25t52u, hs_sat26DEo4);
    };
    this.hs_zdfBoundedGeneralCategory.data = [$hs.modules.DataziChar.hs_UppercaseLetter, $hs.modules.DataziChar.hs_NotAssigned];
    hs_zdcshowsPrec25vfLm.evaluate = function (hs_ds26DEib, hs_ds126DEhF) {
        var hs_wild26DEo5 = hs_ds126DEhF;
        if (hs_ds126DEhF.notEvaluated) {
            hs_wild26DEo5 = hs_ds126DEhF.hscall();
        }
        switch (hs_wild26DEo5.tag) {
        case 1:
            var hs_sat26DEo6 = new $hs.Thunk();
            hs_sat26DEo6.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("UppercaseLetter\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEo6);
        case 2:
            var hs_sat26DEo7 = new $hs.Thunk();
            hs_sat26DEo7.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("LowercaseLetter\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEo7);
        case 3:
            var hs_sat26DEo8 = new $hs.Thunk();
            hs_sat26DEo8.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("TitlecaseLetter\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEo8);
        case 4:
            var hs_sat26DEo9 = new $hs.Thunk();
            hs_sat26DEo9.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ModifierLetter\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEo9);
        case 5:
            var hs_sat26DEoa = new $hs.Thunk();
            hs_sat26DEoa.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("OtherLetter\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEoa);
        case 6:
            var hs_sat26DEob = new $hs.Thunk();
            hs_sat26DEob.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("NonSpacingMark\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEob);
        case 7:
            var hs_sat26DEoc = new $hs.Thunk();
            hs_sat26DEoc.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("SpacingCombiningMark\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEoc);
        case 8:
            var hs_sat26DEod = new $hs.Thunk();
            hs_sat26DEod.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("EnclosingMark\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEod);
        case 9:
            var hs_sat26DEoe = new $hs.Thunk();
            hs_sat26DEoe.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("DecimalNumber\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEoe);
        case 10:
            var hs_sat26DEof = new $hs.Thunk();
            hs_sat26DEof.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("LetterNumber\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEof);
        case 11:
            var hs_sat26DEog = new $hs.Thunk();
            hs_sat26DEog.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("OtherNumber\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEog);
        case 12:
            var hs_sat26DEoh = new $hs.Thunk();
            hs_sat26DEoh.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ConnectorPunctuation\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEoh);
        case 13:
            var hs_sat26DEoi = new $hs.Thunk();
            hs_sat26DEoi.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("DashPunctuation\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEoi);
        case 14:
            var hs_sat26DEoj = new $hs.Thunk();
            hs_sat26DEoj.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("OpenPunctuation\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEoj);
        case 15:
            var hs_sat26DEok = new $hs.Thunk();
            hs_sat26DEok.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ClosePunctuation\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEok);
        case 16:
            var hs_sat26DEol = new $hs.Thunk();
            hs_sat26DEol.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("InitialQuote\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEol);
        case 17:
            var hs_sat26DEom = new $hs.Thunk();
            hs_sat26DEom.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("FinalQuote\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEom);
        case 18:
            var hs_sat26DEon = new $hs.Thunk();
            hs_sat26DEon.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("OtherPunctuation\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEon);
        case 19:
            var hs_sat26DEoo = new $hs.Thunk();
            hs_sat26DEoo.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("MathSymbol\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEoo);
        case 20:
            var hs_sat26DEop = new $hs.Thunk();
            hs_sat26DEop.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CurrencySymbol\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEop);
        case 21:
            var hs_sat26DEoq = new $hs.Thunk();
            hs_sat26DEoq.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ModifierSymbol\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEoq);
        case 22:
            var hs_sat26DEor = new $hs.Thunk();
            hs_sat26DEor.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("OtherSymbol\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEor);
        case 23:
            var hs_sat26DEos = new $hs.Thunk();
            hs_sat26DEos.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Space\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEos);
        case 24:
            var hs_sat26DEot = new $hs.Thunk();
            hs_sat26DEot.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("LineSeparator\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEot);
        case 25:
            var hs_sat26DEou = new $hs.Thunk();
            hs_sat26DEou.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ParagraphSeparator\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEou);
        case 26:
            var hs_sat26DEov = new $hs.Thunk();
            hs_sat26DEov.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Control\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEov);
        case 27:
            var hs_sat26DEow = new $hs.Thunk();
            hs_sat26DEow.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Format\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEow);
        case 28:
            var hs_sat26DEox = new $hs.Thunk();
            hs_sat26DEox.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Surrogate\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEox);
        case 29:
            var hs_sat26DEoy = new $hs.Thunk();
            hs_sat26DEoy.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("PrivateUse\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEoy);
        case 30:
            var hs_sat26DEoz = new $hs.Thunk();
            hs_sat26DEoz.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("NotAssigned\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DEoz);
        }
    };
    hs_sat26DEoA.evaluateOnce = function () {
        var hs_sat26DEoB = new $hs.Data(1);
        hs_sat26DEoB.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.DataziChar.hs_zdfShowGeneralCategory, hs_sat26DEoB);
    };
    this.hs_zdfShowGeneralCategory.data = [hs_zdcshowsPrec25vfLm, hs_zdcshow25vfLZ, hs_zdcshowList25vfLX];
    hs_zdcshowList25vfLX.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DEoA);
    };
    hs_zdcshow25vfLZ.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.DataziChar.hs_zdfShowGeneralCategory);
    };
    hs_sat26DEqy.evaluateOnce = function () {
        var hs_sat26DEoC = new $hs.Thunk();
        hs_sat26DEoC.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_NotAssigned);
        };
        var hs_sat26DEoD = new $hs.Thunk();
        hs_sat26DEoD.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("NotAssigned\x00");
        };
        var hs_sat26DEoE = new $hs.Data(1);
        hs_sat26DEoE.data = [hs_sat26DEoD, hs_sat26DEoC];
        var hs_sat26DEoF = new $hs.Data(2);
        hs_sat26DEoF.data = [hs_sat26DEoE, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26DEoG = new $hs.Thunk();
        hs_sat26DEoG.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_PrivateUse);
        };
        var hs_sat26DEoH = new $hs.Thunk();
        hs_sat26DEoH.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("PrivateUse\x00");
        };
        var hs_sat26DEoI = new $hs.Data(1);
        hs_sat26DEoI.data = [hs_sat26DEoH, hs_sat26DEoG];
        var hs_sat26DEoJ = new $hs.Data(2);
        hs_sat26DEoJ.data = [hs_sat26DEoI, hs_sat26DEoF];
        var hs_sat26DEoK = new $hs.Thunk();
        hs_sat26DEoK.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_Surrogate);
        };
        var hs_sat26DEoL = new $hs.Thunk();
        hs_sat26DEoL.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Surrogate\x00");
        };
        var hs_sat26DEoM = new $hs.Data(1);
        hs_sat26DEoM.data = [hs_sat26DEoL, hs_sat26DEoK];
        var hs_sat26DEoN = new $hs.Data(2);
        hs_sat26DEoN.data = [hs_sat26DEoM, hs_sat26DEoJ];
        var hs_sat26DEoO = new $hs.Thunk();
        hs_sat26DEoO.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_Format);
        };
        var hs_sat26DEoP = new $hs.Thunk();
        hs_sat26DEoP.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Format\x00");
        };
        var hs_sat26DEoQ = new $hs.Data(1);
        hs_sat26DEoQ.data = [hs_sat26DEoP, hs_sat26DEoO];
        var hs_sat26DEoR = new $hs.Data(2);
        hs_sat26DEoR.data = [hs_sat26DEoQ, hs_sat26DEoN];
        var hs_sat26DEoS = new $hs.Thunk();
        hs_sat26DEoS.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_Control);
        };
        var hs_sat26DEoT = new $hs.Thunk();
        hs_sat26DEoT.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Control\x00");
        };
        var hs_sat26DEoU = new $hs.Data(1);
        hs_sat26DEoU.data = [hs_sat26DEoT, hs_sat26DEoS];
        var hs_sat26DEoV = new $hs.Data(2);
        hs_sat26DEoV.data = [hs_sat26DEoU, hs_sat26DEoR];
        var hs_sat26DEoW = new $hs.Thunk();
        hs_sat26DEoW.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_ParagraphSeparator);
        };
        var hs_sat26DEoX = new $hs.Thunk();
        hs_sat26DEoX.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ParagraphSeparator\x00");
        };
        var hs_sat26DEoY = new $hs.Data(1);
        hs_sat26DEoY.data = [hs_sat26DEoX, hs_sat26DEoW];
        var hs_sat26DEoZ = new $hs.Data(2);
        hs_sat26DEoZ.data = [hs_sat26DEoY, hs_sat26DEoV];
        var hs_sat26DEp0 = new $hs.Thunk();
        hs_sat26DEp0.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_LineSeparator);
        };
        var hs_sat26DEp1 = new $hs.Thunk();
        hs_sat26DEp1.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("LineSeparator\x00");
        };
        var hs_sat26DEp2 = new $hs.Data(1);
        hs_sat26DEp2.data = [hs_sat26DEp1, hs_sat26DEp0];
        var hs_sat26DEp3 = new $hs.Data(2);
        hs_sat26DEp3.data = [hs_sat26DEp2, hs_sat26DEoZ];
        var hs_sat26DEp4 = new $hs.Thunk();
        hs_sat26DEp4.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_Space);
        };
        var hs_sat26DEp5 = new $hs.Thunk();
        hs_sat26DEp5.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Space\x00");
        };
        var hs_sat26DEp6 = new $hs.Data(1);
        hs_sat26DEp6.data = [hs_sat26DEp5, hs_sat26DEp4];
        var hs_sat26DEp7 = new $hs.Data(2);
        hs_sat26DEp7.data = [hs_sat26DEp6, hs_sat26DEp3];
        var hs_sat26DEp8 = new $hs.Thunk();
        hs_sat26DEp8.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_OtherSymbol);
        };
        var hs_sat26DEp9 = new $hs.Thunk();
        hs_sat26DEp9.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("OtherSymbol\x00");
        };
        var hs_sat26DEpa = new $hs.Data(1);
        hs_sat26DEpa.data = [hs_sat26DEp9, hs_sat26DEp8];
        var hs_sat26DEpb = new $hs.Data(2);
        hs_sat26DEpb.data = [hs_sat26DEpa, hs_sat26DEp7];
        var hs_sat26DEpc = new $hs.Thunk();
        hs_sat26DEpc.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_ModifierSymbol);
        };
        var hs_sat26DEpd = new $hs.Thunk();
        hs_sat26DEpd.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ModifierSymbol\x00");
        };
        var hs_sat26DEpe = new $hs.Data(1);
        hs_sat26DEpe.data = [hs_sat26DEpd, hs_sat26DEpc];
        var hs_sat26DEpf = new $hs.Data(2);
        hs_sat26DEpf.data = [hs_sat26DEpe, hs_sat26DEpb];
        var hs_sat26DEpg = new $hs.Thunk();
        hs_sat26DEpg.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_CurrencySymbol);
        };
        var hs_sat26DEph = new $hs.Thunk();
        hs_sat26DEph.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CurrencySymbol\x00");
        };
        var hs_sat26DEpi = new $hs.Data(1);
        hs_sat26DEpi.data = [hs_sat26DEph, hs_sat26DEpg];
        var hs_sat26DEpj = new $hs.Data(2);
        hs_sat26DEpj.data = [hs_sat26DEpi, hs_sat26DEpf];
        var hs_sat26DEpk = new $hs.Thunk();
        hs_sat26DEpk.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_MathSymbol);
        };
        var hs_sat26DEpl = new $hs.Thunk();
        hs_sat26DEpl.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("MathSymbol\x00");
        };
        var hs_sat26DEpm = new $hs.Data(1);
        hs_sat26DEpm.data = [hs_sat26DEpl, hs_sat26DEpk];
        var hs_sat26DEpn = new $hs.Data(2);
        hs_sat26DEpn.data = [hs_sat26DEpm, hs_sat26DEpj];
        var hs_sat26DEpo = new $hs.Thunk();
        hs_sat26DEpo.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_OtherPunctuation);
        };
        var hs_sat26DEpp = new $hs.Thunk();
        hs_sat26DEpp.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("OtherPunctuation\x00");
        };
        var hs_sat26DEpq = new $hs.Data(1);
        hs_sat26DEpq.data = [hs_sat26DEpp, hs_sat26DEpo];
        var hs_sat26DEpr = new $hs.Data(2);
        hs_sat26DEpr.data = [hs_sat26DEpq, hs_sat26DEpn];
        var hs_sat26DEps = new $hs.Thunk();
        hs_sat26DEps.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_FinalQuote);
        };
        var hs_sat26DEpt = new $hs.Thunk();
        hs_sat26DEpt.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("FinalQuote\x00");
        };
        var hs_sat26DEpu = new $hs.Data(1);
        hs_sat26DEpu.data = [hs_sat26DEpt, hs_sat26DEps];
        var hs_sat26DEpv = new $hs.Data(2);
        hs_sat26DEpv.data = [hs_sat26DEpu, hs_sat26DEpr];
        var hs_sat26DEpw = new $hs.Thunk();
        hs_sat26DEpw.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_InitialQuote);
        };
        var hs_sat26DEpx = new $hs.Thunk();
        hs_sat26DEpx.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("InitialQuote\x00");
        };
        var hs_sat26DEpy = new $hs.Data(1);
        hs_sat26DEpy.data = [hs_sat26DEpx, hs_sat26DEpw];
        var hs_sat26DEpz = new $hs.Data(2);
        hs_sat26DEpz.data = [hs_sat26DEpy, hs_sat26DEpv];
        var hs_sat26DEpA = new $hs.Thunk();
        hs_sat26DEpA.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_ClosePunctuation);
        };
        var hs_sat26DEpB = new $hs.Thunk();
        hs_sat26DEpB.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ClosePunctuation\x00");
        };
        var hs_sat26DEpC = new $hs.Data(1);
        hs_sat26DEpC.data = [hs_sat26DEpB, hs_sat26DEpA];
        var hs_sat26DEpD = new $hs.Data(2);
        hs_sat26DEpD.data = [hs_sat26DEpC, hs_sat26DEpz];
        var hs_sat26DEpE = new $hs.Thunk();
        hs_sat26DEpE.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_OpenPunctuation);
        };
        var hs_sat26DEpF = new $hs.Thunk();
        hs_sat26DEpF.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("OpenPunctuation\x00");
        };
        var hs_sat26DEpG = new $hs.Data(1);
        hs_sat26DEpG.data = [hs_sat26DEpF, hs_sat26DEpE];
        var hs_sat26DEpH = new $hs.Data(2);
        hs_sat26DEpH.data = [hs_sat26DEpG, hs_sat26DEpD];
        var hs_sat26DEpI = new $hs.Thunk();
        hs_sat26DEpI.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_DashPunctuation);
        };
        var hs_sat26DEpJ = new $hs.Thunk();
        hs_sat26DEpJ.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("DashPunctuation\x00");
        };
        var hs_sat26DEpK = new $hs.Data(1);
        hs_sat26DEpK.data = [hs_sat26DEpJ, hs_sat26DEpI];
        var hs_sat26DEpL = new $hs.Data(2);
        hs_sat26DEpL.data = [hs_sat26DEpK, hs_sat26DEpH];
        var hs_sat26DEpM = new $hs.Thunk();
        hs_sat26DEpM.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_ConnectorPunctuation);
        };
        var hs_sat26DEpN = new $hs.Thunk();
        hs_sat26DEpN.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ConnectorPunctuation\x00");
        };
        var hs_sat26DEpO = new $hs.Data(1);
        hs_sat26DEpO.data = [hs_sat26DEpN, hs_sat26DEpM];
        var hs_sat26DEpP = new $hs.Data(2);
        hs_sat26DEpP.data = [hs_sat26DEpO, hs_sat26DEpL];
        var hs_sat26DEpQ = new $hs.Thunk();
        hs_sat26DEpQ.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_OtherNumber);
        };
        var hs_sat26DEpR = new $hs.Thunk();
        hs_sat26DEpR.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("OtherNumber\x00");
        };
        var hs_sat26DEpS = new $hs.Data(1);
        hs_sat26DEpS.data = [hs_sat26DEpR, hs_sat26DEpQ];
        var hs_sat26DEpT = new $hs.Data(2);
        hs_sat26DEpT.data = [hs_sat26DEpS, hs_sat26DEpP];
        var hs_sat26DEpU = new $hs.Thunk();
        hs_sat26DEpU.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_LetterNumber);
        };
        var hs_sat26DEpV = new $hs.Thunk();
        hs_sat26DEpV.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("LetterNumber\x00");
        };
        var hs_sat26DEpW = new $hs.Data(1);
        hs_sat26DEpW.data = [hs_sat26DEpV, hs_sat26DEpU];
        var hs_sat26DEpX = new $hs.Data(2);
        hs_sat26DEpX.data = [hs_sat26DEpW, hs_sat26DEpT];
        var hs_sat26DEpY = new $hs.Thunk();
        hs_sat26DEpY.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_DecimalNumber);
        };
        var hs_sat26DEpZ = new $hs.Thunk();
        hs_sat26DEpZ.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("DecimalNumber\x00");
        };
        var hs_sat26DEq0 = new $hs.Data(1);
        hs_sat26DEq0.data = [hs_sat26DEpZ, hs_sat26DEpY];
        var hs_sat26DEq1 = new $hs.Data(2);
        hs_sat26DEq1.data = [hs_sat26DEq0, hs_sat26DEpX];
        var hs_sat26DEq2 = new $hs.Thunk();
        hs_sat26DEq2.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_EnclosingMark);
        };
        var hs_sat26DEq3 = new $hs.Thunk();
        hs_sat26DEq3.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("EnclosingMark\x00");
        };
        var hs_sat26DEq4 = new $hs.Data(1);
        hs_sat26DEq4.data = [hs_sat26DEq3, hs_sat26DEq2];
        var hs_sat26DEq5 = new $hs.Data(2);
        hs_sat26DEq5.data = [hs_sat26DEq4, hs_sat26DEq1];
        var hs_sat26DEq6 = new $hs.Thunk();
        hs_sat26DEq6.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_SpacingCombiningMark);
        };
        var hs_sat26DEq7 = new $hs.Thunk();
        hs_sat26DEq7.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("SpacingCombiningMark\x00");
        };
        var hs_sat26DEq8 = new $hs.Data(1);
        hs_sat26DEq8.data = [hs_sat26DEq7, hs_sat26DEq6];
        var hs_sat26DEq9 = new $hs.Data(2);
        hs_sat26DEq9.data = [hs_sat26DEq8, hs_sat26DEq5];
        var hs_sat26DEqa = new $hs.Thunk();
        hs_sat26DEqa.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_NonSpacingMark);
        };
        var hs_sat26DEqb = new $hs.Thunk();
        hs_sat26DEqb.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("NonSpacingMark\x00");
        };
        var hs_sat26DEqc = new $hs.Data(1);
        hs_sat26DEqc.data = [hs_sat26DEqb, hs_sat26DEqa];
        var hs_sat26DEqd = new $hs.Data(2);
        hs_sat26DEqd.data = [hs_sat26DEqc, hs_sat26DEq9];
        var hs_sat26DEqe = new $hs.Thunk();
        hs_sat26DEqe.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_OtherLetter);
        };
        var hs_sat26DEqf = new $hs.Thunk();
        hs_sat26DEqf.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("OtherLetter\x00");
        };
        var hs_sat26DEqg = new $hs.Data(1);
        hs_sat26DEqg.data = [hs_sat26DEqf, hs_sat26DEqe];
        var hs_sat26DEqh = new $hs.Data(2);
        hs_sat26DEqh.data = [hs_sat26DEqg, hs_sat26DEqd];
        var hs_sat26DEqi = new $hs.Thunk();
        hs_sat26DEqi.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_ModifierLetter);
        };
        var hs_sat26DEqj = new $hs.Thunk();
        hs_sat26DEqj.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ModifierLetter\x00");
        };
        var hs_sat26DEqk = new $hs.Data(1);
        hs_sat26DEqk.data = [hs_sat26DEqj, hs_sat26DEqi];
        var hs_sat26DEql = new $hs.Data(2);
        hs_sat26DEql.data = [hs_sat26DEqk, hs_sat26DEqh];
        var hs_sat26DEqm = new $hs.Thunk();
        hs_sat26DEqm.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_TitlecaseLetter);
        };
        var hs_sat26DEqn = new $hs.Thunk();
        hs_sat26DEqn.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("TitlecaseLetter\x00");
        };
        var hs_sat26DEqo = new $hs.Data(1);
        hs_sat26DEqo.data = [hs_sat26DEqn, hs_sat26DEqm];
        var hs_sat26DEqp = new $hs.Data(2);
        hs_sat26DEqp.data = [hs_sat26DEqo, hs_sat26DEql];
        var hs_sat26DEqq = new $hs.Thunk();
        hs_sat26DEqq.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_LowercaseLetter);
        };
        var hs_sat26DEqr = new $hs.Thunk();
        hs_sat26DEqr.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("LowercaseLetter\x00");
        };
        var hs_sat26DEqs = new $hs.Data(1);
        hs_sat26DEqs.data = [hs_sat26DEqr, hs_sat26DEqq];
        var hs_sat26DEqt = new $hs.Data(2);
        hs_sat26DEqt.data = [hs_sat26DEqs, hs_sat26DEqp];
        var hs_sat26DEqu = new $hs.Thunk();
        hs_sat26DEqu.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_UppercaseLetter);
        };
        var hs_sat26DEqv = new $hs.Thunk();
        hs_sat26DEqv.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("UppercaseLetter\x00");
        };
        var hs_sat26DEqw = new $hs.Data(1);
        hs_sat26DEqw.data = [hs_sat26DEqv, hs_sat26DEqu];
        var hs_sat26DEqx = new $hs.Data(2);
        hs_sat26DEqx.data = [hs_sat26DEqw, hs_sat26DEqt];
        return $hs.modules.GHCziRead.hs_choose.hscall(hs_sat26DEqx);
    };
    hs_zdcreadPrec25vfM3.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26DEqy);
    };
    this.hs_zdfReadGeneralCategory.data = [hs_zdcreadsPrec25vfO6, hs_zdcreadList25vfO4, hs_zdcreadPrec25vfM3, hs_zdcreadListPrec25vfO2];
    hs_zdcreadListPrec25vfO2.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall($hs.modules.DataziChar.hs_zdfReadGeneralCategory);
    };
    hs_zdcreadList25vfO4.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListDefault.hscall($hs.modules.DataziChar.hs_zdfReadGeneralCategory);
    };
    hs_zdcreadsPrec25vfO6.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall($hs.modules.DataziChar.hs_zdfReadGeneralCategory);
    };
    hs_zdcenumFromThen25vfO8.evaluate = function (hs_a26DEkr, hs_b26DEkt) {
        var hs_azh26DEkv = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26DEkr);
        var hs_bzh26DEkx = $hs.modules.GHCziBase.hs_getTag.hscall(hs_b26DEkt);
        var hs_sat26DEqF = new $hs.Thunk();
        hs_sat26DEqF.evaluateOnce = function () {
            var hs_sat26DEqC = new $hs.Thunk();
            hs_sat26DEqC.evaluateOnce = function () {
                var hs_sat26DEqz = new $hs.Data(1);
                hs_sat26DEqz.data = [hs_bzh26DEkx];
                var hs_sat26DEqB = new $hs.Data(1);
                hs_sat26DEqB.data = [hs_azh26DEkv];
                var hs_wild26DEqA = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DEqB, hs_sat26DEqz);
                switch (hs_wild26DEqA.tag) {
                case 1:
                    if (hs_zdmaxtagzuGeneralCategory25t52s.notEvaluated) {
                        return hs_zdmaxtagzuGeneralCategory25t52s.hscall();
                    } else {
                        return hs_zdmaxtagzuGeneralCategory25t52s;
                    }
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                }
            };
            var hs_sat26DEqD = new $hs.Data(1);
            hs_sat26DEqD.data = [hs_bzh26DEkx];
            var hs_sat26DEqE = new $hs.Data(1);
            hs_sat26DEqE.data = [hs_azh26DEkv];
            return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26DEqE, hs_sat26DEqD, hs_sat26DEqC);
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuGeneralCategory25t52u, hs_sat26DEqF);
    };
    hs_zdcenumFrom25vfOp.evaluate = function (hs_a26DEkH) {
        var hs_azh26DEkJ = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26DEkH);
        var hs_sat26DEqH = new $hs.Thunk();
        hs_sat26DEqH.evaluateOnce = function () {
            var hs_sat26DEqG = new $hs.Data(1);
            hs_sat26DEqG.data = [hs_azh26DEkJ];
            return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26DEqG, hs_zdmaxtagzuGeneralCategory25t52s);
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuGeneralCategory25t52u, hs_sat26DEqH);
    };
    hs_zdcfromEnum25vfOx.evaluate = function (hs_a26DEkP) {
        var hs_azh26DEkR = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26DEkP);
        var $res = new $hs.Data(1);
        $res.data = [hs_azh26DEkR];
        return $res;
    };
    hs_zdctoEnum25vfOD.evaluate = function (hs_a26DEkV) {
        var hs_sat26DEqI = new $hs.Thunk();
        hs_sat26DEqI.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a26DEkV, hs_zdmaxtagzuGeneralCategory25t52s);
        };
        var hs_sat26DEqL = new $hs.Thunk();
        hs_sat26DEqL.evaluateOnce = function () {
            var hs_sat26DEqJ = new $hs.Data(1);
            hs_sat26DEqJ.data = [0];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a26DEkV, hs_sat26DEqJ);
        };
        var hs_wild26DEqK = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DEqL, hs_sat26DEqI);
        switch (hs_wild26DEqK.tag) {
        case 1:
            var hs_sat26DEqT = new $hs.Thunk();
            hs_sat26DEqT.evaluateOnce = function () {
                var hs_sat26DEqR = new $hs.Thunk();
                hs_sat26DEqR.evaluateOnce = function () {
                    var hs_sat26DEqP = new $hs.Thunk();
                    hs_sat26DEqP.evaluateOnce = function () {
                        var hs_sat26DEqM = new $hs.Data(1);
                        hs_sat26DEqM.data = [")"];
                        var hs_sat26DEqN = new $hs.Data(2);
                        hs_sat26DEqN.data = [hs_sat26DEqM, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_sat26DEqO = new $hs.Data(1);
                        hs_sat26DEqO.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26DEqO, hs_zdmaxtagzuGeneralCategory25t52s, hs_sat26DEqN);
                    };
                    var hs_sat26DEqQ = new $hs.Thunk();
                    hs_sat26DEqQ.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(") is outside of enumeration's range (0,\x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DEqQ, hs_sat26DEqP);
                };
                var hs_sat26DEqS = new $hs.Data(1);
                hs_sat26DEqS.data = [0];
                return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26DEqS, hs_a26DEkV, hs_sat26DEqR);
            };
            var hs_sat26DEqV = new $hs.Thunk();
            hs_sat26DEqV.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("toEnum{GeneralCategory}: tag (\x00");
            };
            var hs_sat26DEqU = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DEqV, hs_sat26DEqT);
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DEqU);
        case 2:
            var hs_wild126DEqW = hs_a26DEkV;
            if (hs_a26DEkV.notEvaluated) {
                hs_wild126DEqW = hs_a26DEkV.hscall();
            }
            var hs_a126DElc = hs_wild126DEqW.data[0];
            throw "primitive operation tagToEnum#. Not implemeted yet.";
        }
    };
    hs_zdcpred25vfOY.evaluate = function (hs_a26DElg) {
        var hs_azh26DElj = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26DElg);
        var hs_sat26DEqX = new $hs.Data(1);
        hs_sat26DEqX.data = [hs_azh26DElj];
        var hs_sat26DEqZ = new $hs.Data(1);
        hs_sat26DEqZ.data = [0];
        var hs_wild26DEqY = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26DEqZ, hs_sat26DEqX);
        switch (hs_wild26DEqY.tag) {
        case 1:
            var hs_sat26DEr0 = new $hs.Data(1);
            hs_sat26DEr0.data = [-1];
            var hs_sat26DEr2 = new $hs.Data(1);
            hs_sat26DEr2.data = [hs_azh26DElj];
            var hs_wild126DEr1 = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DEr2, hs_sat26DEr0);
            var hs_a126DElq = hs_wild126DEr1.data[0];
            throw "primitive operation tagToEnum#. Not implemeted yet.";
        case 2:
            var hs_sat26DEr3 = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("pred{GeneralCategory}: tried to take `pred' of first tag in enumeration\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DEr3);
        }
    };
    hs_zdcsucc25vfPd.evaluate = function (hs_a26DElv) {
        var hs_azh26DElx = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26DElv);
        var hs_sat26DEr5 = new $hs.Data(1);
        hs_sat26DEr5.data = [hs_azh26DElx];
        var hs_wild26DEr4 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_zdmaxtagzuGeneralCategory25t52s, hs_sat26DEr5);
        switch (hs_wild26DEr4.tag) {
        case 1:
            var hs_sat26DEr6 = new $hs.Data(1);
            hs_sat26DEr6.data = [1];
            var hs_sat26DEr8 = new $hs.Data(1);
            hs_sat26DEr8.data = [hs_azh26DElx];
            var hs_wild126DEr7 = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DEr8, hs_sat26DEr6);
            var hs_a126DElE = hs_wild126DEr7.data[0];
            throw "primitive operation tagToEnum#. Not implemeted yet.";
        case 2:
            var hs_sat26DEr9 = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("succ{GeneralCategory}: tried to take `succ' of last tag in enumeration\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DEr9);
        }
    };
    this.hs_zdfEnumGeneralCategory.data = [hs_zdcsucc25vfPd, hs_zdcpred25vfOY, hs_zdctoEnum25vfOD, hs_zdcfromEnum25vfOx, hs_zdcenumFrom25vfOp, hs_zdcenumFromThen25vfO8, hs_zdcenumFromTo25vfPt, hs_zdcenumFromThenTo25vfPr];
    hs_zdcenumFromThenTo25vfPr.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromThenTo.hscall($hs.modules.DataziChar.hs_zdfEnumGeneralCategory);
    };
    hs_zdcenumFromTo25vfPt.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromTo.hscall($hs.modules.DataziChar.hs_zdfEnumGeneralCategory);
    };
    hs_zdczlze25vfPv.evaluate = function (hs_a26DElO, hs_b26DElQ) {
        var hs_azh26DElS = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26DElO);
        var hs_bzh26DElT = $hs.modules.GHCziBase.hs_getTag.hscall(hs_b26DElQ);
        return hs_azh26DElS <= hs_bzh26DElT ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczg25vfPF.evaluate = function (hs_a26DElY, hs_b26DEm0) {
        var hs_azh26DEm2 = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26DElY);
        var hs_bzh26DEm3 = $hs.modules.GHCziBase.hs_getTag.hscall(hs_b26DEm0);
        return hs_azh26DEm2 > hs_bzh26DEm3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczgze25vfPP.evaluate = function (hs_a26DEm8, hs_b26DEma) {
        var hs_azh26DEmc = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26DEm8);
        var hs_bzh26DEmd = $hs.modules.GHCziBase.hs_getTag.hscall(hs_b26DEma);
        return hs_azh26DEmc >= hs_bzh26DEmd ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczl25vfPZ.evaluate = function (hs_a26DEmi, hs_b26DEmk) {
        var hs_azh26DEmm = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26DEmi);
        var hs_bzh26DEmn = $hs.modules.GHCziBase.hs_getTag.hscall(hs_b26DEmk);
        return hs_azh26DEmm < hs_bzh26DEmn ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdccompare25vfQ9.evaluate = function (hs_a26DEms, hs_b26DEmu) {
        var hs_azh26DEmw = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26DEms);
        var hs_bzh26DEmx = $hs.modules.GHCziBase.hs_getTag.hscall(hs_b26DEmu);
        var hs_wild26DErb = hs_azh26DEmw < hs_bzh26DEmx ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26DErb.tag) {
        case 1:
            var hs_wild126DEra = hs_azh26DEmw == hs_bzh26DEmx ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild126DEra.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczeze25vfQl.evaluate = function (hs_a26DEmE, hs_b26DEmG) {
        var hs_azh26DEmI = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26DEmE);
        var hs_bzh26DEmJ = $hs.modules.GHCziBase.hs_getTag.hscall(hs_b26DEmG);
        return hs_azh26DEmI == hs_bzh26DEmJ ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_zdfEqGeneralCategory.data = [hs_zdczeze25vfQl, hs_zdczsze25vfQv];
    hs_zdczsze25vfQv.evaluate = function (hs_a26DEmO, hs_b26DEmP) {
        var hs_sat26DErc = new $hs.Thunk();
        hs_sat26DErc.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.DataziChar.hs_zdfEqGeneralCategory, hs_a26DEmO, hs_b26DEmP);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DErc);
    };
    this.hs_zdfOrdGeneralCategory.data = [$hs.modules.DataziChar.hs_zdfEqGeneralCategory, hs_zdccompare25vfQ9, hs_zdczl25vfPZ, hs_zdczgze25vfPP, hs_zdczg25vfPF, hs_zdczlze25vfPv, hs_zdcmax25vfQE, hs_zdcmin25vfQC];
    hs_zdcmin25vfQC.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.DataziChar.hs_zdfOrdGeneralCategory);
    };
    hs_zdcmax25vfQE.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.DataziChar.hs_zdfOrdGeneralCategory);
    };
    this.hs_zdfIxGeneralCategory.data = [$hs.modules.DataziChar.hs_zdfOrdGeneralCategory, hs_zdcrange25vfL6, hs_zdcindex25vfQK, hs_zdcunsafeIndex25vfKR, hs_zdcinRange25vfKz, hs_zdcrangeSizze25vfQI, hs_zdcunsafeRangeSizze25vfQG];
    hs_zdcunsafeRangeSizze25vfQG.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmunsafeRangeSizze.hscall($hs.modules.DataziChar.hs_zdfIxGeneralCategory);
    };
    hs_zdcrangeSizze25vfQI.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmrangeSizze.hscall($hs.modules.DataziChar.hs_zdfIxGeneralCategory);
    };
    hs_zdcindex25vfQK.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmindex.hscall($hs.modules.DataziChar.hs_zdfIxGeneralCategory);
    };
    this.hs_digitToInt.evaluate = function (hs_c26DEn2) {
        var hs_wild26DErd = $hs.modules.GHCziUnicode.hs_isDigit.hscall(hs_c26DEn2);
        switch (hs_wild26DErd.tag) {
        case 1:
            var hs_sat26DErf = new $hs.Thunk();
            hs_sat26DErf.evaluateOnce = function () {
                var hs_sat26DEre = new $hs.Data(1);
                hs_sat26DEre.data = ["f"];
                return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26DEn2, hs_sat26DEre);
            };
            var hs_sat26DEri = new $hs.Thunk();
            hs_sat26DEri.evaluateOnce = function () {
                var hs_sat26DErg = new $hs.Data(1);
                hs_sat26DErg.data = ["a"];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26DEn2, hs_sat26DErg);
            };
            var hs_wild126DErh = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DEri, hs_sat26DErf);
            switch (hs_wild126DErh.tag) {
            case 1:
                var hs_sat26DErk = new $hs.Thunk();
                hs_sat26DErk.evaluateOnce = function () {
                    var hs_sat26DErj = new $hs.Data(1);
                    hs_sat26DErj.data = ["F"];
                    return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26DEn2, hs_sat26DErj);
                };
                var hs_sat26DErn = new $hs.Thunk();
                hs_sat26DErn.evaluateOnce = function () {
                    var hs_sat26DErl = new $hs.Data(1);
                    hs_sat26DErl.data = ["A"];
                    return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26DEn2, hs_sat26DErl);
                };
                var hs_wild226DErm = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DErn, hs_sat26DErk);
                switch (hs_wild226DErm.tag) {
                case 1:
                    var hs_sat26DEro = new $hs.Thunk();
                    hs_sat26DEro.evaluateOnce = function () {
                        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowChar, hs_c26DEn2);
                    };
                    var hs_sat26DErq = new $hs.Thunk();
                    hs_sat26DErq.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Char.digitToInt: not a digit \x00");
                    };
                    var hs_sat26DErp = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DErq, hs_sat26DEro);
                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DErp);
                case 2:
                    var hs_sat26DErr = new $hs.Data(1);
                    hs_sat26DErr.data = [10];
                    var hs_sat26DErv = new $hs.Thunk();
                    hs_sat26DErv.evaluateOnce = function () {
                        var hs_sat26DErt = new $hs.Thunk();
                        hs_sat26DErt.evaluateOnce = function () {
                            var hs_sat26DErs = new $hs.Data(1);
                            hs_sat26DErs.data = ["A"];
                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26DErs);
                        };
                        var hs_sat26DEru = new $hs.Thunk();
                        hs_sat26DEru.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DEn2);
                        };
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DEru, hs_sat26DErt);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DErv, hs_sat26DErr);
                }
            case 2:
                var hs_sat26DErw = new $hs.Data(1);
                hs_sat26DErw.data = [10];
                var hs_sat26DErA = new $hs.Thunk();
                hs_sat26DErA.evaluateOnce = function () {
                    var hs_sat26DEry = new $hs.Thunk();
                    hs_sat26DEry.evaluateOnce = function () {
                        var hs_sat26DErx = new $hs.Data(1);
                        hs_sat26DErx.data = ["a"];
                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26DErx);
                    };
                    var hs_sat26DErz = new $hs.Thunk();
                    hs_sat26DErz.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DEn2);
                    };
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DErz, hs_sat26DEry);
                };
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DErA, hs_sat26DErw);
            }
        case 2:
            var hs_sat26DErC = new $hs.Thunk();
            hs_sat26DErC.evaluateOnce = function () {
                var hs_sat26DErB = new $hs.Data(1);
                hs_sat26DErB.data = ["0"];
                return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26DErB);
            };
            var hs_sat26DErD = new $hs.Thunk();
            hs_sat26DErD.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DEn2);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DErD, hs_sat26DErC);
        }
    };
    this.hs_generalCategory.evaluate = function (hs_c26DEny) {
        var hs_sat26DErJ = new $hs.Thunk();
        hs_sat26DErJ.evaluateOnce = function () {
            var hs_sat26DErH = new $hs.Thunk();
            hs_sat26DErH.evaluateOnce = function () {
                var hs_sat26DErG = new $hs.Thunk();
                hs_sat26DErG.evaluateOnce = function () {
                    var hs_sat26DErE = new $hs.Thunk();
                    hs_sat26DErE.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DEny);
                    };
                    var hs_sat26DErF = new $hs.Thunk();
                    hs_sat26DErF.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DErF, hs_sat26DErE);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziUnicode.hs_wgencat, hs_sat26DErG);
            };
            var hs_sat26DErI = new $hs.Thunk();
            hs_sat26DErI.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.GHCziNum.hs_zdfNumInt);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DErI, hs_sat26DErH);
        };
        var hs_sat26DErK = new $hs.Thunk();
        hs_sat26DErK.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.DataziChar.hs_zdfEnumGeneralCategory);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DErK, hs_sat26DErJ);
    };
    this.hs_isLetter.evaluate = function (hs_c26DEnE) {
        var hs_wild26DErL = $hs.modules.DataziChar.hs_generalCategory.hscall(hs_c26DEnE);
        switch (hs_wild26DErL.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 4:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 5:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_isMark.evaluate = function (hs_c26DEnH) {
        var hs_wild26DErM = $hs.modules.DataziChar.hs_generalCategory.hscall(hs_c26DEnH);
        switch (hs_wild26DErM.tag) {
        case 6:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 7:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 8:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_isNumber.evaluate = function (hs_c26DEnK) {
        var hs_wild26DErN = $hs.modules.DataziChar.hs_generalCategory.hscall(hs_c26DEnK);
        switch (hs_wild26DErN.tag) {
        case 9:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 10:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 11:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_isPunctuation.evaluate = function (hs_c26DEnN) {
        var hs_wild26DErO = $hs.modules.DataziChar.hs_generalCategory.hscall(hs_c26DEnN);
        switch (hs_wild26DErO.tag) {
        case 12:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 13:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 14:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 15:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 16:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 17:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 18:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_isSymbol.evaluate = function (hs_c26DEnQ) {
        var hs_wild26DErP = $hs.modules.DataziChar.hs_generalCategory.hscall(hs_c26DEnQ);
        switch (hs_wild26DErP.tag) {
        case 19:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 20:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 21:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 22:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_isSeparator.evaluate = function (hs_c26DEnT) {
        var hs_wild26DErQ = $hs.modules.DataziChar.hs_generalCategory.hscall(hs_c26DEnT);
        switch (hs_wild26DErQ.tag) {
        case 23:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 24:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 25:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_UppercaseLetter.data = [];
    this.hs_LowercaseLetter.data = [];
    this.hs_TitlecaseLetter.data = [];
    this.hs_ModifierLetter.data = [];
    this.hs_OtherLetter.data = [];
    this.hs_NonSpacingMark.data = [];
    this.hs_SpacingCombiningMark.data = [];
    this.hs_EnclosingMark.data = [];
    this.hs_DecimalNumber.data = [];
    this.hs_LetterNumber.data = [];
    this.hs_OtherNumber.data = [];
    this.hs_ConnectorPunctuation.data = [];
    this.hs_DashPunctuation.data = [];
    this.hs_OpenPunctuation.data = [];
    this.hs_ClosePunctuation.data = [];
    this.hs_InitialQuote.data = [];
    this.hs_FinalQuote.data = [];
    this.hs_OtherPunctuation.data = [];
    this.hs_MathSymbol.data = [];
    this.hs_CurrencySymbol.data = [];
    this.hs_ModifierSymbol.data = [];
    this.hs_OtherSymbol.data = [];
    this.hs_Space.data = [];
    this.hs_LineSeparator.data = [];
    this.hs_ParagraphSeparator.data = [];
    this.hs_Control.data = [];
    this.hs_Format.data = [];
    this.hs_Surrogate.data = [];
    this.hs_PrivateUse.data = [];
    this.hs_NotAssigned.data = [];
};
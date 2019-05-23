
$hs.modules.DataziChar = new $hs.Module();
$hs.modules.DataziChar.dependencies = ["GHC.Types", "GHC.CString", "GHC.Base", "GHC.Enum", "GHC.Num", "GHC.Real", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.Arr", "GHC.Read", "GHC.Unicode", "Foreign.C.Types", "Text.ParserCombinators.ReadPrec"];
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
    this.hs_digitToInt.evaluate = function (hs_c26Dh2m) {
        $hs.modules.DataziChar.loadDependencies();
        return this.evaluate(hs_c26Dh2m);
    };
    this.hs_generalCategory.notEvaluated = true;
    this.hs_generalCategory.evaluate = function (hs_c26Dh2S) {
        $hs.modules.DataziChar.loadDependencies();
        return this.evaluate(hs_c26Dh2S);
    };
    this.hs_isLetter.notEvaluated = true;
    this.hs_isLetter.evaluate = function (hs_c26Dh2Y) {
        $hs.modules.DataziChar.loadDependencies();
        return this.evaluate(hs_c26Dh2Y);
    };
    this.hs_isMark.notEvaluated = true;
    this.hs_isMark.evaluate = function (hs_c26Dh31) {
        $hs.modules.DataziChar.loadDependencies();
        return this.evaluate(hs_c26Dh31);
    };
    this.hs_isNumber.notEvaluated = true;
    this.hs_isNumber.evaluate = function (hs_c26Dh34) {
        $hs.modules.DataziChar.loadDependencies();
        return this.evaluate(hs_c26Dh34);
    };
    this.hs_isPunctuation.notEvaluated = true;
    this.hs_isPunctuation.evaluate = function (hs_c26Dh37) {
        $hs.modules.DataziChar.loadDependencies();
        return this.evaluate(hs_c26Dh37);
    };
    this.hs_isSymbol.notEvaluated = true;
    this.hs_isSymbol.evaluate = function (hs_c26Dh3a) {
        $hs.modules.DataziChar.loadDependencies();
        return this.evaluate(hs_c26Dh3a);
    };
    this.hs_isSeparator.notEvaluated = true;
    this.hs_isSeparator.evaluate = function (hs_c26Dh3d) {
        $hs.modules.DataziChar.loadDependencies();
        return this.evaluate(hs_c26Dh3d);
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
    var hs_zdtag2conzuGeneralCategory25sTAa = new $hs.Func(1);
    var hs_zdmaxtagzuGeneralCategory25sTA9 = new $hs.Data(1);
    var hs_zdcinRange25uSqm = new $hs.Func(2);
    var hs_zdcunsafeIndex25uSqD = new $hs.Func(2);
    var hs_zdcrange25uSqR = new $hs.Func(1);
    var hs_zdcshowsPrec25uSr6 = new $hs.Func(2);
    var hs_sat26Dh3V = new $hs.Thunk();
    var hs_zdcshowList25uSrG = new $hs.Thunk();
    var hs_zdcshow25uSrH = new $hs.Thunk();
    var hs_sat26Dh5S = new $hs.Thunk();
    var hs_zdcreadPrec25uSrK = new $hs.Thunk();
    var hs_zdcreadListPrec25uStI = new $hs.Thunk();
    var hs_zdcreadList25uStJ = new $hs.Thunk();
    var hs_zdcreadsPrec25uStK = new $hs.Thunk();
    var hs_zdcenumFromThen25uStL = new $hs.Func(2);
    var hs_zdcenumFrom25uSu1 = new $hs.Func(1);
    var hs_zdcfromEnum25uSu8 = new $hs.Func(1);
    var hs_zdctoEnum25uSud = new $hs.Func(1);
    var hs_zdcpred25uSux = new $hs.Func(1);
    var hs_zdcsucc25uSuL = new $hs.Func(1);
    var hs_zdcenumFromThenTo25uSuY = new $hs.Thunk();
    var hs_zdcenumFromTo25uSuZ = new $hs.Thunk();
    var hs_zdczlze25uSv0 = new $hs.Func(2);
    var hs_zdczg25uSv9 = new $hs.Func(2);
    var hs_zdczgze25uSvi = new $hs.Func(2);
    var hs_zdczl25uSvr = new $hs.Func(2);
    var hs_zdccompare25uSvA = new $hs.Func(2);
    var hs_zdczeze25uSvL = new $hs.Func(2);
    var hs_zdczsze25uSvU = new $hs.Func(2);
    var hs_zdcmin25uSw0 = new $hs.Thunk();
    var hs_zdcmax25uSw1 = new $hs.Thunk();
    var hs_zdcunsafeRangeSizze25uSw2 = new $hs.Thunk();
    var hs_zdcrangeSizze25uSw3 = new $hs.Thunk();
    var hs_zdcindex25uSw4 = new $hs.Thunk();
    hs_zdtag2conzuGeneralCategory25sTAa.evaluate = function (hs_ds26DgWy) {
        var hs_wild26Dh3f = hs_ds26DgWy;
        if (hs_ds26DgWy.notEvaluated) {
            hs_wild26Dh3f = hs_ds26DgWy.hscall();
        }
        var hs_a26DgWB = hs_wild26Dh3f.data[0];
        throw "primitive operation tagToEnum#. Not implemeted yet.";
    };
    hs_zdmaxtagzuGeneralCategory25sTA9.data = [29];
    hs_zdcinRange25uSqm.evaluate = function (hs_ds26DgWF, hs_c26DgWN) {
        var hs_wild26Dh3g = hs_ds26DgWF;
        if (hs_ds26DgWF.notEvaluated) {
            hs_wild26Dh3g = hs_ds26DgWF.hscall();
        }
        var hs_a26DgWJ = hs_wild26Dh3g.data[0];
        var hs_b26DgWL = hs_wild26Dh3g.data[1];
        var hs_azh26DgWQ = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26DgWJ);
        var hs_bzh26DgWS = $hs.modules.GHCziBase.hs_getTag.hscall(hs_b26DgWL);
        var hs_czh26DgWP = $hs.modules.GHCziBase.hs_getTag.hscall(hs_c26DgWN);
        var hs_wild126Dh3h = hs_czh26DgWP >= hs_azh26DgWQ ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild126Dh3h.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return hs_czh26DgWP <= hs_bzh26DgWS ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        }
    };
    hs_zdcunsafeIndex25uSqD.evaluate = function (hs_c26DgWW, hs_d26DgX2) {
        var hs_wild26Dh3i = hs_c26DgWW;
        if (hs_c26DgWW.notEvaluated) {
            hs_wild26Dh3i = hs_c26DgWW.hscall();
        }
        var hs_a26DgX0 = hs_wild26Dh3i.data[0];
        var hs_azh26DgX5 = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26DgX0);
        var hs_dzh26DgX4 = $hs.modules.GHCziBase.hs_getTag.hscall(hs_d26DgX2);
        var hs_sat26Dh3k = ($hs.Int.addCarry(hs_dzh26DgX4, ~hs_azh26DgX5, 1))[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dh3k];
        return $res;
    };
    hs_zdcrange25uSqR.evaluate = function (hs_ds26DgX9) {
        var hs_wild26Dh3m = hs_ds26DgX9;
        if (hs_ds26DgX9.notEvaluated) {
            hs_wild26Dh3m = hs_ds26DgX9.hscall();
        }
        var hs_a26DgXd = hs_wild26Dh3m.data[0];
        var hs_b26DgXf = hs_wild26Dh3m.data[1];
        var hs_azh26DgXh = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26DgXd);
        var hs_bzh26DgXj = $hs.modules.GHCziBase.hs_getTag.hscall(hs_b26DgXf);
        var hs_sat26Dh3l = new $hs.Thunk();
        hs_sat26Dh3l.evaluateOnce = function () {
            var hs_sat26Dh3o = new $hs.Data(1);
            hs_sat26Dh3o.data = [hs_bzh26DgXj];
            var hs_sat26Dh3n = new $hs.Data(1);
            hs_sat26Dh3n.data = [hs_azh26DgXh];
            return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26Dh3n, hs_sat26Dh3o);
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuGeneralCategory25sTAa, hs_sat26Dh3l);
    };
    this.hs_zdfBoundedGeneralCategory.data = [$hs.modules.DataziChar.hs_UppercaseLetter, $hs.modules.DataziChar.hs_NotAssigned];
    hs_zdcshowsPrec25uSr6.evaluate = function (hs_ds26DgXV, hs_ds126DgXp) {
        var hs_wild26Dh3q = hs_ds126DgXp;
        if (hs_ds126DgXp.notEvaluated) {
            hs_wild26Dh3q = hs_ds126DgXp.hscall();
        }
        switch (hs_wild26Dh3q.tag) {
        case 1:
            var hs_sat26Dh3T = new $hs.Thunk();
            hs_sat26Dh3T.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("UppercaseLetter\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3T);
        case 2:
            var hs_sat26Dh3p = new $hs.Thunk();
            hs_sat26Dh3p.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("LowercaseLetter\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3p);
        case 3:
            var hs_sat26Dh3r = new $hs.Thunk();
            hs_sat26Dh3r.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("TitlecaseLetter\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3r);
        case 4:
            var hs_sat26Dh3s = new $hs.Thunk();
            hs_sat26Dh3s.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ModifierLetter\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3s);
        case 5:
            var hs_sat26Dh3t = new $hs.Thunk();
            hs_sat26Dh3t.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("OtherLetter\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3t);
        case 6:
            var hs_sat26Dh3u = new $hs.Thunk();
            hs_sat26Dh3u.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("NonSpacingMark\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3u);
        case 7:
            var hs_sat26Dh3v = new $hs.Thunk();
            hs_sat26Dh3v.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("SpacingCombiningMark\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3v);
        case 8:
            var hs_sat26Dh3w = new $hs.Thunk();
            hs_sat26Dh3w.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("EnclosingMark\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3w);
        case 9:
            var hs_sat26Dh3x = new $hs.Thunk();
            hs_sat26Dh3x.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("DecimalNumber\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3x);
        case 10:
            var hs_sat26Dh3y = new $hs.Thunk();
            hs_sat26Dh3y.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("LetterNumber\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3y);
        case 11:
            var hs_sat26Dh3z = new $hs.Thunk();
            hs_sat26Dh3z.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("OtherNumber\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3z);
        case 12:
            var hs_sat26Dh3A = new $hs.Thunk();
            hs_sat26Dh3A.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ConnectorPunctuation\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3A);
        case 13:
            var hs_sat26Dh3B = new $hs.Thunk();
            hs_sat26Dh3B.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("DashPunctuation\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3B);
        case 14:
            var hs_sat26Dh3C = new $hs.Thunk();
            hs_sat26Dh3C.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("OpenPunctuation\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3C);
        case 15:
            var hs_sat26Dh3D = new $hs.Thunk();
            hs_sat26Dh3D.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ClosePunctuation\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3D);
        case 16:
            var hs_sat26Dh3E = new $hs.Thunk();
            hs_sat26Dh3E.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("InitialQuote\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3E);
        case 17:
            var hs_sat26Dh3F = new $hs.Thunk();
            hs_sat26Dh3F.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("FinalQuote\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3F);
        case 18:
            var hs_sat26Dh3G = new $hs.Thunk();
            hs_sat26Dh3G.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("OtherPunctuation\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3G);
        case 19:
            var hs_sat26Dh3H = new $hs.Thunk();
            hs_sat26Dh3H.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("MathSymbol\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3H);
        case 20:
            var hs_sat26Dh3I = new $hs.Thunk();
            hs_sat26Dh3I.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CurrencySymbol\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3I);
        case 21:
            var hs_sat26Dh3J = new $hs.Thunk();
            hs_sat26Dh3J.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ModifierSymbol\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3J);
        case 22:
            var hs_sat26Dh3K = new $hs.Thunk();
            hs_sat26Dh3K.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("OtherSymbol\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3K);
        case 23:
            var hs_sat26Dh3L = new $hs.Thunk();
            hs_sat26Dh3L.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Space\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3L);
        case 24:
            var hs_sat26Dh3M = new $hs.Thunk();
            hs_sat26Dh3M.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("LineSeparator\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3M);
        case 25:
            var hs_sat26Dh3N = new $hs.Thunk();
            hs_sat26Dh3N.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ParagraphSeparator\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3N);
        case 26:
            var hs_sat26Dh3O = new $hs.Thunk();
            hs_sat26Dh3O.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Control\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3O);
        case 27:
            var hs_sat26Dh3P = new $hs.Thunk();
            hs_sat26Dh3P.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Format\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3P);
        case 28:
            var hs_sat26Dh3Q = new $hs.Thunk();
            hs_sat26Dh3Q.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Surrogate\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3Q);
        case 29:
            var hs_sat26Dh3R = new $hs.Thunk();
            hs_sat26Dh3R.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("PrivateUse\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3R);
        case 30:
            var hs_sat26Dh3S = new $hs.Thunk();
            hs_sat26Dh3S.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("NotAssigned\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dh3S);
        }
    };
    hs_sat26Dh3V.evaluateOnce = function () {
        var hs_sat26Dh3U = new $hs.Data(1);
        hs_sat26Dh3U.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.DataziChar.hs_zdfShowGeneralCategory, hs_sat26Dh3U);
    };
    this.hs_zdfShowGeneralCategory.data = [hs_zdcshowsPrec25uSr6, hs_zdcshow25uSrH, hs_zdcshowList25uSrG];
    hs_zdcshowList25uSrG.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26Dh3V);
    };
    hs_zdcshow25uSrH.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.DataziChar.hs_zdfShowGeneralCategory);
    };
    hs_sat26Dh5S.evaluateOnce = function () {
        var hs_sat26Dh3X = new $hs.Thunk();
        hs_sat26Dh3X.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_NotAssigned);
        };
        var hs_sat26Dh3Y = new $hs.Thunk();
        hs_sat26Dh3Y.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("NotAssigned\x00");
        };
        var hs_sat26Dh3Z = new $hs.Data(1);
        hs_sat26Dh3Z.data = [hs_sat26Dh3Y, hs_sat26Dh3X];
        var hs_sat26Dh40 = new $hs.Data(2);
        hs_sat26Dh40.data = [hs_sat26Dh3Z, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26Dh41 = new $hs.Thunk();
        hs_sat26Dh41.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_PrivateUse);
        };
        var hs_sat26Dh42 = new $hs.Thunk();
        hs_sat26Dh42.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("PrivateUse\x00");
        };
        var hs_sat26Dh43 = new $hs.Data(1);
        hs_sat26Dh43.data = [hs_sat26Dh42, hs_sat26Dh41];
        var hs_sat26Dh44 = new $hs.Data(2);
        hs_sat26Dh44.data = [hs_sat26Dh43, hs_sat26Dh40];
        var hs_sat26Dh45 = new $hs.Thunk();
        hs_sat26Dh45.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_Surrogate);
        };
        var hs_sat26Dh46 = new $hs.Thunk();
        hs_sat26Dh46.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Surrogate\x00");
        };
        var hs_sat26Dh47 = new $hs.Data(1);
        hs_sat26Dh47.data = [hs_sat26Dh46, hs_sat26Dh45];
        var hs_sat26Dh48 = new $hs.Data(2);
        hs_sat26Dh48.data = [hs_sat26Dh47, hs_sat26Dh44];
        var hs_sat26Dh49 = new $hs.Thunk();
        hs_sat26Dh49.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_Format);
        };
        var hs_sat26Dh4a = new $hs.Thunk();
        hs_sat26Dh4a.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Format\x00");
        };
        var hs_sat26Dh4b = new $hs.Data(1);
        hs_sat26Dh4b.data = [hs_sat26Dh4a, hs_sat26Dh49];
        var hs_sat26Dh4c = new $hs.Data(2);
        hs_sat26Dh4c.data = [hs_sat26Dh4b, hs_sat26Dh48];
        var hs_sat26Dh4d = new $hs.Thunk();
        hs_sat26Dh4d.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_Control);
        };
        var hs_sat26Dh4e = new $hs.Thunk();
        hs_sat26Dh4e.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Control\x00");
        };
        var hs_sat26Dh4f = new $hs.Data(1);
        hs_sat26Dh4f.data = [hs_sat26Dh4e, hs_sat26Dh4d];
        var hs_sat26Dh4g = new $hs.Data(2);
        hs_sat26Dh4g.data = [hs_sat26Dh4f, hs_sat26Dh4c];
        var hs_sat26Dh4h = new $hs.Thunk();
        hs_sat26Dh4h.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_ParagraphSeparator);
        };
        var hs_sat26Dh4i = new $hs.Thunk();
        hs_sat26Dh4i.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ParagraphSeparator\x00");
        };
        var hs_sat26Dh4j = new $hs.Data(1);
        hs_sat26Dh4j.data = [hs_sat26Dh4i, hs_sat26Dh4h];
        var hs_sat26Dh4k = new $hs.Data(2);
        hs_sat26Dh4k.data = [hs_sat26Dh4j, hs_sat26Dh4g];
        var hs_sat26Dh4l = new $hs.Thunk();
        hs_sat26Dh4l.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_LineSeparator);
        };
        var hs_sat26Dh4m = new $hs.Thunk();
        hs_sat26Dh4m.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("LineSeparator\x00");
        };
        var hs_sat26Dh4n = new $hs.Data(1);
        hs_sat26Dh4n.data = [hs_sat26Dh4m, hs_sat26Dh4l];
        var hs_sat26Dh4o = new $hs.Data(2);
        hs_sat26Dh4o.data = [hs_sat26Dh4n, hs_sat26Dh4k];
        var hs_sat26Dh4p = new $hs.Thunk();
        hs_sat26Dh4p.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_Space);
        };
        var hs_sat26Dh4q = new $hs.Thunk();
        hs_sat26Dh4q.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Space\x00");
        };
        var hs_sat26Dh4r = new $hs.Data(1);
        hs_sat26Dh4r.data = [hs_sat26Dh4q, hs_sat26Dh4p];
        var hs_sat26Dh4s = new $hs.Data(2);
        hs_sat26Dh4s.data = [hs_sat26Dh4r, hs_sat26Dh4o];
        var hs_sat26Dh4t = new $hs.Thunk();
        hs_sat26Dh4t.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_OtherSymbol);
        };
        var hs_sat26Dh4u = new $hs.Thunk();
        hs_sat26Dh4u.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("OtherSymbol\x00");
        };
        var hs_sat26Dh4v = new $hs.Data(1);
        hs_sat26Dh4v.data = [hs_sat26Dh4u, hs_sat26Dh4t];
        var hs_sat26Dh4w = new $hs.Data(2);
        hs_sat26Dh4w.data = [hs_sat26Dh4v, hs_sat26Dh4s];
        var hs_sat26Dh4x = new $hs.Thunk();
        hs_sat26Dh4x.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_ModifierSymbol);
        };
        var hs_sat26Dh4y = new $hs.Thunk();
        hs_sat26Dh4y.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ModifierSymbol\x00");
        };
        var hs_sat26Dh4z = new $hs.Data(1);
        hs_sat26Dh4z.data = [hs_sat26Dh4y, hs_sat26Dh4x];
        var hs_sat26Dh4A = new $hs.Data(2);
        hs_sat26Dh4A.data = [hs_sat26Dh4z, hs_sat26Dh4w];
        var hs_sat26Dh4B = new $hs.Thunk();
        hs_sat26Dh4B.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_CurrencySymbol);
        };
        var hs_sat26Dh4C = new $hs.Thunk();
        hs_sat26Dh4C.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CurrencySymbol\x00");
        };
        var hs_sat26Dh4D = new $hs.Data(1);
        hs_sat26Dh4D.data = [hs_sat26Dh4C, hs_sat26Dh4B];
        var hs_sat26Dh4E = new $hs.Data(2);
        hs_sat26Dh4E.data = [hs_sat26Dh4D, hs_sat26Dh4A];
        var hs_sat26Dh4F = new $hs.Thunk();
        hs_sat26Dh4F.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_MathSymbol);
        };
        var hs_sat26Dh4G = new $hs.Thunk();
        hs_sat26Dh4G.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("MathSymbol\x00");
        };
        var hs_sat26Dh4H = new $hs.Data(1);
        hs_sat26Dh4H.data = [hs_sat26Dh4G, hs_sat26Dh4F];
        var hs_sat26Dh4I = new $hs.Data(2);
        hs_sat26Dh4I.data = [hs_sat26Dh4H, hs_sat26Dh4E];
        var hs_sat26Dh4J = new $hs.Thunk();
        hs_sat26Dh4J.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_OtherPunctuation);
        };
        var hs_sat26Dh4K = new $hs.Thunk();
        hs_sat26Dh4K.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("OtherPunctuation\x00");
        };
        var hs_sat26Dh4L = new $hs.Data(1);
        hs_sat26Dh4L.data = [hs_sat26Dh4K, hs_sat26Dh4J];
        var hs_sat26Dh4M = new $hs.Data(2);
        hs_sat26Dh4M.data = [hs_sat26Dh4L, hs_sat26Dh4I];
        var hs_sat26Dh4N = new $hs.Thunk();
        hs_sat26Dh4N.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_FinalQuote);
        };
        var hs_sat26Dh4O = new $hs.Thunk();
        hs_sat26Dh4O.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("FinalQuote\x00");
        };
        var hs_sat26Dh4P = new $hs.Data(1);
        hs_sat26Dh4P.data = [hs_sat26Dh4O, hs_sat26Dh4N];
        var hs_sat26Dh4Q = new $hs.Data(2);
        hs_sat26Dh4Q.data = [hs_sat26Dh4P, hs_sat26Dh4M];
        var hs_sat26Dh4R = new $hs.Thunk();
        hs_sat26Dh4R.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_InitialQuote);
        };
        var hs_sat26Dh4S = new $hs.Thunk();
        hs_sat26Dh4S.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("InitialQuote\x00");
        };
        var hs_sat26Dh4T = new $hs.Data(1);
        hs_sat26Dh4T.data = [hs_sat26Dh4S, hs_sat26Dh4R];
        var hs_sat26Dh4U = new $hs.Data(2);
        hs_sat26Dh4U.data = [hs_sat26Dh4T, hs_sat26Dh4Q];
        var hs_sat26Dh4V = new $hs.Thunk();
        hs_sat26Dh4V.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_ClosePunctuation);
        };
        var hs_sat26Dh4W = new $hs.Thunk();
        hs_sat26Dh4W.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ClosePunctuation\x00");
        };
        var hs_sat26Dh4X = new $hs.Data(1);
        hs_sat26Dh4X.data = [hs_sat26Dh4W, hs_sat26Dh4V];
        var hs_sat26Dh4Y = new $hs.Data(2);
        hs_sat26Dh4Y.data = [hs_sat26Dh4X, hs_sat26Dh4U];
        var hs_sat26Dh4Z = new $hs.Thunk();
        hs_sat26Dh4Z.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_OpenPunctuation);
        };
        var hs_sat26Dh50 = new $hs.Thunk();
        hs_sat26Dh50.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("OpenPunctuation\x00");
        };
        var hs_sat26Dh51 = new $hs.Data(1);
        hs_sat26Dh51.data = [hs_sat26Dh50, hs_sat26Dh4Z];
        var hs_sat26Dh52 = new $hs.Data(2);
        hs_sat26Dh52.data = [hs_sat26Dh51, hs_sat26Dh4Y];
        var hs_sat26Dh53 = new $hs.Thunk();
        hs_sat26Dh53.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_DashPunctuation);
        };
        var hs_sat26Dh54 = new $hs.Thunk();
        hs_sat26Dh54.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("DashPunctuation\x00");
        };
        var hs_sat26Dh55 = new $hs.Data(1);
        hs_sat26Dh55.data = [hs_sat26Dh54, hs_sat26Dh53];
        var hs_sat26Dh56 = new $hs.Data(2);
        hs_sat26Dh56.data = [hs_sat26Dh55, hs_sat26Dh52];
        var hs_sat26Dh57 = new $hs.Thunk();
        hs_sat26Dh57.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_ConnectorPunctuation);
        };
        var hs_sat26Dh58 = new $hs.Thunk();
        hs_sat26Dh58.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ConnectorPunctuation\x00");
        };
        var hs_sat26Dh59 = new $hs.Data(1);
        hs_sat26Dh59.data = [hs_sat26Dh58, hs_sat26Dh57];
        var hs_sat26Dh5a = new $hs.Data(2);
        hs_sat26Dh5a.data = [hs_sat26Dh59, hs_sat26Dh56];
        var hs_sat26Dh5b = new $hs.Thunk();
        hs_sat26Dh5b.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_OtherNumber);
        };
        var hs_sat26Dh5c = new $hs.Thunk();
        hs_sat26Dh5c.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("OtherNumber\x00");
        };
        var hs_sat26Dh5d = new $hs.Data(1);
        hs_sat26Dh5d.data = [hs_sat26Dh5c, hs_sat26Dh5b];
        var hs_sat26Dh5e = new $hs.Data(2);
        hs_sat26Dh5e.data = [hs_sat26Dh5d, hs_sat26Dh5a];
        var hs_sat26Dh5f = new $hs.Thunk();
        hs_sat26Dh5f.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_LetterNumber);
        };
        var hs_sat26Dh5g = new $hs.Thunk();
        hs_sat26Dh5g.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("LetterNumber\x00");
        };
        var hs_sat26Dh5h = new $hs.Data(1);
        hs_sat26Dh5h.data = [hs_sat26Dh5g, hs_sat26Dh5f];
        var hs_sat26Dh5i = new $hs.Data(2);
        hs_sat26Dh5i.data = [hs_sat26Dh5h, hs_sat26Dh5e];
        var hs_sat26Dh5j = new $hs.Thunk();
        hs_sat26Dh5j.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_DecimalNumber);
        };
        var hs_sat26Dh5k = new $hs.Thunk();
        hs_sat26Dh5k.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("DecimalNumber\x00");
        };
        var hs_sat26Dh5l = new $hs.Data(1);
        hs_sat26Dh5l.data = [hs_sat26Dh5k, hs_sat26Dh5j];
        var hs_sat26Dh5m = new $hs.Data(2);
        hs_sat26Dh5m.data = [hs_sat26Dh5l, hs_sat26Dh5i];
        var hs_sat26Dh5n = new $hs.Thunk();
        hs_sat26Dh5n.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_EnclosingMark);
        };
        var hs_sat26Dh5o = new $hs.Thunk();
        hs_sat26Dh5o.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("EnclosingMark\x00");
        };
        var hs_sat26Dh5p = new $hs.Data(1);
        hs_sat26Dh5p.data = [hs_sat26Dh5o, hs_sat26Dh5n];
        var hs_sat26Dh5q = new $hs.Data(2);
        hs_sat26Dh5q.data = [hs_sat26Dh5p, hs_sat26Dh5m];
        var hs_sat26Dh5r = new $hs.Thunk();
        hs_sat26Dh5r.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_SpacingCombiningMark);
        };
        var hs_sat26Dh5s = new $hs.Thunk();
        hs_sat26Dh5s.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("SpacingCombiningMark\x00");
        };
        var hs_sat26Dh5t = new $hs.Data(1);
        hs_sat26Dh5t.data = [hs_sat26Dh5s, hs_sat26Dh5r];
        var hs_sat26Dh5u = new $hs.Data(2);
        hs_sat26Dh5u.data = [hs_sat26Dh5t, hs_sat26Dh5q];
        var hs_sat26Dh5v = new $hs.Thunk();
        hs_sat26Dh5v.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_NonSpacingMark);
        };
        var hs_sat26Dh5w = new $hs.Thunk();
        hs_sat26Dh5w.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("NonSpacingMark\x00");
        };
        var hs_sat26Dh5x = new $hs.Data(1);
        hs_sat26Dh5x.data = [hs_sat26Dh5w, hs_sat26Dh5v];
        var hs_sat26Dh5y = new $hs.Data(2);
        hs_sat26Dh5y.data = [hs_sat26Dh5x, hs_sat26Dh5u];
        var hs_sat26Dh5z = new $hs.Thunk();
        hs_sat26Dh5z.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_OtherLetter);
        };
        var hs_sat26Dh5A = new $hs.Thunk();
        hs_sat26Dh5A.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("OtherLetter\x00");
        };
        var hs_sat26Dh5B = new $hs.Data(1);
        hs_sat26Dh5B.data = [hs_sat26Dh5A, hs_sat26Dh5z];
        var hs_sat26Dh5C = new $hs.Data(2);
        hs_sat26Dh5C.data = [hs_sat26Dh5B, hs_sat26Dh5y];
        var hs_sat26Dh5D = new $hs.Thunk();
        hs_sat26Dh5D.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_ModifierLetter);
        };
        var hs_sat26Dh5E = new $hs.Thunk();
        hs_sat26Dh5E.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ModifierLetter\x00");
        };
        var hs_sat26Dh5F = new $hs.Data(1);
        hs_sat26Dh5F.data = [hs_sat26Dh5E, hs_sat26Dh5D];
        var hs_sat26Dh5G = new $hs.Data(2);
        hs_sat26Dh5G.data = [hs_sat26Dh5F, hs_sat26Dh5C];
        var hs_sat26Dh5H = new $hs.Thunk();
        hs_sat26Dh5H.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_TitlecaseLetter);
        };
        var hs_sat26Dh5I = new $hs.Thunk();
        hs_sat26Dh5I.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("TitlecaseLetter\x00");
        };
        var hs_sat26Dh5J = new $hs.Data(1);
        hs_sat26Dh5J.data = [hs_sat26Dh5I, hs_sat26Dh5H];
        var hs_sat26Dh5K = new $hs.Data(2);
        hs_sat26Dh5K.data = [hs_sat26Dh5J, hs_sat26Dh5G];
        var hs_sat26Dh5L = new $hs.Thunk();
        hs_sat26Dh5L.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_LowercaseLetter);
        };
        var hs_sat26Dh5M = new $hs.Thunk();
        hs_sat26Dh5M.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("LowercaseLetter\x00");
        };
        var hs_sat26Dh5N = new $hs.Data(1);
        hs_sat26Dh5N.data = [hs_sat26Dh5M, hs_sat26Dh5L];
        var hs_sat26Dh5O = new $hs.Data(2);
        hs_sat26Dh5O.data = [hs_sat26Dh5N, hs_sat26Dh5K];
        var hs_sat26Dh5P = new $hs.Thunk();
        hs_sat26Dh5P.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.DataziChar.hs_UppercaseLetter);
        };
        var hs_sat26Dh5Q = new $hs.Thunk();
        hs_sat26Dh5Q.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("UppercaseLetter\x00");
        };
        var hs_sat26Dh5R = new $hs.Data(1);
        hs_sat26Dh5R.data = [hs_sat26Dh5Q, hs_sat26Dh5P];
        var hs_sat26Dh3W = new $hs.Data(2);
        hs_sat26Dh3W.data = [hs_sat26Dh5R, hs_sat26Dh5O];
        return $hs.modules.GHCziRead.hs_choose.hscall(hs_sat26Dh3W);
    };
    hs_zdcreadPrec25uSrK.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26Dh5S);
    };
    this.hs_zdfReadGeneralCategory.data = [hs_zdcreadsPrec25uStK, hs_zdcreadList25uStJ, hs_zdcreadPrec25uSrK, hs_zdcreadListPrec25uStI];
    hs_zdcreadListPrec25uStI.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall($hs.modules.DataziChar.hs_zdfReadGeneralCategory);
    };
    hs_zdcreadList25uStJ.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListDefault.hscall($hs.modules.DataziChar.hs_zdfReadGeneralCategory);
    };
    hs_zdcreadsPrec25uStK.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall($hs.modules.DataziChar.hs_zdfReadGeneralCategory);
    };
    hs_zdcenumFromThen25uStL.evaluate = function (hs_a26Dh04, hs_b26Dh06) {
        var hs_azh26Dh08 = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26Dh04);
        var hs_bzh26Dh0a = $hs.modules.GHCziBase.hs_getTag.hscall(hs_b26Dh06);
        var hs_sat26Dh5T = new $hs.Thunk();
        hs_sat26Dh5T.evaluateOnce = function () {
            var hs_sat26Dh5V = new $hs.Thunk();
            hs_sat26Dh5V.evaluateOnce = function () {
                var hs_sat26Dh5X = new $hs.Data(1);
                hs_sat26Dh5X.data = [hs_bzh26Dh0a];
                var hs_sat26Dh5Y = new $hs.Data(1);
                hs_sat26Dh5Y.data = [hs_azh26Dh08];
                var hs_wild26Dh5Z = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26Dh5Y, hs_sat26Dh5X);
                switch (hs_wild26Dh5Z.tag) {
                case 1:
                    if (hs_zdmaxtagzuGeneralCategory25sTA9.notEvaluated) {
                        return hs_zdmaxtagzuGeneralCategory25sTA9.hscall();
                    } else {
                        return hs_zdmaxtagzuGeneralCategory25sTA9;
                    }
                case 2:
                    var $res = new $hs.Data(1);
                    $res.data = [0];
                    return $res;
                }
            };
            var hs_sat26Dh5W = new $hs.Data(1);
            hs_sat26Dh5W.data = [hs_bzh26Dh0a];
            var hs_sat26Dh5U = new $hs.Data(1);
            hs_sat26Dh5U.data = [hs_azh26Dh08];
            return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26Dh5U, hs_sat26Dh5W, hs_sat26Dh5V);
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuGeneralCategory25sTAa, hs_sat26Dh5T);
    };
    hs_zdcenumFrom25uSu1.evaluate = function (hs_a26Dh0j) {
        var hs_azh26Dh0l = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26Dh0j);
        var hs_sat26Dh60 = new $hs.Thunk();
        hs_sat26Dh60.evaluateOnce = function () {
            var hs_sat26Dh61 = new $hs.Data(1);
            hs_sat26Dh61.data = [hs_azh26Dh0l];
            return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26Dh61, hs_zdmaxtagzuGeneralCategory25sTA9);
        };
        return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuGeneralCategory25sTAa, hs_sat26Dh60);
    };
    hs_zdcfromEnum25uSu8.evaluate = function (hs_a26Dh0q) {
        var hs_azh26Dh0s = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26Dh0q);
        var $res = new $hs.Data(1);
        $res.data = [hs_azh26Dh0s];
        return $res;
    };
    hs_zdctoEnum25uSud.evaluate = function (hs_a26Dh0v) {
        var hs_sat26Dh63 = new $hs.Thunk();
        hs_sat26Dh63.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a26Dh0v, hs_zdmaxtagzuGeneralCategory25sTA9);
        };
        var hs_sat26Dh64 = new $hs.Thunk();
        hs_sat26Dh64.evaluateOnce = function () {
            var hs_sat26Dh6g = new $hs.Data(1);
            hs_sat26Dh6g.data = [0];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a26Dh0v, hs_sat26Dh6g);
        };
        var hs_wild26Dh65 = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dh64, hs_sat26Dh63);
        switch (hs_wild26Dh65.tag) {
        case 1:
            var hs_sat26Dh66 = new $hs.Thunk();
            hs_sat26Dh66.evaluateOnce = function () {
                var hs_sat26Dh6a = new $hs.Thunk();
                hs_sat26Dh6a.evaluateOnce = function () {
                    var hs_sat26Dh6c = new $hs.Thunk();
                    hs_sat26Dh6c.evaluateOnce = function () {
                        var hs_sat26Dh6e = new $hs.Data(1);
                        hs_sat26Dh6e.data = [")"];
                        var hs_sat26Dh6f = new $hs.Data(2);
                        hs_sat26Dh6f.data = [hs_sat26Dh6e, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_sat26Dh6d = new $hs.Data(1);
                        hs_sat26Dh6d.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26Dh6d, hs_zdmaxtagzuGeneralCategory25sTA9, hs_sat26Dh6f);
                    };
                    var hs_sat26Dh6b = new $hs.Thunk();
                    hs_sat26Dh6b.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(") is outside of enumeration's range (0,\x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dh6b, hs_sat26Dh6c);
                };
                var hs_sat26Dh69 = new $hs.Data(1);
                hs_sat26Dh69.data = [0];
                return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26Dh69, hs_a26Dh0v, hs_sat26Dh6a);
            };
            var hs_sat26Dh67 = new $hs.Thunk();
            hs_sat26Dh67.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("toEnum{GeneralCategory}: tag (\x00");
            };
            var hs_sat26Dh68 = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dh67, hs_sat26Dh66);
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dh68);
        case 2:
            var hs_wild126Dh62 = hs_a26Dh0v;
            if (hs_a26Dh0v.notEvaluated) {
                hs_wild126Dh62 = hs_a26Dh0v.hscall();
            }
            var hs_a126Dh0M = hs_wild126Dh62.data[0];
            throw "primitive operation tagToEnum#. Not implemeted yet.";
        }
    };
    hs_zdcpred25uSux.evaluate = function (hs_a26Dh0P) {
        var hs_azh26Dh0S = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26Dh0P);
        var hs_sat26Dh6h = new $hs.Data(1);
        hs_sat26Dh6h.data = [hs_azh26Dh0S];
        var hs_sat26Dh6i = new $hs.Data(1);
        hs_sat26Dh6i.data = [0];
        var hs_wild26Dh6j = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26Dh6i, hs_sat26Dh6h);
        switch (hs_wild26Dh6j.tag) {
        case 1:
            var hs_sat26Dh6l = new $hs.Data(1);
            hs_sat26Dh6l.data = [-1];
            var hs_sat26Dh6m = new $hs.Data(1);
            hs_sat26Dh6m.data = [hs_azh26Dh0S];
            var hs_wild126Dh6n = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dh6m, hs_sat26Dh6l);
            var hs_a126Dh0Z = hs_wild126Dh6n.data[0];
            throw "primitive operation tagToEnum#. Not implemeted yet.";
        case 2:
            var hs_sat26Dh6k = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("pred{GeneralCategory}: tried to take `pred' of first tag in enumeration\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dh6k);
        }
    };
    hs_zdcsucc25uSuL.evaluate = function (hs_a26Dh13) {
        var hs_azh26Dh15 = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26Dh13);
        var hs_sat26Dh6o = new $hs.Data(1);
        hs_sat26Dh6o.data = [hs_azh26Dh15];
        var hs_wild26Dh6p = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_zdmaxtagzuGeneralCategory25sTA9, hs_sat26Dh6o);
        switch (hs_wild26Dh6p.tag) {
        case 1:
            var hs_sat26Dh6r = new $hs.Data(1);
            hs_sat26Dh6r.data = [1];
            var hs_sat26Dh6s = new $hs.Data(1);
            hs_sat26Dh6s.data = [hs_azh26Dh15];
            var hs_wild126Dh6t = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dh6s, hs_sat26Dh6r);
            var hs_a126Dh1c = hs_wild126Dh6t.data[0];
            throw "primitive operation tagToEnum#. Not implemeted yet.";
        case 2:
            var hs_sat26Dh6q = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("succ{GeneralCategory}: tried to take `succ' of last tag in enumeration\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dh6q);
        }
    };
    this.hs_zdfEnumGeneralCategory.data = [hs_zdcsucc25uSuL, hs_zdcpred25uSux, hs_zdctoEnum25uSud, hs_zdcfromEnum25uSu8, hs_zdcenumFrom25uSu1, hs_zdcenumFromThen25uStL, hs_zdcenumFromTo25uSuZ, hs_zdcenumFromThenTo25uSuY];
    hs_zdcenumFromThenTo25uSuY.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromThenTo.hscall($hs.modules.DataziChar.hs_zdfEnumGeneralCategory);
    };
    hs_zdcenumFromTo25uSuZ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromTo.hscall($hs.modules.DataziChar.hs_zdfEnumGeneralCategory);
    };
    hs_zdczlze25uSv0.evaluate = function (hs_a26Dh1j, hs_b26Dh1l) {
        var hs_azh26Dh1n = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26Dh1j);
        var hs_bzh26Dh1o = $hs.modules.GHCziBase.hs_getTag.hscall(hs_b26Dh1l);
        return hs_azh26Dh1n <= hs_bzh26Dh1o ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczg25uSv9.evaluate = function (hs_a26Dh1s, hs_b26Dh1u) {
        var hs_azh26Dh1w = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26Dh1s);
        var hs_bzh26Dh1x = $hs.modules.GHCziBase.hs_getTag.hscall(hs_b26Dh1u);
        return hs_azh26Dh1w > hs_bzh26Dh1x ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczgze25uSvi.evaluate = function (hs_a26Dh1B, hs_b26Dh1D) {
        var hs_azh26Dh1F = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26Dh1B);
        var hs_bzh26Dh1G = $hs.modules.GHCziBase.hs_getTag.hscall(hs_b26Dh1D);
        return hs_azh26Dh1F >= hs_bzh26Dh1G ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczl25uSvr.evaluate = function (hs_a26Dh1K, hs_b26Dh1M) {
        var hs_azh26Dh1O = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26Dh1K);
        var hs_bzh26Dh1P = $hs.modules.GHCziBase.hs_getTag.hscall(hs_b26Dh1M);
        return hs_azh26Dh1O < hs_bzh26Dh1P ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdccompare25uSvA.evaluate = function (hs_a26Dh1T, hs_b26Dh1V) {
        var hs_azh26Dh1X = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26Dh1T);
        var hs_bzh26Dh1Y = $hs.modules.GHCziBase.hs_getTag.hscall(hs_b26Dh1V);
        var hs_wild26Dh6u = hs_azh26Dh1X < hs_bzh26Dh1Y ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26Dh6u.tag) {
        case 1:
            var hs_wild126Dh6v = hs_azh26Dh1X == hs_bzh26Dh1Y ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild126Dh6v.tag) {
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
    hs_zdczeze25uSvL.evaluate = function (hs_a26Dh24, hs_b26Dh26) {
        var hs_azh26Dh28 = $hs.modules.GHCziBase.hs_getTag.hscall(hs_a26Dh24);
        var hs_bzh26Dh29 = $hs.modules.GHCziBase.hs_getTag.hscall(hs_b26Dh26);
        return hs_azh26Dh28 == hs_bzh26Dh29 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_zdfEqGeneralCategory.data = [hs_zdczeze25uSvL, hs_zdczsze25uSvU];
    hs_zdczsze25uSvU.evaluate = function (hs_a26Dh2d, hs_b26Dh2e) {
        var hs_sat26Dh6w = new $hs.Thunk();
        hs_sat26Dh6w.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.DataziChar.hs_zdfEqGeneralCategory, hs_a26Dh2d, hs_b26Dh2e);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26Dh6w);
    };
    this.hs_zdfOrdGeneralCategory.data = [$hs.modules.DataziChar.hs_zdfEqGeneralCategory, hs_zdccompare25uSvA, hs_zdczl25uSvr, hs_zdczgze25uSvi, hs_zdczg25uSv9, hs_zdczlze25uSv0, hs_zdcmax25uSw1, hs_zdcmin25uSw0];
    hs_zdcmin25uSw0.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.DataziChar.hs_zdfOrdGeneralCategory);
    };
    hs_zdcmax25uSw1.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.DataziChar.hs_zdfOrdGeneralCategory);
    };
    this.hs_zdfIxGeneralCategory.data = [$hs.modules.DataziChar.hs_zdfOrdGeneralCategory, hs_zdcrange25uSqR, hs_zdcindex25uSw4, hs_zdcunsafeIndex25uSqD, hs_zdcinRange25uSqm, hs_zdcrangeSizze25uSw3, hs_zdcunsafeRangeSizze25uSw2];
    hs_zdcunsafeRangeSizze25uSw2.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmunsafeRangeSizze.hscall($hs.modules.DataziChar.hs_zdfIxGeneralCategory);
    };
    hs_zdcrangeSizze25uSw3.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmrangeSizze.hscall($hs.modules.DataziChar.hs_zdfIxGeneralCategory);
    };
    hs_zdcindex25uSw4.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmindex.hscall($hs.modules.DataziChar.hs_zdfIxGeneralCategory);
    };
    this.hs_digitToInt.evaluate = function (hs_c26Dh2m) {
        var hs_wild26Dh6y = $hs.modules.GHCziUnicode.hs_isDigit.hscall(hs_c26Dh2m);
        switch (hs_wild26Dh6y.tag) {
        case 1:
            var hs_sat26Dh6C = new $hs.Thunk();
            hs_sat26Dh6C.evaluateOnce = function () {
                var hs_sat26Dh6X = new $hs.Data(1);
                hs_sat26Dh6X.data = ["f"];
                return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26Dh2m, hs_sat26Dh6X);
            };
            var hs_sat26Dh6D = new $hs.Thunk();
            hs_sat26Dh6D.evaluateOnce = function () {
                var hs_sat26Dh6W = new $hs.Data(1);
                hs_sat26Dh6W.data = ["a"];
                return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26Dh2m, hs_sat26Dh6W);
            };
            var hs_wild126Dh6E = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dh6D, hs_sat26Dh6C);
            switch (hs_wild126Dh6E.tag) {
            case 1:
                var hs_sat26Dh6K = new $hs.Thunk();
                hs_sat26Dh6K.evaluateOnce = function () {
                    var hs_sat26Dh6V = new $hs.Data(1);
                    hs_sat26Dh6V.data = ["F"];
                    return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26Dh2m, hs_sat26Dh6V);
                };
                var hs_sat26Dh6L = new $hs.Thunk();
                hs_sat26Dh6L.evaluateOnce = function () {
                    var hs_sat26Dh6U = new $hs.Data(1);
                    hs_sat26Dh6U.data = ["A"];
                    return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26Dh2m, hs_sat26Dh6U);
                };
                var hs_wild226Dh6M = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dh6L, hs_sat26Dh6K);
                switch (hs_wild226Dh6M.tag) {
                case 1:
                    var hs_sat26Dh6R = new $hs.Thunk();
                    hs_sat26Dh6R.evaluateOnce = function () {
                        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowChar, hs_c26Dh2m);
                    };
                    var hs_sat26Dh6S = new $hs.Thunk();
                    hs_sat26Dh6S.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Char.digitToInt: not a digit \x00");
                    };
                    var hs_sat26Dh6T = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dh6S, hs_sat26Dh6R);
                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dh6T);
                case 2:
                    var hs_sat26Dh6N = new $hs.Data(1);
                    hs_sat26Dh6N.data = [10];
                    var hs_sat26Dh6J = new $hs.Thunk();
                    hs_sat26Dh6J.evaluateOnce = function () {
                        var hs_sat26Dh6P = new $hs.Thunk();
                        hs_sat26Dh6P.evaluateOnce = function () {
                            var hs_sat26Dh6Q = new $hs.Data(1);
                            hs_sat26Dh6Q.data = ["A"];
                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26Dh6Q);
                        };
                        var hs_sat26Dh6O = new $hs.Thunk();
                        hs_sat26Dh6O.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26Dh2m);
                        };
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dh6O, hs_sat26Dh6P);
                    };
                    return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dh6J, hs_sat26Dh6N);
                }
            case 2:
                var hs_sat26Dh6F = new $hs.Data(1);
                hs_sat26Dh6F.data = [10];
                var hs_sat26Dh6B = new $hs.Thunk();
                hs_sat26Dh6B.evaluateOnce = function () {
                    var hs_sat26Dh6H = new $hs.Thunk();
                    hs_sat26Dh6H.evaluateOnce = function () {
                        var hs_sat26Dh6I = new $hs.Data(1);
                        hs_sat26Dh6I.data = ["a"];
                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26Dh6I);
                    };
                    var hs_sat26Dh6G = new $hs.Thunk();
                    hs_sat26Dh6G.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26Dh2m);
                    };
                    return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dh6G, hs_sat26Dh6H);
                };
                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dh6B, hs_sat26Dh6F);
            }
        case 2:
            var hs_sat26Dh6z = new $hs.Thunk();
            hs_sat26Dh6z.evaluateOnce = function () {
                var hs_sat26Dh6A = new $hs.Data(1);
                hs_sat26Dh6A.data = ["0"];
                return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26Dh6A);
            };
            var hs_sat26Dh6x = new $hs.Thunk();
            hs_sat26Dh6x.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26Dh2m);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dh6x, hs_sat26Dh6z);
        }
    };
    this.hs_generalCategory.evaluate = function (hs_c26Dh2S) {
        var hs_sat26Dh6Z = new $hs.Thunk();
        hs_sat26Dh6Z.evaluateOnce = function () {
            var hs_sat26Dh71 = new $hs.Thunk();
            hs_sat26Dh71.evaluateOnce = function () {
                var hs_sat26Dh72 = new $hs.Thunk();
                hs_sat26Dh72.evaluateOnce = function () {
                    var hs_sat26Dh74 = new $hs.Thunk();
                    hs_sat26Dh74.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26Dh2S);
                    };
                    var hs_sat26Dh73 = new $hs.Thunk();
                    hs_sat26Dh73.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dh73, hs_sat26Dh74);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziUnicode.hs_wgencat, hs_sat26Dh72);
            };
            var hs_sat26Dh70 = new $hs.Thunk();
            hs_sat26Dh70.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.GHCziNum.hs_zdfNumInt);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dh70, hs_sat26Dh71);
        };
        var hs_sat26Dh6Y = new $hs.Thunk();
        hs_sat26Dh6Y.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.DataziChar.hs_zdfEnumGeneralCategory);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dh6Y, hs_sat26Dh6Z);
    };
    this.hs_isLetter.evaluate = function (hs_c26Dh2Y) {
        var hs_wild26Dh75 = $hs.modules.DataziChar.hs_generalCategory.hscall(hs_c26Dh2Y);
        switch (hs_wild26Dh75.tag) {
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
    this.hs_isMark.evaluate = function (hs_c26Dh31) {
        var hs_wild26Dh76 = $hs.modules.DataziChar.hs_generalCategory.hscall(hs_c26Dh31);
        switch (hs_wild26Dh76.tag) {
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
    this.hs_isNumber.evaluate = function (hs_c26Dh34) {
        var hs_wild26Dh77 = $hs.modules.DataziChar.hs_generalCategory.hscall(hs_c26Dh34);
        switch (hs_wild26Dh77.tag) {
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
    this.hs_isPunctuation.evaluate = function (hs_c26Dh37) {
        var hs_wild26Dh78 = $hs.modules.DataziChar.hs_generalCategory.hscall(hs_c26Dh37);
        switch (hs_wild26Dh78.tag) {
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
    this.hs_isSymbol.evaluate = function (hs_c26Dh3a) {
        var hs_wild26Dh79 = $hs.modules.DataziChar.hs_generalCategory.hscall(hs_c26Dh3a);
        switch (hs_wild26Dh79.tag) {
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
    this.hs_isSeparator.evaluate = function (hs_c26Dh3d) {
        var hs_wild26Dh7a = $hs.modules.DataziChar.hs_generalCategory.hscall(hs_c26Dh3d);
        switch (hs_wild26Dh7a.tag) {
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
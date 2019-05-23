
$hs.modules.GHCziShow = new $hs.Module();
$hs.modules.GHCziShow.dependencies = ["GHC.Types", "GHC.Base", "GHC.Err", "GHC.Classes", "GHC.List"];
$hs.modules.GHCziShow.initBeforeDependencies = function () {
    this.hs_showsPrec = new $hs.Func(1);
    this.hs_show = new $hs.Func(1);
    this.hs_showList = new $hs.Func(1);
    this.hs_zddmshowsPrec = new $hs.Func(4);
    this.hs_asciiTab = new $hs.Data(2);
    this.hs_protectEsc = new $hs.Func(2);
    this.hs_showSpace = new $hs.Func(1);
    this.hs_showString = new $hs.Thunk();
    this.hs_showChar = new $hs.Func(2);
    this.hs_showParen = new $hs.Func(2);
    this.hs_shows = new $hs.Func(1);
    this.hs_zddmshow = new $hs.Func(2);
    this.hs_appPrec1 = new $hs.Data(1);
    this.hs_appPrec = new $hs.Data(1);
    this.hs_showListzuzu = new $hs.Func(3);
    this.hs_zddmshowList = new $hs.Func(3);
    this.hs_showSignedInt = new $hs.Func(3);
    this.hs_zdfShowZLZR = new $hs.Data(1);
    this.hs_zdfShowZMZN = new $hs.Func(1);
    this.hs_zdfShowBool = new $hs.Data(1);
    this.hs_zdfShowOrdering = new $hs.Data(1);
    this.hs_zdfShowInt = new $hs.Data(1);
    this.hs_zdfShowMaybe = new $hs.Func(1);
    this.hs_zdfShowZLz2cUZR = new $hs.Func(2);
    this.hs_zdfShowZLz2cUz2cUZR = new $hs.Func(3);
    this.hs_zdfShowZLz2cUz2cUz2cUZR = new $hs.Func(4);
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUZR = new $hs.Func(5);
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(6);
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(7);
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(8);
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(9);
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(10);
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(11);
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(12);
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(13);
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(14);
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(15);
    this.hs_showLitChar = new $hs.Func(2);
    this.hs_zdfShowChar = new $hs.Data(1);
    this.hs_intToDigit = new $hs.Func(1);
    this.hs_DZCShow = new $hs.Func(3);
    this.hs_showsPrec.notEvaluated = true;
    this.hs_showsPrec.evaluate = function (hs_tpl26De8u) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_tpl26De8u);
    };
    this.hs_show.notEvaluated = true;
    this.hs_show.evaluate = function (hs_tpl26De8B) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_tpl26De8B);
    };
    this.hs_showList.notEvaluated = true;
    this.hs_showList.evaluate = function (hs_tpl26De8I) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_tpl26De8I);
    };
    this.hs_zddmshowsPrec.notEvaluated = true;
    this.hs_zddmshowsPrec.evaluate = function (hs_zddShow26De8S, hs_ds26De8W, hs_x26De8T, hs_s26De8V) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26De8S, hs_ds26De8W, hs_x26De8T, hs_s26De8V);
    };
    this.hs_asciiTab.notEvaluated = true;
    this.hs_asciiTab.evaluate = function () {
        $hs.modules.GHCziShow.loadDependencies();
        return this;
    };
    this.hs_protectEsc.notEvaluated = true;
    this.hs_protectEsc.evaluate = function (hs_p26DebU, hs_f26DebN) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_p26DebU, hs_f26DebN);
    };
    this.hs_showSpace.notEvaluated = true;
    this.hs_showSpace.evaluate = function (hs_xs26Dec1) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_xs26Dec1);
    };
    this.hs_showString.evaluateOnce = function () {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_showChar.notEvaluated = true;
    this.hs_showChar.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_showParen.notEvaluated = true;
    this.hs_showParen.evaluate = function (hs_b26Dec4, hs_p26Dec6) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_b26Dec4, hs_p26Dec6);
    };
    this.hs_shows.notEvaluated = true;
    this.hs_shows.evaluate = function (hs_zddShow26Decd) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26Decd);
    };
    this.hs_zddmshow.notEvaluated = true;
    this.hs_zddmshow.evaluate = function (hs_zddShow26Decg, hs_x26Dech) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26Decg, hs_x26Dech);
    };
    this.hs_appPrec1.notEvaluated = true;
    this.hs_appPrec1.evaluate = function () {
        $hs.modules.GHCziShow.loadDependencies();
        return this;
    };
    this.hs_appPrec.notEvaluated = true;
    this.hs_appPrec.evaluate = function () {
        $hs.modules.GHCziShow.loadDependencies();
        return this;
    };
    this.hs_showListzuzu.notEvaluated = true;
    this.hs_showListzuzu.evaluate = function (hs_ds26DecU, hs_ds126DecB, hs_s26DecE) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_ds26DecU, hs_ds126DecB, hs_s26DecE);
    };
    this.hs_zddmshowList.notEvaluated = true;
    this.hs_zddmshowList.evaluate = function (hs_zddShow26Ded3, hs_ls26Ded5, hs_s26Ded6) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26Ded3, hs_ls26Ded5, hs_s26Ded6);
    };
    this.hs_showSignedInt.notEvaluated = true;
    this.hs_showSignedInt.evaluate = function (hs_ds26Deda, hs_ds126Dedd, hs_r26Dedl) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_ds26Deda, hs_ds126Dedd, hs_r26Dedl);
    };
    this.hs_zdfShowZLZR.notEvaluated = true;
    this.hs_zdfShowZLZR.evaluate = function () {
        $hs.modules.GHCziShow.loadDependencies();
        return this;
    };
    this.hs_zdfShowZMZN.notEvaluated = true;
    this.hs_zdfShowZMZN.evaluate = function (hs_zddShow26DedV) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26DedV);
    };
    this.hs_zdfShowBool.notEvaluated = true;
    this.hs_zdfShowBool.evaluate = function () {
        $hs.modules.GHCziShow.loadDependencies();
        return this;
    };
    this.hs_zdfShowOrdering.notEvaluated = true;
    this.hs_zdfShowOrdering.evaluate = function () {
        $hs.modules.GHCziShow.loadDependencies();
        return this;
    };
    this.hs_zdfShowInt.notEvaluated = true;
    this.hs_zdfShowInt.evaluate = function () {
        $hs.modules.GHCziShow.loadDependencies();
        return this;
    };
    this.hs_zdfShowMaybe.notEvaluated = true;
    this.hs_zdfShowMaybe.evaluate = function (hs_zddShow26Defv) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26Defv);
    };
    this.hs_zdfShowZLz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUZR.evaluate = function (hs_zddShow26Degh, hs_zddShow126Degi) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26Degh, hs_zddShow126Degi);
    };
    this.hs_zdfShowZLz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUZR.evaluate = function (hs_zddShow26Dehf, hs_zddShow126Dehg, hs_zddShow226Dehh) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26Dehf, hs_zddShow126Dehg, hs_zddShow226Dehh);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26Deip, hs_zddShow126Deiq, hs_zddShow226Deir, hs_zddShow326Deis) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26Deip, hs_zddShow126Deiq, hs_zddShow226Deir, hs_zddShow326Deis);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26DejL, hs_zddShow126DejM, hs_zddShow226DejN, hs_zddShow326DejO, hs_zddShow426DejP) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26DejL, hs_zddShow126DejM, hs_zddShow226DejN, hs_zddShow326DejO, hs_zddShow426DejP);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26Delj, hs_zddShow126Delk, hs_zddShow226Dell, hs_zddShow326Delm, hs_zddShow426Deln, hs_zddShow526Delo) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26Delj, hs_zddShow126Delk, hs_zddShow226Dell, hs_zddShow326Delm, hs_zddShow426Deln, hs_zddShow526Delo);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26Den3, hs_zddShow126Den4, hs_zddShow226Den5, hs_zddShow326Den6, hs_zddShow426Den7, hs_zddShow526Den8, hs_zddShow626Den9) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26Den3, hs_zddShow126Den4, hs_zddShow226Den5, hs_zddShow326Den6, hs_zddShow426Den7, hs_zddShow526Den8, hs_zddShow626Den9);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26DeoZ, hs_zddShow126Dep0, hs_zddShow226Dep1, hs_zddShow326Dep2, hs_zddShow426Dep3, hs_zddShow526Dep4, hs_zddShow626Dep5, hs_zddShow726Dep6) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26DeoZ, hs_zddShow126Dep0, hs_zddShow226Dep1, hs_zddShow326Dep2, hs_zddShow426Dep3, hs_zddShow526Dep4, hs_zddShow626Dep5, hs_zddShow726Dep6);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26Der7, hs_zddShow126Der8, hs_zddShow226Der9, hs_zddShow326Dera, hs_zddShow426Derb, hs_zddShow526Derc, hs_zddShow626Derd, hs_zddShow726Dere, hs_zddShow826Derf) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26Der7, hs_zddShow126Der8, hs_zddShow226Der9, hs_zddShow326Dera, hs_zddShow426Derb, hs_zddShow526Derc, hs_zddShow626Derd, hs_zddShow726Dere, hs_zddShow826Derf);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26Detr, hs_zddShow126Dets, hs_zddShow226Dett, hs_zddShow326Detu, hs_zddShow426Detv, hs_zddShow526Detw, hs_zddShow626Detx, hs_zddShow726Dety, hs_zddShow826Detz, hs_zddShow926DetA) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26Detr, hs_zddShow126Dets, hs_zddShow226Dett, hs_zddShow326Detu, hs_zddShow426Detv, hs_zddShow526Detw, hs_zddShow626Detx, hs_zddShow726Dety, hs_zddShow826Detz, hs_zddShow926DetA);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26DevX, hs_zddShow126DevY, hs_zddShow226DevZ, hs_zddShow326Dew0, hs_zddShow426Dew1, hs_zddShow526Dew2, hs_zddShow626Dew3, hs_zddShow726Dew4, hs_zddShow826Dew5, hs_zddShow926Dew6, hs_zddShow1026Dew7) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26DevX, hs_zddShow126DevY, hs_zddShow226DevZ, hs_zddShow326Dew0, hs_zddShow426Dew1, hs_zddShow526Dew2, hs_zddShow626Dew3, hs_zddShow726Dew4, hs_zddShow826Dew5, hs_zddShow926Dew6, hs_zddShow1026Dew7);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26DeyF, hs_zddShow126DeyG, hs_zddShow226DeyH, hs_zddShow326DeyI, hs_zddShow426DeyJ, hs_zddShow526DeyK, hs_zddShow626DeyL, hs_zddShow726DeyM, hs_zddShow826DeyN, hs_zddShow926DeyO, hs_zddShow1026DeyP, hs_zddShow1126DeyQ) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26DeyF, hs_zddShow126DeyG, hs_zddShow226DeyH, hs_zddShow326DeyI, hs_zddShow426DeyJ, hs_zddShow526DeyK, hs_zddShow626DeyL, hs_zddShow726DeyM, hs_zddShow826DeyN, hs_zddShow926DeyO, hs_zddShow1026DeyP, hs_zddShow1126DeyQ);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26DeBz, hs_zddShow126DeBA, hs_zddShow226DeBB, hs_zddShow326DeBC, hs_zddShow426DeBD, hs_zddShow526DeBE, hs_zddShow626DeBF, hs_zddShow726DeBG, hs_zddShow826DeBH, hs_zddShow926DeBI, hs_zddShow1026DeBJ, hs_zddShow1126DeBK, hs_zddShow1226DeBL) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26DeBz, hs_zddShow126DeBA, hs_zddShow226DeBB, hs_zddShow326DeBC, hs_zddShow426DeBD, hs_zddShow526DeBE, hs_zddShow626DeBF, hs_zddShow726DeBG, hs_zddShow826DeBH, hs_zddShow926DeBI, hs_zddShow1026DeBJ, hs_zddShow1126DeBK, hs_zddShow1226DeBL);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26DeEF, hs_zddShow126DeEG, hs_zddShow226DeEH, hs_zddShow326DeEI, hs_zddShow426DeEJ, hs_zddShow526DeEK, hs_zddShow626DeEL, hs_zddShow726DeEM, hs_zddShow826DeEN, hs_zddShow926DeEO, hs_zddShow1026DeEP, hs_zddShow1126DeEQ, hs_zddShow1226DeER, hs_zddShow1326DeES) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26DeEF, hs_zddShow126DeEG, hs_zddShow226DeEH, hs_zddShow326DeEI, hs_zddShow426DeEJ, hs_zddShow526DeEK, hs_zddShow626DeEL, hs_zddShow726DeEM, hs_zddShow826DeEN, hs_zddShow926DeEO, hs_zddShow1026DeEP, hs_zddShow1126DeEQ, hs_zddShow1226DeER, hs_zddShow1326DeES);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26DeHX, hs_zddShow126DeHY, hs_zddShow226DeHZ, hs_zddShow326DeI0, hs_zddShow426DeI1, hs_zddShow526DeI2, hs_zddShow626DeI3, hs_zddShow726DeI4, hs_zddShow826DeI5, hs_zddShow926DeI6, hs_zddShow1026DeI7, hs_zddShow1126DeI8, hs_zddShow1226DeI9, hs_zddShow1326DeIa, hs_zddShow1426DeIb) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26DeHX, hs_zddShow126DeHY, hs_zddShow226DeHZ, hs_zddShow326DeI0, hs_zddShow426DeI1, hs_zddShow526DeI2, hs_zddShow626DeI3, hs_zddShow726DeI4, hs_zddShow826DeI5, hs_zddShow926DeI6, hs_zddShow1026DeI7, hs_zddShow1126DeI8, hs_zddShow1226DeI9, hs_zddShow1326DeIa, hs_zddShow1426DeIb);
    };
    this.hs_showLitChar.notEvaluated = true;
    this.hs_showLitChar.evaluate = function (hs_c26DeJs, hs_s26DeJL) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_c26DeJs, hs_s26DeJL);
    };
    this.hs_zdfShowChar.notEvaluated = true;
    this.hs_zdfShowChar.evaluate = function () {
        $hs.modules.GHCziShow.loadDependencies();
        return this;
    };
    this.hs_intToDigit.notEvaluated = true;
    this.hs_intToDigit.evaluate = function (hs_ds26DeLf) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_ds26DeLf);
    };
    this.hs_DZCShow.notEvaluated = true;
    this.hs_DZCShow.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziShow.initAfterDependencies = function () {
    this.hs_showsPrec.notEvaluated = false;
    this.hs_show.notEvaluated = false;
    this.hs_showList.notEvaluated = false;
    this.hs_zddmshowsPrec.notEvaluated = false;
    this.hs_asciiTab.notEvaluated = false;
    this.hs_asciiTab.evaluate = function () {
        return this;
    };
    this.hs_protectEsc.notEvaluated = false;
    this.hs_showSpace.notEvaluated = false;
    this.hs_showChar.notEvaluated = false;
    this.hs_showParen.notEvaluated = false;
    this.hs_shows.notEvaluated = false;
    this.hs_zddmshow.notEvaluated = false;
    this.hs_appPrec1.notEvaluated = false;
    this.hs_appPrec1.evaluate = function () {
        return this;
    };
    this.hs_appPrec.notEvaluated = false;
    this.hs_appPrec.evaluate = function () {
        return this;
    };
    this.hs_showListzuzu.notEvaluated = false;
    this.hs_zddmshowList.notEvaluated = false;
    this.hs_showSignedInt.notEvaluated = false;
    this.hs_zdfShowZLZR.notEvaluated = false;
    this.hs_zdfShowZLZR.evaluate = function () {
        return this;
    };
    this.hs_zdfShowZMZN.notEvaluated = false;
    this.hs_zdfShowBool.notEvaluated = false;
    this.hs_zdfShowBool.evaluate = function () {
        return this;
    };
    this.hs_zdfShowOrdering.notEvaluated = false;
    this.hs_zdfShowOrdering.evaluate = function () {
        return this;
    };
    this.hs_zdfShowInt.notEvaluated = false;
    this.hs_zdfShowInt.evaluate = function () {
        return this;
    };
    this.hs_zdfShowMaybe.notEvaluated = false;
    this.hs_zdfShowZLz2cUZR.notEvaluated = false;
    this.hs_zdfShowZLz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfShowZLz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_showLitChar.notEvaluated = false;
    this.hs_zdfShowChar.notEvaluated = false;
    this.hs_zdfShowChar.evaluate = function () {
        return this;
    };
    this.hs_intToDigit.notEvaluated = false;
    this.hs_DZCShow.notEvaluated = false;
    var hs_itos25rrXu = new $hs.Func(2);
    var hs_ten25rrXs = new $hs.Data(1);
    var hs_a25uPDq = new $hs.Thunk();
    var hs_a125uPDs = new $hs.Thunk();
    var hs_a225uPDu = new $hs.Thunk();
    var hs_a325uPDw = new $hs.Thunk();
    var hs_a425uPDy = new $hs.Thunk();
    var hs_a525uPDA = new $hs.Thunk();
    var hs_a625uPDC = new $hs.Thunk();
    var hs_a725uPDE = new $hs.Thunk();
    var hs_a825uPDG = new $hs.Thunk();
    var hs_a925uPDI = new $hs.Thunk();
    var hs_a1025uPDK = new $hs.Thunk();
    var hs_a1125uPDM = new $hs.Thunk();
    var hs_a1225uPDO = new $hs.Thunk();
    var hs_a1325uPDQ = new $hs.Thunk();
    var hs_a1425uPDS = new $hs.Thunk();
    var hs_a1525uPDU = new $hs.Thunk();
    var hs_a1625uPDW = new $hs.Thunk();
    var hs_a1725uPDY = new $hs.Thunk();
    var hs_a1825uPE0 = new $hs.Thunk();
    var hs_a1925uPE2 = new $hs.Thunk();
    var hs_a2025uPE4 = new $hs.Thunk();
    var hs_a2125uPE6 = new $hs.Thunk();
    var hs_a2225uPE8 = new $hs.Thunk();
    var hs_a2325uPEa = new $hs.Thunk();
    var hs_a2425uPEc = new $hs.Thunk();
    var hs_a2525uPEe = new $hs.Thunk();
    var hs_a2625uPEg = new $hs.Thunk();
    var hs_a2725uPEi = new $hs.Thunk();
    var hs_a2825uPEk = new $hs.Thunk();
    var hs_a2925uPEm = new $hs.Thunk();
    var hs_a3025uPEo = new $hs.Thunk();
    var hs_a3125uPEq = new $hs.Thunk();
    var hs_a3225uPEs = new $hs.Thunk();
    var hs_a3325uPEu = new $hs.Data(2);
    var hs_a3425uPEw = new $hs.Data(2);
    var hs_a3525uPEy = new $hs.Data(2);
    var hs_a3625uPEA = new $hs.Data(2);
    var hs_a3725uPEC = new $hs.Data(2);
    var hs_a3825uPEE = new $hs.Data(2);
    var hs_a3925uPEG = new $hs.Data(2);
    var hs_a4025uPEI = new $hs.Data(2);
    var hs_a4125uPEK = new $hs.Data(2);
    var hs_a4225uPEM = new $hs.Data(2);
    var hs_a4325uPEO = new $hs.Data(2);
    var hs_a4425uPEQ = new $hs.Data(2);
    var hs_a4525uPES = new $hs.Data(2);
    var hs_a4625uPEU = new $hs.Data(2);
    var hs_a4725uPEW = new $hs.Data(2);
    var hs_a4825uPEY = new $hs.Data(2);
    var hs_a4925uPF0 = new $hs.Data(2);
    var hs_a5025uPF2 = new $hs.Data(2);
    var hs_a5125uPF4 = new $hs.Data(2);
    var hs_a5225uPF6 = new $hs.Data(2);
    var hs_a5325uPF8 = new $hs.Data(2);
    var hs_a5425uPFa = new $hs.Data(2);
    var hs_a5525uPFc = new $hs.Data(2);
    var hs_a5625uPFe = new $hs.Data(2);
    var hs_a5725uPFg = new $hs.Data(2);
    var hs_a5825uPFi = new $hs.Data(2);
    var hs_a5925uPFk = new $hs.Data(2);
    var hs_a6025uPFm = new $hs.Data(2);
    var hs_a6125uPFo = new $hs.Data(2);
    var hs_a6225uPFq = new $hs.Data(2);
    var hs_a6325uPFs = new $hs.Data(2);
    var hs_a6425uPFu = new $hs.Data(2);
    var hs_showzutuple25rrX6 = new $hs.Func(1);
    var hs_zdcshowsPrec25uPHb = new $hs.Func(2);
    var hs_zdcshowList25uPHj = new $hs.Func(2);
    var hs_zdcshow25uPHl = new $hs.Func(1);
    var hs_zdcshowsPrec125uPHu = new $hs.Func(2);
    var hs_zdcshowList125uPHA = new $hs.Func(1);
    var hs_zdcshow125uPHC = new $hs.Func(1);
    var hs_zdcshowsPrec225uPI1 = new $hs.Func(2);
    var hs_zdcshowList225uPIa = new $hs.Func(2);
    var hs_zdcshow225uPIc = new $hs.Func(1);
    var hs_zdcshowsPrec325uPIl = new $hs.Func(2);
    var hs_zdcshowList325uPIv = new $hs.Func(2);
    var hs_zdcshow325uPIx = new $hs.Func(1);
    var hs_zdcshowList425uPIG = new $hs.Func(2);
    var hs_zdcshow425uPII = new $hs.Func(1);
    var hs_zdcshowsPrec425uPIR = new $hs.Func(4);
    var hs_zdcshowList525uPJb = new $hs.Func(1);
    var hs_zdcshow525uPJd = new $hs.Func(1);
    var hs_zdcshowsPrec525uPJB = new $hs.Func(5);
    var hs_zdcshowList625uPJW = new $hs.Func(2);
    var hs_zdcshow625uPJY = new $hs.Func(2);
    var hs_zdcshowsPrec625uPKs = new $hs.Func(6);
    var hs_zdcshowList725uPKT = new $hs.Func(3);
    var hs_zdcshow725uPKV = new $hs.Func(3);
    var hs_zdcshowsPrec725uPLv = new $hs.Func(7);
    var hs_zdcshowList825uPM2 = new $hs.Func(4);
    var hs_zdcshow825uPM4 = new $hs.Func(4);
    var hs_zdcshowsPrec825uPMK = new $hs.Func(8);
    var hs_zdcshowList925uPNn = new $hs.Func(5);
    var hs_zdcshow925uPNp = new $hs.Func(5);
    var hs_zdcshowsPrec925uPOb = new $hs.Func(9);
    var hs_zdcshowList1025uPOU = new $hs.Func(6);
    var hs_zdcshow1025uPOW = new $hs.Func(6);
    var hs_zdcshowsPrec1025uPPO = new $hs.Func(10);
    var hs_zdcshowList1125uPQD = new $hs.Func(7);
    var hs_zdcshow1125uPQF = new $hs.Func(7);
    var hs_zdcshowsPrec1125uPRD = new $hs.Func(11);
    var hs_zdcshowList1225uPSy = new $hs.Func(8);
    var hs_zdcshow1225uPSA = new $hs.Func(8);
    var hs_zdcshowsPrec1225uPTE = new $hs.Func(12);
    var hs_zdcshowList1325uPUF = new $hs.Func(9);
    var hs_zdcshow1325uPUH = new $hs.Func(9);
    var hs_zdcshowsPrec1325uPVR = new $hs.Func(13);
    var hs_zdcshowList1425uPWY = new $hs.Func(10);
    var hs_zdcshow1425uPX0 = new $hs.Func(10);
    var hs_zdcshowsPrec1425uPYg = new $hs.Func(14);
    var hs_zdcshowList1525uPZt = new $hs.Func(11);
    var hs_zdcshow1525uPZv = new $hs.Func(11);
    var hs_zdcshowsPrec1525uQ0R = new $hs.Func(15);
    var hs_zdcshowList1625uQ2a = new $hs.Func(12);
    var hs_zdcshow1625uQ2c = new $hs.Func(12);
    var hs_zdcshowsPrec1625uQ3E = new $hs.Func(16);
    var hs_zdcshowList1725uQ53 = new $hs.Func(13);
    var hs_zdcshow1725uQ55 = new $hs.Func(13);
    var hs_zdcshowsPrec1725uQ6D = new $hs.Func(17);
    var hs_zdcshowList1825uQ88 = new $hs.Func(14);
    var hs_zdcshow1825uQ8a = new $hs.Func(14);
    var hs_zdcshowsPrec1825uQ9O = new $hs.Func(18);
    var hs_zdcshowList1925uQbp = new $hs.Func(15);
    var hs_zdcshow1925uQbr = new $hs.Func(15);
    var hs_zdcshowsPrec1925uQec = new $hs.Func(2);
    var hs_zdcshowList2025uQeu = new $hs.Func(1);
    var hs_zdcshow2025uQeV = new $hs.Func(1);
    this.hs_showsPrec.evaluate = function (hs_tpl26De8u) {
        var hs_tpl26DeLC = hs_tpl26De8u;
        if (hs_tpl26De8u.notEvaluated) {
            hs_tpl26DeLC = hs_tpl26De8u.hscall();
        }
        var hs_tpl26De8z = hs_tpl26DeLC.data[0];
        if (hs_tpl26De8z.notEvaluated) {
            return hs_tpl26De8z.hscall();
        } else {
            return hs_tpl26De8z;
        }
    };
    this.hs_show.evaluate = function (hs_tpl26De8B) {
        var hs_tpl26DeLG = hs_tpl26De8B;
        if (hs_tpl26De8B.notEvaluated) {
            hs_tpl26DeLG = hs_tpl26De8B.hscall();
        }
        var hs_tpl26De8G = hs_tpl26DeLG.data[1];
        if (hs_tpl26De8G.notEvaluated) {
            return hs_tpl26De8G.hscall();
        } else {
            return hs_tpl26De8G;
        }
    };
    this.hs_showList.evaluate = function (hs_tpl26De8I) {
        var hs_tpl26DeLJ = hs_tpl26De8I;
        if (hs_tpl26De8I.notEvaluated) {
            hs_tpl26DeLJ = hs_tpl26De8I.hscall();
        }
        var hs_tpl26De8N = hs_tpl26DeLJ.data[2];
        if (hs_tpl26De8N.notEvaluated) {
            return hs_tpl26De8N.hscall();
        } else {
            return hs_tpl26De8N;
        }
    };
    this.hs_zddmshowsPrec.evaluate = function (hs_zddShow26De8S, hs_ds26De8W, hs_x26De8T, hs_s26De8V) {
        var hs_sat26DeLL = new $hs.Thunk();
        hs_sat26DeLL.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow26De8S, hs_x26De8T);
        };
        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeLL, hs_s26De8V);
    };
    hs_itos25rrXu.evaluate = function (hs_nzh26De9m, hs_cs26De9o) {
        var hs_itoszq26De94 = new $hs.Func(2);
        hs_itoszq26De94.evaluate = function (hs_xzh26De92, hs_cszq26De9e) {
            var hs_wild26DeLN = hs_xzh26De92 < 10 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild26DeLN.tag) {
            case 1:
                var hs_sat26De9b = hs_xzh26De92 % 10;
                var hs_sat26De9a = "0".charCodeAt(0);
                var hs_sat26De9c = ($hs.Int.addCarry(hs_sat26De9a, hs_sat26De9b, 0))[0];
                var hs_sat26DeLM = String.fromCharCode(hs_sat26De9c);
                var hs_sat26DeLO = new $hs.Data(1);
                hs_sat26DeLO.data = [hs_sat26DeLM];
                var hs_sat26DeLP = new $hs.Data(2);
                hs_sat26DeLP.data = [hs_sat26DeLO, hs_cszq26De9e];
                var hs_sat26DeLQ = hs_xzh26De92 / 10 & ~0;
                return hs_itoszq26De94.hscall(hs_sat26DeLQ, hs_sat26DeLP);
            case 2:
                var hs_sat26De9j = "0".charCodeAt(0);
                var hs_sat26De9k = ($hs.Int.addCarry(hs_sat26De9j, hs_xzh26De92, 0))[0];
                var hs_sat26DeLR = String.fromCharCode(hs_sat26De9k);
                var hs_sat26DeLS = new $hs.Data(1);
                hs_sat26DeLS.data = [hs_sat26DeLR];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26DeLS, hs_cszq26De9e];
                return $res;
            }
        };
        var hs_wild26DeLT = hs_nzh26De9m < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26DeLT.tag) {
        case 1:
            return hs_itoszq26De94.hscall(hs_nzh26De9m, hs_cs26De9o);
        case 2:
            var hs_wild126DeLW = $hs.modules.GHCziBase.hs_minInt;
            if ($hs.modules.GHCziBase.hs_minInt.notEvaluated) {
                hs_wild126DeLW = $hs.modules.GHCziBase.hs_minInt.hscall();
            }
            var hs_minIntzh26De9r = hs_wild126DeLW.data[0];
            var hs_wild226DeLV = hs_nzh26De9m == hs_minIntzh26De9r ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild226DeLV.tag) {
            case 1:
                var hs_sat26DeLX = new $hs.Thunk();
                hs_sat26DeLX.evaluateOnce = function () {
                    var hs_sat26DeLU = -hs_nzh26De9m;
                    return hs_itoszq26De94.hscall(hs_sat26DeLU, hs_cs26De9o);
                };
                var hs_sat26DeLY = new $hs.Data(1);
                hs_sat26DeLY.data = ["-"];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26DeLY, hs_sat26DeLX];
                return $res;
            case 2:
                var hs_sat26DeM2 = new $hs.Thunk();
                hs_sat26DeM2.evaluateOnce = function () {
                    var hs_sat26DeM0 = new $hs.Thunk();
                    hs_sat26DeM0.evaluateOnce = function () {
                        var hs_sat26De9B = hs_nzh26De9m % 10;
                        var hs_sat26DeLZ = -hs_sat26De9B;
                        return hs_itoszq26De94.hscall(hs_sat26DeLZ, hs_cs26De9o);
                    };
                    var hs_sat26De9D = hs_nzh26De9m / 10 & ~0;
                    var hs_sat26DeM1 = -hs_sat26De9D;
                    return hs_itoszq26De94.hscall(hs_sat26DeM1, hs_sat26DeM0);
                };
                var hs_sat26DeM3 = new $hs.Data(1);
                hs_sat26DeM3.data = ["-"];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26DeM3, hs_sat26DeM2];
                return $res;
            }
        }
    };
    hs_ten25rrXs.data = [10];
    hs_a25uPDq.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("NUL\x00");
    };
    hs_a125uPDs.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("SOH\x00");
    };
    hs_a225uPDu.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("STX\x00");
    };
    hs_a325uPDw.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ETX\x00");
    };
    hs_a425uPDy.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("EOT\x00");
    };
    hs_a525uPDA.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ENQ\x00");
    };
    hs_a625uPDC.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ACK\x00");
    };
    hs_a725uPDE.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("BEL\x00");
    };
    hs_a825uPDG.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("BS\x00");
    };
    hs_a925uPDI.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("HT\x00");
    };
    hs_a1025uPDK.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("LF\x00");
    };
    hs_a1125uPDM.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("VT\x00");
    };
    hs_a1225uPDO.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("FF\x00");
    };
    hs_a1325uPDQ.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CR\x00");
    };
    hs_a1425uPDS.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("SO\x00");
    };
    hs_a1525uPDU.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("SI\x00");
    };
    hs_a1625uPDW.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("DLE\x00");
    };
    hs_a1725uPDY.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("DC1\x00");
    };
    hs_a1825uPE0.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("DC2\x00");
    };
    hs_a1925uPE2.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("DC3\x00");
    };
    hs_a2025uPE4.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("DC4\x00");
    };
    hs_a2125uPE6.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("NAK\x00");
    };
    hs_a2225uPE8.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("SYN\x00");
    };
    hs_a2325uPEa.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ETB\x00");
    };
    hs_a2425uPEc.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CAN\x00");
    };
    hs_a2525uPEe.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("EM\x00");
    };
    hs_a2625uPEg.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("SUB\x00");
    };
    hs_a2725uPEi.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("ESC\x00");
    };
    hs_a2825uPEk.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("FS\x00");
    };
    hs_a2925uPEm.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("GS\x00");
    };
    hs_a3025uPEo.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("RS\x00");
    };
    hs_a3125uPEq.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("US\x00");
    };
    hs_a3225uPEs.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("SP\x00");
    };
    hs_a3325uPEu.data = [hs_a3225uPEs, $hs.modules.GHCziTypes.hs_ZMZN];
    hs_a3425uPEw.data = [hs_a3125uPEq, hs_a3325uPEu];
    hs_a3525uPEy.data = [hs_a3025uPEo, hs_a3425uPEw];
    hs_a3625uPEA.data = [hs_a2925uPEm, hs_a3525uPEy];
    hs_a3725uPEC.data = [hs_a2825uPEk, hs_a3625uPEA];
    hs_a3825uPEE.data = [hs_a2725uPEi, hs_a3725uPEC];
    hs_a3925uPEG.data = [hs_a2625uPEg, hs_a3825uPEE];
    hs_a4025uPEI.data = [hs_a2525uPEe, hs_a3925uPEG];
    hs_a4125uPEK.data = [hs_a2425uPEc, hs_a4025uPEI];
    hs_a4225uPEM.data = [hs_a2325uPEa, hs_a4125uPEK];
    hs_a4325uPEO.data = [hs_a2225uPE8, hs_a4225uPEM];
    hs_a4425uPEQ.data = [hs_a2125uPE6, hs_a4325uPEO];
    hs_a4525uPES.data = [hs_a2025uPE4, hs_a4425uPEQ];
    hs_a4625uPEU.data = [hs_a1925uPE2, hs_a4525uPES];
    hs_a4725uPEW.data = [hs_a1825uPE0, hs_a4625uPEU];
    hs_a4825uPEY.data = [hs_a1725uPDY, hs_a4725uPEW];
    hs_a4925uPF0.data = [hs_a1625uPDW, hs_a4825uPEY];
    hs_a5025uPF2.data = [hs_a1525uPDU, hs_a4925uPF0];
    hs_a5125uPF4.data = [hs_a1425uPDS, hs_a5025uPF2];
    hs_a5225uPF6.data = [hs_a1325uPDQ, hs_a5125uPF4];
    hs_a5325uPF8.data = [hs_a1225uPDO, hs_a5225uPF6];
    hs_a5425uPFa.data = [hs_a1125uPDM, hs_a5325uPF8];
    hs_a5525uPFc.data = [hs_a1025uPDK, hs_a5425uPFa];
    hs_a5625uPFe.data = [hs_a925uPDI, hs_a5525uPFc];
    hs_a5725uPFg.data = [hs_a825uPDG, hs_a5625uPFe];
    hs_a5825uPFi.data = [hs_a725uPDE, hs_a5725uPFg];
    hs_a5925uPFk.data = [hs_a625uPDC, hs_a5825uPFi];
    hs_a6025uPFm.data = [hs_a525uPDA, hs_a5925uPFk];
    hs_a6125uPFo.data = [hs_a425uPDy, hs_a6025uPFm];
    hs_a6225uPFq.data = [hs_a325uPDw, hs_a6125uPFo];
    hs_a6325uPFs.data = [hs_a225uPDu, hs_a6225uPFq];
    hs_a6425uPFu.data = [hs_a125uPDs, hs_a6325uPFs];
    this.hs_asciiTab.data = [hs_a25uPDq, hs_a6425uPFu];
    this.hs_protectEsc.evaluate = function (hs_p26DebU, hs_f26DebN) {
        var hs_sat26DeM7 = new $hs.Func(1);
        hs_sat26DeM7.evaluate = function (hs_s26DebP) {
            var hs_wild26DebW = hs_s26DebP;
            if (hs_s26DebP.notEvaluated) {
                hs_wild26DebW = hs_s26DebP.hscall();
            }
            switch (hs_wild26DebW.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_c26DebT = hs_wild26DebW.data[0];
                var hs_wild126DeM4 = hs_p26DebU.hscall(hs_c26DebT);
                switch (hs_wild126DeM4.tag) {
                case 1:
                    if (hs_wild26DebW.notEvaluated) {
                        return hs_wild26DebW.hscall();
                    } else {
                        return hs_wild26DebW;
                    }
                case 2:
                    var hs_sat26DeM6 = new $hs.Thunk();
                    hs_sat26DeM6.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("\\&\x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeM6, hs_wild26DebW);
                }
            }
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_f26DebN, hs_sat26DeM7);
    };
    this.hs_showSpace.evaluate = function (hs_xs26Dec1) {
        var hs_sat26DeM8 = new $hs.Data(1);
        hs_sat26DeM8.data = [" "];
        var $res = new $hs.Data(2);
        $res.data = [hs_sat26DeM8, hs_xs26Dec1];
        return $res;
    };
    this.hs_showString.evaluateOnce = function () {
        if ($hs.modules.GHCziBase.hs_zpzp.notEvaluated) {
            return $hs.modules.GHCziBase.hs_zpzp.hscall();
        } else {
            return $hs.modules.GHCziBase.hs_zpzp;
        }
    };
    this.hs_showChar.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(2);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_showParen.evaluate = function (hs_b26Dec4, hs_p26Dec6) {
        var hs_wild26DeM9 = hs_b26Dec4;
        if (hs_b26Dec4.notEvaluated) {
            hs_wild26DeM9 = hs_b26Dec4.hscall();
        }
        switch (hs_wild26DeM9.tag) {
        case 1:
            if (hs_p26Dec6.notEvaluated) {
                return hs_p26Dec6.hscall();
            } else {
                return hs_p26Dec6;
            }
        case 2:
            var hs_sat26DeMc = new $hs.Thunk();
            hs_sat26DeMc.evaluateOnce = function () {
                var hs_sat26DeMa = new $hs.Data(1);
                hs_sat26DeMa.data = [")"];
                var hs_sat26DeMb = new $hs.Func(1);
                hs_sat26DeMb.evaluate = function (hs_eta1cW6l3) {
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26DeMa, hs_eta1cW6l3];
                    return $res;
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_p26Dec6, hs_sat26DeMb);
            };
            var hs_sat26DeMd = new $hs.Data(1);
            hs_sat26DeMd.data = ["("];
            var hs_sat26DeMe = new $hs.Func(1);
            hs_sat26DeMe.evaluate = function (hs_eta1cW6l3) {
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26DeMd, hs_eta1cW6l3];
                return $res;
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DeMe, hs_sat26DeMc);
        }
    };
    this.hs_shows.evaluate = function (hs_zddShow26Decd) {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26Decd, $hs.modules.GHCziBase.hs_zzeroInt);
    };
    this.hs_zddmshow.evaluate = function (hs_zddShow26Decg, hs_x26Dech) {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26Decg, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26Dech, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    hs_showzutuple25rrX6.evaluate = function (hs_ss26Dect) {
        var hs_sat26DeMm = new $hs.Thunk();
        hs_sat26DeMm.evaluateOnce = function () {
            var hs_sat26DeMf = new $hs.Data(1);
            hs_sat26DeMf.data = [")"];
            var hs_sat26DeMg = new $hs.Func(1);
            hs_sat26DeMg.evaluate = function (hs_eta1cW6l3) {
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26DeMf, hs_eta1cW6l3];
                return $res;
            };
            var hs_sat26DeMl = new $hs.Thunk();
            hs_sat26DeMl.evaluateOnce = function () {
                var hs_sat26DeMk = new $hs.Func(2);
                hs_sat26DeMk.evaluate = function (hs_s26Decn, hs_r26Decq) {
                    var hs_sat26DeMj = new $hs.Thunk();
                    hs_sat26DeMj.evaluateOnce = function () {
                        var hs_sat26DeMh = new $hs.Data(1);
                        hs_sat26DeMh.data = [","];
                        var hs_sat26DeMi = new $hs.Func(1);
                        hs_sat26DeMi.evaluate = function (hs_eta1cW6l3) {
                            var $res = new $hs.Data(2);
                            $res.data = [hs_sat26DeMh, hs_eta1cW6l3];
                            return $res;
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DeMi, hs_r26Decq);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_s26Decn, hs_sat26DeMj);
                };
                return $hs.modules.GHCziList.hs_foldr1.hscall(hs_sat26DeMk, hs_ss26Dect);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DeMl, hs_sat26DeMg);
        };
        var hs_sat26DeMn = new $hs.Data(1);
        hs_sat26DeMn.data = ["("];
        var hs_sat26DeMo = new $hs.Func(1);
        hs_sat26DeMo.evaluate = function (hs_eta1cW6l3) {
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26DeMn, hs_eta1cW6l3];
            return $res;
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DeMo, hs_sat26DeMm);
    };
    this.hs_appPrec1.data = [11];
    this.hs_appPrec.data = [10];
    this.hs_showListzuzu.evaluate = function (hs_ds26DecU, hs_ds126DecB, hs_s26DecE) {
        var hs_wild26DeMp = hs_ds126DecB;
        if (hs_ds126DecB.notEvaluated) {
            hs_wild26DeMp = hs_ds126DecB.hscall();
        }
        switch (hs_wild26DeMp.tag) {
        case 1:
            var hs_sat26DeMq = new $hs.Thunk();
            hs_sat26DeMq.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("[]\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeMq, hs_s26DecE);
        case 2:
            var hs_x26DecI = hs_wild26DeMp.data[0];
            var hs_xs26DecX = hs_wild26DeMp.data[1];
            var hs_sat26DeMx = new $hs.Thunk();
            hs_sat26DeMx.evaluateOnce = function () {
                var hs_sat26DeMw = new $hs.Thunk();
                hs_sat26DeMw.evaluateOnce = function () {
                    var hs_showl26DecT = new $hs.Func(1);
                    hs_showl26DecT.evaluate = function (hs_ds226DecL) {
                        var hs_wild126DeMr = hs_ds226DecL;
                        if (hs_ds226DecL.notEvaluated) {
                            hs_wild126DeMr = hs_ds226DecL.hscall();
                        }
                        switch (hs_wild126DeMr.tag) {
                        case 1:
                            var hs_sat26DeMs = new $hs.Data(1);
                            hs_sat26DeMs.data = ["]"];
                            var $res = new $hs.Data(2);
                            $res.data = [hs_sat26DeMs, hs_s26DecE];
                            return $res;
                        case 2:
                            var hs_y26DecR = hs_wild126DeMr.data[0];
                            var hs_ys26DecS = hs_wild126DeMr.data[1];
                            var hs_sat26DeMu = new $hs.Thunk();
                            hs_sat26DeMu.evaluateOnce = function () {
                                var hs_sat26DeMt = new $hs.Thunk();
                                hs_sat26DeMt.evaluateOnce = function () {
                                    return hs_showl26DecT.hscall(hs_ys26DecS);
                                };
                                return hs_ds26DecU.hscall(hs_y26DecR, hs_sat26DeMt);
                            };
                            var hs_sat26DeMv = new $hs.Data(1);
                            hs_sat26DeMv.data = [","];
                            var $res = new $hs.Data(2);
                            $res.data = [hs_sat26DeMv, hs_sat26DeMu];
                            return $res;
                        }
                    };
                    return hs_showl26DecT.hscall(hs_xs26DecX);
                };
                return hs_ds26DecU.hscall(hs_x26DecI, hs_sat26DeMw);
            };
            var hs_sat26DeMy = new $hs.Data(1);
            hs_sat26DeMy.data = ["["];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26DeMy, hs_sat26DeMx];
            return $res;
        }
    };
    this.hs_zddmshowList.evaluate = function (hs_zddShow26Ded3, hs_ls26Ded5, hs_s26Ded6) {
        var hs_sat26DeMz = new $hs.Thunk();
        hs_sat26DeMz.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26Ded3, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DeMz, hs_ls26Ded5, hs_s26Ded6);
    };
    this.hs_showSignedInt.evaluate = function (hs_ds26Deda, hs_ds126Dedd, hs_r26Dedl) {
        var hs_wild26DeMB = hs_ds26Deda;
        if (hs_ds26Deda.notEvaluated) {
            hs_wild26DeMB = hs_ds26Deda.hscall();
        }
        var hs_p26Dedi = hs_wild26DeMB.data[0];
        var hs_wild126DeMA = hs_ds126Dedd;
        if (hs_ds126Dedd.notEvaluated) {
            hs_wild126DeMA = hs_ds126Dedd.hscall();
        }
        var hs_n26Dedg = hs_wild126DeMA.data[0];
        var hs_sat26DeMC = new $hs.Thunk();
        hs_sat26DeMC.evaluateOnce = function () {
            return hs_p26Dedi > 6 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        };
        var hs_sat26DeME = new $hs.Thunk();
        hs_sat26DeME.evaluateOnce = function () {
            return hs_n26Dedg < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        };
        var hs_wild226DeMD = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DeME, hs_sat26DeMC);
        switch (hs_wild226DeMD.tag) {
        case 1:
            return hs_itos25rrXu.hscall(hs_n26Dedg, hs_r26Dedl);
        case 2:
            var hs_sat26DeMH = new $hs.Thunk();
            hs_sat26DeMH.evaluateOnce = function () {
                var hs_sat26DeMF = new $hs.Data(1);
                hs_sat26DeMF.data = [")"];
                var hs_sat26DeMG = new $hs.Data(2);
                hs_sat26DeMG.data = [hs_sat26DeMF, hs_r26Dedl];
                return hs_itos25rrXu.hscall(hs_n26Dedg, hs_sat26DeMG);
            };
            var hs_sat26DeMI = new $hs.Data(1);
            hs_sat26DeMI.data = ["("];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26DeMI, hs_sat26DeMH];
            return $res;
        }
    };
    hs_zdcshowsPrec25uPHb.evaluate = function (hs_ds26Dedx, hs_ds126Dedu) {
        var hs_wild26DeMJ = hs_ds126Dedu;
        if (hs_ds126Dedu.notEvaluated) {
            hs_wild26DeMJ = hs_ds126Dedu.hscall();
        }
        var hs_sat26DeMK = new $hs.Thunk();
        hs_sat26DeMK.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("()\x00");
        };
        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeMK);
    };
    this.hs_zdfShowZLZR.data = [hs_zdcshowsPrec25uPHb, hs_zdcshow25uPHl, hs_zdcshowList25uPHj];
    hs_zdcshowList25uPHj.evaluate = function (hs_ls26DedF, hs_s26DedG) {
        var hs_sat26DeML = new $hs.Thunk();
        hs_sat26DeML.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowZLZR, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DeML, hs_ls26DedF, hs_s26DedG);
    };
    hs_zdcshow25uPHl.evaluate = function (hs_x26DedI) {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowZLZR, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26DedI, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    hs_zdcshowsPrec125uPHu.evaluate = function (hs_zddShow26DedN, hs_ds26DedO) {
        return $hs.modules.GHCziShow.hs_showList.hscall(hs_zddShow26DedN);
    };
    this.hs_zdfShowZMZN.evaluate = function (hs_zddShow26DedV) {
        var hs_sat26DeMM = new $hs.Thunk();
        hs_sat26DeMM.evaluateOnce = function () {
            return hs_zdcshowList125uPHA.hscall(hs_zddShow26DedV);
        };
        var hs_sat26DeMO = new $hs.Thunk();
        hs_sat26DeMO.evaluateOnce = function () {
            return hs_zdcshow125uPHC.hscall(hs_zddShow26DedV);
        };
        var hs_sat26DeMP = new $hs.Func(1);
        hs_sat26DeMP.evaluate = function (hs_ds26DeMN) {
            return $hs.modules.GHCziShow.hs_showList.hscall(hs_zddShow26DedV);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DeMP, hs_sat26DeMO, hs_sat26DeMM];
        return $res;
    };
    hs_zdcshowList125uPHA.evaluate = function (hs_zddShow26Dee1) {
        var hs_zddShow126Dee2 = new $hs.Thunk();
        hs_zddShow126Dee2.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZMZN.hscall(hs_zddShow26Dee1);
        };
        var hs_sat26Dee8 = new $hs.Thunk();
        hs_sat26Dee8.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126Dee2, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26Dee8);
    };
    hs_zdcshow125uPHC.evaluate = function (hs_zddShow26Deeb) {
        var hs_zddShow126Deec = new $hs.Thunk();
        hs_zddShow126Deec.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZMZN.hscall(hs_zddShow26Deeb);
        };
        var hs_sat26DeMQ = new $hs.Func(1);
        hs_sat26DeMQ.evaluate = function (hs_x26Deee) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126Deec, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26Deee, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26DeMQ.notEvaluated) {
            return hs_sat26DeMQ.hscall();
        } else {
            return hs_sat26DeMQ;
        }
    };
    hs_zdcshowsPrec225uPI1.evaluate = function (hs_ds26Deeo, hs_ds126Deek) {
        var hs_wild26DeMR = hs_ds126Deek;
        if (hs_ds126Deek.notEvaluated) {
            hs_wild26DeMR = hs_ds126Deek.hscall();
        }
        switch (hs_wild26DeMR.tag) {
        case 1:
            var hs_sat26DeMS = new $hs.Thunk();
            hs_sat26DeMS.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("False\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeMS);
        case 2:
            var hs_sat26DeMT = new $hs.Thunk();
            hs_sat26DeMT.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("True\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeMT);
        }
    };
    this.hs_zdfShowBool.data = [hs_zdcshowsPrec225uPI1, hs_zdcshow225uPIc, hs_zdcshowList225uPIa];
    hs_zdcshowList225uPIa.evaluate = function (hs_ls26Deew, hs_s26Deex) {
        var hs_sat26DeMU = new $hs.Thunk();
        hs_sat26DeMU.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowBool, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DeMU, hs_ls26Deew, hs_s26Deex);
    };
    hs_zdcshow225uPIc.evaluate = function (hs_x26Deez) {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowBool, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26Deez, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    hs_zdcshowsPrec325uPIl.evaluate = function (hs_ds26DeeJ, hs_ds126DeeE) {
        var hs_wild26DeMV = hs_ds126DeeE;
        if (hs_ds126DeeE.notEvaluated) {
            hs_wild26DeMV = hs_ds126DeeE.hscall();
        }
        switch (hs_wild26DeMV.tag) {
        case 1:
            var hs_sat26DeMW = new $hs.Thunk();
            hs_sat26DeMW.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("LT\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeMW);
        case 2:
            var hs_sat26DeMX = new $hs.Thunk();
            hs_sat26DeMX.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("EQ\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeMX);
        case 3:
            var hs_sat26DeMY = new $hs.Thunk();
            hs_sat26DeMY.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("GT\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeMY);
        }
    };
    this.hs_zdfShowOrdering.data = [hs_zdcshowsPrec325uPIl, hs_zdcshow325uPIx, hs_zdcshowList325uPIv];
    hs_zdcshowList325uPIv.evaluate = function (hs_ls26DeeR, hs_s26DeeS) {
        var hs_sat26DeMZ = new $hs.Thunk();
        hs_sat26DeMZ.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowOrdering, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DeMZ, hs_ls26DeeR, hs_s26DeeS);
    };
    hs_zdcshow325uPIx.evaluate = function (hs_x26DeeU) {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowOrdering, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26DeeU, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfShowInt.data = [$hs.modules.GHCziShow.hs_showSignedInt, hs_zdcshow425uPII, hs_zdcshowList425uPIG];
    hs_zdcshowList425uPIG.evaluate = function (hs_ls26Def2, hs_s26Def3) {
        var hs_sat26DeN0 = new $hs.Thunk();
        hs_sat26DeN0.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DeN0, hs_ls26Def2, hs_s26Def3);
    };
    hs_zdcshow425uPII.evaluate = function (hs_x26Def5) {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26Def5, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    hs_zdcshowsPrec425uPIR.evaluate = function (hs_zddShow26Defm, hs_zup26Defh, hs_ds26Defc, hs_s26Deff) {
        var hs_wild26DeN1 = hs_ds26Defc;
        if (hs_ds26Defc.notEvaluated) {
            hs_wild26DeN1 = hs_ds26Defc.hscall();
        }
        switch (hs_wild26DeN1.tag) {
        case 1:
            var hs_sat26DeN2 = new $hs.Thunk();
            hs_sat26DeN2.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Nothing\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeN2, hs_s26Deff);
        case 2:
            var hs_x26Defn = hs_wild26DeN1.data[0];
            var hs_sat26DeN6 = new $hs.Thunk();
            hs_sat26DeN6.evaluateOnce = function () {
                var hs_sat26DeN3 = new $hs.Thunk();
                hs_sat26DeN3.evaluateOnce = function () {
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26Defm, $hs.modules.GHCziShow.hs_appPrec1, hs_x26Defn);
                };
                var hs_sat26DeN5 = new $hs.Thunk();
                hs_sat26DeN5.evaluateOnce = function () {
                    var hs_sat26DeN4 = new $hs.Thunk();
                    hs_sat26DeN4.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Just \x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeN4);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DeN5, hs_sat26DeN3);
            };
            var hs_sat26DeN7 = new $hs.Thunk();
            hs_sat26DeN7.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_zup26Defh, $hs.modules.GHCziShow.hs_appPrec);
            };
            var hs_sat26DeN8 = new $hs.Func(1);
            hs_sat26DeN8.evaluate = function (hs_eta1cW6l3) {
                return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DeN7, hs_eta1cW6l3);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DeN8, hs_sat26DeN6, hs_s26Deff);
        }
    };
    this.hs_zdfShowMaybe.evaluate = function (hs_zddShow26Defv) {
        var hs_sat26DeN9 = new $hs.Thunk();
        hs_sat26DeN9.evaluateOnce = function () {
            return hs_zdcshowList525uPJb.hscall(hs_zddShow26Defv);
        };
        var hs_sat26DeNa = new $hs.Thunk();
        hs_sat26DeNa.evaluateOnce = function () {
            return hs_zdcshow525uPJd.hscall(hs_zddShow26Defv);
        };
        var hs_sat26DeNb = new $hs.Func(3);
        hs_sat26DeNb.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec425uPIR.hscall(hs_zddShow26Defv, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DeNb, hs_sat26DeNa, hs_sat26DeN9];
        return $res;
    };
    hs_zdcshowList525uPJb.evaluate = function (hs_zddShow26DefB) {
        var hs_zddShow126DefC = new $hs.Thunk();
        hs_zddShow126DefC.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowMaybe.hscall(hs_zddShow26DefB);
        };
        var hs_sat26DefI = new $hs.Thunk();
        hs_sat26DefI.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126DefC, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DefI);
    };
    hs_zdcshow525uPJd.evaluate = function (hs_zddShow26DefL) {
        var hs_zddShow126DefM = new $hs.Thunk();
        hs_zddShow126DefM.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowMaybe.hscall(hs_zddShow26DefL);
        };
        var hs_sat26DeNc = new $hs.Func(1);
        hs_sat26DeNc.evaluate = function (hs_x26DefO) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126DefM, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26DefO, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26DeNc.notEvaluated) {
            return hs_sat26DeNc.hscall();
        } else {
            return hs_sat26DeNc;
        }
    };
    hs_zdcshowsPrec525uPJB.evaluate = function (hs_zddShow26Deg1, hs_zddShow126Deg4, hs_ds26Dega, hs_ds126DefX, hs_s26Deg9) {
        var hs_wild26DeNd = hs_ds126DefX;
        if (hs_ds126DefX.notEvaluated) {
            hs_wild26DeNd = hs_ds126DefX.hscall();
        }
        var hs_a6526Deg2 = hs_wild26DeNd.data[0];
        var hs_b26Deg5 = hs_wild26DeNd.data[1];
        var hs_sat26DeNe = new $hs.Thunk();
        hs_sat26DeNe.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126Deg4, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26Deg5);
        };
        var hs_sat26DeNf = new $hs.Data(2);
        hs_sat26DeNf.data = [hs_sat26DeNe, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26DeNg = new $hs.Thunk();
        hs_sat26DeNg.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26Deg1, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6526Deg2);
        };
        var hs_sat26DeNh = new $hs.Data(2);
        hs_sat26DeNh.data = [hs_sat26DeNg, hs_sat26DeNf];
        return hs_showzutuple25rrX6.hscall(hs_sat26DeNh, hs_s26Deg9);
    };
    this.hs_zdfShowZLz2cUZR.evaluate = function (hs_zddShow26Degh, hs_zddShow126Degi) {
        var hs_sat26DeNi = new $hs.Thunk();
        hs_sat26DeNi.evaluateOnce = function () {
            return hs_zdcshowList625uPJW.hscall(hs_zddShow26Degh, hs_zddShow126Degi);
        };
        var hs_sat26DeNj = new $hs.Thunk();
        hs_sat26DeNj.evaluateOnce = function () {
            return hs_zdcshow625uPJY.hscall(hs_zddShow26Degh, hs_zddShow126Degi);
        };
        var hs_sat26DeNk = new $hs.Func(3);
        hs_sat26DeNk.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec525uPJB.hscall(hs_zddShow26Degh, hs_zddShow126Degi, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DeNk, hs_sat26DeNj, hs_sat26DeNi];
        return $res;
    };
    hs_zdcshowList625uPJW.evaluate = function (hs_zddShow26Degp, hs_zddShow126Degq) {
        var hs_zddShow226Degr = new $hs.Thunk();
        hs_zddShow226Degr.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUZR.hscall(hs_zddShow26Degp, hs_zddShow126Degq);
        };
        var hs_sat26Degx = new $hs.Thunk();
        hs_sat26Degx.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226Degr, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26Degx);
    };
    hs_zdcshow625uPJY.evaluate = function (hs_zddShow26DegB, hs_zddShow126DegC) {
        var hs_zddShow226DegD = new $hs.Thunk();
        hs_zddShow226DegD.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUZR.hscall(hs_zddShow26DegB, hs_zddShow126DegC);
        };
        var hs_sat26DeNl = new $hs.Func(1);
        hs_sat26DeNl.evaluate = function (hs_x26DegF) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226DegD, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26DegF, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26DeNl.notEvaluated) {
            return hs_sat26DeNl.hscall();
        } else {
            return hs_sat26DeNl;
        }
    };
    hs_zdcshowsPrec625uPKs.evaluate = function (hs_zddShow26DegU, hs_zddShow126DegX, hs_zddShow226Deh0, hs_ds26Deh7, hs_ds126DegP, hs_s26Deh6) {
        var hs_wild26DeNm = hs_ds126DegP;
        if (hs_ds126DegP.notEvaluated) {
            hs_wild26DeNm = hs_ds126DegP.hscall();
        }
        var hs_a6526DegV = hs_wild26DeNm.data[0];
        var hs_b26DegY = hs_wild26DeNm.data[1];
        var hs_c26Deh1 = hs_wild26DeNm.data[2];
        var hs_sat26DeNn = new $hs.Thunk();
        hs_sat26DeNn.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226Deh0, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26Deh1);
        };
        var hs_sat26DeNo = new $hs.Data(2);
        hs_sat26DeNo.data = [hs_sat26DeNn, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26DeNp = new $hs.Thunk();
        hs_sat26DeNp.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126DegX, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26DegY);
        };
        var hs_sat26DeNq = new $hs.Data(2);
        hs_sat26DeNq.data = [hs_sat26DeNp, hs_sat26DeNo];
        var hs_sat26DeNr = new $hs.Thunk();
        hs_sat26DeNr.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26DegU, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6526DegV);
        };
        var hs_sat26DeNs = new $hs.Data(2);
        hs_sat26DeNs.data = [hs_sat26DeNr, hs_sat26DeNq];
        return hs_showzutuple25rrX6.hscall(hs_sat26DeNs, hs_s26Deh6);
    };
    this.hs_zdfShowZLz2cUz2cUZR.evaluate = function (hs_zddShow26Dehf, hs_zddShow126Dehg, hs_zddShow226Dehh) {
        var hs_sat26DeNt = new $hs.Thunk();
        hs_sat26DeNt.evaluateOnce = function () {
            return hs_zdcshowList725uPKT.hscall(hs_zddShow26Dehf, hs_zddShow126Dehg, hs_zddShow226Dehh);
        };
        var hs_sat26DeNu = new $hs.Thunk();
        hs_sat26DeNu.evaluateOnce = function () {
            return hs_zdcshow725uPKV.hscall(hs_zddShow26Dehf, hs_zddShow126Dehg, hs_zddShow226Dehh);
        };
        var hs_sat26DeNv = new $hs.Func(3);
        hs_sat26DeNv.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec625uPKs.hscall(hs_zddShow26Dehf, hs_zddShow126Dehg, hs_zddShow226Dehh, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DeNv, hs_sat26DeNu, hs_sat26DeNt];
        return $res;
    };
    hs_zdcshowList725uPKT.evaluate = function (hs_zddShow26Dehp, hs_zddShow126Dehq, hs_zddShow226Dehr) {
        var hs_zddShow326Dehs = new $hs.Thunk();
        hs_zddShow326Dehs.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUZR.hscall(hs_zddShow26Dehp, hs_zddShow126Dehq, hs_zddShow226Dehr);
        };
        var hs_sat26Dehy = new $hs.Thunk();
        hs_sat26Dehy.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326Dehs, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26Dehy);
    };
    hs_zdcshow725uPKV.evaluate = function (hs_zddShow26DehD, hs_zddShow126DehE, hs_zddShow226DehF) {
        var hs_zddShow326DehG = new $hs.Thunk();
        hs_zddShow326DehG.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUZR.hscall(hs_zddShow26DehD, hs_zddShow126DehE, hs_zddShow226DehF);
        };
        var hs_sat26DeNw = new $hs.Func(1);
        hs_sat26DeNw.evaluate = function (hs_x26DehI) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326DehG, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26DehI, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26DeNw.notEvaluated) {
            return hs_sat26DeNw.hscall();
        } else {
            return hs_sat26DeNw;
        }
    };
    hs_zdcshowsPrec725uPLv.evaluate = function (hs_zddShow26DehZ, hs_zddShow126Dei2, hs_zddShow226Dei5, hs_zddShow326Dei8, hs_ds26Deig, hs_ds126DehT, hs_s26Deif) {
        var hs_wild26DeNx = hs_ds126DehT;
        if (hs_ds126DehT.notEvaluated) {
            hs_wild26DeNx = hs_ds126DehT.hscall();
        }
        var hs_a6526Dei0 = hs_wild26DeNx.data[0];
        var hs_b26Dei3 = hs_wild26DeNx.data[1];
        var hs_c26Dei6 = hs_wild26DeNx.data[2];
        var hs_d26Dei9 = hs_wild26DeNx.data[3];
        var hs_sat26DeNy = new $hs.Thunk();
        hs_sat26DeNy.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326Dei8, $hs.modules.GHCziBase.hs_zzeroInt, hs_d26Dei9);
        };
        var hs_sat26DeNz = new $hs.Data(2);
        hs_sat26DeNz.data = [hs_sat26DeNy, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26DeNA = new $hs.Thunk();
        hs_sat26DeNA.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226Dei5, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26Dei6);
        };
        var hs_sat26DeNB = new $hs.Data(2);
        hs_sat26DeNB.data = [hs_sat26DeNA, hs_sat26DeNz];
        var hs_sat26DeNC = new $hs.Thunk();
        hs_sat26DeNC.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126Dei2, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26Dei3);
        };
        var hs_sat26DeND = new $hs.Data(2);
        hs_sat26DeND.data = [hs_sat26DeNC, hs_sat26DeNB];
        var hs_sat26DeNE = new $hs.Thunk();
        hs_sat26DeNE.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26DehZ, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6526Dei0);
        };
        var hs_sat26DeNF = new $hs.Data(2);
        hs_sat26DeNF.data = [hs_sat26DeNE, hs_sat26DeND];
        return hs_showzutuple25rrX6.hscall(hs_sat26DeNF, hs_s26Deif);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26Deip, hs_zddShow126Deiq, hs_zddShow226Deir, hs_zddShow326Deis) {
        var hs_sat26DeNG = new $hs.Thunk();
        hs_sat26DeNG.evaluateOnce = function () {
            return hs_zdcshowList825uPM2.hscall(hs_zddShow26Deip, hs_zddShow126Deiq, hs_zddShow226Deir, hs_zddShow326Deis);
        };
        var hs_sat26DeNH = new $hs.Thunk();
        hs_sat26DeNH.evaluateOnce = function () {
            return hs_zdcshow825uPM4.hscall(hs_zddShow26Deip, hs_zddShow126Deiq, hs_zddShow226Deir, hs_zddShow326Deis);
        };
        var hs_sat26DeNI = new $hs.Func(3);
        hs_sat26DeNI.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec725uPLv.hscall(hs_zddShow26Deip, hs_zddShow126Deiq, hs_zddShow226Deir, hs_zddShow326Deis, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DeNI, hs_sat26DeNH, hs_sat26DeNG];
        return $res;
    };
    hs_zdcshowList825uPM2.evaluate = function (hs_zddShow26DeiB, hs_zddShow126DeiC, hs_zddShow226DeiD, hs_zddShow326DeiE) {
        var hs_zddShow426DeiF = new $hs.Thunk();
        hs_zddShow426DeiF.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUZR.hscall(hs_zddShow26DeiB, hs_zddShow126DeiC, hs_zddShow226DeiD, hs_zddShow326DeiE);
        };
        var hs_sat26DeiL = new $hs.Thunk();
        hs_sat26DeiL.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426DeiF, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DeiL);
    };
    hs_zdcshow825uPM4.evaluate = function (hs_zddShow26DeiR, hs_zddShow126DeiS, hs_zddShow226DeiT, hs_zddShow326DeiU) {
        var hs_zddShow426DeiV = new $hs.Thunk();
        hs_zddShow426DeiV.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUZR.hscall(hs_zddShow26DeiR, hs_zddShow126DeiS, hs_zddShow226DeiT, hs_zddShow326DeiU);
        };
        var hs_sat26DeNJ = new $hs.Func(1);
        hs_sat26DeNJ.evaluate = function (hs_x26DeiX) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426DeiV, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26DeiX, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26DeNJ.notEvaluated) {
            return hs_sat26DeNJ.hscall();
        } else {
            return hs_sat26DeNJ;
        }
    };
    hs_zdcshowsPrec825uPMK.evaluate = function (hs_zddShow26Dejg, hs_zddShow126Dejj, hs_zddShow226Dejm, hs_zddShow326Dejp, hs_zddShow426Dejs, hs_ds26DejB, hs_ds126Dej9, hs_s26DejA) {
        var hs_wild26DeNK = hs_ds126Dej9;
        if (hs_ds126Dej9.notEvaluated) {
            hs_wild26DeNK = hs_ds126Dej9.hscall();
        }
        var hs_a6526Dejh = hs_wild26DeNK.data[0];
        var hs_b26Dejk = hs_wild26DeNK.data[1];
        var hs_c26Dejn = hs_wild26DeNK.data[2];
        var hs_d26Dejq = hs_wild26DeNK.data[3];
        var hs_e26Dejt = hs_wild26DeNK.data[4];
        var hs_sat26DeNL = new $hs.Thunk();
        hs_sat26DeNL.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426Dejs, $hs.modules.GHCziBase.hs_zzeroInt, hs_e26Dejt);
        };
        var hs_sat26DeNM = new $hs.Data(2);
        hs_sat26DeNM.data = [hs_sat26DeNL, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26DeNN = new $hs.Thunk();
        hs_sat26DeNN.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326Dejp, $hs.modules.GHCziBase.hs_zzeroInt, hs_d26Dejq);
        };
        var hs_sat26DeNO = new $hs.Data(2);
        hs_sat26DeNO.data = [hs_sat26DeNN, hs_sat26DeNM];
        var hs_sat26DeNP = new $hs.Thunk();
        hs_sat26DeNP.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226Dejm, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26Dejn);
        };
        var hs_sat26DeNQ = new $hs.Data(2);
        hs_sat26DeNQ.data = [hs_sat26DeNP, hs_sat26DeNO];
        var hs_sat26DeNR = new $hs.Thunk();
        hs_sat26DeNR.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126Dejj, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26Dejk);
        };
        var hs_sat26DeNS = new $hs.Data(2);
        hs_sat26DeNS.data = [hs_sat26DeNR, hs_sat26DeNQ];
        var hs_sat26DeNT = new $hs.Thunk();
        hs_sat26DeNT.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26Dejg, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6526Dejh);
        };
        var hs_sat26DeNU = new $hs.Data(2);
        hs_sat26DeNU.data = [hs_sat26DeNT, hs_sat26DeNS];
        return hs_showzutuple25rrX6.hscall(hs_sat26DeNU, hs_s26DejA);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26DejL, hs_zddShow126DejM, hs_zddShow226DejN, hs_zddShow326DejO, hs_zddShow426DejP) {
        var hs_sat26DeNV = new $hs.Thunk();
        hs_sat26DeNV.evaluateOnce = function () {
            return hs_zdcshowList925uPNn.hscall(hs_zddShow26DejL, hs_zddShow126DejM, hs_zddShow226DejN, hs_zddShow326DejO, hs_zddShow426DejP);
        };
        var hs_sat26DeNW = new $hs.Thunk();
        hs_sat26DeNW.evaluateOnce = function () {
            return hs_zdcshow925uPNp.hscall(hs_zddShow26DejL, hs_zddShow126DejM, hs_zddShow226DejN, hs_zddShow326DejO, hs_zddShow426DejP);
        };
        var hs_sat26DeNX = new $hs.Func(3);
        hs_sat26DeNX.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec825uPMK.hscall(hs_zddShow26DejL, hs_zddShow126DejM, hs_zddShow226DejN, hs_zddShow326DejO, hs_zddShow426DejP, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DeNX, hs_sat26DeNW, hs_sat26DeNV];
        return $res;
    };
    hs_zdcshowList925uPNn.evaluate = function (hs_zddShow26DejZ, hs_zddShow126Dek0, hs_zddShow226Dek1, hs_zddShow326Dek2, hs_zddShow426Dek3) {
        var hs_zddShow526Dek4 = new $hs.Thunk();
        hs_zddShow526Dek4.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26DejZ, hs_zddShow126Dek0, hs_zddShow226Dek1, hs_zddShow326Dek2, hs_zddShow426Dek3);
        };
        var hs_sat26Deka = new $hs.Thunk();
        hs_sat26Deka.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow526Dek4, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26Deka);
    };
    hs_zdcshow925uPNp.evaluate = function (hs_zddShow26Dekh, hs_zddShow126Deki, hs_zddShow226Dekj, hs_zddShow326Dekk, hs_zddShow426Dekl) {
        var hs_zddShow526Dekm = new $hs.Thunk();
        hs_zddShow526Dekm.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26Dekh, hs_zddShow126Deki, hs_zddShow226Dekj, hs_zddShow326Dekk, hs_zddShow426Dekl);
        };
        var hs_sat26DeNY = new $hs.Func(1);
        hs_sat26DeNY.evaluate = function (hs_x26Deko) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow526Dekm, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26Deko, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26DeNY.notEvaluated) {
            return hs_sat26DeNY.hscall();
        } else {
            return hs_sat26DeNY;
        }
    };
    hs_zdcshowsPrec925uPOb.evaluate = function (hs_zddShow26DekJ, hs_zddShow126DekM, hs_zddShow226DekP, hs_zddShow326DekS, hs_zddShow426DekV, hs_zddShow526DekY, hs_ds26Del8, hs_ds126DekB, hs_s26Del7) {
        var hs_wild26DeNZ = hs_ds126DekB;
        if (hs_ds126DekB.notEvaluated) {
            hs_wild26DeNZ = hs_ds126DekB.hscall();
        }
        var hs_a6526DekK = hs_wild26DeNZ.data[0];
        var hs_b26DekN = hs_wild26DeNZ.data[1];
        var hs_c26DekQ = hs_wild26DeNZ.data[2];
        var hs_d26DekT = hs_wild26DeNZ.data[3];
        var hs_e26DekW = hs_wild26DeNZ.data[4];
        var hs_f26DekZ = hs_wild26DeNZ.data[5];
        var hs_sat26DeO0 = new $hs.Thunk();
        hs_sat26DeO0.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow526DekY, $hs.modules.GHCziBase.hs_zzeroInt, hs_f26DekZ);
        };
        var hs_sat26DeO1 = new $hs.Data(2);
        hs_sat26DeO1.data = [hs_sat26DeO0, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26DeO2 = new $hs.Thunk();
        hs_sat26DeO2.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426DekV, $hs.modules.GHCziBase.hs_zzeroInt, hs_e26DekW);
        };
        var hs_sat26DeO3 = new $hs.Data(2);
        hs_sat26DeO3.data = [hs_sat26DeO2, hs_sat26DeO1];
        var hs_sat26DeO4 = new $hs.Thunk();
        hs_sat26DeO4.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326DekS, $hs.modules.GHCziBase.hs_zzeroInt, hs_d26DekT);
        };
        var hs_sat26DeO5 = new $hs.Data(2);
        hs_sat26DeO5.data = [hs_sat26DeO4, hs_sat26DeO3];
        var hs_sat26DeO6 = new $hs.Thunk();
        hs_sat26DeO6.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226DekP, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26DekQ);
        };
        var hs_sat26DeO7 = new $hs.Data(2);
        hs_sat26DeO7.data = [hs_sat26DeO6, hs_sat26DeO5];
        var hs_sat26DeO8 = new $hs.Thunk();
        hs_sat26DeO8.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126DekM, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26DekN);
        };
        var hs_sat26DeO9 = new $hs.Data(2);
        hs_sat26DeO9.data = [hs_sat26DeO8, hs_sat26DeO7];
        var hs_sat26DeOa = new $hs.Thunk();
        hs_sat26DeOa.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26DekJ, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6526DekK);
        };
        var hs_sat26DeOb = new $hs.Data(2);
        hs_sat26DeOb.data = [hs_sat26DeOa, hs_sat26DeO9];
        return hs_showzutuple25rrX6.hscall(hs_sat26DeOb, hs_s26Del7);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26Delj, hs_zddShow126Delk, hs_zddShow226Dell, hs_zddShow326Delm, hs_zddShow426Deln, hs_zddShow526Delo) {
        var hs_sat26DeOc = new $hs.Thunk();
        hs_sat26DeOc.evaluateOnce = function () {
            return hs_zdcshowList1025uPOU.hscall(hs_zddShow26Delj, hs_zddShow126Delk, hs_zddShow226Dell, hs_zddShow326Delm, hs_zddShow426Deln, hs_zddShow526Delo);
        };
        var hs_sat26DeOd = new $hs.Thunk();
        hs_sat26DeOd.evaluateOnce = function () {
            return hs_zdcshow1025uPOW.hscall(hs_zddShow26Delj, hs_zddShow126Delk, hs_zddShow226Dell, hs_zddShow326Delm, hs_zddShow426Deln, hs_zddShow526Delo);
        };
        var hs_sat26DeOe = new $hs.Func(3);
        hs_sat26DeOe.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec925uPOb.hscall(hs_zddShow26Delj, hs_zddShow126Delk, hs_zddShow226Dell, hs_zddShow326Delm, hs_zddShow426Deln, hs_zddShow526Delo, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DeOe, hs_sat26DeOd, hs_sat26DeOc];
        return $res;
    };
    hs_zdcshowList1025uPOU.evaluate = function (hs_zddShow26Delz, hs_zddShow126DelA, hs_zddShow226DelB, hs_zddShow326DelC, hs_zddShow426DelD, hs_zddShow526DelE) {
        var hs_zddShow626DelF = new $hs.Thunk();
        hs_zddShow626DelF.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26Delz, hs_zddShow126DelA, hs_zddShow226DelB, hs_zddShow326DelC, hs_zddShow426DelD, hs_zddShow526DelE);
        };
        var hs_sat26DelL = new $hs.Thunk();
        hs_sat26DelL.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow626DelF, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DelL);
    };
    hs_zdcshow1025uPOW.evaluate = function (hs_zddShow26DelT, hs_zddShow126DelU, hs_zddShow226DelV, hs_zddShow326DelW, hs_zddShow426DelX, hs_zddShow526DelY) {
        var hs_zddShow626DelZ = new $hs.Thunk();
        hs_zddShow626DelZ.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26DelT, hs_zddShow126DelU, hs_zddShow226DelV, hs_zddShow326DelW, hs_zddShow426DelX, hs_zddShow526DelY);
        };
        var hs_sat26DeOf = new $hs.Func(1);
        hs_sat26DeOf.evaluate = function (hs_x26Dem1) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow626DelZ, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26Dem1, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26DeOf.notEvaluated) {
            return hs_sat26DeOf.hscall();
        } else {
            return hs_sat26DeOf;
        }
    };
    hs_zdcshowsPrec1025uPPO.evaluate = function (hs_zddShow26Demo, hs_zddShow126Demr, hs_zddShow226Demu, hs_zddShow326Demx, hs_zddShow426DemA, hs_zddShow526DemD, hs_zddShow626DemG, hs_ds26DemR, hs_ds126Demf, hs_s26DemQ) {
        var hs_wild26DeOg = hs_ds126Demf;
        if (hs_ds126Demf.notEvaluated) {
            hs_wild26DeOg = hs_ds126Demf.hscall();
        }
        var hs_a6526Demp = hs_wild26DeOg.data[0];
        var hs_b26Dems = hs_wild26DeOg.data[1];
        var hs_c26Demv = hs_wild26DeOg.data[2];
        var hs_d26Demy = hs_wild26DeOg.data[3];
        var hs_e26DemB = hs_wild26DeOg.data[4];
        var hs_f26DemE = hs_wild26DeOg.data[5];
        var hs_g26DemH = hs_wild26DeOg.data[6];
        var hs_sat26DeOh = new $hs.Thunk();
        hs_sat26DeOh.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow626DemG, $hs.modules.GHCziBase.hs_zzeroInt, hs_g26DemH);
        };
        var hs_sat26DeOi = new $hs.Data(2);
        hs_sat26DeOi.data = [hs_sat26DeOh, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26DeOj = new $hs.Thunk();
        hs_sat26DeOj.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow526DemD, $hs.modules.GHCziBase.hs_zzeroInt, hs_f26DemE);
        };
        var hs_sat26DeOk = new $hs.Data(2);
        hs_sat26DeOk.data = [hs_sat26DeOj, hs_sat26DeOi];
        var hs_sat26DeOl = new $hs.Thunk();
        hs_sat26DeOl.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426DemA, $hs.modules.GHCziBase.hs_zzeroInt, hs_e26DemB);
        };
        var hs_sat26DeOm = new $hs.Data(2);
        hs_sat26DeOm.data = [hs_sat26DeOl, hs_sat26DeOk];
        var hs_sat26DeOn = new $hs.Thunk();
        hs_sat26DeOn.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326Demx, $hs.modules.GHCziBase.hs_zzeroInt, hs_d26Demy);
        };
        var hs_sat26DeOo = new $hs.Data(2);
        hs_sat26DeOo.data = [hs_sat26DeOn, hs_sat26DeOm];
        var hs_sat26DeOp = new $hs.Thunk();
        hs_sat26DeOp.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226Demu, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26Demv);
        };
        var hs_sat26DeOq = new $hs.Data(2);
        hs_sat26DeOq.data = [hs_sat26DeOp, hs_sat26DeOo];
        var hs_sat26DeOr = new $hs.Thunk();
        hs_sat26DeOr.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126Demr, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26Dems);
        };
        var hs_sat26DeOs = new $hs.Data(2);
        hs_sat26DeOs.data = [hs_sat26DeOr, hs_sat26DeOq];
        var hs_sat26DeOt = new $hs.Thunk();
        hs_sat26DeOt.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26Demo, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6526Demp);
        };
        var hs_sat26DeOu = new $hs.Data(2);
        hs_sat26DeOu.data = [hs_sat26DeOt, hs_sat26DeOs];
        return hs_showzutuple25rrX6.hscall(hs_sat26DeOu, hs_s26DemQ);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26Den3, hs_zddShow126Den4, hs_zddShow226Den5, hs_zddShow326Den6, hs_zddShow426Den7, hs_zddShow526Den8, hs_zddShow626Den9) {
        var hs_sat26DeOv = new $hs.Thunk();
        hs_sat26DeOv.evaluateOnce = function () {
            return hs_zdcshowList1125uPQD.hscall(hs_zddShow26Den3, hs_zddShow126Den4, hs_zddShow226Den5, hs_zddShow326Den6, hs_zddShow426Den7, hs_zddShow526Den8, hs_zddShow626Den9);
        };
        var hs_sat26DeOw = new $hs.Thunk();
        hs_sat26DeOw.evaluateOnce = function () {
            return hs_zdcshow1125uPQF.hscall(hs_zddShow26Den3, hs_zddShow126Den4, hs_zddShow226Den5, hs_zddShow326Den6, hs_zddShow426Den7, hs_zddShow526Den8, hs_zddShow626Den9);
        };
        var hs_sat26DeOx = new $hs.Func(3);
        hs_sat26DeOx.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec1025uPPO.hscall(hs_zddShow26Den3, hs_zddShow126Den4, hs_zddShow226Den5, hs_zddShow326Den6, hs_zddShow426Den7, hs_zddShow526Den8, hs_zddShow626Den9, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DeOx, hs_sat26DeOw, hs_sat26DeOv];
        return $res;
    };
    hs_zdcshowList1125uPQD.evaluate = function (hs_zddShow26Denl, hs_zddShow126Denm, hs_zddShow226Denn, hs_zddShow326Deno, hs_zddShow426Denp, hs_zddShow526Denq, hs_zddShow626Denr) {
        var hs_zddShow726Dens = new $hs.Thunk();
        hs_zddShow726Dens.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26Denl, hs_zddShow126Denm, hs_zddShow226Denn, hs_zddShow326Deno, hs_zddShow426Denp, hs_zddShow526Denq, hs_zddShow626Denr);
        };
        var hs_sat26Deny = new $hs.Thunk();
        hs_sat26Deny.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow726Dens, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26Deny);
    };
    hs_zdcshow1125uPQF.evaluate = function (hs_zddShow26DenH, hs_zddShow126DenI, hs_zddShow226DenJ, hs_zddShow326DenK, hs_zddShow426DenL, hs_zddShow526DenM, hs_zddShow626DenN) {
        var hs_zddShow726DenO = new $hs.Thunk();
        hs_zddShow726DenO.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26DenH, hs_zddShow126DenI, hs_zddShow226DenJ, hs_zddShow326DenK, hs_zddShow426DenL, hs_zddShow526DenM, hs_zddShow626DenN);
        };
        var hs_sat26DeOy = new $hs.Func(1);
        hs_sat26DeOy.evaluate = function (hs_x26DenQ) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow726DenO, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26DenQ, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26DeOy.notEvaluated) {
            return hs_sat26DeOy.hscall();
        } else {
            return hs_sat26DeOy;
        }
    };
    hs_zdcshowsPrec1125uPRD.evaluate = function (hs_zddShow26Deof, hs_zddShow126Deoi, hs_zddShow226Deol, hs_zddShow326Deoo, hs_zddShow426Deor, hs_zddShow526Deou, hs_zddShow626Deox, hs_zddShow726DeoA, hs_ds26DeoM, hs_ds126Deo5, hs_s26DeoL) {
        var hs_wild26DeOz = hs_ds126Deo5;
        if (hs_ds126Deo5.notEvaluated) {
            hs_wild26DeOz = hs_ds126Deo5.hscall();
        }
        var hs_a6526Deog = hs_wild26DeOz.data[0];
        var hs_b26Deoj = hs_wild26DeOz.data[1];
        var hs_c26Deom = hs_wild26DeOz.data[2];
        var hs_d26Deop = hs_wild26DeOz.data[3];
        var hs_e26Deos = hs_wild26DeOz.data[4];
        var hs_f26Deov = hs_wild26DeOz.data[5];
        var hs_g26Deoy = hs_wild26DeOz.data[6];
        var hs_h26DeoB = hs_wild26DeOz.data[7];
        var hs_sat26DeOA = new $hs.Thunk();
        hs_sat26DeOA.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow726DeoA, $hs.modules.GHCziBase.hs_zzeroInt, hs_h26DeoB);
        };
        var hs_sat26DeOB = new $hs.Data(2);
        hs_sat26DeOB.data = [hs_sat26DeOA, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26DeOC = new $hs.Thunk();
        hs_sat26DeOC.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow626Deox, $hs.modules.GHCziBase.hs_zzeroInt, hs_g26Deoy);
        };
        var hs_sat26DeOD = new $hs.Data(2);
        hs_sat26DeOD.data = [hs_sat26DeOC, hs_sat26DeOB];
        var hs_sat26DeOE = new $hs.Thunk();
        hs_sat26DeOE.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow526Deou, $hs.modules.GHCziBase.hs_zzeroInt, hs_f26Deov);
        };
        var hs_sat26DeOF = new $hs.Data(2);
        hs_sat26DeOF.data = [hs_sat26DeOE, hs_sat26DeOD];
        var hs_sat26DeOG = new $hs.Thunk();
        hs_sat26DeOG.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426Deor, $hs.modules.GHCziBase.hs_zzeroInt, hs_e26Deos);
        };
        var hs_sat26DeOH = new $hs.Data(2);
        hs_sat26DeOH.data = [hs_sat26DeOG, hs_sat26DeOF];
        var hs_sat26DeOI = new $hs.Thunk();
        hs_sat26DeOI.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326Deoo, $hs.modules.GHCziBase.hs_zzeroInt, hs_d26Deop);
        };
        var hs_sat26DeOJ = new $hs.Data(2);
        hs_sat26DeOJ.data = [hs_sat26DeOI, hs_sat26DeOH];
        var hs_sat26DeOK = new $hs.Thunk();
        hs_sat26DeOK.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226Deol, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26Deom);
        };
        var hs_sat26DeOL = new $hs.Data(2);
        hs_sat26DeOL.data = [hs_sat26DeOK, hs_sat26DeOJ];
        var hs_sat26DeOM = new $hs.Thunk();
        hs_sat26DeOM.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126Deoi, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26Deoj);
        };
        var hs_sat26DeON = new $hs.Data(2);
        hs_sat26DeON.data = [hs_sat26DeOM, hs_sat26DeOL];
        var hs_sat26DeOO = new $hs.Thunk();
        hs_sat26DeOO.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26Deof, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6526Deog);
        };
        var hs_sat26DeOP = new $hs.Data(2);
        hs_sat26DeOP.data = [hs_sat26DeOO, hs_sat26DeON];
        return hs_showzutuple25rrX6.hscall(hs_sat26DeOP, hs_s26DeoL);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26DeoZ, hs_zddShow126Dep0, hs_zddShow226Dep1, hs_zddShow326Dep2, hs_zddShow426Dep3, hs_zddShow526Dep4, hs_zddShow626Dep5, hs_zddShow726Dep6) {
        var hs_sat26DeOQ = new $hs.Thunk();
        hs_sat26DeOQ.evaluateOnce = function () {
            return hs_zdcshowList1225uPSy.hscall(hs_zddShow26DeoZ, hs_zddShow126Dep0, hs_zddShow226Dep1, hs_zddShow326Dep2, hs_zddShow426Dep3, hs_zddShow526Dep4, hs_zddShow626Dep5, hs_zddShow726Dep6);
        };
        var hs_sat26DeOR = new $hs.Thunk();
        hs_sat26DeOR.evaluateOnce = function () {
            return hs_zdcshow1225uPSA.hscall(hs_zddShow26DeoZ, hs_zddShow126Dep0, hs_zddShow226Dep1, hs_zddShow326Dep2, hs_zddShow426Dep3, hs_zddShow526Dep4, hs_zddShow626Dep5, hs_zddShow726Dep6);
        };
        var hs_sat26DeOS = new $hs.Func(3);
        hs_sat26DeOS.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec1125uPRD.hscall(hs_zddShow26DeoZ, hs_zddShow126Dep0, hs_zddShow226Dep1, hs_zddShow326Dep2, hs_zddShow426Dep3, hs_zddShow526Dep4, hs_zddShow626Dep5, hs_zddShow726Dep6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DeOS, hs_sat26DeOR, hs_sat26DeOQ];
        return $res;
    };
    hs_zdcshowList1225uPSy.evaluate = function (hs_zddShow26Depj, hs_zddShow126Depk, hs_zddShow226Depl, hs_zddShow326Depm, hs_zddShow426Depn, hs_zddShow526Depo, hs_zddShow626Depp, hs_zddShow726Depq) {
        var hs_zddShow826Depr = new $hs.Thunk();
        hs_zddShow826Depr.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26Depj, hs_zddShow126Depk, hs_zddShow226Depl, hs_zddShow326Depm, hs_zddShow426Depn, hs_zddShow526Depo, hs_zddShow626Depp, hs_zddShow726Depq);
        };
        var hs_sat26Depx = new $hs.Thunk();
        hs_sat26Depx.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow826Depr, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26Depx);
    };
    hs_zdcshow1225uPSA.evaluate = function (hs_zddShow26DepH, hs_zddShow126DepI, hs_zddShow226DepJ, hs_zddShow326DepK, hs_zddShow426DepL, hs_zddShow526DepM, hs_zddShow626DepN, hs_zddShow726DepO) {
        var hs_zddShow826DepP = new $hs.Thunk();
        hs_zddShow826DepP.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26DepH, hs_zddShow126DepI, hs_zddShow226DepJ, hs_zddShow326DepK, hs_zddShow426DepL, hs_zddShow526DepM, hs_zddShow626DepN, hs_zddShow726DepO);
        };
        var hs_sat26DeOT = new $hs.Func(1);
        hs_sat26DeOT.evaluate = function (hs_x26DepR) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow826DepP, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26DepR, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26DeOT.notEvaluated) {
            return hs_sat26DeOT.hscall();
        } else {
            return hs_sat26DeOT;
        }
    };
    hs_zdcshowsPrec1225uPTE.evaluate = function (hs_zddShow26Deqi, hs_zddShow126Deql, hs_zddShow226Deqo, hs_zddShow326Deqr, hs_zddShow426Dequ, hs_zddShow526Deqx, hs_zddShow626DeqA, hs_zddShow726DeqD, hs_zddShow826DeqG, hs_ds26DeqT, hs_ds126Deq7, hs_s26DeqS) {
        var hs_wild26DeOU = hs_ds126Deq7;
        if (hs_ds126Deq7.notEvaluated) {
            hs_wild26DeOU = hs_ds126Deq7.hscall();
        }
        var hs_a6526Deqj = hs_wild26DeOU.data[0];
        var hs_b26Deqm = hs_wild26DeOU.data[1];
        var hs_c26Deqp = hs_wild26DeOU.data[2];
        var hs_d26Deqs = hs_wild26DeOU.data[3];
        var hs_e26Deqv = hs_wild26DeOU.data[4];
        var hs_f26Deqy = hs_wild26DeOU.data[5];
        var hs_g26DeqB = hs_wild26DeOU.data[6];
        var hs_h26DeqE = hs_wild26DeOU.data[7];
        var hs_i26DeqH = hs_wild26DeOU.data[8];
        var hs_sat26DeOV = new $hs.Thunk();
        hs_sat26DeOV.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow826DeqG, $hs.modules.GHCziBase.hs_zzeroInt, hs_i26DeqH);
        };
        var hs_sat26DeOW = new $hs.Data(2);
        hs_sat26DeOW.data = [hs_sat26DeOV, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26DeOX = new $hs.Thunk();
        hs_sat26DeOX.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow726DeqD, $hs.modules.GHCziBase.hs_zzeroInt, hs_h26DeqE);
        };
        var hs_sat26DeOY = new $hs.Data(2);
        hs_sat26DeOY.data = [hs_sat26DeOX, hs_sat26DeOW];
        var hs_sat26DeOZ = new $hs.Thunk();
        hs_sat26DeOZ.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow626DeqA, $hs.modules.GHCziBase.hs_zzeroInt, hs_g26DeqB);
        };
        var hs_sat26DeP0 = new $hs.Data(2);
        hs_sat26DeP0.data = [hs_sat26DeOZ, hs_sat26DeOY];
        var hs_sat26DeP1 = new $hs.Thunk();
        hs_sat26DeP1.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow526Deqx, $hs.modules.GHCziBase.hs_zzeroInt, hs_f26Deqy);
        };
        var hs_sat26DeP2 = new $hs.Data(2);
        hs_sat26DeP2.data = [hs_sat26DeP1, hs_sat26DeP0];
        var hs_sat26DeP3 = new $hs.Thunk();
        hs_sat26DeP3.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426Dequ, $hs.modules.GHCziBase.hs_zzeroInt, hs_e26Deqv);
        };
        var hs_sat26DeP4 = new $hs.Data(2);
        hs_sat26DeP4.data = [hs_sat26DeP3, hs_sat26DeP2];
        var hs_sat26DeP5 = new $hs.Thunk();
        hs_sat26DeP5.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326Deqr, $hs.modules.GHCziBase.hs_zzeroInt, hs_d26Deqs);
        };
        var hs_sat26DeP6 = new $hs.Data(2);
        hs_sat26DeP6.data = [hs_sat26DeP5, hs_sat26DeP4];
        var hs_sat26DeP7 = new $hs.Thunk();
        hs_sat26DeP7.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226Deqo, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26Deqp);
        };
        var hs_sat26DeP8 = new $hs.Data(2);
        hs_sat26DeP8.data = [hs_sat26DeP7, hs_sat26DeP6];
        var hs_sat26DeP9 = new $hs.Thunk();
        hs_sat26DeP9.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126Deql, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26Deqm);
        };
        var hs_sat26DePa = new $hs.Data(2);
        hs_sat26DePa.data = [hs_sat26DeP9, hs_sat26DeP8];
        var hs_sat26DePb = new $hs.Thunk();
        hs_sat26DePb.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26Deqi, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6526Deqj);
        };
        var hs_sat26DePc = new $hs.Data(2);
        hs_sat26DePc.data = [hs_sat26DePb, hs_sat26DePa];
        return hs_showzutuple25rrX6.hscall(hs_sat26DePc, hs_s26DeqS);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26Der7, hs_zddShow126Der8, hs_zddShow226Der9, hs_zddShow326Dera, hs_zddShow426Derb, hs_zddShow526Derc, hs_zddShow626Derd, hs_zddShow726Dere, hs_zddShow826Derf) {
        var hs_sat26DePd = new $hs.Thunk();
        hs_sat26DePd.evaluateOnce = function () {
            return hs_zdcshowList1325uPUF.hscall(hs_zddShow26Der7, hs_zddShow126Der8, hs_zddShow226Der9, hs_zddShow326Dera, hs_zddShow426Derb, hs_zddShow526Derc, hs_zddShow626Derd, hs_zddShow726Dere, hs_zddShow826Derf);
        };
        var hs_sat26DePe = new $hs.Thunk();
        hs_sat26DePe.evaluateOnce = function () {
            return hs_zdcshow1325uPUH.hscall(hs_zddShow26Der7, hs_zddShow126Der8, hs_zddShow226Der9, hs_zddShow326Dera, hs_zddShow426Derb, hs_zddShow526Derc, hs_zddShow626Derd, hs_zddShow726Dere, hs_zddShow826Derf);
        };
        var hs_sat26DePf = new $hs.Func(3);
        hs_sat26DePf.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec1225uPTE.hscall(hs_zddShow26Der7, hs_zddShow126Der8, hs_zddShow226Der9, hs_zddShow326Dera, hs_zddShow426Derb, hs_zddShow526Derc, hs_zddShow626Derd, hs_zddShow726Dere, hs_zddShow826Derf, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DePf, hs_sat26DePe, hs_sat26DePd];
        return $res;
    };
    hs_zdcshowList1325uPUF.evaluate = function (hs_zddShow26Dert, hs_zddShow126Deru, hs_zddShow226Derv, hs_zddShow326Derw, hs_zddShow426Derx, hs_zddShow526Dery, hs_zddShow626Derz, hs_zddShow726DerA, hs_zddShow826DerB) {
        var hs_zddShow926DerC = new $hs.Thunk();
        hs_zddShow926DerC.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26Dert, hs_zddShow126Deru, hs_zddShow226Derv, hs_zddShow326Derw, hs_zddShow426Derx, hs_zddShow526Dery, hs_zddShow626Derz, hs_zddShow726DerA, hs_zddShow826DerB);
        };
        var hs_sat26DerI = new $hs.Thunk();
        hs_sat26DerI.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow926DerC, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DerI);
    };
    hs_zdcshow1325uPUH.evaluate = function (hs_zddShow26DerT, hs_zddShow126DerU, hs_zddShow226DerV, hs_zddShow326DerW, hs_zddShow426DerX, hs_zddShow526DerY, hs_zddShow626DerZ, hs_zddShow726Des0, hs_zddShow826Des1) {
        var hs_zddShow926Des2 = new $hs.Thunk();
        hs_zddShow926Des2.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26DerT, hs_zddShow126DerU, hs_zddShow226DerV, hs_zddShow326DerW, hs_zddShow426DerX, hs_zddShow526DerY, hs_zddShow626DerZ, hs_zddShow726Des0, hs_zddShow826Des1);
        };
        var hs_sat26DePg = new $hs.Func(1);
        hs_sat26DePg.evaluate = function (hs_x26Des4) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow926Des2, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26Des4, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26DePg.notEvaluated) {
            return hs_sat26DePg.hscall();
        } else {
            return hs_sat26DePg;
        }
    };
    hs_zdcshowsPrec1325uPVR.evaluate = function (hs_zddShow26Desx, hs_zddShow126DesA, hs_zddShow226DesD, hs_zddShow326DesG, hs_zddShow426DesJ, hs_zddShow526DesM, hs_zddShow626DesP, hs_zddShow726DesS, hs_zddShow826DesV, hs_zddShow926DesY, hs_ds26Detc, hs_ds126Desl, hs_s26Detb) {
        var hs_wild26DePh = hs_ds126Desl;
        if (hs_ds126Desl.notEvaluated) {
            hs_wild26DePh = hs_ds126Desl.hscall();
        }
        var hs_a6526Desy = hs_wild26DePh.data[0];
        var hs_b26DesB = hs_wild26DePh.data[1];
        var hs_c26DesE = hs_wild26DePh.data[2];
        var hs_d26DesH = hs_wild26DePh.data[3];
        var hs_e26DesK = hs_wild26DePh.data[4];
        var hs_f26DesN = hs_wild26DePh.data[5];
        var hs_g26DesQ = hs_wild26DePh.data[6];
        var hs_h26DesT = hs_wild26DePh.data[7];
        var hs_i26DesW = hs_wild26DePh.data[8];
        var hs_j26DesZ = hs_wild26DePh.data[9];
        var hs_sat26DePi = new $hs.Thunk();
        hs_sat26DePi.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow926DesY, $hs.modules.GHCziBase.hs_zzeroInt, hs_j26DesZ);
        };
        var hs_sat26DePj = new $hs.Data(2);
        hs_sat26DePj.data = [hs_sat26DePi, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26DePk = new $hs.Thunk();
        hs_sat26DePk.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow826DesV, $hs.modules.GHCziBase.hs_zzeroInt, hs_i26DesW);
        };
        var hs_sat26DePl = new $hs.Data(2);
        hs_sat26DePl.data = [hs_sat26DePk, hs_sat26DePj];
        var hs_sat26DePm = new $hs.Thunk();
        hs_sat26DePm.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow726DesS, $hs.modules.GHCziBase.hs_zzeroInt, hs_h26DesT);
        };
        var hs_sat26DePn = new $hs.Data(2);
        hs_sat26DePn.data = [hs_sat26DePm, hs_sat26DePl];
        var hs_sat26DePo = new $hs.Thunk();
        hs_sat26DePo.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow626DesP, $hs.modules.GHCziBase.hs_zzeroInt, hs_g26DesQ);
        };
        var hs_sat26DePp = new $hs.Data(2);
        hs_sat26DePp.data = [hs_sat26DePo, hs_sat26DePn];
        var hs_sat26DePq = new $hs.Thunk();
        hs_sat26DePq.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow526DesM, $hs.modules.GHCziBase.hs_zzeroInt, hs_f26DesN);
        };
        var hs_sat26DePr = new $hs.Data(2);
        hs_sat26DePr.data = [hs_sat26DePq, hs_sat26DePp];
        var hs_sat26DePs = new $hs.Thunk();
        hs_sat26DePs.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426DesJ, $hs.modules.GHCziBase.hs_zzeroInt, hs_e26DesK);
        };
        var hs_sat26DePt = new $hs.Data(2);
        hs_sat26DePt.data = [hs_sat26DePs, hs_sat26DePr];
        var hs_sat26DePu = new $hs.Thunk();
        hs_sat26DePu.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326DesG, $hs.modules.GHCziBase.hs_zzeroInt, hs_d26DesH);
        };
        var hs_sat26DePv = new $hs.Data(2);
        hs_sat26DePv.data = [hs_sat26DePu, hs_sat26DePt];
        var hs_sat26DePw = new $hs.Thunk();
        hs_sat26DePw.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226DesD, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26DesE);
        };
        var hs_sat26DePx = new $hs.Data(2);
        hs_sat26DePx.data = [hs_sat26DePw, hs_sat26DePv];
        var hs_sat26DePy = new $hs.Thunk();
        hs_sat26DePy.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126DesA, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26DesB);
        };
        var hs_sat26DePz = new $hs.Data(2);
        hs_sat26DePz.data = [hs_sat26DePy, hs_sat26DePx];
        var hs_sat26DePA = new $hs.Thunk();
        hs_sat26DePA.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26Desx, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6526Desy);
        };
        var hs_sat26DePB = new $hs.Data(2);
        hs_sat26DePB.data = [hs_sat26DePA, hs_sat26DePz];
        return hs_showzutuple25rrX6.hscall(hs_sat26DePB, hs_s26Detb);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26Detr, hs_zddShow126Dets, hs_zddShow226Dett, hs_zddShow326Detu, hs_zddShow426Detv, hs_zddShow526Detw, hs_zddShow626Detx, hs_zddShow726Dety, hs_zddShow826Detz, hs_zddShow926DetA) {
        var hs_sat26DePC = new $hs.Thunk();
        hs_sat26DePC.evaluateOnce = function () {
            return hs_zdcshowList1425uPWY.hscall(hs_zddShow26Detr, hs_zddShow126Dets, hs_zddShow226Dett, hs_zddShow326Detu, hs_zddShow426Detv, hs_zddShow526Detw, hs_zddShow626Detx, hs_zddShow726Dety, hs_zddShow826Detz, hs_zddShow926DetA);
        };
        var hs_sat26DePD = new $hs.Thunk();
        hs_sat26DePD.evaluateOnce = function () {
            return hs_zdcshow1425uPX0.hscall(hs_zddShow26Detr, hs_zddShow126Dets, hs_zddShow226Dett, hs_zddShow326Detu, hs_zddShow426Detv, hs_zddShow526Detw, hs_zddShow626Detx, hs_zddShow726Dety, hs_zddShow826Detz, hs_zddShow926DetA);
        };
        var hs_sat26DePE = new $hs.Func(3);
        hs_sat26DePE.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec1325uPVR.hscall(hs_zddShow26Detr, hs_zddShow126Dets, hs_zddShow226Dett, hs_zddShow326Detu, hs_zddShow426Detv, hs_zddShow526Detw, hs_zddShow626Detx, hs_zddShow726Dety, hs_zddShow826Detz, hs_zddShow926DetA, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DePE, hs_sat26DePD, hs_sat26DePC];
        return $res;
    };
    hs_zdcshowList1425uPWY.evaluate = function (hs_zddShow26DetP, hs_zddShow126DetQ, hs_zddShow226DetR, hs_zddShow326DetS, hs_zddShow426DetT, hs_zddShow526DetU, hs_zddShow626DetV, hs_zddShow726DetW, hs_zddShow826DetX, hs_zddShow926DetY) {
        var hs_zddShow1026DetZ = new $hs.Thunk();
        hs_zddShow1026DetZ.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26DetP, hs_zddShow126DetQ, hs_zddShow226DetR, hs_zddShow326DetS, hs_zddShow426DetT, hs_zddShow526DetU, hs_zddShow626DetV, hs_zddShow726DetW, hs_zddShow826DetX, hs_zddShow926DetY);
        };
        var hs_sat26Deu5 = new $hs.Thunk();
        hs_sat26Deu5.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1026DetZ, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26Deu5);
    };
    hs_zdcshow1425uPX0.evaluate = function (hs_zddShow26Deuh, hs_zddShow126Deui, hs_zddShow226Deuj, hs_zddShow326Deuk, hs_zddShow426Deul, hs_zddShow526Deum, hs_zddShow626Deun, hs_zddShow726Deuo, hs_zddShow826Deup, hs_zddShow926Deuq) {
        var hs_zddShow1026Deur = new $hs.Thunk();
        hs_zddShow1026Deur.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26Deuh, hs_zddShow126Deui, hs_zddShow226Deuj, hs_zddShow326Deuk, hs_zddShow426Deul, hs_zddShow526Deum, hs_zddShow626Deun, hs_zddShow726Deuo, hs_zddShow826Deup, hs_zddShow926Deuq);
        };
        var hs_sat26DePF = new $hs.Func(1);
        hs_sat26DePF.evaluate = function (hs_x26Deut) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1026Deur, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26Deut, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26DePF.notEvaluated) {
            return hs_sat26DePF.hscall();
        } else {
            return hs_sat26DePF;
        }
    };
    hs_zdcshowsPrec1425uPYg.evaluate = function (hs_zddShow26DeuY, hs_zddShow126Dev1, hs_zddShow226Dev4, hs_zddShow326Dev7, hs_zddShow426Deva, hs_zddShow526Devd, hs_zddShow626Devg, hs_zddShow726Devj, hs_zddShow826Devm, hs_zddShow926Devp, hs_zddShow1026Devs, hs_ds26DevH, hs_ds126DeuL, hs_s26DevG) {
        var hs_wild26DePG = hs_ds126DeuL;
        if (hs_ds126DeuL.notEvaluated) {
            hs_wild26DePG = hs_ds126DeuL.hscall();
        }
        var hs_a6526DeuZ = hs_wild26DePG.data[0];
        var hs_b26Dev2 = hs_wild26DePG.data[1];
        var hs_c26Dev5 = hs_wild26DePG.data[2];
        var hs_d26Dev8 = hs_wild26DePG.data[3];
        var hs_e26Devb = hs_wild26DePG.data[4];
        var hs_f26Deve = hs_wild26DePG.data[5];
        var hs_g26Devh = hs_wild26DePG.data[6];
        var hs_h26Devk = hs_wild26DePG.data[7];
        var hs_i26Devn = hs_wild26DePG.data[8];
        var hs_j26Devq = hs_wild26DePG.data[9];
        var hs_k26Devt = hs_wild26DePG.data[10];
        var hs_sat26DePH = new $hs.Thunk();
        hs_sat26DePH.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1026Devs, $hs.modules.GHCziBase.hs_zzeroInt, hs_k26Devt);
        };
        var hs_sat26DePI = new $hs.Data(2);
        hs_sat26DePI.data = [hs_sat26DePH, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26DePJ = new $hs.Thunk();
        hs_sat26DePJ.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow926Devp, $hs.modules.GHCziBase.hs_zzeroInt, hs_j26Devq);
        };
        var hs_sat26DePK = new $hs.Data(2);
        hs_sat26DePK.data = [hs_sat26DePJ, hs_sat26DePI];
        var hs_sat26DePL = new $hs.Thunk();
        hs_sat26DePL.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow826Devm, $hs.modules.GHCziBase.hs_zzeroInt, hs_i26Devn);
        };
        var hs_sat26DePM = new $hs.Data(2);
        hs_sat26DePM.data = [hs_sat26DePL, hs_sat26DePK];
        var hs_sat26DePN = new $hs.Thunk();
        hs_sat26DePN.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow726Devj, $hs.modules.GHCziBase.hs_zzeroInt, hs_h26Devk);
        };
        var hs_sat26DePO = new $hs.Data(2);
        hs_sat26DePO.data = [hs_sat26DePN, hs_sat26DePM];
        var hs_sat26DePP = new $hs.Thunk();
        hs_sat26DePP.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow626Devg, $hs.modules.GHCziBase.hs_zzeroInt, hs_g26Devh);
        };
        var hs_sat26DePQ = new $hs.Data(2);
        hs_sat26DePQ.data = [hs_sat26DePP, hs_sat26DePO];
        var hs_sat26DePR = new $hs.Thunk();
        hs_sat26DePR.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow526Devd, $hs.modules.GHCziBase.hs_zzeroInt, hs_f26Deve);
        };
        var hs_sat26DePS = new $hs.Data(2);
        hs_sat26DePS.data = [hs_sat26DePR, hs_sat26DePQ];
        var hs_sat26DePT = new $hs.Thunk();
        hs_sat26DePT.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426Deva, $hs.modules.GHCziBase.hs_zzeroInt, hs_e26Devb);
        };
        var hs_sat26DePU = new $hs.Data(2);
        hs_sat26DePU.data = [hs_sat26DePT, hs_sat26DePS];
        var hs_sat26DePV = new $hs.Thunk();
        hs_sat26DePV.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326Dev7, $hs.modules.GHCziBase.hs_zzeroInt, hs_d26Dev8);
        };
        var hs_sat26DePW = new $hs.Data(2);
        hs_sat26DePW.data = [hs_sat26DePV, hs_sat26DePU];
        var hs_sat26DePX = new $hs.Thunk();
        hs_sat26DePX.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226Dev4, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26Dev5);
        };
        var hs_sat26DePY = new $hs.Data(2);
        hs_sat26DePY.data = [hs_sat26DePX, hs_sat26DePW];
        var hs_sat26DePZ = new $hs.Thunk();
        hs_sat26DePZ.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126Dev1, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26Dev2);
        };
        var hs_sat26DeQ0 = new $hs.Data(2);
        hs_sat26DeQ0.data = [hs_sat26DePZ, hs_sat26DePY];
        var hs_sat26DeQ1 = new $hs.Thunk();
        hs_sat26DeQ1.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26DeuY, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6526DeuZ);
        };
        var hs_sat26DeQ2 = new $hs.Data(2);
        hs_sat26DeQ2.data = [hs_sat26DeQ1, hs_sat26DeQ0];
        return hs_showzutuple25rrX6.hscall(hs_sat26DeQ2, hs_s26DevG);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26DevX, hs_zddShow126DevY, hs_zddShow226DevZ, hs_zddShow326Dew0, hs_zddShow426Dew1, hs_zddShow526Dew2, hs_zddShow626Dew3, hs_zddShow726Dew4, hs_zddShow826Dew5, hs_zddShow926Dew6, hs_zddShow1026Dew7) {
        var hs_sat26DeQ3 = new $hs.Thunk();
        hs_sat26DeQ3.evaluateOnce = function () {
            return hs_zdcshowList1525uPZt.hscall(hs_zddShow26DevX, hs_zddShow126DevY, hs_zddShow226DevZ, hs_zddShow326Dew0, hs_zddShow426Dew1, hs_zddShow526Dew2, hs_zddShow626Dew3, hs_zddShow726Dew4, hs_zddShow826Dew5, hs_zddShow926Dew6, hs_zddShow1026Dew7);
        };
        var hs_sat26DeQ4 = new $hs.Thunk();
        hs_sat26DeQ4.evaluateOnce = function () {
            return hs_zdcshow1525uPZv.hscall(hs_zddShow26DevX, hs_zddShow126DevY, hs_zddShow226DevZ, hs_zddShow326Dew0, hs_zddShow426Dew1, hs_zddShow526Dew2, hs_zddShow626Dew3, hs_zddShow726Dew4, hs_zddShow826Dew5, hs_zddShow926Dew6, hs_zddShow1026Dew7);
        };
        var hs_sat26DeQ5 = new $hs.Func(3);
        hs_sat26DeQ5.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec1425uPYg.hscall(hs_zddShow26DevX, hs_zddShow126DevY, hs_zddShow226DevZ, hs_zddShow326Dew0, hs_zddShow426Dew1, hs_zddShow526Dew2, hs_zddShow626Dew3, hs_zddShow726Dew4, hs_zddShow826Dew5, hs_zddShow926Dew6, hs_zddShow1026Dew7, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DeQ5, hs_sat26DeQ4, hs_sat26DeQ3];
        return $res;
    };
    hs_zdcshowList1525uPZt.evaluate = function (hs_zddShow26Dewn, hs_zddShow126Dewo, hs_zddShow226Dewp, hs_zddShow326Dewq, hs_zddShow426Dewr, hs_zddShow526Dews, hs_zddShow626Dewt, hs_zddShow726Dewu, hs_zddShow826Dewv, hs_zddShow926Deww, hs_zddShow1026Dewx) {
        var hs_zddShow1126Dewy = new $hs.Thunk();
        hs_zddShow1126Dewy.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26Dewn, hs_zddShow126Dewo, hs_zddShow226Dewp, hs_zddShow326Dewq, hs_zddShow426Dewr, hs_zddShow526Dews, hs_zddShow626Dewt, hs_zddShow726Dewu, hs_zddShow826Dewv, hs_zddShow926Deww, hs_zddShow1026Dewx);
        };
        var hs_sat26DewE = new $hs.Thunk();
        hs_sat26DewE.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1126Dewy, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DewE);
    };
    hs_zdcshow1525uPZv.evaluate = function (hs_zddShow26DewR, hs_zddShow126DewS, hs_zddShow226DewT, hs_zddShow326DewU, hs_zddShow426DewV, hs_zddShow526DewW, hs_zddShow626DewX, hs_zddShow726DewY, hs_zddShow826DewZ, hs_zddShow926Dex0, hs_zddShow1026Dex1) {
        var hs_zddShow1126Dex2 = new $hs.Thunk();
        hs_zddShow1126Dex2.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26DewR, hs_zddShow126DewS, hs_zddShow226DewT, hs_zddShow326DewU, hs_zddShow426DewV, hs_zddShow526DewW, hs_zddShow626DewX, hs_zddShow726DewY, hs_zddShow826DewZ, hs_zddShow926Dex0, hs_zddShow1026Dex1);
        };
        var hs_sat26DeQ6 = new $hs.Func(1);
        hs_sat26DeQ6.evaluate = function (hs_x26Dex4) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1126Dex2, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26Dex4, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26DeQ6.notEvaluated) {
            return hs_sat26DeQ6.hscall();
        } else {
            return hs_sat26DeQ6;
        }
    };
    hs_zdcshowsPrec1525uQ0R.evaluate = function (hs_zddShow26DexB, hs_zddShow126DexE, hs_zddShow226DexH, hs_zddShow326DexK, hs_zddShow426DexN, hs_zddShow526DexQ, hs_zddShow626DexT, hs_zddShow726DexW, hs_zddShow826DexZ, hs_zddShow926Dey2, hs_zddShow1026Dey5, hs_zddShow1126Dey8, hs_ds26Deyo, hs_ds126Dexn, hs_s26Deyn) {
        var hs_wild26DeQ7 = hs_ds126Dexn;
        if (hs_ds126Dexn.notEvaluated) {
            hs_wild26DeQ7 = hs_ds126Dexn.hscall();
        }
        var hs_a6526DexC = hs_wild26DeQ7.data[0];
        var hs_b26DexF = hs_wild26DeQ7.data[1];
        var hs_c26DexI = hs_wild26DeQ7.data[2];
        var hs_d26DexL = hs_wild26DeQ7.data[3];
        var hs_e26DexO = hs_wild26DeQ7.data[4];
        var hs_f26DexR = hs_wild26DeQ7.data[5];
        var hs_g26DexU = hs_wild26DeQ7.data[6];
        var hs_h26DexX = hs_wild26DeQ7.data[7];
        var hs_i26Dey0 = hs_wild26DeQ7.data[8];
        var hs_j26Dey3 = hs_wild26DeQ7.data[9];
        var hs_k26Dey6 = hs_wild26DeQ7.data[10];
        var hs_l26Dey9 = hs_wild26DeQ7.data[11];
        var hs_sat26DeQ8 = new $hs.Thunk();
        hs_sat26DeQ8.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1126Dey8, $hs.modules.GHCziBase.hs_zzeroInt, hs_l26Dey9);
        };
        var hs_sat26DeQ9 = new $hs.Data(2);
        hs_sat26DeQ9.data = [hs_sat26DeQ8, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26DeQa = new $hs.Thunk();
        hs_sat26DeQa.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1026Dey5, $hs.modules.GHCziBase.hs_zzeroInt, hs_k26Dey6);
        };
        var hs_sat26DeQb = new $hs.Data(2);
        hs_sat26DeQb.data = [hs_sat26DeQa, hs_sat26DeQ9];
        var hs_sat26DeQc = new $hs.Thunk();
        hs_sat26DeQc.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow926Dey2, $hs.modules.GHCziBase.hs_zzeroInt, hs_j26Dey3);
        };
        var hs_sat26DeQd = new $hs.Data(2);
        hs_sat26DeQd.data = [hs_sat26DeQc, hs_sat26DeQb];
        var hs_sat26DeQe = new $hs.Thunk();
        hs_sat26DeQe.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow826DexZ, $hs.modules.GHCziBase.hs_zzeroInt, hs_i26Dey0);
        };
        var hs_sat26DeQf = new $hs.Data(2);
        hs_sat26DeQf.data = [hs_sat26DeQe, hs_sat26DeQd];
        var hs_sat26DeQg = new $hs.Thunk();
        hs_sat26DeQg.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow726DexW, $hs.modules.GHCziBase.hs_zzeroInt, hs_h26DexX);
        };
        var hs_sat26DeQh = new $hs.Data(2);
        hs_sat26DeQh.data = [hs_sat26DeQg, hs_sat26DeQf];
        var hs_sat26DeQi = new $hs.Thunk();
        hs_sat26DeQi.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow626DexT, $hs.modules.GHCziBase.hs_zzeroInt, hs_g26DexU);
        };
        var hs_sat26DeQj = new $hs.Data(2);
        hs_sat26DeQj.data = [hs_sat26DeQi, hs_sat26DeQh];
        var hs_sat26DeQk = new $hs.Thunk();
        hs_sat26DeQk.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow526DexQ, $hs.modules.GHCziBase.hs_zzeroInt, hs_f26DexR);
        };
        var hs_sat26DeQl = new $hs.Data(2);
        hs_sat26DeQl.data = [hs_sat26DeQk, hs_sat26DeQj];
        var hs_sat26DeQm = new $hs.Thunk();
        hs_sat26DeQm.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426DexN, $hs.modules.GHCziBase.hs_zzeroInt, hs_e26DexO);
        };
        var hs_sat26DeQn = new $hs.Data(2);
        hs_sat26DeQn.data = [hs_sat26DeQm, hs_sat26DeQl];
        var hs_sat26DeQo = new $hs.Thunk();
        hs_sat26DeQo.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326DexK, $hs.modules.GHCziBase.hs_zzeroInt, hs_d26DexL);
        };
        var hs_sat26DeQp = new $hs.Data(2);
        hs_sat26DeQp.data = [hs_sat26DeQo, hs_sat26DeQn];
        var hs_sat26DeQq = new $hs.Thunk();
        hs_sat26DeQq.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226DexH, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26DexI);
        };
        var hs_sat26DeQr = new $hs.Data(2);
        hs_sat26DeQr.data = [hs_sat26DeQq, hs_sat26DeQp];
        var hs_sat26DeQs = new $hs.Thunk();
        hs_sat26DeQs.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126DexE, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26DexF);
        };
        var hs_sat26DeQt = new $hs.Data(2);
        hs_sat26DeQt.data = [hs_sat26DeQs, hs_sat26DeQr];
        var hs_sat26DeQu = new $hs.Thunk();
        hs_sat26DeQu.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26DexB, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6526DexC);
        };
        var hs_sat26DeQv = new $hs.Data(2);
        hs_sat26DeQv.data = [hs_sat26DeQu, hs_sat26DeQt];
        return hs_showzutuple25rrX6.hscall(hs_sat26DeQv, hs_s26Deyn);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26DeyF, hs_zddShow126DeyG, hs_zddShow226DeyH, hs_zddShow326DeyI, hs_zddShow426DeyJ, hs_zddShow526DeyK, hs_zddShow626DeyL, hs_zddShow726DeyM, hs_zddShow826DeyN, hs_zddShow926DeyO, hs_zddShow1026DeyP, hs_zddShow1126DeyQ) {
        var hs_sat26DeQw = new $hs.Thunk();
        hs_sat26DeQw.evaluateOnce = function () {
            return hs_zdcshowList1625uQ2a.hscall(hs_zddShow26DeyF, hs_zddShow126DeyG, hs_zddShow226DeyH, hs_zddShow326DeyI, hs_zddShow426DeyJ, hs_zddShow526DeyK, hs_zddShow626DeyL, hs_zddShow726DeyM, hs_zddShow826DeyN, hs_zddShow926DeyO, hs_zddShow1026DeyP, hs_zddShow1126DeyQ);
        };
        var hs_sat26DeQx = new $hs.Thunk();
        hs_sat26DeQx.evaluateOnce = function () {
            return hs_zdcshow1625uQ2c.hscall(hs_zddShow26DeyF, hs_zddShow126DeyG, hs_zddShow226DeyH, hs_zddShow326DeyI, hs_zddShow426DeyJ, hs_zddShow526DeyK, hs_zddShow626DeyL, hs_zddShow726DeyM, hs_zddShow826DeyN, hs_zddShow926DeyO, hs_zddShow1026DeyP, hs_zddShow1126DeyQ);
        };
        var hs_sat26DeQy = new $hs.Func(3);
        hs_sat26DeQy.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec1525uQ0R.hscall(hs_zddShow26DeyF, hs_zddShow126DeyG, hs_zddShow226DeyH, hs_zddShow326DeyI, hs_zddShow426DeyJ, hs_zddShow526DeyK, hs_zddShow626DeyL, hs_zddShow726DeyM, hs_zddShow826DeyN, hs_zddShow926DeyO, hs_zddShow1026DeyP, hs_zddShow1126DeyQ, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DeQy, hs_sat26DeQx, hs_sat26DeQw];
        return $res;
    };
    hs_zdcshowList1625uQ2a.evaluate = function (hs_zddShow26Dez7, hs_zddShow126Dez8, hs_zddShow226Dez9, hs_zddShow326Deza, hs_zddShow426Dezb, hs_zddShow526Dezc, hs_zddShow626Dezd, hs_zddShow726Deze, hs_zddShow826Dezf, hs_zddShow926Dezg, hs_zddShow1026Dezh, hs_zddShow1126Dezi) {
        var hs_zddShow1226Dezj = new $hs.Thunk();
        hs_zddShow1226Dezj.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26Dez7, hs_zddShow126Dez8, hs_zddShow226Dez9, hs_zddShow326Deza, hs_zddShow426Dezb, hs_zddShow526Dezc, hs_zddShow626Dezd, hs_zddShow726Deze, hs_zddShow826Dezf, hs_zddShow926Dezg, hs_zddShow1026Dezh, hs_zddShow1126Dezi);
        };
        var hs_sat26Dezp = new $hs.Thunk();
        hs_sat26Dezp.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1226Dezj, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26Dezp);
    };
    hs_zdcshow1625uQ2c.evaluate = function (hs_zddShow26DezD, hs_zddShow126DezE, hs_zddShow226DezF, hs_zddShow326DezG, hs_zddShow426DezH, hs_zddShow526DezI, hs_zddShow626DezJ, hs_zddShow726DezK, hs_zddShow826DezL, hs_zddShow926DezM, hs_zddShow1026DezN, hs_zddShow1126DezO) {
        var hs_zddShow1226DezP = new $hs.Thunk();
        hs_zddShow1226DezP.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26DezD, hs_zddShow126DezE, hs_zddShow226DezF, hs_zddShow326DezG, hs_zddShow426DezH, hs_zddShow526DezI, hs_zddShow626DezJ, hs_zddShow726DezK, hs_zddShow826DezL, hs_zddShow926DezM, hs_zddShow1026DezN, hs_zddShow1126DezO);
        };
        var hs_sat26DeQz = new $hs.Func(1);
        hs_sat26DeQz.evaluate = function (hs_x26DezR) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1226DezP, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26DezR, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26DeQz.notEvaluated) {
            return hs_sat26DeQz.hscall();
        } else {
            return hs_sat26DeQz;
        }
    };
    hs_zdcshowsPrec1625uQ3E.evaluate = function (hs_zddShow26DeAq, hs_zddShow126DeAt, hs_zddShow226DeAw, hs_zddShow326DeAz, hs_zddShow426DeAC, hs_zddShow526DeAF, hs_zddShow626DeAI, hs_zddShow726DeAL, hs_zddShow826DeAO, hs_zddShow926DeAR, hs_zddShow1026DeAU, hs_zddShow1126DeAX, hs_zddShow1226DeB0, hs_ds26DeBh, hs_ds126DeAb, hs_s26DeBg) {
        var hs_wild26DeQA = hs_ds126DeAb;
        if (hs_ds126DeAb.notEvaluated) {
            hs_wild26DeQA = hs_ds126DeAb.hscall();
        }
        var hs_a6526DeAr = hs_wild26DeQA.data[0];
        var hs_b26DeAu = hs_wild26DeQA.data[1];
        var hs_c26DeAx = hs_wild26DeQA.data[2];
        var hs_d26DeAA = hs_wild26DeQA.data[3];
        var hs_e26DeAD = hs_wild26DeQA.data[4];
        var hs_f26DeAG = hs_wild26DeQA.data[5];
        var hs_g26DeAJ = hs_wild26DeQA.data[6];
        var hs_h26DeAM = hs_wild26DeQA.data[7];
        var hs_i26DeAP = hs_wild26DeQA.data[8];
        var hs_j26DeAS = hs_wild26DeQA.data[9];
        var hs_k26DeAV = hs_wild26DeQA.data[10];
        var hs_l26DeAY = hs_wild26DeQA.data[11];
        var hs_m26DeB1 = hs_wild26DeQA.data[12];
        var hs_sat26DeQB = new $hs.Thunk();
        hs_sat26DeQB.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1226DeB0, $hs.modules.GHCziBase.hs_zzeroInt, hs_m26DeB1);
        };
        var hs_sat26DeQC = new $hs.Data(2);
        hs_sat26DeQC.data = [hs_sat26DeQB, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26DeQD = new $hs.Thunk();
        hs_sat26DeQD.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1126DeAX, $hs.modules.GHCziBase.hs_zzeroInt, hs_l26DeAY);
        };
        var hs_sat26DeQE = new $hs.Data(2);
        hs_sat26DeQE.data = [hs_sat26DeQD, hs_sat26DeQC];
        var hs_sat26DeQF = new $hs.Thunk();
        hs_sat26DeQF.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1026DeAU, $hs.modules.GHCziBase.hs_zzeroInt, hs_k26DeAV);
        };
        var hs_sat26DeQG = new $hs.Data(2);
        hs_sat26DeQG.data = [hs_sat26DeQF, hs_sat26DeQE];
        var hs_sat26DeQH = new $hs.Thunk();
        hs_sat26DeQH.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow926DeAR, $hs.modules.GHCziBase.hs_zzeroInt, hs_j26DeAS);
        };
        var hs_sat26DeQI = new $hs.Data(2);
        hs_sat26DeQI.data = [hs_sat26DeQH, hs_sat26DeQG];
        var hs_sat26DeQJ = new $hs.Thunk();
        hs_sat26DeQJ.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow826DeAO, $hs.modules.GHCziBase.hs_zzeroInt, hs_i26DeAP);
        };
        var hs_sat26DeQK = new $hs.Data(2);
        hs_sat26DeQK.data = [hs_sat26DeQJ, hs_sat26DeQI];
        var hs_sat26DeQL = new $hs.Thunk();
        hs_sat26DeQL.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow726DeAL, $hs.modules.GHCziBase.hs_zzeroInt, hs_h26DeAM);
        };
        var hs_sat26DeQM = new $hs.Data(2);
        hs_sat26DeQM.data = [hs_sat26DeQL, hs_sat26DeQK];
        var hs_sat26DeQN = new $hs.Thunk();
        hs_sat26DeQN.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow626DeAI, $hs.modules.GHCziBase.hs_zzeroInt, hs_g26DeAJ);
        };
        var hs_sat26DeQO = new $hs.Data(2);
        hs_sat26DeQO.data = [hs_sat26DeQN, hs_sat26DeQM];
        var hs_sat26DeQP = new $hs.Thunk();
        hs_sat26DeQP.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow526DeAF, $hs.modules.GHCziBase.hs_zzeroInt, hs_f26DeAG);
        };
        var hs_sat26DeQQ = new $hs.Data(2);
        hs_sat26DeQQ.data = [hs_sat26DeQP, hs_sat26DeQO];
        var hs_sat26DeQR = new $hs.Thunk();
        hs_sat26DeQR.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426DeAC, $hs.modules.GHCziBase.hs_zzeroInt, hs_e26DeAD);
        };
        var hs_sat26DeQS = new $hs.Data(2);
        hs_sat26DeQS.data = [hs_sat26DeQR, hs_sat26DeQQ];
        var hs_sat26DeQT = new $hs.Thunk();
        hs_sat26DeQT.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326DeAz, $hs.modules.GHCziBase.hs_zzeroInt, hs_d26DeAA);
        };
        var hs_sat26DeQU = new $hs.Data(2);
        hs_sat26DeQU.data = [hs_sat26DeQT, hs_sat26DeQS];
        var hs_sat26DeQV = new $hs.Thunk();
        hs_sat26DeQV.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226DeAw, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26DeAx);
        };
        var hs_sat26DeQW = new $hs.Data(2);
        hs_sat26DeQW.data = [hs_sat26DeQV, hs_sat26DeQU];
        var hs_sat26DeQX = new $hs.Thunk();
        hs_sat26DeQX.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126DeAt, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26DeAu);
        };
        var hs_sat26DeQY = new $hs.Data(2);
        hs_sat26DeQY.data = [hs_sat26DeQX, hs_sat26DeQW];
        var hs_sat26DeQZ = new $hs.Thunk();
        hs_sat26DeQZ.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26DeAq, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6526DeAr);
        };
        var hs_sat26DeR0 = new $hs.Data(2);
        hs_sat26DeR0.data = [hs_sat26DeQZ, hs_sat26DeQY];
        return hs_showzutuple25rrX6.hscall(hs_sat26DeR0, hs_s26DeBg);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26DeBz, hs_zddShow126DeBA, hs_zddShow226DeBB, hs_zddShow326DeBC, hs_zddShow426DeBD, hs_zddShow526DeBE, hs_zddShow626DeBF, hs_zddShow726DeBG, hs_zddShow826DeBH, hs_zddShow926DeBI, hs_zddShow1026DeBJ, hs_zddShow1126DeBK, hs_zddShow1226DeBL) {
        var hs_sat26DeR1 = new $hs.Thunk();
        hs_sat26DeR1.evaluateOnce = function () {
            return hs_zdcshowList1725uQ53.hscall(hs_zddShow26DeBz, hs_zddShow126DeBA, hs_zddShow226DeBB, hs_zddShow326DeBC, hs_zddShow426DeBD, hs_zddShow526DeBE, hs_zddShow626DeBF, hs_zddShow726DeBG, hs_zddShow826DeBH, hs_zddShow926DeBI, hs_zddShow1026DeBJ, hs_zddShow1126DeBK, hs_zddShow1226DeBL);
        };
        var hs_sat26DeR2 = new $hs.Thunk();
        hs_sat26DeR2.evaluateOnce = function () {
            return hs_zdcshow1725uQ55.hscall(hs_zddShow26DeBz, hs_zddShow126DeBA, hs_zddShow226DeBB, hs_zddShow326DeBC, hs_zddShow426DeBD, hs_zddShow526DeBE, hs_zddShow626DeBF, hs_zddShow726DeBG, hs_zddShow826DeBH, hs_zddShow926DeBI, hs_zddShow1026DeBJ, hs_zddShow1126DeBK, hs_zddShow1226DeBL);
        };
        var hs_sat26DeR3 = new $hs.Func(3);
        hs_sat26DeR3.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec1625uQ3E.hscall(hs_zddShow26DeBz, hs_zddShow126DeBA, hs_zddShow226DeBB, hs_zddShow326DeBC, hs_zddShow426DeBD, hs_zddShow526DeBE, hs_zddShow626DeBF, hs_zddShow726DeBG, hs_zddShow826DeBH, hs_zddShow926DeBI, hs_zddShow1026DeBJ, hs_zddShow1126DeBK, hs_zddShow1226DeBL, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DeR3, hs_sat26DeR2, hs_sat26DeR1];
        return $res;
    };
    hs_zdcshowList1725uQ53.evaluate = function (hs_zddShow26DeC3, hs_zddShow126DeC4, hs_zddShow226DeC5, hs_zddShow326DeC6, hs_zddShow426DeC7, hs_zddShow526DeC8, hs_zddShow626DeC9, hs_zddShow726DeCa, hs_zddShow826DeCb, hs_zddShow926DeCc, hs_zddShow1026DeCd, hs_zddShow1126DeCe, hs_zddShow1226DeCf) {
        var hs_zddShow1326DeCg = new $hs.Thunk();
        hs_zddShow1326DeCg.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26DeC3, hs_zddShow126DeC4, hs_zddShow226DeC5, hs_zddShow326DeC6, hs_zddShow426DeC7, hs_zddShow526DeC8, hs_zddShow626DeC9, hs_zddShow726DeCa, hs_zddShow826DeCb, hs_zddShow926DeCc, hs_zddShow1026DeCd, hs_zddShow1126DeCe, hs_zddShow1226DeCf);
        };
        var hs_sat26DeCm = new $hs.Thunk();
        hs_sat26DeCm.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1326DeCg, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DeCm);
    };
    hs_zdcshow1725uQ55.evaluate = function (hs_zddShow26DeCB, hs_zddShow126DeCC, hs_zddShow226DeCD, hs_zddShow326DeCE, hs_zddShow426DeCF, hs_zddShow526DeCG, hs_zddShow626DeCH, hs_zddShow726DeCI, hs_zddShow826DeCJ, hs_zddShow926DeCK, hs_zddShow1026DeCL, hs_zddShow1126DeCM, hs_zddShow1226DeCN) {
        var hs_zddShow1326DeCO = new $hs.Thunk();
        hs_zddShow1326DeCO.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26DeCB, hs_zddShow126DeCC, hs_zddShow226DeCD, hs_zddShow326DeCE, hs_zddShow426DeCF, hs_zddShow526DeCG, hs_zddShow626DeCH, hs_zddShow726DeCI, hs_zddShow826DeCJ, hs_zddShow926DeCK, hs_zddShow1026DeCL, hs_zddShow1126DeCM, hs_zddShow1226DeCN);
        };
        var hs_sat26DeR4 = new $hs.Func(1);
        hs_sat26DeR4.evaluate = function (hs_x26DeCQ) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1326DeCO, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26DeCQ, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26DeR4.notEvaluated) {
            return hs_sat26DeR4.hscall();
        } else {
            return hs_sat26DeR4;
        }
    };
    hs_zdcshowsPrec1725uQ6D.evaluate = function (hs_zddShow26DeDr, hs_zddShow126DeDu, hs_zddShow226DeDx, hs_zddShow326DeDA, hs_zddShow426DeDD, hs_zddShow526DeDG, hs_zddShow626DeDJ, hs_zddShow726DeDM, hs_zddShow826DeDP, hs_zddShow926DeDS, hs_zddShow1026DeDV, hs_zddShow1126DeDY, hs_zddShow1226DeE1, hs_zddShow1326DeE4, hs_ds26DeEm, hs_ds126DeDb, hs_s26DeEl) {
        var hs_wild26DeR5 = hs_ds126DeDb;
        if (hs_ds126DeDb.notEvaluated) {
            hs_wild26DeR5 = hs_ds126DeDb.hscall();
        }
        var hs_a6526DeDs = hs_wild26DeR5.data[0];
        var hs_b26DeDv = hs_wild26DeR5.data[1];
        var hs_c26DeDy = hs_wild26DeR5.data[2];
        var hs_d26DeDB = hs_wild26DeR5.data[3];
        var hs_e26DeDE = hs_wild26DeR5.data[4];
        var hs_f26DeDH = hs_wild26DeR5.data[5];
        var hs_g26DeDK = hs_wild26DeR5.data[6];
        var hs_h26DeDN = hs_wild26DeR5.data[7];
        var hs_i26DeDQ = hs_wild26DeR5.data[8];
        var hs_j26DeDT = hs_wild26DeR5.data[9];
        var hs_k26DeDW = hs_wild26DeR5.data[10];
        var hs_l26DeDZ = hs_wild26DeR5.data[11];
        var hs_m26DeE2 = hs_wild26DeR5.data[12];
        var hs_n26DeE5 = hs_wild26DeR5.data[13];
        var hs_sat26DeR6 = new $hs.Thunk();
        hs_sat26DeR6.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1326DeE4, $hs.modules.GHCziBase.hs_zzeroInt, hs_n26DeE5);
        };
        var hs_sat26DeR7 = new $hs.Data(2);
        hs_sat26DeR7.data = [hs_sat26DeR6, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26DeR8 = new $hs.Thunk();
        hs_sat26DeR8.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1226DeE1, $hs.modules.GHCziBase.hs_zzeroInt, hs_m26DeE2);
        };
        var hs_sat26DeR9 = new $hs.Data(2);
        hs_sat26DeR9.data = [hs_sat26DeR8, hs_sat26DeR7];
        var hs_sat26DeRa = new $hs.Thunk();
        hs_sat26DeRa.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1126DeDY, $hs.modules.GHCziBase.hs_zzeroInt, hs_l26DeDZ);
        };
        var hs_sat26DeRb = new $hs.Data(2);
        hs_sat26DeRb.data = [hs_sat26DeRa, hs_sat26DeR9];
        var hs_sat26DeRc = new $hs.Thunk();
        hs_sat26DeRc.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1026DeDV, $hs.modules.GHCziBase.hs_zzeroInt, hs_k26DeDW);
        };
        var hs_sat26DeRd = new $hs.Data(2);
        hs_sat26DeRd.data = [hs_sat26DeRc, hs_sat26DeRb];
        var hs_sat26DeRe = new $hs.Thunk();
        hs_sat26DeRe.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow926DeDS, $hs.modules.GHCziBase.hs_zzeroInt, hs_j26DeDT);
        };
        var hs_sat26DeRf = new $hs.Data(2);
        hs_sat26DeRf.data = [hs_sat26DeRe, hs_sat26DeRd];
        var hs_sat26DeRg = new $hs.Thunk();
        hs_sat26DeRg.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow826DeDP, $hs.modules.GHCziBase.hs_zzeroInt, hs_i26DeDQ);
        };
        var hs_sat26DeRh = new $hs.Data(2);
        hs_sat26DeRh.data = [hs_sat26DeRg, hs_sat26DeRf];
        var hs_sat26DeRi = new $hs.Thunk();
        hs_sat26DeRi.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow726DeDM, $hs.modules.GHCziBase.hs_zzeroInt, hs_h26DeDN);
        };
        var hs_sat26DeRj = new $hs.Data(2);
        hs_sat26DeRj.data = [hs_sat26DeRi, hs_sat26DeRh];
        var hs_sat26DeRk = new $hs.Thunk();
        hs_sat26DeRk.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow626DeDJ, $hs.modules.GHCziBase.hs_zzeroInt, hs_g26DeDK);
        };
        var hs_sat26DeRl = new $hs.Data(2);
        hs_sat26DeRl.data = [hs_sat26DeRk, hs_sat26DeRj];
        var hs_sat26DeRm = new $hs.Thunk();
        hs_sat26DeRm.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow526DeDG, $hs.modules.GHCziBase.hs_zzeroInt, hs_f26DeDH);
        };
        var hs_sat26DeRn = new $hs.Data(2);
        hs_sat26DeRn.data = [hs_sat26DeRm, hs_sat26DeRl];
        var hs_sat26DeRo = new $hs.Thunk();
        hs_sat26DeRo.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426DeDD, $hs.modules.GHCziBase.hs_zzeroInt, hs_e26DeDE);
        };
        var hs_sat26DeRp = new $hs.Data(2);
        hs_sat26DeRp.data = [hs_sat26DeRo, hs_sat26DeRn];
        var hs_sat26DeRq = new $hs.Thunk();
        hs_sat26DeRq.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326DeDA, $hs.modules.GHCziBase.hs_zzeroInt, hs_d26DeDB);
        };
        var hs_sat26DeRr = new $hs.Data(2);
        hs_sat26DeRr.data = [hs_sat26DeRq, hs_sat26DeRp];
        var hs_sat26DeRs = new $hs.Thunk();
        hs_sat26DeRs.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226DeDx, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26DeDy);
        };
        var hs_sat26DeRt = new $hs.Data(2);
        hs_sat26DeRt.data = [hs_sat26DeRs, hs_sat26DeRr];
        var hs_sat26DeRu = new $hs.Thunk();
        hs_sat26DeRu.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126DeDu, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26DeDv);
        };
        var hs_sat26DeRv = new $hs.Data(2);
        hs_sat26DeRv.data = [hs_sat26DeRu, hs_sat26DeRt];
        var hs_sat26DeRw = new $hs.Thunk();
        hs_sat26DeRw.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26DeDr, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6526DeDs);
        };
        var hs_sat26DeRx = new $hs.Data(2);
        hs_sat26DeRx.data = [hs_sat26DeRw, hs_sat26DeRv];
        return hs_showzutuple25rrX6.hscall(hs_sat26DeRx, hs_s26DeEl);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26DeEF, hs_zddShow126DeEG, hs_zddShow226DeEH, hs_zddShow326DeEI, hs_zddShow426DeEJ, hs_zddShow526DeEK, hs_zddShow626DeEL, hs_zddShow726DeEM, hs_zddShow826DeEN, hs_zddShow926DeEO, hs_zddShow1026DeEP, hs_zddShow1126DeEQ, hs_zddShow1226DeER, hs_zddShow1326DeES) {
        var hs_sat26DeRy = new $hs.Thunk();
        hs_sat26DeRy.evaluateOnce = function () {
            return hs_zdcshowList1825uQ88.hscall(hs_zddShow26DeEF, hs_zddShow126DeEG, hs_zddShow226DeEH, hs_zddShow326DeEI, hs_zddShow426DeEJ, hs_zddShow526DeEK, hs_zddShow626DeEL, hs_zddShow726DeEM, hs_zddShow826DeEN, hs_zddShow926DeEO, hs_zddShow1026DeEP, hs_zddShow1126DeEQ, hs_zddShow1226DeER, hs_zddShow1326DeES);
        };
        var hs_sat26DeRz = new $hs.Thunk();
        hs_sat26DeRz.evaluateOnce = function () {
            return hs_zdcshow1825uQ8a.hscall(hs_zddShow26DeEF, hs_zddShow126DeEG, hs_zddShow226DeEH, hs_zddShow326DeEI, hs_zddShow426DeEJ, hs_zddShow526DeEK, hs_zddShow626DeEL, hs_zddShow726DeEM, hs_zddShow826DeEN, hs_zddShow926DeEO, hs_zddShow1026DeEP, hs_zddShow1126DeEQ, hs_zddShow1226DeER, hs_zddShow1326DeES);
        };
        var hs_sat26DeRA = new $hs.Func(3);
        hs_sat26DeRA.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec1725uQ6D.hscall(hs_zddShow26DeEF, hs_zddShow126DeEG, hs_zddShow226DeEH, hs_zddShow326DeEI, hs_zddShow426DeEJ, hs_zddShow526DeEK, hs_zddShow626DeEL, hs_zddShow726DeEM, hs_zddShow826DeEN, hs_zddShow926DeEO, hs_zddShow1026DeEP, hs_zddShow1126DeEQ, hs_zddShow1226DeER, hs_zddShow1326DeES, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DeRA, hs_sat26DeRz, hs_sat26DeRy];
        return $res;
    };
    hs_zdcshowList1825uQ88.evaluate = function (hs_zddShow26DeFb, hs_zddShow126DeFc, hs_zddShow226DeFd, hs_zddShow326DeFe, hs_zddShow426DeFf, hs_zddShow526DeFg, hs_zddShow626DeFh, hs_zddShow726DeFi, hs_zddShow826DeFj, hs_zddShow926DeFk, hs_zddShow1026DeFl, hs_zddShow1126DeFm, hs_zddShow1226DeFn, hs_zddShow1326DeFo) {
        var hs_zddShow1426DeFp = new $hs.Thunk();
        hs_zddShow1426DeFp.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26DeFb, hs_zddShow126DeFc, hs_zddShow226DeFd, hs_zddShow326DeFe, hs_zddShow426DeFf, hs_zddShow526DeFg, hs_zddShow626DeFh, hs_zddShow726DeFi, hs_zddShow826DeFj, hs_zddShow926DeFk, hs_zddShow1026DeFl, hs_zddShow1126DeFm, hs_zddShow1226DeFn, hs_zddShow1326DeFo);
        };
        var hs_sat26DeFv = new $hs.Thunk();
        hs_sat26DeFv.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1426DeFp, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DeFv);
    };
    hs_zdcshow1825uQ8a.evaluate = function (hs_zddShow26DeFL, hs_zddShow126DeFM, hs_zddShow226DeFN, hs_zddShow326DeFO, hs_zddShow426DeFP, hs_zddShow526DeFQ, hs_zddShow626DeFR, hs_zddShow726DeFS, hs_zddShow826DeFT, hs_zddShow926DeFU, hs_zddShow1026DeFV, hs_zddShow1126DeFW, hs_zddShow1226DeFX, hs_zddShow1326DeFY) {
        var hs_zddShow1426DeFZ = new $hs.Thunk();
        hs_zddShow1426DeFZ.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26DeFL, hs_zddShow126DeFM, hs_zddShow226DeFN, hs_zddShow326DeFO, hs_zddShow426DeFP, hs_zddShow526DeFQ, hs_zddShow626DeFR, hs_zddShow726DeFS, hs_zddShow826DeFT, hs_zddShow926DeFU, hs_zddShow1026DeFV, hs_zddShow1126DeFW, hs_zddShow1226DeFX, hs_zddShow1326DeFY);
        };
        var hs_sat26DeRB = new $hs.Func(1);
        hs_sat26DeRB.evaluate = function (hs_x26DeG1) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1426DeFZ, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26DeG1, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26DeRB.notEvaluated) {
            return hs_sat26DeRB.hscall();
        } else {
            return hs_sat26DeRB;
        }
    };
    hs_zdcshowsPrec1825uQ9O.evaluate = function (hs_zddShow26DeGE, hs_zddShow126DeGH, hs_zddShow226DeGK, hs_zddShow326DeGN, hs_zddShow426DeGQ, hs_zddShow526DeGT, hs_zddShow626DeGW, hs_zddShow726DeGZ, hs_zddShow826DeH2, hs_zddShow926DeH5, hs_zddShow1026DeH8, hs_zddShow1126DeHb, hs_zddShow1226DeHe, hs_zddShow1326DeHh, hs_zddShow1426DeHk, hs_ds26DeHD, hs_ds126DeGn, hs_s26DeHC) {
        var hs_wild26DeRC = hs_ds126DeGn;
        if (hs_ds126DeGn.notEvaluated) {
            hs_wild26DeRC = hs_ds126DeGn.hscall();
        }
        var hs_a6526DeGF = hs_wild26DeRC.data[0];
        var hs_b26DeGI = hs_wild26DeRC.data[1];
        var hs_c26DeGL = hs_wild26DeRC.data[2];
        var hs_d26DeGO = hs_wild26DeRC.data[3];
        var hs_e26DeGR = hs_wild26DeRC.data[4];
        var hs_f26DeGU = hs_wild26DeRC.data[5];
        var hs_g26DeGX = hs_wild26DeRC.data[6];
        var hs_h26DeH0 = hs_wild26DeRC.data[7];
        var hs_i26DeH3 = hs_wild26DeRC.data[8];
        var hs_j26DeH6 = hs_wild26DeRC.data[9];
        var hs_k26DeH9 = hs_wild26DeRC.data[10];
        var hs_l26DeHc = hs_wild26DeRC.data[11];
        var hs_m26DeHf = hs_wild26DeRC.data[12];
        var hs_n26DeHi = hs_wild26DeRC.data[13];
        var hs_o26DeHl = hs_wild26DeRC.data[14];
        var hs_sat26DeRD = new $hs.Thunk();
        hs_sat26DeRD.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1426DeHk, $hs.modules.GHCziBase.hs_zzeroInt, hs_o26DeHl);
        };
        var hs_sat26DeRE = new $hs.Data(2);
        hs_sat26DeRE.data = [hs_sat26DeRD, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26DeRF = new $hs.Thunk();
        hs_sat26DeRF.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1326DeHh, $hs.modules.GHCziBase.hs_zzeroInt, hs_n26DeHi);
        };
        var hs_sat26DeRG = new $hs.Data(2);
        hs_sat26DeRG.data = [hs_sat26DeRF, hs_sat26DeRE];
        var hs_sat26DeRH = new $hs.Thunk();
        hs_sat26DeRH.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1226DeHe, $hs.modules.GHCziBase.hs_zzeroInt, hs_m26DeHf);
        };
        var hs_sat26DeRI = new $hs.Data(2);
        hs_sat26DeRI.data = [hs_sat26DeRH, hs_sat26DeRG];
        var hs_sat26DeRJ = new $hs.Thunk();
        hs_sat26DeRJ.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1126DeHb, $hs.modules.GHCziBase.hs_zzeroInt, hs_l26DeHc);
        };
        var hs_sat26DeRK = new $hs.Data(2);
        hs_sat26DeRK.data = [hs_sat26DeRJ, hs_sat26DeRI];
        var hs_sat26DeRL = new $hs.Thunk();
        hs_sat26DeRL.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1026DeH8, $hs.modules.GHCziBase.hs_zzeroInt, hs_k26DeH9);
        };
        var hs_sat26DeRM = new $hs.Data(2);
        hs_sat26DeRM.data = [hs_sat26DeRL, hs_sat26DeRK];
        var hs_sat26DeRN = new $hs.Thunk();
        hs_sat26DeRN.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow926DeH5, $hs.modules.GHCziBase.hs_zzeroInt, hs_j26DeH6);
        };
        var hs_sat26DeRO = new $hs.Data(2);
        hs_sat26DeRO.data = [hs_sat26DeRN, hs_sat26DeRM];
        var hs_sat26DeRP = new $hs.Thunk();
        hs_sat26DeRP.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow826DeH2, $hs.modules.GHCziBase.hs_zzeroInt, hs_i26DeH3);
        };
        var hs_sat26DeRQ = new $hs.Data(2);
        hs_sat26DeRQ.data = [hs_sat26DeRP, hs_sat26DeRO];
        var hs_sat26DeRR = new $hs.Thunk();
        hs_sat26DeRR.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow726DeGZ, $hs.modules.GHCziBase.hs_zzeroInt, hs_h26DeH0);
        };
        var hs_sat26DeRS = new $hs.Data(2);
        hs_sat26DeRS.data = [hs_sat26DeRR, hs_sat26DeRQ];
        var hs_sat26DeRT = new $hs.Thunk();
        hs_sat26DeRT.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow626DeGW, $hs.modules.GHCziBase.hs_zzeroInt, hs_g26DeGX);
        };
        var hs_sat26DeRU = new $hs.Data(2);
        hs_sat26DeRU.data = [hs_sat26DeRT, hs_sat26DeRS];
        var hs_sat26DeRV = new $hs.Thunk();
        hs_sat26DeRV.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow526DeGT, $hs.modules.GHCziBase.hs_zzeroInt, hs_f26DeGU);
        };
        var hs_sat26DeRW = new $hs.Data(2);
        hs_sat26DeRW.data = [hs_sat26DeRV, hs_sat26DeRU];
        var hs_sat26DeRX = new $hs.Thunk();
        hs_sat26DeRX.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426DeGQ, $hs.modules.GHCziBase.hs_zzeroInt, hs_e26DeGR);
        };
        var hs_sat26DeRY = new $hs.Data(2);
        hs_sat26DeRY.data = [hs_sat26DeRX, hs_sat26DeRW];
        var hs_sat26DeRZ = new $hs.Thunk();
        hs_sat26DeRZ.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326DeGN, $hs.modules.GHCziBase.hs_zzeroInt, hs_d26DeGO);
        };
        var hs_sat26DeS0 = new $hs.Data(2);
        hs_sat26DeS0.data = [hs_sat26DeRZ, hs_sat26DeRY];
        var hs_sat26DeS1 = new $hs.Thunk();
        hs_sat26DeS1.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226DeGK, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26DeGL);
        };
        var hs_sat26DeS2 = new $hs.Data(2);
        hs_sat26DeS2.data = [hs_sat26DeS1, hs_sat26DeS0];
        var hs_sat26DeS3 = new $hs.Thunk();
        hs_sat26DeS3.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126DeGH, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26DeGI);
        };
        var hs_sat26DeS4 = new $hs.Data(2);
        hs_sat26DeS4.data = [hs_sat26DeS3, hs_sat26DeS2];
        var hs_sat26DeS5 = new $hs.Thunk();
        hs_sat26DeS5.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26DeGE, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6526DeGF);
        };
        var hs_sat26DeS6 = new $hs.Data(2);
        hs_sat26DeS6.data = [hs_sat26DeS5, hs_sat26DeS4];
        return hs_showzutuple25rrX6.hscall(hs_sat26DeS6, hs_s26DeHC);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26DeHX, hs_zddShow126DeHY, hs_zddShow226DeHZ, hs_zddShow326DeI0, hs_zddShow426DeI1, hs_zddShow526DeI2, hs_zddShow626DeI3, hs_zddShow726DeI4, hs_zddShow826DeI5, hs_zddShow926DeI6, hs_zddShow1026DeI7, hs_zddShow1126DeI8, hs_zddShow1226DeI9, hs_zddShow1326DeIa, hs_zddShow1426DeIb) {
        var hs_sat26DeS7 = new $hs.Thunk();
        hs_sat26DeS7.evaluateOnce = function () {
            return hs_zdcshowList1925uQbp.hscall(hs_zddShow26DeHX, hs_zddShow126DeHY, hs_zddShow226DeHZ, hs_zddShow326DeI0, hs_zddShow426DeI1, hs_zddShow526DeI2, hs_zddShow626DeI3, hs_zddShow726DeI4, hs_zddShow826DeI5, hs_zddShow926DeI6, hs_zddShow1026DeI7, hs_zddShow1126DeI8, hs_zddShow1226DeI9, hs_zddShow1326DeIa, hs_zddShow1426DeIb);
        };
        var hs_sat26DeS8 = new $hs.Thunk();
        hs_sat26DeS8.evaluateOnce = function () {
            return hs_zdcshow1925uQbr.hscall(hs_zddShow26DeHX, hs_zddShow126DeHY, hs_zddShow226DeHZ, hs_zddShow326DeI0, hs_zddShow426DeI1, hs_zddShow526DeI2, hs_zddShow626DeI3, hs_zddShow726DeI4, hs_zddShow826DeI5, hs_zddShow926DeI6, hs_zddShow1026DeI7, hs_zddShow1126DeI8, hs_zddShow1226DeI9, hs_zddShow1326DeIa, hs_zddShow1426DeIb);
        };
        var hs_sat26DeS9 = new $hs.Func(3);
        hs_sat26DeS9.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec1825uQ9O.hscall(hs_zddShow26DeHX, hs_zddShow126DeHY, hs_zddShow226DeHZ, hs_zddShow326DeI0, hs_zddShow426DeI1, hs_zddShow526DeI2, hs_zddShow626DeI3, hs_zddShow726DeI4, hs_zddShow826DeI5, hs_zddShow926DeI6, hs_zddShow1026DeI7, hs_zddShow1126DeI8, hs_zddShow1226DeI9, hs_zddShow1326DeIa, hs_zddShow1426DeIb, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DeS9, hs_sat26DeS8, hs_sat26DeS7];
        return $res;
    };
    hs_zdcshowList1925uQbp.evaluate = function (hs_zddShow26DeIv, hs_zddShow126DeIw, hs_zddShow226DeIx, hs_zddShow326DeIy, hs_zddShow426DeIz, hs_zddShow526DeIA, hs_zddShow626DeIB, hs_zddShow726DeIC, hs_zddShow826DeID, hs_zddShow926DeIE, hs_zddShow1026DeIF, hs_zddShow1126DeIG, hs_zddShow1226DeIH, hs_zddShow1326DeII, hs_zddShow1426DeIJ) {
        var hs_zddShow1526DeIK = new $hs.Thunk();
        hs_zddShow1526DeIK.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26DeIv, hs_zddShow126DeIw, hs_zddShow226DeIx, hs_zddShow326DeIy, hs_zddShow426DeIz, hs_zddShow526DeIA, hs_zddShow626DeIB, hs_zddShow726DeIC, hs_zddShow826DeID, hs_zddShow926DeIE, hs_zddShow1026DeIF, hs_zddShow1126DeIG, hs_zddShow1226DeIH, hs_zddShow1326DeII, hs_zddShow1426DeIJ);
        };
        var hs_sat26DeIQ = new $hs.Thunk();
        hs_sat26DeIQ.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1526DeIK, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DeIQ);
    };
    hs_zdcshow1925uQbr.evaluate = function (hs_zddShow26DeJ7, hs_zddShow126DeJ8, hs_zddShow226DeJ9, hs_zddShow326DeJa, hs_zddShow426DeJb, hs_zddShow526DeJc, hs_zddShow626DeJd, hs_zddShow726DeJe, hs_zddShow826DeJf, hs_zddShow926DeJg, hs_zddShow1026DeJh, hs_zddShow1126DeJi, hs_zddShow1226DeJj, hs_zddShow1326DeJk, hs_zddShow1426DeJl) {
        var hs_zddShow1526DeJm = new $hs.Thunk();
        hs_zddShow1526DeJm.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26DeJ7, hs_zddShow126DeJ8, hs_zddShow226DeJ9, hs_zddShow326DeJa, hs_zddShow426DeJb, hs_zddShow526DeJc, hs_zddShow626DeJd, hs_zddShow726DeJe, hs_zddShow826DeJf, hs_zddShow926DeJg, hs_zddShow1026DeJh, hs_zddShow1126DeJi, hs_zddShow1226DeJj, hs_zddShow1326DeJk, hs_zddShow1426DeJl);
        };
        var hs_sat26DeSa = new $hs.Func(1);
        hs_sat26DeSa.evaluate = function (hs_x26DeJo) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1526DeJm, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26DeJo, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26DeSa.notEvaluated) {
            return hs_sat26DeSa.hscall();
        } else {
            return hs_sat26DeSa;
        }
    };
    this.hs_showLitChar.evaluate = function (hs_c26DeJs, hs_s26DeJL) {
        var hs_sat26DeSd = new $hs.Data(1);
        hs_sat26DeSd.data = ["\x7f"];
        var hs_wild26DeSc = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26DeJs, hs_sat26DeSd);
        switch (hs_wild26DeSc.tag) {
        case 1:
            var hs_wild126DeJz = hs_c26DeJs;
            if (hs_c26DeJs.notEvaluated) {
                hs_wild126DeJz = hs_c26DeJs.hscall();
            }
            var hs_ds26DeJx = hs_wild126DeJz.data[0];
            var hs_ds126DeSb = hs_ds26DeJx;
            if (hs_ds26DeJx.notEvaluated) {
                hs_ds126DeSb = hs_ds26DeJx.hscall();
            }
            switch (hs_ds126DeSb) {
            case "\\":
                var hs_sat26DeSy = new $hs.Thunk();
                hs_sat26DeSy.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("\\\\\x00");
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeSy, hs_s26DeJL);
            case "\x7f":
                var hs_sat26DeSz = new $hs.Thunk();
                hs_sat26DeSz.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("\\DEL\x00");
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeSz, hs_s26DeJL);
            default:
                var hs_sat26DeSg = new $hs.Data(1);
                hs_sat26DeSg.data = [" "];
                var hs_wild226DeSf = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_wild126DeJz, hs_sat26DeSg);
                switch (hs_wild226DeSf.tag) {
                case 1:
                    var hs_wild326DeJH = hs_wild126DeJz;
                    if (hs_wild126DeJz.notEvaluated) {
                        hs_wild326DeJH = hs_wild126DeJz.hscall();
                    }
                    var hs_ds226DeJE = hs_wild326DeJH.data[0];
                    var hs_ds326DeSe = hs_ds226DeJE;
                    if (hs_ds226DeJE.notEvaluated) {
                        hs_ds326DeSe = hs_ds226DeJE.hscall();
                    }
                    switch (hs_ds326DeSe) {
                    case "\x07":
                        var hs_sat26DeSl = new $hs.Thunk();
                        hs_sat26DeSl.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("\\a\x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeSl, hs_s26DeJL);
                    case "\b":
                        var hs_sat26DeSm = new $hs.Thunk();
                        hs_sat26DeSm.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("\\b\x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeSm, hs_s26DeJL);
                    case "\t":
                        var hs_sat26DeSn = new $hs.Thunk();
                        hs_sat26DeSn.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("\\t\x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeSn, hs_s26DeJL);
                    case "\n":
                        var hs_sat26DeSo = new $hs.Thunk();
                        hs_sat26DeSo.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("\\n\x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeSo, hs_s26DeJL);
                    case "\v":
                        var hs_sat26DeSp = new $hs.Thunk();
                        hs_sat26DeSp.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("\\v\x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeSp, hs_s26DeJL);
                    case "\f":
                        var hs_sat26DeSq = new $hs.Thunk();
                        hs_sat26DeSq.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("\\f\x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeSq, hs_s26DeJL);
                    case "\r":
                        var hs_sat26DeSr = new $hs.Thunk();
                        hs_sat26DeSr.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("\\r\x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeSr, hs_s26DeJL);
                    case "\x0e":
                        var hs_ds426DeJU = new $hs.Data(1);
                        hs_ds426DeJU.data = ["H"];
                        var hs_sat26DeSv = new $hs.Func(1);
                        hs_sat26DeSv.evaluate = function (hs_s126DeJY) {
                            var hs_wild426DeK4 = hs_s126DeJY;
                            if (hs_s126DeJY.notEvaluated) {
                                hs_wild426DeK4 = hs_s126DeJY.hscall();
                            }
                            switch (hs_wild426DeK4.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_c126DeK2 = hs_wild426DeK4.data[0];
                                var hs_wild526DeSs = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c126DeK2, hs_ds426DeJU);
                                switch (hs_wild526DeSs.tag) {
                                case 1:
                                    if (hs_wild426DeK4.notEvaluated) {
                                        return hs_wild426DeK4.hscall();
                                    } else {
                                        return hs_wild426DeK4;
                                    }
                                case 2:
                                    var hs_sat26DeSu = new $hs.Thunk();
                                    hs_sat26DeSu.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("\\&\x00");
                                    };
                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeSu, hs_wild426DeK4);
                                }
                            }
                        };
                        var hs_sat26DeSx = new $hs.Thunk();
                        hs_sat26DeSx.evaluateOnce = function () {
                            var hs_sat26DeSw = new $hs.Thunk();
                            hs_sat26DeSw.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("\\SO\x00");
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeSw);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DeSx, hs_sat26DeSv, hs_s26DeJL);
                    default:
                        var hs_sat26DeSi = new $hs.Thunk();
                        hs_sat26DeSi.evaluateOnce = function () {
                            var hs_sat26DeSh = new $hs.Thunk();
                            hs_sat26DeSh.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_ord.hscall(hs_wild326DeJH);
                            };
                            return $hs.modules.GHCziList.hs_znzn.hscall($hs.modules.GHCziShow.hs_asciiTab, hs_sat26DeSh);
                        };
                        var hs_sat26DeSj = new $hs.Data(1);
                        hs_sat26DeSj.data = ["\\"];
                        var hs_sat26DeSk = new $hs.Data(2);
                        hs_sat26DeSk.data = [hs_sat26DeSj, hs_sat26DeSi];
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeSk, hs_s26DeJL);
                    }
                case 2:
                    var $res = new $hs.Data(2);
                    $res.data = [hs_wild126DeJz, hs_s26DeJL];
                    return $res;
                }
            }
        case 2:
            var hs_sat26DeSK = new $hs.Thunk();
            hs_sat26DeSK.evaluateOnce = function () {
                var hs_sat26DeSH = new $hs.Func(1);
                hs_sat26DeSH.evaluate = function (hs_s126DeKd) {
                    var hs_wild126DeKn = hs_s126DeKd;
                    if (hs_s126DeKd.notEvaluated) {
                        hs_wild126DeKn = hs_s126DeKd.hscall();
                    }
                    switch (hs_wild126DeKn.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_c126DeKh = hs_wild126DeKn.data[0];
                        var hs_sat26DeSC = new $hs.Thunk();
                        hs_sat26DeSC.evaluateOnce = function () {
                            var hs_sat26DeSB = new $hs.Data(1);
                            hs_sat26DeSB.data = ["9"];
                            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c126DeKh, hs_sat26DeSB);
                        };
                        var hs_sat26DeSF = new $hs.Thunk();
                        hs_sat26DeSF.evaluateOnce = function () {
                            var hs_sat26DeSD = new $hs.Data(1);
                            hs_sat26DeSD.data = ["0"];
                            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c126DeKh, hs_sat26DeSD);
                        };
                        var hs_wild226DeSE = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DeSF, hs_sat26DeSC);
                        switch (hs_wild226DeSE.tag) {
                        case 1:
                            if (hs_wild126DeKn.notEvaluated) {
                                return hs_wild126DeKn.hscall();
                            } else {
                                return hs_wild126DeKn;
                            }
                        case 2:
                            var hs_sat26DeSG = new $hs.Thunk();
                            hs_sat26DeSG.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("\\&\x00");
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeSG, hs_wild126DeKn);
                        }
                    }
                };
                var hs_sat26DeSJ = new $hs.Thunk();
                hs_sat26DeSJ.evaluateOnce = function () {
                    var hs_sat26DeSI = new $hs.Thunk();
                    hs_sat26DeSI.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26DeJs);
                    };
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, $hs.modules.GHCziBase.hs_zzeroInt, hs_sat26DeSI);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DeSJ, hs_sat26DeSH, hs_s26DeJL);
            };
            var hs_sat26DeSL = new $hs.Data(1);
            hs_sat26DeSL.data = ["\\"];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26DeSL, hs_sat26DeSK];
            return $res;
        }
    };
    hs_zdcshowsPrec1925uQec.evaluate = function (hs_ds26DeKI, hs_ds126DeKv) {
        var hs_wild26DeKC = hs_ds126DeKv;
        if (hs_ds126DeKv.notEvaluated) {
            hs_wild26DeKC = hs_ds126DeKv.hscall();
        }
        var hs_ds226DeKy = hs_wild26DeKC.data[0];
        var hs_ds326DeSM = hs_ds226DeKy;
        if (hs_ds226DeKy.notEvaluated) {
            hs_ds326DeSM = hs_ds226DeKy.hscall();
        }
        switch (hs_ds326DeSM) {
        case "'":
            var hs_sat26DeST = new $hs.Thunk();
            hs_sat26DeST.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("'\\''\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeST);
        default:
            var hs_sat26DeSQ = new $hs.Thunk();
            hs_sat26DeSQ.evaluateOnce = function () {
                var hs_sat26DeSN = new $hs.Data(1);
                hs_sat26DeSN.data = ["'"];
                var hs_sat26DeSO = new $hs.Func(1);
                hs_sat26DeSO.evaluate = function (hs_eta1cW6l3) {
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26DeSN, hs_eta1cW6l3];
                    return $res;
                };
                var hs_sat26DeSP = new $hs.Func(1);
                hs_sat26DeSP.evaluate = function (hs_eta1cW6l3) {
                    return $hs.modules.GHCziShow.hs_showLitChar.hscall(hs_wild26DeKC, hs_eta1cW6l3);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DeSP, hs_sat26DeSO);
            };
            var hs_sat26DeSR = new $hs.Data(1);
            hs_sat26DeSR.data = ["'"];
            var hs_sat26DeSS = new $hs.Func(1);
            hs_sat26DeSS.evaluate = function (hs_eta1cW6l3) {
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26DeSR, hs_eta1cW6l3];
                return $res;
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DeSS, hs_sat26DeSQ);
        }
    };
    hs_zdcshowList2025uQeu.evaluate = function (hs_cs26DeL8) {
        var hs_showl26DeL4 = new $hs.Func(2);
        hs_showl26DeL4.evaluate = function (hs_ds26DeKR, hs_s26DeKU) {
            var hs_wild26DeSU = hs_ds26DeKR;
            if (hs_ds26DeKR.notEvaluated) {
                hs_wild26DeSU = hs_ds26DeKR.hscall();
            }
            switch (hs_wild26DeSU.tag) {
            case 1:
                var hs_sat26DeSV = new $hs.Data(1);
                hs_sat26DeSV.data = ["\""];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26DeSV, hs_s26DeKU];
                return $res;
            case 2:
                var hs_ds126DeKX = hs_wild26DeSU.data[0];
                var hs_xs26DeL3 = hs_wild26DeSU.data[1];
                var hs_wild126DeL2 = hs_ds126DeKX;
                if (hs_ds126DeKX.notEvaluated) {
                    hs_wild126DeL2 = hs_ds126DeKX.hscall();
                }
                var hs_ds226DeL0 = hs_wild126DeL2.data[0];
                var hs_ds326DeSW = hs_ds226DeL0;
                if (hs_ds226DeL0.notEvaluated) {
                    hs_ds326DeSW = hs_ds226DeL0.hscall();
                }
                switch (hs_ds326DeSW) {
                case "\"":
                    var hs_sat26DeSY = new $hs.Thunk();
                    hs_sat26DeSY.evaluateOnce = function () {
                        return hs_showl26DeL4.hscall(hs_xs26DeL3, hs_s26DeKU);
                    };
                    var hs_sat26DeSZ = new $hs.Thunk();
                    hs_sat26DeSZ.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("\\\"\x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeSZ, hs_sat26DeSY);
                default:
                    var hs_sat26DeSX = new $hs.Thunk();
                    hs_sat26DeSX.evaluateOnce = function () {
                        return hs_showl26DeL4.hscall(hs_xs26DeL3, hs_s26DeKU);
                    };
                    return $hs.modules.GHCziShow.hs_showLitChar.hscall(hs_wild126DeL2, hs_sat26DeSX);
                }
            }
        };
        var hs_sat26DeT0 = new $hs.Func(1);
        hs_sat26DeT0.evaluate = function (hs_eta1cW6l3) {
            return hs_showl26DeL4.hscall(hs_cs26DeL8, hs_eta1cW6l3);
        };
        var hs_sat26DeT1 = new $hs.Data(1);
        hs_sat26DeT1.data = ["\""];
        var hs_sat26DeT2 = new $hs.Func(1);
        hs_sat26DeT2.evaluate = function (hs_eta1cW6l3) {
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26DeT1, hs_eta1cW6l3];
            return $res;
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DeT2, hs_sat26DeT0);
    };
    this.hs_zdfShowChar.data = [hs_zdcshowsPrec1925uQec, hs_zdcshow2025uQeV, hs_zdcshowList2025uQeu];
    hs_zdcshow2025uQeV.evaluate = function (hs_x26DeLd) {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowChar, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26DeLd, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_intToDigit.evaluate = function (hs_ds26DeLf) {
        var hs_wild26DeT3 = hs_ds26DeLf;
        if (hs_ds26DeLf.notEvaluated) {
            hs_wild26DeT3 = hs_ds26DeLf.hscall();
        }
        var hs_i26DeLi = hs_wild26DeT3.data[0];
        var hs_sat26DeT4 = new $hs.Thunk();
        hs_sat26DeT4.evaluateOnce = function () {
            return hs_i26DeLi <= 9 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        };
        var hs_sat26DeT6 = new $hs.Thunk();
        hs_sat26DeT6.evaluateOnce = function () {
            return hs_i26DeLi >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        };
        var hs_wild126DeT5 = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DeT6, hs_sat26DeT4);
        switch (hs_wild126DeT5.tag) {
        case 1:
            var hs_sat26DeT7 = new $hs.Thunk();
            hs_sat26DeT7.evaluateOnce = function () {
                return hs_i26DeLi <= 15 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            };
            var hs_sat26DeT9 = new $hs.Thunk();
            hs_sat26DeT9.evaluateOnce = function () {
                return hs_i26DeLi >= 10 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            };
            var hs_wild226DeT8 = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DeT9, hs_sat26DeT7);
            switch (hs_wild226DeT8.tag) {
            case 1:
                var hs_sat26DeTb = new $hs.Thunk();
                hs_sat26DeTb.evaluateOnce = function () {
                    var hs_sat26DeTa = new $hs.Data(1);
                    hs_sat26DeTa.data = [hs_i26DeLi];
                    return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26DeTa);
                };
                var hs_sat26DeTd = new $hs.Thunk();
                hs_sat26DeTd.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Char.intToDigit: not a digit \x00");
                };
                var hs_sat26DeTc = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26DeTd, hs_sat26DeTb);
                return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DeTc);
            case 2:
                var hs_sat26DeTi = new $hs.Thunk();
                hs_sat26DeTi.evaluateOnce = function () {
                    var hs_sat26DeTe = new $hs.Data(1);
                    hs_sat26DeTe.data = [hs_i26DeLi];
                    var hs_sat26DeTh = new $hs.Thunk();
                    hs_sat26DeTh.evaluateOnce = function () {
                        var hs_sat26DeTg = new $hs.Thunk();
                        hs_sat26DeTg.evaluateOnce = function () {
                            var hs_sat26DeTf = new $hs.Data(1);
                            hs_sat26DeTf.data = ["a"];
                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26DeTf);
                        };
                        return $hs.modules.GHCziBase.hs_minusInt.hscall(hs_sat26DeTg, hs_ten25rrXs);
                    };
                    return $hs.modules.GHCziBase.hs_plusInt.hscall(hs_sat26DeTh, hs_sat26DeTe);
                };
                return $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26DeTi);
            }
        case 2:
            var hs_sat26DeTm = new $hs.Thunk();
            hs_sat26DeTm.evaluateOnce = function () {
                var hs_sat26DeTj = new $hs.Data(1);
                hs_sat26DeTj.data = [hs_i26DeLi];
                var hs_sat26DeTl = new $hs.Thunk();
                hs_sat26DeTl.evaluateOnce = function () {
                    var hs_sat26DeTk = new $hs.Data(1);
                    hs_sat26DeTk.data = ["0"];
                    return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26DeTk);
                };
                return $hs.modules.GHCziBase.hs_plusInt.hscall(hs_sat26DeTl, hs_sat26DeTj);
            };
            return $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26DeTm);
        }
    };
    this.hs_DZCShow.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
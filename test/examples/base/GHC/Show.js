
$hs.modules.GHCziShow = new $hs.Module();
$hs.modules.GHCziShow.dependencies = ["GHC.Types", "GHC.CString", "GHC.Base", "GHC.Err", "GHC.Classes", "GHC.List"];
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
    this.hs_zdfShowArity = new $hs.Data(1);
    this.hs_zdfShowAssociativity = new $hs.Data(1);
    this.hs_zdfShowFixity = new $hs.Data(1);
    this.hs_showLitChar = new $hs.Func(2);
    this.hs_showLitString = new $hs.Func(2);
    this.hs_zdfShowChar = new $hs.Data(1);
    this.hs_showMultiLineString = new $hs.Func(1);
    this.hs_intToDigit = new $hs.Func(1);
    this.hs_DZCShow = new $hs.Func(3);
    this.hs_showsPrec.notEvaluated = true;
    this.hs_showsPrec.evaluate = function (hs_tpl26CPlf) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_tpl26CPlf);
    };
    this.hs_show.notEvaluated = true;
    this.hs_show.evaluate = function (hs_tpl26CPlm) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_tpl26CPlm);
    };
    this.hs_showList.notEvaluated = true;
    this.hs_showList.evaluate = function (hs_tpl26CPlt) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_tpl26CPlt);
    };
    this.hs_zddmshowsPrec.notEvaluated = true;
    this.hs_zddmshowsPrec.evaluate = function (hs_zddShow26CPlD, hs_ds26CPlH, hs_x26CPlE, hs_s26CPlG) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26CPlD, hs_ds26CPlH, hs_x26CPlE, hs_s26CPlG);
    };
    this.hs_asciiTab.notEvaluated = true;
    this.hs_asciiTab.evaluate = function () {
        $hs.modules.GHCziShow.loadDependencies();
        return this;
    };
    this.hs_protectEsc.notEvaluated = true;
    this.hs_protectEsc.evaluate = function (hs_p26CPny, hs_f26CPnr) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_p26CPny, hs_f26CPnr);
    };
    this.hs_showSpace.notEvaluated = true;
    this.hs_showSpace.evaluate = function (hs_xs26CPnF) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_xs26CPnF);
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
    this.hs_showParen.evaluate = function (hs_b26CPnI, hs_p26CPnK) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_b26CPnI, hs_p26CPnK);
    };
    this.hs_shows.notEvaluated = true;
    this.hs_shows.evaluate = function (hs_zddShow26CPnR) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26CPnR);
    };
    this.hs_zddmshow.notEvaluated = true;
    this.hs_zddmshow.evaluate = function (hs_zddShow26CPnU, hs_x26CPnV) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26CPnU, hs_x26CPnV);
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
    this.hs_showListzuzu.evaluate = function (hs_ds26CPoy, hs_ds126CPof, hs_s26CPoi) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_ds26CPoy, hs_ds126CPof, hs_s26CPoi);
    };
    this.hs_zddmshowList.notEvaluated = true;
    this.hs_zddmshowList.evaluate = function (hs_zddShow26CPoH, hs_ls26CPoJ, hs_s26CPoK) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26CPoH, hs_ls26CPoJ, hs_s26CPoK);
    };
    this.hs_showSignedInt.notEvaluated = true;
    this.hs_showSignedInt.evaluate = function (hs_ds26CPoO, hs_ds126CPoR, hs_r26CPoZ) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_ds26CPoO, hs_ds126CPoR, hs_r26CPoZ);
    };
    this.hs_zdfShowZLZR.notEvaluated = true;
    this.hs_zdfShowZLZR.evaluate = function () {
        $hs.modules.GHCziShow.loadDependencies();
        return this;
    };
    this.hs_zdfShowZMZN.notEvaluated = true;
    this.hs_zdfShowZMZN.evaluate = function (hs_zddShow26CPpt) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26CPpt);
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
    this.hs_zdfShowMaybe.evaluate = function (hs_zddShow26CPqT) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26CPqT);
    };
    this.hs_zdfShowZLz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUZR.evaluate = function (hs_zddShow26CPrC, hs_zddShow126CPrD) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26CPrC, hs_zddShow126CPrD);
    };
    this.hs_zdfShowZLz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUZR.evaluate = function (hs_zddShow26CPsx, hs_zddShow126CPsy, hs_zddShow226CPsz) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26CPsx, hs_zddShow126CPsy, hs_zddShow226CPsz);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26CPtE, hs_zddShow126CPtF, hs_zddShow226CPtG, hs_zddShow326CPtH) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26CPtE, hs_zddShow126CPtF, hs_zddShow226CPtG, hs_zddShow326CPtH);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26CPuX, hs_zddShow126CPuY, hs_zddShow226CPuZ, hs_zddShow326CPv0, hs_zddShow426CPv1) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26CPuX, hs_zddShow126CPuY, hs_zddShow226CPuZ, hs_zddShow326CPv0, hs_zddShow426CPv1);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26CPws, hs_zddShow126CPwt, hs_zddShow226CPwu, hs_zddShow326CPwv, hs_zddShow426CPww, hs_zddShow526CPwx) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26CPws, hs_zddShow126CPwt, hs_zddShow226CPwu, hs_zddShow326CPwv, hs_zddShow426CPww, hs_zddShow526CPwx);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26CPy9, hs_zddShow126CPya, hs_zddShow226CPyb, hs_zddShow326CPyc, hs_zddShow426CPyd, hs_zddShow526CPye, hs_zddShow626CPyf) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26CPy9, hs_zddShow126CPya, hs_zddShow226CPyb, hs_zddShow326CPyc, hs_zddShow426CPyd, hs_zddShow526CPye, hs_zddShow626CPyf);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26CPA2, hs_zddShow126CPA3, hs_zddShow226CPA4, hs_zddShow326CPA5, hs_zddShow426CPA6, hs_zddShow526CPA7, hs_zddShow626CPA8, hs_zddShow726CPA9) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26CPA2, hs_zddShow126CPA3, hs_zddShow226CPA4, hs_zddShow326CPA5, hs_zddShow426CPA6, hs_zddShow526CPA7, hs_zddShow626CPA8, hs_zddShow726CPA9);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26CPC7, hs_zddShow126CPC8, hs_zddShow226CPC9, hs_zddShow326CPCa, hs_zddShow426CPCb, hs_zddShow526CPCc, hs_zddShow626CPCd, hs_zddShow726CPCe, hs_zddShow826CPCf) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26CPC7, hs_zddShow126CPC8, hs_zddShow226CPC9, hs_zddShow326CPCa, hs_zddShow426CPCb, hs_zddShow526CPCc, hs_zddShow626CPCd, hs_zddShow726CPCe, hs_zddShow826CPCf);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26CPEo, hs_zddShow126CPEp, hs_zddShow226CPEq, hs_zddShow326CPEr, hs_zddShow426CPEs, hs_zddShow526CPEt, hs_zddShow626CPEu, hs_zddShow726CPEv, hs_zddShow826CPEw, hs_zddShow926CPEx) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26CPEo, hs_zddShow126CPEp, hs_zddShow226CPEq, hs_zddShow326CPEr, hs_zddShow426CPEs, hs_zddShow526CPEt, hs_zddShow626CPEu, hs_zddShow726CPEv, hs_zddShow826CPEw, hs_zddShow926CPEx);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26CPGR, hs_zddShow126CPGS, hs_zddShow226CPGT, hs_zddShow326CPGU, hs_zddShow426CPGV, hs_zddShow526CPGW, hs_zddShow626CPGX, hs_zddShow726CPGY, hs_zddShow826CPGZ, hs_zddShow926CPH0, hs_zddShow1026CPH1) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26CPGR, hs_zddShow126CPGS, hs_zddShow226CPGT, hs_zddShow326CPGU, hs_zddShow426CPGV, hs_zddShow526CPGW, hs_zddShow626CPGX, hs_zddShow726CPGY, hs_zddShow826CPGZ, hs_zddShow926CPH0, hs_zddShow1026CPH1);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26CPJw, hs_zddShow126CPJx, hs_zddShow226CPJy, hs_zddShow326CPJz, hs_zddShow426CPJA, hs_zddShow526CPJB, hs_zddShow626CPJC, hs_zddShow726CPJD, hs_zddShow826CPJE, hs_zddShow926CPJF, hs_zddShow1026CPJG, hs_zddShow1126CPJH) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26CPJw, hs_zddShow126CPJx, hs_zddShow226CPJy, hs_zddShow326CPJz, hs_zddShow426CPJA, hs_zddShow526CPJB, hs_zddShow626CPJC, hs_zddShow726CPJD, hs_zddShow826CPJE, hs_zddShow926CPJF, hs_zddShow1026CPJG, hs_zddShow1126CPJH);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26CPMn, hs_zddShow126CPMo, hs_zddShow226CPMp, hs_zddShow326CPMq, hs_zddShow426CPMr, hs_zddShow526CPMs, hs_zddShow626CPMt, hs_zddShow726CPMu, hs_zddShow826CPMv, hs_zddShow926CPMw, hs_zddShow1026CPMx, hs_zddShow1126CPMy, hs_zddShow1226CPMz) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26CPMn, hs_zddShow126CPMo, hs_zddShow226CPMp, hs_zddShow326CPMq, hs_zddShow426CPMr, hs_zddShow526CPMs, hs_zddShow626CPMt, hs_zddShow726CPMu, hs_zddShow826CPMv, hs_zddShow926CPMw, hs_zddShow1026CPMx, hs_zddShow1126CPMy, hs_zddShow1226CPMz);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26CPPq, hs_zddShow126CPPr, hs_zddShow226CPPs, hs_zddShow326CPPt, hs_zddShow426CPPu, hs_zddShow526CPPv, hs_zddShow626CPPw, hs_zddShow726CPPx, hs_zddShow826CPPy, hs_zddShow926CPPz, hs_zddShow1026CPPA, hs_zddShow1126CPPB, hs_zddShow1226CPPC, hs_zddShow1326CPPD) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26CPPq, hs_zddShow126CPPr, hs_zddShow226CPPs, hs_zddShow326CPPt, hs_zddShow426CPPu, hs_zddShow526CPPv, hs_zddShow626CPPw, hs_zddShow726CPPx, hs_zddShow826CPPy, hs_zddShow926CPPz, hs_zddShow1026CPPA, hs_zddShow1126CPPB, hs_zddShow1226CPPC, hs_zddShow1326CPPD);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26CPSF, hs_zddShow126CPSG, hs_zddShow226CPSH, hs_zddShow326CPSI, hs_zddShow426CPSJ, hs_zddShow526CPSK, hs_zddShow626CPSL, hs_zddShow726CPSM, hs_zddShow826CPSN, hs_zddShow926CPSO, hs_zddShow1026CPSP, hs_zddShow1126CPSQ, hs_zddShow1226CPSR, hs_zddShow1326CPSS, hs_zddShow1426CPST) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_zddShow26CPSF, hs_zddShow126CPSG, hs_zddShow226CPSH, hs_zddShow326CPSI, hs_zddShow426CPSJ, hs_zddShow526CPSK, hs_zddShow626CPSL, hs_zddShow726CPSM, hs_zddShow826CPSN, hs_zddShow926CPSO, hs_zddShow1026CPSP, hs_zddShow1126CPSQ, hs_zddShow1226CPSR, hs_zddShow1326CPSS, hs_zddShow1426CPST);
    };
    this.hs_zdfShowArity.notEvaluated = true;
    this.hs_zdfShowArity.evaluate = function () {
        $hs.modules.GHCziShow.loadDependencies();
        return this;
    };
    this.hs_zdfShowAssociativity.notEvaluated = true;
    this.hs_zdfShowAssociativity.evaluate = function () {
        $hs.modules.GHCziShow.loadDependencies();
        return this;
    };
    this.hs_zdfShowFixity.notEvaluated = true;
    this.hs_zdfShowFixity.evaluate = function () {
        $hs.modules.GHCziShow.loadDependencies();
        return this;
    };
    this.hs_showLitChar.notEvaluated = true;
    this.hs_showLitChar.evaluate = function (hs_c26CPVp, hs_s26CPVI) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_c26CPVp, hs_s26CPVI);
    };
    this.hs_showLitString.notEvaluated = true;
    this.hs_showLitString.evaluate = function (hs_ds26CPWH, hs_s26CPWJ) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_ds26CPWH, hs_s26CPWJ);
    };
    this.hs_zdfShowChar.notEvaluated = true;
    this.hs_zdfShowChar.evaluate = function () {
        $hs.modules.GHCziShow.loadDependencies();
        return this;
    };
    this.hs_showMultiLineString.notEvaluated = true;
    this.hs_showMultiLineString.evaluate = function (hs_str26CPXM) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_str26CPXM);
    };
    this.hs_intToDigit.notEvaluated = true;
    this.hs_intToDigit.evaluate = function (hs_ds26CPXO) {
        $hs.modules.GHCziShow.loadDependencies();
        return this.evaluate(hs_ds26CPXO);
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
    this.hs_zdfShowArity.notEvaluated = false;
    this.hs_zdfShowArity.evaluate = function () {
        return this;
    };
    this.hs_zdfShowAssociativity.notEvaluated = false;
    this.hs_zdfShowAssociativity.evaluate = function () {
        return this;
    };
    this.hs_zdfShowFixity.notEvaluated = false;
    this.hs_zdfShowFixity.evaluate = function () {
        return this;
    };
    this.hs_showLitChar.notEvaluated = false;
    this.hs_showLitString.notEvaluated = false;
    this.hs_zdfShowChar.notEvaluated = false;
    this.hs_zdfShowChar.evaluate = function () {
        return this;
    };
    this.hs_showMultiLineString.notEvaluated = false;
    this.hs_intToDigit.notEvaluated = false;
    this.hs_DZCShow.notEvaluated = false;
    var hs_itos25rqt6 = new $hs.Func(2);
    var hs_ten25rqt5 = new $hs.Data(1);
    var hs_a25uqQ6 = new $hs.Thunk();
    var hs_a125uqQ7 = new $hs.Thunk();
    var hs_a225uqQ8 = new $hs.Thunk();
    var hs_a325uqQ9 = new $hs.Thunk();
    var hs_a425uqQa = new $hs.Thunk();
    var hs_a525uqQb = new $hs.Thunk();
    var hs_a625uqQc = new $hs.Thunk();
    var hs_a725uqQd = new $hs.Thunk();
    var hs_a825uqQe = new $hs.Thunk();
    var hs_a925uqQf = new $hs.Thunk();
    var hs_a1025uqQg = new $hs.Thunk();
    var hs_a1125uqQh = new $hs.Thunk();
    var hs_a1225uqQi = new $hs.Thunk();
    var hs_a1325uqQj = new $hs.Thunk();
    var hs_a1425uqQk = new $hs.Thunk();
    var hs_a1525uqQl = new $hs.Thunk();
    var hs_a1625uqQm = new $hs.Thunk();
    var hs_a1725uqQn = new $hs.Thunk();
    var hs_a1825uqQo = new $hs.Thunk();
    var hs_a1925uqQp = new $hs.Thunk();
    var hs_a2025uqQq = new $hs.Thunk();
    var hs_a2125uqQr = new $hs.Thunk();
    var hs_a2225uqQs = new $hs.Thunk();
    var hs_a2325uqQt = new $hs.Thunk();
    var hs_a2425uqQu = new $hs.Thunk();
    var hs_a2525uqQv = new $hs.Thunk();
    var hs_a2625uqQw = new $hs.Thunk();
    var hs_a2725uqQx = new $hs.Thunk();
    var hs_a2825uqQy = new $hs.Thunk();
    var hs_a2925uqQz = new $hs.Thunk();
    var hs_a3025uqQA = new $hs.Thunk();
    var hs_a3125uqQB = new $hs.Thunk();
    var hs_a3225uqQC = new $hs.Thunk();
    var hs_a3325uqQD = new $hs.Data(2);
    var hs_a3425uqQE = new $hs.Data(2);
    var hs_a3525uqQF = new $hs.Data(2);
    var hs_a3625uqQG = new $hs.Data(2);
    var hs_a3725uqQH = new $hs.Data(2);
    var hs_a3825uqQI = new $hs.Data(2);
    var hs_a3925uqQJ = new $hs.Data(2);
    var hs_a4025uqQK = new $hs.Data(2);
    var hs_a4125uqQL = new $hs.Data(2);
    var hs_a4225uqQM = new $hs.Data(2);
    var hs_a4325uqQN = new $hs.Data(2);
    var hs_a4425uqQO = new $hs.Data(2);
    var hs_a4525uqQP = new $hs.Data(2);
    var hs_a4625uqQQ = new $hs.Data(2);
    var hs_a4725uqQR = new $hs.Data(2);
    var hs_a4825uqQS = new $hs.Data(2);
    var hs_a4925uqQT = new $hs.Data(2);
    var hs_a5025uqQU = new $hs.Data(2);
    var hs_a5125uqQV = new $hs.Data(2);
    var hs_a5225uqQW = new $hs.Data(2);
    var hs_a5325uqQX = new $hs.Data(2);
    var hs_a5425uqQY = new $hs.Data(2);
    var hs_a5525uqQZ = new $hs.Data(2);
    var hs_a5625uqR0 = new $hs.Data(2);
    var hs_a5725uqR1 = new $hs.Data(2);
    var hs_a5825uqR2 = new $hs.Data(2);
    var hs_a5925uqR3 = new $hs.Data(2);
    var hs_a6025uqR4 = new $hs.Data(2);
    var hs_a6125uqR5 = new $hs.Data(2);
    var hs_a6225uqR6 = new $hs.Data(2);
    var hs_a6325uqR7 = new $hs.Data(2);
    var hs_a6425uqR8 = new $hs.Data(2);
    var hs_showzutuple25rqsS = new $hs.Func(1);
    var hs_zdcshowsPrec25uqSO = new $hs.Func(2);
    var hs_zdcshowList25uqSV = new $hs.Func(2);
    var hs_zdcshow25uqSW = new $hs.Func(1);
    var hs_zdcshowsPrec125uqT4 = new $hs.Func(2);
    var hs_zdcshowList125uqT9 = new $hs.Func(1);
    var hs_zdcshow125uqTa = new $hs.Func(1);
    var hs_zdcshowsPrec225uqTz = new $hs.Func(2);
    var hs_zdcshowList225uqTH = new $hs.Func(2);
    var hs_zdcshow225uqTI = new $hs.Func(1);
    var hs_zdcshowsPrec325uqTQ = new $hs.Func(2);
    var hs_zdcshowList325uqTZ = new $hs.Func(2);
    var hs_zdcshow325uqU0 = new $hs.Func(1);
    var hs_zdcshowList425uqU8 = new $hs.Func(2);
    var hs_zdcshow425uqU9 = new $hs.Func(1);
    var hs_zdcshowsPrec425uqUh = new $hs.Func(4);
    var hs_zdcshowList525uqUA = new $hs.Func(1);
    var hs_zdcshow525uqUB = new $hs.Func(1);
    var hs_zdcshowsPrec525uqUY = new $hs.Func(5);
    var hs_zdcshowList625uqVi = new $hs.Func(2);
    var hs_zdcshow625uqVj = new $hs.Func(2);
    var hs_zdcshowsPrec625uqVM = new $hs.Func(6);
    var hs_zdcshowList725uqWc = new $hs.Func(3);
    var hs_zdcshow725uqWd = new $hs.Func(3);
    var hs_zdcshowsPrec725uqWM = new $hs.Func(7);
    var hs_zdcshowList825uqXi = new $hs.Func(4);
    var hs_zdcshow825uqXj = new $hs.Func(4);
    var hs_zdcshowsPrec825uqXY = new $hs.Func(8);
    var hs_zdcshowList925uqYA = new $hs.Func(5);
    var hs_zdcshow925uqYB = new $hs.Func(5);
    var hs_zdcshowsPrec925uqZm = new $hs.Func(9);
    var hs_zdcshowList1025ur04 = new $hs.Func(6);
    var hs_zdcshow1025ur05 = new $hs.Func(6);
    var hs_zdcshowsPrec1025ur0W = new $hs.Func(10);
    var hs_zdcshowList1125ur1K = new $hs.Func(7);
    var hs_zdcshow1125ur1L = new $hs.Func(7);
    var hs_zdcshowsPrec1125ur2I = new $hs.Func(11);
    var hs_zdcshowList1225ur3C = new $hs.Func(8);
    var hs_zdcshow1225ur3D = new $hs.Func(8);
    var hs_zdcshowsPrec1225ur4G = new $hs.Func(12);
    var hs_zdcshowList1325ur5G = new $hs.Func(9);
    var hs_zdcshow1325ur5H = new $hs.Func(9);
    var hs_zdcshowsPrec1325ur6Q = new $hs.Func(13);
    var hs_zdcshowList1425ur7W = new $hs.Func(10);
    var hs_zdcshow1425ur7X = new $hs.Func(10);
    var hs_zdcshowsPrec1425ur9c = new $hs.Func(14);
    var hs_zdcshowList1525urao = new $hs.Func(11);
    var hs_zdcshow1525urap = new $hs.Func(11);
    var hs_zdcshowsPrec1525urbK = new $hs.Func(15);
    var hs_zdcshowList1625urd2 = new $hs.Func(12);
    var hs_zdcshow1625urd3 = new $hs.Func(12);
    var hs_zdcshowsPrec1625ureu = new $hs.Func(16);
    var hs_zdcshowList1725urfS = new $hs.Func(13);
    var hs_zdcshow1725urfT = new $hs.Func(13);
    var hs_zdcshowsPrec1725urhq = new $hs.Func(17);
    var hs_zdcshowList1825uriU = new $hs.Func(14);
    var hs_zdcshow1825uriV = new $hs.Func(14);
    var hs_zdcshowsPrec1825urky = new $hs.Func(18);
    var hs_zdcshowList1925urm8 = new $hs.Func(15);
    var hs_zdcshow1925urm9 = new $hs.Func(15);
    var hs_zdcshowsPrec1925urnS = new $hs.Func(2);
    var hs_sat26CQ4W = new $hs.Data(1);
    var hs_a6525uroe = new $hs.Thunk();
    var hs_zdcshowList2025urof = new $hs.Func(2);
    var hs_zdcshow2025urog = new $hs.Func(1);
    var hs_zdcshowsPrec2025urok = new $hs.Func(2);
    var hs_sat26CQ51 = new $hs.Data(1);
    var hs_a6625urot = new $hs.Thunk();
    var hs_zdcshowList2125urou = new $hs.Func(2);
    var hs_zdcshow2125urov = new $hs.Func(1);
    var hs_zdcshowsPrec2125uroz = new $hs.Func(2);
    var hs_sat26CQ5j = new $hs.Data(1);
    var hs_a6725urp1 = new $hs.Thunk();
    var hs_zdcshowList2225urp2 = new $hs.Func(2);
    var hs_zdcshow2225urp3 = new $hs.Func(1);
    var hs_zdcshowsPrec2225urq8 = new $hs.Func(2);
    var hs_zdcshowList2325urqG = new $hs.Func(1);
    var hs_zdcshow2325urqP = new $hs.Func(1);
    this.hs_showsPrec.evaluate = function (hs_tpl26CPlf) {
        var hs_tpl26CPYd = hs_tpl26CPlf;
        if (hs_tpl26CPlf.notEvaluated) {
            hs_tpl26CPYd = hs_tpl26CPlf.hscall();
        }
        var hs_tpl26CPlk = hs_tpl26CPYd.data[0];
        if (hs_tpl26CPlk.notEvaluated) {
            return hs_tpl26CPlk.hscall();
        } else {
            return hs_tpl26CPlk;
        }
    };
    this.hs_show.evaluate = function (hs_tpl26CPlm) {
        var hs_tpl26CPYg = hs_tpl26CPlm;
        if (hs_tpl26CPlm.notEvaluated) {
            hs_tpl26CPYg = hs_tpl26CPlm.hscall();
        }
        var hs_tpl26CPlr = hs_tpl26CPYg.data[1];
        if (hs_tpl26CPlr.notEvaluated) {
            return hs_tpl26CPlr.hscall();
        } else {
            return hs_tpl26CPlr;
        }
    };
    this.hs_showList.evaluate = function (hs_tpl26CPlt) {
        var hs_tpl26CPYj = hs_tpl26CPlt;
        if (hs_tpl26CPlt.notEvaluated) {
            hs_tpl26CPYj = hs_tpl26CPlt.hscall();
        }
        var hs_tpl26CPly = hs_tpl26CPYj.data[2];
        if (hs_tpl26CPly.notEvaluated) {
            return hs_tpl26CPly.hscall();
        } else {
            return hs_tpl26CPly;
        }
    };
    this.hs_zddmshowsPrec.evaluate = function (hs_zddShow26CPlD, hs_ds26CPlH, hs_x26CPlE, hs_s26CPlG) {
        var hs_sat26CPYk = new $hs.Thunk();
        hs_sat26CPYk.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow26CPlD, hs_x26CPlE);
        };
        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CPYk, hs_s26CPlG);
    };
    hs_itos25rqt6.evaluate = function (hs_nzh26CPm3, hs_cs26CPm5) {
        var hs_itoszq26CPlP = new $hs.Func(2);
        hs_itoszq26CPlP.evaluate = function (hs_xzh26CPlN, hs_cszq26CPlX) {
            var hs_wild26CPYx = hs_xzh26CPlN < 10 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild26CPYx.tag) {
            case 1:
                var hs_sat26CPlU = hs_xzh26CPlN % 10;
                var hs_sat26CPlV = ($hs.Int.addCarry(48, hs_sat26CPlU, 0))[0];
                var hs_sat26CPYz = String.fromCharCode(hs_sat26CPlV);
                var hs_sat26CPYA = new $hs.Data(1);
                hs_sat26CPYA.data = [hs_sat26CPYz];
                var hs_sat26CPYB = new $hs.Data(2);
                hs_sat26CPYB.data = [hs_sat26CPYA, hs_cszq26CPlX];
                var hs_sat26CPYC = hs_xzh26CPlN / 10 & ~0;
                return hs_itoszq26CPlP.hscall(hs_sat26CPYC, hs_sat26CPYB);
            case 2:
                var hs_sat26CPm1 = ($hs.Int.addCarry(48, hs_xzh26CPlN, 0))[0];
                var hs_sat26CPYy = String.fromCharCode(hs_sat26CPm1);
                var hs_sat26CPYw = new $hs.Data(1);
                hs_sat26CPYw.data = [hs_sat26CPYy];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26CPYw, hs_cszq26CPlX];
                return $res;
            }
        };
        var hs_wild26CPYl = hs_nzh26CPm3 < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26CPYl.tag) {
        case 1:
            return hs_itoszq26CPlP.hscall(hs_nzh26CPm3, hs_cs26CPm5);
        case 2:
            var hs_wild126CPYn = $hs.modules.GHCziBase.hs_minInt;
            if ($hs.modules.GHCziBase.hs_minInt.notEvaluated) {
                hs_wild126CPYn = $hs.modules.GHCziBase.hs_minInt.hscall();
            }
            var hs_minIntzh26CPm8 = hs_wild126CPYn.data[0];
            var hs_wild226CPYo = hs_nzh26CPm3 == hs_minIntzh26CPm8 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild226CPYo.tag) {
            case 1:
                var hs_sat26CPYu = new $hs.Thunk();
                hs_sat26CPYu.evaluateOnce = function () {
                    var hs_sat26CPYv = -hs_nzh26CPm3;
                    return hs_itoszq26CPlP.hscall(hs_sat26CPYv, hs_cs26CPm5);
                };
                var hs_sat26CPYt = new $hs.Data(1);
                hs_sat26CPYt.data = ["-"];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26CPYt, hs_sat26CPYu];
                return $res;
            case 2:
                var hs_sat26CPYp = new $hs.Thunk();
                hs_sat26CPYp.evaluateOnce = function () {
                    var hs_sat26CPYq = new $hs.Thunk();
                    hs_sat26CPYq.evaluateOnce = function () {
                        var hs_sat26CPmi = hs_nzh26CPm3 % 10;
                        var hs_sat26CPYs = -hs_sat26CPmi;
                        return hs_itoszq26CPlP.hscall(hs_sat26CPYs, hs_cs26CPm5);
                    };
                    var hs_sat26CPmk = hs_nzh26CPm3 / 10 & ~0;
                    var hs_sat26CPYr = -hs_sat26CPmk;
                    return hs_itoszq26CPlP.hscall(hs_sat26CPYr, hs_sat26CPYq);
                };
                var hs_sat26CPYm = new $hs.Data(1);
                hs_sat26CPYm.data = ["-"];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26CPYm, hs_sat26CPYp];
                return $res;
            }
        }
    };
    hs_ten25rqt5.data = [10];
    hs_a25uqQ6.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("NUL\x00");
    };
    hs_a125uqQ7.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("SOH\x00");
    };
    hs_a225uqQ8.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("STX\x00");
    };
    hs_a325uqQ9.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ETX\x00");
    };
    hs_a425uqQa.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("EOT\x00");
    };
    hs_a525uqQb.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ENQ\x00");
    };
    hs_a625uqQc.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ACK\x00");
    };
    hs_a725uqQd.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("BEL\x00");
    };
    hs_a825uqQe.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("BS\x00");
    };
    hs_a925uqQf.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("HT\x00");
    };
    hs_a1025uqQg.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("LF\x00");
    };
    hs_a1125uqQh.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("VT\x00");
    };
    hs_a1225uqQi.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("FF\x00");
    };
    hs_a1325uqQj.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CR\x00");
    };
    hs_a1425uqQk.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("SO\x00");
    };
    hs_a1525uqQl.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("SI\x00");
    };
    hs_a1625uqQm.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("DLE\x00");
    };
    hs_a1725uqQn.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("DC1\x00");
    };
    hs_a1825uqQo.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("DC2\x00");
    };
    hs_a1925uqQp.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("DC3\x00");
    };
    hs_a2025uqQq.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("DC4\x00");
    };
    hs_a2125uqQr.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("NAK\x00");
    };
    hs_a2225uqQs.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("SYN\x00");
    };
    hs_a2325uqQt.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ETB\x00");
    };
    hs_a2425uqQu.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CAN\x00");
    };
    hs_a2525uqQv.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("EM\x00");
    };
    hs_a2625uqQw.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("SUB\x00");
    };
    hs_a2725uqQx.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("ESC\x00");
    };
    hs_a2825uqQy.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("FS\x00");
    };
    hs_a2925uqQz.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GS\x00");
    };
    hs_a3025uqQA.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("RS\x00");
    };
    hs_a3125uqQB.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("US\x00");
    };
    hs_a3225uqQC.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("SP\x00");
    };
    hs_a3325uqQD.data = [hs_a3225uqQC, $hs.modules.GHCziTypes.hs_ZMZN];
    hs_a3425uqQE.data = [hs_a3125uqQB, hs_a3325uqQD];
    hs_a3525uqQF.data = [hs_a3025uqQA, hs_a3425uqQE];
    hs_a3625uqQG.data = [hs_a2925uqQz, hs_a3525uqQF];
    hs_a3725uqQH.data = [hs_a2825uqQy, hs_a3625uqQG];
    hs_a3825uqQI.data = [hs_a2725uqQx, hs_a3725uqQH];
    hs_a3925uqQJ.data = [hs_a2625uqQw, hs_a3825uqQI];
    hs_a4025uqQK.data = [hs_a2525uqQv, hs_a3925uqQJ];
    hs_a4125uqQL.data = [hs_a2425uqQu, hs_a4025uqQK];
    hs_a4225uqQM.data = [hs_a2325uqQt, hs_a4125uqQL];
    hs_a4325uqQN.data = [hs_a2225uqQs, hs_a4225uqQM];
    hs_a4425uqQO.data = [hs_a2125uqQr, hs_a4325uqQN];
    hs_a4525uqQP.data = [hs_a2025uqQq, hs_a4425uqQO];
    hs_a4625uqQQ.data = [hs_a1925uqQp, hs_a4525uqQP];
    hs_a4725uqQR.data = [hs_a1825uqQo, hs_a4625uqQQ];
    hs_a4825uqQS.data = [hs_a1725uqQn, hs_a4725uqQR];
    hs_a4925uqQT.data = [hs_a1625uqQm, hs_a4825uqQS];
    hs_a5025uqQU.data = [hs_a1525uqQl, hs_a4925uqQT];
    hs_a5125uqQV.data = [hs_a1425uqQk, hs_a5025uqQU];
    hs_a5225uqQW.data = [hs_a1325uqQj, hs_a5125uqQV];
    hs_a5325uqQX.data = [hs_a1225uqQi, hs_a5225uqQW];
    hs_a5425uqQY.data = [hs_a1125uqQh, hs_a5325uqQX];
    hs_a5525uqQZ.data = [hs_a1025uqQg, hs_a5425uqQY];
    hs_a5625uqR0.data = [hs_a925uqQf, hs_a5525uqQZ];
    hs_a5725uqR1.data = [hs_a825uqQe, hs_a5625uqR0];
    hs_a5825uqR2.data = [hs_a725uqQd, hs_a5725uqR1];
    hs_a5925uqR3.data = [hs_a625uqQc, hs_a5825uqR2];
    hs_a6025uqR4.data = [hs_a525uqQb, hs_a5925uqR3];
    hs_a6125uqR5.data = [hs_a425uqQa, hs_a6025uqR4];
    hs_a6225uqR6.data = [hs_a325uqQ9, hs_a6125uqR5];
    hs_a6325uqR7.data = [hs_a225uqQ8, hs_a6225uqR6];
    hs_a6425uqR8.data = [hs_a125uqQ7, hs_a6325uqR7];
    this.hs_asciiTab.data = [hs_a25uqQ6, hs_a6425uqR8];
    this.hs_protectEsc.evaluate = function (hs_p26CPny, hs_f26CPnr) {
        var hs_sat26CPYD = new $hs.Func(1);
        hs_sat26CPYD.evaluate = function (hs_s26CPnt) {
            var hs_wild26CPnA = hs_s26CPnt;
            if (hs_s26CPnt.notEvaluated) {
                hs_wild26CPnA = hs_s26CPnt.hscall();
            }
            switch (hs_wild26CPnA.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_c26CPnx = hs_wild26CPnA.data[0];
                var hs_wild126CPYG = hs_p26CPny.hscall(hs_c26CPnx);
                switch (hs_wild126CPYG.tag) {
                case 1:
                    if (hs_wild26CPnA.notEvaluated) {
                        return hs_wild26CPnA.hscall();
                    } else {
                        return hs_wild26CPnA;
                    }
                case 2:
                    var hs_sat26CPYE = new $hs.Thunk();
                    hs_sat26CPYE.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("\\&\x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CPYE, hs_wild26CPnA);
                }
            }
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_f26CPnr, hs_sat26CPYD);
    };
    this.hs_showSpace.evaluate = function (hs_xs26CPnF) {
        var hs_sat26CPYH = new $hs.Data(1);
        hs_sat26CPYH.data = [" "];
        var $res = new $hs.Data(2);
        $res.data = [hs_sat26CPYH, hs_xs26CPnF];
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
    this.hs_showParen.evaluate = function (hs_b26CPnI, hs_p26CPnK) {
        var hs_wild26CPYJ = hs_b26CPnI;
        if (hs_b26CPnI.notEvaluated) {
            hs_wild26CPYJ = hs_b26CPnI.hscall();
        }
        switch (hs_wild26CPYJ.tag) {
        case 1:
            if (hs_p26CPnK.notEvaluated) {
                return hs_p26CPnK.hscall();
            } else {
                return hs_p26CPnK;
            }
        case 2:
            var hs_sat26CPYK = new $hs.Thunk();
            hs_sat26CPYK.evaluateOnce = function () {
                var hs_sat26CPYN = new $hs.Data(1);
                hs_sat26CPYN.data = [")"];
                var hs_sat26CPYM = new $hs.Func(1);
                hs_sat26CPYM.evaluate = function (hs_eta1cW6l3) {
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26CPYN, hs_eta1cW6l3];
                    return $res;
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_p26CPnK, hs_sat26CPYM);
            };
            var hs_sat26CPYL = new $hs.Data(1);
            hs_sat26CPYL.data = ["("];
            var hs_sat26CPYI = new $hs.Func(1);
            hs_sat26CPYI.evaluate = function (hs_eta1cW6l3) {
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26CPYL, hs_eta1cW6l3];
                return $res;
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CPYI, hs_sat26CPYK);
        }
    };
    this.hs_shows.evaluate = function (hs_zddShow26CPnR) {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26CPnR, $hs.modules.GHCziBase.hs_zzeroInt);
    };
    this.hs_zddmshow.evaluate = function (hs_zddShow26CPnU, hs_x26CPnV) {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26CPnU, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPnV, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    hs_showzutuple25rqsS.evaluate = function (hs_ss26CPo7) {
        var hs_sat26CPYP = new $hs.Thunk();
        hs_sat26CPYP.evaluateOnce = function () {
            var hs_sat26CPYS = new $hs.Data(1);
            hs_sat26CPYS.data = [")"];
            var hs_sat26CPYT = new $hs.Func(1);
            hs_sat26CPYT.evaluate = function (hs_eta1cW6l3) {
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26CPYS, hs_eta1cW6l3];
                return $res;
            };
            var hs_sat26CPYR = new $hs.Thunk();
            hs_sat26CPYR.evaluateOnce = function () {
                var hs_sat26CPYU = new $hs.Func(2);
                hs_sat26CPYU.evaluate = function (hs_s26CPo1, hs_r26CPo4) {
                    var hs_sat26CPYV = new $hs.Thunk();
                    hs_sat26CPYV.evaluateOnce = function () {
                        var hs_sat26CPYX = new $hs.Data(1);
                        hs_sat26CPYX.data = [","];
                        var hs_sat26CPYW = new $hs.Func(1);
                        hs_sat26CPYW.evaluate = function (hs_eta1cW6l3) {
                            var $res = new $hs.Data(2);
                            $res.data = [hs_sat26CPYX, hs_eta1cW6l3];
                            return $res;
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CPYW, hs_r26CPo4);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_s26CPo1, hs_sat26CPYV);
                };
                return $hs.modules.GHCziList.hs_foldr1.hscall(hs_sat26CPYU, hs_ss26CPo7);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CPYR, hs_sat26CPYT);
        };
        var hs_sat26CPYQ = new $hs.Data(1);
        hs_sat26CPYQ.data = ["("];
        var hs_sat26CPYO = new $hs.Func(1);
        hs_sat26CPYO.evaluate = function (hs_eta1cW6l3) {
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26CPYQ, hs_eta1cW6l3];
            return $res;
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CPYO, hs_sat26CPYP);
    };
    this.hs_appPrec1.data = [11];
    this.hs_appPrec.data = [10];
    this.hs_showListzuzu.evaluate = function (hs_ds26CPoy, hs_ds126CPof, hs_s26CPoi) {
        var hs_wild26CPYZ = hs_ds126CPof;
        if (hs_ds126CPof.notEvaluated) {
            hs_wild26CPYZ = hs_ds126CPof.hscall();
        }
        switch (hs_wild26CPYZ.tag) {
        case 1:
            var hs_sat26CPZ7 = new $hs.Thunk();
            hs_sat26CPZ7.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("[]\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CPZ7, hs_s26CPoi);
        case 2:
            var hs_x26CPom = hs_wild26CPYZ.data[0];
            var hs_xs26CPoB = hs_wild26CPYZ.data[1];
            var hs_sat26CPZ0 = new $hs.Thunk();
            hs_sat26CPZ0.evaluateOnce = function () {
                var hs_sat26CPZ1 = new $hs.Thunk();
                hs_sat26CPZ1.evaluateOnce = function () {
                    var hs_showl26CPox = new $hs.Func(1);
                    hs_showl26CPox.evaluate = function (hs_ds226CPop) {
                        var hs_wild126CPZ3 = hs_ds226CPop;
                        if (hs_ds226CPop.notEvaluated) {
                            hs_wild126CPZ3 = hs_ds226CPop.hscall();
                        }
                        switch (hs_wild126CPZ3.tag) {
                        case 1:
                            var hs_sat26CPZ6 = new $hs.Data(1);
                            hs_sat26CPZ6.data = ["]"];
                            var $res = new $hs.Data(2);
                            $res.data = [hs_sat26CPZ6, hs_s26CPoi];
                            return $res;
                        case 2:
                            var hs_y26CPov = hs_wild126CPZ3.data[0];
                            var hs_ys26CPow = hs_wild126CPZ3.data[1];
                            var hs_sat26CPZ4 = new $hs.Thunk();
                            hs_sat26CPZ4.evaluateOnce = function () {
                                var hs_sat26CPZ5 = new $hs.Thunk();
                                hs_sat26CPZ5.evaluateOnce = function () {
                                    return hs_showl26CPox.hscall(hs_ys26CPow);
                                };
                                return hs_ds26CPoy.hscall(hs_y26CPov, hs_sat26CPZ5);
                            };
                            var hs_sat26CPZ2 = new $hs.Data(1);
                            hs_sat26CPZ2.data = [","];
                            var $res = new $hs.Data(2);
                            $res.data = [hs_sat26CPZ2, hs_sat26CPZ4];
                            return $res;
                        }
                    };
                    return hs_showl26CPox.hscall(hs_xs26CPoB);
                };
                return hs_ds26CPoy.hscall(hs_x26CPom, hs_sat26CPZ1);
            };
            var hs_sat26CPYY = new $hs.Data(1);
            hs_sat26CPYY.data = ["["];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26CPYY, hs_sat26CPZ0];
            return $res;
        }
    };
    this.hs_zddmshowList.evaluate = function (hs_zddShow26CPoH, hs_ls26CPoJ, hs_s26CPoK) {
        var hs_sat26CPZ8 = new $hs.Thunk();
        hs_sat26CPZ8.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26CPoH, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26CPZ8, hs_ls26CPoJ, hs_s26CPoK);
    };
    this.hs_showSignedInt.evaluate = function (hs_ds26CPoO, hs_ds126CPoR, hs_r26CPoZ) {
        var hs_wild26CPZb = hs_ds26CPoO;
        if (hs_ds26CPoO.notEvaluated) {
            hs_wild26CPZb = hs_ds26CPoO.hscall();
        }
        var hs_p26CPoW = hs_wild26CPZb.data[0];
        var hs_wild126CPZa = hs_ds126CPoR;
        if (hs_ds126CPoR.notEvaluated) {
            hs_wild126CPZa = hs_ds126CPoR.hscall();
        }
        var hs_n26CPoU = hs_wild126CPZa.data[0];
        var hs_sat26CPZc = new $hs.Thunk();
        hs_sat26CPZc.evaluateOnce = function () {
            return hs_p26CPoW > 6 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        };
        var hs_sat26CPZd = new $hs.Thunk();
        hs_sat26CPZd.evaluateOnce = function () {
            return hs_n26CPoU < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        };
        var hs_wild226CPZe = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26CPZd, hs_sat26CPZc);
        switch (hs_wild226CPZe.tag) {
        case 1:
            return hs_itos25rqt6.hscall(hs_n26CPoU, hs_r26CPoZ);
        case 2:
            var hs_sat26CPZf = new $hs.Thunk();
            hs_sat26CPZf.evaluateOnce = function () {
                var hs_sat26CPZh = new $hs.Data(1);
                hs_sat26CPZh.data = [")"];
                var hs_sat26CPZg = new $hs.Data(2);
                hs_sat26CPZg.data = [hs_sat26CPZh, hs_r26CPoZ];
                return hs_itos25rqt6.hscall(hs_n26CPoU, hs_sat26CPZg);
            };
            var hs_sat26CPZ9 = new $hs.Data(1);
            hs_sat26CPZ9.data = ["("];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26CPZ9, hs_sat26CPZf];
            return $res;
        }
    };
    hs_zdcshowsPrec25uqSO.evaluate = function (hs_ds26CPpa, hs_ds126CPp7) {
        var hs_wild26CPZj = hs_ds126CPp7;
        if (hs_ds126CPp7.notEvaluated) {
            hs_wild26CPZj = hs_ds126CPp7.hscall();
        }
        var hs_sat26CPZi = new $hs.Thunk();
        hs_sat26CPZi.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("()\x00");
        };
        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CPZi);
    };
    this.hs_zdfShowZLZR.data = [hs_zdcshowsPrec25uqSO, hs_zdcshow25uqSW, hs_zdcshowList25uqSV];
    hs_zdcshowList25uqSV.evaluate = function (hs_ls26CPpg, hs_s26CPph) {
        var hs_sat26CPZk = new $hs.Thunk();
        hs_sat26CPZk.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowZLZR, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26CPZk, hs_ls26CPpg, hs_s26CPph);
    };
    hs_zdcshow25uqSW.evaluate = function (hs_x26CPpj) {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowZLZR, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPpj, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    hs_zdcshowsPrec125uqT4.evaluate = function (hs_zddShow26CPpn, hs_ds26CPpo) {
        return $hs.modules.GHCziShow.hs_showList.hscall(hs_zddShow26CPpn);
    };
    this.hs_zdfShowZMZN.evaluate = function (hs_zddShow26CPpt) {
        var hs_sat26CPZm = new $hs.Thunk();
        hs_sat26CPZm.evaluateOnce = function () {
            return hs_zdcshowList125uqT9.hscall(hs_zddShow26CPpt);
        };
        var hs_sat26CPZn = new $hs.Thunk();
        hs_sat26CPZn.evaluateOnce = function () {
            return hs_zdcshow125uqTa.hscall(hs_zddShow26CPpt);
        };
        var hs_sat26CPZl = new $hs.Func(1);
        hs_sat26CPZl.evaluate = function (hs_ds26CPpu) {
            return $hs.modules.GHCziShow.hs_showList.hscall(hs_zddShow26CPpt);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CPZl, hs_sat26CPZn, hs_sat26CPZm];
        return $res;
    };
    hs_zdcshowList125uqT9.evaluate = function (hs_zddShow26CPpA) {
        var hs_zddShow126CPpB = new $hs.Thunk();
        hs_zddShow126CPpB.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZMZN.hscall(hs_zddShow26CPpA);
        };
        var hs_sat26CPpH = new $hs.Thunk();
        hs_sat26CPpH.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126CPpB, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26CPpH);
    };
    hs_zdcshow125uqTa.evaluate = function (hs_zddShow26CPpK) {
        var hs_zddShow126CPpL = new $hs.Thunk();
        hs_zddShow126CPpL.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZMZN.hscall(hs_zddShow26CPpK);
        };
        var hs_sat26CPZo = new $hs.Func(1);
        hs_sat26CPZo.evaluate = function (hs_x26CPpN) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126CPpL, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPpN, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26CPZo.notEvaluated) {
            return hs_sat26CPZo.hscall();
        } else {
            return hs_sat26CPZo;
        }
    };
    hs_zdcshowsPrec225uqTz.evaluate = function (hs_ds26CPpW, hs_ds126CPpS) {
        var hs_wild26CPZq = hs_ds126CPpS;
        if (hs_ds126CPpS.notEvaluated) {
            hs_wild26CPZq = hs_ds126CPpS.hscall();
        }
        switch (hs_wild26CPZq.tag) {
        case 1:
            var hs_sat26CPZr = new $hs.Thunk();
            hs_sat26CPZr.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("False\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CPZr);
        case 2:
            var hs_sat26CPZp = new $hs.Thunk();
            hs_sat26CPZp.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("True\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CPZp);
        }
    };
    this.hs_zdfShowBool.data = [hs_zdcshowsPrec225uqTz, hs_zdcshow225uqTI, hs_zdcshowList225uqTH];
    hs_zdcshowList225uqTH.evaluate = function (hs_ls26CPq2, hs_s26CPq3) {
        var hs_sat26CPZs = new $hs.Thunk();
        hs_sat26CPZs.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowBool, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26CPZs, hs_ls26CPq2, hs_s26CPq3);
    };
    hs_zdcshow225uqTI.evaluate = function (hs_x26CPq5) {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowBool, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPq5, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    hs_zdcshowsPrec325uqTQ.evaluate = function (hs_ds26CPqe, hs_ds126CPq9) {
        var hs_wild26CPZu = hs_ds126CPq9;
        if (hs_ds126CPq9.notEvaluated) {
            hs_wild26CPZu = hs_ds126CPq9.hscall();
        }
        switch (hs_wild26CPZu.tag) {
        case 1:
            var hs_sat26CPZw = new $hs.Thunk();
            hs_sat26CPZw.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("LT\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CPZw);
        case 2:
            var hs_sat26CPZt = new $hs.Thunk();
            hs_sat26CPZt.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("EQ\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CPZt);
        case 3:
            var hs_sat26CPZv = new $hs.Thunk();
            hs_sat26CPZv.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("GT\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CPZv);
        }
    };
    this.hs_zdfShowOrdering.data = [hs_zdcshowsPrec325uqTQ, hs_zdcshow325uqU0, hs_zdcshowList325uqTZ];
    hs_zdcshowList325uqTZ.evaluate = function (hs_ls26CPqk, hs_s26CPql) {
        var hs_sat26CPZx = new $hs.Thunk();
        hs_sat26CPZx.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowOrdering, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26CPZx, hs_ls26CPqk, hs_s26CPql);
    };
    hs_zdcshow325uqU0.evaluate = function (hs_x26CPqn) {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowOrdering, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPqn, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfShowInt.data = [$hs.modules.GHCziShow.hs_showSignedInt, hs_zdcshow425uqU9, hs_zdcshowList425uqU8];
    hs_zdcshowList425uqU8.evaluate = function (hs_ls26CPqt, hs_s26CPqu) {
        var hs_sat26CPZy = new $hs.Thunk();
        hs_sat26CPZy.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26CPZy, hs_ls26CPqt, hs_s26CPqu);
    };
    hs_zdcshow425uqU9.evaluate = function (hs_x26CPqw) {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPqw, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    hs_zdcshowsPrec425uqUh.evaluate = function (hs_zddShow26CPqM, hs_zup26CPqH, hs_ds26CPqC, hs_s26CPqF) {
        var hs_wild26CPZA = hs_ds26CPqC;
        if (hs_ds26CPqC.notEvaluated) {
            hs_wild26CPZA = hs_ds26CPqC.hscall();
        }
        switch (hs_wild26CPZA.tag) {
        case 1:
            var hs_sat26CPZG = new $hs.Thunk();
            hs_sat26CPZG.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Nothing\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CPZG, hs_s26CPqF);
        case 2:
            var hs_x26CPqN = hs_wild26CPZA.data[0];
            var hs_sat26CPZB = new $hs.Thunk();
            hs_sat26CPZB.evaluateOnce = function () {
                var hs_sat26CPZE = new $hs.Thunk();
                hs_sat26CPZE.evaluateOnce = function () {
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26CPqM, $hs.modules.GHCziShow.hs_appPrec1, hs_x26CPqN);
                };
                var hs_sat26CPZD = new $hs.Thunk();
                hs_sat26CPZD.evaluateOnce = function () {
                    var hs_sat26CPZF = new $hs.Thunk();
                    hs_sat26CPZF.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Just \x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CPZF);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CPZD, hs_sat26CPZE);
            };
            var hs_sat26CPZC = new $hs.Thunk();
            hs_sat26CPZC.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_zup26CPqH, $hs.modules.GHCziShow.hs_appPrec);
            };
            var hs_sat26CPZz = new $hs.Func(1);
            hs_sat26CPZz.evaluate = function (hs_eta1cW6l3) {
                return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26CPZC, hs_eta1cW6l3);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26CPZz, hs_sat26CPZB, hs_s26CPqF);
        }
    };
    this.hs_zdfShowMaybe.evaluate = function (hs_zddShow26CPqT) {
        var hs_sat26CPZI = new $hs.Thunk();
        hs_sat26CPZI.evaluateOnce = function () {
            return hs_zdcshowList525uqUA.hscall(hs_zddShow26CPqT);
        };
        var hs_sat26CPZJ = new $hs.Thunk();
        hs_sat26CPZJ.evaluateOnce = function () {
            return hs_zdcshow525uqUB.hscall(hs_zddShow26CPqT);
        };
        var hs_sat26CPZH = new $hs.Func(3);
        hs_sat26CPZH.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec425uqUh.hscall(hs_zddShow26CPqT, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CPZH, hs_sat26CPZJ, hs_sat26CPZI];
        return $res;
    };
    hs_zdcshowList525uqUA.evaluate = function (hs_zddShow26CPqZ) {
        var hs_zddShow126CPr0 = new $hs.Thunk();
        hs_zddShow126CPr0.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowMaybe.hscall(hs_zddShow26CPqZ);
        };
        var hs_sat26CPr6 = new $hs.Thunk();
        hs_sat26CPr6.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126CPr0, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26CPr6);
    };
    hs_zdcshow525uqUB.evaluate = function (hs_zddShow26CPr9) {
        var hs_zddShow126CPra = new $hs.Thunk();
        hs_zddShow126CPra.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowMaybe.hscall(hs_zddShow26CPr9);
        };
        var hs_sat26CPZK = new $hs.Func(1);
        hs_sat26CPZK.evaluate = function (hs_x26CPrc) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126CPra, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPrc, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26CPZK.notEvaluated) {
            return hs_sat26CPZK.hscall();
        } else {
            return hs_sat26CPZK;
        }
    };
    hs_zdcshowsPrec525uqUY.evaluate = function (hs_zddShow26CPro, hs_zddShow126CPrr, hs_ds26CPrx, hs_ds126CPrk, hs_s26CPrw) {
        var hs_wild26CPZM = hs_ds126CPrk;
        if (hs_ds126CPrk.notEvaluated) {
            hs_wild26CPZM = hs_ds126CPrk.hscall();
        }
        var hs_a6826CPrp = hs_wild26CPZM.data[0];
        var hs_b26CPrs = hs_wild26CPZM.data[1];
        var hs_sat26CPZN = new $hs.Thunk();
        hs_sat26CPZN.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126CPrr, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26CPrs);
        };
        var hs_sat26CPZO = new $hs.Data(2);
        hs_sat26CPZO.data = [hs_sat26CPZN, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26CPZP = new $hs.Thunk();
        hs_sat26CPZP.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26CPro, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6826CPrp);
        };
        var hs_sat26CPZL = new $hs.Data(2);
        hs_sat26CPZL.data = [hs_sat26CPZP, hs_sat26CPZO];
        return hs_showzutuple25rqsS.hscall(hs_sat26CPZL, hs_s26CPrw);
    };
    this.hs_zdfShowZLz2cUZR.evaluate = function (hs_zddShow26CPrC, hs_zddShow126CPrD) {
        var hs_sat26CPZR = new $hs.Thunk();
        hs_sat26CPZR.evaluateOnce = function () {
            return hs_zdcshowList625uqVi.hscall(hs_zddShow26CPrC, hs_zddShow126CPrD);
        };
        var hs_sat26CPZS = new $hs.Thunk();
        hs_sat26CPZS.evaluateOnce = function () {
            return hs_zdcshow625uqVj.hscall(hs_zddShow26CPrC, hs_zddShow126CPrD);
        };
        var hs_sat26CPZQ = new $hs.Func(3);
        hs_sat26CPZQ.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec525uqUY.hscall(hs_zddShow26CPrC, hs_zddShow126CPrD, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CPZQ, hs_sat26CPZS, hs_sat26CPZR];
        return $res;
    };
    hs_zdcshowList625uqVi.evaluate = function (hs_zddShow26CPrK, hs_zddShow126CPrL) {
        var hs_zddShow226CPrM = new $hs.Thunk();
        hs_zddShow226CPrM.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUZR.hscall(hs_zddShow26CPrK, hs_zddShow126CPrL);
        };
        var hs_sat26CPrS = new $hs.Thunk();
        hs_sat26CPrS.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226CPrM, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26CPrS);
    };
    hs_zdcshow625uqVj.evaluate = function (hs_zddShow26CPrW, hs_zddShow126CPrX) {
        var hs_zddShow226CPrY = new $hs.Thunk();
        hs_zddShow226CPrY.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUZR.hscall(hs_zddShow26CPrW, hs_zddShow126CPrX);
        };
        var hs_sat26CPZT = new $hs.Func(1);
        hs_sat26CPZT.evaluate = function (hs_x26CPs0) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226CPrY, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPs0, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26CPZT.notEvaluated) {
            return hs_sat26CPZT.hscall();
        } else {
            return hs_sat26CPZT;
        }
    };
    hs_zdcshowsPrec625uqVM.evaluate = function (hs_zddShow26CPse, hs_zddShow126CPsh, hs_zddShow226CPsk, hs_ds26CPsr, hs_ds126CPs9, hs_s26CPsq) {
        var hs_wild26CPZV = hs_ds126CPs9;
        if (hs_ds126CPs9.notEvaluated) {
            hs_wild26CPZV = hs_ds126CPs9.hscall();
        }
        var hs_a6826CPsf = hs_wild26CPZV.data[0];
        var hs_b26CPsi = hs_wild26CPZV.data[1];
        var hs_c26CPsl = hs_wild26CPZV.data[2];
        var hs_sat26CPZW = new $hs.Thunk();
        hs_sat26CPZW.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226CPsk, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26CPsl);
        };
        var hs_sat26CPZX = new $hs.Data(2);
        hs_sat26CPZX.data = [hs_sat26CPZW, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26CPZY = new $hs.Thunk();
        hs_sat26CPZY.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126CPsh, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26CPsi);
        };
        var hs_sat26CPZZ = new $hs.Data(2);
        hs_sat26CPZZ.data = [hs_sat26CPZY, hs_sat26CPZX];
        var hs_sat26CQ00 = new $hs.Thunk();
        hs_sat26CQ00.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26CPse, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6826CPsf);
        };
        var hs_sat26CPZU = new $hs.Data(2);
        hs_sat26CPZU.data = [hs_sat26CQ00, hs_sat26CPZZ];
        return hs_showzutuple25rqsS.hscall(hs_sat26CPZU, hs_s26CPsq);
    };
    this.hs_zdfShowZLz2cUz2cUZR.evaluate = function (hs_zddShow26CPsx, hs_zddShow126CPsy, hs_zddShow226CPsz) {
        var hs_sat26CQ02 = new $hs.Thunk();
        hs_sat26CQ02.evaluateOnce = function () {
            return hs_zdcshowList725uqWc.hscall(hs_zddShow26CPsx, hs_zddShow126CPsy, hs_zddShow226CPsz);
        };
        var hs_sat26CQ03 = new $hs.Thunk();
        hs_sat26CQ03.evaluateOnce = function () {
            return hs_zdcshow725uqWd.hscall(hs_zddShow26CPsx, hs_zddShow126CPsy, hs_zddShow226CPsz);
        };
        var hs_sat26CQ01 = new $hs.Func(3);
        hs_sat26CQ01.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec625uqVM.hscall(hs_zddShow26CPsx, hs_zddShow126CPsy, hs_zddShow226CPsz, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CQ01, hs_sat26CQ03, hs_sat26CQ02];
        return $res;
    };
    hs_zdcshowList725uqWc.evaluate = function (hs_zddShow26CPsH, hs_zddShow126CPsI, hs_zddShow226CPsJ) {
        var hs_zddShow326CPsK = new $hs.Thunk();
        hs_zddShow326CPsK.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUZR.hscall(hs_zddShow26CPsH, hs_zddShow126CPsI, hs_zddShow226CPsJ);
        };
        var hs_sat26CPsQ = new $hs.Thunk();
        hs_sat26CPsQ.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326CPsK, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26CPsQ);
    };
    hs_zdcshow725uqWd.evaluate = function (hs_zddShow26CPsV, hs_zddShow126CPsW, hs_zddShow226CPsX) {
        var hs_zddShow326CPsY = new $hs.Thunk();
        hs_zddShow326CPsY.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUZR.hscall(hs_zddShow26CPsV, hs_zddShow126CPsW, hs_zddShow226CPsX);
        };
        var hs_sat26CQ04 = new $hs.Func(1);
        hs_sat26CQ04.evaluate = function (hs_x26CPt0) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326CPsY, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPt0, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26CQ04.notEvaluated) {
            return hs_sat26CQ04.hscall();
        } else {
            return hs_sat26CQ04;
        }
    };
    hs_zdcshowsPrec725uqWM.evaluate = function (hs_zddShow26CPtg, hs_zddShow126CPtj, hs_zddShow226CPtm, hs_zddShow326CPtp, hs_ds26CPtx, hs_ds126CPta, hs_s26CPtw) {
        var hs_wild26CQ06 = hs_ds126CPta;
        if (hs_ds126CPta.notEvaluated) {
            hs_wild26CQ06 = hs_ds126CPta.hscall();
        }
        var hs_a6826CPth = hs_wild26CQ06.data[0];
        var hs_b26CPtk = hs_wild26CQ06.data[1];
        var hs_c26CPtn = hs_wild26CQ06.data[2];
        var hs_d26CPtq = hs_wild26CQ06.data[3];
        var hs_sat26CQ07 = new $hs.Thunk();
        hs_sat26CQ07.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326CPtp, $hs.modules.GHCziBase.hs_zzeroInt, hs_d26CPtq);
        };
        var hs_sat26CQ08 = new $hs.Data(2);
        hs_sat26CQ08.data = [hs_sat26CQ07, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26CQ09 = new $hs.Thunk();
        hs_sat26CQ09.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226CPtm, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26CPtn);
        };
        var hs_sat26CQ0a = new $hs.Data(2);
        hs_sat26CQ0a.data = [hs_sat26CQ09, hs_sat26CQ08];
        var hs_sat26CQ0b = new $hs.Thunk();
        hs_sat26CQ0b.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126CPtj, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26CPtk);
        };
        var hs_sat26CQ0c = new $hs.Data(2);
        hs_sat26CQ0c.data = [hs_sat26CQ0b, hs_sat26CQ0a];
        var hs_sat26CQ0d = new $hs.Thunk();
        hs_sat26CQ0d.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26CPtg, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6826CPth);
        };
        var hs_sat26CQ05 = new $hs.Data(2);
        hs_sat26CQ05.data = [hs_sat26CQ0d, hs_sat26CQ0c];
        return hs_showzutuple25rqsS.hscall(hs_sat26CQ05, hs_s26CPtw);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26CPtE, hs_zddShow126CPtF, hs_zddShow226CPtG, hs_zddShow326CPtH) {
        var hs_sat26CQ0f = new $hs.Thunk();
        hs_sat26CQ0f.evaluateOnce = function () {
            return hs_zdcshowList825uqXi.hscall(hs_zddShow26CPtE, hs_zddShow126CPtF, hs_zddShow226CPtG, hs_zddShow326CPtH);
        };
        var hs_sat26CQ0g = new $hs.Thunk();
        hs_sat26CQ0g.evaluateOnce = function () {
            return hs_zdcshow825uqXj.hscall(hs_zddShow26CPtE, hs_zddShow126CPtF, hs_zddShow226CPtG, hs_zddShow326CPtH);
        };
        var hs_sat26CQ0e = new $hs.Func(3);
        hs_sat26CQ0e.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec725uqWM.hscall(hs_zddShow26CPtE, hs_zddShow126CPtF, hs_zddShow226CPtG, hs_zddShow326CPtH, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CQ0e, hs_sat26CQ0g, hs_sat26CQ0f];
        return $res;
    };
    hs_zdcshowList825uqXi.evaluate = function (hs_zddShow26CPtQ, hs_zddShow126CPtR, hs_zddShow226CPtS, hs_zddShow326CPtT) {
        var hs_zddShow426CPtU = new $hs.Thunk();
        hs_zddShow426CPtU.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUZR.hscall(hs_zddShow26CPtQ, hs_zddShow126CPtR, hs_zddShow226CPtS, hs_zddShow326CPtT);
        };
        var hs_sat26CPu0 = new $hs.Thunk();
        hs_sat26CPu0.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426CPtU, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26CPu0);
    };
    hs_zdcshow825uqXj.evaluate = function (hs_zddShow26CPu6, hs_zddShow126CPu7, hs_zddShow226CPu8, hs_zddShow326CPu9) {
        var hs_zddShow426CPua = new $hs.Thunk();
        hs_zddShow426CPua.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUZR.hscall(hs_zddShow26CPu6, hs_zddShow126CPu7, hs_zddShow226CPu8, hs_zddShow326CPu9);
        };
        var hs_sat26CQ0h = new $hs.Func(1);
        hs_sat26CQ0h.evaluate = function (hs_x26CPuc) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426CPua, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPuc, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26CQ0h.notEvaluated) {
            return hs_sat26CQ0h.hscall();
        } else {
            return hs_sat26CQ0h;
        }
    };
    hs_zdcshowsPrec825uqXY.evaluate = function (hs_zddShow26CPuu, hs_zddShow126CPux, hs_zddShow226CPuA, hs_zddShow326CPuD, hs_zddShow426CPuG, hs_ds26CPuP, hs_ds126CPun, hs_s26CPuO) {
        var hs_wild26CQ0j = hs_ds126CPun;
        if (hs_ds126CPun.notEvaluated) {
            hs_wild26CQ0j = hs_ds126CPun.hscall();
        }
        var hs_a6826CPuv = hs_wild26CQ0j.data[0];
        var hs_b26CPuy = hs_wild26CQ0j.data[1];
        var hs_c26CPuB = hs_wild26CQ0j.data[2];
        var hs_d26CPuE = hs_wild26CQ0j.data[3];
        var hs_e26CPuH = hs_wild26CQ0j.data[4];
        var hs_sat26CQ0k = new $hs.Thunk();
        hs_sat26CQ0k.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426CPuG, $hs.modules.GHCziBase.hs_zzeroInt, hs_e26CPuH);
        };
        var hs_sat26CQ0l = new $hs.Data(2);
        hs_sat26CQ0l.data = [hs_sat26CQ0k, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26CQ0m = new $hs.Thunk();
        hs_sat26CQ0m.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326CPuD, $hs.modules.GHCziBase.hs_zzeroInt, hs_d26CPuE);
        };
        var hs_sat26CQ0n = new $hs.Data(2);
        hs_sat26CQ0n.data = [hs_sat26CQ0m, hs_sat26CQ0l];
        var hs_sat26CQ0o = new $hs.Thunk();
        hs_sat26CQ0o.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226CPuA, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26CPuB);
        };
        var hs_sat26CQ0p = new $hs.Data(2);
        hs_sat26CQ0p.data = [hs_sat26CQ0o, hs_sat26CQ0n];
        var hs_sat26CQ0q = new $hs.Thunk();
        hs_sat26CQ0q.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126CPux, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26CPuy);
        };
        var hs_sat26CQ0r = new $hs.Data(2);
        hs_sat26CQ0r.data = [hs_sat26CQ0q, hs_sat26CQ0p];
        var hs_sat26CQ0s = new $hs.Thunk();
        hs_sat26CQ0s.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26CPuu, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6826CPuv);
        };
        var hs_sat26CQ0i = new $hs.Data(2);
        hs_sat26CQ0i.data = [hs_sat26CQ0s, hs_sat26CQ0r];
        return hs_showzutuple25rqsS.hscall(hs_sat26CQ0i, hs_s26CPuO);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26CPuX, hs_zddShow126CPuY, hs_zddShow226CPuZ, hs_zddShow326CPv0, hs_zddShow426CPv1) {
        var hs_sat26CQ0u = new $hs.Thunk();
        hs_sat26CQ0u.evaluateOnce = function () {
            return hs_zdcshowList925uqYA.hscall(hs_zddShow26CPuX, hs_zddShow126CPuY, hs_zddShow226CPuZ, hs_zddShow326CPv0, hs_zddShow426CPv1);
        };
        var hs_sat26CQ0v = new $hs.Thunk();
        hs_sat26CQ0v.evaluateOnce = function () {
            return hs_zdcshow925uqYB.hscall(hs_zddShow26CPuX, hs_zddShow126CPuY, hs_zddShow226CPuZ, hs_zddShow326CPv0, hs_zddShow426CPv1);
        };
        var hs_sat26CQ0t = new $hs.Func(3);
        hs_sat26CQ0t.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec825uqXY.hscall(hs_zddShow26CPuX, hs_zddShow126CPuY, hs_zddShow226CPuZ, hs_zddShow326CPv0, hs_zddShow426CPv1, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CQ0t, hs_sat26CQ0v, hs_sat26CQ0u];
        return $res;
    };
    hs_zdcshowList925uqYA.evaluate = function (hs_zddShow26CPvb, hs_zddShow126CPvc, hs_zddShow226CPvd, hs_zddShow326CPve, hs_zddShow426CPvf) {
        var hs_zddShow526CPvg = new $hs.Thunk();
        hs_zddShow526CPvg.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26CPvb, hs_zddShow126CPvc, hs_zddShow226CPvd, hs_zddShow326CPve, hs_zddShow426CPvf);
        };
        var hs_sat26CPvm = new $hs.Thunk();
        hs_sat26CPvm.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow526CPvg, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26CPvm);
    };
    hs_zdcshow925uqYB.evaluate = function (hs_zddShow26CPvt, hs_zddShow126CPvu, hs_zddShow226CPvv, hs_zddShow326CPvw, hs_zddShow426CPvx) {
        var hs_zddShow526CPvy = new $hs.Thunk();
        hs_zddShow526CPvy.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26CPvt, hs_zddShow126CPvu, hs_zddShow226CPvv, hs_zddShow326CPvw, hs_zddShow426CPvx);
        };
        var hs_sat26CQ0w = new $hs.Func(1);
        hs_sat26CQ0w.evaluate = function (hs_x26CPvA) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow526CPvy, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPvA, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26CQ0w.notEvaluated) {
            return hs_sat26CQ0w.hscall();
        } else {
            return hs_sat26CQ0w;
        }
    };
    hs_zdcshowsPrec925uqZm.evaluate = function (hs_zddShow26CPvU, hs_zddShow126CPvX, hs_zddShow226CPw0, hs_zddShow326CPw3, hs_zddShow426CPw6, hs_zddShow526CPw9, hs_ds26CPwj, hs_ds126CPvM, hs_s26CPwi) {
        var hs_wild26CQ0y = hs_ds126CPvM;
        if (hs_ds126CPvM.notEvaluated) {
            hs_wild26CQ0y = hs_ds126CPvM.hscall();
        }
        var hs_a6826CPvV = hs_wild26CQ0y.data[0];
        var hs_b26CPvY = hs_wild26CQ0y.data[1];
        var hs_c26CPw1 = hs_wild26CQ0y.data[2];
        var hs_d26CPw4 = hs_wild26CQ0y.data[3];
        var hs_e26CPw7 = hs_wild26CQ0y.data[4];
        var hs_f26CPwa = hs_wild26CQ0y.data[5];
        var hs_sat26CQ0z = new $hs.Thunk();
        hs_sat26CQ0z.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow526CPw9, $hs.modules.GHCziBase.hs_zzeroInt, hs_f26CPwa);
        };
        var hs_sat26CQ0A = new $hs.Data(2);
        hs_sat26CQ0A.data = [hs_sat26CQ0z, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26CQ0B = new $hs.Thunk();
        hs_sat26CQ0B.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426CPw6, $hs.modules.GHCziBase.hs_zzeroInt, hs_e26CPw7);
        };
        var hs_sat26CQ0C = new $hs.Data(2);
        hs_sat26CQ0C.data = [hs_sat26CQ0B, hs_sat26CQ0A];
        var hs_sat26CQ0D = new $hs.Thunk();
        hs_sat26CQ0D.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326CPw3, $hs.modules.GHCziBase.hs_zzeroInt, hs_d26CPw4);
        };
        var hs_sat26CQ0E = new $hs.Data(2);
        hs_sat26CQ0E.data = [hs_sat26CQ0D, hs_sat26CQ0C];
        var hs_sat26CQ0F = new $hs.Thunk();
        hs_sat26CQ0F.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226CPw0, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26CPw1);
        };
        var hs_sat26CQ0G = new $hs.Data(2);
        hs_sat26CQ0G.data = [hs_sat26CQ0F, hs_sat26CQ0E];
        var hs_sat26CQ0H = new $hs.Thunk();
        hs_sat26CQ0H.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126CPvX, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26CPvY);
        };
        var hs_sat26CQ0I = new $hs.Data(2);
        hs_sat26CQ0I.data = [hs_sat26CQ0H, hs_sat26CQ0G];
        var hs_sat26CQ0J = new $hs.Thunk();
        hs_sat26CQ0J.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26CPvU, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6826CPvV);
        };
        var hs_sat26CQ0x = new $hs.Data(2);
        hs_sat26CQ0x.data = [hs_sat26CQ0J, hs_sat26CQ0I];
        return hs_showzutuple25rqsS.hscall(hs_sat26CQ0x, hs_s26CPwi);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26CPws, hs_zddShow126CPwt, hs_zddShow226CPwu, hs_zddShow326CPwv, hs_zddShow426CPww, hs_zddShow526CPwx) {
        var hs_sat26CQ0L = new $hs.Thunk();
        hs_sat26CQ0L.evaluateOnce = function () {
            return hs_zdcshowList1025ur04.hscall(hs_zddShow26CPws, hs_zddShow126CPwt, hs_zddShow226CPwu, hs_zddShow326CPwv, hs_zddShow426CPww, hs_zddShow526CPwx);
        };
        var hs_sat26CQ0M = new $hs.Thunk();
        hs_sat26CQ0M.evaluateOnce = function () {
            return hs_zdcshow1025ur05.hscall(hs_zddShow26CPws, hs_zddShow126CPwt, hs_zddShow226CPwu, hs_zddShow326CPwv, hs_zddShow426CPww, hs_zddShow526CPwx);
        };
        var hs_sat26CQ0K = new $hs.Func(3);
        hs_sat26CQ0K.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec925uqZm.hscall(hs_zddShow26CPws, hs_zddShow126CPwt, hs_zddShow226CPwu, hs_zddShow326CPwv, hs_zddShow426CPww, hs_zddShow526CPwx, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CQ0K, hs_sat26CQ0M, hs_sat26CQ0L];
        return $res;
    };
    hs_zdcshowList1025ur04.evaluate = function (hs_zddShow26CPwI, hs_zddShow126CPwJ, hs_zddShow226CPwK, hs_zddShow326CPwL, hs_zddShow426CPwM, hs_zddShow526CPwN) {
        var hs_zddShow626CPwO = new $hs.Thunk();
        hs_zddShow626CPwO.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26CPwI, hs_zddShow126CPwJ, hs_zddShow226CPwK, hs_zddShow326CPwL, hs_zddShow426CPwM, hs_zddShow526CPwN);
        };
        var hs_sat26CPwU = new $hs.Thunk();
        hs_sat26CPwU.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow626CPwO, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26CPwU);
    };
    hs_zdcshow1025ur05.evaluate = function (hs_zddShow26CPx2, hs_zddShow126CPx3, hs_zddShow226CPx4, hs_zddShow326CPx5, hs_zddShow426CPx6, hs_zddShow526CPx7) {
        var hs_zddShow626CPx8 = new $hs.Thunk();
        hs_zddShow626CPx8.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26CPx2, hs_zddShow126CPx3, hs_zddShow226CPx4, hs_zddShow326CPx5, hs_zddShow426CPx6, hs_zddShow526CPx7);
        };
        var hs_sat26CQ0N = new $hs.Func(1);
        hs_sat26CQ0N.evaluate = function (hs_x26CPxa) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow626CPx8, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPxa, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26CQ0N.notEvaluated) {
            return hs_sat26CQ0N.hscall();
        } else {
            return hs_sat26CQ0N;
        }
    };
    hs_zdcshowsPrec1025ur0W.evaluate = function (hs_zddShow26CPxw, hs_zddShow126CPxz, hs_zddShow226CPxC, hs_zddShow326CPxF, hs_zddShow426CPxI, hs_zddShow526CPxL, hs_zddShow626CPxO, hs_ds26CPxZ, hs_ds126CPxn, hs_s26CPxY) {
        var hs_wild26CQ0P = hs_ds126CPxn;
        if (hs_ds126CPxn.notEvaluated) {
            hs_wild26CQ0P = hs_ds126CPxn.hscall();
        }
        var hs_a6826CPxx = hs_wild26CQ0P.data[0];
        var hs_b26CPxA = hs_wild26CQ0P.data[1];
        var hs_c26CPxD = hs_wild26CQ0P.data[2];
        var hs_d26CPxG = hs_wild26CQ0P.data[3];
        var hs_e26CPxJ = hs_wild26CQ0P.data[4];
        var hs_f26CPxM = hs_wild26CQ0P.data[5];
        var hs_g26CPxP = hs_wild26CQ0P.data[6];
        var hs_sat26CQ0Q = new $hs.Thunk();
        hs_sat26CQ0Q.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow626CPxO, $hs.modules.GHCziBase.hs_zzeroInt, hs_g26CPxP);
        };
        var hs_sat26CQ0R = new $hs.Data(2);
        hs_sat26CQ0R.data = [hs_sat26CQ0Q, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26CQ0S = new $hs.Thunk();
        hs_sat26CQ0S.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow526CPxL, $hs.modules.GHCziBase.hs_zzeroInt, hs_f26CPxM);
        };
        var hs_sat26CQ0T = new $hs.Data(2);
        hs_sat26CQ0T.data = [hs_sat26CQ0S, hs_sat26CQ0R];
        var hs_sat26CQ0U = new $hs.Thunk();
        hs_sat26CQ0U.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426CPxI, $hs.modules.GHCziBase.hs_zzeroInt, hs_e26CPxJ);
        };
        var hs_sat26CQ0V = new $hs.Data(2);
        hs_sat26CQ0V.data = [hs_sat26CQ0U, hs_sat26CQ0T];
        var hs_sat26CQ0W = new $hs.Thunk();
        hs_sat26CQ0W.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326CPxF, $hs.modules.GHCziBase.hs_zzeroInt, hs_d26CPxG);
        };
        var hs_sat26CQ0X = new $hs.Data(2);
        hs_sat26CQ0X.data = [hs_sat26CQ0W, hs_sat26CQ0V];
        var hs_sat26CQ0Y = new $hs.Thunk();
        hs_sat26CQ0Y.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226CPxC, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26CPxD);
        };
        var hs_sat26CQ0Z = new $hs.Data(2);
        hs_sat26CQ0Z.data = [hs_sat26CQ0Y, hs_sat26CQ0X];
        var hs_sat26CQ10 = new $hs.Thunk();
        hs_sat26CQ10.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126CPxz, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26CPxA);
        };
        var hs_sat26CQ11 = new $hs.Data(2);
        hs_sat26CQ11.data = [hs_sat26CQ10, hs_sat26CQ0Z];
        var hs_sat26CQ12 = new $hs.Thunk();
        hs_sat26CQ12.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26CPxw, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6826CPxx);
        };
        var hs_sat26CQ0O = new $hs.Data(2);
        hs_sat26CQ0O.data = [hs_sat26CQ12, hs_sat26CQ11];
        return hs_showzutuple25rqsS.hscall(hs_sat26CQ0O, hs_s26CPxY);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26CPy9, hs_zddShow126CPya, hs_zddShow226CPyb, hs_zddShow326CPyc, hs_zddShow426CPyd, hs_zddShow526CPye, hs_zddShow626CPyf) {
        var hs_sat26CQ14 = new $hs.Thunk();
        hs_sat26CQ14.evaluateOnce = function () {
            return hs_zdcshowList1125ur1K.hscall(hs_zddShow26CPy9, hs_zddShow126CPya, hs_zddShow226CPyb, hs_zddShow326CPyc, hs_zddShow426CPyd, hs_zddShow526CPye, hs_zddShow626CPyf);
        };
        var hs_sat26CQ15 = new $hs.Thunk();
        hs_sat26CQ15.evaluateOnce = function () {
            return hs_zdcshow1125ur1L.hscall(hs_zddShow26CPy9, hs_zddShow126CPya, hs_zddShow226CPyb, hs_zddShow326CPyc, hs_zddShow426CPyd, hs_zddShow526CPye, hs_zddShow626CPyf);
        };
        var hs_sat26CQ13 = new $hs.Func(3);
        hs_sat26CQ13.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec1025ur0W.hscall(hs_zddShow26CPy9, hs_zddShow126CPya, hs_zddShow226CPyb, hs_zddShow326CPyc, hs_zddShow426CPyd, hs_zddShow526CPye, hs_zddShow626CPyf, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CQ13, hs_sat26CQ15, hs_sat26CQ14];
        return $res;
    };
    hs_zdcshowList1125ur1K.evaluate = function (hs_zddShow26CPyr, hs_zddShow126CPys, hs_zddShow226CPyt, hs_zddShow326CPyu, hs_zddShow426CPyv, hs_zddShow526CPyw, hs_zddShow626CPyx) {
        var hs_zddShow726CPyy = new $hs.Thunk();
        hs_zddShow726CPyy.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26CPyr, hs_zddShow126CPys, hs_zddShow226CPyt, hs_zddShow326CPyu, hs_zddShow426CPyv, hs_zddShow526CPyw, hs_zddShow626CPyx);
        };
        var hs_sat26CPyE = new $hs.Thunk();
        hs_sat26CPyE.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow726CPyy, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26CPyE);
    };
    hs_zdcshow1125ur1L.evaluate = function (hs_zddShow26CPyN, hs_zddShow126CPyO, hs_zddShow226CPyP, hs_zddShow326CPyQ, hs_zddShow426CPyR, hs_zddShow526CPyS, hs_zddShow626CPyT) {
        var hs_zddShow726CPyU = new $hs.Thunk();
        hs_zddShow726CPyU.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26CPyN, hs_zddShow126CPyO, hs_zddShow226CPyP, hs_zddShow326CPyQ, hs_zddShow426CPyR, hs_zddShow526CPyS, hs_zddShow626CPyT);
        };
        var hs_sat26CQ16 = new $hs.Func(1);
        hs_sat26CQ16.evaluate = function (hs_x26CPyW) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow726CPyU, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPyW, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26CQ16.notEvaluated) {
            return hs_sat26CQ16.hscall();
        } else {
            return hs_sat26CQ16;
        }
    };
    hs_zdcshowsPrec1125ur2I.evaluate = function (hs_zddShow26CPzk, hs_zddShow126CPzn, hs_zddShow226CPzq, hs_zddShow326CPzt, hs_zddShow426CPzw, hs_zddShow526CPzz, hs_zddShow626CPzC, hs_zddShow726CPzF, hs_ds26CPzR, hs_ds126CPza, hs_s26CPzQ) {
        var hs_wild26CQ18 = hs_ds126CPza;
        if (hs_ds126CPza.notEvaluated) {
            hs_wild26CQ18 = hs_ds126CPza.hscall();
        }
        var hs_a6826CPzl = hs_wild26CQ18.data[0];
        var hs_b26CPzo = hs_wild26CQ18.data[1];
        var hs_c26CPzr = hs_wild26CQ18.data[2];
        var hs_d26CPzu = hs_wild26CQ18.data[3];
        var hs_e26CPzx = hs_wild26CQ18.data[4];
        var hs_f26CPzA = hs_wild26CQ18.data[5];
        var hs_g26CPzD = hs_wild26CQ18.data[6];
        var hs_h26CPzG = hs_wild26CQ18.data[7];
        var hs_sat26CQ19 = new $hs.Thunk();
        hs_sat26CQ19.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow726CPzF, $hs.modules.GHCziBase.hs_zzeroInt, hs_h26CPzG);
        };
        var hs_sat26CQ1a = new $hs.Data(2);
        hs_sat26CQ1a.data = [hs_sat26CQ19, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26CQ1b = new $hs.Thunk();
        hs_sat26CQ1b.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow626CPzC, $hs.modules.GHCziBase.hs_zzeroInt, hs_g26CPzD);
        };
        var hs_sat26CQ1c = new $hs.Data(2);
        hs_sat26CQ1c.data = [hs_sat26CQ1b, hs_sat26CQ1a];
        var hs_sat26CQ1d = new $hs.Thunk();
        hs_sat26CQ1d.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow526CPzz, $hs.modules.GHCziBase.hs_zzeroInt, hs_f26CPzA);
        };
        var hs_sat26CQ1e = new $hs.Data(2);
        hs_sat26CQ1e.data = [hs_sat26CQ1d, hs_sat26CQ1c];
        var hs_sat26CQ1f = new $hs.Thunk();
        hs_sat26CQ1f.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426CPzw, $hs.modules.GHCziBase.hs_zzeroInt, hs_e26CPzx);
        };
        var hs_sat26CQ1g = new $hs.Data(2);
        hs_sat26CQ1g.data = [hs_sat26CQ1f, hs_sat26CQ1e];
        var hs_sat26CQ1h = new $hs.Thunk();
        hs_sat26CQ1h.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326CPzt, $hs.modules.GHCziBase.hs_zzeroInt, hs_d26CPzu);
        };
        var hs_sat26CQ1i = new $hs.Data(2);
        hs_sat26CQ1i.data = [hs_sat26CQ1h, hs_sat26CQ1g];
        var hs_sat26CQ1j = new $hs.Thunk();
        hs_sat26CQ1j.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226CPzq, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26CPzr);
        };
        var hs_sat26CQ1k = new $hs.Data(2);
        hs_sat26CQ1k.data = [hs_sat26CQ1j, hs_sat26CQ1i];
        var hs_sat26CQ1l = new $hs.Thunk();
        hs_sat26CQ1l.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126CPzn, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26CPzo);
        };
        var hs_sat26CQ1m = new $hs.Data(2);
        hs_sat26CQ1m.data = [hs_sat26CQ1l, hs_sat26CQ1k];
        var hs_sat26CQ1n = new $hs.Thunk();
        hs_sat26CQ1n.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26CPzk, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6826CPzl);
        };
        var hs_sat26CQ17 = new $hs.Data(2);
        hs_sat26CQ17.data = [hs_sat26CQ1n, hs_sat26CQ1m];
        return hs_showzutuple25rqsS.hscall(hs_sat26CQ17, hs_s26CPzQ);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26CPA2, hs_zddShow126CPA3, hs_zddShow226CPA4, hs_zddShow326CPA5, hs_zddShow426CPA6, hs_zddShow526CPA7, hs_zddShow626CPA8, hs_zddShow726CPA9) {
        var hs_sat26CQ1p = new $hs.Thunk();
        hs_sat26CQ1p.evaluateOnce = function () {
            return hs_zdcshowList1225ur3C.hscall(hs_zddShow26CPA2, hs_zddShow126CPA3, hs_zddShow226CPA4, hs_zddShow326CPA5, hs_zddShow426CPA6, hs_zddShow526CPA7, hs_zddShow626CPA8, hs_zddShow726CPA9);
        };
        var hs_sat26CQ1q = new $hs.Thunk();
        hs_sat26CQ1q.evaluateOnce = function () {
            return hs_zdcshow1225ur3D.hscall(hs_zddShow26CPA2, hs_zddShow126CPA3, hs_zddShow226CPA4, hs_zddShow326CPA5, hs_zddShow426CPA6, hs_zddShow526CPA7, hs_zddShow626CPA8, hs_zddShow726CPA9);
        };
        var hs_sat26CQ1o = new $hs.Func(3);
        hs_sat26CQ1o.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec1125ur2I.hscall(hs_zddShow26CPA2, hs_zddShow126CPA3, hs_zddShow226CPA4, hs_zddShow326CPA5, hs_zddShow426CPA6, hs_zddShow526CPA7, hs_zddShow626CPA8, hs_zddShow726CPA9, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CQ1o, hs_sat26CQ1q, hs_sat26CQ1p];
        return $res;
    };
    hs_zdcshowList1225ur3C.evaluate = function (hs_zddShow26CPAm, hs_zddShow126CPAn, hs_zddShow226CPAo, hs_zddShow326CPAp, hs_zddShow426CPAq, hs_zddShow526CPAr, hs_zddShow626CPAs, hs_zddShow726CPAt) {
        var hs_zddShow826CPAu = new $hs.Thunk();
        hs_zddShow826CPAu.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26CPAm, hs_zddShow126CPAn, hs_zddShow226CPAo, hs_zddShow326CPAp, hs_zddShow426CPAq, hs_zddShow526CPAr, hs_zddShow626CPAs, hs_zddShow726CPAt);
        };
        var hs_sat26CPAA = new $hs.Thunk();
        hs_sat26CPAA.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow826CPAu, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26CPAA);
    };
    hs_zdcshow1225ur3D.evaluate = function (hs_zddShow26CPAK, hs_zddShow126CPAL, hs_zddShow226CPAM, hs_zddShow326CPAN, hs_zddShow426CPAO, hs_zddShow526CPAP, hs_zddShow626CPAQ, hs_zddShow726CPAR) {
        var hs_zddShow826CPAS = new $hs.Thunk();
        hs_zddShow826CPAS.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26CPAK, hs_zddShow126CPAL, hs_zddShow226CPAM, hs_zddShow326CPAN, hs_zddShow426CPAO, hs_zddShow526CPAP, hs_zddShow626CPAQ, hs_zddShow726CPAR);
        };
        var hs_sat26CQ1r = new $hs.Func(1);
        hs_sat26CQ1r.evaluate = function (hs_x26CPAU) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow826CPAS, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPAU, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26CQ1r.notEvaluated) {
            return hs_sat26CQ1r.hscall();
        } else {
            return hs_sat26CQ1r;
        }
    };
    hs_zdcshowsPrec1225ur4G.evaluate = function (hs_zddShow26CPBk, hs_zddShow126CPBn, hs_zddShow226CPBq, hs_zddShow326CPBt, hs_zddShow426CPBw, hs_zddShow526CPBz, hs_zddShow626CPBC, hs_zddShow726CPBF, hs_zddShow826CPBI, hs_ds26CPBV, hs_ds126CPB9, hs_s26CPBU) {
        var hs_wild26CQ1t = hs_ds126CPB9;
        if (hs_ds126CPB9.notEvaluated) {
            hs_wild26CQ1t = hs_ds126CPB9.hscall();
        }
        var hs_a6826CPBl = hs_wild26CQ1t.data[0];
        var hs_b26CPBo = hs_wild26CQ1t.data[1];
        var hs_c26CPBr = hs_wild26CQ1t.data[2];
        var hs_d26CPBu = hs_wild26CQ1t.data[3];
        var hs_e26CPBx = hs_wild26CQ1t.data[4];
        var hs_f26CPBA = hs_wild26CQ1t.data[5];
        var hs_g26CPBD = hs_wild26CQ1t.data[6];
        var hs_h26CPBG = hs_wild26CQ1t.data[7];
        var hs_i26CPBJ = hs_wild26CQ1t.data[8];
        var hs_sat26CQ1u = new $hs.Thunk();
        hs_sat26CQ1u.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow826CPBI, $hs.modules.GHCziBase.hs_zzeroInt, hs_i26CPBJ);
        };
        var hs_sat26CQ1v = new $hs.Data(2);
        hs_sat26CQ1v.data = [hs_sat26CQ1u, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26CQ1w = new $hs.Thunk();
        hs_sat26CQ1w.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow726CPBF, $hs.modules.GHCziBase.hs_zzeroInt, hs_h26CPBG);
        };
        var hs_sat26CQ1x = new $hs.Data(2);
        hs_sat26CQ1x.data = [hs_sat26CQ1w, hs_sat26CQ1v];
        var hs_sat26CQ1y = new $hs.Thunk();
        hs_sat26CQ1y.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow626CPBC, $hs.modules.GHCziBase.hs_zzeroInt, hs_g26CPBD);
        };
        var hs_sat26CQ1z = new $hs.Data(2);
        hs_sat26CQ1z.data = [hs_sat26CQ1y, hs_sat26CQ1x];
        var hs_sat26CQ1A = new $hs.Thunk();
        hs_sat26CQ1A.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow526CPBz, $hs.modules.GHCziBase.hs_zzeroInt, hs_f26CPBA);
        };
        var hs_sat26CQ1B = new $hs.Data(2);
        hs_sat26CQ1B.data = [hs_sat26CQ1A, hs_sat26CQ1z];
        var hs_sat26CQ1C = new $hs.Thunk();
        hs_sat26CQ1C.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426CPBw, $hs.modules.GHCziBase.hs_zzeroInt, hs_e26CPBx);
        };
        var hs_sat26CQ1D = new $hs.Data(2);
        hs_sat26CQ1D.data = [hs_sat26CQ1C, hs_sat26CQ1B];
        var hs_sat26CQ1E = new $hs.Thunk();
        hs_sat26CQ1E.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326CPBt, $hs.modules.GHCziBase.hs_zzeroInt, hs_d26CPBu);
        };
        var hs_sat26CQ1F = new $hs.Data(2);
        hs_sat26CQ1F.data = [hs_sat26CQ1E, hs_sat26CQ1D];
        var hs_sat26CQ1G = new $hs.Thunk();
        hs_sat26CQ1G.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226CPBq, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26CPBr);
        };
        var hs_sat26CQ1H = new $hs.Data(2);
        hs_sat26CQ1H.data = [hs_sat26CQ1G, hs_sat26CQ1F];
        var hs_sat26CQ1I = new $hs.Thunk();
        hs_sat26CQ1I.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126CPBn, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26CPBo);
        };
        var hs_sat26CQ1J = new $hs.Data(2);
        hs_sat26CQ1J.data = [hs_sat26CQ1I, hs_sat26CQ1H];
        var hs_sat26CQ1K = new $hs.Thunk();
        hs_sat26CQ1K.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26CPBk, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6826CPBl);
        };
        var hs_sat26CQ1s = new $hs.Data(2);
        hs_sat26CQ1s.data = [hs_sat26CQ1K, hs_sat26CQ1J];
        return hs_showzutuple25rqsS.hscall(hs_sat26CQ1s, hs_s26CPBU);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26CPC7, hs_zddShow126CPC8, hs_zddShow226CPC9, hs_zddShow326CPCa, hs_zddShow426CPCb, hs_zddShow526CPCc, hs_zddShow626CPCd, hs_zddShow726CPCe, hs_zddShow826CPCf) {
        var hs_sat26CQ1M = new $hs.Thunk();
        hs_sat26CQ1M.evaluateOnce = function () {
            return hs_zdcshowList1325ur5G.hscall(hs_zddShow26CPC7, hs_zddShow126CPC8, hs_zddShow226CPC9, hs_zddShow326CPCa, hs_zddShow426CPCb, hs_zddShow526CPCc, hs_zddShow626CPCd, hs_zddShow726CPCe, hs_zddShow826CPCf);
        };
        var hs_sat26CQ1N = new $hs.Thunk();
        hs_sat26CQ1N.evaluateOnce = function () {
            return hs_zdcshow1325ur5H.hscall(hs_zddShow26CPC7, hs_zddShow126CPC8, hs_zddShow226CPC9, hs_zddShow326CPCa, hs_zddShow426CPCb, hs_zddShow526CPCc, hs_zddShow626CPCd, hs_zddShow726CPCe, hs_zddShow826CPCf);
        };
        var hs_sat26CQ1L = new $hs.Func(3);
        hs_sat26CQ1L.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec1225ur4G.hscall(hs_zddShow26CPC7, hs_zddShow126CPC8, hs_zddShow226CPC9, hs_zddShow326CPCa, hs_zddShow426CPCb, hs_zddShow526CPCc, hs_zddShow626CPCd, hs_zddShow726CPCe, hs_zddShow826CPCf, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CQ1L, hs_sat26CQ1N, hs_sat26CQ1M];
        return $res;
    };
    hs_zdcshowList1325ur5G.evaluate = function (hs_zddShow26CPCt, hs_zddShow126CPCu, hs_zddShow226CPCv, hs_zddShow326CPCw, hs_zddShow426CPCx, hs_zddShow526CPCy, hs_zddShow626CPCz, hs_zddShow726CPCA, hs_zddShow826CPCB) {
        var hs_zddShow926CPCC = new $hs.Thunk();
        hs_zddShow926CPCC.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26CPCt, hs_zddShow126CPCu, hs_zddShow226CPCv, hs_zddShow326CPCw, hs_zddShow426CPCx, hs_zddShow526CPCy, hs_zddShow626CPCz, hs_zddShow726CPCA, hs_zddShow826CPCB);
        };
        var hs_sat26CPCI = new $hs.Thunk();
        hs_sat26CPCI.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow926CPCC, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26CPCI);
    };
    hs_zdcshow1325ur5H.evaluate = function (hs_zddShow26CPCT, hs_zddShow126CPCU, hs_zddShow226CPCV, hs_zddShow326CPCW, hs_zddShow426CPCX, hs_zddShow526CPCY, hs_zddShow626CPCZ, hs_zddShow726CPD0, hs_zddShow826CPD1) {
        var hs_zddShow926CPD2 = new $hs.Thunk();
        hs_zddShow926CPD2.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26CPCT, hs_zddShow126CPCU, hs_zddShow226CPCV, hs_zddShow326CPCW, hs_zddShow426CPCX, hs_zddShow526CPCY, hs_zddShow626CPCZ, hs_zddShow726CPD0, hs_zddShow826CPD1);
        };
        var hs_sat26CQ1O = new $hs.Func(1);
        hs_sat26CQ1O.evaluate = function (hs_x26CPD4) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow926CPD2, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPD4, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26CQ1O.notEvaluated) {
            return hs_sat26CQ1O.hscall();
        } else {
            return hs_sat26CQ1O;
        }
    };
    hs_zdcshowsPrec1325ur6Q.evaluate = function (hs_zddShow26CPDw, hs_zddShow126CPDz, hs_zddShow226CPDC, hs_zddShow326CPDF, hs_zddShow426CPDI, hs_zddShow526CPDL, hs_zddShow626CPDO, hs_zddShow726CPDR, hs_zddShow826CPDU, hs_zddShow926CPDX, hs_ds26CPEb, hs_ds126CPDk, hs_s26CPEa) {
        var hs_wild26CQ1Q = hs_ds126CPDk;
        if (hs_ds126CPDk.notEvaluated) {
            hs_wild26CQ1Q = hs_ds126CPDk.hscall();
        }
        var hs_a6826CPDx = hs_wild26CQ1Q.data[0];
        var hs_b26CPDA = hs_wild26CQ1Q.data[1];
        var hs_c26CPDD = hs_wild26CQ1Q.data[2];
        var hs_d26CPDG = hs_wild26CQ1Q.data[3];
        var hs_e26CPDJ = hs_wild26CQ1Q.data[4];
        var hs_f26CPDM = hs_wild26CQ1Q.data[5];
        var hs_g26CPDP = hs_wild26CQ1Q.data[6];
        var hs_h26CPDS = hs_wild26CQ1Q.data[7];
        var hs_i26CPDV = hs_wild26CQ1Q.data[8];
        var hs_j26CPDY = hs_wild26CQ1Q.data[9];
        var hs_sat26CQ1R = new $hs.Thunk();
        hs_sat26CQ1R.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow926CPDX, $hs.modules.GHCziBase.hs_zzeroInt, hs_j26CPDY);
        };
        var hs_sat26CQ1S = new $hs.Data(2);
        hs_sat26CQ1S.data = [hs_sat26CQ1R, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26CQ1T = new $hs.Thunk();
        hs_sat26CQ1T.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow826CPDU, $hs.modules.GHCziBase.hs_zzeroInt, hs_i26CPDV);
        };
        var hs_sat26CQ1U = new $hs.Data(2);
        hs_sat26CQ1U.data = [hs_sat26CQ1T, hs_sat26CQ1S];
        var hs_sat26CQ1V = new $hs.Thunk();
        hs_sat26CQ1V.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow726CPDR, $hs.modules.GHCziBase.hs_zzeroInt, hs_h26CPDS);
        };
        var hs_sat26CQ1W = new $hs.Data(2);
        hs_sat26CQ1W.data = [hs_sat26CQ1V, hs_sat26CQ1U];
        var hs_sat26CQ1X = new $hs.Thunk();
        hs_sat26CQ1X.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow626CPDO, $hs.modules.GHCziBase.hs_zzeroInt, hs_g26CPDP);
        };
        var hs_sat26CQ1Y = new $hs.Data(2);
        hs_sat26CQ1Y.data = [hs_sat26CQ1X, hs_sat26CQ1W];
        var hs_sat26CQ1Z = new $hs.Thunk();
        hs_sat26CQ1Z.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow526CPDL, $hs.modules.GHCziBase.hs_zzeroInt, hs_f26CPDM);
        };
        var hs_sat26CQ20 = new $hs.Data(2);
        hs_sat26CQ20.data = [hs_sat26CQ1Z, hs_sat26CQ1Y];
        var hs_sat26CQ21 = new $hs.Thunk();
        hs_sat26CQ21.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426CPDI, $hs.modules.GHCziBase.hs_zzeroInt, hs_e26CPDJ);
        };
        var hs_sat26CQ22 = new $hs.Data(2);
        hs_sat26CQ22.data = [hs_sat26CQ21, hs_sat26CQ20];
        var hs_sat26CQ23 = new $hs.Thunk();
        hs_sat26CQ23.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326CPDF, $hs.modules.GHCziBase.hs_zzeroInt, hs_d26CPDG);
        };
        var hs_sat26CQ24 = new $hs.Data(2);
        hs_sat26CQ24.data = [hs_sat26CQ23, hs_sat26CQ22];
        var hs_sat26CQ25 = new $hs.Thunk();
        hs_sat26CQ25.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226CPDC, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26CPDD);
        };
        var hs_sat26CQ26 = new $hs.Data(2);
        hs_sat26CQ26.data = [hs_sat26CQ25, hs_sat26CQ24];
        var hs_sat26CQ27 = new $hs.Thunk();
        hs_sat26CQ27.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126CPDz, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26CPDA);
        };
        var hs_sat26CQ28 = new $hs.Data(2);
        hs_sat26CQ28.data = [hs_sat26CQ27, hs_sat26CQ26];
        var hs_sat26CQ29 = new $hs.Thunk();
        hs_sat26CQ29.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26CPDw, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6826CPDx);
        };
        var hs_sat26CQ1P = new $hs.Data(2);
        hs_sat26CQ1P.data = [hs_sat26CQ29, hs_sat26CQ28];
        return hs_showzutuple25rqsS.hscall(hs_sat26CQ1P, hs_s26CPEa);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26CPEo, hs_zddShow126CPEp, hs_zddShow226CPEq, hs_zddShow326CPEr, hs_zddShow426CPEs, hs_zddShow526CPEt, hs_zddShow626CPEu, hs_zddShow726CPEv, hs_zddShow826CPEw, hs_zddShow926CPEx) {
        var hs_sat26CQ2b = new $hs.Thunk();
        hs_sat26CQ2b.evaluateOnce = function () {
            return hs_zdcshowList1425ur7W.hscall(hs_zddShow26CPEo, hs_zddShow126CPEp, hs_zddShow226CPEq, hs_zddShow326CPEr, hs_zddShow426CPEs, hs_zddShow526CPEt, hs_zddShow626CPEu, hs_zddShow726CPEv, hs_zddShow826CPEw, hs_zddShow926CPEx);
        };
        var hs_sat26CQ2c = new $hs.Thunk();
        hs_sat26CQ2c.evaluateOnce = function () {
            return hs_zdcshow1425ur7X.hscall(hs_zddShow26CPEo, hs_zddShow126CPEp, hs_zddShow226CPEq, hs_zddShow326CPEr, hs_zddShow426CPEs, hs_zddShow526CPEt, hs_zddShow626CPEu, hs_zddShow726CPEv, hs_zddShow826CPEw, hs_zddShow926CPEx);
        };
        var hs_sat26CQ2a = new $hs.Func(3);
        hs_sat26CQ2a.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec1325ur6Q.hscall(hs_zddShow26CPEo, hs_zddShow126CPEp, hs_zddShow226CPEq, hs_zddShow326CPEr, hs_zddShow426CPEs, hs_zddShow526CPEt, hs_zddShow626CPEu, hs_zddShow726CPEv, hs_zddShow826CPEw, hs_zddShow926CPEx, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CQ2a, hs_sat26CQ2c, hs_sat26CQ2b];
        return $res;
    };
    hs_zdcshowList1425ur7W.evaluate = function (hs_zddShow26CPEM, hs_zddShow126CPEN, hs_zddShow226CPEO, hs_zddShow326CPEP, hs_zddShow426CPEQ, hs_zddShow526CPER, hs_zddShow626CPES, hs_zddShow726CPET, hs_zddShow826CPEU, hs_zddShow926CPEV) {
        var hs_zddShow1026CPEW = new $hs.Thunk();
        hs_zddShow1026CPEW.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26CPEM, hs_zddShow126CPEN, hs_zddShow226CPEO, hs_zddShow326CPEP, hs_zddShow426CPEQ, hs_zddShow526CPER, hs_zddShow626CPES, hs_zddShow726CPET, hs_zddShow826CPEU, hs_zddShow926CPEV);
        };
        var hs_sat26CPF2 = new $hs.Thunk();
        hs_sat26CPF2.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1026CPEW, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26CPF2);
    };
    hs_zdcshow1425ur7X.evaluate = function (hs_zddShow26CPFe, hs_zddShow126CPFf, hs_zddShow226CPFg, hs_zddShow326CPFh, hs_zddShow426CPFi, hs_zddShow526CPFj, hs_zddShow626CPFk, hs_zddShow726CPFl, hs_zddShow826CPFm, hs_zddShow926CPFn) {
        var hs_zddShow1026CPFo = new $hs.Thunk();
        hs_zddShow1026CPFo.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26CPFe, hs_zddShow126CPFf, hs_zddShow226CPFg, hs_zddShow326CPFh, hs_zddShow426CPFi, hs_zddShow526CPFj, hs_zddShow626CPFk, hs_zddShow726CPFl, hs_zddShow826CPFm, hs_zddShow926CPFn);
        };
        var hs_sat26CQ2d = new $hs.Func(1);
        hs_sat26CQ2d.evaluate = function (hs_x26CPFq) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1026CPFo, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPFq, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26CQ2d.notEvaluated) {
            return hs_sat26CQ2d.hscall();
        } else {
            return hs_sat26CQ2d;
        }
    };
    hs_zdcshowsPrec1425ur9c.evaluate = function (hs_zddShow26CPFU, hs_zddShow126CPFX, hs_zddShow226CPG0, hs_zddShow326CPG3, hs_zddShow426CPG6, hs_zddShow526CPG9, hs_zddShow626CPGc, hs_zddShow726CPGf, hs_zddShow826CPGi, hs_zddShow926CPGl, hs_zddShow1026CPGo, hs_ds26CPGD, hs_ds126CPFH, hs_s26CPGC) {
        var hs_wild26CQ2f = hs_ds126CPFH;
        if (hs_ds126CPFH.notEvaluated) {
            hs_wild26CQ2f = hs_ds126CPFH.hscall();
        }
        var hs_a6826CPFV = hs_wild26CQ2f.data[0];
        var hs_b26CPFY = hs_wild26CQ2f.data[1];
        var hs_c26CPG1 = hs_wild26CQ2f.data[2];
        var hs_d26CPG4 = hs_wild26CQ2f.data[3];
        var hs_e26CPG7 = hs_wild26CQ2f.data[4];
        var hs_f26CPGa = hs_wild26CQ2f.data[5];
        var hs_g26CPGd = hs_wild26CQ2f.data[6];
        var hs_h26CPGg = hs_wild26CQ2f.data[7];
        var hs_i26CPGj = hs_wild26CQ2f.data[8];
        var hs_j26CPGm = hs_wild26CQ2f.data[9];
        var hs_k26CPGp = hs_wild26CQ2f.data[10];
        var hs_sat26CQ2g = new $hs.Thunk();
        hs_sat26CQ2g.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1026CPGo, $hs.modules.GHCziBase.hs_zzeroInt, hs_k26CPGp);
        };
        var hs_sat26CQ2h = new $hs.Data(2);
        hs_sat26CQ2h.data = [hs_sat26CQ2g, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26CQ2i = new $hs.Thunk();
        hs_sat26CQ2i.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow926CPGl, $hs.modules.GHCziBase.hs_zzeroInt, hs_j26CPGm);
        };
        var hs_sat26CQ2j = new $hs.Data(2);
        hs_sat26CQ2j.data = [hs_sat26CQ2i, hs_sat26CQ2h];
        var hs_sat26CQ2k = new $hs.Thunk();
        hs_sat26CQ2k.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow826CPGi, $hs.modules.GHCziBase.hs_zzeroInt, hs_i26CPGj);
        };
        var hs_sat26CQ2l = new $hs.Data(2);
        hs_sat26CQ2l.data = [hs_sat26CQ2k, hs_sat26CQ2j];
        var hs_sat26CQ2m = new $hs.Thunk();
        hs_sat26CQ2m.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow726CPGf, $hs.modules.GHCziBase.hs_zzeroInt, hs_h26CPGg);
        };
        var hs_sat26CQ2n = new $hs.Data(2);
        hs_sat26CQ2n.data = [hs_sat26CQ2m, hs_sat26CQ2l];
        var hs_sat26CQ2o = new $hs.Thunk();
        hs_sat26CQ2o.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow626CPGc, $hs.modules.GHCziBase.hs_zzeroInt, hs_g26CPGd);
        };
        var hs_sat26CQ2p = new $hs.Data(2);
        hs_sat26CQ2p.data = [hs_sat26CQ2o, hs_sat26CQ2n];
        var hs_sat26CQ2q = new $hs.Thunk();
        hs_sat26CQ2q.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow526CPG9, $hs.modules.GHCziBase.hs_zzeroInt, hs_f26CPGa);
        };
        var hs_sat26CQ2r = new $hs.Data(2);
        hs_sat26CQ2r.data = [hs_sat26CQ2q, hs_sat26CQ2p];
        var hs_sat26CQ2s = new $hs.Thunk();
        hs_sat26CQ2s.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426CPG6, $hs.modules.GHCziBase.hs_zzeroInt, hs_e26CPG7);
        };
        var hs_sat26CQ2t = new $hs.Data(2);
        hs_sat26CQ2t.data = [hs_sat26CQ2s, hs_sat26CQ2r];
        var hs_sat26CQ2u = new $hs.Thunk();
        hs_sat26CQ2u.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326CPG3, $hs.modules.GHCziBase.hs_zzeroInt, hs_d26CPG4);
        };
        var hs_sat26CQ2v = new $hs.Data(2);
        hs_sat26CQ2v.data = [hs_sat26CQ2u, hs_sat26CQ2t];
        var hs_sat26CQ2w = new $hs.Thunk();
        hs_sat26CQ2w.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226CPG0, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26CPG1);
        };
        var hs_sat26CQ2x = new $hs.Data(2);
        hs_sat26CQ2x.data = [hs_sat26CQ2w, hs_sat26CQ2v];
        var hs_sat26CQ2y = new $hs.Thunk();
        hs_sat26CQ2y.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126CPFX, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26CPFY);
        };
        var hs_sat26CQ2z = new $hs.Data(2);
        hs_sat26CQ2z.data = [hs_sat26CQ2y, hs_sat26CQ2x];
        var hs_sat26CQ2A = new $hs.Thunk();
        hs_sat26CQ2A.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26CPFU, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6826CPFV);
        };
        var hs_sat26CQ2e = new $hs.Data(2);
        hs_sat26CQ2e.data = [hs_sat26CQ2A, hs_sat26CQ2z];
        return hs_showzutuple25rqsS.hscall(hs_sat26CQ2e, hs_s26CPGC);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26CPGR, hs_zddShow126CPGS, hs_zddShow226CPGT, hs_zddShow326CPGU, hs_zddShow426CPGV, hs_zddShow526CPGW, hs_zddShow626CPGX, hs_zddShow726CPGY, hs_zddShow826CPGZ, hs_zddShow926CPH0, hs_zddShow1026CPH1) {
        var hs_sat26CQ2C = new $hs.Thunk();
        hs_sat26CQ2C.evaluateOnce = function () {
            return hs_zdcshowList1525urao.hscall(hs_zddShow26CPGR, hs_zddShow126CPGS, hs_zddShow226CPGT, hs_zddShow326CPGU, hs_zddShow426CPGV, hs_zddShow526CPGW, hs_zddShow626CPGX, hs_zddShow726CPGY, hs_zddShow826CPGZ, hs_zddShow926CPH0, hs_zddShow1026CPH1);
        };
        var hs_sat26CQ2D = new $hs.Thunk();
        hs_sat26CQ2D.evaluateOnce = function () {
            return hs_zdcshow1525urap.hscall(hs_zddShow26CPGR, hs_zddShow126CPGS, hs_zddShow226CPGT, hs_zddShow326CPGU, hs_zddShow426CPGV, hs_zddShow526CPGW, hs_zddShow626CPGX, hs_zddShow726CPGY, hs_zddShow826CPGZ, hs_zddShow926CPH0, hs_zddShow1026CPH1);
        };
        var hs_sat26CQ2B = new $hs.Func(3);
        hs_sat26CQ2B.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec1425ur9c.hscall(hs_zddShow26CPGR, hs_zddShow126CPGS, hs_zddShow226CPGT, hs_zddShow326CPGU, hs_zddShow426CPGV, hs_zddShow526CPGW, hs_zddShow626CPGX, hs_zddShow726CPGY, hs_zddShow826CPGZ, hs_zddShow926CPH0, hs_zddShow1026CPH1, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CQ2B, hs_sat26CQ2D, hs_sat26CQ2C];
        return $res;
    };
    hs_zdcshowList1525urao.evaluate = function (hs_zddShow26CPHh, hs_zddShow126CPHi, hs_zddShow226CPHj, hs_zddShow326CPHk, hs_zddShow426CPHl, hs_zddShow526CPHm, hs_zddShow626CPHn, hs_zddShow726CPHo, hs_zddShow826CPHp, hs_zddShow926CPHq, hs_zddShow1026CPHr) {
        var hs_zddShow1126CPHs = new $hs.Thunk();
        hs_zddShow1126CPHs.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26CPHh, hs_zddShow126CPHi, hs_zddShow226CPHj, hs_zddShow326CPHk, hs_zddShow426CPHl, hs_zddShow526CPHm, hs_zddShow626CPHn, hs_zddShow726CPHo, hs_zddShow826CPHp, hs_zddShow926CPHq, hs_zddShow1026CPHr);
        };
        var hs_sat26CPHy = new $hs.Thunk();
        hs_sat26CPHy.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1126CPHs, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26CPHy);
    };
    hs_zdcshow1525urap.evaluate = function (hs_zddShow26CPHL, hs_zddShow126CPHM, hs_zddShow226CPHN, hs_zddShow326CPHO, hs_zddShow426CPHP, hs_zddShow526CPHQ, hs_zddShow626CPHR, hs_zddShow726CPHS, hs_zddShow826CPHT, hs_zddShow926CPHU, hs_zddShow1026CPHV) {
        var hs_zddShow1126CPHW = new $hs.Thunk();
        hs_zddShow1126CPHW.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26CPHL, hs_zddShow126CPHM, hs_zddShow226CPHN, hs_zddShow326CPHO, hs_zddShow426CPHP, hs_zddShow526CPHQ, hs_zddShow626CPHR, hs_zddShow726CPHS, hs_zddShow826CPHT, hs_zddShow926CPHU, hs_zddShow1026CPHV);
        };
        var hs_sat26CQ2E = new $hs.Func(1);
        hs_sat26CQ2E.evaluate = function (hs_x26CPHY) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1126CPHW, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPHY, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26CQ2E.notEvaluated) {
            return hs_sat26CQ2E.hscall();
        } else {
            return hs_sat26CQ2E;
        }
    };
    hs_zdcshowsPrec1525urbK.evaluate = function (hs_zddShow26CPIu, hs_zddShow126CPIx, hs_zddShow226CPIA, hs_zddShow326CPID, hs_zddShow426CPIG, hs_zddShow526CPIJ, hs_zddShow626CPIM, hs_zddShow726CPIP, hs_zddShow826CPIS, hs_zddShow926CPIV, hs_zddShow1026CPIY, hs_zddShow1126CPJ1, hs_ds26CPJh, hs_ds126CPIg, hs_s26CPJg) {
        var hs_wild26CQ2G = hs_ds126CPIg;
        if (hs_ds126CPIg.notEvaluated) {
            hs_wild26CQ2G = hs_ds126CPIg.hscall();
        }
        var hs_a6826CPIv = hs_wild26CQ2G.data[0];
        var hs_b26CPIy = hs_wild26CQ2G.data[1];
        var hs_c26CPIB = hs_wild26CQ2G.data[2];
        var hs_d26CPIE = hs_wild26CQ2G.data[3];
        var hs_e26CPIH = hs_wild26CQ2G.data[4];
        var hs_f26CPIK = hs_wild26CQ2G.data[5];
        var hs_g26CPIN = hs_wild26CQ2G.data[6];
        var hs_h26CPIQ = hs_wild26CQ2G.data[7];
        var hs_i26CPIT = hs_wild26CQ2G.data[8];
        var hs_j26CPIW = hs_wild26CQ2G.data[9];
        var hs_k26CPIZ = hs_wild26CQ2G.data[10];
        var hs_l26CPJ2 = hs_wild26CQ2G.data[11];
        var hs_sat26CQ2H = new $hs.Thunk();
        hs_sat26CQ2H.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1126CPJ1, $hs.modules.GHCziBase.hs_zzeroInt, hs_l26CPJ2);
        };
        var hs_sat26CQ2I = new $hs.Data(2);
        hs_sat26CQ2I.data = [hs_sat26CQ2H, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26CQ2J = new $hs.Thunk();
        hs_sat26CQ2J.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1026CPIY, $hs.modules.GHCziBase.hs_zzeroInt, hs_k26CPIZ);
        };
        var hs_sat26CQ2K = new $hs.Data(2);
        hs_sat26CQ2K.data = [hs_sat26CQ2J, hs_sat26CQ2I];
        var hs_sat26CQ2L = new $hs.Thunk();
        hs_sat26CQ2L.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow926CPIV, $hs.modules.GHCziBase.hs_zzeroInt, hs_j26CPIW);
        };
        var hs_sat26CQ2M = new $hs.Data(2);
        hs_sat26CQ2M.data = [hs_sat26CQ2L, hs_sat26CQ2K];
        var hs_sat26CQ2N = new $hs.Thunk();
        hs_sat26CQ2N.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow826CPIS, $hs.modules.GHCziBase.hs_zzeroInt, hs_i26CPIT);
        };
        var hs_sat26CQ2O = new $hs.Data(2);
        hs_sat26CQ2O.data = [hs_sat26CQ2N, hs_sat26CQ2M];
        var hs_sat26CQ2P = new $hs.Thunk();
        hs_sat26CQ2P.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow726CPIP, $hs.modules.GHCziBase.hs_zzeroInt, hs_h26CPIQ);
        };
        var hs_sat26CQ2Q = new $hs.Data(2);
        hs_sat26CQ2Q.data = [hs_sat26CQ2P, hs_sat26CQ2O];
        var hs_sat26CQ2R = new $hs.Thunk();
        hs_sat26CQ2R.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow626CPIM, $hs.modules.GHCziBase.hs_zzeroInt, hs_g26CPIN);
        };
        var hs_sat26CQ2S = new $hs.Data(2);
        hs_sat26CQ2S.data = [hs_sat26CQ2R, hs_sat26CQ2Q];
        var hs_sat26CQ2T = new $hs.Thunk();
        hs_sat26CQ2T.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow526CPIJ, $hs.modules.GHCziBase.hs_zzeroInt, hs_f26CPIK);
        };
        var hs_sat26CQ2U = new $hs.Data(2);
        hs_sat26CQ2U.data = [hs_sat26CQ2T, hs_sat26CQ2S];
        var hs_sat26CQ2V = new $hs.Thunk();
        hs_sat26CQ2V.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426CPIG, $hs.modules.GHCziBase.hs_zzeroInt, hs_e26CPIH);
        };
        var hs_sat26CQ2W = new $hs.Data(2);
        hs_sat26CQ2W.data = [hs_sat26CQ2V, hs_sat26CQ2U];
        var hs_sat26CQ2X = new $hs.Thunk();
        hs_sat26CQ2X.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326CPID, $hs.modules.GHCziBase.hs_zzeroInt, hs_d26CPIE);
        };
        var hs_sat26CQ2Y = new $hs.Data(2);
        hs_sat26CQ2Y.data = [hs_sat26CQ2X, hs_sat26CQ2W];
        var hs_sat26CQ2Z = new $hs.Thunk();
        hs_sat26CQ2Z.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226CPIA, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26CPIB);
        };
        var hs_sat26CQ30 = new $hs.Data(2);
        hs_sat26CQ30.data = [hs_sat26CQ2Z, hs_sat26CQ2Y];
        var hs_sat26CQ31 = new $hs.Thunk();
        hs_sat26CQ31.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126CPIx, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26CPIy);
        };
        var hs_sat26CQ32 = new $hs.Data(2);
        hs_sat26CQ32.data = [hs_sat26CQ31, hs_sat26CQ30];
        var hs_sat26CQ33 = new $hs.Thunk();
        hs_sat26CQ33.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26CPIu, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6826CPIv);
        };
        var hs_sat26CQ2F = new $hs.Data(2);
        hs_sat26CQ2F.data = [hs_sat26CQ33, hs_sat26CQ32];
        return hs_showzutuple25rqsS.hscall(hs_sat26CQ2F, hs_s26CPJg);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26CPJw, hs_zddShow126CPJx, hs_zddShow226CPJy, hs_zddShow326CPJz, hs_zddShow426CPJA, hs_zddShow526CPJB, hs_zddShow626CPJC, hs_zddShow726CPJD, hs_zddShow826CPJE, hs_zddShow926CPJF, hs_zddShow1026CPJG, hs_zddShow1126CPJH) {
        var hs_sat26CQ35 = new $hs.Thunk();
        hs_sat26CQ35.evaluateOnce = function () {
            return hs_zdcshowList1625urd2.hscall(hs_zddShow26CPJw, hs_zddShow126CPJx, hs_zddShow226CPJy, hs_zddShow326CPJz, hs_zddShow426CPJA, hs_zddShow526CPJB, hs_zddShow626CPJC, hs_zddShow726CPJD, hs_zddShow826CPJE, hs_zddShow926CPJF, hs_zddShow1026CPJG, hs_zddShow1126CPJH);
        };
        var hs_sat26CQ36 = new $hs.Thunk();
        hs_sat26CQ36.evaluateOnce = function () {
            return hs_zdcshow1625urd3.hscall(hs_zddShow26CPJw, hs_zddShow126CPJx, hs_zddShow226CPJy, hs_zddShow326CPJz, hs_zddShow426CPJA, hs_zddShow526CPJB, hs_zddShow626CPJC, hs_zddShow726CPJD, hs_zddShow826CPJE, hs_zddShow926CPJF, hs_zddShow1026CPJG, hs_zddShow1126CPJH);
        };
        var hs_sat26CQ34 = new $hs.Func(3);
        hs_sat26CQ34.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec1525urbK.hscall(hs_zddShow26CPJw, hs_zddShow126CPJx, hs_zddShow226CPJy, hs_zddShow326CPJz, hs_zddShow426CPJA, hs_zddShow526CPJB, hs_zddShow626CPJC, hs_zddShow726CPJD, hs_zddShow826CPJE, hs_zddShow926CPJF, hs_zddShow1026CPJG, hs_zddShow1126CPJH, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CQ34, hs_sat26CQ36, hs_sat26CQ35];
        return $res;
    };
    hs_zdcshowList1625urd2.evaluate = function (hs_zddShow26CPJY, hs_zddShow126CPJZ, hs_zddShow226CPK0, hs_zddShow326CPK1, hs_zddShow426CPK2, hs_zddShow526CPK3, hs_zddShow626CPK4, hs_zddShow726CPK5, hs_zddShow826CPK6, hs_zddShow926CPK7, hs_zddShow1026CPK8, hs_zddShow1126CPK9) {
        var hs_zddShow1226CPKa = new $hs.Thunk();
        hs_zddShow1226CPKa.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26CPJY, hs_zddShow126CPJZ, hs_zddShow226CPK0, hs_zddShow326CPK1, hs_zddShow426CPK2, hs_zddShow526CPK3, hs_zddShow626CPK4, hs_zddShow726CPK5, hs_zddShow826CPK6, hs_zddShow926CPK7, hs_zddShow1026CPK8, hs_zddShow1126CPK9);
        };
        var hs_sat26CPKg = new $hs.Thunk();
        hs_sat26CPKg.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1226CPKa, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26CPKg);
    };
    hs_zdcshow1625urd3.evaluate = function (hs_zddShow26CPKu, hs_zddShow126CPKv, hs_zddShow226CPKw, hs_zddShow326CPKx, hs_zddShow426CPKy, hs_zddShow526CPKz, hs_zddShow626CPKA, hs_zddShow726CPKB, hs_zddShow826CPKC, hs_zddShow926CPKD, hs_zddShow1026CPKE, hs_zddShow1126CPKF) {
        var hs_zddShow1226CPKG = new $hs.Thunk();
        hs_zddShow1226CPKG.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26CPKu, hs_zddShow126CPKv, hs_zddShow226CPKw, hs_zddShow326CPKx, hs_zddShow426CPKy, hs_zddShow526CPKz, hs_zddShow626CPKA, hs_zddShow726CPKB, hs_zddShow826CPKC, hs_zddShow926CPKD, hs_zddShow1026CPKE, hs_zddShow1126CPKF);
        };
        var hs_sat26CQ37 = new $hs.Func(1);
        hs_sat26CQ37.evaluate = function (hs_x26CPKI) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1226CPKG, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPKI, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26CQ37.notEvaluated) {
            return hs_sat26CQ37.hscall();
        } else {
            return hs_sat26CQ37;
        }
    };
    hs_zdcshowsPrec1625ureu.evaluate = function (hs_zddShow26CPLg, hs_zddShow126CPLj, hs_zddShow226CPLm, hs_zddShow326CPLp, hs_zddShow426CPLs, hs_zddShow526CPLv, hs_zddShow626CPLy, hs_zddShow726CPLB, hs_zddShow826CPLE, hs_zddShow926CPLH, hs_zddShow1026CPLK, hs_zddShow1126CPLN, hs_zddShow1226CPLQ, hs_ds26CPM7, hs_ds126CPL1, hs_s26CPM6) {
        var hs_wild26CQ39 = hs_ds126CPL1;
        if (hs_ds126CPL1.notEvaluated) {
            hs_wild26CQ39 = hs_ds126CPL1.hscall();
        }
        var hs_a6826CPLh = hs_wild26CQ39.data[0];
        var hs_b26CPLk = hs_wild26CQ39.data[1];
        var hs_c26CPLn = hs_wild26CQ39.data[2];
        var hs_d26CPLq = hs_wild26CQ39.data[3];
        var hs_e26CPLt = hs_wild26CQ39.data[4];
        var hs_f26CPLw = hs_wild26CQ39.data[5];
        var hs_g26CPLz = hs_wild26CQ39.data[6];
        var hs_h26CPLC = hs_wild26CQ39.data[7];
        var hs_i26CPLF = hs_wild26CQ39.data[8];
        var hs_j26CPLI = hs_wild26CQ39.data[9];
        var hs_k26CPLL = hs_wild26CQ39.data[10];
        var hs_l26CPLO = hs_wild26CQ39.data[11];
        var hs_m26CPLR = hs_wild26CQ39.data[12];
        var hs_sat26CQ3a = new $hs.Thunk();
        hs_sat26CQ3a.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1226CPLQ, $hs.modules.GHCziBase.hs_zzeroInt, hs_m26CPLR);
        };
        var hs_sat26CQ3b = new $hs.Data(2);
        hs_sat26CQ3b.data = [hs_sat26CQ3a, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26CQ3c = new $hs.Thunk();
        hs_sat26CQ3c.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1126CPLN, $hs.modules.GHCziBase.hs_zzeroInt, hs_l26CPLO);
        };
        var hs_sat26CQ3d = new $hs.Data(2);
        hs_sat26CQ3d.data = [hs_sat26CQ3c, hs_sat26CQ3b];
        var hs_sat26CQ3e = new $hs.Thunk();
        hs_sat26CQ3e.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1026CPLK, $hs.modules.GHCziBase.hs_zzeroInt, hs_k26CPLL);
        };
        var hs_sat26CQ3f = new $hs.Data(2);
        hs_sat26CQ3f.data = [hs_sat26CQ3e, hs_sat26CQ3d];
        var hs_sat26CQ3g = new $hs.Thunk();
        hs_sat26CQ3g.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow926CPLH, $hs.modules.GHCziBase.hs_zzeroInt, hs_j26CPLI);
        };
        var hs_sat26CQ3h = new $hs.Data(2);
        hs_sat26CQ3h.data = [hs_sat26CQ3g, hs_sat26CQ3f];
        var hs_sat26CQ3i = new $hs.Thunk();
        hs_sat26CQ3i.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow826CPLE, $hs.modules.GHCziBase.hs_zzeroInt, hs_i26CPLF);
        };
        var hs_sat26CQ3j = new $hs.Data(2);
        hs_sat26CQ3j.data = [hs_sat26CQ3i, hs_sat26CQ3h];
        var hs_sat26CQ3k = new $hs.Thunk();
        hs_sat26CQ3k.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow726CPLB, $hs.modules.GHCziBase.hs_zzeroInt, hs_h26CPLC);
        };
        var hs_sat26CQ3l = new $hs.Data(2);
        hs_sat26CQ3l.data = [hs_sat26CQ3k, hs_sat26CQ3j];
        var hs_sat26CQ3m = new $hs.Thunk();
        hs_sat26CQ3m.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow626CPLy, $hs.modules.GHCziBase.hs_zzeroInt, hs_g26CPLz);
        };
        var hs_sat26CQ3n = new $hs.Data(2);
        hs_sat26CQ3n.data = [hs_sat26CQ3m, hs_sat26CQ3l];
        var hs_sat26CQ3o = new $hs.Thunk();
        hs_sat26CQ3o.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow526CPLv, $hs.modules.GHCziBase.hs_zzeroInt, hs_f26CPLw);
        };
        var hs_sat26CQ3p = new $hs.Data(2);
        hs_sat26CQ3p.data = [hs_sat26CQ3o, hs_sat26CQ3n];
        var hs_sat26CQ3q = new $hs.Thunk();
        hs_sat26CQ3q.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426CPLs, $hs.modules.GHCziBase.hs_zzeroInt, hs_e26CPLt);
        };
        var hs_sat26CQ3r = new $hs.Data(2);
        hs_sat26CQ3r.data = [hs_sat26CQ3q, hs_sat26CQ3p];
        var hs_sat26CQ3s = new $hs.Thunk();
        hs_sat26CQ3s.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326CPLp, $hs.modules.GHCziBase.hs_zzeroInt, hs_d26CPLq);
        };
        var hs_sat26CQ3t = new $hs.Data(2);
        hs_sat26CQ3t.data = [hs_sat26CQ3s, hs_sat26CQ3r];
        var hs_sat26CQ3u = new $hs.Thunk();
        hs_sat26CQ3u.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226CPLm, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26CPLn);
        };
        var hs_sat26CQ3v = new $hs.Data(2);
        hs_sat26CQ3v.data = [hs_sat26CQ3u, hs_sat26CQ3t];
        var hs_sat26CQ3w = new $hs.Thunk();
        hs_sat26CQ3w.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126CPLj, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26CPLk);
        };
        var hs_sat26CQ3x = new $hs.Data(2);
        hs_sat26CQ3x.data = [hs_sat26CQ3w, hs_sat26CQ3v];
        var hs_sat26CQ3y = new $hs.Thunk();
        hs_sat26CQ3y.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26CPLg, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6826CPLh);
        };
        var hs_sat26CQ38 = new $hs.Data(2);
        hs_sat26CQ38.data = [hs_sat26CQ3y, hs_sat26CQ3x];
        return hs_showzutuple25rqsS.hscall(hs_sat26CQ38, hs_s26CPM6);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26CPMn, hs_zddShow126CPMo, hs_zddShow226CPMp, hs_zddShow326CPMq, hs_zddShow426CPMr, hs_zddShow526CPMs, hs_zddShow626CPMt, hs_zddShow726CPMu, hs_zddShow826CPMv, hs_zddShow926CPMw, hs_zddShow1026CPMx, hs_zddShow1126CPMy, hs_zddShow1226CPMz) {
        var hs_sat26CQ3A = new $hs.Thunk();
        hs_sat26CQ3A.evaluateOnce = function () {
            return hs_zdcshowList1725urfS.hscall(hs_zddShow26CPMn, hs_zddShow126CPMo, hs_zddShow226CPMp, hs_zddShow326CPMq, hs_zddShow426CPMr, hs_zddShow526CPMs, hs_zddShow626CPMt, hs_zddShow726CPMu, hs_zddShow826CPMv, hs_zddShow926CPMw, hs_zddShow1026CPMx, hs_zddShow1126CPMy, hs_zddShow1226CPMz);
        };
        var hs_sat26CQ3B = new $hs.Thunk();
        hs_sat26CQ3B.evaluateOnce = function () {
            return hs_zdcshow1725urfT.hscall(hs_zddShow26CPMn, hs_zddShow126CPMo, hs_zddShow226CPMp, hs_zddShow326CPMq, hs_zddShow426CPMr, hs_zddShow526CPMs, hs_zddShow626CPMt, hs_zddShow726CPMu, hs_zddShow826CPMv, hs_zddShow926CPMw, hs_zddShow1026CPMx, hs_zddShow1126CPMy, hs_zddShow1226CPMz);
        };
        var hs_sat26CQ3z = new $hs.Func(3);
        hs_sat26CQ3z.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec1625ureu.hscall(hs_zddShow26CPMn, hs_zddShow126CPMo, hs_zddShow226CPMp, hs_zddShow326CPMq, hs_zddShow426CPMr, hs_zddShow526CPMs, hs_zddShow626CPMt, hs_zddShow726CPMu, hs_zddShow826CPMv, hs_zddShow926CPMw, hs_zddShow1026CPMx, hs_zddShow1126CPMy, hs_zddShow1226CPMz, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CQ3z, hs_sat26CQ3B, hs_sat26CQ3A];
        return $res;
    };
    hs_zdcshowList1725urfS.evaluate = function (hs_zddShow26CPMR, hs_zddShow126CPMS, hs_zddShow226CPMT, hs_zddShow326CPMU, hs_zddShow426CPMV, hs_zddShow526CPMW, hs_zddShow626CPMX, hs_zddShow726CPMY, hs_zddShow826CPMZ, hs_zddShow926CPN0, hs_zddShow1026CPN1, hs_zddShow1126CPN2, hs_zddShow1226CPN3) {
        var hs_zddShow1326CPN4 = new $hs.Thunk();
        hs_zddShow1326CPN4.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26CPMR, hs_zddShow126CPMS, hs_zddShow226CPMT, hs_zddShow326CPMU, hs_zddShow426CPMV, hs_zddShow526CPMW, hs_zddShow626CPMX, hs_zddShow726CPMY, hs_zddShow826CPMZ, hs_zddShow926CPN0, hs_zddShow1026CPN1, hs_zddShow1126CPN2, hs_zddShow1226CPN3);
        };
        var hs_sat26CPNa = new $hs.Thunk();
        hs_sat26CPNa.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1326CPN4, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26CPNa);
    };
    hs_zdcshow1725urfT.evaluate = function (hs_zddShow26CPNp, hs_zddShow126CPNq, hs_zddShow226CPNr, hs_zddShow326CPNs, hs_zddShow426CPNt, hs_zddShow526CPNu, hs_zddShow626CPNv, hs_zddShow726CPNw, hs_zddShow826CPNx, hs_zddShow926CPNy, hs_zddShow1026CPNz, hs_zddShow1126CPNA, hs_zddShow1226CPNB) {
        var hs_zddShow1326CPNC = new $hs.Thunk();
        hs_zddShow1326CPNC.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26CPNp, hs_zddShow126CPNq, hs_zddShow226CPNr, hs_zddShow326CPNs, hs_zddShow426CPNt, hs_zddShow526CPNu, hs_zddShow626CPNv, hs_zddShow726CPNw, hs_zddShow826CPNx, hs_zddShow926CPNy, hs_zddShow1026CPNz, hs_zddShow1126CPNA, hs_zddShow1226CPNB);
        };
        var hs_sat26CQ3C = new $hs.Func(1);
        hs_sat26CQ3C.evaluate = function (hs_x26CPNE) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1326CPNC, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPNE, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26CQ3C.notEvaluated) {
            return hs_sat26CQ3C.hscall();
        } else {
            return hs_sat26CQ3C;
        }
    };
    hs_zdcshowsPrec1725urhq.evaluate = function (hs_zddShow26CPOe, hs_zddShow126CPOh, hs_zddShow226CPOk, hs_zddShow326CPOn, hs_zddShow426CPOq, hs_zddShow526CPOt, hs_zddShow626CPOw, hs_zddShow726CPOz, hs_zddShow826CPOC, hs_zddShow926CPOF, hs_zddShow1026CPOI, hs_zddShow1126CPOL, hs_zddShow1226CPOO, hs_zddShow1326CPOR, hs_ds26CPP9, hs_ds126CPNY, hs_s26CPP8) {
        var hs_wild26CQ3E = hs_ds126CPNY;
        if (hs_ds126CPNY.notEvaluated) {
            hs_wild26CQ3E = hs_ds126CPNY.hscall();
        }
        var hs_a6826CPOf = hs_wild26CQ3E.data[0];
        var hs_b26CPOi = hs_wild26CQ3E.data[1];
        var hs_c26CPOl = hs_wild26CQ3E.data[2];
        var hs_d26CPOo = hs_wild26CQ3E.data[3];
        var hs_e26CPOr = hs_wild26CQ3E.data[4];
        var hs_f26CPOu = hs_wild26CQ3E.data[5];
        var hs_g26CPOx = hs_wild26CQ3E.data[6];
        var hs_h26CPOA = hs_wild26CQ3E.data[7];
        var hs_i26CPOD = hs_wild26CQ3E.data[8];
        var hs_j26CPOG = hs_wild26CQ3E.data[9];
        var hs_k26CPOJ = hs_wild26CQ3E.data[10];
        var hs_l26CPOM = hs_wild26CQ3E.data[11];
        var hs_m26CPOP = hs_wild26CQ3E.data[12];
        var hs_n26CPOS = hs_wild26CQ3E.data[13];
        var hs_sat26CQ3F = new $hs.Thunk();
        hs_sat26CQ3F.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1326CPOR, $hs.modules.GHCziBase.hs_zzeroInt, hs_n26CPOS);
        };
        var hs_sat26CQ3G = new $hs.Data(2);
        hs_sat26CQ3G.data = [hs_sat26CQ3F, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26CQ3H = new $hs.Thunk();
        hs_sat26CQ3H.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1226CPOO, $hs.modules.GHCziBase.hs_zzeroInt, hs_m26CPOP);
        };
        var hs_sat26CQ3I = new $hs.Data(2);
        hs_sat26CQ3I.data = [hs_sat26CQ3H, hs_sat26CQ3G];
        var hs_sat26CQ3J = new $hs.Thunk();
        hs_sat26CQ3J.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1126CPOL, $hs.modules.GHCziBase.hs_zzeroInt, hs_l26CPOM);
        };
        var hs_sat26CQ3K = new $hs.Data(2);
        hs_sat26CQ3K.data = [hs_sat26CQ3J, hs_sat26CQ3I];
        var hs_sat26CQ3L = new $hs.Thunk();
        hs_sat26CQ3L.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1026CPOI, $hs.modules.GHCziBase.hs_zzeroInt, hs_k26CPOJ);
        };
        var hs_sat26CQ3M = new $hs.Data(2);
        hs_sat26CQ3M.data = [hs_sat26CQ3L, hs_sat26CQ3K];
        var hs_sat26CQ3N = new $hs.Thunk();
        hs_sat26CQ3N.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow926CPOF, $hs.modules.GHCziBase.hs_zzeroInt, hs_j26CPOG);
        };
        var hs_sat26CQ3O = new $hs.Data(2);
        hs_sat26CQ3O.data = [hs_sat26CQ3N, hs_sat26CQ3M];
        var hs_sat26CQ3P = new $hs.Thunk();
        hs_sat26CQ3P.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow826CPOC, $hs.modules.GHCziBase.hs_zzeroInt, hs_i26CPOD);
        };
        var hs_sat26CQ3Q = new $hs.Data(2);
        hs_sat26CQ3Q.data = [hs_sat26CQ3P, hs_sat26CQ3O];
        var hs_sat26CQ3R = new $hs.Thunk();
        hs_sat26CQ3R.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow726CPOz, $hs.modules.GHCziBase.hs_zzeroInt, hs_h26CPOA);
        };
        var hs_sat26CQ3S = new $hs.Data(2);
        hs_sat26CQ3S.data = [hs_sat26CQ3R, hs_sat26CQ3Q];
        var hs_sat26CQ3T = new $hs.Thunk();
        hs_sat26CQ3T.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow626CPOw, $hs.modules.GHCziBase.hs_zzeroInt, hs_g26CPOx);
        };
        var hs_sat26CQ3U = new $hs.Data(2);
        hs_sat26CQ3U.data = [hs_sat26CQ3T, hs_sat26CQ3S];
        var hs_sat26CQ3V = new $hs.Thunk();
        hs_sat26CQ3V.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow526CPOt, $hs.modules.GHCziBase.hs_zzeroInt, hs_f26CPOu);
        };
        var hs_sat26CQ3W = new $hs.Data(2);
        hs_sat26CQ3W.data = [hs_sat26CQ3V, hs_sat26CQ3U];
        var hs_sat26CQ3X = new $hs.Thunk();
        hs_sat26CQ3X.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426CPOq, $hs.modules.GHCziBase.hs_zzeroInt, hs_e26CPOr);
        };
        var hs_sat26CQ3Y = new $hs.Data(2);
        hs_sat26CQ3Y.data = [hs_sat26CQ3X, hs_sat26CQ3W];
        var hs_sat26CQ3Z = new $hs.Thunk();
        hs_sat26CQ3Z.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326CPOn, $hs.modules.GHCziBase.hs_zzeroInt, hs_d26CPOo);
        };
        var hs_sat26CQ40 = new $hs.Data(2);
        hs_sat26CQ40.data = [hs_sat26CQ3Z, hs_sat26CQ3Y];
        var hs_sat26CQ41 = new $hs.Thunk();
        hs_sat26CQ41.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226CPOk, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26CPOl);
        };
        var hs_sat26CQ42 = new $hs.Data(2);
        hs_sat26CQ42.data = [hs_sat26CQ41, hs_sat26CQ40];
        var hs_sat26CQ43 = new $hs.Thunk();
        hs_sat26CQ43.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126CPOh, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26CPOi);
        };
        var hs_sat26CQ44 = new $hs.Data(2);
        hs_sat26CQ44.data = [hs_sat26CQ43, hs_sat26CQ42];
        var hs_sat26CQ45 = new $hs.Thunk();
        hs_sat26CQ45.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26CPOe, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6826CPOf);
        };
        var hs_sat26CQ3D = new $hs.Data(2);
        hs_sat26CQ3D.data = [hs_sat26CQ45, hs_sat26CQ44];
        return hs_showzutuple25rqsS.hscall(hs_sat26CQ3D, hs_s26CPP8);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26CPPq, hs_zddShow126CPPr, hs_zddShow226CPPs, hs_zddShow326CPPt, hs_zddShow426CPPu, hs_zddShow526CPPv, hs_zddShow626CPPw, hs_zddShow726CPPx, hs_zddShow826CPPy, hs_zddShow926CPPz, hs_zddShow1026CPPA, hs_zddShow1126CPPB, hs_zddShow1226CPPC, hs_zddShow1326CPPD) {
        var hs_sat26CQ47 = new $hs.Thunk();
        hs_sat26CQ47.evaluateOnce = function () {
            return hs_zdcshowList1825uriU.hscall(hs_zddShow26CPPq, hs_zddShow126CPPr, hs_zddShow226CPPs, hs_zddShow326CPPt, hs_zddShow426CPPu, hs_zddShow526CPPv, hs_zddShow626CPPw, hs_zddShow726CPPx, hs_zddShow826CPPy, hs_zddShow926CPPz, hs_zddShow1026CPPA, hs_zddShow1126CPPB, hs_zddShow1226CPPC, hs_zddShow1326CPPD);
        };
        var hs_sat26CQ48 = new $hs.Thunk();
        hs_sat26CQ48.evaluateOnce = function () {
            return hs_zdcshow1825uriV.hscall(hs_zddShow26CPPq, hs_zddShow126CPPr, hs_zddShow226CPPs, hs_zddShow326CPPt, hs_zddShow426CPPu, hs_zddShow526CPPv, hs_zddShow626CPPw, hs_zddShow726CPPx, hs_zddShow826CPPy, hs_zddShow926CPPz, hs_zddShow1026CPPA, hs_zddShow1126CPPB, hs_zddShow1226CPPC, hs_zddShow1326CPPD);
        };
        var hs_sat26CQ46 = new $hs.Func(3);
        hs_sat26CQ46.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec1725urhq.hscall(hs_zddShow26CPPq, hs_zddShow126CPPr, hs_zddShow226CPPs, hs_zddShow326CPPt, hs_zddShow426CPPu, hs_zddShow526CPPv, hs_zddShow626CPPw, hs_zddShow726CPPx, hs_zddShow826CPPy, hs_zddShow926CPPz, hs_zddShow1026CPPA, hs_zddShow1126CPPB, hs_zddShow1226CPPC, hs_zddShow1326CPPD, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CQ46, hs_sat26CQ48, hs_sat26CQ47];
        return $res;
    };
    hs_zdcshowList1825uriU.evaluate = function (hs_zddShow26CPPW, hs_zddShow126CPPX, hs_zddShow226CPPY, hs_zddShow326CPPZ, hs_zddShow426CPQ0, hs_zddShow526CPQ1, hs_zddShow626CPQ2, hs_zddShow726CPQ3, hs_zddShow826CPQ4, hs_zddShow926CPQ5, hs_zddShow1026CPQ6, hs_zddShow1126CPQ7, hs_zddShow1226CPQ8, hs_zddShow1326CPQ9) {
        var hs_zddShow1426CPQa = new $hs.Thunk();
        hs_zddShow1426CPQa.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26CPPW, hs_zddShow126CPPX, hs_zddShow226CPPY, hs_zddShow326CPPZ, hs_zddShow426CPQ0, hs_zddShow526CPQ1, hs_zddShow626CPQ2, hs_zddShow726CPQ3, hs_zddShow826CPQ4, hs_zddShow926CPQ5, hs_zddShow1026CPQ6, hs_zddShow1126CPQ7, hs_zddShow1226CPQ8, hs_zddShow1326CPQ9);
        };
        var hs_sat26CPQg = new $hs.Thunk();
        hs_sat26CPQg.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1426CPQa, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26CPQg);
    };
    hs_zdcshow1825uriV.evaluate = function (hs_zddShow26CPQw, hs_zddShow126CPQx, hs_zddShow226CPQy, hs_zddShow326CPQz, hs_zddShow426CPQA, hs_zddShow526CPQB, hs_zddShow626CPQC, hs_zddShow726CPQD, hs_zddShow826CPQE, hs_zddShow926CPQF, hs_zddShow1026CPQG, hs_zddShow1126CPQH, hs_zddShow1226CPQI, hs_zddShow1326CPQJ) {
        var hs_zddShow1426CPQK = new $hs.Thunk();
        hs_zddShow1426CPQK.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26CPQw, hs_zddShow126CPQx, hs_zddShow226CPQy, hs_zddShow326CPQz, hs_zddShow426CPQA, hs_zddShow526CPQB, hs_zddShow626CPQC, hs_zddShow726CPQD, hs_zddShow826CPQE, hs_zddShow926CPQF, hs_zddShow1026CPQG, hs_zddShow1126CPQH, hs_zddShow1226CPQI, hs_zddShow1326CPQJ);
        };
        var hs_sat26CQ49 = new $hs.Func(1);
        hs_sat26CQ49.evaluate = function (hs_x26CPQM) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1426CPQK, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPQM, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26CQ49.notEvaluated) {
            return hs_sat26CQ49.hscall();
        } else {
            return hs_sat26CQ49;
        }
    };
    hs_zdcshowsPrec1825urky.evaluate = function (hs_zddShow26CPRo, hs_zddShow126CPRr, hs_zddShow226CPRu, hs_zddShow326CPRx, hs_zddShow426CPRA, hs_zddShow526CPRD, hs_zddShow626CPRG, hs_zddShow726CPRJ, hs_zddShow826CPRM, hs_zddShow926CPRP, hs_zddShow1026CPRS, hs_zddShow1126CPRV, hs_zddShow1226CPRY, hs_zddShow1326CPS1, hs_zddShow1426CPS4, hs_ds26CPSn, hs_ds126CPR7, hs_s26CPSm) {
        var hs_wild26CQ4b = hs_ds126CPR7;
        if (hs_ds126CPR7.notEvaluated) {
            hs_wild26CQ4b = hs_ds126CPR7.hscall();
        }
        var hs_a6826CPRp = hs_wild26CQ4b.data[0];
        var hs_b26CPRs = hs_wild26CQ4b.data[1];
        var hs_c26CPRv = hs_wild26CQ4b.data[2];
        var hs_d26CPRy = hs_wild26CQ4b.data[3];
        var hs_e26CPRB = hs_wild26CQ4b.data[4];
        var hs_f26CPRE = hs_wild26CQ4b.data[5];
        var hs_g26CPRH = hs_wild26CQ4b.data[6];
        var hs_h26CPRK = hs_wild26CQ4b.data[7];
        var hs_i26CPRN = hs_wild26CQ4b.data[8];
        var hs_j26CPRQ = hs_wild26CQ4b.data[9];
        var hs_k26CPRT = hs_wild26CQ4b.data[10];
        var hs_l26CPRW = hs_wild26CQ4b.data[11];
        var hs_m26CPRZ = hs_wild26CQ4b.data[12];
        var hs_n26CPS2 = hs_wild26CQ4b.data[13];
        var hs_o26CPS5 = hs_wild26CQ4b.data[14];
        var hs_sat26CQ4c = new $hs.Thunk();
        hs_sat26CQ4c.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1426CPS4, $hs.modules.GHCziBase.hs_zzeroInt, hs_o26CPS5);
        };
        var hs_sat26CQ4d = new $hs.Data(2);
        hs_sat26CQ4d.data = [hs_sat26CQ4c, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26CQ4e = new $hs.Thunk();
        hs_sat26CQ4e.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1326CPS1, $hs.modules.GHCziBase.hs_zzeroInt, hs_n26CPS2);
        };
        var hs_sat26CQ4f = new $hs.Data(2);
        hs_sat26CQ4f.data = [hs_sat26CQ4e, hs_sat26CQ4d];
        var hs_sat26CQ4g = new $hs.Thunk();
        hs_sat26CQ4g.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1226CPRY, $hs.modules.GHCziBase.hs_zzeroInt, hs_m26CPRZ);
        };
        var hs_sat26CQ4h = new $hs.Data(2);
        hs_sat26CQ4h.data = [hs_sat26CQ4g, hs_sat26CQ4f];
        var hs_sat26CQ4i = new $hs.Thunk();
        hs_sat26CQ4i.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1126CPRV, $hs.modules.GHCziBase.hs_zzeroInt, hs_l26CPRW);
        };
        var hs_sat26CQ4j = new $hs.Data(2);
        hs_sat26CQ4j.data = [hs_sat26CQ4i, hs_sat26CQ4h];
        var hs_sat26CQ4k = new $hs.Thunk();
        hs_sat26CQ4k.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1026CPRS, $hs.modules.GHCziBase.hs_zzeroInt, hs_k26CPRT);
        };
        var hs_sat26CQ4l = new $hs.Data(2);
        hs_sat26CQ4l.data = [hs_sat26CQ4k, hs_sat26CQ4j];
        var hs_sat26CQ4m = new $hs.Thunk();
        hs_sat26CQ4m.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow926CPRP, $hs.modules.GHCziBase.hs_zzeroInt, hs_j26CPRQ);
        };
        var hs_sat26CQ4n = new $hs.Data(2);
        hs_sat26CQ4n.data = [hs_sat26CQ4m, hs_sat26CQ4l];
        var hs_sat26CQ4o = new $hs.Thunk();
        hs_sat26CQ4o.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow826CPRM, $hs.modules.GHCziBase.hs_zzeroInt, hs_i26CPRN);
        };
        var hs_sat26CQ4p = new $hs.Data(2);
        hs_sat26CQ4p.data = [hs_sat26CQ4o, hs_sat26CQ4n];
        var hs_sat26CQ4q = new $hs.Thunk();
        hs_sat26CQ4q.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow726CPRJ, $hs.modules.GHCziBase.hs_zzeroInt, hs_h26CPRK);
        };
        var hs_sat26CQ4r = new $hs.Data(2);
        hs_sat26CQ4r.data = [hs_sat26CQ4q, hs_sat26CQ4p];
        var hs_sat26CQ4s = new $hs.Thunk();
        hs_sat26CQ4s.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow626CPRG, $hs.modules.GHCziBase.hs_zzeroInt, hs_g26CPRH);
        };
        var hs_sat26CQ4t = new $hs.Data(2);
        hs_sat26CQ4t.data = [hs_sat26CQ4s, hs_sat26CQ4r];
        var hs_sat26CQ4u = new $hs.Thunk();
        hs_sat26CQ4u.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow526CPRD, $hs.modules.GHCziBase.hs_zzeroInt, hs_f26CPRE);
        };
        var hs_sat26CQ4v = new $hs.Data(2);
        hs_sat26CQ4v.data = [hs_sat26CQ4u, hs_sat26CQ4t];
        var hs_sat26CQ4w = new $hs.Thunk();
        hs_sat26CQ4w.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow426CPRA, $hs.modules.GHCziBase.hs_zzeroInt, hs_e26CPRB);
        };
        var hs_sat26CQ4x = new $hs.Data(2);
        hs_sat26CQ4x.data = [hs_sat26CQ4w, hs_sat26CQ4v];
        var hs_sat26CQ4y = new $hs.Thunk();
        hs_sat26CQ4y.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow326CPRx, $hs.modules.GHCziBase.hs_zzeroInt, hs_d26CPRy);
        };
        var hs_sat26CQ4z = new $hs.Data(2);
        hs_sat26CQ4z.data = [hs_sat26CQ4y, hs_sat26CQ4x];
        var hs_sat26CQ4A = new $hs.Thunk();
        hs_sat26CQ4A.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow226CPRu, $hs.modules.GHCziBase.hs_zzeroInt, hs_c26CPRv);
        };
        var hs_sat26CQ4B = new $hs.Data(2);
        hs_sat26CQ4B.data = [hs_sat26CQ4A, hs_sat26CQ4z];
        var hs_sat26CQ4C = new $hs.Thunk();
        hs_sat26CQ4C.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow126CPRr, $hs.modules.GHCziBase.hs_zzeroInt, hs_b26CPRs);
        };
        var hs_sat26CQ4D = new $hs.Data(2);
        hs_sat26CQ4D.data = [hs_sat26CQ4C, hs_sat26CQ4B];
        var hs_sat26CQ4E = new $hs.Thunk();
        hs_sat26CQ4E.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow26CPRo, $hs.modules.GHCziBase.hs_zzeroInt, hs_a6826CPRp);
        };
        var hs_sat26CQ4a = new $hs.Data(2);
        hs_sat26CQ4a.data = [hs_sat26CQ4E, hs_sat26CQ4D];
        return hs_showzutuple25rqsS.hscall(hs_sat26CQ4a, hs_s26CPSm);
    };
    this.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddShow26CPSF, hs_zddShow126CPSG, hs_zddShow226CPSH, hs_zddShow326CPSI, hs_zddShow426CPSJ, hs_zddShow526CPSK, hs_zddShow626CPSL, hs_zddShow726CPSM, hs_zddShow826CPSN, hs_zddShow926CPSO, hs_zddShow1026CPSP, hs_zddShow1126CPSQ, hs_zddShow1226CPSR, hs_zddShow1326CPSS, hs_zddShow1426CPST) {
        var hs_sat26CQ4G = new $hs.Thunk();
        hs_sat26CQ4G.evaluateOnce = function () {
            return hs_zdcshowList1925urm8.hscall(hs_zddShow26CPSF, hs_zddShow126CPSG, hs_zddShow226CPSH, hs_zddShow326CPSI, hs_zddShow426CPSJ, hs_zddShow526CPSK, hs_zddShow626CPSL, hs_zddShow726CPSM, hs_zddShow826CPSN, hs_zddShow926CPSO, hs_zddShow1026CPSP, hs_zddShow1126CPSQ, hs_zddShow1226CPSR, hs_zddShow1326CPSS, hs_zddShow1426CPST);
        };
        var hs_sat26CQ4H = new $hs.Thunk();
        hs_sat26CQ4H.evaluateOnce = function () {
            return hs_zdcshow1925urm9.hscall(hs_zddShow26CPSF, hs_zddShow126CPSG, hs_zddShow226CPSH, hs_zddShow326CPSI, hs_zddShow426CPSJ, hs_zddShow526CPSK, hs_zddShow626CPSL, hs_zddShow726CPSM, hs_zddShow826CPSN, hs_zddShow926CPSO, hs_zddShow1026CPSP, hs_zddShow1126CPSQ, hs_zddShow1226CPSR, hs_zddShow1326CPSS, hs_zddShow1426CPST);
        };
        var hs_sat26CQ4F = new $hs.Func(3);
        hs_sat26CQ4F.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdcshowsPrec1825urky.hscall(hs_zddShow26CPSF, hs_zddShow126CPSG, hs_zddShow226CPSH, hs_zddShow326CPSI, hs_zddShow426CPSJ, hs_zddShow526CPSK, hs_zddShow626CPSL, hs_zddShow726CPSM, hs_zddShow826CPSN, hs_zddShow926CPSO, hs_zddShow1026CPSP, hs_zddShow1126CPSQ, hs_zddShow1226CPSR, hs_zddShow1326CPSS, hs_zddShow1426CPST, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CQ4F, hs_sat26CQ4H, hs_sat26CQ4G];
        return $res;
    };
    hs_zdcshowList1925urm8.evaluate = function (hs_zddShow26CPTd, hs_zddShow126CPTe, hs_zddShow226CPTf, hs_zddShow326CPTg, hs_zddShow426CPTh, hs_zddShow526CPTi, hs_zddShow626CPTj, hs_zddShow726CPTk, hs_zddShow826CPTl, hs_zddShow926CPTm, hs_zddShow1026CPTn, hs_zddShow1126CPTo, hs_zddShow1226CPTp, hs_zddShow1326CPTq, hs_zddShow1426CPTr) {
        var hs_zddShow1526CPTs = new $hs.Thunk();
        hs_zddShow1526CPTs.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26CPTd, hs_zddShow126CPTe, hs_zddShow226CPTf, hs_zddShow326CPTg, hs_zddShow426CPTh, hs_zddShow526CPTi, hs_zddShow626CPTj, hs_zddShow726CPTk, hs_zddShow826CPTl, hs_zddShow926CPTm, hs_zddShow1026CPTn, hs_zddShow1126CPTo, hs_zddShow1226CPTp, hs_zddShow1326CPTq, hs_zddShow1426CPTr);
        };
        var hs_sat26CPTy = new $hs.Thunk();
        hs_sat26CPTy.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1526CPTs, $hs.modules.GHCziBase.hs_zzeroInt);
        };
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26CPTy);
    };
    hs_zdcshow1925urm9.evaluate = function (hs_zddShow26CPTP, hs_zddShow126CPTQ, hs_zddShow226CPTR, hs_zddShow326CPTS, hs_zddShow426CPTT, hs_zddShow526CPTU, hs_zddShow626CPTV, hs_zddShow726CPTW, hs_zddShow826CPTX, hs_zddShow926CPTY, hs_zddShow1026CPTZ, hs_zddShow1126CPU0, hs_zddShow1226CPU1, hs_zddShow1326CPU2, hs_zddShow1426CPU3) {
        var hs_zddShow1526CPU4 = new $hs.Thunk();
        hs_zddShow1526CPU4.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddShow26CPTP, hs_zddShow126CPTQ, hs_zddShow226CPTR, hs_zddShow326CPTS, hs_zddShow426CPTT, hs_zddShow526CPTU, hs_zddShow626CPTV, hs_zddShow726CPTW, hs_zddShow826CPTX, hs_zddShow926CPTY, hs_zddShow1026CPTZ, hs_zddShow1126CPU0, hs_zddShow1226CPU1, hs_zddShow1326CPU2, hs_zddShow1426CPU3);
        };
        var hs_sat26CQ4I = new $hs.Func(1);
        hs_sat26CQ4I.evaluate = function (hs_x26CPU6) {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall(hs_zddShow1526CPU4, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPU6, $hs.modules.GHCziTypes.hs_ZMZN);
        };
        if (hs_sat26CQ4I.notEvaluated) {
            return hs_sat26CQ4I.hscall();
        } else {
            return hs_sat26CQ4I;
        }
    };
    hs_zdcshowsPrec1925urnS.evaluate = function (hs_ds26CPUm, hs_ds126CPUb) {
        var hs_wild26CQ4K = hs_ds126CPUb;
        if (hs_ds126CPUb.notEvaluated) {
            hs_wild26CQ4K = hs_ds126CPUb.hscall();
        }
        switch (hs_wild26CQ4K.tag) {
        case 1:
            var hs_sat26CQ4V = new $hs.Thunk();
            hs_sat26CQ4V.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("NoArity\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CQ4V);
        case 2:
            var hs_b126CPUj = hs_wild26CQ4K.data[0];
            var hs_p26CPUl = new $hs.Thunk();
            hs_p26CPUl.evaluateOnce = function () {
                var hs_sat26CQ4S = new $hs.Thunk();
                hs_sat26CQ4S.evaluateOnce = function () {
                    var hs_sat26CQ4U = new $hs.Data(1);
                    hs_sat26CQ4U.data = [11];
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26CQ4U, hs_b126CPUj);
                };
                var hs_sat26CQ4R = new $hs.Thunk();
                hs_sat26CQ4R.evaluateOnce = function () {
                    var hs_sat26CQ4T = new $hs.Thunk();
                    hs_sat26CQ4T.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Arity \x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CQ4T);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CQ4R, hs_sat26CQ4S);
            };
            var hs_sat26CQ4L = new $hs.Data(1);
            hs_sat26CQ4L.data = [11];
            var hs_wild126CQ4M = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_ds26CPUm, hs_sat26CQ4L);
            switch (hs_wild126CQ4M.tag) {
            case 1:
                if (hs_p26CPUl.notEvaluated) {
                    return hs_p26CPUl.hscall();
                } else {
                    return hs_p26CPUl;
                }
            case 2:
                var hs_sat26CQ4N = new $hs.Thunk();
                hs_sat26CQ4N.evaluateOnce = function () {
                    var hs_sat26CQ4Q = new $hs.Data(1);
                    hs_sat26CQ4Q.data = [")"];
                    var hs_sat26CQ4P = new $hs.Func(1);
                    hs_sat26CQ4P.evaluate = function (hs_eta1cW6l3) {
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26CQ4Q, hs_eta1cW6l3];
                        return $res;
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_p26CPUl, hs_sat26CQ4P);
                };
                var hs_sat26CQ4O = new $hs.Data(1);
                hs_sat26CQ4O.data = ["("];
                var hs_sat26CQ4J = new $hs.Func(1);
                hs_sat26CQ4J.evaluate = function (hs_eta1cW6l3) {
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26CQ4O, hs_eta1cW6l3];
                    return $res;
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CQ4J, hs_sat26CQ4N);
            }
        }
    };
    hs_sat26CQ4W.data = [0];
    this.hs_zdfShowArity.data = [hs_zdcshowsPrec1925urnS, hs_zdcshow2025urog, hs_zdcshowList2025urof];
    hs_a6525uroe.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowArity, hs_sat26CQ4W);
    };
    hs_zdcshowList2025urof.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_a6525uroe, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcshow2025urog.evaluate = function (hs_x26CPUz) {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowArity, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPUz, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    hs_zdcshowsPrec2025urok.evaluate = function (hs_ds26CPUI, hs_ds126CPUD) {
        var hs_wild26CQ4Y = hs_ds126CPUD;
        if (hs_ds126CPUD.notEvaluated) {
            hs_wild26CQ4Y = hs_ds126CPUD.hscall();
        }
        switch (hs_wild26CQ4Y.tag) {
        case 1:
            var hs_sat26CQ50 = new $hs.Thunk();
            hs_sat26CQ50.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("LeftAssociative\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CQ50);
        case 2:
            var hs_sat26CQ4X = new $hs.Thunk();
            hs_sat26CQ4X.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("RightAssociative\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CQ4X);
        case 3:
            var hs_sat26CQ4Z = new $hs.Thunk();
            hs_sat26CQ4Z.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("NotAssociative\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CQ4Z);
        }
    };
    hs_sat26CQ51.data = [0];
    this.hs_zdfShowAssociativity.data = [hs_zdcshowsPrec2025urok, hs_zdcshow2125urov, hs_zdcshowList2125urou];
    hs_a6625urot.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowAssociativity, hs_sat26CQ51);
    };
    hs_zdcshowList2125urou.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_a6625urot, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcshow2125urov.evaluate = function (hs_x26CPUO) {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowAssociativity, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPUO, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    hs_zdcshowsPrec2125uroz.evaluate = function (hs_ds26CPV9, hs_ds126CPUS) {
        var hs_wild26CQ53 = hs_ds126CPUS;
        if (hs_ds126CPUS.notEvaluated) {
            hs_wild26CQ53 = hs_ds126CPUS.hscall();
        }
        switch (hs_wild26CQ53.tag) {
        case 1:
            var hs_sat26CQ5i = new $hs.Thunk();
            hs_sat26CQ5i.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Prefix\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CQ5i);
        case 2:
            var hs_b126CPV1 = hs_wild26CQ53.data[0];
            var hs_b226CPV4 = hs_wild26CQ53.data[1];
            var hs_p26CPV8 = new $hs.Thunk();
            hs_p26CPV8.evaluateOnce = function () {
                var hs_sat26CQ5b = new $hs.Thunk();
                hs_sat26CQ5b.evaluateOnce = function () {
                    var hs_sat26CQ5e = new $hs.Thunk();
                    hs_sat26CQ5e.evaluateOnce = function () {
                        var hs_sat26CQ5g = new $hs.Thunk();
                        hs_sat26CQ5g.evaluateOnce = function () {
                            var hs_sat26CQ5h = new $hs.Data(1);
                            hs_sat26CQ5h.data = [11];
                            return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26CQ5h, hs_b226CPV4);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.GHCziShow.hs_showSpace, hs_sat26CQ5g);
                    };
                    var hs_sat26CQ5d = new $hs.Thunk();
                    hs_sat26CQ5d.evaluateOnce = function () {
                        var hs_sat26CQ5f = new $hs.Data(1);
                        hs_sat26CQ5f.data = [11];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowAssociativity, hs_sat26CQ5f, hs_b126CPV1);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CQ5d, hs_sat26CQ5e);
                };
                var hs_sat26CQ5a = new $hs.Thunk();
                hs_sat26CQ5a.evaluateOnce = function () {
                    var hs_sat26CQ5c = new $hs.Thunk();
                    hs_sat26CQ5c.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Infix \x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CQ5c);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CQ5a, hs_sat26CQ5b);
            };
            var hs_sat26CQ54 = new $hs.Data(1);
            hs_sat26CQ54.data = [11];
            var hs_wild126CQ55 = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_ds26CPV9, hs_sat26CQ54);
            switch (hs_wild126CQ55.tag) {
            case 1:
                if (hs_p26CPV8.notEvaluated) {
                    return hs_p26CPV8.hscall();
                } else {
                    return hs_p26CPV8;
                }
            case 2:
                var hs_sat26CQ56 = new $hs.Thunk();
                hs_sat26CQ56.evaluateOnce = function () {
                    var hs_sat26CQ59 = new $hs.Data(1);
                    hs_sat26CQ59.data = [")"];
                    var hs_sat26CQ58 = new $hs.Func(1);
                    hs_sat26CQ58.evaluate = function (hs_eta1cW6l3) {
                        var $res = new $hs.Data(2);
                        $res.data = [hs_sat26CQ59, hs_eta1cW6l3];
                        return $res;
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_p26CPV8, hs_sat26CQ58);
                };
                var hs_sat26CQ57 = new $hs.Data(1);
                hs_sat26CQ57.data = ["("];
                var hs_sat26CQ52 = new $hs.Func(1);
                hs_sat26CQ52.evaluate = function (hs_eta1cW6l3) {
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26CQ57, hs_eta1cW6l3];
                    return $res;
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CQ52, hs_sat26CQ56);
            }
        }
    };
    hs_sat26CQ5j.data = [0];
    this.hs_zdfShowFixity.data = [hs_zdcshowsPrec2125uroz, hs_zdcshow2225urp3, hs_zdcshowList2225urp2];
    hs_a6725urp1.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowFixity, hs_sat26CQ5j);
    };
    hs_zdcshowList2225urp2.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_a6725urp1, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcshow2225urp3.evaluate = function (hs_x26CPVm) {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowFixity, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPVm, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_showLitChar.evaluate = function (hs_c26CPVp, hs_s26CPVI) {
        var hs_sat26CQ5l = new $hs.Data(1);
        hs_sat26CQ5l.data = ["\x7f"];
        var hs_wild26CQ5m = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c26CPVp, hs_sat26CQ5l);
        switch (hs_wild26CQ5m.tag) {
        case 1:
            var hs_wild126CPVw = hs_c26CPVp;
            if (hs_c26CPVp.notEvaluated) {
                hs_wild126CPVw = hs_c26CPVp.hscall();
            }
            var hs_ds26CPVu = hs_wild126CPVw.data[0];
            var hs_ds126CQ5z = hs_ds26CPVu;
            if (hs_ds26CPVu.notEvaluated) {
                hs_ds126CQ5z = hs_ds26CPVu.hscall();
            }
            switch (hs_ds126CQ5z) {
            case "\\":
                var hs_sat26CQ5y = new $hs.Thunk();
                hs_sat26CQ5y.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("\\\\\x00");
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CQ5y, hs_s26CPVI);
            case "\x7f":
                var hs_sat26CQ5A = new $hs.Thunk();
                hs_sat26CQ5A.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("\\DEL\x00");
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CQ5A, hs_s26CPVI);
            default:
                var hs_sat26CQ5B = new $hs.Data(1);
                hs_sat26CQ5B.data = [" "];
                var hs_wild226CQ5C = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_wild126CPVw, hs_sat26CQ5B);
                switch (hs_wild226CQ5C.tag) {
                case 1:
                    var hs_wild326CPVE = hs_wild126CPVw;
                    if (hs_wild126CPVw.notEvaluated) {
                        hs_wild326CPVE = hs_wild126CPVw.hscall();
                    }
                    var hs_ds226CPVB = hs_wild326CPVE.data[0];
                    var hs_ds326CQ5E = hs_ds226CPVB;
                    if (hs_ds226CPVB.notEvaluated) {
                        hs_ds326CQ5E = hs_ds226CPVB.hscall();
                    }
                    switch (hs_ds326CQ5E) {
                    case "\x07":
                        var hs_sat26CQ5D = new $hs.Thunk();
                        hs_sat26CQ5D.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("\\a\x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CQ5D, hs_s26CPVI);
                    case "\b":
                        var hs_sat26CQ5F = new $hs.Thunk();
                        hs_sat26CQ5F.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("\\b\x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CQ5F, hs_s26CPVI);
                    case "\t":
                        var hs_sat26CQ5G = new $hs.Thunk();
                        hs_sat26CQ5G.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("\\t\x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CQ5G, hs_s26CPVI);
                    case "\n":
                        var hs_sat26CQ5H = new $hs.Thunk();
                        hs_sat26CQ5H.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("\\n\x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CQ5H, hs_s26CPVI);
                    case "\v":
                        var hs_sat26CQ5I = new $hs.Thunk();
                        hs_sat26CQ5I.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("\\v\x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CQ5I, hs_s26CPVI);
                    case "\f":
                        var hs_sat26CQ5J = new $hs.Thunk();
                        hs_sat26CQ5J.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("\\f\x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CQ5J, hs_s26CPVI);
                    case "\r":
                        var hs_sat26CQ5K = new $hs.Thunk();
                        hs_sat26CQ5K.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("\\r\x00");
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CQ5K, hs_s26CPVI);
                    case "\x0e":
                        var hs_ds426CPVR = new $hs.Data(1);
                        hs_ds426CPVR.data = ["H"];
                        var hs_sat26CQ5M = new $hs.Func(1);
                        hs_sat26CQ5M.evaluate = function (hs_s126CPVV) {
                            var hs_wild426CPW1 = hs_s126CPVV;
                            if (hs_s126CPVV.notEvaluated) {
                                hs_wild426CPW1 = hs_s126CPVV.hscall();
                            }
                            switch (hs_wild426CPW1.tag) {
                            case 1:
                                var $res = new $hs.Data(1);
                                $res.data = [];
                                return $res;
                            case 2:
                                var hs_c126CPVZ = hs_wild426CPW1.data[0];
                                var hs_wild526CQ5Q = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_c126CPVZ, hs_ds426CPVR);
                                switch (hs_wild526CQ5Q.tag) {
                                case 1:
                                    if (hs_wild426CPW1.notEvaluated) {
                                        return hs_wild426CPW1.hscall();
                                    } else {
                                        return hs_wild426CPW1;
                                    }
                                case 2:
                                    var hs_sat26CQ5O = new $hs.Thunk();
                                    hs_sat26CQ5O.evaluateOnce = function () {
                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("\\&\x00");
                                    };
                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CQ5O, hs_wild426CPW1);
                                }
                            }
                        };
                        var hs_sat26CQ5L = new $hs.Thunk();
                        hs_sat26CQ5L.evaluateOnce = function () {
                            var hs_sat26CQ5N = new $hs.Thunk();
                            hs_sat26CQ5N.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("\\SO\x00");
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CQ5N);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CQ5L, hs_sat26CQ5M, hs_s26CPVI);
                    default:
                        var hs_sat26CQ5S = new $hs.Thunk();
                        hs_sat26CQ5S.evaluateOnce = function () {
                            var hs_sat26CQ5U = new $hs.Thunk();
                            hs_sat26CQ5U.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_ord.hscall(hs_wild326CPVE);
                            };
                            return $hs.modules.GHCziList.hs_znzn.hscall($hs.modules.GHCziShow.hs_asciiTab, hs_sat26CQ5U);
                        };
                        var hs_sat26CQ5T = new $hs.Data(1);
                        hs_sat26CQ5T.data = ["\\"];
                        var hs_sat26CQ5R = new $hs.Data(2);
                        hs_sat26CQ5R.data = [hs_sat26CQ5T, hs_sat26CQ5S];
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CQ5R, hs_s26CPVI);
                    }
                case 2:
                    var $res = new $hs.Data(2);
                    $res.data = [hs_wild126CPVw, hs_s26CPVI];
                    return $res;
                }
            }
        case 2:
            var hs_sat26CQ5n = new $hs.Thunk();
            hs_sat26CQ5n.evaluateOnce = function () {
                var hs_sat26CQ5p = new $hs.Func(1);
                hs_sat26CQ5p.evaluate = function (hs_s126CPWa) {
                    var hs_wild126CPWk = hs_s126CPWa;
                    if (hs_s126CPWa.notEvaluated) {
                        hs_wild126CPWk = hs_s126CPWa.hscall();
                    }
                    switch (hs_wild126CPWk.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        var hs_c126CPWe = hs_wild126CPWk.data[0];
                        var hs_sat26CQ5t = new $hs.Thunk();
                        hs_sat26CQ5t.evaluateOnce = function () {
                            var hs_sat26CQ5x = new $hs.Data(1);
                            hs_sat26CQ5x.data = ["9"];
                            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c126CPWe, hs_sat26CQ5x);
                        };
                        var hs_sat26CQ5u = new $hs.Thunk();
                        hs_sat26CQ5u.evaluateOnce = function () {
                            var hs_sat26CQ5w = new $hs.Data(1);
                            hs_sat26CQ5w.data = ["0"];
                            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdChar, hs_c126CPWe, hs_sat26CQ5w);
                        };
                        var hs_wild226CQ5v = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26CQ5u, hs_sat26CQ5t);
                        switch (hs_wild226CQ5v.tag) {
                        case 1:
                            if (hs_wild126CPWk.notEvaluated) {
                                return hs_wild126CPWk.hscall();
                            } else {
                                return hs_wild126CPWk;
                            }
                        case 2:
                            var hs_sat26CQ5r = new $hs.Thunk();
                            hs_sat26CQ5r.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("\\&\x00");
                            };
                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CQ5r, hs_wild126CPWk);
                        }
                    }
                };
                var hs_sat26CQ5o = new $hs.Thunk();
                hs_sat26CQ5o.evaluateOnce = function () {
                    var hs_sat26CQ5q = new $hs.Thunk();
                    hs_sat26CQ5q.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_ord.hscall(hs_c26CPVp);
                    };
                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, $hs.modules.GHCziBase.hs_zzeroInt, hs_sat26CQ5q);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CQ5o, hs_sat26CQ5p, hs_s26CPVI);
            };
            var hs_sat26CQ5k = new $hs.Data(1);
            hs_sat26CQ5k.data = ["\\"];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26CQ5k, hs_sat26CQ5n];
            return $res;
        }
    };
    hs_zdcshowsPrec2225urq8.evaluate = function (hs_ds26CPWE, hs_ds126CPWr) {
        var hs_wild26CPWy = hs_ds126CPWr;
        if (hs_ds126CPWr.notEvaluated) {
            hs_wild26CPWy = hs_ds126CPWr.hscall();
        }
        var hs_ds226CPWu = hs_wild26CPWy.data[0];
        var hs_ds326CQ5W = hs_ds226CPWu;
        if (hs_ds226CPWu.notEvaluated) {
            hs_ds326CQ5W = hs_ds226CPWu.hscall();
        }
        switch (hs_ds326CQ5W) {
        case "'":
            var hs_sat26CQ5V = new $hs.Thunk();
            hs_sat26CQ5V.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("'\\''\x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CQ5V);
        default:
            var hs_sat26CQ5Y = new $hs.Thunk();
            hs_sat26CQ5Y.evaluateOnce = function () {
                var hs_sat26CQ61 = new $hs.Data(1);
                hs_sat26CQ61.data = ["'"];
                var hs_sat26CQ62 = new $hs.Func(1);
                hs_sat26CQ62.evaluate = function (hs_eta1cW6l3) {
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26CQ61, hs_eta1cW6l3];
                    return $res;
                };
                var hs_sat26CQ60 = new $hs.Func(1);
                hs_sat26CQ60.evaluate = function (hs_eta1cW6l3) {
                    return $hs.modules.GHCziShow.hs_showLitChar.hscall(hs_wild26CPWy, hs_eta1cW6l3);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CQ60, hs_sat26CQ62);
            };
            var hs_sat26CQ5Z = new $hs.Data(1);
            hs_sat26CQ5Z.data = ["'"];
            var hs_sat26CQ5X = new $hs.Func(1);
            hs_sat26CQ5X.evaluate = function (hs_eta1cW6l3) {
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26CQ5Z, hs_eta1cW6l3];
                return $res;
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CQ5X, hs_sat26CQ5Y);
        }
    };
    this.hs_showLitString.evaluate = function (hs_ds26CPWH, hs_s26CPWJ) {
        var hs_wild26CQ65 = hs_ds26CPWH;
        if (hs_ds26CPWH.notEvaluated) {
            hs_wild26CQ65 = hs_ds26CPWH.hscall();
        }
        switch (hs_wild26CQ65.tag) {
        case 1:
            if (hs_s26CPWJ.notEvaluated) {
                return hs_s26CPWJ.hscall();
            } else {
                return hs_s26CPWJ;
            }
        case 2:
            var hs_ds126CPWM = hs_wild26CQ65.data[0];
            var hs_cs26CPWS = hs_wild26CQ65.data[1];
            var hs_wild126CPWR = hs_ds126CPWM;
            if (hs_ds126CPWM.notEvaluated) {
                hs_wild126CPWR = hs_ds126CPWM.hscall();
            }
            var hs_ds226CPWP = hs_wild126CPWR.data[0];
            var hs_ds326CQ64 = hs_ds226CPWP;
            if (hs_ds226CPWP.notEvaluated) {
                hs_ds326CQ64 = hs_ds226CPWP.hscall();
            }
            switch (hs_ds326CQ64) {
            case "\"":
                var hs_sat26CQ66 = new $hs.Thunk();
                hs_sat26CQ66.evaluateOnce = function () {
                    return $hs.modules.GHCziShow.hs_showLitString.hscall(hs_cs26CPWS, hs_s26CPWJ);
                };
                var hs_sat26CQ63 = new $hs.Thunk();
                hs_sat26CQ63.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("\\\"\x00");
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CQ63, hs_sat26CQ66);
            default:
                var hs_sat26CQ67 = new $hs.Thunk();
                hs_sat26CQ67.evaluateOnce = function () {
                    return $hs.modules.GHCziShow.hs_showLitString.hscall(hs_cs26CPWS, hs_s26CPWJ);
                };
                return $hs.modules.GHCziShow.hs_showLitChar.hscall(hs_wild126CPWR, hs_sat26CQ67);
            }
        }
    };
    hs_zdcshowList2325urqG.evaluate = function (hs_cs26CPX0) {
        var hs_sat26CQ69 = new $hs.Thunk();
        hs_sat26CQ69.evaluateOnce = function () {
            var hs_sat26CQ6c = new $hs.Data(1);
            hs_sat26CQ6c.data = ["\""];
            var hs_sat26CQ6d = new $hs.Func(1);
            hs_sat26CQ6d.evaluate = function (hs_eta1cW6l3) {
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26CQ6c, hs_eta1cW6l3];
                return $res;
            };
            var hs_sat26CQ6b = new $hs.Func(1);
            hs_sat26CQ6b.evaluate = function (hs_eta1cW6l3) {
                return $hs.modules.GHCziShow.hs_showLitString.hscall(hs_cs26CPX0, hs_eta1cW6l3);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CQ6b, hs_sat26CQ6d);
        };
        var hs_sat26CQ6a = new $hs.Data(1);
        hs_sat26CQ6a.data = ["\""];
        var hs_sat26CQ68 = new $hs.Func(1);
        hs_sat26CQ68.evaluate = function (hs_eta1cW6l3) {
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26CQ6a, hs_eta1cW6l3];
            return $res;
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CQ68, hs_sat26CQ69);
    };
    this.hs_zdfShowChar.data = [hs_zdcshowsPrec2225urq8, hs_zdcshow2325urqP, hs_zdcshowList2325urqG];
    hs_zdcshow2325urqP.evaluate = function (hs_x26CPX7) {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowChar, $hs.modules.GHCziBase.hs_zzeroInt, hs_x26CPX7, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_showMultiLineString.evaluate = function (hs_str26CPXM) {
        var hs_go26CPXH = new $hs.Func(2);
        hs_go26CPXH.evaluate = function (hs_ch26CPXn, hs_s26CPXh) {
            var hs_ds26CPXd = new $hs.Data(1);
            hs_ds26CPXd.data = ["\n"];
            var hs_sat26CQ6k = new $hs.Func(1);
            hs_sat26CQ6k.evaluate = function (hs_ds126CPXf) {
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqChar, hs_ds126CPXf, hs_ds26CPXd);
            };
            var hs_wild26CQ6l = $hs.modules.GHCziList.hs_break.hscall(hs_sat26CQ6k, hs_s26CPXh);
            var hs_l26CPXo = hs_wild26CQ6l.data[0];
            var hs_ds26CPXl = hs_wild26CQ6l.data[1];
            var hs_wild126CQ6i = hs_ds26CPXl;
            if (hs_ds26CPXl.notEvaluated) {
                hs_wild126CQ6i = hs_ds26CPXl.hscall();
            }
            switch (hs_wild126CQ6i.tag) {
            case 1:
                var hs_sat26CQ6w = new $hs.Thunk();
                hs_sat26CQ6w.evaluateOnce = function () {
                    var hs_sat26CQ6y = new $hs.Data(1);
                    hs_sat26CQ6y.data = ["\""];
                    var hs_sat26CQ6x = new $hs.Data(2);
                    hs_sat26CQ6x.data = [hs_sat26CQ6y, $hs.modules.GHCziTypes.hs_ZMZN];
                    return $hs.modules.GHCziShow.hs_showLitString.hscall(hs_l26CPXo, hs_sat26CQ6x);
                };
                var hs_sat26CQ6v = new $hs.Data(2);
                hs_sat26CQ6v.data = [hs_ch26CPXn, hs_sat26CQ6w];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26CQ6v, $hs.modules.GHCziTypes.hs_ZMZN];
                return $res;
            case 2:
                var hs_szq26CPXv = hs_wild126CQ6i.data[1];
                var hs_wild226CPXJ = hs_szq26CPXv;
                if (hs_szq26CPXv.notEvaluated) {
                    hs_wild226CPXJ = hs_szq26CPXv.hscall();
                }
                switch (hs_wild226CPXJ.tag) {
                case 1:
                    var hs_sat26CQ6s = new $hs.Thunk();
                    hs_sat26CQ6s.evaluateOnce = function () {
                        var hs_sat26CQ6u = new $hs.Data(1);
                        hs_sat26CQ6u.data = ["\""];
                        var hs_sat26CQ6t = new $hs.Data(2);
                        hs_sat26CQ6t.data = [hs_sat26CQ6u, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $hs.modules.GHCziShow.hs_showLitString.hscall(hs_l26CPXo, hs_sat26CQ6t);
                    };
                    var hs_sat26CQ6r = new $hs.Data(2);
                    hs_sat26CQ6r.data = [hs_ch26CPXn, hs_sat26CQ6s];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26CQ6r, $hs.modules.GHCziTypes.hs_ZMZN];
                    return $res;
                case 2:
                    var hs_sat26CQ6m = new $hs.Thunk();
                    hs_sat26CQ6m.evaluateOnce = function () {
                        var hs_sat26CQ6q = new $hs.Data(1);
                        hs_sat26CQ6q.data = ["\\"];
                        return hs_go26CPXH.hscall(hs_sat26CQ6q, hs_wild226CPXJ);
                    };
                    var hs_sat26CQ6n = new $hs.Thunk();
                    hs_sat26CQ6n.evaluateOnce = function () {
                        var hs_sat26CQ6p = new $hs.Data(1);
                        hs_sat26CQ6p.data = ["\\"];
                        var hs_sat26CQ6o = new $hs.Data(2);
                        hs_sat26CQ6o.data = [hs_sat26CQ6p, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $hs.modules.GHCziShow.hs_showLitString.hscall(hs_l26CPXo, hs_sat26CQ6o);
                    };
                    var hs_sat26CQ6f = new $hs.Data(2);
                    hs_sat26CQ6f.data = [hs_ch26CPXn, hs_sat26CQ6n];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26CQ6f, hs_sat26CQ6m];
                    return $res;
                }
            }
        };
        var hs_sat26CQ6e = new $hs.Data(1);
        hs_sat26CQ6e.data = ["\""];
        return hs_go26CPXH.hscall(hs_sat26CQ6e, hs_str26CPXM);
    };
    this.hs_intToDigit.evaluate = function (hs_ds26CPXO) {
        var hs_wild26CQ6A = hs_ds26CPXO;
        if (hs_ds26CPXO.notEvaluated) {
            hs_wild26CQ6A = hs_ds26CPXO.hscall();
        }
        var hs_i26CPXR = hs_wild26CQ6A.data[0];
        var hs_sat26CQ6B = new $hs.Thunk();
        hs_sat26CQ6B.evaluateOnce = function () {
            return hs_i26CPXR <= 9 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        };
        var hs_sat26CQ6C = new $hs.Thunk();
        hs_sat26CQ6C.evaluateOnce = function () {
            return hs_i26CPXR >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        };
        var hs_wild126CQ6D = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26CQ6C, hs_sat26CQ6B);
        switch (hs_wild126CQ6D.tag) {
        case 1:
            var hs_sat26CQ6I = new $hs.Thunk();
            hs_sat26CQ6I.evaluateOnce = function () {
                return hs_i26CPXR <= 15 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            };
            var hs_sat26CQ6J = new $hs.Thunk();
            hs_sat26CQ6J.evaluateOnce = function () {
                return hs_i26CPXR >= 10 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            };
            var hs_wild226CQ6K = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26CQ6J, hs_sat26CQ6I);
            switch (hs_wild226CQ6K.tag) {
            case 1:
                var hs_sat26CQ6P = new $hs.Thunk();
                hs_sat26CQ6P.evaluateOnce = function () {
                    var hs_sat26CQ6S = new $hs.Data(1);
                    hs_sat26CQ6S.data = [hs_i26CPXR];
                    return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26CQ6S);
                };
                var hs_sat26CQ6Q = new $hs.Thunk();
                hs_sat26CQ6Q.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Char.intToDigit: not a digit \x00");
                };
                var hs_sat26CQ6R = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26CQ6Q, hs_sat26CQ6P);
                return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CQ6R);
            case 2:
                var hs_sat26CQ6H = new $hs.Thunk();
                hs_sat26CQ6H.evaluateOnce = function () {
                    var hs_sat26CQ6M = new $hs.Data(1);
                    hs_sat26CQ6M.data = [hs_i26CPXR];
                    var hs_sat26CQ6L = new $hs.Thunk();
                    hs_sat26CQ6L.evaluateOnce = function () {
                        var hs_sat26CQ6N = new $hs.Thunk();
                        hs_sat26CQ6N.evaluateOnce = function () {
                            var hs_sat26CQ6O = new $hs.Data(1);
                            hs_sat26CQ6O.data = ["a"];
                            return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26CQ6O);
                        };
                        return $hs.modules.GHCziBase.hs_minusInt.hscall(hs_sat26CQ6N, hs_ten25rqt5);
                    };
                    return $hs.modules.GHCziBase.hs_plusInt.hscall(hs_sat26CQ6L, hs_sat26CQ6M);
                };
                return $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26CQ6H);
            }
        case 2:
            var hs_sat26CQ6z = new $hs.Thunk();
            hs_sat26CQ6z.evaluateOnce = function () {
                var hs_sat26CQ6F = new $hs.Data(1);
                hs_sat26CQ6F.data = [hs_i26CPXR];
                var hs_sat26CQ6E = new $hs.Thunk();
                hs_sat26CQ6E.evaluateOnce = function () {
                    var hs_sat26CQ6G = new $hs.Data(1);
                    hs_sat26CQ6G.data = ["0"];
                    return $hs.modules.GHCziBase.hs_ord.hscall(hs_sat26CQ6G);
                };
                return $hs.modules.GHCziBase.hs_plusInt.hscall(hs_sat26CQ6E, hs_sat26CQ6F);
            };
            return $hs.modules.GHCziBase.hs_unsafeChr.hscall(hs_sat26CQ6z);
        }
    };
    this.hs_DZCShow.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
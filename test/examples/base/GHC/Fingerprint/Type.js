
$hs.modules.GHCziFingerprintziType = new $hs.Module();
$hs.modules.GHCziFingerprintziType.dependencies = ["GHC.Classes", "GHC.Word"];
$hs.modules.GHCziFingerprintziType.initBeforeDependencies = function () {
    this.hs_zdWFingerprint = new $hs.Func(2);
    this.hs_zdfEqFingerprint = new $hs.Data(1);
    this.hs_zdfOrdFingerprint = new $hs.Data(1);
    this.hs_Fingerprint = new $hs.Func(2);
    this.hs_zdWFingerprint.notEvaluated = true;
    this.hs_zdWFingerprint.evaluate = function (hs_tpl26CYSD, hs_tpl26CYSF) {
        $hs.modules.GHCziFingerprintziType.loadDependencies();
        return this.evaluate(hs_tpl26CYSD, hs_tpl26CYSF);
    };
    this.hs_zdfEqFingerprint.notEvaluated = true;
    this.hs_zdfEqFingerprint.evaluate = function () {
        $hs.modules.GHCziFingerprintziType.loadDependencies();
        return this;
    };
    this.hs_zdfOrdFingerprint.notEvaluated = true;
    this.hs_zdfOrdFingerprint.evaluate = function () {
        $hs.modules.GHCziFingerprintziType.loadDependencies();
        return this;
    };
    this.hs_Fingerprint.notEvaluated = true;
    this.hs_Fingerprint.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziFingerprintziType.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziFingerprintziType.initAfterDependencies = function () {
    this.hs_zdWFingerprint.notEvaluated = false;
    this.hs_zdfEqFingerprint.notEvaluated = false;
    this.hs_zdfEqFingerprint.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdFingerprint.notEvaluated = false;
    this.hs_zdfOrdFingerprint.evaluate = function () {
        return this;
    };
    this.hs_Fingerprint.notEvaluated = false;
    var hs_zdczlze25uAmt = new $hs.Func(2);
    var hs_zdczg25uAmJ = new $hs.Func(2);
    var hs_zdczgze25uAmZ = new $hs.Func(2);
    var hs_zdczl25uAnf = new $hs.Func(2);
    var hs_zdccompare25uAnv = new $hs.Func(2);
    var hs_zdczeze25uAnL = new $hs.Func(2);
    var hs_zdczsze25uAo2 = new $hs.Func(2);
    var hs_zdcmin25uAo8 = new $hs.Thunk();
    var hs_zdcmax25uAo9 = new $hs.Thunk();
    this.hs_zdWFingerprint.evaluate = function (hs_tpl26CYSD, hs_tpl26CYSF) {
        var hs_tpl26CYSH = hs_tpl26CYSD;
        if (hs_tpl26CYSD.notEvaluated) {
            hs_tpl26CYSH = hs_tpl26CYSD.hscall();
        }
        var hs_tpl26CYSI = hs_tpl26CYSF;
        if (hs_tpl26CYSF.notEvaluated) {
            hs_tpl26CYSI = hs_tpl26CYSF.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26CYSH, hs_tpl26CYSI];
        return $res;
    };
    hs_zdczlze25uAmt.evaluate = function (hs_a26CYSM, hs_b26CYSQ) {
        var hs_wild26CYUr = hs_a26CYSM;
        if (hs_a26CYSM.notEvaluated) {
            hs_wild26CYUr = hs_a26CYSM.hscall();
        }
        var hs_a126CYSU = hs_wild26CYUr.data[0];
        var hs_a226CYSX = hs_wild26CYUr.data[1];
        var hs_wild126CYUq = hs_b26CYSQ;
        if (hs_b26CYSQ.notEvaluated) {
            hs_wild126CYUq = hs_b26CYSQ.hscall();
        }
        var hs_b126CYSV = hs_wild126CYUq.data[0];
        var hs_b226CYSY = hs_wild126CYUq.data[1];
        var hs_wild226CYUs = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64, hs_a126CYSU, hs_b126CYSV);
        switch (hs_wild226CYUs.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64, hs_a226CYSX, hs_b226CYSY);
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczg25uAmJ.evaluate = function (hs_a26CYT2, hs_b26CYT6) {
        var hs_wild26CYUu = hs_a26CYT2;
        if (hs_a26CYT2.notEvaluated) {
            hs_wild26CYUu = hs_a26CYT2.hscall();
        }
        var hs_a126CYTa = hs_wild26CYUu.data[0];
        var hs_a226CYTd = hs_wild26CYUu.data[1];
        var hs_wild126CYUt = hs_b26CYT6;
        if (hs_b26CYT6.notEvaluated) {
            hs_wild126CYUt = hs_b26CYT6.hscall();
        }
        var hs_b126CYTb = hs_wild126CYUt.data[0];
        var hs_b226CYTe = hs_wild126CYUt.data[1];
        var hs_wild226CYUv = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64, hs_a126CYTa, hs_b126CYTb);
        switch (hs_wild226CYUv.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64, hs_a226CYTd, hs_b226CYTe);
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczgze25uAmZ.evaluate = function (hs_a26CYTi, hs_b26CYTm) {
        var hs_wild26CYUx = hs_a26CYTi;
        if (hs_a26CYTi.notEvaluated) {
            hs_wild26CYUx = hs_a26CYTi.hscall();
        }
        var hs_a126CYTq = hs_wild26CYUx.data[0];
        var hs_a226CYTt = hs_wild26CYUx.data[1];
        var hs_wild126CYUw = hs_b26CYTm;
        if (hs_b26CYTm.notEvaluated) {
            hs_wild126CYUw = hs_b26CYTm.hscall();
        }
        var hs_b126CYTr = hs_wild126CYUw.data[0];
        var hs_b226CYTu = hs_wild126CYUw.data[1];
        var hs_wild226CYUy = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64, hs_a126CYTq, hs_b126CYTr);
        switch (hs_wild226CYUy.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64, hs_a226CYTt, hs_b226CYTu);
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl25uAnf.evaluate = function (hs_a26CYTy, hs_b26CYTC) {
        var hs_wild26CYUA = hs_a26CYTy;
        if (hs_a26CYTy.notEvaluated) {
            hs_wild26CYUA = hs_a26CYTy.hscall();
        }
        var hs_a126CYTG = hs_wild26CYUA.data[0];
        var hs_a226CYTJ = hs_wild26CYUA.data[1];
        var hs_wild126CYUz = hs_b26CYTC;
        if (hs_b26CYTC.notEvaluated) {
            hs_wild126CYUz = hs_b26CYTC.hscall();
        }
        var hs_b126CYTH = hs_wild126CYUz.data[0];
        var hs_b226CYTK = hs_wild126CYUz.data[1];
        var hs_wild226CYUB = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64, hs_a126CYTG, hs_b126CYTH);
        switch (hs_wild226CYUB.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64, hs_a226CYTJ, hs_b226CYTK);
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare25uAnv.evaluate = function (hs_a26CYTO, hs_b26CYTS) {
        var hs_wild26CYUD = hs_a26CYTO;
        if (hs_a26CYTO.notEvaluated) {
            hs_wild26CYUD = hs_a26CYTO.hscall();
        }
        var hs_a126CYTW = hs_wild26CYUD.data[0];
        var hs_a226CYTZ = hs_wild26CYUD.data[1];
        var hs_wild126CYUC = hs_b26CYTS;
        if (hs_b26CYTS.notEvaluated) {
            hs_wild126CYUC = hs_b26CYTS.hscall();
        }
        var hs_b126CYTX = hs_wild126CYUC.data[0];
        var hs_b226CYU0 = hs_wild126CYUC.data[1];
        var hs_wild226CYUE = $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64, hs_a126CYTW, hs_b126CYTX);
        switch (hs_wild226CYUE.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64, hs_a226CYTZ, hs_b226CYU0);
        case 3:
            var $res = new $hs.Data(3);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczeze25uAnL.evaluate = function (hs_ds26CYU4, hs_ds126CYU8) {
        var hs_wild26CYUH = hs_ds26CYU4;
        if (hs_ds26CYU4.notEvaluated) {
            hs_wild26CYUH = hs_ds26CYU4.hscall();
        }
        var hs_a126CYUc = hs_wild26CYUH.data[0];
        var hs_a226CYUf = hs_wild26CYUH.data[1];
        var hs_wild126CYUG = hs_ds126CYU8;
        if (hs_ds126CYU8.notEvaluated) {
            hs_wild126CYUG = hs_ds126CYU8.hscall();
        }
        var hs_b126CYUd = hs_wild126CYUG.data[0];
        var hs_b226CYUg = hs_wild126CYUG.data[1];
        var hs_sat26CYUI = new $hs.Thunk();
        hs_sat26CYUI.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64, hs_a226CYUf, hs_b226CYUg);
        };
        var hs_sat26CYUF = new $hs.Thunk();
        hs_sat26CYUF.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64, hs_a126CYUc, hs_b126CYUd);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26CYUF, hs_sat26CYUI);
    };
    this.hs_zdfEqFingerprint.data = [hs_zdczeze25uAnL, hs_zdczsze25uAo2];
    hs_zdczsze25uAo2.evaluate = function (hs_a26CYUl, hs_b26CYUm) {
        var hs_sat26CYUJ = new $hs.Thunk();
        hs_sat26CYUJ.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziFingerprintziType.hs_zdfEqFingerprint, hs_a26CYUl, hs_b26CYUm);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26CYUJ);
    };
    this.hs_zdfOrdFingerprint.data = [$hs.modules.GHCziFingerprintziType.hs_zdfEqFingerprint, hs_zdccompare25uAnv, hs_zdczl25uAnf, hs_zdczgze25uAmZ, hs_zdczg25uAmJ, hs_zdczlze25uAmt, hs_zdcmax25uAo9, hs_zdcmin25uAo8];
    hs_zdcmin25uAo8.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziFingerprintziType.hs_zdfOrdFingerprint);
    };
    hs_zdcmax25uAo9.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziFingerprintziType.hs_zdfOrdFingerprint);
    };
    this.hs_Fingerprint.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
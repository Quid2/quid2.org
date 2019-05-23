
$hs.modules.GHCziSTRef = new $hs.Module();
$hs.modules.GHCziSTRef.dependencies = ["GHC.Unit", "GHC.Base", "GHC.Classes"];
$hs.modules.GHCziSTRef.initBeforeDependencies = function () {
    this.hs_writeSTRef = new $hs.Func(2);
    this.hs_readSTRef = new $hs.Func(1);
    this.hs_newSTRef = new $hs.Func(1);
    this.hs_zdfEqSTRef = new $hs.Data(1);
    this.hs_STRef = new $hs.Func(1);
    this.hs_writeSTRef.notEvaluated = true;
    this.hs_writeSTRef.evaluate = function (hs_ds26DAZx, hs_val26DAZF) {
        $hs.modules.GHCziSTRef.loadDependencies();
        return this.evaluate(hs_ds26DAZx, hs_val26DAZF);
    };
    this.hs_readSTRef.notEvaluated = true;
    this.hs_readSTRef.evaluate = function (hs_ds26DAZL) {
        $hs.modules.GHCziSTRef.loadDependencies();
        return this.evaluate(hs_ds26DAZL);
    };
    this.hs_newSTRef.notEvaluated = true;
    this.hs_newSTRef.evaluate = function (hs_init26DB00) {
        $hs.modules.GHCziSTRef.loadDependencies();
        return this.evaluate(hs_init26DB00);
    };
    this.hs_zdfEqSTRef.notEvaluated = true;
    this.hs_zdfEqSTRef.evaluate = function () {
        $hs.modules.GHCziSTRef.loadDependencies();
        return this;
    };
    this.hs_STRef.notEvaluated = true;
    this.hs_STRef.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziSTRef.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.GHCziSTRef.initAfterDependencies = function () {
    this.hs_writeSTRef.notEvaluated = false;
    this.hs_readSTRef.notEvaluated = false;
    this.hs_newSTRef.notEvaluated = false;
    this.hs_zdfEqSTRef.notEvaluated = false;
    this.hs_zdfEqSTRef.evaluate = function () {
        return this;
    };
    this.hs_STRef.notEvaluated = false;
    var hs_zdczeze25vctU = new $hs.Func(2);
    var hs_zdczsze25vcu6 = new $hs.Thunk();
    this.hs_writeSTRef.evaluate = function (hs_ds26DAZx, hs_val26DAZF) {
        var hs_wild26DB0n = hs_ds26DAZx;
        if (hs_ds26DAZx.notEvaluated) {
            hs_wild26DB0n = hs_ds26DAZx.hscall();
        }
        var hs_varzh26DAZE = hs_wild26DB0n.data[0];
        var hs_sat26DB0o = new $hs.Func(1);
        hs_sat26DB0o.evaluate = function (hs_s1zh26DAZG) {
            throw "primitive operation writeMutVar#. Not implemeted yet.";
            return [hs_s2zh26DAZI, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DB0p = new $hs.Func(1);
        hs_sat26DB0p.evaluate = function (hs_tpl26DAZB) {
            if (hs_tpl26DAZB.notEvaluated) {
                return hs_tpl26DAZB.hscall();
            } else {
                return hs_tpl26DAZB;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DB0p, hs_sat26DB0o);
    };
    this.hs_readSTRef.evaluate = function (hs_ds26DAZL) {
        var hs_wild26DB0q = hs_ds26DAZL;
        if (hs_ds26DAZL.notEvaluated) {
            hs_wild26DB0q = hs_ds26DAZL.hscall();
        }
        var hs_varzh26DAZS = hs_wild26DB0q.data[0];
        var hs_sat26DB0r = new $hs.Func(1);
        hs_sat26DB0r.evaluate = function (hs_s1zh26DAZT) {
            throw "primitive operation readMutVar#. Not implemeted yet.";
        };
        var hs_sat26DB0s = new $hs.Func(1);
        hs_sat26DB0s.evaluate = function (hs_tpl26DAZP) {
            if (hs_tpl26DAZP.notEvaluated) {
                return hs_tpl26DAZP.hscall();
            } else {
                return hs_tpl26DAZP;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DB0s, hs_sat26DB0r);
    };
    this.hs_newSTRef.evaluate = function (hs_init26DB00) {
        var hs_sat26DB0v = new $hs.Func(1);
        hs_sat26DB0v.evaluate = function (hs_s1zh26DB01) {
            throw "primitive operation newMutVar#. Not implemeted yet.";
            var hs_s2zh26DB05 = hs_wild26DB0t[0];
            var hs_varzh26DB06 = hs_wild26DB0t[1];
            var hs_sat26DB0u = new $hs.Data(1);
            hs_sat26DB0u.data = [hs_varzh26DB06];
            return [hs_s2zh26DB05, hs_sat26DB0u];
        };
        var hs_sat26DB0w = new $hs.Func(1);
        hs_sat26DB0w.evaluate = function (hs_tpl26DAZX) {
            if (hs_tpl26DAZX.notEvaluated) {
                return hs_tpl26DAZX.hscall();
            } else {
                return hs_tpl26DAZX;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DB0w, hs_sat26DB0v);
    };
    hs_zdczeze25vctU.evaluate = function (hs_ds26DB0d, hs_ds126DB0g) {
        var hs_wild26DB0y = hs_ds26DB0d;
        if (hs_ds26DB0d.notEvaluated) {
            hs_wild26DB0y = hs_ds26DB0d.hscall();
        }
        var hs_v1zh26DB0j = hs_wild26DB0y.data[0];
        var hs_wild126DB0x = hs_ds126DB0g;
        if (hs_ds126DB0g.notEvaluated) {
            hs_wild126DB0x = hs_ds126DB0g.hscall();
        }
        var hs_v2zh26DB0k = hs_wild126DB0x.data[0];
        throw "primitive operation sameMutVar#. Not implemeted yet.";
    };
    this.hs_zdfEqSTRef.data = [hs_zdczeze25vctU, hs_zdczsze25vcu6];
    hs_zdczsze25vcu6.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzsze.hscall($hs.modules.GHCziSTRef.hs_zdfEqSTRef);
    };
    this.hs_STRef.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
};
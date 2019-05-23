
$hs.modules.GHCziSTRef = new $hs.Module();
$hs.modules.GHCziSTRef.dependencies = ["GHC.Unit", "GHC.Base", "GHC.Classes"];
$hs.modules.GHCziSTRef.initBeforeDependencies = function () {
    this.hs_writeSTRef = new $hs.Func(2);
    this.hs_readSTRef = new $hs.Func(1);
    this.hs_newSTRef = new $hs.Func(1);
    this.hs_zdfEqSTRef = new $hs.Data(1);
    this.hs_STRef = new $hs.Func(1);
    this.hs_writeSTRef.notEvaluated = true;
    this.hs_writeSTRef.evaluate = function (hs_ds26De2o, hs_val26De2w) {
        $hs.modules.GHCziSTRef.loadDependencies();
        return this.evaluate(hs_ds26De2o, hs_val26De2w);
    };
    this.hs_readSTRef.notEvaluated = true;
    this.hs_readSTRef.evaluate = function (hs_ds26De2C) {
        $hs.modules.GHCziSTRef.loadDependencies();
        return this.evaluate(hs_ds26De2C);
    };
    this.hs_newSTRef.notEvaluated = true;
    this.hs_newSTRef.evaluate = function (hs_init26De2R) {
        $hs.modules.GHCziSTRef.loadDependencies();
        return this.evaluate(hs_init26De2R);
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
    var hs_zdczeze25uPwK = new $hs.Func(2);
    var hs_zdczsze25uPwV = new $hs.Thunk();
    this.hs_writeSTRef.evaluate = function (hs_ds26De2o, hs_val26De2w) {
        var hs_wild26De3d = hs_ds26De2o;
        if (hs_ds26De2o.notEvaluated) {
            hs_wild26De3d = hs_ds26De2o.hscall();
        }
        var hs_varzh26De2v = hs_wild26De3d.data[0];
        var hs_sat26De3e = new $hs.Func(1);
        hs_sat26De3e.evaluate = function (hs_s1zh26De2x) {
            throw "primitive operation writeMutVar#. Not implemeted yet.";
            return [hs_s2zh26De2z, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26De3c = new $hs.Func(1);
        hs_sat26De3c.evaluate = function (hs_tpl26De2s) {
            if (hs_tpl26De2s.notEvaluated) {
                return hs_tpl26De2s.hscall();
            } else {
                return hs_tpl26De2s;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26De3c, hs_sat26De3e);
    };
    this.hs_readSTRef.evaluate = function (hs_ds26De2C) {
        var hs_wild26De3g = hs_ds26De2C;
        if (hs_ds26De2C.notEvaluated) {
            hs_wild26De3g = hs_ds26De2C.hscall();
        }
        var hs_varzh26De2J = hs_wild26De3g.data[0];
        var hs_sat26De3h = new $hs.Func(1);
        hs_sat26De3h.evaluate = function (hs_s1zh26De2K) {
            throw "primitive operation readMutVar#. Not implemeted yet.";
        };
        var hs_sat26De3f = new $hs.Func(1);
        hs_sat26De3f.evaluate = function (hs_tpl26De2G) {
            if (hs_tpl26De2G.notEvaluated) {
                return hs_tpl26De2G.hscall();
            } else {
                return hs_tpl26De2G;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26De3f, hs_sat26De3h);
    };
    this.hs_newSTRef.evaluate = function (hs_init26De2R) {
        var hs_sat26De3j = new $hs.Func(1);
        hs_sat26De3j.evaluate = function (hs_s1zh26De2S) {
            throw "primitive operation newMutVar#. Not implemeted yet.";
            var hs_s2zh26De2W = hs_wild26De3l[0];
            var hs_varzh26De2X = hs_wild26De3l[1];
            var hs_sat26De3k = new $hs.Data(1);
            hs_sat26De3k.data = [hs_varzh26De2X];
            return [hs_s2zh26De2W, hs_sat26De3k];
        };
        var hs_sat26De3i = new $hs.Func(1);
        hs_sat26De3i.evaluate = function (hs_tpl26De2O) {
            if (hs_tpl26De2O.notEvaluated) {
                return hs_tpl26De2O.hscall();
            } else {
                return hs_tpl26De2O;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26De3i, hs_sat26De3j);
    };
    hs_zdczeze25uPwK.evaluate = function (hs_ds26De33, hs_ds126De36) {
        var hs_wild26De3n = hs_ds26De33;
        if (hs_ds26De33.notEvaluated) {
            hs_wild26De3n = hs_ds26De33.hscall();
        }
        var hs_v1zh26De39 = hs_wild26De3n.data[0];
        var hs_wild126De3m = hs_ds126De36;
        if (hs_ds126De36.notEvaluated) {
            hs_wild126De3m = hs_ds126De36.hscall();
        }
        var hs_v2zh26De3a = hs_wild126De3m.data[0];
        throw "primitive operation sameMutVar#. Not implemeted yet.";
    };
    this.hs_zdfEqSTRef.data = [hs_zdczeze25uPwK, hs_zdczsze25uPwV];
    hs_zdczsze25uPwV.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzsze.hscall($hs.modules.GHCziSTRef.hs_zdfEqSTRef);
    };
    this.hs_STRef.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
};
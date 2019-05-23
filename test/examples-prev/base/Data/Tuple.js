
$hs.modules.DataziTuple = new $hs.Module();
$hs.modules.DataziTuple.dependencies = [];
$hs.modules.DataziTuple.initBeforeDependencies = function () {
    this.hs_swap = new $hs.Func(1);
    this.hs_curry = new $hs.Func(3);
    this.hs_snd = new $hs.Func(1);
    this.hs_fst = new $hs.Func(1);
    this.hs_uncurry = new $hs.Func(2);
    this.hs_swap.notEvaluated = true;
    this.hs_swap.evaluate = function (hs_ds26D87s) {
        $hs.modules.DataziTuple.loadDependencies();
        return this.evaluate(hs_ds26D87s);
    };
    this.hs_curry.notEvaluated = true;
    this.hs_curry.evaluate = function (hs_f26D87D, hs_x26D87B, hs_y26D87C) {
        $hs.modules.DataziTuple.loadDependencies();
        return this.evaluate(hs_f26D87D, hs_x26D87B, hs_y26D87C);
    };
    this.hs_snd.notEvaluated = true;
    this.hs_snd.evaluate = function (hs_ds26D87G) {
        $hs.modules.DataziTuple.loadDependencies();
        return this.evaluate(hs_ds26D87G);
    };
    this.hs_fst.notEvaluated = true;
    this.hs_fst.evaluate = function (hs_ds26D87M) {
        $hs.modules.DataziTuple.loadDependencies();
        return this.evaluate(hs_ds26D87M);
    };
    this.hs_uncurry.notEvaluated = true;
    this.hs_uncurry.evaluate = function (hs_f26D87Y, hs_p26D87T) {
        $hs.modules.DataziTuple.loadDependencies();
        return this.evaluate(hs_f26D87Y, hs_p26D87T);
    };
};
$hs.modules.DataziTuple.initAfterDependencies = function () {
    this.hs_swap.notEvaluated = false;
    this.hs_curry.notEvaluated = false;
    this.hs_snd.notEvaluated = false;
    this.hs_fst.notEvaluated = false;
    this.hs_uncurry.notEvaluated = false;
    this.hs_swap.evaluate = function (hs_ds26D87s) {
        var hs_wild26D885 = hs_ds26D87s;
        if (hs_ds26D87s.notEvaluated) {
            hs_wild26D885 = hs_ds26D87s.hscall();
        }
        var hs_a26D87x = hs_wild26D885.data[0];
        var hs_b26D87w = hs_wild26D885.data[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_b26D87w, hs_a26D87x];
        return $res;
    };
    this.hs_curry.evaluate = function (hs_f26D87D, hs_x26D87B, hs_y26D87C) {
        var hs_sat26D886 = new $hs.Data(1);
        hs_sat26D886.data = [hs_x26D87B, hs_y26D87C];
        return hs_f26D87D.hscall(hs_sat26D886);
    };
    this.hs_snd.evaluate = function (hs_ds26D87G) {
        var hs_wild26D888 = hs_ds26D87G;
        if (hs_ds26D87G.notEvaluated) {
            hs_wild26D888 = hs_ds26D87G.hscall();
        }
        var hs_y26D87K = hs_wild26D888.data[1];
        if (hs_y26D87K.notEvaluated) {
            return hs_y26D87K.hscall();
        } else {
            return hs_y26D87K;
        }
    };
    this.hs_fst.evaluate = function (hs_ds26D87M) {
        var hs_wild26D889 = hs_ds26D87M;
        if (hs_ds26D87M.notEvaluated) {
            hs_wild26D889 = hs_ds26D87M.hscall();
        }
        var hs_x26D87Q = hs_wild26D889.data[0];
        if (hs_x26D87Q.notEvaluated) {
            return hs_x26D87Q.hscall();
        } else {
            return hs_x26D87Q;
        }
    };
    this.hs_uncurry.evaluate = function (hs_f26D87Y, hs_p26D87T) {
        var hs_sat26D88e = new $hs.Thunk();
        hs_sat26D88e.evaluateOnce = function () {
            var hs_wild26D88c = hs_p26D87T;
            if (hs_p26D87T.notEvaluated) {
                hs_wild26D88c = hs_p26D87T.hscall();
            }
            var hs_y26D883 = hs_wild26D88c.data[1];
            if (hs_y26D883.notEvaluated) {
                return hs_y26D883.hscall();
            } else {
                return hs_y26D883;
            }
        };
        var hs_sat26D88g = new $hs.Thunk();
        hs_sat26D88g.evaluateOnce = function () {
            var hs_wild26D88d = hs_p26D87T;
            if (hs_p26D87T.notEvaluated) {
                hs_wild26D88d = hs_p26D87T.hscall();
            }
            var hs_x26D87X = hs_wild26D88d.data[0];
            if (hs_x26D87X.notEvaluated) {
                return hs_x26D87X.hscall();
            } else {
                return hs_x26D87X;
            }
        };
        return hs_f26D87Y.hscall(hs_sat26D88g, hs_sat26D88e);
    };
};

$hs.modules.DataziTuple = new $hs.Module();
$hs.modules.DataziTuple.dependencies = [];
$hs.modules.DataziTuple.initBeforeDependencies = function () {
    this.hs_swap = new $hs.Func(1);
    this.hs_curry = new $hs.Func(3);
    this.hs_snd = new $hs.Func(1);
    this.hs_fst = new $hs.Func(1);
    this.hs_uncurry = new $hs.Func(2);
    this.hs_swap.notEvaluated = true;
    this.hs_swap.evaluate = function (hs_ds26CJan) {
        $hs.modules.DataziTuple.loadDependencies();
        return this.evaluate(hs_ds26CJan);
    };
    this.hs_curry.notEvaluated = true;
    this.hs_curry.evaluate = function (hs_f26CJay, hs_x26CJaw, hs_y26CJax) {
        $hs.modules.DataziTuple.loadDependencies();
        return this.evaluate(hs_f26CJay, hs_x26CJaw, hs_y26CJax);
    };
    this.hs_snd.notEvaluated = true;
    this.hs_snd.evaluate = function (hs_ds26CJaB) {
        $hs.modules.DataziTuple.loadDependencies();
        return this.evaluate(hs_ds26CJaB);
    };
    this.hs_fst.notEvaluated = true;
    this.hs_fst.evaluate = function (hs_ds26CJaH) {
        $hs.modules.DataziTuple.loadDependencies();
        return this.evaluate(hs_ds26CJaH);
    };
    this.hs_uncurry.notEvaluated = true;
    this.hs_uncurry.evaluate = function (hs_f26CJaT, hs_p26CJaO) {
        $hs.modules.DataziTuple.loadDependencies();
        return this.evaluate(hs_f26CJaT, hs_p26CJaO);
    };
};
$hs.modules.DataziTuple.initAfterDependencies = function () {
    this.hs_swap.notEvaluated = false;
    this.hs_curry.notEvaluated = false;
    this.hs_snd.notEvaluated = false;
    this.hs_fst.notEvaluated = false;
    this.hs_uncurry.notEvaluated = false;
    this.hs_swap.evaluate = function (hs_ds26CJan) {
        var hs_wild26CJb0 = hs_ds26CJan;
        if (hs_ds26CJan.notEvaluated) {
            hs_wild26CJb0 = hs_ds26CJan.hscall();
        }
        var hs_a26CJas = hs_wild26CJb0.data[0];
        var hs_b26CJar = hs_wild26CJb0.data[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_b26CJar, hs_a26CJas];
        return $res;
    };
    this.hs_curry.evaluate = function (hs_f26CJay, hs_x26CJaw, hs_y26CJax) {
        var hs_sat26CJb1 = new $hs.Data(1);
        hs_sat26CJb1.data = [hs_x26CJaw, hs_y26CJax];
        return hs_f26CJay.hscall(hs_sat26CJb1);
    };
    this.hs_snd.evaluate = function (hs_ds26CJaB) {
        var hs_wild26CJb3 = hs_ds26CJaB;
        if (hs_ds26CJaB.notEvaluated) {
            hs_wild26CJb3 = hs_ds26CJaB.hscall();
        }
        var hs_y26CJaF = hs_wild26CJb3.data[1];
        if (hs_y26CJaF.notEvaluated) {
            return hs_y26CJaF.hscall();
        } else {
            return hs_y26CJaF;
        }
    };
    this.hs_fst.evaluate = function (hs_ds26CJaH) {
        var hs_wild26CJb5 = hs_ds26CJaH;
        if (hs_ds26CJaH.notEvaluated) {
            hs_wild26CJb5 = hs_ds26CJaH.hscall();
        }
        var hs_x26CJaL = hs_wild26CJb5.data[0];
        if (hs_x26CJaL.notEvaluated) {
            return hs_x26CJaL.hscall();
        } else {
            return hs_x26CJaL;
        }
    };
    this.hs_uncurry.evaluate = function (hs_f26CJaT, hs_p26CJaO) {
        var hs_sat26CJb7 = new $hs.Thunk();
        hs_sat26CJb7.evaluateOnce = function () {
            var hs_wild26CJbb = hs_p26CJaO;
            if (hs_p26CJaO.notEvaluated) {
                hs_wild26CJbb = hs_p26CJaO.hscall();
            }
            var hs_y26CJaY = hs_wild26CJbb.data[1];
            if (hs_y26CJaY.notEvaluated) {
                return hs_y26CJaY.hscall();
            } else {
                return hs_y26CJaY;
            }
        };
        var hs_sat26CJb6 = new $hs.Thunk();
        hs_sat26CJb6.evaluateOnce = function () {
            var hs_wild26CJb9 = hs_p26CJaO;
            if (hs_p26CJaO.notEvaluated) {
                hs_wild26CJb9 = hs_p26CJaO.hscall();
            }
            var hs_x26CJaS = hs_wild26CJb9.data[0];
            if (hs_x26CJaS.notEvaluated) {
                return hs_x26CJaS.hscall();
            } else {
                return hs_x26CJaS;
            }
        };
        return hs_f26CJaT.hscall(hs_sat26CJb6, hs_sat26CJb7);
    };
};
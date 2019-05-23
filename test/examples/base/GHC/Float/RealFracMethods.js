
$hs.modules.GHCziFloatziRealFracMethods = new $hs.Module();
$hs.modules.GHCziFloatziRealFracMethods.dependencies = ["GHC.Prim", "GHC.Integer", "GHC.Num", "GHC.Classes"];
$hs.modules.GHCziFloatziRealFracMethods.initBeforeDependencies = function () {
    this.hs_int2Float = new $hs.Func(1);
    this.hs_float2Int = new $hs.Func(1);
    this.hs_int2Double = new $hs.Func(1);
    this.hs_double2Int = new $hs.Func(1);
    this.hs_ceilingDoubleInt = new $hs.Func(1);
    this.hs_floorDoubleInt = new $hs.Func(1);
    this.hs_properFractionDoubleInt = new $hs.Func(1);
    this.hs_properFractionFloatInteger = new $hs.Func(1);
    this.hs_truncateFloatInteger = new $hs.Func(1);
    this.hs_ceilingFloatInt = new $hs.Func(1);
    this.hs_floorFloatInt = new $hs.Func(1);
    this.hs_properFractionFloatInt = new $hs.Func(1);
    this.hs_roundDoubleInt = new $hs.Func(1);
    this.hs_roundDoubleInteger = new $hs.Func(1);
    this.hs_roundFloatInt = new $hs.Func(1);
    this.hs_roundFloatInteger = new $hs.Func(1);
    this.hs_floorFloatInteger = new $hs.Func(1);
    this.hs_ceilingFloatInteger = new $hs.Func(1);
    this.hs_properFractionDoubleInteger = new $hs.Func(1);
    this.hs_truncateDoubleInteger = new $hs.Func(1);
    this.hs_floorDoubleInteger = new $hs.Func(1);
    this.hs_ceilingDoubleInteger = new $hs.Func(1);
    this.hs_int2Float.notEvaluated = true;
    this.hs_int2Float.evaluate = function (hs_ds26CZ0t) {
        $hs.modules.GHCziFloatziRealFracMethods.loadDependencies();
        return this.evaluate(hs_ds26CZ0t);
    };
    this.hs_float2Int.notEvaluated = true;
    this.hs_float2Int.evaluate = function (hs_ds26CZ0z) {
        $hs.modules.GHCziFloatziRealFracMethods.loadDependencies();
        return this.evaluate(hs_ds26CZ0z);
    };
    this.hs_int2Double.notEvaluated = true;
    this.hs_int2Double.evaluate = function (hs_ds26CZ0F) {
        $hs.modules.GHCziFloatziRealFracMethods.loadDependencies();
        return this.evaluate(hs_ds26CZ0F);
    };
    this.hs_double2Int.notEvaluated = true;
    this.hs_double2Int.evaluate = function (hs_ds26CZ0L) {
        $hs.modules.GHCziFloatziRealFracMethods.loadDependencies();
        return this.evaluate(hs_ds26CZ0L);
    };
    this.hs_ceilingDoubleInt.notEvaluated = true;
    this.hs_ceilingDoubleInt.evaluate = function (hs_ds26CZ0R) {
        $hs.modules.GHCziFloatziRealFracMethods.loadDependencies();
        return this.evaluate(hs_ds26CZ0R);
    };
    this.hs_floorDoubleInt.notEvaluated = true;
    this.hs_floorDoubleInt.evaluate = function (hs_ds26CZ11) {
        $hs.modules.GHCziFloatziRealFracMethods.loadDependencies();
        return this.evaluate(hs_ds26CZ11);
    };
    this.hs_properFractionDoubleInt.notEvaluated = true;
    this.hs_properFractionDoubleInt.evaluate = function (hs_ds26CZ1b) {
        $hs.modules.GHCziFloatziRealFracMethods.loadDependencies();
        return this.evaluate(hs_ds26CZ1b);
    };
    this.hs_properFractionFloatInteger.notEvaluated = true;
    this.hs_properFractionFloatInteger.evaluate = function (hs_v26CZ1q) {
        $hs.modules.GHCziFloatziRealFracMethods.loadDependencies();
        return this.evaluate(hs_v26CZ1q);
    };
    this.hs_truncateFloatInteger.notEvaluated = true;
    this.hs_truncateFloatInteger.evaluate = function (hs_x26CZ26) {
        $hs.modules.GHCziFloatziRealFracMethods.loadDependencies();
        return this.evaluate(hs_x26CZ26);
    };
    this.hs_ceilingFloatInt.notEvaluated = true;
    this.hs_ceilingFloatInt.evaluate = function (hs_ds26CZ2q) {
        $hs.modules.GHCziFloatziRealFracMethods.loadDependencies();
        return this.evaluate(hs_ds26CZ2q);
    };
    this.hs_floorFloatInt.notEvaluated = true;
    this.hs_floorFloatInt.evaluate = function (hs_ds26CZ2A) {
        $hs.modules.GHCziFloatziRealFracMethods.loadDependencies();
        return this.evaluate(hs_ds26CZ2A);
    };
    this.hs_properFractionFloatInt.notEvaluated = true;
    this.hs_properFractionFloatInt.evaluate = function (hs_ds26CZ2K) {
        $hs.modules.GHCziFloatziRealFracMethods.loadDependencies();
        return this.evaluate(hs_ds26CZ2K);
    };
    this.hs_roundDoubleInt.notEvaluated = true;
    this.hs_roundDoubleInt.evaluate = function (hs_x26CZ3a) {
        $hs.modules.GHCziFloatziRealFracMethods.loadDependencies();
        return this.evaluate(hs_x26CZ3a);
    };
    this.hs_roundDoubleInteger.notEvaluated = true;
    this.hs_roundDoubleInteger.evaluate = function (hs_x26CZ3m) {
        $hs.modules.GHCziFloatziRealFracMethods.loadDependencies();
        return this.evaluate(hs_x26CZ3m);
    };
    this.hs_roundFloatInt.notEvaluated = true;
    this.hs_roundFloatInt.evaluate = function (hs_x26CZ3X) {
        $hs.modules.GHCziFloatziRealFracMethods.loadDependencies();
        return this.evaluate(hs_x26CZ3X);
    };
    this.hs_roundFloatInteger.notEvaluated = true;
    this.hs_roundFloatInteger.evaluate = function (hs_x26CZ49) {
        $hs.modules.GHCziFloatziRealFracMethods.loadDependencies();
        return this.evaluate(hs_x26CZ49);
    };
    this.hs_floorFloatInteger.notEvaluated = true;
    this.hs_floorFloatInteger.evaluate = function (hs_ds26CZ4t) {
        $hs.modules.GHCziFloatziRealFracMethods.loadDependencies();
        return this.evaluate(hs_ds26CZ4t);
    };
    this.hs_ceilingFloatInteger.notEvaluated = true;
    this.hs_ceilingFloatInteger.evaluate = function (hs_ds26CZ4L) {
        $hs.modules.GHCziFloatziRealFracMethods.loadDependencies();
        return this.evaluate(hs_ds26CZ4L);
    };
    this.hs_properFractionDoubleInteger.notEvaluated = true;
    this.hs_properFractionDoubleInteger.evaluate = function (hs_v26CZ55) {
        $hs.modules.GHCziFloatziRealFracMethods.loadDependencies();
        return this.evaluate(hs_v26CZ55);
    };
    this.hs_truncateDoubleInteger.notEvaluated = true;
    this.hs_truncateDoubleInteger.evaluate = function (hs_x26CZ6q) {
        $hs.modules.GHCziFloatziRealFracMethods.loadDependencies();
        return this.evaluate(hs_x26CZ6q);
    };
    this.hs_floorDoubleInteger.notEvaluated = true;
    this.hs_floorDoubleInteger.evaluate = function (hs_ds26CZ73) {
        $hs.modules.GHCziFloatziRealFracMethods.loadDependencies();
        return this.evaluate(hs_ds26CZ73);
    };
    this.hs_ceilingDoubleInteger.notEvaluated = true;
    this.hs_ceilingDoubleInteger.evaluate = function (hs_ds26CZ7s) {
        $hs.modules.GHCziFloatziRealFracMethods.loadDependencies();
        return this.evaluate(hs_ds26CZ7s);
    };
};
$hs.modules.GHCziFloatziRealFracMethods.initAfterDependencies = function () {
    this.hs_int2Float.notEvaluated = false;
    this.hs_float2Int.notEvaluated = false;
    this.hs_int2Double.notEvaluated = false;
    this.hs_double2Int.notEvaluated = false;
    this.hs_ceilingDoubleInt.notEvaluated = false;
    this.hs_floorDoubleInt.notEvaluated = false;
    this.hs_properFractionDoubleInt.notEvaluated = false;
    this.hs_properFractionFloatInteger.notEvaluated = false;
    this.hs_truncateFloatInteger.notEvaluated = false;
    this.hs_ceilingFloatInt.notEvaluated = false;
    this.hs_floorFloatInt.notEvaluated = false;
    this.hs_properFractionFloatInt.notEvaluated = false;
    this.hs_roundDoubleInt.notEvaluated = false;
    this.hs_roundDoubleInteger.notEvaluated = false;
    this.hs_roundFloatInt.notEvaluated = false;
    this.hs_roundFloatInteger.notEvaluated = false;
    this.hs_floorFloatInteger.notEvaluated = false;
    this.hs_ceilingFloatInteger.notEvaluated = false;
    this.hs_properFractionDoubleInteger.notEvaluated = false;
    this.hs_truncateDoubleInteger.notEvaluated = false;
    this.hs_floorDoubleInteger.notEvaluated = false;
    this.hs_ceilingDoubleInteger.notEvaluated = false;
    var hs_czurintDouble25rvsw = new $hs.Func(1);
    var hs_czurintFloat25rvsv = new $hs.Func(1);
    this.hs_int2Float.evaluate = function (hs_ds26CZ0t) {
        var hs_wild26CZ7S = hs_ds26CZ0t;
        if (hs_ds26CZ0t.notEvaluated) {
            hs_wild26CZ7S = hs_ds26CZ0t.hscall();
        }
        var hs_i26CZ0w = hs_wild26CZ7S.data[0];
        throw "primitive operation int2Float#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CZ7T];
        return $res;
    };
    this.hs_float2Int.evaluate = function (hs_ds26CZ0z) {
        var hs_wild26CZ7U = hs_ds26CZ0z;
        if (hs_ds26CZ0z.notEvaluated) {
            hs_wild26CZ7U = hs_ds26CZ0z.hscall();
        }
        var hs_x26CZ0C = hs_wild26CZ7U.data[0];
        throw "primitive operation float2Int#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CZ7V];
        return $res;
    };
    this.hs_int2Double.evaluate = function (hs_ds26CZ0F) {
        var hs_wild26CZ7W = hs_ds26CZ0F;
        if (hs_ds26CZ0F.notEvaluated) {
            hs_wild26CZ7W = hs_ds26CZ0F.hscall();
        }
        var hs_i26CZ0I = hs_wild26CZ7W.data[0];
        throw "primitive operation int2Double#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CZ7X];
        return $res;
    };
    this.hs_double2Int.evaluate = function (hs_ds26CZ0L) {
        var hs_wild26CZ7Y = hs_ds26CZ0L;
        if (hs_ds26CZ0L.notEvaluated) {
            hs_wild26CZ7Y = hs_ds26CZ0L.hscall();
        }
        var hs_x26CZ0O = hs_wild26CZ7Y.data[0];
        throw "primitive operation double2Int#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CZ7Z];
        return $res;
    };
    this.hs_ceilingDoubleInt.evaluate = function (hs_ds26CZ0R) {
        var hs_wild26CZ80 = hs_ds26CZ0R;
        if (hs_ds26CZ0R.notEvaluated) {
            hs_wild26CZ80 = hs_ds26CZ0R.hscall();
        }
        var hs_x26CZ0V = hs_wild26CZ80.data[0];
        throw "primitive operation double2Int#. Not implemeted yet.";
        throw "primitive operation int2Double#. Not implemeted yet.";
        throw "primitive operation <##. Not implemeted yet.";
        switch (hs_wild126CZ82.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [hs_n26CZ0W];
            return $res;
        case 2:
            var hs_sat26CZ83 = ($hs.Int.addCarry(hs_n26CZ0W, 1, 0))[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26CZ83];
            return $res;
        }
    };
    this.hs_floorDoubleInt.evaluate = function (hs_ds26CZ11) {
        var hs_wild26CZ84 = hs_ds26CZ11;
        if (hs_ds26CZ11.notEvaluated) {
            hs_wild26CZ84 = hs_ds26CZ11.hscall();
        }
        var hs_x26CZ15 = hs_wild26CZ84.data[0];
        throw "primitive operation double2Int#. Not implemeted yet.";
        throw "primitive operation int2Double#. Not implemeted yet.";
        throw "primitive operation <##. Not implemeted yet.";
        switch (hs_wild126CZ86.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [hs_n26CZ16];
            return $res;
        case 2:
            var hs_sat26CZ87 = ($hs.Int.addCarry(hs_n26CZ16, ~1, 1))[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26CZ87];
            return $res;
        }
    };
    this.hs_properFractionDoubleInt.evaluate = function (hs_ds26CZ1b) {
        var hs_wild26CZ89 = hs_ds26CZ1b;
        if (hs_ds26CZ1b.notEvaluated) {
            hs_wild26CZ89 = hs_ds26CZ1b.hscall();
        }
        var hs_x26CZ1e = hs_wild26CZ89.data[0];
        throw "primitive operation ==##. Not implemeted yet.";
        switch (hs_wild126CZ8a.tag) {
        case 1:
            throw "primitive operation double2Int#. Not implemeted yet.";
            throw "primitive operation int2Double#. Not implemeted yet.";
            throw "primitive operation -##. Not implemeted yet.";
            var hs_sat26CZ8e = new $hs.Data(1);
            hs_sat26CZ8e.data = [hs_sat26CZ8d];
            var hs_sat26CZ8c = new $hs.Data(1);
            hs_sat26CZ8c.data = [hs_n26CZ1h];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26CZ8c, hs_sat26CZ8e];
            return $res;
        case 2:
            var hs_sat26CZ8b = new $hs.Data(1);
            hs_sat26CZ8b.data = [0 % 1];
            var hs_sat26CZ88 = new $hs.Data(1);
            hs_sat26CZ88.data = [0];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26CZ88, hs_sat26CZ8b];
            return $res;
        }
    };
    this.hs_properFractionFloatInteger.evaluate = function (hs_v26CZ1q) {
        var hs_wild26CZ24 = hs_v26CZ1q;
        if (hs_v26CZ1q.notEvaluated) {
            hs_wild26CZ24 = hs_v26CZ1q.hscall();
        }
        var hs_x26CZ1t = hs_wild26CZ24.data[0];
        throw "primitive operation decodeFloat_Int#. Not implemeted yet.";
        var hs_m26CZ1z = hs_wild126CZ8g[0];
        var hs_e26CZ1x = hs_wild126CZ8g[1];
        var hs_wild226CZ8h = hs_e26CZ1x < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226CZ8h.tag) {
        case 1:
            var hs_sat26CZ8v = new $hs.Data(1);
            hs_sat26CZ8v.data = [0 % 1];
            var hs_sat26CZ8u = new $hs.Thunk();
            hs_sat26CZ8u.evaluateOnce = function () {
                var hs_sat26CZ8w = new $hs.Thunk();
                hs_sat26CZ8w.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_m26CZ1z);
                };
                return $hs.modules.GHCziInteger.hs_shiftLInteger.hscall(hs_sat26CZ8w, hs_e26CZ1x);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26CZ8u, hs_sat26CZ8v];
            return $res;
        case 2:
            var hs_s26CZ1E = -hs_e26CZ1x;
            var hs_wild326CZ8i = hs_s26CZ1E > 23 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild326CZ8i.tag) {
            case 1:
                var hs_wild426CZ8k = hs_m26CZ1z < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild426CZ8k.tag) {
                case 1:
                    var hs_k26CZ1I = hs_m26CZ1z >> hs_s26CZ1E;
                    var hs_sat26CZ8r = new $hs.Thunk();
                    hs_sat26CZ8r.evaluateOnce = function () {
                        var hs_sat26CZ8s = new $hs.Thunk();
                        hs_sat26CZ8s.evaluateOnce = function () {
                            var hs_sat26CZ1M = hs_k26CZ1I << hs_s26CZ1E;
                            var hs_sat26CZ8t = ($hs.Int.addCarry(hs_m26CZ1z, ~hs_sat26CZ1M, 1))[0];
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_sat26CZ8t);
                        };
                        var hs_wild526CZ1P = $hs.modules.GHCziInteger.hs_encodeFloatInteger.hscall(hs_sat26CZ8s, hs_e26CZ1x);
                        var $res = new $hs.Data(1);
                        $res.data = [hs_wild526CZ1P];
                        return $res;
                    };
                    var hs_sat26CZ8q = new $hs.Thunk();
                    hs_sat26CZ8q.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_k26CZ1I);
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26CZ8q, hs_sat26CZ8r];
                    return $res;
                case 2:
                    var hs_sat26CZ8l = -hs_m26CZ1z;
                    var hs_sat26CZ8m = hs_sat26CZ8l >>> hs_s26CZ1E;
                    var hs_k26CZ1U = -hs_sat26CZ8m;
                    var hs_sat26CZ8n = new $hs.Thunk();
                    hs_sat26CZ8n.evaluateOnce = function () {
                        var hs_sat26CZ8o = new $hs.Thunk();
                        hs_sat26CZ8o.evaluateOnce = function () {
                            var hs_sat26CZ1Y = hs_k26CZ1U << hs_s26CZ1E;
                            var hs_sat26CZ8p = ($hs.Int.addCarry(hs_m26CZ1z, ~hs_sat26CZ1Y, 1))[0];
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_sat26CZ8p);
                        };
                        var hs_wild526CZ21 = $hs.modules.GHCziInteger.hs_encodeFloatInteger.hscall(hs_sat26CZ8o, hs_e26CZ1x);
                        var $res = new $hs.Data(1);
                        $res.data = [hs_wild526CZ21];
                        return $res;
                    };
                    var hs_sat26CZ8j = new $hs.Thunk();
                    hs_sat26CZ8j.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_k26CZ1U);
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26CZ8j, hs_sat26CZ8n];
                    return $res;
                }
            case 2:
                var hs_sat26CZ8f = new $hs.Thunk();
                hs_sat26CZ8f.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26CZ8f, hs_wild26CZ24];
                return $res;
            }
        }
    };
    this.hs_truncateFloatInteger.evaluate = function (hs_x26CZ26) {
        var hs_wild26CZ8x = hs_x26CZ26;
        if (hs_x26CZ26.notEvaluated) {
            hs_wild26CZ8x = hs_x26CZ26.hscall();
        }
        var hs_x126CZ29 = hs_wild26CZ8x.data[0];
        throw "primitive operation decodeFloat_Int#. Not implemeted yet.";
        var hs_m26CZ2f = hs_wild126CZ8y[0];
        var hs_e26CZ2d = hs_wild126CZ8y[1];
        var hs_wild226CZ8z = hs_e26CZ2d < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226CZ8z.tag) {
        case 1:
            var hs_sat26CZ8G = new $hs.Thunk();
            hs_sat26CZ8G.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_m26CZ2f);
            };
            return $hs.modules.GHCziInteger.hs_shiftLInteger.hscall(hs_sat26CZ8G, hs_e26CZ2d);
        case 2:
            var hs_s26CZ2i = -hs_e26CZ2d;
            var hs_wild326CZ8A = hs_s26CZ2i > 23 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild326CZ8A.tag) {
            case 1:
                var hs_wild426CZ8B = hs_m26CZ2f < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild426CZ8B.tag) {
                case 1:
                    var hs_sat26CZ8F = hs_m26CZ2f >> hs_s26CZ2i;
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_sat26CZ8F);
                case 2:
                    var hs_sat26CZ8C = -hs_m26CZ2f;
                    var hs_sat26CZ8D = hs_sat26CZ8C >>> hs_s26CZ2i;
                    var hs_sat26CZ8E = -hs_sat26CZ8D;
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_sat26CZ8E);
                }
            case 2:
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            }
        }
    };
    this.hs_ceilingFloatInt.evaluate = function (hs_ds26CZ2q) {
        var hs_wild26CZ8H = hs_ds26CZ2q;
        if (hs_ds26CZ2q.notEvaluated) {
            hs_wild26CZ8H = hs_ds26CZ2q.hscall();
        }
        var hs_x26CZ2u = hs_wild26CZ8H.data[0];
        throw "primitive operation float2Int#. Not implemeted yet.";
        throw "primitive operation int2Float#. Not implemeted yet.";
        throw "primitive operation ltFloat#. Not implemeted yet.";
        switch (hs_wild126CZ8J.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [hs_n26CZ2v];
            return $res;
        case 2:
            var hs_sat26CZ8K = ($hs.Int.addCarry(hs_n26CZ2v, 1, 0))[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26CZ8K];
            return $res;
        }
    };
    this.hs_floorFloatInt.evaluate = function (hs_ds26CZ2A) {
        var hs_wild26CZ8L = hs_ds26CZ2A;
        if (hs_ds26CZ2A.notEvaluated) {
            hs_wild26CZ8L = hs_ds26CZ2A.hscall();
        }
        var hs_x26CZ2E = hs_wild26CZ8L.data[0];
        throw "primitive operation float2Int#. Not implemeted yet.";
        throw "primitive operation int2Float#. Not implemeted yet.";
        throw "primitive operation ltFloat#. Not implemeted yet.";
        switch (hs_wild126CZ8N.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [hs_n26CZ2F];
            return $res;
        case 2:
            var hs_sat26CZ8O = ($hs.Int.addCarry(hs_n26CZ2F, ~1, 1))[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26CZ8O];
            return $res;
        }
    };
    this.hs_properFractionFloatInt.evaluate = function (hs_ds26CZ2K) {
        var hs_wild26CZ8Q = hs_ds26CZ2K;
        if (hs_ds26CZ2K.notEvaluated) {
            hs_wild26CZ8Q = hs_ds26CZ2K.hscall();
        }
        var hs_x26CZ2N = hs_wild26CZ8Q.data[0];
        throw "primitive operation eqFloat#. Not implemeted yet.";
        switch (hs_wild126CZ8R.tag) {
        case 1:
            throw "primitive operation float2Int#. Not implemeted yet.";
            throw "primitive operation int2Float#. Not implemeted yet.";
            throw "primitive operation minusFloat#. Not implemeted yet.";
            var hs_sat26CZ8V = new $hs.Data(1);
            hs_sat26CZ8V.data = [hs_sat26CZ8U];
            var hs_sat26CZ8T = new $hs.Data(1);
            hs_sat26CZ8T.data = [hs_n26CZ2Q];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26CZ8T, hs_sat26CZ8V];
            return $res;
        case 2:
            var hs_sat26CZ8S = new $hs.Data(1);
            hs_sat26CZ8S.data = [0 % 1];
            var hs_sat26CZ8P = new $hs.Data(1);
            hs_sat26CZ8P.data = [0];
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26CZ8P, hs_sat26CZ8S];
            return $res;
        }
    };
    hs_czurintDouble25rvsw.evaluate = function (hs_ds26CZ2Z) {
        var hs_ds126CZ8X = hs_ds26CZ2Z;
        if (hs_ds26CZ2Z.notEvaluated) {
            hs_ds126CZ8X = hs_ds26CZ2Z.hscall();
        }
        var hs_ds226CZ33 = hs_ds126CZ8X.data[0];
        var hs_wild26CZ8Y = [$hs.modules.GHCziPrim.hs_realWorldzh, rintDouble(hs_ds226CZ33)];
        var hs_ds426CZ38 = hs_wild26CZ8Y[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426CZ38];
        return $res;
    };
    this.hs_roundDoubleInt.evaluate = function (hs_x26CZ3a) {
        var hs_ds26CZ8Z = hs_x26CZ3a;
        if (hs_x26CZ3a.notEvaluated) {
            hs_ds26CZ8Z = hs_x26CZ3a.hscall();
        }
        var hs_ds126CZ3e = hs_ds26CZ8Z.data[0];
        var hs_wild26CZ90 = [$hs.modules.GHCziPrim.hs_realWorldzh, rintDouble(hs_ds126CZ3e)];
        var hs_ds326CZ3j = hs_wild26CZ90[1];
        throw "primitive operation double2Int#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CZ92];
        return $res;
    };
    this.hs_roundDoubleInteger.evaluate = function (hs_x26CZ3m) {
        var hs_ds26CZ94 = hs_x26CZ3m;
        if (hs_x26CZ3m.notEvaluated) {
            hs_ds26CZ94 = hs_x26CZ3m.hscall();
        }
        var hs_ds126CZ3q = hs_ds26CZ94.data[0];
        var hs_wild26CZ95 = [$hs.modules.GHCziPrim.hs_realWorldzh, rintDouble(hs_ds126CZ3q)];
        var hs_ds326CZ3v = hs_wild26CZ95[1];
        var hs_wild126CZ97 = $hs.modules.GHCziInteger.hs_decodeDoubleInteger.hscall(hs_ds326CZ3v);
        var hs_m26CZ3B = hs_wild126CZ97[0];
        var hs_e26CZ3z = hs_wild126CZ97[1];
        var hs_wild226CZ98 = hs_e26CZ3z < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226CZ98.tag) {
        case 1:
            return $hs.modules.GHCziInteger.hs_shiftLInteger.hscall(hs_m26CZ3B, hs_e26CZ3z);
        case 2:
            var hs_n26CZ3E = $hs.modules.GHCziInteger.hs_integerToInt64.hscall(hs_m26CZ3B);
            var hs_sat26CZ99 = -hs_e26CZ3z;
            var hs_wild326CZ9a = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_uncheckedIShiftRA64(hs_n26CZ3E, hs_sat26CZ99)];
            var hs_ds526CZ3K = hs_wild326CZ9a[1];
            return $hs.modules.GHCziInteger.hs_int64ToInteger.hscall(hs_ds526CZ3K);
        }
    };
    hs_czurintFloat25rvsv.evaluate = function (hs_ds26CZ3M) {
        var hs_ds126CZ9c = hs_ds26CZ3M;
        if (hs_ds26CZ3M.notEvaluated) {
            hs_ds126CZ9c = hs_ds26CZ3M.hscall();
        }
        var hs_ds226CZ3Q = hs_ds126CZ9c.data[0];
        var hs_wild26CZ9d = [$hs.modules.GHCziPrim.hs_realWorldzh, rintFloat(hs_ds226CZ3Q)];
        var hs_ds426CZ3V = hs_wild26CZ9d[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426CZ3V];
        return $res;
    };
    this.hs_roundFloatInt.evaluate = function (hs_x26CZ3X) {
        var hs_ds26CZ9e = hs_x26CZ3X;
        if (hs_x26CZ3X.notEvaluated) {
            hs_ds26CZ9e = hs_x26CZ3X.hscall();
        }
        var hs_ds126CZ41 = hs_ds26CZ9e.data[0];
        var hs_wild26CZ9f = [$hs.modules.GHCziPrim.hs_realWorldzh, rintFloat(hs_ds126CZ41)];
        var hs_ds326CZ46 = hs_wild26CZ9f[1];
        throw "primitive operation float2Int#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CZ9h];
        return $res;
    };
    this.hs_roundFloatInteger.evaluate = function (hs_x26CZ49) {
        var hs_ds26CZ9i = hs_x26CZ49;
        if (hs_x26CZ49.notEvaluated) {
            hs_ds26CZ9i = hs_x26CZ49.hscall();
        }
        var hs_ds126CZ4d = hs_ds26CZ9i.data[0];
        var hs_wild26CZ9j = [$hs.modules.GHCziPrim.hs_realWorldzh, rintFloat(hs_ds126CZ4d)];
        var hs_ds326CZ4i = hs_wild26CZ9j[1];
        throw "primitive operation decodeFloat_Int#. Not implemeted yet.";
        var hs_m26CZ4o = hs_wild126CZ9l[0];
        var hs_e26CZ4m = hs_wild126CZ9l[1];
        var hs_wild226CZ9m = hs_e26CZ4m < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226CZ9m.tag) {
        case 1:
            var hs_sat26CZ9p = new $hs.Thunk();
            hs_sat26CZ9p.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_m26CZ4o);
            };
            return $hs.modules.GHCziInteger.hs_shiftLInteger.hscall(hs_sat26CZ9p, hs_e26CZ4m);
        case 2:
            var hs_sat26CZ9n = -hs_e26CZ4m;
            var hs_sat26CZ9o = hs_m26CZ4o >>> hs_sat26CZ9n;
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_sat26CZ9o);
        }
    };
    this.hs_floorFloatInteger.evaluate = function (hs_ds26CZ4t) {
        var hs_wild26CZ9r = hs_ds26CZ4t;
        if (hs_ds26CZ4t.notEvaluated) {
            hs_wild26CZ9r = hs_ds26CZ4t.hscall();
        }
        var hs_x26CZ4w = hs_wild26CZ9r.data[0];
        throw "primitive operation decodeFloat_Int#. Not implemeted yet.";
        var hs_m26CZ4C = hs_wild126CZ9s[0];
        var hs_e26CZ4A = hs_wild126CZ9s[1];
        var hs_wild226CZ9t = hs_e26CZ4A < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226CZ9t.tag) {
        case 1:
            var hs_sat26CZ9x = new $hs.Thunk();
            hs_sat26CZ9x.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_m26CZ4C);
            };
            return $hs.modules.GHCziInteger.hs_shiftLInteger.hscall(hs_sat26CZ9x, hs_e26CZ4A);
        case 2:
            var hs_s26CZ4F = -hs_e26CZ4A;
            var hs_wild326CZ9u = hs_s26CZ4F > 23 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild326CZ9u.tag) {
            case 1:
                var hs_sat26CZ9w = hs_m26CZ4C >>> hs_s26CZ4F;
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_sat26CZ9w);
            case 2:
                var hs_wild426CZ9v = hs_m26CZ4C < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild426CZ9v.tag) {
                case 1:
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                case 2:
                    var hs_sat26CZ9q = new $hs.Thunk();
                    hs_sat26CZ9q.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26CZ9q);
                }
            }
        }
    };
    this.hs_ceilingFloatInteger.evaluate = function (hs_ds26CZ4L) {
        var hs_wild26CZ9z = hs_ds26CZ4L;
        if (hs_ds26CZ4L.notEvaluated) {
            hs_wild26CZ9z = hs_ds26CZ4L.hscall();
        }
        var hs_x26CZ4O = hs_wild26CZ9z.data[0];
        var hs_sat26CZ9y = new $hs.Thunk();
        hs_sat26CZ9y.evaluateOnce = function () {
            throw "primitive operation negateFloat#. Not implemeted yet.";
            throw "primitive operation decodeFloat_Int#. Not implemeted yet.";
            var hs_m26CZ4V = hs_wild126CZ9C[0];
            var hs_e26CZ4T = hs_wild126CZ9C[1];
            var hs_wild226CZ9D = hs_e26CZ4T < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild226CZ9D.tag) {
            case 1:
                var hs_sat26CZ9H = new $hs.Thunk();
                hs_sat26CZ9H.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_m26CZ4V);
                };
                return $hs.modules.GHCziInteger.hs_shiftLInteger.hscall(hs_sat26CZ9H, hs_e26CZ4T);
            case 2:
                var hs_s26CZ4Y = -hs_e26CZ4T;
                var hs_wild326CZ9E = hs_s26CZ4Y > 23 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild326CZ9E.tag) {
                case 1:
                    var hs_sat26CZ9G = hs_m26CZ4V >>> hs_s26CZ4Y;
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_sat26CZ9G);
                case 2:
                    var hs_wild426CZ9F = hs_m26CZ4V < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild426CZ9F.tag) {
                    case 1:
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    case 2:
                        var hs_sat26CZ9A = new $hs.Thunk();
                        hs_sat26CZ9A.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26CZ9A);
                    }
                }
            }
        };
        return $hs.modules.GHCziInteger.hs_negateInteger.hscall(hs_sat26CZ9y);
    };
    this.hs_properFractionDoubleInteger.evaluate = function (hs_v26CZ55) {
        var hs_wild26CZ6o = hs_v26CZ55;
        if (hs_v26CZ55.notEvaluated) {
            hs_wild26CZ6o = hs_v26CZ55.hscall();
        }
        var hs_x26CZ58 = hs_wild26CZ6o.data[0];
        var hs_wild126CZ9J = $hs.modules.GHCziInteger.hs_decodeDoubleInteger.hscall(hs_x26CZ58);
        var hs_m26CZ5e = hs_wild126CZ9J[0];
        var hs_e26CZ5c = hs_wild126CZ9J[1];
        var hs_wild226CZ9K = hs_e26CZ5c < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226CZ9K.tag) {
        case 1:
            var hs_sat26CZac = new $hs.Data(1);
            hs_sat26CZac.data = [0 % 1];
            var hs_sat26CZab = new $hs.Thunk();
            hs_sat26CZab.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_shiftLInteger.hscall(hs_m26CZ5e, hs_e26CZ5c);
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26CZab, hs_sat26CZac];
            return $res;
        case 2:
            var hs_s26CZ5i = -hs_e26CZ5c;
            var hs_wild326CZ9L = hs_s26CZ5i > 52 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild326CZ9L.tag) {
            case 1:
                var hs_sat26CZ9N = new $hs.Thunk();
                hs_sat26CZ9N.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_wild426CZ9O = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_m26CZ5e, hs_sat26CZ9N);
                switch (hs_wild426CZ9O.tag) {
                case 1:
                    var hs_n26CZ5o = $hs.modules.GHCziInteger.hs_integerToInt64.hscall(hs_m26CZ5e);
                    var hs_wild526CZa3 = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_uncheckedIShiftRA64(hs_n26CZ5o, hs_s26CZ5i)];
                    var hs_ds326CZ5t = hs_wild526CZa3[1];
                    var hs_sat26CZa5 = new $hs.Thunk();
                    hs_sat26CZa5.evaluateOnce = function () {
                        var hs_wild626CZa6 = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_uncheckedIShiftL64(hs_ds326CZ5t, hs_s26CZ5i)];
                        var hs_ds426CZ5B = hs_wild626CZa6[1];
                        var hs_wild726CZa8 = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_minusInt64(hs_n26CZ5o, hs_ds426CZ5B)];
                        var hs_ds626CZ5G = hs_wild726CZa8[1];
                        var hs_sat26CZaa = new $hs.Thunk();
                        hs_sat26CZaa.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_int64ToInteger.hscall(hs_ds626CZ5G);
                        };
                        var hs_wild826CZ5J = $hs.modules.GHCziInteger.hs_encodeDoubleInteger.hscall(hs_sat26CZaa, hs_e26CZ5c);
                        var $res = new $hs.Data(1);
                        $res.data = [hs_wild826CZ5J];
                        return $res;
                    };
                    var hs_sat26CZa2 = new $hs.Thunk();
                    hs_sat26CZa2.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_int64ToInteger.hscall(hs_ds326CZ5t);
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26CZa2, hs_sat26CZa5];
                    return $res;
                case 2:
                    var hs_sat26CZ9P = new $hs.Thunk();
                    hs_sat26CZ9P.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_negateInteger.hscall(hs_m26CZ5e);
                    };
                    var hs_n26CZ5O = $hs.modules.GHCziInteger.hs_integerToInt64.hscall(hs_sat26CZ9P);
                    var hs_wild526CZ9Q = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_uncheckedIShiftRA64(hs_n26CZ5O, hs_s26CZ5i)];
                    var hs_ds326CZ5U = hs_wild526CZ9Q[1];
                    var hs_sat26CZ9S = new $hs.Thunk();
                    hs_sat26CZ9S.evaluateOnce = function () {
                        var hs_wild626CZ9V = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_uncheckedIShiftL64(hs_ds326CZ5U, hs_s26CZ5i)];
                        var hs_ds426CZ67 = hs_wild626CZ9V[1];
                        var hs_wild726CZ9X = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_minusInt64(hs_n26CZ5O, hs_ds426CZ67)];
                        var hs_ds626CZ6d = hs_wild726CZ9X[1];
                        var hs_sat26CZ9Z = new $hs.Thunk();
                        hs_sat26CZ9Z.evaluateOnce = function () {
                            var hs_wild826CZa1 = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_negateInt64(hs_ds626CZ6d)];
                            var hs_ds826CZ6i = hs_wild826CZa1[1];
                            return $hs.modules.GHCziInteger.hs_int64ToInteger.hscall(hs_ds826CZ6i);
                        };
                        var hs_wild826CZ6l = $hs.modules.GHCziInteger.hs_encodeDoubleInteger.hscall(hs_sat26CZ9Z, hs_e26CZ5c);
                        var $res = new $hs.Data(1);
                        $res.data = [hs_wild826CZ6l];
                        return $res;
                    };
                    var hs_sat26CZ9M = new $hs.Thunk();
                    hs_sat26CZ9M.evaluateOnce = function () {
                        var hs_wild626CZ9U = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_negateInt64(hs_ds326CZ5U)];
                        var hs_ds426CZ5Z = hs_wild626CZ9U[1];
                        return $hs.modules.GHCziInteger.hs_int64ToInteger.hscall(hs_ds426CZ5Z);
                    };
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26CZ9M, hs_sat26CZ9S];
                    return $res;
                }
            case 2:
                var hs_sat26CZ9I = new $hs.Thunk();
                hs_sat26CZ9I.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26CZ9I, hs_wild26CZ6o];
                return $res;
            }
        }
    };
    this.hs_truncateDoubleInteger.evaluate = function (hs_x26CZ6q) {
        var hs_wild26CZad = hs_x26CZ6q;
        if (hs_x26CZ6q.notEvaluated) {
            hs_wild26CZad = hs_x26CZ6q.hscall();
        }
        var hs_x126CZ6t = hs_wild26CZad.data[0];
        var hs_wild126CZae = $hs.modules.GHCziInteger.hs_decodeDoubleInteger.hscall(hs_x126CZ6t);
        var hs_m26CZ6z = hs_wild126CZae[0];
        var hs_e26CZ6x = hs_wild126CZae[1];
        var hs_wild226CZaf = hs_e26CZ6x < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226CZaf.tag) {
        case 1:
            return $hs.modules.GHCziInteger.hs_shiftLInteger.hscall(hs_m26CZ6z, hs_e26CZ6x);
        case 2:
            var hs_s26CZ6B = -hs_e26CZ6x;
            var hs_wild326CZag = hs_s26CZ6B > 52 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild326CZag.tag) {
            case 1:
                var hs_sat26CZai = new $hs.Thunk();
                hs_sat26CZai.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_wild426CZaj = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_m26CZ6z, hs_sat26CZai);
                switch (hs_wild426CZaj.tag) {
                case 1:
                    var hs_n26CZ6H = $hs.modules.GHCziInteger.hs_integerToInt64.hscall(hs_m26CZ6z);
                    var hs_wild526CZap = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_uncheckedIShiftRA64(hs_n26CZ6H, hs_s26CZ6B)];
                    var hs_ds326CZ6M = hs_wild526CZap[1];
                    return $hs.modules.GHCziInteger.hs_int64ToInteger.hscall(hs_ds326CZ6M);
                case 2:
                    var hs_sat26CZak = new $hs.Thunk();
                    hs_sat26CZak.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_negateInteger.hscall(hs_m26CZ6z);
                    };
                    var hs_n26CZ6Q = $hs.modules.GHCziInteger.hs_integerToInt64.hscall(hs_sat26CZak);
                    var hs_wild526CZal = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_uncheckedIShiftRA64(hs_n26CZ6Q, hs_s26CZ6B)];
                    var hs_ds326CZ6W = hs_wild526CZal[1];
                    var hs_wild626CZan = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_negateInt64(hs_ds326CZ6W)];
                    var hs_ds426CZ71 = hs_wild626CZan[1];
                    return $hs.modules.GHCziInteger.hs_int64ToInteger.hscall(hs_ds426CZ71);
                }
            case 2:
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            }
        }
    };
    this.hs_floorDoubleInteger.evaluate = function (hs_ds26CZ73) {
        var hs_wild26CZar = hs_ds26CZ73;
        if (hs_ds26CZ73.notEvaluated) {
            hs_wild26CZar = hs_ds26CZ73.hscall();
        }
        var hs_x26CZ76 = hs_wild26CZar.data[0];
        var hs_wild126CZas = $hs.modules.GHCziInteger.hs_decodeDoubleInteger.hscall(hs_x26CZ76);
        var hs_m26CZ7c = hs_wild126CZas[0];
        var hs_e26CZ7a = hs_wild126CZas[1];
        var hs_wild226CZat = hs_e26CZ7a < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226CZat.tag) {
        case 1:
            return $hs.modules.GHCziInteger.hs_shiftLInteger.hscall(hs_m26CZ7c, hs_e26CZ7a);
        case 2:
            var hs_s26CZ7e = -hs_e26CZ7a;
            var hs_wild326CZau = hs_s26CZ7e > 52 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild326CZau.tag) {
            case 1:
                var hs_n26CZ7i = $hs.modules.GHCziInteger.hs_integerToInt64.hscall(hs_m26CZ7c);
                var hs_wild426CZay = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_uncheckedIShiftRA64(hs_n26CZ7i, hs_s26CZ7e)];
                var hs_ds326CZ7n = hs_wild426CZay[1];
                return $hs.modules.GHCziInteger.hs_int64ToInteger.hscall(hs_ds326CZ7n);
            case 2:
                var hs_sat26CZav = new $hs.Thunk();
                hs_sat26CZav.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                var hs_wild426CZaw = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_m26CZ7c, hs_sat26CZav);
                switch (hs_wild426CZaw.tag) {
                case 1:
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                case 2:
                    var hs_sat26CZaq = new $hs.Thunk();
                    hs_sat26CZaq.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26CZaq);
                }
            }
        }
    };
    this.hs_ceilingDoubleInteger.evaluate = function (hs_ds26CZ7s) {
        var hs_wild26CZaA = hs_ds26CZ7s;
        if (hs_ds26CZ7s.notEvaluated) {
            hs_wild26CZaA = hs_ds26CZ7s.hscall();
        }
        var hs_x26CZ7v = hs_wild26CZaA.data[0];
        var hs_sat26CZaz = new $hs.Thunk();
        hs_sat26CZaz.evaluateOnce = function () {
            throw "primitive operation negateDouble#. Not implemeted yet.";
            var hs_wild126CZaD = $hs.modules.GHCziInteger.hs_decodeDoubleInteger.hscall(hs_sat26CZaC);
            var hs_m26CZ7C = hs_wild126CZaD[0];
            var hs_e26CZ7A = hs_wild126CZaD[1];
            var hs_wild226CZaE = hs_e26CZ7A < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild226CZaE.tag) {
            case 1:
                return $hs.modules.GHCziInteger.hs_shiftLInteger.hscall(hs_m26CZ7C, hs_e26CZ7A);
            case 2:
                var hs_s26CZ7E = -hs_e26CZ7A;
                var hs_wild326CZaF = hs_s26CZ7E > 52 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild326CZaF.tag) {
                case 1:
                    var hs_n26CZ7I = $hs.modules.GHCziInteger.hs_integerToInt64.hscall(hs_m26CZ7C);
                    var hs_wild426CZaJ = [$hs.modules.GHCziPrim.hs_realWorldzh, hs_uncheckedIShiftRA64(hs_n26CZ7I, hs_s26CZ7E)];
                    var hs_ds326CZ7N = hs_wild426CZaJ[1];
                    return $hs.modules.GHCziInteger.hs_int64ToInteger.hscall(hs_ds326CZ7N);
                case 2:
                    var hs_sat26CZaG = new $hs.Thunk();
                    hs_sat26CZaG.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    var hs_wild426CZaH = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_m26CZ7C, hs_sat26CZaG);
                    switch (hs_wild426CZaH.tag) {
                    case 1:
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    case 2:
                        var hs_sat26CZaB = new $hs.Thunk();
                        hs_sat26CZaB.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26CZaB);
                    }
                }
            }
        };
        return $hs.modules.GHCziInteger.hs_negateInteger.hscall(hs_sat26CZaz);
    };
};
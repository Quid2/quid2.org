
$hs.modules.DataziMaybe = new $hs.Module();
$hs.modules.DataziMaybe.dependencies = ["GHC.Prim", "GHC.Types", "GHC.Base", "GHC.Err", "GHC.Classes"];
$hs.modules.DataziMaybe.initBeforeDependencies = function () {
    this.hs_mapMaybe = new $hs.Func(2);
    this.hs_catMaybes = new $hs.Func(1);
    this.hs_listToMaybe = new $hs.Func(1);
    this.hs_maybeToList = new $hs.Func(1);
    this.hs_fromMaybe = new $hs.Func(2);
    this.hs_fromJust = new $hs.Func(1);
    this.hs_isNothing = new $hs.Func(1);
    this.hs_isJust = new $hs.Func(1);
    this.hs_maybe = new $hs.Func(3);
    this.hs_zdfFunctorMaybe = new $hs.Data(1);
    this.hs_zdfMonadMaybe = new $hs.Data(1);
    this.hs_zdfOrdMaybe = new $hs.Func(2);
    this.hs_zdfEqMaybe = new $hs.Func(1);
    this.hs_Nothing = new $hs.Data(1);
    this.hs_Just = new $hs.Func(1);
    this.hs_mapMaybe.notEvaluated = true;
    this.hs_mapMaybe.evaluate = function (hs_ds26D81r, hs_ds126D81m) {
        $hs.modules.DataziMaybe.loadDependencies();
        return this.evaluate(hs_ds26D81r, hs_ds126D81m);
    };
    this.hs_catMaybes.notEvaluated = true;
    this.hs_catMaybes.evaluate = function (hs_ls26D81L) {
        $hs.modules.DataziMaybe.loadDependencies();
        return this.evaluate(hs_ls26D81L);
    };
    this.hs_listToMaybe.notEvaluated = true;
    this.hs_listToMaybe.evaluate = function (hs_ds26D81N) {
        $hs.modules.DataziMaybe.loadDependencies();
        return this.evaluate(hs_ds26D81N);
    };
    this.hs_maybeToList.notEvaluated = true;
    this.hs_maybeToList.evaluate = function (hs_ds26D81T) {
        $hs.modules.DataziMaybe.loadDependencies();
        return this.evaluate(hs_ds26D81T);
    };
    this.hs_fromMaybe.notEvaluated = true;
    this.hs_fromMaybe.evaluate = function (hs_d26D821, hs_x26D81Z) {
        $hs.modules.DataziMaybe.loadDependencies();
        return this.evaluate(hs_d26D821, hs_x26D81Z);
    };
    this.hs_fromJust.notEvaluated = true;
    this.hs_fromJust.evaluate = function (hs_ds26D825) {
        $hs.modules.DataziMaybe.loadDependencies();
        return this.evaluate(hs_ds26D825);
    };
    this.hs_isNothing.notEvaluated = true;
    this.hs_isNothing.evaluate = function (hs_ds26D82b) {
        $hs.modules.DataziMaybe.loadDependencies();
        return this.evaluate(hs_ds26D82b);
    };
    this.hs_isJust.notEvaluated = true;
    this.hs_isJust.evaluate = function (hs_ds26D82f) {
        $hs.modules.DataziMaybe.loadDependencies();
        return this.evaluate(hs_ds26D82f);
    };
    this.hs_maybe.notEvaluated = true;
    this.hs_maybe.evaluate = function (hs_n26D82n, hs_ds26D82q, hs_ds126D82l) {
        $hs.modules.DataziMaybe.loadDependencies();
        return this.evaluate(hs_n26D82n, hs_ds26D82q, hs_ds126D82l);
    };
    this.hs_zdfFunctorMaybe.notEvaluated = true;
    this.hs_zdfFunctorMaybe.evaluate = function () {
        $hs.modules.DataziMaybe.loadDependencies();
        return this;
    };
    this.hs_zdfMonadMaybe.notEvaluated = true;
    this.hs_zdfMonadMaybe.evaluate = function () {
        $hs.modules.DataziMaybe.loadDependencies();
        return this;
    };
    this.hs_zdfOrdMaybe.notEvaluated = true;
    this.hs_zdfOrdMaybe.evaluate = function (hs_zddEq26D84w, hs_zddOrd26D84x) {
        $hs.modules.DataziMaybe.loadDependencies();
        return this.evaluate(hs_zddEq26D84w, hs_zddOrd26D84x);
    };
    this.hs_zdfEqMaybe.notEvaluated = true;
    this.hs_zdfEqMaybe.evaluate = function (hs_zddEq26D85g) {
        $hs.modules.DataziMaybe.loadDependencies();
        return this.evaluate(hs_zddEq26D85g);
    };
    this.hs_Nothing.notEvaluated = true;
    this.hs_Nothing.evaluate = function () {
        $hs.modules.DataziMaybe.loadDependencies();
        return this;
    };
    this.hs_Just.notEvaluated = true;
    this.hs_Just.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziMaybe.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.DataziMaybe.initAfterDependencies = function () {
    this.hs_mapMaybe.notEvaluated = false;
    this.hs_catMaybes.notEvaluated = false;
    this.hs_listToMaybe.notEvaluated = false;
    this.hs_maybeToList.notEvaluated = false;
    this.hs_fromMaybe.notEvaluated = false;
    this.hs_fromJust.notEvaluated = false;
    this.hs_isNothing.notEvaluated = false;
    this.hs_isJust.notEvaluated = false;
    this.hs_maybe.notEvaluated = false;
    this.hs_zdfFunctorMaybe.notEvaluated = false;
    this.hs_zdfFunctorMaybe.evaluate = function () {
        return this;
    };
    this.hs_zdfMonadMaybe.notEvaluated = false;
    this.hs_zdfMonadMaybe.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdMaybe.notEvaluated = false;
    this.hs_zdfEqMaybe.notEvaluated = false;
    this.hs_Nothing.notEvaluated = false;
    this.hs_Nothing.evaluate = function () {
        return this;
    };
    this.hs_Just.notEvaluated = false;
    var hs_zdcfmap25uJwc = new $hs.Func(2);
    var hs_zdczlzd25uJwm = new $hs.Thunk();
    var hs_zdcfail25uJwo = new $hs.Func(1);
    var hs_zdczgzg25uJws = new $hs.Func(2);
    var hs_zdczgzgze25uJwA = new $hs.Func(2);
    var hs_zdczlze25uJwJ = new $hs.Func(4);
    var hs_zdczg25uJx1 = new $hs.Func(4);
    var hs_zdczgze25uJxj = new $hs.Func(4);
    var hs_zdczl25uJxB = new $hs.Func(4);
    var hs_zdccompare25uJxT = new $hs.Func(4);
    var hs_zdcmin25uJyb = new $hs.Func(2);
    var hs_zdcmax25uJyd = new $hs.Func(2);
    var hs_zdczeze25uJyA = new $hs.Func(3);
    var hs_zdczsze25uJyY = new $hs.Func(1);
    this.hs_mapMaybe.evaluate = function (hs_ds26D81r, hs_ds126D81m) {
        var hs_wild26D85t = hs_ds126D81m;
        if (hs_ds126D81m.notEvaluated) {
            hs_wild26D85t = hs_ds126D81m.hscall();
        }
        switch (hs_wild26D85t.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26D81q = hs_wild26D85t.data[0];
            var hs_xs26D81t = hs_wild26D85t.data[1];
            var hs_wild126D85u = hs_ds26D81r.hscall(hs_x26D81q);
            switch (hs_wild126D85u.tag) {
            case 1:
                return $hs.modules.DataziMaybe.hs_mapMaybe.hscall(hs_ds26D81r, hs_xs26D81t);
            case 2:
                var hs_r26D81v = hs_wild126D85u.data[0];
                var hs_sat26D85v = new $hs.Thunk();
                hs_sat26D85v.evaluateOnce = function () {
                    return $hs.modules.DataziMaybe.hs_mapMaybe.hscall(hs_ds26D81r, hs_xs26D81t);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_r26D81v, hs_sat26D85v];
                return $res;
            }
        }
    };
    this.hs_catMaybes.evaluate = function (hs_ls26D81L) {
        var hs_ds26D81H = new $hs.Func(1);
        hs_ds26D81H.evaluate = function (hs_ds126D81A) {
            var hs_ds226D85w = hs_ds126D81A;
            if (hs_ds126D81A.notEvaluated) {
                hs_ds226D85w = hs_ds126D81A.hscall();
            }
            switch (hs_ds226D85w.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326D81E = hs_ds226D85w.data[0];
                var hs_ds426D81G = hs_ds226D85w.data[1];
                var hs_wild26D85x = hs_ds326D81E;
                if (hs_ds326D81E.notEvaluated) {
                    hs_wild26D85x = hs_ds326D81E.hscall();
                }
                switch (hs_wild26D85x.tag) {
                case 1:
                    return hs_ds26D81H.hscall(hs_ds426D81G);
                case 2:
                    var hs_x26D81J = hs_wild26D85x.data[0];
                    var hs_sat26D85y = new $hs.Thunk();
                    hs_sat26D85y.evaluateOnce = function () {
                        return hs_ds26D81H.hscall(hs_ds426D81G);
                    };
                    var $res = new $hs.Data(2);
                    $res.data = [hs_x26D81J, hs_sat26D85y];
                    return $res;
                }
            }
        };
        return hs_ds26D81H.hscall(hs_ls26D81L);
    };
    this.hs_listToMaybe.evaluate = function (hs_ds26D81N) {
        var hs_wild26D85z = hs_ds26D81N;
        if (hs_ds26D81N.notEvaluated) {
            hs_wild26D85z = hs_ds26D81N.hscall();
        }
        switch (hs_wild26D85z.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_a26D81R = hs_wild26D85z.data[0];
            var $res = new $hs.Data(2);
            $res.data = [hs_a26D81R];
            return $res;
        }
    };
    this.hs_maybeToList.evaluate = function (hs_ds26D81T) {
        var hs_wild26D85B = hs_ds26D81T;
        if (hs_ds26D81T.notEvaluated) {
            hs_wild26D85B = hs_ds26D81T.hscall();
        }
        switch (hs_wild26D85B.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26D81W = hs_wild26D85B.data[0];
            var $res = new $hs.Data(2);
            $res.data = [hs_x26D81W, $hs.modules.GHCziTypes.hs_ZMZN];
            return $res;
        }
    };
    this.hs_fromMaybe.evaluate = function (hs_d26D821, hs_x26D81Z) {
        var hs_wild26D85C = hs_x26D81Z;
        if (hs_x26D81Z.notEvaluated) {
            hs_wild26D85C = hs_x26D81Z.hscall();
        }
        switch (hs_wild26D85C.tag) {
        case 1:
            if (hs_d26D821.notEvaluated) {
                return hs_d26D821.hscall();
            } else {
                return hs_d26D821;
            }
        case 2:
            var hs_v26D823 = hs_wild26D85C.data[0];
            if (hs_v26D823.notEvaluated) {
                return hs_v26D823.hscall();
            } else {
                return hs_v26D823;
            }
        }
    };
    this.hs_fromJust.evaluate = function (hs_ds26D825) {
        var hs_wild26D85E = hs_ds26D825;
        if (hs_ds26D825.notEvaluated) {
            hs_wild26D85E = hs_ds26D825.hscall();
        }
        switch (hs_wild26D85E.tag) {
        case 1:
            var hs_sat26D85D = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Maybe.fromJust: Nothing\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D85D);
        case 2:
            var hs_x26D829 = hs_wild26D85E.data[0];
            if (hs_x26D829.notEvaluated) {
                return hs_x26D829.hscall();
            } else {
                return hs_x26D829;
            }
        }
    };
    this.hs_isNothing.evaluate = function (hs_ds26D82b) {
        var hs_wild26D85F = hs_ds26D82b;
        if (hs_ds26D82b.notEvaluated) {
            hs_wild26D85F = hs_ds26D82b.hscall();
        }
        switch (hs_wild26D85F.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_isJust.evaluate = function (hs_ds26D82f) {
        var hs_wild26D85H = hs_ds26D82f;
        if (hs_ds26D82f.notEvaluated) {
            hs_wild26D85H = hs_ds26D82f.hscall();
        }
        switch (hs_wild26D85H.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    this.hs_maybe.evaluate = function (hs_n26D82n, hs_ds26D82q, hs_ds126D82l) {
        var hs_wild26D85J = hs_ds126D82l;
        if (hs_ds126D82l.notEvaluated) {
            hs_wild26D85J = hs_ds126D82l.hscall();
        }
        switch (hs_wild26D85J.tag) {
        case 1:
            if (hs_n26D82n.notEvaluated) {
                return hs_n26D82n.hscall();
            } else {
                return hs_n26D82n;
            }
        case 2:
            var hs_x26D82p = hs_wild26D85J.data[0];
            return hs_ds26D82q.hscall(hs_x26D82p);
        }
    };
    hs_zdcfmap25uJwc.evaluate = function (hs_ds26D82z, hs_ds126D82v) {
        var hs_wild26D85K = hs_ds126D82v;
        if (hs_ds126D82v.notEvaluated) {
            hs_wild26D85K = hs_ds126D82v.hscall();
        }
        switch (hs_wild26D85K.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_a26D82y = hs_wild26D85K.data[0];
            var hs_sat26D85L = new $hs.Thunk();
            hs_sat26D85L.evaluateOnce = function () {
                return hs_ds26D82z.hscall(hs_a26D82y);
            };
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26D85L];
            return $res;
        }
    };
    this.hs_zdfFunctorMaybe.data = [hs_zdcfmap25uJwc, hs_zdczlzd25uJwm];
    hs_zdczlzd25uJwm.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zddmzlzd.hscall($hs.modules.DataziMaybe.hs_zdfFunctorMaybe);
    };
    hs_zdcfail25uJwo.evaluate = function (hs_ds26D82G) {
        var $res = new $hs.Data(1);
        $res.data = [];
        return $res;
    };
    hs_zdczgzg25uJws.evaluate = function (hs_ds26D82L, hs_k26D82O) {
        var hs_wild26D85M = hs_ds26D82L;
        if (hs_ds26D82L.notEvaluated) {
            hs_wild26D85M = hs_ds26D82L.hscall();
        }
        switch (hs_wild26D85M.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            if (hs_k26D82O.notEvaluated) {
                return hs_k26D82O.hscall();
            } else {
                return hs_k26D82O;
            }
        }
    };
    hs_zdczgzgze25uJwA.evaluate = function (hs_ds26D82T, hs_k26D82X) {
        var hs_wild26D85O = hs_ds26D82T;
        if (hs_ds26D82T.notEvaluated) {
            hs_wild26D85O = hs_ds26D82T.hscall();
        }
        switch (hs_wild26D85O.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26D82W = hs_wild26D85O.data[0];
            return hs_k26D82X.hscall(hs_x26D82W);
        }
    };
    this.hs_zdfMonadMaybe.data = [hs_zdczgzgze25uJwA, hs_zdczgzg25uJws, $hs.modules.DataziMaybe.hs_Just, hs_zdcfail25uJwo];
    hs_zdczlze25uJwJ.evaluate = function (hs_zddEq26D83f, hs_zddOrd26D83c, hs_a26D834, hs_b26D836) {
        var hs_wild26D85Q = hs_a26D834;
        if (hs_a26D834.notEvaluated) {
            hs_wild26D85Q = hs_a26D834.hscall();
        }
        switch (hs_wild26D85Q.tag) {
        case 1:
            var hs_wild126D85P = hs_b26D836;
            if (hs_b26D836.notEvaluated) {
                hs_wild126D85P = hs_b26D836.hscall();
            }
            switch (hs_wild126D85P.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_a126D83d = hs_wild26D85Q.data[0];
            var hs_wild126D85S = hs_b26D836;
            if (hs_b26D836.notEvaluated) {
                hs_wild126D85S = hs_b26D836.hscall();
            }
            switch (hs_wild126D85S.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126D83e = hs_wild126D85S.data[0];
                return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd26D83c, hs_a126D83d, hs_b126D83e);
            }
        }
    };
    hs_zdczg25uJx1.evaluate = function (hs_zddEq26D83x, hs_zddOrd26D83u, hs_a26D83m, hs_b26D83o) {
        var hs_wild26D85U = hs_a26D83m;
        if (hs_a26D83m.notEvaluated) {
            hs_wild26D85U = hs_a26D83m.hscall();
        }
        switch (hs_wild26D85U.tag) {
        case 1:
            var hs_wild126D85T = hs_b26D83o;
            if (hs_b26D83o.notEvaluated) {
                hs_wild126D85T = hs_b26D83o.hscall();
            }
            switch (hs_wild126D85T.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_a126D83v = hs_wild26D85U.data[0];
            var hs_wild126D85W = hs_b26D83o;
            if (hs_b26D83o.notEvaluated) {
                hs_wild126D85W = hs_b26D83o.hscall();
            }
            switch (hs_wild126D85W.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126D83w = hs_wild126D85W.data[0];
                return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd26D83u, hs_a126D83v, hs_b126D83w);
            }
        }
    };
    hs_zdczgze25uJxj.evaluate = function (hs_zddEq26D83P, hs_zddOrd26D83M, hs_a26D83E, hs_b26D83G) {
        var hs_wild26D85Y = hs_a26D83E;
        if (hs_a26D83E.notEvaluated) {
            hs_wild26D85Y = hs_a26D83E.hscall();
        }
        switch (hs_wild26D85Y.tag) {
        case 1:
            var hs_wild126D85X = hs_b26D83G;
            if (hs_b26D83G.notEvaluated) {
                hs_wild126D85X = hs_b26D83G.hscall();
            }
            switch (hs_wild126D85X.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_a126D83N = hs_wild26D85Y.data[0];
            var hs_wild126D860 = hs_b26D83G;
            if (hs_b26D83G.notEvaluated) {
                hs_wild126D860 = hs_b26D83G.hscall();
            }
            switch (hs_wild126D860.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126D83O = hs_wild126D860.data[0];
                return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd26D83M, hs_a126D83N, hs_b126D83O);
            }
        }
    };
    hs_zdczl25uJxB.evaluate = function (hs_zddEq26D847, hs_zddOrd26D844, hs_a26D83W, hs_b26D83Y) {
        var hs_wild26D862 = hs_a26D83W;
        if (hs_a26D83W.notEvaluated) {
            hs_wild26D862 = hs_a26D83W.hscall();
        }
        switch (hs_wild26D862.tag) {
        case 1:
            var hs_wild126D861 = hs_b26D83Y;
            if (hs_b26D83Y.notEvaluated) {
                hs_wild126D861 = hs_b26D83Y.hscall();
            }
            switch (hs_wild126D861.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_a126D845 = hs_wild26D862.data[0];
            var hs_wild126D864 = hs_b26D83Y;
            if (hs_b26D83Y.notEvaluated) {
                hs_wild126D864 = hs_b26D83Y.hscall();
            }
            switch (hs_wild126D864.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126D846 = hs_wild126D864.data[0];
                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd26D844, hs_a126D845, hs_b126D846);
            }
        }
    };
    hs_zdccompare25uJxT.evaluate = function (hs_zddEq26D84p, hs_zddOrd26D84m, hs_a26D84e, hs_b26D84g) {
        var hs_wild26D866 = hs_a26D84e;
        if (hs_a26D84e.notEvaluated) {
            hs_wild26D866 = hs_a26D84e.hscall();
        }
        switch (hs_wild26D866.tag) {
        case 1:
            var hs_wild126D865 = hs_b26D84g;
            if (hs_b26D84g.notEvaluated) {
                hs_wild126D865 = hs_b26D84g.hscall();
            }
            switch (hs_wild126D865.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_a126D84n = hs_wild26D866.data[0];
            var hs_wild126D868 = hs_b26D84g;
            if (hs_b26D84g.notEvaluated) {
                hs_wild126D868 = hs_b26D84g.hscall();
            }
            switch (hs_wild126D868.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126D84o = hs_wild126D868.data[0];
                return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd26D84m, hs_a126D84n, hs_b126D84o);
            }
        }
    };
    this.hs_zdfOrdMaybe.evaluate = function (hs_zddEq26D84w, hs_zddOrd26D84x) {
        var hs_sat26D869 = new $hs.Thunk();
        hs_sat26D869.evaluateOnce = function () {
            return hs_zdcmin25uJyb.hscall(hs_zddEq26D84w, hs_zddOrd26D84x);
        };
        var hs_sat26D86a = new $hs.Thunk();
        hs_sat26D86a.evaluateOnce = function () {
            return hs_zdcmax25uJyd.hscall(hs_zddEq26D84w, hs_zddOrd26D84x);
        };
        var hs_sat26D86b = new $hs.Func(2);
        hs_sat26D86b.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze25uJwJ.hscall(hs_zddEq26D84w, hs_zddOrd26D84x, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26D86c = new $hs.Func(2);
        hs_sat26D86c.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg25uJx1.hscall(hs_zddEq26D84w, hs_zddOrd26D84x, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26D86d = new $hs.Func(2);
        hs_sat26D86d.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze25uJxj.hscall(hs_zddEq26D84w, hs_zddOrd26D84x, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26D86e = new $hs.Func(2);
        hs_sat26D86e.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl25uJxB.hscall(hs_zddEq26D84w, hs_zddOrd26D84x, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26D86f = new $hs.Func(2);
        hs_sat26D86f.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare25uJxT.hscall(hs_zddEq26D84w, hs_zddOrd26D84x, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_zddEq26D84w, hs_sat26D86f, hs_sat26D86e, hs_sat26D86d, hs_sat26D86c, hs_sat26D86b, hs_sat26D86a, hs_sat26D869];
        return $res;
    };
    hs_zdcmin25uJyb.evaluate = function (hs_zddEq26D84H, hs_zddOrd26D84I) {
        var hs_sat26D86g = new $hs.Thunk();
        hs_sat26D86g.evaluateOnce = function () {
            return $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddEq26D84H, hs_zddOrd26D84I);
        };
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall(hs_sat26D86g);
    };
    hs_zdcmax25uJyd.evaluate = function (hs_zddEq26D84M, hs_zddOrd26D84N) {
        var hs_sat26D86h = new $hs.Thunk();
        hs_sat26D86h.evaluateOnce = function () {
            return $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddEq26D84M, hs_zddOrd26D84N);
        };
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall(hs_sat26D86h);
    };
    hs_zdczeze25uJyA.evaluate = function (hs_zddEq26D85a, hs_ds26D84W, hs_ds126D84Y) {
        var hs_fail26D855 = new $hs.Func(1);
        hs_fail26D855.evaluate = function (hs_ds226D854) {
            var hs_wild26D86j = hs_ds26D84W;
            if (hs_ds26D84W.notEvaluated) {
                hs_wild26D86j = hs_ds26D84W.hscall();
            }
            switch (hs_wild26D86j.tag) {
            case 1:
                var hs_wild126D86i = hs_ds126D84Y;
                if (hs_ds126D84Y.notEvaluated) {
                    hs_wild126D86i = hs_ds126D84Y.hscall();
                }
                switch (hs_wild126D86i.tag) {
                case 1:
                    return 0 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                case 2:
                    return 0 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                }
            case 2:
                var hs_wild126D86l = hs_ds126D84Y;
                if (hs_ds126D84Y.notEvaluated) {
                    hs_wild126D86l = hs_ds126D84Y.hscall();
                }
                switch (hs_wild126D86l.tag) {
                case 1:
                    return 1 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                case 2:
                    return 1 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                }
            }
        };
        var hs_wild26D86o = hs_ds26D84W;
        if (hs_ds26D84W.notEvaluated) {
            hs_wild26D86o = hs_ds26D84W.hscall();
        }
        switch (hs_wild26D86o.tag) {
        case 1:
            return hs_fail26D855.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
        case 2:
            var hs_a126D85b = hs_wild26D86o.data[0];
            var hs_wild126D86p = hs_ds126D84Y;
            if (hs_ds126D84Y.notEvaluated) {
                hs_wild126D86p = hs_ds126D84Y.hscall();
            }
            switch (hs_wild126D86p.tag) {
            case 1:
                return hs_fail26D855.hscall($hs.modules.GHCziPrim.hs_realWorldzh);
            case 2:
                var hs_b126D85c = hs_wild126D86p.data[0];
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26D85a, hs_a126D85b, hs_b126D85c);
            }
        }
    };
    this.hs_zdfEqMaybe.evaluate = function (hs_zddEq26D85g) {
        var hs_sat26D86q = new $hs.Thunk();
        hs_sat26D86q.evaluateOnce = function () {
            return hs_zdczsze25uJyY.hscall(hs_zddEq26D85g);
        };
        var hs_sat26D86r = new $hs.Func(2);
        hs_sat26D86r.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze25uJyA.hscall(hs_zddEq26D85g, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26D86r, hs_sat26D86q];
        return $res;
    };
    hs_zdczsze25uJyY.evaluate = function (hs_zddEq26D85l) {
        var hs_zddEq126D85m = new $hs.Thunk();
        hs_zddEq126D85m.evaluateOnce = function () {
            return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_zddEq26D85l);
        };
        var hs_sat26D86t = new $hs.Func(2);
        hs_sat26D86t.evaluate = function (hs_a26D85p, hs_b26D85q) {
            var hs_sat26D86s = new $hs.Thunk();
            hs_sat26D86s.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq126D85m, hs_a26D85p, hs_b26D85q);
            };
            return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D86s);
        };
        if (hs_sat26D86t.notEvaluated) {
            return hs_sat26D86t.hscall();
        } else {
            return hs_sat26D86t;
        }
    };
    this.hs_Nothing.data = [];
    this.hs_Just.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(2);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
};

$hs.modules.DataziMaybe = new $hs.Module();
$hs.modules.DataziMaybe.dependencies = ["GHC.Types", "GHC.CString", "GHC.Generics", "GHC.Base", "GHC.Err", "GHC.Classes"];
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
    this.hs_zdfConstructorMaybe0 = new $hs.Data(1);
    this.hs_zdfConstructorMaybe = new $hs.Data(1);
    this.hs_zdfDatatypeMaybe = new $hs.Data(1);
    this.hs_zdfGenericMaybe = new $hs.Data(1);
    this.hs_zdfEqMaybe = new $hs.Func(1);
    this.hs_zdfOrdMaybe = new $hs.Func(1);
    this.hs_Nothing = new $hs.Data(1);
    this.hs_Just = new $hs.Func(1);
    this.hs_mapMaybe.notEvaluated = true;
    this.hs_mapMaybe.evaluate = function (hs_ds26CJ4j, hs_ds126CJ4e) {
        $hs.modules.DataziMaybe.loadDependencies();
        return this.evaluate(hs_ds26CJ4j, hs_ds126CJ4e);
    };
    this.hs_catMaybes.notEvaluated = true;
    this.hs_catMaybes.evaluate = function (hs_ls26CJ4D) {
        $hs.modules.DataziMaybe.loadDependencies();
        return this.evaluate(hs_ls26CJ4D);
    };
    this.hs_listToMaybe.notEvaluated = true;
    this.hs_listToMaybe.evaluate = function (hs_ds26CJ4F) {
        $hs.modules.DataziMaybe.loadDependencies();
        return this.evaluate(hs_ds26CJ4F);
    };
    this.hs_maybeToList.notEvaluated = true;
    this.hs_maybeToList.evaluate = function (hs_ds26CJ4L) {
        $hs.modules.DataziMaybe.loadDependencies();
        return this.evaluate(hs_ds26CJ4L);
    };
    this.hs_fromMaybe.notEvaluated = true;
    this.hs_fromMaybe.evaluate = function (hs_d26CJ4T, hs_x26CJ4R) {
        $hs.modules.DataziMaybe.loadDependencies();
        return this.evaluate(hs_d26CJ4T, hs_x26CJ4R);
    };
    this.hs_fromJust.notEvaluated = true;
    this.hs_fromJust.evaluate = function (hs_ds26CJ4X) {
        $hs.modules.DataziMaybe.loadDependencies();
        return this.evaluate(hs_ds26CJ4X);
    };
    this.hs_isNothing.notEvaluated = true;
    this.hs_isNothing.evaluate = function (hs_ds26CJ53) {
        $hs.modules.DataziMaybe.loadDependencies();
        return this.evaluate(hs_ds26CJ53);
    };
    this.hs_isJust.notEvaluated = true;
    this.hs_isJust.evaluate = function (hs_ds26CJ57) {
        $hs.modules.DataziMaybe.loadDependencies();
        return this.evaluate(hs_ds26CJ57);
    };
    this.hs_maybe.notEvaluated = true;
    this.hs_maybe.evaluate = function (hs_n26CJ5f, hs_ds26CJ5i, hs_ds126CJ5d) {
        $hs.modules.DataziMaybe.loadDependencies();
        return this.evaluate(hs_n26CJ5f, hs_ds26CJ5i, hs_ds126CJ5d);
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
    this.hs_zdfConstructorMaybe0.notEvaluated = true;
    this.hs_zdfConstructorMaybe0.evaluate = function () {
        $hs.modules.DataziMaybe.loadDependencies();
        return this;
    };
    this.hs_zdfConstructorMaybe.notEvaluated = true;
    this.hs_zdfConstructorMaybe.evaluate = function () {
        $hs.modules.DataziMaybe.loadDependencies();
        return this;
    };
    this.hs_zdfDatatypeMaybe.notEvaluated = true;
    this.hs_zdfDatatypeMaybe.evaluate = function () {
        $hs.modules.DataziMaybe.loadDependencies();
        return this;
    };
    this.hs_zdfGenericMaybe.notEvaluated = true;
    this.hs_zdfGenericMaybe.evaluate = function () {
        $hs.modules.DataziMaybe.loadDependencies();
        return this;
    };
    this.hs_zdfEqMaybe.notEvaluated = true;
    this.hs_zdfEqMaybe.evaluate = function (hs_zddEq26CJ7N) {
        $hs.modules.DataziMaybe.loadDependencies();
        return this.evaluate(hs_zddEq26CJ7N);
    };
    this.hs_zdfOrdMaybe.notEvaluated = true;
    this.hs_zdfOrdMaybe.evaluate = function (hs_zddOrd26CJ87) {
        $hs.modules.DataziMaybe.loadDependencies();
        return this.evaluate(hs_zddOrd26CJ87);
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
    this.hs_zdfConstructorMaybe0.notEvaluated = false;
    this.hs_zdfConstructorMaybe0.evaluate = function () {
        return this;
    };
    this.hs_zdfConstructorMaybe.notEvaluated = false;
    this.hs_zdfConstructorMaybe.evaluate = function () {
        return this;
    };
    this.hs_zdfDatatypeMaybe.notEvaluated = false;
    this.hs_zdfDatatypeMaybe.evaluate = function () {
        return this;
    };
    this.hs_zdfGenericMaybe.notEvaluated = false;
    this.hs_zdfGenericMaybe.evaluate = function () {
        return this;
    };
    this.hs_zdfEqMaybe.notEvaluated = false;
    this.hs_zdfOrdMaybe.notEvaluated = false;
    this.hs_Nothing.notEvaluated = false;
    this.hs_Nothing.evaluate = function () {
        return this;
    };
    this.hs_Just.notEvaluated = false;
    var hs_zdcfmap25ukz3 = new $hs.Func(2);
    var hs_zdczlzd25ukzc = new $hs.Thunk();
    var hs_zdcfail25ukzd = new $hs.Func(1);
    var hs_zdczgzg25ukzg = new $hs.Func(2);
    var hs_zdczgzgze25ukzn = new $hs.Func(2);
    var hs_zdcconName25ukzv = new $hs.Func(1);
    var hs_zdcconIsRecord25ukzy = new $hs.Thunk();
    var hs_zdcconFixity25ukzz = new $hs.Thunk();
    var hs_zdcconName125ukzA = new $hs.Func(1);
    var hs_zdcconIsRecord125ukzD = new $hs.Thunk();
    var hs_zdcconFixity125ukzE = new $hs.Thunk();
    var hs_zdcmoduleName25ukzF = new $hs.Func(1);
    var hs_zdcdatatypeName25ukzI = new $hs.Func(1);
    var hs_zdcto25ukzL = new $hs.Func(1);
    var hs_zdcfrom25ukzU = new $hs.Func(1);
    var hs_zdczlze25ukA0 = new $hs.Func(3);
    var hs_zdczg25ukAf = new $hs.Func(3);
    var hs_zdczgze25ukAu = new $hs.Func(3);
    var hs_zdczl25ukAJ = new $hs.Func(3);
    var hs_zdccompare25ukAY = new $hs.Func(3);
    var hs_zdczeze25ukBd = new $hs.Func(3);
    var hs_zdczsze25ukBv = new $hs.Func(1);
    var hs_zdczdp1Ord25ukBK = new $hs.Func(1);
    var hs_zdcmin25ukBO = new $hs.Func(1);
    var hs_zdcmax25ukBP = new $hs.Func(1);
    this.hs_mapMaybe.evaluate = function (hs_ds26CJ4j, hs_ds126CJ4e) {
        var hs_wild26CJ8n = hs_ds126CJ4e;
        if (hs_ds126CJ4e.notEvaluated) {
            hs_wild26CJ8n = hs_ds126CJ4e.hscall();
        }
        switch (hs_wild26CJ8n.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26CJ4i = hs_wild26CJ8n.data[0];
            var hs_xs26CJ4l = hs_wild26CJ8n.data[1];
            var hs_wild126CJ8o = hs_ds26CJ4j.hscall(hs_x26CJ4i);
            switch (hs_wild126CJ8o.tag) {
            case 1:
                return $hs.modules.DataziMaybe.hs_mapMaybe.hscall(hs_ds26CJ4j, hs_xs26CJ4l);
            case 2:
                var hs_r26CJ4n = hs_wild126CJ8o.data[0];
                var hs_sat26CJ8m = new $hs.Thunk();
                hs_sat26CJ8m.evaluateOnce = function () {
                    return $hs.modules.DataziMaybe.hs_mapMaybe.hscall(hs_ds26CJ4j, hs_xs26CJ4l);
                };
                var $res = new $hs.Data(2);
                $res.data = [hs_r26CJ4n, hs_sat26CJ8m];
                return $res;
            }
        }
    };
    this.hs_catMaybes.evaluate = function (hs_ls26CJ4D) {
        var hs_ds26CJ4z = new $hs.Func(1);
        hs_ds26CJ4z.evaluate = function (hs_ds126CJ4s) {
            var hs_ds226CJ8r = hs_ds126CJ4s;
            if (hs_ds126CJ4s.notEvaluated) {
                hs_ds226CJ8r = hs_ds126CJ4s.hscall();
            }
            switch (hs_ds226CJ8r.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326CJ4w = hs_ds226CJ8r.data[0];
                var hs_ds426CJ4y = hs_ds226CJ8r.data[1];
                var hs_wild26CJ8q = hs_ds326CJ4w;
                if (hs_ds326CJ4w.notEvaluated) {
                    hs_wild26CJ8q = hs_ds326CJ4w.hscall();
                }
                switch (hs_wild26CJ8q.tag) {
                case 1:
                    return hs_ds26CJ4z.hscall(hs_ds426CJ4y);
                case 2:
                    var hs_x26CJ4B = hs_wild26CJ8q.data[0];
                    var hs_sat26CJ8p = new $hs.Thunk();
                    hs_sat26CJ8p.evaluateOnce = function () {
                        return hs_ds26CJ4z.hscall(hs_ds426CJ4y);
                    };
                    var $res = new $hs.Data(2);
                    $res.data = [hs_x26CJ4B, hs_sat26CJ8p];
                    return $res;
                }
            }
        };
        return hs_ds26CJ4z.hscall(hs_ls26CJ4D);
    };
    this.hs_listToMaybe.evaluate = function (hs_ds26CJ4F) {
        var hs_wild26CJ8t = hs_ds26CJ4F;
        if (hs_ds26CJ4F.notEvaluated) {
            hs_wild26CJ8t = hs_ds26CJ4F.hscall();
        }
        switch (hs_wild26CJ8t.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_a26CJ4J = hs_wild26CJ8t.data[0];
            var $res = new $hs.Data(2);
            $res.data = [hs_a26CJ4J];
            return $res;
        }
    };
    this.hs_maybeToList.evaluate = function (hs_ds26CJ4L) {
        var hs_wild26CJ8u = hs_ds26CJ4L;
        if (hs_ds26CJ4L.notEvaluated) {
            hs_wild26CJ8u = hs_ds26CJ4L.hscall();
        }
        switch (hs_wild26CJ8u.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26CJ4O = hs_wild26CJ8u.data[0];
            var $res = new $hs.Data(2);
            $res.data = [hs_x26CJ4O, $hs.modules.GHCziTypes.hs_ZMZN];
            return $res;
        }
    };
    this.hs_fromMaybe.evaluate = function (hs_d26CJ4T, hs_x26CJ4R) {
        var hs_wild26CJ8v = hs_x26CJ4R;
        if (hs_x26CJ4R.notEvaluated) {
            hs_wild26CJ8v = hs_x26CJ4R.hscall();
        }
        switch (hs_wild26CJ8v.tag) {
        case 1:
            if (hs_d26CJ4T.notEvaluated) {
                return hs_d26CJ4T.hscall();
            } else {
                return hs_d26CJ4T;
            }
        case 2:
            var hs_v26CJ4V = hs_wild26CJ8v.data[0];
            if (hs_v26CJ4V.notEvaluated) {
                return hs_v26CJ4V.hscall();
            } else {
                return hs_v26CJ4V;
            }
        }
    };
    this.hs_fromJust.evaluate = function (hs_ds26CJ4X) {
        var hs_wild26CJ8w = hs_ds26CJ4X;
        if (hs_ds26CJ4X.notEvaluated) {
            hs_wild26CJ8w = hs_ds26CJ4X.hscall();
        }
        switch (hs_wild26CJ8w.tag) {
        case 1:
            var hs_sat26CJ8x = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Maybe.fromJust: Nothing\x00");
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26CJ8x);
        case 2:
            var hs_x26CJ51 = hs_wild26CJ8w.data[0];
            if (hs_x26CJ51.notEvaluated) {
                return hs_x26CJ51.hscall();
            } else {
                return hs_x26CJ51;
            }
        }
    };
    this.hs_isNothing.evaluate = function (hs_ds26CJ53) {
        var hs_wild26CJ8z = hs_ds26CJ53;
        if (hs_ds26CJ53.notEvaluated) {
            hs_wild26CJ8z = hs_ds26CJ53.hscall();
        }
        switch (hs_wild26CJ8z.tag) {
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
    this.hs_isJust.evaluate = function (hs_ds26CJ57) {
        var hs_wild26CJ8B = hs_ds26CJ57;
        if (hs_ds26CJ57.notEvaluated) {
            hs_wild26CJ8B = hs_ds26CJ57.hscall();
        }
        switch (hs_wild26CJ8B.tag) {
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
    this.hs_maybe.evaluate = function (hs_n26CJ5f, hs_ds26CJ5i, hs_ds126CJ5d) {
        var hs_wild26CJ8C = hs_ds126CJ5d;
        if (hs_ds126CJ5d.notEvaluated) {
            hs_wild26CJ8C = hs_ds126CJ5d.hscall();
        }
        switch (hs_wild26CJ8C.tag) {
        case 1:
            if (hs_n26CJ5f.notEvaluated) {
                return hs_n26CJ5f.hscall();
            } else {
                return hs_n26CJ5f;
            }
        case 2:
            var hs_x26CJ5h = hs_wild26CJ8C.data[0];
            return hs_ds26CJ5i.hscall(hs_x26CJ5h);
        }
    };
    hs_zdcfmap25ukz3.evaluate = function (hs_ds26CJ5q, hs_ds126CJ5m) {
        var hs_wild26CJ8E = hs_ds126CJ5m;
        if (hs_ds126CJ5m.notEvaluated) {
            hs_wild26CJ8E = hs_ds126CJ5m.hscall();
        }
        switch (hs_wild26CJ8E.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_a26CJ5p = hs_wild26CJ8E.data[0];
            var hs_sat26CJ8D = new $hs.Thunk();
            hs_sat26CJ8D.evaluateOnce = function () {
                return hs_ds26CJ5q.hscall(hs_a26CJ5p);
            };
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26CJ8D];
            return $res;
        }
    };
    this.hs_zdfFunctorMaybe.data = [hs_zdcfmap25ukz3, hs_zdczlzd25ukzc];
    hs_zdczlzd25ukzc.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zddmzlzd.hscall($hs.modules.DataziMaybe.hs_zdfFunctorMaybe);
    };
    hs_zdcfail25ukzd.evaluate = function (hs_ds26CJ5v) {
        var $res = new $hs.Data(1);
        $res.data = [];
        return $res;
    };
    hs_zdczgzg25ukzg.evaluate = function (hs_ds26CJ5z, hs_k26CJ5C) {
        var hs_wild26CJ8G = hs_ds26CJ5z;
        if (hs_ds26CJ5z.notEvaluated) {
            hs_wild26CJ8G = hs_ds26CJ5z.hscall();
        }
        switch (hs_wild26CJ8G.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            if (hs_k26CJ5C.notEvaluated) {
                return hs_k26CJ5C.hscall();
            } else {
                return hs_k26CJ5C;
            }
        }
    };
    hs_zdczgzgze25ukzn.evaluate = function (hs_ds26CJ5G, hs_k26CJ5K) {
        var hs_wild26CJ8H = hs_ds26CJ5G;
        if (hs_ds26CJ5G.notEvaluated) {
            hs_wild26CJ8H = hs_ds26CJ5G.hscall();
        }
        switch (hs_wild26CJ8H.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_x26CJ5J = hs_wild26CJ8H.data[0];
            return hs_k26CJ5K.hscall(hs_x26CJ5J);
        }
    };
    this.hs_zdfMonadMaybe.data = [hs_zdczgzgze25ukzn, hs_zdczgzg25ukzg, $hs.modules.DataziMaybe.hs_Just, hs_zdcfail25ukzd];
    hs_zdcconName25ukzv.evaluate = function (hs_ds26CJ5N) {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Just\x00");
    };
    this.hs_zdfConstructorMaybe0.data = [hs_zdcconName25ukzv, hs_zdcconFixity25ukzz, hs_zdcconIsRecord25ukzy];
    hs_zdcconIsRecord25ukzy.evaluateOnce = function () {
        return $hs.modules.GHCziGenerics.hs_zddmconIsRecord.hscall($hs.modules.DataziMaybe.hs_zdfConstructorMaybe0);
    };
    hs_zdcconFixity25ukzz.evaluateOnce = function () {
        return $hs.modules.GHCziGenerics.hs_zddmconFixity.hscall($hs.modules.DataziMaybe.hs_zdfConstructorMaybe0);
    };
    hs_zdcconName125ukzA.evaluate = function (hs_ds26CJ5S) {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Nothing\x00");
    };
    this.hs_zdfConstructorMaybe.data = [hs_zdcconName125ukzA, hs_zdcconFixity125ukzE, hs_zdcconIsRecord125ukzD];
    hs_zdcconIsRecord125ukzD.evaluateOnce = function () {
        return $hs.modules.GHCziGenerics.hs_zddmconIsRecord.hscall($hs.modules.DataziMaybe.hs_zdfConstructorMaybe);
    };
    hs_zdcconFixity125ukzE.evaluateOnce = function () {
        return $hs.modules.GHCziGenerics.hs_zddmconFixity.hscall($hs.modules.DataziMaybe.hs_zdfConstructorMaybe);
    };
    hs_zdcmoduleName25ukzF.evaluate = function (hs_ds26CJ5X) {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Data.Maybe\x00");
    };
    hs_zdcdatatypeName25ukzI.evaluate = function (hs_ds26CJ60) {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Maybe\x00");
    };
    this.hs_zdfDatatypeMaybe.data = [hs_zdcdatatypeName25ukzI, hs_zdcmoduleName25ukzF];
    hs_zdcto25ukzL.evaluate = function (hs_ds26CJ63) {
        var hs_wild26CJ8I = hs_ds26CJ63;
        if (hs_ds26CJ63.notEvaluated) {
            hs_wild26CJ8I = hs_ds26CJ63.hscall();
        }
        switch (hs_wild26CJ8I.tag) {
        case 1:
            var hs_ds126CJ66 = hs_wild26CJ8I.data[0];
            var hs_tpl26CJ8J = hs_ds126CJ66;
            if (hs_ds126CJ66.notEvaluated) {
                hs_tpl26CJ8J = hs_ds126CJ66.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_ds126CJ69 = hs_wild26CJ8I.data[0];
            var $res = new $hs.Data(2);
            $res.data = [hs_ds126CJ69];
            return $res;
        }
    };
    hs_zdcfrom25ukzU.evaluate = function (hs_ds26CJ6c) {
        var hs_wild26CJ8K = hs_ds26CJ6c;
        if (hs_ds26CJ6c.notEvaluated) {
            hs_wild26CJ8K = hs_ds26CJ6c.hscall();
        }
        switch (hs_wild26CJ8K.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [$hs.modules.GHCziGenerics.hs_U1];
            return $res;
        case 2:
            var hs_g126CJ6f = hs_wild26CJ8K.data[0];
            var $res = new $hs.Data(2);
            $res.data = [hs_g126CJ6f];
            return $res;
        }
    };
    this.hs_zdfGenericMaybe.data = [hs_zdcfrom25ukzU, hs_zdcto25ukzL];
    hs_zdczlze25ukA0.evaluate = function (hs_zddOrd26CJ6s, hs_a26CJ6k, hs_b26CJ6m) {
        var hs_wild26CJ8M = hs_a26CJ6k;
        if (hs_a26CJ6k.notEvaluated) {
            hs_wild26CJ8M = hs_a26CJ6k.hscall();
        }
        switch (hs_wild26CJ8M.tag) {
        case 1:
            var hs_wild126CJ8O = hs_b26CJ6m;
            if (hs_b26CJ6m.notEvaluated) {
                hs_wild126CJ8O = hs_b26CJ6m.hscall();
            }
            switch (hs_wild126CJ8O.tag) {
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
            var hs_a126CJ6t = hs_wild26CJ8M.data[0];
            var hs_wild126CJ8L = hs_b26CJ6m;
            if (hs_b26CJ6m.notEvaluated) {
                hs_wild126CJ8L = hs_b26CJ6m.hscall();
            }
            switch (hs_wild126CJ8L.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126CJ6u = hs_wild126CJ8L.data[0];
                return $hs.modules.GHCziClasses.hs_zlze.hscall(hs_zddOrd26CJ6s, hs_a126CJ6t, hs_b126CJ6u);
            }
        }
    };
    hs_zdczg25ukAf.evaluate = function (hs_zddOrd26CJ6H, hs_a26CJ6z, hs_b26CJ6B) {
        var hs_wild26CJ8Q = hs_a26CJ6z;
        if (hs_a26CJ6z.notEvaluated) {
            hs_wild26CJ8Q = hs_a26CJ6z.hscall();
        }
        switch (hs_wild26CJ8Q.tag) {
        case 1:
            var hs_wild126CJ8S = hs_b26CJ6B;
            if (hs_b26CJ6B.notEvaluated) {
                hs_wild126CJ8S = hs_b26CJ6B.hscall();
            }
            switch (hs_wild126CJ8S.tag) {
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
            var hs_a126CJ6I = hs_wild26CJ8Q.data[0];
            var hs_wild126CJ8P = hs_b26CJ6B;
            if (hs_b26CJ6B.notEvaluated) {
                hs_wild126CJ8P = hs_b26CJ6B.hscall();
            }
            switch (hs_wild126CJ8P.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126CJ6J = hs_wild126CJ8P.data[0];
                return $hs.modules.GHCziClasses.hs_zg.hscall(hs_zddOrd26CJ6H, hs_a126CJ6I, hs_b126CJ6J);
            }
        }
    };
    hs_zdczgze25ukAu.evaluate = function (hs_zddOrd26CJ6W, hs_a26CJ6O, hs_b26CJ6Q) {
        var hs_wild26CJ8U = hs_a26CJ6O;
        if (hs_a26CJ6O.notEvaluated) {
            hs_wild26CJ8U = hs_a26CJ6O.hscall();
        }
        switch (hs_wild26CJ8U.tag) {
        case 1:
            var hs_wild126CJ8W = hs_b26CJ6Q;
            if (hs_b26CJ6Q.notEvaluated) {
                hs_wild126CJ8W = hs_b26CJ6Q.hscall();
            }
            switch (hs_wild126CJ8W.tag) {
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
            var hs_a126CJ6X = hs_wild26CJ8U.data[0];
            var hs_wild126CJ8T = hs_b26CJ6Q;
            if (hs_b26CJ6Q.notEvaluated) {
                hs_wild126CJ8T = hs_b26CJ6Q.hscall();
            }
            switch (hs_wild126CJ8T.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126CJ6Y = hs_wild126CJ8T.data[0];
                return $hs.modules.GHCziClasses.hs_zgze.hscall(hs_zddOrd26CJ6W, hs_a126CJ6X, hs_b126CJ6Y);
            }
        }
    };
    hs_zdczl25ukAJ.evaluate = function (hs_zddOrd26CJ7b, hs_a26CJ73, hs_b26CJ75) {
        var hs_wild26CJ8Y = hs_a26CJ73;
        if (hs_a26CJ73.notEvaluated) {
            hs_wild26CJ8Y = hs_a26CJ73.hscall();
        }
        switch (hs_wild26CJ8Y.tag) {
        case 1:
            var hs_wild126CJ90 = hs_b26CJ75;
            if (hs_b26CJ75.notEvaluated) {
                hs_wild126CJ90 = hs_b26CJ75.hscall();
            }
            switch (hs_wild126CJ90.tag) {
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
            var hs_a126CJ7c = hs_wild26CJ8Y.data[0];
            var hs_wild126CJ8X = hs_b26CJ75;
            if (hs_b26CJ75.notEvaluated) {
                hs_wild126CJ8X = hs_b26CJ75.hscall();
            }
            switch (hs_wild126CJ8X.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126CJ7d = hs_wild126CJ8X.data[0];
                return $hs.modules.GHCziClasses.hs_zl.hscall(hs_zddOrd26CJ7b, hs_a126CJ7c, hs_b126CJ7d);
            }
        }
    };
    hs_zdccompare25ukAY.evaluate = function (hs_zddOrd26CJ7q, hs_a26CJ7i, hs_b26CJ7k) {
        var hs_wild26CJ92 = hs_a26CJ7i;
        if (hs_a26CJ7i.notEvaluated) {
            hs_wild26CJ92 = hs_a26CJ7i.hscall();
        }
        switch (hs_wild26CJ92.tag) {
        case 1:
            var hs_wild126CJ94 = hs_b26CJ7k;
            if (hs_b26CJ7k.notEvaluated) {
                hs_wild126CJ94 = hs_b26CJ7k.hscall();
            }
            switch (hs_wild126CJ94.tag) {
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
            var hs_a126CJ7r = hs_wild26CJ92.data[0];
            var hs_wild126CJ91 = hs_b26CJ7k;
            if (hs_b26CJ7k.notEvaluated) {
                hs_wild126CJ91 = hs_b26CJ7k.hscall();
            }
            switch (hs_wild126CJ91.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var hs_b126CJ7s = hs_wild126CJ91.data[0];
                return $hs.modules.GHCziClasses.hs_compare.hscall(hs_zddOrd26CJ7q, hs_a126CJ7r, hs_b126CJ7s);
            }
        }
    };
    hs_zdczeze25ukBd.evaluate = function (hs_zddEq26CJ7I, hs_ds26CJ7x, hs_ds126CJ7z) {
        var hs_wild26CJ7E = hs_ds26CJ7x;
        if (hs_ds26CJ7x.notEvaluated) {
            hs_wild26CJ7E = hs_ds26CJ7x.hscall();
        }
        switch (hs_wild26CJ7E.tag) {
        case 1:
            var hs_wild126CJ99 = hs_ds126CJ7z;
            if (hs_ds126CJ7z.notEvaluated) {
                hs_wild126CJ99 = hs_ds126CJ7z.hscall();
            }
            switch (hs_wild126CJ99.tag) {
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
            var hs_a126CJ7J = hs_wild26CJ7E.data[0];
            var hs_wild126CJ95 = hs_ds126CJ7z;
            if (hs_ds126CJ7z.notEvaluated) {
                hs_wild126CJ95 = hs_ds126CJ7z.hscall();
            }
            switch (hs_wild126CJ95.tag) {
            case 1:
                var hs_wild226CJ97 = hs_wild26CJ7E;
                if (hs_wild26CJ7E.notEvaluated) {
                    hs_wild226CJ97 = hs_wild26CJ7E.hscall();
                }
                switch (hs_wild226CJ97.tag) {
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
                var hs_b126CJ7K = hs_wild126CJ95.data[0];
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26CJ7I, hs_a126CJ7J, hs_b126CJ7K);
            }
        }
    };
    this.hs_zdfEqMaybe.evaluate = function (hs_zddEq26CJ7N) {
        var hs_sat26CJ9b = new $hs.Thunk();
        hs_sat26CJ9b.evaluateOnce = function () {
            return hs_zdczsze25ukBv.hscall(hs_zddEq26CJ7N);
        };
        var hs_sat26CJ9a = new $hs.Func(2);
        hs_sat26CJ9a.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczeze25ukBd.hscall(hs_zddEq26CJ7N, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CJ9a, hs_sat26CJ9b];
        return $res;
    };
    hs_zdczsze25ukBv.evaluate = function (hs_zddEq26CJ7S) {
        var hs_zddEq126CJ7T = new $hs.Thunk();
        hs_zddEq126CJ7T.evaluateOnce = function () {
            return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_zddEq26CJ7S);
        };
        var hs_sat26CJ9c = new $hs.Func(2);
        hs_sat26CJ9c.evaluate = function (hs_a26CJ7W, hs_b26CJ7X) {
            var hs_sat26CJ9d = new $hs.Thunk();
            hs_sat26CJ9d.evaluateOnce = function () {
                return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq126CJ7T, hs_a26CJ7W, hs_b26CJ7X);
            };
            return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26CJ9d);
        };
        if (hs_sat26CJ9c.notEvaluated) {
            return hs_sat26CJ9c.hscall();
        } else {
            return hs_sat26CJ9c;
        }
    };
    hs_zdczdp1Ord25ukBK.evaluate = function (hs_zddOrd26CJ82) {
        var hs_sat26CJ9e = new $hs.Thunk();
        hs_sat26CJ9e.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zdp1Ord.hscall(hs_zddOrd26CJ82);
        };
        return $hs.modules.DataziMaybe.hs_zdfEqMaybe.hscall(hs_sat26CJ9e);
    };
    this.hs_zdfOrdMaybe.evaluate = function (hs_zddOrd26CJ87) {
        var hs_sat26CJ9g = new $hs.Thunk();
        hs_sat26CJ9g.evaluateOnce = function () {
            return hs_zdcmin25ukBO.hscall(hs_zddOrd26CJ87);
        };
        var hs_sat26CJ9h = new $hs.Thunk();
        hs_sat26CJ9h.evaluateOnce = function () {
            return hs_zdcmax25ukBP.hscall(hs_zddOrd26CJ87);
        };
        var hs_sat26CJ9i = new $hs.Func(2);
        hs_sat26CJ9i.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczlze25ukA0.hscall(hs_zddOrd26CJ87, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CJ9j = new $hs.Func(2);
        hs_sat26CJ9j.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczg25ukAf.hscall(hs_zddOrd26CJ87, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CJ9k = new $hs.Func(2);
        hs_sat26CJ9k.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczgze25ukAu.hscall(hs_zddOrd26CJ87, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CJ9l = new $hs.Func(2);
        hs_sat26CJ9l.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdczl25ukAJ.hscall(hs_zddOrd26CJ87, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CJ9m = new $hs.Func(2);
        hs_sat26CJ9m.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
            return hs_zdccompare25ukAY.hscall(hs_zddOrd26CJ87, hs_eta1cW6l4, hs_eta1cW6l3);
        };
        var hs_sat26CJ9f = new $hs.Thunk();
        hs_sat26CJ9f.evaluateOnce = function () {
            return hs_zdczdp1Ord25ukBK.hscall(hs_zddOrd26CJ87);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CJ9f, hs_sat26CJ9m, hs_sat26CJ9l, hs_sat26CJ9k, hs_sat26CJ9j, hs_sat26CJ9i, hs_sat26CJ9h, hs_sat26CJ9g];
        return $res;
    };
    hs_zdcmin25ukBO.evaluate = function (hs_zddOrd26CJ8h) {
        var hs_sat26CJ9n = new $hs.Thunk();
        hs_sat26CJ9n.evaluateOnce = function () {
            return $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26CJ8h);
        };
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall(hs_sat26CJ9n);
    };
    hs_zdcmax25ukBP.evaluate = function (hs_zddOrd26CJ8k) {
        var hs_sat26CJ9o = new $hs.Thunk();
        hs_sat26CJ9o.evaluateOnce = function () {
            return $hs.modules.DataziMaybe.hs_zdfOrdMaybe.hscall(hs_zddOrd26CJ8k);
        };
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall(hs_sat26CJ9o);
    };
    this.hs_Nothing.data = [];
    this.hs_Just.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(2);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
};
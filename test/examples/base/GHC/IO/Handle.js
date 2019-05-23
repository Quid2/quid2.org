
$hs.modules.GHCziIOziHandle = new $hs.Module();
$hs.modules.GHCziIOziHandle.dependencies = ["GHC.Types", "GHC.CString", "GHC.Unit", "GHC.Integer", "Control.Monad", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Show", "GHC.Err", "GHC.Exception", "Data.Typeable", "GHC.Classes", "GHC.IO", "GHC.IO.Buffer", "GHC.IO.BufferedIO", "GHC.IO.Device", "GHC.IO.Encoding", "GHC.IO.Exception", "GHC.IO.Handle.Internals", "GHC.IO.Handle.Types", "GHC.IORef", "GHC.MVar"];
$hs.modules.GHCziIOziHandle.initBeforeDependencies = function () {
    this.hs_hSetNewlineMode = new $hs.Func(2);
    this.hs_hSetBinaryMode = new $hs.Func(2);
    this.hs_hIsTerminalDevice = new $hs.Func(1);
    this.hs_hIsSeekable = new $hs.Func(1);
    this.hs_hTell = new $hs.Func(1);
    this.hs_hSeek = new $hs.Func(3);
    this.hs_hSetPosn = new $hs.Func(1);
    this.hs_hFlushAll = new $hs.Func(1);
    this.hs_hGetEncoding = new $hs.Func(1);
    this.hs_hSetEncoding = new $hs.Func(2);
    this.hs_hSetBuffering = new $hs.Func(2);
    this.hs_hLookAhead = new $hs.Func(1);
    this.hs_hIsEOF = new $hs.Func(1);
    this.hs_hSetFileSizze = new $hs.Func(2);
    this.hs_hFileSizze = new $hs.Func(1);
    this.hs_hFlush = new $hs.Func(1);
    this.hs_zdfEqHandlePosn = new $hs.Data(1);
    this.hs_zdfShowHandlePosn = new $hs.Data(1);
    this.hs_hClose = new $hs.Func(1);
    this.hs_hGetPosn = new $hs.Func(1);
    this.hs_hIsOpen = new $hs.Func(1);
    this.hs_hIsClosed = new $hs.Func(1);
    this.hs_hIsReadable = new $hs.Func(1);
    this.hs_hIsWritable = new $hs.Func(1);
    this.hs_hGetBuffering = new $hs.Func(1);
    this.hs_hSetEcho = new $hs.Func(2);
    this.hs_hGetEcho = new $hs.Func(1);
    this.hs_hDuplicate = new $hs.Func(1);
    this.hs_hDuplicateTo = new $hs.Func(2);
    this.hs_hShow = new $hs.Func(1);
    this.hs_HandlePosn = new $hs.Func(2);
    this.hs_hSetNewlineMode.notEvaluated = true;
    this.hs_hSetNewlineMode.evaluate = function (hs_handle26D55b, hs_ds26D556) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26D55b, hs_ds26D556);
    };
    this.hs_hSetBinaryMode.notEvaluated = true;
    this.hs_hSetBinaryMode.evaluate = function (hs_handle26D56b, hs_bin26D56D) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26D56b, hs_bin26D56D);
    };
    this.hs_hIsTerminalDevice.notEvaluated = true;
    this.hs_hIsTerminalDevice.evaluate = function (hs_handle26D57n) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26D57n);
    };
    this.hs_hIsSeekable.notEvaluated = true;
    this.hs_hIsSeekable.evaluate = function (hs_handle26D57P) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26D57P);
    };
    this.hs_hTell.notEvaluated = true;
    this.hs_hTell.evaluate = function (hs_handle26D58h) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26D58h);
    };
    this.hs_hSeek.notEvaluated = true;
    this.hs_hSeek.evaluate = function (hs_handle26D59s, hs_mode26D59S, hs_offset26D59T) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26D59s, hs_mode26D59S, hs_offset26D59T);
    };
    this.hs_hSetPosn.notEvaluated = true;
    this.hs_hSetPosn.evaluate = function (hs_ds26D5aK) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_ds26D5aK);
    };
    this.hs_hFlushAll.notEvaluated = true;
    this.hs_hFlushAll.evaluate = function (hs_handle26D5aS) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26D5aS);
    };
    this.hs_hGetEncoding.notEvaluated = true;
    this.hs_hGetEncoding.evaluate = function (hs_hdl26D5aV) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_hdl26D5aV);
    };
    this.hs_hSetEncoding.notEvaluated = true;
    this.hs_hSetEncoding.evaluate = function (hs_hdl26D5bl, hs_encoding26D5bM) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_hdl26D5bl, hs_encoding26D5bM);
    };
    this.hs_hSetBuffering.notEvaluated = true;
    this.hs_hSetBuffering.evaluate = function (hs_handle26D5ct, hs_mode26D5cT) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26D5ct, hs_mode26D5cT);
    };
    this.hs_hLookAhead.notEvaluated = true;
    this.hs_hLookAhead.evaluate = function (hs_handle26D5dF) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26D5dF);
    };
    this.hs_hIsEOF.notEvaluated = true;
    this.hs_hIsEOF.evaluate = function (hs_handle26D5dI) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26D5dI);
    };
    this.hs_hSetFileSizze.notEvaluated = true;
    this.hs_hSetFileSizze.evaluate = function (hs_handle26D5eD, hs_sizze26D5f3) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26D5eD, hs_sizze26D5f3);
    };
    this.hs_hFileSizze.notEvaluated = true;
    this.hs_hFileSizze.evaluate = function (hs_handle26D5fa) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26D5fa);
    };
    this.hs_hFlush.notEvaluated = true;
    this.hs_hFlush.evaluate = function (hs_handle26D5fU) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26D5fU);
    };
    this.hs_zdfEqHandlePosn.notEvaluated = true;
    this.hs_zdfEqHandlePosn.evaluate = function () {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this;
    };
    this.hs_zdfShowHandlePosn.notEvaluated = true;
    this.hs_zdfShowHandlePosn.evaluate = function () {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this;
    };
    this.hs_hClose.notEvaluated = true;
    this.hs_hClose.evaluate = function (hs_h26D5gH) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_h26D5gH);
    };
    this.hs_hGetPosn.notEvaluated = true;
    this.hs_hGetPosn.evaluate = function (hs_handle26D5h9) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26D5h9);
    };
    this.hs_hIsOpen.notEvaluated = true;
    this.hs_hIsOpen.evaluate = function (hs_handle26D5hh) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26D5hh);
    };
    this.hs_hIsClosed.notEvaluated = true;
    this.hs_hIsClosed.evaluate = function (hs_handle26D5hp) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26D5hp);
    };
    this.hs_hIsReadable.notEvaluated = true;
    this.hs_hIsReadable.evaluate = function (hs_ds26D5hw) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_ds26D5hw);
    };
    this.hs_hIsWritable.notEvaluated = true;
    this.hs_hIsWritable.evaluate = function (hs_ds26D5hN) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_ds26D5hN);
    };
    this.hs_hGetBuffering.notEvaluated = true;
    this.hs_hGetBuffering.evaluate = function (hs_handle26D5i5) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26D5i5);
    };
    this.hs_hSetEcho.notEvaluated = true;
    this.hs_hSetEcho.evaluate = function (hs_handle26D5ie, hs_on26D5iI) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26D5ie, hs_on26D5iI);
    };
    this.hs_hGetEcho.notEvaluated = true;
    this.hs_hGetEcho.evaluate = function (hs_handle26D5iM) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26D5iM);
    };
    this.hs_hDuplicate.notEvaluated = true;
    this.hs_hDuplicate.evaluate = function (hs_h26D5jj) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_h26D5jj);
    };
    this.hs_hDuplicateTo.notEvaluated = true;
    this.hs_hDuplicateTo.evaluate = function (hs_h126D5ko, hs_h226D5kv) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_h126D5ko, hs_h226D5kv);
    };
    this.hs_hShow.notEvaluated = true;
    this.hs_hShow.evaluate = function (hs_h26D5mS) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_h26D5mS);
    };
    this.hs_HandlePosn.notEvaluated = true;
    this.hs_HandlePosn.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziIOziHandle.initAfterDependencies = function () {
    this.hs_hSetNewlineMode.notEvaluated = false;
    this.hs_hSetBinaryMode.notEvaluated = false;
    this.hs_hIsTerminalDevice.notEvaluated = false;
    this.hs_hIsSeekable.notEvaluated = false;
    this.hs_hTell.notEvaluated = false;
    this.hs_hSeek.notEvaluated = false;
    this.hs_hSetPosn.notEvaluated = false;
    this.hs_hFlushAll.notEvaluated = false;
    this.hs_hGetEncoding.notEvaluated = false;
    this.hs_hSetEncoding.notEvaluated = false;
    this.hs_hSetBuffering.notEvaluated = false;
    this.hs_hLookAhead.notEvaluated = false;
    this.hs_hIsEOF.notEvaluated = false;
    this.hs_hSetFileSizze.notEvaluated = false;
    this.hs_hFileSizze.notEvaluated = false;
    this.hs_hFlush.notEvaluated = false;
    this.hs_zdfEqHandlePosn.notEvaluated = false;
    this.hs_zdfEqHandlePosn.evaluate = function () {
        return this;
    };
    this.hs_zdfShowHandlePosn.notEvaluated = false;
    this.hs_zdfShowHandlePosn.evaluate = function () {
        return this;
    };
    this.hs_hClose.notEvaluated = false;
    this.hs_hGetPosn.notEvaluated = false;
    this.hs_hIsOpen.notEvaluated = false;
    this.hs_hIsClosed.notEvaluated = false;
    this.hs_hIsReadable.notEvaluated = false;
    this.hs_hIsWritable.notEvaluated = false;
    this.hs_hGetBuffering.notEvaluated = false;
    this.hs_hSetEcho.notEvaluated = false;
    this.hs_hGetEcho.notEvaluated = false;
    this.hs_hDuplicate.notEvaluated = false;
    this.hs_hDuplicateTo.notEvaluated = false;
    this.hs_hShow.notEvaluated = false;
    this.hs_HandlePosn.notEvaluated = false;
    var hs_ioezudupHandlesNotCompatible25uefm = new $hs.Func(1);
    var hs_dupHandlezu25uefk = new $hs.Func(8);
    var hs_dupHandleTo25uefn = new $hs.Func(6);
    var hs_dupHandle25uefj = new $hs.Func(5);
    var hs_hClosezq25ueeU = new $hs.Func(2);
    var hs_zdczeze25uGJF = new $hs.Func(2);
    var hs_zdczsze25uGJW = new $hs.Thunk();
    var hs_zdcshowsPrec25uGJX = new $hs.Func(2);
    var hs_zdcshowList25uGKc = new $hs.Thunk();
    var hs_zdcshow25uGKd = new $hs.Thunk();
    var hs_hClosezumaybethrow25ueeS = new $hs.Func(2);
    var hs_showHandlezq25uefp = new $hs.Func(3);
    hs_ioezudupHandlesNotCompatible25uefm.evaluate = function (hs_h26D522) {
        var hs_sat26D5n3 = new $hs.Thunk();
        hs_sat26D5n3.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("handles are incompatible\x00");
        };
        var hs_sat26D5n4 = new $hs.Thunk();
        hs_sat26D5n4.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hDuplicateTo\x00");
        };
        var hs_sat26D5n5 = new $hs.Data(2);
        hs_sat26D5n5.data = [hs_h26D522];
        var hs_sat26D5n2 = new $hs.Data(1);
        hs_sat26D5n2.data = [hs_sat26D5n5, $hs.modules.GHCziIOziException.hs_IllegalOperation, hs_sat26D5n4, hs_sat26D5n3, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26D5n2);
    };
    hs_dupHandlezu25uefk.evaluate = function (hs_zddIODevice26D52x, hs_zddBufferedIO26D52y, hs_zddTypeable26D52z, hs_newzudev26D52A, hs_filepath26D52B, hs_otherzuside26D52K, hs_hzu26D52f, hs_mbzufinalizzer26D52J) {
        var hs_wild26D5n7 = hs_hzu26D52f;
        if (hs_hzu26D52f.notEvaluated) {
            hs_wild26D5n7 = hs_hzu26D52f.hscall();
        }
        var hs_ds126D52C = hs_wild26D5n7.data[4];
        var hs_ds326D52D = hs_wild26D5n7.data[10];
        var hs_ds626D52G = hs_wild26D5n7.data[13];
        var hs_ds726D52H = hs_wild26D5n7.data[14];
        var hs_sat26D5nk = new $hs.Data(1);
        hs_sat26D5nk.data = [hs_ds626D52G, hs_ds726D52H];
        var hs_sat26D5n6 = new $hs.Thunk();
        hs_sat26D5n6.evaluateOnce = function () {
            var hs_wild126D5nl = $hs.modules.DataziMaybe.hs_isJust.hscall(hs_ds326D52D);
            switch (hs_wild126D5nl.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [$hs.modules.GHCziIOziEncoding.hs_localeEncoding];
                return $res;
            }
        };
        return $hs.modules.GHCziIOziHandleziInternals.hs_mkHandle.hscall(hs_zddIODevice26D52x, hs_zddBufferedIO26D52y, hs_zddTypeable26D52z, hs_newzudev26D52A, hs_filepath26D52B, hs_ds126D52C, $hs.modules.GHCziTypes.hs_True, hs_sat26D5n6, hs_sat26D5nk, hs_mbzufinalizzer26D52J, hs_otherzuside26D52K);
    };
    hs_dupHandleTo25uefn.evaluate = function (hs_filepath26D53F, hs_h26D53x, hs_otherzuside26D53G, hs_htozu26D52R, hs_hzu26D539, hs_mbzufinalizzer26D53H) {
        var hs_wild26D5nz = hs_htozu26D52R;
        if (hs_htozu26D52R.notEvaluated) {
            hs_wild26D5nz = hs_htozu26D52R.hscall();
        }
        var hs_zddTypeable26D53t = hs_wild26D5nz.data[2];
        var hs_ds26D53v = hs_wild26D5nz.data[3];
        var hs_wild126D53r = hs_hzu26D539;
        if (hs_hzu26D539.notEvaluated) {
            hs_wild126D53r = hs_hzu26D539.hscall();
        }
        var hs_zddIODevice126D53z = hs_wild126D53r.data[0];
        var hs_zddBufferedIO126D53E = hs_wild126D53r.data[1];
        var hs_zddTypeable126D53u = hs_wild126D53r.data[2];
        var hs_ds926D53A = hs_wild126D53r.data[3];
        var hs_sat26D5nO = new $hs.Thunk();
        hs_sat26D5nO.evaluateOnce = function () {
            var hs_wild226D5nQ = $hs.modules.DataziTypeable.hs_cast.hscall(hs_zddTypeable26D53t, hs_zddTypeable126D53u, hs_ds26D53v);
            switch (hs_wild226D5nQ.tag) {
            case 1:
                return hs_ioezudupHandlesNotCompatible25uefm.hscall(hs_h26D53x);
            case 2:
                var hs_devzq26D53B = hs_wild226D5nQ.data[0];
                var hs_sat26D5nR = new $hs.Func(1);
                hs_sat26D5nR.evaluate = function (hs_ds1826D53V) {
                    var hs_sat26D5nT = new $hs.Func(1);
                    hs_sat26D5nT.evaluate = function (hs_ds1926D53K) {
                        var hs_wild326D5nV = hs_ds1926D53K;
                        if (hs_ds1926D53K.notEvaluated) {
                            hs_wild326D5nV = hs_ds1926D53K.hscall();
                        }
                        switch (hs_wild326D5nV.tag) {
                        case 1:
                            var hs_rb826D53O = hs_wild326D5nV.data[1];
                            var hs_sat26D5nZ = new $hs.Data(1);
                            hs_sat26D5nZ.data = [hs_rb826D53O];
                            return $hs.modules.GHCziMVar.hs_takeMVar.hscall(hs_sat26D5nZ);
                        case 2:
                            var hs_sat26D5nU = new $hs.Thunk();
                            hs_sat26D5nU.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/IO/Handle.hs:699:7-20\x00");
                            };
                            return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5nU);
                        }
                    };
                    var hs_sat26D5nS = new $hs.Thunk();
                    hs_sat26D5nS.evaluateOnce = function () {
                        return hs_dupHandlezu25uefk.hscall(hs_zddIODevice126D53z, hs_zddBufferedIO126D53E, hs_zddTypeable126D53u, hs_devzq26D53B, hs_filepath26D53F, hs_otherzuside26D53G, hs_wild126D53r, hs_mbzufinalizzer26D53H);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5nS, hs_sat26D5nT);
                };
                var hs_sat26D5nP = new $hs.Thunk();
                hs_sat26D5nP.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziDevice.hs_dup2.hscall(hs_zddIODevice126D53z, hs_ds926D53A, hs_devzq26D53B);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5nP, hs_sat26D5nR);
            }
        };
        var hs_sat26D5nm = new $hs.Thunk();
        hs_sat26D5nm.evaluateOnce = function () {
            return $hs.modules.GHCziIOziHandleziInternals.hs_flushBuffer.hscall(hs_wild126D53r);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5nm, hs_sat26D5nO);
    };
    hs_dupHandle25uefj.evaluate = function (hs_filepath26D54w, hs_h26D54B, hs_otherzuside26D54n, hs_hzu26D543, hs_mbzufinalizzer26D54x) {
        var hs_wild26D54l = hs_hzu26D543;
        if (hs_hzu26D543.notEvaluated) {
            hs_wild26D54l = hs_hzu26D543.hscall();
        }
        var hs_zddIODevice26D54p = hs_wild26D54l.data[0];
        var hs_zddBufferedIO26D54t = hs_wild26D54l.data[1];
        var hs_zddTypeable26D54u = hs_wild26D54l.data[2];
        var hs_ds26D54q = hs_wild26D54l.data[3];
        var hs_sat26D5oe = new $hs.Thunk();
        hs_sat26D5oe.evaluateOnce = function () {
            var hs_wild126D551 = hs_otherzuside26D54n;
            if (hs_otherzuside26D54n.notEvaluated) {
                hs_wild126D551 = hs_otherzuside26D54n.hscall();
            }
            switch (hs_wild126D551.tag) {
            case 1:
                var hs_sat26D5ow = new $hs.Func(1);
                hs_sat26D5ow.evaluate = function (hs_newzudev26D54v) {
                    return hs_dupHandlezu25uefk.hscall(hs_zddIODevice26D54p, hs_zddBufferedIO26D54t, hs_zddTypeable26D54u, hs_newzudev26D54v, hs_filepath26D54w, $hs.modules.DataziMaybe.hs_Nothing, hs_wild26D54l, hs_mbzufinalizzer26D54x);
                };
                var hs_sat26D5ov = new $hs.Thunk();
                hs_sat26D5ov.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziDevice.hs_dup.hscall(hs_zddIODevice26D54p, hs_ds26D54q);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5ov, hs_sat26D5ow);
            case 2:
                var hs_r26D54C = hs_wild126D551.data[0];
                var hs_sat26D5og = new $hs.Func(1);
                hs_sat26D5og.evaluate = function (hs_ds926D54F) {
                    var hs_wild226D5ou = hs_ds926D54F;
                    if (hs_ds926D54F.notEvaluated) {
                        hs_wild226D5ou = hs_ds926D54F.hscall();
                    }
                    var hs_zddIODevice126D54X = hs_wild226D5ou.data[0];
                    var hs_zddBufferedIO126D54Y = hs_wild226D5ou.data[1];
                    var hs_zddTypeable126D54Z = hs_wild226D5ou.data[2];
                    var hs_ds1026D550 = hs_wild226D5ou.data[3];
                    return hs_dupHandlezu25uefk.hscall(hs_zddIODevice126D54X, hs_zddBufferedIO126D54Y, hs_zddTypeable126D54Z, hs_ds1026D550, hs_filepath26D54w, hs_wild126D551, hs_wild26D54l, hs_mbzufinalizzer26D54x);
                };
                var hs_sat26D5of = new $hs.Thunk();
                hs_sat26D5of.evaluateOnce = function () {
                    var hs_sat26D5oh = new $hs.Thunk();
                    hs_sat26D5oh.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("dupHandle\x00");
                    };
                    return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzq.hscall(hs_sat26D5oh, hs_h26D54B, hs_r26D54C);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5of, hs_sat26D5og);
            }
        };
        var hs_sat26D5o1 = new $hs.Thunk();
        hs_sat26D5o1.evaluateOnce = function () {
            return $hs.modules.GHCziIOziHandleziInternals.hs_flushBuffer.hscall(hs_wild26D54l);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5o1, hs_sat26D5oe);
    };
    this.hs_hSetNewlineMode.evaluate = function (hs_handle26D55b, hs_ds26D556) {
        var hs_wild26D5oy = hs_ds26D556;
        if (hs_ds26D556.notEvaluated) {
            hs_wild26D5oy = hs_ds26D556.hscall();
        }
        var hs_ds126D562 = hs_wild26D5oy.data[0];
        var hs_ds226D563 = hs_wild26D5oy.data[1];
        var hs_sat26D5oz = new $hs.Func(1);
        hs_sat26D5oz.evaluate = function (hs_hzu26D55e) {
            var hs_wild126D55w = hs_hzu26D55e;
            if (hs_hzu26D55e.notEvaluated) {
                hs_wild126D55w = hs_hzu26D55e.hscall();
            }
            var hs_sat26D5oS = new $hs.Thunk();
            hs_sat26D5oS.evaluateOnce = function () {
                var hs_sat26D5oT = new $hs.Thunk();
                hs_sat26D5oT.evaluateOnce = function () {
                    var hs_wild226D5oW = hs_wild126D55w;
                    if (hs_wild126D55w.notEvaluated) {
                        hs_wild226D5oW = hs_wild126D55w.hscall();
                    }
                    var hs_ds1226D55P = hs_wild226D5oW.data[0];
                    var hs_ds1326D55Q = hs_wild226D5oW.data[1];
                    var hs_ds1426D55R = hs_wild226D5oW.data[2];
                    var hs_ds1526D55S = hs_wild226D5oW.data[3];
                    var hs_ds1626D55T = hs_wild226D5oW.data[4];
                    var hs_rb426D55U = hs_wild226D5oW.data[5];
                    var hs_ds1726D55V = hs_wild226D5oW.data[6];
                    var hs_rb526D55W = hs_wild226D5oW.data[7];
                    var hs_rb626D55X = hs_wild226D5oW.data[8];
                    var hs_rb726D55Y = hs_wild226D5oW.data[9];
                    var hs_ds1826D55Z = hs_wild226D5oW.data[10];
                    var hs_ds1926D560 = hs_wild226D5oW.data[11];
                    var hs_ds2026D561 = hs_wild226D5oW.data[12];
                    var hs_ds2326D564 = hs_wild226D5oW.data[15];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_ds1226D55P, hs_ds1326D55Q, hs_ds1426D55R, hs_ds1526D55S, hs_ds1626D55T, hs_rb426D55U, hs_ds1726D55V, hs_rb526D55W, hs_rb626D55X, hs_rb726D55Y, hs_ds1826D55Z, hs_ds1926D560, hs_ds2026D561, hs_ds126D562, hs_ds226D563, hs_ds2326D564];
                    return $res;
                };
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5oT);
            };
            var hs_sat26D5oB = new $hs.Thunk();
            hs_sat26D5oB.evaluateOnce = function () {
                return $hs.modules.GHCziIOziHandleziInternals.hs_flushBuffer.hscall(hs_wild126D55w);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5oB, hs_sat26D5oS);
        };
        var hs_sat26D5ox = new $hs.Thunk();
        hs_sat26D5ox.evaluateOnce = function () {
            var hs_sat26D5oA = new $hs.Thunk();
            hs_sat26D5oA.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hSetNewlineMode\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withAllHandleszuzu.hscall(hs_sat26D5oA, hs_handle26D55b);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5ox, hs_sat26D5oz);
    };
    this.hs_hSetBinaryMode.evaluate = function (hs_handle26D56b, hs_bin26D56D) {
        var hs_sat26D5oY = new $hs.Func(1);
        hs_sat26D5oY.evaluate = function (hs_hzu26D56e) {
            var hs_wild26D56z = hs_hzu26D56e;
            if (hs_hzu26D56e.notEvaluated) {
                hs_wild26D56z = hs_hzu26D56e.hscall();
            }
            var hs_zddIODevice26D570 = hs_wild26D56z.data[0];
            var hs_zddBufferedIO26D571 = hs_wild26D56z.data[1];
            var hs_zddTypeable26D572 = hs_wild26D56z.data[2];
            var hs_ds26D573 = hs_wild26D56z.data[3];
            var hs_ds126D56G = hs_wild26D56z.data[4];
            var hs_rb26D56x = hs_wild26D56z.data[5];
            var hs_ds226D575 = hs_wild26D56z.data[6];
            var hs_rb226D577 = hs_wild26D56z.data[8];
            var hs_rb326D578 = hs_wild26D56z.data[9];
            var hs_ds826D57d = hs_wild26D56z.data[15];
            var hs_a26D56y = new $hs.Data(1);
            hs_a26D56y.data = [hs_rb26D56x];
            var hs_sat26D5p7 = new $hs.Thunk();
            hs_sat26D5p7.evaluateOnce = function () {
                var hs_sat26D5p9 = new $hs.Thunk();
                hs_sat26D5p9.evaluateOnce = function () {
                    var hs_mbzute26D56F = new $hs.Thunk();
                    hs_mbzute26D56F.evaluateOnce = function () {
                        var hs_wild126D5pp = hs_bin26D56D;
                        if (hs_bin26D56D.notEvaluated) {
                            hs_wild126D5pp = hs_bin26D56D.hscall();
                        }
                        switch (hs_wild126D5pp.tag) {
                        case 1:
                            var $res = new $hs.Data(2);
                            $res.data = [$hs.modules.GHCziIOziEncoding.hs_localeEncoding];
                            return $res;
                        case 2:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        }
                    };
                    var hs_sat26D5pb = new $hs.Func(2);
                    hs_sat26D5pb.evaluate = function (hs_mbzuencoder26D579, hs_mbzudecoder26D57a) {
                        var hs_nl26D56M = new $hs.Thunk();
                        hs_nl26D56M.evaluateOnce = function () {
                            var hs_wild126D5po = hs_bin26D56D;
                            if (hs_bin26D56D.notEvaluated) {
                                hs_wild126D5po = hs_bin26D56D.hscall();
                            }
                            switch (hs_wild126D5po.tag) {
                            case 1:
                                if ($hs.modules.GHCziIOziHandleziTypes.hs_nativeNewlineMode.notEvaluated) {
                                    return $hs.modules.GHCziIOziHandleziTypes.hs_nativeNewlineMode.hscall();
                                } else {
                                    return $hs.modules.GHCziIOziHandleziTypes.hs_nativeNewlineMode;
                                }
                            case 2:
                                if ($hs.modules.GHCziIOziHandleziTypes.hs_noNewlineTranslation.notEvaluated) {
                                    return $hs.modules.GHCziIOziHandleziTypes.hs_noNewlineTranslation.hscall();
                                } else {
                                    return $hs.modules.GHCziIOziHandleziTypes.hs_noNewlineTranslation;
                                }
                            }
                        };
                        var hs_sat26D5pd = new $hs.Func(1);
                        hs_sat26D5pd.evaluate = function (hs_bbuf26D56R) {
                            var hs_sat26D5pf = new $hs.Func(1);
                            hs_sat26D5pf.evaluate = function (hs_ref26D56X) {
                                var hs_sat26D5pj = new $hs.Thunk();
                                hs_sat26D5pj.evaluateOnce = function () {
                                    var hs_tpl26D5pm = hs_a26D56y;
                                    if (hs_a26D56y.notEvaluated) {
                                        hs_tpl26D5pm = hs_a26D56y.hscall();
                                    }
                                    var hs_tpl126D574 = hs_tpl26D5pm.data[0];
                                    var hs_tpl226D5pl = hs_ref26D56X;
                                    if (hs_ref26D56X.notEvaluated) {
                                        hs_tpl226D5pl = hs_ref26D56X.hscall();
                                    }
                                    var hs_tpl326D576 = hs_tpl226D5pl.data[0];
                                    var hs_sat26D5pn = new $hs.Thunk();
                                    hs_sat26D5pn.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziHandleziTypes.hs_outputNL.hscall(hs_nl26D56M);
                                    };
                                    var hs_sat26D5pk = new $hs.Thunk();
                                    hs_sat26D5pk.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziHandleziTypes.hs_inputNL.hscall(hs_nl26D56M);
                                    };
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_zddIODevice26D570, hs_zddBufferedIO26D571, hs_zddTypeable26D572, hs_ds26D573, hs_ds126D56G, hs_tpl126D574, hs_ds226D575, hs_tpl326D576, hs_rb226D577, hs_rb326D578, hs_mbzuencoder26D579, hs_mbzudecoder26D57a, hs_mbzute26D56F, hs_sat26D5pk, hs_sat26D5pn, hs_ds826D57d];
                                    return $res;
                                };
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5pj);
                            };
                            var hs_sat26D5pe = new $hs.Thunk();
                            hs_sat26D5pe.evaluateOnce = function () {
                                var hs_sat26D5ph = new $hs.Thunk();
                                hs_sat26D5ph.evaluateOnce = function () {
                                    var hs_sat26D5pi = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("codec_state\x00");
                                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D5pi);
                                };
                                var hs_sat26D5pg = new $hs.Data(1);
                                hs_sat26D5pg.data = [hs_sat26D5ph, hs_bbuf26D56R];
                                return $hs.modules.GHCziIORef.hs_newIORef.hscall(hs_sat26D5pg);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5pe, hs_sat26D5pf);
                        };
                        var hs_sat26D5pc = new $hs.Thunk();
                        hs_sat26D5pc.evaluateOnce = function () {
                            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26D56y);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5pc, hs_sat26D5pd);
                    };
                    var hs_sat26D5pa = new $hs.Thunk();
                    hs_sat26D5pa.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_openTextEncoding.hscall(hs_mbzute26D56F, hs_ds126D56G);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5pa, hs_sat26D5pb);
                };
                var hs_sat26D5p8 = new $hs.Thunk();
                hs_sat26D5p8.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_closeTextCodecs.hscall(hs_wild26D56z);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5p8, hs_sat26D5p9);
            };
            var hs_sat26D5p0 = new $hs.Thunk();
            hs_sat26D5p0.evaluateOnce = function () {
                return $hs.modules.GHCziIOziHandleziInternals.hs_flushCharBuffer.hscall(hs_wild26D56z);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5p0, hs_sat26D5p7);
        };
        var hs_sat26D5oX = new $hs.Thunk();
        hs_sat26D5oX.evaluateOnce = function () {
            var hs_sat26D5oZ = new $hs.Thunk();
            hs_sat26D5oZ.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hSetBinaryMode\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withAllHandleszuzu.hscall(hs_sat26D5oZ, hs_handle26D56b);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5oX, hs_sat26D5oY);
    };
    this.hs_hIsTerminalDevice.evaluate = function (hs_handle26D57n) {
        var hs_sat26D5pr = new $hs.Func(1);
        hs_sat26D5pr.evaluate = function (hs_ds26D57q) {
            var hs_wild26D5pu = hs_ds26D57q;
            if (hs_ds26D57q.notEvaluated) {
                hs_wild26D5pu = hs_ds26D57q.hscall();
            }
            var hs_zddIODevice26D57K = hs_wild26D5pu.data[0];
            var hs_ds126D57L = hs_wild26D5pu.data[3];
            var hs_ds226D57I = hs_wild26D5pu.data[4];
            var hs_wild126D5pt = hs_ds226D57I;
            if (hs_ds226D57I.notEvaluated) {
                hs_wild126D5pt = hs_ds226D57I.hscall();
            }
            switch (hs_wild126D5pt.tag) {
            case 1:
                if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
                } else {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
                }
            default:
                return $hs.modules.GHCziIOziDevice.hs_isTerminal.hscall(hs_zddIODevice26D57K, hs_ds126D57L);
            }
        };
        var hs_sat26D5pq = new $hs.Thunk();
        hs_sat26D5pq.evaluateOnce = function () {
            var hs_sat26D5ps = new $hs.Thunk();
            hs_sat26D5ps.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hIsTerminalDevice\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26D5ps, hs_handle26D57n);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5pq, hs_sat26D5pr);
    };
    this.hs_hIsSeekable.evaluate = function (hs_handle26D57P) {
        var hs_sat26D5pJ = new $hs.Func(1);
        hs_sat26D5pJ.evaluate = function (hs_handlezu26D57S) {
            var hs_wild26D5pM = hs_handlezu26D57S;
            if (hs_handlezu26D57S.notEvaluated) {
                hs_wild26D5pM = hs_handlezu26D57S.hscall();
            }
            var hs_zddIODevice26D58c = hs_wild26D5pM.data[0];
            var hs_ds26D58d = hs_wild26D5pM.data[3];
            var hs_ds126D58a = hs_wild26D5pM.data[4];
            var hs_wild126D5pL = hs_ds126D58a;
            if (hs_ds126D58a.notEvaluated) {
                hs_wild126D5pL = hs_ds126D58a.hscall();
            }
            switch (hs_wild126D5pL.tag) {
            case 1:
                if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
                } else {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
                }
            case 2:
                if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
                } else {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
                }
            case 5:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_False);
            default:
                return $hs.modules.GHCziIOziDevice.hs_isSeekable.hscall(hs_zddIODevice26D58c, hs_ds26D58d);
            }
        };
        var hs_sat26D5pI = new $hs.Thunk();
        hs_sat26D5pI.evaluateOnce = function () {
            var hs_sat26D5pK = new $hs.Thunk();
            hs_sat26D5pK.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hIsSeekable\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26D5pK, hs_handle26D57P);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5pI, hs_sat26D5pJ);
    };
    this.hs_hTell.evaluate = function (hs_handle26D58h) {
        var hs_sat26D5q1 = new $hs.Func(1);
        hs_sat26D5q1.evaluate = function (hs_handlezu26D58k) {
            var hs_wild26D58O = hs_handlezu26D58k;
            if (hs_handlezu26D58k.notEvaluated) {
                hs_wild26D58O = hs_handlezu26D58k.hscall();
            }
            var hs_zddIODevice26D58K = hs_wild26D58O.data[0];
            var hs_ds26D58L = hs_wild26D58O.data[3];
            var hs_rb26D58F = hs_wild26D58O.data[5];
            var hs_rb226D58I = hs_wild26D58O.data[8];
            var hs_zddShow26D58D = new $hs.Thunk();
            hs_zddShow26D58D.evaluateOnce = function () {
                return $hs.modules.GHCziShow.hs_zdfShowZLz2cUZR.hscall($hs.modules.GHCziNum.hs_zdfShowInteger, $hs.modules.GHCziNum.hs_zdfShowInteger);
            };
            var hs_a26D58G = new $hs.Data(1);
            hs_a26D58G.data = [hs_rb26D58F];
            var hs_a126D58J = new $hs.Data(1);
            hs_a126D58J.data = [hs_rb226D58I];
            var hs_sat26D5qg = new $hs.Func(1);
            hs_sat26D5qg.evaluate = function (hs_posn26D58V) {
                var hs_sat26D5qi = new $hs.Thunk();
                hs_sat26D5qi.evaluateOnce = function () {
                    var hs_sat26D5qk = new $hs.Func(1);
                    hs_sat26D5qk.evaluate = function (hs_bbuf26D58T) {
                        var hs_realzuposn26D590 = new $hs.Thunk();
                        hs_realzuposn26D590.evaluateOnce = function () {
                            var hs_wild126D5qD = $hs.modules.GHCziIOziBuffer.hs_isWriteBuffer.hscall(hs_bbuf26D58T);
                            switch (hs_wild126D5qD.tag) {
                            case 1:
                                var hs_sat26D5qF = new $hs.Thunk();
                                hs_sat26D5qF.evaluateOnce = function () {
                                    var hs_sat26D5qG = new $hs.Thunk();
                                    hs_sat26D5qG.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziBuffer.hs_bufferElems.hscall(hs_bbuf26D58T);
                                    };
                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26D5qG);
                                };
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_posn26D58V, hs_sat26D5qF);
                            case 2:
                                var hs_sat26D5qC = new $hs.Thunk();
                                hs_sat26D5qC.evaluateOnce = function () {
                                    var hs_sat26D5qE = new $hs.Thunk();
                                    hs_sat26D5qE.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziBuffer.hs_bufferElems.hscall(hs_bbuf26D58T);
                                    };
                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26D5qE);
                                };
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_posn26D58V, hs_sat26D5qC);
                            }
                        };
                        var hs_sat26D5qm = new $hs.Func(1);
                        hs_sat26D5qm.evaluate = function (hs_cbuf26D599) {
                            var hs_sat26D5qo = new $hs.Thunk();
                            hs_sat26D5qo.evaluateOnce = function () {
                                var hs_sat26D5qu = new $hs.Thunk();
                                hs_sat26D5qu.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_realzuposn26D590);
                                };
                                var hs_sat26D5qt = new $hs.Thunk();
                                hs_sat26D5qt.evaluateOnce = function () {
                                    var hs_sat26D5qv = new $hs.Thunk();
                                    hs_sat26D5qv.evaluateOnce = function () {
                                        var hs_sat26D5qx = new $hs.Thunk();
                                        hs_sat26D5qx.evaluateOnce = function () {
                                            var hs_sat26D5qz = new $hs.Thunk();
                                            hs_sat26D5qz.evaluateOnce = function () {
                                                var hs_sat26D5qB = new $hs.Thunk();
                                                hs_sat26D5qB.evaluateOnce = function () {
                                                    return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_bbuf26D58T);
                                                };
                                                var hs_sat26D5qA = new $hs.Thunk();
                                                hs_sat26D5qA.evaluateOnce = function () {
                                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("   bbuf: \x00");
                                                };
                                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D5qA, hs_sat26D5qB);
                                            };
                                            var hs_sat26D5qy = new $hs.Thunk();
                                            hs_sat26D5qy.evaluateOnce = function () {
                                                return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_cbuf26D599);
                                            };
                                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D5qy, hs_sat26D5qz);
                                        };
                                        var hs_sat26D5qw = new $hs.Thunk();
                                        hs_sat26D5qw.evaluateOnce = function () {
                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("   cbuf: \x00");
                                        };
                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D5qw, hs_sat26D5qx);
                                    };
                                    return $hs.modules.GHCziIOziHandleziInternals.hs_debugIO.hscall(hs_sat26D5qv);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5qt, hs_sat26D5qu);
                            };
                            var hs_sat26D5qn = new $hs.Thunk();
                            hs_sat26D5qn.evaluateOnce = function () {
                                var hs_sat26D5qp = new $hs.Thunk();
                                hs_sat26D5qp.evaluateOnce = function () {
                                    var hs_sat26D5qr = new $hs.Thunk();
                                    hs_sat26D5qr.evaluateOnce = function () {
                                        var hs_sat26D5qs = new $hs.Data(1);
                                        hs_sat26D5qs.data = [hs_posn26D58V, hs_realzuposn26D590];
                                        return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow26D58D, hs_sat26D5qs);
                                    };
                                    var hs_sat26D5qq = new $hs.Thunk();
                                    hs_sat26D5qq.evaluateOnce = function () {
                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("\nhGetPosn: (posn, real_posn) = \x00");
                                    };
                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D5qq, hs_sat26D5qr);
                                };
                                return $hs.modules.GHCziIOziHandleziInternals.hs_debugIO.hscall(hs_sat26D5qp);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5qn, hs_sat26D5qo);
                        };
                        var hs_sat26D5ql = new $hs.Thunk();
                        hs_sat26D5ql.evaluateOnce = function () {
                            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126D58J);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5ql, hs_sat26D5qm);
                    };
                    var hs_sat26D5qj = new $hs.Thunk();
                    hs_sat26D5qj.evaluateOnce = function () {
                        return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26D58G);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5qj, hs_sat26D5qk);
                };
                var hs_sat26D5qh = new $hs.Thunk();
                hs_sat26D5qh.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_flushCharBuffer.hscall(hs_wild26D58O);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5qh, hs_sat26D5qi);
            };
            var hs_sat26D5q3 = new $hs.Thunk();
            hs_sat26D5q3.evaluateOnce = function () {
                return $hs.modules.GHCziIOziDevice.hs_tell.hscall(hs_zddIODevice26D58K, hs_ds26D58L);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5q3, hs_sat26D5qg);
        };
        var hs_sat26D5q0 = new $hs.Thunk();
        hs_sat26D5q0.evaluateOnce = function () {
            var hs_sat26D5q2 = new $hs.Thunk();
            hs_sat26D5q2.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hGetPosn\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_wantSeekableHandle.hscall(hs_sat26D5q2, hs_handle26D58h);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5q0, hs_sat26D5q1);
    };
    this.hs_hSeek.evaluate = function (hs_handle26D59s, hs_mode26D59S, hs_offset26D59T) {
        var hs_sat26D5qI = new $hs.Func(1);
        hs_sat26D5qI.evaluate = function (hs_handlezu26D59v) {
            var hs_wild26D5ag = hs_handlezu26D59v;
            if (hs_handlezu26D59v.notEvaluated) {
                hs_wild26D5ag = hs_handlezu26D59v.hscall();
            }
            var hs_zddIODevice26D5aj = hs_wild26D5ag.data[0];
            var hs_ds26D5ak = hs_wild26D5ag.data[3];
            var hs_rb226D59O = hs_wild26D5ag.data[8];
            var hs_ds426D5a5 = hs_wild26D5ag.data[11];
            var hs_a26D59P = new $hs.Data(1);
            hs_a26D59P.data = [hs_rb226D59O];
            var hs_sat26D5qX = new $hs.Thunk();
            hs_sat26D5qX.evaluateOnce = function () {
                var hs_sat26D5r4 = new $hs.Func(1);
                hs_sat26D5r4.evaluate = function (hs_buf26D5a0) {
                    var hs_wild126D5r6 = $hs.modules.GHCziIOziBuffer.hs_isWriteBuffer.hscall(hs_buf26D5a0);
                    switch (hs_wild126D5r6.tag) {
                    case 1:
                        var hs_r26D5a3 = new $hs.Thunk();
                        hs_r26D5a3.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_buf26D5a0);
                        };
                        var hs_sat26D5r9 = new $hs.Thunk();
                        hs_sat26D5r9.evaluateOnce = function () {
                            var hs_sat26D5rl = new $hs.Thunk();
                            hs_sat26D5rl.evaluateOnce = function () {
                                var hs_sat26D5rn = new $hs.Thunk();
                                hs_sat26D5rn.evaluateOnce = function () {
                                    var hs_sat26D5rp = new $hs.Thunk();
                                    hs_sat26D5rp.evaluateOnce = function () {
                                        var hs_sat26D5rq = new $hs.Thunk();
                                        hs_sat26D5rq.evaluateOnce = function () {
                                            var hs_sat26D5rr = new $hs.Thunk();
                                            hs_sat26D5rr.evaluateOnce = function () {
                                                return $hs.modules.GHCziIOziBuffer.hs_bufR.hscall(hs_buf26D5a0);
                                            };
                                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D5rr, hs_r26D5a3);
                                        };
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26D5rq);
                                    };
                                    return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_offset26D59T, hs_sat26D5rp);
                                };
                                var hs_sat26D5rm = new $hs.Thunk();
                                hs_sat26D5rm.evaluateOnce = function () {
                                    var hs_sat26D5ro = new $hs.Thunk();
                                    hs_sat26D5ro.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_offset26D59T, hs_sat26D5ro);
                                };
                                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D5rm, hs_sat26D5rn);
                            };
                            var hs_sat26D5rk = new $hs.Thunk();
                            hs_sat26D5rk.evaluateOnce = function () {
                                return $hs.modules.DataziMaybe.hs_isNothing.hscall(hs_ds426D5a5);
                            };
                            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D5rk, hs_sat26D5rl);
                        };
                        var hs_sat26D5ra = new $hs.Thunk();
                        hs_sat26D5ra.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziDevice.hs_zdfEqSeekMode, hs_mode26D59S, $hs.modules.GHCziIOziDevice.hs_RelativeSeek);
                        };
                        var hs_wild226D5rb = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D5ra, hs_sat26D5r9);
                        switch (hs_wild226D5rb.tag) {
                        case 1:
                            var hs_sat26D5rh = new $hs.Thunk();
                            hs_sat26D5rh.evaluateOnce = function () {
                                var hs_sat26D5rj = new $hs.Thunk();
                                hs_sat26D5rj.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziDevice.hs_seek.hscall(hs_zddIODevice26D5aj, hs_ds26D5ak, hs_mode26D59S, hs_offset26D59T);
                                };
                                var hs_sat26D5ri = new $hs.Thunk();
                                hs_sat26D5ri.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziHandleziInternals.hs_flushByteReadBuffer.hscall(hs_wild26D5ag);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5ri, hs_sat26D5rj);
                            };
                            var hs_sat26D5rg = new $hs.Thunk();
                            hs_sat26D5rg.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziHandleziInternals.hs_flushCharReadBuffer.hscall(hs_wild26D5ag);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5rg, hs_sat26D5rh);
                        case 2:
                            var hs_sat26D5r8 = new $hs.Thunk();
                            hs_sat26D5r8.evaluateOnce = function () {
                                var hs_wild326D5rc = hs_buf26D5a0;
                                if (hs_buf26D5a0.notEvaluated) {
                                    hs_wild326D5rc = hs_buf26D5a0.hscall();
                                }
                                var hs_rb426D5ax = hs_wild326D5rc.data[0];
                                var hs_rb526D5ay = hs_wild326D5rc.data[1];
                                var hs_ds926D5az = hs_wild326D5rc.data[2];
                                var hs_rb626D5aA = hs_wild326D5rc.data[3];
                                var hs_rb826D5aC = hs_wild326D5rc.data[5];
                                var hs_sat26D5re = new $hs.Thunk();
                                hs_sat26D5re.evaluateOnce = function () {
                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, $hs.modules.GHCziNum.hs_zdfNumInt, hs_offset26D59T);
                                };
                                var hs_tpl26D5rf = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_r26D5a3, hs_sat26D5re);
                                var hs_tpl126D5aB = hs_tpl26D5rf.data[0];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_rb426D5ax, hs_rb526D5ay, hs_ds926D5az, hs_rb626D5aA, hs_tpl126D5aB, hs_rb826D5aC];
                                return $res;
                            };
                            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26D59P, hs_sat26D5r8);
                        }
                    case 2:
                        var hs_sat26D5r7 = new $hs.Thunk();
                        hs_sat26D5r7.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziDevice.hs_seek.hscall(hs_zddIODevice26D5aj, hs_ds26D5ak, hs_mode26D59S, hs_offset26D59T);
                        };
                        var hs_sat26D5r5 = new $hs.Thunk();
                        hs_sat26D5r5.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziHandleziInternals.hs_flushWriteBuffer.hscall(hs_wild26D5ag);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5r5, hs_sat26D5r7);
                    }
                };
                var hs_sat26D5r3 = new $hs.Thunk();
                hs_sat26D5r3.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26D59P);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5r3, hs_sat26D5r4);
            };
            var hs_sat26D5qK = new $hs.Thunk();
            hs_sat26D5qK.evaluateOnce = function () {
                var hs_sat26D5qY = new $hs.Thunk();
                hs_sat26D5qY.evaluateOnce = function () {
                    var hs_sat26D5r0 = new $hs.Thunk();
                    hs_sat26D5r0.evaluateOnce = function () {
                        var hs_sat26D5r1 = new $hs.Data(1);
                        hs_sat26D5r1.data = [hs_mode26D59S, hs_offset26D59T];
                        var hs_sat26D5r2 = $hs.modules.GHCziShow.hs_zdfShowZLz2cUZR.hscall($hs.modules.GHCziIOziDevice.hs_zdfShowSeekMode, $hs.modules.GHCziNum.hs_zdfShowInteger);
                        return $hs.modules.GHCziShow.hs_show.hscall(hs_sat26D5r2, hs_sat26D5r1);
                    };
                    var hs_sat26D5qZ = new $hs.Thunk();
                    hs_sat26D5qZ.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hSeek \x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D5qZ, hs_sat26D5r0);
                };
                return $hs.modules.GHCziIOziHandleziInternals.hs_debugIO.hscall(hs_sat26D5qY);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5qK, hs_sat26D5qX);
        };
        var hs_sat26D5qH = new $hs.Thunk();
        hs_sat26D5qH.evaluateOnce = function () {
            var hs_sat26D5qJ = new $hs.Thunk();
            hs_sat26D5qJ.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hSeek\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_wantSeekableHandle.hscall(hs_sat26D5qJ, hs_handle26D59s);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5qH, hs_sat26D5qI);
    };
    this.hs_hSetPosn.evaluate = function (hs_ds26D5aK) {
        var hs_wild26D5rs = hs_ds26D5aK;
        if (hs_ds26D5aK.notEvaluated) {
            hs_wild26D5rs = hs_ds26D5aK.hscall();
        }
        var hs_h26D5aO = hs_wild26D5rs.data[0];
        var hs_i26D5aP = hs_wild26D5rs.data[1];
        return $hs.modules.GHCziIOziHandle.hs_hSeek.hscall(hs_h26D5aO, $hs.modules.GHCziIOziDevice.hs_AbsoluteSeek, hs_i26D5aP);
    };
    this.hs_hFlushAll.evaluate = function (hs_handle26D5aS) {
        var hs_sat26D5rt = new $hs.Thunk();
        hs_sat26D5rt.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hFlushAll\x00");
        };
        return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26D5rt, hs_handle26D5aS, $hs.modules.GHCziIOziHandleziInternals.hs_flushBuffer);
    };
    this.hs_hGetEncoding.evaluate = function (hs_hdl26D5aV) {
        var hs_sat26D5rv = new $hs.Func(1);
        hs_sat26D5rv.evaluate = function (hs_hzu26D5aY) {
            var hs_wild26D5rM = hs_hzu26D5aY;
            if (hs_hzu26D5aY.notEvaluated) {
                hs_wild26D5rM = hs_hzu26D5aY.hscall();
            }
            var hs_ds526D5bg = hs_wild26D5rM.data[12];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ds526D5bg);
        };
        var hs_sat26D5ru = new $hs.Thunk();
        hs_sat26D5ru.evaluateOnce = function () {
            var hs_sat26D5rw = new $hs.Thunk();
            hs_sat26D5rw.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hGetEncoding\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26D5rw, hs_hdl26D5aV);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5ru, hs_sat26D5rv);
    };
    this.hs_hSetEncoding.evaluate = function (hs_hdl26D5bl, hs_encoding26D5bM) {
        var hs_sat26D5rO = new $hs.Func(1);
        hs_sat26D5rO.evaluate = function (hs_hzu26D5bo) {
            var hs_wild26D5bJ = hs_hzu26D5bo;
            if (hs_hzu26D5bo.notEvaluated) {
                hs_wild26D5bJ = hs_hzu26D5bo.hscall();
            }
            var hs_zddIODevice26D5c3 = hs_wild26D5bJ.data[0];
            var hs_zddBufferedIO26D5c4 = hs_wild26D5bJ.data[1];
            var hs_zddTypeable26D5c5 = hs_wild26D5bJ.data[2];
            var hs_ds26D5c6 = hs_wild26D5bJ.data[3];
            var hs_ds126D5bO = hs_wild26D5bJ.data[4];
            var hs_rb26D5bH = hs_wild26D5bJ.data[5];
            var hs_ds226D5c8 = hs_wild26D5bJ.data[6];
            var hs_rb226D5ca = hs_wild26D5bJ.data[8];
            var hs_rb326D5cb = hs_wild26D5bJ.data[9];
            var hs_ds626D5cf = hs_wild26D5bJ.data[13];
            var hs_ds726D5cg = hs_wild26D5bJ.data[14];
            var hs_ds826D5ch = hs_wild26D5bJ.data[15];
            var hs_a26D5bI = new $hs.Data(1);
            hs_a26D5bI.data = [hs_rb26D5bH];
            var hs_sat26D5rV = new $hs.Thunk();
            hs_sat26D5rV.evaluateOnce = function () {
                var hs_sat26D5rX = new $hs.Thunk();
                hs_sat26D5rX.evaluateOnce = function () {
                    var hs_sat26D5rZ = new $hs.Func(2);
                    hs_sat26D5rZ.evaluate = function (hs_mbzuencoder26D5cc, hs_mbzudecoder26D5cd) {
                        var hs_sat26D5s2 = new $hs.Func(1);
                        hs_sat26D5s2.evaluate = function (hs_bbuf26D5ck) {
                            var hs_sat26D5s4 = new $hs.Func(1);
                            hs_sat26D5s4.evaluate = function (hs_ref26D5c0) {
                                var hs_sat26D5s7 = new $hs.Thunk();
                                hs_sat26D5s7.evaluateOnce = function () {
                                    var hs_tpl26D5sa = hs_a26D5bI;
                                    if (hs_a26D5bI.notEvaluated) {
                                        hs_tpl26D5sa = hs_a26D5bI.hscall();
                                    }
                                    var hs_tpl126D5c7 = hs_tpl26D5sa.data[0];
                                    var hs_tpl226D5s9 = hs_ref26D5c0;
                                    if (hs_ref26D5c0.notEvaluated) {
                                        hs_tpl226D5s9 = hs_ref26D5c0.hscall();
                                    }
                                    var hs_tpl326D5c9 = hs_tpl226D5s9.data[0];
                                    var hs_sat26D5s8 = new $hs.Data(2);
                                    hs_sat26D5s8.data = [hs_encoding26D5bM];
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_zddIODevice26D5c3, hs_zddBufferedIO26D5c4, hs_zddTypeable26D5c5, hs_ds26D5c6, hs_ds126D5bO, hs_tpl126D5c7, hs_ds226D5c8, hs_tpl326D5c9, hs_rb226D5ca, hs_rb326D5cb, hs_mbzuencoder26D5cc, hs_mbzudecoder26D5cd, hs_sat26D5s8, hs_ds626D5cf, hs_ds726D5cg, hs_ds826D5ch];
                                    return $res;
                                };
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5s7);
                            };
                            var hs_sat26D5s3 = new $hs.Thunk();
                            hs_sat26D5s3.evaluateOnce = function () {
                                var hs_sat26D5s5 = new $hs.Thunk();
                                hs_sat26D5s5.evaluateOnce = function () {
                                    var hs_sat26D5s6 = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("last_decode\x00");
                                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D5s6);
                                };
                                return $hs.modules.GHCziIORef.hs_newIORef.hscall(hs_sat26D5s5);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5s3, hs_sat26D5s4);
                        };
                        var hs_sat26D5s1 = new $hs.Thunk();
                        hs_sat26D5s1.evaluateOnce = function () {
                            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26D5bI);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5s1, hs_sat26D5s2);
                    };
                    var hs_sat26D5rY = new $hs.Thunk();
                    hs_sat26D5rY.evaluateOnce = function () {
                        var hs_sat26D5s0 = new $hs.Data(2);
                        hs_sat26D5s0.data = [hs_encoding26D5bM];
                        return $hs.modules.GHCziIOziHandleziInternals.hs_openTextEncoding.hscall(hs_sat26D5s0, hs_ds126D5bO);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5rY, hs_sat26D5rZ);
                };
                var hs_sat26D5rW = new $hs.Thunk();
                hs_sat26D5rW.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_closeTextCodecs.hscall(hs_wild26D5bJ);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5rW, hs_sat26D5rX);
            };
            var hs_sat26D5rQ = new $hs.Thunk();
            hs_sat26D5rQ.evaluateOnce = function () {
                return $hs.modules.GHCziIOziHandleziInternals.hs_flushCharBuffer.hscall(hs_wild26D5bJ);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5rQ, hs_sat26D5rV);
        };
        var hs_sat26D5rN = new $hs.Thunk();
        hs_sat26D5rN.evaluateOnce = function () {
            var hs_sat26D5rP = new $hs.Thunk();
            hs_sat26D5rP.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hSetEncoding\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withAllHandleszuzu.hscall(hs_sat26D5rP, hs_hdl26D5bl);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5rN, hs_sat26D5rO);
    };
    this.hs_hSetBuffering.evaluate = function (hs_handle26D5ct, hs_mode26D5cT) {
        var hs_sat26D5sc = new $hs.Func(1);
        hs_sat26D5sc.evaluate = function (hs_handlezu26D5cw) {
            var hs_wild26D5dB = hs_handlezu26D5cw;
            if (hs_handlezu26D5cw.notEvaluated) {
                hs_wild26D5dB = hs_handlezu26D5cw.hscall();
            }
            var hs_zddIODevice26D5d5 = hs_wild26D5dB.data[0];
            var hs_zddBufferedIO26D5dk = hs_wild26D5dB.data[1];
            var hs_zddTypeable26D5dl = hs_wild26D5dB.data[2];
            var hs_ds26D5d6 = hs_wild26D5dB.data[3];
            var hs_ds126D5cR = hs_wild26D5dB.data[4];
            var hs_rb26D5dm = hs_wild26D5dB.data[5];
            var hs_ds226D5cU = hs_wild26D5dB.data[6];
            var hs_rb126D5dn = hs_wild26D5dB.data[7];
            var hs_rb226D5do = hs_wild26D5dB.data[8];
            var hs_rb326D5cP = hs_wild26D5dB.data[9];
            var hs_ds326D5dq = hs_wild26D5dB.data[10];
            var hs_ds426D5dr = hs_wild26D5dB.data[11];
            var hs_ds526D5ds = hs_wild26D5dB.data[12];
            var hs_ds626D5dt = hs_wild26D5dB.data[13];
            var hs_ds726D5du = hs_wild26D5dB.data[14];
            var hs_ds826D5dv = hs_wild26D5dB.data[15];
            var hs_a26D5cQ = new $hs.Data(1);
            hs_a26D5cQ.data = [hs_rb326D5cP];
            var hs_wild126D5da = hs_ds126D5cR;
            if (hs_ds126D5cR.notEvaluated) {
                hs_wild126D5da = hs_ds126D5cR.hscall();
            }
            switch (hs_wild126D5da.tag) {
            case 1:
                if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
                } else {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
                }
            default:
                var hs_wild226D5se = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqBufferMode, hs_mode26D5cT, hs_ds226D5cU);
                switch (hs_wild226D5se.tag) {
                case 1:
                    var hs_sat26D5sg = new $hs.Thunk();
                    hs_sat26D5sg.evaluateOnce = function () {
                        var hs_sat26D5sm = new $hs.Func(1);
                        hs_sat26D5sm.evaluate = function (hs_iszutty26D5d9) {
                            var hs_sat26D5so = new $hs.Thunk();
                            hs_sat26D5so.evaluateOnce = function () {
                                var hs_sat26D5sv = new $hs.Thunk();
                                hs_sat26D5sv.evaluateOnce = function () {
                                    var hs_sat26D5sw = new $hs.Thunk();
                                    hs_sat26D5sw.evaluateOnce = function () {
                                        var hs_tpl26D5sx = hs_a26D5cQ;
                                        if (hs_a26D5cQ.notEvaluated) {
                                            hs_tpl26D5sx = hs_a26D5cQ.hscall();
                                        }
                                        var hs_tpl126D5dp = hs_tpl26D5sx.data[0];
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_zddIODevice26D5d5, hs_zddBufferedIO26D5dk, hs_zddTypeable26D5dl, hs_ds26D5d6, hs_wild126D5da, hs_rb26D5dm, hs_mode26D5cT, hs_rb126D5dn, hs_rb226D5do, hs_tpl126D5dp, hs_ds326D5dq, hs_ds426D5dr, hs_ds526D5ds, hs_ds626D5dt, hs_ds726D5du, hs_ds826D5dv];
                                        return $res;
                                    };
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5sw);
                                };
                                var hs_sat26D5su = new $hs.Thunk();
                                hs_sat26D5su.evaluateOnce = function () {
                                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26D5cQ, $hs.modules.GHCziIOziHandleziTypes.hs_BufferListNil);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5su, hs_sat26D5sv);
                            };
                            var hs_sat26D5sn = new $hs.Thunk();
                            hs_sat26D5sn.evaluateOnce = function () {
                                var hs_sat26D5sq = new $hs.Thunk();
                                hs_sat26D5sq.evaluateOnce = function () {
                                    var hs_wild326D5st = hs_mode26D5cT;
                                    if (hs_mode26D5cT.notEvaluated) {
                                        hs_wild326D5st = hs_mode26D5cT.hscall();
                                    }
                                    switch (hs_wild326D5st.tag) {
                                    case 1:
                                        return $hs.modules.GHCziIOziDevice.hs_setRaw.hscall(hs_zddIODevice26D5d5, hs_ds26D5d6, $hs.modules.GHCziTypes.hs_True);
                                    default:
                                        return $hs.modules.GHCziIOziDevice.hs_setRaw.hscall(hs_zddIODevice26D5d5, hs_ds26D5d6, $hs.modules.GHCziTypes.hs_False);
                                    }
                                };
                                var hs_sat26D5sp = new $hs.Thunk();
                                hs_sat26D5sp.evaluateOnce = function () {
                                    var hs_sat26D5sr = new $hs.Thunk();
                                    hs_sat26D5sr.evaluateOnce = function () {
                                        var hs_sat26D5ss = new $hs.Thunk();
                                        hs_sat26D5ss.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziHandleziTypes.hs_isReadableHandleType.hscall(hs_wild126D5da);
                                        };
                                        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_iszutty26D5d9, hs_sat26D5ss);
                                    };
                                    return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5sr);
                                };
                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5sp, hs_sat26D5sq);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5sn, hs_sat26D5so);
                        };
                        var hs_sat26D5sl = new $hs.Thunk();
                        hs_sat26D5sl.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziDevice.hs_isTerminal.hscall(hs_zddIODevice26D5d5, hs_ds26D5d6);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5sl, hs_sat26D5sm);
                    };
                    var hs_sat26D5sf = new $hs.Thunk();
                    hs_sat26D5sf.evaluateOnce = function () {
                        var hs_wild326D5si = hs_mode26D5cT;
                        if (hs_mode26D5cT.notEvaluated) {
                            hs_wild326D5si = hs_mode26D5cT.hscall();
                        }
                        switch (hs_wild326D5si.tag) {
                        case 3:
                            var hs_ds926D5cY = hs_wild326D5si.data[0];
                            var hs_wild426D5sh = hs_ds926D5cY;
                            if (hs_ds926D5cY.notEvaluated) {
                                hs_wild426D5sh = hs_ds926D5cY.hscall();
                            }
                            switch (hs_wild426D5sh.tag) {
                            case 1:
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                            case 2:
                                var hs_n26D5d1 = hs_wild426D5sh.data[0];
                                var hs_sat26D5sj = new $hs.Data(1);
                                hs_sat26D5sj.data = [0];
                                var hs_wild526D5sk = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_n26D5d1, hs_sat26D5sj);
                                switch (hs_wild526D5sk.tag) {
                                case 1:
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                case 2:
                                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezubufsizz.hscall(hs_n26D5d1);
                                }
                            }
                        default:
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5sf, hs_sat26D5sg);
                case 2:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_wild26D5dB);
                }
            }
        };
        var hs_sat26D5sb = new $hs.Thunk();
        hs_sat26D5sb.evaluateOnce = function () {
            var hs_sat26D5sd = new $hs.Thunk();
            hs_sat26D5sd.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hSetBuffering\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withAllHandleszuzu.hscall(hs_sat26D5sd, hs_handle26D5ct);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5sb, hs_sat26D5sc);
    };
    this.hs_hLookAhead.evaluate = function (hs_handle26D5dF) {
        var hs_sat26D5sy = new $hs.Thunk();
        hs_sat26D5sy.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hLookAhead\x00");
        };
        return $hs.modules.GHCziIOziHandleziInternals.hs_wantReadableHandlezu.hscall(hs_sat26D5sy, hs_handle26D5dF, $hs.modules.GHCziIOziHandleziInternals.hs_hLookAheadzu);
    };
    this.hs_hIsEOF.evaluate = function (hs_handle26D5dI) {
        var hs_sat26D5sA = new $hs.Func(1);
        hs_sat26D5sA.evaluate = function (hs_ds26D5dL) {
            var hs_wild26D5sD = hs_ds26D5dL;
            if (hs_ds26D5dL.notEvaluated) {
                hs_wild26D5sD = hs_ds26D5dL.hscall();
            }
            var hs_zddBufferedIO26D5ei = hs_wild26D5sD.data[1];
            var hs_ds126D5ej = hs_wild26D5sD.data[3];
            var hs_rb26D5e4 = hs_wild26D5sD.data[5];
            var hs_rb226D5e6 = hs_wild26D5sD.data[8];
            var hs_a26D5e5 = new $hs.Data(1);
            hs_a26D5e5.data = [hs_rb26D5e4];
            var hs_sat26D5sQ = new $hs.Func(1);
            hs_sat26D5sQ.evaluate = function (hs_cbuf26D5ea) {
                var hs_sat26D5sS = new $hs.Thunk();
                hs_sat26D5sS.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_cbuf26D5ea);
                };
                var hs_wild126D5sT = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D5sS);
                switch (hs_wild126D5sT.tag) {
                case 1:
                    var hs_sat26D5sV = new $hs.Func(1);
                    hs_sat26D5sV.evaluate = function (hs_bbuf26D5ef) {
                        var hs_sat26D5sW = new $hs.Thunk();
                        hs_sat26D5sW.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_bbuf26D5ef);
                        };
                        var hs_wild226D5sX = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D5sW);
                        switch (hs_wild226D5sX.tag) {
                        case 1:
                            var hs_sat26D5sZ = new $hs.Func(1);
                            hs_sat26D5sZ.evaluate = function (hs_ds1026D5em) {
                                var hs_wild326D5t0 = hs_ds1026D5em;
                                if (hs_ds1026D5em.notEvaluated) {
                                    hs_wild326D5t0 = hs_ds1026D5em.hscall();
                                }
                                var hs_r26D5eq = hs_wild326D5t0.data[0];
                                var hs_bbufzq26D5et = hs_wild326D5t0.data[1];
                                var hs_sat26D5t1 = new $hs.Data(1);
                                hs_sat26D5t1.data = [0];
                                var hs_wild426D5t2 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_r26D5eq, hs_sat26D5t1);
                                switch (hs_wild426D5t2.tag) {
                                case 1:
                                    var hs_sat26D5t4 = new $hs.Thunk();
                                    hs_sat26D5t4.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_False);
                                    };
                                    var hs_sat26D5t3 = new $hs.Thunk();
                                    hs_sat26D5t3.evaluateOnce = function () {
                                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26D5e5, hs_bbufzq26D5et);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5t3, hs_sat26D5t4);
                                case 2:
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_True);
                                }
                            };
                            var hs_sat26D5sY = new $hs.Thunk();
                            hs_sat26D5sY.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziBufferedIO.hs_fillReadBuffer.hscall(hs_zddBufferedIO26D5ei, hs_ds126D5ej, hs_bbuf26D5ef);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5sY, hs_sat26D5sZ);
                        case 2:
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_False);
                        }
                    };
                    var hs_sat26D5sU = new $hs.Thunk();
                    hs_sat26D5sU.evaluateOnce = function () {
                        return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26D5e5);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5sU, hs_sat26D5sV);
                case 2:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_False);
                }
            };
            var hs_sat26D5sC = new $hs.Thunk();
            hs_sat26D5sC.evaluateOnce = function () {
                var hs_sat26D5sR = new $hs.Data(1);
                hs_sat26D5sR.data = [hs_rb226D5e6];
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26D5sR);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5sC, hs_sat26D5sQ);
        };
        var hs_sat26D5sz = new $hs.Thunk();
        hs_sat26D5sz.evaluateOnce = function () {
            var hs_sat26D5sB = new $hs.Thunk();
            hs_sat26D5sB.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hIsEOF\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_wantReadableHandlezu.hscall(hs_sat26D5sB, hs_handle26D5dI);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5sz, hs_sat26D5sA);
    };
    this.hs_hSetFileSizze.evaluate = function (hs_handle26D5eD, hs_sizze26D5f3) {
        var hs_sat26D5t6 = new $hs.Func(1);
        hs_sat26D5t6.evaluate = function (hs_handlezu26D5eG) {
            var hs_wild26D5eY = hs_handlezu26D5eG;
            if (hs_handlezu26D5eG.notEvaluated) {
                hs_wild26D5eY = hs_handlezu26D5eG.hscall();
            }
            var hs_zddIODevice26D5f1 = hs_wild26D5eY.data[0];
            var hs_ds26D5f2 = hs_wild26D5eY.data[3];
            var hs_wild126D5tm = $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_wild26D5eY);
            switch (hs_wild126D5tm.tag) {
            case 1:
                if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
                } else {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
                }
            case 2:
                if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
                } else {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
                }
            default:
                var hs_sat26D5to = new $hs.Thunk();
                hs_sat26D5to.evaluateOnce = function () {
                    var hs_sat26D5tq = new $hs.Thunk();
                    hs_sat26D5tq.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                    };
                    var hs_sat26D5tp = new $hs.Thunk();
                    hs_sat26D5tp.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziDevice.hs_setSizze.hscall(hs_zddIODevice26D5f1, hs_ds26D5f2, hs_sizze26D5f3);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5tp, hs_sat26D5tq);
                };
                var hs_sat26D5tn = new $hs.Thunk();
                hs_sat26D5tn.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_flushWriteBuffer.hscall(hs_wild26D5eY);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5tn, hs_sat26D5to);
            }
        };
        var hs_sat26D5t5 = new $hs.Thunk();
        hs_sat26D5t5.evaluateOnce = function () {
            var hs_sat26D5t7 = new $hs.Thunk();
            hs_sat26D5t7.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hSetFileSize\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26D5t7, hs_handle26D5eD);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5t5, hs_sat26D5t6);
    };
    this.hs_hFileSizze.evaluate = function (hs_handle26D5fa) {
        var hs_sat26D5ts = new $hs.Func(1);
        hs_sat26D5ts.evaluate = function (hs_handlezu26D5fd) {
            var hs_wild26D5fv = hs_handlezu26D5fd;
            if (hs_handlezu26D5fd.notEvaluated) {
                hs_wild26D5fv = hs_handlezu26D5fd.hscall();
            }
            var hs_zddIODevice26D5fy = hs_wild26D5fv.data[0];
            var hs_ds26D5fz = hs_wild26D5fv.data[3];
            var hs_wild126D5tI = $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_wild26D5fv);
            switch (hs_wild126D5tI.tag) {
            case 1:
                if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
                } else {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
                }
            case 2:
                if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
                } else {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
                }
            default:
                var hs_sat26D5tK = new $hs.Thunk();
                hs_sat26D5tK.evaluateOnce = function () {
                    var hs_sat26D5tM = new $hs.Func(1);
                    hs_sat26D5tM.evaluate = function (hs_r26D5fC) {
                        var hs_sat26D5tN = new $hs.Thunk();
                        hs_sat26D5tN.evaluateOnce = function () {
                            var hs_sat26D5tS = new $hs.Thunk();
                            hs_sat26D5tS.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26D5tS);
                        };
                        var hs_wild226D5tO = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_r26D5fC, hs_sat26D5tN);
                        switch (hs_wild226D5tO.tag) {
                        case 1:
                            var hs_sat26D5tQ = new $hs.Thunk();
                            hs_sat26D5tQ.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("not a regular file\x00");
                            };
                            var hs_sat26D5tR = new $hs.Thunk();
                            hs_sat26D5tR.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hFileSize\x00");
                            };
                            var hs_sat26D5tP = new $hs.Data(1);
                            hs_sat26D5tP.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_InappropriateType, hs_sat26D5tR, hs_sat26D5tQ, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
                            return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26D5tP);
                        case 2:
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_r26D5fC);
                        }
                    };
                    var hs_sat26D5tL = new $hs.Thunk();
                    hs_sat26D5tL.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziDevice.hs_getSizze.hscall(hs_zddIODevice26D5fy, hs_ds26D5fz);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5tL, hs_sat26D5tM);
                };
                var hs_sat26D5tJ = new $hs.Thunk();
                hs_sat26D5tJ.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_flushWriteBuffer.hscall(hs_wild26D5fv);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5tJ, hs_sat26D5tK);
            }
        };
        var hs_sat26D5tr = new $hs.Thunk();
        hs_sat26D5tr.evaluateOnce = function () {
            var hs_sat26D5tt = new $hs.Thunk();
            hs_sat26D5tt.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hFileSize\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26D5tt, hs_handle26D5fa);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5tr, hs_sat26D5ts);
    };
    hs_hClosezq25ueeU.evaluate = function (hs_h26D5fP, hs_m26D5fQ) {
        var hs_sat26D5tT = new $hs.Thunk();
        hs_sat26D5tT.evaluateOnce = function () {
            var hs_sat26D5tU = new $hs.Thunk();
            hs_sat26D5tU.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hClose\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezq.hscall(hs_sat26D5tU, hs_h26D5fP, hs_m26D5fQ);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5tT, $hs.modules.GHCziIOziHandleziInternals.hs_hClosezuhelp);
    };
    this.hs_hFlush.evaluate = function (hs_handle26D5fU) {
        var hs_sat26D5tV = new $hs.Thunk();
        hs_sat26D5tV.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hFlush\x00");
        };
        return $hs.modules.GHCziIOziHandleziInternals.hs_wantWritableHandle.hscall(hs_sat26D5tV, hs_handle26D5fU, $hs.modules.GHCziIOziHandleziInternals.hs_flushWriteBuffer);
    };
    hs_zdczeze25uGJF.evaluate = function (hs_ds26D5fY, hs_ds126D5g2) {
        var hs_wild26D5tY = hs_ds26D5fY;
        if (hs_ds26D5fY.notEvaluated) {
            hs_wild26D5tY = hs_ds26D5fY.hscall();
        }
        var hs_h126D5g9 = hs_wild26D5tY.data[0];
        var hs_p126D5g6 = hs_wild26D5tY.data[1];
        var hs_wild126D5tX = hs_ds126D5g2;
        if (hs_ds126D5g2.notEvaluated) {
            hs_wild126D5tX = hs_ds126D5g2.hscall();
        }
        var hs_h226D5ga = hs_wild126D5tX.data[0];
        var hs_p226D5g7 = hs_wild126D5tX.data[1];
        var hs_sat26D5tZ = new $hs.Thunk();
        hs_sat26D5tZ.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqHandle, hs_h126D5g9, hs_h226D5ga);
        };
        var hs_sat26D5tW = new $hs.Thunk();
        hs_sat26D5tW.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_p126D5g6, hs_p226D5g7);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D5tW, hs_sat26D5tZ);
    };
    this.hs_zdfEqHandlePosn.data = [hs_zdczeze25uGJF, hs_zdczsze25uGJW];
    hs_zdczsze25uGJW.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzsze.hscall($hs.modules.GHCziIOziHandle.hs_zdfEqHandlePosn);
    };
    hs_zdcshowsPrec25uGJX.evaluate = function (hs_p26D5gk, hs_ds26D5gg) {
        var hs_wild26D5u1 = hs_ds26D5gg;
        if (hs_ds26D5gg.notEvaluated) {
            hs_wild26D5u1 = hs_ds26D5gg.hscall();
        }
        var hs_h26D5gl = hs_wild26D5u1.data[0];
        var hs_pos26D5gp = hs_wild26D5u1.data[1];
        var hs_sat26D5u2 = new $hs.Thunk();
        hs_sat26D5u2.evaluateOnce = function () {
            var hs_sat26D5u4 = new $hs.Thunk();
            hs_sat26D5u4.evaluateOnce = function () {
                return $hs.modules.GHCziShow.hs_shows.hscall($hs.modules.GHCziNum.hs_zdfShowInteger, hs_pos26D5gp);
            };
            var hs_sat26D5u3 = new $hs.Thunk();
            hs_sat26D5u3.evaluateOnce = function () {
                var hs_sat26D5u5 = new $hs.Thunk();
                hs_sat26D5u5.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(" at position \x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D5u5);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D5u3, hs_sat26D5u4);
        };
        var hs_sat26D5u0 = new $hs.Thunk();
        hs_sat26D5u0.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowHandle, hs_p26D5gk, hs_h26D5gl);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D5u0, hs_sat26D5u2);
    };
    this.hs_zdfShowHandlePosn.data = [hs_zdcshowsPrec25uGJX, hs_zdcshow25uGKd, hs_zdcshowList25uGKc];
    hs_zdcshowList25uGKc.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziIOziHandle.hs_zdfShowHandlePosn);
    };
    hs_zdcshow25uGKd.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziIOziHandle.hs_zdfShowHandlePosn);
    };
    hs_hClosezumaybethrow25ueeS.evaluate = function (hs_ds26D5gw, hs_h26D5gE) {
        var hs_wild26D5u7 = hs_ds26D5gw;
        if (hs_ds26D5gw.notEvaluated) {
            hs_wild26D5u7 = hs_ds26D5gw.hscall();
        }
        switch (hs_wild26D5u7.tag) {
        case 1:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        case 2:
            var hs_e26D5gz = hs_wild26D5u7.data[0];
            var hs_wild126D5u8 = $hs.modules.GHCziException.hs_fromException.hscall($hs.modules.GHCziIOziException.hs_zdfExceptionIOException, hs_e26D5gz);
            switch (hs_wild126D5u8.tag) {
            case 1:
                return $hs.modules.GHCziIO.hs_throwIO.hscall($hs.modules.GHCziException.hs_zdfExceptionSomeException, hs_e26D5gz);
            case 2:
                var hs_ioe26D5gC = hs_wild126D5u8.data[0];
                var hs_sat26D5u6 = new $hs.Thunk();
                hs_sat26D5u6.evaluateOnce = function () {
                    var hs_sat26D5u9 = new $hs.Thunk();
                    hs_sat26D5u9.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hClose\x00");
                    };
                    return $hs.modules.GHCziIOziHandleziInternals.hs_augmentIOError.hscall(hs_ioe26D5gC, hs_sat26D5u9, hs_h26D5gE);
                };
                return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_sat26D5u6);
            }
        }
    };
    this.hs_hClose.evaluate = function (hs_h26D5gH) {
        var hs_wild26D5gL = hs_h26D5gH;
        if (hs_h26D5gH.notEvaluated) {
            hs_wild26D5gL = hs_h26D5gH.hscall();
        }
        switch (hs_wild26D5gL.tag) {
        case 1:
            var hs_rb26D5gM = hs_wild26D5gL.data[1];
            var hs_sat26D5um = new $hs.Func(1);
            hs_sat26D5um.evaluate = function (hs_mbzuexc26D5gQ) {
                return hs_hClosezumaybethrow25ueeS.hscall(hs_mbzuexc26D5gQ, hs_wild26D5gL);
            };
            var hs_sat26D5uk = new $hs.Thunk();
            hs_sat26D5uk.evaluateOnce = function () {
                var hs_sat26D5un = new $hs.Data(1);
                hs_sat26D5un.data = [hs_rb26D5gM];
                return hs_hClosezq25ueeU.hscall(hs_wild26D5gL, hs_sat26D5un);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5uk, hs_sat26D5um);
        case 2:
            var hs_rb26D5gW = hs_wild26D5gL.data[1];
            var hs_rb126D5gY = hs_wild26D5gL.data[2];
            var hs_sat26D5uc = new $hs.Func(1);
            hs_sat26D5uc.evaluate = function (hs_excs26D5h4) {
                var hs_sat26D5ui = new $hs.Thunk();
                hs_sat26D5ui.evaluateOnce = function () {
                    var hs_sat26D5uj = new $hs.Thunk();
                    hs_sat26D5uj.evaluateOnce = function () {
                        return $hs.modules.DataziMaybe.hs_catMaybes.hscall(hs_excs26D5h4);
                    };
                    return $hs.modules.DataziMaybe.hs_listToMaybe.hscall(hs_sat26D5uj);
                };
                return hs_hClosezumaybethrow25ueeS.hscall(hs_sat26D5ui, hs_wild26D5gL);
            };
            var hs_sat26D5ua = new $hs.Thunk();
            hs_sat26D5ua.evaluateOnce = function () {
                var hs_sat26D5ue = new $hs.Data(1);
                hs_sat26D5ue.data = [hs_rb126D5gY];
                var hs_sat26D5uf = new $hs.Data(2);
                hs_sat26D5uf.data = [hs_sat26D5ue, $hs.modules.GHCziTypes.hs_ZMZN];
                var hs_sat26D5ug = new $hs.Data(1);
                hs_sat26D5ug.data = [hs_rb26D5gW];
                var hs_sat26D5uh = new $hs.Data(2);
                hs_sat26D5uh.data = [hs_sat26D5ug, hs_sat26D5uf];
                var hs_sat26D5ud = new $hs.Func(1);
                hs_sat26D5ud.evaluate = function (hs_eta1cW6l3) {
                    return hs_hClosezq25ueeU.hscall(hs_wild26D5gL, hs_eta1cW6l3);
                };
                return $hs.modules.ControlziMonad.hs_mapM.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5ud, hs_sat26D5uh);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5ua, hs_sat26D5uc);
        }
    };
    this.hs_hGetPosn.evaluate = function (hs_handle26D5h9) {
        var hs_sat26D5up = new $hs.Func(1);
        hs_sat26D5up.evaluate = function (hs_posn26D5hc) {
            var hs_sat26D5uq = new $hs.Data(1);
            hs_sat26D5uq.data = [hs_handle26D5h9, hs_posn26D5hc];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5uq);
        };
        var hs_sat26D5uo = new $hs.Thunk();
        hs_sat26D5uo.evaluateOnce = function () {
            return $hs.modules.GHCziIOziHandle.hs_hTell.hscall(hs_handle26D5h9);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5uo, hs_sat26D5up);
    };
    this.hs_hIsOpen.evaluate = function (hs_handle26D5hh) {
        var hs_sat26D5us = new $hs.Func(1);
        hs_sat26D5us.evaluate = function (hs_handlezu26D5hk) {
            var hs_wild26D5uu = $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_handlezu26D5hk);
            switch (hs_wild26D5uu.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_False);
            case 2:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_False);
            default:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_True);
            }
        };
        var hs_sat26D5ur = new $hs.Thunk();
        hs_sat26D5ur.evaluateOnce = function () {
            var hs_sat26D5ut = new $hs.Thunk();
            hs_sat26D5ut.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hIsOpen\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26D5ut, hs_handle26D5hh);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5ur, hs_sat26D5us);
    };
    this.hs_hIsClosed.evaluate = function (hs_handle26D5hp) {
        var hs_sat26D5uw = new $hs.Func(1);
        hs_sat26D5uw.evaluate = function (hs_handlezu26D5hs) {
            var hs_wild26D5uy = $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_handlezu26D5hs);
            switch (hs_wild26D5uy.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_True);
            default:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_False);
            }
        };
        var hs_sat26D5uv = new $hs.Thunk();
        hs_sat26D5uv.evaluateOnce = function () {
            var hs_sat26D5ux = new $hs.Thunk();
            hs_sat26D5ux.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hIsClosed\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26D5ux, hs_handle26D5hp);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5uv, hs_sat26D5uw);
    };
    this.hs_hIsReadable.evaluate = function (hs_ds26D5hw) {
        var hs_wild26D5hB = hs_ds26D5hw;
        if (hs_ds26D5hw.notEvaluated) {
            hs_wild26D5hB = hs_ds26D5hw.hscall();
        }
        switch (hs_wild26D5hB.tag) {
        case 1:
            var hs_sat26D5uF = new $hs.Func(1);
            hs_sat26D5uF.evaluate = function (hs_handlezu26D5hE) {
                var hs_wild126D5hG = $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_handlezu26D5hE);
                switch (hs_wild126D5hG.tag) {
                case 1:
                    if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
                    } else {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
                    }
                case 2:
                    if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
                    } else {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
                    }
                default:
                    var hs_sat26D5uH = new $hs.Thunk();
                    hs_sat26D5uH.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziHandleziTypes.hs_isReadableHandleType.hscall(hs_wild126D5hG);
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5uH);
                }
            };
            var hs_sat26D5uC = new $hs.Thunk();
            hs_sat26D5uC.evaluateOnce = function () {
                var hs_sat26D5uG = new $hs.Thunk();
                hs_sat26D5uG.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hIsReadable\x00");
                };
                return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26D5uG, hs_wild26D5hB);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5uC, hs_sat26D5uF);
        case 2:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_True);
        }
    };
    this.hs_hIsWritable.evaluate = function (hs_ds26D5hN) {
        var hs_wild26D5hS = hs_ds26D5hN;
        if (hs_ds26D5hN.notEvaluated) {
            hs_wild26D5hS = hs_ds26D5hN.hscall();
        }
        switch (hs_wild26D5hS.tag) {
        case 1:
            var hs_sat26D5uO = new $hs.Func(1);
            hs_sat26D5uO.evaluate = function (hs_handlezu26D5hV) {
                var hs_wild126D5hX = $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_handlezu26D5hV);
                switch (hs_wild126D5hX.tag) {
                case 1:
                    if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
                    } else {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
                    }
                case 2:
                    if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
                    } else {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
                    }
                default:
                    var hs_sat26D5uQ = new $hs.Thunk();
                    hs_sat26D5uQ.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziHandleziTypes.hs_isWritableHandleType.hscall(hs_wild126D5hX);
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5uQ);
                }
            };
            var hs_sat26D5uL = new $hs.Thunk();
            hs_sat26D5uL.evaluateOnce = function () {
                var hs_sat26D5uP = new $hs.Thunk();
                hs_sat26D5uP.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hIsWritable\x00");
                };
                return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26D5uP, hs_wild26D5hS);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5uL, hs_sat26D5uO);
        case 2:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_True);
        }
    };
    this.hs_hGetBuffering.evaluate = function (hs_handle26D5i5) {
        var hs_sat26D5uS = new $hs.Func(1);
        hs_sat26D5uS.evaluate = function (hs_handlezu26D5i8) {
            var hs_wild26D5uU = $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_handlezu26D5i8);
            switch (hs_wild26D5uU.tag) {
            case 1:
                if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
                } else {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
                }
            default:
                var hs_sat26D5uV = new $hs.Thunk();
                hs_sat26D5uV.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziHandleziTypes.hs_haBufferMode.hscall(hs_handlezu26D5i8);
                };
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5uV);
            }
        };
        var hs_sat26D5uR = new $hs.Thunk();
        hs_sat26D5uR.evaluateOnce = function () {
            var hs_sat26D5uT = new $hs.Thunk();
            hs_sat26D5uT.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hGetBuffering\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26D5uT, hs_handle26D5i5);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5uR, hs_sat26D5uS);
    };
    this.hs_hSetEcho.evaluate = function (hs_handle26D5ie, hs_on26D5iI) {
        var hs_sat26D5uX = new $hs.Func(1);
        hs_sat26D5uX.evaluate = function (hs_isT26D5ih) {
            var hs_wild26D5uY = $hs.modules.GHCziClasses.hs_not.hscall(hs_isT26D5ih);
            switch (hs_wild26D5uY.tag) {
            case 1:
                var hs_sat26D5v0 = new $hs.Func(1);
                hs_sat26D5v0.evaluate = function (hs_ds26D5im) {
                    var hs_wild126D5v3 = hs_ds26D5im;
                    if (hs_ds26D5im.notEvaluated) {
                        hs_wild126D5v3 = hs_ds26D5im.hscall();
                    }
                    var hs_zddIODevice26D5iG = hs_wild126D5v3.data[0];
                    var hs_ds126D5iH = hs_wild126D5v3.data[3];
                    var hs_ds226D5iE = hs_wild126D5v3.data[4];
                    var hs_wild226D5v2 = hs_ds226D5iE;
                    if (hs_ds226D5iE.notEvaluated) {
                        hs_wild226D5v2 = hs_ds226D5iE.hscall();
                    }
                    switch (hs_wild226D5v2.tag) {
                    case 1:
                        if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                            return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
                        } else {
                            return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
                        }
                    default:
                        return $hs.modules.GHCziIOziDevice.hs_setEcho.hscall(hs_zddIODevice26D5iG, hs_ds126D5iH, hs_on26D5iI);
                    }
                };
                var hs_sat26D5uZ = new $hs.Thunk();
                hs_sat26D5uZ.evaluateOnce = function () {
                    var hs_sat26D5v1 = new $hs.Thunk();
                    hs_sat26D5v1.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hSetEcho\x00");
                    };
                    return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26D5v1, hs_handle26D5ie);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5uZ, hs_sat26D5v0);
            case 2:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            }
        };
        var hs_sat26D5uW = new $hs.Thunk();
        hs_sat26D5uW.evaluateOnce = function () {
            return $hs.modules.GHCziIOziHandle.hs_hIsTerminalDevice.hscall(hs_handle26D5ie);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5uW, hs_sat26D5uX);
    };
    this.hs_hGetEcho.evaluate = function (hs_handle26D5iM) {
        var hs_sat26D5vi = new $hs.Func(1);
        hs_sat26D5vi.evaluate = function (hs_isT26D5iP) {
            var hs_wild26D5vj = $hs.modules.GHCziClasses.hs_not.hscall(hs_isT26D5iP);
            switch (hs_wild26D5vj.tag) {
            case 1:
                var hs_sat26D5vl = new $hs.Func(1);
                hs_sat26D5vl.evaluate = function (hs_ds26D5iU) {
                    var hs_wild126D5vo = hs_ds26D5iU;
                    if (hs_ds26D5iU.notEvaluated) {
                        hs_wild126D5vo = hs_ds26D5iU.hscall();
                    }
                    var hs_zddIODevice26D5je = hs_wild126D5vo.data[0];
                    var hs_ds126D5jf = hs_wild126D5vo.data[3];
                    var hs_ds226D5jc = hs_wild126D5vo.data[4];
                    var hs_wild226D5vn = hs_ds226D5jc;
                    if (hs_ds226D5jc.notEvaluated) {
                        hs_wild226D5vn = hs_ds226D5jc.hscall();
                    }
                    switch (hs_wild226D5vn.tag) {
                    case 1:
                        if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                            return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
                        } else {
                            return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
                        }
                    default:
                        return $hs.modules.GHCziIOziDevice.hs_getEcho.hscall(hs_zddIODevice26D5je, hs_ds126D5jf);
                    }
                };
                var hs_sat26D5vk = new $hs.Thunk();
                hs_sat26D5vk.evaluateOnce = function () {
                    var hs_sat26D5vm = new $hs.Thunk();
                    hs_sat26D5vm.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hGetEcho\x00");
                    };
                    return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26D5vm, hs_handle26D5iM);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5vk, hs_sat26D5vl);
            case 2:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_False);
            }
        };
        var hs_sat26D5vh = new $hs.Thunk();
        hs_sat26D5vh.evaluateOnce = function () {
            return $hs.modules.GHCziIOziHandle.hs_hIsTerminalDevice.hscall(hs_handle26D5iM);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5vh, hs_sat26D5vi);
    };
    this.hs_hDuplicate.evaluate = function (hs_h26D5jj) {
        var hs_wild26D5jo = hs_h26D5jj;
        if (hs_h26D5jj.notEvaluated) {
            hs_wild26D5jo = hs_h26D5jj.hscall();
        }
        switch (hs_wild26D5jo.tag) {
        case 1:
            var hs_path26D5jt = hs_wild26D5jo.data[0];
            var hs_rb26D5jp = hs_wild26D5jo.data[1];
            var hs_sat26D5w4 = new $hs.Func(1);
            hs_sat26D5w4.evaluate = function (hs_hzu26D5ju) {
                var hs_sat26D5w7 = new $hs.Data(2);
                hs_sat26D5w7.data = [$hs.modules.GHCziIOziHandleziInternals.hs_handleFinalizzer];
                return hs_dupHandle25uefj.hscall(hs_path26D5jt, hs_wild26D5jo, $hs.modules.DataziMaybe.hs_Nothing, hs_hzu26D5ju, hs_sat26D5w7);
            };
            var hs_sat26D5w3 = new $hs.Thunk();
            hs_sat26D5w3.evaluateOnce = function () {
                var hs_sat26D5w6 = new $hs.Data(1);
                hs_sat26D5w6.data = [hs_rb26D5jp];
                var hs_sat26D5w5 = new $hs.Thunk();
                hs_sat26D5w5.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hDuplicate\x00");
                };
                return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzq.hscall(hs_sat26D5w5, hs_wild26D5jo, hs_sat26D5w6);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5w3, hs_sat26D5w4);
        case 2:
            var hs_path26D5jI = hs_wild26D5jo.data[0];
            var hs_rb26D5jB = hs_wild26D5jo.data[1];
            var hs_rb126D5jE = hs_wild26D5jo.data[2];
            var hs_r26D5jC = new $hs.Data(1);
            hs_r26D5jC.data = [hs_rb26D5jB];
            var hs_sat26D5vD = new $hs.Func(1);
            hs_sat26D5vD.evaluate = function (hs_writezuside26D5jO) {
                var hs_wild126D5vK = hs_writezuside26D5jO;
                if (hs_writezuside26D5jO.notEvaluated) {
                    hs_wild126D5vK = hs_writezuside26D5jO.hscall();
                }
                switch (hs_wild126D5vK.tag) {
                case 1:
                    var hs_rb226D5jT = hs_wild126D5vK.data[1];
                    var hs_writezum26D5jU = new $hs.Data(1);
                    hs_writezum26D5jU.data = [hs_rb226D5jT];
                    var hs_sat26D5vQ = new $hs.Func(1);
                    hs_sat26D5vQ.evaluate = function (hs_readzuside26D5k3) {
                        var hs_wild226D5vW = hs_readzuside26D5k3;
                        if (hs_readzuside26D5k3.notEvaluated) {
                            hs_wild226D5vW = hs_readzuside26D5k3.hscall();
                        }
                        switch (hs_wild226D5vW.tag) {
                        case 1:
                            var hs_rb326D5k9 = hs_wild226D5vW.data[1];
                            var hs_sat26D5w0 = new $hs.Thunk();
                            hs_sat26D5w0.evaluateOnce = function () {
                                var hs_tpl26D5w2 = hs_writezum26D5jU;
                                if (hs_writezum26D5jU.notEvaluated) {
                                    hs_tpl26D5w2 = hs_writezum26D5jU.hscall();
                                }
                                var hs_tpl126D5ka = hs_tpl26D5w2.data[0];
                                var $res = new $hs.Data(2);
                                $res.data = [hs_path26D5jI, hs_rb326D5k9, hs_tpl126D5ka];
                                return $res;
                            };
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5w0);
                        case 2:
                            var hs_sat26D5vV = new $hs.Thunk();
                            hs_sat26D5vV.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/IO/Handle.hs:612:3-33\x00");
                            };
                            return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5vV);
                        }
                    };
                    var hs_sat26D5vO = new $hs.Thunk();
                    hs_sat26D5vO.evaluateOnce = function () {
                        var hs_sat26D5vS = new $hs.Func(1);
                        hs_sat26D5vS.evaluate = function (hs_hzu26D5jZ) {
                            var hs_sat26D5vU = new $hs.Data(2);
                            hs_sat26D5vU.data = [hs_writezum26D5jU];
                            return hs_dupHandle25uefj.hscall(hs_path26D5jI, hs_wild26D5jo, hs_sat26D5vU, hs_hzu26D5jZ, $hs.modules.DataziMaybe.hs_Nothing);
                        };
                        var hs_sat26D5vR = new $hs.Thunk();
                        hs_sat26D5vR.evaluateOnce = function () {
                            var hs_sat26D5vT = new $hs.Thunk();
                            hs_sat26D5vT.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hDuplicate\x00");
                            };
                            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzq.hscall(hs_sat26D5vT, hs_wild26D5jo, hs_r26D5jC);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5vR, hs_sat26D5vS);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5vO, hs_sat26D5vQ);
                case 2:
                    var hs_sat26D5vJ = new $hs.Thunk();
                    hs_sat26D5vJ.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Pattern match failure in do expression at /home/titto/cache/haskell/ghc-7.2.1/libraries/base/GHC/IO/Handle.hs:609:3-35\x00");
                    };
                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5vJ);
                }
            };
            var hs_sat26D5vC = new $hs.Thunk();
            hs_sat26D5vC.evaluateOnce = function () {
                var hs_sat26D5vF = new $hs.Func(1);
                hs_sat26D5vF.evaluate = function (hs_hzu26D5jJ) {
                    var hs_sat26D5vI = new $hs.Data(2);
                    hs_sat26D5vI.data = [$hs.modules.GHCziIOziHandleziInternals.hs_handleFinalizzer];
                    return hs_dupHandle25uefj.hscall(hs_path26D5jI, hs_wild26D5jo, $hs.modules.DataziMaybe.hs_Nothing, hs_hzu26D5jJ, hs_sat26D5vI);
                };
                var hs_sat26D5vE = new $hs.Thunk();
                hs_sat26D5vE.evaluateOnce = function () {
                    var hs_sat26D5vH = new $hs.Data(1);
                    hs_sat26D5vH.data = [hs_rb126D5jE];
                    var hs_sat26D5vG = new $hs.Thunk();
                    hs_sat26D5vG.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hDuplicate\x00");
                    };
                    return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzq.hscall(hs_sat26D5vG, hs_wild26D5jo, hs_sat26D5vH);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5vE, hs_sat26D5vF);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5vC, hs_sat26D5vD);
        }
    };
    this.hs_hDuplicateTo.evaluate = function (hs_h126D5ko, hs_h226D5kv) {
        var hs_wild26D5kJ = hs_h126D5ko;
        if (hs_h126D5ko.notEvaluated) {
            hs_wild26D5kJ = hs_h126D5ko.hscall();
        }
        switch (hs_wild26D5kJ.tag) {
        case 1:
            var hs_path26D5kM = hs_wild26D5kJ.data[0];
            var hs_rb26D5kt = hs_wild26D5kJ.data[1];
            var hs_m126D5ku = new $hs.Data(1);
            hs_m126D5ku.data = [hs_rb26D5kt];
            var hs_wild126D5kA = hs_h226D5kv;
            if (hs_h226D5kv.notEvaluated) {
                hs_wild126D5kA = hs_h226D5kv.hscall();
            }
            switch (hs_wild126D5kA.tag) {
            case 1:
                var hs_rb126D5kB = hs_wild126D5kA.data[1];
                var hs_sat26D5wC = new $hs.Func(1);
                hs_sat26D5wC.evaluate = function (hs_h2zu26D5kF) {
                    var hs_sat26D5wG = new $hs.Func(1);
                    hs_sat26D5wG.evaluate = function (hs_ds126D5kQ) {
                        var hs_sat26D5wI = new $hs.Func(1);
                        hs_sat26D5wI.evaluate = function (hs_h1zu26D5kN) {
                            var hs_sat26D5wK = new $hs.Data(2);
                            hs_sat26D5wK.data = [$hs.modules.GHCziIOziHandleziInternals.hs_handleFinalizzer];
                            return hs_dupHandleTo25uefn.hscall(hs_path26D5kM, hs_wild26D5kJ, $hs.modules.DataziMaybe.hs_Nothing, hs_h2zu26D5kF, hs_h1zu26D5kN, hs_sat26D5wK);
                        };
                        var hs_sat26D5wH = new $hs.Thunk();
                        hs_sat26D5wH.evaluateOnce = function () {
                            var hs_sat26D5wJ = new $hs.Thunk();
                            hs_sat26D5wJ.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hDuplicateTo\x00");
                            };
                            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzq.hscall(hs_sat26D5wJ, hs_wild26D5kJ, hs_m126D5ku);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5wH, hs_sat26D5wI);
                    };
                    var hs_sat26D5wF = new $hs.Thunk();
                    hs_sat26D5wF.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_hClosezuhelp.hscall(hs_h2zu26D5kF);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5wF, hs_sat26D5wG);
                };
                var hs_sat26D5wA = new $hs.Thunk();
                hs_sat26D5wA.evaluateOnce = function () {
                    var hs_sat26D5wE = new $hs.Data(1);
                    hs_sat26D5wE.data = [hs_rb126D5kB];
                    var hs_sat26D5wD = new $hs.Thunk();
                    hs_sat26D5wD.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hDuplicateTo\x00");
                    };
                    return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzuzq.hscall(hs_sat26D5wD, hs_wild126D5kA, hs_sat26D5wE);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5wA, hs_sat26D5wC);
            case 2:
                return hs_ioezudupHandlesNotCompatible25uefm.hscall(hs_wild26D5kJ);
            }
        case 2:
            var hs_path26D5ln = hs_wild26D5kJ.data[0];
            var hs_rb26D5l0 = hs_wild26D5kJ.data[1];
            var hs_rb126D5l3 = hs_wild26D5kJ.data[2];
            var hs_r126D5l1 = new $hs.Data(1);
            hs_r126D5l1.data = [hs_rb26D5l0];
            var hs_w126D5l4 = new $hs.Data(1);
            hs_w126D5l4.data = [hs_rb126D5l3];
            var hs_wild126D5lc = hs_h226D5kv;
            if (hs_h226D5kv.notEvaluated) {
                hs_wild126D5lc = hs_h226D5kv.hscall();
            }
            switch (hs_wild126D5lc.tag) {
            case 1:
                return hs_ioezudupHandlesNotCompatible25uefm.hscall(hs_wild26D5kJ);
            case 2:
                var hs_rb226D5lw = hs_wild126D5lc.data[1];
                var hs_rb326D5ld = hs_wild126D5lc.data[2];
                var hs_sat26D5wa = new $hs.Thunk();
                hs_sat26D5wa.evaluateOnce = function () {
                    var hs_sat26D5wm = new $hs.Func(1);
                    hs_sat26D5wm.evaluate = function (hs_r2zu26D5lA) {
                        var hs_sat26D5wq = new $hs.Func(1);
                        hs_sat26D5wq.evaluate = function (hs_ds126D5lJ) {
                            var hs_sat26D5ws = new $hs.Func(1);
                            hs_sat26D5ws.evaluate = function (hs_r1zu26D5lH) {
                                var hs_sat26D5wu = new $hs.Data(2);
                                hs_sat26D5wu.data = [hs_w126D5l4];
                                return hs_dupHandleTo25uefn.hscall(hs_path26D5ln, hs_wild26D5kJ, hs_sat26D5wu, hs_r2zu26D5lA, hs_r1zu26D5lH, $hs.modules.DataziMaybe.hs_Nothing);
                            };
                            var hs_sat26D5wr = new $hs.Thunk();
                            hs_sat26D5wr.evaluateOnce = function () {
                                var hs_sat26D5wt = new $hs.Thunk();
                                hs_sat26D5wt.evaluateOnce = function () {
                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hDuplicateTo\x00");
                                };
                                return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzq.hscall(hs_sat26D5wt, hs_wild26D5kJ, hs_r126D5l1);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5wr, hs_sat26D5ws);
                        };
                        var hs_sat26D5wp = new $hs.Thunk();
                        hs_sat26D5wp.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziHandleziInternals.hs_hClosezuhelp.hscall(hs_r2zu26D5lA);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5wp, hs_sat26D5wq);
                    };
                    var hs_sat26D5wl = new $hs.Thunk();
                    hs_sat26D5wl.evaluateOnce = function () {
                        var hs_sat26D5wo = new $hs.Data(1);
                        hs_sat26D5wo.data = [hs_rb226D5lw];
                        var hs_sat26D5wn = new $hs.Thunk();
                        hs_sat26D5wn.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hDuplicateTo\x00");
                        };
                        return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzuzq.hscall(hs_sat26D5wn, hs_wild126D5lc, hs_sat26D5wo);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5wl, hs_sat26D5wm);
                };
                var hs_sat26D5w8 = new $hs.Thunk();
                hs_sat26D5w8.evaluateOnce = function () {
                    var hs_sat26D5wc = new $hs.Func(1);
                    hs_sat26D5wc.evaluate = function (hs_w2zu26D5lh) {
                        var hs_sat26D5wg = new $hs.Func(1);
                        hs_sat26D5wg.evaluate = function (hs_ds126D5lr) {
                            var hs_sat26D5wi = new $hs.Func(1);
                            hs_sat26D5wi.evaluate = function (hs_w1zu26D5lo) {
                                var hs_sat26D5wk = new $hs.Data(2);
                                hs_sat26D5wk.data = [$hs.modules.GHCziIOziHandleziInternals.hs_handleFinalizzer];
                                return hs_dupHandleTo25uefn.hscall(hs_path26D5ln, hs_wild26D5kJ, $hs.modules.DataziMaybe.hs_Nothing, hs_w2zu26D5lh, hs_w1zu26D5lo, hs_sat26D5wk);
                            };
                            var hs_sat26D5wh = new $hs.Thunk();
                            hs_sat26D5wh.evaluateOnce = function () {
                                var hs_sat26D5wj = new $hs.Thunk();
                                hs_sat26D5wj.evaluateOnce = function () {
                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hDuplicateTo\x00");
                                };
                                return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzq.hscall(hs_sat26D5wj, hs_wild26D5kJ, hs_w126D5l4);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5wh, hs_sat26D5wi);
                        };
                        var hs_sat26D5wf = new $hs.Thunk();
                        hs_sat26D5wf.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziHandleziInternals.hs_hClosezuhelp.hscall(hs_w2zu26D5lh);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5wf, hs_sat26D5wg);
                    };
                    var hs_sat26D5wb = new $hs.Thunk();
                    hs_sat26D5wb.evaluateOnce = function () {
                        var hs_sat26D5we = new $hs.Data(1);
                        hs_sat26D5we.data = [hs_rb326D5ld];
                        var hs_sat26D5wd = new $hs.Thunk();
                        hs_sat26D5wd.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("hDuplicateTo\x00");
                        };
                        return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzuzq.hscall(hs_sat26D5wd, hs_wild126D5lc, hs_sat26D5we);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5wb, hs_sat26D5wc);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5w8, hs_sat26D5wa);
            }
        }
    };
    hs_showHandlezq25uefp.evaluate = function (hs_filepath26D5m0, hs_iszuduplex26D5m6, hs_h26D5lR) {
        var hs_sat26D5wM = new $hs.Func(1);
        hs_sat26D5wM.evaluate = function (hs_hdlzu26D5lW) {
            var hs_sat26D5wO = new $hs.Thunk();
            hs_sat26D5wO.evaluateOnce = function () {
                var hs_sat26D5wQ = new $hs.Thunk();
                hs_sat26D5wQ.evaluateOnce = function () {
                    var hs_wild26D5wT = $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_hdlzu26D5lW);
                    switch (hs_wild26D5wT.tag) {
                    case 1:
                        var hs_sat26D5wU = new $hs.Thunk();
                        hs_sat26D5wU.evaluateOnce = function () {
                            var hs_sat26D5wW = new $hs.Data(1);
                            hs_sat26D5wW.data = ["}"];
                            var hs_sat26D5wV = new $hs.Data(2);
                            hs_sat26D5wV.data = [hs_sat26D5wW, $hs.modules.GHCziTypes.hs_ZMZN];
                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D5wV);
                        };
                        var hs_sat26D5wS = new $hs.Thunk();
                        hs_sat26D5wS.evaluateOnce = function () {
                            return $hs.modules.GHCziShow.hs_shows.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowHandleType, $hs.modules.GHCziIOziHandleziTypes.hs_ClosedHandle);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D5wS, hs_sat26D5wU);
                    default:
                        var hs_sat26D5wY = new $hs.Thunk();
                        hs_sat26D5wY.evaluateOnce = function () {
                            var hs_sat26D5x1 = new $hs.Thunk();
                            hs_sat26D5x1.evaluateOnce = function () {
                                var hs_sat26D5x3 = new $hs.Thunk();
                                hs_sat26D5x3.evaluateOnce = function () {
                                    var hs_sat26D5x6 = new $hs.Thunk();
                                    hs_sat26D5x6.evaluateOnce = function () {
                                        var hs_sat26D5x9 = new $hs.Thunk();
                                        hs_sat26D5x9.evaluateOnce = function () {
                                            var hs_sat26D5xe = new $hs.Thunk();
                                            hs_sat26D5xe.evaluateOnce = function () {
                                                var hs_sat26D5xh = new $hs.Thunk();
                                                hs_sat26D5xh.evaluateOnce = function () {
                                                    var hs_sat26D5xk = new $hs.Thunk();
                                                    hs_sat26D5xk.evaluateOnce = function () {
                                                        var hs_sat26D5xC = new $hs.Data(1);
                                                        hs_sat26D5xC.data = ["}"];
                                                        var hs_sat26D5xB = new $hs.Data(2);
                                                        hs_sat26D5xB.data = [hs_sat26D5xC, $hs.modules.GHCziTypes.hs_ZMZN];
                                                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D5xB);
                                                    };
                                                    var hs_sat26D5xj = new $hs.Thunk();
                                                    hs_sat26D5xj.evaluateOnce = function () {
                                                        var hs_wild126D5xm = $hs.modules.GHCziIOziHandleziTypes.hs_haBufferMode.hscall(hs_hdlzu26D5lW);
                                                        switch (hs_wild126D5xm.tag) {
                                                        case 1:
                                                            var hs_sat26D5xA = new $hs.Thunk();
                                                            hs_sat26D5xA.evaluateOnce = function () {
                                                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("none\x00");
                                                            };
                                                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D5xA);
                                                        case 2:
                                                            var hs_sat26D5xl = new $hs.Thunk();
                                                            hs_sat26D5xl.evaluateOnce = function () {
                                                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("line\x00");
                                                            };
                                                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D5xl);
                                                        case 3:
                                                            var hs_ds26D5mj = hs_wild126D5xm.data[0];
                                                            var hs_wild226D5xo = hs_ds26D5mj;
                                                            if (hs_ds26D5mj.notEvaluated) {
                                                                hs_wild226D5xo = hs_ds26D5mj.hscall();
                                                            }
                                                            switch (hs_wild226D5xo.tag) {
                                                            case 1:
                                                                var hs_sat26D5xt = new $hs.Thunk();
                                                                hs_sat26D5xt.evaluateOnce = function () {
                                                                    var hs_sat26D5xv = new $hs.Thunk();
                                                                    hs_sat26D5xv.evaluateOnce = function () {
                                                                        var hs_sat26D5xw = new $hs.Thunk();
                                                                        hs_sat26D5xw.evaluateOnce = function () {
                                                                            var hs_sat26D5xx = new $hs.Thunk();
                                                                            hs_sat26D5xx.evaluateOnce = function () {
                                                                                var hs_sat26D5xy = new $hs.Thunk();
                                                                                hs_sat26D5xy.evaluateOnce = function () {
                                                                                    var hs_sat26D5xz = new $hs.Thunk();
                                                                                    hs_sat26D5xz.evaluateOnce = function () {
                                                                                        return $hs.modules.GHCziIOziHandleziTypes.hs_haCharBuffer.hscall(hs_hdlzu26D5lW);
                                                                                    };
                                                                                    return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26D5xz);
                                                                                };
                                                                                return $hs.modules.GHCziIO.hs_unsafePerformIO.hscall(hs_sat26D5xy);
                                                                            };
                                                                            return $hs.modules.GHCziIOziBuffer.hs_bufSizze.hscall(hs_sat26D5xx);
                                                                        };
                                                                        return $hs.modules.GHCziShow.hs_shows.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26D5xw);
                                                                    };
                                                                    return $hs.modules.GHCziShow.hs_showParen.hscall($hs.modules.GHCziTypes.hs_True, hs_sat26D5xv);
                                                                };
                                                                var hs_sat26D5xs = new $hs.Thunk();
                                                                hs_sat26D5xs.evaluateOnce = function () {
                                                                    var hs_sat26D5xu = new $hs.Thunk();
                                                                    hs_sat26D5xu.evaluateOnce = function () {
                                                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("block \x00");
                                                                    };
                                                                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D5xu);
                                                                };
                                                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D5xs, hs_sat26D5xt);
                                                            case 2:
                                                                var hs_n26D5mw = hs_wild226D5xo.data[0];
                                                                var hs_sat26D5xp = new $hs.Thunk();
                                                                hs_sat26D5xp.evaluateOnce = function () {
                                                                    var hs_sat26D5xr = new $hs.Thunk();
                                                                    hs_sat26D5xr.evaluateOnce = function () {
                                                                        return $hs.modules.GHCziShow.hs_shows.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_n26D5mw);
                                                                    };
                                                                    return $hs.modules.GHCziShow.hs_showParen.hscall($hs.modules.GHCziTypes.hs_True, hs_sat26D5xr);
                                                                };
                                                                var hs_sat26D5xn = new $hs.Thunk();
                                                                hs_sat26D5xn.evaluateOnce = function () {
                                                                    var hs_sat26D5xq = new $hs.Thunk();
                                                                    hs_sat26D5xq.evaluateOnce = function () {
                                                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("block \x00");
                                                                    };
                                                                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D5xq);
                                                                };
                                                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D5xn, hs_sat26D5xp);
                                                            }
                                                        }
                                                    };
                                                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D5xj, hs_sat26D5xk);
                                                };
                                                var hs_sat26D5xg = new $hs.Thunk();
                                                hs_sat26D5xg.evaluateOnce = function () {
                                                    var hs_sat26D5xi = new $hs.Thunk();
                                                    hs_sat26D5xi.evaluateOnce = function () {
                                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("buffering=\x00");
                                                    };
                                                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D5xi);
                                                };
                                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D5xg, hs_sat26D5xh);
                                            };
                                            var hs_sat26D5xd = new $hs.Thunk();
                                            hs_sat26D5xd.evaluateOnce = function () {
                                                var hs_sat26D5xf = new $hs.Data(1);
                                                hs_sat26D5xf.data = [","];
                                                return $hs.modules.GHCziShow.hs_showChar.hscall(hs_sat26D5xf);
                                            };
                                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D5xd, hs_sat26D5xe);
                                        };
                                        var hs_sat26D5x8 = new $hs.Thunk();
                                        hs_sat26D5x8.evaluateOnce = function () {
                                            var hs_wild126D5xb = hs_iszuduplex26D5m6;
                                            if (hs_iszuduplex26D5m6.notEvaluated) {
                                                hs_wild126D5xb = hs_iszuduplex26D5m6.hscall();
                                            }
                                            switch (hs_wild126D5xb.tag) {
                                            case 1:
                                                var hs_sat26D5xc = new $hs.Thunk();
                                                hs_sat26D5xc.evaluateOnce = function () {
                                                    return $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_hdlzu26D5lW);
                                                };
                                                return $hs.modules.GHCziShow.hs_shows.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowHandleType, hs_sat26D5xc);
                                            case 2:
                                                var hs_sat26D5xa = new $hs.Thunk();
                                                hs_sat26D5xa.evaluateOnce = function () {
                                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("duplex (read-write)\x00");
                                                };
                                                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D5xa);
                                            }
                                        };
                                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D5x8, hs_sat26D5x9);
                                    };
                                    var hs_sat26D5x5 = new $hs.Thunk();
                                    hs_sat26D5x5.evaluateOnce = function () {
                                        var hs_sat26D5x7 = new $hs.Thunk();
                                        hs_sat26D5x7.evaluateOnce = function () {
                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("type=\x00");
                                        };
                                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D5x7);
                                    };
                                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D5x5, hs_sat26D5x6);
                                };
                                var hs_sat26D5x2 = new $hs.Thunk();
                                hs_sat26D5x2.evaluateOnce = function () {
                                    var hs_sat26D5x4 = new $hs.Data(1);
                                    hs_sat26D5x4.data = [","];
                                    return $hs.modules.GHCziShow.hs_showChar.hscall(hs_sat26D5x4);
                                };
                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D5x2, hs_sat26D5x3);
                            };
                            var hs_sat26D5x0 = new $hs.Thunk();
                            hs_sat26D5x0.evaluateOnce = function () {
                                return $hs.modules.GHCziShow.hs_showString.hscall(hs_filepath26D5m0);
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D5x0, hs_sat26D5x1);
                        };
                        var hs_sat26D5wX = new $hs.Thunk();
                        hs_sat26D5wX.evaluateOnce = function () {
                            var hs_sat26D5wZ = new $hs.Thunk();
                            hs_sat26D5wZ.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("loc=\x00");
                            };
                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D5wZ);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D5wX, hs_sat26D5wY);
                    }
                };
                var hs_sat26D5wP = new $hs.Thunk();
                hs_sat26D5wP.evaluateOnce = function () {
                    var hs_sat26D5wR = new $hs.Data(1);
                    hs_sat26D5wR.data = ["{"];
                    return $hs.modules.GHCziShow.hs_showChar.hscall(hs_sat26D5wR);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D5wP, hs_sat26D5wQ, $hs.modules.GHCziTypes.hs_ZMZN);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D5wO);
        };
        var hs_sat26D5wL = new $hs.Thunk();
        hs_sat26D5wL.evaluateOnce = function () {
            var hs_sat26D5wN = new $hs.Thunk();
            hs_sat26D5wN.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("showHandle\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26D5wN, hs_h26D5lR);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26D5wL, hs_sat26D5wM);
    };
    this.hs_hShow.evaluate = function (hs_h26D5mS) {
        var hs_wild26D5mX = hs_h26D5mS;
        if (hs_h26D5mS.notEvaluated) {
            hs_wild26D5mX = hs_h26D5mS.hscall();
        }
        switch (hs_wild26D5mX.tag) {
        case 1:
            var hs_path26D5mW = hs_wild26D5mX.data[0];
            return hs_showHandlezq25uefp.hscall(hs_path26D5mW, $hs.modules.GHCziTypes.hs_False, hs_wild26D5mX);
        case 2:
            var hs_path26D5n1 = hs_wild26D5mX.data[0];
            return hs_showHandlezq25uefp.hscall(hs_path26D5n1, $hs.modules.GHCziTypes.hs_True, hs_wild26D5mX);
        }
    };
    this.hs_HandlePosn.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
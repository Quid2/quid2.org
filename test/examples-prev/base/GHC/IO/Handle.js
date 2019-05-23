
$hs.modules.GHCziIOziHandle = new $hs.Module();
$hs.modules.GHCziIOziHandle.dependencies = ["GHC.Types", "GHC.Bool", "GHC.Unit", "GHC.Integer", "Control.Monad", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Show", "GHC.Err", "GHC.Exception", "Data.Typeable", "GHC.Classes", "GHC.IO", "GHC.MVar", "GHC.IO.Buffer", "GHC.IO.Device", "GHC.IO.BufferedIO", "GHC.IO.Exception", "GHC.IO.Encoding", "GHC.IO.Handle.Types", "GHC.IO.Handle.Internals", "GHC.IORef"];
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
    this.hs_hSetNewlineMode.evaluate = function (hs_handle26DsHd, hs_ds26DsH8) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26DsHd, hs_ds26DsH8);
    };
    this.hs_hSetBinaryMode.notEvaluated = true;
    this.hs_hSetBinaryMode.evaluate = function (hs_handle26DsId, hs_bin26DsIF) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26DsId, hs_bin26DsIF);
    };
    this.hs_hIsTerminalDevice.notEvaluated = true;
    this.hs_hIsTerminalDevice.evaluate = function (hs_handle26DsJp) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26DsJp);
    };
    this.hs_hIsSeekable.notEvaluated = true;
    this.hs_hIsSeekable.evaluate = function (hs_handle26DsJR) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26DsJR);
    };
    this.hs_hTell.notEvaluated = true;
    this.hs_hTell.evaluate = function (hs_handle26DsKj) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26DsKj);
    };
    this.hs_hSeek.notEvaluated = true;
    this.hs_hSeek.evaluate = function (hs_handle26DsLu, hs_mode26DsLU, hs_offset26DsLV) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26DsLu, hs_mode26DsLU, hs_offset26DsLV);
    };
    this.hs_hSetPosn.notEvaluated = true;
    this.hs_hSetPosn.evaluate = function (hs_ds26DsMM) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_ds26DsMM);
    };
    this.hs_hFlushAll.notEvaluated = true;
    this.hs_hFlushAll.evaluate = function (hs_handle26DsMU) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26DsMU);
    };
    this.hs_hGetEncoding.notEvaluated = true;
    this.hs_hGetEncoding.evaluate = function (hs_hdl26DsMX) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_hdl26DsMX);
    };
    this.hs_hSetEncoding.notEvaluated = true;
    this.hs_hSetEncoding.evaluate = function (hs_hdl26DsNn, hs_encoding26DsNO) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_hdl26DsNn, hs_encoding26DsNO);
    };
    this.hs_hSetBuffering.notEvaluated = true;
    this.hs_hSetBuffering.evaluate = function (hs_handle26DsOu, hs_mode26DsOU) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26DsOu, hs_mode26DsOU);
    };
    this.hs_hLookAhead.notEvaluated = true;
    this.hs_hLookAhead.evaluate = function (hs_handle26DsPG) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26DsPG);
    };
    this.hs_hIsEOF.notEvaluated = true;
    this.hs_hIsEOF.evaluate = function (hs_handle26DsPJ) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26DsPJ);
    };
    this.hs_hSetFileSizze.notEvaluated = true;
    this.hs_hSetFileSizze.evaluate = function (hs_handle26DsQE, hs_sizze26DsR4) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26DsQE, hs_sizze26DsR4);
    };
    this.hs_hFileSizze.notEvaluated = true;
    this.hs_hFileSizze.evaluate = function (hs_handle26DsRb) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26DsRb);
    };
    this.hs_hFlush.notEvaluated = true;
    this.hs_hFlush.evaluate = function (hs_handle26DsRV) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26DsRV);
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
    this.hs_hClose.evaluate = function (hs_h26DsSN) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_h26DsSN);
    };
    this.hs_hGetPosn.notEvaluated = true;
    this.hs_hGetPosn.evaluate = function (hs_handle26DsTf) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26DsTf);
    };
    this.hs_hIsOpen.notEvaluated = true;
    this.hs_hIsOpen.evaluate = function (hs_handle26DsTn) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26DsTn);
    };
    this.hs_hIsClosed.notEvaluated = true;
    this.hs_hIsClosed.evaluate = function (hs_handle26DsTv) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26DsTv);
    };
    this.hs_hIsReadable.notEvaluated = true;
    this.hs_hIsReadable.evaluate = function (hs_ds26DsTC) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_ds26DsTC);
    };
    this.hs_hIsWritable.notEvaluated = true;
    this.hs_hIsWritable.evaluate = function (hs_ds26DsTT) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_ds26DsTT);
    };
    this.hs_hGetBuffering.notEvaluated = true;
    this.hs_hGetBuffering.evaluate = function (hs_handle26DsUb) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26DsUb);
    };
    this.hs_hSetEcho.notEvaluated = true;
    this.hs_hSetEcho.evaluate = function (hs_handle26DsUk, hs_on26DsUO) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26DsUk, hs_on26DsUO);
    };
    this.hs_hGetEcho.notEvaluated = true;
    this.hs_hGetEcho.evaluate = function (hs_handle26DsUS) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_handle26DsUS);
    };
    this.hs_hDuplicate.notEvaluated = true;
    this.hs_hDuplicate.evaluate = function (hs_h26DsVp) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_h26DsVp);
    };
    this.hs_hDuplicateTo.notEvaluated = true;
    this.hs_hDuplicateTo.evaluate = function (hs_h126DsWu, hs_h226DsWB) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_h126DsWu, hs_h226DsWB);
    };
    this.hs_hShow.notEvaluated = true;
    this.hs_hShow.evaluate = function (hs_h26DsYV) {
        $hs.modules.GHCziIOziHandle.loadDependencies();
        return this.evaluate(hs_h26DsYV);
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
    var hs_ioezudupHandlesNotCompatible25uCJK = new $hs.Func(1);
    var hs_dupHandlezu25uCJG = new $hs.Func(8);
    var hs_dupHandleTo25uCJM = new $hs.Func(6);
    var hs_dupHandle25uCJE = new $hs.Func(5);
    var hs_hClosezq25uCIQ = new $hs.Func(2);
    var hs_zdczeze25v4lH = new $hs.Func(2);
    var hs_zdczsze25v4lZ = new $hs.Thunk();
    var hs_zdcshowsPrec25v4m1 = new $hs.Func(2);
    var hs_zdcshowList25v4mh = new $hs.Thunk();
    var hs_zdcshow25v4mj = new $hs.Thunk();
    var hs_hClosezumaybethrow25uCIM = new $hs.Func(2);
    var hs_showHandlezq25uCJQ = new $hs.Func(3);
    hs_ioezudupHandlesNotCompatible25uCJK.evaluate = function (hs_h26DsE5) {
        var hs_sat26DsZ5 = new $hs.Thunk();
        hs_sat26DsZ5.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("handles are incompatible\x00");
        };
        var hs_sat26DsZ6 = new $hs.Thunk();
        hs_sat26DsZ6.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hDuplicateTo\x00");
        };
        var hs_sat26DsZ7 = new $hs.Data(2);
        hs_sat26DsZ7.data = [hs_h26DsE5];
        var hs_sat26DsZ8 = new $hs.Data(1);
        hs_sat26DsZ8.data = [hs_sat26DsZ7, $hs.modules.GHCziIOziException.hs_IllegalOperation, hs_sat26DsZ6, hs_sat26DsZ5, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
        return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26DsZ8);
    };
    hs_dupHandlezu25uCJG.evaluate = function (hs_zddIODevice26DsEA, hs_zddBufferedIO26DsEB, hs_zddTypeable26DsEC, hs_newzudev26DsED, hs_filepath26DsEE, hs_otherzuside26DsEN, hs_hzu26DsEi, hs_mbzufinalizzer26DsEM) {
        var hs_wild26DsZa = hs_hzu26DsEi;
        if (hs_hzu26DsEi.notEvaluated) {
            hs_wild26DsZa = hs_hzu26DsEi.hscall();
        }
        var hs_ds126DsEF = hs_wild26DsZa.data[4];
        var hs_ds326DsEG = hs_wild26DsZa.data[10];
        var hs_ds626DsEJ = hs_wild26DsZa.data[13];
        var hs_ds726DsEK = hs_wild26DsZa.data[14];
        var hs_sat26DsZn = new $hs.Data(1);
        hs_sat26DsZn.data = [hs_ds626DsEJ, hs_ds726DsEK];
        var hs_sat26DsZo = new $hs.Thunk();
        hs_sat26DsZo.evaluateOnce = function () {
            var hs_wild126DsZm = $hs.modules.DataziMaybe.hs_isJust.hscall(hs_ds326DsEG);
            switch (hs_wild126DsZm.tag) {
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
        return $hs.modules.GHCziIOziHandleziInternals.hs_mkHandle.hscall(hs_zddIODevice26DsEA, hs_zddBufferedIO26DsEB, hs_zddTypeable26DsEC, hs_newzudev26DsED, hs_filepath26DsEE, hs_ds126DsEF, $hs.modules.GHCziBool.hs_True, hs_sat26DsZo, hs_sat26DsZn, hs_mbzufinalizzer26DsEM, hs_otherzuside26DsEN);
    };
    hs_dupHandleTo25uCJM.evaluate = function (hs_filepath26DsFI, hs_h26DsFA, hs_otherzuside26DsFJ, hs_htozu26DsEU, hs_hzu26DsFc, hs_mbzufinalizzer26DsFK) {
        var hs_wild26DsZr = hs_htozu26DsEU;
        if (hs_htozu26DsEU.notEvaluated) {
            hs_wild26DsZr = hs_htozu26DsEU.hscall();
        }
        var hs_zddTypeable26DsFw = hs_wild26DsZr.data[2];
        var hs_ds26DsFy = hs_wild26DsZr.data[3];
        var hs_wild126DsFu = hs_hzu26DsFc;
        if (hs_hzu26DsFc.notEvaluated) {
            hs_wild126DsFu = hs_hzu26DsFc.hscall();
        }
        var hs_zddIODevice126DsFC = hs_wild126DsFu.data[0];
        var hs_zddBufferedIO126DsFH = hs_wild126DsFu.data[1];
        var hs_zddTypeable126DsFx = hs_wild126DsFu.data[2];
        var hs_ds926DsFD = hs_wild126DsFu.data[3];
        var hs_sat26Dt03 = new $hs.Thunk();
        hs_sat26Dt03.evaluateOnce = function () {
            var hs_wild226DsZp = $hs.modules.DataziTypeable.hs_cast.hscall(hs_zddTypeable26DsFw, hs_zddTypeable126DsFx, hs_ds26DsFy);
            switch (hs_wild226DsZp.tag) {
            case 1:
                return hs_ioezudupHandlesNotCompatible25uCJK.hscall(hs_h26DsFA);
            case 2:
                var hs_devzq26DsFE = hs_wild226DsZp.data[0];
                var hs_sat26Dt01 = new $hs.Func(1);
                hs_sat26Dt01.evaluate = function (hs_ds1826DsZR) {
                    var hs_sat26DsZZ = new $hs.Func(1);
                    hs_sat26DsZZ.evaluate = function (hs_ds1926DsFN) {
                        var hs_wild326DsZT = hs_ds1926DsFN;
                        if (hs_ds1926DsFN.notEvaluated) {
                            hs_wild326DsZT = hs_ds1926DsFN.hscall();
                        }
                        switch (hs_wild326DsZT.tag) {
                        case 1:
                            var hs_rb826DsFR = hs_wild326DsZT.data[1];
                            var hs_sat26DsZU = new $hs.Data(1);
                            hs_sat26DsZU.data = [hs_rb826DsFR];
                            return $hs.modules.GHCziMVar.hs_takeMVar.hscall(hs_sat26DsZU);
                        case 2:
                            var hs_sat26DsZY = new $hs.Thunk();
                            hs_sat26DsZY.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/GHC/IO/Handle.hs:694:7-20\x00");
                            };
                            return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsZY);
                        }
                    };
                    var hs_sat26Dt00 = new $hs.Thunk();
                    hs_sat26Dt00.evaluateOnce = function () {
                        return hs_dupHandlezu25uCJG.hscall(hs_zddIODevice126DsFC, hs_zddBufferedIO126DsFH, hs_zddTypeable126DsFx, hs_devzq26DsFE, hs_filepath26DsFI, hs_otherzuside26DsFJ, hs_wild126DsFu, hs_mbzufinalizzer26DsFK);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt00, hs_sat26DsZZ);
                };
                var hs_sat26Dt02 = new $hs.Thunk();
                hs_sat26Dt02.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziDevice.hs_dup2.hscall(hs_zddIODevice126DsFC, hs_ds926DsFD, hs_devzq26DsFE);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt02, hs_sat26Dt01);
            }
        };
        var hs_sat26Dt04 = new $hs.Thunk();
        hs_sat26Dt04.evaluateOnce = function () {
            return $hs.modules.GHCziIOziHandleziInternals.hs_flushBuffer.hscall(hs_wild126DsFu);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt04, hs_sat26Dt03);
    };
    hs_dupHandle25uCJE.evaluate = function (hs_filepath26DsGy, hs_h26DsGD, hs_otherzuside26DsGp, hs_hzu26DsG5, hs_mbzufinalizzer26DsGz) {
        var hs_wild26DsGn = hs_hzu26DsG5;
        if (hs_hzu26DsG5.notEvaluated) {
            hs_wild26DsGn = hs_hzu26DsG5.hscall();
        }
        var hs_zddIODevice26DsGr = hs_wild26DsGn.data[0];
        var hs_zddBufferedIO26DsGv = hs_wild26DsGn.data[1];
        var hs_zddTypeable26DsGw = hs_wild26DsGn.data[2];
        var hs_ds26DsGs = hs_wild26DsGn.data[3];
        var hs_sat26Dt0z = new $hs.Thunk();
        hs_sat26Dt0z.evaluateOnce = function () {
            var hs_wild126DsH3 = hs_otherzuside26DsGp;
            if (hs_otherzuside26DsGp.notEvaluated) {
                hs_wild126DsH3 = hs_otherzuside26DsGp.hscall();
            }
            switch (hs_wild126DsH3.tag) {
            case 1:
                var hs_sat26Dt0h = new $hs.Func(1);
                hs_sat26Dt0h.evaluate = function (hs_newzudev26DsGx) {
                    return hs_dupHandlezu25uCJG.hscall(hs_zddIODevice26DsGr, hs_zddBufferedIO26DsGv, hs_zddTypeable26DsGw, hs_newzudev26DsGx, hs_filepath26DsGy, $hs.modules.DataziMaybe.hs_Nothing, hs_wild26DsGn, hs_mbzufinalizzer26DsGz);
                };
                var hs_sat26Dt0i = new $hs.Thunk();
                hs_sat26Dt0i.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziDevice.hs_dup.hscall(hs_zddIODevice26DsGr, hs_ds26DsGs);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt0i, hs_sat26Dt0h);
            case 2:
                var hs_r26DsGE = hs_wild126DsH3.data[0];
                var hs_sat26Dt0w = new $hs.Func(1);
                hs_sat26Dt0w.evaluate = function (hs_ds926DsGH) {
                    var hs_wild226Dt0j = hs_ds926DsGH;
                    if (hs_ds926DsGH.notEvaluated) {
                        hs_wild226Dt0j = hs_ds926DsGH.hscall();
                    }
                    var hs_zddIODevice126DsGZ = hs_wild226Dt0j.data[0];
                    var hs_zddBufferedIO126DsH0 = hs_wild226Dt0j.data[1];
                    var hs_zddTypeable126DsH1 = hs_wild226Dt0j.data[2];
                    var hs_ds1026DsH2 = hs_wild226Dt0j.data[3];
                    return hs_dupHandlezu25uCJG.hscall(hs_zddIODevice126DsGZ, hs_zddBufferedIO126DsH0, hs_zddTypeable126DsH1, hs_ds1026DsH2, hs_filepath26DsGy, hs_wild126DsH3, hs_wild26DsGn, hs_mbzufinalizzer26DsGz);
                };
                var hs_sat26Dt0y = new $hs.Thunk();
                hs_sat26Dt0y.evaluateOnce = function () {
                    var hs_sat26Dt0x = new $hs.Thunk();
                    hs_sat26Dt0x.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("dupHandle\x00");
                    };
                    return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzq.hscall(hs_sat26Dt0x, hs_h26DsGD, hs_r26DsGE);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt0y, hs_sat26Dt0w);
            }
        };
        var hs_sat26Dt0A = new $hs.Thunk();
        hs_sat26Dt0A.evaluateOnce = function () {
            return $hs.modules.GHCziIOziHandleziInternals.hs_flushBuffer.hscall(hs_wild26DsGn);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt0A, hs_sat26Dt0z);
    };
    this.hs_hSetNewlineMode.evaluate = function (hs_handle26DsHd, hs_ds26DsH8) {
        var hs_wild26Dt0D = hs_ds26DsH8;
        if (hs_ds26DsH8.notEvaluated) {
            hs_wild26Dt0D = hs_ds26DsH8.hscall();
        }
        var hs_ds126DsI4 = hs_wild26Dt0D.data[0];
        var hs_ds226DsI5 = hs_wild26Dt0D.data[1];
        var hs_sat26Dt0Y = new $hs.Func(1);
        hs_sat26Dt0Y.evaluate = function (hs_hzu26DsHg) {
            var hs_wild126DsHy = hs_hzu26DsHg;
            if (hs_hzu26DsHg.notEvaluated) {
                hs_wild126DsHy = hs_hzu26DsHg.hscall();
            }
            var hs_sat26Dt0W = new $hs.Thunk();
            hs_sat26Dt0W.evaluateOnce = function () {
                var hs_sat26Dt0V = new $hs.Thunk();
                hs_sat26Dt0V.evaluateOnce = function () {
                    var hs_wild226Dt0B = hs_wild126DsHy;
                    if (hs_wild126DsHy.notEvaluated) {
                        hs_wild226Dt0B = hs_wild126DsHy.hscall();
                    }
                    var hs_ds1226DsHR = hs_wild226Dt0B.data[0];
                    var hs_ds1326DsHS = hs_wild226Dt0B.data[1];
                    var hs_ds1426DsHT = hs_wild226Dt0B.data[2];
                    var hs_ds1526DsHU = hs_wild226Dt0B.data[3];
                    var hs_ds1626DsHV = hs_wild226Dt0B.data[4];
                    var hs_rb426DsHW = hs_wild226Dt0B.data[5];
                    var hs_ds1726DsHX = hs_wild226Dt0B.data[6];
                    var hs_rb526DsHY = hs_wild226Dt0B.data[7];
                    var hs_rb626DsHZ = hs_wild226Dt0B.data[8];
                    var hs_rb726DsI0 = hs_wild226Dt0B.data[9];
                    var hs_ds1826DsI1 = hs_wild226Dt0B.data[10];
                    var hs_ds1926DsI2 = hs_wild226Dt0B.data[11];
                    var hs_ds2026DsI3 = hs_wild226Dt0B.data[12];
                    var hs_ds2326DsI6 = hs_wild226Dt0B.data[15];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_ds1226DsHR, hs_ds1326DsHS, hs_ds1426DsHT, hs_ds1526DsHU, hs_ds1626DsHV, hs_rb426DsHW, hs_ds1726DsHX, hs_rb526DsHY, hs_rb626DsHZ, hs_rb726DsI0, hs_ds1826DsI1, hs_ds1926DsI2, hs_ds2026DsI3, hs_ds126DsI4, hs_ds226DsI5, hs_ds2326DsI6];
                    return $res;
                };
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt0V);
            };
            var hs_sat26Dt0X = new $hs.Thunk();
            hs_sat26Dt0X.evaluateOnce = function () {
                return $hs.modules.GHCziIOziHandleziInternals.hs_flushBuffer.hscall(hs_wild126DsHy);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt0X, hs_sat26Dt0W);
        };
        var hs_sat26Dt10 = new $hs.Thunk();
        hs_sat26Dt10.evaluateOnce = function () {
            var hs_sat26Dt0Z = new $hs.Thunk();
            hs_sat26Dt0Z.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hSetNewlineMode\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withAllHandleszuzu.hscall(hs_sat26Dt0Z, hs_handle26DsHd);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt10, hs_sat26Dt0Y);
    };
    this.hs_hSetBinaryMode.evaluate = function (hs_handle26DsId, hs_bin26DsIF) {
        var hs_sat26Dt1r = new $hs.Func(1);
        hs_sat26Dt1r.evaluate = function (hs_hzu26DsIg) {
            var hs_wild26DsIB = hs_hzu26DsIg;
            if (hs_hzu26DsIg.notEvaluated) {
                hs_wild26DsIB = hs_hzu26DsIg.hscall();
            }
            var hs_zddIODevice26DsJ2 = hs_wild26DsIB.data[0];
            var hs_zddBufferedIO26DsJ3 = hs_wild26DsIB.data[1];
            var hs_zddTypeable26DsJ4 = hs_wild26DsIB.data[2];
            var hs_ds26DsJ5 = hs_wild26DsIB.data[3];
            var hs_ds126DsII = hs_wild26DsIB.data[4];
            var hs_rb26DsIz = hs_wild26DsIB.data[5];
            var hs_ds226DsJ7 = hs_wild26DsIB.data[6];
            var hs_rb226DsJ9 = hs_wild26DsIB.data[8];
            var hs_rb326DsJa = hs_wild26DsIB.data[9];
            var hs_ds826DsJf = hs_wild26DsIB.data[15];
            var hs_a26DsIA = new $hs.Data(1);
            hs_a26DsIA.data = [hs_rb26DsIz];
            var hs_sat26Dt1p = new $hs.Thunk();
            hs_sat26Dt1p.evaluateOnce = function () {
                var hs_sat26Dt1n = new $hs.Thunk();
                hs_sat26Dt1n.evaluateOnce = function () {
                    var hs_mbzute26DsIH = new $hs.Thunk();
                    hs_mbzute26DsIH.evaluateOnce = function () {
                        var hs_wild126Dt17 = hs_bin26DsIF;
                        if (hs_bin26DsIF.notEvaluated) {
                            hs_wild126Dt17 = hs_bin26DsIF.hscall();
                        }
                        switch (hs_wild126Dt17.tag) {
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
                    var hs_sat26Dt1l = new $hs.Func(2);
                    hs_sat26Dt1l.evaluate = function (hs_mbzuencoder26DsJb, hs_mbzudecoder26DsJc) {
                        var hs_nl26DsIO = new $hs.Thunk();
                        hs_nl26DsIO.evaluateOnce = function () {
                            var hs_wild126Dt18 = hs_bin26DsIF;
                            if (hs_bin26DsIF.notEvaluated) {
                                hs_wild126Dt18 = hs_bin26DsIF.hscall();
                            }
                            switch (hs_wild126Dt18.tag) {
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
                        var hs_sat26Dt1j = new $hs.Func(1);
                        hs_sat26Dt1j.evaluate = function (hs_bbuf26DsIT) {
                            var hs_sat26Dt1f = new $hs.Func(1);
                            hs_sat26Dt1f.evaluate = function (hs_ref26DsIZ) {
                                var hs_sat26Dt1d = new $hs.Thunk();
                                hs_sat26Dt1d.evaluateOnce = function () {
                                    var hs_tpl26Dt1a = hs_a26DsIA;
                                    if (hs_a26DsIA.notEvaluated) {
                                        hs_tpl26Dt1a = hs_a26DsIA.hscall();
                                    }
                                    var hs_tpl126DsJ6 = hs_tpl26Dt1a.data[0];
                                    var hs_tpl226Dt19 = hs_ref26DsIZ;
                                    if (hs_ref26DsIZ.notEvaluated) {
                                        hs_tpl226Dt19 = hs_ref26DsIZ.hscall();
                                    }
                                    var hs_tpl326DsJ8 = hs_tpl226Dt19.data[0];
                                    var hs_sat26Dt1b = new $hs.Thunk();
                                    hs_sat26Dt1b.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziHandleziTypes.hs_outputNL.hscall(hs_nl26DsIO);
                                    };
                                    var hs_sat26Dt1c = new $hs.Thunk();
                                    hs_sat26Dt1c.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziHandleziTypes.hs_inputNL.hscall(hs_nl26DsIO);
                                    };
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_zddIODevice26DsJ2, hs_zddBufferedIO26DsJ3, hs_zddTypeable26DsJ4, hs_ds26DsJ5, hs_ds126DsII, hs_tpl126DsJ6, hs_ds226DsJ7, hs_tpl326DsJ8, hs_rb226DsJ9, hs_rb326DsJa, hs_mbzuencoder26DsJb, hs_mbzudecoder26DsJc, hs_mbzute26DsIH, hs_sat26Dt1c, hs_sat26Dt1b, hs_ds826DsJf];
                                    return $res;
                                };
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt1d);
                            };
                            var hs_sat26Dt1i = new $hs.Thunk();
                            hs_sat26Dt1i.evaluateOnce = function () {
                                var hs_sat26Dt1g = new $hs.Thunk();
                                hs_sat26Dt1g.evaluateOnce = function () {
                                    var hs_sat26Dt1e = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("codec_state\x00");
                                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dt1e);
                                };
                                var hs_sat26Dt1h = new $hs.Data(1);
                                hs_sat26Dt1h.data = [hs_sat26Dt1g, hs_bbuf26DsIT];
                                return $hs.modules.GHCziIORef.hs_newIORef.hscall(hs_sat26Dt1h);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt1i, hs_sat26Dt1f);
                        };
                        var hs_sat26Dt1k = new $hs.Thunk();
                        hs_sat26Dt1k.evaluateOnce = function () {
                            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26DsIA);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt1k, hs_sat26Dt1j);
                    };
                    var hs_sat26Dt1m = new $hs.Thunk();
                    hs_sat26Dt1m.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_openTextEncoding.hscall(hs_mbzute26DsIH, hs_ds126DsII);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt1m, hs_sat26Dt1l);
                };
                var hs_sat26Dt1o = new $hs.Thunk();
                hs_sat26Dt1o.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_closeTextCodecs.hscall(hs_wild26DsIB);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt1o, hs_sat26Dt1n);
            };
            var hs_sat26Dt1q = new $hs.Thunk();
            hs_sat26Dt1q.evaluateOnce = function () {
                return $hs.modules.GHCziIOziHandleziInternals.hs_flushCharBuffer.hscall(hs_wild26DsIB);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt1q, hs_sat26Dt1p);
        };
        var hs_sat26Dt1t = new $hs.Thunk();
        hs_sat26Dt1t.evaluateOnce = function () {
            var hs_sat26Dt1s = new $hs.Thunk();
            hs_sat26Dt1s.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hSetBinaryMode\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withAllHandleszuzu.hscall(hs_sat26Dt1s, hs_handle26DsId);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt1t, hs_sat26Dt1r);
    };
    this.hs_hIsTerminalDevice.evaluate = function (hs_handle26DsJp) {
        var hs_sat26Dt1J = new $hs.Func(1);
        hs_sat26Dt1J.evaluate = function (hs_ds26DsJs) {
            var hs_wild26Dt1v = hs_ds26DsJs;
            if (hs_ds26DsJs.notEvaluated) {
                hs_wild26Dt1v = hs_ds26DsJs.hscall();
            }
            var hs_zddIODevice26DsJM = hs_wild26Dt1v.data[0];
            var hs_ds126DsJN = hs_wild26Dt1v.data[3];
            var hs_ds226DsJK = hs_wild26Dt1v.data[4];
            var hs_wild126Dt1u = hs_ds226DsJK;
            if (hs_ds226DsJK.notEvaluated) {
                hs_wild126Dt1u = hs_ds226DsJK.hscall();
            }
            switch (hs_wild126Dt1u.tag) {
            case 1:
                if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
                } else {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
                }
            default:
                return $hs.modules.GHCziIOziDevice.hs_isTerminal.hscall(hs_zddIODevice26DsJM, hs_ds126DsJN);
            }
        };
        var hs_sat26Dt1L = new $hs.Thunk();
        hs_sat26Dt1L.evaluateOnce = function () {
            var hs_sat26Dt1K = new $hs.Thunk();
            hs_sat26Dt1K.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hIsTerminalDevice\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26Dt1K, hs_handle26DsJp);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt1L, hs_sat26Dt1J);
    };
    this.hs_hIsSeekable.evaluate = function (hs_handle26DsJR) {
        var hs_sat26Dt21 = new $hs.Func(1);
        hs_sat26Dt21.evaluate = function (hs_handlezu26DsJU) {
            var hs_wild26Dt1N = hs_handlezu26DsJU;
            if (hs_handlezu26DsJU.notEvaluated) {
                hs_wild26Dt1N = hs_handlezu26DsJU.hscall();
            }
            var hs_zddIODevice26DsKe = hs_wild26Dt1N.data[0];
            var hs_ds26DsKf = hs_wild26Dt1N.data[3];
            var hs_ds126DsKc = hs_wild26Dt1N.data[4];
            var hs_wild126Dt1M = hs_ds126DsKc;
            if (hs_ds126DsKc.notEvaluated) {
                hs_wild126Dt1M = hs_ds126DsKc.hscall();
            }
            switch (hs_wild126Dt1M.tag) {
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
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziBool.hs_False);
            default:
                return $hs.modules.GHCziIOziDevice.hs_isSeekable.hscall(hs_zddIODevice26DsKe, hs_ds26DsKf);
            }
        };
        var hs_sat26Dt23 = new $hs.Thunk();
        hs_sat26Dt23.evaluateOnce = function () {
            var hs_sat26Dt22 = new $hs.Thunk();
            hs_sat26Dt22.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hIsSeekable\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26Dt22, hs_handle26DsJR);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt23, hs_sat26Dt21);
    };
    this.hs_hTell.evaluate = function (hs_handle26DsKj) {
        var hs_sat26Dt2I = new $hs.Func(1);
        hs_sat26Dt2I.evaluate = function (hs_handlezu26DsKm) {
            var hs_wild26DsKQ = hs_handlezu26DsKm;
            if (hs_handlezu26DsKm.notEvaluated) {
                hs_wild26DsKQ = hs_handlezu26DsKm.hscall();
            }
            var hs_zddIODevice26DsKM = hs_wild26DsKQ.data[0];
            var hs_ds26DsKN = hs_wild26DsKQ.data[3];
            var hs_rb26DsKH = hs_wild26DsKQ.data[5];
            var hs_rb226DsKK = hs_wild26DsKQ.data[8];
            var hs_zddShow26DsKF = new $hs.Thunk();
            hs_zddShow26DsKF.evaluateOnce = function () {
                return $hs.modules.GHCziShow.hs_zdfShowZLz2cUZR.hscall($hs.modules.GHCziNum.hs_zdfShowInteger, $hs.modules.GHCziNum.hs_zdfShowInteger);
            };
            var hs_a26DsKI = new $hs.Data(1);
            hs_a26DsKI.data = [hs_rb26DsKH];
            var hs_a126DsKL = new $hs.Data(1);
            hs_a126DsKL.data = [hs_rb226DsKK];
            var hs_sat26Dt2G = new $hs.Func(1);
            hs_sat26Dt2G.evaluate = function (hs_posn26DsKX) {
                var hs_sat26Dt2E = new $hs.Thunk();
                hs_sat26Dt2E.evaluateOnce = function () {
                    var hs_sat26Dt2C = new $hs.Func(1);
                    hs_sat26Dt2C.evaluate = function (hs_bbuf26DsKV) {
                        var hs_realzuposn26DsL2 = new $hs.Thunk();
                        hs_realzuposn26DsL2.evaluateOnce = function () {
                            var hs_wild126Dt2g = $hs.modules.GHCziIOziBuffer.hs_isWriteBuffer.hscall(hs_bbuf26DsKV);
                            switch (hs_wild126Dt2g.tag) {
                            case 1:
                                var hs_sat26Dt2i = new $hs.Thunk();
                                hs_sat26Dt2i.evaluateOnce = function () {
                                    var hs_sat26Dt2h = new $hs.Thunk();
                                    hs_sat26Dt2h.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziBuffer.hs_bufferElems.hscall(hs_bbuf26DsKV);
                                    };
                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26Dt2h);
                                };
                                return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_posn26DsKX, hs_sat26Dt2i);
                            case 2:
                                var hs_sat26Dt2k = new $hs.Thunk();
                                hs_sat26Dt2k.evaluateOnce = function () {
                                    var hs_sat26Dt2j = new $hs.Thunk();
                                    hs_sat26Dt2j.evaluateOnce = function () {
                                        return $hs.modules.GHCziIOziBuffer.hs_bufferElems.hscall(hs_bbuf26DsKV);
                                    };
                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26Dt2j);
                                };
                                return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_posn26DsKX, hs_sat26Dt2k);
                            }
                        };
                        var hs_sat26Dt2A = new $hs.Func(1);
                        hs_sat26Dt2A.evaluate = function (hs_cbuf26DsLb) {
                            var hs_sat26Dt2u = new $hs.Thunk();
                            hs_sat26Dt2u.evaluateOnce = function () {
                                var hs_sat26Dt2l = new $hs.Thunk();
                                hs_sat26Dt2l.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_realzuposn26DsL2);
                                };
                                var hs_sat26Dt2t = new $hs.Thunk();
                                hs_sat26Dt2t.evaluateOnce = function () {
                                    var hs_sat26Dt2s = new $hs.Thunk();
                                    hs_sat26Dt2s.evaluateOnce = function () {
                                        var hs_sat26Dt2q = new $hs.Thunk();
                                        hs_sat26Dt2q.evaluateOnce = function () {
                                            var hs_sat26Dt2o = new $hs.Thunk();
                                            hs_sat26Dt2o.evaluateOnce = function () {
                                                var hs_sat26Dt2m = new $hs.Thunk();
                                                hs_sat26Dt2m.evaluateOnce = function () {
                                                    return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_bbuf26DsKV);
                                                };
                                                var hs_sat26Dt2n = new $hs.Thunk();
                                                hs_sat26Dt2n.evaluateOnce = function () {
                                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("   bbuf: \x00");
                                                };
                                                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dt2n, hs_sat26Dt2m);
                                            };
                                            var hs_sat26Dt2p = new $hs.Thunk();
                                            hs_sat26Dt2p.evaluateOnce = function () {
                                                return $hs.modules.GHCziIOziBuffer.hs_summaryBuffer.hscall(hs_cbuf26DsLb);
                                            };
                                            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dt2p, hs_sat26Dt2o);
                                        };
                                        var hs_sat26Dt2r = new $hs.Thunk();
                                        hs_sat26Dt2r.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("   cbuf: \x00");
                                        };
                                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dt2r, hs_sat26Dt2q);
                                    };
                                    return $hs.modules.GHCziIOziHandleziInternals.hs_debugIO.hscall(hs_sat26Dt2s);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt2t, hs_sat26Dt2l);
                            };
                            var hs_sat26Dt2z = new $hs.Thunk();
                            hs_sat26Dt2z.evaluateOnce = function () {
                                var hs_sat26Dt2y = new $hs.Thunk();
                                hs_sat26Dt2y.evaluateOnce = function () {
                                    var hs_sat26Dt2w = new $hs.Thunk();
                                    hs_sat26Dt2w.evaluateOnce = function () {
                                        var hs_sat26Dt2v = new $hs.Data(1);
                                        hs_sat26Dt2v.data = [hs_posn26DsKX, hs_realzuposn26DsL2];
                                        return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow26DsKF, hs_sat26Dt2v);
                                    };
                                    var hs_sat26Dt2x = new $hs.Thunk();
                                    hs_sat26Dt2x.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("\nhGetPosn: (posn, real_posn) = \x00");
                                    };
                                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dt2x, hs_sat26Dt2w);
                                };
                                return $hs.modules.GHCziIOziHandleziInternals.hs_debugIO.hscall(hs_sat26Dt2y);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt2z, hs_sat26Dt2u);
                        };
                        var hs_sat26Dt2B = new $hs.Thunk();
                        hs_sat26Dt2B.evaluateOnce = function () {
                            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a126DsKL);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt2B, hs_sat26Dt2A);
                    };
                    var hs_sat26Dt2D = new $hs.Thunk();
                    hs_sat26Dt2D.evaluateOnce = function () {
                        return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26DsKI);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt2D, hs_sat26Dt2C);
                };
                var hs_sat26Dt2F = new $hs.Thunk();
                hs_sat26Dt2F.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_flushCharBuffer.hscall(hs_wild26DsKQ);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt2F, hs_sat26Dt2E);
            };
            var hs_sat26Dt2H = new $hs.Thunk();
            hs_sat26Dt2H.evaluateOnce = function () {
                return $hs.modules.GHCziIOziDevice.hs_tell.hscall(hs_zddIODevice26DsKM, hs_ds26DsKN);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt2H, hs_sat26Dt2G);
        };
        var hs_sat26Dt2K = new $hs.Thunk();
        hs_sat26Dt2K.evaluateOnce = function () {
            var hs_sat26Dt2J = new $hs.Thunk();
            hs_sat26Dt2J.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hGetPosn\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_wantSeekableHandle.hscall(hs_sat26Dt2J, hs_handle26DsKj);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt2K, hs_sat26Dt2I);
    };
    this.hs_hSeek.evaluate = function (hs_handle26DsLu, hs_mode26DsLU, hs_offset26DsLV) {
        var hs_sat26Dt3t = new $hs.Func(1);
        hs_sat26Dt3t.evaluate = function (hs_handlezu26DsLx) {
            var hs_wild26DsMi = hs_handlezu26DsLx;
            if (hs_handlezu26DsLx.notEvaluated) {
                hs_wild26DsMi = hs_handlezu26DsLx.hscall();
            }
            var hs_zddIODevice26DsMl = hs_wild26DsMi.data[0];
            var hs_ds26DsMm = hs_wild26DsMi.data[3];
            var hs_rb226DsLQ = hs_wild26DsMi.data[8];
            var hs_ds426DsM7 = hs_wild26DsMi.data[11];
            var hs_a26DsLR = new $hs.Data(1);
            hs_a26DsLR.data = [hs_rb226DsLQ];
            var hs_sat26Dt3m = new $hs.Thunk();
            hs_sat26Dt3m.evaluateOnce = function () {
                var hs_sat26Dt3k = new $hs.Func(1);
                hs_sat26Dt3k.evaluate = function (hs_buf26DsM2) {
                    var hs_wild126Dt2X = $hs.modules.GHCziIOziBuffer.hs_isWriteBuffer.hscall(hs_buf26DsM2);
                    switch (hs_wild126Dt2X.tag) {
                    case 1:
                        var hs_r26DsM5 = new $hs.Thunk();
                        hs_r26DsM5.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_bufL.hscall(hs_buf26DsM2);
                        };
                        var hs_sat26Dt36 = new $hs.Thunk();
                        hs_sat26Dt36.evaluateOnce = function () {
                            var hs_sat26Dt34 = new $hs.Thunk();
                            hs_sat26Dt34.evaluateOnce = function () {
                                var hs_sat26Dt31 = new $hs.Thunk();
                                hs_sat26Dt31.evaluateOnce = function () {
                                    var hs_sat26Dt30 = new $hs.Thunk();
                                    hs_sat26Dt30.evaluateOnce = function () {
                                        var hs_sat26Dt2Z = new $hs.Thunk();
                                        hs_sat26Dt2Z.evaluateOnce = function () {
                                            var hs_sat26Dt2Y = new $hs.Thunk();
                                            hs_sat26Dt2Y.evaluateOnce = function () {
                                                return $hs.modules.GHCziIOziBuffer.hs_bufR.hscall(hs_buf26DsM2);
                                            };
                                            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dt2Y, hs_r26DsM5);
                                        };
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26Dt2Z);
                                    };
                                    return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_offset26DsLV, hs_sat26Dt30);
                                };
                                var hs_sat26Dt33 = new $hs.Thunk();
                                hs_sat26Dt33.evaluateOnce = function () {
                                    var hs_sat26Dt32 = new $hs.Thunk();
                                    hs_sat26Dt32.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_offset26DsLV, hs_sat26Dt32);
                                };
                                return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dt33, hs_sat26Dt31);
                            };
                            var hs_sat26Dt35 = new $hs.Thunk();
                            hs_sat26Dt35.evaluateOnce = function () {
                                return $hs.modules.DataziMaybe.hs_isNothing.hscall(hs_ds426DsM7);
                            };
                            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dt35, hs_sat26Dt34);
                        };
                        var hs_sat26Dt38 = new $hs.Thunk();
                        hs_sat26Dt38.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziDevice.hs_zdfEqSeekMode, hs_mode26DsLU, $hs.modules.GHCziIOziDevice.hs_RelativeSeek);
                        };
                        var hs_wild226Dt37 = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dt38, hs_sat26Dt36);
                        switch (hs_wild226Dt37.tag) {
                        case 1:
                            var hs_sat26Dt3b = new $hs.Thunk();
                            hs_sat26Dt3b.evaluateOnce = function () {
                                var hs_sat26Dt39 = new $hs.Thunk();
                                hs_sat26Dt39.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziDevice.hs_seek.hscall(hs_zddIODevice26DsMl, hs_ds26DsMm, hs_mode26DsLU, hs_offset26DsLV);
                                };
                                var hs_sat26Dt3a = new $hs.Thunk();
                                hs_sat26Dt3a.evaluateOnce = function () {
                                    return $hs.modules.GHCziIOziHandleziInternals.hs_flushByteReadBuffer.hscall(hs_wild26DsMi);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt3a, hs_sat26Dt39);
                            };
                            var hs_sat26Dt3c = new $hs.Thunk();
                            hs_sat26Dt3c.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziHandleziInternals.hs_flushCharReadBuffer.hscall(hs_wild26DsMi);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt3c, hs_sat26Dt3b);
                        case 2:
                            var hs_sat26Dt3h = new $hs.Thunk();
                            hs_sat26Dt3h.evaluateOnce = function () {
                                var hs_wild326Dt3d = hs_buf26DsM2;
                                if (hs_buf26DsM2.notEvaluated) {
                                    hs_wild326Dt3d = hs_buf26DsM2.hscall();
                                }
                                var hs_rb426DsMz = hs_wild326Dt3d.data[0];
                                var hs_rb526DsMA = hs_wild326Dt3d.data[1];
                                var hs_ds926DsMB = hs_wild326Dt3d.data[2];
                                var hs_rb626DsMC = hs_wild326Dt3d.data[3];
                                var hs_rb826DsME = hs_wild326Dt3d.data[5];
                                var hs_sat26Dt3g = new $hs.Thunk();
                                hs_sat26Dt3g.evaluateOnce = function () {
                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, $hs.modules.GHCziNum.hs_zdfNumInt, hs_offset26DsLV);
                                };
                                var hs_tpl26Dt3f = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_r26DsM5, hs_sat26Dt3g);
                                var hs_tpl126DsMD = hs_tpl26Dt3f.data[0];
                                var $res = new $hs.Data(1);
                                $res.data = [hs_rb426DsMz, hs_rb526DsMA, hs_ds926DsMB, hs_rb626DsMC, hs_tpl126DsMD, hs_rb826DsME];
                                return $res;
                            };
                            return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26DsLR, hs_sat26Dt3h);
                        }
                    case 2:
                        var hs_sat26Dt3i = new $hs.Thunk();
                        hs_sat26Dt3i.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziDevice.hs_seek.hscall(hs_zddIODevice26DsMl, hs_ds26DsMm, hs_mode26DsLU, hs_offset26DsLV);
                        };
                        var hs_sat26Dt3j = new $hs.Thunk();
                        hs_sat26Dt3j.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziHandleziInternals.hs_flushWriteBuffer.hscall(hs_wild26DsMi);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt3j, hs_sat26Dt3i);
                    }
                };
                var hs_sat26Dt3l = new $hs.Thunk();
                hs_sat26Dt3l.evaluateOnce = function () {
                    return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26DsLR);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt3l, hs_sat26Dt3k);
            };
            var hs_sat26Dt3s = new $hs.Thunk();
            hs_sat26Dt3s.evaluateOnce = function () {
                var hs_sat26Dt3r = new $hs.Thunk();
                hs_sat26Dt3r.evaluateOnce = function () {
                    var hs_sat26Dt3p = new $hs.Thunk();
                    hs_sat26Dt3p.evaluateOnce = function () {
                        var hs_sat26Dt3n = new $hs.Data(1);
                        hs_sat26Dt3n.data = [hs_mode26DsLU, hs_offset26DsLV];
                        var hs_sat26Dt3o = $hs.modules.GHCziShow.hs_zdfShowZLz2cUZR.hscall($hs.modules.GHCziIOziDevice.hs_zdfShowSeekMode, $hs.modules.GHCziNum.hs_zdfShowInteger);
                        return $hs.modules.GHCziShow.hs_show.hscall(hs_sat26Dt3o, hs_sat26Dt3n);
                    };
                    var hs_sat26Dt3q = new $hs.Thunk();
                    hs_sat26Dt3q.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hSeek \x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dt3q, hs_sat26Dt3p);
                };
                return $hs.modules.GHCziIOziHandleziInternals.hs_debugIO.hscall(hs_sat26Dt3r);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt3s, hs_sat26Dt3m);
        };
        var hs_sat26Dt3v = new $hs.Thunk();
        hs_sat26Dt3v.evaluateOnce = function () {
            var hs_sat26Dt3u = new $hs.Thunk();
            hs_sat26Dt3u.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hSeek\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_wantSeekableHandle.hscall(hs_sat26Dt3u, hs_handle26DsLu);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt3v, hs_sat26Dt3t);
    };
    this.hs_hSetPosn.evaluate = function (hs_ds26DsMM) {
        var hs_wild26Dt3w = hs_ds26DsMM;
        if (hs_ds26DsMM.notEvaluated) {
            hs_wild26Dt3w = hs_ds26DsMM.hscall();
        }
        var hs_h26DsMQ = hs_wild26Dt3w.data[0];
        var hs_i26DsMR = hs_wild26Dt3w.data[1];
        return $hs.modules.GHCziIOziHandle.hs_hSeek.hscall(hs_h26DsMQ, $hs.modules.GHCziIOziDevice.hs_AbsoluteSeek, hs_i26DsMR);
    };
    this.hs_hFlushAll.evaluate = function (hs_handle26DsMU) {
        var hs_sat26Dt3x = new $hs.Thunk();
        hs_sat26Dt3x.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hFlushAll\x00");
        };
        return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26Dt3x, hs_handle26DsMU, $hs.modules.GHCziIOziHandleziInternals.hs_flushBuffer);
    };
    this.hs_hGetEncoding.evaluate = function (hs_hdl26DsMX) {
        var hs_sat26Dt3O = new $hs.Func(1);
        hs_sat26Dt3O.evaluate = function (hs_hzu26DsN0) {
            var hs_wild26Dt3z = hs_hzu26DsN0;
            if (hs_hzu26DsN0.notEvaluated) {
                hs_wild26Dt3z = hs_hzu26DsN0.hscall();
            }
            var hs_ds526DsNi = hs_wild26Dt3z.data[12];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ds526DsNi);
        };
        var hs_sat26Dt3Q = new $hs.Thunk();
        hs_sat26Dt3Q.evaluateOnce = function () {
            var hs_sat26Dt3P = new $hs.Thunk();
            hs_sat26Dt3P.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hGetEncoding\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26Dt3P, hs_hdl26DsMX);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt3Q, hs_sat26Dt3O);
    };
    this.hs_hSetEncoding.evaluate = function (hs_hdl26DsNn, hs_encoding26DsNO) {
        var hs_sat26Dt4d = new $hs.Func(1);
        hs_sat26Dt4d.evaluate = function (hs_hzu26DsNq) {
            var hs_wild26DsNL = hs_hzu26DsNq;
            if (hs_hzu26DsNq.notEvaluated) {
                hs_wild26DsNL = hs_hzu26DsNq.hscall();
            }
            var hs_zddIODevice26DsO5 = hs_wild26DsNL.data[0];
            var hs_zddBufferedIO26DsO6 = hs_wild26DsNL.data[1];
            var hs_zddTypeable26DsO7 = hs_wild26DsNL.data[2];
            var hs_ds26DsO8 = hs_wild26DsNL.data[3];
            var hs_ds126DsNQ = hs_wild26DsNL.data[4];
            var hs_rb26DsNJ = hs_wild26DsNL.data[5];
            var hs_ds226DsOa = hs_wild26DsNL.data[6];
            var hs_rb226DsOc = hs_wild26DsNL.data[8];
            var hs_rb326DsOd = hs_wild26DsNL.data[9];
            var hs_ds626DsOh = hs_wild26DsNL.data[13];
            var hs_ds726DsOi = hs_wild26DsNL.data[14];
            var hs_ds826DsOj = hs_wild26DsNL.data[15];
            var hs_a26DsNK = new $hs.Data(1);
            hs_a26DsNK.data = [hs_rb26DsNJ];
            var hs_sat26Dt4b = new $hs.Thunk();
            hs_sat26Dt4b.evaluateOnce = function () {
                var hs_sat26Dt49 = new $hs.Thunk();
                hs_sat26Dt49.evaluateOnce = function () {
                    var hs_sat26Dt46 = new $hs.Func(2);
                    hs_sat26Dt46.evaluate = function (hs_mbzuencoder26DsOe, hs_mbzudecoder26DsOf) {
                        var hs_sat26Dt44 = new $hs.Func(1);
                        hs_sat26Dt44.evaluate = function (hs_bbuf26Dt3V) {
                            var hs_sat26Dt41 = new $hs.Func(1);
                            hs_sat26Dt41.evaluate = function (hs_ref26DsO2) {
                                var hs_sat26Dt3Z = new $hs.Thunk();
                                hs_sat26Dt3Z.evaluateOnce = function () {
                                    var hs_tpl26Dt3X = hs_a26DsNK;
                                    if (hs_a26DsNK.notEvaluated) {
                                        hs_tpl26Dt3X = hs_a26DsNK.hscall();
                                    }
                                    var hs_tpl126DsO9 = hs_tpl26Dt3X.data[0];
                                    var hs_tpl226Dt3W = hs_ref26DsO2;
                                    if (hs_ref26DsO2.notEvaluated) {
                                        hs_tpl226Dt3W = hs_ref26DsO2.hscall();
                                    }
                                    var hs_tpl326DsOb = hs_tpl226Dt3W.data[0];
                                    var hs_sat26Dt3Y = new $hs.Data(2);
                                    hs_sat26Dt3Y.data = [hs_encoding26DsNO];
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_zddIODevice26DsO5, hs_zddBufferedIO26DsO6, hs_zddTypeable26DsO7, hs_ds26DsO8, hs_ds126DsNQ, hs_tpl126DsO9, hs_ds226DsOa, hs_tpl326DsOb, hs_rb226DsOc, hs_rb326DsOd, hs_mbzuencoder26DsOe, hs_mbzudecoder26DsOf, hs_sat26Dt3Y, hs_ds626DsOh, hs_ds726DsOi, hs_ds826DsOj];
                                    return $res;
                                };
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt3Z);
                            };
                            var hs_sat26Dt43 = new $hs.Thunk();
                            hs_sat26Dt43.evaluateOnce = function () {
                                var hs_sat26Dt42 = new $hs.Thunk();
                                hs_sat26Dt42.evaluateOnce = function () {
                                    var hs_sat26Dt40 = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("last_decode\x00");
                                    return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dt40);
                                };
                                return $hs.modules.GHCziIORef.hs_newIORef.hscall(hs_sat26Dt42);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt43, hs_sat26Dt41);
                        };
                        var hs_sat26Dt45 = new $hs.Thunk();
                        hs_sat26Dt45.evaluateOnce = function () {
                            return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26DsNK);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt45, hs_sat26Dt44);
                    };
                    var hs_sat26Dt48 = new $hs.Thunk();
                    hs_sat26Dt48.evaluateOnce = function () {
                        var hs_sat26Dt47 = new $hs.Data(2);
                        hs_sat26Dt47.data = [hs_encoding26DsNO];
                        return $hs.modules.GHCziIOziHandleziInternals.hs_openTextEncoding.hscall(hs_sat26Dt47, hs_ds126DsNQ);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt48, hs_sat26Dt46);
                };
                var hs_sat26Dt4a = new $hs.Thunk();
                hs_sat26Dt4a.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_closeTextCodecs.hscall(hs_wild26DsNL);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt4a, hs_sat26Dt49);
            };
            var hs_sat26Dt4c = new $hs.Thunk();
            hs_sat26Dt4c.evaluateOnce = function () {
                return $hs.modules.GHCziIOziHandleziInternals.hs_flushCharBuffer.hscall(hs_wild26DsNL);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt4c, hs_sat26Dt4b);
        };
        var hs_sat26Dt4f = new $hs.Thunk();
        hs_sat26Dt4f.evaluateOnce = function () {
            var hs_sat26Dt4e = new $hs.Thunk();
            hs_sat26Dt4e.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hSetEncoding\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withAllHandleszuzu.hscall(hs_sat26Dt4e, hs_hdl26DsNn);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt4f, hs_sat26Dt4d);
    };
    this.hs_hSetBuffering.evaluate = function (hs_handle26DsOu, hs_mode26DsOU) {
        var hs_sat26Dt4A = new $hs.Func(1);
        hs_sat26Dt4A.evaluate = function (hs_handlezu26DsOx) {
            var hs_wild26DsPC = hs_handlezu26DsOx;
            if (hs_handlezu26DsOx.notEvaluated) {
                hs_wild26DsPC = hs_handlezu26DsOx.hscall();
            }
            var hs_zddIODevice26DsP6 = hs_wild26DsPC.data[0];
            var hs_zddBufferedIO26DsPl = hs_wild26DsPC.data[1];
            var hs_zddTypeable26DsPm = hs_wild26DsPC.data[2];
            var hs_ds26DsP7 = hs_wild26DsPC.data[3];
            var hs_ds126DsOS = hs_wild26DsPC.data[4];
            var hs_rb26DsPn = hs_wild26DsPC.data[5];
            var hs_ds226DsOV = hs_wild26DsPC.data[6];
            var hs_rb126DsPo = hs_wild26DsPC.data[7];
            var hs_rb226DsPp = hs_wild26DsPC.data[8];
            var hs_rb326DsOQ = hs_wild26DsPC.data[9];
            var hs_ds326DsPr = hs_wild26DsPC.data[10];
            var hs_ds426DsPs = hs_wild26DsPC.data[11];
            var hs_ds526DsPt = hs_wild26DsPC.data[12];
            var hs_ds626DsPu = hs_wild26DsPC.data[13];
            var hs_ds726DsPv = hs_wild26DsPC.data[14];
            var hs_ds826DsPw = hs_wild26DsPC.data[15];
            var hs_a26DsOR = new $hs.Data(1);
            hs_a26DsOR.data = [hs_rb326DsOQ];
            var hs_wild126DsPb = hs_ds126DsOS;
            if (hs_ds126DsOS.notEvaluated) {
                hs_wild126DsPb = hs_ds126DsOS.hscall();
            }
            switch (hs_wild126DsPb.tag) {
            case 1:
                if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
                } else {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
                }
            default:
                var hs_wild226Dt4h = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqBufferMode, hs_mode26DsOU, hs_ds226DsOV);
                switch (hs_wild226Dt4h.tag) {
                case 1:
                    var hs_sat26Dt4v = new $hs.Thunk();
                    hs_sat26Dt4v.evaluateOnce = function () {
                        var hs_sat26Dt4s = new $hs.Func(1);
                        hs_sat26Dt4s.evaluate = function (hs_iszutty26DsPa) {
                            var hs_sat26Dt4m = new $hs.Thunk();
                            hs_sat26Dt4m.evaluateOnce = function () {
                                var hs_sat26Dt4j = new $hs.Thunk();
                                hs_sat26Dt4j.evaluateOnce = function () {
                                    var hs_sat26Dt4i = new $hs.Thunk();
                                    hs_sat26Dt4i.evaluateOnce = function () {
                                        var hs_tpl26Dt4g = hs_a26DsOR;
                                        if (hs_a26DsOR.notEvaluated) {
                                            hs_tpl26Dt4g = hs_a26DsOR.hscall();
                                        }
                                        var hs_tpl126DsPq = hs_tpl26Dt4g.data[0];
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_zddIODevice26DsP6, hs_zddBufferedIO26DsPl, hs_zddTypeable26DsPm, hs_ds26DsP7, hs_wild126DsPb, hs_rb26DsPn, hs_mode26DsOU, hs_rb126DsPo, hs_rb226DsPp, hs_tpl126DsPq, hs_ds326DsPr, hs_ds426DsPs, hs_ds526DsPt, hs_ds626DsPu, hs_ds726DsPv, hs_ds826DsPw];
                                        return $res;
                                    };
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt4i);
                                };
                                var hs_sat26Dt4k = new $hs.Thunk();
                                hs_sat26Dt4k.evaluateOnce = function () {
                                    return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26DsOR, $hs.modules.GHCziIOziHandleziTypes.hs_BufferListNil);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt4k, hs_sat26Dt4j);
                            };
                            var hs_sat26Dt4r = new $hs.Thunk();
                            hs_sat26Dt4r.evaluateOnce = function () {
                                var hs_sat26Dt4n = new $hs.Thunk();
                                hs_sat26Dt4n.evaluateOnce = function () {
                                    var hs_wild326Dt4l = hs_mode26DsOU;
                                    if (hs_mode26DsOU.notEvaluated) {
                                        hs_wild326Dt4l = hs_mode26DsOU.hscall();
                                    }
                                    switch (hs_wild326Dt4l.tag) {
                                    case 1:
                                        return $hs.modules.GHCziIOziDevice.hs_setRaw.hscall(hs_zddIODevice26DsP6, hs_ds26DsP7, $hs.modules.GHCziBool.hs_True);
                                    default:
                                        return $hs.modules.GHCziIOziDevice.hs_setRaw.hscall(hs_zddIODevice26DsP6, hs_ds26DsP7, $hs.modules.GHCziBool.hs_False);
                                    }
                                };
                                var hs_sat26Dt4q = new $hs.Thunk();
                                hs_sat26Dt4q.evaluateOnce = function () {
                                    var hs_sat26Dt4p = new $hs.Thunk();
                                    hs_sat26Dt4p.evaluateOnce = function () {
                                        var hs_sat26Dt4o = new $hs.Thunk();
                                        hs_sat26Dt4o.evaluateOnce = function () {
                                            return $hs.modules.GHCziIOziHandleziTypes.hs_isReadableHandleType.hscall(hs_wild126DsPb);
                                        };
                                        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_iszutty26DsPa, hs_sat26Dt4o);
                                    };
                                    return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt4p);
                                };
                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt4q, hs_sat26Dt4n);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt4r, hs_sat26Dt4m);
                        };
                        var hs_sat26Dt4t = new $hs.Thunk();
                        hs_sat26Dt4t.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziDevice.hs_isTerminal.hscall(hs_zddIODevice26DsP6, hs_ds26DsP7);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt4t, hs_sat26Dt4s);
                    };
                    var hs_sat26Dt4z = new $hs.Thunk();
                    hs_sat26Dt4z.evaluateOnce = function () {
                        var hs_wild326Dt4u = hs_mode26DsOU;
                        if (hs_mode26DsOU.notEvaluated) {
                            hs_wild326Dt4u = hs_mode26DsOU.hscall();
                        }
                        switch (hs_wild326Dt4u.tag) {
                        case 3:
                            var hs_ds926DsOZ = hs_wild326Dt4u.data[0];
                            var hs_wild426Dt4w = hs_ds926DsOZ;
                            if (hs_ds926DsOZ.notEvaluated) {
                                hs_wild426Dt4w = hs_ds926DsOZ.hscall();
                            }
                            switch (hs_wild426Dt4w.tag) {
                            case 1:
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                            case 2:
                                var hs_n26DsP2 = hs_wild426Dt4w.data[0];
                                var hs_sat26Dt4y = new $hs.Data(1);
                                hs_sat26Dt4y.data = [0];
                                var hs_wild526Dt4x = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_n26DsP2, hs_sat26Dt4y);
                                switch (hs_wild526Dt4x.tag) {
                                case 1:
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                                case 2:
                                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezubufsizz.hscall(hs_n26DsP2);
                                }
                            }
                        default:
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt4z, hs_sat26Dt4v);
                case 2:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_wild26DsPC);
                }
            }
        };
        var hs_sat26Dt4C = new $hs.Thunk();
        hs_sat26Dt4C.evaluateOnce = function () {
            var hs_sat26Dt4B = new $hs.Thunk();
            hs_sat26Dt4B.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hSetBuffering\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withAllHandleszuzu.hscall(hs_sat26Dt4B, hs_handle26DsOu);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt4C, hs_sat26Dt4A);
    };
    this.hs_hLookAhead.evaluate = function (hs_handle26DsPG) {
        var hs_sat26Dt4D = new $hs.Thunk();
        hs_sat26Dt4D.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hLookAhead\x00");
        };
        return $hs.modules.GHCziIOziHandleziInternals.hs_wantReadableHandlezu.hscall(hs_sat26Dt4D, hs_handle26DsPG, $hs.modules.GHCziIOziHandleziInternals.hs_hLookAheadzu);
    };
    this.hs_hIsEOF.evaluate = function (hs_handle26DsPJ) {
        var hs_sat26Dt57 = new $hs.Func(1);
        hs_sat26Dt57.evaluate = function (hs_ds26DsPM) {
            var hs_wild26Dt4F = hs_ds26DsPM;
            if (hs_ds26DsPM.notEvaluated) {
                hs_wild26Dt4F = hs_ds26DsPM.hscall();
            }
            var hs_zddBufferedIO26DsQj = hs_wild26Dt4F.data[1];
            var hs_ds126DsQk = hs_wild26Dt4F.data[3];
            var hs_rb26DsQ5 = hs_wild26Dt4F.data[5];
            var hs_rb226DsQ7 = hs_wild26Dt4F.data[8];
            var hs_a26DsQ6 = new $hs.Data(1);
            hs_a26DsQ6.data = [hs_rb26DsQ5];
            var hs_sat26Dt54 = new $hs.Func(1);
            hs_sat26Dt54.evaluate = function (hs_cbuf26DsQb) {
                var hs_sat26Dt4S = new $hs.Thunk();
                hs_sat26Dt4S.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_cbuf26DsQb);
                };
                var hs_wild126Dt4R = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26Dt4S);
                switch (hs_wild126Dt4R.tag) {
                case 1:
                    var hs_sat26Dt52 = new $hs.Func(1);
                    hs_sat26Dt52.evaluate = function (hs_bbuf26DsQg) {
                        var hs_sat26Dt4V = new $hs.Thunk();
                        hs_sat26Dt4V.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziBuffer.hs_isEmptyBuffer.hscall(hs_bbuf26DsQg);
                        };
                        var hs_wild226Dt4U = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26Dt4V);
                        switch (hs_wild226Dt4U.tag) {
                        case 1:
                            var hs_sat26Dt50 = new $hs.Func(1);
                            hs_sat26Dt50.evaluate = function (hs_ds1026DsQn) {
                                var hs_wild326Dt4T = hs_ds1026DsQn;
                                if (hs_ds1026DsQn.notEvaluated) {
                                    hs_wild326Dt4T = hs_ds1026DsQn.hscall();
                                }
                                var hs_r26DsQr = hs_wild326Dt4T.data[0];
                                var hs_bbufzq26DsQu = hs_wild326Dt4T.data[1];
                                var hs_sat26Dt4X = new $hs.Data(1);
                                hs_sat26Dt4X.data = [0];
                                var hs_wild426Dt4W = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_r26DsQr, hs_sat26Dt4X);
                                switch (hs_wild426Dt4W.tag) {
                                case 1:
                                    var hs_sat26Dt4Y = new $hs.Thunk();
                                    hs_sat26Dt4Y.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziBool.hs_False);
                                    };
                                    var hs_sat26Dt4Z = new $hs.Thunk();
                                    hs_sat26Dt4Z.evaluateOnce = function () {
                                        return $hs.modules.GHCziIORef.hs_writeIORef.hscall(hs_a26DsQ6, hs_bbufzq26DsQu);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt4Z, hs_sat26Dt4Y);
                                case 2:
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziBool.hs_True);
                                }
                            };
                            var hs_sat26Dt51 = new $hs.Thunk();
                            hs_sat26Dt51.evaluateOnce = function () {
                                return $hs.modules.GHCziIOziBufferedIO.hs_fillReadBuffer.hscall(hs_zddBufferedIO26DsQj, hs_ds126DsQk, hs_bbuf26DsQg);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt51, hs_sat26Dt50);
                        case 2:
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziBool.hs_False);
                        }
                    };
                    var hs_sat26Dt53 = new $hs.Thunk();
                    hs_sat26Dt53.evaluateOnce = function () {
                        return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_a26DsQ6);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt53, hs_sat26Dt52);
                case 2:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziBool.hs_False);
                }
            };
            var hs_sat26Dt56 = new $hs.Thunk();
            hs_sat26Dt56.evaluateOnce = function () {
                var hs_sat26Dt55 = new $hs.Data(1);
                hs_sat26Dt55.data = [hs_rb226DsQ7];
                return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26Dt55);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt56, hs_sat26Dt54);
        };
        var hs_sat26Dt59 = new $hs.Thunk();
        hs_sat26Dt59.evaluateOnce = function () {
            var hs_sat26Dt58 = new $hs.Thunk();
            hs_sat26Dt58.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hIsEOF\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_wantReadableHandlezu.hscall(hs_sat26Dt58, hs_handle26DsPJ);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt59, hs_sat26Dt57);
    };
    this.hs_hSetFileSizze.evaluate = function (hs_handle26DsQE, hs_sizze26DsR4) {
        var hs_sat26Dt5t = new $hs.Func(1);
        hs_sat26Dt5t.evaluate = function (hs_handlezu26DsQH) {
            var hs_wild26DsQZ = hs_handlezu26DsQH;
            if (hs_handlezu26DsQH.notEvaluated) {
                hs_wild26DsQZ = hs_handlezu26DsQH.hscall();
            }
            var hs_zddIODevice26DsR2 = hs_wild26DsQZ.data[0];
            var hs_ds26DsR3 = hs_wild26DsQZ.data[3];
            var hs_wild126Dt5a = $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_wild26DsQZ);
            switch (hs_wild126Dt5a.tag) {
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
                var hs_sat26Dt5r = new $hs.Thunk();
                hs_sat26Dt5r.evaluateOnce = function () {
                    var hs_sat26Dt5p = new $hs.Thunk();
                    hs_sat26Dt5p.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                    };
                    var hs_sat26Dt5q = new $hs.Thunk();
                    hs_sat26Dt5q.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziDevice.hs_setSizze.hscall(hs_zddIODevice26DsR2, hs_ds26DsR3, hs_sizze26DsR4);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt5q, hs_sat26Dt5p);
                };
                var hs_sat26Dt5s = new $hs.Thunk();
                hs_sat26Dt5s.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_flushWriteBuffer.hscall(hs_wild26DsQZ);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt5s, hs_sat26Dt5r);
            }
        };
        var hs_sat26Dt5v = new $hs.Thunk();
        hs_sat26Dt5v.evaluateOnce = function () {
            var hs_sat26Dt5u = new $hs.Thunk();
            hs_sat26Dt5u.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hSetFileSize\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26Dt5u, hs_handle26DsQE);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt5v, hs_sat26Dt5t);
    };
    this.hs_hFileSizze.evaluate = function (hs_handle26DsRb) {
        var hs_sat26Dt5V = new $hs.Func(1);
        hs_sat26Dt5V.evaluate = function (hs_handlezu26DsRe) {
            var hs_wild26DsRw = hs_handlezu26DsRe;
            if (hs_handlezu26DsRe.notEvaluated) {
                hs_wild26DsRw = hs_handlezu26DsRe.hscall();
            }
            var hs_zddIODevice26DsRz = hs_wild26DsRw.data[0];
            var hs_ds26DsRA = hs_wild26DsRw.data[3];
            var hs_wild126Dt5w = $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_wild26DsRw);
            switch (hs_wild126Dt5w.tag) {
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
                var hs_sat26Dt5T = new $hs.Thunk();
                hs_sat26Dt5T.evaluateOnce = function () {
                    var hs_sat26Dt5R = new $hs.Func(1);
                    hs_sat26Dt5R.evaluate = function (hs_r26DsRD) {
                        var hs_sat26Dt5N = new $hs.Thunk();
                        hs_sat26Dt5N.evaluateOnce = function () {
                            var hs_sat26Dt5L = new $hs.Thunk();
                            hs_sat26Dt5L.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26Dt5L);
                        };
                        var hs_wild226Dt5M = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_r26DsRD, hs_sat26Dt5N);
                        switch (hs_wild226Dt5M.tag) {
                        case 1:
                            var hs_sat26Dt5O = new $hs.Thunk();
                            hs_sat26Dt5O.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("not a regular file\x00");
                            };
                            var hs_sat26Dt5P = new $hs.Thunk();
                            hs_sat26Dt5P.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hFileSize\x00");
                            };
                            var hs_sat26Dt5Q = new $hs.Data(1);
                            hs_sat26Dt5Q.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_InappropriateType, hs_sat26Dt5P, hs_sat26Dt5O, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
                            return $hs.modules.GHCziIOziException.hs_ioException.hscall(hs_sat26Dt5Q);
                        case 2:
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_r26DsRD);
                        }
                    };
                    var hs_sat26Dt5S = new $hs.Thunk();
                    hs_sat26Dt5S.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziDevice.hs_getSizze.hscall(hs_zddIODevice26DsRz, hs_ds26DsRA);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt5S, hs_sat26Dt5R);
                };
                var hs_sat26Dt5U = new $hs.Thunk();
                hs_sat26Dt5U.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_flushWriteBuffer.hscall(hs_wild26DsRw);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt5U, hs_sat26Dt5T);
            }
        };
        var hs_sat26Dt5X = new $hs.Thunk();
        hs_sat26Dt5X.evaluateOnce = function () {
            var hs_sat26Dt5W = new $hs.Thunk();
            hs_sat26Dt5W.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hFileSize\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26Dt5W, hs_handle26DsRb);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt5X, hs_sat26Dt5V);
    };
    hs_hClosezq25uCIQ.evaluate = function (hs_h26DsRQ, hs_m26DsRR) {
        var hs_sat26Dt5Z = new $hs.Thunk();
        hs_sat26Dt5Z.evaluateOnce = function () {
            var hs_sat26Dt5Y = new $hs.Thunk();
            hs_sat26Dt5Y.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hClose\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezq.hscall(hs_sat26Dt5Y, hs_h26DsRQ, hs_m26DsRR);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt5Z, $hs.modules.GHCziIOziHandleziInternals.hs_hClosezuhelp);
    };
    this.hs_hFlush.evaluate = function (hs_handle26DsRV) {
        var hs_sat26Dt60 = new $hs.Thunk();
        hs_sat26Dt60.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hFlush\x00");
        };
        return $hs.modules.GHCziIOziHandleziInternals.hs_wantWritableHandle.hscall(hs_sat26Dt60, hs_handle26DsRV, $hs.modules.GHCziIOziHandleziInternals.hs_flushWriteBuffer);
    };
    hs_zdczeze25v4lH.evaluate = function (hs_ds26DsS0, hs_ds126DsS4) {
        var hs_wild26Dt62 = hs_ds26DsS0;
        if (hs_ds26DsS0.notEvaluated) {
            hs_wild26Dt62 = hs_ds26DsS0.hscall();
        }
        var hs_h126DsSb = hs_wild26Dt62.data[0];
        var hs_p126DsS8 = hs_wild26Dt62.data[1];
        var hs_wild126Dt61 = hs_ds126DsS4;
        if (hs_ds126DsS4.notEvaluated) {
            hs_wild126Dt61 = hs_ds126DsS4.hscall();
        }
        var hs_h226DsSc = hs_wild126Dt61.data[0];
        var hs_p226DsS9 = hs_wild126Dt61.data[1];
        var hs_sat26Dt63 = new $hs.Thunk();
        hs_sat26Dt63.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfEqHandle, hs_h126DsSb, hs_h226DsSc);
        };
        var hs_sat26Dt64 = new $hs.Thunk();
        hs_sat26Dt64.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInteger, hs_p126DsS8, hs_p226DsS9);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dt64, hs_sat26Dt63);
    };
    this.hs_zdfEqHandlePosn.data = [hs_zdczeze25v4lH, hs_zdczsze25v4lZ];
    hs_zdczsze25v4lZ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzsze.hscall($hs.modules.GHCziIOziHandle.hs_zdfEqHandlePosn);
    };
    hs_zdcshowsPrec25v4m1.evaluate = function (hs_p26DsSo, hs_ds26DsSk) {
        var hs_wild26Dt65 = hs_ds26DsSk;
        if (hs_ds26DsSk.notEvaluated) {
            hs_wild26Dt65 = hs_ds26DsSk.hscall();
        }
        var hs_h26DsSp = hs_wild26Dt65.data[0];
        var hs_pos26DsSt = hs_wild26Dt65.data[1];
        var hs_sat26Dt69 = new $hs.Thunk();
        hs_sat26Dt69.evaluateOnce = function () {
            var hs_sat26Dt66 = new $hs.Thunk();
            hs_sat26Dt66.evaluateOnce = function () {
                return $hs.modules.GHCziShow.hs_shows.hscall($hs.modules.GHCziNum.hs_zdfShowInteger, hs_pos26DsSt);
            };
            var hs_sat26Dt68 = new $hs.Thunk();
            hs_sat26Dt68.evaluateOnce = function () {
                var hs_sat26Dt67 = new $hs.Thunk();
                hs_sat26Dt67.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(" at position \x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dt67);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dt68, hs_sat26Dt66);
        };
        var hs_sat26Dt6a = new $hs.Thunk();
        hs_sat26Dt6a.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowHandle, hs_p26DsSo, hs_h26DsSp);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dt6a, hs_sat26Dt69);
    };
    this.hs_zdfShowHandlePosn.data = [hs_zdcshowsPrec25v4m1, hs_zdcshow25v4mj, hs_zdcshowList25v4mh];
    hs_zdcshowList25v4mh.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziIOziHandle.hs_zdfShowHandlePosn);
    };
    hs_zdcshow25v4mj.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziIOziHandle.hs_zdfShowHandlePosn);
    };
    hs_hClosezumaybethrow25uCIM.evaluate = function (hs_ds26DsSC, hs_h26DsSK) {
        var hs_wild26Dt6b = hs_ds26DsSC;
        if (hs_ds26DsSC.notEvaluated) {
            hs_wild26Dt6b = hs_ds26DsSC.hscall();
        }
        switch (hs_wild26Dt6b.tag) {
        case 1:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        case 2:
            var hs_e26DsSF = hs_wild26Dt6b.data[0];
            var hs_wild126Dt6c = $hs.modules.GHCziException.hs_fromException.hscall($hs.modules.GHCziIOziException.hs_zdfExceptionIOException, hs_e26DsSF);
            switch (hs_wild126Dt6c.tag) {
            case 1:
                return $hs.modules.GHCziIO.hs_throwIO.hscall($hs.modules.GHCziException.hs_zdfExceptionSomeException, hs_e26DsSF);
            case 2:
                var hs_ioe26DsSI = hs_wild126Dt6c.data[0];
                var hs_sat26Dt6e = new $hs.Thunk();
                hs_sat26Dt6e.evaluateOnce = function () {
                    var hs_sat26Dt6d = new $hs.Thunk();
                    hs_sat26Dt6d.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hClose\x00");
                    };
                    return $hs.modules.GHCziIOziHandleziInternals.hs_augmentIOError.hscall(hs_ioe26DsSI, hs_sat26Dt6d, hs_h26DsSK);
                };
                return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_sat26Dt6e);
            }
        }
    };
    this.hs_hClose.evaluate = function (hs_h26DsSN) {
        var hs_wild26DsSR = hs_h26DsSN;
        if (hs_h26DsSN.notEvaluated) {
            hs_wild26DsSR = hs_h26DsSN.hscall();
        }
        switch (hs_wild26DsSR.tag) {
        case 1:
            var hs_rb26DsSS = hs_wild26DsSR.data[1];
            var hs_sat26Dt6g = new $hs.Func(1);
            hs_sat26Dt6g.evaluate = function (hs_mbzuexc26DsSW) {
                return hs_hClosezumaybethrow25uCIM.hscall(hs_mbzuexc26DsSW, hs_wild26DsSR);
            };
            var hs_sat26Dt6i = new $hs.Thunk();
            hs_sat26Dt6i.evaluateOnce = function () {
                var hs_sat26Dt6h = new $hs.Data(1);
                hs_sat26Dt6h.data = [hs_rb26DsSS];
                return hs_hClosezq25uCIQ.hscall(hs_wild26DsSR, hs_sat26Dt6h);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt6i, hs_sat26Dt6g);
        case 2:
            var hs_rb26DsT2 = hs_wild26DsSR.data[1];
            var hs_rb126DsT4 = hs_wild26DsSR.data[2];
            var hs_sat26Dt6m = new $hs.Func(1);
            hs_sat26Dt6m.evaluate = function (hs_excs26DsTa) {
                var hs_sat26Dt6l = new $hs.Thunk();
                hs_sat26Dt6l.evaluateOnce = function () {
                    var hs_sat26Dt6k = new $hs.Thunk();
                    hs_sat26Dt6k.evaluateOnce = function () {
                        return $hs.modules.DataziMaybe.hs_catMaybes.hscall(hs_excs26DsTa);
                    };
                    return $hs.modules.DataziMaybe.hs_listToMaybe.hscall(hs_sat26Dt6k);
                };
                return hs_hClosezumaybethrow25uCIM.hscall(hs_sat26Dt6l, hs_wild26DsSR);
            };
            var hs_sat26Dt6s = new $hs.Thunk();
            hs_sat26Dt6s.evaluateOnce = function () {
                var hs_sat26Dt6n = new $hs.Data(1);
                hs_sat26Dt6n.data = [hs_rb126DsT4];
                var hs_sat26Dt6o = new $hs.Data(2);
                hs_sat26Dt6o.data = [hs_sat26Dt6n, $hs.modules.GHCziTypes.hs_ZMZN];
                var hs_sat26Dt6p = new $hs.Data(1);
                hs_sat26Dt6p.data = [hs_rb26DsT2];
                var hs_sat26Dt6q = new $hs.Data(2);
                hs_sat26Dt6q.data = [hs_sat26Dt6p, hs_sat26Dt6o];
                var hs_sat26Dt6r = new $hs.Func(1);
                hs_sat26Dt6r.evaluate = function (hs_eta1cW6l3) {
                    return hs_hClosezq25uCIQ.hscall(hs_wild26DsSR, hs_eta1cW6l3);
                };
                return $hs.modules.ControlziMonad.hs_mapM.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt6r, hs_sat26Dt6q);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt6s, hs_sat26Dt6m);
        }
    };
    this.hs_hGetPosn.evaluate = function (hs_handle26DsTf) {
        var hs_sat26Dt6u = new $hs.Func(1);
        hs_sat26Dt6u.evaluate = function (hs_posn26DsTi) {
            var hs_sat26Dt6t = new $hs.Data(1);
            hs_sat26Dt6t.data = [hs_handle26DsTf, hs_posn26DsTi];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt6t);
        };
        var hs_sat26Dt6v = new $hs.Thunk();
        hs_sat26Dt6v.evaluateOnce = function () {
            return $hs.modules.GHCziIOziHandle.hs_hTell.hscall(hs_handle26DsTf);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt6v, hs_sat26Dt6u);
    };
    this.hs_hIsOpen.evaluate = function (hs_handle26DsTn) {
        var hs_sat26Dt6x = new $hs.Func(1);
        hs_sat26Dt6x.evaluate = function (hs_handlezu26DsTq) {
            var hs_wild26Dt6w = $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_handlezu26DsTq);
            switch (hs_wild26Dt6w.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziBool.hs_False);
            case 2:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziBool.hs_False);
            default:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziBool.hs_True);
            }
        };
        var hs_sat26Dt6z = new $hs.Thunk();
        hs_sat26Dt6z.evaluateOnce = function () {
            var hs_sat26Dt6y = new $hs.Thunk();
            hs_sat26Dt6y.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hIsOpen\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26Dt6y, hs_handle26DsTn);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt6z, hs_sat26Dt6x);
    };
    this.hs_hIsClosed.evaluate = function (hs_handle26DsTv) {
        var hs_sat26Dt6B = new $hs.Func(1);
        hs_sat26Dt6B.evaluate = function (hs_handlezu26DsTy) {
            var hs_wild26Dt6A = $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_handlezu26DsTy);
            switch (hs_wild26Dt6A.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziBool.hs_True);
            default:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziBool.hs_False);
            }
        };
        var hs_sat26Dt6D = new $hs.Thunk();
        hs_sat26Dt6D.evaluateOnce = function () {
            var hs_sat26Dt6C = new $hs.Thunk();
            hs_sat26Dt6C.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hIsClosed\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26Dt6C, hs_handle26DsTv);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt6D, hs_sat26Dt6B);
    };
    this.hs_hIsReadable.evaluate = function (hs_ds26DsTC) {
        var hs_wild26DsTH = hs_ds26DsTC;
        if (hs_ds26DsTC.notEvaluated) {
            hs_wild26DsTH = hs_ds26DsTC.hscall();
        }
        switch (hs_wild26DsTH.tag) {
        case 1:
            var hs_sat26Dt6H = new $hs.Func(1);
            hs_sat26Dt6H.evaluate = function (hs_handlezu26DsTK) {
                var hs_wild126DsTM = $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_handlezu26DsTK);
                switch (hs_wild126DsTM.tag) {
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
                    var hs_sat26Dt6G = new $hs.Thunk();
                    hs_sat26Dt6G.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziHandleziTypes.hs_isReadableHandleType.hscall(hs_wild126DsTM);
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt6G);
                }
            };
            var hs_sat26Dt6J = new $hs.Thunk();
            hs_sat26Dt6J.evaluateOnce = function () {
                var hs_sat26Dt6I = new $hs.Thunk();
                hs_sat26Dt6I.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hIsReadable\x00");
                };
                return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26Dt6I, hs_wild26DsTH);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt6J, hs_sat26Dt6H);
        case 2:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziBool.hs_True);
        }
    };
    this.hs_hIsWritable.evaluate = function (hs_ds26DsTT) {
        var hs_wild26DsTY = hs_ds26DsTT;
        if (hs_ds26DsTT.notEvaluated) {
            hs_wild26DsTY = hs_ds26DsTT.hscall();
        }
        switch (hs_wild26DsTY.tag) {
        case 1:
            var hs_sat26Dt6Q = new $hs.Func(1);
            hs_sat26Dt6Q.evaluate = function (hs_handlezu26DsU1) {
                var hs_wild126DsU3 = $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_handlezu26DsU1);
                switch (hs_wild126DsU3.tag) {
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
                    var hs_sat26Dt6P = new $hs.Thunk();
                    hs_sat26Dt6P.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziHandleziTypes.hs_isWritableHandleType.hscall(hs_wild126DsU3);
                    };
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt6P);
                }
            };
            var hs_sat26Dt6S = new $hs.Thunk();
            hs_sat26Dt6S.evaluateOnce = function () {
                var hs_sat26Dt6R = new $hs.Thunk();
                hs_sat26Dt6R.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hIsWritable\x00");
                };
                return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26Dt6R, hs_wild26DsTY);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt6S, hs_sat26Dt6Q);
        case 2:
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziBool.hs_True);
        }
    };
    this.hs_hGetBuffering.evaluate = function (hs_handle26DsUb) {
        var hs_sat26Dt6Y = new $hs.Func(1);
        hs_sat26Dt6Y.evaluate = function (hs_handlezu26DsUe) {
            var hs_wild26Dt6W = $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_handlezu26DsUe);
            switch (hs_wild26Dt6W.tag) {
            case 1:
                if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
                } else {
                    return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
                }
            default:
                var hs_sat26Dt6X = new $hs.Thunk();
                hs_sat26Dt6X.evaluateOnce = function () {
                    return $hs.modules.GHCziIOziHandleziTypes.hs_haBufferMode.hscall(hs_handlezu26DsUe);
                };
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt6X);
            }
        };
        var hs_sat26Dt70 = new $hs.Thunk();
        hs_sat26Dt70.evaluateOnce = function () {
            var hs_sat26Dt6Z = new $hs.Thunk();
            hs_sat26Dt6Z.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hGetBuffering\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26Dt6Z, hs_handle26DsUb);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt70, hs_sat26Dt6Y);
    };
    this.hs_hSetEcho.evaluate = function (hs_handle26DsUk, hs_on26DsUO) {
        var hs_sat26Dt7k = new $hs.Func(1);
        hs_sat26Dt7k.evaluate = function (hs_isT26DsUn) {
            var hs_wild26Dt73 = $hs.modules.GHCziClasses.hs_not.hscall(hs_isT26DsUn);
            switch (hs_wild26Dt73.tag) {
            case 1:
                var hs_sat26Dt7h = new $hs.Func(1);
                hs_sat26Dt7h.evaluate = function (hs_ds26DsUs) {
                    var hs_wild126Dt72 = hs_ds26DsUs;
                    if (hs_ds26DsUs.notEvaluated) {
                        hs_wild126Dt72 = hs_ds26DsUs.hscall();
                    }
                    var hs_zddIODevice26DsUM = hs_wild126Dt72.data[0];
                    var hs_ds126DsUN = hs_wild126Dt72.data[3];
                    var hs_ds226DsUK = hs_wild126Dt72.data[4];
                    var hs_wild226Dt71 = hs_ds226DsUK;
                    if (hs_ds226DsUK.notEvaluated) {
                        hs_wild226Dt71 = hs_ds226DsUK.hscall();
                    }
                    switch (hs_wild226Dt71.tag) {
                    case 1:
                        if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                            return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
                        } else {
                            return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
                        }
                    default:
                        return $hs.modules.GHCziIOziDevice.hs_setEcho.hscall(hs_zddIODevice26DsUM, hs_ds126DsUN, hs_on26DsUO);
                    }
                };
                var hs_sat26Dt7j = new $hs.Thunk();
                hs_sat26Dt7j.evaluateOnce = function () {
                    var hs_sat26Dt7i = new $hs.Thunk();
                    hs_sat26Dt7i.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hSetEcho\x00");
                    };
                    return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26Dt7i, hs_handle26DsUk);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt7j, hs_sat26Dt7h);
            case 2:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            }
        };
        var hs_sat26Dt7l = new $hs.Thunk();
        hs_sat26Dt7l.evaluateOnce = function () {
            return $hs.modules.GHCziIOziHandle.hs_hIsTerminalDevice.hscall(hs_handle26DsUk);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt7l, hs_sat26Dt7k);
    };
    this.hs_hGetEcho.evaluate = function (hs_handle26DsUS) {
        var hs_sat26Dt7F = new $hs.Func(1);
        hs_sat26Dt7F.evaluate = function (hs_isT26DsUV) {
            var hs_wild26Dt7o = $hs.modules.GHCziClasses.hs_not.hscall(hs_isT26DsUV);
            switch (hs_wild26Dt7o.tag) {
            case 1:
                var hs_sat26Dt7C = new $hs.Func(1);
                hs_sat26Dt7C.evaluate = function (hs_ds26DsV0) {
                    var hs_wild126Dt7n = hs_ds26DsV0;
                    if (hs_ds26DsV0.notEvaluated) {
                        hs_wild126Dt7n = hs_ds26DsV0.hscall();
                    }
                    var hs_zddIODevice26DsVk = hs_wild126Dt7n.data[0];
                    var hs_ds126DsVl = hs_wild126Dt7n.data[3];
                    var hs_ds226DsVi = hs_wild126Dt7n.data[4];
                    var hs_wild226Dt7m = hs_ds226DsVi;
                    if (hs_ds226DsVi.notEvaluated) {
                        hs_wild226Dt7m = hs_ds226DsVi.hscall();
                    }
                    switch (hs_wild226Dt7m.tag) {
                    case 1:
                        if ($hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.notEvaluated) {
                            return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle.hscall();
                        } else {
                            return $hs.modules.GHCziIOziHandleziInternals.hs_ioezuclosedHandle;
                        }
                    default:
                        return $hs.modules.GHCziIOziDevice.hs_getEcho.hscall(hs_zddIODevice26DsVk, hs_ds126DsVl);
                    }
                };
                var hs_sat26Dt7E = new $hs.Thunk();
                hs_sat26Dt7E.evaluateOnce = function () {
                    var hs_sat26Dt7D = new $hs.Thunk();
                    hs_sat26Dt7D.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hGetEcho\x00");
                    };
                    return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26Dt7D, hs_handle26DsUS);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt7E, hs_sat26Dt7C);
            case 2:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziBool.hs_False);
            }
        };
        var hs_sat26Dt7G = new $hs.Thunk();
        hs_sat26Dt7G.evaluateOnce = function () {
            return $hs.modules.GHCziIOziHandle.hs_hIsTerminalDevice.hscall(hs_handle26DsUS);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt7G, hs_sat26Dt7F);
    };
    this.hs_hDuplicate.evaluate = function (hs_h26DsVp) {
        var hs_wild26DsVu = hs_h26DsVp;
        if (hs_h26DsVp.notEvaluated) {
            hs_wild26DsVu = hs_h26DsVp.hscall();
        }
        switch (hs_wild26DsVu.tag) {
        case 1:
            var hs_path26DsVz = hs_wild26DsVu.data[0];
            var hs_rb26DsVv = hs_wild26DsVu.data[1];
            var hs_sat26Dt7I = new $hs.Func(1);
            hs_sat26Dt7I.evaluate = function (hs_hzu26DsVA) {
                var hs_sat26Dt7H = new $hs.Data(2);
                hs_sat26Dt7H.data = [$hs.modules.GHCziIOziHandleziInternals.hs_handleFinalizzer];
                return hs_dupHandle25uCJE.hscall(hs_path26DsVz, hs_wild26DsVu, $hs.modules.DataziMaybe.hs_Nothing, hs_hzu26DsVA, hs_sat26Dt7H);
            };
            var hs_sat26Dt7L = new $hs.Thunk();
            hs_sat26Dt7L.evaluateOnce = function () {
                var hs_sat26Dt7J = new $hs.Data(1);
                hs_sat26Dt7J.data = [hs_rb26DsVv];
                var hs_sat26Dt7K = new $hs.Thunk();
                hs_sat26Dt7K.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hDuplicate\x00");
                };
                return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzq.hscall(hs_sat26Dt7K, hs_wild26DsVu, hs_sat26Dt7J);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt7L, hs_sat26Dt7I);
        case 2:
            var hs_path26DsVO = hs_wild26DsVu.data[0];
            var hs_rb26DsVH = hs_wild26DsVu.data[1];
            var hs_rb126DsVK = hs_wild26DsVu.data[2];
            var hs_r26DsVI = new $hs.Data(1);
            hs_r26DsVI.data = [hs_rb26DsVH];
            var hs_sat26Dt86 = new $hs.Func(1);
            hs_sat26Dt86.evaluate = function (hs_writezuside26DsVU) {
                var hs_wild126Dt7N = hs_writezuside26DsVU;
                if (hs_writezuside26DsVU.notEvaluated) {
                    hs_wild126Dt7N = hs_writezuside26DsVU.hscall();
                }
                switch (hs_wild126Dt7N.tag) {
                case 1:
                    var hs_rb226DsVZ = hs_wild126Dt7N.data[1];
                    var hs_writezum26DsW0 = new $hs.Data(1);
                    hs_writezum26DsW0.data = [hs_rb226DsVZ];
                    var hs_sat26Dt7W = new $hs.Func(1);
                    hs_sat26Dt7W.evaluate = function (hs_readzuside26DsW9) {
                        var hs_wild226Dt7Q = hs_readzuside26DsW9;
                        if (hs_readzuside26DsW9.notEvaluated) {
                            hs_wild226Dt7Q = hs_readzuside26DsW9.hscall();
                        }
                        switch (hs_wild226Dt7Q.tag) {
                        case 1:
                            var hs_rb326DsWf = hs_wild226Dt7Q.data[1];
                            var hs_sat26Dt7R = new $hs.Thunk();
                            hs_sat26Dt7R.evaluateOnce = function () {
                                var hs_tpl26Dt7O = hs_writezum26DsW0;
                                if (hs_writezum26DsW0.notEvaluated) {
                                    hs_tpl26Dt7O = hs_writezum26DsW0.hscall();
                                }
                                var hs_tpl126DsWg = hs_tpl26Dt7O.data[0];
                                var $res = new $hs.Data(2);
                                $res.data = [hs_path26DsVO, hs_rb326DsWf, hs_tpl126DsWg];
                                return $res;
                            };
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt7R);
                        case 2:
                            var hs_sat26Dt7V = new $hs.Thunk();
                            hs_sat26Dt7V.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/GHC/IO/Handle.hs:607:3-33\x00");
                            };
                            return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt7V);
                        }
                    };
                    var hs_sat26Dt81 = new $hs.Thunk();
                    hs_sat26Dt81.evaluateOnce = function () {
                        var hs_sat26Dt7Y = new $hs.Func(1);
                        hs_sat26Dt7Y.evaluate = function (hs_hzu26DsW5) {
                            var hs_sat26Dt7X = new $hs.Data(2);
                            hs_sat26Dt7X.data = [hs_writezum26DsW0];
                            return hs_dupHandle25uCJE.hscall(hs_path26DsVO, hs_wild26DsVu, hs_sat26Dt7X, hs_hzu26DsW5, $hs.modules.DataziMaybe.hs_Nothing);
                        };
                        var hs_sat26Dt80 = new $hs.Thunk();
                        hs_sat26Dt80.evaluateOnce = function () {
                            var hs_sat26Dt7Z = new $hs.Thunk();
                            hs_sat26Dt7Z.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hDuplicate\x00");
                            };
                            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzq.hscall(hs_sat26Dt7Z, hs_wild26DsVu, hs_r26DsVI);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt80, hs_sat26Dt7Y);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt81, hs_sat26Dt7W);
                case 2:
                    var hs_sat26Dt85 = new $hs.Thunk();
                    hs_sat26Dt85.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Pattern match failure in do expression at ../../ghc-7.0.2/libraries/base/GHC/IO/Handle.hs:604:3-35\x00");
                    };
                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt85);
                }
            };
            var hs_sat26Dt8c = new $hs.Thunk();
            hs_sat26Dt8c.evaluateOnce = function () {
                var hs_sat26Dt88 = new $hs.Func(1);
                hs_sat26Dt88.evaluate = function (hs_hzu26DsVP) {
                    var hs_sat26Dt87 = new $hs.Data(2);
                    hs_sat26Dt87.data = [$hs.modules.GHCziIOziHandleziInternals.hs_handleFinalizzer];
                    return hs_dupHandle25uCJE.hscall(hs_path26DsVO, hs_wild26DsVu, $hs.modules.DataziMaybe.hs_Nothing, hs_hzu26DsVP, hs_sat26Dt87);
                };
                var hs_sat26Dt8b = new $hs.Thunk();
                hs_sat26Dt8b.evaluateOnce = function () {
                    var hs_sat26Dt89 = new $hs.Data(1);
                    hs_sat26Dt89.data = [hs_rb126DsVK];
                    var hs_sat26Dt8a = new $hs.Thunk();
                    hs_sat26Dt8a.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hDuplicate\x00");
                    };
                    return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzq.hscall(hs_sat26Dt8a, hs_wild26DsVu, hs_sat26Dt89);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt8b, hs_sat26Dt88);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt8c, hs_sat26Dt86);
        }
    };
    this.hs_hDuplicateTo.evaluate = function (hs_h126DsWu, hs_h226DsWB) {
        var hs_wild26DsWP = hs_h126DsWu;
        if (hs_h126DsWu.notEvaluated) {
            hs_wild26DsWP = hs_h126DsWu.hscall();
        }
        switch (hs_wild26DsWP.tag) {
        case 1:
            var hs_path26DsWS = hs_wild26DsWP.data[0];
            var hs_rb26DsWz = hs_wild26DsWP.data[1];
            var hs_m126DsWA = new $hs.Data(1);
            hs_m126DsWA.data = [hs_rb26DsWz];
            var hs_wild126DsWG = hs_h226DsWB;
            if (hs_h226DsWB.notEvaluated) {
                hs_wild126DsWG = hs_h226DsWB.hscall();
            }
            switch (hs_wild126DsWG.tag) {
            case 1:
                var hs_rb126DsWH = hs_wild126DsWG.data[1];
                var hs_sat26Dt8l = new $hs.Func(1);
                hs_sat26Dt8l.evaluate = function (hs_h2zu26DsWL) {
                    var hs_sat26Dt8j = new $hs.Func(1);
                    hs_sat26Dt8j.evaluate = function (hs_ds126Dt8d) {
                        var hs_sat26Dt8g = new $hs.Func(1);
                        hs_sat26Dt8g.evaluate = function (hs_h1zu26DsWT) {
                            var hs_sat26Dt8f = new $hs.Data(2);
                            hs_sat26Dt8f.data = [$hs.modules.GHCziIOziHandleziInternals.hs_handleFinalizzer];
                            return hs_dupHandleTo25uCJM.hscall(hs_path26DsWS, hs_wild26DsWP, $hs.modules.DataziMaybe.hs_Nothing, hs_h2zu26DsWL, hs_h1zu26DsWT, hs_sat26Dt8f);
                        };
                        var hs_sat26Dt8i = new $hs.Thunk();
                        hs_sat26Dt8i.evaluateOnce = function () {
                            var hs_sat26Dt8h = new $hs.Thunk();
                            hs_sat26Dt8h.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hDuplicateTo\x00");
                            };
                            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzq.hscall(hs_sat26Dt8h, hs_wild26DsWP, hs_m126DsWA);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt8i, hs_sat26Dt8g);
                    };
                    var hs_sat26Dt8k = new $hs.Thunk();
                    hs_sat26Dt8k.evaluateOnce = function () {
                        return $hs.modules.GHCziIOziHandleziInternals.hs_hClosezuhelp.hscall(hs_h2zu26DsWL);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt8k, hs_sat26Dt8j);
                };
                var hs_sat26Dt8o = new $hs.Thunk();
                hs_sat26Dt8o.evaluateOnce = function () {
                    var hs_sat26Dt8m = new $hs.Data(1);
                    hs_sat26Dt8m.data = [hs_rb126DsWH];
                    var hs_sat26Dt8n = new $hs.Thunk();
                    hs_sat26Dt8n.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hDuplicateTo\x00");
                    };
                    return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzuzq.hscall(hs_sat26Dt8n, hs_wild126DsWG, hs_sat26Dt8m);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt8o, hs_sat26Dt8l);
            case 2:
                return hs_ioezudupHandlesNotCompatible25uCJK.hscall(hs_wild26DsWP);
            }
        case 2:
            var hs_path26DsXs = hs_wild26DsWP.data[0];
            var hs_rb26DsX5 = hs_wild26DsWP.data[1];
            var hs_rb126DsX8 = hs_wild26DsWP.data[2];
            var hs_r126DsX6 = new $hs.Data(1);
            hs_r126DsX6.data = [hs_rb26DsX5];
            var hs_w126DsX9 = new $hs.Data(1);
            hs_w126DsX9.data = [hs_rb126DsX8];
            var hs_wild126DsXh = hs_h226DsWB;
            if (hs_h226DsWB.notEvaluated) {
                hs_wild126DsXh = hs_h226DsWB.hscall();
            }
            switch (hs_wild126DsXh.tag) {
            case 1:
                return hs_ioezudupHandlesNotCompatible25uCJK.hscall(hs_wild26DsWP);
            case 2:
                var hs_rb226DsXA = hs_wild126DsXh.data[1];
                var hs_rb326DsXi = hs_wild126DsXh.data[2];
                var hs_sat26Dt8H = new $hs.Thunk();
                hs_sat26Dt8H.evaluateOnce = function () {
                    var hs_sat26Dt8C = new $hs.Func(1);
                    hs_sat26Dt8C.evaluate = function (hs_r2zu26DsXE) {
                        var hs_sat26Dt8A = new $hs.Func(1);
                        hs_sat26Dt8A.evaluate = function (hs_ds126Dt8u) {
                            var hs_sat26Dt8x = new $hs.Func(1);
                            hs_sat26Dt8x.evaluate = function (hs_r1zu26DsXL) {
                                var hs_sat26Dt8w = new $hs.Data(2);
                                hs_sat26Dt8w.data = [hs_w126DsX9];
                                return hs_dupHandleTo25uCJM.hscall(hs_path26DsXs, hs_wild26DsWP, hs_sat26Dt8w, hs_r2zu26DsXE, hs_r1zu26DsXL, $hs.modules.DataziMaybe.hs_Nothing);
                            };
                            var hs_sat26Dt8z = new $hs.Thunk();
                            hs_sat26Dt8z.evaluateOnce = function () {
                                var hs_sat26Dt8y = new $hs.Thunk();
                                hs_sat26Dt8y.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hDuplicateTo\x00");
                                };
                                return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzq.hscall(hs_sat26Dt8y, hs_wild26DsWP, hs_r126DsX6);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt8z, hs_sat26Dt8x);
                        };
                        var hs_sat26Dt8B = new $hs.Thunk();
                        hs_sat26Dt8B.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziHandleziInternals.hs_hClosezuhelp.hscall(hs_r2zu26DsXE);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt8B, hs_sat26Dt8A);
                    };
                    var hs_sat26Dt8F = new $hs.Thunk();
                    hs_sat26Dt8F.evaluateOnce = function () {
                        var hs_sat26Dt8D = new $hs.Data(1);
                        hs_sat26Dt8D.data = [hs_rb226DsXA];
                        var hs_sat26Dt8E = new $hs.Thunk();
                        hs_sat26Dt8E.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hDuplicateTo\x00");
                        };
                        return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzuzq.hscall(hs_sat26Dt8E, hs_wild126DsXh, hs_sat26Dt8D);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt8F, hs_sat26Dt8C);
                };
                var hs_sat26Dt8S = new $hs.Thunk();
                hs_sat26Dt8S.evaluateOnce = function () {
                    var hs_sat26Dt8O = new $hs.Func(1);
                    hs_sat26Dt8O.evaluate = function (hs_w2zu26DsXm) {
                        var hs_sat26Dt8M = new $hs.Func(1);
                        hs_sat26Dt8M.evaluate = function (hs_ds126Dt8G) {
                            var hs_sat26Dt8J = new $hs.Func(1);
                            hs_sat26Dt8J.evaluate = function (hs_w1zu26DsXt) {
                                var hs_sat26Dt8I = new $hs.Data(2);
                                hs_sat26Dt8I.data = [$hs.modules.GHCziIOziHandleziInternals.hs_handleFinalizzer];
                                return hs_dupHandleTo25uCJM.hscall(hs_path26DsXs, hs_wild26DsWP, $hs.modules.DataziMaybe.hs_Nothing, hs_w2zu26DsXm, hs_w1zu26DsXt, hs_sat26Dt8I);
                            };
                            var hs_sat26Dt8L = new $hs.Thunk();
                            hs_sat26Dt8L.evaluateOnce = function () {
                                var hs_sat26Dt8K = new $hs.Thunk();
                                hs_sat26Dt8K.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hDuplicateTo\x00");
                                };
                                return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzq.hscall(hs_sat26Dt8K, hs_wild26DsWP, hs_w126DsX9);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt8L, hs_sat26Dt8J);
                        };
                        var hs_sat26Dt8N = new $hs.Thunk();
                        hs_sat26Dt8N.evaluateOnce = function () {
                            return $hs.modules.GHCziIOziHandleziInternals.hs_hClosezuhelp.hscall(hs_w2zu26DsXm);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt8N, hs_sat26Dt8M);
                    };
                    var hs_sat26Dt8R = new $hs.Thunk();
                    hs_sat26Dt8R.evaluateOnce = function () {
                        var hs_sat26Dt8P = new $hs.Data(1);
                        hs_sat26Dt8P.data = [hs_rb326DsXi];
                        var hs_sat26Dt8Q = new $hs.Thunk();
                        hs_sat26Dt8Q.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("hDuplicateTo\x00");
                        };
                        return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezuzuzq.hscall(hs_sat26Dt8Q, hs_wild126DsXh, hs_sat26Dt8P);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt8R, hs_sat26Dt8O);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt8S, hs_sat26Dt8H);
            }
        }
    };
    hs_showHandlezq25uCJQ.evaluate = function (hs_filepath26DsY3, hs_iszuduplex26DsY9, hs_h26DsXU) {
        var hs_sat26Dt9I = new $hs.Func(1);
        hs_sat26Dt9I.evaluate = function (hs_hdlzu26DsXZ) {
            var hs_sat26Dt9H = new $hs.Thunk();
            hs_sat26Dt9H.evaluateOnce = function () {
                var hs_sat26Dt9E = new $hs.Thunk();
                hs_sat26Dt9E.evaluateOnce = function () {
                    var hs_wild26Dt8T = $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_hdlzu26DsXZ);
                    switch (hs_wild26Dt8T.tag) {
                    case 1:
                        var hs_sat26Dt9C = new $hs.Thunk();
                        hs_sat26Dt9C.evaluateOnce = function () {
                            var hs_sat26Dt9A = new $hs.Data(1);
                            hs_sat26Dt9A.data = ["}"];
                            var hs_sat26Dt9B = new $hs.Data(2);
                            hs_sat26Dt9B.data = [hs_sat26Dt9A, $hs.modules.GHCziTypes.hs_ZMZN];
                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dt9B);
                        };
                        var hs_sat26Dt9D = new $hs.Thunk();
                        hs_sat26Dt9D.evaluateOnce = function () {
                            return $hs.modules.GHCziShow.hs_shows.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowHandleType, $hs.modules.GHCziIOziHandleziTypes.hs_ClosedHandle);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dt9D, hs_sat26Dt9C);
                    default:
                        var hs_sat26Dt9x = new $hs.Thunk();
                        hs_sat26Dt9x.evaluateOnce = function () {
                            var hs_sat26Dt9v = new $hs.Thunk();
                            hs_sat26Dt9v.evaluateOnce = function () {
                                var hs_sat26Dt9s = new $hs.Thunk();
                                hs_sat26Dt9s.evaluateOnce = function () {
                                    var hs_sat26Dt9p = new $hs.Thunk();
                                    hs_sat26Dt9p.evaluateOnce = function () {
                                        var hs_sat26Dt9l = new $hs.Thunk();
                                        hs_sat26Dt9l.evaluateOnce = function () {
                                            var hs_sat26Dt9h = new $hs.Thunk();
                                            hs_sat26Dt9h.evaluateOnce = function () {
                                                var hs_sat26Dt9e = new $hs.Thunk();
                                                hs_sat26Dt9e.evaluateOnce = function () {
                                                    var hs_sat26Dt8X = new $hs.Thunk();
                                                    hs_sat26Dt8X.evaluateOnce = function () {
                                                        var hs_sat26Dt8U = new $hs.Data(1);
                                                        hs_sat26Dt8U.data = ["}"];
                                                        var hs_sat26Dt8V = new $hs.Data(2);
                                                        hs_sat26Dt8V.data = [hs_sat26Dt8U, $hs.modules.GHCziTypes.hs_ZMZN];
                                                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dt8V);
                                                    };
                                                    var hs_sat26Dt9d = new $hs.Thunk();
                                                    hs_sat26Dt9d.evaluateOnce = function () {
                                                        var hs_wild126Dt8W = $hs.modules.GHCziIOziHandleziTypes.hs_haBufferMode.hscall(hs_hdlzu26DsXZ);
                                                        switch (hs_wild126Dt8W.tag) {
                                                        case 1:
                                                            var hs_sat26Dt8Y = new $hs.Thunk();
                                                            hs_sat26Dt8Y.evaluateOnce = function () {
                                                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("none\x00");
                                                            };
                                                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dt8Y);
                                                        case 2:
                                                            var hs_sat26Dt8Z = new $hs.Thunk();
                                                            hs_sat26Dt8Z.evaluateOnce = function () {
                                                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("line\x00");
                                                            };
                                                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dt8Z);
                                                        case 3:
                                                            var hs_ds26DsYm = hs_wild126Dt8W.data[0];
                                                            var hs_wild226Dt90 = hs_ds26DsYm;
                                                            if (hs_ds26DsYm.notEvaluated) {
                                                                hs_wild226Dt90 = hs_ds26DsYm.hscall();
                                                            }
                                                            switch (hs_wild226Dt90.tag) {
                                                            case 1:
                                                                var hs_sat26Dt96 = new $hs.Thunk();
                                                                hs_sat26Dt96.evaluateOnce = function () {
                                                                    var hs_sat26Dt95 = new $hs.Thunk();
                                                                    hs_sat26Dt95.evaluateOnce = function () {
                                                                        var hs_sat26Dt94 = new $hs.Thunk();
                                                                        hs_sat26Dt94.evaluateOnce = function () {
                                                                            var hs_sat26Dt93 = new $hs.Thunk();
                                                                            hs_sat26Dt93.evaluateOnce = function () {
                                                                                var hs_sat26Dt92 = new $hs.Thunk();
                                                                                hs_sat26Dt92.evaluateOnce = function () {
                                                                                    var hs_sat26Dt91 = new $hs.Thunk();
                                                                                    hs_sat26Dt91.evaluateOnce = function () {
                                                                                        return $hs.modules.GHCziIOziHandleziTypes.hs_haCharBuffer.hscall(hs_hdlzu26DsXZ);
                                                                                    };
                                                                                    return $hs.modules.GHCziIORef.hs_readIORef.hscall(hs_sat26Dt91);
                                                                                };
                                                                                return $hs.modules.GHCziIO.hs_unsafePerformIO.hscall(hs_sat26Dt92);
                                                                            };
                                                                            return $hs.modules.GHCziIOziBuffer.hs_bufSizze.hscall(hs_sat26Dt93);
                                                                        };
                                                                        return $hs.modules.GHCziShow.hs_shows.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26Dt94);
                                                                    };
                                                                    return $hs.modules.GHCziShow.hs_showParen.hscall($hs.modules.GHCziBool.hs_True, hs_sat26Dt95);
                                                                };
                                                                var hs_sat26Dt98 = new $hs.Thunk();
                                                                hs_sat26Dt98.evaluateOnce = function () {
                                                                    var hs_sat26Dt97 = new $hs.Thunk();
                                                                    hs_sat26Dt97.evaluateOnce = function () {
                                                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("block \x00");
                                                                    };
                                                                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dt97);
                                                                };
                                                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dt98, hs_sat26Dt96);
                                                            case 2:
                                                                var hs_n26DsYz = hs_wild226Dt90.data[0];
                                                                var hs_sat26Dt9a = new $hs.Thunk();
                                                                hs_sat26Dt9a.evaluateOnce = function () {
                                                                    var hs_sat26Dt99 = new $hs.Thunk();
                                                                    hs_sat26Dt99.evaluateOnce = function () {
                                                                        return $hs.modules.GHCziShow.hs_shows.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_n26DsYz);
                                                                    };
                                                                    return $hs.modules.GHCziShow.hs_showParen.hscall($hs.modules.GHCziBool.hs_True, hs_sat26Dt99);
                                                                };
                                                                var hs_sat26Dt9c = new $hs.Thunk();
                                                                hs_sat26Dt9c.evaluateOnce = function () {
                                                                    var hs_sat26Dt9b = new $hs.Thunk();
                                                                    hs_sat26Dt9b.evaluateOnce = function () {
                                                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("block \x00");
                                                                    };
                                                                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dt9b);
                                                                };
                                                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dt9c, hs_sat26Dt9a);
                                                            }
                                                        }
                                                    };
                                                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dt9d, hs_sat26Dt8X);
                                                };
                                                var hs_sat26Dt9g = new $hs.Thunk();
                                                hs_sat26Dt9g.evaluateOnce = function () {
                                                    var hs_sat26Dt9f = new $hs.Thunk();
                                                    hs_sat26Dt9f.evaluateOnce = function () {
                                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("buffering=\x00");
                                                    };
                                                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dt9f);
                                                };
                                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dt9g, hs_sat26Dt9e);
                                            };
                                            var hs_sat26Dt9j = new $hs.Thunk();
                                            hs_sat26Dt9j.evaluateOnce = function () {
                                                var hs_sat26Dt9i = new $hs.Data(1);
                                                hs_sat26Dt9i.data = [","];
                                                return $hs.modules.GHCziShow.hs_showChar.hscall(hs_sat26Dt9i);
                                            };
                                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dt9j, hs_sat26Dt9h);
                                        };
                                        var hs_sat26Dt9o = new $hs.Thunk();
                                        hs_sat26Dt9o.evaluateOnce = function () {
                                            var hs_wild126Dt9k = hs_iszuduplex26DsY9;
                                            if (hs_iszuduplex26DsY9.notEvaluated) {
                                                hs_wild126Dt9k = hs_iszuduplex26DsY9.hscall();
                                            }
                                            switch (hs_wild126Dt9k.tag) {
                                            case 1:
                                                var hs_sat26Dt9m = new $hs.Thunk();
                                                hs_sat26Dt9m.evaluateOnce = function () {
                                                    return $hs.modules.GHCziIOziHandleziTypes.hs_haType.hscall(hs_hdlzu26DsXZ);
                                                };
                                                return $hs.modules.GHCziShow.hs_shows.hscall($hs.modules.GHCziIOziHandleziTypes.hs_zdfShowHandleType, hs_sat26Dt9m);
                                            case 2:
                                                var hs_sat26Dt9n = new $hs.Thunk();
                                                hs_sat26Dt9n.evaluateOnce = function () {
                                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("duplex (read-write)\x00");
                                                };
                                                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dt9n);
                                            }
                                        };
                                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dt9o, hs_sat26Dt9l);
                                    };
                                    var hs_sat26Dt9r = new $hs.Thunk();
                                    hs_sat26Dt9r.evaluateOnce = function () {
                                        var hs_sat26Dt9q = new $hs.Thunk();
                                        hs_sat26Dt9q.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("type=\x00");
                                        };
                                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dt9q);
                                    };
                                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dt9r, hs_sat26Dt9p);
                                };
                                var hs_sat26Dt9u = new $hs.Thunk();
                                hs_sat26Dt9u.evaluateOnce = function () {
                                    var hs_sat26Dt9t = new $hs.Data(1);
                                    hs_sat26Dt9t.data = [","];
                                    return $hs.modules.GHCziShow.hs_showChar.hscall(hs_sat26Dt9t);
                                };
                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dt9u, hs_sat26Dt9s);
                            };
                            var hs_sat26Dt9w = new $hs.Thunk();
                            hs_sat26Dt9w.evaluateOnce = function () {
                                return $hs.modules.GHCziShow.hs_showString.hscall(hs_filepath26DsY3);
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dt9w, hs_sat26Dt9v);
                        };
                        var hs_sat26Dt9z = new $hs.Thunk();
                        hs_sat26Dt9z.evaluateOnce = function () {
                            var hs_sat26Dt9y = new $hs.Thunk();
                            hs_sat26Dt9y.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("loc=\x00");
                            };
                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Dt9y);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dt9z, hs_sat26Dt9x);
                    }
                };
                var hs_sat26Dt9G = new $hs.Thunk();
                hs_sat26Dt9G.evaluateOnce = function () {
                    var hs_sat26Dt9F = new $hs.Data(1);
                    hs_sat26Dt9F.data = ["{"];
                    return $hs.modules.GHCziShow.hs_showChar.hscall(hs_sat26Dt9F);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26Dt9G, hs_sat26Dt9E, $hs.modules.GHCziTypes.hs_ZMZN);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26Dt9H);
        };
        var hs_sat26Dt9K = new $hs.Thunk();
        hs_sat26Dt9K.evaluateOnce = function () {
            var hs_sat26Dt9J = new $hs.Thunk();
            hs_sat26Dt9J.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("showHandle\x00");
            };
            return $hs.modules.GHCziIOziHandleziInternals.hs_withHandlezu.hscall(hs_sat26Dt9J, hs_h26DsXU);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26Dt9K, hs_sat26Dt9I);
    };
    this.hs_hShow.evaluate = function (hs_h26DsYV) {
        var hs_wild26DsZ0 = hs_h26DsYV;
        if (hs_h26DsYV.notEvaluated) {
            hs_wild26DsZ0 = hs_h26DsYV.hscall();
        }
        switch (hs_wild26DsZ0.tag) {
        case 1:
            var hs_path26DsYZ = hs_wild26DsZ0.data[0];
            return hs_showHandlezq25uCJQ.hscall(hs_path26DsYZ, $hs.modules.GHCziBool.hs_False, hs_wild26DsZ0);
        case 2:
            var hs_path26DsZ4 = hs_wild26DsZ0.data[0];
            return hs_showHandlezq25uCJQ.hscall(hs_path26DsZ4, $hs.modules.GHCziBool.hs_True, hs_wild26DsZ0);
        }
    };
    this.hs_HandlePosn.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
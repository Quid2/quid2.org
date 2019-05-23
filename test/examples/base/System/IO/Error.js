
$hs.modules.SystemziIOziError = new $hs.Module();
$hs.modules.SystemziIOziError.dependencies = ["GHC.Types", "Data.Either", "Data.Maybe", "GHC.Base", "GHC.Show", "GHC.IO.Exception", "Control.Exception.Base"];
$hs.modules.SystemziIOziError.initBeforeDependencies = function () {
    this.hs_catch = new $hs.Thunk();
    this.hs_catchIOError = new $hs.Thunk();
    this.hs_annotateIOError = new $hs.Func(4);
    this.hs_modifyIOError = new $hs.Func(2);
    this.hs_ioeSetFileName = new $hs.Func(2);
    this.hs_ioeSetHandle = new $hs.Func(2);
    this.hs_ioeSetLocation = new $hs.Func(2);
    this.hs_ioeSetErrorString = new $hs.Func(2);
    this.hs_ioeSetErrorType = new $hs.Func(2);
    this.hs_ioeGetFileName = new $hs.Func(1);
    this.hs_ioeGetHandle = new $hs.Func(1);
    this.hs_ioeGetLocation = new $hs.Func(1);
    this.hs_ioeGetErrorType = new $hs.Func(1);
    this.hs_isUserErrorType = new $hs.Func(1);
    this.hs_isPermissionErrorType = new $hs.Func(1);
    this.hs_isIllegalOperationErrorType = new $hs.Func(1);
    this.hs_isEOFErrorType = new $hs.Func(1);
    this.hs_isFullErrorType = new $hs.Func(1);
    this.hs_isAlreadyInUseErrorType = new $hs.Func(1);
    this.hs_isDoesNotExistErrorType = new $hs.Func(1);
    this.hs_isAlreadyExistsErrorType = new $hs.Func(1);
    this.hs_userErrorType = new $hs.Data(8);
    this.hs_permissionErrorType = new $hs.Data(7);
    this.hs_illegalOperationErrorType = new $hs.Data(6);
    this.hs_eofErrorType = new $hs.Data(5);
    this.hs_fullErrorType = new $hs.Data(4);
    this.hs_alreadyInUseErrorType = new $hs.Data(3);
    this.hs_doesNotExistErrorType = new $hs.Data(2);
    this.hs_alreadyExistsErrorType = new $hs.Data(1);
    this.hs_isUserError = new $hs.Thunk();
    this.hs_isPermissionError = new $hs.Thunk();
    this.hs_isIllegalOperation = new $hs.Thunk();
    this.hs_isEOFError = new $hs.Thunk();
    this.hs_isFullError = new $hs.Thunk();
    this.hs_isAlreadyInUseError = new $hs.Thunk();
    this.hs_isDoesNotExistError = new $hs.Thunk();
    this.hs_isAlreadyExistsError = new $hs.Thunk();
    this.hs_mkIOError = new $hs.Func(4);
    this.hs_try = new $hs.Func(1);
    this.hs_tryIOError = new $hs.Func(1);
    this.hs_ioeGetErrorString = new $hs.Func(1);
    this.hs_catch.evaluateOnce = function () {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_catchIOError.evaluateOnce = function () {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_annotateIOError.notEvaluated = true;
    this.hs_annotateIOError.evaluate = function (hs_ioe26CHvF, hs_loc26CHvU, hs_hdl26CHvN, hs_path26CHvX) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ioe26CHvF, hs_loc26CHvU, hs_hdl26CHvN, hs_path26CHvX);
    };
    this.hs_modifyIOError.notEvaluated = true;
    this.hs_modifyIOError.evaluate = function (hs_f26CHw7, hs_io26CHw4) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_f26CHw7, hs_io26CHw4);
    };
    this.hs_ioeSetFileName.notEvaluated = true;
    this.hs_ioeSetFileName.evaluate = function (hs_ioe26CHwc, hs_filename26CHwp) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ioe26CHwc, hs_filename26CHwp);
    };
    this.hs_ioeSetHandle.notEvaluated = true;
    this.hs_ioeSetHandle.evaluate = function (hs_ioe26CHwt, hs_hdl26CHwB) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ioe26CHwt, hs_hdl26CHwB);
    };
    this.hs_ioeSetLocation.notEvaluated = true;
    this.hs_ioeSetLocation.evaluate = function (hs_ioe26CHwK, hs_str26CHwU) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ioe26CHwK, hs_str26CHwU);
    };
    this.hs_ioeSetErrorString.notEvaluated = true;
    this.hs_ioeSetErrorString.evaluate = function (hs_ioe26CHx0, hs_str26CHxb) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ioe26CHx0, hs_str26CHxb);
    };
    this.hs_ioeSetErrorType.notEvaluated = true;
    this.hs_ioeSetErrorType.evaluate = function (hs_ioe26CHxg, hs_errtype26CHxp) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ioe26CHxg, hs_errtype26CHxp);
    };
    this.hs_ioeGetFileName.notEvaluated = true;
    this.hs_ioeGetFileName.evaluate = function (hs_ioe26CHxv) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ioe26CHxv);
    };
    this.hs_ioeGetHandle.notEvaluated = true;
    this.hs_ioeGetHandle.evaluate = function (hs_ioe26CHxx) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ioe26CHxx);
    };
    this.hs_ioeGetLocation.notEvaluated = true;
    this.hs_ioeGetLocation.evaluate = function (hs_ioe26CHxz) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ioe26CHxz);
    };
    this.hs_ioeGetErrorType.notEvaluated = true;
    this.hs_ioeGetErrorType.evaluate = function (hs_ioe26CHxB) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ioe26CHxB);
    };
    this.hs_isUserErrorType.notEvaluated = true;
    this.hs_isUserErrorType.evaluate = function (hs_ds26CHxD) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ds26CHxD);
    };
    this.hs_isPermissionErrorType.notEvaluated = true;
    this.hs_isPermissionErrorType.evaluate = function (hs_ds26CHxG) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ds26CHxG);
    };
    this.hs_isIllegalOperationErrorType.notEvaluated = true;
    this.hs_isIllegalOperationErrorType.evaluate = function (hs_ds26CHxJ) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ds26CHxJ);
    };
    this.hs_isEOFErrorType.notEvaluated = true;
    this.hs_isEOFErrorType.evaluate = function (hs_ds26CHxM) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ds26CHxM);
    };
    this.hs_isFullErrorType.notEvaluated = true;
    this.hs_isFullErrorType.evaluate = function (hs_ds26CHxP) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ds26CHxP);
    };
    this.hs_isAlreadyInUseErrorType.notEvaluated = true;
    this.hs_isAlreadyInUseErrorType.evaluate = function (hs_ds26CHxS) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ds26CHxS);
    };
    this.hs_isDoesNotExistErrorType.notEvaluated = true;
    this.hs_isDoesNotExistErrorType.evaluate = function (hs_ds26CHxV) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ds26CHxV);
    };
    this.hs_isAlreadyExistsErrorType.notEvaluated = true;
    this.hs_isAlreadyExistsErrorType.evaluate = function (hs_ds26CHxY) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ds26CHxY);
    };
    this.hs_userErrorType.notEvaluated = true;
    this.hs_userErrorType.evaluate = function () {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this;
    };
    this.hs_permissionErrorType.notEvaluated = true;
    this.hs_permissionErrorType.evaluate = function () {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this;
    };
    this.hs_illegalOperationErrorType.notEvaluated = true;
    this.hs_illegalOperationErrorType.evaluate = function () {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this;
    };
    this.hs_eofErrorType.notEvaluated = true;
    this.hs_eofErrorType.evaluate = function () {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this;
    };
    this.hs_fullErrorType.notEvaluated = true;
    this.hs_fullErrorType.evaluate = function () {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this;
    };
    this.hs_alreadyInUseErrorType.notEvaluated = true;
    this.hs_alreadyInUseErrorType.evaluate = function () {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this;
    };
    this.hs_doesNotExistErrorType.notEvaluated = true;
    this.hs_doesNotExistErrorType.evaluate = function () {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this;
    };
    this.hs_alreadyExistsErrorType.notEvaluated = true;
    this.hs_alreadyExistsErrorType.evaluate = function () {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this;
    };
    this.hs_isUserError.evaluateOnce = function () {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_isPermissionError.evaluateOnce = function () {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_isIllegalOperation.evaluateOnce = function () {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_isEOFError.evaluateOnce = function () {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_isFullError.evaluateOnce = function () {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_isAlreadyInUseError.evaluateOnce = function () {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_isDoesNotExistError.evaluateOnce = function () {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_isAlreadyExistsError.evaluateOnce = function () {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_mkIOError.notEvaluated = true;
    this.hs_mkIOError.evaluate = function (hs_t26CHy5, hs_location26CHy6, hs_maybezuhdl26CHy4, hs_maybezufilename26CHy7) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_t26CHy5, hs_location26CHy6, hs_maybezuhdl26CHy4, hs_maybezufilename26CHy7);
    };
    this.hs_try.notEvaluated = true;
    this.hs_try.evaluate = function (hs_f26CHy9) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_f26CHy9);
    };
    this.hs_tryIOError.notEvaluated = true;
    this.hs_tryIOError.evaluate = function (hs_f26CHyi) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_f26CHyi);
    };
    this.hs_ioeGetErrorString.notEvaluated = true;
    this.hs_ioeGetErrorString.evaluate = function (hs_ioe26CHyr) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ioe26CHyr);
    };
};
$hs.modules.SystemziIOziError.initAfterDependencies = function () {
    this.hs_annotateIOError.notEvaluated = false;
    this.hs_modifyIOError.notEvaluated = false;
    this.hs_ioeSetFileName.notEvaluated = false;
    this.hs_ioeSetHandle.notEvaluated = false;
    this.hs_ioeSetLocation.notEvaluated = false;
    this.hs_ioeSetErrorString.notEvaluated = false;
    this.hs_ioeSetErrorType.notEvaluated = false;
    this.hs_ioeGetFileName.notEvaluated = false;
    this.hs_ioeGetHandle.notEvaluated = false;
    this.hs_ioeGetLocation.notEvaluated = false;
    this.hs_ioeGetErrorType.notEvaluated = false;
    this.hs_isUserErrorType.notEvaluated = false;
    this.hs_isPermissionErrorType.notEvaluated = false;
    this.hs_isIllegalOperationErrorType.notEvaluated = false;
    this.hs_isEOFErrorType.notEvaluated = false;
    this.hs_isFullErrorType.notEvaluated = false;
    this.hs_isAlreadyInUseErrorType.notEvaluated = false;
    this.hs_isDoesNotExistErrorType.notEvaluated = false;
    this.hs_isAlreadyExistsErrorType.notEvaluated = false;
    this.hs_userErrorType.notEvaluated = false;
    this.hs_userErrorType.evaluate = function () {
        return this;
    };
    this.hs_permissionErrorType.notEvaluated = false;
    this.hs_permissionErrorType.evaluate = function () {
        return this;
    };
    this.hs_illegalOperationErrorType.notEvaluated = false;
    this.hs_illegalOperationErrorType.evaluate = function () {
        return this;
    };
    this.hs_eofErrorType.notEvaluated = false;
    this.hs_eofErrorType.evaluate = function () {
        return this;
    };
    this.hs_fullErrorType.notEvaluated = false;
    this.hs_fullErrorType.evaluate = function () {
        return this;
    };
    this.hs_alreadyInUseErrorType.notEvaluated = false;
    this.hs_alreadyInUseErrorType.evaluate = function () {
        return this;
    };
    this.hs_doesNotExistErrorType.notEvaluated = false;
    this.hs_doesNotExistErrorType.evaluate = function () {
        return this;
    };
    this.hs_alreadyExistsErrorType.notEvaluated = false;
    this.hs_alreadyExistsErrorType.evaluate = function () {
        return this;
    };
    this.hs_mkIOError.notEvaluated = false;
    this.hs_try.notEvaluated = false;
    this.hs_tryIOError.notEvaluated = false;
    this.hs_ioeGetErrorString.notEvaluated = false;
    this.hs_catch.evaluateOnce = function () {
        return $hs.modules.ControlziExceptionziBase.hs_catch.hscall($hs.modules.GHCziIOziException.hs_zdfExceptionIOException);
    };
    this.hs_catchIOError.evaluateOnce = function () {
        return $hs.modules.ControlziExceptionziBase.hs_catch.hscall($hs.modules.GHCziIOziException.hs_zdfExceptionIOException);
    };
    this.hs_annotateIOError.evaluate = function (hs_ioe26CHvF, hs_loc26CHvU, hs_hdl26CHvN, hs_path26CHvX) {
        var hs_wild26CHvP = hs_ioe26CHvF;
        if (hs_ioe26CHvF.notEvaluated) {
            hs_wild26CHvP = hs_ioe26CHvF.hscall();
        }
        var hs_ds126CHvT = hs_wild26CHvP.data[1];
        var hs_ds326CHvV = hs_wild26CHvP.data[3];
        var hs_ds426CHvW = hs_wild26CHvP.data[4];
        var hs_sat26CHyy = new $hs.Thunk();
        hs_sat26CHyy.evaluateOnce = function () {
            var hs_wild126CHw0 = hs_path26CHvX;
            if (hs_path26CHvX.notEvaluated) {
                hs_wild126CHw0 = hs_path26CHvX.hscall();
            }
            switch (hs_wild126CHw0.tag) {
            case 1:
                return $hs.modules.GHCziIOziException.hs_ioezufilename.hscall(hs_wild26CHvP);
            case 2:
                if (hs_wild126CHw0.notEvaluated) {
                    return hs_wild126CHw0.hscall();
                } else {
                    return hs_wild126CHw0;
                }
            }
        };
        var hs_sat26CHyu = new $hs.Thunk();
        hs_sat26CHyu.evaluateOnce = function () {
            var hs_wild126CHvR = hs_hdl26CHvN;
            if (hs_hdl26CHvN.notEvaluated) {
                hs_wild126CHvR = hs_hdl26CHvN.hscall();
            }
            switch (hs_wild126CHvR.tag) {
            case 1:
                return $hs.modules.GHCziIOziException.hs_ioezuhandle.hscall(hs_wild26CHvP);
            case 2:
                if (hs_wild126CHvR.notEvaluated) {
                    return hs_wild126CHvR.hscall();
                } else {
                    return hs_wild126CHvR;
                }
            }
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CHyu, hs_ds126CHvT, hs_loc26CHvU, hs_ds326CHvV, hs_ds426CHvW, hs_sat26CHyy];
        return $res;
    };
    this.hs_modifyIOError.evaluate = function (hs_f26CHw7, hs_io26CHw4) {
        var hs_sat26CHyB = new $hs.Func(1);
        hs_sat26CHyB.evaluate = function (hs_e26CHw6) {
            var hs_sat26CHyC = new $hs.Thunk();
            hs_sat26CHyC.evaluateOnce = function () {
                return hs_f26CHw7.hscall(hs_e26CHw6);
            };
            return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_sat26CHyC);
        };
        return $hs.modules.SystemziIOziError.hs_catch.hscall(hs_io26CHw4, hs_sat26CHyB);
    };
    this.hs_ioeSetFileName.evaluate = function (hs_ioe26CHwc, hs_filename26CHwp) {
        var hs_wild26CHyE = hs_ioe26CHwc;
        if (hs_ioe26CHwc.notEvaluated) {
            hs_wild26CHyE = hs_ioe26CHwc.hscall();
        }
        var hs_ds26CHwk = hs_wild26CHyE.data[0];
        var hs_ds126CHwl = hs_wild26CHyE.data[1];
        var hs_ds226CHwm = hs_wild26CHyE.data[2];
        var hs_ds326CHwn = hs_wild26CHyE.data[3];
        var hs_ds426CHwo = hs_wild26CHyE.data[4];
        var hs_sat26CHyD = new $hs.Data(2);
        hs_sat26CHyD.data = [hs_filename26CHwp];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds26CHwk, hs_ds126CHwl, hs_ds226CHwm, hs_ds326CHwn, hs_ds426CHwo, hs_sat26CHyD];
        return $res;
    };
    this.hs_ioeSetHandle.evaluate = function (hs_ioe26CHwt, hs_hdl26CHwB) {
        var hs_wild26CHyH = hs_ioe26CHwt;
        if (hs_ioe26CHwt.notEvaluated) {
            hs_wild26CHyH = hs_ioe26CHwt.hscall();
        }
        var hs_ds126CHwD = hs_wild26CHyH.data[1];
        var hs_ds226CHwE = hs_wild26CHyH.data[2];
        var hs_ds326CHwF = hs_wild26CHyH.data[3];
        var hs_ds426CHwG = hs_wild26CHyH.data[4];
        var hs_ds526CHwH = hs_wild26CHyH.data[5];
        var hs_sat26CHyG = new $hs.Data(2);
        hs_sat26CHyG.data = [hs_hdl26CHwB];
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26CHyG, hs_ds126CHwD, hs_ds226CHwE, hs_ds326CHwF, hs_ds426CHwG, hs_ds526CHwH];
        return $res;
    };
    this.hs_ioeSetLocation.evaluate = function (hs_ioe26CHwK, hs_str26CHwU) {
        var hs_wild26CHyK = hs_ioe26CHwK;
        if (hs_ioe26CHwK.notEvaluated) {
            hs_wild26CHyK = hs_ioe26CHwK.hscall();
        }
        var hs_ds26CHwS = hs_wild26CHyK.data[0];
        var hs_ds126CHwT = hs_wild26CHyK.data[1];
        var hs_ds326CHwV = hs_wild26CHyK.data[3];
        var hs_ds426CHwW = hs_wild26CHyK.data[4];
        var hs_ds526CHwX = hs_wild26CHyK.data[5];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds26CHwS, hs_ds126CHwT, hs_str26CHwU, hs_ds326CHwV, hs_ds426CHwW, hs_ds526CHwX];
        return $res;
    };
    this.hs_ioeSetErrorString.evaluate = function (hs_ioe26CHx0, hs_str26CHxb) {
        var hs_wild26CHyM = hs_ioe26CHx0;
        if (hs_ioe26CHx0.notEvaluated) {
            hs_wild26CHyM = hs_ioe26CHx0.hscall();
        }
        var hs_ds26CHx8 = hs_wild26CHyM.data[0];
        var hs_ds126CHx9 = hs_wild26CHyM.data[1];
        var hs_ds226CHxa = hs_wild26CHyM.data[2];
        var hs_ds426CHxc = hs_wild26CHyM.data[4];
        var hs_ds526CHxd = hs_wild26CHyM.data[5];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds26CHx8, hs_ds126CHx9, hs_ds226CHxa, hs_str26CHxb, hs_ds426CHxc, hs_ds526CHxd];
        return $res;
    };
    this.hs_ioeSetErrorType.evaluate = function (hs_ioe26CHxg, hs_errtype26CHxp) {
        var hs_wild26CHyO = hs_ioe26CHxg;
        if (hs_ioe26CHxg.notEvaluated) {
            hs_wild26CHyO = hs_ioe26CHxg.hscall();
        }
        var hs_ds26CHxo = hs_wild26CHyO.data[0];
        var hs_ds226CHxq = hs_wild26CHyO.data[2];
        var hs_ds326CHxr = hs_wild26CHyO.data[3];
        var hs_ds426CHxs = hs_wild26CHyO.data[4];
        var hs_ds526CHxt = hs_wild26CHyO.data[5];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds26CHxo, hs_errtype26CHxp, hs_ds226CHxq, hs_ds326CHxr, hs_ds426CHxs, hs_ds526CHxt];
        return $res;
    };
    this.hs_ioeGetFileName.evaluate = function (hs_ioe26CHxv) {
        return $hs.modules.GHCziIOziException.hs_ioezufilename.hscall(hs_ioe26CHxv);
    };
    this.hs_ioeGetHandle.evaluate = function (hs_ioe26CHxx) {
        return $hs.modules.GHCziIOziException.hs_ioezuhandle.hscall(hs_ioe26CHxx);
    };
    this.hs_ioeGetLocation.evaluate = function (hs_ioe26CHxz) {
        return $hs.modules.GHCziIOziException.hs_ioezulocation.hscall(hs_ioe26CHxz);
    };
    this.hs_ioeGetErrorType.evaluate = function (hs_ioe26CHxB) {
        return $hs.modules.GHCziIOziException.hs_ioezutype.hscall(hs_ioe26CHxB);
    };
    this.hs_isUserErrorType.evaluate = function (hs_ds26CHxD) {
        var hs_wild26CHyP = hs_ds26CHxD;
        if (hs_ds26CHxD.notEvaluated) {
            hs_wild26CHyP = hs_ds26CHxD.hscall();
        }
        switch (hs_wild26CHyP.tag) {
        case 8:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_isPermissionErrorType.evaluate = function (hs_ds26CHxG) {
        var hs_wild26CHyQ = hs_ds26CHxG;
        if (hs_ds26CHxG.notEvaluated) {
            hs_wild26CHyQ = hs_ds26CHxG.hscall();
        }
        switch (hs_wild26CHyQ.tag) {
        case 7:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_isIllegalOperationErrorType.evaluate = function (hs_ds26CHxJ) {
        var hs_wild26CHyR = hs_ds26CHxJ;
        if (hs_ds26CHxJ.notEvaluated) {
            hs_wild26CHyR = hs_ds26CHxJ.hscall();
        }
        switch (hs_wild26CHyR.tag) {
        case 6:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_isEOFErrorType.evaluate = function (hs_ds26CHxM) {
        var hs_wild26CHyS = hs_ds26CHxM;
        if (hs_ds26CHxM.notEvaluated) {
            hs_wild26CHyS = hs_ds26CHxM.hscall();
        }
        switch (hs_wild26CHyS.tag) {
        case 5:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_isFullErrorType.evaluate = function (hs_ds26CHxP) {
        var hs_wild26CHyT = hs_ds26CHxP;
        if (hs_ds26CHxP.notEvaluated) {
            hs_wild26CHyT = hs_ds26CHxP.hscall();
        }
        switch (hs_wild26CHyT.tag) {
        case 4:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_isAlreadyInUseErrorType.evaluate = function (hs_ds26CHxS) {
        var hs_wild26CHyU = hs_ds26CHxS;
        if (hs_ds26CHxS.notEvaluated) {
            hs_wild26CHyU = hs_ds26CHxS.hscall();
        }
        switch (hs_wild26CHyU.tag) {
        case 3:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_isDoesNotExistErrorType.evaluate = function (hs_ds26CHxV) {
        var hs_wild26CHyV = hs_ds26CHxV;
        if (hs_ds26CHxV.notEvaluated) {
            hs_wild26CHyV = hs_ds26CHxV.hscall();
        }
        switch (hs_wild26CHyV.tag) {
        case 2:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_isAlreadyExistsErrorType.evaluate = function (hs_ds26CHxY) {
        var hs_wild26CHyW = hs_ds26CHxY;
        if (hs_ds26CHxY.notEvaluated) {
            hs_wild26CHyW = hs_ds26CHxY.hscall();
        }
        switch (hs_wild26CHyW.tag) {
        case 1:
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        default:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    this.hs_userErrorType.data = [];
    this.hs_permissionErrorType.data = [];
    this.hs_illegalOperationErrorType.data = [];
    this.hs_eofErrorType.data = [];
    this.hs_fullErrorType.data = [];
    this.hs_alreadyInUseErrorType.data = [];
    this.hs_doesNotExistErrorType.data = [];
    this.hs_alreadyExistsErrorType.data = [];
    this.hs_isUserError.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.SystemziIOziError.hs_isUserErrorType, $hs.modules.SystemziIOziError.hs_ioeGetErrorType);
    };
    this.hs_isPermissionError.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.SystemziIOziError.hs_isPermissionErrorType, $hs.modules.SystemziIOziError.hs_ioeGetErrorType);
    };
    this.hs_isIllegalOperation.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.SystemziIOziError.hs_isIllegalOperationErrorType, $hs.modules.SystemziIOziError.hs_ioeGetErrorType);
    };
    this.hs_isEOFError.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.SystemziIOziError.hs_isEOFErrorType, $hs.modules.SystemziIOziError.hs_ioeGetErrorType);
    };
    this.hs_isFullError.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.SystemziIOziError.hs_isFullErrorType, $hs.modules.SystemziIOziError.hs_ioeGetErrorType);
    };
    this.hs_isAlreadyInUseError.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.SystemziIOziError.hs_isAlreadyInUseErrorType, $hs.modules.SystemziIOziError.hs_ioeGetErrorType);
    };
    this.hs_isDoesNotExistError.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.SystemziIOziError.hs_isDoesNotExistErrorType, $hs.modules.SystemziIOziError.hs_ioeGetErrorType);
    };
    this.hs_isAlreadyExistsError.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.SystemziIOziError.hs_isAlreadyExistsErrorType, $hs.modules.SystemziIOziError.hs_ioeGetErrorType);
    };
    this.hs_mkIOError.evaluate = function (hs_t26CHy5, hs_location26CHy6, hs_maybezuhdl26CHy4, hs_maybezufilename26CHy7) {
        var $res = new $hs.Data(1);
        $res.data = [hs_maybezuhdl26CHy4, hs_t26CHy5, hs_location26CHy6, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.DataziMaybe.hs_Nothing, hs_maybezufilename26CHy7];
        return $res;
    };
    this.hs_try.evaluate = function (hs_f26CHy9) {
        var hs_sat26CHyY = new $hs.Thunk();
        hs_sat26CHyY.evaluateOnce = function () {
            var hs_sat26CHz1 = new $hs.Thunk();
            hs_sat26CHz1.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CHz1, $hs.modules.DataziEither.hs_Left);
        };
        var hs_sat26CHyX = new $hs.Thunk();
        hs_sat26CHyX.evaluateOnce = function () {
            var hs_sat26CHyZ = new $hs.Func(1);
            hs_sat26CHyZ.evaluate = function (hs_r26CHyb) {
                var hs_sat26CHz0 = new $hs.Data(2);
                hs_sat26CHz0.data = [hs_r26CHyb];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CHz0);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26CHy9, hs_sat26CHyZ);
        };
        return $hs.modules.SystemziIOziError.hs_catch.hscall(hs_sat26CHyX, hs_sat26CHyY);
    };
    this.hs_tryIOError.evaluate = function (hs_f26CHyi) {
        var hs_sat26CHz3 = new $hs.Thunk();
        hs_sat26CHz3.evaluateOnce = function () {
            var hs_sat26CHz6 = new $hs.Thunk();
            hs_sat26CHz6.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26CHz6, $hs.modules.DataziEither.hs_Left);
        };
        var hs_sat26CHz2 = new $hs.Thunk();
        hs_sat26CHz2.evaluateOnce = function () {
            var hs_sat26CHz4 = new $hs.Func(1);
            hs_sat26CHz4.evaluate = function (hs_r26CHyk) {
                var hs_sat26CHz5 = new $hs.Data(2);
                hs_sat26CHz5.data = [hs_r26CHyk];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26CHz5);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26CHyi, hs_sat26CHz4);
        };
        return $hs.modules.SystemziIOziError.hs_catch.hscall(hs_sat26CHz2, hs_sat26CHz3);
    };
    this.hs_ioeGetErrorString.evaluate = function (hs_ioe26CHyr) {
        var hs_wild26CHz7 = $hs.modules.GHCziIOziException.hs_ioezutype.hscall(hs_ioe26CHyr);
        switch (hs_wild26CHz7.tag) {
        case 8:
            return $hs.modules.GHCziIOziException.hs_ioezudescription.hscall(hs_ioe26CHyr);
        default:
            var hs_sat26CHz8 = new $hs.Thunk();
            hs_sat26CHz8.evaluateOnce = function () {
                return $hs.modules.GHCziIOziException.hs_ioezutype.hscall(hs_ioe26CHyr);
            };
            return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziIOziException.hs_zdfShowIOErrorType, hs_sat26CHz8);
        }
    };
};

$hs.modules.SystemziIOziError = new $hs.Module();
$hs.modules.SystemziIOziError.dependencies = ["GHC.Types", "Data.Either", "Data.Maybe", "GHC.Base", "GHC.Show", "GHC.IO.Exception", "Control.Exception.Base"];
$hs.modules.SystemziIOziError.initBeforeDependencies = function () {
    this.hs_catch = new $hs.Thunk();
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
    this.hs_ioeGetErrorString = new $hs.Func(1);
    this.hs_catch.evaluateOnce = function () {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_annotateIOError.notEvaluated = true;
    this.hs_annotateIOError.evaluate = function (hs_ioe26D6BP, hs_loc26D6C4, hs_hdl26D6BX, hs_path26D6C7) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ioe26D6BP, hs_loc26D6C4, hs_hdl26D6BX, hs_path26D6C7);
    };
    this.hs_modifyIOError.notEvaluated = true;
    this.hs_modifyIOError.evaluate = function (hs_f26D6Ch, hs_io26D6Ce) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_f26D6Ch, hs_io26D6Ce);
    };
    this.hs_ioeSetFileName.notEvaluated = true;
    this.hs_ioeSetFileName.evaluate = function (hs_ioe26D6Cm, hs_filename26D6Cz) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ioe26D6Cm, hs_filename26D6Cz);
    };
    this.hs_ioeSetHandle.notEvaluated = true;
    this.hs_ioeSetHandle.evaluate = function (hs_ioe26D6CD, hs_hdl26D6CL) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ioe26D6CD, hs_hdl26D6CL);
    };
    this.hs_ioeSetLocation.notEvaluated = true;
    this.hs_ioeSetLocation.evaluate = function (hs_ioe26D6CU, hs_str26D6D4) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ioe26D6CU, hs_str26D6D4);
    };
    this.hs_ioeSetErrorString.notEvaluated = true;
    this.hs_ioeSetErrorString.evaluate = function (hs_ioe26D6Da, hs_str26D6Dl) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ioe26D6Da, hs_str26D6Dl);
    };
    this.hs_ioeSetErrorType.notEvaluated = true;
    this.hs_ioeSetErrorType.evaluate = function (hs_ioe26D6Dq, hs_errtype26D6Dz) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ioe26D6Dq, hs_errtype26D6Dz);
    };
    this.hs_ioeGetFileName.notEvaluated = true;
    this.hs_ioeGetFileName.evaluate = function (hs_ioe26D6DF) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ioe26D6DF);
    };
    this.hs_ioeGetHandle.notEvaluated = true;
    this.hs_ioeGetHandle.evaluate = function (hs_ioe26D6DH) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ioe26D6DH);
    };
    this.hs_ioeGetLocation.notEvaluated = true;
    this.hs_ioeGetLocation.evaluate = function (hs_ioe26D6DJ) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ioe26D6DJ);
    };
    this.hs_ioeGetErrorType.notEvaluated = true;
    this.hs_ioeGetErrorType.evaluate = function (hs_ioe26D6DL) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ioe26D6DL);
    };
    this.hs_isUserErrorType.notEvaluated = true;
    this.hs_isUserErrorType.evaluate = function (hs_ds26D6DN) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ds26D6DN);
    };
    this.hs_isPermissionErrorType.notEvaluated = true;
    this.hs_isPermissionErrorType.evaluate = function (hs_ds26D6DQ) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ds26D6DQ);
    };
    this.hs_isIllegalOperationErrorType.notEvaluated = true;
    this.hs_isIllegalOperationErrorType.evaluate = function (hs_ds26D6DT) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ds26D6DT);
    };
    this.hs_isEOFErrorType.notEvaluated = true;
    this.hs_isEOFErrorType.evaluate = function (hs_ds26D6DW) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ds26D6DW);
    };
    this.hs_isFullErrorType.notEvaluated = true;
    this.hs_isFullErrorType.evaluate = function (hs_ds26D6DZ) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ds26D6DZ);
    };
    this.hs_isAlreadyInUseErrorType.notEvaluated = true;
    this.hs_isAlreadyInUseErrorType.evaluate = function (hs_ds26D6E2) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ds26D6E2);
    };
    this.hs_isDoesNotExistErrorType.notEvaluated = true;
    this.hs_isDoesNotExistErrorType.evaluate = function (hs_ds26D6E5) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ds26D6E5);
    };
    this.hs_isAlreadyExistsErrorType.notEvaluated = true;
    this.hs_isAlreadyExistsErrorType.evaluate = function (hs_ds26D6E8) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ds26D6E8);
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
    this.hs_mkIOError.evaluate = function (hs_t26D6Ef, hs_location26D6Eg, hs_maybezuhdl26D6Ee, hs_maybezufilename26D6Eh) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_t26D6Ef, hs_location26D6Eg, hs_maybezuhdl26D6Ee, hs_maybezufilename26D6Eh);
    };
    this.hs_try.notEvaluated = true;
    this.hs_try.evaluate = function (hs_f26D6Ej) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_f26D6Ej);
    };
    this.hs_ioeGetErrorString.notEvaluated = true;
    this.hs_ioeGetErrorString.evaluate = function (hs_ioe26D6Es) {
        $hs.modules.SystemziIOziError.loadDependencies();
        return this.evaluate(hs_ioe26D6Es);
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
    this.hs_ioeGetErrorString.notEvaluated = false;
    this.hs_catch.evaluateOnce = function () {
        return $hs.modules.ControlziExceptionziBase.hs_catch.hscall($hs.modules.GHCziIOziException.hs_zdfExceptionIOException);
    };
    this.hs_annotateIOError.evaluate = function (hs_ioe26D6BP, hs_loc26D6C4, hs_hdl26D6BX, hs_path26D6C7) {
        var hs_wild26D6BZ = hs_ioe26D6BP;
        if (hs_ioe26D6BP.notEvaluated) {
            hs_wild26D6BZ = hs_ioe26D6BP.hscall();
        }
        var hs_ds126D6C3 = hs_wild26D6BZ.data[1];
        var hs_ds326D6C5 = hs_wild26D6BZ.data[3];
        var hs_ds426D6C6 = hs_wild26D6BZ.data[4];
        var hs_sat26D6Ez = new $hs.Thunk();
        hs_sat26D6Ez.evaluateOnce = function () {
            var hs_wild126D6Ca = hs_path26D6C7;
            if (hs_path26D6C7.notEvaluated) {
                hs_wild126D6Ca = hs_path26D6C7.hscall();
            }
            switch (hs_wild126D6Ca.tag) {
            case 1:
                return $hs.modules.GHCziIOziException.hs_ioezufilename.hscall(hs_wild26D6BZ);
            case 2:
                if (hs_wild126D6Ca.notEvaluated) {
                    return hs_wild126D6Ca.hscall();
                } else {
                    return hs_wild126D6Ca;
                }
            }
        };
        var hs_sat26D6EB = new $hs.Thunk();
        hs_sat26D6EB.evaluateOnce = function () {
            var hs_wild126D6C1 = hs_hdl26D6BX;
            if (hs_hdl26D6BX.notEvaluated) {
                hs_wild126D6C1 = hs_hdl26D6BX.hscall();
            }
            switch (hs_wild126D6C1.tag) {
            case 1:
                return $hs.modules.GHCziIOziException.hs_ioezuhandle.hscall(hs_wild26D6BZ);
            case 2:
                if (hs_wild126D6C1.notEvaluated) {
                    return hs_wild126D6C1.hscall();
                } else {
                    return hs_wild126D6C1;
                }
            }
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26D6EB, hs_ds126D6C3, hs_loc26D6C4, hs_ds326D6C5, hs_ds426D6C6, hs_sat26D6Ez];
        return $res;
    };
    this.hs_modifyIOError.evaluate = function (hs_f26D6Ch, hs_io26D6Ce) {
        var hs_sat26D6ED = new $hs.Func(1);
        hs_sat26D6ED.evaluate = function (hs_e26D6Cg) {
            var hs_sat26D6EC = new $hs.Thunk();
            hs_sat26D6EC.evaluateOnce = function () {
                return hs_f26D6Ch.hscall(hs_e26D6Cg);
            };
            return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_sat26D6EC);
        };
        return $hs.modules.SystemziIOziError.hs_catch.hscall(hs_io26D6Ce, hs_sat26D6ED);
    };
    this.hs_ioeSetFileName.evaluate = function (hs_ioe26D6Cm, hs_filename26D6Cz) {
        var hs_wild26D6EE = hs_ioe26D6Cm;
        if (hs_ioe26D6Cm.notEvaluated) {
            hs_wild26D6EE = hs_ioe26D6Cm.hscall();
        }
        var hs_ds26D6Cu = hs_wild26D6EE.data[0];
        var hs_ds126D6Cv = hs_wild26D6EE.data[1];
        var hs_ds226D6Cw = hs_wild26D6EE.data[2];
        var hs_ds326D6Cx = hs_wild26D6EE.data[3];
        var hs_ds426D6Cy = hs_wild26D6EE.data[4];
        var hs_sat26D6EG = new $hs.Data(2);
        hs_sat26D6EG.data = [hs_filename26D6Cz];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds26D6Cu, hs_ds126D6Cv, hs_ds226D6Cw, hs_ds326D6Cx, hs_ds426D6Cy, hs_sat26D6EG];
        return $res;
    };
    this.hs_ioeSetHandle.evaluate = function (hs_ioe26D6CD, hs_hdl26D6CL) {
        var hs_wild26D6EI = hs_ioe26D6CD;
        if (hs_ioe26D6CD.notEvaluated) {
            hs_wild26D6EI = hs_ioe26D6CD.hscall();
        }
        var hs_ds126D6CN = hs_wild26D6EI.data[1];
        var hs_ds226D6CO = hs_wild26D6EI.data[2];
        var hs_ds326D6CP = hs_wild26D6EI.data[3];
        var hs_ds426D6CQ = hs_wild26D6EI.data[4];
        var hs_ds526D6CR = hs_wild26D6EI.data[5];
        var hs_sat26D6EJ = new $hs.Data(2);
        hs_sat26D6EJ.data = [hs_hdl26D6CL];
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26D6EJ, hs_ds126D6CN, hs_ds226D6CO, hs_ds326D6CP, hs_ds426D6CQ, hs_ds526D6CR];
        return $res;
    };
    this.hs_ioeSetLocation.evaluate = function (hs_ioe26D6CU, hs_str26D6D4) {
        var hs_wild26D6EK = hs_ioe26D6CU;
        if (hs_ioe26D6CU.notEvaluated) {
            hs_wild26D6EK = hs_ioe26D6CU.hscall();
        }
        var hs_ds26D6D2 = hs_wild26D6EK.data[0];
        var hs_ds126D6D3 = hs_wild26D6EK.data[1];
        var hs_ds326D6D5 = hs_wild26D6EK.data[3];
        var hs_ds426D6D6 = hs_wild26D6EK.data[4];
        var hs_ds526D6D7 = hs_wild26D6EK.data[5];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds26D6D2, hs_ds126D6D3, hs_str26D6D4, hs_ds326D6D5, hs_ds426D6D6, hs_ds526D6D7];
        return $res;
    };
    this.hs_ioeSetErrorString.evaluate = function (hs_ioe26D6Da, hs_str26D6Dl) {
        var hs_wild26D6EM = hs_ioe26D6Da;
        if (hs_ioe26D6Da.notEvaluated) {
            hs_wild26D6EM = hs_ioe26D6Da.hscall();
        }
        var hs_ds26D6Di = hs_wild26D6EM.data[0];
        var hs_ds126D6Dj = hs_wild26D6EM.data[1];
        var hs_ds226D6Dk = hs_wild26D6EM.data[2];
        var hs_ds426D6Dm = hs_wild26D6EM.data[4];
        var hs_ds526D6Dn = hs_wild26D6EM.data[5];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds26D6Di, hs_ds126D6Dj, hs_ds226D6Dk, hs_str26D6Dl, hs_ds426D6Dm, hs_ds526D6Dn];
        return $res;
    };
    this.hs_ioeSetErrorType.evaluate = function (hs_ioe26D6Dq, hs_errtype26D6Dz) {
        var hs_wild26D6EO = hs_ioe26D6Dq;
        if (hs_ioe26D6Dq.notEvaluated) {
            hs_wild26D6EO = hs_ioe26D6Dq.hscall();
        }
        var hs_ds26D6Dy = hs_wild26D6EO.data[0];
        var hs_ds226D6DA = hs_wild26D6EO.data[2];
        var hs_ds326D6DB = hs_wild26D6EO.data[3];
        var hs_ds426D6DC = hs_wild26D6EO.data[4];
        var hs_ds526D6DD = hs_wild26D6EO.data[5];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds26D6Dy, hs_errtype26D6Dz, hs_ds226D6DA, hs_ds326D6DB, hs_ds426D6DC, hs_ds526D6DD];
        return $res;
    };
    this.hs_ioeGetFileName.evaluate = function (hs_ioe26D6DF) {
        return $hs.modules.GHCziIOziException.hs_ioezufilename.hscall(hs_ioe26D6DF);
    };
    this.hs_ioeGetHandle.evaluate = function (hs_ioe26D6DH) {
        return $hs.modules.GHCziIOziException.hs_ioezuhandle.hscall(hs_ioe26D6DH);
    };
    this.hs_ioeGetLocation.evaluate = function (hs_ioe26D6DJ) {
        return $hs.modules.GHCziIOziException.hs_ioezulocation.hscall(hs_ioe26D6DJ);
    };
    this.hs_ioeGetErrorType.evaluate = function (hs_ioe26D6DL) {
        return $hs.modules.GHCziIOziException.hs_ioezutype.hscall(hs_ioe26D6DL);
    };
    this.hs_isUserErrorType.evaluate = function (hs_ds26D6DN) {
        var hs_wild26D6EQ = hs_ds26D6DN;
        if (hs_ds26D6DN.notEvaluated) {
            hs_wild26D6EQ = hs_ds26D6DN.hscall();
        }
        switch (hs_wild26D6EQ.tag) {
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
    this.hs_isPermissionErrorType.evaluate = function (hs_ds26D6DQ) {
        var hs_wild26D6ER = hs_ds26D6DQ;
        if (hs_ds26D6DQ.notEvaluated) {
            hs_wild26D6ER = hs_ds26D6DQ.hscall();
        }
        switch (hs_wild26D6ER.tag) {
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
    this.hs_isIllegalOperationErrorType.evaluate = function (hs_ds26D6DT) {
        var hs_wild26D6ES = hs_ds26D6DT;
        if (hs_ds26D6DT.notEvaluated) {
            hs_wild26D6ES = hs_ds26D6DT.hscall();
        }
        switch (hs_wild26D6ES.tag) {
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
    this.hs_isEOFErrorType.evaluate = function (hs_ds26D6DW) {
        var hs_wild26D6ET = hs_ds26D6DW;
        if (hs_ds26D6DW.notEvaluated) {
            hs_wild26D6ET = hs_ds26D6DW.hscall();
        }
        switch (hs_wild26D6ET.tag) {
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
    this.hs_isFullErrorType.evaluate = function (hs_ds26D6DZ) {
        var hs_wild26D6EU = hs_ds26D6DZ;
        if (hs_ds26D6DZ.notEvaluated) {
            hs_wild26D6EU = hs_ds26D6DZ.hscall();
        }
        switch (hs_wild26D6EU.tag) {
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
    this.hs_isAlreadyInUseErrorType.evaluate = function (hs_ds26D6E2) {
        var hs_wild26D6EV = hs_ds26D6E2;
        if (hs_ds26D6E2.notEvaluated) {
            hs_wild26D6EV = hs_ds26D6E2.hscall();
        }
        switch (hs_wild26D6EV.tag) {
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
    this.hs_isDoesNotExistErrorType.evaluate = function (hs_ds26D6E5) {
        var hs_wild26D6EW = hs_ds26D6E5;
        if (hs_ds26D6E5.notEvaluated) {
            hs_wild26D6EW = hs_ds26D6E5.hscall();
        }
        switch (hs_wild26D6EW.tag) {
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
    this.hs_isAlreadyExistsErrorType.evaluate = function (hs_ds26D6E8) {
        var hs_wild26D6EX = hs_ds26D6E8;
        if (hs_ds26D6E8.notEvaluated) {
            hs_wild26D6EX = hs_ds26D6E8.hscall();
        }
        switch (hs_wild26D6EX.tag) {
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
    this.hs_mkIOError.evaluate = function (hs_t26D6Ef, hs_location26D6Eg, hs_maybezuhdl26D6Ee, hs_maybezufilename26D6Eh) {
        var $res = new $hs.Data(1);
        $res.data = [hs_maybezuhdl26D6Ee, hs_t26D6Ef, hs_location26D6Eg, $hs.modules.GHCziTypes.hs_ZMZN, $hs.modules.DataziMaybe.hs_Nothing, hs_maybezufilename26D6Eh];
        return $res;
    };
    this.hs_try.evaluate = function (hs_f26D6Ej) {
        var hs_sat26D6EZ = new $hs.Thunk();
        hs_sat26D6EZ.evaluateOnce = function () {
            var hs_sat26D6EY = new $hs.Thunk();
            hs_sat26D6EY.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26D6EY, $hs.modules.DataziEither.hs_Left);
        };
        var hs_sat26D6F2 = new $hs.Thunk();
        hs_sat26D6F2.evaluateOnce = function () {
            var hs_sat26D6F1 = new $hs.Func(1);
            hs_sat26D6F1.evaluate = function (hs_r26D6El) {
                var hs_sat26D6F0 = new $hs.Data(2);
                hs_sat26D6F0.data = [hs_r26D6El];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26D6F0);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26D6Ej, hs_sat26D6F1);
        };
        return $hs.modules.SystemziIOziError.hs_catch.hscall(hs_sat26D6F2, hs_sat26D6EZ);
    };
    this.hs_ioeGetErrorString.evaluate = function (hs_ioe26D6Es) {
        var hs_wild26D6F3 = $hs.modules.GHCziIOziException.hs_ioezutype.hscall(hs_ioe26D6Es);
        switch (hs_wild26D6F3.tag) {
        case 8:
            return $hs.modules.GHCziIOziException.hs_ioezudescription.hscall(hs_ioe26D6Es);
        default:
            var hs_sat26D6F4 = new $hs.Thunk();
            hs_sat26D6F4.evaluateOnce = function () {
                return $hs.modules.GHCziIOziException.hs_ioezutype.hscall(hs_ioe26D6Es);
            };
            return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziIOziException.hs_zdfShowIOErrorType, hs_sat26D6F4);
        }
    };
};
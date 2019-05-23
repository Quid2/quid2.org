
$hs.modules.SystemziPosixziTypes = new $hs.Module();
$hs.modules.SystemziPosixziTypes.dependencies = ["GHC.Types", "GHC.Base", "GHC.Enum", "GHC.Num", "GHC.Real", "GHC.Show", "Data.Typeable", "GHC.Classes", "GHC.Int", "GHC.Read", "GHC.Word", "Data.Bits", "Foreign.C.Types", "Foreign.Storable"];
$hs.modules.SystemziPosixziTypes.initBeforeDependencies = function () {
    this.hs_zdfReadCDev = new $hs.Data(1);
    this.hs_zdfShowCDev = new $hs.Data(1);
    this.hs_zdfTypeableCDev = new $hs.Thunk();
    this.hs_zdfReadCIno = new $hs.Data(1);
    this.hs_zdfShowCIno = new $hs.Data(1);
    this.hs_zdfTypeableCIno = new $hs.Thunk();
    this.hs_zdfReadCMode = new $hs.Data(1);
    this.hs_zdfShowCMode = new $hs.Data(1);
    this.hs_zdfTypeableCMode = new $hs.Thunk();
    this.hs_zdfReadCOff = new $hs.Data(1);
    this.hs_zdfShowCOff = new $hs.Data(1);
    this.hs_zdfTypeableCOff = new $hs.Thunk();
    this.hs_zdfReadCPid = new $hs.Data(1);
    this.hs_zdfShowCPid = new $hs.Data(1);
    this.hs_zdfTypeableCPid = new $hs.Thunk();
    this.hs_zdfReadCSsizze = new $hs.Data(1);
    this.hs_zdfShowCSsizze = new $hs.Data(1);
    this.hs_zdfTypeableCSsizze = new $hs.Thunk();
    this.hs_zdfReadCGid = new $hs.Data(1);
    this.hs_zdfShowCGid = new $hs.Data(1);
    this.hs_zdfTypeableCGid = new $hs.Thunk();
    this.hs_zdfReadCNlink = new $hs.Data(1);
    this.hs_zdfShowCNlink = new $hs.Data(1);
    this.hs_zdfTypeableCNlink = new $hs.Thunk();
    this.hs_zdfReadCUid = new $hs.Data(1);
    this.hs_zdfShowCUid = new $hs.Data(1);
    this.hs_zdfTypeableCUid = new $hs.Thunk();
    this.hs_zdfReadCCc = new $hs.Data(1);
    this.hs_zdfShowCCc = new $hs.Data(1);
    this.hs_zdfTypeableCCc = new $hs.Thunk();
    this.hs_zdfReadCSpeed = new $hs.Data(1);
    this.hs_zdfShowCSpeed = new $hs.Data(1);
    this.hs_zdfTypeableCSpeed = new $hs.Thunk();
    this.hs_zdfReadCTcflag = new $hs.Data(1);
    this.hs_zdfShowCTcflag = new $hs.Data(1);
    this.hs_zdfTypeableCTcflag = new $hs.Thunk();
    this.hs_zdfReadCRLim = new $hs.Data(1);
    this.hs_zdfShowCRLim = new $hs.Data(1);
    this.hs_zdfTypeableCRLim = new $hs.Thunk();
    this.hs_zdfReadFd = new $hs.Data(1);
    this.hs_zdfShowFd = new $hs.Data(1);
    this.hs_zdfTypeableFd = new $hs.Thunk();
    this.hs_zdfBoundedFd = new $hs.Data(1);
    this.hs_zdfStorableFd = new $hs.Data(1);
    this.hs_zdfEnumFd = new $hs.Data(1);
    this.hs_zdfEqFd = new $hs.Data(1);
    this.hs_zdfOrdFd = new $hs.Data(1);
    this.hs_zdfNumFd = new $hs.Data(1);
    this.hs_zdfRealFd = new $hs.Data(1);
    this.hs_zdfIntegralFd = new $hs.Data(1);
    this.hs_zdfBitsFd = new $hs.Data(1);
    this.hs_zdfBoundedCRLim = new $hs.Data(1);
    this.hs_zdfStorableCRLim = new $hs.Data(1);
    this.hs_zdfEnumCRLim = new $hs.Data(1);
    this.hs_zdfEqCRLim = new $hs.Data(1);
    this.hs_zdfOrdCRLim = new $hs.Data(1);
    this.hs_zdfNumCRLim = new $hs.Data(1);
    this.hs_zdfRealCRLim = new $hs.Data(1);
    this.hs_zdfIntegralCRLim = new $hs.Data(1);
    this.hs_zdfBitsCRLim = new $hs.Data(1);
    this.hs_zdfBoundedCTcflag = new $hs.Data(1);
    this.hs_zdfStorableCTcflag = new $hs.Data(1);
    this.hs_zdfEnumCTcflag = new $hs.Data(1);
    this.hs_zdfEqCTcflag = new $hs.Data(1);
    this.hs_zdfOrdCTcflag = new $hs.Data(1);
    this.hs_zdfNumCTcflag = new $hs.Data(1);
    this.hs_zdfRealCTcflag = new $hs.Data(1);
    this.hs_zdfIntegralCTcflag = new $hs.Data(1);
    this.hs_zdfBitsCTcflag = new $hs.Data(1);
    this.hs_zdfStorableCSpeed = new $hs.Data(1);
    this.hs_zdfEnumCSpeed = new $hs.Data(1);
    this.hs_zdfEqCSpeed = new $hs.Data(1);
    this.hs_zdfOrdCSpeed = new $hs.Data(1);
    this.hs_zdfNumCSpeed = new $hs.Data(1);
    this.hs_zdfRealCSpeed = new $hs.Data(1);
    this.hs_zdfStorableCCc = new $hs.Data(1);
    this.hs_zdfEnumCCc = new $hs.Data(1);
    this.hs_zdfEqCCc = new $hs.Data(1);
    this.hs_zdfOrdCCc = new $hs.Data(1);
    this.hs_zdfNumCCc = new $hs.Data(1);
    this.hs_zdfRealCCc = new $hs.Data(1);
    this.hs_zdfBoundedCUid = new $hs.Data(1);
    this.hs_zdfStorableCUid = new $hs.Data(1);
    this.hs_zdfEnumCUid = new $hs.Data(1);
    this.hs_zdfEqCUid = new $hs.Data(1);
    this.hs_zdfOrdCUid = new $hs.Data(1);
    this.hs_zdfNumCUid = new $hs.Data(1);
    this.hs_zdfRealCUid = new $hs.Data(1);
    this.hs_zdfIntegralCUid = new $hs.Data(1);
    this.hs_zdfBitsCUid = new $hs.Data(1);
    this.hs_zdfBoundedCNlink = new $hs.Data(1);
    this.hs_zdfStorableCNlink = new $hs.Data(1);
    this.hs_zdfEnumCNlink = new $hs.Data(1);
    this.hs_zdfEqCNlink = new $hs.Data(1);
    this.hs_zdfOrdCNlink = new $hs.Data(1);
    this.hs_zdfNumCNlink = new $hs.Data(1);
    this.hs_zdfRealCNlink = new $hs.Data(1);
    this.hs_zdfIntegralCNlink = new $hs.Data(1);
    this.hs_zdfBitsCNlink = new $hs.Data(1);
    this.hs_zdfBoundedCGid = new $hs.Data(1);
    this.hs_zdfStorableCGid = new $hs.Data(1);
    this.hs_zdfEnumCGid = new $hs.Data(1);
    this.hs_zdfEqCGid = new $hs.Data(1);
    this.hs_zdfOrdCGid = new $hs.Data(1);
    this.hs_zdfNumCGid = new $hs.Data(1);
    this.hs_zdfRealCGid = new $hs.Data(1);
    this.hs_zdfIntegralCGid = new $hs.Data(1);
    this.hs_zdfBitsCGid = new $hs.Data(1);
    this.hs_zdfBoundedCSsizze = new $hs.Data(1);
    this.hs_zdfStorableCSsizze = new $hs.Data(1);
    this.hs_zdfEnumCSsizze = new $hs.Data(1);
    this.hs_zdfEqCSsizze = new $hs.Data(1);
    this.hs_zdfOrdCSsizze = new $hs.Data(1);
    this.hs_zdfNumCSsizze = new $hs.Data(1);
    this.hs_zdfRealCSsizze = new $hs.Data(1);
    this.hs_zdfIntegralCSsizze = new $hs.Data(1);
    this.hs_zdfBitsCSsizze = new $hs.Data(1);
    this.hs_zdfBoundedCPid = new $hs.Data(1);
    this.hs_zdfStorableCPid = new $hs.Data(1);
    this.hs_zdfEnumCPid = new $hs.Data(1);
    this.hs_zdfEqCPid = new $hs.Data(1);
    this.hs_zdfOrdCPid = new $hs.Data(1);
    this.hs_zdfNumCPid = new $hs.Data(1);
    this.hs_zdfRealCPid = new $hs.Data(1);
    this.hs_zdfIntegralCPid = new $hs.Data(1);
    this.hs_zdfBitsCPid = new $hs.Data(1);
    this.hs_zdfBoundedCOff = new $hs.Data(1);
    this.hs_zdfStorableCOff = new $hs.Data(1);
    this.hs_zdfEnumCOff = new $hs.Data(1);
    this.hs_zdfEqCOff = new $hs.Data(1);
    this.hs_zdfOrdCOff = new $hs.Data(1);
    this.hs_zdfNumCOff = new $hs.Data(1);
    this.hs_zdfRealCOff = new $hs.Data(1);
    this.hs_zdfIntegralCOff = new $hs.Data(1);
    this.hs_zdfBitsCOff = new $hs.Data(1);
    this.hs_zdfBoundedCMode = new $hs.Data(1);
    this.hs_zdfStorableCMode = new $hs.Data(1);
    this.hs_zdfEnumCMode = new $hs.Data(1);
    this.hs_zdfEqCMode = new $hs.Data(1);
    this.hs_zdfOrdCMode = new $hs.Data(1);
    this.hs_zdfNumCMode = new $hs.Data(1);
    this.hs_zdfRealCMode = new $hs.Data(1);
    this.hs_zdfIntegralCMode = new $hs.Data(1);
    this.hs_zdfBitsCMode = new $hs.Data(1);
    this.hs_zdfBoundedCIno = new $hs.Data(1);
    this.hs_zdfStorableCIno = new $hs.Data(1);
    this.hs_zdfEnumCIno = new $hs.Data(1);
    this.hs_zdfEqCIno = new $hs.Data(1);
    this.hs_zdfOrdCIno = new $hs.Data(1);
    this.hs_zdfNumCIno = new $hs.Data(1);
    this.hs_zdfRealCIno = new $hs.Data(1);
    this.hs_zdfIntegralCIno = new $hs.Data(1);
    this.hs_zdfBitsCIno = new $hs.Data(1);
    this.hs_zdfStorableCDev = new $hs.Data(1);
    this.hs_zdfEnumCDev = new $hs.Data(1);
    this.hs_zdfEqCDev = new $hs.Data(1);
    this.hs_zdfOrdCDev = new $hs.Data(1);
    this.hs_zdfNumCDev = new $hs.Data(1);
    this.hs_zdfRealCDev = new $hs.Data(1);
    this.hs_Fd = new $hs.Func(1);
    this.hs_CRLim = new $hs.Func(1);
    this.hs_CTcflag = new $hs.Func(1);
    this.hs_CSpeed = new $hs.Func(1);
    this.hs_CCc = new $hs.Func(1);
    this.hs_CUid = new $hs.Func(1);
    this.hs_CNlink = new $hs.Func(1);
    this.hs_CGid = new $hs.Func(1);
    this.hs_CSsizze = new $hs.Func(1);
    this.hs_CPid = new $hs.Func(1);
    this.hs_COff = new $hs.Func(1);
    this.hs_CMode = new $hs.Func(1);
    this.hs_CIno = new $hs.Func(1);
    this.hs_CDev = new $hs.Func(1);
    this.hs_zdfReadCDev.notEvaluated = true;
    this.hs_zdfReadCDev.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCDev.notEvaluated = true;
    this.hs_zdfShowCDev.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfTypeableCDev.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfReadCIno.notEvaluated = true;
    this.hs_zdfReadCIno.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCIno.notEvaluated = true;
    this.hs_zdfShowCIno.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfTypeableCIno.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfReadCMode.notEvaluated = true;
    this.hs_zdfReadCMode.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCMode.notEvaluated = true;
    this.hs_zdfShowCMode.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfTypeableCMode.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfReadCOff.notEvaluated = true;
    this.hs_zdfReadCOff.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCOff.notEvaluated = true;
    this.hs_zdfShowCOff.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfTypeableCOff.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfReadCPid.notEvaluated = true;
    this.hs_zdfReadCPid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCPid.notEvaluated = true;
    this.hs_zdfShowCPid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfTypeableCPid.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfReadCSsizze.notEvaluated = true;
    this.hs_zdfReadCSsizze.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCSsizze.notEvaluated = true;
    this.hs_zdfShowCSsizze.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfTypeableCSsizze.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfReadCGid.notEvaluated = true;
    this.hs_zdfReadCGid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCGid.notEvaluated = true;
    this.hs_zdfShowCGid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfTypeableCGid.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfReadCNlink.notEvaluated = true;
    this.hs_zdfReadCNlink.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCNlink.notEvaluated = true;
    this.hs_zdfShowCNlink.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfTypeableCNlink.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfReadCUid.notEvaluated = true;
    this.hs_zdfReadCUid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCUid.notEvaluated = true;
    this.hs_zdfShowCUid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfTypeableCUid.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfReadCCc.notEvaluated = true;
    this.hs_zdfReadCCc.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCCc.notEvaluated = true;
    this.hs_zdfShowCCc.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfTypeableCCc.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfReadCSpeed.notEvaluated = true;
    this.hs_zdfReadCSpeed.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCSpeed.notEvaluated = true;
    this.hs_zdfShowCSpeed.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfTypeableCSpeed.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfReadCTcflag.notEvaluated = true;
    this.hs_zdfReadCTcflag.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCTcflag.notEvaluated = true;
    this.hs_zdfShowCTcflag.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfTypeableCTcflag.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfReadCRLim.notEvaluated = true;
    this.hs_zdfReadCRLim.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowCRLim.notEvaluated = true;
    this.hs_zdfShowCRLim.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfTypeableCRLim.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfReadFd.notEvaluated = true;
    this.hs_zdfReadFd.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfShowFd.notEvaluated = true;
    this.hs_zdfShowFd.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfTypeableFd.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfBoundedFd.notEvaluated = true;
    this.hs_zdfBoundedFd.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableFd.notEvaluated = true;
    this.hs_zdfStorableFd.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumFd.notEvaluated = true;
    this.hs_zdfEnumFd.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqFd.notEvaluated = true;
    this.hs_zdfEqFd.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdFd.notEvaluated = true;
    this.hs_zdfOrdFd.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumFd.notEvaluated = true;
    this.hs_zdfNumFd.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealFd.notEvaluated = true;
    this.hs_zdfRealFd.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralFd.notEvaluated = true;
    this.hs_zdfIntegralFd.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsFd.notEvaluated = true;
    this.hs_zdfBitsFd.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCRLim.notEvaluated = true;
    this.hs_zdfBoundedCRLim.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCRLim.notEvaluated = true;
    this.hs_zdfStorableCRLim.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCRLim.notEvaluated = true;
    this.hs_zdfEnumCRLim.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCRLim.notEvaluated = true;
    this.hs_zdfEqCRLim.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCRLim.notEvaluated = true;
    this.hs_zdfOrdCRLim.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCRLim.notEvaluated = true;
    this.hs_zdfNumCRLim.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCRLim.notEvaluated = true;
    this.hs_zdfRealCRLim.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCRLim.notEvaluated = true;
    this.hs_zdfIntegralCRLim.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCRLim.notEvaluated = true;
    this.hs_zdfBitsCRLim.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCTcflag.notEvaluated = true;
    this.hs_zdfBoundedCTcflag.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCTcflag.notEvaluated = true;
    this.hs_zdfStorableCTcflag.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCTcflag.notEvaluated = true;
    this.hs_zdfEnumCTcflag.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCTcflag.notEvaluated = true;
    this.hs_zdfEqCTcflag.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCTcflag.notEvaluated = true;
    this.hs_zdfOrdCTcflag.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCTcflag.notEvaluated = true;
    this.hs_zdfNumCTcflag.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCTcflag.notEvaluated = true;
    this.hs_zdfRealCTcflag.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCTcflag.notEvaluated = true;
    this.hs_zdfIntegralCTcflag.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCTcflag.notEvaluated = true;
    this.hs_zdfBitsCTcflag.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCSpeed.notEvaluated = true;
    this.hs_zdfStorableCSpeed.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCSpeed.notEvaluated = true;
    this.hs_zdfEnumCSpeed.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCSpeed.notEvaluated = true;
    this.hs_zdfEqCSpeed.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCSpeed.notEvaluated = true;
    this.hs_zdfOrdCSpeed.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCSpeed.notEvaluated = true;
    this.hs_zdfNumCSpeed.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCSpeed.notEvaluated = true;
    this.hs_zdfRealCSpeed.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCCc.notEvaluated = true;
    this.hs_zdfStorableCCc.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCCc.notEvaluated = true;
    this.hs_zdfEnumCCc.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCCc.notEvaluated = true;
    this.hs_zdfEqCCc.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCCc.notEvaluated = true;
    this.hs_zdfOrdCCc.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCCc.notEvaluated = true;
    this.hs_zdfNumCCc.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCCc.notEvaluated = true;
    this.hs_zdfRealCCc.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCUid.notEvaluated = true;
    this.hs_zdfBoundedCUid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCUid.notEvaluated = true;
    this.hs_zdfStorableCUid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCUid.notEvaluated = true;
    this.hs_zdfEnumCUid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCUid.notEvaluated = true;
    this.hs_zdfEqCUid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCUid.notEvaluated = true;
    this.hs_zdfOrdCUid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCUid.notEvaluated = true;
    this.hs_zdfNumCUid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCUid.notEvaluated = true;
    this.hs_zdfRealCUid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCUid.notEvaluated = true;
    this.hs_zdfIntegralCUid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCUid.notEvaluated = true;
    this.hs_zdfBitsCUid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCNlink.notEvaluated = true;
    this.hs_zdfBoundedCNlink.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCNlink.notEvaluated = true;
    this.hs_zdfStorableCNlink.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCNlink.notEvaluated = true;
    this.hs_zdfEnumCNlink.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCNlink.notEvaluated = true;
    this.hs_zdfEqCNlink.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCNlink.notEvaluated = true;
    this.hs_zdfOrdCNlink.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCNlink.notEvaluated = true;
    this.hs_zdfNumCNlink.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCNlink.notEvaluated = true;
    this.hs_zdfRealCNlink.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCNlink.notEvaluated = true;
    this.hs_zdfIntegralCNlink.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCNlink.notEvaluated = true;
    this.hs_zdfBitsCNlink.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCGid.notEvaluated = true;
    this.hs_zdfBoundedCGid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCGid.notEvaluated = true;
    this.hs_zdfStorableCGid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCGid.notEvaluated = true;
    this.hs_zdfEnumCGid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCGid.notEvaluated = true;
    this.hs_zdfEqCGid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCGid.notEvaluated = true;
    this.hs_zdfOrdCGid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCGid.notEvaluated = true;
    this.hs_zdfNumCGid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCGid.notEvaluated = true;
    this.hs_zdfRealCGid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCGid.notEvaluated = true;
    this.hs_zdfIntegralCGid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCGid.notEvaluated = true;
    this.hs_zdfBitsCGid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCSsizze.notEvaluated = true;
    this.hs_zdfBoundedCSsizze.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCSsizze.notEvaluated = true;
    this.hs_zdfStorableCSsizze.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCSsizze.notEvaluated = true;
    this.hs_zdfEnumCSsizze.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCSsizze.notEvaluated = true;
    this.hs_zdfEqCSsizze.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCSsizze.notEvaluated = true;
    this.hs_zdfOrdCSsizze.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCSsizze.notEvaluated = true;
    this.hs_zdfNumCSsizze.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCSsizze.notEvaluated = true;
    this.hs_zdfRealCSsizze.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCSsizze.notEvaluated = true;
    this.hs_zdfIntegralCSsizze.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCSsizze.notEvaluated = true;
    this.hs_zdfBitsCSsizze.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCPid.notEvaluated = true;
    this.hs_zdfBoundedCPid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCPid.notEvaluated = true;
    this.hs_zdfStorableCPid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCPid.notEvaluated = true;
    this.hs_zdfEnumCPid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCPid.notEvaluated = true;
    this.hs_zdfEqCPid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCPid.notEvaluated = true;
    this.hs_zdfOrdCPid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCPid.notEvaluated = true;
    this.hs_zdfNumCPid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCPid.notEvaluated = true;
    this.hs_zdfRealCPid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCPid.notEvaluated = true;
    this.hs_zdfIntegralCPid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCPid.notEvaluated = true;
    this.hs_zdfBitsCPid.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCOff.notEvaluated = true;
    this.hs_zdfBoundedCOff.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCOff.notEvaluated = true;
    this.hs_zdfStorableCOff.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCOff.notEvaluated = true;
    this.hs_zdfEnumCOff.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCOff.notEvaluated = true;
    this.hs_zdfEqCOff.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCOff.notEvaluated = true;
    this.hs_zdfOrdCOff.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCOff.notEvaluated = true;
    this.hs_zdfNumCOff.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCOff.notEvaluated = true;
    this.hs_zdfRealCOff.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCOff.notEvaluated = true;
    this.hs_zdfIntegralCOff.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCOff.notEvaluated = true;
    this.hs_zdfBitsCOff.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCMode.notEvaluated = true;
    this.hs_zdfBoundedCMode.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCMode.notEvaluated = true;
    this.hs_zdfStorableCMode.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCMode.notEvaluated = true;
    this.hs_zdfEnumCMode.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCMode.notEvaluated = true;
    this.hs_zdfEqCMode.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCMode.notEvaluated = true;
    this.hs_zdfOrdCMode.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCMode.notEvaluated = true;
    this.hs_zdfNumCMode.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCMode.notEvaluated = true;
    this.hs_zdfRealCMode.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCMode.notEvaluated = true;
    this.hs_zdfIntegralCMode.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCMode.notEvaluated = true;
    this.hs_zdfBitsCMode.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedCIno.notEvaluated = true;
    this.hs_zdfBoundedCIno.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCIno.notEvaluated = true;
    this.hs_zdfStorableCIno.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCIno.notEvaluated = true;
    this.hs_zdfEnumCIno.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCIno.notEvaluated = true;
    this.hs_zdfEqCIno.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCIno.notEvaluated = true;
    this.hs_zdfOrdCIno.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCIno.notEvaluated = true;
    this.hs_zdfNumCIno.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCIno.notEvaluated = true;
    this.hs_zdfRealCIno.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralCIno.notEvaluated = true;
    this.hs_zdfIntegralCIno.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfBitsCIno.notEvaluated = true;
    this.hs_zdfBitsCIno.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfStorableCDev.notEvaluated = true;
    this.hs_zdfStorableCDev.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEnumCDev.notEvaluated = true;
    this.hs_zdfEnumCDev.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfEqCDev.notEvaluated = true;
    this.hs_zdfEqCDev.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfOrdCDev.notEvaluated = true;
    this.hs_zdfOrdCDev.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfNumCDev.notEvaluated = true;
    this.hs_zdfNumCDev.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_zdfRealCDev.notEvaluated = true;
    this.hs_zdfRealCDev.evaluate = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this;
    };
    this.hs_Fd.notEvaluated = true;
    this.hs_Fd.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CRLim.notEvaluated = true;
    this.hs_CRLim.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CTcflag.notEvaluated = true;
    this.hs_CTcflag.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CSpeed.notEvaluated = true;
    this.hs_CSpeed.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CCc.notEvaluated = true;
    this.hs_CCc.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CUid.notEvaluated = true;
    this.hs_CUid.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CNlink.notEvaluated = true;
    this.hs_CNlink.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CGid.notEvaluated = true;
    this.hs_CGid.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CSsizze.notEvaluated = true;
    this.hs_CSsizze.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CPid.notEvaluated = true;
    this.hs_CPid.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_COff.notEvaluated = true;
    this.hs_COff.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CMode.notEvaluated = true;
    this.hs_CMode.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CIno.notEvaluated = true;
    this.hs_CIno.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_CDev.notEvaluated = true;
    this.hs_CDev.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.SystemziPosixziTypes.initAfterDependencies = function () {
    this.hs_zdfReadCDev.notEvaluated = false;
    this.hs_zdfReadCDev.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCDev.notEvaluated = false;
    this.hs_zdfShowCDev.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCIno.notEvaluated = false;
    this.hs_zdfReadCIno.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCIno.notEvaluated = false;
    this.hs_zdfShowCIno.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCMode.notEvaluated = false;
    this.hs_zdfReadCMode.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCMode.notEvaluated = false;
    this.hs_zdfShowCMode.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCOff.notEvaluated = false;
    this.hs_zdfReadCOff.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCOff.notEvaluated = false;
    this.hs_zdfShowCOff.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCPid.notEvaluated = false;
    this.hs_zdfReadCPid.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCPid.notEvaluated = false;
    this.hs_zdfShowCPid.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCSsizze.notEvaluated = false;
    this.hs_zdfReadCSsizze.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCSsizze.notEvaluated = false;
    this.hs_zdfShowCSsizze.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCGid.notEvaluated = false;
    this.hs_zdfReadCGid.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCGid.notEvaluated = false;
    this.hs_zdfShowCGid.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCNlink.notEvaluated = false;
    this.hs_zdfReadCNlink.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCNlink.notEvaluated = false;
    this.hs_zdfShowCNlink.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCUid.notEvaluated = false;
    this.hs_zdfReadCUid.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCUid.notEvaluated = false;
    this.hs_zdfShowCUid.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCCc.notEvaluated = false;
    this.hs_zdfReadCCc.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCCc.notEvaluated = false;
    this.hs_zdfShowCCc.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCSpeed.notEvaluated = false;
    this.hs_zdfReadCSpeed.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCSpeed.notEvaluated = false;
    this.hs_zdfShowCSpeed.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCTcflag.notEvaluated = false;
    this.hs_zdfReadCTcflag.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCTcflag.notEvaluated = false;
    this.hs_zdfShowCTcflag.evaluate = function () {
        return this;
    };
    this.hs_zdfReadCRLim.notEvaluated = false;
    this.hs_zdfReadCRLim.evaluate = function () {
        return this;
    };
    this.hs_zdfShowCRLim.notEvaluated = false;
    this.hs_zdfShowCRLim.evaluate = function () {
        return this;
    };
    this.hs_zdfReadFd.notEvaluated = false;
    this.hs_zdfReadFd.evaluate = function () {
        return this;
    };
    this.hs_zdfShowFd.notEvaluated = false;
    this.hs_zdfShowFd.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedFd.notEvaluated = false;
    this.hs_zdfBoundedFd.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableFd.notEvaluated = false;
    this.hs_zdfStorableFd.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumFd.notEvaluated = false;
    this.hs_zdfEnumFd.evaluate = function () {
        return this;
    };
    this.hs_zdfEqFd.notEvaluated = false;
    this.hs_zdfEqFd.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdFd.notEvaluated = false;
    this.hs_zdfOrdFd.evaluate = function () {
        return this;
    };
    this.hs_zdfNumFd.notEvaluated = false;
    this.hs_zdfNumFd.evaluate = function () {
        return this;
    };
    this.hs_zdfRealFd.notEvaluated = false;
    this.hs_zdfRealFd.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralFd.notEvaluated = false;
    this.hs_zdfIntegralFd.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsFd.notEvaluated = false;
    this.hs_zdfBitsFd.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCRLim.notEvaluated = false;
    this.hs_zdfBoundedCRLim.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCRLim.notEvaluated = false;
    this.hs_zdfStorableCRLim.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCRLim.notEvaluated = false;
    this.hs_zdfEnumCRLim.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCRLim.notEvaluated = false;
    this.hs_zdfEqCRLim.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCRLim.notEvaluated = false;
    this.hs_zdfOrdCRLim.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCRLim.notEvaluated = false;
    this.hs_zdfNumCRLim.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCRLim.notEvaluated = false;
    this.hs_zdfRealCRLim.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCRLim.notEvaluated = false;
    this.hs_zdfIntegralCRLim.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCRLim.notEvaluated = false;
    this.hs_zdfBitsCRLim.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCTcflag.notEvaluated = false;
    this.hs_zdfBoundedCTcflag.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCTcflag.notEvaluated = false;
    this.hs_zdfStorableCTcflag.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCTcflag.notEvaluated = false;
    this.hs_zdfEnumCTcflag.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCTcflag.notEvaluated = false;
    this.hs_zdfEqCTcflag.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCTcflag.notEvaluated = false;
    this.hs_zdfOrdCTcflag.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCTcflag.notEvaluated = false;
    this.hs_zdfNumCTcflag.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCTcflag.notEvaluated = false;
    this.hs_zdfRealCTcflag.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCTcflag.notEvaluated = false;
    this.hs_zdfIntegralCTcflag.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCTcflag.notEvaluated = false;
    this.hs_zdfBitsCTcflag.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCSpeed.notEvaluated = false;
    this.hs_zdfStorableCSpeed.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCSpeed.notEvaluated = false;
    this.hs_zdfEnumCSpeed.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCSpeed.notEvaluated = false;
    this.hs_zdfEqCSpeed.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCSpeed.notEvaluated = false;
    this.hs_zdfOrdCSpeed.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCSpeed.notEvaluated = false;
    this.hs_zdfNumCSpeed.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCSpeed.notEvaluated = false;
    this.hs_zdfRealCSpeed.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCCc.notEvaluated = false;
    this.hs_zdfStorableCCc.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCCc.notEvaluated = false;
    this.hs_zdfEnumCCc.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCCc.notEvaluated = false;
    this.hs_zdfEqCCc.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCCc.notEvaluated = false;
    this.hs_zdfOrdCCc.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCCc.notEvaluated = false;
    this.hs_zdfNumCCc.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCCc.notEvaluated = false;
    this.hs_zdfRealCCc.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCUid.notEvaluated = false;
    this.hs_zdfBoundedCUid.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCUid.notEvaluated = false;
    this.hs_zdfStorableCUid.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCUid.notEvaluated = false;
    this.hs_zdfEnumCUid.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCUid.notEvaluated = false;
    this.hs_zdfEqCUid.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCUid.notEvaluated = false;
    this.hs_zdfOrdCUid.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCUid.notEvaluated = false;
    this.hs_zdfNumCUid.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCUid.notEvaluated = false;
    this.hs_zdfRealCUid.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCUid.notEvaluated = false;
    this.hs_zdfIntegralCUid.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCUid.notEvaluated = false;
    this.hs_zdfBitsCUid.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCNlink.notEvaluated = false;
    this.hs_zdfBoundedCNlink.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCNlink.notEvaluated = false;
    this.hs_zdfStorableCNlink.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCNlink.notEvaluated = false;
    this.hs_zdfEnumCNlink.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCNlink.notEvaluated = false;
    this.hs_zdfEqCNlink.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCNlink.notEvaluated = false;
    this.hs_zdfOrdCNlink.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCNlink.notEvaluated = false;
    this.hs_zdfNumCNlink.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCNlink.notEvaluated = false;
    this.hs_zdfRealCNlink.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCNlink.notEvaluated = false;
    this.hs_zdfIntegralCNlink.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCNlink.notEvaluated = false;
    this.hs_zdfBitsCNlink.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCGid.notEvaluated = false;
    this.hs_zdfBoundedCGid.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCGid.notEvaluated = false;
    this.hs_zdfStorableCGid.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCGid.notEvaluated = false;
    this.hs_zdfEnumCGid.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCGid.notEvaluated = false;
    this.hs_zdfEqCGid.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCGid.notEvaluated = false;
    this.hs_zdfOrdCGid.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCGid.notEvaluated = false;
    this.hs_zdfNumCGid.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCGid.notEvaluated = false;
    this.hs_zdfRealCGid.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCGid.notEvaluated = false;
    this.hs_zdfIntegralCGid.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCGid.notEvaluated = false;
    this.hs_zdfBitsCGid.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCSsizze.notEvaluated = false;
    this.hs_zdfBoundedCSsizze.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCSsizze.notEvaluated = false;
    this.hs_zdfStorableCSsizze.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCSsizze.notEvaluated = false;
    this.hs_zdfEnumCSsizze.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCSsizze.notEvaluated = false;
    this.hs_zdfEqCSsizze.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCSsizze.notEvaluated = false;
    this.hs_zdfOrdCSsizze.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCSsizze.notEvaluated = false;
    this.hs_zdfNumCSsizze.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCSsizze.notEvaluated = false;
    this.hs_zdfRealCSsizze.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCSsizze.notEvaluated = false;
    this.hs_zdfIntegralCSsizze.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCSsizze.notEvaluated = false;
    this.hs_zdfBitsCSsizze.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCPid.notEvaluated = false;
    this.hs_zdfBoundedCPid.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCPid.notEvaluated = false;
    this.hs_zdfStorableCPid.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCPid.notEvaluated = false;
    this.hs_zdfEnumCPid.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCPid.notEvaluated = false;
    this.hs_zdfEqCPid.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCPid.notEvaluated = false;
    this.hs_zdfOrdCPid.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCPid.notEvaluated = false;
    this.hs_zdfNumCPid.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCPid.notEvaluated = false;
    this.hs_zdfRealCPid.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCPid.notEvaluated = false;
    this.hs_zdfIntegralCPid.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCPid.notEvaluated = false;
    this.hs_zdfBitsCPid.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCOff.notEvaluated = false;
    this.hs_zdfBoundedCOff.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCOff.notEvaluated = false;
    this.hs_zdfStorableCOff.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCOff.notEvaluated = false;
    this.hs_zdfEnumCOff.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCOff.notEvaluated = false;
    this.hs_zdfEqCOff.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCOff.notEvaluated = false;
    this.hs_zdfOrdCOff.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCOff.notEvaluated = false;
    this.hs_zdfNumCOff.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCOff.notEvaluated = false;
    this.hs_zdfRealCOff.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCOff.notEvaluated = false;
    this.hs_zdfIntegralCOff.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCOff.notEvaluated = false;
    this.hs_zdfBitsCOff.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCMode.notEvaluated = false;
    this.hs_zdfBoundedCMode.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCMode.notEvaluated = false;
    this.hs_zdfStorableCMode.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCMode.notEvaluated = false;
    this.hs_zdfEnumCMode.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCMode.notEvaluated = false;
    this.hs_zdfEqCMode.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCMode.notEvaluated = false;
    this.hs_zdfOrdCMode.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCMode.notEvaluated = false;
    this.hs_zdfNumCMode.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCMode.notEvaluated = false;
    this.hs_zdfRealCMode.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCMode.notEvaluated = false;
    this.hs_zdfIntegralCMode.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCMode.notEvaluated = false;
    this.hs_zdfBitsCMode.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedCIno.notEvaluated = false;
    this.hs_zdfBoundedCIno.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCIno.notEvaluated = false;
    this.hs_zdfStorableCIno.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCIno.notEvaluated = false;
    this.hs_zdfEnumCIno.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCIno.notEvaluated = false;
    this.hs_zdfEqCIno.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCIno.notEvaluated = false;
    this.hs_zdfOrdCIno.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCIno.notEvaluated = false;
    this.hs_zdfNumCIno.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCIno.notEvaluated = false;
    this.hs_zdfRealCIno.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralCIno.notEvaluated = false;
    this.hs_zdfIntegralCIno.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsCIno.notEvaluated = false;
    this.hs_zdfBitsCIno.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableCDev.notEvaluated = false;
    this.hs_zdfStorableCDev.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumCDev.notEvaluated = false;
    this.hs_zdfEnumCDev.evaluate = function () {
        return this;
    };
    this.hs_zdfEqCDev.notEvaluated = false;
    this.hs_zdfEqCDev.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdCDev.notEvaluated = false;
    this.hs_zdfOrdCDev.evaluate = function () {
        return this;
    };
    this.hs_zdfNumCDev.notEvaluated = false;
    this.hs_zdfNumCDev.evaluate = function () {
        return this;
    };
    this.hs_zdfRealCDev.notEvaluated = false;
    this.hs_zdfRealCDev.evaluate = function () {
        return this;
    };
    this.hs_Fd.notEvaluated = false;
    this.hs_CRLim.notEvaluated = false;
    this.hs_CTcflag.notEvaluated = false;
    this.hs_CSpeed.notEvaluated = false;
    this.hs_CCc.notEvaluated = false;
    this.hs_CUid.notEvaluated = false;
    this.hs_CNlink.notEvaluated = false;
    this.hs_CGid.notEvaluated = false;
    this.hs_CSsizze.notEvaluated = false;
    this.hs_CPid.notEvaluated = false;
    this.hs_COff.notEvaluated = false;
    this.hs_CMode.notEvaluated = false;
    this.hs_CIno.notEvaluated = false;
    this.hs_CDev.notEvaluated = false;
    var hs_sat26DPub = new $hs.Thunk();
    var hs_tyConFd25tWTN = new $hs.Thunk();
    var hs_sat26DPuc = new $hs.Thunk();
    var hs_tyConCRlim25tWTL = new $hs.Thunk();
    var hs_sat26DPud = new $hs.Thunk();
    var hs_tyConCTcflag25tWTJ = new $hs.Thunk();
    var hs_sat26DPue = new $hs.Thunk();
    var hs_tyConCSpeed25tWTH = new $hs.Thunk();
    var hs_sat26DPuf = new $hs.Thunk();
    var hs_tyConCCc25tWTF = new $hs.Thunk();
    var hs_sat26DPug = new $hs.Thunk();
    var hs_tyConCUid25tWTD = new $hs.Thunk();
    var hs_sat26DPuh = new $hs.Thunk();
    var hs_tyConCNlink25tWTB = new $hs.Thunk();
    var hs_sat26DPui = new $hs.Thunk();
    var hs_tyConCGid25tWTz = new $hs.Thunk();
    var hs_sat26DPuj = new $hs.Thunk();
    var hs_tyConCSsizze25tWTx = new $hs.Thunk();
    var hs_sat26DPuk = new $hs.Thunk();
    var hs_tyConCPid25tWTv = new $hs.Thunk();
    var hs_sat26DPul = new $hs.Thunk();
    var hs_tyConCOff25tWTt = new $hs.Thunk();
    var hs_sat26DPum = new $hs.Thunk();
    var hs_tyConCMode25tWTr = new $hs.Thunk();
    var hs_sat26DPun = new $hs.Thunk();
    var hs_tyConCIno25tWTp = new $hs.Thunk();
    var hs_sat26DPuo = new $hs.Thunk();
    var hs_tyConCDev25tWTn = new $hs.Thunk();
    var hs_a25vq5m = new $hs.Thunk();
    var hs_zdcreadList25vq5o = new $hs.Thunk();
    var hs_a125vq5q = new $hs.Thunk();
    var hs_zdcreadsPrec25vq5s = new $hs.Thunk();
    var hs_zdcreadListPrec25vq5u = new $hs.Thunk();
    var hs_zdcreadPrec25vq5w = new $hs.Thunk();
    var hs_a225vq5y = new $hs.Thunk();
    var hs_zdcshowList25vq5A = new $hs.Thunk();
    var hs_a325vq5C = new $hs.Thunk();
    var hs_zdcshow25vq5E = new $hs.Thunk();
    var hs_a425vq5G = new $hs.Thunk();
    var hs_zdcshowsPrec25vq5I = new $hs.Thunk();
    var hs_zdctypeOf25vq5K = new $hs.Func(1);
    var hs_a525vq5O = new $hs.Thunk();
    var hs_zdcreadList125vq5Q = new $hs.Thunk();
    var hs_a625vq5S = new $hs.Thunk();
    var hs_zdcreadsPrec125vq5U = new $hs.Thunk();
    var hs_zdcreadListPrec125vq5W = new $hs.Thunk();
    var hs_zdcreadPrec125vq5Y = new $hs.Thunk();
    var hs_a725vq60 = new $hs.Thunk();
    var hs_zdcshowList125vq62 = new $hs.Thunk();
    var hs_a825vq64 = new $hs.Thunk();
    var hs_zdcshow125vq66 = new $hs.Thunk();
    var hs_a925vq68 = new $hs.Thunk();
    var hs_zdcshowsPrec125vq6a = new $hs.Thunk();
    var hs_zdctypeOf125vq6c = new $hs.Func(1);
    var hs_a1025vq6g = new $hs.Thunk();
    var hs_zdcreadList225vq6i = new $hs.Thunk();
    var hs_a1125vq6k = new $hs.Thunk();
    var hs_zdcreadsPrec225vq6m = new $hs.Thunk();
    var hs_zdcreadListPrec225vq6o = new $hs.Thunk();
    var hs_zdcreadPrec225vq6q = new $hs.Thunk();
    var hs_a1225vq6s = new $hs.Thunk();
    var hs_zdcshowList225vq6u = new $hs.Thunk();
    var hs_a1325vq6w = new $hs.Thunk();
    var hs_zdcshow225vq6y = new $hs.Thunk();
    var hs_a1425vq6A = new $hs.Thunk();
    var hs_zdcshowsPrec225vq6C = new $hs.Thunk();
    var hs_zdctypeOf225vq6E = new $hs.Func(1);
    var hs_a1525vq6I = new $hs.Thunk();
    var hs_zdcreadList325vq6K = new $hs.Thunk();
    var hs_a1625vq6M = new $hs.Thunk();
    var hs_zdcreadsPrec325vq6O = new $hs.Thunk();
    var hs_zdcreadListPrec325vq6Q = new $hs.Thunk();
    var hs_zdcreadPrec325vq6S = new $hs.Thunk();
    var hs_a1725vq6U = new $hs.Thunk();
    var hs_zdcshowList325vq6W = new $hs.Thunk();
    var hs_a1825vq6Y = new $hs.Thunk();
    var hs_zdcshow325vq70 = new $hs.Thunk();
    var hs_a1925vq72 = new $hs.Thunk();
    var hs_zdcshowsPrec325vq74 = new $hs.Thunk();
    var hs_zdctypeOf325vq76 = new $hs.Func(1);
    var hs_a2025vq7a = new $hs.Thunk();
    var hs_zdcreadList425vq7c = new $hs.Thunk();
    var hs_a2125vq7e = new $hs.Thunk();
    var hs_zdcreadsPrec425vq7g = new $hs.Thunk();
    var hs_zdcreadListPrec425vq7i = new $hs.Thunk();
    var hs_zdcreadPrec425vq7k = new $hs.Thunk();
    var hs_a2225vq7m = new $hs.Thunk();
    var hs_zdcshowList425vq7o = new $hs.Thunk();
    var hs_a2325vq7q = new $hs.Thunk();
    var hs_zdcshow425vq7s = new $hs.Thunk();
    var hs_a2425vq7u = new $hs.Thunk();
    var hs_zdcshowsPrec425vq7w = new $hs.Thunk();
    var hs_zdctypeOf425vq7y = new $hs.Func(1);
    var hs_a2525vq7C = new $hs.Thunk();
    var hs_zdcreadList525vq7E = new $hs.Thunk();
    var hs_a2625vq7G = new $hs.Thunk();
    var hs_zdcreadsPrec525vq7I = new $hs.Thunk();
    var hs_zdcreadListPrec525vq7K = new $hs.Thunk();
    var hs_zdcreadPrec525vq7M = new $hs.Thunk();
    var hs_a2725vq7O = new $hs.Thunk();
    var hs_zdcshowList525vq7Q = new $hs.Thunk();
    var hs_a2825vq7S = new $hs.Thunk();
    var hs_zdcshow525vq7U = new $hs.Thunk();
    var hs_a2925vq7W = new $hs.Thunk();
    var hs_zdcshowsPrec525vq7Y = new $hs.Thunk();
    var hs_zdctypeOf525vq80 = new $hs.Func(1);
    var hs_a3025vq84 = new $hs.Thunk();
    var hs_zdcreadList625vq86 = new $hs.Thunk();
    var hs_a3125vq88 = new $hs.Thunk();
    var hs_zdcreadsPrec625vq8a = new $hs.Thunk();
    var hs_zdcreadListPrec625vq8c = new $hs.Thunk();
    var hs_zdcreadPrec625vq8e = new $hs.Thunk();
    var hs_a3225vq8g = new $hs.Thunk();
    var hs_zdcshowList625vq8i = new $hs.Thunk();
    var hs_a3325vq8k = new $hs.Thunk();
    var hs_zdcshow625vq8m = new $hs.Thunk();
    var hs_a3425vq8o = new $hs.Thunk();
    var hs_zdcshowsPrec625vq8q = new $hs.Thunk();
    var hs_zdctypeOf625vq8s = new $hs.Func(1);
    var hs_a3525vq8w = new $hs.Thunk();
    var hs_zdcreadList725vq8y = new $hs.Thunk();
    var hs_a3625vq8A = new $hs.Thunk();
    var hs_zdcreadsPrec725vq8C = new $hs.Thunk();
    var hs_zdcreadListPrec725vq8E = new $hs.Thunk();
    var hs_zdcreadPrec725vq8G = new $hs.Thunk();
    var hs_a3725vq8I = new $hs.Thunk();
    var hs_zdcshowList725vq8K = new $hs.Thunk();
    var hs_a3825vq8M = new $hs.Thunk();
    var hs_zdcshow725vq8O = new $hs.Thunk();
    var hs_a3925vq8Q = new $hs.Thunk();
    var hs_zdcshowsPrec725vq8S = new $hs.Thunk();
    var hs_zdctypeOf725vq8U = new $hs.Func(1);
    var hs_a4025vq8Y = new $hs.Thunk();
    var hs_zdcreadList825vq90 = new $hs.Thunk();
    var hs_a4125vq92 = new $hs.Thunk();
    var hs_zdcreadsPrec825vq94 = new $hs.Thunk();
    var hs_zdcreadListPrec825vq96 = new $hs.Thunk();
    var hs_zdcreadPrec825vq98 = new $hs.Thunk();
    var hs_a4225vq9a = new $hs.Thunk();
    var hs_zdcshowList825vq9c = new $hs.Thunk();
    var hs_a4325vq9e = new $hs.Thunk();
    var hs_zdcshow825vq9g = new $hs.Thunk();
    var hs_a4425vq9i = new $hs.Thunk();
    var hs_zdcshowsPrec825vq9k = new $hs.Thunk();
    var hs_zdctypeOf825vq9m = new $hs.Func(1);
    var hs_a4525vq9q = new $hs.Thunk();
    var hs_zdcreadList925vq9s = new $hs.Thunk();
    var hs_a4625vq9u = new $hs.Thunk();
    var hs_zdcreadsPrec925vq9w = new $hs.Thunk();
    var hs_zdcreadListPrec925vq9y = new $hs.Thunk();
    var hs_zdcreadPrec925vq9A = new $hs.Thunk();
    var hs_a4725vq9C = new $hs.Thunk();
    var hs_zdcshowList925vq9E = new $hs.Thunk();
    var hs_a4825vq9G = new $hs.Thunk();
    var hs_zdcshow925vq9I = new $hs.Thunk();
    var hs_a4925vq9K = new $hs.Thunk();
    var hs_zdcshowsPrec925vq9M = new $hs.Thunk();
    var hs_zdctypeOf925vq9O = new $hs.Func(1);
    var hs_a5025vq9S = new $hs.Thunk();
    var hs_zdcreadList1025vq9U = new $hs.Thunk();
    var hs_a5125vq9W = new $hs.Thunk();
    var hs_zdcreadsPrec1025vq9Y = new $hs.Thunk();
    var hs_zdcreadListPrec1025vqa0 = new $hs.Thunk();
    var hs_zdcreadPrec1025vqa2 = new $hs.Thunk();
    var hs_a5225vqa4 = new $hs.Thunk();
    var hs_zdcshowList1025vqa6 = new $hs.Thunk();
    var hs_a5325vqa8 = new $hs.Thunk();
    var hs_zdcshow1025vqaa = new $hs.Thunk();
    var hs_a5425vqac = new $hs.Thunk();
    var hs_zdcshowsPrec1025vqae = new $hs.Thunk();
    var hs_zdctypeOf1025vqag = new $hs.Func(1);
    var hs_a5525vqak = new $hs.Thunk();
    var hs_zdcreadList1125vqam = new $hs.Thunk();
    var hs_a5625vqao = new $hs.Thunk();
    var hs_zdcreadsPrec1125vqaq = new $hs.Thunk();
    var hs_zdcreadListPrec1125vqas = new $hs.Thunk();
    var hs_zdcreadPrec1125vqau = new $hs.Thunk();
    var hs_a5725vqaw = new $hs.Thunk();
    var hs_zdcshowList1125vqay = new $hs.Thunk();
    var hs_a5825vqaA = new $hs.Thunk();
    var hs_zdcshow1125vqaC = new $hs.Thunk();
    var hs_a5925vqaE = new $hs.Thunk();
    var hs_zdcshowsPrec1125vqaG = new $hs.Thunk();
    var hs_zdctypeOf1125vqaI = new $hs.Func(1);
    var hs_a6025vqaM = new $hs.Thunk();
    var hs_zdcreadList1225vqaO = new $hs.Thunk();
    var hs_a6125vqaQ = new $hs.Thunk();
    var hs_zdcreadsPrec1225vqaS = new $hs.Thunk();
    var hs_zdcreadListPrec1225vqaU = new $hs.Thunk();
    var hs_zdcreadPrec1225vqaW = new $hs.Thunk();
    var hs_a6225vqaY = new $hs.Thunk();
    var hs_zdcshowList1225vqb0 = new $hs.Thunk();
    var hs_a6325vqb2 = new $hs.Thunk();
    var hs_zdcshow1225vqb4 = new $hs.Thunk();
    var hs_a6425vqb6 = new $hs.Thunk();
    var hs_zdcshowsPrec1225vqb8 = new $hs.Thunk();
    var hs_zdctypeOf1225vqba = new $hs.Func(1);
    var hs_a6525vqbe = new $hs.Thunk();
    var hs_zdcreadList1325vqbg = new $hs.Thunk();
    var hs_a6625vqbi = new $hs.Thunk();
    var hs_zdcreadsPrec1325vqbk = new $hs.Thunk();
    var hs_zdcreadListPrec1325vqbm = new $hs.Thunk();
    var hs_zdcreadPrec1325vqbo = new $hs.Thunk();
    var hs_a6725vqbq = new $hs.Thunk();
    var hs_zdcshowList1325vqbs = new $hs.Thunk();
    var hs_a6825vqbu = new $hs.Thunk();
    var hs_zdcshow1325vqbw = new $hs.Thunk();
    var hs_a6925vqby = new $hs.Thunk();
    var hs_zdcshowsPrec1325vqbA = new $hs.Thunk();
    var hs_zdctypeOf1325vqbC = new $hs.Func(1);
    var hs_a7025vqbG = new $hs.Thunk();
    var hs_zdczizazi25vqbI = new $hs.Thunk();
    var hs_a7125vqbK = new $hs.Thunk();
    var hs_zdczizbzi25vqbM = new $hs.Thunk();
    var hs_a7225vqbO = new $hs.Thunk();
    var hs_zdcxor25vqbQ = new $hs.Thunk();
    var hs_a7325vqbS = new $hs.Thunk();
    var hs_zdccomplement25vqbU = new $hs.Thunk();
    var hs_a7425vqbW = new $hs.Thunk();
    var hs_zdcshift25vqbY = new $hs.Thunk();
    var hs_a7525vqc0 = new $hs.Thunk();
    var hs_zdcrotate25vqc2 = new $hs.Thunk();
    var hs_a7625vqc4 = new $hs.Thunk();
    var hs_zdcbit25vqc6 = new $hs.Thunk();
    var hs_a7725vqc8 = new $hs.Thunk();
    var hs_zdcsetBit25vqca = new $hs.Thunk();
    var hs_a7825vqcc = new $hs.Thunk();
    var hs_zdcclearBit25vqce = new $hs.Thunk();
    var hs_a7925vqcg = new $hs.Thunk();
    var hs_zdccomplementBit25vqci = new $hs.Thunk();
    var hs_a8025vqck = new $hs.Thunk();
    var hs_zdctestBit25vqcm = new $hs.Thunk();
    var hs_a8125vqco = new $hs.Thunk();
    var hs_zdcbitSizze25vqcq = new $hs.Thunk();
    var hs_a8225vqcs = new $hs.Thunk();
    var hs_zdcisSigned25vqcu = new $hs.Thunk();
    var hs_a8325vqcw = new $hs.Thunk();
    var hs_zdcshiftL25vqcy = new $hs.Thunk();
    var hs_a8425vqcA = new $hs.Thunk();
    var hs_zdcshiftR25vqcC = new $hs.Thunk();
    var hs_a8525vqcE = new $hs.Thunk();
    var hs_zdcrotateL25vqcG = new $hs.Thunk();
    var hs_a8625vqcI = new $hs.Thunk();
    var hs_zdcrotateR25vqcK = new $hs.Thunk();
    var hs_a8725vqcM = new $hs.Thunk();
    var hs_zdcquot25vqcO = new $hs.Thunk();
    var hs_a8825vqcQ = new $hs.Thunk();
    var hs_zdcrem25vqcS = new $hs.Thunk();
    var hs_a8925vqcU = new $hs.Thunk();
    var hs_zdcdiv25vqcW = new $hs.Thunk();
    var hs_a9025vqcY = new $hs.Thunk();
    var hs_zdcmod25vqd0 = new $hs.Thunk();
    var hs_a9125vqd2 = new $hs.Thunk();
    var hs_zdcquotRem25vqd4 = new $hs.Thunk();
    var hs_a9225vqd6 = new $hs.Thunk();
    var hs_zdcdivMod25vqd8 = new $hs.Thunk();
    var hs_a9325vqda = new $hs.Thunk();
    var hs_zdctoInteger25vqdc = new $hs.Thunk();
    var hs_a9425vqde = new $hs.Thunk();
    var hs_zdcminBound25vqdg = new $hs.Thunk();
    var hs_a9525vqdi = new $hs.Thunk();
    var hs_zdcmaxBound25vqdk = new $hs.Thunk();
    var hs_a9625vqdm = new $hs.Thunk();
    var hs_zdctoRational25vqdo = new $hs.Thunk();
    var hs_a9725vqdq = new $hs.Thunk();
    var hs_zdcsizzeOf25vqds = new $hs.Thunk();
    var hs_a9825vqdu = new $hs.Thunk();
    var hs_zdcalignment25vqdw = new $hs.Thunk();
    var hs_a9925vqdy = new $hs.Thunk();
    var hs_zdcpeekElemOff25vqdA = new $hs.Thunk();
    var hs_a10025vqdC = new $hs.Thunk();
    var hs_zdcpokeElemOff25vqdE = new $hs.Thunk();
    var hs_a10125vqdG = new $hs.Thunk();
    var hs_zdcpeekByteOff25vqdI = new $hs.Thunk();
    var hs_a10225vqdK = new $hs.Thunk();
    var hs_zdcpokeByteOff25vqdM = new $hs.Thunk();
    var hs_a10325vqdO = new $hs.Thunk();
    var hs_zdcpeek25vqdQ = new $hs.Thunk();
    var hs_a10425vqdS = new $hs.Thunk();
    var hs_zdcpoke25vqdU = new $hs.Thunk();
    var hs_a10525vqdW = new $hs.Thunk();
    var hs_zdcsucc25vqdY = new $hs.Thunk();
    var hs_a10625vqe0 = new $hs.Thunk();
    var hs_zdcpred25vqe2 = new $hs.Thunk();
    var hs_a10725vqe4 = new $hs.Thunk();
    var hs_zdctoEnum25vqe6 = new $hs.Thunk();
    var hs_a10825vqe8 = new $hs.Thunk();
    var hs_zdcfromEnum25vqea = new $hs.Thunk();
    var hs_a10925vqec = new $hs.Thunk();
    var hs_zdcenumFrom25vqee = new $hs.Thunk();
    var hs_a11025vqeg = new $hs.Thunk();
    var hs_zdcenumFromThen25vqei = new $hs.Thunk();
    var hs_a11125vqek = new $hs.Thunk();
    var hs_zdcenumFromTo25vqem = new $hs.Thunk();
    var hs_a11225vqeo = new $hs.Thunk();
    var hs_zdcenumFromThenTo25vqeq = new $hs.Thunk();
    var hs_a11325vqes = new $hs.Thunk();
    var hs_zdczp25vqeu = new $hs.Thunk();
    var hs_a11425vqew = new $hs.Thunk();
    var hs_zdczt25vqey = new $hs.Thunk();
    var hs_a11525vqeA = new $hs.Thunk();
    var hs_zdczm25vqeC = new $hs.Thunk();
    var hs_a11625vqeE = new $hs.Thunk();
    var hs_zdcnegate25vqeG = new $hs.Thunk();
    var hs_a11725vqeI = new $hs.Thunk();
    var hs_zdcabs25vqeK = new $hs.Thunk();
    var hs_a11825vqeM = new $hs.Thunk();
    var hs_zdcsignum25vqeO = new $hs.Thunk();
    var hs_a11925vqeQ = new $hs.Thunk();
    var hs_zdcfromInteger25vqeS = new $hs.Thunk();
    var hs_a12025vqeU = new $hs.Thunk();
    var hs_zdccompare25vqeW = new $hs.Thunk();
    var hs_a12125vqeY = new $hs.Thunk();
    var hs_zdczl25vqf0 = new $hs.Thunk();
    var hs_a12225vqf2 = new $hs.Thunk();
    var hs_zdczgze25vqf4 = new $hs.Thunk();
    var hs_a12325vqf6 = new $hs.Thunk();
    var hs_zdczg25vqf8 = new $hs.Thunk();
    var hs_a12425vqfa = new $hs.Thunk();
    var hs_zdczlze25vqfc = new $hs.Thunk();
    var hs_a12525vqfe = new $hs.Thunk();
    var hs_zdcmax25vqfg = new $hs.Thunk();
    var hs_a12625vqfi = new $hs.Thunk();
    var hs_zdcmin25vqfk = new $hs.Thunk();
    var hs_a12725vqfm = new $hs.Thunk();
    var hs_zdczeze25vqfo = new $hs.Thunk();
    var hs_a12825vqfq = new $hs.Thunk();
    var hs_zdczsze25vqfs = new $hs.Thunk();
    var hs_a12925vqfu = new $hs.Thunk();
    var hs_zdczizazi125vqfw = new $hs.Thunk();
    var hs_a13025vqfy = new $hs.Thunk();
    var hs_zdczizbzi125vqfA = new $hs.Thunk();
    var hs_a13125vqfC = new $hs.Thunk();
    var hs_zdcxor125vqfE = new $hs.Thunk();
    var hs_a13225vqfG = new $hs.Thunk();
    var hs_zdccomplement125vqfI = new $hs.Thunk();
    var hs_a13325vqfK = new $hs.Thunk();
    var hs_zdcshift125vqfM = new $hs.Thunk();
    var hs_a13425vqfO = new $hs.Thunk();
    var hs_zdcrotate125vqfQ = new $hs.Thunk();
    var hs_a13525vqfS = new $hs.Thunk();
    var hs_zdcbit125vqfU = new $hs.Thunk();
    var hs_a13625vqfW = new $hs.Thunk();
    var hs_zdcsetBit125vqfY = new $hs.Thunk();
    var hs_a13725vqg0 = new $hs.Thunk();
    var hs_zdcclearBit125vqg2 = new $hs.Thunk();
    var hs_a13825vqg4 = new $hs.Thunk();
    var hs_zdccomplementBit125vqg6 = new $hs.Thunk();
    var hs_a13925vqg8 = new $hs.Thunk();
    var hs_zdctestBit125vqga = new $hs.Thunk();
    var hs_a14025vqgc = new $hs.Thunk();
    var hs_zdcbitSizze125vqge = new $hs.Thunk();
    var hs_a14125vqgg = new $hs.Thunk();
    var hs_zdcisSigned125vqgi = new $hs.Thunk();
    var hs_a14225vqgk = new $hs.Thunk();
    var hs_zdcshiftL125vqgm = new $hs.Thunk();
    var hs_a14325vqgo = new $hs.Thunk();
    var hs_zdcshiftR125vqgq = new $hs.Thunk();
    var hs_a14425vqgs = new $hs.Thunk();
    var hs_zdcrotateL125vqgu = new $hs.Thunk();
    var hs_a14525vqgw = new $hs.Thunk();
    var hs_zdcrotateR125vqgy = new $hs.Thunk();
    var hs_a14625vqgA = new $hs.Thunk();
    var hs_zdcquot125vqgC = new $hs.Thunk();
    var hs_a14725vqgE = new $hs.Thunk();
    var hs_zdcrem125vqgG = new $hs.Thunk();
    var hs_a14825vqgI = new $hs.Thunk();
    var hs_zdcdiv125vqgK = new $hs.Thunk();
    var hs_a14925vqgM = new $hs.Thunk();
    var hs_zdcmod125vqgO = new $hs.Thunk();
    var hs_a15025vqgQ = new $hs.Thunk();
    var hs_zdcquotRem125vqgS = new $hs.Thunk();
    var hs_a15125vqgU = new $hs.Thunk();
    var hs_zdcdivMod125vqgW = new $hs.Thunk();
    var hs_a15225vqgY = new $hs.Thunk();
    var hs_zdctoInteger125vqh0 = new $hs.Thunk();
    var hs_a15325vqh2 = new $hs.Thunk();
    var hs_zdcminBound125vqh4 = new $hs.Thunk();
    var hs_a15425vqh6 = new $hs.Thunk();
    var hs_zdcmaxBound125vqh8 = new $hs.Thunk();
    var hs_a15525vqha = new $hs.Thunk();
    var hs_zdctoRational125vqhc = new $hs.Thunk();
    var hs_a15625vqhe = new $hs.Thunk();
    var hs_zdcsizzeOf125vqhg = new $hs.Thunk();
    var hs_a15725vqhi = new $hs.Thunk();
    var hs_zdcalignment125vqhk = new $hs.Thunk();
    var hs_a15825vqhm = new $hs.Thunk();
    var hs_zdcpeekElemOff125vqho = new $hs.Thunk();
    var hs_a15925vqhq = new $hs.Thunk();
    var hs_zdcpokeElemOff125vqhs = new $hs.Thunk();
    var hs_a16025vqhu = new $hs.Thunk();
    var hs_zdcpeekByteOff125vqhw = new $hs.Thunk();
    var hs_a16125vqhy = new $hs.Thunk();
    var hs_zdcpokeByteOff125vqhA = new $hs.Thunk();
    var hs_a16225vqhC = new $hs.Thunk();
    var hs_zdcpeek125vqhE = new $hs.Thunk();
    var hs_a16325vqhG = new $hs.Thunk();
    var hs_zdcpoke125vqhI = new $hs.Thunk();
    var hs_a16425vqhK = new $hs.Thunk();
    var hs_zdcsucc125vqhM = new $hs.Thunk();
    var hs_a16525vqhO = new $hs.Thunk();
    var hs_zdcpred125vqhQ = new $hs.Thunk();
    var hs_a16625vqhS = new $hs.Thunk();
    var hs_zdctoEnum125vqhU = new $hs.Thunk();
    var hs_a16725vqhW = new $hs.Thunk();
    var hs_zdcfromEnum125vqhY = new $hs.Thunk();
    var hs_a16825vqi0 = new $hs.Thunk();
    var hs_zdcenumFrom125vqi2 = new $hs.Thunk();
    var hs_a16925vqi4 = new $hs.Thunk();
    var hs_zdcenumFromThen125vqi6 = new $hs.Thunk();
    var hs_a17025vqi8 = new $hs.Thunk();
    var hs_zdcenumFromTo125vqia = new $hs.Thunk();
    var hs_a17125vqic = new $hs.Thunk();
    var hs_zdcenumFromThenTo125vqie = new $hs.Thunk();
    var hs_a17225vqig = new $hs.Thunk();
    var hs_zdczp125vqii = new $hs.Thunk();
    var hs_a17325vqik = new $hs.Thunk();
    var hs_zdczt125vqim = new $hs.Thunk();
    var hs_a17425vqio = new $hs.Thunk();
    var hs_zdczm125vqiq = new $hs.Thunk();
    var hs_a17525vqis = new $hs.Thunk();
    var hs_zdcnegate125vqiu = new $hs.Thunk();
    var hs_a17625vqiw = new $hs.Thunk();
    var hs_zdcabs125vqiy = new $hs.Thunk();
    var hs_a17725vqiA = new $hs.Thunk();
    var hs_zdcsignum125vqiC = new $hs.Thunk();
    var hs_a17825vqiE = new $hs.Thunk();
    var hs_zdcfromInteger125vqiG = new $hs.Thunk();
    var hs_a17925vqiI = new $hs.Thunk();
    var hs_zdccompare125vqiK = new $hs.Thunk();
    var hs_a18025vqiM = new $hs.Thunk();
    var hs_zdczl125vqiO = new $hs.Thunk();
    var hs_a18125vqiQ = new $hs.Thunk();
    var hs_zdczgze125vqiS = new $hs.Thunk();
    var hs_a18225vqiU = new $hs.Thunk();
    var hs_zdczg125vqiW = new $hs.Thunk();
    var hs_a18325vqiY = new $hs.Thunk();
    var hs_zdczlze125vqj0 = new $hs.Thunk();
    var hs_a18425vqj2 = new $hs.Thunk();
    var hs_zdcmax125vqj4 = new $hs.Thunk();
    var hs_a18525vqj6 = new $hs.Thunk();
    var hs_zdcmin125vqj8 = new $hs.Thunk();
    var hs_a18625vqja = new $hs.Thunk();
    var hs_zdczeze125vqjc = new $hs.Thunk();
    var hs_a18725vqje = new $hs.Thunk();
    var hs_zdczsze125vqjg = new $hs.Thunk();
    var hs_a18825vqji = new $hs.Thunk();
    var hs_zdczizazi225vqjk = new $hs.Thunk();
    var hs_a18925vqjm = new $hs.Thunk();
    var hs_zdczizbzi225vqjo = new $hs.Thunk();
    var hs_a19025vqjq = new $hs.Thunk();
    var hs_zdcxor225vqjs = new $hs.Thunk();
    var hs_a19125vqju = new $hs.Thunk();
    var hs_zdccomplement225vqjw = new $hs.Thunk();
    var hs_a19225vqjy = new $hs.Thunk();
    var hs_zdcshift225vqjA = new $hs.Thunk();
    var hs_a19325vqjC = new $hs.Thunk();
    var hs_zdcrotate225vqjE = new $hs.Thunk();
    var hs_a19425vqjG = new $hs.Thunk();
    var hs_zdcbit225vqjI = new $hs.Thunk();
    var hs_a19525vqjK = new $hs.Thunk();
    var hs_zdcsetBit225vqjM = new $hs.Thunk();
    var hs_a19625vqjO = new $hs.Thunk();
    var hs_zdcclearBit225vqjQ = new $hs.Thunk();
    var hs_a19725vqjS = new $hs.Thunk();
    var hs_zdccomplementBit225vqjU = new $hs.Thunk();
    var hs_a19825vqjW = new $hs.Thunk();
    var hs_zdctestBit225vqjY = new $hs.Thunk();
    var hs_a19925vqk0 = new $hs.Thunk();
    var hs_zdcbitSizze225vqk2 = new $hs.Thunk();
    var hs_a20025vqk4 = new $hs.Thunk();
    var hs_zdcisSigned225vqk6 = new $hs.Thunk();
    var hs_a20125vqk8 = new $hs.Thunk();
    var hs_zdcshiftL225vqka = new $hs.Thunk();
    var hs_a20225vqkc = new $hs.Thunk();
    var hs_zdcshiftR225vqke = new $hs.Thunk();
    var hs_a20325vqkg = new $hs.Thunk();
    var hs_zdcrotateL225vqki = new $hs.Thunk();
    var hs_a20425vqkk = new $hs.Thunk();
    var hs_zdcrotateR225vqkm = new $hs.Thunk();
    var hs_a20525vqko = new $hs.Thunk();
    var hs_zdcquot225vqkq = new $hs.Thunk();
    var hs_a20625vqks = new $hs.Thunk();
    var hs_zdcrem225vqku = new $hs.Thunk();
    var hs_a20725vqkw = new $hs.Thunk();
    var hs_zdcdiv225vqky = new $hs.Thunk();
    var hs_a20825vqkA = new $hs.Thunk();
    var hs_zdcmod225vqkC = new $hs.Thunk();
    var hs_a20925vqkE = new $hs.Thunk();
    var hs_zdcquotRem225vqkG = new $hs.Thunk();
    var hs_a21025vqkI = new $hs.Thunk();
    var hs_zdcdivMod225vqkK = new $hs.Thunk();
    var hs_a21125vqkM = new $hs.Thunk();
    var hs_zdctoInteger225vqkO = new $hs.Thunk();
    var hs_a21225vqkQ = new $hs.Thunk();
    var hs_zdcminBound225vqkS = new $hs.Thunk();
    var hs_a21325vqkU = new $hs.Thunk();
    var hs_zdcmaxBound225vqkW = new $hs.Thunk();
    var hs_a21425vqkY = new $hs.Thunk();
    var hs_zdctoRational225vql0 = new $hs.Thunk();
    var hs_a21525vql2 = new $hs.Thunk();
    var hs_zdcsizzeOf225vql4 = new $hs.Thunk();
    var hs_a21625vql6 = new $hs.Thunk();
    var hs_zdcalignment225vql8 = new $hs.Thunk();
    var hs_a21725vqla = new $hs.Thunk();
    var hs_zdcpeekElemOff225vqlc = new $hs.Thunk();
    var hs_a21825vqle = new $hs.Thunk();
    var hs_zdcpokeElemOff225vqlg = new $hs.Thunk();
    var hs_a21925vqli = new $hs.Thunk();
    var hs_zdcpeekByteOff225vqlk = new $hs.Thunk();
    var hs_a22025vqlm = new $hs.Thunk();
    var hs_zdcpokeByteOff225vqlo = new $hs.Thunk();
    var hs_a22125vqlq = new $hs.Thunk();
    var hs_zdcpeek225vqls = new $hs.Thunk();
    var hs_a22225vqlu = new $hs.Thunk();
    var hs_zdcpoke225vqlw = new $hs.Thunk();
    var hs_a22325vqly = new $hs.Thunk();
    var hs_zdcsucc225vqlA = new $hs.Thunk();
    var hs_a22425vqlC = new $hs.Thunk();
    var hs_zdcpred225vqlE = new $hs.Thunk();
    var hs_a22525vqlG = new $hs.Thunk();
    var hs_zdctoEnum225vqlI = new $hs.Thunk();
    var hs_a22625vqlK = new $hs.Thunk();
    var hs_zdcfromEnum225vqlM = new $hs.Thunk();
    var hs_a22725vqlO = new $hs.Thunk();
    var hs_zdcenumFrom225vqlQ = new $hs.Thunk();
    var hs_a22825vqlS = new $hs.Thunk();
    var hs_zdcenumFromThen225vqlU = new $hs.Thunk();
    var hs_a22925vqlW = new $hs.Thunk();
    var hs_zdcenumFromTo225vqlY = new $hs.Thunk();
    var hs_a23025vqm0 = new $hs.Thunk();
    var hs_zdcenumFromThenTo225vqm2 = new $hs.Thunk();
    var hs_a23125vqm4 = new $hs.Thunk();
    var hs_zdczp225vqm6 = new $hs.Thunk();
    var hs_a23225vqm8 = new $hs.Thunk();
    var hs_zdczt225vqma = new $hs.Thunk();
    var hs_a23325vqmc = new $hs.Thunk();
    var hs_zdczm225vqme = new $hs.Thunk();
    var hs_a23425vqmg = new $hs.Thunk();
    var hs_zdcnegate225vqmi = new $hs.Thunk();
    var hs_a23525vqmk = new $hs.Thunk();
    var hs_zdcabs225vqmm = new $hs.Thunk();
    var hs_a23625vqmo = new $hs.Thunk();
    var hs_zdcsignum225vqmq = new $hs.Thunk();
    var hs_a23725vqms = new $hs.Thunk();
    var hs_zdcfromInteger225vqmu = new $hs.Thunk();
    var hs_a23825vqmw = new $hs.Thunk();
    var hs_zdccompare225vqmy = new $hs.Thunk();
    var hs_a23925vqmA = new $hs.Thunk();
    var hs_zdczl225vqmC = new $hs.Thunk();
    var hs_a24025vqmE = new $hs.Thunk();
    var hs_zdczgze225vqmG = new $hs.Thunk();
    var hs_a24125vqmI = new $hs.Thunk();
    var hs_zdczg225vqmK = new $hs.Thunk();
    var hs_a24225vqmM = new $hs.Thunk();
    var hs_zdczlze225vqmO = new $hs.Thunk();
    var hs_a24325vqmQ = new $hs.Thunk();
    var hs_zdcmax225vqmS = new $hs.Thunk();
    var hs_a24425vqmU = new $hs.Thunk();
    var hs_zdcmin225vqmW = new $hs.Thunk();
    var hs_a24525vqmY = new $hs.Thunk();
    var hs_zdczeze225vqn0 = new $hs.Thunk();
    var hs_a24625vqn2 = new $hs.Thunk();
    var hs_zdczsze225vqn4 = new $hs.Thunk();
    var hs_a24725vqn6 = new $hs.Thunk();
    var hs_zdctoRational325vqn8 = new $hs.Thunk();
    var hs_a24825vqna = new $hs.Thunk();
    var hs_zdcsizzeOf325vqnc = new $hs.Thunk();
    var hs_a24925vqne = new $hs.Thunk();
    var hs_zdcalignment325vqng = new $hs.Thunk();
    var hs_a25025vqni = new $hs.Thunk();
    var hs_zdcpeekElemOff325vqnk = new $hs.Thunk();
    var hs_a25125vqnm = new $hs.Thunk();
    var hs_zdcpokeElemOff325vqno = new $hs.Thunk();
    var hs_a25225vqnq = new $hs.Thunk();
    var hs_zdcpeekByteOff325vqns = new $hs.Thunk();
    var hs_a25325vqnu = new $hs.Thunk();
    var hs_zdcpokeByteOff325vqnw = new $hs.Thunk();
    var hs_a25425vqny = new $hs.Thunk();
    var hs_zdcpeek325vqnA = new $hs.Thunk();
    var hs_a25525vqnC = new $hs.Thunk();
    var hs_zdcpoke325vqnE = new $hs.Thunk();
    var hs_a25625vqnG = new $hs.Thunk();
    var hs_zdcsucc325vqnI = new $hs.Thunk();
    var hs_a25725vqnK = new $hs.Thunk();
    var hs_zdcpred325vqnM = new $hs.Thunk();
    var hs_a25825vqnO = new $hs.Thunk();
    var hs_zdctoEnum325vqnQ = new $hs.Thunk();
    var hs_a25925vqnS = new $hs.Thunk();
    var hs_zdcfromEnum325vqnU = new $hs.Thunk();
    var hs_a26025vqnW = new $hs.Thunk();
    var hs_zdcenumFrom325vqnY = new $hs.Thunk();
    var hs_a26125vqo0 = new $hs.Thunk();
    var hs_zdcenumFromThen325vqo2 = new $hs.Thunk();
    var hs_a26225vqo4 = new $hs.Thunk();
    var hs_zdcenumFromTo325vqo6 = new $hs.Thunk();
    var hs_a26325vqo8 = new $hs.Thunk();
    var hs_zdcenumFromThenTo325vqoa = new $hs.Thunk();
    var hs_a26425vqoc = new $hs.Thunk();
    var hs_zdczp325vqoe = new $hs.Thunk();
    var hs_a26525vqog = new $hs.Thunk();
    var hs_zdczt325vqoi = new $hs.Thunk();
    var hs_a26625vqok = new $hs.Thunk();
    var hs_zdczm325vqom = new $hs.Thunk();
    var hs_a26725vqoo = new $hs.Thunk();
    var hs_zdcnegate325vqoq = new $hs.Thunk();
    var hs_a26825vqos = new $hs.Thunk();
    var hs_zdcabs325vqou = new $hs.Thunk();
    var hs_a26925vqow = new $hs.Thunk();
    var hs_zdcsignum325vqoy = new $hs.Thunk();
    var hs_a27025vqoA = new $hs.Thunk();
    var hs_zdcfromInteger325vqoC = new $hs.Thunk();
    var hs_a27125vqoE = new $hs.Thunk();
    var hs_zdccompare325vqoG = new $hs.Thunk();
    var hs_a27225vqoI = new $hs.Thunk();
    var hs_zdczl325vqoK = new $hs.Thunk();
    var hs_a27325vqoM = new $hs.Thunk();
    var hs_zdczgze325vqoO = new $hs.Thunk();
    var hs_a27425vqoQ = new $hs.Thunk();
    var hs_zdczg325vqoS = new $hs.Thunk();
    var hs_a27525vqoU = new $hs.Thunk();
    var hs_zdczlze325vqoW = new $hs.Thunk();
    var hs_a27625vqoY = new $hs.Thunk();
    var hs_zdcmax325vqp0 = new $hs.Thunk();
    var hs_a27725vqp2 = new $hs.Thunk();
    var hs_zdcmin325vqp4 = new $hs.Thunk();
    var hs_a27825vqp6 = new $hs.Thunk();
    var hs_zdczeze325vqp8 = new $hs.Thunk();
    var hs_a27925vqpa = new $hs.Thunk();
    var hs_zdczsze325vqpc = new $hs.Thunk();
    var hs_a28025vqpe = new $hs.Thunk();
    var hs_zdctoRational425vqpg = new $hs.Thunk();
    var hs_a28125vqpi = new $hs.Thunk();
    var hs_zdcsizzeOf425vqpk = new $hs.Thunk();
    var hs_a28225vqpm = new $hs.Thunk();
    var hs_zdcalignment425vqpo = new $hs.Thunk();
    var hs_a28325vqpq = new $hs.Thunk();
    var hs_zdcpeekElemOff425vqps = new $hs.Thunk();
    var hs_a28425vqpu = new $hs.Thunk();
    var hs_zdcpokeElemOff425vqpw = new $hs.Thunk();
    var hs_a28525vqpy = new $hs.Thunk();
    var hs_zdcpeekByteOff425vqpA = new $hs.Thunk();
    var hs_a28625vqpC = new $hs.Thunk();
    var hs_zdcpokeByteOff425vqpE = new $hs.Thunk();
    var hs_a28725vqpG = new $hs.Thunk();
    var hs_zdcpeek425vqpI = new $hs.Thunk();
    var hs_a28825vqpK = new $hs.Thunk();
    var hs_zdcpoke425vqpM = new $hs.Thunk();
    var hs_a28925vqpO = new $hs.Thunk();
    var hs_zdcsucc425vqpQ = new $hs.Thunk();
    var hs_a29025vqpS = new $hs.Thunk();
    var hs_zdcpred425vqpU = new $hs.Thunk();
    var hs_a29125vqpW = new $hs.Thunk();
    var hs_zdctoEnum425vqpY = new $hs.Thunk();
    var hs_a29225vqq0 = new $hs.Thunk();
    var hs_zdcfromEnum425vqq2 = new $hs.Thunk();
    var hs_a29325vqq4 = new $hs.Thunk();
    var hs_zdcenumFrom425vqq6 = new $hs.Thunk();
    var hs_a29425vqq8 = new $hs.Thunk();
    var hs_zdcenumFromThen425vqqa = new $hs.Thunk();
    var hs_a29525vqqc = new $hs.Thunk();
    var hs_zdcenumFromTo425vqqe = new $hs.Thunk();
    var hs_a29625vqqg = new $hs.Thunk();
    var hs_zdcenumFromThenTo425vqqi = new $hs.Thunk();
    var hs_a29725vqqk = new $hs.Thunk();
    var hs_zdczp425vqqm = new $hs.Thunk();
    var hs_a29825vqqo = new $hs.Thunk();
    var hs_zdczt425vqqq = new $hs.Thunk();
    var hs_a29925vqqs = new $hs.Thunk();
    var hs_zdczm425vqqu = new $hs.Thunk();
    var hs_a30025vqqw = new $hs.Thunk();
    var hs_zdcnegate425vqqy = new $hs.Thunk();
    var hs_a30125vqqA = new $hs.Thunk();
    var hs_zdcabs425vqqC = new $hs.Thunk();
    var hs_a30225vqqE = new $hs.Thunk();
    var hs_zdcsignum425vqqG = new $hs.Thunk();
    var hs_a30325vqqI = new $hs.Thunk();
    var hs_zdcfromInteger425vqqK = new $hs.Thunk();
    var hs_a30425vqqM = new $hs.Thunk();
    var hs_zdccompare425vqqO = new $hs.Thunk();
    var hs_a30525vqqQ = new $hs.Thunk();
    var hs_zdczl425vqqS = new $hs.Thunk();
    var hs_a30625vqqU = new $hs.Thunk();
    var hs_zdczgze425vqqW = new $hs.Thunk();
    var hs_a30725vqqY = new $hs.Thunk();
    var hs_zdczg425vqr0 = new $hs.Thunk();
    var hs_a30825vqr2 = new $hs.Thunk();
    var hs_zdczlze425vqr4 = new $hs.Thunk();
    var hs_a30925vqr6 = new $hs.Thunk();
    var hs_zdcmax425vqr8 = new $hs.Thunk();
    var hs_a31025vqra = new $hs.Thunk();
    var hs_zdcmin425vqrc = new $hs.Thunk();
    var hs_a31125vqre = new $hs.Thunk();
    var hs_zdczeze425vqrg = new $hs.Thunk();
    var hs_a31225vqri = new $hs.Thunk();
    var hs_zdczsze425vqrk = new $hs.Thunk();
    var hs_a31325vqrm = new $hs.Thunk();
    var hs_zdczizazi325vqro = new $hs.Thunk();
    var hs_a31425vqrq = new $hs.Thunk();
    var hs_zdczizbzi325vqrs = new $hs.Thunk();
    var hs_a31525vqru = new $hs.Thunk();
    var hs_zdcxor325vqrw = new $hs.Thunk();
    var hs_a31625vqry = new $hs.Thunk();
    var hs_zdccomplement325vqrA = new $hs.Thunk();
    var hs_a31725vqrC = new $hs.Thunk();
    var hs_zdcshift325vqrE = new $hs.Thunk();
    var hs_a31825vqrG = new $hs.Thunk();
    var hs_zdcrotate325vqrI = new $hs.Thunk();
    var hs_a31925vqrK = new $hs.Thunk();
    var hs_zdcbit325vqrM = new $hs.Thunk();
    var hs_a32025vqrO = new $hs.Thunk();
    var hs_zdcsetBit325vqrQ = new $hs.Thunk();
    var hs_a32125vqrS = new $hs.Thunk();
    var hs_zdcclearBit325vqrU = new $hs.Thunk();
    var hs_a32225vqrW = new $hs.Thunk();
    var hs_zdccomplementBit325vqrY = new $hs.Thunk();
    var hs_a32325vqs0 = new $hs.Thunk();
    var hs_zdctestBit325vqs2 = new $hs.Thunk();
    var hs_a32425vqs4 = new $hs.Thunk();
    var hs_zdcbitSizze325vqs6 = new $hs.Thunk();
    var hs_a32525vqs8 = new $hs.Thunk();
    var hs_zdcisSigned325vqsa = new $hs.Thunk();
    var hs_a32625vqsc = new $hs.Thunk();
    var hs_zdcshiftL325vqse = new $hs.Thunk();
    var hs_a32725vqsg = new $hs.Thunk();
    var hs_zdcshiftR325vqsi = new $hs.Thunk();
    var hs_a32825vqsk = new $hs.Thunk();
    var hs_zdcrotateL325vqsm = new $hs.Thunk();
    var hs_a32925vqso = new $hs.Thunk();
    var hs_zdcrotateR325vqsq = new $hs.Thunk();
    var hs_a33025vqss = new $hs.Thunk();
    var hs_zdcquot325vqsu = new $hs.Thunk();
    var hs_a33125vqsw = new $hs.Thunk();
    var hs_zdcrem325vqsy = new $hs.Thunk();
    var hs_a33225vqsA = new $hs.Thunk();
    var hs_zdcdiv325vqsC = new $hs.Thunk();
    var hs_a33325vqsE = new $hs.Thunk();
    var hs_zdcmod325vqsG = new $hs.Thunk();
    var hs_a33425vqsI = new $hs.Thunk();
    var hs_zdcquotRem325vqsK = new $hs.Thunk();
    var hs_a33525vqsM = new $hs.Thunk();
    var hs_zdcdivMod325vqsO = new $hs.Thunk();
    var hs_a33625vqsQ = new $hs.Thunk();
    var hs_zdctoInteger325vqsS = new $hs.Thunk();
    var hs_a33725vqsU = new $hs.Thunk();
    var hs_zdcminBound325vqsW = new $hs.Thunk();
    var hs_a33825vqsY = new $hs.Thunk();
    var hs_zdcmaxBound325vqt0 = new $hs.Thunk();
    var hs_a33925vqt2 = new $hs.Thunk();
    var hs_zdctoRational525vqt4 = new $hs.Thunk();
    var hs_a34025vqt6 = new $hs.Thunk();
    var hs_zdcsizzeOf525vqt8 = new $hs.Thunk();
    var hs_a34125vqta = new $hs.Thunk();
    var hs_zdcalignment525vqtc = new $hs.Thunk();
    var hs_a34225vqte = new $hs.Thunk();
    var hs_zdcpeekElemOff525vqtg = new $hs.Thunk();
    var hs_a34325vqti = new $hs.Thunk();
    var hs_zdcpokeElemOff525vqtk = new $hs.Thunk();
    var hs_a34425vqtm = new $hs.Thunk();
    var hs_zdcpeekByteOff525vqto = new $hs.Thunk();
    var hs_a34525vqtq = new $hs.Thunk();
    var hs_zdcpokeByteOff525vqts = new $hs.Thunk();
    var hs_a34625vqtu = new $hs.Thunk();
    var hs_zdcpeek525vqtw = new $hs.Thunk();
    var hs_a34725vqty = new $hs.Thunk();
    var hs_zdcpoke525vqtA = new $hs.Thunk();
    var hs_a34825vqtC = new $hs.Thunk();
    var hs_zdcsucc525vqtE = new $hs.Thunk();
    var hs_a34925vqtG = new $hs.Thunk();
    var hs_zdcpred525vqtI = new $hs.Thunk();
    var hs_a35025vqtK = new $hs.Thunk();
    var hs_zdctoEnum525vqtM = new $hs.Thunk();
    var hs_a35125vqtO = new $hs.Thunk();
    var hs_zdcfromEnum525vqtQ = new $hs.Thunk();
    var hs_a35225vqtS = new $hs.Thunk();
    var hs_zdcenumFrom525vqtU = new $hs.Thunk();
    var hs_a35325vqtW = new $hs.Thunk();
    var hs_zdcenumFromThen525vqtY = new $hs.Thunk();
    var hs_a35425vqu0 = new $hs.Thunk();
    var hs_zdcenumFromTo525vqu2 = new $hs.Thunk();
    var hs_a35525vqu4 = new $hs.Thunk();
    var hs_zdcenumFromThenTo525vqu6 = new $hs.Thunk();
    var hs_a35625vqu8 = new $hs.Thunk();
    var hs_zdczp525vqua = new $hs.Thunk();
    var hs_a35725vquc = new $hs.Thunk();
    var hs_zdczt525vque = new $hs.Thunk();
    var hs_a35825vqug = new $hs.Thunk();
    var hs_zdczm525vqui = new $hs.Thunk();
    var hs_a35925vquk = new $hs.Thunk();
    var hs_zdcnegate525vqum = new $hs.Thunk();
    var hs_a36025vquo = new $hs.Thunk();
    var hs_zdcabs525vquq = new $hs.Thunk();
    var hs_a36125vqus = new $hs.Thunk();
    var hs_zdcsignum525vquu = new $hs.Thunk();
    var hs_a36225vquw = new $hs.Thunk();
    var hs_zdcfromInteger525vquy = new $hs.Thunk();
    var hs_a36325vquA = new $hs.Thunk();
    var hs_zdccompare525vquC = new $hs.Thunk();
    var hs_a36425vquE = new $hs.Thunk();
    var hs_zdczl525vquG = new $hs.Thunk();
    var hs_a36525vquI = new $hs.Thunk();
    var hs_zdczgze525vquK = new $hs.Thunk();
    var hs_a36625vquM = new $hs.Thunk();
    var hs_zdczg525vquO = new $hs.Thunk();
    var hs_a36725vquQ = new $hs.Thunk();
    var hs_zdczlze525vquS = new $hs.Thunk();
    var hs_a36825vquU = new $hs.Thunk();
    var hs_zdcmax525vquW = new $hs.Thunk();
    var hs_a36925vquY = new $hs.Thunk();
    var hs_zdcmin525vqv0 = new $hs.Thunk();
    var hs_a37025vqv2 = new $hs.Thunk();
    var hs_zdczeze525vqv4 = new $hs.Thunk();
    var hs_a37125vqv6 = new $hs.Thunk();
    var hs_zdczsze525vqv8 = new $hs.Thunk();
    var hs_a37225vqva = new $hs.Thunk();
    var hs_zdczizazi425vqvc = new $hs.Thunk();
    var hs_a37325vqve = new $hs.Thunk();
    var hs_zdczizbzi425vqvg = new $hs.Thunk();
    var hs_a37425vqvi = new $hs.Thunk();
    var hs_zdcxor425vqvk = new $hs.Thunk();
    var hs_a37525vqvm = new $hs.Thunk();
    var hs_zdccomplement425vqvo = new $hs.Thunk();
    var hs_a37625vqvq = new $hs.Thunk();
    var hs_zdcshift425vqvs = new $hs.Thunk();
    var hs_a37725vqvu = new $hs.Thunk();
    var hs_zdcrotate425vqvw = new $hs.Thunk();
    var hs_a37825vqvy = new $hs.Thunk();
    var hs_zdcbit425vqvA = new $hs.Thunk();
    var hs_a37925vqvC = new $hs.Thunk();
    var hs_zdcsetBit425vqvE = new $hs.Thunk();
    var hs_a38025vqvG = new $hs.Thunk();
    var hs_zdcclearBit425vqvI = new $hs.Thunk();
    var hs_a38125vqvK = new $hs.Thunk();
    var hs_zdccomplementBit425vqvM = new $hs.Thunk();
    var hs_a38225vqvO = new $hs.Thunk();
    var hs_zdctestBit425vqvQ = new $hs.Thunk();
    var hs_a38325vqvS = new $hs.Thunk();
    var hs_zdcbitSizze425vqvU = new $hs.Thunk();
    var hs_a38425vqvW = new $hs.Thunk();
    var hs_zdcisSigned425vqvY = new $hs.Thunk();
    var hs_a38525vqw0 = new $hs.Thunk();
    var hs_zdcshiftL425vqw2 = new $hs.Thunk();
    var hs_a38625vqw4 = new $hs.Thunk();
    var hs_zdcshiftR425vqw6 = new $hs.Thunk();
    var hs_a38725vqw8 = new $hs.Thunk();
    var hs_zdcrotateL425vqwa = new $hs.Thunk();
    var hs_a38825vqwc = new $hs.Thunk();
    var hs_zdcrotateR425vqwe = new $hs.Thunk();
    var hs_a38925vqwg = new $hs.Thunk();
    var hs_zdcquot425vqwi = new $hs.Thunk();
    var hs_a39025vqwk = new $hs.Thunk();
    var hs_zdcrem425vqwm = new $hs.Thunk();
    var hs_a39125vqwo = new $hs.Thunk();
    var hs_zdcdiv425vqwq = new $hs.Thunk();
    var hs_a39225vqws = new $hs.Thunk();
    var hs_zdcmod425vqwu = new $hs.Thunk();
    var hs_a39325vqww = new $hs.Thunk();
    var hs_zdcquotRem425vqwy = new $hs.Thunk();
    var hs_a39425vqwA = new $hs.Thunk();
    var hs_zdcdivMod425vqwC = new $hs.Thunk();
    var hs_a39525vqwE = new $hs.Thunk();
    var hs_zdctoInteger425vqwG = new $hs.Thunk();
    var hs_a39625vqwI = new $hs.Thunk();
    var hs_zdcminBound425vqwK = new $hs.Thunk();
    var hs_a39725vqwM = new $hs.Thunk();
    var hs_zdcmaxBound425vqwO = new $hs.Thunk();
    var hs_a39825vqwQ = new $hs.Thunk();
    var hs_zdctoRational625vqwS = new $hs.Thunk();
    var hs_a39925vqwU = new $hs.Thunk();
    var hs_zdcsizzeOf625vqwW = new $hs.Thunk();
    var hs_a40025vqwY = new $hs.Thunk();
    var hs_zdcalignment625vqx0 = new $hs.Thunk();
    var hs_a40125vqx2 = new $hs.Thunk();
    var hs_zdcpeekElemOff625vqx4 = new $hs.Thunk();
    var hs_a40225vqx6 = new $hs.Thunk();
    var hs_zdcpokeElemOff625vqx8 = new $hs.Thunk();
    var hs_a40325vqxa = new $hs.Thunk();
    var hs_zdcpeekByteOff625vqxc = new $hs.Thunk();
    var hs_a40425vqxe = new $hs.Thunk();
    var hs_zdcpokeByteOff625vqxg = new $hs.Thunk();
    var hs_a40525vqxi = new $hs.Thunk();
    var hs_zdcpeek625vqxk = new $hs.Thunk();
    var hs_a40625vqxm = new $hs.Thunk();
    var hs_zdcpoke625vqxo = new $hs.Thunk();
    var hs_a40725vqxq = new $hs.Thunk();
    var hs_zdcsucc625vqxs = new $hs.Thunk();
    var hs_a40825vqxu = new $hs.Thunk();
    var hs_zdcpred625vqxw = new $hs.Thunk();
    var hs_a40925vqxy = new $hs.Thunk();
    var hs_zdctoEnum625vqxA = new $hs.Thunk();
    var hs_a41025vqxC = new $hs.Thunk();
    var hs_zdcfromEnum625vqxE = new $hs.Thunk();
    var hs_a41125vqxG = new $hs.Thunk();
    var hs_zdcenumFrom625vqxI = new $hs.Thunk();
    var hs_a41225vqxK = new $hs.Thunk();
    var hs_zdcenumFromThen625vqxM = new $hs.Thunk();
    var hs_a41325vqxO = new $hs.Thunk();
    var hs_zdcenumFromTo625vqxQ = new $hs.Thunk();
    var hs_a41425vqxS = new $hs.Thunk();
    var hs_zdcenumFromThenTo625vqxU = new $hs.Thunk();
    var hs_a41525vqxW = new $hs.Thunk();
    var hs_zdczp625vqxY = new $hs.Thunk();
    var hs_a41625vqy0 = new $hs.Thunk();
    var hs_zdczt625vqy2 = new $hs.Thunk();
    var hs_a41725vqy4 = new $hs.Thunk();
    var hs_zdczm625vqy6 = new $hs.Thunk();
    var hs_a41825vqy8 = new $hs.Thunk();
    var hs_zdcnegate625vqya = new $hs.Thunk();
    var hs_a41925vqyc = new $hs.Thunk();
    var hs_zdcabs625vqye = new $hs.Thunk();
    var hs_a42025vqyg = new $hs.Thunk();
    var hs_zdcsignum625vqyi = new $hs.Thunk();
    var hs_a42125vqyk = new $hs.Thunk();
    var hs_zdcfromInteger625vqym = new $hs.Thunk();
    var hs_a42225vqyo = new $hs.Thunk();
    var hs_zdccompare625vqyq = new $hs.Thunk();
    var hs_a42325vqys = new $hs.Thunk();
    var hs_zdczl625vqyu = new $hs.Thunk();
    var hs_a42425vqyw = new $hs.Thunk();
    var hs_zdczgze625vqyy = new $hs.Thunk();
    var hs_a42525vqyA = new $hs.Thunk();
    var hs_zdczg625vqyC = new $hs.Thunk();
    var hs_a42625vqyE = new $hs.Thunk();
    var hs_zdczlze625vqyG = new $hs.Thunk();
    var hs_a42725vqyI = new $hs.Thunk();
    var hs_zdcmax625vqyK = new $hs.Thunk();
    var hs_a42825vqyM = new $hs.Thunk();
    var hs_zdcmin625vqyO = new $hs.Thunk();
    var hs_a42925vqyQ = new $hs.Thunk();
    var hs_zdczeze625vqyS = new $hs.Thunk();
    var hs_a43025vqyU = new $hs.Thunk();
    var hs_zdczsze625vqyW = new $hs.Thunk();
    var hs_a43125vqyY = new $hs.Thunk();
    var hs_zdczizazi525vqz0 = new $hs.Thunk();
    var hs_a43225vqz2 = new $hs.Thunk();
    var hs_zdczizbzi525vqz4 = new $hs.Thunk();
    var hs_a43325vqz6 = new $hs.Thunk();
    var hs_zdcxor525vqz8 = new $hs.Thunk();
    var hs_a43425vqza = new $hs.Thunk();
    var hs_zdccomplement525vqzc = new $hs.Thunk();
    var hs_a43525vqze = new $hs.Thunk();
    var hs_zdcshift525vqzg = new $hs.Thunk();
    var hs_a43625vqzi = new $hs.Thunk();
    var hs_zdcrotate525vqzk = new $hs.Thunk();
    var hs_a43725vqzm = new $hs.Thunk();
    var hs_zdcbit525vqzo = new $hs.Thunk();
    var hs_a43825vqzq = new $hs.Thunk();
    var hs_zdcsetBit525vqzs = new $hs.Thunk();
    var hs_a43925vqzu = new $hs.Thunk();
    var hs_zdcclearBit525vqzw = new $hs.Thunk();
    var hs_a44025vqzy = new $hs.Thunk();
    var hs_zdccomplementBit525vqzA = new $hs.Thunk();
    var hs_a44125vqzC = new $hs.Thunk();
    var hs_zdctestBit525vqzE = new $hs.Thunk();
    var hs_a44225vqzG = new $hs.Thunk();
    var hs_zdcbitSizze525vqzI = new $hs.Thunk();
    var hs_a44325vqzK = new $hs.Thunk();
    var hs_zdcisSigned525vqzM = new $hs.Thunk();
    var hs_a44425vqzO = new $hs.Thunk();
    var hs_zdcshiftL525vqzQ = new $hs.Thunk();
    var hs_a44525vqzS = new $hs.Thunk();
    var hs_zdcshiftR525vqzU = new $hs.Thunk();
    var hs_a44625vqzW = new $hs.Thunk();
    var hs_zdcrotateL525vqzY = new $hs.Thunk();
    var hs_a44725vqA0 = new $hs.Thunk();
    var hs_zdcrotateR525vqA2 = new $hs.Thunk();
    var hs_a44825vqA4 = new $hs.Thunk();
    var hs_zdcquot525vqA6 = new $hs.Thunk();
    var hs_a44925vqA8 = new $hs.Thunk();
    var hs_zdcrem525vqAa = new $hs.Thunk();
    var hs_a45025vqAc = new $hs.Thunk();
    var hs_zdcdiv525vqAe = new $hs.Thunk();
    var hs_a45125vqAg = new $hs.Thunk();
    var hs_zdcmod525vqAi = new $hs.Thunk();
    var hs_a45225vqAk = new $hs.Thunk();
    var hs_zdcquotRem525vqAm = new $hs.Thunk();
    var hs_a45325vqAo = new $hs.Thunk();
    var hs_zdcdivMod525vqAq = new $hs.Thunk();
    var hs_a45425vqAs = new $hs.Thunk();
    var hs_zdctoInteger525vqAu = new $hs.Thunk();
    var hs_a45525vqAw = new $hs.Thunk();
    var hs_zdcminBound525vqAy = new $hs.Thunk();
    var hs_a45625vqAA = new $hs.Thunk();
    var hs_zdcmaxBound525vqAC = new $hs.Thunk();
    var hs_a45725vqAE = new $hs.Thunk();
    var hs_zdctoRational725vqAG = new $hs.Thunk();
    var hs_a45825vqAI = new $hs.Thunk();
    var hs_zdcsizzeOf725vqAK = new $hs.Thunk();
    var hs_a45925vqAM = new $hs.Thunk();
    var hs_zdcalignment725vqAO = new $hs.Thunk();
    var hs_a46025vqAQ = new $hs.Thunk();
    var hs_zdcpeekElemOff725vqAS = new $hs.Thunk();
    var hs_a46125vqAU = new $hs.Thunk();
    var hs_zdcpokeElemOff725vqAW = new $hs.Thunk();
    var hs_a46225vqAY = new $hs.Thunk();
    var hs_zdcpeekByteOff725vqB0 = new $hs.Thunk();
    var hs_a46325vqB2 = new $hs.Thunk();
    var hs_zdcpokeByteOff725vqB4 = new $hs.Thunk();
    var hs_a46425vqB6 = new $hs.Thunk();
    var hs_zdcpeek725vqB8 = new $hs.Thunk();
    var hs_a46525vqBa = new $hs.Thunk();
    var hs_zdcpoke725vqBc = new $hs.Thunk();
    var hs_a46625vqBe = new $hs.Thunk();
    var hs_zdcsucc725vqBg = new $hs.Thunk();
    var hs_a46725vqBi = new $hs.Thunk();
    var hs_zdcpred725vqBk = new $hs.Thunk();
    var hs_a46825vqBm = new $hs.Thunk();
    var hs_zdctoEnum725vqBo = new $hs.Thunk();
    var hs_a46925vqBq = new $hs.Thunk();
    var hs_zdcfromEnum725vqBs = new $hs.Thunk();
    var hs_a47025vqBu = new $hs.Thunk();
    var hs_zdcenumFrom725vqBw = new $hs.Thunk();
    var hs_a47125vqBy = new $hs.Thunk();
    var hs_zdcenumFromThen725vqBA = new $hs.Thunk();
    var hs_a47225vqBC = new $hs.Thunk();
    var hs_zdcenumFromTo725vqBE = new $hs.Thunk();
    var hs_a47325vqBG = new $hs.Thunk();
    var hs_zdcenumFromThenTo725vqBI = new $hs.Thunk();
    var hs_a47425vqBK = new $hs.Thunk();
    var hs_zdczp725vqBM = new $hs.Thunk();
    var hs_a47525vqBO = new $hs.Thunk();
    var hs_zdczt725vqBQ = new $hs.Thunk();
    var hs_a47625vqBS = new $hs.Thunk();
    var hs_zdczm725vqBU = new $hs.Thunk();
    var hs_a47725vqBW = new $hs.Thunk();
    var hs_zdcnegate725vqBY = new $hs.Thunk();
    var hs_a47825vqC0 = new $hs.Thunk();
    var hs_zdcabs725vqC2 = new $hs.Thunk();
    var hs_a47925vqC4 = new $hs.Thunk();
    var hs_zdcsignum725vqC6 = new $hs.Thunk();
    var hs_a48025vqC8 = new $hs.Thunk();
    var hs_zdcfromInteger725vqCa = new $hs.Thunk();
    var hs_a48125vqCc = new $hs.Thunk();
    var hs_zdccompare725vqCe = new $hs.Thunk();
    var hs_a48225vqCg = new $hs.Thunk();
    var hs_zdczl725vqCi = new $hs.Thunk();
    var hs_a48325vqCk = new $hs.Thunk();
    var hs_zdczgze725vqCm = new $hs.Thunk();
    var hs_a48425vqCo = new $hs.Thunk();
    var hs_zdczg725vqCq = new $hs.Thunk();
    var hs_a48525vqCs = new $hs.Thunk();
    var hs_zdczlze725vqCu = new $hs.Thunk();
    var hs_a48625vqCw = new $hs.Thunk();
    var hs_zdcmax725vqCy = new $hs.Thunk();
    var hs_a48725vqCA = new $hs.Thunk();
    var hs_zdcmin725vqCC = new $hs.Thunk();
    var hs_a48825vqCE = new $hs.Thunk();
    var hs_zdczeze725vqCG = new $hs.Thunk();
    var hs_a48925vqCI = new $hs.Thunk();
    var hs_zdczsze725vqCK = new $hs.Thunk();
    var hs_a49025vqCM = new $hs.Thunk();
    var hs_zdczizazi625vqCO = new $hs.Thunk();
    var hs_a49125vqCQ = new $hs.Thunk();
    var hs_zdczizbzi625vqCS = new $hs.Thunk();
    var hs_a49225vqCU = new $hs.Thunk();
    var hs_zdcxor625vqCW = new $hs.Thunk();
    var hs_a49325vqCY = new $hs.Thunk();
    var hs_zdccomplement625vqD0 = new $hs.Thunk();
    var hs_a49425vqD2 = new $hs.Thunk();
    var hs_zdcshift625vqD4 = new $hs.Thunk();
    var hs_a49525vqD6 = new $hs.Thunk();
    var hs_zdcrotate625vqD8 = new $hs.Thunk();
    var hs_a49625vqDa = new $hs.Thunk();
    var hs_zdcbit625vqDc = new $hs.Thunk();
    var hs_a49725vqDe = new $hs.Thunk();
    var hs_zdcsetBit625vqDg = new $hs.Thunk();
    var hs_a49825vqDi = new $hs.Thunk();
    var hs_zdcclearBit625vqDk = new $hs.Thunk();
    var hs_a49925vqDm = new $hs.Thunk();
    var hs_zdccomplementBit625vqDo = new $hs.Thunk();
    var hs_a50025vqDq = new $hs.Thunk();
    var hs_zdctestBit625vqDs = new $hs.Thunk();
    var hs_a50125vqDu = new $hs.Thunk();
    var hs_zdcbitSizze625vqDw = new $hs.Thunk();
    var hs_a50225vqDy = new $hs.Thunk();
    var hs_zdcisSigned625vqDA = new $hs.Thunk();
    var hs_a50325vqDC = new $hs.Thunk();
    var hs_zdcshiftL625vqDE = new $hs.Thunk();
    var hs_a50425vqDG = new $hs.Thunk();
    var hs_zdcshiftR625vqDI = new $hs.Thunk();
    var hs_a50525vqDK = new $hs.Thunk();
    var hs_zdcrotateL625vqDM = new $hs.Thunk();
    var hs_a50625vqDO = new $hs.Thunk();
    var hs_zdcrotateR625vqDQ = new $hs.Thunk();
    var hs_a50725vqDS = new $hs.Thunk();
    var hs_zdcquot625vqDU = new $hs.Thunk();
    var hs_a50825vqDW = new $hs.Thunk();
    var hs_zdcrem625vqDY = new $hs.Thunk();
    var hs_a50925vqE0 = new $hs.Thunk();
    var hs_zdcdiv625vqE2 = new $hs.Thunk();
    var hs_a51025vqE4 = new $hs.Thunk();
    var hs_zdcmod625vqE6 = new $hs.Thunk();
    var hs_a51125vqE8 = new $hs.Thunk();
    var hs_zdcquotRem625vqEa = new $hs.Thunk();
    var hs_a51225vqEc = new $hs.Thunk();
    var hs_zdcdivMod625vqEe = new $hs.Thunk();
    var hs_a51325vqEg = new $hs.Thunk();
    var hs_zdctoInteger625vqEi = new $hs.Thunk();
    var hs_a51425vqEk = new $hs.Thunk();
    var hs_zdcminBound625vqEm = new $hs.Thunk();
    var hs_a51525vqEo = new $hs.Thunk();
    var hs_zdcmaxBound625vqEq = new $hs.Thunk();
    var hs_a51625vqEs = new $hs.Thunk();
    var hs_zdctoRational825vqEu = new $hs.Thunk();
    var hs_a51725vqEw = new $hs.Thunk();
    var hs_zdcsizzeOf825vqEy = new $hs.Thunk();
    var hs_a51825vqEA = new $hs.Thunk();
    var hs_zdcalignment825vqEC = new $hs.Thunk();
    var hs_a51925vqEE = new $hs.Thunk();
    var hs_zdcpeekElemOff825vqEG = new $hs.Thunk();
    var hs_a52025vqEI = new $hs.Thunk();
    var hs_zdcpokeElemOff825vqEK = new $hs.Thunk();
    var hs_a52125vqEM = new $hs.Thunk();
    var hs_zdcpeekByteOff825vqEO = new $hs.Thunk();
    var hs_a52225vqEQ = new $hs.Thunk();
    var hs_zdcpokeByteOff825vqES = new $hs.Thunk();
    var hs_a52325vqEU = new $hs.Thunk();
    var hs_zdcpeek825vqEW = new $hs.Thunk();
    var hs_a52425vqEY = new $hs.Thunk();
    var hs_zdcpoke825vqF0 = new $hs.Thunk();
    var hs_a52525vqF2 = new $hs.Thunk();
    var hs_zdcsucc825vqF4 = new $hs.Thunk();
    var hs_a52625vqF6 = new $hs.Thunk();
    var hs_zdcpred825vqF8 = new $hs.Thunk();
    var hs_a52725vqFa = new $hs.Thunk();
    var hs_zdctoEnum825vqFc = new $hs.Thunk();
    var hs_a52825vqFe = new $hs.Thunk();
    var hs_zdcfromEnum825vqFg = new $hs.Thunk();
    var hs_a52925vqFi = new $hs.Thunk();
    var hs_zdcenumFrom825vqFk = new $hs.Thunk();
    var hs_a53025vqFm = new $hs.Thunk();
    var hs_zdcenumFromThen825vqFo = new $hs.Thunk();
    var hs_a53125vqFq = new $hs.Thunk();
    var hs_zdcenumFromTo825vqFs = new $hs.Thunk();
    var hs_a53225vqFu = new $hs.Thunk();
    var hs_zdcenumFromThenTo825vqFw = new $hs.Thunk();
    var hs_a53325vqFy = new $hs.Thunk();
    var hs_zdczp825vqFA = new $hs.Thunk();
    var hs_a53425vqFC = new $hs.Thunk();
    var hs_zdczt825vqFE = new $hs.Thunk();
    var hs_a53525vqFG = new $hs.Thunk();
    var hs_zdczm825vqFI = new $hs.Thunk();
    var hs_a53625vqFK = new $hs.Thunk();
    var hs_zdcnegate825vqFM = new $hs.Thunk();
    var hs_a53725vqFO = new $hs.Thunk();
    var hs_zdcabs825vqFQ = new $hs.Thunk();
    var hs_a53825vqFS = new $hs.Thunk();
    var hs_zdcsignum825vqFU = new $hs.Thunk();
    var hs_a53925vqFW = new $hs.Thunk();
    var hs_zdcfromInteger825vqFY = new $hs.Thunk();
    var hs_a54025vqG0 = new $hs.Thunk();
    var hs_zdccompare825vqG2 = new $hs.Thunk();
    var hs_a54125vqG4 = new $hs.Thunk();
    var hs_zdczl825vqG6 = new $hs.Thunk();
    var hs_a54225vqG8 = new $hs.Thunk();
    var hs_zdczgze825vqGa = new $hs.Thunk();
    var hs_a54325vqGc = new $hs.Thunk();
    var hs_zdczg825vqGe = new $hs.Thunk();
    var hs_a54425vqGg = new $hs.Thunk();
    var hs_zdczlze825vqGi = new $hs.Thunk();
    var hs_a54525vqGk = new $hs.Thunk();
    var hs_zdcmax825vqGm = new $hs.Thunk();
    var hs_a54625vqGo = new $hs.Thunk();
    var hs_zdcmin825vqGq = new $hs.Thunk();
    var hs_a54725vqGs = new $hs.Thunk();
    var hs_zdczeze825vqGu = new $hs.Thunk();
    var hs_a54825vqGw = new $hs.Thunk();
    var hs_zdczsze825vqGy = new $hs.Thunk();
    var hs_a54925vqGA = new $hs.Thunk();
    var hs_zdczizazi725vqGC = new $hs.Thunk();
    var hs_a55025vqGE = new $hs.Thunk();
    var hs_zdczizbzi725vqGG = new $hs.Thunk();
    var hs_a55125vqGI = new $hs.Thunk();
    var hs_zdcxor725vqGK = new $hs.Thunk();
    var hs_a55225vqGM = new $hs.Thunk();
    var hs_zdccomplement725vqGO = new $hs.Thunk();
    var hs_a55325vqGQ = new $hs.Thunk();
    var hs_zdcshift725vqGS = new $hs.Thunk();
    var hs_a55425vqGU = new $hs.Thunk();
    var hs_zdcrotate725vqGW = new $hs.Thunk();
    var hs_a55525vqGY = new $hs.Thunk();
    var hs_zdcbit725vqH0 = new $hs.Thunk();
    var hs_a55625vqH2 = new $hs.Thunk();
    var hs_zdcsetBit725vqH4 = new $hs.Thunk();
    var hs_a55725vqH6 = new $hs.Thunk();
    var hs_zdcclearBit725vqH8 = new $hs.Thunk();
    var hs_a55825vqHa = new $hs.Thunk();
    var hs_zdccomplementBit725vqHc = new $hs.Thunk();
    var hs_a55925vqHe = new $hs.Thunk();
    var hs_zdctestBit725vqHg = new $hs.Thunk();
    var hs_a56025vqHi = new $hs.Thunk();
    var hs_zdcbitSizze725vqHk = new $hs.Thunk();
    var hs_a56125vqHm = new $hs.Thunk();
    var hs_zdcisSigned725vqHo = new $hs.Thunk();
    var hs_a56225vqHq = new $hs.Thunk();
    var hs_zdcshiftL725vqHs = new $hs.Thunk();
    var hs_a56325vqHu = new $hs.Thunk();
    var hs_zdcshiftR725vqHw = new $hs.Thunk();
    var hs_a56425vqHy = new $hs.Thunk();
    var hs_zdcrotateL725vqHA = new $hs.Thunk();
    var hs_a56525vqHC = new $hs.Thunk();
    var hs_zdcrotateR725vqHE = new $hs.Thunk();
    var hs_a56625vqHG = new $hs.Thunk();
    var hs_zdcquot725vqHI = new $hs.Thunk();
    var hs_a56725vqHK = new $hs.Thunk();
    var hs_zdcrem725vqHM = new $hs.Thunk();
    var hs_a56825vqHO = new $hs.Thunk();
    var hs_zdcdiv725vqHQ = new $hs.Thunk();
    var hs_a56925vqHS = new $hs.Thunk();
    var hs_zdcmod725vqHU = new $hs.Thunk();
    var hs_a57025vqHW = new $hs.Thunk();
    var hs_zdcquotRem725vqHY = new $hs.Thunk();
    var hs_a57125vqI0 = new $hs.Thunk();
    var hs_zdcdivMod725vqI2 = new $hs.Thunk();
    var hs_a57225vqI4 = new $hs.Thunk();
    var hs_zdctoInteger725vqI6 = new $hs.Thunk();
    var hs_a57325vqI8 = new $hs.Thunk();
    var hs_zdcminBound725vqIa = new $hs.Thunk();
    var hs_a57425vqIc = new $hs.Thunk();
    var hs_zdcmaxBound725vqIe = new $hs.Thunk();
    var hs_a57525vqIg = new $hs.Thunk();
    var hs_zdctoRational925vqIi = new $hs.Thunk();
    var hs_a57625vqIk = new $hs.Thunk();
    var hs_zdcsizzeOf925vqIm = new $hs.Thunk();
    var hs_a57725vqIo = new $hs.Thunk();
    var hs_zdcalignment925vqIq = new $hs.Thunk();
    var hs_a57825vqIs = new $hs.Thunk();
    var hs_zdcpeekElemOff925vqIu = new $hs.Thunk();
    var hs_a57925vqIw = new $hs.Thunk();
    var hs_zdcpokeElemOff925vqIy = new $hs.Thunk();
    var hs_a58025vqIA = new $hs.Thunk();
    var hs_zdcpeekByteOff925vqIC = new $hs.Thunk();
    var hs_a58125vqIE = new $hs.Thunk();
    var hs_zdcpokeByteOff925vqIG = new $hs.Thunk();
    var hs_a58225vqII = new $hs.Thunk();
    var hs_zdcpeek925vqIK = new $hs.Thunk();
    var hs_a58325vqIM = new $hs.Thunk();
    var hs_zdcpoke925vqIO = new $hs.Thunk();
    var hs_a58425vqIQ = new $hs.Thunk();
    var hs_zdcsucc925vqIS = new $hs.Thunk();
    var hs_a58525vqIU = new $hs.Thunk();
    var hs_zdcpred925vqIW = new $hs.Thunk();
    var hs_a58625vqIY = new $hs.Thunk();
    var hs_zdctoEnum925vqJ0 = new $hs.Thunk();
    var hs_a58725vqJ2 = new $hs.Thunk();
    var hs_zdcfromEnum925vqJ4 = new $hs.Thunk();
    var hs_a58825vqJ6 = new $hs.Thunk();
    var hs_zdcenumFrom925vqJ8 = new $hs.Thunk();
    var hs_a58925vqJa = new $hs.Thunk();
    var hs_zdcenumFromThen925vqJc = new $hs.Thunk();
    var hs_a59025vqJe = new $hs.Thunk();
    var hs_zdcenumFromTo925vqJg = new $hs.Thunk();
    var hs_a59125vqJi = new $hs.Thunk();
    var hs_zdcenumFromThenTo925vqJk = new $hs.Thunk();
    var hs_a59225vqJm = new $hs.Thunk();
    var hs_zdczp925vqJo = new $hs.Thunk();
    var hs_a59325vqJq = new $hs.Thunk();
    var hs_zdczt925vqJs = new $hs.Thunk();
    var hs_a59425vqJu = new $hs.Thunk();
    var hs_zdczm925vqJw = new $hs.Thunk();
    var hs_a59525vqJy = new $hs.Thunk();
    var hs_zdcnegate925vqJA = new $hs.Thunk();
    var hs_a59625vqJC = new $hs.Thunk();
    var hs_zdcabs925vqJE = new $hs.Thunk();
    var hs_a59725vqJG = new $hs.Thunk();
    var hs_zdcsignum925vqJI = new $hs.Thunk();
    var hs_a59825vqJK = new $hs.Thunk();
    var hs_zdcfromInteger925vqJM = new $hs.Thunk();
    var hs_a59925vqJO = new $hs.Thunk();
    var hs_zdccompare925vqJQ = new $hs.Thunk();
    var hs_a60025vqJS = new $hs.Thunk();
    var hs_zdczl925vqJU = new $hs.Thunk();
    var hs_a60125vqJW = new $hs.Thunk();
    var hs_zdczgze925vqJY = new $hs.Thunk();
    var hs_a60225vqK0 = new $hs.Thunk();
    var hs_zdczg925vqK2 = new $hs.Thunk();
    var hs_a60325vqK4 = new $hs.Thunk();
    var hs_zdczlze925vqK6 = new $hs.Thunk();
    var hs_a60425vqK8 = new $hs.Thunk();
    var hs_zdcmax925vqKa = new $hs.Thunk();
    var hs_a60525vqKc = new $hs.Thunk();
    var hs_zdcmin925vqKe = new $hs.Thunk();
    var hs_a60625vqKg = new $hs.Thunk();
    var hs_zdczeze925vqKi = new $hs.Thunk();
    var hs_a60725vqKk = new $hs.Thunk();
    var hs_zdczsze925vqKm = new $hs.Thunk();
    var hs_a60825vqKo = new $hs.Thunk();
    var hs_zdczizazi825vqKq = new $hs.Thunk();
    var hs_a60925vqKs = new $hs.Thunk();
    var hs_zdczizbzi825vqKu = new $hs.Thunk();
    var hs_a61025vqKw = new $hs.Thunk();
    var hs_zdcxor825vqKy = new $hs.Thunk();
    var hs_a61125vqKA = new $hs.Thunk();
    var hs_zdccomplement825vqKC = new $hs.Thunk();
    var hs_a61225vqKE = new $hs.Thunk();
    var hs_zdcshift825vqKG = new $hs.Thunk();
    var hs_a61325vqKI = new $hs.Thunk();
    var hs_zdcrotate825vqKK = new $hs.Thunk();
    var hs_a61425vqKM = new $hs.Thunk();
    var hs_zdcbit825vqKO = new $hs.Thunk();
    var hs_a61525vqKQ = new $hs.Thunk();
    var hs_zdcsetBit825vqKS = new $hs.Thunk();
    var hs_a61625vqKU = new $hs.Thunk();
    var hs_zdcclearBit825vqKW = new $hs.Thunk();
    var hs_a61725vqKY = new $hs.Thunk();
    var hs_zdccomplementBit825vqL0 = new $hs.Thunk();
    var hs_a61825vqL2 = new $hs.Thunk();
    var hs_zdctestBit825vqL4 = new $hs.Thunk();
    var hs_a61925vqL6 = new $hs.Thunk();
    var hs_zdcbitSizze825vqL8 = new $hs.Thunk();
    var hs_a62025vqLa = new $hs.Thunk();
    var hs_zdcisSigned825vqLc = new $hs.Thunk();
    var hs_a62125vqLe = new $hs.Thunk();
    var hs_zdcshiftL825vqLg = new $hs.Thunk();
    var hs_a62225vqLi = new $hs.Thunk();
    var hs_zdcshiftR825vqLk = new $hs.Thunk();
    var hs_a62325vqLm = new $hs.Thunk();
    var hs_zdcrotateL825vqLo = new $hs.Thunk();
    var hs_a62425vqLq = new $hs.Thunk();
    var hs_zdcrotateR825vqLs = new $hs.Thunk();
    var hs_a62525vqLu = new $hs.Thunk();
    var hs_zdcquot825vqLw = new $hs.Thunk();
    var hs_a62625vqLy = new $hs.Thunk();
    var hs_zdcrem825vqLA = new $hs.Thunk();
    var hs_a62725vqLC = new $hs.Thunk();
    var hs_zdcdiv825vqLE = new $hs.Thunk();
    var hs_a62825vqLG = new $hs.Thunk();
    var hs_zdcmod825vqLI = new $hs.Thunk();
    var hs_a62925vqLK = new $hs.Thunk();
    var hs_zdcquotRem825vqLM = new $hs.Thunk();
    var hs_a63025vqLO = new $hs.Thunk();
    var hs_zdcdivMod825vqLQ = new $hs.Thunk();
    var hs_a63125vqLS = new $hs.Thunk();
    var hs_zdctoInteger825vqLU = new $hs.Thunk();
    var hs_a63225vqLW = new $hs.Thunk();
    var hs_zdcminBound825vqLY = new $hs.Thunk();
    var hs_a63325vqM0 = new $hs.Thunk();
    var hs_zdcmaxBound825vqM2 = new $hs.Thunk();
    var hs_a63425vqM4 = new $hs.Thunk();
    var hs_zdctoRational1025vqM6 = new $hs.Thunk();
    var hs_a63525vqM8 = new $hs.Thunk();
    var hs_zdcsizzeOf1025vqMa = new $hs.Thunk();
    var hs_a63625vqMc = new $hs.Thunk();
    var hs_zdcalignment1025vqMe = new $hs.Thunk();
    var hs_a63725vqMg = new $hs.Thunk();
    var hs_zdcpeekElemOff1025vqMi = new $hs.Thunk();
    var hs_a63825vqMk = new $hs.Thunk();
    var hs_zdcpokeElemOff1025vqMm = new $hs.Thunk();
    var hs_a63925vqMo = new $hs.Thunk();
    var hs_zdcpeekByteOff1025vqMq = new $hs.Thunk();
    var hs_a64025vqMs = new $hs.Thunk();
    var hs_zdcpokeByteOff1025vqMu = new $hs.Thunk();
    var hs_a64125vqMw = new $hs.Thunk();
    var hs_zdcpeek1025vqMy = new $hs.Thunk();
    var hs_a64225vqMA = new $hs.Thunk();
    var hs_zdcpoke1025vqMC = new $hs.Thunk();
    var hs_a64325vqME = new $hs.Thunk();
    var hs_zdcsucc1025vqMG = new $hs.Thunk();
    var hs_a64425vqMI = new $hs.Thunk();
    var hs_zdcpred1025vqMK = new $hs.Thunk();
    var hs_a64525vqMM = new $hs.Thunk();
    var hs_zdctoEnum1025vqMO = new $hs.Thunk();
    var hs_a64625vqMQ = new $hs.Thunk();
    var hs_zdcfromEnum1025vqMS = new $hs.Thunk();
    var hs_a64725vqMU = new $hs.Thunk();
    var hs_zdcenumFrom1025vqMW = new $hs.Thunk();
    var hs_a64825vqMY = new $hs.Thunk();
    var hs_zdcenumFromThen1025vqN0 = new $hs.Thunk();
    var hs_a64925vqN2 = new $hs.Thunk();
    var hs_zdcenumFromTo1025vqN4 = new $hs.Thunk();
    var hs_a65025vqN6 = new $hs.Thunk();
    var hs_zdcenumFromThenTo1025vqN8 = new $hs.Thunk();
    var hs_a65125vqNa = new $hs.Thunk();
    var hs_zdczp1025vqNc = new $hs.Thunk();
    var hs_a65225vqNe = new $hs.Thunk();
    var hs_zdczt1025vqNg = new $hs.Thunk();
    var hs_a65325vqNi = new $hs.Thunk();
    var hs_zdczm1025vqNk = new $hs.Thunk();
    var hs_a65425vqNm = new $hs.Thunk();
    var hs_zdcnegate1025vqNo = new $hs.Thunk();
    var hs_a65525vqNq = new $hs.Thunk();
    var hs_zdcabs1025vqNs = new $hs.Thunk();
    var hs_a65625vqNu = new $hs.Thunk();
    var hs_zdcsignum1025vqNw = new $hs.Thunk();
    var hs_a65725vqNy = new $hs.Thunk();
    var hs_zdcfromInteger1025vqNA = new $hs.Thunk();
    var hs_a65825vqNC = new $hs.Thunk();
    var hs_zdccompare1025vqNE = new $hs.Thunk();
    var hs_a65925vqNG = new $hs.Thunk();
    var hs_zdczl1025vqNI = new $hs.Thunk();
    var hs_a66025vqNK = new $hs.Thunk();
    var hs_zdczgze1025vqNM = new $hs.Thunk();
    var hs_a66125vqNO = new $hs.Thunk();
    var hs_zdczg1025vqNQ = new $hs.Thunk();
    var hs_a66225vqNS = new $hs.Thunk();
    var hs_zdczlze1025vqNU = new $hs.Thunk();
    var hs_a66325vqNW = new $hs.Thunk();
    var hs_zdcmax1025vqNY = new $hs.Thunk();
    var hs_a66425vqO0 = new $hs.Thunk();
    var hs_zdcmin1025vqO2 = new $hs.Thunk();
    var hs_a66525vqO4 = new $hs.Thunk();
    var hs_zdczeze1025vqO6 = new $hs.Thunk();
    var hs_a66625vqO8 = new $hs.Thunk();
    var hs_zdczsze1025vqOa = new $hs.Thunk();
    var hs_a66725vqOc = new $hs.Thunk();
    var hs_zdczizazi925vqOe = new $hs.Thunk();
    var hs_a66825vqOg = new $hs.Thunk();
    var hs_zdczizbzi925vqOi = new $hs.Thunk();
    var hs_a66925vqOk = new $hs.Thunk();
    var hs_zdcxor925vqOm = new $hs.Thunk();
    var hs_a67025vqOo = new $hs.Thunk();
    var hs_zdccomplement925vqOq = new $hs.Thunk();
    var hs_a67125vqOs = new $hs.Thunk();
    var hs_zdcshift925vqOu = new $hs.Thunk();
    var hs_a67225vqOw = new $hs.Thunk();
    var hs_zdcrotate925vqOy = new $hs.Thunk();
    var hs_a67325vqOA = new $hs.Thunk();
    var hs_zdcbit925vqOC = new $hs.Thunk();
    var hs_a67425vqOE = new $hs.Thunk();
    var hs_zdcsetBit925vqOG = new $hs.Thunk();
    var hs_a67525vqOI = new $hs.Thunk();
    var hs_zdcclearBit925vqOK = new $hs.Thunk();
    var hs_a67625vqOM = new $hs.Thunk();
    var hs_zdccomplementBit925vqOO = new $hs.Thunk();
    var hs_a67725vqOQ = new $hs.Thunk();
    var hs_zdctestBit925vqOS = new $hs.Thunk();
    var hs_a67825vqOU = new $hs.Thunk();
    var hs_zdcbitSizze925vqOW = new $hs.Thunk();
    var hs_a67925vqOY = new $hs.Thunk();
    var hs_zdcisSigned925vqP0 = new $hs.Thunk();
    var hs_a68025vqP2 = new $hs.Thunk();
    var hs_zdcshiftL925vqP4 = new $hs.Thunk();
    var hs_a68125vqP6 = new $hs.Thunk();
    var hs_zdcshiftR925vqP8 = new $hs.Thunk();
    var hs_a68225vqPa = new $hs.Thunk();
    var hs_zdcrotateL925vqPc = new $hs.Thunk();
    var hs_a68325vqPe = new $hs.Thunk();
    var hs_zdcrotateR925vqPg = new $hs.Thunk();
    var hs_a68425vqPi = new $hs.Thunk();
    var hs_zdcquot925vqPk = new $hs.Thunk();
    var hs_a68525vqPm = new $hs.Thunk();
    var hs_zdcrem925vqPo = new $hs.Thunk();
    var hs_a68625vqPq = new $hs.Thunk();
    var hs_zdcdiv925vqPs = new $hs.Thunk();
    var hs_a68725vqPu = new $hs.Thunk();
    var hs_zdcmod925vqPw = new $hs.Thunk();
    var hs_a68825vqPy = new $hs.Thunk();
    var hs_zdcquotRem925vqPA = new $hs.Thunk();
    var hs_a68925vqPC = new $hs.Thunk();
    var hs_zdcdivMod925vqPE = new $hs.Thunk();
    var hs_a69025vqPG = new $hs.Thunk();
    var hs_zdctoInteger925vqPI = new $hs.Thunk();
    var hs_a69125vqPK = new $hs.Thunk();
    var hs_zdcminBound925vqPM = new $hs.Thunk();
    var hs_a69225vqPO = new $hs.Thunk();
    var hs_zdcmaxBound925vqPQ = new $hs.Thunk();
    var hs_a69325vqPS = new $hs.Thunk();
    var hs_zdctoRational1125vqPU = new $hs.Thunk();
    var hs_a69425vqPW = new $hs.Thunk();
    var hs_zdcsizzeOf1125vqPY = new $hs.Thunk();
    var hs_a69525vqQ0 = new $hs.Thunk();
    var hs_zdcalignment1125vqQ2 = new $hs.Thunk();
    var hs_a69625vqQ4 = new $hs.Thunk();
    var hs_zdcpeekElemOff1125vqQ6 = new $hs.Thunk();
    var hs_a69725vqQ8 = new $hs.Thunk();
    var hs_zdcpokeElemOff1125vqQa = new $hs.Thunk();
    var hs_a69825vqQc = new $hs.Thunk();
    var hs_zdcpeekByteOff1125vqQe = new $hs.Thunk();
    var hs_a69925vqQg = new $hs.Thunk();
    var hs_zdcpokeByteOff1125vqQi = new $hs.Thunk();
    var hs_a70025vqQk = new $hs.Thunk();
    var hs_zdcpeek1125vqQm = new $hs.Thunk();
    var hs_a70125vqQo = new $hs.Thunk();
    var hs_zdcpoke1125vqQq = new $hs.Thunk();
    var hs_a70225vqQs = new $hs.Thunk();
    var hs_zdcsucc1125vqQu = new $hs.Thunk();
    var hs_a70325vqQw = new $hs.Thunk();
    var hs_zdcpred1125vqQy = new $hs.Thunk();
    var hs_a70425vqQA = new $hs.Thunk();
    var hs_zdctoEnum1125vqQC = new $hs.Thunk();
    var hs_a70525vqQE = new $hs.Thunk();
    var hs_zdcfromEnum1125vqQG = new $hs.Thunk();
    var hs_a70625vqQI = new $hs.Thunk();
    var hs_zdcenumFrom1125vqQK = new $hs.Thunk();
    var hs_a70725vqQM = new $hs.Thunk();
    var hs_zdcenumFromThen1125vqQO = new $hs.Thunk();
    var hs_a70825vqQQ = new $hs.Thunk();
    var hs_zdcenumFromTo1125vqQS = new $hs.Thunk();
    var hs_a70925vqQU = new $hs.Thunk();
    var hs_zdcenumFromThenTo1125vqQW = new $hs.Thunk();
    var hs_a71025vqQY = new $hs.Thunk();
    var hs_zdczp1125vqR0 = new $hs.Thunk();
    var hs_a71125vqR2 = new $hs.Thunk();
    var hs_zdczt1125vqR4 = new $hs.Thunk();
    var hs_a71225vqR6 = new $hs.Thunk();
    var hs_zdczm1125vqR8 = new $hs.Thunk();
    var hs_a71325vqRa = new $hs.Thunk();
    var hs_zdcnegate1125vqRc = new $hs.Thunk();
    var hs_a71425vqRe = new $hs.Thunk();
    var hs_zdcabs1125vqRg = new $hs.Thunk();
    var hs_a71525vqRi = new $hs.Thunk();
    var hs_zdcsignum1125vqRk = new $hs.Thunk();
    var hs_a71625vqRm = new $hs.Thunk();
    var hs_zdcfromInteger1125vqRo = new $hs.Thunk();
    var hs_a71725vqRq = new $hs.Thunk();
    var hs_zdccompare1125vqRs = new $hs.Thunk();
    var hs_a71825vqRu = new $hs.Thunk();
    var hs_zdczl1125vqRw = new $hs.Thunk();
    var hs_a71925vqRy = new $hs.Thunk();
    var hs_zdczgze1125vqRA = new $hs.Thunk();
    var hs_a72025vqRC = new $hs.Thunk();
    var hs_zdczg1125vqRE = new $hs.Thunk();
    var hs_a72125vqRG = new $hs.Thunk();
    var hs_zdczlze1125vqRI = new $hs.Thunk();
    var hs_a72225vqRK = new $hs.Thunk();
    var hs_zdcmax1125vqRM = new $hs.Thunk();
    var hs_a72325vqRO = new $hs.Thunk();
    var hs_zdcmin1125vqRQ = new $hs.Thunk();
    var hs_a72425vqRS = new $hs.Thunk();
    var hs_zdczeze1125vqRU = new $hs.Thunk();
    var hs_a72525vqRW = new $hs.Thunk();
    var hs_zdczsze1125vqRY = new $hs.Thunk();
    var hs_a72625vqS0 = new $hs.Thunk();
    var hs_zdczizazi1025vqS2 = new $hs.Thunk();
    var hs_a72725vqS4 = new $hs.Thunk();
    var hs_zdczizbzi1025vqS6 = new $hs.Thunk();
    var hs_a72825vqS8 = new $hs.Thunk();
    var hs_zdcxor1025vqSa = new $hs.Thunk();
    var hs_a72925vqSc = new $hs.Thunk();
    var hs_zdccomplement1025vqSe = new $hs.Thunk();
    var hs_a73025vqSg = new $hs.Thunk();
    var hs_zdcshift1025vqSi = new $hs.Thunk();
    var hs_a73125vqSk = new $hs.Thunk();
    var hs_zdcrotate1025vqSm = new $hs.Thunk();
    var hs_a73225vqSo = new $hs.Thunk();
    var hs_zdcbit1025vqSq = new $hs.Thunk();
    var hs_a73325vqSs = new $hs.Thunk();
    var hs_zdcsetBit1025vqSu = new $hs.Thunk();
    var hs_a73425vqSw = new $hs.Thunk();
    var hs_zdcclearBit1025vqSy = new $hs.Thunk();
    var hs_a73525vqSA = new $hs.Thunk();
    var hs_zdccomplementBit1025vqSC = new $hs.Thunk();
    var hs_a73625vqSE = new $hs.Thunk();
    var hs_zdctestBit1025vqSG = new $hs.Thunk();
    var hs_a73725vqSI = new $hs.Thunk();
    var hs_zdcbitSizze1025vqSK = new $hs.Thunk();
    var hs_a73825vqSM = new $hs.Thunk();
    var hs_zdcisSigned1025vqSO = new $hs.Thunk();
    var hs_a73925vqSQ = new $hs.Thunk();
    var hs_zdcshiftL1025vqSS = new $hs.Thunk();
    var hs_a74025vqSU = new $hs.Thunk();
    var hs_zdcshiftR1025vqSW = new $hs.Thunk();
    var hs_a74125vqSY = new $hs.Thunk();
    var hs_zdcrotateL1025vqT0 = new $hs.Thunk();
    var hs_a74225vqT2 = new $hs.Thunk();
    var hs_zdcrotateR1025vqT4 = new $hs.Thunk();
    var hs_a74325vqT6 = new $hs.Thunk();
    var hs_zdcquot1025vqT8 = new $hs.Thunk();
    var hs_a74425vqTa = new $hs.Thunk();
    var hs_zdcrem1025vqTc = new $hs.Thunk();
    var hs_a74525vqTe = new $hs.Thunk();
    var hs_zdcdiv1025vqTg = new $hs.Thunk();
    var hs_a74625vqTi = new $hs.Thunk();
    var hs_zdcmod1025vqTk = new $hs.Thunk();
    var hs_a74725vqTm = new $hs.Thunk();
    var hs_zdcquotRem1025vqTo = new $hs.Thunk();
    var hs_a74825vqTq = new $hs.Thunk();
    var hs_zdcdivMod1025vqTs = new $hs.Thunk();
    var hs_a74925vqTu = new $hs.Thunk();
    var hs_zdctoInteger1025vqTw = new $hs.Thunk();
    var hs_a75025vqTy = new $hs.Thunk();
    var hs_zdcminBound1025vqTA = new $hs.Thunk();
    var hs_a75125vqTC = new $hs.Thunk();
    var hs_zdcmaxBound1025vqTE = new $hs.Thunk();
    var hs_a75225vqTG = new $hs.Thunk();
    var hs_zdctoRational1225vqTI = new $hs.Thunk();
    var hs_a75325vqTK = new $hs.Thunk();
    var hs_zdcsizzeOf1225vqTM = new $hs.Thunk();
    var hs_a75425vqTO = new $hs.Thunk();
    var hs_zdcalignment1225vqTQ = new $hs.Thunk();
    var hs_a75525vqTS = new $hs.Thunk();
    var hs_zdcpeekElemOff1225vqTU = new $hs.Thunk();
    var hs_a75625vqTW = new $hs.Thunk();
    var hs_zdcpokeElemOff1225vqTY = new $hs.Thunk();
    var hs_a75725vqU0 = new $hs.Thunk();
    var hs_zdcpeekByteOff1225vqU2 = new $hs.Thunk();
    var hs_a75825vqU4 = new $hs.Thunk();
    var hs_zdcpokeByteOff1225vqU6 = new $hs.Thunk();
    var hs_a75925vqU8 = new $hs.Thunk();
    var hs_zdcpeek1225vqUa = new $hs.Thunk();
    var hs_a76025vqUc = new $hs.Thunk();
    var hs_zdcpoke1225vqUe = new $hs.Thunk();
    var hs_a76125vqUg = new $hs.Thunk();
    var hs_zdcsucc1225vqUi = new $hs.Thunk();
    var hs_a76225vqUk = new $hs.Thunk();
    var hs_zdcpred1225vqUm = new $hs.Thunk();
    var hs_a76325vqUo = new $hs.Thunk();
    var hs_zdctoEnum1225vqUq = new $hs.Thunk();
    var hs_a76425vqUs = new $hs.Thunk();
    var hs_zdcfromEnum1225vqUu = new $hs.Thunk();
    var hs_a76525vqUw = new $hs.Thunk();
    var hs_zdcenumFrom1225vqUy = new $hs.Thunk();
    var hs_a76625vqUA = new $hs.Thunk();
    var hs_zdcenumFromThen1225vqUC = new $hs.Thunk();
    var hs_a76725vqUE = new $hs.Thunk();
    var hs_zdcenumFromTo1225vqUG = new $hs.Thunk();
    var hs_a76825vqUI = new $hs.Thunk();
    var hs_zdcenumFromThenTo1225vqUK = new $hs.Thunk();
    var hs_a76925vqUM = new $hs.Thunk();
    var hs_zdczp1225vqUO = new $hs.Thunk();
    var hs_a77025vqUQ = new $hs.Thunk();
    var hs_zdczt1225vqUS = new $hs.Thunk();
    var hs_a77125vqUU = new $hs.Thunk();
    var hs_zdczm1225vqUW = new $hs.Thunk();
    var hs_a77225vqUY = new $hs.Thunk();
    var hs_zdcnegate1225vqV0 = new $hs.Thunk();
    var hs_a77325vqV2 = new $hs.Thunk();
    var hs_zdcabs1225vqV4 = new $hs.Thunk();
    var hs_a77425vqV6 = new $hs.Thunk();
    var hs_zdcsignum1225vqV8 = new $hs.Thunk();
    var hs_a77525vqVa = new $hs.Thunk();
    var hs_zdcfromInteger1225vqVc = new $hs.Thunk();
    var hs_a77625vqVe = new $hs.Thunk();
    var hs_zdccompare1225vqVg = new $hs.Thunk();
    var hs_a77725vqVi = new $hs.Thunk();
    var hs_zdczl1225vqVk = new $hs.Thunk();
    var hs_a77825vqVm = new $hs.Thunk();
    var hs_zdczgze1225vqVo = new $hs.Thunk();
    var hs_a77925vqVq = new $hs.Thunk();
    var hs_zdczg1225vqVs = new $hs.Thunk();
    var hs_a78025vqVu = new $hs.Thunk();
    var hs_zdczlze1225vqVw = new $hs.Thunk();
    var hs_a78125vqVy = new $hs.Thunk();
    var hs_zdcmax1225vqVA = new $hs.Thunk();
    var hs_a78225vqVC = new $hs.Thunk();
    var hs_zdcmin1225vqVE = new $hs.Thunk();
    var hs_a78325vqVG = new $hs.Thunk();
    var hs_zdczeze1225vqVI = new $hs.Thunk();
    var hs_a78425vqVK = new $hs.Thunk();
    var hs_zdczsze1225vqVM = new $hs.Thunk();
    var hs_a78525vqVO = new $hs.Thunk();
    var hs_zdctoRational1325vqVQ = new $hs.Thunk();
    var hs_a78625vqVS = new $hs.Thunk();
    var hs_zdcsizzeOf1325vqVU = new $hs.Thunk();
    var hs_a78725vqVW = new $hs.Thunk();
    var hs_zdcalignment1325vqVY = new $hs.Thunk();
    var hs_a78825vqW0 = new $hs.Thunk();
    var hs_zdcpeekElemOff1325vqW2 = new $hs.Thunk();
    var hs_a78925vqW4 = new $hs.Thunk();
    var hs_zdcpokeElemOff1325vqW6 = new $hs.Thunk();
    var hs_a79025vqW8 = new $hs.Thunk();
    var hs_zdcpeekByteOff1325vqWa = new $hs.Thunk();
    var hs_a79125vqWc = new $hs.Thunk();
    var hs_zdcpokeByteOff1325vqWe = new $hs.Thunk();
    var hs_a79225vqWg = new $hs.Thunk();
    var hs_zdcpeek1325vqWi = new $hs.Thunk();
    var hs_a79325vqWk = new $hs.Thunk();
    var hs_zdcpoke1325vqWm = new $hs.Thunk();
    var hs_a79425vqWo = new $hs.Thunk();
    var hs_zdcsucc1325vqWq = new $hs.Thunk();
    var hs_a79525vqWs = new $hs.Thunk();
    var hs_zdcpred1325vqWu = new $hs.Thunk();
    var hs_a79625vqWw = new $hs.Thunk();
    var hs_zdctoEnum1325vqWy = new $hs.Thunk();
    var hs_a79725vqWA = new $hs.Thunk();
    var hs_zdcfromEnum1325vqWC = new $hs.Thunk();
    var hs_a79825vqWE = new $hs.Thunk();
    var hs_zdcenumFrom1325vqWG = new $hs.Thunk();
    var hs_a79925vqWI = new $hs.Thunk();
    var hs_zdcenumFromThen1325vqWK = new $hs.Thunk();
    var hs_a80025vqWM = new $hs.Thunk();
    var hs_zdcenumFromTo1325vqWO = new $hs.Thunk();
    var hs_a80125vqWQ = new $hs.Thunk();
    var hs_zdcenumFromThenTo1325vqWS = new $hs.Thunk();
    var hs_a80225vqWU = new $hs.Thunk();
    var hs_zdczp1325vqWW = new $hs.Thunk();
    var hs_a80325vqWY = new $hs.Thunk();
    var hs_zdczt1325vqX0 = new $hs.Thunk();
    var hs_a80425vqX2 = new $hs.Thunk();
    var hs_zdczm1325vqX4 = new $hs.Thunk();
    var hs_a80525vqX6 = new $hs.Thunk();
    var hs_zdcnegate1325vqX8 = new $hs.Thunk();
    var hs_a80625vqXa = new $hs.Thunk();
    var hs_zdcabs1325vqXc = new $hs.Thunk();
    var hs_a80725vqXe = new $hs.Thunk();
    var hs_zdcsignum1325vqXg = new $hs.Thunk();
    var hs_a80825vqXi = new $hs.Thunk();
    var hs_zdcfromInteger1325vqXk = new $hs.Thunk();
    var hs_a80925vqXm = new $hs.Thunk();
    var hs_zdccompare1325vqXo = new $hs.Thunk();
    var hs_a81025vqXq = new $hs.Thunk();
    var hs_zdczl1325vqXs = new $hs.Thunk();
    var hs_a81125vqXu = new $hs.Thunk();
    var hs_zdczgze1325vqXw = new $hs.Thunk();
    var hs_a81225vqXy = new $hs.Thunk();
    var hs_zdczg1325vqXA = new $hs.Thunk();
    var hs_a81325vqXC = new $hs.Thunk();
    var hs_zdczlze1325vqXE = new $hs.Thunk();
    var hs_a81425vqXG = new $hs.Thunk();
    var hs_zdcmax1325vqXI = new $hs.Thunk();
    var hs_a81525vqXK = new $hs.Thunk();
    var hs_zdcmin1325vqXM = new $hs.Thunk();
    var hs_a81625vqXO = new $hs.Thunk();
    var hs_zdczeze1325vqXQ = new $hs.Thunk();
    var hs_a81725vqXS = new $hs.Thunk();
    var hs_zdczsze1325vqXU = new $hs.Thunk();
    hs_sat26DPub.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Fd\x00");
    };
    hs_tyConFd25tWTN.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DPub);
    };
    hs_sat26DPuc.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CRLim\x00");
    };
    hs_tyConCRlim25tWTL.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DPuc);
    };
    hs_sat26DPud.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CTcflag\x00");
    };
    hs_tyConCTcflag25tWTJ.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DPud);
    };
    hs_sat26DPue.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CSpeed\x00");
    };
    hs_tyConCSpeed25tWTH.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DPue);
    };
    hs_sat26DPuf.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CCc\x00");
    };
    hs_tyConCCc25tWTF.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DPuf);
    };
    hs_sat26DPug.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CUid\x00");
    };
    hs_tyConCUid25tWTD.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DPug);
    };
    hs_sat26DPuh.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CNlink\x00");
    };
    hs_tyConCNlink25tWTB.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DPuh);
    };
    hs_sat26DPui.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CGid\x00");
    };
    hs_tyConCGid25tWTz.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DPui);
    };
    hs_sat26DPuj.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CSsize\x00");
    };
    hs_tyConCSsizze25tWTx.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DPuj);
    };
    hs_sat26DPuk.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CPid\x00");
    };
    hs_tyConCPid25tWTv.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DPuk);
    };
    hs_sat26DPul.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("COff\x00");
    };
    hs_tyConCOff25tWTt.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DPul);
    };
    hs_sat26DPum.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CMode\x00");
    };
    hs_tyConCMode25tWTr.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DPum);
    };
    hs_sat26DPun.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CIno\x00");
    };
    hs_tyConCIno25tWTp.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DPun);
    };
    hs_sat26DPuo.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("CDev\x00");
    };
    hs_tyConCDev25tWTn.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DPuo);
    };
    hs_a25vq5m.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdcreadList25vq5o.evaluateOnce = function () {
        if (hs_a25vq5m.notEvaluated) {
            return hs_a25vq5m.hscall();
        } else {
            return hs_a25vq5m;
        }
    };
    hs_a125vq5q.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdcreadsPrec25vq5s.evaluateOnce = function () {
        if (hs_a125vq5q.notEvaluated) {
            return hs_a125vq5q.hscall();
        } else {
            return hs_a125vq5q;
        }
    };
    this.hs_zdfReadCDev.data = [hs_a125vq5q, hs_a25vq5m, hs_zdcreadPrec25vq5w, hs_zdcreadListPrec25vq5u];
    hs_zdcreadListPrec25vq5u.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCDev);
    };
    hs_zdcreadPrec25vq5w.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCDev);
    };
    hs_a225vq5y.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshowList25vq5A.evaluateOnce = function () {
        if (hs_a225vq5y.notEvaluated) {
            return hs_a225vq5y.hscall();
        } else {
            return hs_a225vq5y;
        }
    };
    hs_a325vq5C.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshow25vq5E.evaluateOnce = function () {
        if (hs_a325vq5C.notEvaluated) {
            return hs_a325vq5C.hscall();
        } else {
            return hs_a325vq5C;
        }
    };
    hs_a425vq5G.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshowsPrec25vq5I.evaluateOnce = function () {
        if (hs_a425vq5G.notEvaluated) {
            return hs_a425vq5G.hscall();
        } else {
            return hs_a425vq5G;
        }
    };
    this.hs_zdfShowCDev.data = [hs_a425vq5G, hs_a325vq5C, hs_a225vq5y];
    hs_zdctypeOf25vq5K.evaluate = function (hs_ds26DOC2) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCDev25tWTn, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCDev.evaluateOnce = function () {
        if (hs_zdctypeOf25vq5K.notEvaluated) {
            return hs_zdctypeOf25vq5K.hscall();
        } else {
            return hs_zdctypeOf25vq5K;
        }
    };
    hs_a525vq5O.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdcreadList125vq5Q.evaluateOnce = function () {
        if (hs_a525vq5O.notEvaluated) {
            return hs_a525vq5O.hscall();
        } else {
            return hs_a525vq5O;
        }
    };
    hs_a625vq5S.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdcreadsPrec125vq5U.evaluateOnce = function () {
        if (hs_a625vq5S.notEvaluated) {
            return hs_a625vq5S.hscall();
        } else {
            return hs_a625vq5S;
        }
    };
    this.hs_zdfReadCIno.data = [hs_a625vq5S, hs_a525vq5O, hs_zdcreadPrec125vq5Y, hs_zdcreadListPrec125vq5W];
    hs_zdcreadListPrec125vq5W.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCIno);
    };
    hs_zdcreadPrec125vq5Y.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCIno);
    };
    hs_a725vq60.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshowList125vq62.evaluateOnce = function () {
        if (hs_a725vq60.notEvaluated) {
            return hs_a725vq60.hscall();
        } else {
            return hs_a725vq60;
        }
    };
    hs_a825vq64.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshow125vq66.evaluateOnce = function () {
        if (hs_a825vq64.notEvaluated) {
            return hs_a825vq64.hscall();
        } else {
            return hs_a825vq64;
        }
    };
    hs_a925vq68.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshowsPrec125vq6a.evaluateOnce = function () {
        if (hs_a925vq68.notEvaluated) {
            return hs_a925vq68.hscall();
        } else {
            return hs_a925vq68;
        }
    };
    this.hs_zdfShowCIno.data = [hs_a925vq68, hs_a825vq64, hs_a725vq60];
    hs_zdctypeOf125vq6c.evaluate = function (hs_ds26DOCu) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCIno25tWTp, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCIno.evaluateOnce = function () {
        if (hs_zdctypeOf125vq6c.notEvaluated) {
            return hs_zdctypeOf125vq6c.hscall();
        } else {
            return hs_zdctypeOf125vq6c;
        }
    };
    hs_a1025vq6g.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadList225vq6i.evaluateOnce = function () {
        if (hs_a1025vq6g.notEvaluated) {
            return hs_a1025vq6g.hscall();
        } else {
            return hs_a1025vq6g;
        }
    };
    hs_a1125vq6k.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadsPrec225vq6m.evaluateOnce = function () {
        if (hs_a1125vq6k.notEvaluated) {
            return hs_a1125vq6k.hscall();
        } else {
            return hs_a1125vq6k;
        }
    };
    this.hs_zdfReadCMode.data = [hs_a1125vq6k, hs_a1025vq6g, hs_zdcreadPrec225vq6q, hs_zdcreadListPrec225vq6o];
    hs_zdcreadListPrec225vq6o.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCMode);
    };
    hs_zdcreadPrec225vq6q.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCMode);
    };
    hs_a1225vq6s.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowList225vq6u.evaluateOnce = function () {
        if (hs_a1225vq6s.notEvaluated) {
            return hs_a1225vq6s.hscall();
        } else {
            return hs_a1225vq6s;
        }
    };
    hs_a1325vq6w.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshow225vq6y.evaluateOnce = function () {
        if (hs_a1325vq6w.notEvaluated) {
            return hs_a1325vq6w.hscall();
        } else {
            return hs_a1325vq6w;
        }
    };
    hs_a1425vq6A.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowsPrec225vq6C.evaluateOnce = function () {
        if (hs_a1425vq6A.notEvaluated) {
            return hs_a1425vq6A.hscall();
        } else {
            return hs_a1425vq6A;
        }
    };
    this.hs_zdfShowCMode.data = [hs_a1425vq6A, hs_a1325vq6w, hs_a1225vq6s];
    hs_zdctypeOf225vq6E.evaluate = function (hs_ds26DOCW) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCMode25tWTr, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCMode.evaluateOnce = function () {
        if (hs_zdctypeOf225vq6E.notEvaluated) {
            return hs_zdctypeOf225vq6E.hscall();
        } else {
            return hs_zdctypeOf225vq6E;
        }
    };
    hs_a1525vq6I.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt64);
    };
    hs_zdcreadList325vq6K.evaluateOnce = function () {
        if (hs_a1525vq6I.notEvaluated) {
            return hs_a1525vq6I.hscall();
        } else {
            return hs_a1525vq6I;
        }
    };
    hs_a1625vq6M.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt64);
    };
    hs_zdcreadsPrec325vq6O.evaluateOnce = function () {
        if (hs_a1625vq6M.notEvaluated) {
            return hs_a1625vq6M.hscall();
        } else {
            return hs_a1625vq6M;
        }
    };
    this.hs_zdfReadCOff.data = [hs_a1625vq6M, hs_a1525vq6I, hs_zdcreadPrec325vq6S, hs_zdcreadListPrec325vq6Q];
    hs_zdcreadListPrec325vq6Q.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCOff);
    };
    hs_zdcreadPrec325vq6S.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCOff);
    };
    hs_a1725vq6U.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt64);
    };
    hs_zdcshowList325vq6W.evaluateOnce = function () {
        if (hs_a1725vq6U.notEvaluated) {
            return hs_a1725vq6U.hscall();
        } else {
            return hs_a1725vq6U;
        }
    };
    hs_a1825vq6Y.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt64);
    };
    hs_zdcshow325vq70.evaluateOnce = function () {
        if (hs_a1825vq6Y.notEvaluated) {
            return hs_a1825vq6Y.hscall();
        } else {
            return hs_a1825vq6Y;
        }
    };
    hs_a1925vq72.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt64);
    };
    hs_zdcshowsPrec325vq74.evaluateOnce = function () {
        if (hs_a1925vq72.notEvaluated) {
            return hs_a1925vq72.hscall();
        } else {
            return hs_a1925vq72;
        }
    };
    this.hs_zdfShowCOff.data = [hs_a1925vq72, hs_a1825vq6Y, hs_a1725vq6U];
    hs_zdctypeOf325vq76.evaluate = function (hs_ds26DODo) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCOff25tWTt, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCOff.evaluateOnce = function () {
        if (hs_zdctypeOf325vq76.notEvaluated) {
            return hs_zdctypeOf325vq76.hscall();
        } else {
            return hs_zdctypeOf325vq76;
        }
    };
    hs_a2025vq7a.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadList425vq7c.evaluateOnce = function () {
        if (hs_a2025vq7a.notEvaluated) {
            return hs_a2025vq7a.hscall();
        } else {
            return hs_a2025vq7a;
        }
    };
    hs_a2125vq7e.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadsPrec425vq7g.evaluateOnce = function () {
        if (hs_a2125vq7e.notEvaluated) {
            return hs_a2125vq7e.hscall();
        } else {
            return hs_a2125vq7e;
        }
    };
    this.hs_zdfReadCPid.data = [hs_a2125vq7e, hs_a2025vq7a, hs_zdcreadPrec425vq7k, hs_zdcreadListPrec425vq7i];
    hs_zdcreadListPrec425vq7i.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCPid);
    };
    hs_zdcreadPrec425vq7k.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCPid);
    };
    hs_a2225vq7m.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowList425vq7o.evaluateOnce = function () {
        if (hs_a2225vq7m.notEvaluated) {
            return hs_a2225vq7m.hscall();
        } else {
            return hs_a2225vq7m;
        }
    };
    hs_a2325vq7q.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshow425vq7s.evaluateOnce = function () {
        if (hs_a2325vq7q.notEvaluated) {
            return hs_a2325vq7q.hscall();
        } else {
            return hs_a2325vq7q;
        }
    };
    hs_a2425vq7u.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowsPrec425vq7w.evaluateOnce = function () {
        if (hs_a2425vq7u.notEvaluated) {
            return hs_a2425vq7u.hscall();
        } else {
            return hs_a2425vq7u;
        }
    };
    this.hs_zdfShowCPid.data = [hs_a2425vq7u, hs_a2325vq7q, hs_a2225vq7m];
    hs_zdctypeOf425vq7y.evaluate = function (hs_ds26DODQ) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCPid25tWTv, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCPid.evaluateOnce = function () {
        if (hs_zdctypeOf425vq7y.notEvaluated) {
            return hs_zdctypeOf425vq7y.hscall();
        } else {
            return hs_zdctypeOf425vq7y;
        }
    };
    hs_a2525vq7C.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadList525vq7E.evaluateOnce = function () {
        if (hs_a2525vq7C.notEvaluated) {
            return hs_a2525vq7C.hscall();
        } else {
            return hs_a2525vq7C;
        }
    };
    hs_a2625vq7G.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadsPrec525vq7I.evaluateOnce = function () {
        if (hs_a2625vq7G.notEvaluated) {
            return hs_a2625vq7G.hscall();
        } else {
            return hs_a2625vq7G;
        }
    };
    this.hs_zdfReadCSsizze.data = [hs_a2625vq7G, hs_a2525vq7C, hs_zdcreadPrec525vq7M, hs_zdcreadListPrec525vq7K];
    hs_zdcreadListPrec525vq7K.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCSsizze);
    };
    hs_zdcreadPrec525vq7M.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCSsizze);
    };
    hs_a2725vq7O.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowList525vq7Q.evaluateOnce = function () {
        if (hs_a2725vq7O.notEvaluated) {
            return hs_a2725vq7O.hscall();
        } else {
            return hs_a2725vq7O;
        }
    };
    hs_a2825vq7S.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshow525vq7U.evaluateOnce = function () {
        if (hs_a2825vq7S.notEvaluated) {
            return hs_a2825vq7S.hscall();
        } else {
            return hs_a2825vq7S;
        }
    };
    hs_a2925vq7W.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowsPrec525vq7Y.evaluateOnce = function () {
        if (hs_a2925vq7W.notEvaluated) {
            return hs_a2925vq7W.hscall();
        } else {
            return hs_a2925vq7W;
        }
    };
    this.hs_zdfShowCSsizze.data = [hs_a2925vq7W, hs_a2825vq7S, hs_a2725vq7O];
    hs_zdctypeOf525vq80.evaluate = function (hs_ds26DOEi) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCSsizze25tWTx, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCSsizze.evaluateOnce = function () {
        if (hs_zdctypeOf525vq80.notEvaluated) {
            return hs_zdctypeOf525vq80.hscall();
        } else {
            return hs_zdctypeOf525vq80;
        }
    };
    hs_a3025vq84.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadList625vq86.evaluateOnce = function () {
        if (hs_a3025vq84.notEvaluated) {
            return hs_a3025vq84.hscall();
        } else {
            return hs_a3025vq84;
        }
    };
    hs_a3125vq88.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadsPrec625vq8a.evaluateOnce = function () {
        if (hs_a3125vq88.notEvaluated) {
            return hs_a3125vq88.hscall();
        } else {
            return hs_a3125vq88;
        }
    };
    this.hs_zdfReadCGid.data = [hs_a3125vq88, hs_a3025vq84, hs_zdcreadPrec625vq8e, hs_zdcreadListPrec625vq8c];
    hs_zdcreadListPrec625vq8c.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCGid);
    };
    hs_zdcreadPrec625vq8e.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCGid);
    };
    hs_a3225vq8g.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowList625vq8i.evaluateOnce = function () {
        if (hs_a3225vq8g.notEvaluated) {
            return hs_a3225vq8g.hscall();
        } else {
            return hs_a3225vq8g;
        }
    };
    hs_a3325vq8k.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshow625vq8m.evaluateOnce = function () {
        if (hs_a3325vq8k.notEvaluated) {
            return hs_a3325vq8k.hscall();
        } else {
            return hs_a3325vq8k;
        }
    };
    hs_a3425vq8o.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowsPrec625vq8q.evaluateOnce = function () {
        if (hs_a3425vq8o.notEvaluated) {
            return hs_a3425vq8o.hscall();
        } else {
            return hs_a3425vq8o;
        }
    };
    this.hs_zdfShowCGid.data = [hs_a3425vq8o, hs_a3325vq8k, hs_a3225vq8g];
    hs_zdctypeOf625vq8s.evaluate = function (hs_ds26DOEK) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCGid25tWTz, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCGid.evaluateOnce = function () {
        if (hs_zdctypeOf625vq8s.notEvaluated) {
            return hs_zdctypeOf625vq8s.hscall();
        } else {
            return hs_zdctypeOf625vq8s;
        }
    };
    hs_a3525vq8w.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadList725vq8y.evaluateOnce = function () {
        if (hs_a3525vq8w.notEvaluated) {
            return hs_a3525vq8w.hscall();
        } else {
            return hs_a3525vq8w;
        }
    };
    hs_a3625vq8A.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadsPrec725vq8C.evaluateOnce = function () {
        if (hs_a3625vq8A.notEvaluated) {
            return hs_a3625vq8A.hscall();
        } else {
            return hs_a3625vq8A;
        }
    };
    this.hs_zdfReadCNlink.data = [hs_a3625vq8A, hs_a3525vq8w, hs_zdcreadPrec725vq8G, hs_zdcreadListPrec725vq8E];
    hs_zdcreadListPrec725vq8E.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCNlink);
    };
    hs_zdcreadPrec725vq8G.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCNlink);
    };
    hs_a3725vq8I.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowList725vq8K.evaluateOnce = function () {
        if (hs_a3725vq8I.notEvaluated) {
            return hs_a3725vq8I.hscall();
        } else {
            return hs_a3725vq8I;
        }
    };
    hs_a3825vq8M.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshow725vq8O.evaluateOnce = function () {
        if (hs_a3825vq8M.notEvaluated) {
            return hs_a3825vq8M.hscall();
        } else {
            return hs_a3825vq8M;
        }
    };
    hs_a3925vq8Q.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowsPrec725vq8S.evaluateOnce = function () {
        if (hs_a3925vq8Q.notEvaluated) {
            return hs_a3925vq8Q.hscall();
        } else {
            return hs_a3925vq8Q;
        }
    };
    this.hs_zdfShowCNlink.data = [hs_a3925vq8Q, hs_a3825vq8M, hs_a3725vq8I];
    hs_zdctypeOf725vq8U.evaluate = function (hs_ds26DOFc) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCNlink25tWTB, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCNlink.evaluateOnce = function () {
        if (hs_zdctypeOf725vq8U.notEvaluated) {
            return hs_zdctypeOf725vq8U.hscall();
        } else {
            return hs_zdctypeOf725vq8U;
        }
    };
    hs_a4025vq8Y.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadList825vq90.evaluateOnce = function () {
        if (hs_a4025vq8Y.notEvaluated) {
            return hs_a4025vq8Y.hscall();
        } else {
            return hs_a4025vq8Y;
        }
    };
    hs_a4125vq92.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadsPrec825vq94.evaluateOnce = function () {
        if (hs_a4125vq92.notEvaluated) {
            return hs_a4125vq92.hscall();
        } else {
            return hs_a4125vq92;
        }
    };
    this.hs_zdfReadCUid.data = [hs_a4125vq92, hs_a4025vq8Y, hs_zdcreadPrec825vq98, hs_zdcreadListPrec825vq96];
    hs_zdcreadListPrec825vq96.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCUid);
    };
    hs_zdcreadPrec825vq98.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCUid);
    };
    hs_a4225vq9a.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowList825vq9c.evaluateOnce = function () {
        if (hs_a4225vq9a.notEvaluated) {
            return hs_a4225vq9a.hscall();
        } else {
            return hs_a4225vq9a;
        }
    };
    hs_a4325vq9e.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshow825vq9g.evaluateOnce = function () {
        if (hs_a4325vq9e.notEvaluated) {
            return hs_a4325vq9e.hscall();
        } else {
            return hs_a4325vq9e;
        }
    };
    hs_a4425vq9i.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowsPrec825vq9k.evaluateOnce = function () {
        if (hs_a4425vq9i.notEvaluated) {
            return hs_a4425vq9i.hscall();
        } else {
            return hs_a4425vq9i;
        }
    };
    this.hs_zdfShowCUid.data = [hs_a4425vq9i, hs_a4325vq9e, hs_a4225vq9a];
    hs_zdctypeOf825vq9m.evaluate = function (hs_ds26DOFE) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCUid25tWTD, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCUid.evaluateOnce = function () {
        if (hs_zdctypeOf825vq9m.notEvaluated) {
            return hs_zdctypeOf825vq9m.hscall();
        } else {
            return hs_zdctypeOf825vq9m;
        }
    };
    hs_a4525vq9q.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord8);
    };
    hs_zdcreadList925vq9s.evaluateOnce = function () {
        if (hs_a4525vq9q.notEvaluated) {
            return hs_a4525vq9q.hscall();
        } else {
            return hs_a4525vq9q;
        }
    };
    hs_a4625vq9u.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord8);
    };
    hs_zdcreadsPrec925vq9w.evaluateOnce = function () {
        if (hs_a4625vq9u.notEvaluated) {
            return hs_a4625vq9u.hscall();
        } else {
            return hs_a4625vq9u;
        }
    };
    this.hs_zdfReadCCc.data = [hs_a4625vq9u, hs_a4525vq9q, hs_zdcreadPrec925vq9A, hs_zdcreadListPrec925vq9y];
    hs_zdcreadListPrec925vq9y.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCCc);
    };
    hs_zdcreadPrec925vq9A.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCCc);
    };
    hs_a4725vq9C.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord8);
    };
    hs_zdcshowList925vq9E.evaluateOnce = function () {
        if (hs_a4725vq9C.notEvaluated) {
            return hs_a4725vq9C.hscall();
        } else {
            return hs_a4725vq9C;
        }
    };
    hs_a4825vq9G.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord8);
    };
    hs_zdcshow925vq9I.evaluateOnce = function () {
        if (hs_a4825vq9G.notEvaluated) {
            return hs_a4825vq9G.hscall();
        } else {
            return hs_a4825vq9G;
        }
    };
    hs_a4925vq9K.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord8);
    };
    hs_zdcshowsPrec925vq9M.evaluateOnce = function () {
        if (hs_a4925vq9K.notEvaluated) {
            return hs_a4925vq9K.hscall();
        } else {
            return hs_a4925vq9K;
        }
    };
    this.hs_zdfShowCCc.data = [hs_a4925vq9K, hs_a4825vq9G, hs_a4725vq9C];
    hs_zdctypeOf925vq9O.evaluate = function (hs_ds26DOG6) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCCc25tWTF, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCCc.evaluateOnce = function () {
        if (hs_zdctypeOf925vq9O.notEvaluated) {
            return hs_zdctypeOf925vq9O.hscall();
        } else {
            return hs_zdctypeOf925vq9O;
        }
    };
    hs_a5025vq9S.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadList1025vq9U.evaluateOnce = function () {
        if (hs_a5025vq9S.notEvaluated) {
            return hs_a5025vq9S.hscall();
        } else {
            return hs_a5025vq9S;
        }
    };
    hs_a5125vq9W.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadsPrec1025vq9Y.evaluateOnce = function () {
        if (hs_a5125vq9W.notEvaluated) {
            return hs_a5125vq9W.hscall();
        } else {
            return hs_a5125vq9W;
        }
    };
    this.hs_zdfReadCSpeed.data = [hs_a5125vq9W, hs_a5025vq9S, hs_zdcreadPrec1025vqa2, hs_zdcreadListPrec1025vqa0];
    hs_zdcreadListPrec1025vqa0.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCSpeed);
    };
    hs_zdcreadPrec1025vqa2.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCSpeed);
    };
    hs_a5225vqa4.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowList1025vqa6.evaluateOnce = function () {
        if (hs_a5225vqa4.notEvaluated) {
            return hs_a5225vqa4.hscall();
        } else {
            return hs_a5225vqa4;
        }
    };
    hs_a5325vqa8.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshow1025vqaa.evaluateOnce = function () {
        if (hs_a5325vqa8.notEvaluated) {
            return hs_a5325vqa8.hscall();
        } else {
            return hs_a5325vqa8;
        }
    };
    hs_a5425vqac.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowsPrec1025vqae.evaluateOnce = function () {
        if (hs_a5425vqac.notEvaluated) {
            return hs_a5425vqac.hscall();
        } else {
            return hs_a5425vqac;
        }
    };
    this.hs_zdfShowCSpeed.data = [hs_a5425vqac, hs_a5325vqa8, hs_a5225vqa4];
    hs_zdctypeOf1025vqag.evaluate = function (hs_ds26DOGy) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCSpeed25tWTH, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCSpeed.evaluateOnce = function () {
        if (hs_zdctypeOf1025vqag.notEvaluated) {
            return hs_zdctypeOf1025vqag.hscall();
        } else {
            return hs_zdctypeOf1025vqag;
        }
    };
    hs_a5525vqak.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadList1125vqam.evaluateOnce = function () {
        if (hs_a5525vqak.notEvaluated) {
            return hs_a5525vqak.hscall();
        } else {
            return hs_a5525vqak;
        }
    };
    hs_a5625vqao.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadsPrec1125vqaq.evaluateOnce = function () {
        if (hs_a5625vqao.notEvaluated) {
            return hs_a5625vqao.hscall();
        } else {
            return hs_a5625vqao;
        }
    };
    this.hs_zdfReadCTcflag.data = [hs_a5625vqao, hs_a5525vqak, hs_zdcreadPrec1125vqau, hs_zdcreadListPrec1125vqas];
    hs_zdcreadListPrec1125vqas.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCTcflag);
    };
    hs_zdcreadPrec1125vqau.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCTcflag);
    };
    hs_a5725vqaw.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowList1125vqay.evaluateOnce = function () {
        if (hs_a5725vqaw.notEvaluated) {
            return hs_a5725vqaw.hscall();
        } else {
            return hs_a5725vqaw;
        }
    };
    hs_a5825vqaA.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshow1125vqaC.evaluateOnce = function () {
        if (hs_a5825vqaA.notEvaluated) {
            return hs_a5825vqaA.hscall();
        } else {
            return hs_a5825vqaA;
        }
    };
    hs_a5925vqaE.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowsPrec1125vqaG.evaluateOnce = function () {
        if (hs_a5925vqaE.notEvaluated) {
            return hs_a5925vqaE.hscall();
        } else {
            return hs_a5925vqaE;
        }
    };
    this.hs_zdfShowCTcflag.data = [hs_a5925vqaE, hs_a5825vqaA, hs_a5725vqaw];
    hs_zdctypeOf1125vqaI.evaluate = function (hs_ds26DOH0) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCTcflag25tWTJ, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCTcflag.evaluateOnce = function () {
        if (hs_zdctypeOf1125vqaI.notEvaluated) {
            return hs_zdctypeOf1125vqaI.hscall();
        } else {
            return hs_zdctypeOf1125vqaI;
        }
    };
    hs_a6025vqaM.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdcreadList1225vqaO.evaluateOnce = function () {
        if (hs_a6025vqaM.notEvaluated) {
            return hs_a6025vqaM.hscall();
        } else {
            return hs_a6025vqaM;
        }
    };
    hs_a6125vqaQ.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdcreadsPrec1225vqaS.evaluateOnce = function () {
        if (hs_a6125vqaQ.notEvaluated) {
            return hs_a6125vqaQ.hscall();
        } else {
            return hs_a6125vqaQ;
        }
    };
    this.hs_zdfReadCRLim.data = [hs_a6125vqaQ, hs_a6025vqaM, hs_zdcreadPrec1225vqaW, hs_zdcreadListPrec1225vqaU];
    hs_zdcreadListPrec1225vqaU.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCRLim);
    };
    hs_zdcreadPrec1225vqaW.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCRLim);
    };
    hs_a6225vqaY.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshowList1225vqb0.evaluateOnce = function () {
        if (hs_a6225vqaY.notEvaluated) {
            return hs_a6225vqaY.hscall();
        } else {
            return hs_a6225vqaY;
        }
    };
    hs_a6325vqb2.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshow1225vqb4.evaluateOnce = function () {
        if (hs_a6325vqb2.notEvaluated) {
            return hs_a6325vqb2.hscall();
        } else {
            return hs_a6325vqb2;
        }
    };
    hs_a6425vqb6.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshowsPrec1225vqb8.evaluateOnce = function () {
        if (hs_a6425vqb6.notEvaluated) {
            return hs_a6425vqb6.hscall();
        } else {
            return hs_a6425vqb6;
        }
    };
    this.hs_zdfShowCRLim.data = [hs_a6425vqb6, hs_a6325vqb2, hs_a6225vqaY];
    hs_zdctypeOf1225vqba.evaluate = function (hs_ds26DOHs) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConCRlim25tWTL, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCRLim.evaluateOnce = function () {
        if (hs_zdctypeOf1225vqba.notEvaluated) {
            return hs_zdctypeOf1225vqba.hscall();
        } else {
            return hs_zdctypeOf1225vqba;
        }
    };
    hs_a6525vqbe.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCInt);
    };
    hs_zdcreadList1325vqbg.evaluateOnce = function () {
        if (hs_a6525vqbe.notEvaluated) {
            return hs_a6525vqbe.hscall();
        } else {
            return hs_a6525vqbe;
        }
    };
    hs_a6625vqbi.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCInt);
    };
    hs_zdcreadsPrec1325vqbk.evaluateOnce = function () {
        if (hs_a6625vqbi.notEvaluated) {
            return hs_a6625vqbi.hscall();
        } else {
            return hs_a6625vqbi;
        }
    };
    this.hs_zdfReadFd.data = [hs_a6625vqbi, hs_a6525vqbe, hs_zdcreadPrec1325vqbo, hs_zdcreadListPrec1325vqbm];
    hs_zdcreadListPrec1325vqbm.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadFd);
    };
    hs_zdcreadPrec1325vqbo.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadFd);
    };
    hs_a6725vqbq.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.ForeignziCziTypes.hs_zdfShowCInt);
    };
    hs_zdcshowList1325vqbs.evaluateOnce = function () {
        if (hs_a6725vqbq.notEvaluated) {
            return hs_a6725vqbq.hscall();
        } else {
            return hs_a6725vqbq;
        }
    };
    hs_a6825vqbu.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.ForeignziCziTypes.hs_zdfShowCInt);
    };
    hs_zdcshow1325vqbw.evaluateOnce = function () {
        if (hs_a6825vqbu.notEvaluated) {
            return hs_a6825vqbu.hscall();
        } else {
            return hs_a6825vqbu;
        }
    };
    hs_a6925vqby.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfShowCInt);
    };
    hs_zdcshowsPrec1325vqbA.evaluateOnce = function () {
        if (hs_a6925vqby.notEvaluated) {
            return hs_a6925vqby.hscall();
        } else {
            return hs_a6925vqby;
        }
    };
    this.hs_zdfShowFd.data = [hs_a6925vqby, hs_a6825vqbu, hs_a6725vqbq];
    hs_zdctypeOf1325vqbC.evaluate = function (hs_ds26DOHU) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConFd25tWTN, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableFd.evaluateOnce = function () {
        if (hs_zdctypeOf1325vqbC.notEvaluated) {
            return hs_zdctypeOf1325vqbC.hscall();
        } else {
            return hs_zdctypeOf1325vqbC;
        }
    };
    hs_a7025vqbG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdczizazi25vqbI.evaluateOnce = function () {
        if (hs_a7025vqbG.notEvaluated) {
            return hs_a7025vqbG.hscall();
        } else {
            return hs_a7025vqbG;
        }
    };
    hs_a7125vqbK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdczizbzi25vqbM.evaluateOnce = function () {
        if (hs_a7125vqbK.notEvaluated) {
            return hs_a7125vqbK.hscall();
        } else {
            return hs_a7125vqbK;
        }
    };
    hs_a7225vqbO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdcxor25vqbQ.evaluateOnce = function () {
        if (hs_a7225vqbO.notEvaluated) {
            return hs_a7225vqbO.hscall();
        } else {
            return hs_a7225vqbO;
        }
    };
    hs_a7325vqbS.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdccomplement25vqbU.evaluateOnce = function () {
        if (hs_a7325vqbS.notEvaluated) {
            return hs_a7325vqbS.hscall();
        } else {
            return hs_a7325vqbS;
        }
    };
    hs_a7425vqbW.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdcshift25vqbY.evaluateOnce = function () {
        if (hs_a7425vqbW.notEvaluated) {
            return hs_a7425vqbW.hscall();
        } else {
            return hs_a7425vqbW;
        }
    };
    hs_a7525vqc0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdcrotate25vqc2.evaluateOnce = function () {
        if (hs_a7525vqc0.notEvaluated) {
            return hs_a7525vqc0.hscall();
        } else {
            return hs_a7525vqc0;
        }
    };
    hs_a7625vqc4.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdcbit25vqc6.evaluateOnce = function () {
        if (hs_a7625vqc4.notEvaluated) {
            return hs_a7625vqc4.hscall();
        } else {
            return hs_a7625vqc4;
        }
    };
    hs_a7725vqc8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdcsetBit25vqca.evaluateOnce = function () {
        if (hs_a7725vqc8.notEvaluated) {
            return hs_a7725vqc8.hscall();
        } else {
            return hs_a7725vqc8;
        }
    };
    hs_a7825vqcc.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdcclearBit25vqce.evaluateOnce = function () {
        if (hs_a7825vqcc.notEvaluated) {
            return hs_a7825vqcc.hscall();
        } else {
            return hs_a7825vqcc;
        }
    };
    hs_a7925vqcg.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdccomplementBit25vqci.evaluateOnce = function () {
        if (hs_a7925vqcg.notEvaluated) {
            return hs_a7925vqcg.hscall();
        } else {
            return hs_a7925vqcg;
        }
    };
    hs_a8025vqck.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdctestBit25vqcm.evaluateOnce = function () {
        if (hs_a8025vqck.notEvaluated) {
            return hs_a8025vqck.hscall();
        } else {
            return hs_a8025vqck;
        }
    };
    hs_a8125vqco.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdcbitSizze25vqcq.evaluateOnce = function () {
        if (hs_a8125vqco.notEvaluated) {
            return hs_a8125vqco.hscall();
        } else {
            return hs_a8125vqco;
        }
    };
    hs_a8225vqcs.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdcisSigned25vqcu.evaluateOnce = function () {
        if (hs_a8225vqcs.notEvaluated) {
            return hs_a8225vqcs.hscall();
        } else {
            return hs_a8225vqcs;
        }
    };
    hs_a8325vqcw.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdcshiftL25vqcy.evaluateOnce = function () {
        if (hs_a8325vqcw.notEvaluated) {
            return hs_a8325vqcw.hscall();
        } else {
            return hs_a8325vqcw;
        }
    };
    hs_a8425vqcA.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdcshiftR25vqcC.evaluateOnce = function () {
        if (hs_a8425vqcA.notEvaluated) {
            return hs_a8425vqcA.hscall();
        } else {
            return hs_a8425vqcA;
        }
    };
    hs_a8525vqcE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdcrotateL25vqcG.evaluateOnce = function () {
        if (hs_a8525vqcE.notEvaluated) {
            return hs_a8525vqcE.hscall();
        } else {
            return hs_a8525vqcE;
        }
    };
    hs_a8625vqcI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdcrotateR25vqcK.evaluateOnce = function () {
        if (hs_a8625vqcI.notEvaluated) {
            return hs_a8625vqcI.hscall();
        } else {
            return hs_a8625vqcI;
        }
    };
    hs_a8725vqcM.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt);
    };
    hs_zdcquot25vqcO.evaluateOnce = function () {
        if (hs_a8725vqcM.notEvaluated) {
            return hs_a8725vqcM.hscall();
        } else {
            return hs_a8725vqcM;
        }
    };
    hs_a8825vqcQ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt);
    };
    hs_zdcrem25vqcS.evaluateOnce = function () {
        if (hs_a8825vqcQ.notEvaluated) {
            return hs_a8825vqcQ.hscall();
        } else {
            return hs_a8825vqcQ;
        }
    };
    hs_a8925vqcU.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt);
    };
    hs_zdcdiv25vqcW.evaluateOnce = function () {
        if (hs_a8925vqcU.notEvaluated) {
            return hs_a8925vqcU.hscall();
        } else {
            return hs_a8925vqcU;
        }
    };
    hs_a9025vqcY.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt);
    };
    hs_zdcmod25vqd0.evaluateOnce = function () {
        if (hs_a9025vqcY.notEvaluated) {
            return hs_a9025vqcY.hscall();
        } else {
            return hs_a9025vqcY;
        }
    };
    hs_a9125vqd2.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt);
    };
    hs_zdcquotRem25vqd4.evaluateOnce = function () {
        if (hs_a9125vqd2.notEvaluated) {
            return hs_a9125vqd2.hscall();
        } else {
            return hs_a9125vqd2;
        }
    };
    hs_a9225vqd6.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt);
    };
    hs_zdcdivMod25vqd8.evaluateOnce = function () {
        if (hs_a9225vqd6.notEvaluated) {
            return hs_a9225vqd6.hscall();
        } else {
            return hs_a9225vqd6;
        }
    };
    hs_a9325vqda.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt);
    };
    hs_zdctoInteger25vqdc.evaluateOnce = function () {
        if (hs_a9325vqda.notEvaluated) {
            return hs_a9325vqda.hscall();
        } else {
            return hs_a9325vqda;
        }
    };
    hs_a9425vqde.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.ForeignziCziTypes.hs_zdfBoundedCInt);
    };
    hs_zdcminBound25vqdg.evaluateOnce = function () {
        if (hs_a9425vqde.notEvaluated) {
            return hs_a9425vqde.hscall();
        } else {
            return hs_a9425vqde;
        }
    };
    hs_a9525vqdi.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.ForeignziCziTypes.hs_zdfBoundedCInt);
    };
    hs_zdcmaxBound25vqdk.evaluateOnce = function () {
        if (hs_a9525vqdi.notEvaluated) {
            return hs_a9525vqdi.hscall();
        } else {
            return hs_a9525vqdi;
        }
    };
    this.hs_zdfBoundedFd.data = [hs_a9425vqde, hs_a9525vqdi];
    hs_a9625vqdm.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.ForeignziCziTypes.hs_zdfRealCInt);
    };
    hs_zdctoRational25vqdo.evaluateOnce = function () {
        if (hs_a9625vqdm.notEvaluated) {
            return hs_a9625vqdm.hscall();
        } else {
            return hs_a9625vqdm;
        }
    };
    hs_a9725vqdq.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCInt);
    };
    hs_zdcsizzeOf25vqds.evaluateOnce = function () {
        if (hs_a9725vqdq.notEvaluated) {
            return hs_a9725vqdq.hscall();
        } else {
            return hs_a9725vqdq;
        }
    };
    hs_a9825vqdu.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCInt);
    };
    hs_zdcalignment25vqdw.evaluateOnce = function () {
        if (hs_a9825vqdu.notEvaluated) {
            return hs_a9825vqdu.hscall();
        } else {
            return hs_a9825vqdu;
        }
    };
    hs_a9925vqdy.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCInt);
    };
    hs_zdcpeekElemOff25vqdA.evaluateOnce = function () {
        if (hs_a9925vqdy.notEvaluated) {
            return hs_a9925vqdy.hscall();
        } else {
            return hs_a9925vqdy;
        }
    };
    hs_a10025vqdC.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCInt);
    };
    hs_zdcpokeElemOff25vqdE.evaluateOnce = function () {
        if (hs_a10025vqdC.notEvaluated) {
            return hs_a10025vqdC.hscall();
        } else {
            return hs_a10025vqdC;
        }
    };
    hs_a10125vqdG.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCInt);
    };
    hs_zdcpeekByteOff25vqdI.evaluateOnce = function () {
        if (hs_a10125vqdG.notEvaluated) {
            return hs_a10125vqdG.hscall();
        } else {
            return hs_a10125vqdG;
        }
    };
    hs_a10225vqdK.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCInt);
    };
    hs_zdcpokeByteOff25vqdM.evaluateOnce = function () {
        if (hs_a10225vqdK.notEvaluated) {
            return hs_a10225vqdK.hscall();
        } else {
            return hs_a10225vqdK;
        }
    };
    hs_a10325vqdO.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCInt);
    };
    hs_zdcpeek25vqdQ.evaluateOnce = function () {
        if (hs_a10325vqdO.notEvaluated) {
            return hs_a10325vqdO.hscall();
        } else {
            return hs_a10325vqdO;
        }
    };
    hs_a10425vqdS.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCInt);
    };
    hs_zdcpoke25vqdU.evaluateOnce = function () {
        if (hs_a10425vqdS.notEvaluated) {
            return hs_a10425vqdS.hscall();
        } else {
            return hs_a10425vqdS;
        }
    };
    this.hs_zdfStorableFd.data = [hs_a9725vqdq, hs_a9825vqdu, hs_a9925vqdy, hs_a10025vqdC, hs_a10125vqdG, hs_a10225vqdK, hs_a10325vqdO, hs_a10425vqdS];
    hs_a10525vqdW.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.ForeignziCziTypes.hs_zdfEnumCInt);
    };
    hs_zdcsucc25vqdY.evaluateOnce = function () {
        if (hs_a10525vqdW.notEvaluated) {
            return hs_a10525vqdW.hscall();
        } else {
            return hs_a10525vqdW;
        }
    };
    hs_a10625vqe0.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.ForeignziCziTypes.hs_zdfEnumCInt);
    };
    hs_zdcpred25vqe2.evaluateOnce = function () {
        if (hs_a10625vqe0.notEvaluated) {
            return hs_a10625vqe0.hscall();
        } else {
            return hs_a10625vqe0;
        }
    };
    hs_a10725vqe4.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.ForeignziCziTypes.hs_zdfEnumCInt);
    };
    hs_zdctoEnum25vqe6.evaluateOnce = function () {
        if (hs_a10725vqe4.notEvaluated) {
            return hs_a10725vqe4.hscall();
        } else {
            return hs_a10725vqe4;
        }
    };
    hs_a10825vqe8.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.ForeignziCziTypes.hs_zdfEnumCInt);
    };
    hs_zdcfromEnum25vqea.evaluateOnce = function () {
        if (hs_a10825vqe8.notEvaluated) {
            return hs_a10825vqe8.hscall();
        } else {
            return hs_a10825vqe8;
        }
    };
    hs_a10925vqec.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.ForeignziCziTypes.hs_zdfEnumCInt);
    };
    hs_zdcenumFrom25vqee.evaluateOnce = function () {
        if (hs_a10925vqec.notEvaluated) {
            return hs_a10925vqec.hscall();
        } else {
            return hs_a10925vqec;
        }
    };
    hs_a11025vqeg.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.ForeignziCziTypes.hs_zdfEnumCInt);
    };
    hs_zdcenumFromThen25vqei.evaluateOnce = function () {
        if (hs_a11025vqeg.notEvaluated) {
            return hs_a11025vqeg.hscall();
        } else {
            return hs_a11025vqeg;
        }
    };
    hs_a11125vqek.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.ForeignziCziTypes.hs_zdfEnumCInt);
    };
    hs_zdcenumFromTo25vqem.evaluateOnce = function () {
        if (hs_a11125vqek.notEvaluated) {
            return hs_a11125vqek.hscall();
        } else {
            return hs_a11125vqek;
        }
    };
    hs_a11225vqeo.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.ForeignziCziTypes.hs_zdfEnumCInt);
    };
    hs_zdcenumFromThenTo25vqeq.evaluateOnce = function () {
        if (hs_a11225vqeo.notEvaluated) {
            return hs_a11225vqeo.hscall();
        } else {
            return hs_a11225vqeo;
        }
    };
    this.hs_zdfEnumFd.data = [hs_a10525vqdW, hs_a10625vqe0, hs_a10725vqe4, hs_a10825vqe8, hs_a10925vqec, hs_a11025vqeg, hs_a11125vqek, hs_a11225vqeo];
    hs_a11325vqes.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
    };
    hs_zdczp25vqeu.evaluateOnce = function () {
        if (hs_a11325vqes.notEvaluated) {
            return hs_a11325vqes.hscall();
        } else {
            return hs_a11325vqes;
        }
    };
    hs_a11425vqew.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
    };
    hs_zdczt25vqey.evaluateOnce = function () {
        if (hs_a11425vqew.notEvaluated) {
            return hs_a11425vqew.hscall();
        } else {
            return hs_a11425vqew;
        }
    };
    hs_a11525vqeA.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
    };
    hs_zdczm25vqeC.evaluateOnce = function () {
        if (hs_a11525vqeA.notEvaluated) {
            return hs_a11525vqeA.hscall();
        } else {
            return hs_a11525vqeA;
        }
    };
    hs_a11625vqeE.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
    };
    hs_zdcnegate25vqeG.evaluateOnce = function () {
        if (hs_a11625vqeE.notEvaluated) {
            return hs_a11625vqeE.hscall();
        } else {
            return hs_a11625vqeE;
        }
    };
    hs_a11725vqeI.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
    };
    hs_zdcabs25vqeK.evaluateOnce = function () {
        if (hs_a11725vqeI.notEvaluated) {
            return hs_a11725vqeI.hscall();
        } else {
            return hs_a11725vqeI;
        }
    };
    hs_a11825vqeM.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
    };
    hs_zdcsignum25vqeO.evaluateOnce = function () {
        if (hs_a11825vqeM.notEvaluated) {
            return hs_a11825vqeM.hscall();
        } else {
            return hs_a11825vqeM;
        }
    };
    hs_a11925vqeQ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
    };
    hs_zdcfromInteger25vqeS.evaluateOnce = function () {
        if (hs_a11925vqeQ.notEvaluated) {
            return hs_a11925vqeQ.hscall();
        } else {
            return hs_a11925vqeQ;
        }
    };
    hs_a12025vqeU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.ForeignziCziTypes.hs_zdfOrdCInt);
    };
    hs_zdccompare25vqeW.evaluateOnce = function () {
        if (hs_a12025vqeU.notEvaluated) {
            return hs_a12025vqeU.hscall();
        } else {
            return hs_a12025vqeU;
        }
    };
    hs_a12125vqeY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.ForeignziCziTypes.hs_zdfOrdCInt);
    };
    hs_zdczl25vqf0.evaluateOnce = function () {
        if (hs_a12125vqeY.notEvaluated) {
            return hs_a12125vqeY.hscall();
        } else {
            return hs_a12125vqeY;
        }
    };
    hs_a12225vqf2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.ForeignziCziTypes.hs_zdfOrdCInt);
    };
    hs_zdczgze25vqf4.evaluateOnce = function () {
        if (hs_a12225vqf2.notEvaluated) {
            return hs_a12225vqf2.hscall();
        } else {
            return hs_a12225vqf2;
        }
    };
    hs_a12325vqf6.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.ForeignziCziTypes.hs_zdfOrdCInt);
    };
    hs_zdczg25vqf8.evaluateOnce = function () {
        if (hs_a12325vqf6.notEvaluated) {
            return hs_a12325vqf6.hscall();
        } else {
            return hs_a12325vqf6;
        }
    };
    hs_a12425vqfa.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.ForeignziCziTypes.hs_zdfOrdCInt);
    };
    hs_zdczlze25vqfc.evaluateOnce = function () {
        if (hs_a12425vqfa.notEvaluated) {
            return hs_a12425vqfa.hscall();
        } else {
            return hs_a12425vqfa;
        }
    };
    hs_a12525vqfe.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.ForeignziCziTypes.hs_zdfOrdCInt);
    };
    hs_zdcmax25vqfg.evaluateOnce = function () {
        if (hs_a12525vqfe.notEvaluated) {
            return hs_a12525vqfe.hscall();
        } else {
            return hs_a12525vqfe;
        }
    };
    hs_a12625vqfi.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.ForeignziCziTypes.hs_zdfOrdCInt);
    };
    hs_zdcmin25vqfk.evaluateOnce = function () {
        if (hs_a12625vqfi.notEvaluated) {
            return hs_a12625vqfi.hscall();
        } else {
            return hs_a12625vqfi;
        }
    };
    hs_a12725vqfm.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt);
    };
    hs_zdczeze25vqfo.evaluateOnce = function () {
        if (hs_a12725vqfm.notEvaluated) {
            return hs_a12725vqfm.hscall();
        } else {
            return hs_a12725vqfm;
        }
    };
    hs_a12825vqfq.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt);
    };
    hs_zdczsze25vqfs.evaluateOnce = function () {
        if (hs_a12825vqfq.notEvaluated) {
            return hs_a12825vqfq.hscall();
        } else {
            return hs_a12825vqfq;
        }
    };
    this.hs_zdfEqFd.data = [hs_a12725vqfm, hs_a12825vqfq];
    this.hs_zdfOrdFd.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqFd, hs_a12025vqeU, hs_a12125vqeY, hs_a12225vqf2, hs_a12325vqf6, hs_a12425vqfa, hs_a12525vqfe, hs_a12625vqfi];
    this.hs_zdfNumFd.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqFd, $hs.modules.SystemziPosixziTypes.hs_zdfShowFd, hs_a11325vqes, hs_a11425vqew, hs_a11525vqeA, hs_a11625vqeE, hs_a11725vqeI, hs_a11825vqeM, hs_a11925vqeQ];
    this.hs_zdfRealFd.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumFd, $hs.modules.SystemziPosixziTypes.hs_zdfOrdFd, hs_a9625vqdm];
    this.hs_zdfIntegralFd.data = [$hs.modules.SystemziPosixziTypes.hs_zdfRealFd, $hs.modules.SystemziPosixziTypes.hs_zdfEnumFd, hs_a8725vqcM, hs_a8825vqcQ, hs_a8925vqcU, hs_a9025vqcY, hs_a9125vqd2, hs_a9225vqd6, hs_a9325vqda];
    this.hs_zdfBitsFd.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumFd, hs_a7025vqbG, hs_a7125vqbK, hs_a7225vqbO, hs_a7325vqbS, hs_a7425vqbW, hs_a7525vqc0, hs_a7625vqc4, hs_a7725vqc8, hs_a7825vqcc, hs_a7925vqcg, hs_a8025vqck, hs_a8125vqco, hs_a8225vqcs, hs_a8325vqcw, hs_a8425vqcA, hs_a8525vqcE, hs_a8625vqcI];
    hs_a12925vqfu.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdczizazi125vqfw.evaluateOnce = function () {
        if (hs_a12925vqfu.notEvaluated) {
            return hs_a12925vqfu.hscall();
        } else {
            return hs_a12925vqfu;
        }
    };
    hs_a13025vqfy.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdczizbzi125vqfA.evaluateOnce = function () {
        if (hs_a13025vqfy.notEvaluated) {
            return hs_a13025vqfy.hscall();
        } else {
            return hs_a13025vqfy;
        }
    };
    hs_a13125vqfC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcxor125vqfE.evaluateOnce = function () {
        if (hs_a13125vqfC.notEvaluated) {
            return hs_a13125vqfC.hscall();
        } else {
            return hs_a13125vqfC;
        }
    };
    hs_a13225vqfG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdccomplement125vqfI.evaluateOnce = function () {
        if (hs_a13225vqfG.notEvaluated) {
            return hs_a13225vqfG.hscall();
        } else {
            return hs_a13225vqfG;
        }
    };
    hs_a13325vqfK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshift125vqfM.evaluateOnce = function () {
        if (hs_a13325vqfK.notEvaluated) {
            return hs_a13325vqfK.hscall();
        } else {
            return hs_a13325vqfK;
        }
    };
    hs_a13425vqfO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotate125vqfQ.evaluateOnce = function () {
        if (hs_a13425vqfO.notEvaluated) {
            return hs_a13425vqfO.hscall();
        } else {
            return hs_a13425vqfO;
        }
    };
    hs_a13525vqfS.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcbit125vqfU.evaluateOnce = function () {
        if (hs_a13525vqfS.notEvaluated) {
            return hs_a13525vqfS.hscall();
        } else {
            return hs_a13525vqfS;
        }
    };
    hs_a13625vqfW.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcsetBit125vqfY.evaluateOnce = function () {
        if (hs_a13625vqfW.notEvaluated) {
            return hs_a13625vqfW.hscall();
        } else {
            return hs_a13625vqfW;
        }
    };
    hs_a13725vqg0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcclearBit125vqg2.evaluateOnce = function () {
        if (hs_a13725vqg0.notEvaluated) {
            return hs_a13725vqg0.hscall();
        } else {
            return hs_a13725vqg0;
        }
    };
    hs_a13825vqg4.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdccomplementBit125vqg6.evaluateOnce = function () {
        if (hs_a13825vqg4.notEvaluated) {
            return hs_a13825vqg4.hscall();
        } else {
            return hs_a13825vqg4;
        }
    };
    hs_a13925vqg8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdctestBit125vqga.evaluateOnce = function () {
        if (hs_a13925vqg8.notEvaluated) {
            return hs_a13925vqg8.hscall();
        } else {
            return hs_a13925vqg8;
        }
    };
    hs_a14025vqgc.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcbitSizze125vqge.evaluateOnce = function () {
        if (hs_a14025vqgc.notEvaluated) {
            return hs_a14025vqgc.hscall();
        } else {
            return hs_a14025vqgc;
        }
    };
    hs_a14125vqgg.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcisSigned125vqgi.evaluateOnce = function () {
        if (hs_a14125vqgg.notEvaluated) {
            return hs_a14125vqgg.hscall();
        } else {
            return hs_a14125vqgg;
        }
    };
    hs_a14225vqgk.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshiftL125vqgm.evaluateOnce = function () {
        if (hs_a14225vqgk.notEvaluated) {
            return hs_a14225vqgk.hscall();
        } else {
            return hs_a14225vqgk;
        }
    };
    hs_a14325vqgo.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshiftR125vqgq.evaluateOnce = function () {
        if (hs_a14325vqgo.notEvaluated) {
            return hs_a14325vqgo.hscall();
        } else {
            return hs_a14325vqgo;
        }
    };
    hs_a14425vqgs.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotateL125vqgu.evaluateOnce = function () {
        if (hs_a14425vqgs.notEvaluated) {
            return hs_a14425vqgs.hscall();
        } else {
            return hs_a14425vqgs;
        }
    };
    hs_a14525vqgw.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotateR125vqgy.evaluateOnce = function () {
        if (hs_a14525vqgw.notEvaluated) {
            return hs_a14525vqgw.hscall();
        } else {
            return hs_a14525vqgw;
        }
    };
    hs_a14625vqgA.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcquot125vqgC.evaluateOnce = function () {
        if (hs_a14625vqgA.notEvaluated) {
            return hs_a14625vqgA.hscall();
        } else {
            return hs_a14625vqgA;
        }
    };
    hs_a14725vqgE.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcrem125vqgG.evaluateOnce = function () {
        if (hs_a14725vqgE.notEvaluated) {
            return hs_a14725vqgE.hscall();
        } else {
            return hs_a14725vqgE;
        }
    };
    hs_a14825vqgI.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcdiv125vqgK.evaluateOnce = function () {
        if (hs_a14825vqgI.notEvaluated) {
            return hs_a14825vqgI.hscall();
        } else {
            return hs_a14825vqgI;
        }
    };
    hs_a14925vqgM.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcmod125vqgO.evaluateOnce = function () {
        if (hs_a14925vqgM.notEvaluated) {
            return hs_a14925vqgM.hscall();
        } else {
            return hs_a14925vqgM;
        }
    };
    hs_a15025vqgQ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcquotRem125vqgS.evaluateOnce = function () {
        if (hs_a15025vqgQ.notEvaluated) {
            return hs_a15025vqgQ.hscall();
        } else {
            return hs_a15025vqgQ;
        }
    };
    hs_a15125vqgU.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcdivMod125vqgW.evaluateOnce = function () {
        if (hs_a15125vqgU.notEvaluated) {
            return hs_a15125vqgU.hscall();
        } else {
            return hs_a15125vqgU;
        }
    };
    hs_a15225vqgY.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdctoInteger125vqh0.evaluateOnce = function () {
        if (hs_a15225vqgY.notEvaluated) {
            return hs_a15225vqgY.hscall();
        } else {
            return hs_a15225vqgY;
        }
    };
    hs_a15325vqh2.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord64);
    };
    hs_zdcminBound125vqh4.evaluateOnce = function () {
        if (hs_a15325vqh2.notEvaluated) {
            return hs_a15325vqh2.hscall();
        } else {
            return hs_a15325vqh2;
        }
    };
    hs_a15425vqh6.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord64);
    };
    hs_zdcmaxBound125vqh8.evaluateOnce = function () {
        if (hs_a15425vqh6.notEvaluated) {
            return hs_a15425vqh6.hscall();
        } else {
            return hs_a15425vqh6;
        }
    };
    this.hs_zdfBoundedCRLim.data = [hs_a15325vqh2, hs_a15425vqh6];
    hs_a15525vqha.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord64);
    };
    hs_zdctoRational125vqhc.evaluateOnce = function () {
        if (hs_a15525vqha.notEvaluated) {
            return hs_a15525vqha.hscall();
        } else {
            return hs_a15525vqha;
        }
    };
    hs_a15625vqhe.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcsizzeOf125vqhg.evaluateOnce = function () {
        if (hs_a15625vqhe.notEvaluated) {
            return hs_a15625vqhe.hscall();
        } else {
            return hs_a15625vqhe;
        }
    };
    hs_a15725vqhi.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcalignment125vqhk.evaluateOnce = function () {
        if (hs_a15725vqhi.notEvaluated) {
            return hs_a15725vqhi.hscall();
        } else {
            return hs_a15725vqhi;
        }
    };
    hs_a15825vqhm.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeekElemOff125vqho.evaluateOnce = function () {
        if (hs_a15825vqhm.notEvaluated) {
            return hs_a15825vqhm.hscall();
        } else {
            return hs_a15825vqhm;
        }
    };
    hs_a15925vqhq.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpokeElemOff125vqhs.evaluateOnce = function () {
        if (hs_a15925vqhq.notEvaluated) {
            return hs_a15925vqhq.hscall();
        } else {
            return hs_a15925vqhq;
        }
    };
    hs_a16025vqhu.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeekByteOff125vqhw.evaluateOnce = function () {
        if (hs_a16025vqhu.notEvaluated) {
            return hs_a16025vqhu.hscall();
        } else {
            return hs_a16025vqhu;
        }
    };
    hs_a16125vqhy.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpokeByteOff125vqhA.evaluateOnce = function () {
        if (hs_a16125vqhy.notEvaluated) {
            return hs_a16125vqhy.hscall();
        } else {
            return hs_a16125vqhy;
        }
    };
    hs_a16225vqhC.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeek125vqhE.evaluateOnce = function () {
        if (hs_a16225vqhC.notEvaluated) {
            return hs_a16225vqhC.hscall();
        } else {
            return hs_a16225vqhC;
        }
    };
    hs_a16325vqhG.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpoke125vqhI.evaluateOnce = function () {
        if (hs_a16325vqhG.notEvaluated) {
            return hs_a16325vqhG.hscall();
        } else {
            return hs_a16325vqhG;
        }
    };
    this.hs_zdfStorableCRLim.data = [hs_a15625vqhe, hs_a15725vqhi, hs_a15825vqhm, hs_a15925vqhq, hs_a16025vqhu, hs_a16125vqhy, hs_a16225vqhC, hs_a16325vqhG];
    hs_a16425vqhK.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcsucc125vqhM.evaluateOnce = function () {
        if (hs_a16425vqhK.notEvaluated) {
            return hs_a16425vqhK.hscall();
        } else {
            return hs_a16425vqhK;
        }
    };
    hs_a16525vqhO.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcpred125vqhQ.evaluateOnce = function () {
        if (hs_a16525vqhO.notEvaluated) {
            return hs_a16525vqhO.hscall();
        } else {
            return hs_a16525vqhO;
        }
    };
    hs_a16625vqhS.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdctoEnum125vqhU.evaluateOnce = function () {
        if (hs_a16625vqhS.notEvaluated) {
            return hs_a16625vqhS.hscall();
        } else {
            return hs_a16625vqhS;
        }
    };
    hs_a16725vqhW.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcfromEnum125vqhY.evaluateOnce = function () {
        if (hs_a16725vqhW.notEvaluated) {
            return hs_a16725vqhW.hscall();
        } else {
            return hs_a16725vqhW;
        }
    };
    hs_a16825vqi0.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFrom125vqi2.evaluateOnce = function () {
        if (hs_a16825vqi0.notEvaluated) {
            return hs_a16825vqi0.hscall();
        } else {
            return hs_a16825vqi0;
        }
    };
    hs_a16925vqi4.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromThen125vqi6.evaluateOnce = function () {
        if (hs_a16925vqi4.notEvaluated) {
            return hs_a16925vqi4.hscall();
        } else {
            return hs_a16925vqi4;
        }
    };
    hs_a17025vqi8.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromTo125vqia.evaluateOnce = function () {
        if (hs_a17025vqi8.notEvaluated) {
            return hs_a17025vqi8.hscall();
        } else {
            return hs_a17025vqi8;
        }
    };
    hs_a17125vqic.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromThenTo125vqie.evaluateOnce = function () {
        if (hs_a17125vqic.notEvaluated) {
            return hs_a17125vqic.hscall();
        } else {
            return hs_a17125vqic;
        }
    };
    this.hs_zdfEnumCRLim.data = [hs_a16425vqhK, hs_a16525vqhO, hs_a16625vqhS, hs_a16725vqhW, hs_a16825vqi0, hs_a16925vqi4, hs_a17025vqi8, hs_a17125vqic];
    hs_a17225vqig.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczp125vqii.evaluateOnce = function () {
        if (hs_a17225vqig.notEvaluated) {
            return hs_a17225vqig.hscall();
        } else {
            return hs_a17225vqig;
        }
    };
    hs_a17325vqik.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczt125vqim.evaluateOnce = function () {
        if (hs_a17325vqik.notEvaluated) {
            return hs_a17325vqik.hscall();
        } else {
            return hs_a17325vqik;
        }
    };
    hs_a17425vqio.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczm125vqiq.evaluateOnce = function () {
        if (hs_a17425vqio.notEvaluated) {
            return hs_a17425vqio.hscall();
        } else {
            return hs_a17425vqio;
        }
    };
    hs_a17525vqis.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcnegate125vqiu.evaluateOnce = function () {
        if (hs_a17525vqis.notEvaluated) {
            return hs_a17525vqis.hscall();
        } else {
            return hs_a17525vqis;
        }
    };
    hs_a17625vqiw.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcabs125vqiy.evaluateOnce = function () {
        if (hs_a17625vqiw.notEvaluated) {
            return hs_a17625vqiw.hscall();
        } else {
            return hs_a17625vqiw;
        }
    };
    hs_a17725vqiA.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcsignum125vqiC.evaluateOnce = function () {
        if (hs_a17725vqiA.notEvaluated) {
            return hs_a17725vqiA.hscall();
        } else {
            return hs_a17725vqiA;
        }
    };
    hs_a17825vqiE.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcfromInteger125vqiG.evaluateOnce = function () {
        if (hs_a17825vqiE.notEvaluated) {
            return hs_a17825vqiE.hscall();
        } else {
            return hs_a17825vqiE;
        }
    };
    hs_a17925vqiI.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdccompare125vqiK.evaluateOnce = function () {
        if (hs_a17925vqiI.notEvaluated) {
            return hs_a17925vqiI.hscall();
        } else {
            return hs_a17925vqiI;
        }
    };
    hs_a18025vqiM.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczl125vqiO.evaluateOnce = function () {
        if (hs_a18025vqiM.notEvaluated) {
            return hs_a18025vqiM.hscall();
        } else {
            return hs_a18025vqiM;
        }
    };
    hs_a18125vqiQ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczgze125vqiS.evaluateOnce = function () {
        if (hs_a18125vqiQ.notEvaluated) {
            return hs_a18125vqiQ.hscall();
        } else {
            return hs_a18125vqiQ;
        }
    };
    hs_a18225vqiU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczg125vqiW.evaluateOnce = function () {
        if (hs_a18225vqiU.notEvaluated) {
            return hs_a18225vqiU.hscall();
        } else {
            return hs_a18225vqiU;
        }
    };
    hs_a18325vqiY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczlze125vqj0.evaluateOnce = function () {
        if (hs_a18325vqiY.notEvaluated) {
            return hs_a18325vqiY.hscall();
        } else {
            return hs_a18325vqiY;
        }
    };
    hs_a18425vqj2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdcmax125vqj4.evaluateOnce = function () {
        if (hs_a18425vqj2.notEvaluated) {
            return hs_a18425vqj2.hscall();
        } else {
            return hs_a18425vqj2;
        }
    };
    hs_a18525vqj6.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdcmin125vqj8.evaluateOnce = function () {
        if (hs_a18525vqj6.notEvaluated) {
            return hs_a18525vqj6.hscall();
        } else {
            return hs_a18525vqj6;
        }
    };
    hs_a18625vqja.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64);
    };
    hs_zdczeze125vqjc.evaluateOnce = function () {
        if (hs_a18625vqja.notEvaluated) {
            return hs_a18625vqja.hscall();
        } else {
            return hs_a18625vqja;
        }
    };
    hs_a18725vqje.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64);
    };
    hs_zdczsze125vqjg.evaluateOnce = function () {
        if (hs_a18725vqje.notEvaluated) {
            return hs_a18725vqje.hscall();
        } else {
            return hs_a18725vqje;
        }
    };
    this.hs_zdfEqCRLim.data = [hs_a18625vqja, hs_a18725vqje];
    this.hs_zdfOrdCRLim.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCRLim, hs_a17925vqiI, hs_a18025vqiM, hs_a18125vqiQ, hs_a18225vqiU, hs_a18325vqiY, hs_a18425vqj2, hs_a18525vqj6];
    this.hs_zdfNumCRLim.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCRLim, $hs.modules.SystemziPosixziTypes.hs_zdfShowCRLim, hs_a17225vqig, hs_a17325vqik, hs_a17425vqio, hs_a17525vqis, hs_a17625vqiw, hs_a17725vqiA, hs_a17825vqiE];
    this.hs_zdfRealCRLim.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCRLim, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCRLim, hs_a15525vqha];
    this.hs_zdfIntegralCRLim.data = [$hs.modules.SystemziPosixziTypes.hs_zdfRealCRLim, $hs.modules.SystemziPosixziTypes.hs_zdfEnumCRLim, hs_a14625vqgA, hs_a14725vqgE, hs_a14825vqgI, hs_a14925vqgM, hs_a15025vqgQ, hs_a15125vqgU, hs_a15225vqgY];
    this.hs_zdfBitsCRLim.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCRLim, hs_a12925vqfu, hs_a13025vqfy, hs_a13125vqfC, hs_a13225vqfG, hs_a13325vqfK, hs_a13425vqfO, hs_a13525vqfS, hs_a13625vqfW, hs_a13725vqg0, hs_a13825vqg4, hs_a13925vqg8, hs_a14025vqgc, hs_a14125vqgg, hs_a14225vqgk, hs_a14325vqgo, hs_a14425vqgs, hs_a14525vqgw];
    hs_a18825vqji.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizazi225vqjk.evaluateOnce = function () {
        if (hs_a18825vqji.notEvaluated) {
            return hs_a18825vqji.hscall();
        } else {
            return hs_a18825vqji;
        }
    };
    hs_a18925vqjm.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizbzi225vqjo.evaluateOnce = function () {
        if (hs_a18925vqjm.notEvaluated) {
            return hs_a18925vqjm.hscall();
        } else {
            return hs_a18925vqjm;
        }
    };
    hs_a19025vqjq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcxor225vqjs.evaluateOnce = function () {
        if (hs_a19025vqjq.notEvaluated) {
            return hs_a19025vqjq.hscall();
        } else {
            return hs_a19025vqjq;
        }
    };
    hs_a19125vqju.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplement225vqjw.evaluateOnce = function () {
        if (hs_a19125vqju.notEvaluated) {
            return hs_a19125vqju.hscall();
        } else {
            return hs_a19125vqju;
        }
    };
    hs_a19225vqjy.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshift225vqjA.evaluateOnce = function () {
        if (hs_a19225vqjy.notEvaluated) {
            return hs_a19225vqjy.hscall();
        } else {
            return hs_a19225vqjy;
        }
    };
    hs_a19325vqjC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotate225vqjE.evaluateOnce = function () {
        if (hs_a19325vqjC.notEvaluated) {
            return hs_a19325vqjC.hscall();
        } else {
            return hs_a19325vqjC;
        }
    };
    hs_a19425vqjG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbit225vqjI.evaluateOnce = function () {
        if (hs_a19425vqjG.notEvaluated) {
            return hs_a19425vqjG.hscall();
        } else {
            return hs_a19425vqjG;
        }
    };
    hs_a19525vqjK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcsetBit225vqjM.evaluateOnce = function () {
        if (hs_a19525vqjK.notEvaluated) {
            return hs_a19525vqjK.hscall();
        } else {
            return hs_a19525vqjK;
        }
    };
    hs_a19625vqjO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcclearBit225vqjQ.evaluateOnce = function () {
        if (hs_a19625vqjO.notEvaluated) {
            return hs_a19625vqjO.hscall();
        } else {
            return hs_a19625vqjO;
        }
    };
    hs_a19725vqjS.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplementBit225vqjU.evaluateOnce = function () {
        if (hs_a19725vqjS.notEvaluated) {
            return hs_a19725vqjS.hscall();
        } else {
            return hs_a19725vqjS;
        }
    };
    hs_a19825vqjW.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdctestBit225vqjY.evaluateOnce = function () {
        if (hs_a19825vqjW.notEvaluated) {
            return hs_a19825vqjW.hscall();
        } else {
            return hs_a19825vqjW;
        }
    };
    hs_a19925vqk0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbitSizze225vqk2.evaluateOnce = function () {
        if (hs_a19925vqk0.notEvaluated) {
            return hs_a19925vqk0.hscall();
        } else {
            return hs_a19925vqk0;
        }
    };
    hs_a20025vqk4.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcisSigned225vqk6.evaluateOnce = function () {
        if (hs_a20025vqk4.notEvaluated) {
            return hs_a20025vqk4.hscall();
        } else {
            return hs_a20025vqk4;
        }
    };
    hs_a20125vqk8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftL225vqka.evaluateOnce = function () {
        if (hs_a20125vqk8.notEvaluated) {
            return hs_a20125vqk8.hscall();
        } else {
            return hs_a20125vqk8;
        }
    };
    hs_a20225vqkc.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftR225vqke.evaluateOnce = function () {
        if (hs_a20225vqkc.notEvaluated) {
            return hs_a20225vqkc.hscall();
        } else {
            return hs_a20225vqkc;
        }
    };
    hs_a20325vqkg.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateL225vqki.evaluateOnce = function () {
        if (hs_a20325vqkg.notEvaluated) {
            return hs_a20325vqkg.hscall();
        } else {
            return hs_a20325vqkg;
        }
    };
    hs_a20425vqkk.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateR225vqkm.evaluateOnce = function () {
        if (hs_a20425vqkk.notEvaluated) {
            return hs_a20425vqkk.hscall();
        } else {
            return hs_a20425vqkk;
        }
    };
    hs_a20525vqko.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquot225vqkq.evaluateOnce = function () {
        if (hs_a20525vqko.notEvaluated) {
            return hs_a20525vqko.hscall();
        } else {
            return hs_a20525vqko;
        }
    };
    hs_a20625vqks.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcrem225vqku.evaluateOnce = function () {
        if (hs_a20625vqks.notEvaluated) {
            return hs_a20625vqks.hscall();
        } else {
            return hs_a20625vqks;
        }
    };
    hs_a20725vqkw.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdiv225vqky.evaluateOnce = function () {
        if (hs_a20725vqkw.notEvaluated) {
            return hs_a20725vqkw.hscall();
        } else {
            return hs_a20725vqkw;
        }
    };
    hs_a20825vqkA.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcmod225vqkC.evaluateOnce = function () {
        if (hs_a20825vqkA.notEvaluated) {
            return hs_a20825vqkA.hscall();
        } else {
            return hs_a20825vqkA;
        }
    };
    hs_a20925vqkE.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquotRem225vqkG.evaluateOnce = function () {
        if (hs_a20925vqkE.notEvaluated) {
            return hs_a20925vqkE.hscall();
        } else {
            return hs_a20925vqkE;
        }
    };
    hs_a21025vqkI.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdivMod225vqkK.evaluateOnce = function () {
        if (hs_a21025vqkI.notEvaluated) {
            return hs_a21025vqkI.hscall();
        } else {
            return hs_a21025vqkI;
        }
    };
    hs_a21125vqkM.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdctoInteger225vqkO.evaluateOnce = function () {
        if (hs_a21125vqkM.notEvaluated) {
            return hs_a21125vqkM.hscall();
        } else {
            return hs_a21125vqkM;
        }
    };
    hs_a21225vqkQ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcminBound225vqkS.evaluateOnce = function () {
        if (hs_a21225vqkQ.notEvaluated) {
            return hs_a21225vqkQ.hscall();
        } else {
            return hs_a21225vqkQ;
        }
    };
    hs_a21325vqkU.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcmaxBound225vqkW.evaluateOnce = function () {
        if (hs_a21325vqkU.notEvaluated) {
            return hs_a21325vqkU.hscall();
        } else {
            return hs_a21325vqkU;
        }
    };
    this.hs_zdfBoundedCTcflag.data = [hs_a21225vqkQ, hs_a21325vqkU];
    hs_a21425vqkY.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord32);
    };
    hs_zdctoRational225vql0.evaluateOnce = function () {
        if (hs_a21425vqkY.notEvaluated) {
            return hs_a21425vqkY.hscall();
        } else {
            return hs_a21425vqkY;
        }
    };
    hs_a21525vql2.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcsizzeOf225vql4.evaluateOnce = function () {
        if (hs_a21525vql2.notEvaluated) {
            return hs_a21525vql2.hscall();
        } else {
            return hs_a21525vql2;
        }
    };
    hs_a21625vql6.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcalignment225vql8.evaluateOnce = function () {
        if (hs_a21625vql6.notEvaluated) {
            return hs_a21625vql6.hscall();
        } else {
            return hs_a21625vql6;
        }
    };
    hs_a21725vqla.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekElemOff225vqlc.evaluateOnce = function () {
        if (hs_a21725vqla.notEvaluated) {
            return hs_a21725vqla.hscall();
        } else {
            return hs_a21725vqla;
        }
    };
    hs_a21825vqle.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeElemOff225vqlg.evaluateOnce = function () {
        if (hs_a21825vqle.notEvaluated) {
            return hs_a21825vqle.hscall();
        } else {
            return hs_a21825vqle;
        }
    };
    hs_a21925vqli.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekByteOff225vqlk.evaluateOnce = function () {
        if (hs_a21925vqli.notEvaluated) {
            return hs_a21925vqli.hscall();
        } else {
            return hs_a21925vqli;
        }
    };
    hs_a22025vqlm.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeByteOff225vqlo.evaluateOnce = function () {
        if (hs_a22025vqlm.notEvaluated) {
            return hs_a22025vqlm.hscall();
        } else {
            return hs_a22025vqlm;
        }
    };
    hs_a22125vqlq.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeek225vqls.evaluateOnce = function () {
        if (hs_a22125vqlq.notEvaluated) {
            return hs_a22125vqlq.hscall();
        } else {
            return hs_a22125vqlq;
        }
    };
    hs_a22225vqlu.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpoke225vqlw.evaluateOnce = function () {
        if (hs_a22225vqlu.notEvaluated) {
            return hs_a22225vqlu.hscall();
        } else {
            return hs_a22225vqlu;
        }
    };
    this.hs_zdfStorableCTcflag.data = [hs_a21525vql2, hs_a21625vql6, hs_a21725vqla, hs_a21825vqle, hs_a21925vqli, hs_a22025vqlm, hs_a22125vqlq, hs_a22225vqlu];
    hs_a22325vqly.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcsucc225vqlA.evaluateOnce = function () {
        if (hs_a22325vqly.notEvaluated) {
            return hs_a22325vqly.hscall();
        } else {
            return hs_a22325vqly;
        }
    };
    hs_a22425vqlC.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcpred225vqlE.evaluateOnce = function () {
        if (hs_a22425vqlC.notEvaluated) {
            return hs_a22425vqlC.hscall();
        } else {
            return hs_a22425vqlC;
        }
    };
    hs_a22525vqlG.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdctoEnum225vqlI.evaluateOnce = function () {
        if (hs_a22525vqlG.notEvaluated) {
            return hs_a22525vqlG.hscall();
        } else {
            return hs_a22525vqlG;
        }
    };
    hs_a22625vqlK.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcfromEnum225vqlM.evaluateOnce = function () {
        if (hs_a22625vqlK.notEvaluated) {
            return hs_a22625vqlK.hscall();
        } else {
            return hs_a22625vqlK;
        }
    };
    hs_a22725vqlO.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFrom225vqlQ.evaluateOnce = function () {
        if (hs_a22725vqlO.notEvaluated) {
            return hs_a22725vqlO.hscall();
        } else {
            return hs_a22725vqlO;
        }
    };
    hs_a22825vqlS.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThen225vqlU.evaluateOnce = function () {
        if (hs_a22825vqlS.notEvaluated) {
            return hs_a22825vqlS.hscall();
        } else {
            return hs_a22825vqlS;
        }
    };
    hs_a22925vqlW.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromTo225vqlY.evaluateOnce = function () {
        if (hs_a22925vqlW.notEvaluated) {
            return hs_a22925vqlW.hscall();
        } else {
            return hs_a22925vqlW;
        }
    };
    hs_a23025vqm0.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThenTo225vqm2.evaluateOnce = function () {
        if (hs_a23025vqm0.notEvaluated) {
            return hs_a23025vqm0.hscall();
        } else {
            return hs_a23025vqm0;
        }
    };
    this.hs_zdfEnumCTcflag.data = [hs_a22325vqly, hs_a22425vqlC, hs_a22525vqlG, hs_a22625vqlK, hs_a22725vqlO, hs_a22825vqlS, hs_a22925vqlW, hs_a23025vqm0];
    hs_a23125vqm4.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczp225vqm6.evaluateOnce = function () {
        if (hs_a23125vqm4.notEvaluated) {
            return hs_a23125vqm4.hscall();
        } else {
            return hs_a23125vqm4;
        }
    };
    hs_a23225vqm8.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczt225vqma.evaluateOnce = function () {
        if (hs_a23225vqm8.notEvaluated) {
            return hs_a23225vqm8.hscall();
        } else {
            return hs_a23225vqm8;
        }
    };
    hs_a23325vqmc.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczm225vqme.evaluateOnce = function () {
        if (hs_a23325vqmc.notEvaluated) {
            return hs_a23325vqmc.hscall();
        } else {
            return hs_a23325vqmc;
        }
    };
    hs_a23425vqmg.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcnegate225vqmi.evaluateOnce = function () {
        if (hs_a23425vqmg.notEvaluated) {
            return hs_a23425vqmg.hscall();
        } else {
            return hs_a23425vqmg;
        }
    };
    hs_a23525vqmk.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcabs225vqmm.evaluateOnce = function () {
        if (hs_a23525vqmk.notEvaluated) {
            return hs_a23525vqmk.hscall();
        } else {
            return hs_a23525vqmk;
        }
    };
    hs_a23625vqmo.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcsignum225vqmq.evaluateOnce = function () {
        if (hs_a23625vqmo.notEvaluated) {
            return hs_a23625vqmo.hscall();
        } else {
            return hs_a23625vqmo;
        }
    };
    hs_a23725vqms.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcfromInteger225vqmu.evaluateOnce = function () {
        if (hs_a23725vqms.notEvaluated) {
            return hs_a23725vqms.hscall();
        } else {
            return hs_a23725vqms;
        }
    };
    hs_a23825vqmw.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdccompare225vqmy.evaluateOnce = function () {
        if (hs_a23825vqmw.notEvaluated) {
            return hs_a23825vqmw.hscall();
        } else {
            return hs_a23825vqmw;
        }
    };
    hs_a23925vqmA.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczl225vqmC.evaluateOnce = function () {
        if (hs_a23925vqmA.notEvaluated) {
            return hs_a23925vqmA.hscall();
        } else {
            return hs_a23925vqmA;
        }
    };
    hs_a24025vqmE.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczgze225vqmG.evaluateOnce = function () {
        if (hs_a24025vqmE.notEvaluated) {
            return hs_a24025vqmE.hscall();
        } else {
            return hs_a24025vqmE;
        }
    };
    hs_a24125vqmI.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczg225vqmK.evaluateOnce = function () {
        if (hs_a24125vqmI.notEvaluated) {
            return hs_a24125vqmI.hscall();
        } else {
            return hs_a24125vqmI;
        }
    };
    hs_a24225vqmM.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczlze225vqmO.evaluateOnce = function () {
        if (hs_a24225vqmM.notEvaluated) {
            return hs_a24225vqmM.hscall();
        } else {
            return hs_a24225vqmM;
        }
    };
    hs_a24325vqmQ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmax225vqmS.evaluateOnce = function () {
        if (hs_a24325vqmQ.notEvaluated) {
            return hs_a24325vqmQ.hscall();
        } else {
            return hs_a24325vqmQ;
        }
    };
    hs_a24425vqmU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmin225vqmW.evaluateOnce = function () {
        if (hs_a24425vqmU.notEvaluated) {
            return hs_a24425vqmU.hscall();
        } else {
            return hs_a24425vqmU;
        }
    };
    hs_a24525vqmY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczeze225vqn0.evaluateOnce = function () {
        if (hs_a24525vqmY.notEvaluated) {
            return hs_a24525vqmY.hscall();
        } else {
            return hs_a24525vqmY;
        }
    };
    hs_a24625vqn2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczsze225vqn4.evaluateOnce = function () {
        if (hs_a24625vqn2.notEvaluated) {
            return hs_a24625vqn2.hscall();
        } else {
            return hs_a24625vqn2;
        }
    };
    this.hs_zdfEqCTcflag.data = [hs_a24525vqmY, hs_a24625vqn2];
    this.hs_zdfOrdCTcflag.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCTcflag, hs_a23825vqmw, hs_a23925vqmA, hs_a24025vqmE, hs_a24125vqmI, hs_a24225vqmM, hs_a24325vqmQ, hs_a24425vqmU];
    this.hs_zdfNumCTcflag.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCTcflag, $hs.modules.SystemziPosixziTypes.hs_zdfShowCTcflag, hs_a23125vqm4, hs_a23225vqm8, hs_a23325vqmc, hs_a23425vqmg, hs_a23525vqmk, hs_a23625vqmo, hs_a23725vqms];
    this.hs_zdfRealCTcflag.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCTcflag, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCTcflag, hs_a21425vqkY];
    this.hs_zdfIntegralCTcflag.data = [$hs.modules.SystemziPosixziTypes.hs_zdfRealCTcflag, $hs.modules.SystemziPosixziTypes.hs_zdfEnumCTcflag, hs_a20525vqko, hs_a20625vqks, hs_a20725vqkw, hs_a20825vqkA, hs_a20925vqkE, hs_a21025vqkI, hs_a21125vqkM];
    this.hs_zdfBitsCTcflag.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCTcflag, hs_a18825vqji, hs_a18925vqjm, hs_a19025vqjq, hs_a19125vqju, hs_a19225vqjy, hs_a19325vqjC, hs_a19425vqjG, hs_a19525vqjK, hs_a19625vqjO, hs_a19725vqjS, hs_a19825vqjW, hs_a19925vqk0, hs_a20025vqk4, hs_a20125vqk8, hs_a20225vqkc, hs_a20325vqkg, hs_a20425vqkk];
    hs_a24725vqn6.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord32);
    };
    hs_zdctoRational325vqn8.evaluateOnce = function () {
        if (hs_a24725vqn6.notEvaluated) {
            return hs_a24725vqn6.hscall();
        } else {
            return hs_a24725vqn6;
        }
    };
    hs_a24825vqna.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcsizzeOf325vqnc.evaluateOnce = function () {
        if (hs_a24825vqna.notEvaluated) {
            return hs_a24825vqna.hscall();
        } else {
            return hs_a24825vqna;
        }
    };
    hs_a24925vqne.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcalignment325vqng.evaluateOnce = function () {
        if (hs_a24925vqne.notEvaluated) {
            return hs_a24925vqne.hscall();
        } else {
            return hs_a24925vqne;
        }
    };
    hs_a25025vqni.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekElemOff325vqnk.evaluateOnce = function () {
        if (hs_a25025vqni.notEvaluated) {
            return hs_a25025vqni.hscall();
        } else {
            return hs_a25025vqni;
        }
    };
    hs_a25125vqnm.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeElemOff325vqno.evaluateOnce = function () {
        if (hs_a25125vqnm.notEvaluated) {
            return hs_a25125vqnm.hscall();
        } else {
            return hs_a25125vqnm;
        }
    };
    hs_a25225vqnq.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekByteOff325vqns.evaluateOnce = function () {
        if (hs_a25225vqnq.notEvaluated) {
            return hs_a25225vqnq.hscall();
        } else {
            return hs_a25225vqnq;
        }
    };
    hs_a25325vqnu.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeByteOff325vqnw.evaluateOnce = function () {
        if (hs_a25325vqnu.notEvaluated) {
            return hs_a25325vqnu.hscall();
        } else {
            return hs_a25325vqnu;
        }
    };
    hs_a25425vqny.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeek325vqnA.evaluateOnce = function () {
        if (hs_a25425vqny.notEvaluated) {
            return hs_a25425vqny.hscall();
        } else {
            return hs_a25425vqny;
        }
    };
    hs_a25525vqnC.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpoke325vqnE.evaluateOnce = function () {
        if (hs_a25525vqnC.notEvaluated) {
            return hs_a25525vqnC.hscall();
        } else {
            return hs_a25525vqnC;
        }
    };
    this.hs_zdfStorableCSpeed.data = [hs_a24825vqna, hs_a24925vqne, hs_a25025vqni, hs_a25125vqnm, hs_a25225vqnq, hs_a25325vqnu, hs_a25425vqny, hs_a25525vqnC];
    hs_a25625vqnG.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcsucc325vqnI.evaluateOnce = function () {
        if (hs_a25625vqnG.notEvaluated) {
            return hs_a25625vqnG.hscall();
        } else {
            return hs_a25625vqnG;
        }
    };
    hs_a25725vqnK.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcpred325vqnM.evaluateOnce = function () {
        if (hs_a25725vqnK.notEvaluated) {
            return hs_a25725vqnK.hscall();
        } else {
            return hs_a25725vqnK;
        }
    };
    hs_a25825vqnO.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdctoEnum325vqnQ.evaluateOnce = function () {
        if (hs_a25825vqnO.notEvaluated) {
            return hs_a25825vqnO.hscall();
        } else {
            return hs_a25825vqnO;
        }
    };
    hs_a25925vqnS.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcfromEnum325vqnU.evaluateOnce = function () {
        if (hs_a25925vqnS.notEvaluated) {
            return hs_a25925vqnS.hscall();
        } else {
            return hs_a25925vqnS;
        }
    };
    hs_a26025vqnW.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFrom325vqnY.evaluateOnce = function () {
        if (hs_a26025vqnW.notEvaluated) {
            return hs_a26025vqnW.hscall();
        } else {
            return hs_a26025vqnW;
        }
    };
    hs_a26125vqo0.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThen325vqo2.evaluateOnce = function () {
        if (hs_a26125vqo0.notEvaluated) {
            return hs_a26125vqo0.hscall();
        } else {
            return hs_a26125vqo0;
        }
    };
    hs_a26225vqo4.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromTo325vqo6.evaluateOnce = function () {
        if (hs_a26225vqo4.notEvaluated) {
            return hs_a26225vqo4.hscall();
        } else {
            return hs_a26225vqo4;
        }
    };
    hs_a26325vqo8.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThenTo325vqoa.evaluateOnce = function () {
        if (hs_a26325vqo8.notEvaluated) {
            return hs_a26325vqo8.hscall();
        } else {
            return hs_a26325vqo8;
        }
    };
    this.hs_zdfEnumCSpeed.data = [hs_a25625vqnG, hs_a25725vqnK, hs_a25825vqnO, hs_a25925vqnS, hs_a26025vqnW, hs_a26125vqo0, hs_a26225vqo4, hs_a26325vqo8];
    hs_a26425vqoc.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczp325vqoe.evaluateOnce = function () {
        if (hs_a26425vqoc.notEvaluated) {
            return hs_a26425vqoc.hscall();
        } else {
            return hs_a26425vqoc;
        }
    };
    hs_a26525vqog.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczt325vqoi.evaluateOnce = function () {
        if (hs_a26525vqog.notEvaluated) {
            return hs_a26525vqog.hscall();
        } else {
            return hs_a26525vqog;
        }
    };
    hs_a26625vqok.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczm325vqom.evaluateOnce = function () {
        if (hs_a26625vqok.notEvaluated) {
            return hs_a26625vqok.hscall();
        } else {
            return hs_a26625vqok;
        }
    };
    hs_a26725vqoo.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcnegate325vqoq.evaluateOnce = function () {
        if (hs_a26725vqoo.notEvaluated) {
            return hs_a26725vqoo.hscall();
        } else {
            return hs_a26725vqoo;
        }
    };
    hs_a26825vqos.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcabs325vqou.evaluateOnce = function () {
        if (hs_a26825vqos.notEvaluated) {
            return hs_a26825vqos.hscall();
        } else {
            return hs_a26825vqos;
        }
    };
    hs_a26925vqow.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcsignum325vqoy.evaluateOnce = function () {
        if (hs_a26925vqow.notEvaluated) {
            return hs_a26925vqow.hscall();
        } else {
            return hs_a26925vqow;
        }
    };
    hs_a27025vqoA.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcfromInteger325vqoC.evaluateOnce = function () {
        if (hs_a27025vqoA.notEvaluated) {
            return hs_a27025vqoA.hscall();
        } else {
            return hs_a27025vqoA;
        }
    };
    hs_a27125vqoE.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdccompare325vqoG.evaluateOnce = function () {
        if (hs_a27125vqoE.notEvaluated) {
            return hs_a27125vqoE.hscall();
        } else {
            return hs_a27125vqoE;
        }
    };
    hs_a27225vqoI.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczl325vqoK.evaluateOnce = function () {
        if (hs_a27225vqoI.notEvaluated) {
            return hs_a27225vqoI.hscall();
        } else {
            return hs_a27225vqoI;
        }
    };
    hs_a27325vqoM.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczgze325vqoO.evaluateOnce = function () {
        if (hs_a27325vqoM.notEvaluated) {
            return hs_a27325vqoM.hscall();
        } else {
            return hs_a27325vqoM;
        }
    };
    hs_a27425vqoQ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczg325vqoS.evaluateOnce = function () {
        if (hs_a27425vqoQ.notEvaluated) {
            return hs_a27425vqoQ.hscall();
        } else {
            return hs_a27425vqoQ;
        }
    };
    hs_a27525vqoU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczlze325vqoW.evaluateOnce = function () {
        if (hs_a27525vqoU.notEvaluated) {
            return hs_a27525vqoU.hscall();
        } else {
            return hs_a27525vqoU;
        }
    };
    hs_a27625vqoY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmax325vqp0.evaluateOnce = function () {
        if (hs_a27625vqoY.notEvaluated) {
            return hs_a27625vqoY.hscall();
        } else {
            return hs_a27625vqoY;
        }
    };
    hs_a27725vqp2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmin325vqp4.evaluateOnce = function () {
        if (hs_a27725vqp2.notEvaluated) {
            return hs_a27725vqp2.hscall();
        } else {
            return hs_a27725vqp2;
        }
    };
    hs_a27825vqp6.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczeze325vqp8.evaluateOnce = function () {
        if (hs_a27825vqp6.notEvaluated) {
            return hs_a27825vqp6.hscall();
        } else {
            return hs_a27825vqp6;
        }
    };
    hs_a27925vqpa.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczsze325vqpc.evaluateOnce = function () {
        if (hs_a27925vqpa.notEvaluated) {
            return hs_a27925vqpa.hscall();
        } else {
            return hs_a27925vqpa;
        }
    };
    this.hs_zdfEqCSpeed.data = [hs_a27825vqp6, hs_a27925vqpa];
    this.hs_zdfOrdCSpeed.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCSpeed, hs_a27125vqoE, hs_a27225vqoI, hs_a27325vqoM, hs_a27425vqoQ, hs_a27525vqoU, hs_a27625vqoY, hs_a27725vqp2];
    this.hs_zdfNumCSpeed.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCSpeed, $hs.modules.SystemziPosixziTypes.hs_zdfShowCSpeed, hs_a26425vqoc, hs_a26525vqog, hs_a26625vqok, hs_a26725vqoo, hs_a26825vqos, hs_a26925vqow, hs_a27025vqoA];
    this.hs_zdfRealCSpeed.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCSpeed, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCSpeed, hs_a24725vqn6];
    hs_a28025vqpe.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord8);
    };
    hs_zdctoRational425vqpg.evaluateOnce = function () {
        if (hs_a28025vqpe.notEvaluated) {
            return hs_a28025vqpe.hscall();
        } else {
            return hs_a28025vqpe;
        }
    };
    hs_a28125vqpi.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcsizzeOf425vqpk.evaluateOnce = function () {
        if (hs_a28125vqpi.notEvaluated) {
            return hs_a28125vqpi.hscall();
        } else {
            return hs_a28125vqpi;
        }
    };
    hs_a28225vqpm.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcalignment425vqpo.evaluateOnce = function () {
        if (hs_a28225vqpm.notEvaluated) {
            return hs_a28225vqpm.hscall();
        } else {
            return hs_a28225vqpm;
        }
    };
    hs_a28325vqpq.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcpeekElemOff425vqps.evaluateOnce = function () {
        if (hs_a28325vqpq.notEvaluated) {
            return hs_a28325vqpq.hscall();
        } else {
            return hs_a28325vqpq;
        }
    };
    hs_a28425vqpu.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcpokeElemOff425vqpw.evaluateOnce = function () {
        if (hs_a28425vqpu.notEvaluated) {
            return hs_a28425vqpu.hscall();
        } else {
            return hs_a28425vqpu;
        }
    };
    hs_a28525vqpy.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcpeekByteOff425vqpA.evaluateOnce = function () {
        if (hs_a28525vqpy.notEvaluated) {
            return hs_a28525vqpy.hscall();
        } else {
            return hs_a28525vqpy;
        }
    };
    hs_a28625vqpC.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcpokeByteOff425vqpE.evaluateOnce = function () {
        if (hs_a28625vqpC.notEvaluated) {
            return hs_a28625vqpC.hscall();
        } else {
            return hs_a28625vqpC;
        }
    };
    hs_a28725vqpG.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcpeek425vqpI.evaluateOnce = function () {
        if (hs_a28725vqpG.notEvaluated) {
            return hs_a28725vqpG.hscall();
        } else {
            return hs_a28725vqpG;
        }
    };
    hs_a28825vqpK.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcpoke425vqpM.evaluateOnce = function () {
        if (hs_a28825vqpK.notEvaluated) {
            return hs_a28825vqpK.hscall();
        } else {
            return hs_a28825vqpK;
        }
    };
    this.hs_zdfStorableCCc.data = [hs_a28125vqpi, hs_a28225vqpm, hs_a28325vqpq, hs_a28425vqpu, hs_a28525vqpy, hs_a28625vqpC, hs_a28725vqpG, hs_a28825vqpK];
    hs_a28925vqpO.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcsucc425vqpQ.evaluateOnce = function () {
        if (hs_a28925vqpO.notEvaluated) {
            return hs_a28925vqpO.hscall();
        } else {
            return hs_a28925vqpO;
        }
    };
    hs_a29025vqpS.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcpred425vqpU.evaluateOnce = function () {
        if (hs_a29025vqpS.notEvaluated) {
            return hs_a29025vqpS.hscall();
        } else {
            return hs_a29025vqpS;
        }
    };
    hs_a29125vqpW.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdctoEnum425vqpY.evaluateOnce = function () {
        if (hs_a29125vqpW.notEvaluated) {
            return hs_a29125vqpW.hscall();
        } else {
            return hs_a29125vqpW;
        }
    };
    hs_a29225vqq0.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcfromEnum425vqq2.evaluateOnce = function () {
        if (hs_a29225vqq0.notEvaluated) {
            return hs_a29225vqq0.hscall();
        } else {
            return hs_a29225vqq0;
        }
    };
    hs_a29325vqq4.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcenumFrom425vqq6.evaluateOnce = function () {
        if (hs_a29325vqq4.notEvaluated) {
            return hs_a29325vqq4.hscall();
        } else {
            return hs_a29325vqq4;
        }
    };
    hs_a29425vqq8.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcenumFromThen425vqqa.evaluateOnce = function () {
        if (hs_a29425vqq8.notEvaluated) {
            return hs_a29425vqq8.hscall();
        } else {
            return hs_a29425vqq8;
        }
    };
    hs_a29525vqqc.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcenumFromTo425vqqe.evaluateOnce = function () {
        if (hs_a29525vqqc.notEvaluated) {
            return hs_a29525vqqc.hscall();
        } else {
            return hs_a29525vqqc;
        }
    };
    hs_a29625vqqg.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcenumFromThenTo425vqqi.evaluateOnce = function () {
        if (hs_a29625vqqg.notEvaluated) {
            return hs_a29625vqqg.hscall();
        } else {
            return hs_a29625vqqg;
        }
    };
    this.hs_zdfEnumCCc.data = [hs_a28925vqpO, hs_a29025vqpS, hs_a29125vqpW, hs_a29225vqq0, hs_a29325vqq4, hs_a29425vqq8, hs_a29525vqqc, hs_a29625vqqg];
    hs_a29725vqqk.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdczp425vqqm.evaluateOnce = function () {
        if (hs_a29725vqqk.notEvaluated) {
            return hs_a29725vqqk.hscall();
        } else {
            return hs_a29725vqqk;
        }
    };
    hs_a29825vqqo.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdczt425vqqq.evaluateOnce = function () {
        if (hs_a29825vqqo.notEvaluated) {
            return hs_a29825vqqo.hscall();
        } else {
            return hs_a29825vqqo;
        }
    };
    hs_a29925vqqs.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdczm425vqqu.evaluateOnce = function () {
        if (hs_a29925vqqs.notEvaluated) {
            return hs_a29925vqqs.hscall();
        } else {
            return hs_a29925vqqs;
        }
    };
    hs_a30025vqqw.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdcnegate425vqqy.evaluateOnce = function () {
        if (hs_a30025vqqw.notEvaluated) {
            return hs_a30025vqqw.hscall();
        } else {
            return hs_a30025vqqw;
        }
    };
    hs_a30125vqqA.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdcabs425vqqC.evaluateOnce = function () {
        if (hs_a30125vqqA.notEvaluated) {
            return hs_a30125vqqA.hscall();
        } else {
            return hs_a30125vqqA;
        }
    };
    hs_a30225vqqE.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdcsignum425vqqG.evaluateOnce = function () {
        if (hs_a30225vqqE.notEvaluated) {
            return hs_a30225vqqE.hscall();
        } else {
            return hs_a30225vqqE;
        }
    };
    hs_a30325vqqI.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdcfromInteger425vqqK.evaluateOnce = function () {
        if (hs_a30325vqqI.notEvaluated) {
            return hs_a30325vqqI.hscall();
        } else {
            return hs_a30325vqqI;
        }
    };
    hs_a30425vqqM.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdccompare425vqqO.evaluateOnce = function () {
        if (hs_a30425vqqM.notEvaluated) {
            return hs_a30425vqqM.hscall();
        } else {
            return hs_a30425vqqM;
        }
    };
    hs_a30525vqqQ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdczl425vqqS.evaluateOnce = function () {
        if (hs_a30525vqqQ.notEvaluated) {
            return hs_a30525vqqQ.hscall();
        } else {
            return hs_a30525vqqQ;
        }
    };
    hs_a30625vqqU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdczgze425vqqW.evaluateOnce = function () {
        if (hs_a30625vqqU.notEvaluated) {
            return hs_a30625vqqU.hscall();
        } else {
            return hs_a30625vqqU;
        }
    };
    hs_a30725vqqY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdczg425vqr0.evaluateOnce = function () {
        if (hs_a30725vqqY.notEvaluated) {
            return hs_a30725vqqY.hscall();
        } else {
            return hs_a30725vqqY;
        }
    };
    hs_a30825vqr2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdczlze425vqr4.evaluateOnce = function () {
        if (hs_a30825vqr2.notEvaluated) {
            return hs_a30825vqr2.hscall();
        } else {
            return hs_a30825vqr2;
        }
    };
    hs_a30925vqr6.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdcmax425vqr8.evaluateOnce = function () {
        if (hs_a30925vqr6.notEvaluated) {
            return hs_a30925vqr6.hscall();
        } else {
            return hs_a30925vqr6;
        }
    };
    hs_a31025vqra.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdcmin425vqrc.evaluateOnce = function () {
        if (hs_a31025vqra.notEvaluated) {
            return hs_a31025vqra.hscall();
        } else {
            return hs_a31025vqra;
        }
    };
    hs_a31125vqre.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8);
    };
    hs_zdczeze425vqrg.evaluateOnce = function () {
        if (hs_a31125vqre.notEvaluated) {
            return hs_a31125vqre.hscall();
        } else {
            return hs_a31125vqre;
        }
    };
    hs_a31225vqri.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8);
    };
    hs_zdczsze425vqrk.evaluateOnce = function () {
        if (hs_a31225vqri.notEvaluated) {
            return hs_a31225vqri.hscall();
        } else {
            return hs_a31225vqri;
        }
    };
    this.hs_zdfEqCCc.data = [hs_a31125vqre, hs_a31225vqri];
    this.hs_zdfOrdCCc.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCCc, hs_a30425vqqM, hs_a30525vqqQ, hs_a30625vqqU, hs_a30725vqqY, hs_a30825vqr2, hs_a30925vqr6, hs_a31025vqra];
    this.hs_zdfNumCCc.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCCc, $hs.modules.SystemziPosixziTypes.hs_zdfShowCCc, hs_a29725vqqk, hs_a29825vqqo, hs_a29925vqqs, hs_a30025vqqw, hs_a30125vqqA, hs_a30225vqqE, hs_a30325vqqI];
    this.hs_zdfRealCCc.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCCc, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCCc, hs_a28025vqpe];
    hs_a31325vqrm.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizazi325vqro.evaluateOnce = function () {
        if (hs_a31325vqrm.notEvaluated) {
            return hs_a31325vqrm.hscall();
        } else {
            return hs_a31325vqrm;
        }
    };
    hs_a31425vqrq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizbzi325vqrs.evaluateOnce = function () {
        if (hs_a31425vqrq.notEvaluated) {
            return hs_a31425vqrq.hscall();
        } else {
            return hs_a31425vqrq;
        }
    };
    hs_a31525vqru.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcxor325vqrw.evaluateOnce = function () {
        if (hs_a31525vqru.notEvaluated) {
            return hs_a31525vqru.hscall();
        } else {
            return hs_a31525vqru;
        }
    };
    hs_a31625vqry.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplement325vqrA.evaluateOnce = function () {
        if (hs_a31625vqry.notEvaluated) {
            return hs_a31625vqry.hscall();
        } else {
            return hs_a31625vqry;
        }
    };
    hs_a31725vqrC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshift325vqrE.evaluateOnce = function () {
        if (hs_a31725vqrC.notEvaluated) {
            return hs_a31725vqrC.hscall();
        } else {
            return hs_a31725vqrC;
        }
    };
    hs_a31825vqrG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotate325vqrI.evaluateOnce = function () {
        if (hs_a31825vqrG.notEvaluated) {
            return hs_a31825vqrG.hscall();
        } else {
            return hs_a31825vqrG;
        }
    };
    hs_a31925vqrK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbit325vqrM.evaluateOnce = function () {
        if (hs_a31925vqrK.notEvaluated) {
            return hs_a31925vqrK.hscall();
        } else {
            return hs_a31925vqrK;
        }
    };
    hs_a32025vqrO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcsetBit325vqrQ.evaluateOnce = function () {
        if (hs_a32025vqrO.notEvaluated) {
            return hs_a32025vqrO.hscall();
        } else {
            return hs_a32025vqrO;
        }
    };
    hs_a32125vqrS.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcclearBit325vqrU.evaluateOnce = function () {
        if (hs_a32125vqrS.notEvaluated) {
            return hs_a32125vqrS.hscall();
        } else {
            return hs_a32125vqrS;
        }
    };
    hs_a32225vqrW.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplementBit325vqrY.evaluateOnce = function () {
        if (hs_a32225vqrW.notEvaluated) {
            return hs_a32225vqrW.hscall();
        } else {
            return hs_a32225vqrW;
        }
    };
    hs_a32325vqs0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdctestBit325vqs2.evaluateOnce = function () {
        if (hs_a32325vqs0.notEvaluated) {
            return hs_a32325vqs0.hscall();
        } else {
            return hs_a32325vqs0;
        }
    };
    hs_a32425vqs4.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbitSizze325vqs6.evaluateOnce = function () {
        if (hs_a32425vqs4.notEvaluated) {
            return hs_a32425vqs4.hscall();
        } else {
            return hs_a32425vqs4;
        }
    };
    hs_a32525vqs8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcisSigned325vqsa.evaluateOnce = function () {
        if (hs_a32525vqs8.notEvaluated) {
            return hs_a32525vqs8.hscall();
        } else {
            return hs_a32525vqs8;
        }
    };
    hs_a32625vqsc.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftL325vqse.evaluateOnce = function () {
        if (hs_a32625vqsc.notEvaluated) {
            return hs_a32625vqsc.hscall();
        } else {
            return hs_a32625vqsc;
        }
    };
    hs_a32725vqsg.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftR325vqsi.evaluateOnce = function () {
        if (hs_a32725vqsg.notEvaluated) {
            return hs_a32725vqsg.hscall();
        } else {
            return hs_a32725vqsg;
        }
    };
    hs_a32825vqsk.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateL325vqsm.evaluateOnce = function () {
        if (hs_a32825vqsk.notEvaluated) {
            return hs_a32825vqsk.hscall();
        } else {
            return hs_a32825vqsk;
        }
    };
    hs_a32925vqso.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateR325vqsq.evaluateOnce = function () {
        if (hs_a32925vqso.notEvaluated) {
            return hs_a32925vqso.hscall();
        } else {
            return hs_a32925vqso;
        }
    };
    hs_a33025vqss.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquot325vqsu.evaluateOnce = function () {
        if (hs_a33025vqss.notEvaluated) {
            return hs_a33025vqss.hscall();
        } else {
            return hs_a33025vqss;
        }
    };
    hs_a33125vqsw.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcrem325vqsy.evaluateOnce = function () {
        if (hs_a33125vqsw.notEvaluated) {
            return hs_a33125vqsw.hscall();
        } else {
            return hs_a33125vqsw;
        }
    };
    hs_a33225vqsA.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdiv325vqsC.evaluateOnce = function () {
        if (hs_a33225vqsA.notEvaluated) {
            return hs_a33225vqsA.hscall();
        } else {
            return hs_a33225vqsA;
        }
    };
    hs_a33325vqsE.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcmod325vqsG.evaluateOnce = function () {
        if (hs_a33325vqsE.notEvaluated) {
            return hs_a33325vqsE.hscall();
        } else {
            return hs_a33325vqsE;
        }
    };
    hs_a33425vqsI.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquotRem325vqsK.evaluateOnce = function () {
        if (hs_a33425vqsI.notEvaluated) {
            return hs_a33425vqsI.hscall();
        } else {
            return hs_a33425vqsI;
        }
    };
    hs_a33525vqsM.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdivMod325vqsO.evaluateOnce = function () {
        if (hs_a33525vqsM.notEvaluated) {
            return hs_a33525vqsM.hscall();
        } else {
            return hs_a33525vqsM;
        }
    };
    hs_a33625vqsQ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdctoInteger325vqsS.evaluateOnce = function () {
        if (hs_a33625vqsQ.notEvaluated) {
            return hs_a33625vqsQ.hscall();
        } else {
            return hs_a33625vqsQ;
        }
    };
    hs_a33725vqsU.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcminBound325vqsW.evaluateOnce = function () {
        if (hs_a33725vqsU.notEvaluated) {
            return hs_a33725vqsU.hscall();
        } else {
            return hs_a33725vqsU;
        }
    };
    hs_a33825vqsY.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcmaxBound325vqt0.evaluateOnce = function () {
        if (hs_a33825vqsY.notEvaluated) {
            return hs_a33825vqsY.hscall();
        } else {
            return hs_a33825vqsY;
        }
    };
    this.hs_zdfBoundedCUid.data = [hs_a33725vqsU, hs_a33825vqsY];
    hs_a33925vqt2.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord32);
    };
    hs_zdctoRational525vqt4.evaluateOnce = function () {
        if (hs_a33925vqt2.notEvaluated) {
            return hs_a33925vqt2.hscall();
        } else {
            return hs_a33925vqt2;
        }
    };
    hs_a34025vqt6.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcsizzeOf525vqt8.evaluateOnce = function () {
        if (hs_a34025vqt6.notEvaluated) {
            return hs_a34025vqt6.hscall();
        } else {
            return hs_a34025vqt6;
        }
    };
    hs_a34125vqta.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcalignment525vqtc.evaluateOnce = function () {
        if (hs_a34125vqta.notEvaluated) {
            return hs_a34125vqta.hscall();
        } else {
            return hs_a34125vqta;
        }
    };
    hs_a34225vqte.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekElemOff525vqtg.evaluateOnce = function () {
        if (hs_a34225vqte.notEvaluated) {
            return hs_a34225vqte.hscall();
        } else {
            return hs_a34225vqte;
        }
    };
    hs_a34325vqti.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeElemOff525vqtk.evaluateOnce = function () {
        if (hs_a34325vqti.notEvaluated) {
            return hs_a34325vqti.hscall();
        } else {
            return hs_a34325vqti;
        }
    };
    hs_a34425vqtm.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekByteOff525vqto.evaluateOnce = function () {
        if (hs_a34425vqtm.notEvaluated) {
            return hs_a34425vqtm.hscall();
        } else {
            return hs_a34425vqtm;
        }
    };
    hs_a34525vqtq.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeByteOff525vqts.evaluateOnce = function () {
        if (hs_a34525vqtq.notEvaluated) {
            return hs_a34525vqtq.hscall();
        } else {
            return hs_a34525vqtq;
        }
    };
    hs_a34625vqtu.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeek525vqtw.evaluateOnce = function () {
        if (hs_a34625vqtu.notEvaluated) {
            return hs_a34625vqtu.hscall();
        } else {
            return hs_a34625vqtu;
        }
    };
    hs_a34725vqty.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpoke525vqtA.evaluateOnce = function () {
        if (hs_a34725vqty.notEvaluated) {
            return hs_a34725vqty.hscall();
        } else {
            return hs_a34725vqty;
        }
    };
    this.hs_zdfStorableCUid.data = [hs_a34025vqt6, hs_a34125vqta, hs_a34225vqte, hs_a34325vqti, hs_a34425vqtm, hs_a34525vqtq, hs_a34625vqtu, hs_a34725vqty];
    hs_a34825vqtC.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcsucc525vqtE.evaluateOnce = function () {
        if (hs_a34825vqtC.notEvaluated) {
            return hs_a34825vqtC.hscall();
        } else {
            return hs_a34825vqtC;
        }
    };
    hs_a34925vqtG.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcpred525vqtI.evaluateOnce = function () {
        if (hs_a34925vqtG.notEvaluated) {
            return hs_a34925vqtG.hscall();
        } else {
            return hs_a34925vqtG;
        }
    };
    hs_a35025vqtK.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdctoEnum525vqtM.evaluateOnce = function () {
        if (hs_a35025vqtK.notEvaluated) {
            return hs_a35025vqtK.hscall();
        } else {
            return hs_a35025vqtK;
        }
    };
    hs_a35125vqtO.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcfromEnum525vqtQ.evaluateOnce = function () {
        if (hs_a35125vqtO.notEvaluated) {
            return hs_a35125vqtO.hscall();
        } else {
            return hs_a35125vqtO;
        }
    };
    hs_a35225vqtS.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFrom525vqtU.evaluateOnce = function () {
        if (hs_a35225vqtS.notEvaluated) {
            return hs_a35225vqtS.hscall();
        } else {
            return hs_a35225vqtS;
        }
    };
    hs_a35325vqtW.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThen525vqtY.evaluateOnce = function () {
        if (hs_a35325vqtW.notEvaluated) {
            return hs_a35325vqtW.hscall();
        } else {
            return hs_a35325vqtW;
        }
    };
    hs_a35425vqu0.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromTo525vqu2.evaluateOnce = function () {
        if (hs_a35425vqu0.notEvaluated) {
            return hs_a35425vqu0.hscall();
        } else {
            return hs_a35425vqu0;
        }
    };
    hs_a35525vqu4.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThenTo525vqu6.evaluateOnce = function () {
        if (hs_a35525vqu4.notEvaluated) {
            return hs_a35525vqu4.hscall();
        } else {
            return hs_a35525vqu4;
        }
    };
    this.hs_zdfEnumCUid.data = [hs_a34825vqtC, hs_a34925vqtG, hs_a35025vqtK, hs_a35125vqtO, hs_a35225vqtS, hs_a35325vqtW, hs_a35425vqu0, hs_a35525vqu4];
    hs_a35625vqu8.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczp525vqua.evaluateOnce = function () {
        if (hs_a35625vqu8.notEvaluated) {
            return hs_a35625vqu8.hscall();
        } else {
            return hs_a35625vqu8;
        }
    };
    hs_a35725vquc.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczt525vque.evaluateOnce = function () {
        if (hs_a35725vquc.notEvaluated) {
            return hs_a35725vquc.hscall();
        } else {
            return hs_a35725vquc;
        }
    };
    hs_a35825vqug.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczm525vqui.evaluateOnce = function () {
        if (hs_a35825vqug.notEvaluated) {
            return hs_a35825vqug.hscall();
        } else {
            return hs_a35825vqug;
        }
    };
    hs_a35925vquk.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcnegate525vqum.evaluateOnce = function () {
        if (hs_a35925vquk.notEvaluated) {
            return hs_a35925vquk.hscall();
        } else {
            return hs_a35925vquk;
        }
    };
    hs_a36025vquo.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcabs525vquq.evaluateOnce = function () {
        if (hs_a36025vquo.notEvaluated) {
            return hs_a36025vquo.hscall();
        } else {
            return hs_a36025vquo;
        }
    };
    hs_a36125vqus.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcsignum525vquu.evaluateOnce = function () {
        if (hs_a36125vqus.notEvaluated) {
            return hs_a36125vqus.hscall();
        } else {
            return hs_a36125vqus;
        }
    };
    hs_a36225vquw.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcfromInteger525vquy.evaluateOnce = function () {
        if (hs_a36225vquw.notEvaluated) {
            return hs_a36225vquw.hscall();
        } else {
            return hs_a36225vquw;
        }
    };
    hs_a36325vquA.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdccompare525vquC.evaluateOnce = function () {
        if (hs_a36325vquA.notEvaluated) {
            return hs_a36325vquA.hscall();
        } else {
            return hs_a36325vquA;
        }
    };
    hs_a36425vquE.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczl525vquG.evaluateOnce = function () {
        if (hs_a36425vquE.notEvaluated) {
            return hs_a36425vquE.hscall();
        } else {
            return hs_a36425vquE;
        }
    };
    hs_a36525vquI.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczgze525vquK.evaluateOnce = function () {
        if (hs_a36525vquI.notEvaluated) {
            return hs_a36525vquI.hscall();
        } else {
            return hs_a36525vquI;
        }
    };
    hs_a36625vquM.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczg525vquO.evaluateOnce = function () {
        if (hs_a36625vquM.notEvaluated) {
            return hs_a36625vquM.hscall();
        } else {
            return hs_a36625vquM;
        }
    };
    hs_a36725vquQ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczlze525vquS.evaluateOnce = function () {
        if (hs_a36725vquQ.notEvaluated) {
            return hs_a36725vquQ.hscall();
        } else {
            return hs_a36725vquQ;
        }
    };
    hs_a36825vquU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmax525vquW.evaluateOnce = function () {
        if (hs_a36825vquU.notEvaluated) {
            return hs_a36825vquU.hscall();
        } else {
            return hs_a36825vquU;
        }
    };
    hs_a36925vquY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmin525vqv0.evaluateOnce = function () {
        if (hs_a36925vquY.notEvaluated) {
            return hs_a36925vquY.hscall();
        } else {
            return hs_a36925vquY;
        }
    };
    hs_a37025vqv2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczeze525vqv4.evaluateOnce = function () {
        if (hs_a37025vqv2.notEvaluated) {
            return hs_a37025vqv2.hscall();
        } else {
            return hs_a37025vqv2;
        }
    };
    hs_a37125vqv6.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczsze525vqv8.evaluateOnce = function () {
        if (hs_a37125vqv6.notEvaluated) {
            return hs_a37125vqv6.hscall();
        } else {
            return hs_a37125vqv6;
        }
    };
    this.hs_zdfEqCUid.data = [hs_a37025vqv2, hs_a37125vqv6];
    this.hs_zdfOrdCUid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCUid, hs_a36325vquA, hs_a36425vquE, hs_a36525vquI, hs_a36625vquM, hs_a36725vquQ, hs_a36825vquU, hs_a36925vquY];
    this.hs_zdfNumCUid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCUid, $hs.modules.SystemziPosixziTypes.hs_zdfShowCUid, hs_a35625vqu8, hs_a35725vquc, hs_a35825vqug, hs_a35925vquk, hs_a36025vquo, hs_a36125vqus, hs_a36225vquw];
    this.hs_zdfRealCUid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCUid, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCUid, hs_a33925vqt2];
    this.hs_zdfIntegralCUid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfRealCUid, $hs.modules.SystemziPosixziTypes.hs_zdfEnumCUid, hs_a33025vqss, hs_a33125vqsw, hs_a33225vqsA, hs_a33325vqsE, hs_a33425vqsI, hs_a33525vqsM, hs_a33625vqsQ];
    this.hs_zdfBitsCUid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCUid, hs_a31325vqrm, hs_a31425vqrq, hs_a31525vqru, hs_a31625vqry, hs_a31725vqrC, hs_a31825vqrG, hs_a31925vqrK, hs_a32025vqrO, hs_a32125vqrS, hs_a32225vqrW, hs_a32325vqs0, hs_a32425vqs4, hs_a32525vqs8, hs_a32625vqsc, hs_a32725vqsg, hs_a32825vqsk, hs_a32925vqso];
    hs_a37225vqva.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizazi425vqvc.evaluateOnce = function () {
        if (hs_a37225vqva.notEvaluated) {
            return hs_a37225vqva.hscall();
        } else {
            return hs_a37225vqva;
        }
    };
    hs_a37325vqve.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizbzi425vqvg.evaluateOnce = function () {
        if (hs_a37325vqve.notEvaluated) {
            return hs_a37325vqve.hscall();
        } else {
            return hs_a37325vqve;
        }
    };
    hs_a37425vqvi.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcxor425vqvk.evaluateOnce = function () {
        if (hs_a37425vqvi.notEvaluated) {
            return hs_a37425vqvi.hscall();
        } else {
            return hs_a37425vqvi;
        }
    };
    hs_a37525vqvm.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplement425vqvo.evaluateOnce = function () {
        if (hs_a37525vqvm.notEvaluated) {
            return hs_a37525vqvm.hscall();
        } else {
            return hs_a37525vqvm;
        }
    };
    hs_a37625vqvq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshift425vqvs.evaluateOnce = function () {
        if (hs_a37625vqvq.notEvaluated) {
            return hs_a37625vqvq.hscall();
        } else {
            return hs_a37625vqvq;
        }
    };
    hs_a37725vqvu.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotate425vqvw.evaluateOnce = function () {
        if (hs_a37725vqvu.notEvaluated) {
            return hs_a37725vqvu.hscall();
        } else {
            return hs_a37725vqvu;
        }
    };
    hs_a37825vqvy.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbit425vqvA.evaluateOnce = function () {
        if (hs_a37825vqvy.notEvaluated) {
            return hs_a37825vqvy.hscall();
        } else {
            return hs_a37825vqvy;
        }
    };
    hs_a37925vqvC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcsetBit425vqvE.evaluateOnce = function () {
        if (hs_a37925vqvC.notEvaluated) {
            return hs_a37925vqvC.hscall();
        } else {
            return hs_a37925vqvC;
        }
    };
    hs_a38025vqvG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcclearBit425vqvI.evaluateOnce = function () {
        if (hs_a38025vqvG.notEvaluated) {
            return hs_a38025vqvG.hscall();
        } else {
            return hs_a38025vqvG;
        }
    };
    hs_a38125vqvK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplementBit425vqvM.evaluateOnce = function () {
        if (hs_a38125vqvK.notEvaluated) {
            return hs_a38125vqvK.hscall();
        } else {
            return hs_a38125vqvK;
        }
    };
    hs_a38225vqvO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdctestBit425vqvQ.evaluateOnce = function () {
        if (hs_a38225vqvO.notEvaluated) {
            return hs_a38225vqvO.hscall();
        } else {
            return hs_a38225vqvO;
        }
    };
    hs_a38325vqvS.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbitSizze425vqvU.evaluateOnce = function () {
        if (hs_a38325vqvS.notEvaluated) {
            return hs_a38325vqvS.hscall();
        } else {
            return hs_a38325vqvS;
        }
    };
    hs_a38425vqvW.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcisSigned425vqvY.evaluateOnce = function () {
        if (hs_a38425vqvW.notEvaluated) {
            return hs_a38425vqvW.hscall();
        } else {
            return hs_a38425vqvW;
        }
    };
    hs_a38525vqw0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftL425vqw2.evaluateOnce = function () {
        if (hs_a38525vqw0.notEvaluated) {
            return hs_a38525vqw0.hscall();
        } else {
            return hs_a38525vqw0;
        }
    };
    hs_a38625vqw4.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftR425vqw6.evaluateOnce = function () {
        if (hs_a38625vqw4.notEvaluated) {
            return hs_a38625vqw4.hscall();
        } else {
            return hs_a38625vqw4;
        }
    };
    hs_a38725vqw8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateL425vqwa.evaluateOnce = function () {
        if (hs_a38725vqw8.notEvaluated) {
            return hs_a38725vqw8.hscall();
        } else {
            return hs_a38725vqw8;
        }
    };
    hs_a38825vqwc.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateR425vqwe.evaluateOnce = function () {
        if (hs_a38825vqwc.notEvaluated) {
            return hs_a38825vqwc.hscall();
        } else {
            return hs_a38825vqwc;
        }
    };
    hs_a38925vqwg.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquot425vqwi.evaluateOnce = function () {
        if (hs_a38925vqwg.notEvaluated) {
            return hs_a38925vqwg.hscall();
        } else {
            return hs_a38925vqwg;
        }
    };
    hs_a39025vqwk.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcrem425vqwm.evaluateOnce = function () {
        if (hs_a39025vqwk.notEvaluated) {
            return hs_a39025vqwk.hscall();
        } else {
            return hs_a39025vqwk;
        }
    };
    hs_a39125vqwo.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdiv425vqwq.evaluateOnce = function () {
        if (hs_a39125vqwo.notEvaluated) {
            return hs_a39125vqwo.hscall();
        } else {
            return hs_a39125vqwo;
        }
    };
    hs_a39225vqws.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcmod425vqwu.evaluateOnce = function () {
        if (hs_a39225vqws.notEvaluated) {
            return hs_a39225vqws.hscall();
        } else {
            return hs_a39225vqws;
        }
    };
    hs_a39325vqww.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquotRem425vqwy.evaluateOnce = function () {
        if (hs_a39325vqww.notEvaluated) {
            return hs_a39325vqww.hscall();
        } else {
            return hs_a39325vqww;
        }
    };
    hs_a39425vqwA.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdivMod425vqwC.evaluateOnce = function () {
        if (hs_a39425vqwA.notEvaluated) {
            return hs_a39425vqwA.hscall();
        } else {
            return hs_a39425vqwA;
        }
    };
    hs_a39525vqwE.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdctoInteger425vqwG.evaluateOnce = function () {
        if (hs_a39525vqwE.notEvaluated) {
            return hs_a39525vqwE.hscall();
        } else {
            return hs_a39525vqwE;
        }
    };
    hs_a39625vqwI.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcminBound425vqwK.evaluateOnce = function () {
        if (hs_a39625vqwI.notEvaluated) {
            return hs_a39625vqwI.hscall();
        } else {
            return hs_a39625vqwI;
        }
    };
    hs_a39725vqwM.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcmaxBound425vqwO.evaluateOnce = function () {
        if (hs_a39725vqwM.notEvaluated) {
            return hs_a39725vqwM.hscall();
        } else {
            return hs_a39725vqwM;
        }
    };
    this.hs_zdfBoundedCNlink.data = [hs_a39625vqwI, hs_a39725vqwM];
    hs_a39825vqwQ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord32);
    };
    hs_zdctoRational625vqwS.evaluateOnce = function () {
        if (hs_a39825vqwQ.notEvaluated) {
            return hs_a39825vqwQ.hscall();
        } else {
            return hs_a39825vqwQ;
        }
    };
    hs_a39925vqwU.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcsizzeOf625vqwW.evaluateOnce = function () {
        if (hs_a39925vqwU.notEvaluated) {
            return hs_a39925vqwU.hscall();
        } else {
            return hs_a39925vqwU;
        }
    };
    hs_a40025vqwY.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcalignment625vqx0.evaluateOnce = function () {
        if (hs_a40025vqwY.notEvaluated) {
            return hs_a40025vqwY.hscall();
        } else {
            return hs_a40025vqwY;
        }
    };
    hs_a40125vqx2.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekElemOff625vqx4.evaluateOnce = function () {
        if (hs_a40125vqx2.notEvaluated) {
            return hs_a40125vqx2.hscall();
        } else {
            return hs_a40125vqx2;
        }
    };
    hs_a40225vqx6.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeElemOff625vqx8.evaluateOnce = function () {
        if (hs_a40225vqx6.notEvaluated) {
            return hs_a40225vqx6.hscall();
        } else {
            return hs_a40225vqx6;
        }
    };
    hs_a40325vqxa.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekByteOff625vqxc.evaluateOnce = function () {
        if (hs_a40325vqxa.notEvaluated) {
            return hs_a40325vqxa.hscall();
        } else {
            return hs_a40325vqxa;
        }
    };
    hs_a40425vqxe.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeByteOff625vqxg.evaluateOnce = function () {
        if (hs_a40425vqxe.notEvaluated) {
            return hs_a40425vqxe.hscall();
        } else {
            return hs_a40425vqxe;
        }
    };
    hs_a40525vqxi.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeek625vqxk.evaluateOnce = function () {
        if (hs_a40525vqxi.notEvaluated) {
            return hs_a40525vqxi.hscall();
        } else {
            return hs_a40525vqxi;
        }
    };
    hs_a40625vqxm.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpoke625vqxo.evaluateOnce = function () {
        if (hs_a40625vqxm.notEvaluated) {
            return hs_a40625vqxm.hscall();
        } else {
            return hs_a40625vqxm;
        }
    };
    this.hs_zdfStorableCNlink.data = [hs_a39925vqwU, hs_a40025vqwY, hs_a40125vqx2, hs_a40225vqx6, hs_a40325vqxa, hs_a40425vqxe, hs_a40525vqxi, hs_a40625vqxm];
    hs_a40725vqxq.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcsucc625vqxs.evaluateOnce = function () {
        if (hs_a40725vqxq.notEvaluated) {
            return hs_a40725vqxq.hscall();
        } else {
            return hs_a40725vqxq;
        }
    };
    hs_a40825vqxu.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcpred625vqxw.evaluateOnce = function () {
        if (hs_a40825vqxu.notEvaluated) {
            return hs_a40825vqxu.hscall();
        } else {
            return hs_a40825vqxu;
        }
    };
    hs_a40925vqxy.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdctoEnum625vqxA.evaluateOnce = function () {
        if (hs_a40925vqxy.notEvaluated) {
            return hs_a40925vqxy.hscall();
        } else {
            return hs_a40925vqxy;
        }
    };
    hs_a41025vqxC.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcfromEnum625vqxE.evaluateOnce = function () {
        if (hs_a41025vqxC.notEvaluated) {
            return hs_a41025vqxC.hscall();
        } else {
            return hs_a41025vqxC;
        }
    };
    hs_a41125vqxG.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFrom625vqxI.evaluateOnce = function () {
        if (hs_a41125vqxG.notEvaluated) {
            return hs_a41125vqxG.hscall();
        } else {
            return hs_a41125vqxG;
        }
    };
    hs_a41225vqxK.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThen625vqxM.evaluateOnce = function () {
        if (hs_a41225vqxK.notEvaluated) {
            return hs_a41225vqxK.hscall();
        } else {
            return hs_a41225vqxK;
        }
    };
    hs_a41325vqxO.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromTo625vqxQ.evaluateOnce = function () {
        if (hs_a41325vqxO.notEvaluated) {
            return hs_a41325vqxO.hscall();
        } else {
            return hs_a41325vqxO;
        }
    };
    hs_a41425vqxS.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThenTo625vqxU.evaluateOnce = function () {
        if (hs_a41425vqxS.notEvaluated) {
            return hs_a41425vqxS.hscall();
        } else {
            return hs_a41425vqxS;
        }
    };
    this.hs_zdfEnumCNlink.data = [hs_a40725vqxq, hs_a40825vqxu, hs_a40925vqxy, hs_a41025vqxC, hs_a41125vqxG, hs_a41225vqxK, hs_a41325vqxO, hs_a41425vqxS];
    hs_a41525vqxW.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczp625vqxY.evaluateOnce = function () {
        if (hs_a41525vqxW.notEvaluated) {
            return hs_a41525vqxW.hscall();
        } else {
            return hs_a41525vqxW;
        }
    };
    hs_a41625vqy0.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczt625vqy2.evaluateOnce = function () {
        if (hs_a41625vqy0.notEvaluated) {
            return hs_a41625vqy0.hscall();
        } else {
            return hs_a41625vqy0;
        }
    };
    hs_a41725vqy4.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczm625vqy6.evaluateOnce = function () {
        if (hs_a41725vqy4.notEvaluated) {
            return hs_a41725vqy4.hscall();
        } else {
            return hs_a41725vqy4;
        }
    };
    hs_a41825vqy8.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcnegate625vqya.evaluateOnce = function () {
        if (hs_a41825vqy8.notEvaluated) {
            return hs_a41825vqy8.hscall();
        } else {
            return hs_a41825vqy8;
        }
    };
    hs_a41925vqyc.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcabs625vqye.evaluateOnce = function () {
        if (hs_a41925vqyc.notEvaluated) {
            return hs_a41925vqyc.hscall();
        } else {
            return hs_a41925vqyc;
        }
    };
    hs_a42025vqyg.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcsignum625vqyi.evaluateOnce = function () {
        if (hs_a42025vqyg.notEvaluated) {
            return hs_a42025vqyg.hscall();
        } else {
            return hs_a42025vqyg;
        }
    };
    hs_a42125vqyk.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcfromInteger625vqym.evaluateOnce = function () {
        if (hs_a42125vqyk.notEvaluated) {
            return hs_a42125vqyk.hscall();
        } else {
            return hs_a42125vqyk;
        }
    };
    hs_a42225vqyo.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdccompare625vqyq.evaluateOnce = function () {
        if (hs_a42225vqyo.notEvaluated) {
            return hs_a42225vqyo.hscall();
        } else {
            return hs_a42225vqyo;
        }
    };
    hs_a42325vqys.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczl625vqyu.evaluateOnce = function () {
        if (hs_a42325vqys.notEvaluated) {
            return hs_a42325vqys.hscall();
        } else {
            return hs_a42325vqys;
        }
    };
    hs_a42425vqyw.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczgze625vqyy.evaluateOnce = function () {
        if (hs_a42425vqyw.notEvaluated) {
            return hs_a42425vqyw.hscall();
        } else {
            return hs_a42425vqyw;
        }
    };
    hs_a42525vqyA.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczg625vqyC.evaluateOnce = function () {
        if (hs_a42525vqyA.notEvaluated) {
            return hs_a42525vqyA.hscall();
        } else {
            return hs_a42525vqyA;
        }
    };
    hs_a42625vqyE.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczlze625vqyG.evaluateOnce = function () {
        if (hs_a42625vqyE.notEvaluated) {
            return hs_a42625vqyE.hscall();
        } else {
            return hs_a42625vqyE;
        }
    };
    hs_a42725vqyI.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmax625vqyK.evaluateOnce = function () {
        if (hs_a42725vqyI.notEvaluated) {
            return hs_a42725vqyI.hscall();
        } else {
            return hs_a42725vqyI;
        }
    };
    hs_a42825vqyM.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmin625vqyO.evaluateOnce = function () {
        if (hs_a42825vqyM.notEvaluated) {
            return hs_a42825vqyM.hscall();
        } else {
            return hs_a42825vqyM;
        }
    };
    hs_a42925vqyQ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczeze625vqyS.evaluateOnce = function () {
        if (hs_a42925vqyQ.notEvaluated) {
            return hs_a42925vqyQ.hscall();
        } else {
            return hs_a42925vqyQ;
        }
    };
    hs_a43025vqyU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczsze625vqyW.evaluateOnce = function () {
        if (hs_a43025vqyU.notEvaluated) {
            return hs_a43025vqyU.hscall();
        } else {
            return hs_a43025vqyU;
        }
    };
    this.hs_zdfEqCNlink.data = [hs_a42925vqyQ, hs_a43025vqyU];
    this.hs_zdfOrdCNlink.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCNlink, hs_a42225vqyo, hs_a42325vqys, hs_a42425vqyw, hs_a42525vqyA, hs_a42625vqyE, hs_a42725vqyI, hs_a42825vqyM];
    this.hs_zdfNumCNlink.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCNlink, $hs.modules.SystemziPosixziTypes.hs_zdfShowCNlink, hs_a41525vqxW, hs_a41625vqy0, hs_a41725vqy4, hs_a41825vqy8, hs_a41925vqyc, hs_a42025vqyg, hs_a42125vqyk];
    this.hs_zdfRealCNlink.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCNlink, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCNlink, hs_a39825vqwQ];
    this.hs_zdfIntegralCNlink.data = [$hs.modules.SystemziPosixziTypes.hs_zdfRealCNlink, $hs.modules.SystemziPosixziTypes.hs_zdfEnumCNlink, hs_a38925vqwg, hs_a39025vqwk, hs_a39125vqwo, hs_a39225vqws, hs_a39325vqww, hs_a39425vqwA, hs_a39525vqwE];
    this.hs_zdfBitsCNlink.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCNlink, hs_a37225vqva, hs_a37325vqve, hs_a37425vqvi, hs_a37525vqvm, hs_a37625vqvq, hs_a37725vqvu, hs_a37825vqvy, hs_a37925vqvC, hs_a38025vqvG, hs_a38125vqvK, hs_a38225vqvO, hs_a38325vqvS, hs_a38425vqvW, hs_a38525vqw0, hs_a38625vqw4, hs_a38725vqw8, hs_a38825vqwc];
    hs_a43125vqyY.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizazi525vqz0.evaluateOnce = function () {
        if (hs_a43125vqyY.notEvaluated) {
            return hs_a43125vqyY.hscall();
        } else {
            return hs_a43125vqyY;
        }
    };
    hs_a43225vqz2.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizbzi525vqz4.evaluateOnce = function () {
        if (hs_a43225vqz2.notEvaluated) {
            return hs_a43225vqz2.hscall();
        } else {
            return hs_a43225vqz2;
        }
    };
    hs_a43325vqz6.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcxor525vqz8.evaluateOnce = function () {
        if (hs_a43325vqz6.notEvaluated) {
            return hs_a43325vqz6.hscall();
        } else {
            return hs_a43325vqz6;
        }
    };
    hs_a43425vqza.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplement525vqzc.evaluateOnce = function () {
        if (hs_a43425vqza.notEvaluated) {
            return hs_a43425vqza.hscall();
        } else {
            return hs_a43425vqza;
        }
    };
    hs_a43525vqze.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshift525vqzg.evaluateOnce = function () {
        if (hs_a43525vqze.notEvaluated) {
            return hs_a43525vqze.hscall();
        } else {
            return hs_a43525vqze;
        }
    };
    hs_a43625vqzi.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotate525vqzk.evaluateOnce = function () {
        if (hs_a43625vqzi.notEvaluated) {
            return hs_a43625vqzi.hscall();
        } else {
            return hs_a43625vqzi;
        }
    };
    hs_a43725vqzm.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbit525vqzo.evaluateOnce = function () {
        if (hs_a43725vqzm.notEvaluated) {
            return hs_a43725vqzm.hscall();
        } else {
            return hs_a43725vqzm;
        }
    };
    hs_a43825vqzq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcsetBit525vqzs.evaluateOnce = function () {
        if (hs_a43825vqzq.notEvaluated) {
            return hs_a43825vqzq.hscall();
        } else {
            return hs_a43825vqzq;
        }
    };
    hs_a43925vqzu.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcclearBit525vqzw.evaluateOnce = function () {
        if (hs_a43925vqzu.notEvaluated) {
            return hs_a43925vqzu.hscall();
        } else {
            return hs_a43925vqzu;
        }
    };
    hs_a44025vqzy.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplementBit525vqzA.evaluateOnce = function () {
        if (hs_a44025vqzy.notEvaluated) {
            return hs_a44025vqzy.hscall();
        } else {
            return hs_a44025vqzy;
        }
    };
    hs_a44125vqzC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdctestBit525vqzE.evaluateOnce = function () {
        if (hs_a44125vqzC.notEvaluated) {
            return hs_a44125vqzC.hscall();
        } else {
            return hs_a44125vqzC;
        }
    };
    hs_a44225vqzG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbitSizze525vqzI.evaluateOnce = function () {
        if (hs_a44225vqzG.notEvaluated) {
            return hs_a44225vqzG.hscall();
        } else {
            return hs_a44225vqzG;
        }
    };
    hs_a44325vqzK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcisSigned525vqzM.evaluateOnce = function () {
        if (hs_a44325vqzK.notEvaluated) {
            return hs_a44325vqzK.hscall();
        } else {
            return hs_a44325vqzK;
        }
    };
    hs_a44425vqzO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftL525vqzQ.evaluateOnce = function () {
        if (hs_a44425vqzO.notEvaluated) {
            return hs_a44425vqzO.hscall();
        } else {
            return hs_a44425vqzO;
        }
    };
    hs_a44525vqzS.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftR525vqzU.evaluateOnce = function () {
        if (hs_a44525vqzS.notEvaluated) {
            return hs_a44525vqzS.hscall();
        } else {
            return hs_a44525vqzS;
        }
    };
    hs_a44625vqzW.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateL525vqzY.evaluateOnce = function () {
        if (hs_a44625vqzW.notEvaluated) {
            return hs_a44625vqzW.hscall();
        } else {
            return hs_a44625vqzW;
        }
    };
    hs_a44725vqA0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateR525vqA2.evaluateOnce = function () {
        if (hs_a44725vqA0.notEvaluated) {
            return hs_a44725vqA0.hscall();
        } else {
            return hs_a44725vqA0;
        }
    };
    hs_a44825vqA4.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquot525vqA6.evaluateOnce = function () {
        if (hs_a44825vqA4.notEvaluated) {
            return hs_a44825vqA4.hscall();
        } else {
            return hs_a44825vqA4;
        }
    };
    hs_a44925vqA8.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcrem525vqAa.evaluateOnce = function () {
        if (hs_a44925vqA8.notEvaluated) {
            return hs_a44925vqA8.hscall();
        } else {
            return hs_a44925vqA8;
        }
    };
    hs_a45025vqAc.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdiv525vqAe.evaluateOnce = function () {
        if (hs_a45025vqAc.notEvaluated) {
            return hs_a45025vqAc.hscall();
        } else {
            return hs_a45025vqAc;
        }
    };
    hs_a45125vqAg.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcmod525vqAi.evaluateOnce = function () {
        if (hs_a45125vqAg.notEvaluated) {
            return hs_a45125vqAg.hscall();
        } else {
            return hs_a45125vqAg;
        }
    };
    hs_a45225vqAk.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquotRem525vqAm.evaluateOnce = function () {
        if (hs_a45225vqAk.notEvaluated) {
            return hs_a45225vqAk.hscall();
        } else {
            return hs_a45225vqAk;
        }
    };
    hs_a45325vqAo.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdivMod525vqAq.evaluateOnce = function () {
        if (hs_a45325vqAo.notEvaluated) {
            return hs_a45325vqAo.hscall();
        } else {
            return hs_a45325vqAo;
        }
    };
    hs_a45425vqAs.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdctoInteger525vqAu.evaluateOnce = function () {
        if (hs_a45425vqAs.notEvaluated) {
            return hs_a45425vqAs.hscall();
        } else {
            return hs_a45425vqAs;
        }
    };
    hs_a45525vqAw.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcminBound525vqAy.evaluateOnce = function () {
        if (hs_a45525vqAw.notEvaluated) {
            return hs_a45525vqAw.hscall();
        } else {
            return hs_a45525vqAw;
        }
    };
    hs_a45625vqAA.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcmaxBound525vqAC.evaluateOnce = function () {
        if (hs_a45625vqAA.notEvaluated) {
            return hs_a45625vqAA.hscall();
        } else {
            return hs_a45625vqAA;
        }
    };
    this.hs_zdfBoundedCGid.data = [hs_a45525vqAw, hs_a45625vqAA];
    hs_a45725vqAE.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord32);
    };
    hs_zdctoRational725vqAG.evaluateOnce = function () {
        if (hs_a45725vqAE.notEvaluated) {
            return hs_a45725vqAE.hscall();
        } else {
            return hs_a45725vqAE;
        }
    };
    hs_a45825vqAI.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcsizzeOf725vqAK.evaluateOnce = function () {
        if (hs_a45825vqAI.notEvaluated) {
            return hs_a45825vqAI.hscall();
        } else {
            return hs_a45825vqAI;
        }
    };
    hs_a45925vqAM.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcalignment725vqAO.evaluateOnce = function () {
        if (hs_a45925vqAM.notEvaluated) {
            return hs_a45925vqAM.hscall();
        } else {
            return hs_a45925vqAM;
        }
    };
    hs_a46025vqAQ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekElemOff725vqAS.evaluateOnce = function () {
        if (hs_a46025vqAQ.notEvaluated) {
            return hs_a46025vqAQ.hscall();
        } else {
            return hs_a46025vqAQ;
        }
    };
    hs_a46125vqAU.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeElemOff725vqAW.evaluateOnce = function () {
        if (hs_a46125vqAU.notEvaluated) {
            return hs_a46125vqAU.hscall();
        } else {
            return hs_a46125vqAU;
        }
    };
    hs_a46225vqAY.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekByteOff725vqB0.evaluateOnce = function () {
        if (hs_a46225vqAY.notEvaluated) {
            return hs_a46225vqAY.hscall();
        } else {
            return hs_a46225vqAY;
        }
    };
    hs_a46325vqB2.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeByteOff725vqB4.evaluateOnce = function () {
        if (hs_a46325vqB2.notEvaluated) {
            return hs_a46325vqB2.hscall();
        } else {
            return hs_a46325vqB2;
        }
    };
    hs_a46425vqB6.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeek725vqB8.evaluateOnce = function () {
        if (hs_a46425vqB6.notEvaluated) {
            return hs_a46425vqB6.hscall();
        } else {
            return hs_a46425vqB6;
        }
    };
    hs_a46525vqBa.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpoke725vqBc.evaluateOnce = function () {
        if (hs_a46525vqBa.notEvaluated) {
            return hs_a46525vqBa.hscall();
        } else {
            return hs_a46525vqBa;
        }
    };
    this.hs_zdfStorableCGid.data = [hs_a45825vqAI, hs_a45925vqAM, hs_a46025vqAQ, hs_a46125vqAU, hs_a46225vqAY, hs_a46325vqB2, hs_a46425vqB6, hs_a46525vqBa];
    hs_a46625vqBe.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcsucc725vqBg.evaluateOnce = function () {
        if (hs_a46625vqBe.notEvaluated) {
            return hs_a46625vqBe.hscall();
        } else {
            return hs_a46625vqBe;
        }
    };
    hs_a46725vqBi.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcpred725vqBk.evaluateOnce = function () {
        if (hs_a46725vqBi.notEvaluated) {
            return hs_a46725vqBi.hscall();
        } else {
            return hs_a46725vqBi;
        }
    };
    hs_a46825vqBm.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdctoEnum725vqBo.evaluateOnce = function () {
        if (hs_a46825vqBm.notEvaluated) {
            return hs_a46825vqBm.hscall();
        } else {
            return hs_a46825vqBm;
        }
    };
    hs_a46925vqBq.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcfromEnum725vqBs.evaluateOnce = function () {
        if (hs_a46925vqBq.notEvaluated) {
            return hs_a46925vqBq.hscall();
        } else {
            return hs_a46925vqBq;
        }
    };
    hs_a47025vqBu.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFrom725vqBw.evaluateOnce = function () {
        if (hs_a47025vqBu.notEvaluated) {
            return hs_a47025vqBu.hscall();
        } else {
            return hs_a47025vqBu;
        }
    };
    hs_a47125vqBy.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThen725vqBA.evaluateOnce = function () {
        if (hs_a47125vqBy.notEvaluated) {
            return hs_a47125vqBy.hscall();
        } else {
            return hs_a47125vqBy;
        }
    };
    hs_a47225vqBC.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromTo725vqBE.evaluateOnce = function () {
        if (hs_a47225vqBC.notEvaluated) {
            return hs_a47225vqBC.hscall();
        } else {
            return hs_a47225vqBC;
        }
    };
    hs_a47325vqBG.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThenTo725vqBI.evaluateOnce = function () {
        if (hs_a47325vqBG.notEvaluated) {
            return hs_a47325vqBG.hscall();
        } else {
            return hs_a47325vqBG;
        }
    };
    this.hs_zdfEnumCGid.data = [hs_a46625vqBe, hs_a46725vqBi, hs_a46825vqBm, hs_a46925vqBq, hs_a47025vqBu, hs_a47125vqBy, hs_a47225vqBC, hs_a47325vqBG];
    hs_a47425vqBK.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczp725vqBM.evaluateOnce = function () {
        if (hs_a47425vqBK.notEvaluated) {
            return hs_a47425vqBK.hscall();
        } else {
            return hs_a47425vqBK;
        }
    };
    hs_a47525vqBO.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczt725vqBQ.evaluateOnce = function () {
        if (hs_a47525vqBO.notEvaluated) {
            return hs_a47525vqBO.hscall();
        } else {
            return hs_a47525vqBO;
        }
    };
    hs_a47625vqBS.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczm725vqBU.evaluateOnce = function () {
        if (hs_a47625vqBS.notEvaluated) {
            return hs_a47625vqBS.hscall();
        } else {
            return hs_a47625vqBS;
        }
    };
    hs_a47725vqBW.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcnegate725vqBY.evaluateOnce = function () {
        if (hs_a47725vqBW.notEvaluated) {
            return hs_a47725vqBW.hscall();
        } else {
            return hs_a47725vqBW;
        }
    };
    hs_a47825vqC0.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcabs725vqC2.evaluateOnce = function () {
        if (hs_a47825vqC0.notEvaluated) {
            return hs_a47825vqC0.hscall();
        } else {
            return hs_a47825vqC0;
        }
    };
    hs_a47925vqC4.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcsignum725vqC6.evaluateOnce = function () {
        if (hs_a47925vqC4.notEvaluated) {
            return hs_a47925vqC4.hscall();
        } else {
            return hs_a47925vqC4;
        }
    };
    hs_a48025vqC8.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcfromInteger725vqCa.evaluateOnce = function () {
        if (hs_a48025vqC8.notEvaluated) {
            return hs_a48025vqC8.hscall();
        } else {
            return hs_a48025vqC8;
        }
    };
    hs_a48125vqCc.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdccompare725vqCe.evaluateOnce = function () {
        if (hs_a48125vqCc.notEvaluated) {
            return hs_a48125vqCc.hscall();
        } else {
            return hs_a48125vqCc;
        }
    };
    hs_a48225vqCg.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczl725vqCi.evaluateOnce = function () {
        if (hs_a48225vqCg.notEvaluated) {
            return hs_a48225vqCg.hscall();
        } else {
            return hs_a48225vqCg;
        }
    };
    hs_a48325vqCk.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczgze725vqCm.evaluateOnce = function () {
        if (hs_a48325vqCk.notEvaluated) {
            return hs_a48325vqCk.hscall();
        } else {
            return hs_a48325vqCk;
        }
    };
    hs_a48425vqCo.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczg725vqCq.evaluateOnce = function () {
        if (hs_a48425vqCo.notEvaluated) {
            return hs_a48425vqCo.hscall();
        } else {
            return hs_a48425vqCo;
        }
    };
    hs_a48525vqCs.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczlze725vqCu.evaluateOnce = function () {
        if (hs_a48525vqCs.notEvaluated) {
            return hs_a48525vqCs.hscall();
        } else {
            return hs_a48525vqCs;
        }
    };
    hs_a48625vqCw.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmax725vqCy.evaluateOnce = function () {
        if (hs_a48625vqCw.notEvaluated) {
            return hs_a48625vqCw.hscall();
        } else {
            return hs_a48625vqCw;
        }
    };
    hs_a48725vqCA.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmin725vqCC.evaluateOnce = function () {
        if (hs_a48725vqCA.notEvaluated) {
            return hs_a48725vqCA.hscall();
        } else {
            return hs_a48725vqCA;
        }
    };
    hs_a48825vqCE.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczeze725vqCG.evaluateOnce = function () {
        if (hs_a48825vqCE.notEvaluated) {
            return hs_a48825vqCE.hscall();
        } else {
            return hs_a48825vqCE;
        }
    };
    hs_a48925vqCI.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczsze725vqCK.evaluateOnce = function () {
        if (hs_a48925vqCI.notEvaluated) {
            return hs_a48925vqCI.hscall();
        } else {
            return hs_a48925vqCI;
        }
    };
    this.hs_zdfEqCGid.data = [hs_a48825vqCE, hs_a48925vqCI];
    this.hs_zdfOrdCGid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCGid, hs_a48125vqCc, hs_a48225vqCg, hs_a48325vqCk, hs_a48425vqCo, hs_a48525vqCs, hs_a48625vqCw, hs_a48725vqCA];
    this.hs_zdfNumCGid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCGid, $hs.modules.SystemziPosixziTypes.hs_zdfShowCGid, hs_a47425vqBK, hs_a47525vqBO, hs_a47625vqBS, hs_a47725vqBW, hs_a47825vqC0, hs_a47925vqC4, hs_a48025vqC8];
    this.hs_zdfRealCGid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCGid, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCGid, hs_a45725vqAE];
    this.hs_zdfIntegralCGid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfRealCGid, $hs.modules.SystemziPosixziTypes.hs_zdfEnumCGid, hs_a44825vqA4, hs_a44925vqA8, hs_a45025vqAc, hs_a45125vqAg, hs_a45225vqAk, hs_a45325vqAo, hs_a45425vqAs];
    this.hs_zdfBitsCGid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCGid, hs_a43125vqyY, hs_a43225vqz2, hs_a43325vqz6, hs_a43425vqza, hs_a43525vqze, hs_a43625vqzi, hs_a43725vqzm, hs_a43825vqzq, hs_a43925vqzu, hs_a44025vqzy, hs_a44125vqzC, hs_a44225vqzG, hs_a44325vqzK, hs_a44425vqzO, hs_a44525vqzS, hs_a44625vqzW, hs_a44725vqA0];
    hs_a49025vqCM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizazi625vqCO.evaluateOnce = function () {
        if (hs_a49025vqCM.notEvaluated) {
            return hs_a49025vqCM.hscall();
        } else {
            return hs_a49025vqCM;
        }
    };
    hs_a49125vqCQ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizbzi625vqCS.evaluateOnce = function () {
        if (hs_a49125vqCQ.notEvaluated) {
            return hs_a49125vqCQ.hscall();
        } else {
            return hs_a49125vqCQ;
        }
    };
    hs_a49225vqCU.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcxor625vqCW.evaluateOnce = function () {
        if (hs_a49225vqCU.notEvaluated) {
            return hs_a49225vqCU.hscall();
        } else {
            return hs_a49225vqCU;
        }
    };
    hs_a49325vqCY.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplement625vqD0.evaluateOnce = function () {
        if (hs_a49325vqCY.notEvaluated) {
            return hs_a49325vqCY.hscall();
        } else {
            return hs_a49325vqCY;
        }
    };
    hs_a49425vqD2.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshift625vqD4.evaluateOnce = function () {
        if (hs_a49425vqD2.notEvaluated) {
            return hs_a49425vqD2.hscall();
        } else {
            return hs_a49425vqD2;
        }
    };
    hs_a49525vqD6.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotate625vqD8.evaluateOnce = function () {
        if (hs_a49525vqD6.notEvaluated) {
            return hs_a49525vqD6.hscall();
        } else {
            return hs_a49525vqD6;
        }
    };
    hs_a49625vqDa.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbit625vqDc.evaluateOnce = function () {
        if (hs_a49625vqDa.notEvaluated) {
            return hs_a49625vqDa.hscall();
        } else {
            return hs_a49625vqDa;
        }
    };
    hs_a49725vqDe.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcsetBit625vqDg.evaluateOnce = function () {
        if (hs_a49725vqDe.notEvaluated) {
            return hs_a49725vqDe.hscall();
        } else {
            return hs_a49725vqDe;
        }
    };
    hs_a49825vqDi.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcclearBit625vqDk.evaluateOnce = function () {
        if (hs_a49825vqDi.notEvaluated) {
            return hs_a49825vqDi.hscall();
        } else {
            return hs_a49825vqDi;
        }
    };
    hs_a49925vqDm.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplementBit625vqDo.evaluateOnce = function () {
        if (hs_a49925vqDm.notEvaluated) {
            return hs_a49925vqDm.hscall();
        } else {
            return hs_a49925vqDm;
        }
    };
    hs_a50025vqDq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdctestBit625vqDs.evaluateOnce = function () {
        if (hs_a50025vqDq.notEvaluated) {
            return hs_a50025vqDq.hscall();
        } else {
            return hs_a50025vqDq;
        }
    };
    hs_a50125vqDu.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbitSizze625vqDw.evaluateOnce = function () {
        if (hs_a50125vqDu.notEvaluated) {
            return hs_a50125vqDu.hscall();
        } else {
            return hs_a50125vqDu;
        }
    };
    hs_a50225vqDy.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcisSigned625vqDA.evaluateOnce = function () {
        if (hs_a50225vqDy.notEvaluated) {
            return hs_a50225vqDy.hscall();
        } else {
            return hs_a50225vqDy;
        }
    };
    hs_a50325vqDC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftL625vqDE.evaluateOnce = function () {
        if (hs_a50325vqDC.notEvaluated) {
            return hs_a50325vqDC.hscall();
        } else {
            return hs_a50325vqDC;
        }
    };
    hs_a50425vqDG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftR625vqDI.evaluateOnce = function () {
        if (hs_a50425vqDG.notEvaluated) {
            return hs_a50425vqDG.hscall();
        } else {
            return hs_a50425vqDG;
        }
    };
    hs_a50525vqDK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateL625vqDM.evaluateOnce = function () {
        if (hs_a50525vqDK.notEvaluated) {
            return hs_a50525vqDK.hscall();
        } else {
            return hs_a50525vqDK;
        }
    };
    hs_a50625vqDO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateR625vqDQ.evaluateOnce = function () {
        if (hs_a50625vqDO.notEvaluated) {
            return hs_a50625vqDO.hscall();
        } else {
            return hs_a50625vqDO;
        }
    };
    hs_a50725vqDS.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquot625vqDU.evaluateOnce = function () {
        if (hs_a50725vqDS.notEvaluated) {
            return hs_a50725vqDS.hscall();
        } else {
            return hs_a50725vqDS;
        }
    };
    hs_a50825vqDW.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcrem625vqDY.evaluateOnce = function () {
        if (hs_a50825vqDW.notEvaluated) {
            return hs_a50825vqDW.hscall();
        } else {
            return hs_a50825vqDW;
        }
    };
    hs_a50925vqE0.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdiv625vqE2.evaluateOnce = function () {
        if (hs_a50925vqE0.notEvaluated) {
            return hs_a50925vqE0.hscall();
        } else {
            return hs_a50925vqE0;
        }
    };
    hs_a51025vqE4.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcmod625vqE6.evaluateOnce = function () {
        if (hs_a51025vqE4.notEvaluated) {
            return hs_a51025vqE4.hscall();
        } else {
            return hs_a51025vqE4;
        }
    };
    hs_a51125vqE8.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquotRem625vqEa.evaluateOnce = function () {
        if (hs_a51125vqE8.notEvaluated) {
            return hs_a51125vqE8.hscall();
        } else {
            return hs_a51125vqE8;
        }
    };
    hs_a51225vqEc.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdivMod625vqEe.evaluateOnce = function () {
        if (hs_a51225vqEc.notEvaluated) {
            return hs_a51225vqEc.hscall();
        } else {
            return hs_a51225vqEc;
        }
    };
    hs_a51325vqEg.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdctoInteger625vqEi.evaluateOnce = function () {
        if (hs_a51325vqEg.notEvaluated) {
            return hs_a51325vqEg.hscall();
        } else {
            return hs_a51325vqEg;
        }
    };
    hs_a51425vqEk.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcminBound625vqEm.evaluateOnce = function () {
        if (hs_a51425vqEk.notEvaluated) {
            return hs_a51425vqEk.hscall();
        } else {
            return hs_a51425vqEk;
        }
    };
    hs_a51525vqEo.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcmaxBound625vqEq.evaluateOnce = function () {
        if (hs_a51525vqEo.notEvaluated) {
            return hs_a51525vqEo.hscall();
        } else {
            return hs_a51525vqEo;
        }
    };
    this.hs_zdfBoundedCSsizze.data = [hs_a51425vqEk, hs_a51525vqEo];
    hs_a51625vqEs.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt32);
    };
    hs_zdctoRational825vqEu.evaluateOnce = function () {
        if (hs_a51625vqEs.notEvaluated) {
            return hs_a51625vqEs.hscall();
        } else {
            return hs_a51625vqEs;
        }
    };
    hs_a51725vqEw.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcsizzeOf825vqEy.evaluateOnce = function () {
        if (hs_a51725vqEw.notEvaluated) {
            return hs_a51725vqEw.hscall();
        } else {
            return hs_a51725vqEw;
        }
    };
    hs_a51825vqEA.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcalignment825vqEC.evaluateOnce = function () {
        if (hs_a51825vqEA.notEvaluated) {
            return hs_a51825vqEA.hscall();
        } else {
            return hs_a51825vqEA;
        }
    };
    hs_a51925vqEE.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekElemOff825vqEG.evaluateOnce = function () {
        if (hs_a51925vqEE.notEvaluated) {
            return hs_a51925vqEE.hscall();
        } else {
            return hs_a51925vqEE;
        }
    };
    hs_a52025vqEI.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeElemOff825vqEK.evaluateOnce = function () {
        if (hs_a52025vqEI.notEvaluated) {
            return hs_a52025vqEI.hscall();
        } else {
            return hs_a52025vqEI;
        }
    };
    hs_a52125vqEM.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekByteOff825vqEO.evaluateOnce = function () {
        if (hs_a52125vqEM.notEvaluated) {
            return hs_a52125vqEM.hscall();
        } else {
            return hs_a52125vqEM;
        }
    };
    hs_a52225vqEQ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeByteOff825vqES.evaluateOnce = function () {
        if (hs_a52225vqEQ.notEvaluated) {
            return hs_a52225vqEQ.hscall();
        } else {
            return hs_a52225vqEQ;
        }
    };
    hs_a52325vqEU.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeek825vqEW.evaluateOnce = function () {
        if (hs_a52325vqEU.notEvaluated) {
            return hs_a52325vqEU.hscall();
        } else {
            return hs_a52325vqEU;
        }
    };
    hs_a52425vqEY.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpoke825vqF0.evaluateOnce = function () {
        if (hs_a52425vqEY.notEvaluated) {
            return hs_a52425vqEY.hscall();
        } else {
            return hs_a52425vqEY;
        }
    };
    this.hs_zdfStorableCSsizze.data = [hs_a51725vqEw, hs_a51825vqEA, hs_a51925vqEE, hs_a52025vqEI, hs_a52125vqEM, hs_a52225vqEQ, hs_a52325vqEU, hs_a52425vqEY];
    hs_a52525vqF2.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcsucc825vqF4.evaluateOnce = function () {
        if (hs_a52525vqF2.notEvaluated) {
            return hs_a52525vqF2.hscall();
        } else {
            return hs_a52525vqF2;
        }
    };
    hs_a52625vqF6.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcpred825vqF8.evaluateOnce = function () {
        if (hs_a52625vqF6.notEvaluated) {
            return hs_a52625vqF6.hscall();
        } else {
            return hs_a52625vqF6;
        }
    };
    hs_a52725vqFa.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdctoEnum825vqFc.evaluateOnce = function () {
        if (hs_a52725vqFa.notEvaluated) {
            return hs_a52725vqFa.hscall();
        } else {
            return hs_a52725vqFa;
        }
    };
    hs_a52825vqFe.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcfromEnum825vqFg.evaluateOnce = function () {
        if (hs_a52825vqFe.notEvaluated) {
            return hs_a52825vqFe.hscall();
        } else {
            return hs_a52825vqFe;
        }
    };
    hs_a52925vqFi.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFrom825vqFk.evaluateOnce = function () {
        if (hs_a52925vqFi.notEvaluated) {
            return hs_a52925vqFi.hscall();
        } else {
            return hs_a52925vqFi;
        }
    };
    hs_a53025vqFm.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThen825vqFo.evaluateOnce = function () {
        if (hs_a53025vqFm.notEvaluated) {
            return hs_a53025vqFm.hscall();
        } else {
            return hs_a53025vqFm;
        }
    };
    hs_a53125vqFq.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromTo825vqFs.evaluateOnce = function () {
        if (hs_a53125vqFq.notEvaluated) {
            return hs_a53125vqFq.hscall();
        } else {
            return hs_a53125vqFq;
        }
    };
    hs_a53225vqFu.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThenTo825vqFw.evaluateOnce = function () {
        if (hs_a53225vqFu.notEvaluated) {
            return hs_a53225vqFu.hscall();
        } else {
            return hs_a53225vqFu;
        }
    };
    this.hs_zdfEnumCSsizze.data = [hs_a52525vqF2, hs_a52625vqF6, hs_a52725vqFa, hs_a52825vqFe, hs_a52925vqFi, hs_a53025vqFm, hs_a53125vqFq, hs_a53225vqFu];
    hs_a53325vqFy.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczp825vqFA.evaluateOnce = function () {
        if (hs_a53325vqFy.notEvaluated) {
            return hs_a53325vqFy.hscall();
        } else {
            return hs_a53325vqFy;
        }
    };
    hs_a53425vqFC.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczt825vqFE.evaluateOnce = function () {
        if (hs_a53425vqFC.notEvaluated) {
            return hs_a53425vqFC.hscall();
        } else {
            return hs_a53425vqFC;
        }
    };
    hs_a53525vqFG.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczm825vqFI.evaluateOnce = function () {
        if (hs_a53525vqFG.notEvaluated) {
            return hs_a53525vqFG.hscall();
        } else {
            return hs_a53525vqFG;
        }
    };
    hs_a53625vqFK.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcnegate825vqFM.evaluateOnce = function () {
        if (hs_a53625vqFK.notEvaluated) {
            return hs_a53625vqFK.hscall();
        } else {
            return hs_a53625vqFK;
        }
    };
    hs_a53725vqFO.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcabs825vqFQ.evaluateOnce = function () {
        if (hs_a53725vqFO.notEvaluated) {
            return hs_a53725vqFO.hscall();
        } else {
            return hs_a53725vqFO;
        }
    };
    hs_a53825vqFS.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcsignum825vqFU.evaluateOnce = function () {
        if (hs_a53825vqFS.notEvaluated) {
            return hs_a53825vqFS.hscall();
        } else {
            return hs_a53825vqFS;
        }
    };
    hs_a53925vqFW.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcfromInteger825vqFY.evaluateOnce = function () {
        if (hs_a53925vqFW.notEvaluated) {
            return hs_a53925vqFW.hscall();
        } else {
            return hs_a53925vqFW;
        }
    };
    hs_a54025vqG0.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdccompare825vqG2.evaluateOnce = function () {
        if (hs_a54025vqG0.notEvaluated) {
            return hs_a54025vqG0.hscall();
        } else {
            return hs_a54025vqG0;
        }
    };
    hs_a54125vqG4.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczl825vqG6.evaluateOnce = function () {
        if (hs_a54125vqG4.notEvaluated) {
            return hs_a54125vqG4.hscall();
        } else {
            return hs_a54125vqG4;
        }
    };
    hs_a54225vqG8.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczgze825vqGa.evaluateOnce = function () {
        if (hs_a54225vqG8.notEvaluated) {
            return hs_a54225vqG8.hscall();
        } else {
            return hs_a54225vqG8;
        }
    };
    hs_a54325vqGc.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczg825vqGe.evaluateOnce = function () {
        if (hs_a54325vqGc.notEvaluated) {
            return hs_a54325vqGc.hscall();
        } else {
            return hs_a54325vqGc;
        }
    };
    hs_a54425vqGg.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczlze825vqGi.evaluateOnce = function () {
        if (hs_a54425vqGg.notEvaluated) {
            return hs_a54425vqGg.hscall();
        } else {
            return hs_a54425vqGg;
        }
    };
    hs_a54525vqGk.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmax825vqGm.evaluateOnce = function () {
        if (hs_a54525vqGk.notEvaluated) {
            return hs_a54525vqGk.hscall();
        } else {
            return hs_a54525vqGk;
        }
    };
    hs_a54625vqGo.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmin825vqGq.evaluateOnce = function () {
        if (hs_a54625vqGo.notEvaluated) {
            return hs_a54625vqGo.hscall();
        } else {
            return hs_a54625vqGo;
        }
    };
    hs_a54725vqGs.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczeze825vqGu.evaluateOnce = function () {
        if (hs_a54725vqGs.notEvaluated) {
            return hs_a54725vqGs.hscall();
        } else {
            return hs_a54725vqGs;
        }
    };
    hs_a54825vqGw.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczsze825vqGy.evaluateOnce = function () {
        if (hs_a54825vqGw.notEvaluated) {
            return hs_a54825vqGw.hscall();
        } else {
            return hs_a54825vqGw;
        }
    };
    this.hs_zdfEqCSsizze.data = [hs_a54725vqGs, hs_a54825vqGw];
    this.hs_zdfOrdCSsizze.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCSsizze, hs_a54025vqG0, hs_a54125vqG4, hs_a54225vqG8, hs_a54325vqGc, hs_a54425vqGg, hs_a54525vqGk, hs_a54625vqGo];
    this.hs_zdfNumCSsizze.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCSsizze, $hs.modules.SystemziPosixziTypes.hs_zdfShowCSsizze, hs_a53325vqFy, hs_a53425vqFC, hs_a53525vqFG, hs_a53625vqFK, hs_a53725vqFO, hs_a53825vqFS, hs_a53925vqFW];
    this.hs_zdfRealCSsizze.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCSsizze, hs_a51625vqEs];
    this.hs_zdfIntegralCSsizze.data = [$hs.modules.SystemziPosixziTypes.hs_zdfRealCSsizze, $hs.modules.SystemziPosixziTypes.hs_zdfEnumCSsizze, hs_a50725vqDS, hs_a50825vqDW, hs_a50925vqE0, hs_a51025vqE4, hs_a51125vqE8, hs_a51225vqEc, hs_a51325vqEg];
    this.hs_zdfBitsCSsizze.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_a49025vqCM, hs_a49125vqCQ, hs_a49225vqCU, hs_a49325vqCY, hs_a49425vqD2, hs_a49525vqD6, hs_a49625vqDa, hs_a49725vqDe, hs_a49825vqDi, hs_a49925vqDm, hs_a50025vqDq, hs_a50125vqDu, hs_a50225vqDy, hs_a50325vqDC, hs_a50425vqDG, hs_a50525vqDK, hs_a50625vqDO];
    hs_a54925vqGA.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizazi725vqGC.evaluateOnce = function () {
        if (hs_a54925vqGA.notEvaluated) {
            return hs_a54925vqGA.hscall();
        } else {
            return hs_a54925vqGA;
        }
    };
    hs_a55025vqGE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizbzi725vqGG.evaluateOnce = function () {
        if (hs_a55025vqGE.notEvaluated) {
            return hs_a55025vqGE.hscall();
        } else {
            return hs_a55025vqGE;
        }
    };
    hs_a55125vqGI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcxor725vqGK.evaluateOnce = function () {
        if (hs_a55125vqGI.notEvaluated) {
            return hs_a55125vqGI.hscall();
        } else {
            return hs_a55125vqGI;
        }
    };
    hs_a55225vqGM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplement725vqGO.evaluateOnce = function () {
        if (hs_a55225vqGM.notEvaluated) {
            return hs_a55225vqGM.hscall();
        } else {
            return hs_a55225vqGM;
        }
    };
    hs_a55325vqGQ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshift725vqGS.evaluateOnce = function () {
        if (hs_a55325vqGQ.notEvaluated) {
            return hs_a55325vqGQ.hscall();
        } else {
            return hs_a55325vqGQ;
        }
    };
    hs_a55425vqGU.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotate725vqGW.evaluateOnce = function () {
        if (hs_a55425vqGU.notEvaluated) {
            return hs_a55425vqGU.hscall();
        } else {
            return hs_a55425vqGU;
        }
    };
    hs_a55525vqGY.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbit725vqH0.evaluateOnce = function () {
        if (hs_a55525vqGY.notEvaluated) {
            return hs_a55525vqGY.hscall();
        } else {
            return hs_a55525vqGY;
        }
    };
    hs_a55625vqH2.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcsetBit725vqH4.evaluateOnce = function () {
        if (hs_a55625vqH2.notEvaluated) {
            return hs_a55625vqH2.hscall();
        } else {
            return hs_a55625vqH2;
        }
    };
    hs_a55725vqH6.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcclearBit725vqH8.evaluateOnce = function () {
        if (hs_a55725vqH6.notEvaluated) {
            return hs_a55725vqH6.hscall();
        } else {
            return hs_a55725vqH6;
        }
    };
    hs_a55825vqHa.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplementBit725vqHc.evaluateOnce = function () {
        if (hs_a55825vqHa.notEvaluated) {
            return hs_a55825vqHa.hscall();
        } else {
            return hs_a55825vqHa;
        }
    };
    hs_a55925vqHe.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdctestBit725vqHg.evaluateOnce = function () {
        if (hs_a55925vqHe.notEvaluated) {
            return hs_a55925vqHe.hscall();
        } else {
            return hs_a55925vqHe;
        }
    };
    hs_a56025vqHi.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbitSizze725vqHk.evaluateOnce = function () {
        if (hs_a56025vqHi.notEvaluated) {
            return hs_a56025vqHi.hscall();
        } else {
            return hs_a56025vqHi;
        }
    };
    hs_a56125vqHm.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcisSigned725vqHo.evaluateOnce = function () {
        if (hs_a56125vqHm.notEvaluated) {
            return hs_a56125vqHm.hscall();
        } else {
            return hs_a56125vqHm;
        }
    };
    hs_a56225vqHq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftL725vqHs.evaluateOnce = function () {
        if (hs_a56225vqHq.notEvaluated) {
            return hs_a56225vqHq.hscall();
        } else {
            return hs_a56225vqHq;
        }
    };
    hs_a56325vqHu.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftR725vqHw.evaluateOnce = function () {
        if (hs_a56325vqHu.notEvaluated) {
            return hs_a56325vqHu.hscall();
        } else {
            return hs_a56325vqHu;
        }
    };
    hs_a56425vqHy.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateL725vqHA.evaluateOnce = function () {
        if (hs_a56425vqHy.notEvaluated) {
            return hs_a56425vqHy.hscall();
        } else {
            return hs_a56425vqHy;
        }
    };
    hs_a56525vqHC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateR725vqHE.evaluateOnce = function () {
        if (hs_a56525vqHC.notEvaluated) {
            return hs_a56525vqHC.hscall();
        } else {
            return hs_a56525vqHC;
        }
    };
    hs_a56625vqHG.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquot725vqHI.evaluateOnce = function () {
        if (hs_a56625vqHG.notEvaluated) {
            return hs_a56625vqHG.hscall();
        } else {
            return hs_a56625vqHG;
        }
    };
    hs_a56725vqHK.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcrem725vqHM.evaluateOnce = function () {
        if (hs_a56725vqHK.notEvaluated) {
            return hs_a56725vqHK.hscall();
        } else {
            return hs_a56725vqHK;
        }
    };
    hs_a56825vqHO.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdiv725vqHQ.evaluateOnce = function () {
        if (hs_a56825vqHO.notEvaluated) {
            return hs_a56825vqHO.hscall();
        } else {
            return hs_a56825vqHO;
        }
    };
    hs_a56925vqHS.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcmod725vqHU.evaluateOnce = function () {
        if (hs_a56925vqHS.notEvaluated) {
            return hs_a56925vqHS.hscall();
        } else {
            return hs_a56925vqHS;
        }
    };
    hs_a57025vqHW.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquotRem725vqHY.evaluateOnce = function () {
        if (hs_a57025vqHW.notEvaluated) {
            return hs_a57025vqHW.hscall();
        } else {
            return hs_a57025vqHW;
        }
    };
    hs_a57125vqI0.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdivMod725vqI2.evaluateOnce = function () {
        if (hs_a57125vqI0.notEvaluated) {
            return hs_a57125vqI0.hscall();
        } else {
            return hs_a57125vqI0;
        }
    };
    hs_a57225vqI4.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdctoInteger725vqI6.evaluateOnce = function () {
        if (hs_a57225vqI4.notEvaluated) {
            return hs_a57225vqI4.hscall();
        } else {
            return hs_a57225vqI4;
        }
    };
    hs_a57325vqI8.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcminBound725vqIa.evaluateOnce = function () {
        if (hs_a57325vqI8.notEvaluated) {
            return hs_a57325vqI8.hscall();
        } else {
            return hs_a57325vqI8;
        }
    };
    hs_a57425vqIc.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcmaxBound725vqIe.evaluateOnce = function () {
        if (hs_a57425vqIc.notEvaluated) {
            return hs_a57425vqIc.hscall();
        } else {
            return hs_a57425vqIc;
        }
    };
    this.hs_zdfBoundedCPid.data = [hs_a57325vqI8, hs_a57425vqIc];
    hs_a57525vqIg.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt32);
    };
    hs_zdctoRational925vqIi.evaluateOnce = function () {
        if (hs_a57525vqIg.notEvaluated) {
            return hs_a57525vqIg.hscall();
        } else {
            return hs_a57525vqIg;
        }
    };
    hs_a57625vqIk.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcsizzeOf925vqIm.evaluateOnce = function () {
        if (hs_a57625vqIk.notEvaluated) {
            return hs_a57625vqIk.hscall();
        } else {
            return hs_a57625vqIk;
        }
    };
    hs_a57725vqIo.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcalignment925vqIq.evaluateOnce = function () {
        if (hs_a57725vqIo.notEvaluated) {
            return hs_a57725vqIo.hscall();
        } else {
            return hs_a57725vqIo;
        }
    };
    hs_a57825vqIs.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekElemOff925vqIu.evaluateOnce = function () {
        if (hs_a57825vqIs.notEvaluated) {
            return hs_a57825vqIs.hscall();
        } else {
            return hs_a57825vqIs;
        }
    };
    hs_a57925vqIw.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeElemOff925vqIy.evaluateOnce = function () {
        if (hs_a57925vqIw.notEvaluated) {
            return hs_a57925vqIw.hscall();
        } else {
            return hs_a57925vqIw;
        }
    };
    hs_a58025vqIA.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekByteOff925vqIC.evaluateOnce = function () {
        if (hs_a58025vqIA.notEvaluated) {
            return hs_a58025vqIA.hscall();
        } else {
            return hs_a58025vqIA;
        }
    };
    hs_a58125vqIE.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeByteOff925vqIG.evaluateOnce = function () {
        if (hs_a58125vqIE.notEvaluated) {
            return hs_a58125vqIE.hscall();
        } else {
            return hs_a58125vqIE;
        }
    };
    hs_a58225vqII.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeek925vqIK.evaluateOnce = function () {
        if (hs_a58225vqII.notEvaluated) {
            return hs_a58225vqII.hscall();
        } else {
            return hs_a58225vqII;
        }
    };
    hs_a58325vqIM.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpoke925vqIO.evaluateOnce = function () {
        if (hs_a58325vqIM.notEvaluated) {
            return hs_a58325vqIM.hscall();
        } else {
            return hs_a58325vqIM;
        }
    };
    this.hs_zdfStorableCPid.data = [hs_a57625vqIk, hs_a57725vqIo, hs_a57825vqIs, hs_a57925vqIw, hs_a58025vqIA, hs_a58125vqIE, hs_a58225vqII, hs_a58325vqIM];
    hs_a58425vqIQ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcsucc925vqIS.evaluateOnce = function () {
        if (hs_a58425vqIQ.notEvaluated) {
            return hs_a58425vqIQ.hscall();
        } else {
            return hs_a58425vqIQ;
        }
    };
    hs_a58525vqIU.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcpred925vqIW.evaluateOnce = function () {
        if (hs_a58525vqIU.notEvaluated) {
            return hs_a58525vqIU.hscall();
        } else {
            return hs_a58525vqIU;
        }
    };
    hs_a58625vqIY.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdctoEnum925vqJ0.evaluateOnce = function () {
        if (hs_a58625vqIY.notEvaluated) {
            return hs_a58625vqIY.hscall();
        } else {
            return hs_a58625vqIY;
        }
    };
    hs_a58725vqJ2.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcfromEnum925vqJ4.evaluateOnce = function () {
        if (hs_a58725vqJ2.notEvaluated) {
            return hs_a58725vqJ2.hscall();
        } else {
            return hs_a58725vqJ2;
        }
    };
    hs_a58825vqJ6.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFrom925vqJ8.evaluateOnce = function () {
        if (hs_a58825vqJ6.notEvaluated) {
            return hs_a58825vqJ6.hscall();
        } else {
            return hs_a58825vqJ6;
        }
    };
    hs_a58925vqJa.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThen925vqJc.evaluateOnce = function () {
        if (hs_a58925vqJa.notEvaluated) {
            return hs_a58925vqJa.hscall();
        } else {
            return hs_a58925vqJa;
        }
    };
    hs_a59025vqJe.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromTo925vqJg.evaluateOnce = function () {
        if (hs_a59025vqJe.notEvaluated) {
            return hs_a59025vqJe.hscall();
        } else {
            return hs_a59025vqJe;
        }
    };
    hs_a59125vqJi.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThenTo925vqJk.evaluateOnce = function () {
        if (hs_a59125vqJi.notEvaluated) {
            return hs_a59125vqJi.hscall();
        } else {
            return hs_a59125vqJi;
        }
    };
    this.hs_zdfEnumCPid.data = [hs_a58425vqIQ, hs_a58525vqIU, hs_a58625vqIY, hs_a58725vqJ2, hs_a58825vqJ6, hs_a58925vqJa, hs_a59025vqJe, hs_a59125vqJi];
    hs_a59225vqJm.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczp925vqJo.evaluateOnce = function () {
        if (hs_a59225vqJm.notEvaluated) {
            return hs_a59225vqJm.hscall();
        } else {
            return hs_a59225vqJm;
        }
    };
    hs_a59325vqJq.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczt925vqJs.evaluateOnce = function () {
        if (hs_a59325vqJq.notEvaluated) {
            return hs_a59325vqJq.hscall();
        } else {
            return hs_a59325vqJq;
        }
    };
    hs_a59425vqJu.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczm925vqJw.evaluateOnce = function () {
        if (hs_a59425vqJu.notEvaluated) {
            return hs_a59425vqJu.hscall();
        } else {
            return hs_a59425vqJu;
        }
    };
    hs_a59525vqJy.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcnegate925vqJA.evaluateOnce = function () {
        if (hs_a59525vqJy.notEvaluated) {
            return hs_a59525vqJy.hscall();
        } else {
            return hs_a59525vqJy;
        }
    };
    hs_a59625vqJC.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcabs925vqJE.evaluateOnce = function () {
        if (hs_a59625vqJC.notEvaluated) {
            return hs_a59625vqJC.hscall();
        } else {
            return hs_a59625vqJC;
        }
    };
    hs_a59725vqJG.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcsignum925vqJI.evaluateOnce = function () {
        if (hs_a59725vqJG.notEvaluated) {
            return hs_a59725vqJG.hscall();
        } else {
            return hs_a59725vqJG;
        }
    };
    hs_a59825vqJK.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcfromInteger925vqJM.evaluateOnce = function () {
        if (hs_a59825vqJK.notEvaluated) {
            return hs_a59825vqJK.hscall();
        } else {
            return hs_a59825vqJK;
        }
    };
    hs_a59925vqJO.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdccompare925vqJQ.evaluateOnce = function () {
        if (hs_a59925vqJO.notEvaluated) {
            return hs_a59925vqJO.hscall();
        } else {
            return hs_a59925vqJO;
        }
    };
    hs_a60025vqJS.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczl925vqJU.evaluateOnce = function () {
        if (hs_a60025vqJS.notEvaluated) {
            return hs_a60025vqJS.hscall();
        } else {
            return hs_a60025vqJS;
        }
    };
    hs_a60125vqJW.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczgze925vqJY.evaluateOnce = function () {
        if (hs_a60125vqJW.notEvaluated) {
            return hs_a60125vqJW.hscall();
        } else {
            return hs_a60125vqJW;
        }
    };
    hs_a60225vqK0.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczg925vqK2.evaluateOnce = function () {
        if (hs_a60225vqK0.notEvaluated) {
            return hs_a60225vqK0.hscall();
        } else {
            return hs_a60225vqK0;
        }
    };
    hs_a60325vqK4.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczlze925vqK6.evaluateOnce = function () {
        if (hs_a60325vqK4.notEvaluated) {
            return hs_a60325vqK4.hscall();
        } else {
            return hs_a60325vqK4;
        }
    };
    hs_a60425vqK8.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmax925vqKa.evaluateOnce = function () {
        if (hs_a60425vqK8.notEvaluated) {
            return hs_a60425vqK8.hscall();
        } else {
            return hs_a60425vqK8;
        }
    };
    hs_a60525vqKc.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmin925vqKe.evaluateOnce = function () {
        if (hs_a60525vqKc.notEvaluated) {
            return hs_a60525vqKc.hscall();
        } else {
            return hs_a60525vqKc;
        }
    };
    hs_a60625vqKg.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczeze925vqKi.evaluateOnce = function () {
        if (hs_a60625vqKg.notEvaluated) {
            return hs_a60625vqKg.hscall();
        } else {
            return hs_a60625vqKg;
        }
    };
    hs_a60725vqKk.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczsze925vqKm.evaluateOnce = function () {
        if (hs_a60725vqKk.notEvaluated) {
            return hs_a60725vqKk.hscall();
        } else {
            return hs_a60725vqKk;
        }
    };
    this.hs_zdfEqCPid.data = [hs_a60625vqKg, hs_a60725vqKk];
    this.hs_zdfOrdCPid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCPid, hs_a59925vqJO, hs_a60025vqJS, hs_a60125vqJW, hs_a60225vqK0, hs_a60325vqK4, hs_a60425vqK8, hs_a60525vqKc];
    this.hs_zdfNumCPid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCPid, $hs.modules.SystemziPosixziTypes.hs_zdfShowCPid, hs_a59225vqJm, hs_a59325vqJq, hs_a59425vqJu, hs_a59525vqJy, hs_a59625vqJC, hs_a59725vqJG, hs_a59825vqJK];
    this.hs_zdfRealCPid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCPid, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCPid, hs_a57525vqIg];
    this.hs_zdfIntegralCPid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfRealCPid, $hs.modules.SystemziPosixziTypes.hs_zdfEnumCPid, hs_a56625vqHG, hs_a56725vqHK, hs_a56825vqHO, hs_a56925vqHS, hs_a57025vqHW, hs_a57125vqI0, hs_a57225vqI4];
    this.hs_zdfBitsCPid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCPid, hs_a54925vqGA, hs_a55025vqGE, hs_a55125vqGI, hs_a55225vqGM, hs_a55325vqGQ, hs_a55425vqGU, hs_a55525vqGY, hs_a55625vqH2, hs_a55725vqH6, hs_a55825vqHa, hs_a55925vqHe, hs_a56025vqHi, hs_a56125vqHm, hs_a56225vqHq, hs_a56325vqHu, hs_a56425vqHy, hs_a56525vqHC];
    hs_a60825vqKo.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdczizazi825vqKq.evaluateOnce = function () {
        if (hs_a60825vqKo.notEvaluated) {
            return hs_a60825vqKo.hscall();
        } else {
            return hs_a60825vqKo;
        }
    };
    hs_a60925vqKs.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdczizbzi825vqKu.evaluateOnce = function () {
        if (hs_a60925vqKs.notEvaluated) {
            return hs_a60925vqKs.hscall();
        } else {
            return hs_a60925vqKs;
        }
    };
    hs_a61025vqKw.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcxor825vqKy.evaluateOnce = function () {
        if (hs_a61025vqKw.notEvaluated) {
            return hs_a61025vqKw.hscall();
        } else {
            return hs_a61025vqKw;
        }
    };
    hs_a61125vqKA.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdccomplement825vqKC.evaluateOnce = function () {
        if (hs_a61125vqKA.notEvaluated) {
            return hs_a61125vqKA.hscall();
        } else {
            return hs_a61125vqKA;
        }
    };
    hs_a61225vqKE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcshift825vqKG.evaluateOnce = function () {
        if (hs_a61225vqKE.notEvaluated) {
            return hs_a61225vqKE.hscall();
        } else {
            return hs_a61225vqKE;
        }
    };
    hs_a61325vqKI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcrotate825vqKK.evaluateOnce = function () {
        if (hs_a61325vqKI.notEvaluated) {
            return hs_a61325vqKI.hscall();
        } else {
            return hs_a61325vqKI;
        }
    };
    hs_a61425vqKM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcbit825vqKO.evaluateOnce = function () {
        if (hs_a61425vqKM.notEvaluated) {
            return hs_a61425vqKM.hscall();
        } else {
            return hs_a61425vqKM;
        }
    };
    hs_a61525vqKQ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcsetBit825vqKS.evaluateOnce = function () {
        if (hs_a61525vqKQ.notEvaluated) {
            return hs_a61525vqKQ.hscall();
        } else {
            return hs_a61525vqKQ;
        }
    };
    hs_a61625vqKU.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcclearBit825vqKW.evaluateOnce = function () {
        if (hs_a61625vqKU.notEvaluated) {
            return hs_a61625vqKU.hscall();
        } else {
            return hs_a61625vqKU;
        }
    };
    hs_a61725vqKY.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdccomplementBit825vqL0.evaluateOnce = function () {
        if (hs_a61725vqKY.notEvaluated) {
            return hs_a61725vqKY.hscall();
        } else {
            return hs_a61725vqKY;
        }
    };
    hs_a61825vqL2.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdctestBit825vqL4.evaluateOnce = function () {
        if (hs_a61825vqL2.notEvaluated) {
            return hs_a61825vqL2.hscall();
        } else {
            return hs_a61825vqL2;
        }
    };
    hs_a61925vqL6.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcbitSizze825vqL8.evaluateOnce = function () {
        if (hs_a61925vqL6.notEvaluated) {
            return hs_a61925vqL6.hscall();
        } else {
            return hs_a61925vqL6;
        }
    };
    hs_a62025vqLa.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcisSigned825vqLc.evaluateOnce = function () {
        if (hs_a62025vqLa.notEvaluated) {
            return hs_a62025vqLa.hscall();
        } else {
            return hs_a62025vqLa;
        }
    };
    hs_a62125vqLe.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcshiftL825vqLg.evaluateOnce = function () {
        if (hs_a62125vqLe.notEvaluated) {
            return hs_a62125vqLe.hscall();
        } else {
            return hs_a62125vqLe;
        }
    };
    hs_a62225vqLi.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcshiftR825vqLk.evaluateOnce = function () {
        if (hs_a62225vqLi.notEvaluated) {
            return hs_a62225vqLi.hscall();
        } else {
            return hs_a62225vqLi;
        }
    };
    hs_a62325vqLm.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcrotateL825vqLo.evaluateOnce = function () {
        if (hs_a62325vqLm.notEvaluated) {
            return hs_a62325vqLm.hscall();
        } else {
            return hs_a62325vqLm;
        }
    };
    hs_a62425vqLq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcrotateR825vqLs.evaluateOnce = function () {
        if (hs_a62425vqLq.notEvaluated) {
            return hs_a62425vqLq.hscall();
        } else {
            return hs_a62425vqLq;
        }
    };
    hs_a62525vqLu.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcquot825vqLw.evaluateOnce = function () {
        if (hs_a62525vqLu.notEvaluated) {
            return hs_a62525vqLu.hscall();
        } else {
            return hs_a62525vqLu;
        }
    };
    hs_a62625vqLy.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcrem825vqLA.evaluateOnce = function () {
        if (hs_a62625vqLy.notEvaluated) {
            return hs_a62625vqLy.hscall();
        } else {
            return hs_a62625vqLy;
        }
    };
    hs_a62725vqLC.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcdiv825vqLE.evaluateOnce = function () {
        if (hs_a62725vqLC.notEvaluated) {
            return hs_a62725vqLC.hscall();
        } else {
            return hs_a62725vqLC;
        }
    };
    hs_a62825vqLG.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcmod825vqLI.evaluateOnce = function () {
        if (hs_a62825vqLG.notEvaluated) {
            return hs_a62825vqLG.hscall();
        } else {
            return hs_a62825vqLG;
        }
    };
    hs_a62925vqLK.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcquotRem825vqLM.evaluateOnce = function () {
        if (hs_a62925vqLK.notEvaluated) {
            return hs_a62925vqLK.hscall();
        } else {
            return hs_a62925vqLK;
        }
    };
    hs_a63025vqLO.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcdivMod825vqLQ.evaluateOnce = function () {
        if (hs_a63025vqLO.notEvaluated) {
            return hs_a63025vqLO.hscall();
        } else {
            return hs_a63025vqLO;
        }
    };
    hs_a63125vqLS.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdctoInteger825vqLU.evaluateOnce = function () {
        if (hs_a63125vqLS.notEvaluated) {
            return hs_a63125vqLS.hscall();
        } else {
            return hs_a63125vqLS;
        }
    };
    hs_a63225vqLW.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt64);
    };
    hs_zdcminBound825vqLY.evaluateOnce = function () {
        if (hs_a63225vqLW.notEvaluated) {
            return hs_a63225vqLW.hscall();
        } else {
            return hs_a63225vqLW;
        }
    };
    hs_a63325vqM0.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt64);
    };
    hs_zdcmaxBound825vqM2.evaluateOnce = function () {
        if (hs_a63325vqM0.notEvaluated) {
            return hs_a63325vqM0.hscall();
        } else {
            return hs_a63325vqM0;
        }
    };
    this.hs_zdfBoundedCOff.data = [hs_a63225vqLW, hs_a63325vqM0];
    hs_a63425vqM4.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt64);
    };
    hs_zdctoRational1025vqM6.evaluateOnce = function () {
        if (hs_a63425vqM4.notEvaluated) {
            return hs_a63425vqM4.hscall();
        } else {
            return hs_a63425vqM4;
        }
    };
    hs_a63525vqM8.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcsizzeOf1025vqMa.evaluateOnce = function () {
        if (hs_a63525vqM8.notEvaluated) {
            return hs_a63525vqM8.hscall();
        } else {
            return hs_a63525vqM8;
        }
    };
    hs_a63625vqMc.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcalignment1025vqMe.evaluateOnce = function () {
        if (hs_a63625vqMc.notEvaluated) {
            return hs_a63625vqMc.hscall();
        } else {
            return hs_a63625vqMc;
        }
    };
    hs_a63725vqMg.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpeekElemOff1025vqMi.evaluateOnce = function () {
        if (hs_a63725vqMg.notEvaluated) {
            return hs_a63725vqMg.hscall();
        } else {
            return hs_a63725vqMg;
        }
    };
    hs_a63825vqMk.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpokeElemOff1025vqMm.evaluateOnce = function () {
        if (hs_a63825vqMk.notEvaluated) {
            return hs_a63825vqMk.hscall();
        } else {
            return hs_a63825vqMk;
        }
    };
    hs_a63925vqMo.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpeekByteOff1025vqMq.evaluateOnce = function () {
        if (hs_a63925vqMo.notEvaluated) {
            return hs_a63925vqMo.hscall();
        } else {
            return hs_a63925vqMo;
        }
    };
    hs_a64025vqMs.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpokeByteOff1025vqMu.evaluateOnce = function () {
        if (hs_a64025vqMs.notEvaluated) {
            return hs_a64025vqMs.hscall();
        } else {
            return hs_a64025vqMs;
        }
    };
    hs_a64125vqMw.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpeek1025vqMy.evaluateOnce = function () {
        if (hs_a64125vqMw.notEvaluated) {
            return hs_a64125vqMw.hscall();
        } else {
            return hs_a64125vqMw;
        }
    };
    hs_a64225vqMA.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpoke1025vqMC.evaluateOnce = function () {
        if (hs_a64225vqMA.notEvaluated) {
            return hs_a64225vqMA.hscall();
        } else {
            return hs_a64225vqMA;
        }
    };
    this.hs_zdfStorableCOff.data = [hs_a63525vqM8, hs_a63625vqMc, hs_a63725vqMg, hs_a63825vqMk, hs_a63925vqMo, hs_a64025vqMs, hs_a64125vqMw, hs_a64225vqMA];
    hs_a64325vqME.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcsucc1025vqMG.evaluateOnce = function () {
        if (hs_a64325vqME.notEvaluated) {
            return hs_a64325vqME.hscall();
        } else {
            return hs_a64325vqME;
        }
    };
    hs_a64425vqMI.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcpred1025vqMK.evaluateOnce = function () {
        if (hs_a64425vqMI.notEvaluated) {
            return hs_a64425vqMI.hscall();
        } else {
            return hs_a64425vqMI;
        }
    };
    hs_a64525vqMM.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdctoEnum1025vqMO.evaluateOnce = function () {
        if (hs_a64525vqMM.notEvaluated) {
            return hs_a64525vqMM.hscall();
        } else {
            return hs_a64525vqMM;
        }
    };
    hs_a64625vqMQ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcfromEnum1025vqMS.evaluateOnce = function () {
        if (hs_a64625vqMQ.notEvaluated) {
            return hs_a64625vqMQ.hscall();
        } else {
            return hs_a64625vqMQ;
        }
    };
    hs_a64725vqMU.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcenumFrom1025vqMW.evaluateOnce = function () {
        if (hs_a64725vqMU.notEvaluated) {
            return hs_a64725vqMU.hscall();
        } else {
            return hs_a64725vqMU;
        }
    };
    hs_a64825vqMY.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcenumFromThen1025vqN0.evaluateOnce = function () {
        if (hs_a64825vqMY.notEvaluated) {
            return hs_a64825vqMY.hscall();
        } else {
            return hs_a64825vqMY;
        }
    };
    hs_a64925vqN2.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcenumFromTo1025vqN4.evaluateOnce = function () {
        if (hs_a64925vqN2.notEvaluated) {
            return hs_a64925vqN2.hscall();
        } else {
            return hs_a64925vqN2;
        }
    };
    hs_a65025vqN6.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcenumFromThenTo1025vqN8.evaluateOnce = function () {
        if (hs_a65025vqN6.notEvaluated) {
            return hs_a65025vqN6.hscall();
        } else {
            return hs_a65025vqN6;
        }
    };
    this.hs_zdfEnumCOff.data = [hs_a64325vqME, hs_a64425vqMI, hs_a64525vqMM, hs_a64625vqMQ, hs_a64725vqMU, hs_a64825vqMY, hs_a64925vqN2, hs_a65025vqN6];
    hs_a65125vqNa.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdczp1025vqNc.evaluateOnce = function () {
        if (hs_a65125vqNa.notEvaluated) {
            return hs_a65125vqNa.hscall();
        } else {
            return hs_a65125vqNa;
        }
    };
    hs_a65225vqNe.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdczt1025vqNg.evaluateOnce = function () {
        if (hs_a65225vqNe.notEvaluated) {
            return hs_a65225vqNe.hscall();
        } else {
            return hs_a65225vqNe;
        }
    };
    hs_a65325vqNi.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdczm1025vqNk.evaluateOnce = function () {
        if (hs_a65325vqNi.notEvaluated) {
            return hs_a65325vqNi.hscall();
        } else {
            return hs_a65325vqNi;
        }
    };
    hs_a65425vqNm.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcnegate1025vqNo.evaluateOnce = function () {
        if (hs_a65425vqNm.notEvaluated) {
            return hs_a65425vqNm.hscall();
        } else {
            return hs_a65425vqNm;
        }
    };
    hs_a65525vqNq.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcabs1025vqNs.evaluateOnce = function () {
        if (hs_a65525vqNq.notEvaluated) {
            return hs_a65525vqNq.hscall();
        } else {
            return hs_a65525vqNq;
        }
    };
    hs_a65625vqNu.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcsignum1025vqNw.evaluateOnce = function () {
        if (hs_a65625vqNu.notEvaluated) {
            return hs_a65625vqNu.hscall();
        } else {
            return hs_a65625vqNu;
        }
    };
    hs_a65725vqNy.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcfromInteger1025vqNA.evaluateOnce = function () {
        if (hs_a65725vqNy.notEvaluated) {
            return hs_a65725vqNy.hscall();
        } else {
            return hs_a65725vqNy;
        }
    };
    hs_a65825vqNC.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdccompare1025vqNE.evaluateOnce = function () {
        if (hs_a65825vqNC.notEvaluated) {
            return hs_a65825vqNC.hscall();
        } else {
            return hs_a65825vqNC;
        }
    };
    hs_a65925vqNG.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczl1025vqNI.evaluateOnce = function () {
        if (hs_a65925vqNG.notEvaluated) {
            return hs_a65925vqNG.hscall();
        } else {
            return hs_a65925vqNG;
        }
    };
    hs_a66025vqNK.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczgze1025vqNM.evaluateOnce = function () {
        if (hs_a66025vqNK.notEvaluated) {
            return hs_a66025vqNK.hscall();
        } else {
            return hs_a66025vqNK;
        }
    };
    hs_a66125vqNO.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczg1025vqNQ.evaluateOnce = function () {
        if (hs_a66125vqNO.notEvaluated) {
            return hs_a66125vqNO.hscall();
        } else {
            return hs_a66125vqNO;
        }
    };
    hs_a66225vqNS.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczlze1025vqNU.evaluateOnce = function () {
        if (hs_a66225vqNS.notEvaluated) {
            return hs_a66225vqNS.hscall();
        } else {
            return hs_a66225vqNS;
        }
    };
    hs_a66325vqNW.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdcmax1025vqNY.evaluateOnce = function () {
        if (hs_a66325vqNW.notEvaluated) {
            return hs_a66325vqNW.hscall();
        } else {
            return hs_a66325vqNW;
        }
    };
    hs_a66425vqO0.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdcmin1025vqO2.evaluateOnce = function () {
        if (hs_a66425vqO0.notEvaluated) {
            return hs_a66425vqO0.hscall();
        } else {
            return hs_a66425vqO0;
        }
    };
    hs_a66525vqO4.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64);
    };
    hs_zdczeze1025vqO6.evaluateOnce = function () {
        if (hs_a66525vqO4.notEvaluated) {
            return hs_a66525vqO4.hscall();
        } else {
            return hs_a66525vqO4;
        }
    };
    hs_a66625vqO8.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64);
    };
    hs_zdczsze1025vqOa.evaluateOnce = function () {
        if (hs_a66625vqO8.notEvaluated) {
            return hs_a66625vqO8.hscall();
        } else {
            return hs_a66625vqO8;
        }
    };
    this.hs_zdfEqCOff.data = [hs_a66525vqO4, hs_a66625vqO8];
    this.hs_zdfOrdCOff.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCOff, hs_a65825vqNC, hs_a65925vqNG, hs_a66025vqNK, hs_a66125vqNO, hs_a66225vqNS, hs_a66325vqNW, hs_a66425vqO0];
    this.hs_zdfNumCOff.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCOff, $hs.modules.SystemziPosixziTypes.hs_zdfShowCOff, hs_a65125vqNa, hs_a65225vqNe, hs_a65325vqNi, hs_a65425vqNm, hs_a65525vqNq, hs_a65625vqNu, hs_a65725vqNy];
    this.hs_zdfRealCOff.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCOff, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCOff, hs_a63425vqM4];
    this.hs_zdfIntegralCOff.data = [$hs.modules.SystemziPosixziTypes.hs_zdfRealCOff, $hs.modules.SystemziPosixziTypes.hs_zdfEnumCOff, hs_a62525vqLu, hs_a62625vqLy, hs_a62725vqLC, hs_a62825vqLG, hs_a62925vqLK, hs_a63025vqLO, hs_a63125vqLS];
    this.hs_zdfBitsCOff.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCOff, hs_a60825vqKo, hs_a60925vqKs, hs_a61025vqKw, hs_a61125vqKA, hs_a61225vqKE, hs_a61325vqKI, hs_a61425vqKM, hs_a61525vqKQ, hs_a61625vqKU, hs_a61725vqKY, hs_a61825vqL2, hs_a61925vqL6, hs_a62025vqLa, hs_a62125vqLe, hs_a62225vqLi, hs_a62325vqLm, hs_a62425vqLq];
    hs_a66725vqOc.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizazi925vqOe.evaluateOnce = function () {
        if (hs_a66725vqOc.notEvaluated) {
            return hs_a66725vqOc.hscall();
        } else {
            return hs_a66725vqOc;
        }
    };
    hs_a66825vqOg.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizbzi925vqOi.evaluateOnce = function () {
        if (hs_a66825vqOg.notEvaluated) {
            return hs_a66825vqOg.hscall();
        } else {
            return hs_a66825vqOg;
        }
    };
    hs_a66925vqOk.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcxor925vqOm.evaluateOnce = function () {
        if (hs_a66925vqOk.notEvaluated) {
            return hs_a66925vqOk.hscall();
        } else {
            return hs_a66925vqOk;
        }
    };
    hs_a67025vqOo.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplement925vqOq.evaluateOnce = function () {
        if (hs_a67025vqOo.notEvaluated) {
            return hs_a67025vqOo.hscall();
        } else {
            return hs_a67025vqOo;
        }
    };
    hs_a67125vqOs.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshift925vqOu.evaluateOnce = function () {
        if (hs_a67125vqOs.notEvaluated) {
            return hs_a67125vqOs.hscall();
        } else {
            return hs_a67125vqOs;
        }
    };
    hs_a67225vqOw.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotate925vqOy.evaluateOnce = function () {
        if (hs_a67225vqOw.notEvaluated) {
            return hs_a67225vqOw.hscall();
        } else {
            return hs_a67225vqOw;
        }
    };
    hs_a67325vqOA.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbit925vqOC.evaluateOnce = function () {
        if (hs_a67325vqOA.notEvaluated) {
            return hs_a67325vqOA.hscall();
        } else {
            return hs_a67325vqOA;
        }
    };
    hs_a67425vqOE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcsetBit925vqOG.evaluateOnce = function () {
        if (hs_a67425vqOE.notEvaluated) {
            return hs_a67425vqOE.hscall();
        } else {
            return hs_a67425vqOE;
        }
    };
    hs_a67525vqOI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcclearBit925vqOK.evaluateOnce = function () {
        if (hs_a67525vqOI.notEvaluated) {
            return hs_a67525vqOI.hscall();
        } else {
            return hs_a67525vqOI;
        }
    };
    hs_a67625vqOM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplementBit925vqOO.evaluateOnce = function () {
        if (hs_a67625vqOM.notEvaluated) {
            return hs_a67625vqOM.hscall();
        } else {
            return hs_a67625vqOM;
        }
    };
    hs_a67725vqOQ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdctestBit925vqOS.evaluateOnce = function () {
        if (hs_a67725vqOQ.notEvaluated) {
            return hs_a67725vqOQ.hscall();
        } else {
            return hs_a67725vqOQ;
        }
    };
    hs_a67825vqOU.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbitSizze925vqOW.evaluateOnce = function () {
        if (hs_a67825vqOU.notEvaluated) {
            return hs_a67825vqOU.hscall();
        } else {
            return hs_a67825vqOU;
        }
    };
    hs_a67925vqOY.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcisSigned925vqP0.evaluateOnce = function () {
        if (hs_a67925vqOY.notEvaluated) {
            return hs_a67925vqOY.hscall();
        } else {
            return hs_a67925vqOY;
        }
    };
    hs_a68025vqP2.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftL925vqP4.evaluateOnce = function () {
        if (hs_a68025vqP2.notEvaluated) {
            return hs_a68025vqP2.hscall();
        } else {
            return hs_a68025vqP2;
        }
    };
    hs_a68125vqP6.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftR925vqP8.evaluateOnce = function () {
        if (hs_a68125vqP6.notEvaluated) {
            return hs_a68125vqP6.hscall();
        } else {
            return hs_a68125vqP6;
        }
    };
    hs_a68225vqPa.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateL925vqPc.evaluateOnce = function () {
        if (hs_a68225vqPa.notEvaluated) {
            return hs_a68225vqPa.hscall();
        } else {
            return hs_a68225vqPa;
        }
    };
    hs_a68325vqPe.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateR925vqPg.evaluateOnce = function () {
        if (hs_a68325vqPe.notEvaluated) {
            return hs_a68325vqPe.hscall();
        } else {
            return hs_a68325vqPe;
        }
    };
    hs_a68425vqPi.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquot925vqPk.evaluateOnce = function () {
        if (hs_a68425vqPi.notEvaluated) {
            return hs_a68425vqPi.hscall();
        } else {
            return hs_a68425vqPi;
        }
    };
    hs_a68525vqPm.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcrem925vqPo.evaluateOnce = function () {
        if (hs_a68525vqPm.notEvaluated) {
            return hs_a68525vqPm.hscall();
        } else {
            return hs_a68525vqPm;
        }
    };
    hs_a68625vqPq.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdiv925vqPs.evaluateOnce = function () {
        if (hs_a68625vqPq.notEvaluated) {
            return hs_a68625vqPq.hscall();
        } else {
            return hs_a68625vqPq;
        }
    };
    hs_a68725vqPu.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcmod925vqPw.evaluateOnce = function () {
        if (hs_a68725vqPu.notEvaluated) {
            return hs_a68725vqPu.hscall();
        } else {
            return hs_a68725vqPu;
        }
    };
    hs_a68825vqPy.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquotRem925vqPA.evaluateOnce = function () {
        if (hs_a68825vqPy.notEvaluated) {
            return hs_a68825vqPy.hscall();
        } else {
            return hs_a68825vqPy;
        }
    };
    hs_a68925vqPC.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdivMod925vqPE.evaluateOnce = function () {
        if (hs_a68925vqPC.notEvaluated) {
            return hs_a68925vqPC.hscall();
        } else {
            return hs_a68925vqPC;
        }
    };
    hs_a69025vqPG.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdctoInteger925vqPI.evaluateOnce = function () {
        if (hs_a69025vqPG.notEvaluated) {
            return hs_a69025vqPG.hscall();
        } else {
            return hs_a69025vqPG;
        }
    };
    hs_a69125vqPK.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcminBound925vqPM.evaluateOnce = function () {
        if (hs_a69125vqPK.notEvaluated) {
            return hs_a69125vqPK.hscall();
        } else {
            return hs_a69125vqPK;
        }
    };
    hs_a69225vqPO.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcmaxBound925vqPQ.evaluateOnce = function () {
        if (hs_a69225vqPO.notEvaluated) {
            return hs_a69225vqPO.hscall();
        } else {
            return hs_a69225vqPO;
        }
    };
    this.hs_zdfBoundedCMode.data = [hs_a69125vqPK, hs_a69225vqPO];
    hs_a69325vqPS.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord32);
    };
    hs_zdctoRational1125vqPU.evaluateOnce = function () {
        if (hs_a69325vqPS.notEvaluated) {
            return hs_a69325vqPS.hscall();
        } else {
            return hs_a69325vqPS;
        }
    };
    hs_a69425vqPW.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcsizzeOf1125vqPY.evaluateOnce = function () {
        if (hs_a69425vqPW.notEvaluated) {
            return hs_a69425vqPW.hscall();
        } else {
            return hs_a69425vqPW;
        }
    };
    hs_a69525vqQ0.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcalignment1125vqQ2.evaluateOnce = function () {
        if (hs_a69525vqQ0.notEvaluated) {
            return hs_a69525vqQ0.hscall();
        } else {
            return hs_a69525vqQ0;
        }
    };
    hs_a69625vqQ4.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekElemOff1125vqQ6.evaluateOnce = function () {
        if (hs_a69625vqQ4.notEvaluated) {
            return hs_a69625vqQ4.hscall();
        } else {
            return hs_a69625vqQ4;
        }
    };
    hs_a69725vqQ8.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeElemOff1125vqQa.evaluateOnce = function () {
        if (hs_a69725vqQ8.notEvaluated) {
            return hs_a69725vqQ8.hscall();
        } else {
            return hs_a69725vqQ8;
        }
    };
    hs_a69825vqQc.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekByteOff1125vqQe.evaluateOnce = function () {
        if (hs_a69825vqQc.notEvaluated) {
            return hs_a69825vqQc.hscall();
        } else {
            return hs_a69825vqQc;
        }
    };
    hs_a69925vqQg.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeByteOff1125vqQi.evaluateOnce = function () {
        if (hs_a69925vqQg.notEvaluated) {
            return hs_a69925vqQg.hscall();
        } else {
            return hs_a69925vqQg;
        }
    };
    hs_a70025vqQk.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeek1125vqQm.evaluateOnce = function () {
        if (hs_a70025vqQk.notEvaluated) {
            return hs_a70025vqQk.hscall();
        } else {
            return hs_a70025vqQk;
        }
    };
    hs_a70125vqQo.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpoke1125vqQq.evaluateOnce = function () {
        if (hs_a70125vqQo.notEvaluated) {
            return hs_a70125vqQo.hscall();
        } else {
            return hs_a70125vqQo;
        }
    };
    this.hs_zdfStorableCMode.data = [hs_a69425vqPW, hs_a69525vqQ0, hs_a69625vqQ4, hs_a69725vqQ8, hs_a69825vqQc, hs_a69925vqQg, hs_a70025vqQk, hs_a70125vqQo];
    hs_a70225vqQs.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcsucc1125vqQu.evaluateOnce = function () {
        if (hs_a70225vqQs.notEvaluated) {
            return hs_a70225vqQs.hscall();
        } else {
            return hs_a70225vqQs;
        }
    };
    hs_a70325vqQw.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcpred1125vqQy.evaluateOnce = function () {
        if (hs_a70325vqQw.notEvaluated) {
            return hs_a70325vqQw.hscall();
        } else {
            return hs_a70325vqQw;
        }
    };
    hs_a70425vqQA.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdctoEnum1125vqQC.evaluateOnce = function () {
        if (hs_a70425vqQA.notEvaluated) {
            return hs_a70425vqQA.hscall();
        } else {
            return hs_a70425vqQA;
        }
    };
    hs_a70525vqQE.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcfromEnum1125vqQG.evaluateOnce = function () {
        if (hs_a70525vqQE.notEvaluated) {
            return hs_a70525vqQE.hscall();
        } else {
            return hs_a70525vqQE;
        }
    };
    hs_a70625vqQI.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFrom1125vqQK.evaluateOnce = function () {
        if (hs_a70625vqQI.notEvaluated) {
            return hs_a70625vqQI.hscall();
        } else {
            return hs_a70625vqQI;
        }
    };
    hs_a70725vqQM.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThen1125vqQO.evaluateOnce = function () {
        if (hs_a70725vqQM.notEvaluated) {
            return hs_a70725vqQM.hscall();
        } else {
            return hs_a70725vqQM;
        }
    };
    hs_a70825vqQQ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromTo1125vqQS.evaluateOnce = function () {
        if (hs_a70825vqQQ.notEvaluated) {
            return hs_a70825vqQQ.hscall();
        } else {
            return hs_a70825vqQQ;
        }
    };
    hs_a70925vqQU.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThenTo1125vqQW.evaluateOnce = function () {
        if (hs_a70925vqQU.notEvaluated) {
            return hs_a70925vqQU.hscall();
        } else {
            return hs_a70925vqQU;
        }
    };
    this.hs_zdfEnumCMode.data = [hs_a70225vqQs, hs_a70325vqQw, hs_a70425vqQA, hs_a70525vqQE, hs_a70625vqQI, hs_a70725vqQM, hs_a70825vqQQ, hs_a70925vqQU];
    hs_a71025vqQY.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczp1125vqR0.evaluateOnce = function () {
        if (hs_a71025vqQY.notEvaluated) {
            return hs_a71025vqQY.hscall();
        } else {
            return hs_a71025vqQY;
        }
    };
    hs_a71125vqR2.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczt1125vqR4.evaluateOnce = function () {
        if (hs_a71125vqR2.notEvaluated) {
            return hs_a71125vqR2.hscall();
        } else {
            return hs_a71125vqR2;
        }
    };
    hs_a71225vqR6.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczm1125vqR8.evaluateOnce = function () {
        if (hs_a71225vqR6.notEvaluated) {
            return hs_a71225vqR6.hscall();
        } else {
            return hs_a71225vqR6;
        }
    };
    hs_a71325vqRa.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcnegate1125vqRc.evaluateOnce = function () {
        if (hs_a71325vqRa.notEvaluated) {
            return hs_a71325vqRa.hscall();
        } else {
            return hs_a71325vqRa;
        }
    };
    hs_a71425vqRe.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcabs1125vqRg.evaluateOnce = function () {
        if (hs_a71425vqRe.notEvaluated) {
            return hs_a71425vqRe.hscall();
        } else {
            return hs_a71425vqRe;
        }
    };
    hs_a71525vqRi.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcsignum1125vqRk.evaluateOnce = function () {
        if (hs_a71525vqRi.notEvaluated) {
            return hs_a71525vqRi.hscall();
        } else {
            return hs_a71525vqRi;
        }
    };
    hs_a71625vqRm.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcfromInteger1125vqRo.evaluateOnce = function () {
        if (hs_a71625vqRm.notEvaluated) {
            return hs_a71625vqRm.hscall();
        } else {
            return hs_a71625vqRm;
        }
    };
    hs_a71725vqRq.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdccompare1125vqRs.evaluateOnce = function () {
        if (hs_a71725vqRq.notEvaluated) {
            return hs_a71725vqRq.hscall();
        } else {
            return hs_a71725vqRq;
        }
    };
    hs_a71825vqRu.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczl1125vqRw.evaluateOnce = function () {
        if (hs_a71825vqRu.notEvaluated) {
            return hs_a71825vqRu.hscall();
        } else {
            return hs_a71825vqRu;
        }
    };
    hs_a71925vqRy.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczgze1125vqRA.evaluateOnce = function () {
        if (hs_a71925vqRy.notEvaluated) {
            return hs_a71925vqRy.hscall();
        } else {
            return hs_a71925vqRy;
        }
    };
    hs_a72025vqRC.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczg1125vqRE.evaluateOnce = function () {
        if (hs_a72025vqRC.notEvaluated) {
            return hs_a72025vqRC.hscall();
        } else {
            return hs_a72025vqRC;
        }
    };
    hs_a72125vqRG.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczlze1125vqRI.evaluateOnce = function () {
        if (hs_a72125vqRG.notEvaluated) {
            return hs_a72125vqRG.hscall();
        } else {
            return hs_a72125vqRG;
        }
    };
    hs_a72225vqRK.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmax1125vqRM.evaluateOnce = function () {
        if (hs_a72225vqRK.notEvaluated) {
            return hs_a72225vqRK.hscall();
        } else {
            return hs_a72225vqRK;
        }
    };
    hs_a72325vqRO.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmin1125vqRQ.evaluateOnce = function () {
        if (hs_a72325vqRO.notEvaluated) {
            return hs_a72325vqRO.hscall();
        } else {
            return hs_a72325vqRO;
        }
    };
    hs_a72425vqRS.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczeze1125vqRU.evaluateOnce = function () {
        if (hs_a72425vqRS.notEvaluated) {
            return hs_a72425vqRS.hscall();
        } else {
            return hs_a72425vqRS;
        }
    };
    hs_a72525vqRW.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczsze1125vqRY.evaluateOnce = function () {
        if (hs_a72525vqRW.notEvaluated) {
            return hs_a72525vqRW.hscall();
        } else {
            return hs_a72525vqRW;
        }
    };
    this.hs_zdfEqCMode.data = [hs_a72425vqRS, hs_a72525vqRW];
    this.hs_zdfOrdCMode.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCMode, hs_a71725vqRq, hs_a71825vqRu, hs_a71925vqRy, hs_a72025vqRC, hs_a72125vqRG, hs_a72225vqRK, hs_a72325vqRO];
    this.hs_zdfNumCMode.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCMode, $hs.modules.SystemziPosixziTypes.hs_zdfShowCMode, hs_a71025vqQY, hs_a71125vqR2, hs_a71225vqR6, hs_a71325vqRa, hs_a71425vqRe, hs_a71525vqRi, hs_a71625vqRm];
    this.hs_zdfRealCMode.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCMode, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCMode, hs_a69325vqPS];
    this.hs_zdfIntegralCMode.data = [$hs.modules.SystemziPosixziTypes.hs_zdfRealCMode, $hs.modules.SystemziPosixziTypes.hs_zdfEnumCMode, hs_a68425vqPi, hs_a68525vqPm, hs_a68625vqPq, hs_a68725vqPu, hs_a68825vqPy, hs_a68925vqPC, hs_a69025vqPG];
    this.hs_zdfBitsCMode.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCMode, hs_a66725vqOc, hs_a66825vqOg, hs_a66925vqOk, hs_a67025vqOo, hs_a67125vqOs, hs_a67225vqOw, hs_a67325vqOA, hs_a67425vqOE, hs_a67525vqOI, hs_a67625vqOM, hs_a67725vqOQ, hs_a67825vqOU, hs_a67925vqOY, hs_a68025vqP2, hs_a68125vqP6, hs_a68225vqPa, hs_a68325vqPe];
    hs_a72625vqS0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdczizazi1025vqS2.evaluateOnce = function () {
        if (hs_a72625vqS0.notEvaluated) {
            return hs_a72625vqS0.hscall();
        } else {
            return hs_a72625vqS0;
        }
    };
    hs_a72725vqS4.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdczizbzi1025vqS6.evaluateOnce = function () {
        if (hs_a72725vqS4.notEvaluated) {
            return hs_a72725vqS4.hscall();
        } else {
            return hs_a72725vqS4;
        }
    };
    hs_a72825vqS8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcxor1025vqSa.evaluateOnce = function () {
        if (hs_a72825vqS8.notEvaluated) {
            return hs_a72825vqS8.hscall();
        } else {
            return hs_a72825vqS8;
        }
    };
    hs_a72925vqSc.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdccomplement1025vqSe.evaluateOnce = function () {
        if (hs_a72925vqSc.notEvaluated) {
            return hs_a72925vqSc.hscall();
        } else {
            return hs_a72925vqSc;
        }
    };
    hs_a73025vqSg.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshift1025vqSi.evaluateOnce = function () {
        if (hs_a73025vqSg.notEvaluated) {
            return hs_a73025vqSg.hscall();
        } else {
            return hs_a73025vqSg;
        }
    };
    hs_a73125vqSk.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotate1025vqSm.evaluateOnce = function () {
        if (hs_a73125vqSk.notEvaluated) {
            return hs_a73125vqSk.hscall();
        } else {
            return hs_a73125vqSk;
        }
    };
    hs_a73225vqSo.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcbit1025vqSq.evaluateOnce = function () {
        if (hs_a73225vqSo.notEvaluated) {
            return hs_a73225vqSo.hscall();
        } else {
            return hs_a73225vqSo;
        }
    };
    hs_a73325vqSs.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcsetBit1025vqSu.evaluateOnce = function () {
        if (hs_a73325vqSs.notEvaluated) {
            return hs_a73325vqSs.hscall();
        } else {
            return hs_a73325vqSs;
        }
    };
    hs_a73425vqSw.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcclearBit1025vqSy.evaluateOnce = function () {
        if (hs_a73425vqSw.notEvaluated) {
            return hs_a73425vqSw.hscall();
        } else {
            return hs_a73425vqSw;
        }
    };
    hs_a73525vqSA.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdccomplementBit1025vqSC.evaluateOnce = function () {
        if (hs_a73525vqSA.notEvaluated) {
            return hs_a73525vqSA.hscall();
        } else {
            return hs_a73525vqSA;
        }
    };
    hs_a73625vqSE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdctestBit1025vqSG.evaluateOnce = function () {
        if (hs_a73625vqSE.notEvaluated) {
            return hs_a73625vqSE.hscall();
        } else {
            return hs_a73625vqSE;
        }
    };
    hs_a73725vqSI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcbitSizze1025vqSK.evaluateOnce = function () {
        if (hs_a73725vqSI.notEvaluated) {
            return hs_a73725vqSI.hscall();
        } else {
            return hs_a73725vqSI;
        }
    };
    hs_a73825vqSM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcisSigned1025vqSO.evaluateOnce = function () {
        if (hs_a73825vqSM.notEvaluated) {
            return hs_a73825vqSM.hscall();
        } else {
            return hs_a73825vqSM;
        }
    };
    hs_a73925vqSQ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshiftL1025vqSS.evaluateOnce = function () {
        if (hs_a73925vqSQ.notEvaluated) {
            return hs_a73925vqSQ.hscall();
        } else {
            return hs_a73925vqSQ;
        }
    };
    hs_a74025vqSU.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshiftR1025vqSW.evaluateOnce = function () {
        if (hs_a74025vqSU.notEvaluated) {
            return hs_a74025vqSU.hscall();
        } else {
            return hs_a74025vqSU;
        }
    };
    hs_a74125vqSY.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotateL1025vqT0.evaluateOnce = function () {
        if (hs_a74125vqSY.notEvaluated) {
            return hs_a74125vqSY.hscall();
        } else {
            return hs_a74125vqSY;
        }
    };
    hs_a74225vqT2.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotateR1025vqT4.evaluateOnce = function () {
        if (hs_a74225vqT2.notEvaluated) {
            return hs_a74225vqT2.hscall();
        } else {
            return hs_a74225vqT2;
        }
    };
    hs_a74325vqT6.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcquot1025vqT8.evaluateOnce = function () {
        if (hs_a74325vqT6.notEvaluated) {
            return hs_a74325vqT6.hscall();
        } else {
            return hs_a74325vqT6;
        }
    };
    hs_a74425vqTa.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcrem1025vqTc.evaluateOnce = function () {
        if (hs_a74425vqTa.notEvaluated) {
            return hs_a74425vqTa.hscall();
        } else {
            return hs_a74425vqTa;
        }
    };
    hs_a74525vqTe.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcdiv1025vqTg.evaluateOnce = function () {
        if (hs_a74525vqTe.notEvaluated) {
            return hs_a74525vqTe.hscall();
        } else {
            return hs_a74525vqTe;
        }
    };
    hs_a74625vqTi.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcmod1025vqTk.evaluateOnce = function () {
        if (hs_a74625vqTi.notEvaluated) {
            return hs_a74625vqTi.hscall();
        } else {
            return hs_a74625vqTi;
        }
    };
    hs_a74725vqTm.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcquotRem1025vqTo.evaluateOnce = function () {
        if (hs_a74725vqTm.notEvaluated) {
            return hs_a74725vqTm.hscall();
        } else {
            return hs_a74725vqTm;
        }
    };
    hs_a74825vqTq.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcdivMod1025vqTs.evaluateOnce = function () {
        if (hs_a74825vqTq.notEvaluated) {
            return hs_a74825vqTq.hscall();
        } else {
            return hs_a74825vqTq;
        }
    };
    hs_a74925vqTu.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdctoInteger1025vqTw.evaluateOnce = function () {
        if (hs_a74925vqTu.notEvaluated) {
            return hs_a74925vqTu.hscall();
        } else {
            return hs_a74925vqTu;
        }
    };
    hs_a75025vqTy.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord64);
    };
    hs_zdcminBound1025vqTA.evaluateOnce = function () {
        if (hs_a75025vqTy.notEvaluated) {
            return hs_a75025vqTy.hscall();
        } else {
            return hs_a75025vqTy;
        }
    };
    hs_a75125vqTC.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord64);
    };
    hs_zdcmaxBound1025vqTE.evaluateOnce = function () {
        if (hs_a75125vqTC.notEvaluated) {
            return hs_a75125vqTC.hscall();
        } else {
            return hs_a75125vqTC;
        }
    };
    this.hs_zdfBoundedCIno.data = [hs_a75025vqTy, hs_a75125vqTC];
    hs_a75225vqTG.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord64);
    };
    hs_zdctoRational1225vqTI.evaluateOnce = function () {
        if (hs_a75225vqTG.notEvaluated) {
            return hs_a75225vqTG.hscall();
        } else {
            return hs_a75225vqTG;
        }
    };
    hs_a75325vqTK.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcsizzeOf1225vqTM.evaluateOnce = function () {
        if (hs_a75325vqTK.notEvaluated) {
            return hs_a75325vqTK.hscall();
        } else {
            return hs_a75325vqTK;
        }
    };
    hs_a75425vqTO.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcalignment1225vqTQ.evaluateOnce = function () {
        if (hs_a75425vqTO.notEvaluated) {
            return hs_a75425vqTO.hscall();
        } else {
            return hs_a75425vqTO;
        }
    };
    hs_a75525vqTS.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeekElemOff1225vqTU.evaluateOnce = function () {
        if (hs_a75525vqTS.notEvaluated) {
            return hs_a75525vqTS.hscall();
        } else {
            return hs_a75525vqTS;
        }
    };
    hs_a75625vqTW.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpokeElemOff1225vqTY.evaluateOnce = function () {
        if (hs_a75625vqTW.notEvaluated) {
            return hs_a75625vqTW.hscall();
        } else {
            return hs_a75625vqTW;
        }
    };
    hs_a75725vqU0.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeekByteOff1225vqU2.evaluateOnce = function () {
        if (hs_a75725vqU0.notEvaluated) {
            return hs_a75725vqU0.hscall();
        } else {
            return hs_a75725vqU0;
        }
    };
    hs_a75825vqU4.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpokeByteOff1225vqU6.evaluateOnce = function () {
        if (hs_a75825vqU4.notEvaluated) {
            return hs_a75825vqU4.hscall();
        } else {
            return hs_a75825vqU4;
        }
    };
    hs_a75925vqU8.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeek1225vqUa.evaluateOnce = function () {
        if (hs_a75925vqU8.notEvaluated) {
            return hs_a75925vqU8.hscall();
        } else {
            return hs_a75925vqU8;
        }
    };
    hs_a76025vqUc.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpoke1225vqUe.evaluateOnce = function () {
        if (hs_a76025vqUc.notEvaluated) {
            return hs_a76025vqUc.hscall();
        } else {
            return hs_a76025vqUc;
        }
    };
    this.hs_zdfStorableCIno.data = [hs_a75325vqTK, hs_a75425vqTO, hs_a75525vqTS, hs_a75625vqTW, hs_a75725vqU0, hs_a75825vqU4, hs_a75925vqU8, hs_a76025vqUc];
    hs_a76125vqUg.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcsucc1225vqUi.evaluateOnce = function () {
        if (hs_a76125vqUg.notEvaluated) {
            return hs_a76125vqUg.hscall();
        } else {
            return hs_a76125vqUg;
        }
    };
    hs_a76225vqUk.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcpred1225vqUm.evaluateOnce = function () {
        if (hs_a76225vqUk.notEvaluated) {
            return hs_a76225vqUk.hscall();
        } else {
            return hs_a76225vqUk;
        }
    };
    hs_a76325vqUo.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdctoEnum1225vqUq.evaluateOnce = function () {
        if (hs_a76325vqUo.notEvaluated) {
            return hs_a76325vqUo.hscall();
        } else {
            return hs_a76325vqUo;
        }
    };
    hs_a76425vqUs.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcfromEnum1225vqUu.evaluateOnce = function () {
        if (hs_a76425vqUs.notEvaluated) {
            return hs_a76425vqUs.hscall();
        } else {
            return hs_a76425vqUs;
        }
    };
    hs_a76525vqUw.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFrom1225vqUy.evaluateOnce = function () {
        if (hs_a76525vqUw.notEvaluated) {
            return hs_a76525vqUw.hscall();
        } else {
            return hs_a76525vqUw;
        }
    };
    hs_a76625vqUA.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromThen1225vqUC.evaluateOnce = function () {
        if (hs_a76625vqUA.notEvaluated) {
            return hs_a76625vqUA.hscall();
        } else {
            return hs_a76625vqUA;
        }
    };
    hs_a76725vqUE.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromTo1225vqUG.evaluateOnce = function () {
        if (hs_a76725vqUE.notEvaluated) {
            return hs_a76725vqUE.hscall();
        } else {
            return hs_a76725vqUE;
        }
    };
    hs_a76825vqUI.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromThenTo1225vqUK.evaluateOnce = function () {
        if (hs_a76825vqUI.notEvaluated) {
            return hs_a76825vqUI.hscall();
        } else {
            return hs_a76825vqUI;
        }
    };
    this.hs_zdfEnumCIno.data = [hs_a76125vqUg, hs_a76225vqUk, hs_a76325vqUo, hs_a76425vqUs, hs_a76525vqUw, hs_a76625vqUA, hs_a76725vqUE, hs_a76825vqUI];
    hs_a76925vqUM.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczp1225vqUO.evaluateOnce = function () {
        if (hs_a76925vqUM.notEvaluated) {
            return hs_a76925vqUM.hscall();
        } else {
            return hs_a76925vqUM;
        }
    };
    hs_a77025vqUQ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczt1225vqUS.evaluateOnce = function () {
        if (hs_a77025vqUQ.notEvaluated) {
            return hs_a77025vqUQ.hscall();
        } else {
            return hs_a77025vqUQ;
        }
    };
    hs_a77125vqUU.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczm1225vqUW.evaluateOnce = function () {
        if (hs_a77125vqUU.notEvaluated) {
            return hs_a77125vqUU.hscall();
        } else {
            return hs_a77125vqUU;
        }
    };
    hs_a77225vqUY.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcnegate1225vqV0.evaluateOnce = function () {
        if (hs_a77225vqUY.notEvaluated) {
            return hs_a77225vqUY.hscall();
        } else {
            return hs_a77225vqUY;
        }
    };
    hs_a77325vqV2.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcabs1225vqV4.evaluateOnce = function () {
        if (hs_a77325vqV2.notEvaluated) {
            return hs_a77325vqV2.hscall();
        } else {
            return hs_a77325vqV2;
        }
    };
    hs_a77425vqV6.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcsignum1225vqV8.evaluateOnce = function () {
        if (hs_a77425vqV6.notEvaluated) {
            return hs_a77425vqV6.hscall();
        } else {
            return hs_a77425vqV6;
        }
    };
    hs_a77525vqVa.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcfromInteger1225vqVc.evaluateOnce = function () {
        if (hs_a77525vqVa.notEvaluated) {
            return hs_a77525vqVa.hscall();
        } else {
            return hs_a77525vqVa;
        }
    };
    hs_a77625vqVe.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdccompare1225vqVg.evaluateOnce = function () {
        if (hs_a77625vqVe.notEvaluated) {
            return hs_a77625vqVe.hscall();
        } else {
            return hs_a77625vqVe;
        }
    };
    hs_a77725vqVi.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczl1225vqVk.evaluateOnce = function () {
        if (hs_a77725vqVi.notEvaluated) {
            return hs_a77725vqVi.hscall();
        } else {
            return hs_a77725vqVi;
        }
    };
    hs_a77825vqVm.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczgze1225vqVo.evaluateOnce = function () {
        if (hs_a77825vqVm.notEvaluated) {
            return hs_a77825vqVm.hscall();
        } else {
            return hs_a77825vqVm;
        }
    };
    hs_a77925vqVq.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczg1225vqVs.evaluateOnce = function () {
        if (hs_a77925vqVq.notEvaluated) {
            return hs_a77925vqVq.hscall();
        } else {
            return hs_a77925vqVq;
        }
    };
    hs_a78025vqVu.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczlze1225vqVw.evaluateOnce = function () {
        if (hs_a78025vqVu.notEvaluated) {
            return hs_a78025vqVu.hscall();
        } else {
            return hs_a78025vqVu;
        }
    };
    hs_a78125vqVy.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdcmax1225vqVA.evaluateOnce = function () {
        if (hs_a78125vqVy.notEvaluated) {
            return hs_a78125vqVy.hscall();
        } else {
            return hs_a78125vqVy;
        }
    };
    hs_a78225vqVC.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdcmin1225vqVE.evaluateOnce = function () {
        if (hs_a78225vqVC.notEvaluated) {
            return hs_a78225vqVC.hscall();
        } else {
            return hs_a78225vqVC;
        }
    };
    hs_a78325vqVG.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64);
    };
    hs_zdczeze1225vqVI.evaluateOnce = function () {
        if (hs_a78325vqVG.notEvaluated) {
            return hs_a78325vqVG.hscall();
        } else {
            return hs_a78325vqVG;
        }
    };
    hs_a78425vqVK.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64);
    };
    hs_zdczsze1225vqVM.evaluateOnce = function () {
        if (hs_a78425vqVK.notEvaluated) {
            return hs_a78425vqVK.hscall();
        } else {
            return hs_a78425vqVK;
        }
    };
    this.hs_zdfEqCIno.data = [hs_a78325vqVG, hs_a78425vqVK];
    this.hs_zdfOrdCIno.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCIno, hs_a77625vqVe, hs_a77725vqVi, hs_a77825vqVm, hs_a77925vqVq, hs_a78025vqVu, hs_a78125vqVy, hs_a78225vqVC];
    this.hs_zdfNumCIno.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCIno, $hs.modules.SystemziPosixziTypes.hs_zdfShowCIno, hs_a76925vqUM, hs_a77025vqUQ, hs_a77125vqUU, hs_a77225vqUY, hs_a77325vqV2, hs_a77425vqV6, hs_a77525vqVa];
    this.hs_zdfRealCIno.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCIno, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCIno, hs_a75225vqTG];
    this.hs_zdfIntegralCIno.data = [$hs.modules.SystemziPosixziTypes.hs_zdfRealCIno, $hs.modules.SystemziPosixziTypes.hs_zdfEnumCIno, hs_a74325vqT6, hs_a74425vqTa, hs_a74525vqTe, hs_a74625vqTi, hs_a74725vqTm, hs_a74825vqTq, hs_a74925vqTu];
    this.hs_zdfBitsCIno.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCIno, hs_a72625vqS0, hs_a72725vqS4, hs_a72825vqS8, hs_a72925vqSc, hs_a73025vqSg, hs_a73125vqSk, hs_a73225vqSo, hs_a73325vqSs, hs_a73425vqSw, hs_a73525vqSA, hs_a73625vqSE, hs_a73725vqSI, hs_a73825vqSM, hs_a73925vqSQ, hs_a74025vqSU, hs_a74125vqSY, hs_a74225vqT2];
    hs_a78525vqVO.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord64);
    };
    hs_zdctoRational1325vqVQ.evaluateOnce = function () {
        if (hs_a78525vqVO.notEvaluated) {
            return hs_a78525vqVO.hscall();
        } else {
            return hs_a78525vqVO;
        }
    };
    hs_a78625vqVS.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcsizzeOf1325vqVU.evaluateOnce = function () {
        if (hs_a78625vqVS.notEvaluated) {
            return hs_a78625vqVS.hscall();
        } else {
            return hs_a78625vqVS;
        }
    };
    hs_a78725vqVW.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcalignment1325vqVY.evaluateOnce = function () {
        if (hs_a78725vqVW.notEvaluated) {
            return hs_a78725vqVW.hscall();
        } else {
            return hs_a78725vqVW;
        }
    };
    hs_a78825vqW0.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeekElemOff1325vqW2.evaluateOnce = function () {
        if (hs_a78825vqW0.notEvaluated) {
            return hs_a78825vqW0.hscall();
        } else {
            return hs_a78825vqW0;
        }
    };
    hs_a78925vqW4.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpokeElemOff1325vqW6.evaluateOnce = function () {
        if (hs_a78925vqW4.notEvaluated) {
            return hs_a78925vqW4.hscall();
        } else {
            return hs_a78925vqW4;
        }
    };
    hs_a79025vqW8.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeekByteOff1325vqWa.evaluateOnce = function () {
        if (hs_a79025vqW8.notEvaluated) {
            return hs_a79025vqW8.hscall();
        } else {
            return hs_a79025vqW8;
        }
    };
    hs_a79125vqWc.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpokeByteOff1325vqWe.evaluateOnce = function () {
        if (hs_a79125vqWc.notEvaluated) {
            return hs_a79125vqWc.hscall();
        } else {
            return hs_a79125vqWc;
        }
    };
    hs_a79225vqWg.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeek1325vqWi.evaluateOnce = function () {
        if (hs_a79225vqWg.notEvaluated) {
            return hs_a79225vqWg.hscall();
        } else {
            return hs_a79225vqWg;
        }
    };
    hs_a79325vqWk.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpoke1325vqWm.evaluateOnce = function () {
        if (hs_a79325vqWk.notEvaluated) {
            return hs_a79325vqWk.hscall();
        } else {
            return hs_a79325vqWk;
        }
    };
    this.hs_zdfStorableCDev.data = [hs_a78625vqVS, hs_a78725vqVW, hs_a78825vqW0, hs_a78925vqW4, hs_a79025vqW8, hs_a79125vqWc, hs_a79225vqWg, hs_a79325vqWk];
    hs_a79425vqWo.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcsucc1325vqWq.evaluateOnce = function () {
        if (hs_a79425vqWo.notEvaluated) {
            return hs_a79425vqWo.hscall();
        } else {
            return hs_a79425vqWo;
        }
    };
    hs_a79525vqWs.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcpred1325vqWu.evaluateOnce = function () {
        if (hs_a79525vqWs.notEvaluated) {
            return hs_a79525vqWs.hscall();
        } else {
            return hs_a79525vqWs;
        }
    };
    hs_a79625vqWw.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdctoEnum1325vqWy.evaluateOnce = function () {
        if (hs_a79625vqWw.notEvaluated) {
            return hs_a79625vqWw.hscall();
        } else {
            return hs_a79625vqWw;
        }
    };
    hs_a79725vqWA.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcfromEnum1325vqWC.evaluateOnce = function () {
        if (hs_a79725vqWA.notEvaluated) {
            return hs_a79725vqWA.hscall();
        } else {
            return hs_a79725vqWA;
        }
    };
    hs_a79825vqWE.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFrom1325vqWG.evaluateOnce = function () {
        if (hs_a79825vqWE.notEvaluated) {
            return hs_a79825vqWE.hscall();
        } else {
            return hs_a79825vqWE;
        }
    };
    hs_a79925vqWI.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromThen1325vqWK.evaluateOnce = function () {
        if (hs_a79925vqWI.notEvaluated) {
            return hs_a79925vqWI.hscall();
        } else {
            return hs_a79925vqWI;
        }
    };
    hs_a80025vqWM.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromTo1325vqWO.evaluateOnce = function () {
        if (hs_a80025vqWM.notEvaluated) {
            return hs_a80025vqWM.hscall();
        } else {
            return hs_a80025vqWM;
        }
    };
    hs_a80125vqWQ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromThenTo1325vqWS.evaluateOnce = function () {
        if (hs_a80125vqWQ.notEvaluated) {
            return hs_a80125vqWQ.hscall();
        } else {
            return hs_a80125vqWQ;
        }
    };
    this.hs_zdfEnumCDev.data = [hs_a79425vqWo, hs_a79525vqWs, hs_a79625vqWw, hs_a79725vqWA, hs_a79825vqWE, hs_a79925vqWI, hs_a80025vqWM, hs_a80125vqWQ];
    hs_a80225vqWU.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczp1325vqWW.evaluateOnce = function () {
        if (hs_a80225vqWU.notEvaluated) {
            return hs_a80225vqWU.hscall();
        } else {
            return hs_a80225vqWU;
        }
    };
    hs_a80325vqWY.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczt1325vqX0.evaluateOnce = function () {
        if (hs_a80325vqWY.notEvaluated) {
            return hs_a80325vqWY.hscall();
        } else {
            return hs_a80325vqWY;
        }
    };
    hs_a80425vqX2.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczm1325vqX4.evaluateOnce = function () {
        if (hs_a80425vqX2.notEvaluated) {
            return hs_a80425vqX2.hscall();
        } else {
            return hs_a80425vqX2;
        }
    };
    hs_a80525vqX6.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcnegate1325vqX8.evaluateOnce = function () {
        if (hs_a80525vqX6.notEvaluated) {
            return hs_a80525vqX6.hscall();
        } else {
            return hs_a80525vqX6;
        }
    };
    hs_a80625vqXa.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcabs1325vqXc.evaluateOnce = function () {
        if (hs_a80625vqXa.notEvaluated) {
            return hs_a80625vqXa.hscall();
        } else {
            return hs_a80625vqXa;
        }
    };
    hs_a80725vqXe.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcsignum1325vqXg.evaluateOnce = function () {
        if (hs_a80725vqXe.notEvaluated) {
            return hs_a80725vqXe.hscall();
        } else {
            return hs_a80725vqXe;
        }
    };
    hs_a80825vqXi.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcfromInteger1325vqXk.evaluateOnce = function () {
        if (hs_a80825vqXi.notEvaluated) {
            return hs_a80825vqXi.hscall();
        } else {
            return hs_a80825vqXi;
        }
    };
    hs_a80925vqXm.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdccompare1325vqXo.evaluateOnce = function () {
        if (hs_a80925vqXm.notEvaluated) {
            return hs_a80925vqXm.hscall();
        } else {
            return hs_a80925vqXm;
        }
    };
    hs_a81025vqXq.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczl1325vqXs.evaluateOnce = function () {
        if (hs_a81025vqXq.notEvaluated) {
            return hs_a81025vqXq.hscall();
        } else {
            return hs_a81025vqXq;
        }
    };
    hs_a81125vqXu.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczgze1325vqXw.evaluateOnce = function () {
        if (hs_a81125vqXu.notEvaluated) {
            return hs_a81125vqXu.hscall();
        } else {
            return hs_a81125vqXu;
        }
    };
    hs_a81225vqXy.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczg1325vqXA.evaluateOnce = function () {
        if (hs_a81225vqXy.notEvaluated) {
            return hs_a81225vqXy.hscall();
        } else {
            return hs_a81225vqXy;
        }
    };
    hs_a81325vqXC.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczlze1325vqXE.evaluateOnce = function () {
        if (hs_a81325vqXC.notEvaluated) {
            return hs_a81325vqXC.hscall();
        } else {
            return hs_a81325vqXC;
        }
    };
    hs_a81425vqXG.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdcmax1325vqXI.evaluateOnce = function () {
        if (hs_a81425vqXG.notEvaluated) {
            return hs_a81425vqXG.hscall();
        } else {
            return hs_a81425vqXG;
        }
    };
    hs_a81525vqXK.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdcmin1325vqXM.evaluateOnce = function () {
        if (hs_a81525vqXK.notEvaluated) {
            return hs_a81525vqXK.hscall();
        } else {
            return hs_a81525vqXK;
        }
    };
    hs_a81625vqXO.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64);
    };
    hs_zdczeze1325vqXQ.evaluateOnce = function () {
        if (hs_a81625vqXO.notEvaluated) {
            return hs_a81625vqXO.hscall();
        } else {
            return hs_a81625vqXO;
        }
    };
    hs_a81725vqXS.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64);
    };
    hs_zdczsze1325vqXU.evaluateOnce = function () {
        if (hs_a81725vqXS.notEvaluated) {
            return hs_a81725vqXS.hscall();
        } else {
            return hs_a81725vqXS;
        }
    };
    this.hs_zdfEqCDev.data = [hs_a81625vqXO, hs_a81725vqXS];
    this.hs_zdfOrdCDev.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCDev, hs_a80925vqXm, hs_a81025vqXq, hs_a81125vqXu, hs_a81225vqXy, hs_a81325vqXC, hs_a81425vqXG, hs_a81525vqXK];
    this.hs_zdfNumCDev.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCDev, $hs.modules.SystemziPosixziTypes.hs_zdfShowCDev, hs_a80225vqWU, hs_a80325vqWY, hs_a80425vqX2, hs_a80525vqX6, hs_a80625vqXa, hs_a80725vqXe, hs_a80825vqXi];
    this.hs_zdfRealCDev.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCDev, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCDev, hs_a78525vqVO];
    this.hs_Fd.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.SystemziPosixziTypes.hs_Fd.hscall(hs_eta1cW6l3);
    };
    this.hs_CRLim.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.SystemziPosixziTypes.hs_CRLim.hscall(hs_eta1cW6l3);
    };
    this.hs_CTcflag.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.SystemziPosixziTypes.hs_CTcflag.hscall(hs_eta1cW6l3);
    };
    this.hs_CSpeed.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.SystemziPosixziTypes.hs_CSpeed.hscall(hs_eta1cW6l3);
    };
    this.hs_CCc.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.SystemziPosixziTypes.hs_CCc.hscall(hs_eta1cW6l3);
    };
    this.hs_CUid.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.SystemziPosixziTypes.hs_CUid.hscall(hs_eta1cW6l3);
    };
    this.hs_CNlink.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.SystemziPosixziTypes.hs_CNlink.hscall(hs_eta1cW6l3);
    };
    this.hs_CGid.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.SystemziPosixziTypes.hs_CGid.hscall(hs_eta1cW6l3);
    };
    this.hs_CSsizze.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.SystemziPosixziTypes.hs_CSsizze.hscall(hs_eta1cW6l3);
    };
    this.hs_CPid.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.SystemziPosixziTypes.hs_CPid.hscall(hs_eta1cW6l3);
    };
    this.hs_COff.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.SystemziPosixziTypes.hs_COff.hscall(hs_eta1cW6l3);
    };
    this.hs_CMode.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.SystemziPosixziTypes.hs_CMode.hscall(hs_eta1cW6l3);
    };
    this.hs_CIno.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.SystemziPosixziTypes.hs_CIno.hscall(hs_eta1cW6l3);
    };
    this.hs_CDev.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.SystemziPosixziTypes.hs_CDev.hscall(hs_eta1cW6l3);
    };
};
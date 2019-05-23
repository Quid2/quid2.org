
$hs.modules.SystemziPosixziTypes = new $hs.Module();
$hs.modules.SystemziPosixziTypes.dependencies = ["GHC.Types", "GHC.CString", "GHC.Enum", "GHC.Num", "GHC.Real", "GHC.Show", "Data.Typeable.Internal", "GHC.Classes", "GHC.Int", "GHC.Read", "GHC.Word", "Data.Bits", "Foreign.C.Types", "Foreign.Storable"];
$hs.modules.SystemziPosixziTypes.initBeforeDependencies = function () {
    this.hs_zdfReadCDev = new $hs.Data(1);
    this.hs_zdfShowCDev = new $hs.Data(1);
    this.hs_zdfReadCIno = new $hs.Data(1);
    this.hs_zdfShowCIno = new $hs.Data(1);
    this.hs_zdfReadCMode = new $hs.Data(1);
    this.hs_zdfShowCMode = new $hs.Data(1);
    this.hs_zdfReadCOff = new $hs.Data(1);
    this.hs_zdfShowCOff = new $hs.Data(1);
    this.hs_zdfReadCPid = new $hs.Data(1);
    this.hs_zdfShowCPid = new $hs.Data(1);
    this.hs_zdfReadCSsizze = new $hs.Data(1);
    this.hs_zdfShowCSsizze = new $hs.Data(1);
    this.hs_zdfReadCGid = new $hs.Data(1);
    this.hs_zdfShowCGid = new $hs.Data(1);
    this.hs_zdfReadCNlink = new $hs.Data(1);
    this.hs_zdfShowCNlink = new $hs.Data(1);
    this.hs_zdfReadCUid = new $hs.Data(1);
    this.hs_zdfShowCUid = new $hs.Data(1);
    this.hs_zdfReadCCc = new $hs.Data(1);
    this.hs_zdfShowCCc = new $hs.Data(1);
    this.hs_zdfReadCSpeed = new $hs.Data(1);
    this.hs_zdfShowCSpeed = new $hs.Data(1);
    this.hs_zdfReadCTcflag = new $hs.Data(1);
    this.hs_zdfShowCTcflag = new $hs.Data(1);
    this.hs_zdfReadCRLim = new $hs.Data(1);
    this.hs_zdfShowCRLim = new $hs.Data(1);
    this.hs_zdfReadFd = new $hs.Data(1);
    this.hs_zdfShowFd = new $hs.Data(1);
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
    this.hs_zdfTypeableCDev = new $hs.Thunk();
    this.hs_zdfTypeableCIno = new $hs.Thunk();
    this.hs_zdfTypeableCMode = new $hs.Thunk();
    this.hs_zdfTypeableCOff = new $hs.Thunk();
    this.hs_zdfTypeableCPid = new $hs.Thunk();
    this.hs_zdfTypeableCSsizze = new $hs.Thunk();
    this.hs_zdfTypeableCGid = new $hs.Thunk();
    this.hs_zdfTypeableCNlink = new $hs.Thunk();
    this.hs_zdfTypeableCUid = new $hs.Thunk();
    this.hs_zdfTypeableCCc = new $hs.Thunk();
    this.hs_zdfTypeableCSpeed = new $hs.Thunk();
    this.hs_zdfTypeableCTcflag = new $hs.Thunk();
    this.hs_zdfTypeableCRLim = new $hs.Thunk();
    this.hs_zdfTypeableFd = new $hs.Thunk();
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
    this.hs_zdfTypeableCDev.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCIno.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCMode.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCOff.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCPid.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCSsizze.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCGid.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCNlink.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCUid.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCCc.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCSpeed.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCTcflag.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableCRLim.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableFd.evaluateOnce = function () {
        $hs.modules.SystemziPosixziTypes.loadDependencies();
        return this.evaluateOnce();
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
    var hs_a25v1rG = new $hs.Thunk();
    var hs_zdcreadList25v1rH = new $hs.Thunk();
    var hs_a125v1rI = new $hs.Thunk();
    var hs_zdcreadsPrec25v1rJ = new $hs.Thunk();
    var hs_zdcreadListPrec25v1rK = new $hs.Thunk();
    var hs_zdcreadPrec25v1rL = new $hs.Thunk();
    var hs_a225v1rM = new $hs.Thunk();
    var hs_zdcshowList25v1rN = new $hs.Thunk();
    var hs_a325v1rO = new $hs.Thunk();
    var hs_zdcshow25v1rP = new $hs.Thunk();
    var hs_a425v1rQ = new $hs.Thunk();
    var hs_zdcshowsPrec25v1rR = new $hs.Thunk();
    var hs_a525v1rS = new $hs.Thunk();
    var hs_zdcreadList125v1rT = new $hs.Thunk();
    var hs_a625v1rU = new $hs.Thunk();
    var hs_zdcreadsPrec125v1rV = new $hs.Thunk();
    var hs_zdcreadListPrec125v1rW = new $hs.Thunk();
    var hs_zdcreadPrec125v1rX = new $hs.Thunk();
    var hs_a725v1rY = new $hs.Thunk();
    var hs_zdcshowList125v1rZ = new $hs.Thunk();
    var hs_a825v1s0 = new $hs.Thunk();
    var hs_zdcshow125v1s1 = new $hs.Thunk();
    var hs_a925v1s2 = new $hs.Thunk();
    var hs_zdcshowsPrec125v1s3 = new $hs.Thunk();
    var hs_a1025v1s4 = new $hs.Thunk();
    var hs_zdcreadList225v1s5 = new $hs.Thunk();
    var hs_a1125v1s6 = new $hs.Thunk();
    var hs_zdcreadsPrec225v1s7 = new $hs.Thunk();
    var hs_zdcreadListPrec225v1s8 = new $hs.Thunk();
    var hs_zdcreadPrec225v1s9 = new $hs.Thunk();
    var hs_a1225v1sa = new $hs.Thunk();
    var hs_zdcshowList225v1sb = new $hs.Thunk();
    var hs_a1325v1sc = new $hs.Thunk();
    var hs_zdcshow225v1sd = new $hs.Thunk();
    var hs_a1425v1se = new $hs.Thunk();
    var hs_zdcshowsPrec225v1sf = new $hs.Thunk();
    var hs_a1525v1sg = new $hs.Thunk();
    var hs_zdcreadList325v1sh = new $hs.Thunk();
    var hs_a1625v1si = new $hs.Thunk();
    var hs_zdcreadsPrec325v1sj = new $hs.Thunk();
    var hs_zdcreadListPrec325v1sk = new $hs.Thunk();
    var hs_zdcreadPrec325v1sl = new $hs.Thunk();
    var hs_a1725v1sm = new $hs.Thunk();
    var hs_zdcshowList325v1sn = new $hs.Thunk();
    var hs_a1825v1so = new $hs.Thunk();
    var hs_zdcshow325v1sp = new $hs.Thunk();
    var hs_a1925v1sq = new $hs.Thunk();
    var hs_zdcshowsPrec325v1sr = new $hs.Thunk();
    var hs_a2025v1ss = new $hs.Thunk();
    var hs_zdcreadList425v1st = new $hs.Thunk();
    var hs_a2125v1su = new $hs.Thunk();
    var hs_zdcreadsPrec425v1sv = new $hs.Thunk();
    var hs_zdcreadListPrec425v1sw = new $hs.Thunk();
    var hs_zdcreadPrec425v1sx = new $hs.Thunk();
    var hs_a2225v1sy = new $hs.Thunk();
    var hs_zdcshowList425v1sz = new $hs.Thunk();
    var hs_a2325v1sA = new $hs.Thunk();
    var hs_zdcshow425v1sB = new $hs.Thunk();
    var hs_a2425v1sC = new $hs.Thunk();
    var hs_zdcshowsPrec425v1sD = new $hs.Thunk();
    var hs_a2525v1sE = new $hs.Thunk();
    var hs_zdcreadList525v1sF = new $hs.Thunk();
    var hs_a2625v1sG = new $hs.Thunk();
    var hs_zdcreadsPrec525v1sH = new $hs.Thunk();
    var hs_zdcreadListPrec525v1sI = new $hs.Thunk();
    var hs_zdcreadPrec525v1sJ = new $hs.Thunk();
    var hs_a2725v1sK = new $hs.Thunk();
    var hs_zdcshowList525v1sL = new $hs.Thunk();
    var hs_a2825v1sM = new $hs.Thunk();
    var hs_zdcshow525v1sN = new $hs.Thunk();
    var hs_a2925v1sO = new $hs.Thunk();
    var hs_zdcshowsPrec525v1sP = new $hs.Thunk();
    var hs_a3025v1sQ = new $hs.Thunk();
    var hs_zdcreadList625v1sR = new $hs.Thunk();
    var hs_a3125v1sS = new $hs.Thunk();
    var hs_zdcreadsPrec625v1sT = new $hs.Thunk();
    var hs_zdcreadListPrec625v1sU = new $hs.Thunk();
    var hs_zdcreadPrec625v1sV = new $hs.Thunk();
    var hs_a3225v1sW = new $hs.Thunk();
    var hs_zdcshowList625v1sX = new $hs.Thunk();
    var hs_a3325v1sY = new $hs.Thunk();
    var hs_zdcshow625v1sZ = new $hs.Thunk();
    var hs_a3425v1t0 = new $hs.Thunk();
    var hs_zdcshowsPrec625v1t1 = new $hs.Thunk();
    var hs_a3525v1t2 = new $hs.Thunk();
    var hs_zdcreadList725v1t3 = new $hs.Thunk();
    var hs_a3625v1t4 = new $hs.Thunk();
    var hs_zdcreadsPrec725v1t5 = new $hs.Thunk();
    var hs_zdcreadListPrec725v1t6 = new $hs.Thunk();
    var hs_zdcreadPrec725v1t7 = new $hs.Thunk();
    var hs_a3725v1t8 = new $hs.Thunk();
    var hs_zdcshowList725v1t9 = new $hs.Thunk();
    var hs_a3825v1ta = new $hs.Thunk();
    var hs_zdcshow725v1tb = new $hs.Thunk();
    var hs_a3925v1tc = new $hs.Thunk();
    var hs_zdcshowsPrec725v1td = new $hs.Thunk();
    var hs_a4025v1te = new $hs.Thunk();
    var hs_zdcreadList825v1tf = new $hs.Thunk();
    var hs_a4125v1tg = new $hs.Thunk();
    var hs_zdcreadsPrec825v1th = new $hs.Thunk();
    var hs_zdcreadListPrec825v1ti = new $hs.Thunk();
    var hs_zdcreadPrec825v1tj = new $hs.Thunk();
    var hs_a4225v1tk = new $hs.Thunk();
    var hs_zdcshowList825v1tl = new $hs.Thunk();
    var hs_a4325v1tm = new $hs.Thunk();
    var hs_zdcshow825v1tn = new $hs.Thunk();
    var hs_a4425v1to = new $hs.Thunk();
    var hs_zdcshowsPrec825v1tp = new $hs.Thunk();
    var hs_a4525v1tq = new $hs.Thunk();
    var hs_zdcreadList925v1tr = new $hs.Thunk();
    var hs_a4625v1ts = new $hs.Thunk();
    var hs_zdcreadsPrec925v1tt = new $hs.Thunk();
    var hs_zdcreadListPrec925v1tu = new $hs.Thunk();
    var hs_zdcreadPrec925v1tv = new $hs.Thunk();
    var hs_a4725v1tw = new $hs.Thunk();
    var hs_zdcshowList925v1tx = new $hs.Thunk();
    var hs_a4825v1ty = new $hs.Thunk();
    var hs_zdcshow925v1tz = new $hs.Thunk();
    var hs_a4925v1tA = new $hs.Thunk();
    var hs_zdcshowsPrec925v1tB = new $hs.Thunk();
    var hs_a5025v1tC = new $hs.Thunk();
    var hs_zdcreadList1025v1tD = new $hs.Thunk();
    var hs_a5125v1tE = new $hs.Thunk();
    var hs_zdcreadsPrec1025v1tF = new $hs.Thunk();
    var hs_zdcreadListPrec1025v1tG = new $hs.Thunk();
    var hs_zdcreadPrec1025v1tH = new $hs.Thunk();
    var hs_a5225v1tI = new $hs.Thunk();
    var hs_zdcshowList1025v1tJ = new $hs.Thunk();
    var hs_a5325v1tK = new $hs.Thunk();
    var hs_zdcshow1025v1tL = new $hs.Thunk();
    var hs_a5425v1tM = new $hs.Thunk();
    var hs_zdcshowsPrec1025v1tN = new $hs.Thunk();
    var hs_a5525v1tO = new $hs.Thunk();
    var hs_zdcreadList1125v1tP = new $hs.Thunk();
    var hs_a5625v1tQ = new $hs.Thunk();
    var hs_zdcreadsPrec1125v1tR = new $hs.Thunk();
    var hs_zdcreadListPrec1125v1tS = new $hs.Thunk();
    var hs_zdcreadPrec1125v1tT = new $hs.Thunk();
    var hs_a5725v1tU = new $hs.Thunk();
    var hs_zdcshowList1125v1tV = new $hs.Thunk();
    var hs_a5825v1tW = new $hs.Thunk();
    var hs_zdcshow1125v1tX = new $hs.Thunk();
    var hs_a5925v1tY = new $hs.Thunk();
    var hs_zdcshowsPrec1125v1tZ = new $hs.Thunk();
    var hs_a6025v1u0 = new $hs.Thunk();
    var hs_zdcreadList1225v1u1 = new $hs.Thunk();
    var hs_a6125v1u2 = new $hs.Thunk();
    var hs_zdcreadsPrec1225v1u3 = new $hs.Thunk();
    var hs_zdcreadListPrec1225v1u4 = new $hs.Thunk();
    var hs_zdcreadPrec1225v1u5 = new $hs.Thunk();
    var hs_a6225v1u6 = new $hs.Thunk();
    var hs_zdcshowList1225v1u7 = new $hs.Thunk();
    var hs_a6325v1u8 = new $hs.Thunk();
    var hs_zdcshow1225v1u9 = new $hs.Thunk();
    var hs_a6425v1ua = new $hs.Thunk();
    var hs_zdcshowsPrec1225v1ub = new $hs.Thunk();
    var hs_a6525v1uc = new $hs.Thunk();
    var hs_zdcreadList1325v1ud = new $hs.Thunk();
    var hs_a6625v1ue = new $hs.Thunk();
    var hs_zdcreadsPrec1325v1uf = new $hs.Thunk();
    var hs_zdcreadListPrec1325v1ug = new $hs.Thunk();
    var hs_zdcreadPrec1325v1uh = new $hs.Thunk();
    var hs_a6725v1ui = new $hs.Thunk();
    var hs_zdcshowList1325v1uj = new $hs.Thunk();
    var hs_a6825v1uk = new $hs.Thunk();
    var hs_zdcshow1325v1ul = new $hs.Thunk();
    var hs_a6925v1um = new $hs.Thunk();
    var hs_zdcshowsPrec1325v1un = new $hs.Thunk();
    var hs_a7025v1uo = new $hs.Thunk();
    var hs_zdczizazi25v1up = new $hs.Thunk();
    var hs_a7125v1uq = new $hs.Thunk();
    var hs_zdczizbzi25v1ur = new $hs.Thunk();
    var hs_a7225v1us = new $hs.Thunk();
    var hs_zdcxor25v1ut = new $hs.Thunk();
    var hs_a7325v1uu = new $hs.Thunk();
    var hs_zdccomplement25v1uv = new $hs.Thunk();
    var hs_a7425v1uw = new $hs.Thunk();
    var hs_zdcshift25v1ux = new $hs.Thunk();
    var hs_a7525v1uy = new $hs.Thunk();
    var hs_zdcrotate25v1uz = new $hs.Thunk();
    var hs_a7625v1uA = new $hs.Thunk();
    var hs_zdcbit25v1uB = new $hs.Thunk();
    var hs_a7725v1uC = new $hs.Thunk();
    var hs_zdcsetBit25v1uD = new $hs.Thunk();
    var hs_a7825v1uE = new $hs.Thunk();
    var hs_zdcclearBit25v1uF = new $hs.Thunk();
    var hs_a7925v1uG = new $hs.Thunk();
    var hs_zdccomplementBit25v1uH = new $hs.Thunk();
    var hs_a8025v1uI = new $hs.Thunk();
    var hs_zdctestBit25v1uJ = new $hs.Thunk();
    var hs_a8125v1uK = new $hs.Thunk();
    var hs_zdcbitSizze25v1uL = new $hs.Thunk();
    var hs_a8225v1uM = new $hs.Thunk();
    var hs_zdcisSigned25v1uN = new $hs.Thunk();
    var hs_a8325v1uO = new $hs.Thunk();
    var hs_zdcshiftL25v1uP = new $hs.Thunk();
    var hs_a8425v1uQ = new $hs.Thunk();
    var hs_zdcshiftR25v1uR = new $hs.Thunk();
    var hs_a8525v1uS = new $hs.Thunk();
    var hs_zdcrotateL25v1uT = new $hs.Thunk();
    var hs_a8625v1uU = new $hs.Thunk();
    var hs_zdcrotateR25v1uV = new $hs.Thunk();
    var hs_a8725v1uW = new $hs.Thunk();
    var hs_zdcquot25v1uX = new $hs.Thunk();
    var hs_a8825v1uY = new $hs.Thunk();
    var hs_zdcrem25v1uZ = new $hs.Thunk();
    var hs_a8925v1v0 = new $hs.Thunk();
    var hs_zdcdiv25v1v1 = new $hs.Thunk();
    var hs_a9025v1v2 = new $hs.Thunk();
    var hs_zdcmod25v1v3 = new $hs.Thunk();
    var hs_a9125v1v4 = new $hs.Thunk();
    var hs_zdcquotRem25v1v5 = new $hs.Thunk();
    var hs_a9225v1v6 = new $hs.Thunk();
    var hs_zdcdivMod25v1v7 = new $hs.Thunk();
    var hs_a9325v1v8 = new $hs.Thunk();
    var hs_zdctoInteger25v1v9 = new $hs.Thunk();
    var hs_a9425v1va = new $hs.Thunk();
    var hs_zdcminBound25v1vb = new $hs.Thunk();
    var hs_a9525v1vc = new $hs.Thunk();
    var hs_zdcmaxBound25v1vd = new $hs.Thunk();
    var hs_a9625v1ve = new $hs.Thunk();
    var hs_zdctoRational25v1vf = new $hs.Thunk();
    var hs_a9725v1vg = new $hs.Thunk();
    var hs_zdcsizzeOf25v1vh = new $hs.Thunk();
    var hs_a9825v1vi = new $hs.Thunk();
    var hs_zdcalignment25v1vj = new $hs.Thunk();
    var hs_a9925v1vk = new $hs.Thunk();
    var hs_zdcpeekElemOff25v1vl = new $hs.Thunk();
    var hs_a10025v1vm = new $hs.Thunk();
    var hs_zdcpokeElemOff25v1vn = new $hs.Thunk();
    var hs_a10125v1vo = new $hs.Thunk();
    var hs_zdcpeekByteOff25v1vp = new $hs.Thunk();
    var hs_a10225v1vq = new $hs.Thunk();
    var hs_zdcpokeByteOff25v1vr = new $hs.Thunk();
    var hs_a10325v1vs = new $hs.Thunk();
    var hs_zdcpeek25v1vt = new $hs.Thunk();
    var hs_a10425v1vu = new $hs.Thunk();
    var hs_zdcpoke25v1vv = new $hs.Thunk();
    var hs_a10525v1vw = new $hs.Thunk();
    var hs_zdcsucc25v1vx = new $hs.Thunk();
    var hs_a10625v1vy = new $hs.Thunk();
    var hs_zdcpred25v1vz = new $hs.Thunk();
    var hs_a10725v1vA = new $hs.Thunk();
    var hs_zdctoEnum25v1vB = new $hs.Thunk();
    var hs_a10825v1vC = new $hs.Thunk();
    var hs_zdcfromEnum25v1vD = new $hs.Thunk();
    var hs_a10925v1vE = new $hs.Thunk();
    var hs_zdcenumFrom25v1vF = new $hs.Thunk();
    var hs_a11025v1vG = new $hs.Thunk();
    var hs_zdcenumFromThen25v1vH = new $hs.Thunk();
    var hs_a11125v1vI = new $hs.Thunk();
    var hs_zdcenumFromTo25v1vJ = new $hs.Thunk();
    var hs_a11225v1vK = new $hs.Thunk();
    var hs_zdcenumFromThenTo25v1vL = new $hs.Thunk();
    var hs_a11325v1vM = new $hs.Thunk();
    var hs_zdczp25v1vN = new $hs.Thunk();
    var hs_a11425v1vO = new $hs.Thunk();
    var hs_zdczt25v1vP = new $hs.Thunk();
    var hs_a11525v1vQ = new $hs.Thunk();
    var hs_zdczm25v1vR = new $hs.Thunk();
    var hs_a11625v1vS = new $hs.Thunk();
    var hs_zdcnegate25v1vT = new $hs.Thunk();
    var hs_a11725v1vU = new $hs.Thunk();
    var hs_zdcabs25v1vV = new $hs.Thunk();
    var hs_a11825v1vW = new $hs.Thunk();
    var hs_zdcsignum25v1vX = new $hs.Thunk();
    var hs_a11925v1vY = new $hs.Thunk();
    var hs_zdcfromInteger25v1vZ = new $hs.Thunk();
    var hs_a12025v1w0 = new $hs.Thunk();
    var hs_zdccompare25v1w1 = new $hs.Thunk();
    var hs_a12125v1w2 = new $hs.Thunk();
    var hs_zdczl25v1w3 = new $hs.Thunk();
    var hs_a12225v1w4 = new $hs.Thunk();
    var hs_zdczgze25v1w5 = new $hs.Thunk();
    var hs_a12325v1w6 = new $hs.Thunk();
    var hs_zdczg25v1w7 = new $hs.Thunk();
    var hs_a12425v1w8 = new $hs.Thunk();
    var hs_zdczlze25v1w9 = new $hs.Thunk();
    var hs_a12525v1wa = new $hs.Thunk();
    var hs_zdcmax25v1wb = new $hs.Thunk();
    var hs_a12625v1wc = new $hs.Thunk();
    var hs_zdcmin25v1wd = new $hs.Thunk();
    var hs_a12725v1we = new $hs.Thunk();
    var hs_zdczeze25v1wf = new $hs.Thunk();
    var hs_a12825v1wg = new $hs.Thunk();
    var hs_zdczsze25v1wh = new $hs.Thunk();
    var hs_a12925v1wi = new $hs.Thunk();
    var hs_zdczizazi125v1wj = new $hs.Thunk();
    var hs_a13025v1wk = new $hs.Thunk();
    var hs_zdczizbzi125v1wl = new $hs.Thunk();
    var hs_a13125v1wm = new $hs.Thunk();
    var hs_zdcxor125v1wn = new $hs.Thunk();
    var hs_a13225v1wo = new $hs.Thunk();
    var hs_zdccomplement125v1wp = new $hs.Thunk();
    var hs_a13325v1wq = new $hs.Thunk();
    var hs_zdcshift125v1wr = new $hs.Thunk();
    var hs_a13425v1ws = new $hs.Thunk();
    var hs_zdcrotate125v1wt = new $hs.Thunk();
    var hs_a13525v1wu = new $hs.Thunk();
    var hs_zdcbit125v1wv = new $hs.Thunk();
    var hs_a13625v1ww = new $hs.Thunk();
    var hs_zdcsetBit125v1wx = new $hs.Thunk();
    var hs_a13725v1wy = new $hs.Thunk();
    var hs_zdcclearBit125v1wz = new $hs.Thunk();
    var hs_a13825v1wA = new $hs.Thunk();
    var hs_zdccomplementBit125v1wB = new $hs.Thunk();
    var hs_a13925v1wC = new $hs.Thunk();
    var hs_zdctestBit125v1wD = new $hs.Thunk();
    var hs_a14025v1wE = new $hs.Thunk();
    var hs_zdcbitSizze125v1wF = new $hs.Thunk();
    var hs_a14125v1wG = new $hs.Thunk();
    var hs_zdcisSigned125v1wH = new $hs.Thunk();
    var hs_a14225v1wI = new $hs.Thunk();
    var hs_zdcshiftL125v1wJ = new $hs.Thunk();
    var hs_a14325v1wK = new $hs.Thunk();
    var hs_zdcshiftR125v1wL = new $hs.Thunk();
    var hs_a14425v1wM = new $hs.Thunk();
    var hs_zdcrotateL125v1wN = new $hs.Thunk();
    var hs_a14525v1wO = new $hs.Thunk();
    var hs_zdcrotateR125v1wP = new $hs.Thunk();
    var hs_a14625v1wQ = new $hs.Thunk();
    var hs_zdcquot125v1wR = new $hs.Thunk();
    var hs_a14725v1wS = new $hs.Thunk();
    var hs_zdcrem125v1wT = new $hs.Thunk();
    var hs_a14825v1wU = new $hs.Thunk();
    var hs_zdcdiv125v1wV = new $hs.Thunk();
    var hs_a14925v1wW = new $hs.Thunk();
    var hs_zdcmod125v1wX = new $hs.Thunk();
    var hs_a15025v1wY = new $hs.Thunk();
    var hs_zdcquotRem125v1wZ = new $hs.Thunk();
    var hs_a15125v1x0 = new $hs.Thunk();
    var hs_zdcdivMod125v1x1 = new $hs.Thunk();
    var hs_a15225v1x2 = new $hs.Thunk();
    var hs_zdctoInteger125v1x3 = new $hs.Thunk();
    var hs_a15325v1x4 = new $hs.Thunk();
    var hs_zdcminBound125v1x5 = new $hs.Thunk();
    var hs_a15425v1x6 = new $hs.Thunk();
    var hs_zdcmaxBound125v1x7 = new $hs.Thunk();
    var hs_a15525v1x8 = new $hs.Thunk();
    var hs_zdctoRational125v1x9 = new $hs.Thunk();
    var hs_a15625v1xa = new $hs.Thunk();
    var hs_zdcsizzeOf125v1xb = new $hs.Thunk();
    var hs_a15725v1xc = new $hs.Thunk();
    var hs_zdcalignment125v1xd = new $hs.Thunk();
    var hs_a15825v1xe = new $hs.Thunk();
    var hs_zdcpeekElemOff125v1xf = new $hs.Thunk();
    var hs_a15925v1xg = new $hs.Thunk();
    var hs_zdcpokeElemOff125v1xh = new $hs.Thunk();
    var hs_a16025v1xi = new $hs.Thunk();
    var hs_zdcpeekByteOff125v1xj = new $hs.Thunk();
    var hs_a16125v1xk = new $hs.Thunk();
    var hs_zdcpokeByteOff125v1xl = new $hs.Thunk();
    var hs_a16225v1xm = new $hs.Thunk();
    var hs_zdcpeek125v1xn = new $hs.Thunk();
    var hs_a16325v1xo = new $hs.Thunk();
    var hs_zdcpoke125v1xp = new $hs.Thunk();
    var hs_a16425v1xq = new $hs.Thunk();
    var hs_zdcsucc125v1xr = new $hs.Thunk();
    var hs_a16525v1xs = new $hs.Thunk();
    var hs_zdcpred125v1xt = new $hs.Thunk();
    var hs_a16625v1xu = new $hs.Thunk();
    var hs_zdctoEnum125v1xv = new $hs.Thunk();
    var hs_a16725v1xw = new $hs.Thunk();
    var hs_zdcfromEnum125v1xx = new $hs.Thunk();
    var hs_a16825v1xy = new $hs.Thunk();
    var hs_zdcenumFrom125v1xz = new $hs.Thunk();
    var hs_a16925v1xA = new $hs.Thunk();
    var hs_zdcenumFromThen125v1xB = new $hs.Thunk();
    var hs_a17025v1xC = new $hs.Thunk();
    var hs_zdcenumFromTo125v1xD = new $hs.Thunk();
    var hs_a17125v1xE = new $hs.Thunk();
    var hs_zdcenumFromThenTo125v1xF = new $hs.Thunk();
    var hs_a17225v1xG = new $hs.Thunk();
    var hs_zdczp125v1xH = new $hs.Thunk();
    var hs_a17325v1xI = new $hs.Thunk();
    var hs_zdczt125v1xJ = new $hs.Thunk();
    var hs_a17425v1xK = new $hs.Thunk();
    var hs_zdczm125v1xL = new $hs.Thunk();
    var hs_a17525v1xM = new $hs.Thunk();
    var hs_zdcnegate125v1xN = new $hs.Thunk();
    var hs_a17625v1xO = new $hs.Thunk();
    var hs_zdcabs125v1xP = new $hs.Thunk();
    var hs_a17725v1xQ = new $hs.Thunk();
    var hs_zdcsignum125v1xR = new $hs.Thunk();
    var hs_a17825v1xS = new $hs.Thunk();
    var hs_zdcfromInteger125v1xT = new $hs.Thunk();
    var hs_a17925v1xU = new $hs.Thunk();
    var hs_zdccompare125v1xV = new $hs.Thunk();
    var hs_a18025v1xW = new $hs.Thunk();
    var hs_zdczl125v1xX = new $hs.Thunk();
    var hs_a18125v1xY = new $hs.Thunk();
    var hs_zdczgze125v1xZ = new $hs.Thunk();
    var hs_a18225v1y0 = new $hs.Thunk();
    var hs_zdczg125v1y1 = new $hs.Thunk();
    var hs_a18325v1y2 = new $hs.Thunk();
    var hs_zdczlze125v1y3 = new $hs.Thunk();
    var hs_a18425v1y4 = new $hs.Thunk();
    var hs_zdcmax125v1y5 = new $hs.Thunk();
    var hs_a18525v1y6 = new $hs.Thunk();
    var hs_zdcmin125v1y7 = new $hs.Thunk();
    var hs_a18625v1y8 = new $hs.Thunk();
    var hs_zdczeze125v1y9 = new $hs.Thunk();
    var hs_a18725v1ya = new $hs.Thunk();
    var hs_zdczsze125v1yb = new $hs.Thunk();
    var hs_a18825v1yc = new $hs.Thunk();
    var hs_zdczizazi225v1yd = new $hs.Thunk();
    var hs_a18925v1ye = new $hs.Thunk();
    var hs_zdczizbzi225v1yf = new $hs.Thunk();
    var hs_a19025v1yg = new $hs.Thunk();
    var hs_zdcxor225v1yh = new $hs.Thunk();
    var hs_a19125v1yi = new $hs.Thunk();
    var hs_zdccomplement225v1yj = new $hs.Thunk();
    var hs_a19225v1yk = new $hs.Thunk();
    var hs_zdcshift225v1yl = new $hs.Thunk();
    var hs_a19325v1ym = new $hs.Thunk();
    var hs_zdcrotate225v1yn = new $hs.Thunk();
    var hs_a19425v1yo = new $hs.Thunk();
    var hs_zdcbit225v1yp = new $hs.Thunk();
    var hs_a19525v1yq = new $hs.Thunk();
    var hs_zdcsetBit225v1yr = new $hs.Thunk();
    var hs_a19625v1ys = new $hs.Thunk();
    var hs_zdcclearBit225v1yt = new $hs.Thunk();
    var hs_a19725v1yu = new $hs.Thunk();
    var hs_zdccomplementBit225v1yv = new $hs.Thunk();
    var hs_a19825v1yw = new $hs.Thunk();
    var hs_zdctestBit225v1yx = new $hs.Thunk();
    var hs_a19925v1yy = new $hs.Thunk();
    var hs_zdcbitSizze225v1yz = new $hs.Thunk();
    var hs_a20025v1yA = new $hs.Thunk();
    var hs_zdcisSigned225v1yB = new $hs.Thunk();
    var hs_a20125v1yC = new $hs.Thunk();
    var hs_zdcshiftL225v1yD = new $hs.Thunk();
    var hs_a20225v1yE = new $hs.Thunk();
    var hs_zdcshiftR225v1yF = new $hs.Thunk();
    var hs_a20325v1yG = new $hs.Thunk();
    var hs_zdcrotateL225v1yH = new $hs.Thunk();
    var hs_a20425v1yI = new $hs.Thunk();
    var hs_zdcrotateR225v1yJ = new $hs.Thunk();
    var hs_a20525v1yK = new $hs.Thunk();
    var hs_zdcquot225v1yL = new $hs.Thunk();
    var hs_a20625v1yM = new $hs.Thunk();
    var hs_zdcrem225v1yN = new $hs.Thunk();
    var hs_a20725v1yO = new $hs.Thunk();
    var hs_zdcdiv225v1yP = new $hs.Thunk();
    var hs_a20825v1yQ = new $hs.Thunk();
    var hs_zdcmod225v1yR = new $hs.Thunk();
    var hs_a20925v1yS = new $hs.Thunk();
    var hs_zdcquotRem225v1yT = new $hs.Thunk();
    var hs_a21025v1yU = new $hs.Thunk();
    var hs_zdcdivMod225v1yV = new $hs.Thunk();
    var hs_a21125v1yW = new $hs.Thunk();
    var hs_zdctoInteger225v1yX = new $hs.Thunk();
    var hs_a21225v1yY = new $hs.Thunk();
    var hs_zdcminBound225v1yZ = new $hs.Thunk();
    var hs_a21325v1z0 = new $hs.Thunk();
    var hs_zdcmaxBound225v1z1 = new $hs.Thunk();
    var hs_a21425v1z2 = new $hs.Thunk();
    var hs_zdctoRational225v1z3 = new $hs.Thunk();
    var hs_a21525v1z4 = new $hs.Thunk();
    var hs_zdcsizzeOf225v1z5 = new $hs.Thunk();
    var hs_a21625v1z6 = new $hs.Thunk();
    var hs_zdcalignment225v1z7 = new $hs.Thunk();
    var hs_a21725v1z8 = new $hs.Thunk();
    var hs_zdcpeekElemOff225v1z9 = new $hs.Thunk();
    var hs_a21825v1za = new $hs.Thunk();
    var hs_zdcpokeElemOff225v1zb = new $hs.Thunk();
    var hs_a21925v1zc = new $hs.Thunk();
    var hs_zdcpeekByteOff225v1zd = new $hs.Thunk();
    var hs_a22025v1ze = new $hs.Thunk();
    var hs_zdcpokeByteOff225v1zf = new $hs.Thunk();
    var hs_a22125v1zg = new $hs.Thunk();
    var hs_zdcpeek225v1zh = new $hs.Thunk();
    var hs_a22225v1zi = new $hs.Thunk();
    var hs_zdcpoke225v1zj = new $hs.Thunk();
    var hs_a22325v1zk = new $hs.Thunk();
    var hs_zdcsucc225v1zl = new $hs.Thunk();
    var hs_a22425v1zm = new $hs.Thunk();
    var hs_zdcpred225v1zn = new $hs.Thunk();
    var hs_a22525v1zo = new $hs.Thunk();
    var hs_zdctoEnum225v1zp = new $hs.Thunk();
    var hs_a22625v1zq = new $hs.Thunk();
    var hs_zdcfromEnum225v1zr = new $hs.Thunk();
    var hs_a22725v1zs = new $hs.Thunk();
    var hs_zdcenumFrom225v1zt = new $hs.Thunk();
    var hs_a22825v1zu = new $hs.Thunk();
    var hs_zdcenumFromThen225v1zv = new $hs.Thunk();
    var hs_a22925v1zw = new $hs.Thunk();
    var hs_zdcenumFromTo225v1zx = new $hs.Thunk();
    var hs_a23025v1zy = new $hs.Thunk();
    var hs_zdcenumFromThenTo225v1zz = new $hs.Thunk();
    var hs_a23125v1zA = new $hs.Thunk();
    var hs_zdczp225v1zB = new $hs.Thunk();
    var hs_a23225v1zC = new $hs.Thunk();
    var hs_zdczt225v1zD = new $hs.Thunk();
    var hs_a23325v1zE = new $hs.Thunk();
    var hs_zdczm225v1zF = new $hs.Thunk();
    var hs_a23425v1zG = new $hs.Thunk();
    var hs_zdcnegate225v1zH = new $hs.Thunk();
    var hs_a23525v1zI = new $hs.Thunk();
    var hs_zdcabs225v1zJ = new $hs.Thunk();
    var hs_a23625v1zK = new $hs.Thunk();
    var hs_zdcsignum225v1zL = new $hs.Thunk();
    var hs_a23725v1zM = new $hs.Thunk();
    var hs_zdcfromInteger225v1zN = new $hs.Thunk();
    var hs_a23825v1zO = new $hs.Thunk();
    var hs_zdccompare225v1zP = new $hs.Thunk();
    var hs_a23925v1zQ = new $hs.Thunk();
    var hs_zdczl225v1zR = new $hs.Thunk();
    var hs_a24025v1zS = new $hs.Thunk();
    var hs_zdczgze225v1zT = new $hs.Thunk();
    var hs_a24125v1zU = new $hs.Thunk();
    var hs_zdczg225v1zV = new $hs.Thunk();
    var hs_a24225v1zW = new $hs.Thunk();
    var hs_zdczlze225v1zX = new $hs.Thunk();
    var hs_a24325v1zY = new $hs.Thunk();
    var hs_zdcmax225v1zZ = new $hs.Thunk();
    var hs_a24425v1A0 = new $hs.Thunk();
    var hs_zdcmin225v1A1 = new $hs.Thunk();
    var hs_a24525v1A2 = new $hs.Thunk();
    var hs_zdczeze225v1A3 = new $hs.Thunk();
    var hs_a24625v1A4 = new $hs.Thunk();
    var hs_zdczsze225v1A5 = new $hs.Thunk();
    var hs_a24725v1A6 = new $hs.Thunk();
    var hs_zdctoRational325v1A7 = new $hs.Thunk();
    var hs_a24825v1A8 = new $hs.Thunk();
    var hs_zdcsizzeOf325v1A9 = new $hs.Thunk();
    var hs_a24925v1Aa = new $hs.Thunk();
    var hs_zdcalignment325v1Ab = new $hs.Thunk();
    var hs_a25025v1Ac = new $hs.Thunk();
    var hs_zdcpeekElemOff325v1Ad = new $hs.Thunk();
    var hs_a25125v1Ae = new $hs.Thunk();
    var hs_zdcpokeElemOff325v1Af = new $hs.Thunk();
    var hs_a25225v1Ag = new $hs.Thunk();
    var hs_zdcpeekByteOff325v1Ah = new $hs.Thunk();
    var hs_a25325v1Ai = new $hs.Thunk();
    var hs_zdcpokeByteOff325v1Aj = new $hs.Thunk();
    var hs_a25425v1Ak = new $hs.Thunk();
    var hs_zdcpeek325v1Al = new $hs.Thunk();
    var hs_a25525v1Am = new $hs.Thunk();
    var hs_zdcpoke325v1An = new $hs.Thunk();
    var hs_a25625v1Ao = new $hs.Thunk();
    var hs_zdcsucc325v1Ap = new $hs.Thunk();
    var hs_a25725v1Aq = new $hs.Thunk();
    var hs_zdcpred325v1Ar = new $hs.Thunk();
    var hs_a25825v1As = new $hs.Thunk();
    var hs_zdctoEnum325v1At = new $hs.Thunk();
    var hs_a25925v1Au = new $hs.Thunk();
    var hs_zdcfromEnum325v1Av = new $hs.Thunk();
    var hs_a26025v1Aw = new $hs.Thunk();
    var hs_zdcenumFrom325v1Ax = new $hs.Thunk();
    var hs_a26125v1Ay = new $hs.Thunk();
    var hs_zdcenumFromThen325v1Az = new $hs.Thunk();
    var hs_a26225v1AA = new $hs.Thunk();
    var hs_zdcenumFromTo325v1AB = new $hs.Thunk();
    var hs_a26325v1AC = new $hs.Thunk();
    var hs_zdcenumFromThenTo325v1AD = new $hs.Thunk();
    var hs_a26425v1AE = new $hs.Thunk();
    var hs_zdczp325v1AF = new $hs.Thunk();
    var hs_a26525v1AG = new $hs.Thunk();
    var hs_zdczt325v1AH = new $hs.Thunk();
    var hs_a26625v1AI = new $hs.Thunk();
    var hs_zdczm325v1AJ = new $hs.Thunk();
    var hs_a26725v1AK = new $hs.Thunk();
    var hs_zdcnegate325v1AL = new $hs.Thunk();
    var hs_a26825v1AM = new $hs.Thunk();
    var hs_zdcabs325v1AN = new $hs.Thunk();
    var hs_a26925v1AO = new $hs.Thunk();
    var hs_zdcsignum325v1AP = new $hs.Thunk();
    var hs_a27025v1AQ = new $hs.Thunk();
    var hs_zdcfromInteger325v1AR = new $hs.Thunk();
    var hs_a27125v1AS = new $hs.Thunk();
    var hs_zdccompare325v1AT = new $hs.Thunk();
    var hs_a27225v1AU = new $hs.Thunk();
    var hs_zdczl325v1AV = new $hs.Thunk();
    var hs_a27325v1AW = new $hs.Thunk();
    var hs_zdczgze325v1AX = new $hs.Thunk();
    var hs_a27425v1AY = new $hs.Thunk();
    var hs_zdczg325v1AZ = new $hs.Thunk();
    var hs_a27525v1B0 = new $hs.Thunk();
    var hs_zdczlze325v1B1 = new $hs.Thunk();
    var hs_a27625v1B2 = new $hs.Thunk();
    var hs_zdcmax325v1B3 = new $hs.Thunk();
    var hs_a27725v1B4 = new $hs.Thunk();
    var hs_zdcmin325v1B5 = new $hs.Thunk();
    var hs_a27825v1B6 = new $hs.Thunk();
    var hs_zdczeze325v1B7 = new $hs.Thunk();
    var hs_a27925v1B8 = new $hs.Thunk();
    var hs_zdczsze325v1B9 = new $hs.Thunk();
    var hs_a28025v1Ba = new $hs.Thunk();
    var hs_zdctoRational425v1Bb = new $hs.Thunk();
    var hs_a28125v1Bc = new $hs.Thunk();
    var hs_zdcsizzeOf425v1Bd = new $hs.Thunk();
    var hs_a28225v1Be = new $hs.Thunk();
    var hs_zdcalignment425v1Bf = new $hs.Thunk();
    var hs_a28325v1Bg = new $hs.Thunk();
    var hs_zdcpeekElemOff425v1Bh = new $hs.Thunk();
    var hs_a28425v1Bi = new $hs.Thunk();
    var hs_zdcpokeElemOff425v1Bj = new $hs.Thunk();
    var hs_a28525v1Bk = new $hs.Thunk();
    var hs_zdcpeekByteOff425v1Bl = new $hs.Thunk();
    var hs_a28625v1Bm = new $hs.Thunk();
    var hs_zdcpokeByteOff425v1Bn = new $hs.Thunk();
    var hs_a28725v1Bo = new $hs.Thunk();
    var hs_zdcpeek425v1Bp = new $hs.Thunk();
    var hs_a28825v1Bq = new $hs.Thunk();
    var hs_zdcpoke425v1Br = new $hs.Thunk();
    var hs_a28925v1Bs = new $hs.Thunk();
    var hs_zdcsucc425v1Bt = new $hs.Thunk();
    var hs_a29025v1Bu = new $hs.Thunk();
    var hs_zdcpred425v1Bv = new $hs.Thunk();
    var hs_a29125v1Bw = new $hs.Thunk();
    var hs_zdctoEnum425v1Bx = new $hs.Thunk();
    var hs_a29225v1By = new $hs.Thunk();
    var hs_zdcfromEnum425v1Bz = new $hs.Thunk();
    var hs_a29325v1BA = new $hs.Thunk();
    var hs_zdcenumFrom425v1BB = new $hs.Thunk();
    var hs_a29425v1BC = new $hs.Thunk();
    var hs_zdcenumFromThen425v1BD = new $hs.Thunk();
    var hs_a29525v1BE = new $hs.Thunk();
    var hs_zdcenumFromTo425v1BF = new $hs.Thunk();
    var hs_a29625v1BG = new $hs.Thunk();
    var hs_zdcenumFromThenTo425v1BH = new $hs.Thunk();
    var hs_a29725v1BI = new $hs.Thunk();
    var hs_zdczp425v1BJ = new $hs.Thunk();
    var hs_a29825v1BK = new $hs.Thunk();
    var hs_zdczt425v1BL = new $hs.Thunk();
    var hs_a29925v1BM = new $hs.Thunk();
    var hs_zdczm425v1BN = new $hs.Thunk();
    var hs_a30025v1BO = new $hs.Thunk();
    var hs_zdcnegate425v1BP = new $hs.Thunk();
    var hs_a30125v1BQ = new $hs.Thunk();
    var hs_zdcabs425v1BR = new $hs.Thunk();
    var hs_a30225v1BS = new $hs.Thunk();
    var hs_zdcsignum425v1BT = new $hs.Thunk();
    var hs_a30325v1BU = new $hs.Thunk();
    var hs_zdcfromInteger425v1BV = new $hs.Thunk();
    var hs_a30425v1BW = new $hs.Thunk();
    var hs_zdccompare425v1BX = new $hs.Thunk();
    var hs_a30525v1BY = new $hs.Thunk();
    var hs_zdczl425v1BZ = new $hs.Thunk();
    var hs_a30625v1C0 = new $hs.Thunk();
    var hs_zdczgze425v1C1 = new $hs.Thunk();
    var hs_a30725v1C2 = new $hs.Thunk();
    var hs_zdczg425v1C3 = new $hs.Thunk();
    var hs_a30825v1C4 = new $hs.Thunk();
    var hs_zdczlze425v1C5 = new $hs.Thunk();
    var hs_a30925v1C6 = new $hs.Thunk();
    var hs_zdcmax425v1C7 = new $hs.Thunk();
    var hs_a31025v1C8 = new $hs.Thunk();
    var hs_zdcmin425v1C9 = new $hs.Thunk();
    var hs_a31125v1Ca = new $hs.Thunk();
    var hs_zdczeze425v1Cb = new $hs.Thunk();
    var hs_a31225v1Cc = new $hs.Thunk();
    var hs_zdczsze425v1Cd = new $hs.Thunk();
    var hs_a31325v1Ce = new $hs.Thunk();
    var hs_zdczizazi325v1Cf = new $hs.Thunk();
    var hs_a31425v1Cg = new $hs.Thunk();
    var hs_zdczizbzi325v1Ch = new $hs.Thunk();
    var hs_a31525v1Ci = new $hs.Thunk();
    var hs_zdcxor325v1Cj = new $hs.Thunk();
    var hs_a31625v1Ck = new $hs.Thunk();
    var hs_zdccomplement325v1Cl = new $hs.Thunk();
    var hs_a31725v1Cm = new $hs.Thunk();
    var hs_zdcshift325v1Cn = new $hs.Thunk();
    var hs_a31825v1Co = new $hs.Thunk();
    var hs_zdcrotate325v1Cp = new $hs.Thunk();
    var hs_a31925v1Cq = new $hs.Thunk();
    var hs_zdcbit325v1Cr = new $hs.Thunk();
    var hs_a32025v1Cs = new $hs.Thunk();
    var hs_zdcsetBit325v1Ct = new $hs.Thunk();
    var hs_a32125v1Cu = new $hs.Thunk();
    var hs_zdcclearBit325v1Cv = new $hs.Thunk();
    var hs_a32225v1Cw = new $hs.Thunk();
    var hs_zdccomplementBit325v1Cx = new $hs.Thunk();
    var hs_a32325v1Cy = new $hs.Thunk();
    var hs_zdctestBit325v1Cz = new $hs.Thunk();
    var hs_a32425v1CA = new $hs.Thunk();
    var hs_zdcbitSizze325v1CB = new $hs.Thunk();
    var hs_a32525v1CC = new $hs.Thunk();
    var hs_zdcisSigned325v1CD = new $hs.Thunk();
    var hs_a32625v1CE = new $hs.Thunk();
    var hs_zdcshiftL325v1CF = new $hs.Thunk();
    var hs_a32725v1CG = new $hs.Thunk();
    var hs_zdcshiftR325v1CH = new $hs.Thunk();
    var hs_a32825v1CI = new $hs.Thunk();
    var hs_zdcrotateL325v1CJ = new $hs.Thunk();
    var hs_a32925v1CK = new $hs.Thunk();
    var hs_zdcrotateR325v1CL = new $hs.Thunk();
    var hs_a33025v1CM = new $hs.Thunk();
    var hs_zdcquot325v1CN = new $hs.Thunk();
    var hs_a33125v1CO = new $hs.Thunk();
    var hs_zdcrem325v1CP = new $hs.Thunk();
    var hs_a33225v1CQ = new $hs.Thunk();
    var hs_zdcdiv325v1CR = new $hs.Thunk();
    var hs_a33325v1CS = new $hs.Thunk();
    var hs_zdcmod325v1CT = new $hs.Thunk();
    var hs_a33425v1CU = new $hs.Thunk();
    var hs_zdcquotRem325v1CV = new $hs.Thunk();
    var hs_a33525v1CW = new $hs.Thunk();
    var hs_zdcdivMod325v1CX = new $hs.Thunk();
    var hs_a33625v1CY = new $hs.Thunk();
    var hs_zdctoInteger325v1CZ = new $hs.Thunk();
    var hs_a33725v1D0 = new $hs.Thunk();
    var hs_zdcminBound325v1D1 = new $hs.Thunk();
    var hs_a33825v1D2 = new $hs.Thunk();
    var hs_zdcmaxBound325v1D3 = new $hs.Thunk();
    var hs_a33925v1D4 = new $hs.Thunk();
    var hs_zdctoRational525v1D5 = new $hs.Thunk();
    var hs_a34025v1D6 = new $hs.Thunk();
    var hs_zdcsizzeOf525v1D7 = new $hs.Thunk();
    var hs_a34125v1D8 = new $hs.Thunk();
    var hs_zdcalignment525v1D9 = new $hs.Thunk();
    var hs_a34225v1Da = new $hs.Thunk();
    var hs_zdcpeekElemOff525v1Db = new $hs.Thunk();
    var hs_a34325v1Dc = new $hs.Thunk();
    var hs_zdcpokeElemOff525v1Dd = new $hs.Thunk();
    var hs_a34425v1De = new $hs.Thunk();
    var hs_zdcpeekByteOff525v1Df = new $hs.Thunk();
    var hs_a34525v1Dg = new $hs.Thunk();
    var hs_zdcpokeByteOff525v1Dh = new $hs.Thunk();
    var hs_a34625v1Di = new $hs.Thunk();
    var hs_zdcpeek525v1Dj = new $hs.Thunk();
    var hs_a34725v1Dk = new $hs.Thunk();
    var hs_zdcpoke525v1Dl = new $hs.Thunk();
    var hs_a34825v1Dm = new $hs.Thunk();
    var hs_zdcsucc525v1Dn = new $hs.Thunk();
    var hs_a34925v1Do = new $hs.Thunk();
    var hs_zdcpred525v1Dp = new $hs.Thunk();
    var hs_a35025v1Dq = new $hs.Thunk();
    var hs_zdctoEnum525v1Dr = new $hs.Thunk();
    var hs_a35125v1Ds = new $hs.Thunk();
    var hs_zdcfromEnum525v1Dt = new $hs.Thunk();
    var hs_a35225v1Du = new $hs.Thunk();
    var hs_zdcenumFrom525v1Dv = new $hs.Thunk();
    var hs_a35325v1Dw = new $hs.Thunk();
    var hs_zdcenumFromThen525v1Dx = new $hs.Thunk();
    var hs_a35425v1Dy = new $hs.Thunk();
    var hs_zdcenumFromTo525v1Dz = new $hs.Thunk();
    var hs_a35525v1DA = new $hs.Thunk();
    var hs_zdcenumFromThenTo525v1DB = new $hs.Thunk();
    var hs_a35625v1DC = new $hs.Thunk();
    var hs_zdczp525v1DD = new $hs.Thunk();
    var hs_a35725v1DE = new $hs.Thunk();
    var hs_zdczt525v1DF = new $hs.Thunk();
    var hs_a35825v1DG = new $hs.Thunk();
    var hs_zdczm525v1DH = new $hs.Thunk();
    var hs_a35925v1DI = new $hs.Thunk();
    var hs_zdcnegate525v1DJ = new $hs.Thunk();
    var hs_a36025v1DK = new $hs.Thunk();
    var hs_zdcabs525v1DL = new $hs.Thunk();
    var hs_a36125v1DM = new $hs.Thunk();
    var hs_zdcsignum525v1DN = new $hs.Thunk();
    var hs_a36225v1DO = new $hs.Thunk();
    var hs_zdcfromInteger525v1DP = new $hs.Thunk();
    var hs_a36325v1DQ = new $hs.Thunk();
    var hs_zdccompare525v1DR = new $hs.Thunk();
    var hs_a36425v1DS = new $hs.Thunk();
    var hs_zdczl525v1DT = new $hs.Thunk();
    var hs_a36525v1DU = new $hs.Thunk();
    var hs_zdczgze525v1DV = new $hs.Thunk();
    var hs_a36625v1DW = new $hs.Thunk();
    var hs_zdczg525v1DX = new $hs.Thunk();
    var hs_a36725v1DY = new $hs.Thunk();
    var hs_zdczlze525v1DZ = new $hs.Thunk();
    var hs_a36825v1E0 = new $hs.Thunk();
    var hs_zdcmax525v1E1 = new $hs.Thunk();
    var hs_a36925v1E2 = new $hs.Thunk();
    var hs_zdcmin525v1E3 = new $hs.Thunk();
    var hs_a37025v1E4 = new $hs.Thunk();
    var hs_zdczeze525v1E5 = new $hs.Thunk();
    var hs_a37125v1E6 = new $hs.Thunk();
    var hs_zdczsze525v1E7 = new $hs.Thunk();
    var hs_a37225v1E8 = new $hs.Thunk();
    var hs_zdczizazi425v1E9 = new $hs.Thunk();
    var hs_a37325v1Ea = new $hs.Thunk();
    var hs_zdczizbzi425v1Eb = new $hs.Thunk();
    var hs_a37425v1Ec = new $hs.Thunk();
    var hs_zdcxor425v1Ed = new $hs.Thunk();
    var hs_a37525v1Ee = new $hs.Thunk();
    var hs_zdccomplement425v1Ef = new $hs.Thunk();
    var hs_a37625v1Eg = new $hs.Thunk();
    var hs_zdcshift425v1Eh = new $hs.Thunk();
    var hs_a37725v1Ei = new $hs.Thunk();
    var hs_zdcrotate425v1Ej = new $hs.Thunk();
    var hs_a37825v1Ek = new $hs.Thunk();
    var hs_zdcbit425v1El = new $hs.Thunk();
    var hs_a37925v1Em = new $hs.Thunk();
    var hs_zdcsetBit425v1En = new $hs.Thunk();
    var hs_a38025v1Eo = new $hs.Thunk();
    var hs_zdcclearBit425v1Ep = new $hs.Thunk();
    var hs_a38125v1Eq = new $hs.Thunk();
    var hs_zdccomplementBit425v1Er = new $hs.Thunk();
    var hs_a38225v1Es = new $hs.Thunk();
    var hs_zdctestBit425v1Et = new $hs.Thunk();
    var hs_a38325v1Eu = new $hs.Thunk();
    var hs_zdcbitSizze425v1Ev = new $hs.Thunk();
    var hs_a38425v1Ew = new $hs.Thunk();
    var hs_zdcisSigned425v1Ex = new $hs.Thunk();
    var hs_a38525v1Ey = new $hs.Thunk();
    var hs_zdcshiftL425v1Ez = new $hs.Thunk();
    var hs_a38625v1EA = new $hs.Thunk();
    var hs_zdcshiftR425v1EB = new $hs.Thunk();
    var hs_a38725v1EC = new $hs.Thunk();
    var hs_zdcrotateL425v1ED = new $hs.Thunk();
    var hs_a38825v1EE = new $hs.Thunk();
    var hs_zdcrotateR425v1EF = new $hs.Thunk();
    var hs_a38925v1EG = new $hs.Thunk();
    var hs_zdcquot425v1EH = new $hs.Thunk();
    var hs_a39025v1EI = new $hs.Thunk();
    var hs_zdcrem425v1EJ = new $hs.Thunk();
    var hs_a39125v1EK = new $hs.Thunk();
    var hs_zdcdiv425v1EL = new $hs.Thunk();
    var hs_a39225v1EM = new $hs.Thunk();
    var hs_zdcmod425v1EN = new $hs.Thunk();
    var hs_a39325v1EO = new $hs.Thunk();
    var hs_zdcquotRem425v1EP = new $hs.Thunk();
    var hs_a39425v1EQ = new $hs.Thunk();
    var hs_zdcdivMod425v1ER = new $hs.Thunk();
    var hs_a39525v1ES = new $hs.Thunk();
    var hs_zdctoInteger425v1ET = new $hs.Thunk();
    var hs_a39625v1EU = new $hs.Thunk();
    var hs_zdcminBound425v1EV = new $hs.Thunk();
    var hs_a39725v1EW = new $hs.Thunk();
    var hs_zdcmaxBound425v1EX = new $hs.Thunk();
    var hs_a39825v1EY = new $hs.Thunk();
    var hs_zdctoRational625v1EZ = new $hs.Thunk();
    var hs_a39925v1F0 = new $hs.Thunk();
    var hs_zdcsizzeOf625v1F1 = new $hs.Thunk();
    var hs_a40025v1F2 = new $hs.Thunk();
    var hs_zdcalignment625v1F3 = new $hs.Thunk();
    var hs_a40125v1F4 = new $hs.Thunk();
    var hs_zdcpeekElemOff625v1F5 = new $hs.Thunk();
    var hs_a40225v1F6 = new $hs.Thunk();
    var hs_zdcpokeElemOff625v1F7 = new $hs.Thunk();
    var hs_a40325v1F8 = new $hs.Thunk();
    var hs_zdcpeekByteOff625v1F9 = new $hs.Thunk();
    var hs_a40425v1Fa = new $hs.Thunk();
    var hs_zdcpokeByteOff625v1Fb = new $hs.Thunk();
    var hs_a40525v1Fc = new $hs.Thunk();
    var hs_zdcpeek625v1Fd = new $hs.Thunk();
    var hs_a40625v1Fe = new $hs.Thunk();
    var hs_zdcpoke625v1Ff = new $hs.Thunk();
    var hs_a40725v1Fg = new $hs.Thunk();
    var hs_zdcsucc625v1Fh = new $hs.Thunk();
    var hs_a40825v1Fi = new $hs.Thunk();
    var hs_zdcpred625v1Fj = new $hs.Thunk();
    var hs_a40925v1Fk = new $hs.Thunk();
    var hs_zdctoEnum625v1Fl = new $hs.Thunk();
    var hs_a41025v1Fm = new $hs.Thunk();
    var hs_zdcfromEnum625v1Fn = new $hs.Thunk();
    var hs_a41125v1Fo = new $hs.Thunk();
    var hs_zdcenumFrom625v1Fp = new $hs.Thunk();
    var hs_a41225v1Fq = new $hs.Thunk();
    var hs_zdcenumFromThen625v1Fr = new $hs.Thunk();
    var hs_a41325v1Fs = new $hs.Thunk();
    var hs_zdcenumFromTo625v1Ft = new $hs.Thunk();
    var hs_a41425v1Fu = new $hs.Thunk();
    var hs_zdcenumFromThenTo625v1Fv = new $hs.Thunk();
    var hs_a41525v1Fw = new $hs.Thunk();
    var hs_zdczp625v1Fx = new $hs.Thunk();
    var hs_a41625v1Fy = new $hs.Thunk();
    var hs_zdczt625v1Fz = new $hs.Thunk();
    var hs_a41725v1FA = new $hs.Thunk();
    var hs_zdczm625v1FB = new $hs.Thunk();
    var hs_a41825v1FC = new $hs.Thunk();
    var hs_zdcnegate625v1FD = new $hs.Thunk();
    var hs_a41925v1FE = new $hs.Thunk();
    var hs_zdcabs625v1FF = new $hs.Thunk();
    var hs_a42025v1FG = new $hs.Thunk();
    var hs_zdcsignum625v1FH = new $hs.Thunk();
    var hs_a42125v1FI = new $hs.Thunk();
    var hs_zdcfromInteger625v1FJ = new $hs.Thunk();
    var hs_a42225v1FK = new $hs.Thunk();
    var hs_zdccompare625v1FL = new $hs.Thunk();
    var hs_a42325v1FM = new $hs.Thunk();
    var hs_zdczl625v1FN = new $hs.Thunk();
    var hs_a42425v1FO = new $hs.Thunk();
    var hs_zdczgze625v1FP = new $hs.Thunk();
    var hs_a42525v1FQ = new $hs.Thunk();
    var hs_zdczg625v1FR = new $hs.Thunk();
    var hs_a42625v1FS = new $hs.Thunk();
    var hs_zdczlze625v1FT = new $hs.Thunk();
    var hs_a42725v1FU = new $hs.Thunk();
    var hs_zdcmax625v1FV = new $hs.Thunk();
    var hs_a42825v1FW = new $hs.Thunk();
    var hs_zdcmin625v1FX = new $hs.Thunk();
    var hs_a42925v1FY = new $hs.Thunk();
    var hs_zdczeze625v1FZ = new $hs.Thunk();
    var hs_a43025v1G0 = new $hs.Thunk();
    var hs_zdczsze625v1G1 = new $hs.Thunk();
    var hs_a43125v1G2 = new $hs.Thunk();
    var hs_zdczizazi525v1G3 = new $hs.Thunk();
    var hs_a43225v1G4 = new $hs.Thunk();
    var hs_zdczizbzi525v1G5 = new $hs.Thunk();
    var hs_a43325v1G6 = new $hs.Thunk();
    var hs_zdcxor525v1G7 = new $hs.Thunk();
    var hs_a43425v1G8 = new $hs.Thunk();
    var hs_zdccomplement525v1G9 = new $hs.Thunk();
    var hs_a43525v1Ga = new $hs.Thunk();
    var hs_zdcshift525v1Gb = new $hs.Thunk();
    var hs_a43625v1Gc = new $hs.Thunk();
    var hs_zdcrotate525v1Gd = new $hs.Thunk();
    var hs_a43725v1Ge = new $hs.Thunk();
    var hs_zdcbit525v1Gf = new $hs.Thunk();
    var hs_a43825v1Gg = new $hs.Thunk();
    var hs_zdcsetBit525v1Gh = new $hs.Thunk();
    var hs_a43925v1Gi = new $hs.Thunk();
    var hs_zdcclearBit525v1Gj = new $hs.Thunk();
    var hs_a44025v1Gk = new $hs.Thunk();
    var hs_zdccomplementBit525v1Gl = new $hs.Thunk();
    var hs_a44125v1Gm = new $hs.Thunk();
    var hs_zdctestBit525v1Gn = new $hs.Thunk();
    var hs_a44225v1Go = new $hs.Thunk();
    var hs_zdcbitSizze525v1Gp = new $hs.Thunk();
    var hs_a44325v1Gq = new $hs.Thunk();
    var hs_zdcisSigned525v1Gr = new $hs.Thunk();
    var hs_a44425v1Gs = new $hs.Thunk();
    var hs_zdcshiftL525v1Gt = new $hs.Thunk();
    var hs_a44525v1Gu = new $hs.Thunk();
    var hs_zdcshiftR525v1Gv = new $hs.Thunk();
    var hs_a44625v1Gw = new $hs.Thunk();
    var hs_zdcrotateL525v1Gx = new $hs.Thunk();
    var hs_a44725v1Gy = new $hs.Thunk();
    var hs_zdcrotateR525v1Gz = new $hs.Thunk();
    var hs_a44825v1GA = new $hs.Thunk();
    var hs_zdcquot525v1GB = new $hs.Thunk();
    var hs_a44925v1GC = new $hs.Thunk();
    var hs_zdcrem525v1GD = new $hs.Thunk();
    var hs_a45025v1GE = new $hs.Thunk();
    var hs_zdcdiv525v1GF = new $hs.Thunk();
    var hs_a45125v1GG = new $hs.Thunk();
    var hs_zdcmod525v1GH = new $hs.Thunk();
    var hs_a45225v1GI = new $hs.Thunk();
    var hs_zdcquotRem525v1GJ = new $hs.Thunk();
    var hs_a45325v1GK = new $hs.Thunk();
    var hs_zdcdivMod525v1GL = new $hs.Thunk();
    var hs_a45425v1GM = new $hs.Thunk();
    var hs_zdctoInteger525v1GN = new $hs.Thunk();
    var hs_a45525v1GO = new $hs.Thunk();
    var hs_zdcminBound525v1GP = new $hs.Thunk();
    var hs_a45625v1GQ = new $hs.Thunk();
    var hs_zdcmaxBound525v1GR = new $hs.Thunk();
    var hs_a45725v1GS = new $hs.Thunk();
    var hs_zdctoRational725v1GT = new $hs.Thunk();
    var hs_a45825v1GU = new $hs.Thunk();
    var hs_zdcsizzeOf725v1GV = new $hs.Thunk();
    var hs_a45925v1GW = new $hs.Thunk();
    var hs_zdcalignment725v1GX = new $hs.Thunk();
    var hs_a46025v1GY = new $hs.Thunk();
    var hs_zdcpeekElemOff725v1GZ = new $hs.Thunk();
    var hs_a46125v1H0 = new $hs.Thunk();
    var hs_zdcpokeElemOff725v1H1 = new $hs.Thunk();
    var hs_a46225v1H2 = new $hs.Thunk();
    var hs_zdcpeekByteOff725v1H3 = new $hs.Thunk();
    var hs_a46325v1H4 = new $hs.Thunk();
    var hs_zdcpokeByteOff725v1H5 = new $hs.Thunk();
    var hs_a46425v1H6 = new $hs.Thunk();
    var hs_zdcpeek725v1H7 = new $hs.Thunk();
    var hs_a46525v1H8 = new $hs.Thunk();
    var hs_zdcpoke725v1H9 = new $hs.Thunk();
    var hs_a46625v1Ha = new $hs.Thunk();
    var hs_zdcsucc725v1Hb = new $hs.Thunk();
    var hs_a46725v1Hc = new $hs.Thunk();
    var hs_zdcpred725v1Hd = new $hs.Thunk();
    var hs_a46825v1He = new $hs.Thunk();
    var hs_zdctoEnum725v1Hf = new $hs.Thunk();
    var hs_a46925v1Hg = new $hs.Thunk();
    var hs_zdcfromEnum725v1Hh = new $hs.Thunk();
    var hs_a47025v1Hi = new $hs.Thunk();
    var hs_zdcenumFrom725v1Hj = new $hs.Thunk();
    var hs_a47125v1Hk = new $hs.Thunk();
    var hs_zdcenumFromThen725v1Hl = new $hs.Thunk();
    var hs_a47225v1Hm = new $hs.Thunk();
    var hs_zdcenumFromTo725v1Hn = new $hs.Thunk();
    var hs_a47325v1Ho = new $hs.Thunk();
    var hs_zdcenumFromThenTo725v1Hp = new $hs.Thunk();
    var hs_a47425v1Hq = new $hs.Thunk();
    var hs_zdczp725v1Hr = new $hs.Thunk();
    var hs_a47525v1Hs = new $hs.Thunk();
    var hs_zdczt725v1Ht = new $hs.Thunk();
    var hs_a47625v1Hu = new $hs.Thunk();
    var hs_zdczm725v1Hv = new $hs.Thunk();
    var hs_a47725v1Hw = new $hs.Thunk();
    var hs_zdcnegate725v1Hx = new $hs.Thunk();
    var hs_a47825v1Hy = new $hs.Thunk();
    var hs_zdcabs725v1Hz = new $hs.Thunk();
    var hs_a47925v1HA = new $hs.Thunk();
    var hs_zdcsignum725v1HB = new $hs.Thunk();
    var hs_a48025v1HC = new $hs.Thunk();
    var hs_zdcfromInteger725v1HD = new $hs.Thunk();
    var hs_a48125v1HE = new $hs.Thunk();
    var hs_zdccompare725v1HF = new $hs.Thunk();
    var hs_a48225v1HG = new $hs.Thunk();
    var hs_zdczl725v1HH = new $hs.Thunk();
    var hs_a48325v1HI = new $hs.Thunk();
    var hs_zdczgze725v1HJ = new $hs.Thunk();
    var hs_a48425v1HK = new $hs.Thunk();
    var hs_zdczg725v1HL = new $hs.Thunk();
    var hs_a48525v1HM = new $hs.Thunk();
    var hs_zdczlze725v1HN = new $hs.Thunk();
    var hs_a48625v1HO = new $hs.Thunk();
    var hs_zdcmax725v1HP = new $hs.Thunk();
    var hs_a48725v1HQ = new $hs.Thunk();
    var hs_zdcmin725v1HR = new $hs.Thunk();
    var hs_a48825v1HS = new $hs.Thunk();
    var hs_zdczeze725v1HT = new $hs.Thunk();
    var hs_a48925v1HU = new $hs.Thunk();
    var hs_zdczsze725v1HV = new $hs.Thunk();
    var hs_a49025v1HW = new $hs.Thunk();
    var hs_zdczizazi625v1HX = new $hs.Thunk();
    var hs_a49125v1HY = new $hs.Thunk();
    var hs_zdczizbzi625v1HZ = new $hs.Thunk();
    var hs_a49225v1I0 = new $hs.Thunk();
    var hs_zdcxor625v1I1 = new $hs.Thunk();
    var hs_a49325v1I2 = new $hs.Thunk();
    var hs_zdccomplement625v1I3 = new $hs.Thunk();
    var hs_a49425v1I4 = new $hs.Thunk();
    var hs_zdcshift625v1I5 = new $hs.Thunk();
    var hs_a49525v1I6 = new $hs.Thunk();
    var hs_zdcrotate625v1I7 = new $hs.Thunk();
    var hs_a49625v1I8 = new $hs.Thunk();
    var hs_zdcbit625v1I9 = new $hs.Thunk();
    var hs_a49725v1Ia = new $hs.Thunk();
    var hs_zdcsetBit625v1Ib = new $hs.Thunk();
    var hs_a49825v1Ic = new $hs.Thunk();
    var hs_zdcclearBit625v1Id = new $hs.Thunk();
    var hs_a49925v1Ie = new $hs.Thunk();
    var hs_zdccomplementBit625v1If = new $hs.Thunk();
    var hs_a50025v1Ig = new $hs.Thunk();
    var hs_zdctestBit625v1Ih = new $hs.Thunk();
    var hs_a50125v1Ii = new $hs.Thunk();
    var hs_zdcbitSizze625v1Ij = new $hs.Thunk();
    var hs_a50225v1Ik = new $hs.Thunk();
    var hs_zdcisSigned625v1Il = new $hs.Thunk();
    var hs_a50325v1Im = new $hs.Thunk();
    var hs_zdcshiftL625v1In = new $hs.Thunk();
    var hs_a50425v1Io = new $hs.Thunk();
    var hs_zdcshiftR625v1Ip = new $hs.Thunk();
    var hs_a50525v1Iq = new $hs.Thunk();
    var hs_zdcrotateL625v1Ir = new $hs.Thunk();
    var hs_a50625v1Is = new $hs.Thunk();
    var hs_zdcrotateR625v1It = new $hs.Thunk();
    var hs_a50725v1Iu = new $hs.Thunk();
    var hs_zdcquot625v1Iv = new $hs.Thunk();
    var hs_a50825v1Iw = new $hs.Thunk();
    var hs_zdcrem625v1Ix = new $hs.Thunk();
    var hs_a50925v1Iy = new $hs.Thunk();
    var hs_zdcdiv625v1Iz = new $hs.Thunk();
    var hs_a51025v1IA = new $hs.Thunk();
    var hs_zdcmod625v1IB = new $hs.Thunk();
    var hs_a51125v1IC = new $hs.Thunk();
    var hs_zdcquotRem625v1ID = new $hs.Thunk();
    var hs_a51225v1IE = new $hs.Thunk();
    var hs_zdcdivMod625v1IF = new $hs.Thunk();
    var hs_a51325v1IG = new $hs.Thunk();
    var hs_zdctoInteger625v1IH = new $hs.Thunk();
    var hs_a51425v1II = new $hs.Thunk();
    var hs_zdcminBound625v1IJ = new $hs.Thunk();
    var hs_a51525v1IK = new $hs.Thunk();
    var hs_zdcmaxBound625v1IL = new $hs.Thunk();
    var hs_a51625v1IM = new $hs.Thunk();
    var hs_zdctoRational825v1IN = new $hs.Thunk();
    var hs_a51725v1IO = new $hs.Thunk();
    var hs_zdcsizzeOf825v1IP = new $hs.Thunk();
    var hs_a51825v1IQ = new $hs.Thunk();
    var hs_zdcalignment825v1IR = new $hs.Thunk();
    var hs_a51925v1IS = new $hs.Thunk();
    var hs_zdcpeekElemOff825v1IT = new $hs.Thunk();
    var hs_a52025v1IU = new $hs.Thunk();
    var hs_zdcpokeElemOff825v1IV = new $hs.Thunk();
    var hs_a52125v1IW = new $hs.Thunk();
    var hs_zdcpeekByteOff825v1IX = new $hs.Thunk();
    var hs_a52225v1IY = new $hs.Thunk();
    var hs_zdcpokeByteOff825v1IZ = new $hs.Thunk();
    var hs_a52325v1J0 = new $hs.Thunk();
    var hs_zdcpeek825v1J1 = new $hs.Thunk();
    var hs_a52425v1J2 = new $hs.Thunk();
    var hs_zdcpoke825v1J3 = new $hs.Thunk();
    var hs_a52525v1J4 = new $hs.Thunk();
    var hs_zdcsucc825v1J5 = new $hs.Thunk();
    var hs_a52625v1J6 = new $hs.Thunk();
    var hs_zdcpred825v1J7 = new $hs.Thunk();
    var hs_a52725v1J8 = new $hs.Thunk();
    var hs_zdctoEnum825v1J9 = new $hs.Thunk();
    var hs_a52825v1Ja = new $hs.Thunk();
    var hs_zdcfromEnum825v1Jb = new $hs.Thunk();
    var hs_a52925v1Jc = new $hs.Thunk();
    var hs_zdcenumFrom825v1Jd = new $hs.Thunk();
    var hs_a53025v1Je = new $hs.Thunk();
    var hs_zdcenumFromThen825v1Jf = new $hs.Thunk();
    var hs_a53125v1Jg = new $hs.Thunk();
    var hs_zdcenumFromTo825v1Jh = new $hs.Thunk();
    var hs_a53225v1Ji = new $hs.Thunk();
    var hs_zdcenumFromThenTo825v1Jj = new $hs.Thunk();
    var hs_a53325v1Jk = new $hs.Thunk();
    var hs_zdczp825v1Jl = new $hs.Thunk();
    var hs_a53425v1Jm = new $hs.Thunk();
    var hs_zdczt825v1Jn = new $hs.Thunk();
    var hs_a53525v1Jo = new $hs.Thunk();
    var hs_zdczm825v1Jp = new $hs.Thunk();
    var hs_a53625v1Jq = new $hs.Thunk();
    var hs_zdcnegate825v1Jr = new $hs.Thunk();
    var hs_a53725v1Js = new $hs.Thunk();
    var hs_zdcabs825v1Jt = new $hs.Thunk();
    var hs_a53825v1Ju = new $hs.Thunk();
    var hs_zdcsignum825v1Jv = new $hs.Thunk();
    var hs_a53925v1Jw = new $hs.Thunk();
    var hs_zdcfromInteger825v1Jx = new $hs.Thunk();
    var hs_a54025v1Jy = new $hs.Thunk();
    var hs_zdccompare825v1Jz = new $hs.Thunk();
    var hs_a54125v1JA = new $hs.Thunk();
    var hs_zdczl825v1JB = new $hs.Thunk();
    var hs_a54225v1JC = new $hs.Thunk();
    var hs_zdczgze825v1JD = new $hs.Thunk();
    var hs_a54325v1JE = new $hs.Thunk();
    var hs_zdczg825v1JF = new $hs.Thunk();
    var hs_a54425v1JG = new $hs.Thunk();
    var hs_zdczlze825v1JH = new $hs.Thunk();
    var hs_a54525v1JI = new $hs.Thunk();
    var hs_zdcmax825v1JJ = new $hs.Thunk();
    var hs_a54625v1JK = new $hs.Thunk();
    var hs_zdcmin825v1JL = new $hs.Thunk();
    var hs_a54725v1JM = new $hs.Thunk();
    var hs_zdczeze825v1JN = new $hs.Thunk();
    var hs_a54825v1JO = new $hs.Thunk();
    var hs_zdczsze825v1JP = new $hs.Thunk();
    var hs_a54925v1JQ = new $hs.Thunk();
    var hs_zdczizazi725v1JR = new $hs.Thunk();
    var hs_a55025v1JS = new $hs.Thunk();
    var hs_zdczizbzi725v1JT = new $hs.Thunk();
    var hs_a55125v1JU = new $hs.Thunk();
    var hs_zdcxor725v1JV = new $hs.Thunk();
    var hs_a55225v1JW = new $hs.Thunk();
    var hs_zdccomplement725v1JX = new $hs.Thunk();
    var hs_a55325v1JY = new $hs.Thunk();
    var hs_zdcshift725v1JZ = new $hs.Thunk();
    var hs_a55425v1K0 = new $hs.Thunk();
    var hs_zdcrotate725v1K1 = new $hs.Thunk();
    var hs_a55525v1K2 = new $hs.Thunk();
    var hs_zdcbit725v1K3 = new $hs.Thunk();
    var hs_a55625v1K4 = new $hs.Thunk();
    var hs_zdcsetBit725v1K5 = new $hs.Thunk();
    var hs_a55725v1K6 = new $hs.Thunk();
    var hs_zdcclearBit725v1K7 = new $hs.Thunk();
    var hs_a55825v1K8 = new $hs.Thunk();
    var hs_zdccomplementBit725v1K9 = new $hs.Thunk();
    var hs_a55925v1Ka = new $hs.Thunk();
    var hs_zdctestBit725v1Kb = new $hs.Thunk();
    var hs_a56025v1Kc = new $hs.Thunk();
    var hs_zdcbitSizze725v1Kd = new $hs.Thunk();
    var hs_a56125v1Ke = new $hs.Thunk();
    var hs_zdcisSigned725v1Kf = new $hs.Thunk();
    var hs_a56225v1Kg = new $hs.Thunk();
    var hs_zdcshiftL725v1Kh = new $hs.Thunk();
    var hs_a56325v1Ki = new $hs.Thunk();
    var hs_zdcshiftR725v1Kj = new $hs.Thunk();
    var hs_a56425v1Kk = new $hs.Thunk();
    var hs_zdcrotateL725v1Kl = new $hs.Thunk();
    var hs_a56525v1Km = new $hs.Thunk();
    var hs_zdcrotateR725v1Kn = new $hs.Thunk();
    var hs_a56625v1Ko = new $hs.Thunk();
    var hs_zdcquot725v1Kp = new $hs.Thunk();
    var hs_a56725v1Kq = new $hs.Thunk();
    var hs_zdcrem725v1Kr = new $hs.Thunk();
    var hs_a56825v1Ks = new $hs.Thunk();
    var hs_zdcdiv725v1Kt = new $hs.Thunk();
    var hs_a56925v1Ku = new $hs.Thunk();
    var hs_zdcmod725v1Kv = new $hs.Thunk();
    var hs_a57025v1Kw = new $hs.Thunk();
    var hs_zdcquotRem725v1Kx = new $hs.Thunk();
    var hs_a57125v1Ky = new $hs.Thunk();
    var hs_zdcdivMod725v1Kz = new $hs.Thunk();
    var hs_a57225v1KA = new $hs.Thunk();
    var hs_zdctoInteger725v1KB = new $hs.Thunk();
    var hs_a57325v1KC = new $hs.Thunk();
    var hs_zdcminBound725v1KD = new $hs.Thunk();
    var hs_a57425v1KE = new $hs.Thunk();
    var hs_zdcmaxBound725v1KF = new $hs.Thunk();
    var hs_a57525v1KG = new $hs.Thunk();
    var hs_zdctoRational925v1KH = new $hs.Thunk();
    var hs_a57625v1KI = new $hs.Thunk();
    var hs_zdcsizzeOf925v1KJ = new $hs.Thunk();
    var hs_a57725v1KK = new $hs.Thunk();
    var hs_zdcalignment925v1KL = new $hs.Thunk();
    var hs_a57825v1KM = new $hs.Thunk();
    var hs_zdcpeekElemOff925v1KN = new $hs.Thunk();
    var hs_a57925v1KO = new $hs.Thunk();
    var hs_zdcpokeElemOff925v1KP = new $hs.Thunk();
    var hs_a58025v1KQ = new $hs.Thunk();
    var hs_zdcpeekByteOff925v1KR = new $hs.Thunk();
    var hs_a58125v1KS = new $hs.Thunk();
    var hs_zdcpokeByteOff925v1KT = new $hs.Thunk();
    var hs_a58225v1KU = new $hs.Thunk();
    var hs_zdcpeek925v1KV = new $hs.Thunk();
    var hs_a58325v1KW = new $hs.Thunk();
    var hs_zdcpoke925v1KX = new $hs.Thunk();
    var hs_a58425v1KY = new $hs.Thunk();
    var hs_zdcsucc925v1KZ = new $hs.Thunk();
    var hs_a58525v1L0 = new $hs.Thunk();
    var hs_zdcpred925v1L1 = new $hs.Thunk();
    var hs_a58625v1L2 = new $hs.Thunk();
    var hs_zdctoEnum925v1L3 = new $hs.Thunk();
    var hs_a58725v1L4 = new $hs.Thunk();
    var hs_zdcfromEnum925v1L5 = new $hs.Thunk();
    var hs_a58825v1L6 = new $hs.Thunk();
    var hs_zdcenumFrom925v1L7 = new $hs.Thunk();
    var hs_a58925v1L8 = new $hs.Thunk();
    var hs_zdcenumFromThen925v1L9 = new $hs.Thunk();
    var hs_a59025v1La = new $hs.Thunk();
    var hs_zdcenumFromTo925v1Lb = new $hs.Thunk();
    var hs_a59125v1Lc = new $hs.Thunk();
    var hs_zdcenumFromThenTo925v1Ld = new $hs.Thunk();
    var hs_a59225v1Le = new $hs.Thunk();
    var hs_zdczp925v1Lf = new $hs.Thunk();
    var hs_a59325v1Lg = new $hs.Thunk();
    var hs_zdczt925v1Lh = new $hs.Thunk();
    var hs_a59425v1Li = new $hs.Thunk();
    var hs_zdczm925v1Lj = new $hs.Thunk();
    var hs_a59525v1Lk = new $hs.Thunk();
    var hs_zdcnegate925v1Ll = new $hs.Thunk();
    var hs_a59625v1Lm = new $hs.Thunk();
    var hs_zdcabs925v1Ln = new $hs.Thunk();
    var hs_a59725v1Lo = new $hs.Thunk();
    var hs_zdcsignum925v1Lp = new $hs.Thunk();
    var hs_a59825v1Lq = new $hs.Thunk();
    var hs_zdcfromInteger925v1Lr = new $hs.Thunk();
    var hs_a59925v1Ls = new $hs.Thunk();
    var hs_zdccompare925v1Lt = new $hs.Thunk();
    var hs_a60025v1Lu = new $hs.Thunk();
    var hs_zdczl925v1Lv = new $hs.Thunk();
    var hs_a60125v1Lw = new $hs.Thunk();
    var hs_zdczgze925v1Lx = new $hs.Thunk();
    var hs_a60225v1Ly = new $hs.Thunk();
    var hs_zdczg925v1Lz = new $hs.Thunk();
    var hs_a60325v1LA = new $hs.Thunk();
    var hs_zdczlze925v1LB = new $hs.Thunk();
    var hs_a60425v1LC = new $hs.Thunk();
    var hs_zdcmax925v1LD = new $hs.Thunk();
    var hs_a60525v1LE = new $hs.Thunk();
    var hs_zdcmin925v1LF = new $hs.Thunk();
    var hs_a60625v1LG = new $hs.Thunk();
    var hs_zdczeze925v1LH = new $hs.Thunk();
    var hs_a60725v1LI = new $hs.Thunk();
    var hs_zdczsze925v1LJ = new $hs.Thunk();
    var hs_a60825v1LK = new $hs.Thunk();
    var hs_zdczizazi825v1LL = new $hs.Thunk();
    var hs_a60925v1LM = new $hs.Thunk();
    var hs_zdczizbzi825v1LN = new $hs.Thunk();
    var hs_a61025v1LO = new $hs.Thunk();
    var hs_zdcxor825v1LP = new $hs.Thunk();
    var hs_a61125v1LQ = new $hs.Thunk();
    var hs_zdccomplement825v1LR = new $hs.Thunk();
    var hs_a61225v1LS = new $hs.Thunk();
    var hs_zdcshift825v1LT = new $hs.Thunk();
    var hs_a61325v1LU = new $hs.Thunk();
    var hs_zdcrotate825v1LV = new $hs.Thunk();
    var hs_a61425v1LW = new $hs.Thunk();
    var hs_zdcbit825v1LX = new $hs.Thunk();
    var hs_a61525v1LY = new $hs.Thunk();
    var hs_zdcsetBit825v1LZ = new $hs.Thunk();
    var hs_a61625v1M0 = new $hs.Thunk();
    var hs_zdcclearBit825v1M1 = new $hs.Thunk();
    var hs_a61725v1M2 = new $hs.Thunk();
    var hs_zdccomplementBit825v1M3 = new $hs.Thunk();
    var hs_a61825v1M4 = new $hs.Thunk();
    var hs_zdctestBit825v1M5 = new $hs.Thunk();
    var hs_a61925v1M6 = new $hs.Thunk();
    var hs_zdcbitSizze825v1M7 = new $hs.Thunk();
    var hs_a62025v1M8 = new $hs.Thunk();
    var hs_zdcisSigned825v1M9 = new $hs.Thunk();
    var hs_a62125v1Ma = new $hs.Thunk();
    var hs_zdcshiftL825v1Mb = new $hs.Thunk();
    var hs_a62225v1Mc = new $hs.Thunk();
    var hs_zdcshiftR825v1Md = new $hs.Thunk();
    var hs_a62325v1Me = new $hs.Thunk();
    var hs_zdcrotateL825v1Mf = new $hs.Thunk();
    var hs_a62425v1Mg = new $hs.Thunk();
    var hs_zdcrotateR825v1Mh = new $hs.Thunk();
    var hs_a62525v1Mi = new $hs.Thunk();
    var hs_zdcquot825v1Mj = new $hs.Thunk();
    var hs_a62625v1Mk = new $hs.Thunk();
    var hs_zdcrem825v1Ml = new $hs.Thunk();
    var hs_a62725v1Mm = new $hs.Thunk();
    var hs_zdcdiv825v1Mn = new $hs.Thunk();
    var hs_a62825v1Mo = new $hs.Thunk();
    var hs_zdcmod825v1Mp = new $hs.Thunk();
    var hs_a62925v1Mq = new $hs.Thunk();
    var hs_zdcquotRem825v1Mr = new $hs.Thunk();
    var hs_a63025v1Ms = new $hs.Thunk();
    var hs_zdcdivMod825v1Mt = new $hs.Thunk();
    var hs_a63125v1Mu = new $hs.Thunk();
    var hs_zdctoInteger825v1Mv = new $hs.Thunk();
    var hs_a63225v1Mw = new $hs.Thunk();
    var hs_zdcminBound825v1Mx = new $hs.Thunk();
    var hs_a63325v1My = new $hs.Thunk();
    var hs_zdcmaxBound825v1Mz = new $hs.Thunk();
    var hs_a63425v1MA = new $hs.Thunk();
    var hs_zdctoRational1025v1MB = new $hs.Thunk();
    var hs_a63525v1MC = new $hs.Thunk();
    var hs_zdcsizzeOf1025v1MD = new $hs.Thunk();
    var hs_a63625v1ME = new $hs.Thunk();
    var hs_zdcalignment1025v1MF = new $hs.Thunk();
    var hs_a63725v1MG = new $hs.Thunk();
    var hs_zdcpeekElemOff1025v1MH = new $hs.Thunk();
    var hs_a63825v1MI = new $hs.Thunk();
    var hs_zdcpokeElemOff1025v1MJ = new $hs.Thunk();
    var hs_a63925v1MK = new $hs.Thunk();
    var hs_zdcpeekByteOff1025v1ML = new $hs.Thunk();
    var hs_a64025v1MM = new $hs.Thunk();
    var hs_zdcpokeByteOff1025v1MN = new $hs.Thunk();
    var hs_a64125v1MO = new $hs.Thunk();
    var hs_zdcpeek1025v1MP = new $hs.Thunk();
    var hs_a64225v1MQ = new $hs.Thunk();
    var hs_zdcpoke1025v1MR = new $hs.Thunk();
    var hs_a64325v1MS = new $hs.Thunk();
    var hs_zdcsucc1025v1MT = new $hs.Thunk();
    var hs_a64425v1MU = new $hs.Thunk();
    var hs_zdcpred1025v1MV = new $hs.Thunk();
    var hs_a64525v1MW = new $hs.Thunk();
    var hs_zdctoEnum1025v1MX = new $hs.Thunk();
    var hs_a64625v1MY = new $hs.Thunk();
    var hs_zdcfromEnum1025v1MZ = new $hs.Thunk();
    var hs_a64725v1N0 = new $hs.Thunk();
    var hs_zdcenumFrom1025v1N1 = new $hs.Thunk();
    var hs_a64825v1N2 = new $hs.Thunk();
    var hs_zdcenumFromThen1025v1N3 = new $hs.Thunk();
    var hs_a64925v1N4 = new $hs.Thunk();
    var hs_zdcenumFromTo1025v1N5 = new $hs.Thunk();
    var hs_a65025v1N6 = new $hs.Thunk();
    var hs_zdcenumFromThenTo1025v1N7 = new $hs.Thunk();
    var hs_a65125v1N8 = new $hs.Thunk();
    var hs_zdczp1025v1N9 = new $hs.Thunk();
    var hs_a65225v1Na = new $hs.Thunk();
    var hs_zdczt1025v1Nb = new $hs.Thunk();
    var hs_a65325v1Nc = new $hs.Thunk();
    var hs_zdczm1025v1Nd = new $hs.Thunk();
    var hs_a65425v1Ne = new $hs.Thunk();
    var hs_zdcnegate1025v1Nf = new $hs.Thunk();
    var hs_a65525v1Ng = new $hs.Thunk();
    var hs_zdcabs1025v1Nh = new $hs.Thunk();
    var hs_a65625v1Ni = new $hs.Thunk();
    var hs_zdcsignum1025v1Nj = new $hs.Thunk();
    var hs_a65725v1Nk = new $hs.Thunk();
    var hs_zdcfromInteger1025v1Nl = new $hs.Thunk();
    var hs_a65825v1Nm = new $hs.Thunk();
    var hs_zdccompare1025v1Nn = new $hs.Thunk();
    var hs_a65925v1No = new $hs.Thunk();
    var hs_zdczl1025v1Np = new $hs.Thunk();
    var hs_a66025v1Nq = new $hs.Thunk();
    var hs_zdczgze1025v1Nr = new $hs.Thunk();
    var hs_a66125v1Ns = new $hs.Thunk();
    var hs_zdczg1025v1Nt = new $hs.Thunk();
    var hs_a66225v1Nu = new $hs.Thunk();
    var hs_zdczlze1025v1Nv = new $hs.Thunk();
    var hs_a66325v1Nw = new $hs.Thunk();
    var hs_zdcmax1025v1Nx = new $hs.Thunk();
    var hs_a66425v1Ny = new $hs.Thunk();
    var hs_zdcmin1025v1Nz = new $hs.Thunk();
    var hs_a66525v1NA = new $hs.Thunk();
    var hs_zdczeze1025v1NB = new $hs.Thunk();
    var hs_a66625v1NC = new $hs.Thunk();
    var hs_zdczsze1025v1ND = new $hs.Thunk();
    var hs_a66725v1NE = new $hs.Thunk();
    var hs_zdczizazi925v1NF = new $hs.Thunk();
    var hs_a66825v1NG = new $hs.Thunk();
    var hs_zdczizbzi925v1NH = new $hs.Thunk();
    var hs_a66925v1NI = new $hs.Thunk();
    var hs_zdcxor925v1NJ = new $hs.Thunk();
    var hs_a67025v1NK = new $hs.Thunk();
    var hs_zdccomplement925v1NL = new $hs.Thunk();
    var hs_a67125v1NM = new $hs.Thunk();
    var hs_zdcshift925v1NN = new $hs.Thunk();
    var hs_a67225v1NO = new $hs.Thunk();
    var hs_zdcrotate925v1NP = new $hs.Thunk();
    var hs_a67325v1NQ = new $hs.Thunk();
    var hs_zdcbit925v1NR = new $hs.Thunk();
    var hs_a67425v1NS = new $hs.Thunk();
    var hs_zdcsetBit925v1NT = new $hs.Thunk();
    var hs_a67525v1NU = new $hs.Thunk();
    var hs_zdcclearBit925v1NV = new $hs.Thunk();
    var hs_a67625v1NW = new $hs.Thunk();
    var hs_zdccomplementBit925v1NX = new $hs.Thunk();
    var hs_a67725v1NY = new $hs.Thunk();
    var hs_zdctestBit925v1NZ = new $hs.Thunk();
    var hs_a67825v1O0 = new $hs.Thunk();
    var hs_zdcbitSizze925v1O1 = new $hs.Thunk();
    var hs_a67925v1O2 = new $hs.Thunk();
    var hs_zdcisSigned925v1O3 = new $hs.Thunk();
    var hs_a68025v1O4 = new $hs.Thunk();
    var hs_zdcshiftL925v1O5 = new $hs.Thunk();
    var hs_a68125v1O6 = new $hs.Thunk();
    var hs_zdcshiftR925v1O7 = new $hs.Thunk();
    var hs_a68225v1O8 = new $hs.Thunk();
    var hs_zdcrotateL925v1O9 = new $hs.Thunk();
    var hs_a68325v1Oa = new $hs.Thunk();
    var hs_zdcrotateR925v1Ob = new $hs.Thunk();
    var hs_a68425v1Oc = new $hs.Thunk();
    var hs_zdcquot925v1Od = new $hs.Thunk();
    var hs_a68525v1Oe = new $hs.Thunk();
    var hs_zdcrem925v1Of = new $hs.Thunk();
    var hs_a68625v1Og = new $hs.Thunk();
    var hs_zdcdiv925v1Oh = new $hs.Thunk();
    var hs_a68725v1Oi = new $hs.Thunk();
    var hs_zdcmod925v1Oj = new $hs.Thunk();
    var hs_a68825v1Ok = new $hs.Thunk();
    var hs_zdcquotRem925v1Ol = new $hs.Thunk();
    var hs_a68925v1Om = new $hs.Thunk();
    var hs_zdcdivMod925v1On = new $hs.Thunk();
    var hs_a69025v1Oo = new $hs.Thunk();
    var hs_zdctoInteger925v1Op = new $hs.Thunk();
    var hs_a69125v1Oq = new $hs.Thunk();
    var hs_zdcminBound925v1Or = new $hs.Thunk();
    var hs_a69225v1Os = new $hs.Thunk();
    var hs_zdcmaxBound925v1Ot = new $hs.Thunk();
    var hs_a69325v1Ou = new $hs.Thunk();
    var hs_zdctoRational1125v1Ov = new $hs.Thunk();
    var hs_a69425v1Ow = new $hs.Thunk();
    var hs_zdcsizzeOf1125v1Ox = new $hs.Thunk();
    var hs_a69525v1Oy = new $hs.Thunk();
    var hs_zdcalignment1125v1Oz = new $hs.Thunk();
    var hs_a69625v1OA = new $hs.Thunk();
    var hs_zdcpeekElemOff1125v1OB = new $hs.Thunk();
    var hs_a69725v1OC = new $hs.Thunk();
    var hs_zdcpokeElemOff1125v1OD = new $hs.Thunk();
    var hs_a69825v1OE = new $hs.Thunk();
    var hs_zdcpeekByteOff1125v1OF = new $hs.Thunk();
    var hs_a69925v1OG = new $hs.Thunk();
    var hs_zdcpokeByteOff1125v1OH = new $hs.Thunk();
    var hs_a70025v1OI = new $hs.Thunk();
    var hs_zdcpeek1125v1OJ = new $hs.Thunk();
    var hs_a70125v1OK = new $hs.Thunk();
    var hs_zdcpoke1125v1OL = new $hs.Thunk();
    var hs_a70225v1OM = new $hs.Thunk();
    var hs_zdcsucc1125v1ON = new $hs.Thunk();
    var hs_a70325v1OO = new $hs.Thunk();
    var hs_zdcpred1125v1OP = new $hs.Thunk();
    var hs_a70425v1OQ = new $hs.Thunk();
    var hs_zdctoEnum1125v1OR = new $hs.Thunk();
    var hs_a70525v1OS = new $hs.Thunk();
    var hs_zdcfromEnum1125v1OT = new $hs.Thunk();
    var hs_a70625v1OU = new $hs.Thunk();
    var hs_zdcenumFrom1125v1OV = new $hs.Thunk();
    var hs_a70725v1OW = new $hs.Thunk();
    var hs_zdcenumFromThen1125v1OX = new $hs.Thunk();
    var hs_a70825v1OY = new $hs.Thunk();
    var hs_zdcenumFromTo1125v1OZ = new $hs.Thunk();
    var hs_a70925v1P0 = new $hs.Thunk();
    var hs_zdcenumFromThenTo1125v1P1 = new $hs.Thunk();
    var hs_a71025v1P2 = new $hs.Thunk();
    var hs_zdczp1125v1P3 = new $hs.Thunk();
    var hs_a71125v1P4 = new $hs.Thunk();
    var hs_zdczt1125v1P5 = new $hs.Thunk();
    var hs_a71225v1P6 = new $hs.Thunk();
    var hs_zdczm1125v1P7 = new $hs.Thunk();
    var hs_a71325v1P8 = new $hs.Thunk();
    var hs_zdcnegate1125v1P9 = new $hs.Thunk();
    var hs_a71425v1Pa = new $hs.Thunk();
    var hs_zdcabs1125v1Pb = new $hs.Thunk();
    var hs_a71525v1Pc = new $hs.Thunk();
    var hs_zdcsignum1125v1Pd = new $hs.Thunk();
    var hs_a71625v1Pe = new $hs.Thunk();
    var hs_zdcfromInteger1125v1Pf = new $hs.Thunk();
    var hs_a71725v1Pg = new $hs.Thunk();
    var hs_zdccompare1125v1Ph = new $hs.Thunk();
    var hs_a71825v1Pi = new $hs.Thunk();
    var hs_zdczl1125v1Pj = new $hs.Thunk();
    var hs_a71925v1Pk = new $hs.Thunk();
    var hs_zdczgze1125v1Pl = new $hs.Thunk();
    var hs_a72025v1Pm = new $hs.Thunk();
    var hs_zdczg1125v1Pn = new $hs.Thunk();
    var hs_a72125v1Po = new $hs.Thunk();
    var hs_zdczlze1125v1Pp = new $hs.Thunk();
    var hs_a72225v1Pq = new $hs.Thunk();
    var hs_zdcmax1125v1Pr = new $hs.Thunk();
    var hs_a72325v1Ps = new $hs.Thunk();
    var hs_zdcmin1125v1Pt = new $hs.Thunk();
    var hs_a72425v1Pu = new $hs.Thunk();
    var hs_zdczeze1125v1Pv = new $hs.Thunk();
    var hs_a72525v1Pw = new $hs.Thunk();
    var hs_zdczsze1125v1Px = new $hs.Thunk();
    var hs_a72625v1Py = new $hs.Thunk();
    var hs_zdczizazi1025v1Pz = new $hs.Thunk();
    var hs_a72725v1PA = new $hs.Thunk();
    var hs_zdczizbzi1025v1PB = new $hs.Thunk();
    var hs_a72825v1PC = new $hs.Thunk();
    var hs_zdcxor1025v1PD = new $hs.Thunk();
    var hs_a72925v1PE = new $hs.Thunk();
    var hs_zdccomplement1025v1PF = new $hs.Thunk();
    var hs_a73025v1PG = new $hs.Thunk();
    var hs_zdcshift1025v1PH = new $hs.Thunk();
    var hs_a73125v1PI = new $hs.Thunk();
    var hs_zdcrotate1025v1PJ = new $hs.Thunk();
    var hs_a73225v1PK = new $hs.Thunk();
    var hs_zdcbit1025v1PL = new $hs.Thunk();
    var hs_a73325v1PM = new $hs.Thunk();
    var hs_zdcsetBit1025v1PN = new $hs.Thunk();
    var hs_a73425v1PO = new $hs.Thunk();
    var hs_zdcclearBit1025v1PP = new $hs.Thunk();
    var hs_a73525v1PQ = new $hs.Thunk();
    var hs_zdccomplementBit1025v1PR = new $hs.Thunk();
    var hs_a73625v1PS = new $hs.Thunk();
    var hs_zdctestBit1025v1PT = new $hs.Thunk();
    var hs_a73725v1PU = new $hs.Thunk();
    var hs_zdcbitSizze1025v1PV = new $hs.Thunk();
    var hs_a73825v1PW = new $hs.Thunk();
    var hs_zdcisSigned1025v1PX = new $hs.Thunk();
    var hs_a73925v1PY = new $hs.Thunk();
    var hs_zdcshiftL1025v1PZ = new $hs.Thunk();
    var hs_a74025v1Q0 = new $hs.Thunk();
    var hs_zdcshiftR1025v1Q1 = new $hs.Thunk();
    var hs_a74125v1Q2 = new $hs.Thunk();
    var hs_zdcrotateL1025v1Q3 = new $hs.Thunk();
    var hs_a74225v1Q4 = new $hs.Thunk();
    var hs_zdcrotateR1025v1Q5 = new $hs.Thunk();
    var hs_a74325v1Q6 = new $hs.Thunk();
    var hs_zdcquot1025v1Q7 = new $hs.Thunk();
    var hs_a74425v1Q8 = new $hs.Thunk();
    var hs_zdcrem1025v1Q9 = new $hs.Thunk();
    var hs_a74525v1Qa = new $hs.Thunk();
    var hs_zdcdiv1025v1Qb = new $hs.Thunk();
    var hs_a74625v1Qc = new $hs.Thunk();
    var hs_zdcmod1025v1Qd = new $hs.Thunk();
    var hs_a74725v1Qe = new $hs.Thunk();
    var hs_zdcquotRem1025v1Qf = new $hs.Thunk();
    var hs_a74825v1Qg = new $hs.Thunk();
    var hs_zdcdivMod1025v1Qh = new $hs.Thunk();
    var hs_a74925v1Qi = new $hs.Thunk();
    var hs_zdctoInteger1025v1Qj = new $hs.Thunk();
    var hs_a75025v1Qk = new $hs.Thunk();
    var hs_zdcminBound1025v1Ql = new $hs.Thunk();
    var hs_a75125v1Qm = new $hs.Thunk();
    var hs_zdcmaxBound1025v1Qn = new $hs.Thunk();
    var hs_a75225v1Qo = new $hs.Thunk();
    var hs_zdctoRational1225v1Qp = new $hs.Thunk();
    var hs_a75325v1Qq = new $hs.Thunk();
    var hs_zdcsizzeOf1225v1Qr = new $hs.Thunk();
    var hs_a75425v1Qs = new $hs.Thunk();
    var hs_zdcalignment1225v1Qt = new $hs.Thunk();
    var hs_a75525v1Qu = new $hs.Thunk();
    var hs_zdcpeekElemOff1225v1Qv = new $hs.Thunk();
    var hs_a75625v1Qw = new $hs.Thunk();
    var hs_zdcpokeElemOff1225v1Qx = new $hs.Thunk();
    var hs_a75725v1Qy = new $hs.Thunk();
    var hs_zdcpeekByteOff1225v1Qz = new $hs.Thunk();
    var hs_a75825v1QA = new $hs.Thunk();
    var hs_zdcpokeByteOff1225v1QB = new $hs.Thunk();
    var hs_a75925v1QC = new $hs.Thunk();
    var hs_zdcpeek1225v1QD = new $hs.Thunk();
    var hs_a76025v1QE = new $hs.Thunk();
    var hs_zdcpoke1225v1QF = new $hs.Thunk();
    var hs_a76125v1QG = new $hs.Thunk();
    var hs_zdcsucc1225v1QH = new $hs.Thunk();
    var hs_a76225v1QI = new $hs.Thunk();
    var hs_zdcpred1225v1QJ = new $hs.Thunk();
    var hs_a76325v1QK = new $hs.Thunk();
    var hs_zdctoEnum1225v1QL = new $hs.Thunk();
    var hs_a76425v1QM = new $hs.Thunk();
    var hs_zdcfromEnum1225v1QN = new $hs.Thunk();
    var hs_a76525v1QO = new $hs.Thunk();
    var hs_zdcenumFrom1225v1QP = new $hs.Thunk();
    var hs_a76625v1QQ = new $hs.Thunk();
    var hs_zdcenumFromThen1225v1QR = new $hs.Thunk();
    var hs_a76725v1QS = new $hs.Thunk();
    var hs_zdcenumFromTo1225v1QT = new $hs.Thunk();
    var hs_a76825v1QU = new $hs.Thunk();
    var hs_zdcenumFromThenTo1225v1QV = new $hs.Thunk();
    var hs_a76925v1QW = new $hs.Thunk();
    var hs_zdczp1225v1QX = new $hs.Thunk();
    var hs_a77025v1QY = new $hs.Thunk();
    var hs_zdczt1225v1QZ = new $hs.Thunk();
    var hs_a77125v1R0 = new $hs.Thunk();
    var hs_zdczm1225v1R1 = new $hs.Thunk();
    var hs_a77225v1R2 = new $hs.Thunk();
    var hs_zdcnegate1225v1R3 = new $hs.Thunk();
    var hs_a77325v1R4 = new $hs.Thunk();
    var hs_zdcabs1225v1R5 = new $hs.Thunk();
    var hs_a77425v1R6 = new $hs.Thunk();
    var hs_zdcsignum1225v1R7 = new $hs.Thunk();
    var hs_a77525v1R8 = new $hs.Thunk();
    var hs_zdcfromInteger1225v1R9 = new $hs.Thunk();
    var hs_a77625v1Ra = new $hs.Thunk();
    var hs_zdccompare1225v1Rb = new $hs.Thunk();
    var hs_a77725v1Rc = new $hs.Thunk();
    var hs_zdczl1225v1Rd = new $hs.Thunk();
    var hs_a77825v1Re = new $hs.Thunk();
    var hs_zdczgze1225v1Rf = new $hs.Thunk();
    var hs_a77925v1Rg = new $hs.Thunk();
    var hs_zdczg1225v1Rh = new $hs.Thunk();
    var hs_a78025v1Ri = new $hs.Thunk();
    var hs_zdczlze1225v1Rj = new $hs.Thunk();
    var hs_a78125v1Rk = new $hs.Thunk();
    var hs_zdcmax1225v1Rl = new $hs.Thunk();
    var hs_a78225v1Rm = new $hs.Thunk();
    var hs_zdcmin1225v1Rn = new $hs.Thunk();
    var hs_a78325v1Ro = new $hs.Thunk();
    var hs_zdczeze1225v1Rp = new $hs.Thunk();
    var hs_a78425v1Rq = new $hs.Thunk();
    var hs_zdczsze1225v1Rr = new $hs.Thunk();
    var hs_a78525v1Rs = new $hs.Thunk();
    var hs_zdctoRational1325v1Rt = new $hs.Thunk();
    var hs_a78625v1Ru = new $hs.Thunk();
    var hs_zdcsizzeOf1325v1Rv = new $hs.Thunk();
    var hs_a78725v1Rw = new $hs.Thunk();
    var hs_zdcalignment1325v1Rx = new $hs.Thunk();
    var hs_a78825v1Ry = new $hs.Thunk();
    var hs_zdcpeekElemOff1325v1Rz = new $hs.Thunk();
    var hs_a78925v1RA = new $hs.Thunk();
    var hs_zdcpokeElemOff1325v1RB = new $hs.Thunk();
    var hs_a79025v1RC = new $hs.Thunk();
    var hs_zdcpeekByteOff1325v1RD = new $hs.Thunk();
    var hs_a79125v1RE = new $hs.Thunk();
    var hs_zdcpokeByteOff1325v1RF = new $hs.Thunk();
    var hs_a79225v1RG = new $hs.Thunk();
    var hs_zdcpeek1325v1RH = new $hs.Thunk();
    var hs_a79325v1RI = new $hs.Thunk();
    var hs_zdcpoke1325v1RJ = new $hs.Thunk();
    var hs_a79425v1RK = new $hs.Thunk();
    var hs_zdcsucc1325v1RL = new $hs.Thunk();
    var hs_a79525v1RM = new $hs.Thunk();
    var hs_zdcpred1325v1RN = new $hs.Thunk();
    var hs_a79625v1RO = new $hs.Thunk();
    var hs_zdctoEnum1325v1RP = new $hs.Thunk();
    var hs_a79725v1RQ = new $hs.Thunk();
    var hs_zdcfromEnum1325v1RR = new $hs.Thunk();
    var hs_a79825v1RS = new $hs.Thunk();
    var hs_zdcenumFrom1325v1RT = new $hs.Thunk();
    var hs_a79925v1RU = new $hs.Thunk();
    var hs_zdcenumFromThen1325v1RV = new $hs.Thunk();
    var hs_a80025v1RW = new $hs.Thunk();
    var hs_zdcenumFromTo1325v1RX = new $hs.Thunk();
    var hs_a80125v1RY = new $hs.Thunk();
    var hs_zdcenumFromThenTo1325v1RZ = new $hs.Thunk();
    var hs_a80225v1S0 = new $hs.Thunk();
    var hs_zdczp1325v1S1 = new $hs.Thunk();
    var hs_a80325v1S2 = new $hs.Thunk();
    var hs_zdczt1325v1S3 = new $hs.Thunk();
    var hs_a80425v1S4 = new $hs.Thunk();
    var hs_zdczm1325v1S5 = new $hs.Thunk();
    var hs_a80525v1S6 = new $hs.Thunk();
    var hs_zdcnegate1325v1S7 = new $hs.Thunk();
    var hs_a80625v1S8 = new $hs.Thunk();
    var hs_zdcabs1325v1S9 = new $hs.Thunk();
    var hs_a80725v1Sa = new $hs.Thunk();
    var hs_zdcsignum1325v1Sb = new $hs.Thunk();
    var hs_a80825v1Sc = new $hs.Thunk();
    var hs_zdcfromInteger1325v1Sd = new $hs.Thunk();
    var hs_a80925v1Se = new $hs.Thunk();
    var hs_zdccompare1325v1Sf = new $hs.Thunk();
    var hs_a81025v1Sg = new $hs.Thunk();
    var hs_zdczl1325v1Sh = new $hs.Thunk();
    var hs_a81125v1Si = new $hs.Thunk();
    var hs_zdczgze1325v1Sj = new $hs.Thunk();
    var hs_a81225v1Sk = new $hs.Thunk();
    var hs_zdczg1325v1Sl = new $hs.Thunk();
    var hs_a81325v1Sm = new $hs.Thunk();
    var hs_zdczlze1325v1Sn = new $hs.Thunk();
    var hs_a81425v1So = new $hs.Thunk();
    var hs_zdcmax1325v1Sp = new $hs.Thunk();
    var hs_a81525v1Sq = new $hs.Thunk();
    var hs_zdcmin1325v1Sr = new $hs.Thunk();
    var hs_a81625v1Ss = new $hs.Thunk();
    var hs_zdczeze1325v1St = new $hs.Thunk();
    var hs_a81725v1Su = new $hs.Thunk();
    var hs_zdczsze1325v1Sv = new $hs.Thunk();
    var hs_zdctypeOf25v1Sw = new $hs.Func(1);
    var hs_zdctypeOf125v1SD = new $hs.Func(1);
    var hs_zdctypeOf225v1SK = new $hs.Func(1);
    var hs_zdctypeOf325v1SR = new $hs.Func(1);
    var hs_zdctypeOf425v1SY = new $hs.Func(1);
    var hs_zdctypeOf525v1T5 = new $hs.Func(1);
    var hs_zdctypeOf625v1Tc = new $hs.Func(1);
    var hs_zdctypeOf725v1Tj = new $hs.Func(1);
    var hs_zdctypeOf825v1Tq = new $hs.Func(1);
    var hs_zdctypeOf925v1Tx = new $hs.Func(1);
    var hs_zdctypeOf1025v1TE = new $hs.Func(1);
    var hs_zdctypeOf1125v1TL = new $hs.Func(1);
    var hs_zdctypeOf1225v1TS = new $hs.Func(1);
    var hs_zdctypeOf1325v1TZ = new $hs.Func(1);
    hs_a25v1rG.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdcreadList25v1rH.evaluateOnce = function () {
        if (hs_a25v1rG.notEvaluated) {
            return hs_a25v1rG.hscall();
        } else {
            return hs_a25v1rG;
        }
    };
    hs_a125v1rI.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdcreadsPrec25v1rJ.evaluateOnce = function () {
        if (hs_a125v1rI.notEvaluated) {
            return hs_a125v1rI.hscall();
        } else {
            return hs_a125v1rI;
        }
    };
    this.hs_zdfReadCDev.data = [hs_a125v1rI, hs_a25v1rG, hs_zdcreadPrec25v1rL, hs_zdcreadListPrec25v1rK];
    hs_zdcreadListPrec25v1rK.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCDev);
    };
    hs_zdcreadPrec25v1rL.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCDev);
    };
    hs_a225v1rM.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshowList25v1rN.evaluateOnce = function () {
        if (hs_a225v1rM.notEvaluated) {
            return hs_a225v1rM.hscall();
        } else {
            return hs_a225v1rM;
        }
    };
    hs_a325v1rO.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshow25v1rP.evaluateOnce = function () {
        if (hs_a325v1rO.notEvaluated) {
            return hs_a325v1rO.hscall();
        } else {
            return hs_a325v1rO;
        }
    };
    hs_a425v1rQ.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshowsPrec25v1rR.evaluateOnce = function () {
        if (hs_a425v1rQ.notEvaluated) {
            return hs_a425v1rQ.hscall();
        } else {
            return hs_a425v1rQ;
        }
    };
    this.hs_zdfShowCDev.data = [hs_a425v1rQ, hs_a325v1rO, hs_a225v1rM];
    hs_a525v1rS.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdcreadList125v1rT.evaluateOnce = function () {
        if (hs_a525v1rS.notEvaluated) {
            return hs_a525v1rS.hscall();
        } else {
            return hs_a525v1rS;
        }
    };
    hs_a625v1rU.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdcreadsPrec125v1rV.evaluateOnce = function () {
        if (hs_a625v1rU.notEvaluated) {
            return hs_a625v1rU.hscall();
        } else {
            return hs_a625v1rU;
        }
    };
    this.hs_zdfReadCIno.data = [hs_a625v1rU, hs_a525v1rS, hs_zdcreadPrec125v1rX, hs_zdcreadListPrec125v1rW];
    hs_zdcreadListPrec125v1rW.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCIno);
    };
    hs_zdcreadPrec125v1rX.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCIno);
    };
    hs_a725v1rY.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshowList125v1rZ.evaluateOnce = function () {
        if (hs_a725v1rY.notEvaluated) {
            return hs_a725v1rY.hscall();
        } else {
            return hs_a725v1rY;
        }
    };
    hs_a825v1s0.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshow125v1s1.evaluateOnce = function () {
        if (hs_a825v1s0.notEvaluated) {
            return hs_a825v1s0.hscall();
        } else {
            return hs_a825v1s0;
        }
    };
    hs_a925v1s2.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshowsPrec125v1s3.evaluateOnce = function () {
        if (hs_a925v1s2.notEvaluated) {
            return hs_a925v1s2.hscall();
        } else {
            return hs_a925v1s2;
        }
    };
    this.hs_zdfShowCIno.data = [hs_a925v1s2, hs_a825v1s0, hs_a725v1rY];
    hs_a1025v1s4.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadList225v1s5.evaluateOnce = function () {
        if (hs_a1025v1s4.notEvaluated) {
            return hs_a1025v1s4.hscall();
        } else {
            return hs_a1025v1s4;
        }
    };
    hs_a1125v1s6.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadsPrec225v1s7.evaluateOnce = function () {
        if (hs_a1125v1s6.notEvaluated) {
            return hs_a1125v1s6.hscall();
        } else {
            return hs_a1125v1s6;
        }
    };
    this.hs_zdfReadCMode.data = [hs_a1125v1s6, hs_a1025v1s4, hs_zdcreadPrec225v1s9, hs_zdcreadListPrec225v1s8];
    hs_zdcreadListPrec225v1s8.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCMode);
    };
    hs_zdcreadPrec225v1s9.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCMode);
    };
    hs_a1225v1sa.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowList225v1sb.evaluateOnce = function () {
        if (hs_a1225v1sa.notEvaluated) {
            return hs_a1225v1sa.hscall();
        } else {
            return hs_a1225v1sa;
        }
    };
    hs_a1325v1sc.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshow225v1sd.evaluateOnce = function () {
        if (hs_a1325v1sc.notEvaluated) {
            return hs_a1325v1sc.hscall();
        } else {
            return hs_a1325v1sc;
        }
    };
    hs_a1425v1se.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowsPrec225v1sf.evaluateOnce = function () {
        if (hs_a1425v1se.notEvaluated) {
            return hs_a1425v1se.hscall();
        } else {
            return hs_a1425v1se;
        }
    };
    this.hs_zdfShowCMode.data = [hs_a1425v1se, hs_a1325v1sc, hs_a1225v1sa];
    hs_a1525v1sg.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt64);
    };
    hs_zdcreadList325v1sh.evaluateOnce = function () {
        if (hs_a1525v1sg.notEvaluated) {
            return hs_a1525v1sg.hscall();
        } else {
            return hs_a1525v1sg;
        }
    };
    hs_a1625v1si.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt64);
    };
    hs_zdcreadsPrec325v1sj.evaluateOnce = function () {
        if (hs_a1625v1si.notEvaluated) {
            return hs_a1625v1si.hscall();
        } else {
            return hs_a1625v1si;
        }
    };
    this.hs_zdfReadCOff.data = [hs_a1625v1si, hs_a1525v1sg, hs_zdcreadPrec325v1sl, hs_zdcreadListPrec325v1sk];
    hs_zdcreadListPrec325v1sk.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCOff);
    };
    hs_zdcreadPrec325v1sl.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCOff);
    };
    hs_a1725v1sm.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt64);
    };
    hs_zdcshowList325v1sn.evaluateOnce = function () {
        if (hs_a1725v1sm.notEvaluated) {
            return hs_a1725v1sm.hscall();
        } else {
            return hs_a1725v1sm;
        }
    };
    hs_a1825v1so.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt64);
    };
    hs_zdcshow325v1sp.evaluateOnce = function () {
        if (hs_a1825v1so.notEvaluated) {
            return hs_a1825v1so.hscall();
        } else {
            return hs_a1825v1so;
        }
    };
    hs_a1925v1sq.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt64);
    };
    hs_zdcshowsPrec325v1sr.evaluateOnce = function () {
        if (hs_a1925v1sq.notEvaluated) {
            return hs_a1925v1sq.hscall();
        } else {
            return hs_a1925v1sq;
        }
    };
    this.hs_zdfShowCOff.data = [hs_a1925v1sq, hs_a1825v1so, hs_a1725v1sm];
    hs_a2025v1ss.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadList425v1st.evaluateOnce = function () {
        if (hs_a2025v1ss.notEvaluated) {
            return hs_a2025v1ss.hscall();
        } else {
            return hs_a2025v1ss;
        }
    };
    hs_a2125v1su.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadsPrec425v1sv.evaluateOnce = function () {
        if (hs_a2125v1su.notEvaluated) {
            return hs_a2125v1su.hscall();
        } else {
            return hs_a2125v1su;
        }
    };
    this.hs_zdfReadCPid.data = [hs_a2125v1su, hs_a2025v1ss, hs_zdcreadPrec425v1sx, hs_zdcreadListPrec425v1sw];
    hs_zdcreadListPrec425v1sw.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCPid);
    };
    hs_zdcreadPrec425v1sx.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCPid);
    };
    hs_a2225v1sy.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowList425v1sz.evaluateOnce = function () {
        if (hs_a2225v1sy.notEvaluated) {
            return hs_a2225v1sy.hscall();
        } else {
            return hs_a2225v1sy;
        }
    };
    hs_a2325v1sA.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshow425v1sB.evaluateOnce = function () {
        if (hs_a2325v1sA.notEvaluated) {
            return hs_a2325v1sA.hscall();
        } else {
            return hs_a2325v1sA;
        }
    };
    hs_a2425v1sC.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowsPrec425v1sD.evaluateOnce = function () {
        if (hs_a2425v1sC.notEvaluated) {
            return hs_a2425v1sC.hscall();
        } else {
            return hs_a2425v1sC;
        }
    };
    this.hs_zdfShowCPid.data = [hs_a2425v1sC, hs_a2325v1sA, hs_a2225v1sy];
    hs_a2525v1sE.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadList525v1sF.evaluateOnce = function () {
        if (hs_a2525v1sE.notEvaluated) {
            return hs_a2525v1sE.hscall();
        } else {
            return hs_a2525v1sE;
        }
    };
    hs_a2625v1sG.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadsPrec525v1sH.evaluateOnce = function () {
        if (hs_a2625v1sG.notEvaluated) {
            return hs_a2625v1sG.hscall();
        } else {
            return hs_a2625v1sG;
        }
    };
    this.hs_zdfReadCSsizze.data = [hs_a2625v1sG, hs_a2525v1sE, hs_zdcreadPrec525v1sJ, hs_zdcreadListPrec525v1sI];
    hs_zdcreadListPrec525v1sI.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCSsizze);
    };
    hs_zdcreadPrec525v1sJ.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCSsizze);
    };
    hs_a2725v1sK.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowList525v1sL.evaluateOnce = function () {
        if (hs_a2725v1sK.notEvaluated) {
            return hs_a2725v1sK.hscall();
        } else {
            return hs_a2725v1sK;
        }
    };
    hs_a2825v1sM.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshow525v1sN.evaluateOnce = function () {
        if (hs_a2825v1sM.notEvaluated) {
            return hs_a2825v1sM.hscall();
        } else {
            return hs_a2825v1sM;
        }
    };
    hs_a2925v1sO.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshowsPrec525v1sP.evaluateOnce = function () {
        if (hs_a2925v1sO.notEvaluated) {
            return hs_a2925v1sO.hscall();
        } else {
            return hs_a2925v1sO;
        }
    };
    this.hs_zdfShowCSsizze.data = [hs_a2925v1sO, hs_a2825v1sM, hs_a2725v1sK];
    hs_a3025v1sQ.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadList625v1sR.evaluateOnce = function () {
        if (hs_a3025v1sQ.notEvaluated) {
            return hs_a3025v1sQ.hscall();
        } else {
            return hs_a3025v1sQ;
        }
    };
    hs_a3125v1sS.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadsPrec625v1sT.evaluateOnce = function () {
        if (hs_a3125v1sS.notEvaluated) {
            return hs_a3125v1sS.hscall();
        } else {
            return hs_a3125v1sS;
        }
    };
    this.hs_zdfReadCGid.data = [hs_a3125v1sS, hs_a3025v1sQ, hs_zdcreadPrec625v1sV, hs_zdcreadListPrec625v1sU];
    hs_zdcreadListPrec625v1sU.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCGid);
    };
    hs_zdcreadPrec625v1sV.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCGid);
    };
    hs_a3225v1sW.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowList625v1sX.evaluateOnce = function () {
        if (hs_a3225v1sW.notEvaluated) {
            return hs_a3225v1sW.hscall();
        } else {
            return hs_a3225v1sW;
        }
    };
    hs_a3325v1sY.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshow625v1sZ.evaluateOnce = function () {
        if (hs_a3325v1sY.notEvaluated) {
            return hs_a3325v1sY.hscall();
        } else {
            return hs_a3325v1sY;
        }
    };
    hs_a3425v1t0.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowsPrec625v1t1.evaluateOnce = function () {
        if (hs_a3425v1t0.notEvaluated) {
            return hs_a3425v1t0.hscall();
        } else {
            return hs_a3425v1t0;
        }
    };
    this.hs_zdfShowCGid.data = [hs_a3425v1t0, hs_a3325v1sY, hs_a3225v1sW];
    hs_a3525v1t2.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadList725v1t3.evaluateOnce = function () {
        if (hs_a3525v1t2.notEvaluated) {
            return hs_a3525v1t2.hscall();
        } else {
            return hs_a3525v1t2;
        }
    };
    hs_a3625v1t4.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadsPrec725v1t5.evaluateOnce = function () {
        if (hs_a3625v1t4.notEvaluated) {
            return hs_a3625v1t4.hscall();
        } else {
            return hs_a3625v1t4;
        }
    };
    this.hs_zdfReadCNlink.data = [hs_a3625v1t4, hs_a3525v1t2, hs_zdcreadPrec725v1t7, hs_zdcreadListPrec725v1t6];
    hs_zdcreadListPrec725v1t6.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCNlink);
    };
    hs_zdcreadPrec725v1t7.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCNlink);
    };
    hs_a3725v1t8.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowList725v1t9.evaluateOnce = function () {
        if (hs_a3725v1t8.notEvaluated) {
            return hs_a3725v1t8.hscall();
        } else {
            return hs_a3725v1t8;
        }
    };
    hs_a3825v1ta.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshow725v1tb.evaluateOnce = function () {
        if (hs_a3825v1ta.notEvaluated) {
            return hs_a3825v1ta.hscall();
        } else {
            return hs_a3825v1ta;
        }
    };
    hs_a3925v1tc.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowsPrec725v1td.evaluateOnce = function () {
        if (hs_a3925v1tc.notEvaluated) {
            return hs_a3925v1tc.hscall();
        } else {
            return hs_a3925v1tc;
        }
    };
    this.hs_zdfShowCNlink.data = [hs_a3925v1tc, hs_a3825v1ta, hs_a3725v1t8];
    hs_a4025v1te.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadList825v1tf.evaluateOnce = function () {
        if (hs_a4025v1te.notEvaluated) {
            return hs_a4025v1te.hscall();
        } else {
            return hs_a4025v1te;
        }
    };
    hs_a4125v1tg.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadsPrec825v1th.evaluateOnce = function () {
        if (hs_a4125v1tg.notEvaluated) {
            return hs_a4125v1tg.hscall();
        } else {
            return hs_a4125v1tg;
        }
    };
    this.hs_zdfReadCUid.data = [hs_a4125v1tg, hs_a4025v1te, hs_zdcreadPrec825v1tj, hs_zdcreadListPrec825v1ti];
    hs_zdcreadListPrec825v1ti.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCUid);
    };
    hs_zdcreadPrec825v1tj.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCUid);
    };
    hs_a4225v1tk.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowList825v1tl.evaluateOnce = function () {
        if (hs_a4225v1tk.notEvaluated) {
            return hs_a4225v1tk.hscall();
        } else {
            return hs_a4225v1tk;
        }
    };
    hs_a4325v1tm.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshow825v1tn.evaluateOnce = function () {
        if (hs_a4325v1tm.notEvaluated) {
            return hs_a4325v1tm.hscall();
        } else {
            return hs_a4325v1tm;
        }
    };
    hs_a4425v1to.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowsPrec825v1tp.evaluateOnce = function () {
        if (hs_a4425v1to.notEvaluated) {
            return hs_a4425v1to.hscall();
        } else {
            return hs_a4425v1to;
        }
    };
    this.hs_zdfShowCUid.data = [hs_a4425v1to, hs_a4325v1tm, hs_a4225v1tk];
    hs_a4525v1tq.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord8);
    };
    hs_zdcreadList925v1tr.evaluateOnce = function () {
        if (hs_a4525v1tq.notEvaluated) {
            return hs_a4525v1tq.hscall();
        } else {
            return hs_a4525v1tq;
        }
    };
    hs_a4625v1ts.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord8);
    };
    hs_zdcreadsPrec925v1tt.evaluateOnce = function () {
        if (hs_a4625v1ts.notEvaluated) {
            return hs_a4625v1ts.hscall();
        } else {
            return hs_a4625v1ts;
        }
    };
    this.hs_zdfReadCCc.data = [hs_a4625v1ts, hs_a4525v1tq, hs_zdcreadPrec925v1tv, hs_zdcreadListPrec925v1tu];
    hs_zdcreadListPrec925v1tu.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCCc);
    };
    hs_zdcreadPrec925v1tv.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCCc);
    };
    hs_a4725v1tw.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord8);
    };
    hs_zdcshowList925v1tx.evaluateOnce = function () {
        if (hs_a4725v1tw.notEvaluated) {
            return hs_a4725v1tw.hscall();
        } else {
            return hs_a4725v1tw;
        }
    };
    hs_a4825v1ty.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord8);
    };
    hs_zdcshow925v1tz.evaluateOnce = function () {
        if (hs_a4825v1ty.notEvaluated) {
            return hs_a4825v1ty.hscall();
        } else {
            return hs_a4825v1ty;
        }
    };
    hs_a4925v1tA.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord8);
    };
    hs_zdcshowsPrec925v1tB.evaluateOnce = function () {
        if (hs_a4925v1tA.notEvaluated) {
            return hs_a4925v1tA.hscall();
        } else {
            return hs_a4925v1tA;
        }
    };
    this.hs_zdfShowCCc.data = [hs_a4925v1tA, hs_a4825v1ty, hs_a4725v1tw];
    hs_a5025v1tC.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadList1025v1tD.evaluateOnce = function () {
        if (hs_a5025v1tC.notEvaluated) {
            return hs_a5025v1tC.hscall();
        } else {
            return hs_a5025v1tC;
        }
    };
    hs_a5125v1tE.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadsPrec1025v1tF.evaluateOnce = function () {
        if (hs_a5125v1tE.notEvaluated) {
            return hs_a5125v1tE.hscall();
        } else {
            return hs_a5125v1tE;
        }
    };
    this.hs_zdfReadCSpeed.data = [hs_a5125v1tE, hs_a5025v1tC, hs_zdcreadPrec1025v1tH, hs_zdcreadListPrec1025v1tG];
    hs_zdcreadListPrec1025v1tG.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCSpeed);
    };
    hs_zdcreadPrec1025v1tH.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCSpeed);
    };
    hs_a5225v1tI.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowList1025v1tJ.evaluateOnce = function () {
        if (hs_a5225v1tI.notEvaluated) {
            return hs_a5225v1tI.hscall();
        } else {
            return hs_a5225v1tI;
        }
    };
    hs_a5325v1tK.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshow1025v1tL.evaluateOnce = function () {
        if (hs_a5325v1tK.notEvaluated) {
            return hs_a5325v1tK.hscall();
        } else {
            return hs_a5325v1tK;
        }
    };
    hs_a5425v1tM.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowsPrec1025v1tN.evaluateOnce = function () {
        if (hs_a5425v1tM.notEvaluated) {
            return hs_a5425v1tM.hscall();
        } else {
            return hs_a5425v1tM;
        }
    };
    this.hs_zdfShowCSpeed.data = [hs_a5425v1tM, hs_a5325v1tK, hs_a5225v1tI];
    hs_a5525v1tO.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadList1125v1tP.evaluateOnce = function () {
        if (hs_a5525v1tO.notEvaluated) {
            return hs_a5525v1tO.hscall();
        } else {
            return hs_a5525v1tO;
        }
    };
    hs_a5625v1tQ.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord32);
    };
    hs_zdcreadsPrec1125v1tR.evaluateOnce = function () {
        if (hs_a5625v1tQ.notEvaluated) {
            return hs_a5625v1tQ.hscall();
        } else {
            return hs_a5625v1tQ;
        }
    };
    this.hs_zdfReadCTcflag.data = [hs_a5625v1tQ, hs_a5525v1tO, hs_zdcreadPrec1125v1tT, hs_zdcreadListPrec1125v1tS];
    hs_zdcreadListPrec1125v1tS.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCTcflag);
    };
    hs_zdcreadPrec1125v1tT.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCTcflag);
    };
    hs_a5725v1tU.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowList1125v1tV.evaluateOnce = function () {
        if (hs_a5725v1tU.notEvaluated) {
            return hs_a5725v1tU.hscall();
        } else {
            return hs_a5725v1tU;
        }
    };
    hs_a5825v1tW.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshow1125v1tX.evaluateOnce = function () {
        if (hs_a5825v1tW.notEvaluated) {
            return hs_a5825v1tW.hscall();
        } else {
            return hs_a5825v1tW;
        }
    };
    hs_a5925v1tY.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord32);
    };
    hs_zdcshowsPrec1125v1tZ.evaluateOnce = function () {
        if (hs_a5925v1tY.notEvaluated) {
            return hs_a5925v1tY.hscall();
        } else {
            return hs_a5925v1tY;
        }
    };
    this.hs_zdfShowCTcflag.data = [hs_a5925v1tY, hs_a5825v1tW, hs_a5725v1tU];
    hs_a6025v1u0.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdcreadList1225v1u1.evaluateOnce = function () {
        if (hs_a6025v1u0.notEvaluated) {
            return hs_a6025v1u0.hscall();
        } else {
            return hs_a6025v1u0;
        }
    };
    hs_a6125v1u2.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord64);
    };
    hs_zdcreadsPrec1225v1u3.evaluateOnce = function () {
        if (hs_a6125v1u2.notEvaluated) {
            return hs_a6125v1u2.hscall();
        } else {
            return hs_a6125v1u2;
        }
    };
    this.hs_zdfReadCRLim.data = [hs_a6125v1u2, hs_a6025v1u0, hs_zdcreadPrec1225v1u5, hs_zdcreadListPrec1225v1u4];
    hs_zdcreadListPrec1225v1u4.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCRLim);
    };
    hs_zdcreadPrec1225v1u5.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadCRLim);
    };
    hs_a6225v1u6.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshowList1225v1u7.evaluateOnce = function () {
        if (hs_a6225v1u6.notEvaluated) {
            return hs_a6225v1u6.hscall();
        } else {
            return hs_a6225v1u6;
        }
    };
    hs_a6325v1u8.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshow1225v1u9.evaluateOnce = function () {
        if (hs_a6325v1u8.notEvaluated) {
            return hs_a6325v1u8.hscall();
        } else {
            return hs_a6325v1u8;
        }
    };
    hs_a6425v1ua.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord64);
    };
    hs_zdcshowsPrec1225v1ub.evaluateOnce = function () {
        if (hs_a6425v1ua.notEvaluated) {
            return hs_a6425v1ua.hscall();
        } else {
            return hs_a6425v1ua;
        }
    };
    this.hs_zdfShowCRLim.data = [hs_a6425v1ua, hs_a6325v1u8, hs_a6225v1u6];
    hs_a6525v1uc.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCInt);
    };
    hs_zdcreadList1325v1ud.evaluateOnce = function () {
        if (hs_a6525v1uc.notEvaluated) {
            return hs_a6525v1uc.hscall();
        } else {
            return hs_a6525v1uc;
        }
    };
    hs_a6625v1ue.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfReadCInt);
    };
    hs_zdcreadsPrec1325v1uf.evaluateOnce = function () {
        if (hs_a6625v1ue.notEvaluated) {
            return hs_a6625v1ue.hscall();
        } else {
            return hs_a6625v1ue;
        }
    };
    this.hs_zdfReadFd.data = [hs_a6625v1ue, hs_a6525v1uc, hs_zdcreadPrec1325v1uh, hs_zdcreadListPrec1325v1ug];
    hs_zdcreadListPrec1325v1ug.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadFd);
    };
    hs_zdcreadPrec1325v1uh.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfReadFd);
    };
    hs_a6725v1ui.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.ForeignziCziTypes.hs_zdfShowCInt);
    };
    hs_zdcshowList1325v1uj.evaluateOnce = function () {
        if (hs_a6725v1ui.notEvaluated) {
            return hs_a6725v1ui.hscall();
        } else {
            return hs_a6725v1ui;
        }
    };
    hs_a6825v1uk.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.ForeignziCziTypes.hs_zdfShowCInt);
    };
    hs_zdcshow1325v1ul.evaluateOnce = function () {
        if (hs_a6825v1uk.notEvaluated) {
            return hs_a6825v1uk.hscall();
        } else {
            return hs_a6825v1uk;
        }
    };
    hs_a6925v1um.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfShowCInt);
    };
    hs_zdcshowsPrec1325v1un.evaluateOnce = function () {
        if (hs_a6925v1um.notEvaluated) {
            return hs_a6925v1um.hscall();
        } else {
            return hs_a6925v1um;
        }
    };
    this.hs_zdfShowFd.data = [hs_a6925v1um, hs_a6825v1uk, hs_a6725v1ui];
    hs_a7025v1uo.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdczizazi25v1up.evaluateOnce = function () {
        if (hs_a7025v1uo.notEvaluated) {
            return hs_a7025v1uo.hscall();
        } else {
            return hs_a7025v1uo;
        }
    };
    hs_a7125v1uq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdczizbzi25v1ur.evaluateOnce = function () {
        if (hs_a7125v1uq.notEvaluated) {
            return hs_a7125v1uq.hscall();
        } else {
            return hs_a7125v1uq;
        }
    };
    hs_a7225v1us.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdcxor25v1ut.evaluateOnce = function () {
        if (hs_a7225v1us.notEvaluated) {
            return hs_a7225v1us.hscall();
        } else {
            return hs_a7225v1us;
        }
    };
    hs_a7325v1uu.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdccomplement25v1uv.evaluateOnce = function () {
        if (hs_a7325v1uu.notEvaluated) {
            return hs_a7325v1uu.hscall();
        } else {
            return hs_a7325v1uu;
        }
    };
    hs_a7425v1uw.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdcshift25v1ux.evaluateOnce = function () {
        if (hs_a7425v1uw.notEvaluated) {
            return hs_a7425v1uw.hscall();
        } else {
            return hs_a7425v1uw;
        }
    };
    hs_a7525v1uy.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdcrotate25v1uz.evaluateOnce = function () {
        if (hs_a7525v1uy.notEvaluated) {
            return hs_a7525v1uy.hscall();
        } else {
            return hs_a7525v1uy;
        }
    };
    hs_a7625v1uA.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdcbit25v1uB.evaluateOnce = function () {
        if (hs_a7625v1uA.notEvaluated) {
            return hs_a7625v1uA.hscall();
        } else {
            return hs_a7625v1uA;
        }
    };
    hs_a7725v1uC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdcsetBit25v1uD.evaluateOnce = function () {
        if (hs_a7725v1uC.notEvaluated) {
            return hs_a7725v1uC.hscall();
        } else {
            return hs_a7725v1uC;
        }
    };
    hs_a7825v1uE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdcclearBit25v1uF.evaluateOnce = function () {
        if (hs_a7825v1uE.notEvaluated) {
            return hs_a7825v1uE.hscall();
        } else {
            return hs_a7825v1uE;
        }
    };
    hs_a7925v1uG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdccomplementBit25v1uH.evaluateOnce = function () {
        if (hs_a7925v1uG.notEvaluated) {
            return hs_a7925v1uG.hscall();
        } else {
            return hs_a7925v1uG;
        }
    };
    hs_a8025v1uI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdctestBit25v1uJ.evaluateOnce = function () {
        if (hs_a8025v1uI.notEvaluated) {
            return hs_a8025v1uI.hscall();
        } else {
            return hs_a8025v1uI;
        }
    };
    hs_a8125v1uK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdcbitSizze25v1uL.evaluateOnce = function () {
        if (hs_a8125v1uK.notEvaluated) {
            return hs_a8125v1uK.hscall();
        } else {
            return hs_a8125v1uK;
        }
    };
    hs_a8225v1uM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdcisSigned25v1uN.evaluateOnce = function () {
        if (hs_a8225v1uM.notEvaluated) {
            return hs_a8225v1uM.hscall();
        } else {
            return hs_a8225v1uM;
        }
    };
    hs_a8325v1uO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdcshiftL25v1uP.evaluateOnce = function () {
        if (hs_a8325v1uO.notEvaluated) {
            return hs_a8325v1uO.hscall();
        } else {
            return hs_a8325v1uO;
        }
    };
    hs_a8425v1uQ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdcshiftR25v1uR.evaluateOnce = function () {
        if (hs_a8425v1uQ.notEvaluated) {
            return hs_a8425v1uQ.hscall();
        } else {
            return hs_a8425v1uQ;
        }
    };
    hs_a8525v1uS.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdcrotateL25v1uT.evaluateOnce = function () {
        if (hs_a8525v1uS.notEvaluated) {
            return hs_a8525v1uS.hscall();
        } else {
            return hs_a8525v1uS;
        }
    };
    hs_a8625v1uU.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt);
    };
    hs_zdcrotateR25v1uV.evaluateOnce = function () {
        if (hs_a8625v1uU.notEvaluated) {
            return hs_a8625v1uU.hscall();
        } else {
            return hs_a8625v1uU;
        }
    };
    hs_a8725v1uW.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt);
    };
    hs_zdcquot25v1uX.evaluateOnce = function () {
        if (hs_a8725v1uW.notEvaluated) {
            return hs_a8725v1uW.hscall();
        } else {
            return hs_a8725v1uW;
        }
    };
    hs_a8825v1uY.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt);
    };
    hs_zdcrem25v1uZ.evaluateOnce = function () {
        if (hs_a8825v1uY.notEvaluated) {
            return hs_a8825v1uY.hscall();
        } else {
            return hs_a8825v1uY;
        }
    };
    hs_a8925v1v0.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt);
    };
    hs_zdcdiv25v1v1.evaluateOnce = function () {
        if (hs_a8925v1v0.notEvaluated) {
            return hs_a8925v1v0.hscall();
        } else {
            return hs_a8925v1v0;
        }
    };
    hs_a9025v1v2.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt);
    };
    hs_zdcmod25v1v3.evaluateOnce = function () {
        if (hs_a9025v1v2.notEvaluated) {
            return hs_a9025v1v2.hscall();
        } else {
            return hs_a9025v1v2;
        }
    };
    hs_a9125v1v4.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt);
    };
    hs_zdcquotRem25v1v5.evaluateOnce = function () {
        if (hs_a9125v1v4.notEvaluated) {
            return hs_a9125v1v4.hscall();
        } else {
            return hs_a9125v1v4;
        }
    };
    hs_a9225v1v6.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt);
    };
    hs_zdcdivMod25v1v7.evaluateOnce = function () {
        if (hs_a9225v1v6.notEvaluated) {
            return hs_a9225v1v6.hscall();
        } else {
            return hs_a9225v1v6;
        }
    };
    hs_a9325v1v8.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt);
    };
    hs_zdctoInteger25v1v9.evaluateOnce = function () {
        if (hs_a9325v1v8.notEvaluated) {
            return hs_a9325v1v8.hscall();
        } else {
            return hs_a9325v1v8;
        }
    };
    hs_a9425v1va.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.ForeignziCziTypes.hs_zdfBoundedCInt);
    };
    hs_zdcminBound25v1vb.evaluateOnce = function () {
        if (hs_a9425v1va.notEvaluated) {
            return hs_a9425v1va.hscall();
        } else {
            return hs_a9425v1va;
        }
    };
    hs_a9525v1vc.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.ForeignziCziTypes.hs_zdfBoundedCInt);
    };
    hs_zdcmaxBound25v1vd.evaluateOnce = function () {
        if (hs_a9525v1vc.notEvaluated) {
            return hs_a9525v1vc.hscall();
        } else {
            return hs_a9525v1vc;
        }
    };
    this.hs_zdfBoundedFd.data = [hs_a9425v1va, hs_a9525v1vc];
    hs_a9625v1ve.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.ForeignziCziTypes.hs_zdfRealCInt);
    };
    hs_zdctoRational25v1vf.evaluateOnce = function () {
        if (hs_a9625v1ve.notEvaluated) {
            return hs_a9625v1ve.hscall();
        } else {
            return hs_a9625v1ve;
        }
    };
    hs_a9725v1vg.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCInt);
    };
    hs_zdcsizzeOf25v1vh.evaluateOnce = function () {
        if (hs_a9725v1vg.notEvaluated) {
            return hs_a9725v1vg.hscall();
        } else {
            return hs_a9725v1vg;
        }
    };
    hs_a9825v1vi.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCInt);
    };
    hs_zdcalignment25v1vj.evaluateOnce = function () {
        if (hs_a9825v1vi.notEvaluated) {
            return hs_a9825v1vi.hscall();
        } else {
            return hs_a9825v1vi;
        }
    };
    hs_a9925v1vk.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCInt);
    };
    hs_zdcpeekElemOff25v1vl.evaluateOnce = function () {
        if (hs_a9925v1vk.notEvaluated) {
            return hs_a9925v1vk.hscall();
        } else {
            return hs_a9925v1vk;
        }
    };
    hs_a10025v1vm.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCInt);
    };
    hs_zdcpokeElemOff25v1vn.evaluateOnce = function () {
        if (hs_a10025v1vm.notEvaluated) {
            return hs_a10025v1vm.hscall();
        } else {
            return hs_a10025v1vm;
        }
    };
    hs_a10125v1vo.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCInt);
    };
    hs_zdcpeekByteOff25v1vp.evaluateOnce = function () {
        if (hs_a10125v1vo.notEvaluated) {
            return hs_a10125v1vo.hscall();
        } else {
            return hs_a10125v1vo;
        }
    };
    hs_a10225v1vq.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCInt);
    };
    hs_zdcpokeByteOff25v1vr.evaluateOnce = function () {
        if (hs_a10225v1vq.notEvaluated) {
            return hs_a10225v1vq.hscall();
        } else {
            return hs_a10225v1vq;
        }
    };
    hs_a10325v1vs.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCInt);
    };
    hs_zdcpeek25v1vt.evaluateOnce = function () {
        if (hs_a10325v1vs.notEvaluated) {
            return hs_a10325v1vs.hscall();
        } else {
            return hs_a10325v1vs;
        }
    };
    hs_a10425v1vu.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCInt);
    };
    hs_zdcpoke25v1vv.evaluateOnce = function () {
        if (hs_a10425v1vu.notEvaluated) {
            return hs_a10425v1vu.hscall();
        } else {
            return hs_a10425v1vu;
        }
    };
    this.hs_zdfStorableFd.data = [hs_a9725v1vg, hs_a9825v1vi, hs_a9925v1vk, hs_a10025v1vm, hs_a10125v1vo, hs_a10225v1vq, hs_a10325v1vs, hs_a10425v1vu];
    hs_a10525v1vw.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.ForeignziCziTypes.hs_zdfEnumCInt);
    };
    hs_zdcsucc25v1vx.evaluateOnce = function () {
        if (hs_a10525v1vw.notEvaluated) {
            return hs_a10525v1vw.hscall();
        } else {
            return hs_a10525v1vw;
        }
    };
    hs_a10625v1vy.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.ForeignziCziTypes.hs_zdfEnumCInt);
    };
    hs_zdcpred25v1vz.evaluateOnce = function () {
        if (hs_a10625v1vy.notEvaluated) {
            return hs_a10625v1vy.hscall();
        } else {
            return hs_a10625v1vy;
        }
    };
    hs_a10725v1vA.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.ForeignziCziTypes.hs_zdfEnumCInt);
    };
    hs_zdctoEnum25v1vB.evaluateOnce = function () {
        if (hs_a10725v1vA.notEvaluated) {
            return hs_a10725v1vA.hscall();
        } else {
            return hs_a10725v1vA;
        }
    };
    hs_a10825v1vC.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.ForeignziCziTypes.hs_zdfEnumCInt);
    };
    hs_zdcfromEnum25v1vD.evaluateOnce = function () {
        if (hs_a10825v1vC.notEvaluated) {
            return hs_a10825v1vC.hscall();
        } else {
            return hs_a10825v1vC;
        }
    };
    hs_a10925v1vE.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.ForeignziCziTypes.hs_zdfEnumCInt);
    };
    hs_zdcenumFrom25v1vF.evaluateOnce = function () {
        if (hs_a10925v1vE.notEvaluated) {
            return hs_a10925v1vE.hscall();
        } else {
            return hs_a10925v1vE;
        }
    };
    hs_a11025v1vG.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.ForeignziCziTypes.hs_zdfEnumCInt);
    };
    hs_zdcenumFromThen25v1vH.evaluateOnce = function () {
        if (hs_a11025v1vG.notEvaluated) {
            return hs_a11025v1vG.hscall();
        } else {
            return hs_a11025v1vG;
        }
    };
    hs_a11125v1vI.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.ForeignziCziTypes.hs_zdfEnumCInt);
    };
    hs_zdcenumFromTo25v1vJ.evaluateOnce = function () {
        if (hs_a11125v1vI.notEvaluated) {
            return hs_a11125v1vI.hscall();
        } else {
            return hs_a11125v1vI;
        }
    };
    hs_a11225v1vK.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.ForeignziCziTypes.hs_zdfEnumCInt);
    };
    hs_zdcenumFromThenTo25v1vL.evaluateOnce = function () {
        if (hs_a11225v1vK.notEvaluated) {
            return hs_a11225v1vK.hscall();
        } else {
            return hs_a11225v1vK;
        }
    };
    this.hs_zdfEnumFd.data = [hs_a10525v1vw, hs_a10625v1vy, hs_a10725v1vA, hs_a10825v1vC, hs_a10925v1vE, hs_a11025v1vG, hs_a11125v1vI, hs_a11225v1vK];
    hs_a11325v1vM.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
    };
    hs_zdczp25v1vN.evaluateOnce = function () {
        if (hs_a11325v1vM.notEvaluated) {
            return hs_a11325v1vM.hscall();
        } else {
            return hs_a11325v1vM;
        }
    };
    hs_a11425v1vO.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
    };
    hs_zdczt25v1vP.evaluateOnce = function () {
        if (hs_a11425v1vO.notEvaluated) {
            return hs_a11425v1vO.hscall();
        } else {
            return hs_a11425v1vO;
        }
    };
    hs_a11525v1vQ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
    };
    hs_zdczm25v1vR.evaluateOnce = function () {
        if (hs_a11525v1vQ.notEvaluated) {
            return hs_a11525v1vQ.hscall();
        } else {
            return hs_a11525v1vQ;
        }
    };
    hs_a11625v1vS.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
    };
    hs_zdcnegate25v1vT.evaluateOnce = function () {
        if (hs_a11625v1vS.notEvaluated) {
            return hs_a11625v1vS.hscall();
        } else {
            return hs_a11625v1vS;
        }
    };
    hs_a11725v1vU.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
    };
    hs_zdcabs25v1vV.evaluateOnce = function () {
        if (hs_a11725v1vU.notEvaluated) {
            return hs_a11725v1vU.hscall();
        } else {
            return hs_a11725v1vU;
        }
    };
    hs_a11825v1vW.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
    };
    hs_zdcsignum25v1vX.evaluateOnce = function () {
        if (hs_a11825v1vW.notEvaluated) {
            return hs_a11825v1vW.hscall();
        } else {
            return hs_a11825v1vW;
        }
    };
    hs_a11925v1vY.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt);
    };
    hs_zdcfromInteger25v1vZ.evaluateOnce = function () {
        if (hs_a11925v1vY.notEvaluated) {
            return hs_a11925v1vY.hscall();
        } else {
            return hs_a11925v1vY;
        }
    };
    hs_a12025v1w0.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.ForeignziCziTypes.hs_zdfOrdCInt);
    };
    hs_zdccompare25v1w1.evaluateOnce = function () {
        if (hs_a12025v1w0.notEvaluated) {
            return hs_a12025v1w0.hscall();
        } else {
            return hs_a12025v1w0;
        }
    };
    hs_a12125v1w2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.ForeignziCziTypes.hs_zdfOrdCInt);
    };
    hs_zdczl25v1w3.evaluateOnce = function () {
        if (hs_a12125v1w2.notEvaluated) {
            return hs_a12125v1w2.hscall();
        } else {
            return hs_a12125v1w2;
        }
    };
    hs_a12225v1w4.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.ForeignziCziTypes.hs_zdfOrdCInt);
    };
    hs_zdczgze25v1w5.evaluateOnce = function () {
        if (hs_a12225v1w4.notEvaluated) {
            return hs_a12225v1w4.hscall();
        } else {
            return hs_a12225v1w4;
        }
    };
    hs_a12325v1w6.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.ForeignziCziTypes.hs_zdfOrdCInt);
    };
    hs_zdczg25v1w7.evaluateOnce = function () {
        if (hs_a12325v1w6.notEvaluated) {
            return hs_a12325v1w6.hscall();
        } else {
            return hs_a12325v1w6;
        }
    };
    hs_a12425v1w8.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.ForeignziCziTypes.hs_zdfOrdCInt);
    };
    hs_zdczlze25v1w9.evaluateOnce = function () {
        if (hs_a12425v1w8.notEvaluated) {
            return hs_a12425v1w8.hscall();
        } else {
            return hs_a12425v1w8;
        }
    };
    hs_a12525v1wa.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.ForeignziCziTypes.hs_zdfOrdCInt);
    };
    hs_zdcmax25v1wb.evaluateOnce = function () {
        if (hs_a12525v1wa.notEvaluated) {
            return hs_a12525v1wa.hscall();
        } else {
            return hs_a12525v1wa;
        }
    };
    hs_a12625v1wc.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.ForeignziCziTypes.hs_zdfOrdCInt);
    };
    hs_zdcmin25v1wd.evaluateOnce = function () {
        if (hs_a12625v1wc.notEvaluated) {
            return hs_a12625v1wc.hscall();
        } else {
            return hs_a12625v1wc;
        }
    };
    hs_a12725v1we.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt);
    };
    hs_zdczeze25v1wf.evaluateOnce = function () {
        if (hs_a12725v1we.notEvaluated) {
            return hs_a12725v1we.hscall();
        } else {
            return hs_a12725v1we;
        }
    };
    hs_a12825v1wg.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt);
    };
    hs_zdczsze25v1wh.evaluateOnce = function () {
        if (hs_a12825v1wg.notEvaluated) {
            return hs_a12825v1wg.hscall();
        } else {
            return hs_a12825v1wg;
        }
    };
    this.hs_zdfEqFd.data = [hs_a12725v1we, hs_a12825v1wg];
    this.hs_zdfOrdFd.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqFd, hs_a12025v1w0, hs_a12125v1w2, hs_a12225v1w4, hs_a12325v1w6, hs_a12425v1w8, hs_a12525v1wa, hs_a12625v1wc];
    this.hs_zdfNumFd.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqFd, $hs.modules.SystemziPosixziTypes.hs_zdfShowFd, hs_a11325v1vM, hs_a11425v1vO, hs_a11525v1vQ, hs_a11625v1vS, hs_a11725v1vU, hs_a11825v1vW, hs_a11925v1vY];
    this.hs_zdfRealFd.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumFd, $hs.modules.SystemziPosixziTypes.hs_zdfOrdFd, hs_a9625v1ve];
    this.hs_zdfIntegralFd.data = [$hs.modules.SystemziPosixziTypes.hs_zdfRealFd, $hs.modules.SystemziPosixziTypes.hs_zdfEnumFd, hs_a8725v1uW, hs_a8825v1uY, hs_a8925v1v0, hs_a9025v1v2, hs_a9125v1v4, hs_a9225v1v6, hs_a9325v1v8];
    this.hs_zdfBitsFd.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumFd, hs_a7025v1uo, hs_a7125v1uq, hs_a7225v1us, hs_a7325v1uu, hs_a7425v1uw, hs_a7525v1uy, hs_a7625v1uA, hs_a7725v1uC, hs_a7825v1uE, hs_a7925v1uG, hs_a8025v1uI, hs_a8125v1uK, hs_a8225v1uM, hs_a8325v1uO, hs_a8425v1uQ, hs_a8525v1uS, hs_a8625v1uU];
    hs_a12925v1wi.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdczizazi125v1wj.evaluateOnce = function () {
        if (hs_a12925v1wi.notEvaluated) {
            return hs_a12925v1wi.hscall();
        } else {
            return hs_a12925v1wi;
        }
    };
    hs_a13025v1wk.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdczizbzi125v1wl.evaluateOnce = function () {
        if (hs_a13025v1wk.notEvaluated) {
            return hs_a13025v1wk.hscall();
        } else {
            return hs_a13025v1wk;
        }
    };
    hs_a13125v1wm.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcxor125v1wn.evaluateOnce = function () {
        if (hs_a13125v1wm.notEvaluated) {
            return hs_a13125v1wm.hscall();
        } else {
            return hs_a13125v1wm;
        }
    };
    hs_a13225v1wo.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdccomplement125v1wp.evaluateOnce = function () {
        if (hs_a13225v1wo.notEvaluated) {
            return hs_a13225v1wo.hscall();
        } else {
            return hs_a13225v1wo;
        }
    };
    hs_a13325v1wq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshift125v1wr.evaluateOnce = function () {
        if (hs_a13325v1wq.notEvaluated) {
            return hs_a13325v1wq.hscall();
        } else {
            return hs_a13325v1wq;
        }
    };
    hs_a13425v1ws.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotate125v1wt.evaluateOnce = function () {
        if (hs_a13425v1ws.notEvaluated) {
            return hs_a13425v1ws.hscall();
        } else {
            return hs_a13425v1ws;
        }
    };
    hs_a13525v1wu.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcbit125v1wv.evaluateOnce = function () {
        if (hs_a13525v1wu.notEvaluated) {
            return hs_a13525v1wu.hscall();
        } else {
            return hs_a13525v1wu;
        }
    };
    hs_a13625v1ww.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcsetBit125v1wx.evaluateOnce = function () {
        if (hs_a13625v1ww.notEvaluated) {
            return hs_a13625v1ww.hscall();
        } else {
            return hs_a13625v1ww;
        }
    };
    hs_a13725v1wy.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcclearBit125v1wz.evaluateOnce = function () {
        if (hs_a13725v1wy.notEvaluated) {
            return hs_a13725v1wy.hscall();
        } else {
            return hs_a13725v1wy;
        }
    };
    hs_a13825v1wA.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdccomplementBit125v1wB.evaluateOnce = function () {
        if (hs_a13825v1wA.notEvaluated) {
            return hs_a13825v1wA.hscall();
        } else {
            return hs_a13825v1wA;
        }
    };
    hs_a13925v1wC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdctestBit125v1wD.evaluateOnce = function () {
        if (hs_a13925v1wC.notEvaluated) {
            return hs_a13925v1wC.hscall();
        } else {
            return hs_a13925v1wC;
        }
    };
    hs_a14025v1wE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcbitSizze125v1wF.evaluateOnce = function () {
        if (hs_a14025v1wE.notEvaluated) {
            return hs_a14025v1wE.hscall();
        } else {
            return hs_a14025v1wE;
        }
    };
    hs_a14125v1wG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcisSigned125v1wH.evaluateOnce = function () {
        if (hs_a14125v1wG.notEvaluated) {
            return hs_a14125v1wG.hscall();
        } else {
            return hs_a14125v1wG;
        }
    };
    hs_a14225v1wI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshiftL125v1wJ.evaluateOnce = function () {
        if (hs_a14225v1wI.notEvaluated) {
            return hs_a14225v1wI.hscall();
        } else {
            return hs_a14225v1wI;
        }
    };
    hs_a14325v1wK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshiftR125v1wL.evaluateOnce = function () {
        if (hs_a14325v1wK.notEvaluated) {
            return hs_a14325v1wK.hscall();
        } else {
            return hs_a14325v1wK;
        }
    };
    hs_a14425v1wM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotateL125v1wN.evaluateOnce = function () {
        if (hs_a14425v1wM.notEvaluated) {
            return hs_a14425v1wM.hscall();
        } else {
            return hs_a14425v1wM;
        }
    };
    hs_a14525v1wO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotateR125v1wP.evaluateOnce = function () {
        if (hs_a14525v1wO.notEvaluated) {
            return hs_a14525v1wO.hscall();
        } else {
            return hs_a14525v1wO;
        }
    };
    hs_a14625v1wQ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcquot125v1wR.evaluateOnce = function () {
        if (hs_a14625v1wQ.notEvaluated) {
            return hs_a14625v1wQ.hscall();
        } else {
            return hs_a14625v1wQ;
        }
    };
    hs_a14725v1wS.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcrem125v1wT.evaluateOnce = function () {
        if (hs_a14725v1wS.notEvaluated) {
            return hs_a14725v1wS.hscall();
        } else {
            return hs_a14725v1wS;
        }
    };
    hs_a14825v1wU.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcdiv125v1wV.evaluateOnce = function () {
        if (hs_a14825v1wU.notEvaluated) {
            return hs_a14825v1wU.hscall();
        } else {
            return hs_a14825v1wU;
        }
    };
    hs_a14925v1wW.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcmod125v1wX.evaluateOnce = function () {
        if (hs_a14925v1wW.notEvaluated) {
            return hs_a14925v1wW.hscall();
        } else {
            return hs_a14925v1wW;
        }
    };
    hs_a15025v1wY.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcquotRem125v1wZ.evaluateOnce = function () {
        if (hs_a15025v1wY.notEvaluated) {
            return hs_a15025v1wY.hscall();
        } else {
            return hs_a15025v1wY;
        }
    };
    hs_a15125v1x0.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcdivMod125v1x1.evaluateOnce = function () {
        if (hs_a15125v1x0.notEvaluated) {
            return hs_a15125v1x0.hscall();
        } else {
            return hs_a15125v1x0;
        }
    };
    hs_a15225v1x2.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdctoInteger125v1x3.evaluateOnce = function () {
        if (hs_a15225v1x2.notEvaluated) {
            return hs_a15225v1x2.hscall();
        } else {
            return hs_a15225v1x2;
        }
    };
    hs_a15325v1x4.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord64);
    };
    hs_zdcminBound125v1x5.evaluateOnce = function () {
        if (hs_a15325v1x4.notEvaluated) {
            return hs_a15325v1x4.hscall();
        } else {
            return hs_a15325v1x4;
        }
    };
    hs_a15425v1x6.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord64);
    };
    hs_zdcmaxBound125v1x7.evaluateOnce = function () {
        if (hs_a15425v1x6.notEvaluated) {
            return hs_a15425v1x6.hscall();
        } else {
            return hs_a15425v1x6;
        }
    };
    this.hs_zdfBoundedCRLim.data = [hs_a15325v1x4, hs_a15425v1x6];
    hs_a15525v1x8.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord64);
    };
    hs_zdctoRational125v1x9.evaluateOnce = function () {
        if (hs_a15525v1x8.notEvaluated) {
            return hs_a15525v1x8.hscall();
        } else {
            return hs_a15525v1x8;
        }
    };
    hs_a15625v1xa.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcsizzeOf125v1xb.evaluateOnce = function () {
        if (hs_a15625v1xa.notEvaluated) {
            return hs_a15625v1xa.hscall();
        } else {
            return hs_a15625v1xa;
        }
    };
    hs_a15725v1xc.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcalignment125v1xd.evaluateOnce = function () {
        if (hs_a15725v1xc.notEvaluated) {
            return hs_a15725v1xc.hscall();
        } else {
            return hs_a15725v1xc;
        }
    };
    hs_a15825v1xe.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeekElemOff125v1xf.evaluateOnce = function () {
        if (hs_a15825v1xe.notEvaluated) {
            return hs_a15825v1xe.hscall();
        } else {
            return hs_a15825v1xe;
        }
    };
    hs_a15925v1xg.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpokeElemOff125v1xh.evaluateOnce = function () {
        if (hs_a15925v1xg.notEvaluated) {
            return hs_a15925v1xg.hscall();
        } else {
            return hs_a15925v1xg;
        }
    };
    hs_a16025v1xi.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeekByteOff125v1xj.evaluateOnce = function () {
        if (hs_a16025v1xi.notEvaluated) {
            return hs_a16025v1xi.hscall();
        } else {
            return hs_a16025v1xi;
        }
    };
    hs_a16125v1xk.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpokeByteOff125v1xl.evaluateOnce = function () {
        if (hs_a16125v1xk.notEvaluated) {
            return hs_a16125v1xk.hscall();
        } else {
            return hs_a16125v1xk;
        }
    };
    hs_a16225v1xm.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeek125v1xn.evaluateOnce = function () {
        if (hs_a16225v1xm.notEvaluated) {
            return hs_a16225v1xm.hscall();
        } else {
            return hs_a16225v1xm;
        }
    };
    hs_a16325v1xo.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpoke125v1xp.evaluateOnce = function () {
        if (hs_a16325v1xo.notEvaluated) {
            return hs_a16325v1xo.hscall();
        } else {
            return hs_a16325v1xo;
        }
    };
    this.hs_zdfStorableCRLim.data = [hs_a15625v1xa, hs_a15725v1xc, hs_a15825v1xe, hs_a15925v1xg, hs_a16025v1xi, hs_a16125v1xk, hs_a16225v1xm, hs_a16325v1xo];
    hs_a16425v1xq.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcsucc125v1xr.evaluateOnce = function () {
        if (hs_a16425v1xq.notEvaluated) {
            return hs_a16425v1xq.hscall();
        } else {
            return hs_a16425v1xq;
        }
    };
    hs_a16525v1xs.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcpred125v1xt.evaluateOnce = function () {
        if (hs_a16525v1xs.notEvaluated) {
            return hs_a16525v1xs.hscall();
        } else {
            return hs_a16525v1xs;
        }
    };
    hs_a16625v1xu.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdctoEnum125v1xv.evaluateOnce = function () {
        if (hs_a16625v1xu.notEvaluated) {
            return hs_a16625v1xu.hscall();
        } else {
            return hs_a16625v1xu;
        }
    };
    hs_a16725v1xw.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcfromEnum125v1xx.evaluateOnce = function () {
        if (hs_a16725v1xw.notEvaluated) {
            return hs_a16725v1xw.hscall();
        } else {
            return hs_a16725v1xw;
        }
    };
    hs_a16825v1xy.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFrom125v1xz.evaluateOnce = function () {
        if (hs_a16825v1xy.notEvaluated) {
            return hs_a16825v1xy.hscall();
        } else {
            return hs_a16825v1xy;
        }
    };
    hs_a16925v1xA.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromThen125v1xB.evaluateOnce = function () {
        if (hs_a16925v1xA.notEvaluated) {
            return hs_a16925v1xA.hscall();
        } else {
            return hs_a16925v1xA;
        }
    };
    hs_a17025v1xC.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromTo125v1xD.evaluateOnce = function () {
        if (hs_a17025v1xC.notEvaluated) {
            return hs_a17025v1xC.hscall();
        } else {
            return hs_a17025v1xC;
        }
    };
    hs_a17125v1xE.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromThenTo125v1xF.evaluateOnce = function () {
        if (hs_a17125v1xE.notEvaluated) {
            return hs_a17125v1xE.hscall();
        } else {
            return hs_a17125v1xE;
        }
    };
    this.hs_zdfEnumCRLim.data = [hs_a16425v1xq, hs_a16525v1xs, hs_a16625v1xu, hs_a16725v1xw, hs_a16825v1xy, hs_a16925v1xA, hs_a17025v1xC, hs_a17125v1xE];
    hs_a17225v1xG.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczp125v1xH.evaluateOnce = function () {
        if (hs_a17225v1xG.notEvaluated) {
            return hs_a17225v1xG.hscall();
        } else {
            return hs_a17225v1xG;
        }
    };
    hs_a17325v1xI.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczt125v1xJ.evaluateOnce = function () {
        if (hs_a17325v1xI.notEvaluated) {
            return hs_a17325v1xI.hscall();
        } else {
            return hs_a17325v1xI;
        }
    };
    hs_a17425v1xK.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczm125v1xL.evaluateOnce = function () {
        if (hs_a17425v1xK.notEvaluated) {
            return hs_a17425v1xK.hscall();
        } else {
            return hs_a17425v1xK;
        }
    };
    hs_a17525v1xM.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcnegate125v1xN.evaluateOnce = function () {
        if (hs_a17525v1xM.notEvaluated) {
            return hs_a17525v1xM.hscall();
        } else {
            return hs_a17525v1xM;
        }
    };
    hs_a17625v1xO.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcabs125v1xP.evaluateOnce = function () {
        if (hs_a17625v1xO.notEvaluated) {
            return hs_a17625v1xO.hscall();
        } else {
            return hs_a17625v1xO;
        }
    };
    hs_a17725v1xQ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcsignum125v1xR.evaluateOnce = function () {
        if (hs_a17725v1xQ.notEvaluated) {
            return hs_a17725v1xQ.hscall();
        } else {
            return hs_a17725v1xQ;
        }
    };
    hs_a17825v1xS.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcfromInteger125v1xT.evaluateOnce = function () {
        if (hs_a17825v1xS.notEvaluated) {
            return hs_a17825v1xS.hscall();
        } else {
            return hs_a17825v1xS;
        }
    };
    hs_a17925v1xU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdccompare125v1xV.evaluateOnce = function () {
        if (hs_a17925v1xU.notEvaluated) {
            return hs_a17925v1xU.hscall();
        } else {
            return hs_a17925v1xU;
        }
    };
    hs_a18025v1xW.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczl125v1xX.evaluateOnce = function () {
        if (hs_a18025v1xW.notEvaluated) {
            return hs_a18025v1xW.hscall();
        } else {
            return hs_a18025v1xW;
        }
    };
    hs_a18125v1xY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczgze125v1xZ.evaluateOnce = function () {
        if (hs_a18125v1xY.notEvaluated) {
            return hs_a18125v1xY.hscall();
        } else {
            return hs_a18125v1xY;
        }
    };
    hs_a18225v1y0.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczg125v1y1.evaluateOnce = function () {
        if (hs_a18225v1y0.notEvaluated) {
            return hs_a18225v1y0.hscall();
        } else {
            return hs_a18225v1y0;
        }
    };
    hs_a18325v1y2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczlze125v1y3.evaluateOnce = function () {
        if (hs_a18325v1y2.notEvaluated) {
            return hs_a18325v1y2.hscall();
        } else {
            return hs_a18325v1y2;
        }
    };
    hs_a18425v1y4.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdcmax125v1y5.evaluateOnce = function () {
        if (hs_a18425v1y4.notEvaluated) {
            return hs_a18425v1y4.hscall();
        } else {
            return hs_a18425v1y4;
        }
    };
    hs_a18525v1y6.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdcmin125v1y7.evaluateOnce = function () {
        if (hs_a18525v1y6.notEvaluated) {
            return hs_a18525v1y6.hscall();
        } else {
            return hs_a18525v1y6;
        }
    };
    hs_a18625v1y8.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64);
    };
    hs_zdczeze125v1y9.evaluateOnce = function () {
        if (hs_a18625v1y8.notEvaluated) {
            return hs_a18625v1y8.hscall();
        } else {
            return hs_a18625v1y8;
        }
    };
    hs_a18725v1ya.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64);
    };
    hs_zdczsze125v1yb.evaluateOnce = function () {
        if (hs_a18725v1ya.notEvaluated) {
            return hs_a18725v1ya.hscall();
        } else {
            return hs_a18725v1ya;
        }
    };
    this.hs_zdfEqCRLim.data = [hs_a18625v1y8, hs_a18725v1ya];
    this.hs_zdfOrdCRLim.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCRLim, hs_a17925v1xU, hs_a18025v1xW, hs_a18125v1xY, hs_a18225v1y0, hs_a18325v1y2, hs_a18425v1y4, hs_a18525v1y6];
    this.hs_zdfNumCRLim.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCRLim, $hs.modules.SystemziPosixziTypes.hs_zdfShowCRLim, hs_a17225v1xG, hs_a17325v1xI, hs_a17425v1xK, hs_a17525v1xM, hs_a17625v1xO, hs_a17725v1xQ, hs_a17825v1xS];
    this.hs_zdfRealCRLim.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCRLim, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCRLim, hs_a15525v1x8];
    this.hs_zdfIntegralCRLim.data = [$hs.modules.SystemziPosixziTypes.hs_zdfRealCRLim, $hs.modules.SystemziPosixziTypes.hs_zdfEnumCRLim, hs_a14625v1wQ, hs_a14725v1wS, hs_a14825v1wU, hs_a14925v1wW, hs_a15025v1wY, hs_a15125v1x0, hs_a15225v1x2];
    this.hs_zdfBitsCRLim.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCRLim, hs_a12925v1wi, hs_a13025v1wk, hs_a13125v1wm, hs_a13225v1wo, hs_a13325v1wq, hs_a13425v1ws, hs_a13525v1wu, hs_a13625v1ww, hs_a13725v1wy, hs_a13825v1wA, hs_a13925v1wC, hs_a14025v1wE, hs_a14125v1wG, hs_a14225v1wI, hs_a14325v1wK, hs_a14425v1wM, hs_a14525v1wO];
    hs_a18825v1yc.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizazi225v1yd.evaluateOnce = function () {
        if (hs_a18825v1yc.notEvaluated) {
            return hs_a18825v1yc.hscall();
        } else {
            return hs_a18825v1yc;
        }
    };
    hs_a18925v1ye.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizbzi225v1yf.evaluateOnce = function () {
        if (hs_a18925v1ye.notEvaluated) {
            return hs_a18925v1ye.hscall();
        } else {
            return hs_a18925v1ye;
        }
    };
    hs_a19025v1yg.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcxor225v1yh.evaluateOnce = function () {
        if (hs_a19025v1yg.notEvaluated) {
            return hs_a19025v1yg.hscall();
        } else {
            return hs_a19025v1yg;
        }
    };
    hs_a19125v1yi.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplement225v1yj.evaluateOnce = function () {
        if (hs_a19125v1yi.notEvaluated) {
            return hs_a19125v1yi.hscall();
        } else {
            return hs_a19125v1yi;
        }
    };
    hs_a19225v1yk.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshift225v1yl.evaluateOnce = function () {
        if (hs_a19225v1yk.notEvaluated) {
            return hs_a19225v1yk.hscall();
        } else {
            return hs_a19225v1yk;
        }
    };
    hs_a19325v1ym.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotate225v1yn.evaluateOnce = function () {
        if (hs_a19325v1ym.notEvaluated) {
            return hs_a19325v1ym.hscall();
        } else {
            return hs_a19325v1ym;
        }
    };
    hs_a19425v1yo.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbit225v1yp.evaluateOnce = function () {
        if (hs_a19425v1yo.notEvaluated) {
            return hs_a19425v1yo.hscall();
        } else {
            return hs_a19425v1yo;
        }
    };
    hs_a19525v1yq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcsetBit225v1yr.evaluateOnce = function () {
        if (hs_a19525v1yq.notEvaluated) {
            return hs_a19525v1yq.hscall();
        } else {
            return hs_a19525v1yq;
        }
    };
    hs_a19625v1ys.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcclearBit225v1yt.evaluateOnce = function () {
        if (hs_a19625v1ys.notEvaluated) {
            return hs_a19625v1ys.hscall();
        } else {
            return hs_a19625v1ys;
        }
    };
    hs_a19725v1yu.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplementBit225v1yv.evaluateOnce = function () {
        if (hs_a19725v1yu.notEvaluated) {
            return hs_a19725v1yu.hscall();
        } else {
            return hs_a19725v1yu;
        }
    };
    hs_a19825v1yw.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdctestBit225v1yx.evaluateOnce = function () {
        if (hs_a19825v1yw.notEvaluated) {
            return hs_a19825v1yw.hscall();
        } else {
            return hs_a19825v1yw;
        }
    };
    hs_a19925v1yy.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbitSizze225v1yz.evaluateOnce = function () {
        if (hs_a19925v1yy.notEvaluated) {
            return hs_a19925v1yy.hscall();
        } else {
            return hs_a19925v1yy;
        }
    };
    hs_a20025v1yA.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcisSigned225v1yB.evaluateOnce = function () {
        if (hs_a20025v1yA.notEvaluated) {
            return hs_a20025v1yA.hscall();
        } else {
            return hs_a20025v1yA;
        }
    };
    hs_a20125v1yC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftL225v1yD.evaluateOnce = function () {
        if (hs_a20125v1yC.notEvaluated) {
            return hs_a20125v1yC.hscall();
        } else {
            return hs_a20125v1yC;
        }
    };
    hs_a20225v1yE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftR225v1yF.evaluateOnce = function () {
        if (hs_a20225v1yE.notEvaluated) {
            return hs_a20225v1yE.hscall();
        } else {
            return hs_a20225v1yE;
        }
    };
    hs_a20325v1yG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateL225v1yH.evaluateOnce = function () {
        if (hs_a20325v1yG.notEvaluated) {
            return hs_a20325v1yG.hscall();
        } else {
            return hs_a20325v1yG;
        }
    };
    hs_a20425v1yI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateR225v1yJ.evaluateOnce = function () {
        if (hs_a20425v1yI.notEvaluated) {
            return hs_a20425v1yI.hscall();
        } else {
            return hs_a20425v1yI;
        }
    };
    hs_a20525v1yK.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquot225v1yL.evaluateOnce = function () {
        if (hs_a20525v1yK.notEvaluated) {
            return hs_a20525v1yK.hscall();
        } else {
            return hs_a20525v1yK;
        }
    };
    hs_a20625v1yM.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcrem225v1yN.evaluateOnce = function () {
        if (hs_a20625v1yM.notEvaluated) {
            return hs_a20625v1yM.hscall();
        } else {
            return hs_a20625v1yM;
        }
    };
    hs_a20725v1yO.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdiv225v1yP.evaluateOnce = function () {
        if (hs_a20725v1yO.notEvaluated) {
            return hs_a20725v1yO.hscall();
        } else {
            return hs_a20725v1yO;
        }
    };
    hs_a20825v1yQ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcmod225v1yR.evaluateOnce = function () {
        if (hs_a20825v1yQ.notEvaluated) {
            return hs_a20825v1yQ.hscall();
        } else {
            return hs_a20825v1yQ;
        }
    };
    hs_a20925v1yS.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquotRem225v1yT.evaluateOnce = function () {
        if (hs_a20925v1yS.notEvaluated) {
            return hs_a20925v1yS.hscall();
        } else {
            return hs_a20925v1yS;
        }
    };
    hs_a21025v1yU.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdivMod225v1yV.evaluateOnce = function () {
        if (hs_a21025v1yU.notEvaluated) {
            return hs_a21025v1yU.hscall();
        } else {
            return hs_a21025v1yU;
        }
    };
    hs_a21125v1yW.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdctoInteger225v1yX.evaluateOnce = function () {
        if (hs_a21125v1yW.notEvaluated) {
            return hs_a21125v1yW.hscall();
        } else {
            return hs_a21125v1yW;
        }
    };
    hs_a21225v1yY.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcminBound225v1yZ.evaluateOnce = function () {
        if (hs_a21225v1yY.notEvaluated) {
            return hs_a21225v1yY.hscall();
        } else {
            return hs_a21225v1yY;
        }
    };
    hs_a21325v1z0.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcmaxBound225v1z1.evaluateOnce = function () {
        if (hs_a21325v1z0.notEvaluated) {
            return hs_a21325v1z0.hscall();
        } else {
            return hs_a21325v1z0;
        }
    };
    this.hs_zdfBoundedCTcflag.data = [hs_a21225v1yY, hs_a21325v1z0];
    hs_a21425v1z2.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord32);
    };
    hs_zdctoRational225v1z3.evaluateOnce = function () {
        if (hs_a21425v1z2.notEvaluated) {
            return hs_a21425v1z2.hscall();
        } else {
            return hs_a21425v1z2;
        }
    };
    hs_a21525v1z4.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcsizzeOf225v1z5.evaluateOnce = function () {
        if (hs_a21525v1z4.notEvaluated) {
            return hs_a21525v1z4.hscall();
        } else {
            return hs_a21525v1z4;
        }
    };
    hs_a21625v1z6.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcalignment225v1z7.evaluateOnce = function () {
        if (hs_a21625v1z6.notEvaluated) {
            return hs_a21625v1z6.hscall();
        } else {
            return hs_a21625v1z6;
        }
    };
    hs_a21725v1z8.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekElemOff225v1z9.evaluateOnce = function () {
        if (hs_a21725v1z8.notEvaluated) {
            return hs_a21725v1z8.hscall();
        } else {
            return hs_a21725v1z8;
        }
    };
    hs_a21825v1za.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeElemOff225v1zb.evaluateOnce = function () {
        if (hs_a21825v1za.notEvaluated) {
            return hs_a21825v1za.hscall();
        } else {
            return hs_a21825v1za;
        }
    };
    hs_a21925v1zc.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekByteOff225v1zd.evaluateOnce = function () {
        if (hs_a21925v1zc.notEvaluated) {
            return hs_a21925v1zc.hscall();
        } else {
            return hs_a21925v1zc;
        }
    };
    hs_a22025v1ze.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeByteOff225v1zf.evaluateOnce = function () {
        if (hs_a22025v1ze.notEvaluated) {
            return hs_a22025v1ze.hscall();
        } else {
            return hs_a22025v1ze;
        }
    };
    hs_a22125v1zg.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeek225v1zh.evaluateOnce = function () {
        if (hs_a22125v1zg.notEvaluated) {
            return hs_a22125v1zg.hscall();
        } else {
            return hs_a22125v1zg;
        }
    };
    hs_a22225v1zi.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpoke225v1zj.evaluateOnce = function () {
        if (hs_a22225v1zi.notEvaluated) {
            return hs_a22225v1zi.hscall();
        } else {
            return hs_a22225v1zi;
        }
    };
    this.hs_zdfStorableCTcflag.data = [hs_a21525v1z4, hs_a21625v1z6, hs_a21725v1z8, hs_a21825v1za, hs_a21925v1zc, hs_a22025v1ze, hs_a22125v1zg, hs_a22225v1zi];
    hs_a22325v1zk.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcsucc225v1zl.evaluateOnce = function () {
        if (hs_a22325v1zk.notEvaluated) {
            return hs_a22325v1zk.hscall();
        } else {
            return hs_a22325v1zk;
        }
    };
    hs_a22425v1zm.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcpred225v1zn.evaluateOnce = function () {
        if (hs_a22425v1zm.notEvaluated) {
            return hs_a22425v1zm.hscall();
        } else {
            return hs_a22425v1zm;
        }
    };
    hs_a22525v1zo.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdctoEnum225v1zp.evaluateOnce = function () {
        if (hs_a22525v1zo.notEvaluated) {
            return hs_a22525v1zo.hscall();
        } else {
            return hs_a22525v1zo;
        }
    };
    hs_a22625v1zq.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcfromEnum225v1zr.evaluateOnce = function () {
        if (hs_a22625v1zq.notEvaluated) {
            return hs_a22625v1zq.hscall();
        } else {
            return hs_a22625v1zq;
        }
    };
    hs_a22725v1zs.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFrom225v1zt.evaluateOnce = function () {
        if (hs_a22725v1zs.notEvaluated) {
            return hs_a22725v1zs.hscall();
        } else {
            return hs_a22725v1zs;
        }
    };
    hs_a22825v1zu.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThen225v1zv.evaluateOnce = function () {
        if (hs_a22825v1zu.notEvaluated) {
            return hs_a22825v1zu.hscall();
        } else {
            return hs_a22825v1zu;
        }
    };
    hs_a22925v1zw.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromTo225v1zx.evaluateOnce = function () {
        if (hs_a22925v1zw.notEvaluated) {
            return hs_a22925v1zw.hscall();
        } else {
            return hs_a22925v1zw;
        }
    };
    hs_a23025v1zy.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThenTo225v1zz.evaluateOnce = function () {
        if (hs_a23025v1zy.notEvaluated) {
            return hs_a23025v1zy.hscall();
        } else {
            return hs_a23025v1zy;
        }
    };
    this.hs_zdfEnumCTcflag.data = [hs_a22325v1zk, hs_a22425v1zm, hs_a22525v1zo, hs_a22625v1zq, hs_a22725v1zs, hs_a22825v1zu, hs_a22925v1zw, hs_a23025v1zy];
    hs_a23125v1zA.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczp225v1zB.evaluateOnce = function () {
        if (hs_a23125v1zA.notEvaluated) {
            return hs_a23125v1zA.hscall();
        } else {
            return hs_a23125v1zA;
        }
    };
    hs_a23225v1zC.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczt225v1zD.evaluateOnce = function () {
        if (hs_a23225v1zC.notEvaluated) {
            return hs_a23225v1zC.hscall();
        } else {
            return hs_a23225v1zC;
        }
    };
    hs_a23325v1zE.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczm225v1zF.evaluateOnce = function () {
        if (hs_a23325v1zE.notEvaluated) {
            return hs_a23325v1zE.hscall();
        } else {
            return hs_a23325v1zE;
        }
    };
    hs_a23425v1zG.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcnegate225v1zH.evaluateOnce = function () {
        if (hs_a23425v1zG.notEvaluated) {
            return hs_a23425v1zG.hscall();
        } else {
            return hs_a23425v1zG;
        }
    };
    hs_a23525v1zI.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcabs225v1zJ.evaluateOnce = function () {
        if (hs_a23525v1zI.notEvaluated) {
            return hs_a23525v1zI.hscall();
        } else {
            return hs_a23525v1zI;
        }
    };
    hs_a23625v1zK.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcsignum225v1zL.evaluateOnce = function () {
        if (hs_a23625v1zK.notEvaluated) {
            return hs_a23625v1zK.hscall();
        } else {
            return hs_a23625v1zK;
        }
    };
    hs_a23725v1zM.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcfromInteger225v1zN.evaluateOnce = function () {
        if (hs_a23725v1zM.notEvaluated) {
            return hs_a23725v1zM.hscall();
        } else {
            return hs_a23725v1zM;
        }
    };
    hs_a23825v1zO.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdccompare225v1zP.evaluateOnce = function () {
        if (hs_a23825v1zO.notEvaluated) {
            return hs_a23825v1zO.hscall();
        } else {
            return hs_a23825v1zO;
        }
    };
    hs_a23925v1zQ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczl225v1zR.evaluateOnce = function () {
        if (hs_a23925v1zQ.notEvaluated) {
            return hs_a23925v1zQ.hscall();
        } else {
            return hs_a23925v1zQ;
        }
    };
    hs_a24025v1zS.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczgze225v1zT.evaluateOnce = function () {
        if (hs_a24025v1zS.notEvaluated) {
            return hs_a24025v1zS.hscall();
        } else {
            return hs_a24025v1zS;
        }
    };
    hs_a24125v1zU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczg225v1zV.evaluateOnce = function () {
        if (hs_a24125v1zU.notEvaluated) {
            return hs_a24125v1zU.hscall();
        } else {
            return hs_a24125v1zU;
        }
    };
    hs_a24225v1zW.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczlze225v1zX.evaluateOnce = function () {
        if (hs_a24225v1zW.notEvaluated) {
            return hs_a24225v1zW.hscall();
        } else {
            return hs_a24225v1zW;
        }
    };
    hs_a24325v1zY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmax225v1zZ.evaluateOnce = function () {
        if (hs_a24325v1zY.notEvaluated) {
            return hs_a24325v1zY.hscall();
        } else {
            return hs_a24325v1zY;
        }
    };
    hs_a24425v1A0.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmin225v1A1.evaluateOnce = function () {
        if (hs_a24425v1A0.notEvaluated) {
            return hs_a24425v1A0.hscall();
        } else {
            return hs_a24425v1A0;
        }
    };
    hs_a24525v1A2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczeze225v1A3.evaluateOnce = function () {
        if (hs_a24525v1A2.notEvaluated) {
            return hs_a24525v1A2.hscall();
        } else {
            return hs_a24525v1A2;
        }
    };
    hs_a24625v1A4.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczsze225v1A5.evaluateOnce = function () {
        if (hs_a24625v1A4.notEvaluated) {
            return hs_a24625v1A4.hscall();
        } else {
            return hs_a24625v1A4;
        }
    };
    this.hs_zdfEqCTcflag.data = [hs_a24525v1A2, hs_a24625v1A4];
    this.hs_zdfOrdCTcflag.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCTcflag, hs_a23825v1zO, hs_a23925v1zQ, hs_a24025v1zS, hs_a24125v1zU, hs_a24225v1zW, hs_a24325v1zY, hs_a24425v1A0];
    this.hs_zdfNumCTcflag.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCTcflag, $hs.modules.SystemziPosixziTypes.hs_zdfShowCTcflag, hs_a23125v1zA, hs_a23225v1zC, hs_a23325v1zE, hs_a23425v1zG, hs_a23525v1zI, hs_a23625v1zK, hs_a23725v1zM];
    this.hs_zdfRealCTcflag.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCTcflag, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCTcflag, hs_a21425v1z2];
    this.hs_zdfIntegralCTcflag.data = [$hs.modules.SystemziPosixziTypes.hs_zdfRealCTcflag, $hs.modules.SystemziPosixziTypes.hs_zdfEnumCTcflag, hs_a20525v1yK, hs_a20625v1yM, hs_a20725v1yO, hs_a20825v1yQ, hs_a20925v1yS, hs_a21025v1yU, hs_a21125v1yW];
    this.hs_zdfBitsCTcflag.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCTcflag, hs_a18825v1yc, hs_a18925v1ye, hs_a19025v1yg, hs_a19125v1yi, hs_a19225v1yk, hs_a19325v1ym, hs_a19425v1yo, hs_a19525v1yq, hs_a19625v1ys, hs_a19725v1yu, hs_a19825v1yw, hs_a19925v1yy, hs_a20025v1yA, hs_a20125v1yC, hs_a20225v1yE, hs_a20325v1yG, hs_a20425v1yI];
    hs_a24725v1A6.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord32);
    };
    hs_zdctoRational325v1A7.evaluateOnce = function () {
        if (hs_a24725v1A6.notEvaluated) {
            return hs_a24725v1A6.hscall();
        } else {
            return hs_a24725v1A6;
        }
    };
    hs_a24825v1A8.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcsizzeOf325v1A9.evaluateOnce = function () {
        if (hs_a24825v1A8.notEvaluated) {
            return hs_a24825v1A8.hscall();
        } else {
            return hs_a24825v1A8;
        }
    };
    hs_a24925v1Aa.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcalignment325v1Ab.evaluateOnce = function () {
        if (hs_a24925v1Aa.notEvaluated) {
            return hs_a24925v1Aa.hscall();
        } else {
            return hs_a24925v1Aa;
        }
    };
    hs_a25025v1Ac.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekElemOff325v1Ad.evaluateOnce = function () {
        if (hs_a25025v1Ac.notEvaluated) {
            return hs_a25025v1Ac.hscall();
        } else {
            return hs_a25025v1Ac;
        }
    };
    hs_a25125v1Ae.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeElemOff325v1Af.evaluateOnce = function () {
        if (hs_a25125v1Ae.notEvaluated) {
            return hs_a25125v1Ae.hscall();
        } else {
            return hs_a25125v1Ae;
        }
    };
    hs_a25225v1Ag.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekByteOff325v1Ah.evaluateOnce = function () {
        if (hs_a25225v1Ag.notEvaluated) {
            return hs_a25225v1Ag.hscall();
        } else {
            return hs_a25225v1Ag;
        }
    };
    hs_a25325v1Ai.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeByteOff325v1Aj.evaluateOnce = function () {
        if (hs_a25325v1Ai.notEvaluated) {
            return hs_a25325v1Ai.hscall();
        } else {
            return hs_a25325v1Ai;
        }
    };
    hs_a25425v1Ak.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeek325v1Al.evaluateOnce = function () {
        if (hs_a25425v1Ak.notEvaluated) {
            return hs_a25425v1Ak.hscall();
        } else {
            return hs_a25425v1Ak;
        }
    };
    hs_a25525v1Am.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpoke325v1An.evaluateOnce = function () {
        if (hs_a25525v1Am.notEvaluated) {
            return hs_a25525v1Am.hscall();
        } else {
            return hs_a25525v1Am;
        }
    };
    this.hs_zdfStorableCSpeed.data = [hs_a24825v1A8, hs_a24925v1Aa, hs_a25025v1Ac, hs_a25125v1Ae, hs_a25225v1Ag, hs_a25325v1Ai, hs_a25425v1Ak, hs_a25525v1Am];
    hs_a25625v1Ao.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcsucc325v1Ap.evaluateOnce = function () {
        if (hs_a25625v1Ao.notEvaluated) {
            return hs_a25625v1Ao.hscall();
        } else {
            return hs_a25625v1Ao;
        }
    };
    hs_a25725v1Aq.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcpred325v1Ar.evaluateOnce = function () {
        if (hs_a25725v1Aq.notEvaluated) {
            return hs_a25725v1Aq.hscall();
        } else {
            return hs_a25725v1Aq;
        }
    };
    hs_a25825v1As.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdctoEnum325v1At.evaluateOnce = function () {
        if (hs_a25825v1As.notEvaluated) {
            return hs_a25825v1As.hscall();
        } else {
            return hs_a25825v1As;
        }
    };
    hs_a25925v1Au.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcfromEnum325v1Av.evaluateOnce = function () {
        if (hs_a25925v1Au.notEvaluated) {
            return hs_a25925v1Au.hscall();
        } else {
            return hs_a25925v1Au;
        }
    };
    hs_a26025v1Aw.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFrom325v1Ax.evaluateOnce = function () {
        if (hs_a26025v1Aw.notEvaluated) {
            return hs_a26025v1Aw.hscall();
        } else {
            return hs_a26025v1Aw;
        }
    };
    hs_a26125v1Ay.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThen325v1Az.evaluateOnce = function () {
        if (hs_a26125v1Ay.notEvaluated) {
            return hs_a26125v1Ay.hscall();
        } else {
            return hs_a26125v1Ay;
        }
    };
    hs_a26225v1AA.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromTo325v1AB.evaluateOnce = function () {
        if (hs_a26225v1AA.notEvaluated) {
            return hs_a26225v1AA.hscall();
        } else {
            return hs_a26225v1AA;
        }
    };
    hs_a26325v1AC.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThenTo325v1AD.evaluateOnce = function () {
        if (hs_a26325v1AC.notEvaluated) {
            return hs_a26325v1AC.hscall();
        } else {
            return hs_a26325v1AC;
        }
    };
    this.hs_zdfEnumCSpeed.data = [hs_a25625v1Ao, hs_a25725v1Aq, hs_a25825v1As, hs_a25925v1Au, hs_a26025v1Aw, hs_a26125v1Ay, hs_a26225v1AA, hs_a26325v1AC];
    hs_a26425v1AE.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczp325v1AF.evaluateOnce = function () {
        if (hs_a26425v1AE.notEvaluated) {
            return hs_a26425v1AE.hscall();
        } else {
            return hs_a26425v1AE;
        }
    };
    hs_a26525v1AG.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczt325v1AH.evaluateOnce = function () {
        if (hs_a26525v1AG.notEvaluated) {
            return hs_a26525v1AG.hscall();
        } else {
            return hs_a26525v1AG;
        }
    };
    hs_a26625v1AI.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczm325v1AJ.evaluateOnce = function () {
        if (hs_a26625v1AI.notEvaluated) {
            return hs_a26625v1AI.hscall();
        } else {
            return hs_a26625v1AI;
        }
    };
    hs_a26725v1AK.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcnegate325v1AL.evaluateOnce = function () {
        if (hs_a26725v1AK.notEvaluated) {
            return hs_a26725v1AK.hscall();
        } else {
            return hs_a26725v1AK;
        }
    };
    hs_a26825v1AM.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcabs325v1AN.evaluateOnce = function () {
        if (hs_a26825v1AM.notEvaluated) {
            return hs_a26825v1AM.hscall();
        } else {
            return hs_a26825v1AM;
        }
    };
    hs_a26925v1AO.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcsignum325v1AP.evaluateOnce = function () {
        if (hs_a26925v1AO.notEvaluated) {
            return hs_a26925v1AO.hscall();
        } else {
            return hs_a26925v1AO;
        }
    };
    hs_a27025v1AQ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcfromInteger325v1AR.evaluateOnce = function () {
        if (hs_a27025v1AQ.notEvaluated) {
            return hs_a27025v1AQ.hscall();
        } else {
            return hs_a27025v1AQ;
        }
    };
    hs_a27125v1AS.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdccompare325v1AT.evaluateOnce = function () {
        if (hs_a27125v1AS.notEvaluated) {
            return hs_a27125v1AS.hscall();
        } else {
            return hs_a27125v1AS;
        }
    };
    hs_a27225v1AU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczl325v1AV.evaluateOnce = function () {
        if (hs_a27225v1AU.notEvaluated) {
            return hs_a27225v1AU.hscall();
        } else {
            return hs_a27225v1AU;
        }
    };
    hs_a27325v1AW.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczgze325v1AX.evaluateOnce = function () {
        if (hs_a27325v1AW.notEvaluated) {
            return hs_a27325v1AW.hscall();
        } else {
            return hs_a27325v1AW;
        }
    };
    hs_a27425v1AY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczg325v1AZ.evaluateOnce = function () {
        if (hs_a27425v1AY.notEvaluated) {
            return hs_a27425v1AY.hscall();
        } else {
            return hs_a27425v1AY;
        }
    };
    hs_a27525v1B0.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczlze325v1B1.evaluateOnce = function () {
        if (hs_a27525v1B0.notEvaluated) {
            return hs_a27525v1B0.hscall();
        } else {
            return hs_a27525v1B0;
        }
    };
    hs_a27625v1B2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmax325v1B3.evaluateOnce = function () {
        if (hs_a27625v1B2.notEvaluated) {
            return hs_a27625v1B2.hscall();
        } else {
            return hs_a27625v1B2;
        }
    };
    hs_a27725v1B4.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmin325v1B5.evaluateOnce = function () {
        if (hs_a27725v1B4.notEvaluated) {
            return hs_a27725v1B4.hscall();
        } else {
            return hs_a27725v1B4;
        }
    };
    hs_a27825v1B6.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczeze325v1B7.evaluateOnce = function () {
        if (hs_a27825v1B6.notEvaluated) {
            return hs_a27825v1B6.hscall();
        } else {
            return hs_a27825v1B6;
        }
    };
    hs_a27925v1B8.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczsze325v1B9.evaluateOnce = function () {
        if (hs_a27925v1B8.notEvaluated) {
            return hs_a27925v1B8.hscall();
        } else {
            return hs_a27925v1B8;
        }
    };
    this.hs_zdfEqCSpeed.data = [hs_a27825v1B6, hs_a27925v1B8];
    this.hs_zdfOrdCSpeed.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCSpeed, hs_a27125v1AS, hs_a27225v1AU, hs_a27325v1AW, hs_a27425v1AY, hs_a27525v1B0, hs_a27625v1B2, hs_a27725v1B4];
    this.hs_zdfNumCSpeed.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCSpeed, $hs.modules.SystemziPosixziTypes.hs_zdfShowCSpeed, hs_a26425v1AE, hs_a26525v1AG, hs_a26625v1AI, hs_a26725v1AK, hs_a26825v1AM, hs_a26925v1AO, hs_a27025v1AQ];
    this.hs_zdfRealCSpeed.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCSpeed, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCSpeed, hs_a24725v1A6];
    hs_a28025v1Ba.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord8);
    };
    hs_zdctoRational425v1Bb.evaluateOnce = function () {
        if (hs_a28025v1Ba.notEvaluated) {
            return hs_a28025v1Ba.hscall();
        } else {
            return hs_a28025v1Ba;
        }
    };
    hs_a28125v1Bc.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcsizzeOf425v1Bd.evaluateOnce = function () {
        if (hs_a28125v1Bc.notEvaluated) {
            return hs_a28125v1Bc.hscall();
        } else {
            return hs_a28125v1Bc;
        }
    };
    hs_a28225v1Be.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcalignment425v1Bf.evaluateOnce = function () {
        if (hs_a28225v1Be.notEvaluated) {
            return hs_a28225v1Be.hscall();
        } else {
            return hs_a28225v1Be;
        }
    };
    hs_a28325v1Bg.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcpeekElemOff425v1Bh.evaluateOnce = function () {
        if (hs_a28325v1Bg.notEvaluated) {
            return hs_a28325v1Bg.hscall();
        } else {
            return hs_a28325v1Bg;
        }
    };
    hs_a28425v1Bi.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcpokeElemOff425v1Bj.evaluateOnce = function () {
        if (hs_a28425v1Bi.notEvaluated) {
            return hs_a28425v1Bi.hscall();
        } else {
            return hs_a28425v1Bi;
        }
    };
    hs_a28525v1Bk.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcpeekByteOff425v1Bl.evaluateOnce = function () {
        if (hs_a28525v1Bk.notEvaluated) {
            return hs_a28525v1Bk.hscall();
        } else {
            return hs_a28525v1Bk;
        }
    };
    hs_a28625v1Bm.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcpokeByteOff425v1Bn.evaluateOnce = function () {
        if (hs_a28625v1Bm.notEvaluated) {
            return hs_a28625v1Bm.hscall();
        } else {
            return hs_a28625v1Bm;
        }
    };
    hs_a28725v1Bo.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcpeek425v1Bp.evaluateOnce = function () {
        if (hs_a28725v1Bo.notEvaluated) {
            return hs_a28725v1Bo.hscall();
        } else {
            return hs_a28725v1Bo;
        }
    };
    hs_a28825v1Bq.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8);
    };
    hs_zdcpoke425v1Br.evaluateOnce = function () {
        if (hs_a28825v1Bq.notEvaluated) {
            return hs_a28825v1Bq.hscall();
        } else {
            return hs_a28825v1Bq;
        }
    };
    this.hs_zdfStorableCCc.data = [hs_a28125v1Bc, hs_a28225v1Be, hs_a28325v1Bg, hs_a28425v1Bi, hs_a28525v1Bk, hs_a28625v1Bm, hs_a28725v1Bo, hs_a28825v1Bq];
    hs_a28925v1Bs.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcsucc425v1Bt.evaluateOnce = function () {
        if (hs_a28925v1Bs.notEvaluated) {
            return hs_a28925v1Bs.hscall();
        } else {
            return hs_a28925v1Bs;
        }
    };
    hs_a29025v1Bu.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcpred425v1Bv.evaluateOnce = function () {
        if (hs_a29025v1Bu.notEvaluated) {
            return hs_a29025v1Bu.hscall();
        } else {
            return hs_a29025v1Bu;
        }
    };
    hs_a29125v1Bw.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdctoEnum425v1Bx.evaluateOnce = function () {
        if (hs_a29125v1Bw.notEvaluated) {
            return hs_a29125v1Bw.hscall();
        } else {
            return hs_a29125v1Bw;
        }
    };
    hs_a29225v1By.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcfromEnum425v1Bz.evaluateOnce = function () {
        if (hs_a29225v1By.notEvaluated) {
            return hs_a29225v1By.hscall();
        } else {
            return hs_a29225v1By;
        }
    };
    hs_a29325v1BA.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcenumFrom425v1BB.evaluateOnce = function () {
        if (hs_a29325v1BA.notEvaluated) {
            return hs_a29325v1BA.hscall();
        } else {
            return hs_a29325v1BA;
        }
    };
    hs_a29425v1BC.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcenumFromThen425v1BD.evaluateOnce = function () {
        if (hs_a29425v1BC.notEvaluated) {
            return hs_a29425v1BC.hscall();
        } else {
            return hs_a29425v1BC;
        }
    };
    hs_a29525v1BE.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcenumFromTo425v1BF.evaluateOnce = function () {
        if (hs_a29525v1BE.notEvaluated) {
            return hs_a29525v1BE.hscall();
        } else {
            return hs_a29525v1BE;
        }
    };
    hs_a29625v1BG.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord8);
    };
    hs_zdcenumFromThenTo425v1BH.evaluateOnce = function () {
        if (hs_a29625v1BG.notEvaluated) {
            return hs_a29625v1BG.hscall();
        } else {
            return hs_a29625v1BG;
        }
    };
    this.hs_zdfEnumCCc.data = [hs_a28925v1Bs, hs_a29025v1Bu, hs_a29125v1Bw, hs_a29225v1By, hs_a29325v1BA, hs_a29425v1BC, hs_a29525v1BE, hs_a29625v1BG];
    hs_a29725v1BI.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdczp425v1BJ.evaluateOnce = function () {
        if (hs_a29725v1BI.notEvaluated) {
            return hs_a29725v1BI.hscall();
        } else {
            return hs_a29725v1BI;
        }
    };
    hs_a29825v1BK.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdczt425v1BL.evaluateOnce = function () {
        if (hs_a29825v1BK.notEvaluated) {
            return hs_a29825v1BK.hscall();
        } else {
            return hs_a29825v1BK;
        }
    };
    hs_a29925v1BM.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdczm425v1BN.evaluateOnce = function () {
        if (hs_a29925v1BM.notEvaluated) {
            return hs_a29925v1BM.hscall();
        } else {
            return hs_a29925v1BM;
        }
    };
    hs_a30025v1BO.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdcnegate425v1BP.evaluateOnce = function () {
        if (hs_a30025v1BO.notEvaluated) {
            return hs_a30025v1BO.hscall();
        } else {
            return hs_a30025v1BO;
        }
    };
    hs_a30125v1BQ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdcabs425v1BR.evaluateOnce = function () {
        if (hs_a30125v1BQ.notEvaluated) {
            return hs_a30125v1BQ.hscall();
        } else {
            return hs_a30125v1BQ;
        }
    };
    hs_a30225v1BS.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdcsignum425v1BT.evaluateOnce = function () {
        if (hs_a30225v1BS.notEvaluated) {
            return hs_a30225v1BS.hscall();
        } else {
            return hs_a30225v1BS;
        }
    };
    hs_a30325v1BU.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8);
    };
    hs_zdcfromInteger425v1BV.evaluateOnce = function () {
        if (hs_a30325v1BU.notEvaluated) {
            return hs_a30325v1BU.hscall();
        } else {
            return hs_a30325v1BU;
        }
    };
    hs_a30425v1BW.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdccompare425v1BX.evaluateOnce = function () {
        if (hs_a30425v1BW.notEvaluated) {
            return hs_a30425v1BW.hscall();
        } else {
            return hs_a30425v1BW;
        }
    };
    hs_a30525v1BY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdczl425v1BZ.evaluateOnce = function () {
        if (hs_a30525v1BY.notEvaluated) {
            return hs_a30525v1BY.hscall();
        } else {
            return hs_a30525v1BY;
        }
    };
    hs_a30625v1C0.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdczgze425v1C1.evaluateOnce = function () {
        if (hs_a30625v1C0.notEvaluated) {
            return hs_a30625v1C0.hscall();
        } else {
            return hs_a30625v1C0;
        }
    };
    hs_a30725v1C2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdczg425v1C3.evaluateOnce = function () {
        if (hs_a30725v1C2.notEvaluated) {
            return hs_a30725v1C2.hscall();
        } else {
            return hs_a30725v1C2;
        }
    };
    hs_a30825v1C4.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdczlze425v1C5.evaluateOnce = function () {
        if (hs_a30825v1C4.notEvaluated) {
            return hs_a30825v1C4.hscall();
        } else {
            return hs_a30825v1C4;
        }
    };
    hs_a30925v1C6.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdcmax425v1C7.evaluateOnce = function () {
        if (hs_a30925v1C6.notEvaluated) {
            return hs_a30925v1C6.hscall();
        } else {
            return hs_a30925v1C6;
        }
    };
    hs_a31025v1C8.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord8);
    };
    hs_zdcmin425v1C9.evaluateOnce = function () {
        if (hs_a31025v1C8.notEvaluated) {
            return hs_a31025v1C8.hscall();
        } else {
            return hs_a31025v1C8;
        }
    };
    hs_a31125v1Ca.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8);
    };
    hs_zdczeze425v1Cb.evaluateOnce = function () {
        if (hs_a31125v1Ca.notEvaluated) {
            return hs_a31125v1Ca.hscall();
        } else {
            return hs_a31125v1Ca;
        }
    };
    hs_a31225v1Cc.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8);
    };
    hs_zdczsze425v1Cd.evaluateOnce = function () {
        if (hs_a31225v1Cc.notEvaluated) {
            return hs_a31225v1Cc.hscall();
        } else {
            return hs_a31225v1Cc;
        }
    };
    this.hs_zdfEqCCc.data = [hs_a31125v1Ca, hs_a31225v1Cc];
    this.hs_zdfOrdCCc.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCCc, hs_a30425v1BW, hs_a30525v1BY, hs_a30625v1C0, hs_a30725v1C2, hs_a30825v1C4, hs_a30925v1C6, hs_a31025v1C8];
    this.hs_zdfNumCCc.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCCc, $hs.modules.SystemziPosixziTypes.hs_zdfShowCCc, hs_a29725v1BI, hs_a29825v1BK, hs_a29925v1BM, hs_a30025v1BO, hs_a30125v1BQ, hs_a30225v1BS, hs_a30325v1BU];
    this.hs_zdfRealCCc.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCCc, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCCc, hs_a28025v1Ba];
    hs_a31325v1Ce.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizazi325v1Cf.evaluateOnce = function () {
        if (hs_a31325v1Ce.notEvaluated) {
            return hs_a31325v1Ce.hscall();
        } else {
            return hs_a31325v1Ce;
        }
    };
    hs_a31425v1Cg.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizbzi325v1Ch.evaluateOnce = function () {
        if (hs_a31425v1Cg.notEvaluated) {
            return hs_a31425v1Cg.hscall();
        } else {
            return hs_a31425v1Cg;
        }
    };
    hs_a31525v1Ci.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcxor325v1Cj.evaluateOnce = function () {
        if (hs_a31525v1Ci.notEvaluated) {
            return hs_a31525v1Ci.hscall();
        } else {
            return hs_a31525v1Ci;
        }
    };
    hs_a31625v1Ck.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplement325v1Cl.evaluateOnce = function () {
        if (hs_a31625v1Ck.notEvaluated) {
            return hs_a31625v1Ck.hscall();
        } else {
            return hs_a31625v1Ck;
        }
    };
    hs_a31725v1Cm.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshift325v1Cn.evaluateOnce = function () {
        if (hs_a31725v1Cm.notEvaluated) {
            return hs_a31725v1Cm.hscall();
        } else {
            return hs_a31725v1Cm;
        }
    };
    hs_a31825v1Co.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotate325v1Cp.evaluateOnce = function () {
        if (hs_a31825v1Co.notEvaluated) {
            return hs_a31825v1Co.hscall();
        } else {
            return hs_a31825v1Co;
        }
    };
    hs_a31925v1Cq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbit325v1Cr.evaluateOnce = function () {
        if (hs_a31925v1Cq.notEvaluated) {
            return hs_a31925v1Cq.hscall();
        } else {
            return hs_a31925v1Cq;
        }
    };
    hs_a32025v1Cs.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcsetBit325v1Ct.evaluateOnce = function () {
        if (hs_a32025v1Cs.notEvaluated) {
            return hs_a32025v1Cs.hscall();
        } else {
            return hs_a32025v1Cs;
        }
    };
    hs_a32125v1Cu.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcclearBit325v1Cv.evaluateOnce = function () {
        if (hs_a32125v1Cu.notEvaluated) {
            return hs_a32125v1Cu.hscall();
        } else {
            return hs_a32125v1Cu;
        }
    };
    hs_a32225v1Cw.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplementBit325v1Cx.evaluateOnce = function () {
        if (hs_a32225v1Cw.notEvaluated) {
            return hs_a32225v1Cw.hscall();
        } else {
            return hs_a32225v1Cw;
        }
    };
    hs_a32325v1Cy.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdctestBit325v1Cz.evaluateOnce = function () {
        if (hs_a32325v1Cy.notEvaluated) {
            return hs_a32325v1Cy.hscall();
        } else {
            return hs_a32325v1Cy;
        }
    };
    hs_a32425v1CA.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbitSizze325v1CB.evaluateOnce = function () {
        if (hs_a32425v1CA.notEvaluated) {
            return hs_a32425v1CA.hscall();
        } else {
            return hs_a32425v1CA;
        }
    };
    hs_a32525v1CC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcisSigned325v1CD.evaluateOnce = function () {
        if (hs_a32525v1CC.notEvaluated) {
            return hs_a32525v1CC.hscall();
        } else {
            return hs_a32525v1CC;
        }
    };
    hs_a32625v1CE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftL325v1CF.evaluateOnce = function () {
        if (hs_a32625v1CE.notEvaluated) {
            return hs_a32625v1CE.hscall();
        } else {
            return hs_a32625v1CE;
        }
    };
    hs_a32725v1CG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftR325v1CH.evaluateOnce = function () {
        if (hs_a32725v1CG.notEvaluated) {
            return hs_a32725v1CG.hscall();
        } else {
            return hs_a32725v1CG;
        }
    };
    hs_a32825v1CI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateL325v1CJ.evaluateOnce = function () {
        if (hs_a32825v1CI.notEvaluated) {
            return hs_a32825v1CI.hscall();
        } else {
            return hs_a32825v1CI;
        }
    };
    hs_a32925v1CK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateR325v1CL.evaluateOnce = function () {
        if (hs_a32925v1CK.notEvaluated) {
            return hs_a32925v1CK.hscall();
        } else {
            return hs_a32925v1CK;
        }
    };
    hs_a33025v1CM.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquot325v1CN.evaluateOnce = function () {
        if (hs_a33025v1CM.notEvaluated) {
            return hs_a33025v1CM.hscall();
        } else {
            return hs_a33025v1CM;
        }
    };
    hs_a33125v1CO.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcrem325v1CP.evaluateOnce = function () {
        if (hs_a33125v1CO.notEvaluated) {
            return hs_a33125v1CO.hscall();
        } else {
            return hs_a33125v1CO;
        }
    };
    hs_a33225v1CQ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdiv325v1CR.evaluateOnce = function () {
        if (hs_a33225v1CQ.notEvaluated) {
            return hs_a33225v1CQ.hscall();
        } else {
            return hs_a33225v1CQ;
        }
    };
    hs_a33325v1CS.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcmod325v1CT.evaluateOnce = function () {
        if (hs_a33325v1CS.notEvaluated) {
            return hs_a33325v1CS.hscall();
        } else {
            return hs_a33325v1CS;
        }
    };
    hs_a33425v1CU.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquotRem325v1CV.evaluateOnce = function () {
        if (hs_a33425v1CU.notEvaluated) {
            return hs_a33425v1CU.hscall();
        } else {
            return hs_a33425v1CU;
        }
    };
    hs_a33525v1CW.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdivMod325v1CX.evaluateOnce = function () {
        if (hs_a33525v1CW.notEvaluated) {
            return hs_a33525v1CW.hscall();
        } else {
            return hs_a33525v1CW;
        }
    };
    hs_a33625v1CY.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdctoInteger325v1CZ.evaluateOnce = function () {
        if (hs_a33625v1CY.notEvaluated) {
            return hs_a33625v1CY.hscall();
        } else {
            return hs_a33625v1CY;
        }
    };
    hs_a33725v1D0.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcminBound325v1D1.evaluateOnce = function () {
        if (hs_a33725v1D0.notEvaluated) {
            return hs_a33725v1D0.hscall();
        } else {
            return hs_a33725v1D0;
        }
    };
    hs_a33825v1D2.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcmaxBound325v1D3.evaluateOnce = function () {
        if (hs_a33825v1D2.notEvaluated) {
            return hs_a33825v1D2.hscall();
        } else {
            return hs_a33825v1D2;
        }
    };
    this.hs_zdfBoundedCUid.data = [hs_a33725v1D0, hs_a33825v1D2];
    hs_a33925v1D4.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord32);
    };
    hs_zdctoRational525v1D5.evaluateOnce = function () {
        if (hs_a33925v1D4.notEvaluated) {
            return hs_a33925v1D4.hscall();
        } else {
            return hs_a33925v1D4;
        }
    };
    hs_a34025v1D6.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcsizzeOf525v1D7.evaluateOnce = function () {
        if (hs_a34025v1D6.notEvaluated) {
            return hs_a34025v1D6.hscall();
        } else {
            return hs_a34025v1D6;
        }
    };
    hs_a34125v1D8.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcalignment525v1D9.evaluateOnce = function () {
        if (hs_a34125v1D8.notEvaluated) {
            return hs_a34125v1D8.hscall();
        } else {
            return hs_a34125v1D8;
        }
    };
    hs_a34225v1Da.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekElemOff525v1Db.evaluateOnce = function () {
        if (hs_a34225v1Da.notEvaluated) {
            return hs_a34225v1Da.hscall();
        } else {
            return hs_a34225v1Da;
        }
    };
    hs_a34325v1Dc.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeElemOff525v1Dd.evaluateOnce = function () {
        if (hs_a34325v1Dc.notEvaluated) {
            return hs_a34325v1Dc.hscall();
        } else {
            return hs_a34325v1Dc;
        }
    };
    hs_a34425v1De.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekByteOff525v1Df.evaluateOnce = function () {
        if (hs_a34425v1De.notEvaluated) {
            return hs_a34425v1De.hscall();
        } else {
            return hs_a34425v1De;
        }
    };
    hs_a34525v1Dg.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeByteOff525v1Dh.evaluateOnce = function () {
        if (hs_a34525v1Dg.notEvaluated) {
            return hs_a34525v1Dg.hscall();
        } else {
            return hs_a34525v1Dg;
        }
    };
    hs_a34625v1Di.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeek525v1Dj.evaluateOnce = function () {
        if (hs_a34625v1Di.notEvaluated) {
            return hs_a34625v1Di.hscall();
        } else {
            return hs_a34625v1Di;
        }
    };
    hs_a34725v1Dk.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpoke525v1Dl.evaluateOnce = function () {
        if (hs_a34725v1Dk.notEvaluated) {
            return hs_a34725v1Dk.hscall();
        } else {
            return hs_a34725v1Dk;
        }
    };
    this.hs_zdfStorableCUid.data = [hs_a34025v1D6, hs_a34125v1D8, hs_a34225v1Da, hs_a34325v1Dc, hs_a34425v1De, hs_a34525v1Dg, hs_a34625v1Di, hs_a34725v1Dk];
    hs_a34825v1Dm.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcsucc525v1Dn.evaluateOnce = function () {
        if (hs_a34825v1Dm.notEvaluated) {
            return hs_a34825v1Dm.hscall();
        } else {
            return hs_a34825v1Dm;
        }
    };
    hs_a34925v1Do.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcpred525v1Dp.evaluateOnce = function () {
        if (hs_a34925v1Do.notEvaluated) {
            return hs_a34925v1Do.hscall();
        } else {
            return hs_a34925v1Do;
        }
    };
    hs_a35025v1Dq.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdctoEnum525v1Dr.evaluateOnce = function () {
        if (hs_a35025v1Dq.notEvaluated) {
            return hs_a35025v1Dq.hscall();
        } else {
            return hs_a35025v1Dq;
        }
    };
    hs_a35125v1Ds.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcfromEnum525v1Dt.evaluateOnce = function () {
        if (hs_a35125v1Ds.notEvaluated) {
            return hs_a35125v1Ds.hscall();
        } else {
            return hs_a35125v1Ds;
        }
    };
    hs_a35225v1Du.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFrom525v1Dv.evaluateOnce = function () {
        if (hs_a35225v1Du.notEvaluated) {
            return hs_a35225v1Du.hscall();
        } else {
            return hs_a35225v1Du;
        }
    };
    hs_a35325v1Dw.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThen525v1Dx.evaluateOnce = function () {
        if (hs_a35325v1Dw.notEvaluated) {
            return hs_a35325v1Dw.hscall();
        } else {
            return hs_a35325v1Dw;
        }
    };
    hs_a35425v1Dy.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromTo525v1Dz.evaluateOnce = function () {
        if (hs_a35425v1Dy.notEvaluated) {
            return hs_a35425v1Dy.hscall();
        } else {
            return hs_a35425v1Dy;
        }
    };
    hs_a35525v1DA.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThenTo525v1DB.evaluateOnce = function () {
        if (hs_a35525v1DA.notEvaluated) {
            return hs_a35525v1DA.hscall();
        } else {
            return hs_a35525v1DA;
        }
    };
    this.hs_zdfEnumCUid.data = [hs_a34825v1Dm, hs_a34925v1Do, hs_a35025v1Dq, hs_a35125v1Ds, hs_a35225v1Du, hs_a35325v1Dw, hs_a35425v1Dy, hs_a35525v1DA];
    hs_a35625v1DC.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczp525v1DD.evaluateOnce = function () {
        if (hs_a35625v1DC.notEvaluated) {
            return hs_a35625v1DC.hscall();
        } else {
            return hs_a35625v1DC;
        }
    };
    hs_a35725v1DE.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczt525v1DF.evaluateOnce = function () {
        if (hs_a35725v1DE.notEvaluated) {
            return hs_a35725v1DE.hscall();
        } else {
            return hs_a35725v1DE;
        }
    };
    hs_a35825v1DG.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczm525v1DH.evaluateOnce = function () {
        if (hs_a35825v1DG.notEvaluated) {
            return hs_a35825v1DG.hscall();
        } else {
            return hs_a35825v1DG;
        }
    };
    hs_a35925v1DI.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcnegate525v1DJ.evaluateOnce = function () {
        if (hs_a35925v1DI.notEvaluated) {
            return hs_a35925v1DI.hscall();
        } else {
            return hs_a35925v1DI;
        }
    };
    hs_a36025v1DK.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcabs525v1DL.evaluateOnce = function () {
        if (hs_a36025v1DK.notEvaluated) {
            return hs_a36025v1DK.hscall();
        } else {
            return hs_a36025v1DK;
        }
    };
    hs_a36125v1DM.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcsignum525v1DN.evaluateOnce = function () {
        if (hs_a36125v1DM.notEvaluated) {
            return hs_a36125v1DM.hscall();
        } else {
            return hs_a36125v1DM;
        }
    };
    hs_a36225v1DO.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcfromInteger525v1DP.evaluateOnce = function () {
        if (hs_a36225v1DO.notEvaluated) {
            return hs_a36225v1DO.hscall();
        } else {
            return hs_a36225v1DO;
        }
    };
    hs_a36325v1DQ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdccompare525v1DR.evaluateOnce = function () {
        if (hs_a36325v1DQ.notEvaluated) {
            return hs_a36325v1DQ.hscall();
        } else {
            return hs_a36325v1DQ;
        }
    };
    hs_a36425v1DS.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczl525v1DT.evaluateOnce = function () {
        if (hs_a36425v1DS.notEvaluated) {
            return hs_a36425v1DS.hscall();
        } else {
            return hs_a36425v1DS;
        }
    };
    hs_a36525v1DU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczgze525v1DV.evaluateOnce = function () {
        if (hs_a36525v1DU.notEvaluated) {
            return hs_a36525v1DU.hscall();
        } else {
            return hs_a36525v1DU;
        }
    };
    hs_a36625v1DW.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczg525v1DX.evaluateOnce = function () {
        if (hs_a36625v1DW.notEvaluated) {
            return hs_a36625v1DW.hscall();
        } else {
            return hs_a36625v1DW;
        }
    };
    hs_a36725v1DY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczlze525v1DZ.evaluateOnce = function () {
        if (hs_a36725v1DY.notEvaluated) {
            return hs_a36725v1DY.hscall();
        } else {
            return hs_a36725v1DY;
        }
    };
    hs_a36825v1E0.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmax525v1E1.evaluateOnce = function () {
        if (hs_a36825v1E0.notEvaluated) {
            return hs_a36825v1E0.hscall();
        } else {
            return hs_a36825v1E0;
        }
    };
    hs_a36925v1E2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmin525v1E3.evaluateOnce = function () {
        if (hs_a36925v1E2.notEvaluated) {
            return hs_a36925v1E2.hscall();
        } else {
            return hs_a36925v1E2;
        }
    };
    hs_a37025v1E4.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczeze525v1E5.evaluateOnce = function () {
        if (hs_a37025v1E4.notEvaluated) {
            return hs_a37025v1E4.hscall();
        } else {
            return hs_a37025v1E4;
        }
    };
    hs_a37125v1E6.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczsze525v1E7.evaluateOnce = function () {
        if (hs_a37125v1E6.notEvaluated) {
            return hs_a37125v1E6.hscall();
        } else {
            return hs_a37125v1E6;
        }
    };
    this.hs_zdfEqCUid.data = [hs_a37025v1E4, hs_a37125v1E6];
    this.hs_zdfOrdCUid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCUid, hs_a36325v1DQ, hs_a36425v1DS, hs_a36525v1DU, hs_a36625v1DW, hs_a36725v1DY, hs_a36825v1E0, hs_a36925v1E2];
    this.hs_zdfNumCUid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCUid, $hs.modules.SystemziPosixziTypes.hs_zdfShowCUid, hs_a35625v1DC, hs_a35725v1DE, hs_a35825v1DG, hs_a35925v1DI, hs_a36025v1DK, hs_a36125v1DM, hs_a36225v1DO];
    this.hs_zdfRealCUid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCUid, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCUid, hs_a33925v1D4];
    this.hs_zdfIntegralCUid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfRealCUid, $hs.modules.SystemziPosixziTypes.hs_zdfEnumCUid, hs_a33025v1CM, hs_a33125v1CO, hs_a33225v1CQ, hs_a33325v1CS, hs_a33425v1CU, hs_a33525v1CW, hs_a33625v1CY];
    this.hs_zdfBitsCUid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCUid, hs_a31325v1Ce, hs_a31425v1Cg, hs_a31525v1Ci, hs_a31625v1Ck, hs_a31725v1Cm, hs_a31825v1Co, hs_a31925v1Cq, hs_a32025v1Cs, hs_a32125v1Cu, hs_a32225v1Cw, hs_a32325v1Cy, hs_a32425v1CA, hs_a32525v1CC, hs_a32625v1CE, hs_a32725v1CG, hs_a32825v1CI, hs_a32925v1CK];
    hs_a37225v1E8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizazi425v1E9.evaluateOnce = function () {
        if (hs_a37225v1E8.notEvaluated) {
            return hs_a37225v1E8.hscall();
        } else {
            return hs_a37225v1E8;
        }
    };
    hs_a37325v1Ea.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizbzi425v1Eb.evaluateOnce = function () {
        if (hs_a37325v1Ea.notEvaluated) {
            return hs_a37325v1Ea.hscall();
        } else {
            return hs_a37325v1Ea;
        }
    };
    hs_a37425v1Ec.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcxor425v1Ed.evaluateOnce = function () {
        if (hs_a37425v1Ec.notEvaluated) {
            return hs_a37425v1Ec.hscall();
        } else {
            return hs_a37425v1Ec;
        }
    };
    hs_a37525v1Ee.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplement425v1Ef.evaluateOnce = function () {
        if (hs_a37525v1Ee.notEvaluated) {
            return hs_a37525v1Ee.hscall();
        } else {
            return hs_a37525v1Ee;
        }
    };
    hs_a37625v1Eg.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshift425v1Eh.evaluateOnce = function () {
        if (hs_a37625v1Eg.notEvaluated) {
            return hs_a37625v1Eg.hscall();
        } else {
            return hs_a37625v1Eg;
        }
    };
    hs_a37725v1Ei.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotate425v1Ej.evaluateOnce = function () {
        if (hs_a37725v1Ei.notEvaluated) {
            return hs_a37725v1Ei.hscall();
        } else {
            return hs_a37725v1Ei;
        }
    };
    hs_a37825v1Ek.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbit425v1El.evaluateOnce = function () {
        if (hs_a37825v1Ek.notEvaluated) {
            return hs_a37825v1Ek.hscall();
        } else {
            return hs_a37825v1Ek;
        }
    };
    hs_a37925v1Em.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcsetBit425v1En.evaluateOnce = function () {
        if (hs_a37925v1Em.notEvaluated) {
            return hs_a37925v1Em.hscall();
        } else {
            return hs_a37925v1Em;
        }
    };
    hs_a38025v1Eo.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcclearBit425v1Ep.evaluateOnce = function () {
        if (hs_a38025v1Eo.notEvaluated) {
            return hs_a38025v1Eo.hscall();
        } else {
            return hs_a38025v1Eo;
        }
    };
    hs_a38125v1Eq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplementBit425v1Er.evaluateOnce = function () {
        if (hs_a38125v1Eq.notEvaluated) {
            return hs_a38125v1Eq.hscall();
        } else {
            return hs_a38125v1Eq;
        }
    };
    hs_a38225v1Es.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdctestBit425v1Et.evaluateOnce = function () {
        if (hs_a38225v1Es.notEvaluated) {
            return hs_a38225v1Es.hscall();
        } else {
            return hs_a38225v1Es;
        }
    };
    hs_a38325v1Eu.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbitSizze425v1Ev.evaluateOnce = function () {
        if (hs_a38325v1Eu.notEvaluated) {
            return hs_a38325v1Eu.hscall();
        } else {
            return hs_a38325v1Eu;
        }
    };
    hs_a38425v1Ew.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcisSigned425v1Ex.evaluateOnce = function () {
        if (hs_a38425v1Ew.notEvaluated) {
            return hs_a38425v1Ew.hscall();
        } else {
            return hs_a38425v1Ew;
        }
    };
    hs_a38525v1Ey.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftL425v1Ez.evaluateOnce = function () {
        if (hs_a38525v1Ey.notEvaluated) {
            return hs_a38525v1Ey.hscall();
        } else {
            return hs_a38525v1Ey;
        }
    };
    hs_a38625v1EA.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftR425v1EB.evaluateOnce = function () {
        if (hs_a38625v1EA.notEvaluated) {
            return hs_a38625v1EA.hscall();
        } else {
            return hs_a38625v1EA;
        }
    };
    hs_a38725v1EC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateL425v1ED.evaluateOnce = function () {
        if (hs_a38725v1EC.notEvaluated) {
            return hs_a38725v1EC.hscall();
        } else {
            return hs_a38725v1EC;
        }
    };
    hs_a38825v1EE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateR425v1EF.evaluateOnce = function () {
        if (hs_a38825v1EE.notEvaluated) {
            return hs_a38825v1EE.hscall();
        } else {
            return hs_a38825v1EE;
        }
    };
    hs_a38925v1EG.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquot425v1EH.evaluateOnce = function () {
        if (hs_a38925v1EG.notEvaluated) {
            return hs_a38925v1EG.hscall();
        } else {
            return hs_a38925v1EG;
        }
    };
    hs_a39025v1EI.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcrem425v1EJ.evaluateOnce = function () {
        if (hs_a39025v1EI.notEvaluated) {
            return hs_a39025v1EI.hscall();
        } else {
            return hs_a39025v1EI;
        }
    };
    hs_a39125v1EK.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdiv425v1EL.evaluateOnce = function () {
        if (hs_a39125v1EK.notEvaluated) {
            return hs_a39125v1EK.hscall();
        } else {
            return hs_a39125v1EK;
        }
    };
    hs_a39225v1EM.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcmod425v1EN.evaluateOnce = function () {
        if (hs_a39225v1EM.notEvaluated) {
            return hs_a39225v1EM.hscall();
        } else {
            return hs_a39225v1EM;
        }
    };
    hs_a39325v1EO.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquotRem425v1EP.evaluateOnce = function () {
        if (hs_a39325v1EO.notEvaluated) {
            return hs_a39325v1EO.hscall();
        } else {
            return hs_a39325v1EO;
        }
    };
    hs_a39425v1EQ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdivMod425v1ER.evaluateOnce = function () {
        if (hs_a39425v1EQ.notEvaluated) {
            return hs_a39425v1EQ.hscall();
        } else {
            return hs_a39425v1EQ;
        }
    };
    hs_a39525v1ES.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdctoInteger425v1ET.evaluateOnce = function () {
        if (hs_a39525v1ES.notEvaluated) {
            return hs_a39525v1ES.hscall();
        } else {
            return hs_a39525v1ES;
        }
    };
    hs_a39625v1EU.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcminBound425v1EV.evaluateOnce = function () {
        if (hs_a39625v1EU.notEvaluated) {
            return hs_a39625v1EU.hscall();
        } else {
            return hs_a39625v1EU;
        }
    };
    hs_a39725v1EW.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcmaxBound425v1EX.evaluateOnce = function () {
        if (hs_a39725v1EW.notEvaluated) {
            return hs_a39725v1EW.hscall();
        } else {
            return hs_a39725v1EW;
        }
    };
    this.hs_zdfBoundedCNlink.data = [hs_a39625v1EU, hs_a39725v1EW];
    hs_a39825v1EY.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord32);
    };
    hs_zdctoRational625v1EZ.evaluateOnce = function () {
        if (hs_a39825v1EY.notEvaluated) {
            return hs_a39825v1EY.hscall();
        } else {
            return hs_a39825v1EY;
        }
    };
    hs_a39925v1F0.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcsizzeOf625v1F1.evaluateOnce = function () {
        if (hs_a39925v1F0.notEvaluated) {
            return hs_a39925v1F0.hscall();
        } else {
            return hs_a39925v1F0;
        }
    };
    hs_a40025v1F2.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcalignment625v1F3.evaluateOnce = function () {
        if (hs_a40025v1F2.notEvaluated) {
            return hs_a40025v1F2.hscall();
        } else {
            return hs_a40025v1F2;
        }
    };
    hs_a40125v1F4.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekElemOff625v1F5.evaluateOnce = function () {
        if (hs_a40125v1F4.notEvaluated) {
            return hs_a40125v1F4.hscall();
        } else {
            return hs_a40125v1F4;
        }
    };
    hs_a40225v1F6.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeElemOff625v1F7.evaluateOnce = function () {
        if (hs_a40225v1F6.notEvaluated) {
            return hs_a40225v1F6.hscall();
        } else {
            return hs_a40225v1F6;
        }
    };
    hs_a40325v1F8.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekByteOff625v1F9.evaluateOnce = function () {
        if (hs_a40325v1F8.notEvaluated) {
            return hs_a40325v1F8.hscall();
        } else {
            return hs_a40325v1F8;
        }
    };
    hs_a40425v1Fa.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeByteOff625v1Fb.evaluateOnce = function () {
        if (hs_a40425v1Fa.notEvaluated) {
            return hs_a40425v1Fa.hscall();
        } else {
            return hs_a40425v1Fa;
        }
    };
    hs_a40525v1Fc.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeek625v1Fd.evaluateOnce = function () {
        if (hs_a40525v1Fc.notEvaluated) {
            return hs_a40525v1Fc.hscall();
        } else {
            return hs_a40525v1Fc;
        }
    };
    hs_a40625v1Fe.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpoke625v1Ff.evaluateOnce = function () {
        if (hs_a40625v1Fe.notEvaluated) {
            return hs_a40625v1Fe.hscall();
        } else {
            return hs_a40625v1Fe;
        }
    };
    this.hs_zdfStorableCNlink.data = [hs_a39925v1F0, hs_a40025v1F2, hs_a40125v1F4, hs_a40225v1F6, hs_a40325v1F8, hs_a40425v1Fa, hs_a40525v1Fc, hs_a40625v1Fe];
    hs_a40725v1Fg.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcsucc625v1Fh.evaluateOnce = function () {
        if (hs_a40725v1Fg.notEvaluated) {
            return hs_a40725v1Fg.hscall();
        } else {
            return hs_a40725v1Fg;
        }
    };
    hs_a40825v1Fi.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcpred625v1Fj.evaluateOnce = function () {
        if (hs_a40825v1Fi.notEvaluated) {
            return hs_a40825v1Fi.hscall();
        } else {
            return hs_a40825v1Fi;
        }
    };
    hs_a40925v1Fk.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdctoEnum625v1Fl.evaluateOnce = function () {
        if (hs_a40925v1Fk.notEvaluated) {
            return hs_a40925v1Fk.hscall();
        } else {
            return hs_a40925v1Fk;
        }
    };
    hs_a41025v1Fm.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcfromEnum625v1Fn.evaluateOnce = function () {
        if (hs_a41025v1Fm.notEvaluated) {
            return hs_a41025v1Fm.hscall();
        } else {
            return hs_a41025v1Fm;
        }
    };
    hs_a41125v1Fo.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFrom625v1Fp.evaluateOnce = function () {
        if (hs_a41125v1Fo.notEvaluated) {
            return hs_a41125v1Fo.hscall();
        } else {
            return hs_a41125v1Fo;
        }
    };
    hs_a41225v1Fq.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThen625v1Fr.evaluateOnce = function () {
        if (hs_a41225v1Fq.notEvaluated) {
            return hs_a41225v1Fq.hscall();
        } else {
            return hs_a41225v1Fq;
        }
    };
    hs_a41325v1Fs.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromTo625v1Ft.evaluateOnce = function () {
        if (hs_a41325v1Fs.notEvaluated) {
            return hs_a41325v1Fs.hscall();
        } else {
            return hs_a41325v1Fs;
        }
    };
    hs_a41425v1Fu.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThenTo625v1Fv.evaluateOnce = function () {
        if (hs_a41425v1Fu.notEvaluated) {
            return hs_a41425v1Fu.hscall();
        } else {
            return hs_a41425v1Fu;
        }
    };
    this.hs_zdfEnumCNlink.data = [hs_a40725v1Fg, hs_a40825v1Fi, hs_a40925v1Fk, hs_a41025v1Fm, hs_a41125v1Fo, hs_a41225v1Fq, hs_a41325v1Fs, hs_a41425v1Fu];
    hs_a41525v1Fw.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczp625v1Fx.evaluateOnce = function () {
        if (hs_a41525v1Fw.notEvaluated) {
            return hs_a41525v1Fw.hscall();
        } else {
            return hs_a41525v1Fw;
        }
    };
    hs_a41625v1Fy.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczt625v1Fz.evaluateOnce = function () {
        if (hs_a41625v1Fy.notEvaluated) {
            return hs_a41625v1Fy.hscall();
        } else {
            return hs_a41625v1Fy;
        }
    };
    hs_a41725v1FA.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczm625v1FB.evaluateOnce = function () {
        if (hs_a41725v1FA.notEvaluated) {
            return hs_a41725v1FA.hscall();
        } else {
            return hs_a41725v1FA;
        }
    };
    hs_a41825v1FC.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcnegate625v1FD.evaluateOnce = function () {
        if (hs_a41825v1FC.notEvaluated) {
            return hs_a41825v1FC.hscall();
        } else {
            return hs_a41825v1FC;
        }
    };
    hs_a41925v1FE.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcabs625v1FF.evaluateOnce = function () {
        if (hs_a41925v1FE.notEvaluated) {
            return hs_a41925v1FE.hscall();
        } else {
            return hs_a41925v1FE;
        }
    };
    hs_a42025v1FG.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcsignum625v1FH.evaluateOnce = function () {
        if (hs_a42025v1FG.notEvaluated) {
            return hs_a42025v1FG.hscall();
        } else {
            return hs_a42025v1FG;
        }
    };
    hs_a42125v1FI.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcfromInteger625v1FJ.evaluateOnce = function () {
        if (hs_a42125v1FI.notEvaluated) {
            return hs_a42125v1FI.hscall();
        } else {
            return hs_a42125v1FI;
        }
    };
    hs_a42225v1FK.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdccompare625v1FL.evaluateOnce = function () {
        if (hs_a42225v1FK.notEvaluated) {
            return hs_a42225v1FK.hscall();
        } else {
            return hs_a42225v1FK;
        }
    };
    hs_a42325v1FM.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczl625v1FN.evaluateOnce = function () {
        if (hs_a42325v1FM.notEvaluated) {
            return hs_a42325v1FM.hscall();
        } else {
            return hs_a42325v1FM;
        }
    };
    hs_a42425v1FO.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczgze625v1FP.evaluateOnce = function () {
        if (hs_a42425v1FO.notEvaluated) {
            return hs_a42425v1FO.hscall();
        } else {
            return hs_a42425v1FO;
        }
    };
    hs_a42525v1FQ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczg625v1FR.evaluateOnce = function () {
        if (hs_a42525v1FQ.notEvaluated) {
            return hs_a42525v1FQ.hscall();
        } else {
            return hs_a42525v1FQ;
        }
    };
    hs_a42625v1FS.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczlze625v1FT.evaluateOnce = function () {
        if (hs_a42625v1FS.notEvaluated) {
            return hs_a42625v1FS.hscall();
        } else {
            return hs_a42625v1FS;
        }
    };
    hs_a42725v1FU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmax625v1FV.evaluateOnce = function () {
        if (hs_a42725v1FU.notEvaluated) {
            return hs_a42725v1FU.hscall();
        } else {
            return hs_a42725v1FU;
        }
    };
    hs_a42825v1FW.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmin625v1FX.evaluateOnce = function () {
        if (hs_a42825v1FW.notEvaluated) {
            return hs_a42825v1FW.hscall();
        } else {
            return hs_a42825v1FW;
        }
    };
    hs_a42925v1FY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczeze625v1FZ.evaluateOnce = function () {
        if (hs_a42925v1FY.notEvaluated) {
            return hs_a42925v1FY.hscall();
        } else {
            return hs_a42925v1FY;
        }
    };
    hs_a43025v1G0.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczsze625v1G1.evaluateOnce = function () {
        if (hs_a43025v1G0.notEvaluated) {
            return hs_a43025v1G0.hscall();
        } else {
            return hs_a43025v1G0;
        }
    };
    this.hs_zdfEqCNlink.data = [hs_a42925v1FY, hs_a43025v1G0];
    this.hs_zdfOrdCNlink.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCNlink, hs_a42225v1FK, hs_a42325v1FM, hs_a42425v1FO, hs_a42525v1FQ, hs_a42625v1FS, hs_a42725v1FU, hs_a42825v1FW];
    this.hs_zdfNumCNlink.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCNlink, $hs.modules.SystemziPosixziTypes.hs_zdfShowCNlink, hs_a41525v1Fw, hs_a41625v1Fy, hs_a41725v1FA, hs_a41825v1FC, hs_a41925v1FE, hs_a42025v1FG, hs_a42125v1FI];
    this.hs_zdfRealCNlink.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCNlink, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCNlink, hs_a39825v1EY];
    this.hs_zdfIntegralCNlink.data = [$hs.modules.SystemziPosixziTypes.hs_zdfRealCNlink, $hs.modules.SystemziPosixziTypes.hs_zdfEnumCNlink, hs_a38925v1EG, hs_a39025v1EI, hs_a39125v1EK, hs_a39225v1EM, hs_a39325v1EO, hs_a39425v1EQ, hs_a39525v1ES];
    this.hs_zdfBitsCNlink.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCNlink, hs_a37225v1E8, hs_a37325v1Ea, hs_a37425v1Ec, hs_a37525v1Ee, hs_a37625v1Eg, hs_a37725v1Ei, hs_a37825v1Ek, hs_a37925v1Em, hs_a38025v1Eo, hs_a38125v1Eq, hs_a38225v1Es, hs_a38325v1Eu, hs_a38425v1Ew, hs_a38525v1Ey, hs_a38625v1EA, hs_a38725v1EC, hs_a38825v1EE];
    hs_a43125v1G2.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizazi525v1G3.evaluateOnce = function () {
        if (hs_a43125v1G2.notEvaluated) {
            return hs_a43125v1G2.hscall();
        } else {
            return hs_a43125v1G2;
        }
    };
    hs_a43225v1G4.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizbzi525v1G5.evaluateOnce = function () {
        if (hs_a43225v1G4.notEvaluated) {
            return hs_a43225v1G4.hscall();
        } else {
            return hs_a43225v1G4;
        }
    };
    hs_a43325v1G6.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcxor525v1G7.evaluateOnce = function () {
        if (hs_a43325v1G6.notEvaluated) {
            return hs_a43325v1G6.hscall();
        } else {
            return hs_a43325v1G6;
        }
    };
    hs_a43425v1G8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplement525v1G9.evaluateOnce = function () {
        if (hs_a43425v1G8.notEvaluated) {
            return hs_a43425v1G8.hscall();
        } else {
            return hs_a43425v1G8;
        }
    };
    hs_a43525v1Ga.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshift525v1Gb.evaluateOnce = function () {
        if (hs_a43525v1Ga.notEvaluated) {
            return hs_a43525v1Ga.hscall();
        } else {
            return hs_a43525v1Ga;
        }
    };
    hs_a43625v1Gc.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotate525v1Gd.evaluateOnce = function () {
        if (hs_a43625v1Gc.notEvaluated) {
            return hs_a43625v1Gc.hscall();
        } else {
            return hs_a43625v1Gc;
        }
    };
    hs_a43725v1Ge.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbit525v1Gf.evaluateOnce = function () {
        if (hs_a43725v1Ge.notEvaluated) {
            return hs_a43725v1Ge.hscall();
        } else {
            return hs_a43725v1Ge;
        }
    };
    hs_a43825v1Gg.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcsetBit525v1Gh.evaluateOnce = function () {
        if (hs_a43825v1Gg.notEvaluated) {
            return hs_a43825v1Gg.hscall();
        } else {
            return hs_a43825v1Gg;
        }
    };
    hs_a43925v1Gi.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcclearBit525v1Gj.evaluateOnce = function () {
        if (hs_a43925v1Gi.notEvaluated) {
            return hs_a43925v1Gi.hscall();
        } else {
            return hs_a43925v1Gi;
        }
    };
    hs_a44025v1Gk.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplementBit525v1Gl.evaluateOnce = function () {
        if (hs_a44025v1Gk.notEvaluated) {
            return hs_a44025v1Gk.hscall();
        } else {
            return hs_a44025v1Gk;
        }
    };
    hs_a44125v1Gm.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdctestBit525v1Gn.evaluateOnce = function () {
        if (hs_a44125v1Gm.notEvaluated) {
            return hs_a44125v1Gm.hscall();
        } else {
            return hs_a44125v1Gm;
        }
    };
    hs_a44225v1Go.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbitSizze525v1Gp.evaluateOnce = function () {
        if (hs_a44225v1Go.notEvaluated) {
            return hs_a44225v1Go.hscall();
        } else {
            return hs_a44225v1Go;
        }
    };
    hs_a44325v1Gq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcisSigned525v1Gr.evaluateOnce = function () {
        if (hs_a44325v1Gq.notEvaluated) {
            return hs_a44325v1Gq.hscall();
        } else {
            return hs_a44325v1Gq;
        }
    };
    hs_a44425v1Gs.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftL525v1Gt.evaluateOnce = function () {
        if (hs_a44425v1Gs.notEvaluated) {
            return hs_a44425v1Gs.hscall();
        } else {
            return hs_a44425v1Gs;
        }
    };
    hs_a44525v1Gu.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftR525v1Gv.evaluateOnce = function () {
        if (hs_a44525v1Gu.notEvaluated) {
            return hs_a44525v1Gu.hscall();
        } else {
            return hs_a44525v1Gu;
        }
    };
    hs_a44625v1Gw.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateL525v1Gx.evaluateOnce = function () {
        if (hs_a44625v1Gw.notEvaluated) {
            return hs_a44625v1Gw.hscall();
        } else {
            return hs_a44625v1Gw;
        }
    };
    hs_a44725v1Gy.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateR525v1Gz.evaluateOnce = function () {
        if (hs_a44725v1Gy.notEvaluated) {
            return hs_a44725v1Gy.hscall();
        } else {
            return hs_a44725v1Gy;
        }
    };
    hs_a44825v1GA.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquot525v1GB.evaluateOnce = function () {
        if (hs_a44825v1GA.notEvaluated) {
            return hs_a44825v1GA.hscall();
        } else {
            return hs_a44825v1GA;
        }
    };
    hs_a44925v1GC.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcrem525v1GD.evaluateOnce = function () {
        if (hs_a44925v1GC.notEvaluated) {
            return hs_a44925v1GC.hscall();
        } else {
            return hs_a44925v1GC;
        }
    };
    hs_a45025v1GE.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdiv525v1GF.evaluateOnce = function () {
        if (hs_a45025v1GE.notEvaluated) {
            return hs_a45025v1GE.hscall();
        } else {
            return hs_a45025v1GE;
        }
    };
    hs_a45125v1GG.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcmod525v1GH.evaluateOnce = function () {
        if (hs_a45125v1GG.notEvaluated) {
            return hs_a45125v1GG.hscall();
        } else {
            return hs_a45125v1GG;
        }
    };
    hs_a45225v1GI.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquotRem525v1GJ.evaluateOnce = function () {
        if (hs_a45225v1GI.notEvaluated) {
            return hs_a45225v1GI.hscall();
        } else {
            return hs_a45225v1GI;
        }
    };
    hs_a45325v1GK.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdivMod525v1GL.evaluateOnce = function () {
        if (hs_a45325v1GK.notEvaluated) {
            return hs_a45325v1GK.hscall();
        } else {
            return hs_a45325v1GK;
        }
    };
    hs_a45425v1GM.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdctoInteger525v1GN.evaluateOnce = function () {
        if (hs_a45425v1GM.notEvaluated) {
            return hs_a45425v1GM.hscall();
        } else {
            return hs_a45425v1GM;
        }
    };
    hs_a45525v1GO.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcminBound525v1GP.evaluateOnce = function () {
        if (hs_a45525v1GO.notEvaluated) {
            return hs_a45525v1GO.hscall();
        } else {
            return hs_a45525v1GO;
        }
    };
    hs_a45625v1GQ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcmaxBound525v1GR.evaluateOnce = function () {
        if (hs_a45625v1GQ.notEvaluated) {
            return hs_a45625v1GQ.hscall();
        } else {
            return hs_a45625v1GQ;
        }
    };
    this.hs_zdfBoundedCGid.data = [hs_a45525v1GO, hs_a45625v1GQ];
    hs_a45725v1GS.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord32);
    };
    hs_zdctoRational725v1GT.evaluateOnce = function () {
        if (hs_a45725v1GS.notEvaluated) {
            return hs_a45725v1GS.hscall();
        } else {
            return hs_a45725v1GS;
        }
    };
    hs_a45825v1GU.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcsizzeOf725v1GV.evaluateOnce = function () {
        if (hs_a45825v1GU.notEvaluated) {
            return hs_a45825v1GU.hscall();
        } else {
            return hs_a45825v1GU;
        }
    };
    hs_a45925v1GW.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcalignment725v1GX.evaluateOnce = function () {
        if (hs_a45925v1GW.notEvaluated) {
            return hs_a45925v1GW.hscall();
        } else {
            return hs_a45925v1GW;
        }
    };
    hs_a46025v1GY.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekElemOff725v1GZ.evaluateOnce = function () {
        if (hs_a46025v1GY.notEvaluated) {
            return hs_a46025v1GY.hscall();
        } else {
            return hs_a46025v1GY;
        }
    };
    hs_a46125v1H0.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeElemOff725v1H1.evaluateOnce = function () {
        if (hs_a46125v1H0.notEvaluated) {
            return hs_a46125v1H0.hscall();
        } else {
            return hs_a46125v1H0;
        }
    };
    hs_a46225v1H2.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekByteOff725v1H3.evaluateOnce = function () {
        if (hs_a46225v1H2.notEvaluated) {
            return hs_a46225v1H2.hscall();
        } else {
            return hs_a46225v1H2;
        }
    };
    hs_a46325v1H4.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeByteOff725v1H5.evaluateOnce = function () {
        if (hs_a46325v1H4.notEvaluated) {
            return hs_a46325v1H4.hscall();
        } else {
            return hs_a46325v1H4;
        }
    };
    hs_a46425v1H6.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeek725v1H7.evaluateOnce = function () {
        if (hs_a46425v1H6.notEvaluated) {
            return hs_a46425v1H6.hscall();
        } else {
            return hs_a46425v1H6;
        }
    };
    hs_a46525v1H8.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpoke725v1H9.evaluateOnce = function () {
        if (hs_a46525v1H8.notEvaluated) {
            return hs_a46525v1H8.hscall();
        } else {
            return hs_a46525v1H8;
        }
    };
    this.hs_zdfStorableCGid.data = [hs_a45825v1GU, hs_a45925v1GW, hs_a46025v1GY, hs_a46125v1H0, hs_a46225v1H2, hs_a46325v1H4, hs_a46425v1H6, hs_a46525v1H8];
    hs_a46625v1Ha.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcsucc725v1Hb.evaluateOnce = function () {
        if (hs_a46625v1Ha.notEvaluated) {
            return hs_a46625v1Ha.hscall();
        } else {
            return hs_a46625v1Ha;
        }
    };
    hs_a46725v1Hc.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcpred725v1Hd.evaluateOnce = function () {
        if (hs_a46725v1Hc.notEvaluated) {
            return hs_a46725v1Hc.hscall();
        } else {
            return hs_a46725v1Hc;
        }
    };
    hs_a46825v1He.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdctoEnum725v1Hf.evaluateOnce = function () {
        if (hs_a46825v1He.notEvaluated) {
            return hs_a46825v1He.hscall();
        } else {
            return hs_a46825v1He;
        }
    };
    hs_a46925v1Hg.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcfromEnum725v1Hh.evaluateOnce = function () {
        if (hs_a46925v1Hg.notEvaluated) {
            return hs_a46925v1Hg.hscall();
        } else {
            return hs_a46925v1Hg;
        }
    };
    hs_a47025v1Hi.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFrom725v1Hj.evaluateOnce = function () {
        if (hs_a47025v1Hi.notEvaluated) {
            return hs_a47025v1Hi.hscall();
        } else {
            return hs_a47025v1Hi;
        }
    };
    hs_a47125v1Hk.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThen725v1Hl.evaluateOnce = function () {
        if (hs_a47125v1Hk.notEvaluated) {
            return hs_a47125v1Hk.hscall();
        } else {
            return hs_a47125v1Hk;
        }
    };
    hs_a47225v1Hm.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromTo725v1Hn.evaluateOnce = function () {
        if (hs_a47225v1Hm.notEvaluated) {
            return hs_a47225v1Hm.hscall();
        } else {
            return hs_a47225v1Hm;
        }
    };
    hs_a47325v1Ho.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThenTo725v1Hp.evaluateOnce = function () {
        if (hs_a47325v1Ho.notEvaluated) {
            return hs_a47325v1Ho.hscall();
        } else {
            return hs_a47325v1Ho;
        }
    };
    this.hs_zdfEnumCGid.data = [hs_a46625v1Ha, hs_a46725v1Hc, hs_a46825v1He, hs_a46925v1Hg, hs_a47025v1Hi, hs_a47125v1Hk, hs_a47225v1Hm, hs_a47325v1Ho];
    hs_a47425v1Hq.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczp725v1Hr.evaluateOnce = function () {
        if (hs_a47425v1Hq.notEvaluated) {
            return hs_a47425v1Hq.hscall();
        } else {
            return hs_a47425v1Hq;
        }
    };
    hs_a47525v1Hs.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczt725v1Ht.evaluateOnce = function () {
        if (hs_a47525v1Hs.notEvaluated) {
            return hs_a47525v1Hs.hscall();
        } else {
            return hs_a47525v1Hs;
        }
    };
    hs_a47625v1Hu.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczm725v1Hv.evaluateOnce = function () {
        if (hs_a47625v1Hu.notEvaluated) {
            return hs_a47625v1Hu.hscall();
        } else {
            return hs_a47625v1Hu;
        }
    };
    hs_a47725v1Hw.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcnegate725v1Hx.evaluateOnce = function () {
        if (hs_a47725v1Hw.notEvaluated) {
            return hs_a47725v1Hw.hscall();
        } else {
            return hs_a47725v1Hw;
        }
    };
    hs_a47825v1Hy.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcabs725v1Hz.evaluateOnce = function () {
        if (hs_a47825v1Hy.notEvaluated) {
            return hs_a47825v1Hy.hscall();
        } else {
            return hs_a47825v1Hy;
        }
    };
    hs_a47925v1HA.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcsignum725v1HB.evaluateOnce = function () {
        if (hs_a47925v1HA.notEvaluated) {
            return hs_a47925v1HA.hscall();
        } else {
            return hs_a47925v1HA;
        }
    };
    hs_a48025v1HC.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcfromInteger725v1HD.evaluateOnce = function () {
        if (hs_a48025v1HC.notEvaluated) {
            return hs_a48025v1HC.hscall();
        } else {
            return hs_a48025v1HC;
        }
    };
    hs_a48125v1HE.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdccompare725v1HF.evaluateOnce = function () {
        if (hs_a48125v1HE.notEvaluated) {
            return hs_a48125v1HE.hscall();
        } else {
            return hs_a48125v1HE;
        }
    };
    hs_a48225v1HG.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczl725v1HH.evaluateOnce = function () {
        if (hs_a48225v1HG.notEvaluated) {
            return hs_a48225v1HG.hscall();
        } else {
            return hs_a48225v1HG;
        }
    };
    hs_a48325v1HI.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczgze725v1HJ.evaluateOnce = function () {
        if (hs_a48325v1HI.notEvaluated) {
            return hs_a48325v1HI.hscall();
        } else {
            return hs_a48325v1HI;
        }
    };
    hs_a48425v1HK.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczg725v1HL.evaluateOnce = function () {
        if (hs_a48425v1HK.notEvaluated) {
            return hs_a48425v1HK.hscall();
        } else {
            return hs_a48425v1HK;
        }
    };
    hs_a48525v1HM.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczlze725v1HN.evaluateOnce = function () {
        if (hs_a48525v1HM.notEvaluated) {
            return hs_a48525v1HM.hscall();
        } else {
            return hs_a48525v1HM;
        }
    };
    hs_a48625v1HO.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmax725v1HP.evaluateOnce = function () {
        if (hs_a48625v1HO.notEvaluated) {
            return hs_a48625v1HO.hscall();
        } else {
            return hs_a48625v1HO;
        }
    };
    hs_a48725v1HQ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmin725v1HR.evaluateOnce = function () {
        if (hs_a48725v1HQ.notEvaluated) {
            return hs_a48725v1HQ.hscall();
        } else {
            return hs_a48725v1HQ;
        }
    };
    hs_a48825v1HS.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczeze725v1HT.evaluateOnce = function () {
        if (hs_a48825v1HS.notEvaluated) {
            return hs_a48825v1HS.hscall();
        } else {
            return hs_a48825v1HS;
        }
    };
    hs_a48925v1HU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczsze725v1HV.evaluateOnce = function () {
        if (hs_a48925v1HU.notEvaluated) {
            return hs_a48925v1HU.hscall();
        } else {
            return hs_a48925v1HU;
        }
    };
    this.hs_zdfEqCGid.data = [hs_a48825v1HS, hs_a48925v1HU];
    this.hs_zdfOrdCGid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCGid, hs_a48125v1HE, hs_a48225v1HG, hs_a48325v1HI, hs_a48425v1HK, hs_a48525v1HM, hs_a48625v1HO, hs_a48725v1HQ];
    this.hs_zdfNumCGid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCGid, $hs.modules.SystemziPosixziTypes.hs_zdfShowCGid, hs_a47425v1Hq, hs_a47525v1Hs, hs_a47625v1Hu, hs_a47725v1Hw, hs_a47825v1Hy, hs_a47925v1HA, hs_a48025v1HC];
    this.hs_zdfRealCGid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCGid, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCGid, hs_a45725v1GS];
    this.hs_zdfIntegralCGid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfRealCGid, $hs.modules.SystemziPosixziTypes.hs_zdfEnumCGid, hs_a44825v1GA, hs_a44925v1GC, hs_a45025v1GE, hs_a45125v1GG, hs_a45225v1GI, hs_a45325v1GK, hs_a45425v1GM];
    this.hs_zdfBitsCGid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCGid, hs_a43125v1G2, hs_a43225v1G4, hs_a43325v1G6, hs_a43425v1G8, hs_a43525v1Ga, hs_a43625v1Gc, hs_a43725v1Ge, hs_a43825v1Gg, hs_a43925v1Gi, hs_a44025v1Gk, hs_a44125v1Gm, hs_a44225v1Go, hs_a44325v1Gq, hs_a44425v1Gs, hs_a44525v1Gu, hs_a44625v1Gw, hs_a44725v1Gy];
    hs_a49025v1HW.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizazi625v1HX.evaluateOnce = function () {
        if (hs_a49025v1HW.notEvaluated) {
            return hs_a49025v1HW.hscall();
        } else {
            return hs_a49025v1HW;
        }
    };
    hs_a49125v1HY.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizbzi625v1HZ.evaluateOnce = function () {
        if (hs_a49125v1HY.notEvaluated) {
            return hs_a49125v1HY.hscall();
        } else {
            return hs_a49125v1HY;
        }
    };
    hs_a49225v1I0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcxor625v1I1.evaluateOnce = function () {
        if (hs_a49225v1I0.notEvaluated) {
            return hs_a49225v1I0.hscall();
        } else {
            return hs_a49225v1I0;
        }
    };
    hs_a49325v1I2.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplement625v1I3.evaluateOnce = function () {
        if (hs_a49325v1I2.notEvaluated) {
            return hs_a49325v1I2.hscall();
        } else {
            return hs_a49325v1I2;
        }
    };
    hs_a49425v1I4.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshift625v1I5.evaluateOnce = function () {
        if (hs_a49425v1I4.notEvaluated) {
            return hs_a49425v1I4.hscall();
        } else {
            return hs_a49425v1I4;
        }
    };
    hs_a49525v1I6.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotate625v1I7.evaluateOnce = function () {
        if (hs_a49525v1I6.notEvaluated) {
            return hs_a49525v1I6.hscall();
        } else {
            return hs_a49525v1I6;
        }
    };
    hs_a49625v1I8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbit625v1I9.evaluateOnce = function () {
        if (hs_a49625v1I8.notEvaluated) {
            return hs_a49625v1I8.hscall();
        } else {
            return hs_a49625v1I8;
        }
    };
    hs_a49725v1Ia.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcsetBit625v1Ib.evaluateOnce = function () {
        if (hs_a49725v1Ia.notEvaluated) {
            return hs_a49725v1Ia.hscall();
        } else {
            return hs_a49725v1Ia;
        }
    };
    hs_a49825v1Ic.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcclearBit625v1Id.evaluateOnce = function () {
        if (hs_a49825v1Ic.notEvaluated) {
            return hs_a49825v1Ic.hscall();
        } else {
            return hs_a49825v1Ic;
        }
    };
    hs_a49925v1Ie.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplementBit625v1If.evaluateOnce = function () {
        if (hs_a49925v1Ie.notEvaluated) {
            return hs_a49925v1Ie.hscall();
        } else {
            return hs_a49925v1Ie;
        }
    };
    hs_a50025v1Ig.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdctestBit625v1Ih.evaluateOnce = function () {
        if (hs_a50025v1Ig.notEvaluated) {
            return hs_a50025v1Ig.hscall();
        } else {
            return hs_a50025v1Ig;
        }
    };
    hs_a50125v1Ii.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbitSizze625v1Ij.evaluateOnce = function () {
        if (hs_a50125v1Ii.notEvaluated) {
            return hs_a50125v1Ii.hscall();
        } else {
            return hs_a50125v1Ii;
        }
    };
    hs_a50225v1Ik.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcisSigned625v1Il.evaluateOnce = function () {
        if (hs_a50225v1Ik.notEvaluated) {
            return hs_a50225v1Ik.hscall();
        } else {
            return hs_a50225v1Ik;
        }
    };
    hs_a50325v1Im.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftL625v1In.evaluateOnce = function () {
        if (hs_a50325v1Im.notEvaluated) {
            return hs_a50325v1Im.hscall();
        } else {
            return hs_a50325v1Im;
        }
    };
    hs_a50425v1Io.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftR625v1Ip.evaluateOnce = function () {
        if (hs_a50425v1Io.notEvaluated) {
            return hs_a50425v1Io.hscall();
        } else {
            return hs_a50425v1Io;
        }
    };
    hs_a50525v1Iq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateL625v1Ir.evaluateOnce = function () {
        if (hs_a50525v1Iq.notEvaluated) {
            return hs_a50525v1Iq.hscall();
        } else {
            return hs_a50525v1Iq;
        }
    };
    hs_a50625v1Is.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateR625v1It.evaluateOnce = function () {
        if (hs_a50625v1Is.notEvaluated) {
            return hs_a50625v1Is.hscall();
        } else {
            return hs_a50625v1Is;
        }
    };
    hs_a50725v1Iu.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquot625v1Iv.evaluateOnce = function () {
        if (hs_a50725v1Iu.notEvaluated) {
            return hs_a50725v1Iu.hscall();
        } else {
            return hs_a50725v1Iu;
        }
    };
    hs_a50825v1Iw.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcrem625v1Ix.evaluateOnce = function () {
        if (hs_a50825v1Iw.notEvaluated) {
            return hs_a50825v1Iw.hscall();
        } else {
            return hs_a50825v1Iw;
        }
    };
    hs_a50925v1Iy.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdiv625v1Iz.evaluateOnce = function () {
        if (hs_a50925v1Iy.notEvaluated) {
            return hs_a50925v1Iy.hscall();
        } else {
            return hs_a50925v1Iy;
        }
    };
    hs_a51025v1IA.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcmod625v1IB.evaluateOnce = function () {
        if (hs_a51025v1IA.notEvaluated) {
            return hs_a51025v1IA.hscall();
        } else {
            return hs_a51025v1IA;
        }
    };
    hs_a51125v1IC.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquotRem625v1ID.evaluateOnce = function () {
        if (hs_a51125v1IC.notEvaluated) {
            return hs_a51125v1IC.hscall();
        } else {
            return hs_a51125v1IC;
        }
    };
    hs_a51225v1IE.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdivMod625v1IF.evaluateOnce = function () {
        if (hs_a51225v1IE.notEvaluated) {
            return hs_a51225v1IE.hscall();
        } else {
            return hs_a51225v1IE;
        }
    };
    hs_a51325v1IG.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdctoInteger625v1IH.evaluateOnce = function () {
        if (hs_a51325v1IG.notEvaluated) {
            return hs_a51325v1IG.hscall();
        } else {
            return hs_a51325v1IG;
        }
    };
    hs_a51425v1II.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcminBound625v1IJ.evaluateOnce = function () {
        if (hs_a51425v1II.notEvaluated) {
            return hs_a51425v1II.hscall();
        } else {
            return hs_a51425v1II;
        }
    };
    hs_a51525v1IK.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcmaxBound625v1IL.evaluateOnce = function () {
        if (hs_a51525v1IK.notEvaluated) {
            return hs_a51525v1IK.hscall();
        } else {
            return hs_a51525v1IK;
        }
    };
    this.hs_zdfBoundedCSsizze.data = [hs_a51425v1II, hs_a51525v1IK];
    hs_a51625v1IM.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt32);
    };
    hs_zdctoRational825v1IN.evaluateOnce = function () {
        if (hs_a51625v1IM.notEvaluated) {
            return hs_a51625v1IM.hscall();
        } else {
            return hs_a51625v1IM;
        }
    };
    hs_a51725v1IO.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcsizzeOf825v1IP.evaluateOnce = function () {
        if (hs_a51725v1IO.notEvaluated) {
            return hs_a51725v1IO.hscall();
        } else {
            return hs_a51725v1IO;
        }
    };
    hs_a51825v1IQ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcalignment825v1IR.evaluateOnce = function () {
        if (hs_a51825v1IQ.notEvaluated) {
            return hs_a51825v1IQ.hscall();
        } else {
            return hs_a51825v1IQ;
        }
    };
    hs_a51925v1IS.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekElemOff825v1IT.evaluateOnce = function () {
        if (hs_a51925v1IS.notEvaluated) {
            return hs_a51925v1IS.hscall();
        } else {
            return hs_a51925v1IS;
        }
    };
    hs_a52025v1IU.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeElemOff825v1IV.evaluateOnce = function () {
        if (hs_a52025v1IU.notEvaluated) {
            return hs_a52025v1IU.hscall();
        } else {
            return hs_a52025v1IU;
        }
    };
    hs_a52125v1IW.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekByteOff825v1IX.evaluateOnce = function () {
        if (hs_a52125v1IW.notEvaluated) {
            return hs_a52125v1IW.hscall();
        } else {
            return hs_a52125v1IW;
        }
    };
    hs_a52225v1IY.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeByteOff825v1IZ.evaluateOnce = function () {
        if (hs_a52225v1IY.notEvaluated) {
            return hs_a52225v1IY.hscall();
        } else {
            return hs_a52225v1IY;
        }
    };
    hs_a52325v1J0.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeek825v1J1.evaluateOnce = function () {
        if (hs_a52325v1J0.notEvaluated) {
            return hs_a52325v1J0.hscall();
        } else {
            return hs_a52325v1J0;
        }
    };
    hs_a52425v1J2.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpoke825v1J3.evaluateOnce = function () {
        if (hs_a52425v1J2.notEvaluated) {
            return hs_a52425v1J2.hscall();
        } else {
            return hs_a52425v1J2;
        }
    };
    this.hs_zdfStorableCSsizze.data = [hs_a51725v1IO, hs_a51825v1IQ, hs_a51925v1IS, hs_a52025v1IU, hs_a52125v1IW, hs_a52225v1IY, hs_a52325v1J0, hs_a52425v1J2];
    hs_a52525v1J4.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcsucc825v1J5.evaluateOnce = function () {
        if (hs_a52525v1J4.notEvaluated) {
            return hs_a52525v1J4.hscall();
        } else {
            return hs_a52525v1J4;
        }
    };
    hs_a52625v1J6.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcpred825v1J7.evaluateOnce = function () {
        if (hs_a52625v1J6.notEvaluated) {
            return hs_a52625v1J6.hscall();
        } else {
            return hs_a52625v1J6;
        }
    };
    hs_a52725v1J8.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdctoEnum825v1J9.evaluateOnce = function () {
        if (hs_a52725v1J8.notEvaluated) {
            return hs_a52725v1J8.hscall();
        } else {
            return hs_a52725v1J8;
        }
    };
    hs_a52825v1Ja.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcfromEnum825v1Jb.evaluateOnce = function () {
        if (hs_a52825v1Ja.notEvaluated) {
            return hs_a52825v1Ja.hscall();
        } else {
            return hs_a52825v1Ja;
        }
    };
    hs_a52925v1Jc.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFrom825v1Jd.evaluateOnce = function () {
        if (hs_a52925v1Jc.notEvaluated) {
            return hs_a52925v1Jc.hscall();
        } else {
            return hs_a52925v1Jc;
        }
    };
    hs_a53025v1Je.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThen825v1Jf.evaluateOnce = function () {
        if (hs_a53025v1Je.notEvaluated) {
            return hs_a53025v1Je.hscall();
        } else {
            return hs_a53025v1Je;
        }
    };
    hs_a53125v1Jg.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromTo825v1Jh.evaluateOnce = function () {
        if (hs_a53125v1Jg.notEvaluated) {
            return hs_a53125v1Jg.hscall();
        } else {
            return hs_a53125v1Jg;
        }
    };
    hs_a53225v1Ji.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThenTo825v1Jj.evaluateOnce = function () {
        if (hs_a53225v1Ji.notEvaluated) {
            return hs_a53225v1Ji.hscall();
        } else {
            return hs_a53225v1Ji;
        }
    };
    this.hs_zdfEnumCSsizze.data = [hs_a52525v1J4, hs_a52625v1J6, hs_a52725v1J8, hs_a52825v1Ja, hs_a52925v1Jc, hs_a53025v1Je, hs_a53125v1Jg, hs_a53225v1Ji];
    hs_a53325v1Jk.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczp825v1Jl.evaluateOnce = function () {
        if (hs_a53325v1Jk.notEvaluated) {
            return hs_a53325v1Jk.hscall();
        } else {
            return hs_a53325v1Jk;
        }
    };
    hs_a53425v1Jm.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczt825v1Jn.evaluateOnce = function () {
        if (hs_a53425v1Jm.notEvaluated) {
            return hs_a53425v1Jm.hscall();
        } else {
            return hs_a53425v1Jm;
        }
    };
    hs_a53525v1Jo.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczm825v1Jp.evaluateOnce = function () {
        if (hs_a53525v1Jo.notEvaluated) {
            return hs_a53525v1Jo.hscall();
        } else {
            return hs_a53525v1Jo;
        }
    };
    hs_a53625v1Jq.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcnegate825v1Jr.evaluateOnce = function () {
        if (hs_a53625v1Jq.notEvaluated) {
            return hs_a53625v1Jq.hscall();
        } else {
            return hs_a53625v1Jq;
        }
    };
    hs_a53725v1Js.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcabs825v1Jt.evaluateOnce = function () {
        if (hs_a53725v1Js.notEvaluated) {
            return hs_a53725v1Js.hscall();
        } else {
            return hs_a53725v1Js;
        }
    };
    hs_a53825v1Ju.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcsignum825v1Jv.evaluateOnce = function () {
        if (hs_a53825v1Ju.notEvaluated) {
            return hs_a53825v1Ju.hscall();
        } else {
            return hs_a53825v1Ju;
        }
    };
    hs_a53925v1Jw.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcfromInteger825v1Jx.evaluateOnce = function () {
        if (hs_a53925v1Jw.notEvaluated) {
            return hs_a53925v1Jw.hscall();
        } else {
            return hs_a53925v1Jw;
        }
    };
    hs_a54025v1Jy.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdccompare825v1Jz.evaluateOnce = function () {
        if (hs_a54025v1Jy.notEvaluated) {
            return hs_a54025v1Jy.hscall();
        } else {
            return hs_a54025v1Jy;
        }
    };
    hs_a54125v1JA.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczl825v1JB.evaluateOnce = function () {
        if (hs_a54125v1JA.notEvaluated) {
            return hs_a54125v1JA.hscall();
        } else {
            return hs_a54125v1JA;
        }
    };
    hs_a54225v1JC.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczgze825v1JD.evaluateOnce = function () {
        if (hs_a54225v1JC.notEvaluated) {
            return hs_a54225v1JC.hscall();
        } else {
            return hs_a54225v1JC;
        }
    };
    hs_a54325v1JE.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczg825v1JF.evaluateOnce = function () {
        if (hs_a54325v1JE.notEvaluated) {
            return hs_a54325v1JE.hscall();
        } else {
            return hs_a54325v1JE;
        }
    };
    hs_a54425v1JG.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczlze825v1JH.evaluateOnce = function () {
        if (hs_a54425v1JG.notEvaluated) {
            return hs_a54425v1JG.hscall();
        } else {
            return hs_a54425v1JG;
        }
    };
    hs_a54525v1JI.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmax825v1JJ.evaluateOnce = function () {
        if (hs_a54525v1JI.notEvaluated) {
            return hs_a54525v1JI.hscall();
        } else {
            return hs_a54525v1JI;
        }
    };
    hs_a54625v1JK.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmin825v1JL.evaluateOnce = function () {
        if (hs_a54625v1JK.notEvaluated) {
            return hs_a54625v1JK.hscall();
        } else {
            return hs_a54625v1JK;
        }
    };
    hs_a54725v1JM.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczeze825v1JN.evaluateOnce = function () {
        if (hs_a54725v1JM.notEvaluated) {
            return hs_a54725v1JM.hscall();
        } else {
            return hs_a54725v1JM;
        }
    };
    hs_a54825v1JO.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczsze825v1JP.evaluateOnce = function () {
        if (hs_a54825v1JO.notEvaluated) {
            return hs_a54825v1JO.hscall();
        } else {
            return hs_a54825v1JO;
        }
    };
    this.hs_zdfEqCSsizze.data = [hs_a54725v1JM, hs_a54825v1JO];
    this.hs_zdfOrdCSsizze.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCSsizze, hs_a54025v1Jy, hs_a54125v1JA, hs_a54225v1JC, hs_a54325v1JE, hs_a54425v1JG, hs_a54525v1JI, hs_a54625v1JK];
    this.hs_zdfNumCSsizze.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCSsizze, $hs.modules.SystemziPosixziTypes.hs_zdfShowCSsizze, hs_a53325v1Jk, hs_a53425v1Jm, hs_a53525v1Jo, hs_a53625v1Jq, hs_a53725v1Js, hs_a53825v1Ju, hs_a53925v1Jw];
    this.hs_zdfRealCSsizze.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCSsizze, hs_a51625v1IM];
    this.hs_zdfIntegralCSsizze.data = [$hs.modules.SystemziPosixziTypes.hs_zdfRealCSsizze, $hs.modules.SystemziPosixziTypes.hs_zdfEnumCSsizze, hs_a50725v1Iu, hs_a50825v1Iw, hs_a50925v1Iy, hs_a51025v1IA, hs_a51125v1IC, hs_a51225v1IE, hs_a51325v1IG];
    this.hs_zdfBitsCSsizze.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCSsizze, hs_a49025v1HW, hs_a49125v1HY, hs_a49225v1I0, hs_a49325v1I2, hs_a49425v1I4, hs_a49525v1I6, hs_a49625v1I8, hs_a49725v1Ia, hs_a49825v1Ic, hs_a49925v1Ie, hs_a50025v1Ig, hs_a50125v1Ii, hs_a50225v1Ik, hs_a50325v1Im, hs_a50425v1Io, hs_a50525v1Iq, hs_a50625v1Is];
    hs_a54925v1JQ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizazi725v1JR.evaluateOnce = function () {
        if (hs_a54925v1JQ.notEvaluated) {
            return hs_a54925v1JQ.hscall();
        } else {
            return hs_a54925v1JQ;
        }
    };
    hs_a55025v1JS.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdczizbzi725v1JT.evaluateOnce = function () {
        if (hs_a55025v1JS.notEvaluated) {
            return hs_a55025v1JS.hscall();
        } else {
            return hs_a55025v1JS;
        }
    };
    hs_a55125v1JU.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcxor725v1JV.evaluateOnce = function () {
        if (hs_a55125v1JU.notEvaluated) {
            return hs_a55125v1JU.hscall();
        } else {
            return hs_a55125v1JU;
        }
    };
    hs_a55225v1JW.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplement725v1JX.evaluateOnce = function () {
        if (hs_a55225v1JW.notEvaluated) {
            return hs_a55225v1JW.hscall();
        } else {
            return hs_a55225v1JW;
        }
    };
    hs_a55325v1JY.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshift725v1JZ.evaluateOnce = function () {
        if (hs_a55325v1JY.notEvaluated) {
            return hs_a55325v1JY.hscall();
        } else {
            return hs_a55325v1JY;
        }
    };
    hs_a55425v1K0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotate725v1K1.evaluateOnce = function () {
        if (hs_a55425v1K0.notEvaluated) {
            return hs_a55425v1K0.hscall();
        } else {
            return hs_a55425v1K0;
        }
    };
    hs_a55525v1K2.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbit725v1K3.evaluateOnce = function () {
        if (hs_a55525v1K2.notEvaluated) {
            return hs_a55525v1K2.hscall();
        } else {
            return hs_a55525v1K2;
        }
    };
    hs_a55625v1K4.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcsetBit725v1K5.evaluateOnce = function () {
        if (hs_a55625v1K4.notEvaluated) {
            return hs_a55625v1K4.hscall();
        } else {
            return hs_a55625v1K4;
        }
    };
    hs_a55725v1K6.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcclearBit725v1K7.evaluateOnce = function () {
        if (hs_a55725v1K6.notEvaluated) {
            return hs_a55725v1K6.hscall();
        } else {
            return hs_a55725v1K6;
        }
    };
    hs_a55825v1K8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplementBit725v1K9.evaluateOnce = function () {
        if (hs_a55825v1K8.notEvaluated) {
            return hs_a55825v1K8.hscall();
        } else {
            return hs_a55825v1K8;
        }
    };
    hs_a55925v1Ka.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdctestBit725v1Kb.evaluateOnce = function () {
        if (hs_a55925v1Ka.notEvaluated) {
            return hs_a55925v1Ka.hscall();
        } else {
            return hs_a55925v1Ka;
        }
    };
    hs_a56025v1Kc.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbitSizze725v1Kd.evaluateOnce = function () {
        if (hs_a56025v1Kc.notEvaluated) {
            return hs_a56025v1Kc.hscall();
        } else {
            return hs_a56025v1Kc;
        }
    };
    hs_a56125v1Ke.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcisSigned725v1Kf.evaluateOnce = function () {
        if (hs_a56125v1Ke.notEvaluated) {
            return hs_a56125v1Ke.hscall();
        } else {
            return hs_a56125v1Ke;
        }
    };
    hs_a56225v1Kg.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftL725v1Kh.evaluateOnce = function () {
        if (hs_a56225v1Kg.notEvaluated) {
            return hs_a56225v1Kg.hscall();
        } else {
            return hs_a56225v1Kg;
        }
    };
    hs_a56325v1Ki.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftR725v1Kj.evaluateOnce = function () {
        if (hs_a56325v1Ki.notEvaluated) {
            return hs_a56325v1Ki.hscall();
        } else {
            return hs_a56325v1Ki;
        }
    };
    hs_a56425v1Kk.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateL725v1Kl.evaluateOnce = function () {
        if (hs_a56425v1Kk.notEvaluated) {
            return hs_a56425v1Kk.hscall();
        } else {
            return hs_a56425v1Kk;
        }
    };
    hs_a56525v1Km.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateR725v1Kn.evaluateOnce = function () {
        if (hs_a56525v1Km.notEvaluated) {
            return hs_a56525v1Km.hscall();
        } else {
            return hs_a56525v1Km;
        }
    };
    hs_a56625v1Ko.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquot725v1Kp.evaluateOnce = function () {
        if (hs_a56625v1Ko.notEvaluated) {
            return hs_a56625v1Ko.hscall();
        } else {
            return hs_a56625v1Ko;
        }
    };
    hs_a56725v1Kq.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcrem725v1Kr.evaluateOnce = function () {
        if (hs_a56725v1Kq.notEvaluated) {
            return hs_a56725v1Kq.hscall();
        } else {
            return hs_a56725v1Kq;
        }
    };
    hs_a56825v1Ks.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdiv725v1Kt.evaluateOnce = function () {
        if (hs_a56825v1Ks.notEvaluated) {
            return hs_a56825v1Ks.hscall();
        } else {
            return hs_a56825v1Ks;
        }
    };
    hs_a56925v1Ku.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcmod725v1Kv.evaluateOnce = function () {
        if (hs_a56925v1Ku.notEvaluated) {
            return hs_a56925v1Ku.hscall();
        } else {
            return hs_a56925v1Ku;
        }
    };
    hs_a57025v1Kw.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcquotRem725v1Kx.evaluateOnce = function () {
        if (hs_a57025v1Kw.notEvaluated) {
            return hs_a57025v1Kw.hscall();
        } else {
            return hs_a57025v1Kw;
        }
    };
    hs_a57125v1Ky.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdcdivMod725v1Kz.evaluateOnce = function () {
        if (hs_a57125v1Ky.notEvaluated) {
            return hs_a57125v1Ky.hscall();
        } else {
            return hs_a57125v1Ky;
        }
    };
    hs_a57225v1KA.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32);
    };
    hs_zdctoInteger725v1KB.evaluateOnce = function () {
        if (hs_a57225v1KA.notEvaluated) {
            return hs_a57225v1KA.hscall();
        } else {
            return hs_a57225v1KA;
        }
    };
    hs_a57325v1KC.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcminBound725v1KD.evaluateOnce = function () {
        if (hs_a57325v1KC.notEvaluated) {
            return hs_a57325v1KC.hscall();
        } else {
            return hs_a57325v1KC;
        }
    };
    hs_a57425v1KE.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcmaxBound725v1KF.evaluateOnce = function () {
        if (hs_a57425v1KE.notEvaluated) {
            return hs_a57425v1KE.hscall();
        } else {
            return hs_a57425v1KE;
        }
    };
    this.hs_zdfBoundedCPid.data = [hs_a57325v1KC, hs_a57425v1KE];
    hs_a57525v1KG.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt32);
    };
    hs_zdctoRational925v1KH.evaluateOnce = function () {
        if (hs_a57525v1KG.notEvaluated) {
            return hs_a57525v1KG.hscall();
        } else {
            return hs_a57525v1KG;
        }
    };
    hs_a57625v1KI.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcsizzeOf925v1KJ.evaluateOnce = function () {
        if (hs_a57625v1KI.notEvaluated) {
            return hs_a57625v1KI.hscall();
        } else {
            return hs_a57625v1KI;
        }
    };
    hs_a57725v1KK.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcalignment925v1KL.evaluateOnce = function () {
        if (hs_a57725v1KK.notEvaluated) {
            return hs_a57725v1KK.hscall();
        } else {
            return hs_a57725v1KK;
        }
    };
    hs_a57825v1KM.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekElemOff925v1KN.evaluateOnce = function () {
        if (hs_a57825v1KM.notEvaluated) {
            return hs_a57825v1KM.hscall();
        } else {
            return hs_a57825v1KM;
        }
    };
    hs_a57925v1KO.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeElemOff925v1KP.evaluateOnce = function () {
        if (hs_a57925v1KO.notEvaluated) {
            return hs_a57925v1KO.hscall();
        } else {
            return hs_a57925v1KO;
        }
    };
    hs_a58025v1KQ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeekByteOff925v1KR.evaluateOnce = function () {
        if (hs_a58025v1KQ.notEvaluated) {
            return hs_a58025v1KQ.hscall();
        } else {
            return hs_a58025v1KQ;
        }
    };
    hs_a58125v1KS.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpokeByteOff925v1KT.evaluateOnce = function () {
        if (hs_a58125v1KS.notEvaluated) {
            return hs_a58125v1KS.hscall();
        } else {
            return hs_a58125v1KS;
        }
    };
    hs_a58225v1KU.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpeek925v1KV.evaluateOnce = function () {
        if (hs_a58225v1KU.notEvaluated) {
            return hs_a58225v1KU.hscall();
        } else {
            return hs_a58225v1KU;
        }
    };
    hs_a58325v1KW.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32);
    };
    hs_zdcpoke925v1KX.evaluateOnce = function () {
        if (hs_a58325v1KW.notEvaluated) {
            return hs_a58325v1KW.hscall();
        } else {
            return hs_a58325v1KW;
        }
    };
    this.hs_zdfStorableCPid.data = [hs_a57625v1KI, hs_a57725v1KK, hs_a57825v1KM, hs_a57925v1KO, hs_a58025v1KQ, hs_a58125v1KS, hs_a58225v1KU, hs_a58325v1KW];
    hs_a58425v1KY.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcsucc925v1KZ.evaluateOnce = function () {
        if (hs_a58425v1KY.notEvaluated) {
            return hs_a58425v1KY.hscall();
        } else {
            return hs_a58425v1KY;
        }
    };
    hs_a58525v1L0.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcpred925v1L1.evaluateOnce = function () {
        if (hs_a58525v1L0.notEvaluated) {
            return hs_a58525v1L0.hscall();
        } else {
            return hs_a58525v1L0;
        }
    };
    hs_a58625v1L2.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdctoEnum925v1L3.evaluateOnce = function () {
        if (hs_a58625v1L2.notEvaluated) {
            return hs_a58625v1L2.hscall();
        } else {
            return hs_a58625v1L2;
        }
    };
    hs_a58725v1L4.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcfromEnum925v1L5.evaluateOnce = function () {
        if (hs_a58725v1L4.notEvaluated) {
            return hs_a58725v1L4.hscall();
        } else {
            return hs_a58725v1L4;
        }
    };
    hs_a58825v1L6.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFrom925v1L7.evaluateOnce = function () {
        if (hs_a58825v1L6.notEvaluated) {
            return hs_a58825v1L6.hscall();
        } else {
            return hs_a58825v1L6;
        }
    };
    hs_a58925v1L8.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThen925v1L9.evaluateOnce = function () {
        if (hs_a58925v1L8.notEvaluated) {
            return hs_a58925v1L8.hscall();
        } else {
            return hs_a58925v1L8;
        }
    };
    hs_a59025v1La.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromTo925v1Lb.evaluateOnce = function () {
        if (hs_a59025v1La.notEvaluated) {
            return hs_a59025v1La.hscall();
        } else {
            return hs_a59025v1La;
        }
    };
    hs_a59125v1Lc.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThenTo925v1Ld.evaluateOnce = function () {
        if (hs_a59125v1Lc.notEvaluated) {
            return hs_a59125v1Lc.hscall();
        } else {
            return hs_a59125v1Lc;
        }
    };
    this.hs_zdfEnumCPid.data = [hs_a58425v1KY, hs_a58525v1L0, hs_a58625v1L2, hs_a58725v1L4, hs_a58825v1L6, hs_a58925v1L8, hs_a59025v1La, hs_a59125v1Lc];
    hs_a59225v1Le.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczp925v1Lf.evaluateOnce = function () {
        if (hs_a59225v1Le.notEvaluated) {
            return hs_a59225v1Le.hscall();
        } else {
            return hs_a59225v1Le;
        }
    };
    hs_a59325v1Lg.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczt925v1Lh.evaluateOnce = function () {
        if (hs_a59325v1Lg.notEvaluated) {
            return hs_a59325v1Lg.hscall();
        } else {
            return hs_a59325v1Lg;
        }
    };
    hs_a59425v1Li.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdczm925v1Lj.evaluateOnce = function () {
        if (hs_a59425v1Li.notEvaluated) {
            return hs_a59425v1Li.hscall();
        } else {
            return hs_a59425v1Li;
        }
    };
    hs_a59525v1Lk.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcnegate925v1Ll.evaluateOnce = function () {
        if (hs_a59525v1Lk.notEvaluated) {
            return hs_a59525v1Lk.hscall();
        } else {
            return hs_a59525v1Lk;
        }
    };
    hs_a59625v1Lm.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcabs925v1Ln.evaluateOnce = function () {
        if (hs_a59625v1Lm.notEvaluated) {
            return hs_a59625v1Lm.hscall();
        } else {
            return hs_a59625v1Lm;
        }
    };
    hs_a59725v1Lo.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcsignum925v1Lp.evaluateOnce = function () {
        if (hs_a59725v1Lo.notEvaluated) {
            return hs_a59725v1Lo.hscall();
        } else {
            return hs_a59725v1Lo;
        }
    };
    hs_a59825v1Lq.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcfromInteger925v1Lr.evaluateOnce = function () {
        if (hs_a59825v1Lq.notEvaluated) {
            return hs_a59825v1Lq.hscall();
        } else {
            return hs_a59825v1Lq;
        }
    };
    hs_a59925v1Ls.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdccompare925v1Lt.evaluateOnce = function () {
        if (hs_a59925v1Ls.notEvaluated) {
            return hs_a59925v1Ls.hscall();
        } else {
            return hs_a59925v1Ls;
        }
    };
    hs_a60025v1Lu.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczl925v1Lv.evaluateOnce = function () {
        if (hs_a60025v1Lu.notEvaluated) {
            return hs_a60025v1Lu.hscall();
        } else {
            return hs_a60025v1Lu;
        }
    };
    hs_a60125v1Lw.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczgze925v1Lx.evaluateOnce = function () {
        if (hs_a60125v1Lw.notEvaluated) {
            return hs_a60125v1Lw.hscall();
        } else {
            return hs_a60125v1Lw;
        }
    };
    hs_a60225v1Ly.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczg925v1Lz.evaluateOnce = function () {
        if (hs_a60225v1Ly.notEvaluated) {
            return hs_a60225v1Ly.hscall();
        } else {
            return hs_a60225v1Ly;
        }
    };
    hs_a60325v1LA.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdczlze925v1LB.evaluateOnce = function () {
        if (hs_a60325v1LA.notEvaluated) {
            return hs_a60325v1LA.hscall();
        } else {
            return hs_a60325v1LA;
        }
    };
    hs_a60425v1LC.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmax925v1LD.evaluateOnce = function () {
        if (hs_a60425v1LC.notEvaluated) {
            return hs_a60425v1LC.hscall();
        } else {
            return hs_a60425v1LC;
        }
    };
    hs_a60525v1LE.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmin925v1LF.evaluateOnce = function () {
        if (hs_a60525v1LE.notEvaluated) {
            return hs_a60525v1LE.hscall();
        } else {
            return hs_a60525v1LE;
        }
    };
    hs_a60625v1LG.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczeze925v1LH.evaluateOnce = function () {
        if (hs_a60625v1LG.notEvaluated) {
            return hs_a60625v1LG.hscall();
        } else {
            return hs_a60625v1LG;
        }
    };
    hs_a60725v1LI.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32);
    };
    hs_zdczsze925v1LJ.evaluateOnce = function () {
        if (hs_a60725v1LI.notEvaluated) {
            return hs_a60725v1LI.hscall();
        } else {
            return hs_a60725v1LI;
        }
    };
    this.hs_zdfEqCPid.data = [hs_a60625v1LG, hs_a60725v1LI];
    this.hs_zdfOrdCPid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCPid, hs_a59925v1Ls, hs_a60025v1Lu, hs_a60125v1Lw, hs_a60225v1Ly, hs_a60325v1LA, hs_a60425v1LC, hs_a60525v1LE];
    this.hs_zdfNumCPid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCPid, $hs.modules.SystemziPosixziTypes.hs_zdfShowCPid, hs_a59225v1Le, hs_a59325v1Lg, hs_a59425v1Li, hs_a59525v1Lk, hs_a59625v1Lm, hs_a59725v1Lo, hs_a59825v1Lq];
    this.hs_zdfRealCPid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCPid, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCPid, hs_a57525v1KG];
    this.hs_zdfIntegralCPid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfRealCPid, $hs.modules.SystemziPosixziTypes.hs_zdfEnumCPid, hs_a56625v1Ko, hs_a56725v1Kq, hs_a56825v1Ks, hs_a56925v1Ku, hs_a57025v1Kw, hs_a57125v1Ky, hs_a57225v1KA];
    this.hs_zdfBitsCPid.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCPid, hs_a54925v1JQ, hs_a55025v1JS, hs_a55125v1JU, hs_a55225v1JW, hs_a55325v1JY, hs_a55425v1K0, hs_a55525v1K2, hs_a55625v1K4, hs_a55725v1K6, hs_a55825v1K8, hs_a55925v1Ka, hs_a56025v1Kc, hs_a56125v1Ke, hs_a56225v1Kg, hs_a56325v1Ki, hs_a56425v1Kk, hs_a56525v1Km];
    hs_a60825v1LK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdczizazi825v1LL.evaluateOnce = function () {
        if (hs_a60825v1LK.notEvaluated) {
            return hs_a60825v1LK.hscall();
        } else {
            return hs_a60825v1LK;
        }
    };
    hs_a60925v1LM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdczizbzi825v1LN.evaluateOnce = function () {
        if (hs_a60925v1LM.notEvaluated) {
            return hs_a60925v1LM.hscall();
        } else {
            return hs_a60925v1LM;
        }
    };
    hs_a61025v1LO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcxor825v1LP.evaluateOnce = function () {
        if (hs_a61025v1LO.notEvaluated) {
            return hs_a61025v1LO.hscall();
        } else {
            return hs_a61025v1LO;
        }
    };
    hs_a61125v1LQ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdccomplement825v1LR.evaluateOnce = function () {
        if (hs_a61125v1LQ.notEvaluated) {
            return hs_a61125v1LQ.hscall();
        } else {
            return hs_a61125v1LQ;
        }
    };
    hs_a61225v1LS.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcshift825v1LT.evaluateOnce = function () {
        if (hs_a61225v1LS.notEvaluated) {
            return hs_a61225v1LS.hscall();
        } else {
            return hs_a61225v1LS;
        }
    };
    hs_a61325v1LU.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcrotate825v1LV.evaluateOnce = function () {
        if (hs_a61325v1LU.notEvaluated) {
            return hs_a61325v1LU.hscall();
        } else {
            return hs_a61325v1LU;
        }
    };
    hs_a61425v1LW.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcbit825v1LX.evaluateOnce = function () {
        if (hs_a61425v1LW.notEvaluated) {
            return hs_a61425v1LW.hscall();
        } else {
            return hs_a61425v1LW;
        }
    };
    hs_a61525v1LY.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcsetBit825v1LZ.evaluateOnce = function () {
        if (hs_a61525v1LY.notEvaluated) {
            return hs_a61525v1LY.hscall();
        } else {
            return hs_a61525v1LY;
        }
    };
    hs_a61625v1M0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcclearBit825v1M1.evaluateOnce = function () {
        if (hs_a61625v1M0.notEvaluated) {
            return hs_a61625v1M0.hscall();
        } else {
            return hs_a61625v1M0;
        }
    };
    hs_a61725v1M2.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdccomplementBit825v1M3.evaluateOnce = function () {
        if (hs_a61725v1M2.notEvaluated) {
            return hs_a61725v1M2.hscall();
        } else {
            return hs_a61725v1M2;
        }
    };
    hs_a61825v1M4.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdctestBit825v1M5.evaluateOnce = function () {
        if (hs_a61825v1M4.notEvaluated) {
            return hs_a61825v1M4.hscall();
        } else {
            return hs_a61825v1M4;
        }
    };
    hs_a61925v1M6.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcbitSizze825v1M7.evaluateOnce = function () {
        if (hs_a61925v1M6.notEvaluated) {
            return hs_a61925v1M6.hscall();
        } else {
            return hs_a61925v1M6;
        }
    };
    hs_a62025v1M8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcisSigned825v1M9.evaluateOnce = function () {
        if (hs_a62025v1M8.notEvaluated) {
            return hs_a62025v1M8.hscall();
        } else {
            return hs_a62025v1M8;
        }
    };
    hs_a62125v1Ma.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcshiftL825v1Mb.evaluateOnce = function () {
        if (hs_a62125v1Ma.notEvaluated) {
            return hs_a62125v1Ma.hscall();
        } else {
            return hs_a62125v1Ma;
        }
    };
    hs_a62225v1Mc.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcshiftR825v1Md.evaluateOnce = function () {
        if (hs_a62225v1Mc.notEvaluated) {
            return hs_a62225v1Mc.hscall();
        } else {
            return hs_a62225v1Mc;
        }
    };
    hs_a62325v1Me.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcrotateL825v1Mf.evaluateOnce = function () {
        if (hs_a62325v1Me.notEvaluated) {
            return hs_a62325v1Me.hscall();
        } else {
            return hs_a62325v1Me;
        }
    };
    hs_a62425v1Mg.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcrotateR825v1Mh.evaluateOnce = function () {
        if (hs_a62425v1Mg.notEvaluated) {
            return hs_a62425v1Mg.hscall();
        } else {
            return hs_a62425v1Mg;
        }
    };
    hs_a62525v1Mi.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcquot825v1Mj.evaluateOnce = function () {
        if (hs_a62525v1Mi.notEvaluated) {
            return hs_a62525v1Mi.hscall();
        } else {
            return hs_a62525v1Mi;
        }
    };
    hs_a62625v1Mk.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcrem825v1Ml.evaluateOnce = function () {
        if (hs_a62625v1Mk.notEvaluated) {
            return hs_a62625v1Mk.hscall();
        } else {
            return hs_a62625v1Mk;
        }
    };
    hs_a62725v1Mm.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcdiv825v1Mn.evaluateOnce = function () {
        if (hs_a62725v1Mm.notEvaluated) {
            return hs_a62725v1Mm.hscall();
        } else {
            return hs_a62725v1Mm;
        }
    };
    hs_a62825v1Mo.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcmod825v1Mp.evaluateOnce = function () {
        if (hs_a62825v1Mo.notEvaluated) {
            return hs_a62825v1Mo.hscall();
        } else {
            return hs_a62825v1Mo;
        }
    };
    hs_a62925v1Mq.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcquotRem825v1Mr.evaluateOnce = function () {
        if (hs_a62925v1Mq.notEvaluated) {
            return hs_a62925v1Mq.hscall();
        } else {
            return hs_a62925v1Mq;
        }
    };
    hs_a63025v1Ms.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcdivMod825v1Mt.evaluateOnce = function () {
        if (hs_a63025v1Ms.notEvaluated) {
            return hs_a63025v1Ms.hscall();
        } else {
            return hs_a63025v1Ms;
        }
    };
    hs_a63125v1Mu.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdctoInteger825v1Mv.evaluateOnce = function () {
        if (hs_a63125v1Mu.notEvaluated) {
            return hs_a63125v1Mu.hscall();
        } else {
            return hs_a63125v1Mu;
        }
    };
    hs_a63225v1Mw.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt64);
    };
    hs_zdcminBound825v1Mx.evaluateOnce = function () {
        if (hs_a63225v1Mw.notEvaluated) {
            return hs_a63225v1Mw.hscall();
        } else {
            return hs_a63225v1Mw;
        }
    };
    hs_a63325v1My.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt64);
    };
    hs_zdcmaxBound825v1Mz.evaluateOnce = function () {
        if (hs_a63325v1My.notEvaluated) {
            return hs_a63325v1My.hscall();
        } else {
            return hs_a63325v1My;
        }
    };
    this.hs_zdfBoundedCOff.data = [hs_a63225v1Mw, hs_a63325v1My];
    hs_a63425v1MA.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziInt.hs_zdfRealInt64);
    };
    hs_zdctoRational1025v1MB.evaluateOnce = function () {
        if (hs_a63425v1MA.notEvaluated) {
            return hs_a63425v1MA.hscall();
        } else {
            return hs_a63425v1MA;
        }
    };
    hs_a63525v1MC.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcsizzeOf1025v1MD.evaluateOnce = function () {
        if (hs_a63525v1MC.notEvaluated) {
            return hs_a63525v1MC.hscall();
        } else {
            return hs_a63525v1MC;
        }
    };
    hs_a63625v1ME.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcalignment1025v1MF.evaluateOnce = function () {
        if (hs_a63625v1ME.notEvaluated) {
            return hs_a63625v1ME.hscall();
        } else {
            return hs_a63625v1ME;
        }
    };
    hs_a63725v1MG.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpeekElemOff1025v1MH.evaluateOnce = function () {
        if (hs_a63725v1MG.notEvaluated) {
            return hs_a63725v1MG.hscall();
        } else {
            return hs_a63725v1MG;
        }
    };
    hs_a63825v1MI.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpokeElemOff1025v1MJ.evaluateOnce = function () {
        if (hs_a63825v1MI.notEvaluated) {
            return hs_a63825v1MI.hscall();
        } else {
            return hs_a63825v1MI;
        }
    };
    hs_a63925v1MK.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpeekByteOff1025v1ML.evaluateOnce = function () {
        if (hs_a63925v1MK.notEvaluated) {
            return hs_a63925v1MK.hscall();
        } else {
            return hs_a63925v1MK;
        }
    };
    hs_a64025v1MM.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpokeByteOff1025v1MN.evaluateOnce = function () {
        if (hs_a64025v1MM.notEvaluated) {
            return hs_a64025v1MM.hscall();
        } else {
            return hs_a64025v1MM;
        }
    };
    hs_a64125v1MO.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpeek1025v1MP.evaluateOnce = function () {
        if (hs_a64125v1MO.notEvaluated) {
            return hs_a64125v1MO.hscall();
        } else {
            return hs_a64125v1MO;
        }
    };
    hs_a64225v1MQ.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64);
    };
    hs_zdcpoke1025v1MR.evaluateOnce = function () {
        if (hs_a64225v1MQ.notEvaluated) {
            return hs_a64225v1MQ.hscall();
        } else {
            return hs_a64225v1MQ;
        }
    };
    this.hs_zdfStorableCOff.data = [hs_a63525v1MC, hs_a63625v1ME, hs_a63725v1MG, hs_a63825v1MI, hs_a63925v1MK, hs_a64025v1MM, hs_a64125v1MO, hs_a64225v1MQ];
    hs_a64325v1MS.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcsucc1025v1MT.evaluateOnce = function () {
        if (hs_a64325v1MS.notEvaluated) {
            return hs_a64325v1MS.hscall();
        } else {
            return hs_a64325v1MS;
        }
    };
    hs_a64425v1MU.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcpred1025v1MV.evaluateOnce = function () {
        if (hs_a64425v1MU.notEvaluated) {
            return hs_a64425v1MU.hscall();
        } else {
            return hs_a64425v1MU;
        }
    };
    hs_a64525v1MW.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdctoEnum1025v1MX.evaluateOnce = function () {
        if (hs_a64525v1MW.notEvaluated) {
            return hs_a64525v1MW.hscall();
        } else {
            return hs_a64525v1MW;
        }
    };
    hs_a64625v1MY.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcfromEnum1025v1MZ.evaluateOnce = function () {
        if (hs_a64625v1MY.notEvaluated) {
            return hs_a64625v1MY.hscall();
        } else {
            return hs_a64625v1MY;
        }
    };
    hs_a64725v1N0.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcenumFrom1025v1N1.evaluateOnce = function () {
        if (hs_a64725v1N0.notEvaluated) {
            return hs_a64725v1N0.hscall();
        } else {
            return hs_a64725v1N0;
        }
    };
    hs_a64825v1N2.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcenumFromThen1025v1N3.evaluateOnce = function () {
        if (hs_a64825v1N2.notEvaluated) {
            return hs_a64825v1N2.hscall();
        } else {
            return hs_a64825v1N2;
        }
    };
    hs_a64925v1N4.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcenumFromTo1025v1N5.evaluateOnce = function () {
        if (hs_a64925v1N4.notEvaluated) {
            return hs_a64925v1N4.hscall();
        } else {
            return hs_a64925v1N4;
        }
    };
    hs_a65025v1N6.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64);
    };
    hs_zdcenumFromThenTo1025v1N7.evaluateOnce = function () {
        if (hs_a65025v1N6.notEvaluated) {
            return hs_a65025v1N6.hscall();
        } else {
            return hs_a65025v1N6;
        }
    };
    this.hs_zdfEnumCOff.data = [hs_a64325v1MS, hs_a64425v1MU, hs_a64525v1MW, hs_a64625v1MY, hs_a64725v1N0, hs_a64825v1N2, hs_a64925v1N4, hs_a65025v1N6];
    hs_a65125v1N8.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdczp1025v1N9.evaluateOnce = function () {
        if (hs_a65125v1N8.notEvaluated) {
            return hs_a65125v1N8.hscall();
        } else {
            return hs_a65125v1N8;
        }
    };
    hs_a65225v1Na.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdczt1025v1Nb.evaluateOnce = function () {
        if (hs_a65225v1Na.notEvaluated) {
            return hs_a65225v1Na.hscall();
        } else {
            return hs_a65225v1Na;
        }
    };
    hs_a65325v1Nc.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdczm1025v1Nd.evaluateOnce = function () {
        if (hs_a65325v1Nc.notEvaluated) {
            return hs_a65325v1Nc.hscall();
        } else {
            return hs_a65325v1Nc;
        }
    };
    hs_a65425v1Ne.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcnegate1025v1Nf.evaluateOnce = function () {
        if (hs_a65425v1Ne.notEvaluated) {
            return hs_a65425v1Ne.hscall();
        } else {
            return hs_a65425v1Ne;
        }
    };
    hs_a65525v1Ng.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcabs1025v1Nh.evaluateOnce = function () {
        if (hs_a65525v1Ng.notEvaluated) {
            return hs_a65525v1Ng.hscall();
        } else {
            return hs_a65525v1Ng;
        }
    };
    hs_a65625v1Ni.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcsignum1025v1Nj.evaluateOnce = function () {
        if (hs_a65625v1Ni.notEvaluated) {
            return hs_a65625v1Ni.hscall();
        } else {
            return hs_a65625v1Ni;
        }
    };
    hs_a65725v1Nk.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcfromInteger1025v1Nl.evaluateOnce = function () {
        if (hs_a65725v1Nk.notEvaluated) {
            return hs_a65725v1Nk.hscall();
        } else {
            return hs_a65725v1Nk;
        }
    };
    hs_a65825v1Nm.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdccompare1025v1Nn.evaluateOnce = function () {
        if (hs_a65825v1Nm.notEvaluated) {
            return hs_a65825v1Nm.hscall();
        } else {
            return hs_a65825v1Nm;
        }
    };
    hs_a65925v1No.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczl1025v1Np.evaluateOnce = function () {
        if (hs_a65925v1No.notEvaluated) {
            return hs_a65925v1No.hscall();
        } else {
            return hs_a65925v1No;
        }
    };
    hs_a66025v1Nq.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczgze1025v1Nr.evaluateOnce = function () {
        if (hs_a66025v1Nq.notEvaluated) {
            return hs_a66025v1Nq.hscall();
        } else {
            return hs_a66025v1Nq;
        }
    };
    hs_a66125v1Ns.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczg1025v1Nt.evaluateOnce = function () {
        if (hs_a66125v1Ns.notEvaluated) {
            return hs_a66125v1Ns.hscall();
        } else {
            return hs_a66125v1Ns;
        }
    };
    hs_a66225v1Nu.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdczlze1025v1Nv.evaluateOnce = function () {
        if (hs_a66225v1Nu.notEvaluated) {
            return hs_a66225v1Nu.hscall();
        } else {
            return hs_a66225v1Nu;
        }
    };
    hs_a66325v1Nw.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdcmax1025v1Nx.evaluateOnce = function () {
        if (hs_a66325v1Nw.notEvaluated) {
            return hs_a66325v1Nw.hscall();
        } else {
            return hs_a66325v1Nw;
        }
    };
    hs_a66425v1Ny.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdcmin1025v1Nz.evaluateOnce = function () {
        if (hs_a66425v1Ny.notEvaluated) {
            return hs_a66425v1Ny.hscall();
        } else {
            return hs_a66425v1Ny;
        }
    };
    hs_a66525v1NA.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64);
    };
    hs_zdczeze1025v1NB.evaluateOnce = function () {
        if (hs_a66525v1NA.notEvaluated) {
            return hs_a66525v1NA.hscall();
        } else {
            return hs_a66525v1NA;
        }
    };
    hs_a66625v1NC.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64);
    };
    hs_zdczsze1025v1ND.evaluateOnce = function () {
        if (hs_a66625v1NC.notEvaluated) {
            return hs_a66625v1NC.hscall();
        } else {
            return hs_a66625v1NC;
        }
    };
    this.hs_zdfEqCOff.data = [hs_a66525v1NA, hs_a66625v1NC];
    this.hs_zdfOrdCOff.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCOff, hs_a65825v1Nm, hs_a65925v1No, hs_a66025v1Nq, hs_a66125v1Ns, hs_a66225v1Nu, hs_a66325v1Nw, hs_a66425v1Ny];
    this.hs_zdfNumCOff.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCOff, $hs.modules.SystemziPosixziTypes.hs_zdfShowCOff, hs_a65125v1N8, hs_a65225v1Na, hs_a65325v1Nc, hs_a65425v1Ne, hs_a65525v1Ng, hs_a65625v1Ni, hs_a65725v1Nk];
    this.hs_zdfRealCOff.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCOff, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCOff, hs_a63425v1MA];
    this.hs_zdfIntegralCOff.data = [$hs.modules.SystemziPosixziTypes.hs_zdfRealCOff, $hs.modules.SystemziPosixziTypes.hs_zdfEnumCOff, hs_a62525v1Mi, hs_a62625v1Mk, hs_a62725v1Mm, hs_a62825v1Mo, hs_a62925v1Mq, hs_a63025v1Ms, hs_a63125v1Mu];
    this.hs_zdfBitsCOff.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCOff, hs_a60825v1LK, hs_a60925v1LM, hs_a61025v1LO, hs_a61125v1LQ, hs_a61225v1LS, hs_a61325v1LU, hs_a61425v1LW, hs_a61525v1LY, hs_a61625v1M0, hs_a61725v1M2, hs_a61825v1M4, hs_a61925v1M6, hs_a62025v1M8, hs_a62125v1Ma, hs_a62225v1Mc, hs_a62325v1Me, hs_a62425v1Mg];
    hs_a66725v1NE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizazi925v1NF.evaluateOnce = function () {
        if (hs_a66725v1NE.notEvaluated) {
            return hs_a66725v1NE.hscall();
        } else {
            return hs_a66725v1NE;
        }
    };
    hs_a66825v1NG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizbzi925v1NH.evaluateOnce = function () {
        if (hs_a66825v1NG.notEvaluated) {
            return hs_a66825v1NG.hscall();
        } else {
            return hs_a66825v1NG;
        }
    };
    hs_a66925v1NI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcxor925v1NJ.evaluateOnce = function () {
        if (hs_a66925v1NI.notEvaluated) {
            return hs_a66925v1NI.hscall();
        } else {
            return hs_a66925v1NI;
        }
    };
    hs_a67025v1NK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplement925v1NL.evaluateOnce = function () {
        if (hs_a67025v1NK.notEvaluated) {
            return hs_a67025v1NK.hscall();
        } else {
            return hs_a67025v1NK;
        }
    };
    hs_a67125v1NM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshift925v1NN.evaluateOnce = function () {
        if (hs_a67125v1NM.notEvaluated) {
            return hs_a67125v1NM.hscall();
        } else {
            return hs_a67125v1NM;
        }
    };
    hs_a67225v1NO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotate925v1NP.evaluateOnce = function () {
        if (hs_a67225v1NO.notEvaluated) {
            return hs_a67225v1NO.hscall();
        } else {
            return hs_a67225v1NO;
        }
    };
    hs_a67325v1NQ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbit925v1NR.evaluateOnce = function () {
        if (hs_a67325v1NQ.notEvaluated) {
            return hs_a67325v1NQ.hscall();
        } else {
            return hs_a67325v1NQ;
        }
    };
    hs_a67425v1NS.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcsetBit925v1NT.evaluateOnce = function () {
        if (hs_a67425v1NS.notEvaluated) {
            return hs_a67425v1NS.hscall();
        } else {
            return hs_a67425v1NS;
        }
    };
    hs_a67525v1NU.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcclearBit925v1NV.evaluateOnce = function () {
        if (hs_a67525v1NU.notEvaluated) {
            return hs_a67525v1NU.hscall();
        } else {
            return hs_a67525v1NU;
        }
    };
    hs_a67625v1NW.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplementBit925v1NX.evaluateOnce = function () {
        if (hs_a67625v1NW.notEvaluated) {
            return hs_a67625v1NW.hscall();
        } else {
            return hs_a67625v1NW;
        }
    };
    hs_a67725v1NY.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdctestBit925v1NZ.evaluateOnce = function () {
        if (hs_a67725v1NY.notEvaluated) {
            return hs_a67725v1NY.hscall();
        } else {
            return hs_a67725v1NY;
        }
    };
    hs_a67825v1O0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbitSizze925v1O1.evaluateOnce = function () {
        if (hs_a67825v1O0.notEvaluated) {
            return hs_a67825v1O0.hscall();
        } else {
            return hs_a67825v1O0;
        }
    };
    hs_a67925v1O2.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcisSigned925v1O3.evaluateOnce = function () {
        if (hs_a67925v1O2.notEvaluated) {
            return hs_a67925v1O2.hscall();
        } else {
            return hs_a67925v1O2;
        }
    };
    hs_a68025v1O4.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftL925v1O5.evaluateOnce = function () {
        if (hs_a68025v1O4.notEvaluated) {
            return hs_a68025v1O4.hscall();
        } else {
            return hs_a68025v1O4;
        }
    };
    hs_a68125v1O6.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftR925v1O7.evaluateOnce = function () {
        if (hs_a68125v1O6.notEvaluated) {
            return hs_a68125v1O6.hscall();
        } else {
            return hs_a68125v1O6;
        }
    };
    hs_a68225v1O8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateL925v1O9.evaluateOnce = function () {
        if (hs_a68225v1O8.notEvaluated) {
            return hs_a68225v1O8.hscall();
        } else {
            return hs_a68225v1O8;
        }
    };
    hs_a68325v1Oa.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateR925v1Ob.evaluateOnce = function () {
        if (hs_a68325v1Oa.notEvaluated) {
            return hs_a68325v1Oa.hscall();
        } else {
            return hs_a68325v1Oa;
        }
    };
    hs_a68425v1Oc.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquot925v1Od.evaluateOnce = function () {
        if (hs_a68425v1Oc.notEvaluated) {
            return hs_a68425v1Oc.hscall();
        } else {
            return hs_a68425v1Oc;
        }
    };
    hs_a68525v1Oe.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcrem925v1Of.evaluateOnce = function () {
        if (hs_a68525v1Oe.notEvaluated) {
            return hs_a68525v1Oe.hscall();
        } else {
            return hs_a68525v1Oe;
        }
    };
    hs_a68625v1Og.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdiv925v1Oh.evaluateOnce = function () {
        if (hs_a68625v1Og.notEvaluated) {
            return hs_a68625v1Og.hscall();
        } else {
            return hs_a68625v1Og;
        }
    };
    hs_a68725v1Oi.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcmod925v1Oj.evaluateOnce = function () {
        if (hs_a68725v1Oi.notEvaluated) {
            return hs_a68725v1Oi.hscall();
        } else {
            return hs_a68725v1Oi;
        }
    };
    hs_a68825v1Ok.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcquotRem925v1Ol.evaluateOnce = function () {
        if (hs_a68825v1Ok.notEvaluated) {
            return hs_a68825v1Ok.hscall();
        } else {
            return hs_a68825v1Ok;
        }
    };
    hs_a68925v1Om.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdcdivMod925v1On.evaluateOnce = function () {
        if (hs_a68925v1Om.notEvaluated) {
            return hs_a68925v1Om.hscall();
        } else {
            return hs_a68925v1Om;
        }
    };
    hs_a69025v1Oo.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32);
    };
    hs_zdctoInteger925v1Op.evaluateOnce = function () {
        if (hs_a69025v1Oo.notEvaluated) {
            return hs_a69025v1Oo.hscall();
        } else {
            return hs_a69025v1Oo;
        }
    };
    hs_a69125v1Oq.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcminBound925v1Or.evaluateOnce = function () {
        if (hs_a69125v1Oq.notEvaluated) {
            return hs_a69125v1Oq.hscall();
        } else {
            return hs_a69125v1Oq;
        }
    };
    hs_a69225v1Os.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord32);
    };
    hs_zdcmaxBound925v1Ot.evaluateOnce = function () {
        if (hs_a69225v1Os.notEvaluated) {
            return hs_a69225v1Os.hscall();
        } else {
            return hs_a69225v1Os;
        }
    };
    this.hs_zdfBoundedCMode.data = [hs_a69125v1Oq, hs_a69225v1Os];
    hs_a69325v1Ou.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord32);
    };
    hs_zdctoRational1125v1Ov.evaluateOnce = function () {
        if (hs_a69325v1Ou.notEvaluated) {
            return hs_a69325v1Ou.hscall();
        } else {
            return hs_a69325v1Ou;
        }
    };
    hs_a69425v1Ow.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcsizzeOf1125v1Ox.evaluateOnce = function () {
        if (hs_a69425v1Ow.notEvaluated) {
            return hs_a69425v1Ow.hscall();
        } else {
            return hs_a69425v1Ow;
        }
    };
    hs_a69525v1Oy.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcalignment1125v1Oz.evaluateOnce = function () {
        if (hs_a69525v1Oy.notEvaluated) {
            return hs_a69525v1Oy.hscall();
        } else {
            return hs_a69525v1Oy;
        }
    };
    hs_a69625v1OA.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekElemOff1125v1OB.evaluateOnce = function () {
        if (hs_a69625v1OA.notEvaluated) {
            return hs_a69625v1OA.hscall();
        } else {
            return hs_a69625v1OA;
        }
    };
    hs_a69725v1OC.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeElemOff1125v1OD.evaluateOnce = function () {
        if (hs_a69725v1OC.notEvaluated) {
            return hs_a69725v1OC.hscall();
        } else {
            return hs_a69725v1OC;
        }
    };
    hs_a69825v1OE.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeekByteOff1125v1OF.evaluateOnce = function () {
        if (hs_a69825v1OE.notEvaluated) {
            return hs_a69825v1OE.hscall();
        } else {
            return hs_a69825v1OE;
        }
    };
    hs_a69925v1OG.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpokeByteOff1125v1OH.evaluateOnce = function () {
        if (hs_a69925v1OG.notEvaluated) {
            return hs_a69925v1OG.hscall();
        } else {
            return hs_a69925v1OG;
        }
    };
    hs_a70025v1OI.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpeek1125v1OJ.evaluateOnce = function () {
        if (hs_a70025v1OI.notEvaluated) {
            return hs_a70025v1OI.hscall();
        } else {
            return hs_a70025v1OI;
        }
    };
    hs_a70125v1OK.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32);
    };
    hs_zdcpoke1125v1OL.evaluateOnce = function () {
        if (hs_a70125v1OK.notEvaluated) {
            return hs_a70125v1OK.hscall();
        } else {
            return hs_a70125v1OK;
        }
    };
    this.hs_zdfStorableCMode.data = [hs_a69425v1Ow, hs_a69525v1Oy, hs_a69625v1OA, hs_a69725v1OC, hs_a69825v1OE, hs_a69925v1OG, hs_a70025v1OI, hs_a70125v1OK];
    hs_a70225v1OM.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcsucc1125v1ON.evaluateOnce = function () {
        if (hs_a70225v1OM.notEvaluated) {
            return hs_a70225v1OM.hscall();
        } else {
            return hs_a70225v1OM;
        }
    };
    hs_a70325v1OO.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcpred1125v1OP.evaluateOnce = function () {
        if (hs_a70325v1OO.notEvaluated) {
            return hs_a70325v1OO.hscall();
        } else {
            return hs_a70325v1OO;
        }
    };
    hs_a70425v1OQ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdctoEnum1125v1OR.evaluateOnce = function () {
        if (hs_a70425v1OQ.notEvaluated) {
            return hs_a70425v1OQ.hscall();
        } else {
            return hs_a70425v1OQ;
        }
    };
    hs_a70525v1OS.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcfromEnum1125v1OT.evaluateOnce = function () {
        if (hs_a70525v1OS.notEvaluated) {
            return hs_a70525v1OS.hscall();
        } else {
            return hs_a70525v1OS;
        }
    };
    hs_a70625v1OU.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFrom1125v1OV.evaluateOnce = function () {
        if (hs_a70625v1OU.notEvaluated) {
            return hs_a70625v1OU.hscall();
        } else {
            return hs_a70625v1OU;
        }
    };
    hs_a70725v1OW.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThen1125v1OX.evaluateOnce = function () {
        if (hs_a70725v1OW.notEvaluated) {
            return hs_a70725v1OW.hscall();
        } else {
            return hs_a70725v1OW;
        }
    };
    hs_a70825v1OY.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromTo1125v1OZ.evaluateOnce = function () {
        if (hs_a70825v1OY.notEvaluated) {
            return hs_a70825v1OY.hscall();
        } else {
            return hs_a70825v1OY;
        }
    };
    hs_a70925v1P0.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord32);
    };
    hs_zdcenumFromThenTo1125v1P1.evaluateOnce = function () {
        if (hs_a70925v1P0.notEvaluated) {
            return hs_a70925v1P0.hscall();
        } else {
            return hs_a70925v1P0;
        }
    };
    this.hs_zdfEnumCMode.data = [hs_a70225v1OM, hs_a70325v1OO, hs_a70425v1OQ, hs_a70525v1OS, hs_a70625v1OU, hs_a70725v1OW, hs_a70825v1OY, hs_a70925v1P0];
    hs_a71025v1P2.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczp1125v1P3.evaluateOnce = function () {
        if (hs_a71025v1P2.notEvaluated) {
            return hs_a71025v1P2.hscall();
        } else {
            return hs_a71025v1P2;
        }
    };
    hs_a71125v1P4.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczt1125v1P5.evaluateOnce = function () {
        if (hs_a71125v1P4.notEvaluated) {
            return hs_a71125v1P4.hscall();
        } else {
            return hs_a71125v1P4;
        }
    };
    hs_a71225v1P6.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczm1125v1P7.evaluateOnce = function () {
        if (hs_a71225v1P6.notEvaluated) {
            return hs_a71225v1P6.hscall();
        } else {
            return hs_a71225v1P6;
        }
    };
    hs_a71325v1P8.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcnegate1125v1P9.evaluateOnce = function () {
        if (hs_a71325v1P8.notEvaluated) {
            return hs_a71325v1P8.hscall();
        } else {
            return hs_a71325v1P8;
        }
    };
    hs_a71425v1Pa.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcabs1125v1Pb.evaluateOnce = function () {
        if (hs_a71425v1Pa.notEvaluated) {
            return hs_a71425v1Pa.hscall();
        } else {
            return hs_a71425v1Pa;
        }
    };
    hs_a71525v1Pc.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcsignum1125v1Pd.evaluateOnce = function () {
        if (hs_a71525v1Pc.notEvaluated) {
            return hs_a71525v1Pc.hscall();
        } else {
            return hs_a71525v1Pc;
        }
    };
    hs_a71625v1Pe.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcfromInteger1125v1Pf.evaluateOnce = function () {
        if (hs_a71625v1Pe.notEvaluated) {
            return hs_a71625v1Pe.hscall();
        } else {
            return hs_a71625v1Pe;
        }
    };
    hs_a71725v1Pg.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdccompare1125v1Ph.evaluateOnce = function () {
        if (hs_a71725v1Pg.notEvaluated) {
            return hs_a71725v1Pg.hscall();
        } else {
            return hs_a71725v1Pg;
        }
    };
    hs_a71825v1Pi.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczl1125v1Pj.evaluateOnce = function () {
        if (hs_a71825v1Pi.notEvaluated) {
            return hs_a71825v1Pi.hscall();
        } else {
            return hs_a71825v1Pi;
        }
    };
    hs_a71925v1Pk.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczgze1125v1Pl.evaluateOnce = function () {
        if (hs_a71925v1Pk.notEvaluated) {
            return hs_a71925v1Pk.hscall();
        } else {
            return hs_a71925v1Pk;
        }
    };
    hs_a72025v1Pm.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczg1125v1Pn.evaluateOnce = function () {
        if (hs_a72025v1Pm.notEvaluated) {
            return hs_a72025v1Pm.hscall();
        } else {
            return hs_a72025v1Pm;
        }
    };
    hs_a72125v1Po.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdczlze1125v1Pp.evaluateOnce = function () {
        if (hs_a72125v1Po.notEvaluated) {
            return hs_a72125v1Po.hscall();
        } else {
            return hs_a72125v1Po;
        }
    };
    hs_a72225v1Pq.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmax1125v1Pr.evaluateOnce = function () {
        if (hs_a72225v1Pq.notEvaluated) {
            return hs_a72225v1Pq.hscall();
        } else {
            return hs_a72225v1Pq;
        }
    };
    hs_a72325v1Ps.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord32);
    };
    hs_zdcmin1125v1Pt.evaluateOnce = function () {
        if (hs_a72325v1Ps.notEvaluated) {
            return hs_a72325v1Ps.hscall();
        } else {
            return hs_a72325v1Ps;
        }
    };
    hs_a72425v1Pu.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczeze1125v1Pv.evaluateOnce = function () {
        if (hs_a72425v1Pu.notEvaluated) {
            return hs_a72425v1Pu.hscall();
        } else {
            return hs_a72425v1Pu;
        }
    };
    hs_a72525v1Pw.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczsze1125v1Px.evaluateOnce = function () {
        if (hs_a72525v1Pw.notEvaluated) {
            return hs_a72525v1Pw.hscall();
        } else {
            return hs_a72525v1Pw;
        }
    };
    this.hs_zdfEqCMode.data = [hs_a72425v1Pu, hs_a72525v1Pw];
    this.hs_zdfOrdCMode.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCMode, hs_a71725v1Pg, hs_a71825v1Pi, hs_a71925v1Pk, hs_a72025v1Pm, hs_a72125v1Po, hs_a72225v1Pq, hs_a72325v1Ps];
    this.hs_zdfNumCMode.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCMode, $hs.modules.SystemziPosixziTypes.hs_zdfShowCMode, hs_a71025v1P2, hs_a71125v1P4, hs_a71225v1P6, hs_a71325v1P8, hs_a71425v1Pa, hs_a71525v1Pc, hs_a71625v1Pe];
    this.hs_zdfRealCMode.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCMode, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCMode, hs_a69325v1Ou];
    this.hs_zdfIntegralCMode.data = [$hs.modules.SystemziPosixziTypes.hs_zdfRealCMode, $hs.modules.SystemziPosixziTypes.hs_zdfEnumCMode, hs_a68425v1Oc, hs_a68525v1Oe, hs_a68625v1Og, hs_a68725v1Oi, hs_a68825v1Ok, hs_a68925v1Om, hs_a69025v1Oo];
    this.hs_zdfBitsCMode.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCMode, hs_a66725v1NE, hs_a66825v1NG, hs_a66925v1NI, hs_a67025v1NK, hs_a67125v1NM, hs_a67225v1NO, hs_a67325v1NQ, hs_a67425v1NS, hs_a67525v1NU, hs_a67625v1NW, hs_a67725v1NY, hs_a67825v1O0, hs_a67925v1O2, hs_a68025v1O4, hs_a68125v1O6, hs_a68225v1O8, hs_a68325v1Oa];
    hs_a72625v1Py.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdczizazi1025v1Pz.evaluateOnce = function () {
        if (hs_a72625v1Py.notEvaluated) {
            return hs_a72625v1Py.hscall();
        } else {
            return hs_a72625v1Py;
        }
    };
    hs_a72725v1PA.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdczizbzi1025v1PB.evaluateOnce = function () {
        if (hs_a72725v1PA.notEvaluated) {
            return hs_a72725v1PA.hscall();
        } else {
            return hs_a72725v1PA;
        }
    };
    hs_a72825v1PC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcxor1025v1PD.evaluateOnce = function () {
        if (hs_a72825v1PC.notEvaluated) {
            return hs_a72825v1PC.hscall();
        } else {
            return hs_a72825v1PC;
        }
    };
    hs_a72925v1PE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdccomplement1025v1PF.evaluateOnce = function () {
        if (hs_a72925v1PE.notEvaluated) {
            return hs_a72925v1PE.hscall();
        } else {
            return hs_a72925v1PE;
        }
    };
    hs_a73025v1PG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshift1025v1PH.evaluateOnce = function () {
        if (hs_a73025v1PG.notEvaluated) {
            return hs_a73025v1PG.hscall();
        } else {
            return hs_a73025v1PG;
        }
    };
    hs_a73125v1PI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotate1025v1PJ.evaluateOnce = function () {
        if (hs_a73125v1PI.notEvaluated) {
            return hs_a73125v1PI.hscall();
        } else {
            return hs_a73125v1PI;
        }
    };
    hs_a73225v1PK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcbit1025v1PL.evaluateOnce = function () {
        if (hs_a73225v1PK.notEvaluated) {
            return hs_a73225v1PK.hscall();
        } else {
            return hs_a73225v1PK;
        }
    };
    hs_a73325v1PM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcsetBit1025v1PN.evaluateOnce = function () {
        if (hs_a73325v1PM.notEvaluated) {
            return hs_a73325v1PM.hscall();
        } else {
            return hs_a73325v1PM;
        }
    };
    hs_a73425v1PO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcclearBit1025v1PP.evaluateOnce = function () {
        if (hs_a73425v1PO.notEvaluated) {
            return hs_a73425v1PO.hscall();
        } else {
            return hs_a73425v1PO;
        }
    };
    hs_a73525v1PQ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdccomplementBit1025v1PR.evaluateOnce = function () {
        if (hs_a73525v1PQ.notEvaluated) {
            return hs_a73525v1PQ.hscall();
        } else {
            return hs_a73525v1PQ;
        }
    };
    hs_a73625v1PS.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdctestBit1025v1PT.evaluateOnce = function () {
        if (hs_a73625v1PS.notEvaluated) {
            return hs_a73625v1PS.hscall();
        } else {
            return hs_a73625v1PS;
        }
    };
    hs_a73725v1PU.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcbitSizze1025v1PV.evaluateOnce = function () {
        if (hs_a73725v1PU.notEvaluated) {
            return hs_a73725v1PU.hscall();
        } else {
            return hs_a73725v1PU;
        }
    };
    hs_a73825v1PW.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcisSigned1025v1PX.evaluateOnce = function () {
        if (hs_a73825v1PW.notEvaluated) {
            return hs_a73825v1PW.hscall();
        } else {
            return hs_a73825v1PW;
        }
    };
    hs_a73925v1PY.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshiftL1025v1PZ.evaluateOnce = function () {
        if (hs_a73925v1PY.notEvaluated) {
            return hs_a73925v1PY.hscall();
        } else {
            return hs_a73925v1PY;
        }
    };
    hs_a74025v1Q0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcshiftR1025v1Q1.evaluateOnce = function () {
        if (hs_a74025v1Q0.notEvaluated) {
            return hs_a74025v1Q0.hscall();
        } else {
            return hs_a74025v1Q0;
        }
    };
    hs_a74125v1Q2.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotateL1025v1Q3.evaluateOnce = function () {
        if (hs_a74125v1Q2.notEvaluated) {
            return hs_a74125v1Q2.hscall();
        } else {
            return hs_a74125v1Q2;
        }
    };
    hs_a74225v1Q4.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64);
    };
    hs_zdcrotateR1025v1Q5.evaluateOnce = function () {
        if (hs_a74225v1Q4.notEvaluated) {
            return hs_a74225v1Q4.hscall();
        } else {
            return hs_a74225v1Q4;
        }
    };
    hs_a74325v1Q6.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcquot1025v1Q7.evaluateOnce = function () {
        if (hs_a74325v1Q6.notEvaluated) {
            return hs_a74325v1Q6.hscall();
        } else {
            return hs_a74325v1Q6;
        }
    };
    hs_a74425v1Q8.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcrem1025v1Q9.evaluateOnce = function () {
        if (hs_a74425v1Q8.notEvaluated) {
            return hs_a74425v1Q8.hscall();
        } else {
            return hs_a74425v1Q8;
        }
    };
    hs_a74525v1Qa.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcdiv1025v1Qb.evaluateOnce = function () {
        if (hs_a74525v1Qa.notEvaluated) {
            return hs_a74525v1Qa.hscall();
        } else {
            return hs_a74525v1Qa;
        }
    };
    hs_a74625v1Qc.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcmod1025v1Qd.evaluateOnce = function () {
        if (hs_a74625v1Qc.notEvaluated) {
            return hs_a74625v1Qc.hscall();
        } else {
            return hs_a74625v1Qc;
        }
    };
    hs_a74725v1Qe.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcquotRem1025v1Qf.evaluateOnce = function () {
        if (hs_a74725v1Qe.notEvaluated) {
            return hs_a74725v1Qe.hscall();
        } else {
            return hs_a74725v1Qe;
        }
    };
    hs_a74825v1Qg.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdcdivMod1025v1Qh.evaluateOnce = function () {
        if (hs_a74825v1Qg.notEvaluated) {
            return hs_a74825v1Qg.hscall();
        } else {
            return hs_a74825v1Qg;
        }
    };
    hs_a74925v1Qi.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64);
    };
    hs_zdctoInteger1025v1Qj.evaluateOnce = function () {
        if (hs_a74925v1Qi.notEvaluated) {
            return hs_a74925v1Qi.hscall();
        } else {
            return hs_a74925v1Qi;
        }
    };
    hs_a75025v1Qk.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord64);
    };
    hs_zdcminBound1025v1Ql.evaluateOnce = function () {
        if (hs_a75025v1Qk.notEvaluated) {
            return hs_a75025v1Qk.hscall();
        } else {
            return hs_a75025v1Qk;
        }
    };
    hs_a75125v1Qm.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord64);
    };
    hs_zdcmaxBound1025v1Qn.evaluateOnce = function () {
        if (hs_a75125v1Qm.notEvaluated) {
            return hs_a75125v1Qm.hscall();
        } else {
            return hs_a75125v1Qm;
        }
    };
    this.hs_zdfBoundedCIno.data = [hs_a75025v1Qk, hs_a75125v1Qm];
    hs_a75225v1Qo.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord64);
    };
    hs_zdctoRational1225v1Qp.evaluateOnce = function () {
        if (hs_a75225v1Qo.notEvaluated) {
            return hs_a75225v1Qo.hscall();
        } else {
            return hs_a75225v1Qo;
        }
    };
    hs_a75325v1Qq.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcsizzeOf1225v1Qr.evaluateOnce = function () {
        if (hs_a75325v1Qq.notEvaluated) {
            return hs_a75325v1Qq.hscall();
        } else {
            return hs_a75325v1Qq;
        }
    };
    hs_a75425v1Qs.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcalignment1225v1Qt.evaluateOnce = function () {
        if (hs_a75425v1Qs.notEvaluated) {
            return hs_a75425v1Qs.hscall();
        } else {
            return hs_a75425v1Qs;
        }
    };
    hs_a75525v1Qu.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeekElemOff1225v1Qv.evaluateOnce = function () {
        if (hs_a75525v1Qu.notEvaluated) {
            return hs_a75525v1Qu.hscall();
        } else {
            return hs_a75525v1Qu;
        }
    };
    hs_a75625v1Qw.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpokeElemOff1225v1Qx.evaluateOnce = function () {
        if (hs_a75625v1Qw.notEvaluated) {
            return hs_a75625v1Qw.hscall();
        } else {
            return hs_a75625v1Qw;
        }
    };
    hs_a75725v1Qy.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeekByteOff1225v1Qz.evaluateOnce = function () {
        if (hs_a75725v1Qy.notEvaluated) {
            return hs_a75725v1Qy.hscall();
        } else {
            return hs_a75725v1Qy;
        }
    };
    hs_a75825v1QA.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpokeByteOff1225v1QB.evaluateOnce = function () {
        if (hs_a75825v1QA.notEvaluated) {
            return hs_a75825v1QA.hscall();
        } else {
            return hs_a75825v1QA;
        }
    };
    hs_a75925v1QC.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeek1225v1QD.evaluateOnce = function () {
        if (hs_a75925v1QC.notEvaluated) {
            return hs_a75925v1QC.hscall();
        } else {
            return hs_a75925v1QC;
        }
    };
    hs_a76025v1QE.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpoke1225v1QF.evaluateOnce = function () {
        if (hs_a76025v1QE.notEvaluated) {
            return hs_a76025v1QE.hscall();
        } else {
            return hs_a76025v1QE;
        }
    };
    this.hs_zdfStorableCIno.data = [hs_a75325v1Qq, hs_a75425v1Qs, hs_a75525v1Qu, hs_a75625v1Qw, hs_a75725v1Qy, hs_a75825v1QA, hs_a75925v1QC, hs_a76025v1QE];
    hs_a76125v1QG.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcsucc1225v1QH.evaluateOnce = function () {
        if (hs_a76125v1QG.notEvaluated) {
            return hs_a76125v1QG.hscall();
        } else {
            return hs_a76125v1QG;
        }
    };
    hs_a76225v1QI.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcpred1225v1QJ.evaluateOnce = function () {
        if (hs_a76225v1QI.notEvaluated) {
            return hs_a76225v1QI.hscall();
        } else {
            return hs_a76225v1QI;
        }
    };
    hs_a76325v1QK.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdctoEnum1225v1QL.evaluateOnce = function () {
        if (hs_a76325v1QK.notEvaluated) {
            return hs_a76325v1QK.hscall();
        } else {
            return hs_a76325v1QK;
        }
    };
    hs_a76425v1QM.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcfromEnum1225v1QN.evaluateOnce = function () {
        if (hs_a76425v1QM.notEvaluated) {
            return hs_a76425v1QM.hscall();
        } else {
            return hs_a76425v1QM;
        }
    };
    hs_a76525v1QO.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFrom1225v1QP.evaluateOnce = function () {
        if (hs_a76525v1QO.notEvaluated) {
            return hs_a76525v1QO.hscall();
        } else {
            return hs_a76525v1QO;
        }
    };
    hs_a76625v1QQ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromThen1225v1QR.evaluateOnce = function () {
        if (hs_a76625v1QQ.notEvaluated) {
            return hs_a76625v1QQ.hscall();
        } else {
            return hs_a76625v1QQ;
        }
    };
    hs_a76725v1QS.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromTo1225v1QT.evaluateOnce = function () {
        if (hs_a76725v1QS.notEvaluated) {
            return hs_a76725v1QS.hscall();
        } else {
            return hs_a76725v1QS;
        }
    };
    hs_a76825v1QU.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromThenTo1225v1QV.evaluateOnce = function () {
        if (hs_a76825v1QU.notEvaluated) {
            return hs_a76825v1QU.hscall();
        } else {
            return hs_a76825v1QU;
        }
    };
    this.hs_zdfEnumCIno.data = [hs_a76125v1QG, hs_a76225v1QI, hs_a76325v1QK, hs_a76425v1QM, hs_a76525v1QO, hs_a76625v1QQ, hs_a76725v1QS, hs_a76825v1QU];
    hs_a76925v1QW.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczp1225v1QX.evaluateOnce = function () {
        if (hs_a76925v1QW.notEvaluated) {
            return hs_a76925v1QW.hscall();
        } else {
            return hs_a76925v1QW;
        }
    };
    hs_a77025v1QY.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczt1225v1QZ.evaluateOnce = function () {
        if (hs_a77025v1QY.notEvaluated) {
            return hs_a77025v1QY.hscall();
        } else {
            return hs_a77025v1QY;
        }
    };
    hs_a77125v1R0.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczm1225v1R1.evaluateOnce = function () {
        if (hs_a77125v1R0.notEvaluated) {
            return hs_a77125v1R0.hscall();
        } else {
            return hs_a77125v1R0;
        }
    };
    hs_a77225v1R2.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcnegate1225v1R3.evaluateOnce = function () {
        if (hs_a77225v1R2.notEvaluated) {
            return hs_a77225v1R2.hscall();
        } else {
            return hs_a77225v1R2;
        }
    };
    hs_a77325v1R4.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcabs1225v1R5.evaluateOnce = function () {
        if (hs_a77325v1R4.notEvaluated) {
            return hs_a77325v1R4.hscall();
        } else {
            return hs_a77325v1R4;
        }
    };
    hs_a77425v1R6.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcsignum1225v1R7.evaluateOnce = function () {
        if (hs_a77425v1R6.notEvaluated) {
            return hs_a77425v1R6.hscall();
        } else {
            return hs_a77425v1R6;
        }
    };
    hs_a77525v1R8.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcfromInteger1225v1R9.evaluateOnce = function () {
        if (hs_a77525v1R8.notEvaluated) {
            return hs_a77525v1R8.hscall();
        } else {
            return hs_a77525v1R8;
        }
    };
    hs_a77625v1Ra.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdccompare1225v1Rb.evaluateOnce = function () {
        if (hs_a77625v1Ra.notEvaluated) {
            return hs_a77625v1Ra.hscall();
        } else {
            return hs_a77625v1Ra;
        }
    };
    hs_a77725v1Rc.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczl1225v1Rd.evaluateOnce = function () {
        if (hs_a77725v1Rc.notEvaluated) {
            return hs_a77725v1Rc.hscall();
        } else {
            return hs_a77725v1Rc;
        }
    };
    hs_a77825v1Re.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczgze1225v1Rf.evaluateOnce = function () {
        if (hs_a77825v1Re.notEvaluated) {
            return hs_a77825v1Re.hscall();
        } else {
            return hs_a77825v1Re;
        }
    };
    hs_a77925v1Rg.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczg1225v1Rh.evaluateOnce = function () {
        if (hs_a77925v1Rg.notEvaluated) {
            return hs_a77925v1Rg.hscall();
        } else {
            return hs_a77925v1Rg;
        }
    };
    hs_a78025v1Ri.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczlze1225v1Rj.evaluateOnce = function () {
        if (hs_a78025v1Ri.notEvaluated) {
            return hs_a78025v1Ri.hscall();
        } else {
            return hs_a78025v1Ri;
        }
    };
    hs_a78125v1Rk.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdcmax1225v1Rl.evaluateOnce = function () {
        if (hs_a78125v1Rk.notEvaluated) {
            return hs_a78125v1Rk.hscall();
        } else {
            return hs_a78125v1Rk;
        }
    };
    hs_a78225v1Rm.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdcmin1225v1Rn.evaluateOnce = function () {
        if (hs_a78225v1Rm.notEvaluated) {
            return hs_a78225v1Rm.hscall();
        } else {
            return hs_a78225v1Rm;
        }
    };
    hs_a78325v1Ro.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64);
    };
    hs_zdczeze1225v1Rp.evaluateOnce = function () {
        if (hs_a78325v1Ro.notEvaluated) {
            return hs_a78325v1Ro.hscall();
        } else {
            return hs_a78325v1Ro;
        }
    };
    hs_a78425v1Rq.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64);
    };
    hs_zdczsze1225v1Rr.evaluateOnce = function () {
        if (hs_a78425v1Rq.notEvaluated) {
            return hs_a78425v1Rq.hscall();
        } else {
            return hs_a78425v1Rq;
        }
    };
    this.hs_zdfEqCIno.data = [hs_a78325v1Ro, hs_a78425v1Rq];
    this.hs_zdfOrdCIno.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCIno, hs_a77625v1Ra, hs_a77725v1Rc, hs_a77825v1Re, hs_a77925v1Rg, hs_a78025v1Ri, hs_a78125v1Rk, hs_a78225v1Rm];
    this.hs_zdfNumCIno.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCIno, $hs.modules.SystemziPosixziTypes.hs_zdfShowCIno, hs_a76925v1QW, hs_a77025v1QY, hs_a77125v1R0, hs_a77225v1R2, hs_a77325v1R4, hs_a77425v1R6, hs_a77525v1R8];
    this.hs_zdfRealCIno.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCIno, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCIno, hs_a75225v1Qo];
    this.hs_zdfIntegralCIno.data = [$hs.modules.SystemziPosixziTypes.hs_zdfRealCIno, $hs.modules.SystemziPosixziTypes.hs_zdfEnumCIno, hs_a74325v1Q6, hs_a74425v1Q8, hs_a74525v1Qa, hs_a74625v1Qc, hs_a74725v1Qe, hs_a74825v1Qg, hs_a74925v1Qi];
    this.hs_zdfBitsCIno.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCIno, hs_a72625v1Py, hs_a72725v1PA, hs_a72825v1PC, hs_a72925v1PE, hs_a73025v1PG, hs_a73125v1PI, hs_a73225v1PK, hs_a73325v1PM, hs_a73425v1PO, hs_a73525v1PQ, hs_a73625v1PS, hs_a73725v1PU, hs_a73825v1PW, hs_a73925v1PY, hs_a74025v1Q0, hs_a74125v1Q2, hs_a74225v1Q4];
    hs_a78525v1Rs.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord64);
    };
    hs_zdctoRational1325v1Rt.evaluateOnce = function () {
        if (hs_a78525v1Rs.notEvaluated) {
            return hs_a78525v1Rs.hscall();
        } else {
            return hs_a78525v1Rs;
        }
    };
    hs_a78625v1Ru.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcsizzeOf1325v1Rv.evaluateOnce = function () {
        if (hs_a78625v1Ru.notEvaluated) {
            return hs_a78625v1Ru.hscall();
        } else {
            return hs_a78625v1Ru;
        }
    };
    hs_a78725v1Rw.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcalignment1325v1Rx.evaluateOnce = function () {
        if (hs_a78725v1Rw.notEvaluated) {
            return hs_a78725v1Rw.hscall();
        } else {
            return hs_a78725v1Rw;
        }
    };
    hs_a78825v1Ry.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeekElemOff1325v1Rz.evaluateOnce = function () {
        if (hs_a78825v1Ry.notEvaluated) {
            return hs_a78825v1Ry.hscall();
        } else {
            return hs_a78825v1Ry;
        }
    };
    hs_a78925v1RA.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpokeElemOff1325v1RB.evaluateOnce = function () {
        if (hs_a78925v1RA.notEvaluated) {
            return hs_a78925v1RA.hscall();
        } else {
            return hs_a78925v1RA;
        }
    };
    hs_a79025v1RC.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeekByteOff1325v1RD.evaluateOnce = function () {
        if (hs_a79025v1RC.notEvaluated) {
            return hs_a79025v1RC.hscall();
        } else {
            return hs_a79025v1RC;
        }
    };
    hs_a79125v1RE.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpokeByteOff1325v1RF.evaluateOnce = function () {
        if (hs_a79125v1RE.notEvaluated) {
            return hs_a79125v1RE.hscall();
        } else {
            return hs_a79125v1RE;
        }
    };
    hs_a79225v1RG.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpeek1325v1RH.evaluateOnce = function () {
        if (hs_a79225v1RG.notEvaluated) {
            return hs_a79225v1RG.hscall();
        } else {
            return hs_a79225v1RG;
        }
    };
    hs_a79325v1RI.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64);
    };
    hs_zdcpoke1325v1RJ.evaluateOnce = function () {
        if (hs_a79325v1RI.notEvaluated) {
            return hs_a79325v1RI.hscall();
        } else {
            return hs_a79325v1RI;
        }
    };
    this.hs_zdfStorableCDev.data = [hs_a78625v1Ru, hs_a78725v1Rw, hs_a78825v1Ry, hs_a78925v1RA, hs_a79025v1RC, hs_a79125v1RE, hs_a79225v1RG, hs_a79325v1RI];
    hs_a79425v1RK.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcsucc1325v1RL.evaluateOnce = function () {
        if (hs_a79425v1RK.notEvaluated) {
            return hs_a79425v1RK.hscall();
        } else {
            return hs_a79425v1RK;
        }
    };
    hs_a79525v1RM.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcpred1325v1RN.evaluateOnce = function () {
        if (hs_a79525v1RM.notEvaluated) {
            return hs_a79525v1RM.hscall();
        } else {
            return hs_a79525v1RM;
        }
    };
    hs_a79625v1RO.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdctoEnum1325v1RP.evaluateOnce = function () {
        if (hs_a79625v1RO.notEvaluated) {
            return hs_a79625v1RO.hscall();
        } else {
            return hs_a79625v1RO;
        }
    };
    hs_a79725v1RQ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcfromEnum1325v1RR.evaluateOnce = function () {
        if (hs_a79725v1RQ.notEvaluated) {
            return hs_a79725v1RQ.hscall();
        } else {
            return hs_a79725v1RQ;
        }
    };
    hs_a79825v1RS.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFrom1325v1RT.evaluateOnce = function () {
        if (hs_a79825v1RS.notEvaluated) {
            return hs_a79825v1RS.hscall();
        } else {
            return hs_a79825v1RS;
        }
    };
    hs_a79925v1RU.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromThen1325v1RV.evaluateOnce = function () {
        if (hs_a79925v1RU.notEvaluated) {
            return hs_a79925v1RU.hscall();
        } else {
            return hs_a79925v1RU;
        }
    };
    hs_a80025v1RW.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromTo1325v1RX.evaluateOnce = function () {
        if (hs_a80025v1RW.notEvaluated) {
            return hs_a80025v1RW.hscall();
        } else {
            return hs_a80025v1RW;
        }
    };
    hs_a80125v1RY.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord64);
    };
    hs_zdcenumFromThenTo1325v1RZ.evaluateOnce = function () {
        if (hs_a80125v1RY.notEvaluated) {
            return hs_a80125v1RY.hscall();
        } else {
            return hs_a80125v1RY;
        }
    };
    this.hs_zdfEnumCDev.data = [hs_a79425v1RK, hs_a79525v1RM, hs_a79625v1RO, hs_a79725v1RQ, hs_a79825v1RS, hs_a79925v1RU, hs_a80025v1RW, hs_a80125v1RY];
    hs_a80225v1S0.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczp1325v1S1.evaluateOnce = function () {
        if (hs_a80225v1S0.notEvaluated) {
            return hs_a80225v1S0.hscall();
        } else {
            return hs_a80225v1S0;
        }
    };
    hs_a80325v1S2.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczt1325v1S3.evaluateOnce = function () {
        if (hs_a80325v1S2.notEvaluated) {
            return hs_a80325v1S2.hscall();
        } else {
            return hs_a80325v1S2;
        }
    };
    hs_a80425v1S4.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdczm1325v1S5.evaluateOnce = function () {
        if (hs_a80425v1S4.notEvaluated) {
            return hs_a80425v1S4.hscall();
        } else {
            return hs_a80425v1S4;
        }
    };
    hs_a80525v1S6.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcnegate1325v1S7.evaluateOnce = function () {
        if (hs_a80525v1S6.notEvaluated) {
            return hs_a80525v1S6.hscall();
        } else {
            return hs_a80525v1S6;
        }
    };
    hs_a80625v1S8.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcabs1325v1S9.evaluateOnce = function () {
        if (hs_a80625v1S8.notEvaluated) {
            return hs_a80625v1S8.hscall();
        } else {
            return hs_a80625v1S8;
        }
    };
    hs_a80725v1Sa.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcsignum1325v1Sb.evaluateOnce = function () {
        if (hs_a80725v1Sa.notEvaluated) {
            return hs_a80725v1Sa.hscall();
        } else {
            return hs_a80725v1Sa;
        }
    };
    hs_a80825v1Sc.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
    };
    hs_zdcfromInteger1325v1Sd.evaluateOnce = function () {
        if (hs_a80825v1Sc.notEvaluated) {
            return hs_a80825v1Sc.hscall();
        } else {
            return hs_a80825v1Sc;
        }
    };
    hs_a80925v1Se.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdccompare1325v1Sf.evaluateOnce = function () {
        if (hs_a80925v1Se.notEvaluated) {
            return hs_a80925v1Se.hscall();
        } else {
            return hs_a80925v1Se;
        }
    };
    hs_a81025v1Sg.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczl1325v1Sh.evaluateOnce = function () {
        if (hs_a81025v1Sg.notEvaluated) {
            return hs_a81025v1Sg.hscall();
        } else {
            return hs_a81025v1Sg;
        }
    };
    hs_a81125v1Si.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczgze1325v1Sj.evaluateOnce = function () {
        if (hs_a81125v1Si.notEvaluated) {
            return hs_a81125v1Si.hscall();
        } else {
            return hs_a81125v1Si;
        }
    };
    hs_a81225v1Sk.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczg1325v1Sl.evaluateOnce = function () {
        if (hs_a81225v1Sk.notEvaluated) {
            return hs_a81225v1Sk.hscall();
        } else {
            return hs_a81225v1Sk;
        }
    };
    hs_a81325v1Sm.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdczlze1325v1Sn.evaluateOnce = function () {
        if (hs_a81325v1Sm.notEvaluated) {
            return hs_a81325v1Sm.hscall();
        } else {
            return hs_a81325v1Sm;
        }
    };
    hs_a81425v1So.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdcmax1325v1Sp.evaluateOnce = function () {
        if (hs_a81425v1So.notEvaluated) {
            return hs_a81425v1So.hscall();
        } else {
            return hs_a81425v1So;
        }
    };
    hs_a81525v1Sq.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord64);
    };
    hs_zdcmin1325v1Sr.evaluateOnce = function () {
        if (hs_a81525v1Sq.notEvaluated) {
            return hs_a81525v1Sq.hscall();
        } else {
            return hs_a81525v1Sq;
        }
    };
    hs_a81625v1Ss.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64);
    };
    hs_zdczeze1325v1St.evaluateOnce = function () {
        if (hs_a81625v1Ss.notEvaluated) {
            return hs_a81625v1Ss.hscall();
        } else {
            return hs_a81625v1Ss;
        }
    };
    hs_a81725v1Su.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord64);
    };
    hs_zdczsze1325v1Sv.evaluateOnce = function () {
        if (hs_a81725v1Su.notEvaluated) {
            return hs_a81725v1Su.hscall();
        } else {
            return hs_a81725v1Su;
        }
    };
    this.hs_zdfEqCDev.data = [hs_a81625v1Ss, hs_a81725v1Su];
    this.hs_zdfOrdCDev.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCDev, hs_a80925v1Se, hs_a81025v1Sg, hs_a81125v1Si, hs_a81225v1Sk, hs_a81325v1Sm, hs_a81425v1So, hs_a81525v1Sq];
    this.hs_zdfNumCDev.data = [$hs.modules.SystemziPosixziTypes.hs_zdfEqCDev, $hs.modules.SystemziPosixziTypes.hs_zdfShowCDev, hs_a80225v1S0, hs_a80325v1S2, hs_a80425v1S4, hs_a80525v1S6, hs_a80625v1S8, hs_a80725v1Sa, hs_a80825v1Sc];
    this.hs_zdfRealCDev.data = [$hs.modules.SystemziPosixziTypes.hs_zdfNumCDev, $hs.modules.SystemziPosixziTypes.hs_zdfOrdCDev, hs_a78525v1Rs];
    hs_zdctypeOf25v1Sw.evaluate = function (hs_ds26DqoS) {
        var hs_sat26Dqqm = new $hs.Thunk();
        hs_sat26Dqqm.evaluateOnce = function () {
            var hs_sat26Dqqo = new $hs.Thunk();
            hs_sat26Dqqo.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CDev\x00");
            };
            var hs_sat26Dqqp = new $hs.Thunk();
            hs_sat26Dqqp.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("System.Posix.Types\x00");
            };
            var hs_sat26Dqqn = new $hs.Thunk();
            hs_sat26Dqqn.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26Dqqn, hs_sat26Dqqp, hs_sat26Dqqo);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26Dqqm, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCDev.evaluateOnce = function () {
        if (hs_zdctypeOf25v1Sw.notEvaluated) {
            return hs_zdctypeOf25v1Sw.hscall();
        } else {
            return hs_zdctypeOf25v1Sw;
        }
    };
    hs_zdctypeOf125v1SD.evaluate = function (hs_ds26DqoZ) {
        var hs_sat26Dqqq = new $hs.Thunk();
        hs_sat26Dqqq.evaluateOnce = function () {
            var hs_sat26Dqqs = new $hs.Thunk();
            hs_sat26Dqqs.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CIno\x00");
            };
            var hs_sat26Dqqt = new $hs.Thunk();
            hs_sat26Dqqt.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("System.Posix.Types\x00");
            };
            var hs_sat26Dqqr = new $hs.Thunk();
            hs_sat26Dqqr.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26Dqqr, hs_sat26Dqqt, hs_sat26Dqqs);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26Dqqq, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCIno.evaluateOnce = function () {
        if (hs_zdctypeOf125v1SD.notEvaluated) {
            return hs_zdctypeOf125v1SD.hscall();
        } else {
            return hs_zdctypeOf125v1SD;
        }
    };
    hs_zdctypeOf225v1SK.evaluate = function (hs_ds26Dqp6) {
        var hs_sat26Dqqu = new $hs.Thunk();
        hs_sat26Dqqu.evaluateOnce = function () {
            var hs_sat26Dqqw = new $hs.Thunk();
            hs_sat26Dqqw.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CMode\x00");
            };
            var hs_sat26Dqqx = new $hs.Thunk();
            hs_sat26Dqqx.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("System.Posix.Types\x00");
            };
            var hs_sat26Dqqv = new $hs.Thunk();
            hs_sat26Dqqv.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26Dqqv, hs_sat26Dqqx, hs_sat26Dqqw);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26Dqqu, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCMode.evaluateOnce = function () {
        if (hs_zdctypeOf225v1SK.notEvaluated) {
            return hs_zdctypeOf225v1SK.hscall();
        } else {
            return hs_zdctypeOf225v1SK;
        }
    };
    hs_zdctypeOf325v1SR.evaluate = function (hs_ds26Dqpd) {
        var hs_sat26Dqqy = new $hs.Thunk();
        hs_sat26Dqqy.evaluateOnce = function () {
            var hs_sat26DqqA = new $hs.Thunk();
            hs_sat26DqqA.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("COff\x00");
            };
            var hs_sat26DqqB = new $hs.Thunk();
            hs_sat26DqqB.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("System.Posix.Types\x00");
            };
            var hs_sat26Dqqz = new $hs.Thunk();
            hs_sat26Dqqz.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26Dqqz, hs_sat26DqqB, hs_sat26DqqA);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26Dqqy, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCOff.evaluateOnce = function () {
        if (hs_zdctypeOf325v1SR.notEvaluated) {
            return hs_zdctypeOf325v1SR.hscall();
        } else {
            return hs_zdctypeOf325v1SR;
        }
    };
    hs_zdctypeOf425v1SY.evaluate = function (hs_ds26Dqpk) {
        var hs_sat26DqqC = new $hs.Thunk();
        hs_sat26DqqC.evaluateOnce = function () {
            var hs_sat26DqqE = new $hs.Thunk();
            hs_sat26DqqE.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CPid\x00");
            };
            var hs_sat26DqqF = new $hs.Thunk();
            hs_sat26DqqF.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("System.Posix.Types\x00");
            };
            var hs_sat26DqqD = new $hs.Thunk();
            hs_sat26DqqD.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26DqqD, hs_sat26DqqF, hs_sat26DqqE);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26DqqC, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCPid.evaluateOnce = function () {
        if (hs_zdctypeOf425v1SY.notEvaluated) {
            return hs_zdctypeOf425v1SY.hscall();
        } else {
            return hs_zdctypeOf425v1SY;
        }
    };
    hs_zdctypeOf525v1T5.evaluate = function (hs_ds26Dqpr) {
        var hs_sat26DqqG = new $hs.Thunk();
        hs_sat26DqqG.evaluateOnce = function () {
            var hs_sat26DqqI = new $hs.Thunk();
            hs_sat26DqqI.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CSsize\x00");
            };
            var hs_sat26DqqJ = new $hs.Thunk();
            hs_sat26DqqJ.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("System.Posix.Types\x00");
            };
            var hs_sat26DqqH = new $hs.Thunk();
            hs_sat26DqqH.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26DqqH, hs_sat26DqqJ, hs_sat26DqqI);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26DqqG, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCSsizze.evaluateOnce = function () {
        if (hs_zdctypeOf525v1T5.notEvaluated) {
            return hs_zdctypeOf525v1T5.hscall();
        } else {
            return hs_zdctypeOf525v1T5;
        }
    };
    hs_zdctypeOf625v1Tc.evaluate = function (hs_ds26Dqpy) {
        var hs_sat26DqqK = new $hs.Thunk();
        hs_sat26DqqK.evaluateOnce = function () {
            var hs_sat26DqqM = new $hs.Thunk();
            hs_sat26DqqM.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CGid\x00");
            };
            var hs_sat26DqqN = new $hs.Thunk();
            hs_sat26DqqN.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("System.Posix.Types\x00");
            };
            var hs_sat26DqqL = new $hs.Thunk();
            hs_sat26DqqL.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26DqqL, hs_sat26DqqN, hs_sat26DqqM);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26DqqK, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCGid.evaluateOnce = function () {
        if (hs_zdctypeOf625v1Tc.notEvaluated) {
            return hs_zdctypeOf625v1Tc.hscall();
        } else {
            return hs_zdctypeOf625v1Tc;
        }
    };
    hs_zdctypeOf725v1Tj.evaluate = function (hs_ds26DqpF) {
        var hs_sat26DqqO = new $hs.Thunk();
        hs_sat26DqqO.evaluateOnce = function () {
            var hs_sat26DqqQ = new $hs.Thunk();
            hs_sat26DqqQ.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CNlink\x00");
            };
            var hs_sat26DqqR = new $hs.Thunk();
            hs_sat26DqqR.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("System.Posix.Types\x00");
            };
            var hs_sat26DqqP = new $hs.Thunk();
            hs_sat26DqqP.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26DqqP, hs_sat26DqqR, hs_sat26DqqQ);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26DqqO, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCNlink.evaluateOnce = function () {
        if (hs_zdctypeOf725v1Tj.notEvaluated) {
            return hs_zdctypeOf725v1Tj.hscall();
        } else {
            return hs_zdctypeOf725v1Tj;
        }
    };
    hs_zdctypeOf825v1Tq.evaluate = function (hs_ds26DqpM) {
        var hs_sat26DqqS = new $hs.Thunk();
        hs_sat26DqqS.evaluateOnce = function () {
            var hs_sat26DqqU = new $hs.Thunk();
            hs_sat26DqqU.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CUid\x00");
            };
            var hs_sat26DqqV = new $hs.Thunk();
            hs_sat26DqqV.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("System.Posix.Types\x00");
            };
            var hs_sat26DqqT = new $hs.Thunk();
            hs_sat26DqqT.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26DqqT, hs_sat26DqqV, hs_sat26DqqU);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26DqqS, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCUid.evaluateOnce = function () {
        if (hs_zdctypeOf825v1Tq.notEvaluated) {
            return hs_zdctypeOf825v1Tq.hscall();
        } else {
            return hs_zdctypeOf825v1Tq;
        }
    };
    hs_zdctypeOf925v1Tx.evaluate = function (hs_ds26DqpT) {
        var hs_sat26DqqW = new $hs.Thunk();
        hs_sat26DqqW.evaluateOnce = function () {
            var hs_sat26DqqY = new $hs.Thunk();
            hs_sat26DqqY.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CCc\x00");
            };
            var hs_sat26DqqZ = new $hs.Thunk();
            hs_sat26DqqZ.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("System.Posix.Types\x00");
            };
            var hs_sat26DqqX = new $hs.Thunk();
            hs_sat26DqqX.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26DqqX, hs_sat26DqqZ, hs_sat26DqqY);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26DqqW, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCCc.evaluateOnce = function () {
        if (hs_zdctypeOf925v1Tx.notEvaluated) {
            return hs_zdctypeOf925v1Tx.hscall();
        } else {
            return hs_zdctypeOf925v1Tx;
        }
    };
    hs_zdctypeOf1025v1TE.evaluate = function (hs_ds26Dqq0) {
        var hs_sat26Dqr0 = new $hs.Thunk();
        hs_sat26Dqr0.evaluateOnce = function () {
            var hs_sat26Dqr2 = new $hs.Thunk();
            hs_sat26Dqr2.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CSpeed\x00");
            };
            var hs_sat26Dqr3 = new $hs.Thunk();
            hs_sat26Dqr3.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("System.Posix.Types\x00");
            };
            var hs_sat26Dqr1 = new $hs.Thunk();
            hs_sat26Dqr1.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26Dqr1, hs_sat26Dqr3, hs_sat26Dqr2);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26Dqr0, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCSpeed.evaluateOnce = function () {
        if (hs_zdctypeOf1025v1TE.notEvaluated) {
            return hs_zdctypeOf1025v1TE.hscall();
        } else {
            return hs_zdctypeOf1025v1TE;
        }
    };
    hs_zdctypeOf1125v1TL.evaluate = function (hs_ds26Dqq7) {
        var hs_sat26Dqr4 = new $hs.Thunk();
        hs_sat26Dqr4.evaluateOnce = function () {
            var hs_sat26Dqr6 = new $hs.Thunk();
            hs_sat26Dqr6.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CTcflag\x00");
            };
            var hs_sat26Dqr7 = new $hs.Thunk();
            hs_sat26Dqr7.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("System.Posix.Types\x00");
            };
            var hs_sat26Dqr5 = new $hs.Thunk();
            hs_sat26Dqr5.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26Dqr5, hs_sat26Dqr7, hs_sat26Dqr6);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26Dqr4, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCTcflag.evaluateOnce = function () {
        if (hs_zdctypeOf1125v1TL.notEvaluated) {
            return hs_zdctypeOf1125v1TL.hscall();
        } else {
            return hs_zdctypeOf1125v1TL;
        }
    };
    hs_zdctypeOf1225v1TS.evaluate = function (hs_ds26Dqqe) {
        var hs_sat26Dqr8 = new $hs.Thunk();
        hs_sat26Dqr8.evaluateOnce = function () {
            var hs_sat26Dqra = new $hs.Thunk();
            hs_sat26Dqra.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("CRLim\x00");
            };
            var hs_sat26Dqrb = new $hs.Thunk();
            hs_sat26Dqrb.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("System.Posix.Types\x00");
            };
            var hs_sat26Dqr9 = new $hs.Thunk();
            hs_sat26Dqr9.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26Dqr9, hs_sat26Dqrb, hs_sat26Dqra);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26Dqr8, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableCRLim.evaluateOnce = function () {
        if (hs_zdctypeOf1225v1TS.notEvaluated) {
            return hs_zdctypeOf1225v1TS.hscall();
        } else {
            return hs_zdctypeOf1225v1TS;
        }
    };
    hs_zdctypeOf1325v1TZ.evaluate = function (hs_ds26Dqql) {
        var hs_sat26Dqrc = new $hs.Thunk();
        hs_sat26Dqrc.evaluateOnce = function () {
            var hs_sat26Dqre = new $hs.Thunk();
            hs_sat26Dqre.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Fd\x00");
            };
            var hs_sat26Dqrf = new $hs.Thunk();
            hs_sat26Dqrf.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("System.Posix.Types\x00");
            };
            var hs_sat26Dqrd = new $hs.Thunk();
            hs_sat26Dqrd.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26Dqrd, hs_sat26Dqrf, hs_sat26Dqre);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26Dqrc, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableFd.evaluateOnce = function () {
        if (hs_zdctypeOf1325v1TZ.notEvaluated) {
            return hs_zdctypeOf1325v1TZ.hscall();
        } else {
            return hs_zdctypeOf1325v1TZ;
        }
    };
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